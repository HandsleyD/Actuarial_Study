---
normalized_id: shared-pdf-reference-stochastic-differential-equations-an-introduction-with-applications-5th-ed-oksendal-b
exam_code: SHARED
material_scope: stochastic differential equations an introduction with applications 5th ed - oksendal b.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Stochastic Differential Equations An Introduction with Applications 5th ed - Oksendal B.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-stochastic-differential-equations-an-introduction-with-applications-5th-ed-oksendal-b

Bernt Øksendal




Stochastic Differential Equations

An Introduction with Applications
Fifth Edition, Corrected Printing
Springer-Verlag Heidelberg New York




Springer-Verlag
Berlin Heidelberg NewYork
London Paris Tokyo
Hong Kong Barcelona
Budapest
To My Family
Eva, Elise, Anders and Karina
2
The front cover shows four sample paths Xt (ω1 ), Xt (ω2 ), Xt (ω3 ) and Xt (ω4 )
of a geometric Brownian motion Xt (ω), i.e. of the solution of a (1-dimensional)
stochastic differential equation of the form
                  dXt
                      = (r + α · Wt )Xt       t ≥ 0 ; X0 = x
                   dt
where x, r and α are constants and Wt = Wt (ω) is white noise. This process is
often used to model “exponential growth under uncertainty”. See Chapters 5,
10, 11 and 12.
    The figure is a computer simulation for the case x = r = 1, α = 0.6.
The mean value of Xt , E[Xt ] = exp(t), is also drawn. Courtesy of Jan Ubøe,
Stord/Haugesund College.
    We have not succeeded in answering all our problems.
The answers we have found only serve to raise a whole set
of new questions. In some ways we feel we are as confused
as ever, but we believe we are confused on a higher level
and about more important things.

         Posted outside the mathematics reading room,
                                   Tromsø University
Preface to Corrected Printing, Fifth Edition




The main corrections and improvements in this corrected printing are from
Chaper 12. I have benefitted from useful comments from a number of peo-
ple, including (in alphabetical order) Fredrik Dahl, Simone Deparis, Ulrich
Haussmann, Yaozhong Hu, Marianne Huebner, Carl Peter Kirkebø, Niko-
lay Kolev, Takashi Kumagai, Shlomo Levental, Geir Magnussen, Anders
Øksendal, Jürgen Potthoff, Colin Rowat, Stig Sandnes, Lones Smith, Set-
suo Taniguchi and Bjørn Thunestvedt.
    I want to thank them all for helping me making the book better. I also
want to thank Dina Haraldsson for proficient typing.



                                                       Blindern, May 2000
                                                           Bernt Øksendal
VI
Preface to the Fifth Edition




The main new feature of the fifth edition is the addition of a new chapter,
Chapter 12, on applications to mathematical finance. I found it natural to
include this material as another major application of stochastic analysis, in
view of the amazing development in this field during the last 10–20 years.
Moreover, the close contact between the theoretical achievements and the
applications in this area is striking. For example, today very few firms (if
any) trade with options without consulting the Black & Scholes formula!
    The first 11 chapters of the book are not much changed from the previous
edition, but I have continued my efforts to improve the presentation through-
out and correct errors and misprints. Some new exercises have been added.
Moreover, to facilitate the use of the book each chapter has been divided
into subsections. If one doesn’t want (or doesn’t have time) to cover all the
chapters, then one can compose a course by choosing subsections from the
chapters. The chart below indicates what material depends on which sections.



                                       Chapter 1-5           Chapter 6




                 Section                Chapter 7       Section   Chapter 9
     Chapter 8
                   8.6                                    9.1




                                       Chapter 10           Chapter 11




                       Chapter 12   Section
                                     12.3



For example, to cover the first two sections of the new chapter 12 it is recom-
mended that one (at least) covers Chapters 1–5, Chapter 7 and Section 8.6.
VIII


Chapter 10, and hence Section 9.1, are necessary additional background for
Section 12.3, in particular for the subsection on American options.
    In my work on this edition I have benefitted from useful suggestions
from many people, including (in alphabetical order) Knut Aase, Luis Al-
varez, Peter Christensen, Kian Esteghamat, Nils Christian Framstad, Helge
Holden, Christian Irgens, Saul Jacka, Naoto Kunitomo and his group, Sure
Mataramvura, Trond Myhre, Anders Øksendal, Nils Øvrelid, Walter Schacher-
mayer, Bjarne Schielderop, Atle Seierstad, Jan Ubøe, Gjermund Våge and
Dan Zes. I thank them all for their contributions to the improvement of the
book.
    Again Dina Haraldsson demonstrated her impressive skills in typing the
manuscript – and in finding her way in the LATEX jungle! I am very grateful
for her help and for her patience with me and all my revisions, new versions
and revised revisions . . .



                                                    Blindern, January 1998
                                                           Bernt Øksendal
Preface to the Fourth Edition




In this edition I have added some material which is particularly useful for the
applications, namely the martingale representation theorem (Chapter IV),
the variational inequalities associated to optimal stopping problems (Chapter
X) and stochastic control with terminal conditions (Chapter XI). In addition
solutions and extra hints to some of the exercises are now included. Moreover,
the proof and the discussion of the Girsanov theorem have been changed in
order to make it more easy to apply, e.g. in economics. And the presentation
in general has been corrected and revised throughout the text, in order to
make the book better and more useful.
    During this work I have benefitted from valuable comments from several
persons, including Knut Aase, Sigmund Berntsen, Mark H. A. Davis, Helge
Holden, Yaozhong Hu, Tom Lindstrøm, Trygve Nilsen, Paulo Ruffino, Isaac
Saias, Clint Scovel, Jan Ubøe, Suleyman Ustunel, Qinghua Zhang, Tusheng
Zhang and Victor Daniel Zurkowski. I am grateful to them all for their help.
    My special thanks go to Håkon Nyhus, who carefully read large portions
of the manuscript and gave me a long list of improvements, as well as many
other useful suggestions.
    Finally I wish to express my gratitude to Tove Møller and Dina Haralds-
son, who typed the manuscript with impressive proficiency.



Oslo, June 1995                                               Bernt Øksendal
X
Preface to the Third Edition




The main new feature of the third edition is that exercises have been included
to each of the chapters II–XI. The purpose of these exercises is to help the
reader to get a better understanding of the text. Some of the exercises are
quite routine, intended to illustrate the results, while other exercises are
harder and more challenging and some serve to extend the theory.
    I have also continued the effort to correct misprints and errors and to
improve the presentation. I have benefitted from valuable comments and
suggestions from Mark H. A. Davis, Håkon Gjessing, Torgny Lindvall and
Håkon Nyhus, My best thanks to them all.
    A quite noticeable non-mathematical improvement is that the book is
now typed in TE X. Tove Lieberg did a great typing job (as usual) and I am
very grateful to her for her effort and infinite patience.



Oslo, June 1991                                               Bernt Øksendal
XII
Preface to the Second Edition




In the second edition I have split the chapter on diffusion processes in two, the
new Chapters VII and VIII: Chapter VII treats only those basic properties
of diffusions that are needed for the applications in the last 3 chapters. The
readers that are anxious to get to the applications as soon as possible can
therefore jump directly from Chapter VII to Chapters IX, X and XI.
    In Chapter VIII other important properties of diffusions are discussed.
While not strictly necessary for the rest of the book, these properties are
central in today’s theory of stochastic analysis and crucial for many other
applications.
    Hopefully this change will make the book more flexible for the different
purposes. I have also made an effort to improve the presentation at some
points and I have corrected the misprints and errors that I knew about,
hopefully without introducing new ones. I am grateful for the responses that
I have received on the book and in particular I wish to thank Henrik Martens
for his helpful comments.
    Tove Lieberg has impressed me with her unique combination of typing
accuracy and speed. I wish to thank her for her help and patience, together
with Dina Haraldsson and Tone Rasmussen who sometimes assisted on the
typing.



Oslo, August 1989                                               Bernt Øksendal
XIV
Preface to the First Edition




These notes are based on a postgraduate course I gave on stochastic dif-
ferential equations at Edinburgh University in the spring 1982. No previous
knowledge about the subject was assumed, but the presentation is based on
some background in measure theory.
    There are several reasons why one should learn more about stochastic
differential equations: They have a wide range of applications outside mathe-
matics, there are many fruitful connections to other mathematical disciplines
and the subject has a rapidly developing life of its own as a fascinating re-
search field with many interesting unanswered questions.
    Unfortunately most of the literature about stochastic differential equa-
tions seems to place so much emphasis on rigor and completeness that it
scares many nonexperts away. These notes are an attempt to approach the
subject from the nonexpert point of view: Not knowing anything (except ru-
mours, maybe) about a subject to start with, what would I like to know first
of all? My answer would be:
        1) In what situations does the subject arise?
        2) What are its essential features?
        3) What are the applications and the connections to other fields?

I would not be so interested in the proof of the most general case, but rather
in an easier proof of a special case, which may give just as much of the basic
idea in the argument. And I would be willing to believe some basic results
without proof (at first stage, anyway) in order to have time for some more
basic applications.
    These notes reflect this point of view. Such an approach enables us to
reach the highlights of the theory quicker and easier. Thus it is hoped that
these notes may contribute to fill a gap in the existing literature. The course
is meant to be an appetizer. If it succeeds in awaking further interest, the
reader will have a large selection of excellent literature available for the study
of the whole story. Some of this literature is listed at the back.
    In the introduction we state 6 problems where stochastic differential equa-
tions play an essential role in the solution. In Chapter II we introduce the
basic mathematical notions needed for the mathematical model of some of
these problems, leading to the concept of Ito integrals in Chapter III. In
Chapter IV we develop the stochastic calculus (the Ito formula) and in Chap-
XVI


ter V we use this to solve some stochastic differential equations, including the
first two problems in the introduction. In Chapter VI we present a solution
of the linear filtering problem (of which problem 3 is an example), using
the stochastic calculus. Problem 4 is the Dirichlet problem. Although this is
purely deterministic we outline in Chapters VII and VIII how the introduc-
tion of an associated Ito diffusion (i.e. solution of a stochastic differential
equation) leads to a simple, intuitive and useful stochastic solution, which is
the cornerstone of stochastic potential theory. Problem 5 is an optimal stop-
ping problem. In Chapter IX we represent the state of a game at time t by an
Ito diffusion and solve the corresponding optimal stopping problem. The so-
lution involves potential theoretic notions, such as the generalized harmonic
extension provided by the solution of the Dirichlet problem in Chapter VIII.
Problem 6 is a stochastic version of F.P. Ramsey’s classical control problem
from 1928. In Chapter X we formulate the general stochastic control prob-
lem in terms of stochastic differential equations, and we apply the results of
Chapters VII and VIII to show that the problem can be reduced to solving
the (deterministic) Hamilton-Jacobi-Bellman equation. As an illustration we
solve a problem about optimal portfolio selection.
    After the course was first given in Edinburgh in 1982, revised and ex-
panded versions were presented at Agder College, Kristiansand and Univer-
sity of Oslo. Every time about half of the audience have come from the ap-
plied section, the others being so-called “pure” mathematicians. This fruitful
combination has created a broad variety of valuable comments, for which I
am very grateful. I particularly wish to express my gratitude to K.K. Aase,
L. Csink and A.M. Davie for many useful discussions.
    I wish to thank the Science and Engineering Research Council, U.K. and
Norges Almenvitenskapelige Forskningsråd (NAVF), Norway for their finan-
cial support. And I am greatly indebted to Ingrid Skram, Agder College and
Inger Prestbakken, University of Oslo for their excellent typing – and their
patience with the innumerable changes in the manuscript during these two
years.

Oslo, June 1985                                                Bernt Øksendal




Note: Chapters VIII, IX, X of the First Edition have become Chapters IX,
X, XI of the Second Edition.
Table of Contents




1.   Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .          1
     1.1 Stochastic Analogs of Classical Differential Equations . . . . . . .                                          1
     1.2 Filtering Problems . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                2
     1.3 Stochastic Approach to Deterministic Boundary Value Prob-
         lems . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .      2
     1.4 Optimal Stopping . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                  3
     1.5 Stochastic Control . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                4
     1.6 Mathematical Finance . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                      4

2.   Some Mathematical Preliminaries . . . . . . . . . . . . . . . . . . . . . . . . 7
     2.1 Probability Spaces, Random Variables and Stochastic Processes 7
     2.2 An Important Example: Brownian Motion . . . . . . . . . . . . . . . . . 11
     Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 14

3.   Itô Integrals . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .      21
     3.1 Construction of the Itô Integral . . . . . . . . . . . . . . . . . . . . . . . . . .                       21
     3.2 Some properties of the Itô integral . . . . . . . . . . . . . . . . . . . . . . . .                        30
     3.3 Extensions of the Itô integral . . . . . . . . . . . . . . . . . . . . . . . . . . . .                     34
     Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   37

4.   The Itô Formula and the Martingale Representation Theo-
     rem . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 43
     4.1 The 1-dimensional Itô formula . . . . . . . . . . . . . . . . . . . . . . . . . . . 43
     4.2 The Multi-dimensional Itô Formula . . . . . . . . . . . . . . . . . . . . . . . 48
     4.3 The Martingale Representation Theorem . . . . . . . . . . . . . . . . . . 49
     Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 54

5.   Stochastic Differential Equations . . . . . . . . . . . . . . . . . . . . . . . . .                             61
     5.1 Examples and Some Solution Methods . . . . . . . . . . . . . . . . . . . .                                  61
     5.2 An Existence and Uniqueness Result . . . . . . . . . . . . . . . . . . . . . .                              66
     5.3 Weak and Strong Solutions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                       70
     Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   72
XVIII Table of Contents


6.     The Filtering Problem . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 81
       6.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 81
       6.2 The 1-Dimensional Linear Filtering Problem . . . . . . . . . . . . . . . 83
       6.3 The Multidimensional Linear Filtering Problem . . . . . . . . . . . . 102
       Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 103

7.     Diffusions: Basic Properties . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 109
       7.1 The Markov Property . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 109
       7.2 The Strong Markov Property . . . . . . . . . . . . . . . . . . . . . . . . . . . . 112
       7.3 The Generator of an Itô Diffusion . . . . . . . . . . . . . . . . . . . . . . . . 117
       7.4 The Dynkin Formula . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 120
       7.5 The Characteristic Operator . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 122
       Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 124

8.     Other Topics in Diffusion Theory . . . . . . . . . . . . . . . . . . . . . . . . . 133
       8.1 Kolmogorov’s Backward Equation. The Resolvent . . . . . . . . . . 133
       8.2 The Feynman-Kac Formula. Killing . . . . . . . . . . . . . . . . . . . . . . . 137
       8.3 The Martingale Problem . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 140
       8.4 When is an Itô Process a Diffusion? . . . . . . . . . . . . . . . . . . . . . . . 142
       8.5 Random Time Change . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 147
       8.6 The Girsanov Theorem . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 153
       Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 160

9.     Applications to Boundary Value Problems . . . . . . . . . . . . . . . . 167
       9.1 The Combined Dirichlet-Poisson Problem. Uniqueness . . . . . . . 167
       9.2 The Dirichlet Problem. Regular Points . . . . . . . . . . . . . . . . . . . . 169
       9.3 The Poisson Problem . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 181
       Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 188

10. Application to Optimal Stopping . . . . . . . . . . . . . . . . . . . . . . . . . 195
    10.1 The Time-Homogeneous Case . . . . . . . . . . . . . . . . . . . . . . . . . . . . 195
    10.2 The Time-Inhomogeneous Case . . . . . . . . . . . . . . . . . . . . . . . . . . 207
    10.3 Optimal Stopping Problems Involving an Integral . . . . . . . . . . . 212
    10.4 Connection with Variational Inequalities . . . . . . . . . . . . . . . . . . . 214
    Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 218

11. Application to Stochastic Control . . . . . . . . . . . . . . . . . . . . . . . . . 225
    11.1 Statement of the Problem . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 225
    11.2 The Hamilton-Jacobi-Bellman Equation . . . . . . . . . . . . . . . . . . . 227
    11.3 Stochastic control problems with terminal conditions . . . . . . . . 241
    Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 243
                                                                                    Table of Contents               XIX


12. Application to Mathematical Finance . . . . . . . . . . . . . . . . . . . . . 249
    12.1 Market, portfolio and arbitrage . . . . . . . . . . . . . . . . . . . . . . . . . . . 249
    12.2 Attainability and Completeness . . . . . . . . . . . . . . . . . . . . . . . . . . 259
    12.3 Option Pricing . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 267
    Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 288

Appendix A: Normal Random Variables . . . . . . . . . . . . . . . . . . . . . . 295

Appendix B: Conditional Expectation . . . . . . . . . . . . . . . . . . . . . . . . 299

Appendix C: Uniform Integrability and Martingale Conver-
   gence . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 301

Appendix D: An Approximation Result . . . . . . . . . . . . . . . . . . . . . . . 305

Solutions and Additional Hints to Some of the Exercises . . . . . . 309

References . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 317

List of Frequently Used Notation and Symbols . . . . . . . . . . . . . . . 325

Index . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 329
1. Introduction




To convince the reader that stochastic differential equations is an important
subject let us mention some situations where such equations appear and can
be used:


1.1 Stochastic Analogs of Classical Differential
Equations
If we allow for some randomness in some of the coefficients of a differential
equation we often obtain a more realistic mathematical model of the situation.

Problem 1.      Consider the simple population growth model
                  dN
                      = a(t)N (t),         N (0) = N0 (constant)            (1.1.1)
                   dt
where N (t) is the size of the population at time t, and a(t) is the relative
rate of growth at time t. It might happen that a(t) is not completely known,
but subject to some random environmental effects, so that we have

                                a(t) = r(t) + “noise” ,

where we do not know the exact behaviour of the noise term, only its prob-
ability distribution. The function r(t) is assumed to be nonrandom. How do
we solve (1.1.1) in this case?

Problem 2. The charge Q(t) at time t at a fixed point in an electric circuit
satisfies the differential equation
                                1
   L · Q00 (t) + R · Q0 (t) +     · Q(t) = F (t), Q(0) = Q0 , Q0 (0) = I0   (1.1.2)
                                C
where L is inductance, R is resistance, C is capacitance and F (t) the potential
source at time t.
   Again we may have a situation where some of the coefficients, say F (t),
are not deterministic but of the form

                                F (t) = G(t) + “noise” .                    (1.1.3)
2      1. Introduction


How do we solve (1.1.2) in this case?
    More generally, the equation we obtain by allowing randomness in the
coefficients of a differential equation is called a stochastic differential equa-
tion. This will be made more precise later. It is clear that any solution of
a stochastic differential equation must involve some randomness, i.e. we can
only hope to be able to say something about the probability distributions of
the solutions.


1.2 Filtering Problems
Problem 3. Suppose that we, in order to improve our knowledge about
the solution, say of Problem 2, perform observations Z(s) of Q(s) at times
s ≤ t. However, due to inaccuracies in our measurements we do not really
measure Q(s) but a disturbed version of it:
                           Z(s) = Q(s) + “noise” .                        (1.2.1)
So in this case there are two sources of noise, the second coming from the
error of measurement.
    The filtering problem is: What is the best estimate of Q(t) satisfying
(1.1.2), based on the observations Zs in (1.2.1), where s ≤ t ? Intuitively, the
problem is to “filter” the noise away from the observations in an optimal way.
    In 1960 Kalman and in 1961 Kalman and Bucy proved what is now known
as the Kalman-Bucy filter. Basically the filter gives a procedure for estimating
the state of a system which satisfies a “noisy” linear differential equation,
based on a series of “noisy” observations.
    Almost immediately the discovery found applications in aerospace en-
gineering (Ranger, Mariner, Apollo etc.) and it now has a broad range of
applications.
    Thus the Kalman-Bucy filter is an example of a recent mathematical
discovery which has already proved to be useful – it is not just “potentially”
useful.
    It is also a counterexample to the assertion that “applied mathematics
is bad mathematics” and to the assertion that “the only really useful math-
ematics is the elementary mathematics”. For the Kalman-Bucy filter – as
the whole subject of stochastic differential equations – involves advanced,
interesting and first class mathematics.


1.3 Stochastic Approach to Deterministic Boundary
Value Problems
Problem 4. The most celebrated example is the stochastic solution of the
Dirichlet problem:
                                                      1.4 Optimal Stopping    3


    Given a (reasonable) domain U in Rn and a continuous function f on
    the boundary of U, ∂U . Find a function f˜ continuous on the closure
    U of U such that
    (i) f˜ = f on ∂U
    (ii) f˜ is harmonic in U , i.e.
                                    n
                                    X ∂ 2 f˜
                           ∆f˜: =                =0   in U .
                                    i=1
                                          ∂x2i

    In 1944 Kakutani proved that the solution could be expressed in terms
of Brownian motion (which will be constructed in Chapter 2): f˜(x) is the
expected value of f at the first exit point from U of the Brownian motion
starting at x ∈ U .
    It turned out that this was just the tip of an iceberg: For a large class
of semielliptic second order partial differential equations the corresponding
Dirichlet boundary value problem can be solved using a stochastic process
which is a solution of an associated stochastic differential equation.


1.4 Optimal Stopping

Problem 5. Suppose a person has an asset or resource (e.g. a house, stocks,
oil...) that she is planning to sell. The price Xt at time t of her asset on the
open market varies according to a stochastic differential equation of the same
type as in Problem 1:
                         dXt
                             = rXt + αXt · “noise”
                          dt
where r, α are known constants. The discount rate is a known constant ρ. At
what time should she decide to sell?
    We assume that she knows the behaviour of Xs up to the present time t,
but because of the noise in the system she can of course never be sure at the
time of the sale if her choice of time will turn out to be the best. So what
we are searching for is a stopping strategy that gives the best result in the
long run, i.e. maximizes the expected profit when the inflation is taken into
account.
    This is an optimal stopping problem. It turns out that the solution can be
expressed in terms of the solution of a corresponding boundary value problem
(Problem 4), except that the boundary is unknown (free) as well and this is
compensated by a double set of boundary conditions. It can also be expressed
in terms of a set of variational inequalities.
4      1. Introduction


1.5 Stochastic Control

Problem 6 (An optimal portfolio problem).
Suppose that a person has two possible investments:


(i) A risky investment (e.g. a stock), where the price p1 (t) per unit at time
    t satisfies a stochastic differential equation of the type discussed in Prob-
    lem 1:
                              dp1
                                    = (a + α · “noise”)p1                  (1.5.1)
                                dt
    where a > 0 and α ∈ R are constants

(ii) A safe investment (e.g. a bond), where the price p2 (t) per unit at time t
     grows exponentially:
                                    dp2
                                        = bp2                           (1.5.2)
                                     dt
     where b is a constant, 0 < b < a.

    At each instant t the person can choose how large portion (fraction)
    ut of his fortune Xt he wants to place in the risky investment, thereby
    placing (1 − ut )Xt in the safe investment. Given a utility function U and
    a terminal time T the problem is to find the optimal portfolio ut ∈ [0, 1]
    i.e. find the investment distribution ut ; 0 ≤ t ≤ T which maximizes the
                                                                (u)
    expected utility of the corresponding terminal fortune XT :
                                      n h           io
                                                (u)
                                max E U (XT )                            (1.5.3)
                               0≤ut ≤1




1.6 Mathematical Finance

Problem 7 (Pricing of options).
Suppose that at time t = 0 the person in Problem 6 is offered the right (but
without obligation) to buy one unit of the risky asset at a specified price
K and at a specified future time t = T . Such a right is called a European
call option. How much should the person be willing to pay for such an op-
tion? This problem was solved when Fischer Black and Myron Scholes (1973)
used stochastic analysis and an equlibrium argument to compute a theo-
retical value for the price, the now famous Black and Scholes option price
formula. This theoretical value agreed well with the prices that had already
been established as an equilibrium price on the free market. Thus it repre-
sented a triumph for mathematical modelling in finance. It has become an
indispensable tool in the trading of options and other financial derivatives.
In 1997 Myron Scholes and Robert Merton were awarded the Nobel Prize
                                             1.6 Mathematical Finance       5


in Economics for their work related to this formula. (Fischer Black died in
1995.)

    We will return to these problems in later chapters, after having developed
the necessary mathematical machinery. We solve Problem 1 and Problem 2
in Chapter 5. Problems involving filtering (Problem 3) are treated in Chap-
ter 6, the generalized Dirichlet problem (Problem 4) in Chapter 9. Problem 5
is solved in Chapter 10 while stochastic control problems (Problem 6) are dis-
cussed in Chapter 11. Finally we discuss applications to mathematical finance
in Chapter 12.
6   1. Introduction
2. Some Mathematical Preliminaries




2.1 Probability Spaces, Random Variables and
Stochastic Processes
Having stated the problems we would like to solve, we now proceed to find
reasonable mathematical notions corresponding to the quantities mentioned
and mathematical models for the problems. In short, here is a first list of the
notions that need a mathematical interpretation:
(1) A random quantity
(2) Independence
(3) Parametrized (discrete or continuous) families of random quantities
(4) What is meant by a “best” estimate in the filtering problem (Problem 3)
(5) What is meant by an estimate “based on” some observations (Prob-
    lem 3)?
(6) What is the mathematical interpretation of the “noise” terms?
(7) What is the mathematical interpretation of the stochastic differential
    equations?
   In this chapter we will discuss (1)–(3) briefly. In the next chapter we will
consider (6), which leads to the notion of an Itô stochastic integral (7). In
Chapter 6 we will consider (4)–(5).
   The mathematical model for a random quantity is a random variable.
Before we define this, we recall some concepts from general probability theory.
The reader is referred to e.g. Williams (1991) for more information.
Definition 2.1.1. If Ω is a given set, then a σ-algebra F on Ω is a family
F of subsets of Ω with the following properties:

(i) ∅ ∈ F
(ii) F ∈ F ⇒ F C ∈ F, where F C = Ω \ F is the complement of F in Ω
                                 S
                                 ∞
(iii) A1 , A2 , . . . ∈ F ⇒ A: =   Ai ∈ F
                             i=1

   The pair (Ω, F) is called a measurable space. A probability measure P
on a measurable space (Ω, F) is a function P : F −→ [0, 1] such that
(a) P (∅) = 0, P (Ω) = 1
8       2. Some Mathematical Preliminaries


(b) if A1 , A2 , . . . ∈ F and {Ai }∞
                                    i=1 is disjoint (i.e. Ai ∩ Aj = ∅ if i 6= j) then
                                  Ã∞ !           ∞
                                    [           X
                                P      Ai =         P (Ai ) .
                                  i=1          i=1

    The triple (Ω, F, P ) is called a probability space. It is called a complete
probability space if F contains all subsets G of Ω with P -outer measure zero,
i.e. with
                   P ∗ (G): = inf{P (F ); F ∈ F, G ⊂ F } = 0 .
    Any probability space can be made complete simply by adding to F all
sets of outer measure 0 and by extending P accordingly.
    The subsets F of Ω which belong to F are called F-measurable sets. In a
probability context these sets are called events and we use the interpretation
             P (F ) = “the probability that the event F occurs” .
In particular, if P (F ) = 1 we say that “F occurs with probability 1”, or
“almost surely (a.s.)”.
   Given any family U of subsets of Ω there is a smallest σ-algebra HU
containing U , namely
                         \
                  HU = {H; H σ-algebra of Ω, U ⊂ H} .

(See Exercise 2.3.)
    We call HU the σ-algebra generated by U.
    For example, if U is the collection of all open subsets of a topological
space Ω (e.g. Ω = Rn ), then B = HU is called the Borel σ-algebra on Ω and
the elements B ∈ B are called Borel sets. B contains all open sets, all closed
sets, all countable unions of closed sets, all countable intersections of such
countable unions etc.
    If (Ω, F, P ) is a given probability space, then a function Y : Ω → Rn is
called F-measurable if
                      Y −1 (U ): = {ω ∈ Ω; Y (ω) ∈ U } ∈ F
for all open sets U ∈ Rn (or, equivalently, for all Borel sets U ⊂ Rn ).
    If X: Ω → Rn is any function, then the σ-algebra HX generated by X is
the smallest σ-algebra on Ω containing all the sets
                         X −1 (U ) ;     U ⊂ Rn open .
It is not hard to show that
                           HX = {X −1 (B); B ∈ B} ,
where B is the Borel σ-algebra on Rn . Clearly, X will then be HX -measurable
and HX is the smallest σ-algebra with this property.
    The following result is useful. It is a special case of a result sometimes
called the Doob-Dynkin lemma. See e.g. M. M. Rao (1984), Prop. 3, p. 7.
      2.1 Probability Spaces, Random Variables and Stochastic Processes                9


Lemma 2.1.2. If X, Y : Ω → Rn are two given functions,then Y is HX -
measurable if and only if there exists a Borel measurable function g: Rn → Rn
such that
                                   Y = g(X) .
   In the following we let (Ω, F, P ) denote a given complete probability
space. A random variable X is an F-measurable function X: Ω → Rn . Every
random variable induces a probability measure µX on Rn , defined by
                               µX (B) = P (X −1 (B)) .
µX is Rcalled the distribution of X.
   If |X(ω)|dP (ω) < ∞ then the number
      Ω
                                  Z                  Z
                      E[X]: =         X(ω)dP (ω) =        xdµX (x)
                                  Ω                  Rn

is called the expectation of X (w.r.t. P ).
                            n
R More generally, if f : R → R is Borel measurable and
  |f (X(ω))|dP (ω) < ∞ then we have
Ω
                              Z                       Z
                E[f (X)]: =       f (X(ω))dP (ω) =        f (x)dµX (x) .
                              Ω                      Rn

    The mathematical model for independence is the following:
Definition 2.1.3. Two subsets A, B ∈ F are called independent if
                             P (A ∩ B) = P (A) · P (B) .
A collection A = {Hi ; i ∈ I} of families Hi of measurable sets is independent
if
                  P (Hi1 ∩ · · · ∩ Hik ) = P (Hi1 ) · · · P (Hik )
for all choices of Hi1 ∈ Hi1 , · · · , Hik ∈ Hik with different indices i1 , . . . , ik .
    A collection of random variables {Xi ; i ∈ I} is independent if the collec-
tion of generated σ-algebras HXi is independent.
    If two random variables X, Y : Ω → R are independent then
                                  E[XY ] = E[X]E[Y ] ,
provided that E[|X|] < ∞ and E[|Y |] < ∞. (See Exercise 2.5.)
Definition 2.1.4. A stochastic process is a parametrized collection of ran-
dom variables
                                {Xt }t∈T
defined on a probability space (Ω, F, P ) and assuming values in Rn .
10        2. Some Mathematical Preliminaries


    The parameter space T is usually (as in this book) the halfline [0, ∞), but
it may also be an interval [a, b], the non-negative integers and even subsets
of Rn for n ≥ 1. Note that for each t ∈ T fixed we have a random variable

                                 ω → Xt (ω) ;            ω∈Ω.

On the other hand, fixing ω ∈ Ω we can consider the function

                                   t → Xt (ω) ;          t∈T

which is called a path of Xt .
    It may be useful for the intuition to think of t as “time” and each ω
as an individual “particle” or “experiment”. With this picture Xt (ω) would
represent the position (or result) at time t of the particle (experiment) ω.
Sometimes it is convenient to write X(t, ω) instead of Xt (ω). Thus we may
also regard the process as a function of two variables

                                      (t, ω) → X(t, ω)

from T × Ω into Rn . This is often a natural point of view in stochastic
analysis, because (as we shall see) there it is crucial to have X(t, ω) jointly
measurable in (t, ω).
     Finally we note that we may identify each ω with the function t → Xt (ω)
from T into Rn . Thus we may regard Ω as a subset of the space Ω e = (Rn )T of
                            n
all functions from T into R . Then the σ-algebra F will contain the σ-algebra
B generated by sets of the form

             {ω; ω(t1 ) ∈ F1 , · · · , ω(tk ) ∈ Fk } ,     Fi ⊂ Rn Borel sets

(B is the same as the Borel σ-algebra on Ω     e if T = [0, ∞) and Ω
                                                                   e is given
the product topology). Therefore one may also adopt the point of view
that a stochastic process is a probability measure P on the measurable space
((Rn )T , B).
   The (finite-dimensional) distributions of the process X = {Xt }t∈T are
the measures µt1 ,...,tk defined on Rnk , k = 1, 2, . . ., by

     µt1 ,...,tk (F1 × F2 × · · · × Fk ) = P [Xt1 ∈ F1 , · · · , Xtk ∈ Fk ] ;   ti ∈ T .

Here F1 , . . . , Fk denote Borel sets in Rn .
    The family of all finite-dimensional distributions determine many (but
not all) important properties of the process X.
    Conversely, given a family {νt1 ,...,tk ; k ∈ N, ti ∈ T } of probability mea-
sures on Rnk it is important to be able to construct a stochastic process
Y = {Yt }t∈T having νt1 ,...,tk as its finite-dimensional distributions. One
of Kolmogorov’s famous theorems states that this can be done provided
{νt1 ,...,tk } satisfies two natural consistency conditions: (See Lamperti (1977).)
                                  2.2 An Important Example: Brownian Motion                       11


Theorem 2.1.5 (Kolmogorov’s extension theorem).
For all t1 , . . . , tk ∈ T , k ∈ N let νt1 ,...,tk be probability measures on Rnk s.t.

       νtσ(1) ,···,tσ(k) (F1 × · · · × Fk ) = νt1 ,···,tk (Fσ−1 (1) × · · · × Fσ−1 (k) )        (K1)

for all permutations σ on {1, 2, . . . , k} and

 νt1 ,...,tk (F1×· · ·×Fk ) = νt1 ,...,tk ,tk+1 ,...,tk+m (F1×· · ·×Fk ×Rn×· · ·×Rn ) (K2)

for all m ∈ N, where (of course) the set on the right hand side has a total of
k + m factors.
    Then there exists a probability space (Ω, F, P ) and a stochastic process
{Xt } on Ω, Xt : Ω → Rn , s.t.

                 νt1 ,...,tk (F1 × · · · × Fk ) = P [Xt1 ∈ F1 , · · · , Xtk ∈ Fk ] ,

for all ti ∈ T , k ∈ N and all Borel sets Fi .


2.2 An Important Example: Brownian Motion
In 1828 the Scottish botanist Robert Brown observed that pollen grains sus-
pended in liquid performed an irregular motion. The motion was later ex-
plained by the random collisions with the molecules of the liquid. To describe
the motion mathematically it is natural to use the concept of a stochastic
process Bt (ω), interpreted as the position at time t of the pollen grain ω. We
will generalize slightly and consider an n-dimensional analog.
    To construct {Bt }t≥0 it suffices, by the Kolmogorov extension theorem, to
specify a family {νt1 ,...,tk } of probability measures satisfying (K1) and (K2).
These measures will be chosen so that they agree with our observations of
the pollen grain behaviour:
    Fix x ∈ Rn and define
                                                |x − y|2
            p(t, x, y) = (2πt)−n/2 · exp(−               )       for y ∈ Rn , t > 0 .
                                                   2t
If 0 ≤ t1 ≤ t2 ≤ · · · ≤ tk define a measure νt1 ,...,tk on Rnk by

                         νt1 ,...,tk (F1 × · · · × Fk ) =                                  (2.2.1)
        Z
=              p(t1 , x, x1 )p(t2 −t1 , x1 , x2 ) · · · p(tk −tk−1 , xk−1 , xk )dx1 · · · dxk
    F1 ×···×Fk

where we use the notation dy = dy1 · · · dyk for Lebesgue measure and the
convention that p(0, x, y)dy = δx (y), the unit point mass at x.
 R Extend this definition to all finite sequences of ti ’s by using (K1). Since
   p(t, x, y)dy = 1 for all t ≥ 0, (K2) holds, so by Kolmogorov’s theorem
Rn
12      2. Some Mathematical Preliminaries


there exists a probability space (Ω, F, P x ) and a stochastic process {Bt }t≥0
on Ω such that the finite-dimensional distributions of Bt are given by (2.2.1),
i.e.

                                P x (Bt1 ∈ F1 , · · · , Btk ∈ Fk ) =
               Z
       =                p(t1 , x, x1 ) · · · p(tk − tk−1 , xk−1 , xk )dx1 . . . dxk .   (2.2.2)
           F1 ×···×Fk

Definition 2.2.1. Such a process is called (a version of ) Brownian motion
starting at x (observe that P x (B0 = x) = 1).
    The Brownian motion thus defined is not unique, i.e. there exist several
quadruples (Bt , Ω, F, P x ) such that (2.2.2) holds. However, for our purposes
this is not important, we may simply choose any version to work with. As we
shall soon see, the paths of a Brownian motion are (or, more correctly, can be
chosen to be) continuous, a.s. Therefore we may identify (a.a.) ω ∈ Ω with a
continuous function t → Bt (ω) from [0, ∞) into Rn . Thus we may adopt the
point of view that Brownian motion is just the space C([0, ∞), Rn ) equipped
with certain probability measures P x (given by (2.2.1) and (2.2.2) above).
This version is called the canonical Brownian motion. Besides having the
advantage of being intuitive, this point of view is useful for the further anal-
ysis of measures on C([0, ∞), Rn ), since this space is Polish (i.e. a complete
separable metric space). See Stroock and Varadhan (1979).
    We state some basic properties of Brownian motion:
(i)   Bt is a Gaussian process, i.e. for all 0 ≤ t1 ≤ · · · ≤ tk the random variable
      Z = (Bt1 , . . . , Btk ) ∈ Rnk has a (multi)normal distribution. This means
      that there exists a vector M ∈ Rnk and a non-negative definite matrix
      C = [cjm ] ∈ Rnk×nk (the set of all nk × nk-matrices with real entries)
      such that
          h     µ X   nk        ¶i       µ    X                  X         ¶
       E x exp i          uj Zj    = exp − 12     uj cjm um + i      uj Mj   (2.2.3)
                        j=1                          j,m                   j
                                                                √
      for all u = (u1 , . . . , unk ) ∈ Rnk , where i = −1 is the imaginary unit
      and E x denotes expectation with respect to P x . Moreover, if (2.2.3)
      holds then
                           M = E x [Z] is the mean value of Z             (2.2.4)
      and

         cjm = E x [(Zj − Mj )(Zm − Mm )] is the covariance matrix of Z .
                                                                                 (2.2.5)
      (See Appendix A).
      To see that (2.2.3) holds for Z = (Bt1 , . . . , Btk ) we calculate its left hand
      side explicitly by using (2.2.2) (see Appendix A) and obtain (2.2.3) with
                              2.2 An Important Example: Brownian Motion            13


                            M = E x [Z] = (x, x, · · · , x) ∈ Rnk              (2.2.6)

     and                                                       
                               t1 In      t1 In    ···   t1 In 
                              
                                                               
                              
                               t1 In      t2 In    ···   t2 In 
                                                                
                                                                
                            C=
                              
                                 ..         ..             ..  .
                                                                              (2.2.7)
                                                            . 
                               .
                                             .                 
                                                                
                                t1 In      t2 In    ···   tk In
     Hence
                               E x [Bt ] = x       for all t ≥ 0               (2.2.8)
     and

           E x [(Bt − x)2 ] = nt, E x [(Bt − x)(Bs − x)] = n min(s, t) .       (2.2.9)

     Moreover,
                           E x [(Bt − Bs )2 ] = n(t − s) if t ≥ s ,           (2.2.10)
     since

       E x [(Bt − Bs )2 ] = E x [(Bt − x)2 − 2(Bt − x)(Bs − x) + (Bs − x)2 ]
                          = n(t − 2s + s) = n(t − s), when t ≥ s .

(ii) Bt has independent increments, i.e.

                 Bt1 , Bt2 − Bt1 , · · · , Btk − Btk−1 are independent
                                         for all 0 ≤ t1 < t2 · · · < tk .     (2.2.11)

     To prove this we use the fact that normal random variables are inde-
     pendent iff they are uncorrelated. (See Appendix A). So it is enough to
     prove that

             E x [(Bti − Bti−1 )(Btj − Btj−1 )] = 0       when ti < tj ,      (2.2.12)

     which follows from the form of C:

                       E x [Bti Btj − Bti−1 Btj − Bti Btj−1 + Bti−1 Btj−1 ]
                               = n(ti − ti−1 − ti + ti−1 ) = 0 .

      From this we deduce that Bs − Bt is independent of Ft if s > t.
(iii) Finally we ask: Is t → Bt (ω) continuous for almost all ω? Stated like this
      the question does not make sense, because the set H = {ω; t → Bt (ω)
      is continuous} is not measurable with respect to the Borel σ-algebra B
      on (Rn )[0,∞) mentioned above (H involves an uncountable number of
      t’s). However, if modified slightly the question can be given a positive
      answer. To explain this we need the following important concept:
14       2. Some Mathematical Preliminaries


Definition 2.2.2. Suppose that {Xt } and {Yt } are stochastic processes on
(Ω, F, P ). Then we say that {Xt } is a version of (or a modification of) {Yt }
if
                  P ({ω; Xt (ω) = Yt (ω)}) = 1 for all t .
Note that if Xt is a version of Yt , then Xt and Yt have the same finite-
dimensional distributions. Thus from the point of view that a stochastic pro-
cess is a probability law on (Rn )[0,∞) two such processes are the same, but
nevertheless their path properties may be different. (See Exercise 2.9.)
   The continuity question of Brownian motion can be answered by using
another famous theorem of Kolmogorov:
Theorem 2.2.3 (Kolmogorov’s continuity theorem). Suppose that the
process X = {Xt }t≥0 satisfies the following condition: For all T > 0 there
exist positive constants α, β, D such that
           E[|Xt − Xs |α ] ≤ D · |t − s|1+β ;         0 ≤ s, t ≤ T .    (2.2.13)
Then there exists a continuous version of X.
     For a proof see for example Stroock and Varadhan (1979, p. 51).
     For Brownian motion Bt it is not hard to prove that (See Exercise 2.8)
                       E x [|Bt − Bs |4 ] = n(n + 2)|t − s|2 .          (2.2.14)
So Brownian motion satisfies Kolmogorov’s condition (2.2.13) with α = 4,
D = n(n + 2) and β = 1, and therefore it has a continuous version. From now
on we will assume that Bt is such a continuous version.
   Finally we note that
                 (1)       (n)
       If Bt = (Bt , · · · , Bt ) is n-dimensional Brownian motion, then
                                        (j)
       the 1-dimensional processes {Bt }t≥0 , 1 ≤ j ≤ n are independent,
       1-dimensional Brownian motions .                               (2.2.15)


Exercises
2.1.    Suppose that X: Ω → R is a function which assumes only countably
        many values a1 , a2 , . . . ∈ R.
        a) Show that X is a random variable if and only if
                       X −1 (ak ) ∈ F         for all k = 1, 2, . . .   (2.2.16)
        b) Suppose (2.2.16) holds. Show that
                                            ∞
                                            X
                                 E[|X|] =         |ak |P [X = ak ] .    (2.2.17)
                                            k=1
                                                                          Exercises   15


       c) If (2.2.16) holds and E[|X|] < ∞, show that
                                              ∞
                                              X
                                 E[X] =             ak P [X = ak ] .
                                              k=1

       d) If (2.2.16) holds and f : R → R is measurable and bounded, show
          that
                                       ∞
                                       X
                            E[f (X)] =    f (ak )P [X = ak ] .
                                              k=1

2.2.   Let X: Ω → R be a random variable. The distribution function F of
       X is defined by
                             F (x) = P [X ≤ x] .
       a) Prove that F has the following properties:
          (i) 0 ≤ F ≤ 1, lim F (x) = 0, lim F (x) = 1 .
                          x→−∞                      x→∞
          (ii) F is increasing (= non-decreasing).
          (iii) F is right-continuous, i.e. F (x) = lim h→0 F (x + h) .
                                                                h>0

       b) Let g: R → R be measurable such that E[|g(X)|] < ∞. Prove that
                                                Z∞
                                 E[g(X)] =             g(x)dF (x) ,
                                                −∞

          where the integral on the right is interpreted in the Lebesgue-
          Stieltjes sense.
       c) Let p(x) ≥ 0 be a measurable function on R. We say that X has
          the density p if
                                         Zx
                               F (x) =        p(y)dy        for all x .
                                         −∞

          Thus from (2.2.1)–(2.2.2) we know that 1-dimensional Brownian
          motion Bt at time t with B0 = 0 has the density

                                         1        x2
                           p(x) = √          exp(− ); x ∈ R .
                                         2πt      2t

          Find the density of Bt2 .

2.3.   Let {Hi }i∈I be a family of σ-algebras on Ω. Prove that
                                      \
                                 H = {Hi ; i ∈ I}

       is again a σ-algebra.
16     2. Some Mathematical Preliminaries


2.4.   a) Let X: Ω → Rn be a random variable such that

                           E[|X|p ] < ∞            for some p, 0 < p < ∞ .

           Prove Chebychev’s inequality:
                                                1
                          P [|X| ≥ λ] ≤            E[|X|p ]        for all λ ≥ 0 .
                                                λp
                   R               R
           Hint:       |X|p dP ≥       |X|p dP , where A = {ω: |X| ≥ λ} .
                   Ω               A
       b) Suppose there exists k > 0 such that

                                           M = E[exp(k|X|)] < ∞ .

           Prove that P [|X| ≥ λ] ≤ M e−kλ for all λ ≥ 0 .

2.5.   Let X, Y : Ω → R be two independent random variables and assume
       for simplicity that X and Y are bounded. Prove that

                                           E[XY ] = E[X]E[Y ] .
       ³
        Hint: Assume |X| ≤ M , |Y | ≤ N . Approximate X and Y by sim-
                            P
                            m                    P
                                                 n
       ple functions ϕ(ω) =   ai XFi (ω), ψ(ω) =   bj XGj (ω), respectively,
                                   i=1                            j=1
       where Fi = X −1 ([ai , ai+1 )), Gj = Y −1 ([bj , bj+1 )), −M = a0 < a1 <
       . . . < am = M , −N = b0 < b1 < . . . < bn = N . Then
                              X                                  X
               E[X] ≈ E[ϕ] =      ai P (Fi ), E[Y ] ≈ E[ψ] =       bj P (Gj )
                                       i                                        j

       and                                         X                                ´
                        E[XY ] ≈ E[ϕψ] =                 ai bj P (Fi ∩ Gj ) . . .       .
                                                   i,j

2.6.   Let (Ω, F, P ) be a probability space and let A1 , A2 , . . . be sets in F
       such that
                                 X∞
                                      P (Ak ) < ∞ .
                                             k=1

       Prove the Borel-Cantelli lemma:
                                                ∞ [
                                                \ ∞
                                           P(            Ak ) = 0 ,
                                             m=1 k=m

       i.e. the probability that ω belongs to infinitely many A0k s is zero.
                                                                 Exercises   17


2.7.   a) Suppose G1 , G2 , . . . , Gn are disjoint subsets of Ω such that
                                             n
                                             [
                                       Ω=         Gi .
                                            i=1

          Prove that the family G consisting of ∅ and all unions of some (or
          all) of G1 , . . . , Gn constitutes a σ-algebra on Ω.
       b) Prove that any finite σ-algebra F on Ω is of the type described in
          a).
       c) Let F be a finite σ-algebra on Ω and let X: Ω → R be F-
          measurable. Prove that X assumes only finitely many possible
          values. More precisely, there exists a disjoint family of subsets
          F1 , . . . , Fm ∈ F and real numbers c1 , . . . , cm such that
                                           m
                                           X
                                  X(ω) =         ci XFi (ω) .
                                           i=1

2.8.   Let Bt be Brownian motion on R, B0 = 0. Put E = E 0 .
       a) Use (2.2.3) to prove that
                                          1
                         E[eiuBt ] = exp(− u2 t) for all u ∈ R .
                                          2
       b) Use the power series expansion of the exponential function on both
          sides, compare the terms with the same power of u and deduce that

                                       E[Bt4 ] = 3t2

          and more generally that
                             £    ¤  (2k)! k
                            E Bt2k = k     t ;            k∈N.
                                    2 · k!
       c) If you feel uneasy about the lack of rigour in the method in b), you
          can proceed as follows: Prove that (2.2.2) implies that
                                               Z
                                           1            −x
                                                          2

                            E[f (Bt )] = √        f (x)e 2t dx
                                           2πt
                                                 R

          for all functions f such that the integral on the right converges.
          Then apply this to f (x) = x2k and use integration by parts and
          induction on k.
       d) Prove (2.2.14), for example by using b) and induction on n.

2.9.   To illustrate that the (finite-dimensional) distributions alone do not
       give all the information regarding the continuity properties of a pro-
       cess, consider the following example:
18     2. Some Mathematical Preliminaries


      Let (Ω, F, P ) = ([0, ∞), B, µ) where B denotes the Borel σ-algebra on
      [0, ∞) and µ is a probability measure on [0, ∞) with no mass on single
      points. Define                   n
                                         1 if t = ω
                              Xt (ω) =
                                         0 otherwise
      and
                    Yt (ω) = 0 for all (t, ω) ∈ [0, ∞) × [0, ∞) .
      Prove that {Xt } and {Yt } have the same distributions and that Xt is
      a version of Yt . And yet we have that t → Yt (ω) is continuous for all
      ω, while t → Xt (ω) is discontinuous for all ω.

2.10. A stochastic process Xt is called stationary if {Xt } has the same dis-
      tribution as {Xt+h } for any h > 0. Prove that Brownian motion Bt
      has stationary increments, i.e. that the process {Bt+h − Bt }h≥0 has
      the same distribution for all t.

2.11. Prove (2.2.15).

2.12. Let Bt be Brownian motion and fix t0 ≥ 0. Prove that
                            et : = Bt +t − Bt ;
                            B                          t≥0
                                     0       0


      is a Brownian motion.

2.13. Let Bt be 2-dimensional Brownian motion and put
                        Dρ = {x ∈ R2 ; |x| < ρ}        for ρ > 0 .
      Compute
                                    P 0 [Bt ∈ Dρ ] .
2.14. Let Bt be n-dimensional Brownian motion and let K ⊂ Rn have zero
      n-dimensional Lebesgue measure. Prove that the expected total length
      of time that Bt spends in K is zero. (This implies that the Green
      measure associated with Bt is absolutely continuous with respect to
      Lebesgue measure. See Chapter 9).

2.15. Let Bt be n-dimensional Brownian motion starting at 0 and let
      U ∈ Rn×n be a (constant) orthogonal matrix, i.e. U U T = I. Prove that
                                     et : = U Bt
                                     B
      is also a Brownian motion.

2.16. (Brownian scaling). Let Bt be a 1-dimensional Brownian motion
      and let c > 0 be a constant. Prove that
                                   bt : = 1 Bc2 t
                                   B
                                          c
      is also a Brownian motion.
                                                                           Exercises   19


2.17. If Xt (·): Ω → R is a continuous stochastic process, then for p > 0 the
                                           (p)
      p’th variation process of Xt , hX, Xit is defined by
                             X¯                     ¯
               (p)
      hX, Xit (ω) = lim          ¯Xt (ω)−Xt (ω)¯p (limit in probability)
                                      k+1      k
                      ∆tk →0
                               tk ≤t

      where 0 = t1 < t2 < . . . < tn = t and ∆tk = tk+1 − tk . In particular,
      if p = 1 this process is called the total variation process and if p = 2
      this is called the quadratic variation process. (See Exercise 4.7.) For
      Brownian motion Bt ∈ R we now show that the quadratic variation
      process is simply
                                                       (2)
                       hB, Bit (ω) = hB, Bit (ω) = t a.s.

      Proceed as follows:
      a) Define
                                        ∆Bk = Btk+1 − Btk
         and put                               X
                                 Y (t, ω) =            (∆Bk (ω))2 ,
                                               tk ≤t

         Show that             X                             X
                         E[(           (∆Bk )2 − t)2 ] = 2           (∆tk )2
                               tk ≤t                         tk ≤t
                                                 2
         and deduce that Y (t, ·) → t in L (P ) as ∆tk → ∞ .
      b) Use a) to prove that a.a. paths of Brownian motion do not have
         a bounded variation on [0, t], i.e. the total variation of Brownian
         motion is infinite, a.s.
20   2. Some Mathematical Preliminaries
3. Itô Integrals




3.1 Construction of the Itô Integral
We now turn to the question of finding a reasonable mathematical interpre-
tation of the “noise” term in the equation of Problem 1 in the Introduction:
                           dN
                               = (r(t) + “noise”)N (t)
                            dt
or more generally in equations of the form
                      dX
                          = b(t, Xt ) + σ(t, Xt ) · “noise” ,                (3.1.1)
                       dt
where b and σ are some given functions. Let us first concentrate on the case
when the noise is 1-dimensional. It is reasonable to look for some stochastic
process Wt to represent the noise term, so that
                         dX
                             = b(t, Xt ) + σ(t, Xt ) · Wt .                  (3.1.2)
                          dt
Based on many situations, for example in engineering, one is led to assume
that Wt has, at least approximately, these properties:
(i) t1 6= t2 ⇒ Wt1 and Wt2 are independent.
(ii) {Wt } is stationary, i.e. the (joint) distribution of {Wt1 +t , . . . , Wtk +t }
      does not depend on t.
(iii) E[Wt ] = 0 for all t.
   However, it turns out there does not exist any “reasonable” stochastic
process satisfying (i) and (ii): Such a Wt cannot have continuous paths. (See
Exercise 3.11.) If we require E[Wt2 ] = 1 then the function (t, ω) → Wt (ω)
cannot even be measurable, with respect to the σ-algebra B × F, where B is
the Borel σ-algebra on [0, ∞]. (See Kallianpur (1980, p. 10).)
   Nevertheless it is possible to represent Wt as a generalized stochastic
process called the white noise process.
   That the process is generalized means that it can be constructed as a
probability measure on the space S 0 of tempered distributions on [0, ∞),
and not as a probability measure on the much smaller space R[0,∞) , like an
22      3. Itô Integrals


ordinary process can. See e.g. Hida (1980), Adler (1981), Rozanov (1982),
Hida, Kuo, Potthoff and Streit (1993) or Holden, Øksendal, Ubøe and Zhang
(1996).
    We will avoid this kind of construction and rather try to rewrite equation
(3.1.2) in a form that suggests a replacement of Wt by a proper stochastic
process: Let 0 = t0 < t1 < · · · < tm = t and consider a discrete version of
(3.1.2):
               Xk+1 − Xk = b(tk , Xk )∆tk + σ(tk , Xk )Wk ∆tk ,         (3.1.3)
where
                 Xj = X(tj ),        Wk = Wtk ,        ∆tk = tk+1 − tk .
We abandon the Wk -notation and replace Wk ∆tk by ∆Vk = Vtk+1 − Vtk ,
where {Vt }t≥0 is some suitable stochastic process. The assumptions (i), (ii)
and (iii) on Wt suggest that Vt should have stationary independent increments
with mean 0. It turns out that the only such process with continuous paths
is the Brownian motion Bt . (See Knight (1981)). Thus we put Vt = Bt and
obtain from (3.1.3):
                            k−1
                            X                          k−1
                                                       X
               Xk = X0 +            b(tj , Xj )∆tj +         σ(tj , Xj )∆Bj .   (3.1.4)
                            j=0                        j=0

Is it possible to prove that the limit of the right hand side of (3.1.4) exists,
in some sense, when ∆tj → 0? If so, then by applying the usual integration
notation we should obtain
                              Zt                       Zt
                  Xt = X0 +          b(s, Xs )ds + “         σ(s, Xs )dBs ”     (3.1.5)
                                0                      0

and we would adopt as a convention that (3.1.2) really means that Xt =
Xt (ω) is a stochastic process satisfying (3.1.5).
    Thus, in the remainder of this chapter we will prove the existence, in a
certain sense, of
                                Zt
                              “ f (s, ω)dBs (ω)”
                                     0

where Bt (ω) is 1-dimensional Brownian motion starting at the origin, for a
wide class of functions f : [0, ∞] × Ω → R. Then, in Chapter 5, we will return
to the solution of (3.1.5).
    Suppose 0 ≤ S < T and f (t, ω) is given. We want to define

                                    ZT
                                         f (t, ω)dBt (ω) .                      (3.1.6)
                                    S
                                                 3.1 Construction of the Itô Integral       23


It is reasonable to start with a definition for a simple class of functions f
and then extend by some approximation procedure. Thus, let us first assume
that f has the form
                            X
                  φ(t, ω) =    ej (ω) · X[j·2−n ,(j+1)2−n ) (t) ,      (3.1.7)
                                    j≥0

where X denotes the characteristic (indicator) function and n is a natural
number. For such functions it is reasonable to define
                     ZT                        X
                          φ(t, ω)dBt (ω) =           ej (ω)[Btj+1 − Btj ](ω) ,           (3.1.8)
                     S                         j≥0


where                                                                  
                                k · 2−n             if S ≤ k · 2−n ≤ T 
                           (n)
                     tk = tk =      S                if   k · 2−n < S
                                                                       
                                    T                if   k · 2−n > T
However, without any further assumptions on the functions ej (ω) this leads
to difficulties, as the next example shows.
    Here – and in the following – E means the same as E 0 , the expectation
w.r.t. the law P 0 for Brownian motion starting at 0. And P means the same
as P 0 .
Example 3.1.1. Choose
                        X
            φ1 (t, ω) =   Bj·2−n (ω) · X[j·2−n ,(j+1)2−n ) (t)
                                  j≥0
                                  X
                    φ2 (t, ω) =         B(j+1)2−n (ω) · X[j·2−n ,(j+1)2−n ) (t) .
                                  j≥0

Then
                   · ZT                   ¸ X
               E          φ1 (t, ω)dBt (ω) =  E[Btj (Btj+1 − Btj )] = 0 ,
                    0                            j≥0

since {Bt } has independent increments. But

        · ZT                   ¸  X
    E          φ2 (t, ω)dBt (ω) =   E[Btj+1 · (Btj+1 − Btj )]
         0                               j≥0
                                         X
                                   =           E[(Btj+1 − Btj )2 ] = T ,    by (2.2.10) .
                                         j≥0

So, in spite of the fact that both φ1 and φ2 appear to be very reasonable
approximations to
24       3. Itô Integrals


                                 f (t, ω) = Bt (ω) ,
their integrals according to (3.1.8) are not close to each other at all, no matter
how large n is chosen.
    This only reflects the fact that the variations of the paths of Bt are too
big to enable us to define the integral (3.1.6) in the Riemann-Stieltjes sense.
In fact, one can show that the paths t → Bt of Brownian motion are nowhere
differentiable, almost surely (a.s.). (See Breiman (1968)). In particular, the
total variation of the path is infinite, a.s.
    In general it is natural to approximate a given function f (t, ω) by
                            X
                                f (t∗j , ω) · X[tj ,tj+1 ) (t)
                             j

where the points t∗j belong to the intervals [tj , tj+1 ], and then define
RT
 f (t, ω)dBt (ω) as the limit (in a sense that we will explain) of
P
S
     f (t∗j , ω)[Btj+1 − Btj ](ω) as n → ∞. However, the example above shows
j
that – unlike the Riemann-Stieltjes integral – it does make a difference here
what points t∗j we choose. The following two choices have turned out to be
the most useful ones:
1) t∗j = tj (the left end point), which leads to the Itô integral, from now on
   denoted by
                                 ZT
                                    f (t, ω)dBt (ω) ,
                                  S
   and
2) t∗j = (tj +tj+1 )/2 (the mid point), which leads to the Stratonovich integral,
   denoted by
                                ZT
                                   f (t, ω) ◦ dBt (ω) .
                                 S

     (See Protter (1990, Th. V. 5.30)).
     In the end of this chapter we will explain why these choices are the best
and discuss the relations and distinctions between the corresponding inte-
grals.
     In any case one must restrict oneself to a special class of functions f (t, ω)
in (3.1.6), also if they have the particular form (3.1.7), in order to obtain
a reasonable definition of the integral. We will here present Itô’s choice
t∗j = tj . The approximation procedure indicated above will work out success-
fully provided that f has the property that each of the functions ω → f (tj , ω)
only depends on the behaviour of Bs (ω) up to time tj . This leads to the fol-
lowing important concepts:
                                        3.1 Construction of the Itô Integral   25


Definition 3.1.2. Let Bt (ω) be n-dimensional Brownian motion. Then we
              (n)
define Ft = Ft to be the σ-algebra generated by the random variables Bs (·);
s ≤ t. In other words, Ft is the smallest σ-algebra containing all sets of the
form
                    {ω; Bt1 (ω) ∈ F1 , · · · , Btk (ω) ∈ Fk } ,
where tj ≤ t and Fj ⊂ Rn are Borel sets, j ≤ k = 1, 2, . . . (We assume that
all sets of measure zero are included in Ft ).
    One often thinks of Ft as “the history of Bs up to time t”. A function
h(ω) will be Ft -measurable if and only if h can be written as the pointwise
a.e. limit of sums of functions of the form

                          g1 (Bt1 )g2 (Bt2 ) · · · gk (Btk ) ,

where g1 , . . . , gk are bounded continuous functions and tj ≤ t for j ≤ k,
k = 1, 2, . . . . (See Exercise 3.14.) Intuitively, that h is Ft -measurable means
that the value of h(ω) can be decided from the values of Bs (ω) for s ≤ t. For
example, h1 (ω) = Bt/2 (ω) is Ft -measurable, while h2 (ω) = B2t (ω) is not.
    Note that Fs ⊂ Ft for s < t (i.e. {Ft } is increasing) and that Ft ⊂ F for
all t.
Definition 3.1.3. Let {Nt }t≥0 be an increasing family of σ-algebras of sub-
sets of Ω. A process g(t, ω): [0, ∞) × Ω → Rn is called Nt -adapted if for each
t ≥ 0 the function
                                   ω → g(t, ω)
is Nt -measurable.
    Thus the process h1 (t, ω) = Bt/2 (ω) is Ft -adapted, while h2 (t, ω) =
B2t (ω) is not.
    We now describe our class of functions for which the Itô integral will be
defined:
Definition 3.1.4. Let V = V(S, T ) be the class of functions

                            f (t, ω): [0, ∞) × Ω → R

such that
(i)   (t, ω) → f (t, ω) is B × F-measurable, where B denotes the Borel σ-
      algebra on [0, ∞).
(ii) f (t, ω) is Ft -adapted.
        £ RT          ¤
(iii) E f (t, ω)2 dt < ∞.
        S
26     3. Itô Integrals


The Itô Integral
For functions f ∈ V we will now show how to define the Itô integral
                                                 ZT
                               I[f ](ω) =             f (t, ω)dBt (ω) ,
                                                 S

where Bt is 1-dimensional Brownian motion.
   The idea is natural: First we define I[φ] for a simple class of functions
φ. Then we show that each f ∈ V can be approximated
                                               R               (in an appropriate
                                                                        R
sense) by such φ’s and we use this to define f dB as the limit of φdB as
φ → f.
   We now give the details of this construction: A function φ ∈ V is called
elementary if it has the form
                                X
                      φ(t, ω) =    ej (ω) · X[tj ,tj+1 ) (t) .            (3.1.9)
                                             j

Note that since φ ∈ V each function ej must be Ftj -measurable. Thus in
Example 3.1.1 above the function φ1 is elementary while φ2 is not.
    For elementary functions φ(t, ω) we define the integral according to
(3.1.8), i.e.
                  ZT                             X
                       φ(t, ω)dBt (ω) =                ej (ω)[Btj+1 − Btj ](ω) .              (3.1.10)
                  S                              j≥0

Now we make the following important observation:
Lemma 3.1.5 (The Itô isometry). If φ(t, ω) is bounded and elementary
then
          ·µ ZT               ¶2 ¸    · ZT           ¸
                                                  2
        E       φ(t, ω)dBt (ω)     =E      φ(t, ω) dt .       (3.1.11)
                   S                                        S

Proof. Put ∆Bj = Btj+1 − Btj . Then
                                ½
                                             0           if                     i 6= j
            E[ei ej ∆Bi ∆Bj ] =
                                  E[e2j ] · (tj+1 − tj ) if                     i=j
using that ei ej ∆Bi and ∆Bj are independent if i < j. Thus
          ·µ ZT         ¶2 ¸       X                               X
      E           φdB          =         E[ei ej ∆Bi ∆Bj ] =              E[e2j ] · (tj+1 − tj )
             S                     i,j                              j

                                     · ZT         ¸
                               = E           φ2 dt .
                                         S
                                                 3.1 Construction of the Itô Integral     27


The idea is now to use the isometry (3.1.11) to extend the definition from
elementary functions to functions in V. We do this in several steps:

Step 1. Let g ∈ V be bounded and g(·, ω) continuous for each ω. Then there
exist elementary functions φn ∈ V such that

                         · ZT               ¸
                                            2
                     E          (g − φn ) dt → 0             as n → ∞ .
                          S


                                P
Proof. Define φn (t, ω) =            g(tj , ω) · X[tj ,tj+1 ) (t). Then φn is elementary since
                                 j
g ∈ V, and

               ZT
                    (g − φn )2 dt → 0              as n → ∞, for each ω ,
               S

                                                RT
since g(·, ω) is continuous for each ω. Hence E[ (g − φn )2 dt] → 0 as n → ∞,
                                                             S
by bounded convergence.
Step 2. Let h ∈ V be bounded. Then there exist bounded functions gn ∈ V
such that gn (·, ω) is continuous for all ω and n, and

                                     · ZT                ¸
                                 E          (h − gn )2 dt → 0 .
                                       S



Proof. Suppose |h(t, ω)| ≤ M for all (t, ω). For each n let ψn be a non-
negative, continuous function on R such that
(i) ψn (x) = 0 for x ≤ − n1 and x ≥ 0
     and
      R∞
(ii)     ψn (x)dx = 1
    −∞

   Define
                                            Zt
                          gn (t, ω) =            ψn (s − t)h(s, ω)ds .
                                            0

Then gn (·, ω) is continuous for each ω and |gn (t, ω)| ≤ M . Since h ∈ V we
can show that gn (t, ·) is Ft -measurable for all t. (This is a subtle point; see
e.g. Karatzas and Shreve (1991), p. 133 for details.) Moreover,
28      3. Itô Integrals


           ZT
                (gn (s, ω) − h(s, ω))2 ds → 0                    as n → ∞, for each ω ,
           S

since {ψn }n constitutes an approximate identity. (See e.g. Hoffman (1962,
p. 22).) So by bounded convergence
                     · ZT                           ¸
                                                        2
                 E          (h(t, ω) − gn (t, ω)) dt → 0                         as n → ∞ ,
                      S

as asserted.
Step 3. Let f ∈ V. Then there exists a sequence {hn } ⊂ V such that hn is
bounded for each n and
                                 · ZT               ¸
                                                    2
                             E          (f − hn ) dt → 0 as n → ∞ .
                                   S


Proof. Put                       
                                  −n      if  f (t, ω) < −n
                      hn (t, ω) = f (t, ω) if −n ≤ f (t, ω) ≤ n
                                 
                                     n     if   f (t, ω) > n .
Then the conclusion follows by dominated convergence.
   That completes the approximation procedure.
     We are now ready to complete the definition of the Itô integral
                                  ZT
                                        f (t, ω)dBt (ω)         for f ∈ V .
                                  S

If f ∈ V we choose, by Steps 1-3, elementary functions φn ∈ V such that
                                           · ZT               ¸
                                                            2
                                       E          |f − φn | dt → 0 .
                                            S

Then define
                              ZT                                      ZT
               I[f ](ω): =         f (t, ω)dBt (ω): = lim                  φn (t, ω)dBt (ω) .
                                                                n→∞
                              S                                       S

                                                                          © RT                   ª
The limit exists as an element of L2 (P ), since                                 φn (t, ω)dBt (ω) forms a
                                                                            S
Cauchy sequence in L2 (P ), by (3.1.11).
  We summarize this as follows:
                                                               3.1 Construction of the Itô Integral     29


Definition 3.1.6 (The Itô integral). Let f ∈ V(S, T ). Then the Itô inte-
gral of f (from S to T ) is defined by
   ZT                                       ZT
        f (t, ω)dBt (ω) = lim                     φn (t, ω)dBt (ω)            (limit in L2 (P ))    (3.1.12)
                                  n→∞
   S                                        S

where {φn } is a sequence of elementary functions such that
                  · ZT                             ¸
             E           (f (t, ω) − φn (t, ω))2 dt → 0                     as n → ∞ .              (3.1.13)
                   S

    Note that such a sequence {φn } satisfying (3.1.13) exists by Steps 1–3
above. Moreover, by (3.1.11) the limit in (3.1.12) exists and does not depend
on the actual choice of {φn }, as long as (3.1.13) holds. Furthermore, from
(3.1.11) and (3.1.12) we get the following important
Corollary 3.1.7 (The Itô isometry).
      ·µ ZT                      ¶2 ¸            · ZT               ¸
                                                           2
  E           f (t, ω)dBt               =E                f (t, ω)dt       for all f ∈ V(S, T ) .   (3.1.14)
         S                                        S

Corollary 3.1.8. If f (t, ω) ∈ V(S, T ) and fn (t, ω) ∈ V(S, T ) for n = 1, 2, . . .
     £ RT                       ¤
and E (fn (t, ω) − f (t, ω))2 dt → 0 as n → ∞, then
         S

        ZT                                  ZT
             fn (t, ω)dBt (ω) →                  f (t, ω)dBt (ω)            in L2 (P ) as n → ∞ .
        S                                   S

   We illustrate this integral with an example:
Example 3.1.9. Assume B0 = 0. Then
                                            Zt
                                                 Bs dBs = 12 Bt2 − 12 t .
                                            0
                                   P
Proof. Put φn (s, ω) =                  Bj (ω) · X[tj ,tj+1 ) (s), where Bj = Btj . Then

            · Zt                     · X tZj+1
                                        ¸                  ¸
                                  2
        E          (φn − Bs ) ds = E         (Bj − Bs )2 ds
              0                                           j     tj
                         tZj+1
                 X                                X
                                                           1             2
             =                (s − tj )ds =                2 (tj+1 − tj ) → 0         as ∆tj → 0 .
                   j     tj                           j
30          3. Itô Integrals


So by Corollary 3.1.8
                       Zt                                 Zt                        X
                               Bs dBs = lim                    φn dBs = lim             Bj ∆Bj .
                                                 ∆tj →0                    ∆tj →0
                       0                                  0                         j


(See also Exercise 3.13.) Now

                    ∆(Bj2 ) = Bj+1
                               2
                                   − Bj2 = (Bj+1 − Bj )2 + 2Bj (Bj+1 − Bj )
                                = (∆Bj )2 + 2Bj ∆Bj ,

and therefore, since B0 = 0,
                      X            X             X
                Bt2 =    ∆(Bj2 ) =   (∆Bj )2 + 2   Bj ∆Bj
                                        j                          j                j

or                                 X                                      X
                                            Bj ∆Bj = 12 Bt2 − 12           (∆Bj )2 .
                                    j                                       j
     P
Since (∆Bj )2 → t in L2 (P ) as ∆tj → 0 (Exercise 2.17), the result follows.
            j

    The extra term − 12 t shows that the Itô stochastic integral does not behave
like ordinary integrals. In the next chapter we will establish the Itô formula,
which explains the result in this example and which makes it easy to calculate
many stochastic integrals.


3.2 Some properties of the Itô integral
First we observe the following:
Theorem 3.2.1. Let f, g ∈ V(0, T ) and let 0 ≤ S < U < T . Then
       RT                  RU               RT
(i)         f dBt =             f dBt +          f dBt for a.a. ω
       S                   S                 U
       RT                                   RT                RT
(ii)        (cf + g)dBt = c ·                    f dBt +           gdBt (c constant) for a.a. ω
       S                                    S                 S
            £ RT         ¤
(iii) E             f dBt = 0
                S
       RT
(iv)        f dBt is FT -measurable.
       S

Proof. This clearly holds for all elementary functions, so by taking limits we
obtain this for all f, g ∈ V(0, T ).
      An important property of the Itô integral is that it is a martingale:
                                   3.2 Some properties of the Itô integral   31


Definition 3.2.2. A filtration (on (Ω, F)) is a family M = {Mt }t≥0 of
σ-algebras Mt ⊂ F such that

                          0 ≤ s < t ⇒ Ms ⊂ M t

(i.e. {Mt } is increasing). An n-dimensional stochastic process {Mt }t≥0 on
(Ω, F, P ) is called a martingale with respect to a filtration {Mt }t≥0 (and
with respect to P ) if

(i) Mt is Mt -measurable for all t,
(ii) E[|Mt |] < ∞ for all t
      and
(iii) E[Ms |Mt ] = Mt for all s ≥ t.
   Here the expectation in (ii) and the conditional expectation in (iii) is
taken with respect to P = P 0 . (See Appendix B for a survey of conditional
expectation).
Example 3.2.3. Brownian motion Bt in Rn is a martingale w.r.t. the σ-
algebras Ft generated by {Bs ; s ≤ t}, because

              E[|Bt |]2 ≤ E[|Bt |2 ] = |B0 |2 + nt and if s ≥ t then
              E[Bs |Ft ] = E[Bs − Bt + Bt |Ft ]
               = E[Bs − Bt |Ft ] + E[Bt |Ft ] = 0 + Bt = Bt .

Here we have used that E[(Bs − Bt )|Ft ] = E[Bs − Bt ] = 0 since Bs − Bt is
independent of Ft (see (2.2.11) and Theorem B.2.d)) and we have used that
E[Bt |Ft ] = Bt since Bt is Ft -measurable (see Theorem B.2.c)).
   For continuous martingales we have the following important inequality
due to Doob: (See e.g. Stroock and Varadhan (1979), Theorem 1.2.3 or Revuz
and Yor (1991), Theorem II.1.7)

Theorem 3.2.4 (Doob’s martingale inequality). If Mt is a martingale
such that t → Mt (ω) is continuous a.s., then for all p ≥ 1, T ≥ 0 and all
λ>0
                                         1
                   P [ sup |Mt | ≥ λ] ≤ p · E[|MT |p ] .
                      0≤t≤T             λ
   We now use this inequality to prove that the Itô integral

                               Zt
                                    f (s, ω)dBs
                               0

can be chosen to depend continuously on t :
32     3. Itô Integrals


Theorem 3.2.5. Let f ∈ V(0, T ). Then there exists a t-continuous version
of
                 Zt
                    f (s, ω)dBs (ω) ;   0≤t≤T ,
                           0

i.e. there exists a t-continuous stochastic process Jt on (Ω, F, P ) such that
                                Zt
                 P [Jt =             f dB] = 1                   for all t, 0 ≤ t ≤ T .                     (3.2.1)
                                0
                                         P (n)
Proof. Let φn = φn (t, ω) =               ej (ω)X[t(n) ,t(n) ) (t) be elementary functions
                                             j                    j       j+1

such that
                      · ZT                  ¸
                  E            (f − φn )2 dt → 0                          when n → ∞ .
                       0
Put
                                                      Zt
                                In (t, ω) =                φn (s, ω)dBs (ω)
                                                      0
and
                                         Zt
               It = I(t, ω) =                    f (s, ω)dBs (ω) ;                      0≤t≤T .
                                         0

Then In (·, ω) is continuous, for all n. Moreover, In (t, ω) is a martingale with
respect to Ft , for all n :
                                         ·µ Zt                        Zs         ¶¯ ¸
                                                                                  ¯
         E[In (s, ω)|Ft ] = E                         φn dB +               φn dB ¯Ft
                                                  0                   t
                                     Zt                      ·              X                           ¸
                                                                                           (n)
                                =            φn dB + E                                     ej ∆Bj |Ft
                                                                          (n)     (n)
                                     0                            t≤tj          ≤tj+1 ≤s

                                     Zt                     X £   (n)               ¤
                                =            φn dB +         E E[ej ∆Bj |Ft(n) ]|Ft
                                                                                                 j
                                     0                       j

                                     Zt                     X £ (n)                 ¤
                                =            φn dB +         E ej E[∆Bj |Ft(n) ]|Ft
                                                                                                 j
                                     0                       j

                                     Zt
                                =            φn dB = In (t, ω)                                              (3.2.2)
                                     0
                                      3.2 Some properties of the Itô integral            33


when t < s, using Theorem B.3. and Theorem B.2.d).
   Hence In − Im is also an Ft -martingale, so by the martingale inequality
(Theorem 3.2.4) it follows that
         ·                              ¸
                                             1    £                       ¤
       P sup |In (t, ω) − Im (t, ω)| > ² ≤ 2 · E |In (T, ω) − Im (T, ω)|2
           0≤t≤T                             ²
                       · ZT                  ¸
                 1
               = 2E            (φn − φm )2 ds → 0             as m, n → ∞ .
                ²
                           0

Hence we may choose a subsequence nk ↑ ∞ s.t.
              £                                    ¤
            P sup |Ink+1 (t, ω) − Ink (t, ω)| > 2−k < 2−k .
                   0≤t≤T

By the Borel-Cantelli lemma
     £                                                                        ¤
   P sup |Ink+1 (t, ω) − Ink (t, ω)| > 2−k               for infinitely many k = 0 .
       0≤t≤T

So for a.a. ω there exists k1 (ω) such that
            sup |Ink+1 (t, ω) − Ink (t, ω)| ≤ 2−k                 for k ≥ k1 (ω) .
           0≤t≤T

Therefore Ink (t, ω) is uniformly convergent for t ∈ [0, T ], for a.a. ω and so the
limit, denoted by Jt (ω), is t-continuous for t ∈ [0, T ], a.s. Since Ink (t, ·) →
I(t, ·) in L2 [P ] for all t, we must have
                      It = Jt a.s. ,             for all t ∈ [0, T ] .
That completes the proof.                                                                  t
                                                                                           u
                                                             Rt
   From now on we shall always assume that                        f (s, ω)dBs (ω) means a t-
                                                             0
continuous version of the integral.
Corollary 3.2.6. Let f (t, ω) ∈ V(0, T ) for all T . Then
                                            Zt
                                Mt (ω) =         f (s, ω)dBs
                                            0

is a martingale w.r.t. Ft and
                                       · ZT                ¸
       £               1   ¤                            2
     P sup |Mt | ≥ λ ≤ 2 · E                    f (s, ω) ds ;            λ, T > 0 .   (3.2.3)
       0≤t≤T          λ
                                        0

Proof. This follows from (3.2.2), the a.s. t-continuity of Mt and the martin-
gale inequality (Theorem 3.2.4), combined with the Itô isometry (3.1.14).
                                                                           t
                                                                           u
34        3. Itô Integrals


3.3 Extensions of the Itô integral
                 R
The Itô integral f dB can be defined for a larger class of integrands f than
V. First, the measurability condition (ii) of Definition 3.1.4 can be relaxed to
the following:
(ii)’ There exists an increasing family of σ-algebras Ht ; t ≥ 0 such that
      a) Bt is a martingale with respect to Ht and
      b) ft is Ht -adapted.
Note that a) implies that Ft ⊂ Ht . The essence of this extension is that we
can allow ft to depend on more than Ft as long as Bt remains a martingale
with respect to the “history” of fs ; s ≤ t. If (ii)’ holds, then E[Bs −Bt |Ht ] = 0
for all s > t and if we inspect our proofs above, we see that this is sufficient
to carry out the construction of the Itô integral as before.
    The most important example of a situation where (ii)’ applies (and (ii)
doesn’t) is the following:
    Suppose Bt (ω) = Bk (t, ω) is the k’th coordinate of n-dimensional Brown-
                                    (n)
ian motion (B1 , . . . , Bn ). Let Ft be the σ-algebra generated by B1 (s1 , ·), · · ·,
                                                                        (n)
Bn (sn , ·); sk ≤ t. Then Bk (t, ω) is a martingale with respect to Ft because
                                          (n)
Bk (s, ·) − Bk (t, ·) is independent of Ft when s > t. Thus we have now de-
       Rt
                                    (n)
fined f (s, ω)dBk (s, ω) for Ft -adapted integrands f (t, ω). That includes
      0
integrals like        Z                       Z
                          B2 dB1       or         sin(B12 + B22 ) dB2

involving several components of n-dimensional Brownian motion. (Here we
have used the notation dB1 = dB1 (t, ω) etc.)
   This allows us to define the multi-dimensional Itô integral as follows:
Definition 3.3.1. Let B = (B1 , B2 , . . . , Bn ) be n-dimensional Brownian
                 m×n
motion. Then VH       (S, T ) denotes the set of m × n matrices v = [vij (t, ω)]
where each entry vij (t, ω) satisfies (i) and (iii) of Definition 3.1.4 and (ii)’
above, with respect to some filtration H = {Ht }t≥0 .
           m×n
   If v ∈ VH    (S, T ) we define, using matrix notation
                                                          
                  ZT          ZT v11 · · · v1n          dB1
                                    .           ..   .. 
                     vdB =  ..                  .        .
                  S           S    vm1 · · · vmn        dBn
to be the m × 1 matrix (column vector) whose i’th component is the following
sum of (extended) 1-dimensional Itô integrals:

                               n Z
                               X
                                   T

                                       vij (s, ω)dBj (s, ω) .
                               j=1 S
                                             3.3 Extensions of the Itô integral       35

                        (n)
If H = F (n) = {Ft }t≥0 we write V m×n (S, T ) and if m = 1 we write
  n                                                n×1
VH  (S, T ) (respectively V n (S, T )) instead of VH   (S, T ) (respectively
  n×1
V     (S, T )). We also put
                                                \
                    V m×n = V m×n (0, ∞) =          V m×n (0, T ) .
                                                 T >0

     The next extension of the Itô integral consists of weakening condition (iii)
of Definition 3.1.4 to
          · ZT                 ¸
                       2
(iii)’ P       f (s, ω) ds < ∞ = 1 .
            S

Definition 3.3.2. WH (S, T ) denotes the class of processes f (t, ω) ∈ R satis-
fying (i) of Definition
                   T 3.1.4 and (ii)’, (iii)’ above. Similarly to the notation for
                                                                      m×n
V we put WH =          WH (0, T ) and in the matrix case we write WH       (S, T )
                 T >0
etc. If H = F (n) we write W(S, T ) instead of WF (n) (S, T ) etc. If the dimen-
sion is clear from the context we sometimes drop the superscript and write
F for F (n) and so on.
   Let Bt denote 1-dimensional Brownian motion. If f ∈ WH one can show
                                                           Rt
that for all t there exist step functions fn ∈ WH such that |fn − f |2 ds → 0
                                                                    0
in probability, i.e. in measure with respect to P . For such a sequence one has
     Rt
that fn (s, ω)dBs converges in probability to some random variable and the
     0
limit only depends on f , not on the sequence {fn }. Thus we may define

Zt                     Zt
  f (s, ω)dBs (ω) = lim fn (s, ω)dBs (ω) (limit in probability) for f ∈ WH .
                    n→∞
0                             0
                                                                         (3.3.1)
As before there exists a t-continuous version of this integral. See Friedman
(1975, Chap. 4) or McKean (1969, Chap. 2) for details. Note, however, that
this integral is not in general a martingale. See for example Dudley’s Theorem
(Theorem 12.1.5). It is, however, a local martingale. See Karatzas and Shreve
(1991), p. 146. See also Exercise 7.12.

A comparison of Itô and Stratonovich integrals

Let us now return to our original question in this chapter: We have argued
that the mathematical interpretation of the white noise equation
                              dX
                                  = b(t, Xt ) + σ(t, Xt ) · Wt                     (3.3.2)
                               dt
36     3. Itô Integrals


is that Xt is a solution of the integral equation
                                 Zt                           Zt
                    Xt = X0 +         b(s, Xs )ds + “              σ(s, Xs )dBs ” ,              (3.3.3)
                                 0                            0

for some suitable interpretation of the last integral in (3.3.3). However, as
indicated earlier, the Itô interpretation of an integral of the form
                                          Zt
                                      “        f (s, ω)dBs (ω)”                                      (∗)
                                          0

is just one of several reasonable choices. For example, the Stratonovich in-
tegral is another possibility, leading (in general) to a different result. So the
question still remains: Which interpretation of (∗) makes (3.3.3) the “right”
mathematical model for the equation (3.3.2)? Here is an argument that in-
dicates that the Stratonovich interpretation in some situations may be the
                                                                         (n)
most appropriate: Choose t-continuously differentiable processes Bt such
that for a.a. ω
                     B (n) (t, ω) → B(t, ω)     as n → ∞
                                                                                  (n)
uniformly (in t) in bounded intervals. For each ω let Xt (ω) be the solution
of the corresponding (deterministic) differential equation
                                                                       (n)
                           dXt                        dB
                               = b(t, Xt ) + σ(t, Xt ) t                      .                  (3.3.4)
                            dt                         dt
        (n)
Then Xt (ω) converges to some function Xt (ω) in the same sense: For a.a.
                    (n)
ω we have that Xt (ω) → Xt (ω) as n → ∞, uniformly (in t) in bounded
intervals.
    It turns out (see Wong and Zakai (1969) and Sussman (1978)) that this so-
lution Xt coincides with the solution of (3.3.3) obtained by using Stratonovich
integrals, i.e.
                                 Zt                       Zt
                    Xt = X0 +             b(s, Xs )ds +           σ(s, Xs ) ◦ dBs .              (3.3.5)
                                 0                        0

This implies that Xt is the solution of the following modified Itô equation:
              Zt                      Zt                                 Zt
 Xt = X0 +         b(s, Xs )ds + 21        σ 0 (s, Xs )σ(s, Xs )ds +              σ(s, Xs )dBs , (3.3.6)
              0                       0                                   0

where σ 0 denotes the derivative of σ(t, x) with respect to x. (See Stratonovich
(1966)).
                                                                           Exercises       37


   Therefore, from this point of view it seems reasonable to use (3.3.6) (i.e.
the Stratonovich interpretation) – and not the Itô interpretation

                               Zt                   Zt
                  Xt = X0 +         b(s, Xs )ds +           σ(s, Xs )dBs               (3.3.7)
                               0                    0

as the model for the original white noise equation (3.3.2).
     On the other hand, the specific feature of the Itô model of “not looking
into the future” (as explained after Example 3.1.1) seems to be a reason for
choosing the Itô interpretation in many cases, for example in biology (see the
discussion in Turelli (1977)). The difference between the two interpretations
is illustrated in Example 5.1.1. Note that (3.3.6) and (3.3.7) coincide if σ(t, x)
does not depend on x. For example, this is the situation in the linear case
handled in the filtering problem in Chapter 6.
     In any case, because of the explicit connection (3.3.6) between the two
models (and a similar connection in higher dimensions – see (6.1.3)), it will
for many purposes suffice to do the general mathematical treatment for one
of the two types of integrals. In general one can say that the Stratonovich
integral has the advantage of leading to ordinary chain rule formulas under a
transformation (change of variable), i.e. there are no second order terms in the
Stratonovich analogue of the Itô transformation formula (see Theorems 4.1.2
and 4.2.1). This property makes the Stratonovich integral natural to use for
example in connection with stochastic differential equations on manifolds (see
Elworthy (1982) or Ikeda and Watanabe (1989)).
     However, Stratonovich integrals are not martingales, as we have seen that
Itô integrals are. This gives the Itô integral an important computational
advantage, even though it does not behave so nicely under transformations
(as Example 3.1.9 shows). For our purposes the Itô integral will be most
convenient, so we will base our discussion on that from now on.


Exercises

Unless otherwise stated Bt denotes Brownian motion in R, B0 = 0.
3.1.   Prove directly from the definition of Itô integrals (Definition 3.1.6)
       that
                            Zt               Zt
                               sdBs = tBt − Bs ds .
                               0                        0

       (Hint: Note that
                    X                   X                    X
                          ∆(sj Bj ) =        sj ∆Bj +             Bj+1 ∆sj .)
                      j                  j                    j
38     3. Itô Integrals


3.2.   Prove directly from the definition of Itô integrals that
                               Zt                         Zt
                                    Bs2 dBs = 13 Bt3 −         Bs ds .
                               0                          0

                                                                         (X)
3.3.   If Xt : Ω → Rn is a stochastic process, let Ht = Ht denote the σ-
                                                     (X)
       algebra generated by {Xs (·); s ≤ t} (i.e. {Ht }t≥0 is the filtration of
       the process {Xt }t≥0 ).
       a) Show that if Xt is a martingale w.r.t. some filtration {Nt }t≥0 , then
                                                               (X)
          Xt is also a martingale w.r.t. its own filtration {Ht }t≥0 .
                                                    (X)
       b) Show that if Xt is a martingale w.r.t Ht , then

                            E[Xt ] = E[X0 ]              for all t ≥ 0 .               (∗)

       c) Give an example of a stochastic process Xt satisfying (∗) and which
          is not a martingale w.r.t. its own filtration.
3.4.   Check whether the following processes Xt are martingales w.r.t. {Ft }:
       (i) Xt = Bt + 4t
       (ii) Xt = Bt2
                           Rt
       (iii) Xt = t2 Bt − 2 sBs ds
                           0
       (iv) Xt = B1 (t)B2 (t), where (B1 (t), B2 (t)) is 2-dimensional Brownian
            motion.
3.5.   Prove directly (without using Example 3.1.9) that

                                            Mt = Bt2 − t

       is an Ft -martingale.
3.6.   Prove that Nt = Bt3 − 3tBt is a martingale.
3.7.   A famous result of Itô (1951) gives the following formula for n times
       iterated Itô integrals:
                Z       Z Z                                   µ ¶
                                                           n   Bt
             n! · · · ( (       dBu1 )dBu2 ) · · · dBun = t hn √
                                                           2
                                                                       (3.3.8)
                                                                 t
               0≤u1 ≤···≤un ≤t

       where hn is the Hermite polynomial of degree n, defined by
                                       x2    dn ¡ − x22 ¢
                  hn (x) = (−1)n e 2             e        ;       n = 0, 1, 2, . . .
                                            dxn
       (Thus h0 (x) = 1, h1 (x) = x, h2 (x) = x2 − 1, h3 (x) = x3 − 3x.)
       a) Verify that in each of these n Itô integrals the integrand satisfies
          the requirements in Definition 3.1.4.
                                                                          Exercises       39


       b) Verify formula (3.3.8) for n = 1, 2, 3 by combining Example 3.1.9
          and Exercise 3.2.
       c) Use b) to give a new proof of the statement in Exercise 3.6.
3.8.   a) Let Y be a real valued random variable on (Ω, F, P ) such that

                                             E[|Y |] < ∞ .

            Define
                                   Mt = E[Y |Ft ] ;            t≥0.
          Show that Mt is an Ft -martingale.
       b) Conversely, let Mt ; t ≥ 0 be a real valued Ft -martingale such that

                            sup E[|Mt |p ] < ∞           for some p > 1 .
                             t≥0


            Show that there exists Y ∈ L1 (P ) such that

                                            Mt = E[Y |Ft ] .

            (Hint: Use Corollary C.7.)
3.9.   Suppose f ∈ V(0, T ) and that t → f (t, ω) is continuous for a.a. ω.
       Then we have shown that
                ZT                               X
                     f (t, ω)dBt (ω) = lim            f (tj , ω)∆Bj     in L2 (P ) .
                                        ∆tj →0
                0                                 j


       Similarly we define the Stratonovich integral of f by

       ZT                               X
            f (t, ω)◦dBt (ω) = lim          f (t∗j , ω)∆Bj ,    where t∗j = 12 (tj + tj+1 ) ,
                               ∆tj →0
       0                                j


       whenever the limit exists in L2 (P ). In general these integrals are dif-
       ferent. For example, compute

                                            ZT
                                                 Bt ◦ dBt
                                            0

       and compare with Example 3.1.9.
3.10. If the function f in Exercise 3.9 varies “smoothly” with t then in fact
      the Itô and Stratonovich integrals of f coincide. More precisely, assume
      that there exists K < ∞ and ² > 0 such that

                 E[|f (s, ·) − f (t, ·)|2 ] ≤ K|s − t|1+² ;       0≤s, t≤T .
40     3. Itô Integrals


      Prove that then we have
            ZT                                  X
                 f (t, ω)dBt = lim                  f (t0j , ω)∆Bj        (limit in L1 (P ))
                                       ∆tj →0
            0                                   j


      for any choice of t0j ∈ [tj , tj+1 ]. In particular,

                                  ZT                    ZT
                                       f (t, ω)dBt =         f (t, ω) ◦ dBt .
                                  0                      0
                       £ P               P                ¤
      (Hint: Consider E | f (tj , ω)∆Bj − f (t0j , ω)∆Bj | .)
                                       j                      j
3.11. Let Wt be a stochastic process satisfying (i), (ii) and (iii) (below
      (3.1.2)). Prove that Wt cannot have continuous paths. (Hint: Consider
            (N )     (N )
      E[(Wt − Ws )2 ], where
                           (N )
                     Wt           = (−N ) ∨ (N ∧ Wt ), N = 1, 2, 3, . . .) .

3.12. As in Exercise 3.9 we let ◦dBt denote Stratonovich differentials.
      (i) Use (3.3.6) to transform the following Stratonovich differential
           equations into Itô differential equations:
           (a) dXt = γXt dt + αXt ◦ dBt
           (b) dXt = sin Xt cos Xt dt + (t2 + cos Xt ) ◦ dBt
      (ii) Transform the following Itô differential equations into Stratonovich
           differential equations:
           (a) dXt = rXt dt + αXt dBt
           (b) dXt = 2e−Xt dt + Xt2 dBt
3.13. A stochastic process Xt (·): Ω → R is continuous in mean square if
      E[Xt2 ] < ∞ for all t and

                       lim E[(Xs − Xt )2 ] = 0                    for all t ≥ 0 .
                       s→t

      a) Prove that Brownian motion Bt is continuous in mean square.
      b) Let f : R → R be a Lipschitz continuous function, i.e. there exists
         C < ∞ such that

                      |f (x) − f (y)| ≤ C|x − y|                     for all x, y ∈ R .

          Prove that
                                                    Yt : = f (Bt )
          is continuous in mean square.
                                                                                     Exercises        41


      c) Let Xt be a stochastic process which is continuous in mean square
         and assume that Xt ∈ V(S, T ), T < ∞. Show that
                  ZT                       ZT
                       Xt dBt = lim             φn (t, ω)dBt (ω)               (limit in L2 (P ))
                                   n→∞
                  S                        S

         where
                                     X
                       φn (t, ω) =         Xt(n) (ω)X[t(n) ,t(n) ) (t) ,            T <∞.
                                                j           j       j+1
                                       j

         (Hint: Consider
                                                                         (n)
                       · ZT                        · X tZj+1
                                                    ¸                      ¸
                                           2                            2
                  E           (Xt − φn (t)) dt = E         (Xt − Xt(n) ) dt ) .
                                                                                     j
                        S                                       j    (n)
                                                                    tj


3.14. Show that a function h(ω) is Ft -measurable if and only if h is a point-
      wise limit (for a.a. ω) of sums of functions of the form
                                    g1 (Bt1 ) · g2 (Bt2 ) · · · gk (Btk )
      where g1 , . . . , gk are bounded continuous functions and tj ≤ t for j ≤ k,
      k = 1, 2, . . .
      Hint: Complete the following steps:
      a) We may assume that h is bounded.
                                                              (n)
      b) For n = 1, 2, . . . and j = 1, 2, . . . put tj = tj = j · 2−n . For
         fixed n let Hn be the σ-algebra generated by {Btj (·)}tj ≤t . Then by
         Corollary C.9
                   h = E[h|Ft ] = lim E[h|Hn ]                       (pointwise a.e. limit)
                                           n→∞

      c) Define hn : = E[h|Hn ]. Then by the Doob-Dynkin lemma (Lemma
         2.1.2) we have
                                   hn (ω) = Gn (Bt1 (ω), . . . , Btk (ω))
         for some Borel function Gn:Rk → R, where k = max{j; j · 2−n ≤ t}.
         Now use that any Borel function G: Rk → R can be approximated
         pointwise a.e. by a continuous function F : Rk → R and complete
         the proof by applying the Stone-Weierstrass theorem.
3.15. Suppose f, g ∈ V(S, T ) and that there exist constants C, D such that
              ZT                                    ZT
         C+           f (t, ω)dBt (ω) = D +              g(t, ω)dBt (ω)            for a.a. ω ∈ Ω .
              S                                     S
42     3. Itô Integrals


      Show that
                                          C=D
      and
                   f (t, ω) = g(t, ω)     for a.a. (t, ω) ∈ [S, T ] × Ω .
3.16. Let X: Ω → R be a random variable such that E[X 2 ] < ∞ and let
      H ⊂ F be a σ-algebra. Show that
                             £        ¤
                           E (E[X|H])2 ≤ E[X 2 ] .

      (See Lemma 6.1.1. See also the Jensen inequality for conditional ex-
      pectation (Appendix B).)
3.17. Let (Ω, F, P ) be a probability space and let X: Ω → R be a random
      variable with E[|X|] < ∞. If G ⊂ F is a finite σ-algebra, then by
                                                 Sn
      Exercise 2.7 there exists a partition Ω =     Gi such that G consists
                                                        i=1
      of ∅ and unions of some (or all) of G1 , . . . , Gn .
      a) Explain why E[X|G](ω) is constant on each Gi . (See Exercise 2.7 c).)
      b) Assume that P [Gi ] > 0. Show that
                                     R
                                          XdP
                      E[X|G](ω) = Gi                    for ω ∈ Gi .
                                       P (Gi )

      c) Suppose X assumes only finitely many values a1 , . . . , am . Then from
         elementary probability theory we know that (see Exercise 2.1)
                                          m
                                          X
                             E[X|Gi ] =         ak P [X = ak |Gi ] .
                                          k=1

         Compare with b) and verify that

                           E[X|Gi ] = E[X|G](ω)          for ω ∈ Gi .

         Thus we may regard the conditional expectation as defined in Ap-
         pendix B as a (substantial) generalization of the conditional expec-
         tation in elementary probability theory.
4. The Itô Formula and the Martingale
Representation Theorem




4.1 The 1-dimensional Itô formula
Example 3.1.9 illustrates that the basic definition of Itô integrals is not very
useful when we try to evaluate a given integral. This is similar to the situation
for ordinary Riemann integrals, where we do not use the basic definition but
rather the fundamental theorem of calculus plus the chain rule in the explicit
calculations.
    In this context, however, we have no differentiation theory, only integra-
tion theory. Nevertheless it turns out that it is possible to establish an Itô
integral version of the chain rule, called the Itô formula. The Itô formula is,
as we will show by examples, very useful for evaluating Itô integrals.
    From the example
       Zt                                                               Zt
            Bs dBs = 12 Bt2 − 12 t            or    1 2    1
                                                    2 Bt = 2 t +             Bs dBs ,   (4.1.1)
       0                                                                0

                                                               Rt
we see that the image of the Itô integral Bt =                     dBs by the map g(x) = 21 x2
                                                               0
is not again an Itô integral of the form
                                     Zt
                                          f (s, ω)dBs (ω)
                                     0

but a combination of a dBs -and a ds-integral:
                                          Zt            Zt
                             1 2               1
                             2 Bt =            2 ds +        Bs dBs .                   (4.1.2)
                                          0             0

It turns out that if we introduce Itô processes (also called stochastic integrals)
as sums of a dBs -and a ds-integral then this family of integrals is stable under
smooth maps. Thus we define
Definition 4.1.1 (1-dimensional Itô processes).
Let Bt be 1-dimensional Brownian motion on (Ω, F, P ). A (1-dimensional)
44      4. The Itô Formula and the Martingale ...


Itô process (or stochastic integral) is a stochastic process Xt on (Ω, F, P ) of
the form
                                Zt             Zt
                    Xt = X0 + u(s, ω)ds + v(s, ω)dBs ,                   (4.1.3)
                                    0              0

where v ∈ WH , so that
                         · Zt                               ¸
                                        2
                     P          v(s, ω) ds < ∞ for all t ≥ 0 = 1            (4.1.4)
                          0

(see Definition 3.3.2). We also assume that u is Ht -adapted (where Ht is as
in (ii)’, Section 3.3) and

                        · Zt                                ¸
                    P          |u(s, ω)|ds < ∞ for all t ≥ 0 = 1 .          (4.1.5)
                          0

   If Xt is an Itô process of the form (4.1.3) the equation (4.1.3) is sometimes
written in the shorter differential form

                                   dXt = udt + vdBt .                       (4.1.6)

For example, (4.1.1) (or (4.1.2)) may be represented by
                            ¡     ¢
                          d 12 Bt2 = 12 dt + Bt dBt .

We are now ready to state the first main result in this chapter:
Theorem 4.1.2 (The 1-dimensional Itô formula).
Let Xt be an Itô process given by

                                   dXt = udt + vdBt .

Let g(t, x) ∈ C 2 ([0, ∞) × R) (i.e. g is twice continuously differentiable on
[0, ∞) × R). Then
                                Yt = g(t, Xt )
is again an Itô process, and

               ∂g              ∂g                 ∂2g
       dYt =      (t, Xt )dt +    (t, Xt )dXt + 12 2 (t, Xt ) · (dXt )2 ,   (4.1.7)
               ∂t              ∂x                 ∂x
where (dXt )2 = (dXt ) · (dXt ) is computed according to the rules

               dt · dt = dt · dBt = dBt · dt = 0 ,      dBt · dBt = dt .    (4.1.8)

     Before we prove Itô’s formula let us look at some examples.
                                                 4.1 The 1-dimensional Itô formula   45


Example 4.1.3. Let us return to the integral
                               Zt
                       I=           Bs dBs        from Chapter 3 .
                               0

Choose Xt = Bt and g(t, x) = 12 x2 . Then
                                                              1 2
                                   Yt = g(t, Bt ) =            B .
                                                              2 t
Then by Itô’s formula,
         ∂g      ∂g         ∂2g
 dYt =      dt +    dBt + 12 2 (dBt )2 = Bt dBt + 21 (dBt )2 = Bt dBt + 12 dt .
         ∂t      ∂x         ∂x
Hence
                               d( 12 Bt2 ) = Bt dBt + 12 dt .
In other words,
                           Zt
                  1 2
                  2 Bt =           Bs dBs + 12 t,         as in Chapter 3 .
                           0

Example 4.1.4. What is
                                            Zt
                                                 sdBs ?
                                            0
From classical calculus it seems reasonable that a term of the form tBt should
appear, so we put
                                  g(t, x) = tx
and
                                   Yt = g(t, Bt ) = tBt .
Then by Itô’s formula,
                                dYt = Bt dt + tdBt + 0
i.e.
                                   d(tBt ) = Bt dt + tdBt
or
                                        Zt                Zt
                               tBt =            Bs ds +        sdBs
                                        0                 0
or
                           Zt                         Zt
                                   sdBs = tBt −                Bs ds ,
                           0                              0
which is reasonable from an integration-by-parts point of view.
46           4. The Itô Formula and the Martingale ...


      More generally, the same method gives
Theorem 4.1.5 (Integration by parts). Suppose f (s, ω) = f (s) only de-
pends on s and that f is continuous and of bounded variation in [0, t]. Then

                                 Zt                                Zt
                                          f (s)dBs = f (t)Bt −          Bs dfs .
                                  0                                 0

   Note that it is crucial for the result to hold that f does not depend on ω.
(See Exercise 4.3.)

Sketch of proof of the Itô formula. First observe that if we substitute

                                                 dXt = udt + vdBt

in (4.1.7) and use (4.1.8) we get the equivalent expression

                                      Zt µ                                          2
                                                                                               ¶
                                                ∂g              ∂g          1 2 ∂ g
 g(t, Xt ) = g(0, X0 ) +                           (s, Xs ) + us (s, Xs ) + 2 vs ·     (s, Xs ) ds
                                                ∂s              ∂x                 ∂x2
                                      0
                Zt
                            ∂g
            +        vs ·      (s, Xs )dBs            where us = u(s, ω), vs = v(s, ω) .                 (4.1.9)
                            ∂x
                0

Note that (4.1.9) is an Itô process in the sense of Definition 4. 1.1.
                                                             2
    We may assume that g, ∂g    ∂g      ∂ g
                           ∂t , ∂x and ∂x2 are bounded, for if (4.1.9) is proved
in this case we obtain the general case by approximating by C 2 functions
                                 ∂ 2 gn
gn such that gn , ∂g n ∂gn
                   ∂t , ∂x and ∂x2 are bounded for each n and converge
                                                                                            2
uniformly on compact subsets of [0, ∞) × R to g, ∂g       ∂g ∂ g
                                                     ∂t , ∂x , ∂x2 , respectively.
(See Exercise 4.9.) Moreover, from (3.3.1) we see that we may assume that
u(t, ω) and v(t, ω) are elementary functions. Using Taylor’s theorem we get
                                  X                                        X ∂g                  X ∂g
g(t, Xt ) = g(0, X0 ) +                       ∆g(tj , Xj ) = g(0, X0 ) +                 ∆tj +            ∆Xj
                                      j                                        j
                                                                                    ∂t           j
                                                                                                     ∂x
            X ∂2g                     X ∂2g                               X ∂2g                      X
     + 12            2
                       (∆tj )2 +                      (∆tj )(∆Xj ) + 12                  (∆Xj )2 +        Rj ,
            j
                ∂t                        j
                                               ∂t∂x                        j
                                                                                   ∂x2               j


where ∂g   ∂g
      ∂t , ∂x etc. are evaluated at the points (tj , Xtj ),

∆tj = tj+1 − tj , ∆Xj = Xtj+1 − Xtj , ∆g(tj , Xj ) = g(tj+1 , Xtj+1 ) − g(tj , Xj )

and Rj = o(|∆tj |2 + |∆Xj |2 ) for all j.
   If ∆tj → 0 then
                                                                         4.1 The 1-dimensional Itô formula                 47


                    X ∂g                        X ∂g                                Zt
                                                                                         ∂g
                                  ∆tj =                      (tj , Xj )∆tj →                (s, Xs )ds               (4.1.10)
                        j
                             ∂t                 j
                                                        ∂t                               ∂t
                                                                                    0

                    X ∂g                        X ∂g                                     Zt
                                                                                              ∂g
                                  ∆Xj =                       (tj , Xj )∆Xj →                    (s, Xs )dXs .       (4.1.11)
                        j
                             ∂x                     j
                                                         ∂x                                   ∂x
                                                                                         0

Moreover, since u and v are elementary we get
        X ∂2g                                   X ∂2g                              X ∂2g
                            (∆Xj )2 =                         u2j (∆tj )2 + 2                   uj vj (∆tj )(∆Bj )
        j
                ∂x2                             j
                                                        ∂x2                         j
                                                                                         ∂x2
                X ∂2g
            +                  v 2 · (∆Bj )2 ,                where uj = u(tj , ω), vj = v(tj , ω) .                 (4.1.12)
                    j
                            ∂x2 j

The first two terms here tend to 0 as ∆tj → 0. For example,
                              ·µ X                        ¶2 ¸
                                    ∂2g
                            E           uj vj (∆tj )(∆Bj )      =
                                 j
                                    ∂x2
                                X ·µ ∂ 2 g        ¶2 ¸
                              =    E         u v
                                           2 j j
                                                       (∆tj )3 → 0                             as ∆tj → 0 .
                                j
                                        ∂x

We claim that the last term tends to
                                       Zt
                                            ∂2g 2
                                                v ds                in L2 (P ), as ∆tj → 0 .
                                            ∂x2
                                       0

                                                        2
                          ∂ g           2
To prove this, put a(t) = ∂x 2 (t, Xt )v (t, ω), aj = a(tj ) and consider


    ·µX                                    X                 ¶2 ¸       X
                                   2
E               aj (∆Bj ) −                     aj ∆tj              =         E[ai aj ((∆Bi )2 −∆ti )((∆Bj )2 −∆tj )] .
            j                               j                           i,j


If i < j then ai aj ((∆Bi )2 − ∆ti ) and (∆Bj )2 − ∆tj are independent so the
terms vanish in this case, and similarly if i > j. So we are left with
  X                               X
      E[a2j ((∆Bj )2 − ∆tj )2 ] =    E[a2j ] · E[(∆Bj )4 − 2(∆Bj )2 ∆tj + (∆tj )2 ]
    j                                                          j
                    X                                                                             X
                =            E[a2j ] · (3(∆tj )2 − 2(∆tj )2 + (∆tj )2 ) = 2                             E[a2j ] · (∆tj )2
                        j                                                                           j
                →0                as ∆tj → 0 .

In other words, we have established that
48      4. The Itô Formula and the Martingale ...


             X                   Zt
                           2
                   aj (∆Bj ) →        a(s)ds    in L2 (P ) as ∆tj → 0
               j                 0

and this is often expressed shortly by the striking formula

                               (dBt )2 = dt .                     (4.1.13)
                                     P
The argument above also proves that     Rj → 0 as ∆tj → 0. That completes
the proof of the Itô formula.                                          t
                                                                        u

Remark. Note that it is enough that g(t, x) is C 2 on [0, ∞) × U , if U ⊂ R
is an open set such that Xt (ω) ∈ U for all t ≥ 0, ω ∈ Ω. Moreover, it is
sufficient that g(t, x) is C 1 w.r.t. t and C 2 w.r.t. x.


4.2 The Multi-dimensional Itô Formula
We now turn to the situation in higher dimensions: Let B(t, ω) = (B1 (t, ω), . . .,
Bm (t, ω)) denote m-dimensional Brownian motion. If each of the processes
ui (t, ω) and vij (t, ω) satisfies the conditions given in Definition 4.1.1 (1 ≤ i ≤ n,
1 ≤ j ≤ m) then we can form the following n Itô processes
                      
                      dX1 = u1 dt + v11 dB1 + · · · + v1m dBm
                      
                          ..     ..                       ..                   (4.2.1)
                          .      .                        .
                      
                       dXn = un dt + vn1 dB1 + · · · + vnm dBm
Or, in matrix notation simply

                               dX(t) = udt + vdB(t) ,                          (4.2.2)

where
                                                                   
       X1 (t)           u1             v11 · · · v1m       dB1 (t) 
      
       .              
                          .. 
                                         
                                           ..         .. 
                                                              
                                                                .       
X(t) =
      
         .   
               ,     u =
                             
                              ,       v =
                                                      dB(t) =
                                                          ,
                                                        .     
                                                                    .   
                                                                          
       . 
                        . 
                                        
                                            .            
                                                               . 
                                                                         
        Xn (t)             un               vn1 · · · vnm        dBm (t)
                                                                    (4.2.3)
Such a process X(t) is called an n-dimensional Itô process (or just an Itô
process).
   We now ask: What is the result of applying a smooth function to X? The
answer is given by
Theorem 4.2.1 (The general Itô formula).
Let
                      dX(t) = udt + vdB(t)
be an n-dimensional Itô process as above. Let g(t, x) = (g1 (t, x), . . . , gp (t, x))
be a C 2 map from [0, ∞) × Rn into Rp . Then the process
                             4.3 The Martingale Representation Theorem        49


                               Y (t, ω) = g(t, X(t))

is again an Itô process, whose component number k, Yk , is given by
            ∂gk            X ∂gk                X ∂ 2 gk
    dYk =       (t, X)dt +       (t, X)dXi + 12             (t, X)dXi dXj
             ∂t            i
                             ∂xi                i,j
                                                    ∂xi ∂xj

where dBi dBj = δij dt, dBi dt = dtdBi = 0.
   The proof is similar to the 1-dimensional version (Theorem 4.1.2) and is
omitted.
Example 4.2.2. Let B = (B1 , . . . , Bn ) be Brownian motion in Rn , n ≥ 2,
and consider
                                                                     1
             R(t, ω) = |B(t, ω)| = (B12 (t, ω) + · · · + Bn2 (t, ω)) 2 ,

i.e. the distance to the origin of B(t, ω). The function g(t, x) = |x| is not C 2
at the origin, but since Bt never hits the origin, a.s. when n ≥ 2 (see Exercise
9.7) Itô’s formula still works and we get
                                n
                                X Bi dBi            n−1
                         dR =                 +         dt .
                                 i=1
                                         R           2R

The process R is called the n-dimensional Bessel process because its generator
(Chapter 7) is the Bessel differential operator Af (x) = 12 f 00 (x) + n−1  0
                                                                        2x f (x).
See Example 8.4.1.


4.3 The Martingale Representation Theorem
Let B(t) = (B1 (t), . . . , Bn (t)) be n-dimensional Brownian motion. In Chap-
ter 3 (Corollary 3.2.6) we proved that if v ∈ V n then the Itô integral
                                 Zt
                    Xt = X0 +          v(s, ω)dB(s) ;      t≥0
                                 0

                                              (n)
is always a martingale w.r.t. filtration Ft (and w.r.t. the probability mea-
sure P ). In this section we will prove that the converse is also true: Any
  (n)
Ft -martingale (w.r.t. P ) can be represented as an Itô integral. This result,
called the martingale representation theorem, is important for many applica-
tions, for example in mathematical finance. See Chapter 12. For simplicity
we prove the result only when n = 1, but the reader can easily verify that
essentially the same proof works for arbitrary n.

   We first establish some auxiliary results.
50          4. The Itô Formula and the Martingale ...


Lemma 4.3.1. Fix T > 0. The set of random variables

               {φ(Bt1 , . . . , Btn ); ti ∈ [0, T ], φ ∈ C0∞ (Rn ), n = 1, 2, . . .}

is dense in L2 (FT , P ).

Proof. Let {ti }∞
                i=1 be a dense subset of [0, T ] and for each n = 1, 2, . . . let Hn
be the σ-algebra generated by Bt1 (·), . . . , Btn (·). Then clearly

                                           Hn ⊂ Hn+1

and FT is the smallest σ-algebra containing all the Hn ’s. Choose
g ∈ L2 (FT , P ). Then by the martingale convergence theorem Corollary C.9
(Appendix C) we have that

                               g = E[g|FT ] = lim E[g|Hn ] .
                                                  n→∞

The limit is pointwise a.e. (P ) and in L2 (FT , P ). By the Doob-Dynkin Lemma
(Lemma 2.1.2) we can write, for each n,

                                E[g|Hn ] = gn (Bt1 , . . . , Btn )

for some Borel measurable function gn : Rn → R. Each such gn (Bt1 , . . . , Btn )
can be approximated in L2 (FT , P ) by functions φn (Bt1 , . . . , Btn ) where
φn ∈ C0∞ (Rn ) and the result follows.                                         t
                                                                               u
Lemma 4.3.2. The linear span of random variables of the type

      ½ ZT                      ZT           ¾
exp          h(t)dBt (ω) − 12        h2 (t)dt ;   h ∈ L2 [0, T ] (deterministic)       (4.3.1)
        0                       0

is dense in L2 (FT , P ).

Proof. Suppose g ∈ L2 (FT , P ) is orthogonal (in L2 (FT , P )) to all functions
of the form (4.3.1). Then in particular
              Z
      G(λ): = exp{λ1 Bt1 (ω) + · · · + λn Btn (ω)}g(ω)dP (ω) = 0          (4.3.2)
                   Ω

for all λ = (λ1 , . . . , λn ) ∈ Rn and all t1 , . . . , tn ∈ [0, T ]. The function G(λ) is
real analytic in λ ∈ Rn and hence G has an analytic extension to the complex
space Cn given by
                   Z
         G(z) = exp{z1 Bt1 (ω) + · · · + zn Btn (ω)}g(ω)dP (ω)                      (4.3.3)
                       Ω
                                    4.3 The Martingale Representation Theorem             51


for all z = (z1 , . . . , zn ) ∈ Cn . (See the estimates in Exercise 2.8 b).) Since G = 0
on Rn and G is analytic, G = 0 on Cn . In particular, G(iy1 , iy2 , . . . , iyn ) = 0
for all y = (y1 , . . . , yn ) ∈ Rn . But then we get, for φ ∈ C0∞ (Rn ),
           Z
              φ(Bt1 , . . . , Btn )g(ω)dP (ω)
          Ω
                  Z               µZ                                   ¶
              =          −n/2
                      (2π)              b
                                        φ(y)e i(y1 Bt1 +···+yn Btn )
                                                                     dy g(ω)dP (ω)
                  Ω                Rn
                              Z        µZ                                   ¶
              = (2π)−n/2           b
                                   φ(y)   ei(y1 Bt1 +···+yn Btn ) g(ω)dP (ω) dy
                              Rn          Ω
                              Z
              = (2π)−n/2           b
                                   φ(y)G(iy)dy =0,                                    (4.3.4)
                              Rn

where                                              Z
                              b
                              φ(y) = (2π)−n/2           φ(x)e−i x·y dx
                                                   Rn
is the Fourier transform of φ and we have used the inverse Fourier transform
theorem                                Z
                       φ(x) = (2π)−n/2    b
                                          φ(y)e i x·y
                                                      dy
                                                   Rn

(see e.g. Folland (1984)).
    By (4.3.4) and Lemma 4.3.1 g is orthogonal to a dense subset of L2 (FT , P )
and we conclude that g = 0. Therefore the linear span of the functions in
(4.3.1) must be dense in L2 (FT , P ) as claimed.                             t
                                                                              u
   Suppose B(t) = (B1 (t), . . . , Bn (t)) is n-dimensional. If v(s, ω) ∈ V n (0, T )
then the random variable
                                              ZT
                                   V (ω): =        v(t, ω)dB(t)                       (4.3.5)
                                              0

    (n)
is FT -measurable and by the Itô isometry
                         ZT
                  2                                                        (n)
              E[V ] =         E[v 2 (t, ·)]dt < ∞ ,           so V ∈ L2 (FT , P ) .
                         0

                                                        (n)
The next result states that any F ∈ L2 (FT , P ) can be represented this way:
Theorem 4.3.3 (The Itô representation theorem).
              (n)
Let F ∈ L2 (FT , P ). Then there exists a unique stochastic process f (t, ω) ∈
 n
V (0, T ) such that
52        4. The Itô Formula and the Martingale ...


                                                   ZT
                            F (ω) = E[F ] +                f (t, ω)dB(t) .                        (4.3.6)
                                                   0

Proof. Again we consider only the case n = 1. (The proof in the general case
is similar.) First assume that F has the form (4.3.1), i.e.
                                     ½ ZT                                ZT           ¾
                   F (ω) = exp                h(t)dBt (ω) − 12                h2 (t)dt
                                          0                              0

                    2
for some h(t) ∈ L [0, T ].
    Define
                        ½ Zt                               Zt          ¾
                                                                    2
       Yt (ω) = exp             h(s)dBs (ω) − 12                h (s)ds ;               0≤t≤T .
                            0                              0

Then by Itô’s formula

           dYt = Yt (h(t)dBt − 12 h2 (t)dt) + 12 Yt (h(t)dBt )2 = Yt h(t)dBt

so that
                                     Zt
                        Yt = 1 +          Ys h(s)dBs ;                  t ∈ [0, T ] .
                                     0
Therefore
                                                    ZT
                                F = YT = 1 +                   Ys h(s)dBs
                                                       0

and hence E[F ] = 1. So (4.3.6) holds in this case. By linearity (4.3.6)
also holds for linear combinations of functions of the form (4.3.1). So if
F ∈ L2 (FT , P ) is arbitrary, we approximate F in L2 (FT , P ) by linear com-
binations Fn of functions of the form (4.3.1). Then for each n we have
                                ZT
          Fn (ω) = E[Fn ] +          fn (s, ω)dBs (ω),                   where fn ∈ V(0, T ) .
                                 0

By the Itô isometry
                                 ·                              ZT                      ¸
                        2
      E[(Fn − Fm ) ] = E (E[Fn − Fm ] +                              (fn − fm )dB)2
                                                                0
                                     ZT
           = (E[Fn − Fm ])2 +             E[(fn − fm )2 ]dt → 0                    as n, m → ∞
                                     0
                                  4.3 The Martingale Representation Theorem                         53


so {fn } is a Cauchy sequence in L2 ([0, T ] × Ω) and hence converges to some
f ∈ L2 ([0, T ] × Ω). Since fn ∈ V(0, T ) we have f ∈ V(0, T ). (A subsequence
of {fn (t, ω)} converges to f (t, ω) for a.a. (t, ω) ∈ [0, T ] × Ω. Therefore f (t, ·)
is Ft -measurable for a.a. t. So by modifying f (t, ω) on a t-set of measure 0
we can obtain that f (t, ω) is Ft -adapted.) Again using the Itô isometry we
see that
                         µ        ZT    ¶         ZT
         F = lim Fn = lim E[Fn ] + fn dB = E[F ] + f dB ,
                n→∞          n→∞
                                                    0                            0

the limit being taken in L2 (FT , P ). Hence the representation (4.3.6) holds
for all F ∈ L2 (FT , P ).
    The uniqueness follows from the Itô isometry: Suppose
                             ZT                                   ZT
        F (ω) = E[F ] +           f1 (t, ω)dBt (ω) = E[F ] +               f2 (t, ω)dBt (ω)
                             0                                     0

with f1 , f2 ∈ V(0, T ). Then

          ZT                                  ZT
   0 = E[( (f1 (t, ω) − f2 (t, ω))dBt (ω)) ] = E[(f1 (t, ω) − f2 (t, ω))2 ]dt
                                          2

            0                                              0

and therefore f1 (t, ω) = f2 (t, ω) for a.a. (t, ω) ∈ [0, T ] × Ω.                                  t
                                                                                                    u
Remark. The process f (t, ω) can be expressed in terms of the Frechet
derivative and also in terms of the Malliavin derivative of F (ω). See Clark
(1970/71) and Ocone (1984).
Theorem 4.3.4 (The martingale representation theorem).
                                                                              (n)
Let B(t) = (B1 (t), . . . , Bn (t)) be n-dimensional. Suppose Mt is an Ft -
                                          2
martingale (w.r.t. P ) and that Mt ∈ L (P ) for all t ≥ 0. Then there exists a
unique stochastic process g(s, ω) such that g ∈ V (n) (0, t) for all t ≥ 0 and
                                       Zt
          Mt (ω) = E[M0 ] +                 g(s, ω)dB(s)       a.s., for all t ≥ 0 .
                                       0

Proof (n = 1). By Theorem 4.3.3 applied to T = t, F = Mt , we have that
for all t there exists a unique f (t) (s, ω) ∈ L2 (Ft , P ) such that
                        Zt                                             Zt
                                 (t)
   Mt (ω) = E[Mt ] +         f         (s, ω)dBs (ω) = E[M0 ] +             f (t) (s, ω)dBs (ω) .
                        0                                              0

Now assume 0 ≤ t1 < t2 . Then
54     4. The Itô Formula and the Martingale ...

                                                          · Zt2                                     ¸
                                                                        (t2 )
         Mt1 = E[Mt2 |Ft1 ] = E[M0 ] + E                            f           (s, ω)dBs (ω)|Ft1
                                                            0
                                   Z t1
                = E[M0 ] +                f (t2 ) (s, ω)dBs (ω) .                                       (4.3.7)
                                     0

But we also have
                                                 Zt1
                          Mt1 = E[M0 ] +               f (t1 ) (s, ω)dBs (ω) .                          (4.3.8)
                                                 0

Hence, comparing (4.3.7) and (4.3.8) we get that

             ·µ Zt1                  ¶2 ¸ Zt1
                      (t2 )    (t1 )
         0=E       (f       − f )dB      = E[(f (t2 ) − f (t1 ) )2 ]ds
                         0                                      0

and therefore

           f (t1 ) (s, ω) = f (t2 ) (s, ω)             for a.a. (s, ω) ∈ [0, t1 ] × Ω .

So we can define f (s, ω) for a.a. s ∈ [0, ∞) × Ω by setting

                             f (s, ω) = f (N ) (s, ω)           if s ∈ [0, N ]

and then we get

                Zt                                              Zt
                         (t)
Mt = E[M0 ]+         f         (s, ω)dBs (ω) = E[M0 ]+                  f (s, ω)dBs (ω) for all t ≥ 0 .
                0                                               0                                            t
                                                                                                             u


Exercises

4.1.   Use Itô’s formula to write the following stochastic processes Xt on the
       standard form
                             dXt = u(t, ω)dt + v(t, ω)dBt
       for suitable choices of u ∈ Rn , v ∈ Rn×m and dimensions n, m:
       a) Xt = Bt2 , where Bt is 1-dimensional
       b) Xt = 2 + t + eBt (Bt is 1-dimensional)
       c) Xt = B12 (t) + B22 (t) where (B1 , B2 ) is 2-dimensional
       d) Xt = (t0 + t, Bt ) (Bt is 1-dimensional)
       e) Xt = (B1 (t)+B2 (t)+B3 (t), B22 (t)−B1 (t)B3 (t)), where (B1 , B2 , B3 )
           is 3-dimensional.
                                                                                       Exercises       55


4.2.   Use Itô’s formula to prove that
                                    Zt                            Zt
                                         Bs2 dBs = 13 Bt3 −               Bs ds .
                                    0                                 0

4.3.   Let Xt , Yt be Itô processes in R. Prove that

                             d(Xt Yt ) = Xt dYt + Yt dXt + dXt · dYt .

       Deduce the following general integration by parts formula
                Zt                                          Zt                 Zt
                     Xs dYs = Xt Yt − X0 Y0 −                    Ys dXs −           dXs · dYs .
                0                                           0                   0

4.4.   (Exponential martingales)
       Suppose θ(t, ω) = (θ1 (t, ω), . . . , θn (t, ω)) ∈ Rn with θk (t, ω) ∈ V[0, T ]
       for k = 1, . . . , n, where T ≤ ∞. Define
                         ½ Zt                           Zt                 ¾
                                                                  2
            Zt = exp              θ(s, ω)dB(s) − 12              θ (s, ω)ds ;           0≤t≤T
                             0                          0

       where B(s) ∈ Rn and θ2 = θ · θ (dot product).
       a) Use Itô’s formula to prove that

                                              dZt = Zt θ(t, ω)dB(t) .

       b) Deduce that Zt is a martingale for t ≤ T , provided that

                                 Zt θk (t, ω) ∈ V[0, T ]              for 1 ≤ k ≤ n .

Remark. A sufficient condition that Zt be a martingale is the Kazamaki
condition
           ·     µ Zt                             ¶¸
                     1
         E exp       2       θ(s, ω)dB(s)              <∞             for all t ≤ T .              (4.3.9)
                         0

       This is implied by the following (stronger) Novikov condition

                              ·         µ ZT                 ¶¸
                             E exp        1
                                          2       θ2 (s, ω)ds   <∞.                               (4.3.10)
                                              0

       See e.g. Ikeda & Watanabe (1989), Section III.5, and the references
       therein.
56       4. The Itô Formula and the Martingale ...


4.5.    Let Bt ∈ R, B0 = 0. Define

                       βk (t) = E[Btk ] ;             k = 0, 1, 2, . . . ; t ≥ 0 .

        Use Itô’s formula to prove that
                                                 Zt
                       βk (t) = 12 k(k − 1)           βk−2 (s)ds ;        k≥2.
                                                 0

        Deduce that
                               E[Bt4 ] = 3t2             (see (2.2.14))
        and find
                                                 E[Bt6 ] .

4.6.    a) For c, α constants, Bt ∈ R define

                                             Xt = ect+αBt .

            Prove that
                               dXt = (c + 12 α2 )Xt dt + αXt dBt .
        b) For c, α1 , . . . , αn constants, Bt = (B1 (t), . . . , Bn (t)) ∈ Rn define
                                         µ     n
                                               X          ¶
                                 Xt = exp ct +   αj Bj (t) .
                                                          j=1

            Prove that
                            µ      n
                                   X    ¶          µX
                                                    n       ¶
                                 1    2
                       dXt = c + 2   αj Xt dt + Xt    αj dBj .
                                       j=1                             j=1

4.7.    Let Xt be an Itô integral

       dXt = v(t, ω)dBt (ω)    where v ∈ Rn , v ∈ V(0, T ), Bt ∈ Rn , 0 ≤ t ≤ T .

        a) Give an example to show that Xt2 is not in general a martingale.
        b) Prove that if v is bounded then

                                            Zt
                          Mt : = Xt2 −           |vs |2 ds is a martingale .
                                            0

                                        Rt
            The process hX, Xit : =          |vs |2 ds is called the quadratic variation
                                        0
            process of the martingale Xt . For general processes Xt it is defined
            by
                                                                                 Exercises    57

                                  X
           hX, Xit = lim                  |Xtk+1−Xtk |2       (limit in probability) (4.3.11)
                      ∆tk →0
                                  tk ≤t

          where 0 = t1 < t2 · · · < tn = t and ∆tk = tk+1 − tk . The limit can
          be shown to exist for continuous square integrable martingales Xt .
          See e.g. Karatzas and Shreve (1991).
4.8.   a) Let Bt denote n-dimensional Brownian motion and let f : Rn → R
           be C 2 . Use Itô’s formula to prove that

                                              Zt                        Zt
                    f (Bt ) = f (B0 ) +            ∇f (Bs )dBs + 12          ∆f (Bs )ds ,
                                              0                         0

                        P
                        n
                                ∂2
           where ∆ =            ∂x2i
                                       is the Laplace operator.
                        i=1
       b) Assume that g : R → R is C 1 everywhere and C 2 outside finitely
          many points z1 , . . . , zN with |g 00 (x)| ≤ M for x ∈
                                                                / {z1 , . . . , zN }.
          Let Bt be 1-dimensional Brownian motion. Prove that the 1-
          dimensional version of a) still holds, i.e.

                                               Zt                       Zt
                                                     0           1
                     g(Bt ) = g(B0 ) +              g (Bs )dBs +             g 00 (Bs )ds .
                                                                 2
                                               0                        0

           (Hint: Choose fk ∈ C 2 (R) s.t. fk → g uniformly, fk0 → g 0 uni-
           formly and |fk00 | ≤ M, fk00 → g 00 outside z1 , . . . , zN . Apply a) to fk
           and let k → ∞).
4.9.   Prove that we may assume that g and its first two derivatives are
       bounded in the proof of the Itô formula (Theorem 4.1.2) by proceeding
       as follows: For fixed t ≥ 0 and n = 1, 2, . . . choose gn as in the statement
       such that gn (s, x) = g(s, x) for all s ≤ t and all |x| ≤ n. Suppose we
       have proved that (4.1.9) holds for each gn . Define the stochastic time

                         τn = τn (ω) = inf{s > 0; |Xs (ω)| ≥ n}

       (τn is called a stopping time (See Chapter 7)) and prove that

                    µ Zt                                        ¶
                                ∂gn
                            v       (s, Xs )Xs≤τn dBs : =
                                ∂x
                       0
                        Z n
                       t∧τ                                Z n
                                                          t∧τ
                                  ∂gn                               ∂g
                                v     (s, Xs )dBs =             v      (s, Xs )dBs
                                  ∂x                                ∂x
                        0                                 0

       for each n. This gives that
58     4. The Itô Formula and the Martingale ...


                  g(t ∧ τn , Xt∧τn ) = g(0, X0 )
                       Z nµ
                       t∧τ
                                                  2
                                                      ¶     Z n
                                                            t∧τ
                              ∂g      ∂g    1 2∂ g               ∂g
                    +            +u      + 2v       2
                                                       ds +     v dBs
                              ∂s      ∂x         ∂x              ∂x
                          0                                            0

      and since
                                P [τn > t] → 1              as n → ∞
      we can conclude that (4.1.9) holds (a.s.) for g.
4.10. (Tanaka’s formula and local time).
      What happens if we try to apply the Itô formula to g(Bt ) when Bt is
      1-dimensional and g(x) = |x| ? In this case g is not C 2 at x = 0, so we
      modify g(x) near x = 0 to g² (x) as follows:
                                ½
                                        |x|      if |x| ≥ ²
                       g² (x) = 1           x2
                                   2 (²  +   ² ) if |x| < ²
      where ² > 0.




      a) Apply Exercise 4.8 b) to show that
                                      Zt
                                                             1
           g² (Bt ) = g² (B0 ) +           g²0 (Bs )dBs +       · |{s ∈ [0, t]; Bs ∈ (−², ²)}|
                                                             2²
                                      0

         where |F | denotes the Lebesgue measure of the set F .
      b) Prove that
                  Zt                                    Zt
                                                             Bs
                       g²0 (Bs ) · XBs ∈(−²,²) dBs =            · XBs ∈(−²,²) dBs → 0
                                                              ²
                  0                                     0
              2
         in L (P ) as ² → 0.
         (Hint: Apply the Itô isometry to
                                     ·µ Zt                            ¶2 ¸
                                               Bs
                                 E                · XBs ∈(−²,²) dBs          .
                                                ²
                                           0
                                                                                 Exercises         59


      c) By letting ² → 0 prove that
                                             Zt
                         |Bt | = |B0 | +          sign(Bs )dBs + Lt (ω) ,                 (4.3.12)
                                             0

         where
                                 1
                   Lt = lim          · |{s ∈ [0, t]; Bs ∈ (−², ²)}| (limit in L2 (P ))
                         ²→0 2²

         and                                          ½
                                                          −1 for   x≤0
                                     sign(x) =                         .
                                                          1 for    x>0
         Lt is called the local time for Brownian motion at 0 and (4.3.12) is
         the Tanaka formula (for Brownian motion). (See e.g. Rogers and
         Williams (1987)).
4.11. Use Itô’s formula (for example in the form of Exercise 4.3) to prove
      that the following stochastic processes are {Ft }-martingales:
                  1
      a) Xt = e 2 t cos Bt    (Bt ∈ R)
                  1
                    t
      b) Xt = e sin Bt
                  2           (Bt ∈ R)
      c) Xt = (Bt + t)exp(−Bt − 12 t)      (Bt ∈ R).
4.12. Let dXt = u(t, ω)dt + v(t, ω)dBt be an Itô process in Rn such that
             · Zt              ¸    · Zt                ¸
         E          |u(r, ω)|dr + E      |vv T (r, ω)|dr < ∞                     for all t ≥ 0 .
               0                             0

                                     (n)
      Suppose Xt is an {Ft }-martingale. Prove that

                    u(s, ω) = 0            for a.a. (s, ω) ∈ [0, ∞) × Ω .                 (4.3.13)

Remarks:
0)    1) This result may be regarded as a special case of the Martingale
          Representation Theorem.
                                                                   (n)
      2) The conclusion (4.3.13) does not hold if the filtration Ft is re-
          placed by the σ-algebras Mt generated by Xs (·); s ≤ t, i.e. if we
          only assume that Xt is a martingale w.r.t. its own filtration. See
          e.g. the Brownian motion characterization in Chapter 8.
Hint for the solution:
                    (n)
       If Xt is an Ft -martingale, then deduce that
                        · Zs                      ¸
                                          (n)
                    E          u(r, ω)dr|Ft           =0       for all s ≥ t .
                          t
60     4. The Itô Formula and the Martingale ...


      Differentiate w.r.t. s to deduce that
                              (n)
                  E[u(s, ω)|Ft ] = 0            a.s., for a.a. s > t .
      Then let t ↑ s and apply Corollary C.9.
4.13. Let dXt = u(t, ω)dt + dBt (u ∈ R, Bt ∈ R) be an Itô process
      and assume for simplicity that u is bounded. Then from Exercise 4.12
      we know that unless u = 0 the process Xt is not an Ft -martingale.
      However, it turns out that we can construct an Ft -martingale from Xt
      by multiplying by a suitable exponential martingale. More precisely,
      define
                                   Yt = Xt Mt
      where
                             µ       Zt                          Zt                 ¶
                  Mt = exp       −        u(r, ω)dBr − 12             u2 (r, ω)dr       .
                                     0                           0
      Use Itô’s formula to prove that
                               Yt        is an Ft -martingale .
Remarks:
a)    a) Compare with Exercise 4.11 c).
      b) This result is a special case of the important Girsanov Theorem.
         It can be interpreted as follows: {Xt }t≤T is a martingale w.r.t the
         measure Q defined on FT by
                                 dQ = MT dP                 (T < ∞) .
          See Section 8.6.
4.14. In each of the cases below find the process f (t, ω) ∈ V[0, T ] such that
      (4.3.6) holds, i.e.
                                                ZT
                           F (ω) = E[F ] +           f (t, ω)dBt (ω) .
                                                0

                                                     RT
      a) F (ω) = BT (ω)             b) F (ω) =            Bt (ω)dt
                                                     0
      c) F (ω) = BT2 (ω)            d) F (ω) = BT3 (ω)
                   B (ω)
      e) F (ω) = e T                 f) F (ω) = sin BT (ω)
4.15. Let x > 0 be a constant and define
                           Xt = (x1/3 + 31 Bt )3 ;                   t≥0.
      Show that
                                    1/3          2/3
                     dXt = 13 Xt          dt + Xt        dBt ;         X0 = x .
5. Stochastic Differential Equations




5.1 Examples and Some Solution Methods
We now return to the possible solutions Xt (ω) of the stochastic differential
equation
        dXt
            = b(t, Xt ) + σ(t, Xt )Wt ,       b(t, x) ∈ R, σ(t, x) ∈ R    (5.1.1)
         dt
where Wt is 1-dimensional “white noise”. As discussed in Chapter 3 the Itô
interpretation of (5.1.1) is that Xt satisfies the stochastic integral equation
                                 Zt                   Zt
                  Xt = X0 +           b(s, Xs )ds +        σ(s, Xs )dBs
                                 0                    0

or in differential form

                          dXt = b(t, Xt )dt + σ(t, Xt )dBt .              (5.1.2)

Therefore, to get from (5.1.1) to (5.1.2) we formally just replace the white
noise Wt by dB
             dt in (5.1.1) and multiply by dt. It is natural to ask:
               t



(A) Can one obtain existence and uniqueness theorems for such equations?
    What are the properties of the solutions?
(B) How can one solve a given such equation?
    We will first consider question (B) by looking at some simple examples,
and then in Section 5.2 we will discuss (A).
    It is the Itô formula that is the key to the solution of many stochastic
differential equations. The method is illustrated in the following examples.
Example 5.1.1. Let us return to the population growth model in Chapter 1:
                            dNt
                                = at Nt ,         N0 given
                             dt
where at = rt + αWt , Wt = white noise, α = constant.
    Let us assume that rt = r = constant. By the Itô interpretation (5.1.2)
this equation is equivalent to (here σ(t, x) = αx)
62      5. Stochastic Differential Equations


                              dNt = rNt dt + αNt dBt                   (5.1.3)

or
                                  dNt
                                      = rdt + αdBt .
                                  Nt
Hence
                        Zt
                             dNs
                                 = rt + αBt      (B0 = 0) .            (5.1.4)
                             Ns
                        0

To evaluate the integral on the left hand side we use the Itô formula for the
function
                          g(t, x) = ln x ;   x>0
and obtain
                                       µ         ¶
                          1                  1
             d(ln Nt ) =    · dNt + 12 − 2 (dNt )2
                         Nt                 Nt
                         dNt      1                 dNt
                       =      −     2 · α2 Nt2 dt =     − 12 α2 dt .
                         Nt     2Nt                 Nt

Hence
                              dNt
                                  = d(ln Nt ) + 12 α2 dt
                              Nt
so from (5.1.4) we conclude

                                  Nt       1
                             ln      = (r − α2 )t + αBt
                                  N0       2
or
                       Nt = N0 exp((r − 12 α2 )t + αBt ) .             (5.1.5)
For comparison, referring to the discussion at the end of Chapter 3, the
Stratonovich interpretation of (5.1.3),

                            dN t = rN t dt + αN t ◦ dBt ,

would have given the solution

                             N t = N0 exp(rt + αBt ) .                 (5.1.6)

The solutions Nt , N t are both processes of the type

                Xt = X0 exp(µt + αBt )          (µ, α constants) .

Such processes are called geometric Brownian motions. They are important
also as models for stochastic prices in economics. See Chapters 10, 11, 12.
                                5.1 Examples and Some Solution Methods              63


Remark. It seems reasonable that if Bt is independent of N0 we should
have
                        E[Nt ] = E[N0 ]ert ,                      (∗)
i.e. the same as when there is no noise in at . To see if this is indeed the case,
we let
                                  Yt = eαBt
and apply Itô’s formula:

                         dYt = αeαBt dBt + 12 α2 eαBt dt

or
                                Zt                                 Zt
                                     αBs
                  Yt = Y0 + α        e     dBs + 12 α2                  eαBs ds .
                                0                                  0

         Rt
Since E[ eαBs dBs ] = 0 (Theorem 3.2.1 (iii)), we get
         0

                                                      Zt
                        E[Yt ] = E[Y0 ] + 12 α2               E[Ys ]ds
                                                      0

i.e.
                        d
                           E[Yt ] = 12 α2 E[Yt ], E[Y0 ] = 1 .
                        dt
So                                                2
                                              1
                                 E[Yt ] = e 2 α t ,
and therefore – as anticipated – we obtain

                               E[Nt ] = E[N0 ]ert .

For the Stratonovich solution, however, the same calculation gives
                                                          1    2
                            E[N t ] = E[N0 ]e(r+ 2 α )t .

Now that we have found the explicit solutions Nt and N t in (5.1.5), (5.1.6)
we can use our knowledge about the behaviour of Bt to gain information on
these solutions. For example, for the Itô solution Nt we get the following:
(i) If r > 12 α2 then Nt → ∞ as t → ∞, a.s.
(ii) If r < 12 α2 then Nt → 0 as t → ∞, a.s.
(iii) If r = 12 α2 then Nt will fluctuate between arbitrary large and arbitrary
      small values as t → ∞, a.s.
     These conclusions are direct consequences of the formula (5.1.5) for Nt
together with the following basic result about 1-dimensional Brownian motion
Bt :
64     5. Stochastic Differential Equations


Theorem 5.1.2 (The law of iterated logarithm).
                                          Bt
                          lim sup √                = 1 a.s.
                             t→∞      2t log log t

    For a proof we refer to Lamperti (1977), §22.
    For the Stratonovich solution N t we get by the same argument that N t →
0 a.s. if r < 0 and N t → ∞ a.s. if r > 0.
    Thus the two solutions have fundamentally different properties and it is an
interesting question what solution gives the best description of the situation.
Example 5.1.3. Let us return to the equation in Problem 2 of Chapter 1:
                                    1
                   LQ00t + RQ0t +     Qt = Ft = Gt + αWt .                              (5.1.7)
                                    C
We introduce the vector
                                 
                            X1 
             X = X(t, ω) =     = Qt0 
                                             and obtain
                             X2      Qt
                  ½ 0
                   X1 = X2
                                                                                        (5.1.8)
                   LX20 = −RX2 − C1 X1 + Gt + αWt
or, in matrix notation,

                 dX = dX(t) = AX(t)dt + H(t)dt + KdBt                                   (5.1.9)

where
     µ     ¶      µ                 ¶              µ          ¶          µ       ¶
       dX1           0         1                         0                   0
dX =         , A=     1                 , H(t) =                  , K=               , (5.1.10)
       dX2         − CL       −RL
                                                       1
                                                       L Gt
                                                                             α
                                                                             L

and Bt is a 1-dimensional Brownian motion.
   Thus we are led to a 2-dimensional stochastic differential equation. We
rewrite (5.1.9) as

 exp(−At)dX(t) − exp(−At)AX(t)dt = exp(−At)[H(t)dt + KdBt ] , (5.1.11)

where for a general n × n matrix F we define exp(F ) to be the n × n matrix
                    P
                    ∞
                        1  n
given by exp(F ) =     n! F . Here it is tempting to relate the left hand side
                   n=0
to
                              d(exp(−At)X(t)) .
To do this we use a 2-dimensional version of the Itô formula (Theorem 4.2.1).
   Applying this result to the two coordinate functions g1 , g2 of
                                                                 µ ¶
                                                                   x1
    g: [0, ∞) × R2 → R2      given by g(t, x1 , x2 ) = exp(−At)         ,
                                                                   x2
                              5.1 Examples and Some Solution Methods               65


we obtain that

       d(exp(−At)X(t)) = (−A) exp(−At)X(t)dt + exp(−At)dX(t) .

Substituted in (5.1.11) this gives

                               Zt                       Zt
     exp(−At)X(t) − X(0) =           exp(−As)H(s)ds +        exp(−As)KdBs
                               0                        0

or

                    X(t) = exp(At)[X(0) + exp(−At)KBt
                        Zt
                     + exp(−As)[H(s) + AKBs ]ds] ,                            (5.1.12)
                          0

by integration by parts (Theorem 4.1.5).
Example 5.1.4. Choose X = B, 1-dimensional Brownian motion, and

             g(t, x) = eix = (cos x, sin x) ∈ R2     for x ∈ R .

Then
                     Y = g(t, X) = eiB = (cos B, sin B)
is by Itô’s formula again an Itô process.
    Its coordinates Y1 , Y2 satisfy
                     (
                       dY1 (t) = − sin(B)dB − 12 cos(B)dt
                      dY2 (t) = cos(B)dB − 12 sin(B)dt .

Thus the process Y = (Y1 , Y2 ), which we could call Brownian motion on the
unit circle, is the solution of the stochastic differential equations
                           (
                             dY1 = − 21 Y1 dt − Y2 dB
                                                                      (5.1.13)
                             dY2 = − 12 Y2 dt + Y1 dB .

Or, in matrix notation,
                                                        µ             ¶
                 1                                           0   −1
           dY = − Y dt + KY dB ,           where K =                      .
                 2                                           1   0

    Other examples and solution methods can be found in the exercises of
this chapter.
    For a comprehensive description of reduction methods for 1-dimensional
stochastic differential equations see Gard (1988), Chapter 4.
66       5. Stochastic Differential Equations


5.2 An Existence and Uniqueness Result

We now turn to the existence and uniqueness question (A) above.
Theorem 5.2.1. (Existence and uniqueness theorem for stochastic
differential equations).
    Let T > 0 and b(·, ·): [0, T ] × Rn → Rn , σ(·, ·): [0, T ] × Rn → Rn×m be
measurable functions satisfying

        |b(t, x)| + |σ(t, x)| ≤ C(1 + |x|) ; x ∈ Rn , t ∈ [0, T ]                (5.2.1)
                                       P
for some constant C, (where |σ|2 = |σij |2 ) and such that

 |b(t, x) − b(t, y)| + |σ(t, x) − σ(t, y)| ≤ D|x − y| ;   x, y ∈ Rn , t ∈ [0, T ] (5.2.2)

for some constant D. Let Z be a random variable which is independent of the
           (m)
σ-algebra F∞ generated by Bs (·), s ≥ 0 and such that

                                   E[|Z|2 ] < ∞ .

Then the stochastic differential equation

         dXt = b(t, Xt )dt + σ(t, Xt )dBt ,        0 ≤ t ≤ T, X0 = Z             (5.2.3)

has a unique t-continuous solution Xt (ω) with the property that

  Xt (ω) is adapted to the filtration FtZ generated by Z and Bs (·); s ≤ t
                                                                        (5.2.4)
and
                               · ZT         ¸
                                         2
                             E      |Xt | dt < ∞ .                      (5.2.5)
                                   0

Remarks. Conditions (5.2.1) and (5.2.2) are natural in view of the following
two simple examples from deterministic differential equations (i.e. σ = 0):
a) The equation
                             dXt
                                  = Xt2 , X0 = 1                  (5.2.6)
                              dt
     corresponding to b(x) = x2 (which does not satisfy (5.2.1)) has the
     (unique) solution
                                 1
                          Xt =      ;     0≤t<1.
                               1−t
     Thus it is impossible to find a global solution (defined for all t) in this
     case.
     More generally, condition (5.2.1) ensures that the solution Xt (ω) of (5.2.3)
     does not explode, i.e. that |Xt (ω)| does not tend to ∞ in a finite time.
                                    5.2 An Existence and Uniqueness Result                 67


b) The equation
                         dXt        2/3
                              = 3Xt ;          X0 = 0                                  (5.2.7)
                          dt
   has more than one solution. In fact, for any a > 0 the function
                              ½
                                    0       for t ≤ a
                        Xt =
                                (t − a)3 for t > a
   solves (5.2.7). In this case b(x) = 3x2/3 does not satisfy the Lipschitz
   condition (5.2.2) at x = 0.
   Thus condition (5.2.2) guarantees that equation (5.2.3) has a unique so-
   lution. Here uniqueness means that if X1 (t, ω) and X2 (t, ω) are two t-
   continuous processes satisfying (5.2.3), (5.2.4) and (5.2.5) then
                     X1 (t, ω) = X2 (t, ω)               for all t ≤ T , a.s.          (5.2.8)
Proof of Theorem 5.2.1. The uniqueness follows from the Itô isometry
(Corollary 3.1.7) and the Lipschitz property (5.2.2): Let X1 (t, ω) = Xt (ω)
and X2 (t, ω) = X  bt (ω) be solutions with initial values Z, Zb respectively, i.e.
                                  b
X1 (0, ω) = Z(ω), X2 (0, ω) = Z(ω),      ω ∈ Ω. For our purposes here we only
need the case Z = Z,   b but the following more general estimate will be useful
for us later, in connection with Feller continuity (Chapter 8).
    Put a(s, ω) = b(s, Xs ) − b(s, Xbs ) and γ(s, ω) = σ(s, Xs ) − σ(s, X
                                                                        bs ). Then
                                  ·µ                Zt           Zt             ¶2 ¸
                    bt | ] = E
            E[|Xt − X  2
                                       Z − Zb +          ads +           γdBs
                                                    0            0
                                        ·µ Zt      ¶2 ¸      ·µ Zt      ¶2 ¸
                        b 2 ] + 3E
              ≤ 3E[|Z − Z|                      ads     + 3E       γdBs
                                           0                               0
                                         · Zt            ¸       · Zt         ¸
                        b 2 ] + 3tE
              ≤ 3E[|Z − Z|                      2
                                                a ds + 3E                  2
                                                                          γ ds
                                           0                         0
                                                    Zt
                        b 2 ] + 3(1 + t)D2
              ≤ 3E[|Z − Z|                                       bs |2 ]ds .
                                                         E[|Xs − X
                                                    0

So the function
                                     b t |2 ] ;
                      v(t) = E[|Xt − X                       0≤t≤T
satisfies
                              Zt
               v(t) ≤ F + A        v(s)ds ,                                            (5.2.9)
                              0
                                     b 2 ] and A = 3(1 + T )D2 .
                   where F = 3E[|Z − Z|
68     5. Stochastic Differential Equations


By the Gronwall inequality (Exercise 5.17) we conclude that

                                     v(t) ≤ F exp(At) .                                  (5.2.10)

                    b Then F = 0 and so v(t) = 0 for all t ≥ 0. Hence
Now assume that Z = Z.

                        bt | = 0
               P [|Xt − X                  for all t ∈ Q ∩ [0, T ]] = 1 ,

where Q denotes the rational numbers.
                              bt | it follows that
   By continuity of t → |Xt − X

       P [|X1 (t, ω) − X2 (t, ω)| = 0            for all t ∈ [0, T ]] = 1 ,              (5.2.11)

and the uniqueness is proved.
    The proof of the existence is similar to the familiar existence proof for
                                          (0)           (k)     (k)
ordinary differential equations: Define Yt = X0 and Yt = Yt (ω) induc-
tively as follows
                            Zt                        Zt
           (k+1)
         Yt      = X0 +          b(s, Ys(k) )ds +          σ(s, Ys(k) )dBs .             (5.2.12)
                            0                         0

Then, similar computation as for the uniqueness above gives
                                                      Zt
             (k+1)     (k)
        E[|Yt      − Yt |2 ] ≤ (1 + T )3D2                 E[|Ys(k) − Ys(k−1) |2 ]ds ,
                                                      0

for k ≥ 1, t ≤ T and
                                     (1)   (0)
                           E[|Yt − Yt |2 ] ≤ 2C 2 t2 (1 + E[|X0 |2 ])
                            +2C 2 t(1 + E[|X0 |2 ]) ≤ A1 t

where the constant A1 only depends on C, T and E[|X0 |2 ]. So by induction
on k we obtain

            (k+1)       (k) 2         Ak+1
                                        2  tk+1
       E[|Yt        − Yt   | ]≤                 ;           k ≥ 0, t ∈ [0, T ]           (5.2.13)
                                       (k + 1)!

for some suitable constant A2 depending only on C, D, T and E[|X0 |2 ]. Now

                                                 ZT
                           (k+1)     (k)
                sup     |Yt      − Yt | ≤             |b(s, Ys(k) ) − b(s, Ys(k−1) )|ds
               0≤t≤T
                                                 0
                           ¯ Zt                              ¯
                           ¯                                 ¯
                           ¯        (k)
                    + sup ¯ (σ(s, Ys ) − σ(s, Ys(k−1)
                                                      ))dBs ¯¯ .
                     0≤t≤T
                                 0
                                                  5.2 An Existence and Uniqueness Result              69


By the martingale inequality (Theorem 3.2.4) we obtain
  ·                              ¸
            (k+1)     (k)     −k
 P sup |Yt        − Yt | > 2
     0≤t≤T
            ·µ ZT                                                    ¶2              ¸
      ≤P               |b(s, Ys(k) ) − b(s, Ys(k−1) )|ds                  >2−2k−2

                  0
                   ·  ¯ Zt                             ¯         ¸
                      ¯                                ¯
                      ¯       (k)
             +P sup ¯ (σ(s, Ys ) − σ(s, Ys(k−1)
                                                ))dBs ¯¯ > 2−k−1
                0≤t≤T
                                   0
                       ZT
      ≤ 22k+2 T             E(|b(s, Ys(k) ) − b(s, Ys(k−1) )|2 )ds
                       0
                            ZT
                  2k+2
             +2                  E[|σ(s, Ys(k) ) − σ(s, Ys(k−1) )|2 ]ds
                            0
                                       ZT
            2k+2       2                    Ak2 tk      (4A2 T )k+1
      ≤2           D (T + 1)                       dt ≤             ,          if A2 ≥ D2 (T + 1) .
                                             k!           (k + 1)!
                                       0

Therefore, by the Borel-Cantelli lemma,
         ·                                                   ¸
                   (k+1)     (k)    −k
       P sup |Yt         − Yt | > 2     for infinitely many k = 0 .
                0≤t≤T

Thus, for a.a. ω there exists k0 = k0 (ω) such that
                                       (k+1)         (k)
                           sup |Yt                − Yt     | ≤ 2−k         for k ≥ k0 .
                       0≤t≤T

Therefore the sequence
                                                         n−1
                                                         X
                        (n)                 (0)                   (k+1)           (k)
                      Yt        (ω) = Yt (ω) +                 (Yt        (ω) − Yt       (ω))
                                                         k=0

is uniformly convergent in [0, T ], for a.a. ω.
    Denote the limit by Xt = Xt (ω). Then Xt is t-continuous for a.a. ω since
  (n)
Yt    is t-continuous for all n. Moreover, Xt (·) is FtZ -measurable for all t,
        (n)
since Yt (·) has this property for all n.
    Next, note that for m > n ≥ 0 we have by (5.2.13)
                                                                          ° m−1            °
          (m)         (n) 2 1/2              (m)         (n)              ° X (k+1)    (k) °
    E[|Yt       −Yt        | ]      = kYt          −Yt         kL2 (P ) = °     (Yt −Yt )° 2
                                                                                                 L (P )
                                                                            k=n
    m−1
    X                                             ∞ ·
                                                  X             ¸1/2
            (k+1)           (k)                       (A2 t)k+1
≤         kYt          −Yt        kL2 (P ) ≤                                →0       as n → ∞ . (5.2.14)
                                                           (k + 1)!
    k=n                                           k=n
70      5. Stochastic Differential Equations

       (n)                                                                                       (n)
So {Yt } converges in L2 (P ) to a limit Yt , say. A subsequence of Yt (ω)
will then converge ω-pointwise to Yt (ω) and therefore we must have Yt = Xt
a.s. In particular, Xt satisfies (5.2.4) and (5.2.5).
    It remains to show that Xt satisfies (5.2.3). For all n we have

                                   Zt                      Zt
               (n+1)
             Yt      = X0 +             b(s, Ys(n) )ds +           σ(s, Ys(n) )dBs .            (5.2.15)
                                    0                      0

        (n+1)
Now Yt      → Xt as n → ∞, uniformly in t ∈ [0, T ] for a.a. ω. By (5.2.14)
and the Fatou lemma we have
             · ZT                       ¸                  · ZT                        ¸
                            (n)                                        (m)     (n)
        E           |Xt − Yt |2 dt          ≤ lim sup E             |Yt    − Yt |2 dt      →0
                                               m→∞
               0                                               0

as n → ∞. It follows by the Itô isometry that

                          Zt                           Zt
                               σ(s, Ys(n) )dBs →               σ(s, Xs )dBs
                          0                            0

and by the Hölder inequality that

                               Zt                      Zt
                                    b(s, Ys(n) )ds →           b(s, Xs )ds
                               0                       0

in L2 (P ). Therefore, taking the limit of (5.2.15) as n → ∞ we obtain (5.2.3)
for Xt .                                                                    t
                                                                            u


5.3 Weak and Strong Solutions

The solution Xt found above is called a strong solution, because the version
Bt of Brownian motion is given in advance and the solution Xt constructed
from it is FtZ -adapted. If we are only given the functions b(t, x) and σ(t, x)
                                  et , B
and ask for a pair of processes ((X    et ), Ht ) on a probability space (Ω, H, P )
such that (5.2.3) holds, then the solution X    et (or more precisely (X  et , B
                                                                               et )) is
called a weak solution. Here Ht is an increasing family of σ-algebras such that
Xet is Ht -adapted and B et is an Ht -Brownian motion, i.e. B    et is a Brownian
              e                                          e
motion, and Bt is a martingale w.r.t. Ht (and so E[Bt+h − B      et |Ht ] = 0 for all
t, h ≥ 0). Recall from Chapter 3 that this allows us to define the Itô integral
on the right hand side of (5.2.3) exactly as before, even though X     et need not
      Z
be Ft -adapted.
                                            5.3 Weak and Strong Solutions          71


    A strong solution is of course also a weak solution, but the converse is not
true in general. See Example 5.3.2 below.
    The uniqueness (5.2.8) that we obtain above is called strong or path-
wise uniqueness, while weak uniqueness simply means that any two solutions
(weak or strong) are identical in law, i.e. have the same finite-dimensional
distributions. See Stroock and Varadhan (1979) for results about existence
and uniqueness of weak solutions. A general discussion about strong and weak
solutions can be found in Krylov and Zvonkin (1981).
Lemma 5.3.1. If b and σ satisfy the conditions of Theorem 5.2.1 then we
have
       A solution (weak or strong) of (5.2.3) is weakly unique .

Sketch of proof . Let ((Xet , B
                              et ), H
                                    et ) and ((X
                                               bt , B
                                                    bt ), H
                                                          bt ) be two weak solutions.
Let Xt and Yt be the strong solutions constructed from B           et and B
                                                                          bt , respec-
tively, as above. Then the same uniqueness argument as above applies to show
that Xt = X  et and Yt = Xbt for all t, a.s. Therefore it suffices to show that Xt
and Yt must be identical in law. We show this by proving by induction that if
  (k)    (k)
Xt , Yt are the processes in the Picard iteration defined by (5.2.12) with
Brownian motions B   et and B bt , then

                              (k)et )             (k)    bt )
                           (Xt , B       and (Yt        ,B

have the same law for all k.                                                        t
                                                                                    u

     This observation will be useful for us in Chapter 7 and later, where we
will investigate further the properties of processes which are solutions of
stochastic differential equations (Itô diffusions).
     From a modelling point of view the weak solution concept is often natural,
because it does not specify beforehand the explicit representation of the white
noise. Moreover, the concept is convenient for mathematical reasons, because
there are stochastic differential equations which have no strong solutions but
still a (weakly) unique weak solution. Here is a simple example:
Example 5.3.2 (The Tanaka equation). Consider the 1-dimensional sto-
chastic differential equation

                       dXt = sign(Xt )dBt ;         X0 = 0 .                  (5.3.1)

where                                 ½
                                       +1 if x ≥ 0
                            sign(x) =
                                       −1 if x < 0 .
Note that here σ(t, x) = σ(x) = sign(x) does not satisfy the Lipschitz con-
dition (5.2.2), so Theorem 5.2.1 does not apply. Indeed, the equation (5.3.1)
                                         bt be a Brownian motion generating
has no strong solution. To see this, let B
               b
the filtration Ft and define
72      5. Stochastic Differential Equations


                                       Zt
                                Yt =             bs )dB
                                            sign(B    bs .
                                       0

By the Tanaka formula (4.3.12) (Exercise 4.10) we have
                                  bt | − | B
                           Yt = | B        b0 | − L
                                                  b t (ω) ,

where L b t (ω) is the local time for B
                                      bt (ω) at 0. It follows that Yt is measurable
w.r.t. the σ-algebra Gt generated by | B    bs (·)|; s ≤ t, which is clearly strictly
                 b
contained in Ft . Hence the σ-algebra Nt generated by Ys (·); s ≤ t is also
strictly contained in Fbt .
    Now suppose Xt is a strong solution of (5.3.1). Then by Theorem 8.4.2
it follows that Xt is a Brownian motion w.r.t. the measure P . (In case the
reader is worried about the possibility of a circular argument, we point out
that the proof of Theorem 8.4.2 is independent of this example!) Let Mt be
the σ-algebra generated by Xs (·); s ≤ t. Since (sign(x))2 = 1 we can rewrite
(5.3.1) as
                                dBt = sign(Xt )dXt .
By the above argument applied to B    bt = Xt , Yt = Bt we conclude that Ft is
strictly contained in Mt .
    But this contradicts that Xt is a strong solution. Hence strong solutions
of (5.3.1) do not exist.
    To find a weak solution of (5.3.1) we simply choose Xt to be any Brownian
motion B bt . Then we define B
                             et by

                           Zt                      Zt
                    et =
                    B                bs )dB
                                sign(B    bs =          sign(Xs )dXs
                           0                       0

i.e.
                                 et = sign(Xt )dXt .
                                dB
Then
                                                et ,
                                dXt = sign(Xt )dB
so Xt is a weak solution.
   Finally, weak uniqueness follows from Theorem 8.4.2, which – as noted
above – implies that any weak solution Xt must be a Brownian motion w.r.t.
P.


Exercises
5.1.   Verify that the given processes solve the given corresponding stochastic
       differential equations: (Bt denotes 1-dimensional Brownian motion)
                                                                         Exercises   73


       (i) Xt = eBt solves dXt = 12 Xt dt + Xt dBt
                 Bt
       (ii) Xt = 1+t ; B0 = 0 solves

                                       1           1
                            dXt = −       Xt dt +     dBt ;          X0 = 0
                                      1+t         1+t
       (iii) Xt = sin Bt with B0 = a ∈ (− π2 , π2 ) solves
                                  q                        ©            £         ¤ª
            dXt = − 12 Xt dt +                                        / − π2 , π2
                                      1−Xt2 dBt for t < inf s > 0; Bs ∈

       (iv) (X1 (t), X2 (t)) = (t, et Bt ) solves
                              ·       ¸ ·        ¸     ·     ¸
                                dX1            1           0
                                         =         dt + X1 dBt
                                dX2           X2         e

       (v) (X1 (t), X2 (t)) = (cosh(Bt ), sinh(Bt )) solves
                            ·     ¸      ·     ¸      ·     ¸
                              dX1     1 X1              X2
                                    =            dt +         dBt .
                              dX2     2 X2              X1

5.2.   A natural candidate for what we could call Brownian motion on the
       ellipse
                    n       x2    y2      o
                     (x, y); 2 + 2 = 1           where a > 0, b > 0
                            a     b
       is the process Xt = (X1 (t), X2 (t)) defined by

                             X1 (t) = a cos Bt ,     X2 (t) = b sin Bt

       where Bt is 1-dimensional Brownian motion. Show that Xt is a solution
       of the stochastic differential equation

                                  dXt = − 21 Xt dt + M Xt dBt
                    ·             ¸
                        0    − ab
       where M =        b           .
                        a     0
5.3.   Let (B1 , . . . , Bn ) be Brownian motion in Rn , α1 , . . . , αn constants.
       Solve the stochastic differential equation
                                          ³X
                                           n                 ´
                  dXt = rXt dt + Xt                αk dBk (t) ;    X0 > 0 .
                                            k=1

       (This is a model for exponential growth with several independent white
       noise sources in the relative growth rate).
5.4.   Solve the following stochastic differential equations:
74     5. Stochastic Differential Equations

             ·     ¸ · ¸         ·       ¸·     ¸
              dX1       1          1 0      dB1
       (i)           =      dt +
              dX2       0          0 X1     dB2
       (ii) dXt = Xt dt + dBt
             (Hint: Multiply both sides with “the integrating factor” e−t and
             compare with d(e−t Xt ))
       (iii) dXt = −Xt dt + e−t dBt .
5.5.   a) Solve the Ornstein-Uhlenbeck equation (or Langevin equation)

                                     dXt = µXt dt + σdBt

          where µ, σ are real constants, Bt ∈ R.
          The solution is called the Ornstein-Uhlenbeck process. (Hint: See
          Exercise 5.4 (ii).)
       b) Find E[Xt ] and Var[Xt ]: = E[(Xt − E[Xt ])2 ].

5.6.   Solve the stochastic differential equation

                                   dYt = r dt + αYt dBt

       where r, α are real constants, Bt ∈ R.
       (Hint: Multiply the equation by the ’integrating factor’
                                      ¡             ¢
                            Ft = exp − αBt + 12 α2 t . )

5.7.   The mean-reverting Ornstein-Uhlenbeck process is the solution Xt of
       the stochastic differential equation

                                dXt = (m − Xt )dt + σdBt

       where m, σ are real constants, Bt ∈ R.
       a) Solve this equation by proceeding as in Exercise 5.5 a).
       b) Find E[Xt ] and Var[Xt ]: = E[(Xt − E[Xt ])2 ].
5.8.   Solve the (2-dimensional) stochastic differential equation

                               dX1 (t) = X2 (t)dt + αdB1 (t)
                               dX2 (t) = −X1 (t)dt + βdB2 (t)

       where (B1 (t), B2 (t)) is 2-dimensional Brownian motion and α, β are
       constants.
       This is a model for a vibrating string subject to a stochastic force. See
       Example 5.1.3.

5.9.   Show that there is a unique strong solution Xt of the 1-dimensional
       stochastic differential equation

                 dXt = ln(1 + Xt2 )dt + X{Xt >0} Xt dBt ,   X0 = a ∈ R .
                                                                           Exercises       75


5.10. Let b, σ satisfy (5.2.1), (5.2.2) and let Xt be the unique strong solution
      of (5.2.3). Show that
                        E[|Xt |2 ] ≤ K1 · exp(K2 t)             for t ≤ T              (5.3.2)
      where K1 = 3E[|Z|2 ] + 6C 2 T (T + 1) and K2 = 6(1 + T )C 2 .
      (Hint: Use the argument in the proof of (5.2.10)).
Remark. With global estimates of the growth of b and σ in (5.2.1) it is
possible to improve (5.3.2) to a global estimate of E[|Xt |2 ]. See Exercise 7.5.

5.11. (The Brownian bridge).
      For fixed a, b ∈ R consider the following 1-dimensional equation
                       b − Yt
               dYt =          dt + dBt ;             0 ≤ t < 1 , Y0 = a .              (5.3.3)
                        1−t
      Verify that
                                                Zt
                                                     dBs
             Yt = a(1 − t) + bt + (1 − t)                ;         0≤t<1               (5.3.4)
                                                     1−s
                                                0

      solves the equation and prove that lim Yt = b a.s. The process Yt is
                                                     t→1
      called the Brownian bridge (from a to b). For other characterizations
      of Yt see Rogers and Williams (1987, pp. 86–89).

5.12. To describe the motion of a pendulum with small, random perturba-
      tions in its environment we try an equation of the form
                    y 00 (t) + (1 + ²Wt )y = 0 ;           y(0), y 0 (0) given ,
      where Wt = dB dt is 1-dimensional white noise, ² > 0 is constant.
                      t


      a) Discuss this equation, for example by proceeding as in Exam-
         ple 5.1.3.
      b) Show that y(t) solves a stochastic Volterra equation of the form
                                           Zt                       Zt
                                0
              y(t) = y(0) + y (0) · t +         a(t, r)y(r)dr +          γ(t, r)y(r)dBr
                                           0                         0

          where a(t, r) = r − t, γ(t, r) = ²(r − t).
5.13. As a model for the horizontal slow drift motions of a moored floating
      platform or ship responding to incoming irregular waves John Grue
      (1989) introduced the equation
                         x00t + a0 x0t + w2 xt = (T0 − α0 x0t )ηWt ,                   (5.3.5)
      where Wt is 1-dimensional white noise, a0 , w, T0 , α0 and η are con-
      stants.
76     5. Stochastic Differential Equations

                          ·         ¸
                              xt
      (i)   Put Xt =                    and rewrite the equation in the form
                              x0t

                                    dXt = AXt dt + KXt dBt + M dBt ,

            where
                ·                     ¸                         ·            ¸                         · ¸
                   0               1                                0   0                               0
             A=                         ,     K = α0 η                           and M = T0 η              .
                  −w2             −a0                               0   −1                              1

      (ii) Show that Xt satisfies the integral equation

                      Zt                                    Zt
                                  A(t−s)
               Xt =           e            KXs dBs +                eA(t−s) M dBs          if X0 = 0 .
                      0                                     0

      (iii) Verify that

                                         e−λt
                           eAt =              {(ξ cos ξt + λ sin ξt)I + A sin ξt}
                                          ξ
                                                  a2    1
            where λ = a20 , ξ = (w2 − 40 ) 2 and use this to prove that

                                                  Zt
                                         xt = η        (T0 − α0 ys )gt−s dBs                           (5.3.6)
                                                  0

            and
                           Zt
                  yt = η          (T0 − α0 ys )ht−s dBs ,                    with yt : = x0t ,         (5.3.7)
                           0

            where
                           1
                       gt =  Im(eζt )
                           ξ
                           1                                                               √
                       ht = Im(ζeζ̄t ) ,                     ζ = −λ + iξ            (i =       −1) .
                           ξ
            So we can solve for yt first in (5.3.7) and then substitute in (5.3.6)
            to find xt .
5.14. If (B1 , B2 ) denotes 2-dimensional Brownian motion we may introduce
      complex notation and put
                                                      √
                         B(t): = B1 (t) + iB2 (t) (i = −1) .

      B(t) is called complex Brownian motion.
                                                               Exercises       77


      (i) If F (z) = u(z) + iv(z) is an analytic function i.e. F satisfies the
          Cauchy-Riemann equations
                       ∂u   ∂v       ∂u    ∂v
                          =    ,        =−    ;         z = x + iy
                       ∂x   ∂y       ∂y    ∂x
          and we define
                                      Zt = F (B(t))
          prove that
                                 dZt = F 0 (B(t))dB(t) ,                   (5.3.8)
                   0
           where F is the (complex) derivative of F . (Note that the usual
           second order terms in the (real) Itô formula are not present in
           (5.3.8)!)
      (ii) Solve the complex stochastic differential equation

                            dZt = αZt dB(t) α constant) .

          For more information about complex stochastic calculus involving
          analytic functions see e.g. Ubøe (1987).
5.15. (Population growth in a stochastic, crowded environment)
      The nonlinear stochastic differential equation

            dXt = rXt (K − Xt )dt + βXt dBt ;         X0 = x > 0           (5.3.9)

      is often used as a model for the growth of a population of size Xt in
      a stochastic, crowded environment. The constant K > 0 is called the
      carrying capacity of the environment, the constant r ∈ R is a measure
      of the quality of the environment and the constant β ∈ R is a measure
      of the size of the noise in the system.
      Verify that

                      exp{(rK − 12 β 2 )t + βBt }
         Xt =                                         ;        t≥0     (5.3.10)
                        Rt
                x−1 + r exp{(rK − 12 β 2 )s + βBs }ds
                        0

      is the unique (strong) solution of (5.3.9). (This solution can be found by
      performing a substitution (change of variables) which reduces (5.3.9)
      to a linear equation. See Gard (1988), Chapter 4 for details.)

5.16. The technique used in Exercise 5.6 can be applied to more general
      nonlinear stochastic differential equations of the form

                dXt = f (t, Xt )dt + c(t)Xt dBt ,     X0 = x           (5.3.11)

      where f : R × R → R and c: R → R are given continuous (determinis-
      tic) functions. Proceed as follows:
78     5. Stochastic Differential Equations


      a) Define the ’integrating factor’

                                  µ       Zt                  Zt          ¶
                                                                   2
              Ft = Ft (ω) = exp       −        c(s)dBs + 12        c (s)ds .   (5.3.12)
                                           0                  0

         Show that (5.3.11) can be written

                               d(Ft Xt ) = Ft · f (t, Xt )dt .                 (5.3.13)

      b) Now define
                                   Yt (ω) = Ft (ω)Xt (ω)                       (5.3.14)
         so that
                                          Xt = Ft−1 Yt .                       (5.3.15)
         Deduce that equation (5.3.13) gets the form

              dYt (ω)
                      = Ft (ω) · f (t, Ft−1 (ω)Yt (ω)) ;            Y0 = x .   (5.3.16)
                dt
         Note that this is just a deterministic differential equation in the
         function t → Yt (ω), for each ω ∈ Ω. We can therefore solve (5.3.16)
         with ω as a parameter to find Yt (ω) and then obtain Xt (ω) from
         (5.3.15).
      c) Apply this method to solve the stochastic differential equation
                           1
                   dXt =      dt + αXt dBt ;           X0 = x > 0              (5.3.17)
                           Xt
         where α is constant.
      d) Apply the method to study the solutions of the stochastic differen-
         tial equation

                   dXt = Xtγ dt + αXt dBt ;            X0 = x > 0              (5.3.18)

         where α and γ are constants.
         For what values of γ do we get explosion?
5.17. (The Gronwall inequality)
      Let v(t) be a nonnegative function such that

                                      Zt
                      v(t) ≤ C + A         v(s)ds       for 0 ≤ t ≤ T
                                      0

      for some constants C, A. Prove that

                        v(t) ≤ C exp(At)            for 0 ≤ t ≤ T .            (5.3.19)
                                                         Exercises    79


                                              Rt
(Hint: We may assume A 6= 0. Define w(t) =         v(s)ds . Then w0 (t) ≤
                                              0
C + Aw(t). Deduce that

                                C
                       w(t) ≤     (exp(At) − 1)                  (5.3.20)
                                A
by considering f (t): = w(t) exp(−At).
Use (5.3.20) to deduce (5.3.19.)
80   5. Stochastic Differential Equations
6. The Filtering Problem




6.1 Introduction

Problem 3 in the introduction is a special case of the following general filtering
problem:
    Suppose the state Xt ∈ Rn at time t of a system is given by a stochastic
differential equation
                   dXt
                       = b(t, Xt ) + σ(t, Xt )Wt ,       t≥0,              (6.1.1)
                    dt
where b: Rn+1 → Rn , σ: Rn+1 → Rn×p satisfy conditions (5.2.1), (5.2.2) and
Wt is p-dimensional white noise. As discussed earlier the Itô interpretation
of this equation is

(system)          dXt = b(t, Xt )dt + σ(t, Xt )dUt ,                      (6.1.2)

where Ut is p-dimensional Brownian motion. We also assume that the distri-
bution of X0 is known and independent of Ut . Similarly to the 1-dimensional
situation (3.3.6) there is an explicit several-dimensional formula which ex-
presses the Stratonovich interpretation of (6.1.1):

                       dXt = b(t, Xt )dt + σ(t, Xt ) ◦ dUt

in terms of Itô integrals as follows:

            dXt = eb(t, Xt )dt + σ(t, Xt )dUt ,    where
                                       p  n
                                      X X ∂σij
           ebi (t, x) = bi (t, x) + 1           σkj ;    1≤i≤n.            (6.1.3)
                                    2       ∂xk
                                      j=1k=1

(See Stratonovich (1966)). From now on we will use the Itô interpretation
(6.1.2).
    In the continuous version of the filtering problem we assume that the
observations Ht ∈ Rm are performed continuously and are of the form
                                                      ft ,
                         Ht = c(t, Xt ) + γ(t, Xt ) · W                    (6.1.4)
82       6. The Filtering Problem


where c: Rn+1 → Rm , γ: Rn+1 → Rm×r are functions satisfying (5.2.1) and
ft denotes r-dimensional white noise, independent of Ut and X0 .
W
   To obtain a tractable mathematical interpretation of (6.1.4) we introduce

                                           Zt
                                    Zt =        Hs ds                      (6.1.5)
                                           0

and thereby we obtain the stochastic integral representation

(observations)       dZt = c(t, Xt )dt + γ(t, Xt )dVt ,   Z0 = 0           (6.1.6)

where Vt is r-dimensional Brownian motion, independent of Ut and X0 .
    Note that if Hs is known for 0 ≤ s ≤ t, then Zs is also known for 0 ≤ s ≤ t
and conversely. So no information is lost or gained by considering Zt as our
“observations” instead of Ht . But this allows us to obtain a well-defined
mathematical model of the situation.
    The filtering problem is the following:
    Given the observations Zs satisfying (6.1.6) for 0 ≤ s ≤ t, what is the best
estimate Xbt of the state Xt of the system (6.1.2) based on these observations?
    As we have pointed out earlier, it is necessary to find a precise mathe-
matical formulation of this problem: By saying that the estimate X   bt is based
on the observations {Zs ; s ≤ t} we mean that

             bt (·) is Gt -measurable,
             X
             where Gt is the σ-algebra generated by {Zs (·), s ≤ t} .      (6.1.7)

By saying that X bt is the best such estimate we mean that
   Z
     |Xt − Xbt |2 dP = E[|Xt − X  bt |2 ] = inf{E[|Xt − Y |2 ]; Y ∈ K} .   (6.1.8)
     Ω

Here – and in the rest of this chapter – (Ω, F, P ) is the probability space
corresponding to the (p + r)-dimensional Brownian motion (Ut , Vt ) starting
at 0, E denotes expectation w.r.t. P and

  K: = Kt : = K(Z, t): = {Y : Ω → Rn ; Y ∈ L2 (P ) and Y is Gt -measurable} ,
                                                                        (6.1.9)
where L2 (P ) = L2 (Ω, P ).
    Having found the mathematical formulation of our problem, we now start
to study the properties of the solution X bt .
    We first establish the following useful connection between conditional ex-
pectation and projection:
Lemma 6.1.1. Let H ⊂ F be a σ-algebra and let X ∈ L2 (P ) be F-
measurable. Put N = {Y ∈ L2 (P ); Y is H-measurable} and let PN denote
                             6.2 The 1-Dimensional Linear Filtering Problem   83


the (orthogonal) projection from the Hilbert space L2 (P ) into the subspace
N . Then
                            PN (X) = E[X|H] .
Proof. Recall (see Appendix B) that E[X|H] is by definition the P -unique
function from Ω to R such that

(i) E[X|H]
    R      is H-measurable
                 R
(ii) E[X|H]dP = XdP for all A ∈ H.
       A                 A

       Now PN (X) is H-measurable and
                Z
                    Y (X − PN (X))dP = 0           for all Y ∈ N .
                 Ω

In particular,
                     Z
                         (X − PN (X))dP = 0        for all A ∈ H
                     A

i.e.              Z                   Z
                         PN (X)dP =       XdP     for all A ∈ H .
                  A                   A

Hence, by uniqueness, PN (X) = E[X|H].                                         t
                                                                               u

    From the general theory of Hilbert spaces we know that the solution X bt
of the problem (6.1.8) is given by the projection PKt (Xt ). Therefore Lemma
6.1.1 leads to the following useful result:
Theorem 6.1.2.
                             bt = PK (Xt ) = E[Xt |Gt ] .
                             X      t


    This is the basis for the general Fujisaki-Kallianpur-Kunita equation of fil-
tering theory. See for example Bensoussan (1992), Davis (1984) or Kallianpur
(1980).


6.2 The 1-Dimensional Linear Filtering Problem

From now on we will concentrate on the linear case, which allows an explicit
solution in terms of a stochastic differential equation for Xbt (the Kalman-
Bucy filter ):
    In the linear filtering problem the system and observation equations have
the form:
84       6. The Filtering Problem


(linear system)               dXt = F (t)Xt dt+C(t)dUt ;
                                         F (t) ∈ Rn×n , C(t) ∈ Rn×p           (6.2.1)
(linear observations)       dZt = G(t)Xt dt+D(t)dVt ;
                                        G(t) ∈ Rm×n , D(t) ∈ Rm×r             (6.2.2)

   To be able to focus on the main ideas in the solution of the filtering
problem, we will first consider only the 1-dimensional case:
(linear system)             dXt = F (t)Xt dt + C(t)dUt ; F (t), C(t) ∈ R       (6.2.3)
(linear observations)       dZt = G(t)Xt dt + D(t)dVt ; G(t), D(t) ∈ R         (6.2.4)

    We assume (see (5.2.1)) that F, G, C, D are bounded on bounded intervals.
Based on our interpretation (6.1.5) of Zt we assume Z0 = 0. We also assume
that X0 is normally distributed (and independent of {Ut }, {Vt }). Finally we
assume that D(t) is bounded away from 0 on bounded intervals.
    The (important) extension to the several-dimensional case (6.2.1), (6.2.2)
is technical, but does not require any essentially new ideas. Therefore we shall
only state the result for this case (in the next section) after we have discussed
the 1-dimensional situation. The reader is encouraged to work out the nec-
essary modifications for the general case for himself or consult Bensoussan
(1992), Davis (1977) or Kallianpur (1980) for a full treatment.
    From now on we let Xt , Zt be processes satisfying (6.2.3), (6.2.4). Here is
an outline of the solution of the filtering problem in this case.

Step 1. Let L = L(Z, t) be the closure in L2 (P ) of functions which are
linear combinations of the form
          c0 + c1 Zs1 (ω) + · · · + ck Zsk (ω) ,      with sj ≤ t, cj ∈ R .
Let
                  PL     denote the projection from L2 (P ) onto L .
Then, with K as in (6.1.9),
                          bt = PK (Xt ) = E[Xt |Gt ] = PL (Xt ) .
                          X
Thus, the best Z-measurable estimate of Xt coincides with the best Z-linear
estimate of Xt .

Step 2. Replace Zt by the innovation process Nt :
                 Zt
     Nt = Zt −        (GX)∧        where (GX)∧                           b
                          s ds ,             s = PL(Z,s) (G(s)Xs ) = G(s)Xs .
                 0

Then
(i) Nt has orthogonal increments, i.e.
    E[(Nt1 −Ns1 )(Nt2 −Ns2 )] = 0 for non-overlapping intervals [s1 , t1 ], [s2 , t2 ].
                          6.2 The 1-Dimensional Linear Filtering Problem            85


                           bt = PL(N,t) (Xt ).
(ii) L(N, t) = L(Z, t), so X

Step 3. If we put
                                          1
                                 dRt =        dNt ,
                                         D(t)
then Rt is a 1-dimensional Brownian motion. Moreover,

        L(N, t) = L(R, t)        and
                                                           Zt
        bt = PL(N,t) (Xt ) = PL(R,t) (Xt ) = E[Xt ] +           ∂
        X                                                          E[Xt Rs ]dRs .
                                                                ∂s
                                                           0

Step 4. Find an expression for Xt by solving the (linear) stochastic differ-
ential equation
                     dXt = F (t)Xt dt + C(t)dUt .
Step 5. Substitute the formula for Xt from Step 4 into E[Xt Rs ] and use
                                                        bt :
Step 3 to obtain a stochastic differential equation for X
                                         µ Zt                    ¶
         bt = ∂ E[Xt Rs ]s=t dRt +               ∂2
        dX                                           E[Xt Rs ]dRs dt         etc.
              ∂s                                ∂t∂s
                                           0

Before we proceed to establish Steps 1–5, let us consider a simple, but moti-
vating example:
Example 6.2.1. Suppose X, W1 , W2 , . . . are independent real random vari-
ables, E[X] = E[Wj ] = 0 for all j, E[X 2 ] = a2 , E[Wj2 ] = m2 for all j. Put
Zj = X + W j .
                                    b of X based on {Zj ; j ≤ k} ? More
   What is the best linear estimate X
precisely, let

             L = L(Z, k) = {c1 Z1 + · · · + ck Zk ; c1 , . . . , ck ∈ R} .

Then we want to find
                                   bk = Pk (X) ,
                                   X
where Pk denotes the projection into L(Z, k).
   We use the Gram-Schmidt procedure to obtain random variables A1 , A2 , . . .
such that
(i) E[Ai Aj ] = 0 for i 6= j
(ii) L(A, k) = L(Z, k) for all k.
86       6. The Filtering Problem


     Then
                          k
                          X
                   bk =     E[XAj ]
                   X                      Aj           for k = 1, 2, . . . .        (6.2.5)
                          j=1
                                E[A2j ]

                                       bk and X
We obtain a recursive relation between X       bk−1 from this by observing
that
                             Aj = Zj − Xbj−1 ,                      (6.2.6)
which follows from

       Aj = Zj − Pj−1 (Zj ) = Zj − Pj−1 (X) ,                  since Pj−1 (Wj ) = 0 .

By (6.2.6)
                         bj−1 )] = E[X(X − X
      E[XAj ] = E[X(Zj − X                 bj−1 )] = E[(X − X
                                                            bj−1 )2 ]

and
                                  bj−1 )2 ] = E[(X − X
            E[A2j ] = E[(X + Wj − X                  bj−1 )2 ] + m2 .
Hence
                                    bk−1 )2 ]
                             E[(X − X
            bk = X
            X    bk−1 +                              bk−1 ) .
                                                (Z − X                              (6.2.7)
                          E[(X − Xbk−1 )2 ] + m2 k

If we introduce
                                                   k
                                          1X
                                  Zk =          Zj ,
                                          k j=1

then this can be simplified to

                                bk =       a2
                                X                   Zk .                            (6.2.8)
                                       a2 + k1 · m2

(This can be seen as follows:
   Put
                                    a2
                        αk =                   ,       Uk = αk Z k .
                                a2 + k1 m2
Then
(i) Uk ∈ L(Z, k)
(ii) X − Uk ⊥L(Z, k), since

        E[(X − Uk )Zi ] = E[XZi ] − αk E[Z k Zi ]
                                1X
         = E[X(X + Wi )] − αk         E[Zj Zi ]
                                k j
                   1 X                              1
          = a2 −     αk   E[(X +Wj )(X +Wi )] = a2 − αk [ka2 +m2 ] = 0 .)
                   k    j
                                                    k
                           6.2 The 1-Dimensional Linear Filtering Problem        87


    The result can be interpreted as follows:
    For large k we put Xbk ≈ Z k , while for small k the relation between a2
and m becomes more important. If m2 À a2 , the observations are to a large
      2

extent neglected (for small k) and Xbk is put equal to its mean value, 0. See
also Exercise 6.11.
    This example gives the motivation for our approach:
    We replace the process Zt by an orthogonal increment process Nt (Step 2)
                                        bt analogous to (6.2.5). Such a rep-
in order to obtain a representation for X
resentation is obtained in Step 3, after we have identified the best linear
estimate with the best measurable estimate (Step 1) and established the con-
nection between Nt and Brownian motion.

Step 1. Z-Linear and Z-Measurable Estimates

Lemma 6.2.2. Let X, Zs ; s ≤ t be random variables in L2 (P ) and assume
that
                   (X, Zs1 , Zs2 , . . . , Zsn ) ∈ Rn+1
has a normal distribution for all s1 , s2 , . . . , sn ≤ t, n ≥ 1. Then

                           PL (X) = E[X|G] = PK (X) .

In other words, the best Z-linear estimate for X coincides with the best Z-
measurable estimate in this case.
Proof. Put X̌ = PL (X), X   e = X − X̌. Then we claim that X       e is independent
of G: Recall that a random variable (Y1 , . . . , Yk ) ∈ Rk is normal iff c1 Y1 +
· · · + ck Yk is normal, for all choices of c1 , . . . , ck ∈ R. And an L2 -limit of
normal variables is again normal (Appendix A). Therefore

               e Z s , . . . , Zs )
              (X,                     is normal for all s1 , . . . , sn ≤ t .
                    1            n


        e s ] = 0, X
Since E[XZ         e and Zs are uncorrelated, for 1 ≤ j ≤ n. It follows
           j               j
(Appendix A) that

                     e and (Zs , . . . , Zs ) are independent .
                     X        1            n


   e is independent from G as claimed. But then
So X
                            e = E[XG ] · E[X]
      E[XG (X − X̌)] = E[XG X]             e = 0 for all G ∈ G
    R       R
i.e. XdP = X̌dP . Since X̌ is G-measurable, we conclude that
   G           G
X̌ = E[X|G].                                                                      t
                                                                                  u
88      6. The Filtering Problem


    There is a curious interpretation of this result: Suppose X, {Zt }t∈T are
L2 (P )-functions with given covariances. Among all possible distributions of

                                       (X, Zt1 , . . . , Ztn )

with these covariances, the normal distribution will be the “worst” w.r.t.
estimation, in the following sense: For any distribution we have

                    E[(X − E[X|G])2 ] ≤ E[(X − PL (X))2 ] ,

with equality for the normal distribution, by Lemma 6.2.2. (Note that the
quantity on the right hand side only depends on the covariances, not on
the distribution we might choose to obtain these covariances). For a broad
discussion of similar conclusions, based on an information theoretical game
between nature and the observer, see Topsöe (1978).
    Finally, to be able to apply Lemma 6.2.2 to our filtering problem, we need
the following result:
Lemma 6.2.3.
                          ·        ¸
                              Xt
                  Mt =                 ∈ R2     is a Gaussian process .
                              Zt

Proof. We may regard Mt as the solution of a 2-dimensional linear stochastic
differential equation of the form
                                                   ·    ¸
                                                     X0
                  dMt = H(t)Mt dt + K(t)dBt , M0 =        ;          (6.2.9)
                                                     0

where H(t) ∈ R2×2 , K(t) ∈ R2×2 and Bt is 2-dimensional Brownian motion.
   Use Picard iteration to solve (6.2.9), i.e. put
                    Zt                         Zt
  (n+1)
 Mt     = M0 +           H(s)Ms(n) ds +             K(s)dBs ,    n = 0, 1, 2, . . . (6.2.10)
                    0                          0

         (n)                                         (n)
Then Mt is Gaussian for all n and Mt → Mt in L2 (P ) (see the proof of
Theorem 5.2.1) and therefore Mt is Gaussian (Theorem A.7).          t
                                                                    u

Step 2. The Innovation Process

Before we introduce the innovation process we will establish a useful repre-
sentation of the functions in the space

           L(Z, T ) = the closure in L2 (P ) of all linear combinations
                     c0 + c1 Zt1 + · · · + ck Ztk ; 0 ≤ ti ≤ T, cj ∈ R .

If f ∈ L2 [0, T ], note that
                                     6.2 The 1-Dimensional Linear Filtering Problem                              89


         ·µ ZT              ¶2 ¸         ·µ ZT                   ¶2 ¸    ·µ ZT              ¶2 ¸
     E           f (t)dZt          =E              f (t)G(t)Xt dt     +E       f (t)D(t)dVt
             0                                 0                                          0
                               ·µ ZT                   ¶µ ZT              ¶¸
                         +2E             f (t)G(t)Xt dt      f (t)D(t)dVt    .
                                     0                               0

Since
  ·µ ZT              ¶2 ¸       ZT
E      f (t)G(t)Xt dt     ≤ A1 · f (t)2 dt by the Cauchy-Schwartz inequality,
         0                                     0
    ·µ ZT                     ¶2 ¸       ZT
E            f (t)D(t)dVt            =        f (t)2 D2 (t)dt by the Itô isometry
         0                               0

and {Xt }, {Vt } are independent, we conclude that
                  ZT                     ·µ ZT                ¶2 ¸           ZT
             A0        f 2 (t)dt ≤ E               f (t)dZt          ≤ A2         f 2 (t)dt ,            (6.2.11)
                  0                           0                              0

for some constants A0 , A1 , A2 not depending on f . We can now show
                                                    RT
Lemma 6.2.4. L(Z, T ) = {c0 +                            f (t)dZt ; f ∈ L2 [0, T ], c0 ∈ R}.
                                                    0

Proof. Denote the right hand side by N (Z, T ). It is enough to show that
a) N (Z, T ) ⊂ L(Z, T )
b) N (Z, T ) contains all linear combinations of the form
                              c0 + c1 Zt1 + · · · + ck Ztk ;                 0 ≤ ti ≤ T
c) N (Z, T ) is closed in L2 (P )

a): This follows from the fact that if f is continuous then
                 ZT                           X
                      f (t)dZt = lim               f (j · 2−n ) · (Z(j+1)2−n − Zj·2−n ) .
                                     n→∞
                 0                             j

b): Suppose 0 ≤ t1 < t2 < · · · < tk ≤ T . We can write
                                                  tj+1
      k
      X                 k−1
                        X                     X Z
                                              k−1                        ZT ³ k−1
                                                                              X                         ´
             ci Zti =         c0j ∆Zj =                   c0j dZt =                 c0j X[tj ,tj+1 ) (t) dZt ,
      i=1               j=0                   j=0 t                      0   j=0
                                                    j


    where ∆Zj = Ztj+1 − Ztj .
c): This follows from (6.2.11) and the fact that L2 [0, T ] is complete.                                         t
                                                                                                                 u
90         6. The Filtering Problem


       Now we define the innovation process Nt as follows:
                     Zt
       Nt = Zt −          (GX)∧               ∧                           b
                              s ds, where (GX)s = PL(Z,s) (G(s)Xs ) = G(s)Xs .
                     0
                                                                                     (6.2.12)
i.e.
                                                bt )dt + D(t)dVt .
                                dNt = G(t)(Xt − X                                    (6.2.13)
Lemma 6.2.5. (i) Nt has orthogonal increments
              Rt
(ii) E[Nt2 ] = D2 (s)ds
                 0
(iii) L(N, t) = L(Z, t) for all t ≥ 0
(iv) Nt is a Gaussian process
Proof. (i): If s < t and Y ∈ L(Z, s) we have
                                         ·µ Zt                ¶    Zt          ¸
            E[(Nt − Ns )Y ] = E                             b
                                                  G(r)(Xr − Xr dr + D(r)dVr )Y
                                             s                            s
                     Zt                                       ·µ Zt       ¶ ¸
                 =                     br )Y ]dr + E
                           G(r)E[(Xr − X                               DdV Y = 0 ,
                     s                                             s

          br ⊥L(Z, r) ⊃ L(Z, s) for r ≥ s and V has independent increments.
since Xr −X

       (ii): By Itô’s formula, with g(t, x) = x2 , we have

                  d(Nt2 ) = 2Nt dNt + 21 2(dNt )2 = 2Nt dNt + D2 dt .

So
                                           · Zt           ¸   Zt
                           E[Nt2 ] = E            2Ns dNs +        D2 (s)ds .
                                            0                  0
Now
                           Zt                        X
                                Ns dNs = lim             Ntj [Ntj+1 − Ntj ] ,
                                            ∆tj →0
                           0
so since N has orthogonal increments we have
                               · Zt         ¸
                          E           Ns dNs = 0 ,         and (ii) follows .
                                0

(iii): It is clear that L(N, t) ⊂ L(Z, t) for all t ≥ 0. To establish the opposite
inclusion we use Lemma 6.2.4. So choose f ∈ L2 [0, t] and let us see what
functions can be obtained in the form
                                   6.2 The 1-Dimensional Linear Filtering Problem                    91


            Zt                     Zt                     Zt
                 f (s)dNs =             f (s)dZs −                      br dr
                                                               f (r)G(r)X
            0                      0                       0
                     Zt                     Zt        · Zr           ¸    Zt
                 =        f (s)dZs −             f (r)     g(r, s)dZs dr − f (r)c(r)dr
                     0                      0             0                       0
                     Zt ·              Zt                      ¸         Zt
                 =          f (s) −         f (r)g(r, s)dr dZs −              f (r)c(r)dr ,
                     0                 s                                 0

where we have used Lemma 6.2.2 and Lemma 6.2.4 to write, for each r,
                             Zr
   (GX)∧
       r = c(r) +                 g(r, s)dZs              for some g(r, ·) ∈ L2 [0, r], c(r) ∈ R .
                             0

From the theory of Volterra integral equations (see e.g. Davis (1977), p. 125)
there exists for all h ∈ L2 [0, t] an f ∈ L2 [0, t] such that
                                                 Zt
                                  f (s) −             f (r)g(r, s)dr = h(s).
                                                 s

So by choosing h = X[0,t1 ] where 0 ≤ t1 ≤ t, we obtain

                Zt                          Zt                  Zt
                     f (r)c(r)dr +               f (s)dNs =          X[0,t1 ] (s)dZs = Zt1 ,
                 0                          0                   0

which shows that L(N, t) ⊃ L(Z, t).
         bt is a limit (in L2 (P )) of linear combinations of the form
   (iv): X

                 M = c0 + c1 Zs1 + · · · + ck Zsk ,                       where sk ≤ t .

Therefore
                                                  bt , . . . , X
                                                 (X            bt )
                                                    1            m

is a limit of m-dimensional random variables (M (1) , . . . , M (m) ) whose com-
ponents M (j) are linear combinations of this form. (M (1) , . . . , M (m) ) has a
normal distribution since {Zt } is Gaussian, and therefore the limit has. Hence
{Xbt } is Gaussian. It follows that

                                                          Zt
                                        Nt = Zt −                  bs ds
                                                               G(s)X
                                                           0

is Gaussian, by a similar argument.                                                                  t
                                                                                                     u
92       6. The Filtering Problem


Step 3. The Innovation Process and Brownian Motion

                   Rt
Let Nt = Zt −               bs ds be the innovation process defined in Step 2.
                        G(s)X
                   0
Recall that we have assumed that D(t) is bounded away from 0 on bounded
intervals. Define the process Rt (ω) by
                              1
                    dRt =         dNt (ω) ;       t ≥ 0, R0 = 0 .       (6.2.14)
                             D(t)

Lemma 6.2.6. Rt is a 1-dimensional Brownian motion.
Proof. Observe that
(i) Rt has continuous paths
(ii) Rt has orthogonal increments (since Nt has)
(iii) Rt is Gaussian (since Nt is)
(iv) E[Rt ] = 0 and E[Rt Rs ] = min(s, t).

     To prove the last assertion in (iv), note that by Itô’s formula

                   d(Rt2 ) = 2Rt dRt + (dRt )2 = 2Rt dRt + dt ,

so, since Rt has orthogonal increments,

                                           Zt
                               E[Rt2 ] = E[ ds] = t .
                                              0

Therefore, if s < t,

               E[Rt Rs ] = E[(Rt − Rs )Rs ] + E[Rs2 ] = E[Rs2 ] = s .

Properties (i), (iii) and (iv) constitute one of the many characterizations of a
1-dimensional Brownian motion (see Simon (1979), Theorem 4.3). (Alterna-
tively, we could easily deduce that Rt has stationary, independent increments
and therefore – by continuity – must be Brownian motion, by the result previ-
ously referred to in the beginning of Chapter 3. For a general characterization
of Brownian motion see Corollary 8.4.5.) t   u

     Since
                                 L(N, t) = L(R, t)
we conclude that
                                 bt = PL(R,t) (Xt ) .
                                 X
It turns out that the projection down to the space L(R, t) can be described
very nicely: (compare with formula (6.2.5) in Example 6.2.1)
                                6.2 The 1-Dimensional Linear Filtering Problem                        93


Lemma 6.2.7.
                                                 Zt
                           bt = E[Xt ] +                 ∂
                           X                                E[Xt Rs ]dRs .                       (6.2.15)
                                                         ∂s
                                                 0

Proof. From Lemma 6.2.4 we know that
                        Zt
       bt = c0 (t) +
       X                       g(s)dRs           for some g ∈ L2 [0, t], c0 (t) ∈ R .
                           0

                                           bt ] = E[Xt ]. We have
Taking expectations we see that c0 (t) = E[X
                                   Zt
                         bt )⊥
                   (Xt − X              f (s)dRs                  for all f ∈ L2 [0, t] .
                                   0

Therefore
      · Zt       ¸   · Zt        ¸    · Zt        Zt        ¸
                      b
    E Xt f (s)dRs = E Xt f (s)dRs = E      g(s)dRs f (s)dRs
           0                                 0                                 0            0
            · Zt                  ¸     Zt
       =E          g(s)f (s)ds =             g(s)f (s)ds ,                 for all f ∈ L2 [0, t] ,
               0                         0

where we have used the Itô isometry. In particular, if we choose f = X[0,r]
for some r ≤ t, we obtain
                                                             Zr
                                      E[Xt Rr ] =                 g(s)ds
                                                             0
or
                                   ∂
                       g(r) =         E[Xt Rr ] ,                   as asserted .
                                   ∂r
This completes Step 3.                                                                                 t
                                                                                                       u

Step 4. An Explicit Formula for Xt
This is easily obtained using Itô’s formula, as in the examples in Chapter 5.
The result is
                  µ Zt        ¶·        Zt     µ Zs          ¶         ¸
        Xt = exp       F (s)ds X0 + exp − F (u)du C(s)dUs
                       0                                 0                 0
                     µ Zt             ¶    Zt   µ Zt        ¶
            = exp              F (s)ds X0 + exp      F (u)du C(s)dUs .
                       0                             0               s
94       6. The Filtering Problem


                                                Rt
In particular, we note that E[Xt ] = E[X0 ] exp( F (s)ds).
                                                                 0
     More generally, if 0 ≤ r ≤ t, (see Exercise 6.12)
                    µ Zt          ¶    Zt   µ Zt        ¶
      Xt = exp             F (s)ds Xr + exp      F (u)du C(s)dUs .                  (6.2.16)
                      r                      r            s


                                                 ct
Step 5. The Stochastic Differential Equation for X

We now combine the previous steps to obtain the solution of the filtering
                                                     bt . Starting with the for-
problem, i.e. a stochastic differential equation for X
mula from Lemma 6.2.7
                                                   Zt
                               bt = E[Xt ] +
                               X                         f (s, t)dRs ,
                                                    0

where
                                                  ∂
                                    f (s, t) =       E[Xt Rs ] ,                    (6.2.17)
                                                  ∂s
we use that
               Zs
                    G(r)       br )dr + Vs
        Rs =             (Xr − X                           from (6.2.13) and (6.2.14))
                    D(r)
               0

and obtain
                                             Zs
                                                  G(r)      er ]dr ,
                             E[Xt Rs ] =               E[Xt X
                                                  D(r)
                                             0

where
                                          er = Xr − X
                                          X         br .                            (6.2.18)
Using formula (6.2.16) for Xt , we obtain
                             µ Zt          ¶                µ Zt        ¶
             er ] = exp
        E[Xt X                                   e
                                    F (v)dv E[Xr Xr ] = exp      F (v)dv S(r) ,
                               r                                         r

where
                                                   er )2 ] ,
                                         S(r) = E[(X                                (6.2.19)
i.e. the mean square error of the estimate at time r ≥ 0. Thus
                                     Zs                 µ Zt          ¶
                                          G(r)
                     E[Xt Rs ] =               exp             F (v)dv S(r)dr
                                          D(r)
                                     0                    r
                                 6.2 The 1-Dimensional Linear Filtering Problem                     95


so that
                                                      µ Zt            ¶
                                        G(s)
                        f (s, t) =           exp               F (v)dv S(s) .                 (6.2.20)
                                        D(s)
                                                           s
We claim that S(t) satisfies the (deterministic) differential equation
  dS               G2 (t)
     = 2F (t)S(t) − 2 S 2 (t) + C 2 (t)                        (The Riccati equation) . (6.2.21)
  dt               D (t)
To prove (6.2.21) note that by the Pythagorean theorem, (6.2.15) and the
Itô isometry
       S(t) = E[(Xt − Xbt )2 ] = E[Xt2 ] − 2E[Xt X
                                                 bt ] + E[X
                                                          bt2 ] = E[Xt2 ] − E[Xbt2 ]
                         Zt
               = T (t) − f (s, t)2 ds − E[Xt ]2 ,                           (6.2.22)
                             0

where
                                           T (t) = E[Xt2 ] .                                  (6.2.23)
Now by (6.2.16) and the Itô isometry we have
                   µ Zt      ¶        Zt  µ Zt      ¶
        T (t) = exp 2 F (s)ds E[X0 ] + exp 2 F (u)du C 2 (s)ds ,
                                 2

                         0                                 0             s

using that X0 is independent of {Us }s≥0 . So
                                        µ Zt      ¶
                       dT
                          = 2F (t) · exp 2 F (s)ds E[X02 ] + C 2 (t)
                       dt
                                                       0
                             Zt                µ Zt      ¶
                         +           2F (t) exp 2 F (u)du C 2 (s)ds
                             0                        s

i.e.
                          dT
                             = 2F (t)T (t) + C 2 (t) .                                        (6.2.24)
                          dt
Substituting in (6.2.22) we obtain, using Step 4,
                                 Zt
  dS   dT                                           ∂
     =    − f (t, t)2 −               2f (s, t) ·      f (s, t)ds − 2F (t)E[Xt ]2
  dt   dt                                           ∂t
                                 0
                                                               Zt
                                       G2 (t)S 2 (t)
       = 2F (t)T (t) + C 2 (t) −                     −2             f 2 (s, t)F (t)ds − 2F (t)E[Xt ]2
                                         D2 (t)
                                                               0
                                G2 (t)S 2 (t)
       = 2F (t)S(t) + C 2 (t) −               ,                    which is (6.2.21) .
                                  D2 (t)
96      6. The Filtering Problem


                                                              bt :
We are now ready for the stochastic differential equation for X
  From the formula
                                 Zt
                bt = c0 (t) +
                X                     f (s, t)dRs           where c0 (t) = E[Xt ]
                                  0

it follows that
                                                  µ Zt                    ¶
          bt = c00 (t)dt + f (t, t)dRt +                    ∂
         dX                                                    f (s, t)dRs dt ,            (6.2.25)
                                                            ∂t
                                                    0

since
          Zu µ Zt                     ¶     Zu µ Zu              ¶
                        ∂                           ∂
                           f (s, t)dRs dt =            f (s, t)dt dRs
                        ∂t                          ∂t
          0        0                          0         s
                   Zu                                                     Zu
               =                                   bu − c0 (u) −
                        (f (s, u) − f (s, s))dRs = X                           f (s, s)dRs .
                   0                                                      0

So
                                                            µ Zt              ¶
               bt = c00 (t)dt + G(t)S(t) dRt +
              dX                                                   f (s, t)dRs F (t)dt
                                 D(t)
                                                              0
or

              dX                         bt − c0 (t))dt + G(t)S(t) dRt
               bt = c00 (t)dt + F (t) · (X
                                                           D(t)
                           bt dt + G(t)S(t)
                  = F (t)X                   dRt ,                                         (6.2.26)
                                      D(t)
since c00 (t) = F (t)c0 (t) (Step 4).
    If we substitute
                                      1             bt dt]
                             dRt =       [dZt − G(t)X
                                    D(t)
we obtain

               bt = (F (t) −      G2 (t)S(t) b       G(t)S(t)
              dX                            )Xt dt +          dZt .                        (6.2.27)
                                   D2 (t)             D2 (t)
So the conclusion is:
Theorem 6.2.8 (The 1-dimensional Kalman-Bucy filter).
             bt = E[Xt |Gt ] of the 1-dimensional linear filtering problem
The solution X

(linear system)              dXt = F (t)Xt dt + C(t)dUt ; F (t), C(t) ∈ R                      (6.2.3)
(linear observations)        dZt = G(t)Xt dt + D(t)dVt ; G(t), D(t) ∈ R                        (6.2.4)
                           6.2 The 1-Dimensional Linear Filtering Problem       97


(with conditions as stated earlier) satisfies the stochastic differential equation
        µ           2
                            ¶
 dXbt = F (t) − G (t)S(t) X    bt dt + G(t)S(t) dZt ; X  b0 = E[X0 ]       (6.2.28)
                      2
                    D (t)                D2 (t)

where

S(t) = E[(Xt − X bt )2 ] satisfies the (deterministic) Riccati equation
dS                  G2 (t)
    = 2F (t)S(t) − 2 S 2 (t) + C 2 (t), S(0) = E[(X0 − E[X0 ])2 ] . (6.2.29)
dt                  D (t)

Example 6.2.9 (Noisy observations of a constant process).
Consider the simple case
(system)             dXt = 0, i.e. Xt = X0 ; E[X0 ] = 0, E[X02 ] = a2
(observations)       dZt = Xt dt + mdVt ; Z0 = 0

(corresponding to

                          dZ
                   Ht =      = Xt + mWt , Wt = white noise) .
                          dt
First we solve the corresponding Riccati equation for
                                         bt )2 ]:
                          S(t) = E[(Xt − X
                            dS       1
                                = − 2 S2 ,        S(0) = a2
                             dt     m
i.e.
                                     a2 m2
                           S(t) =             ;   t≥0.
                                    m2 + a2 t
                                      bt :
This gives the following equation for X

          bt = −      a2     bt dt +    a2               b0 = E[X0 ] = 0
         dX                  X                 dZt ;     X
                   m2 + a2 t         m2 + a2 t
or
        µ       µZ                ¶¶       µZ             ¶
          b              a2                      a2            a2
       d Xt exp                 dt   = exp              dt            dZt
                      m2 + a2 t               m2 + a2 t     m2 + a2 t

which gives
                          bt =  a2
                          X            Zt ;  t≥0.                         (6.2.30)
                             m2 + a2 t
This is the continuous analogue of Example 6.2.1.
98     6. The Filtering Problem


Example 6.2.10 (Noisy observations of a Brownian motion).
If we modify the preceding example slightly, so that
(system)             dXt = cdUt ; E[X0 ] = 0, E[X02 ] = a2 , c constant
(observations)       dZt = Xt dt + mdVt ,

the Riccati equation becomes
                           dS     1
                              = − 2 S 2 + c2 , S(0) = a2
                           dt    m
or
                              m2 dS
                                         = dt, (S 6= mc) .
                             m2 c2 − S 2
This gives
                 ¯ mc + s ¯         µ     ¶                    ¯ mc + a2 ¯
                 ¯        ¯           2ct                      ¯         ¯
                 ¯        ¯ = K exp         ;                K=¯         ¯.
                   mc − s             m                          mc − a2
Or                         
                               K·exp( 2ct
                                       m )−1
                           
                            mc K·exp( 2ct    ; if S(0) < mc
                                       m )+1

                  S(t) =     mc (constant)              if S(0) = mc
                           
                           
                                      2ct
                            mc K·exp( 2ct
                                        m )+1
                                K·exp( m )−1
                                                        if S(0) > mc .

Thus in all cases the mean square error S(t) tends to mc as t → ∞ .
  For simplicity let us put a = 0, m = c = 1. Then
                                    exp(2t) − 1
                           S(t) =               = tanh(t) .
                                    exp(2t) + 1
                 bt is
The equation for X
                  bt = − tanh(t)X
                 dX             bt dt + tanh(t)dZt ,                b0 = 0
                                                                    X

or
                                      bt ) = sinh(t)dZt .
                             d(cosh(t)X
So
                                               Zt
                            bt =    1
                            X                       sinh(s)dZs .
                                 cosh(t)
                                               0

If we return to the interpretation of Zt :
                                           Zt
                                    Zt =           Hs ds ,
                                           0

where Hs are the “original” observations (see (6.1.4)), we can write
                        6.2 The 1-Dimensional Linear Filtering Problem        99


                                           Zt
                        bt =        1
                        X                       sinh(s)Hs ds ,           (6.2.31)
                                 cosh(t)
                                           0

so Xbt is approximately (for large t) a weighted average of the observations
Hs , with increasing emphasis on observations as time increases.
Remark. It is interesting to compare formula (6.2.31) with established for-
mulas in forecasting. For example, the exponentially weighted moving average
en suggested by C.C. Holt in 1958 is given by
X
                                                n
                                                X
                  en = (1 − α)n Z0 + α
                  X                                 (1 − α)n−k Zk ,
                                                k=1

where α is some constant; 0 ≤ α ≤ 1. See The Open University (1981), p. 16.
   This may be written
                                                        n
                                                        X
                   en = β −n Z0 + (β − 1)β −n−1
                   X                                          β k Zk ,
                                                        k=1

            1
where β = 1−α   (assuming α < 1), which is a discrete version of (6.2.31), or –
more precisely – of the formula corresponding to (6.2.31) in the general case
when a 6= 0 and m, c are not necessarily equal to 1.
Example 6.2.11 (Estimation of a parameter).
Suppose we want to estimate the value of a (constant) parameter θ, based
on observations Zt satisfying the model

                         dZt = θ M (t)dt + N (t)dBt ,

where M (t), N (t) are known functions. In this case the stochastic differential
equation for θ is of course
                                  dθ = 0 ,
so the Riccati equation for S(t) = E[(θ − θbt )2 ] is
                                     µ           ¶2
                               dS      M (t)S(t)
                                  =−
                               dt       N (t)
which gives
                         µ    Zt                ¶−1
                           −1
                   S(t) = S0 + M (s)2 N (s)−2 ds
                                       0

and the Kalman-Bucy filter is
                               M (t)S(t)
                      dθbt =             (dZt − M (t)θbt dt) .
                                N (t)2
100    6. The Filtering Problem


This can be written
  µ    Zt             ¶
   S0 + M (s) N (s) ds dθbt + M (t)2 N (t)−2 θbt dt = M (t)N (t)−2 dZt .
    −1       2     −2

           0

We recoqnize the left hand side as
                          µ    Zt                ¶
                        d( S0 + M (s)2 N (s)−2 ds θbt )
                            −1

                                      0

so we obtain
                                             Rt
                                θb0 S0−1 +        M (s)N (s)−2 dZs
                        θbt =              0
                                                                     .
                                          Rt
                                 S0−1 +        M (s)2 N (s)−2 ds
                                          0

This estimate coincides with the maximum likelihood estimate in classical
estimation theory if S0−1 = 0. See Liptser and Shiryaev (1978).
    For more information about estimates of drift parameters in diffusions
and generalizations, see for example Aase (1982), Brown and Hewitt (1975)
and Taraskin (1974).
Example 6.2.12 (Noisy observations of a population growth).
Consider a simple growth model (r constant)

            dXt = rXt dt, E[X0 ] = b > 0 ,                E[(X0 − b)2 ] = a2 ,

with observations

                    dZt = Xt dt + mdVt ;                 m constant .

The corresponding Riccati equation
                      dS         1
                         = 2rS − 2 S 2 ,                 S(0) = a2 ,
                      dt        m
gives the logistic curve

                           2rm2                                          2
               S(t) =              ;                where K = 2rm
                                                               a2 − 1 .
                        1 + Ke−2rt
                    bt becomes
So the equation for X
                 µ       ¶
           b           S   bt dt + S dZt ;                   b0 = E[X0 ] = b .
          dXt = r − 2 X                                      X
                      m            m2

For simplicity let us assume that a2 = 2rm2 , so that
                         6.2 The 1-Dimensional Linear Filtering Problem          101


                          S(t) = 2rm2       for all t .

(In the general case S(t) → 2rm2 as t → ∞, so this is not an unreasonable
approximation for large t). Then we get

                            bt ) = exp(rt)2rdZt ,
                   d(exp(rt)X                             b0 = b
                                                          X

or
                                 · Zt                  ¸
                    b
                    Xt = exp(−rt)     2r exp(rs)dZs + b .
                                      0

As in Example 6.2.10 this may be written
                  · Zt                    ¸
                                                              Rt
     b
     Xt = exp(−rt)     2r exp(rs)Hs ds + b ,        if Zt =        Hs ds .   (6.2.32)
                                                              0
                     0

For example, assume that Hs = β (constant) for 0 ≤ s ≤ t, i.e. that our
observations (for some reason) give the same value β for all times s ≤ t.
Then
             bt = 2β − (2β − b) exp(−rt) → 2β
             X                                    as t → ∞ .
If Hs = β · exp(αs), s ≥ 0 (α constant), we get
                                ·                            ¸
                  b                2rβ
                 Xt = exp(−rt)         (exp(r + α)t − 1) + b
                                  r+α
                         2rβ
                     ≈       exp αt     for large t .
                        r+α
Thus, only if α = r, i.e. Hs = β exp(rs); s ≥ 0, does the filter “believe” the
observations in the long run. And only if α = r and β = b, i.e. Hs = b exp(rs);
s ≥ 0, does the filter “believe” the observations at all times.
Example 6.2.13 (Constant coefficients – general discussion).
Now consider the system

               dXt = F Xt dt + CdUt ;        F, C constants 6= 0

with observations

               dZt = GXt dt + DdVt ;        G, D constants 6= 0 .

The corresponding Riccati equation

                                   G2 2
                    S 0 = 2F S −      S + C2 ,      S(0) = a2
                                   D2
has the solution
102     6. The Filtering Problem

                                                                      2
                                   α1 − Kα2 exp( (α2 −α
                                                      D2
                                                        1 )G t
                                                               )
                          S(t) =                                  2       ,
                                     1 − K exp( (α2 −α
                                                     D2
                                                       1 )G t
                                                              )
where
                                                    p
                         α1 = G−2 (F D2 − D F 2 D2 + G2 C 2 )
                                           p
                         α2 = G−2 (F D2 + D F 2 D2 + G2 C 2 )

and
                                            a2 − α1
                                      K=            .
                                            a2 − α2
                            bt of the form
This gives the solution for X
                   µ Zt         ¶       Zt     µ Zt       ¶
        bt = exp                  b   G
        X                 H(s)ds X0 + 2    exp      H(u)du S(s)dZs ,
                                     D
                     0                          0             s

where
                                        G2
                                   H(s) = F −
                                           S(s) .
                                        D2
For large s we have S(s) ≈ α2 . This gives
              µ     2
                       ¶         Zt     µ          ¶
       b0 exp( F − G α2 t) + Gα2
  bt ≈ X                                     G2 α2
  X                                 exp( F −        (t − s))dZs
                    D2       D2               D2
                                                0
                                                        Zt
             b0 exp(−βt) + Gα2 exp(−βt)
            =X                                               exp(βs)dZs       (6.2.33)
                           D2
                                                        0
                 √
where β = D−1 F 2 D2 + G2 C 2 . So we get approximately the same be-
haviour as in the previous example.


6.3 The Multidimensional Linear Filtering Problem
Finally we formulate the solution of the n-dimensional linear filtering problem
(6.2.1), (6.2.2):
Theorem 6.3.1 (The Multi-Dimensional Kalman-Bucy Filter).
             bt = E[Xt |Gt ] of the multi-dimensional linear filtering problem
The solution X

(linear system)              dXt = F (t)Xt dt+C(t)dUt ;
                                         F (t) ∈ Rn×n , C(t) ∈ Rn×p            (6.3.1)
(linear observations)      dZt = G(t)Xt dt+D(t)dVt ;
                                        G(t) ∈ Rm×n , D(t) ∈ Rm×r              (6.3.2)
                                                                    Exercises      103


satisfies the stochastic differential equation
  bt = (F − SGT (DDT )−1 G)X
 dX                        bt dt + SGT (DDT )−1 dZt ;      Xb0 = E[X0 ]
                                                                    (6.3.3)
                      bt )(Xt − X
where S(t): = E[(Xt − X         bt )T ] ∈ Rn×n satisfies the matrix Riccati
equation
                 dS
                    = F S + SF T − SGT (DDT )−1 GS + CC T ;
                 dt
                         S(0) = E[(X0 − E[X0 ])(X0 − E[X0 ])T ] .               (6.3.4)

The condition on D(t) ∈ Rm×r is now that D(t)D(t)T is invertible for all t
and that (D(t)D(t)T )−1 is bounded on every bounded t-interval.
   A similar solution can be found for the more general situation
(system)           dXt = [F0 (t) + F1 (t)Xt + F2 (t)Zt ]dt + C(t)dUt            (6.3.5)
(observations)     dZt = [G0 (t) + G1 (t)Xt + G2 (t)Zt ]dt + D(t)dVt ,          (6.3.6)

where Xt ∈ Rn , Zt ∈ Rm and Bt = (Ut , Vt ) is n + m-dimensional Brownian
motion, with appropriate dimensions on the matrix coefficients. See Ben-
soussan (1992) and Kallianpur (1980), who also treat the non-linear case.
An account of non-linear filtering theory is also given in Pardoux (1979) and
Davis (1984).
   For the solution of linear filtering problems governed by more general
processes than Brownian motion (processes with orthogonal increments) see
Davis (1977).
   For various applications of filtering theory see Bucy and Joseph (1968),
Jazwinski (1970), Gelb (1974), Maybeck (1979) and the references in these
books.


Exercises
6.1.   (Time-varying observations of a constant)
       Prove that if the (1-dimensional) system is

                         dXt = 0, E[X0 ] = 0 ,       E[X02 ] = a2

       and the observation process is

                          dZt = G(t)Xt dt + dVt ,       Z0 = 0
                           bt )2 ] is given by
       then S(t) = E[(Xt − X
                                                 1
                              S(t) =    1
                                             Rt         .                       (6.3.7)
                                                 2
                                       S(0) + 0 G (s)ds
104    6. The Filtering Problem


       We say that we have exact asymptotic estimation if S(t) → 0 as t → ∞,
       i.e. if
                                 Z∞
                                    G2 (s)ds = ∞ .
                                       0

       Thus for
                                      1
                          G(s) =                 (p > 0 constant)
                                   (1 + s)p
       we have exact asymptotic estimation iff p ≤ 12 .
6.2.   Consider the linear 1-dimensional filtering problem with no noise in
       the system:
       (system)               dXt = F (t)Xt dt                          (6.3.8)
       (observations)         dZt = G(t)Xt dt + D(t)dVt                 (6.3.9)
                          bt )2 ] as usual and assume S(0) > 0 .
       Put S(t) = E[(Xt − X
       a) Show that
                                               1
                                      R(t): =
                                              S(t)
          satisfies the linear differential equation

                                           G2 (t)                1
                  R0 (t) = −2F (t)R(t) +          ;    R(0) =          (6.3.10)
                                           D2 (t)               S(0)

       b) Use (6.3.10) to prove that for the filtering problem (6.3.8), (6.3.9)
          we have
                             µ      Zt      ¶ Zt  µ Zt        ¶ 2
           1      1                                            G (s)
               =      exp        − 2 F (s)ds + exp − 2 F (u)du        ds .
          S(t)   S(0)                                          D2 (s)
                                   0             0          s
                                                                       (6.3.11)
6.3.   In Example 6.2.12 we found that

                              S(t) → 2rm2         as t → ∞ ,

       so exact asymptotic estimation (Exercise 6.1) of Xt is not possible.
       However, prove that we can obtain exact asymptotic estimation of X0 ,
       in the sense that

                        E[(X0 − E[X0 |Gt ])2 ] → 0     as t → ∞ .

                                                                     bt , so
       (Hint: Note that X0 = e−rt Xt and therefore E[X0 |Gt ] = e−rt X
       that
                        E[(X0 − E[X0 |Gt ])2 ] = e−2rt S(t)) .
                                                                       Exercises    105


6.4.   Consider the multi-dimensional linear filtering problem with no noise
       in the system:
       (system)           dXt = F (t)Xt dt ;
                                 Xt ∈ Rn , F (t) ∈ Rn×n                        (6.3.12)
       (observations)     dZt = G(t)Xt dt + D(t)dVt ;
                                  G(t) ∈ Rm×n , D(t) ∈ Rm×r                    (6.3.13)

       Assume that S(t) is nonsingular and define R(t) = S(t)−1 . Prove that
       R(t) satisfies the Lyapunov equation (compare with Exercise 6.2)

       R0 (t) = −R(t)F (t) − F (t)T R(t) + G(t)T (D(t)D(t)T )−1 G(t) .         (6.3.14)

       (Hint: Note that since S(t)S −1 (t) = I we have
       S 0 (t)S −1 (t) + S(t)(S −1 )0 (t) = 0, which gives

                          (S −1 )0 (t) = −S −1 (t)S 0 (t)S −1 (t) .)

6.5.   (Prediction)
       In the prediction problem one seeks to estimate the value of the system
       X at a future time T based on the observations Gt up to the present
       time t < T .
       Prove that in the linear setup (6.2.3), (6.2.4) the predicted value

                                  E[XT |Gt ] ,        T >t

       is given by
                                             µ ZT          ¶
                         E[XT |Gt ] = exp                      bt .
                                                     F (s)ds · X               (6.3.15)
                                                 t

       (Hint: Use formula (6.2.16).)
6.6.   (Interpolation/smoothing)
       The interpolation or smoothing problem consists of estimating the
       value of the system X at a time s < t, given the observations up
       to time t, Gt .
       With notation as in (6.2.1), (6.2.2) one can show that Ms : = E[Xs |Gt ]
       satisfies the differential equation
       (
         d                           T     −1          bs ) ; s < t
         ds Ms = F (s)Ms + C(s)C (s)S         (s)(Ms − X
                                                                      (6.3.16)
                 b
         Mt = Xt .

       (See Davis (1977, Theorem 4.4.4).)
       Use this result to find E[Xs |Gt ] in Example 6.2.9.
106    6. The Filtering Problem


6.7.   Consider the system
                                  ·¸ · ¸                             · ¸
                           dX1 (t)    0                               0
                     dXt =          =    ,                  E[X0 ] =
                           dX2 (t)    0                               0

       with observations
                     ·         ¸ ·         ¸      ·         ¸
                       dZ1 (t)       X1             dV1 (t)
                                =            dt +             .
                       dZ2 (t)     X1 + X2          dV2 (t)

       Apply (6.3.14) from Exercise 6.4 to prove that
       S(t): = E[(Xt − Xbt )(Xt − Xbt )T ] is given by
                                                   ·     ¸
                                                     2 1
                             S(t)−1 = S −1 (0) +           t
                                                     1 1

       if S(0) is invertible. Then show that
                                 ·     ¸              ·     ¸
                    dXbt = −S(t) 2 1 X    bt dt + S(t) 1 1 dZt .
                                   1 1                  0 1

6.8.   Transform the following Stratonovich equation

                              dXt = b(t, Xt )dt + σ(t, Xt ) ◦ dBt

       into the corresponding Itô equation

                               dXt = eb(t, Xt )dt + σ(t, Xt )dBt

       using (6.1.3):
       a)       ·     ¸ ·           ¸     ·     ¸
                  dX1         1               0
                       =              dt + X1 ◦ dBt                    (Bt ∈ R)
                  dX2     X2 + e2X1         e
       b)           ·         ¸       ·      ¸      ·    ¸
                        dX1               X1          X2
                                  =            dt +        ◦ dBt   (Bt ∈ R)
                        dX2               X2          X1

6.9.   Transform the following Itô equation

                               dXt = b(t, Xt )dt + σ(t, Xt )dBt

       into the corresponding Stratonovich equation

                          dXt = bb(t, Xt )dt + σ(t, Xt ) ◦ dBt ,

       using (the converse of) (6.1.3):
                                                                Exercises    107


      a) dXt = − 12 Xt dt + KXt dBt , where
                     ·       ¸           ·        ¸
                        0 −1               X1 (t)
               K=               , Xt =              ∈ R2     and Bt ∈ R
                        1 0                X2 (t)

          (i.e. Xt is Brownian motion on the unit circle (Example 5.1.4)).
         ·      ¸ ·            ¸·     ¸
           dX1         X1 −X2     dB1
      b)          =                     .
           dX2         X2 X1      dB2
6.10. (On the support of an Itô diffusion)
      The support of an Itô diffusion X in Rn starting at x ∈ Rn is the
      smallest closed set F with the property that

                      Xt (ω) ∈ F      for all t ≥ 0, for a.a. ω .

      In Example 5.1.4 we found that Brownian motion on the unit circle,
      Xt , satisfies the (Itô) stochastic differential equation
           ·         ¸        ·        ¸      ·       ¸·         ¸
             dX1 (t)        1 X1 (t)            0 −1      X1 (t)
                       = −2              dt +                      dBt . (6.3.17)
             dX2 (t)            X2 (t)          1 0       X2 (t)

      From this equation it is not at all apparent that its solution is situ-
      ated on the same circle as the starting point. However, this can be
      detected by proceeding as follows: First transform the equation into
      its Stratonovich form, which in Exercise 6.9 is found to be
                      ·         ¸ ·        ¸·        ¸
                        dX1 (t)     0 −1      X1 (t)
                                 =                     ◦ dBt .      (6.3.18)
                        dX2 (t)     1 0       X2 (t)

      Then (formally) replace ◦dBt by φ0 (t)dt, where φ is some smooth (de-
      terministic) function, φ(0) = 0. This gives the deterministic equation
                         ·    (φ)   ¸ ·          ¸
                           dX1 (t)       0 −1 0
                              (φ)     =            φ (t)dt .          (6.3.19)
                           dX2 (t)       1 0
           (φ)      (φ)
      If (X1 (0), X2 (0)) = (1, 0) the solution of (6.3.19) is
                           · (φ) ¸ ·                ¸
                            X1 (t)         cos φ(t)
                              (φ)      =              .
                            X2 (t)         sin φ(t)

      So for any smooth φ the corresponding solution X (φ) (t) of (6.3.19)
      has its support on this unit circle. We can conclude that the original
      solution X(t, ω) is supported on the unit circle also, in virtue of the
      Stroock-Varadhan support theorem. This theorem says that, quite gen-
      erally, the support of an Itô diffusion Xt (ω) coincides with the closure
      (in C([0, ∞); Rn )) of {X (φ) (·); φ smooth}, where X (φ) (t) is obtained
      by replacing ◦dBt by φ0 (t)dt in the same way as above. See e.g. Ikeda
108    6. The Filtering Problem


      and Watanabe (1989, Th. VI. 8.1). (In this special case above the
      support could also have been found directly from (6.3.18)).
      Use the procedure above to find the support of the process Xt ∈ R2
      given by                            ·     ¸
                                            0 1
                         dXt = 21 Xt dt +         Xt dBt .
                                            1 0
6.11. Consider Example 6.2.1, but now without the assumption that
      E[X] = 0. Show that

             bk =        m2                a2
             X                 E[X] +                Zk ;   k = 1, 2, . . .
                    ka2 + m2            a2 + k1 m2

      (Compare with (6.2.8).)
      (Hint: Put ξ = X − E[X], ζk = Zk − E[X]. Then apply (6.2.8) with
      X replaced by ξ and Zk replaced by ζk .)
6.12. Prove formula (6.2.16).
                ¡ Rs
      (Hint: exp − F (u)du) is an integrating factor for the stochastic
                     r
      differential equation (6.2.3).)
6.13. Consider the 1-dimensional linear filtering problem (6.2.3), (6.2.4).
      Find
                              E[X bt ] and E[(X
                                              b t )2 ] .

      (Hint: Use Theorem 6.1.2 and use the definition of the mean square
      error S(t).)
6.14. Let Bt be 1-dimensional Brownian motion.
      a) Give an example of a process Zt of the form

                                  dZt = u(t, ω)dt + dBt

         such that Zt is a Brownian motion w.r.t. P and u(t, ω) ∈ V is not
         identically 0.
         (Hint: Choose Zt to be the innovation process (6.2.13) in a linear
         filtering problem with D(t) ≡ 1.)
      b) Show that the filtration {Zt }t≥0 generated by a process Zt as in a)
         must be strictly smaller than {Ft }t≥0 , i.e. show that

                    Zt ⊆ Ft       for all t and Zt 6= Ft for some t .

         (Hint: Use Exercise 4.12.)
7. Diffusions: Basic Properties




7.1 The Markov Property

Suppose we want to describe the motion of a small particle suspended in a
moving liquid, subject to random molecular bombardments. If b(t, x) ∈ R3
is the velocity of the fluid at the point x at time t, then a reasonable math-
ematical model for the position Xt of the particle at time t would be a
stochastic differential equation of the form
                        dXt
                            = b(t, Xt ) + σ(t, Xt )Wt ,                (7.1.1)
                         dt
where Wt ∈ R3 denotes “white noise” and σ(t, x) ∈ R3×3 . The Itô interpre-
tation of this equation is

                      dXt = b(t, Xt )dt + σ(t, Xt )dBt ,               (7.1.2)

where Bt is 3-dimensional Brownian motion, and similarly (with a correction
term added to b) for the Stratonovich interpretation (see (6.1.3)).
   In a stochastic differential equation of the form

                      dXt = b(t, Xt )dt + σ(t, Xt )dBt ,               (7.1.3)

where Xt ∈ Rn , b(t, x) ∈ Rn , σ(t, x) ∈ Rn×m and Bt is m-dimensional
Brownian motion, we will call b the drift coefficient and σ – or sometimes
1    T
2 σσ – the diffusion coefficient (see Theorem 7.3.3).
    Thus the solution of a stochastic differential equation may be thought of
as the mathematical description of the motion of a small particle in a moving
fluid: Therefore such stochastic processes are called (Itô) diffusions.
    In this chapter we establish some of the most basic properties and results
about Itô diffusions:
7.1 The Markov property.
7.2 The strong Markov property.
7.3 The generator A of Xt expressed in terms of b and σ.
7.4 The Dynkin formula.
7.5 The characteristic operator.
110    7. Diffusions: Basic Properties


   This will give us the necessary background for the applications in the
remaining chapters.
Definition 7.1.1. A (time-homogeneous) Itô diffusion is a stochastic process
Xt (ω) = X(t, ω): [0, ∞)×Ω → Rn satisfying a stochastic differential equation
of the form

              dXt = b(Xt )dt + σ(Xt )dBt ,                t≥s;       Xs = x        (7.1.4)

where Bt is m-dimensional Brownian motion and b: Rn → Rn , σ: Rn →
Rn×m satisfy the conditions in Theorem 5.2.1, which in this case simplify to:

      |b(x) − b(y)| + |σ(x) − σ(y)| ≤ D|x − y| ;              x, y ∈ Rn ,          (7.1.5)
             P
where |σ|2 =    |σij |2 .
    We will denote the (unique) solution of (7.1.4) by Xt = Xts,x ; t ≥ s. If
s = 0 we write Xtx for Xt0,x . Note that we have assumed in (7.1.4) that b and
σ do not depend on t but on x only. We shall see later (Chapters 10, 11) that
the general case can be reduced to this situation. The resulting process Xt (ω)
will have the property of being time-homogeneous, in the following sense:
    Note that
                      Z
                      s+h                 Z
                                          s+h
        s,x
       Xs+h   = x+        b(Xus,x )du +            σ(Xus,x )dBu
                      s                       s
                     Zh                  Zh
              = x+           s,x
                          b(Xs+v )dv +               s,x
                                                  σ(Xs+v   ev ,
                                                         )dB         (u = s + v)   (7.1.6)
                     0                    0


where Bev = Bs+v − Bs ; v ≥ 0. (See Exercise 2.12). On the other hand of
course
                          Zh             Zh
                 0,x
               Xh = x + b(Xv )dv + σ(Xv0,x )dBv .
                                 0,x

                               0                      0

       ev }v≥0 and {Bv }v≥0 have the same P 0 -distributions, it follows by
Since {B
weak uniqueness (Lemma 5.3.1) of the solution of the stochastic differential
equation
                 dXt = b(Xt )dt + σ(Xt )dBt ;    X0 = x
that
                       s,x
                     {Xs+h }h≥0           and          {Xh0,x }h≥0
have the same P 0 -distributions, i.e. {Xt }t≥0 is time-homogeneous.

    We now introduce the probability laws Qx of {Xt }t≥0 , for x ∈ Rn . Intu-
itively, Qx gives the distribution of {Xt }t≥0 assuming that X0 = x. To express
                                                       7.1 The Markov Property          111


this mathematically, we let M∞ be the σ-algebra (of subsets of Ω) generated
by the random variables ω → Xt (ω) = Xty (ω), where t ≥ 0, y ∈ Rn .
    Define Qx on the members of M by

     Qx [Xt1 ∈ E1 , · · · , Xtk ∈ Ek ] = P 0 [Xtx1 ∈ E1 , · · · , Xtxk ∈ Ek ]       (7.1.7)

where Ei ⊂ Rn are Borel sets; 1 ≤ i ≤ k.
                      (m)
    As before we let Ft be the σ-algebra generated by {Br ; r ≤ t}. Similarly
we let Mt be the σ-algebra generated by {Xr ; r ≤ t}. We have established
                                                                      (m)
earlier (see Theorem 5.2.1) that Xt is measurable with respect to Ft , so
          (m)
Mt ⊆ Ft .
    We now prove that Xt satisfies the important Markov property: The fu-
ture behaviour of the process given what has happened up to time t is the
same as the behaviour obtained when starting the process at Xt . The precise
mathematical formulation of this is the following:
Theorem 7.1.2 (The Markov property for Itô diffusions).
Let f be a bounded Borel function from Rn to R. Then, for t, h ≥ 0
                                      (m)
                    E x [f (Xt+h )|Ft        ](ω) = E Xt (ω) [f (Xh )] .            (7.1.8)

    (See Appendix B for definition and basic properties of conditional ex-
pectation). Here and in the following E x denotes the expectation w.r.t. the
probability measure Qx . Thus E y [f (Xh )] means E[f (Xhy )], where E denotes
the expectation w.r.t. the measure P 0 . The right hand side means the func-
tion E y [f (Xh )] evaluated at y = Xt (ω).
Proof. Since, for r ≥ t,
                                      Zr                  Zr
                Xr (ω) = Xt (ω) +            b(Xu )du +        σ(Xu )dBu ,
                                        t                 t

we have by uniqueness
                                 Xr (ω) = Xrt,Xt (ω) .
In other words, if we define

                      F (x, t, r, ω) = Xrt,x (ω)         for r ≥ t ,

we have
                           Xr (ω) = F (Xt , t, r, ω); r ≥ t .                       (7.1.9)
                                                               (m)
Note that ω → F (x, t, r, ω) is independent of Ft                    . Using (7.1.9) we may
rewrite (7.1.8) as
                                    (m)
      E[f (F (Xt , t, t + h, ω))|Ft         ] = E[f (F (x, 0, h, ω))]x=Xt .        (7.1.10)
112    7. Diffusions: Basic Properties


Put g(x, ω) = f ◦ F (x, t, t + h, ω). Then (x, ω) → g(x, ω) is measurable. (See
Exercise 7.6). Hence we can approximate g pointwise boundedly by functions
on the form
                                X m
                                     φk (x)ψk (ω) .
                                 k=1

Using the properties of conditional expectation (see Appendix B) we get
                               ·    X                         ¸
                     (m)                                  (m)
        E[g(Xt , ω)|Ft ] = E lim         φk (Xt )ψk (ω)|Ft
                                 X                         (m)
                          = lim      φk (Xt ) · E[ψk (ω)|Ft ]
                                 X                     (m)
                          = lim      E[φk (y)ψk (ω)|Ft ]y=Xt
                                                 (m)
                            = E[g(y, ω)|Ft             ]y=Xt = E[g(y, ω)]y=Xt .

Therefore, since {Xt } is time-homogeneous,
                                       (m)
         E[f (F (Xt , t, t + h, ω))|Ft       ] = E[f (F (y, t, t + h, ω))]y=Xt
                                               = E[f (F (y, 0, h, ω))]y=Xt

which is (7.1.10).                                                                t
                                                                                  u
Remark. Theorem 7.1.2 states that Xt is a Markov process w.r.t. the family
                (m)                              (m)
of σ-algebras {Ft }t≥0 . Note that since Mt ⊆ Ft      this implies that Xt
is also a Markov process w.r.t. the σ-algebras {Mt }t≥0 . This follows from
Theorem B.3 and Theorem B.2 c)( Appendix B):
                                                            (m)
           E x [f (Xt+h )|Mt ] = E x [E x [f (Xt+h )|Ft ]|Mt ]
                               = E x [E Xt [f (Xh )]|Mt ] = E Xt [f (Xh )]

since E Xt [f (Xh )] is Mt -measurable.


7.2 The Strong Markov Property
Roughly, the strong Markov property states that a relation of the form (7.1.8)
continues to hold if the time t is replaced by a random time τ (ω) of a more
general type called stopping time (or Markov time):
Definition 7.2.1. Let {Nt } be an increasing family of σ-algebras (of subsets
of Ω). A function τ : Ω → [0, ∞] is called a (strict) stopping time w.r.t. {Nt }
if
                   {ω; τ (ω) ≤ t} ∈ Nt ,      for all t ≥ 0 .
   In other words, it should be possible to decide whether or not τ ≤ t has
occurred on the basis of the knowledge of Nt .
                                                7.2 The Strong Markov Property      113


Example 7.2.2. Let U ⊂ Rn be open. Then the first exit time

                               τU : = inf{t > 0; Xt ∈
                                                    / U}

is a stopping time w.r.t. {Mt }, since
                                \ [
                 {ω; τU ≤ t} =         {ω; Xr ∈
                                              / Km } ∈ M t
                                        m r∈Q
                                          r<t

                                                                             S
where {Km } is an increasing sequence of closed sets such that U =               Km .
                                                                             m
                                  n
    More generally, if H ⊂ R is any set we define the first exit time from H,
τH , as follows
                          τH = inf{t > 0; Xt ∈
                                             / H} .
If we include the sets of measure 0 in Mt (which we do)
                                                      T then the family
{Mt } is right-continuous i.e. Mt = Mt+ , where Mt+ =   Ms (see Chung
                                                                    s>t
(1982, Theorem 2.3.4., p. 61)) and therefore τH is a stopping time for any
Borel set H (see Dynkin (1965 II, 4.5.C.e.), p. 111)).
Definition 7.2.3. Let τ be a stopping time w.r.t. {Nt } and let N∞ be the
smallest σ-algebra containing Nt for all t ≥ 0. Then the σ-algebra Nτ consists
of all sets N ∈ N∞ such that
                       \
                     N {τ ≤ t} ∈ Nt         for all t ≥ 0 .

      In the case when Nt = Mt , an alternative and more intuitive description
is:
          Mτ = the σ-algebra generated by {Xmin(s,τ ) ; s ≥ 0} .                 (7.2.1)
(See Rao (1977, p. 2.15) or Stroock and Varadhan (1979, Lemma 1.3.3,
                             (m)
p. 33).) Similarly, if Nt = Ft , we get

               Fτ(m) = the σ-algebra generated by {Bs∧τ ; s ≥ 0} .

Theorem 7.2.4 (The strong Markov property for Itô diffusions).
                                                                    (m)
Let f be a bounded Borel function on Rn , τ a stopping time w.r.t. Ft ,
τ < ∞ a.s. Then

           E x [f (Xτ +h )|Fτ(m) ] = E Xτ [f (Xh )]       for all h ≥ 0 .        (7.2.2)

Proof. We try to imitate the proof of the Markov property (Theorem 7.1.2).
For a.a. ω we have that Xrτ,x (ω) satisfies
                                 τZ+h                 τZ+h

                  Xττ,x
                     +h = x +         b(Xuτ,x )du +        σ(Xuτ,x )dBu .
                                  τ                   τ
114     7. Diffusions: Basic Properties


By the strong Markov property for Brownian motion (Gihman and Skorohod
(1974a, p. 30)) the process

                               ev = Bτ +v − Bτ ;
                               B                                         v≥0
                                                                             (m)
is again a Brownian motion and independent of Fτ                                   . Therefore

                                    Zh                              Zh
                   Xττ,x                       b(Xττ,x                   σ(Xττ,x   e
                      +h = x +                      +v )dv +                  +v )dBv .
                                       0                            0

Hence {Xττ,x
           +h }h≥0 must coincide a.e. with the strongly unique (see (5.2.8))
solution Yh of the equation

                                           Zh                   Zh
                           Yh = x +                b(Yv )dv +                  ev .
                                                                        σ(Yv )dB
                                           0                    0

                                                      (m)
Since {Yh }h≥0 is independent of Fτ , {Xττ,x
                                          +h } must be independent also.
Moreover, by weak uniqueness (Lemma 5.3.1) we conclude that

{Yh }h≥0 , and hence {Xττ,x                              0,x
                         +h }h≥0 , has the same law as {Xh }h≥0 .                                     (7.2.3)

Put
                           F (x, t, r, ω) = Xrt,x (ω)                    for r ≥ t .
Then (7.2.2) can be written

          E[f (F (x, 0, τ + h, ω))|Fτ(m) ] = E[f (F (x, 0, h, ω))]x=Xτ0,x .

Now, with Xt = Xt0,x ,
                                                            τZ+h                    τZ+h

      F (x, 0, τ + h, ω) = Xτ +h (ω) = x +                          b(Xs )ds +            σ(Xs )dBs
                                                            0                        0
               Zτ                  Zτ                           τZ+h                     τZ+h

        =x+         b(Xs )ds +             σ(Xs )dBs +                   b(Xs )ds +          σ(Xs )dBs
               0                   0                            τ                        τ
                    τZ+h                   τZ+h

        = Xτ +          b(Xs )ds +                  σ(Xs )dBs
                    τ                          τ
        = F (Xτ , τ, τ + h, ω) .

Hence (7.2.2) gets the form

          E[f (F (Xτ , τ, τ + h, ω))|Fτ(m) ] = E[f (F (x, 0, h, ω))]x=Xτ .
                                                 7.2 The Strong Markov Property           115


Put g(x, t, r, ω) = f (F (x, t, r, ω)). As in the proof of Theorem 7.1.2 we may
assume that g has the form
                                        X
                       g(x, t, r, ω) =      φk (x)ψk (t, r, ω) .
                                             k
                                                 (m)
Then, since Xττ,x
                +h is independent of Fτ    we get, using (7.2.3)
                                 X
 E[g(Xτ , τ, τ + h, ω)|Fτ(m) ] =   E[φk (Xτ )ψk (τ, τ + h, ω)|Fτ(m) ]
                                      k
    X                                            X
=        φk (Xτ )E[ψk (τ, τ +h, ω)|Fτ(m) ] =           E[φk (x)ψk (τ, τ +h, ω)|Fτ(m) ]x=Xτ
    k                                    k
                               (m)
        = E[g(x, τ, τ + h, ω)|Fτ ]x=Xτ = E[g(x, τ, τ + h, ω)]x=Xτ
        = E[f (Xττ,x                0,x
                  +h )]x=Xτ = E[f (Xh )]x=Xτ = E[f (F (x, 0, h, ω))]x=Xτ .                  t
                                                                                            u
   We now extend (7.2.2) to the following:
                                                                (m)
   If f1 , · · · , fk are bounded Borel functions on Rn , τ an Ft -stopping time,
τ < ∞ a.s. then
  E x [f1 (Xτ +h1 )f2 (Xτ +h2 ) · · · fk (Xτ +hk )|Fτ(m) ] = E Xτ [f1 (Xh1 ) · · · fk (Xhk )]
                                                                                       (7.2.4)
for all 0 ≤ h1 ≤ h2 ≤ · · · ≤ hk . This follows by induction: To illustrate the
argument we prove it in the case k = 2:
E x [f1 (Xτ +h1 )f2 (Xτ +h2 )|Fτ(m) ] = E x [E x [f1 (Xτ +h1 )f2 (Xτ +h2 )|Fτ +h1 ]|Fτ(m) ]
  = E x [f1 (Xτ +h1 )E x [f2 (Xτ +h2 )|Fτ +h1 ]|Fτ(m) ]
  = E x [f1 (Xτ +h1 )E Xτ +h1 [f2 (Xh2 −h1 )]|Fτ(m) ]
  = E Xτ [f1 (Xh1 )E Xh1 [f2 (Xh2 −h1 )]]
                                       (m)
  = E Xτ [f1 (Xh1 )E x [f2 (Xh2 )|Fh1 ]] = E Xτ [f1 (Xh1 )f2 (Xh2 )] ,         as claimed .
    Next we proceed to formulate the general version we need: Let H be the
set of all real M∞ -measurable functions. For t ≥ 0 we define the shift operator
                                          θt : H → H
as follows:
    If η = g1 (Xt1 ) · · · gk (Xtk ) (gi Borel measurable, ti ≥ 0) we put
                            θt η = g1 (Xt1 +t ) · · · gk (Xtk +t ) .
Now extend in the natural way to all functions in H by taking limits of sums
of such functions. Then it follows from (7.2.4) that
                                E x [θτ η|Fτ(m) ] = E Xτ [η]                         (7.2.5)
for all stopping times τ and all bounded η ∈ H, where
                        (θτ η)(ω) = (θt η)(ω)            if τ (ω) = t .
116     7. Diffusions: Basic Properties


Hitting distribution, harmonic measure and
the mean value property

We will apply this to the following situation: Let H ⊂ Rn be measurable and
let τH be the first exit time from H for an Itô diffusion Xt . Let α be another
stopping time, g a bounded continuous function on Rn and put
                                                α
              η = g(XτH )X{τH <∞} ,            τH = inf{t > α; Xt ∈
                                                                  / H} .

Then we have
                        θα η · X{α<∞} = g(XτHα )X{τHα <∞} .                         (7.2.6)
To prove (7.2.6) we approximate η by functions η (k) ; k = 1, 2, . . . , of the form
               X
       η (k) =     g(Xtj )X[tj ,tj+1 ) (τH ) , tj = j · 2−k , j = 0, 1, 2, . . .
                  j

Now

        θt X[tj ,tj+1 ) (τH ) = θt X{∀r∈(0,tj )Xr ∈H&∃s∈[tj ,tj+1 )Xs ∈H}
                                                                      /
        = X{∀r∈(0,tj )Xr+t ∈H&∃s∈[tj ,tj+1 )Xs+t ∈H}/
                                                                                  t
        = X{∀u∈(t,tj +t)Xu ∈H&∃v∈[tj +t,tj+1 +t)Xv ∈H} /     = X[tj +t,tj+1 +t) (τH ).

So we see that
                                           X
               θt η = lim θt η (k) = lim                                     t
                                                g(Xtj +t )X[tj +t,tj+1 +t) (τH )
                        k              k
                                           j
                  = g(XτHt ) · X{τHt <∞} ,       which is (7.2.6) .




   In particular, if α = τG with G ⊂⊂ H measurable, τH < ∞ a.s. Qx , then
         α
we have τH  = τH and so

                                θτG g(XτH ) = g(XτH ) .                             (7.2.7)
                                    7.3 The Generator of an Itô Diffusion      117


    So if f is any bounded measurable function we obtain from (7.2.5) and
(7.2.7):
                                        Z
    x              x  XτG
  E [f (XτH )] = E [E     [f (XτH )]] =   E y [f (XτH )] · Qx [XτG ∈ dy] (7.2.8)
                                          ∂G

for x ∈ G.
    (Define µxH (F ) = Qx (XτH ∈ F ) and approximate f in L1 (µxH ) by con-
tinuous functions g satisfying (7.2.7)). In other words, the expected value of
f at XτH when starting at x ∈ G can be obtained by integrating the ex-
pected value when starting at y ∈ ∂G with respect to the hitting distribution
(“harmonic measure”) of X on ∂G. This can be restated as follows:

   Define the harmonic measure of X on ∂G, µxG , by

               µxG (F ) = Qx [XτG ∈ F ]        for F ⊂ ∂G, x ∈ G .

Then the function
                               φ(x) = E x [f (XτH )]
satisfies the mean value property:
                        Z
                 φ(x) =   φ(y)dµxG (y) ,           for all x ∈ G             (7.2.9)
                          ∂G

for all Borel sets G ⊂⊂ H.

   This is an important ingredient in our solution of the generalized Dirichlet
problem in Chapter 9.


7.3 The Generator of an Itô Diffusion

It is fundamental for many applications that we can associate a second order
partial differential operator A to an Itô diffusion Xt . The basic connection
between A and Xt is that A is the generator of the process Xt :
Definition 7.3.1. Let {Xt } be a (time-homogeneous) Itô diffusion in Rn .
The (infinitesimal) generator A of Xt is defined by

                              E x [f (Xt )] − f (x)
                Af (x) = lim                        ;    x ∈ Rn .
                          t↓0           t
The set of functions f : Rn → R such that the limit exists at x is denoted by
DA (x), while DA denotes the set of functions for which the limit exists for
all x ∈ Rn .
118      7. Diffusions: Basic Properties


    To find the relation between A and the coefficients b, σ in the stochastic
differential equation (7.1.4) defining Xt we need the following result, which
is useful in many connections:
Lemma 7.3.2. Let Yt = Ytx be an Itô process in Rn of the form
                                                Zt                      Zt
                          Ytx (ω) = x +              u(s, ω)ds +             v(s, ω)dBs (ω)
                                                0                       0

where B is m-dimensional. Let f ∈ C02 (Rn ), i.e. f ∈ C 2 (Rn ) and f has
                                                                    (m)
compact support, and let τ be a stopping time with respect to {Ft }, and
assume that E x [τ ] < ∞. Assume that u(t, ω) and v(t, ω) are bounded on the
set of (t, ω) such that Y (t, ω) belongs to the support of f . Then
E x [f (Yτ )] =
                  · Zτ µX                                      X                                  ¶ ¸
              x                                 ∂f                                    ∂2f
  f (x) + E                         ui (s, ω)       (Ys ) + 12     (vv T )i,j (s, ω)         (Ys ) ds ,
                                i
                                                ∂xi            i,j
                                                                                     ∂xi ∂xj
                      0

where E x is the expectation w.r.t. the natural probability law Rx for Yt start-
ing at x:
 Rx [Yt1 ∈ F1 , . . . , Ytk ∈ Fk ] = P 0 [Ytx1 ∈ F1 , . . . , Ytxk ∈ Fk ] ,                   Fi Borel sets .
Proof. Put Z = f (Y ) and apply Itô’s formula (To simplify the notation we
suppress the index t and let Y1 , . . . , Yn and B1 , . . . , Bm denote the coordinates
of Y and B, respectively)
           X ∂f                   X ∂2f
     dZ =           (Y )dYi + 12                  (Y )dYi dYj
             i
                ∂xi                i,j
                                          ∂xi ∂xj
              X                ∂f          X ∂2f                       X ∂f
          =               ui       dt + 21             (vdB)i (vdB)j +       (vdB)i .
                  i
                               ∂xi         i,j
                                               ∂xi ∂xj                 i
                                                                         ∂xi

Since
                                                            µX               ¶µ X              ¶
                      (vdB)i · (vdB)j =                           vik dBk            vjn dBn
                                                              k                  n
                                                            µX           ¶
                                                 =                vik vjk dt = (vv T )ij dt ,
                                                              k

this gives
                                          Zt µ X                          X                     ¶
                                                                 ∂f                      ∂2f
          f (Yt ) = f (Y0 ) +                               ui       + 12     (vv T )ij          ds
                                                        i
                                                                 ∂xi      i,j
                                                                                        ∂xi ∂xj
                                          0

                                          XZ
                                                    t
                                                              ∂f
                                      +                 vik       dBk .                                (7.3.1)
                                                              ∂xi
                                          i,k 0
                                                                7.3 The Generator of an Itô Diffusion      119


Hence
                                           · Zτ µ X                              X                        ¶ ¸
 x                                    x                             ∂f         1        T      ∂2f
E [f (Yτ )] = f (x) + E                                          ui     (Y ) + 2     (vv )i,j         (Y ) ds
                                                           i
                                                                    ∂xi          i,j
                                                                                              ∂xi ∂xj
                                               0

                                     X             · Zτ                         ¸
                                                                     ∂f
                                 +         Ex                  vik       (Y )dBk .                       (7.3.2)
                                                                     ∂xi
                                     i,k               0

If g is a bounded Borel function, |g| ≤ M say, then for all integers k we have

                  ·Z
                   τ ∧k         ¸      · Zk                  ¸
                     x               x
                E      g(Ys )dBs = E        X{s<τ } g(Ys )dBs = 0 ,
                             0                                          0

                                                                 (m)
since g(Ys ) and X{s<τ } are both Fs                                   -measurable. Moreover

                    ·µ Zτ                    Z
                                             τ ∧k          ¶2 ¸      · Zτ           ¸
                x                                                  x       2
            E                    g(Ys )dBs −     g(Ys )dBs      =E        g (Ys )ds
                         0                                 0                          τ ∧k
                         ≤ M 2 E x [τ − τ ∧ k] → 0 .

Therefore
                               ·Z
                                τ ∧k         ¸     Zτ
                                           x     x
                     0 = lim E      g(Ys )dBs = E [ g(Ys )dBs ] .
                             k→∞
                                                   0                             0

Combining this with (7.3.2) we get Lemma 7.3.2.
                                                                                                              t
                                                                                                              u
     This gives immediately the formula for the generator A of an Itô diffusion:

Theorem 7.3.3. Let Xt be the Itô diffusion

                                       dXt = b(Xt )dt + σ(Xt )dBt .

If f ∈ C02 (Rn ) then f ∈ DA and
                                     X                     ∂f       X                   ∂2f
                    Af (x) =                   bi (x)          + 12     (σσ T )i,j (x)         .         (7.3.3)
                                       i
                                                           ∂xi      i,j
                                                                                       ∂xi ∂xj

Proof. This follows from Lemma 7.3.2 (with τ = t) and the definition of A.
                                                                         t
                                                                         u
120    7. Diffusions: Basic Properties


Example 7.3.4. The n-dimensional Brownian motion is of course the solu-
tion of the stochastic differential equation

                                      dXt = dBt ,

i.e. we have b = 0 and σ = In , the n-dimensional identity matrix. So the
generator of Bt is
                        X ∂2f
             Af = 12              ;     f = f (x1 , . . . , xn ) ∈ C02 (Rn )
                           ∂x2i

i.e. A = 12 ∆, where ∆ is the Laplace operator.
Example 7.3.5 (The graph of Brownianµmotion).    ¶    Let B denote 1-di-
                                              X1
mensional Brownian motion and let X =              be the solution of the
                                              X2
stochastic differential equation
                          ½
                            dX1 = dt ; X1 (0) = t0
                            dX2 = dB ; X2 (0) = x0

i.e.                                                        µ        ¶
                                                                t0
                   dX = bdt + σdB ;            X(0) =                    ,
                                                                X0
          µ ¶           µ ¶
            1             0
with b =       and σ =       . In other words, X may be regarded as the
            0             1
graph of Brownian motion. The generator A of X is given by

                        ∂f     ∂2f
               Af =        + 12 2 ;         f = f (t, x) ∈ C02 (Rn ) .
                        ∂t     ∂x
   From now on we will, unless otherwise stated, let A = AX denote the
generator of the Itô diffusion Xt . We let L = LX denote the differential
operator given by the right hand side of (7.3.3). From Theorem 7.3.3 we
know that AX and LX coincide on C02 (Rn ).


7.4 The Dynkin Formula

If we combine (7.3.2) and (7.3.3) we get:
Theorem 7.4.1 (Dynkin’s formula).
Let f ∈ C02 (Rn ). Suppose τ is a stopping time, E x [τ ] < ∞. Then
                                                  · Zτ             ¸
                    x                         x
                  E [f (Xτ )] = f (x) + E                Af (Xs )ds .          (7.4.1)
                                                   0
                                                        7.4 The Dynkin Formula       121


Remarks.
(i) Note that if τ is the first exit time of a bounded set, E x [τ ] < ∞, then
     (7.4.1) holds for any function f ∈ C 2 .
(ii) For a more general version of Theorem 7.4.1 see Dynkin (1965 I), p. 133.
Example 7.4.2. Consider n-dimensional Brownian motion B = (B1 , . . . , Bn )
starting at a = (a1 , . . . , an ) ∈ Rn (n ≥ 1) and assume |a| < R. What is the
expected value of the first exit time τK of B from the ball

                        K = KR = {x ∈ Rn ; |x| < R} ?

Choose an integer k and apply Dynkin’s formula with X = B, τ = σk =
min(k, τK ), and f ∈ C02 such that f (x) = |x|2 for |x| ≤ R :
                                          · Zσk                ¸
            a                        a            1
          E [f (Bσk )] = f (a) + E                2 ∆f (Bs )ds
                                            0
                                       · Zσk          ¸
                        = |a|2 + E a            n · ds = |a|2 + n · E a [σk ] .
                                           0

Hence E a [σk ] ≤ n1 (R2 − |a|2 ) for all k. So letting k → ∞ we conclude that
τK = lim σk < ∞ a.s. and
                                          1 2
                            E a [τK ] =     (R − |a|2 ) .                         (7.4.2)
                                          n
Next we assume that n ≥ 2 and |b| > R. What is the probability that B
starting at b ever hits K?
    Let αk be the first exit time from the annulus

                  Ak = {x; R < |x| < 2k R} ;               k = 1, 2, . . .

and put
                           TK = inf{t > 0; Bt ∈ K} .
Let f = fn,k be a C 2 function with compact support such that, if R ≤ |x|
≤ 2k R,                      ½
                               − log |x| when n = 2
                     f (x) =
                               |x|2−n    when n > 2 .
Then, since ∆f = 0 in Ak , we have by Dynkin’s formula

                        E b [f (Bαk )] = f (b)       for all k .                  (7.4.3)

Put
                pk = P b [|Bαk | = R] ,         qk = P b [|Bαk | = 2k R] .
122      7. Diffusions: Basic Properties


Let us now consider the two cases n = 2 and n > 2 separately:

n = 2. Then we get from (7.4.3)

        − log R · pk − (log R + k · log 2)qk = − log |b|        for all k .   (7.4.4)

This implies that qk → 0 as k → ∞, so that

                                 P b [TK < ∞] = 1 ,                           (7.4.5)

i.e. Brownian motion is recurrent in R2 . (See Port and Stone (1979)).

n > 2. In this case (7.4.3) gives

                        pk · R2−n + qk · (2k R)2−n = |b|2−n .

Since 0 ≤ qk ≤ 1 we get by letting k → ∞
                                                   µ         ¶2−n
                                    b                  |b|
                        lim pk = P [TK < ∞] =                       ,
                        k→∞                            R
i.e. Brownian motion is transient in Rn for n > 2.


7.5 The Characteristic Operator
We now introduce an operator which is closely related to the generator A,
but is more suitable in many situations, for example in the solution of the
Dirichlet problem.
Definition 7.5.1. Let {Xt } be an Itô diffusion. The characteristic operator
A = AX of {Xt } is defined by
                                       E x [f (XτU )] − f (x)
                        Af (x) = lim                          ,               (7.5.1)
                                  U ↓x         E x [τU ]
where the U 0 s are
                  T open sets Uk decreasing to the point x, in the sense that
Uk+1 ⊂ Uk and Uk = {x}, and τU = inf{t > 0; Xt ∈        / U } is the first exit
                    k
time from U for Xt . The set of functions f such that the limit (7.5.1) exists
for all x ∈ Rn (and all {Uk }) is denoted by DA . If E x [τU ] = ∞ for all open
U 3 x, we define Af (x) = 0.
      It turns out that DA ⊆ DA always and that

                           Af = Af         for all f ∈ DA .

(See Dynkin (1965 I, p. 143).)
    We will only need that AX and LX coincide on C 2 . To obtain this we
first clarify a property of exit times.
                                             7.5 The Characteristic Operator           123


Definition 7.5.2. A point x ∈ Rn is called a trap for {Xt } if

                         Qx ({Xt = x for all t}) = 1 .

In other words, x is trap if and only if τ{x} = ∞ a.s. Qx . For example, if
b(x0 ) = σ(x0 ) = 0, then x0 is a trap for Xt (by strong uniqueness of Xt ).
Lemma 7.5.3. If x is not a trap for Xt , then there exists an open set U 3 x
such that
                              E x [τU ] < ∞ .
Proof. See Lemma 5.5 p. 139 in Dynkin (1965 I).
Theorem 7.5.4. Let f ∈ C 2 . Then f ∈ DA and
                         X          ∂f       X              ∂2f
                  Af =         bi       + 12     (σσ T )ij         .                (7.5.2)
                          i
                                    ∂xi      i,j
                                                           ∂xi ∂xj

Proof. As before we let L denote the operator defined by the right hand side
of (7.5.2). If x is a trap for {Xt } then Af (x) = 0. Choose a bounded open set
V such that x ∈ V . Modify f to f0 outside V such that f0 ∈ C02 (Rn ). Then
f0 ∈ DA (x) and 0 = Af0 (x) = Lf0 (x) = Lf (x). Hence Af (x) = Lf (x) = 0
in this case. If x is not a trap, choose a bounded open set U 3 x such that
E x [τU ] < ∞. Then by Dynkin’s formula (Theorem 7.4.1) (and the following
Remark (i)), writing τU = τ
                                             Rτ
      ¯ x                            ¯ |E x [ {(Lf )(Xs ) − Lf (x)}ds]|
      ¯ E [f (Xτ )] − f (x)          ¯
      ¯                     − Lf (x)¯¯ =     0
      ¯        x
              E [τ ]                                 E x [τ ]
                              ≤ sup |Lf (x) − Lf (y)| → 0              as U ↓ x ,
                                y∈U

since Lf is a continuous function.
Remark. We have now obtained that an Itô diffusion is a continuous, strong
Markov process such that the domain of definition of its characteristic oper-
ator includes C 2 . Thus an Itô diffusion is a diffusion in the sense of Dynkin
(1965 I).
Example 7.5.5 (Brownian motion      µ on  ¶ the unit circle). The character-
                                       Y1
istic operator of the process Y =            from Example 5.1.4 satisfying the
                                       Y2
stochastic differential equations (5.1.13), i.e.
                           
                            dY1 = − 12 Y1 dt − Y2 dB
                          
                               dY2 = − 12 Y2 dt + Y1 dB
124       7. Diffusions: Basic Properties


is
                        ·                                                 ¸
                            ∂2f          ∂2f         ∂2f     ∂f       ∂f
      Af (y1 , y2 ) = 21 y22 2 − 2y1 y2         + y12 2 − y1     − y2       .
                            ∂y1         ∂y1 ∂y2      ∂y2     ∂y1      ∂y2

This is because dY = − 12 Y dt + KY dB, where
                                   µ       ¶
                                     0 −1
                               K=
                                     1 0

so that
                                 dY = b(Y )dt + σ(Y )dB
with                             Ã             !                         µ         ¶
                                     − 12 y1                                 −y2
                 b(y1 , y2 ) =                     ,     σ(y1 , y2 ) =
                                     − 12 y2                                  y1

and                                     µ                        ¶
                                             y22        −y1 y2
                   a = 12 σσ T = 12                                  .
                                            −y1 y2       y12
Example 7.5.6. Let D be an open subset of Rn such that τD < ∞ a.s. Qx
for all x. Let φ be a bounded, measurable function on ∂D and define
                                     e
                                     φ(x) = E x [φ(XτD )]

(φe is called the X-harmonic extension of φ). Then if U is open, x ∈ U ⊂⊂ D,
we have by (7.2.8) that

                 e τ )] = E x [E XτU [φ(Xτ )]] = E x [φ(Xτ )] = φ(x)
            E x [φ(X                                            e    .
                     U                    D               D



So φe ∈ DA and
                                       Aφe = 0         in D ,
in spite of the fact that in general φe need not even be continuous in D (See
Example 9.2.1).


Exercises

7.1.    Find the generator of the following Itô diffusions:
        a) dXt = µXt dt + σdBt (The Ornstein-Uhlenbeck process) (Bt ∈ R;
           µ, σ constants).
        b) dXt = rXt dt + αXt dBt (The geometric Brownian motion)
           (Bt ∈ R; r, α constants).
        c) dYt = r dt + αYt dBt (Bt ∈ R; r, α constants)
                                                                           Exercises       125

                  ·    ¸
                   dt
       d) dYt =          where Xt is as in a)
                  dXt
          ·     ¸ ·      ¸           ·     ¸
            dX1        1                 0
       e)        =           dt + X1 dBt (Bt ∈ R)
            dX2       X2               e
          ·     ¸ · ¸             ·         ¸·     ¸
            dX1       1             1 0        dB1
       f)        =       dt +
            dX2       0             0 X1       dB2
       g) X(t) = (X1 , X2 , · · · , Xn ), where
                                                   n
                                                   X
                  dXk (t) = rk Xk dt + Xk ·              αkj dBj ;       1≤k≤n
                                                   j=1

          ((B1 , · · · , Bn ) is Brownian motion in Rn , rk and αkj are constants).

7.2.   Find an Itô diffusion (i.e. write down the stochastic differential equa-
       tion for it) whose generator is the following:
       a) Af (x) = f 0 (x) + f 00 (x) ; f ∈ C02 (R)
                                                2
       b) Af (t, x) = ∂f        ∂f      1 2 2∂ f
                        ∂t + cx ∂x + 2 α x ∂x2 ; f ∈ C0 (R ),
                                                             2 2

          where c, α are constants.
                              ∂f                        ∂f
       c) Af (x1 , x2 ) = 2x2 ∂x 1
                                   + ln(1 + x21 + x22 ) ∂x 2
                                      2            2             2
                      + 12 (1 + x21 ) ∂∂xf2 + x1 ∂x∂1 ∂x
                                                      f
                                                         2
                                                           + 12 · ∂∂xf2 ; f ∈ C02 (R2 ).
                                          1                          2


7.3.   Let Bt be Brownian motion on R, B0 = 0 and define

                                   Xt = Xtx = x · ect+αBt ,

       where c, α are constants. Prove directly from the definition that Xt is
       a Markov process.
7.4.   Let Btx be 1-dimensional Brownian motion starting at x ∈ R+ . Put

                                   τ = inf{t > 0; Btx = 0} .

       a) Prove that τ < ∞ a.s. P x for all x > 0. (Hint: See Example 7.4.2,
          second part).
       b) Prove that E x [τ ] = ∞ for all x > 0. (Hint: See Example 7.4.2, first
          part).
7.5.   Let the functions b, σ satisfy condition (5.2.1) of Theorem 5.2.1, with
       a constant C independent of t, i.e.

         |b(t, x)| + |σ(t, x)| ≤ C(1 + |x|)            for all x ∈ Rn and all t ≥ 0 .

       Let Xt be a solution of

                              dXt = b(t, Xt )dt + σ(t, Xt )dBt .
126    7. Diffusions: Basic Properties


       Show that
                          E[|Xt |2 ] ≤ (1 + E[|X0 |2 ])eKt − 1
       for some constant K independent of t.
       (Hint: Use Dynkin’s formula with f (x) = |x|2 and τ = t ∧ τR , where
       τR = inf {t > 0; |Xt | ≥ R}, and let R → ∞ to achieve the inequality

                                                      Zt
                          2              2
                   E[|Xt | ] ≤ E[|X0 | ] + K ·             (1 + E[|Xs |2 ])ds ,
                                                      0

       which is of the form (5.2.9).)

7.6.   Let g(x, ω) = f ◦ F (x, t, t + h, ω) be as in the proof of Theorem 7.1.2.
       Assume that f is continuous.
       a) Prove that the map x → g(x, ·) is continuous from Rn into L2 (P )
          by using (5.2.9).
       For simplicity assume that n = 1 in the following.
       b) Use a) to prove that (x, ω) → g(x, ω) is measurable. (Hint: For each
                                    (m)
          m = 1, 2, . . . put ξk = ξk = k · 2−m , k = 1, 2, . . . Then
                                           X
                         g (m) (x, ·): =         g(ξk , ·) · X{ξk ≤x<ξk+1 }
                                             k

          converges to g(x, ·) in L2 (P ) for each x. Deduce that g (m) → g
          in L2 (dmR × dP ) for all R, where dmR is Lebesgue measure on
          {|x| ≤ R}. So a subsequence of g (m) (x, ω) converges to g(x, ω) for
          a.a. (x, ω).)
7.7.   Let Bt be Brownian motion on Rn starting at x ∈ Rn and let D ⊂ Rn
       be an open ball centered at x.
       a) Use Exercise 2.15 to prove that the harmonic measure µxD of Bt is
          rotation invariant (about x) on the sphere ∂D. Conclude that µxD
          coincides with normalized surface measure σ on ∂D.
       b) Let φ be a bounded measurable function on a bounded open set
          W ⊂ Rn and define

                          u(x) = E x [φ(BτW )]               for x ∈ W .

          Prove that u satisfies the classical mean value property:
                                          Z
                                  u(x) =     u(y)dσ(y)
                                                 ∂D

          for all balls D centered at x with D ⊂ W .
                                                                       Exercises   127


7.8.   Let {Nt } be a right-continuous family of σ-algebras of subsets of Ω,
       containing all sets of measure zero.
       a) Let τ1 , τ2 be stopping times (w.r.t. Nt ). Prove that τ1 ∧τ2 and τ1 ∨τ2
           are stopping times.
       b) If {τn } is a decreasing family of stopping times prove that τ : =
           lim τn is a stopping time.
            n
       c) If Xt is an Itô diffusion in Rn and F ⊂ Rn is closed, prove that τF
           is a stopping time w.r.t. Mt . (Hint: Consider open sets decreasing
           to F ).
7.9.   Let Xt be a geometric Brownian motion, i.e.

                      dXt = rXt dt + αXt dBt ,                 X0 = x > 0

       where Bt ∈ R; r, α are constants.
       a) Find the generator A of Xt and compute Af (x) when f (x) = xγ ;
          x > 0, γ constant.
       b) If r < 12 α2 then Xt → 0 as t → ∞, a.s. Qx (Example 5.1.1).
          But what is the probability p that Xt , when starting from x < R,
          ever hits the value R ? Use Dynkin’s formula with f (x) = xγ1 ,
          γ1 = 1 − α2r2 , to prove that
                                            µ        ¶γ1
                                                 x
                                       p=                  .
                                                 R

       c) If r > 12 α2 then Xt → ∞ as t → ∞, a.s. Qx . Put

                                 τ = inf{t > 0; Xt ≥ R} .

          Use Dynkin’s formula with f (x) = ln x, x > 0 to prove that

                                                   ln R
                                    E x [τ ] =        x
                                                           .
                                                 r − 12 α2

          (Hint: First consider exit times from (ρ, R), ρ > 0 and then let
          ρ → 0. You need estimates for

                                      (1 − p(ρ)) ln ρ ,

          where

                     p(ρ) = Qx [Xt reaches the value R before ρ ] ,

          which you can get from the calculations in a), b).)
128    7. Diffusions: Basic Properties


7.10. Let Xt be the geometric Brownian motion

                                 dXt = rXt dt + αXt dBt .

      Find E x [XT |Ft ]   for t ≤ T by
      a) using the Markov property
      and
      b) writing Xt = x ert Mt , where

                    Mt = exp(αBt − 12 α2 t)               is a martingale .

7.11. Let Xt be an Itô diffusion in Rn and let f : Rn → R be a function such
      that
                       · Z∞            ¸
                     x
                   E        |f (Xt )|dt < ∞      for all x ∈ Rn .
                          0

      Let τ be a stopping time. Use the strong Markov property to prove
      that
                            · Z∞          ¸
                          x
                        E        f (Xt )dt = E x [g(Xτ )] ,
                                  τ

      where
                                                · Z∞            ¸
                                            y
                                 g(y) = E              f (Xt )dt .
                                                 0

7.12. (Local martingales)
      An Nt -adapted stochastic process Z(t) ∈ Rn is called a local martin-
      gale with respect to the given filtration {Nt } if there exists an increas-
      ing sequence of Nt -stopping times τk such that

                                 τk → ∞         a.s. as k → ∞

      and
                    Z(t ∧ τk )        is an Nt -martingale for all k .
      a) Show that if Z(t) is a local martingale and there exists a constant
         T ≤ ∞ such that the family {Z(τ )}τ ≤T is uniformly integrable
         (Appendix C) then {Z(t)}t≤T is a martingale.
      b) In particular, if Z(t) is a local martingale and there exists a constant
         K < ∞ such that
                                       E[Z 2 (τ )] ≤ K
         for all stopping times τ ≤ T , then {Z(t)}t≤T is a martingale.
      c) Show that if Z(t) is a lower bounded local martingale, then Z(t) is
         a supermartingale (Appendix C).
                                                                   Exercises   129


7.13. a) Let Bt ∈ R2 , B0 = x 6= 0. Fix 0 < ² < R < ∞ and define

                               Xt = ln |Bt∧τ | ;      t≥0

          where
                       τ = inf {t > 0; |Bt | ≤ ² or |Bt | ≥ R} .
          Prove that Xt is an Ft∧τ -martingale. (Hint: Use Exercise 4.8.)
          Deduce that ln |Bt | is a local martingale (Exercise 7.12).
      b) Let Bt ∈ Rn for n ≥ 3, B0 = x 6= 0. Fix ² > 0, R < ∞ and define

                               Yt = |Bt∧τ |2−n ;       t≥0

          where
                       τ = inf{t > 0; |Bt | ≤ ² or |Bt | ≥ R} .
          Prove that Yt is an Ft∧τ -martingale.
          Deduce that |Bt |2−n is a local martingale.
7.14. (Doob’s h-transform)
      Let Bt be n-dimensional Brownian motion, D ⊂ Rn a bounded open
      set and h > 0 a harmonic function on D (i.e. ∆h = 0 in D). Let Xt
      be the solution of the stochastic differential equation

                            dXt = ∇(ln h)(Xt )dt + dBt

      More precisely, choose an increasing sequence {Dk } of open subsets of
                                  S
                                  ∞
      D such that Dk ⊂ D and         Dk = D. Then for each k the equation
                                  k=1
      above can be solved (strongly) for t < τDk . This gives in a natural way
      a solution for t < τ : = lim τDk .
                             k→∞
      a) Show that the generator A of Xt satisfies

                                 ∆(hf )
                          Af =                 for f ∈ C02 (D) .
                                  2h
         In particular, if f = h1 then Af = 0.
      b) Use a) to show that if there exists x0 ∈ ∂D such that
                                           ½
                                             0 if y 6= x0
                              lim h(x) =
                            x→y∈∂D           ∞ if y = x0

         (i.e. h is a kernel function), then

                                   lim Xt = x0 a.s.
                                   t→τ

         (Hint: Consider E x [f (XT )] for suitable stopping times T and with
         f = h1 )
130    7. Diffusions: Basic Properties


         In other words, we have imposed a drift on Bt which causes the
         process to exit from D at the point x0 only. This can also be for-
         mulated as follows: Xt is obtained by conditioning Bt to exit from
         D at x0 . See Doob (1984).
7.15. Let Bt be 1-dimensional and define

                                F (ω) = (BT (ω) − K)+

      where K > 0, T > 0 are constants.
      By the Itô representation theorem (Theorem 4.3.3) we know that there
      exists φ ∈ V(0, T ) such that

                                                   ZT
                           F (ω) = E[F ] +               φ(t, ω)dBt .
                                                   0

      How do we find φ explicitly? This problem is of interest in mathe-
      matical finance, where φ may be regarded as the replicating portfolio
      for the contingent claim F (see Chapter 12). Using the Clark-Ocone
      formula (see Karatzas and Ocone (1991) or Øksendal (1996)) one can
      deduce that

                      φ(t, ω) = E[X[K,∞) (BT )|Ft ] ;              t<T .      (7.5.3)

      Use (7.5.3) and the Markov property of Brownian motion to prove that
      for t < T we have
                                       Z∞         µ                   ¶
                            1                           (x − Bt (ω))2
            φ(t, ω) = p                     exp       −                dx .   (7.5.4)
                         2π(T − t)                        2(T − t)
                                       K

7.16. Let Bt be 1-dimensional and let f : R → R be a bounded function.
      Prove that if t < T then
                                        Z          µ                ¶
                                 1                    (x − Bt (ω))2
        E x [f (BT )|Ft ] = p             f (x) exp −                dx .
                              2π(T − t)                 2(T − t)
                                             R
                                                                              (7.5.5)
      (Compare with (7.5.4).)

7.17. Let Bt be 1-dimensional and put

                          Xt = (x1/3 + 13 Bt )3 ;               t≥0.

      Then we have seen in Exercise 4.15 that Xt is a solution of the stochas-
      tic differential equation
                                 1/3              2/3
                     dXt = 31 Xt       dt + Xt          dBt ;     X0 = x .    (7.5.6)
                                                                                  Exercises      131


      Define
                                    τ = inf{t > 0; Xt = 0}
      and put                               n
                                     Xt for t ≤ τ
                                    Yt =
                                     0     for t > τ .
      Prove that Yt is also a (strong) solution of (7.5.6). Why does not this
      contradict the uniqueness assertion of Theorem 5.2.1?
      (Hint: Verify that

                                        Zt                       Zt
                                             1 1/3
                           Yt = x +          3 Ys  ds +               Ys2/3 dBs
                                        0                        0

      for all t by splitting the integrals as follows:

                                       Zt        Zt∧τ       Zt
                                             =          +        .)
                                       0         0      t∧τ

7.18. a) Let
                          dXt = b(Xt )dt + σ(Xt )dBt ;                      X0 = x
         be a 1-dimensional Itô diffusion with characteristic operator A. Let
         f ∈ C 2 (R) be a solution of the differential equation

               Af (x) = b(x)f 0 (x) + 12 σ 2 (x)f 00 (x) = 0 ;                x∈R.            (7.5.7)

         Let (a, b) ⊂ R be an open interval such that x ∈ (a, b) and put

                                   τ = inf{t > 0; Xt 6∈ (a, b)} .

         Assume that τ < ∞ a.s. Qx and define

                                            p = P x [Xτ = b] .

         Use Dynkin’s formula to prove that if f (b) 6= f (a) then

                                                 f (x) − f (a)
                                           p=                  .                              (7.5.8)
                                                 f (b) − f (a)

         In other words, the harmonic measure µx(a,b) of X on ∂(a, b) = {a, b}
         is given by

                               f (x) − f (a)                            f (b) − f (x)
               µx(a,b) (b) =                 ,       µx(a,b) (a) =                    .       (7.5.9)
                               f (b) − f (a)                            f (b) − f (a)
132    7. Diffusions: Basic Properties


      b) Now specialize to the process

                                 Xt = x + Bt ;        t≥0.

         Prove that
                                              x−a
                                         p=       .                     (7.5.10)
                                              b−a
      c) Find p if
                              Xt = x + µt + σBt ;        t≥0
         where µ, σ ∈ R are nonzero constants.
7.19. Let Btx be 1-dimensional Brownian motion starting at x > 0. Define

                         τ = τ (x, ω) = inf{t > 0; Btx (ω) = 0} .

      From Exercise 7.4 we know that

                           τ <∞     a.s. P x and E x [τ ] = ∞ .

      What is the distribution of the random variable τ (ω) ?
      a) To answer this, first find the Laplace transform

                         g(λ): = E x [e−λτ ] for λ > 0 .
                               √
         (Hint: Let Mt = exp(− 2λ Bt − λt). Then

                       {Mt∧τ }t≥0 is a bounded martingale .
                                   √
         [Solution: g(λ) = exp(− 2λ x) .]
      b) To find the density f (t) of τ it suffices to find f (t) = f (t, x) such
         that
                   Z∞                      √
                      e−λt f (t)dt = exp(− 2λ x)         for all λ > 0
                     0

         i.e. to find the inverse Laplace transform of g(λ). Verify that
                                            µ      ¶
                                     x          x2
                       f (t, x) = √      exp −       ;    t>0.
                                    2πt3        2t
8. Other Topics in Diffusion Theory




In this chapter we study some other important topics in diffusion theory and
related areas. Some of these topics are not strictly necessary for the remaining
chapters, but they are all central in the theory of stochastic analysis and
essential for further applications. The following topics will be treated:

   8.1 Kolmogorov’s backward equation. The resolvent.
   8.2 The Feynman-Kac formula. Killing.
   8.3 The martingale problem.
   8.4 When is an Itô process a diffusion?
   8.5 Random time change.
   8.6 The Girsanov formula.


8.1 Kolmogorov’s Backward Equation. The Resolvent
In the following we let Xt be an Itô diffusion in Rn with generator A. If we
choose f ∈ C02 (Rn ) and τ = t in Dynkin’s formula (7.4.1) we see that
                             u(t, x) = E x [f (Xt )]
is differentiable with respect to t and
                              ∂u
                                 = E x [Af (Xt )] .                      (8.1.1)
                              ∂t
It turns out that the right hand side of (8.1.1) can be expressed in terms of
u also:
Theorem 8.1.1 (Kolmogorov’s backward equation).
Let f ∈ C02 (Rn ).
a) Define
                              u(t, x) = E x [f (Xt )] .                  (8.1.2)
   Then u(t, ·) ∈ DA for each t and
                           ∂u
                               = Au ,        t > 0, x ∈ Rn               (8.1.3)
                           ∂t
                           u(0, x) = f (x) ;      x ∈ Rn                 (8.1.4)
134     8. Other Topics in Diffusion Theory


   where the right hand side is to be interpreted as A applied to the function
   x → u(t, x).
b) Moreover, if w(t, x) ∈ C 1,2 (R × Rn ) is a bounded function satisfying
   (8.1.3), (8.1.4) then w(t, x) = u(t, x), given by (8.1.2).
Proof. a) Let g(x) = u(t, x). Then since t → u(t, x) is differentiable we have

         E x [g(Xr )] − g(x)   1
                             = · E x [E Xr [f (Xt )] − E x [f (Xt )]]
                  r            r
                               1
                             = · E x [E x [f (Xt+r )|Fr ] − E x [f (Xt )|Fr ]]
                               r
                               1
                             = · E x [f (Xt+r ) − f (Xt )]
                               r
                               u(t + r, x) − u(t, x)      ∂u
                             =                        →             as r ↓ 0 .
                                         r                ∂t
Hence
                   E x [g(Xr )] − g(x)
      Au = lim                                 exists and ∂u
                                                          ∂t = Au, as asserted .
               r↓0          r

Conversely, to prove the uniqueness statement in b) assume that a function
w(t, x) ∈ C 1,2 (R × Rn ) satisfies (8.1.3)–(8.1.4). Then

                      e = − ∂w + Aw = 0
                      Aw:                              for t > 0, x ∈ Rn           (8.1.5)
                            ∂t
and
                              w(0, x) = f (x) ,            x ∈ Rn .                (8.1.6)
Fix (s, x) ∈ R × Rn . Define the process Yt in Rn+1 by Yt = (s − t, Xt0,x ),
t ≥ 0. Then Yt has generator Ae and so by (8.1.5) and Dynkin’s formula we
have, for all t ≥ 0,
                                                     · t∧τ
                                                        Z R         ¸
         E   s,x
                   [w(Yt∧τR )] = w(s, x) + E   s,x          e
                                                           Aw(Yr )dr = w(s, x) ,
                                                       0

where τR = inf{t > 0; |Xt | ≥ R}.
   Letting R → ∞ we get

                           w(s, x) = E s,x [w(Yt )] ;         ∀t ≥ 0 .

In particular, choosing t = s we get

      w(s, x) = E s,x [w(Ys )] = E[w(0, Xs0,x )] = E[f (Xs0,x )] = E x [f (Xs )] .
                                                                                        t
                                                                                        u
                   8.1 Kolmogorov’s Backward Equation. The Resolvent       135


Remark. If we introduce the operator Qt : f → E • [f (Xt )] then we have
u(t, x) = (Qt f )(x) and we may rewrite (8.1.1) and (8.1.3) as follows:
                     d
                        (Qt f ) = Qt (Af ) ;    f ∈ C02 (Rn )        (8.1.1)0
                     dt
                    d
                       (Qt f ) = A(Qt f ) ;    f ∈ C02 (Rn ) .       (8.1.3)0
                    dt
Thus the equivalence of (8.1.1) and (8.1.3) amounts to saying that the oper-
ators Qt and A commute, in some sense. Arguing formally, it is tempting to
say that the solution of (8.1.1)0 and (8.1.3)0 is
                                   Qt = etA
and therefore Qt A = AQt . However, this argument would require a further
explanation, because in general A is an unbounded operator.
    It is an important fact that the operator A always has an inverse, at least
if a positive multiple of the identity is subtracted from A. This inverse can
be expressed explicitly in terms of the diffusion Xt :
Definition 8.1.2. For α > 0 and g ∈ Cb (Rn ) we define the resolvent oper-
ator Rα by
                                  · Z∞              ¸
                    Rα g(x) = E x      e−αt g(Xt )dt .             (8.1.7)
                                         0

Lemma 8.1.3. Rα g is a bounded continuous function.
                         R∞ −αt x
Proof. Since Rα g(x) =     e E [g(Xt )]dt, we see that Lemma 8.1.3 is a
                          0
direct consequence of the next result:
Lemma 8.1.4. Let g be a lower bounded, measurable function on Rn and
define, for fixed t ≥ 0
                         u(x) = E x [g(Xt )] .
a) If g is lower semicontinuous, then u is lower semicontinuous.
b) If g is bounded and continuous, then u is continuous. In other words, any
   Itô diffusion Xt is Feller-continuous.
Proof. By (5.2.10) we have
                       E[|Xtx − Xty |2 ] ≤ |y − x|2 C(t) ,
where C(t) does not depend on x and y. Let {yn } be a sequence of points
converging to x. Then
                  Xtyn → Xtx       in L2 (Ω, P ) as n → ∞ .
So, by taking a subsequence {zn } of {yn } we obtain that
                    Xtzn (ω) → Xtx (ω)       for a.a. ω ∈ Ω .
136         8. Other Topics in Diffusion Theory


a) If g is lower bounded and lower semicontinuous, then by the Fatou lemma
       u(x) = E[g(Xtx )] ≤ E[ lim g(Xtzn )] ≤ lim E[g(Xtzn )] = lim u(zn ) .
                                           n→∞                                   n→∞                    n→∞

      Therefore every sequence {yn } converging to x has a subsequence {zn }
      such that u(x) ≤ lim u(zn ). That proves that u is lower semicontinuous.
                                     n→∞
b) If g is bounded and continuous, the result in a) can be applied both to g
   and −g. Hence both u and −u are lower semicontinuous and we conclude
   that u is continuous.                                                   t
                                                                           u
      We now prove that Rα and α − A are inverse operators:
Theorem 8.1.5. a) If f ∈ C02 (Rn ) then Rα (α − A)f = f for all α > 0.
b) If g ∈ Cb (Rn ) then Rα g ∈ DA and (α − A)Rα g = g for all α > 0.
Proof. a) If f ∈ C02 (Rn ) then by Dynkin’s formula
  Rα (α − A)f (x) = (αRα f − Rα Af )(x)
        Z∞                   Z∞
   = α e E [f (Xt )]dt − e−αt E x [Af (Xt )]dt
           −αt x

                0                                     0
         ¯
         ∞                                    Z∞                                          Z∞
         ¯                                                −αt d
       = ¯ −e−αt E x [f (Xt )] +                      e                  x
                                                                       E [f (Xt )]dt −           e−αt E x [Af (Xt )]dt
                                                                  dt
            0                                 0                                              0
                x
       = E [f (X0 )] = f (x) .
b) If g ∈ Cb (Rn ) then by the strong Markov property
                                              · Z∞                          ¸
        x                            x   Xt                   −αs
      E [Rα g(Xt )] = E [E                                e         g(Xs )ds ]
                                                  0
              h µ Z∞               ¶ i             · Z∞                    ¸
                x     x−αs                   x   x        −αs
       = E [E θt     e     g(Xs )ds |Ft ] = E [E        e     g(Xt+s )ds|Ft ]
                                 0                                                       0
                    · Z∞                   ¸ Z∞
       = Ex                e −αs
                                 g(Xt+s )ds = e−αs E x [g(Xt+s )]ds .
                     0                                        0

Integration by parts gives
                                                              Z∞             Zt+s
                             x                                         −αs
                            E [Rα g(Xt )] = α                      e             E x [g(Xv )]dv ds .
                                                              0              t

This identity implies that Rα g ∈ DA and
                                           A(Rα g) = αRα g − g .
                                                                                                                         t
                                                                                                                         u
                                              8.2 The Feynman-Kac Formula. Killing                 137


8.2 The Feynman-Kac Formula. Killing
With a little harder work we can obtain the following useful generalization
of Kolmogorov’s backward equation:
Theorem 8.2.1 (The Feynman-Kac formula).
Let f ∈ C02 (Rn ) and q ∈ C(Rn ). Assume that q is lower bounded.
a) Put
                                          ·         µ         Zt               ¶       ¸
                                      x
                     v(t, x) = E              exp        −             q(Xs )ds f (Xt ) .       (8.2.1)
                                                              0
     Then
                          ∂v
                             = Av − qv ;                               t > 0, x ∈ Rn            (8.2.2)
                          ∂t
                          v(0, x) = f (x) ;                            x ∈ Rn                   (8.2.3)
                                      1,2                  n                                n
b) Moreover, if w(t, x) ∈ C (R × R ) is bounded on K × R for each
   compact K ⊂ R and w solves (8.2.2), (8.2.3), then w(t, x) = v(t, x),
   given by (8.2.1).
                                                                  Rt
Proof. a) Let Yt = f (Xt ), Zt = exp(−                                 q(Xs )ds). Then dYt is given by
                                                                  0
(7.3.1) and
                                  dZt = −Zt q(Xt )dt .
So
               d(Yt Zt ) = Yt dZt + Zt dYt ,       since dZt · dYt = 0 .
Note that since Yt Zt is an Itô process it follows from Lemma 7.3.2 that
v(t, x) = E x [Yt Zt ] is differentiable w.r.t. t.
    Therefore, with v(t, x) as in (8.2.1) we get
      1 x                              1
        (E [v(t, Xr )] − v(t, x)) = E x [E Xr [Zt f (Xt )] − E x [Zt f (Xt )]]
      r                                r
                                     µ Zt               ¶
           1
         = E x [E x [f (Xt+r ) exp − q(Xs+r )ds |Fr ] − E x [Zt f (Xt )|Fr ]]
           r
                                                    0
                               µ Zr           ¶
             1 x
         =     E [Zt+r · exp          q(Xs )ds f (Xt+r ) − Zt f (Xt )]
             r
                                 0
          1
         = E x [f (Xt+r )Zt+r − f (Xt )Zt ]
          r
                                       µ Zr         ¶
            1 xh                 ³                       ´i
          + E f (Xt+r )Zt+r · exp           q(Xs )ds − 1
            r
                                                          0
          ∂
         → v(t, x) + q(x)v(t, x)                        as r → 0 ,
          ∂t
138     8. Other Topics in Diffusion Theory


because
                         ³                    µ Zr             ¶   ´
          1
            f (Xt+r )Zt+r exp                          q(Xs )ds − 1 → f (Xt )Zt q(X0 )
          r
                                                   0

pointwise boundedly. That completes the proof of a).

b) Assume that w(t, x) ∈ C 1,2 (R × Rn ) satisfies (8.2.2) and (8.2.3) and that
w(t, x) is bounded on K × Rn for each compact K ⊂ R. Then

        b             ∂w
        Aw(t, x): = −    + Aw − qw = 0                           for t > 0, x ∈ Rn             (8.2.4)
                      ∂t
and
                                  w(0, x) = f (x) ;             x ∈ Rn .                       (8.2.5)
                                                                        Rt
Fix (s, x, z) ∈ R × Rn × Rn and define Zt = z +                              q(Xs )ds and Ht = (s − t,
                                                                        0
Xt0,x , Zt ). Then Ht is an Itô diffusion with generator
                                 ∂φ             ∂φ
      AH φ(s, x, z) = −             + Aφ + q(x)    ;                  φ ∈ C02 (R × Rn × Rn ) .
                                 ∂s             ∂z
Hence by (8.2.4) and Dynkin’s formula we have, for all t ≥ 0, R > 0 and with
φ(s, x, z) = exp(−z)w(s, x):
                                                                      · t∧τ
                                                                         Z R           ¸
              s,x,z                                           s,x,z
          E           [φ(Ht∧τR )] = φ(s, x, z) + E                          AH φ(Hr )dr ,
                                                                        0

where τR = inf{t > 0; |Ht | ≥ R}.
   Note that with this choice of φ we have by (8.2.4)
                                   ·                  ¸
                                       ∂w
           AH φ(s, x, z) = exp(−z) −      + Aw − q(x)w = 0 .
                                       ∂s
Hence

      w(s, x) = φ(s, x, 0) = E s,x,0 [φ(Ht∧τR )]
                    h     µ t∧τZ R          ¶                      i
                  x
              = E exp −             q(Xr )dr w(s − t ∧ τR , Xt∧τR )
                                               0
                            h         µ       Zt           ¶              i
                        x
                → E             exp       −        q(Xr )dr w(s − t, Xt )           as R → ∞ ,
                                              0

since w(r, x) is bounded for (r, x) ∈ K × Rn . In particular, choosing t = s we
get
                                    8.2 The Feynman-Kac Formula. Killing           139


               h   µ Zs       ¶            i
  w(s, x) = E x exp − q(Xr )dr w(0, Xs0,x ) = v(s, x) ,                as claimed .
                            0
                                                                                      t
                                                                                      u
Remark. (About killing a diffusion)
In Theorem 7.3.3 we have seen that the generator of an Itô diffusion Xt given
by
                       dXt = b(Xt )dt + σ(Xt )dBt                      (8.2.6)
is a partial differential operator L of the form
                              X        ∂2f      X ∂f
                         Lf =     aij         +  bi                            (8.2.7)
                                      ∂xi ∂xj       ∂xi
where [aij ] = 12 σσ T , b = [bi ]. It is natural to ask if one can also find processes
whose generator has the form
                             X           ∂2f      X ∂f
                      Lf =         aij         +      bi     − cf ,             (8.2.8)
                                       ∂xi ∂xj           ∂xi
where c(x) is a bounded and continuous function.
   If c(x) ≥ 0 the answer is yes and a process X et with generator (8.2.8) is
obtained by killing Xt at a certain (killing) time ζ. By this we mean that
there exists a random time ζ such that if we put
                                et = Xt
                                X             if t < ζ                         (8.2.9)
          et undefined if t ≥ ζ (alternatively, put X
and leave X                                            et = ∂ if t ≥ ζ, where
∂∈    n                                e
  / R is some “coffin” state), then Xt is also a strong Markov process and
                                                       Rt
                                           £         −    c(Xs )ds ¤
        x  e        x                    x
     E [f (Xt )] = E [f (Xt ), t < ζ] = E f (Xt ) · e 0               (8.2.10)
for all bounded continuous functions f on Rn .
    Let v(t, x) denote the right hand side of (8.2.10) with f ∈ C02 (Rn ). Then
             et )] − f (x)
     E x [f (X                ∂
 lim                       = v(t, x)t=0 = (Av − cv)t=0 = Af (x) − c(x)f (x) ,
 t→0           t             ∂t
by the Feynman-Kac formula.
    So the generator of X   et is (8.2.8), as required. The function c(x) can be
interpreted as the killing rate:
                        1
            c(x) = lim Qx [X0 is killed in the time interval (0, t]] .
                    t↓0 t

Thus by applying such a killing procedure we can come from the special case
c = 0 in (8.2.7) to the general case (8.2.8) with c(x) ≥ 0. Therefore, for many
purposes it is enough to consider the equation (8.2.7).
   If the function c(x) ≥ 0 is given, an explicit construction of the killing
time ζ such that (8.2.10) holds can be found in Karlin and Taylor (1975),
p. 314. For a more general discussion see Blumenthal and Getoor (1968),
Chap. III.
140      8. Other Topics in Diffusion Theory


8.3 The Martingale Problem

If dXt = b(Xt )dt + σ(Xt )dBt is an Itô diffusion in Rn with generator A and
if f ∈ C02 (Rn ) then by (7.3.1)

                              Zt                  Zt
         f (Xt ) = f (x) +         Af (Xs )ds +        ∇f T (Xs )σ(Xs )dBs .            (8.3.1)
                              0                   0

Define
                       Zt                              Zt
      Mt = f (Xt ) −        Af (Xr )dr (= f (x) +           ∇f T (Xr )σ(Xr )dBr ) .     (8.3.2)
                       0                               0

                                                                                      (m)
Then, since Itô integrals are martingales (w.r.t. the σ-algebras {Ft                       }) we
have for s > t
                                       (m)
                             E x [Ms |Ft ] = Mt .
It follows that
                                             (m)
           E x [Ms |Mt ] = E x [E x [Ms |Ft        ]|Mt ] = E x [Mt |Mt ] = Mt ,

since Mt is Mt -measurable. We have proved:
Theorem 8.3.1. If Xt is an Itô diffusion in Rn with generator A, then for
all f ∈ C02 (Rn ) the process

                                                  Zt
                               Mt = f (Xt ) −          Af (Xr )dr
                                                  0

is a martingale w.r.t. {Mt }.
      If we identify each ω ∈ Ω with the function

                                     ωt = ω(t) = Xtx (ω)

we see that the probability space (Ω, M, Qx ) is identified with

                                                      ex )
                                     ((Rn )[0,∞) , B, Q

where B is the Borel σ-algebra on (Rn )[0,∞) (see Chapter 2). Thus, regarding
the law of Xtx as a probability measure Q  e x on B we can formulate Theo-
rem 8.3.1 as follows:

Theorem 8.3.1’. If Q   e x is the probability measure on B induced by the law
Q of an Itô diffusion Xt , then for all f ∈ C02 (Rn ) the process
 x
                                                      8.3 The Martingale Problem        141


                    Zt                                Zt
   Mt = f (Xt ) −        Af (Xr )dr (= f (ωt ) −           Af (ωr )dr) ;   ω ∈ (Rn )[0,∞)
                    0                                 0
                                                                             (8.3.3)
     e x -martingale w.r.t. the Borel σ-algebras Bt of (Rn )[0,t] , t ≥ 0. In other
is a Q
words, the measure Q  e x solves the martingale problem for the differential
operator A, in the following sense:
Definition 8.3.2. Let L be a semi-elliptic differential operator of the form
                                X             ∂    X         ∂2
                           L=           bi       +     aij
                                             ∂xi   i,j
                                                           ∂xi ∂xj

where the coefficients bi , aij are locally bounded Borel measurable functions
on Rn . Then we say that a probability measure Pex on ((Rn )[0,∞) , B) solves
the martingale problem for L (starting at x) if the process
                                  Zt
               Mt = f (ωt ) −           Lf (ωr )dr , M0 = f (x)       a.s. Pex
                                  0

is a Pex martingale w.r.t. Bt , for all f ∈ C02 (Rn ). The martingale problem
is called well posed if there is a unique measure Pex solving the martingale
problem.
                                                       e x solves the mar-
    The argument of Theorem 8.3.1 actually proves that Q
tingale problem for A whenever Xt is a weak solution of the stochastic dif-
ferential equation
                       dXt = b(Xt )dt + σ(Xt )dBt .                 (8.3.4)
Conversely, it can be proved that if Pex solves the martingale problem for
                              X         ∂       X            ∂2
                         L=       bi       + 12  (σσ T )ij                           (8.3.5)
                                       ∂xi                 ∂xi ∂xj
starting at x, for all x ∈ Rn , then there exists a weak solution Xt of the
stochastic differential equation (8.3.4). Moreover, this weak solution Xt is a
Markov process if and only if the martingale problem for L is well posed.
(See Stroock and Varadhan (1979) or Rogers and Williams (1987)). There-
fore, if the coefficients b, σ of (8.3.4) satisfy the conditions (5.2.1), (5.2.2) of
Theorem 5.2.1, we conclude that
              e x is the unique solution of the martingale problem
              Q
              for the operator L given by (8.3.5) .                                  (8.3.6)
Lipschitz-continuity of the coefficients of L is not necessary for the uniqueness
of the martingale problem. For example, one of the spectacular results of
Stroock and Varadhan (1979) is that
142    8. Other Topics in Diffusion Theory

                              X         ∂    X       ∂2
                         L=       bi       +   aij
                                       ∂xi         ∂xi ∂xj
has a unique solution of the martingale problem if [aij ] is everywhere positive
definite, aij (x) is continuous, b(x) is measurable and there exists a constant
D such that
                              1
              |b(x)| + |a(x)| 2 ≤ D(1 + |x|)           for all x ∈ Rn .


8.4 When is an Itô Process a Diffusion?
The Itô formula gives that if we apply a C 2 function φ: U ⊂ Rn → Rn to an
Itô process Xt the result φ(Xt ) is another Itô process. A natural question is:
If Xt is an Itô diffusion will φ(Xt ) be an Itô diffusion too? The answer is no
in general, but it may be yes in some cases:
Example 8.4.1 (The Bessel process). Let n ≥ 2. In Example 4.2.2 we
found that the process
                                                                      1
              Rt (ω) = |B(t, ω)| = (B1 (t, ω)2 + · · · + Bn (t, ω)2 ) 2
satisfies the equation
                                  n
                                  X Bi dBi           n−1
                         dRt =                   +       dt .             (8.4.1)
                                  i=1
                                            Rt       2Rt

However, as it stands this is not a stochastic differential equation of the form
(5.2.3), so it is not apparent from (8.4.1) that R is an Itô diffusion. But this
will follow if we can show that
                                        Zt X
                                           n
                                                Bi
                               Yt : =               dBi
                                            i=1
                                                |B|
                                        0

coincides in law with (i.e. has the same finite-dimensional distributions as)
1-dimensional Brownian motion B   et . For then (8.4.1) can be written

                                        n−1       e
                              dRt =         dt + dB
                                        2Rt
which is of the form (5.2.3), thus showing by weak uniqueness (Lemma 5.3.1)
that Rt is an Itô diffusion with generator
                                                  n−1 0
                         Af (x) = 12 f 00 (x) +       f (x)
                                                   2x
as claimed in Example 4.2.2. One way of seeing that the process Yt coincides
in law with 1-dimensional Brownian motion B   et is to apply the following
result:
                                          8.4 When is an Itô Process a Diffusion?           143


Theorem 8.4.2. An Itô process
                                                                  n×m
                   dYt = vdBt ;            Y0 = 0 with v(t, ω) ∈ VH

coincides (in law) with n-dimensional Brownian motion if and only if

                  vv T (t, ω) = In         for a.a. (t, ω) w.r.t. dt × dP                (8.4.2)

where In is the n-dimensional identity matrix.
   Note that in the example above we have
                                                 Zt
                                          Yt =        vdB
                                                 0

with                                                                
                             ·          ¸                        B1
                          B1        Bn                             .
                       v=     ,...,       ,                 B =  .. 
                          |B|       |B|
                                                                    Bn
              T
and since vv = 1, we get that Yt is a 1-dimensional Brownian motion, as
required.
    Theorem 8.4.2 is a special case of the following result, which gives a
necessary and sufficient condition for an Itô process to coincide in law with
a given diffusion: (We use the symbol ≃ for “coincides in law with”).
Theorem 8.4.3. Let Xt be an Itô diffusion given by

       dXt = b(Xt )dt + σ(Xt )dBt ,              b ∈ Rn ,     σ ∈ Rn×m ,       X0 = x ,

and let Yt be an Itô process given by

       dYt = u(t, ω)dt + v(t, ω)dBt ,            u ∈ Rn ,      v ∈ Rn×m ,       Y0 = x .

Then Xt ≃ Yt if and only if

         E x [u(t, ·)|Nt ] = b(Ytx )          and vv T (t, ω) = σσ T (Ytx )              (8.4.3)

for a.a. (t, ω) w.r.t. dt×dP , where Nt is the σ-algebra generated by Ys ; s ≤ t.
Proof. Assume that (8.4.3) holds. Let
                              X         ∂       X               ∂2
                        A=        bi       + 12     (σσ T )ij
                                       ∂xi      i,j
                                                              ∂xi ∂xj

be the generator of Xt and define, for f ∈ C02 (Rn ),
                      X                ∂f             X                     ∂2f
       Hf (t, ω) =         ui (t, ω)       (Yt ) + 12     (vv T )ij (t, ω)         (Yt ) .
                       i
                                       ∂xi            i,j
                                                                           ∂xi ∂xj
144            8. Other Topics in Diffusion Theory


Then by Itô’s formula (see (7.3.1)) we have, for s > t,
                                                     · Zs                 ¸      · Zs               ¸
    E x [f (Ys )|Nt ] = f (Yt ) + E x                       Hf (r, ω)dr|Nt + E x      ∇f T vdBr |Nt
                                                        t                                   t
                                                     · Zs                                ¸
                               = f (Yt ) + E x              E x [Hf (r, ω)|Nr ]dr|Nt
                                                        t
                                                     · Zs                   ¸
                                                 x
                               = f (Yt ) + E                Af (Yr )dr|Nt          by (8.4.3) ,          (8.4.4)
                                                        t

where E denotes expectation w.r.t. the law Rx of Yt (see Lemma 7.3.2).
                x

Therefore, if we define
                                                                 Zt
                                             Mt = f (Yt ) −           Af (Yr )dr                         (8.4.5)
                                                                 0

then, for s > t,
                                                     · Zs                  ¸           · Zs                   ¸
           x                                     x                                 x
          E [Ms |Nt ] = f (Yt ) + E                         Af (Yr )dr|Nt − E                 Af (Yr )dr|Nt
                                                        t                               0
                                                     · Zt                  ¸
                               = f (Yt ) − E x              Af (Yr )dr|Nt = Mt .
                                                        0

Hence Mt is a martingale w.r.t. the σ-algebras Nt and the law Rx . By unique-
ness of the solution of the martingale problem (see (8.3.6)) we conclude that
Xt ≃ Yt .
   Conversely, assume that Xt ≃ Yt . Choose f ∈ C02 . By Itô’s formula (7.3.1)
we have, for a.a. (t, ω) w.r.t. dt × dP ,
    1
lim (E x [f (Yt+h )|Nt ] − f (Yt ))
h↓0 h
         µZ
          t+h
                 hX
       1                          ∂f
= lim         Ex        ui (s, ω)     (Ys )
   h↓0 h                          ∂xi
                    i
                    t
                               X                         ∂2f            i ¶
                        + 12         (vv T )ij (s, ω)           (Ys )|Nt ds                              (8.4.6)
                               i,j
                                                        ∂xi ∂xj
    X                                  ∂f             X                               ∂2f
=          E x [ui (t, ω)|Nt ]             (Yt ) + 12     E x [(vv T )ij (t, ω)|Nt ]         (Yt ) . (8.4.7)
      i
                                       ∂xi            i,j
                                                                                     ∂xi ∂xj

On the other hand, since Xt ≃ Yt we know that Yt is a Markov process.
Therefore (8.4.6) coincides with
                                           8.4 When is an Itô Process a Diffusion?                   145

     1
 lim (E Yt [f (Yh )] − E Yt [f (Y0 )])
 h↓0 h
    X      h          ∂f        i      X       h                  ∂2f         i
 =     E Yt ui (0, ω)     (Y0 ) + 12       E Yt (vv T )ij (0, ω)         (Y0 )
     i
                      ∂xi              i,j
                                                                 ∂xi ∂xj
     X                       ∂f             X                            ∂2f
 =        E Yt [ui (0, ω)]       (Yt ) + 12     E Yt [(vv T )ij (0, ω)]         (Yt ) .          (8.4.8)
      i
                             ∂xi            i,j
                                                                        ∂xi ∂xj

Comparing (8.4.7) and (8.4.8) we conclude that

  E x [u(t, ω)|Nt ] = E Yt [u(0, ω)]          and      E x [vv T (t, ω)|Nt ] = E Yt [vv T (0, ω)]
                                                                                            (8.4.9)
for a.a. (t, ω).
    On the other hand, since the generator of Yt coincides with the generator
A of Xt we get from (8.4.8) that

   E Yt [u(0, ω)] = b(Yt )
                        and E Yt [vv T (0, ω)] = σσ T (Yt ) for a.a. (t, ω) .
                                                                       (8.4.10)
Combining (8.4.9) and (8.4.10) we conclude that

  E x [u|Nt ] = b(Yt ) and E x [vv T |Nt ] = σσ T (Yt )                 for a.a. (t, ω) . (8.4.11)

From this we obtain (8.4.3) by using that in fact vv T (t, ·) is always Nt -
measurable, in the following sense:
Lemma 8.4.4. Let dYt = u(t, ω)dt + v(t, ω)dBt , Y0 = x be as in Theo-
rem 8.4.3. Then there exists an Nt -adapted process W (t, ω) such that

                        vv T (t, ω) = W (t, ω)              for a.a. (t, ω) .

Proof. By Itô’s formula we have (if Yi (t, ω) denotes component number i of
Y (t, ω))
                                  Zt                  Zt                  Zt
      Yi Yj (t, ω) = xi xj +           Yi dYj (s) +        Yj dYi (s) +        (vv T )ij (s, ω)ds .
                                  0                   0                   0

Therefore, if we put
                                               Zt              Zt
     Hij (t, ω) = Yi Yj (t, ω) − xi xj −            Yi dYj −        Yj dYi ,         1 ≤ i, j ≤ n
                                               0                0

then Hij is Nt -adapted and
                                               Zt
                                Hij (t, ω) =        (vv T )ij (s, ω)ds .
                                               0
146     8. Other Topics in Diffusion Theory


Therefore
                                             H(t, ω) − H(t − r, ω)
                   (vv T )ij (t, ω) = lim
                                     r↓0               r
for a.a. t. This shows Lemma 8.4.4 and the proof of Theorem 8.4.3 is complete.
                                                                            t
                                                                            u
Remarks. 1) One may ask if also u(t, ·) must be Nt -measurable. However,
the following example shows that this fails even in the case when v = n = 1:
    Let B1 , B2 be two independent 1-dimensional Brownian motions and de-
fine
                          dYt = B1 (t)dt + dB2 (t) .
Then we may regard Yt as noisy observations of the process B1 (t). So by
Example 6.2.10 we have that
                                    b1 (t, ω))2 ] = tanh(t) ,
                     E[(B1 (t, ω) − B

where B  b1 (t, ω) = E[B1 (t)|Nt ] is the Kalman-Bucy filter. In particular,
B1 (t, ω) cannot be Nt -measurable.
    2) The process v(t, ω) need not be Nt -adapted either: Let Bt be 1-
dimensional Brownian motion and define

                                dYt = sign(Bt )dBt                    (8.4.12)

where                                   ½
                                             1  if z > 0
                           sign(z) =
                                             −1 if z ≤ 0 .
Tanaka’s formula says that

                                        Zt
                      |Bt | = |B0 | +        sign(Bs )dBs + Lt        (8.4.13)
                                        0

where Lt = Lt (ω) is local time of Bt at 0, a non-decreasing process which
only increases when Bt = 0 (see Exercise 4.10). Therefore the σ-algebra
Nt generated by {Ys ; s ≤ t} is contained in the σ-algebra Ht generated by
{|Bs |; s ≤ t}. It follows that v(t, ω) = sign(Bt ) cannot be Nt -adapted.
Corollary 8.4.5 (How to recognize a Brownian motion).
Let
                    dYt = u(t, ω)dt + v(t, ω)dBt
be an Itô process in Rn . Then Yt is a Brownian motion if and only if

                   E x [u(t, ·)|Nt ] = 0     and   vv T (t, ω) = In   (8.4.14)

for a.a. (t, ω).
                                                   8.5 Random Time Change        147


Remark. Using Theorem 8.4.3 one may now proceed to investigate when
the image Yt = φ(Xt ) of an Itô diffusion Xt by a C 2 -function φ coincides in
law with an Itô diffusion Zt . Applying the criterion (8.4.3) one obtains the
following result:

                            φ(Xt ) ∼ Zt if and only if
                                      b ]oφ
                            A[f oφ] = A[f                                   (8.4.15)
                                                           P       P
for all second order polynomials f (x1 , . . . , xn ) = ai xi + cij xi xj (and
hence for all f ∈ C02 ) where A and A b are the generators of Xt and Zt re-
spectively. (Here o denotes function composition: (f ◦ φ)(x) = f (φ(x)).) For
generalizations of this result, see Csink and Øksendal (1983), and Csink,
Fitzsimmons and Øksendal (1990).


8.5 Random Time Change
Let c(t, ω) ≥ 0 be an Ft -adapted process. Define
                                            Zt
                           βt = β(t, ω) =        c(s, ω)ds .                 (8.5.1)
                                            0

We will say that βt is a (random) time change with time change rate c(t, ω).
   Note that β(t, ω) is also Ft -adapted and for each ω the map t → βt (ω) is
non-decreasing. Define αt = α(t, ω) by

                               αt = inf{s; βs > t} .                         (8.5.2)

Then αt is a right-inverse of βt , for each ω :

                       β(α(t, ω), ω) = t         for all t ≥ 0 .             (8.5.3)

Moreover, t → αt (ω) is right-continuous.
    If c(s, ω) > 0 for a.a. (s, ω) then t → βt (ω) is strictly increasing, t → αt (ω)
is continuous and αt is also a left-inverse of βt :

                       α(β(t, ω), ω) = t         for all t ≥ 0 .             (8.5.4)

In general ω → α(t, ω) is an {Fs }-stopping time for each t, since

                   {ω; α(t, ω) < s} = {ω; t < β(s, ω)} ∈ Fs .                (8.5.5)

We now ask the question: Suppose Xt is an Itô diffusion and Yt an Itô process
as in Theorem 8.4.3. When does there exist a time change βt such that
Yαt ≃ Xt ? (Note that αt is only defined up to time β∞ . If β∞ < ∞ we
interpret Yαt ≃ Xt to mean that Yαt has the same law as Xt up to time β∞ ).
    Here is a partial answer (see Øksendal (1990)):
148      8. Other Topics in Diffusion Theory


Theorem 8.5.1. Let Xt , Yt be as in Theorem 8.4.3 and let βt be a time
change with right inverse αt as in (8.5.1), (8.5.2) above. Assume that

        u(t, ω) = c(t, ω)b(Yt )    and        vv T (t, ω) = c(t, ω) · σσ T (Yt )    (8.5.6)

for a.a. t, ω. Then
                                        Yαt ≃ Xt .

      This result allows us to recognize time changes of Brownian motion:
Theorem 8.5.2. Let dYt = v(t, ω)dBt , v ∈ Rn×m , Bt ∈ Rm be an Itô
integral in Rn , Y0 = 0 and assume that

                                  vv T (t, ω) = c(t, ω)In                           (8.5.7)

for some process c(t, ω) ≥ 0. Let αt , βt be as in (8.5.1), (8.5.2). Then

                  Yαt   is an n-dimensional Brownian motion .
                                        P
                                        n
Corollary 8.5.3. Let dYt =                    vi (t, ω)dBi (t, ω), Y0 = 0, where B =
                                        i=1
(B1 , . . . , Bn ) is a Brownian motion in Rn . Then

               bt : = Yα
               B               is a 1-dimensional Brownian motion ,
                        t


where αt is defined by (8.5.2) and
                                    Zs ½ X
                                         n                    ¾
                            βs =                    vi2 (r, ω) dr .                 (8.5.8)
                                    0         i=1


Corollary 8.5.4. Let Yt , βs be as in Corollary 8.5.3. Assume that
                         n
                         X
                               vi2 (r, ω) > 0        for a.a. (r, ω) .              (8.5.9)
                         i=1

                                    bt such that
Then there exists a Brownian motion B
                                              bβ .
                                         Yt = B                                    (8.5.10)
                                                t


Proof. Let
                                         bt = Yα
                                         B                                         (8.5.11)
                                                 t


be the Brownian motion from Corollary 8.5.3. By (8.5.9) βt is strictly increas-
ing and hence (8.5.4) holds, So choosing t = βs in (8.5.11) we get (8.5.10).
                                                                             t
                                                                             u
                                                                    8.5 Random Time Change   149


Corollary 8.5.5. Let c(t, ω) ≥ 0 be given and define
                                                Zt p
                                          dYt =     c(s, ω) dBs ,
                                                 0

where Bs is an n-dimensional Brownian motion. Then

                Yαt          is also an n-dimensional Brownian motion .

     We now use this to prove that a time change of an Itô integral is again an
                                                         et . First we construct
Itô integral, but driven by a different Brownian motion B
 e
Bt :
Lemma 8.5.6. Suppose s → α(s, ω) is continuous, α(0, ω) = 0 for a.a. ω.
Fix t > 0 such that βt < ∞ a.s. and assume that E[αt ] < ∞. For k = 1, 2, . . .
put                         ½
                              j · 2−k if j · 2−k ≤ αt
                       tj =
                              t       if j · 2−k > αt
and choose rj such that αrj = tj . Suppose f (s, ω) ≥ 0 is Fs -adapted, bounded
and s-continuous for a.a. ω. Then

                     X                                  Zαt
               lim               f (αj , ω)∆Bαj =             f (s, ω)dBs   a.s. ,       (8.5.12)
               k→∞
                         j                              0

where αj = αrj , ∆Bαj = Bαj+1 − Bαj and the limit is in L2 (Ω, P ).
Proof. For all k we have
           ·³ X                                 Zαt                  ´2 ¸
       E             f (αj , ω)∆Bαj −                 f (s, ω)dBs
                j                               0
              ·³ X αZj+1                         ´2 ¸
           =E          (f (αj , ω) − f (s, ω)dBs
                         j       αj
                  αj+1
             X hµ Z                             ¶2 i
           =  E      (f (αj , ω) − f (s, ω))dBs
               j                 αj

               X         · αZj+1                                     ¸
                                                                     · Zαt             ¸
                                                                2
           =         E                (f (αj , ω) − f (s, ω)) ds = E      (f − fk )2 ds ,
               j             αj                                             0
                          P
where fk (s, ω) =                f (tj , ω)X[tj ,tj+1 ) (s) is the elementary approximation to
                             j
f . (See Corollary 3.1.8). This implies (8.5.12).                                              t
                                                                                               u
150    8. Other Topics in Diffusion Theory


   We now use this to establish a general time change formula for Itô inte-
grals. An alternative proof in the case n = m = 1 can be found in McKean
(1969, §2.8).
Theorem 8.5.7 (Time change formula for Itô integrals).
Suppose c(s, ω) and α(s, ω) are s-continuous, α(0, ω) = 0 for a.a. ω and that
E[αt ] < ∞. Let Bs be an m-dimensional Brownian motion and let v(s, ω) ∈
 n×m
VH     be bounded and s-continuous. Define

                         Xq                                 Zαt p
            et = lim
            B                     c(αj , ω) ∆Bαj =                  c(s, ω) dBs .             (8.5.13)
                  k→∞
                          j                                 0

     et is an (m-dimensional) Fα(m)
Then B                                                     e
                                  t -Brownian motion (i.e. Bt is a Brown-
                                          (m)
               et is a martingale w.r.t. Fαt ) and
ian motion and B
         Zαt                      Zt            p
               v(s, ω)dBs =                               er
                                       v(αr , ω) αr0 (ω) dB                 a.s. P ,          (8.5.14)
         0                        0

where αr0 (ω) is the derivative of α(r, ω) w.r.t. r, so that
                            1
             αr0 (ω) =                         for a.a. r ≥ 0, a.a. ω ∈ Ω .                   (8.5.15)
                         c(αr , ω)
Proof. The existence of the limit in (8.5.13) and the second identity in (8.5.13)
follow by applying Lemma 8.5.6 to the function
                                         p
                              f (s, ω) = c(s, ω) .

                                     et is an Fα(m)
Then by Corollary 8.5.5 we have that B           t -Brownian motion. It
remains to prove (8.5.14):
        Zαt                              X
              v(s, ω)dBs = lim                  v(αj , ω)∆Bαj
                                  k→∞
        0                                  j
                                                            s
                                         X                                  q
                                                                   1
                              = lim             v(αj , ω)                    c(αj , ω) ∆Bαj
                                  k→∞
                                           j
                                                                c(αj , ω)
                                                            s
                                         X                         1
                              = lim             v(αj , ω)                  ej
                                                                          ∆B
                                  k→∞
                                           j
                                                                c(αj , ω)
                                  Zt              s
                                                         1       er
                              =        v(αr , ω)                dB
                                                      c(αr , ω)
                                  0

and the proof is complete.                                                                          t
                                                                                                    u
                                                   8.5 Random Time Change              151


Example 8.5.8 (Brownian motion on the unit sphere in Rn ; n > 2).

In Examples 5.1.4 and 7.5.5 we constructed Brownian motion on the unit
circle. It is not obvious how to extend the method used there to obtain Brow-
nian motion on the unit sphere S of Rn ; n ≥ 3. However, we may proceed as
follows: Apply the function φ: Rn \ {0} → S defined by

                      φ(x) = x · |x|−1 ;        x ∈ Rn \ {0}

to n-dimensional Brownian motion B = (B1 , . . . , Bn ). The result is a stochas-
tic integral Y = (Y1 , . . . , Yn ) = φ(B) which by Itô’s formula is given by

         |B|2 − Bi2       X Bj Bi       n − 1 Bi
 dYi =          3
                    dBi −       3
                                  dBj −      ·      dt ;            i = 1, 2, . . . , n .
            |B|             |B|           2    |B|3
                          j6=i
                                                                                (8.5.16)
Hence
                                1               1
                     dY =          · σ(Y )dB +      b(Y )dt ,
                               |B|             |B|2
where

         σ = [σij ] ∈ Rn×n ,     with σij (Y ) = δij − Yi Yj ; 1 ≤ i, j ≤ n

and
                  
               y1
         n−1  . 
b(y) = −    ·  ..  ∈ Rn ,          (y1 , . . . , yn are the coordinates of y ∈ Rn ) .
          2
               yn

Now perform the following time change: Define

                                 Zt (ω) = Yα(t,ω) (ω)

where
                                                   Zt
                                                         1
                      αt = βt−1 ,      β(t, ω) =             ds .
                                                        |B|2
                                                   0

Then Z is again an Itô process and by Theorem 8.5.7
                                     e + b(Z)dt .
                           dZ = σ(Z)dB

Hence Z is a diffusion with characteristic operator
             µ           X                 ¶
                                    ∂2f        n − 1 X ∂f
  Af (y) = 12 ∆f (y) −       yi yj           −      ·   yi     ;           |y| = 1 .
                         i,j
                                   ∂yi ∂yj       2    i
                                                           ∂yi
                                                                                (8.5.17)
152     8. Other Topics in Diffusion Theory

                  B
Thus, φ(B) = |B|     is – after a suitable change of time scale – equal to a
diffusion Z living on the unit sphere S of Rn . Note that Z is invariant under
orthogonal transformations in Rn (since B is). It is reasonable to call Z
Brownian motion on the unit sphere S. For other constructions see Itô and
McKean (1965, p. 269 (§7.15)) and Stroock (1971).
     More generally, given a Riemannian manifold M with metric tensor g =
[gij ] one may define a Brownian motion on M as a diffusion on M whose
characteristic operator A in local coordinates xi is given by 12 times the
Laplace-Beltrami operator (here [g ij ] = [gij ]−1 )
                      1      X ∂ µp              X           ¶
                                                       ij ∂
           ∆M = p          ·            det(g)       g         .       (8.5.18)
                    det(g) i ∂xi                   j
                                                         ∂xj

See for example Meyer (1966, p. 256–270), McKean (1969, §4.3). The subject
of stochastic differential equations on manifolds is also treated in Ikeda and
Watanabe (1989), Emery (1989) and Elworthy (1982).
Example 8.5.9 (Harmonic and analytic functions).
Let B = (B1 , B2 ) be 2-dimensional Brownian motion. Let us investigate what
happens if we apply a C 2 function
                            φ(x1 , x2 ) = (u(x1 , x2 ), v(x1 , x2 ))
to B:
   Put Y = (Y1 , Y2 ) = φ(B1 , B2 ) and apply Itô’s formula:
  dY1 = u01 (B1 , B2 )dB1 + u02 (B1 , B2 )dB2 + 21 [u0011 (B1 , B2 ) + u0022 (B1 , B2 )]dt
and
 dY2 = v10 (B1 , B2 )dB1 + v20 (B1 , B2 )dB2 + 12 [v11
                                                    00               00
                                                       (B1 , B2 ) + v22 (B1 , B2 )]dt ,
            ∂u
where u01 = ∂x 1
                 etc. So
                       dY = b(B1 , B2 )dt + σ(B1 , B2 )dB ,
             µ    ¶         µ 0      ¶
              ∆u             u1 u02
with b = 12         , σ=               = Dφ (the derivative of φ).
              ∆v             v10 v20
     So Y = φ(B1 , B2 ) is a martingale if (and, in fact, only if) φ is harmonic,
i.e. ∆φ = 0. If φ is harmonic, we get by Corollary 8.5.3 that
                                                 e (1) , B
                                  φ(B1 , B2 ) = (B       e (2) )
                                                   β1     β2

where Be (1) and B
                 e (2) are two (not necessarily independent) versions of 1-
dimensional Brownian motion, and
                     Zt                                         Zt
                              2
       β1 (t, ω) =        |∇u| (B1 , B2 )ds ,     β2 (t, ω) =          |∇v|2 (B1 , B2 )ds .
                     0                                             0
                                                     8.6 The Girsanov Theorem     153


Since                               Ã                         !
                                         |∇u|2      ∇u · ∇v
                         σσ T =
                                        ∇u · ∇v      |∇v|2

we see that if (in addition to ∆u = ∆v = 0)

                       |∇u|2 = |∇v|2        and     ∇u · ∇v = 0               (8.5.19)

then
                                              Zt
                                Yt = Y0 +           σdB
                                              0

with
              σσ T = |∇u|2 (B1 , B2 )I2 ,         Y0 = φ(B1 (0), B2 (0)) .
Therefore, if we let
                               Zt
              βt = β(t, ω) =        |∇u|2 (B1 , B2 )ds ,          αt = βt−1
                               0

we obtain by Theorem 8.5.2 that Yαt is a 2-dimensional Brownian motion.
Conditions (8.5.19) – in addition to ∆u = ∆v = 0 – are easily seen to be
equivalent to requiring that the function φ(x + iy) = φ(x, y) regarded as a
complex function is either analytic or conjugate analytic.
    Thus we have proved a theorem of P. Lévy that φ(B1 , B2 ) is – after a
change of time scale – again Brownian motion in the plane if and only if
φ is either analytic or conjugate analytic. For extensions of this result see
Bernard, Campbell and Davie (1979), Csink and Øksendal (1983) and Csink,
Fitzsimmons and Øksendal (1990).


8.6 The Girsanov Theorem

We end this chapter by discussing a result, the Girsanov theorem, which
is fundamental in the general theory of stochastic analysis. It is also very
important in many applications, for example in economics (see Chapter 12).
    Basically the Girsanov theorem says that if we change the drift coefficient
of a given Itô process (with a nondegenerate diffusion coefficient), then the
law of the process will not change dramatically. In fact, the law of the new
process will be absolutely continuous w.r.t. the law of the original process
and we can compute explicitly the Radon-Nikodym derivative.
    We now make this precise. First we state (without proof) the useful Lévy
characterization of Brownian motion. A proof can be found in e.g. Ikeda &
Watanabe (1989), Theorem II.6.1, or in Karatzas & Shreve (1991), Theo-
rem 3.3.16.
154      8. Other Topics in Diffusion Theory


Theorem 8.6.1 (The Lévy characterization of Brownian motion).
Let X(t) = (X1 (t), . . . , Xn (t)) be a continuous stochastic process on a proba-
bility space (Ω, H, Q) with values in Rn . Then the following, a) and b), are
equivalent
a) X(t) is a Brownian motion w.r.t. Q, i.e. the law of X(t) w.r.t. Q is the
   same as the law of an n-dimensional Brownian motion.
b) (i) X(t) = (X1 (t), . . . , Xn (t)) is a martingale w.r.t. Q (and w.r.t. its
        own filtration) and
   (ii) Xi (t)Xj (t)−δij t is a martingale w.r.t. Q (and w.r.t. its own filtration)
        for all i, j ∈ {1, 2, . . . , n}.
Remark. In this Theorem one may replace condition (ii) by the condition
(ii)’ The cross-variation processes hXi , Xj it satisfy the identity

                        hXi , Xj it (ω) = δij t    a.s., 1 ≤ i, j ≤ n           (8.6.1)

       where

          hXi , Xj it = 14 [hXi + Xj , Xi + Xj it − hXi − Xj , Xi − Xj it ] ,   (8.6.2)

       hY, Y it being the quadratic variation process. (See Exercise 4.7.)

      Next we need an auxiliary result about conditional expectation:
Lemma 8.6.2. Let µ and ν be two probability measures on a measurable
space (Ω, G) such that dν(ω) = f (ω)dµ(ω) for some f ∈ L1 (µ). Let X be a
random variable on (Ω, G) such that
                             Z
                   Eν [|X|] = |X(ω)|f (ω)dµ(ω) < ∞ .
                                   Ω

Let H be a σ-algebra, H ⊂ G. Then

                       Eν [X|H] · Eµ [f |H] = Eµ [f X|H] a.s.                   (8.6.3)

Proof. By the definition of conditional expectation (Appendix B) we have
that if H ∈ H then
              Z                  Z                Z
                 Eν [X|H]f dµ =     Eν [X|H]dν = Xdν
                  H                      H                   H
                                         Z             Z
                                     =       Xf dµ =       Eµ [f X|H]dµ         (8.6.4)
                                         H             H

On the other hand, by Theorem B.3 (Appendix B) we have
                                                           8.6 The Girsanov Theorem      155

   Z
       Eν [X|H]f dµ = Eµ [Eν [X|H]f · XH ] = Eµ [Eµ [Eν [X|H]f · XH |H]]
   H
                                                      Z
         = Eµ [XH Eν [X|H] · Eµ [f |H]] =                  Eν [X|H] · Eµ [f |H]dµ .   (8.6.5)
                                                      H

Combining (8.6.4) and (8.6.5) we get
               Z                          Z
                  Eν [X|H] · Eµ [f |H]dµ = Eµ [f X|H]dµ .
                  N                                        H

Since this holds for all H ∈ H, (8.6.3) follows.                                           t
                                                                                           u
   We can now prove the first version of the Girsanov formula:
Theorem 8.6.3 (The Girsanov theorem I).
Let Y (t) ∈ Rn be an Itô process of the form

               dY (t) = a(t, ω)dt + dB(t) ;                    t ≤ T, Y0 = 0 .

where T ≤ ∞ is a given constant and B(t) is n-dimensional Brownian mo-
tion. Put
                  µ       Zt                     Zt             ¶
                                                       2
       Mt = exp       −        a(s, ω)dBs − 12        a (s, ω)ds ;         t≤T .      (8.6.6)
                          0                      0

Assume that a(s, ω) satisfies Novikov’s condition

                                 h     µ ZT               ¶i
                                        1        2
                               E exp    2       a (s, ω)ds < ∞                        (8.6.7)
                                            0

                                                                                         (n)
where E = EP is the expectation w.r.t. P . Define the measure Q on (Ω, FT )
by
                         dQ(ω) = MT (ω)dP (ω) .                      (8.6.8)
Then Y (t) is an n-dimensional Brownian motion w.r.t. the probability law
Q, for t ≤ T .
Remarks.
(1) The transformation P → Q given by (8.6.9) is called the Girsanov trans-
    formation of measures.
(2) As pointed out in Exercise 4.4 the Novikov condition (8.6.7) is sufficient to
                                                        (n)
    guarantee that {Mt }t≤T is a martingale (w.r.t. Ft and P ). Actually,
    the result holds if we only assume that {Mt }t≤T is a martingale. See
    Karatzas and Shreve (1991).
156       8. Other Topics in Diffusion Theory


(3) Note that since Mt is a martingale we actually have that
                                                           (n)
                            MT dP = Mt dP              on Ft ; t ≤ T .                (8.6.9)
                                                 (n)
       To see this, let f be a bounded Ft -measurable function. Then by The-
       orem B.3 we have
               Z
                  f (ω)MT (ω)dP (ω) = E[f MT ] = E[E[f MT |Ft ]]
               Ω
                                                           Z
                    = E[f E[MT |Ft ]] = E[f Mt ] =             f (ω)Mt (ω)dP (ω) .
                                                           Ω

Proof of Theorem 8.6.3. For simplicity we assume that a(s, ω) is bounded.
In view of Theorem 8.6.1 we have to verify that

(i)           Y (t) = (Y1 (t), . . . , Yn (t)) is a martingale w.r.t. Q              (8.6.10)
and
(ii)          Yi (t)Yj (t) − δij t is a martingale w.r.t. Q,
               for all i, j ∈ {1, 2, . . . , n} .                                    (8.6.11)

   To verify (i) we put K(t) = Mt Y (t) and use Itô’s formula to get (see
Exercises 4.3, 4.4)
      dKi (t) = Mt dYi (t) + Yi (t)dMt + dYi (t)dMt
                                                   ³X
                                                    n                ´
              = Mt (ai (t)dt + dBi (t)) + Yi (t)Mt    −ak (t)dBk (t)
                                                           k=1
                               ³          n
                                          X                  ´
                    +(dBi (t)) − Mt             ak (t)dBk (t)
                                          k=1
                                         n
                                         X
             = Mt (dBi (t) − Yi (t)            ak (t)dBk (t)) = Mt γ (i) (t)dB(t) (8.6.12)
                                         k=1

                      (i)          (i)
where γ (i) (t) = (γ1 (t), . . . , γn (t)), with
                                    ½
                       (i)            −Yi (t)aj (t)    for j 6= i
                      γj (t) =
                                      1 − Yi (t)ai (t) for j = i .
Hence Ki (t) is a martingale w.r.t. P , so by Lemma 8.6.2 we get, for t > s,
                                     E[Mt Yi (t)|Fs ]   E[Ki (t)|Fs ]
                   EQ [Yi (t)|Fs ] =                  =
                                       E[Mt |Fs ]          Ms
                                     Ki (s)
                                   =        = Yi (s) ,
                                      Ms
which shows that Yi (t) is a martingale w.r.t. Q. This proves (i). The proof of
(ii) is similar and is left to the reader.                                   t
                                                                             u
                                                            8.6 The Girsanov Theorem             157


Remark. Theorem 8.6.3 states that for all Borel sets F1 , . . . , Fk ⊂ Rn and
all t1 , t2 , . . . , tk ≤ T , k = 1, 2, . . . we have
  Q[Y (t1 ) ∈ F1 , . . . , Y (tk ) ∈ Fk ] = P [B(t1 ) ∈ F1 , . . . , B(tk ) ∈ Fk ]           (8.6.13)
An equivalent way of expressing (8.6.8) is to say that Q ¿ P (Q is absolutely
continuous w.r.t. P ) with Radon-Nikodym derivative
                                     dQ                        (n)
                                        = MT             on FT       .                       (8.6.14)
                                     dP
Note that MT (ω) > 0 a.s., so we also have that P ¿ Q. Hence the two
measures Q and P are equivalent. Therefore we get from (8.6.13)
      P [Y (t1 ) ∈ F1 , . . . , Y (tk ) ∈ Fk ] > 0
         ⇐⇒ Q[Y (t1 ) ∈ F1 , . . . , Y (tk ) ∈ Fk ] > 0
         ⇐⇒ P [B(t1 ) ∈ F1 , . . . , B(tk ) ∈ Fk ] > 0 ;         t1 , . . . , tk ∈ [0, T ]   (8.6.15)
Theorem 8.6.4 (The Girsanov theorem II).
Let Y (t) ∈ Rn be an Itô process of the form
                    dY (t) = β(t, ω)dt + θ(t, ω)dB(t) ;                    t≤T               (8.6.16)
where B(t) ∈ Rm , β(t, ω) ∈ Rn and θ(t, ω) ∈ Rn×m . Suppose there exist
                     m                n
processes u(t, ω) ∈ WH and α(t, ω) ∈ WH such that
                                θ(t, ω)u(t, ω) = β(t, ω) − α(t, ω)                           (8.6.17)
and assume that u(t, ω) satisfies Novikov’s condition
                                 ·        µ ZT                ¶¸
                                E exp      1
                                           2       u2 (s, ω)ds   <∞.                         (8.6.18)
                                               0

Put
                   µ       Zt                       Zt              ¶
       Mt = exp        −        u(s, ω)dBs − 12          u2 (s, ω)ds ;             t≤T       (8.6.19)
                           0                         0

and
                                                                         (m)
                           dQ(ω) = MT (ω)dP (ω)                on FT           .             (8.6.20)
Then
                                     Zt
                       b
                       B(t): =            u(s, ω)ds + B(t) ;             t≤T                 (8.6.21)
                                     0
                                              b
is a Brownian motion w.r.t. Q and in terms of B(t) the process Y (t) has the
stochastic integral representation
                                                            b .
                               dY (t) = α(t, ω)dt + θ(t, ω)dB(t)                             (8.6.22)
158      8. Other Topics in Diffusion Theory


                                             b
Proof. It follows from Theorem 8.6.3 that B(t)    is a Brownian motion w.r.t.
Q. So, substituting (8.6.21) in (8.6.16) we get, by (8.6.17),

                                                b − u(t, ω)dt)
                dY (t) = β(t, ω)dt + θ(t, ω)(dB(t)
                                                                b
                       = [β(t, ω) − θ(t, ω)u(t, ω)]dt + θ(t, ω)dB(t)
                                             b .
                       = α(t, ω)dt + θ(t, ω)dB(t)
                                                                               t
                                                                               u
    Note that if n = m and θ ∈ Rn×n is invertible, then the process u(t, ω)
satisfying (8.6.17) is given uniquely by

                      u(t, ω) = θ−1 (t, ω)[β(t, ω) − α(t, ω)] .         (8.6.23)

      Finally we formulate a diffusion version:
Theorem 8.6.5 (The Girsanov theorem III).
Let X(t) = X x (t) ∈ Rn and Y (t) = Y x (t) ∈ Rn be an Itô diffusion and an
Itô process, respectively, of the forms

 dX(t) = b(X(t))dt + σ(X(t))dB(t) ;         t ≤ T, X(0) = x         (8.6.24)
 dY (t) = [γ(t, ω) + b(Y (t))]dt + σ(Y (t))dB(t) ; t ≤ T, Y (0) = x (8.6.25)

where the functions b: Rn → Rn and σ: Rn → Rn×m satisfy the conditions
                                n
of Theorem 5.2.1 and γ(t, ω) ∈ WH , x ∈ Rn . Suppose there exists a process
           m
u(t, ω) ∈ WH  such that

                              σ(Y (t))u(t, ω) = γ(t, ω)                 (8.6.26)

and assume that u(t, ω) satisfies Novikov’s condition

                          h     µ ZT                ¶i
                                  1        2
                        E exp     2       u (s, ω)ds < ∞ .              (8.6.27)
                                      0

                  b
Define Mt , Q and B(t) as in (8.6.19), (8.6.20) and (8.6.21). Then

                                                      b .
                       dY (t) = b(Y (t))dt + σ(Y (t))dB(t)              (8.6.28)

Therefore,

                         the Q-law of Y x (t) is the same as
                         the P -law of X x (t); t ≤ T .                 (8.6.29)

Proof. The representation (8.6.28) follows by applying Theorem 8.6.4 to the
case θ(t, ω) = σ(Y (t)), β(t, ω) = γ(t, ω)+b(Y (t)), α(t, ω) = b(Y (t)). Then the
conclusion (8.6.29) follows from the weak uniqueness of solutions of stochastic
differential equations (Lemma 5.3.1).                                           t
                                                                                u
                                                     8.6 The Girsanov Theorem           159


   The Girsanov theorem III can be used to produce weak solutions of
stochastic differential equations. To illustrate this, suppose Yt is a known
weak or strong solution to the equation

                           dYt = b(Yt )dt + σ(Yt )dB(t)

where b: Rn → Rn , σ: Rn → Rn×m and B(t) ∈ Rm . We wish to find a weak
solution X(t) of a related equation

                          dXt = a(Xt )dt + σ(Xt )dB(t)                              (8.6.30)

where the drift function is changed to a: Rn → Rn . Suppose we can find a
function u0 : Rn → Rm such that

                    σ(y)u0 (y) = b(y) − a(y) ;                    y ∈ Rn .

(If n = m and σ is invertible we choose

                                u0 = σ −1 · (b − a) .)

Then if u(t, ω) = u0 (Yt (ω)) satisfies Novikov’s conditions, we have, with Q
    bt = B(t)
and B     b     as in (8.6.20) and (8.6.21), that

                                                   bt .
                           dYt = a(Yt )dt + σ(Yt )dB                                (8.6.31)

Thus we have found a Brownian motion (B     bt , Q) such that Yt satisfies (8.6.31).
                b
Therefore (Yt , Bt ) is a weak solution of (8.6.30).
Example 8.6.6. Let a: Rn → Rn be a bounded, measurable function. Then
we can construct a weak solution Xt = Xtx of the stochastic differential
equation
               dXt = a(Xt )dt + dBt ;  X0 = x ∈ Rn .            (8.6.32)
We proceed according to the procedure above, with σ = I, b = 0 and

                            dYt = dBt ;            Y0 = x .

Choose
                            u0 = σ −1 · (b − a) = −a
and define
                            ½       Zt                        Zt                ¾
                 Mt = exp −              u0 (Ys )dBs − 12             u20 (Ys )ds
                                    0                         0

i.e.
                            ½ Zt                         Zt            ¾
                                                                  2
                 Mt = exp               a(Bs )dBs − 12        a (Bs )ds .
                                0                        0
160      8. Other Topics in Diffusion Theory


Fix T < ∞ and put
                                                            (m)
                                dQ = MT dP             on FT      .
Then
                                             Zt
                                  bt : = −
                                  B               a(Bs )ds + Bt
                                             0

is a Brownian motion w.r.t. Q for t ≤ T and
                                                       bt .
                               dBt = dYt = a(Yt )dt + dB

                                      bt ) is a weak solution of (8.6.32) for
Hence if we set Y0 = x the pair (Yt , B
t ≤ T . By weak uniqueness the Q-law of Yt = Bt coincides with the P -law of
Xtx , so that

                E[f1 (Xtx1 ) . . . fk (Xtxk )] = EQ [f1 (Yt1 ) . . . fk (Ytk )]
                                               = E[MT f1 (Bt1 ) . . . fk (Btk )]   (8.6.33)

for all f1 , . . . , fk ∈ C0 (Rn ); t1 , . . . , tk ≤ T .


Exercises

8.1.    Let ∆ denote the Laplace operator on Rn .
        a) Write down (in terms of Brownian motion) a bounded solution g
           of the Cauchy problem
                   (
                     ∂g(t, x) 1
                             − 2 ∆x g(t, x) = 0   for t > 0, x ∈ Rn
                        ∂t
                                   g(0, x) = φ(x)

           where φ ∈ C02 is given. (From general theory it is known that the
           solution is unique.)
        b) Let ψ ∈ Cb (Rn ) and α > 0. Find a bounded solution u of the
           equation
                                (α − 12 ∆)u = ψ   in Rn .
            Prove that the solution is unique.

8.2.    Show that the solution u(t, x) of the initial value problem

                          ∂u             ∂2u      ∂u
                              = 21 β 2 x2 2 + α x     ;    t > 0, x ∈ R
                          ∂t             ∂x       ∂x
                          u(0, x) = f (x)    (f ∈ C02 (R) given)

        can be expressed as follows:
                                                                             Exercises      161


         u(t, x) = E[f (x · exp{βBt + (α − 12 β 2 )t}]
                     Z                                 µ     ¶
                 1                          1 2           y2
           =   √       f (x · exp{βy + (α − 2 β )t} exp −     dy ;                    t>0.
                 2πt                                      2t
                      R

8.3.   (Kolmogorov’s forward equation)
       Let Xt be an Itô diffusion in Rn with generator
                             X                ∂2f      X        ∂f
                Af (y) =           aij (y)           +   bi (y)     ;         f ∈ C02
                             i,j
                                             ∂yi ∂yj   i
                                                                ∂yi

       and assume that the transition measure of Xt has a density pt (x, y),
       i.e. that
                                 Z
                 E x [f (Xt )] =   f (y)pt (x, y)dy ; f ∈ C02 .   (8.6.34)
                                   Rn

       Assume that y → pt (x, y) is smooth for each t, x. Prove that pt (x, y)
       satisfies the Kolmogorov forward equation
                    d
                       pt (x, y) = A∗y pt (x, y)           for all x, y ,               (8.6.35)
                    dt
       where A∗y operates on the variable y and is given by

                         X      ∂2              X ∂
            A∗y φ(y) =                (aij φ) −       (bi φ) ;              φ ∈ C2      (8.6.36)
                          i,j
                              ∂yi ∂yj           i
                                                  ∂yi

       (i.e. A∗y is the adjoint of Ay .)
       (Hint: By (8.6.34) and Dynkin’s formula we have

        Z                                     Zt Z
             f (y)pt (x, y)dy = f (x) +               Ay f (y)ps (x, y)dy ds ;       f ∈ C02 .
       Rn                                      0 Rn

       Now differentiate w.r.t. t and use that

                      hAφ, ψi = hφ, A∗ ψi               for φ ∈ C02 , ψ ∈ C 2 ,

       where h·, ·i denotes inner product in L2 (dy).)
8.4.   Let Bt be n-dimensional Brownian motion (n ≥ 1) and let F be a
       Borel set in Rn . Prove that the expected total length of time t that
       Bt stays in F is zero if and only if the Lebesgue measure of F is zero.
       Hint: Consider the resolvent Rα for α > 0 and then let α → 0.
8.5.   Show that the solution u(t, x) of the initial value problem
162    8. Other Topics in Diffusion Theory

                       (
                             ∂u         1
                             ∂t = ρ u + 2 ∆u t > 0 ;          x ∈ Rn
                             u(0, x) = f (x)         (f ∈ C02 (Rn ) given)

       (where ρ ∈ R is a constant) can be expressed by
                                        Z          ³ (x − y)2 ´
             u(t, x) = (2πt)−n/2 exp(ρt) f (y) exp −            dy .
                                                        2t
                                                    Rn

8.6.   In connection with the deduction of the Black & Scholes formula for
       the price of an option (see Chapter 12) the following partial differential
       equation appears:
                 (
                    ∂u              ∂u   1 2 2 ∂2u
                     ∂t = −ρ u + αx ∂x + 2 β x ∂x2 ; t > 0 , x ∈ R
                    u(0, x) = (x − K)+ ;                          x∈R,

       where ρ > 0, α, β and K > 0 are constants and

                                (x − K)+ = max(x − K, 0) .

       Use the Feynman-Kac formula to prove that the solution u of this
       equation is given by
                        Z
                  e−ρt                                         −y
                                                                  2

        u(t, x) = √       (x · exp{(α − 12 β 2 )t + βy} − K)+ e 2t dy ; t > 0 .
                    2πt
                         R

       (This expression can be simplified further. See Exercise 12.13.)
8.7.   Let Xt be a sum of Itô integrals of the form

                                        n Z
                                        X
                                                t

                                 Xt =               vk (s, ω)dBk (s) ,
                                        k=1 0


       where (B1 , . . . , Bn ) is n-dimensional Brownian motion. Assume that

                             Zt X
                                n
                    βt : =           vk2 (s, ω)ds → ∞           as t → ∞, a.s.
                             0 k=1

       Prove that
                                              Xt
                              lim sup √                  =1         a.s.
                                t→∞       2βt log log βt
       (Hint: Use the law of iterated logarithm.)
8.8.   Let Zt be a 1-dimensional Itô process of the form

                                     dZt = u(t, ω)dt + dBt .
                                                                        Exercises   163


       Let Gt be the σ-algebra generated by {Zs (·); s ≤ t} and define

                         dNt = (u(t, ω) − E[u|Gt ])dt + dBt .

       Use Corollary 8.4.5 to prove that Nt is a Brownian motion. (If we inter-
       pret Zt as the observation process, then Nt is the innovation process.
       See Lemma 6.2.6.)
8.9.   Define α(t) = 21 ln(1 + 23 t3 ). If Bt is a Brownian motion, prove that
       there exists another Brownian motion B     er such that

                                Zαt               Zt
                                        s
                                      e dBs =            er .
                                                       rdB
                                0                 0

8.10. Let Bt be a Brownian motion in R. Show that

                                            Xt : = Bt2

       is a weak solution of the stochastic differential equation
                                            p
                               dXt = dt + 2 |Xt |dB  et .                       (8.6.37)

       (Hint: Use Itô’s formula to express Xt as a stochastic integral and
       compare with (8.6.37) by using Corollary 8.4.5.)
8.11. a) Let Y (t) = t + B(t); t ≥ 0 . For each T > 0 find a probability
         measure QT on FT such that QT ∼ P and {Y (t)}t≤T is Brownian
         motion w.r.t. QT . Use (8.6.9) to prove that there exists a probability
         measure Q on F∞ such that

                             Q|FT = QT                for all T > 0 .

       b) Show that                 ³                ´
                                P       lim Y (t) = ∞ = 1
                                        t→∞

          while                     ³                ´
                                Q       lim Y (t) = ∞ = 0 .
                                        t→∞

         Why does not this contradict the Girsanov theorem?
8.12. Let            · ¸       ·         ¸·         ¸
                       0         1     3    dB1 (t)
            dY (t) =      dt +                        ;   t≤T .
                       1         −1 −2      dB2 (t)
                                                 (2)
       Find a probability measure Q on FT such that Q ∼ P and such that
                                   ·       ¸·         ¸
                                     1   3     e1 (t)
                                              dB
                          dY (t) =             e2 (t)
                                     −1 −2    dB
164    8. Other Topics in Diffusion Theory


      where                         ·     ¸ ·        ¸
                            e         −3t     B1 (t)
                            B(t): =        +
                                       t      B2 (t)
      is a Brownian motion w.r.t. Q.
8.13. Let b: R → R be a Lipschitz-continuous function and define
      Xt = Xtx ∈ R by

                        dXt = b(Xt )dt + dBt , X0 = x ∈ R .

      a) Use the Girsanov theorem to prove that for all M < ∞, x ∈ R and
         t > 0 we have
                                P [Xtx ≥ M ] > 0 .
      b) Choose b(x) = −r where r > 0 is constant. Prove that for all x

                            Xtx → −∞                  as t → ∞ a.s.

         Compare this with the result in a).
8.14. (Polar sets for the graph of Brownian motion)
      Let Bt be 1-dimensional Brownian motion starting at x ∈ R.
      a) Prove that for every fixed time t0 > 0 we have

                                     P x [Bt0 = 0] = 0 .

      b) Prove that for every (non-trivial) closed interval J ⊂ R+ we have

                         P x [∃t ∈ J      such that Bt = 0] > 0 .

         (Hint: If J = [t1 , t2 ] consider P x [Bt1 < 0 & Bt2 > 0] and then use
         the intermediate value theorem.)
      c) In view of a) and b) it is natural to ask what closed sets F ⊂ R+
         have the property that

                     P x [∃t ∈ F   such that Bt = 0] = 0 .                    (8.6.38)

         To investigate this question more closely we introduce the graph
         Xt of Brownian motion, given by
                             · ¸       · ¸              · ¸
                              1         0                 t
                      dXt =       dt +     dBt ; X0 = 0
                              0         1                 x0

         i.e.                        ·            ¸
                                         t0 + t
                   Xt = Xtt0 ,x0 =                     where B0x0 = x0 a.s.
                                          Btx0
         Then F satisfies (8.6.38) iff K: = F × {0} polar for Xt , in the sense
         that
                                                                                 Exercises      165


                  P t0 ,x0 [∃t > 0 ; Xt ∈ K] = 0                 for all t0 , x0 .       (8.6.39)
          The key to finding polar sets for a diffusion is to consider its Green
          operator R, which is simply the resolvent Rα with α = 0 :
                                         · Z∞           ¸
                                  t0 ,x0
                Rf (t0 , x0 ) = E             f (Xs )ds   for f ∈ C0 (R2 ) .
                                                 t0

          Show that
                                                 Z
                        Rf (t0 , x0 ) =               G(t0 , x0 ; t, x)f (t, x)dt dx ,
                                                R2

          where
                                                         µ             ¶
                                                    1       |x − x0 |2
         G(t0 , x0 ; t, x) = Xt>t0 · (2π(t − t0 ))− 2 exp −                              (8.6.40)
                                                            2(t − t0 )
          (G is the Green function of Xt .)
       d) The capacity of K, C(K) = CG (K), is defined by
                        C(K) = sup{µ(K); µ ∈ MG (K)} ,
                                                R
          where MG (K) = {µ; µ measure on K s.t. G(t0 , x0 ; t, x)dµ(t, x) ≤ 1
                                                                     K
          for all t0 , x0 }.
          A general result from stochastic potential theory states that
                       P t0 ,x0 [Xt hits K] = 0 ⇔ C(K) = 0 .                             (8.6.41)
          See e.g. Blumenthal and Getoor (1968, Prop. VI.4.3). Use this to
          prove that
                  Λ 21 (F ) = 0 ⇒ P x0 [∃t ∈ F                such that Bt = 0] = 0 ,
          where Λ 12 denotes 1/2-dimensional Hausdorff measure (Folland
          (1984, §10.2)).
8.15. Let f ∈ C02 (Rn ) and α(x) = (α1 (x), . . . , αn (x)) with αi ∈ C02 (Rn ) be
      given functions and consider the partial differential equation
                
                 ∂u = P  n
                                    ∂u
                             αi (x) ∂x   + 12
                                              Pn
                                                  ∂2u
                                                       ; t > 0, x ∈ Rn
                    ∂t                 i          ∂x2i
                         i=1                  i=1
                
                   u(0, x) = f (x) ;                     x ∈ Rn .
       a) Use the Girsanov theorem to show that the unique bounded solution
          u(t, x) of this equation can be expressed by
                                h         µ Zt                       Zt            ¶       i
                            x                                              2
              u(t, x) = E           exp          α(Bs )dBs − 12           α (Bs )ds f (Bt ) ,
                                            0                        0
                   x                                            x
          where E is the expectation w.r.t. P .
166   8. Other Topics in Diffusion Theory


      b) Now assume that α is a gradient, i.e. that there exists γ ∈ C 1 (Rn )
         such that
                                    ∇γ = α .
         Assume for simplicity that γ ∈ C02 (Rn ). Use Itô’s formula to prove
         that (see Exercise 4.8)
                                        ³              h      ½    Zt
                                                   x
                  u(t, x) = exp − γ(x))E                   exp − 2 (∇γ 2 (Bs )
                                                                 1

                                                                   0
                                              ´ ¾                   i
                                      +∆γ(Bs ) ds exp(γ(Bt ))f (Bt ) .

      c) Put v(t, x) = exp(γ(x))u(t, x). Use the Feynman-Kac formula to
         show that v(t, x) satisfies the partial differential equation
                (
                   ∂v      1     2              1                     n
                   ∂t = − 2 (∇γ + ∆γ) · v + 2 ∆v ; t > 0 ; x ∈ R
                   v(0, x) = exp(γ(x))f (x) ;                    x ∈ Rn .
         (See also Exercise 8.16.)
8.16. (A connection between B.m. with drift and killed B.m.)
      Let Bt denote Brownian motion in Rn and consider the diffusion Xt
      in Rn defined by
               dXt = ∇h(Xt )dt + dBt ;                 X0 = x ∈ Rn .             (8.6.42)
      where h ∈ C01 (Rn ).
      a) There is an important connection between this process and the
         process Yt obtained by killing Bt at a certain rate V . More precisely,
         first prove that for f ∈ C0 (Rn ) we have
                               h      µ Zt        ¶                              i
           x               x
         E [f (Xt )] = E           exp − V (Bs )ds · exp(h(Bt ) − h(x)) · f (Bt ) ,
                                            0
                                                                                 (8.6.43)
         where
                                   V (x) = 21 |∇h(x)|2 + 12 ∆h(x) .              (8.6.44)
         (Hint: Use the Girsanov theorem to express the left hand side of
         (8.6.43) in terms of Bt . Then use the Itô formula on Zt = h(Bt ) to
         achieve (8.6.44).)
      b) Then use the Feynman-Kac formula to restate (8.6.43) as follows
         (assuming V ≥ 0):
                      TtX (f, x) = exp(−h(x)) · TtY (f · exp h, x) ,
         where TtX , TtY denote the transition operators of the processes X
         and Y , respectively, i.e.
                    TtX (f, x) = E x [f (Xt )]         and similarly for Y .
9. Applications to Boundary Value Problems




9.1 The Combined Dirichlet-Poisson Problem.
Uniqueness

We now use results from the preceding chapters to solve the following gener-
alization of the Dirichlet problem stated in the introduction:
    Let D be a domain (open connected set) in Rn and let L denote a semi-
elliptic partial differential operator on C 2 (Rn ) of the form
                        n
                        X                    Xn
                                         ∂                  ∂2
                   L=          bi (x)      +      aij (x)                (9.1.1)
                         i=1
                                        ∂xi i,j=1         ∂xi ∂xj

where bi (x) and aij (x) = aji (x) are continuous functions (see below). (By
saying that L is semi-elliptic (resp. elliptic) we mean that all the eigenvalues
of the symmetric matrix a(x) = [aij (x)]ni,j=1 are non-negative (resp. positive)
for all x.)

The Combined Dirichlet-Poisson Problem

Let φ ∈ C(∂D) and g ∈ C(D) be given functions. Find w ∈ C 2 (D) such that
(i)     Lw = −g        in D                                              (9.1.2)
and
(ii)    lim w(x) = φ(y)
        x→y
                                for all y ∈ ∂D .                         (9.1.3)
        x∈D


The idea of the solution is the following: First we find an Itô diffusion {Xt }
whose generator A coincides with L on C02 (Rn ). To achieve this we simply
choose σ(x) ∈ Rn×n such that
                            1      T
                            2 σ(x)σ (x) = [aij (x)] .                    (9.1.4)

We assume that σ(x) and b(x) = [bi (x)] satisfy conditions (5.2.1) and (5.2.2)
of Theorem 5.2.1. (For example, if each aij ∈ C 2 (D) is bounded and has
bounded first and second partial derivatives, then such a square root σ can
be found. See Fleming and Rishel (1975).) Next we let Xt be the solution of
168      9. Applications to Boundary Value Problems


                                     dXt = b(Xt )dt + σ(Xt )dBt                              (9.1.5)

where Bt is n-dimensional Brownian motion. As usual we let E x denote
expectation with respect to the probability law Qx of Xt starting at x ∈ Rn .
Then our candidate for the solution w of (9.1.2), (9.1.3) is

                                                                        · ZτD           ¸
                                 x                                  x
                w(x) = E [φ(XτD ) · X{τD <∞} ] + E                              g(Xt )dt     (9.1.6)
                                                                          0

provided that φ is bounded and

                                 · ZτD             ¸
                             x
                         E               |g(Xt )|dt < ∞         for all x .                  (9.1.7)
                                     0

      The Dirichlet-Poisson problem consists of two parts:
(i) Existence of solution.
(ii) Uniqueness of solution.
    The uniqueness problem turns out to be simpler and therefore we handle
this first. In this section we prove two easy and useful uniqueness results.
Then in the next sections we discuss the existence of solution and other
uniqueness questions.
Theorem 9.1.1 (Uniqueness theorem (1)).
Suppose φ is bounded and g satisfies (9.1.7). Suppose w ∈ C 2 (D) is bounded
and satisfies
(i)        Lw = −g               in D                                                        (9.1.8)
and
(ii)’     limt↑τD w(Xt ) = φ(XτD ) · X{τD <∞}                    a.s. Qx for all x .         (9.1.9)
Then
                                                              · ZτD           ¸
                     x                                    x
           w(x) = E [φ(XτD ) · X{τD <∞} ] + E                         g(Xt )dt .            (9.1.10)
                                                                0

Proof. Let {Dk }∞
                k=1 be an increasing sequence of open sets Dk such that
                   S
                   ∞
Dk ⊂⊂ D and D =       Dk . Define
                      k=1

                             αk = k ∧ τDk ;           k = 1, 2, . . .

Then by the Dynkin formula and (9.1.8)
                                                   9.2 The Dirichlet Problem. Regular Points      169

                                                                        · Zαk            ¸
                               w(x) = E x [w(Xαk )] − E x                       Lw(Xt )dt
                                                                          0
                                                                        · Zαk           ¸
                                       = E x [w(Xαk )] + E x                    g(Xt )dt .    (9.1.11)
                                                                          0

By (9.1.9) w(Xαk ) → φ(XτD ) · X{τD <∞} pointwise boundedly a.s. Qx . Hence

         E x [w(Xαk )] → E x [φ(XτD ) · X{τD <∞} ]                               as k → ∞ .   (9.1.12)
Moreover,
                     · Zαk           ¸      · ZτD          ¸
                 x                        x
             E               g(Xt )dt → E         g(Xt )dt                      as k → ∞ ,    (9.1.13)
                       0                              0

since
                                       Zαk                  ZτD
                                             g(Xt )dt →           g(Xt )dt a.s.
                                       0                    0
and
        ¯ Zαk     ¯ ZτD
        ¯         ¯
        ¯ g(Xt )dt¯ ≤ |g(Xt )|dt ,                         which is Qx -integrable by (9.1.7).
        ¯         ¯
         0                         0

Combining (9.1.12) and (9.1.13) with (9.1.11) we get (9.1.10).                                      t
                                                                                                    u
   An immediate consequence is:
Corollary 9.1.2 (Uniqueness theorem (2)).
Suppose φ is bounded and g satisfies (9.1.7). Suppose
                                       τD < ∞             a.s. Qx for all x .                 (9.1.14)
Then if w ∈ C 2 (D) is a bounded solution of the combined Dirichlet-Poisson
problem (9.1.2), (9.1.3) we have
                                                                        · ZτD           ¸
                                               x                    x
                                w(x) = E [φ(XτD )] + E                          g(Xt )dt .    (9.1.15)
                                                                          0



9.2 The Dirichlet Problem. Regular Points
We now consider the more complicated question of existence of solution. It
is convenient to split the combined Dirichlet-Poisson problem in two parts:
The Dirichlet problem and the Poisson problem:
170    9. Applications to Boundary Value Problems


The Dirichlet Problem

Let φ ∈ C(∂D) be a given function. Find u ∈ C 2 (D) such that
(I)     Lu = 0      in D                                                (9.2.1)
and
(II)     lim u(x) = φ(y)
         x→y
                                for all y ∈ ∂D .                        (9.2.2)
         x∈D



The Poisson Problem

Let g ∈ C(D) be a given function. Find v ∈ C 2 (D) such that
(a)     Lv = −g         in D                                            (9.2.3)
and
(b)      lim v(x) = 0
        x→y
                           for all y ∈ ∂D .                             (9.2.4)
        x∈D


Note that if u and v solve the Dirichlet and the Poisson problem, respectively,
then w: = u + v solves the combined Dirichlet-Poisson problem.
   We first consider the Dirichlet problem and proceed to study the Poisson
problem in the next section.
   For simplicity we assume in this section that (9.1.14) holds.

   In view of Corollary 9.1.2 the question of existence of a solution of the
Dirichlet problem (9.2.1), (9.2.2) can be restated as follows: When is

                               u(x): = E x [φ(XτD )]                    (9.2.5)

a solution?
    Unfortunately, in general this function u need not be in C 2 (U ). In fact,
it need not even be continuous. Moreover, it need not satisfy (9.2.2), either.
Consider the following example:
Example 9.2.1. Let X(t) = (X1 (t), X2 (t)) be the solution of the equations

                                    dX1 (t) = dt
                                    dX2 (t) = 0

so that X(t) = X(0) + t(1, 0) ∈ R2 ; t ≥ 0. Let

                    D = ((0, 1) × (0, 1)) ∪ ((0, 2) × (0, 12 ))

and let φ be a continuous function on ∂D such that

                         φ = 1 on {1} × [ 12 , 1] and
                         φ = 0 on {2} × [0, 12 ]
                         φ = 0    on {0} × [0, 1] .
                                   9.2 The Dirichlet Problem. Regular Points   171




Then                                             
                                                 1   if x ∈ ( 12 , 1)
                             t,x
               u(t, x) = E         [φ(XτD )] =
                                                 0   if x ∈ (0, 21 ) ,

so u is not even continuous. Moreover,
                                                            1
                  lim u(t, x) = 1 6= φ(0, x)           if   2 <x<1
                 t→0+

so (9.2.2) does not hold.
    However, the function u(x) defined by (9.2.5) will solve the Dirichlet prob-
lem in a weaker, stochastic sense: The boundary condition (9.2.2) is replaced
by the stochastic (pathwise) boundary condition (9.1.9) and the condition
(9.2.1) (Lu = 0) is replaced by a condition related to the condition

                                         Au = 0

where A is the characteristic operator of Xt (Section 7.5).
   We now explain this in more detail:

Definition 9.2.2. Let f be a locally bounded, measurable function on D.
Then f is called X-harmonic in D if

                                   f (x) = E x [f (XτU )]

for all x ∈ D and all bounded open sets U with U ⊂ D.
   We make two important observations:
Lemma 9.2.3.
a) Let f be X-harmonic in D. Then Af = 0 in D.
b) Conversely, suppose f ∈ C 2 (D) and Af = 0 in D. Then f is X-harmonic.
Proof.
a) follows directly from the formula for A.
b) follows from the Dynkin formula: Choose U as in Definition 9.2.2. Then
172       9. Applications to Boundary Value Problems


              E x [f (XτU )] = lim E x [f (XτU ∧k )]
                               k→∞
                                           · τZU ∧k            ¸
                                              x
                           = f (x) + lim E         (Lf )(Xs )ds = f (x) ,
                                       k→∞
                                                     0

since Lf = Af = 0 in U .                                                         t
                                                                                 u
   The most important examples of X-harmonic functions are given in the
next result:
Lemma 9.2.4. Let φ be a bounded measurable function on ∂D and put

                            u(x) = E x [φ(XτD )] ;       x∈D.

Then u is X-harmonic. Thus, in particular, Au = 0.
Proof. From the mean value property (7.2.9) we have, if V ⊂ D
                      Z
               u(x) =   u(y)Qx [XτV ∈ dy] = E x [u(XτV )] .
                             ∂V
                                                                                 t
                                                                                 u
      We are now ready to formulate the weak, stochastic version:

The Stochastic Dirichlet Problem

Given a bounded measurable function φ on ∂D, find a function u on D such
that
(i)s u is X-harmonic                                                        (9.2.6)
(ii)s lim u(Xt ) = φ(XτD ) a.s. Qx , x ∈ D .                                (9.2.7)
       t↑τD

    We first solve the stochastic Dirichlet problem (9.2.6), (9.2.7) and then
relate it to the original problem (9.2.1), (9.2.2).
Theorem 9.2.5 (Solution of the stochastic Dirichlet problem).
Let φ be a bounded measurable function on ∂D.
a) (Existence) Define
                                     u(x) = E x [φ(XτD )] .                 (9.2.8)
   Then u solves the stochastic Dirichlet problem (9.2.6), (9.2.7).
b) (Uniqueness) Suppose g is a bounded function on D such that
   (1) g is X-harmonic
   (2) lim g(Xt ) = φ(XτD ) a.s. Qx , x ∈ D.
          t↑τD

      Then g(x) = E x [φ(XτD )], x ∈ D.
                                9.2 The Dirichlet Problem. Regular Points        173


Proof. a) It follows from Lemma 9.2.4 that (i)s holds. Fix x ∈ D. Let S
                                                                      {Dk }
be an increasing sequence of open sets such that Dk ⊂⊂ D and D = Dk .
                                                                             k
Put τk = τDk , τ = τD . Then by the strong Markov property

                 u(Xτk ) = E Xτk [φ(Xτ )] = E x [θτk (φ(Xτ ))|Fτk ]
                         = E x [φ(Xτ )|Fτk ] .                              (9.2.9)

Now Mk = E x [φ(Xτ )|Fτk ] is a bounded (discrete time) martingale so by the
martingale convergence theorem Corollary C.9 (Appendix C) we get that

                  lim u(Xτk ) = lim E x [φ(Xτ )|Fτk ] = φ(Xτ )            (9.2.10)
                  k→∞             k→∞

both pointwise for a.a. ω and in Lp (Qx ), for all p < ∞. Moreover, by (9.2.9)
it follows that for each k the process

                   Nt = u(Xτk ∨(t∧τk+1 ) ) − u(Xτk ) ;     t≥0

is a martingale w.r.t. Gt = Fτk ∨(t∧τk+1 ) .
    So by the martingale inequality
         h                                   i 1
      Qx       sup |u(Xr ) − u(Xτk )| > ² ≤ 2 E x [|u(Xτk+1 ) − u(Xτk )|2 ]
           τk ≤r≤τk+1                          ²
          →0      as k → ∞, for all ² > 0 .                               (9.2.11)

From (9.2.10) and (9.2.11) we conclude that (ii)s holds.

b) Let Dk , τk be as in a). Then since g is X-harmonic we have

                                g(x) = E x [g(Xτk )]

for all k. So by (2) and bounded convergence

           g(x) = lim E x [g(Xτk )] = E x [φ(XτD )] ,     as asserted .
                    k→∞
                                                                                  t
                                                                                  u
    Finally we return to the original Dirichlet problem (9.2.1), (9.2.2). We
have already seen that a solution need not exist. However, it turns out that
for a large class of processes Xt we do get a solution (for all D) if we reduce
the requirement in (9.2.2) to hold only for a subset of the boundary points
y ∈ ∂D called the regular boundary points. Before we define regular points
and state the result precisely, we need the following auxiliary lemmas:
    (As before we let Mt and M∞ denote the σ-algebras generated by Xs ;
s ≤ t and by Xs ; s ≥ 0 respectively).
                                             T
Lemma 9.2.6 (The 0–1 law). Let H ∈               Mt . Then either Qx (H) = 0
                                               t>0
or Qx (H) = 1.
174     9. Applications to Boundary Value Problems


Proof. From the strong Markov property (7.2.5) we have

                                 E x [θt η|Mt ] = E Xt [η]

for all bounded, M∞ -measurable η: Ω → R. This implies that
                 Z            Z
                   θt η · dQ = E Xt [η]dQx ,
                            x
                                                for all t .
                  H                   H

First assume that η = ηk = g1 (Xt1 ) · · · gk (Xtk ), where each gi is bounded
and continuous. Then letting t → 0 we obtain
        Z            Z                  Z
          ηdQ = lim θt ηdQ = lim E Xt [η]dQx = Qx (H)E x [η]
              x                x
                      t→0                  t→0
        H                   H                    H

by Feller continuity (Lemma 8.1.4) and bounded convergence. Approximating
the general η by functions ηk as above we conclude that
                          Z
                             ηdQx = Qx (H)E x [η]
                                H

for all bounded M∞ -measurable η. If we put η = XH we obtain Qx (H) =
(Qx (H))2 , which completes the proof.                              t
                                                                    u
Corollary 9.2.7. Let y ∈ Rn . Then

                eitherQy [τD = 0] = 0            or   Qy [τD = 0] = 1 .
                          T
Proof. H = {ω; τD = 0} ∈     Mt .                                                  t
                                                                                   u
                                t>0

    In other words, either a.a. paths Xt starting from y stay within D for a
positive period of time or a.a. paths Xt starting from y leave D immediately.
In the last case we call the point y regular, i.e.

Definition 9.2.8. A point y ∈ ∂D is called regular for D (w.r.t. Xt ) if

                                      Qy [τD = 0] = 1 .

Otherwise the point y is called irregular.
Example 9.2.9. Corollary 9.2.7 may seem hard to believe at first glance. For
example, if Xt is a 2-dimensional Brownian motion Bt and D is the square
[0, 1] × [0, 1] one might think that, starting from ( 12 , 0), say, half of the paths
will stay in the upper half plane and half in the lower, for a positive period of
time. However, Corollary 9.2.7 says that this is not the case: Either they all
stay in D initially or they all leave D immediately. Symmetry considerations
                              9.2 The Dirichlet Problem. Regular Points      175


imply that the first alternative is impossible. Thus ( 12 , 0), and similarly all
the other points of ∂D, are regular for D w.r.t. Bt .




Example 9.2.10. Let D = [0, 1]×[0, 1] and let L be the parabolic differential
operator
                             ∂f     1 ∂2f
                 Lf (t, x) =      + ·       ;     (t, x) ∈ R2 .
                             ∂t     2 ∂x2
(See Example 7.3.5)
    Here              µ ¶                          µ       ¶
                         1                       1 0 0
                  b=           and a = [aij ] =               .
                         0                       2 0 1
                                   µ      ¶
                                      0 0
So, for example, if we choose σ =          , we have 12 σσ T = a. This gives the
                                      1 0
following stochastic differential equation for the Itô diffusion Xt associated
with L:                     µ ¶        µ      ¶ µ (1) ¶
                             1           0 0      dBt
                     dXt =        dt +                (2)   .
                             0           1 0      dBt
In other words,              µ         ¶          µ ¶
                                t + t0               t0
                        Xt =             , X0 =
                                  Bt                  x
where Bt is 1-dimensional Brownian motion. So we end up with the graph
of Brownian motion, which we started with in Example 7.3.5. In the case it
is not hard to see that the irregular points of ∂D consist of the open line
{0} × (0, 1), the rest of the boundary points being regular.
176    9. Applications to Boundary Value Problems


Example 9.2.11. Let ∆ = {(x, y); x2 + y 2 < 1} ⊂ R2 and let {∆n } be
a sequence of disjoint open discs in ∆ centered at (2−n , 0), respectively,
n = 1, 2, . . . . Put
                                      ³[∞     ´
                            D =∆\          ∆n .
                                        n=1




                                                        S
                                                        ∞
Then it is easy to see that all the points of ∂∆ ∪            ∂∆n are regular for
                                                        n=1
D w.r.t. 2-dimensional Brownian motion Bt , using a similar argument as in
Example 9.2.9. But what about the point 0? The answer depends on the sizes
of the discs ∆n . More precisely, if rn is the radius of ∆n then 0 is a regular
point for D if and only if
                              ∞
                              X     n
                                       1 =∞.                             (9.2.12)
                              n=1
                                  log rn

This is a consequence of the famous Wiener criterion. See Port and Stone
(1979), p. 225.

    Having defined regular points we now formulate the announced general-
ized version of the Dirichlet problem:

The Generalized Dirichlet Problem

Given a domain D ⊂ Rn and L and φ as before, find a function u ∈ C 2 (D)
such that
(i)     Lu = 0      in D                                                 (9.2.13)
and
(ii)    lim u(x) = φ(y)
        x→y
                             for all regular y ∈ ∂D .                    (9.2.14)
        x∈D
                               9.2 The Dirichlet Problem. Regular Points     177


    First we establish that if a solution of this problem exists, it must be the
solution of the stochastic Dirichlet problem found in Theorem 9.2.5, provided
that Xt satisfies Hunt’s condition (H):
            (H): Every semipolar set for Xt is polar for Xt .            (9.2.15)
A semipolar set is a countable union of thin sets and a measurable set G ⊂ Rn
is called thin (for Xt ) if Qx [TG = 0] = 0 for all x, where TG = inf{t > 0; Xt ∈
G} is the first hitting time of G. (Intuitively: For all starting points the
process does not hit G immediately, a.s). A measurable set F ⊂ Rn is called
polar (for Xt ) if Qx [TF < ∞] = 0 for all x. (Intuitively: For all starting
points the process never hits F , a.s.). Clearly every polar set is semipolar,
but the converse need not to be true (consider the process in Example 9.2.1).
However, condition (H) does hold for Brownian motion (See Blumenthal and
Getoor (1968)). It follows from the Girsanov theorem that condition (H) holds
for all Itô diffusions whose diffusion coefficient matrix has a bounded inverse
and whose drift coefficient satisfies the Novikov condition for all T < ∞.
    We also need the following result, the proof of which can be found in
Blumenthal and Getoor (1968, Prop. II.3.3):
Lemma 9.2.12. Let U ⊂ D be open and let I denote the set of irregular
points of U . Then I is a semipolar set.
Theorem 9.2.13. Suppose Xt satisfies Hunt’s condition (H). Let φ be a
bounded continuous function on ∂D. Suppose there exists a bounded u ∈
C 2 (D) such that
(i) Lu = 0 in D
(ii)s x→y
      lim u(x) = φ(y) for all regular y ∈ ∂D
      x∈D


Then u(x) = E x [φ(XτD )].
Proof. Let {Dk } be as in the proof Theorem 9.1.1. By Lemma 9.2.3 b) u is
X-harmonic and therefore
               u(x) = E x [u(Xτk )]     for all x ∈ Dk and all k .
If k → ∞ then Xτk → XτD and so u(Xτk ) → φ(XτD ) if XτD is regular.
From the Lemma 9.2.12 we know that the set I of irregular points of ∂D is
semipolar. So by condition (H) the set I is polar and therefore XτD ∈
                                                                    / I a.s.
Qx . Hence
             u(x) = lim E x [u(Xτk )] = E x [φ(XτD )] ,   as claimed .
                                                                               t
                                                                               u
    Under what conditions is the solution u of the stochastic Dirichlet problem
(9.2.6), (9.2.7) also a solution of the generalized Dirichlet problem (9.2.13),
(9.2.14)? This is a difficult question and we will content ourselves with the
following partial answer:
178    9. Applications to Boundary Value Problems


Theorem 9.2.14. Suppose L is uniformly elliptic in D, i.e. the eigenvalues
of [aij ] are bounded away from 0 in D. Let φ be a bounded continuous function
on ∂D. Put
                              u(x) = E x [φ(XτD )] .
Then u ∈ C 2+α (D) for all α < 1 and u solves the Dirichlet problem (9.2.13),
(9.2.14), i.e.
(i) Lu = 0 in D.
(ii)r x→y
      lim u(x) = φ(y) for all regular y ∈ ∂D .
      x∈D


Remark. If k is an integer, α > 0 and G is an open set C k+α (G) denotes the
set of functions on G whose partial derivatives up to k’th order is Lipschitz
(Hölder) continuous with exponent α.
Proof. Choose an open ball ∆ with ∆ ⊂ D and let f ∈ C(∂∆). Then, from
the general theory of partial differential equations, for all α < 1 there exists
a continuous function u on ∆ such that u|∆ ∈ C 2+α (∆) and

                             Lu = 0      in ∆                          (9.2.16)
                             u=f        on ∂∆                          (9.2.17)

(see e.g. Dynkin (1965 II, p. 226)). Since u|∆ ∈ C 2+α (∆) we have: If K is
any compact subset of ∆ there exists a constant C only depending on K and
the C α -norms of the coefficients of L such that

                  kukC 2+α (K) ≤ C(kLukC α (∆) + kukC(∆) ) .           (9.2.18)

(See Bers, John and Schechter (1964, Theorem 3, p. 232).) Combining
(9.2.16), (9.2.17) and (9.2.18) we obtain

                         kukC 2+α (K) ≤ Ckf kC(∂∆) .                   (9.2.19)

By uniqueness (Theorem 9.2.13) we know that
                                Z
                        u(x) = f (y)dµx (y) ,                          (9.2.20)

where dµx = Qx [Xτ∆ ∈ dy] is the first exit distribution of Xt from ∆. From
(9.2.19) it follows that
    ¯Z            Z      ¯
    ¯                    ¯
    ¯ f dµx1 − f dµx2 ¯ ≤ Ckf kC(∂∆) |x1 − x2 |α ; x1 , x2 ∈ K . (9.2.21)

By approximating a given continuous function on ∂∆ uniformly by functions
in C ∞ (∂∆) we see that (9.2.21) holds for all functions f ∈ C(∂∆). Therefore

                 kµx1 − µx2 k ≤ C|x1 − x2 |α ;      x1 , x2 ∈ K        (9.2.22)
                              9.2 The Dirichlet Problem. Regular Points      179


where k k denotes the operator norm on measures on ∂∆. So if g is any
bounded measurable function on ∂∆ we know that the function
                          Z
                   gb(x) = g(y)dµx (y) = E x [g(Xτ∆ )]

belongs to the class C α (K). Since u(x) = E x [u(XτU )] for all open sets U
with U ⊂ D and x ∈ U (Lemma 9.2.4) this applies to g = u and we conclude
that u ∈ C α (M ) for any compact subset M of D.
   We may therefore apply the solution to the problem (9.2.16), (9.2.17) once
more, this time with f = u and this way we obtain that

                 u(x) = E x [u(XτD )]     belongs to C 2+α (M )

for any compact M ⊂ D. Therefore (i) holds by Lemma 9.2.3 a).
    To obtain (ii)r we apply a theorem from the theory of parabolic differential
equations: The Kolmogorov backward equation
                                          ∂v
                                   Lv =
                                          ∂t
has a fundamental solution v = p(t, x, y) jointly continuous in t, x, y for t > 0
and bounded in x, y for each fixed t > 0 (See Dynkin (1965 II), Theorem 0.4
p. 227). It follows (by bounded convergence) that the process Xt is a strong
Feller process, in the sense that the function
                                        Z
                            x
                      x → E [f (Xt )] =    f (y)p(t, x, y)dy
                                        Rn

is continuous, for all t > 0 and all bounded, measurable functions f . In general
we have:

        If Xt is a strong Feller Itô diffusion and D ⊂ Rn is open then
        lim E x [φ(XτD )] = φ(y)
        x→y
         x∈D

        for all regular y ∈ ∂D and bounded φ ∈ C(∂D) .                  (9.2.23)

(See Theorem 13.3 p. 32–33 in Dynkin (1965 II)).
   Therefore u satisfies property (ii)r and the proof is complete.             t
                                                                               u
Example 9.2.15. We have already seen (Example 9.2.1) that condition
(9.1.3) does not hold in general. This example shows that it need not hold
even when L is elliptic: Consider Example 9.2.11 again, in the case when the
point 0 is not regular. Choose φ ∈ C(∂D) such that

                φ(0) = 1, 0 ≤ φ(y) < 1         for y ∈ ∂D \ {0} .

Since {0} is polar for Bt (see Exercise 9.7 a) we have Bτ0 6= 0 a.s and therefore
                                                          D
180     9. Applications to Boundary Value Problems




                           u(0) = E 0 [φ(BτD )] < 1 .
By a slight extension of the mean value property (7.2.9) (see Exercise 9.4)
we get
                   E 0 [u(Xσk )] = E 0 [φ(XτD )] = u(0) < 1        (9.2.24)
where
                  n               ½        ¾
                                         1 o
          σk = inf t > 0; Bt ∈
                             / D ∩ |x| <     ,            k = 1, 2, . . .
                                         k

This implies that it is impossible that u(x) → 1 as x → 0. Therefore (9.1.3)
does not hold in this case.
    In general one can show that the regular points for Brownian motion
are exactly the regular points in the classical potential theoretic sense, i.e.
the points y on ∂D where the limit of the generalized Perron-Wiener-Brelot
solution coincide with φ(y), for all φ ∈ C(∂D). See Doob (1984), Port and
Stone (1979) or Rao (1977).
Example 9.2.16. Let D denote the infinite strip

                D = {(t, x) ∈ R2 ; x < R} ,      where R ∈ R

and let L be the differential operator

                                ∂f   1 ∂2f
                  Lf (t, x) =      +       ;     f ∈ C 2 (D) .
                                ∂t   2 ∂x2
An Itô diffusion whose generator coincides with L on C02 (R2 ) is (see Exam-
ple 9.2.10)
                        Xt = (s + t, Bt ) ;   t≥0,
and all the points of ∂D are regular for this process. It is not hard to see that
in this case (9.1.14) holds, i.e.

                                   τD < ∞ a.s.
                                                   9.3 The Poisson Problem    181


(see Exercise 7.4).
    Assume that φ is a bounded continuous function on ∂D = {(t, R); t ∈ R}.
Then by Theorem 9.2.5 the function
                            u(s, x) = E s,x [φ(XτD )]
is the solution of the stochastic Dirichlet problem (9.2.6), (9.2.7), where E s,x
denotes expectation w.r.t. the probability law Qs,x for X starting at (s, x).
Does u also solve the problem (9.2.13), (9.2.14)? Using the Laplace transform
it is possible to find the distribution of the first exit point on ∂D for X, i.e.
to find the distribution of the first time t = τb that Bt reaches the value R.
(See Karlin and Taylor (1975), p. 363. See also Exercise 7.19.) The result is
                            P x [b
                                 τ ∈ dt] = g(x, t)dt ,
where
                     ½                               2

         g(x, t) = (R − x)(2πt3 )−1 exp(− (R−x)
                                            2t  ); t>0           (9.2.25)
                                  0;               t≤0.
Thus the solution u may be written
                  Z∞                       Z∞
         u(s, x) = φ(s + t, R)g(x, t)dt = φ(r, R)g(x, r − s)dr .
                     0                         s
                                                                2
   From the explicit formula for u it is clear that ∂u          ∂ u
                                                        ∂s and ∂x2 are continuous
and we conclude that Lu = 0 in D by Lemma 9.2.3. So u satisfies (9.2.13).
What about property (9.2.14)? It is not hard to see that for t > 0
                                     Z                   µ            ¶
                                   1                         |x − y|2
        E t0 ,x [f (Xt )] = (2πt)− 2   f (t0 + t, y) exp −             dy
                                                                2t
                                   R

for all bounded, (t, x)-measurable functions f . (See (2.2.2)). Therefore Xt is
not a strong Feller process, so we cannot appeal to (9.2.23) to obtain (9.2.14).
However, it is easy to verify directly that if |y| = R, t1 > 0 then for all ² > 0
there exists δ > 0 such that |x − y| < δ, |t − t1 | < δ ⇒ Qt,x [XτD ∈ N ] ≥ 1 − ²,
where N = [t1 − ², t1 + ²] × {y}. And this is easily seen to imply (9.2.14).
Remark. As the above example (and Example 9.2.1) shows, an Itô diffusion
need not be a strong Feller process. However, we have seen that it is always
a Feller process (Lemma 8.1.4).


9.3 The Poisson Problem
         P         2    P ∂
Let L = aij ∂x∂i ∂xj + bi ∂x   i
                                 be a semi-elliptic partial differential operator
on a domain D ⊂ Rn as before and let Xt be an associated Itô diffusion,
described by (9.1.4) and (9.1.5). In this section we study the Poisson problem
(9.2.3), (9.2.4). For the same reasons as in Section 9.2 we generalize the
problem to the following:
182      9. Applications to Boundary Value Problems


The Generalized Poisson Problem

Given a continuous function g on D find a C 2 function v in D such that
a)        Lv = −g      in D                                                             (9.3.1)
b)        lim v(x) = 0
          x→y
                           for all regular y ∈ ∂D                                       (9.3.2)
          x∈D


Again we will first study a stochastic version of the problem and then in-
vestigate the relation between the corresponding stochastic solution and the
solution (if it exists) of (9.3.1), (9.3.2):
Theorem 9.3.1 (Solution of the stochastic Poisson problem).
Assume that
                          · ZτD             ¸
                      x
                  E               |g(Xs )|ds < ∞           for all x ∈ D .              (9.3.3)
                            0

(This occurs, for example, if g is bounded and E x [τD ] < ∞ for all x ∈ D).
Define
                                     · ZτD         ¸
                                   x
                         v(x) = E          g(Xs )ds .                 (9.3.4)
                                                 0

Then
                                      Av = −g            in D ,                         (9.3.5)
and
                    lim v(Xt ) = 0           a.s. Qx , for all x ∈ D .                  (9.3.6)
                   t↑τD

                                                              τD
                                                              R
Proof. Choose U open, x ∈ U ⊂⊂ D. Put η =                          g(Xs )ds, τ = τU .
                                                              0
      Then by the strong Markov property (7.2.5)

          E x [v(Xτ )] − v(x)   1
                              = x (E x [E Xτ [η]] − E x [η])
                 E x [τ ]      E [τ ]
                  1                                1
            = x (E x [E x [θτ η|Fτ ]] − E x [η]) = x (E x [θτ η − η]) .
                E [τ ]                            E [τ ]

Approximate η by sums of the form
                            X
                    η (k) =     g(Xti )X{ti <τ } ∆ti .
                                                              D


Since                             X
                 θt η (k) =           g(Xti +t )X{t +t<τ t } ∆ti      for all k
                                                     i    D

(see the argument for (7.2.6)) we see that
                                                                9.3 The Poisson Problem       183


                                              ZτD
                                θτ η =              g(Xs )ds .                             (9.3.7)
                                              τ
Therefore
                                              · Zτ            ¸
     E x [v(Xτ )] − v(x)   −1
                         = x Ex                       g(Xs )ds → −g(x) as U ↓ x ,
            E x [τ ]      E [τ ]
                                                  0

since g is continuous. This proves (9.3.5).
                      τD
                      R
    Put H(x) = E x [ |g(Xs )|ds]. Let Dk , τk be as in the proof of Theo-
                     0
rem 9.2.5. Then by the same argument as above we get
                                        ZτD
        x                  x     x
      E [H(Xτk ∧t )] = E [E [                 |g(Xs )|ds|Fτk ∧t ]]
                                      τk ∧t
                               · ZτD              ¸
                           x
                     = E                |g(Xs )|ds → 0                 as t → τD , k → ∞
                                τk ∧t

by dominated convergence. This implies (9.3.6).                                                 t
                                                                                                u

Remark. For functions g satisfying (9.3.3) define the operator R by
                                                          · ZτD           ¸
                                                      x
                   (Rg)(x) = ǧ(x) = E                            g(Xs )ds .
                                                            0
Then (9.3.5) can be written

                                      A(Rg) = −g                                           (9.3.8)

i.e. the operator −R is a right inverse of the operator A. Similarly, if we
define
                              · ZτD              ¸
                            x
                Rα g(x) = E         g(Xs )e−αs ds  for α ≥ 0        (9.3.9)
                                  0

then the same method of proof as in Theorem 8.1.5 gives that

                      (A − α)Rα g = −g ;                           α≥0.                (9.3.10)

(If α > 0 then the assumption (9.3.3) can be replaced by the assumption that
g is bounded (and continuous as before)).
    Thus we may regard the operator Rα as a generalization of the resolvent
operator Rα discussed in Chapter 8, and formula (9.3.10) as the analogue of
Theorem 8.1.5 b).
184      9. Applications to Boundary Value Problems


    Next we establish that if a solution v of the generalized problem (9.3.1),
(9.3.2) exists, then v is the solution (9.3.4) of the stochastic problem (9.3.5),
(9.3.6):
Theorem 9.3.2 (Uniqueness theorem for the Poisson equation).
Assume that Xt satisfies Hunt’s condition (H) ((9.2.15)). Assume that (9.3.3)
holds and that there exists a function v ∈ C 2 (D) and a constant C such that

                        ³               · ZτD                      ¸´
                                    x
          |v(x)| ≤ C 1 + E                        |g(Xs )|ds              for all x ∈ D                    (9.3.11)
                                          0

and with the properties

                   Lv = −g                    in D ,                                                       (9.3.12)
                   lim v(x) = 0
                   x→y
                                                  for all regular points y ∈ ∂D .                          (9.3.13)
                   x∈D


                    τD
                    R
Then v(x) = E x [        g(Xs )ds].
                    0

Proof. Let Dk , τk be as in the proof of Theorem 9.2.5. Then by Dynkin’s
formula
                                · Zτk           ¸       · Zτk         ¸
          x                                   x       x
         E [v(Xτk )] − v(x) = E      (Lv)(Xs )ds = −E         g(Xs )ds .
                                                   0                                        0

By dominated convergence we obtain

                    ³                                      · Zτk              ¸´            · ZτD           ¸
                            x                          x                                x
      v(x) = lim        E [v(Xτk )] + E                            g(Xs )ds        =E               g(Xs )ds ,
              k→∞
                                                             0                                  0

since XτD is a regular point a.s. by condition (H) and Lemma 9.2.12.                                             t
                                                                                                                 u
    Finally we combine the Dirichlet and Poisson problem and obtain the
following result:
Theorem 9.3.3. (Solution of the combined stochastic Dirichlet and
Poisson problem).
Assume that (9.1.14) holds. Let φ ∈ C(∂D) be bounded and let g ∈ C(D)
satisfy
                   · ZτD           ¸
                 x
               E         |g(Xs )|ds < ∞  for all x ∈ D .       (9.3.14)
                                0

Define
                                                                9.3 The Poisson Problem   185


                                                 · ZτD           ¸
                    x                        x
         w(x) = E [φ(XτD )] + E                          g(Xs )ds ,    x∈D.           (9.3.15)
                                                   0

a) Then
                                          Aw = −g            in D                     (9.3.16)
and
            lim w(Xt ) = φ(XτD )                 a.s. Qx , for all x ∈ D .            (9.3.17)
            t↑τD

b) Moreover, if there exists a function w1 ∈ C 2 (D) and a constant C such
that
                     ³        · ZτD           ¸´
                            x
        |w1 (x)| < C 1 + E          |g(Xs )|ds ,    x∈D,           (9.3.18)
                                             0

and w1 satisfies (9.3.16) and (9.3.17), then w1 = w.
Remark. With an approach similar to the one used in Theorem 9.2.14 one
can prove that if L is uniformly elliptic in D and g ∈ C α (D) (for some α > 0)
is bounded, then the function w given by (9.3.15) solves the Dirichlet-Poisson
problem, i.e.
                              Lw = −g         in D                      (9.3.19)
and
                   lim w(x) = φ(y)
                   x→y
                                                       for all regular y ∈ ∂D .       (9.3.20)
                   x∈D




The Green Measure

The solution v given by the formula (9.3.4) may be rewritten as follows:
Definition 9.3.4. The Green measure (of Xt w.r.t. D at x), G(x, ·) is de-
fined by

                            · ZτD             ¸
                        x
        G(x, H) = E                 XH (Xs )ds ,             H ⊂ Rn    Borel set      (9.3.21)
                              0

or
 Z                               · ZτD            ¸
                             x
      f (y)G(x, dy) = E                  f (Xs )ds ,          f bounded, continuous . (9.3.22)
                                    0
186     9. Applications to Boundary Value Problems


   In other words, G(x, H) is the expected length of time the process stays
in H before it exits from D. If Xt is Brownian motion, then
                                      Z
                          G(x, H) = G(x, y)dy ,
                                                       H

where G(x, y) is the classical Green function w.r.t. D and dy denotes Lebesque
measure. See Doob (1984), Port and Stone (1979) or Rao (1977). See also
Example 9.3.6 below.
   Note that using the Fubini theorem we obtain the following relation
between the Green measure G and the transition measure for Xt in D,
QD             x
 t (x, H) = Q [Xt ∈ H, t < τD ]:

                        · Z∞                            ¸ Z∞
                    x
      G(x, H) = E              XH (Xs ) · X[0,τD ) (s)ds = QDt (x, H)dt .       (9.3.23)
                         0                                          0

From (9.3.22) we get
                                        · ZτD           ¸ Z
                                    x
                 v(x) = E                       g(Xs )ds = g(y)G(x, dy) ,       (9.3.24)
                                            0                 D

which is the familiar formula for the solution of the Poisson equation in the
classical case.
    Also note that by using the Green function, we may regard the Dynkin
formula as a generalization of the classical Green formula:
Corollary 9.3.5 (The Green formula). Let E x [τD ] < ∞ for all x ∈ D
and assume that f ∈ C02 (Rn ). Then
                                       Z
               f (x) = E x [f (XτD )] − (LX f )(y)G(x, dy) .  (9.3.25)
                                                        D

In particular, if f ∈ C02 (D) we have
                                                 Z
                             f (x) = −               (LX f )(y)G(x, dy) .       (9.3.26)
                                                D
                    P        ∂              1
                                              P               2
(As before LX =          bi ∂x i
                                 +2               (σσ T )ij ∂x∂i ∂xj when

                               dXt = b(Xt )dt + σ(Xt )dBt . )
Proof. By Dynkin’s formula and (9.3.24) we have
                         · ZτD              ¸         Z
  x                             x
E [f (XτD )] = f (x) + E      (LX f )(Xs )ds = f (x) + (LX f )(y)G(x, dy) .
                                        0                                   D
                                                                    9.3 The Poisson Problem        187


Remark. Combining (9.3.8) with (9.3.26) we see that if E x [τK ] < ∞ for all
compacts K ⊂ D and all x ∈ D, then −R is the inverse of the operator A
on C02 (D) :

             A(Rf ) = R(Af ) = −f ,                      for all f ∈ C02 (D) .                 (9.3.27)

More generally, for all α ≥ 0 we get the following analogue of Theorem 8.1.5:

    (A − α)(Rα f ) = Rα (A − α)f = −f                               for all f ∈ C02 (D) .      (9.3.28)

The first part of this is already established in (9.3.10) and the second part
follows from the following useful extension of the Dynkin formula
                                                · Zτ                               ¸
         x     −ατ                          x                −αs
        E [e         f (Xτ )] = f (x) + E                e         (A − α)f (Xs )ds .          (9.3.29)
                                                 0

If α > 0 this is valid for all stopping times τ ≤ ∞ and all f ∈ C02 (Rn ). (See
Exercise 9.6.)
Example 9.3.6. If Xt = Bt is 1-dimensional Brownian motion in a bounded
interval (a, b) ⊂ R then we can compute the Green function G(x, y) explicitly.
To this end, choose a bounded continuous function g: (a, b) → R and let us
compute
                                      · ZτD         ¸
                                    x
                          v(x): = E         g(Bt )dt .
                                                     0

By Corollary 9.1.2 we know that v is the solution of the differential equation
                              1 00
                              2 v (x) = −g(x) ;                     x ∈ (a, b)
                              v(a) = v(b) = 0 .

Integrating twice and using the boundary conditions we get
                                Zb µ Zy                  ¶             Zx µ Zy         ¶
                 2(x − a)
          v(x) =                          g(z)dz dy − 2                          g(z)dz dy .
                   b−a
                                a    a                                 a    a

Changing the order of integration we can rewrite this as
                                            Zb
                                 v(x) =          g(y)G(x, y)dy
                                            a

where
                         2(x − a)(b − y)
          G(x, y) =                      − 2(x − y) · X(−∞,x) (y) .                            (9.3.30)
                              b−a
188    9. Applications to Boundary Value Problems


We conclude that the Green function of Brownian motion in the interval
(a, b) is given by (9.3.30).
    In higher dimension n the Green function y → G(x, y) of Brownian mo-
tion starting at x will not be continuous at x. It will have a logarithmic
                                              1
singularity (i.e. a singularity of order ln |x−y| ) for n = 2 and a singularity of
                   2−n
the order |x − y|      for n > 2.




Exercises

9.1.   In each of the cases below find an Itô diffusion whose generator coin-
       cides with L on C02 :
                                       2
       a) Lf (t, x) = α ∂f   1 2∂ f
                        ∂t + 2 β ∂x2 ; α, β constants
                                                  2       2
                            ∂f       ∂f
       b) Lf (x1 , x2 ) = a ∂x 1
                                 + b ∂x 2
                                          + 12 ( ∂∂xf2 + ∂∂xf2 ) ; a, b constants
                                                      1       2

       c) Lf (x) = αxf 0 (x) + 21 β 2 f 00 (x) ; α, β constants
       d) Lf (x) = αf 0 (x) + 12 β 2 x2 f 00 (x) ; α, β constants
                                                              2            2            2
                                     ∂f       ∂f
       e) Lf (x1 , x2 ) = ln(1+x21 ) ∂x 1
                                          +x2 ∂x 2
                                                   +x22 ∂∂xf2 +2x1 x2 ∂x∂1 ∂x
                                                                           f
                                                                              2
                                                                                +2x21 ∂∂xf2 .
                                                                  1                         2


9.2.   Use Theorem 9.3.3 to find the bounded solutions of the following
       boundary value problems:
                 ( ∂u 1 ∂ 2 u
                                     ρt
                    ∂t + 2 · ∂x2 = e φ(x) ; 0 < t < T, x ∈ R
       (i)
                    u(T, x) = ψ(x) ;        x∈R

            where φ, ψ are given bounded, continuous functions.
                   ½
                      αxu0 (x) + 21 β 2 x2 u00 (x) = 0 ; 0 < x < x0
       (ii)
                      u(x0 ) = x20

            where α, β are given constants, α ≥ 12 β 2 .
                                                                Exercises    189


       (iii) If α < 12 β 2 there are infinitely many bounded solutions of (ii),
             and an additional boundary condition e.g. at x = 0 is needed to
             provide uniqueness. Explain this in view of Theorem 9.3.3.
9.3.   Write down (using Brownian motion) and compare the solutions u(t, x)
       of the following two boundary value problems:
           (
             ∂u    1                             n
             ∂t + 2 ∆u = 0 for 0 < t < T, x ∈ R
       a)                             n
             u(T, x) = φ(x) for x ∈ R .
           (
             ∂u    1                             n
             ∂t − 2 ∆u = 0 for 0 < t < T, x ∈ R
       b)
             u(0, x) = ψ(x) for x ∈ Rn .

9.4.   Let G and H be bounded open subsets of Rn , G ⊂ H, and let Bt be
       n-dimensional Brownian motion. Use the property (H) for Bt to prove
       that
                    inf{t > 0; Bt ∈
                                  / H} = inf{t > τG ; Bt ∈
                                                         / H}
       i.e., with the terminology of (7.2.6),
                                  α
                            τH = τH         where α = τG .

       Use this to prove that if Xt = Bt then the mean value property (7.2.9)
       holds for all bounded open G ⊂ H, i.e. it is not necessary to require
       G ⊂⊂ H in this case. This verifies the statement (9.2.24).
9.5.   (The eigenvalues of the Laplacian)
       Let D ⊂ Rn be open, bounded and let λ ∈ R.
       a) Suppose there exists a solution u ∈ C 2 (D)∩C(D), u not identically
          zero, such that     ½ 1
                                − 2 ∆u = λu in       D
                                                                     (9.3.31)
                                    u=0        on ∂D .
          Show that we must have λ > 0. (Hint: If 12 ∆u = −λu in D then

                                  h 12 ∆u, ui = h−λu, ui

          where                             Z
                                 hu, vi =       u(x)v(x)dx .
                                            D

          Now use integration by parts.)
       b) It can be shown that if D is smooth then there exist 0 < λ0 < λ1 <
          · · · < λn < · · · where λn → ∞ such that (9.3.31) holds for λ = λn ,
          n = 0, 1, 2, . . ., and for no other values of λ. The numbers {λn } are
          called the eigenvalues of the operator − 21 ∆ in the domain D and
          the corresponding (nontrivial) solutions un of (9.3.31) are called the
          eigenfunctions. There is an interesting probabilistic interpretation
          of the lowest eigenvalue λ0 . The following result indicates this:
190    9. Applications to Boundary Value Problems


          Put τ = τD = inf{t > 0; Bt ∈
                                     / D}, choose ρ > 0 and define

                           wρ (x) = E x [exp(ρτ )] ;       x∈D.

          Prove that if wρ (x) < ∞ for all x ∈ D then ρ is not an eigenvalue
          for − 12 ∆. (Hint: Let u be a solution of (9.3.31) with λ = ρ. Apply
          Dynkin’s formula to the process dYt = (dt, dBt ) and the function
          f (t, x) = eρt u(x) to deduce that u(x) = 0 for x ∈ D).
       c) Conclude that

                    λ0 ≥ sup{ρ; E x [exp(ρτ )] < ∞ for all x ∈ D} .

          (We have in fact equality here. See for example Durrett (1984),
          Chap. 8B).
9.6.   Prove formula (9.3.29), for example by applying the Dynkin formula
       to the process                    ·     ¸
                                            dt
                                   dYt =
                                           dXt
       and the function g(y) = g(t, x) = e−αt f (x).
9.7.   a) Let Bt be Brownian motion in R2 . Prove that

                     P x [∃t > 0; Bt = y] = 0        for all x, y ∈ R2 .

          (Hint: First assume x 6= y. We may choose y = 0. One possible
          approach would be to apply Dynkin’s formula with f (u) = ln |u|
          and τ = inf{t > 0; |Bt | ≤ ρ or |Bt | ≥ R}, where 0 < ρ < R. Let
          ρ → 0 and then R → ∞. If x = y consider P x [∃t > ²; Bt = x] and
          use the Markov property.)
                         (1)     (2)
       b) Let Bt = (Bt , Bt ) be Brownian motion in R2 . Prove that
                     (1)     (2)
           et = (−Bt , Bt ) is also a Brownian motion.
          B
       c) Prove that 0 ∈ R2 is a regular boundary point (for Brownian mo-
          tion) of the plane region

                 D = {(x1 , x2 ) ∈ R2 ; x21 + x22 < 1} \ {(x1 , 0); x1 ≥ 0} .

       d) Prove that 0 ∈ R3 is an irregular boundary point (for Brownian
          motion) of the 3-dimensional region

           U = {(x1 , x2 , x3 ) ∈ R3 , x21 + x22 + x23 < 1} \ {(x1 , 0, 0); x1 ≥ 0} .
                                                                          Exercises   191




9.8.   a) Find an Itô diffusion Xt and a measurable set G which is semipolar
          but not polar for Xt .
       b) Find an Itô diffusion Xt and a countable family of thin sets Hk ;
                                    S
                                    ∞
          k = 1, 2, . . . such that   Hk is not thin.
                                      k=1

9.9.   a) Let Xt be an Itô diffusion in Rn and assume that g is a non-constant
          locally bounded real Xt -harmonic function on a connected open
          set G ⊂ Rn . Prove that g satisfies the following weak form of the
          maximum principle: g does not have a (local or global) maximum
          at any point of G. (Similarly g satisfies the minimum principle).
       b) Give an example to show that a non-constant bounded Xt -harmonic
          function g can have a (non-strict) global maximum. (Hint: Consider
          uniform motion to the right.)
9.10. Find the (stochastic) solution f (t, x) of the boundary value problem
                                             2
         K(x)e−ρt + ∂f         ∂f   1 2 2∂ f
                      ∂t + αx ∂x + 2 β x ∂x2 = 0 for x > 0, 0 < t < T
         f (T, x) = e−ρT φ(x)                                for x > 0

       where K, φ are given functions and T, ρ, α, β are constants, ρ > 0, T > 0.
       (Hint: Consider dYt = (dt, dXt ) where Xt is a geometric Brownian
       motion).
9.11. a) The Poisson kernel is defined by
                                        1 − r2          1 − |z|2
                          Pr (θ) =                  2
                                                      =
                                   1 − 2r cos θ + r     |1 − z|2
                                                         √
          where r ≥ 0, θ ∈ [0, 2π], z = reiθ ∈ C (i = −1 ).
          The Poisson formula states that if D denotes the open unit disk in
          the plane R2 = C and h ∈ C( D ) satisfies ∆h = 0 in D then
                                            Z2π
                                 iθ  1
                           h(re ) =               Pr (t − θ)h(eit )dt .
                                    2π
                                            0
192    9. Applications to Boundary Value Problems


         Prove that the probability that Brownian motion, starting from
         z ∈ D, first exits from D at a set F ⊂ ∂D is given by
                             Z
                          1
                               Pr (t − θ)dt , where z = reiθ .
                         2π
                             F

      b) The function
                                                         1+z
                                     w = φ(z) = i
                                                         1−z
         maps the disc D = {|z| < 1} conformally onto the half plane H =
         {w = u+iv; v > 0}, φ(∂D) = R and φ(0) = i. Use Example 8.5.9 to
         prove that if µ denotes the harmonic measure for Brownian motion
         at the point i = (0, 1) for the half plane H then




                Z                        Z2π                       Z
                                  1                 it        1         f (φ(z))
                    f (ξ)dµ(ξ) =               f (φ(e ))dt =                     dz .
                                 2π                          2πi            z
                R                        0                         ∂D

      c) Substitute w = φ(z) (i.e. z = ψ(w): = φ−1 (w) = w−i
                                                         w+i ) in the inte-
         gral above to show that
               Z                     Z                             Z∞
                                 1                   dw       1                dx
                    f (ξ)dµ(ξ) =             f (w)          =           f (x) 2   .
                                 π                 |w − i|2   π              x +1
               R                     ∂H                           −∞

      d) Show that the harmonic measure µw H for Brownian motion in H at
         the point w = u + iv ∈ H is given by
                                               1       v
                            dµw
                              H (x) =            ·              dx .
                                               π (x − u)2 + v 2

9.12. (A Feynman-Kac formula for boundary value problems)
      Let Xt be an Itô diffusion on Rn whose generator coincides with a
      given partial differential operator L on C02 (Rn ). Let D, φ and g be as
      in Theorem 9.3.3 and let q(x) ≥ 0 be a continuous function on Rn .
                                                                                      Exercises       193


      Consider the boundary value problem: Find h ∈ C 2 (D) ∩ C( D ) such
      that          (
                      Lh(x) − q(x)h(x) = −g(x) on D
                            lim h(x) = φ(y) ;                             y ∈ ∂D .
                           x→y

      Show that if a bounded solution h exists, then
                          · ZτD       Rt                                Rτ
                                                                              D q(X )ds
                                                                                                ¸
                      x           −        q(Xs )ds                 −              s
           h(x) = E               e   0
                                                      g(Xt )dt + e        0
                                                                                          φ(XτD ) .
                            0

      (Compare with the Feynman-Kac formula.)
      Hint: Proceed as in the proof of Theorem 8.2.1 b).
    For more information on stochastic solutions of boundary value problems
see Freidlin (1985).
9.13. Let D = (a, b) be a bounded interval.
      a) For x ∈ R define

                                Xt = Xtx = x + µt + σBt ;                        t≥0

         where µ, σ are constants, σ 6= 0. Use Corollary 9.1.2 to compute
                                                                    · ZτD             ¸
                                             x                  x
                           w(x): = E [φ(XτD )] + E                            g(Xt )dt
                                                                      0

         when φ: {a, b} → R and g: (a, b) → R are given functions, g
         bounded and continuous.
      b) Use the results in a) to compute the Green function G(x, y) of the
         process Xt .
         (Hint: Choose φ = 0 and proceed as in Example 9.3.6.)
9.14. Let D = (a, b) ⊂ (0, ∞) be a bounded interval and let

                  dXt = rXt dt + αXt dBt ;                       X0 = x ∈ (a, b)

      be a geometric Brownian motion.
      a) Use Corollary 9.1.2 to find

                                                 Qx [XτD = b] .

         (Hint: Choose g = 0 and φ(a) = 0, φ(b) = 1.)
      b) Use Corollary 9.1.2 to compute
                                                                    · ZτD             ¸
                                             x                  x
                            w(x) = E [φ(XτD )] + E                            g(Xt )dt
                                                                      0
194   9. Applications to Boundary Value Problems


         for given functions φ: {a, b} → R and g: (a, b) → R, g bounded and
         continuous.
         (Hint: The substitution t = ln x, w(x) = h(ln x) transforms the
         differential equation
                      1 2 2 00         0
                      2 α x w (x) + rxw (x) = −g(x) ;                          x>0
         into the differential equation
                   1 2 00           1 2 0            t
                   2 α h (t) + (r − 2 α )h (t) = −g(e ) ;                      t ∈ R .)

9.15. a) Let D = (a, b) ⊂ R be a bounded interval and let Xt = Bt be
         1-dimensional Brownian motion. Use Corollary 9.1.2 to compute
                                                             · ZτD                  ¸
                               x   −ρτD                  x               −ρt
                     h(x) = E [e          ψ(BτD )] + E               e         Bt2 dt
                                                               0

         for a given function ψ: {a, b} → R, when ρ > 0 is constant.
         (Hint: Consider the Itô diffusion
                ·    (1) ¸   ·     ¸ · ¸        · ¸
                  dYt           dt      1        0
         dYt =       (2)   =        =      dt +    dBt ;    Y0 = y = (s, x) .
                  dYt          dBt      0        1
         Then
                                      h(x) = w(0, x)
         where
                                                                   · ZτD           ¸
                                           y                   y
                     w(s, x) = w(y) = E [φ(YτD )] + E                      g(Yt )dt
                                                                     0

         with φ(y) = φ(s, x) = e−ρs ψ(x)
         and g(y) = g(s, x) = e−ρs x2 .
         Note that
                                                                           (2)
                 τD = inf{t > 0; Bt 6∈ (a, b)} = inf{t > 0; Yt                    6∈ (a, b)}
                    = inf{t > 0; Yt 6∈ R × (a, b)} .
         To find w(s, x) solve the boundary value problem
                   2
                   1 ∂ w2 + ∂w = −e−ρs x2 ; a < x < b
                      2 ∂x     ∂s
                      w(s, a) = e−ρs ψ(a) ,     w(s, b) = e−ρs ψ(b) .

         To this end, try w(s, x) = e−ρs h(x).)
                                            −ρτ
      b) Use the method in a) to find E x [e D ].
         (Compare with Exercise 7.19.)
10. Application to Optimal Stopping




10.1 The Time-Homogeneous Case

Problem 5 in the introduction is a special case of a problem of the following
type:
Problem 10.1.1 (The optimal stopping problem).
Let Xt be an Itô diffusion on Rn and let g (the reward function) be a given
function on Rn , satisfying

a) g(ξ) ≥ 0 for all ξ ∈ Rn                                            (10.1.1)
b) g is continuous.

   Find a stopping time τ ∗ = τ ∗ (x, ω) (called an optimal stopping time) for
{Xt } such that

          E x [g(Xτ ∗ )] = sup E x [g(Xτ )]       for all x ∈ Rn ,    (10.1.2)
                            τ

the sup being taken over all stopping times τ for {Xt }. We also want to find
the corresponding optimal expected reward

                                g ∗ (x) = E x [g(Xτ ∗ )] .            (10.1.3)

Here g(Xτ ) is to be interpreted as 0 at the points ω ∈ Ω where τ (ω) = ∞
and as usual E x denotes the expectation with respect to the probability law
Qx of the process Xt ; t ≥ 0 starting at X0 = x ∈ Rn .
    We may regard Xt as the state of a game at time t, each ω corresponds
to one sample of the game. For each time t we have the option of stopping
the game, thereby obtaining the reward g(Xt ), or continue the game in the
hope that stopping it at a later time will give a bigger reward. The problem
is of course that we do not know what state the game is in at future times,
only the probability distribution of the “future”. Mathematically, this means
that the possible “stopping” times we consider really are stopping times in
the sense of Definition 7.2.1: The decision whether τ ≤ t or not should only
depend on the behaviour of the Brownian motion Br (driving the process X)
up to time t, or perhaps only on the behaviour of Xr up to time t. So, among
196    10. Application to Optimal Stopping


all possible stopping times τ we are asking for the optimal one, τ ∗ , which
gives the best result “in the long run”, i.e. the biggest expected reward in
the sense of (10.1.2).
    In the following we will outline how a solution to this problem can be
obtained using the material from the preceding chapter. Later in this chapter
we shall see that our discussion of problem (10.1.2)–(10.1.3) also covers the
apparently more general problems

         g ∗ (s, x) = sup E (s,x) [g(τ, Xτ )] = E (s,x) [g(τ ∗ , Xτ ∗ )]         (10.1.4)
                       τ

and
                                              · Zτ                           ¸
                 ∗                    (s,x)
               G (s, x) = sup E                      f (t, Xt )dt + g(τ, Xτ )
                               τ
                                                 0
                                       · Zτ ∗                                ¸
                           = E (s,x)            f (t, Xt )dt + g(τ ∗ , Xτ ∗ )    (10.1.5)
                                         0

where f is a given reward rate function (satisfying certain conditions).
   We shall also discuss possible extensions of problem (10.1.2)–(10.1.3) to
cases where g is not necessarily continuous or where g may assume negative
values.
   A basic concept in the solution of (10.1.2)–(10.1.3) is the following:
Definition 10.1.2. A measurable function f : Rn → [0, ∞] is called super-
meanvalued (w.r.t. Xt ) if

                                   f (x) ≥ E x [f (Xτ )]                         (10.1.6)

for all stopping times τ and all x ∈ Rn .
    If, in addition, f is also lower semicontinuous, then f is called l.s.c. su-
perharmonic or just superharmonic (w.r.t. Xt ).
   Note that if f : Rn → [0, ∞] is lower semicontinuous then by the Fatou
lemma
               f (x) ≤ E x [ lim f (Xτk )] ≤ lim E x [f (Xτk )] , (10.1.7)
                               k→∞                      k→∞

for any sequence {τk } of stopping times such that τk → 0 a.s. P . Combining
this with (10.1.6) we see that if f is (l.s.c.) superharmonic, then

                     f (x) = lim E x [f (Xτk )]               for all x ,        (10.1.8)
                              k→∞

for all such sequences τk .
Remarks. 1) In the literature (see e.g. Dynkin (1965 II)) one often finds
a weaker concept of Xt -superharmonicity, defined by the supermeanvalued
                                         10.1 The Time-Homogeneous Case          197


property (10.1.6) plus the stochastic continuity requirement (10.1.8). This
weaker concept corresponds to the Xt -harmonicity defined in Chapter 9.
   2) If f ∈ C 2 (Rn ) it follows from Dynkin’s formula that f is superhar-
monic w.r.t. Xt if and only if
                                    Af ≤ 0
where A is the characteristic operator of Xt . This is often a useful criterion
(See e.g. Example 10.2.1).
    3) If Xt = Bt is Brownian motion in Rn then the superharmonic func-
tions for Xt coincide with the (nonnegative) superharmonic functions in clas-
sical potential theory. See Doob (1984) or Port and Stone (1979).

   We state some useful properties of superharmonic and supermeanvalued
functions.
Lemma 10.1.3. a) If f is superharmonic (supermeanvalued) and α > 0,
   then αf is superharmonic (supermeanvalued).
b) If f1 , f2 are superharmonic (supermeanvalued), then f1 + f2 is superhar-
   monic (supermeanvalued).
c) If {fj }j∈J is a family of supermeanvalued functions, then f (x): = inf {fj (x)}
                                                                           j∈J
    is supermeanvalued if it is measurable (J is any set).
d) If f1 , f2 , · · · are superharmonic (supermeanvalued) functions and fk ↑ f
    pointwise, then f is superharmonic (supermeanvalued).
e) If f is supermeanvalued and σ ≤ τ are stopping times, then E x [f (Xσ )] ≥
    E x [f (Xτ )].
f ) If f is supermeanvalued and H is a Borel set, then fe(x): = E x [f (XτH )] is
    supermeanvalued.
Proof of Lemma 10.1.3.
a) and b) are straightforward.
c) Suppose fj is supermeanvalued for all j ∈ J. Then

                  fj (x) ≥ E x [fj (Xτ )] ≥ E x [f (Xτ )]    for all j .

   So f (x) = inf fj (x) ≥ E x [f (Xτ )], as required.
d) Suppose fj is supermeanvalued, fj ↑ f . Then

                     f (x) ≥ fj (x) ≥ E x [fj (Xτ )]   for all j, so
                                     x               x
                     f (x) ≥ lim E [fj (Xτ )] = E [f (Xτ )] ,
                              j→∞

   by monotone convergence. Hence f is supermeanvalued. If each fj is also
   lower semicontinuous then if yk → x as k → ∞ we have

                 fj (x) ≤ lim fj (yk ) ≤ lim f (yk )        for each j .
                          k→∞              k→∞

   Hence, by letting j → ∞,
198       10. Application to Optimal Stopping


                                     f (x) ≤ lim f (yk ) .
                                                k→∞

e) If f is supermeanvalued we have by the Markov property when t > s

                         E x [f (Xt )|Fs ] = E Xs [f (Xt−s )] ≤ f (Xs ) ,           (10.1.9)

      i.e. the process
                                             ζt = f (Xt )
      is a supermartingale w.r.t. the σ-algebras Ft generated by {Br ; r ≤ t}.
      (Appendix C). Therefore, by Doob’s optional sampling theorem (see Gih-
      man and Skorohod (1975, Theorem 6 p. 11)) we have

                                  E x [f (Xσ )] ≥ E x [f (Xτ )]

   for all stopping times σ, τ with σ ≤ τ a.s. Qx .
f) Suppose f is supermeanvalued. By the strong Markov property (7.2.2)
   and formula (7.2.6) we have, for any stopping time α,

              E x [fe(Xα )] = E x [E Xα [f (XτH )]] = E x [E x [θα f (XτH )|Fα ]]
                            = E x [θα f (XτH )] = E x [f (XτHα )]               (10.1.10)
             α                              α
      where τH = inf{t > α; Xt ∈
                               / H}. Since τH ≥ τH we have by e)

                            E x [fe(Xα )] ≤ E x [f (XτH )] = fe(x) ,

      so fe is supermeanvalued.                                                           t
                                                                                          u
      The following concepts are fundamental:
Definition 10.1.4. Let h be a real measurable function on Rn . If f is a
superharmonic (supermeanvalued) function and f ≥ h we say that f is a
superharmonic (supermeanvalued) majorant of h (w.r.t. Xt ). The function

                               h(x) = inf f (x); x ∈ Rn ,                       (10.1.11)
                                         f

the inf being taken over all supermeanvalued majorants f of h, is called the
least supermeanvalued majorant of h.
      Similarly, suppose there exists a function b
                                                 h such that
(i) bh is a superharmonic majorant of h and
(ii) if f is any other superharmonic majorant of h then b
                                                        h ≤ f.

  Then bh is called the least superharmonic majorant of h.
  Note that by Lemma 10.1.3 c) the function h is supermeanvalued if it is
measurable. Moreover, if h is lower semicontinuous, then b
                                                         h exists and b
                                                                      h = h.
                                             10.1 The Time-Homogeneous Case            199


Later we will prove that if g is nonnegative (or lower bounded) and lower
semicontinuous, then gb exists and gb = g (Theorem 10.1.7).
   Let g ≥ 0 and let f be a supermeanvalued majorant of g. Then if τ is a
stopping time
                      f (x) ≥ E x [f (Xτ )] ≥ E x [g(Xτ )] .
So
                        f (x) ≥ sup E x [g(Xτ )] = g ∗ (x) .
                                   τ

Therefore we always have

                       gb(x) ≥ g ∗ (x)          for all x ∈ Rn .                  (10.1.12)

What is not so easy to see is that the converse inequality also holds, i.e. that
in fact
                                   gb = g ∗ .                         (10.1.13)
We will prove this after we have established a useful iterative procedure for
calculating gb. Before we give such a procedure let us introduce a concept
which is related to superharmonic functions:
Definition 10.1.5. A lower semicontinuous function f : Rn → [0, ∞] is
called excessive (w.r.t. Xt ) if

           f (x) ≥ E x [f (Xs )]        for all s ≥ 0, x ∈ Rn .                   (10.1.14)

    It is clear that a superharmonic function must be excessive. What is not
so obvious, is that the converse also holds:
Theorem 10.1.6. Let f : Rn → [0, ∞]. Then f is excessive w.r.t. Xt if and
only if f is superharmonic w.r.t. Xt .
Proof in a special case. Let L be the differential operator associated to
X (given by the right hand side of (7.3.3)), so that L coincides with the
generator A of X on C02 . We only prove the theorem in the special case when
f ∈ C 2 (Rn ) and Lf is bounded: Then by Dynkin’s formula we have
                                        · Zt                ¸
            x                       x
          E [f (Xt )] = f (x) + E              Lf (Xr )dr       for all t ≥ 0 ,
                                         0

so if f is excessive then Lf ≤ 0. Therefore, if τ is a stopping time we get

                    E x [f (Xt∧τ )] ≤ f (x)          for all t ≥ 0 .

Letting t → ∞ we see that f is superharmonic.                                            t
                                                                                         u

    A proof in the general case can be found in Dynkin (1965 II, p. 5).
    The first iterative procedure for the least superharmonic majorant gb of g
is the following:
200     10. Application to Optimal Stopping


Theorem 10.1.7. (Construction of the least superharmonic majo-
rant).
Let g = g0 be a nonnegative, lower semicontinuous function on Rn and define
inductively
                        gn (x) = sup E x [gn−1 (Xt )] ,           (10.1.15)
                                       t∈Sn
                      −n               n
where Sn = {k · 2 ; 0 ≤ k ≤ 4 }, n = 1, 2, . . . . Then gn ↑ gb and gb is the
least superharmonic majorant of g. Moreover, gb = g.
Proof. Note that {gn } is increasing. Define ǧ(x) = lim gn (x). Then
                                                                   n→∞
                                 x
         ǧ(x) ≥ gn (x) ≥ E [gn−1 (Xt )]              for all n and all t ∈ Sn .
Hence
                        ǧ(x) ≥ lim E x [gn−1 (Xt )] = E x [ǧ(Xt )]               (10.1.16)
                                n→∞
                  S
                  ∞
for all t ∈ S =         Sn .
                  n=1
     Since ǧ is an increasing limit of lower semicontinuous functions (Lemma 8.1.4)
ǧ is lower semicontinuous. Fix t ∈ R and choose tk ∈ S such that tk → t.
Then by (10.1.16), the Fatou lemma and lower semicontinuity
          ǧ(x) ≥ lim E x [ǧ(Xtk )] ≥ E x [ lim ǧ(Xtk )] ≥ E x [ǧ(Xt )] .
                   k→∞                             k→∞

So ǧ is an excessive function. Therefore ǧ is superharmonic by Theorem 10.1.6
and hence ǧ is a superharmonic majorant of g. On the other hand, if f is any
supermeanvalued majorant of g, then clearly by induction
                               f (x) ≥ gn (x)         for all n
and so f (x) ≥ ǧ(x). This proves that ǧ is the least supermeanvalued majorant
g of g. So ǧ = gb.                                                          t
                                                                             u
   It is a consequence of Theorem 10.1.7 that we may replace the finite sets
Sn by the whole interval [0, ∞]:
Corollary 10.1.8. Define h0 = g and inductively
                   hn (x) = sup E x [hn−1 (Xt )] ;              n = 1, 2, . . .
                               t≥0

Then hn ↑ gb.
Proof. Let h = lim hn . Then clearly h ≥ ǧ = gb. On the other hand, since gb is
excessive we have
                           gb(x) ≥ sup E x [b
                                            g (Xt )].
                                            t≥0

So by induction
                                  gb ≥ hn         for all n .
Thus gb = h and the proof is complete.
                                         10.1 The Time-Homogeneous Case   201


    We are now ready for our first main result on the optimal stopping prob-
lem. The following result is basically due to Dynkin (1963) (and, in a mar-
tingale context, Snell (1952)):
Theorem 10.1.9 (Existence theorem for optimal stopping).
Let g ∗ denote the optimal reward and gb the least superharmonic majorant of
a continuous reward function g ≥ 0.
a) Then
                                     g ∗ (x) = gb(x) .               (10.1.17)
b) For ² > 0 let
                            D² = {x; g(x) < gb(x) − ²} .             (10.1.18)
   Suppose g is bounded. Then stopping at the first time τ² of exit from D²
   is close to being optimal, in the sense that

                             |g ∗ (x) − E x [g(Xτ² )]| ≤ 2²          (10.1.19)

   for all x.
c) For arbitrary continuous g ≥ 0 let

          D = {x; g(x) < g ∗ (x)}      (the continuation region) .   (10.1.20)

   For N = 1, 2, . . . define gN = g ∧ N , DN = {x; gN (x) < gc
                                                              NS(x)} and
   σN = τDN . Then DN ⊂ DN +1 , DN ⊂ D ∩ g −1 ([0, N )), D = DN . If
                                                                     N
   σN < ∞ a.s. Qx for all N then

                            g ∗ (x) = lim E x [g(XσN )] .            (10.1.21)
                                       N →∞

d) In particular, if τD < ∞ a.s. Qx and the family {g(XσN )}N is uniformly
   integrable w.r.t. Qx (Appendix C), then

                                g ∗ (x) = E x [g(XτD )]

   and τ ∗ = τD is an optimal stopping time.
Proof. First assume that g is bounded and define

                      ge² (x) = E x [b
                                     g (Xτ² )]     for ² > 0 .       (10.1.22)

Then ge² is supermeanvalued by Lemma 10.1.3 f). We claim that

                       g(x) ≤ ge² (x) + ²         for all x .        (10.1.23)

To see this suppose
                         β: = sup{g(x) − ge² (x)} > ² .              (10.1.24)
                                 x

Then for all η > 0 we can find x0 such that
202      10. Application to Optimal Stopping


                             g(x0 ) − ge² (x0 ) ≥ β − η .                    (10.1.25)

On the other hand, since ge² + β is a supermeanvalued majorant of g, we have

                                 gb(x0 ) ≤ ge² (x0 ) + β .                   (10.1.26)

Combining (10.1.25) and (10.1.26) we get

                                 gb(x0 ) ≤ g(x0 ) + η .                      (10.1.27)

      Consider the two possible cases:

Case 1: τ² > 0 a.s. Qx0 . Then by (10.1.27) and the definition of D²

g(x0 ) + η ≥ gb(x0 ) ≥ E x0 [b
                             g (Xt∧τ² )] ≥ E x0 [(g(Xt ) + ²)X{t<τ² } ] for all t > 0 .

Hence by the Fatou lemma and lower semicontinuity of g

             g(x0 ) + η ≥ lim E x0 [(g(Xt ) + ²)X{t<τ² } ]
                           t→0
                        ≥ E x0 [ lim (g(Xt ) + ²)X{t<τ² } ] ≥ g(x0 ) + ² .
                                  t→0

This is a contradiction if η < ².

Case 2: τ² = 0 a.s. Qx0 . Then ge² (x0 ) = gb(x0 ), so g(x0 ) ≤ ge² (x0 ), contra-
dicting (10.1.25) for η < β.
    Therefore (10.1.24) leads to a contradiction. Thus (10.1.23) is proved and
we conclude that ge² + ² is a supermeanvalued majorant of g. Therefore

                       g (Xτ² )] + ² ≤ E[(g + ²)(Xτ² )] + ² ≤ g ∗ + 2²
      gb ≤ ge² + ² = E[b                                                     (10.1.28)

and since ² was arbitrary we have by (10.1.12)

                                        gb = g ∗ .

If g is not bounded, let

                        gN = min(N, g) ,             N = 1, 2, . . .

and as before let gc
                   N be the least superharmonic majorant of gN . Then


                g ∗ ≥ gN
                       ∗
                         = gc
                            N ↑ h          as N → ∞ , where h ≥ gb

since h is a superharmonic majorant of g. Thus h = gb = g ∗ and this proves
(10.1.17) for general g. From (10.1.28) and (10.1.17) we obtain (10.1.19).
    Finally, to obtain c) and d) let us again first assume that g is bounded.
Then, since
                             τ² ↑ τD     as ² ↓ 0
                                         10.1 The Time-Homogeneous Case      203


and τD < ∞ a.s we have
                   E x [g(Xτ² )] → E x [g(XτD )]         as ² ↓ 0 ,    (10.1.29)
and hence by (10.1.28) and (10.1.17)
                   g ∗ (x) = E x [g(XτD )]         if g is bounded .   (10.1.30)
Finally, if g is not bounded define
                                  h = lim gc
                                           N
                                             .
                                        N →∞

Then h is superharmonic by Lemma 10.1.3 d) and since gc   N
                                                            ≤ gb for all N we
have h ≤ gb. On the other hand gN ≤ gc N
                                         ≤  h for all N and therefore g ≤ h.
Since gb is the least superharmonic majorant of g we conclude that
                                        h = gb .                       (10.1.31)
Hence by (10.1.30), (10.1.31) we obtain (10.1.21):
  g ∗ (x) = lim gc
                 N
                   (x) = lim E x [gN (XσN )] ≤ lim E x [g(XσN )] ≤ g ∗ (x) .
           N →∞            N →∞                        N →∞

Note that gc
           N
             ≤ N everywhere, so if gN (x) < gc N
                                                 (x) then gN (x) < N and there-
fore g(x) = gN (x) < gc
                      N
                        (x) ≤ g
                              b (x) and gN +1
                                              (x) = gN (x) < gcN
                                                                 (x) ≤ gd
                                                                        N +1
                                                                             (x).
Hence DN ⊂ D ∩ {x; g(x) < N } and DN ⊂ DN +1 for all N . So by (10.1.31)
we conclude that D is the increasing union of the sets DN ; N = 1, 2, . . .
Therefore
                               τD = lim σN .
                                         N →∞
So by (10.1.21) and uniform integrability we have
                                            x
                  gb(x) = lim gc
                               N (x) = lim E [gN (XσN )]
                           N →∞              N →∞
                       = E x [ lim gN (XσN )] = E x [g(XτD )] ,
                               N →∞

and the proof of Theorem 10.1.9 is complete.                                   t
                                                                               u
Remarks.
1) Note that the sets D, D² and DN are open, since gb = g ∗ is lower semicon-
   tinuous and g is continuous.
2) By inspecting the proof of a) we see that (10.1.17) holds under the weaker
   assumption that g ≥ 0 is lower semicontinuous.
   The following consequence of Theorem 10.1.9 is often useful:
Corollary 10.1.10. Suppose there exists a Borel set H such that
                              geH (x): = E x [g(XτH )]
is a supermeanvalued majorant of g. Then
                  g ∗ (x) = geH (x) ,   so τ ∗ = τH is optimal .
204     10. Application to Optimal Stopping


Proof. If geH is a supermeanvalued majorant of g then clearly

                                      g(x) ≤ geH (x) .

On the other hand we of course have

                            geH (x) ≤ sup E x [g(Xτ )] = g ∗ (x) ,
                                        τ

so g ∗ = geH by Theorem 10.1.7 and Theorem 10.1.9 a).                          t
                                                                               u
Corollary 10.1.11. Let

                                  D = {x; g(x) < gb(x)}

and put
                              ge(x) = geD (x) = E x [g(XτD )] .
If ge ≥ g then ge = g ∗ .
Proof. Since XτD ∈   / D we have g(XτD ) ≥ gb(XτD ) and therefore g(XτD ) =
gb(XτD ), a.s. Qx . So ge(x) = E x [b
                                    g (XτD )] is supermeanvalued since gb is, and
the result follows from Corollary 10.1.10.                                      t
                                                                                u
   Theorem 10.1.9 gives a sufficient condition for the existence of an optimal
stopping time τ ∗ . Unfortunately, τ ∗ need not exist in general. For example,
if
                      Xt = t for t ≥ 0 (deterministic)
and
                                          ξ2
                               g(ξ) =          ;       ξ∈R
                                        1 + ξ2
then g ∗ (x) = 1, but there is no stopping time τ such that

                                     E x [g(Xτ )] = 1 .

However, we can prove that if an optimal stopping time τ ∗ exists, then the
stopping time given in Theorem 10.1.9 is optimal:
Theorem 10.1.12 (Uniqueness theorem for optimal stopping).
Define as before
                  D = {x; g(x) < g ∗ (x)} ⊂ Rn .
Suppose there exists an optimal stopping time τ ∗ = τ ∗ (x, ω) for the problem
(10.1.2) for all x. Then

                               τ ∗ ≥ τD        for all x ∈ D           (10.1.32)

and
                     g ∗ (x) = E x [g(XτD )]        for all x ∈ Rn .   (10.1.33)
Hence τD is an optimal stopping time for the problem (10.1.2).
                                               10.1 The Time-Homogeneous Case              205


Proof. Choose x ∈ D. Let τ be an Ft -stopping time and assume
Qx [τ < τD ] > 0. Since g(Xτ ) < g ∗ (Xτ ) if τ < τD and g ≤ g ∗ always, we have
                      Z                   Z
        x                           x
      E [g(Xτ )] =        g(Xτ )dQ +           g(Xτ )dQx
                            τ <τD               τ ≥τD
                Z                         Z
           <             g ∗ (Xτ )dQx +       g ∗ (Xτ )dQx = E x [g ∗ (Xτ )] ≤ g ∗ (x) ,
               τ <τD                  τ ≥τD
       ∗
since g is superharmonic. This proves (10.1.32).
    To obtain (10.1.33) we first choose x ∈ D. Since gb is superharmonic we
have by (10.1.32) and Lemma 10.1.3 e)
   g ∗ (x) = E x [g(Xτ ∗)] ≤ E x [b
                                  g (Xτ ∗)] ≤ E x [b
                                                   g (XτD )]
               x              ∗
           = E [g(XτD )] ≤ g (x) ,         which proves (10.1.33) for x ∈ D .
Next, choose x ∈ ∂D to be an irregular boundary point of D. Then τD > 0
a.s. Qx . Let {αk } be a sequence of stopping times such that 0 < αk < τD
and αk → 0 a.s. Qx , as k → ∞. Then Xαk ∈ D so by (10.1.32), (7.2.6) and
the strong Markov property (7.2.2)
E x [g(XτD )] = E x [θαk g(XτD )] = E x [E Xαk [g(XτD )]] = E x [g ∗ (Xαk )] for all k .
Hence by lower semicontinuity and the Fatou lemma
       g ∗ (x) ≤ E x [ lim g ∗ (Xαk )] ≤ lim E x [g ∗ (Xαk )] = E x [g(XτD )] .
                            k→∞                k→∞

Finally, if x ∈ ∂D is a regular boundary point of D or if x 6∈ D we have
τD = 0 a.s. Qx and hence g ∗ (x) = E x [g(XτD )].                      t
                                                                       u
Remark. The following observation is sometimes useful:
  Let A be the characteristic operator of X. Assume g ∈ C 2 (Rn ). Define
                                     U = {x; Ag(x) > 0} .                           (10.1.34)
Then, with D as before, (10.1.20),
                                              U ⊂D.                                 (10.1.35)
Consequently, from (10.1.32) we conclude that it is never optimal to stop the
process before it exits from U . But there may be cases when U 6= D, so that
it is optimal to proceed beyond U before stopping. (This is in fact the typical
situation.) See e.g. Example 10.2.2.
     To prove (10.1.35) choose x ∈ U and let τ0 be the first exit time from a
bounded open set W 3 x, W ⊂ U . Then by Dynkin’s formula, for u > 0
                                              · τZ0 ∧u         ¸
                     x                           x
                    E [g(Xτ0 ∧u )] = g(x) + E         Ag(Xs )ds > g(x)
                                                        0
                ∗
so g(x) < g (x) and therefore x ∈ D.
206       10. Application to Optimal Stopping


Example 10.1.13. Let Xt = Bt be a Brownian motion in R2 . Using that Bt
is recurrent in R2 (Example 7.4.2) one can show that the only (nonnegative)
superharmonic functions in R2 are the constants (Exercise 10.2).
    Therefore

                g ∗ (x) = kgk∞ : = sup{g(y); y ∈ R2 }            for all x .

So if g is unbounded then g ∗ = ∞ and no optimal stopping time exists.
Assume therefore that g is bounded. The continuation region is

                             D = {x; g(x) < kgk∞ } ,

so if ∂D is a polar set i.e. cap (∂D) = 0, where cap denotes the logarithmic
capacity (see Port and Stone (1979)), then τD = ∞ a.s. and no optimal
stopping exists. On the other hand, if cap(∂D) > 0 then τD < ∞ a.s. and

                          E x [g(BτD )] = kgk∞ = g ∗ (x) ,

so τ ∗ = τD is optimal.
Example 10.1.14. The situation is different in Rn for n ≥ 3.
a) To illustrate this let Xt = Bt be Brownian motion in R3 and let the
   reward function be
                           ½ −1
                             |ξ|  for |ξ| ≥ 1
                   g(ξ) =                     ; ξ ∈ R3 .
                             1    for |ξ| < 1

   Then g is superharmonic (in the classical sense) in R3 , so g ∗ = g every-
   where and the best policy is to stop immediately, no matter where the
   starting point is.
b) Let us change g to
                                ½ −α
                                  |x|     for |x| ≥ 1
                        h(x) =
                                  1       for |x| < 1

      for some α > 1. Let H = {x; |x| > 1} and define
                        e
                        h(x) = E x [h(BτH )] = P x [τH < ∞] .

      Then by Example 7.4.2
                                      ½
                             e            1       if |x| ≤ 1
                             h(x) =
                                          |x|−1   if |x| > 1 ,

      i.e. e
           h = g (defined in a)), which is a superharmonic majorant of h. There-
      fore by Corollary 10.1.10
                                      h∗ = e h=g,
      H = D and τ ∗ = τH is an optimal stopping time.
                                       10.2 The Time-Inhomogeneous Case       207


Reward Functions Assuming Negative Values

The results we have obtained so far regarding the problem (10.1.2)–(10.1.3)
are based on the assumptions (10.1.1). To some extent these assumptions
can be relaxed, although neither can be removed completely. For example,
we have noted that Theorem 10.1.9 a) still holds if g ≥ 0 is only assumed to
be lower semicontinuous.
    The nonnegativity assumption on g can also be relaxed. First of all, note
that if g is bounded below, say g ≥ −M where M > 0 is a constant, then we
can put
                               g1 = g + M ≥ 0
and apply the theory to g1 . Since

              E x [g(Xτ )] = E x [g1 (Xτ )] − M        if τ < ∞ a.s. ,

we have g ∗ (x) = g1∗ (x) − M , so the problem can be reduced to the optimal
stopping problem for the nonnegative function g1 . (See Exercise 10.4.)
    If g is not bounded below, then problem (10.1.2)–(10.1.3) is not well-
defined unless
                          E x [g − (Xτ )] < ∞ for all τ             (10.1.36)
where
                            g − (x) = − min(g(x), 0) .
If we assume that g satisfies the stronger condition that

   the family {g − (Xτ ); τ stopping time} is uniformly integrable       (10.1.37)

then basically all the theory from the nonnegative case carries over. We re-
fer to the reader to Shiryaev (1978) for more information. See also Theo-
rem 10.4.1.


10.2 The Time-Inhomogeneous Case

Let us now consider the case when the reward function g depends on both
time and space, i.e.

         g = g(t, x): R × Rn → [0, ∞) ,           g is continuous .       (10.2.1)

Then the problem is to find g0 (x) and τ ∗ such that

                 g0 (x) = sup E x [g(τ, Xτ )] = E x [g(τ ∗ , Xτ ∗ )] .    (10.2.2)
                            τ

To reduce this case to the original case (10.1.2)–(10.1.3) we proceed as follows:
   Suppose the Itô diffusion Xt = Xtx has the form
208     10. Application to Optimal Stopping


               dXt = b(Xt )dt + σ(Xt )dBt ;              t ≥ 0 , X0 = x

where b: Rn → Rn and σ: Rn → Rn×m are given functions satisfying the con-
ditions of Theorem 5.2.1 and Bt is m-dimensional Brownian motion. Define
                          (s,x)
the Itô diffusion Yt = Yt      in Rn+1 by
                                  ·     ¸
                                    s+t
                            Yt =          ; t≥0.                 (10.2.3)
                                    Xtx

Then
              ·      ¸      ·        ¸
                1               0
        dYt =          dt +            dBt = bb(Yt )dt + σ
                                                         b(Yt )dBt           (10.2.4)
              b(Xt )          σ(Xt )

where
                                                                    
                     ·      ¸                                0···0
bb(η) = bb(t, ξ) =        1
                              ∈ Rn+1 ,    σ      b(t, ξ) =  - - - -  ∈ R(n+1)×m ,
                                          b(η) = σ
                         b(ξ)
                                                              σ(ξ)

with η = (t, ξ) ∈ R × Rn .
    So Yt is an Itô diffusion starting at y = (s, x). Let Ry = R(s,x) denote the
probability law of {Yt } and let E y = E (s,x) denote the expectation w.r.t. Ry .
In terms of Yt the problem (10.2.2) can be written

         g0 (x) = g ∗ (0, x) = sup E (0,x) [g(Yτ )] = E (0,x) [g(Yτ ∗ )]     (10.2.5)
                                     τ

which is a special case of the problem

                  g ∗ (s, x) = sup E (s,x) [g(Yτ )] = E (s,x) [g(Yτ ∗ )] ,   (10.2.6)
                                 τ

which is of the form (10.1.2)–(10.1.3) with Xt replaced by Yt .
   Note that the characteristic operator Ab of Yt is given by

        b          ∂φ
        Aφ(s, x) =    (s, x) + Aφ(s, x) ;             φ ∈ C 2 (R × Rn )      (10.2.7)
                   ∂s
where A is the characteristic operator of Xt (working on the x-variables).
Example 10.2.1. Let Xt = Bt be 1-dimensional Brownian motion and let
the reward function be

                             g(t, ξ) = e−αt+βξ ;        ξ∈R
                                                                               h         i
where α, β ≥ 0 are constants. The characteristic operator Ab of Yts,x =            s+t
                                                                                   Bt
                                                                                     x

is given by
                                        2
                   b (s, x) = ∂f + 1 · ∂ f ;
                  Af                              f ∈ C2 .
                              ∂s   2 ∂x2
                                                   10.2 The Time-Inhomogeneous Case        209


Thus
                                         Ag = (−α + 12 β 2 )g ,
so if β 2 ≤ 2α then g ∗ = g and the best policy is to stop immediately. If
β 2 > 2α we have
                                     b
                      U : = {(s, x); Ag(s, x) > 0} = R2
and therefore by (10.1.35) D = R2 and hence τ ∗ does not exist. If β 2 > 2α
we can use Theorem 10.1.7 to prove that g ∗ = ∞:
                                                        x
sup E (s,x) [g(Yt )] = sup E[e−α(s+t)+βBt ]
t∈Sn                      t∈Sn
              −α(s+t)        βx+ 12 β 2 t
  = sup [e              ·e                  ]               (see the remark following (5.1.6))
       t∈Sn
                        (−α+ 12 β 2 )t
  = sup g(s, x) · e                         = g(s, x) · exp((−α + 21 β 2 )2n ) ,
       t∈Sn

so gn (s, x) → ∞ as n → ∞.
    Hence no optimal stopping exists in this case.
Example 10.2.2. (When is the right time to sell the stocks?)
We now return to a specified version of Problem 5 in the introduction:
    Suppose the price Xt at time t of a person’s assets (e.g. a house, stocks,
oil ...) varies according to a stochastic differential equation of the form

                         dXt = rXt dt + αXt dBt , X0 = x > 0 ,

where Bt is 1-dimensional Brownian motion and r, α are known constants.
(The problem of estimating α and r from a series of observations can be
approached using the quadratic variation hX, Xit of the process {Xt } (Ex-
ercise 4.7) and filtering theory (Example 6.2.11), respectively. Suppose that
connected to the sale of the assets there is a fixed fee/tax or transaction cost
a > 0. Then if the person decides to sell at time t the discounted net of the
sale is
                                 e−ρt (Xt − a) ,
where ρ > 0 is given discounting factor. The problem is to find a stopping
time τ that maximizes

                        E (s,x) [e−ρτ (Xτ − a)] = E (s,x) [g(τ, Xτ )] ,

where
                                       g(t, ξ) = e−ρt (ξ − a) .
The characteristic operator Ab of the process Yt = (s + t, Xt ) is given by
                                               2
              b (s, x) = ∂f + rx ∂f + 1 α2 x2 ∂ f ;
              Af                                                        f ∈ C 2 (R2 ) .
                         ∂s      ∂x   2       ∂x2
210    10. Application to Optimal Stopping


      b
Hence Ag(s, x) = −ρe−ρs (x − a) + rxe−ρs = e−ρs ((r − ρ)x + ρa). So
                                     ½
                      b                R × R+            if r ≥ ρ
       U : = {(s, x); Ag(s, x) > 0} = {(s, x); x < aρ } if r < ρ .
                                                                       ρ−r

                                                               ∗
So if r ≥ ρ we have U = D = R × R+ so τ does not exist. If r > ρ then
g ∗ = ∞ while if r = ρ then

                                      g ∗ (s, x) = xe−ρs .

(The proofs of these statements are left as Exercise 10.5.)
    It remains to examine the case r < ρ. (If we regard ρ as the sum of
interest rate, inflation and tax etc., this is not an unreasonable assumption
in applications.) First we establish that the region D must be invariant w.r.t.
t, in the sense that

                                D + (t0 , 0) = D             for all t0 .           (10.2.8)

To prove (10.2.8) consider

D + (t0 , 0) = {(t + t0 , x); (t, x) ∈ D} = {(s, x); (s − t0 , x) ∈ D}
 = {(s, x); g(s − t0 , x) < g ∗ (s − t0 , x)} = {(s, x); eρt0 g(s, x) < eρt0 g ∗ (s, x)}
 = {(s, x); g(s, x) < g ∗ (s, x)} = D ,

where we have used that

g ∗ (s − t0 , x) = sup E (s−t0 ,x) [e−ρτ (Xτ − a)] = sup E[e−ρ(τ +(s−t0 )) (Xτx − a)]
                     τ                                      τ
                     ρt0             −ρ(τ +s)
               = e         sup E[e              (Xτ − a)] = eρt0 g ∗ (s, x) .
                                                  x
                            τ

Therefore the connected component of D that contains U must have the form
                                                                             aρ
            D(x0 ) = {(t, x); 0 < x < x0 }                    for some x0 ≥ ρ−r .

Note that D cannot have any other components, for if V is a component of
                       b < 0 in V and so, if y ∈ V ,
D disjoint from U then Ag
                                                      · Zτ            ¸
                     y
                  E [g(Yτ )] = g(y) + E           y          b
                                                             Ag(Yt )dt < g(y)
                                                       0

for all exit times τ bounded by the exit time from an x-bounded strip in V .
From this we conclude by Theorem 10.1.9 c) that g ∗ (y) = g(y), which implies
V = ∅.
    Put τ (x0 ) = τD(x0 ) and let us compute

                         ge(s, x) = gex0 (s, x) = E (s,x) [g(Yτ (x0 ) )] .          (10.2.9)
                                    10.2 The Time-Inhomogeneous Case           211


From Chapter 9 we know that f = ge is the (bounded) solution of the bound-
ary value problem
                                                            
                                 2                          
         ∂f      ∂f    1 2 2∂ f
            + rx    + 2α x         2
                                     =0      for 0 < x < x0       (10.2.10)
         ∂s      ∂x            ∂x                           
                    f (s, x0 ) = e−ρs (x0 − a) .

(Note that R × {0} does not contain any regular boundary points of D w.r.t.
Yt = (s + t, Xt ).)
   If we try a solution of (10.2.10) of the form

                              f (s, x) = e−ρs φ(x)

we get the following 1-dimensional problem
                                                                ¾
       −ρφ + rxφ0 (x) + 12 α2 x2 φ00 (x) = 0 for 0 < x < x0
                                                                         (10.2.11)
                                 φ(x0 ) = x0 − a .

The general solution φ of (10.2.11) is

                           φ(x) = C1 xγ1 + C2 xγ2 ,

where C1 , C2 are arbitrary constants and
            h           q                   i
  γi = α−2 12 α2 − r ± (r − 21 α2 )2 + 2ρα2           (i = 1, 2) , γ2 < 0 < γ1 .

Since φ(x) is bounded as x → 0 we must have C2 = 0 and the boundary
requirement φ(x0 ) = x0 − a gives C1 = x−γ 0
                                             1
                                               (x0 − a). We conclude that the
bounded solution f of (10.2.10) is
                                                µ ¶γ1
                                      −ρs         x
            gex0 (s, x) = f (s, x) = e (x0 − a)          .          (10.2.12)
                                                  x0

If we fix (s, x) then the value of x0 which maximizes gex0 (s, x) is easily seen
to be given by
                                            aγ1
                              x0 = xmax =                              (10.2.13)
                                           γ1 − 1
(note that γ1 > 1 if and only if r < ρ).
   Thus we have arrived at the candidate gexmax (s, x) for g ∗ (s, x) =
sup E (s,x) [e−ρτ (Xτ − a)]. To verify that we indeed have gexmax = g ∗ it would
 τ
suffice to prove that gexmax is a supermeanvalued majorant of g (see Corol-
lary 10.1.10). This can be done, but we do not give the details here, since this
problem can be solved more easily by Theorem 10.4.1 (see Example 10.4.2).
    The conclusion is therefore that one should sell the assets the first time
the price of them reaches the value xmax = γaγ    1
                                               1 −1
                                                    . The expected discounted
profit obtained from this strategy is
212    10. Application to Optimal Stopping

                                                           µ                 ¶γ1 −1 µ        ¶γ1
                 ∗                                   −ρs       γ1 − 1                   x
                g (s, x) = gexmax (s, x) = e                                                       .
                                                                  a                     γ1

Remark. The reader is invited to check that the value x0 = xmax is the
only value of x0 which makes the function

                               x → gex0 (s, x)           (given by (10.2.9))

continuously differentiable at x0 . This is not a coincidence. In fact, it illus-
trates a general phenomenon which is known as the high contact (or smooth
fit) principle. See Samuelson (1965), McKean (1965), Bather (1970) and
Shiryaev (1978). This principle is the basis of the fundamental connection
between optimal stopping and variational inequalities. Later in this chapter
we will discuss some aspects of this connection. More information can be
found in Bensoussan and Lions (1978) and Friedman (1976). See also Brekke
and Øksendal (1991).


10.3 Optimal Stopping Problems Involving an Integral

Let
                           dYt = b(Yt )dt + σ(Yt )dBt ,                       Y0 = y                   (10.3.1)
be an Itô diffusion in R . Let g: R → [0, ∞) be continuous and let f : Rk →
                                   k             k

[0, ∞) be Lipschits continuous with at most linear growth. (These conditions
can be relaxed. See (10.1.37) and Theorem 10.4.1.) Consider the optimal
stopping problem: Find G∗ (y) and τ ∗ such that

                         · Zτ                        ¸             · Zτ ∗                       ¸
   ∗                 y                                         y
 G (y) = sup E                  f (Yt )dt + g(Yτ ) = E                      f (Yt )dt + g(Yτ ∗ ) . (10.3.2)
            τ
                          0                                            0

This problem can be reduced to our original problem (10.1.2)–(10.1.3) by
proceeding as follows: Define the Itô diffusion Zt in Rk × R = Rk+1 by
        ·     ¸    ·         ¸      ·        ¸
          dYt        b(Yt )           σ(Yt )
 dZt =          :=             dt +            dBt ; Z0 = z = (y, w) . (10.3.3)
          dWt        f (Yt )            0

Then we see that

         G∗ (y) = sup E (y,0) [Wτ + g(Yτ )] = sup E (y,0) [G(Zτ )]                                     (10.3.4)
                           τ                                       τ

with

       G(z): = G(y, w): = g(y) + w ;                       z = (y, w) ∈ Rk × R .                       (10.3.5)
                        10.3 Optimal Stopping Problems Involving an Integral            213


This is again a problem of the type (10.1.2)–(10.1.3) with Xt replaced by Zt
and g replaced by G. Note that the connection between the characteristic
operators AY of Yt and AZ of Zt is given by
                                                    ∂φ
AZ φ(z) = AZ φ(y, w) = AY φ(y, w) + f (y)              ,     φ ∈ C 2 (Rk+1 ) .     (10.3.6)
                                                    ∂w
In particular, if G(y, w) = g(y) + w ∈ C 2 (Rk+1 ) then
                               AZ G(y, w) = AY g(y) + f (y) .                      (10.3.7)
Example 10.3.1. Consider the optimal stopping problem
                             · Zτ                   ¸
                           x        −ρt       −ρτ
              γ(x) = sup E        θe Xt dt + e    Xτ ,
                                  τ
                                         0

where
                        dXt = αXt dt + βXt dBt ;           X0 = x > 0
is geometric Brownian motion (α, β, θ constants, θ > 0). We put
                ·     ¸ ·     ¸       ·     ¸
                   dt      1             0
         dYt =         =        dt +          dBt ;     Y0 = (s, x)
                  dXt     αXt           βXt
and
                                              
              ·         ¸        1            0
                  dYt
      dZt =                 =  αXt  dt +  βXt  dBt ;             Z0 = (s, x, w) .
                  dWt
                               e−ρt Xt        0
Then with
                    f (y) = f (s, x) = θe−ρs x ,           g(y) = e−ρs x
and
                            G(s, x, w) = g(s, x) + w = e−ρs x + w
we have
            ∂G      ∂G 1 2 2 ∂ 2 G           ∂G
  AZ G =       + αx    + 2β x    2
                                   + θe−ρs x    = (−ρ + α + θ)e−ρs x .
            ∂s      ∂x        ∂x             ∂w
Hence
                                                       ½
                                                            R3   if ρ < α + θ
          U = {(s, x, w); AZ G(s, x, w) > 0} =
                                                            ∅    if ρ ≥ α + θ .
From this we conclude (see Exercise 10.6):
  If ρ ≥ α + θ then τ ∗ = 0
                    and G∗ (s, x, w) = G(s, x, w) = e−ρs x + w .                   (10.3.8)
                                  ∗
  If α < ρ < α + θ then τ does not exist
                                       θx −ρs
                   and G∗ (s, x, w) = ρ−α e   +w .                                 (10.3.9)
                        ∗                       ∗
  If ρ ≤ α then τ does not exist and G = ∞ .                                      (10.3.10)
214         10. Application to Optimal Stopping


10.4 Connection with Variational Inequalities
The ‘high contact principle’ says, roughly, that – under certain conditions –
the solution g ∗ of (10.1.2)–(10.1.3) is a C 1 function on Rn if g ∈ C 2 (Rn ).
This is a useful information which can help us to determine g ∗ . Indeed, this
principle is so useful that it is frequently applied in the literature also in cases
where its validity has not been rigorously proved.
   Fortunately it turns out to be easy to prove a sufficiency condition of
high contact type, i.e. a kind of verification theorem for optimal stopping,
which makes is easy to verify that a given candidate for g ∗ (that we may have
found by guessing or intuition) is actually equal to g ∗ . The result below is a
simplified variant of a result in Brekke and Øksendal (1991):
   In the following we fix a domain V in Rk and we let
                            dYt = b(Yt )dt + σ(Yt )dBt ;              Y0 = y          (10.4.1)
be an Itô diffusion in Rk . Define
                            T = T (y, ω) = inf{t > 0; Yt (ω) ∈
                                                             / V}.                    (10.4.2)
Let f : Rk → R, g: Rk → R be continuous functions satisfying
       ZT
        y
(a) E [ |f (Yt )|dt] < ∞                   for all y ∈ Rk                             (10.4.3)
            0
and
(b) the family {g − (Yτ ); τ stopping time, τ ≤ T } is uniformly integrable
    w.r.t. Ry (the probability law of Yt ), for all y ∈ Rk .            (10.4.4)

      Consider the following problem: Find Φ(y) and τ ∗ ≤ T such that
                                                                  ∗
                                 Φ(y) = sup J τ (y) = J τ (y) ,                       (10.4.5)
                                             τ ≤T

where
                                     · Zτ                     ¸
                    τ            y
                  J (y) = E                 f (Yt )dt + g(Yτ )        for τ ≤ T .
                                       0
                        0
Note that since J (y) = g(y) we have
                                Φ(y) ≥ g(y)            for all y ∈ V .                (10.4.6)
We can now formulate the variational inequalities. As usual we let
                                 k
                                 X                        X k
                                                 ∂                            ∂2
                 L = LY =              bi (y)       + 12      (σσ T )ij (y)
                                 i=1
                                                ∂yi      i,j=1
                                                                            ∂yi ∂yj

be the partial differential operator which coincides with the generator AY of
Yt on C02 (Rk ).
                               10.4 Connection with Variational Inequalities         215


Theorem 10.4.1 (Variational inequalities for optimal stopping).
Suppose we can find a function φ: V → R such that
(i)      φ ∈ C 1 (V ) ∩ C(V )
(ii)     φ ≥ g on V and φ = g on ∂V .
         Define
                              D = {x ∈ V ; φ(x) > g(x)} .
         Suppose Yt spends 0 time on ∂D a.s., i.e.
            ZT
          y
(iii)    E [ X∂D (Yt )dt] = 0 for all y ∈ V
              0
         and suppose that
(iv)     ∂D is a Lipschitz surface, i.e. ∂D is locally the graph of a function
         h: Rk−1 → R such that there exists K < ∞ with

                       |h(x) − h(y)| ≤ K|x − y|                 for all x, y .

       Moreover, suppose the following:
(v)    φ ∈ C 2 (V \ ∂D) and the second order derivatives of φ are locally
       bounded near ∂D
(vi) Lφ + f ≤ 0 on V \ D
(vii) Lφ + f = 0 on D
                            / D} < ∞ a.s. Ry for all y ∈ V
(viii) τD : = inf{t > 0; Yt ∈
       and
(ix) the family {φ(Yτ ); τ ≤ τD } is uniformly integrable w.r.t. Ry , for all
       y ∈V.
       Then
                                    · Zτ                    ¸
                                y
         φ(y) = Φ(y) = sup E               f (Yt )dt + g(Yτ ) ;        y∈V       (10.4.7)
                        τ ≤T
                                     0

and
                                            τ ∗ = τD                             (10.4.8)
is an optimal stopping time for this problem.
Proof. By (i), (iv) and (v) we can find a sequence of functions
φj ∈ C 2 (V ) ∩ C(V ), j = 1, 2, . . ., such that
       (a) φj → φ uniformly on compact subsets of V , as j → ∞
       (b) Lφj → Lφ uniformly on compact subsets of V \ ∂D, as j → ∞
       (c) {Lφj }∞
                 j=1 is locally bounded on V .

       (See Appendix D).
   For R > 0 put TR = min(R, inf {t > 0; |Yt | ≥ R}) and let τ ≤ T be a
stopping time. Let y ∈ V . Then by Dynkin’s formula
216     10. Application to Optimal Stopping


                                          · τZ∧TR           ¸
               y                                   y
            E [φj (Yτ ∧TR )] = φj (y) + E        Lφj (Yt )dt                    (10.4.9)
                                                       0

Hence by (a), (b), (c) and (iii) and the Fatou lemma

                                        · τZ∧TR                           ¸
                                          y
                           φ(y) = lim E        −Lφj (Yt )dt + φj (Yτ ∧TR )
                                   j→∞
                                               0
                                  · τZ∧TR                       ¸
                                y
                             ≥E          −Lφ(Yt )dt + φ(Yτ ∧TR ) .             (10.4.10)
                                      0

Therefore, by (ii), (iii), (vi) and (vii),
                                    · τZ∧TR                      ¸
                                     y
                           φ(y) ≥ E        f (Yt )dt + g(Yτ ∧TR ) .
                                          0

Hence by the Fatou lemma and (10.4.3), (10.4.4)
               · τZ∧TR                      ¸      · Zτ                   ¸
                       y                         y
  φ(y) ≥ lim E        f (Yt )dt + g(Yτ ∧TR ) ≥ E        f (Yt )dt + g(Yτ ) .
           R→∞
                             0                                     0

Since τ ≤ T was arbitrary, we conclude that

                                 φ(y) ≥ Φ(y)       for all y ∈ V .             (10.4.11)

If y ∈
     / D then φ(y) = g(y) ≤ Φ(y) so by (10.4.11) we have

  φ(y) = Φ(y) and τb = τb(y, ω): = 0                    is optimal for y ∈
                                                                         /D.   (10.4.12)

Next, suppose y ∈ D. Let {Dk }∞
                              k=1 be an increasing sequence of open sets Dk
                                          S
                                          ∞
such that Dk ⊂ D, Dk is compact and D =     Dk . Put τk = inf{t > 0; Yt 6∈ Dk },
                                                       k=1
k = 1, 2, . . . By Dynkin’s formula we have for y ∈ Dk ,
                          · τkZ∧TR                            ¸
                                      y
φ(y) = lim φj (y) = lim E         −Lφj (Yt )dt + φj (Yτk ∧TR )
         j→∞                  j→∞
                                          0
            · τkZ∧TR                        ¸      · τkZ∧TR                       ¸
          y                                      y
      = E           −Lφ(Yt )dt + φ(Yτk ∧TR ) = E           f (Yt )dt + φ(Yτk ∧TR )
                   0                                           0

So by uniform integrability and (ii), (vii), (viii) we get
                                   10.4 Connection with Variational Inequalities    217


                               · τkZ∧TR                       ¸
                                      y
              φ(y) =     lim E         f (Yt )dt + φ(Yτk ∧TR )
                       R,k→∞
                                           0
                             · ZτD                    ¸
                         y
                   = E               f (Yt )dt + g(YτD ) = J τD (y) ≤ Φ(y) .   (10.4.13)
                               0

Combining (10.4.11) and (10.4.13) we get
                             φ(y) ≥ Φ(y) ≥ J τD (y) = φ(y)
so
       φ(y) = Φ(y) and τb(y, ω): = τD            is optimal when y ∈ D .       (10.4.14)
From (10.4.12) and (10.4.14) we conclude that
                         φ(y) = Φ(y)             for all y ∈ V .
Moreover, the stopping time τb defined by
                                   ½
                                     0   for y ∈
                                               /D
                        τb(y, ω) =
                                     τD for y ∈ D
is optimal. By Theorem 10.1.12 we conclude that τD is optimal also.                   t
                                                                                      u
Example 10.4.2. To illustrate Theorem 10.4.1 let us apply it to reconsider
Example 10.2.2:
   Rather than proving (10.2.8) and the following properties of D, we now
simply guess/assume that D has the form
                                   D = {(s, x); 0 < x < x0 }
for some x0 > 0, which is intuitively reasonable. Then we solve (10.2.11) for
arbitrary x0 and we arrive at the following candidate φ for g ∗ :
                        ½ −ρs
                         e (x0 − a)( xx0 )γ1 for 0 < x < x0
              φ(s, x) =
                         e−ρs (x − a)          for x ≥ x0 .
The requirement that φ ∈ C 1 (Theorem 10.4.1 (i)) gives the value (10.2.13)
for x0 . It is clear that φ ∈ C 2 outside ∂D and by construction Lφ = 0 on
D. Moreover, conditions (iii), (iv), (viii) and (ix) clearly hold. It remains to
verify that

(ii) φ(s, x) > g(s, x) for 0 < x < x0 , i.e. φ(s, x) > e−ρs (x − a) for 0 < x < x0
   and
(v) Lφ(s, x) ≤ 0 for x > x0 , i.e. Lg(s, x) ≤ 0 for x > x0 .

    This is easily done by direct calculation (assuming r < ρ).
    We conclude that φ = g ∗ and τ ∗ = τD is optimal (with the value (10.2.13)
for x0 ).
218    10. Application to Optimal Stopping


Exercises
10.1. In each of the optimal stopping problems below find the supremum
      g ∗ and – if it exists – an optimal stopping time τ ∗ . (Here Bt denotes
      1-dimensional Brownian motion)
      a) g ∗ (x) = sup E x [Bτ2 ]
                      τ
       b) g ∗ (x) = sup E x [|Bτ |p ],
                      τ
          where p > 0.
                                2
       c) g ∗ (x) = sup E x [e−Bτ ]
                      τ
       d) g ∗ (s, x) = sup E (s,x) [e−ρ(s+τ ) cosh Bτ ]
                          τ
          where ρ > 0 and cosh x = 21 (ex + e−x ).

10.2. a) Prove that the only nonnegative (Bt -) superharmonic functions in
         R2 are the constants.
         (Hint: Suppose u is a nonnegative superharmonic function and that
         there exist x, y ∈ R2 such that
                                           u(x) < u(y) .
          Consider
                                            E x [u(Bτ )] ,
          where τ is the first hitting time for Bt of a small disc centered at
          y).
       b) Prove that the only nonnegative superharmonic functions in R are
          the constants and use this to find g ∗ (x) when
                                      ½
                                         xe−x for x > 0
                               g(x) =
                                         0      for x ≤ 0 .
       c) Let γ ∈ R, n ≥ 3 and define, for x ∈ Rn ,
                                     ½ γ
                                       |x|   for |x| ≥ 1
                            fγ (x) =
                                       1     for |x| < 1 .
          For what values of γ is fγ (·) (Bt )-) harmonic for |x| > 1 ? Prove
          that fγ is superharmonic in Rn iff γ ∈ [2 − n, 0] .

10.3. Find g ∗ , τ ∗ such that
                                                                           ∗
              g ∗ (s, x) = sup E (s,x) [e−ρ(s+τ ) Bτ2 ] = E (s,x) [e−ρ(s+τ ) Bτ2∗ ] ,
                              τ

       where Bt is 1-dimensional Brownian motion, ρ > 0 is constant.
       Hint: First assume that the continuation region has the form
                                  D = {(s, x); −x0 < x < x0 }
       for some x0 and then try to determine x0 . Then apply Theorem 10.4.1.
                                                                      Exercises   219


10.4. Let Xt be an Itô diffusion on Rn and g: Rn → R+ a continuous reward
      function. Define

              g ¦ (x) = sup{E x [g(Xτ )] ; τ stopping time, E x [τ ] < ∞} .

      Show that g ¦ = g ∗ .
      (Hint: If τ is a stopping time put τk = τ ∧ k for k = 1, 2, . . . and
      consider
                      E x [g(Xτ ) · Xτ <∞ ] ≤ E x [ lim g(Xτk )]) .
                                                       k→∞

10.5. With g, r, ρ as in Example 10.2.2 prove that
      a) if r > ρ then g ∗ = ∞,
      b) if r = ρ then g ∗ (s, x) = xe−ρs .
10.6. Prove statements (10.3.8), (10.3.9), (10.3.10) in Example 10.3.1.
10.7. As a supplement to Exercise 10.4 it is worth noting that if g is not
      bounded below then the two problems

                     g ∗ (x) = sup{E x [g(Xτ )] ; τ stopping time}

      and

               g ¦ (x) = sup{E x [g(Xτ )] ; τ stopping time, E x [τ ] < ∞}

      need not have the same solution. For example, if g(x) = x, Xt = Bt ∈ R
      prove that
                          g ∗ (x) = ∞    for all x ∈ R
      while
                            g ¦ (x) = x          for all x ∈ R .
      (See Exercise 7.4.)
10.8. Give an example with g not bounded below where Theorem 10.1.9 a)
      fails. (Hint: See Exercise 10.7.)
10.9. Solve the optimal stopping problem
                                         · Zτ                         ¸
                                     x
                      γ(x) = sup E              e−ρt Bt2 dt + e−ρτ Bτ2 .
                               τ
                                          0

10.10. Prove the following simple, but useful, observation, which can be
      regarded as an extension of (10.1.35):
      Let W = {(s, x); ∃τ with g(s, x) < E (s,x) [g(s + τ, Xτ )]}.
      Then W ⊂ D.
220    10. Application to Optimal Stopping


10.11. Consider the optimal stopping problem

                          g ∗ (s, x) = sup E (s,x) [e−ρ(s+τ ) Bτ+ ] ,
                                        τ

      where Bt ∈ R and x+ = max{x, 0}.
      a) Use the argument for (10.2.8) and Exercise 10.10 to prove that the
         continuation region D has the form

                                    D = {(s, x); x < x0 }

         for some x0 > 0.
      b) Determine x0 and find g ∗ .
      c) Verify the high contact principle:
                           ∂g ∗   ∂g
                                =            when (s, x) = (s, x0 ) ,
                           ∂x     ∂x
         where g(t, x) = e−ρt x+ .
10.12. The first time the high contact principle was formulated seems to
      be in a paper by Samuelson (1965), who studied the optimal time for
      selling an asset, if the reward obtained by selling at the time t and
      when price is ξ is given by

                                 g(t, ξ) = e−ρt (ξ − 1)+ .

      The price process is assumed to be a geometric Brownian motion Xt
      given by
                   dXt = rXt dt + αXt dBt ,    X0 = x > 0 ,
      where r < ρ.
      In other words, the problem is to find g ∗ , τ ∗ such that
                                                                        ∗
      g ∗ (s, x) = sup E (s,x) [e−ρ(s+τ ) (Xτ −1)+ ] = E (s,x) [e−ρ(s+τ ) (Xτ ∗ −1)+ ] .
                   τ

      a) Use the argument for (10.2.8) and Exercise 10.10 to prove that the
         continuation region D has the form

                                  D = {(s, x); 0 < x < x0 }
                         ρ
         for some x0 > ρ−r .
                            ρ
      b) For a given x0 > ρ−r solve the boundary value problem
                                        2
                  ∂f      ∂f   1 2 2∂ f
                 ∂s + rx ∂x + 2 α x ∂x2 = 0         for 0 < x < x0
                                    f (s, 0) = 0
                
                
                                  f (s, x0 ) = e−ρs (x0 − 1)+

         by trying f (s, x) = e−ρs φ(x).
                                                                         Exercises    221


      c) Determine x0 by using the high contact principle, i.e. by using that

                                    ∂f   ∂g
                                       =              when x = x0 .
                                    ∂x   ∂x
      d) With f, x0 as in b), c) define
                                  ½
                                     f (s, x) ;                  x < x0
                        γ(s, x) =
                                     e−ρs (x − 1)+ ;             x ≥ x0 .

            Use Theorem 10.4.1 to verify that γ = g ∗ and that τ ∗ = τD is
            optimal.

10.13. (A resource extraction problem)
      Suppose the price Pt of one unit of a resource (e.g. gas, oil) at time t
      is varying like a geometric Brownian motion

                           dPt = αPt dt + βPt dBt ;             P0 = p

      where Bt is 1-dimensional Brownian motion and α, β are constants.
      Let Qt denote the amount of remaining resources at time t. Assume
      that the rate of extraction is proportional to the remaining amount,
      so that
                           dQt = −λQt dt ;      Q0 = q
      where λ > 0 is a constant.
      If the running cost rate is K > 0 and we stop the extraction at the
      time τ = τ (ω) then the expected total discounted profit is given by
                                  · Zτ                                                  ¸
        τ               (s,p,q)
      J (s, p, q) = E                    (λPt Qt − K)e−ρ(s+t) dt + e−ρ(s+τ ) g(Pτ , Qτ ) ,
                                   0

      where ρ > 0 is the discounting exponent and g(p, q) is a given bequest
      function giving the value of the remaining resource amount q when the
      price is p.
      a) Write down the characteristic operator A of the diffusion process
                                       
                                     dt
                          dXt =  dPt  ;      X0 = (s, p, q)
                                    dQt

            and formulate the variational inequalities of Theorem 10.4.1 corre-
            sponding to the optimal stopping problem
                                                                  ∗
                         G∗ (s, p, q) = sup J τ (s, p, q) = J τ (s, p, q) .
                                               τ
222    10. Application to Optimal Stopping


      b) Assume that g(p, q) = pq and find the domain U corresponding to
         (10.1.34), (10.3.7), i.e.

                       U = {(s, p, q); A(e−ρs g(p, q)) + f (s, p, q) > 0} ,

          where
                                     f (s, p, q) = e−ρs (λpq − K) .
         Conclude that
         (i) if ρ ≥ α then τ ∗ = 0 and G∗ (s, p, q) = pqe−ρs
                                                  K
         (ii) if ρ < α then D ⊃ {(s, p, q); pq > α−ρ }.
                               ∗
      c) As a candidate for G when ρ < α we try a function of the form
                                   ½ −ρs
                                    e pq ;         0 < pq ≤ y0
                      φ(s, p, q) =
                                    e−ρs ψ(pq) ; pq > y0

         for a suitable ψ: R → R, and a suitable y0 . Use Theorem 10.4.1 to
         determine ψ, y0 and to verify that with this choice of ψ, y0 we have
         φ = G∗ and τ ∗ = inf{t > 0; Pt Qt ≤ y0 }, if ρ < α < ρ + λ.
      d) What happens if ρ + λ ≤ α ?
10.14. (Finding the optimal investment time (I))
      Solve the optimal stopping problem
                                      ·Z ∞                            ¸
              G∗ (s, p) = sup E (s,p)      e−ρ(s+t) Pt dt − Ce−ρ(s+τ ) ,
                                 τ                   τ

      where
                          dPt = αPt dt + βPt dBt ;                     P0 = p ,
      Bt is 1-dimensional Brownian motion and α, β, ρ, C are constants,
      0 < α < ρ and C > 0. (We may interprete this as the problem of
      finding the optimal time τ for investment in a project. The profit rate
      after investment is Pt and the cost of the investment is C. Thus G∗
      gives the maximal expected discounted net profit.)
                   R∞                    R∞           Rτ
      Hint: Write e−ρ(s+t) Pt dt = e−ρs [ e−ρt Pt dt − e−ρt Pt dt]. Compute
                   τ                                      0               0
        R∞
      E[ e−ρt Pt dt] by using the solution formula for Pt (see Chapter 5) and
         0
      then apply Theorem 10.4.1 to the problem
                                             ·       Zτ                                     ¸
                                     (s,p)                −ρ(s+t)                −ρ(s+τ )
               Φ(s, p) = sup E                   −        e         Pt dt − Ce                  .
                             τ
                                                     0

10.15. Let Bt be 1-dimensional Brownian motion and let ρ > 0 be constant.
                                                                     Exercises    223


      a) Show that the family

                                {e−ρτ Bτ ; τ stopping time}

         is uniformly integrable w.r.t. P x .
      b) Solve the optimal stopping problem

                       g ∗ (s, x) = sup E (s,x) [e−ρ(s+τ ) (Bτ − a)]
                                     τ

         when a > 0 is constant. This may be regarded as a variation of
         Example 10.2.2/10.4.2 with the price process represented by Bt
         rather than Xt .
10.16. (Finding the optimal investment time (II))
      Solve the optimal stopping problem
                                         · Z∞                                 ¸
               G∗ (s, p) = sup E (s,p)          e−ρ(s+t) Pt dt − Ce−ρ(s+τ )
                            τ
                                          τ

      where
                          dPt = µ dt + σ dBt ;            P0 = p
      with µ, σ 6= 0 constants. (Compare with Exercise 10.14.)
224   10. Application to Optimal Stopping
11. Application to Stochastic Control




11.1 Statement of the Problem
Suppose that the state of a system at time t is described by an Itô process
Xt of the form

                 dXt = dXtu = b(t, Xt , ut )dt + σ(t, Xt , ut )dBt ,              (11.1.1)

where Xt ∈ Rn , b: R × Rn × U → Rn , σ: R × Rn × U → Rn×m and Bt is m-
dimensional Brownian motion. Here ut ∈ U ⊂ Rk is a parameter whose value
we can choose in the given Borel set U at any instant t in order to control
the process Xt . Thus ut = u(t, ω) is a stochastic process. Since our decision
at time t must be based upon what has happened up to time t, the function
                                                       (m)
ω → u(t, ω) must (at least) be measurable w.r.t. Ft , i.e. the process ut
           (m)
must be Ft -adapted. Thus the right hand side of (11.1.1) is well-defined as
a stochastic integral, under suitable assumptions on the functions b and σ. At
the moment we will not specify the conditions on b and σ further, but simply
assume that the process Xt satisfying (11.1.1) exists. See further comments
on this in the end of this chapter.
    Let {Xhs,x }h≥s be the solution of (11.1.1) such that Xss,x = x, i.e.

                    Zh                           Zh
      Xhs,x = x +        b(r, Xrs,x , ur )dr +        σ(r, Xrs,x , ur )dBr ;   h≥s
                    s                            s

and let the probability law of Xt starting at x for t = s be denoted by Qs,x ,
so that

   Qs,x [Xt1 ∈ F1 , . . . , Xtk ∈ Fk ] = P 0 [Xts,x
                                                 1
                                                    ∈ F1 , . . . , Xts,x
                                                                      k
                                                                         ∈ Fk ]   (11.1.2)

for s ≤ ti , Fi ⊂ Rn ; 1 ≤ i ≤ k, k = 1, 2, . . .
    Let F : R×Rn ×U → R (the “utility rate” function) and K: R×Rn → R
(the “bequest” function) be given continuous functions, let G be a fixed
domain in R × Rn and let Tb be the first exit time after s from G for the
process {Xrs,x }r≥s , i.e.

          Tb = Tbs,x (ω) = inf{r > s; (r, Xrs,x (ω)) ∈
                                                     / G} ≤ ∞ .                   (11.1.3)
226         11. Application to Stochastic Control


Suppose
           · ZTb                                   ¸
 E   s,x          ur               b
                |F (r, Xr )|dr +|K(T , XTb)|X{Tb<∞} < ∞                                    for all s, x, u (11.1.4)
            s

where F u (r, z) = F (r, z, u). Then we define the performance function J u (s, x)
by

                                      · ZTb                                              ¸
             u
           J (s, x) = E         s,x
                                                  F   ur                  b
                                                           (r, Xr )dr + K(T , XTb)X{Tb<∞} .                       (11.1.5)
                                          s

To obtain an easier notation we introduce
                                           s,x
                             Yt = (s + t, Xs+t )                         for t ≥ 0, Y0 = (s, x)

and we observe that if we substitute this in (11.1.1) we get the equation

                               dYt = dYtu = b(Yt , ut )dt + σ(Yt , ut )dBt .                                      (11.1.6)

(Strictly speaking, the u, b and σ in (11.1.6) are slightly different from the
u, b and σ in (11.1.1).) The probability law of Yt starting at y = (s, x) for
t = 0 is (with slight abuse of notation) also denoted by Qs,x = Qy .
    Note that

            ZTb                                   b−s
                                                  Z
                                                  T                                        ZT
                      ur                                       us+t
                  F        (r, Xr )dr =                    F          (s + t, Xs+t )dt =           F us+t (Yt )dt ,
            s                                     0                                        0

where
                                                          / G} = Tb − s .
                                      T : = inf{t > 0; Yt ∈                                                       (11.1.7)
Moreover,
                                      K(Tb, XTb) = K(YTb−s ) = K(YT ) .
Therefore the performance function may be written in terms of Y as follows,
with y = (s, x),
                                          · ZT                                                 ¸
                       u              y                ut
                  J (y) = E                       F (Yt )dt + K(YT )X{T <∞} .                                     (11.1.8)
                                              0

(Strictly speaking this ut is a time shift of the ut in (11.1.6).)
   The problem is – for each y ∈ G – to find the number Φ(y) and a control
u∗ = u∗ (t, ω) = u∗ (y, t, ω) such that
                                                                                   ∗
                                          Φ(y): = sup J u (y) = J u (y)                                           (11.1.9)
                                                               u(t,ω)
                            11.2 The Hamilton-Jacobi-Bellman Equation        227

                                             (m)
where the supremum is taken over all Ft -adapted processes {ut } with
values in U . Such a control u∗ – if it exists – is called an optimal control and
Φ is called the optimal performance or the value function. Examples of types
of control functions that may be considered are:
(1) Functions of the form u(t, ω) = u(t) i.e. not depending on ω. These
    controls are sometimes called deterministic or open loop controls.
(2) Processes {ut } which are Mt -adapted, i.e. for each t the function ω →
    u(t, ω) is Mt -measurable, where Mt is the σ-algebra generated by
    {Xru ; r ≤ t}. These controls are called closed loop or feedback controls.
(3) The controller has only partial knowledge of the state of the system. More
    precisely, to the controller’s disposal are only (noisy) observations Rt of
    Xt , given by an Itô process of the form
                                                       bt ,
                         dRt = a(t, Xt )dt + γ(t, Xt )dB

    where B  b is a Brownian motion (not necessarily related to B). Hence the
    control process {ut } must be adapted w.r.t. the σ-algebra Nt generated
    by {Rs ; s ≤ t}. In this situation the stochastic control problem is linked
    to the filtering problem (Chapter 6). In fact, if the equation (11.1.1)
    is linear and the performance function is integral quadratic (i.e. F and
    K are quadratic) then the stochastic control problem splits into a linear
    filtering problem and a corresponding deterministic control problem. This
    is called the Separation Principle. See Example 11.2.4.
(4) Functions u(t, ω) of the form u(t, ω) = u0 (t, Xt (ω)) for some function
    u0 : Rn+1 → U ⊂ Rk . In this case we assume that u does not depend
    on the starting point y = (s, x): The value we choose at time t only
    depends on the state of the system at this time. These are called Markov
    controls, because with such u the corresponding process Xt becomes an
    Itô diffusion, in particular a Markov process. In the following we will not
    distinguish between u and u0 . Thus we will identify a function
    u: Rn+1 → U with the Markov control u(Y ) = u(t, Xt ) and simply call
    such functions Markov controls.


11.2 The Hamilton-Jacobi-Bellman Equation

Let us first consider only Markov controls

                               u = u(t, Xt (ω)) .

Introducing Yt = (s + t, Xs+t ) (as explained earlier) the system equation
becomes
                 dYt = b(Yt , u(Yt ))dt + σ(Yt , u(Yt ))dBt .      (11.2.1)
For v ∈ U and f ∈ C02 (R × Rn ) define
228       11. Application to Stochastic Control


                               Xn                 Xn
                      ∂f                     ∂f                    ∂2f
       (Lv f )(y) =      (y) +     bi (y, v)    +      aij (y, v)                         (11.2.2)
                      ∂s       i=1
                                             ∂xi i,j=1            ∂xi ∂xj

where aij = 12 (σσ T )ij , y = (s, x) and x = (x1 , . . . , xn ). Then for each choice
of the function u the solution Yt = Ytu is an Itô diffusion with generator A
given by

      (Af )(y) = (Lu(y) f )(y)               for f ∈ C02 (R × Rn ) (see Theorem 7.3.3) .

For v ∈ U define F v (y) = F (y, v). The first fundamental result in stochastic
control theory is the following:
Theorem 11.2.1 (The Hamilton-Jacobi-Bellman (HJB) equation (I)).
Define
           Φ(y) = sup{J u (y); u = u(Y ) Markov control} .
Suppose that Φ ∈ C 2 (G) ∩ C(G ) satisfies
                                   ·                Zα                 ¸
                               y                             v
                           E           |Φ(Yα )| +          |L Φ(Yt )|dt < ∞
                                                      0

for all bounded stopping times α ≤ T , all y ∈ G and all v ∈ U . Moreover,
suppose that T < ∞ a.s. Qy for all y ∈ G and that an optimal Markov control
                                        ∗
u∗ exists. Suppose ∂G is regular for Ytu (Definition 9.2.8). Then

                  sup {F v (y) + (Lv Φ)(y)} = 0                      for all y ∈ G        (11.2.3)
                  v∈U

and
                           Φ(y) = K(y)                      for all y ∈ ∂G .              (11.2.4)
The supremum in (11.2.3) is obtained if v = u∗ (y) where u∗ (y) is optimal.
In other words,
                                         ∗
            F (y, u∗ (y)) + (Lu (y) Φ)(y) = 0                     for all y ∈ G .         (11.2.5)

Proof. The last two statements are easy to prove: Since u∗ = u∗ (y) is optimal
we have
                                                 · ZT                                ¸
                           u∗                y                   ∗
               Φ(y) = J         (y) = E                   F (Ys , u (Ys ))ds + K(YT ) .
                                                  0

If y ∈ ∂G then T = 0 a.s. Qy (since ∂G is regular) and (11.2.4) follows. By
the solution of the Dirichlet-Poisson problem (Theorem 9.3.3)
                       ∗
                  (Lu (y) Φ)(y) = −F (y, u∗ (y))                     for all y ∈ G ,
                              11.2 The Hamilton-Jacobi-Bellman Equation                                  229


which is (11.2.5). We proceed to prove (11.2.3). Fix y = (s, x) ∈ G and choose
a Markov control u. Let α ≤ T be a stopping time.
   Since
                                 · ZT                   ¸
                      u        y       u
                    J (y) = E         F (Yr )dr + K(YT ) ,
                                               0

we get by the strong Markov property (7.2.5), combined with (7.2.6) and
(9.3.7)

                         h    · ZT                    ¸i
           y   u           Yα y     u
         E [J (Yα )] = E E         F (Yr )dr + K(YT )
                                                   0

                            h h µ ZT                     ¶¯ ii
                                                          ¯
                        = E E y θα
                              y
                                     F u (Yr )dr + K(YT ) ¯Fα
                                                            0

                            h                 · ZT                                     ¸i
                        = Ey Ey                        F u (Yr )dr + K(YT )|Fα
                                               α
                                  · ZT                                          Zα               ¸
                              y                 u                                     u
                        = E                   F (Yr )dr + K(YT ) −                   F (Yr )dr
                                      0                                         0
                                                        · Zα               ¸
                           u                        y
                        = J (y) − E                             F u (Yr )dr .
                                                            0

So
                                      · Zα                        ¸
                    u             y
                   J (y) = E                   F (Yr )dr + E y [J u (Yα )] .
                                                    u
                                                                                                     (11.2.6)
                                          0

Now let W ⊂ G be of the form W = {(r, z) ∈ G; r < t1 } where s < t1 . Put
α = inf{t ≥ 0; Yt 6∈ W }. Suppose an optimal control u∗ (y) = u∗ (r, z) exists
and choose                    ½
                                    v       if (r, z) ∈ W
                    u(r, z) =
                                u∗ (r, z) if (r, z) ∈ G \ W
where v ∈ U is arbitrary. Then
                                                        ∗
                          Φ(Yα ) = J u (Yα ) = J u (Yα )                                             (11.2.7)
230    11. Application to Stochastic Control




and therefore, combining (11.2.6) and (11.2.7) we obtain
                                            · Zα              ¸
                      u                 y
          Φ(y) ≥ J (y) = E                         F v (Yr )dr + E y [Φ(Yα )] .             (11.2.8)
                                             0

Since Φ ∈ C 2 (G) we get by Dynkin’s formula
                                                             · Zα                ¸
                    E y [Φ(Yα )] = Φ(y) + E y                       (Lu Φ)(Yr )dr ,
                                                              0

which substituted in (11.2.8) gives
                          · Zα               ¸             · Zα               ¸
          Φ(y) ≥ E y              F v (Yr )dr + Φ(y) + E y      (Lv Φ)(Yr )dr
                              0                                           0

or
                              · Zα                                       ¸
                          y             v                v
                      E               (F (Yr ) + (L Φ)(Yr ))dr ≤ 0 .
                                  0
So
               £ Rα v                        ¤
          Ey       (F (Yr ) + (Lv Φ)(Yr ))dr
                0
                                                              ≤0         for all such W .
                              E y [α]
Letting t1 ↓ s we obtain, since F v (·) and (Lv Φ)(·) are continuous at y, that
F v (y) + (Lv Φ)(y) ≤ 0, which combined with (11.2.5) gives (11.2.3). That
completes the proof.                                                         t
                                                                             u
Remark. The HJB (I) equation states that if an optimal control u∗ exists,
then we know that its value v at the point y is a point v where the function

                          v → F v (y) + (Lv Φ)(y) ;                      v∈U
                                  11.2 The Hamilton-Jacobi-Bellman Equation     231


attains its maximum (and this maximum is 0). Thus the original stochastic
control problem is associated to the easier problem of finding the maximum
of a real function in U ⊂ Rk . However, the HJB (I) equation only states that
it is necessary that v = u∗ (y) is the maximum of this function. It is just as
important to know if this is also sufficient: If at each point y we have found
v = u0 (y) such that F v (y) + (Lv Φ)(y) is maximal and this maximum is 0,
will u0 (Y ) be an optimal control? The next result states that (under some
conditions) this is actually the case:
Theorem 11.2.2 (The HJB (II) equation – a converse of HJB (I)).

Let φ be a function in C 2 (G) ∩ C(G ) such that, for all v ∈ U ,

                            F v (y) + (Lv φ)(y) ≤ 0 ;       y∈G             (11.2.9)

with boundary values

                        lim φ(Yt ) = K(YT ) · X{T <∞}        a.s. Qy       (11.2.10)
                        t→T

and such that

           {φ(Yτ )}τ ≤T         is uniformly Qy -integrable for all Markov
                                controls u and all y ∈ G .                 (11.2.11)

Then

       φ(y) ≥ J u (y)       for all Markov controls u and all y ∈ G .      (11.2.12)

Moreover, if for each y ∈ G we have found u0 (y) such that

                               F u0 (y) (y) + (Lu0 (y) φ)(y) = 0           (11.2.13)

then u0 = u0 (y) is a Markov control such that

                                       φ(y) = J u0 (y)

and hence u0 must be an optimal control and φ(y) = Φ(y).
Proof. Assume that φ satisfies (11.2.9) and (11.2.10) above. Let u be a
Markov control. Since Lu φ ≤ −F u in G we have by Dynkin’s formula
                                          · ZTR              ¸
                        y                         y
                   E [φ(YTR )] = φ(y) + E      (Lu φ)(Yr )dr
                                                      0
                                                 · ZTR          ¸
                                               y       u
                                    ≤ φ(y) − E        F (Yr )dr
                                                      0
232     11. Application to Stochastic Control


where
                     TR = min{R, T, inf{t > 0; |Yt | ≥ R}}                      (11.2.14)
for all R < ∞. This gives, by (11.1.4), (11.2.10) and (11.2.11)

                     · ZTR                     ¸
                     y
            φ(y) ≥ E      F u (Yr )dr + φ(YTR )
                           0
                         · ZT                              ¸
                → Ey            F u (Yr )dr + K(YT )X{T <∞} = J u (y)
                          0

as R → ∞, which proves (11.2.12). If u0 is such that (11.2.13) holds, then
the calculations above give equality and the proof is complete.          t
                                                                         u
   The HJB equations (I), (II) provide a very nice solution to the stochastic
control problem in the case where only Markov controls are considered. One
might feel that considering only Markov controls is too restrictive, but for-
tunately one can always obtain as good performance with a Markov control
                       (m)
as with an arbitrary Ft -adapted control, at least if some extra conditions
are satisfied:
Theorem 11.2.3. Let

               ΦM (y) = sup{J u (y); u = u(Y ) Markov control}

and
                                                    (m)
           Φa (y) = sup{J u (y); u = u(t, ω) Ft           -adapted control} .
Suppose there exists an optimal Markov control u0 = u0 (Y ) for the Markov
control problem (i.e. ΦM (y) = J u0 (y) for all y ∈ G) such that all the boundary
points of G are regular w.r.t. Ytu0 and that ΦM is a function in C 2 (G)∩C(G )
satisfying
                        ·            Zα                ¸
                    E |ΦM (Yα )| + |Lu ΦM (Yt )|dt < ∞
                      y
                                                                         (11.2.15)
                                         0

for all bounded stopping times α ≤ T , all adapted controls u and all y ∈ G.
Then
                     ΦM (y) = Φa (y)     for all y ∈ G .
Proof. Let φ be a function in C 2 (G) ∩ C(G ) satisfying (11.2.15) and

           F v (y) + (Lv φ)(y) ≤ 0           for all y ∈ G, v ∈ U               (11.2.16)

and
                         φ(y) = K(y)           for all y ∈ ∂G .                 (11.2.17)
                               11.2 The Hamilton-Jacobi-Bellman Equation               233

                                 (m)
Let ut (ω) = u(t, ω) be an Ft -adapted control. Then Yt is an Itô process
given by
                      dYt = b(Yt , ut )dt + σ(Yt , ut )dBt
so by Lemma 7.3.2, with TR as in (11.2.14),

                                        · ZTR                  ¸
                  y                            y
                 E [φ(YTR )] = φ(y) + E      (Lu(t,ω) φ)(Yt )dt ,
                                                   0

where

   (Lu(t,ω) φ)(y) =
                  Xn                             Xn
        ∂φ                            ∂φ                                ∂2φ
     =      (y) +     bi (y, u(t, ω))     (y) +       aij (y, u(t, ω))         (y) ,
         ∂t       i=1
                                      ∂xi       i,j=1
                                                                       ∂xi ∂xj

with aij = 12 (σσ T )ij . Thus by (11.2.16) and (11.2.17) this gives

                                  · ZTR                  ¸
             y                         y
           E [φ(YTR )] ≤ φ(y) − E      F (Yt , u(t, ω))dt .                   (11.2.18)
                                           0

Letting R → ∞ we obtain
                                   φ(y) ≥ J u (y) .                           (11.2.19)
But by Theorem 11.2.1 the function φ(y) = ΦM (y) satisfies (11.2.16) and
(11.2.17). So by (11.2.19) we have ΦM (y) ≥ Φa (y) and Theorem 11.2.3 fol-
lows.                                                                   t
                                                                        u
Remark. The theory above also applies to the corresponding minimum
problem                                     ∗
                   Ψ (y) = inf J u (y) = J u (y) .         (11.2.20)
                                       u

To see the connection we note that

                                     n · ZT                     ¸o
                           u            y     u
        Ψ (y) = − sup{−J (y)} = − sup E     −F (Yt )dt − K(Yt )
                   u                       u
                                                         0

so −Ψ coincides with the solution Φ of the problem (11.1.9), but with F
replaced by −F and K replaced by −K. Using this, we see that the HJB
equations apply to Ψ also but with reverse inequalities. For example, equation
(11.2.3) for Φ gets for Ψ the form

           inf {F v (y) + (Lv Ψ )(y)} = 0              for all y ∈ G .        (11.2.21)
           v∈U

   We now illustrate the results by some examples:
234    11. Application to Stochastic Control


Example 11.2.4 (The linear stochastic regulator problem).
Suppose that the state Xt of the system at time t is given by a linear stochastic
differential equation:

       dXt = (Ht Xt + Mt ut )dt + σt dBt ,           t ≥ s ; Xs = x       (11.2.22)

and the cost is of the form
                     · Zt1                                   ¸
 u             s,x          T          T              T
J (s, x) = E              {Xt Ct Xt + ut Dt ut }dt + Xt1 RXt1 ,    s ≤ t1 (11.2.23)
                      s

where all the coefficients Ht ∈ Rn×n , Mt ∈ Rn×k , σt ∈ Rn×m , Ct ∈ Rn×n ,
Dt ∈ Rk×k and R ∈ Rn×n are t-continuous and deterministic. We assume
that Ct and R are symmetric, nonnegative definite and Dt is symmetric,
positive definite, for all t. We also assume that t1 is a deterministic time.
    The problem is then to choose the control u = u(t, Xt ) ∈ Rk such that
it minimizes J u (s, x). We may interpret this as follows: The aim is to find a
control u which makes |Xt | small fast and such that the energy used
(∼ uT Du) is small. The sizes of Ct and R reflect the cost of having large
values of |Xt |, while the size of Dt reflects the cost (energy) of applying large
values of |ut |.
    In this case the HJB-equation for Ψ (s, x) = inf J u (s, x) becomes
                                                          u

                          v           v
          0 = inf {F (s, x) + (L Ψ )(s, x)}
               v
                          ½                      Xn
              ∂Ψ                                                    ∂Ψ
            =      + inf xT Cs x + v T Ds v +        (Hs x + Ms v)i
               ∂s       v
                                                 i=1
                                                                    ∂xi
                       Xn                      ¾
                                        ∂2Ψ
                 + 12      (σs σsT )ij           for s < t1             (11.2.24)
                      i,j=1
                                       ∂xi ∂xj

and
                                   Ψ (t1 , x) = xT Rx .                   (11.2.25)
Let us try to find a solution ψ of (11.2.24)–(11.2.25) of the form

                                 ψ(t, x) = xT St x + at                   (11.2.26)

where S(t) = St ∈ Rn×n is symmetric, nonnegative definite, at ∈ R and
both at and St are continuously differentiable w.r.t. t (and deterministic). In
order to use Theorem 11.2.2 we need to determine St and at such that

            inf {F v (t, x) + (Lv ψ)(t, x)} = 0       for t < t1          (11.2.27)
             v

and
                                   ψ(t1 , x) = xT Rx .                    (11.2.28)
                                11.2 The Hamilton-Jacobi-Bellman Equation          235


To obtain (11.2.28) we put

                                          S t1 = R                           (11.2.29)
                                          at1 = 0 .                          (11.2.30)

Using (11.2.26) we get

            F v (t, x) + (Lv ψ)(t, x) = xT St0 x + a0t + xT Ct x + v T Dt v +
                                                      X
                  +(Ht x + Mt v)T (St x + StT x) +       (σt σtT )ij Sij ,    (11.2.31)
                                                      i,j

            d               d
where St0 = dt St , a0t = dt  at . The minimum of this expression is obtained
when
               ∂
                  (F v (t, x) + (Lv ψ)(t, x)) = 0 ;  i = 1, . . . , k
             ∂vi
i.e. when
                               2Dt v + 2MtT St x = 0
i.e. when
                                 v = −Dt−1 MtT St x .                        (11.2.32)
We substitute this value of v in (11.2.31) and obtain

     F v (t, x) + (Lv ψ)(t, x) =
       = xT St0 x + a0t + xT Ct x + xT St Mt Dt−1 Dt Dt−1 MtT St x
           +(Ht x − Mt Dt−1 MtT St x)T 2St x + tr(σσ T S)t
       = xT (St0 + Ct − St Mt Dt−1 MtT St + 2HtT St )x + a0t + tr(σσ T S)t ,

where tr denotes the (matrix) trace. We obtain that this is 0 if we choose St
such that

        St0 = −2HtT St + St Mt Dt−1 MtT St − Ct ;             t < t1         (11.2.33)

and at such that
                           a0t = −tr(σσ T S)t ;        t < t1 .              (11.2.34)
We recognize (11.2.33) as a Riccati type equation from linear filtering the-
ory (see (6.3.4)). Equation (11.2.33) with boundary condition (11.2.29) de-
termines St uniquely. Combining (11.2.34) with the boundary condition
(11.2.30) we obtain
                                 Zt1
                           at = tr(σσ T S)s ds .                   (11.2.35)
                                      t

With such a choice of St and at we see that (11.2.27) and (11.2.28) hold, so
by Theorem 11.2.2 we conclude that

                        u∗ (t, x) = −Dt−1 MtT St x ,        t < t1           (11.2.36)
236    11. Application to Stochastic Control


is an optimal control and the minimum cost is
                                Zt1
                      T
          Ψ (s, x) = x Ss x +         tr(σσ T S)t dt ,   s < t1 .     (11.2.37)
                                s

This formula shows that the extra cost due to the noise in the system is given
by
                                Zt1
                           as = tr(σσ T S)t dt .
                                       s

The Separation Principle (see Davis (1977), Davis and Vinter (1985) or Flem-
ing and Rishel (1975)) states that if we had only partial knowledge of the
state Xt of the system, i.e. if we only had noisy observations
                                                   et
                              dZt = gt Xt dt + γt dB                  (11.2.38)

to our disposal, then the optimal control u∗ (t, ω) (required to be Gt -adapted,
where Gt is the σ-algebra generated by {Zr ; r ≤ t}), would be given by

                                                   bt (ω) ,
                          u∗ (t, ω) = −Dt−1 MtT St X                  (11.2.39)

where Xbt is the filtered estimate of Xt based on the observations {Zr ; r ≤ t},
given by the Kalman-Bucy filter (6.3.3). Comparing with (11.2.36) we see
that the stochastic control problem in this case splits into a linear filtering
problem and a deterministic control problem.
   An important field of applications of the stochastic control theory is eco-
nomics and finance. Therefore we illustrate the results above by applying
them to a simple case of optimal portfolio diversification. This problem has
been considered in more general settings by many authors, see for example
Markowitz (1976), Merton (1971), Harrison and Pliska (1981), Aase (1984),
Karatzas, Lehoczky and Shreve (1987) and the survey article Duffie (1994)
and the references therein.
Example 11.2.5 (An optimal portfolio selection problem).
Let Xt denote the wealth of a person at time t. Suppose that the person has
the choice of two different investments. The price p1 (t) at time t of one of
the assets is assumed to satisfy the equation
                                dp1
                                    = p1 (a + αWt )                   (11.2.40)
                                 dt
where Wt denotes white noise and a, α > 0 are constants measuring the
average relative rate of change of p and the size of the noise, respectively.
As we have discussed earlier we interpret (11.2.40) as the (Itô) stochastic
differential equation
                               11.2 The Hamilton-Jacobi-Bellman Equation       237


                              dp1 = p1 adt + p1 αdBt .                    (11.2.41)
This investment is called risky, since α > 0. We assume that the price p2 of
the other asset satisfies a similar equation, but with no noise:

                                     dp2 = p2 bdt .                       (11.2.42)

This investment is called safe. So it is natural to assume b < a. At each
instant the person can choose how big fraction u of his wealth he will invest
in the risky asset, thereby investing the fraction 1 − u in the safe one. This
gives the following stochastic differential equation for the wealth Xt = Xtu :

                   dXt = uXt adt + uXt αdBt + (1 − u)Xt bdt
                       = Xt (au + b(1 − u))dt + αuXt dBt .                (11.2.43)

Suppose that, starting with the wealth Xt = x > 0 at time t, the person
wants to maximize the expected utility of the wealth at some future time
t0 > t. If we allow no borrowing (i.e. require X ≥ 0) and are given a utility
function N : [0, ∞) → [0, ∞), N (0) = 0 (usually assumed to be increasing and
concave) the problem is to find Φ(s, x) and a (Markov) control u∗ = u∗ (t, Xt ),
0 ≤ u∗ ≤ 1, such that
                                                                      ∗
   Φ(s, x) = sup{J u (s, x); u Markov control, 0 ≤ u ≤ 1} = J u (s, x) ,
                             where J u (s, x) = E s,x [N (XTu )]    (11.2.44)

and T is the first exit time from the region G = {(r, z); r < t0 , z > 0}. This is
a performance criterion of the form (11.1.6)/(11.1.8) with F = 0 and K = N .
The differential operator Lv has the form (see (11.2.2))

                        ∂f                    ∂f               ∂2f
      (Lv f )(t, x) =      + x(av + b(1 − v))    + 21 α2 v 2 x2 2 .       (11.2.45)
                        ∂t                    ∂x               ∂x
The HJB equation becomes

              sup{(Lv Φ)(t, x)} = 0 ,         for (t, x) ∈ G ;            (11.2.46)
               v

and

   Φ(t, x) = N (x) for t = t0 ,           Φ(t, 0) = N (0) for t < t0 .    (11.2.47)

Therefore, for each (t, x) we try to find the value v = u(t, x) which maximizes
the function
                        ∂Φ                   ∂Φ 1 2 2 2 ∂ 2 Φ
      η(v) = Lv Φ =        + x(b + (a − b)v)    + 2α v x      .           (11.2.48)
                        ∂t                   ∂x          ∂x2
                                 2
If Φx : = ∂Φ                 ∂ Φ
          ∂x > 0 and Φxx : = ∂x2 < 0, the solution is
238      11. Application to Stochastic Control


                                                       (a − b)Φx
                                    v = u(t, x) = −              .                   (11.2.49)
                                                        xα2 Φxx
If we substitute this into the HJB equation (11.2.48) we get the following
nonlinear boundary value problem for Φ :

                                (a − b)2 Φ2x
           Φt + bxΦx −                       =0          for t < t0 , x > 0          (11.2.50)
                                  2α2 Φxx
                      Φ(t, x) = N (x)                for t = t0 or x = 0 .           (11.2.51)
The problem (11.2.50), (11.2.51) is hard to solve for general N . Important
examples of increasing and concave functions are the power functions

                            N (x) = xr           where 0 < r < 1 .                   (11.2.52)

If we choose such a utility function N , we try to find a solution of (11.2.50),
(11.2.51) of the form
                               φ(t, x) = f (t)xr .
Substituting we obtain
                                       φ(t, x) = eλ(t0 −t) xr ,                      (11.2.53)
                            2
                (a−b) r
where λ = br + 2α 2 (1−r) .

   Using (11.2.49) we obtain the optimal control

                                                       a−b
                                       u∗ (t, x) =                .                  (11.2.54)
                                                     α2 (1 − r)

If α2a−b
       (1−r) ∈ (0, 1) this is the solution to the problem, in virtue of Theo-
rem 11.2.2. Note that u∗ is in fact constant.
    Another interesting choice of the utility function is N (x) = log x, called
the Kelly criterion. As noted by Aase (1984) (in a more general setting)
we may in this case obtain the optimal control directly by evaluating
E s,x [log(XT )] using Dynkin’s formula:

      E s,x [log(XT )] =
                            · ZT                                                        ¸
                      s,x
        = log x + E                 {au(t, Xt ) + b(1 − u(t, Xt )) − 21 α2 u2 (t, Xt )}dt
                                s

since Lv (log x) = av + b(1 − v) − 21 α2 v 2 .
    So it is clear that J u (s, x) = E s,x [log(XT )] is maximal if we for all r, z
choose u(s, z) to have the value of v which maximizes

                                      av + b(1 − v) − 12 α2 v 2

i.e. we choose
                           11.2 The Hamilton-Jacobi-Bellman Equation      239

                                   a−b
                    v = u(t, Xt ) =          for all t, ω .         (11.2.55)
                                    α2
So this is the optimal control if the Kelly criterion is used. Similarly, this
direct method also gives the optimal control when N (x) = xr (See Exer-
cise 11.8).
Example 11.2.6. Finally we include an example which shows that even
quite simple – and apparently innocent – stochastic control problems can
lead us beyond the reach of the theory developed in this chapter:
    Suppose the system is a 1-dimensional Itô integral

         dXt = dXtu = u(t, ω)dBt ,        t ≥ s; Xs = x > 0          (11.2.56)

and consider the stochastic control problem

                         Φ(t, x) = sup E t,x [K(Xτu )] ,             (11.2.57)
                                      u

where τ is the first exit time from G = {(r, z); r ≤ t1 , z > 0} for Yt =
         s,x
(s + t, Xs+t ) and K is a given bounded continuous function.




    Intuitively, we can think of the system as the state of a game which
behaves like an “excited” Brownian motion, where we can control the size u
of the excitation at every instant. The purpose of the control is to maximize
the expected payoff K(Xt1 ) of the game at a fixed future time t1 .
    Assuming that Φ ∈ C 2 and that u∗ exists we get by the HJB (I) equation
         ½                ¾
            ∂Φ 1 2 ∂ 2 Φ
     sup        + 2v        =0      for t < t1 , Φ(t1 , x) = K(x) .  (11.2.58)
     v∈R    ∂t        ∂x2

From this we see that we necessarily have
240    11. Application to Stochastic Control


        ∂2Φ               ∂2Φ                   ∂Φ
            ≤0,      v∗       =0     and           =0   for t < t1 ,   (11.2.59)
        ∂x2               ∂x2                   ∂t
where v ∗ is the value of v ∈ R which gives the supremum in (11.2.58). But
if ∂Φ
   ∂t = 0, then Φ(t, x) = Φ(t1 , x) = K(x). However, this cannot possibly be
                                                            2
the solution in general, because we have not assumed that ∂∂xK2 ≤ 0 – in fact,
K was not even assumed to be differentiable.
    What went wrong? Since the conclusion of the HJB (I) equation was
wrong, the assumptions cannot hold. So either Φ is not C 2 or u∗ does not
exist, or both.
    To simplify the problem assume that
                                   ½ 2
                                     x ; 0≤x≤1
                          K(x) =
                                     1 ;   x>1.

Then considering the figure above and using some intuition we see that it
is optimal to excite as much as possible if Xt is in the strip 0 < x < 1 to
avoid exiting from G in the interval {t1 } × (0, 1). Using that Xt is just a time
change of Brownian motion (see Chapter 8) we conclude that this optimal
control leads to a process X ∗ which jumps immediately to the value 1 with
probability x and to the value 0 with probability 1 − x, if the starting point
is x ∈ (0, 1). If the starting point is x ∈ [1, ∞) we simply choose our control
to be zero. In other words, heuristically we should have
                                    ½
                           ∗          ∞ if x ∈ (0, 1)
                         u (t, x) =                                     (11.2.60)
                                       0 if x ∈ [1, ∞)

with corresponding expected payoff
                                            ½
                                                x if 0 ≤ x ≤ 1
           φ∗ (s, x) = E s,x [K(Xt∗1 )] =                              (11.2.61)
                                                1 if   x>1.

Thus we see that our candidate u∗ for optimal control is not continuous
(not even finite!) and the corresponding optimal process Xt∗ is not an Itô
diffusion (it is not even continuous). So to handle this case mathematically
it is necessary to enlarge the family of admissible controls (and the family of
corresponding processes). For example, one can prove an extended version of
Theorem 11.2.2 which allows us to conclude that our choice of u∗ above does
indeed give at least as good performance as any other Markov control u and
that φ∗ given by (11.2.61) does coincide with the maximal expected payoff Φ
defined by (11.2.57).

    This last example illustrates the importance of the question of existence
in general, both of the optimal control u∗ and of the corresponding solution
Xt of the stochastic differential equation (11.1.1). We briefly outline some
results in this direction:
               11.3 Stochastic control problems with terminal conditions                 241


    With certain conditions on b, σ, F, ∂G and assuming that the set of control
values is compact, one can show, using general results from nonlinear partial
differential equations, that a smooth function φ exists such that

                 sup{F v (y) + (Lv φ)(y)} = 0                       for y ∈ G
                   v

and
                            φ(y) = K(y)                for y ∈ ∂G .
Then by a measurable selection theorem one can find a (measurable) function
u∗ (y) such that            ∗         ∗
                         F u (y) + (Lu φ)(y) = 0 ,                (11.2.62)
for a.a. y ∈ G w.r.t. Lebesgue measure in Rn+1 . Even if u∗ is only known
                                                                           ∗
to be measurable, one can show that the corresponding solution Xt = Xtu
of (11.1.1) exists (see Stroock and Varadhan (1979) for general results in
this direction). Then by inspecting the proof of Theorem 11.2.2 one can
see that it suffices to have (11.2.62) satisfied outside a subset of G with
Green measure 0 (see Definition 9.3.4). Under suitable conditions on b and σ
one can in fact show that the Green measure is absolutely continuous w.r.t.
Lebesgue measure. Thus by (11.2.62) (and a strengthened Theorem 11.2.2)
u∗ is an optimal control. We refer the reader to Fleming and Rishel (1975),
Bensoussan and Lions (1978), Dynkin and Yushkevich (1979) and Krylov
(1980) for details and further studies.


11.3 Stochastic control problems with terminal
conditions

In many applications there are constraints on the types of Markov controls u
to be considered, for example in terms of the probabilistic behaviour of Ytu
at the terminal time t = T . Such problems can often be handled by applying
a kind of “Lagrange multiplier” method, which we now describe:
    Consider the problem of finding Φ(y) and u∗ (y) such that
                                                                ∗
                             Φ(y) = sup J u (y) = J u (y)                            (11.3.1)
                                       u∈K
where
                                      · ZT                                 ¸
                        u         y              u
                   J (y) = E                 F       (Ytu )dt + K(YTu )          ,   (11.3.2)
                                       0

and where the supremum is taken over the space K of all Markov controls
u: Rn+1 → U ⊂ Rk such that

                       E y [Mi (YTu )] = 0 ,             i = 1, 2, . . . , l ,       (11.3.3)
242       11. Application to Stochastic Control


where M = (M1 , . . . , Ml ): Rn+1 → Rl is a given continuous function,

                                    E y [|M (YTu )|] < ∞              for all y, u .                 (11.3.4)

      Now we introduce a related, but unconstrained problem as follows:
          For each λ ∈ Rl and each Markov control u define
                                          · ZT                                               ¸
                       Jλu (y) = E y             F u (Ytu )dt + K(YTu ) + λ · M (YTu )               (11.3.5)
                                            0

          where · denotes the inner product in Rl . Find Φλ (y) and u∗λ (y) such
          that
                                                     u∗
                             Φλ (y) = sup Jλu (y) = Jλ λ (y) ,           (11.3.6)
                                                              u

          without terminal conditions.
Theorem 11.3.1. Suppose that we for all λ ∈ Λ ⊂ Rl can find Φλ (y) and
u∗λ solving the (unconstrained) stochastic control problem (11.3.5)–(11.3.6).
Moreover, suppose that there exists λ0 ∈ Λ such that
                                                               u∗
                                                 E y [M (YT λ0 )] = 0 .                              (11.3.7)

Then Φ(y): = Φλ0 (y) and u∗ : = u∗λ0 solves the constrained stochastic control
problem (11.3.1)–(11.3.3).
Proof. Let u be a Markov control, λ ∈ Λ. Then by the definition of u∗λ we
have
                  · ZT                                                         ¸
              y              u∗      u∗          u∗              u∗                    u∗
          E              F    λ   (Yt λ )dt + K(YT λ ) + λ · M (YT λ )             = Jλ λ (y)
                   0
                                          · ZT                                              ¸
                  ≥ Jλu (y) = E y                F   u
                                                         (Ytu )dt + K(YTu ) + λ · M (YTu )       .   (11.3.8)
                                           0

In particular, if λ = λ0 and u ∈ K then
                                                     u∗
                                     E y [M (YT λ0 )] = 0 = E y [M (YTu )]

and hence by (11.3.8)
                                     u∗
                                   J λ0 (y) ≥ J u (y)               for all u ∈ K .

Since u∗λ0 ∈ K the proof is complete.                                                                      t
                                                                                                           u
      For an application of this result, see Exercise 11.11.
                                                                                                Exercises   243


Exercises
11.1.   Write down the HJB equation for the problem
                                                               · Z∞                                   ¸
                                                         s,x              −αt
                               Ψ (s, x) = inf E                       e           (g(Xt ) + u2t )dt
                                             u
                                                                 s

        where
                                dXt = ut dt + dBt ;                            X t , u t , Bt ∈ R ,
        α > 0 is a constant and g: R → R is a given bounded, continuous
        function. Show that if Ψ satisfies the conditions of Theorem 11.2.1
        and u∗ exists then
                                                    ∂Ψ
                               u∗ (t, x) = − 21 eαt    .
                                                    ∂x
11.2.   Consider the stochastic control problem
                                                                 · Z∞                           ¸
                                                           s,x
                                Ψ0 (s, x) = inf E                            e−ρt f (ut , Xt )dt ,
                                                 u
                                                                     s

        where

                        dXt = dXtu = b(ut , Xt )dt + σ(ut , Xt )dBt
                                         Xt ∈ Rn , ut ∈ Rk , Bt ∈ Rm ,

        f is a given bounded continuous real function, ρ > 0 and the inf is
        taken over all time-homogeneous Markov controls u, i.e. controls u
        of the form u = u(Xt ). Prove that

                         Ψ0 (s, x) = e−ρs ξ(x) ,                         where ξ(x) = Ψ (0, x) .

        (Hint: By definition of E s,x we have
                   · Z∞                                    Z∞                             ¸
             s,x              −ρt                                          s,x     s,x
         E                e         f (u(Xt ), Xt )dt] = E[ e−ρ(s+t) f (u(Xs+t ), Xs+t )dt
                    s                                                    0

        where E denotes expectation w.r.t. P .)
11.3.   Define

                         dXt = rut Xt dt + αut Xt dBt ;                                Xt , ut , Bt ∈ R

        and
                                                                     · Z∞                     ¸
                                                               s,x             −ρt
                                     Φ(s, x) = sup E                          e      f (Xt )dt ,
                                                     u
                                                                         s
244     11. Application to Stochastic Control


         where r, α, ρ are constants, ρ > 0 and f is a bounded continuous real
         function.
         Assume that Φ satisfies the conditions of Theorem 11.2.1 and that
         an optimal Markov control u∗ exists.
         a) Show that
                       ½                                         ¾
                                     ∂Φ        ∂Φ 1 2 2 2 ∂ 2 Φ
                  sup e−ρt f (x) +       + rvx    + 2α v x          =0.
                  v∈R                ∂t        ∂x            ∂x2
            Deduce that
                                              ∂2Φ
                                                  ≤0.
                                              ∂x2
                            2
         b) Assume that ∂∂xΦ2 < 0. Prove that

                                                          r ∂Φ
                                      u∗ (t, x) = −         ∂x
                                                               2
                                                        α2 x ∂∂xΦ2

            and that
                           µ           ¶           µ ¶2
                                     ∂Φ ∂ 2 Φ     2 ∂Φ
                        2α2 e−ρt f +          − r       =0.
                                     ∂t ∂x2         ∂x
                            2
         c) Assume that ∂∂xΦ2 = 0. Prove that ∂Φ
                                              ∂x = 0 and

                                                       ∂Φ
                                      e−ρt f (x) +        =0.
                                                       ∂t
         d) Assume that u∗t = u∗ (Xt ) and that b) holds. Prove that Φ(t, x) =
            e−ρt ξ(x) and
                             2α2 (f − ρξ)ξ 00 − r2 (ξ 0 )2 = 0 .
            (See Exercise 11.2)
11.4.    The assumptions in Theorem 11.2.1 often fail (see e.g. Exercise 11.10),
         so it is useful to have results in such cases also. For example, if we
         define Φa as in Theorem 11.2.3 then, without assuming that u∗ ex-
         ists and without smoothness conditions on Φ, we have the Bellman
         principle (compare with (11.2.6)–(11.2.7))
                                            · Zα                           ¸
                                        y
                       Φa (y) = sup E              F u (Yru )dr + Φa (Yαu )
                                  u
                                             0

         for all y ∈ G and all stopping times α ≤ T , the sup being taken over
               (m)
         all Ft -adapted controls u. (See Krylov (1980, Th. 6, p. 150).)
         Deduce that if Φa ∈ C 2 (G) then

                    F v (y) + Lv Φa (y) ≤ 0           for all y ∈ G, v ∈ U .
                                                                  Exercises   245


11.5.   Assume that F = 0 in (11.1.8) and that an optimal Markov control
        u∗ exists. Prove that the function Φ is superharmonic in G w.r.t. the
        process Ytu , for any Markov control u. (Hint: See (11.2.6)–(11.2.7).)

11.6.   Let Xt denote your wealth at time t. Suppose that at any time t you
        have a choice between two investments:
        1) A risky investment where the unit price p1 = p1 (t, ω) satisfies the
           equation
                              dp1 = a1 p1 dt + σ1 p1 dBt .
        2) A safer (less risky) investment where the unit price p2 = p2 (t, ω)
           satisfies
                                                         et
                                 dp2 = a2 p2 dt + σ2 p2 dB
           where ai , σi are constants such that

                                     a1 > a 2 ,   σ 1 > σ2
                    et are independent 1-dimensional Brownian motions.
           and Bt , B
        a) Let u(t, ω) denote the fraction of the fortune Xt (ω) which is
           placed in the riskier investment at time t. Show that
                      (u)                                                et ) .
           dXt = dXt        = Xt (a1 u+a2 (1−u))dt+Xt (σ1 udBt +σ2 (1−u)dB

        b) Assuming that u is a Markov control, u = u(t, Xt ), find the gen-
           erator Au of (t, Xtu ).
        c) Write down the HJB equation for the stochastic control problem
                                                 h       i
                                                    (u)
                              Φ(s, x) = sup E s,x (XT )γ
                                            u

           where T = min(t1 , τ0 ), τ0 = inf{t > s; Xt = 0} and t1 is a given
           future time (constant), γ ∈ (0, 1) is a constant.
        d) Find the optimal control u∗ for the problem in c).
11.7.   Consider the stochastic control problem

        (system)              dXt = audt + udBt ;            X0 = x > 0

        where Bt ∈ R, u ∈ R and a ∈ R is a given constant, and

        (performance)                 Φ(s, x) = sup E s,x [(XT )r ] ,
                                                   u

        where 0 < r < 1 is constant and

                              T = inf{t > s; Xt = 0} ∧ t1 ,

        t1 being a given future time (constant).
        Show that this problem has the optimal control
246     11. Application to Stochastic Control

                                                            ax
                                             u∗ (t, x) =
                                                           1−r
         with corresponding optimal performance
                                           µ 2          ¶
                                            a (t1 − s)r
                          Φ(s, x) = xr exp                .
                                             2(1 − r)

11.8.    Use Dynkin’s formula to prove directly that
                                         µ               ¶
                           ∗                 a−b
                          u (t, x) = min              ,1
                                           α2 (1 − r)

         is the optimal control for the problem in Example 11.2.5, with utility
         function N (x) = xr . (Hint: See the argument leading to (11.2.55).)
11.9.    In Beneš (1974) the following stochastic control problem is consid-
         ered:
                                               · Z∞            ¸
                                           s,x
                          Ψ (s, x) = inf E          e−ρt Xt2 dt ,
                                               u
                                                           s

         where
                                   (u)
                     dXt = dXt           = aut dt + dBt ;             Xt , Bt ∈ R
         and a, ρ are (known) constants, ρ > 0. Here the controls u are re-
         stricted to take values in U = [−1, 1].
         a) Show that the HJB equation for this problem is
                              ½                                 ¾
                                          ∂Ψ      ∂Ψ        ∂2Ψ
                       inf      e−ρs x2 +    + av    + 12 ·       =0.
                     v∈[−1,1]             ∂s      ∂x        ∂x2

         b) If Ψ ∈ C 2 and u∗ exists, show that

                                             u∗ (x) = −sign(ax) ,

            where                                    ½
                                                         1  if z > 0
                                       sign z =
                                                         −1 if z ≤ 0 .
            (Hint: Explain why x > 0 ⇒ ∂Ψ                 ∂Ψ
                                       ∂x > 0 and x < 0 ⇒ ∂x < 0.)
11.10. Let                                    ½     2
                                                   x
                                                   √   for 0 ≤ x ≤ 1
                              f (x) =
                                                     x for x > 1
         and put
                                  · ZT                     ¸
                 u          s,x          −ρt
             J (s, x) = E                e     f (Xtu )dt      ,   Φ(s, x) = sup J u (s, x)
                                                                               u
                                   s
                                                                        Exercises    247


        where
                                dXtu = ut dBt ;              t≥s
        with control values ut ∈ R, Bt ∈ R and

                                T = inf{t > s; Xtu ≤ 0} .

        a) Define
                                     1 −ρs b
                        φ(s, x) =      e f (x)              for x ≥ 0, s ∈ R
                                     ρ
           where                              ½
                                                  x     for 0 ≤ x ≤ 1
                                fb(x) =           √
                                                      x for x > 1 .
           Prove that
                                        J u (s, x) ≤ φ(s, x)
           for all s, x and all (finite) Markov controls u.                     √
           (Hint: Put φ1 (s, x) = ρ1 e−ρs x for all s, x and φ2 (s, x) = ρ1 e−ρs x
           for all s, x. Then

                            J u (s, x) ≤ φi (s, x)           for i = 1, 2

           by Theorem 11.2.2.)
        b) Show that
                                        Φ(s, x) = φ(s, x) .
                                uk
           (Hint: Consider J     (s, x), where
                                         ½
                                           k for 0 ≤ x < 1
                                uk (x) =
                                           0 for x ≥ 1

           and let k → ∞).
           Thus u∗ does not exist and Φ is not a C 2 function. Hence both
           conditions for the HJB (I) equation fail in this case.
11.11. Consider a 1-dimensional version of the stochastic linear regulator
       problem of Example 11.2.4:
                                              · Zt1                 ¸
                                        s,x           u 2     2
                    Ψ (s, x) = inf E               ((Xr ) + θur )dr              (11.3.9)
                              u∈K
                                               s

        where
                     dXtu = ut dt + σdBt ;                for t ≥ s, Xs = x ,
        ut , Bt ∈ R, σ, θ constants, θ > 0, the infinum being over the space
        K of all Markov controls u satisfying

             E s,x [(Xtu1 )2 ] = m2 ,          where m is a constant .          (11.3.10)
248    11. Application to Stochastic Control


        Solve this problem by using Theorem 11.3.1.
        (Hint: Solve for each λ ∈ R the unconstrained problem
                                           · Zt1                                ¸
                                     s,x
                 Ψλ (s, x) = inf E              ((Xru )2 + θu2r )dr + λ(Xtu1 )2
                             u
                                             s

        with optimal control u∗λ . Then try to find λ0 such that
                                        ¡ u∗ ¢2
                                 E s,x [ Xt1λ0 ] = m2 .)

11.12. Solve the stochastic control problem
                                                                         ∗
                          Ψ (s, x) = inf J u (s, x) = J u (s, x)
                                            u

        where
                                                 · Z∞                                 ¸
                       J u (s, x) = E s,x               e−ρr (Xr2 + θu2r )dr
                                                  s

        and
                                  dXt = ut dt + σdBt ,
        with ut , Bt ∈ R and σ ∈ R, ρ > 0, θ > 0 are constants. (Hint:
        Try ψ(s, x) = e−ρs (ax2 + b) for suitable constants a, b and apply
        Theorem 11.2.2.)
11.13. Consider the stochastic control problem
                                                            · ZT                  ¸
                                                      s,x              −ρt
                           Φ(s, x) = sup E                         e         ut dt
                                            u
                                                             s

        where the (1-dimensional) system Xt is given by

                           dXt = dXtu = (1 − ut )dt + dBt .

        The control ut = ut (ω) can assume any value in U = [0, 1] and

                T = inf{t > s; Xtu ≤ 0}                 (the time of bankruptcy) .

        Show that if ρ ≥ 2 then the optimal control is

                                     u∗t = 1             for all t

        and the corresponding value function is
                                  1³       √    ´
                   Φ(s, x) = e−ρs    1 − e− 2ρ x ;                                x≥0.
                                  ρ
12. Application to Mathematical Finance




12.1 Market, portfolio and arbitrage

In this chapter we describe how the concepts, methods and results in the
previous chapters can be applied to give a rigorous mathematical model of
finance. We will concentrate on the most fundamental issues and those topics
which are most closely related to the theory in this book. We emphasize
that this chapter only intends to give a brief introduction to this exciting
subject, which has developed very fast during the last years and shows no
signs of slowing down. For a more comprehensive treatment see for example
Bingham and Kiesel (1998), Elliott and Kopp (1999), Duffie (1996), Karatzas
(1997), Karatzas and Shreve (1998), Lamberton and Lapeyre (1996), Musiela
and Rutkowski (1997), Kallianpur and Karandikar (2000), Merton (1990),
Shiryaev (1999) and the references therein.
    First we give the mathematical definitions of some fundamental finance
concepts. We point out that other mathematical models are also possible
and in fact actively investigated. Other models include more general (possibly
discontinuous) semimartingale models (see e.g. Barndorff-Nielsen (1998)) and
even models based on stochastic processes which are not semimartingales,
such as fractional Brownian motion. See e.g. Cutland, Kopp and Willinger
(1995), Lin (1995), Hu and Øksendal (1999).
                                                 (m)
Definition 12.1.1. a) A market is an Ft -adapted (n + 1)-dimensional
  Itô process X(t) = (X0 (t), X1 (t), . . . , Xn (t)); 0 ≤ t ≤ T which we will
  assume has the form

                    dX0 (t) = ρ(t, ω)X0 (t)dt ;          X0 (0) = 1              (12.1.1)

   and
                                       m
                                       X
             dXi (t) = µi (t, ω)dt +         σij (t, ω)dBj (t)                   (12.1.2)
                                       j=1
                     = µi (t, ω)dt + σi (t, ω)dB(t) ;            Xi (0) = xi ,

   where σi is row number i of the n × m matrix [σij ]; 1 ≤ i ≤ n ∈ N.
b) The market {X(t)}t∈[0,T ] is called normalized if X0 (t) ≡ 1.
250          12. Application to Mathematical Finance


c) A portfolio in the market {X(t)}t∈[0,T ] is an (n + 1)-dimensional (t, ω)-
                     (m)
   measurable and Ft -adapted stochastic process

             θ(t, ω) = (θ0 (t, ω), θ1 (t, ω), . . . , θn (t, ω));        0≤t≤T .    (12.1.3)

d) The value at time t of a portfolio θ(t) is defined by
                                                               n
                                                               X
                  V (t, ω) = V θ (t, ω) = θ(t) · X(t) =              θi (t)Xi (t)   (12.1.4)
                                                               i=0

   where · denotes inner product in Rn+1 .
e) The portfolio θ(t) is called self-financing if

      ZT n                   n
                             X                m hX
                                              X  n              i2 o
          |θ0 (s)ρ(s)X0 (s)+   θi (s)µi (s)|+      θi (s)σij (s)    ds < ∞              a.s.
      0                           i=1                    j=1   i=1
                                                                                    (12.1.5)
      and
                                          dV (t) = θ(t) · dX(t)                     (12.1.6)
      i.e.
                                     Zt
                  V (t) = V (0) +         θ(s) · dX(s)         for t ∈ [0, T ] .    (12.1.7)
                                      0

Comments to Definition 12.1.1.
a) We think of Xi (t) = Xi (t, ω) as the price of security/asset number i at
time t. The assets number 1, . . . , n are called risky because of the presence
of their diffusion terms. They can for example represent stock investments.
The asset number 0 is called safe because of the absence of a diffusion term
(although ρ(t, ω) may depend on ω). This asset can for example represent a
bank investment. For simplicity we will assume that ρ(t, ω) is bounded.
b) Note that we can always make the market normalized by defining

                           X i (t) = X0 (t)−1 Xi (t);          1≤i≤n.               (12.1.8)

The market
                                 X(t) = (1, X 1 (t), . . . , X n (t))
is called the normalization of X(t).
    Thus normalization corresponds to regarding the price X0 (t) of the safe
investment as the unit of price (the numeraire) and computing the other
prices in terms of this unit. Since
                                                  µ Zt               ¶
                                  X0 (t) = exp           ρ(s, ω)ds
                                                     0
                                            12.1 Market, portfolio and arbitrage      251


      we have
                                  µ Zt        ¶
       ξ(t): = X0−1 (t) = exp      − ρ(s, ω)ds > 0         for all t ∈ [0, T ]    (12.1.9)
                                      0

and

     dX i (t) = d(ξ(t)Xi (t)) = ξ(t)[(µi −ρXi )dt+σi dB(t)];      1≤i≤n          (12.1.10)

or
                            dX(t) = ξ(t)[dX(t) −ρ(t)X(t)dt] .                    (12.1.11)
c) The components θ0 (t, ω), . . . , θn (t, ω) represent the number of units of the
securities number 0, . . . , n, respectively, which an investor holds at time t.
d) This is simply the total value of all investments held at time t.
e) Note that condition (12.1.5) is required to make (12.1.7) well-defined. See
Definition 3.3.2.
   This part e) of Definition 12.1.1 represents a subtle point in the mathe-
matical model. According to Itô’s formula the equation (12.1.4) would lead
to
              dV (t) = θ(t) · dX(t) + X(t) · dθ(t) + dθ(t) · dX(t)
    if θ(t) was also an Itô process. However, the requirement (12.1.6) stems
from the corresponding discrete time model: If investments θ(tk ) are made
at discrete times t = tk , then the increase in the wealth ∆V (tk ) = V (tk+1 ) −
V (tk ) should be given by

                                  ∆V (tk ) = θ(tk ) · ∆X(tk )                    (12.1.12)

    where ∆X(tk ) = X(tk+1 )−X(tk ) is the change in prices, provided that no
money is brought in or taken out from the system i.e. provided the portfolio
is self-financing. If we consider our continuous time model as a limit of the
discrete time case as ∆tk = tk+1 − tk goes to 0, then (12.1.6) (with the Itô
interpretation of the integral) follows from (12.1.12).
f ) Note that if θ is self-financing for X(t) and
                              θ
                             V (t) = θ(t) · X(t) = ξ(t)V θ (t)                   (12.1.13)

is the value process of the normalized market, then by Itô’s formula and
(12.1.11) we have
                        θ
                     dV (t) = ξ(t)dV θ (t) + V θ (t)dξ(t)
                            = ξ(t)θ(t)dX(t) − ρ(t)ξ(t)V θ (t)dt
                               = ξ(t)θ(t)[dX(t) − ρ(t)X(t)dt]
                               = θ(t)dX(t) .                                     (12.1.14)
252     12. Application to Mathematical Finance


Hence θ is also self-financing for the normalized market.

Remark. Note that by combining (12.1.4) and (12.1.6) we get

                  n
                  X                                  Zt                             n Z
                                                                                    X
                                                                                            t

 θ0 (t)X0 (t) +         θi (t)Xi (t) = V (0) +                θ0 (s)dX0 (s) +                   θi (s)dXi (s) .
                  i=1                                    0                          i=1 0


Hence, if we put
                                          Y0 (t) = θ0 (t)X0 (t) ,
then
                                dY0 (t) = ρ(t)Y0 (t)dt + dA(t) ,
where
                         n µZ
                         X
                                      t                                     ¶
             A(t) =                       θi (s)dXi (s) − θi (t)Xi (t)          .                     (12.1.15)
                          i=1     0

This equation has the solution

                                                              Zt
                            ξ(t)Y0 (t) = θ0 (0) +                  ξ(s)dA(s)
                                                              0

or
                                                         Zt
                                θ0 (t) = θ0 (0) +             ξ(s)dA(s) .
                                                         0

Using integration by parts we may rewrite this as

                                                                       Zt
                  θ0 (t) = θ0 (0) + ξ(t)A(t) − A(0) −                       A(s)dξ(s)
                                                                       0

or
                                                    Zt
            θ0 (t) = V (0) + ξ(t)A(t) +                      ρ(s)A(s)ξ(s)ds .                         (12.1.16)
                                                     0

In particular, if ρ = 0 this gives

                                          θ0 (t) = V (0) + A(t).                                      (12.1.17)

Therefore, if θ1 (t), . . . , θn (t) are chosen, we can always make the portfolio
θ(t) = (θ0 (t), θ1 (t), . . . , θn (t)) self-financing by choosing θ0 (t) according to
(12.1.16).
    We now make the following definition
                                         12.1 Market, portfolio and arbitrage   253


Definition 12.1.2. A portfolio θ(t) which satisfies (12.1.5) and which is
self-financing is called admissible if the corresponding value process V θ (t) is
(t, ω) a.s. lower bounded, i. e. there exists K = K(θ) < ∞ such that

           V θ (t, ω) ≥ −K          for a.a. (t, ω) ∈ [0, T ] × Ω .        (12.1.18)

    This is the analogue of a tame portfolio in the context of Karatzas (1996).
The restriction (12.1.18) reflects a natural condition in real life finance: There
must be a limit to how much debt the creditors can tolerate. See Exam-
ple 12.1.4.
Definition 12.1.3. An admissible portfolio θ(t) is called an arbitrage (in
the market {Xt }t∈[0,T ] ) if the corresponding value process V θ (t) satisfies
V θ (0) = 0 and

                  V θ (T ) ≥ 0      a.s. and    P [V θ (T ) > 0] > 0 .

    In other words, θ(t) is an arbitrage if it gives an increase in the value from
time t = 0 to time t = T a.s., and a strictly positive increase with positive
probability. So θ(t) generates a profit without any risk of losing money.
    Intuitively, the existence of an arbitrage is a sign of lack of equilibrium in
the market: No real market equilibrium can exist in the long run if there are
arbitrages there. Therefore it is important to be able to determine if a given
market allows an arbitrage or not. Not surprisingly, this question turns out to
be closely related to what conditions we pose on the portfolios that should be
allowed to use. We have defined our admissible portfolios in Definition 12.1.2
above, where condition (12.1.18) was motivated from a modelling point of
view. One could also obtain a mathematically sensible theory with other
conditions instead, for example with L2 -conditions which imply that

                     E[V 2 (t)] < ∞            for all t ∈ [0, T ] .       (12.1.19)

In any case, some additional conditions are required on the self-financial
portfolios: If we only require the portfolio to be self-financing (and satisfying
(12.1.5)) we can generate virtually any final value V (T ), as the next example
illustrates:
Example 12.1.4. Consider the following market

             dX0 (t) = 0,      dX1 (t) = dB(t),           0≤t≤T =1.

Let
                               Zt
                                    dB(s)
                     Y (t) =        √             for 0 ≤ t < 1 .
                                      1−s
                               0

                                                  b
By Corollary 8.5.5 there exists a Brownian motion B(t) such that
254     12. Application to Mathematical Finance


                                                     b t) ,
                                             Y (t) = B(β

where
                         Zt                     µ         ¶
                                  ds                 1
                  βt =               = ln                        for 0 ≤ t < 1 .
                                 1−s                1−t
                         0

Let a ∈ R be a given constant and define
                                                         b = a}
                                 τ : = τa : = inf{t > 0; B(t)

and
                              α: = αa : = inf{t > 0; Y (t) = a} .
Then
                                 τ <∞         a.s. (Exercise 7.4a))
and                                     µ        ¶
                                              1
                              τ = ln              ,       so α < 1 a.s.
                                             1−α
Let θ(t) = (θ0 (t), θ1 (t)) be a self-financing portfolio with
                                  ( 1
                                   √
                                      1−t
                                             for 0 ≤ t < α
                         θ1 (t) =
                                      0      for α ≤ t ≤ 1 .

Then the corresponding value process is given by
                             Z
                             t∧α
                                   dB(s)
                 V (t) =           √     = Y (t ∧ α)                for 0 ≤ t ≤ 1 ,
                                     1−s
                             0

if we assume that V (0) = 0. In particular,

                                       V (1) = Y (α) = a        a.s.

In this case condition (12.1.5) reduces to

                                        Z1
                                             θ12 (s)ds < ∞    a.s.
                                        0

Now
             Z1                    Zα                µ          ¶
                                         ds                1
                  θ12 (s)ds =               = ln                    =τ <∞       a.s. ,
                                        1−s               1−α
             0                     0

so (12.1.5) holds. But θ(t) is not admissible, because V (t) = Y (t ∧ α) =
 b
B(ln(   1
      1−t∧α )) is not (t, ω)-a.s. lower bounded for (t, ω) ∈ [0, T ] × Ω. Note
that θ(t) does not satisfy (12.1.19) either, because
                                    12.1 Market, portfolio and arbitrage    255

                             ·Z
                              t∧α       ¸    · µ       ¶¸
    2           2                    ds            1
E[V (t)] = E[Y (t∧α)] = E                 = E ln          → E[τ ] = ∞
                                    1−s          1−t∧α
                                0

as t → T (Exercise 7.4b).
    This example illustrates that with portfolios only required to be self-
financing and satisfy (12.1.5) one can virtually generate any terminal value
V (T, ω) from V0 = 0, even when the risky price process X1 (t) is Brownian
motion. This clearly contradicts the real life situation in finance, so a re-
alistic mathematical model must put stronger restrictions than (12.1.5) on
the portfolios allowed. One such natural restriction is (12.1.18), as we have
adopted.

    To emphasize the phenomenon illustrated by this example, we state the
following striking result, which is due to Dudley (1977):
                                        (m)
Theorem 12.1.5. Let F be an FT -measurable random variable and let
B(t) be m-dimensional Brownian motion. Then there exists φ ∈ W m such
that
                              ZT
                       F (ω) = φ(t, ω)dB(t) .                (12.1.20)
                                    0

   Note that φ is not unique. See Exercise 3.4.22 in Karatzas and Shreve
(1991). See also Exercise 12.4.
   This implies that for any constant z there exists φ ∈ W m such that

                                        ZT
                         F (ω) = z +          φ(t, ω)dB(t) .
                                        0

Thus, if we let m = n and interprete B1 (t) = X1 (t), . . . , Bn (t) = Xn (t) as
prices, and put X0 (t) ≡ 1, this means that we can, with any initial fortune
                   (m)
z, generate any FT -measurable final value F = V (T ), as long as we are
allowed to choose the portfolio φ freely from W m . This again underlines the
need for some extra restriction on the family of portfolios allowed, like con-
dition (12.1.18).

   How can we decide if a given market {X(t)}t∈[0,T ] allows an arbitrage or
not? The following simple result is useful:
                                                               (m)
Lemma 12.1.6. Suppose there exists a measure Q on FT such that P ∼ Q
and such that the normalized price process {X(t)}t∈[0,T ] is a local martingale
w.r.t. Q. Then the market {X(t)}t∈[0,T ] has no arbitrage.
256       12. Application to Mathematical Finance

                                                                         θ
Proof. Suppose θ(t) is an arbitrage for {X(t)}t∈[0,T ] . Let V (t) be the cor-
                                                                         θ
responding value process for the normalized market with V (0) = 0. Then
  θ
V (t) is a lower bounded local martingale w.r.t. Q, by (12.1.14). Therefore
  θ
V (t) is a supermartingale w.r.t. Q, by Exercise 7.12. Hence

                              EQ [V θ (T )] ≤ V θ (0) = 0 .                     (12.1.21)

But since V θ (T, ω) ≥ 0 a.s. P we have V θ (T, ω) ≥ 0 a.s. Q (because Q ¿ P )
and since P [V θ (T ) > 0] > 0 we have Q[V θ (T ) > 0] > 0 (because P ¿ Q).
This implies that
                                EQ [V θ (T )] > 0 ,
which contradicts (12.1.21). Hence arbitrages do not exist for the normalized
price process {X(t)}. It follows that {X(t)} has no arbitrage. (Exercise 12.1).
                                                                             t
                                                                             u
Definition 12.1.7. A measure Q ∼ P such that the normalized process
{X(t)}t∈[0,T ] is a (local) martingale w.r.t. Q is called an equivalent (local)
martingale measure.
    Thus Lemma 12.1.6 states that if there exists an equivalent local martin-
gale measure then the market has no arbitrage. In fact, then the market also
satisfies the stronger condition “no free lunch with vanishing risk” (NFLVR).
Conversely, if the market satisfies the NFLVR condition, then there exists
an equivalent martingale measure. See Delbaen and Schachermayer (1994),
(1995), (1997), Levental and Skorohod (1995) and the references therein.
Here we will settle with a weaker result, which nevertheless is good enough
for many applications:
Theorem 12.1.8. a) Suppose there exists a process u(t, ω) ∈ V m (0, T ) such
             b ω) = (X1 (t, ω), . . . , Xn (t, ω)),
  that, with X(t,
                                            b ω)
          σ(t, ω)u(t, ω) = µ(t, ω) − ρ(t, ω)X(t,              for a.a. (t, ω)   (12.1.22)

      and such that
                             ·      µ ZT                 ¶¸
                            E exp     1
                                      2       u2 (t, ω)dt   <∞.                 (12.1.23)
                                          0

      Then the market {X(t)}t∈[0,T ] has no arbitrage.

b) (Karatzas (1996), Th. 0.2.4)
   Conversely, if the market {X(t)}t∈[0.T ] has no arbitrage, then there exists
       (m)
   an Ft -adapted, (t, ω)-measurable process u(t, ω) such that
                                                           b ω)
                         σ(t, ω)u(t, ω) = µ(t, ω) − ρ(t, ω)X(t,

      for a.a. (t, ω).
                                                  12.1 Market, portfolio and arbitrage          257


Proof. a) We may assume that {X(t)} is normalized, i.e. that ρ = 0 (Exercise
                                      (m)
12.1). Define the measure Q = Qu on FT by

                      µ       ZT                         ZT               ¶
    dQ(ω) = exp           −        u(t, ω)dB(t) − 21           u2 (t, ω)dt dP (ω) .       (12.1.24)
                              0                           0

Then Q ∼ P and by the Girsanov theorem II (Theorem 8.6.4) the process

                                             Zt
                                   e
                                   B(t): =        u(s, ω)ds + B(t)                        (12.1.25)
                                              0

                                       e
is a Q-Brownian motion and in terms of B(t) we have

                                                 e
                dXi (t) = µi dt + σi dB(t) = σi dB(t);                    1≤i≤n.

Hence X(t) is a local Q-martingale and the conclusion follows from Lemma
12.1.6.

b) Conversely, assume that the market has no arbitrage and is normalized.
For t ∈ [0, T ], ω ∈ Ω let

    Ft =        {ω; the equation (12.1.22) has no solution}
       =        {ω; µ(t, ω) does not belong to the linear span of the columns
                of σ(t, ω)}
            =   {ω; ∃v = v(t, ω) with σ T (t, ω)v(t, ω) = 0 and
                v(t, ω) · µ(t, ω) 6= 0} .

   Define
                              ½
                               sign(v(t, ω) · µ(t, ω))vi (t, ω) for ω ∈ Ft
                θi (t, ω) =
                                              0                 for ω 6∈ Ft

for 1 ≤ i ≤ n and θ0 (t, ω) according to (12.1.17). Since σ(t, ω), µ(t, ω) are
  (m)
Ft -adapted and (t, ω)-measurable, it follows that we can choose θ(t, ω)
         (m)
to be Ft -adapted and (t, ω)-measurable also. Moreover, θ(t, ω) is self-
financing and it generates the following gain in the value function

                              Zt X
                                 n
    θ             θ
  V (t, ω) − V (0) =                     θi (s, ω)dXi (s)
                              0    i=1

        Zt                                              m µX
                                                     Zt X  n                              ¶
    =        XFs (ω)|v(s, ω) · µ(s, ω)|ds +                            θi (s, ω)σij (s, ω) dBj (s)
        0                                            0   j=1     i=1
258       12. Application to Mathematical Finance


          Zt
      =        XFs (ω)|v(s, ω) · µ(s, ω)|ds
          0
                   Zt
               +        sign(v(s, ω) · µ(s, ω))XFs (ω)σ T (s, ω)v(s, ω)dB(s)
                   0
          Zt
      =        XFs (ω)|v(s, ω) · µ(s, ω)|ds ≥ 0            for all t ∈ [0, T ] .
          0

Since the market has no arbitrage we must (by Exercise 12.1 b) have that

                                  XFt (ω) = 0         for a.a. (t, ω)

i.e. that (12.1.22) has a solution for a.a. (t, ω).                                       t
                                                                                          u
Example 12.1.9. a) Consider the price process X(t) given by

 dX0 (t) = 0,            dX1 (t) = 2dt + dB1 (t),       dX2 (t) = −dt + dB1 (t) + dB2 (t) .

In this case we have                     ·      ¸          ·         ¸
                                             2                 1 0
                                    µ=            ,   σ=
                                             −1                1 1
and the system σu = µ has the unique solution
                              · ¸ ·         ¸
                               u1        2
                          u=        =         .
                               u2       −3

From Theorem 12.1.8a) we conclude that X(t) has no arbitrage.

b) Next, consider the price process Y (t) given by

                         dY0 (t) = 0 , dY1 (t) = 2dt + dB1 (t) + dB2 (t) ,
                         dY2 (t) = −dt − dB1 (t) − dB2 (t) .

Here the system of equations σu = µ gets the form
                        ·        ¸· ¸ ·         ¸
                           1 1      u1        2
                                         =
                          −1 −1     u2       −1

which has no solutions. So the market has an arbitrage, according to Theo-
rem 12.1.8 b). Indeed, if we choose

                                          θ(t) = (θ0 , 1, 1)

we get
                                                       12.2 Attainability and Completeness       259


                                 ZT
       θ             θ
    V (T ) = V (0) +                  2dt + dB1 (t) + dB2 (t) − dt − dB1 (t) − dB2 (t)
                                 0
                 = V θ (0) + T .

In particular, if we choose θ0 constant such that

                         V θ (0) = θ0 Y0 (0) + Y1 (0) + Y2 (0) = 0 ,

then θ will be an arbitrage (see Exercise 12.2).


12.2 Attainability and Completeness

We start this section by stating without proof the following useful result,
which is a special case of Proposition 17.1 in Yor (1997):
Lemma 12.2.1. Suppose a process u(t, ω) ∈ V m (0, T )satisfies the condition

                                 ·         µ ZT                   ¶¸
                             E exp           1
                                             2         u2 (s, ω)ds   <∞.                     (12.2.1)
                                                  0

                                                      (m)
Define the measure Q = Qu on FT                             by

                         µ       ZT                               ZT             ¶
                                                                        2
     dQ(ω) = exp             −        u(t, ω)dB(t) − 21                u (t, ω)dt dP (ω) .   (12.2.2)
                                 0                                0

Then
                                                  Zt
                                     e
                                     B(t): =           u(s, ω)ds + B(t)                      (12.2.3)
                                                  0
           (m)                                                   (m)
is an Ft -martingale (and hence an Ft -Brownian motion) w.r.t. Q and
             (m)
any F ∈ L2 (FT , Q) has a unique representation

                                                            ZT
                             F (ω) = EQ [F ] +                           e ,
                                                                 φ(t, ω)dB(t)                (12.2.4)
                                                             0

                             (m)
where φ(t, ω) is an Ft               -adapted, (t, ω)-measurable Rm -valued process such
that
                                           · ZT             ¸
                                                      2
                                      EQ          φ (t, ω)dt < ∞ .                           (12.2.5)
                                            0
260      12. Application to Mathematical Finance

                                            (m)
Remark. a) Note that the filtration {Fet } generated by {B(t)}     e     is con-
            (m)                                                  (m)
tained in {Ft } (by (12.2.3)), but not necessarily equal to {Ft }. Therefore
the representation (12.2.4) is not a consequence of the Itô representation the-
orem (Theorem 4.2.3) or the Dudley theorem (Theorem 12.1.5), which in this
                                    (m)
setting would require that F be FeT -measurable.

                 e            (m)
b) To prove that B(t) is an Ft -martingale w.r.t Q, we apply Itô’s formula
to the process
                                          e ,
                             Y (t): = Z(t)B(t)
where
                           µ       Zt                          Zt                ¶
                                                                     2
              Z(t) = exp       −        u(s, ω)dB(s) − 12           u (s, ω)ds       ,
                                   0                            0

and use the Bayes formula, Lemma 8.6.2. The details are left to the reader.
(Exercise 12.5.)

      Next we make the following simple, but useful observation:
Lemma 12.2.2. Let X(t) = ξ(t)X(t) be the normalized price process, as
in (12.1.8)–(12.1.11). Suppose θ(t) is an admissible portfolio for the market
{X(t)} with value process

                                   V θ (t) = θ(t) · X(t) .                                (12.2.6)

Then θ(t) is also an admissible portfolio for the normalized market {X(t)}
with value process
                           θ
                         V (t): = θ(t) · X(t) = ξ(t)V θ (t)                               (12.2.7)

and vice versa.
   In other words,

                                             Rt
                    V θ (t) = V θ (0) +           θ(s)dX(s) ;       0≤t≤T                 (12.2.8)
                                             0
                                         m
                                                  Rt
                  ξ(t)V θ (t) = V θ (0) +              θ(s)dX(s) ; 0 ≤ t ≤ T              (12.2.9)
                                                  0

                     θ
Proof. Note that V (t) is lower bounded if and only if V θ (t) is lower bounded
(since ρ(t) is bounded). Consider first the market consisting of the price
process X(t). Let θ(t) be an admissible portfolio for this market with value
process V θ (t). Then
                           θ
                         V (t) = θ(t) · X(t) = ξ(t)V θ (t)                               (12.2.10)
                                                12.2 Attainability and Completeness               261


and since θ(t) is self-financing for the market {X(t)} we have, by (12.1.14),
                                        θ
                                      dV (t) = θ(t)dX(t) .                                  (12.2.11)

                                                                θ                     Rt
Hence θ(t) is also admissible for {X(t)} and V (t) = V θ (0) +                             θ(s)dX(s),
                                                                                      0
which shows that (12.2.8) implies (12.2.9).
   The argument goes both ways, so the lemma is proved.                                            t
                                                                                                   u
   Before we proceed we note the following useful result:
Lemma 12.2.3. Suppose there exists an m-dimensional process u(t, ω) ∈
                            b ω) = (X1 (t, ω), . . . , Xn (t, ω)),
V m (0, T ) such that, with X(t,

                                        b ω)
      σ(t, ω)u(t, ω) = µ(t, ω) − ρ(t, ω)X(t,                        for a.a. (t, ω)         (12.2.12)

and
                              h        µ ZT                ¶i
                            E exp       1
                                        2       u2 (s, ω)ds < ∞ .                           (12.2.13)
                                            0

Define the measure Q = Qu and the process B(t) e    as in (12.2.2), (12.2.3),
                    e
respectively. Then B is a Brownian motion w.r.t. Q and in terms of B    e we
have the following representation of the normalized market X(t) = ξ(t)X(t) :

                     dX 0 (t) = 0                                                           (12.2.14)
                                              e ;
                        dX i (t) = ξ(t)σi (t)dB(t)               1≤i≤n.                     (12.2.15)

                    RT
In particular, if        EQ [ξ 2 (t)σi2 (t)]dt < ∞, then Q is an equivalent martingale
                    0
measure (Definition 12.1.7).
                                              θ
    In any case the normalized value process V (t) of an admissible portfolio
θ is a local Q-martingale given by
                                                 n
                                                 X
                                  θ
                            dV (t) = ξ(t)                           e
                                                       θi (t)σi (t)dB(t)                    (12.2.16)
                                                 i=1

Proof. The first statement follows from the Girsanov theorem. To prove the
representation (12.2.15) we compute

        dX i (t) = d(ξ(t)Xi (t)) = ξ(t)dXi (t) + Xi (t)dξ(t)
                 = ξ(t)[(µi (t) − ρ(t)Xi (t))dt + σi (t)dB(t)]
                                                          e − ui (t)dt)]
                 = ξ(t)[(µi (t) − ρ(t)Xi (t))dt + σi (t)(dB(t)
                                 e .
                    = ξ(t)σi (t)dB(t)
262         12. Application to Mathematical Finance


                    RT
In particular, if        EQ [ξ 2 (t)σi2 (t)]dt < ∞ , then X i (t) is a martingale w.r.t. Q
                    0
by Corollary 3.2.6.
   Finally, the representation (12.2.16) follows from (12.2.11) and (12.2.15).
                                                                            t
                                                                            u
Note. From now on we assume that there exists a process u(t, ω) ∈
                                                                e be
V m (0, T ) satisfying (12.2.12) and (12.2.13) and we let Q and B
as in (12.2.2), (12.2.3), as described in Lemma 12.2.3.
Definition 12.2.4. a) A (European) contingent T -claim (or just a T -claim
                                (m)
  or claim) is a lower bounded FT -measurable random variable F (ω).

b) We say that the claim F (ω) is attainable (in the market {X(t)}t∈[0,T ] ) if
   there exists an admissible portfolio θ(t) and a real number z such that

                                                       ZT
                           F (ω) = Vzθ (T ): = z +          θ(t)dX(t)      a.s.
                                                       0

      and such that
                    Zt          n
                                X
        θ
      V (t) = z +        ξ(s)                      e
                                      θi (s)σi (s)dB(s) ;     0 ≤ t ≤ T is a Q-martingale .
                     0          i=1


      If such a θ(t) exists, we call it a replicating or hedging portfolio for F .

c) The market {X(t)}t∈[0,T ] is called complete if every bounded T -claim is
   attainable.
   In other words, a claim F (ω) is attainable if there exists a real number z
such that if we start with z as our initial fortune we can find an admissible
portfolio θ(t) which generates a value Vzθ (T ) at time T which a.s. equals F :

                             Vzθ (T, ω) = F (ω)             for a.a. ω .
                                                                                       θ
In addition we require tht the corresponding normalized value process V (t),
which has the representation (12.2.16), is a martingale and not just a local
martingale w.r.t. Q.

Remark. a) The boundedness condition in part c) of Definition 12.2.1 is
technically convenient, but other, related definitions are also possible. Note
that if the market is complete in the sense of c), then it often follows that
many unbounded claims are attainable as well. See Exercise 12.3.

b) If we drop the martingale condition in Definition 12.2.4b) then the repli-
cating portfolio θ need not be unique. See Exercise 12.4.
                                             12.2 Attainability and Completeness            263


   What claims are attainable? Which markets are complete? These are im-
portant, but difficult questions in general. We will give some partial answers.
   We are now ready for the main result of this section:
Theorem 12.2.5. The market {X(t)} is complete if and only if σ(t, ω) has
                                                              (m)
a left inverse Λ(t, ω) for a.a. (t, ω), i.e. there exists an Ft -adapted matrix
                            m×n
valued process Λ(t, ω) ∈ R        such that

                     Λ(t, ω)σ(t, ω) = Im                for a.a. (t, ω) .              (12.2.17)

Remark. Note that the property (12.2.17) is equivalent to the property

                      rank σ(t, ω) = m                 for a.a. (t, ω) .               (12.2.18)

Proof of Theorem 12.2.5 . (i) Assume that (12.2.17) hold. Let Q and B             e be
as in (12.2.2), (12.2.3). Let F be a bounded T -claim. We want to prove that
there exists an admissible portfolio θ(t) = (θ0 (t), . . . , θn (t)) and a real number
z such that if we put
                                       Zt
                   Vzθ (t) = z +            θ(s)dX(s) ;            0≤t≤T
                                        0

       η
then V z (t) is a Q-martingale and

                                      Vzθ (T ) = F (ω) a.s.

By (12.2.16) this is equivalent to

                                                 ZT          n
                                                             X
                                  θ
             ξ(T )F (ω) = V (T ) = z +                ξ(t)                      e .
                                                                   θi (t)σi (t)dB(t)
                                                 0           i=1


By Lemma 12.2.1 we have a unique representation

                           ZT                         ZT X
                                                         m
                                    e = EQ [ξ(T )F ] +
ξ(T )F (ω) = EQ [ξ(T )F ] + φ(t, ω)dB(t)                             ej (t)
                                                           φj (t, ω)dB
                                 0                                         0   j=1


for some φ(t, ω) = (φ1 (t, ω), . . . , φm (t, ω)) ∈ Rm . Hence we put

                                        z = EQ [ξ(T )F ]

              b = (θ1 (t), . . . , θn (t)) such that
and we choose θ(t)
                          n
                          X
                   ξ(t)         θi (t)σij (t) = φj (t) ;           1≤j≤m
                          i=1
264    12. Application to Mathematical Finance


i.e. such that
                                         b
                                     ξ(t)θ(t)σ(t) = φ(t) .
                              b has the solution
By (12.2.17) this equation in θ(t)

                               b ω) = X0 (t)φ(t, ω)Λ(t, ω) .
                               θ(t,

By choosing θ0 according to (12.1.16) the portfolio becomes self-financing.
                                 Rt                Rt
                                                         e
Moreover, since ξ(t)Vzθ (t) = z + θ(s)dX(s) = z + φ(s)dB(s),    we get the
                                             0                             0
useful formula

          ξ(t)Vzθ (t) = EQ [ξ(T )Vzθ (T )|Ft ] = EQ [ξ(T )F |Ft ] .                (12.2.19)

In particular, Vzθ (t) is lower bounded. Hence the market {X(t)} is complete.

(ii) Conversely, assume that {X(t)} is complete. Then {X(t)} is com-
plete, so we may assume that ρ = 0. The calculation in part a) shows
that the value process Vzθ (t) generated by an admissible portfolio θ(t) =
(θ0 (t), θ1 (t), . . . , θn (t)) is

                             m µX
                          Zt X  n                 ¶         Zt
        Vzθ (t) = z +                               ej = z + θσ
                                            θi σij dB          b dB
                                                                  e,               (12.2.20)
                          0    j=1    i=1                              0

       b = (θ1 (t), . . . , θn (t)).
where θ(t)
   Since {X(t)} is complete we can hedge any bounded T -claim. Choose
     (m)                                          RT
an Ft -adapted process φ(t, ω) ∈ Rm such that EQ [ φ2 (t, ω)dt] < ∞ and
                                                                               0
                  RT
define F (ω): =                e
                       φ(t, ω)dB(t). Then EQ [F 2 ] < ∞ so we can find a sequence
                  0
of bounded T -claims Fk (ω) such that

                       Fk → F        in L2 (Q)          and EQ [Fk ] = 0 .

By completeness there exists for all k an admissible portfolio θ(k) = (θ0 , θb(k) )
                                                                                   (k)

                    Rt
such that V θ (t) = θb(k) σdB e is a Q-martingale and
             (k)


                          0

                                                             ZT
                                            θ (k)
                              Fk (ω) = V            (T ) =        θb(k) σ dB
                                                                           e.
                                                             0


Then by the Itô isometry the sequence {θb(k) σ}∞      k=1 is a Cauchy sequence in
L2 (λ × Q), where λ denotes Lebesgue measure on [0, T ]. Hence there exists
ψ(t, ω) = (ψ1 (t, ω), . . . , ψm (t, ω)) ∈ L2 (λ × Q) such that
                                           12.2 Attainability and Completeness        265


                             θb(k) σ → ψ      in L2 (λ × Q) .

But then
  Zt                 Zt                                                        Zt
         e = lim
       ψdB                θb(k) σdB
                                  e = lim E[Fk | Fet(m) ] = E[F | Fet(m) ] =          e
                                                                                    φdB
               k→∞                    k→∞
  0                  0                                                         0

                                  (m)
a.s. for all t ∈ [0, T ], where Fet                                 e
                                      is the σ-algebra generated by B(s); s ≤ t.
    Hence by uniqueness we have φ(t, ω) = ψ(t, ω) for a.a. (t, ω). By taking a
subsequence we obtain that for a.a. (t, ω) there exists a sequence x(k) (t, ω) =
  (k)                (k)
(x1 (t, ω), . . . , xm (t, ω)) ∈ Rm such that

                   x(k) (t, ω)σ(t, ω) → φ(t, ω)        as k → ∞ .

This implies that φ(t, ω) belongs to the linear span of the rows {σi (t, ω)}ni=1
of σ(t, ω). Since φ ∈ L2 (λ × Q) was arbitrary, we conclude that the linear
span of {σi (t, ω)}ni=1 is the whole of Rm for a.a. (t, ω). So rank σ(t, ω) = m
and there exists Λ(t, ω) ∈ Rm×n such that

                                  Λ(t, ω)σ(t, ω) = Im .
                                                                                          t
                                                                                          u
Corollary 12.2.6. (a) If n = m then the market is complete if and only if
   σ(t, ω) is invertible for a.a. (t, ω).

(b) If the market is complete, then

                            rank σ(t, ω) = m        for a.a. (t, ω) .

       In particular, n ≥ m.
       Moreover, the process u(t, ω) satisfying (12.2.12) is unique.
Proof. (a) is a direct consequence of Theorem 12.2.5, since the existence of a
left inverse implies invertibility when n = m. The existence of a left inverse
of an n × m matrix is only possible if the rank is equal to m, which again
implies that n ≥ m. Moreover, the only solution u(t, ω) of (12.2.12) is given
by
                                                      b ω)] .
                   u(t, ω) = Λ(t, ω)[µ(t, ω) − ρ(t, ω)X(t,
This shows (b).                                                                           t
                                                                                          u
Example 12.2.7. Define X0 (t) ≡ 1 and
                                      
              dX1 (t)       1          1 0 ·         ¸
             dX2 (t)  =  2  dt +  0 1  dB1 (t) .
                                             dB2 (t)
              dX3 (t)       3          1 1

Then ρ = 0 and the equation (12.2.12) gets the form
266    12. Application to Mathematical Finance

                                          
                                 1 0 · ¸    1
                                       u
                           σu = 0 1   1
                                          =2
                                       u2
                                 1 1        3

which has the unique solution u1 = 1, u2 = 2. Since u is constant, it is
clear that (12.2.12) and (12.2.13) hold. It is immediate that rank σ = 2, so
(12.2.18) holds and the market is complete by Theorem 12.2.5.
    Since                            
                    ·         ¸ 1 0         ·     ¸
                      1 0 0                  1 0
                                 0 1=              = I2 ,
                      0 1 0                   0 1
                                 1 1
we see that in this case                 ·               ¸
                                             1 0     0
                               Λ=
                                             0 1     0
                              
                           1 0
is a left inverse of σ =  0 1 .
                           1 1

Example 12.2.8. Let X0 (t) ≡ 1 and

                      dX1 (t) = 2dt + dB1 (t) + dB2 (t) .

Then µ = 2, σ = (1, 1) ∈ R1×2 , so n = 1 < 2 = m. Hence this market cannot
be complete, by Corollary 12.2.6. So there exist bounded T -claims which
cannot be hedged. Can we find such a T -claim? Let θ(t) = (θ0 (t), θ1 (t)) be
an admissible portfolio. Then the corresponding value process Vzθ (t) is given
by (see (12.2.20))

                                   Zt
                   Vzθ (t) = z +                e1 (s) + dB(s))
                                        θ1 (s)(dB         e     .
                                   0

So if θ hedges a T -claim F (ω) we have

                                   ZT
                    F (ω) = z +                 e1 (s) + dB(s))
                                        θ1 (s)(dB         e     .                 (12.2.21)
                                   0


Choose F (ω) = g(B     e1 (T )), where g: R → R is bounded. Then by the Itô
representation theorem applied to the 2-dimensional Brownian motion B(t)      e =
 e       e
(B1 (t), B2 (t)) there is a unique φ(t, ω) = (φ1 (t, ω), φ2 (t, ω)) such that

                                             ZT
           e1 (T )) = EQ [g(B
         g(B                e1 (T ))] +                  e1 (s) + φ2 (s)dB
                                                  φ1 (s)dB               e2 (s)
                                             0
                                                        12.3 Option Pricing   267


and by the Itô representation theorem applied to Be1 (t), we must have φ2 = 0,
i.e.
                                                ZT
                    e                e
                  g(B1 (T )) = EQ [g(B1 (T ))] + φ1 (s)dBe1 (s)
                                                  0

Comparing this with (12.2.21) we see that no such θ1 exists. So F (ω) =
  e1 (T )) cannot be hedged.
g(B
Remark. There is a striking characterization of completeness in terms of
equivalent martingale measures, due to Harrison and Pliska (1983) and Jacod
(1979):
   A market {X(t)} is complete if and only if there is one and only one
equivalent martingale measure for the normalized market {X(t)}.

    (Compare this result with the equivalent martingale measure characteri-
zation of markets with no arbitrage/NFLVR, stated after Definition 12.1.7!)


12.3 Option Pricing

European Options

Let F (ω) be a T -claim. A European option on the claim F is a guarantee
to be paid the amount F (ω) at time t = T > 0. How much would you be
willing to pay at time t = 0 for such a guarantee? You could argue as follows:
If I – the buyer of the option – pay the price y for this guarantee, then I
have an initial fortune −y in my investment strategy. With this initial fortune
                                                        θ
(debt) it must be possible to hedge to time T a value V−y (T, ω) which, if the
guaranteed payoff F (ω) is added, gives me a nonnegative result:
                          θ
                         V−y (T, ω) + F (ω) ≥ 0       a.s.

Thus the maximal price p = p(F ) the buyer is willing to pay is

       (Buyer’s price of the (European) contingent claim F )    (12.3.1)
       p(F ) = sup{y; There exists an admissible portfolio θ
                                          ZT
                          θ
              such that V−y (T, ω): = −y + θ(s)dX(s) ≥ −F (ω) a.s.}
                                              0

On the other hand, the seller of this guarantee could argue as follows:
    If I – the seller – receive the price z for this guarantee, then I can use
this as the initial value in an investment strategy. With this initial fortune it
must be possible to hedge to time T a value Vzθ (T, ω) which is not less than
the amount F (ω) that I have promised to pay to the buyer:
268      12. Application to Mathematical Finance


                             Vzθ (T, ω) ≥ F (ω)    a.s.

Thus the minimal price q = q(F ) the seller is willing to accept is

           (Seller’s price of the (European) contingent claim F )     (12.3.2)
           q(F ) = inf{z; There exists an admissible portfolio θ
                                              ZT
                   such that Vzθ (T, ω): = z + θ(s)dX(s) ≥ F (ω) a.s.}
                                               0

Definition 12.3.1. If p(F ) = q(F ) we call this common value the price (at
t = 0) of the (European) T -contingent claim F (ω).
      Two important examples of European contingent claims are
a) the European call, where

                             F (ω) = (Xi (T, ω) − K)+

   for some i ∈ {1, 2, . . . , n} and some K > 0. This option gives the owner
   the right (but not the obligation) to buy one unit of security number i at
   the specified price K (the exercise price) at time T . So if Xi (T, ω) > K
   then the owner of the option will obtain the payoff Xi (T, ω) − K at time
   T , while if Xi (T.ω) ≤ K then the owner will not exercise his option and
   the payoff is 0.
b) Similarly, the European put option gives the owner the right (but not
   the obligation) to sell one unit of security number i at a specified price
   K at time T . This option gives the owner the payoff

                             F (ω) = (K − Xi (T, ω))+ .

Theorem 12.3.2. a) Suppose (12.2.12) and (12.2.13) hold and let Q be as
  in (12.2.2). Let F be a (European) T -claim such that EQ [ξ(T )F ] < ∞.
  Then

              ess inf F (ω) ≤ p(F ) ≤ EQ [ξ(T )F ] ≤ q(F ) ≤ ∞ .      (12.3.3)

b) Suppose, in addition to the conditions in a), that the market {X(t)} is
   complete. Then the price of the (European) T -claim F is

                            p(F ) = EQ [ξ(T )F ] = q(F ) .            (12.3.4)

Proof. a) Suppose y ∈ R and there exists an admissible portfolio θ such that

                                    ZT
                 θ
                V−y (T, ω) = −y +        θ(s)dX(s) ≥ −F (ω)   a.s.
                                    0
                                                                12.3 Option Pricing       269


i.e., using (12.2.7) and Lemma 12.2.4,

                 ZT X
                    n
        −y +                                e
                           θi (s)ξ(s)σi (s)dB(s) ≥ −ξ(T )F (ω) a.s.                   (12.3.5)
                 0   i=1


      e is defined in (12.2.3).
where B
         Rt P
            n
   Since                       e
              θi (s)ξ(s)σi (s)dB(s) is a lower bounded local Q-martingale, it is
         0 i=1
                                                             Rt P
                                                                n
a supermartingale, by Exercise 7.12. Hence EQ [                                       e
                                                                     θi (s)ξ(s)σi (s)dB(s)] ≤0
                                                             0 i=1
for all t ∈ [0, T ]. Therefore, taking the expectation of (12.3.5) with respect
to Q we get
                                 y ≤ EQ [ξ(T )F ] .
Hence
                                       p(F ) ≤ EQ [ξ(T )F ] ,
provided such a portfolio θ exists for some y ∈ R. This proves the second
inequality in (12.3.3). Clearly, if y < F (ω) for a.a. ω, we can choose θ = 0.
Hence the first inequality in (12.3.3) holds.
   Similarly, if there exists z ∈ R and an admissible portfolio θ such that

                                   ZT
                             z+         θ(s)dX(s) ≥ F (ω)       a.s.
                                   0

then, as in (12.3.5)

                      ZT X
                         n
                 z+                               e
                                 θi (s)ξ(s)σi (s)dB(s) ≥ ξ(T )F (ω)         a.s.
                      0    i=1


Taking Q-expectations we get

                                        z ≥ EQ [ξ(T )F ] ,

provided such z and θ exist.
   If no such z, θ exist, then q(F ) = ∞ > EQ [ξ(T )F ].

b) Next, assume in addition that the market is complete. Define
                              ½
                                k      if F (ω) ≥ k
                     Fk (ω) =
                                F (ω) if F (ω) < k .

Then Fk is a bounded T -claim, so by completeness we can find (unique)
yk ∈ R and θ(k) such that
270     12. Application to Mathematical Finance


                                  ZT
                         −yk +         θ(k) (s)dX(s) = −Fk (ω) a.s.
                                  0

i.e. (by (12.2.7) and Lemma 12.2.4)

                     ZT X
                        n
                                (k)             e
             −yk +             θi (s)ξ(s)σi (s)dB(s) = −ξ(T )Fk (ω)                a.s. ,
                     0   i=1


                         Rt P
                            n
                                  (k)
which gives, since                                e
                                 θi (s)ξ(s)σi (s)dB(s) is a Q-martingale (Definition
                         0 i=1
12.2.4c)),
                                       yk = EQ [ξ(T )Fk ] .
Hence

             p(F ) ≥ p(Fk ) ≥ EQ [ξ(T )Fk ] → EQ [ξ(T )F ]                    as k → ∞,
                      by monotone convergence .

Combined with a) this gives

                                       p(F ) = EQ [ξ(T )F ] .

A similar argument gives that

                                       q(F ) = EQ [ξ(T )F ] .
                                                                                                  t
                                                                                                  u

How to Hedge an Attainable Claim

We have seen that if Vzθ (t) is the value process of an admissible portfolio θ(t)
                                  θ
for the market {X(t)}, then V z (t): = ξ(t)Vzθ (t) is the value process of θ(t)
for the normalized market {X(t)} (Lemma 12.2.3). Hence we have
                                                    Zt
                               ξ(t)Vzθ (t) = z +          θ(s)dX(s) .                       (12.3.6)
                                                     0
                                              e are defined as before ((12.2.2)
If (12.2.12) and (12.2.13) hold, then – if Q, B
and (12.2.3)) – we can rewrite this as (see Lemma 12.2.4)

                                  Zt X
                                     n                    m
                                                          X
             ξ(t)Vzθ (t) = z +               θi (s)ξ(s)                 ej (s) .
                                                                σij (s)dB                   (12.3.7)
                                  0    i=1                j=1


Therefore, the portfolio θ(t) = (θ0 (t), . . . , θn (t)) needed to hedge a given
T -claim F is given by
                                                           12.3 Option Pricing   271


                   ξ(t, ω)(θ1 (t), . . . , θn (t))σ(t, ω) = φ(t, ω) ,        (12.3.8)

where φ(t, ω) ∈ Rm is such that
                                             ZT
                        ξ(T )F (ω) = z +                  e
                                                  φ(t, ω)dB(t)               (12.3.9)
                                             0

(and θ0 (t) is given by (12.1.14)).
    In view of this it is of interest to find explicitly the integrand φ(t, ω)
when F is given. One way of doing this is by using a generalized version
of the Clark-Ocone theorem from the Malliavin calculus. See Karatzas and
Ocone (1991). A survey containing their result is in Øksendal (1996)). In the
Markovian case, however, there is a simpler method, which we now describe.
It is a modification of a method used by Hu (1995).
    Let Y (t) be an Itô diffusion in Rn of the form

          dY (t) = b(Y (t))dt + σ(Y (t))dB(t),           Y (0) = y          (12.3.10)

where b: Rn → Rn and σ: Rn → Rn×m are given Lipschitz continuous func-
tions. Assume that Y (t) is uniformly elliptic, i.e. that there exists a constant
c > 0 such that
                            ξ T σ(x)σ T (x)ξ ≥ c|ξ|2                     (12.3.11)
for all ξ ∈ Rn , x ∈ Rn .
    Suppose ρ: Rn → R is a bounded Lipschitz continuous function. Let Z(t)
be the Itô diffusion in Rn given by

      dZ(t) = ρ(Z(t))Z(t)dt + σ(Z(t))dB(t) ;               Z(0) = z .       (12.3.12)

Let h: Rn → R be a continuous function such that E z [|h(Z(t))|] < ∞ for all
z and all t ∈ [0, T ] and define

                              w(t, z) = E z [h(Z(t))]                       (12.3.13)

and
                              g(t, z) = w(T − t, z) .
Then by uniform ellipticity it is known that w(t, z) ∈ C 1,2 ((0, ∞) × Rn )
(see Dynkin 1965 II, Theorem 13.18 p. 53 and Dynkin 1965 I, Theorem 5.11
p. 162) and hence Kolmogorov’s backward equation (Theorem 8.1.1) gives
                        Xn               Xn
              ∂w               ∂w                             ∂2w
                 = ρ(z)     zi     + 12      (σσ T )ij (z) ·         .
              ∂t        i=1
                               ∂zi      i,j=1
                                                             ∂zi ∂zj

Hence, if we apply Itô’s formula to the process

                      η(t): = g(t, Y (t)) = w(T − t, Y (t))                 (12.3.14)
272        12. Application to Mathematical Finance


we get
                 ·
                     ∂g
      dη(t) =           (t, Y (t))
                     ∂t
           n
           X                                                 n
                                                             X                                           ¸
             ∂g                                                     ∂2g
       +               (t, Y (t))bi (Y (t))+ 21                            (t, Y (t)) · (σσ T )ij (Y (t)) dt
           i=1
                 ∂zi                                         i,j=1
                                                                   ∂zi ∂zj
                 n
                 X                             m
                                               X
                   ∂g
             +                 (t, Y (t))            σij (Y (t))dBj (t)
                 i=1
                        ∂zi                    j=1
           n
           X                     ·
             ∂g
       =               (t, Y (t)) (bi (Y (t)) − ρ(Y (t))Yi (t))dt
           i=1
                 ∂zi
                           m
                           X                       ¸
                       +         σij (Y (t))dBj (t) .                                                  (12.3.15)
                           j=1

Suppose that for all y ∈ Rn there exists u(y) ∈ Rm such that

                                                         ·       µ ZT                       ¶¸
                                                                     1         2
σ(y)u(y) = b(y) − ρ(y)y and E exp                                    2        u (Y (s))ds        <∞.   (12.3.16)
                                                                         0

If we as usual define the measure Q = Qu on FT by

                           µ       ZT                                    ZT              ¶
                                                                               2
      dQ(ω) = exp              −        u(Y (t))dB(t) − 21                    u (Y (t))dt dP (ω) ,     (12.3.17)
                                   0                                     0

then
                                                     Zt
                                        e =
                                        B(t)              u(Y (s))ds + B(t) .                          (12.3.18)
                                                     0

is a Brownian motion with respect to Q and (12.3.15) gives
                               n
                               X                              m
                                                              X
                                 ∂g                                             ej (t) .
                 dη(t) =                      (t, Y (t))            σij (Y (t))dB                      (12.3.19)
                               i=1
                                        ∂zi                   j=1

Now by (12.3.14) we have

η(T ) = w(0, Y (T )) = E z [h(Z(0))]z=Y (T ) = h(z)z=Y (T ) = h(Y (T ))                                (12.3.20)

and
                                   η(0) = w(T, Y (0)) = E y [h(Z(T ))] .                               (12.3.21)
Hence by (12.3.19)–(12.3.21)
                                                             12.3 Option Pricing    273


                                       ZT
                     y
     h(Y (T )) = E [h(Z(T ))] +                                      e .
                                            (∇g)T (t, Y (t))σ(Y (t))dB(t)      (12.3.22)
                                       0

By (12.3.10) and (12.3.18) Y (t) is a weak solution of

                                                         e .
                     dY (t) = ρ(Y (t))Y (t)dt + σ(Y (t))dB(t)

Hence, by weak uniqueness (Lemma 5.3.1) we have
                                     y
          w(t, y) = E y [h(Z(t))] = EQ [h(Y (t))]           for all t .        (12.3.23)

Substituting this in (12.3.22) we get:
Theorem 12.3.3. Let Y (t) and Z(t) be as in (12.3.10) and (12.3.12), re-
spectively, and assume that h: Rn → R is as in (12.3.13). Assume that
                                                e by (12.3.17) and (12.3.18).
(12.3.11) and (12.3.16) hold and define Q and B(t)
Then
                                             ZT
                h(Y (T )) = EQy                       e ,
                                [h(Y (T ))] + φ(t, ω)dB(t)
                                                      0

where φ = (φ1 , . . . , φm ), with
               n
               X ∂
 φj (t, ω) =             (E y [h(Z(T −t))])y=Y (t) σij (Y (t)) ;   1 ≤ j ≤ m . (12.3.24)
               i=1
                   ∂yi

In particular, if ρ = b = 0 and σ = Im then u = 0, P = Q and Y (t) = Z(t) =
B(t). Hence we get the representation

                                  ZT X
                                     m
                y                          ∂ z
h(B(T )) = E [h(B(T ))] +                     E [h(B(T − t))]z=B(t) dBj (t) (12.3.25)
                                      j=1
                                          ∂zj
                                  0

    We summarize our results about pricing and hedging of European T -
claims as follows:
Theorem 12.3.4. Let {X(t)}t∈[0,T ] be a complete market. Suppose (12.2.12)
                              e be as in (12.2.2), (12.2.3). Let F be a Eu-
and (12.2.13) hold and let Q, B
ropean T -claim such that EQ [ξ(T )F ] < ∞. Then the price of the claim F
is
                           p(F ) = EQ [ξ(T )F ] .                  (12.3.26)
Moreover, to find a replicating (hedging) portfolio θ(t) = (θ0 (t), . . . , θn (t)) for
the claim F we first find (for example by using Theorem 12.3.3 if possible)
φ ∈ W m such that
274     12. Application to Mathematical Finance


                                                          ZT
                      ξ(T )F = EQ [ξ(T )F ] +                          e .
                                                               φ(t, ω)dB(t)                 (12.3.27)
                                                           0

               b = (θ1 (t), . . . , θn (t)) such that
Then we choose θ(t)
                           b ω)ξ(t, ω)σ(t, ω) = φ(t, ω)
                           θ(t,                                                             (12.3.28)
and we choose θ0 (t) as in (12.1.14).
Proof. (12.3.26) is just part b) of Theorem 12.3.2. The relation (12.3.28)
follows from (12.3.8). Note that the equation (12.3.28) has the solution
                           b ω) = X0 (t)φ(t, ω)Λ(t, ω)
                           θ(t,                                                             (12.3.29)
where Λ(t, ω) is the left inverse of σ(t, ω) (Theorem 12.2.5).                                     t
                                                                                                   u
Example 12.3.5. Suppose the market is X0 (t) = eρt , X1 (t) = Y (t), where
ρ > 0 is constant and Y (t) is an Ornstein-Uhlenbeck process
                     dY (t) = αY (t)dt + σdB(t);                   Y (0) = y
where α, σ are constants, σ 6= 0. How do we hedge the claim
                                  F (ω) = exp(Y (T )) ?
The portfolio θ(t) = (θ0 (t), θ1 (t)) that we seek is given by (12.3.29), i.e.
                                θ1 (t, ω) = eρt σ −1 φ(t, ω)
where φ(t, ω) and V (0) are uniquely given by (12.3.9), i.e.
                                                  ZT
                         ξ(T )F (ω) = z +                         e .
                                                          φ(t, ω)dB(t)
                                                  0

To find φ(t, ω) explicitly we apply Theorem 12.3.3: In this case we choose
h(y) = exp(y)e−ρT and dZ(t) = ρZ(t)dt + dB(t). Then (see Exercise 5.5)
                                                      Zt
                                         ρt
                       Z(t) = Z(0)e + σ                    eρ(t−s) dB(s) .
                                                      0

Hence
                 y
            eρT EQ [h(Y (T − t))] = eρT E y [h(Z(T − t))]
                                              Z−t
                                              T
                 y            ρ(T −t)
            = E [exp(ye                 +σ        eρ(T −t−s) dB(s))]
                                              0
                          ³                   σ 2 2ρ(T −t)     ´
                 = exp yeρ(T −t) +               (e        − 1)               if ρ 6= 0 .
                                              4ρ
                                                                12.3 Option Pricing       275


This gives

                 ∂ ³    ³            σ 2 2ρ(T −t)      ´´
      φ(t, ω) =      exp yeρ(T −t) +    (e        − 1)            σ e−ρT
                ∂y                   4ρ                   y=Y (t)
                         n                σ 2 2ρ(T −t)      o
              = σe−ρt exp Y (t)eρ(T −t) +    (e        − 1)
                                          4ρ
and hence, if ρ 6= 0,
                           n                σ 2 2ρ(T −t)     o
               θ1 (t) = exp Y (t)eρ(T −t) +    (e        − 1) .
                                            4ρ
                          ©          2       ª
If ρ = 0 then θ1 (t) = exp Y (t) + σ2 (T − t) .

The Generalized Black & Scholes Model

Let us now specialize to a situation where the market has just two securities
X0 (t), X1 (t) where X0 , X1 are Itô processes of the form

                  dX0 (t) = ρ(t, ω)X0 (t)dt             (as before)                 (12.3.30)
                  dX1 (t) = α(t, ω)X1 (t)dt + β(t, ω)X1 (t)dB(t) ,                  (12.3.31)

where B(t) is 1-dimensional and α(t, ω), β(t, ω) are 1-dimensional processes
in W.
   Note that the solution of (12.3.31) is
                        µ Zt                    Zt                             ¶
 X1 (t) = X1 (0) exp            β(s, ω)dB(s)+        (α(s, ω)− 12 β 2 (s, ω))ds    . (12.3.32)
                            0                   0

The equation (12.2.12) gets the form

              X1 (t)β(t, ω)u(t, ω) = X1 (t)α(t, ω) − X1 (t)ρ(t, ω)

which has the solution

      u(t, ω) = β −1 (t, ω)[α(t, ω) − ρ(t, ω)]             if β(t, ω) 6= 0 .        (12.3.33)

So (12.2.13) holds iff
              ·      µ ZT                                  ¶¸
                        1       (α(s, ω) − ρ(s, ω))2
             E exp      2                            ds         <∞.                 (12.3.34)
                                      β 2 (s, ω)
                            0

In this case we have an equivalent martingale measure Q given by (12.2.2)
and the market has no arbitrage, by Theorem 12.1.8. Moreover, the market
is complete by Corollary 12.2.5. Therefore we get by Theorem 12.3.2 that
276      12. Application to Mathematical Finance


the price at t = 0 of a European option with payoff given by a contingent
T -claim F is
                        p(F ) = q(F ) = EQ [ξ(T )F ] ,           (12.3.35)
provided this quantity is finite.
   Now suppose that ρ(t, ω) = ρ(t) and β(t, ω) = β(t) are deterministic and
that the payoff F (ω) has the form

                                     F (ω) = f (X1 (T, ω))

for some lower bounded function f : R → R such that

                                     EQ [f (X1 (T ))] < ∞ .

Then by (12.3.35) the price p = p(F ) = q(F ) is, with x1 = X1 (0),
                  · µ       µ ZT            ZT                 ¶¶¸
       p = ξ(T )EQ f x1 exp           e              1 2
                                 β(s)dB(s) + (ρ(s) − 2 β (s))ds    .
                                          0                   0

                                                                       RT
Under the measure Q the random variable Y =                                      e
                                                                            β(s)dB(s) is normally
                                                                       0
                                                              RT
distributed with mean 0 and variance δ 2 : =                       β 2 (t)dt and therefore we can
                                                              0
write down a more explicit formula for p. The result is the following:
Theorem 12.3.6 (The generalized Black & Scholes formula).
Suppose X(t) = (X0 (t), X1 (t)) is given by

 dX0 (t) = ρ(t)X0 (t)dt ;                X0 (0) = 1                                     (12.3.36)
 dX1 (t) = α(t, ω)X1 (t)dt + β(t)X1 (t)dB(t) ;                     X1 (0) = x1 > 0      (12.3.37)

where ρ(t), β(t) are deterministic and
                    ·       µ ZT                                  ¶¸
                                 1            (α(t, ω) − ρ(t))2
                   E exp         2                              dt   <∞.
                                                    β 2 (t)
                                     0

a) Then the market {X(t)} is complete and the price at time t = 0 of the
   European T -claim F (ω) = f (X1 (T, ω)) where EQ [f (X1 (T, ω))] < ∞ is

               Z µ      · ZT                    ¸¶  µ 2¶
      ξ(T )                                           y
   p= √         f x1 exp y+ (ρ(s)− 12 β 2 (s))ds exp − 2 dy (12.3.38)
     δ 2π                                             2δ
               R                      0

                            RT                           RT
      where ξ(T ) = exp(−        ρ(s)ds) and δ 2 =            β 2 (s)ds.
                            0                            0
                                                           12.3 Option Pricing   277


b) If ρ, α, β 6= 0 are constants and f ∈ C 1 (R), then the self-financing
   portfolio θ(t) = (θ0 (t), θ1 (t)) needed to replicate the T -claim F (ω) =
   f (X1 (T, ω)) is given by
                                  Z
                          1
        θ1 (t, ω) = p               f 0 (X1 (t, ω) exp{βx + (ρ − 12 β 2 )(T − t)})
                       2π(T − t)
                                  R
                     ³           x2                    ´
                · exp βx −             − 12 β 2 (T − t) dx                  (12.3.39)
                              2(T − t)

   and θ0 (t, ω) is given by (12.1.14).
Proof. Part a) is already proved and part b) follows from Theorem 12.3.3
and Theorem 12.3.4: (Strictly speaking condition (12.3.11) is not satisfied for
the process X1 (unless x is bounded away from 0), but in this case it can be
verified directly that u(t, z) given by (12.3.13) belongs to C 1,2 ((0, ∞) × R),
so Theorem 12.3.3 is still valid.) The portfolio we seek is by (12.3.28) given
by
                     θ1 (t, ω) = X0 (t)(βX1 (t, ω))−1 φ(t, ω)
where φ(t, ω) is given by (12.3.24) with h(y) = e−ρT f (y) and

                 Y (t) = X1 (t) = x1 exp{βB(t) + (α − 12 β 2 )t}

and                                  n       ³          ´o
                      Z y (t) = y exp βB(t) + ρ − 12 β 2 t .

Hence
                                        ∂ £ y −ρT                  ¤
      θ1 (t, ω) = eρt (βX1 (t, ω))−1        E [e   f (Z(T − t))] y=Y (t) · βX1 (t, ω)
                                       ∂y
                    ∂    £                                               ¤
        = eρ(t−T ) E f (y exp{βB(T − t) + (ρ − 21 β 2 )(T − t)}) y=Y (t)
                   ∂y
           ρ(t−T )
                     £
        =e         E f 0 (y exp{βB(T − t) + (ρ − 21 β 2 )(T − t)})
                                                       ¤
            · exp{βB(T − t) + (ρ − 21 β 2 )(T − t)} y=Y (t)
                          Z
             eρ(t−T )
        =p                   f 0 (Y (t, ω) exp{βx + (ρ − 12 β 2 )(T − t)})
             2π(T − t)
                         R                          2
                                               − 2(Tx−t)
             · exp{βx + (ρ − 12 β 2 )(T − t)}e             dx ,

which is (12.3.39).                                                                t
                                                                                   u

American options

The difference between European and American options is that in the latter
case the buyer of the option is free to choose any exercise time τ before or at
278    12. Application to Mathematical Finance


the given expiration time T (and the guaranteed payoff may depend on both
τ and ω.) This exercise time τ may be stochastic (depend on ω), but only in
such a way that the decision to exercise before or at a time t only depends
on the history up to time t. More precisely, we require that for all t we have
                                                  (m)
                            {ω; τ (ω) ≤ t} ∈ Ft         .
                                  (m)
In other words, τ must be an Ft         -stopping time (Definition 7.2.1).
                                                                     (m)
Definition 12.3.7. An American contingent T -claim is an Ft -adapted,
(t, ω)-measurable and a.s. lower bounded continuous stochastic process F (t) =
F (t, ω); t ∈ [0, T ], ω ∈ Ω. An American option on such a claim F (t, ω)
gives the owner of the option the right (but not the obligation) to choose
any stopping time τ (ω) ≤ T as exercise time for the option, resulting in a
payment F (τ (ω), ω) to the owner.

    Let F (t) = F (t, ω) be an American contingent claim. Suppose you were
offered a guarantee to be paid the amount F (τ (ω), ω) at the (stopping) time
τ (ω) ≤ T that you are free to choose. How much would you be willing to pay
for such a guarantee? We repeat the argument preceding Definition 12.3.1:
    If I – the buyer – pay the price y for this guarantee, then I will have an
initial fortune (debt) −y in my investment strategy. With this initial fortune
−y it must be possible to find a stopping time τ ≤ T and an admissible
portfolio θ such that
                      θ
                     V−y (τ (ω), ω) + F (τ (ω), ω) ≥ 0      a.s.

Thus the maximal price p = pA (F ) the buyer is willing to pay is

      (Buyer’s price of the American contingent claim F )                  (12.3.40)
      pA (F ) = sup{y; There exists a stopping time τ ≤ T
               and an admissible portfolio θ such that
                                          τZ(ω)
                 θ
                V−y (τ (ω), ω): = −y +        θ(s)dX(s) ≥ −F (τ (ω), ω) a.s.}
                                          0

On the other hand, the seller could argue as follows: If I – the seller – receive
the price z for such a guarantee, then with this initial fortune z it must be
possible to find an admissible portfolio θ which generates a value process
which at any time is not less than the amount promised to pay to the buyer:

                  Vzθ (t, ω) ≥ F (t, ω) a.s. for all t ∈ [0, T ] .

Thus the minimal price q = qA (F ) the seller is willing to accept is
                                                  12.3 Option Pricing   279


       (Seller’s price of the American contingent claim F )        (12.3.41)
       qA (F ) = inf{z; There exists an admissible portfolio θ
                such that for all t ∈ [0, T ] we have
                                Zt
                  θ
                Vz (t, ω): = z + θ(s)dX(s) ≥ F (t, ω) a.s.}
                               0

We can now prove a result analogous to Theorem 12.3.2. The result is basi-
cally due to Bensoussan (1984) and Karatzas (1988).
280      12. Application to Mathematical Finance


Theorem 12.3.8 (Pricing formula for American options).
a) Suppose (12.2.12) and (12.2.13) and let Q be as in (12.2.2). Let F (t) =
   F (t, ω); t ∈ [0, T ] be an American contingent T -claim such that

                                       sup EQ [ξ(τ )F (τ )] < ∞                 (12.3.42)
                                       τ ≤T

      Then
                  pA (F ) ≤ sup EQ [ξ(τ )F (τ )] ≤ qA (F ) ≤ ∞ .                (12.3.43)
                                τ ≤T

b) Suppose, in addition to the conditions in a), that the market {X(t)} is
   complete. Then

                            pA (F ) = sup EQ [ξ(τ )F (τ )] = qA (F ) .          (12.3.44)
                                         τ ≤T

Proof. a) We proceed as in the proof of Theorem 12.3.2: Suppose y ∈ R and
there exists a stopping time τ ≤ T and an admissible portfolio θ such that
                                              Zτ
                    θ
                   V−y (τ, ω) = −y +               θ(s)dX(s) ≥ −F (τ )   a.s.
                                              0

Then as before we get
                        Zτ X
                           n
                 −y +                              e
                                  θi (s)ξ(s)σi (s)dB(s) ≥ −ξ(τ )F (τ ) a.s.
                        0   i=1


Taking expectations with respect to Q we get

                        y ≤ EQ [ξ(τ )F (τ )] ≤ sup EQ [ξ(τ )F (τ )] .
                                                      τ ≤T

Since this holds for all such y we conclude that

                                pA (F ) ≤ sup EQ [ξ(τ )F (τ )] .                (12.3.45)
                                              τ ≤T

Similarly, suppose z ∈ R and there exists an admissible portfolio θ such that
                                Zt
             Vzθ (t, ω) = z +        θ(s)dX(s) ≥ F (t) a.s. for all t ∈ [0, T ] .
                                0

Then, as above, if τ ≤ T is a stopping time we get
                        Zτ X
                           n
                   z+                              e
                                  θi (s)ξ(s)σi (s)dB(s) ≥ ξ(τ )F (τ )    a.s.
                        0   i=1
                                                                 12.3 Option Pricing   281


Again, taking expectations with respect to Q and then supremum over τ ≤ T
we get
                          z ≥ sup EQ [ξ(τ )F (τ )] .
                                       τ ≤T

Since this holds for all such z, we get

                              qA (F ) ≥ sup EQ [ξ(τ )F (τ )] .                    (12.3.46)
                                         τ ≤T

b) Next, assume in addition that the market is complete. Choose a stopping
time τ ≤ T . Define
                                    ½
                                      k        if F (t, ω) ≥ k
               Fk (t) = Fk (t, ω) =
                                      F (t, ω) if F (t, ω) < k

and put
                               Gk (ω) = X0 (T )ξ(τ )Fk (τ ) .
Then Gk is a bounded T -claim, so by completeness we can find yk ∈ R and
a portfolio θ(k) such that
                                ZT
                       −yk +         θ(k) (s)dX(s) = −Gk (ω) a.s.
                                0

and such that
                                            Zt
                                    −yk +        θ(k) (s)dX(s)
                                            0

is a Q-martingale. Then, by (12.2.8)–(12.2.9),

                       ZT
            −yk +           θ(k) (s)dX(s) = −ξ(T )Gk (ω) = −ξ(τ )Fk (τ )
                       0

and hence
                  Zτ                     h      ZT                     i
          −yk +        θ(k) (s)dX(s) = EQ − yk + θ(k) (s)dX(s) | Fτ(m)
                  0                             0
                                         (m)
                  = EQ [−ξ(τ )Fk (τ ) | Fτ ] = −ξ(τ )Fk (τ ) .

From this we get, again by (12.2.8)–(12.2.9),
                                Zτ
                       −yk +         θ(k) (s)dX(s) = −Fk (τ ) a.s.
                                0
282        12. Application to Mathematical Finance


and
                                   yk = EQ [ξ(τ )Fk (τ )] .
This shows that any price of the form EQ [ξ(τ )Fk (τ )] for some stopping time
τ ≤ T would be acceptable for the buyer of an American option on the claim
Fk (t, ω). Hence

                        pA (F ) ≥ pA (Fk ) ≥ sup EQ [ξ(τ )Fk (τ )] .
                                                 τ ≤T

Letting k → ∞ we obtain by monotone convergence

                              pA (F ) ≥ sup EQ [ξ(τ )F (τ )] .
                                          τ ≤T

It remains to show that if we put

                                  z = sup EQ [ξ(τ )F (τ )]                             (12.3.47)
                                      0≤τ ≤T

then there exists an admissible portfolio θ(s, ω) which superreplicates F (t, ω),
in the sense that
           Zt
      z+        θ(s, ω)dX(s) ≥ F (t, ω)          for a.a. (t, ω) ∈ [0, T ] × Ω .       (12.3.48)
           0

The details of the proof of this can be found in Karatzas (1997), Theo-
rem 1.4.3. Here we only sketch the proof:
   Define the Snell envelope
                                                        (m)
                   S(t) = sup EQ [ξ(τ )F (τ )|Ft              ];         0≤t≤T .
                          t≤τ ≤T

                                                                   (m)
Then S(t) is a supermartingale w.r.t. Q and {Ft                          }, so by the Doob-Meyer
decomposition we can write

                          S(t) = M (t) − A(t) ;               0≤t≤T
                            (m)
where M (t) is a Q, {Ft }-martingale with M (0) = S(0) = z and A(t) is a
nondecreasing process with A(0) = 0. It is a consequence of Lemma 12.2.1
                                                                 e Hence
that we can represent the martingale M as an Itô integral w.r.t B.
      Zt
 z+                e
           φ(s, ω)dB(s) = M (t) = S(t) + A(t) ≥ S(t) ;                      0≤t≤T      (12.3.49)
      0

                 (m)
for some Ft -adapted process φ(s, ω). Since the market is complete, we
know by Theorem 12.2.5 that σ(t, ω) has a left inverse Λ(t, ω). So if we define
θb = (θ1 , . . . , θn ) by
                                                                         12.3 Option Pricing       283


                                        b ω) = X0 (t)φ(t, ω)Λ(t, ω)
                                        θ(t,
then by (12.3.49) and Lemma 12.2.4 we get
       Zt                       Zt X
                                   n                          Zt
  z+        θb dX = z +                               e=z+
                                              ξθi σi dB               e ≥ S(t) ;
                                                                   φ dB                     0≤t≤T .
       0                            0   i=1                   0

Hence, by Lemma 12.2.3,
      Zt
 z+        θ(s, ω)dX(s) ≥ X0 (t)S(t) ≥ X0 (t)ξ(t)F (t) = F (t) ;                            0≤t≤T .
      0
                                                                                                      t
                                                                                                      u

The Itô Diffusion Case: Connection to Optimal Stopping

Theorem 12.3.8 shows that pricing an American option is an optimal stopping
problem. In the general case the solution to this problem can be expressed
in terms of the Snell envelope. See e.g. El Karoui (1981) and Fakeev (1970).
In the Itô diffusion case we get an optimal stopping problem of the type
discussed in Chapter 10. We now consider this case in more detail:
    Assume the market is an (n + 1)-dimensional Itô diffusion X(t) =
(X0 (t), X1 (t), . . . , Xn (t)); t ≥ 0 of the form (see (12.1.1)–(12.1.2))

                 dX0 (t) = ρ(t, X(t))X0 (t)dt ;                    X0 (0) = 1                 (12.3.50)

and
                                                   m
                                                   X
            dXi (t) = µi (t, X(t))dt +                   σij (t, X(t))dBj (t)                 (12.3.51)
                                                   j=1
                          = µi (t, X(t))dt + σi (t, X(t))dB(t) ;                 Xi (0) = xi ,

where ρ, µi and σij are given functions satisfying the conditions of Theo-
rem 5.2.1.
    Further, assume that the conditions corresponding to (12.2.12)–(12.2.13)
are satisfied, i.e. there exists u(t, x) ∈ Rm×1 such that, for all t, x =
(x0 , x1 , . . . , xn ),

       σi (t, x)u(t, x) = µi (t, x) − ρ(t, x)xi                    for i = 1, . . . , n .     (12.3.52)

and
                     h         µ ZT                  ¶i
                 x              1        2
             E           exp    2       u (t, X(t))dt < ∞                for all x            (12.3.53)
                                    0

where as usual E x denotes the expectation w.r.t. the law of Xt when starting
at x = (1, x1 , . . . , xn ). For 0 ≤ t ≤ T put
284     12. Application to Mathematical Finance

                      µ Zt                  Zt            ¶
                                          1    2
M (t) = M (t, ω) = exp − u(s, X(s))dB(s)− 2 u (s, X(s))ds   (12.3.54)
                          0                              0

                                                                  (m)
and define, as in (12.2.2), the probability measure Q on FT             by

                           dQ(ω) = M (T, ω)dP (ω) .                          (12.3.55)

Now assume that F (t, ω) is an American contingent T -claim of Markovian
type, i.e.
                          F (t, ω) = g(t, X(t, ω))              (12.3.56)
for some continuous, lower bounded function g: R × Rn+1 → R. Then if
the market {X(t)}t∈[0,T ] is complete, the price pA (F ) of this claim is by
Theorem 12.3.8 given by

       pA (F ) = sup EQ [ξ(τ )g(τ, X(τ ))] = sup E[M (T )ξ(τ )g(τ, X(τ ))]
                 τ ≤T                             τ ≤T
              = sup E[E[M (T )ξ(τ )g(τ, X(τ ))|Fτ ]]
                 τ ≤T
              = sup E[ξ(τ )g(τ, X(τ ))E[M (T )|Fτ ]]
                 τ ≤T
              = sup E[M (τ )ξ(τ )g(τ, X(τ ))]                                (12.3.57)
                 τ ≤T

where we have used that M (t) is a P -martingale and Doob’s optional sam-
pling theorem (see Gihman and Skorohod (1975, Theorem 6, p. 11)). Define

                                 µ Zt
           K(t) = M (t)ξ(t) = exp − u(s, X(s)dB(s)
                                             0
                                  Zt                                  ¶
                                       £1 2                        ¤
                              −         2 u (s, X(s)) + ρ(s, X(s))  ds  .    (12.3.58)
                                  0

Then
             dK(t) = −ρ(t, X(t))K(t)dt − u(t, X(t))K(t)dB(t) .
Hence if we define the (n + 3) – dimensional Itô diffusion Y (t) by
                                                    
                        dt             1             0
                              
                       dK(t)   −ρK 
                                                 −uK 
                                                        
            dt         dX0 (t)   ρX0          0 
                                                    
 dY (t) =  dK(t)  =  dX1 (t)  =  µ1 dt +  σ1 dB(t) ; Y (0) = y
                                                    
            dX(t)      ..        ..           .. 
                       .         .            . 
                        dXn (t)       µn            σn
                                                                     (12.3.59)
                                                                12.3 Option Pricing    285


we see that
                           pA (F ) = sup E[G(Y (τ ))] ,                           (12.3.60)
                                            τ ≤T

where

       G(y) = G(s, k, x) = kg(s, x) ;              y = (s, k, x) ∈ R × R × Rn+1 .

We have proved:
Theorem 12.3.9. The price pA (F ) of an American contingent T -claim F of
the Markovian form (12.3.56) is the solution of the optimal stopping problem
(12.3.60), with Itô diffusion Y (t) given by (12.3.59).
   We recognize (12.3.60) as a special case of the optimal stopping problem
considered in Theorem 10.4.1. We can therefore use the method there to
evaluate pA (F ) in special cases.
Example 12.3.10. Consider the Black and Scholes market

            dX0 (t) = ρX0 (t)dt ;   X0 (0) = 1
            dX1 (t) = αX1 (t)dt + βX1 (t)dB(t) ;                 X1 (0) = x1 > 0 .

where ρ, α, β are constants, β 6= 0. Then equation (12.3.52) becomes

                               βx1 u(x1 ) = αx1 − ρx1

i.e.
                                            α−ρ
                      u(x1 ) = u =                        for all x1 .
                                             β
Hence                      µ                        ½ µ           ¶2       ¾¶
                                   α−ρ                1     α−ρ
              K(t) = exp       −       B(t) −         2                  +ρ t .
                                    β                        β
Suppose the American claim is given by

                                   F (t, ω) = g(t, X1 (t))

for some continuous lower bounded function g(t, x1 ). Then the price of the
American option is

                      pA (F ) = sup E[K(τ )g(τ, X1 (τ ))] .
                                     τ ≤T

If we regard this price pA (F ) as a function Φ(s, k, x) of the starting point y =
(s, k, x) of the process dY (t) = (dt, dK(t), dX(t)), then to find Φ it suffices
to find a function φ(s, k, x) which satisfies the conditions of Theorem 10.4.1.
In this case f = 0 and
286     12. Application to Mathematical Finance

                         ∂φ          ∂φ       ∂φ         ∂φ
           Lφ(s, k, x) =      − ρk      + ρx0     + αx1
                         ∂s          ∂k       ∂x0        ∂x1
                 µ       ¶2      2                   2
                   α − ρ       ∂   φ               ∂   φ             ∂2φ
            + 12            k 2 2 − (α − ρ)kx1           + 21 β 2 x21 2 .
                     β         ∂k                 ∂k∂x1              ∂x1
If T < ∞ then we cannot factor out the dependence on time s as we often
did in Chapter 10. Therefore the problem of finding φ is much harder in this
case. To illustrate the difficulty let us simplify even further by assuming that

                           α=ρ         (so that P = Q)

and that

              g(t, x1 ) = (a − x1 )+     where a > 0 is a constant .

Then the problem becomes to find the American put option price

                      pA (F ) = sup E[e−ρτ (a − X1 (τ ))+ ] ,               (12.3.61)
                                τ ≤T

which is related to the finite horizon version of Example 10.2.2 (and Exam-
ple 10.4.2). A description of the American put option is as follows: The owner
of this option has the right (but not the obligation) to sell one stock at a
specified price a at any time τ he chooses before or at the terminal time T . If
he sells at a time τ ≤ T when the market price is X1 (τ ) < a, he increases his
fortune with the difference a − X1 (τ ). Thus (12.3.61) represents the maximal
expected discounted payoff to the owner of the option.
    In this case we can disregard the variables k and x0 , so we search for a
function φ(s, x1 ) ∈ C 1 (R2 ) satisfying the variational inequalities (see Theo-
rem 10.4.1)

                 φ(s, x1 ) ≥ e−ρs (a − x1 )+             for all s, x1      (12.3.62)
                ∂φ       ∂φ              ∂2φ
                   + ρx1     + 12 β 2 x21 2 ≤ 0          outside D          (12.3.63)
                ∂s       ∂x1             ∂x1
and
              ∂φ       ∂φ              ∂2φ
                 + ρx1     + 12 β 2 x21 2 = 0           on D ,              (12.3.64)
              ∂s       ∂x1             ∂x1
where
                    D = {(s, x1 ); φ(s, x1 ) > e−ρs (a − x1 )+ }            (12.3.65)
is the continuation region.
    If such a φ is found, and the additional assumptions of Theorem 10.4.1
hold, then we can conclude that

                                φ(s, x1 ) = Φ(s, x1 )

and hence pA (F ) = φ(0, x1 ) is the option price at time t = 0. Moreover,
                                                      12.3 Option Pricing   287


                    τ ∗ = τD = inf{t > 0; (s + t, X1 (t)) 6∈ D}

is the corresponding optimal stopping time, i.e. the optimal time to exercise
the American option. Unfortunately, even in this case it seems that an explicit
analytic solution is very hard (possibly impossible) to find. However, there
are interesting partial results and good approximation procedures. See e.g.
Barles et al. (1995), Bather (1997), Jacka (1991), Karatzas (1997), Musiela
and Rutkowski (1997) and the references therein. For example, it is known
(see Jacka (1991)) that the continuation region D has the form

                    D = {(t, x1 ) ∈ (0, T ) × R , x1 > f (t)} ,

i.e. D is the region above the graph of f , for some continuous, increasing
function f : (0, T ) → R. Thus the problem is to find the function f . In Barles
et al. (1995) it is shown that
                             p
               f (t) ∼ a − βa (T − t)| ln(T − t)|    as t → T − ,

in the sense that
                           f (t) − a
                      p                         →1   as t → T − .
                −βa       (T − t)| ln(T − t)|

This indicates that the continuation region has the shape shown in the figure.
But its exact form is still unknown.




   For the corresponding American call option the situation is much simpler.
See Exercise 12.14.
288     12. Application to Mathematical Finance


Exercises

12.1. a) Prove that the price process {X(t)}t∈[0,T ] has an arbitrage iff the
         normalized price process {X(t)}t∈[0,T ] has an arbitrage.
      b) Suppose {X(t)}t∈[0,T ] is normalized. Prove that {X(t)}t∈[0,T ] has
         an arbitrage iff there exists an admissible portfolio θ such that

              V θ (0) ≤ V θ (T ) a.s. and            P [V θ (T ) > V θ (0)] > 0 .       (12.3.66)

           In other words, in normalized markets it is not essential that we
           require V θ (0) = 0 for an arbitrage θ, only that the gains V θ (T ) −
           V θ (0) is nonnegative a.s. and positive with positive probability.
           (Hint: If θ is as in (12.3.66) define θ(t)  e = (θe0 (t), . . . , θen (t)) as fol-
           lows:
           Let θei (t) = θ(t) for i = 1, . . . , n; t ∈ [0, T ]. Then choose θe0 (0) such
           that V e θ
                      (0) = 0 and define θe0 (t) according to (12.1.15) to make θe
           self-financing. Then

                                     Zt                   Zt
           Ve
            θ       e · X(t) =
              (t) = θ(t)                   e
                                           θ(s)dX(s) =         θ(s)dX(s) = V θ (t) − V θ (0) .)
                                     0                    0

12.2. Let θ(t) = (θ0 , . . . , θn ) be a constant portfolio.
      Prove that θ is self-financing.
12.3. Suppose {X(t)} is a complete normalized market and that (12.2.12)
      and (12.2.13) hold. Suppose n = m and that σ is invertible with a
      bounded inverse. Then any lower bounded claim F such that

                                                EQ [F 2 ] < ∞

       is attainable.
       (Hint: Use the argument in the proof of Theorem 12.2.5: Choose
       bounded T -claims Fk such that

                       Fk → F        in L2 (Q)         and E[Fk ] = E[F ] .
                                                                                  (k)        (k)
       By completeness there exist admissible portfolios θ(k) = (θ0 , . . . , θn )
       and constants Vk (0) such that

                                ZT                                   ZT
           Fk (ω) = Vk (0) +         θ   (k)
                                               (s)dX(s) = Vk (0) +        θb(k) (s)σ(s)dB(s)
                                                                                        e
                                0                                     0


       where θb(k) = (θ1 , . . . , θn ). It follows that Vk (0) = EQ [Fk ] → EQ [F ]
                          (k)            (k)

       as k → ∞.
                                                                           Exercises      289


      By the Itô isometry the sequence {θb(k) σ}k is a Cauchy sequence in
      L2 (λ × Q) and hence converges in this space. Conclude that there
      exists an admissible θ such that
                                                     ZT
                                 F (ω) = EQ [F ] +        θ(s)dX(s) .)
                                                     0

12.4. Let B(t) be 1-dimensional Brownian motion. Show that there exist
      θ1 (t, ω), θ2 (t, ω) ∈ W such that if we define

                    Zt                                      Zt
      V1 (t) = 1+        θ1 (s, ω)dB(s),     V2 (t) = 2+         θ2 (s, ω)dB(s) ;   t ∈ [0, 1]
                    0                                       0

      then
                                        V1 (1) = V2 (1) = 0
      and
                                      V1 (t) ≥ 0 ,   V2 (t) ≥ 0
      for a.a. (t, ω).
      Therefore both θ1 (t, ω) and θ2 (t, ω) are admissible portfolios for the
      claim F (ω) = 0 in the normalized market with n = 1 and X1 (t) = B(t).
      In particular, if we drop the martingale condition in Definition 12.2.4b)
      we have no uniqueness of replicating portfolios, even if we require the
      portfolio to be admissible. (Note, however, that we have uniqueness if
      we require that θ ∈ V(0, 1), by Theorem 4.3.3).
      (Hint: Use Example 12.1.4 with a = −1 and with a = −2. Then define,
      for i = 1, 2,                ( 1
                                    √
                                      1−t
                                           for 0 ≤ t < α−i
                          θi (t) =
                                      0    for α−i ≤ t ≤ 1
      and
                            Zt
             Vi (t) = i +        θi (s)dB(s) = i + Y (t ∧ α−i ) ;         0 ≤ t ≤ 1 .)
                            0

                                                      e
12.5. Prove the first part of Lemma 12.2.2, i.e. that B(t) given by (12.2.3)
             (m)
      is an Ft -martingale (see the Remark b) following this lemma).
12.6. Determine if the following normalized markets {X(t)}t∈[0,T ] allow an
      arbitrage. If so, find one.
      a) (n = m = 2)
         dX1 (t) = 3dt + dB1 (t) + dB2 (t),
         dX2 (t) = −dt + dB1 (t) − dB2 (t).
290    12. Application to Mathematical Finance


      b) (n = 2, m = 3)
         dX1 (t) = dt + dB1 (t) + dB2 (t) − dB3 (t)
         dX2 (t) = 5dt − dB1 (t) + dB2 (t) + dB3 (t)
      c) (n = 2, m = 3)
         dX1 (t) = dt + dB1 (t) + dB2 (t) − dB3 (t)
         dX2 (t) = 5dt − dB1 (t) − dB2 (t) + dB3 (t)
      d) (n = 2, m = 3)
         dX1 (t) = dt + dB1 (t) + dB2 (t) − dB3 (t)
         dX2 (t) = −3dt − 3dB1 (t) − 3dB2 (t) + 3dB3 (t)
      e) (n = 3, m = 2)
         dX1 (t) = dt + dB1 (t) + dB2 (t)
         dX2 (t) = 2dt + dB1 (t) − dB2 (t)
         dX3 (t) = 3dt − dB1 (t) + dB2 (t)
      f) (n = 3, m = 2)
         dX1 (t) = dt + dB1 (t) + dB2 (t)
         dX2 (t) = 2dt + dB1 (t) − dB2 (t)
         dX3 (t) = −2dt − dB1 (t) + dB2 (t)
12.7. Determine which of the nonarbitrage markets {X(t)}t∈[0,T ] of Exer-
      cise 12.6 a)–f) are complete. For those which are not complete, find a
      T -claim which is not attainable.
12.8. Let Bt be 1-dimensional Brownian motion. Use Theorem 12.3.3 to find
      z ∈ R and φ(t, ω) ∈ V(0, T ) such that

                                           ZT
                             F (ω) = z +        φ(t, ω)dB(t)
                                           0

      in the following cases:
      (i) F (ω) = B 2 (T, ω)
      (ii) F (ω) = B 3 (T, ω)
      (iii) F (ω) = exp B(T, ω).
            (Compare with the methods you used in Exercise 4.14.)
12.9. Let Bt be n-dimensional Brownian motion. Use Theorem 12.3.3 to find
      z ∈ R and φ(t, ω) ∈ V n (0, T ) such that

                                           ZT
                             F (ω) = z +        φ(t, ω)dB(t)
                                           0

      in the following cases
      (i) F (ω) = B 2 (T, ω) (= B12 (T, ω) + · · · + Bn2 (T, ω))
      (ii) F (ω) = exp(B1 (T, ω) + · · · + Bn (T, ω)).
                                                                  Exercises     291


12.10. Let X(t) be a geometric Brownian motion given by

                         dX(t) = αX(t)dt + βX(t)dB(t) ,

      where α and β are constants. Use Theorem 12.3.3 to find z ∈ R and
      φ(t, ω) ∈ V(0, T ) such that

                                            ZT
                          X(T, ω) = z +          φ(t, ω)dB(t) .
                                            0

12.11. Suppose the market is given by

              dX0 (t) = ρX0 (t)dt ;    X0 (0) = 1
              dX1 (t) = (m − X1 (t))dt + σdB(t) ;           X1 (0) = x1 > 0 .

      (the mean-reverting Ornstein-Uhlenbeck process) where ρ > 0, m > 0
      and σ 6= 0 are constants.
      a) Find the price EQ [ξ(T )F ] of the European T -claim

                                     F (ω) = X1 (T, ω) .

      b) Find the replicating portfolio θ(t) = (θ0 (t), θ1 (t)) for this claim.
         (Hint: Use Theorem 12.3.4, as in Example 12.3.5.)
12.12. Consider a market (X0 (t), X1 (t)) ∈ R2 where

              dX0 (t) = ρX0 (t)dt ;       X0 (0) = 1     ρ > 0 constant) .

      Find the price EQ [ξ(T )F ] of the European T -claim

                                     F (ω) = B(T, ω)

      and find the corresponding replicating portfolio θ(t) = (θ0 (t), θ1 (t)) in
      the following cases
      a) dX1 (t) = αX1 (t)dt + βX1 (t)dB(t); α, β constants, β 6= 0
      b) dX1 (t) = c dB(t) ; c 6= 0 constant
      c) dX1 (t) = αX1 (t)dt + σ dB(t) ; α, σ constants, σ 6= 0.
12.13. (The classical Black & Scholes formula).
      Suppose X(t) = (X0 (t), X1 (t)) is given by

             dX0 (t) = ρX0 (t)dt ;       X0 (0) = 1
             dX1 (t) = αX1 (t)dt + βX1 (t)dB(t) ;        X1 (0) = x1 > 0

      where ρ, α, β are constants, β 6= 0. Moreover, suppose that the Euro-
      pean T -claim is the European call, defined by
292    12. Application to Mathematical Finance

                                        ½
                                         X1 (T, ω) − K if X1 (T, ω) > K
          F (ω) = (X1 (T, ω) − K)+ =
                                         0             if X1 (T, ω) ≤ K

      where K > 0 is a given constant (the exercise price). Prove that in
      this case the option pricing formula (12.3.38) of Theorem 12.3.6 can
      be written                                     √
                        p = x1 Φ(u) − e−ρT KΦ(u − β T )          (12.3.67)
      where
                                             Zu
                                     1                   2
                                                      − x2
                             Φ(u) = √             e          dx            (12.3.68)
                                      2π
                                            −∞

      is the distribution function of the standard normal density and

                                 ln( xK1 ) + (ρ + 12 β 2 )T
                            u=               √              .              (12.3.69)
                                            β T
      This is the celebrated Black & Scholes formula (Black and Scholes
      (1973)), which is of fundamental importance in today’s finance.
12.14. (The American call)
      Let X(t) = (X0 (t), X1 (t)) be as in Exercise 12.13. If the American
      T -claim is given by

                   F (t, ω) = (X1 (t, ω) − K)+ ,               0≤t≤T ,

      then the corresponding option is called the American call.
      According to Theorem 12.3.8 the price of an American call is given by

                      pA (F ) = sup EQ [e−ρτ (X1 (τ ) − K)+ ] .
                                τ ≤T

      Prove that
                        pA (F ) = e−ρT EQ [(X1 (T ) − K)+ ] ,
      i.e. that it is always optimal to exercise the American call at the ter-
      minal time T , if at all. Hence the price of an American call option
      coincides with that of a European call option.
      (Hint: Define
                              Y (t) = e−ρt (X1 (t) − K) .
      a) Prove that Y (t) is a Q-submartingale (Appendix C), i.e.

                         Y (t) ≤ EQ [Y (s)|Ft ]              for s > t .

      b) Then use the Jensen inequality (Appendix B) to prove that

                              Z(t): = e−ρt (X1 (t) − K)+

         is also a Q-submartingale.
                                                               Exercises   293


      c) Complete the proof by using Doob’s optional sampling theorem (see
         the proof of Lemma 10.1.3 e)).
12.15. (The perpetual American put)
      Solve the optimal stopping problem

                     Φ(s, x) = sup E x [e−ρ(s+τ ) (a − X(τ ))+ ]
                               τ ≥0

      where

              dX(t) = αX(t)dt + βX(t)dB(t) ;           X(0) = x > 0 .

      Here ρ > 0, a > 0, α and β 6= 0 are constants.
      If α = ρ then Φ(s, x) gives the price of the American put option with
      infinite horizon (T = ∞). (Hint: Proceed as in Example 10.4.2.)
294   12. Application to Mathematical Finance
Appendix A: Normal Random Variables




Here we recall some basic facts which are used in the text.
Definition A.11. Let (Ω, F, P ) be a probability space. A random variable
X: Ω → R is normal if the distribution of X has a density of the form
                                       µ             ¶
                              1            (x − m)2
                 pX (x) = √ · exp −                    ,              (A.1)
                           σ 2π               2σ 2
where σ > 0 and m are constants. In other words,
                     Z
         P [X ∈ G] = pX (x)dx ,       for all Borel sets G ⊂ R .
                       G

   If this is the case, then
                               Z           Z
                    E[X] =         XdP =       xpX (x)dx = m              (A.2)
                               Ω           R

and                                    Z
            var[X] = E[(X − m)2 ] =        (x − m)2 pX (x)dx = σ 2 .      (A.3)
                                       R

More generally, a random variable X: Ω → Rn is called (multi-) normal
N (m, C) if the distribution of X has a density of the form
                          p           µ                                  ¶
                            |A|              X
                                         1
 pX (x1 , · · · , xn ) =         · exp − 2 ·     (xj − mj )ajk (xk − mk )  (A.4)
                         (2π)n/2             j,k

where m = (m1 , · · · , mn ) ∈ Rn and C −1 = A = [ajk ] ∈ Rn×n is a symmetric
positive definite matrix.
   If this is the case then
                                   E[X] = m                             (A.5)
and

             A−1 = C = [cjk ] is the covariance matrix of X, i.e.
             cjk = E[(Xj − mj )(Xk − mk )] .                              (A.6)
296       Appendix A: Normal Random Variables


Definition A.12. The characteristic function of a random variable
X: Ω → Rn is the function φX : Rn → C (where C denotes the complex
numbers) defined by
                                                         Z
 φX (u1 , · · · , un ) = E[exp(i(u1 X1 +· · ·+un Xn ))] = eihu,xi ·P [X ∈ dx] , (A.7)
                                                                       Rn

where hu, xi = u1 x1 + · · · + un xn (and i ∈ C is the imaginary unit). In other
words, φX is the Fourier transform of X (or, more precisely, of the measure
P [X ∈ dx]). Therefore we have
Theorem A.13. The characteristic function of X determines the distribu-
tion of X uniquely.
      It is not hard to verify the following:
Theorem A.14. If X: Ω → Rn is normal N (m, C), then
                                 µ     X               X      ¶
      φX (u1 , · · · , un ) = exp − 21   uj cjk uk + i   uj mj .                                   (A.8)
                                                j,k                         j

    Theorem A.4 is often used as a basis for an extended concept of a normal
random variable: We define X: Ω → Rn to be normal (in the extended sense)
if φX satisfies (A.8) for some symmetric non-negative definite matrix C =
[cjk ] ∈ Rn×n and some m ∈ Rn . So by this definition it is not required that C
be invertible. From now on we will use this extended definition of normality.
In the text we often use the following result:
Theorem A.15. Let Xj : Ω → R be random variables; 1 ≤ j ≤ n. Then

                          X = (X1 , · · · , Xn )            is normal

if and only if

          Y = λ1 X1 + · · · + λn Xn         is normal for all λ1 , . . . , λn ∈ R .

Proof. If X is normal, then
                                                      µ          X                          X            ¶
E[exp(iu(λ1 X1 + · · · + λn Xn ))] = exp                  − 12         uλj cjk uλk + i          uλj mj
                                                                 j,k                        j
                            µ             X                            X            ¶
                    = exp       − 12 u2         λj cjk λk + iu              λj mj       ,
                                          j,k                           j
                                   P                               P
so Y is normal with E[Y ] =            λj mj , var[Y ] =                λj cjk λk .

   Conversely, if Y = λ1 X1 + · · · + λn Xn is normal with E[Y ] = m and
var[Y ] = σ 2 , then
                                            Appendix A: Normal Random Variables                 297


            E[exp(iu(λ1 X1 + · · · + λn Xn ))] = exp(− 12 u2 σ 2 + ium) ,
where
            X                             ·µ X                   X             ¶2 ¸
    m =            λj E[Xj ], σ 2 = E               λj Xj −           λj E[Xj ]
             j                                  j                 j
              ·µ X                          ¶2 ¸        X
        = E               λj (Xj − mj )             =         λj λk E[(Xj − mj )(Xk − mk )] ,
                      j                                 j,k

where mj = E[Xj ]. Hence X is normal.
Theorem A.16. Let Y0 , Y1 , . . . , Yn be real, random variables on Ω. Assume
that X = (Y0 , Y1 , . . . , Yn ) is normal and that Y0 and Yj are uncorrelated for
each j ≥ 1, i.e
                  E[(Y0 − E[Y0 ])(Yj − E[Yj ])] = 0 ;                    1≤j≤n.
Then Y0 is independent of {Y1 , · · · , Yn }.
Proof. We have to prove that
 P [Y0 ∈ G0 , Y1 ∈ G1 , . . . , Yn ∈ Gn ] = P [Y0 ∈ G0 ] · P [Y1 ∈ G1 , . . . , Yn ∈ Gn ] ,
                                                                                     (A.9)
for all Borel sets G0 , G1 , . . . , Gn ⊂ R.
    We know that in the first line (and the first column) of the covariance
matrix cjk = E[(Yj − E[Yj ])(Yk − E[Yk ])] only the first entry c00 = var[Y0 ],
is non-zero. Therefore the characteristic function of X satisfies
                 φX (u0 , u1 , . . . , un ) = φY0 (uo ) · φ(Y1 ,...,Yn ) (u1 , . . . , un )
and this is equivalent to (A.9).
    Finally we establish the following:
Theorem A.17. Suppose Xk : Ω → Rn is normal for all k and that Xk → X
in L2 (Ω), i.e.
                E[|Xk − X|2 ] → 0     as k → ∞ .
Then X is normal.
Proof. Since |eihu,xi − eihu,yi | < |u| · |x − y|, we have
E[{exp(ihu, Xk i) − exp(ihu, Xi)}2 ] ≤ |u|2 · E[|Xk − X|2 ] → 0 as k → ∞ .
Therefore
                   E[exp(ihu, Xk i)] → E[exp(ihu, Xi)] as k → ∞ .
So X is normal, with mean E[X] = lim E[Xk ] and covariance matrix
C = lim Ck , where Ck is the covariance matrix of Xk .
298   Appendix A: Normal Random Variables
Appendix B: Conditional Expectation




Let (Ω, F, P ) be a probability space and let X: Ω → Rn be a random vari-
able such that E[|X|] < ∞. If H ⊂ F is a σ-algebra, then the conditional
expectation of X given H, denoted by E[X|H], is defined as follows:
Definition B.1. E[X|H] is the (a.s. unique) function from Ω to Rn satis-
fying:
(1) E[X|H]
    R      is H-measurable
                 R
(2) E[X|H]dP = XdP , for all H ∈ H.
   H               H

   The existence and uniqueness of E[X|H] comes from the Radon-Nikodym
theorem: Let µ be the measure on H defined by
                             Z
                      µ(H) = XdP ;         H∈H.
                                H

Then µ is absolutely continuous w.r.t. P |H, so there exists a P |H-unique
H-measurable function F on Ω such that
                           Z
                   µ(H) = F dP         for all H ∈ H .
                            H

Thus E[X|H]: = F does the job and this function is unique a.s. w.r.t. the
measure P |H.
    Note that (2) is equivalent to
                Z                  Z
(2)’               Z · E[X|H]dP = Z · XdP       for all H-measurable Z .
               Ω                    Ω
   We list some of the basic properties of the conditional expectation:
Theorem B.2. Suppose Y : Ω → Rn is another random variable with
E[|Y |] < ∞ and let a, b ∈ R. Then
a) E[aX + bY |H] = aE[X|H] + bE[Y |H]
b) E[E[X|H]] = E[X]
c) E[X|H] = X if X is H-measurable
300      Appendix B: Conditional Expectation


d) E[X|H] = E[X] if X is independent of H
e) E[Y · X|H] = Y · E[X|H] if Y is H-measurable, where · denotes the usual
   inner product in Rn .
Proof. d): If X is independent of H we have for H ∈ H
         Z           Z             Z        Z
            XdP = X · XH dP = XdP · XH dP = E[X] · P (H) ,
           H          Ω                    Ω         Ω

    so the constant E[X] satisfies (1) and (2).
e): We first establish the result in the case when Y = XH (where X denotes
    the indicator function), for some H ∈ H.
    Then for all G ∈ H
         Z                     Z                  Z         Z
            Y · E[X|H]dP =          E[X|H]dP =       XdP = Y XdP ,
           G                     G∩H                     G∩H      G

      so Y · E[X|H] satisfies both (1) and (2). Similarly we obtain that the
      result is true if Y is a simple function
                                m
                                X
                          Y =         cj XHj ,   where Hj ∈ H .
                                j=1

      The result in the general case then follows by approximating Y by such
      simple functions.                                                    t
                                                                           u
Theorem B.3. Let G, H be σ-algebras such that G ⊂ H. Then

                            E[X|G] = E[E[X|H]|G] .

Proof. If G ∈ G then G ∈ H and therefore
                        Z               Z
                          E[X|H]dP = XdP .
                            G                    G

Hence E[E[X|H]|G] = E[X|G] by uniqueness.                                   t
                                                                            u
      The following useful result can be found in Chung (1974), Theorem 9.1.4:
Theorem B.4 (The Jensen inequality).
If φ: R → R is convex and E[|φ(X)|] < ∞ then

                            φ(E[X|H]) ≤ E[φ(X)|H] .

Corollary B.5. (i) |E[X|H]| ≤ E[|X| | H]
(ii) |E[X|H]|2 ≤ E[|X|2 | H] .
Corollary B.6. If Xn → X in L2 then E[Xn | H] → E[X | H] in L2 .
Appendix C: Uniform Integrability and
Martingale Convergence




We give a brief summary of the definitions and results which are the back-
ground for the applications in this book. For proofs and more information we
refer to Doob (1984), Liptser and Shiryaev (1977), Meyer (1966) or Williams
(1979).
Definition C.1. Let (Ω, F, P ) be a probability space. A family {fj }j∈J of
real, measurable functions fj on Ω is called uniformly integrable if
                         µ      ½ Z               ¾¶
                     lim    sup           |fj |dP    =0.
                   M →∞     j∈J
                                  {|fj |>M }

   One of the most useful tests for uniform integrability is obtained by using
the following concept:
Definition C.2. A function ψ: [0, ∞) → [0, ∞) is called a u.i. (uniform in-
tegrability) test function if ψ is increasing, convex (i.e. ψ(λx + (1 − λ)y) ≤
λψ(x) + (1 − λ)ψ(y) for all x, y ∈ [0, ∞), λ ∈ [0, 1]) and

                                      ψ(x)
                                lim        =∞.
                                x→∞    x
So for example ψ(x) = xp is a u.i. test function if p > 1, but not if p = 1.

   The justification for the name in Definition C.2 is the following:
Theorem C.3. The family {fj }j∈J is uniformly integrable if and only if
there is a u.i. test function ψ such that
                               ½Z            ¾
                           sup     ψ(|fj |)dP < ∞ .
                          j∈J

   One major reason for the usefulness of uniform integrability is the fol-
lowing result, which may be regarded as the ultimate generalization of the
various convergence theorems in integration theory:
Theorem C.4. Suppose {fk }∞
                          k=1 is a sequence of real measurable functions
on Ω such that
302    Appendix C: Uniform Integrability and Martingale Convergence


                      lim fk (ω) = f (ω)      for a.a. ω .
                      k→∞

Then the following are equivalent:
   1) {fk } is uniformly integrable          R
   2) f ∈ L1 (P ) and fk → f in L1 (P ), i.e. |fk − f |dP → 0 as k → ∞.
    An important application of uniform integrability is within the conver-
gence theorems for martingales:
    Let (Ω, N , P ) be a probability space and let {Nt }t≥0 be an increasing
family of σ-algebras, Nt ⊂ N for all t. A stochastic process Nt : Ω → R is
called a supermartingale (w.r.t. {Nt }) if Nt is Nt -adapted, E[|Nt |] < ∞ for
all t and
                       Nt ≥ E[Ns |Nt ]     for all s > t .               (C.1)
Similarly, if (C.1) holds with the inequality reversed for all s > t, then Nt is
called a submartingale. And if (C.1) holds with equality then Nt is called a
martingale.
    As in customary we will assume that each Nt contains all the null sets
of N , that t → Nt (ω) is right continuous
                                     T       for a.a.ω and that {Nt } is right
continuous, in the sense that Nt =      Ns for all t ≥ 0.
                                     s>t

Theorem C.5 (Doob’s martingale convergence theorem I).
Let Nt be a right continuous supermartingale with the property that

                              sup E[Nt− ] < ∞ ,
                               t>0


where Nt− = max(−Nt , 0). Then the pointwise limit

                             N (ω) = lim Nt (ω)
                                      t→∞

exists for a.a. ω and E[N − ] < ∞.
   Note, however, that the convergence need not be in L1 (P ). In order to
obtain this we need uniform integrability:
Theorem C.6 (Doob’s martingale convergence theorem II).
Let Nt be a right-continuous supermartingale. Then the following are equiv-
alent:
1) {Nt }t≥0 is uniformly integrable
2) There existsR N ∈ L1 (P ) such that Nt → N a.e. (P ) and Nt → N in
   L1 (P ), i.e. |Nt − N |dP → 0 as t → ∞ .
Combining Theorems C.6 and C.3 (with ψ(x) = xp ) we get
         Appendix C: Uniform Integrability and Martingale Convergence           303


Corollary C.7. Let Mt be a continuous martingale such that

                        sup E[|Mt |p ] < ∞   for some p > 1 .
                        t>0

Then there exists M ∈ L1 (P ) such that Mt → M a.e. (P ) and
                   Z
                     |Mt − M |dP → 0       as t → ∞ .

    Finally, we mention that similar results can be obtained for the analogous
discrete time super/sub-martingales {Nk , Nk }, k = 1, 2, . . .. Of course, no
continuity assumptions are needed in this case. For example, we have the
following result, which is used in Chapter 9:
Corollary C.8. Let Mk ; k = 1, 2, . . . be a discrete time martingale and as-
sume that
                sup E[|Mk |p ] < ∞        for some p > 1 .
                         k

Then there exists M ∈ L1 (P ) such that Mk → M a.e. (P ) and
                   Z
                     |Mk − M |dP → 0       as k → ∞ .

Corollary C.9. Let X ∈ L1 (P ), let {Nk }∞
                                         k=1 be an increasing family of σ-
algebras, Nk ⊂ F and define N∞ to be the σ-algebra generated by {Nk }∞k=1 .
Then
                  E[X|Nk ] → E[X|N∞ ]      as k → ∞ ,
a.e. P and in L1 (P ).
Proof. Mk : = E[X|Nk ] is a u.i. martingale, so there exists M ∈ L1 (P ) such
that Mk → M a.e. P and in L1 (P ), as k → ∞. It remains to prove that
M = E[X|N∞ ]: Note that

                    kMk − E[M |Nk ]kL1 (P ) = kE[Mk |Nk ] − E[M |Nk ]kL1 (P )
                     ≤ kMk − M kL1 (P ) → 0      as k → ∞ .

Hence if F ∈ Nk0 and k ≥ k0 we have
Z             Z                   Z
  (X−M )dP = E[X−M |Nk ]dP = (Mk −E[M |Nk ])dP → 0 as k → ∞ .
F               F                        F

Therefore           Z
                                                           S
                                                           ∞
                        (X − M )dP = 0       for all F ∈         Nk
                                                           k=1
                    F
and hence
                              E[X|N∞ ] = E[M |N∞ ] = M .                         t
                                                                                 u
304   Appendix C: Uniform Integrability and Martingale Convergence
Appendix D: An Approximation Result




In this Appendix we prove an approximation result which was used in The-
orem 10.4.1. We use the notation from that Theorem.
Theorem C.1. Let D ⊂ V ⊂ Rn be open sets such that

                         ∂D         is a Lipschitz surface            (C.1)

and let φ: V → R be a function with the following properties

                                   φ ∈ C 1 (V ) ∩ C(V )               (C.2)


            φ ∈ C 2 (V \ ∂D) and the second order derivatives         (C.3)
            of φ are locally bounded near ∂D ,

Then there exists a sequence {φj }∞                      2
                                  j=1 of functions φj ∈ C (V ) ∩ C(V ) such
that

   φj → φ    uniformly on compact subsets of V , as j → ∞             (C.4)
   Lφj → Lφ uniformly on compact subsets of V \ ∂D, as j → ∞          (C.5)
   {Lφj }∞
         j=1 is locally bounded on V .                                (C.6)

Proof. We may assume that φ is extended to a continuous function on the
whole of Rn . Choose a C ∞ function η: Rn → [0, ∞) with compact support
such that                     Z
                                 η(y)dy = 1                       (C.7)
                                     Rn

and put                              µ ¶
                              −n      x
                 η² (x) = ²        η          for ² > 0, x ∈ Rn .     (C.8)
                                      ²
Fix a sequence ²j ↓ 0 and define
                           Z                     Z
  φj (x) = (φ ∗ η²j )(x) =   φ(x − z)η²j (z)dz =   φ(y)η²j (x − y)dy , (C.9)
                         Rn                           Rn
306    Appendix D: An Approximation Result


i.e. φj is the convolution of φ and η²j . Then it is well-known that φj (x) → φ(x)
uniformly on compact subsets of any set in V where φ is continuous. See e.g.
Folland (1984), Theorem 8.14 (c). Note that since η has compact support
we need not assume that φ is globally bounded, just locally bounded (which
follows from continuity).
   We proceed to verify (D.4)–(D.6): Let W ⊂ V be open with a Lipschitz
boundary. Put V1 = W ∩ D, V2 = W \ D.




Then V1 , V2 are Lipschitz domains and integration by parts gives, for i = 1, 2
and x ∈ W \ ∂D
      Z
                  ∂2
          φ(y)         η² (x − y)dy =
               ∂yk ∂y` j
      Vi
       Z                                  Z
                 ∂                          ∂φ       ∂
           φ(y)     η² (x − y)nik dν(y) −       (y)    η² (x − y)dy , (C.10)
                ∂y` j                       ∂yk     ∂y` j
      ∂Vi                                    Vi

where nik is component number k of the outer unit normal ni from Vi at
∂Vi . (This outer normal exists a.e. with respect to the surface measure ν on
∂Vi since ∂Vi is a Lipschitz surface.)
    Another integration by parts yields
        Z
            ∂φ       ∂
                (y)    η² (x − y)dy =
            ∂yk     ∂y` j
        Vi
        Z                                    Z
             ∂φ                                    ∂2φ
                 (y)η²j (x − y)ni` dν(y) −                (y)η²j (x − y)dy .   (C.11)
             ∂yk                                  ∂yk ∂y`
       ∂Vi                                   Vi

Combining (D.10) and (D.11) we get
          Z
                   ∂2
            φ(y)        η² (x − y)dy =
                 ∂yk ∂y` j
             Vi
                                       Appendix D: An Approximation Result      307

            Z ·                                                      ¸
                            ∂                   ∂φ
                    φ(y)       η²j (x − y)nik −     (y)η²j (x − y)ni` dν(y)
                           ∂y`                  ∂yk
           ∂Vi
               Z
                     ∂2φ
           +                (y)η²j (x − y)dy ;       i = 1, 2 .               (C.12)
                    ∂yk ∂y`
               Vi

Adding (D.12) for i = 1, 2 and keeping in mind that the outer unit normal
for Vi is the inner unit normal for V1−i on ∂V1 ∩ ∂V2 , we get
            Z
                      ∂2
               φ(y)        η² (x − y)dy =
                    ∂yk ∂y` j
            W
             Z ½                                                ¾
                       ∂                    ∂φ
                 φ(y)     η²j (x − y)Nk −       (y)η²j (x − y)N` dν(y)
                      ∂y`                   ∂yk
            ∂W
               Z
                   ∂2φ
            +            (y)η²j (x − y)dy ,                            (C.13)
                 ∂yk ∂y`
             W

where Nk , N` are components number k, ` of the outer unit normal N from
W at ∂W .
    If we fix x ∈ W \ ∂D then for j large enough we have η²j (x − y) = 0 for
all y outside W and for such j we get from (D.13)
       Z                               Z
                 ∂2                       ∂2φ
          φ(y)         η²j (x − y)dy =           (y)η²j (x − y)dy .  (C.14)
               ∂yk ∂y`                   ∂yk ∂y`
     Rn                                   Rn

In other words, we have proved that
                        µ 2           ¶
         ∂2               ∂ φ
               φj (x) =          ∗ η²j (x)            for x ∈ V \ ∂D .        (C.15)
       ∂xk ∂x`           ∂yk ∂y`
Similarly, integration by parts applied to W gives, if j is large enough
              Z                            Z
                      ∂                      ∂φ
                φ(y)     η² (x − y)dy = −        (y)η²j (x − y)dy
                     ∂yk j                   ∂yk
            W                                    W

from which we conclude that
                            µ          ¶
                ∂             ∂φ
                   φj (x) =       ∗ η²j (x)              for x ∈ V .          (C.16)
               ∂xk            ∂yk

From (D.15) and (D.16), combined with Theorem 8.14 (c) in Folland (1984),
we get that
     ∂φj   ∂φ
         →            uniformly on compact subsets of V as j → ∞              (C.17)
     ∂xk   ∂x
308    Appendix D: An Approximation Result


and
  ∂ 2 φj     ∂2φ
         →          uniformly on compact subsets of V \ ∂D as j → ∞ .
 ∂xk ∂x`   ∂xk ∂x`
         n     o∞      n 2 o∞                                     (C.18)
           ∂φj            ∂ φj
Moreover, ∂xk      and ∂xk ∂x`     are locally bounded on V , by (D.15),
                j=1              j=1
(D.16) combined with the assumptions (D.2), (D.3).
   We conclude that (D.4)–(D.6) hold.                                 t
                                                                      u
Solutions and Additional Hints to Some of the
Exercises




                                           2
                                      −ρ
2.13. P 0 [Bt ∈ Dρ ] = 1 − e 2t .
          £ R∞         ¤ R∞            R∞         ¡ R − (x−y) 2
                                                                ¢
2.14. E x XK (Bt )dt = P x [Bt ∈ K]dt = (2πt)−n/2     e 2t dy dt = 0
              0                   0                               0                      K
        for all x ∈ Rn , if K ⊂ Rn has n-dimensional Legesgue measure equal
        to 0.
         et ∈ F1 , . . . , B
2.15. P [B                  et ∈ Fk ] = P [Bt ∈ U −1 F1 , . . . , Bt ∈ U −1 Fk ]
           1     R            k                   1                       k
      =             p(t1 , 0, x1 )p(t2−t1 , x1 , x2 ) · · · p(tk−tk−1 , xk−1 , xk )dx1 · · · dxk
       U −1 FR
             1 ×···×U
                      −1 F
                           k

      =            p(t1 , 0, y1 )p(t2 −t1 , y1 , y2 ) · · · p(tk −tk−1 , yk−1 , yk )dy1 · · · dyk
           F1 ×···×Fk
      = P [Bt1 ∈ F1 , . . . , Btk ∈ Fk ] ,
      by (2.2.1), using the substitutions yj = U xj and the fact that
      |U xj − U xj−1 |2 = |xj − xj−1 |2 .
                                   ·µ                              ¶ ¸
                             2
                                        P2n −1       2
                                                        P2n −1 −n 2
2.17. a) E[(Yn (t, ·) − t) ] = E           k=0 (∆Bk ) −  k=0 2   t
                    ·½ 2X
                        n
                          −1                               ¾2 ¸
                                               2    −n
              =E                ((∆Bk ) − 2              t)
                          k=0
                    · 2X
                       n
                         −1                                                          ¸
                                       2           −n                 2    −n
              =E              ((∆Bj ) − 2               t)((∆Bk ) −2            t)
                      j,k=0
                   n
                  2X −1
              =           E[((∆Bk )2 − 2−n t)2 ]
                  k=0
                   n
                  2X −1
              =           E[(∆Bk )4 − 2 · 2−2n t2 − 2−2n t2 ]
                  k=0
                   n
                  2X −1
              =           2 · 2−2n t2 = 2 · 2−n t2 → 0                    as n → ∞ .
                  k=0

        b) This follows from the following general result: If the quadratic vari-
           ation of a real function over an interval is positive, then the total
           variation of the function over that interval is infinite.
310    Solutions and Additional Hints to Some of the Exercises

                   Pn−1                     Pn−1                    Pn−1
3.1.   tBt =          j=0 ∆(sj Bj ) =           j=0 sj ∆Bj +            j=0 Bj+1 ∆sj
                   Rt         Rt
              →        sdBs +       Bs ds        as n → ∞ .
                   0            0
3.4.   The processes in (iii) and (iv) are martingales, but those in (i) and
       (ii) are not.
       RT
3.9.        Bt ◦ dBt = 12 BT2           if B0 = 0 .
       0

3.12. (i) a) dXt = (γ + 12 α2 )Xt dt + αXt dBt .
           b) dXt = 12 sin Xt [cos Xt − t2 ]dt + (t2 + cos Xt )dBt .
      (ii) a) dXt = (r − 12 α2 )Xt dt + αXt ◦ dBt .
                                    −Xt
              b)       dXt = (2e          − Xt3 )dt + Xt2 ◦ dBt .
4.1.   a) dXt = 2Bt dBt + dt .
       b) dXt = (1 + 12 eBt )dt + eBt dBt .
       c) dXt = 2dt + 2B1 dB1 (t) + 2B2 dB2 (t) .
                 ·      ¸ · ¸         · ¸
                    dt       1          0
       d) dxt =           =      dt +      dBt .
                   dBt       0          1
       e) dX1 (t) = dB1 (t) + dB2 (t) + dB3 (t)
          dX2 (t) = dt − B3 (t)dB1 (t) + 2B2 (t)dB2 (t) − B1 (t)dB3 (t)
          or                                                                 
                 ·         ¸ · ¸        ·                         ¸ dB1 (t)
                   dX1 (t)      0           1         1       1      dB2 (t) .
          dXt =             =      dt +
                   dX2 (t)      1         −B3 (t) 2B2 (t) −B1 (t)
                                                                      dB3 (t)
           6        3
4.5.   E[Bt ] = 15t if B0 = 0 .
                       ¡³      Pn     ´    Pn           ¢
5.3.   Xt = X0 · exp r − 12        αk2 t +     αk Bk (t) (if B(0) = 0).
                                          k=1              k=1
5.4.   (i)     X1 (t) = X1 (0) + t + B1 (t) ,
                                                              Rt                Rt
               X2 (t) = X2 (0) + X1 (0)B2 (t) +                    sdB2 (s) +        B1 (s)dB2 (s),   as-
                                                              0                 0
            suming (as usual) that B(0) = 0.
                         Rt
       (ii) Xt = et X0 + et−s dBt .
                                    0
       (iii) Xt = e−t X0 + e−t Bt               (assuming B0 = 0).
                                                  Rt
5.6.   Yt = exp(αBt − 12 α2 t)[Y0 + r                exp(−αBs + 12 α2 s)ds]               (B0 = 0).
                                                  0
                                                      Rt
5.7.   a) Xt = m + (X0 − m)e−t + σ                         es−t dBs .
                                                      0
       b) E[Xt ] = m + (X0 − m)e−t .
                       2
          Var[Xt ] = σ2 [1 − e−2t ] .
              ·        ¸
                X1 (t)                        Rt
5.8.   X(t) =            = exp(tJ)X(0)+exp(tJ) exp(−sJ)M dB(s), where
                X2 (t)                        0
                           Solutions and Additional Hints to Some of the Exercises                                 311

                       ·         ¸               ·         ¸                           ·             ¸
                             0 1                     α   0                                 dB1 (s)
             J=                    ,   M=                   ,          dB(s) =
                            −1 0                     0   β                                 dB2 (s)
       and
                                                 t2 2         tn
                     exp(tJ) = I + tJ +            J + · · · + J n + · · · ∈ R2×2 .
                                                 2            n!
       Using that J 2 = −I this can be rewritten as
                                                 Rt
         X1 (t) = X1 (0) cos(t) + X2 (0) sin(t) + α cos(t − s)dB1 (s)
                                                                            0
                 Rt
             +        β sin(t − s)dB2 (s) ,
                 0
                                                                            Rt
       X2 (t) = −X1 (0) sin(t) + X2 (0) cos(t) −                                 α sin(t − s)dB1 (s)
                                                                            0
                      Rt
             +β            cos(t − s)dB2 (s) .
                      0
                                                         Rt dBs                                          Rt dBs
5.11. Hint: To prove that lim (1 − t)                            1−s   = 0 a.s., put Mt =                    1−s   for
                                       t→1               0                                               0
       0 ≤ t < 1 and apply the martingale inequality to prove that

           P [sup{(1 − t)|Mt |; t ∈ [1 − 2−n , 1 − 2−n−1 ]} > ²] ≤ 2²−2 · 2−n .

       Hence by the Borel-Cantelli lemma we obtain that for a.a. ω there
       exists n(ω) < ∞ such that

                                          n ≥ n(ω) ⇒ ω ∈
                                                       / An ,
       where
                                                                                                         −n
             An = {ω; sup{(1 − t)|Mt |; t ∈ [1 − 2−n , 1 − 2−n−1 ]} > 2                                   4
                                                                                                              }.
                                h      Rt                  i1/2
5.16. c) Xt = exp(αBt − 12 α2 t) x2 + 2 exp(−2αBs + α2 s)ds     .
                                                             0
7.1.   a) Af (x) = µxf 0 (x) + 12 σ 2 f 00 (x); f ∈ C02 (R).
       b) Af (x) = rxf 0 (x) + 12 α2 x2 f 00 (x); f ∈ C02 (R).
       c) Af (y) = rf 0 (y) + 21 α2 y 2 f 00 (y); f ∈ C02 (R).
                                                             2
       d) Af (t, x) = ∂f      ∂f   1 2∂ f
                      ∂t + µx ∂x + 2 σ ∂x2 ;                           f ∈ C02 (R2 ).
                                                                        2
                          ∂f        ∂f
       e) Af (x1 , x2 ) = ∂x 1
                               + x2 ∂x 2
                                         + 12 e2x1 ∂∂xf2 ;                         f ∈ C02 (R2 ).
                                                                            2
                                             2                    2
                              ∂f
       f) Af (x1 , x2 ) = ∂x    1
                                  + 12 ∂∂xf2 + 12 x21 ∂∂xf2 ; f ∈ C02 (R2 ).
                                           1              2
                                  Pn
                                              ∂f            Pn         P
                                                                       n               2
       g) Af (x1 , . . . , xn ) =      rk xk ∂xk + 2    1
                                                               xi xj (   αik αjk ) ∂x∂i ∂x
                                                                                         f
                                                                                           j
                                                                                             ;
                                       k=1                             i,j=1           k=1
          f ∈ C02 (Rn ).
                       √
7.2.   a) dXt = dt + 2 dBt .
312    Solutions and Additional Hints to Some of the Exercises

                     ·        ¸ ·          ¸      ·         ¸
                     dX1 (t)         1                0
       b) dX(t) =              =             dt +             dBt .
                     dX2 (t)       cX2 (t)          αX2 (t)
                   ·         ¸ ·                       ¸      ·         ¸·       ¸
                     dX1 (t)            2X2 (t)                 X1 (t) 1 dB1 (t)
       c) dX(t) =             =                          dt+                      .
                     dX2 (t)     ln(1+X12 (t)+X22 (t))           1     0 dB2 (t)
          (Several other diffusion coefficients are possible.)
7.4.   a), b). Let τk = inf{t > 0; Btx = 0 or Btx = k}; k > x > 0 and put

                                      ρk = P x [Bτk = k] .

       Then by Dynkin’s formula applied to f (y) = y 2 for 0 ≤ y ≤ k we get

                                      E x [τk ] = k 2 pk − x2 .            (S1)

       On the other hand, Dynkin’s formula applied to f (y) = y for 0 ≤ y ≤ k
       gives
                                     kpk = x .                           (S2)
       Combining these two identities we get that

                     E x [τ ] = lim E x [τk ] = lim x(k − x)) = ∞ .        (S3)
                                k→∞                k→∞

       Moreover, from (S2) we get

        P x [∃t < ∞ with Bt = 0] = lim P x [Bτk = 0] = lim (1 − pk ) = 1 ,
                                             k→∞                  k→∞
                                                                           (S4)
       so τ < ∞ a.s. P x .
               exp(− 2bx        2ab
                       2 )−exp(− 2 )
7.18. c) p =         σ
                         2
                                  σ
                                         .
               exp(− 2b2 )−exp(− 2ab
                                   2 )
                     σ            σ

8.1.   a) g(t, x) = E x [φ(Bt )] .
                      R∞
       b) u(x) = E x [ e−αt ψ(Bt )dt] .
                         0
8.12. dQ(ω) = exp(3B1 (T ) − B2 (T ) − 5T )dP (ω) .
               · ¸       · ¸
                 α          0
9.1. a) dXt =       dt +       dBt .
                 0          β
               · ¸       ·       ¸
                 a          1 0
      b) dXt =      dt +           dBt .
                 b          0 1
      c) dXt = αXt dt + βdBt .
      d) dXt =·αdt + βX¸ t dB
                           · t.            ¸        ·              ¸·        ¸
                dX1 (t)      ln(1+X12 (t))      √ X2 (t)      0       dB1 (t)
      e) dXt =          =                   dt + 2                             .
                dX2 (t)          X2 (t)               X1 (t) X1 (t) dB2 (t)
9.3.   a) u(t, x) = E x [φ(BT −t )] .
       b) u(t, x) = E x [ψ(Bt )] .
                   Solutions and Additional Hints to Some of the Exercises                313


9.8.  a) Let Xt ∈ R2 be uniform motion to the right, as described in Ex-
         ample 9.2.1. Then each one-point set {(x1 , x2 )} is thin (and hence
         semipolar) but not polar.
      b) With Xt as in a) let Hk = {(ak , 1)}; k = 1, 2, . . . where {ak }∞
                                                                          k=1
         is the set of rational numbers. Then each Hk is thin but
         Q(x1 ,1) [TH = 0] = 1 for all x1 ∈ R .
9.10. Let Yt = Yts,x = (s + t, Xtx ) for t ≥ 0, where Xt = Xtx satisfies

                   dXt = αXt dt + βXt dBt ;                    t ≥ 0, X0 = x > 0 .
                          b of Yt is given by
       Then the generator A
                                                  2
                b (s, x) = ∂f + αx ∂f + 1 β 2 x2 ∂ f ;
                Af                                                      f ∈ C02 (R2 ) .
                           ∂s      ∂x 2          ∂x2
       Moreover, with D = {(t, x); x > 0 and t < T } we have

                τD : = inf[t > 0; Yt ∈
                                     / D} = inf{t > 0; s + t > T } = T − s .

       Hence
                                     YτD = (T, XT −s ) .
       Therefore, by Theorem 9.3.3 the solution is
                              ·                  Z−s
                                                 T                   ¸
                                 −ρT    x            −ρ(s+t)    x
                  f (s, x) = E e     φ(XT −s ) +    e        K(Xt )dt .
                                                           0

            ∗               ∗
10.1. a) g (x) = ∞, τ does not exist.
      b) g ∗ (x) = ∞, τ ∗ does not exist.
      c) g ∗ (x) = 1, τ ∗ = inf{t > 0; Bt = 0}.
      d) If ρ < 12 then g ∗ (s, x) = ∞ and τ ∗ does not exist.
         If ρ ≥ 12 then g ∗ (s, x) = g(s, x) = e−ρs cosh x and τ ∗ = 0 .
10.3. x0 > 0 is given implicitly by the equation
                                          r           √
                                                  2       2ρ x0
                                              2 e        +1
                                   x0 =        · √           ,
                                              ρ e2 2ρ x0 − 1
                                      √
                                  cosh( 2ρ x)
       and g ∗ (s, x) = e−ρs x20 cosh( √
                                         2ρ x0 )
                                                 for −x0 ≤ x ≤ x0 , where
       cosh ξ = 12 (eξ + e−ξ ) .
10.9. If 0 < ρ ≤ 1 then γ(x) = ρ1 x2 + ρ12 but τ ∗ does not exist. If ρ > 1 then
                            ½1 2   1           √                 ∗
                   γ(x) =    ρ x + ρ2 + C cosh( 2ρ x) for |x| ≤ x
                              2
                             x                        for |x| > x∗
       where C > 0, x∗ > 0 are the unique solutions of the equations
314    Solutions and Additional Hints to Some of the Exercises

                                          µ        ¶
                                      p          1             1
                           C cosh(        2ρ x∗ ) =
                                             1−      (x∗ )2 − 2
                                                 ρ            ρ
                                                 µ        ¶
                            p        p                  1
                           C 2ρ sinh( 2ρ x∗ ) = 2 1 −       x∗ .
                                                        ρ

10.12. If ρ > r then g ∗ (s, x) = e−ρs (x0 − 1)+ ( xx0 )γ and
      τ ∗ = inf{t > 0; Xt ≥ x0 }, where
                              ·            r                    ¸
                           −2 1 2             1 2         2   2
                    γ=α         2α − r +     ( α − r) + 2α ρ
                                              2

       and
                                       γ
                               x0 =                 (γ > 1 ⇔ ρ > r) .
                                      γ−1
10.13. If α ≤ ρ then τ ∗ = 0 .
      If ρ < α < ρ + λ then
                      ½ −ρs
                       e pq        ;                                    if 0 < pq < y0
       G∗ (s, p, q) =                      λ
                       e−ρs (C1 (pq)γ1 + ρ+λ−α · pq − K
                                                      ρ );              if pq ≥ y0

       where
                           ·                    r                             ¸
                                                     1
                γ1 = β −2 12 β 2 + λ − α −          ( β 2 + λ − α)2 + 2ρβ 2       <0,
                                                     2
                       (−γ1 )K(ρ + λ − α)
                y0 =                      >0
                        (1 − γ1 )ρ(α − ρ)

       and                                               1−γ1
                                              (α − ρ)y0
                                  C1 =                        .
                                            (−γ1 )(ρ + λ − α)
       The continuation region is

                                   D = {(s, p, q); pq > y0 } .

       If ρ + λ ≤ α then G∗ = ∞ .
               a1 −a2 −σ22 (1−γ)
11.6. u∗ =      (σ12 +σ22 )(1−γ)
                                 (constant),

                                       λ(t−t1 ) γ
                         Φ(s, x) = e           x        for t < t1 , x > 0

       where

             λ = 12 γ(1 − γ)[σ12 (u∗ )2 + σ22 (1 − u∗ )2 ] − γ[a1 u∗ + a2 (1 − u∗ )] .
                Solutions and Additional Hints to Some of the Exercises    315


11.11. Additional hints:
      For the solution of the unconstrained problem try a function φλ (s, x)
      of the form
                            φλ (s, x) = aλ (s)x2 + bλ (s) ,
      for suitable functions aλ (s), bλ (s) with λ ∈ R fixed. By substituting
      this into the HJB equation we arrive at the equations
                                   1 2
                         a0λ (s) =   a (s) − 1          for s < t1
                                   θ λ
                         aλ (t1 ) = λ

      and

                          b0λ (s) = −σ 2 aλ (s)        for s < t1
                          bλ (t1 ) = 0 ,

      with optimal control u∗ (s, x) = − θ1 aλ (s)x .
                                                      ∗
      Now substitute this into the equation for Xtu and use the terminal
      condition to determine λ0 .
      If we put s = 0 for simplicity, then λ = λ0 can be chosen as any
      solution of the equation

                            Aλ3 + Bλ2 + Cλ + D = 0 ,

      where

               A = m2 (et1 − e−t1 )2 ,
               B = m2 (e2t1 + 2 − 3e−2t1 ) − σ 2 (et1 − e−t1 )2 ,
               C = m2 (−e2t1 + 2 + 3e−2t1 ) − 4x2 − 2σ 2 (1 − e−2t1 )
               D = −m2 (et1 + e−t1 )2 + 4x2 + σ 2 (e2t1 − e−2t1 ) .

12.6. a) no arbitrage
      b) no arbitrage
      c) θ(t) = (0, 1, 1) is an arbitrage
      d) no arbitrage
      e) arbitrages exist
      f) no arbitrage.
12.7. a) complete
      b) not complete. For example, the claim

                                 ZT
                       F (ω) =        B3 (t)dB3 (t) = 12 B32 (T ) − 12 T
                                 0

          cannot be hedged.
316      Solutions and Additional Hints to Some of the Exercises


         c) (arbitrages exist)
         d) not complete
         e) (arbitrages exist)
         f) complete.
12.12. c) EQ [ξ(T )F ] = σ −1 x1 (1 − αρ )(1 − e−ρT ). The replicating portfolio is
      θ(t) = (θ0 (t), θ1 (t)), where
                                         ·                    ¸
                                               α
                            θ1 (t) = σ −1 1 − (1 − eρ(t−T ) )
                                               ρ

         and θ0 (t) is determined by (12.1.14).
12.15.                           ½ −ρs
                                  e (a − x)                        for   x ≤ x∗
                       Φ(s, x) =
                                  e−ρs (a − x∗ )( xx∗ )γ           for   x > x∗
         where                  ·              q¡                              ¸
                           −2       1 2           1           2¢
                     γ=β            2β − α −       2   β 2 − α + 2ρβ 2             <0

         and
                                              aγ
                                      x∗ =       ∈ (0, a) .
                                             γ−1
         Hence it is optimal to stop the first time X(t) ≤ x∗ .
         If α = ρ this simplifies to
                                     2ρ                             a2ρ
                           γ=−               and        x∗ =               .
                                     β2                        β 2 + 2ρ
References




 1. Aase, K.K. (1982): Stochastic continuous-time model reference adaptive systems
    with decreasing gain. Advances in Appl. Prop. 14, 763–788
 2. Aase, K.K. (1984): Optimum portfolio diversification in a general continuous
    time model. Stoch. Proc. and their Applications 18, 81–98
 3. Adler, R.J. (1981): The Geometry of Random Fields. Wiley & Sons
 4. Andersen, E.S., Jessen, B. (1948): Some limit theorems on set-functions. Danske
    Vid. Selsk. Mat.-Fys. Medd. 25, #5, 1–8
 5. Arnold, L. (1973): Stochastische Differentialgleichungen. Theorie und Anwen-
    dung. Oldenbourgh Verlag
 6. Barles, G., Burdeau, J., Romano, M., Samsoen, N. (1995): Critical stock price
    near expiration. Math. Finance 5, 77–95
 7. Barndorff-Nielsen, O.E. (1998): Processes of normal inverse Gaussian type. Fi-
    nance and Stochastics 2, 41–68
 8. Bather, J.A. (1970): Optimal stopping problems for Brownian motion. Advances
    in Appl. Prob. 2, 259–286
 9. Bather, J.A. (1997): Bounds on optimal stopping times for the American put.
    Preprint, University of Sussex
10. Beneš, V.E. (1974): Girsanov functionals and optimal bang-bang laws for final-
    value stochastic control. Stoch. Proc. and Their Appl. 2, 127–140
11. Bensoussan, A. (1984): On the theory of option pricing. Acta Appl. Math. 2,
    139–158
12. Bensoussan, A. (1992): Stochastic Control of Partially Observable Systems.
    Cambridge Univ. Press
13. Bensoussan, A., Lions, J.L. (1978): Applications des inéquations variationelles
    en controle stochastique. Dunod. (Applications of Variational Inequalities in
    Stochastic Control. North-Holland)
14. Bernard, A., Campbell, E.A., Davie, A.M. (1979): Brownian motion and gen-
    eralized analytic and inner functions. Ann. Inst. Fourier 729, 207–228
15. Bers, L., John, F., Schechter, M. (1964): Partial Differential Equations. Inter-
    science
16. Biais, B., Bjørk, T., Cvitanic, J., El Karoui, N., Jouini, E., Rochet, J.C. (1997):
    Financial Mathematics. Lecture Notes in Mathematics, Vol. 1656. Springer-
    Verlag
17. Bingham, N.H., Kiesel, R. (1998): Risk-Neutral Valuation. Springer-Verlag
18. Black, F., Scholes, M. (1973): The pricing of options and corporate liabilities.
    J. Political Economy 81, 637–654
19. Blumenthal, R.M., Getoor, R.K. (1968): Markov Processes and Potential The-
    ory. Academic Press
20. Borodin, A.N., Salminen, P. (1996): Handbook of Brownian Motion – Facts
    and Formulae. Birkhäuser
318     References


21. Brekke, K.A., Øksendal, B. (1991): The high contact principle as a sufficiency
    condition for optimal stopping. To appear in D. Lund and B. Øksendal (editors):
    Stochastic Models and Option Values. North-Holland
22. Brown, B.M., Hewitt, J.I. (1975): Asymptotic likelihood theory for diffusion
    processes. J. Appl. Prob. 12, 228–238
23. Bucy, R.S., Joseph, P.D. (1968): Filtering for Stochastic Processes with Appli-
    cations to Guidance. Interscience
24. Chow, Y.S., Robbins, H., Siegmund, D. (1971): Great Expectations: The The-
    ory of Optimal Stopping. Houghton Miffin Co
25. Chung, K.L. (1974): A Course in Probability Theory. Academic Press
26. Chung, K.L. (1982): Lectures from Markov Processes to Brownian Motion.
    Springer-Verlag
27. Chung, K.L., Williams, R. (1990): Introduction to Stochastic Integration. Sec-
    ond Edition. Birkhäuser
28. Clark, J.M. (1970, 1971): The representation of functionals of Brownian motion
    by stochastic integrals. Ann. Math. Stat. 41, 1282–1291 and 42, 1778
29. Csink, L., Øksendal, B. (1983): Stochastic harmonic morphisms: Functions
    mapping the paths of one diffusion into the paths of another. Ann. Inst. Fourier
    330, 219–240
30. Csink, L., Fitzsimmons, P., Øksendal, B. (1990): A stochastic characterization
    of harmonic morphisms. Math. Ann. 287, 1–18
31. Cutland, N.J., Kopp, P.E., Willinger, W. (1995): Stock price returns and the
    Joseph effect: A fractional version of the Black-Scholes model. In Bolthausen,
    Dozzi and Russo (editors): Seminar on Stochastic Analysis, Random Fields and
    Applications. Birkhäuser, 327–351
32. Davis, M.H.A. (1977): Linear Estimation and Stochastic Control. Chapman
    and Hall
33. Davis, M.H.A. (1984): Lectures on Stochastic Control and Nonlinear Filtering.
    Tata Institute of Fundamental Research 75. Springer-Verlag
34. Davis, M.H.A. (1993): Markov Models and Optimization. Chapman & Hall,
    London
35. Davis, M.H.A., Vinter, R.B. (1985): Stochastic Modelling and Control. Chap-
    man and Hall
36. Delbaen, F., Schachermayer, W. (1994): A general version of the fundamental
    theorem of asset pricing. Math. Ann. 300, 463–520
37. Delbaen, F., Schachermayer, W. (1995): The existence of absolutely continuous
    local martingale measures. Annals of Applied Probability 5, 926–945
38. Delbaen, F., Schachermayer, W. (1997): The fundamental theorem of asset
    pricing for unbounded stochastic processes. (To appear)
39. Dixit, A.K., Pindyck, R.S. (1994): Investment under Uncertainty. Princeton
    University Press
40. Doob, J.L. (1984): Classical Potential Theory and Its Probabilistic Counter-
    part. Springer-Verlag
41. Dudley, R.M. (1977): Wiener functionals as Itô integrals. Ann. Probability 5,
    140–141
42. Duffie, D. (1994): Martingales, arbitrage, and portfolio choice. First European
    Congress of Mathematics, vol. II, Birkhäuser, 3–21
43. Duffie, D. (1996): Dynamic Asset Pricing Theory. Second Edition. Princeton
    University Press
44. Durrett, R. (1984): Brownian Motion and Martingales in Analysis. Wadsworth
    Inc
45. Dynkin, E.B. (1963): The optimum choice of the instant for stopping a Markov
    process. Soviet Mathematics 4, 627–629
                                                                 References      319


46. Dynkin, E.B. (1965 I): Markov Processes, vol. I. Springer-Verlag
47. Dynkin, E.B. (1965 II): Markov Processes, vol. II. Springer-Verlag
48. Dynkin, E.B., Yushkevich, A.A. (1979): Controlled Markov Processes. Springer-
    Verlag
49. El Karoui (1981): Les aspects probabilistes du contrôl stochastique. Lecture
    Notes in Math. 876, 73–238. Springer-Verlag
50. Elliott, R.J. (1982): Stochastic Calculus and Applications. Springer-Verlag
51. Elliott, R.J., Kopp, P.E. (1999): Mathematics of Financial Markets. Springer-
    Verlag
52. Elworthy, K.D. (1982): Stochastic Differential Equations on manifolds. Cam-
    bridge University Press
53. Emery, M. (1989): Stochastic Calculus in Manifolds. Springer-Verlag
54. Fakeev, A.G. (1970): Optimal stopping rules for processes with continuous pa-
    rameter. Theory Probab. Appl. 15, 324–331
55. Fleming, W.H., Rishel, R.W. (1975): Deterministic and Stochastic Optimal
    Control. Springer-Verlag
56. Fleming, W.H., Soner, H.M. (1993): Controlled Markov Processes and Viscosity
    Solutions. Springer-Verlag
57. Folland, G.B. (1984): Real Analysis. J. Wiley & Sons
58. Freidlin, M. (1985): Functional Integration and Partial Differential Equations.
    Princeton University Press
59. Friedman, A. (1975): Stochastic Differential Equations and Applications, vol.
    I. Academic Press
60. Friedman, A. (1976): Stochastic Differential Equations and Applications, vol.
    II. Academic Press
61. Fukushima, M. (1980): Dirichlet Forms and Markov Processes. North-
    Holland/Kodansha
62. Gard, T.C. (1988): Introduction to Stochastic Differential Equations. Dekker
63. Gelb, A. (1974): Applied Optimal Estimation. MIT
64. Gihman, I.I., Skorohod, A.V. (1974a): Stochastic Differential Equations.
    Springer-Verlag
65. Gihman, I.I., Skorohod, A.V. (1974b): The Theory of Stochastic Processes, vol.
    I. Springer-Verlag
66. Gihman, I.I., Skorohod, A.V. (1975): The Theory of Stochastic Processes, vol.
    II. Springer-Verlag
67. Gihman, I.I., Skorohod, A.V. (1979): Controlled Stochastic Processes. Springer-
    Verlag
68. Grue, J. (1989): Wave drift damping of the motions of moored platforms by
    the method of stochastic differential equations. Manuscript, University of Oslo
69. Harrison, J.M., Kreps, D. (1979): Martingales and arbitrage in multiperiod
    securities markets. J. Economic Theory 20, 381–408
70. Harrison, J.M., Pliska, S. (1981): Martingales and stochastic integrals in the
    theory of continuous trading. Stoch. Proc. and Their Applications 11, 215–260
71. Harrison, J.M., Pliska, S. (1983): A stochastic calculus model of continuous
    trading: Complete markets. Stoch. Proc. Appl. 15, 313–316
72. He, S., Wang, J., Yan, J. (1992): Semimartingale Theory and Stochastic Cal-
    culus. Science Press and CRC Press
73. Hida, T. (1980): Brownian Motion. Springer-Verlag
74. Hida, T., Kuo, H.-H,, Potthoff, J., Streit, L. (1993): White Noise. An Infinite
    Dimensional Approach. Kluwer
75. Hoel, P.G., Port, S.C., Stone, C.J. (1972): Introduction to Stochastic Processes.
    Waveland Press, Illinois 60070
76. Hoffmann, K. (1962): Banach Spaces of Analytic Functions. Prentice Hall
320    References


77. Holden, H., Øksendal, B., Ubøe, J., Zhang, T. (1996): Stochastic Partial Dif-
    ferential Equations. Birkhäuser
78. Hu, Y. (1995): Itô-Wiener chaos expansion with exact residual and correlation,
    variance inequalities. (To appear)
79. Hu, Y., Øksendal, B. (1999): Fractional white noise calculus and applications
    to finance. Preprint, University of Oslo 1999
80. Ikeda, N., Watanabe, S. (1989): Stochastic Differential Equations and Diffusion
    Processes. Second Edition. North-Holland/Kodansha
81. Itô, K. (1951): Multiple Wiener integral. J. Math. Soc. Japan 3, 157–169
82. Itô, K., McKean, H.P. (1965): Diffusion Processes and Their Sample Paths.
    Springer-Verlag
83. Jacka, S. (1991): Optimal stopping and the American put. Mathematical Fi-
    nance 1, 1–14
84. Jacod, J. (1979): Calcul Stochastique et Problemes de Martingales. Springer
    Lecture Notes in Math. 714
85. Jacod, J., Shiryaev, A.N. (1987): Limit Theorems for Stochastic Processes.
    Springer-Verlag
86. Jaswinski, A.H. (1970): Stochastic Processes and Filtering Theory. Academic
    Press
87. Kallianpur, G. (1980): Stochastic Filtering Theory. Springer-Verlag
88. Kallianpur, G., Karandikar, R.L. (2000): Introduction to Option Pricing The-
    ory. Birkhäuser
89. Karatzas, I. (1988): On the pricing of American options. Appl. Math. Opti-
    mization 17, 37–60
90. Karatzas, I. (1997): Lectures on the Mathematics of Finance. American Math-
    ematical Society
91. Karatzas, I., Lehoczky, J., Shreve, S.E. (1987): Optimal portfolio and consump-
    tion decisions for a ’Small Investor’ on a finite horizon. SIAM J. Control and
    Optimization 25, 1157–1186
92. Karatzas, I., Ocone, D. (1991): A generalized Clark representation formula,
    with application to optimal portfolios. Stochastics and Stochastics Reports 34,
    187–220
93. Karatzas, I., Shreve, S.E. (1991): Brownian Motion and Stochastic Calculus.
    Second Edition. Springer-Verlag
94. Karatzas, I., Shreve, S.E. (1998): Methods of Mathematical Finance. Springer-
    Verlag
95. Karlin, S., Taylor, H. (1975): A First Course in Stochastic Processes. Second
    Edition. Academic Press
96. Kloeden, P.E., Platen, E. (1992): Numerical Solution of Stochastic Differential
    Equations. Springer-Verlag
97. Knight, F.B. (1981): Essentials of Brownian Motion. American Math. Soc.
98. Kopp, P. (1984): Martingales and Stochastic Integrals. Cambridge University
    Press
99. Krishnan, V. (1984): Nonlinear Filtering and Smoothing: An Introduction to
    Martingales, Stochastic Integrals and Estimation. J. Wiley & Sons
100. Krylov, N.V. (1980): Controlled Diffusion Processes. Springer-Verlag
101. Krylov, N.V., Zvonkin, A.K. (1981): On strong solutions of stochastic differ-
    ential equations. Sel. Math. Sov. I, 19–61
102. Kushner, H.J. (1967): Stochastic Stability and Control. Academic Press
103. Lamperti, J. (1977): Stochastic Processes. Springer-Verlag
104. Lamberton, D., Lapeyre, B. (1996): Introduction to Stochastic Calculus Ap-
    plied to Finance. Chapman & Hall
                                                                 References      321


105. Levental, S., Skorohod, A.V. (1995): A necessary and sufficient condition for
   absence of arbitrage with tame portfolios. Ann. Appl. Probability 5, 906–925
106. Lin, S.J. (1995): Stochastic analysis of fractional Brownian motions. Stochas-
   tics 55, 121–140
107. Liptser, R.S., Shiryaev, A.N. (1977): Statistics of Random Processes, vol. I.
   Springer-Verlag
108. Liptser, R.S., Shiryaev, A.N. (1978): Statistics of Random Processes, vol. II.
   Springer-Verlag
109. McDonald, R., Siegel, D. (1986): The valueof waiting to invest. Quarterly J.
   of Economics 101, 707–727
110. McGarty, T.P. (1974): Stochastic Systems and State Estimation. J. Wiley &
   Sons
111. McKean, H.P. (1965): A free boundary problem for the heat equation arising
   from a problem of mathematical economics. Industrial managem. review 60,
   32–39
112. McKean, H.P. (1969): Stochastic Integrals. Academic Press
113. Malliaris, A.G. (1983): Itô’s calculus in financial decision making. SIAM Re-
   view 25, 481–496
114. Malliaris, A.G., Brock, W.A. (1982): Stochastic Methods in Economics and
   Finance. North-Holland
115. Markowitz, H.M. (1976): Portfolio Selection. Efficient Diversification of In-
   vestments. Yale University Press
116. Maybeck, P.S. (1979): Stochastic Models, Estimation, and Control. Vols. 1–3.
   Academic Press
117. Merton, R.C. (1971): Optimum consumption and portfolio rules in a
   continuous-time model. Journal of Economic Theory 3, 373–413
118. Merton, R.C. (1990): Continuous-Time Finance. Blackwell Publishers
119. Metivier, M., Pellaumail, J. (1980): Stochastic Integration. Academic Press
120. Meyer, P.A. (1966): Probability and Potentials. Blaisdell
121. Meyer, P.A. (1976): Un cours sur les intégrales stochastiques. Sem. de Prob.
   X. Lecture Notes in Mathematics, vol. 511. Springer-Verlag, 245–400
122. Musiela, M., Rutkowski, M. (1997): Martingale Methods in Financial Mod-
   elling. Springer-Verlag
123. Ocone, D. (1984): Malliavin’s calculus and stochastic integral: representation
   of functionals of diffusion processes. Stochastics 12, 161–185
124. Øksendal, B. (1984): Finely harmonic morphisms, Brownian path preserving
   functions and conformal martingales. Inventiones math. 750, 179–187
125. Øksendal, B. (1990): When is a stochastic integral a time change of a diffusion?
   Journal of Theoretical Probability 3, 207–226
126. Øksendal, B. (1996): An Introduction to Malliavin Calculus with Application
   to Economics. Preprint, Norwegian School of Economics and Business Admin-
   istration
127. Olsen, T.E., Stensland, G. (1987): A note on the value of waiting to invest.
   Manuscript CMI, N–5036 Fantoft, Norway
128. Pardoux, E. (1979): Stochastic partial differential equations and filtering of
   diffusion processes. Stochastics 3, 127–167
129. Port, S., Stone, C. (1979): Brownian Motion and Classical Potential Theory.
   Academic Press
130. Protter, P. (1990): Stochastic Integration and Differential Equations. Springer-
   Verlag
131. Ramsey, F.P. (1928): A mathematical theory of saving. Economic J. 38, 543–
   549
322    References


132. Rao, M. (1977): Brownian Motion and Classical Potential Theory. Aarhus
   Univ. Lecture Notes in Mathematics 47
133. Rao, M.M. (1984): Probability Theory with Applications. Academic Press
134. Revuz, D., Yor, M. (1991): Continuous Martingales and Brownian Motion.
   Springer-Verlag
135. Rogers, L.C.G., Williams, D. (1994): Diffusions, Markov Processes, and Mar-
   tingales. Vol. 1, 2nd edition. J. Wiley & Sons
136. Rogers, L.C.G., Williams, D. (1987): Diffusions, Markov Processes, and Mar-
   tingales. Vol. 2. J. Wiley & Sons
137. Rozanov, Yu.A. (1982): Markov Random Fields. Springer-Verlag
138. Samuelson, P.A. (1965): Rational theory of warrant pricing. Industrial man-
   agem. review 6, 13–32
139. Shiryaev, A.N. (1978): Optimal Stopping Rules. Springer-Verlag
140. Shiryaev, A.N. (1999): Essentials of Stochastic Finance. World Scientific
141. Simon, B. (1979): Functional Integration and Quantum Physics. Academic
   Press
142. Snell, J.L. (1952): Applications of martingale system theorems. Trans. Amer.
   Math. Soc. 73, 293–312
143. Stratonovich, R.L. (1966): A new representation for stochastic integrals and
   equations. J. Siam Control 4, 362–371
144. Stroock, D.W. (1971): On the growth of stochastic integrals. Z. Wahr. verw.
   Geb. 18, 340–344
145. Stroock, D.W. (1981): Topics in Stochastic Differential Equations. Tata Insti-
   tute of Fundamental Research. Springer-Verlag
146. Stroock, D.W. (1993): Probability Theory, An Analytic View. Cambride Uni-
   versity Press
147. Stroock, D.W., Varadhan, S.R.S. (1979): Multidimensional Diffusion Pro-
   cesses. Springer-Verlag
148. Sussmann, H.J. (1978): On the gap between deterministic and stochastic or-
   dinary differential equations. The Annals of Prob. 60, 19–41
149. Taraskin, A. (1974): On the asymptotic normality of vectorvalued stochas-
   tic integrals and estimates of drift parameters of a multidimensional diffusion
   process. Theory Prob. Math. Statist. 2, 209–224
150. The Open University (1981): Mathematical models and methods, unit 11. The
   Open University Press
151. Topsøe, F. (1978): An information theoretical game in connection with the
   maximum entropy principle (Danish). Nordisk Matematisk Tidsskrift 25/26,
   157–172
152. Turelli, M. (1977): Random environments and stochastic calculus. Theor. Pop.
   Biology 12, 140–178
153. Ubøe, J. (1987): Conformal martingales and analytic functions. Math. Scand.
   60, 292–309
154. Van Moerbeke, P. (1974): An optimal stopping problem with linear reward.
   Acta Mathematica 132, 111–151
155. Williams, D. (1979): Diffusions, Markov Processes and Martingales. J. Wiley
   & Sons
156. Williams, D. (1981) (editor): Stochastic Integrals. Lecture Notes in Mathe-
   matics, vol. 851. Springer-Verlag
157. Williams, D. (1991): Probability with Martingales. Cambridge University
   Press
158. Wong, E. (1971): Stochastic Processes in Information and Dynamical Systems.
   McGraw-Hill
                                                             References    323


159. Wong, E., Zakai, M. (1969): Riemann-Stieltjes approximations of stochastic
   integrals. Z. Wahr. verw. Geb. 120, 87–97
160. Yeh, J. (1995): Martingales and Stochastic Analysis. World Scientific
161. Yong, J., Zhou, X.Y. (1999): Stochastic Controls: Hamiltonian Systems and
   HJB Equations. Springer-Verlag
162. Yor, M. (1992): Some Aspects of Brownian Motion, Part I. ETH Lectures in
   Math. Birkhäuser
163. Yor, M. (1997): Some Aspects of Brownian Motion, Part II. ETH Lectures in
   Math. Birkhäuser
324   References
List of Frequently Used Notation and Symbols




Rn                   n-dimensional Euclidean space
R+                   the non-negative real numbers
Q                    the rational numbers
Z                    the integers
Z+ = N               the natural numbers
C                    the complex plane
Rn×m                 the n × m matrices (real entries)
AT                   the transposed of the matrix A
|C|                  the determinant of the n × n matrix C
Rn ≃ Rn×1            i.e. vectors in Rn are regarded as n × 1-matrices
Cn = C × · · · × C   the n-dimensional complex space
                     Pn
|x|2 = x2                 x2i if x = (x1 , . . . , xn ) ∈ Rn
                     i=1
                                       P
                                       n
x·y                  the dot product         xi yi if x = (x1 , . . . , xn ),
                                       i=1
                     y = (y1 , . . . , yn )
x+                   max(x, 0) if x ∈ R
x−                   max(−x,
                     ½           0) if x ∈ R
                        1 if x ≥ 0
sign x
                       −1 if x < 0
C(U, V )             the continuous functions from U into V
C(U )                the same as C(U, R)
C0 (U )              the functions in C(U ) with compact support
C k = C k (U )       the functions in C(U, R) with continuous deriva-
                     tives up to order k
C0k = C0k (U )       the functions in C k (U ) with compact support in U
C k+α                the functions in C k whose k’th derivatives are Lip-
                     schitz continuous with exponent α
C 1,2 (R × Rn )      the functions f (t, x): R × Rn → R which are C 1
                     w.r.t. t ∈ R and C 2 w.r.t. x ∈ Rn
Cb (U )              the bounded continuous functions on U
f |K                 the restriction of the function f to the set K
A = AX               the generator of an Itô diffusion X
A = AX               the characteristic operator of an Itô diffusion X
326     List of Frequently Used Notation and Symbols


L = LX                      the second order partial differential operator which
                            coincides with AX on C02 and with AX on C 2
Bt (or (Bt , F, Ω, P x ))   Brownian motion
DA                          the domain of definition of the operator A
                                                  ∂f             ∂f
∇                           the gradient: ∇f = ( ∂x   , . . . , ∂x  )
                                                    1
                                                              P ∂n2 f
∆                           the Laplace operator: ∆f =            ∂x2
                                                                 i
                                                           i
L                           a semielliptic second order partial differential oper-
                                                  P ∂        P         2
                            ator of the form L =     bi ∂xi + aij ∂x∂i ∂xj
                                                   i           i,j
Rα                          the resolvent operator
iff                         if and only if
a.a., a.e., a.s.            almost all, almost everywhere, almost surely
w.r.t.                      with respect to
s.t.                        such that
≃                 R         coincides in law with (see Section 8.5)
E[Y ] = E µ [Y ] = Y dµ     the expectation of the random variable Y w.r.t. the
                            measure µ
E[Y |N ]                    the conditional expectation of
                                                         S Y w.r.t. N
F∞                          the σ-algebra generated by      Ft
                                                         t>0
B                           the Borel σ-algebra
      (m)
Ft , Ft                     the σ-algebra generated by {Bs ; s ≤ t}, Bs is m-
                            dimensional
Fτ                          the σ-algebra generated by {Bs∧τ ; s ≥ 0} (τ is a
                            stopping time)
⊥                           orthogonal to (in a Hilbert space)
Mt                          the σ-algebra generated by {Xs ; s ≤ t} (Xt is an
                            Itô diffusion)
Mτ                          the σ-algebra generated by {Xs∧τ ; s ≥ 0} (τ is a
                            stopping time)
∂G                          the boundary of the set G
G                           the closure of the set G
G ⊂⊂ H                      G is compact and G ⊂ H
d(y, K)                     the distance from the point y ∈ Rn to the set K ⊂
                            Rn
τG                          the first exit time from the set G of a process
                            Xt : τG = inf{t > 0; Xt ∈
                                                    / G}
V(S, T ), V n (S, T )       Definition 3.3.1
W, W n                      Definition 3.3.2
(H)                         Hunt’s condition (Chapter 9)
HJB                         the Hamilton-Jacobi-Bellman equation (Chapter 11)
In                          the n × n identity matrix
XG                          the indicator function of the set G XG (x) = 1 if
                            x ∈ G, XG (x) = 0 if x ∈/G
                         List of Frequently Used Notation and Symbols        327


Px                       the probability law of Bt starting at x
P = P0                   the probability law of Bt starting at 0
Qx                       the probability law of Xt starting at x (X0 = x)
R(s,x)                   the probability law of Yt = (s + t), Xtx )t≤0 with
                         Y0 = (s, x) (Chapter 10)
                                                                 s,x
Qs,x                     the probability law of Yt = (s + t, Xs+t    )t≥0 with
                         Y0 = (s, x) (Chapter 11)
P ¿Q                     the measure P is absolutely continuous w.r.t. the
                         measure Q
P ∼Q                     P is equivalent to Q, i.e. P ¿ Q and Q ¿ P
E x , E (s,x) , E s,x    the expectation operator w.r.t. the measures Qx ,
                         R(s,x) and Qs,x , respectively
EQ                       the expectation w.r.t. the measure Q
E                        the expectation w.r.t. a measure which is clear from
                         the context (usually P 0 )
s∧t                      the minimum of s and t (= min(s, t))
s∨t                      the maximum of s and t (= max(s, t))
σT                       the transposed of the matrix σ
δx                       the unit point mass at x
δij                      δij = 1 if i = j, δij = 0 if i 6= j
θt                       the shift operator: θt (f (Xs )) = f (Xt+s ) (Chap-
                         ter 7)
θ(t)                     portfolio (see (12.1.3))
V θ (t)                  = θ(t) · X(t), the value process (see (12.1.4))
                                Rt
Vzθ (t)                  = z + θ(s)dX(s), the value generated at time t by
                               0
                         the self-financing portfolio θ if the initial value is z
                         (see (12.1.7))
X(t)                     the normalized price vector (see (12.1.8)–(12.1.11))
ξ(t)                     the discounting factor (see (12.1.9))
:=                       equal to by definition
lim , lim                the same as lim inf, lim sup
ess inf f                sup{M ∈ R ; f ≥ M a.s.}
ess sup f                inf{N ∈ R ; f ≤ N a.s.}
t
u                        end of proof

“increasing” is used with the same meaning as “nondecreasing”, “decreas-
ing” with the same meaning as “nonincreasing”. In the strict cases “strictly
increasing/strictly decreasing” are used.
328   List of Frequently Used Notation and Symbols
Index




adapted process 25                         Chebychev’s inequality 16
admissible portfolio 251                   coincide in law 140, 141
American call option 284, 289              combined Dirichlet-Poisson problem
American contingent T -claim 276              165–167, 182
American options 275–284                   complete market 260
American put option 283–284                complete probability space 8
American put option, perpetual 289         complex Brownian motion 76
analytic functions (and Brownian           conditional expectation 295
  motion) 76, 150                          conditioned Brownian motion 127
arbitrage 251                              contingent T -claim (American) 276
attainable claim 260                       contingent T -claim (European) 259
                                           continuation region 201
Bayes’ rule 152 (8.6.3)                    continuous in mean square 40
Bellman principle 241                      control, deterministic (open loop) 225
Bessel process 49, 140                     control, feedback (closed loop) 225
bequest function 223                       control, Markov 225
Black and Scholes formula 4, 160, 274,     control, optimal 224
  288                                      convolution 302
Borel sets, Borel σ-algebra 8              covariance matrix 12, 291
Borel-Cantelli lemma 16                    cross-variation processes 152
Brownian bridge 75                         crowded environment 77
Brownian motion, in Rn 3, 11–14
Brownian motion, complex 76                density (of a random variable) 15
Brownian motion, on the ellipse 73         diffusion, Itô 107
Brownian motion, on the unit circle        diffusion, Dynkin 121
  65, 121                                  diffusion coefficient 107
Brownian motion, on the unit sphere        Dirichlet problem 2, 167
  149                                      Dirichlet problem (generalized) 174
Brownian motion, on a Riemannian           Dirichlet problem (stochastic version)
  manifold 150                                170
Brownian motion, the graph of 118          Dirichlet-Poisson problem 165–167,
Brownian motion, w.r.t. an increasing         182
  family Ht of σ-algebras 70               distribution (of a random variable) 9
                                           distribution (of a process) 10
capacity 163                               distribution function (of a random
carrying capacity 77                          variable) 15
characteristic function 292                Doob-Dynkin lemma 8–9
characteristic operator 120                Doob-Meyer decomposition 279
change of time 145                         drift coefficient 107
change of variable in an Itô integral     Dudley’s theorem 253
  148                                      Dynkin’s formula 118


                                         329
330     Index


eigenvalues (of the Laplacian) 187       harmonic measure (of Brownian
elementary function/process 26              motion) 124
elliptic partial differential operator   harmonic measure (of a diffusion)
   165, 176                                 114, 115, 129
equivalent martingale measure 254,       hedging portfolio 260
   264                                   Hermite polynomials 38
estimate (linear/measurable) 85          high contact (smooth fit) principle
estimation of a parameter 97                210, 212, 218
estimation, exact asymptotic 101, 102    hitting distribution 114, 115
European call option 4, 265, 288–289     Ht -Brownian motion 70
European contingent T -claim 259         h-transform (of Brownian motion)
European option 265                         127
European put option 266                  Hunt’s condition (H) 175
events 8
excessive function 197                   independent 9
expectation 9                            independent increments 13, 22
explosion (of a diffusion) 66, 78        innovation process 82, 86, 87, 90
exponential martingale 55                integration by parts (stochastic) 46,
                                            55
Feller-continuity 133                    interpolation (smoothing) 103
Feynman-Kac formula 135, 190             irregular point 172, 188
filtering problem, general 2, 79–81      iterated Itô integrals 38
filtering problem, linear 81–101         iterated logarithm (law of) 64
filtration 31, 38                        Itô diffusion 107
finite-dimensional distributions (of a   Itô integral 24–37
    stochastic process) 10               Itô integral; multidimensional 34, 35
first exit distribution 130, 192         Itô interpretation (of a stochastic
first exit time 111                         differential equation) 36, 61, 79
                                         Itô isometry 26, 29
Gaussian process 12                      Itô process 44, 48
generalized (distribution valued)        Itô representation theorem 51
  process 21                             Itô’s formula 44, 48
generator (of an Itô diffusion) 115,
                                         Jensen inequality   296
  117
geometric Brownian motion 62             Kalman-Bucy filter 2, 95, 100
Girsanov’s theorem 60, 153–158           Kazamaki condition 55
Girsanov transformation 153              kernel function 127
Green formula 184                        killing (a diffusion) 137
Green function 163, 183, 191             killing rate 138, 164
Green function (classical) 183, 185      Kolmogorov’s backward equation 131
Green measure 18, 183, 238               Kolmogorov’s continuity theorem 14
Green operator 164                       Kolmogorov’s extension theorem 11
Gronwall inequality 68, 78               Kolmogorov’s forward equation 159
Hamilton-Jacobi-Bellman (HJB)            Langevin equation 74
equation 226–230                         Laplace operator ∆ 3, 57
harmonic extension (w.r.t. an Itô       Laplace-Beltrami operator 150
  diffusion) 122                         law of iterated logarithm 64
harmonic function (and Brownian          least superharmonic majorant 196
  motion) 150                            least supermeanvalued majorant 196
harmonic function (w.r.t. a diffusion)   Levy’s characterization of Brownian
  169                                       motion 152
                                         Levy’s theorem 151
                                                                       Index        331


linear regulator problem 231               Ornstein-Uhlenbeck equation/process
Lipschitz surface 213, 301                   74
local martingale 126                       orthogonal increments 82
local time 58, 59, 72
Lyapunov equation 103                      path (of a stochastic process) 10
                                           performance function 224
Malliavin derivative 53                    Perron-Wiener-Brelot solution 178
market 247                                 Poisson formula 189
market, complete 260                       Poisson kernel 189
market, normalized 247, 248                Poisson problem 168
Markov control 225                         Poisson problem (generalized) 180
Markov process 110                         Poisson problem (stochastic version)
Markov property 109                           180
martingale 31, 33, 298                     polar set 162, 175
martingale, local 126                      population growth 1, 61, 77
martingale convergence theorem 298         portfolio 4, 236, 248–251
martingale inequality 31                   prediction 103
martingale problem 138                     probability measure 7
martingale representation theorem          probability space 8
  49, 53                                   p’th variation process 19
maximum likelihood 98
maximum principle 189                      quadratic variation process     19, 56
mean-reverting Ornstein-Uhlenbeck
  process 74                               random time change 145
mean square error 92                       random variable 9
mean value property, classical 124         recurrent 120
mean value property (for a diffusion)      regular point 172–174, 188
  114, 115                                 replicating portfolio 260
measurable function (w.r.t. a σ-algebra)   resolvent operator 133
  8                                        reward function 193
measurable sets (w.r.t. a σ-algebra) 8     reward rate function 194
measurable space 7                         Riccati equation 93, 95, 101, 233
moving average, exponentially weighted
  97                                       scaling (Brownian) 19
                                           self-financing portfolio 248
noise 1–4, 21–22, 61                       semi-elliptic partial differential operator
normal distribution 12, 291                   165
normalization (of a market process)        semi-polar set 175
  248                                      separation principle 225, 233
Novikov condition 55                       shift operator 113
numeraire 248                              Snell envelope 279
                                           smoothing (interpolation) 103
observation process 80                     stationary process 21, 22
optimal control 224                        stochastic control 4, 223–240
optimal performance 224                    stochastic differential equation;
optimal portfolio selection 4, 234            definition 61
optimal stopping 3, 193–215                stochastic differential equation;
optimal stopping time 193, 199, 202,          existence and uniqueness of solution
  213                                         66
optimal stopping existence theorem         stochastic differential equation; weak
  199                                         and strong solution 70
optimal stopping uniqueness theorem        stochastic Dirichlet problem 170
  202                                      stochastic integral 44
option pricing 4, 265–284                  stochastic Poisson problem 180
332     Index


stochastic process 9                       Wiener criterion     174
stopping time 57, 110
Stratonovich integral 24, 35–37, 39, 40    X-harmonic     169
Stratonovich interpretation (of a
   stochastic differential equation) 36,   zero-one law   171
   62, 63, 64, 79
strong Feller process 177                  σ-algebra 7
strong Markov property 110–113             σ-algebra, generated by a family of sets
strong solution (of a stochastic             8
   differential equation) 70               σ-algebra, generated by a random
strong uniqueness (of a stochastic           variable 8
   differential equation) 67, 71
submartingale 298
superharmonic function 194
superharmonic majorant 196
supermartingale (126), 196, 253, 266,
   279, 298
supermeanvalued function 194
supermeanvalued majorant 196
superreplicate 279
support (of a diffusion) 105

Tanaka’s equation 71
Tanaka’s formula 58, 59, 72
terminal conditions (in stochastic
   control) 239–240, 245
thin set 175
time-homogeneous 108
time change formula Itô integrals 148
total variation process 19
transient 120
transition measure 184
transition operator 164
trap 121

uniformly elliptic partial differential
  operator 176, 269
uniformly integrable 297–298
utility function 4, 234

value function 224
value process 248
value process, normalized 249
variational inequalities (and optimal
  stopping) 3, 212–215
version (of a process) (12), 14, 32
Volterra equation, deterministic 89
Volterra equation, stochastic 75

weak solution (of a stochastic
  differential equation) 70
weak uniqueness 71
well posed (martingale problem)      139
white noise 21, 61



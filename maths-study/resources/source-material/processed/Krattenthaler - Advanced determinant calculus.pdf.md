---
normalized_id: shared-pdf-reference-krattenthaler-advanced-determinant-calculus
exam_code: SHARED
material_scope: krattenthaler - advanced determinant calculus.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Krattenthaler - Advanced determinant calculus.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-krattenthaler-advanced-determinant-calculus

                                                     ADVANCED DETERMINANT CALCULUS

                                                                       C. KRATTENTHALER†

                                                      Institut für Mathematik der Universität Wien,
                                                         Strudlhofgasse 4, A-1090 Wien, Austria.
math.CO/9902004 v3 31 May 1999




                                                              E-mail: kratt@pap.univie.ac.at
                                                     WWW: http://radon.mat.univie.ac.at/People/kratt
                                           Dedicated to the pioneer of determinant evaluations (among many other things),
                                                                            George Andrews

                                         Abstract. The purpose of this article is threefold. First, it provides the reader with
                                         a few useful and efficient tools which should enable her/him to evaluate nontrivial de-
                                         terminants for the case such a determinant should appear in her/his research. Second,
                                         it lists a number of such determinants that have been already evaluated, together with
                                         explanations which tell in which contexts they have appeared. Third, it points out
                                         references where further such determinant evaluations can be found.



                                 1. Introduction
                                    Imagine, you are working on a problem. As things develop it turns out that, in
                                 order to solve your problem, you need to evaluate a certain determinant. Maybe your
                                 determinant is
                                                                                  
                                                                                1
                                                                      det            ,                          (1.1)
                                                                    1≤i,j,≤n   i+j
                                 or
                                                                                  
                                                                              a+b
                                                                  det                  ,                        (1.2)
                                                                1≤i,j≤n      a−i+j
                                 or it is possibly
                                                                                              
                                                                                      µ+i+j
                                                                        det                          ,                             (1.3)
                                                                     0≤i,j≤n−1         2i − j
                                    1991 Mathematics Subject Classification. Primary 05A19; Secondary 05A10 05A15 05A17 05A18
                                 05A30 05E10 05E15 11B68 11B73 11C20 15A15 33C45 33D45.
                                    Key words and phrases. Determinants, Vandermonde determinant, Cauchy’s double alternant,
                                 Pfaffian, discrete Wronskian, Hankel determinants, orthogonal polynomials, Chebyshev polynomials,
                                 Meixner polynomials, Meixner–Pollaczek polynomials, Hermite polynomials, Charlier polynomials, La-
                                 guerre polynomials, Legendre polynomials, ultraspherical polynomials, continuous Hahn polynomials,
                                 continued fractions, binomial coefficient, Genocchi numbers, Bernoulli numbers, Stirling numbers, Bell
                                 numbers, Euler numbers, divided difference, interpolation, plane partitions, tableaux, rhombus tilings,
                                 lozenge tilings, alternating sign matrices, noncrossing partitions, perfect matchings, permutations,
                                 inversion number, major index, descent algebra, noncommutative symmetric functions.
                                    †
                                      Research partially supported by the Austrian Science Foundation FWF, grants P12094-MAT and
                                 P13190-MAT.
                                                                                      1
2                                          C. KRATTENTHALER

or maybe
                                                                       
                                           x+y+j              x+y+j
                              det                           −                   .                    (1.4)
                            1≤i,j≤n        x − i + 2j         x + i + 2j
Honestly, which ideas would you have? (Just to tell you that I do not ask for something
impossible: Each of these four determinants can be evaluated in “closed form”. If you
want to see the solutions immediately, plus information where these determinants come
from, then go to (2.7), (2.17)/(3.12), (2.19)/(3.30), respectively (3.47).)
   Okay, let us try some row and column manipulations. Indeed, although it is not
completely trivial (actually, it is quite a challenge), that would work for the first two
determinants, (1.1) and (1.2), although I do not recommend that. However, I do not
recommend at all that you try this with the latter two determinants, (1.3) and (1.4). I
promise that you will fail. (The determinant (1.3) does not look much more complicated
than (1.2). Yet, it is.)
   So, what should we do instead?
   Of course, let us look in the literature! Excellent idea. We may have the problem
of not knowing where to start looking. Good starting points are certainly classics like
[119], [120], [121], [127] and [178]1. This will lead to the first success, as (1.1) does
indeed turn up there (see [119, vol. III, p. 311]). Yes, you will also find evaluations for
(1.2) (see e.g. [126]) and (1.3) (see [112, Theorem 7]) in the existing literature. But at
the time of the writing you will not, to the best of my knowledge, find an evaluation of
(1.4) in the literature.
   The purpose of this article is threefold. First, I want to describe a few useful and
efficient tools which should enable you to evaluate nontrivial determinants (see Sec-
tion 2). Second, I provide a list containing a number of such determinants that have
been already evaluated, together with explanations which tell in which contexts they
have appeared (see Section 3). Third, even if you should not find your determinant
in this list, I point out references where further such determinant evaluations can be
found, maybe your determinant is there.
   Most important of all is that I want to convince you that, today,
                Evaluating determinants is not (okay: may not be) difficult!

When George Andrews, who must be rightly called the pioneer of determinant evalua-
tions, in the seventies astounded the combinatorial community by his highly nontrivial
determinant evaluations (solving difficult enumeration problems on plane partitions),
it was really difficult. His method (see Section 2.6 for a description) required a good
“guesser” and an excellent “hypergeometer” (both of which he was and is). While at
that time especially to be the latter was quite a task, in the meantime both guessing and
evaluating binomial and hypergeometric sums has been largely trivialized, as both can
be done (most of the time) completely automatically. For guessing (see Appendix A)

    1
    Turnbull’s book [178] does in fact contain rather lots of very general identities satisfied by determi-
nants, than determinant “evaluations” in the strict sense of the word. However, suitable specializations
of these general identities do also yield “genuine” evaluations, see for example Appendix B. Since the
value of this book may not be easy to appreciate because of heavy notation, we refer the reader to
[102] for a clarification of the notation and a clear presentation of many such identities.
                            ADVANCED DETERMINANT CALCULUS                                         3

this is due to tools like Superseeker2, gfun and Mgfun3 [152, 24], and Rate4 (which is
by far the most primitive of the three, but it is the most effective in this context). For
“hypergeometrics” this is due to the “WZ-machinery”5 (see [130, 190, 194, 195, 196]).
And even if you should meet a case where the WZ-machinery should exhaust your com-
puter’s capacity, then there are still computer algebra packages like HYP and HYPQ6,
or HYPERG7, which make you an expert hypergeometer, as these packages comprise
large parts of the present hypergeometric knowledge, and, thus, enable you to con-
veniently manipulate binomial and hypergeometric series (which George Andrews did
largely by hand) on the computer. Moreover, as of today, there are a few new (perhaps
just overlooked) insights which make life easier in many cases. It is these which form
large parts of Section 2.
   So, if you see a determinant, don’t be frightened, evaluate it yourself!

2. Methods for the evaluation of determinants
   In this section I describe a few useful methods and theorems which (may) help you
to evaluate a determinant. As was mentioned already in the Introduction, it is always
possible that simple-minded things like doing some row and/or column operations, or
applying Laplace expansion may produce an (usually inductive) evaluation of a deter-
minant. Therefore, you are of course advised to try such things first. What I am
mainly addressing here, though, is the case where that first, “simple-minded” attempt
failed. (Clearly, there is no point in addressing row and column operations, or Laplace
expansion.)
   Yet, we must of course start (in Section 2.1) with some standard determinants, such
as the Vandermonde determinant or Cauchy’s double alternant. These are of course
well-known.
   In Section 2.2 we continue with some general determinant evaluations that generalize
the evaluation of the Vandermonde determinant, which are however apparently not
equally well-known, although they should be. In fact, I claim that about 80 % of the
determinants that you meet in “real life,” and which can apparently be evaluated, are a
special case of just the very first of these (Lemma 3; see in particular Theorem 26 and
the subsequent remarks). Moreover, as is demonstrated in Section 2.2, it is pure routine
to check whether a determinant is a special case of one of these general determinants.
Thus, it can be really considered as a “method” to see if a determinant can be evaluated
by one of the theorems in Section 2.2.
  2
     the electronic version of the “Encyclopedia of Integer Sequences” [162, 161], written and developed
by Neil Sloane and Simon Plouffe; see http://www.research.att.com/~njas/sequences/ol.html
   3
     written by Bruno Salvy and Paul Zimmermann, respectively Frederic Chyzak; available from
http://pauillac.inria.fr/algo/libraries/libraries.html
   4
     written in Mathematica by the author; available from http://radon.mat.univie.ac.at/People/kratt;
the Maple equivalent GUESS by François Béraud and Bruno Gauthier is available from
http://www-igm.univ-mlv.fr/~gauthier
   5
     Maple      implementations      written    by     Doron     Zeilberger     are     available   from
http://www.math.temple.edu/~zeilberg,               Mathematica      implementations       written     by
Peter Paule,        Axel Riese,      Markus Schorn,        Kurt Wegschaider are available from
http://www.risc.uni-linz.ac.at/research/combinat/risc/software
   6
     written in Mathematica by the author; available from http://radon.mat.univie.ac.at/People/kratt
   7
     written in Maple by Bruno Ghauthier; available from http://www-igm.univ-mlv.fr/~gauthier
4                                     C. KRATTENTHALER

   The next method which I describe is the so-called “condensation method” (see Sec-
tion 2.3), a method which allows to evaluate a determinant inductively (if the method
works).
   In Section 2.4, a method, which I call the “identification of factors” method, is de-
scribed. This method has been extremely successful recently. It is based on a very
simple idea, which comes from one of the standard proofs of the Vandermonde deter-
minant evaluation (which is therefore described in Section 2.1).
   The subject of Section 2.5 is a method which is based on finding one or more differen-
tial or difference equations for the matrix of which the determinant is to be evaluated.
   Section 2.6 contains a short description of George Andrews’ favourite method, which
basically consists of explicitly doing the LU-factorization of the matrix of which the
determinant is to be evaluated.
   The remaining subsections in this section are conceived as a complement to the pre-
ceding. In Section 2.7 a special type of determinants is addressed, Hankel determinants.
(These are determinants of the form det1≤i,j≤n (ai+j ), and are sometimes also called per-
symmetric or Turánian determinants.) As is explained there, you should expect that a
Hankel determinant evaluation is to be found in the domain of orthogonal polynomials
and continued fractions. Eventually, in Section 2.8 a few further, possibly useful results
are exhibited.
   Before we finally move into the subject, it must be pointed out that the methods
of determinant evaluation as presented here are ordered according to the conditions a
determinant must satisfy so that the method can be applied to it, from “stringent” to
“less stringent”. I. e., first come the methods which require that the matrix of which
the determinant is to be taken satisfies a lot of conditions (usually: it contains a lot of
parameters, at least, implicitly), and in the end comes the method (LU-factorization)
which requires nothing. In fact, this order (of methods) is also the order in which I
recommend that you try them on your determinant. That is, what I suggest is (and
this is the rule I follow):
    (0) First try some simple-minded things (row and column operations, Laplace expan-
        sion). Do not waste too much time. If you encounter a Hankel-determinant then
        see Section 2.7.
    (1) If that fails, check whether your determinant is a special case of one of the general
        determinants in Sections 2.2 (and 2.1).
    (2) If that fails, see if the condensation method (see Section 2.3) works. (If necessary,
        try to introduce more parameters into your determinant.)
    (3) If that fails, try the “identification of factors” method (see Section 2.4). Alterna-
        tively, and in particular if your matrix of which you want to find the determinant
        is the matrix defining a system of differential or difference equations, try the dif-
        ferential/difference equation method of Section 2.5. (If necessary, try to introduce
        a parameter into your determinant.)
    (4) If that fails, try to work out the LU-factorization of your determinant (see Sec-
        tion 2.6).
    (5) If all that fails, then we are really in trouble. Perhaps you have to put more efforts
        into determinant manipulations (see suggestion (0))? Sometimes it is worthwile
        to interpret the matrix whose determinant you want to know as a linear map and
        try to find a basis on which this map acts triangularly, or even diagonally (this
                            ADVANCED DETERMINANT CALCULUS                                       5

    requires that the eigenvalues of the matrix are “nice”; see [47, 48, 84, 93, 192] for
    examples where that worked). Otherwise, maybe something from Sections 2.8 or
    3 helps?
  A final remark: It was indicated that some of the methods require that your deter-
minant contains (more or less) parameters. Therefore it is always a good idea to:
                    Introduce more parameters into your determinant!
(We address this in more detail in the last paragraph of Section 2.1.) The more param-
eters you can play with, the more likely you will be able to carry out the determinant
evaluation. (Just to mention a few examples: The condensation method needs, at least,
two parameters. The “identification of factors” method needs, at least, one parameter,
as well as the differential/difference equation method in Section 2.5.)
2.1. A few standard determinants. Let us begin with a short proof of the Van-
dermonde determinant evaluation
                                    Y
                         det Xij−1 =     (Xj − Xi ).                     (2.1)
                             1≤i,j≤n
                                                1≤i<j≤n

     Although the following proof is well-known, it makes still sense to quickly go through
it because, by extracting the essence of it, we will be able to build a very powerful
method out of it (see Section 2.4).
     If Xi1 = Xi2 with i1 6= i2, then the Vandermonde determinant (2.1) certainly vanishes
because in that case two rows of the determinant are identical. Hence, (Xi1 − Xi2 )
divides the Q determinant as a polynomial in the Xi ’s. But that means that the complete
product 1≤i<j≤n (Xj − Xi ) (which is exactly the right-hand side of (2.1)) must divide
the determinant.
 n
    On the other hand, the determinant is a polynomial in the Xi ’s of degree at most
  2
      . Combined with the previous observation, this implies that the determinant equals
the right-hand side product times, possibly, some constant. To compute the constant,
compare coefficients of X10 X21 · · · Xnn−1 on both sides of (2.1). This completes the proof
of (2.1).
  At this point, let us extract the essence of this proof as we will come back to it in
Section 2.4. The basic steps are:
  1. Identification of factors
  2. Determination of degree bound
  3. Computation of the multiplicative constant.
  An immediate generalization of the Vandermonde determinant evaluation is given by
the proposition below. It can be proved in just the same way as the above proof of the
Vandermonde determinant evaluation itself.
Proposition 1. Let X1 , X2 , . . . , Xn be indeterminates. If p1 , p2 , . . . , pn are polynomials
of the form pj (x) = aj xj−1 + lower terms, then
                                                       Y
                       det (pj (Xi )) = a1 a2 · · · an     (Xj − Xi ).                       (2.2)
                      1≤i,j≤n
                                                       1≤i<j≤n
6                                             C. KRATTENTHALER

  The following variations of the Vandermonde determinant evaluation are equally easy
to prove.
Lemma 2. The following identities hold true:
                                                        Y                              Y
                                                                                        n
      det      (Xij − Xi−j ) = (X1 · · · Xn )−n                 (Xi − Xj )(1 − Xi Xj )    (Xi2 − 1),
     1≤i,j≤n
                                                      1≤i<j≤n                               i=1
                                                                                                      (2.3)

                 j−1/2      −(j−1/2)
     det (Xi             − Xi          )
    1≤i,j≤n
                                                      Y                              Y
                                                                                      n
                     = (X1 · · · Xn )−n+1/2                   (Xi − Xj )(1 − Xi Xj )    (Xi − 1),     (2.4)
                                                    1≤i<j≤n                           i=1

                           −(j−1)
                                                                   Y                             
     det (Xij−1 + Xi                ) = 2 · (X1 · · · Xn )−n+1             (Xi − Xj )(1 − Xi Xj ) ,   (2.5)
    1≤i,j≤n
                                                                 1≤i<j≤n


     det (Xij−1/2 + Xi−(j−1/2) )
    1≤i,j≤n
                                                      Y                              Y
                                                                                      n
                                           −n+1/2
                      = (X1 · · · Xn )                        (Xi − Xj )(1 − Xi Xj )    (Xi + 1). (2.6)
                                                    1≤i<j≤n                            i=1




   We remark that the evaluations (2.3), (2.4), (2.5) are basically the Weyl denominator
factorizations of types C, B, D, respectively (cf. [52, Lemma 24.3, Ex. A.52, Ex. A.62,
Ex. A.66]). For that reason they may be called the “symplectic”, the “odd orthogonal”,
and the “even orthogonal” Vandermonde determinant evaluation, respectively.
                                                                                        λ
   If you encounter generalizations of such determinants of the form det1≤i,j≤n (xi j )
                λ       −λ
or det1≤i,j≤n (xi j − xi j ), etc., then you should be aware that what you encounter is
basically Schur functions, characters for the symplectic groups, or characters for the
orthogonal groups (consult [52, 105, 137] for more information on these matters; see
in particular [105, Ch. I, (3.1)], [52, p. 403, (A.4)], [52, (24.18)], [52, (24.40) + first
paragraph on p. 411], [137, Appendix A2], [52, (24.28)]). In this context, one has to
also mention Okada’s general results on evaluations of determinants and Pfaffians (see
Section 2.8 for definition) in [124, Sec. 4] and [125, Sec. 5].
   Another standard determinant evaluation is the evaluation of Cauchy’s double alter-
nant (see [119, vol. III, p. 311]),
                                       Q
                                  1          1≤i<j≤n (Xi − Xj )(Yi − Yj )
                       det               =      Q                         .          (2.7)
                     1≤i,j≤n   Xi + Yj            1≤i,j≤n (Xi + Yj )

Once you have seen the above proof of the Vandermonde determinant evaluation, you
will immediately know how to prove this determinant evaluation.
   On setting Xi = i and Yi = i, i = 1, 2, . . . , n, in (2.7), we obtain the evaluation of our
first determinant in the Introduction, (1.1). For the evaluation of a mixture of Cauchy’s
double alternant and Vandermonde’s determinant see [15, Lemma 2].
                              ADVANCED DETERMINANT CALCULUS                                             7

   Whether or not you tried to evaluate (1.1) directly, here is an important lesson to be
learned (it was already mentioned earlier): To evaluate (1.1) directly is quite difficult,
whereas proving its generalization (2.7) is almost completely trivial. Therefore, it is
always a good idea to try to introduce more parameters into your determinant. (That is,
in a way such that the more general determinant still evaluates nicely.) More parameters
mean that you have more objects at your disposal to play with.
   The most stupid way to introduce parameters is to just write Xi instead of the row
index i, or write Yj instead of the column index j.8 For the determinant (1.1) even
both simultaneously was possible. For the determinant (1.2) either of the two (but not
both) would work. On the contrary, there seems to be no nontrivial way to introduce
more parameters in the determinant (1.4). This is an indication that the evaluation of
this determinant is in a different category of difficulty of evaluation. (Also (1.3) belongs
to this “different category”. It is possible to introduce one more parameter, see (3.32),
but it does not seem to be possible to introduce more.)
2.2. A general determinant lemma, plus variations and generalizations.
In this section I present an apparently not so well-known determinant evaluation that
generalizes Vandermonde’s determinant, and some companions. As Lascoux pointed
out to me, most of these determinant evaluations can be derived from the evaluation
of a certain determinant of minors of a given matrix due to Turnbull [179, p. 505], see
Appendix B. However, this (these) determinant evaluation(s) deserve(s) to be better
known. Apart from the fact that there are numerous applications of it (them) which I
am aware of, my proof is that I meet very often people who stumble across a special
case of this (these) determinant evaluation(s), and then have a hard time to actually
do the evaluation because, usually, their special case does not show the hidden general
structure which is lurking behind. On the other hand, as I will demonstrate in a mo-
ment, if you know this (these) determinant evaluation(s) then it is a matter completely
mechanical in nature to see whether it (they) is (are) applicable to your determinant
or not. If one of them is applicable, you are immediately done.
   The determinant evaluation of which I am talking is the determinant lemma from
[85, Lemma 2.2] given below. Here, and in the following, empty products (like (Xi +
An)(Xi + An−1 ) · · · (Xi + Aj+1 ) for j = n) equal 1 by convention.
Lemma 3. Let X1 , . . . , Xn , A2, . . . , An, and B2 , . . . , Bn be indeterminates. Then there
holds
                                                                                           
    det (Xi + An)(Xi + An−1 ) · · · (Xi + Aj+1 )(Xi + Bj )(Xi + Bj−1 ) · · · (Xi + B2 )
  1≤i,j≤n
                                                         Y                      Y
                                                   =             (Xi − Xj )             (Bi − Aj ). (2.8)
                                                       1≤i<j≤n                2≤i≤j≤n



  8
    Other common examples of introducing     more parameters
                                                              are: Given that the (i, j)-entry of
                                                                                                  your
                                    i+j
determinant is a binomial such as 2i−j   , try x+i+j   (that works; see (3.30)), or even x+y+i+j
                                                                                                   (that
                                   x+i+j
                                               2i−j 
                                               y+i+j
                                                                                          y+2i−j
does not work; but see (1.2)), or 2i−j + 2i−j (that works; see (3.32), and consult Lemma 19
and the remarks thereafter). However, sometimes parameters have to be introduced in an unexpected
way, see (3.49). (The parameter x was introduced into a determinant of Bombieri, Hunt and van der
Poorten, which is obtained by setting x = 0 in (3.49).)
8                                          C. KRATTENTHALER

   Once you have guessed such a formula, it is easily proved. In the proof in [85] the
determinant is reduced to a determinant of the form (2.2) by suitable column operations.
Another proof, discovered by Amdeberhan (private communication), is by condensation,
see Section 2.3. For a derivation from the above mentioned evaluation of a determinant
of minors of a given matrix, due to Turnbull, see Appendix B.
   Now let us see what the value of this formula is, by checking if it is of any use in the
case of the second determinant in the Introduction, (1.2). The recipe that you should
follow is:
    1. Take as many factors out of rows and/or columns of your determinant, so that all
       denominators are cleared.
    2. Compare your result with the determinant in (2.8). If it matches, you have found
       the evaluation of your determinant.
Okay, let us do so:
                      Y n
                  a+b                  (a + b)!
        det              =
      1≤i,j≤n    a−i+j     i=1
                               (a − i + n)! (b + i − 1)!
                            × det          (a − i + n)(a − i + n − 1) · · · (a − i + j + 1)
                                 1≤i,j≤n
                                                                                              
                                            · (b + i − j + 1)(b + i − j + 2) · · · (b + i − 1)
                          n      Y
                                 n
                                             (a + b)!
                   = (−1)( 2 )
                                 i=1
                                     (a − i + n)! (b + i − 1)!
                            × det          (i − a − n)(i − a − n + 1) · · · (i − a − j − 1)
                                 1≤i,j≤n
                                                                                              
                                            · (i + b − j + 1)(i + b − j + 2) · · · (i + b − 1) .

Now compare with the determinant in (2.8). Indeed, the determinant in the last line is
just the special case Xi = i, Aj = −a − j, Bj = b − j + 1. Thus, by (2.8), we have a
result immediately. A particularly attractive way to write it is displayed in (2.17).
  Applications of Lemma 3 are abundant, see Theorem 26 and the remarks accompa-
nying it.
   In [87, Lemma 7], a determinant evaluation is given which is closely related to
Lemma 3. It was used there to establish enumeration results about shifted plane par-
titions of trapezoidal shape. It is the first result in the lemma below. It is “tailored”
for the use in the context of q-enumeration. For plain enumeration, one would use the
second result. This is a limit case of the first (replace Xi by q Xi , Aj by −q −Aj and C
by q C in (2.9), divide both sides by (1 − q)n(n−1) , and then let q → 1).
Lemma 4. Let X1 , X2 , . . . , Xn , A2, . . . , An be indeterminates. Then there hold

      det     (C/Xi + An)(C/Xi + An−1 ) · · · (C/Xi + Aj+1 )
    1≤i,j≤n

                                                Yn                Y
    · (Xi + An )(Xi + An−1 ) · · · (Xi + Aj+1 ) =   Ai−1
                                                     i                     (Xi − Xj )(1 − C/Xi Xj ),
                                                      i=2        1≤i<j≤n
                                                                                                   (2.9)
                              ADVANCED DETERMINANT CALCULUS                                              9

and

      det    (Xi − An − C)(Xi − An−1 − C) · · · (Xi − Aj+1 − C)
  1≤i,j≤n
                                                   Y
      · (Xi + An )(Xi + An−1 ) · · · (Xi + Aj+1 ) =     (Xj − Xi )(C − Xi − Xj ). (2.10)
                                                          1≤i<j≤n




   (Both evaluations are in fact special cases in disguise of (2.2). Indeed, the (i, j)-entry
of the determinant in (2.9) is a polynomial in Xi + C/Xi , while the (i, j)-entry of the
determinant in (2.10) is a polynomial in Xi − C/2, both of degree n − j.)
   The standard application of Lemma 4 is given in Theorem 27.
  In [88, Lemma 34], a common generalization of Lemmas 3 and 4 was given. In order
to have a convenient statement ofPthis determinant evaluation, we define the degree
of a Laurent polynomial p(X) = N   i=M aix , M, N ∈ Z, ai ∈ R and aN 6= 0, to be
                                          i

deg p := N.
Lemma 5. Let X1 , X2 , . . . , Xn , A2, A3, . . . , An, C be indeterminates. If p0 , p1 , . . . , pn−1
are Laurent polynomials with deg pj ≤ j and pj (C/X) = pj (X) for j = 0, 1, . . . , n − 1,
then

      det   (Xi + An )(Xi + An−1 ) · · · (Xi + Aj+1 )
  1≤i,j≤n
                                                                             
                · (C/Xi + An)(C/Xi + An−1 ) · · · (C/Xi + Aj+1 ) · pj−1 (Xi )
                           Y                              Y
                                                          n         Yn
                       =       (Xi − Xj )(1 − C/Xi Xj )      Aii−1
                                                                        pi−1 (−Ai) . (2.11)
                            1≤i<j≤n                                   i=1        i=1




  Section 3 contains several determinant evaluations which are implied by the above
determinant lemma, see Theorems 28, 30 and 31.
  Lemma 3 does indeed come out of the above Lemma 5 by setting C = 0 and
                                                Y
                                                j
                                     pj (X) =         (Bk+1 + X).
                                                k=1

Obviously, Lemma 4 is the special case pj ≡ 1, j = 0, 1, . . . , n − 1. It is in fact worth
stating the C = 0 case of Lemma 5 separately.
Lemma 6. Let X1 , X2 , . . . , Xn , A2, A3, . . . , An be indeterminates. If p0 , p1 , . . . , pn−1 are
polynomials with deg pj ≤ j for j = 0, 1, . . . , n − 1, then
                                                                  
    det (Xi + An )(Xi + An−1 ) · · · (Xi + Aj+1 ) · pj−1 (Xi )
  1≤i,j≤n
                                                            Y                    Y
                                                                                 n
                                                      =             (Xi − Xj )         pi−1 (−Ai) . (2.12)
                                                          1≤i<j≤n                i=1
10                                          C. KRATTENTHALER

  Again, Lemma 5 is tailored for applications in q-enumeration. So, also here, it may
be convenient to state the according limit case that is suitable for plain enumeration
(and perhaps other applications).

Lemma 7. Let X1 , X2 , . . . , Xn , A2, A3, . . . , An, C be indeterminates. If p0 , p1 , . . . ,
pn−1 are polynomials with deg pj ≤ 2j and pj (C − X) = pj (X) for j = 0, 1, . . . , n − 1,
then


      det      (Xi + An )(Xi + An−1 ) · · · (Xi + Aj+1 )
     1≤i,j≤n
                                                                                 
                · (Xi − An − C)(Xi − An−1 − C) · · · (Xi − Aj+1 − C) · pj−1 (Xi )
                                     Y                              Yn
                                 =        (Xj − Xi )(C − Xi − Xj )      pi−1 (−Ai) . (2.13)
                                           1≤i<j≤n                                 i=1




   In concluding, I want to mention that, now since more than ten years, I have a
different common generalization of Lemmas 3 and 4 (with some overlap with Lemma 5)
in my drawer, without ever having found use for it. Let us nevertheless state it here;
maybe it is exactly the key to the solution of a problem of yours.

Lemma 8. Let X1 , . . . , Xn , A2, . . . , An, B2 , . . . Bn , a2, . . . , an , b2 , . . . bn, and C be in-
determinates. Then there holds

                                                                                     
              
              (Xi + An ) · · · (Xi + Aj+1 )(C/Xi + An ) · · · (C/Xi + Aj+1 )
             
                                                                                 j < m
              (Xi + Bj ) · · · (Xi + B2)(C/Xi + Bj ) · · · (C/Xi + B2)                
       det                                                                            
     1≤i,j≤n (Xi + an ) · · · (Xi + aj+1 )(C/Xi + an ) · · · (C/Xi + aj+1 )          
              
              
              
               (Xi + bj ) · · · (Xi + b2 )(C/Xi + bj ) · · · (C/Xi + b2)          j≥m
             Y                                  Y
        =       (Xi − Xj )(1 − C/Xi Xj )                 (Bi − Aj )(1 − C/Bi Aj )
            1≤i<j≤n                               2≤i≤j≤m−1
                      Y
                      m Y
                        n                                     Y
                 ×              (bi − Aj )(1 − C/bi Aj )               (bi − aj )(1 − C/bi aj )
                      i=2 j=m                              m+1≤i≤j≤n

                                Y
                                m                Y
                                                 n               Y
                                                                 m−1                Y
                                                                                    n
                           ×      (Ai · · · An )   (ai · · · an)     (B2 · · · Bi )   (b2 · · · bi). (2.14)
                                i=2             i=m+1             i=2                i=m




  The limit case which goes with this determinant lemma is the following. (There is
some overlap with Lemma 7.)
                                ADVANCED DETERMINANT CALCULUS                                         11

Lemma 9. Let X1 , . . . , Xn, A2, . . . , An, B2 , . . . , Bn, a2, . . . , an , b2, . . . , bn , and C be
indeterminates. Then there holds
                                                                                                   
           
            (Xi + An ) · · · (Xi + Aj+1 )(Xi − An − C) · · · (Xi − Aj+1 − C)
          
                                                                                               j < m
           (Xi + Bj ) · · · (Xi + B2)(Xi − Bj − C) · · · (Xi − B2 − C)                              
    det                                                                                             
  1≤i,j≤n (Xi + an ) · · · (Xi + aj+1 )(Xi − an − C) · · · (Xi − aj+1 − C)                         
           
           
           
             (Xi + bj ) · · · (Xi + b2 )(Xi − bj − C) · · · (Xi − b2 − C)                       j≥m
      Y                                     Y
 =         (Xi − Xj )(C − Xi − Xj )                (Bi − Aj )(Bi + Aj + C)
    1≤i<j≤n                                2≤i≤j≤m−1
                      Y
                      m Y
                        n                                    Y
                  ×          (bi − Aj )(bi + Aj + C)                 (bi − aj )(bi + aj + C). (2.15)
                      i=2 j=m                            m+1≤i≤j≤n



 If you are looking for more determinant evaluations of such a general type, then you
may want to look at [156, Lemmas A.1 and A.11] and [158, Lemma A.1].
2.3. The condensation method. This is Doron Zeilberger’s favourite method. It
allows (sometimes) to establish an elegant, effortless inductive proof of a determinant
evaluation, in which the only task is to guess the result correctly.
   The method is often attributed to Charles Ludwig Dodgson [38], better known as
Lewis Carroll. However, the identity on which it is based seems to be actually due to
P. Desnanot (see [119, vol. I, pp. 140–142]; with the first rigorous proof being probably
due to Jacobi, see [18, Ch. 4] and [79, Sec. 3]). This identity is the following.
Proposition 10. Let A be an n × n matrix. Denote the submatrix of A in which rows
i1, i2, . . . , ik and columns j1 , j2 , . . . , jk are omitted by Aji11,i,j22,...,i
                                                                               ,...,jk
                                                                                     k
                                                                                       . Then there holds
                      det A · det A1,n
                                   1,n = det A1 · det An − det A1 · det An .
                                              1        n        n        1
                                                                                                 (2.16)


   So, what is the point of this identity? Suppose you are given a family (det Mn )n≥0
of determinants, Mn being an n × n matrix, n = 0, 1, . . . . Maybe Mn = Mn (a, b)
is the matrix underlying the determinant in (1.2). Suppose further that you have
already worked out a conjecture for the evaluation of det Mn (a, b) (we did in fact already
evaluate this determinant in Section 2.2, but let us ignore that for the moment),
                                          Y    n Y a Y b
                                    a+b         ?             i+j+k−1
        det Mn (a, b) := det                   =                           .         (2.17)
                        1≤i,j≤n    a−i+j          i=1 j=1 k=1
                                                              i+j+k−2
Then you have already proved your conjecture, once you observe that
                                   n
                          Mn (a, b) n = Mn−1 (a, b),
                                    1
                          Mn(a, b) 1 = Mn−1 (a, b),
                                   1
                          Mn (a, b) n = Mn−1 (a + 1, b − 1),
                                   n
                          Mn (a, b) 1 = Mn−1 (a − 1, b + 1),
                                  1,n
                         Mn (a, b) 1,n = Mn−2 (a, b).                                            (2.18)
12                                 C. KRATTENTHALER

For, because of (2.18), Desnanot’s identity (2.16), with A = Mn (a, b), gives a recur-
rence which expresses det Mn (a, b) in terms of quantities of the form det Mn−1 ( . ) and
det Mn−2 ( . ). So, it just remains to check the conjecture (2.17) for n = 0 and n = 1, and
that the right-hand side of (2.17) satisfies the same recurrence, because that completes
a perfect induction with respect to n. (What we have described here is basically the
contents of [197]. For a bijective proof of Proposition 10 see [200].)
  Amdeberhan (private communication) discovered that in fact the determinant evalu-
ation (2.8) itself (which we used to evaluate the determinant (1.2) for the first time) can
be proved by condensation. The reader will easily figure out the details. Furthermore,
the condensation method also proves the determinant evaluations (3.35) and (3.36).
(Also this observation is due to Amdeberhan [2].) At another place, condensation was
used by Eisenkölbl [41] in order to establish a conjecture by Propp [138, Problem 3]
about the enumeration of rhombus tilings of a hexagon where some triangles along the
border of the hexagon are missing.
  The reader should observe that crucial for a successful application of the method is
the existence of (at least) two parameters (in our example these are a and b), which
help to still stay within the same family of matrices when we take minors of our original
matrix (compare (2.18)). (See the last paragraph of Section 2.1 for a few hints of how
to introduce more parameters into your determinant, in the case that you are short of
parameters.) Obviously, aside from the fact that we need at least two parameters, we
can hope for a success of condensation only if our determinant is of a special kind.
2.4. The “identification of factors” method. This is the method that I find
most convenient to work with, once you encounter a determinant that is not amenable
to an evaluation using the previous recipes. It is best to explain this method along with
an example. So, let us consider the determinant in (1.3). Here it is, together with its,
at this point, unproven evaluation,
                      
               µ+i+j
     det
  0≤i,j≤n−1      2i − j
                                                                            
                             n−1 Y (µ + i + 1)b(i+1)/2c     −µ − 3n + i + 32 bi/2c
                                  n−1
        = (−1)χ(n≡3 mod 4) 2( 2 )                                                  , (2.19)
                                  i=1
                                                          (i)i
where χ(A) = 1 if A is true and χ(A) = 0 otherwise, and where the shifted factorial
(a)k is defined by (a)k := a(a + 1) · · · (a + k − 1), k ≥ 1, and (a)0 := 1.
   As was already said in the Introduction, this determinant belongs to a different
category of difficulty of evaluation, so that nothing what was presented so far will
immediately work on that determinant.
   Nevertheless, I claim that the procedure which we chose to evaluate the Vandermonde
determinant works also with the above determinant. To wit:
   1. Identification of factors
   2. Determination of degree bound
   3. Computation of the multiplicative constant.
   You will say: ‘A moment please! The reason that this procedure worked so smoothly
for the Vandermonde determinant is that there are so many (to be precise: n) variables
at our disposal. On the contrary, the determinant in (2.19) has exactly one (!) variable.’
                          ADVANCED DETERMINANT CALCULUS                                   13

Yet — and this is the point that I want to make here — it works, in spite of having
just one variable at our disposal!.
   What we want to prove in the first step is that the right-hand side of (2.19) divides the
determinant. For example, we would like to prove that (µ + n) divides the determinant
(actually, (µ + n)b(n+1)/3c, we will come to that in a moment). Equivalently, if we set
µ = −n in the determinant, then it should vanish. How could we prove that? Well, if
it vanishes then there must be a linear combination of the columns, or of the rows, that
vanishes. So, let us find such a linear combination of columns or rows. Equivalently, for
µ = −n we find a vector in the kernel of the matrix in (2.19), respectively its transpose.
More generally (and this addresses that we actually want to prove that (µ + n)b(n+1)/3c
divides the determinant):

     For proving that (µ + n)E divides the determinant, we find E linear inde-
     pendent vectors in the kernel.

(For a formal justification that this does indeed suffice, see Section 2 of [91], and in
particular the Lemma in that section.)
   Okay, how is this done in practice? You go to your computer, crank out these vectors
in the kernel, for n = 1, 2, 3, . . . , and try to make a guess what they are in general.
To see how this works, let us do it in our example. What the computer gives is the
following (we are using Mathematica here):
In[1]:= V[2]
Out[1]= {0, c[1]}
In[2]:= V[3]
Out[2]= {0, c[2], c[2]}
In[3]:= V[4]
Out[3]= {0, c[1], 2 c[1], c[1]}
In[4]:= V[5]
Out[4]= {0, c[1], 3 c[1], c[3], c[1]}
In[5]:= V[6]
Out[5]= {0, c[1], 4 c[1], 2 c[1] + c[4], c[4], c[1]}
In[6]:= V[7]
Out[6]= {0, c[1], 5 c[1], c[3], -10 c[1] + 2 c[3], -5 c[1] + c[3], c[1]}
In[7]:= V[8]
Out[7]= {0, c[1], 6 c[1], c[3], -25 c[1] + 3 c[3], c[5], -9 c[1] + c[3], c[1]}
In[8]:= V[9]
Out[8]= {0, c[1], 7 c[1], c[3], -49 c[1] + 4 c[3],

i      -28 c[1] + 2 c[3] + c[6], c[6], -14 c[1] + c[3], c[1]}
In[9]:= V[10]
14                                  C. KRATTENTHALER

Out[9]= {0, c[1], 8 c[1], c[3], -84 c[1] + 5 c[3], c[5],

i      196 c[1] - 10 c[3] + 2 c[5], 98 c[1] - 5 c[3] + c[5], -20 c[1] + c[3],

i      c[1]}
In[10]:= V[11]
Out[10]= {0, c[1], 9 c[1], c[3], -132 c[1] + 6 c[3], c[5],

i      648 c[1] - 25 c[3] + 3 c[5], c[7], 234 c[1] - 9 c[3] + c[5],

i      -27 c[1] + c[3], c[1]}

Here, V [n] is the generic vector (depending on the indeterminates c[i]) in the kernel of
the matrix in (2.19) with µ = −n. For convenience, let us denote this matrix by Mn .
  You do not have to stare at these data for long to see that, in particular,
     the vector (0, 1) is in the kernel of M2 ,
     the vector (0, 1, 1) is in the kernel of M3,
     the vector (0, 1, 2, 1) is in the kernel of M4 ,
     the vector (0, 1, 3, 3, 1) is in the kernel of M5 (set c[1] = 1 and c[3] = 3),
     the vector (0, 1, 4, 6, 4, 1) is in the kernel of M6 (set c[1] = 1 and c[4] = 4), etc.
Apparently,
                                         n−2 n−2                 
                                0, n−2
                                     0
                                         ,  1
                                               ,  2
                                                      , . . . , n−2
                                                                n−2
                                                                                        (2.20)
is in the kernel of Mn . That was easy! But we need more linear combinations. Take
a closer look, and you will see that the pattern persists (set c[1] = 0 everywhere, etc.).
It will take you no time to work out a full-fledged conjecture for b(n + 1)/3c linear
independent vectors in the kernel of Mn.
   Of course, there remains something to be proved. We need to actually prove that our
guessed vectors are indeed in the kernel. E.g., in order to prove that the vector (2.20)
is in the kernel, we need to verify that
                             n−1 
                             X                      
                                   n − 2 −n + i + j
                                                         =0
                             j=1
                                   j−1        2i − j
for i = 0, 1, . . . , n − 1. However, verifying binomial identities is pure routine today, by
means of Zeilberger’s algorithm [194, 196] (see Footnote 5 in the Introduction).
   Next you perform the same game with the other factors of the right-hand side product
of (2.19). This is not much more difficult. (See Section 3 of [91] for details. There,
slightly different vectors are used.)
   Thus, we would have finished the first step, “identification of factors,” of our plan: We
have proved that the right-hand side of (2.19) divides the determinant as a polynomial
in µ.
   The second step, “determination of degree bound,” consists of determining the (max-
imal) degree in µ of determinant and conjectured result. As is easily seen, this is n2
in each case.
   The arguments thus far show that the determinant in (2.19) must equal the right-
hand side times, possibly, some constant. To determine this constant in the third
                                                                                        n
step, “computation of the multiplicative constant,” one compares coefficients of x( 2 ) on
                           ADVANCED DETERMINANT CALCULUS                                  15

both sides of (2.19). This is an enjoyable exercise. (Consult [91] if you do not want
to do it yourself.) Further successful applications of this procedure can be found in
[27, 30, 42, 89, 90, 92, 94, 97, 132].
  Having done that, let me point out that most of the individual steps in this sort of
calculation can be done (almost) automatically. In detail, what did we do? We had to
  1. Guess the result. (Indeed, without the result we could not have got started.)
  2. Guess the vectors in the kernel.
  3. Establish a binomial (hypergeometric) identity.
  4. Determine a degree bound.
  5. Compute a particular value or coefficient in order to determine the multiplicative
     constant.
   As I explain in Appendix A, guessing can be largely automatized. It was already
mentioned in the Introduction that proving binomial (hypergeometric) identities can
be done by the computer, thanks to the “WZ-machinery” [130, 190, 194, 195, 196] (see
Footnote 5). Computing the degree bound is (in most cases) so easy that no computer is
needed. (You may use it if you want.) It is only the determination of the multiplicative
constant (item 5 above) by means of a special evaluation of the determinant or the
                                                                                       n
evaluation of a special coefficient (in our example we determined the coefficient of µ( 2 ) )
for which I am not able to offer a recipe so that things could be carried out on a
computer.
   The reader should notice that crucial for a successful application of the method
is the existence of (at least) one parameter (in our example this is µ) to be able to
apply the polynomiality arguments that are the “engine” of the method. If there is no
parameter (such as in the determinant in Conjecture 49, or in the determinant (3.46)
which would solve the problem of q-enumerating totally symmetric plane partitions),
then we even cannot get started. (See the last paragraph of Section 2.1 for a few hints
of how to introduce a parameter into your determinant, in the case that you are short
of a parameter.)
   On the other hand, a significant advantage of the “identification of factors method”
is that not only is it capable of proving evaluations of the form
                               det(M) = CLOSED FORM,
(where CLOSED FORM means a product/quotient of “nice” factors, such as (2.19) or
(2.17)), but also of proving evaluations of the form
               det(M) = (CLOSED FORM) × (UGLY POLYNOMIAL),                            (2.21)
where, of course, M is a matrix containing (at least) one parameter, µ say. Exam-
ples of such determinant evaluations are (3.38), (3.39), (3.45) or (3.48). (The UGLY
POLYNOMIAL in (3.38), (3.39) and (3.48) is the respective sum on the right-hand
side, which in neither case can be simplified).
   How would one approach the proof of such an evaluation? For one part, we already
know. “Identification of factors” enables us to show that (CLOSED FORM) divides
det(M) as a polynomial in µ. Then, comparison of degrees in µ on both sides of
(2.21) yields that (UGLY POLYNOMIAL) is a (at this point unknown) polynomial in
16                                 C. KRATTENTHALER

µ of some maximal degree, m say. How can we determine this polynomial? Nothing
“simpler” than that: We find m + 1 values e such that we are able to evaluate det(M)
at µ = e. If we then set µ = e in (2.21) and solve for (UGLY POLYNOMIAL), then we
obtain evaluations of (UGLY POLYNOMIAL) at m + 1 different values of µ. Clearly,
this suffices to find (UGLY POLYNOMIAL), e.g., by Lagrange interpolation.
   I put “simpler” in quotes, because it is here where the crux is: We may not be able
to find enough such special evaluations of det(M). In fact, you may object: ‘Why all
these complications? If we should be able to find m + 1 special values of µ for which
we are able to evaluate det(M), then what prevents us from evaluating det(M) as a
whole, for generic µ?’ When I am talking of evaluating det(M) for µ = e, then what I
have in mind is that the evaluation of det(M) at µ = e is “nice” (i.e., gives a “closed
form,” with no “ugly” expression involved, such as in (2.21)), which is easier to identify
(that is, to guess; see Appendix A) and in most cases easier to prove. By experience,
such evaluations are rare. Therefore, the above described procedure will only work if
the degree of (UGLY POLYNOMIAL) is not too large. (If you are just a bit short of
evaluations, then finding other informations about (UGLY POLYNOMIAL), like the
leading coefficient, may help to overcome the problem.)
   To demonstrate this procedure by going through a concrete example is beyond the
scope of this article. We refer the reader to [28, 43, 50, 51, 89, 90] for places where this
procedure was successfully used to solve difficult enumeration problems on rhombus
tilings, respectively prove a conjectured constant term identity.


2.5. A differential/difference equation method. In this section I outline a
method for the evaluation of determinants, often used by Vitaly Tarasov and Alexander
Varchenko, which, as the preceding method, also requires (at least) one parameter.
  Suppose we are given a matrix M = M(z), depending on the parameter z, of which
we want to compute the determinant. Furthermore, suppose we know that M satisfies
a differential equation of the form

                                  d
                                     M(z) = T (z)M(z),                               (2.22)
                                  dz

where T (z) is some other known matrix. Then, by elementary linear algebra, we obtain
a differential equation for the determinant,

                            d
                              det M(z) = Tr(T (z)) · det M(z),                       (2.23)
                           dz

which is usually easy to solve. (In fact, the differential operator in (2.22) and (2.23)
could be replaced by any operator. In particular, we could replace d/dz by the difference
operator with respect to z, in which case (2.23) is usually easy to solve as well.)
  Any method is best illustrated by an example. Let us try this method on the deter-
minant (1.2). Right, we did already evaluate this determinant twice (see Sections 2.2
and 2.3), but let us pretend that we have forgotten all this.
  Of course, application of the method to (1.2) itself does not seem to be extremely
promising, because that would involve the differentiation of binomial coefficients. So,
                              ADVANCED DETERMINANT CALCULUS                                           17

let us first take some factors out of the determinant (as we also did in Section 2.2),
                         Y    n
                    a+b                      (a + b)!
         det                   =
       1≤i,j≤n    a−i+j          i=1
                                     (a − i + n)! (b + i − 1)!
                             × det       (a − i + n)(a − i + n − 1) · · · (a − i + j + 1)
                               1≤i,j≤n
                                                                                            
                                          · (b + i − j + 1)(b + i − j + 2) · · · (b + i − 1) .
Let us denote the matrix underlying the determinant on the right-hand side of this
equation by Mn (a). In order to apply the above method, we have need for a matrix
Tn(a) such that
                                        d
                                           Mn (a) = Tn(a)Mn(a).                                    (2.24)
                                       da
Similar to the procedure of Section 2.6, the best idea is to go to the computer, crank
out Tn (a) for n = 1, 2, 3, 4, . . . , and, out of the data, make a guess for Tn(a). Indeed, it
suffices that I display T5(a),
   1
     1+a+b
                 1
           + 2+a+b        1
                    + 3+a+b    + 4+a+b 1                 4
                                                       4+a+b
                                                                        − 3+a+b
                                                                              6           6
                                                                                    + 4+a+b
                    0                          1        1
                                                     + 2+a+b      1
                                                             + 3+a+b               3
                                             1+a+b                             3+a+b
                    0                                   0                  1           1
                                                                                  + 2+a+b
                                                                        1+a+b
                    0                                   0                        0
                     0                                   0                        0
                                                                                                 1 
                                  4
                              2+a+b
                                        − 3+a+b + 4+a+b − 1+a+b + 2+a+b − 3+a+b
                                              8        4        1         3           3
                                                                                             + 4+a+b
                                    − 2+a+b
                                          3        3
                                               + 3+a+b              1
                                                                         − 2+a+b2
                                                                                     + 3+a+b1        
                                                                  1+a+b                              
                                              2
                                                                      −   1
                                                                                 +    1              
                                            2+a+b                       1+a+b       2+a+b            
                                              1                                 1                    
                                            1+a+b                           1+a+b
                                              0                                0
(in this display, the first line contains columns 1, 2, 3 of T5(a), while the second line
contains the remaining columns), so that you are forced to conclude that, apparently,
it must be true that
                               n−i−1                            !
                         n−i X j −i−1                    (−1)k
            Tn (a) =                                                         .
                         j − i k=0          k     a+b+n−i−k
                                                                                 1≤i,j,≤n

That (2.24) holds with this choice of Tn(a) is then easy to verify. Consequently, by
means of (2.23), we have
                                     Xn−1         
                      d                     n−`
                        det Mn (a) =                 det Mn (a),
                     da                    a+b+`
                                       `=1

so that
                                                     Y
                                                     n−1
                              Mn(a) = constant ·           (a + b + `)n−` .                      (2.25)
                                                     `=1
                                         Qn
The constant is found to be (−1)( ) n−1   2
                                           `=0 `!, e.g., by dividing both sides of (2.25) by
  n
a(2 ) , letting a tend to infinity, and applying (2.2) to the remaining determinant.
18                                 C. KRATTENTHALER

   More sophisticated applications of this method (actually, of a version for systems of
difference operators) can be found in [175, Proof of Theorem 5.14] and [176, Proofs of
Theorems 5.9, 5.10, 5.11], in the context of the Knizhnik–Zamolodchikov equations.


2.6. LU-factorization. This is George Andrews’ favourite method. Starting point
is the well-known fact (see [53, p. 33ff]) that, given a square matrix M, there exists,
under suitable, not very stringent conditions (in particular, these are satisfied if all
top-left principal minors of M are nonzero), a unique lower triangular matrix L and a
unique upper diagonal matrix U, the latter with all entries along the diagonal equal to
1, such that

                                       M = L · U.                                   (2.26)

This unique factorization of the matrix M is known as the L(ower triangular)U(pper
triangular)-factorization of M, or as well as the Gauß decomposition of M.
   Equivalently, for a square matrix M (satisfying these conditions) there exists a unique
lower triangular matrix L and a unique upper triangular matrix U, the latter with all
entries along the diagonal equal to 1, such that

                                       M · U = L.                                   (2.27)

Clearly, once you know L and U, the determinant of M is easily computed, as it equals
the product of the diagonal entries of L.
  Now, let us suppose that we are given a family (Mn )n≥0 of matrices, where Mn is
an n × n matrix, n = 0, 1, . . . , of which we want to compute the determinant. Maybe
Mn is the determinant in (1.3). By the above, we know that (normally) there exist
uniquely determined matrices Ln and Un, n = 0, 1, . . . , Ln being lower triangular, Un
being upper triangular with all diagonal entries equal to 1, such that

                                      Mn · Un = Ln .                                (2.28)

However, we do not know what the matrices Ln and Un are. What George Andrews
does is that he goes to his computer, cranks out Ln and Un for n = 1, 2, 3, 4, . . . (this
just amounts to solving a system of linear equations), and, out of the data, tries to
guess what the coefficients of the matrices Ln and Un are. Once he has worked out a
guess, he somehow proves that his guessed matrices Ln and Un do indeed satisfy (2.28).
   This program is carried out in [10] for the family of determinants in (1.3). As it turns
out, guessing is really easy, while the underlying hypergeometric identities which are
needed for the proof of (2.28) are (from a hypergeometric viewpoint) quite interesting.
   For a demonstration of the method of LU-factorization, we will content ourselves
here with trying the method on the Vandermonde determinant. That is, let Mn be the
determinant in (2.1). We go to the computer and crank out the matrices Ln and Un
for small values of n. For the purpose of guessing, it suffices that I just display the
matrices L5 and U5 . They are
                              ADVANCED DETERMINANT CALCULUS                                                   19


       
        1       0                 0
       1   (X2 − X1 )            0
       
  L5 = 
       1   (X3 − X1 )   (X3 − X1 )(X3 − X2 )
       1   (X4 − X1 )   (X4 − X1 )(X4 − X2 )
        1   (X5 − X1 )   (X5 − X1 )(X5 − X2 )
                                                                                                          
                                          0                                         0
                                          0                                         0                     
                                                                                                          
                                          0                                         0                     
                                                                                                          
                            (X4 − X1 )(X4 − X2 )(X4 − X3 )                          0                     
                            (X5 − X1 )(X5 − X2 )(X5 − X3 )       (X5 − X1 )(X5 − X2 )(X5 − X3 )(X5 − X4 )

(in this display, the first line contains columns 1, 2, 3 of L5 , while the second line contains
the remaining columns), and
                                                                                                   
                    1    −e1 (X1)    e2 (X1 , X2 )   −e3 (X1 , X2 , X3 )    e4 (X1 , X2 , X3 , X4 )
                  0        1       −e1 (X1 , X2 )    e2 (X1 , X2 , X3 )   −e3 (X1 , X2 , X3 , X4 )
                                                                                                   
             U5 = 
                  0        0            1           −e1 (X1 , X2 , X3 )    e2 (X1 , X2 , X3 , X4 ),
                  0        0            0                   1             −e1 (X1 , X2 , X3 , X4 )
                    0       0            0                   0                       1
                                  P
where em(X1 , X2 , . . . , Xs ) =    1≤i1 <···<im ≤s Xi1 · · · Xim denotes the m-th elementary
symmetric function.
  Having seen that, it will not take you for long to guess that, apparently, Ln is given
by
                                      Y  j−1              
                                 Ln =         (Xi − Xk )            ,
                                             k=1                   1≤i,j≤n

and that Un is given by
                                                                 
                           Un = (−1)j−i ej−i (X1 , . . . , Xj−1 ) 1≤i,j≤n ,
where, of course, em (X1 , . . . ) := 0 if m < 0. That (2.28) holds with these choices of Ln
and Un is easy to verify. Thus, the Vandermonde determinant equals the product of
diagonal entries of Ln , which is exactly the product on the right-hand side of (2.1).
   Applications of LU-factorization are abundant in the work of George Andrews [4,
5, 6, 7, 8, 10]. All of them concern solutions to difficult enumeration problems on
various types of plane partitions. To mention another example, Aomoto and Kato [11,
Theorem 3] computed the LU-factorization of a matrix which arose in the theory of
q-difference equations, thus proving a conjecture by Mimachi [118].
   Needless to say that this allows for variations. You may try to guess (2.26) directly
(and not its variation (2.27)), or you may try to guess the U(pper triangular)L(ower
triangular) factorization, or its variation in the style of (2.27). I am saying this because
it may be easy to guess the form of one of these variations, while it can be very difficult
to guess the form of another.
  It should be observed that the way LU-factorization is used here in order to evaluate
determinants is very much in the same spirit as “identification of factors” as described in
the previous section. In both cases, the essential steps are to first guess something, and
then prove the guess. Therefore, the remarks from the previous section about guessing
20                                  C. KRATTENTHALER

and proving binomial (hypergeometric) identities apply here as well. In particular, for
guessing you are once more referred to Appendix A.
   It is important to note that, as opposed to “condensation” or “identification of fac-
tors,” LU-factorization does not require any parameter. So, in principle, it is applicable
to any determinant (which satisfies the aforementioned conditions). If there are limita-
tions, then, from my experience, it is that the coefficients which have to be guessed in
LU-factorization tend to be more complicated than in “identification of factors”. That
is, guessing (2.28) (or one of its variations) may sometimes be not so easy.
2.7. Hankel determinants. A Hankel determinant is a determinant of a matrix
which has constant entries along antidiagonals, i.e., it is a determinant of the form
                                          det (ci+j ).
                                        1≤i,j,≤n

If you encounter a Hankel determinant, which you think evaluates nicely, then expect
the evaluation of your Hankel determinant to be found within the domain of continued
fractions and orthogonal polynomials. In this section I explain what this connection is.
   To make things concrete, let us suppose that we want to evaluate
                                        det      (Bi+j+2 ),                             (2.29)
                                     0≤i,j≤n−1

where Bk denotes the k-th P  Bernoulli number. (The Bernoulli numbers are defined via
their generating function, ∞   k=0 Bk z /k! = z/(e − 1).) You have to try hard if you
                                       k           z

want to find an evaluation of (2.29) explicitly in the literature. Indeed, you can find
it, hidden in Appendix A.5 of [108]. However, even if you are not able to discover this
reference (which I would not have as well, unless the author of [108] would not have
drawn my attention to it), there is a rather straight-forward way to find an evaluation
of (2.29), which I outline below. It is based on the fact, and this is the main point of
this section, that evaluations of Hankel determinants like (2.29) are, at least implicitly,
in the literature on the theory of orthogonal polynomials and continued fractions, which
is very accessible today.
   So, let us review the relevant facts about orthogonal polynomials and continued
fractions (see [76, 81, 128, 174, 186, 188] for more information on these topics).
   We begin by citing the result, due to Heilermann, which makes the connection be-
tween Hankel determinants and continued fractions.
Theorem 11. (Cf. [188, Theorem 51.1] or [186, Corollaire 6,     P(19),    on p. IV-17]). Let
                                                                   ∞         k
(µk )k≥0 be a sequence of numbers with generating function         k=0 k x written in the
                                                                      µ
form
                   X∞
                                               µ0
                       µk xk =                                         .                 (2.30)
                                                    b1 x2
                   k=0         1 + a0 x −
                                                          b2 x2
                                          1 + a1 x −
                                                     1 + a2 x − · · ·
Then the Hankel determinant det0≤i,j≤n−1 (µi+j ) equals µn0 bn−1
                                                              1  bn−2
                                                                  2   · · · b2n−2 bn−1 .
  (We remark that a continued fraction of the type as in (2.30) is called a J-fraction.)
  Okay, that means we would have
                               P∞ evaluated    (2.29) once we are able to explicitly
                                            k
expand the generating function k=0 Bk+2 x in terms of a continued fraction of the
                           ADVANCED DETERMINANT CALCULUS                                     21

form of the right-hand side of (2.30). Using the tools explained in Appendix A, it is
easy to work out a conjecture,
                                 X∞
                                                       1/6
                                     Bk+2 xk =                 2
                                                                   ,                      (2.31)
                                                         b 1 x
                                 k=0             1−
                                                             b2 x2
                                                     1−
                                                          1− ···
where bi = −i(i + 1) (i + 2)/4(2i + 1)(2i + 3), i = 1, 2, . . . . If we would find this
                           2

expansion in the literature then we would be done. But if not (which is the case here),
how to prove such an expansion? The key is orthogonal polynomials.
   A sequence (pn (x))n≥0 of polynomials is called (formally) orthogonal if pn (x) has de-
gree n, n = 0, 1, . . . , and if there exists a linear functional L such that L(pn (x)pm (x)) =
δmncn for some sequence (cn )n≥0 of nonzero numbers, with δm,n denoting the Kronecker
delta (i.e., δm,n = 1 if m = n and δm,n = 0 otherwise).
   The first important theorem in the theory of orthogonal polynomials is Favard’s
Theorem, which gives an unexpected characterization for sequences of orthogonal poly-
nomials, in that it completely avoids the mention of the functional L.
Theorem 12. (Cf. [186, Théorème 9 on p. I-4] or [188, Theorem 50.1]). Let (pn (x))n≥0
be a sequence of monic polynomials, the polynomial pn (x) having degree n, n = 0, 1, . . . .
Then the sequence (pn (x)) is (formally) orthogonal if and only if there exist sequences
(an )n≥1 and (bn )n≥1 , with bn 6= 0 for all n ≥ 1, such that the three-term recurrence
                  pn+1 (x) = (an + x)pn(x) − bnpn−1 (x),          for n ≥ 1,             (2.32)
holds, with initial conditions p0 (x) = 1 and p1 (x) = x + a0 .
   What is the connection between orthogonal polynomials and continued fractions?
This question is answered by the next theorem, the link being the generating function
of the moments.
Theorem 13. (Cf. [188, Theorem 51.1] or [186, Proposition 1, (7), on p. V-5]). Let
(pn (x))n≥0 be a sequence of monic polynomials, the polynomial pn (x) having degree n,
which is orthogonal with respect to some functional L. Let
                           pn+1 (x) = (an + x)pn (x) − bnpn−1 (x)                        (2.33)
be the corresponding three-term   P∞ recurrence which is guaranteed by Favard’s theorem.
Then the generating function k=0 µk xk for the moments µk = L(xk ) satisfies (2.30)
with the ai ’s and bi ’s being the coefficients in the three-term recurrence (2.33).
   Thus, what we have to do is to find orthogonal polynomials (pn (x))n≥0 , the three-term
recurrence of which is explicitly known, and which are orthogonal with respect to some
linear functional L whose moments L(xk ) are exactly equal to Bk+2 . So, what would
be very helpful at this point is some sort of table of orthogonal polynomials. Indeed,
there is such a table for hypergeometric and basic hypergeometric orthogonal polynomi-
als, proposed by Richard Askey (therefore called the “Askey table”), and compiled by
Koekoek and Swarttouw [81].
   Indeed, in Section 1.4 of [81], we find the family of orthogonal polynomials that is
of relevance here, the continuous Hahn polynomials, first studied by Atakishiyev and
Suslov [13] and Askey [12]. These polynomials depend on four parameters, a, b, c, d. It
22                               C. KRATTENTHALER

is just the special choice a = b = c = d = 1 which is of interest to us. The theorem
below lists the relevant facts about these special polynomials.
Theorem 14. The continuous Hahn polynomials with parameters a = b = c = d = 1,
(pn (x))n≥0 , are the monic polynomials defined by
                                                                   √
                       n (n + 1)! (n + 2)! X (−n)k (n + 3)k (1 + x −1)k
                                            ∞
                   √             2
        pn (x) = ( −1)                                           2
                                                                        , (2.34)
                             (2n + 2)!     k=0
                                                     k! (k + 1)!
with the shifted factorial (a)k defined as previously (see (2.19)). These polynomials
satisfy the three-term recurrence
                                            n(n + 1)2 (n + 2)
                     pn+1 (x) = xpn (x) +                      pn−1 (x).       (2.35)
                                           4(2n + 1)(2n + 3)
They are orthogonal with respect to the functional L which is given by
                                         Z
                                      π ∞         x2
                           L(p(x)) =                     p(x) dx .             (2.36)
                                       2 −∞ sinh2 (πx)
Explicitly, the orthogonality relation is
                                           n! (n + 1)!4 (n + 2)!
                       L(pm (x)pn(x)) =                          δm,n .        (2.37)
                                           (2n + 2)! (2n + 3)!
In particular, L(1) = 1/6.
   Now, by combining Theorems 11, 13, and 14, and by using an integral representation
of Bernoulli numbers (see [122, p. 75]),
                                       Z ∞√−1 
                                  1                 π 2
                        Bν = √               z ν
                                                         dz
                              2π −1 −∞√−1        sin πz
(if ν = 0 or ν = 1 then the path of integration is indented so that it avoids the
singularity z = 0, passing it on the negative side) we obtain without difficulty the
desired determinant evaluation,
                                         n n−1
                                              Y  i(i + 1)2 (i + 2) n−i
                                   (n
                                      )  1
               det (Bi+j+2 ) = (−1) 2
            0≤i,j,≤n−1                   6    i=1
                                                   4(2i + 1)(2i + 3)
                                    n 1 Y i! (i + 1)! (i + 2)!
                                           n−1           4
                             = (−1)( 2 )                           .             (2.38)
                                         6 i=1 (2i + 2)! (2i + 3)!
The general determinant evaluation which results from using continuous Hahn polyno-
mials with generic nonnegative integers a, b, c, d is worked out in [51, Sec. 5].
  Let me mention that, given a Hankel determinant evaluation such as (2.38), one has
automatically proved a more general one, by means of the following simple fact (see for
example [121, p. 419]):
Lemma 15. Let x be an indeterminate. For any nonnegative integer n there holds
                                         i+j               !
                                         X    i+j
                det (Ai+j ) = det                   Ak xi+j−k .            (2.39)
             0≤i,j≤n−1        0≤i,j≤n−1        k
                                         k=0
                                ADVANCED DETERMINANT CALCULUS                                                 23

   The idea of using continued fractions and/or orthogonal polynomials for the evalua-
tion of Hankel determinants has been also exploited in [1, 35, 113, 114, 115, 116]. Some
of these results are exhibited in Theorem 52. See the remarks after Theorem 52 for
pointers to further Hankel determinant evaluations.
2.8. Miscellaneous. This section is a collection of various further results on deter-
minant evaluation of the general sort, which I personally like, regardless whether they
may be more or less useful.
   Let me begin with a result by Strehl and Wilf [173, Sec. II], a special case of which was
already in the seventies advertised by van der Poorten [131, Sec. 4] as ‘a determinant
evaluation that should be better known’. (For a generalization see [78].)
Lemma 16. Let f(x) be a formal power series. Then for any positive integer n there
holds
               i−1        !         n
                d               f 0 (x) ( 2 )                  Y
        det          f(x)aj
                             =                f(x)a1 +···+an         (aj − ai ). (2.40)
      1≤i,j≤n  dx               f(x)                         1≤i<j≤n



  By specializing, this result allows for the quick proof of various, sometimes surprising,
determinant evaluations, see Theorems 53 and 54.
   An extremely beautiful determinant evaluation is the evaluation of the determinant
of the circulant matrix.
Theorem 17. Let n by a fixed positive integer, and let a0 , a1, . . . , an−1 be indetermi-
nates. Then
                                                        
          a0          a1 a2 . . . an−1
       an−1 a0 a1 . . . an−2  n−1
                                                         Y
   det 
        a n−2      a n−1       a 0    . . .     a n−3
                                                         =
                                                              (a0 + ωi a1 + ω 2i a2 + · · · + ω(n−1)i an−1 ),
       . . . . . . . . . . . . . . . . . . . . . . . . . i=0
          a1          a2 a3 . . . a0
                                                                                                           (2.41)
where ω is a primitive n-th root of unity.
  Actually, the circulant determinant is just a very special case in a whole family of
determinants, called group determinants. This would bring us into the vast territory of
group representation theory, and is therefore beyond the scope of this article. It must
suffice to mention that the group determinants were in fact the cause of birth of group
representation theory (see [99] for a beautiful introduction into these matters).
  The next theorem does actually not give the evaluation of a determinant, but of a
Pfaffian. The Pfaffian Pf(A) of a skew-symmetric (2n) × (2n) matrix A is defined by
                                     X           Y
                            Pf(A) =     (−1)c(π)    Aij ,
                                                  π             (ij)∈π

where the sum is over all perfect matchings π of the complete graph on 2n vertices,
where c(π) is the crossing number of π, and where the product is over all edges (ij),
i < j, in the matching π (see e.g. [169, Sec. 2]). What links Pfaffians so closely to
24                                       C. KRATTENTHALER

determinants is (aside from similarity of definitions) the fact that the Pfaffian of a
skew-symmetric matrix is, up to sign, the square root of its determinant. That is,
det(A) = Pf(A)2 for any skew-symmetric (2n) × (2n) matrix A (cf. [169, Prop. 2.2]).9
Pfaffians play an important role, for example, in the enumeration of plane partitions,
due to the results by Laksov, Thorup and Lascoux [98, Appendix, Lemma (A.11)] and
Okada [123, Theorems 3 and 4] on sums of minors of a given matrix (a combinatorial
view as enumerating nonintersecting lattice paths with varying starting and/or ending
points has been given by Stembridge [169, Theorems 3.1, 3.2, and 4.1]), and their
generalization in form of the powerful minor summation formulas due to Ishikawa and
Wakayama [69, Theorems 2 and 3].
  Exactly in this context, the context of enumeration of plane partitions, Gordon [58,
implicitly in Sec. 4, 5] (see also [169, proof of Theorem 7.1]) proved two extremely useful
reductions of Pfaffians to determinants.
Lemma 18. Let (gi ) be a sequence with the property g−i = gi , and let N be a positive
integer. Then
                                     X          
                 Pf 1≤i<j≤2N                  gα = det (gi−j + gi+j−1 ),             (2.42)
                                                         1≤i,j≤N
                                     −(j−i)<α≤j−i

and
                      P                                  
                            −(j−i)<α≤j−i gα   j ≤ 2N + 1
     Pf 1≤i<j≤2N +2                                             = X · det (gi−j − gi+j ). (2.43)
                                 X            j = 2N + 2             1≤i,j≤N

(In these statements only one half of the entries of the Pfaffian is given, the other half
being uniquely determined by skew-symmetry).
   This result looks somehow technical, but its usefulness was sufficiently proved by
its applications in the enumeration of plane partitions and tableaux in [58] and [169,
Sec. 7].
     Another technical, but useful result is due to Goulden and Jackson [61, Theorem 2.1].
Lemma 19. Let Fm (t), Gm (t) and Hm (t) by formal power series, with Hm (0) = 0,
m = 0, 1, . . . , n − 1. Then for any positive integer n there holds
                                                                         
                          Fj (t)                                 Fj (t)
       det          CT           Gi (Hj (t))   = det        CT           Gi (0)   , (2.44)
    0≤i,j,≤n−1           Hj (t)i                0≤i,j≤n−1        Hj (t)i
where CT(f(t)) stands for the constant term of the Laurent series f(t).
    What is the value of this theorem? In some cases, out of a given determinant eval-
uation, it immediately implies a more general one, containing (at least) one more pa-
rameter. For example, consider the determinant evaluation (3.30). Choose Fj (t) =
tj (1 + t)µ+j , Hj (t) = t2/(1 + t), and Gi (t) such that Gi (t2/(1 + t)) = (1 + t)k + (1 + t)−k
for a fixed k (such a choice does indeed exist; see [61, proof of Cor. 2.2]) in Lemma 19.
This yields
                                                                              
                     µ+k+i+j             µ−k+i+j                             µ+i+j
         det                         +                     = det          2                .
      0≤i,j≤n−1         2i − j               2i − j            0≤i,j≤n−1      2i − j
     9
    Another point of view, beautifully set forth in [79], is that “Pfaffians are more fundamental than
determinants, in the sense that determinants are merely the bipartite special case of a general sum
over matchings.”
                             ADVANCED DETERMINANT CALCULUS                                       25

Thus, out of the validity of (3.30), this enables to establish the validity of (3.32), and
even of (3.33), by choosing Fj (t) and Hj (t) as above, but Gi (t) such that Gi (t2/(1+t)) =
(1 + t)xi + (1 + t)−xi , i = 0, 1, . . . , n − 1.
3. A list of determinant evaluations
   In this section I provide a list of determinant evaluations, some of which are very
frequently met, others maybe not so often. In any case, I believe that all of them
are useful or attractive, or even both. However, this is not intended to be, and cannot
possibly be, an exhaustive list of known determinant evaluations. The selection depends
totally on my taste. This may explain that many of these determinants arose in the
enumeration of plane partitions and rhombus tilings. On the other hand, it is exactly
this field (see [138, 148, 163, 165] for more information on these topics) which is a
particular rich source of nontrivial determinant evaluations. If you do not find “your”
determinant here, then, at least, the many references given in this section or the general
results and methods from Section 2 may turn out to be helpful.
   Throughout this section we use the standard hypergeometric and basic hypergeomet-
ric notations. To wit, for nonnegative integers k the shifted factorial (a)k is defined (as
already before) by
                              (a)k := a(a + 1) · · · (a + k − 1),
so that in particular (a)0 := 1. Similarly, for nonnegative integers k the shifted q-
factorial (a; q)k is given by
                          (a; q)k := (1 − a)(1 − aq) · · · (1 − aq k−1),
so that (a; q)0 := 1. Sometimes we make use of the notations [α]q := (1 − q α )/(1 − q),
[n]q ! := [n]q [n − 1]q · · · [1]q , [0]q ! := 1. The q-binomial coefficient is defined by
         
         α         [α]q [α − 1]q · · · [α − k + 1]q      (1 − q α)(1 − q α−1) · · · (1 − q α−k+1 )
                :=                                    =                                            .
          k q                       [k]q !                  (1 − q k )(1 − q k−1 ) · · · (1 − q)
                                             
Clearly we have limq→1 [ αk ]q = αk .
   Occasionally shifted (q-)factorials will appear which contain a subscript which is a
negative integer. By convention, a shifted factorial (a)k , where k is a negative integer, is
interpreted as (a)k := 1/(a − 1)(a − 2) · · · (a + k), whereas a shifted q-factorial (a; q)k ,
where k is a negative integer, is interpreted as (a; q)k := 1/(1 − q a−1)(1 − q a−2 ) · · ·
(1 − q a+k ). (A uniform way to define the shifted factorial, for positive and negative k,
is by (a)k := Γ(a + k)/Γ(a), respectively by an appropriate limit in case that a or a + k
is a nonpositive integer, see [62, Sec. 5.5, p. 211f]. A uniform way to define the shifted
q-factorial is by means of (a; q)k := (a; q)∞/(aq k ; q)∞ , see [55, (1.2.30)].)
  We begin our list with two determinant evaluations which generalize the Vander-
monde determinant evaluation (2.1) in a nonstandard way. The determinants appearing
in these evaluations can be considered as “augmentations” of the Vandermonde deter-
minant by columns which are formed by differentiating “Vandermonde-type” columns.
(Thus, these determinants can also be considered as certain generalized Wronskians.)
Occurences of the first determinant can be found e.g. in [45], [107, App. A.16], [108,
(7.1.3)], [154], [187]. (It is called “confluent alternant” in [107, 108].) The motivation
in [45] to study these determinants came from Hermite interpolation and the analysis
of linear recursion relations. In [107, App. A.16], special cases of these determinants
26                                                           C. KRATTENTHALER

are used in the context of random matrices. Special cases arose also in the context of
transcendental number theory (see [131, Sec. 4]).
Theorem 20. Let n be a nonnegative integer, and let Am (X) denote the n × m matrix
                                                                                                                                                            
     1                    0                                  0                       0 ...                                     0
 X                       1                                  0                       0 ...                                     0                             
 2                                                                                                                                                          
  X                    2X                                   2                       0     . . .                               0                             
 3                                                                                                                                                          ,
 X                    3X 2                                6X                        6 ...                                     0                             
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
  X n−1 (n − 1)X n−2 (n − 1)(n − 2)X n−3 . . . . . . (n − 1) · · · (n − m + 1)X n−m
i.e., any next column is formed by differentiating the previous column with respect to
X. Given a composition of n, n = m1 + · · · + m` , there holds
                                                Ỳ mY
                                                     i −1     Y
                                            
     det Am1 (X1 ) Am2 (X2 ) . . . Am` (X` ) =            j!     (Xj − Xi )mi mj . (3.1)
     1≤i,j,≤n
                                                                                     i=1 j=1              1≤i<j≤`




     The paper [45] has as well an “Abel-type” variation of this result.
Theorem 21. Let n be a nonnegative integer, and let Bm (X) denote the n × m matrix
                                                                                                                                     
           1                    0                            0                     0         ...                     0
       X                      X                            X                     X          ...                    X                 
       2                                                                                                                             
        X                   2X    2
                                                          4X    2
                                                                                 8X    2
                                                                                             . . .             2 m−1 2
                                                                                                                        X             
       3                                                                                                                             ,
       X                    3X 3                         9X 3                 27X 3 . . .                     3m−1 X 3               
      . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
       X n−1 (n − 1)X n−1 (n − 1)2 X n−1 . . . . . . . . . . (n − 1)m−1 X n−1
i.e., any next column is formed by applying the operator X(d/dX). Given a composition
of n, n = m1 + · · · + m` , there holds
                                               Ỳ m mY    i −1     Y
                                                   ( 2i )
    det Bm1 (X1 ) Bm2 (X2 ) . . . Bm` (X` ) =     Xi            j!     (Xj − Xi )mi mj .
  1≤i,j,≤n
                                                                                   i=1                j=1           1≤i<j≤`
                                                                                                                                                      (3.2)


   As Alain Lascoux taught me, the natural environment for this type of determinants
is divided differences and (generalized) discrete Wronskians. The divided difference ∂x,y
is a linear operator which maps polynomials in x and y to polynomials symmetric in x
and y, and is defined by
                                                                            f(x, y) − f(y, x)
                                                   ∂x,y f(x, y) =                             .
                                                                                  x−y
Divided differences have been introduced by Newton to solve the interpolation prob-
lem in one variable. (See [100] for an excellent introduction to interpolation, divided
differences, and related matters, such as Schur functions and Schubert polynomials.) In
                               ADVANCED DETERMINANT CALCULUS                                                  27

fact, given a polynomial g(x) in x, whose coefficients do not depend on a1, a2, . . . , am ,
Newton’s interpolation formula reads as follows (cf. e.g. [100, (Ni2)]),
  g(x) = g(a1 ) + (x − a1)∂a1 ,a2 g(a1) + (x − a1)(x − a2 )∂a2 ,a3 ∂a1 ,a2 g(a1 )
                                + (x − a1 )(x − a2 )(x − a3 )∂a3,a4 ∂a2 ,a3 ∂a1 ,a2 g(a1) + · · · . (3.3)
  Now suppose that f1 (x), f2(x), . . . , fn (x) are polynomials in one variable x, whose
coefficients do not depend on a1, a2, . . . , an , and consider the determinant
                                               det (fi (aj )).                                         (3.4)
                                             1≤i,j,≤n

Let us for the moment concentrate on the first m1 columns of this determinant. We
may apply (3.3), and write
  fi (aj ) = fi (a1) + (aj − a1)∂a1 ,a2 fi (a1) + (aj − a1)(aj − a2)∂a2 ,a3 ∂a1 ,a2 fi (a1)
                    + · · · + (aj − a1)(aj − a2) · · · (aj − aj−1 )∂aj−1 ,aj · · · ∂a2 ,a3 ∂a1,a2 fi (a1 ),
j = 1, 2, . . . , m1. Following [100, Proof of Lemma (Ni5)], we may perform column
reductions to the effect that the determinant (3.4), with column j replaced by
                (aj − a1 )(aj − a2 ) · · · (aj − aj−1 )∂aj−1 ,aj · · · ∂a2,a3 ∂a1 ,a2 fi (a1),
j = 1, 2, . . . , m1, has the same value as the original determinant. Clearly, the product
Q
  k=1 (aj − ak ) can be taken out of column j, j = 1, 2, . . . , m1 . Similar reductions can
  j−1

be applied to the next m2 columns, then to the next m3 columns, etc.
  This proves the following fact about generalized discrete Wronskians:
Lemma 22. Let n be a nonnegative integer,            and let Wm (x1 , x2, . . . , xm) denote the
n × m matrix ∂xj−1 ,xj · · · ∂x2 ,x3 ∂x1 ,x2 fi (x1) 1≤i≤n, 1≤j≤m . Given a composition of n,
n = m1 + · · · + m` , there holds
                                                                                                        
   det Wm1 (a1, . . . , am1 ) Wm2 (am1 +1 , . . . , am1 +m2 ) . . . Wm` (am1 +···+m`−1 +1 , . . . , an )
  1≤i,j,≤n
                                      Ỳ                           Y                             
                      = det (fi (aj ))                                                   (aj − ai ) . (3.5)
                         1≤i,j,≤n
                                              k=1       m1 +···+mk−1 +1≤i<j≤m1 +···+mk



  If we now choose fi (x) := xi−1 , so that det1≤i,j,≤n (fi (aj )) is a Vandermonde deter-
minant, then the right-hand side of (3.5) factors completely by (2.1). The final step
to obtain Theorem 20 is to let a1 → X1 , a2 → X1 , . . . , am1 → X1 , am1 +1 → X2 , . . . ,
am1 +m2 → X2 , etc., in (3.5). This does indeed yield (3.1), because
                                                                             j−1
                                                                       1      d
          lim . . . lim lim ∂xj−1 ,xj · · · ∂x2 ,x3 ∂x1 ,x2 g(x1) =                g(x),
         xj →x     x2 →x x1 →x                                      (j − 1)! dx
as is easily verified.
  The Abel-type variation in Theorem 21 follows from Theorem 20 by multiplying
column j in (3.1) by X1j−1 for j = 1, 2, . . . , m1, by X2j−m1 −1 for j = m1 +1, m1 +2, . . . , m2 ,
etc., and by then using the relation
                                  d                  d
                               X     g(X) =             Xg(X) − g(X)
                                 dX                dX
28                                                              C. KRATTENTHALER

many times, so that a typical entry Xkj−1 (d/dXk )j−1 Xki−1 in row i and column j of the
k-th submatrix is expressed as (Xk (d/dXk ))j−1 Xki−1 plus a linear combination of terms
(Xk (d/dXk ))s Xki−1 with s < j − 1. Simple column reductions then yield (3.2).

   It is now not very difficult to adapt this analysis to derive, for example, q-analogues
of Theorems 20 and 21. The results below do actually contain q-analogues of extensions
of Theorems 20 and 21.

Theorem 23. Let n be a nonnegative integer, and let Am (X) denote the n × m matrix
     
          1                  [C]q X −1                                 [C]q [C − 1]q X −2
      X                      [C + 1]q                                 [C + 1]q [C]q X −1
      2
      X                   [C + 2]q X                                   [C + 2]q [C + 1]q
     
     . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
       X n−1 [C + n − 1]q X n−2 [C + n − 1]q [C + n − 2]q X n−3
                                                                                                                                                           
                                                                      ...                   [C]q · · · [C − m + 2]q X 1−m
                                                                      ...               [C + 1]q · · · [C − m + 3]q X 2−m                                  
                                                                                                                                                           
                                                                      ...               [C + 2]q · · · [C − m + 4]q X                       3−m            ,
                                                                                                                                                           
                                                                      . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                                                                      . . . [C + n − 1]q · · · [C + n − m + 1]q X n−m

i.e., any next column is formed by applying the operator X −C Dq X C , with Dq denoting
the usual q-derivative, Dq f(X) := (f(qX) − f(X))/(q − 1)X. Given a composition of
n, n = m1 + · · · + m` , there holds
                                                       
        det         Am1 (X1 ) Am2 (X2 ) . . . Am` (X` )
     1≤i,j,≤n
                                                                 Ỳ mY
                                                                      i −1
                                                                                           Y             Y
                                                                                                          m     Y
                                                                                                           i −1 mj −1

                                                    =q     N1
                                                                                 [j]q !                                   (q t−s Xj − Xi ), (3.6)
                                                                   i=1 j=1                  1≤i<j≤` s=0             t=0

where N1 is the quantity
 P̀ P
    mi                                                                                                          P                       
                (C + j + m1 + · · · + mi−1 − 1)(mi − j) − m3i                                            −                  mi m2j − mj m2i .
 i=1 j=1                                                                                                      1≤i<j≤`




  To derive (3.6) one would choose strings of geometric sequences for the variables aj
in Lemma 22, i.e., a1 = X1 , a2 = qX1, a3 = q 2X1 , . . . , am1 +1 = X2 , am1 +2 = qX2 , etc.,
and, in addition, use the relation

                                    y C ∂x,y f(x, y) = ∂x,y (xC f(x, y)) − (∂x,y xC )f(x, y)                                                            (3.7)

repeatedly.

     A “q-Abel-type” variation of this result reads as follows.
                                          ADVANCED DETERMINANT CALCULUS                                                                        29

Theorem 24. Let n be a nonnegative integer, and let Bm (X) denote the n × m matrix
                                                                                                                                                
        1                      [C]q                                   [C]2q                    ...                     [C]m−1q
    X                   [C + 1]q X                             [C + 1]2q X                    ...              [C + 1]m−1            X          
    2                                                                                                                        q                  
    X                  [C    +    2]    X   2
                                                               [C    +   2]  2
                                                                               X   2
                                                                                               . . .           [C    +    2] m−1
                                                                                                                                     X   2       ,
                                     q                                      q                                               q                   
   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
     X n−1 [C + n − 1]q X n−1 [C + n − 1]2q X n−1 . . . [C + n − 1]m−1                                                         q       X n−1
i.e., any next column is formed by applying the operator X 1−C Dq X C , with Dq denoting
the q-derivative as in Theorem 23. Given a composition of n, n = m1 + · · · + m` , there
holds
                                            
     det Bm1 (X1 ) Bm2 (X2 ) . . . Bm` (X` )
   1≤i,j,≤n
                                                Ỳ              mi −1             Y           i −1 mj −1
                                                          (m2i ) Y                             Y     Y
                                                                                               m
                                    =q    N2
                                                       Xi                [j]q !                               (q t−s Xj − Xi ), (3.8)
                                                 i=1               j=1             1≤i<j≤` s=0          t=0

where N2 is the quantity
        P̀ P
           mi                                                                                   P                       
                  ((C + j + m1 + · · · + mi−1 − 1)(mi − j)) −                                             mi m2j − mj m2i .
        i=1 j=1                                                                             1≤i<j≤`




  Yet another generalization of the Vandermonde determinant evaluation is found in
[21]. Multidimensional analogues are contained in [176, Theorem A.7, Eq. (A.14),
Theorem B.8, Eq. (B.11)] and [182, Part I, p. 547].
   Extensions of Cauchy’s double alternant (2.7) can also be found in the literature (see
e.g. [117, 149]). I want to mention here particularly Borchardt’s variation [17] in which
the (i, j)-entry in Cauchy’s double alternant is replaced by its square,
                            Q                                             
                    1           1≤i<j≤n (Xi − Xj )(Yi − Yj )            1
        det                  =     Q                          Per              ,     (3.9)
      1≤i,j≤n   (Xi − Yj )2          1≤i,j≤n (Xi − Yj )
                                                             1≤i,j≤n Xi − Yj

where Per M denotes the permanent of the matrix M. Thus, there is no closed form
expression such as in (2.7). This may not look that useful. However, most remarkably,
there is a (q-)deformation of this identity which did indeed lead to a “closed form evalu-
ation,” thus solving a famous enumeration problem in an unexpected way, the problem
of enumerating alternating sign matrices.10 This q-deformation is equivalent to Izergin’s
evaluation [74, Eq. (5)] (building on results by Korepin [82]) of the partition function of
the six-vertex model under certain boundary conditions (see also [97, Theorem 8] and
[83, Ch. VII, (10.1)/(10.2)]).

   10
     An alternating sign matrix is a square matrix with entries 0, 1, −1, with all row and column
sums equal to 1, and such that, on disregarding the 0s, in each row and column the 1s and (−1)s
alternate. Alternating sign matrix are currently the most fascinating, and most mysterious, objects in
enumerative combinatorics. The reader is referred to [18, 19, 111, 148, 97, 198, 199] for more detailed
material. Incidentally, the “birth” of alternating sign matrices came through — determinants, see
[150].
30                                          C. KRATTENTHALER

Theorem 25. For any nonnegative integer n there holds
                                 Q
                     1                  1≤i<j≤n (Xi − Xj )(Yi − Yj )
   det                               =Q
 1≤i,j≤n   (Xi − Yj )(qXi − Yj )        1≤i,j≤n (Xi − Yj )(qXi − Yj )
                  X                  Y
                                     n
                                                   i        Y
               ×       (1 − q)2N (A)
                                       XiNi (A) YiN (A)               (αi,j Xi − Yj ), (3.10)
                             A              i=1                     i,j such that Aij =0

where the sum is over all n × n alternating sign matrices A = (Aij )1≤i,j≤n , N(A) is
the number of (−1)s in A, Ni (A) (respectively N i (A))
                                                   Pj is the number  of (−1)s in the
                                                              Pi
i-th row (respectively column) of A, and αij = q if k=1 Aik = k=1 Akj , and αij = 1
otherwise.
   Clearly, equation (3.9) results immediately from (3.10) by setting q = 1. Roughly,
Kuperberg’s solution [97] of the enumeration of alternating sign matrices consisted of
suitably specializing the xi ’s, yi ’s and q in (3.10), so that each summand on the right-
hand side would reduce to the same quantity, and, thus, the sum would basically count
n × n alternating sign matrices, and in evaluating the left-hand side determinant for
that special choice of the xi ’s, yi ’s and q. The resulting number of n × n alternating
sign matrices is given in (A.1) in the Appendix. (The first, very different, solution
is due to Zeilberger [198].) Subsequently, Zeilberger [199] improved on Kuperberg’s
approach and succeeded in proving the refined alternating sign matrix conjecture from
[111, Conj. 2]. For a different expansion of the determinant of Izergin, in terms of Schur
functions, and a variation, see [101, Theorem q, Theorem γ].
  Next we turn to typical applications of Lemma 3. They are listed in the following
theorem.
Theorem 26. Let n be a nonnegative integer, and let L1, L2 , . . . , Ln and A, B be inde-
terminates. Then there hold
                      !                       Q                    Qn
                                                 1≤i<j≤n [Li − Lj ]q
            Li + A + j        Pn                                          [Li + A + 1]q !
     det                   =q  i=1 (i−1)(Li +i)
                                                  Qn                 Qi=1                 ,
                                                                       i=1 [A + 1 − i]q !
                                                                       n
   1≤i,j≤n    Li + j    q                          i=1 [Li + n]q !
                                                                                      (3.11)
and
                              !           Q                    Qn
                           A         Pn              [Li − Lj ]q       [A + i − 1]q !
                                  = q i=1 i Qn                   Qni=1
                   jLi                   iL  1≤i<j≤n
       det     q                                                                      ,             (3.12)
                                                                  i=1 [A − Li − 1]q !
     1≤i,j≤n             Li + j q              i=1 [Li + n]q !

and
                      
               BLi + A
       det
     1≤i,j≤n    Li + j
                Q
                  1≤i<j≤n (Li − Lj )
                                     Yn
                                             (BLi + A)!       Yn
              = Qn                                                (A − Bi + 1)i−1 , (3.13)
                    i=1 (Li + n)!    i=1
                                         ((B − 1)Li + A − 1)! i=1
and
                                                       Y
                                                         n                    Y
                                 (A + BLi )j−1             (A + Bi)i−1
                     det                             =                                (Lj − Li ).   (3.14)
                   1≤i,j≤n         (j − Li )!            i=1
                                                               (n − Li )!   1≤i<j≤n
                            ADVANCED DETERMINANT CALCULUS                                     31




   (For derivations of (3.11) and (3.12) using Lemma 3 see the proofs of Theorems 6.5
and 6.6 in [85]. For a derivation of (3.13) using Lemma 3 see the proof of Theorem 5
in [86].)
   Actually, the evaluations (3.11) and (3.12) are equivalent. This is seen by observing
that                                                                       
               Li + A + j           Li +j ( 2i )+(2)+jLi +(A+1)(Li +j) −A − 1
                                           L      j
                             = (−1)      q                                       .
                 Li + j    q
                                                                        Li + j q
Hence, replacement of A by −A − 1 in (3.11) leads to (3.12) after little manipulation.
   The determinant evaluations (3.11) and (3.12), and special cases thereof, are redis-
covered and reproved in the literature over and over. (This phenomenon will probably
persist.) To the best of my knowledge, the evaluation (3.11) appeared in print explicitly
for the first time in [22], although it was (implicitly) known earlier to people in group
representation theory, as it also results from the principal specialization (i.e., set xi = q i ,
i = 1, 2, . . . , N) of a Schur function of arbitrary shape, by comparing the Jacobi–Trudi
identity with the bideterminantal form (Weyl character formula) of the Schur function
(cf. [105, Ch. I, (3.4), Ex. 3 in Sec. 2, Ex. 1 in Sec. 3]; the determinants arising in the
bideterminantal form are Vandermonde determinants and therefore easily evaluated).
   The main applications of (3.11)–(3.13) are in the enumeration of tableaux, plane par-
titions and rhombus tilings. For example, the hook-content formula [163, Theorem 15.3]
for tableaux of a given shape with bounded entries follows immediately from the the-
ory of nonintersecting lattice paths (cf. [57, Cor. 2] and [169, Theorem 1.2]) and the
determinant evaluation (3.11) (see [57, Theorem 14] and [85, proof of Theorem 6.5]).
MacMahon’s “box formula” [106, Sec. 429; proof in Sec. 494] for the generating function
of plane partitions which are contained inside a given box follows from nonintersecting
lattice paths and the determinant evaluation (3.12) (see [57, Theorem 15] and [85, proof
of Theorem 6.6]). The q = 1 special case of the determinant which is relevant here is
the one in (1.2) (which is the one which was evaluated as an illustration in Section 2.2).
To the best of my knowledge, the evaluation (3.13) is due to Proctor [133] who used
it for enumerating plane partitions of staircase shape (see also [86]). The determinant
evaluation (3.14) can be used to give closed form expressions in the enumeration of λ-
parking functions (an extension of the notion of k-parking functions such as in [167]), if
one starts with determinantal expressions due to Gessel (private communication). Fur-
ther applications of (3.11), in the domain of multiple (basic) hypergeometric series, are
found in [63]. Applications of these determinant evaluations in statistics are contained
in [66] and [168].
   It was pointed out in [34] that plane partitions in a given box are in bijection with
rhombus tilings of a “semiregular” hexagon. Therefore, the determinant (1.2) counts
as well rhombus tilings in a hexagon with side lengths a, b, n, a, b, n. In this regard,
generalizations of the evaluation of this determinant, and of a special case of (3.13),
appear in [25] and [27]. The theme of these papers is to enumerate rhombus tilings of
a hexagon with triangular holes.
  The next theorem provides a typical application of Lemma 4. For a derivation of this
determinant evaluation using this lemma see [87, proofs of Theorems 8 and 9].
32                                              C. KRATTENTHALER

Theorem 27. Let n be a nonnegative integer, and let L1 , L2 , . . . , Ln and A be indeter-
minates. Then there holds

                                        !
                    jLi       Li + A − j
      det       q
     1≤i,j≤n                    Li + j    q

                Pn            Y
                              n
                                      [Li + A − n]q !        Y                                   
           =q    i=1 iLi                                           [Li − Lj ]q [Li + Lj + A + 1]q . (3.15)
                               i=1
                                   [Li + n]q ! [A − 2i]q ! 1≤i<j≤n




   This result was used to compute generating functions for shifted plane partitions of
trapezoidal shape (see [87, Theorems 8 and 9], [134, Prop. 4.1] and [135, Theorem 1]).

   Now we turn to typical applications of Lemma 5, given in Theorems 28–31 below.
All of them can be derived in just the same way as we evaluated the determinant (1.2)
in Section 2.2 (the only difference being that Lemma 5 is invoked instead of Lemma 3).
   The first application is the evaluation of a determinant whose entries are a product
of two q-binomial coefficients.

Theorem 28. Let n be a nonnegative integer, and let L1, L2 , . . . , Ln and A, B be inde-
terminates. Then there holds

                                       !
               Li + j        Li + A − j
       det               ·
     1≤i,j≤n     B q               B        q
                Pn               n     n+1    Y                                                  
             = q i=1 (i−1)Li −B (2 )+2( 3 )                 [Li − Lj ]q [Li + Lj + A − B + 1]q
                                                  1≤i<j≤n
           Y
           n
                    [Li + 1]q ! [Li + A − n]q !               [A − 2i − 1]q !
       ×                                                                                    . (3.16)
               [Li − B + n]q ! [Li + A − B − 1]q ! [A − i − n − 1]q ! [B + i − n]q ! [B]q !
           i=1




  As is not difficult to verify, this determinant evaluation contains (3.11), (3.12), as
well as (3.15) as special, respectively limiting cases.
  This determinant evaluation found applications in basic hypergeometric functions
theory. In [191, Sec. 3], Wilson used a special case to construct biorthogonal rational
functions. On the other hand, Schlosser applied it in [157] to find several new summation
theorems for multidimensional basic hypergeometric series.
  In fact, as Joris Van der Jeugt pointed out to me, there is a generalization of Theo-
rem 28 of the following form (which can be also proved by means of Lemma 5).
                             ADVANCED DETERMINANT CALCULUS                                        33

Theorem 29. Let n be a nonnegative integer, and let X0 , X1 , . . . , Xn−1 , Y0 , Y1 , . . . ,
Yn−1 , A and B be indeterminates. Then there holds
                                       
               Xi + Yj      Yj + A − Xi
                 j                j          
                                         q
      det            q                    
  0≤i,j≤n−1  Xi + B        A + B − Xi 
                   j    q
                                   j        q
                   n   Pn−1                     Y
             = q 2(3 )+ i=0 i(Xi +Yi −A−2B)       [Xi − Xj ]q [Xi + Xj − A]q
                                             0≤i<j≤n−1

                                                     Y
                                                     n−1
                                                          (q B−Yi −i+1 )i (q Yi +A+B+2−2i )i
                                                 ×          Xi−A−B )          X +B−n+2 )
                                                                                             . (3.17)
                                                     i=0
                                                         (q          n−1 (q i           n−1




   As another application of Lemma 5 we list two evaluations of determinants (see below)
where the entries are, up to some powers of q, a difference of two q-binomial coefficients.
A proof of the first evaluation which uses Lemma 5 can be found in [88, proof of
Theorem 7], a proof of the second evaluation using Lemma 5 can be found in [155,
Ch. VI, §3]. Once more, the second evaluation was always (implicitly) known to people
in group representation theory, as it also results from a principal specialization (set
xi = q i−1/2, i = 1, 2, . . . ) of a symplectic character of arbitrary shape, by comparing the
symplectic dual Jacobi–Trudi identity with the bideterminantal form (Weyl character
formula) of the symplectic character (cf. [52, Cor. 24.24 and (24.18)]; the determinants
arising in the bideterminantal form are easily evaluated by means of (2.4)).
Theorem 30. Let n be a nonnegative integer, and let L1 , L2 , . . . , Ln and A be indeter-
minates. Then there hold
                                                          
             j(Lj −Li )      A                         A
    det    q                        −q j(2Li+A−1)
  1≤i,j≤n                  j − Li q                −j − Li + 1 q
      Y
      n
                  [A + 2i − 2]q !             Y                   Y
  =                                                 [Lj − Li ]q         [Li + Lj + A − 1]q (3.18)
      i=1
          [n − Li ]q ! [A + n − 1 + Li ]q ! 1≤i<j≤n             1≤i≤j≤n

and
                                                    
             j(Lj −Li )      A                      A
    det    q                        −q j(2Li+A)
  1≤i,j≤n                  j − Li q              −j − Li q
              Y
              n
                       [A + 2i − 1]q !            Y                   Y
          =                                             [Lj − Li ]q         [Li + Lj + A]q . (3.19)
              i=1
                  [n − Li ]q ! [A + n + Li ]q ! 1≤i<j≤n             1≤i≤j≤n



  A special case of (3.19) was the second determinant evaluation which Andrews needed
in [4, (1.4)] in order to prove the MacMahon Conjecture (since then, ex-Conjecture)
about the q-enumeration of symmetric plane partitions. Of course, Andrews’ evaluation
proceeded by LU-factorization, while Schlosser [155, Ch. VI, §3] simplified Andrews’
proof significantly by making use of Lemma 5. The determinant evaluation (3.18)
34                                         C. KRATTENTHALER

was used in [88] in the proof of refinements of the MacMahon (ex-)Conjecture and the
Bender–Knuth (ex-)Conjecture. (The latter makes an assertion about the generating
function for tableaux with bounded entries and a bounded number of columns. The
first proof is due to Gordon [59], the first published proof [3] is due to Andrews.)
   Next, in the theorem below, we list two very similar determinant evaluations. This
time, the entries of the determinants are, up to some powers of q, a sum of two q-
binomial coefficients. A proof of the first evaluation which uses Lemma 5 can be found
in [155, Ch. VI, §3]. A proof of the second evaluation can be established analogously.
Again, the second evaluation was always (implicitly) known to people in group represen-
tation theory, as it also results from a principal specialization (set xi = q i, i = 1, 2, . . . )
of an odd orthogonal character of arbitrary shape, by comparing the orthogonal dual
Jacobi–Trudi identity with the bideterminantal form (Weyl character formula) of the
orthogonal character (cf. [52, Cor. 24.35 and (24.28)]; the determinants arising in the
bideterminantal form are easily evaluated by means of (2.3)).
Theorem 31. Let n be a nonnegative integer, and let L1 , L2 , . . . , Ln and A be indeter-
minates. Then there hold
                                                                     
             (j−1/2)(Lj −Li )     A         (j−1/2)(2Li+A−1)      A
    det    q                             +q
  1≤i,j≤n                       j − Li q                      −j − Li + 1 q
                           Y
                           n
                             (1 + q Li +A/2−1/2)            [A + 2i − 1]q !
                       =
                           i=1
                                 (1 + q i+A/2−1/2 ) [n − Li ]q ! [A + n + Li − 1]q !
                                                        Y
                                                   ×             [Lj − Li ]q [Li + Lj + A − 1]q (3.20)
                                                       1≤i<j≤n

and
                                                                               
                (j−1/2)(Lj −Li )      A            (j−1/2)(2Li+A−2)         A
       det    q                               +q
     1≤i,j≤n                        j − Li q                          −j − Li + 2 q
                         Qn            Li+A/2−1 Y    n
                            i=1 (1 + q           )             [A + 2i − 2]q !
                     =   Q   n
                             i=2 (1 + q
                                        i+A/2−1 ) i=1 [n − Li ]q ! [A + n + Li − 2]q !
                                                        Y
                                                   ×          [Lj − Li ]q [Li + Lj + A − 2]q . (3.21)
                                                     1≤i<j≤n




   A special case of (3.20) was the first determinant evaluation which Andrews needed
in [4, (1.3)] in order to prove the MacMahon Conjecture on symmetric plane parti-
tions. Again, Andrews’ evaluation proceeded by LU-factorization, while Schlosser [155,
Ch. VI, §3] simplified Andrews’ proof significantly by making use of Lemma 5.
   Now we come to determinants which belong to a different category what regards
difficulty of evaluation, as it is not possible to introduce more parameters in a substantial
way.
  The first determinant evaluation in this category that we list here is a determinant
evaluation due to Andrews [5, 6]. It solved, at the same time, Macdonald’s problem of
                             ADVANCED DETERMINANT CALCULUS                                         35

enumerating cyclically symmetric plane partitions and Andrews’ own conjecture about
the enumeration of descending plane partitions.
Theorem 32. Let µ be an indeterminate. For nonnegative integers n there holds
                                 
                      2µ + i + j
    det      δij +
 0≤i,j≤n−1                  j
       
                Y
                 n−2
       
          dn/2e
                     (µ + di/2e + 1)b(i+3)/4c
       
        2
       
       
       
           Qn/2 i=1                                                 
       
                   µ + 3n    − 3i2 + 32 di/2e−1 µ + 3n        − 3i2 + 32 di/2e
       
              i=1        2                                  2
       
       ×                      Qn/2−1                                                 if n is even,
                                  i=1    (2i  − 1)!! (2i +  1)!!
     =
       
                Y
                 n−2
       
        2dn/2e      (µ + di/2e + 1)d(i+3)/4e
       
       
       
       
       
           Q(n−1)/2
                 i=1                  3i−1                            3i 
       
                       µ +   3n
                                  −           +  1             µ + 3n
                                                                      −
       
              i=1             2         2          d(i−1)/2e       2     2     di/2e
       ×                            Q(n−1)/2                                         if n is odd.
                                         i=1    (2i − 1)!!  2

                                                                                                (3.22)


  The specializations of this determinant evaluation which are of relevance for the
enumeration of cyclically symmetric plane partitions and descending plane partitions
are the cases µ = 0 and µ = 1, respectively. In these cases, Macdonald, respectively
Andrews, actually had conjectures about q-enumeration. These were proved by Mills,
Robbins and Rumsey [110]. Their theorem which solves the q-enumeration of cyclically
symmetric plane partitions is the following.
Theorem 33. For nonnegative integers n there holds
                                 ! Y
                                          1 − q 3i−1 Y 1 − q 3(n+i+j−1)
                                       n
                     3i+1  i + j
      det    δij + q                =                                        .                 (3.23)
   0≤i,j≤n−1                 j q3
                                      i=1
                                          1 − q 3i−2 1≤i≤j≤n 1 − q 3(2i+j−1)


   The theorem by Mills, Robbins and Rumsey in [110] which concerns the enumeration
of descending plane partitions is the subject of the next theorem.
Theorem 34. For nonnegative integers n there holds
                                           !     Y
                                  i + j + 2                           1 − q n+i+j
             det    δij + q i+2                =                                   .           (3.24)
          0≤i,j≤n−1                   j      q              1≤i≤j≤n+1
                                                                      1 − q 2i+j−1




   It is somehow annoying that so far nobody was able to come up with a full q-analogue
of the Andrews determinant (3.22) (i.e., not just in the cases µ = 0 and µ = 1). This
issue is already addressed in [6, Sec. 3]. In particular, it is shown there that the result
for a natural q-enumeration of a parametric family of descending plane partitions does
not factor nicely in general, and thus does not lead to a q-analogue of (3.22). Yet, such
36                                    C. KRATTENTHALER

a q-analogue should exist. Probably the binomial coefficient in (3.22) has to be replaced
by something more complicated than just a q-binomial times some power of q.
   On the other hand, there are surprising variations of the Andrews determinant (3.22),
discovered by Douglas Zare. These can be interpreted as certain weighted enumerations
of cyclically symmetric plane partitions and of rhombus tilings of a hexagon with a
triangular hole (see [27]).
Theorem 35. Let µ be an indeterminate. For nonnegative integers n there holds
                               
                     2µ + i + j
    det     −δij +
 0≤i,j≤n−1               j
      (
        0,                                                                  if n is odd,
   =           Q n/2−1        i! 2 (µ+i)!2 (µ+3i+1)!2 (2µ+3i+1)!2                         (3.25)
        (−1)n/2 i=0 (2i)! (2i+1)! (µ+2i)!2 (µ+2i+1)!2 (2µ+2i)! (2µ+2i+1)! , if n is even.
     If ω is a primitive 3rd root of unity, then for nonnegative integers n there holds
                                  
                         2µ + i + j                   (1 + ω)n2bn/2c
        det     ωδij +                 = Qbn/2c             Qb(n−1)/2c
                                             i=1 (2i − 1)!!            (2i − 1)!!
     0≤i,j≤n−1               j                                i=1
                         Y
                       ×    (µ + 3i + 1)b(n−4i)/2c (µ + 3i + 3)b(n−4i−3)/2c
                        i≥0
                                                                        
                             · µ + n − i + 12 b(n−4i−1)/2c µ + n − i − 12 b(n−4i−2)/2c , (3.26)
where, in abuse of notation, by bαc we mean the usual floor function if α ≥ 0, however,
if α < 0 then bαc must be read as 0, so that the product over i in (3.26) is indeed a
finite product.
   If ω is a primitive 6th root of unity, then for nonnegative integers n there holds
                                                           bn/2c
                       2µ + i + j                  (1 + ω)n 23
      det     ωδij +                  = Qbn/2c            Qb(n−1)/2c
                                           i=1 (2i − 1)!!             (2i − 1)!!
   0≤i,j≤n−1                j                              i=1
                     Y                                       
                   ×      µ + 3i + 32 b(n−4i−1)/2c µ + 3i + 52 b(n−4i−2)/2c
                       i≥0

                                        · (µ + n − i)b(n−4i)/2c (µ + n − i)b(n−4i−3)/2c , (3.27)
where again, in abuse of notation, by bαc we mean the usual floor function if α ≥ 0,
however, if α < 0 then bαc must be read as 0, so that the product over i in (3.27) is
indeed a finite product.
   There are no really simple proofs of Theorems 32–35. Let me just address the issue
of proofs of the evaluation of the Andrews determinant, Theorem 32. The only direct
proof of Theorem 32 is the original proof of Andrews [5], who worked out the LU-
factorization of the determinant. Today one agrees that the “easiest” way of evaluating
the determinant (3.22) is by first employing a magnificent factorization theorem [112,
Theorem 5] due to Mills, Robbins and Rumsey, and then evaluating each of the two
resulting determinants. For these, for some reason, more elementary evaluations exist
(see in particular [10] for such a derivation). What I state below is a (straightforward)
generalization of this factorization theorem from [92, Lemma 2].
                                ADVANCED DETERMINANT CALCULUS                               37

Theorem 36. Let Zn (x; µ, ν) be defined by
                                     n−1                              !
                                 X
                                 n−1 X
                                           i+µ k+ν        j − k + µ − 1 k−t
  Zn (x; µ, ν) := det      δij +                                        x     ,
                 0≤i,j≤n−1
                                 t=0 k=0
                                            t    k − t        j − k

let Tn(x; µ, ν) be defined by
                                                  2j                      !
                                                  X    i+µ    j+ν
                    Tn (x; µ, ν) :=     det                            x2j−t ,
                                      0≤i,j≤n−1
                                                  t=i
                                                        t−i   2j − t

and let Rn(x; µ, ν) be defined by
                                 2j+1                     
                                 X         i+µ        i+µ+1
  Rn (x; µ, ν) :=     det                         +
                    0≤i,j≤n−1
                                  t=i
                                          t−i−1          t−i
                                                                                 !
                                                    j+ν         j+ν+1
                                             ·               +                x 2j+1−t
                                                                                        .
                                                  2j + 1 − t    2j + 1 − t

Then for all positive integers n there hold
                            Z2n(x; µ, ν) = Tn(x; µ, ν/2) Rn (x; µ, ν/2)              (3.28)
and
                        Z2n−1 (x; µ, ν) = 2 Tn(x; µ, ν/2) Rn−1 (x; µ, ν/2).          (3.29)


  The reader should observe that Zn (1; µ, 0) is identical with the determinant in (3.22),
as the sums in the entries simplify by means of Chu–Vandermonde summation (see e.g.
[62, Sec. 5.1, (5.27)]). However, also the entries in the determinants Tn(1; µ, 0) and
Rn(1; µ, 0) simplify. The respective evaluations read as follows (see [112, Theorem 7]
and [9, (5.2)/(5.3)]).
Theorem 37. Let µ be an indeterminate. For nonnegative integers n there holds
                    
              µ+i+j
    det
 0≤i,j≤n−1     2i − j
                                                                        
                            n−1 Y (µ + i + 1)b(i+1)/2c  −µ − 3n + i + 32 bi/2c
                                 n−1
       = (−1)χ(n≡3 mod 4) 2( 2 )                                               , (3.30)
                                 i=1
                                                       (i)i

where χ(A) = 1 if A is true and χ(A) = 0 otherwise, and
                                        
               µ+i+j          µ+i+j +2
     det                 +2
  0≤i,j≤n−1     2i − j         2i − j + 1
                                                              3i−1  1
                                  Yn
                                      (µ + i)bi/2c (µ + 3n −         + 2 )b(i+1)/2c
                             = 2n                                2
                                                                                    . (3.31)
                                  i=1
                                                       (2i − 1)!!
38                                  C. KRATTENTHALER

   The reader should notice that the determinant in (3.30) is the third determinant from
the Introduction, (1.3). Originally, in [112, Theorem 7], Mills, Robbins and Rumsey
proved (3.30) by applying their factorization theorem (Theorem 36) the other way
round, relying on Andrews’ Theorem 32. However, in the meantime there exist short
direct proofs of (3.30), see [10, 91, 129], either by LU-factorization, or by “identification
of factors”. A proof based on the determinant evaluation (3.35) and some combinatorial
considerations is given in [29, Remark 4.4], see the remarks after Theorem 40. As shown
in [9, 10], the determinant (3.31) can easily be transformed into a special case of the
determinant in (3.35) (whose evaluation is easily proved using condensation, see the
corresponding remarks there). Altogether, this gives an alternative, and simpler, proof
of Theorem 32.
   Mills, Robbins and Rumsey needed the evaluation of (3.30) because it allowed them
to prove the (at that time) conjectured enumeration of cyclically symmetric transpose-
complementary plane partitions (see [112]). The unspecialized determinants Zn (x; µ, ν)
and Tn (x; µ, ν) have combinatorial meanings as well (see [110, Sec. 4], respectively
[92, Sec. 3]), as the weighted enumeration of certain descending plane partitions and
triangularly shaped plane partitions.
   It must be mentioned that the determinants Zn (x; µ, ν), Tn (x; µ, ν), Rn (x; µ, ν) do
also factor nicely for x = 2. This was proved by Andrews [7] using LU-factorization,
thus confirming a conjecture by Mills, Robbins and Rumsey (see [92] for an alternative
proof by “identification of factors”).
   It was already mentioned in Section 2.8 that there is a general theorem by Goulden
and Jackson [61, Theorem 2.1] (see Lemma 19 and the remarks thereafter) which,
given the evaluation (3.30), immediately implies a generalization containing one more
parameter. (This property of the determinant (3.30) is called by Goulden and Jackson
the averaging property.) The resulting determinant evaluation had been earlier found
by Andrews and Burge [9, Theorem 1]. They derived it by showing that it can be
obtained by multiplying the matrix underlying the determinant (3.30) by a suitable
triangular matrix.
Theorem 38. Let x and y be indeterminates. For nonnegative integers n there holds
                                     
              x+i+j            y+i+j
    det                   +
 0≤i,j≤n−1     2i − j            2i − j
                                                                               
                      n      Y
                             n−1   x+y
                                    2
                                        + i + 1  b(i+1)/2c
                                                            −  x+y
                                                                2
                                                                   − 3n + i + 3
                                                                              2  bi/2c
  = (−1)χ(n≡3 mod 4)2( 2 )+1                                                           , (3.32)
                             i=1
                                                           (i)i

where χ(A) = 1 if A is true and χ(A) = 0 otherwise.
  (The evaluation (3.32) does indeed reduce to (3.30) by setting x = y.)
  The above described procedure of Andrews and Burge to multiply a matrix, whose
determinant is known, by an appropriate triangular matrix, and thus obtain a new
determinant evaluation, was systematically exploited by Chu [23]. He derives numerous
variations of (3.32), (3.31), and special cases of (3.13). We content ourselves with
displaying two typical identities from [23, (3.1a), (3.5a)], just enough to get an idea of
the character of these.
                           ADVANCED DETERMINANT CALCULUS                                   39

Theorem 39. Let x0, x1 , . . . , xn−1 and c be indeterminates. For nonnegative integers
n there hold
                                                
               c + xi + i + j       c − xi + i + j
     det                        +
  0≤i,j≤n−1        2i − j                2i − j
                                                                                 
                                 n   Y
                                     n−1  (c + i + 1)b(i+1)/2c  −c  − 3n + i + 3
                                                                               2 bi/2c
          = (−1)χ(n≡3 mod 4)2( 2 )+1                                                   (3.33)
                                     i=1
                                                               (i)i
and
                                                                
            (2i − j) + (2c + 3j + 1)(2c + 3j − 1) c + i + j + 12
     det
  0≤i,j≤n−1     (c + i + j + 12 )(c + i + j − 12 )       2i − j
                                                   
                                    Y c + i + 12 b(i+1)/2c (−c − 3n + i + 2)bi/2c
                                    n−1
             χ(n≡3 mod 4) (n+1 ) +1
       = (−1)            2  2                                                     , (3.34)
                                    i=1
                                                           (i)i
where χ(A) = 1 if A is true and χ(A) = 0 otherwise.
   The next determinant (to be precise, the special case y = 0), whose evaluation is
stated in the theorem below, seems to be closely related to the Mills–Robbins–Rumsey
determinant (3.30), although it is in fact a lot easier to evaluate. Indications that
the evaluation (3.30) is much deeper than the following evaluation are, first, that it
does not seem to be possible to introduce a second parameter into the Mills–Robbins–
Rumsey determinant (3.30) in a similar way, and, second, the much more irregular form
of the right-hand side of (3.30) (it contains many floor functions!), as opposed to the
right-hand side of (3.35).
Theorem 40. Let x, y, n be nonnegative integers. Then there holds
                                        
                (x + y + i + j − 1)!
    det
 0≤i,j≤n−1   (x + 2i − j)! (y + 2j − i)!
                              Y i! (x + y + i − 1)! (2x + y + 2i)i (x + 2y + 2i)i
                              n−1
                            =                                                     . (3.35)
                              i=0
                                               (x + 2i)! (y + 2i)!


   This determinant evaluation is due to the author, who proved it in [90, (5.3)] as an
aside to the (much more difficult) determinant evaluations which were needed there to
settle a conjecture by Robbins and Zeilberger about a generalization of the enumeration
of totally symmetric self-complementary plane partitions. (These are the determinant
evaluations of Theorems 43 and 45 below.) It was proved there by “identification of
factors”. However, Amdeberhan [2] observed that it can be easily proved by “conden-
sation”.
   Originally there was no application for (3.35). However, not much later, Ciucu [29]
found not just one application. He observed that if the determinant evaluation (3.35)
is suitably combined with his beautiful Matchings Factorization Theorem [26, Theo-
rem 1.2] (and some combinatorial considerations), then not only does one obtain simple
proofs for the evaluation of the Andrews determinant (3.22) and the Mills–Robbins–
Rumsey determinant (3.30), but also simple proofs for the enumeration of four different
40                                      C. KRATTENTHALER

symmetry classes of plane partitions, cyclically symmetric plane partitions, cyclically
symmetric self-complementary plane partitions (first proved by Kuperberg [96]), cycli-
cally symmetric transpose-complementary plane partitions (first proved by Mills, Rob-
bins and Rumsey [112]), and totally symmetric self-complementary plane partitions (first
proved by Andrews [8]).
   A q-analogue of the previous determinant evaluation is contained in [89, Theorem 1].
Again, Amdeberhan [2] observed that it can be easily proved by means of “condensa-
tion”.
Theorem 41. Let x, y, n be nonnegative integers. Then there holds
                                                           
                  (q; q)x+y+i+j−1              q −2ij
    det
 0≤i,j≤n−1   (q; q)x+2i−j (q; q)y+2j−i (−q x+y+1 ; q)i+j
                          Y
                          n−1          2 2
                                   2 (q ; q )i (q; q)x+y+i−1 (q
                                                                2x+y+2i
                                                                        ; q)i (q x+2y+2i ; q)i
                       =      q −2i                                   x+y+1 ; q)
                                                                                               . (3.36)
                          i=0
                                           (q; q) x+2i (q; q)y+2i (−q            n−1+i



   The reader should observe that this is not a straightforward q-analogue of (3.35) as it
does contain the terms (−q x+y+1 ; q)i+j in the determinant, respectively (−q x+y+1 ; q)n−1+i
in the denominator of the right-hand side product, which can be cleared only if q = 1.
   A similar determinant evaluation, with some overlap with (3.36), was found by An-
drews and Stanton [10, Theorem 8] by making use of LU-factorization, in their “étude”
on the Andrews and the Mills–Robbins–Rumsey determinant.
Theorem 42. Let x and E be indeterminates and n be a nonnegative integer. Then
there holds
                                                                       
              (E/xq i ; q 2)i−j (q/Exq i; q 2)i−j (1/x2 q 2+4i; q 2)i−j
     det
  0≤i,j≤n−1     (q; q)2i+1−j (1/Exq 2i; q)i−j (E/xq 1+2i; q)i−j
                                 Y
                                 n−1
                                         (x2q 2i+1; q)i (xq 3+i/E; q 2 )i (Exq 2+i; q 2)i
                             =                                                                   . (3.37)
                                 i=0
                                     (x2q 2i+2; q 2)i (q; q 2)i+1 (Exq 1+i ; q)i (xq 2+i /E; q)i


   The next group of determinants is (with one exception) from [90]. These determi-
nants were needed in the proof of a conjecture by Robbins and Zeilberger about a
generalization of the enumeration of totally symmetric self-complementary plane parti-
tions.
Theorem 43. Let x, y, n be nonnegative integers. Then
                                                        
                 (x + y + i + j − 1)! (y − x + 3j − 3i)
        det
     0≤i,j≤n−1     (x + 2i − j + 1)! (y + 2j − i + 1)!
                  Y  i! (x + y + i − 1)! (2x + y + 2i + 1)i (x + 2y + 2i + 1)i 
                  n−1
               =
                  i=0
                                       (x + 2i + 1)! (y + 2i + 1)!
                             Xn        
                                     k n
                           ·     (−1)      (x)k (y)n−k .                          (3.38)
                                        k
                             k=0
                                ADVANCED DETERMINANT CALCULUS                                        41



   This is Theorem 8 from [90]. A q-analogue, provided in [89, Theorem 2], is the
following theorem.
Theorem 44. Let x, y, n be nonnegative integers. Then there holds
           
             (q; q)x+y+i+j−1 (1 − q y+2j−i − q y+2j−i+1 + q x+y+i+j+1 )
    det
 0≤i,j≤n−1                   (q; q)x+2i−j+1 (q; q)y+2j−i+1
                                                                              
                                                                q −2ij
                                                        ·
                                                          (−q x+y+2 ; q)i+j
              Y
              n−1            2 2                      2x+y+2i+1
                                                                ; q)i (q x+2y+2i+1 ; q)i
                                                                                           
                      −2i2 (q ; q )i (q; q)x+y+i−1 (q
           =        q
              i=0
                                 (q; q)x+2i+1 (q; q)y+2i+1 (−q x+y+2 ; q)n−1+i
                                              X n             
                                                        k nk n
                                            ×     (−1) q            q yk (q x; q)k (q y ; q)n−k . (3.39)
                                                               k q
                                                k=0



  Once more, Amdeberhan observed that, in principle, Theorem 43 as well as The-
orem 44 could be proved by means of “condensation”. However, as of now, nobody
provided a proof of the double sum identities which would establish (2.16) in these
cases.
  We continue with Theorems 2 and Corollary 3 from [90].
Theorem 45. Let x, m, n be nonnegative integers with m ≤ n. Under the convention
that sums are interpreted by
                                     PB
                                    
                                       r=A+1 Expr(r)  A<B
                     XB
                          Expr(r) =   0                A=B
                                    
                                    − PA
                    r=A+1
                                        r=B+1 Expr(r) A > B,
there holds
                          X                          
                                        2x + m + i + j
     det
  0≤i,j≤n−1
                     x+2i−j<r≤x+m+2j−i
                                              r
          Y
          n−1
                     (2x + m + i)! (3x + m + 2i + 2)i (3x + 2m + 2i + 2)i
                                                                               
      =
           i=1
                                    (x + 2i)! (x + m + 2i)!
                                     bn/2c−1
                   (2x + m)!           Y
           ×                       ·         (2x + 2 dm/2e + 2i + 1) · P1 (x; m, n), (3.40)
             (x + bm/2c)! (x + m)!     i=0

where P1 (x; m, n) is a polynomial in x of degree ≤ bm/2c.
  In particular, for m = 0 the determinant equals
             
             
                                                Q
                                                n/2−1
                  
              Y i! (2x + i)! (3x + 2i + 2)2
               n−1                                  (2x + 2i + 1)
                                            i    i=0
                                                                                n even          (3.41)
             
                            (x + 2i)!2              (n − 1)!!
             
              i=0
               0                                                                n odd,
42                                     C. KRATTENTHALER

for m = 1, n ≥ 1, it equals
                                                                      Q
                                                                    bn/2c−1

       Y
       n−1
             i! (2x + i + 1)! (3x + 2i + 3)i (3x + 2i + 4)i
                                                                
                                                                      i=0
                                                                              (2x + 2i + 3)
                                                                                              ,   (3.42)
       i=0
                         (x + 2i)! (x + 2i + 1)!                        (2 bn/2c − 1)!!
for m = 2, n ≥ 2, it equals
                                                                  Q
                                                                bn/2c−1

     Y
     n−1
           i! (2x + i + 2)! (3x + 2i + 4)i (3x + 2i + 6)i
                                                            
                                                                  i=0
                                                                          (2x + 2i + 3)

     i=0
                       (x + 2i)! (x + 2i + 2)!               (2 bn/2c − 1)!!
                                                             (
                                                      1        (x + n + 1) n even
                                                 ×         ·                                      (3.43)
                                                   (x + 1)     (2x + n + 2) n odd,
for m = 3, n ≥ 3, it equals
                                                                  Q
                                                                bn/2c−1

     Y
     n−1
           i! (2x + i + 3)! (3x + 2i + 5)i (3x + 2i + 8)i
                                                            
                                                                  i=0
                                                                          (2x + 2i + 5)

     i=0
                       (x + 2i)! (x + 2i + 3)!               (2 bn/2c − 1)!!
                                                            (
                                                     1        (x + 2n + 1) n even
                                                ×         ·                                       (3.44)
                                                  (x + 1)     (3x + 2n + 5) n odd,
and for m = 4, n ≥ 4, it equals

                                                                   Q
                                                                 bn/2c−1

     Y
     n−1
           i! (2x + i + 4)! (3x + 2i + 6)i (3x + 2i + 10)i
                                                            
                                                             i=0
                                                                  (2x + 2i + 5)

     i=0
                       (x + 2i)! (x + 2i + 4)!                (2 bn/2c − 1)!!
                                        (
                              1          (x2 + (4n + 3)x + 2(n2 + 4n + 1)) n even
                   ×                  ·                                                           (3.45)
                      (x + 1)(x + 2)     (2x + n + 4)(2x + 2n + 4)            n odd.



  One of the most embarrassing failures of “identification of factors,” respectively of
LU-factorization, is the problem of q-enumeration of totally symmetric plane partitions,
as stated for example in [164, p. 289] or [165, p. 106]. It is now known for quite a
while that also this problem can be reduced to the evaluation of a certain determinant,
by means of Okada’s result [123, Theorem 4] about the sum of all minors of a given
matrix, that was already mentioned in Section 2.8. In fact, in [123, Theorem 5], Okada
succeeded to transform the resulting determinant into a reasonably simple one, so that
the problem of q-enumerating totally symmetric plane partitions reduces to resolving
the following conjecture.
Conjecture 46. For any nonnegative integer n there holds
                                       Y  1 − q i+j+k−1 2
                        (1)  (2)
                 det Tn + Tn =                                ,                                   (3.46)
               1≤i,j≤n                          1 − q i+j+k−2
                                    1≤i≤j≤k≤n
                          ADVANCED DETERMINANT CALCULUS                                43


                                                     !!
where
                                            
                                    i+j−2      i+j−1
               Tn(1) =   q i+j−1           +q
                                     i−1 q       i   q            1≤i,j≤n
and                                                    
                       1+q
                      −1 1 + q 2             0         
                                                       
                           −1 1 + q 3
                                                        
                Tn = 
                 (2)
                                 −1 1 + q 4            .
                                                        
                                                       
                            0
                                       ...   ...        
                                             −1 1 + q n
  While the problem of (plain) enumeration of totally symmetric plane partitions was
solved a few years ago by Stembridge [170] (by some ingenious transformations of the
determinant which results directly from Okada’s result on the sum of all minors of a
matrix), the problem of q-enumeration is still wide open. “Identification of factors”
cannot even get started because so far nobody came up with a way of introducing a
parameter in (3.46) or any equivalent determinant (as it turns out, the parameter q
cannot serve as a parameter in the sense of Section 2.4), and, apparently, guessing the
LU-factorization is too difficult.
  Let us proceed by giving a few more determinants which arise in the enumeration of
rhombus tilings.
  Our next determinant evaluation is the evaluation of a determinant which, on dis-
regarding the second binomial coefficient, would be just a special case of (3.13), and
which, on the other hand, resembles very much the q = 1 case of (3.18). (It is the
determinant that was shown as (1.4) in the Introduction.) However, neither Lemma 3
nor Lemma 5 suffice to give a proof. The proof in [30] by means of “identification of
factors” is unexpectedly difficult.
Theorem 47. Let n be a positive integer, and let x and y be nonnegative integers.
Then the following determinant evaluation holds:
                                    
             x+y+j           x+y+j
    det                  −
  1≤i,j≤n    x − i + 2j      x + i + 2j
                Y (j − 1)! (x + y + 2j)! (x − y + 2j + 1)j (x + 2y + 3j + 1)n−j
                 n
             =                                                                  . (3.47)
                j=1
                                    (x  + n + 2j)! (y + n − j)!


  This determinant evaluation is used in [30] to enumerate rhombus tilings of a certain
pentagonal subregion of a hexagon.
  To see an example of different nature, I present a determinant evaluation from [50,
Lemma 2.2], which can be considered as a determinant of a mixture of two matrices,
out of one we take all rows except the l-th, while out of the other we take just the l-th
row. The determinants of both of these matrices could be straightforwardly evaluated
by means of Lemma 3. (They are in fact equivalent to special cases of (3.13).) However,
to evaluate this mixture is much more challenging. In particular, the mixture does not
44                                  C. KRATTENTHALER

anymore factor completely into “nice” factors, i.e., the result is of the form (2.21), so
that for a proof one has to resort to the extension of “identification of factors” described
there.
Theorem 48. Let n, m, l be positive integers such that 1 ≤ l ≤ n. Then there holds
                                     
           n+m−i (m+ 2 ) if i 6= l
                     n−j+1


   det  m+i−j  (n+j−2i+1)             
 1≤i,j≤n   n+m−i              if i = l
               m+i−j
                                        bn/2c                                
       Y
       n
                  (n + m − i)!           Y                             1
  =                                            (m + i)n−2i+1 (m + i + )n−2i
      i=1
           (m + i − 1)! (2n − 2i + 1)! i=1                             2
                      Qn                          
    (n−1)(n−2) (m)n+1   j=1 (2j − 1)!
                                      X
                                      l−1
                                                             (n − 2e) ( 12 )e
                                                e n
 ×2     2
                  Q                       (−1)                                     . (3.48)
                n! bn/2c
                    i=1 (2i)2n−4i+1 e=0
                                                  e (m + e) (m + n − e) ( 12 − n)e


  In [50], this result was applied to enumerate all rhombus tilings of a symmetric
hexagon that contain a fixed rhombus. In Section 4 of [50] there can be found several
conjectures about the enumeration of rhombus tilings with more than just one fixed
rhombus, all of which amount to evaluating other mixtures of the above-mentioned two
determinants.
  As last binomial determinants, I cannot resist to show the, so far, weirdest deter-
minant evaluations that I am aware of. They arose in an attempt [16] by Bombieri,
Hunt and van der Poorten to improve on Thue’s method of approximating an algebraic
number. In their paper, they conjectured the following determinant evaluation, which,
thanks to van der Poorten [132], has recently become a theorem (see the subsequent
paragraphs and, in particular, Theorem 51 and the remark following it).
Theorem 49. Let N and l be positive integers. Let M be the matrix with rows labelled
by pairs (i1, i2) with 0 ≤ i1 ≤ 2l(N − i2) − 1 (the intuition is that the points (i1, i2 ) are
the lattice points in a right-angled triangle), with columns labelled by pairs (j1, j2 ) with
0 ≤ j2 ≤ N and 2l(N − j2 ) ≤ j1 ≤ l(3N − 2j2 ) − 1 (the intuition is that the points
(j1, j2 ) are the lattice points in a lozenge), and entry in row (i1, i2) and column (j1, j2 )
equal to                                    
                                            j1   j2
                                                      .
                                            i1    i2
Then the determinant of M is given by
                                      Ql−1 Q3l−1 !(N3+2)
                                        k=0 k!       k!
                                  ±       Q2l−1 k=2l          .
                                            k=l k!

   This determinant evaluation is just one in a whole series of conjectured determinant
evaluations and greatest common divisors of minors of a certain matrix, many of them
reported in [16]. These conjectures being settled, the authors of [16] expect important
implications in the approximation of algebraic numbers.
   The case N = 1 of Theorem 49 is a special case of (3.11), and, thus, on a shallow
level. On the other hand, the next case, N = 2, is already on a considerably deeper
                              ADVANCED DETERMINANT CALCULUS                                             45

level. It was first proved in [94], by establishing, in fact, a much more general result,
given in the next theorem. It reduces to the N = 2 case of Theorem 49 for x = 0,
b = 4l, and c = 2l. (In fact, the x = 0 case of Theorem 50 had already been conjectured
in [16].)
Theorem 50. Let b, c be nonnegative integers, c ≤ b, and let ∆(x; b, c) be the determi-
nant of the (b + c) × (b + c) matrix

                                0≤j<c                      c ≤ j <b b ≤ j <b+c
                                              .. .                ...             
             0≤i<c                    x+j          ..        x + j     .. 2x + j            
                                                    .
                                                     ..                  .
                                                                         ..                  
                               ............................................................
                                          i           .         i         .       i          
                                                     ..            ..               
                                                      ..                 .. 2x + j          
             c≤i<b                                           x+j                            .   (3.49)
                                         0             .
                                                        ..                 .
                                                                           ..
                               ............................................................
                                                         .      i           .     i
                                                                                             
                                                                                             
                                              ..                 ..                     
                                      x + j ...              x+j           ..               
             b≤i <b+c              2                     ..                  ..0
                                                                              ..
                                        i − b ..               i−b             .
Then
  (i) ∆(x; b, c) = 0 if b is even and c is odd;
 (ii) if any of these conditions does not hold, then
                                            
                          Y
                          b−c
                                i + 12 − 2b c
                      c c
  ∆(x; b, c) = (−1) 2
                          i=1
                                      (i)c
                                                         b−c+i 
          Yc           x + c+i2
                                                       x +     2      d(b+i)/2e−d(b−c+i)/2e
       ×            b   c+i b−c+di/2e−d(c+i)/2e 1  b   b−c+i                              .
          i=1 2
               1
                 −   2
                         +    2    b−c+di/2e−d(c+i)/2e 2
                                                         −   2
                                                                 +      2     d(b+i)/2e−d(b−c+i)/2e

                                                                                                  (3.50)


   The proof of this result in [94] could be called “heavy”. It proceeded by “identification
of factors”. Thus, it was only the introduction of the parameter x in the determinant in
(3.49) that allowed the attack on this special case of the conjecture of Bombieri, Hunt
and van der Poorten. However, the authors of [94] (this includes myself) failed to find a
way to introduce a parameter into the determinant in Theorem 49 for generic N (that
is, in a way such the determinant would still factor nicely). This was accomplished by
van der Poorten [132]. He first changed the entries in the determinant slightly, without
changing the value of the determinant, and then was able to introduce a parameter. I
state his result, [132, Sec. 5, Main Theorem], in the theorem below. For the proof of
his result he used “identification of factors” as well, thereby considerably simplifying
and illuminating arguments from [94].
Theorem 51. Let N and l be positive integers. Let M be the matrix with rows labelled
by pairs (i1 , i2) with 0 ≤ i1 ≤ 2l(N − i2 ) − 1, with columns labelled by pairs (j1 , j2) with
0 ≤ j2 ≤ N and 0 ≤ j1 ≤ lN − 1, and entry in row (i1, i2) and column (j1 , j2 ) equal to
                                                        
                                    i1 −j1 −x(N − j2 )     j2
                                (−1)                          .                          (3.51)
                                              i1 − j1      i2
46                                        C. KRATTENTHALER

Then the determinant of M is given by

                            Yl                 !(N3+2)
                                x+i−1      l+i−1
                          ±                                 .
                            i=1
                                 2i − 1     2i − 1

  Although not completely obvious, the special case x = −2l establishes Theorem 49,
see [132]. Van der Poorten proves as well an evaluation that overlaps with the x = 0
case of Theorem 50, see [132, Sec. 6, Example Application].
     Let us now turn to a few remarkable Hankel determinant evaluations.
Theorem 52. Let n be a positive integer. Then there hold
                                                            Y
                                                            n−1
                                        det   (E2i+2j ) =         (2i)!2,            (3.52)
                                  0≤i,j≤n−1
                                                            i=0

where E2k is
          Pthe (2k)-th (signless) Euler number, defined through the generating function
             ∞
1/ cos z = k=0 E2k z 2k /(2k)!, and
                                                            Y
                                                            n−1
                                  det      (E2i+2j+2 ) =          (2i + 1)!2 .       (3.53)
                               0≤i,j≤n−1
                                                            i=0
                                                              P
   Furthermore, define the Bell polynomials Bm (x) by Bm (x) = m           k
                                                               k=1 S(m, k)x , where
S(m, k) is a Stirling number of the second kind (the number of partitions of an m-
element set into k blocks; cf. [166, p. 33]). Then
                                                                       Y
                                                                       n−1
                                  det      (Bi+j (x)) = xn(n−1)/2            i!.     (3.54)
                              0≤i,j≤n−1
                                                                       i=0

     Next, there holds
                                                                         Y
                                                                         n−1
                                                             n(n−1)/2
                               det      (Hi+j (x)) = (−1)                      i!,   (3.55)
                            0≤i,j≤n−1
                                                                         i=0
                P                  k
                         m!
where Hm (x) = k≥0 k! (m−2k)!  − 12 xm−2k is the m-th Hermite polynomial.
  Finally, the following Hankel determinant evaluations featuring Bernoulli numbers
hold,
                                                     n      Y
                                                            n−1
                                                                       i!6
                            det       (Bi+j ) = (−1)( 2 )                       ,    (3.56)
                         0≤i,j,≤n−1
                                                            i=1
                                                                (2i)! (2i + 1)!
and
                                          n+1 1 Y
                                                 n−1
                                         (   )           i!3 (i + 1)!3
                     det (Bi+j+1 ) = (−1)  2                             ,           (3.57)
                  0≤i,j,≤n−1                   2 i=1 (2i + 1)! (2i + 2)!
and
                                           n 1 Y i! (i + 1)! (i + 2)!
                                                  n−1           4
                      det (Bi+j+2 ) = (−1)( 2 )                           ,          (3.58)
                   0≤i,j,≤n−1                   6 i=1 (2i + 2)! (2i + 3)!
                             ADVANCED DETERMINANT CALCULUS                                   47

and
                                                Y
                                                n−1
                                                    (2i)! (2i + 1)!4 (2i + 2)!
                      det       (B2i+2j+2 ) =                                  ,         (3.59)
                   0≤i,j,≤n−1
                                                i=0
                                                       (4i + 2)! (4i + 3)!
and
                                                      Y
                                                      n
                                                        (2i − 1)! (2i)!4 (2i + 1)!
                   det       (B2i+2j+4 ) = (−1)n                                     .   (3.60)
                0≤i,j,≤n−1
                                                      i=1
                                                              (4i)! (4i + 1)!


   All these evaluations can be deduced from continued fractions and orthogonal poly-
nomials, in the way that was described in Section 2.7. To prove (3.52) and (3.53)
one would resort to suitable special cases of Meixner–Pollaczek polynomials (see [81,
Sec. 1.7]), and use an integral representation for Euler numbers, given for example in
[122, p. 75],
                                                Z ∞√−1
                                           √            (2z)2ν
                           E2ν = (−1)  ν+1
                                             −1     √
                                                               dz.
                                                 −∞ −1 cos πz
Slightly different proofs of (3.52) can be found in [1] and [108, App. A.5], together
with more Hankel determinant evaluations (among which are also (3.56) and (3.58),
respectively). The evaluation (3.54) can be derived by considering Charlier polyno-
mials (see [35] for such a derivation in a special case). The evaluation (3.55) follows
from the fact that Hermite polynomials are moments of slightly shifted Hermite poly-
nomials, as explained in [71]. In fact, the papers [71] and [72] contain more examples
of orthogonal polynomials which are moments, thus in particular implying Hankel de-
terminant evaluations whose entries are Laguerre polynomials, Meixner polynomials,
and Al-Salam–Chihara polynomials. Hankel determinants where the entries are (clas-
sical) orthogonal polynomials are also considered in [77], where they are related to
Wronskians of orthogonal polynomials. In particular, there result Hankel determinant
evaluations with entries being Legendre, ultraspherical, and Laguerre polynomials [77,
(12.3), (14.3), (16.5), § 28], respectively. The reader is also referred to [103], where
illuminating proofs of these identities between Hankel determinants and Wronskians
are given, by using the fact that Hankel determinants can be seen as certain Schur
functions of rectangular shape, and by applying a ‘master identity’ of Turnbull [178,
p. 48] on minors of a matrix. (The evaluations (3.52), (3.55) and (3.56) can be found in
[103] as well, as corollaries to more general results.) Alternative proofs of (3.52), (3.54)
and (3.55) can be found in [141], see also [139] and [140].
   Clearly, to prove (3.56)–(3.58) one would proceed in the same way as in Section 2.7.
(Identity (3.58) is in fact the evaluation (2.38) that we derived in Section 2.7.) The
evaluations (3.59) and (3.60) are equivalent to (3.58), because the matrix underlying
the determinant in (3.58) has a checkerboard pattern (recall that Bernoulli numbers
with odd indices are zero, except for B1 ), and therefore decomposes into the prod-
uct of a determinant of the form (3.59) and a determinant of the form (3.60). Very
interestingly, variations of (3.56)–(3.60) arise as normalization constants in statistical
mechanics models, see e.g. [14, (4.36)], [32, (4.19)], and [108, App. A.5]. A common
generalization of (3.56)–(3.58) can be found in [51, Sec. 5]. Strangely enough, it was
needed there in the enumeration of rhombus tilings.
48                                  C. KRATTENTHALER

   In view of Section 2.7, any continued fraction expansion of the form (2.30) gives rise
to a Hankel determinant evaluation. Thus, many more Hankel determinant evaluations
follow e.g. from work by Rogers [151], Stieltjes [171, 172], Flajolet [44], Han, Randri-
anarivony and Zeng [65, 64, 142, 143, 144, 145, 146, 201], Ismail, Masson and Valent
[70, 73] or Milne [113, 114, 115, 116], in particular, evaluations of Hankel determinant
featuring Euler
              P∞numbers with    odd indices (these are given through the generating func-
                           2k+1
tion tan z = k=0 E2k+1 z        /(2k + 1)!), Genocchi numbers, q- and other extensions of
Catalan, Euler and Genocchi numbers, and coefficients in the power series expansion
of Jacobi elliptic functions. Evaluations of the latter type played an important role in
Milne’s recent beautiful results [113, 114] on the number of representations of integers
as sums of m-th powers (see also [108, App. A.5]).
   For further evaluations of Hankel determinants, which apparently do not follow from
known results about continued fractions or orthogonal polynomials, see [68, Prop. 14]
and [51, Sec. 4].
     Next we state two charming applications of Lemma 16 (see [189]).
Theorem 53. Let x be a nonnegative integer. For any nonnegative integer n there
hold
                                                    n+1
                             (xi)!                   x ( 2 )
                   det               S(xi + j, xi) =                     (3.61)
                 0≤i,j≤n   (xi + j)!                 2
where S(m, k) is a Stirling number of the second kind (the number of partitions of an
m-element set into k blocks; cf. [166, p. 33]), and
                                                     
                                                          x ( 2 )
                                                              n+1
                                (xi)!
                      det               s(xi + j, xi) = −          ,           (3.62)
                    0≤i,j≤n   (xi + j)!                   2
where s(m, k) is a Stirling number of the first kind (up to sign, the number of permu-
tations of m elements with exactly k cycles; cf. [166, p. 18]).

Theorem 54. Let Aij denote the number of representations of j as a sum of i squares
of nonnegative integers. Then det0≤i,j≤n (Aij ) = 1 for any nonnegative integer n. The
same is true if “squares” is replaced by “cubes,” etc.

   After having seen so many determinants where rows and columns are indexed by
integers, it is time for a change. There are quite a few interesting determinants whose
rows and columns are indexed by (other) combinatorial objects. (Actually, we already
encountered one in Conjecture 49.)
   We start by a determinant where rows and columns are indexed by permutations.
Its beautiful evaluation was obtained at roughly the same time by Varchenko [184] and
Zagier [193].
Theorem 55. For any positive integer n there holds
                                 Y n
                      inv(σπ−1 )
                                                      n
               det q              =    (1 − q i(i−1))( i )(i−2)! (n−i+1)! ,       (3.63)
                    σ,π∈Sn
                                          i=2

where Sn denotes the symmetric group on n elements.
                           ADVANCED DETERMINANT CALCULUS                                    49

   This determinant evaluation appears in [193] in the study of certain models in infinite
statistics. However, as Varchenko et al. [20, 153, 184] show, this determinant evaluation
is in fact just a special instance in a whole series of determinant evaluations. The
latter papers give evaluations of determinants corresponding to certain bilinear forms
associated to hyperplane arrangements and matroids. Some of these bilinear forms
are relevant to the study of hypergeometric functions and the representation theory
of quantum groups (see also [185]). In particular, these results contain analogues of
(3.63) for all finite Coxeter groups as special cases. For other developments related to
Theorem 55 (and different proofs) see [36, 37, 40, 67], tying the subject also to the
representation theory of the symmetric group, to noncommutative symmetric functions,
and to free Lie algebras, and [109]. For more remarkable determinant evaluations related
to hyperplane arrangements see [39, 182, 183]. For more determinant evaluations related
to hypergeometric functions and quantum groups and algebras, see [175, 176], where
determinants arising in the context of Knizhnik-Zamolodchikov equations are computed.
   The results in [20, 153] may be considered as a generalization of the Shapovalov de-
terminant evaluation [159], associated to the Shapovalov form in Lie theory. The latter
has since been extended to Kac–Moody algebras (although not yet in full generality),
see [31].
   There is a result similar to Theorem 55 for another prominent permutation statistics,
MacMahon’s major index. (The major index maj(π) is defined as the sum of all positions
of descents in the permutation π, see e.g. [46].)
Theorem 56. For any positive integer n there holds
                                       Yn
                            maj(σπ−1 )
                    det q               =    (1 − q i )n! (i−1)/i.                      (3.64)
                         σ,π∈Sn
                                                 i=2

  As Jean–Yves Thibon explained to me, this determinant evaluation follows from
results about the descent algebra of the symmetric group given in [95], presented
there in an equivalent form, in terms of noncommutative symmetric functions. For
the details
          of Thibon’s argument        see Appendix C. Also the bivariate determinant
            des(σπ−1 ) maj(σπ−1 )
detσ,π∈Sn x           q             seems to possess an interesting factorization.
   The next set of determinant evaluations shows determinants where the rows and
columns are indexed by set partitions. In what follows, the set of all partitions of
{1, 2, . . . , n} is denoted by Πn . The number of blocks of a partition π is denoted by
bk(π). A partition π is called noncrossing, if there do not exist i < j < k < l such
that both i and k belong to one block, B1 say, while both j and l belong to another
block which is different from B1 . The set of all noncrossing partitions of {1, 2, . . . , n}
is denoted by NCn . (For more information about noncrossing partitions see [160].)
   Further, poset-theoretic, notations which are needed in the following theorem are:
Given a poset P , the join of two elements x and y in P is denoted by x ∨P y, while
the meet of x and y is denoted by x ∧P y. The characteristic polynomial of a poset
P is written as χP (q) (that is, if the maximum
                                           P         element of P has rank h and µ is the
                                                            h−rank(p)
Möbius function of P , then χP (q) :=        p∈P µ(0̂, p)q           , where 0̂ stands for the
minimal element of P ). The symbol χ̃P (q) denotes the reciprocal polynomial q h χP (1/q)
of χP (q). Finally, P ∗ is the order-dual of P .
50                                               C. KRATTENTHALER

Theorem 57. Let n be a positive integer. Then
                                         n             (ni)B(n−i)
                          bk(π∧Πn γ)
                                      Y
                   det q              =      q χ̃Π∗i (q)            ,                             (3.65)
                        π,γ∈Πn
                                                              i=1

where B(k) denotes the k-th Bell number (the total number of partitions of a k-element
set; cf. [166, p. 33]). Furthermore,
                                               n          S(n,i)
                                 bk(π∨Πn γ)
                                             Y
                          det q              =    q χΠi (q)        ,             (3.66)
                                π,γ∈Πn
                                                                i=1

where S(m, k) is a Stirling number of the second kind (the number of partitions of an
m-element set into k blocks; cf. [166, p. 33]). Next,
                                                 n            (2n−1−i
                                           2n−1 Y                 n−1 )
                   det q bk(π∧NCn γ) = q ( n )        χ̃NCi (q)          ,     (3.67)
                  π,γ∈NCn
                                                                      i=1
and
                                                                      n 
                                                                      Y             (2n−1−i
                                      bk(π∨NCn γ)
                                                             1  2n
                                                                ( )                     n−1 )
                      det         q                     =q   n+1 n          χNCi (q)          ,   (3.68)
                  π,γ∈NCn
                                                                      i=1
Finally,
                                                    2n−1     Y
                                                              n−1            √      i+1 2n
                                                                       Ui+1 ( q/2) n (n−1−i)
                det         q   bk(π∨Πn γ)
                                                 = q( n )                    √               ,    (3.69)
              π,γ∈NCn
                                                              i=1
                                                                      qUi−1 ( q/2)
                  P           j m−j
                                                 
where Um (x) :=       j≥0 (−1)   j
                                                  (2x)m−2j is the m-th Chebyshev polynomials of the
second kind.
  The evaluations (3.65)–(3.68) are due to Jackson [75]. The last determinant eval-
uation, (3.69), is the hardest among those. It was proved independently by Dahab
[33] and Tutte [181]. All these determinants are related to the so-called Birkhoff–Lewis
equation from chromatic graph theory (see [33, 180] for more information).
  A determinant of somewhat similar type appeared in work by Lickorish [104] on 3-
manifold invariants. Let NCmatch(2n) denote the set of all noncrossing perfect match-
ings of 2n elements. Equivalently, NCmatch(2n) can be considered as the set of all
noncrossing partitions of 2n elements with all blocks containing exactly 2 elements.
Lickorish considered a bilinear form on the linear space spanned by NCmatch(2n). The
corresponding determinant was evaluated by Ko and Smolinsky [80] using an elegant
recursive approach, and independently by Di Francesco [47], whose calculations are
done within the framework of the Temperley–Lieb algebra (see also [49]).
Theorem 58. For α, β ∈ NCmatch(2n), let c(α, β) denote the number of connected
components when the matchings α and β are superimposed. Equivalently, c(α, β) =
bk(α ∨Π2n β). For any positive integer n there holds
                                        c(α,β)
                                                Yn
                           det        q         =   Ui (q/2)a2n,2i ,      (3.70)
                            α,β∈NCmatch(2n)
                                                                      i=1

where Um (q) is the Chebyshev polynomial of the second    kind nas given
                                                                         in Theorem 57,
and where a2n,2i = c2n,2i − c2n,2i+2 with cn,h = (n−h)/2
                                                    n
                                                          − (n−h)/2−1 .
                              ADVANCED DETERMINANT CALCULUS                                           51

   Di Francesco [47, Theorem 2] does also provide a generalization to partial matchings,
and in [48] a generalization in an SU(n) setting, the previously mentioned results being
situated in the SU(2) setting. While the derivations in [47] are mostly combinatorial,
the derivations in [48] are based on computations in quotients of type A Hecke algebras.
  There is also an interesting determinant evaluation, which comes to my mind, where
rows and columns of the determinant are indexed by integer partitions. It is a result
due to Reinhart [147]. Interestingly, it arose in the analysis of algebraic differential
equations.
   In concluding, let me attract your attention to other determinant evaluations which
I like, but which would take too much space to state and introduce properly.
   For example, there is a determinant evaluation, conjectured by Good, and proved by
Goulden and Jackson [60], which arose in the calculation of cumulants of a statistic anal-
ogous to Pearson’s chi-squared for a multinomial sample. Their method of derivation
is very combinatorial, in particular making use of generalized ballot sequences.
   Determinants arising from certain raising operators of sl(2)-representations are pre-
sented in [136]. As special cases, there result beautiful determinant evaluations where
rows and columns are indexed by integer partitions and the entries are numbers of
standard Young tableaux of skew shapes.
   In [84, p. 4] (see also [192]), an interesting mixture of linear algebra and combinatorial
matrix theory yields, as a by-product, the evaluation of the determinant of certain
incidence mappings. There, rows and columns of the relevant matrix are indexed by all
subsets of an n-element set of a fixed size.
   As a by-product of the analysis of an interesting matrix in quantum information
theory [93, Theorem 6], the evaluation of a determinant of a matrix whose rows and
columns are indexed by all subsets of an n-element set is obtained.
   Determinant evaluations of q-hypergeometric functions are used in [177] to compute
q-Selberg integrals.
   And last, but not least, let me once more mention the remarkable determinant evalu-
ation, arising in connection with holonomic q-difference equations, due to Aomoto and
Kato [11, Theorem 3], who thus proved a conjecture by Mimachi [118].

Appendix A: A word about guessing
   The problem of guessing a formula for the generic element an of a sequence (an)n≥0
out of the first few elements was present at many places, in particular this is crucial for
a successful application of the “identification of factors” method (see Section 2.4) or of
LU-factorization (see Section 2.6). Therefore some elaboration on guessing is in order.
   First of all, as I already claimed, guessing can be largely automatized. This is due to
the following tools11 :
   1. Superseeker, the electronic version of the “Encyclopedia of Integer Sequences”
      [162, 161] by Neil Sloane and Simon Plouffe (see Footnote 2 in the Introduction),
  11
     In addition, one has to mention Frank Garvan’s qseries [54], which is designed for guessing and
computing within the territory of q-series, q-products, eta and theta functions, and the like. Procedures
like prodmake or qfactor, however, might also be helpful for the evaluation of “q-determinants”. The
package is available from http://www.math.ufl.edu/~frank/qmaple.html.
52                                      C. KRATTENTHALER

     2. gfun by Bruno Salvy and Paul Zimmermann and Mgfun by Frederic Chyzak (see
        Footnote 3 in the Introduction),
     3. Rate by the author (see Footnote 4 in the Introduction).
   If you send the first few elements of your sequence to Superseeker then, if it overlaps
with a sequence that is stored there, you will receive information about your sequence
such as where your sequence already appeared in the literature, a formula, generating
function, or a recurrence for your sequence.
   The Maple package gfun provides tools for finding a generating function and/or a
recurrence for your sequence. (In fact, Superseeker does also automatically invoke
features from gfun.) Mgfun does the same in a multidimensional setting.
   Within the “hypergeometric paradigm,” the most useful is the Mathematica pro-
gram Rate (“Rate!” is German for “Guess!”), respectively its Maple equivalent GUESS.
Roughly speaking, it allows to automatically guess “closed forms”.12 The program
is based on the observation that any “closed form” sequence (an)n≥0 that appears
within the “hypergeometric paradigm” is either given by a rational expression, like
an = n/(n + 1), or the sequence of successive quotients (an+1 /an )n≥0 is given by a ratio-
nal expression, like in the case of central binomial coefficients an = 2n
                                                                       n
                                                                          , or the sequence
of successive quotients of successive quotients ((an+2 /an+1 )/(an+1 /an ))n≥0 is given by
a rational expression, like in the case of the famous sequence of numbers of alternating
sign matrices (cf. the paragraphs following (3.9), and [18, 19, 111, 148, 97, 198, 199]
for information on alternating sign matrices),

                                                Y
                                                n−1
                                                    (3i + 1)!
                                         an =                 ,                                   (A.1)
                                                i=0
                                                     (n + i)!

etc. Given enough special values, a rational expression is easily found by rational
interpolation.
   This is implemented in Rate. Given the first m terms of a sequence, it takes the
first m − 1 terms and applies rational interpolation to these, then it applies rational
interpolation to the successive quotients of these m − 1 terms, etc. For each of the
obtained results it is tested if it does also give the m-th term correctly. If it does, then
the corresponding result is added to the output, if it does not, then nothing is added
to the output.
   Here is a short demonstration of the Mathematica program Rate. The output shows
guesses for the i0-th element of the sequence.
In[1]:= h hrate.m
In[2]:= Rate[1,2,3]
Out[2]= {i0}
In[3]:= Rate[2/3,3/4,4/5,5/6]


     12
     Commonly, by “closed form” (“NICE” in Zeilberger’s “terminology”) one means an expression
which is built by forming products and quotients of factorials. A strong indication that you encounter
a sequence (an )n≥0 for which a “closed form” exists is that the prime factors in the prime factorization
of an do not grow rapidly as n becomes larger. (In fact, they should grow linearly.)
                              ADVANCED DETERMINANT CALCULUS                                  53

            1 + i0
Out[3]= {------}
            2 + i0

Now we try the central binomial coefficients:

In[4]:= Rate[1,2,6,20,70]
            -1 + i0
                     2 (-1 + 2 i1)
Out[4]= {            -------------}
                             i1
             i1=1

It needs the first 8 values to guess the formula (A.1) for the numbers of alternating sign
matrices:

In[5]:= Rate[1,2,7,42,429,7436,218348,10850216]
            -1 + i0        -1 + i1
                                     3 (2 + 3 i2) (4 + 3 i2)
Out[5]= {            2 (             -----------------------)}
                                     4 (1 + 2 i2) (3 + 2 i2)
             i1=1           i2=1




   However, what if we encounter a sequence where all these nice automatic tools fail?
Here are a few hints. First of all, it is not uncommon to encounter a sequence (an)n≥0
which has actually a split definition. For example, it may be the case that the subse-
quence (a2n )n≥0 of even-numbered terms follows a “nice” formula, and that the subse-
quence (a2n+1)n≥0 of odd-numbered terms follows as well a “nice,” but different, formula.
Then Rate will fail on any number of first terms of (an )n≥0 , while it will give you some-
thing for sufficiently many first terms of (a2n)n≥0 , and it will give you something else
for sufficiently many first terms of (a2n+1 )n≥0 .
   Most of the subsequent hints apply to a situation where you encounter a sequence
p0 (x), p1(x), p2 (x), . . . of polynomials pn (x) in x for which you want to find (i.e., guess)
a formula. This is indeed the situation in which you are generally during the guessing
for “identification of factors,” and also usually when you perform a guessing where a
parameter is involved.
   To make things concrete, let us suppose that the first 10 elements of your sequence
of polynomials are
54                                     C. KRATTENTHALER



                          1                       1                                 
                            6 + 31x − 15x2 + 20x3 ,
     1, 1 + 2x, 1 + x + 3x2 ,                          12 − 58x + 217x2 − 98x3 + 35x4 ,
                          6                         12
1                                          1                                                       
    20+508x−925x +820x −245x +42x ,
                   2      3      4      5
                                                120−8042x+20581x2 −17380x3 +7645x4 −1518x5 +154x6 ,
20                                          120
          1                                                                                  
              1680 + 386012x − 958048x2 + 943761x3 − 455455x4 + 123123x5 − 17017x6 + 1144x7 ,
        1680
  1                                                                                                   
       20160−15076944x+40499716x2 −42247940x3 +23174515x4 −7234136x5 +1335334x6 −134420x7 +6435x8 ,
20160
           1
                181440 + 462101904x − 1283316876x2 + 1433031524x3 − 853620201x4 + 303063726x5
        181440
                                                                                        
                                           − 66245634x6 + 8905416x7 − 678249x8 + 24310x9 , . . . (A.2)


   You may of course try to guess the coefficients of powers of x in these polynomials.
But within the “hypergeometric paradigm” this does usually not work. In particular,
that does not work with the above sequence of polynomials.
   A first very useful idea is to guess through interpolation. (For example, this is what
helped to guess coefficients in [43].) What this means is that, for each pn(x) you try to
find enough values of x for which pn (x) appears to be “nice” (the prime factorization
of pn (x) has small prime factors, see Footnote 12). Then you guess these special eval-
uations of pn (x) (by, possibly, using Rate or GUESS), and, by interpolation, are able to
write down a guess for pn (x) itself.
   Let us see how this works for our sequence (A.2). A few experiments will convince
you that pn (x), 0 ≤ n ≤ 9 (this is all we have), appears to be “nice” for x = 0, 1, . . . , n.
Furthermore, using Rate or GUESS, you will quickly find that, apparently, pn (e) = 2n+e    e
for e = 0, 1, . . . , n. Therefore, as it also appears to be the case that pn (x) is of degree
n, our sequence of polynomials should be given (using Lagrange interpolation) by
                    X n        
                          2n + e x(x − 1) · · · (x − e + 1)(x − e − 1) · · · (x − n)
        pn (x) =                                                                     .   (A.3)
                    e=0
                            e              e(e − 1) · · · 1 · (−1) · · · (e − n)

   Another useful idea is to try to expand your polynomials with respect to a “suitable”
basis. (For example, this is what helped to guess coefficients in [30] or [94, e.g., (3.15),
(3.33)].) Now, of course, you do not know beforehand what “suitable” could be in your
situation. Within the “hypergeometric paradigm” candidates for a suitable basis are
always more or less sophisticated shifted factorials. So, let us suppose that we know
that we were working within the “hypergeometric paradigm” when we came across
the example (A.2). Then the simplest possible bases are (x)k , k = 0, 1, . . . , or (−x)k ,
k = 0, 1, . . . . It is just a matter of taste, which of these to try first. Let us try the
latter. Here are the expansions of p3 (x) and p4 (x) in terms of this basis (actually, in
terms of the equivalent basis xk , k = 0, 1, . . . ):
                                                                            
                      1
                        6 + 31x − 15x2 + 20x3 = 1 + 6 x1 + 15 x2 + 20 x3 ,
                      6
                                                                                    
         1
        12
            12   − 58x  + 217x 2
                                 − 98x 3
                                         + 35x 4
                                                   = 1 + 8 x
                                                           1
                                                               + 28 x
                                                                    2
                                                                        + 56 x
                                                                             3
                                                                                 + 70 x
                                                                                      4
                                                                                          .
I do not know how you feel. For me this is enough to guess that, apparently,
                                       Xn       
                                             2n x
                              pn (x) =               .
                                              k   k
                                       k=0
                                          ADVANCED DETERMINANT CALCULUS                                                    55

(Although this is not the same expression as in (A.3), it is identical by means of a
3 F2 -transformation due to Thomae, see [55, (3.1.1)]).
   As was said before, we do not know beforehand what a “suitable” basis is. Therefore
you are advised to get as much a priori information about your polynomials as possible.
For example, in [28] it was “known” to the authors that the result which they wanted
to guess (before being able to think about a proof) is of the form (NICE PRODUCT) ×
(IRREDUCIBLE POLYNOMIAL). (I.e., experiments indicated that.) Moreover, they
knew that their (IRREDUCIBLE POLYNOMIAL), a polynomial in m, pn (m) say,
would have the property pn (−m − 2n + 1) = pn (m). Now, if we are asking ourselves
what a “suitable” basis could be that has this property as well, and which is built
in the way of shifted factorials, then the most obvious candidate is (m + n − k)2k =
(m + n − k)(m + n − k + 1) · · · (m + n + k − 1), k = 0, 1, . . . . Indeed, it was very easy
to guess the expansion coefficients with respect to this basis. (See Theorems 1 and 2
in [28]. The polynomials that I was talking about are represented by the expression in
big parentheses in [28, (1.2)].)


   If the above ideas do not help, then I have nothing else to offer than to try some,
more or less arbitrary, manipulations. To illustrate what I could possibly mean, let us
again consider an example. In the course of working on [90], I had to guess the result
of a determinant evaluation (which became Theorem 8 in [90]; it is reproduced here
as Theorem 43). Again, the difficult part of guessing was to guess the “ugly” part of
the result. As the dimension of the determinant varied, this gave a certain sequence
pn (x, y) of polynomials in two variables, x and y, of which I display p4 (x, y):

In[1]:= VPol[4]

                              2                3      4                    2       3        2
Out[1]= 6 x + 11 x                    + 6 x        + x + 6 y - 10 x y - 6 x y - 4 x y + 11 y -

              2           2           2            3              3         4
>    6 x y        + 6 x           y       + 6 y        - 4 x y        + y

(What I subsequently describe is the actual way in which the expression for pn (x, y) in
terms of the sum on the right-hand side of (3.38) was found.) What caught my eyes was
the part of the polynomial independent of y, x4 + 6x3 + 11x2 + 6x, which I recognized
as (x)4 = x(x + 1)(x + 2)(x + 3). For the fun of it, I subtracted that, just to see what
would happen:
In[2]:= Factor[%-x(x+1)(x+2)(x+3)]
                                               2            3                          2             2             2
Out[2]= y (6 - 10 x - 6 x                          - 4 x        + 11 y - 6 x y + 6 x       y + 6 y       - 4 x y       +

         3
i       y )

Of course, a y factors. Okay, let us cancel that:
In[3]:= %/y
                                          2            3                          2          2       2   3
Out[3]= 6 - 10 x - 6 x                        - 4 x        + 11 y - 6 x y + 6 x       y + 6 y - 4 x y + y
56                                      C. KRATTENTHALER

One day I had the idea to continue in a “systematic” manner: Let us subtract/add an
appropriate multiple of (x)3 ! Perhaps, “appropriate” in this context is to add 4(x)3 ,
because that does at least cancel the third powers of x:
In[4]:= Factor[%+4x(x+1)(x+2)]
                              2                 2
Out[4]= (1 + y) (6 - 2 x + 6 x + 5 y - 4 x y + y )

I assume that I do not have to comment the rest:
In[5]:= %/(y+1)
                            2
Out[5]= 6 - 2 x + 6 x           + 5 y - 4 x y + y
In[6]:= Factor[%-6x(x+1)]
Out[6]= (2 + y) (3 - 4 x + y)
In[7]:= %/(y+2)
Out[7]= 3 - 4 x + y
In[8]:= Factor[%+4x]
Out[8]= 3 + y

What this shows is that

                p4 (x, y) = (x)4 − 4(x)3 (y)1 + 6(x)2 (y)2 − 4(x)1 (y)3 + (y)4 .

No doubt that, at this point, you would have immediately guessed (as I did) that, in
general, we “must” have (compare (3.38))

                                            Xn        
                                                    k n
                                pn (x, y) =     (−1)    (x)k (y)n−k .
                                                      k
                                            k=0




Appendix B: Turnbull’s polarization of Bazin’s theorem implies most of the
identities in Section 2.2
   In this appendix we show that all the determinant lemmas from Section 2.2, with the
exception of Lemmas 8 and 9, follow from the evaluation of a certain determinant of
minors of a given matrix, an observation which I owe to Alain Lascoux. This evaluation,
due to Turnbull [179, p. 505], is a polarized version of a theorem of Bazin [119, II,
pp. 206–208] (see also [102, Sec. 3.1 and 3.4]).
   For the statement of Turnbull’s theorem we have to fix an n-rowed matrix A, in which
we label the columns, slightly unconventionally, by a2, . . . , am , b21,b31, b32, b41, . . . , bn,n−1 ,
x1, x2, . . . , xn , for some m ≥ n, i.e., A is an n × (n + m − 1 + n2 ) matrix. Finally, let
[a, b, c, . . . ] denote the minor formed by concatenating columns a, b, c, . . . of A, in that
order.
                                                           ADVANCED DETERMINANT CALCULUS                                                                                                                    57

Proposition 59. (Cf. [179, p. 505], [102, Sec. 3.4]). With the notation as explained
above, there holds
                                                                
    det [bj,1, bj,2 , . . . , bj,j−1 , xi , aj+1 , . . . , am ]
   1≤i,j≤n
                                                                                                              Y
                                                                                                              n
                                    = [x1, x2, . . . , xn , an+1 , . . . , am ]                                      [bj,1, bj,2, . . . , bj,j−1 , aj , . . . , am ]. (B.1)
                                                                                                              j=2




   Now, in order to derive Lemma 3 from (B.1), we choose m = n and for A the matrix

           a2            ...             an                    b21                   b31                   b32            ...         bn,n−1                x1            x2        ...         xn
                                                                                                                                                                                                         
           1            ...              1                      1                     1                      1             ...              1                 1             1         ...          1
  −A2                  ...           −An                    −B2                   −B2                    −B3              ...          −Bn                  X1            X2 . . . X n 
                                                                                                                                                                                                         
  (−A2)2 . . . (−An )2                                   (−B        ) 2
                                                                                (−B        ) 2
                                                                                                       (−B        ) 2
                                                                                                                           . . .      (−B        )2
                                                                                                                                                            X    2
                                                                                                                                                                           X   2
                                                                                                                                                                                      . . . Xn2 
                                                                  2                     2                      3                             n                 1             2                           ,
 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
   (−A2 )n−1 . . . (−An )n−1 (−B2 )n−1 (−B2 )n−1 (−B3 )n−1 . . . (−Bn )n−1 X1n−1 X2n−1 . . . Xnn−1

with the unconventional labelling of the columns indicated on top. I.e., column bst is
filled with powers of −Bt+1 , 1 ≤ t < s ≤ n. With this choice of A, all the minors in (B.1)
are Vandermonde determinants. In particular, due to the Vandermonde determinant
evaluation (2.1), we then have for the (i, j)-entry of the determinant in (B.1)

  [bj,1, bj,2, . . . , bj,j−1 , xi, aj+1 , . . . , am]
                                              Y                                          Y                                       Y
                                                                                                                                 j
                                                                                                                                   Y
                                                                                                                                   n
                                   =                     (Bs − Bt )                                     (As − At)                                   (At − Bs )
                                         2≤s<t≤j                                  j+1≤s<t≤n                                      s=2 t=j+1

                                                                                                                                       Y
                                                                                                                                       n                                  Y
                                                                                                                                                                          j
                                                                                                                                ×                (Xi + As )                      (Xi + Bs ),
                                                                                                                                     s=j+1                                s=2

which is, up to factors that only depend on the column index j, exactly the (i, j)-entry
of the determinant in (2.8). Thus, Turnbull’s identity (B.1) gives the evaluation (2.8)
immediately, after some obvious simplification.
   In order to derive Lemma 5 from (B.1), we choose m = n and for A the matrix

                         a2                  ...                   an                                    b21                                      b31
  
                   1                     ...                      1                                         1                                           1
   −A2 − C/A2                           ...           −An − C/An                             −B2,1 − C/B2,1                              −B3,1 − C/B3,1
  
   (−A2 − C/A2 )2 . . . (−An − C/An )2                                                    (−B2,1 − C/B2,1 )2                          (−B3,1 − C/B3,1 )2
  
  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    (−A2 − C/A2 )n−1 . . . (−An − C/An )n−1 (−B2,1 − C/B2,1 )n−1 (−B3,1 − C/B3,1 )n−1

                                       b32                     ...                           bn,n−1                                            x1                 ...                  xn
                                                                                                                                                                                                              
                                       1                        ...                              1                                             1                    ...                     1
                        −B3,2 − C/B3,2                          ...          −Bn,n−1 − C/Bn,n−1                                      X1 + C/X1                      ...          Xn + C/Xn                   
                     (−B3,2 − C/B3,2 )                  2
                                                                . . . (−Bn,n−1 − C/Bn,n−1 )                             2
                                                                                                                                  (X1 + C/X1 )               2
                                                                                                                                                                    . . . (Xn + C/Xn )2                      .
                   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                   (−B3,2 − C/B3,2 )n−1 . . . (−Bn,n−1 − C/Bn,n−1 )n−1 (X1 + C/X1 )n−1 . . . (Xn + C/Xn )n−1
58                                         C. KRATTENTHALER

(In this display, the first line contains columns a2, . . . , b31 of A, while the second line
contains the remaining columns.) Again, with this choice of A, all the minors in (B.1)
are Vandermonde determinants. Therefore, by noting that (S + C/S) − (T + C/T ) =
(S − T )(C/S − T )/(−T ), and by writing pj−1 (X) for
                                    Y
                                    j−1
                                          (X + Bj,s )(C/X + Bj,s ),                                (B.2)
                                    s=1

we have for the (i, j)-entry of the determinant in (B.1)
                                                        Y
 [bj,1, bj,2, . . . , bj,j−1 , xi, aj+1 , . . . , am] =   (Bj,s + C/Bj,s − Bj,t − C/Bj,t )
                                                 1≤s<t≤j−1

                 Y                                      Y
                                                        j−1
                                                            Y
                                                            n
          ×               (As + C/As − At − C/At )                  (At + C/At − Bj,s − C/Bj,s )
              j+1≤s<t≤n                                 s=1 t=j+1
                                           Y
                                            n                                                Y
                                                                                              j−1
                                     ×              (Xi + As )(C/Xi + As ) A−1
                                                                            s      pj−1 (Xi )      −1
                                                                                                  Bj,s
                                            s=j+1                                            s=1

for the (i, j)-entry of the determinant in (B.1). This is, up to factors which depend
only on the column index j, exactly the (i, j)-entry of the determinant in (2.11). The
polynomials pj−1 (X), j = 1, 2, . . . , n, can indeed be regarded as arbitrary Laurent poly-
nomials satisfying the conditions of Lemma 5, because any Laurent polynomial qj−1 (X)
over the complex numbers of degree at most j − 1 and with qj−1 (X) = qj−1 (C/X) can
be written in the form (B.2). Thus, Turnbull’s identity (B.1) implies the evaluation
(2.11) as well.
   Similar choices for A are possible in order to derive Lemmas 4, 6 and 7 (which are in
fact just limiting cases of Lemma 5) from Proposition 59.

Appendix C: Jean-Yves Thibon’s proof of Theorem 56
   Obviously,
           P the determinant       in (3.64) is the determinant of the linear operator
Kn (q) := σ∈Sn q    maj σ
                          σ acting on the group algebra C[Sn ] of the symmetric group.
Thus, if we are able to determine all the eigenvalues of this operator, together with
their multiplicities, we will be done. The determinant is then just the product of all
the eigenvalues (with multiplicities).
   The operator Kn (q) is also an element of Solomon’s descent algebra (because permu-
tations with the same descent set must necessarily have the same major index). The
descent algebra is canonically isomorphic to the algebra of noncommutative symmetric
functions (see [56, Sec. 5]). It is shown in [95, Prop. 6.3] that, as a noncommutative
symmetric function, Kn (q) is equal to (q; q)n Sn (A/(1 − q)), where Sn (B) denotes the
complete (noncommutative) symmetric function of degree n of some alphabet B.
   The inverse element of Sn (A/(1 − q)) happens to be Sn((1 − q)A), i.e., Sn((1 − q)A) ∗
Sn(A/(1−q)) = Sn(A),13 with ∗ denoting the internal multiplication of noncommutative
symmetric functions (corresponding to the multiplication in the descent
                                                                  P        algebra). This
is seen as follows. As in [95, Sec. 2.1] let us write σ(B; t) =      n≥0 Sn (B)tn for the
     13
     By definition of the isomorphism between noncommutative symmetric functions and elements in
the descent algebra, Sn (A) corresponds to the identity element in the descent algebra of Sn .
                            ADVANCED DETERMINANT CALCULUS                                      59

generating function for complete symmetric functions of some alphabet B, and λ(B; t) =
P            n
  n≥0 Λn (B)t for the generating function for elementary symmetric functions, which
are related by λ(B; −t)σ(B; t) = 1. Then, by [95, Def. 4.7 and Prop. 4.15], we have
σ((1 − q)B; 1) = λ(B; −q)σ(B; 1). Let X be the ordered alphabet · · · < q 2 < q < 1, so
that XA = A/(1 − q). According to [95, Theorem 4.17], it then follows that
  σ((1 − q)A; 1) ∗ σ(XA; 1) = σ((1 − q)XA; 1) = λ(XA; −q)σ(XA; 1)
                                          = λ(XA; −q)σ(XA; q)σ(A; 1) = σ(A; 1),
since by definition of X, σ(XA; 1) is equal to σ(XA; q)σ(A; 1) (see [95, Def. 6.1]).
Therefore, Sn ((1 − q)A) ∗ Sn(XA) = Sn(A), as required.
   Hence, we infer that Kn (q) is the inverse of Sn ((1 − q)A)/(q; q)n.
   The eigenvalues of Sn ((1 − q)A) are given in [95, Lemma 5.13]. Their multiplicities
follow from a combination of Theorem 5.14 and Theorem 3.24 in [95], since the con-
struction in Sec. 3.4 of [95] yields idempotents eµ such that the commutative      Q      immage
of α(eµ ) is equal to pµ /zµ . Explicitly, the eigenvalues of Sn ((1 − q)A) are i≥1 (1 − q µi ),
where µ = (µ1 , µ2 , . . . ) varies through all partitions of n, with corresponding multiplic-
ities n!/zµ , the number of permutations of cycle type µ, i.e., zµ = 1m1 m1! 2m2 m2! · · · ,
where mi is the number of occurences   Q     of i in the partition µ, i = 1, 2, . . . . Hence, the
eigenvalues of Kn (q) are (q; q)n/ i≥1 (1 − q µi ), with the same multiplicities.
   Knowing all the eigenvalues of Kn (q) and their multiplicities explicitly, it is now not
extremely difficult to form the product of all these and, after a short calculation, recover
the right-hand side of (3.64).
Acknowledgements
  I wish to thank an anonymous referee, Joris Van der Jeugt, Bernard Leclerc, Madan
Lal Mehta, Alf van der Poorten, Volker Strehl, Jean-Yves Thibon, Alexander Varchenko,
and especially Alain Lascoux, for the many useful comments and discussions which
helped to improve the contents of this paper considerably.
60                                      C. KRATTENTHALER

References
 (At the end of each reference, it is indicated on which page(s) of this article the reference is cited,
  including multiple occurences.)



  [1] W. A. Al-Salam and L. Carlitz, Some determinants of Bernoulli, Euler and related numbers,
      Portugaliae Math. 18 (1959), 91–99. (p. 23, 47)
  [2] T. Amdeberhan, Lewis strikes again, and again!, unpublished manuscript, avail-
      able      at      http://www.math.temple.edu/~tewodros/programs/kratdet.html                   and
      http://www.math.temple.edu/~tewodros/programs/qkratdet.html. (p. 12, 39, 40)
  [3] G. E. Andrews, Plane partitions (II): The equivalence of the Bender–Knuth and the MacMahon
      conjectures, Pacific J. Math. 72 (1977), 283–291. (p. 34)
  [4] G. E. Andrews, Plane partitions (I): The MacMahon conjecture, in: Studies in Foundations and
      Combinatorics, G.-C. Rota, ed., Adv. in Math. Suppl. Studies, vol. 1, 1978, 131–150. (p. 19, 33,
      34)
  [5] G. E. Andrews, Plane partitions (III): The weak Macdonald conjecture, Invent. Math. 53 (1979),
      193–225. (p. 19, 34, 36)
  [6] G. E. Andrews, Macdonald’s conjecture and descending plane partitions, in: Combinatorics,
      representation theory and statistical methods in groups, Young Day Proceedings, T. V. Narayana,
      R. M. Mathsen, J. G. Williams, eds., Lecture Notes in Pure Math., vol. 57, Marcel Dekker, New
      York, Basel, 1980, 91–106. (p. 19, 34, 35)
  [7] G. E. Andrews, Plane partitions (IV): A conjecture of Mills–Robbins–Rumsey, Aequationes
      Math. 33 (1987), 230–250. (p. 19, 38)
  [8] G. E. Andrews, Plane partitions (V): The t.s.s.c.p.p. conjecture, J. Combin. Theory Ser. A 66
      (1994), 28–39. (p. 19, 40)
  [9] G. E. Andrews and W. H. Burge, Determinant identities, Pacific J. Math. 158 (1993), 1–14.
      (p. 37, 38, 38)
 [10] G. E. Andrews and D. W. Stanton, Determinants in plane partition enumeration, Europ. J.
      Combin. 19 (1998), 273–282. (p. 18, 19, 36, 38, 38, 40)
 [11] K. Aomoto and Y. Kato, Derivation of q-difference equation from connection matrix for Selberg
      type Jackson integrals, J. Difference Equ. Appl. 4 (1998), 247–278. (p. 19, 51)
 [12] R. Askey, Continuous Hahn polynomials, J. Phys. A – Math. Gen. 18 (1985), L1017–L1019.
      (p. 21)
 [13] N. M. Atakishiyev and S. K. Suslov, The Hahn and Meixner polynomials of an imaginary argu-
      ment and some of their applications, J. Phys. A – Math. Gen. 18 (1985), 1583–1596. (p. 21)
 [14] H. Au-Yang and J. H. H. Perk, Critical correlations in a Z-invariant inhomogeneous Ising model,
      Physica 144A (1987), 44–104. (p. 47)
 [15] E. L. Basor and P. J. Forrester, Formulas for the evaluation of Toeplitz determinants with rational
      generating functions, Mathematische Nachrichten 170 (1994), 5–18. (p. 6)
 [16] E. Bombieri, D. C. Hunt and A. J. van der Poorten, Determinants in the study of Thue’s method
      and curves with prescribed singularities, Experimental Math. 4 (1995), 87–96. (p. 44, 44, 44, 45)
 [17] C. W. Borchardt, Bestimmung der symmetrischen Verbindungen ihrer erzeugenden Funktion,
      Crelle J. 53 (1855), 193–198. (p. 29)
 [18] D. M. Bressoud, Proofs and confirmations — The story of the alternating sign matrix conjecture,
      Cambridge University Press, Cambridge, 1999. (p. 11, 29, 52)
 [19] D. M. Bressoud and J. Propp, The proofs of the alternating sign matrix conjecture, Notices Amer.
      Math. Soc. (to appear). (p. 52)
 [20] T. Brylawski and A. Varchenko, The determinant formula for a matroid bilinear form, Adv. in
      Math. 129 (1997), 1–24. (p. 49, 49)
 [21] M. W. Buck, R. A. Coley and D. P. Robbins, A generalized Vandermonde determinant, J. Alg.
      Combin. 1 (1992), 105–109. (p. 29)
 [22] L. Carlitz, Some determinants of q-binomial coefficients, J. Reine Angew. Math. 226 (1967),
      216–220. (p. 31)
                            ADVANCED DETERMINANT CALCULUS                                        61

[23] W. C. Chu, Binomial convolutions and determinant identities, Discrete Math. (Gould Anniver-
     sary Volume) (1999), (to appear). (p. 38, 38)
[24] F. Chyzak, Holonomic systems and automatic proofs of identities, INRIA Research Report
     no. 2371, 61 pp, 1994. (p. 3)
[25] M. Ciucu, Plane partitions I: A generalization of MacMahon’s formula, preprint, math/9808017.
     (p. 31)
[26] M. Ciucu, Enumeration of perfect matchings in graphs with reflective symmetry, J. Combin.
     Theory Ser. A 77 (1997), 67-97. (p. 39)
[27] M. Ciucu, T. Eisenkölbl, C. Krattenthaler and D. Zare, Enumeration of lozenge tilings of
     hexagons with a central triangular hole, in preparation. (p. 15, 31, 36)
[28] M. Ciucu and C. Krattenthaler, The number of centered lozenge tilings of a symmetric hexagon,
     J. Combin. Theory Ser. A 86 (1999), 103–126. (p. 16, 55, 55, 55)
[29] M. Ciucu and C. Krattenthaler, Plane partitions II: 5 12 symmetry classes, preprint,
     math/9808018. (p. 38, 39)
[30] M. Ciucu and C. Krattenthaler, Enumeration of lozenge tilings of hexagons with cut off corners,
     in preparation. (p. 15, 43, 43, 54)
[31] A. J. Coleman and L. B. Cao, Factoring the Shapovalov determinant, II, J. Algebra 187 (1997),
     373–387. (p. 49)
[32] T. L. Curtright and C. B. Thorn, Symmetry patterns in the mass spectra of dual string models,
     Nuclear Phys. B274 (1986), 520–558. (p. 47)
[33] R. Dahab, The Birkhoff–Lewis equations, Ph.D. Dissertation, University of Waterloo, 1993.
     (p. 50, 50)
[34] G. David and C. Tomei, The problem of the calissons, Amer. Math. Monthly 96 (1989), 429–431.
     (p. 31)
[35] Ph. Delsarte, Nombres de Bell et polynômes de Charlier, Comptes Rendus Acad. Sciences Paris
     Sér. A 287 (1978), 271–273. (p. 23, 47)
[36] G. Denham and Ph. Hanlon, On the Smith normal form of the Varchenko bilinear form of a
     hyperplane arrangement, Pacific J. Math. (Olga Taussky–Todd memorial issue) (1997), 123–146.
     (p. 49)
[37] G. Denham and Ph. Hanlon, Some algebraic properties of the Schechtman–Varchenko bilinear
     form, MSRI preprint No. 1998–068. (p. 49)
[38] C. L. Dodgson, Condensation of determinants, Proc. Royal Soc. London 15 (1866), 150–155.
     (p. 11)
[39] A. Douai and H. Terao, The determinant of a hypergeometric period matrix, Invent. Math. 128
     (1997), 417–436. (p. 49)
[40] G. Duchamp, A. Klyachko, D. Krob and J.-Y. Thibon, Noncommutative symmetric functions III:
     Deformations of Cauchy and convolution algebras, Discrete Math. Theoret. Computer Science 1
     (1997), 159–216. (p. 49)
[41] T. Eisenkölbl, Rhombus tilings of a hexagon with three missing border tiles, J. Combin. Theory
     Ser. A (to appear). (p. 12)
[42] T. Eisenkölbl, Rhombus tilings of a hexagon with two triangles missing on the symmetry axis,
     preprint, math/9810019. (p. 15)
[43] I. Fischer, Enumeration of rhombus tilings of a hexagon which contain a fixed rhombus in the
     centre, preprint. (p. 16, 54)
[44] P. Flajolet, Combinatorial aspects of continued fractions, Discrete Math. 32 (1980), 125–161.
     (p. 48)
[45] R. P. Flowe and G. A. Harris, A note on generalized Vandermonde determinants, SIAM J. Matrix
     Anal. Appl. 14 (1993), 1146–1151. (p. 25, 25, 26)
[46] D. Foata, On the Netto inversion number of a sequence, Proc. Amer. Math. Soc. 19 (1968),
     236–240. (p. 49)
[47] P. Di Francesco, Meander determinants, Comm. Math. Phys. 191 (1998), 543–583. (p. 50, 51,
     51)
[48] P. Di Francesco, SU (n) meander determinants, J. Math. Phys. 38, (1997), 5904–5943. (p. 51,
     51)
62                                      C. KRATTENTHALER

 [49] P. Di Francesco, O. Golinelli and E. Guitter, Meanders and the Temperley–Lieb algebra, Comm.
      Math. Phys. 186 (1997), 1–59. (p. 50)
 [50] M. Fulmek and C. Krattenthaler, The number of rhombus tilings of a symmetric hexagon which
      contain a fixed rhombus on the symmetry axis, I, Ann. Combin. 2 (1998), 19–40. (p. 16, 43, 44,
      44)
 [51] M. Fulmek and C. Krattenthaler, The number of rhombus tilings of a symmetric hexagon which
      contain a fixed rhombus on the symmetry axis, II, preprint. (p. 16, 22, 47, 48)
 [52] W. Fulton and J. Harris, Representation Theory, Springer–Verlag, New York, 1991. (p. 6, 6, 6,
      6, 6, 6, 33, 34)
 [53] F. R. Gantmacher, The theory of matrices, translated from the Russian, reprinted by Chelsea,
      New York, 1959. (p. 18)
 [54] F. Garvan, A q-product tutorial for a Maple q-series package, Séminaire Lotharingien Combin.
      42 (“The Andrews Festschrift”) (1999), paper B42d, 27 pp. (p. 51)
 [55] G. Gasper and M. Rahman, Basic Hypergeometric Series, Encyclopedia of Mathematics And Its
      Applications 35, Cambridge University Press, Cambridge, 1990. (p. 25, 55)
 [56] I. M. Gelfand, D. Krob, A. Lascoux, B. Leclerc, V. S. Retakh and J.-Y. Thibon, Noncommutative
      symmetric functions, Adv. in Math. 112 (1995), 218–348. (p. 58)
 [57] I. M. Gessel and X. Viennot, Determinants, paths, and plane partitions, preprint, 1989. (p. 31,
      31, 31)
 [58] B. Gordon, Notes on plane partitions V, J. Combin. Theory 11 (1971), 157–168. (p. 24, 24)
 [59] B. Gordon, A proof of the Bender–Knuth conjecture, Pacific J. Math. 108 (1983), 99–113. (p. 34)
 [60] I. P. Goulden and D. M. Jackson, Ballot sequences and a determinant of Good’s, J. Combin.
      Theory Ser. A 40 (1985), 55–61. (p. 51)
 [61] I. P. Goulden and D. M. Jackson, Further determinants with the averaging property of Andrews-
      Burge, J. Combin. Theory Ser. A 73 (1996), 368–375. (p. 24, 24, 38)
 [62] R. L. Graham, D. E. Knuth and O. Patashnik, Concrete Mathematics, Addison Wesley, Reading,
      Massachusetts, 1988. (p. 25, 37)
 [63] R. A. Gustafson and C. Krattenthaler, Determinant evaluations and U (n) extensions of Heine’s
      2 φ1 -transformations, Special Functions, q-Series and Related Topics, M. E. H. Ismail, D. R. Mas-
      son and M. Rahman, eds., Fields Institute Communications, vol. 14, Amer. Math. Soc., Provi-
      dence, R. I., 83–90, 1997. (p. 31)
 [64] G.-N. Han, A. Randrianarivony and J. Zeng, Un autre q-analogue des nombres d’Euler, Séminaire
      Lotharingien Combin. 42 (“The Andrews Festschrift”) (1999), paper B42e, 22 pp. (p. 48)
 [65] G.-N. Han and J. Zeng, q-Polynômes de Ghandi et statistique de Denert, Discrete Math. (to
      appear). (p. 48)
 [66] B. R. Handa and S. G. Mohanty, Enumeration of higher-dimensional paths under restrictions,
      Discrete Math. 26 (1979), 119–128. (p. 31)
 [67] Ph. Hanlon and R. P. Stanley, A q-deformation of a trivial symmetric group action, Trans. Amer.
      Math. Soc. 350 (1999), 4445–4459. (p. 49)
 [68] H. Helfgott and I. M. Gessel, Exact enumeration of tilings of diamonds and hexagons with defects,
      Electron. J. Combin. 6 (1) (1999), #R16, 26 pp. (p. 48)
 [69] M. Ishikawa and M. Wakayama, Minor summation formula for pfaffians, Linear and Multilinear
      Algebra 39 (1995), 285–305. (p. 24)
 [70] M. E. H. Ismail and D. R. Masson, Some continued fractions related to elliptic functions, Con-
      temporary Math. (to appear). (p. 48)
 [71] M. E. H. Ismail and D. Stanton, Classical orthogonal polynomials as moments, Can. J. Math. 49
      (1997), 520–542. (p. 47, 47)
 [72] M. E. H. Ismail and D. Stanton, More orthogonal polynomials as moments, in: Mathematical
      Essays in Honor of Gian-Carlo Rota, B. E. Sagan, R. P. Stanley, eds., Progress in Math., vol. 161,
      Birkhäuser, Boston, 1998, pp. 377–396. (p. 47)
 [73] M. E. H. Ismail and G. Valent, On a family of orthogonal polynomials related to elliptic functions,
      Illinois J. Math. 42 (1998), 294–312. (p. 48)
 [74] A. G. Izergin, Partition function of the six-vertex model in a finite volume, Soviet Phys. Dokl.
      32 (1987), 878–879. (p. 29)
                            ADVANCED DETERMINANT CALCULUS                                          63

[75] D. M. Jackson, The lattice of noncrossing partitions and the Birkhoff–Lewis equations, Europ. J.
     Combin. 15 (1994), 245–250. (p. 50)
[76] W. B. Jones and W. J. Thron, Continued Fractions, Addison–Wesley, Reading, Massachusetts,
     1980. (p. 20)
[77] S. Karlin and G. Szegő, On certain determinants whose elements are orthogonal polynomials,
     Journal d’Analyse Math. 8 (1961), 1–157. (p. 47, 47)
[78] K. S. Kedlaya, Another combinatorial determinant, preprint, math/9810127. (p. 23)
[79] D. E. Knuth, Overlapping pfaffians, Electron. J. Combin. 3 (no. 2, “The Foata Festschrift”)
     (1996), paper #R5, 13 pp. (p. 11, 24)
[80] K. H. Ko and L. Smolinsky, A combinatorial matrix in 3-manifold theory, Pacific J. Math. 149
     (1991), 319–336. (p. 50)
[81] R. Koekoek and R. F. Swarttouw, The Askey–scheme of hypergeometric orthogonal polynomials
     and its q-analogue, TU Delft, The Netherlands, 1998; on the WWW:
     ftp://ftp.twi.tudelft.nl/TWI/publications/tech-reports/1998/DUT-TWI-98-17.ps.gz.
     (p. 20, 21, 21, 47)
[82] V. Korepin, Calculation of norms of Bethe wave functions, Commun. Math. Phys. 86 (1982),
     391–418. (p. 29)
[83] V. E. Korepin, N. M. Bogoliubov and A. G. Izergin, Quantum inverse scattering method and
     correlation functions, Cambridge University Press, Cambridge, 1993. (p. 29)
[84] H. Krämer, Eigenspace decompositions with respect to symmetrized incidence mappings,
     Séminaire Lotharingien Combin. 41 (1998), paper B41c, 20 pp. (p. 51)
[85] C. Krattenthaler, Generating functions for plane partitions of a given shape, Manuscripta Math.
     69, (1990), 173–202. (p. 7, 8, 31, 31, 31)
[86] C. Krattenthaler, A determinant evaluation and some enumeration results for plane partitions,
     in: Number-Theoretic Analysis, E. Hlawka, R. F. Tichy, eds., Lect. Notes in Math. 1452, Sprin-
     ger-Verlag, Berlin, 1990. (p. 31, 31)
[87] C. Krattenthaler, Generating functions for shifted plane partitions, J. Statist. Plann. Inference
     34 (1993), 197–208. (p. 8, 31, 32)
[88] C. Krattenthaler, The major counting of nonintersecting lattice paths and generating functions
     for tableaux, Mem. Amer. Math. Soc. 115, no. 552, Providence, R. I., 1995. (p. 9, 33, 34)
[89] C. Krattenthaler, Some q-analogues of determinant identities which arose in plane partition
     enumeration, Séminaire Lotharingien Combin. 36, (1996), paper B36e, 23 pp. (p. 15, 16, 40, 41)
[90] C. Krattenthaler, Determinant identities and a generalization of the number of totally symmetric
     self-complementary plane partitions, Electron. J. Combin. 4(1) (1997), #R27, 62 pp. (p. 15, 16,
     39, 40, 41, 41, 55, 55)
[91] C. Krattenthaler, An alternative evaluation of the Andrews–Burge determinant, in: Mathemat-
     ical Essays in Honor of Gian-Carlo Rota, B. E. Sagan, R. P. Stanley, eds., Progress in Math.,
     vol. 161, Birkhäuser, Boston, 1998, pp. 263–270. (p. 13, 14, 15, 38)
[92] C. Krattenthaler, A new proof of the M–R–R conjecture — including a generalization, J. Differ-
     ence Equ. Appl. (to appear). (p. 15, 36, 38, 38)
[93] C. Krattenthaler and P. Slater, Asymptotic redundancies for universal quantum coding, preprint,
     quant-ph/9612043. (p. 51)
[94] C. Krattenthaler and D. Zeilberger, Proof of a determinant evaluation conjectured by Bombieri,
     Hunt and van der Poorten, New York J. Math. 3 (1997), 54–102. (p. 15, 45, 45, 45, 45, 54)
[95] D. Krob, B. Leclerc and J.-Y. Thibon, Noncommutative symmetric functions II: Transformations
     of alphabets, Int. J. Algebra Comput. 7 (1997), 181–264. (p. 49, 58, 58, 59, 59, 59, 59, 59, 59)
[96] G. Kuperberg, Symmetries of plane partitions and the permanent determinant method, J. Com-
     bin. Theory Ser. A 68 (1994), 115–151. (p. 40)
[97] G. Kuperberg, Another proof of the alternating sign matrix conjecture, Math. Research Lett. 3
     (1996), 139–150. (p. 15, 29, 29, 30, 52)
[98] D. Laksov, A. Thorup and A. Lascoux, On Giambelli’s theorem on complete correlations, Acta
     Math. 162 (1989), 163–199. (p. 24)
[99] T. Y. Lam, Representations of finite groups: A hundred years, Part I, Notices Amer. Math. Soc.
     45 (1998), 361–372. (p. 23)
64                                     C. KRATTENTHALER

[100] A. Lascoux, Interpolation, preprint. (p. 26, 27, 27)
[101] A. Lascoux, Square ice enumeration, Séminaire Lotharingien Combin. 42 (“The Andrews
      Festschrift”) (1999) (to appear). (p. 30)
[102] B. Leclerc, On identities satisfied by minors of a matrix, Adv. in Math. 100 (1993), 101–132.
      (p. 56, 57)
[103] B. Leclerc, On certain formulas of Karlin and Szegő, Séminaire Lotharingien Combin. 41 (1998),
      paper B41d, 21 pp. (p. 47, 47)
[104] W. B. R. Lickorish, Invariants for 3-manifold from the combinatorics of the Jones polynomial,
      Pacific J. Math. 149 (1991), 337–347. (p. 50)
[105] I. G. Macdonald, Symmetric Functions and Hall Polynomials, second edition, Oxford University
      Press, New York/London, 1995. (p. 6, 6, 31)
[106] P. A. MacMahon, Combinatory Analysis, vol. 2, Cambridge University Press, 1916; reprinted by
      Chelsea, New York, 1960. (p. 31)
[107] M. L. Mehta, Random Matrices and the statistical theory of energy levels, Academic Press, New
      York, 1967. (p. 25, 25, 25)
[108] M. L. Mehta, Matrix theory, Editions de Physique, Orsay, France, 1989. (p. 20, 20, 25, 25, 47,
      47, 48)
[109] St. Meljanac and D. Svrtan, Study of Gram matrices in Fock representation of multiparametric
      canonical commutation relations, extended Zagier’s conjecture, hyperplane arrangements and
      quantum groups, Math. Commun. 1 (1996), 1–24. (p. 49)
[110] W. H. Mills, D. H. Robbins and H. Rumsey, Proof of the Macdonald conjecture, Invent. Math.
      66 (1982), 73–87. (p. 35, 35, 38)
[111] W. H. Mills, D. H. Robbins and H. Rumsey, Alternating sign matrices and descending plane
      partitions, J. Combin. Theory Ser. A 34 (1983), 340–359. (p. 30, 52)
[112] W. H. Mills, D. H. Robbins and H. Rumsey, Enumeration of a symmetry class of plane partitions,
      Discrete Math. 67 (1987), 43–55. (p. 2, 36, 37, 38, 38, 40)
[113] S. C. Milne, New infinite families of exact sums of squares formulas, Jacobi elliptic functions,
      and Ramanujan’s tau function, Proc. Natl. Acad. Sci. USA 93 (1996), 15004–15008. (p. 23, 48,
      48)
[114] S. C. Milne, Infinite families of exact sums of squares formulas, Jacobi elliptic functions, con-
      tinued fractions, and Schur functions, Adv. in Math. (to appear). (p. 23, 48, 48)
[115] S. C. Milne, Continued fractions, Hankel determinants, and further identities for powers of
      classical theta functions, preprint. (p. 23, 48)
[116] S. C. Milne, Hankel determinants of Eisenstein series, preprint. (p. 23, 48)
[117] S. C. Milne, Some extensions of Cauchy’s determinant, preprint. (p. 29)
[118] K. Mimachi, Holonomic q-difference system of the 1st order associated with a Jackson integral
      of Selberg type, Duke Math. J. 73 (1994), 453–468. (p. 19, 51)
[119] T. Muir, The theory of determinants in the historical order of development, 4 vols., Macmillan,
      London, 1906–1923. (p. 2, 2, 6, 11, 56)
[120] T. Muir, Contributions to the history of determinants, 1900–1920, Blackie & Son, London and
      Glasgow, 1930. (p. 2)
[121] T. Muir, A treatise on the theory of determinants, Rev. and enlarged by W. H. Metzler, Dover,
      New York, 1960. (p. 2, 22)
[122] N. E. Nörlund, Vorlesungen über Differenzenrechnung, Springer, Berlin, 1924. (p. 22, 47)
[123] S. Okada, On the generating functions for certain classes of plane partitions, J. Combin. Theory
      A 51 (1989), 1–23. (p. 24, 42, 42)
[124] S. Okada, Applications of minor summation formulas to rectangular-shaped representations of
      classical groups, J. Algebra 205 (1998), 337–368. (p. 6)
[125] S. Okada and C. Krattenthaler, The number of rhombus tilings of a “punctured” hexagon and
      the minor summation formula, Adv. Appl. Math. 21 (1998), 381–404. (p. 6)
[126] A. M. Ostrowski, On some determinants with combinatorial numbers, J. Reine Angew. Math.
      216 (1964), 25–30. (p. 2)
[127] E. Pascal, Die Determinanten, Teubner, Leipzig, 1900. (p. 2)
[128] O. Perron, Die Lehre von den Kettenbrüchen, B. G. Teubner, Stuttgart, 1977. (p. 20)
                              ADVANCED DETERMINANT CALCULUS                                            65

[129] M. Petkovšek and H. Wilf, A high-tech proof of the Mills-Robbins-Rumsey determinant formula,
      Electron. J. Combin. 3 (no. 2, “The Foata Festschrift”) (1996), #R19, 3 pp. (p. 38)
[130] M. Petkovšek, H. Wilf and D. Zeilberger, A=B, A. K. Peters, Wellesley, 1996. (p. 3, 15)
[131] A. J. van der Poorten, Some determinants that should be better known, J. Austral. Math. Soc.
      21 (Ser. A) (1976), 278–288. (p. 23, 26)
[132] A. J. van der Poorten, A powerful determinant, preprint. (p. 15, 44, 45, 45, 46, 46)
[133] R. A. Proctor, unpublished research announcement, 1984. (p. 31)
[134] R. A. Proctor, Odd symplectic groups, Invent. Math. 92 (1988), 307–332. (p. 32)
[135] R. A. Proctor, New symmetric plane partition identities from invariant theory work of DeConcini
      and Procesi, Europ. J. Combin. 11 (1990), 289–300. (p. 32)
[136] R. A. Proctor, Product evaluations of Lefschetz determinants for Grassmannians and of deter-
      minants of multinomial coefficients, J. Combin. Theory Ser. A 54 (1990), 235–247. (p. 51)
[137] R. A. Proctor, Young tableaux, Gelfand patterns, and branching rules for classical groups, J. Al-
      gebra 164 (1994), 299–360. (p. 6, 6)
[138] J. Propp, Twenty open problems on enumeration of matchings, manuscript, 1996, math/9801060.
      (p. 12, 25)
[139] C. Radoux, Déterminant de Hankel construit sur les polynômes de Hérmite, Ann. Soc. Sci. Brux.,
      Ser. I 104 (1990), 59–61. (p. 47)
[140] C. Radoux, Déterminant de Hankel construit sur des polynômes liés aux nombres de dérange-
      ments, Europ. J. Combin. 12 (1991), 327–329. (p. 47)
[141] C. Radoux, Déterminants de Hankel et théorème de Sylvester, in: Actes de la 28e session du
      Séminaire Lotharingien de Combinatoire, publication de l’I.R.M.A. no 498/S–28, Strasbourg,
      1992, pp 115–122. (p. 47)
[142] A. Randrianarivony, Fractions continues, combinatoire et extensions de nombres classiques,
      Ph.D. thesis, Univ. Louis Pasteur, Strasbourg, France, 1994. (p. 48)
[143] A. Randrianarivony, Fractions continues, q-nombres de Catalan et q-polynômes de Genocchi,
      Europ. J. Combin. 18 (1997), 75–92. (p. 48)
[144] A. Randrianarivony, q, p-analogue des nombres de Catalan, Discrete Math. 178 (1998), 199–211.
      (p. 48)
[145] A. Randrianarivony and J. A. Zeng, Extension of Euler numbers and records of up-down permu-
      tations, J. Combin. Theory Ser. A 68 (1994), 86–99. (p. 48)
[146] A. Randrianarivony and J. Zeng, A family of polynomials interpolating several classical series of
      numbers, Adv. in Appl. Math. 17 (1996), 1–26. (p. 48)
[147] G. M. Reinhart, Determinants of partition matrices, J. Number Theory 56 (1996), 283–297.
      (p. 51)
[148] D. P. Robbins. The story of 1, 2, 7, 42, 429, 7436, . . ., The Math. Intelligencer 13 (1991), 12–19.
      (p. 25, 29, 52)
[149] D. P. Robbins, Solution to problem 10387*, Amer. Math. Monthly 104 (1997), 366–367. (p. 29)
[150] D. P. Robbins and H. Rumsey, Determinants and alternating sign matrices, Adv. in Math. 62
      (1986), 169–184. (p. 29)
[151] L. J. Rogers, On the representation of certain asymptotic series as convergent continued fractions,
      Proc. London Math. Soc. (2) 4 (1907), 72–89. (p. 48)
[152] B. Salvy and P. Zimmermann, Gfun: a Maple package for the manipulation of generating and
      holonomic functions in one variable, ACM Trans. Math. Software 20 (1994). (p. 3)
[153] V. Schechtman and A. Varchenko, Arrangements of hyperplanes and Lie algebra homology, In-
      vent. Math. 106 (1991), 139–194. (p. 49, 49)
[154] L. Schendel, Das alternirende Exponentialdifferenzenproduct, Zeitschrift Math. Phys. (1891) 84–
      87; see [119], vol. IV, p. 178. (p. 25)
[155] M. Schlosser, Symmetrieklassen von Plane Partitions, diploma thesis, University of Vienna, 1993.
      (p. 33, 33, 34, 34)
[156] M. Schlosser, Multidimensional matrix inversion and Ar and Dr basic hypergeometric series,
      The Ramanujan J. 1 (1997), 243–276. (p. 11)
[157] M. Schlosser, Summation theorems for multidimensional basic hypergeometric series by determi-
      nant evaluations, Discrete Math. (to appear). (p. 32)
66                                        C. KRATTENTHALER

[158] M. Schlosser, A new multidimensional matrix inversion in Ar , preprint. (p. 11)
[159] N. N. Shapovalov, On a bilinear form on the universal enveloping algebra of a complex semisimple
      Lie algebra, Funct. Anal. Appl. 6 (1972), 65–70. (p. 49)
[160] R. Simion, Noncrossing partitions, Discrete Math. (to appear). (p. 49)
[161] N. J. A. Sloane, The on-line encyclopedia of integer sequences, Elect. J. Combin. 1 (1994),
      feature #F1, 5 pp. (p. 51)
[162] N. J. A. Sloane and S. Plouffe, The encyclopedia of integer sequences, Academic Press, San Diego,
      1995. (p. 51)
[163] R. P. Stanley, Theory and applications of plane partitions: Parts 1,2, Stud. Appl. Math 50
      (1971), 167–188, 259–279. (p. 25, 31)
[164] R. P. Stanley, A baker’s dozen of conjectures concerning plane partitions, in: Combinatoire énu-
      mérative, G. Labelle, P. Leroux, eds., Lecture Notes in Math. 1234, Springer, Berlin, New York,
      1986, pp. 285–293. (p. 42)
[165] R. P. Stanley, Symmetries of plane partitions, J. Combin. Theory A 43 (1986), 103–113; Erratum:
      ibd. 44 (1987), 310. (p. 25, 42)
[166] R. P. Stanley, Enumerative Combinatorics, Vol. 1, Wadsworth & Brooks/Cole, Pacific Grove,
      California, 1986; reprinted by Cambridge University Press, Cambridge, 1998. (p. 50, 50)
[167] R. P. Stanley, Hyperplane arrangements, parking functions and tree inversions, in: Mathematical
      Essays in Honor of Gian-Carlo Rota, B. E. Sagan, R. P. Stanley, eds., Progress in Math., vol. 161,
      Birkhäuser, Boston, 1998, 359–376. (p. 31)
[168] G. P. Steck, Evaluation of some Steck determinants with applications, Comm. Statist. 3 (1974),
      121–138. (p. 31)
[169] J. R. Stembridge, Nonintersecting paths, pfaffians and plane partitions, Adv. in Math. 83 (1990),
      96–131. (p. 23, 24, 24, 24, 24, 31)
[170] J. R. Stembridge, The enumeration of totally symmetric plane partitions, Adv. in Math. 111
      (1995), 227–245. (p. 43)
[171] T. J. Stieltjes, Sur la réduction en fraction continue d’une série précédent suivant les puissances
      descendants d’une variable, Ann. Fac. Sci. Toulouse 3 (1889), H, 1–17; Œuvres, Vol. 2, 184–200.
      (p. 48)
[172] T. J. Stieltjes, Sur quelques intégrales définies et leur développement en fractions continues,
      Quart. J. Math. 24 (1890), 370–382. (p. 48)
[173] V. Strehl and H. S. Wilf, Five surprisingly simple complexities, J. Symbolic Comput. 20 (1995),
      725–729. (p. 23)
[174] G. Szegő, Orthogonal Polynomials, American Mathematical Society Colloquium Publications
      Vol. XXIII, New York, 1959. (p. 20)
[175] V. Tarasov and A. Varchenko, Geometry of q-hypergeometric functions as a bridge between Yan-
      gians and quantum affine algebras, Invent. Math. 128 (1997), 501–588. (p. 18, 49)
[176] V. Tarasov and A. Varchenko, Geometry of q-hypergeometric functions, quantum affine algebras
      and elliptic quantum groups, Astérisque 246 (1997), 1–135. (p. 18, 29, 49)
[177] T. Terasoma, Determinants of q-hypergeometric functions and another proof of the Askey con-
      jecture, Math. Zeitschrift 226 (1997), 499–512. (p. 51)
[178] H. W. Turnbull, The theory of determinants, matrices, and invariants, Blackie & Son, London
      and Glasgow, 1929. (p. 2, 47)
[179] H. W. Turnbull, The general symbolic notation for the principal of duality, and its application
      to determinants, Proc. London Math. Soc. (2) 22 (1923), 495–507. (p. 7, 56, 57)
[180] W. T. Tutte, On the Birkhoff–Lewis equation, Discrete Math. 92 (1991), 417–425. (p. 50)
[181] W. T. Tutte, The matrix of chromatic joins, J. Combin. Theory Ser. B 57 (1993), 269–288.
      (p. 50)
[182] A. Varchenko, The Euler beta function, the Vandermonde determinant, Legendre’s equation, and
      critical points of linear function on a configuration of hyperplanes, I, II, Math. USSR Izv. 35
      (1990), 542–571; 36 (1991), 155–168. (p. 29, 49)
[183] A. Varchenko, Determinant formula for Selberg type integrals, Funct. Anal. Appl. 4 (1991), 65–66.
      (p. 49)
                              ADVANCED DETERMINANT CALCULUS                                           67

[184] A. Varchenko, Bilinear form of real configuration of hyperplanes, Adv. in Math. 97 (1993), 110–
      144. (p. 48, 49)
[185] A. Varchenko, Multidimensional hypergeometric functions and representation theory of Lie al-
      gebras and quantum groups, Advanced Series in Math. Phys., vol. 21, World Scientific, 1995.
      (p. 49)
[186] X. Viennot, Une théorie combinatoire des polynômes orthogonaux généraux, UQAM, Montreal,
      Quebec, 1983. (p. 20, 20, 21, 21)
[187] H. Voigt, Sur l’apolarité des formes binaires, Nouv. Annales de Math. 4 (1901), 337–365; see
      [120], p. 183. (p. 25)
[188] H. S. Wall, Analytic Theory of Continued Fractions, Van Nostrand, New York, 1948. (p. 20, 20,
      21, 21)
[189] H. S. Wilf, A combinatorial determinant, preprint, math/9809120. (p. 48)
[190] H. S. Wilf and D. Zeilberger, An algorithmic proof theory for hypergeometric (ordinary and “q”)
      multisum/integral identities, Invent. Math. 108 (1992), 575–633. (p. 3, 15)
[191] J. A. Wilson, Orthogonal functions from Gram determinants, SIAM J. Math. Anal. 22 (1991),
      1147–1155. (p. 32)
[192] R. A. Wilson, A diagonal form for the incidence matrices of t-subsets versus k-subsets, Europ.
      J. Combin. 11 (1990), 609–615. (p. 51)
[193] D. Zagier, Realizability of a model in infinite statistics, Comm. Math. Phys. 147 (1992), 199–210.
      (p. 48, 49)
[194] D. Zeilberger, A fast algorithm for proving terminating hypergeometric identities, Discrete Math.
      80 (1990), 207–211. (p. 3, 14, 15)
[195] D. Zeilberger, A holonomic systems approach to special functions identities, J. Comput. Appl.
      Math. 32 (1990), 321–368. (p. 3, 15)
[196] D. Zeilberger, The method of creative telescoping, J. Symbolic Comput. 11 (1991), 195–204. (p. 3,
      14, 15)
[197] D. Zeilberger, Reverend Charles to the aid of Major Percy and Fields medalist Enrico, Amer.
      Math. Monthly, 103 (1996), 501–502. (p. 12)
[198] D. Zeilberger, Proof of the alternating sign matrix conjecture, Electron. J. Combin. 3 (no. 2,
      “The Foata Festschrift”) (1996), #R13, 84 pp. (p. 30, 52)
[199] D. Zeilberger, Proof of the refined alternating sign matrix conjecture, New York J. Math. 2 (1996),
      59–68. (p. 30, 52)
[200] D. Zeilberger, Dodgson’s determinant-evaluation rule proved by TWO-TIMING MEN and
      WOMEN, Electron. J. Combin. 4 (no. 2, “The Wilf Festschrift”) (1997), #R22, 2 pp. (p. 12)
[201] J. Zeng, Sur quelques propriétes de symétrie des nombres de Genocchi, Discrete Math. 153
      (1996), 319–333. (p. 48)

  Institut für Mathematik der Universität Wien, Strudlhofgasse 4, A-1090 Wien, Aus-
tria.
e-mail: KRATT@Pap.Univie.Ac.At, WWW: http://radon.mat.univie.ac.at/People/kratt



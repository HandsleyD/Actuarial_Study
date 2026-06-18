---
normalized_id: shared-pdf-reference-pseudodifferential-and-singular-inte
exam_code: SHARED
material_scope: pseudodifferential and singular inte.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Pseudodifferential and Singular Inte.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-pseudodifferential-and-singular-inte

namdatviet E-books collection

Visit us at:
         http://tusachtonghop.com/forums/

Thank you, and happy learning!
                           De Gruyter Graduate Lectures
Abels • Pseudodifferential and Singular Integral Operators
Helmut Abels

Pseudodifferential and
Singular Integral Operators
An Introduction with Applications




De Gruyter
Mathematics Subject Classification 2010: Primary: 35J48, 35K41, 35S05, 47G30, 47F05,
46E35, 42B20, 42B37, 42B15, 42B10.




ISBN: 978-3-11-025030-5
e-ISBN: 978-3-11-025031-2


Library of Congress Cataloging-in-Publication Data

  Abels, H. (Helmut)
     Pseudodifferential and singular integral operators : an introduction with applications /
   by Helmut Abels.
        p. cm. – (De Gruyter textbook)
     Includes bibliographical references and index.
     ISBN 978-3-11-025030-5 (hardcover : alk. paper) –
     ISBN 978-3-11-025031-2 (e-book)
        1. Pseudodifferential operators. 2. Integral operators. I. Title.
     QA329.7.A24 2012
     515′.94–dc23
                                                                                2011041884



Bibliographic information published by the Deutsche Nationalbibliothek
The Deutsche Nationalbibliothek lists this publication in the Deutsche Nationalbibliografie;
detailed bibliographic data are available in the internet at http://dnb.d-nb.de.


© 2012 Walter de Gruyter GmbH & Co. KG, 10785 Berlin/Boston

Typesetting: Da-TeX Gerd Blumenstein, Leipzig, www.da-tex.de
Printing and binding: Hubert & Co. GmbH & Co. KG, Göttingen
°° Printed on acid-free paper
Printed in Germany
www.degruyter.com
Preface


The purpose of this book is to give a self-contained introduction to the theory of
pseudodifferential operators and singular integral operators. The exposition is writ-
ten in such a way that it should be accessible for third year Bachelor students and
Master students with a basic education in analysis of functions in several variables
and integration theory. A basic knowledge on functional analysis is recommended.
In particular, bounded linear operators between Banach and Fréchet spaces will be
used in the whole book. The most important facts for the purposes of this book are
summarized in Appendix A.3.
   The book is based on several lecture series held by the author at Darmstadt Uni-
versity of Technology, the International Max Planck Research School Mathematics
in the Sciences Leipzig, the University of Leipzig, and the University of Regensburg
between the years 2003 and 2011. It is divided into three parts, each consisting of two
chapters, and the appendix and an introduction.
   Part I is devoted to the Fourier transformation, tempered distributions and pseu-
dodifferential operators. First in Chapter 2 all basic facts on Fourier transformation,
tempered distributions and Sobolev spaces that are needed throughout the book are
discussed. The chapter is the basis for all other chapters in the book. Then in Chap-
ter 3 the basic calculus of pseudodifferential operators on Rn is presented. In particu-
lar, compositions, adjoints, and mapping properties of pseudodifferential operators are
discussed. Moreover, applications to elliptic pseudodifferential equations are studied
as well.
   In Part II, namely Chapter 4 and Chapter 5, an introduction to the theory of sin-
gular integral operators is given. First the theory for translation invariant operators
is presented in Chapter 4. Moreover, several examples are discussed and the impor-
tant Mikhlin multiplier theorem is proved. Then, in Chapter 5, an extension of the
theory to a class of not necessarily translation invariant operators is studied. Further-
more, the results are extended to Banach-space-valued functions and a variant of the
Mikhlin multiplier theorem for Hilbert-space-valued functions is proved. Afterwards
applications to pseudodifferential operators are discussed. To this end, the essential
step is to prove suitable estimates for the kernel of the pseudodifferential operators,
which has several other consequences too. The major parts of Chapter 4 and Chap-
vi                                                                                   Preface


ter 5 are independent of the basic theory of pseudodifferential operators presented in
Chapter 3. Only for the application to pseudodifferential operators in the Sections 5.4
and 5.5 some of the results in Chapter 3 are needed.
   Finally, Part III consists of applications of the results of the first two parts. First in
Chapter 6 an introduction to the theory of Bessel potential and Besov spaces is given,
which can partly be seen as an application of the (Hilbert-space-valued) Mikhlin mul-
tiplier theorem. Then in Chapter 7 several applications of the Mikhlin multiplier the-
orem and the results on pseudodifferential operators are discussed. In particular, solv-
ability of resolvent equations for differential operators and their application to abstract
parabolic evolution equations are presented. Since the results are based on different
parts of the books, the sections can be used independently.
   The book is written in such a way that the chapters and results are partly indepen-
dent. Only the content of Chapter 2 is needed for all chapters. The interested reader
and lecturer can make different choices depending in the interest. The Chapters 3
and 4 are completely independent. Each can be used for an introductory course in
pseudodifferential operators, singular integral operators, respectively. In Chapter 5
the Sections 5.1–5.3 are only based on Chapter 4. Only the Sections 5.4 and 5.5 need
results from the theory of pseudodifferential operators. Chapter 6 is independent of
the Chapter 3–5 if one takes the Hilbert-space-valued Mikhlin multiplier theorem for
granted. Finally, Chapter 7 is based on different parts of the book, which is indicated
in each section. We note that Chapter 2 (without Section 2.8), Chapter 3, Sections 6.2
and 6.6 (only for the Hölder–Zygmund spaces, i.e., s > 0; p D q D 1), and Sec-
tion 7.3 were essentially the content of a two-hours lecture series held at the University
of Regensburg and Darmstadt University of Technology. Moreover, a lecture series
on singular integral operators at the International Max Planck Research School Math-
ematics in the Sciences Leipzig was mostly based on the content of Chapters 4–6 and
Sections 7.1 and 7.2.
   Finally, I like to thank everybody who helped me to write and improve this book. In
particular, I am grateful to Alexander Huber, Dominik Köppl, Lars Müller, Christine
Pfeuffer, and Alexander Voitovich, for their careful proofreading of the manuscript
and previous versions of the lecture notes. Finally, I am indebted to my wife and my
kids for all the patience and support during the time the book was written.

Regensburg, October 2011                                                     Helmut Abels
Contents



    Preface                                                                                                         v
1   Introduction                                                                                                    1



I   Fourier Transformation and Pseudodifferential Operators
2   Fourier Transformation and Tempered Distributions                                                               9
    2.1 Definition and Basic Properties . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                 9
    2.2 Rapidly Decreasing Functions – S.Rn / . . . . . . . . . . . . . . . . . . . . . . .                        13
    2.3 Inverse Fourier Transformation and Plancherel’s Theorem . . . . . . . . .                                  15
    2.4 Tempered Distributions and Fourier Transformation . . . . . . . . . . . . .                                20
    2.5 Fourier Transformation and Convolution of Tempered Distributions .                                         23
    2.6 Convolution on S 0 .Rn / and Fundamental Solutions . . . . . . . . . . . . . .                             25
    2.7 Sobolev and Bessel Potential Spaces . . . . . . . . . . . . . . . . . . . . . . . . . .                    27
    2.8 Vector-Valued Fourier-Transformation . . . . . . . . . . . . . . . . . . . . . . . .                       30
    2.9 Final Remarks and Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                33
           2.9.1     Further Reading . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .       33
           2.9.2     Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   34
3   Basic Calculus of Pseudodifferential Operators on Rn                                                           40
    3.1 Symbol Classes and Basic Properties . . . . . . . . . . . . . . . . . . . . . . . . .                      40
    3.2 Composition of Pseudodifferential Operators: Motivation . . . . . . . . .                                  45
    3.3 Oscillatory Integrals . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .          46
    3.4 Double Symbols . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .           51
viii                                                                                                         Contents



       3.5 Composition of Pseudodifferential Operators . . . . . . . . . . . . . . . . . . .                        54
       3.6 Application: Elliptic Pseudodifferential Operators and Parametrices .                                    57
       3.7 Boundedness on Cb1 .Rn / and Uniqueness of the Symbol . . . . . . . . .                                  63
       3.8 Adjoints of Pseudodifferential Operators and Operators in
           .x; y/-Form . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    65
       3.9 Boundedness on L2 .Rn / and L2 -Bessel Potential Spaces . . . . . . . . .                                68
       3.10 Outlook: Coordinate Transformations and PsDOs on Manifolds . . . .                                      74
       3.11 Final Remarks and Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .             77
              3.11.1 Further Reading . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .        77
              3.11.2 Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    78



II     Singular Integral Operators
4      Translation Invariant Singular Integral Operators                                                            85
       4.1 Motivation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   85
       4.2 Main Result in the Translation Invariant Case . . . . . . . . . . . . . . . . . .                        87
       4.3 Calderón–Zygmund Decomposition and the Maximal Operator . . . .                                          91
       4.4 Proof of the Main Result in the Translation Invariant Case . . . . . . . . .                             95
       4.5 Examples of Singular Integral Operators . . . . . . . . . . . . . . . . . . . . . . 100
       4.6 Mikhlin Multiplier Theorem . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 107
       4.7 Outlook: Hardy spaces and BMO . . . . . . . . . . . . . . . . . . . . . . . . . . . . 112
       4.8 Final Remarks and Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 118
              4.8.1      Further Reading . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 118
              4.8.2      Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 118
5      Non-Translation Invariant Singular Integral Operators                                                        122
       5.1 Motivation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 122
       5.2 Extension to Non-Translation Invariant and Vector-Valued Singular
           Integral Operators . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 124
       5.3 Hilbert-Space-Valued Mikhlin Multiplier Theorem . . . . . . . . . . . . . . 129
Contents                                                                                                         ix



      5.4 Kernel Representation of a Pseudodifferential Operator . . . . . . . . . . . 133
      5.5 Consequences of the Kernel Representation . . . . . . . . . . . . . . . . . . . . 140
      5.6 Final Remarks and Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 143
          5.6.1 Further Reading . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 143
          5.6.2 Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 144



III    Applications to Function Space and Differential Equations
6     Introduction to Besov and Bessel Potential Spaces                                                       149
      6.1 Motivation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 149
      6.2 A Fourier-Analytic Characterization of Hölder Continuity . . . . . . . . . 150
      6.3 Bessel Potential and Besov Spaces – Definitions and Basic Properties 153
      6.4 Sobolev Embeddings . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 160
      6.5 Equivalent Norms . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 162
      6.6 Pseudodifferential Operators on Besov Spaces . . . . . . . . . . . . . . . . . . 164
      6.7 Final Remarks and Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 168
          6.7.1 Further Reading . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 168
          6.7.2 Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 168
7     Applications to Elliptic and Parabolic Equations                                                        171
      7.1 Applications of the Mikhlin Multiplier Theorem . . . . . . . . . . . . . . . . 171
          7.1.1 Resolvent of the Laplace Operator . . . . . . . . . . . . . . . . . . . . . 171
          7.1.2 Spectrum of Multiplier Operators with Homogeneous Symbols 174
          7.1.3 Spectrum of a Constant Coefficient Differential Operator . . . 177
      7.2 Applications of the Hilbert-Space-Valued Mikhlin Multiplier Theorem 180
          7.2.1 Maximal Regularity of Abstract ODEs in Hilbert Spaces . . . . 180
          7.2.2 Hilbert-Space Valued Bessel Potential and Sobolev Spaces . . 185
      7.3 Applications of Pseudodifferential Operators . . . . . . . . . . . . . . . . . . .                  186
          7.3.1 Elliptic Regularity for Elliptic Pseudodifferential Operators .                               186
          7.3.2 Resolvents of Parameter-Elliptic Differential Operators . . . . .                             188
          7.3.3 Application of Resolvent Estimates to Parabolic Initial Value
                 Problems . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   193
x                                                                                                        Contents



     7.4 Final Remarks and Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 194
            7.4.1     Further Reading . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 194
            7.4.2     Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 195



IV    Appendix
A    Basic Results from Analysis                                                                               199
     A.1 Notation and Functions on Rn . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 199
     A.2 Lebesgue Integral and Lp -Spaces . . . . . . . . . . . . . . . . . . . . . . . . . . . . 201
     A.3 Linear Operators and Dual Spaces . . . . . . . . . . . . . . . . . . . . . . . . . . . 206
     A.4 Bochner Integral and Vector-Valued Lp -Spaces . . . . . . . . . . . . . . . . . 209
     A.5 Fréchet Spaces . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 212
     A.6 Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 216
     Bibliography                                                                                              217
     Index                                                                                                     221
Chapter 1
Introduction

One of the leading ideas in the theory of pseudodifferential operators is to reduce the
study of properties of a linear differential operator
                                         X
                                  P D          c˛ .x/@˛x ;
                                        j˛jm

which is a polynomial in the derivatives @x D .@x1 ; : : : ; @xn / with constants c˛ de-
pending on x, to its symbol
                                       X
                            p.x; / D       c˛ .x/.i /˛ ;
                                         j˛jm

which is a polynomial in the phase variable  2 Rn with constants depending on the
space variable x 2 Rn . Then the question arises how properties of the differential
operator p.x; Dx / – as for example invertibility or the spectrum of p.x; Dx / – are
related to properties of the symbol p.x; /.
   The main tool in the theory is the Fourier transformation
                                        Z
                 F Œf ./ WD fO./ WD      e ix f .x/dx;  2 Rn ;          (1.1)
                                          Rn

which is defined for suitable functions f W Rn ! C. The considerations in the follow-
ing will be formal in order to sketch some main ideas. But they can be made precise
under suitable assumptions.
  The identity (1.1) can be interpreted as inner product of the function f and the
function x 7! e ix :
                                Z
                   F Œf ./ D      f .x/eix dx D .f; e i   /L2 .Rn /       (1.2)
                                 Rn

for fixed  2 Rn , where .  ;  / denotes the inner product on L2 .Rn /. Hence fO./
can be interpreted as the contribution of the complex (multidimensional) oscillation
x 7! e ix to the function, where the phase variable  D .1 ; : : : ; n / 2 Rn describes
the frequency of the oscillation. But the last identity in (1.2) is formal since x 7!
e ix … L2 .Rn /.
   Knowing the Fourier transform g./ D fO./, the function f can be reconstructed
with the aid of the inverse Fourier transformation
                                       Z
                   1              1
                F Œg.x/ WD                 eix g./d  for all x 2 Rn
                                .2/n Rn
2                                                                Chapter 1 Introduction


(under certain assumptions on f ). Indeed it holds that

                  F 1 ŒF Œf   F 1 ŒfO D f                    (Inversion formula)

for suitable f . Here F 1 Œg can be interpreted as infinitesimal linear combination of
x 7! e ix with coefficients g./ (and a correction factor 1=.2/n ).
   Using the inversion formula,
                           X                     Z
                                       ˛    1
              P u.x/ D         c˛ .x/@x                eix u./d
                                                             O     
                                         .2/n Rn
                         j˛jm
                           X                  Z
                                         1
                      D        c˛ .x/              .i /˛ eix u./d
                                                                O     
                                      .2/n Rn
                         j˛jm
                                Z
                            1
                      D              e ix p.x; /u./d
                                                    O        for all x 2 Rn ;
                          .2/n Rn
where we have used @xj eix D i j eix and therefore @˛x eix D .i /˛ eix . This
motivates the definition of the symbol p.x; / of P .
  In the following let p.x; / D p./ be independent of x 2 Rn . Then

                    P u D F 1 Œp./u./
                                    O     D F 1 Œp./F Œu./:

                                                      O
Hence application of P to u acts as multiplication of u./ with the symbol p./. This
suggests that inversion of P corresponds to multiplication with 1=p./ on the side of
the Fourier transformed functions. Therefore we define
                                                      Z
                       1      1 O              1                1 O
         Qf .x/ WD F Œp./ f ./.x/ D              n
                                                           eix      f ./d 
                                               .2/ Rn           p./

assuming that p./ ¤ 0 for all  2 Rn . Then F ŒQf  D p./1 fO./ since F F 1 D
I (inversion formula) and therefore

      PQf D F 1 Œp./F ŒQf  D F 1 Œp./p./1 fO D F 1 ŒfO./ D f

and similarly QPf D f , i.e., Q is indeed the inverse of P .
   Of course Q is no longer a differential operator; it belongs to the class of pseudo-
differential operators, which are defined as
                                   Z
                               1
          q.x; Dx /f .x/ WD             eix q.x; /fO./d  for all x 2 Rn ;
                            .2/n Rn
where q.x; / is a suitable function, which is not necessarily a polynomial in .
   In the case that the coefficients of P depend on x the inverse of P is not determined
that easy. If we define analogously to the constant coefficient case
                                          Z
                                      1                1
                       Qf .x/ WD        n
                                              e ix         fO./d ;
                                   .2/ Rn           p.x; /
Chapter 1 Introduction                                                                          3

then
                              Z                             
                        1                              1
        PQf .x/ D                      P    e ix             fO./d    for all x 2 Rn :
                      .2/n       Rn                 p.x; /
Because of the product rule,
                            
                ix   1                       1
          P e                  D .P eix /         C r.x; /
                     p.x; /                p.x; /
                                             1
                               D p.x; /           C r.x; / D 1 C r.x; /
                                          p.x; /
                                                           1
where the remainder term r.x; / consists of terms where p.x;/ is differentiated with
respect to x at least once. Hence
                                   PQf D I C r.x; Dx /;
where r.x; Dx / ¤ 0 if p.x; / is not independent of x. But in some sense r.x; Dx /
is of lower order (order less than 0) and is of minor role for many purposes. Here Q
is called parametrix of P .
   In order to make the formal considerations above rigorous, one needs to study map-
ping properties of differential and pseudodifferential operators between suitable func-
tion spaces. In the simplest case one studies mapping properties between so-called
(Lq -)Sobolev spaces
            Wqm .Rn / D ¹f 2 Lq .Rn / W @˛x f 2 Lq .Rn / for all j˛j  mº ;
where the derivative @˛x f has to be understood in a generalized sense (i.e., in the sense
of distributions). Moreover, Lq .Rn / is the space of all measurable f W Rn ! C such
that
                                      Z                1
                                                          q
                                                   q
                      kf kLq .Rn / D        jf .x/j dx      < 1:
                                               Rn

The natural question arises whether a solution u 2 Lq .Rn / of a differential (or
pseudodifferential) equation of order m
                         p.x; Dx /u.x/ D f .x/             for all x 2 Rn                    (1.3)
belongs to Wqm .Rn /. This is expected (if p.x; Dx / is elliptic) since p.x; Dx /W
Wqm .Rn / ! Lq .Rn / if p.x; Dx / is a differential operator of order m with bounded
and measurable coefficients.
   In the case that q D 2 and p.x; / D p./ is independent of x (and elliptic) this is
a consequence of Plancherel’s theorem, which states that F W L2 .Rn / ! L2 .Rn / is a
linear isomorphism and
                             Z                  Z
                         1         O    2
                                 jf ./j d  D       jf .x/j2 dx:
                       .2/n Rn                   Rn
4                                                                 Chapter 1 Introduction


This is directly related to the fact that a so-called Fourier multiplication operator

                          f 7! m.Dx /f D F 1 Œm./fO./

is bounded on L2 .Rn / if and only if mW Rn ! C is essentially bounded.
   If 1 < q < 1, q ¤ 2, and p.x; / D p./, the result is still true; but its proof
is much more involved. It follows from the theory of (translation invariant) singular
integral operators, which give sufficient conditions for a Fourier multiplication oper-
ator m.Dx / as above to be bounded on Lq .Rn / for every 1 < q < 1. In particular,
the result is a consequence of the so-called Mikhlin multiplier theorem. Under its
assumptions one has a kernel representation
                            Z
               m.Dx /f D        k.x  y/f .y/ dy for all x … supp f
                              Rn

for a kernel kW Rn n ¹0º ! C that satisfies

              jk.z/j  C jzjn ;    jrk.z/j  C jzjn1      for all z ¤ 0:

Here the term singular integral operator comes from the fact that k is not necessarily
in L1 .Rn /. (Note that e.g. jzjn … L1 .Rn /.) This makes the analysis of these kind
of operators delicate and fascinating. This theory is treated in Chapter 4.
   In the case that p.x; / depends on x 2 Rn one can prove the same kind of “reg-
ularity result” for a solution u 2 Lq .Rn / of (1.3) (under suitable assumptions on p).
But in order to prove it one needs to show that the parametrix Q above maps Lq .Rn /
to Wqm .Rn /. Already in the case q D 2 the result is no longer an easy consequence
of the Plancherel theorem. In Chapter 3 we will prove this fact using that the class of
pseudodifferential operators is closed under compositions and (formal) adjoints. The
proof in the case 1 < q < 1, q ¤ 2, is even more involved. To this end one needs
an extension of the results on translation invariant singular integral operators in Chap-
ter 4 to a class of singular integral operators, which are not necessarily translations
invariant. This extension is done in Chapter 5. To apply this result it is essential that
also pseudodifferential operators q.x; Dx / (of the class treated in this book) admit a
kernel representation of the form
                               Z
           q.x; Dx /f .x/ D        k.x; x  y/f .y/ dy for all x … supp f;
                               Rn

where the kernel satisfies

      sup jk.x; z/j  C jzjn ;     sup jrk.x; z/j  C jzjn1       for all z ¤ 0;
     x2Rn                           x2Rn

which is also shown in Chapter 5.
Chapter 1 Introduction                                                                 5

   One advantage of studying differential equations with the aid of pseudodifferential
operators is that the equations can be treated on a large class of function spaces si-
multaneously. More precisely, if one knows that a pseudodifferential operators maps
between certain function spaces one can directly apply the result to the parametrix
Q above and obtain a corresponding regularity result for the solution u of the dif-
ferential equation above. In Chapter 6 we will give a brief introduction to the scales
of so-called Bessel potential and Besov spaces. They include the Lp -Sobolev spaces
above (if 1 < p < 1) as well as the classical Hölder spaces
                         ´                                            μ
                ˛   n            0   n         jf .x/  f .y/j
             C .R / D u 2 Cb .R / W sup                         <1 ;
                                          x¤y      jx  yj˛
                         ®                                                ¯
           C m;˛ .Rn / D u 2 Cbm .Rn / W @˛x u 2 C ˛ .Rn / for all j˛j  m ;

where 0 < ˛ < 1, m 2 N0 . The class of pseudodifferential operators treated in
this book will have natural mapping properties on the full scales of Besov and Bessel
potential spaces. Therefore one obtains results on elliptic regularity on all of these
spaces. In particular this implies classical regularity results on Hölder spaces.
   This and further applications are treated in Chapter 7. In this chapter we will also
study resolvent equations

                  u.x/ C p.x; Dx /u.x/ D f .x/        for all x 2 Rn ;

where  2 C is called spectral parameter. We will obtain results on unique solvabil-
ity of this equation for  in a suitable sector of the complex plain, provided a certain
condition on parameter ellipticity is satisfied. Moreover, the solution u will be esti-
mated in terms of the right-hand side f and the spectral parameter . Such kind of
results are import in order to study the associated (parabolic) evolution equation

           @ t u.x; t / C p.x; Dx /u.x; t / D f .x; t / for all t > 0; x 2 Rn ;
                                  u.x; 0/ D u0 .x/     for all x 2 Rn :

This will also be briefly discussed in Chapter 7.
   Finally, we note that good solvability and regularity results of linear differential
equations in Lq -Sobolev spaces for a general 1 < q < 1 (and not only for q D 2)
are important for applications to non-linear differential equations. Having results for a
general 1 < q < 1 one can get sharper results for the non-linear equations since one
can apply Sobolev embedding results more flexibly. But applications to non-linear
differential equations are beyond the scope of this book. Moreover, pseudodifferen-
tial operator methods can also be used to study differential equations in sufficiently
smooth domains   Rn together with suitable boundary conditions. But also these
applications are beyond the scope of this introduction. We refer to Grubb [11] for an
introduction to this topic.
                         Part I


Fourier Transformation and Pseudodifferential Operators
Chapter 2
Fourier Transformation and Tempered
Distributions

Summary
In this chapter the Fourier transformation is introduced and their most important
properties for the study of pseudodifferential operators are proved. This includes
Plancherel’s Theorem, the Fourier Inversion Theorem and Fourier Transformation of
tempered distributions. Moreover, the relation between smoothness properties of a
function and decay properties of its Fourier transform are discussed. This will be es-
sential for the study of regularity questions for partial differential equations and the
later study of function spaces.


Learning targets
  Introduction to the Fourier transformation and its most important properties.
  The Plancherel Theorem and the Fourier inverse.
  Learn about the relation between smoothness of functions and decay properties
   of its Fourier transform.
  Get to know the concept of (tempered) distributions and distributional deriva-
   tives.
  Get the necessary knowledge for the study of pseudodifferential operators and
   their applications to partial differential equations.


2.1 Definition and Basic Properties
The Fourier transformation is a powerful tool for analyzing functions on Rn and solv-
ing linear partial differential equations on Rn . Given f 2 L1 .Rn / we define the
Fourier transform of f by
                                             Z
                       fO./ WD F Œf ./ WD      eix f .x/dx                (2.1)
                                               Rn

for  2 Rn . Since jeix f .x/j D jf .x/j for all  2 Rn , we have eix f .x/ 2
L1 .Rn / with respect to x and (2.1) is well-defined. The operator F is called Fourier
transformation. Sometimes we will write e.g. Fx7! in order to denote that the Fourier
10                              Chapter 2 Fourier Transformation and Tempered Distributions


transformation is taken with respect to the variable x and the Fourier transform de-
pends on .
   The following theorem summarizes several important properties of the Fourier
transformation, which can be proved using only its definition:

Theorem 2.1.      1. F W L1 .Rn / ! Cb0 .Rn / is a linear mapping such that

                                  kF Œf kC 0 .Rn /  kf kL1 .Rn / :
                                             b



 2. If f W Rn ! C is a continuously differentiable function such that f 2 L1 .Rn /
    and @j f 2 L1 .Rn /, then

                                  F Œ@xj f  D i j F Œf  D i j fO:                         (2.2)


 3. If f 2 L1 .Rn / such that xj f 2 L1 .Rn /, then fO./ is continuously partial
    differentiable with respect to j and

                                    @j fO./ D F Œixj f .x/:                               (2.3)


 4. Let f 2 L1 .Rn / and .y f /.x/ WD f .x C y/, y 2 Rn , denote the translation of
    f by y. Then F Œy f ./ D e iy fO./ for all  2 Rn .

 5. Let f 2 L1 .Rn / and let ." f /.x/ WD f ."x/, " > 0, denote the dilation of f by
    ". Then

                         F Œ" f ./ D "n fO.="/ D "n ."1 fO/./:

Proof. 1. First of all
                                                 Z
       kfOkL1 .Rn / D sup jfO./j  sup                   jeix f .x/jdx D kf kL1 .Rn / :
                         2Rn             2Rn       Rn


Hence fO is bounded. Let g.x; / D e ix f .x/. Then  7! g.x; / is continuous
for every fixed x 2 Rn , x 7! g.x; / is integrable for every  2 Rn , and jg.x; /j 
jf .x/j 2 L1 .Rn /. Therefore we can apply Theorem A.3 which implies the continuity
of f .
   2. Use integration by parts, cf. Exercise 2.50.
   3. Use Theorem A.4, cf. Exercise 2.50.
   4. Use the change-of-variables theorem, cf. Exercise 2.50.
   5. Use the change-of-variables theorem, cf. Exercise 2.50.
    Section 2.1 Definition and Basic Properties                                          11


!        The relation (2.2) is the fundamental property of the Fourier transformation from
         the point of view of differential equations. Because of the factor i in (2.2), we
         define
                                  1
                             Dxj D @xj ;        Dx D .Dx1 ; : : : ; Dxn /:
                                  i
         Then (2.2) is equivalent to

                                  F ŒDxj f  D j F Œf  D j fO:


         Moreover, if we express a linear differential operator P with constant coefficients
    as
                                                 X
                                        Pf D            c˛ Dx f
                                                j˛jm


    with some constants c˛ 2 C, then
                                                    X
                                       F ŒPf  D            c˛  ˛ fO:
                                                    j˛jm


    Hence application of a linear differential operator P to f corresponds to multiplica-
    tion of fO with the polynomial
                                                    X
                                        p./ WD             c˛  ˛ :
                                                    j˛jm


    The function p./ is called the symbol of P . Moreover, we write P D p.Dx /.

    Remark 2.2. If f 2 L1 .Rn / is continuously differentiable and @xj f 2 L1 .Rn / for
    all j D 1; : : : ; n, then fO./ and j fO./ are bounded functions. Hence

                                                                           C
                         .1 C jj/jfO./j  C        ,       jfO./j            ;
                                                                         1 C jj

    which means that fO./ decays as jj1 as jj ! 1.
      More generally, if f 2 C k .Rn / such that @˛x f 2 L1 .Rn / for all j˛j  k, then one
    can show in the same way that

                                                        C
                                        jfO./j               :
                                                    .1 C jj/k
12                              Chapter 2 Fourier Transformation and Tempered Distributions



     For short: Differentiability of f implies a polynomial decay of fO as jj ! 1.


   On the other hand, if .1 C jxj/k f .x/ 2 L1 .Rn / for some k 2 N, we can apply
Theorem 2.1.3 successively to conclude that fO 2 C k .Rn /. Hence faster decay of
f .x/ as jxj ! 1 yields higher differentiability of fO.
  Finally, the convolution of two functions f 2 L1 .Rn /, g 2 Lp .Rn /, where 1 
p  1, is defined by
                           Z
            .f  g/.x/ WD      f .x  y/g.y/dy for almost all x 2 Rn :       (2.4)
                                 Rn

Using Fubini’s theorem one can show that .f  g/.x/ exists for almost all x 2 Rn
and

 kf  gkLp .Rn /  kf kL1 .Rn / kgkLp .Rn /      for all f 2 L1 .Rn /; g 2 Lp .Rn /; (2.5)

cf. [1, Section 2.12] or [29, Theorem 8.14 and Excercise 4, Chapter 8].
   In the following we will often use the abbreviation

                kf kp WD kf kLp .Rn /      for all f 2 Lp .Rn /; 1  p  1:

For convolutions and Fourier transformation, we have the following simple rule:

Lemma 2.3. Let f; g 2 L1 .Rn /, then

                      fO./g./
                           O    D F Œf  g ./ for all  2 Rn :

Proof. First of all, f .x  y/g.y/ 2 L1 .Rn  Rn / with respect to .x; y/ since
                    Z Z                             Z
     kf  gk1               jf .x  y/g.y/jdydx D           jf .z/g.y/jd.y; z/
                      Rn   Rn                              Rn Rn
                                                       D kf k1 kgk1 :

by Fubini’s theorem and the change-of-variable theorem. Hence
                             Z Z
              F Œf  g./ D          e ix f .x  y/g.y/dydx
                              Rn Rn
                             Z Z                             
                                           ix
                           D             e       .y f /.x/dx g.y/dy
                                n    Rn
                             ZR
                           D      eiy fO./g.y/dy D fO./g./;
                                                               O
                                      Rn

where we have used Fubini’s theorem and the fourth statement of Theorem 2.1.
Section 2.2 Rapidly Decreasing Functions – S.Rn /                                    13


2.2 Rapidly Decreasing Functions – S.Rn /
The space of rapidly decreasing, smooth functions will play a central role since Fourier
transformation is an isomorphism on it. Its definition can be motivated as follows:
   Let f 2 C01 .Rn /. Then @˛x f 2 L1 .Rn / for all ˛ 2 N0 . As seen in Remark 2.2,
fO./ decays faster than .1 C jxj/k for any k 2 N. Moreover, .1 C jxj/k f 2
L1 .Rn / for all k 2 N. Hence fO 2 Cbk .Rn / for all k 2 N, i.e., fO 2 Cb1 .Rn / D
T1                      O                                                1
   kD1 Cb .R /. But f ./ does not have compact support if f 2 C0 .R / unless
         k   n                                                                 n

f  0, cf. Exercise 2.55. If f 2 C01 .Rn /, then fO belongs to the following function
space.

Definition 2.4. The space S.Rn / of all rapidly decreasing smooth functions is the set
of all smooth f W Rn ! C such that for all ˛ 2 N0n and N 2 N0 there is a constant
C˛;N such that

                            j@˛x f .x/j  C˛;N .1 C jxj/N                         (2.6)

uniformly in x 2 Rn . If f 2 S.Rn / and m 2 N, we define the semi-norm:

                       jf jm;S WD     sup     sup jx ˛ @ˇx f .x/j:
                                    j˛jCjˇ jm x2Rn


   We note that f 2 S.Rn / are also called Schwartz functions.
                                                                              2
   Obviously, C01 .Rn /    S.Rn /. The inclusion is strict since f .x/ D ejxj 2
S.Rn / n C01 .Rn /. Moreover, S.Rn /       Cb1 .Rn /. If f; g 2 S.Rn /, then fg 2
S.R /. Moreover, x f 2 S.R / for all ˛ 2 N0n and f 2 S.Rn /. This follows from
     n              ˛          n

the following more general statement:

Lemma 2.5. Let Cpoly   1 .Rn / be the set of all smooth polynomially bounded functions,

i.e., the set of all smooth f W Rn ! C such that for all ˛ 2 N0n there exist m˛ 2 N0
and C˛ > 0 with

                    j@˛x f .x/j  C˛ .1 C jxj/m˛      for all x 2 Rn :
                    1 .Rn / and g 2 S.Rn / we have fg 2 S.Rn /.
Then for every f 2 Cpoly

Proof. This easily follows from the product rule, the Leibniz formula, respectively.
See Exercise 2.58.

  We note that S.Rn / are Fréchet spaces with respect to the semi-norms j  jm;S ,
m 2 N. This can be easily proved using the completeness of Cbk .Rn / for any k 2 N0 .
14                           Chapter 2 Fourier Transformation and Tempered Distributions


Remark 2.6. At first sight, it may be more natural to use

                      jf j0m;S WD    sup    sup .1 C jxj/k j@˛ f .x/j
                                    kCj˛jm x2Rn

as semi-norms on S.Rn / since they are more closely related to the inequality (2.6).
But the definition of j  jm;S is more convenient when dealing with Fourier transfor-
mation, which will be demonstrated in the proof of the next lemma. Moreover, it does
not matter if we use the semi-norms j  jm;S or j  j0m;S – the semi-norms are equivalent
in the following sense: For every m 2 N0 there is an k.m/ 2 N0 such that

                jf j0m;S  Cm jf jk.m/;S                   0
                                            and jf jm;S  Cm jf j0k.m/;S

for all f 2 S.Rn /. (Actually, in this special case we can simply choose k.m/ D m.)
                                                                                 1
   Finally, we note that we can replace .1 C jxj/ in (2.6) by hxi WD .1 C jxj2 / 2 since
                                                  p
                              hxi  .1 C jxj/  2hxi:

     For our purposes, a fundamental property of S.Rn / is the following:

Lemma 2.7. F W S.Rn / ! S.Rn / is a linear mapping. Moreover, for all m 2 N0
there is some Cm > 0 such that

                    jfOjm;S  Cm jf jmCnC1;S       for all f 2 S.Rn /:

I.e., F W S.Rn / ! S.Rn / is bounded.

Proof. First of all, if f 2 S.Rn /,
                         Z
                                                               
              kf k1 D         .1 C jxj/n1 .1 C jxj/nC1 jf .x/j dx
                          RZn

                      C        .1 C jxj/n1 dxjf jnC1;S D C jf jnC1;S ;
                            Rn

where C depends only on the dimension n. Thus

                        jfOj0;S D kfOk1  kf k1  C jf jnC1;S                      (2.7)

by Theorem 2.1.1 and the previous estimate. Because of Theorem 2.1.2/3,

                             ˛ Dˇ fO./ D F ŒDx˛ .x ˇ f .x//:

Hence

                         k ˛ D fOk1  C jDx˛ .x ˇ f .x//jnC1;S
                               ˇ
Section 2.3 Inverse Fourier Transformation and Plancherel’s Theorem                         15

by (2.7). Using the Leibniz formula (A.1),
                                                  !
                                        X ˛
                    Dx˛ .x ˇ f .x// D             .Dx x ˇ /.Dx˛ f .x//:
                                        ˛

         
Since Dx x ˇ is polynomial of degree less than jˇj,

                      jDx˛ .x ˇ f .x//jnC1;S  C˛;ˇ jf jj˛jCjˇ jCnC1:

Collecting all estimates and taking the supremum over ˛; ˇ 2 N0n with j˛j C jˇj  m,
we finally conclude

                                 jfOjm;S  Cm jf jmCnC1;S

with arbitrary m 2 N0 where Cm depends only on n and m. Hence F Œf  2 S.Rn /
for all f 2 S.Rn /.

Example 2.8. Let f .x/ D e jxj =2 , x 2 Rn . Then fO./ D .2/n=2 ejj =2 .
                                    2                                            2


                             2           2
Proof. Since f .x/ D e x1 =2    exn =2 and eix D e ix1 1    eixn n ,
             Z                               Z
      O            ix1 1 x12 =2                          2
     f ./ D     e        e        dx1      eix1 1 e xn =2 dxn D g.
                                                                         O 1 /    g.
                                                                                     O n/
                R                             R
                     2
where g.x/ D e x =2 , x 2 R. Hence it is sufficient to consider the case n D 1.
   Because of Theorem 2.1.3, g./    O       is continuously differentiable and gO 0 ./ D
                                            d x 2 =2
F Œixg.x/. Moreover, xg.x/ D dx e                  D g 0 .x/. Therefore, using Theorem
2.1.2,
                       gO 0 ./ D i F Œg 0 .x/ D  g./;
                                                      O        2 R;
               R x 2 =2          p
      O
and g.0/    D Re          dx D 2. Hence gO is uniquely determined by the latter
                                                                  p        2
initial value problem, which has the unique solution g./ O     D 2e  =2 .

   An alternative proof using the Cauchy integral formula can be found in [27, Exam-
ple 1.7].


2.3 Inverse Fourier Transformation and Plancherel’s
    Theorem
In the following we will show that the Fourier transformation F W S.Rn / ! S.Rn / is
invertible and that its inverse is given by
                                                  Z
                                1            1
                    L
                   g.x/   WD F Œg.x/ WD               eix g./d ;
                                            .2/n Rn
16                             Chapter 2 Fourier Transformation and Tempered Distributions


which is well-defined for all g 2 L1 .Rn /. F 1 is called inverse Fourier transforma-
tion. We note that
                             F 1 Œg.x/ D .2/n F Œg.x/:                         (2.8)
Sometimes we will write e.g. F71   !x
                                        Œg in order to denote that the inverse Fourier
transformation is taken with respect to the variable  and the inverse Fourier transform
depends on x.
                    2
   If f .x/ D e jxj =2 is the function discussed in Example 2.8, then

            F 1 ŒfO./ D .2/n=2 F Œejj =2 .x/ D e jxj =2 D f .x/:
                                            2                 2



Hence F 1 ŒfO D f in this special f . In general we have:

Lemma 2.9 (Inversion Formula). Let f 2 S.Rn /. Then f .x/ D F 1 ŒfO.x/ for all
x 2 Rn . In particular, F W S.Rn / ! S.Rn / is a linear isomorphism.
Proof. First of all,
                                            Z    Z                          
                                      1
               F   1
                        ŒfO.x/ D                      e   i.xy/
                                                                      f .y/dy d :
                                    .2/n   Rn    Rn

Since e i.xy/ f .y/ … L1 .R2n / as function in .y; /, we cannot apply Fubini’s
                                                                      2   2
theorem directly. Therefore we introduce a factor " ./ WD e " jj =2 , " > 0,
which assures absolute integrability. Since lim"!0 " ./ D 1 for all  2 Rn and
fO./ 2 L1 .Rn /, we have by Lebesgue’s and Fubini’s theorem
                                    Z Z                                
            1 O               1                 i.xy/
          F Œf .x/ D lim                      e           " ./f .y/dy d 
                         "!0 .2/n Rn       Rn
                                    Z
                               1                       2   2
                       D lim             e i.xy/ e" jj f .y/d.y; /:
                         "!0 .2/n R2n

Using the substitution  D =" and y D x C "z,
                       Z
                  1                        2   2
                     n
                             ei.xy/ e" jj =2 f .y/d.y; /
               .2/ R2n
                           Z Z                         
                      1                 iz jj2 =2
                D                     e       e        d f .x C "z/dz
                    .2/n Rn Rn
                             Z
                       1               2
                D        n=2
                                  ejzj =2 f .x C "z/dz
                    .2/       Rn

because of Example 2.8. Since f is continuous, we get
               Z                                             Z
         1            jzj2 =2                         1               2
  lim      n=2
                    e          f .x C "z/dz D f .x/      n=2
                                                                  ejzj =2 dz D f .x/
 "!0 .2/        Rn                                 .2/       Rn

by Lebesgue’s theorem on dominated convergence. Hence F 1 ŒfO.x/ D f .x/,
which proves the lemma.
Section 2.3 Inverse Fourier Transformation and Plancherel’s Theorem                     17

                                                                              2     2
Remark 2.10. The technique of inserting a rapidly decreasing factor like e" jj =2 ,
" > 0, and passing to the limit afterwards will be fundamental in the following. It is
the basis of the definition of the oscillatory integrals in Section 3.3 below.

Theorem 2.11 (Plancherel’s Theorem). For every f; g 2 S.Rn /
                 Z                          Z
                                       1
                      f .x/g.x/dx D             fO./g./d
                                                      O    :                      (2.9)
                   Rn                .2/n Rn

In particular,

                                              1
                              2
                          kf kL 2 .Rn / D         kfOkL
                                                      2
                                                        2 .Rn / :
                                            .2/n

and F extends to a linear isomorphism F W L2 .Rn / ! L2 .Rn /.

Proof. Using Fubini’s theorem, it is easy to check that
                     Z                         Z
                1
                         F Œf ./g./d
                                    O     D       f .x/F 1 Œg.x/dx
                                                              O
              .2/n Rn                          Rn

for all f; g 2 S.Rn /. Because of Lemma 2.9, g D F 1 Œg,
                                                       O which implies (2.9). In
particular, if f D g,

                                1
                                    kF Œf k22 D kf k22 :
                              .2/n

Since C01 .Rn / is dense in L2 .Rn / and obviously C01 .Rn / S.Rn / L2 .Rn /, F
can be extended by continuity to a bounded linear operator F W L2 .Rn / ! L2 .Rn /.
By (2.8) the same is true for F 1 . Moreover, F 1 ŒF Œf  D f for all f 2 L2 .Rn /
since this is true for all f 2 S.Rn /.

Remark 2.12. Because of the factor .2/n in the definition of the inverse Fourier
transformation and in (2.9), we introduce the common notation


                                                  d                                         !
                                    d̄ WD
                                                .2/n


Then
                                            Z
                           F 1 Œg.x/ D             e ix g./d̄               (2.10)
                                                Rn
18                            Chapter 2 Fourier Transformation and Tempered Distributions


and                     Z                          Z
                                 f .x/g.x/dx D              fO./g./
                                                                 O d̄:
                            Rn                         Rn
In the following all integrals with respect to a phase variable ; ; : : : will be taken
with respect to the scaled Lebesgue measure d̄; d̄ ; : : : . All integrals with respect
to a space variable x; y; z; : : : will be integrals using the usual Lebesgue measure
dx; dy; dz; : : : . Then all constants are part of the measure and we do not have to
worry about them.

Lemma 2.13 (Fourier multipliers on L2 .Rn /).
Let mW Rn ! C be a measurable functions. Then

                 m.Dx /f WD F 1 Œm./fO./ for all f 2 L2 .Rn /

is a well-defined bounded operator m.Dx /W L2 .Rn / ! L2 .Rn / if and only if m 2
L1 .Rn /. Moreover, km.Dx /kL.L2 .Rn // D kmkL1 .Rn / .

Proof. If m 2 L1 .Rn /, obviously m./fO./ 2 L2 .Rn / for every f 2 L2 .Rn /
because of Theorem 2.11. Moreover,
                                 1                          1
     km.Dx /f kL2 .Rn / D            n   km./fOk2             n   kmk1 kfOk2 D kmk1 kf k2 :
                            .2/     2                 .2/ 2

Hence m.Dx /W L2 .Rn / ! L2 .Rn / is a bounded linear operator and

                                 km.Dx /kL.L2 .Rn //  kmk1 :

 For the converse implication it is sufficient to prove that a multiplication operator
M W L2 .Rn / ! L2 .Rn /, .M fO/./ D m./fO./ is bounded if and only if m 2
L1 .Rn /.
  Hence, if m.Dx /W L2 .Rn / ! L2 .Rn / is a bounded linear operator, then

                            F m.Dx /F 1 W L2 .Rn / ! L2 .Rn /

is also a bounded linear operator, where

                            .F m.Dx /F 1 g/./ D m./g./

for all g 2 L2 .Rn /. Moreover,
                          ²Z                                                ³
                                                      1   n
       kf kL1 .Rn / D sup       f ./h./d  W h 2 L .R /; khkL1 .Rn / D 1
                              n
                          ²ZR                                                 ³
                                                        1   n
                    D sup       jf ./jjh./jd  W h 2 L .R /; khkL1 .Rn / D 1
                                 Rn
Section 2.3 Inverse Fourier Transformation and Plancherel’s Theorem                                 19

for every f 2 L1 .Rn /, cf. (A.4), and
                           Z
               2
     km./g./kL2 .Rn / D      jm./j2 jg./j2 d   kM k2L.L2 .Rn // kgkL
                                                                         2
                                                                           2 .Rn / :
                                Rn

Hence
                                                                       Z
     2               2
  kmkL 1 .Rn / D kjmj kL1 .Rn / D                         sup                jm./j2 jh./j d 
                                        h2L1 .Rn /WkhkL1 .Rn / 1       Rn
                                                Z
                D             sup                        jm./j2 jg./j2 d   kM k2L.L2 .Rn // ;
                    g2L2 .Rn /WkgkL2 .Rn / 1       Rn

                                                                                     1
where we have used that h 2 L1 .Rn / if and only if g./ WD jh./j 2 2 L2 .Rn /.
Therefore m 2 L1 .Rn / and km.Dx /kL.L2 .Rn // kmkL1 .Rn / .

Example 2.14. 1. If m./ D F Œk, where k 2 L1 .Rn /, then m 2 Cb0 .Rn /
   L1 .Rn / due to Lemma 2.3. Moreover, m.Dx /f D k  f and

                           km.Dx /f k2  kmk1 kf k2  kkk1 kf k2 :

     (Note that this inequality also follows from (2.5).)
                      i
 2. Let mj ./ D jjj , j D 1; : : : ; n. Then kmj k1 D 1 and Rj WD mj .Dx /W
    L2 .Rn / ! L2 .Rn / is a bounded operator. Rj is called Riesz operator. It will
    be shown that
                               Z
                                        xj  yj
               Rj f D lim cn                     f .y/dy D “kj  f ”;
                        "!0      Rn  jx   yjnC1
                                                    nC1
     where kj .z/ D zj =jzjnC1 , cn D   2 . nC1 2 /, cf. Example 4.17 below. Note
     that the kernel kj … L1 .Rn /. These operators are typical examples of so-called
     singular integral operators. If n D 1, m1 ./ D i sign  and R1 is also called
     Hilbert transformation.
 3. The symbol of  is jj2 , i.e.,  f D F 1 Œjj2fO./. Hence formally the
    inverse of  is given by the operator . /1 f D F 1 ŒfO./=jj2  and there-
    fore
                                                         
                             1        1 i j i k O
                @xj @xk . / f D F                   f ./ D Rj Rk f;
                                             jj jj
     where Rj ; Rk are the Riesz operator defined above. Hence, if f 2 L2 .Rn /,
     then @j @k . /1 f 2 L2 .Rn / in some sense; but the derivatives do not have
     exist in the classical sense. (They have to be understood as distributional deriva-
     tives, which will be defined in the next section.) More details can be found in
     Section 4.1.
20                           Chapter 2 Fourier Transformation and Tempered Distributions


Corollary 2.15. Let f; g 2 S.Rn /. Then f  g 2 S.Rn /, where the convolution
f  g is defined as in (2.4). Moreover, f  g D g  f and for every ˛ 2 N0n

           @˛x .f  g/.x/ D .@˛x f /  g.x/ D f  .@˛x g/.x/      for all x 2 Rn :

Proof. Because of Lemma 2.3,

                       F Œf  g./ D fO./g./
                                           O    for all  2 Rn ;

where fO./g./
           O    2 S.Rn / due to Lemma 2.5. Moreover, due to (2.5) f g 2 L2 .Rn /.
Hence Theorem 2.11 yields

                            f  g D F 1 ŒfOg
                                            O      in L2 .Rn /;

where F 1 ŒfOg
              O 2 S.Rn / due to Lemma 2.9. Furthermore, the last identity implies
f  g D F ŒgO fO D g  f since f; g 2 S.Rn / are arbitrary. Similarly,
           1


     @˛x .f  g/.x/ D F 1 Œ.i /˛ fOg.x/
                                     O     D F 1 Œ.i /˛ fO  g.x/ D .@˛x f /  g.x/;

for all x 2 Rn , where we have used (2.2). Interchanging f and g finally gives

                            @˛x .f  g/.x/ D f  .@˛x g/.x/

for all x 2 Rn .


2.4 Tempered Distributions and Fourier Transformation
For many applications the space S.Rn / is to small. Therefore we introduce:

Definition 2.16. The space of tempered distributions is S 0 .Rn / WD .S.Rn //0 – the
space of linear and bounded functionals f W S.Rn / ! C. A sequence fk 2 S 0 .Rn /
converges to f 2 S 0 .Rn / if and only if

                        lim hfk ; 'i D hf; 'i    for all ' 2 S.Rn /:
                       k!1


     Here hf; 'i WD f .'/, ' 2 S.Rn / denotes the duality product.

Remark 2.17. 1. If f W S.Rn / ! C is a linear mapping, then by definition f is
   bounded if and only if there is some m 2 N0 and a constant C > 0 such that

                           jhf; 'ij  C j'jm;S    for all ' 2 S.Rn /:
Section 2.4 Tempered Distributions and Fourier Transformation                        21

 2. If f W Rn ! C is a measurable function such that hxiN f .x/ 2 L1 .Rn / for
    some N 2 N0 , then f is naturally identified with a tempered distribution Ff 2
    S.Rn /0 defined by
                              Z
                  hFf ; 'i WD    f .x/'.x/dx for all ' 2 S.Rn /:             (2.11)
                                  Rn

     Moreover,

      jhFf ; 'ij  khxiN f kL1 .Rn / j'j0N;S  C khxiN f k1 j'jN;S ;    ' 2 S.Rn /;

     where j  j0N;S is as in Remark 2.6. We note that the mapping f 7! Ff is
     one-to-one because of the fundamental lemma of the calculus of variation, cf.
     Lemma A.7.

Definition 2.18. Let F 2 S 0 .Rn /. Then F is called a regular tempered distribution
if there is some f 2 L1loc .Rn / such that hxiN f .x/ 2 L1 .Rn / for some N 2 N0
and F D Ff , where Ff is as in (2.11).

   In the following we will identify a regular (tempered) distribution F D Ff with
the measurable function f – identifying functions that coincide almost everywhere as
usual.
   Not every distribution is a regular distribution as the following example shows, cf.
Exercise 2.66.

Example 2.19. The famous delta distribution ı0 2 S 0 .Rn / is defined by

                        hı0 ; 'i WD '.0/     for all ' 2 S.Rn /:

More generally,

                        hıx ; 'i WD '.x/     for all ' 2 S.Rn /;

defines a tempered distribution for every x 2 Rn .
   One of the most important properties of distributions is that they can be differenti-
ated infinitely many times (in a generalized sense).

Definition 2.20. Let f 2 S 0 .Rn /. Then the distributional derivative @˛x f 2 S 0 .Rn /
of f is the distribution defined by

                   h@˛x f; 'i WD .1/j˛j hf; @˛x 'i   for ' 2 S.Rn /:
                  1 .Rn /, then the product fg 2 S 0 .Rn / is defined by
Moreover, if g 2 Cpoly

                       hfg; 'i D hf; g'i      for all ' 2 S.Rn /:
22                             Chapter 2 Fourier Transformation and Tempered Distributions


Remark 2.21. 1. The adjoint T 0 W Y 0 ! X 0 of a linear operator T W X ! Y is
   defined by hT 0 y 0 ; xi WD hy 0 ; T xi for y 0 2 Y 0 and x 2 X. Hence the derivative
   @˛x W S 0 .Rn / ! S 0 .Rn / is the adjoint of .1/j˛j @˛x W S.Rn / ! S.Rn /.
 2. If f W Rn ! C is a k-times continuously differentiable function with hxiN @˛x f 2
    L1 .Rn / for all j˛j  k, then f can be naturally considered as a tempered distri-
    bution, cf. Remark 2.17.1, Moreover, the distributional derivatives up to order k
    coincides with the usual derivative, i.e.
                                    Z                      Z
            h@˛x f; '.x/i D .1/j˛j    f .x/@˛x '.x/dx D       @˛x f .x/'.x/dx
                                          Rn                                     Rn

     for all j˛j  k and ' 2 S.Rn / due to integration by parts.
 3. Since every measurable function f W Rn ! C such that hxiN f .x/ 2 L1 .Rn /
    for some N 2 N0 can be considered as a distribution, it can be differentiated
    infinitely many times in the sense of distributions although it may even not be
    continuous.

Example 2.22. 1. Let f be the Heaviside function, i.e. f .x/ D 1 for x         0 and
   f .x/ D 0 for x < 0. Then f 2 S 0 .R/ and the distributional derivative f 0 is
                     Z                     Z 1
            0                  0
         hf ; 'i D      f .x/' .x/dx D         ' 0 .x/dx D '.0/ D hı0 ; 'i
                           R                                    0

     for all ' 2 S.R/. Hence f 0 D ı0 is the delta distribution.
 2. Let f 2 L1 .R/ be such that there are x1 < x2 <    < xn with f j.xj ;xj C1 / D
    fj j.xj ;xj C1 / for some fj 2 Cb1 .Œxj ; xj C1 / for all j D 1; : : : ; n  1. Then

                                  X
                                  n1                                X
                                                                     n1
                        @x f D           fj0     .xj ;xj C1 / C           Œf .xj /ıxj
                                  j D1                              j D1

     in the sense of S 0 .Rn /, where Œf .xj / WD fj .xj /  fj 1 .xj /, cf. Exercise 2.61.
     In particular, if additionally f 2 C 0 .R/, then @x f is a regular tempered distri-
     bution and
                                                 X
                                                 n1
                                   @x f D               fj0    .xj ;xj C1 / :
                                                 j D1


 3. By definition the distributional derivative of the delta distribution is

                     h@˛x ı0 ; 'i D .1/j˛j hı0 ; @˛x 'i D .1/j˛j .@˛x '/.0/

     for all ' 2 S.Rn /.
Section 2.5 Fourier Transformation and Convolution of Tempered Distributions           23

  The support of a continuous function f W Rn ! C is defined as the set

                           supp f D ¹x 2 Rn W f .x/ ¤ 0º;                          (2.12)

which is a closed set be definition. This definition does make much sense for mea-
surable functions if functions coinciding on zero sets are identified. Moreover, the
definition does not make sense for a general distribution since a distribution is not
defined in a single point. The proper substitute for the definition is:

Definition 2.23. Let F 2 S 0 .Rn / and let U  Rn be open. Then F vanishes on U ,
for short: F jU  0 if

                           hF; 'i D 0 for all ' 2 C01 .U /:

The support of F is defined as
                     ®                                               ¯
          supp F D x 2 Rn W there is no " > 0 such that F jB" .x/  0

If f 2 L1loc.Rn / (with hxiN f .x/ 2 L1 .Rn / for some N 2 N), then f vanish on
U if Ff vanishes on U . Moreover, supp f WD supp Ff .

  Here ' 2 C01 .U / is extended by zero to a function in C01 .Rn /.
  Consequently, supp F is the smallest closed set such that F vanishes on Rn n
supp F .
  We note that, if f 2 L1 .Rn / is continuous (with hxiN f .x/ 2 L1 .Rn / for some
N 2 N), then the definition of supp f in (2.12) coincides with the definition of
supp f due to Definition 2.23, cf. Exercise 2.67.

Example 2.24. Let ıx 2 S 0 .Rn /, x 2 Rn , be as in Example 2.19. Then

                                     supp ıx D ¹xº

since hıx ; 'i D 0 for any ' 2 C01 .Rn / with x … supp '.


2.5 Fourier Transformation and Convolution of Tempered
    Distributions
Most operations on S.Rn / directly carry over to S 0 .Rn / by duality. In particular, this
holds true for the Fourier transformation.
24                           Chapter 2 Fourier Transformation and Tempered Distributions


Definition 2.25. Let f 2 S 0 .Rn /. The Fourier transform F Œf  and its Fourier in-
verse F 1 Œf  of f are defined as the distributions

                      hF Œf ; 'i WD hf; F Œ'i     for all ' 2 S.Rn /;
                    hF 1 Œf ; 'i WD hf; F 1 Œ'i for all ' 2 S.Rn /:

Remark 2.26. We note that the definition of F on S 0 .Rn / is consistent with the
definition of F on L1 .Rn / in the following sense: If f 2 L1 .Rn / and Ff 2 S 0 .Rn /
is the associated tempered distribution due to (2.11), then
                               Z
 hF ŒFf ; 'i D hFf ; F Œ'i D            O d
                                    f ./'./
                                 Rn
                               Z Z                                 Z
                             D           eix f ./ d '.x/ dx D     fO.x/'.x/ dx
                                  Rn   Rn                               Rn
                              D hFfO ; 'i
for all ' 2 S.Rn /, i.e., F ŒFf  D FfO . – Indeed this calculation is a motivation for the
definition of F on S 0 .Rn /. The analogous statement holds for F 1 .

Proposition 2.27. The Fourier transformation F W S 0 .Rn / ! S 0 .Rn / is a continu-
ous linear mapping. Moreover, F W S 0 .Rn / ! S 0 .Rn / is a linear isomorphism with
inverse F 1 .
Proof. Since F W S.Rn / ! S.Rn / is a continuous linear operator and
                         hF Œf ; 'i D hf; F Œ'i D .f ı F /.'/;
F Œf  D f ı F W S.Rn / ! C is a continuous linear operator. Moreover, if fk ! f
in S 0 .Rn / as k ! 1, then
              hF Œfk ; 'i D hfk ; F Œ'i ! hf; F Œ'i D hF Œf ; 'i
                                            k!1
                n /. Hence F W S 0 .Rn / ! S 0 .Rn / is continuous.
for all ' 2 S.R
   Finally, F 1 has the same properties as F and obviously F 1 ŒF Œf  D f for all
f 2 S 0 .Rn /.

Remark 2.28. As differentiation, the Fourier transformation is defined by duality,
i.e., F W S 0 .Rn / ! S 0 .Rn / is defined as the adjoint of F W S.Rn / ! S.Rn /.

Example 2.29. The Fourier transform of the delta distribution ı0 can be simply cal-
culated:
                                                   Z
          hF Œı0 ; 'i D hı0 ; F Œ'i D F Œ'.0/ D    '.x/dx D h1; 'i
                                                        Rn
for all ' 2 S.R /. Hence F Œı D 1.
                n
Section 2.6 Convolution on S 0 .Rn / and Fundamental Solutions                    25

  We conclude with a useful technical lemma:

Lemma 2.30. For every f 2 S 0 .Rn / there is some N 2 N0 such that

                            hxi2N hDx i2N f 2 L2 .Rn /;

where hDx i2N f WD F 1 Œhi2N fO for all f 2 S 0 .Rn /.

  We note that the products hxi2N f and hi2N fO are well-defined in S 0 .Rn / for
any f 2 S 0 .Rn / since hxi2N 2 Cb1 .Rn /         1 .Rn /. More precisely, for any
                                                 Cpoly
s 2 R the function hi is a smooth function satisfying
                      s


                    j@˛ his j  Cs;˛ .1 C jj/sj˛j   for all  2 Rn        (2.13)

for all ˛ 2 N0n and some Cs;˛ > 0. This estimate can be proved by considering
the homogeneous function f W RnC1 n ¹0º ! R defined by fs .; t / D j.t; /js , cf.
Exercise 2.51.

Proof of Lemma 2.30. See Exercise 2.65.

Corollary 2.31. For every f 2 S 0 .Rn / there is a sequence .fk /k2N0      C01 .Rn /
such that fk !k!1 f in S 0 .Rn /.

Proof. See Exercise 2.68.


2.6 Convolution on S 0 .Rn / and Fundamental Solutions
Next we define the convolution of f 2 S 0 .Rn / and g 2 S.Rn /. To this end we note
that
          Z                          Z
               .f  g/.x/'.x/ dx D        .g  f /.x/'.x/ dx
            Rn                         n
                                     ZR Z
                                   D            f .y/g.x  y/'.x/ dy dx
                                       n      n
                                     ZR R Z
                                   D       f .y/      g.x  y/'.x/ dx dy
                                       n           Rn
                                     ZR
                                   D       f .y/.gQ  '/.y/ dy
                                          Rn

                                                               Q
for all f; g; ' 2 S.Rn / because of Fubini’s Theorem, where g.x/    D g.x/ for all
x 2 Rn . The same conclusion holds if f 2 L1loc .Rn / with hxiN f .x/ 2 L1 .Rn / for
some N 2 N.
26                               Chapter 2 Fourier Transformation and Tempered Distributions


     Therefore we define:

Definition 2.32. Let f 2 S 0 .Rn /, g 2 S.Rn /. Then the convolution f  g 2 S 0 .Rn /
of f and g is defined by

                       hf  g; 'i D hf; gQ  'i      for all ' 2 S.Rn /

      Q
where g.x/ D g.x/ for all x 2 Rn .

Remark 2.33. 1. If f is a regular tempered distribution, then the calculation above
   shows that the definition of f  g in the sense of Definition 2.32 coincides with
                                Z
                .f  g/.x/ D       f .x  y/g.y/ dy for all x 2 Rn :
                                       Rn

  2. One can show that f  g is regular tempered distribution with f  g 2 C 1 .Rn /
     given by

                            .f  g/.x/ D hf; Qx gi for all x 2 Rn ;

       where Qx g.y/ D g.y  x/ for all y 2 Rn , cf. Exercise 2.69.

Example 2.34. Let ı0 be as in Example 2.19. Then
                                             Z
               hı0  g; 'i D hı0 ; gQ  'i D   g.y  0/'.y/ dy
                                                     Rn

for all g; ' 2 S.Rn /. Hence ı0  g is a regular tempered distribution and

                                 ı0  g D g   for all g 2 S.Rn /:

  Finally, the calculus for derivatives and the Fourier transformation of convolutions
on S.Rn / easily extends to convolutions with elements in S 0 .Rn /:

Lemma 2.35. Let f 2 S 0 .Rn /; g 2 S.Rn /. Then

               @˛x .f  g/ D .@˛x f /  g D f  .@˛x g/;     F Œf  g D fOgO

in S 0 .Rn / for all ˛ 2 N0n .

Proof. See Exercise 2.71.

Example 2.36. The so-called fundamental solution of the Laplace equation N is de-
fined by
                                ´
                                  c2 log jxj   if n D 2;
                       N.x/ D            nC2
                                                                          (2.14)
                                  cn jxj      if n 3;
Section 2.7 Sobolev and Bessel Potential Spaces                                        27

                 1             1
where c2 D  4    , cn D  .n2/! n
                                     , where !n D 2 n=2 = . n2 / is the surface area
of the unit sphere. Then N 2 L1loc .Rn / and .1 C jxj/M N.x/ 2 L1 .Rn / for some
M 2 N0 . Hence N defines a regular tempered distribution. Moreover, one can show
that

                                  X
                                  N
                           N D          @2xj N D ı0   in S 0 .Rn /;
                                 j D1

cf. e.g. [28, Example 5.58]. Now, if we define u D N  f for some f 2 S.Rn /, then

                      u D . N /  f D ı0  f D f            in S 0 .Rn /

because of Lemma 2.35 and Example 2.34. Hence we can solve the Laplace equation
in S 0 .Rn / for any right-hand
                             Pside f 2 S.R
                                          n /.

   More generally, if P D j˛jm c˛ @x is a differential operator with constant coef-
                                       ˛

ficients c˛ 2 C, m 2 N0 , then E 2 S 0 .Rn / is called a fundamental solution for P
if

                                         PE D ı0 :

Again, if u D E  f for some f 2 S.Rn /, then P u D f in S 0 .Rn / by the same
calculation as before.


2.7 Sobolev and Bessel Potential Spaces
Definition 2.37. Let 1  p  1, m 2 N0 . Then the (Lp -)Sobolev space of order m
(on Rn ) is defined by

            Wpm .Rn / D ¹f 2 Lp .Rn / W @˛x f 2 Lp .Rn / for all j˛j  mº:

Moreover, we define
                              ´P                          1
                                               p
                               . j˛jm k@˛x f kLp .Rn / / p     if 1  p < 1
            kf kWpm .Rn / D
                               maxj˛jm k@˛x f kL1 .Rn /        if p D 1:

Here @˛x f has to be understood in the sense of S 0 .Rn / and @˛x f 2 Lp .Rn / if @˛x f is
a regular distribution in Lp .Rn /, i.e., there is some g˛ 2 Lp .Rn / such that
                                              Z
                        h@˛x f; 'i D .1/j˛j       g˛ .x/@˛x '.x/ dx
                                              Rn

for all ' 2 S.Rn /. As usual we identify g˛ and @˛x f .
28                             Chapter 2 Fourier Transformation and Tempered Distributions


     The fundamental relation (2.2) generalizes to functions in W2m .Rn / as follows:

Theorem 2.38. Let f 2 W2m .Rn /, m 2 N0 . Then for any j˛j  m we have

                    F Œ@˛x f ./ D .i /˛ fO./ for almost all  2 Rn :
Proof. Let f 2 W2m .Rn /. Then g˛ WD @˛x f 2 L2 .Rn / for any j˛j  m and therefore
gO ˛ 2 L2 .Rn / by Plancherel’s Theorem. Moreover,
          Z                       Z                                  Z
      1                                ˛                         j˛j
               gO ˛ ./'./ d  D              L
                                      @x f .x/'.x/   dx D .1/                    L
                                                                         f .x/@˛x '.x/ dx
    .2/n Rn                       Rn                                 Rn
                                                 Z
                                            1
                                D .1/j˛j             fO./.i /˛ './ d 
                                          .2/n Rn
                                         Z
                                    1
                                D            .i /˛ fO./'./ d 
                                  .2/n Rn
for any ' 2 S.Rn / by Plancherel’s Theorem, the definition of distributional deriva-
tives in Lp .Rn / and Theorem 2.1. Since ' 2 S.Rn / is arbitrary, this implies
F Œ@˛x f ./ D .i /˛ fO./ for almost all  2 Rn .

     As a consequence we obtain that for any f 2 W2m .Rn /
                                          Z    X
                                     1
                      2
                  kf kW m .Rn / D       n
                                                  j ˛ j2 jfO./j2 d ;
                        2         .2/ Rn
                                                  j˛jm

where
                                 X
                    cm him            j ˛ j2  Cm him   for all  2 Rn
                                j˛jm

for some constants cm ; Cm > 0. This gives a motivation for the following definition:

Definition 2.39. Let s 2 R. Then the (L2 -)Bessel potential space H2s .Rn / is defined
as

                     H2s .Rn / WD ¹u 2 S 0 .Rn /W hDx is u 2 L2 .Rn /º;
                       kukH2s WD kuks;2 WD khDx is uk2 ;
                           1
where hi WD .1 C jj2 / 2 and

                     hDx is f D F 1 Œhis fO     for all f 2 S 0 .Rn /:

  Often we will write H s .Rn / instead of H2s .Rn /.
                                1
  Because of (2.13), his 2 Cpoly   .Rn /. Therefore his fO./ 2 S.Rn / for all f 2
S.Rn / because of Lemma 2.5. By duality his fO 2 S 0 .Rn / for all f 2 S 0 .Rn /.
Therefore hDx is W S 0 .Rn / ! S 0 .Rn / is well-defined above.
Section 2.7 Sobolev and Bessel Potential Spaces                                     29

Remark 2.40. By definition hDx is is an isomorphism from H2s .Rn / to L2 .Rn /.
Hence H2s .Rn / normed by k  k2;s is Banach space. Moreover,

                .u; v/H2s WD .hDx is u; hDx is v/L2 ;          u; v 2 H2s .Rn /

is an inner product on H2s .Rn / and kuk22;s D .u; u/H2s . Thus H2s .Rn / is a Hilbert
space. Moreover, W2m .Rn / is a Hilbert space with inner product
                                      X Z
                   .f; g/W2 .Rn / D
                            m                  @˛x f .x/@˛x g.x/ dx
                                                   Rn
                                          j˛jm

  In Corollary 3.42 below we will show that S.Rn / is dense in H2s .Rn / for all s 2 R.
  Finally, H2s1 .Rn /  H2s2 .Rn / for s1 s2 since

 kuks2 ;2 D khDx is2 uk2 D khDx is2 s1 hDx is1 uk2  C khDx is1 uk2 D C kuks1 ;2 ;

where we have used that his2 s1 2 L1 .Rn / and therefore hDx is2 s1 W L2 .Rn / !
L2 .Rn / is a bounded operator. The parameter s 2 R of H2s .Rn / determines the reg-
ularity of the functions u 2 H2s .Rn /. (“How many derivatives of u are in L2 .Rn /?”)
More precisely, we have for s 2 N0 :

Lemma 2.41. Let m 2 N0 . Then W2m .Rn / D H2m .Rn / with equivalent norms.

Proof. If f 2 H2m .Rn /, then

                                Dx˛ f D q˛ .Dx /hDx im f;

where q˛ ./ WD  ˛ him 2 L1 .Rn / if j˛j  m. Hence
                X                    1
                                      2
                         kDx˛ f k22        Cm khDx im f k2 D Cm kf km;2
                 j˛jm

due to Lemma 2.13.
  Conversely, if f 2 W2m .Rn /, @˛x f 2 L2 .Rn / for all j˛j  m. Moreover,

                                      hi2    1    X j  n
                            hi D          D     C  j     :
                                       hi   hi       hi
                                                        j D1

Thus

                                            X
                                            N
                                him D            pk ./qk ./;
                                            kD1
    30                            Chapter 2 Fourier Transformation and Tempered Distributions


    where qk ./ is a polynomial of order m and pk 2 L1 .Rn /, N D N.m/ 2 N. Hence

                                                X
                                                N
                kf km;2 D khDx im f k2 D             pk .Dx /qk .Dx /f
                                                                         2
                                               kD1
                                                  X
                                                  N
                                                                         0
                                            Cm         kqk .Dx /f k2  Cm kf kW2m ;
                                                  kD1

    where we have used that pk .Dx /W L2 .Rn / ! L2 .Rn / are bounded linear operators
    and that kqk .Dx /f k2  C kf kW2m since qk .Dx / is a differential operator of order
    m.

         More generally on defines:

    Definition 2.42. Let s 2 R and let 1 < p < 1. Then the (Lp -)Bessel potential
    space Hps .Rn / of order s is defined by
                                      ®                                   ¯
                          Hps .Rn / WD f 2 S 0 .Rn / W hDx is f 2 Lp .Rn /
                       kf kHps .Rn / WD khDx is f kLp .Rn / :

      In Section 6.3, it will be shown that Wpm .Rn / D Hpm .Rn / for any m 2 N0 , 1 <
    p < 1. The proof is similar to the proof of Lemma 2.41. But one has to use the
    Mikhlin Multiplier Theorem, which will be proved in Section 4.6 below, instead of
    Plancherel’s Theorem/Lemma 2.13.


    2.8 Vector-Valued Fourier-Transformation

i        This section will only be needed in Section 4.6 for the formulation and the proof
         of the Hilbert-space valued Mikhlin Multiplier Theorem and later applications
         based on that. Therefore it can be skipped for the first reading.


       For the following the reader should be familiar with the basic properties of the
    Bochner integral, cf. Appendix A.4. For many applications it is important to extend
    the Fourier transformation to vector-valued functions f W Rn ! X, where X is a
    Banach space. As in the scalar case, i.e., X D C, we define
                                           Z
                    fO./ WD F Œf ./ WD       e ix f .x/dx 2 X               (2.15)
                                             Rn
                                                      Z
                                                 1
                    fL.x/ WD F 1 Œf .x/ WD                eix f ./d  2 X
                                               .2/n Rn
Section 2.8 Vector-Valued Fourier-Transformation                                          31

for  2 Rn and f 2 L1 .Rn I X/, where the integral above is defined as a Bochner in-
tegral. A lot of identities for the usual (scalar-valued) Fourier transformation directly
carry over to the vector-valued case by using:
                                  Z
               O       0
             hf ./; x iX;X 0 D       eix hf .x/; x 0 iX;X 0 dx D F Œfx 0 ./  (2.16)
                                  Rn

for all  2 Rn ; x 0 2 X 0 , where fx0 .x/ WD hf .x/; x 0 iX;X 0 for all x 2 Rn due to (A.8).
   In particular we have:

Theorem 2.43. Let X be a Banach space.
  1. F W L1 .Rn I X/ ! Cb0 .Rn I X/ is a linear mapping such that

                              kF Œf kC 0 .Rn IX/  kf kL1 .Rn IX/ :                  (2.17)
                                        b



  2. If f W Rn ! X is a continuously differentiable function such that f 2 L1 .Rn I X/
     and @xj f 2 L1 .Rn I X/ for some j 2 ¹1; : : : ; nº, then

                                F Œ@xj f  D i j F Œf  D i j fO:

  3. If f 2 L1 .Rn I X/ such that xj f 2 L1 .Rn I X/, then fO./ is continuously
     partially differentiable with respect to j and

                                  @j fO./ D F Œixj f .x/:

  4. Let f 2 L1 .Rn I X/ and let ." f /.x/ WD f ."x/, " > 0, x 2 Rn , denote the
     dilation of f by ". Then

                        F Œ" f ./ D "n fO.="/ D "n .1=" fO/./:

  5. Let f 2 L1 .Rn I X/ and .y f /.x/ WD f .x C y/, y 2 Rn , denote the translation
     of f by y. Then F Œy f ./ D e iy fO./ for all  2 Rn .

  6. If f 2 L1 .Rn I X/, g 2 L1 .Rn /, then

                                   fO./g./
                                        O    D F Œf  g ;

     where
                                             Z
                             .f  g/.x/ D          f .x  y/g.y/dy
                                              Rn

     denotes the convolution of f and g, cf. Lemma A.16.
32                              Chapter 2 Fourier Transformation and Tempered Distributions


Proof. 1. The estimate (2.17) follows directly from the definition of F Œf  and (A.7).
The continuity of  7! fO./ follows from
                                  Z
            kfO. 0 /  fO./kX 
                                               0
                                       je ix  eix jkf .x/kX d.x/
                                         Rn

and Theorem A.3 as in the scalar case.
   2. The statement can be reduced to the statement for scalar functions as follows:
For every fixed x 0 2 X 0 let g.x/ WD hf .x/; x 0 iX;X 0 for all x 2 Rn . Then g 2 L1 .Rn /
is continuously differentiable with respect to xj and @xj g D h@xj f .x/; x 0 iX;X 0 for
all x 2 Rn . Hence

        hF Œ@xj f ./; x 0 iX;X 0 D F Œ@xj g./ D i j F Œg./ D hi j fO./; x 0 iX;X 0

for all  2 Rn , where we have used (2.16). Since x 0 2 X 0 was arbitrary, we conclude

                          F Œ@xj f ./ D i j fO./ for all  2 Rn :

  3. The proof is done in the same way as in the scalar case using an appropriate
version of Theorem A.4, cf. Exercise A.25.
  4./5./6. The identities can be reduced to the corresponding identities in the scalar
case using (2.16) as before.

     As in the scalar case we define:

Definition 2.44. The space S.Rn I X/ is the set of all smooth f W Rn ! X such that
for all ˛ 2 N0n and N 2 N0 there is a constant C˛;N such that

                              k@˛x f .x/kX  C˛;N .1 C jxj/N                             (2.18)

uniformly in x 2 Rn . If f 2 S.Rn I X/ and m 2 N, we define the semi-norm:

                         jf jm;S WD       sup      sup kx ˛ @ˇx f .x/kX
                                      j˛jCjˇ jm x2Rn


     As before we have:

Lemma 2.45. F W S.Rn I X/ ! S.Rn I X/ is a bounded linear mapping.

Proof. The proof is the same as for Lemma 2.7.

Lemma 2.46 (Inversion Formula). Let f 2 S.Rn I X/. Then f .x/ D F 1 ŒfO.x/ for
all x 2 Rn . In particular,

                                  F W S.Rn I X/ ! S.Rn I X/

is a linear isomorphism.
Section 2.9 Final Remarks and Exercises                                               33

Proof. The proof of Theorem 2.9 directly carries over to the vector-valued situation.
Alternatively, one can reduce the identity f .x/ D F 1 ŒfO.x/ for all x 2 Rn to the
scalar situation by multiplying with x 0 2 X 0 and using (2.16).

  Plancherel’s theorem does not carry over to X-valued functions for a general Ba-
nach space X. To this end one has to make sense of the pointwise products in (2.9)
between f .x/ and g.x/, fO./ and g./,
                                    O    respectively. This can be done if X is a
Hilbert space.

Theorem 2.47 (Plancherel’s Theorem). Let H be a complex Hilbert space. Then for
every f; g 2 S.Rn I H /
              Z                            Z
                                        1
                  .f .x/; g.x//H dx D          .fO./; g.//
                                                       O    H d :       (2.19)
               Rn                     .2/n Rn
In particular,
                                               1
                            2
                        kf kL 2 .Rn IH / D         kfOkL
                                                       2
                                                         2 .Rn IH / :
                                             .2/n

and F extends to a linear isomorphism F W L2 .Rn I H / ! L2 .Rn I H /.

Proof. Using Fubini’s theorem, it is easy to check that
                Z                              Z
            1
                    .F  Œf ./; O
                                 g.//H d  D      .f .x/; F 1 Œg.x//
                                                                 O     H dx
         .2/n Rn                               Rn


for all f; g 2 S.Rn I H /. Because of Lemma 2.46, g D F 1 Œg,
                                                            O which implies
(2.19). In particular, if f D g,
                        1           2                  2
                            kF Œf kL 2 .Rn IH / D kf kL2 .Rn IH / :
                      .2/n

Since C01 .Rn I H / is dense in L2 .Rn I H / and obviously C01 .Rn I H / S.Rn I H /,
F can be extended by continuity to a bounded operator F W L2 .Rn I H / !L2 .Rn I H /.
By (2.8) the same is true for F 1 . Moreover, F 1 ŒF Œf  D f for all f 2 L2 .Rn I H /
since this is true for all f 2 S.Rn I H /.


2.9 Final Remarks and Exercises
2.9.1 Further Reading
In this chapter we gave a brief introduction to the most important facts on Fourier
transformation and distribution theory that are needed in this book. There are many
good books on harmonic analysis, where the Fourier transformation is treated in
34                           Chapter 2 Fourier Transformation and Tempered Distributions


greater detail, cf. e.g. the monographs by Katznelson [19] and Stein and Weiss [33].
Among the many monographs on distribution theory we recommend the classical
book by Hörmander [14] and the introduction by Walter [41]. Both books treat dis-
tributions from the viewpoint of applications. Mathematically, the theory of distri-
butions is closely connected to the theory of topological vector space. A classical
introduction to that topic is given by Treves [36].
   A good introduction to Fourier transformation, distribution theory, and Sobolev
spaces in relation to partial differential equations is also contained in introductions to
partial differential equations by Renardy and Rogers [28] and Jacob [18].

2.9.2 Exercises

     Exercise 2.48. A function f W Rn n ¹0º ! C is called homogeneous of degree
     d 2 R if f .rx/ D r d f .x/ for all r > 0; x ¤ 0.
      1. Let f W Rn n ¹0º ! C be continuous and homogeneous of degree d 2 R.
         Prove that there is a constant C > 0 (depending on f ) such that

                            jf .x/j  C jxjd ;     for all x 2 Rn n ¹0º:

          Determine the smallest possible C .

      2. Let f W Rn n ¹0º ! C be k-times continuously differentiable and homoge-
         neous of degree d 2 R. Prove that @˛x f is homogeneous of degree d  j˛j
         for all j˛j  k. Moreover, conclude that

                        j@˛x f .x/j  C˛ jxjd j˛j ;   for all x 2 Rn n ¹0º;

          for all j˛j  k, where C˛ depends on ˛ and f .

     Exercise 2.49. Prove the statements of Theorem 2.1 in detail.

     Exercise 2.50. Calculate the Fourier transform of the following functions:
                                        ´
                                          eax if x 0;
                               f1 .x/ D
                                          0       else;
                                f2 .x/ D e ajxj ;
                                f3 .x/ D     Œa;a .x/;

     where a > 0.
        Compare the properties of the functions fj (continuity, differentiability, ana-
     lyticity and decay as jxj ! 1) with corresponding properties of fOj .
Section 2.9 Final Remarks and Exercises                                                35

                              p
   Exercise 2.51. Let hi D       1 C jj2 . Prove that for any s 2 R, ˛ 2 N0n there is
   some Cs;˛ > 0 such that

                    j@˛ his j  Cs;˛ .1 C jj/sj˛j     for all  2 Rn :
                                                               m
   Hint. Consider the function f .a; x/ WD .a2 C jxj2 / 2 , where a 2 R, x 2 Rn .
   Use that f is homogeneous of degree m, i.e., f .ra; rx/ D r m f .a; x/ for all
   r > 0, a 2 R, x 2 Rn .

   Exercise 2.52. Let A 2 Rnn be an invertible matrix and f 2 L1 .Rn /. Prove
   that
                                                   1
                          F Œf ı A./ D                fO.AT /;
                                                jdet Aj

   where A is identified with the mapping x 7! Ax and AT WD .A1 /T .

   Exercise 2.53. We consider the partial differential equation

                                 .1         /u D f    in Rn                       (2.20)

   for u; f 2 S.Rn /.
     1. Determine the symbol of 1              , i.e., find p./ such that .1    /u D
        F 1 Œp./u./.
                  O

     2. Prove that for every f 2 S.Rn / there is a unique solution u D .1 
          /1 f 2 S.Rn / of (2.20). Moreover, show that .1  /1 W S.Rn / !
        S.Rn / is bounded.
                                 k  ks;2
     3. Let H2s .Rn / D S.Rn /              be the Bessel potential space of order s   0,
        where

                                    kf ks;2 WD khis fO./k2 ;
                                1
        with hi WD .1 C jj2 / 2 . Prove that .1  /1 extends to a bounded linear
        operator .1  /1 W H2s .Rn / ! H2sC2 .Rn /.

   Exercise 2.54.    1. Prove that S.Rn /          Lp .Rn / for all 1  p  1.

     2. Show that for every m 2 N there are constants Cm ; cm such that

                             cm jf jm;S  jf j0m;S  Cm jf jm;S :
36                          Chapter 2 Fourier Transformation and Tempered Distributions


     Exercise 2.55. Let f 2 C01 .R/ such that supp f  BR .0/. Prove that
                                    Z R
                          fO./ D         e ix f .x/dx;    2 C;
                                     R

     is a holomorphic function in C. Moreover, jfO./j  C eRj Im j .
        In particular, fO./,  2 R, is real analytic and supp fO is not compact unless
     fO./  0.

     Exercise 2.56. Let u 2 L2 .Rn /. Prove that u possesses a weak derivative
     @xj u 2 L2 .Rn / if and only if i j uO 2 L2 .Rn /. In this case

                       F Œ@xj u./ D i j u./
                                           O       almost everywhere:              (2.21)



     Hint. Multiply (2.21) mit F Œ', ' 2 C01 .Rn /.

     Exercise 2.57. Prove that for every ˛ 2 N0n and m 2 N there are constants
             0
     Cm;˛ ; Cm;˛ > 0 such that
                                                                 0
              jx ˛ f jm;S  Cm;˛ jf jmCj˛j;S      j@˛x f jm;S  Cm;˛ jf jmCj˛j;S

     uniformly in f 2 S.Rn /.
                         1 .Rn / be as in Lemma 2.5.
     Exercise 2.58. Let Cpoly
                    1
      1. Let a 2 Cpoly .Rn / and define .Ma f /.x/ WD a.x/f .x/ for all f 2 S.Rn /.
         Prove that Ma W S.Rn / ! S.Rn / is a bounded linear operator.

      2. Prove that every differential operator
                                      X
                          Lu.x/ D          c˛ .x/Dx˛ u;     u 2 S.Rn /;
                                     j˛jm

                     1 .Rn / defines a continuous linear operator LW S.Rn / !
          with c˛ 2 Cpoly
          S.Rn /.
     Exercise 2.59 (A Simple Functional Calculus).
     Let pW Rn ! C be measurable and set † WD p.Rn /. For all F 2 L1 .†/ let
               F .p.Dx //f WD F 1 ŒF .p.//fO./ for all f 2 L2 .Rn /:
      1. Prove that for all F 2 L1 .†/ we have F .p.Dx // 2 L.L2 .Rn // and the
         mapping
                        ˆW L1 .†/ 3 F 7! F .p.Dx // 2 L.L2 .Rn //
Section 2.9 Final Remarks and Exercises                                                                37


        is linear. Moreover, show that for every Fj 2 L1 .†/, j D 1; 2, it holds
        that F1 .p.Dx // ı F2 .p.Dx // D .F1  F2 /.p.Dx //.

     2. Prove that for all  2 C n † we have .  p.Dx //1 2 L.L2 .Rn // and

           .  p.Dx //.  p.Dx //1 f D .  p.Dx //1 .  p.Dx //f D f

        for all f 2 S.Rn /, where p.Dx /f D F 1 Œp./fO./ for all f 2 S.Rn /.

     3. For which  2 C there exists .               /1 in the sense above?

   Exercise 2.60. Let .Mf /.x/ WD F 1 Œm./fO, where m 2 L1 .Rn /. Prove that
   M W L2 .Rn / ! L2 .Rn / is invertible if and only if m1 ./ 2 L1 .Rn /.
   Remark. X D L1 .Rn / and X D L.L2 .Rn // are Banach algebras with unit,
   i.e., X is Banach space and a ring with unit such that .xy/ D .x/y D x.y/,
    2 C, and
                       kxykX  kxkX kykX for all x; y 2 X:

   Exercise 2.61 (Distributional Derivative).
   Let f 2 L1 .R/ be such that there are x1 < x2 < ::: < xn with f j.xj ;xj C1 / D
   fj j.xj ;xj C1 / for some fj 2 Cb1 .Œxj ; xj C1 / for all j D 1; :::n  1.
      Prove that the distributional derivative @x f of f in S 0 .R/ is given by

                                 X
                                 n1                             X
                                                                 n1
                     @x f D             fj0    .xj ;xj C1 / C         Œf .xj /ıxj
                                 j D1                            j D1

   where Œf .xj / WD fj .xj /  fj 1 .xj / and for every x 2 R

                            hıx ; i D .x/          for all  2 S.R/:

                                                                                      P
   Exercise 2.62. Let p be a polynomial on Rn such that p.x/ D                            j˛jm c˛ x
                                                                                                       ˛,

   c˛ 2 C. Calculate F Œp in the sense of S 0 .Rn /.

   Exercise 2.63. Let s > n2 . Prove that H2s .Rn / ,! Cb0 .Rn /.

   Exercise 2.64. Let .Tu /.x 0 / WD u.x 0 ; 0/, x 0 D .x1 ; : : : ; xn1 / 2 Rn , be the
   restriction of u 2 S.Rn / to the hyper-plane ¹.x 0 ; 0/W x 0 2 Rn1 º. Prove that for
   s > 12

                 kT uk   s 1              Cs kukH2s .Rn / ;           for u 2 S.Rn /:
                            2
                       H2       .Rn1 /
38                               Chapter 2 Fourier Transformation and Tempered Distributions


                                                                                   s 12
     Hence the T extends to a bounded operator T W H2s .Rn / ! H2                          .Rn1 / (trace
     operator) if s > 12 .
     Hint. Use
                           Z 0
            Q 0 ; 0/j2 D
           ju.                      Q 0 ; xn /u.
                                 .@n u.                    Q 0 ; xn /@n u.
                                               Q 0 ; xn / C u.          Q 0 ; xn //dxn ;
                            1

           Q 0 ; xn / D Fx 0 7! 0 Œu.  ; xn / is the partial Fourier transform of u.
     where u.

     Exercise 2.65.      1. Prove that for any k 2 N0 there is a Ck > 0 such that

                      jf j00k;S WD      sup        kx ˛ Dxˇ f k2  Ck khxik hDx ik f k2
                                      j˛jCjˇ jk

          for all f 2 S.Rn /.

          Hint. First prove for fixed N 2 N0 by mathematical induction that

                           sup         kx ˛ Dxˇ f k2  Ck;N sup kx ˛ hDx iN f k2 :
                      j˛jk;jˇ jN                              j˛jk


       2. Conclude that for any f 2 S 0 .Rn / there are N 2 N and C; C 0 > 0 such
          that

                                     jhf; 'ij  C khxi2N hDx i2N 'k2

          for all ' 2 S.Rn /.

          Hint. Use the Riesz representation theorem for L2 .Rn /.
       3. Prove that hxi2N hDx i2N f 2 L2 .Rn / for some N 2 N0 .
     Remark. More precisely, one can prove that
                       \                                                [
           S.Rn / D          H2s1 ;s2 .Rn /; S 0 .Rn / D                        H2s1 ;s2 .Rn /;
                          s1 ;s2 2R                                 s1 ;s2 2R

     where

                 H2s1 ;s2 .Rn / D ¹f 2 S 0 .Rn / W hxis2 hDx is1 f 2 L2 .Rn /º

     are weighted Bessel potential spaces and

                               hxim W H2s1 ;s2 Cm .Rn / ! H2s1 ;s2 .Rn /
                            hDx im W H2s1 Cm;s2 .Rn / ! H2s1 ;s2 .Rn /

     are isomorphisms.
Section 2.9 Final Remarks and Exercises                                              39


   Exercise 2.66. Prove that the delta distribution is not a regular distribution.
   Hint. Consider a suitable sequence of test functions .'j /j 2N with 'j .0/ D 1 for
   all j 2 N.

   Exercise 2.67. Let f 2 L1 .Rn / be continuous with hxiN f .x/ 2 L1 .Rn / for
   some N 2 N. Prove that supp f defined by (2.12) coincides with the definition
   of supp f due to Definition 2.23.

   Exercise 2.68. Prove that for every f 2 S 0 .Rn / there is a sequence .fk /k2N
   C01 .Rn / such that fk !k!1 f in S 0 .Rn /.
   Hint. Use Lemma 2.30 and the density of C01.Rn / in L2 .Rn /.

   Exercise 2.69. Let f 2 S 0 .Rn /, g 2 S.Rn /. Prove that f  g is a regular
                                             1
   tempered distribution satisfying f  g 2 Cpoly .Rn / and

                           f  g.x/ D hf; Qx gi for all x 2 Rn ;

   where Qx g.y/ D g.x  y/ for all x; y 2 Rn .
   Hint. Use that C01 .Rn / is dense in L2 .Rn / and Lemma 2.30.

   Exercise 2.70. Let ıx , x 2 Rn , be as in Example 2.66. Show that

                            ıx  g D x g   for all g 2 S.Rn /;

   where .x g/.y/ D g.x C y/ for all x; y 2 Rn .

   Exercise 2.71. Let f 2 S 0 .Rn /; g 2 S.Rn /. Prove that

               @˛x .f  g/ D .@˛x f /  g D f  .@˛x g/;   F Œf  g D fOgO

   in S 0 .Rn / for all ˛ 2 N0n .

   Exercise 2.72. Prove Lemmas 2.45 and 2.46 in detail.
Chapter 3
Basic Calculus of Pseudodifferential Operators
on Rn

Summary
In this chapter we present a first introduction to pseudodifferential operators with
                        m
symbols in the class S1;0 , which is an important special case of the more general Hör-
                 m
mander class S;ı studied in more advanced text books. The main goals are to prove
the most important mapping properties and to show that the class of pseudodifferential
operators are closed under compositions and has formal adjoints. Moreover, asymp-
totic formulae for the symbol of the composition and the formal adjoints are proven,
which provide important information for applications, e.g. to elliptic operators. To
this end oscillatory integrals are introduced and used.


Learning targets
  Understand the basic symbol class S1;0
                                      m and the definition of a pseudodifferential

   operator.
  Learn the fundamental calculus of pseudodifferential operators, in particular
   compositions and adjoints.
  Learn the basic mapping properties of pseudodifferential operators on S.Rn /,
   S 0 .Rn /, Cb1 .Rn /, and between L2 -Bessel potential spaces.
  Get to know first applications to elliptic pseudodifferential operators, their para-
   metrices and elliptic regularity.


3.1 Symbol Classes and Basic Properties
We now introduce the basic pseudodifferential symbol class S1;0   m . There are many

other more general or modified symbol classes, which are used in the literature and
research for different purposes. But the following symbol class is the most simple and
most common one. It is a natural symbol class that contains the symbols of differential
operators with smooth coefficients and inverses of elliptic symbols.

Definition 3.1. Let m 2 R, n; N 2 N. Then S1;0
                                           m .RN  Rn / is the vector-space of

all smooth functions pW R  R ! C such that
                         N     n


                        j@˛ @ˇx p.x; /j  C˛;ˇ .1 C jj/mj˛j                   (3.1)
Section 3.1 Symbol Classes and Basic Properties                                          41


holds for all ˛ 2 N0n , ˇ 2 N0N , where C˛;ˇ is independent of x 2 RN ;  2 Rn .
The function p is called pseudodifferential symbol and m is called the order of p.
Moreover,
                                       [
                    1
                  S1;0  .RN  Rn / WD        m
                                            S1;0 .RN  Rn / and
                                          m2R
                                           \
                   1
                  S1;0 .RN  Rn / WD               m
                                                  S1;0 .RN  Rn /:
                                          m2R

                         m instead of S m .RN  Rn /.
For short we also write S1;0           1;0


Remark 3.2. In the following we usually deal with the case N D n. But sometimes
it is useful to have defined the symbol classes for general N; n 2 N.

  If p 2 S1;0
          m
              .Rn  Rn / is a symbol, then
                                      Z
 p.x; Dx /f .x/ WD OP.p/f .x/ WD               eix p.x; /fO./d̄    for all x 2 Rn (3.2)
                                          Rn

defines the associated pseudodifferential operator, where f W Rn ! C is a suitable
function. If f 2 S.Rn /, then fO 2 S.Rn / and therefore p.x; /fO./ 2 S.Rn /
with respect to  for every fixed x 2 Rn due to Lemma 2.5. Therefore the integral
in (3.2) exists and p.x; Dx /f is well-defined. In the following we will prove that
p.x; Dx /W S.Rn / ! S.Rn / is a continuous mapping. But before we prove this fact,
we discuss some examples and make some simple observations.
                              P
Example 3.3. 1. Let p.x; / D j˛jm c˛ .x/ ˛ , x;  2 Rn , be a polynomial in 
   of order m 2 N0 with smooth coefficients c˛ 2 Cb1 .Rn / for all j˛j  m. Then
   p 2 S1;0
         m
            .Rn  Rn / and
                                                  X
                             p.x; Dx /f WD               c˛ .x/Dx˛ f
                                                 j˛jm

    for every f 2 S.Rn /. Hence every linear differential operator with smooth and
    bounded coefficients is a pseudodifferential operator. In particular the Laplacian
       D @2x1 C    C @2xn is a pseudodifferential operator with symbol jj2 .
                             p
 2. The function hi WD 1 C jj2 is a pseudodifferential symbol of order 1, see
    Exercise 2.51. Since 1 C jj2 is the symbol of 1  , the associated pseudo-
    differential operator
                                       Z        q
                           hDx if D        eix 1 C jj2 fO./d̄
                                      Rn
42                        Chapter 3 Basic Calculus of Pseudodifferential Operators on Rn

                                                                                p
     can be considered as the square root of 1          . For short: hDx i D     1    .
                                                                                        m
     More generally, him 2 S1;0
                             m for every m 2 R and hD im D .1 
                                                     x                                 / , cf.
                                                                                        2

     Exercise 2.51
                                                   m .RN  Rn /, which is related to the
  We can define a sequence of semi-norms on S1;0
family of inequalities (3.1) in a natural way. Let
              .m/
           jpjk     WD max           sup       jD˛ Dxˇ p.x; /j.1 C jj/mCj˛j          (3.3)
                      j˛j;jˇ jk x2RN ;2Rn


for k 2 N. Here

                         sup        jD˛ Dxˇ p.x; /j.1 C jj/mCj˛j
                     x2RN ;2Rn

is the smallest constant C˛;ˇ such that (3.1) holds for all x 2 RN ;  2 Rn and fixed
˛; ˇ 2 N0 .
                                      m
   It is not difficult to check that S1;0 with these semi-norms is a Fréchet space. We
refer to Appendix A.5 for some basic facts on Fréchet spaces.

                 p literature the function .1 C jj/ in the estimates (3.1) is often
Remark 3.4. In the
replaced by hi D 1 C jj2 . This can be done without changing the symbol classes
since               q                         p q
                       1 C jj2  .1 C jj/  2 1 C jj2 ;
cf. proof of Lemma 3.7 below. Using hi instead of .1 C jj/, the notation becomes a
bit shorter.
                                m
Proposition 3.5. Let pj 2 S1;0j .Rn  Rn /, mj 2 R, j D 1; 2, and let p.x; / WD
                                                 m1 Cm2
p1 .x; /p2 .x; / for all x;  2 Rn . Then p 2 S1;0    .Rn  Rn /. Moreover, for any
k 2 N0 there is some Ck depending only on k and n such that
                            .m Cm2 /                 .m /    .m /
                         jpjk 1             Ck jp1 jk 1 jp2 jk 2 :

The proposition is a simple consequence of the Leibniz formula, cf. Exercise 3.53.
  The main result of this section is:

Theorem 3.6. Let p 2 S1;0
                      m
                          .Rn  Rn /, m 2 R, be a pseudodifferential symbol. Then

                               p.x; Dx /W S.Rn / ! S.Rn /

is a bounded mapping. More precisely, for every k 2 N there is some Ck > 0 such
that
                                     .m/
        jp.x; Dx /f jk;S  Ck jpjk jf jmC2.nC1/Ck;S             for all f 2 S.Rn /:
Section 3.1 Symbol Classes and Basic Properties                                                     43

Proof. Since f 2 S.Rn /, fO 2 S.Rn / due to Lemma 2.7. Then
                                     Z
                                1
 sup jp.x; Dx /f .x/j  sup        n
                                         hin1 jhimp.x; /jjhinCmC1 fO./j d 
x2Rn                    x2Rn .2/      Rn
                               Z
                          1                             nCmC1 O
                                   hin1 d jpj.m/
                                                  0 khi        f k1
                        .2/n Rn
                       Cm jpj.m/ jfOjmCnC1;S  C jpj.m/ jf jmC2nC2;S
                                      0                              0       (3.4)

by Lemma 2.7 and Lemma A.9 in the appendix, where Cm depends only on ma and
the dimension.
   In order to estimate the derivatives, we calculate
                              Z
 @xj .p.x; Dx /f .x// D @xj         eix p.x; /fO./d̄
                                R n
                          Z                                  Z
                       D       e ix p.x; /i j fO./d̄ C   e ix @xj p.x; /fO./d̄
                              Rn                                         Rn
                       D p.x; Dx /.@xj f /.x/ C .@xj p/.x; Dx /f .x/;

where we have applied Theorem A.4 to interchange integration and differentiation.
Hence using (3.4) first with f replaced by @xj f and then p replaced by @xj p, we
obtain
                                  .m/                         .m/
 sup j@xj .p.x; Dx /f .x/j  C.jpj0 j@xj f jmC2nC2;S C j@xj pj0 jf jmC2nC2;S /
x2Rn
                                          .m/
                                   C jpj1 jf jmC2nC3;S :                                         (3.5)

Similarly,
                         Z
 ixj p.x; Dx /f .x/ D             .@j e ix /p.x; /fO./d̄
                             Rn
                         Z                                       Z
                     D            eix p.x; /@j fO./d̄ C              eix .@j p/.x; /fO./d̄
                             Rn                                      Rn
                     D p.x; Dx /.ixj f .x// C .@j p/.x; Dx /f

and therefore
                                          .m/                                  .m1/
 sup jxj p.x; Dx /f .x/j  C.jpj0 jxj f jmC2nC2;S C j@j pj0                           jf jmC2nC2;S /
x2Rn

                              C jpj.m/
                                    1 jf jmC2nC3;S                                                (3.6)

                                                                                       .m1/        .m/
by (3.4), where we note that @j p.x; / is of order m  1 and j@j pj0                         jpj1
by the definition of the semi-norms.
44                          Chapter 3 Basic Calculus of Pseudodifferential Operators on Rn


     Using (3.5) and (3.6), one can easily prove by mathematical induction that

           sup jx ˛ @ˇx p.x; Dx /f .x/j  C˛;ˇ jpj.m/
                                                  j˛jCjˇ j
                                                           jf jmC2.nC1/Cj˛jCjˇ j;S
          x2Rn

uniformly in x 2 Rn for all ˛; ˇ 2 N0n . Hence

                                              .m/
                     jp.x; Dx /f jk;S  Ck jpjk jf jmC2.nC1/Ck;S ;

which proves the theorem.

     Finally, we prove the following simple but important inequality:

                                                               1
Lemma 3.7 (Peetre’s inequality). Let hi WD .1 C jj2 / 2 ,  2 Rn . Then for all s 2 R

                         his  2jsj h  ijsj h is ;   ; 2 Rn :

Proof. First of all we have

        hi2 D .1 C jj2 /  .1 C jj/2  .1 C jj/2 C .1  jj/2 D 2.1 C jj2 /:

Hence
                                           p
                       hi  .1 C jj/        2hi for all  2 Rn :                 (3.7)

In the case s     0 the triangle inequality implies

                  1 C jj  1 C j  j C j j  .1 C j  j/.1 C j j/

and therefore

                    his  .1 C j  j/s .1 C j j/s  2s h  is h is

by (3.7) for all ; 2 Rn . If s < 0, we can use the previous inequality with inter-
changed role of  and and s replaced by s to conclude

                               h is  2s h  is his ;

which is equivalent to

                                his  2jsj h is h  ijsj :
Section 3.2 Composition of Pseudodifferential Operators: Motivation                         45


3.2 Composition of Pseudodifferential Operators:
    Motivation
Because of Theorem 3.6, the composition of two pseudodifferential operators
p1 .x; Dx / and p2 .x; Dx / is a well-defined bounded operator

                         p1 .x; Dx /p2 .x; Dx /W S.Rn / ! S.Rn /:

The natural question arises if this operator is again a pseudodifferential operator, i.e.,
                          1
if there is a symbol p 2 S1;0 .Rn  Rn / such that

                            p.x; Dx / D p1 .x; Dx /p2 .x; Dx /:

If this is the case, it is of interest how the symbol p.x; / is related to the symbols
p1 .x; / and p2 .x; /.
   The behavior of pseudodifferential operators under composition is of particular in-
terest for calculation inverses or at least to approximate inverses of pseudodifferential
operators, which are also called parametrices.
   In order to motivate the following sections, we calculate the composition of
p1 .x; Dx / and p2 .x; Dx / formally, ignoring all technical difficulties. First of all,
                                        “
                   p1 .x; Dx /g.x/ D        ei.xy/ p1 .x; /g.y/dy d̄

and
                                            “
                p2 .x; Dx /f .x/jxDy D          e i.yz/ p2 .y; /f .z/dz d̄ :

Hence we get for g.y/ D p2 .x; Dx /f jxDy

          p1 .x; Dx /p2 .x; Dx /f .x/
              “                        “                                    
                    i.xy/                   i.yz/
          D       e          p1 .x; /        e          p2 .y; /f .z/dz d̄  dy d̄
              ZZZZ
          D            e i.xz/ ei.xy/./ p1 .x; /p2 .y; /f .z/dy d̄ dz d̄:

Using the substitution x 0 D y  x and  0 D         , we obtain

      p1 .x; Dx /p2 .x; Dx /f
          “              “                                                   
                i.xz/       ix 0  0             0          0      0   0
      D       e              e            p1 .x;  C  /p2 .x C x ; /dx d̄ f .z/dz d̄ 
46                          Chapter 3 Basic Calculus of Pseudodifferential Operators on Rn


Hence formally the symbol of p1 .x; Dx /p2 .x; Dx / is
                            “
                                    0 0
         .p1 #p2 /.x; / WD    eix  p1 .x;  C  0 /p2 .x C x 0 ; /dx 0 d̄ 0 :   (3.8)

But the main problem is that the latter integral in general does not exists in the classical
sense. We will define it as so called oscillatory integral:
            “
                     0 0
         Os- eix  p1 .x;  C  0 /p2 .x C x 0 ; /dx 0 d̄ 0
                  “
                                            0 0
          WD lim         ."x 0 ; " 0 /e ix  p1 .x;  C  0 /p2 .x C x 0 ; /dx 0 d̄ 0 ;
               "!0

where 2 S.Rn  Rn / with .0; 0/ D 1. In the following section we prove that the
oscillatory integral are well-defined for suitable integrands. Moreover, we will show
several results, which will justify our formal calculations above.


3.3 Oscillatory Integrals

Definition 3.8. The space of amplitudes Am
                                          .R R /, m;  2 R, is the set of smooth
                                             n  n

functions aW R  R ! C such that
              n     n


                        j@˛ @yˇ a.y; /j  C˛;ˇ .1 C j j/m .1 C jyj/

uniformly in y; 2 Rn for all ˛; ˇ 2 N0n . Moreover, let

     jajAm
          ;k
              WD     max      sup .1 C j j/m .1 C jyj/ j@˛ @yˇ a.y; /j;      k 2 N;
                   j˛jCjˇ jk y;2Rn

be the associated sequence of monotone increasing semi-norms.

It is not difficult to check that Am .R  R / is a Fréchet space. Moreover, we have
                                        n   n
  m .Rn  Rn /        Am0 .R  R / with continuous embedding.
                            n     n
S1;0

Theorem 3.9. Let a 2 Am   .R  R /, m;  2 R, and let
                             n     n                      2 S.Rn  Rn / with
 .0; 0/ D 1. Then
           “                            “
         Os- e iy a.y; /dy d̄ WD lim    ."y; " /eiy a.y; /dy d̄
                                           "!0

exists and
      “
  Os- e iy a.y; /dy d̄
                     “
                                        0       0
                  D       e iy hyi2l hD i2l Œh i2l hDy i2l a.y; /dy d̄ ; (3.9)
Section 3.3 Oscillatory Integrals                                                       47

Aussage ueber Majorante vom Integrand? where l; l 0 2 N0 are chosen such that
2l > n C m and 2l 0 > n C  and the integrand is in L1 .Rn  Rn /. In particular, the
definition does not depend on the choice of and
                  ˇ “                       ˇ
                  ˇ                         ˇ
                  ˇOs- eiy a.y; /dy d̄ ˇ  Cm; jajAm ;2.lCl 0 / ;         (3.10)
                  ˇ                         ˇ            



where Cm; > 0 is independent of a.
                                                     ˇ
Proof. Using Dy˛ e iy D . /˛ eiy and D eiy D .y/ˇ eiy for ˛; ˇ 2
N0n , we have
                                                      0          0
    h i2l hDy i2l eiy D e iy     and hyi2l hD i2l e iy D e iy :       (3.11)

Since ."y; " / 2 S.Rn  Rn / for fixed " > 0, we can integrate by parts and obtain
            “
     I" WD        ."y; " /eiy a.y; /dy d̄
            “
         D      e iy h i2l hDy i2l . ."y; " /a.y; // dy d̄
            “
                               0       0
         D      eiy hyi2l hD i2l Œh i2l hDy i2l . ."y; " /a.y; //dy d̄

On the other hand, ¹ ."y; " /º0<"<1  ¹ " .y; /º0<"<1 is bounded in A00 .Rn 
Rn / D Cb1 .R2n /, lim"!0 ."y; " / D 1 uniformly on compact sets, and
lim"!0 @y˛ @ˇ " .y; / D 0 uniformly in .y; / 2 Rn  Rn if .˛; ˇ/ ¤ 0. Hence
there are constants C˛;ˇ independent of both 0 < " < 1 and a 2 Am
                                                                 such that

               j@y˛ @ˇ . " .y; /a.y; // j  C˛;ˇ jajAm
                                                       ;j˛jCjˇ j
                                                                  h im hyi :        (3.12)

Moreover, since his 2 S1;0
                        s .Rn  Rn /,


                                j@˛ h is j  Cs;˛ h isj˛j :                        (3.13)

Combining (3.12) and (3.13), there are constants Cl;˛ independent of 0 < " < 1 such
that

       j@˛ Œh i2l hDy i2l . " .y; /a.y; //j  Cl;˛ jajAm
                                                           ;2lCj˛j
                                                                    h im2l hyi :

Consequently there are constants Cl;l 0 independent of 0 < " < 1 and a such that
                           0        0
                  jhyi2l hD i2l Œh i2l hDy i2l . " .y; /a.y; //j
                                              m2l           0
                    Cl;l 0 jajAm       0 h i
                                 ;2.lCl /
                                                   hyi2l                           (3.14)
48                            Chapter 3 Basic Calculus of Pseudodifferential Operators on Rn

                                                                                   0
If we now choose 2l > nCm and 2l 0 > nC , then h im2l hyi2l 2 L1 .Rn Rn /, cf.
Lemma A.9. Hence Lebesgue theorem on dominated convergence, ."y;" / !"!0 1,
and @y˛ @ˇ ."y; " / !"!0 0 for .˛; ˇ/ ¤ 0 imply
                      “
                                               0           0
           lim I" D       eiy hyi2l hD i2l Œh i2l hDy i2l a.y; /dy d̄ :
          "!0


Thus the limit in the definition of the oscillatory integral exists and (3.9) holds. More-
over, the representation (3.9) shows that the definition does not depend on the choice
of . Finally, passing to the limit " ! 0 in (3.14), (3.10) follows from (3.9) and
Lemma A.9 in the appendix.

Corollary 3.10. Let aj 2 Am
                           .R  R / be a bounded sequence such that
                              n   n



                lim @y˛ @ˇ aj .y; / D @y˛ @ˇ a.y; /               for every y; 2 Rn
              j !1


for all ˛; ˇ 2 N0n and some a 2 Am
                                  .R  R /. Then
                                     n   n

                  “                           “
            lim Os- e iy aj .y; /dy d̄ D Os- eiy a.y; /dy d̄ :
           j !1


Proof. The assumptions imply that
                                           0           0
                       lim hyi2l hD i2l Œh i2l hDy i2l aj .y; /
                      j !1
                                   0               0
                      D hyi2l hD i2l Œh i2l hDy i2l a.y; /

for every y; 2 Rn . Moreover, (3.14) implies
                          0            0                                           
                  jhyi2l hD i2l Œh i2l hDy i2l                  ."y; " /aj .y; "/ j
                                              m2l                      0
                   Cl;l 0 jaj jAm       0 h i
                                  ;2.lCl /
                                                   hyi2l :

Since the sequence aj is bounded in Am , jaj jAm       0  C uniformly in j 2 N.
                                                 ;2.lCl /
Hence the representation (3.9) and Lebesgue’s theorem on dominated convergence
imply the statement of the corollary.

Example 3.11. Let u 2 Cb1 .Rn /. Then a.y; / D eix u.y/ 2 A00 .Rn  Rn / and
                                    “
                                  Os- e i.xy/ u.y/dy d̄
Section 3.3 Oscillatory Integrals                                                      49

is well-defined. We can calculate the oscillatory integral explicitly: If we choose
  .y; / D .y/ . /, where 2 S.Rn / with .0/ D 1, then
     “                            Z           Z                       
         i.xy/                                     i.xy/
   Os- e          u.y/dy d̄ D lim   ."y/u.y/        e           ." /d̄ dy
                              "!0
                                  Z                          x  y
                            D lim   ."y/u.y/"n F 1 Œ               dy
                              "!0                                "
                                  Z
                            D lim   .".x  "y 0 //u.x  "y 0 /F 1 Œ .y 0 /dy 0
                              "!0
                              Z
                            D u.x/F 1 Œ .y 0 /dy 0 D u.x/F ŒF 1 Œ .0/

                                    D u.x/ .0/ D u.x/

due to Theorem 2.1.5 and since lim"!0 .".x"y 0 //u.x"y 0 / D         .0/u.x/ D u.x/.
Thus formally we have F 1 ŒF Œu D u for all u 2 Cb1 .Rn /.

Lemma 3.12. Let a 2 Am
                      .R  R /, m;  2 R, and let ˛ 2 N0 . Then
                         n   n                          n

              “                           “
                  iy ˛
            Os- e      y a.y; /dy d̄ D Os- e iy D˛ a.y; /dy d̄ ;
               “                          “
            Os- e iy ˛ a.y; /dy d̄ D Os- e iy Dy˛ a.y; /dy d̄ :


Proof. First of all we note that D˛ a.y; /; Dy˛ a.y; / 2 Am
                                                            .R  R /, y a.y; / 2
                                                               n   n    ˛

AmCj˛j
        .Rn  Rn /, and ˛ a.y; / 2 AmCj˛j     .Rn  Rn /. Therefore the oscillatory
integrals are well-defined.
   We only prove the first identity since the proof of the second is done in the same
way. Moreover, it is sufficient to consider the case j˛j D 1. (Then the general case
follows by mathematical induction.)
   If j˛j D 1, then y ˛ D yj for 1  j  n. Moreover, we choose in the definition
                                                 2
of the oscillatory integral as .y; / D ej.y;/j =2 . Then
   “                                            “
                     iy
         ."y; " /e           yj a.y; /dy d̄ D     ."y; " /.Dj eiy /a.y; /dy d̄
                                              “
                                            D   eiy Dj . ."y; " /a.y; // dy d̄ :


Using Dj ."y; " / D i "2 j ."y; " /, we obtain

       Dj . ."y; " /a.y; // D ."y; " /Dj a.y; / C i "2 ."y; " / j a.y; /:
50                          Chapter 3 Basic Calculus of Pseudodifferential Operators on Rn


Therefore
  “                                     “
                 iy
       ."y; " /e       yj a.y; /dy d̄ D              ."y; " /e iy Dj a.y; /dy d̄
                                                     “
                                              C i" 2
                                                           ."y; " /eiy j a.y; /dy d̄ :

Passing to the limit " ! 0 yields the first equality.

Theorem 3.13 (Fubini’s theorem for oscillatory integrals). Let a 2 Am    .R
                                                                             nCk
                                                                                 
R nCk /, m;  2 R, n; k 2 N. Then
                         “
                                0 0
          b.y; / WD Os- e iy  a.y; y 0 ; ; 0 /dy 0 d̄ 0 2 Am   n   n
                                                               .R  R /;


where integration is with respect to Rk  Rk , and
                                  “
                                          0 0
             @y˛ @ˇ b.y; / D Os- eiy  @y˛ @ˇ a.y; y 0 ; ; 0 /dy 0 d̄ 0 :                 (3.15)

Moreover,
               ZZZZ
                              0 0
             Os-    e iyiy  a.y; y 0 ; ; 0 /dydy 0 d̄ d̄ 0
                 “          “                                   
                                           0 0
             D Os- eiy Os- e iy  a.y; y 0 ; ; 0 /dy 0 d̄ 0 dy d̄ :

Proof. Because of Peetre’s inequality and . ; 0 / D . ; 0/C.0; 0 /, .y; y 0 / D .y; 0/C
.0; y 0 /,
              h. ; 0 /im h.y; y 0 /i  2jmjCjj h im hyi h 0 ijmj hy 0 ijj :
            ˇ                       jmj
Hence @y˛ @ a.y;  ; ;  / 2 Ajj .R2k / with respect to .y 0 ; 0 / and

      j@y˛ @ˇ a.y;  ; ;  /jAjmj .R2k /;j  Cj;;m jajAm
                                                          .R
                                                                                     m
                                                             2.kCn/ /;j Cj˛jCjˇ j h i hyi
                                                                                          
                             j j


for arbitrary j 2 N. Therefore (3.10) implies
                   ˇ “                                               ˇ
                   ˇ                                                 ˇ
                   ˇ Os- eiy 0  0 @˛ @ˇ a.y; y 0 ; ; 0 /dy 0 d̄ 0 ˇ
                   ˇ                  y                             ˇ
                                                                   m   
                      Cm; jajAm
                                 .R
                                    2.kCn/ /;2.lCl 0 /Cj˛jCjˇ j h i hyi ;


where 2l > jmj C k and 2l 0 > j j C k. Moreover, we choose l; l 0 so large that
2l > m C n and 2l 0 > n C  . Because of the representation (3.9) and Theorem A.4,
                 ˇ
we can take @y˛ @ out of the oscillatory integral, which proves (3.15). Thus

             j@y˛ @ˇ b.y; /j  Cm jajAm
                                        .R
                                                                          m   
                                           2.nCk/ /;2.lCl 0 /Cj˛jCjˇ j h i hyi :
Section 3.4 Double Symbols                                                                       51

                                                            0        0
                                                     2l hD i2l Œh i2l hD i2l b.y; / 2
  Hence b.y; / 2 Am    .R  R /. Thus hyi
                            n       n
                                                                              y
L1 .Rn  Rn / because of Theorem 3.9. Moreover,
              “
                       0 0          0         0
    b.y; / D      e iy  hy 0 i2l hD 0 i2l Œh 0 i2l hDy 0 i2l a.y; y 0 ; ; 0 /dy 0 d̄ 0

and therefore
         0         0
 hyi2l hD i2l Œh i2l hDy i2l b.y; /
    “
             0 0               0                0
  D     e iy  .hyihy 0 i/2l .hD ihD 0 i/2l Œ.h ih 0 i/2l .hDy ihDy 0 i/2l ady 0 d̄ 0 ;

where
                       0                 0
        .hyihy 0 i/2l .hD ihD 0 i/2l Œ.h ih 0 i/2l .hDy ihDy 0 i/2l a.y; y 0 ; ; 0 /
        2 L1 .R2.nCk/ /:

Hence we can apply Fubini’s theorem and get
    “           “                                          
         iy            iy 0  0       0    0     0   0
  Os- e         Os- e                a.y; y ; ; /dy d̄        dy d̄
     Z
                 0 0                  0                 0
  D e iyiy  .hyihy 0 i/2l .hD ihD 0 i/2l
                                              d.y 0 y; ; 0 /
        Œ.h ih 0 i/2l .hDy ihDy 0 i/2l a
                                               .2/nCk
       ZZZZ
                          0 0
  D Os-        eiyiy  .h ih 0 i/2l .hDy ihDy 0 i/2l a.y; y 0 ; ; 0 /dy 0 d̄ 0 dy d̄
       ZZZZ
                          0 0
  D Os-        e iyiy  a.y; y 0 ; ; 0 /dy 0 d̄ 0 dy d̄ ;

where we have used Lemma 3.12.


3.4 Double Symbols
The composition p1 .x; Dx /p2 .x; Dx / calculated in Section 3.2 is an example of a
pseudodifferential operator in more general form – a pseudodifferential operator with
a double symbol:
                      ZZZZ
                                     0       0  00  0
p.x; Dx ; x; Dx /u D          e i.xx /Ci.x x / p.x; ; x 0 ;  0 /u.x 00 /dx 00 d̄ 0 dx 0 d̄

for u 2 S.Rn /, where the integrals have to be understood as iterated integrals. Here
p.x; ; x 0 ;  0 / D p1 .x; /p2 .x 0 ;  0 / 2 S1;0
                                                  m1 ;m2
                                                         .Rn  Rn  Rn  Rn / is defined as
follows:
52                              Chapter 3 Basic Calculus of Pseudodifferential Operators on Rn


Definition 3.14. Let m; m0 2 R. Then the space of double pseudodifferential symbols
 m;m0
S1;0  .Rn  Rn  Rn  Rn / is the space of all smooth functions pW Rn  Rn  Rn 
R ! C such that
 n

                    0       0                                                             0    0
      jD˛ Dxˇ D˛0 Dxˇ0 p.x; ; x 0 ;  0 /j  C˛;ˇ ;˛ 0 ;ˇ 0 .1 C jj/mj˛j .1 C j 0 j/m j˛ j

uniformly in x; ; x 0 ;  0 2 Rn for arbitrary ˛; ˇ; ˛ 0 ; ˇ 0 2 N0n.

                m;m     0                                max.m;m0 ;mCm0 /
   Note that S1;0   .Rn  Rn  Rn  Rn / A0                  .R2n  R2n /.
   The statements on composition of two pseudodifferential operators will be a corol-
lary to the following more general theorem:
                                                            0
Theorem 3.15. Let m; m0 2 R and let p 2 S1;0
                                         m;m
                                             .Rn  Rn  Rn  Rn / be a double
symbol. Then
                   “
                                                         mCm0
    pL .x; / WD Os- eiy p.x;  C ; x C y; /dy d̄ 2 S1;0  .Rn  Rn /:

Moreover,
                                    X 1
                    pL .x; /             @˛ Dx˛0 p.x; ; x 0 ;  0 /jx0 Dx; 0 D
                                     n
                                       ˛Š
                                   ˛2N0

in the sense that
                   X 1
                                                                   mCm0 N 1
     pL .x; /        @˛ D ˛0 p.x; ; x 0 ;  0 /jx0 Dx; 0 D 2 S1;0        .Rn  Rn /
                     ˛Š  x
                   j˛jN

for all N 2 N0 .

Proof. First of all, let ax; .y; / WD p.x;  C ; x C y; / for all x; y; ;                   2 Rn .
Using Peetre’s inequality,

          j@˛ @yˇ ax; .y; /j D j@˛ @yˇ p.x;  C ; x C y; /j
                                                                0                          0
                                  C˛;ˇ h C imj˛j him  C˛;ˇ h C im him
                                                                0
                                  C˛;ˇ 2jmj h ijmj himCm :

Hence ax; .y; / 2 Ajmj
                                                                                      0
                    0 with jax; jAjmj ;jmjC2nC2  C.1 C jj/
                                                             mCm . Therefore
                                              0
                ˇ “                                     ˇ
                ˇ                                       ˇ
 jpL .x; /j D ˇˇ Os- eiy p.x;  C ; x C y; /dy d̄ ˇˇ  C.1 C jj/mCm (3.16)
                                                                         0




because (3.10).
Section 3.4 Double Symbols                                                                   53

   Since p.x; ; x 0 ; / 2 Am Q
                             0 .R R /, m
                                  2n  2n      Q D max.m1 ; m2 ; m1 Cm2 /, with respect
        0
to .x; x /; .; / 2 R , we also have p.x;  C ; x C y; / 2 Am
                         2n                                        Q    2n  R2n / with
                                                                   0 .R
respect to .x; y/; .; / 2 R . Hence we can apply (3.15) to conclude that
                               2n
                             “
       @˛ @ˇx pL .x; / D Os- eiy @˛ @ˇx Œp.x;  C ; x C y; / dy d̄ :     (3.17)

Combining (3.16) and (3.17) yields
                j@˛ @ˇx pL .x; /j
                     ˇ “                                                 ˇ
                     ˇ                                                   ˇ
                     ˇ
                 D ˇ Os- e           @ @x Œp.x;  C ; x C y; / dy d̄ ˇˇ
                                iy ˛ ˇ
                                                                                          (3.18)
                                        0
                 C.1 C jj/mCm j˛j :                                                    (3.19)
In order to prove the asymptotic expansion, we use the Taylor series expansion:
                               X        ˛
  p.x;  C ; x C y; / D                    p˛ .x; ; x C y; /
                                       ˛Š
                              j˛jN
                                     X         ˛ Z 1
                     C .N C 1/                           .1   /N p˛ .x;  C  ; x C y; /d;
                                              ˛Š     0
                                 j˛jDN C1

where p˛ .x; ; y;    / D @˛ p.x; ; y;     /. Hence
                       X 1       “
        pL .x; / D            Os- eiy ˛ p˛ .x; ; x C y; /dy d̄
                            ˛Š
                      j˛jN
                                  X 1        “
                      C .N C 1/           Os- eiy ˛ r˛ .x; ; y; /dy d̄ ;
                                       ˛Š
                                  j˛jDN C1

where
                                Z 1
            r˛ .x; ; y; / D          .@˛ p/.x;  C  ; x C y; /.1   /N d:
                                 0
Because of Lemma 3.12 and Example 3.11,
   “                                         “
        iy ˛
Os- e           p˛ .x; ; x C y; /dy d̄ D Os- eiy Dy˛ p˛ .x; ; x C y; /dy d̄

                                                   D @˛ Dy˛ p.x; ; y; /jyDx;D :
Therefore it remains to estimate r˛ .x; ; y; /. As in the beginning of the proof,
                           
                   j@ˇ @y .@˛ Dy˛ p/.x;  C  ; x C y; / j
                                                                          0
                        C˛;ˇ ; 2jmj .1 C j j/jmj .1 C jj/mCm j˛j
                                                                      0
                        C˛;ˇ ; 2jmj .1 C j j/jmj .1 C jj/mCm j˛j ;
54                          Chapter 3 Basic Calculus of Pseudodifferential Operators on Rn


where C˛;ˇ; does not depend on  2 Œ0; 1. Hence ¹p.x;  C   ; x C  ; /º0 1 is
uniformly bounded in Ajmj   0 .R  R / as amplitudes in .y; /. Therefore we conclude
                                  n    n
                     jmj
r˛ .x; ;  ;  / 2 A0 .Rn  Rn / and
                                                                             0
       j@ˇ @y .Dy˛ r˛ /.x; ; ; y/ j  C˛;ˇ ; 2jmj .1 C j j/jmj .1 C jj/mCm j˛j :
This implies
       ˇ “                                  ˇ
       ˇ                                    ˇ
       ˇ Os- e iy ˛
                       r˛ .x; ; ; y/dy d̄ ˇˇ
       ˇ
          ˇ “                                    ˇ
          ˇ                                      ˇ
       D ˇˇ Os- e iy Dy˛ r˛ .x; ; ; y/dy d̄ ˇˇ  C˛ .1 C jj/mCm j˛j
                                                                    0
                                                                                          (3.20)

                                                ˇ 
because of (3.10). Finally, the derivatives @ @x r˛ .x; / are estimated in the same way
as before.



3.5 Composition of Pseudodifferential Operators
With the aid of the oscillatory integrals, we can make the formal calculations in Sec-
tion 3.2 rigorous.
   First of all, if p 2 S1;0
                          m
                             .Rn  Rn /, then
                                  Z Z                            
                                            i.xy/
                    p.x; Dx /u D          e          p.x; /u.y/dy d̄
                                    “
                                               0
                               D Os- e ix  p.x; /u.x C x 0 /dx 0 d̄        (3.21)

for all u 2 S.Rn /. The proof is left to the reader as an exercise, cf. Exercise 3.58.
   Using this representation and Theorem 3.13, we easily get
p1 .x; Dx /p2 .x; Dx /u
       “                       “                                                         
           ix 0                         ix 00  0
D Os- e             p1 .x; / Os- e                   p2 .x C x ;  /u.x C x C x /dx d̄ dx 0 d̄
                                                               0 0          0   00  00    0

       ZZZZ
                      0      00 0
D Os-          e ix ix  p1 .x; /p2 .x C x 0 ;  0 /u.x C x 0 C x 00 /dx 00 d̄ 0 dx 0 d̄
       ZZZZ
                      0        0
D Os-          e ix iy p1 .x;  0 C /p2 .x C x 0 ;  0 /u.x C y/dx 0 d̄ 0 dy d̄
       “              “                                                        
           iy 0               ix 0 
D Os- e               Os- e               p1 .x;  C /p2 .x C x ;  /dx d̄ u.x C y/dy d̄  0
                                                       0              0 0     0

       “
                    0
D Os- e iy p1 #p2 .x;  0 /u.x C y/dy d̄ ;
Section 3.5 Composition of Pseudodifferential Operators                                 55

where we have used         D    0 and y D x 0 C x 00 , Theorem 3.13, and p1 #p2 is
defined as in (3.8).
                                m
Theorem 3.16. Let pj 2 S1;0j .Rn  Rn /, j D 1; 2, be two pseudodifferential sym-
                                   m1 Cm2
bols. Then there is some p1 #p2 2 S1;0    .Rn  Rn / such that

                        p1 .x; Dx /p2 .x; Dx / D .p1 #p2 /.x; Dx /:

Moreover, p1 #p2 has the following asymptotic expansion:
                                         X 1
                     p1 #p2 .x; /            @˛ p1 .x; /Dx˛ p2 .x; /             (3.22)
                                          n
                                            ˛Š 
                                     ˛2N0

in the sense that
                         X 1                              m1 Cm2 N
     p1 #p2 .x; /          @˛ p1 .x; /Dx˛ p2 .x; / 2 S1;0       .Rn  Rn /
                           ˛Š 
                        j˛j<N

for all N 2 N.

Proof. Let p.x; ; x 0 ;  0 / D p1 .x; /p2 .x 0 ;  0 /. Then p 2 S1;0
                                                                     m1 ;m2
                                                                            .Rn  Rn  Rn 
R / and p1 #p2 .x; / D pL .x; /. Therefore the theorem is a consequence of Theo-
  n

rem 3.15.

  Hence the composition of two pseudodifferential operators is again a pseudodiffer-
ential operator. In particular, the asymptotic expansion implies:

                       p1 #p2 .x; / D p1 .x; /p2 .x; / C r.x; /;                (3.23)
                    m1 Cm2 1
where r.x; / 2 S1;0           .Rn  Rn /. Hence the symbol of the composition co-
incides with the product of the symbols modulo a term of lower order. This is the
essential fact needed for the construction of a parametrix to an elliptic pseudodiffer-
ential operator in Section 3.6.
   Moreover, we note that, if p2 .x; / D p2 ./ is independent of x, we simply have
p1 .x; Dx /p2 .Dx / D OP.p1 .x; /p2 .// since F Œp2 .Dx /u./ D p2 ./u./.
                                                                             O     Fur-
thermore, if p1 .x; Dx / is a differential operator of order m 2 N0 with coefficients in
Cb1 .Rn /, then

                        p1 .x; Dx /p2 .x; Dx / D .p1 #p2 /.x; Dx /;

where
                                         X 1
                    .p1 #p2 /.x; / WD       @˛ p1 .x; /Dx˛ p2 .x; /:
                                           ˛Š 
                                         j˛jm
56                         Chapter 3 Basic Calculus of Pseudodifferential Operators on Rn


Hence the asymptotic expansion of p1 #p2 .x; / consists only of finitely many terms.
This identity is an easy consequence of the Leibniz formula, cf. Exercise 3.56. Al-
ternatively, it can be observed by modifying the proof of Theorem 3.15. (In this case
there is no remainder term r˛; if N > m.)
   Because of (3.23), we also obtain:
                                 m
Corollary 3.17. Let pj 2 S1;0j .Rn  Rn /, j D 1; 2, be two pseudodifferential sym-
                              m1 Cm2 1
bols. Then there is some r 2 S1;0       .Rn  Rn / such that

                          Œp1 .x; Dx /; p2 .x; Dx / D r.x; Dx /;

where ŒA; B D AB  BA denotes the commutator of two operators.

Proof. See Exercise 3.57.

     Another application of the asymptotic expansion (3.22) is:

Theorem 3.18. Let '; 2 Cb1 .Rn / such that dist.supp '; supp / > 0 and let
     m .Rn  Rn /. Then there is some q 2 S 1 .Rn  Rn / such that
p 2 S1;0                                   1;0

         q.x; Dx /f .x/ D '.x/p.x; Dx /. f /.x/       for all f 2 S.Rn /; x 2 Rn :

Proof. First of all, we have that

       '.x/p.x; Dx /. f /.x/ D p1 .x; Dx /p2 .x; Dx /f .x/      for all f 2 S.Rn /;

where p1 .x; / D '.x/p.x; /, p2 .x; / D         .x/. Hence by Theorem 3.16 there is
some q 2 S1;0
           m
              .Rn  Rn / such that

             q.x; Dx /f .x/ D '.x/p.x; Dx /. f /.x/       for all f 2 S.Rn /:

Moreover, by (3.22)
                                     X 1
                       q.x; /            @˛ p1 .x; /Dx˛ p2 .x; /;
                                      n
                                        ˛Š 
                                     ˛2N0


where @˛ p1 .x; /Dx˛ p2 .x; /  0 since supp ' \ supp   D ;. Hence q 2
                                                    1
S1;0 .R  R / for any N 2 N0 . This implies q 2 S1;0 .R  Rn /.
 mN      n     n                                        n


Remark 3.19. The statement of the last theorem is important in order to define
pseudodifferential operators on manifolds, cf. Section 3.10 below. It is also used
to prove that pseudodifferential operators are pseudo-local, cf. Theorem 5.25 below.
Section 3.6 Application: Elliptic Pseudodifferential Operators and Parametrices           57


3.6 Application: Elliptic Pseudodifferential Operators and
    Parametrices

Definition 3.20. A symbol p 2 S1;0
                               m .Rn  Rn /, m 2 R, is called elliptic if there are

C; R > 0 such that

                     jp.x; /j    C jjm    for all jj     R; x 2 Rn                  (3.24)

Example 3.21. 1. Let p./ D jj2 be the symbol of  . Then p is an elliptic
   symbol of order 2. Moreover, q./ D him , m 2 R, is an elliptic symbol of
   order m.

  2. Let A.x/ 2 Cb1 .Rn /nn be a matrix that is uniformly positive definite, i.e., there
     is some c > 0 such that

                            T A.x/     cjj2 ;   for all x;  2 Rn :

      Then p.x; / D  T A.x/ is an elliptic symbol of order 2.

Lemma 3.22. Let p 2 S1;0
                     m .Rn  Rn /, m 2 R, be an elliptic symbol and R > 0 as

in (3.24). Then

                    q.x; / WD     ./p.x; /1 2 S1;0
                                                   m
                                                       .Rn  Rn /;

where     2 Cb1 .Rn / such that    ./ D 1 for jj        R C 1 and      ./ D 0 for jj  R.

Proof. Since q.x; / D ./ D 0 for jj  R, q.x; / is obviously smooth in .x; /
and it suffices to consider jj R. Because of the chain rule,

                        @j p.x; /1 D p.x; /2 @j p.x; /

and the same identity holds with @j replaced by @xj . Using (3.24),

                   j@j p.x; /1 j  C jj2m him1  C him1

and

                      j@xj p.x; /1 j  C jj2m him  C him

for all jj   R. In the same way one can easily prove by mathematical induction that

                          j@˛ @ˇx p.x; /1 j  C˛;ˇ himj˛j
58                          Chapter 3 Basic Calculus of Pseudodifferential Operators on Rn


for all jj    R. On the other hand qW Rn  Rn ! C is smooth and therefore
                                              0
                         j@˛ @ˇx q.x; /j  C˛;ˇ  C˛;ˇ himj˛j

for all jj  R C 1. Since q.x; / D p.x; /1 for jj       R C 1, we conclude that for
every ˛; ˇ 2 N0n there is some C˛;ˇ > 0 such that

                             j@˛ @ˇx q.x; /j  C˛;ˇ himj˛j
for all  2 Rn .

Corollary 3.23. Let p 2 S1;0
                          m
                             .Rn  Rn / be an elliptic symbol. Then there is some
     m .Rn  Rn / such that
q 2 S1;0

      p.x; Dx /q.x; Dx / D I C r.x; Dx /;      q.x; Dx /p.x; Dx / D I C r 0 .x; Dx /
               1 .Rn  Rn /.
with r; r 0 2 S1;0

Proof. Let q be defined as in Lemma 3.22. Then, because of Theorem 3.16,

                      p.x; Dx /q.x; Dx / D .pq/.x; Dx / C r.x;
                                                          Q Dx /;
            1
where rQ 2 S1;0 .Rn  Rn /. Moreover, p.x; /q.x; / D 1 for all jj       R C 1. Hence
                       1 .Rn  Rn / and
p.x; /q.x; /  1 2 S1;0
                           p.x; Dx /q.x; Dx / D I C r.x; Dx /
with r.x; / D p.x; /q.x; /  1 C r.x;    1 .Rn  Rn /. The identity
                                    Q / 2 S1;0

                           q.x; Dx /p.x; Dx / D I C r 0 .x; Dx /
            1 .Rn  Rn / is proved the same way.
with r 0 2 S1;0

     One can even strengthen the last corollary to:

Theorem 3.24. Let p 2 S1;0
                       m .Rn  Rn /, m 2 R. Then the following conditions are

equivalent:
  1. p is elliptic.
                        m .Rn Rn / such that p.x; D /q.x; D / D I Cr.x; D /,
  2. There is some q 2 S1;0                          x       x             x
                 1
     where r 2 S1;0 .R  Rn /.
                      n

                                     0    m
  3. For every N 2 N there are qN ; qN 2 S1;0 .Rn  Rn / such that

                           p.x; Dx /qN .x; Dx / D I C rN .x; Dx /;
                            0                          0
                           qN .x; Dx /p.x; Dx / D I C rN .x; Dx /;
                   0    N
       where rN ; rN 2 S1;0 .Rn  Rn /.
Section 3.6 Application: Elliptic Pseudodifferential Operators and Parametrices             59

  For the proof of the theorem we will need:

Theorem 3.25 (Uniqueness of the Symbol). Let p; q 2 S1;0    1 .Rn  Rn /. Then

p.x; Dx /u D q.x; Dx /u for all u 2 S.R / implies p.x; / D q.x; /.
                                       n


  The theorem will be proved in the next section.

Proof of Theorem 3.24. 1. implies 2.: This is a consequence of Corollary 3.23.
  2. implies 1.: Since p.x; Dx /q.x; Dx / D OP .p.x; /q.x; // C r.x;
                                                                   Q Dx / and

                          p.x; Dx /q.x; Dx / D I C r.x; Dx /
              1 .Rn  Rn /, we obtain
with r; rQ 2 S1;0

                                                     1
              p.x; /q.x; /  1 D r.x; /  r.x;
                                             Q / 2 S1;0 .Rn  Rn /;

where we have used Theorem 3.25. In particular

                            jp.x; /q.x; /  1j  C hi1

for all x;  2 Rn . Hence there is some R > 0 such that jp.x; /q.x; /  1j  12 for
all jj R and x 2 Rn . Thus j.p.x; /q.x; //1 j  2 for all jj R and x 2 Rn .
Therefore we finally conclude that

               jp.x; /1 j D j.p.x; /q.x; //1 jjq.x; /j  2C him
                                   m .Rn  Rn /. This implies (3.24).
for all x 2 Rn ; jj R since q 2 S1;0
                                                                    m .Rn  Rn /,
   1. implies 3.: Because of Corollary 3.23, there are some q 2 S1;0
     0 2 S 1 .Rn  Rn / such that
r; r      1;0

    p.x; Dx /q.x; Dx / D I  r.x; Dx /;        q.x; Dx /p.x; Dx / D I  r 0 .x; Dx /:
              0    m
Now let qN ; qN 2 S1;0 .Rn  Rn / be such that

                          X
                          N 1                                  X
                                                                N 1
                                                0
qN .x; Dx / WD q.x; Dx /                  k
                                 r.x; Dx / ;   qN .x; Dx / WD          r 0 .x; Dx /k q.x; Dx /:
                           kD0                                  kD0

                                             N .Rn  Rn / by r .x; D / WD
Because of Theorem 3.16, we can define rN 2 S1;0               N     x
         N
r.x; Dx / and get

                                                X
                                                N 1
     p.x; Dx /qN .x; Dx / D .I  r.x; Dx //            r.x; Dx /k D I  r.x; Dx /N ;
                                                kD0
60                            Chapter 3 Basic Calculus of Pseudodifferential Operators on Rn


Similarly,

                                  X
                                  N 1
       0
      qN .x; Dx /p.x; Dx / D             r 0 .x; Dx /k .I  r 0 .x; Dx // D I  r 0 .x; Dx /N ;
                                  kD0

       0 2 S N .Rn  Rn / is defined by r 0 .x; D / WD r 0 .x; D /N .
where rN      1;0                         N       x              x
  3. implies 2.: This is obvious.

     One can improve the statement of Theorem 3.24 in the following way:1

Proposition 3.26. Let p 2 S1;0
                            m
                               .Rn  Rn /, m 2 R. Then p is elliptic if and only if
                    m
there is some q1 2 S1;0 .R  Rn / such that
                          n


                          p.x; Dx /q1 .x; Dx / D I C r1 .x; Dx /                            (3.25)
          1 .Rn  Rn /.
with r 2 S1;0
     In order to prove this statement, the following lemma is needed:
                                m
Lemma 3.27. Let pj 2 S1;0j .Rn  Rn / with m1                       mj ! 1 as j ! 1.
                        m1
Then there is some p 2 S1;0 .Rn  Rn / such that
               1
               X                                  X
                                                  N 1
                                                                      mN
  p.x; /             pj .x; / W, p.x; /              pj .x; / 2 S1;0 .Rn  Rn /        (3.26)
               j D1                               j D1

for all N 2 N.

Proof of Proposition 3.26. The “if”-part follows directly from Theorem 3.24 since
 1
S1;0      N for any N 2 N.
         S1;0
  Conversely, if p is elliptic and q.x; Dx / is as in Corollary 3.23, we can define
        m .Rn  Rn / by
q1 2 S1;0

                             q1 .x; Dx / WD q.x; Dx /q 0 .x; Dx /;

where
                                                 1
                                                 X
                                    q 0 .x; /         r #k .x; /;
                                                 kD0

r is the same as in the proof of Theorem 3.24, and
                                                          k
                      r #k .x; / WD r#    #r.x; / 2 S1;0 .Rn  Rn /:
                                     „       ƒ‚      …
                                             k-times

1 This improvement is optional and can be skipped on first reading.
Section 3.6 Application: Elliptic Pseudodifferential Operators and Parametrices      61

The existence of q 0 follows from Lemma 3.27. Then for any N 2 N

                                                    NX
                                                      1
           p.x; Dx /q1 .x; Dx / D p.x; Dx /q.x; Dx /     r #k .x; Dx /
                                                            j D0
                                     C p.x; Dx /q.x; Dx /rN .x; Dx /
                                                             0
                                   D p.x; Dx /qN .x; Dx / C rN .x; Dx /;
                                                          0    N
where qN .x; Dx / is as in the proof of Theorem 3.24 and rN 2 S1;0 .Rn Rn /. Hence

                        p.x; Dx /q1 .x; Dx / D I C r 00 .x; Dx /;

with r 00 2 S1;0
              N .Rn  Rn /. Because of the uniqueness of the symbol of a pseudo-

differential operator, cf. Theorem 3.25, r 00 is independent of N . Since N 2 N was
                                    1
arbitrary, we conclude that r 00 2 S1;0 .Rn  Rn /.

Proof of Lemma 3.27. Let       2 C 1 .Rn / such that 0       ./  1 and
                                       ´
                                         0 if jj  1;
                                 ./ D
                                         1 if jj 2:

We will define p by
                                         1
                                         X
                            p.x; / WD          ."j /pj .x; /                   (3.27)
                                         j D1

for a suitable sequence ."j /j 2N such that 1    "j    "j C1 > 0 for all j 2 N and
limj !1 "j D 0.
   To this end we observe that for any " > 0
                                      ´
                                        0 if jj  "1 ;
                               ."/ D                                        (3.28)
                                        1 if jj 2"1 :

Moreover, it is easy to prove that for any ˛ 2 N0n n ¹0º

                      j@˛ ."/j  C˛ "j˛j ;
                       @˛ ."/ D 0 if jj  "1 or jj           2"1

uniformly in " > 0 and  2 Rn for some C˛ > 0. For any ˛ ¤ 0 we have that
@˛ ."/ ¤ 0 only if "1 < jj < 2"1 . Furthermore, if 0 < "  1, then

                "  2jj1  4.1 C jj/1       for all "1 < jj < 2"1 :
62                            Chapter 3 Basic Calculus of Pseudodifferential Operators on Rn


Hence for any ˛ 2 N0n there is some C˛ > 0 such that

                    j@˛ ."/j  C˛ .1 C jj/j˛j                  for all  2 Rn :

This means that ¹ ."  / W 0 < "  1º                     0 .Rn  Rn / is bounded. Therefore
                                                         S1;0
Proposition 3.5 implies that for any j 2 N
             p";j .x; / WD        ."/pj .x; /       for all x;  2 Rn ; 0 < "  1
                                                             m
defines a set of symbols, which are bounded in S1;0j .Rn  Rn /. Hence for any j 2 N
                                                                                           .m /
there is some constant Cj independent of 0 < "  1 such that jp";j jj j  Cj .
Therefore
                                                                 
 j@˛ @ˇx . ."/pj .x; //j  Cj .1 C jj/mj j˛j  Cj .1 C jj/1 .1 C jj/mj C1j˛j
for all x;  2 Rn , j˛j; jˇj  j , and 0 < "  1.
   Now we choose "j 2 .0; 1 such that limj !1 "j D 0 and
                                  Cj "j  2j         for all j 2 N:
Since   ."j / D 0 if .1 C jj/1            "j , we have

                   j@˛ @ˇx . ."/pj .x; //j  2j .1 C jj/mj C1j˛j                            (3.29)
for all x;  2 Rn , j˛j; jˇj  j . Moreover, let p be defined by (3.27). Then p is
well-defined and p 2 C 1.Rn  Rn / since for every  2 Rn the sum in (3.27) is finite
and because of (3.28) and "j !j !1 0. In order to prove that p 2 S1;0 m
                                                                        .Rn  Rn /
              n be arbitrary and choose j 2 N such that j        max.j˛j; jˇj/ and
let ˛; ˇ 2 N0                            0                  0
mj0 C 1  m1 . Then
         p.x; / D q.x; / C r.x; /;              where
                       0 1
                      jX                                               1
                                                                       X
         q.x; / WD             ."j /pj .x; /;        r.x; / D              ."j /pj .x; /:
                      j D1                                            j Dj0
                                                                           m     m1
Since the sum in the definition of q is finite and p"j ;j 2 S1;0j , we have q 2 S1;0 . In
particular we have
              j@˛ @ˇx q.x; /j  C˛;ˇ .1 C jj/m1 j˛j               for all x;  2 Rn
with arbitrary ˛; ˇ 2 N0n. Moreover, for any ˛; ˇ 2 N0n with j˛j; jˇj  j0 we have
                                  1
                                  X
           j@˛ @ˇx r.x; /j             j@˛ @ˇx pj;"j .x; /j
                                  j Dj0
                                   X1
                                         2j .1 C jj/mj C1j˛j  .1 C jj/m1 j˛j
                                  j Dj0
Section 3.7 Boundedness on Cb1 .Rn/ and Uniqueness of the Symbol                                63

uniformly in x;  2 Rn due to (3.29). Hence we conclude that

               j@˛ @ˇx p.x; /j  C˛;ˇ .1 C jj/m1 j˛j      for all x;  2 Rn
                                                         m1
for any j˛j; jˇj  j0 . Since j0 2 N was arbitrary, p 2 S1;0 .Rn  Rn /.
   In order to prove (3.26), we use that

               X
               N 1                 X
                                    N 1                              1
                                                                      X
   p.x; /           pj .x; / D          . ."j /  1/pj .x; / C          ."j /pj .x; /:
               j D1                 j D0                              j DN

Here
                                              1
                                              X
                                0
                             p .x; / WD            ."j /pj .x; /
                                             j DN

is defined in the same way as p in (3.27) just with the series starting with pN instead
of p1 . Hence the first part implies that p0 2 S1;0
                                                mN
                                                    .Rn  Rn /. On the other hand

                         X
                         N 1
                                                   1
                                . ."j /  1/pj 2 S1;0 .Rn  Rn /
                         j D0

since   ."j /  1 2 C01 .Rn /. Consequently,

                                    X
                                    N 1
                                                 mN
                             p            pj 2 S1;0 .Rn  Rn /;
                                    j D1

which finishes the proof.


3.7 Boundedness on Cb1 .Rn / and Uniqueness of the
    Symbol
As seen above,
                                 “
                                        0
               p.x; Dx /u.x/ D Os- e ix  p.x; /u.x C x 0 /dx 0 d̄                    (3.30)

for all u 2 S.Rn /. Here the oscillatory integral is well defined for all u 2 Cb1 .Rn /.
Therefore we can extend the definition of p.x; Dx / to Cb1 .Rn /.
                         m .Rn  Rn /. Then p.x; D / defined by (3.30) for u 2
Theorem 3.28. Let p 2 S1;0                        x
 1    n
Cb .R / is a bounded linear operator

                            p.x; Dx /W Cb1 .Rn / ! Cb1 .Rn /:
64                         Chapter 3 Basic Calculus of Pseudodifferential Operators on Rn


Proof. Consider ax .x 0 ; / D p.x; /u.x C x 0 / for all x; x 0 ;  2 Rn . Since for every
˛; ˇ 2 N0n

               j@˛x0 @ˇ p.x; /u.x C x 0 /j  C˛;ˇ jpj.m/
                                                       jˇ j
                                                            kukC j˛j .Rn / him ;
                                                                     b


we have ax .x 0 ; / 2 Am
                                                 .m/
                        0 with jax jA0 ;k  C jpjk kukCbk uniformly in x 2 R .
                                     m
                                                                            n

Thus

                  sup jp.x; Dx /u.x/j  C sup jax jAm       0
                                                    0 ;2.lCl /
                 x2Rn                           x2Rn

                                            C 0 jpj2.lCl 0 / kukC 2.lCl 0 / .Rn /
                                                    .m/
                                                                                         (3.31)
                                                                  b


by Theorem 3.9, where 2l > m C n, 2l 0 > n. In order to estimate @˛x p.x; Dx /u we
observe that a.x; x 0 ; ;  0 / WD p.x; /u.x C x 0 / 2 Am
                                                          0 .R
                                                              2n  R2n / and therefore

                                     “
                                             0
          @xj p.x; Dx /u D Os- eix  .@xj p/.x; /u.x C x 0 /dx 0 d̄
                                       “
                                               0
                                  C Os- e ix  p.x; /.@xj u/.x C x 0 /dx 0 d̄

                            D .@xj p/.x; Dx /u C p.x; Dx /@xj u

by (3.15) in Theorem 3.13. Applying this formula successively and using (3.31), it
                                                      .m/
follows immediately that kp.x; Dx /ukC k .Rn /  C jpj2.lCl 0/Ck kukC 2.lCl 0 /Ck .Rn / ,
                                               b                                     b
which proves the theorem.

Remark 3.29. Using this extension, one can show that

                           eix .p.x; Dx /e i: /.x/ D p.x; /                        (3.32)

for all x;  2 Rn , cf. Exercise 3.62.
   With this identity it is now easy to prove the uniqueness of the symbol of pseudo-
differential operators:


Proof of Theorem 3.25. Because of (3.32), we only need to prove

                   p.x; Dx /u D q.x; Dx /u for all u 2 Cb1 .Rn /:                        (3.33)

To this end let u 2 Cb1 .Rn / and u" .x/ WD ."x/u.x/ for all x 2 Rn , " > 0 and
some 2 S.Rn / with .0/ D 1. Then u" 2 S.Rn / and

                 @˛x u" .x/ !"!0 @˛x u.x/       for every x 2 Rn ; ˛ 2 N0n :
Section 3.8 Adjoints of Pseudodifferential Operators and Operators in .x; y/-Form                     65

Therefore Corollary 3.10 implies
                      “
                               0 0
 p.x; Dx /u" .x/ D Os- eix  p.x; /u" .x C x 0 / dx 0 d̄ 0 !"!0 p.x; Dx /u.x/
                                   „  ƒ‚        …
                                              DWa";x; .x 0 ; 0 /

for every x 2 Rn since

     @˛x @ 0 a";x; .x 0 ;  0 / !"!0 @˛x @ 0 ax; .x 0 ;  0 / for all x 0 ;  2 Rn ; ˛; ˇ 2 N0n
          ˇ                                 ˇ


with ax; .x 0 ;  0 / D p.x; /u.x Cx 0 / and since .a";x; /0<"1 is bounded in Am
                                                                                   0 .R 
                                                                                       n

R / for every x;  2 R , which follows from the boundedness of .u" /0<"1 in
  n                            n

Cb1 .Rn /. In the same way, we obtain the corresponding statement for q.x; Dx /.
Therefore

   p.x; Dx /u.x/ D lim p.x; Dx /u" .x/ D lim q.x; Dx /u" .x/ D q.x; Dx /u.x/
                         "!0                            "!0

for every x 2 Rn since p.x; Dx /u" D q.x; Dx /u" due to u" 2 S.Rn /. Since
u 2 Cb1 .Rn / was arbitrary, (3.33) follows and the theorem is proved.

   More generally, if P W Cb1 .Rn / ! Cb1 .Rn / is an arbitrary bounded linear map,
then we can define a symbol of P by

                                 p.x; / WD eix .P e i: /.x/

We note that one can use the relation (3.32) to determine the symbol of the composi-
tion p1 .x; Dx /p2 .x; Dx / without using Theorem 3.16, cf. Exercise 3.67


3.8 Adjoints of Pseudodifferential Operators and
    Operators in .x; y/-Form

Definition 3.30. Let A; A W S.Rn / ! S.Rn /. Then A is called formal adjoint of A
if

                .Au; v/L2 .Rn / D .u; A v/L2 .Rn /             for all u; v 2 S.Rn /:

The adjoint of an operator plays an important role in many purposes. (For example:
solvability of equations).
  In the following, we will prove that every pseudodifferential operator p.x; Dx /
possesses a formal adjoint p  .x; Dx /, which is again a pseudodifferential operator
(of the same order). This will allow us to extend p.x; Dx /, up to now only defined on
S.Rn /, to a linear operator defined on S 0 .Rn /.
66                         Chapter 3 Basic Calculus of Pseudodifferential Operators on Rn


     Now we calculate the formal adjoint of p.x; Dx /:
                                              “
              .p.x; Dx /u; v/L2 .Rn / D            eix p.x; /u./
                                                                O d̄ v.x/dx
                                              “
                                          D        e ix p.x; /v.x/dx u./
                                                                        O d̄
                                              Z       Z
                                          D       O
                                                  u./  eix p.x; /v.x/dx d̄;

where we have used Fubini’s theorem. – Note that v; uO 2 S.Rn /, which implies that
              O
e ix p.x; /u./v.x/ 2 L1 .Rn  Rn / with respect to .x; /.

Lemma 3.31. Let p 2 S1;0
                     m .Rn  Rn /, m 2 R, and v 2 S.Rn /. Then

                                Z
                      w./ WD            eix p.x; /v.x/dx 2 S.Rn /:
                                    Rn

Proof. See Exercise 3.64. – It is also a consequence of Lemma 3.33 below.

     Hence we can use .F Œu; v/L2 D .2/n .u; F 1 Œv/L2 and get
                                              “
                            
                  .p.x; Dx / v/.x/ D              e i.xy/ p.y; /v.y/dy d̄ :    (3.34)

This operator is a pseudodifferential operator in the so called y-form (also called R-
form), which is a special case of operators of the form
                                          “
                   p.x; Dx ; x/u WD           e i.xy/ p.x; y; /u.y/dy d̄       (3.35)


for all u 2 S.Rn /, where p 2 S1;0
                               m .R2n  Rn /, i.e.,



                      j@˛ @ˇx @y p.x; y; /j  C˛;ˇ; .1 C jj/mj˛j

for all ˛; ˇ; 2 N0n. These operators are called pseudodifferential operators in .x; y/-
form and p.x; Dx / is called pseudodifferential operator in x-form.
   As before we obtain
                               “
                                        0
             p.x; Dx ; x/u D Os- e ix  p.x; x C x 0 ; /u.x C x 0 /dx 0 d̄

for all u 2 S.Rn /.
Section 3.8 Adjoints of Pseudodifferential Operators and Operators in .x; y/-Form        67

Theorem 3.32. Let p 2 S1;0 m .R2n Rn /, m 2 R. Then p.x; D ; x/u D p .x; D /u
                                                           x         L     x
for all u 2 Cb1 .Rn /, where
                      “
        pL .x; / D Os- e iy p.x; x C y;  C /dy d̄ 2 S1;0
                                                          m
                                                              .Rn  Rn /:

Moreover,
                                    X 1
                        pL .x; /         @˛ Dy˛ p.x; y; /jyDx
                                     n
                                       ˛Š
                                    ˛2N0

in the sense that for all N 2 N0
                         X 1
                                                      mN 1
          pL .x; /         @˛ D ˛ p.x; y; /jyDx 2 S1;0    .Rn  Rn /:
                           ˛Š  y
                        j˛jN

Proof. Using
                                   “
                                           0
                     u.x C x / D Os- ei.xCx y/ u.y/dy d̄
                                0



due to Example 3.11, we get
                       ZZZZ
                                  0           0
  p.x; Dx ; x/u D Os-        e ix  ei.xCx y/ p.x; x C x 0 ; /u.y/dy d̄ dx 0 d̄
         “              “                                         
              i.xy/          ix 0 ./           0      0
   D Os- e              Os- e                p.x; x C x ; /dx d̄ u.y/dy d̄
         “
   D Os- e i.xy/ pL .x; /u.y/dy d̄ :

Hence application of Theorem 3.15 finishes the proof.

  As a direct consequence we obtain:

Lemma 3.33. Let p 2 S1;0m .R2n Rn /, m 2 R. Then p.x; D ; x/W S.Rn / ! S.Rn /
                                                               x
is a bounded linear operator. Moreover, if the definition (3.35) is replaced by
                               “
                                       0
          p.x; Dx ; x/u WD Os- eix  p.x; x C x 0 ; /u.x C x 0 /dx 0 d̄

for u 2 Cb1 .Rn /, then p.x; Dx ; x/W Cb1 .Rn / ! Cb1 .Rn / is a bounded operator.

Proof. Since p.x; Dx ; x/u D pL .x; Dx /u for all u 2 Cb1 .Rn /, the lemma is a
consequence of the corresponding statements for pL .x; Dx /.
68                         Chapter 3 Basic Calculus of Pseudodifferential Operators on Rn


Corollary 3.34. If p 2 S1;0
                         m .Rn  Rn /, then the formal adjoint of p.x; D / is
                                                                        x
p  .x; Dx / where
                       “
          p .x; / D Os- e iy p.x C y;  C /dy d̄ 2 S1;0
                                                       m
                                                            .Rn  Rn /:

Moreover,
                                         X 1
                           p  .x; /          @˛ Dx˛ p.x; /
                                          n
                                            ˛Š
                                        ˛2N0

in the sense that for every N 2 N0
                            X 1
              p  .x; /                           mN 1
                                  @˛ D ˛ p.x; / 2 S1;0    .Rn  Rn /:
                                ˛Š  x
                          j˛jN

Proof. The corollary is a direct consequence of (3.34) and Theorem 3.32.

Definition 3.35. Let p 2 S1;0
                          m
                              .Rn  Rn /. Then we define p.x; Dx /W S 0 .Rn / !
  0 .Rn / by
S

            hp.x; Dx /u; vi WD hu; p  .x; Dx /vi u 2 S 0 .Rn /; v 2 S.Rn /:

   Since S.Rn /  S 0 .Rn / (identifying functions with functional in the way described
in Section 2.4), it is important to notice that, if u 2 S.Rn /,
      hp.x; Dx /u; vi D hu; p .x; Dx /vi
                                                       Z
                                
                       D .u; p .x; Dx /v/L2 .Rn / D             p.x; Dx /u.x/v.x/ dx
                                                           Rn

for all v 2 S.Rn /. I.e., the definition of p.x; Dx /u in sense of S 0 .Rn / coincides with
the first definition of p.x; Dx /u for u 2 S.Rn /.


3.9 Boundedness on L2 .Rn/ and L2-Bessel Potential Spaces
The main result of this section is:

Theorem 3.36. Let p 2 S1;0 0
                             .Rn  Rn /. Then p.x; Dx / (first defined on S.Rn /)
extends to a bounded operator p.x; Dx /W L2 .Rn / ! L2 .Rn /.
   The theorem will be important for later applications to partial differential and
pseudodifferential operator equations. In Section 5.5 we will prove that zero order
pseudodifferential operators are also bounded on Lp .Rn / for every 1 < p < 1. But
for this purpose the theory of singular integral operators is needed, which is not the
case if p D 2.
   The proof of Theorem 3.36 is divided into several parts.
Section 3.9 Boundedness on L2 .Rn / and L2 -Bessel Potential Spaces               69

                                       n1 .Rn  Rn /.
Lemma 3.37. Theorem 3.36 holds if p 2 S1;0
               n1 .Rn  Rn /, then p.x; / 2 L1 .Rn / with respect to  and there-
Proof. If p 2 S1;0
fore
                   Z                           Z Z
 p.x; Dx /f .x/ D      eix p.x; /fO./d̄ D         e i.xy/ p.x; /d̄ f .y/dy
                     n                           n  n
                   ZR                           R  R

                D      k.x; x  y/f .y/dy
                     Rn

for all f 2 S.Rn / by Fubini’s theorem, where k.x; z/ WD F71 !z
                                                                  Œp.x; /.z/. This
kernel satisfies
                               ˇZ                   ˇ
                               ˇ                    ˇ
                   ˛           ˇ
                 jz k.x; z/j D ˇ  e @ p.x; /d̄  ˇˇ  C˛ jpjj˛j
                                   iz ˛                     .n1/
                                 Rn

                         .n1/
since j@˛ p.x; /j  jpjj˛j    hin1j˛j 2 L1 .Rn / with respect to . Hence

                                                         .n1/
                          j.1 C jzj2 /n k.x; z/j  C jpj2n

and therefore

                g.z/ WD sup jk.x; z/j  C.1 C jzj2 /n 2 L1 .Rn /:
                          x2Rn

Thus
                                             Z
             kp.x; Dx /f kL2 .Rn /  C            g.x  y/jf .y/jdy
                                             Rn                       L2 .Rn /
                                         0
                                    C kgkL1 .Rn / kf kL2 .Rn /

because of (2.5). Now the statement is a consequence of Lemma A.10 since S.Rn / is
dense in L2 .Rn /.
                                        m .Rn  Rn / with m > 0.
Lemma 3.38. Theorem 3.36 holds for p 2 S1;0

Proof. In order to prove kp.x; Dx /f k2  C kf k2 for f 2 S.Rn /, it is sufficient to
show
                        kp  .x; Dx /p.x; Dx /f k2  C kf k2
since

 kp.x; Dx /f k22 D .p  .x; Dx /p.x; Dx /f; f /  kp .x; Dx /p.x; Dx /f k2 kf k2 :
             m .Rn  Rn /, then
But, if p 2 S1;0

                          p  .x; Dx /p.x; Dx / D p 0 .x; Dx /
70                          Chapter 3 Basic Calculus of Pseudodifferential Operators on Rn


with p 0 2 S1;0
            2m .Rn  Rn /. Hence, using the previous lemma, we obtain by mathe-

matical induction that

                           kp.x; Dx /f kL2 .Rn /  C kf kL2 .Rn /
             mk
for all p 2 S1;0 with mk D .n C 1/=2k , k 2 N. This proves the lemma since for
every m > 0 there is some k 2 N such that mk > m. Again the statement of the
lemma follows now from the density of S.Rn / in L2 .Rn /, cf. Lemma A.10.

     In order to finish the proof of Theorem 3.36, we need
                      0 .Rn  Rn / with p.x; / 2 R for all x;  2 Rn and F 2
Lemma 3.39. If p 2 S1;0
 1
C .R/, then F .p.x; // 2 S1;0
                           0 .Rn  Rn /.


Proof. First of all jp.x; /j  R for some R > 0 and F is bounded on compact sets.
Hence jF .p.x; //j  supjzjR jF .z/j. Moreover,

                 j@j F .p.x; //j  sup jF 0 .z/jj@j p.x; /j  C hi1 ;
                                     jzjR

                j@xj F .p.x; //j  sup jF 0 .z/jj@xj p.x; /j  C:
                                     jzjR


Finally, the estimate of j@˛ @ˇx F .p.x; //j for arbitrary ˛; ˇ 2 N0n can be proved using
a mathematical induction and the chain rule as before.

Proof of Theorem 3.36. If p 2 S1;0
                               0 .Rn  Rn /, then jp.x; /j  M for all x;  2 Rn ,
                   .0/
where M WD jpj0          0. Therefore

                   p0 .x; / WD M 2  p.x; /p.x; / 2 S1;0
                                                        0
                                                            .Rn  Rn /
                                                                              1
and p 0 .x; / 0. Now let F 2 C 1 .R/ be defined by F .t / D .1 C t / 2 for t            0.
Then q.x; / WD F .p 0 .x; // 2 S1;0
                                  0 .Rn  Rn / and


      q  .x; Dx /q.x; Dx /f D OP.F .p0 .x; //2 /f C r.x; Dx /f
                             D .1 C M 2 /f  OP.p.x; /p.x; //f C r.x; Dx /f
                             D .1 C M 2 /f  p  .x; Dx /p.x; Dx /f C r 0 .x; Dx /f

for f 2 S.Rn /, where r; r 0 2 S1;0
                                1 .Rn  Rn / because of Theorem 3.16 and Corol-

lary 3.34. Hence
                     2
        kp.x; Dx /f kL 2 .Rn /

          .p .x; Dx /p.x; Dx /f; f /L2 .Rn / C .q  .x; Dx /q.x; Dx /f; f /L2 .Rn /
                                       0
          .1 C M 2 /kf kL
                         2
                           2 .Rn / C .r .x; Dx /f; f /:
Section 3.9 Boundedness on L2 .Rn / and L2 -Bessel Potential Spaces                     71

Since r 0 2 S1;0
             1 .Rn  Rn /, kr 0 .x; D /f k  C kf k due to Lemma 3.38. Hence
                                      x    2        2
kp.x; Dx /f k22  .1 C M 2 C C /kf k22 for all f 2 S.Rn /, which implies the result
since S.Rn / is dense in L2 .Rn /.

Remark 3.40. Checking the previous proofs, it can be observed that the estimates of
                                         .0/
kp.x; Dx /kL.L2 .Rn // depend only on jpjk for some suitably large k 2 N (and not
on p directly). Since the mapping p 7! p.x; Dx / is linear, we have
                                                            .0/
                          kp.x; Dx /kL.L2 .Rn //  C jpjk :                       (3.36)
                                                           .0/           .0/
This can be seen as follows: Let q.x; / WD p.x; /=jpjk . Then jqjk D 1 and

                              kq.x; Dx /kL.L2 .Rn //  C

                      0 .Rn  Rn /. Hence multiplication by jpj         .0/
independently of p 2 S1;0                                       k
                                                                  yields (3.36).

  Recall that the L2 -Bessel potential spaces and their norms are defined by

                    H2s .Rn / D ¹u 2 S 0 .Rn /W hDx is u 2 L2 .Rn /º;
                  kukH2s .Rn /  kuks;2 WD khDx is uk2 ;

where s 2 Rn . With the aid of the L2 -continuity of zero order pseudodifferential
operators it is now easy to prove the following theorem on continuity of pseudodiffer-
ential operators between L2 -Bessel potential spaces:

Theorem 3.41. Let p 2 S1;0 m .Rn  Rn /. Then p.x; D /W H sCm .Rn / ! H s .Rn /.
                                                    x    2             2
Moreover, there is some k 2 N0 such that

   kp.x; Dx /kL.H sCm .Rn /;H s .Rn //  Cs;m jpj.m/
                                                 k
                                                                      m
                                                         for all p 2 S1;0 .Rn  Rn /:
                    2           2


Proof. First of all, we note that, if u 2 L2 .Rn / S 0 .Rn /, p.x; Dx /u is defined in
the sense of S 0 .Rn /, cf. Definition 3.35, and m D 0, then

            jhp.x; Dx /u; vij D j.u; p  .x; Dx /v/L2 .Rn / j
                                kukL2 .Rn / kp  .x; Dx /kL2 .Rn / kvkL2 .Rn /

for all v 2 S.Rn / due to Theorem 3.36 and Corollary 3.34. Therefore p.x; Dx /u 2
L2 .Rn / Š L2 .Rn /0 by the Riesz representation theorem.
   Now we consider general s; m 2 R. Since hDx isCm W H2sCm .Rn / ! L2 .Rn /
and hDx is W L2 .Rn / ! H2s .Rn / are linear isomorphisms, p.x; Dx /W H2sCm .Rn / !
H2s .Rn / is a linear bounded operator if and only if

            q.x; Dx / WD hDx is p.x; Dx /hDx ism W L2 .Rn / ! L2 .Rn /
72                        Chapter 3 Basic Calculus of Pseudodifferential Operators on Rn


is a bounded operator. Because of Theorem 3.16, q 2 S1;0
                                                     0 .Rn  Rn /. Hence the first

statement is a consequence of Theorem 3.36. The second statement is a consequence
of Remark 3.40 and the fact that the mapping
                    m1     m2                            m1 Cm2
                   S1;0  S1;0 3 .p1 ; p2 / 7! p1 #p2 2 S1;0

is bounded applied to p1 .x; / D his , p2 .x; / D p.x; /hism . More precisely,
this implies

             kp.x; Dx /kL.H sCm .Rn /;H s .Rn //
                               2          2
                                               0         .0/
               Cs;m kq.x; Dx /kL.L2 .Rn //  Cs;m jqjk
               Cs;m jh  is j.s/
                              n.k/
                                   jpj.m/
                                      n.k/
                                           jh  ism jn.k/
                                                       .sm/    0
                                                               Cs;m jpj.m/
                                                                        n.k/

for some n.k/ 2 N, where k is as in (3.36).

Corollary 3.42. Let s 2 Rn . Then S.Rn / is dense in H2s .Rn /.

Proof. Because of the definition of H2s .Rn /, hDx is W H2s .Rn / ! L2 .Rn / is an iso-
morphism. Moreover, because of Theorem 3.6, hDx is W S.Rn / ! S.Rn / for any
s 2 R. Now, since C01 .Rn /         S.Rn / are dense in L2 .Rn /, cf. Theorem A.6,
    n         s
S.R / D hDx i S.R / is dense in H s .Rn /.
                     n


Corollary 3.43. (Elliptic regularity) Let p 2 S1;0
                                                m .Rn  Rn / be an elliptic symbol
                                                       S
and f 2 H2s .Rn /, s; m 2 R. Then, if u 2 H21 .Rn / WD s2R H2s .Rn / is a solution
of the pseudodifferential equation

                                   p.x; Dx /u D f;

then u 2 H2sCm .Rn /.

Proof. Let u 2 H21 .Rn /. Then u 2 H2sCmN .Rn / for some N 2 N. By the same
                                                            m .Rn  Rn / such that
construction as in Theorem 3.24, there is some qN .x; / 2 S1;0

                        qN .x; Dx /p.x; Dx / D I C rN .x; Dx /;
            N
where rN 2 S1;0 .Rn  Rn /. Therefore

            qN .x; Dx /f D qN .x; Dx /p.x; Dx /u D u C rN .x; Dx /u:

Since qN .x; Dx /f 2 H2sCm .Rn / and rN .x; Dx /u 2 H2sCm .Rn / by Theorem 3.41,
we have u 2 H2sCm .Rn /.

Remark 3.44. The latter corollary says that the solution u is “as smooth as the right-
hand side allows”. This property is also called elliptic regularity.
Section 3.9 Boundedness on L2 .Rn / and L2 -Bessel Potential Spaces                             73

Lemma 3.45. Let s > n2 . Then there is some Cs > 0 such that
       kukC 0 .Rn /  Cs khDx is ukL2 .Rn / ;            kukL2 .Rn /  Cs sup jhxis u.x/j
                b
                                                                               x2Rn

for all u 2 S.Rn /. In particular, H2s .Rn / ,! Cb0 .Rn /.
Proof. First of all, by Theorem 2.1 and the Cauchy–Schwarz inequality,
                 O L1 .Rn /  kh  is kL2 .Rn / kh  is uk
 kukC 0 .Rn /  kuk                                      O L2 .Rn / D Cs khDx is ukL2 .Rn /
       b

for all u 2 S.Rn /, where we have used that khis kL2 .Rn / < 1 because of s > n2
and Lemma A.9. This implies H2s .Rn / ,! Cb0 .Rn / since S.Rn / is dense in H2s .Rn /.
  Similarly as before
           kukL2 .Rn /  kh  is ukL1 .Rn / kh  is kL2 .Rn / D Cs khis ukL1 .Rn /
for any u 2 S.Rn /.
  As a consequence we obtain:

Theorem 3.46. Let k 2 N0 and s > k C n2 . Then H2s .Rn / ,! Cbk .Rn /.
Proof. First of all
                                              X
            max sup j@˛x f .x/j  C                  k@˛x f kH sk .Rn /  C 0 kf kH s .Rn /
           j˛jk x2Rn
                                             j˛jk

for all f 2 S.R /. Since S.R / is dense in H2s .Rn /, the statement follows.
                     n               n


  We conclude the section with a useful technical corollary.

Corollary 3.47. Let
                              juj00k;S WD     sup        kx ˛ Dxˇ ukL2 .Rn /
                                            j˛jCjˇ jk

for u 2 S.Rn /, k 2 N0 . Then j  j00k;S , k 2 N, is a decreasing sequence of semi-norms
on S.Rn / which is equivalent to the semi-norms j  jk;S defined above. More precisely,
                     juj00k;S  Ck jujkC2n;S      and       jujk;S  Ck juj00kC2n;S
for all u 2 S.Rn / and k 2 N0 .
Proof. Since hDx i2n D .1               /n is a differential operator of order 2n,
 jujk;S D       sup        kx ˛ Dxˇ uk1  C          sup     khDx i2n x ˛ Dxˇ uk2  Ck juj00kC2n;S
              j˛jCjˇ jk                        j˛jCjˇ jk

by Lemma 3.45. Similarly, since hxi2n D .1 C jxj2 /n is a polynomial of order 2n,
 juj00k;S D         sup    kx ˛ Dxˇ uk2  C          sup     khxi2n x ˛ Dxˇ uk1  Ck jujkC2n;S :
              j˛jCjˇ jk                        j˛jCjˇ jk
74                        Chapter 3 Basic Calculus of Pseudodifferential Operators on Rn


3.10 Outlook: Coordinate Transformations and
     Pseudodifferential Operators on Manifolds
In this section we will show that for every suitable smooth diffeomorphism W Rn !
Rn the operator QW S.Rn / ! S.Rn / defined by

      Qu.x/ WD .p.x; Dx /w/..x//;        w.x/ WD u. 1 .x//; u 2 S.Rn /        (3.37)

is again a pseudodifferential operator. This is important to obtain a definition of
pseudodifferential operators on a smooth compact manifold in a way that is essen-
tially independent of the choice of local charts.
   For the following we denote

                              Qu D   p.x; Dx / ;1 u;

where .  v/.x/ WD v..x// and . ;1 u/.x/ WD u. 1 .x//.
  More precisely, we assume that W Rn ! Rn is a smooth function such that @xj  2
Cb1 .Rn /n for all j D 1; : : : ; n and

                            0 < c  jdet D.x/j  C < 1                          (3.38)

for all x 2 Rn and some constants c; C > 0. In particular, this implies that  1 W Rn !
Rn is a again smooth and @xj  1 2 Cb1 .Rn / for all j D 1; : : : ; n. In the following
rx  denotes the total derivative of W Rn ! Rn .
   We assume for simplicity that
                                                  1
                                sup jr.x/  I j  :                             (3.39)
                               x2R n              2

For the discussion of the general case we refer to [21, Theorem 6.3]. Here j  j is any
matrix norm, which is induced by some vector norm.
  The main result of this section is:

Theorem 3.48. Let p 2 S1;0m
                             .Rn  Rn /, m 2 R, let W Rn ! Rn be as above and
       n / ! S.Rn / be defined by (3.37). Then there is some q 2 S m .Rn Rn / such
QW S.R                                                            1;0
that Qu D q.x; Dx /u for all u 2 S.Rn /. Moreover, q.x; Dx / has the asymptotic
expansion
                      X 1
          q.x; /           @˛ Dy˛ q.x;
                                    Q y; /jyDx ;      where
                       n
                         ˛Š
                     ˛2N0

       Q y; / D p..x/; A.x; y/T /jdet A.x; y/j1 jdet ry .y/j and
       q.x;
                   Z 1
         A.x; y/ D     ry .x C t .y  x// dt for all x; y close enough
                      0
Section 3.10 Outlook: Coordinate Transformations and PsDOs on Manifolds                  75

in the sense that for any N 2 N0
                       X 1
                                                    mN 1
           q.x; /           @˛ D ˛ q.x;
                                     Q y; /jyDx 2 S1;0    .Rn  Rn /:
                            ˛Š  y
                        j˛jN

In particular, we have
            q.x; / D p..x/; .ry .x//T / C r.x; /                      m1
                                                                  with r 2 S1;0 :
Proof. First of all, (3.39) ensures that
                                             1
                          jA.x; y/  I j        for all x; y 2 Rn :
                                             2
Therefore A.x; y/T D .A.x; y/1 /T exists for all x; y 2 Rn . Moreover, let 2
S.Rn / with .0/ D 1 and " ./ D ."/ for all " > 0,  2 Rn .
  Under these assumptions we have
             Z
                                                               d.y; /
  Qu D lim          e i. .x/y/ " ./p..x/; /u. 1 .y//
         "!0 Rn Rn                                            .2/n
             Z
                                 0                                             d.x 0 ; /
      D lim         e i. .x/ .x // " ./p..x/; /u.x 0 /jdet rx 0 .x 0 /j
         "!0 Rn Rn                                                            .2/n
for all u 2 S.Rn /. On the other hand, since
                    Z 1                           
              0
    .x/  .x / D        rx 0 .x C t .x  x // dt .x  x 0 / D A.x 0 ; x/.x  x 0 /;
                                  0          0
                          0

we obtain by the change of variable  D A.x 0 ; x/T
                      Z
            1                        0
  Qu D            lim         ei.xx / " .A.x 0 ; x/T /q.x;
                                                          Q x 0 ; /u.x 0 / d.x 0 ; /
          .2/n "!0 Rn Rn
                  “
       D lim Os- e iy " .A.x C y; x/T /q.x;     Q x C y; /u.x C y/ dx 0 d̄
           "!0

due to ..x/  .x 0 //   D .x  x 0 /  A.x 0 ; x/T , where
         Q x 0 ; / D p..x/; A.x 0 ; x/T /jdet A.x; x 0 /j1 jdet rx0 .x 0 /j:
         q.x;
Since ¹ " .A.x; x 0 /T / W " 2 .0; 1/º is bounded in A00 .Rn  Rn / with respect to
.x 0 ; / and
                        0    T
                  " .A.x ; x/     / !"!0 1 for all x; x 0 ; 2 Rn ;
                        0    T
       @˛x0 @ˇ   " .A.x ; x/     / !"!0 0 for all x; x 0 ; 2 Rn ; j˛j C jˇj > 0;
we can apply Corollary 3.10 to conclude that
                          “
             Qu.x/ D Os- e iy q.x;Q x C y; /u.x C y/ d.x 0 ; /:

Finally, an application of Theorem 3.32 finishes the proof.
76                         Chapter 3 Basic Calculus of Pseudodifferential Operators on Rn


  Next we define pseudodifferential operators on smooth compact manifolds. To this
end we recall:

Definition 3.49. M is a smooth compact manifold if M is a topological compact
space and the following conditions hold:
                                                                      S
  1. There are finitely many open sets 1 ; : : : ; N M such that M D jND1 j .

  2. For every j 2 ¹1; : : : ; N º there is an open set Uj Rn and a continuous bijec-
     tive function j W j ! Uj with continuous inverse, called chart.

  3. For every j; k 2 ¹1; : : : ; N º such that j;k WD j \ k ¤ ; the mapping

                                  j;k W k .j;k / ! j .j;k /

     can be extended to some C 1 -diffeomorphism Qj;k W Vx ! Vy for some open
     Vx k .j;k /, Vy j .j;k /.

   Let M be a smooth compact manifold. Then a function f W M ! C is called
smooth if for every j D 1; : : : ; N as above fj WD f ıj1 2 C 1 .j .j //. Moreover,
if  M is open
                      C01 ./ D ¹f 2 C 1 .M / W supp f             º:
  Before we define pseudodifferential operators on a compact manifold we need the
definition of certain remainder operators:

Definition 3.50. Let M be a smooth compact manifold as above and let
P W C 1 .M / ! C 1 .M / be a linear operator. Then P has a C 1 -kernel represen-
tation if for every j; k 2 ¹1; : : : ; N º there is some Kj;k 2 C 1 .Uk  Uj / such that for
every u 2 C01 .j /
                                  Z
              .P u/.k1 .x// D         Kj;k .x; x 0 /uj .x 0 / dx 0 for all x 2 Uk ;
                                 Uj

where uj .x/ D u.j1 .x// in Uj .

   For the following let ˆj , j D 1; : : : ; N be a smooth partition of unity subordinate
to j , j D 1; : : : ; N , i.e.,
                                                 X
                                                 N
 0  ˆj 2 C01 .M / with supp ˆj  j ;                  ˆj .x/ D 1 for all x 2 M (3.40)
                                                 j D1

Moreover, let ‰j 2 C01 .M / with supp ‰j  j , j D 1; : : : ; N , be such that
                   ‰j .x/ D 1 for all x 2 supp ˆj ; j D 1; : : : ; N:                (3.41)
Section 3.11 Final Remarks and Exercises                                                    77

                                1
Finally, we define 'j ;    j 2 C0 .Uj / by

                           'j WD ˆj ı j1 ;                  1
                                                    j D ‰j ı j :                        (3.42)

Definition 3.51. Let M be a smooth compact manifold as above and let
P W C 1 .M / ! C 1 .M / be a linear operator. Then P is a pseudodifferential operator
                                   j j D1 with respect to the charts j , j D 1; : : : ; N ,
            m .M / with symbols .p /N
of class S1;0
if the following holds true: Let ˆj ; ‰j 2 C 1 .M /, j D 1; : : : ; N satisfy (3.40) and
(3.41) and let

                X
                N                          X
                                           N
  .P u/.x/ D        .ˆj P ‰j u/.x/ C           .ˆj P .1  ‰j /u/.x/     for all x 2 M: (3.43)
                j D1                       j D1

Then .ˆj P .1  ‰j /u/ has a C 1 -kernel representation and, using 'j ;            j defined in
(3.42), ˆj P ‰j u can be written in the form

           .ˆj P ‰j u/.j1 .x// D 'j pj .x; Dx /. j uj /.x/          for all x 2 Uj ;

where uj .x/ D u.j1 .x//, x 2 Uj , for all u 2 C 1 .M /, j D 1; : : : ; N .


Remark 3.52. If P is a differential operator, supp P .1  ‰j /u  supp.1  ‰j /.
Therefore .ˆj P .1  ‰j /u/.x/ D 0 for all x 2 M . Hence

                                    X
                                    N
                       .P u/.x/ D       .ˆj P ‰j u/.x/     for all x 2 M
                                    j D1

in this case.
  With the aid of Theorem 3.48 and Theorem 3.18 one prove that the definition of a
pseudodifferential operator is independent of the choice of charts. We refer to [21] for
details.


3.11 Final Remarks and Exercises
3.11.1 Further Reading
The main part of this chapter is based on parts of the first two chapters of the mono-
graph by Kumano-Go [21], where a more general class of pseudodifferential operators
                   m , 0  ı    1 is studied. Here p 2 S m if pW Rn  Rn ! C
with symbols in S;ı                                           ;ı
is smooth and satisfies for every ˛; ˇ 2 N0n the estimate

            j@˛ @ˇx p.x; /j  C˛;ˇ .1 C jj/mj˛jCıjˇ j     for all x;  2 Rn
78                         Chapter 3 Basic Calculus of Pseudodifferential Operators on Rn


and for some C˛;ˇ > 0. Alternative elementary introductions to the theory of pseudo-
differential operators were given by Raymond [27] and Wong [44].
   More details of pseudodifferential operators and further applications can be found
e.g. in the monographs by Grubb [11] and Kumano-Go [21].

3.11.2 Exercises
                                  m
     Exercise 3.53. Let pj 2 S1;0j .Rn  Rn /, mj 2 R, j D 1 and let p.x; / WD
                                                            m1 Cm2
     p1 .x; /p2 .x; / for all x;  2 Rn . Prove that p 2 S1;0    .Rn  Rn / and that
                                  .m Cm2 /            .m /      .m /
     for every k 2 N one has jpjk 1           Ck jp1 jk 1 jp2 jk 2 , where Ck depends
     only on k and n.

     Exercise 3.54. Let pW Rn Rn ! C be a smooth function which is homogeneous
     of degree m 2 R in  for jj 1, i.e. p.x; r/ D r m p.x; / for all jj 1 and
          1. Moreover, let @˛ @x p 2 Cb1 .Rn / with respect to x for all ˛; ˇ 2 N0n .
                                ˇ
     r
                     m .Rn  Rn /.
     Prove that p 2 S1;0

     Exercise 3.55. Let 2 S.Rn / with .0/ D 1 and let            " .x/ WD   ."x/, " > 0.
     Prove that ¹ " W 0 < " < 1º is bounded in Cb1 .Rn /.
                                       P
     Exercise 3.56. Let p1 .x; / WD j˛jm1 c˛ .x/ ˛ be the symbol of a differen-
                                 m2
     tial operator and let p2 2 S1;0 .Rn  Rn /. In this special case it is easy to prove
     that the composition of the associated operators is a pseudodifferential operator.
     Moreover, it is an elementary calculation to determine the symbol of the compo-
     sition.
        More precisely, prove that

                 p1 .x; Dx /p2 .x; Dx / D .p1 #p2 /.x; Dx /; where
                                           X 1 ˇ
                         p1 #p2 .x; / D            @ p.x; /Dxˇ q.x; /:
                                                ˇŠ 
                                           jˇ jm1

     In order to prove the statement one may use the identity
                                      !
                                    ˛ ˛ˇ       1
                                           D @ˇ  ˛ :
                                    ˇ          ˇŠ

     Exercise 3.57 (Commutator of Pseudodifferential Operators).
                 m                                                     m1 Cm2 1
     Let pj 2 S1;0j .Rn  Rn /, j D 1; 2. Show that there is some r 2 S1;0
     .R  R / such that
       n     n


                p1 .x; Dx /p2 .x; Dx /  p2 .x; Dx /p1 .x; Dx / D r.x; Dx /:
Section 3.11 Final Remarks and Exercises                                            79


   Exercise 3.58. Prove (3.21).

   Exercise 3.59. Let p 2 S1;0
                            m .Rn  Rn /, m 2 R, be an elliptic symbol and let

   q 2 S1;0
        m" .Rn  Rn / for some " > 0. Prove that p.x; / C q.x; / is an elliptic

   symbol of order m.

   Exercise 3.60. Let p 2 S1;0
                            m .Rn Rn /, m 2 R, be a symbol that is homogeneous

   of degree m for jj 1, i.e.,

                       p.x; r/ D r m p.x; /       for all r; jj   1:

   Show that p is elliptic if and only if p.x; / ¤ 0 for all jj D 1, x 2 Rn and

                                     inf       jp.x; /j > 0:
                                 x2Rn ;jjD1


   Exercise 3.61. A symbol p 2 S1;0
                                m .Rn  Rn / is called polyhomogeneous if p

   admits a symbolic expansion
                             1
                             X
                  p.x; /          pk .x; /
                             kD0
                             X
                             N
                                               mN 1
            W, p.x; /           pk .x; / 2 S1;0    .Rn  Rn /; 8N 2 N;
                            kD0

   where pk 2 S1;0
                 mk .Rn  Rn / are homogeneous of degree m  k for jj             1.
   Moreover, p0 .x; / is called principal symbol of p.x; /.
     1. Show that p.x; /q.x; / is a polyhomogeneous symbol of order m1 C m2
        if p and q are polyhomogeneous symbols of order m1 , m2 , respectively and
        that
                                           1 X
                                           X
                       p.x; /q.x; /                    pj .x; /ql .x; /;
                                           kD0 j ClDk
                            P1                         P1
        where p.x; /     j D0 pj .x; / and q.x; /     lD0 ql .x; / and pj and
        ql are homogeneous of degree m1  j , m2  l, respectively, in jj 1.

     2. Show that p#q.x; / is a polyhomogeneous symbol of order m1 C m2 if p
        and q are polyhomogeneous symbols of order m1 , m2 , respectively, and that
                                   1
                                   X       X         1 ˛
                  .p#q/.x; /                          @ pj .x; /Dx˛ ql .x; /:
                                                     ˛Š 
                                   kD0 j˛jCj ClDk
80                        Chapter 3 Basic Calculus of Pseudodifferential Operators on Rn


     Exercise 3.62 (Symbol of a Pseudodifferential Operator).
               m .Rn  Rn /, m 2 R. Show that for all x;  2 Rn
     Let p 2 S1;0

                          e ix .p.x; Dx /e i: /.x/ D p.x; /:

     Exercise 3.63. We consider P WD y W Cb1 .Rn / ! Cb1 .Rn /, y 2 Rn , where
     .y u/.x/ D u.x C y/. Determine the symbol of y defined by

                                p.x; / WD e ix .P e i: /.x/:
               m .Rn  Rn / hold for some m 2 R?
     Does p 2 S1;0

     Exercise 3.64. Let p 2 S1;0
                             m .Rn  Rn /, m 2 R, and v 2 S.Rn /. Prove that

                                 Z
                      w./ WD             eix p.x; /v.x/dx 2 S.Rn /:
                                     Rn


     Exercise 3.65 (Adjoints and Operators in .x; y/-Form).
                            P
      1. Let p.x; Dx / WD      j˛jm c˛ .x/Dx be a differential operator with c˛ 2
                                             ˛
           1    n
         Cb .R /. Prove by an elementary calculation that

           .p.x; Dx /u; v/L2 .Rn / D .u; q.Dx ; x/v/L2 .Rn /         for all u; v 2 S.Rn /;

         where
                                                 X
                              q.Dx ; x/v D              Dx˛ .c˛ .x/v.x//:
                                                j˛jm


      2. Let p 2 S1;0
                    m .R2n  Rn / be a symbol of an operator in .x; y/-form such

         that p.x; x; / D 0 for all x;  2 Rn . Prove that p.x; Dx ; x/ D pL .x; Dx /;
         where pL 2 S1;0m1 .Rn  Rn /.


     Exercise 3.66. Let ' 2 S.Rn / with '.0/ D 1. Prove that for every f 2 S.Rn /

         lim '."x/f D lim '."Dx /f D lim '."Dx /'."x/f D f                    in S.Rn /:
         "!0            "!0                     "!0

     Hint. Show that '."x/ !"!0 1 in S1;0
                                      1
                                          .Rn  Rn /.

     Exercise 3.67. Calculate

                              eix p1 .x; Dx /p2 .x; Dx /e i:

     without using Theorem 3.16.
Section 3.11 Final Remarks and Exercises                                                     81


   Exercise 3.68. Let X s , s 2 R, be a scale of Banach spaces such that
       (i) S.Rn /  X s  S 0 .Rn / with continuous embeddings, where functions and
           regular distributions are identified in the standard way.

    (ii) hDx im W X sCm ! X s is a bounded linear operator for all s; m 2 R,

   (iii) p.x; Dx /W X s ! X s for all p 2 S1;0
                                           0 .Rn  Rn / and s 2 R.

   Prove that
    (a) X s D ¹u 2 S 0 .Rn / W hDx is u 2 X 0 º and X s  X t if t  s with continuous
        embedding.

    (b) p.x; Dx /W X sCm ! X s for all p 2 S1;0
                                            m .Rn  Rn /, s; m 2 Rn .


    (c) If p 2 S1;0
                m .Rn  Rn / is an elliptic symbol and


                                          p.x; Dx /u D f
                                               S
            with f 2 X s and u 2 X 1 WD          s2R X
                                                          s
                                                              , then u 2 X sCm .

   Remark. A scale of Banach spaces X s , s 2 R, satisfying the conditions (i)–
   (iii) above is also called microlocalizable. As seen above H2s .Rn /, s 2 R, is
   a microlocalizable scale of Banach space. The same is true for Hps .Rn / and the
   so-called Besov spaces Bp;qs .Rn / as will be shown in Section 5.5 and Section 6.6.


                           1 .Rn  Rn /. Prove that for any u 2 C 1 .Rn /
   Exercise 3.69. Let p 2 S1;0                                   b
   Z                                 Z
            p.x; Dx /u.x/'.x/ dx D            u.x/p  .x; Dx /'.x/ dx       for all ' 2 S.Rn /;
       Rn                                Rn

   where p.x; Dx /u.x/ is defined as in (3.30). Hence p.x; Dx /u defined as in
   (3.30) coincides with the definition in the sense of S 0 .Rn /.
   Hint. Use the approximation in the proof of Theorem 3.25.
          Part II


Singular Integral Operators
Chapter 4
Translation Invariant Singular Integral Operators

Summary
In this chapter we give a first introduction to the theory of singular integral operators
on Rn . These operators arise naturally in the regularity study of elliptic and parabolic
equations. We will first study the case of translation invariant singular integral oper-
ators, which can be described by a multiplication operator on the Fourier transform
side. While the continuity on L2 .Rn / easily follows from Plancherel’s theorem, the
proof of continuity on Lp .Rn / for 1 < p < 1, p ¤ 2, is more involved. To this
end we use the so-called Calderón–Zygmund decomposition to show that the opera-
tors are bounded from L1 .Rn / to the weak Lebesgue-space L1weak .Rn / and apply the
Marcinkiewicz interpolation theorem. Based on this result, we will prove the Mikhlin
multiplier theorem, which is a convenient tool for proving Lp -boundedness of Fourier
multiplication operators.


Learning targets
   Get to know basic examples of singular integral operators and the nature of their
    singular kernels.
   Learn the Marcinkiewicz interpolation theorem, the maximal operators and their
    applications to singular integral operators.
   Understand relations between the kernel of a singular integral operator and its
    Fourier multiplier.
   Learn the Mikhlin multiplier theorem.


4.1 Motivation
Let u 2 H 2 .Rn / be a solution of the elliptic partial differential equation
                                          uDf         in Rn                               (4.1)
                                                                          Pn
for some f 2 L .R / \ L .R /, 1  p  1, where
                   2    n       p    n
                                                                    uD             2
                                                                             j D1 @xj u.
Question. Does @xj @xk      u 2 Lp .Rn / hold for every j; k D 1; : : : ; n?
   If 1 < p < 1, the answer is positive. – This will follow from the continuity
of the so-called Riesz operators or alternatively from the Mikhlin multiplier theorem
below.1 The same question arises if in (4.1) the Laplace operator is replaced by a
1 In the case p D 1 and p D 1 the answer is in general negative, cf. Section 4.7.
86                                 Chapter 4 Translation Invariant Singular Integral Operators


general elliptic differential (or pseudodifferential) operator with (sufficiently) smooth
coefficients. But for the following we will only consider the Laplace equation for
simplicity.
   In order to get a representation of @xj @xk u, we apply the Fourier transformation to
(4.1) and obtain:
                   X
                   n
     jj2 u./
          O    D          F Œ@2xj u./ D F Œ u./ D fO./ for almost all  2 Rn
                   j D1

because of Theorem 2.38. Hence
                                            i j i j O
      F Œ@xj @xk u./ D j k u./
                                O    D               f ./ for almost all  2 Rn n ¹0º;
                                              jj2
which yields
                                                                     
                                               1       i j i j O
                               @xj @xk u D F                     f ./ :
                                                        jj jj
Therefore @xj @xk u D mj;k .Dx /f , where

               mj;k .Dx /f D F 1 Œmj;k ./fO./              for all f 2 L2 .Rn /
                    i i
and mj;k ./ D jjj jjj for all  ¤ 0 and j; k D 1; : : : ; n. Operators of this form
are called Fourier multiplication operators. Since mj;k 2 L1 .Rn / for all j; k D
1; : : : ; n, Plancherel’s theorem (Theorem 2.11), Lemma 2.13, respectively, implies
       kmj;k .Dx /f kL2 .Rn /  kmj;k kL1 .Rn / kf kL2 .Rn /           for all f 2 L2 .Rn /;
i.e., mj;k .Dx / 2 L.L2 .Rn // and kmj;k .Dx /kL.L2 .Rn //  kmj;k kL1 .Rn / . Such
kind of Fourier multiplication operators are important examples of (translation invari-
ant) singular integral operators.
   In order to understand the nature of singular integral operators, a description with a
so-called kernel kW Rn n ¹0º ! C such that
                               Z
             mj;k .Dx /f .x/ D      k.x  y/f .y/ dy for all x … supp f
                                    Rn
is important. The existence of such a kernel for mj;k .Dx / will be shown in Sec-
tion 4.6.
   But to see the nature of such kernels, we calculate the second derivatives of a solu-
tion of (4.1), which is defined with the aid of the fundamental solution of the Laplace
equation N defined by
                                    ´
                                      c2 log jxj     if n D 2;
                            N.x/ D           nC2
                                      cn jxj         if n 3;
               1               1
where c2 D 2    , cn D  .n2/!  n
                                    , and !n D 2 n=2 = . n2 / is the surface area of the
unit sphere, cf. (2.14). To this end, we assume that f 2 Lp .Rn /, 1 < p < 1, with
Section 4.2 Main Result in the Translation Invariant Case                              87

supp f compact. Then
                                             Z
                     v.x/ D N  f .x/ D            N.x  y/f .y/ dy
                                              Rn

is well-defined for all x 2 L1 .Rn / and we have for every x … supp f
                                   Z
                    @xj @xk v.x/ D     .@xj @xk N /.x  y/f .y/ dy;
                                     Rn

where
                                                           
                                          ıj k     xj xk
              @xj @xk N.x/ D cn ˛n              n nC2          for all x ¤ 0
                                         jxjn     jxj
and all j; k D 1; : : : ; n, where ˛2 D 1 and ˛n D 2  n if n 3, cf. Exercise 4.39.
Here @xj @xk N is the so-called kernel of the operator f 7! @xj @xk N  f . We note
that @xj @xk N is homogeneous of degree n, i.e.,
              .@xj @xk N /.rx/ D r n @xj @xk N.x/     for all x ¤ 0; r > 0:
In particular, this implies that
Z                                Z          ˇ               ˇ
                                            ˇ
                                           n ˇ               x ˇˇ
        j.@xj @xk N /.x/j dx D         jxj ˇ.@xj @xk N /           dx
 B1 .0/                         B1 .0/                       jxj ˇ
                               Z 1         Z         ˇ             ˇ
                                     1
                                                     ˇ
                                                     ˇ              x ˇˇ
                             D     r dr              ˇ.@xj @xk N / jxj ˇ d.x/ D C1;
                                0            @B1 .0/

where we have used Theorem A.8.
   We note that j@xj @xk N.x/j behaves like jxjn … L1 .B1 .0//. Here x 7! jxjn
is just “at the borderline” of being integrable since jxjs 2 L1 .B1 .0// if and only if
s > n.
   Hence we cannot apply
    kf  gkLp .Rn /  kf kL1 .Rn / kgkLp .Rn /     for allf 2 L1 .Rn /; g 2 Lp .Rn /
to conclude that @xj @xk v 2 Lp .Rn /. Nevertheless we will be able to show that
Tf WD @xj @xk N  f can be extended to a bounded linear operator on Lp .Rn / for
any 1 < p < 1. A suitable condition on the kernel of the operator, which will be the
Hörmander condition below, will be essential.


4.2 Main Result in the Translation Invariant Case
We consider operators of the form
                     Tf .x/ D F 1 ŒKO fO.x/      for all f 2 S.Rn /              (4.2)
that satisfy the following conditions:
88                                  Chapter 4 Translation Invariant Singular Integral Operators


Assumption 4.1.         1. KO 2 L1 .Rn /.
  2. There is some k 2 L1loc .Rn n ¹0º/ such that for every f 2 C01 .Rn /
                        Z
               Tf .x/ D       k.x  y/f .y/ dy for almost all x … supp f                 (4.3)
                              Rn

     and k satisfies the Hörmander condition
                   Z
                            jk.x  y/  k.x/jdx  BK             for all y 2 Rn          (4.4)
                       jxj>2jyj

     for some BK 2 .0; 1/.

Remark 4.2. 1. First of all, by Plancherel’s theorem, Lemma 2.13, respectively,
   and the assumption KO 2 L1 .Rn / the operator T extends to a bounded linear
   operator T 2 L.L2 .Rn //. For the extension, (4.3) holds for any f 2 L2 .Rn /
   with compact support, which can be proved by approximation with C01 .Rn /-
   functions.
  2. T is translation invariant in the sense that T commutes with translations, i.e,
     T h D h T for all h 2 Rn , where .h f /.x/ D f .x C h/ for all x 2 Rn , since
                                      b fO./ D h Tf
              T .h f / D F 1 Œeih K./                        for all f 2 S.Rn /:

     Hörmander’s condition is some kind of weak integrability and smoothness con-
     dition. It is satisfied e.g. if

                                  jrk.z/j  C jzjn1     for all z ¤ 0

     because of the next lemma. An example of a kernel, which satisfies the latter
                             zj
     condition, is k.z/ D jzjnC1  , j D 1; : : : ; n, which is (up to multiplication with
     a constant) the kernel of the so-called Riesz operators if n      2 and the Hilbert
     transform if n D 1. We will discuss examples and sufficient conditions for the
     conditions above in the next sections.

Lemma 4.3. Let kW Rn n ¹0º ! C be a continuously differentiable function that
satisfies

                           jrz k.z/j  C jzjn1        for all z ¤ 0:                   (4.5)

Then k satisfies (4.4).

Proof. First of all,
                                                 Z 1
                       k.x  y/  k.x/ D              y  rk.x  ty/ dt:
                                                  0
Section 4.2 Main Result in the Translation Invariant Case                                             89

Therefore, if jxj > 2jyj, then

                         jk.x  y/  k.x/j  sup jrz k.x  ty/jjyj
                                                   t2Œ0;1

                                                 C jxjn1 jyj                                    (4.6)
                     1
since jx  tyj       2 jxj for all t 2 Œ0; 1. Hence
         Z                                               Z
                        jk.x  y/  k.x/j dx  C                     jxjn1 dxjyj  C 0
             jxj>2jyj                                     jxj>2jyj

uniformly in y ¤ 0.

   Our main result for this class of operators is:

Theorem 4.4. Let T be as in (4.2) satisfying the assumptions above. Then for every
t >0
                                  C1
     j¹x W jTf .x/j > t ºj          kf kL1 .Rn /      for all f 2 L1 .Rn / \ L2 .Rn /:            (4.7)
                                   t
Moreover, T extends to a bounded linear operator T W Lp .Rn / ! Lp .Rn / for all
1 < p < 1.

Remark 4.5. As can be seen in Section 4.7, T will in general not be continuous
on L1 .Rn / under the conditions above. The so-called weak type-.1; 1/ estimate
(4.7) is a weaker substitute. It implies that T extends to a bounded linear operator
T W L1 .Rn / ! L1weak.Rn /, where

                L1weak .Rn / D ¹f W Rn ! C measurable W kf kL1                    < 1º;
                                                                           weak

                 kf kL1         D sup t j¹x W jf .x/j > t ºj ;
                         weak
                                   t>0

cf. Exercise 4.41 for details.2 Because of
                                   Z                                  kf kLp .Rn /
                                                                                  p
                                                        jf .x/jp
            j¹x W jf .x/j > t ºj                            p
                                                                 dx                               (4.8)
                                          ¹xWjf .x/j>tº    t               t

for all t > 0 and any 1  p < 1, we have L1 .Rn /  L1weak .Rn /. The inclusion
is strict since e.g. f .x/ D jxjn … L1 .Rn / but f 2 L1weak .Rn /, which can be
easily checked. The usefulness of the weak L1 -space comes from the Marcinkiewicz
interpolation theorem, presented below.
2 Here k  k      is only a quasi-norm, i.e, it satisfies all conditions of a norm accept for the triangle
            L1
             weak
  inequality, which is replaced by kf C gkL1      C.kf kL1       C kgkL1 / for some C          1, cf.
                                            weak             weak         weak
  Exercise 4.40. But boundedness of operators with respect to quasi-norms is defined in the same way
  as with respect to norms.
90                                    Chapter 4 Translation Invariant Singular Integral Operators


     The structure of the proof is as follows:
 1. First of all, because of the Marcinkiewicz interpolation theorem, cf. Theorem 4.12
    below, the Lp -continuity of T for 1 < p < 2 follows from (4.7) and T 2
    L.L2 .Rn //. Moreover, the Lp -continuity for 2 < p < 1 will be proved with a
    duality argument.

 2. The proof of (4.7) is based on the so-called Calderón–Zygmund decomposition
    of a function f 2 L1 .Rn /, namely f D g C b, where the “good part” g is
    bounded by t and the “bad part” b has zero mean value on a family of non-
    overlapping cubes .Qj /j 2N , N  N.
Finally, let us note the following simply estimate following from the Hörmander con-
dition (4.4), which will be used to estimate the “bad part” b of the Calderón–Zygmund
decomposition on suitable cubes Qj :

Lemma 4.6. Let Rk 2 L1loc .Rn n ¹0º/ satisfy (4.4). Then for every a 2 L1 .Rn / with
supp a  Q and Q a.x/ dx D 0
                          Z
                                      jk  a.x/j dx  BK kakL1 .Rn / ;
                              Rn ne
                                  Q

                 p                                           p
where Qe D Q 2 n denotes the cube with same center as Q and 2 n times the side-
length of Q, cf. Figure 4.1.

Proof. Since k  a commutes with translations, wepcan always reduce to the case that
                                        e D Q 2 n and y 2 Q imply jxj > 2jyj.
the center of Q is the origin. Then x … Q


                                      p
                                 Q2 n


                                                       p
                                                           n`


                                               Q


                                                           `




                                  p
                      e D Q2 n (for n D 2).
Figure 4.1. Choice of Q
Section 4.3 Calderón–Zygmund Decomposition and the Maximal Operator              91

Therefore
        Z                        Z    ˇZ                           ˇ
                                      ˇ                            ˇ
               jk  a.x/j dx         ˇ
                                      ˇ  .k.x  y/  k.x//a.y/ dy ˇˇ dx
         Rn ne
             Q                  Rn ne
                                    Q Q
                               Z Z
                                          jk.x  y/  k.x/jja.y/j dx dy
                                Q jxj>2jyj
                                   Z
                              BK     ja.y/j dy;
                                      Q

which proves the statement.

Remark 4.7 (For readers interested in distribution theory).
We note that an equivalent description of the assumptions above is that

         Tf .x/ D K  f .x/ D hK; f .x  /iS 0 .Rn /;S.Rn / ;   f 2 S.Rn /;

where K D F 1 ŒKO 2 S 0 .Rn / and KjRn n¹0º D k, where k 2 L1 .Rn n¹0º/ satisfies
                                                              loc
(4.4). Here KjRnn¹0º D k means that
                       Z
             hK; 'i D       k.x/'.x/ dx for all ' 2 C01.Rn n ¹0º/:
                         Rn


4.3 Calderón–Zygmund Decomposition and the
    Hardy–Littlewood Maximal Operator
Let us start with some notation: In the following let ƒk D 2k Zk , k 2 N0 , and let
Dk , k 2 Z, denote the set of all “dyadic cubes” with side length 2k meaning the
                            S Q with corners on neighboring points of the lattice
collection of all (closed) cubes
ƒk . Moreover, let D D k2Z Dk . Finally, if Q is an arbitrary cube, then Q˛ ,
˛ > 0, denotes the cube with same center as Q and ˛ times the side-length of Q.
Moreover, we say that two cubes Q; Q 0 are non-overlapping if jQ \ Q0 j D 0.
  The main result of this section and a key step in the proof of (4.7) is:

Theorem 4.8 (Calderón–Zygmund Decomposition).
Let f 2 L1 .Rn / and let t > 0. Then there are disjoint measurable sets F;  such
that Rn D F [  and
 1. jf .x/j  t for almost every x 2 F ,
          S
 2.  D j 2N , where Qj , j 2 N  N, are non-overlapping dyadic cubes and
                                      Z
                                   1
                             t<           jf .y/j dy  2n t:            (4.9)
                                 jQj j Qj
92                             Chapter 4 Translation Invariant Singular Integral Operators


Moreover, if f D g C b, where
                            ´
                                 f .x/                  if x 2 F;
                      g.x/ D       1
                                      R
                                 jQj j    Qj f .y/ dy   if x 2 Qj ;
then
 1. jg.x/j  2n t almost every in Rn ,
                                   R
 2. b.x/ D 0 for every x 2 F and Qj b.x/ dx D 0 for each j 2 N .

Proof of Theorem 4.8 (Part 1). Let C t0 for given t > 0 be the set of all Q 2 D satis-
fying the condition
                                         Z
                                    1
                               t<            jf .x/j dx
                                   jQj Q
and let C t be the subset of all Q 2 C t0 that are maximal with respect to inclusion in
C t0 . Every Q 2 C t0 is contained in some Q0 2 C t since
                           1
                      jQj  kf kL1 .Rn / for all Q 2 C t0 :
                            t
Next, if Q 2 C t \ Dk and Q Q0 2 Dk1 , then by the maximality of Q we have
Q0 … C t0 , i.e.,
                                Z
                              1
                                    jf .x/j dx  t:
                           jQ0 j Q0
Moreover, since jQ0 j D 2n jQj, we get
                Z                      Z
             1                    2n
      t<           jf .x/j dx            jf .x/j dx  2n t       for all Q 2 C t :
           jQj Q                 jQ0 j Q0
Hence C t D ¹Qj W j 2 N º, where Qj ; j 2 N  N0 ; are non-overlapping and (4.9)
is satisfied for all j 2 N .S                             R
                                                        1
   Now let F WD Rn n j 2N Qj . If x 2 F , then jQj          Q f .y/ dy  t for every
Q 2 D such that x 2 Q. Hence it remains to prove that jf .x/j  t for almost every
x 2 F . To this end, we need Lebesgue’s differentiation theorem, which is a corollary
to the weak type .1; 1/ estimate of the so-called Hardy–Littlewood maximal operator,
presented next.
  Before continuing the proof of Theorem 4.8, we define a dyadic version of the
Hardy–Littlewood maximal operator, namely for f 2 L1loc .Rn /
                                       Z
                                   1
            .Md f /.x/ D sup                 jf .y/j dy for all x 2 Rn :
                         x2Q2D   jQ 3j
                                         Q 3


Then Md is a sub-linear mapping from L1 .Rn / to the space of measurable functions.
It even holds the following weak type .1; 1/-estimate.
Section 4.3 Calderón–Zygmund Decomposition and the Maximal Operator                            93

Lemma 4.9. There is a constant C depending only on the dimension such that
                                                       C kf kL1 .Rn /
                             j¹x W Md f .x/ > t ºj 
                                                                 t
for every t > 0 and f 2 L1 .Rn /.

Proof. Let t > 0 and f 2 L1 .Rn / be given. Moreover, let

                                x 2 E t WD ¹y W Md f .y/ > t º:

Then there is some cube Q 2 D such that x 2 Q and
                                 Z
                             1
                                     jf .y/j dy > t:
                            jQ3 j Q3

Let k 2 N0 be such that Q 2 Dk . Since Q3 consists of exactly 3n dyadic cubes with
the same side-length as Q, there is at least one cube Q0 2 Dk with Q0 \ Q ¤ ; such
that
                                Z
                            1                       t
                                     jf .y/j dy > n DW t 0 :
                          jQ0 j Q0                 3

Now we use the family of cubes C t 0 D ¹Qj W j 2 N º, N  N, constructed in the
first part of the proof of Theorem 4.8 with t replaced by t 0 . Then QS
                                                                      0  Q 2 C 0 for
                                                                           j   t
some j 2 N and x 2 Q  Qj . Since x 2 E t was arbitrary, E t  j 2N Qj3 . Thus
                                3

                                                            Z
                  X                 X               3n X                               kf k1
       jE t j           jQj3 j D          n
                                           3 jQj j  0               jf .x/j dx  Cn
                                                     t          Qj                       t
                  j 2N              j 2N             j 2N

since .Qj /j 2N are non overlapping.

Remark 4.10. A usual version of the Hardy–Littlewood maximal operator is defined
as
                            Z
                         1
     .Mf /.x/ WD sup            jf .y/j dy for all x 2 Rn ; f 2 L1loc .Rn /;
                  x2Q jQj Q

where the supremum is taking over all cubes in Rn containing x. But this variant and
the dyadic variant Md are comparable in the sense that there are constants c; C > 0
such that

  c.Md f /.x/  .Mf /.x/  C.Md f /.x/               for all x 2 Rn ; f 2 L1loc .Rn /: (4.10)

Actually, the first inequality with c D 1 is obvious. In order to verify the second
inequality, let Q 0 be a cube containing x. Then there is a dyadic cube Q 2 Dk
94                            Chapter 4 Translation Invariant Singular Integral Operators


containing x with 2.k1/n  jQ0 j  2k n . Hence Q 0    Q3 and jQ3 j D 3n 2k n 
6n jQ0 j. Therefore
                         Z                     Z
                     1                     6n
                             jf .y/j dy           jf .y/j dy;
                    jQ0 j Q0              jQ3 j Q3
which shows the second inequality since Q0 with x 2 Q0 was arbitrary.
   Because of (4.10) and Lemma 4.9, we obtain
                                                 C kf k1
                           j¹x W Mf .x/ > t ºj                                   (4.11)
                                                    t
for every t > 0 and f 2 L 1 .Rn /, where C depends only on the dimension.


Corollary 4.11 (Lebesgue’s Differentiation Theorem).
Let f 2 L1loc .Rn /. Then
                                   Z
                                 1
            f .x/ D      lim          f .y/ dy for almost all x 2 Rn :
                      jQj!0;x2Q jQj Q

Proof. First of all, we can assume without loss of generality that f 2 L1 .Rn /. Oth-
erwise, we replace f by fR WD f jBR .0/ for an arbitrary R > 0 and prove the result
for fR , which implies the statement for f .
   First we show that the limit on the right-hand side exists almost everywhere. To
this end let
                  ˇ                Z                             Z             ˇ
                  ˇ             1                             1                ˇ
                  ˇ
        Rf .x/ D ˇ lim sup            f .y/ dy  lim inf             f .y/ dy ˇˇ :
                  jQj!0;x2Q    jQj Q             jQj!0;x2Q jQj      Q

Obviously, Rf  0 for every continuous f 2            Now let f 2 L1 .Rn /
                                                    L1 .Rn /.
and t > 0. Then for every " > 0 there is some continuous f 0 2 L1 .Rn / with
kf  f 0 k1  ". Then
                    Rf .x/ D R.f  f 0 /.x/  2M.f  f 0 /.x/
and therefore
                                                             kf  f 0 k1      "
     j¹x W Rf .x/ > t ºj  j¹x W 2M.f  f 0 /.x/ > t ºj  C              C :
                                                                  t           t
Since " > 0 was arbitrary, j¹x W Rf .x/ > t ºj D 0 and, since t > 0 was arbitrary too,
Rf .x/ D 0 almost everywhere. Hence
                                             Z
                                         1
                                 lim            f .y/ dy
                             jQj!0;x2Q jQj Q

exists for almost every x 2 Rn . In order to prove the statement of the corollary, we
define
                              ˇ               Z                   ˇ
                              ˇ            1                      ˇ
                  R0 f .x/ D ˇˇ lim              f .y/ dy  f .x/ˇˇ:
                               jQj!0;x2Q jQj Q

By similar arguments as before, we conclude that R0 f .x/ D 0 almost everywhere.
Section 4.4 Proof of the Main Result in the Translation Invariant Case               95


                      S 2). It only remains to prove that jf .x/j  t for almost
Proof of Theorem 4.8 (Part
every x 2 F WD R n j 2N Qj . First of all, if x 2 F , then for every Q 2 D with
                  n

x2Q
                                Z
                             1
                                    jf .x/j dx  t:
                            jQj Q

Hence, choosing a sequence Qk 2 D with x 2 Qk and jQk j !k!1 0, we obtain
jf .x/j  t for every x 2 F by Corollary 4.11. The statements for g; b follow
immediately.


4.4 Proof of the Main Result in the Translation Invariant
    Case
As noted above, we will first prove (4.7). Then we prove the Marcinkiewicz inter-
polation, i.e., Theorem 4.12 below, which implies the statement of Theorem 4.4 for
1 < p  2. The case p > 2 is then proved by duality.

Proof of (4.7). In order to prove the weak type .1; 1/ estimate (4.7), let f 2 L1 .Rn /\
L2 .Rn / and let f .x/ D g.x/ C b.x/ be the Calderón–Zygmund decomposition of f
due to Theorem 4.8 for given t > 0. Then

          ¹x W jTf .x/j > t º  ¹x W jT g.x/j > t =2º [ ¹x W jT b.x/j > t =2º

and therefore

       j¹x W jTf .x/j > t ºj  j¹x W jT g.x/j > t =2ºj C j¹x W jT b.x/j > t =2ºj :

It is sufficient to estimate each term on the right-hand side separately. Moreover, we
will use that
               X            XZ                    Z
    t jj D t      jQj j            jf .x/j dx D    jf .x/j dx  kf kL1 .Rn / : (4.12)
             j 2N         j 2N    Qj


In order to estimate T g, we use that jg.x/j  2n t for almost every x 2 Rn , f .x/ D
g.x/ for x 2 F , (4.12), (4.8), and that T 2 L.L2 .Rn //, which yields
                                     Z                            Z
                                   4                      4 O 2
       j¹x W jT g.x/j > t =2ºj  2 jT g.x/j dx  2 kKk1 jg.x/j2 dx
                                               2
                                  t                      t
                                              Z                         
                                      O
                                C kKk1 t2 2                       2
                                                    t jf .x/j dx C t jj
                                                      F
                                  C t 1 kf kL1 .Rn / :
96                                 Chapter 4 Translation Invariant Singular Integral Operators


In order to estimate T b, we apply Lemma 4.6 to bj .x/ WD b.x/ Qj .x/, where
                            Z
                 T bj .x/ D      k.x  y/bj .y/ dy for all x … Qj ;
                                  Qj
                                                                  p
by the assumption on the kernel k. Thus, if Q  ej D Q2 n ,
                                                         j
            Z                                                   Z
                     jT bj .x/j dx  BK kbj kL1 .Rn /  2BK          jf .x/j dx:
              Rn ne
                  Qj                                              Qj
                                           P                          P
On the other hand, since b 2 L2 .Rn /, j 2N bj and therefore j 2N T bj converge
in L2 .Rn / to b and T b, respectively, (if N is infinite). The same holds true for almost
everywhere convergence for a suitable subsequence. Hence
                                  X
                     jT b.x/j       jT bj .x/j almost everywhere
                                   j 2N

and
              Z                               XZ
                          jT b.x/j dx  2BK                jf .x/j dx  2Bk kf k1 ;
                  Rn ne                       j 2N   Qj

              S
      eD
where                    e
                  j 2N Qj . Finally,
                                                     Z
                                       e C2
            j¹x W jT b.x/j > t =2ºj  jj                       jT b.x/j dx 
                                                                                C
                                                                                  kf k1 ;
                                          t          Rn ne                      t
where we have used that
             X              X              Z
        Q        ej j  3n           3n X                   3n
       jj       jQ           jQj j            jf .x/j dx     kf k1
                                       t     Qj               t
                  j 2N             j 2N                  j 2N

This finishes the proof of (4.7).

     In order to finish the proof of Theorem 4.7, we need:

Theorem 4.12 (Marcinkiewicz Interpolation Theorem).
Suppose that 1 < r  1. Let T be a sub-additive mapping from L1 .Rn / C Lr .Rn /
to the vector space of measurable functions on Rn , which is of weak type .1; 1/ and
.r; r/, i.e,
                                                                          q
                                                                      kf kLq .Rn /
                     .t I Tf / WD j¹x W jTf .x/j > t ºj  Cq                               (4.13)
                                                                          tq
for q D 1 and q D r if r < 1 and kTf kL1 .Rn /  C1 kf kL1 .Rn / if r D 1. Then
                    kTf kLp .Rn /  Cp kf kLp .Rn /         for all f 2 Lp .Rn /
and all 1 < p < r, where Cp depends only on C1 ; Cr , p, and r.
Section 4.4 Proof of the Main Result in the Translation Invariant Case                        97

Remark 4.13. Note that, because of (4.8)
                                                             q
                                                          kgkL q .Rn /
                      .t I g/ D j¹x W jg.x/j > t ºj                    :                 (4.14)
                                                               tq
Hence, if T 2 L.Lq .Rn //, the (4.13) holds. Hence (4.13) is a weaker condition than
T 2 L.Lq .Rn //.
 For the following proof we will use that for any measurable gW Rn ! K and 1 
p<1
                    Z                    Z 1
                              p
                        jg.x/j dx D p         t p1 .t I g/ dt:         (4.15)
                         Rn                      0

A proof can be found in [29, Theorem 8.16]. We note that this identity can be easily
verified if g is a simple function. The statement for a general g can be reduced to the
latter case by approximating jgj monotonically by simple functions from below.

Proof of Theorem 4.12. First we consider the case r < 1. Let f 2 Lp .Rn / and
consider the distribution function .t I Tf /, t > 0, defined as above. For given t > 0
we define f D f1 C f2 by
                                    ´
                                       f .x/ if jf .x/j > t;
                           f1 .x/ D
                                       0        else:

Then f1 2 L1 .Rn / and f2 2 Lr .Rn / since
        Z                 Z
                                                                   p
            jf1 .x/j dx D     jf1 .x/jp jf1 .x/j1p dx  t 1p kf kLp .Rn /
            Rn                  Rn

and similarly
        Z                  Z
                                     jf2 .x/jr p jf2 .x/jp dx  t r p kf kLp .Rn / :
                     r                                                       p
             jf2 .x/j dx D
          Rn                    Rn

Now, since jTf .x/j  jTf1 .x/j C jTf2 .x/j, we have

         ¹x W jTf .x/j > t º  ¹x W jTf1 .x/j > t =2º [ ¹x W jTf2 .x/j > t =2º :

Therefore

       .t I Tf /  .t =2I Tf1 / C .t =2I Tf2 /
                         Z                              Z
                    C1                             Cr
                              jf1 .x/j dx C                 jf2 .x/jr dx
                    t =2 Rn                     .t =2/r Rn
                          Z                                   Z
                    2C1                                2r Cr
                  D                     jf .x/j dx C r                      jf .x/jr dx;
                       t    ¹jf .x/j>tº                  t      ¹jf .x/jtº
98                                         Chapter 4 Translation Invariant Singular Integral Operators


where we have used the weak type .1; 1/ and .r; r/ estimate and (4.13). Now we
combine this estimate with (4.15). To this end we calculate
     Z 1                   Z                                     Z        Z jf .x/j
                  p1 1
              t      t                     jf .x/j dx       dt D    jf .x/j           t p2 dt dx
         0                      ¹jf j>tº                         Rn           0
                                                                      Z
                                                                  1
                                                              D             jf .x/jjf .x/jp1 dx
                                                                p  1 Rn

since p > 1 and similarly
     Z 1                  Z                                      Z         Z 1
             t p1 t r                   jf .x/jr dx       dt D    jf .x/jr          t p1r dt dx
     0                         ¹jf jtº                          Rn           jf .x/j
                                                                      Z
                                                                  1
                                                              D            jf .x/jr jf .x/jpr dx
                                                                r  p Rn

since p < r. Altogether

                     kTf kLp .Rn /  Cp kf kLp .Rn /               for all f 2 Lp .Rn /:

Finally, if r D 1, we assume for simplicity that C1 D 1. – Otherwise replace T by
  1 T . – Then we use the same splitting of f as before, but cut at height t =2 instead
C1
of t . Hence jTf2 .x/j  2t since kT kL.L1 .Rn //  1. Therefore

                               ¹x W jTf .x/j > t º  ¹x W jTf1 .x/j > t =2º

and .t; Tf /  .t =2; Tf1 /. The rest of the proof is done as before having only the
first term, cf. Exercise 4.45.

Remark 4.14. Let 1 < p < r be the constants in the proof above. Note that Cp ! 1
if p ! 1 or p ! r < 1, which is natural since T is not necessarily bounded on
L1 .Rn / and Lr .Rn / if r < 1.

Proof of Theorem 4.4. Because of (4.7), T 2 L.L2 .Rn //, and (4.14), the Marcinkie-
wicz interpolation theorem for r D 2 implies that T 2 L.Lp .Rn // for every 1 <
p < 2. Finally, for the case p > 2 we use that
         Z                                 Z                              Z
                  Tf .x/g.x/ dx D                   O fO./g./
                                                    K./   O d̄ D              fO./K./
                                                                                     O g./
                                                                                          O d̄
             Rn                                Rn                          Rn
                                           Z
                                      D                  e g.x/ dx
                                                    f .x/T
                                               Rn
Section 4.4 Proof of the Main Result in the Translation Invariant Case                 99


for all f; g 2 S.Rn /, where T             O fO./ for all f 2 S.Rn /. Moreover,
                             ef D F 1 ŒK./
                  1 .Rn / with supp f \ supp g D ; we have
for every f; g 2 C0
              Z                    Z Z
                  Tf .x/g.x/ dx D           k.x  y/f .y/ dy g.x/ dx
               Rn                    Rn Rn
                                   Z         Z
                                 D      f .y/     k.x  y/g.x/ dx dy
                                      n        Rn
                                   ZR
                                 D           eg.x/ dx:
                                        f .x/T
                                         Rn

Hence for every g 2 C01 .Rn /
                     Z
           eg.x/ D
           T             k.y  x/f .y/ dy            for almost all x … supp g;
                         Rn

                  Q
where the kernel k.z/ D k.z/, z ¤ 0, satisfies the Hörmander condition again.
          e 2 L.Lq .Rn // for all 1 < q  2. This implies T 2 L.Lq .Rn // for all
Therefore T
2  q < 1 because of
                                       ˇZ                 ˇ
                                       ˇ                  ˇ
     kTf kLq .Rn / D       sup         ˇ   Tf .x/g.x/ dx ˇˇ
                              0
                                       ˇ
                        g2Lq .Rn /;kgkq0 D1     Rn
                                              ˇZ                  ˇ
                                              ˇ                   ˇ
                    D             sup         ˇ   f .x/Te g.x/ dx ˇ  C kf kLq .Rn /
                              0
                                              ˇ n                 ˇ
                        g2Lq .Rn /;kgkq0 D1     R


for all f 2 Lp .Rn / due to (A.4).

   Finally, since kMf k1  kf k1 , (4.11) and Theorem 4.12 yield as a by-product
the following important theorem on Lp -continuity of the maximal operator:

Theorem 4.15. Let 1 < p  1. Then there is some constant Cp > 0 such that

                kMf kLp .Rn /  Cp kf kLp .Rn /        for all f 2 Lp .Rn /:

The same holds true for Md instead of M .

Remark 4.16. Let T be as in Assumption 4.1. Going through the proof of Theo-
rem 4.4 one can easily verify that for every 1 < p < 1 and every R > 0 there is
some constant Cp .R/ such that

                                  kT kL.Lp .Rn //  Cp .R/

                                                              O L1 .Rn /  R.
for every T satisfying (4.4) with some BK  R and satisfying kKk
100                                 Chapter 4 Translation Invariant Singular Integral Operators


4.5 Examples of Singular Integral Operators
An important class of examples of (translation invariant) singular integral operators
arises by convolution with principle value distributions, which are defined as follows:
   Let k 2 L1loc.Rn n ¹0º/ be such that
                      Z
                                 jk.x/j dx  C1 for all r > 0                    (4.16)
                             r <jxj2r

and
                      ´ R
                       j r <jxj<R k.x/ dxj  C2             for all 0 < r < R;
                                 R                                                              (4.17)
                       limr !0C r <jxj<1 k.x/ dx            exists;

where C1 ; C2 > 0 are some fixed constants. Then we define K D p:v: k 2 S 0 .Rn / as
                                 Z                    Z
  hK; 'iS 0 .Rn /;S.Rn / WD p:v:   k.x/'.x/ dx WD lim        k.x/'.x/ dx (4.18)
                                         Rn                     "!0 jxj>"


for all ' 2 S.Rn /.

Example 4.17. Let j D 1; : : : ; n. Then the Riesz operators Rj are defined by
                           Z
                                     yj
       Rj f .x/ WD p:v: cn                f .x  y/ dy for all f 2 S.Rn /;
                              R n jyj nC1

                      nC1
where cn D   2            . nC1
                               2 /. Here

                                                         xj
                                          k.x/ D cn
                                                       jxjnC1

satisfies (4.17) because of:
        Z                     Z                                    Z
                  k.x/ dx D                       k.x/ dx D                    k.x/ dx D 0
          r <jxj<R                      r <jxj<R                       r <jxj<R

since k.x/ D k.x/. Moreover, k satisfies (4.16) because of
      Z                             Z                              Z 2r
                      jk.x/j dx                   jxjn dx D !n          s 1 ds
          r <jxj2r                 r <jxj<2r                         r
                                                           D !n .ln 2r  ln r/ D !n ln 2

for any r > 0 due to Theorem A.8, where !n denotes the surface measure of @B1 .0/
in Rn .
Section 4.5 Examples of Singular Integral Operators                                           101

Lemma 4.18. Let k 2 L1loc .Rn n ¹0º/ and K be as above. Then the limit in (4.18)
exists and K 2 S 0 .Rn /.

Proof. Let
                            Z                             Z
                l WD p:v:           k.x/ dx WD lim                    k.x/ dx;
                            jxj<1                  r !0C r <jxj<1

which exists due to (4.17). Then
 Z                            Z                   Z
         k.x/'.x/ dx D '.0/             k.x/ dx C           k.x/.'.x/  '.0// dx
   jxj>"                        "<jxj<1             "<jxj<1
                            Z
                         C        k.x/'.x/ dx;
                                 jxj>1

where the last integrals exist because of
    Z                                       Z
                                                      jk.x/j
            jk.x/'.x/j dx  sup jxjj'.x/j                      dx
      jxj>1                        x2Rn           jxj>1 jxj
                                                   1      Z
                                                X    k
                                 sup jxjjj'.x/j      2                           jk.x/j dx
                                   x2Rn                            2k jxj<2kC1
                                                        kD0
                                                   
                                 2C1 sup jxjjj'.x/j :
                                         x2Rn

Moreover,
  Z                               1 Z
                                  X
         jk.x/.'.x/  '.0//j dx                                    jk.x/jj'.x/  '.0/j dx
     jxj<1                                        2k1 jxj<2k
                                           kD0
                                                        1 Z
                                                        X
                                          kr'k1                               jk.x/jjxj dx
                                                              2k1 jxj<2k
                                                        kD0
                                                          X1
                                          C1 kr'k1            2k D 2C1 kr'k1
                                                         kD0

since j'.x/  '.0/j  kr'k1 jxj. Hence we can use Lebesgue’s theorem on domi-
nated convergence to conclude
               Z                             Z
          p:v:         k.x/'.x/ dx D l'.0/ C        k.x/.'.x/  '.0// dx
                 jxj>"                        jxj<1
                                       Z
                                    C        k.x/'.x/ dx;
                                                jxj>1

  All these principal value distributions give rise to singular integral operators pro-
vided that Hörmander’s condition is satisfied:
102                           Chapter 4 Translation Invariant Singular Integral Operators


Theorem 4.19. Assume that k 2 L1loc .Rn n ¹0º/ satisfies (4.16), (4.17), and (4.4).
Then K defined by (4.18) satisfies Assumption 4.1. Hence
                           Z
            Tf .x/ WD p:v:       k.y/f .x  y/ dy for all f 2 S.Rn /        (4.19)
                              Rn

extends to a bounded linear operator T W Lp .Rn / ! Lp .Rn / for every 1 < p < 1.

Proof. It only remains to show that KO 2 L1 .Rn /. To this end we consider the
truncated kernels
                                ´
                        R        k.x/    if " < jxj < R;
                       k" .x/ D                                         (4.20)
                                 0       else:

Then

                 Tf D lim lim k"R  f D lim lim F 1 Œkc
                                                       R O
                                                       " f
                        "!0 R!1               "!0 R!1


for all f 2 S.Rn /. Hence, if we show that .kc
                                             R                           1  n
                                             " /0<"1;R1 is bounded in L .R /,
then

                                  b fO for all f 2 S.Rn /
                       Tf D F 1 ŒK                                               (4.21)

for some K b 2 L1 .Rn / because of the following argument:
   By the weak--compactness of bounded closed sets in L1 .Rn /, for every " > 0
there is a sequence Rk;" !k!1 1 such that

                          b R           b"
                          k " k;" *k!1 K      in L1 .Rn /;

where .Kb " /0<"1 is again bounded in L1 .Rn /. Hence there is a sequence "j !j !1
0 such that

                           b "j *    b       in L1 .Rn /:
                           K     j !1 K

But this implies
   Z                             Z
                                       Rk;"
        Tf .x/g.x/ dx D lim lim      b
                                     k "j j ./fO./g./
                                                    O d̄
     Rn                j !1 k!1 Rn
                            Z                         Z
                      D lim     b " ./fO./g./
                                K      j
                                            O d̄ D       b fO./g./
                                                          K./   O d̄
                          j !1 Rn                              Rn


for all f; g 2 S.Rn / since fO./g./
                                 O    2 L1 .Rn /. This implies (4.21).
Section 4.5 Examples of Singular Integral Operators                                          103


   Hence it remains to prove that .kcR                             1     n
                                     " /0<"1;R1 is bounded in L .R /: First of all,
                                                                       r
because of the Hörmander’s condition, we have for every 0 < jyj  2 , 0 < r < R
Z                                  Z                           Z
       R            R
     jkr .x  y/  kr .x/j dx  2                 jk.x/j dx C 2              jk.x/j dx
  Rn                                r <jxj<r Cjyj                Rjyj<jxj<R
                                    Z
                                 C             jk.x  y/  k.x/j dx
                                           r <jxj<R
                                     4C1 C BK :                                           (4.22)

First let  2 Rn be such that "  2
                                  jj
                                       R. Then we decompose

                       kc
                        R       br       cR                  n
                        " ./ D k" ./ C kr ./ for all  2 R ;

                                                                        iy D
where r D 2                                                      r
          jj . Moreover, we set y D  jj2 , which implies jyj D 2 and e
1. Then

            jkc
              R        1 cR          iy      1
              r ./j D jkr ./.1  e       /j D jF ŒkrR  krR .  y/./j
                       2Z                       2
                       1                                         1
                           jkrR .x/  krR .x  y/j dx  2C1 C BK                          (4.23)
                       2 Rn                                      2
due to (4.22) since 0 < jyj  2r . On the other hand (4.16) implies
        Z                           1 Z
                                    X
                 jk.x/jjxj dx D                                 jk.x/jjxj dx
         jxj<r                             2k1 r <jxj2k r
                                    kD0
                                    X1            Z
                                         2k r                        jk.x/j dx  2C1 r
                                                  2k1 r <jxj2k r
                                    kD0

for all r > 0. Thus
                       ˇZ                              ˇ ˇZ                   ˇ
                       ˇ                               ˇ ˇ                    ˇ
             er        ˇ
            jk" ./j  ˇ          k.x/.e ix         ˇ   ˇ
                                                1/ dx ˇ C ˇ         k.x/ dx ˇˇ
                          "<jxj<r                            "<jxj<r
                       Z
                              jk.x/jjxjjj dx C C2  4 C1 C C2                           (4.24)
                        jxj<r

since rjj  2. Hence

             jkc
               R                         1                                   2
               " ./j  .2 C 4/C1 C C2 C BK                   for all "         R:
                                         2                                   jj

If  2 Rn such that R < 2  jj
                                , then one can estimate kc
                                                         R
                                                         " ./ directly using (4.24) with
R instead of r. Finally, if  2 Rn such that 0 < 2 < ", then kc
                                                         jj
                                                                   R
                                                                     ./ can be estimated
                                                                             "
by using (4.23) with r replaced by ".
104                                Chapter 4 Translation Invariant Singular Integral Operators


  An important special case for singular integral operators of the form above is when
k 2 L1loc .Rn n ¹0º/ is homogeneous of degree n. Then
                                      
                           .x/          x
                  k.x/ D         D          jxjn for all x ¤ 0;
                           jxj n        jxj

where .x/ is homogeneous of degree 0, satisfies .x/ D k.x/ for all jxj D 1 and
is integrable on @B1 .0/. Moreover, k satisfies (4.16)–(4.17) if and only if
                              Z
                                      k.x/ d.x/ D 0;
                                    @B1 .0/

where  denotes the surface measure on @B1 .0/, and the corresponding convolution
operator T as in (4.19) is invariant with respect to dilations, i.e.,

                   T .ır f / D ır .Tf / for all f 2 S.Rn /; r > 0;

where .ır f /.x/ D f .rx/ for all x 2 Rn , r > 0, cf. Exercise 4.42.
  In order to formulate a sufficient condition that k satisfies the Hörmander condition,
we introduce the L1 -modulus of continuity for :
                            Z
    !1 .; t / D   sup               j.x C h/  .x/j d.x/ for all 0 < t < 1:
                h2Rn ;jhjt   @B1 .0/

Theorem 4.20.R  Let W Rn n ¹0º ! C be homogeneous of degree 0 such that  2
L1 .@B1 .0//, @B1 .0/ .x/ d.x/ D 0, and
                                    Z 1
                                                          dt
                                          !1 .; t /         < 1:                           (4.25)
                                     0                    t
Then
                              Z
                                     .y/
             Tf .x/ D p:v:                 f .x  y/ dy           for all f 2 S.Rn /
                                  Rn jyj
                                         n


satisfies the Assumption 4.1 and extends to a bounded linear operator T W Lp .Rn / !
Lp .Rn / for all 1 < p < 1. Moreover, if .x/ D .x/ for all x ¤ 0, then
                      c ./ D m./fO./ for all f 2 S.Rn /;
                      Tf

where
                                         Z
                             i
                    m./ D                            .x/ sign.x  / d.x/:              (4.26)
                             2               @B1 .0/
                                                                    P
If n D 1, (4.26) has to be understood as m./ D  2i                   ˙ .˙1/ sign.˙1  /.
Section 4.5 Examples of Singular Integral Operators                                       105

Remark 4.21. We note that m in (4.26) is homogeneous of degree 0, cf. Exercise 4.43.
   Moreover, if  2 C ˛ .@B1 .0// for some 0 < ˛ < 1, i.e., j.x/  .y/j 
C jx  yj˛ for all x; y 2 @B1 .0/ and some C > 0, then
                      !1 .; t /  C area.@B1 .0//t ˛     for all t > 0
and therefore
                   Z 1                      Z 1
                                  dt                             C0
                       !1 .; t /     C0         t 1C˛ dt D       < 1:
                     0             t          0                  ˛
In particular, if  2 C 1 .@B1 .0//, then (4.25) is satisfied.
Proof of Theorem 4.20. For the first part it is sufficient to show that k.x/ D .x/jxjn
satisfies the Hörmander condition (4.4). To this end we use (4.25) and (4.6) for jxjn
instead of k.x/ to conclude that for every y ¤ 0:
 Z
             jk.x  y/  k.x/j dx
   jxj>2jyj
     Z                                         Z
                  j.x  y/  .x/j
                                      dx C                j.x/.jx  yjn  jxjn /j dx
       jxj>2jyj         jx    yj n
                                                jxj>2jyj
     Z 1Z                                                           Z
                             0             0         0 dt
                     j.tx  y/  .tx /j d.x / C C jyj                     j.x/jjxjn1 dx
       2jyj jx 0 jD1                                     t           jxj>2jyj
     Z 1                                             Z 1
                   jyj dt
           !1                 C C kkL1 .@B1 .0// jyj       r 2 dr
       2jyj         t      t                            2jyj
     Z 1
                   ds
 D        !1 .s/       C C kkL1 .@B1 .0// :
       0            s
Finally, we have to prove that m./ D F ŒK in S 0 .Rn /, where K is the principal
value distribution with kernel k.x/ D .x/jxjn and m is as in (4.26). To this end
let k"R .x/ be the truncated kernel as in (4.20). Since k.x/ D .x/jxjn is odd,
                               Z
                   kc
                             1
                     R
                     " ./ D        k R .x/.e ix  e ix / dx
                             2 Rn "
                                Z
                                           .x/
                           D i                    sin.ix  / dx
                                  "<jxj<R jxj
                                               n
                                Z              Z R
                                                                 dt
                           D i           .x/       sin.tx  / d.x/
                                  @B1 .0/        "                t
due to Theorem A.8, where the absolute value of the inner integral is bounded by 
and
               Z R                  Z 1
                               dt                    dt
      lim lim      sin.tx  /    D      sin.tx  /
      "!0 R!1 "                t     0               t
                                                Z 1
                                                           dt  
                                  D sign.x  /      sin t    D sign.x  /:
                                                 0         t    2
106                            Chapter 4 Translation Invariant Singular Integral Operators

      R1                         RR
Here 0 sin.at / dtt D limR!1 0 sin.at / dtt is understood as an improper Riemann
integral and
             Z 1                          Z 1
                             dt                     dt
                    sin.at /    D sign.a/     sin t    for all a ¤ 0:
              0               t            0        t
Moreover, we have used that
                                   Z 1
                                                     dt  
                                             sin t      D :
                                       0              t  2
cf. e.g. [22, Chapter 13,§3, Exercise 2].

Example 4.22. 1. If n D 1, there is only one singular integral operator, which sat-
isfies the assumptions of Theorem 4.20 including .x/ D .x/, up to a constant
multiple. This corresponds to .t / D 1 sign t , k.t / D 1t , respectively, namely
                                   Z
                               1                       dy
               Hf .x/ D p:v:               f .x  y/        for all f 2 S.Rn /:
                                      R                y

This operator is called Hilbert transform. Because of (4.26),

                   b
                   Hf ./ D i sign./fO./ for all f 2 S.Rn /:

2. If n   2, one obtains a family of operators similar to the Hilbert transform by
choosing h .x/ D cn x  h, where jhj D 1 and cn is chosen such that
               Z                        Z
                                                                2
                        jy  hj d.y/ D          jx1 j d.x/ D     :
                @B1 .0/                  @B1 .0/               cn
                     nC1
This gives cn D   2 . nC1      2 /, cf. e.g. [31, Chapter 3, §3, Theorem 5]. Choosing
h D ej , j D 1; : : : ; n gives the Riesz operators
                                 Z
                                        yj
          Rj f .x/ D p:v: cn                  f .x  y/ dy for all f 2 S.Rn /:
                                   Rn jyj
                                          nC1


They can be expressed via Fourier transformation as

                      b
                     Rj f ./ D i
                                           j O
                                           jj
                                               f ./ for all f 2 S.Rn /

because of Theorem 4.20 and the identity
                             Z
                                                                h
              mh ./ WD cn             x  h sign.x  / d.x/ D                   (4.27)
                         2     @B1 .0/                           jj
Section 4.6 Mikhlin Multiplier Theorem                                              107

for all ; h 2 Rn ;  ¤ 0. One can prove the last identity as follows: Since  7! mh ./
is homogeneous of degree 0, it is sufficient to consider the case jj D 1. For any
jj D 1 fixed, let l.h/ WD mh ./ for all h 2 C n . Then lW C n ! C is linear. Therefore
there is some z 2 C n such that l.h/ D z  h for all h 2 C n . Moreover, jl.h/j  1 and
                                      Z
                                 
                         l./ D cn              jx  j d.x/ D 1
                                 2      @B1 .0/

by the choice of cn . Hence z D , which implies (4.27).


4.6 Mikhlin Multiplier Theorem
Theorem 4.23 (Mikhlin Multiplier Theorem).
Let mW Rn n ¹0º ! C be an .n C 2/-times continuously differentiable function such
that
                                 j@˛ m./j  Ajjj˛j                           (4.28)
for all  ¤ 0 and j˛j  n C 2. Then for every 1 < p < 1 the operator m.Dx /
defined by
                 m.Dx /f D F 1 Œm./fO./       for all f 2 S.Rn /
extends to a bounded linear operator
                            m.Dx /W Lp .Rn / ! Lp .Rn /:                         (4.29)

Remark 4.24. 1. We note that the conclusion (4.29) holds even under the weaker
   assumption that (4.28) holds for all j˛j  Œ n2  C 1, cf. e.g. [3, Theorem 6.1.6].
 2. We note that every .n C 2/-times continuously differentiable function mW Rn n
    ¹0º ! C that is homogeneous of degree 0, i.e., m./ D m./ for all  >
    0;  ¤ 0, automatically satisfies (4.28), cf. Exercise 4.46.
  In order to prove Theorem 4.23, we will use the so-called dyadic partition of unity,
which is nowadays a standard tool in the theory of function spaces and is frequently
used to analyze mapping properties of certain operators. Usually a dyadic partition of
unity on Rn n ¹0º is a partition of unity 'j ./, j 2 Z on Rn n ¹0º such that
             supp 'j ./  ¹ 2 Rn W c2j  jj  C 2j º     for all j 2 Z:
Here c; C > 0 are some suitable fixed numbers often chosen to be c D 12 ; C D 2,
which we will do in the following. Such a partition can be easily constructed by
choosing some non-negative     2 C01 .Rn / such that ./ > 0 if and only if 12 <
jj < 2. Then defining j ./ WD .2j /, j 2 Z, we have
                               X
                      ˆ./ WD       j ./ > 0 for all  ¤ 0;
                                j 2Z
108                              Chapter 4 Translation Invariant Singular Integral Operators


where we note that for each  ¤ 0 the sum above contains at most two non-vanishing
terms. Hence

                                  'j ./ WD ˆ./1 j ./

defines a partition of unity with the desired properties. Moreover, in this case 'j ./ D
'0 .2j / since ˆ.2j / D ˆ./, which implies that

                         j@˛ 'j ./j  C k@˛ '0 kL1 .Rn / 2j˛jj                   (4.30)

for all ˛ 2 N0n and j 2 Z.
   Now the idea of the proof of Theorem 4.23 is to decompose
                                  X
                         m./ D      mj ./ for all  ¤ 0;
                                       j 2Z

where mj ./ D 'j ./m./. Then
                                          !
                               X        ˛
                                           j@ 'j ./jj@ m./j  C 2j j˛j
                                             ˛ˇ        ˇ
             j@˛ mj ./j                                                           (4.31)
                                        ˇ
                              0ˇ ˛

because of (4.28), (4.30), and since 2j 1  jj  2j C1 on supp 'j .
  For each part mj ./, we have
                                                    Z
         mj .Dx /f .x/ D F 1 Œmj ./fO./.x/ D        kj .x  y/f .y/ dy;
                                                         Rn

where

                              kj .x/ WD F71          1   n
                                           !x Œmj  2 Cb .R /

since mj ./ has compact support, cf. Remark 2.2. Hence formally
                                    XZ
                    m.Dx /f .x/ D           kj .x  y/f .y/ dy;
                                               n
                                         j 2Z R

where it remains to show that the sum on the right-hand side converges for x …
supp f , that
                                  X
                         k.z/ WD     kj .z/ for z ¤ 0
                                         j 2Z

converges to a function satisfying

                   j@˛z k.z/j  C jzjnj˛j     for all z ¤ 0; j˛j  1;
Section 4.6 Mikhlin Multiplier Theorem                                                109

and that for every f 2 S.Rn /
                        Z
          m.Dx /f .x/ D      k.x  y/f .y/ dy          for almost all x … supp f:
                             Rn

To this end, we need some suitable uniform estimates of kj .z/. These are a conse-
quence of the following lemma:

Lemma 4.25. Let N 2 N0 and let gW Rn ! C be an N -times continuously differen-
tiable function with compact support. Then

                 jF 1 Œg.x/j  CN jsupp gjjxjN sup k@ gkL1 .Rn /
                                                        ˇ
                                                                                    (4.32)
                                                       jˇ jDN


for all x ¤ 0, where CN is independent of g.

Proof. Let ˇ 2 N0n with jˇj D N . Then

                  .ix/ˇ F 1 Œg.x/ D F 1 Œ@ g.x/ for all x 2 Rn
                                                ˇ


and therefore

         jx ˇ jjF 1 Œg.x/j  k@ˇ gkL1 .Rn /  jsupp gj sup k@ˇ gkL1 .Rn / :
                                                             jˇ jDN


Since ˇ 2 N0n with jˇj D N was arbitrary,

                   jxjN jF 1 Œg.x/j  jsupp gj sup k@ gkL1 .Rn /
                                                                ˇ
                                                    jˇ jDN


for all x 2 Rn , which completes the proof.

Corollary 4.26. Let m be as in the assumptions of Theorem 4.23 and let mj ./ D
m./'j ./, j 2 Z, where 'j ; j 2 Z, is the dyadic partition of unity of Rn n ¹0º as
above. Then kj .x/ WD F71 Œm  satisfies
                         !x j


                j@˛z kj .z/j  C˛ 2j.nCj˛jM / jzjM    for all z ¤ 0; j 2 Z        (4.33)

and all M D 0; : : : ; n C 2, ˛ 2 N0n , where C˛ is independent of j; z.

Proof. First of all,

         @˛z kj .z/ D F 1 .i /˛ mj ./ .z/    for all z 2 Rn ; ˛ 2 N0n ; j 2 Z;
110                                     Chapter 4 Translation Invariant Singular Integral Operators


where
                                                  !
                           X                ˇ          ˇ 
      j@ˇ .i /˛ mj ./ j                          j.@       .i /˛ /@ mj ./j
                                 0ˇ
                                            X
                               C˛;ˇ                  jjj˛jjˇ jCjj 2j jj ¹W2j 1 jj2j C1 º ./
                                          0ˇ
                                 0
                               C˛;ˇ 2j.j˛jjˇ j/

for all jˇj  n C 2. Hence, applying Lemma 4.25 to .i /˛ mj with N D M D
0; : : : ; n C 2, we obtain

        j@˛z kj .z/j  Cn;˛ jsupp 'j j2j.j˛jM / jzjM  Cn;˛ 2j.nCj˛jM / jzjM

for all z ¤ 0, j 2 Z, which finishes the proof.

Proposition 4.27. Let m be as in the assumptions of Theorem 4.23. Then there is
some k 2 C 1 .Rn n ¹0º/ such that

                        j@˛z k.z/j  C jzjnj˛j             for all z ¤ 0; j˛j  1                  (4.34)

and
                        Z
   m.Dx /f .x/ D              k.x  y/f .y/ dy              for all x … supp f; f 2 S.Rn /:          (4.35)
                         Rn
                            P
Proof. We will show that j 2Z @˛z kj .z/ converges absolutely and uniformly on ev-
ery compact subset of Rn n P ¹0º to a function k.z/ satisfying (4.34). The main idea of
the proof is to split the sum j 2Z kj .z/ for given z ¤ 0 into the two parts
                              X                                     X
                                        @˛z kj .z/     and                   @˛z kj .z/
                            2j jzj1                            2j >jzj1

and to show convergence and the estimate (4.34) separately.
  For the first sum we use (4.33) with j˛j  1 and M D 0. Then
                 X                       X
                      j@˛z kj .z/j  C         2j.nCj˛j/  C 0 jzjnj˛j ;
              j ld jzj1                         j ld jzj1

where ld denotes the logarithm with respect to basis 2. For the second sum we apply
(4.33) with j˛j  1 and M D n C j˛j C 1 and obtain
             X                      X
                   j@˛z kj .z/j  C        2j jzjnj˛j1  C 0 jzjnj˛j :
          ld jzj1 <j                        ld jzj1 <j
Section 4.6 Mikhlin Multiplier Theorem                                                 111

      P
Hence j 2Z @˛z kj .z/ converges absolutely and uniformly on every closed subset of
Rn n ¹0º to a function k.z/ that satisfies (4.34) for all j˛j  1. Finally, it remains to
show that k.z/ satisfies (4.35). First of all,
                            X
             m./fO./ D         mj ./fO./ for all  2 Rn ; f 2 S.Rn /
                             j 2Z
        P                                                 P
since    j 2Z 'j ./ is locally finite. Moreover, since   j 2Z jmj ./j is uniformly bound-
                              O
ed with respect to  and f ./ 2 L .R /, the sum on the right-hand side converges
                                         1  n

in L1 .Rn / to the left-hand side by Lebesgue’s theorem on dominated convergence.
Hence
                           X                   XZ
          m.Dx /f .x/ D        mj .Dx /f .x/ D         kj .x  y/f .y/ dy;
                                                         n
                            j 2Z                   j 2Z R

for every f 2 S.Rn / since Fourier transformation is a bounded linear operator from
L1 .Rn / to Cb0 .Rn /. Therefore it only remains to interchange the summation and
integration
P           in last term above provided that x … supp f . But this can be done since
       k
   j 2Z j .z/ converges absolutely and uniformly on every closed subset of Rn n ¹0º
as shown above. Hence (4.35) follows.

Proof of Theorem 4.23. We can apply Theorem 4.4 since (4.34) and Lemma 4.3 im-
ply (4.4). Therefore m.Dx / extends to a bounded linear operator from Lp .Rn / to
Lp .Rn / for all 1 < p < 1 due to Theorem 4.4.

  Analyzing the proof of the Mikhlin multiplier theorem, one easily shows the fol-
lowing refinement:

Proposition 4.28. Let m be as in Theorem 4.23 and let A > 0 be as in (4.28). Then
for every 1 < p < 1 there is some constant Cp > 0, independent of A, such that

                              km.Dx /kL.Lp .Rn //  Cp A:                           (4.36)

Proof. First of all, one easily observes that the constant C in (4.34) depends only on
A and not on m directly. Hence from the proof of Lemma 4.3 it easily follows that
T D m.Dx / satisfies (4.4) with some BK depending only on A. Due to Remark 4.16

                              km.Dx /kL.Lp .Rn //  Cp0 .A/

for some Cp .A/ depending only in A (and p) and not directly on m, where 1 < p <
1 is arbitrary. Now one can observe that Cp0 .A/ can be chosen as Cp0 .A/ D Cp A,
where Cp D Cp0 .1/ as follows: If m satisfies (4.28) for some A > 0, then m0 ./ WD
m./=A satisfies (4.28) with A replaces by 1. Hence

        km0 .Dx /kL.Lp .Rn //  Cp0 .1/     ,     km.Dx /kL.Lp .Rn //  Cp0 .1/A:
112                            Chapter 4 Translation Invariant Singular Integral Operators


4.7 Outlook: Hardy spaces and BMO

  In this section we discuss briefly how to prove continuity of translation invari-          i
  ant operators on the so-called Hardy space H 1 .Rn / and the space of functions
  of bounded mean oscillations BMO.Rn /, which are the proper substitutes of
  L1 .Rn / and L1 .Rn / in the theory of singular integral operators and regularity
  theory of elliptic equations. This section is optional and can be skipped.


   In this section we address the question whether singular integral operators like the
Riesz and Hilbert transformations are continuous on Lp .Rn / in the limit case p D 1
or p D 1. The answer is negative in general as the following examples show:
 1. Let
                                          Z 1
                                    1                    dt
                            Hf .x/ D p:v:     f .x  t /
                                          1             t
                                                                          1
      be the Hilbert transformation. Then for f D        Œa;b 2 L .R/ \ L .R/, a < b,
                                                                  1

                                      Z xb
                               1                       dt  1 xa
                    Hf .x/ D     p:v:       f .x  t /    D ln
                                      xa             t    xb

      for all x > b, where Hf … L1 .R/ since
                                                    
              xa      xa             1      ba     1
           ln       D       1CO            D     CO                     as x ! 1:
              xb      xb            x 2     xb     x2

      Moreover, Hf … L1 .R/.

 2. Let f 2 L1 .Rn / and let Rj f .x/ D F 1 Œ jjj fO./.x/, j D 1; : : : ; n, be the
                                                    i

    Riesz transformation. Then
                                            Z
                               1   n
                      Rj f 2 L .R / )               f .x/ dx D 0:                (4.37)
                                                    Rn


      In order to prove (4.37), one observes Rj f 2 L1 .Rn / implies that jjj fO./ 2
                                                                              i


      C 0 .Rn /. But, since fO./ 2 C 0 .Rn / too and jjj is discontinuous at 0,
                                                         i
      R
                       O
        Rn f .x/ dx D f .0/ D 0 necessarily.
Hence one sees on one hand that, if f 2 L1 .R/, then Hf can have some logarithmic
singularities even if f 2 L1 .R/\L   1 .R/. On the other hand, if R f 2 L1 .Rn /, then
                                  R                                 j
f has the cancellation property Rn f .x/ dx D 0. As we will see, the Hardy space
H 1 .Rn /, which is a subset of L1 .Rn / and the space of functions with bounded mean
Section 4.7 Outlook: Hardy spaces and BMO                                           113

oscillations BMO.Rn /, which contains L1 .Rn /, are natural substitutes of L1 .Rn /
and L1 .Rn / in the context of singular integral operators.
   Before we come to the definition of the spaces, let us point out that a central point
of the definition and analysis of the spaces H 1 .Rn / and BMO.Rn / are the following
variants of the classical maximal operator
                                     Z
                                  1
                Mf .x/ D sup             jf .x/j dx for f 2 L1loc .Rn /:
                           x2Q  jQj    Q

                                                                 1
 1. RFor the analysis of H 1 .Rn / we define for
                                                a given ˆ 2 C0 .R / with
                                                                     n
                                      n     x
      Rn ˆ.x/ dx ¤ 0 and ˆ t .x/ D t     ˆ t , t > 0, the associated maximal
     operator Mˆ as
             .Mˆ f /.x/ D sup jˆ t  f .x/j     for all x 2 Rn ; f 2 L1loc .Rn /:
                            t>0

     Note that the absolute value in the definition of Mˆ is outside the convolution
     integral. Hence certain cancellation properties of f can be taken into account,
     which is not the case for Mf , where the absolute value is inside the integral.
 2. For the definition and analysis of BMO.Rn / one replaces Mf by the sharp func-
    tion
                                    Z
                                 1
               f # .x/ D sup            jf .x/  fQ j dx; f 2 L1loc .Rn /;
                          x2Q   jQj  Q

                    1
                       R
    where fQ D jQj      Q f .y/ dy denotes the mean value of f on Q and the supre-
    mum is taken over all cubes containing x. – Note that f #  0 if and only if f
    is a constant.
With these variants of the maximal operator we come to:
                                        R
Definition 4.29. Let ˆ 2 C01 .Rn / with Rn ˆ.x/ dx ¤ 0 be given and let 1  p 
1. Then
                              ®                                ¯
                  H p .Rn / D f 2 L1loc .Rn / W Mˆ f 2 Lp .Rn /

is the Hardy space with integral exponent p. Moreover,
                                ®                          ¯
                 BMO.Rn / D f 2 L1loc.Rn / W f # 2 L1 .Rn / ;

where two functions differing by a constant are identified.

  The norms of H p .Rn / and BMO.Rn / are defined as
         kf kH p .Rn / WD kMˆ f kLp .Rn / ;   kf kBMO.Rn / WD kf ] kL1 .Rn / :
We will see later that the definition of H p .Rn / does not depend on the choice of ˆ.
114                                Chapter 4 Translation Invariant Singular Integral Operators


  First of all, note that jf .x/j  jMˆ f .x/j since
                                       Z
               lim ˆ t  f .x/ D f .x/      ˆ.y/ dy             almost everywhere
               t!0                           Rn

by Corollary 4.11. Hence

                     H p .Rn /  Lp .Rn / for all 1  p  1:
                                             R
Moreover, since for every ˆ 2 C01 .Rn / with Rn ˆ.x/ dx ¤ 0 there is a constant
C > 0 such that

                                    Mˆ f .x/  CMf .x/;                                (4.38)

cf. [32, Chapter II, §2.1, Proposition], we obtain:

Corollary 4.30. Let 1 < p  1. Then H p .Rn / D Lp .Rn /.

Proof. If f 2 Lp .Rn /, then Mf 2 Lp .Rn / by the boundedness of the maxi-
mal operator on Lp .Rn / with p > 1, cf. Theorem 4.15. Hence (4.38) shows that
f 2 H p .Rn / and therefore Lp .Rn /  H p .Rn /. Since we have seen above that
H p .Rn /  Lp .Rn /, the corollary follows.

  But for the limit case p D 1, H 1 .Rn / ¨ L1 .Rn / as the following characterization
shows:

Theorem 4.31 (Atomic decomposition of H 1 .Rn /).
Let f 2 L1loc .Rn /, then f 2 H 1 .Rn / if and only if
                                   1
                                   X                     1
                                                         X
                           f D           k ak    with         jk j < 1
                                   kD0                   kD0

where k 2 C and ak , k 2 N0 , are H 1 -atoms. Here a function aW Rn ! K is called
H 1 -atom if there is some ball B such that
 1. supp a  B,
                   1
 2. kakL1 .Rn /  jBj ,
    R
 3. Rn a.x/ dx D 0.
Moreover, kf kH 1 .Rn / is equivalent to

               °X
                1                  1
                                   X                                            ±
         inf         jk j W f D         k ak ; where ak are H 1 -atoms; k 2 C :
               kD0                 kD0
Section 4.7 Outlook: Hardy spaces and BMO                                             115

For a proof we refer to [32, Chapter III, §2, Theorem 2].
                                                 R
Corollary 4.32. Let f 2 H 1 .Rn /. Then              Rn f .x/ dx D 0.
                    P1
Proof. Since f D                              1  n
                      kD0 k ak converges in L .R /, we have

                      Z                    1
                                           X           Z
                              f .x/ dx D         k             ak .x/ dx D 0
                         Rn                                Rn
                                           kD0

for any f 2 H 1 .Rn /.

  The following lemma shows the special role of H 1 -atoms:

Lemma 4.33. Let a be an H 1 -atom as above and let T be a linear operator satisfying
Assumption 4.1. Then there is some constant Cn depending only on the dimension
such that

                          kT akL1 .Rn /  Cn kT kL.L2 .Rn // C BK

where BK is the constant in (4.4).
                                                         p
Proof. Let Q be a cube such that B  Q and jQj  . n/n jBj, where B is the ball
for which the conditions of an H 1 -atom are satisfied. Then by Lemma 4.6
         Z
                 jT a.x/j dx  BK kakL1 .Rn /  BK kakL1 .Rn / jBj  BK ;
           Rn ne
               Q
                p
      e D Q 2 n . On the other hand,
where Q
  Z
                        1                        1
                     e 2 kT akL2 .Rn /  Cn0 jBj 2 kT kL.L2 .Rn // kakL2 .Rn /
      jT a.x/j dx  jQj
    e
    Q
                                1                          1
                     Cn jBj 2 kT kL.L2 .Rn // jBj 2 kakL1 .Rn /  Cn kT kL.L2 .Rn // ;

which proves the lemma.

Corollary 4.34. Let T be a linear operator satisfying Assumption 4.1 and denote its
                                       eW L1 .Rn / ! L1 .Rn /, cf. Exercise 4.41,
extension to a bounded linear operator T                weak
again by T . Then T W H .R / ! L .R / is a bounded linear operator.
                       1   n      1    n

                                         P1
Proof. Let f 2 H 1 .Rn / and f D                a , where ak are H 1 -atoms and
P1                                         PN k k
                                           kD0
                                                                    1
  kD0 jk j  C kf kH 1 .Rn / . Then fN WD   kD0 k ak 2 H .R / \ L .R / con-
                                                           1  n           n

verges to f in H .R / ,! L .R /. In particular, TfN !N !1 Tf in Lweak .Rn /
                 1  n           1  n                                    1
116                              Chapter 4 Translation Invariant Singular Integral Operators


and there is a subsequence .fNj /j 2N such that limj !1 TfNj .x/ D Tf .x/ almost
everywhere. Hence
                                 Z
         kTf kL1 .Rn /  lim inf    jTfNj .x/j dx D lim inf kTfNj kL1 .Rn /
                           j !1     Rn                         j !1

by the Lemma of Fatou and
                                      1
                                      X
           lim sup kTfN kL1 .Rn /            jk jkT ak kL1 .Rn /
           N !1
                                      kD0
                                                             
                                    C Cn kT kL.L2 .Rn // C BK kf kH 1 .Rn /
because of Lemma 4.33. This implies the statement.

  A famous result by C. Fefferman is the following duality of H1.Rn / and BMO.Rn /:

Theorem 4.35. H 1 .Rn /0 Š BMO.Rn /. More precisely, J W BMO.Rn / ! H 1 .Rn /0
defined by
                                Z
 hJf; giH 1 .Rn /0 ;H 1 .Rn / D   f .x/g.x/ dx for all f 2 BMO.Rn /; g 2 H 1 .Rn /
                             Rn

is a linear isomorphism.
  We refer to [32, Chapter IV, §1.2] for a proof. But we note that, using the atomic
decomposition of H 1 .Rn /-functions, one easily obtains the following inclusion: Let
f 2 BMO.Rn /. PThen for every g 2 H 1 .Rn / there is a decomposition f D
P 1                 1
  kD0 k ak with    kD0 jk j  C kf kH 1 .Rn / . Therefore
  ˇZ                ˇ X  1         ˇZ                  ˇ
  ˇ                 ˇ              ˇ                   ˇ
  ˇ                 ˇ
      f .x/g.x/ dx ˇ              ˇ
                             jk j ˇ   ak .x/g.x/ dx ˇˇ
  ˇ
      Rn                                 Bk
                           kD0
                                          ˇZ                                  ˇ
                                          ˇ                                 ˇ
                        C kf kH 1 .Rn / ˇˇ   ak .x/ g.x/  gBk           dx ˇˇ
                                                Bk
                                              Z
                                           1      ˇ           ˇ
                        C kf kH 1 .Rn /          ˇg.x/  gB ˇ dx
                                         jBk j Bk           k


                        C kf kH 1 .Rn / kg # kL1 .Rn / D C kf kH 1 .Rn / kgkBMO.Rn / ;
where Bk denotes the ball for which the conditions of an H 1 -atom are satisfied for
ak and gBk the mean-value of   R g on Bk . Hence g induces naturally an element Jg in
H 1 .Rn /0 . – Note that, since Rn f .x/ dx D 0, the functional defined above does not
depend on the choice of the constant for g.

Corollary 4.36. Let T be a linear operator satisfying Assumption 4.1. Then T (first
defined e.g. on L1 .Rn / \ L2 .Rn /) can be extended to a bounded linear operator
T 2 L.L1 .Rn /; BMO.Rn //.
Section 4.7 Outlook: Hardy spaces and BMO                                              117

Proof. First let f 2 L1 .Rn / \ L2 .Rn /. Then
                    ˇZ                ˇ                                ˇZ                 ˇ
                    ˇ                 ˇ                                ˇ                  ˇ
       sup          ˇ
                    ˇ  Tf .x/g.x/ dx ˇˇ D               sup            ˇ                 ˇ
                                                                       ˇ n f .x/T g.x/ dx ˇ
g2H 1 \L2 WkgkH 1 D1   Rn                       g2H 1 \L2 WkgkH 1 D1    R

where T  is dual operator of T , which satisfies the Assumptions 4.1 again, cf. proof
of Theorem 4.4. Hence
                             ˇZ                    ˇ
                             ˇ                     ˇ
                 sup         ˇ
                             ˇ     Tf .x/g.x/ dx ˇˇ
          g2H 1 \L2 WkgkH 1 D1     Rn

                      sup           kf kL1 .Rn / kT  gkL1 .Rn /  C kf kL1 .Rn /
              g2H 1 \L2 WkgkH 1 D1


because of Corollary 4.34 applied to T  . Therefore Tf 2 H 1 .Rn /0 Š BMO.Rn /
and

        kTf kBMO.Rn /  C kf kL1 .Rn /         for every f 2 L1 .Rn / \ L2 .Rn /

due to (4.35). Now we can extend T to a bounded linear operator T W L1 .Rn / !
BMO.Rn / as follows: Given f 2 L1 .Rn / we have
                                         
                         fk WD f     Bk *k!1 f         in L1 .Rn /;

where f Bk 2 L2 .Rn /. Hence Tf 2 BMO.Rn / can be (uniquely) extended from
L1 .Rn / \ L2 .Rn / to L1 .Rn / by weak--continuity:
                            Z                         Z
   hTf; giBMO;H 1 WD lim         Tfk .x/g.x/ dx D lim   fk .x/T  g.x/ dx
                         k!1 Rn                           k!1 Rn

for all g 2 H 1 .Rn /, where fk *k!1 f in L1 .Rn / and T g 2 L1 .Rn / by Corol-
lary 4.34. It is not difficult to show that the definition of Tf for f 2 L1 .Rn /
is independent of the choice of the sequence .fk /k2N  L1 .Rn / \ L2 .Rn / with
fk *k!1 f in L1 .Rn /.

 We note that it is not difficult to estimate kTf kBMO.Rn /  C kf kL1 .Rn / for f 2
 1
L .Rn / with compact support directly, cf. e.g. [32, Page 156].
 Finally, we note the following nice characterization:

Theorem 4.37. Let Rj f D F 1 Œ jjj fO./, j D 1; : : : ; n, be the Riesz operators.
                                        i

Then
 1. f 2 H 1 .Rn / if and only if f 2 L1 .Rn / and Rj f 2 L1 .Rn / for all j D
    1; : : : ; n.
 2. f 2 BMO.Rn /Pif and only if there are some gj 2 L1 .Rn /, j D 0; : : : ; n such
    that f D g0 C jnD1 Rj gj .
118                            Chapter 4 Translation Invariant Singular Integral Operators


  For a proof we refer to the references given in [32, Chapter III, §4.3] and [32,
Chapter IV, §6.4].

Corollary 4.38. Let m.Dx /f D F 1 Œm./fO./ be a multiplier operator satisfying
the conditions of Theorem 4.23. Then m.Dx / 2 L.H 1 .Rn // \ L.BMO.Rn //.

Proof. First let f 2 H 1 .Rn /. Then m.Dx /f 2 L1 .Rn / because of Corollary 4.34
and Theorem 4.23. Hence it remains to prove that Rj m.Dx /f 2 L1 .Rn /. Since
                                                       
                                          i j      O
               Rj m.Dx /f D F    1
                                               m./f ./ D F 1 Œmj ./fO./
                                          jj

         i
where jjj and m satisfy (4.28), mj satisfies (4.28) and therefore Rj m.Dx / satisfies
the Assumption 4.1. Thus Rj m.Dx /f 2 L1 .Rn / if f 2 H 1 .Rn / by Corollary 4.34.
   Finally, the boundedness on BMO.Rn / is proved in a similar manner.


4.8 Final Remarks and Exercises
4.8.1 Further Reading
The results of this chapter are based on the monographs by Garcia-Cuerva and Ru-
bio de Francia [7] and Stein [32], where the interested reader will find many fur-
ther results. Moreover, we also recommend the books by Duoandikoetxea [5] and
Grafakos [8, 9] for further studies. A more detailed discussion and characterizations
of translation invariant operators can be found in [33, Chapter I, Section 3]. For a
more detailed study of Hardy space and BMO.Rn / we refer to [32].

4.8.2 Exercises

      Exercise 4.39. Let f 2 Lp .Rn / with supp f compact and
                                  Z
              v.x/ D N  f .x/ D       N.x  y/f .y/ dy for all x 2 Rn ;
                                          Rn

      where N is the fundamental solution of the Laplace equation as in (2.14).
       1. Show that v.x/ is well defined for every x 2 Rn .
       2. Show that v.x/ is twice differentiable in every x … supp f and
                                        Z
                       @xj @xk v.x/ D       .@xj @xk N /.x  y/f .y/ dy
                                               Rn
Section 4.8 Final Remarks and Exercises                                                     119


        for every j; k D 1; : : : ; n where
                                                            
                                             ıj k      xj xk
                 @xj @xk N.x/ D cn ˛n              n                    for all x ¤ 0
                                            jxjn      jxjnC2

        and all j; k D 1; : : : ; n, where ˛2 D 1 and ˛n D 2  n if n             3.


   Exercise 4.40. Let L1weak .Rn / and k  kL1           be defined as in Remark 4.5.
                                                  weak

     1. Prove that there is a constant C > 1 such that

           kf C gkL1          C.kf kL1       C kgkL1           / for all f; g 2 L1weak .Rn /:
                      weak             weak              weak


        Moreover, show that

                  kf kL1      D jkf kL1         for all f 2 L1weak .Rn /;  2 C;
                        weak               weak


        kf kL1         0, and kf kL1        D 0 if and only if f .x/ D 0 almost every-
             weak                   weak
        where.

        Remark. This means that k  kL1 is a so-called quasi-norm and L1weak .Rn /
                                      weak
        becomes a quasi-normed linear space..

     2. Prove that L1weak .Rn / is complete in the following sense: If .fk /k2N
        L1weak .Rn / is a Cauchy sequence, i.e.,

                                kfk  fj kL1         n    !k;j !1 0;
                                              weak .R /


        then there is some f 2 L1weak .Rn / such that fk !k1 f in L1weak .Rn /,
        i.e.,

                                kfk  f kL1          n    !k;j !1 0:
                                              weak .R /


        Moreover, there is a subsequence .fkj /j 2N , kj !j !1 1 such that
        fkj .x/ !j !1 f .x/ for almost every x 2 Rn . Furthermore, the limit
        f is unique in the sense that, if additionally fk !k!1 f 0 in L1weak .Rn /,
        then f .x/ D f 0 .x/ for almost every x 2 Rn .

   Exercise 4.41. Let T be as in Theorem 4.4. Prove that there is a unique bounded
                   eW L1 .Rn / ! L1 .Rn / such that T
   linear operator T                                    ejL1 .Rn /\L2 .Rn / D T . Here
                                     weak
   eW L .R / ! L
   T    1   n        1      n
                     weak .R / is bounded if there is some constant M > 0 such that
     e
   kT f kL1      M   kf kL1 for all f 2 L1 .Rn /.
           weak

   Hint. Use Exercise 4.40.
120                               Chapter 4 Translation Invariant Singular Integral Operators


      Exercise 4.42. Let k 2 L1loc.Rn n ¹0º/ be homogeneous of degree n, i.e.,
      k.x/ D n k.x/ for all x ¤ 0,  > 0. Prove that k satisfies (4.16) and
      (4.17) if and only if
                               Z
                                      k.x/ d .x/ D 0;
                                     @B1 .0/

      where  denotes the surface measure on @B1 .0/. Moreover, prove that the corre-
      sponding convolution operator T as in (4.19) is invariant with respect to dilations,
      i.e.,

                       T .ır f / D ır .Tf / for all f 2 S.Rn /; r > 0;

      where .ır f /.x/ D f .rx/ for all x 2 Rn , r > 0.

      Exercise 4.43. Prove that m./ defined by (4.26) is homogeneous of degree 0.

      Exercise 4.44 (Properties of the Dyadic Partition of Unity).
      Let 'j , j 2 Z, be a dyadic partition of unity on Rn n ¹0º as in Section 4.6. More-
      over, let f W Rn ! C, m 2 R. Prove that there is some constant C > 0 such that

                            jf ./j  C jjm     for all  2 Rn n ¹0º

      if and only if there is some C 0 > 0 such that

                          sup j'j ./f ./j  C 0 2j m    for all j 2 Z:
                         2Rn


      Exercise 4.45. Proof Theorem 4.12 in the case r D 1 in detail.

      Exercise 4.46. Let mW Rn n ¹0º ! C be .n C 2/-times continuously differen-
      tiable and homogeneous of degree 0, i.e., m./ D m./ for all  > 0,  ¤ 0.
      Prove that m satisfies the assumptions of the Mikhlin multiplier theorem, i.e.,
      Theorem 4.23.
      Hint. Use that @˛ m./ is homogeneous of degree j˛j. Moreover, show that the
      constant in (4.28) can be chosen as

                                C D max sup jjj˛jj@˛ m./j:
                                     j˛jnC2 ¤0



      Exercise 4.47. Let mj 2 C N .Rn n ¹0º/, j D 1; 2, such that

                  j@˛ mj ./j  Cj jjsj j˛j   for all  2 Rn n ¹0º; j˛j  N
Section 4.8 Final Remarks and Exercises                                         121


   for some Cj > 0 and sj 2 R. Prove that there is some constant C0 > 0 such that
   m./ D m1 ./m2 ./ satisfies

              j@˛ m./j  C0 jjs1 Cs2 j˛j   for all  2 Rn n ¹0º; j˛j  N:

   Conclude that the product of two function mj satisfying the condition of the
   Mikhlin multiplier theorem satisfies these conditions again.
    Chapter 5
    Non-Translation Invariant Singular Integral
    Operators

    Summary
    In this chapter we first generalize the main result on translation invariant singular in-
    tegral operators of the last chapter to the non-translation invariant case and to Banach-
    space valued functions. The result is conditional in the sense that one needs continuity
    of the operator on some Lp0 -space with p0 > 1. We extend the Mikhlin multiplier
    theorem to the case of Hilbert-space-valued functions. Moreover, we prove continuity
    of zero-order pseudodifferential operators on Lp .Rn /, 1 < p < 1. To this end it
    is essential to get a representation of the Schwartz kernel of the pseudodifferential
    operator by a smooth function away from the diagonal, which implies the Hörman-
    der condition. Finally, further applications of the kernel representation are discussed
    including pseudo-locality.


    Learning targets
      Learn how the results in the scalar translation invariant case of the previous chap-
       ter can be generalized.
      See how the Mikhlin multiplier theorem generalizes to Hilbert space valued func-
       tions.
      Get a deeper understanding of the pseudo-local nature of pseudodifferential op-
       erators, their kernel representation and their mapping properties.


i     For this chapter the reader should be familiar with the result of Appendix A.4 on
      Bochner integrals and Bochner spaces. Moreover, the results of the Sections 5.4
      and 5.5 are based on the results of Chapter 3.



    5.1 Motivation
    The result due to Theorem 4.4 can be used to get a priori estimates of solutions to
    elliptic partial differential equations in Lp -Sobolev spaces: E.g., if
                                                X
                                  a.Dx /u WD         a˛ Dx˛ u D f
                                            j˛jD2m
Section 5.1 Motivation                                                                123

                                                 P
for some u; f 2 S.Rn /, where m 2 N0 , a./ D j˛jD2m a˛  ˛ , a˛ 2 C, satisfies
ja./j c0 jj2m for all  2 Rn and some c0 > 0, then for every 1 < p < 1 there is
some Cp > 0 such that
                             X
                                  kDx˛ ukp  Cp kf kp
                                j˛jD2m

independently of u; f 2 S.Rn /. This is a consequence of the Mikhlin multiplier
theorem since
                                        ˛        
                           ˛       1        O
                         Dx u D F            f ./ ;
                                        a./

where a./1  ˛ is a bounded and homogeneous functions of degree 0, cf. Section 7.1
for a more detailed discussion.
   But the singular integral operators studied in the previous sections are all translation
invariant, i.e., the operators commute with the translation operators y defined by
.y f /.x/ D f .x C y/ for all x; y 2 Rn . Therefore these results cannot be used
directly to study e.g. variable coefficient elliptic partial differential equations like,
                                          X
                         a.x; Dx /u D            a˛ .x/Dx˛ u D f
                                         j˛jD2m

for suitable u; f , where the coefficients a˛ .x/ are functions depending on x. Since
a.x; Dx / does not commute with translations in general, its inverse a.x; Dx /1 , if it
exists, does not commute with translations in general too.
  Therefore we study in the following operators T , which admit a representation
                         Z
               Tf .x/ D       k.x; x  y/f .y/ dy for all x … supp f
                           Rn

for a suitable function k 2 L1loc.Rn  .Rn n ¹0º// that satisfies a variant of the Hör-
mander condition (4.4) to be specified later. We will even generalize this further
by considering vector-valued functions f W Rn ! X0 and operator-valued kernels
kW Rn  .Rn n ¹0º/ ! L.X0 ; X1 /, where X0 ; X1 are arbitrary Banach spaces.
   In particular the result applies to pseudodifferential operators
                                Z
                p.x; Dx /f D          eix p.x; /fO./d̄; f 2 S.Rn /;
                                  Rn

with symbol p 2 S1;0 0
                        .Rn  Rn /. To this end it is essential that p.x; Dx / has a
representation by a kernel in the form
                             Z
          p.x; Dx /f .x/ D        k.x; x  y/f .y/ dy for all x … supp f;      (5.1)
                                 Rn
124                       Chapter 5 Non-Translation Invariant Singular Integral Operators


where f 2 S.Rn / for a suitable locally integrable function kW Rn  .Rn n ¹0º/ ! C,
cf. Theorem 5.12 below.
   The generalization to vector-valued functions is e.g. motivated by the study of ab-
stract ordinary differential equations
                    d
                       u.t / C Au.t / D f .t / in X for all t > 0;
                    dt
                                u.0/ D 0;

where u; f W Œ0; 1/ ! X and AW D.A/  X ! X is an unbounded operator on X.
Formally, u can be calculated with the aid of Fourier transformation: Let e0 u and e0 f
denote the extensions of u; f , resp., by 0 for t < 0. Then
                d
                   .e0 u/.t / C A.e0 u/.t / D .e0 f /.t /   for all t 2 R
                dt
and therefore

                     b           b           b
                  i  e0 u. / C Ae0 u. / D e0 f . / for all  2 R;

where b
      g . / D F t7! Œg denotes the Fourier transformed in time of g.t /. Hence

                  u.t / D F71           1  b
                             !t Œ.i  C A/ e0 f . / for all t > 0

and
                d
                dt
                   u.t / D F71               1b
                              !t Œi  .i  C A/ e0 f . / for all t > 0

provided that i  .i  C A/1 exits for all  ¤ 0. Hence estimating the Lp .RC I X/-
         d
norm of dt u in terms of the Lp .RC I X/-norm of f reduces to the study of certain
operator-valued Fourier multiplier operators/singular integral operators.


5.2 Extension to Non-Translation Invariant and
    Vector-Valued Singular Integral Operators
In the following let X0 ; X1 be Banach spaces and let T be a linear operator satisfying
the following assumptions:

Assumption 5.1. Let T W Lp0 .Rn I X0 / ! Lp0 .Rn I X1 / be a bounded linear operator
for some 1 < p0  1, where X0 ; X1 are Banach spaces. Moreover, we assume that
there is a locally integrable kernel kW Rn  .Rn n ¹0º/ ! L.X0 ; X1 / such that for
every f 2 Lp0 .Rn I X0 / with compact support
                     Z
          Tf .x/ D       k.x; x  y/f .y/ dy for almost every x … supp f
                     Rn
Section 5.2 Extension to Non-Translation Invariant Singular Integral Operators               125

and that k satisfies the Hörmander condition
     Z
               kk.x; x  y/  k.x; x/kL.X0 ;X1 / dx  BK              for all y 2 Rn :      (5.2)
        jxj>2jyj

  Similar to Section 4.2 the condition (5.2) is a consequence of the following stronger
condition:

Lemma 5.2. Let kW Rn  .Rn n ¹0º/ ! L.X0 ; X1 / be a locally integrable function
that is continuously differentiable in the second variable and satisfies

       krz k.x; z/kL.X0 ;X1 /  C jzjn1        for almost every x 2 Rn ; z ¤ 0:           (5.3)

Then k satisfies (5.2).

Proof. The proof is almost the same as the proof of Lemma 4.3: We use that
                                                  Z 1
                    k.x; x  y/  k.x; x/ D            y  rk.x; x  ty/ dt:
                                                    0

Therefore, if jxj > 2jyj, then

       kk.x; x  y/  k.x; x/kL.X0 ;X1 /  sup krz k.x; x  ty/kL.X0 ;X1 / jyj
                                                 t2Œ0;1

                                               C jxjn1 jyj

                      1
since jx  tyj        2 jxj for all t 2 Œ0; 1. Hence
 Z                                                           Z
                kk.x; x  y/  k.x; x/kL.X0 ;X1 / dx  C                    jxjn1 dxjyj  C 0
     jxj>2jyj                                                    jxj>2jyj

uniformly in y ¤ 0.

  As before we have as a simply consequence of the latter condition the following
L1 -estimate:

   R 5.3. Let T be as above. Then for every a 2 L .R I X0 / with supp a  Q
Lemma                                            1  n

and Q a.x/ dx D 0
                         Z
                                   kT a.x/kX1 dx  BK kakL1 .Rn IX0 / ;
                           Rn ne
                               Q
                 p                                          p
where Qe D Q2 n denotes the cube with same center as Q and 2 n times the side-
length of Q, cf. Figure 4.1.
126                       Chapter 5 Non-Translation Invariant Singular Integral Operators


   The proof is identical with the proof of Lemma 4.6, just replacing j  j by the corre-
sponding norms k  kZ , Z D X0 ; X1 ; L.X0 ; X1 /.
   Analogously to scalar functions one defines for f 2 L1 .Rn I X/ the maximal oper-
ator
                                              Z
                                            1
                        .Mf /.x/ D sup           kf .y/kX dy;
                                      x2Q jQj Q


where the supremum is taken over all cubes Q          Rn containing x. Moreover, the
construction of the Calderón–Zygmund can be done in the same way since the con-
struction is only based on the size of the mean-value of jf .x/j, kf .x/kX , respectively.
Hence again one only replaces the absolute value jj by the corresponding norms kkX .
Therefore all the results of Section 4.3 directly carry over to vector-valued functions
f 2 L1 .Rn I X/. In particular, one has the weak-type .1; 1/-estimate of the maximal
operator

                                                             C
                   j¹x 2 Rn W j.Mf /.x/j > t ºj               kf kL1 .Rn IX/
                                                             t
for all t > 0 and Lebesgue’s differentiation theorem
                                 Z
                             1
         f .x/ D    lim             f .y/ dy in X for almost every x 2 Rn ;
                 x2Q;jQj!0 jQj Q


where one uses (as in the scalar case) that continuous, integrable functions f W Rn !
X are dense in L1 .Rn I X/. Using this, an analogous version of the Calderón–Zyg-
mund decomposition stated in Theorem 4.8 holds for f 2 L1 .Rn I X/ again with the
obvious replacements of j  j by k  kX . More precisely, we have:

Theorem 5.4. Let f 2 L1 .Rn I X0 /, where X0 is a Banach space, and let t > 0.
Then there are disjoint measurable sets F;  such that Rn D F [  and
 1. kf .x/kX0  t for almost every x 2 F ,
         S
 2.  D j 2N , where Qj , j 2 N  N, are non-overlapping dyadic cubes and
                                            Z
                                 1
                            t<                       kf .y/kX0 dy  2n t:
                               jQj j            Qj


Moreover, if f D g C b, where
                                ´
                                    f .x/                     if x 2 F;
                       g.x/ D         1
                                         R
                                    jQj j    Qj f .y/ dy      if x 2 Qj ;
Section 5.2 Extension to Non-Translation Invariant Singular Integral Operators         127

then
 1. kg.x/kX0  2n t almost every in Rn ,
                                  R
 2. b.x/ D 0 for every x 2 F and Qj b.x/ dx D 0 for each j 2 N .
  Based on this, we obtain our second main results:

Theorem 5.5. Let T be as in Assumption 5.1. Then
                                                C1
          j¹x 2 Rn W kTf .x/kX1 > t ºj            kf kL1 .Rn IX0 /   for all t > 0   (5.4)
                                                 t
and for all f 2 L1 .Rn I X0 / \ Lp0 .Rn I X0 /. Moreover, T extends to a bounded
linear operator T W Lp .Rn I X0 / ! Lp .Rn I X1 / for all 1 < p  p0 .

Proof. Again the main step consists in proving (5.4). The proof is similar to the
corresponding part of the proof of Theorem 4.8. For the convenience of the reader we
repeat parts of the proof with the necessary modifications:
  Let f 2 L1 .Rn I X/ \ Lp0 .Rn I X/ and let f .x/ D g.x/ C b.x/ be the Calderón–
Zygmund decomposition of f due to Theorem 5.4 for given t > 0. As in the scalar
case

  j¹x W kTf .x/kX1 > t ºj  j¹x W kT g.x/kX1 > t =2ºj C j¹x W kT b.x/kX1 > t =2ºj

and it is sufficient to estimate each term separately.
   In order to estimate T g, we use that kg.x/kX1  2n t for almost every x 2 Rn ,
f .x/ D g.x/ for x 2 F , t jj  kf kL1 .Rn IX0 / , and that T 2 L.Lp0 .Rn //:
                                       Z                             Z
                                  2p0                p0          2p0              p0
   j¹x W kT g.x/kX1 > t =2ºj  p           kT g.x/kX     dx   C         kg.x/kX     dx
                                  t 0 Rn              1          t p0 Rn           0
                                           Z                                   
                                Cp0 t p0      t p0 1 kf .x/kX0 dx C t p0 jj
                                                 F
                                 Cp0 t 1 kf kL1 .Rn IX0 / ;

where we have used (4.14) for x 7! kg.x/kX0 .
  In order to estimate T b, we apply Lemma 5.3 to bj .x/ WD b.x/ Qj .x/, j 2 N ,
where
                        Z
             T bj .x/ D      k.x  y/bj .y/ dy for almost all x … Qj
                           Qj
                                                             p
                                            ej D Q
by the assumption on the kernel k. Thus, if Q            ,
                                                            2 n
                                                      j
      Z                                                     Z
               kT bj .x/kX1 dx  BK kbj kL1 .Rn IX0 /  2BK      kf .x/kX0 dx:
        Rn ne
            Qj                                                Qj
128                       Chapter 5 Non-Translation Invariant Singular Integral Operators

                                              P                          P
On the other hand, since b 2 Lp0 .Rn I X0 /, j 2N bj and therefore j 2N T bj con-
verge in Lp0 .Rn I X0 // to b and T b, respectively (if N is infinite). Hence
                                X
                kT b.x/kX1            kT bj .x/kX1   almost everywhere
                                j 2N

as before and therefore
     Z                          XZ
            kT b.x/kX1 dx  2BK         kf .x/kX0 dx  2Bk kf kL1 .Rn IX0 / ;
      Rn ne                     j 2N Qj


            S
      eD
where              e
               j 2N Qj . Finally,

  ˇ®                                 Z
                        ¯ˇ         2                      C
  ˇ x W kT b.x/kX > t =2 ˇ  jj
                              e  C         kT b.x/kX1 dx  kf kL1 .Rn IX0 /
                 1
                                   t Rn ne                t

         e  C kf kL1 .Rn IX / , which finishes the proof of (5.4). Finally, we apply the
since t jj                 0
vector-valued variant of the Marcinkiewicz interpolation theorem, cf. Theorem 5.6
below, to finish the proof.

Theorem 5.6 (Marcinkiewicz Interpolation Theorem).
Suppose that 1 < r  1 and that X0 ; X1 are Banach spaces. Let T be a sub-additive
mapping from L1 .Rn I X0 / C Lr .Rn I X0 / to the vector space of strongly measurable
functions on Rn with values in X1 , which is of weak type .1; 1/ and .r; r/, i.e,
                                                               q
                           ˇ®                  ¯ˇ      kf kLq .Rn IX0 /
             .t I Tf / WD ˇ x W kTf .x/kX1 > t ˇ  Cq                             (5.5)
                                                            tq
for all f 2 Lq .Rn I X0 /, for q D 1 and q D r if r < 1 and kTf kL1 .Rn IX1 / 
C1 kf kL1 .Rn IX0 / if r D 1 for some Cq > 0. Then

           kTf kLp .Rn IX1 /  Cp kf kLp .Rn IX0 /    for all f 2 Lp .Rn I X0 /

for all 1 < p < r, where Cp depends only on C1 ; Cr , p, and r.

Proof. The proof in the scalar case carries almost literally over to the vector-valued
case since the estimates are only based on the size of the functions Tf and f . One
only has to replace j  j by k  kXj for j D 0; 1.
   Alternatively, one can apply the following argument: Let x0 2 X0 with kx0 kX0 D
1 be arbitrary and consider the mapping Mx0 from L1 .Rn / C Lr .Rn / to the space of
measurable (scalar) functions defined by

           Mx0 g.x/ D kT .gx0 /.x/kX1         for all g 2 L1 .Rn / C Lr .Rn /:
Section 5.3 Hilbert-Space-Valued Mikhlin Multiplier Theorem                          129

Then Mx0 satisfies the conditions of the scalar Marcinkiewicz interpolation theorem,
i.e., Theorem 4.12, with constants independent of x0 . Hence for every 1 < p < r
there is some Cp (independent of x0 ) such that

  kT .gx0 /kLp .Rn IX1 / D kMx0 gkLp .Rn /  Cp kgkLp .Rn / D Cp kgx0 kLp .Rn IX0 /

for all g 2 Lp .Rn /. This implies

                         kTf kLp .Rn IX1 /  Cp kf kLp .Rn IX0 /

for all simple functions f W Rn ! X0 . Since simple functions are dense in Lp .Rn I X0 /,
the statement of the theorem follows.

Remark 5.7. In contrast to the result in the translation-invariant and scalar case, The-
orem 5.5 is a conditional result based on the fact that it is already known that T
is continuous between the Lp0 -spaces. Even for p0 D 2 this is for a given non-
translation invariant operator T in general a non-trivial fact to prove. Even in the case
X0 D X1 D C there are some operators T , which satisfy all the remaining conditions
of Assumption 5.1, but fail to be continuous on Lp .Rn / for any 1 < p < 1, cf. e.g.
[32, Chapter VII, Section 1.2].
   We note that a characterization of operators T satisfying T 2 L.Lp0 .Rn // is given
by the famous T 1-Theorem, cf. e.g. [5, Chapter 9] and [32, Chapter VII,Section 3]
   Finally, we note that, even if T commutes with translations and can therefore be
written as

                                          b fO./;
                               Tf D F 1 ŒK./

b 2 L1 .Rn I L.X0 ; X1 // does not imply T 2 L.L2 .Rn I X0 /; L2 .Rn I X1 // in gen-
K
eral unless X0 and X1 are Hilbert spaces, cf. e.g. introduction of [42].


5.3 Hilbert-Space-Valued Mikhlin Multiplier Theorem
The goal of this section is to generalize the Mikhlin multiplier theorem to the case of
Hilbert space-valued functions. This generalization will have applications to abstract
parabolic evolution equations and to the theory of Bessel potential and Besov spaces
in Chapter 6. More precisely, the main result of this section is:

Theorem 5.8. Let mW Rn n ¹0º ! L.X0 ; X1 / be an .n C 2/-times continuously dif-
ferentiable function such that

                            k@˛ m./kL.X0 ;X1 /  C jjj˛j                        (5.6)
130                       Chapter 5 Non-Translation Invariant Singular Integral Operators


for all  ¤ 0 and j˛j  n C 2, where X0 ; X1 are complex Banach spaces. Then there
is a continuously differentiable kernel kW Rn n ¹0º ! L.X0 ; X1 / such that
                              Z
                m.Dx /f D          k.x  y/f .y/ dy for x … supp f;          (5.7)
                               Rn

for every f 2 S.Rn I X0 / and k satisfies

              k@˛z k.z/kL.X0 ;X1 /  C jzjnj˛j   for all z ¤ 0; j˛j  1:         (5.8)

In particular, if X0 D H0 ; X1 D H1 are Hilbert spaces, then m.Dx / extends to a
bounded linear operator

             m.Dx /W Lp .Rn I H0 / ! Lp .Rn I H1 / for all 1 < p < 1:              (5.9)

Remark 5.9. 1. As in the scalar case the conclusion (5.9) holds under the weaker
   assumption that (5.6) holds for all j˛j  Œ n2  C 1, cf. e.g. [3, Theorem 6.1.6].
   To this end one verifies (5.2) directly instead of proving (5.8) first and applying
   Lemma 5.2.

 2. As in the scalar case every function mW Rn n ¹0º ! L.X0 ; X1 / that is .n C 2/-
    times continuously differentiable and homogeneous of degree 0 automatically
    satisfies (5.6).

  In the following let .'j /j 2Z be the same dyadic partition of unity on Rn n ¹0º as in
Section 4.6 and let mj ./ WD m./'j ./ for all j 2 Z,  2 Rn as in the scalar case.
Then

                  kj .x/ WD F71             1   n
                               !x Œmj .x/ 2 Cb .R I L.X0 ; X1 //

since mj ./ 2 L1 .Rn I L.X0 ; X1 // has compact support and because of Theorem 2.43.
Hence formally
                                     XZ
                        m.Dx /f D            kj .x  y/f .y/ dy;
                                           Rn
                                    j 2Z

where it remains to show that the sum on the right-hand side converges for x … supp f
and that
                                           X
                                   k.z/ D      kj .z/
                                            j 2Z

converges for all z ¤ 0 to a function satisfying (5.8). To this end, we prove the same
kind of estimates for kj .z/ as in the scalar case:
Section 5.3 Hilbert-Space-Valued Mikhlin Multiplier Theorem                                  131

Lemma 5.10. Let Z be a complex Banach space, N 2 N0 , and let gW Rn ! Z be an
N -times continuously differentiable function with compact support. Then

            kF 1 Œg.x/kZ  CN j supp gjjxjN sup k@ˇ gkL1 .Rn IZ/
                                                                jˇ jDN

uniformly in x ¤ 0 and g.

Proof. The proof is literally the same as the proof of Lemma 4.25.

Corollary 5.11. Let m be as in the assumptions of Theorem 4.23 and let mj ./ D
m./'j ./, j 2 Z, where 'j ; j 2 Z, is the dyadic decomposition of unity of Rn n ¹0º
as in Section 4.6. Then kj .x/ D F71 Œm .x/ satisfies
                                    !x j

     k@˛z kj .z/kL.X0 ;X1 /  C˛ 2j.nCj˛jM / jzjM                 for all z ¤ 0; j 2 Z   (5.10)

and all M D 0; : : : ; n C 2, ˛ 2 N0n , where C˛ is independent of j; z.

Proof. The proof is literally the same is the proof of Corollary 4.26.
                                                       P
Proof of Theorem 4.23. Firstly, we will show that j 2Z @˛z kj .z/ converges abso-
lutely and uniformly on every compact subsetPof Rn n ¹0º to a function k.z/ satisfying
(5.8). As in the scalar case we split the sum j 2Z kj .z/ into the two parts
                           X                                    X
                                     @˛z kj .z/    and                 @˛z kj .z/
                         2j jzj1                         2j >jzj1

and to show convergence and the estimate (5.8) separately.
  For the first sum we use (5.10) with j˛j  1 and M D 0. Then
               X                          X
                     k@˛z kj .z/kZ  C          2j.nCj˛j/  C 0 jzjnj˛j ;
           j ld jzj1                            j ld jzj1

where Z D L.X0 ; X1 / and ld denotes the logarithm with respect to basis 2. For the
second sum we apply (5.10) with j˛j  1 and M D n C j˛j C 1 and obtain
          X                         X
                k@˛z kj .z/kZ  2          2j jzjnj˛j1  C 0 jzjnj˛j :
        ld jzj1 <j                        ld jzj1 <j
      P
Hence j 2Z @˛z kj .z/ converges absolutely and uniformly on every closed subset of
Rn n ¹0º to a function k.z/ that satisfies (5.8) for all j˛j  1. Finally, it remains to
show that k.z/ satisfies (5.7). First of all,
                               X
               m./fO./ D         mj ./fO./ for all f 2 S.Rn I X0 /
                                 j 2Z
132                       Chapter 5 Non-Translation Invariant Singular Integral Operators

        P
        j 2Z 'j ./ is locally finite for every  2 R . Moreover, since
since                                                n

                                X
                                       kmj ./kL.X0 ;X1 /
                                j 2N


is uniformly bounded with respect to  and fO 2 L1 .Rn I X0 /, the sum on the right-
hand side converges in L1 .Rn I X1 / to the left-hand side by Lebesgue’s theorem on
dominated convergence. Hence
                       X
         m.Dx /f .x/ D     mj .Dx /f .x/
                         j 2Z
                         XZ
                     D             kj .x  y/f .y/ dy       for all f 2 S.Rn I X0 /
                               n
                         j 2Z R

since Fourier transformation is bounded operator from L1 .Rn I X1 / to Cb0 .Rn I X1 /,
cf. Theorem 2.43. Therefore it only remains to interchange the summation and in-
tegration in last term above provided that x … supp f . But this can be done since
P
   j 2Z kj .z/ converges absolutely and uniformly on every closed subset of R n ¹0º
                                                                                 n

as shown above. Hence (5.7) follows.
   If X0 D H0 ; X1 D H1 are Hilbert spaces, then the Fourier transformation is an
isomorphism on L2 .Rn I Hj /, j D 1; 2, due to Theorem 2.47, and m.Dx / extends to
a bounded linear operator from L2 .Rn I H0 / to L2 .Rn I H1 / because of:
                                     Z
           km.Dx /f kL2
                        2 .Rn IH /
                                1
                                   D     km./fO./kH 2
                                                        1
                                                          d̄
                                       n
                                      RZ

                                   C      kfO./kH
                                                  2
                                                    0
                                                                  2
                                                      d̄ D C kf kL 2 .Rn IH / ;
                                                                            0
                                         Rn

where we have used (5.6).
  Hence we are in the position to apply Theorem 5.5 with p0 D 2 since (5.8) and
Lemma 5.2 imply (5.2). Therefore m.Dx / extends to a bounded linear operator from
Lp .Rn I H0 / to Lp .Rn I H1 / for all 1 < p  2. In order to get the statement for
2 < p < 1 we argue again by duality. Because of
          Z                                 Z
              .m.Dx /f .x/; g.x//H1 dx D         .m./fO./; g.//
                                                              O    H1 d̄
           Rn                                 Rn
                                            Z
                                          D      .fO./; m./ g.//
                                                                O   H0 d̄
                                              Rn
                                            Z
                                          D      .f .x/; m .Dx /g.x//H0 dx
                                                Rn

where m ./ D m./ 2 L.H1 ; H0 / denotes the adjoint of m./ for all  2 Rn .
Here we have used (2.19). Now m ./ satisfies again (5.6) with H0 ; H1 interchanged.
Section 5.4 Kernel Representation of a Pseudodifferential Operator                 133

Thus we can apply the first part to conclude that m .Dx / is a bounded linear operator
          0                 0
from Lp .Rn I H1 / to Lp .Rn I H0 / for all 2 < p < 1 and p1 C p10 D 1. Now we use
that for every f 2 Lp .Rn I H /, 1  p < 1, and any Hilbert space H
                                                   ˇZ                      ˇ
                                                   ˇ                       ˇ
            kf kLp .Rn IH / D         sup          ˇ   .f .x/; g.x//H dx ˇˇ ;
                                        0
                                                   ˇ
                              g2Lp .Rn IH /;kgkp0 D1         Rn


where 1 < p 0  1 such that p1 C p10 D 1. Here “ ” follows from the Hölder
inequality and the Cauchy–Schwarz inequality for .  ;  /H . Moreover, “” can be
shown by choosing
                           ´
                                         p2
                             f .x/kf .x/kH     if f .x/ ¤ 0;
                    g.x/ D
                             0                 else:
Therefore we can conclude as in the scalar case that
                                                   ˇZ                             ˇ
                                                   ˇ                              ˇ
 km.Dx /f kLp .Rn IH1 / D            sup           ˇ
                                                   ˇ    .m.Dx /f .x/; g.x//H1 dx ˇˇ
                              p0
                              g2L  n                  n
                                        .R IH1 /WkgkLp0 D1      R

               sup               kf kLp .Rn IH0 / km .Dx /gkLp0 .Rn IH0 /
      g2Lp0 .Rn IH1 /WkgkLp0 D1

   km .Dx /kL.Lp0 .Rn IH1 /;Lp0 .Rn IH0 // kf kLp .Rn IH0 /
for all f 2 S.Rn I H0 /. Since S.Rn I H0 / is dense in Lp .Rn I H0 /, (5.9) follows in
the case 2 < p < 1.


5.4 Kernel Representation of a Pseudodifferential
    Operator
A classical theorem due to Schwartz states that for every continuous linear operator
                                       T W S.Rn / ! S 0 .Rn /
there is a unique K 2 S 0 .Rn  Rn / such that
         hT u; viS.Rn / D hK; u ˝ viS.Rn Rn /          for all u; v 2 S.Rn /;   (5.11)
where .u ˝ v/.x; y/ D u.x/v.y/, cf. e.g. [36, Corollary toRTheorem 51.6]. Here
K 2 S 0 .Rn  Rn / is called kernel of T . Formally “T u.x/ D Rn K.x; y/u.y/dy”.
   Obviously, this result applies to pseudodifferential operators since p.x; Dx /W
S.Rn / ! S.Rn / S 0 .Rn / for p 2 S1;0   m .Rn  Rn / and m 2 R arbitrary.

   For the case that p 2 S1;0 .R  R / with m  n  1, we have seen in the proof
                           m    n      n

of Lemma 3.37 that
                            Z
             p.x; Dx /f D       k.x; x  y/f .y/dy for all f 2 S.Rn /;
                                  Rn
134                        Chapter 5 Non-Translation Invariant Singular Integral Operators


where k.x; z/ D F71  !z
                          Œp.x; /.z/ is a continuous function in z 2 Rn . This shows
that in this case the kernel of T D p.x; Dx / due to (5.11) is the continuous function

                      K.x; y/ D k.x; x  y/ for all x; y 2 Rn :

In general the kernel of a pseudodifferential operator does not have to be continuous.
For example if p.x; / D 1 and therefore p.x; Dx / D I , the kernel is the distribution
K 2 S 0 .Rn  Rn / given by
                                  Z
          hK; u ˝ viS.Rn Rn / D        u.x/v.x/dx for all u; v 2 S.Rn /:
                                      Rn

Formally “K.x; y/ D ı0 .x  y/” and

  p.x; Dx /u.x/ D ı0  u.x/ WD hı0 ; u.x  /iS.Rn / D u.x/        for all u 2 S.Rn /:

The main result of this section gives a precise statement of the form of the Schwartz
kernel of a pseudodifferential operator away from the diagonal ¹.x; x/ W x 2 Rn º.
                        m .Rn  Rn /, m 2 R. Then there is a smooth function
Theorem 5.12. Let p 2 S1;0
kW R  .R n ¹0º/ ! C such that
    n    n

                      Z
      p.x; Dx /u.x/ D      k.x; x  y/u.y/ dy for all x … supp u      (5.12)
                             Rn

for all u 2 S.Rn /. Moreover, for every ˛; ˇ 2 N0n ; N 2 N0 , k satisfies
                         8
                         ˆ             nmj˛j hziN
                         <C˛;ˇ ;N jzj                    if n C m C j˛j > 0;
      j@ˇx @˛z k.x; z/j  C˛;ˇ ;N .1 C jlog jzjj/hziN   if n C m C j˛j D 0;       (5.13)
                         :̂
                            C˛;ˇ ;N hziN                if n C m C j˛j < 0

uniformly in x; z 2 Rn ; z ¤ 0. In particular, we have that
                                    Z
           hp.x; Dx /u; viS.R / D
                              n               k.x; x  y/u.y/v.x/d.x; y/;
                                       Rn Rn

for all u; v 2 S.Rn / with supp u\supp v D ; and the Schwartz kernel K 2 S 0 .Rn 
Rn / of p.x; Dx / is a smooth function on ¹.x; y/ 2 Rn  Rn W x ¤ yº.
   For the following we need a dyadic partition of unity on Rn , which can be con-
structed as follows: Let '0 2 C01 .Rn / be such that '0 ./ D 1 for jj  1 and
'0 ./ D 0 for jj 2. Moreover, let 'j ./ D '0 .2j /  '0 .2j C1 / for j 2 N.
Then

  supp 'j  ¹ 2 Rn W 2j 1  jj  2j C1 º       for all j 2 N;    supp '0  B2 .0/;
Section 5.4 Kernel Representation of a Pseudodifferential Operator                                135

and
                            1
                            X                X
                                             k
                                  'j ./ D          'j ./ D '0 .2k / D 1
                           j D0              j D0

for  2 Rn and k 2 N such that jj  2k . Hence .'j /j 2N0 , is a partition of unity
on Rn subordinated to the dyadic rings ¹ 2 Rn W 2j 1  jj  2j C1 º, j 2 N, and
B2 .0/.

Remark 5.13. The asymptotic behavior of a function f ./ as jj ! 1 can be de-
scribed with the aid of this partition of unity an alternative way as follows:

        jf ./j  C him           ,       sup j'j ./f ./j  C 0 2j m        for all j 2 N0
                                          2Rn


where m 2 R and C 0 > 0 does not depend on j , cf. Exercise 5.28.
                   1 .Rn  Rn / since ' 2 C 1 .Rn /. Moreover,
  Obviously, 'j 2 S1;0                  j   0


        X
        N
               'j ./ D '0 .2N / !N !1 1 pointwise for all  2 Rn and
        j D0

        X
        N
               @˛ 'j ./ !N !1 0                          uniformly for all  2 Rn if ˛ ¤ 0
        j D0

since for every  2 Rn there are at most two non-zero terms in the sums and

         @˛ 'j ./ D 2j˛j.j 1/ @˛ '1 .2j C1 / for all ˛ 2 N0n ; j 2 N:                    (5.14)

Hence
                 1
                 X                                  1
                                                    X
                        'j ./fO D fO      and             'j .Dx /f D f      in S.Rn /
                 j D0                               j D0

            P
since j jND0 'j ./fO  fOj00k;S !N !1 0 for all k 2 N by Lebesgue’s theorem, where
j  j00k;S , k 2 N, is the equivalent sequence of semi-norms on S.Rn / which was defined
in Corollary 3.47 by replacing k  k1 with k  k2 .
    With the aid of the dyadic decomposition we decompose a pseudodifferential oper-
ator as
                                   1
                                   X                                 1
                                                                     X
                p.x; Dx /f D              p.x; Dx /'j .Dx /f D              pj .x; Dx /f        (5.15)
                                   j D0                              j D0
136                          Chapter 5 Non-Translation Invariant Singular Integral Operators

                                                       1 .Rn  Rn / and the series
for all f 2 S.Rn /, where pj .x; / D p.x; /'j ./ 2 S1;0
converges in S.Rn / since p.x; Dx /W S.Rn / ! S.Rn / is continuous. Moreover, since
pj .x; / is compactly supported in ,
                                       Z
                      pj .x; Dx /f D     kj .x; x  y/f .y/dy;              (5.16)
                                                    Rn

where kj .x; z/ D F71 Œp .x; /.z/, similarly as in the proof of Lemma 3.37.
                     !z j

                     m .Rn  Rn /, m 2 R, and let k .x; z/ be defined as above.
Lemma 5.14. Let p 2 S1;0                           j
Then

   j@ˇx @˛z kj .x; z/j  C˛;ˇ ;M jzjM 2j.nCmM Cj˛j/                   for all z ¤ 0; j 2 N0   (5.17)

and all ˛; ˇ 2 N0n, M 2 N0 , where C˛;ˇ ;M does not depend on j 2 N0 and z ¤ 0.

Proof. First of all,
                                                Z
                  z  @ˇx Dz˛ kj .x; z/ D                eix D Œ ˛ @ˇx pj .x; /d̄ 
                                                    Rn

for all ˛; ˇ; 2 N0n. We now make direct estimates on the above integral. Firstly,
the integrand is supported in the ball ¹jj  2j C1 º, which has volume bounded by
a multiple of 2nj . Secondly, since the support is even contained in the set ¹2j 1 
jj  2j C1 º (when j ¤ 0) and c2j  hi  C 2j if 2j 1  jj  2j C1 ,
                                     !
     ˛ ˇ
                         X                0                        0
jD Œ @x pj .x; /j             0
                                      jD . ˛ @ˇx p.x; //jjD 'j ./j
                           0 0 
                                       X                         0                                 0
                          C˛;ˇ ;            himCj˛jj j ¹2j 1 jj2j C1 º ./  2j.jjj j/
                                     0 0 
                            0       j.mCj˛jjj/
                          C˛;ˇ ; 2

                                          ˇ                      mCj˛j
due to the symbol estimates of  ˛ @x p.x; / 2 S1;0                     .Rn  Rn /. Hence

         jz  Dxˇ Dz˛ kj .x; z/j  C˛;ˇ ; 2j.nCmCj˛jM /                  whenever j j D M:

Taking the maximum over all            with j j D M , gives (5.17), and proves the lemma.


Proof of Theorem 5.12. First of all, because of (5.15) and (5.16)
                                              1 Z
                                              X
                       p.x; Dx /u.x/ D                       kj .x; x  y/u.y/ dy               (5.18)
                                                    n
                                              j D0 R
Section 5.4 Kernel Representation of a Pseudodifferential Operator                             137

for all x 2 Rn ; u 2 S.Rn /. We will prove (5.12) and (5.13) by showing that
                                         1
                                         X
                                                @˛z @ˇx kj .x; z/
                                        j D0

converges absolutely and uniformly with respect to .x; / 2 Rn  .Rn n B" .0// for
every " > 0 to a function k.x; z/ satisfying (5.13).
  First let 0 < jzj  1. Then we split the sum into
                   X                              X
                         @˛z @ˇx kj .x; z/ and        @˛z @ˇx kj .x; z/:
                    2j jzj1                              2j >jzj1

In order to estimate the first sum, we use Lemma 5.14 with M D 0 and obtain

                                                bld.jzj1
         X                                          X /c
                   j@˛z @ˇx kj .x; z/j  C˛;ˇ               2j.nCmCj˛j/
      2j jzj1                                    j D0
                                     8
                                               .mCnCj˛j/
                                     <C˛;ˇ jzj
                                     ˆ                      if m C n C j˛j > 0;
                                                        1
                                     C˛;ˇ .1 C jlog jzj j/ if m C n C j˛j D 0;
                                     :̂
                                       C˛;ˇ                 if m C n C j˛j < 0

where ld D log 2 . For the second term we use Lemma 5.14 with M > n C m C j˛j
and estimate
           X                                                        1
                                                                    X
                     j@˛z @ˇx kj .x; z/j  C˛;ˇ jzjM                         2j.nCmCj˛jM /
        2j >jzj1                                         j Dbld.jzj1 /cC1

                                       C˛;ˇ jzj.nCmCj˛j/ :

Finally, if jzj      1, we choose M > max.n C m C j˛j; N / in Lemma 5.14 to conclude
            1
            X                                               1
                                                            X
                   j@˛z @ˇx kj .x; z/j  C˛;ˇ ;M jzjM              2j.nCmCj˛jM /
            j D0                                            j D0
                                                      M       0
                                      C˛;ˇ ;M jzj           C˛;ˇ;M jzjmnj˛jN :
       P
Hence j1D0 kj .x; z/ converges absolutely and uniformly with respect to .x; / 2
Rn  .Rn n B" .0// for every " > 0 to a function k.x; z/ satisfying (5.13). Using the
uniform convergence and (5.18), we conclude that (5.12) holds for all x 2 Rn with
dist.x; supp u/ " for arbitrary " > 0. Hence (5.12) follows for all x … supp u.

   In the case m < 0, we can get a kernel representation for p.x; Dx / without the
restriction “x … supp f ”. (I.e., including the diagonal ¹.x; x/ W x 2 Rn º.)
138                          Chapter 5 Non-Translation Invariant Singular Integral Operators


Theorem 5.15. Let p 2 S1;0
                        m .Rn  Rn / with m < 0. Then there is a smooth function

kW Rn  .Rn n ¹0º/ ! C such that k.x;  / 2 L1 .Rn / for all x 2 Rn and
                   Z
   p.x; Dx /u.x/ D     k.x; x  y/u.y/ dy for all x 2 Rn ; u 2 S.Rn /: (5.19)
                        Rn
Moreover, for every ˛; ˇ 2 N0n ; N 2 N0 , k satisfies (5.13).
Proof. See Exercise 5.27.

Corollary 5.16. Let p 2 S1;0
                         m
                             .Rn  Rn / with m < 0. Then there is some C > 0 such
that
        kp.x; Dx /f kLq .Rn /  C kf kLq .Rn /     for all f 2 S.Rn /; 1  q  1:
Proof. Let k be as in Theorem 5.15 and let g.z/ WD supx2Rn jk.x; z/j for all z ¤ 0.
Because of (5.13), we have that
                  Z                          Z
    kgkL1 .Rn / D      sup jk.x; z/j dz  C      jzjnm .1 C jzj/N dz < 1
                     Rn x2Rn                        Rn

since n  m > n, where N is chosen such that m  N < 0. Hence
                        Z
      jp.x; Dx /u.x/j    g.x  y/ju.y/j dy for all x 2 Rn ; u 2 S.Rn /:
                              Rn
Hence
           kp.x; Dx /ukLp .Rn /  kg  jujkLp .Rn /  kgkL1 .Rn / kukLp .Rn /
for all u 2 S.Rn / due to (2.5).

   Note that in the statement of the corollary the limit cases q D 1; 1 are included.
On the other hand, it is assumed that p is of negative order. In the case of a zero order
pseudodifferential operator, we will show boundedness on Lq .Rn / for all 1 < q < 1
in the next section.
   In the case m D 1, the kernel is even smooth:
                           1
Theorem 5.17. Let p 2 S1;0    .Rn  Rn / and let k be as in Theorem 5.15. Then k
can be extended to a smooth function KW Rn  Rn ! C such that for any ˛; ˇ 2 N0n ,
N 2 N0 there is some C˛;ˇ ;N > 0 such that

               j@˛x @ˇz K.x; z/j  C˛;ˇ ;N .1 C jzj/N     for all x; z 2 Rn :       (5.20)
Here
                   K.x; z/ D F71
                                !z Œp.x; /.z/       for all x; z 2 Rn :
Moreover, p.x; Dx / is a smoothing operator in the sense that
                              p.x; Dx /W S 0 .Rn / ! C 1 .Rn /:                      (5.21)
Section 5.4 Kernel Representation of a Pseudodifferential Operator                    139

                                                                         1 .Rn 
Proof. First of all, p.x;  / 2 S.Rn / for every fixed x 2 Rn since p 2 S1;0
Rn /. Hence

                   K.x; z/ WD F 1 Œp.x;  /.z/    for all x; z 2 Rn

is well-defined and K.x;  / 2 S.Rn / for all x 2 Rn . Now, if

                     kj .x; z/ D F71
                                    !z Œp.x; /'j ./;    j 2 N0 ;

are as in the proof of Theorem 5.12, then
                                  X
                       K.x;  / D      kj .x;  / for all x 2 Rn ;
                                  j 2N0

where the series converges in S.Rn / for every fixed x 2 Rn since p.x;  / 2 S.Rn /
for every fixed x 2 Rn . Hence
                       1 Z
                       X                                  Z
    p.x; Dx /u.x/ D              kj .x; x  y/u.y/ dy D          K.x; x  y/u.y/ dy
                             n                              Rn
                       j D0 R

for all x 2 Rn and u 2 S.Rn / by Lebesgue’s theorem on dominated convergence,
where kj are as above. Since also
                     Z
     p.x; Dx /u.x/ D      k.x; x  y/u.y/ dy for all x … supp u; u 2 S.Rn /;
                         Rn

k.x; z/ D K.x; z/ for all x 2 Rn ; z ¤ 0. Hence (5.20) follows from Theorem 5.12
since (5.13) holds for any m 2 R. (See also Exercise 5.29.)
   In order to prove (5.21) let f 2 S 0 .Rn /. Then there is some N 2 N such that
f WD hxi2N hDx i2N f 2 L2 .Rn /, cf. Exercise 2.65. Moreover, let .f"0 /0<"1 
  0

C01 .Rn / be such that f"0 !"!0 f 0 in L2 .Rn /. Hence

                   f" WD hDx i2N .hi2N f"0 / !"!0 f       in S 0 .Rn /;

where f" 2 C01 .Rn /     S.Rn /. Therefore
                              Z
            p.x; Dx /f" .x/ D      K.x; x  y/hDy i2N .hyi2N f"0 .y//dy
                                Rn
                              Z
                            D      .hDz i2N K/.x; x  y/hyi2N f"0 .y/dy;
                                 Rn

where the right-hand side converges uniformly on all compact subsets of Rn with
respect to x as " ! 0, since

        jhDz i2N k.x; x  y/j  CN hx  yin  CN0 hxijnj hyin 2 L2 .Rn /;
140                        Chapter 5 Non-Translation Invariant Singular Integral Operators


where hyin 2 L2 .Rn /, and f"0 !"!0 f in L2 .Rn /. This implies that
                           Z Z
         p.x; Dx /f .x/ D         .hDz i2N k/.x; x  y/hyi2N f 0 .y/dy;
                                Rn   Rn

since

           lim hp.x; Dx /f" ; 'i D hp.x; Dx /f; 'i      for all ' 2 C01 .Rn /:
           "!0

From this one can conclude p.x; Dx /f 2 C 1 .Rn / in a straight forward manner
using (5.20).

Remark 5.18. One can even characterize pseudodifferential operators of order 1
by the kernel representation with some K satisfying (5.20). More precisely, if
                       Z
            P u.x/ D       K.x; x  y/ dy for all u 2 S.Rn /; x 2 Rn ;
                          Rn
                                                        1 .Rn  Rn / is given by
where K satisfies (5.20), then P D p.x; Dx / where p 2 S1;0

                     p.x; / D Fz7! Œk.x; z/./   for all x;  2 Rn ;

cf. Exercise 5.30.


5.5 Consequences of the Kernel Representation
Theorem 5.19. Let p 2 S1;00 .Rn  Rn / and 1 < q < 1. Then p.x; D / extends to
                                                                 x
a bounded linear operator p.x; Dx /W Lq .Rn / ! Lq .Rn /.

Proof. Because of Theorem 3.36, we know that p.x; Dx / 2 L.L2 .Rn //. Moreover,
because of Theorem 5.12, there is a kernel k such that (5.12) holds and k satisfies

             j@˛x k.x; z/j  C jzjnj˛j   for all x 2 Rn ; z ¤ 0; j˛j D 1;

i.e., k satisfies (5.3). Hence k satisfies the Hörmander condition (5.2) due to Lem-
ma 5.2. Therefore p.x; Dx / satisfies all the assumptions of Theorem 5.5. Hence
p.x; Dx / extends to a bounded linear operator

                 p.x; Dx /W Lq .Rn / ! Lq .Rn /      for all 1 < q  2:

The statement for 2 < q < 1 is proved by duality similarly as in the proof of
Theorem 4.4 and Theorem 5.8. We use that
 Z                           Z
     p.x; Dx /f .x/g.x/ dx D     f .x/p .x; Dx /g.x/ dx for all f; g 2 S.Rn /
  Rn                                 Rn
Section 5.5 Consequences of the Kernel Representation                                         141

where p  2 S1;0
               0 .Rn  Rn / is as in Corollary 3.34. Now p  .x; D / extends to a
                                                                       x
                             0
bounded linear operator on Lq .Rn / by the first part, where q1 C q10 D 1. Hence
                                                 ˇZ                           ˇ
                                                 ˇ                            ˇ
   kp.x; Dx /f kLq .Rn / D         sup           ˇ
                                                 ˇ     p.x; Dx /f .x/g.x/ dx ˇˇ
                                    0                     Rn
                             g2Lq .Rn /WkgkLq0 D1

                                           sup       kf kLq .Rn / kp  .x; Dx /gkLq0 .Rn /
                             g2Lq0 .Rn /WkgkLq0 D1

                          kp  .x; Dx /kL.Lq0 .Rn // kf kLq .Rn /
for all f 2 S.Rn / due to (A.4). Thus p.x; Dx / extends to a bounded operator on
Lq .Rn /.

  As a direct consequence we obtain:
                          m .Rn  Rn / and let 1 < q < 1, m 2 R. Then p.x; D /
Theorem 5.20. Let p 2 S1;0                                                  x
extends to a bounded linear operator
                         p.x; Dx /W HqsCm .Rn / ! Hqs .Rn /:
Proof. The theorem is proved in the same way as Theorem 3.41. It also follows from
Exercise 3.68.

Remark 5.21. As in the case q D 2, cf. Theorem 3.41, one can observe from the
proof of Theorem 5.20 and its preceding results that there is a constant Cs;m;q > 0
                        .m/
that depends only on jpjk for some sufficiently large k 2 N such that
                     kp.x; Dx /kL.H sCm .Rn /;H s .Rn //  Cs;m;q :
                                            q         q

                                                                         0     >0
By the same argument as in Remark 3.40 one observes that there are some Cs;m;q
and k 2 N independent of p such that
                                                         0             .m/
                  kp.x; Dx /kL.H sCm .Rn /;H s .Rn //  Cs;m;q jpjk
                                        q         q

since the mapping p 7! p.x; Dx / is linear.
  With the aid of the kernel representation (5.12) one can prove many other refined
mapping properties of pseudodifferential operators. First of all we have:

Theorem 5.22. Let '; 2 Cb1 .Rn / such that dist.supp '; supp / > 0 and let
     m .Rn  Rn /. Then there is some k 2 C 1 .Rn  Rn / such that
p 2 S1;0
                          Z
'.x/.p.x; Dx /. f //.x/ D      k.x; x  y/f .y/ dy for all x 2 Rn ; f 2 S.Rn /;
                               Rn
where k satisfies (5.20) for any N 2 N, ˛; ˇ 2 N0n. In particular
                     '.x/p.x; Dx / .x/W S 0 .Rn / ! C 1 .Rn /:
142                          Chapter 5 Non-Translation Invariant Singular Integral Operators


Proof. By Theorem 3.18
          '.x/.p.x; Dx /. f //.x/ D q.x; Dx /f .x/           for all f 2 S.Rn /;
              1
where q 2 S1;0   .Rn  Rn /. Moreover, due to Theorem 5.17, there is some smooth
     n  Rn ! C such that (5.20) holds,
kW R
                     Z
         q.x; Dx / D    k.x; x  y/f .y/ dy for all x 2 Rn ; f 2 S.Rn /;
                        Rn

and q.x; Dx   /W S 0 .Rn / ! C 1 .Rn /.

   As a direct consequence we obtain that pseudodifferential operators are pseudo-
local and elliptic pseudodifferential operators are hypo-elliptic. To this end we need
the notion of the singular support of distribution:

Definition 5.23. Let F 2 S 0 .Rn / and let U  Rn be open. Then F is smooth on U
if there is some f 2 C 1 .U / such that
                           Z
                  hF; 'i D      f .x/'.x/ dx for all ' 2 C01 .U /:
                                Rn

Moreover, the singular support of F is defined by

   sing supp F D ¹x 2 Rn W there is no " > 0 such that F is smooth on B" .x/º :

   Consequently, sing supp F is the smallest set such that F is smooth on Rn n
sing supp F .

Definition 5.24. Let P W S 0 .Rn / ! S 0 .Rn / be a linear operator. Then P is called
pseudo-local if

                  sing supp P u  sing supp u for all u 2 S 0 .Rn /:

Moreover, P is called hypo-elliptic if

                  sing supp P u D sing supp u for all u 2 S 0 .Rn /:

                             m .Rn  Rn / for some m 2 R. Then p.x; D / is pseudo-
Theorem 5.25. Let p 2 S1;0                                             x
local. If p is additionally elliptic, then p.x; Dx / is hypo-elliptic.

Proof. Let u 2 S 0 .Rn / and let x … sing supp u. Then by the definition of sing supp u
there is some " > 0 such that u is smooth on B" .x/, i.e., there is some v 2 C 1 .B" .x//
such that
                          Z
                hu; 'i D       v.y/'.y/ dy for all ' 2 C01 .B" .x//:
                              Rn
Section 5.6 Final Remarks and Exercises                                             143

Now let ; 2 C01 .B" .x// with           1 on B"=2 .x/ and       1 in supp . Then
 u D v 2 C01 .Rn / and

   .x/p.x; Dx /u.x/ D      .x/.p.x; Dx /. u//.x/ C      .x/.p.x; Dx /..1  /u//.x/
                      D    .x/.p.x; Dx /. v//.x/ C      .x/.p.x; Dx /..1  /u//.x/

for all x 2 Rn , where p.x; Dx /. v/ 2 S.Rn / since v 2 C01 .Rn /. Moreover,
because of Theorem 5.22,

                           p.x; Dx /..1  /u/ 2 C 1 .Rn /;

Therefore p.x; Dx /u is smooth on B"=2 .x/ since       1 on B"=2 .x/. Hence

                              x … sing supp p.x; Dx /u;

which shows that sing supp p.x; Dx /u  sing supp u since x … sing supp u was
arbitrary.
                                                                       m .Rn  Rn /
  Now, if p is additionally elliptic, then there is a parametrix q1 2 S1;0
such that

                       q1 .x; Dx /p.x; Dx / D I C r1 .x; Dx /
            1 .Rn  Rn / because of Proposition 3.26. This implies
where r1 2 S1;0

                     u D q1 .x; Dx /p.x; Dx /u  r1 .x; Dx /u;

where

              sing supp q1 .x; Dx /p.x; Dx /u  sing supp p.x; Dx /u

by the first part and r1 .x; Dx /u 2 C 1 .Rn / because of Theorem 5.17.


5.6 Final Remarks and Exercises
5.6.1 Further Reading
Section 5.2 is based on the results of [32, Chapter I], where an even more general
result is presented. Moreover, many further results on singular integral operators, in-
cluding the T 1-theorem and mapping properties of pseudodifferential operators can
be found in [32]. The T 1-theorem and singular integral operators in general are also
discussed in Duoandikoetxea [5]. For further results on the Mikhlin multiplier theo-
rem for Banach-space-valued functions, we refer to Weis [42] and Denk et al. [4] and
the references given there. A further discussion of hypo-ellipticity can be found in the
books by Kumano-Go [21], Jacob [18], and Hörmander [12, 13].
144                         Chapter 5 Non-Translation Invariant Singular Integral Operators


5.6.2 Exercises

      Exercise 5.26. Let T 2 L.Lp0 .Rn // be as in Assumption 5.1. Show with the
      aid of the results in Section 4.7 that T 2 L.H 1 .Rn /; L1 .Rn //.

      Exercise 5.27 (Kernel of a PsDOs of Negative Order).
                m .Rn  Rn / with m < 0. Prove that
      Let p 2 S1;0
                            Z
         p.x; Dx /f .x/ D            k.x; x  y/f .y/dy        for all x 2 Rn ; f 2 S.Rn /;
                                Rn

      where k satisfies (5.13).
      Hint. Prove that
                                         1
                                         X
                                              sup jkj .x; z/j
                                                  n
                                        j D0 x2R

      converges in L1 .Rn / with respect to z, where kj are as in Section 5.4.

      Exercise 5.28 (Properties of the Dyadic Partition of Unity).
      Let .'j /j 2N0 be the dyadic partition of unity on Rn from Section 5.4.
       1. Make a sketch of 'j , j 2 N0 for n D 1.

       2. Let f W Rn ! C, m 2 R. Prove that there is some constant C > 0 such that

                                   jf ./j  C him ;       for all  2 Rn

           if and only if there is some C 0 > 0 such that

                           sup j'j ./f ./j  C 0 2j m         for all j 2 N0 :
                           2Rn


       3. Prove that for all ˛ 2 N0n there is some constant C˛ > 0 such that

                                  j@˛ 'j ./j  C˛ min.2j j˛j ; hij˛j /

           for all j 2 N0 and  2 Rn .

       4. Prove that for all f 2 S 0 .Rn / and p 2 S1;0
                                                    m
                                                        .Rn  Rn /, m 2 R,
                                              1
                                              X
                           p.x; Dx /f D               pj .x; Dx /f   in S 0 .Rn /
                                              j D0

           where pj .x; / D p.x; /'j ./ for all x;  2 Rn , j 2 N0 .
Section 5.6 Final Remarks and Exercises                                      145


   Exercise 5.29. Let p 2 S1;0m .Rn / with m < n  N for some N 2 N .
                                                                            0
   Prove that the kernel k in Theorem 5.12 can be extended (uniquely) to some
   K 2 C N .Rn  Rn /

   Exercise 5.30. Let K satisfy (5.20) for any N 2 N, ˛; ˇ 2 N0n , and let
                      Z
            P u.x/ D      K.x; x  y/ dy for all u 2 S.Rn /; x 2 Rn :
                         Rn
                                       1 .Rn  Rn / is given by
   Prove that P D p.x; Dx / where p 2 S1;0

                    p.x; / D Fz7! Œk.x; z/./   for all x;  2 Rn :
                         Part III


Applications to Function Space and Differential Equations
Chapter 6
Introduction to Besov and Bessel Potential Spaces

Summary
The purpose of this chapter is to give a brief introduction to the modern theory of
function spaces. More precisely, we study the scales of Besov and Bessel potential
spaces, which generalize both the classical Hölder spaces and the Sobolev spaces.
To this end a suitable Fourier analytic characterization using a dyadic partition unity
in Fourier space is used. We study the relations between Besov and Bessel poten-
tial spaces and their relation to Sobolev and Hölder spaces. Finally, boundedness of
pseudodifferential operators on these spaces is shown.


Learning targets
  Understand the relations between Besov and Bessel potential space.
  Learn about Fourier analytic characterizations of weak derivatives and Hölder
   continuity.
  Get some basic ideas from the modern theory of function spaces.


  In this chapter the Hilbert-space-valued Mikhlin multiplier theorem (Theo-              i
  rem 5.8) will be needed. Moreover, for Section 6.6 the results of Chapter 3
  and Section 5.4 are needed.



6.1 Motivation
In this section we will address the following question:
       How to measure regularity of functions?
There are two classical approaches:
 1. Hölder Spaces C s .Rn /: In this case regularity is measured by differences, resp.
    the modulus of continuity of a function f W Rn ! C defined by
                        !.t I f / WD      sup        jf .x C h/  f .x/j:
                                       x2Rn ;jhjt

     Then f 2 C s .Rn /, 0 < s < 1, if and only if f W Rn ! C is bounded and there
     is a constant C > 0 such that
                              !.t I f /  C t s       for all t > 0:
150                            Chapter 6 Introduction to Besov and Bessel Potential Spaces


 2. Sobolev Spaces Wpm .Rn /: In this case regularity is measured in terms of (gen-
    eralized) derivatives in Lp -spaces: f 2 Wpm .Rn /, m 2 N0 , 1  p  1 if and
    only if @˛x f 2 Lp .Rn / for all j˛j  m.
Moreover, we have introduced:
 3. Bessel Potential Spaces Hps .Rn /: In this case regularity is measured through a
    certain decay on the Fourier transform side: Recall f 2 Hps .Rn /, s 2 R; 1 <
    p < 1, if and only if
                                                    s
                       hDx is f D F 1 Œ.1 C jj2 / 2 fO./ 2 Lp .Rn /:

We have already seen in Lemma 2.41 that Hpm .Rn / D Wpm .Rn / for m 2 N0 and
p D 2. In Theorem 6.8 below it will be proven that this is also the case if 1 < p <
1. Hence the Bessel potential spaces are a generalization of the Sobolev spaces for
1 < p < 1. But the following questions arise:
      How are Hölder spaces and Bessel potential spaces related?
      How is Hölder continuity related to decay properties on the Fourier transform
      side?


6.2 A Fourier-Analytic Characterization of Hölder
    Continuity
First of all, we recall from Theorem 2.1:
 1. If f W Rn ! C is a continuously differentiable function such that f 2 L1 .Rn /
    and @xj f 2 L1 .Rn /, then
                     F Œ@xj f  D i j F Œf  D i j fO./ for all  2 Rn :          (6.1)

 2. If f 2 L1 .Rn / such that xj f 2 L1 .Rn /, then fO./ is continuously partially
    differentiable with respect to j and
                                @j fO./ D F Œixj f .x/./:                       (6.2)

These identities show the duality between differentiability of f and decay of fO./ as
jj ! 1 as well as decay of f for jxj ! 1 and differentiability of fO.
   In the following we will use a dyadic partition of unity 'j ./, j 2 N0 (on Rn ).
This is a partition of unity 'j ./, j 2 N0 , on Rn with 'j 2 C01 .Rn / such that
              supp 'j  ¹ 2 Rn W 2j 1  jj  2j C1 º         for all j     1:     (6.3)
The partition of unity can be constructed such that supp '0           B2 .0/, 'j ./ D
'1 .2j C1 / for all j 1 and (6.3) holds, cf. Section 5.4 for details. Then we have
            j@˛ 'j ./j  C k@˛ '1 kL1 .Rn / 2j˛jj   for all ˛ 2 N0n ; j    1:    (6.4)
Section 6.2 A Fourier-Analytic Characterization of Hölder Continuity                151

  Moreover, we note that
                           1
                           X
                f .x/ D          'j .Dx /f .x/    for all x 2 Rn ; f 2 S.Rn /
                          j D0

and

                         'j .Dx /f D F 1 Œ'j ./fO./ D 'Lj  f

for all f 2 S.Rn /, j 2 N0 , where 'Lj D F 1 Œ'j  and

               'Lj .x/ D 2.j 1/n 'L1 .2j 1 x/    for all j 2 N and x 2 Rn :      (6.5)

Furthermore

                           'j .Dx /f D F 1 Œ'j ./fO 2 S 0 .Rn /

is well-defined for all f 2 S 0 .Rn /, j 2 N0 , and one has 'j .Dx /f 2 C 1 .Rn / due
to Remark 2.33. It is easy to check that for f 2 Lp .Rn /, 1  p  1, we have

                        'j .Dx /f .x/ D 'Lj  f .x/     for all x 2 Rn :

Finally, we note that
                                                           
            'j .Dx /f D 'j 1 .Dx / C 'j .Dx / C 'j C1 .Dx / 'j .Dx /f             (6.6)

for all f 2 S.Rn /; j 2 N0 , since 'j 1 C 'j C 'j C1  1 on supp 'j (where
'1  0).
   Using this decomposition, we obtain the following characterization of Hölder con-
tinuous functions.

Theorem 6.1. Let 0 < s < 1. Then f 2 C s .Rn / if and only if f 2 L1 .Rn / and

                        kf kCs WD sup 2js k'Lj  f kL1 .Rn / < 1:
                                     j 2N0

Moreover, k  kCs is an equivalent norm on C s .Rn /.

Proof. First let f 2 C s .Rn /. Then

                           sup jf .x  y/  f .x/j  kf kC s jyjs
                          x2Rn

for all y 2 Rn . Because of (6.5), we have

              k'Lj kL1 .Rn /  C;     kr 'Lj kL1 .Rn /  C 2j   for all j 2 N0 :   (6.7)
152                                 Chapter 6 Introduction to Besov and Bessel Potential Spaces


Moreover,
                    Z                    Z
                          'Lj .y/dy D         'L1 .y/dy D F Œ'L 1 .0/ D '1 .0/ D 0
                     Rn                  Rn

for all j     1. For the following we denote        D F 1 Œ'1 .2/ and                     2j .x/   D
  j n .2j x/ for all x 2 Rn , j 2 N. Hence
2
                                  Z
                  'j .Dx /f .x/ D      f .x  y/ 2j .y/dy
                                     n
                                  ZR
                                D      .f .x  y/  f .x// 2j .y/dy                               (6.8)
                                             Rn
        R
since       Rn    2j .y/ dy D 0. Therefore
                                              Z
                 k'j .Dx /f k1  kf kC s            jyjs      2j .y/dy
                                                  Rn Z

                                 D 2js kf kC s               jzjs .z/dz D C 2js kf kC s
                                                         Rn

for all j 2 N and f 2 S.Rn /. The latter inequality implies kf kCs  C kf kC s since
also k'0 .Dx /f k1  C kf k1 .
   Conversely, let f 2 L1 .Rn / be such that kf kCs < 1. Now, if jyj  1,
                        X                                X
 f .x  y/  f .x/ D         .fj .x  y/  fj .x// C           .fj .x  y/  fj .x//;
                             2j jyj1                                 2j >jyj1

where fj D 'j .Dx /f . In order to estimate the first sum, we use the mean value
theorem to conclude that

                     jfj .x  y/  fj .x/j  jyjkrfj k1               for all x; y 2 Rn :          (6.9)

Moreover, since

                 @xk fj D @xk 'j 1 .Dx /fj C @xk 'j .Dx /fj C @xk 'j C1 .Dx /fj ;

due to (6.6) and

        k@xk 'l .Dx /gkL1 .Rn /  k@xk 'Ll kL1 .Rn / kgkL1 .Rn /  C 2l kgkL1 .Rn /

for general l 2 N0 , g 2 L1 .Rn /, we obtain
        X                                  X
 sup           jfj .x  y/  fj .y/j  C                          jyjkrfj k1
x2Rn
        2j jyj1                                    2j jyj1
                                                               X
                                               C jyj                 2j.1s/ kf kCs  C jyjs kf kCs :
                                                          2j jyj1
Section 6.3 Bessel Potential and Besov Spaces – Definitions and Basic Properties                153

The second sum can be simply estimated by
          X ˇ                       ˇ     X
    sup         ˇfj .x  y/  fj .y/ˇ  2                      kfj k1
   x2Rn
          2j >jyj1                               2j >jyj1
                                                               X
                                               2kf kCs                2js D C jyjs kf kCs
                                                           2j >jyj1

Altogether kf kC s  C kf kCs .

Remark 6.2. Because of (6.7) and (2.5), we get

        k'j .Dx /f kLp .Rn /  k'Lj kL1 .Rn / kf kLp .Rn /  C kf kLp .Rn / ;             (6.10)
                                                                         j
     kr'j .Dx /f kLp .Rn /  kr 'Lj kL1 .Rn / kf kLp .Rn /  C 2 kf kLp .Rn /             (6.11)

for any f 2 Lp .Rn /, 1  p  1, j 2 N0 .


6.3 Bessel Potential and Besov Spaces – Definitions and
    Basic Properties
Theorem 6.1 gives a motivation for the following definition of the Besov space
 s .Rn /.
Bpq

Definition 6.3. Let s 2 R; 1  p; q  1. Then the Besov space Bpq
                                                               s .Rn / is defined

by
                       s
                      Bpq .Rn / WD ¹f 2 S 0 .Rn / W kf kBpq
                                                         s
                                                            .Rn / < 1º;

where
                                X
                                 1                                  1
                                                                    q
                                                           q
             kf kBpq
                  s
                     .Rn / WD           2jsq k'j .Dx /f kLp .Rn /            if q < 1;
                                 j D0
                                   js
             kf kBpq
                  s
                     .Rn / WD sup 2 k'j .Dx /f kLp .Rn /                     if q D 1:
                                j 2N0


                                        s
   Here the exponent s is the order of Bpq .Rn /, p is called integration exponent, and
q is called summation exponent.

Remark 6.4. 1. The exponents s and p play the same role as for the Bessel po-
   tential space Hps .Rn / and the Sobolev space Wps .Rn / (if s 2 N0 ). The third
   exponent q measures the regularity of a function f 2 Bpq s
                                                              .Rn / on a finer scale
   than s as will be seen below.
154                                 Chapter 6 Introduction to Besov and Bessel Potential Spaces


 2. Because of Theorem 6.1, C s .Rn / D B11 s  .Rn / for 0 < s < 1. More generally,
    Cs .Rn / WD B11
                  s  .Rn /, s > 0, are called Hölder–Zygmund spaces.
 3. Note that f 2 Bpq
                   s .Rn / if and only if


                               .'j .Dx /f /j 2N0 2 `sq .N0 I Lp .Rn //:
      Here `sq .MI X/, M  Z, is the space of all X-valued sequences x D .xj /j 2M
      such that
                                   ´P                       1
                                    . j 2M .2js kxj kX /q / q if q < 1;
                   kxk`sq .MIX/ WD
                                    supj 2M 2js kxj kX        if q D 1:

      Moreover, we set `q .MI X/ WD `0q .MI X/. Of course .xj /j 2M 2 `sq .MI X/ if
      and only if .2js xj /j 2M 2 `q .MI X/.
 4. Using Plancherel’s theorem, it is not difficult to show that
                                             s
                                            B22 .Rn / D H2s .Rn /:
      The proof is left to the reader as an exercise, cf. Exercise 6.24. – But the state-
      ment will also follow from Corollary 6.13 below.
  Some simple relations between the Besov spaces are summarized in the following:

Lemma 6.5. Let s 2 R, 1  p; q1 ; q2  1, and let " > 0. Then
           s
          Bpq1
               .Rn / ,! Bpq
                         s
                           2
                             .Rn / if q1  q2 ;              sC"
                                                            Bp1  .Rn / ,! Bp1
                                                                           s
                                                                              .Rn /:
Proof. First of all, we have
          1
          X                               X1
                    q2          q2 q1            q       q
               kaj kX  sup kaj kX             kaj kX1  kak`q21 .N0 IX/ < 1
          j D0          j 2N0             j D0

for every a 2 `q1 .N0 I X/, if 1  q1  q2 < 1 which implies
               `q1 .N0 I X/ ,! `q2 .N0 I X/; `sq1 .N0 I X/ ,! `sq2 .N0 I X/             (6.12)
if 1  q1  q2  1. This yields the first embedding in the statement of the lemma.
   The second embedding follows from `sC"1 .N0 I X/ ,! `1 .N0 I X/ because of
                                                         s

                             1
                             X
k.aj /j 2N0 k`s1 .N0 IX/ D          2sj kaj kX
                             j D0
                             X
                              1
                                    2"j     sup 2.sC"/j kaj kX D C" k.aj /j 2N0 k`sC" .N IX/
                                                                                    1     0
                              j D0           j 2N0


for all .aj /j 2N0 2 `sC"
                      1 .N0 /.
Section 6.3 Bessel Potential and Besov Spaces – Definitions and Basic Properties     155

Remark 6.6. The lemma shows that q measures regularity of f on a finer scale
                                         s .Rn / ,! B s 0 .Rn / with arbitrary 1 
than s, meaning that, if s > s 0 , then Bpq 1          pq2
q1 ; q2  1. Here we note that sequences in `q1 .N0 / have to “decay faster to zero”
than sequences in `q2 .N0 / in some sense if q1 < q2 .
  Recall that the Bessel potential spaces Hps .Rn /, s 2 R, 1 < p < 1, are defined by
                                 ®                                  ¯
                   Hps .Rn / WD f 2 S 0 .Rn / W hDx is f 2 Lp .Rn /
                 kf kHps .Rn / WD khDx is f kLp .Rn / ;
                          1
where hi WD .1 C jj2 / 2 and
                    hDx is f D F 1 Œhis fO       for all f 2 S 0 .Rn /:
Moreover, we will often use
                              j@˛ his j  Cs;˛ .1 C jj/sj˛j                    (6.13)
for all ˛ 2 N0n and some Cs;˛ > 0, cf. (2.13).

Remark 6.7. By definition hDx is W Hps .Rn / ! Lp .Rn / is a linear isomorphism with
inverse hDx is . Since S.Rn / is dense in Lp .Rn / and hDx is W S.Rn / ! S.Rn /,
S.Rn / is dense in Hps .Rn / for any s 2 R, 1 < p < 1.
  As a consequence of the Mikhlin multiplier theorem we obtain:

Theorem 6.8. Let m 2 N0 and let 1 < p < 1. Then Hpm .Rn / D Wpm .Rn / with
equivalent norms.

Proof. We first prove the inclusion Hpm .Rn /  Wpm .Rn /. Let f 2 S.Rn /. Then
                                                      ˇ          
                 ˇ         1     ˇ O          1 .i /     m O
                @x f D F Œ.i / f ./ D F               hi f ./ :
                                                   him
Hence, in order to obtain
              k@ˇx f kLp .Rn /  Cp khDx im f kLp .Rn / D Cp kf kHpm .Rn /         (6.14)
                                                                             ˇ
for ˇ 2 N0n with jˇj  m, we apply Theorem 4.23 to mˇ ./ D .i/  him
                                                                       for all  2 Rn .
Therefore we have to verify (4.28) for mˇ . To this end, we use (6.13) and

                 j@˛ .i /ˇ j  C˛;ˇ jjjˇ jj˛j   for all  ¤ 0; ˛ 2 N0n :       (6.15)

Moreover, .1 C jj/mj˛j  jjjˇ jj˛j if jˇj  m. Therefore
                  j@˛ mˇ ./j  C˛;ˇ jjj˛j       for all  ¤ 0; ˛ 2 N0n         (6.16)
follows from (6.15), (6.13), and the following claim:
156                            Chapter 6 Introduction to Besov and Bessel Potential Spaces


Claim. Let s1 ; s2 2 R, N 2 N and let m1 ; m2 W Rn n ¹0º ! C be N -times continu-
ously differentiable satisfying
              j@˛ mj ./j  C jjsj j˛j    for all  ¤ 0; j˛j  N; j D 1; 2
                                             0 > 0 such that
for some C > 0. Then there is some C
                          j@˛ .m1 ./m2 .//j  C 0 jjs1 Cs2 j˛j                           (6.17)
for all j˛j  N and  ¤ 0.
Proof of Claim. The claim follows directly from the Leibniz formula.
  Because of (6.16), the conditions of Theorem 4.23 are satisfied and (6.14) fol-
lows for all jˇj  m, which proves Hpm .Rn / ,! Wpm .Rn / since S.Rn / is dense in
Hpm .Rn /.
  Hence it remains to prove Wpm .Rn /  Hpm .Rn / with continuous embedding. If
m D 2k, k 2 N0 , is even, then him D .1 C jj2 /k is a polynomial of degree m.
Therefore hDx im is a differential operator of order m and
                                  X
        khDx im f kLp .Rn /  C        k@˛x f kLp .Rn / for all f 2 Wpm .Rn /;
                                     j˛jm

which proves the embedding in this case.
  If m D 2k C 1, k 2 N0 , is odd, then
                              X n                    X
                                                       n
            m      m    1            j2      1     2k    j
         hi D hi           C             D     hi C       hi2k j ;
                       hi2         hi2     hi         hi
                                     j D1                           j D1

where hi2k and hi2k j are polynomials of degree at most 2k C 1. Hence
                             X X
                               n
  khDx im f kLp .Rn /  C                kmj .Dx /@˛x f kLp .Rn /         for all f 2 Wpm .Rn /;
                            j˛jm j D0

where m0 ./ D hi1 and mj ./ D j hi1 , j D 1; : : : ; n. Therefore it remains to
verify the Mikhlin condition (4.28) for mj ./. If j D 0, then (4.28) for m./ D m0 ./
follows from (6.13) with s D 1 because of hi1j˛j  jjj˛j. If j D 1; : : : ; n,
then (4.28) follows for m./ D mj ./ from (6.13) with s D 1, (6.15) with ˇ D ej ,
and (6.17).

  In order to get a sharp comparison of Besov and Bessel potential spaces we prove:

Theorem 6.9. Let s 2 R, 1 < p < 1. Then there are constants c; C > 0 such that
                          X
                           1                               1
                                                           2
       ckf kHps .Rn /             22js j'j .Dx /f .x/j2                   C kf kHps .Rn /
                                                               Lp .Rn /
                            j D0

for all f 2 Hps .Rn /.
Section 6.3 Bessel Potential and Besov Spaces – Definitions and Basic Properties       157

Remark 6.10. Because of the latter equivalent norm on Hps .Rn /, one defines more
                                      s .Rn /, s 2 R; 1 < p; q < 1, as
generally the Triebel–Lizorkin space Fpq
                    s
                  Fpq  .Rn / WD ¹f 2 S 0 .Rn / W kf kFpq
                                                      s
                                                         .Rn / < 1º;
                                 X1                           1
                                                               q
               kf kFpqs .Rn / WD      2qjs j'j .Dx /f .x/jq       p  n
                                                                       :
                                                                           L .R /
                                     j D0

Hence Theorem 6.9 shows that Hps .Rn / D Fp2
                                          s .Rn /. Finally, we note that


                   kf kFpq
                        s
                           .Rn / D .'j .Dx /f /j 2N Lp .Rn I`s .N0 // :q


We refer to the monographs [37, 39, 38, 40] for results on these spaces.

Proof of Theorem 6.9. First we will show that kf kFp2
                                                   s
                                                      .Rn /  C kf kHps .Rn / for all
f 2 Hp .R /. To this end we define a mapping
       s   n


                      QW S.Rn /       Lp .Rn / ! Lp .Rn I `2 .N0 //

by

       .Qg/.x/ WD .2js 'j .Dx /hDx is g.x//j 2N0 2 `2 .N0 / for all x 2 Rn :

Then

                 .Qg/.x/ D F71      O
                              !x Œm./g./ .x/               for all x 2 Rn ;

where m./ 2 L.C; `2 .N0 // is defined by

              m./a WD .2js 'j ./his /j 2N0 a         for all a 2 C;  2 Rn :

In order to show that Q extends to a bounded linear operator

                QW Lp .Rn / ! Lp .Rn I `2 .N0 // for all 1 < p < 1;                  (6.18)

we verify the condition of Theorem 4.23:
                                   1
                                   X
       k@˛ m./k2L.C;`2 .N // D          22js j@˛ .'j ./his /j2
                           0
                                   j D0

                                C˛;s 22js hi2s2j˛j supp 'j ./  C˛;s jj2j˛j

for all  ¤ 0, ˛ 2 N0n , where we have used that 2j 1  jj  2j C1 on supp 'j if
j 1 and

                          j@˛ .'j ./his /j  C˛;s hisj˛j
158                                 Chapter 6 Introduction to Besov and Bessel Potential Spaces


uniformly in j 2 N0 , which follows from (6.13), (6.4), and the product rule. Hence
(6.18) follows and therefore
                        s                               s
 kf kFp2
      s
         .Rn / D kQhDx i f kLp .Rn I`q .N0 //  C khDx i f kLp .Rn / D C kf kHps .Rn /

for all f 2 Hps .Rn /. Note that we have shown that
                                  e Hps .Rn / ! Lp .Rn I `sq .N0 //
                                  QW

is bounded, where
                   e D .2js QhDx is f /j 2N0 D .'j .Dx /f /j 2N0 :
                   Qf                                                                        (6.19)

Conversely, we define a mapping

                   RW S.Rn I `2 .N0 //            Lp .Rn I `2 .N0 // ! Lp .Rn /

by
                 1
                 X
     .Ra/.x/ D          2js e
                             'j .Dx /hDx is aj .x/         for all x 2 Rn ; a 2 S.Rn I `2 .N0 //:
                 j D0

Here e
     'j ./ D 'j 1 ./ C 'j ./ C 'j C1./ for all  2 Rn , j 2 N0 , where '1  0.
– Note that 'Qj ./'j ./ D 'j ./ for all  2 Rn since e
                                                        'j ./ D 1 on supp 'j . Then

                                   .Ra/.x/ D F71      Oj ./
                                                !x Œm./a

where m./ 2 L.`2 .N0 /; C/ is defined by
                           1
                           X
            m./a D               2js e
                                       'j ./his aj      for all .aj /j 2N0 2 `2 .N0 /:
                           j D0

Similarly, as before
                                   1
                                   X
  k@˛ m./k2L.`2 .N0 /;C/              22js j@˛ .'Qj ./his /j2
                                  j D0
                                          1
                                          X
                              C˛;s             22js hi2s2j˛j ¹2j 2jj2j C2 º C C ¹jj8º
                                         j D0
                                0
                              C˛;s jj2j˛j ;

where we have used that for each  2 Rn at most four terms in the sum above are
non-zero and that 22js  C his on supp e'j  ¹2j 2  jj  2j C2 º. Hence,
applying Theorem 4.23 once more, we obtain that R extends to a bounded operator

                 RW Lp .Rn I `2 .N0 // ! Lp .Rn / for all 1 < p < 1:
Section 6.3 Bessel Potential and Besov Spaces – Definitions and Basic Properties        159

Now we apply R to aj D 2js 'j .Dx /f , j 2 N0 . Then
                        1
                        X
                Ra D          2js e
                                   'j .Dx /hDx is 2js 'j .Dx /f D hDx is f
                       j D0

        P1                           P1
         j D0 e
              'j .Dx /'j .Dx /g D      j D0 'j .Dx /g D g for all g 2 S.R /. Thus
                                                                         n
since

        kf kHps .Rn / D khDx is f kLp .Rn / D kRakLp .Rn /  C kakLp .Rn I`2 .N0 //
                    D C k.2js 'j .Dx /f /j 2N0 kLp .Rn I`2 .N0 // D C kf kFp2
                                                                           s
                                                                              .Rn /


for all f 2 Hps .Rn /, which proves the lemma. – Finally, we note that the previous
estimates imply that

                              e Lp .Rn I `s2 .N0 // ! Hps .Rn /
                              RW

is bounded, where
                                                           1
                                                           X
                 e j /j 2N WD hDx is R.2js aj /j 2N D
                 R.a                                              e
                                                                  'j .Dx /aj          (6.20)
                          0                        0
                                                           j D0


and therefore RQ QQ D I on Hps .Rn /.

Remark 6.11. We note that the last proof shows that Hps .Rn / is a retract of the space
Lp .Rn I `s2 .N0 // due to the following definition:

Definition 6.12. A Banach space X is called a retract of a Banach space Y if there
are bounded linear operators RW Y ! X and QW X ! Y such that RQ D idX .

     e Q
  If R, e are defined by (6.19) and (6.20), then R eQ e D I on Hps .Rn / as seen above.
– We note that the mappings are independent of p and s. – Moreover, using the same
mappings R e and Qe it is easy to show that Bpqs .Rn / is a retract of `q .N I Lp .Rn //.
                                                                            0
This observation is important for characterizing the so-called real and complex inter-
polation spaces of Hps .Rn / and Bpq
                                   s
                                     .Rn /, cf. e.g. [3] or [37].

Corollary 6.13. Let 1 < p < 1, s 2 R. Then
                   s
                  Bpp .Rn / ,!Hps .Rn / ,! Bp2
                                            s
                                               .Rn /      if 1 < p  2;               (6.21)
                   s
                  Bp2 .Rn / ,!Hps .Rn / ,! Bpp
                                            s
                                               .Rn /      if 2  p < 1:               (6.22)

In particular, H2s .Rn / D B22
                            s
                               .Rn / for all s 2 R.
160                             Chapter 6 Introduction to Besov and Bessel Potential Spaces


Proof. The statements follows from Theorem 6.9 and the embeddings

             `q .N0 I Lp .Rn // ,! Lp .Rn I `q .N0 // if 1  q  p  1                                           (6.23)
               p        q   n            q    n    p
             L .N0 I ` .R // ,! ` .R I L .N0 // if 1  p  q  1;                                                (6.24)

as well as from (6.12). Here (6.23) follows from
                                    Z       X
                                              1                  p             p1       1
                                                                                         X               1
                                                             q   q                                       q
 k.fj /j 2N0 kLp .Rn I`q .N0 // D                 jfj .x/j               dx          D          jfj jq       p
                                     Rn j D0                                                             L q .Rn /
                                                                                         j D0
                                  X1                                1
                                                                     q
                                                                              X
                                                                               1                         1
                                                                                                         q
                                                                                           q
                                       jfj jq pq n                      D            kfj kLp .Rn /          ;
                                              L .R /
                                   j D0                                        j D0

where we have used the triangle inequality for series. (Alternatively one uses the more
general integral Minkowski’s inequality). The inequality (6.24) is proved analogously.


  Combining Corollary 6.13 and Lemma 6.5, one easily derives:

Corollary 6.14. For every s 2 R, " > 0, 1 < p < 1, and 1  q  1 we have

                        HpsC" .Rn / ,! Bpq
                                        s
                                           .Rn / ,! Hps" .Rn /:


6.4 Sobolev Embeddings
We start with a Sobolev-type embedding theorem for Besov spaces.

Theorem 6.15. Let s; s1 2 R with s  s1 , 1  q1  q  1, and 1  p1  p  1
such that
                                             n        n
                                       s       s1     :
                                             p        p1
Then

                                    Bps11 q1 .Rn / ,! Bpq
                                                       s
                                                          .Rn /                                                  (6.25)

Proof. As first step we prove that
                                                         n       n
                     k'k .Dx /f kLq .Rn /  C 2k. p  q / kf kLp .Rn /                                           (6.26)

for all 1  p  q  1, k 2 N0 , f 2 Lp .Rn /. First of all, we note that

k'k .Dx /f kLp .Rn / D k'Lk  f kLp .Rn /  k'Lk kL1 .Rn / kf kLp .Rn /  C kf kLp .Rn /
Section 6.4 Sobolev Embeddings                                                             161

for all f 2 Lp .Rn /, 1  p  1, k 2 N0 due to (6.7), which implies (6.26) in the
case p D q. Moreover,
                                    Z
         k'k .Dx /f kL1 .Rn /  sup   j'L k .x  y/jjf .y/j dy
                                     x2Rn   Rn
                                                                        n
                                   k'Lk kLp0 .Rn / kf kLp .Rn /  C 2k p kf kLp .Rn /

because of
                                             n
                k'Lk kLp0 .Rn / D 2.k1/ p k'L 1 kLp0 .Rn /     for all k 2 N:

This implies (6.26) in the case q D 1. Now (6.26) in the general case follows from

                                                 1 p           p
                          kf kLq .Rn /  kf kL1q.Rn / kf kLq p .Rn /

for 1  p  q  1 and (6.26) in the cases q D p; 1.
   Next we use that

                                'k .Dx /f D 'Qk .Dx /'k .Dx /f

with 'Qk .Dx / D 'k1 .Dx / C 'k .Dx / C 'kC1 .Dx /, '1 .Dx / D 0. Here 'Qk .Dx /f
satisfies the same estimates above as 'k .Dx /. Moreover, let f 2 Bps11 q1 .Rn / with
p; p1 ; s; s1 ; q; q1 as in the theorem. Then

        2sk k'k .Dx /f kLp .Rn / D 2sk k'Qk .Dx /'k .Dx /f kLp .Rn /
                  k. pn  p
                          n
                            /
         C 2sk 2     1         k'k .Dx /f kLp1 .Rn /  C 2s1 k k'k .Dx /f kLp1 .Rn /

for all k 2 N0 . Taking the `q .N0 / norm with respect to k 2 N0 and using `q1 .N0 / ,!
`q .N0 / finishes the proof.

Corollary 6.16. Let s; s1 2 R with s  s1 and 1  p1  p  1 such that
                                            n        n
                                      s      < s1     :
                                            p        p1

Then

                                    Hps11 .Rn / ,! Hps .Rn /:                            (6.27)

Proof. See Exercise 6.27.

   We note that (6.27) also holds if s  pn D s1  pn1 , cf. [3, Theorem 6.51]. The proof
in this case is more involved.
162                             Chapter 6 Introduction to Besov and Bessel Potential Spaces


6.5 Equivalent Norms
The following theorem is the direct generalization of Theorem 6.1 for general Besov
         s .Rn / with 0 < s < 1.
spaces Bpq

Theorem 6.17. Let 0 < s < 1 and let 1  p; q  1. Then there are constants
c; C > 0 (depending only on s; p; q; n) such that
                                      Z 1                         q1
                                               !p .t I f /q dt
   ckf kBpq
         s
            .Rn /  kf kLp .Rn / C                                        C kf kBpq
                                                                                  s
                                                                                     .Rn /   (6.28)
                                         0         t sq     t

if q < 1 and

                                                  !p .t I f /
        ckf kBpq
              s
                 .Rn /  kf kLp .Rn / C sup                    C kf kBpq
                                                                       s
                                                                          .Rn /              (6.29)
                                              t>0     ts

if q D 1, where

                      !p .t I f / WD sup kf .  C h/  f kLp .Rn /
                                      jhjt

is the Lp -modulus of continuity of f .

Remark 6.18. We refer to [3, Theorem 6.2.5] for a more general statement in the
case s > 0. See also Exercise 6.29.

Proof of Theorem 6.17. We will only prove the case q < 1 since the proof in the
case q D 1 is a simple variant of the proof of Theorem 6.1.
   First of all, since t 7! !p .t I f / is a monotone increasing function and t is propor-
tional to 2j on Œ2j C1 ; 2j ,
                     Z 1                       X  1
                           !p .t I f /q dt
                                            C   2sj q !p .2j I f /q
                      0        t sq      t
                                                 j D0

and
                    1
                    X                                   Z 2
                                                              !p .t I f /q dt
                           2sj q !p .2j I f /q  C                           :
                                                         0        t sq     t
                    j D0

Moreover,
      Z 1                                         Z 1
             !p .t I f /q dt
                                                         t sq1 dt D Cq kf kLp .Rn /
                                      q                                             q
                              2q kf kLp .Rn /
         1       t sq      t                        1
Section 6.5 Equivalent Norms                                                                 163

since !p .t I f /  2kf kLp .Rn / . Hence we can replace the middle term in (6.28) by

                                             X
                                              1                             1
                                                                            q
                          kf kLp .Rn / C             2sj q !p .2j I f /q       :
                                              j D0

                                                         s .Rn / we denote f D
First we prove the second inequality in (6.28). For f 2 Bpq                 k
'k .Dx /f . Then

                       kfk .: C h/  fk kLp .Rn /  jhjkrfk kLp .Rn /

due to (6.9) and therefore

             !p .t I fk /  t krfk kLp .Rn / D t kr'k .Dx /e
                                                           ' k .Dx /fk kLp .Rn /
                          C t 2k ke
                                   ' k .Dx /fk kLp .Rn /

because of (6.11), where e
                         ' k .Dx / D 'k1 .Dx / C 'k .Dx / C 'kC1 .Dx /, k P
                                                                           2 N0 , and
'1 .Dx / D 0. On the other hand, !p .t; fk /  2kfk kLp .Rn / and f D 1     kD0 fk .
Therefore
                                X
                                 1
    2sj !p .2j I f /  C              2sj min.1; 2j Ck /ke
                                                           ' k .Dx /fk kLp .Rn /
                                j D0
                                X
                                 1
                         C0           2s.j k/ min.1; 2j Ck /2sk k'k .Dx /fk kLp .Rn / :
                                j D0


Now, defining aj D C 0 2sj min.1; 2j / for j 2 Z and bj D 2sj k'k .Dx /fj kLp .Rn /
if j 0 and bj D 0 else, we see that 2sj !p .2j I f /  .a  b/j , where
                                             X
                           .a  b/j D            aj k bk    for all j 2 Z
                                           k2Z

is the convolution of two sequences. Hence
 X
  1                             1
                                q
         2sj q !p .2j I f /q        ka  bk`q .Z/  kak`1 .Z/ kbk`q .Z/  C kf kBpq
                                                                                   s
                                                                                      .Rn / ;
  j D0


where a 2 `1 .Z/ since s 2 .0; 1/. Here we have used the discrete convolution
inequality ka  bk`r .Z/  kak`1 .Z/ kbk`r .Z/ , cf. (A.5).
  In order to prove the first inequality in (6.28), we use that
                                 Z
                  'j .Dx /f D        .f .x  2j z/  f .x// .z/ dz;
                                        Rn
164                               Chapter 6 Introduction to Besov and Bessel Potential Spaces


cf. (6.8). Therefore
                                           Z
             k'j .Dx /f kLp .Rn /                  kf .   2j z/  f kLp .Rn / j .z/j dz
                                             n
                                           ZR
                                                   !p .2j jzjI f /j .z/j dz:
                                               Rn

and
 X
  1                                    1        Z        X
                                                          1                             1
                                       q                                                q
                           q
         2sj q k'j .Dx /f kL p .Rn /                         2sj q !p .2j jzjI f /q       j .z/j dz
  j D1                                              Rn j D1
                                                     Z    Z 1                1
                                                           !p .t jzjI f /q dt q s
                                           C                                     jzj j .z/j dz
                                                Rn   0        .jzjt /sq     t
                                               Z 1                    1 Z
                                                     !p .t I f /q dt q
                                           DC                                  jzjs j .z/j dz
                                                  0      t sq       t       Rn
                                                Z 1                   1
                                                     !p .t I f /q dt q
                                           D Cs                            ;
                                                   0      t sq       t
                       P
where we can estimate j1D0 2sj q !p .2j jzjI f /q by the corresponding integral by
the same arguments as in the beginning of the proof. Moreover, we have used that
                 Z 1                Z 1
                               dt               dt
                       f .at /    D      f .t /      for all a > 0:
                   0            t    0          t
Since also k'0 .Dx /f kLp .Rn /  C kf kLp .Rn / , the proof is finished.


6.6 Pseudodifferential Operators on Besov Spaces
Finally, we show that pseudodifferential operators have natural mapping properties
between Besov spaces.

Theorem 6.19. Let p 2 S1;0
                       m .Rn  Rn /, m 2 R, and let s 2 R, 1  q; r  1. Then

p.x; Dx /W Bqr .R / ! Bqr
            sCm  n       s .Rn / is a bounded linear operator.


  The proof is based on:

Lemma 6.20. Let p 2 S1;0  m .Rn Rn /, m 2 R, and let p .x; D / D p.x; D /' .D /,
                                                       j     x          x j   x
where .'j /j 2N0 is defined as above. Then

                        kpj .x; Dx /kL.Lq .Rn //  C 2j m ;              j 2 N0 ;                       (6.30)

for every 1  q  1, where C does not dependent on j .
Section 6.6 Pseudodifferential Operators on Besov Spaces                                        165

Proof. As seen in Section 5.4,
                                 Z
            pj .x; Dx /f .x/ D            kj .x; x  y/f .y/dy        for allx 2 Rn ;
                                     Rn

where the kj satisfy

   j@ˇx @˛z kj .x; z/j  C˛;ˇ ;M jzjM 2j.nCmM Cj˛j/             for all z ¤ 0; j 2 N0       (6.31)

and all ˛; ˇ 2 N0n, M 2 N0 , where C˛;ˇ ;M does not depend on j 2 N0 and z ¤ 0,
cf. (5.17). According to these estimates
    Z                      Z                      Z                      
                                       j.nCm/               n1 j.m1/
        jkj .x; z/jdz  C            2        dz C       jzj    2       dz :
    Rn                         jzj2j                        jzj>2j

The first part of the estimate comes from (6.31) for M D 0, and the second part
comes from (6.31) for M D n C 1. Hence we get by a simple calculation, using e.g.
Theorem A.8,
                             Z
                                 jkj .x; z/jdz  C 2j m ;
                                 Rn

which proves (6.30) since
       Z                                                 Z
            kj .  ;   y/f .y/dy                sup            jkj .x; z/jdzkf kLq .Rn /
          Rn                          Lq .Rn /    x2Rn       Rn

due to (2.5).

Remark 6.21. If pj .Dx ; x/ D 'j .Dx /p.Dx ; x/ is the corresponding operator in
y-form, then
                Z Z                                       Z
                          i.xy/
 pj .Dx ; x/f D         e          pj .y; /f .y/d̄ dy D   kj .y; x  y/f .y/dy;
                   Rn    Rn                                            Rn

where kj .y; z/ D F71 Œp .y; /.z/ is the same function as for the operator in x-
                     !z j
form. Moreover,

                       kpj .Dx ; x/kL.Lq .Rn //  C 2j m ;          j 2 N0                    (6.32)

holds for 1  q  1. This inequality is proved in precisely the same way as (6.30).

Lemma 6.22. Let p 2 S1;0  m .Rn  Rn /, m 2 R, and let p .x; D / be defined as
                                                           k  x
above. Then for every l 2 N there is some Ck > 0 such that

 k'j .Dx /pk .x; Dx /kL.Lq .Rn //  Cl 2min.j;k/m 2jj kjl             for all j; k 2 N0 ; (6.33)

and all 1  q  1.
166                               Chapter 6 Introduction to Besov and Bessel Potential Spaces


Proof. Similarly as in the proof of Lemma 2.41,
                                 Xn              l   X
                         1               j
              1D               C               j    D   p .˛/ ./ ˛ ;                    (6.34)
                     1 C jj2         1 C jj2
                                       j D1                           j˛jl

               l .Rn  Rn /. Hence
where p .˛/ 2 S1;0
                                                        X
                'j .Dx /pk .x; Dx / D 'j .Dx /                 p.˛/ .Dx /Dx˛ pk .x; Dx /
                                                       j˛jl
                                          X
                                                      .˛/
                                      D           p         .Dx /'j .Dx /Dx˛ pk .x; Dx /
                                          j˛jl

                                                           l .Rn  Rn / and
since 'j .Dx / and p .˛/ .Dx / commute. Since p .˛/ ./ 2 S1;0

                    Dx˛ pk .x; Dx / D q˛ .x; Dx /'k .Dx / DW q˛;k .x; Dx /
                     mCj˛j
for some q˛ 2 S1;0           .Rn  Rn /, we can now use (6.30) for

                                 pj.˛/ .Dx / D p .˛/ .Dx /'j .Dx /

and q˛;k .x; Dx / to get

k'j .Dx /pk .x; Dx /kL.Lq .Rn //
    X
       kp .˛/ .Dx /'j .Dx /kL.Lq .Rn // kq˛;k .x; Dx /kL.Lq .Rn //  C 2j l  2k.lCm/ ;
      j˛jl

which proves (6.33) for the case k  j .
  In order to prove the case k > j , we use some kind of symmetry in k and j .
First of all, we have p.x; Dx / D .p.x; Dx / / D .p  .x; Dx // D q.Dx ; x/ for
q.y; / D p .y; /. Hence

                'j .Dx /pk .x; Dx / D 'j .Dx /q.Dx ; x/'k .Dx /
                                      X
                                    D      qj .Dx ; x/Dx˛ p.˛/ .Dx /'k .Dx /:
                                          j˛jl

Now using (6.30), (6.32) for qj .Dx ; x/Dx˛ , we conclude in the same way as before
that

              k'j .Dx /pk .x; Dx /kL.Lq .Rn //
                  X
                     kqj .Dx ; x/Dx˛ kL.Lq .Rn // kp .˛/ .Dx /'k .Dx /kL.Lq .Rn //
                 j˛jl

               C 2kl  2j.lCm/ ;

which proves (6.33) for the case k > j .
Section 6.6 Pseudodifferential Operators on Besov Spaces                                       167

Proof of Theorem 6.19. First of all,
                                        1
                                        X
                                  f D          fj    in S 0 .Rn /;
                                        j D0

where fj D 'j .Dx /f , f 2 S 0 .Rn /. Since supp 'j \ supp 'k D ; for jj  kj > 1,
                        1
                        X                           1
                                                    X
        p.x; Dx /f D          pk .x; Dx /f D              pk .x; Dx /.fk1 C fk C fkC1 /
                        kD0                         kD0
                        X1
                    D         pk .x; Dx /fQk ;
                        kD0

where fQk D fk1 C fk C fkC1 and we have set f1  0. If f 2 Bqr
                                                              sCm .Rn /, then


            k.2.sCm/k fQk /k2N0 k`r .N0 ;Lq .Rn //
             D k.2.sCm/k .fk1 C fk C fkC1 //k2N0 k`r .N0 ;Lq .Rn //
              C k.2.sCm/k 'k .Dx /f /k2N0 k`r .N0 ;Lq .Rn // D C kf kB sCm :
                                                                                    qr


Now using (6.33),

 2sj k'j .Dx /pk .x; Dx /fQk kLq  C 2sj Cmin.j;k/mjj kjlk.sCm/ 2k.sCm/ kfQk kLq ;

where

              2sj Cmin.j;k/mjj kjlk.sCm/
                  ´
                    2j.sl/Ck.ls/ D 2jj kj.ls/                           if j k;
               D k.mCsCl/Cj.mCsCl/
                    2                      D 2jj kj.mCsCl/                 if j < k:

Choosing l 2 N so large that l  s         1 and m C s C l             1,
                                                      1
                                                      X
             2sj k'j .Dx /p.x; Dx /f kLq  C                  2jj kj 2k.sCm/ kfQk kLq :
                                                      kD0

Now let aj D 2jj j , bj D 2.sCm/j kfQj kLq for j 2 N0 and aj D bj D 0 for
j 2 Z n N0 . Then

        kp.x; Dx /f kBqr
                      s  C k.aj /j 2Z  .bj /j 2Z k`r .Z/


                           C k.aj /j 2Z k`1 .Z/ k.bj /j 2Z k`r .Z/
                           C k.2.sCm/j fQj /j 2N k`r .N ;Lq .Rn //  C kf k sCm ;
                                                          0       0                      Bqr
168                          Chapter 6 Introduction to Besov and Bessel Potential Spaces


where .cj /j 2Z D .aj /j 2Z  .bj /j 2Z is the convolution of .aj /j 2Z and .bj /j 2Z de-
fined by
                                 1
                                 X
                          cj D          aj k bk   for all j 2 Z
                                 kD1

and we have used (A.5).

  As an application we obtain a result on elliptic regularity for the Besov spaces
 s .Rn /:
Bpq

Corollary 6.23. Let p 2 S1;0 m .Rn  Rn / be an elliptic symbol and f 2 B s .Rn /,
                                                       S                     pq
                                         1
s; m 2 R, 1  p; q  1. Then, if u 2 Bp1    .Rn / WD r 2R Bp1 r
                                                                  .Rn / is a solution
of the pseudodifferential equation

                                   p.x; Dx /u D f;

then u 2 Bpq
          sCm
              .Rn /.

Proof. The proof is the similar to the proof of Corollary 6.23 and left to the reader,
cf. Exercise 6.30.


6.7 Final Remarks and Exercises
6.7.1 Further Reading
The systematic study of Bessel potential and Besov spaces is strongly connected to the
interpolation theory of Banach spaces. For a first introduction to interpolation theory
we recommend the book by Lunardi [25]. A classical introduction to interpolation
theory was written by Bergh and Löfström [3], where also Bessel potential and Besov
spaces are studied in more detail. The results of this chapter are partly based in [3,
Chapter 6]. Much more comprehensive results on these and further function space
can be found in the monographs by Triebel, e.g. [37], which is a classical reference,
and [39, 38, 40].

6.7.2 Exercises

      Exercise 6.24. Prove that for any s 2 R
                                   s
                                  B22 .Rn / D H2s .Rn /:

      Hint. Use Plancherel’s theorem.
Section 6.7 Final Remarks and Exercises                                                   169


   Exercise 6.25. Show that for any 1  p  1
                                        n
                                       p
                                     Bp1 .Rn / ,! C 0 .Rn /

   with continuous embedding.
                                                                              j n
   Hint. Use that 'j .Dx /f D 'Lj  f , where k'Lj kLq .Rn /  C 2 q0 uniformly in
   j 2 Z.

   Exercise 6.26. Let
                            \                                           [
             1                                   1
            Bpq .Rn / D            s
                                  Bpq .Rn / and Bpq .Rn / D                   s
                                                                             Bpq .Rn /;
                            s2R                                        s2R

   where 1  p; q  1. Prove that
                   1            1                   1           1
                  Bpq1
                       .Rn / D Bpq2
                                    .Rn /;         Bpq1
                                                        .Rn / D Bpq2
                                                                     .Rn /

   for any 1  p; q1 ; q2  1.


   Exercise 6.27. Let s; s1 2 R with s  s1 and 1  p1  p  1 such that
                                            n        n
                                       s     < s1     :
                                            p        p1
   Prove that

                                    Hps11 .Rn / ,! Hps .Rn /:

   Hint. Use the relations between Besov and Bessel potential spaces.


   Exercise 6.28. Let s 2 R, 1 < p < 1, 1  q  1 and let k 2 N0 . Prove that
                     s
                f 2 Bpq .Rn /       ,       @˛x f 2 Bpq
                                                     sk
                                                         .Rn / for all j˛j  k;
                f 2 Hps .Rn /       ,       @˛x f 2 Hpsk .Rn / for all j˛j  k:
                                      s .Rn / and H s .Rn / are equivalent to
   Moreover, prove that the norms on Bpq           p
                  X                             X
                         k@˛x f kBpq
                                  sk
                                      .Rn / ;           k@˛x f kHpsk .Rn / ; resp:
                 j˛jk                          j˛jk
170                              Chapter 6 Introduction to Besov and Bessel Potential Spaces


      Exercise 6.29. Let 0 < s < 1, k 2 N0 , and let 1 < p < 1; 1  q  1. Prove
      that there are constants c; C (depending only on s; p; q; n; k) such that
                               X                             X Z 1 ! .t I @˛ f /q dt              1
                                                                                                   q
                                                                             p      x
          ckf kB sCk .Rn /            k@˛x f kLp .Rn / C
                 pq
                                                                      0          t sq          t
                               j˛jk                         j˛jDk

                            C kf kB sCk .Rn /
                                         pq


      if q < 1 and
                                       X                                     !p .t I @˛x f /
               ckf kB sCk .Rn /              k@˛x f kLp .Rn / C      sup
                      pq
                                                                   t>0;j˛jDk       ts
                                    j˛jk

                                  C kf kB sCk .Rn /
                                                pq


      if q D 1, where !p .t I f / D supjhjt kf .  C h/  f kLp .Rn / :

      Exercise 6.30. Prove Corollary 6.23.
Chapter 7
Applications to Elliptic and Parabolic Equations

Summary
In this chapter we present several applications of the results of the previous chapter.
We discuss applications of the Mikhlin multiplier theorem in the scalar and Hilbert-
space-valued version and applications of the theory of pseudodifferential operators.
On one hand we study unique solvability of resolvent equations for parameter-elliptic
differential operators in different situations and obtain suitable estimates of the resol-
vents. These estimates are important for applications to the corresponding parabolic
equation, which are also briefly discussed. On the other hand we discuss results on
elliptic regularity for elliptic pseudodifferential equations. Moreover, an application
to Hilbert-space-valued Bessel potential spaces is also presented.


Learning targets
  Learn about typical applications of the Mikhlin multiplier theorem and results on
   mapping properties of pseudodifferential operators to resolvent equations.
  Understand some relations between resolvent estimates, the vector-valued Mikh-
   lin multiplier theorem and results on maximal regularity of abstract parabolic
   equations.
  See how parametrices and results on boundedness of pseudodifferential operator
   between function spaces can be used to obtain results on elliptic regularity.


7.1 Applications of the Mikhlin Multiplier Theorem

  The applications of this section are based on the Theorem 4.23. Further results            i
  from the Chapters 4 and 5 are not needed.



7.1.1 Resolvent of the Laplace Operator
In the section we study the partial differential equation

                                .    /u D f     in Rn ;                           (7.1)
              Pn
where     D           2
                j D1 @xj   is the Laplace operator and  2 C. For the following we
172                               Chapter 7 Applications to Elliptic and Parabolic Equations



                                          †




                                                ı




Figure 7.1. Sector †ı with opening angle ı 2 .0; /.


define open sectors †ı , 0 < ı < , by
                           †ı D ¹z 2 C n ¹0º W jarg zj < ıº ;
cf. Figure 7.1.
   For applications to the corresponding parabolic equation
               @ t u.x; t /    u.x; t / D f .x; t /   for all x 2 Rn ; t > 0;
                                u.x; 0/ D u0 .x/       for all x 2 Rn
unique solvability of (7.1) for  2 C n .1; 0 together with the estimates shown
below are important, cf. Sections 7.2.1 and 7.3.3.
  The main result of this section is:

Lemma 7.1. Let 0 < ı <  and 1 < p < 1. Then .  /W Wp2 .Rn / ! Lp .Rn / is
invertible and .  /1 2 L.Lp .Rn // for every  2 †ı . Moreover, there is some
constant Cı;p > 0 such that
                                                           Cı;p
                                k.    /1 kL.Lp .Rn //       ;                     (7.2)
                                                            jj
                          kr 2 .      /1 kL.Lp .Rn //  Cı;p                       (7.3)
uniformly in  2 †ı .

Proof. If f 2 S.Rn / and  2 †ı , then a simple calculation shows
                             O        
               1        1   f ./
        .  / f D F                     D m .Dx /f for all f 2 S.Rn /;
                              C jj2
where m ./ D . C jj2 /1 . In order to estimate the Lp .Rn /-norm of .  /1 f
we estimate @˛ m ./. To this end we define

          m .; r/ D .e i r 2 C jj2 /1      for all  2 Œı; ı; r 2 R;  2 Rn :
Section 7.1 Applications of the Mikhlin Multiplier Theorem                             173

Then m .; r/ is a smooth and homogeneous function of degree 2 with respect to
.; r/ 2 RnC1 n ¹0º. Therefore for every ˛ 2 N0n the function @˛ m .; r/ is homo-
geneous of degree 2  j˛j and

         j@˛ m .; r/j  Cı;˛ j.; r/j2j˛j       for all .; r/ ¤ 0;  2 Œı; ı;

where

                     Cı;˛ D          sup            j@˛ m .; r/j < 1:
                              j.;r /jD1; 2Œı;ı

Since m ./ D m .; r/ if  D e i r 2 2 †ı , we conclude that for every ˛ 2 N0n
there is some Cı;˛ > 0 such that
                                       1
              j@˛ m ./j  Cı;˛ .jj 2 C jj/2j˛j  Cı;˛ jj1 jjj˛j

uniformly in  2 †ı ,  2 Rn . Hence m ./ satisfies the condition of the Mikhlin
multiplier theorem (4.28) with A D maxj˛jN C2 Cı;˛ jj1 . Therefore

                                            Cı;p
                km .Dx /kL.Lp .Rn //                  uniformly in  2 †ı
                                             jj
because of Proposition 4.28, where 1 < p < 1 is arbitrary. This proves (7.2). In
order to show (7.3) for m .Dx / instead of .  /1 one uses that
                                                     
                                   1    j k O
            @xj @xk m .Dx /f D F                 f ./ D m ;j k .Dx /f;
                                         C jj2
                        
where m ;j k ./ D  Cjj
                     j k
                         2 . Then


                                                 j k
                             m ;j k .; r/ D  i 2
                                              e r C jj2
is a homogeneous function of degree 0, which is smooth in .; r/ ¤ 0. Therefore by
the same arguments as before
                                             1
                 j@˛ m ;j k ./j  Cı;˛ .jj 2 C jj/j˛j  Cı;˛ jjj˛j

uniformly in 2†ı ;  2Rn. Hence m ;j k satisfies (4.28) with ADmaxj˛jN C2 Cı;˛ .
Thus m ;j k .Dx / D @xk @xj m .Dx / extends to a bounded linear operator on Lp .Rn /.
In the same way one shows that also @xj m .Dx / extends to a bounded linear operator
on Lp .Rn / for every j D 1; : : : ; n. This implies that m .Dx /W Lp .Rn / ! Wp2 .Rn /
is bounded and

                   kr 2 m .Dx /kLp .Rn /  Cp;ı          for all  2 †ı :
174                            Chapter 7 Applications to Elliptic and Parabolic Equations


Moreover, for every f 2 S.Rn /

                    m .Dx /.        /f D .      /m .Dx /f D f

and therefore

                    .    /m .Dx /u D u for all u 2 Wp2 .Rn /

since S.Rn / is dense in Wp2 .Rn / D Hp2 .Rn /. Hence . /W Wp2 .Rn / ! Lp .Rn / is
onto. Furthermore, if . /u D 0 for some u 2 Wp2 .Rn /, then for every g 2 S.Rn /
      Z                                Z                               Z
  0D      ..  /u/m .Dx /g dx D            u.  /.m .Dx /g/ dx D        ug dx:
       Rn                                  Rn                               Rn

Thus u  0, which shows that .         / is injective, and .    /1 D m .Dx /.

7.1.2 Spectrum of Multiplier Operators with Homogeneous Symbols
Let aW Rn n ¹0º ! C N N , N 2 N, be an .n C 2/-times continuously differentiable
function that is homogeneous of degree ˛ > 0 such that a./ is invertible for all
 ¤ 0. Moreover, set
                                  [
                          K WD          .a.// [ ¹0º;
                                     2Rn n¹0º

where .a.// denotes the spectrum of a./ 2 C N N Š L.C N /. Then K is a closed
cone (i.e., rK D K for all r > 0) since a./ is homogeneous of degree ˛ > 0 and
therefore
                          [                   [ [
                 KD             r ˛ .a.// D     r    .a.//:
                        jjD1;r 0                r 0   jjD1

Furthermore, let

                   a.Dx /u D F 1 Œa./u./
                                       O           for all u 2 S.Rn /:

Examples of operators satisfying the assumptions above are principal parts of param-
eter-elliptic differential operators with constant coefficients, which will be used in
Section 7.1.3 below.
   Moreover, a./ D jj˛ for ˛ > 0 satisfies the assumptions above. Since the symbol
of  is jj2 , a.Dx / can be considered as . /˛=2 .

Theorem 7.2. Let a.Dx /, K be as above and let 1 < p < 1. Then a.Dx / extends
to a bounded linear operator

                           a.Dx /W Hp˛ .Rn /N ! Lp .Rn /N
Section 7.1 Applications of the Mikhlin Multiplier Theorem                             175

for every 1 < p < 1. Moreover, the spectrum of a.Dx / as an unbounded operator on
Lp .Rn /N is contained in K. Furthermore, for every closed cone K 0 with K \ K 0 D
¹0º and every 1 < p < 1 there is a constant CK 0 ;p such that

                                                               CK 0 ;p
                           k.  a.Dx //1 kL.Lp .Rn /N /                            (7.4)
                                                                jj

for all  2 K 0 n ¹0º. Finally, for every s 2 Œ0; m there is a constant CK 0 ;p;s such that
                                                                               ms
          k.  a.Dx //1 kL.Lp .Rn /N ;Hps .Rn /N /  CK 0 ;p;s .1 C jj/ m         (7.5)

for all  2 K 0 with jj        1.

Remark 7.3. The existence of the resolvent for all  in a sufficiently large cone
K 0 and a resolvent estimate of the form (7.4) are important to solve the associated
                                             d
parabolic equation, where  is replaced by dt  . We refer to Section 7.2.1 and Sec-
tion 7.3.3.

Proof. First we show that a.Dx /W Hp˛ .Rn /N ! Lp .Rn /N is a bounded operator. To
this end, we use that
                                              
                             1 a./      ˛
                a.Dx /u D F            hi u./
                                            O    D m.Dx /hDx i˛ f;
                                  hi˛

where m./ D a./hi˛ . Hence it is sufficient to show that m./ satisfies (4.28).
Since a./ is homogeneous of degree ˛, there is some constant C > 0 such that

                    j@ a./j  C jj˛jˇ j
                      ˇ
                                               for all jˇj  n C 2;  ¤ 0:

Hence the latter estimate and

             j@ hi˛ j  C˛;ˇ hi˛jˇ j  C˛;ˇ jj˛jˇ j
               ˇ
                                                                    for all  ¤ 0

cf. (2.13) with s D ˛, imply (4.28) if one applies the follow statement:
Claim 1. Let s1 ; s2 2 R, N 2 N and let m1 ; m2 W Rn n ¹0º ! C be N -times continu-
ously differentiable functions satisfying

                          j@ mj ./j  C jjsj jˇ j
                            ˇ
                                                        for all jˇj  N

for some C > 0. Then there is some C 0 > 0 such that

                            j@ .m1 ./m2 .//j  C 0 jjs1 Cs2 jˇ j
                                ˇ
                                                                                      (7.6)

for all jˇj  N .
Proof of Claim 1. The claim follows directly from the Leibniz formula (A.1).
176                            Chapter 7 Applications to Elliptic and Parabolic Equations


  Thus a.Dx /W Hp˛ .Rn /N ! Lp .Rn /N is a bounded linear operator.
  In order to prove existence of .  a.Dx //1 and the corresponding estimates, we
define m ./ D .  a.//1 for all  2 Rn ,  2 K n ¹0º.
Claim 2. There is some constant CK 0 > 0 such that for all ˇ 2 N0n with jˇj  n C 2

                                         jjjˇ j
          j@ˇ .  a.//1 j  CK 0                for all  2 K 0 n ¹0º;  ¤ 0:
                                       jj C jj˛

Proof of Claim 2. The proof is done by mathematical induction. First let jˇj D 0.
We define m .; r/ D .e i jrjs C a.//1 for .; r/ 2 RnC1 n ¹0º and  2 Œ; 
with e i 2 K 0 . Then m .; r/ is a continuous function in .; r/ 2 RnC1 n ¹0º that
is homogeneous of degree ˛. – Note that a./ has a continuous extension to  D 0
with a.0/ D 0 since a is homogeneous of degree ˛ > 0. – Hence

                                             C          C
                        jm .; r/j                 ˛         ;
                                         j.r; /j˛  jrj C jj˛

where C D supj.;r /jD1;e i 2K 0 jm .; r/j. Putting  D ei r 2 K 0 , the claim follows
in the case jˇj D 0.
   Next we assume that the claim is proved for jˇj  k and some k 2 N0 . Let
jˇj D k C 1 and ˇ D ˇ 0 C ej for some j 2 ¹1; : : : ; nº. Then

                                  ˇ0                                        
             @ .  a.//1 D @        .  a.//1 @j a./.  a.//1
              ˇ



since

                         d
                            .A.t //1 D A.t /1 A0 .t /A.t /1                        (7.7)
                         dt

for every continuously differentiable mapping AW R ! C N N , which follows from
differentiating I D A.t /A.t /1 . Hence
                              X
  j@ .  a.//1 j  C                j@ .  a.//1 jj@ı @j a./jj@ .  a.//1 j
      ˇ                                                                 

                           CıCDˇ 0
                              X         jjjjjıjjj1C˛       jjjˇ j
                      C0                                    C
                                           .jj C jj˛ /2       jj C jj˛
                            CıCDˇ


for all  ¤ 0;  2 K 0 n ¹0º, where ; ı; 2 N0n above and we have used the statement
of the claim for jˇj  k. This proves the claim.
Section 7.1 Applications of the Mikhlin Multiplier Theorem                            177

  Now the claim implies
                                     CK 0 jˇ j
            j@ .  a.//1 j                       for all  2 K 0 n ¹0º;  ¤ 0
              ˇ
                                         jj
                                     jj
and all jˇj  n C 2. Hence Proposition 4.28 yields that m .Dx / extends to a bounded
operator m .Dx /W Lp .Rn /N ! Lp .Rn /N for every 1 < p < 1 with operator
norm estimated as in (7.4). Finally, it remains to show that m .Dx /W Lp .Rn /N !
H ˛ .Dx /N and that m .Dx / D .  a.Dx //1 . To this end we use that for every
s 2 Œ0; ˛, " > 0

              j@ˇ .his .  a.//1 /j
                          X
                   C          j@ his jj@ˇ  .  a.//1 j
                       0ˇ
                           X                 jjjˇ jCjj             s˛
                   Cs0           hisjj                   00
                                                           Cs;";ˇ jj ˛ jjjˇ j    (7.8)
                                             jj C jj˛
                          0ˇ

uniformly in  2 K 0 with jj        " due to (2.13). Hence Theorem 4.23 implies that

                       hDx i˛ m .Dx /W Lp .Rn /N ! Lp .Rn /N

is bounded and therefore

                           m .Dx /W Lp .Rn /N ! Hp˛ .Rn /N

is bounded for all 1 < p < 1. Moreover, (7.8) and Proposition 4.28 implies (7.4)
and (7.5).
   Finally, since

        .  a.Dx //m .Dx /f D F 1 Œ.  a.//.  a.//1 fO./ D f

and

        m .Dx /.  a.Dx //f D F 1 Œ.  a.//1 .  a.//fO./ D f

for every f 2 S.Rn /N and S.Rn / is dense in Hp˛ .Rn /, we obtain

                  m .Dx / D .  a.Dx //1            for every  2 K 0 n ¹0º:

7.1.3 Spectrum of a Constant Coefficient Differential Operator
In the following let
                                                  X
                                   a.Dx / WD             a˛ Dx˛
                                                 j˛jm
178                            Chapter 7 Applications to Elliptic and Parabolic Equations


be a (matrix-valued) differential operator with constant coefficients a˛ 2 C N N ,
where m; N 2 N. Moreover, let
                                           X
                              a0 .Dx / WD       a˛ Dx˛
                                             j˛jDm
                                                  P
be the principal part of a.Dx / and a0 ./ D          j˛jDm a˛ 
                                                                   ˛ be the principal symbol.

Moreover, for every 0 < ı <  let

                           †ı D ¹z 2 C n ¹0º W jarg zj < ıº

as before. We assume that a.Dx / is parameter-elliptic, i.e.,
                               [
                                      .a0 .//   †ı n ¹0º                              (7.9)
                              jjD1

for some 0 < ı < .
   With the aid of Theorem 7.2 we are able to prove:

Theorem 7.4. Let a.Dx / be as above, 0 < ı <  be as in (7.9), 1 < p < 1, and let
AW Hpm .Rn /N ! Lp .Rn /N be defined by

                      Au D a.Dx /u         for all u 2 Hpm .Rn /N :

Then there is some R > 0 such that

                                   .A/    †ı [ BR .0/:

Moreover, for every  2 .0;   ı/ there is some constant C > 0 such that
                                                            C
                        k. C A/1 kL.Lp .Rn /N / 
                                                          1 C jj
for every  2 † with jj      R.
  The proof is based on the following lemma:

Lemma 7.5. Let AW D.A/  X ! X be an unbounded linear operator such that
. C A/1 exists for all  2 † with jj R and
                                         C
              k. C A/1 kL.X/                   for all  2 † ; jj       R;
                                       1 C jj
holds for some R > 0,  2 .0; /. Moreover, let BW D.B/ ! X be an unbounded
linear operator such that D.B/ D.A/ and

                  kB. C A/1 kL.X/ ! 0 for jj ! 1 in † :                             (7.10)
Section 7.1 Applications of the Mikhlin Multiplier Theorem                          179



                                                         †ı n BR .0/




                                                   R

                           .A/




Figure 7.2. Sketch of possible spectrum of A.


Then there is some R0 > 0 such that  C A C B is invertible for all  2 † with
jj R 0 . Moreover, the estimate
                                           C
            k. C A C B/1 kL.X/                      for all  … †ı ; jj    R0
                                         1 C jj
holds.

Proof. The proof is based on the identity

         . C A C B/u D . C A C B/u D .I C B. C A/1 /. C A/u

for all u 2 D.A/ and a Neumann series argument, cf. Exercise 7.24.

Proof of Theorem 7.4. For the following let A0 W D.A0 /   Lp .Rn /N ! Lp .Rn /N
and BW D.B/ L .R / ! L .R / be defined by
                 p    n N       p   n N

                                                  X
                     A0 u D a0 .Dx /u; Bu D           a˛ Dx˛ u
                                                       j˛j<m

for all u 2 D.A0 / WD D.B/ WD Hpm .Rn /N . Now, if we choose “A D A0 ”,
K D †ı and K 0 D † in Theorem 7.2, then . C A0 /1 exists for all  2 K 0 n ¹0º
and
                                                   C
                 k. C A0 /1 kL.Lp .Rn /N /                for all  2 † :
                                                   jj
In order to apply Lemma 7.5, we use that

              kB. C A0 /1 ukLp .Rn /  C k. C A0 /1 ukHpm1 .Rn /N
                                                 C0
                                                        1
                                                             kukLp .Rn /N
                                             .1 C jj/ m
    180                           Chapter 7 Applications to Elliptic and Parabolic Equations


    for all  2 † with jj    1 due to (7.5). Hence

                      kB. C A0 /1 kL.Lp .Rn /N / ! 0 as jj ! 1

    where  2 † . Therefore Lemma 7.5 implies the statement of the theorem.

    Remark 7.6. The result of Theorem 7.4 holds also if Lp .Rn / and Hp˛ .Rn / are
    replaced by Hps .Rn / and HpsC˛ .Rn / since hDx is and a.Dx / commute, cf. Exer-
    cise 7.25.


    7.2 Applications of the Hilbert-Space-Valued Mikhlin
        Multiplier Theorem

i     The applications of this section are based on Theorem 5.8. Further results from
      Chapter 5 and no results on pseudodifferential operators are not needed.



    7.2.1 Maximal Regularity of Abstract ODEs in Hilbert Spaces
    We consider the following abstract ordinary differential equation:

                        d
                           u.t / C Au.t / D f .t / in H for all t > 0;               (7.11)
                        dt
                                    u.0/ D 0       in H;                             (7.12)

    where u; f W Œ0; 1/ ! H are suitable functions, AW D.A/  H ! H is closed and
    densely defined operator with dense range, and H is a Hilbert space.

    Theorem 7.7. Assume that .CA/1 exists for all  2 C with Re  > 0 and satisfies
    the estimates
                                                C
                         k. C A/1 kL.H /           for all Re > 0                 (7.13)
                                               jj

    for some constant C > 0. Then for every 1 < p < 1 and every f 2 Lp .0; 1I H /
    there is a unique u 2 Lp                          d
                             loc .Œ0; 1/I D.A// with dt u; Au 2 L .0; 1I H / solving
                                                                   p

    (7.11) and (7.12). Moreover, there is some constant Cp > 0 independent of f and u
    such that
                  d
                    u            C kAukLp .0;1IH /  Cp kf kLp .0;1IH / :            (7.14)
                  dt Lp .0;1IH /
Section 7.2 Applications of the Hilbert-Space-Valued Mikhlin Multiplier Theorem                        181

Proof. First we prove existence. To this end we first assume that f 2 C01 ..0; 1/I H /
and define vW R ! H by

             v.t / D e 0 t F71                1
                              !t Œ.i  C 0 C A/ g O 0 . /.t / for all t 2 R;

where g 0 .t / D e  0 t f .t / for all t 2 R and some 0 > 0 and f is extended by zero
for negative t . Then v.t / 2 C 1 .RI H / since

            .i  C 0 C A/1 gO 0 . /; i  .i  C 0 C A/1 gO 0 . / 2 L1 .RI H /

with respect to  due to (7.13) and gO 0 2 S.RI H /. Moreover,

       d
          v.t / D F 1 Œ.i  C 0 /.i  C A/1 gO 0 . /.t /
       dt
                D e 0 t F 1 Œ.I  A.i  C 0 C A/1 /gO 0 . /.t / D f .t /  Av.t /

for all t 2 R. In particular u WD vjŒ0;1/ solves (7.11). In order to show v.0/ D
u.0/ D 0 we use that
                             Z
          t               1
       e     v.t / D e 0t
                               e itt .i  C 0 C A/1 gO 0 . / d 
                          2 R
                             Z
                           1             0
                   De  0t
                                    eit .i  0 C  C 0 C A/1 gO 0 . 0  i / d  0
                          2 RCi
                             Z
                           1        0
                   De  0t
                               e it .i  0 C  C 0 C A/1 gO 0 . 0  i / d  0
                          2 R
for all      0, t 2 R, where

                   gO 0 .  i / D F t7! Œe t e  0 t f .t / D gO C 0 . /:

Here we have used that the integrand above is an analytic function in  with Im                         0.
Therefore

               v.t / D e . C 0 /t F71                    1
                                     !t Œ.i  C  C 0 C A/ g O 0 C . /.t /

for all  > 0, which shows that v is independent of the choice of 0 > 0.
   Hence (7.13) implies
                                Z                                               1
                                                                                      2
 sup ke . C 0 /t v.t /kH             k.i  C  C 0 C A/1 k2L.H / d                   kgO 0 kL2 .RIH /
 t2R                               R
                                        Z 1                                    12
                                                   2. 0 C /t           2
                             C.0 /           e                kf .t /kH dt
                                           0
                             C.0 /kf kL2 .0;1IH /
182                            Chapter 7 Applications to Elliptic and Parabolic Equations


for all  0. Passing to the limit  ! 1 we conclude that v.t / D 0 for all t < 0.
Hence v.0/ D u.0/ D 0 and u solves (7.11)-(7.12).
   Now the main step is to show the a priori estimate (7.14) for u. To this end we use
that
                  Au.t / D e 0 t F71                1
                                    !t A.i  C 0 C A/ g O 0 . / ;
where it remains to estimate m 0 . / D A.i  C 0 C A/1 .
Claim. For every k 2 N0 there is a constant Ck > 0 independent of 0 > 0 such that
                    k@k m 0 . /kL.H /  Ck j jk    for all  ¤ 0:             (7.15)
Proof of Claim. We prove the claim by mathematical induction. If k D 0, we use that
              A.i  C 0 C A/1 D I  .i  C 0 /.i  C 0 C A/1 :               (7.16)
Hence (7.15) for k D 0 follows from (7.13). Next assume that (7.15) holds for all
k  k 0 for some k 0 2 N0 . Then
  0                               0
@k C1 A.i  C 0 C A/1 D @k .A.i  C 0 C A/1 i.i  C 0 C A/1 /
                               0
                                                   1
                         D @k A.i  C 0 C A/1 .I  A.i  C 0 C A/1 / ;
                                                    
where we have used (7.7) with C N N replaced by L.H /, which is proved the same
way. Hence using the product rule and (7.15) for k  k 0 one derives (7.15) for k 0 C 1
in a straight-forward manner.
  Using (7.15) and Theorem 4.28, we conclude that for every 1 < p < 1 there is a
constant Cp > 0 such that

                    ke  0  AvkLp .RIH /  Cp ke  0  f kLp .RIH / :
Since (7.15) is independent of 0 , Cp is independent of 0 > 0 too. Hence, passing
to the limit 0 ! 0 and using that v is independent of 0 > 0, we conclude that
                       kAukLp .0;1IH /  Cp kf kLp .0;1IH / :
                                                       d
Because of (7.11), the same estimate holds also for dt   u instead of Au. Therefore we
have proven the existence of a solution u as in the theorem if f 2 C01 .0; 1I H /.
Now the existence of a solution for a general f 2 Lp .0; 1I H / can be shown by ap-
proximating f by a sequence fk 2 C01 .0; 1I H / and considering the limit k ! 1
for the corresponding solutions uk using the uniform bound (7.14).
   Finally, it remains to prove uniqueness. Therefore we assume that u is a solution
as in the theorem with f  0. Then
                             Z t
                                 d                   1    d
                ku.t /kH D           u. / d     t p0      u
                              0  d            H         dt    Lp .0;1IH /
Section 7.2 Applications of the Hilbert-Space-Valued Mikhlin Multiplier Theorem     183

for all t  0 by the Hölder inequality. Hence e  0 t u.t / 2 L1 .0; 1I H / for every
0 > 0. Therefore we define
                                  ´
                                    e 0 t u.t / if t > 0;
                          v.t / D
                                    0            else

                         d
for some 0 > 0. Then v; dt v; Av 2 L1 .RI H / and

                         d
                            v D Av  0 v      in L1 .RI H /:
                         dt
Hence taking the Fourier transformation of this equation gives

                       .i  C 0 C A/v.
                                     O / D 0 for all  2 R:

Since i  C0 CA is invertible for all  2 R, we conclude that v.
                                                               O / D 0 for all  2 R,
which yields v  0 and therefore u  0.

Remark 7.8 (Maximal Regularity in Banach Spaces).
In Theorem 7.7 it is essential that H is a Hilbert space and not a general Banach space.
Nevertheless the result can be generalized to the case that H is a so-called UMD-
space, which is a certain subclass of Banach spaces. But to this end the resolvent
estimate (7.13) has to be replaced by the assumption that the operator family
                         ®                     ¯
                          . C A/1 W Re  > 0  L.H /

is R-bounded, which is a stronger assumption than the uniform boundedness of the
operator norms. (If H is a Hilbert space, uniform boundedness is equivalent to R-
boundedness.) We refer to Denk et al. [4] and Weis [42] for details and further refer-
ences.

Example 7.9. Theorem 7.7 applies for example to A D  with domain D.A/ D
H22 .Rn / and H D L2 .Rn /, where (7.13) follows from Lemma 7.1. Here the re-
striction to p D 2 is needed to obtain Hilbert spaces. Therefore Theorem 7.7 im-
plies that for every f 2 Lp .0; 1I L2 .Rn //, 1 < p < 1, there is a unique solution
u 2 L2loc .Œ0; 1/I H 2 .Rn // with @ t u; u 2 Lp .0; 1I L2 .Rn // solving the heat equa-
tion

                      @t u    uDf       in Lp .0; 1I L2 .Rn //;
                           uj tD0 D 0    in L2 .Rn /:

A similar results holds for A D a.Dx /, where a.Dx / is as in Section 7.1.2.
184                              Chapter 7 Applications to Elliptic and Parabolic Equations

                           P
  Now, if A D a.Dx / D j˛jm c˛ Dx˛ is a constant coefficient differential operator
on Rn as in Section 7.1.3, then Theorem 7.7 does not apply directly since (7.13) only
holds for jj R for some R > 0. Nevertheless one can obtain an analogous result
on any finite time interval:
                                P
Theorem 7.10. Let a.Dx / D j˛jm c˛ Dx˛ be as in Section 7.1.3. Then for every
0 < T < 1 and every f 2 Lp .0; T I L2 .Rn /N / with 1 < p < 1 there is a solution
u 2 Wp1 .0; T I L2 .Rn /N / \ Lp .0; T I H2m .Rn /N / such that

                    @ t u C a.Dx /u D f         in Lp .0; T I L2 .Rn /N /;            (7.17)
                                                    2    n N
                                u.0/ D 0        in L .R / :                           (7.18)

Proof. Let R > 0, A be as in Theorem 7.4 and let ! > 0 we such that ! C † 
† n BR .0/. Moreover, we define A! W D.A! /  L2 .Rn /N ! L2 .Rn /N by

             A! u D .! C a.Dx //u           for all u 2 D.A! / WD H2m .Rn /N :

Then . C A! /1 D . C ! C a.Dx //1 exists for all  2 † and (7.13) holds for
A! . Therefore Theorem 7.7 implies that for every g 2 Lp .0; 1I L2 .Rn /N / there is a
unique solution v 2 L2loc.Œ0; 1/I H2m .Rn /N / with @ t v; A! v 2 Lp .0; 1I L2 .Rn /N /
solving

                @ t v C .! C a.Dx //v D g          in Lp .0; 1I L2 .Rn /N /;
                                     v.0/ D 0      in L2 .Rn /N :

Now let
                                     ´
                                         e!t f .t / if 0 < t < T;
                           g.t / D
                                         0           else

for some f 2 Lp .0; T I L2 .Rn /N / with 0 < T < 1. Then g 2 Lp .0; 1I L2 .Rn /N /
and the corresponding solution v above exists. Hence, if we set u.t / WD e !t v.t / for
all t 2 .0; T /, then u 2 Wp1 .0; T I L2 .Rn /N / \ Lp .0; T I H2m .Rn /N / and u solves
(7.17) and (7.18) because of

 @ t u.t / D e !t @ t v.t / C !e!t v.t / D e !t .g.t /  a.Dx /v.t // D f .t /  a.Dx /u.t /

for almost all 0 < t < T .

Remark 7.11. Since a.Dx / and . C a.Dx //1 commute with hDx is for any s 2
R, one can replace L2 .Rn /N and H m .Rn /N by H s .Rn /N and H sCm .Rn /N in
Theorem 7.10, cf. Exercise 7.25.
Section 7.2 Applications of the Hilbert-Space-Valued Mikhlin Multiplier Theorem      185

7.2.2 Hilbert-Space Valued Bessel Potential and Sobolev Spaces
Let X be a Banach space. Similarly to the scalar case, we define the Sobolev space

       Wpm .Rn I X/ WD ¹f 2 Lp .Rn I X/ W @˛x f 2 Lp .Rn I X/ for all j˛j  mº
                        X
     kf kWpm .Rn IX/ WD     k@˛x f kLp .Rn IX/ ;
                           j˛jm

where m 2 N0 , 1  p  1. Here the (vector-valued) distributional derivative
@˛x f 2 S 0 .Rn I X/ D L.S.Rn /I X/ is defined by
                                                 Z
                 ˛           ˛               j˛j
              h@x f; 'i WD .@x f /.'/ WD .1/      f .x/@˛x '.x/ dx 2 X
                                                              Rn

for all ' 2 S.Rn / and we say @˛x f 2 Lp .Rn I X/ if there is some g˛ 2 Lp .Rn I X/,
which is identified with @˛x f , such that
                          Z
             h@˛x f; 'i D        g˛ .x/'.x/ dx in X; for all ' 2 S.Rn /:
                             Rn

Moreover, we define the so-called Bessel potential space of order s        0 and integral
exponent p 2 .1; 1/ as
                                          k  kH s .Rn IX /
          Hps .Rn I X/ WD S.Rn I X/             p


        kf kHps .Rn IX/ WD khDx is f kLp .Rn IX/ D kF 1 Œhis fO./kLp .Rn IX/
                             1
As before hi D .1 C jj2 / 2 .
   If p D 2 and X D H is a Hilbert space, then it follows easily from Plancherel’s
theorem that W2m .Rn I H / D H2m .Rn I H / as in the proof of Lemma 2.41. This even
holds true for 1 < p < 1:

Lemma 7.12. Let H be a Hilbert space, 1 < p < 1, and let m 2 N0 . Then
Wpm .Rn I H / D Hpm .Rn I H / with equivalent norms.

Proof. We first prove the embedding Hpm .Rn I H / ,! Wpm .Rn I H /. Let f 2
S.Rn I H /. Then
                                                           ˇ          
                             1           O         1 .i /     m O
                @ˇx f   DF            ˇ
                                  Œ.i / f ./ D F           hi f ./
                                                        him

Hence in order to obtain

       k@ˇx f kLp .Rn IH /  Cp khDx im f kLp .Rn IH / D Cp kf kHpm .Rn IH /       (7.19)
    186                            Chapter 7 Applications to Elliptic and Parabolic Equations

                                                                               ˇ
    for ˇ 2 N0n with jˇj  m we apply Theorem 4.23 to mˇ ./ D .i/  him
                                                                           . Therefore one
    has to verify (4.28) for m D mˇ , which is done in the proof of Theorem 6.8. Hence
    Theorem 4.23 implies that Hpm .Rn I H / ,! Wpm .Rn I H / since S.Rn I H / is dense in
    Hpm .Rn I H / by definition.
       Hence it remains to prove Wpm .Rn I H / ,! Hpm .Rn I H /. If m D 2k, k 2 N0 , is
    even, then him D .1 C jj2 /k is a polynomial of degree m. Therefore hDx im is a
    differential operator of order m and
                                                 X
                      khDx im f kLp .Rn IH /  C     k@˛x f kLp .Rn IH / ;
                                                  j˛jm

    which proves the embedding in this case.
      If m D 2k C 1, k 2 N0 , is odd, then
                                  X n                        X
                                                               n
                m      m    1            j2       1      2k      j
             hi D hi           C              D     hi    C       hi2k j ;
                           hi 2        hi 2     hi            hi
                                     j D1                            j D1

    where hi2k and hi2k j are polynomials of degree at most 2k C 1. Hence
                                             X X
                                               n
               khDx im f kLp .Rn IH /  C                kmj .Dx /@˛x f kLp .Rn IH / ;
                                            j˛jm j D0

    where m0 ./ D hi1 and mj ./ D j hi1 , j D 1; : : : ; n. Hence it remains to
    verify the Mikhlin condition (4.28) for mj ./, which is also done in the proof of
    Theorem 6.8.


    7.3 Applications of Pseudodifferential Operators

i     The applications of this section are based on the results for pseudodifferential
      operators in Chapter 3 and Sections 5.4 and 5.5. But no results on Bochner
      spaces, vector-valued Fourier transformation and the Mikhlin multiplier theorem
      are needed.



    7.3.1 Elliptic Regularity for Elliptic Pseudodifferential Operators
    In the following we consider regularity properties of solutions u of the equation

                                p.x; Dx /u D f      in S 0 .Rn /;                        (7.20)

    where p 2 S1;0
               m
                   .Rn  Rn / is elliptic. We have the following result on elliptic regular-
    ity:
Section 7.3 Applications of Pseudodifferential Operators                              187

Theorem 7.13. Let p 2 S1;0 m .Rn  Rn /, m 2 R, be elliptic and let 1 < q < 1.

Moreover, let u 2 Hqr .Rn / be a solution of (7.20) for some f 2 Hqs .Rn /, where
r; s 2 R. Then u 2 HqsCm .Rn /. Moreover, there is some constant Cr;s;q > 0
independent of u and f such that

                  kukH sCm .Rn /  Cr;s;q .kf kHqs .Rn / C kukHqr .Rn / /        (7.21)
                        q


Proof. The proof is similar to the proof of Corollary 3.43. To this end we choose
                                                  0      m
N 2 N such that s C m  r C N . Moreover, let qN     2 S1;0 .Rn  Rn / be the (left)
parametrix from Theorem 3.24. Then (7.20) implies
                                 0              0
                            u D qN .x; Dx /f  rN .x; Dx /u;

       0    N
where rN 2 S1;0 .Rn  Rn /. Hence Theorem 5.20 implies that

     0
    rN .x; Dx /u 2 Hqr CN .Rn / ,! HqsCm .Rn /;          0
                                                        qN .x; Dx /f 2 HqsCm .Rn /;

which implies u 2 Hqs .Rn /. The norm estimate (7.21) follows from
                            0                            0
   kukH sCm .Rn /  Cs;q .kqN .x; Dx /f kH sCm .Rn / C krN .x; Dx /ukH rCN .Rn / /
         q                                     q                            q
                      0
                    Cr;s;q .kf kHqs .Rn / C kukHqr .Rn / /;

which finishes the proof.

  With the aid of the Sobolev-type embedding

                              u 2 Hqr .Rn / ,! HqQrQ " .Rn /                    (7.22)

for any " > 0, where rQ D r  nq C nqQ and 1 < q  qQ < 1, cf. Corollary 6.14, one can
even prove:

Lemma 7.14. Let u; f be as in the assumptions of Theorem 7.13. If additionally
f 2 HqQsQ .Rn / for some qQ 2 .q; 1/ and sQ 2 R, then u 2 HqQsQCm .Rn /.

Proof. Let f 2 HqQsQ .Rn / additionally. Then by (7.22) we have u 2 HqQrQ " .Rn /.
                                                             Q sQ ; qQ to conclude that
Therefore we can apply Theorem 7.13 with r; s; q replaced by r;
u 2 HqQsQCm .Rn /.

Remark 7.15. In the statement of Theorem 7.13 one can replace Bessel potential
spaces Hqs .Rn / by Besov spaces Bqt  s .Rn /, which were introduced in Chapter 6, cf.

Exercise 7.26. In particular, if m 2 N0 and u 2 Cb0 .Rn / is a solution of (7.20) with
f 2 C ˛ .Rn / for some 0 < ˛ < 1, then u 2 C m;˛ .Rn / because of C m;˛ .Rn / D
  mC˛
B11   .Rn /, C ˛ .Rn / D B11
                           ˛
                                 .Rn / due to Theorem 6.1 and Exercise 6.29.
188                            Chapter 7 Applications to Elliptic and Parabolic Equations


  The statement of Theorem 7.13 on elliptic regularity can also be localized. To this
end we say that u; v 2 S 0 .Rn / coincide on an open set U Rn if
                        hu; 'i D hv; 'i   for all ' 2 C01 .U /:
                         m .Rn  Rn /, m 2 R, be elliptic, s 2 R, and let 1 < q <
Theorem 7.16. Let p 2 S1;0        S
                       1
1. Moreover, let u 2 Hq .Rn / D r 2R Hqr .Rn / be a solution of (7.20) for some
f 2 Hq1 .Rn /. Moreover, assume that there is some g 2 Hqs .Rn /, s 2 R, such that
f and g coincides on some open set U  Rn . Then for every open bounded set V
with V   U there is some v 2 HqsCm .Rn / such that u and v coincide on V .

Proof. Let V be an open bounded set such that V       U and let r 2 R be such that
u 2 Hqr Cm .Rn /. The statement of the theorem follows from:
Claim. For every k 2 N0 and every bounded open set V with V             U there is some
      min.r Ck;s/
v 2 Hq            .Rn / such that u and v coincide.
Proof of Claim. If k D 0, the statement is trivial. Now assume that the claim holds
for some k 2 N0 and let V be a bounded open set with V             U . Moreover, let
       1 .Rn / such that     1 on V and supp
   2 C0                                              U . Then the assumption applied
to some open and bounded W          supp with W          U implies that v WD u 2
Hqmin.r Ck;sCm/ .Rn /. If r C k    s C m, then v 2 Hqmin.r CkC1;sCm/ .Rn / and the
statement follows. Hence it only remains to consider the case r C k < s C m. Now
we use that (7.20) implies
             p.x; Dx /v D p.x; Dx /u C Œp.x; Dx /; u
                        D f C Œp.x; Dx /; u D         g C Œp.x; Dx /; u
in S 0 .Rn / since f and g coincide on U , where Œp.x; Dx /;  is a pseudodifferential
operator of order m  1 because of Corollary 3.17. Hence
      g C Œp.x; Dx /; u 2 Hqs .Rn / C Hqr CkmC1 .Rn / D Hqmin.r CkmC1;s/ .Rn /
                                               min.r CkC1;sCm/
and Theorem 7.13 applied to v implies v 2 Hq                      .Rn /. Hence the claim
follows.



7.3.2 Resolvents of Parameter-Elliptic Differential Operators
In the following we study the resolvent equation
                         . C a.x; Dx //u D f in S 0 .Rn /;
                               P
where  2 C and a.x; / D j˛jm c˛ .x/ ˛ , c˛ 2 Cb1 .Rn /, m 2 N. As seen in
Section 7.2.1 such a resolvent equation is import to study the corresponding parabolic
equation. A further application will be presented in Section 7.3.3 below.
Section 7.3 Applications of Pseudodifferential Operators                                 189

                              P
  We denote by a0 .x; / D         j˛jDm c˛ .x/
                                                   ˛ the principal symbol of a.x; D /.
                                                                                   x


Definition 7.17. Let ı 2 .0; / and let a.x; / be a differential symbol of order m as
above. Then a is said to be (uniformly) parameter-elliptic on †ı if

                         ¹a0 .x; / W x 2 Rn ; jj D 1º      †ı

  We note that, since 0 … †ı , a uniformly elliptic differential symbol satisfies

                     ja0 .x; /j     c > 0 for all x 2 Rn ; jj D 1

for some c > 0.

Example 7.18. Let a.x; / D jj2 . Then m D 2 and a0 .x; / D 1 for all x 2 Rn and
jj D 1. Hence a is parameter-elliptic on †ı for every ı 2 .0; /.
   Moreover, if A.x/ 2 Cb1 .Rn /nn is a real symmetric matrix, which is uniformly
positive definite, i.e.,  T A.x/     c > 0, then a.x; / D  T A.x/ is parameter-
elliptic on †ı for every ı 2 .0; /.
   Finally, if n D 1, a.x; / D i  is uniformly elliptic on †ı only if ı 2 .0; =2/.

Proposition 7.19. Let a be parameter-elliptic on †ı , ı 2 .0; /, and let a0 .x; / be
its principal symbol. Then for every ˛; ˇ 2 N0n there is some C˛;ˇ > 0 such that
                                                             1
               j@˛ @ˇx . C a0 .x; //1 j  C˛;ˇ .1 C jj m C jj/mj˛j          (7.23)

for all  2 †ı , x;  2 Rn , such that jj C jjm       1.

Proof. The proof relies essentially on the following statement:
Claim. For all ˛; ˇ 2 N0n there is some C˛;ˇ > 0 such that

                           j@˛ @ˇx . C a0 .x; //1 j  C˛;ˇ                      (7.24)

for all  2 †ı and  2 Rn with max.jjm ; jj/ D 1.
Proof of Claim. First let max.jjm ; jj/ D jjm D 1. Since c˛ 2 Cb1 .Rn /, the set

                         A WD ¹a0 .x; / W x 2 Rn ; jj D 1º

is bounded. Moreover, A †ı D C n †ı . Hence dist.A; @†ı / > 0 since A is
compact, @†ı is closed, and A \ @†ı D ;. Thus

                                                           1
                          j. C a0 .x; //1 j 
                                                     dist.A; @†ı /
190                                Chapter 7 Applications to Elliptic and Parabolic Equations


for all jj D 1, x 2 Rn , and  2 †ı . Thus

             j@z . C a0 .x; //1 j D j. C a0 .x; //2 @z a0 .x; /j  C˛;ˇ

for all jj D 1; x 2 Rn ;  2 †ı , where z D xj or z D j , j D 1; : : : ; n. Similarly it
is easy to prove by mathematical induction that

           j@˛ @ˇx . C a0 .x; //1 j  C˛;ˇ    for all jj D 1; x 2 Rn ;  2 †ı ;

for arbitrary ˛; ˇ 2 N0n since all derivatives of a0 .x; / are uniformly bounded on
jj D 1, x 2 Rn .
   Now we consider the case max.jjm ; jj/ D jj D 1. Because of the homogeneity
of the principal symbol, i.e., a0 .x; r/ D r m a0 .x; / for r > 0,

               ¹a0 .x; / W x 2 Rn ; jj  1º
                    [
                D         r m  ¹a0 .x; / W x 2 Rn ; jj D 1º       †ı [ ¹0º;
                    0r 1
        S
where 0r1 r m  ¹a0 .x; / W x 2 Rn ; jj D 1º is a compact set since it is the image
of Œ0; 1  ¹a0 .x; / W x 2 Rn ; jj D 1º under the multiplication .r; z/ 7! r m  z. Now
let

                             A WD ¹a0 .x; / W x 2 Rn ; jj  1º:

Then A       C n †ı and dist.A; @†ı \ ¹jj D 1º/ > 0. Thus
                                                         1
                     j. C a0 .x; //1 j 
                                              dist.A; @†ı \ ¹jj D 1º/
and therefore one can show as before

                               j@˛ @ˇx . C a0 .x; //1 j  C˛;ˇ

for all jj  1, x 2 Rn , and  2 †ı with jj D 1. This completes the proof of the
claim.
   Finally, let a .x; / WD . C a0 .x; //1 . We note that a .x; / is homogeneous
                                  1
of degree m with respect to . m ; / in the sense that

          ar m .x; r/ D r m a .x; /      for all r > 0; x;  2 Rn ;  2 †ı :        (7.25)
                         ˇ
This implies that @˛ @x a .x; / is homogeneous of degree m  j˛j with respect to
      1
. m ; /, i.e.,

  .@˛ @ˇx ar m /.x; r/ D r mj˛j @˛ @ˇx a .x; /    for all r > 0; x;  2 Rn ;  2 †ı ;
Section 7.3 Applications of Pseudodifferential Operators                                     191

by differentiating (7.25). Replacing .; / by .r m ; r 1 /, we have
                                                                  
                                                                 
                    @˛ @ˇx a .x; / D r mj˛j @˛ @ˇx ar m x;     :
                                                                 r
                                     1
Now choosing r D max.jj; jj m /, (7.24) implies
                                                          1                        1
   j@˛ @ˇx . C a0 .x; //1 j  C max.jj; jj m /mj˛j  C 0 .jj m C jj/mj˛j

for all x;  2 Rn and  2 †ı , which proves the proposition.

Lemma 7.20. Let a.x; / be a parameter-elliptic symbol on †ı of order m, ı 2
.0; /, as defined above and let 1 < p < 1, s 2 R. Then A D a.x; Dx /W D.A/ !
Hps .Rn / with D.A/ D HpsCm .Rn / Hps .Rn / is a closed and densely defined linear
operator. Moreover, there are some C; R > 0 such that  C A is invertible for all
 2 †ı with jj R > 0 and

                           k. C A/1 kL.Hps .Rn //  C jj1 :

Proof. Let  2 †ı with jj 1. Moreover, let a .x; / D . C a0 .x; //1 and let
m0 2 Œ0; m. Then for all ˛; ˇ 2 N0n
                                    1       mj˛j            mm0    0
   j@˛ @ˇx a .x; /j  C˛;ˇ 1 C jj m C jj         C˛;ˇ jj m him j˛j
                                                                                           (7.26)
                                                                          0
                                                             m .Rn  Rn / with
for all  2 †ı with jj         1 and x;  2 Rn . Hence a 2 S1;0

                .m0 /               mm0
            ja jk         Ck jj    m            uniformly in  2 †ı with jj        1

for every k 2 N. Therefore
                                                                              mm0
                    ka .x; Dx /kL.H s .Rn /;H sCm0 .Rn //  C jj             m           (7.27)
                                         p           p


uniformly in  2 †ı with jj 1 because of Theorem 5.20. Moreover, because of
the asymptotic expansion stated in Theorem 3.16 and the fact that all terms depend in
a bounded manner on p1 and p2

         . C a0 .x; Dx //a .x; Dx / D a .x; Dx / C a0 .x; Dx /a .x; Dx /
                                             D I C r .x; Dx /;

where for every k 2 N0 there are n.k/ 2 N0 and Ck > 0 such that
                                                                               1
                                                                   Ck jj m :
                          .0/                .m/         .mC1/
                     jr jk  Ck ja0 jn.k/ jja jn.k/                                        (7.28)
192                              Chapter 7 Applications to Elliptic and Parabolic Equations


– Alternatively one can use the following argument: Since a0 .x; Dx / is a differential
operator,
                                  X      1 ˛
                  r .x; / D               @ a0 .x; /Dx˛ a .x; /:
                                         ˛Š 
                                j˛jm;˛¤0

We note that one can prove (7.28) directly using this identity. – Thus
                                                                     1
                     kr .x; Dx /kL.Hps .Rn //  C jr j.0/
                                                      k
                                                           C 0 jj m
for all jj    1, where k is as in Remark 5.21 for m D 0. Furthermore,
             . C a.x; Dx //a .x; Dx / D I C r .x; Dx / C R0 ;
            P
where R 0 WD j˛j<m c˛ .x/Dx˛ a .x; Dx / satisfies
                                                                                 1
         kR0 kL.Hps .Rn //  C ka .x; Dx /kL.H s .Rn /;H sCm1 .Rn //  C jj m
                                                 p       p

due to (7.27) for m0 D m  1.
  Hence there is some R > 0 such that kr .x; Dx / C R 0 kL.Hps .Rn //  12 for all
jj R. Therefore I C r .x; Dx / C R0 is invertible and

                       k.I C r .x; Dx / C R0 /1 kL.Hps .Rn //  2
for all jj    R, cf. Theorem A.11. Thus
                . C a.x; Dx //a .x; Dx /.I C r .x; Dx / C R 0 /1 D I
for all  2 †ı ; jj R. Therefore  C a.x; Dx / is surjective and has a continuous
right inverse. By the same arguments one shows that also
                         a .x; Dx /. C a.x; Dx // D I C R00 ;
                                      1
where kR00 kL.H sCm .Rn //  C jj m for all  2 †ı , jj 1. This shows that  C
                 p
a.x; Dx / is injective if jj R,  2 †ı and R 1 is sufficiently large. Therefore
 C a.x; Dx / is invertible for all jj R,  2 †ı and
      k. C a.x; Dx //1 kL.Hps .Rn //
       ka .x; Dx /kL.Hps .Rn // k.I C r .x; Dx / C R0 /1 kL.Hps .Rn //  C jj1 :
This proves the theorem.

Remark 7.21. The last theorem implies that the spectrum of a.x; Dx / is contained
in a key-hole region .C n †ı / [ BR .0/ for some R > 0, cf. Figure 7.2, and that the
resolvent . C a.x; Dx //1 decays as jj1 as jj ! 1 in †ı .
   The same result holds if Hps .Rn / and HpsCm .Rn / are replaced by Besov spaces
  s             sCm .Rn /, where s 2 R and 1  p; q  1 are arbitrary.
Bpq .Rn / and Bpq
Section 7.3 Applications of Pseudodifferential Operators                               193

7.3.3 Application of Resolvent Estimates to Parabolic Initial Value
      Problems
The study of abstract parabolic initial value problems

                        d
                           u.t / C Au.t / D 0          in X for t > 0              (7.29)
                        dt
                                    u.0/ D u0          in X;                       (7.30)

where AW D.A/  X ! X is a suitable unbounded operator (e.g.  ) can be reduced
to the resolvent equation

                                 . C A/u D f          in X:

This is the content of the theory of analytic semi-groups, cf. e.g. [26],[28]. We only
state one of the main results

Theorem 7.22. Let X be a Banach space and let AW D.A/  X ! X be a linear
and closed operator such that D.A/ is dense in X. If  C A is invertible for every
 2 0 C †ı ,
                        †ı D ¹z 2 C n ¹0º W jarg zj < ıº;
where ı 2 .=2; / and 0 2 R, and satisfies
                                              C
                k. C A/1 kL.X/                      for all  2 0 C †ı ;       (7.31)
                                           j  0 j

then there is a family of bounded linear operators .T .t // t0  L.X/ such that
 1. T .t /T .s/ D T .t C s/ for all t; s      0, T .0/ D I .
                                                      d
 2. .0; 1/ 3 t 7! T .t / 2 L.X/ is differentiable and dt T .t / D AT .t / for every
    t > 0, where T .t / 2 L.X; D.A// for all t > 0.

 3. lim t!0 T .t /u0 D u0 in X for all u0 2 X.

 4. kT .t /kL.X/ Cjt jkAT .t /kL.X/  C e 0 t for all t        0 and some constant C    1.
   Here .T .t // t0 is a so-called (strongly continuous) analytic semi-group. This the-
orem is a consequence of the characterization of analytic semi-groups, cf. Pazy [26,
Theorem 3.1, Chapter 1] or Renargy and Rogers [28, Theorem 11.17].
   With the aid of the semi-group one can easily solve (7.29)-(7.30) as follows: For
u0 2 X let u.t / D T .t /u0 for all t 0. Then uW .0; 1/ ! X is differentiable by the
last theorem and
                   d
                      u.t / D AT .t /u0 D Au.t / for all t > 0:
                   dt
194                             Chapter 7 Applications to Elliptic and Parabolic Equations


Moreover, u.0/ D lim t!0C u.t / D lim t!0C T .t /u0 D u0 . In particular we obtain
solvability of the parabolic initial value problem

           @ t u.x; t / C a.x; Dx /u.x; t / D 0         for all t > 0; x 2 Rn ;
                                   u.x; 0/ D u0 .x/     for all x 2 Rn ;

where a.x; Dx / is a parameter-elliptic differential operator as in Lemma 7.20 because
of:

Corollary 7.23. Let A D a.x; Dx / and ı 2 .=2; / be as in Lemma 7.20 and let
s 2 R, 1 < p < 1. Then there is some 0 > 0 such that A satisfies the conditions of
Theorem 7.22 with X D Hps .Rn /, D.A/ D HpsCm .Rn /. In particular, A generates a
strongly continuous, analytic semi-group T .t /, t 0 on Hps .Rn /, which satisfies

         kT .t /kL.Hps .Rn // C t kAT .t /kL.Hps .Rn //  Cs e 0 t   for all t    0:

Proof. Just choose some 0 > 0 such that 0 C †ı  †ı n BR .0/. Then apply
Theorem 7.22.

                                                          s .Rn / for any s 2 Rn ,
  The analogous result holds in the case of Besov spaces Bpq
1  p; q  1.


7.4 Final Remarks and Exercises
7.4.1 Further Reading
An introduction to semi-group theory can be found in the books by Pazy [26] and
Renardy and Rogers [28, Chapter 11]. Further results on abstract evolution equa-
tions and applications of this theory are treated in the monographs by Amann [2] and
Lunardi [24].
   We refer to Denk et al. [4] and Weis [42] for further applications of Banach-space-
valued versions of the Mikhlin multiplier theorem and to maximal regularity questions
for abstract evolution equations.
   For applications to (pseudo-)differential equations on manifolds and domains with
boundary we refer to Grubb [11]. Even more advanced applications to parameter-
elliptic pseudodifferential boundary value problems can be found in Grubb [10]. A lot
of further applications in various directions are treated in [12, 13, 18, 21]. Non-smooth
pseudodifferential operators and their applications can be found in Taylor [34, 35].
Applications of pseudodifferential operators to Markov processes are presented in the
monographs by Jacob [15, 16, 17].
Section 7.4 Final Remarks and Exercises                                               195

7.4.2 Exercises

   Exercise 7.24 (Resolvent Estimates and Perturbations).
   Let AW D.A/  X ! X be an unbounded linear operator such that . C A/1
   exists for all  2 † with jj R and
                                           C
                  k. C A/1 kL.X/              for all  2 † ; jj   R;
                                          jj

   holds for some R > 0,  2 .0; /. Moreover, let BW D.B/ ! X be an un-
   bounded linear operator such that D.B/  D.A/ and

                    kB. C A/1 kL.X/ ! 0 for jj ! 1 in † :                        (7.32)

     1. Prove that there is some R 0 > 0 such that  C A C B is invertible for all
         2 † with jj R 0 . Moreover, the estimate
                                                 C
                  k. C A C B/1 kL.X/               for all  2 † ; jj      R0
                                                jj
        holds.

        Hint. Use

             . C A C B/u D . C A C B/u D .I C B. C A/1 /. C A/u

        for all u 2 D.A/ and a Neumann series argument.

     2. Now let X D L2 .Rn / and D.A/ D H2m .Rn /, m > 0. Moreover, let
              0
        BW H2m .Rn / ! L2 .Rn / be a bounded linear operator for some 0 < m0 <
        m. Prove that (7.32) holds.

        Hint. Show and use the interpolation inequality
                                    mm0         m0
                    kukH m0  kukL2m kukHmm           for all u 2 H2m .Rn /:
                          2                       2



   Exercise 7.25. Let a.Dx / be as in Section 7.1.3, 0 < ı <  be as in (7.9),
   1 < p < 1, s 2 R, and let AW HpsCm .Rn /N ! Hps .Rn /N be defined by

                      Au D a.Dx /u        for all u 2 HpsCm .Rn /N :

     1. Prove that there is some R > 0 such that

                                    .A/        †ı [ BR .0/:
196                               Chapter 7 Applications to Elliptic and Parabolic Equations


           Moreover, prove that for every  2 .ı; / there is a constant C > 0 such
           that
                                                                 C
                                k. C A/1 kL.Hps .Rn /N / 
                                                               1 C jj

           for every  2 † with jj      R.

       2. Prove that for every f 2 Lp .0; T I H2s .Rn /N / with 1 < p < 1 there is a
          solution u 2 Wp1 .0; T I H2s .Rn /N / \ Lp .0; T I H2sCm .Rn /N / such that

                         @ t u C a.Dx /u D f      in Lp .0; T I H2s .Rn /N /;
                                     u.0/ D 0     in H2s .Rn /N :


      Exercise 7.26. Let p 2 S1;0     m
                                        .Rn  Rn /, m 2 R, be elliptic and let 1 
      q; q1 ; q2  1. Moreover, let u 2 Bqq    r .Rn / be a solution of (7.20) for some
                                                 1
      f 2 Bqq  s
                 2
                   .R n
                        / and r; s 2 R. Then u  2   sCm
                                                   Bqq2
                                                        .Rn /. Moreover, there is a con-
      stant C D Cr;s;q;q1 ;q2 > 0 independent of u and f such that

                     kukB sCm .Rn /  C.kf kBqq
                                             s
                                                .Rn / C kukBqq
                                                            r
                                                               .Rn / /:
                          qq2                     2                 1
 Part IV


Appendix
Appendix A
Basic Results from Analysis

Summary
In this appendix we introduce some basic notation and summarize some basic results
on calculus and integration on Rn and linear functional analysis. Moreover, we briefly
discuss the Bochner integral and its most important properties for the purpose of this
book. Finally, we give a short introduction to Fréchet spaces. Although we will not
need any deep result from the theory of Fréchet spaces/topological vector spaces, it
will be useful for the study of pseudodifferential operators to know some of the basic
facts.


A.1 Notation and Functions on Rn
In this section we briefly summarize some basic notation and results from calculus
in Rn .
   Throughout the book N will denote the set of all natural numbers zero not included
and N0 WD N [ ¹0º. Moreover, R and C denote the set of real and complex numbers,
respectively, and K stands for R or C. Constants appearing in inequalities will usually
be denoted by C sometimes marked with an index as e.g. C˛ to denote that C depends
on ˛. In sequences of inequalities all constants will simply be denoted by C although
they may change from line to line. The characteristic function of a set A is denoted
by A , i.e.,
                                         ´
                                           1 if x 2 A;
                                A .x/ D
                                           0 else:

Moreover, Br .x0 / D ¹x 2 Rn W jx  x0 j < rº for any r > 0, x0 2 Rn .
   We will make use of multi-indices, which will keep the notation (relatively) short.
A multi-index is a vector ˛ D .˛1 ; : : : ; ˛n / 2 N0n . Given ˛ 2 N0n we define the
length of ˛ as j˛j D ˛1 C    C ˛n and its factorial as ˛Š D ˛1 Š    ˛n Š. For x 2 Rn
and ˛ 2 N0n we define x ˛ D x1˛1    xn˛n . Then x ˛ is a polynomial of degree j˛j and
an arbitrary polynomial pW Rn ! C of order m 2 N0 can be written as
                                              X
                                 p.x/ D           c˛ x ˛
                                           j˛jm
                                 P
with coefficients c˛ 2 C. Here j˛jm denotes summation with respect to all multi-
indices ˛ 2 N0n with length j˛j  m. Moreover, if ˛; ˇ 2 N0n , we write ˛  ˇ if and
only if ˛j  ˇj for all j D 1; : : : ; n.
200                                                  Appendix A Basic Results from Analysis


   The so-called binomial coefficients are defined by
                                     !
                                   ˛           ˛Š
                                       D
                                   ˇ      ˇŠ.˛  ˇ/Š
               
if ˇ  ˛ and ˇ˛ D 0 otherwise. Then it is easy to check that
                                  !         !         !
                                ˛        ˛1        ˛n
                                     D              :
                                ˇ        ˇ1        ˇn

Using this notation and the fundamental relation
                                !          !         !
                              n       n          nC1
                                  C           D
                              k     kC1          kC1

for n; k 2 N0 , one can prove by mathematical induction that
                                               !
                                       X ˛
                                  ˛
                           .x C y/ D             x ˇ y ˛ˇ
                                             ˇ
                                            ˇ ˛

for all x; y 2 Rn , which generalizes the well-known binomial formula in one dimen-
sion.
   In the following let U  Rn be an open set. Recall that the space C k .U / consists
of all k-times differentiable
                         T functions    f W U ! K with continuous derivatives up to
               1 .U / D                                      j˛j .U /, then we define
                           k2N C .U /. If ˛ 2 N0 and u 2 C
                                  k              n
order k and C

                                       @j˛j
                     @˛x u.x/ D                     u.x/   for all x 2 U:
                                  @˛x11 : : : @˛xnn
If u depends on several variables, say x and y, @˛x u and @y˛ u denote the derivative
defined above with respect to x and y, respectively.
   Using the product rule of differentiation, one can prove the Leibniz formula:
                                            !
                                    X ˛
                    @˛x .uv/.x/ D             .@ˇx u/.x/.@˛ˇ
                                                          x   v/.x/              (A.1)
                                          ˇ
                                    ˇ ˛

for all ˛ 2 N0n and u; v 2 C j˛j .Rn /. Moreover, we recall Taylor’s formula:

Theorem A.1. Let u 2 C k .Rn /, k 2 N. Then for any x and y 2 Rn one has
                X y˛                X y˛ Z 1
    u.x C y/ D           @˛x u.x/ C     k        .1  t /k1 @˛x u.x C ty/dt:
                     ˛Š                   ˛Š 0
                  j˛j<k                   j˛jDk

Proof. See e.g. [27, Chapter 1, Theorem 1.1].
Section A.2 Lebesgue Integral and Lp -Spaces                                       201

  Finally, if   Rn is a domain, we denote by Cbk ./, k 2 N0 , the space of all
f 2 C k ./ with bounded derivatives up to order k such that    ˛
                                                           T1@ f khas a continuous
                                               1
extension on  for all j˛j  k. Moreover, Cb ./ WD kD0 Cb ./. It is well-
known from basic courses in functional analysis that Cbk ./ equipped with the norm

                          kf kC k . / D sup sup j@˛x f .x/j
                                b
                                         j˛jk x2

is a Banach space, i.e., a complete normed vector space. Moreover, if U  Rn is
open, then C01 .U / denotes the set of all f 2 C 1 .U / such that

                           supp f D ¹x 2 U W f .x/ ¤ 0º

is a compact subset of U . We note that for any compact K           Rn and any open
U  Rn with K  U , there is some ' 2 C01 .U / such that

                                     '  1 on K;

cf. e.g. [11, Theorem 2.13] or [23, Lemma 2.19].
   If ' 2 C01 .U /, we will identified it with its extension by zero to a function in
  1
C0 .Rn /.


A.2 Lebesgue Integral and Lp -Spaces
Recall that a function f W Rn ! R is Lebesgue-integrable or just integrable if f is
measurable and
                               Z
                                  jf .x/jdx < 1:                              (A.2)
                                    Rn

Here and in the following all integrals are taken with respect to the Lebesgue measure
on Rn . More generally, a function f W Rn ! C is Lebesgue-integrable if and only if
Re f and Im f are Lebesgue-integrable. Then
               Z                  Z                    Z
                     f .x/dx WD       Re f .x/dx C i       Im f .x/dx:
                 Rn                 Rn                   Rn

The space of all Lebesgue-integrable functions f W Rn ! K (with K D R or K D C)
is denoted by L1 .Rn /. It is a linear vector space, which can be normed by
                                                   Z
                       kf kL1 .Rn / WD kf k1 WD        jf .x/jdx
                                                    Rn

if functions which differ on a set of measure zero are identified. L1 .Rn / is complete
with respect to the norm k  k1 .
202                                              Appendix A Basic Results from Analysis


   Throughout the book many functions will be at least continuous, in most cases even
infinitely differentiable. If f and g are continuous and f D g almost everywhere,
i.e., they differ on a set of measure zero, then f .x/ D g.x/ for every x 2 Rn .
Therefore we do not have to pay attention on the possible null-sets on which the
functions possibly differ if we only work with continuous functions.
   We need the following theorems from integration theory:

Theorem A.2 (Lebesgue’s Theorem on Dominated Convergence).
Let fk 2 L1 .Rn /, k 2 N, be sequence of functions such that

                      lim fk .x/ D f .x/ almost everywhere;
                      k!1
                          jfk .x/j  g.x/       almost everywhere;

where g 2 L1 .Rn /. Then f 2 L1 .Rn / and
                            Z               Z
                        lim      fk .x/dx D             f .x/dx:
                        k!1 Rn                     Rn

   As an application of Lebesgue’s theorem on dominated convergence one can prove
the following two theorems on parameter-dependent integrals, which will often be
used.

Theorem A.3. Let U Rm be an open set and a 2 U . Moreover, let f W Rn  U !
C be a function such that:
 1. For all x 2 Rn the function t 7! f .x; t / is continuous in a.

 2. For all t 2 U the function x 7! f .x; t / is integrable on Rn .

 3. There is some F 2 L1 .Rn / such that jf .x; t /j  F .x/ for almost all x 2 Rn
    and all t 2 U .
Then the function                           Z
                       U 3 t 7! g.t / WD         f .x; t /dx 2 C
                                            Rn

is continuous in a.

Theorem A.4. Let I      R be an open interval and f W Rn  I ! C be such that
 1. For every x 2 Rn the function t 7! f .x; t / is differentiable on I .

 2. For every t 2 I the function x 7! f .x; t / is integrable on Rn .

 3. There is some F 2 L1 .Rn / such that j@ t f .x; t /j  F .x/ for almost all x 2 Rn .
Section A.2 Lebesgue Integral and Lp -Spaces                                                              203

Then                                              Z
                              I 3 t 7! g.t / WD          f .x; t /dx 2 C
                                                    Rn
is a differentiable function on I and for all t 2 I
                                        Z
                                 0
                               g .t / D      @ t f .x; t /dx:
                                               Rn

   The proofs of these theorems are left to the reader as an exercise. Alternatively, see
[6, §11, Satz 1/Satz 2].

Theorem A.5 (Fubini’s Theorem).
Let f 2 L1 .Rk  Rl /, k; l 2 N. Then f .x;  / 2 L1 .Rl / for almost all x 2 Rk ,
                               Z
                          x 7!     f .x; y/dy 2 L1 .Rk /;
                                       Rk

and
                 Z                                  Z        Z                  
                              f .x; y/d.x; y/ D                        f .x; y/dy dx:                    (A.3)
                     Rk Rl                             Rk        Rl
                                                                                           R
Conversely, if f .x;  / 2 L1 .Rl / for almost all x 2 Rk and x 7!                          Rk f .x; y/dy 2
L1 .Rk /, then f 2 L1 .Rk  Rl / and (A.3) holds.
  We will also use the change-of-variable theorem in the following case:
                   Z                               Z
                        f .ˆ.x//jdet Dˆ.x/j dx D        f .y/ dy
                        Rn                                              Rn

for all f 2 L1 .Rn / and C 1 -diffeomorphisms ˆW Rn ! Rn . In particular, we have
                      Z                           Z
                          f .Ax C b/jdet Ajdx D      f .y/dy
                          Rn                                           Rn

for all f 2 L1 .Rn /, b 2 Rn , and A 2 Rnn with det A ¤ 0.
   We will also use the spaces Lp .Rn /, 1  p < 1, which consists of all measurable
functions f W Rn ! K such that
                                                  Z                               p1
                                                                        p
                 kf kLp .Rn / WD kf kp WD                    jf .x/j dx                  < 1:
                                                        Rn

Moreover,
                    ®                                         ¯
         L1 .Rn / WD f W Rn ! K measurable W kf kL1 .Rn / < 1
       kf kL1 .Rn / WD kf k1 WD ess sup jf .x/j WD                          inf           sup jf .x/j:
                                        x2Rn                      E Rn ;jE jD0 x2Rn nE
204                                               Appendix A Basic Results from Analysis


Here jEj denotes the Lebesgue measure of E and the functions in L1 .Rn / are called
essentially bounded. All these spaces are Banach spaces (again identifying functions
which coincide almost everywhere). Moreover, we have the Hölder inequality
                                                                                     0
      kfgkL1 .Rn /  kf kLp .Rn / kgkLp0 .Rn /    for all f 2 Lp .Rn /; g 2 Lp .Rn /;

where 1  p  1 and 1  p 0  1 is determined by 1 D p1 C p10 with the convention
“11
    D 0”, i.e., p 0 D 1 if p D 1 and p 0 D 1 if p D 1. Throughout the book p0 will
always be defined by the latter equation.
   Furthermore, we note that L2 .Rn / is also a Hilbert space. Its norm and inner
product are given by:
                                                 Z                     1
                                                                         2
                                                                2
                     kf kL2 .Rn / WD kf k2 WD              jf .x/j dx        ;
                                                       n
                                                   Z R
                                 .f; g/L2 .Rn / WD    f .x/g.x/dx
                                                  Rn

for all f; g 2 L2 .Rn /. The inner product of L2 .Rn / will play a fundamental role.
   If U Rn is open, we define the vector space
       p
   Lloc .U / D ¹f W U ! K measurable W f jK 2 Lp .K/ for all K                   U compactº

of all functions f W U ! K that are locally in Lp . Moreover, we say that f W U ! K
is locally integrable if f 2 L1loc.U /.
   We will frequently use the following results:

Lemma A.6. Let 1  p < 1. Then C01 .Rn / is dense in Lp .Rn /, i.e., for every
f 2 Lp .Rn / there is a sequence fk 2 C01 .Rn /, k 2 N, such that limk!1 kf 
fk kp D 0.

Proof. See e.g. [1, Satz 2.10] or [6, §10 Satz 3].

Theorem A.7 (Fundamental Lemma of the Calculus of Variations).
Let U  Rn be an open set and let f 2 L1loc.U / such that
                      Z
                              f .x/'.x/ dx D 0 for all ' 2 C01 .U /:
                          U

Then f .x/ D 0 for almost all x 2 U .

Proof. See e.g. [11, Lemma 3.2] or [1, Lemma 2.21], where f 2 L1 ./ is assumed.
Section A.2 Lebesgue Integral and Lp -Spaces                                              205

  Moreover, we note that for any f 2 Lp .Rn /, 1  p  1
                                               ˇZ                ˇ
                                               ˇ                 ˇ
             kf kLp .Rn / D         sup        ˇ    f .x/g.x/ dx ˇ;                      (A.4)
                                               ˇ                 ˇ
                                    g2Lp0 .Rn /;kgkp0 D1         Rn


where 1  p 0  1 such that p1 C p10 D 1. Here “ ” in (A.4) follows from the Hölder
inequality. Moreover, if p < 1, “” can be shown by choosing
                             ´
                               f .x/jf .x/jp2 if f .x/ ¤ 0;
                      g.x/ D
                               0                 else:

The case p D 1 follows from choosing
                             ´
                                          1     f .x/
                                         jAj A jf .x/j
                                                           if f .x/ ¤ 0;
                           g.x/ D
                                         0                 else;

where A Rn is a measurable set of positive measure such that jf .x/j                 kf k1  "
for almost all x 2 A and " > 0 is arbitrary.

Theorem A.8. Let K.r; R/ D ¹x 2 Rn W r < jxj < Rº for some 0  r < R  1.
Then f 2 L1 .K.r; R// if and only if

                      g.s; '/ D f .r'/         for all s 2 .r; R/; ' 2 @B1 .0/

is measurable and satisfies
                          Z RZ
                                             jg.s; '/j d' s n1 ds < 1:
                               r   @B1 .0/

If this is the case
                  Z                           Z RZ
                               f .x/ dx D                      f .r'/ d' s n1 ds:
                      K.r;R/                   r     @B1 .0/

  Here “ds” denotes integration with respect to the surface measure on @B1 .0/. A
proof can be found e.g. in [20, Section 9.3 and “Aufgabe 11.8”].
  The following simple lemma will often be used:

Lemma A.9. Let s > n. Then hxis 2 L1 .Rn / and .1 C jxj/s 2 L1 .Rn /, where
                  1
hxi D .1 C jxj2 / 2 for all x 2 Rn .

Proof. The lemma can easily be proved by Theorem A.8. An alternative approach
can be found in [27, Lemma 1.3].
206                                            Appendix A Basic Results from Analysis


  Finally, we will need a discrete version of the Lebesgue spaces Lp once in a while:
                      ®                                                    ¯
            `p .Z/ D a D .aj /j 2Z W aj 2 K for all j 2 Z; kak`p .Z/ < 1
                      ´P                1
                        . j 2Z jaj jp / p if 1  p < 1;
        kak`p .Z/ D
                        supj 2Z jaj j      if p D 1;
where 1  p  1. Moreover, the convolution a  b of a D .ak /k2Z 2 `1 .Z/ and
b D .bk /k2Z 2 `r .Z/, 1  r  1 is defined by
                                 X
                      .a  b/k D     akj bj for all k 2 Z:
                                   j 2Z

Similarly to the convolution inequality for functions on Rn , cf. (2.5), we have
                         ka  bk`r .Z/  kak`1 .Z/ kbk`r .Z/ :                     (A.5)
The inequality can be proved in the same way as for the usual convolution, i.e., (2.5),
using Hölder’s inequality.


A.3 Linear Operators and Dual Spaces
In this section we summarize some basic facts from linear functional analysis, which
will be needed in this book. We refer to [1, 30, 43, 45] for a systematic introduction.
   In the following let X; Y be Banach spaces. Then a linear mapping AW X ! Y is
called bounded if there is some C > 0 such that
                         kAxkY  C kxkX        for all x 2 X:
The set of bounded linear operators AW X ! Y is denoted by L.X; Y /. Moreover, we
set L.X/ WD L.X; X/.
   We note that a linear mapping AW X ! Y is bounded if and only if the operator
norm
                                                        kT xkY
                    kAkL.X;Y / D sup kT xkY D sup
                                  kxkX D1          x¤0 kxkX

is finite. With this norm L.X; Y / becomes a Banach spaces. Moreover, we note that
A is bounded if and only if A is continuous. (This also follows from Theorem A.23
below.)
   We will frequently use the following extension result:

Lemma A.10. Let X; Y be Banach spaces, D  X be a dense linear subspace, and
let T W D ! Y be a linear mapping that is bounded, i.e., there is some C > 0 such
that
                         kT xkY  C kxkX       for all x 2 D:
                       e 2 L.X; Y / such that T x D e
Then there is a unique T                            T x for all x 2 D.
Section A.3 Linear Operators and Dual Spaces                                                207

Often the extension e
                    T is again denoted by T . We refer to [1, Ü3.3] for a proof.
  More generally, an unbounded (linear) operator AW D.A/  X ! Y is a linear
mapping AW D.A/ ! Y , where D.A/ is a linear subspace of X. – Note that every
bounded linear operator is also an unbounded linear operator with D.A/ D X. –
Furthermore, AW D.A/  X ! Y is called closed if for every sequence .xn /n2N
D.A/ the following implication holds:

      xn !n!1 x           in X; Axn !n!1 y              in Y      )     x 2 D.A/; Ax D y:

We note that, if D.A/ D X, then AW X ! Y is closed if and only if A is bounded
because of the closed graph theorem and since X; Y are Banach spaces. Furthermore,
we note that, if AW D.A/  X ! Y is closed, then D.A/ equipped with the norm

                      kxkD.A/ D kxkX C kAxkX                   for all x 2 D.A/

is a Banach space. Then AW D.A/ ! Y is even a bounded operator.1
   We call a linear operator AW D.A/  X ! Y invertible if it is bijective and
A1 W Y ! X is bounded. We note that, since X; Y are Banach spaces, AW D.A/ 
X ! Y is invertible if and only if AW D.A/  X ! Y is closed and bijective.
   If X is a complex Banach space, then the spectrum of an unbounded linear operator
AW D.A/  X ! X is defined as

             .A/ D ¹ 2 C W .I  A/W D.A/  X ! X is not invertibleº

and .A/ WD C n .A/ is called the resolvent set of A.

                           R .A/ WD .  A/1            for all  2 .A/

is called resolvent of A.
   A very useful and often used criterion for invertibility is:

Theorem A.11 (Neumann Series).
Let X be a Banach space and A 2 L.X/ such that kAkL.X/ < 1. Then I AW X ! X
is invertible and
                                                        1
                                                        X
                                      .I  A/1 D              Ak ;
                                                        kD0

where the series converges in L.X/.
A proof can be found in [1, Section 3.7] or [46, Section 1.23].
  As a consequence one obtains that the set of invertible bounded linear operators in
L.X; Y / is open. More precisely,
1 It is essential that here the norm of D.A/ is used and not the norm of X !
208                                                Appendix A Basic Results from Analysis


Lemma A.12. Let A 2 L.X; Y /, where X; Y are Banach spaces and let B 2
L.X; Y / be such that
                                            1
                      kA  BkL.X;Y / <   1
                                                  :
                                       kA kL.Y;X/
Then B is invertible and B 1 D A1 .I  .A  B/A1 /1 ; where
                                                  1
                                                  X
                    .I  .A  B/A1 /1 D              ..A  B/A1 /k :
                                                 kD0
  The proof is left to the reader as an exercise.
  Furthermore, we recall that the dual space X 0 of a Banach space X is the set all
bounded linear operators x 0 W X ! K, i.e., X 0 D L.X; K/. The elements of X 0 are
called (linear) functionals. Moreover,
                            hx 0 ; xi  hx 0 ; xiX 0 ;X WD x 0 .x/
denotes the duality product of x 2 X, x 0 2 X 0 . Because of the Hahn–Banach theorem,
X 0 separates points of X, i.e., for every x 2 X n ¹0º there is some x 0 2 X 0 such that
hx 0 ; xi ¤ 0. Therefore one has the equivalence
                      xD0       ,      hx 0 ; xi D 0 for all x 0 2 X 0 :
If H is a Hilbert space, then J W H ! H 0 is defined by
                     hJ x; yiH 0 ;H WD .y; x/H       for all x; y 2 H
is a (conjugate) linear isomorphism due to the Riesz representation theorem. In par-
ticular, this applies to L2 .Rn /: For every F 2 L2 .Rn /0 there is a unique f 2 L2 .Rn /
such that
                                        Z
            hF; giL2 .Rn /0 ;L2 .Rn / D    g.x/f .x/ dx for all g 2 L2 .Rn /:
                                      Rn
More generally, if 1  p < 1, then for every F 2 Lp .Rn /0 there is a unique
      0
f 2 Lp .Rn / (where p1 C p10 D 1 as usual) such that
                                    Z
        hF; giLp .Rn /0 ;Lp .Rn / D   g.x/f .x/ dx for all g 2 Lp .Rn /:
                                       Rn
A proof can be found in [1, Satz 4.12] or [23, Section 2.14].
  Since L1 .Rn / is separable, it follows that bounded sets in L1 .Rn / Š .L1 .Rn /0
are weak- sequentially compact, i.e., for every bounded sequence .fk /k2N
L1 .Rn / there is a subsequence .fkj /j 2N and some f 2 L1 .Rn / such that
       Z                              Z
            fkj .x/g.x/ dx !j !1          f .x/g.x/ dx for all g 2 L1 .Rn /:
         Rn                              Rn
The theorem follows e.g. from [1, Satz 6.5]. This property will be used once in a
while throughout the book. But no further results on weak(-) convergence will be
needed.
Section A.4 Bochner Integral and Vector-Valued Lp -Spaces                        209


A.4 Bochner Integral and Vector-Valued Lp -Spaces
  For some extensions and applications of the theory of singular integral operators     i
  the Bochner integral and Lp -spaces for Banach-space-valued functions will be
  needed. This concerns the Chapters 5 and 6 and the applications in Section 7.2.


  A more detailed introduction to Bochner integrals can be found in [45].

Definition A.13. Let X be a Banach space and let P.M;  / be a measure space. Then
                                                   N
a mapping f W M ! X is called simple if f D kD1 ˛k Ak for some measurable
Ak  M and ˛k 2 X. Moreover, f W M ! X is called strongly measurable if there
is a sequence fk W M ! X of simple functions fk , k 2 N, such that fk .x/ !k!1
f .x/ in X for almost every x 2 M . Moreover, f is called Bochner integrable if there
is a sequence fk W M ! X, k 2 N, of simple functions such that
                            Z
                        lim     kfk .x/  f .x/kX d.x/ D 0:                   (A.6)
                      k!1 M


           PN
  If f D     kD1 ˛k Ak is a simple function, then the X-valued integral is defined by
                       Z                       X
                                               N
                              f .x/ d.x/ WD         ˛k .Ak / 2 X:
                          M
                                               kD1

If f is                and fk , k 2 N, are simple functions such that (A.6) holds,
     RBochner integrable
then M fk .x/ d.x/ k2N is a Cauchy sequence in X and we define the Bochner
integral as
                    Z                       Z
                       f .x/ d.x/ WD lim       fk .x/ d.x/:
                      M                     k!1 M

As in the scalar case, i.e., X D K, the definition is independent of choice of the
sequence .fk /k2N .
  A useful criterion is the following:


Theorem A.14 (Bochner).
Let f W M ! X. Then f is Bochner integrable if and only if f is strongly measurable
and x 7! kf .x/kX is integrable. Moreover,
                    Z                      Z
                         f .x/ d.x/        kf .x/kX d.x/:                  (A.7)
                       M                X       M

  We refer to [45, Theorem 1, Chapter V, Section 5] for a proof.
210                                                        Appendix A Basic Results from Analysis


  From the definitions it easily follows that, if f W M ! X is Bochner integrable and
A 2 L.X; Y /, then Af W M ! Y is Bochner integrable and
                         Z                    Z
                      A      f .x/ d.x/ D         Af .x/ d.x/:
                             M                         M

In particular, if w 0 2 X 0 and f W M ! X is Bochner integrable, then x 7! hf .x/; w0 i
is integrable and
                     Z                                Z
                                           0
                          f .x/ d.x/; w           D        hf .x/; w 0 i d.x/:            (A.8)
                      M                                M

Here hw; w 0 i D w 0 .w/ denotes the duality product of w 2 X and w 2 X 0 .
  Using (A.7), one can generalize Lebesgue’s theorem on dominated convergence to
Bochner integrals:

Theorem A.15. Let fk ; f 2 L1 .M I X/, k 2 N0 , be such that
 1. limk!1 fk .x/ D f .x/ in X for -almost every x 2 M ,
 2. kfk .x/kX  g.x/ for -almost every x 2 M
for some g 2 L1 .M /. Then
                         Z                                  Z
                     lim           fk .x/ d.x/ D                f .x/ d.x/:
                      k!1 M                                  M

Proof. By the assumptions we have

                 kfk .x/  f .x/kX !k!1 0 for almost every x 2 M

and

                 kfk .x/  f .x/kX  2g.x/             for almost every x 2 M:

Hence by Lebesgue’s theorem on dominated convergence (for scalar integrals) and
(A.7)
  Z                  Z                 Z
      fk .x/ d.x/    f .x/ d.x/       kfk .x/  f .x/kX d.x/ !k!1 0;
   M                     M                X            M

which proves the theorem.

  Finally, if f 2 L1 .Rn I X/; g 2 L1 .Rn /, we define the convolution f  g 2
L1 .Rn I X/ by
                             Z
          .f  g/.x/ D            f .x  y/g.y/ dy              for almost every x 2 Rn :
                             Rn
Section A.4 Bochner Integral and Vector-Valued Lp -Spaces                            211

Lemma A.16. For every f 2 L1 .Rn I X/; g 2 L1 .Rn / the convolution f  g is
well-defined and f  g 2 L1 .Rn I X/. Moreover,

                     kf  gkL1 .Rn IX/  kf kL1 .Rn IX/ kgkL1 .Rn / :               (A.9)

Proof. First of all, if f is a simple function, then f  g is of the form

                                  X
                                  N
                   .f  g/.x/ D         gk .x/˛k       for almost all x 2 Rn
                                  kD1

for some gk 2 L1 .Rn / and ˛k 2 X for all k D 1; : : : ; N . Hence f  g is a strongly
measurable in this case. Moreover,
            Z                      Z Z
                 kf  g.x/kX dx            kf .x  y/kX jg.y/j dy dx
              Rn                          Rn      Rn
                                    D kf kL1 .Rn IX/ kgkL1 .Rn /

by Fubini’s theorem and the transformation formula. In particular this implies (A.9).
Moreover, f  g is Bochner integrable by Theorem A.14.
  Now let f be Bochner integrable and let fk be as in (A.6). Then
                                    Z
      kfk  g.x/  f  g.x/kX          kfk .x  y/  f .x  y/kX jg.y/j dy
                                          M

for almost every x 2 Rn , which implies
Z                                        Z
      kfk  g.x/  f  g.x/kX dx                 kfk .x/  f .x/kX dxkgkL1 .Rn / !k!1 0:
 Rn                                          Rn

Since fk  g is Bochner integrable by the first part, there are simple functions fk0 such
that
                          Z
                                                             1
                               kfk  g.x/  fk0 kX dx  :
                            Rn                              k
Altogether
Z                             Z
                   0       1
     kf  g.x/  fk kX dx  C     kfk .x/  f .x/kX dxkgkL1 .Rn / !k!1 0:
  Rn                       k   Rn

Hence f  g is Bochner integrable. Finally (A.9) is proved in the same way as in the
first part.

  Similarly to the scalar case we define for 1  p  1 the vector-valued Lebesgue
spaces or Bochner spaces as

          Lp .M I X/ WD ¹f W M ! X strongly measurable W kf kX 2 Lp .M /º
        kf kLp .M IX/ WD kf kX Lp .M /            for all f 2 Lp .M I X/:
212                                                     Appendix A Basic Results from Analysis


We note that simple functions are dense in Lp .M I X/ if 1  p < 1. Moreover,
C01 .Rn I X/ is dense in Lp .Rn I X/ for any 1  p < 1 as in the scalar case. This
can be proved easily by approximating a given f 2 Lp .Rn I X/ first by simple func-
tions and approximating the simple functions by functions in C01 .Rn I X/. The last
approximation can be done using that C01 .Rn / is dense in Lp .Rn / if p < 1.
   In the following we restrict ourselves for simplicity to subsets of Rn together with
the Lebesgue measure. Furthermore, if U  Rn is open, we define as in the scalar
case

  Lp
   loc .U I X/ D ¹f W U ! X strongly measurable W
                                              f jK 2 Lp .KI X/ for all K          U compactº:

Definition A.17. Let f 2 L1 .a; bI X/ WD L1 ..a; b/I X/, where 1  a < b  1.
Then g 2 L1 .a; bI X/ is called weak derivative of f if
          Z b                       Z b
                g.t /'.t / dt D          f .t /' 0 .t / dt   for all ' 2 C01 ..a; b//:
           a                         a


    Note that, if g 2 L1 .a; bI X/ is a weak derivative of f 2 L1 .a; bI X/, then
x! 7 gw .x/ WD hg.x/; wi is a weak derivative of the scalar function x 7! fw .x/ D
hf .x/; wi for every w 2 X 0 . In particular, the weak derivative of f is unique if
it exists. Therefore it will for simplicity be denoted by f 0 . Finally, we define the
vector-valued Sobolev space of first order as:
                  ®                                                             ¯
  Wp1 .a; bI X/ WD f 2 Lp .a; bI X/ W f has a weak derivative f 0 2 Lp .a; bI X/ ;
kf kWp1 .a;bIX/ WD kf kLp .a;bIX/ C kf 0 kLp .a;bIX/ :

Moreover, we denote by C k .Œa; bI X/, k 2 N0 , the Banach space of all k-times
differentiable functions f W Œa; b ! X equipped with a standard norm, e.g.

                     kf kC k .Œa;bIX/ D             sup          kf .j / .x/kX
                                             x2Œa;b;j D0;:::;k

                        T
and C 1 .Œa; bI X/ D       k2N0 C
                                     k .Œa; bI X/.




A.5 Fréchet Spaces
In the study of pseudodifferential operators one frequently works with different spaces
of smooth functions with certain properties. They all have in common that they cannot
be normed to become a Banach space (with their natural topology); but they are so-
called Fréchet spaces.
Section A.5 Fréchet Spaces                                                          213

   As an example we consider the space Cb1 .Rn / of all smooth and bounded functions
f W Rn ! C with bounded derivatives. Then

                                             1
                                             \
                               Cb1 .Rn / D         Cbk .Rn /:
                                             kD0


In contrast to Cb1 .Rn / the spaces Cbk .Rn /, k 2 N0 , are Banach spaces equipped with
the norm

                             kf kC k D sup sup j@˛x f .x/j:
                                  b
                                       j˛jk x2Rn


Roughly speaking: Since in spaces of smooth functions all (infinitely many) deriva-
tives have to be controlled for completeness, they cannot be normed by a single norm
such that the space is complete usually. But these spaces can be “normed” by an in-
finite sequence of (semi-)norms, e.g. f 2 Cb1 .Rn / if and only if kf kC k is finite for
                                                                        b
all k 2 N.

Definition A.18. Let V be a (complex or real) linear space over K. Then a mapping
W V ! Œ0; 1/ is a semi-norm if
 1. .rf / D jrj.f / for all f 2 V and r 2 K.

 2. .f C g/  .f / C .g/ for all f; g 2 V .

   If m , m 2 N, is a sequence of semi-norms on a linear space V and fj 2 V ,
j 2 N, we say that .fj /j 2N is a Cauchy sequence if limi;j !1 m .fi  fj / D 0
for all m 2 N. Moreover, we say that .fj /j 2N converges to f 2 V if and only if
limj !1 m .fj  f / D 0 for all m 2 N.

Definition A.19. A linear space V is called a Fréchet space if there is a sequence of
semi-norms .m /m2N satisfying the following conditions:
 1. .m /m2N is an increasing sequence: m .f /  mC1 .f / for all m 2 N and
    f 2V.

 2. .m /m2N separates points: for any f ¤ 0 there is some m 2 N such that
    m .f / ¤ 0.

 3. V is complete: any Cauchy sequence .fj /j 2N converges to some f 2 V .

  Obviously, every Banach space X with norm k  kX is a Fréchet space with (semi-)
norms m D k  kX for all m 2 N.
214                                              Appendix A Basic Results from Analysis


  We note that Cb1 .Rn / is a Fréchet space, cf. Exercise A.27. Moreover, we have:

Lemma A.20. The space S.Rn /, cf. Section 2.2, together with the j  jm;S , m 2 N, is
a Fréchet space.
   The proof is left as exercise for the interested reader. We just note that it mainly
remains to check the completeness of S.Rn /, which can be done by using the com-
pleteness of Cb1 .Rn /.

Remark A.21 (For readers interested in topology).
Every Fréchet space .V; .m /m2N / is a complete metric space .V; d / where
                            1
                            X             m .f  g/
               d.f; g/ WD         2m                    for all f; g 2 V:        (A.10)
                                        1 C m .f  g/
                            mD1
Then convergence with respect to the semi-norms coincides with convergence in the
metric sense. Since every metric space carries a natural topology which is defined by
the neighborhood basis
                        ²                           ³
                                                  1
              Ul .f0 / D f 2 V W d.f  f0 / <         ; l 2 N; f0 2 V;
                                                  l
every Fréchet space is a topological space. Equipped with this topology, the opera-
tions of multiplication by scalars and addition of vectors are continuous, i.e., V is a
linear topological space.
   Moreover, every Fréchet space is locally convex, i.e., there is a neighborhood basis
at the origin that consists of convex sets. Finally, the Fréchet spaces can be character-
ized as the locally convex linear topological space that can be equipped with a metric
and are complete. See e.g. [36].
Definition A.22. Let V and W be Fréchet spaces with semi-norms .m /m2N and
.m /m2N . Then a linear mapping T W V ! W is bounded if for every m 2 N there is
some k D k.m/ 2 N and some Cm such that

                       m .Tf /  Cm k.m/ .f / for all f 2 V:

The set of all bounded linear operators T W V ! W is denoted by L.V; W / and
L.V / WD L.V; V /.

Theorem A.23. Let V and W be Fréchet spaces and T W V ! W be a linear mapping.
Then T is bounded if and only if T is continuous in the sense that limj !1 fj D f
implies limj !1 Tfj D Tf .
   In particular, if W is a Banach space, T W V ! W is continuous if and only if there
is some m 2 N and C > 0 such that
                         kTf kW  Cm .f /       for all f 2 V:
Section A.5 Fréchet Spaces                                                       215

Proof. Let m and m , m 2 N, denote the semi-norms of V and W , respectively.
   First, let T be bounded and .fj /j 2N V be a sequence such that limj !1 fj D f
in V , i.e., limj !1 m .fj  f / D 0 for all m 2 N. Since T is bounded for every
m 2 N there exists some k.m/ 2 N such that m .T g/  Cm k.m/ .g/ for all g 2 V .
Hence

     m .Tfj  Tf / D m .T .fj  f //  Cm k.m/ .fj  f / ! 0 as j ! 1;

where m 2 N is arbitrary. This means limj !1 Tfj D Tf in W . Thus T is continu-
ous.
   Conversely, let T be continuous. Assume that T is not bounded. Then there is some
m0 2 N and some sequence .fj /j 2N       V such that for every C > 0 and k 2 N
there is some j0 2 N0 with

                               m0 .Tfj0 / > Ck .fj0 /:

In particular, we can choose a subsequence .fjk /k2N , such that

                               m0 .Tfjk / > kk .fjk /:

Then fQk WD fjk =m0 .Tfjk /, k 2 N, is a sequence such that

                                              1
                    m .fQk /  k .fQk / <       for all m  k 2 N:
                                              k

Thus limk!1 m .fQk / D 0 for all m 2 N, i.e., limk!1 fQk D 0 in V . Hence
limk!1 T fQk D 0 because of the continuity of T . On the other hand

                                    m0 .T fQk /
                   m0 .T fQk / D                D 1 for all k 2 N;
                                    m .T fQk /
                                      0



which contradicts limk!1 fQk D 0.

   Finally, we note that a bilinear mapping BW U  V ! W is bounded with respect to
some Frechét spaces .U; .k /k2N /; .V; .k /k2N /; .W; .k /k2N / if for every k 2 N
there are some Ck > 0 and some n.k/ 2 N such that

             k .B.u; v//  Ck n.k/ .u/n.k/ .v/      for all u 2 U; v 2 V:

As for linear mappings B is bounded if and only if B is continuous.
216                                                  Appendix A Basic Results from Analysis


A.6 Exercises

      Exercise A.24. Proof Lemma A.12.

      Exercise A.25. Let I    R be an open interval, X be a Banach space, and let
      f W Rn  I ! X be such that:
        1. For every x 2 Rn the function I 3 t 7! f .x; t / 2 X is differentiable on I .

        2. For every t 2 I the function Rn 3 x 7! f .x; t / 2 X is integrable on Rn .

        3. There is some F 2 L1 .Rn / such that k@ t f .x; t /kX  F .x/ for almost all
           x 2 Rn .
      Prove that
                                                 Z
                             I 3 t 7! g.t / WD          f .x; t /dx 2 X
                                                   Rn

      is a differentiable function on I and for all t 2 I
                                            Z
                                    0
                                   g .t / D     @ t f .x; t /dx:
                                              Rn


      Exercise A.26. Let .V; .m /m2N / be a Fréchet space.
        1. Prove that d defined in (A.10) is a metric.

        2. Prove that limj !1 d.fj ; f / if and only if m .fj  f / D 0 for all m 2 N.

      Exercise A.27. Prove that Cb1 .Rn / equipped with the norms m D k  kCbm ,
      m 2 N0 , is a Fréchet space. – It can be used that Cbk .Rn / is a Banach space for
      every k 2 N0 .

      Exercise A.28. A subset A of a Fréchet space V is called bounded if
      supf 2A m .f / < 1 for every m 2 N. – Prove that T W V ! W is bounded
      if and only if T .A/ is bounded for every bounded A V .

      Exercise A.29. Let Vk , k 2 N, be a countable family of Fréchet spaces such
      T VkC1  Vk for all k 2 N with continuous embeddings. Prove that V WD
      that
        k2N Vk is a Fréchet space. V is called projective limes of Vk , k 2 N.
Bibliography


 [1] H. W. Alt, Lineare Funktionalanalysis, Springer-Lehrbuch, Berlin – Heidelberg – New
     York, 1985.
 [2] H. Amann, Linear and Quasilinear Parabolic Problems, Volume 1: Abstract Linear
     Theory, Birkhäuser, Basel – Boston – Berlin, 1995.
 [3] J. Bergh and J. Löfström, Interpolation Spaces, Springer, Berlin – Heidelberg – New
     York, 1976.
 [4] R. Denk, M. Hieber and J. Prüss, R-boundedness, Fourier multipliers and problems of
     elliptic and parabolic type, Mem. Amer. Math. Soc. 166 (2003), viii+114.
 [5] J. Duoandikoetxea, Fourier analysis, Graduate Studies in Mathematics 29, American
     Mathematical Society, Providence, RI, 2001, Translated and revised from the 1995
     Spanish original by David Cruz-Uribe.
 [6] O. Forster, Analysis 3, Vieweg Studium, Braunschweig, 1984.
 [7] J. Garcia-Cuerva and J. L. R. de Francia, Weighted Norm Inequalities and Related Top-
     ics, North Holland, Amsterdam, 1985.
 [8] L. Grafakos, Classical Fourier analysis, second edn., Graduate Texts in Mathematics
     249, Springer, New York, 2008.
 [9]          , Modern Fourier analysis, second edn., Graduate Texts in Mathematics 250,
       Springer, New York, 2009.
[10] G. Grubb, Functional Calculus of Pseudodifferential Boundary Problems, 2nd Edition,
     Birkhäuser, Basel – Boston – Berlin, 1996.
[11] G. Grubb, Distributions and operators, Graduate Texts in Mathematics 252, Springer,
     New York, 2009.
[12] L. Hörmander, The Analysis of Linear Partial Differential Operators II, Springer, Berlin
     – Heidelberg – New York, 1985.
[13]          , The Analysis of Linear Partial Differential Operators III, Springer, Berlin –
       Heidelberg – New York, 1985.
[14]          , The Analysis of Linear Partial Differential Operators I, Springer, Berlin –
       Heidelberg – New York, 1990.
[15] N. Jacob, Pseudo differential operators and Markov processes. Vol. I, Imperial College
     Press, London, 2001, Fourier analysis and semigroups.
218                                                                              Bibliography


[16]           , Pseudo differential operators & Markov processes. Vol. II, Imperial College
       Press, London, 2002, Generators and their potential theory.
[17]           , Pseudo differential operators and Markov processes. Vol. III, Imperial College
       Press, London, 2005, Markov processes and applications.
[18] N. Jacob, Lineare partielle Differentialgleichungen, Akademie Verlag, Berlin, 1995.
[19] Y. Katznelson, An Introduction to Harmonic Analysis, Cambridge University Press,
     Cambridge, New York, 1971.
[20] K. Königsberger, Analysis. 2, Springer-Lehrbuch, Springer-Verlag, Berlin, 1993.
[21] H. Kumano-Go, Pseudo-Differential Operators, MIT Press, Cambridge, Massachusetts,
     and London, 1974.
[22] S. Lang, Undergraduate analysis, Undergraduate Texts in Mathematics, Springer-
     Verlag, New York, 1983.
[23] E. H. Lieb and M. Loss, Analysis, second edn., Graduate Studies in Mathematics 14,
     American Mathematical Society, Providence, RI, 2001.
[24] A. Lunardi, Analytic semigroups and optimal regularity in parabolic problems,
     Birkhäuser, Basel – Boston – Berlin, 1995.
[25] A. Lunardi, Interpolation Theory, Appunti, Scuola Normale Superiore, Pisa, 1999.
[26] A. Pazy, Semigroups of linear operators and applications to partial differential equa-
     tions, Springer, Berlin – Heidelberg – New York, 1983.
[27] X. S. Raymond, Elementary Introduction to the Theory of Pseudodifferential Opera-
     tors, Studies in Advanced Mathematics, CRC Press, Boca Raton, Ann Arbor, Boston,
     London, 1991.
[28] M. Renardy and R. C. Rogers, An Introduction to Partial Differential Equations,
     Springer-Verlag, Berlin – Heidelberg – New York, 1993.
[29] W. Rudin, Real and complex analysis, third edn., McGraw-Hill Book Co., New York,
     1987.
[30]         , Functional analysis, second edn., International Series in Pure and Applied
       Mathematics, McGraw-Hill Inc., New York, 1991.
[31] E. M. Stein, Singular Integrals and Differentiability Properties of Functions, Princeton
     Hall Press, Princeton, New Jersey, 1970.
[32]          , Harmonic Analysis, Princeton Hall Press, Princeton, New Jersey, 1993.
[33] E. M. Stein and G. Weiss, Introduction to Fourier Analysis on Euclidean Spaces, Prince-
     ton University Press, Princeton, New Jersey, 1971.
[34] M. E. Taylor, Pseudodifferential Operators and Nonlinear PDE, Birkhäuser, 1991.
[35]          , Tools for PDE, Mathematical Surveys and Monographs, AMS, 2000.
[36] F. Treves, Topological Vector Spaces, Distributions and Kernels, Academic Press, New
     York, San Francisco, London, 1967.
Bibliography                                                                           219

[37] H. Triebel, Interpolation Theory, Function Spaces, Differential Operators, North-
     Holland Publishing Company, Amsterdam, New York, Oxford, 1978.
[38] H. Triebel, Theory of function spaces. II, Monographs in Mathematics 84, Birkhäuser
     Verlag, Basel, 1992.
[39]           , Theory of function spaces. III, Monographs in Mathematics 100, Birkhäuser
       Verlag, Basel, 2006.
[40] H. Triebel, Theory of function spaces, Monographs in Mathematics 78, Birkhäuser Ver-
     lag, Basel, 1983.
[41] W. Walter, Einführung in die Theorie der Distributionen, third edn., Bibliographisches
     Institut, Mannheim, 1994.
[42] L. Weis, Operator-valued Fourier multiplier theorems and maximal Lp -regularity, Math.
     Ann. 319 (2001), 735–758.
[43] D. Werner, Funktionalanalysis, extended edn., Springer-Verlag, Berlin, 2000.
[44] M. W. Wong, An introduction to pseudo-differential operators, second edn., World Sci-
     entific Publishing Co. Inc., River Edge, NJ, 1999.
[45] K. Yosida, Functional Analysis, Springer, Berlin – Heidelberg – New York, 1974.
[46] E. Zeidler, Applied functional analysis, Applied Mathematical Sciences 108, Springer-
     Verlag, New York, 1995, Applications to mathematical physics.
Index



BMO.Rn / 113                         convolution of functions 12, 211
   s
Bpq   .Rn / 153                      convolution of sequences 206
C .Rn / 5
   ˛                                 convolution with tempered distribu-
Cs .Rn / 154                                  tion 26
C m;˛ .Rn / 5
   1
Cpoly  .Rn / 13                      delta distribution 21
H s .Rn / 28                         derivative of a distribution 21
                                     dilation of a function 10
Hps .Rn / 30
                                     distribution, regular tempered 21
L1 -modulus of continuity 104
                                     distributional derivative 21
L1weak .Rn / 89, 119
   p                                 distributions, tempered 20
Lloc 204                             dual space of a Banach space 208
S1;0 .RN  Rn / 40
   m
                                     duality product 208
Wp1 .a; bI X / 212                   dyadic cubes 91
Wpm .Rn / 27                         dyadic partition of unity 107, 134, 150
Am   .R  R / 46
         n    n
   0
S .R / 20
       n                             elliptic pseudodifferential symbol 57
S.Rn / 13
                                     Fourier multiplication operators 86
†ı 178
                                     Fourier transform of a tempered distribu-
`p .Z/ 206
                                               tion 24
`sq .MI X / 154
                                     Fourier transformation 9
H 1 -atoms 114                       Fourier transformation on S 0 .Rn/ 24
H p .Rn / 113                        Fourier transformation, vector-valued 30
                                     functions of bounded mean oscilla-
amplitudes 46                                  tions 113
                                     functions, smooth and polynomially
Besov space 153                                bounded 13
Bessel potential space 28, 30        fundamental solution 26
Bochner integrable 209
Bochner integral 209                 Hölder inequality 204
Bochner spaces 211                   Hölder–Zygmund spaces 154
                                     Hörmander condition 88
Calderón–Zygmund decomposition 91,   Hardy space 113
          126                        Heaviside function 22
convolution 20                       Hilbert transform 19, 106
222                                                                             Index


homogeneous function 34                   pseudodifferential operator, .x; y/-
hypo-elliptic 142                                  form 66
                                          pseudodifferential operator, x-form 66
inverse Fourier of a tempered distribu-   pseudodifferential operator, y-form 66
          tion 24                         pseudodifferential symbol 40
inverse Fourier transformation 16
Inversion Formula 16, 32                  quasi-norm 119
                                          quasi-normed linear space 119
Lebesgue spaces, vector-valued 211
Lebesgue’s differentiation theorem 94     rapidly decreasing functions 13
Lebesgue’s theorem on dominated con-      resolvent of a linear operator 207
           vergence 210                   resolvent set of a linear operator 207
linear operator, bounded 206              retract 159
linear operator, closed 207               Riesz operator 19, 100, 106
linear operator, unbounded 207
locally integrable 204                    Schwartz functions 13
                                          semi-group, analytic 193
manifold, smooth and compact 76           sharp function 113
Marcinkiewicz interpolation theorem 96    singular support 142
Marcinkiewicz interpolation theorem,      Sobolev space 27
          vector-valued 128               Sobolev space, vector-valued 212
maximal operator 92, 93                   spectrum of a linear operator 207
Mikhlin multiplier theorem 107            strongly measurable 209
Mikhlin multiplier theorem, Hilbert-      support of a continuous function 23
          space-valued 129                support of a distribution 23

parameter-elliptic 178, 189               translation invariant operator 88
Peetre’s inequality 44                    translation of a function 10
Plancherel’s Theorem 17, 33               Triebel–Lizorkin space 157
principle value distributions 100
product with tempered distribution 21     weak derivative 212
pseudo-local 142                          weak type-.1; 1/ estimate 89
pseudodifferential operator 41            weak- compactness in L1 .Rn / 208



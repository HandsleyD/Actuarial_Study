---
normalized_id: shared-pdf-reference-new-foundations-in-mathematics-the-g
exam_code: SHARED
material_scope: new foundations in mathematics the g.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/New Foundations in Mathematics The G.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-new-foundations-in-mathematics-the-g

New Foundations in Mathematics
namdatviet E-books collection

Visit us at:
         http://tusachtonghop.com/forums/

Thank you, and happy learning!
Garret Sobczyk



New Foundations
in Mathematics
The Geometric Concept of Number
Garret Sobczyk
Departamento de Fı́sica y Matemáticas
Universidad de Las Américas
Puebla, Mexico




ISBN 978-0-8176-8384-9          ISBN 978-0-8176-8385-6 (eBook)
DOI 10.1007/978-0-8176-8385-6
Springer New York Heidelberg Dordrecht London

Library of Congress Control Number: 2012948769

Mathematics Subject Classification (2010): 11A05, 15A16, 15A18, 15A21, 15A63, 15A63, 15A66,
15A69, 15A75, 17B45, 22E60, 51N10, 51N15, 53A04, 53A05, 53A30, 58A05, 65D05, 83A05, 20B30

© Springer Science+Business Media New York 2013
This work is subject to copyright. All rights are reserved by the Publisher, whether the whole or part of
the material is concerned, specifically the rights of translation, reprinting, reuse of illustrations, recitation,
broadcasting, reproduction on microfilms or in any other physical way, and transmission or information
storage and retrieval, electronic adaptation, computer software, or by similar or dissimilar methodology
now known or hereafter developed. Exempted from this legal reservation are brief excerpts in connection
with reviews or scholarly analysis or material supplied specifically for the purpose of being entered
and executed on a computer system, for exclusive use by the purchaser of the work. Duplication of
this publication or parts thereof is permitted only under the provisions of the Copyright Law of the
Publisher’s location, in its current version, and permission for use must always be obtained from Springer.
Permissions for use may be obtained through RightsLink at the Copyright Clearance Center. Violations
are liable to prosecution under the respective Copyright Law.
The use of general descriptive names, registered names, trademarks, service marks, etc. in this publication
does not imply, even in the absence of a specific statement, that such names are exempt from the relevant
protective laws and regulations and therefore free for general use.
While the advice and information in this book are believed to be true and accurate at the date of
publication, neither the authors nor the editors nor the publisher can accept any legal responsibility for
any errors or omissions that may be made. The publisher makes no warranty, express or implied, with
respect to the material contained herein.

Printed on acid-free paper

Springer is part of Springer Science+Business Media (www.birkhauser-science.com)
I dedicate this book to those who search for
truth and beauty no matter how treacherous
and narrow that path may be.
Preface




This book provides an introduction to geometric algebra and its application to
diverse areas of mathematics. It maintains the spirit of its predecessor, Clifford
Algebra to Geometric Calculus: A Unified Language for Mathematics and Physics,
and as such it has many unique features not seen in any other undergraduate
textbook. It provides many innovative ways of looking at geometrical ideas and
topics for student research and thesis projects.
   The material has been developed over the many years that the author has taught
undergraduate courses at the Universidad de Las Américas-Puebla, Mexico, in linear
algebra, vector calculus, differential geometry, numerical analysis, modern algebra,
and number theory. Whereas this book cannot be considered a textbook for all
of these different subjects, there is a common theme they all share: they can all
be efficiently formulated using the unified geometric number system advocated
here. Geometric algebra, which has undergone extensive development in the second
half of the twentieth Century, has its origins in the seminal works of Grassmann,
Hamilton, and Clifford in the nineteenth century.
   The book begins with the introduction of the spectral basis in modular number
systems and in modular polynomials. This often overlooked concept provides
insight into and greatly simplifies the proofs of many basic theorems in number
theory and the corresponding closely related structure theorems of a linear operator.
Since geometric numbers obey exactly the same algebraic rules as square matrices
of real numbers, the languages are completely compatible and structure theorems
that are valid for one are equally valid for the other.
   The concept of a matrix as an array of numbers with an unintuitive multiplication
rule hardly provides a geometric way of looking at things. Nevertheless, matrices
have proven to be an extremely effective computational tool and have played a major
role in the development of diverse areas of mathematics. Geometric algebra rectifies
this defect by providing a geometric perspective, and many new algebraic tools.
Combining both of these powerful systems by simply considering matrices whose
elements are geometric numbers adds much needed geometric content and flexibility
to both languages. The author hopes that this book captures both the idea and the


                                                                                  vii
viii                                                                         Preface


spirit of the powerful geometric number system that has kept him going since he
learned about the subject as a graduate student at Arizona State University many
years ago.
    We assume readers to have had undergraduate differential and integral calculus,
a first course in modern algebra, and the mathematical maturity that an upper-level
mathematics or physics undergraduate student might be expected to have. The many
topics covered in the book should also appeal to first-year graduate students in
mathematics, physics, engineering and computer science. Any unfamiliarity that a
reader might have regarding mathematical terminology can be quickly overcome by
a quick reference to the unlimited resources on the internet. We also recommend that
the reader has knowledge of and access to symbolic mathematical software such as
Mathematica or Maple. Such software considerably lightens the computational work
required and makes for easy verification of results. A simple Mathematica package
is provided for calculating the spectral basis for a modular polynomial.
    There are three main groupings of interrelated core chapters:
• Chapters 1–5 introduce the fundamental concepts of a spectral basis of modular
  numbers and modular polynomials with applications in number theory, numerical
  analysis, and linear algebra. The hyperbolic numbers, introduced alongside the
  well-known complex numbers, are used to solve the cubic equation and provide
  a mathematical foundation for the theory of special relativity. The geometric
  extension of the real numbers is achieved by introducing new anticommuting
  square roots of plus or minus one which represent orthogonal directions in
  successively higher dimensions.
• Chapters 7–10 lay down the ideas of linear and multilinear algebra. Ma-
  trices of geometric numbers are considered throughout. New proofs of the
  Cayley–Hamilton Theorem, Gram–Schmidt orthogonalization, and the spectral
  decomposition of a linear operator are given in geometric algebra, as well as a
  comprehensive geometric interpretation of complex eigenvalues and eigenvectors
  in an Hermitian (definite or indefinite) inner product space.
• Chapters 13–16 develop the basic ideas of vector calculus and differential
  geometry in the context of geometric algebra. The classical integration theorems
  are derived from a single fundamental theorem of calculus. Manifolds are
  embedded in Euclidean or pseudo-Euclidean spaces and consequently have
  both intrinsic and extrinsic curvature, characterized by the projection and shape
  operators. Highlighted is a special treatment of conformal mappings and the
  conformal Weyl tensor, which have applications in physics and engineering.
Chapter 6 covers some of the more traditional topics in linear algebra which are not
otherwise used in this book. Chapters 11, 12, 17, and 18 provide additional breadth
and scope by treating the symmetric group, by giving a novel look at the concept
of space-time in special relativity, by laying down the basic ideas of projective
geometry, and by giving an introduction to Lie algebras and Lie groups, topics which
are not usually covered in an undergraduate course. In the Table of Contents, a “*”
is used to indicate those sections which are considerably more technical and may be
omitted on first reading.
Preface                                                                            ix


   The author is indebted to many students and collegues from around the world
who have contributed much during the many stages of the development of these
ideas. Foremost he is indebted to David Hestenes, who first introduced him to
geometric algebra many years ago as a graduate student at Arizona State University
during the years 1965–1971. The author is indebted to Roman Duda of the
Polish Academy of Sciences, Bernard Jancewicz, Jan Łopuszański, and Zbigniew
Oziewicz of the Institute of Theoretical Physics in Wrocław, Poland, and Stony
Brook University, for encouragement and support during these difficult early years.
He wants to thank Rafal Ablamowicz (USA), Timothy Havel (USA), William
Baylis (Canada), and Pertti Lounesto (Finland), who contributed in different ways
to the writing of this book. In addition, he wants to thank Jaime Keller for inviting
him to Mexico, Luis Verde-Star (Mexico), Waldyr Rodrigues (Brazil), Josep Parra
(Spain), and Eduardo Bayro-Corrochano (Mexico). Among former students and
now sometimes collaborators, he wants to thank José Marı́a Pozo (Spain), Marco
Antonio Rodrı́guez (Mexico), Omar Leon Sanchez (Mexico), and Alejandra C.
Vicente (Mexico). Graphics design artist Ana Sánchez Stone was a great help with
all of the figures in Chap. 11 and in particular Fig. 11.6. The author is greatly
indebted to Universidad de Las Américas-Puebla and Sistemas Nacionales de
Investigadores de México, for many years of support. This book could not have
been written without the constant support and encouragement over the years by my
wife, Wanda, my mother and father and is a present for my mother’s 100th birthday.

Cholula, México                                                    Garret Sobczyk
Contents




1   Modular Number Systems . . . . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                  1
      1.1 Beginnings . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .      1
      1.2 Modular Numbers.. . . . . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                 2
      1.3 Modular Polynomials .. . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                    8
      1.4 Interpolation Polynomials . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                      14
     *1.5 Generalized Taylor’s Theorem . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                             17
           1.5.1 Approximation Theorems.. . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                                      18
           1.5.2 Hermite–Pade Approximation .. . . . . . .. . . . . . . . . . . . . . . . . . . .                                           20
2   Complex and Hyperbolic Numbers . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                             23
      2.1 The Hyperbolic Numbers .. . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                        24
      2.2 Hyperbolic Polar Form . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                    26
      2.3 Inner and Outer Products . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                     30
      2.4 Idempotent Basis . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .           33
      2.5 The Cubic Equation .. . . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                35
      2.6 Special Relativity and Lorentzian Geometry . .. . . . . . . . . . . . . . . . . . . .                                             37
3   Geometric Algebra . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .      43
     3.1 Geometric Numbers of the Plane. . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                                 45
     3.2 The Geometric Algebra G3 of Space . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                                       50
     3.3 Orthogonal Transformations . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                            54
     3.4 Geometric Algebra of Rn . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                       57
     3.5 Vector Derivative in Rn . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                   63
4   Vector Spaces and Matrices . . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                 67
      4.1 Definitions .. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .   67
      4.2 Matrix Algebra .. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .          70
      4.3 Matrix Multiplication .. . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                 73
      4.4 Examples of Matrix Multiplication . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                                  75
      4.5 Rules of Matrix Algebra .. . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                     78
      4.6 The Matrices of G2 and G3 . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                        79



                                                                                                                                            xi
xii                                                                                                                                Contents


  5     Outer Product and Determinants .. . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                     85
         5.1 The Outer Product . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .          85
         5.2 Applications to Matrices. . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                92
  6     Systems of Linear Equations . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . . 95
          6.1 Elementary Operations and Matrices . . . . . . . . . .. . . . . . . . . . . . . . . . . . . . 95
          6.2 Gauss–Jordan Elimination .. . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . . 100
          6.3 LU Decomposition .. . . . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . . 103
  7     Linear Transformations on Rn . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . . 107
          7.1 Definition of a Linear Transformation . . . . . . . . .. . . . . . . . . . . . . . . . . . . . 107
          7.2 The Adjoint Transformation .. . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . . 113
  8     Structure of a Linear Operator . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .               117
          8.1 Rank of a Linear Operator .. . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                 117
          8.2 Characteristic Polynomial . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                120
          8.3 Minimal Polynomial of f . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                122
          8.4 Spectral Decomposition . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .               125
         *8.5 Jordan Normal Form .. . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .            130
  9     Linear and Bilinear Forms . . . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .          137
          9.1 The Dual Space . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .     137
          9.2 Bilinear Forms . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .   142
          9.3 Quadratic Forms . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .      144
          9.4 The Normal Form .. . . . . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .         145
10 Hermitian Inner Product Spaces . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                        153
    10.1 Fundamental Concepts.. . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                    154
    10.2 Orthogonality Relationships in Pseudo-Euclidean Space .. . . . . . . .                                                           157
    10.3 Unitary Geometric Algebra of Pseudo-Euclidean Space.. . . . . . . . .                                                            161
    10.4 Hermitian Orthogonality.. . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                     166
    10.5 Hermitian, Normal, and Unitary Operators .. . .. . . . . . . . . . . . . . . . . . . .                                           172
   *10.6 Principal Correlation .. . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .              175
   *10.7 Polar and Singular Value Decomposition .. . . . .. . . . . . . . . . . . . . . . . . . .                                         178
11 Geometry of Moving Planes . . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                 181
    11.1 Geometry of Space–Time . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                        181
    11.2 Relative Orthonormal Basis . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                        186
    11.3 Relative Geometric Algebras .. . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                          189
    11.4 Moving Planes . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .         191
   *11.5 Splitting the Plane . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .           194
12 Representation of the Symmetric Group.. . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                                   201
    12.1 The Twisted Product .. . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                201
          12.1.1 Special Properties . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                      203
          12.1.2 Basic Relationships . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                         204
    12.2 Geometric Numbers in Gn,n . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                         205
    12.3 The Twisted Product of Geometric Numbers ... . . . . . . . . . . . . . . . . . . .                                               207
Contents                                                                                                                                       xiii


          12.4 Symmetric Groups in Geometric Algebras . . . .. . . . . . . . . . . . . . . . . . . .                                           210
               12.4.1 The Symmetric Group S4 in G4,4 . . . . .. . . . . . . . . . . . . . . . . . . .                                          211
               12.4.2 The Geometric Algebra G4,4 . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                                      214
               12.4.3 The General Construction in Gn,n . . . .. . . . . . . . . . . . . . . . . . . .                                          217
         *12.5 The Heart of the Matter .. . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                 218
13 Calculus on m-Surfaces . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .               223
    13.1 Rectangular Patches on a Surface . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                                   223
    13.2 The Vector Derivative and the Directed Integral . . . . . . . . . . . . . . . . . .                                                   229
    13.3 Classical Theorems of Integration . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                                    236
14 Differential Geometry of Curves . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                          243
    14.1 Definition of a Curve . . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                    243
    14.2 Formulas of Frenet–Serret .. . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                           245
    14.3 Special Curves . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .             248
    14.4 Uniqueness Theorem for Curves .. . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                                     249
15 Differential Geometry of k-Surfaces .. . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                               253
    15.1 The Definition of a k-Surface M in Rn . . . . . . . .. . . . . . . . . . . . . . . . . . . .                                          254
    15.2 The Shape Operator .. . . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                    261
    15.3 Geodesic Curvature and Normal Curvature . . .. . . . . . . . . . . . . . . . . . . .                                                  267
    15.4 Gaussian, Mean, and Principal Curvatures of M . . . . . . . . . . . . . . . . .                                                       270
    15.5 The Curvature Bivector of a k-Surface M . . . .. . . . . . . . . . . . . . . . . . . .                                                271
16 Mappings Between Surfaces. . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                       275
    16.1 Mappings Between Surfaces . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                                275
    16.2 Projectively Related Surfaces . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                              279
    16.3 Conformally Related Surfaces . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                                 282
    16.4 Conformal Mapping in R p,q . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                             286
    16.5 Möbius Transformations and Ahlfors–Vahlen Matrices . . . . . . . . . .                                                               287
   *16.6 Affine Connections . . . . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                   291
17 Non-euclidean and Projective Geometries .. . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                                         297
    17.1 The Affine n-Plane Ahn . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                       297
    17.2 The Meet and Joint Operations . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                                  299
    17.3 Projective Geometry . . . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                    304
    17.4 Conics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .   312
    17.5 Projective Geometry Is All of Geometry . . . . . .. . . . . . . . . . . . . . . . . . . .                                             319
    17.6 The Horosphere H p,q . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                       321
18 Lie Groups and Lie Algebras. . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                       329
    18.1 Bivector Representation . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                        329
    18.2 The General Linear Group.. . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                             333
    18.3 The Algebra Ωn,n . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                 337
    18.4 Orthogonal Lie Groups and Their Lie Algebras .. . . . . . . . . . . . . . . . . .                                                     339
    18.5 Semisimple Lie Algebras .. . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                           345
    18.6 The Lie Algebras An . . . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                    348
xiv                                                                                                                                                  Contents


References .. .. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . . 353

Symbols . . . . .. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . . 357

Index . . . . . . . . .. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . . 363
Chapter 1
Modular Number Systems




                                For out of olde feldes, as men seith,
                                Cometh al this newe corne fro yeere to yere;
                                And out of olde bokes, in good feith,
                                Cometh al this new science that men lere.
                                                                                      –Chaucer



We begin by exploring the algebraic properties of the modular numbers, sometimes
known as clock arithmetic, and the modular polynomials. The modular numbers and
modular polynomials are based upon the Euclidean algorithm, which is simply the
idea of dividing one integer into another or one polynomial into another polynomial,
which we first learned in secondary school. Studying the modular number system
leads us to introduce the concept of a spectral basis. This fundamental concept,
which is largely neglected in elementary mathematics, will serve us well in our
study of linear algebra and other topics in later chapters.1



1.1 Beginnings

In Euclid’s Elements, Book VII, we find
   Proposition 2: Given two numbers not prime to one another, to find their greatest common
   measure.

Then follows what mathematicians refer to as the Euclidean algorithm [32]. We shall
need the following consequence of this venerable algorithm. Given r positive




1 This chapter is based upon an article by the author that appeared in the American Mathematical

Monthly [80].

G. Sobczyk, New Foundations in Mathematics: The Geometric                                     1
Concept of Number, DOI 10.1007/978-0-8176-8385-6 1,
© Springer Science+Business Media New York 2013
2                                                                 1 Modular Number Systems


integers h1 , h2 , . . . , hr ∈ N whose greatest common divisor (gcd) is 1 ∈ N, then there
exist integers b1 , b2 , . . . , br ∈ Z with the property that

                             b1 h1 + b2 h2 + · · · + br hr = 1.                      (1.1)

The justified fame of the Euclidean algorithm arrives from the fact that it has a
much larger realm of applicability than just the integers. In particular, Let K be
any field and let K[x] be the corresponding integral domain of polynomials over K
[28, p.248, 250]. Given r polynomials h1 (x), h2 (x), . . . , hr (x) ∈ K[x] whose greatest
common divisor (gcd) is 1 ∈ K (no common zeros), then there exist polynomials
b1 (x), b2 (x), . . . , br (x) ∈ K[x] with the property that

                   b1 (x)h1 (x) + b2 (x)h2 (x) + · · · + br (x)hr (x) = 1            (1.2)

The identities (1.1) and (1.2), and the striking analogy between them, provide the
basis for what follows.



Examples

1. gcd(4, 15) = 1 =⇒ 4 · 4 + (−1) · 15 = 1,
2. gcd(4, 15, 7) = 1 =⇒ (−24) · 4 + 6 · 15 + (+1) · 7 = 1,
3. gcd(x + 1, x2 + 1) = 1 =⇒ (−1/2)(x − 1)(x + 1) + (1/2)(x2 + 1) = 1,
4. gcd(x + 1, x2 + 1, x + 2) = 1 =⇒ x2 (x + 1) + (x2 + 1) − x2(x + 2) = 1.



1.2 Modular Numbers

Given any integer n ∈ Z and any positive integer h ∈ N, the Euclidean algorithm
tells us that there is a unique integer q ∈ Z and a nonnegative integer r, 0 ≤ r < h,
such that
                                       n = qh + r.
The set Zh = {0, 1, 2, . . . , h − 1} of all possible remainders r, after division by h,
denotes the modular number system modulo(h) where h ∈ N. The numbers b ∈ Zh
represent equivalence classes, and addition, multiplication, and equality in Zh are
                                        h           h
defined modulo(h). We write b + c = d and bc = d to mean that b + c ≡ d mod(h)
and bc ≡ d mod(h). The modular number system Zh is isomorphic to the factor ring
Z/< h > for the ideal

                     < h >= {0, ±h, ±2h, ±3h, . . .} = {nh}n∈Z
1.2 Modular Numbers                                                                       3


over the integers Z. In terms of the ideal < h >, the equivalence classes of Zh are
explicitly expressed by
                       h
                   Zh ={0+ < h >, 1+ < h >, . . . , h − 1+ < h >}.                    (1.3)

The technical details, in the framework of modern algebra, can be found in [28,
p.261, 262].
   For any positive integer h ∈ N, by unique prime factorization, we can write h =
pm 1 m2
  1 p2 . . . pr , where each pi is a distinct prime factor of h. We can also order the
              mr
         mi
factors pi so that their multiplicities satisfy 1 ≤ m1 ≤ m2 ≤ · · · ≤ mr . Now define
hi = h/pmi for i = 1, . . . , r. Since the hi have no common factor other than 1, (1.1)
            i

holds, and we have
                             b1 h1 + b2 h2 + · · · + br hr = 1,
for an appropriate choice of the integers bi ∈ Z. Whereas this equation holds in
Z, it is just as valid when interpreted as an identity in Zh . Defining the numbers
   h
si = bi hi ∈ Zh , we can rewrite the above identity as
                                                        h
                                    s1 + s2 + · · · + sr = 1.                         (1.4)

   When interpreted as an identity among the numbers si ∈ Zh , the following
additional important properties are easily verified by multiplying (1.4) on both sides
by si and simplifying modulo h. We find that
                                          h             h
                                    s2i = si and si s j = 0                           (1.5)

for i, j = 1, 2, . . . , r, and i = j. We say that the si ∈ Zh are mutually annihiliating
idempotents that partition unity. The set of numbers {s1 , s2 , . . . , sr } make up what
we call the spectral basis of Zh .
   Now suppose that c ∈ Zh . Multiplying both sides of the identity (1.4) by c gives
                                                            h
                                cs1 + cs2 + · · · + csn = c.

Since the si are idempotents, they act as projections onto the modular numbers
                                                                                        h
Z pmi ; this is clear because from the definition of si = bi hi , it follows that pm
                                                                                   i si = 0.
                                                                                     i
   i
Thus, any number c ∈ Zh can be written in the spectral basis as the unique linear
combination
                                     r
                              c = ∑ (c mod pm
                                h
                                            i )si in Zh ,
                                              i
                                                                                      (1.6)
                                    i=1

of the basis elements s1 , s2 , . . . , sr . This last identity is also known as the famous
Chinese Remainder Theorem, dating back to the fourth century A.D. The interested
reader may check out the web site
   http://en.wikipedia.org/wiki/Chinese remainder theorem
4                                                                                    1 Modular Number Systems


   The modular number systems Z pm , modulo a power of a prime, play a particularly
important role in Number Theory in that most modular problems reduce to problems
involving a power of a prime. In dealing with such problems, it is best to represent
numbers a ∈ Z pm in terms of the p-adic number basis

                                                                               m−1
                              a = (am−1 am−2 . . . a1 a0 ) p = ∑ ai pi                                  (1.7)
                                                                               i=0

where each digit ai ∈ Z p . Using (1.7) in (1.6), we find that

                                     r                              r mi −1
                              c = ∑ (c mod pm
                                            i )si = ∑ ∑ ci, j qi ,
                                h             i                hj
                                                                                                        (1.8)
                                    i=1                            i=1 j=0

                          h
where q0i = si and qij = pij si for i = 1, . . . , r and j = 1, . . . , mi − 1. The set

                                          ∪ri=1 {si , qi , . . . , qimi −1 }

is called the complete spectral basis of Zh .
    We are now in a position to directly solve for the idempotents si . Multiplying
each side of the identity (1.4) by hi gives

                                                           h
                                                    hi si = hi ,

which can be easily solved in Zh , getting si = (h−1
                                                  i  mod pm
                                                          i )hi for each i =
                                                            i

                     h
1, 2, . . . , r. The qi = pi si are nilpotent in Zh , for i = 1, 2, . . . , r. The nilpotents qi have
the index of nilpotency mi , since qimi −1 = 0 but qm       i h
                                                            i = 0 in Zh .
    Let us calculate the complete spectral basis {s1 , s2 , q2 } for Z12 where h = 12 =
                                                                                              h
3 · 22, so that p1 = 3 and p2 = 2. By (1.4), we must have s1 + s2 = 1. By multiplying
this equation by
                               h                      h
                          h1 =     = 22 and h2 = 2 = 3,
                               p1                     p2
we get with the help of (1.6)

                                          h                                           h
                         4s1 + 4s2 = 4,            or s1 = (4 mod 3)s1 = 4,

and
                                h                                          h                      h
                 3s1 + 3s2 = 3,           or 3s2 = (3 mod 4) = 3 =⇒ s2 = 9,
                           h                                                              h
respectively. From s2 = 9, we easily calculate q2 = 2s2 = 18 = 6, so the complete
spectral basis for z12 is
                             {s1 = 4, s2 = 9, q2 = 6}.                      (1.9)
1.2 Modular Numbers                                                                            5


  Much of the power of the spectral basis is a consequence of the simple rules for
multiplication of its idempotent and nilpotent elements. We give here the table of
multiplication for the spectral basis (1.9) of Z12 .

                                   · mod 12          s1        s2         q2
                                   s1                s1        0          0
                                   s2                0         s2         q2
                                   q2                0         q2         0


For a second example, consider h = 360 = 5 ·32 ·23 for which h1 = 32 ·23 , h2 = 5 ·23
and h3 = 5 · 32. The spectral basis satisfying (1.4) and (1.5) is found to be
                             {s1 = 216, s2 = 280, s3 = 225},

as we now show. To find s1 , multiply s1 + s2 + s3 = 1 by h1 = 32 · 23 = 72, and use
(1.6) to get
                             72s1 = 2s1 = 72 in Z360
or 16s1 = s1 = 8 ·72 = 216. Similar calculations give s2 and s3 . An arbitrary c ∈ Z360
can now be written
                  h                       h
                c = cs1 + cs2 + cs3 =(c1 )5 s1 + (c2 c3 )3 s2 + (c4 c5 c6 )2 s3 ,

where c1 ∈ Z5 , c2 , c3 ∈ Z3 , and c4 , c5 , c6 ∈ Z2 . The complete spectral basis of Z360 is

         {s1 = 216, s2 = 280, q2 = 120, s3 = 225, q3 = 90, q23 = 180}.                     (1.10)

The multiplication table for spectral basis of Z360 is given below:

                          · mod 360       s1    s2        q2        s3         q3    q23
                          s1              s1    0         0         0          0     0
                          s2              0     s2        q2        0          0     0
                          q2              0     q2        0         0          0     0
                          s3              0     0         0         s3         q3    q23
                          q3              0     0         0         q3         q23   0
                          q23             0     0         0         q23        0     0


  Employing the spectral basis, we also have an easy formula for finding the inverse
b−1 of b ∈ Zh . We have
                                           r
                              b−1 = ∑ (bi(mi −1) . . . bi0 )−1
                                      h
                                                            pi si ,
                                          i=1

so the problem of finding b−1 ∈ Zh is reduced to the problem of finding the inverse
in a prime power modular number system Z pm . For example, using the spectral basis
(1.9) for Z12 , we can easily calculate the inverse 7−1 of 7 ∈ Z12 . We first write
6                                                                     1 Modular Number Systems


                                             h                  1     1 h 1
                   7s1 + 7s2 = s1 + 3s2 = 7          ⇐⇒           s1 + s2 = .
                                                                1     3    7
                                   h                      h
But 13 mod 4 = −1 mod4, so 17 = s1 − s2 = 4 − 9 =7. We can easily check that 7 · 7 =
49 = 1 mod12 as required.
    Using p-adic notation, it is easy to understand that a number b ∈ Z pm will be
divisible by pk if and only if b = (bm−1 . . . bk 0 . . . 0) p . Also, b will not be divisible
by pk+1 if bk = 0. The Euler phi function or totient function http://en.wikipedia.org/
wiki/Euler’s totient function φ (c), for c ∈ N, is defined to be the number of positive
integers b, 1 ≤ b < c, relatively prime to c, i.e., such that gcd(b, c) = 1, [61, p.51].
It follows that if p ∈ N is a prime, then φ (pm ) = (p − 1)pm−1.
    Since a number
                                        r
                                 c = ∑ (ci(mi −1) . . . ci0 ) pi si
                                   h

                                       i=1

will be relatively prime to h if and only if ci0 = 0 mod(pi ) for i = 1, . . . , r, it follows
that
                                                 r
                                 φ (h) = ∏(pi − 1)pm
                                                   i
                                                     i −1

                                             i=1

for the composite number h = ∏ri=1 pm     i
                                        i . Since the product of any two elements
x, y ∈ Zh which are relatively prime to h is also relatively prime to h, it follows that
all the elements in Zh which are relatively prime to h form a multiplicative group
of order φ (h), called the U-group U(h) [28]. Once again, appealing to the Theorem
of Lagrange for groups, we have Euler’s generalization of Fermat’s theorem that
bφ (h) = 1 mod(h) for each b ∈ Zh such that gcd(b, h) = 1.
    A very basic result of number theory is Fermat’s theorem that states bφ (p) =
1 mod(p), where p is any prime number and gcd(p, b) = 1. The Fermat theorem is
an immediate consequence of the fact that the nonzero elements of the finite field
Z p under multiplication make up a group of order φ (p) = p − 1 and the Theorem of
Lagrange which tells us that the order of each element of a group must divide the
order of the group.



Exercises

    1. Calculate
       (a) 3 + 8 mod 11 and 3 · 8 mod 11.
       (b) 3 + 4 = in Z11 , 3 · 4 = in Z11 .
       (c) Find 3−1 = and 5−1 = in Z11 .
       (d) Find 3−1 = and 5−1 = in Z7 .
    2. (a) Write 87 = (a1 a0 )5 as a 5-adic integer in Z25 .
       (b) Write 53 = (b1 b0 )5 as a 5-adic integer in Z25 .
1.2 Modular Numbers                                                                       7


    (c) Use (a) and (b) to find 87 + 53 and 87 · 53 in Z25 .
    (d) Find 87−1 and 53−1 in Z25 .
 3. (a) Write 35 = (p1 p0 )3 as a 3-adic integer in Z9 .
    (b) Write 53 = (b1 b0 )3 as a 3-adic integer in Z9 .
    (c) Use (a) and (b) to find 35 + 53 and 35 · 53 in Z9 .
    (d) Find 35−1 and 53−1 in Z9 .
 4. (a) Write 87 = (p2 p1 p0 )2 as a 2-adic integer in Z8 .
    (b) Write 53 = (b2 b1 b0 )2 as a 2-adic integer in Z8 .
    (c) Use (a) and (b) to find 87 + 53 and 87 · 53 in Z8 .
    (d) Find 87−1 and 53−1 in Z8 .
 5. (a) Write 35 = (p2 p1 p0 )3 as a 3-adic integer in Z27 .
    (b) Write 53 = (b2 b1 b0 )3 as a 3-adic integer in Z27 .
    (c) Use (a) and (b) to find 35 + 53 and 35 · 53 in Z27 .
    (d) Use (a) and (b) to find 35−1 and 53−1 in Z27 .
 6. (a) Find the complete spectral basis {s1 , s2 , q2 } of h = 2 · 32 = 18 in Zh .
    (b) Express a = 35 and b = 51 in terms of the spectral basis in Z18 .
    (c) Find 35 + 51 in Z18 using the spectral basis.
    (d) Find 35 · 51 in Z18 using the spectral basis.
    (e) Find 35−1 and 51−1 in Z18 if they exist using the spectral basis. If an inverse
        does not exist, justify your answer.
 7. (a) Find the complete spectral basis {s1 , s2 , q2 , s3 , q3 } of h = 32 · 22 · 52 = 900
        for Zh .
    (b) Express a = 351 and b = 511 in terms of the spectral basis in Z900 .
    (c) Find 351 + 511 in Z900 using the spectral basis.
    (d) Find 351 · 511 in Z900 using the spectral basis.
    (e) Find 351−1 and 511−1 in Z900 if they exist. If an inverse does not exist,
        justify your answer.
 8. Referring back to the previous problems, find the Euler function φ (h) for h =
    7, 11, 25, 35, 8, 27, 18, and h = 900.
 9. (a) Use problem 6 (e) to solve 35x = 51 mod(18).
    (b) Use problem 7 (e) to solve 351x = 511 mod(900).
10. (a) Use the spectral basis found in problem 6 to find all solutions to the
        equation x2 = 1 mod(18).
    (b) Use the spectral basis found in problem 6 to find all solutions to the
        equation x2 = −1 mod(18).
11. Solve the system of congruences

                                       x = 3 modulo 13
                                       x = 4 modulo 16
                                       x = 5 modulo 21

    for their common solution x.
12. Verify that the si in (1.5) are mutually annihiliating idempotents as claimed.
8                                                                   1 Modular Number Systems


1.3 Modular Polynomials

We now treat the modular polynomial ring K[x]h ≡ K[x]/<h(x)> of the polynomial
h ≡ h(x) over an arbitrary field K in an exactly analogous way to the modular
numbers Zh . In this case, the ideal < h(x) > over the polynomial ring K[x] is
defined by
                        < h(x) >= { f (x)h(x)|        f (x) ∈ K[x]}.

In terms of the ideal < h(x) >, the equivalence classes of K[x]h are explicitly
expressed by

             K[x]h = {0+ < h(x) >, x+ < h(x) >, . . . , xm−1 + < h(x) >},             (1.11)

where m = deg(h(x)) is the degree of the polynomial h(x), [84].
   Addition of polynomials in K[x]h is just the ordinary addition of polynomials,
and the multiplication of polynomials in K[x]h is done mod(h(x)) by using the
Euclidean algorithm for polynomials. Thus, for f (x), g(x) ∈ K[x]h , f (x) · g(x) ≡
r(x) mod(h(x)) if
                              f (x) · g(x) = q(x)h(x) + r(x)

where r(x) = 0 or deg(r(x)) < deg(h(x)). More simply, we write

                                                h
                                     f (x)g(x) = r(x).

Addition and multiplication in K[x]h is always done modulo the polynomial h(x).
We are particularly interested in the number fields K defined by R the real numbers,
C the complex numbers, and Z p the finite modular number fields defined for prime
numbers p ∈ N.
   Now let h(x) = pm     1 m2                          mi
                       1 p2 , . . . , pr , where each pi ≡ (x − xi ) for distinct xi ∈ K.
                                       mr                           mi

Also, we order the factors of the m ≡ ∑i=1 mi degree polynomial h(x) so that
                                                 r

the multiplicities of the roots xi satisfy the inequalities 1 ≤ m1 ≤ m2 ≤ · · · ≤ mr .
Defining the polynomials hi (x) = h(x)/pm       i (x), we see that the greatest common
                                                  i

divisor of the hi (x) is 1 ∈ K[x], and therefore we can invoke (1.2) of the Euclidean
algorithm to conclude that there exist polynomials bi (x) ∈ K[x] which satisfy

                   b1 (x)h1 (x) + b2(x)h2 (x) + · · · + br (x)hr (x) = 1.

   Whereas the above equation holds in K[x], it remains equally valid when
interpreted as an identity in the modular polynomial ring K[x]h(x) . Defining the
                   h
polynomials si (x) = bi (x)hi (x) ∈ K[x]h , we can rewrite (1.2) as

                                                             h
                             s1 (x) + s2 (x) + · · · + sr (x) = 1                     (1.12)
1.3 Modular Polynomials                                                                              9


The following additional important properties easily follow from (1.2):

                                           h                                    h
                                 s2i (x) = si (x) and si (x)s j (x) = 0,                        (1.13)

for i, j = 1, 2, . . . , r, and i = j. We say that the si (x) ∈ K[x]h are mutually annihiliating
idempotents that partition unity. The set of polynomials {s1 (x), s2 (x), . . . , sr (x)}
make up the spectral basis of the polynomial ring K[x]h . By the complete spectral
basis of K[x]h , we mean the set of m polynomials
                                                                                         
                                                   i −1                             mr −1
                              s1 , q1 , . . . , qm
                                                 1      , . . . , s ,
                                                                   r rq , . . . , q r       ,

                                                         h
where q0i = si (x) for i = 1, . . . , r, and qij =(x − xi ) j si (x) = 0 for j = 1, . . . , mi − 1. We
shall discuss properties of the nilpotents qi (x) shortly.
   Every element b(x) ∈ K[x]h has the form

                  b(x) = b1 + b2x + · · · + bm−1xm−1 ∈ b(x)+ < h(x) >

for bi ∈ K. For this reason, we refer to the elements of K[x]h as polynomial
numbers. The modular polynomials K[x]h , under addition, have the structure of an
m-dimensional vector space over K with the standard basis {1, x, x2 , . . . , xm−1 }. We
will formally give the definition of a vector space in Chap. 4, Definition (4.1.1).
Note that the standard basis of K[x]h has exactly the same number of elements as
the complete spectral basis of K[x]h , namely,
                                                  r
                                          m = ∑ mi = deg(h(x)).
                                                i=1

    Every polynomial b(x) ∈ K[x]h can be expressed as a unique linear combination
of the powers of x in the standard basis. If we now multiply both sides of the identity
(1.12) by b(x), we get

                                                                                      h
                       b(x)s1 (x) + b(x)s2 (x) + · · · + b(x)sr (x) = b(x).

Since the si (x) are idempotents in K[x]h , they act as projections onto the polynomial
rings K[x](x−xi )mi . Thus, any polynomial b(x) ∈ K[x]h can be written in the unique
form
                                           r
                              b(x) = ∑ (b(x) mod (x − xi )mi )si (x).
                                      h
                                                                                                (1.14)
                                          i=1

This is known as the Chinese Remainder Theorem for the modular polynomials in
K[x]h .
   The modular polynomial ring K[x](x−x0 )m for x0 ∈ K plays exactly the same role
in the theory of modular polynomials that numbers modulo the power of a prime
play in number theory; most modular polynomial problems reduce to problems
10                                                                       1 Modular Number Systems


involving a power of x − x0 . In dealing with such problems, it is best to express
the modular polynomial f (x) ∈ K[x](x−x0 )m in terms of the (x − x0 )-adic number
basis
                                m−1
                     f (x) = ∑ ai (x − x0)i ≡ (am−1 am−2 . . . a1 a0 )x−x0                    (1.15)
                                 i=0

where each coefficient ai ∈ K. Addition and multiplication is done in K[x](x−x0 )m by
taking advantage of our proficiency in working with decimal digits and truncating
after m-digits, just as we worked in the p-adic number base (1.7). We will give an
example of such a calculation shortly.
   We are now in a position to directly solve for the idempotents si (x) in (1.12).
Multiplying each side of the identity (1.12) by hi (x) gives

                                    hi (x)si (x) = hi (x) in K[x]h                            (1.16)

which can be easily solved in K[x]h , getting

                               si (x) = [hi (x)−1 mod (x − xi )mi ]hi (x)

for each i = 1, 2, . . . , r. The nilpotents

                                                     h
                                           qi (x) =(x − xi )si (x)                            (1.17)

for i = 1, 2, . . . , r, defined earlier, have the indexes of nilpotency mi in K[x]h since
                           h
qm
 i = (x − xi ) si (x) = 0. For x ∈ K[x]h , using (1.14), we get the important spectral
  i           mi

decomposition formula
                     r                           r                r
              x = ∑ (x − xi + xi )si = ∑ xi si + qi = ∑ (xi + qi)si in K[x]h .
                h                           h                h
                                                                                              (1.18)
                    i=1                         i=1              i=1

     As our first example, consider the modular polynomial ring R[x]h , where

                          h(x) = p1 (x)p2 (x) = (x + 1)(x − 1)2 ∈ R[x]

for p1 (x) = (x + 1) and p2 (x) = (x − 1)2 . We calculate

                           h(x)                                         h(x)
              h1 (x) =            = (x − 1)2 ,           and h2 (x) =          = x + 1.
                           p1 (x)                                       p2 (x)

To find s1 (x), we multiply (1.12) with r = 2 by h1 (x) to get

                                       h                                                  h
(x − 1)2 s1 (x) + (x − 1)2 s2 (x) =(x − 1)2 =⇒ ((x + 1) − 2)2 s1 (x) + 0s2 (x) =(x − 1)2
1.3 Modular Polynomials                                                                   11


or
                                         h                    1
          ((x + 1)2 − 4(x + 1) + 4)s1(x) =(x − 1)2 =⇒ s1 (x) = (x − 1)2
                                                              4
                       h
since (x + 1)k s1 (x) =((x + 1)k mod(x + 1))s1 (x) = 0 for all k ≥ 1. Similarly, to find
                                   h
s2 (x), we multiply s1 (x) + s2 (x) = 1 by h2 (x) to get

                                       h                                     h
        (x + 1)s1 (x) + (x + 1)s2(x) =(x + 1)          =⇒       (x + 1)s2 (x) =(x + 1).

                                                                       h
Noting that x + 1 = (x − 1) + 2 and multiplying (x + 1)s2 (x) =(x + 1) by (x − 1) − 2
gives

                             h                         h  1
        ((x − 1)2 − 4)s2 (x) =(x − 3)(x + 1) =⇒ s2 (x) = − (x − 3)(x + 1).
                                                          4
Finally, we calculate

              h                 1                          h 1
       q2 (x) =(x − 1)s2 (x) = − (x − 1)(x − 1 − 2)(x + 1) = (x − 1)(x + 1),
                                4                            2

so the complete spectral basis for R[x]h is

          1                 h  1                        1
 {s1 (x) = (x − 1)2, s2 (x) = − (x − 3)(x + 1), q2 (x) = (x − 1)(x + 1)}. (1.19)
          4                    4                        2

Since the multiplication table for the spectral basis (1.19) of R[x]h is exactly the
same as for the spectral basis (1.9) of Z12 , we will not reproduce it here.
   For our second example, consider the modular polynomial ring R[x]h for the
polynomial h(x) = (x − 1)(x + 1)2x3 . We calculate

         h1 (x) = (x + 1)2x3 , h2 (x) = (x − 1)x3 , and h3 = (x − 1)(x + 1)2.

To find s1 (x), multiply (1.12) by h1 (x) to get

                           h                                h
          h1 (x)s1 (x) =(x − 1 + 2)2(x − 1 + 1)3s1 (x) =(x + 1)2x3 in R[x]h ,

or s1 (x) = (x+1)
                 2 3
                  x
               4    . Similarly, from

                               h                   h
                  h2 (x)s2 (x) =(x − 1)x3s2 (x) =(x − 1)x3 in R[x]h ,

we get (x + 1 − 2)(x + 1 − 1)3s2 (x) = (x − 1)x3 in R[x]h . This last relation can be
expressed in the (x + 1)-adic form (1, −2)(x+1) · (1, −1)3(x+1) s2 (x) = (x − 1)x3 , from
which we calculate successively
12                                                                      1 Modular Number Systems


                      (1, −2)x+1 · (3, −1)(x+1)s2 (x) = (x − 1)x3

                             (−7, 2)(x+1) s2 (x) = (x − 1)x3 ,
and finally, by multiplying both sides of this last equation by 7(x + 1) + 2 =
(7, 2)(x+1) and dividing by 4, we get

                                           h (7x + 9)(x − 1)x
                                                                3
                                s2 (x) =                            .
                                                     4
Since
               h                       h
         s3 (x) = 1 − s1(x) − s2 (x) = −(x − 1)(x + 1)2(2x2 − x + 1) in R[x]h

our calculations of the spectral basis of R[x]h for h(x) = (x − 1)(x + 1)2 x3 is
complete.
   However, for the complete spectral basis, we must also calculate the correspond-
ing nilpotent elements and their powers. We find that

                                                   h (x − 1)(x + 1)x
                                                                         3
                               h
                        q2 (x) =(x + 1)s2 (x) =                              ,
                                                             2
                                   h           h
                          q3 (x) = xs3 (x) =(x − 1)2x(x + 1)2 x2
and
                                   h           h
                         q23 (x) = x2 s3 (x) = −(x − 1)(x + 1)2x2 .

The complete spectral basis of R[a]h for h(x) = (x − 1)(x + 1)2x3 is thus

                        {s1 (x), s2 (x), q2 (x), s3 (x), q3 (x), q23 (x)}.                (1.20)

Again, since the multiplication table for the spectral basis of R[x]h is the same as
the multiplication table for the spectral basis (1.10) of Z360 , we need not repeat the
multiplication table here.
   An arbitrary polynomial f (x) ∈ R[x]h for h = (x − 1)(x + 1)2 x3 can now be
written in the form


               f (x) = f (x)s1 + f (x)s2 + f (x)s3
                    = (a0 )x−1 s1 (x) + (b1b0 )x+1 s2 (x) + (c2 c1 c0 )x3 s3 (x),


where (a0 )x−1 = f (x)mod(x − 1), (b1 , b0 )x+1 = f (x)mod(x + 1)2 and (c2 , c1 , c0 )x =
f (x)mod(x3 ). The inverse [ f (x)]−1 of f (x) in R[x]h will exist iff a0 , b0 , c0 ∈ R are
all nonzero.
1.3 Modular Polynomials                                                              13


   For example, for f (x) = (x + 3)2, we calculate

         (x + 3)2 = (x − 1 + 4)2 = (x − 1)2 + 8(x − 1) + 16
                  = (x + 1 + 2)2 = (x + 1)2 + 4(x + 1) + 4 = x2 + 6x + 9,

from which it follows that
                              h
                 (x + 3)2 = 16s1 + (4 + 4q2)s2 + (9 + 6q3 + q23)s3 .

The inverse of (x + 3)2mod((x − 1)(x + 1)2x3 ) is given by

                         1    h 1      1              1
                              = s1 +        s2 +               s3
                      (x + 3)2 16    4 + q2      9 + 6q3 + q23

which simplifies to
                                                             
                 1    h 1      4 − q2        1   2       1 2
                      =   s1 +        s2 +     −   q 3 +   q    s3 .
              (x + 3)2 16        16          9 27        27 3

Other examples can be found in [79].


Exercises

1. Let h = x(x − 1)(x + 1).
  (a) Find the spectral basis {s1 , s2 , s3 } for R[x]h .
  (b) Find the spectral decomposition formula (1.18) for x ∈ R[x]h .
                          h                             h
  (c) Verify that x + 3 =3s1 + 4s2 + 2s3 and x+31
                                                   = 13 s1 + 14 s2 + 12 s3 .
                                √
  (d) Find all the square roots: x + 3 of x + 3 ∈ R[x]h .
  (e) Fill in the following multiplication table for the spectral basis of R[x]h .

                                  · modh(x)   s1   s2       s3
                                  s1
                                  s2
                                  s3


2. Let h = (x − 1)(x + 1)2.
  (a) Find the spectral basis {s1 , s2 , q2 } for R[x]h .
  (b) Find the spectral decomposition formula (1.18) for x ∈ R[x]h .
                          h                                 h
  (c) Verify that x + 3 =2s1 + (4 + q2)s2 and x+31
                                                    = 12 s1 + 4−q 2
                                                               16 s2 .
                                √
  (d) Find all the square roots: x + 3 of x + 3 ∈ R[x]h .
  (e) Fill in the following multiplication table for the spectral basis of R[x]h .
14                                                                                      1 Modular Number Systems


                                              · mod h(x)     s1      s2      q2
                                              s1
                                              s2
                                              q2


1.4 Interpolation Polynomials

One important application of the spectral basis of the modulo polynomials R[x]h is
that it allows us to easily calculate the Lagrange–Sylvester interpolation polynomial
of any function f (x), which is analytic (smooth and continuous) at the spectral
points {x1 , x2 , . . . , xr } ∈ R, simply by replacing x in f (x) by (1.18) and reducing
modulo h(x). The Lagrange–Sylvester interpolation polynomial g(x) ∈ R[x]h of f (x)
is defined by
                           r                           r
     g(x) = f ( ∑ (x j + q j )si ) = ∑ f (x j + q j )s j
                h                                  h

                         j=1                           j=1

                     r
                                          f (x j )                   f (m j −1) (x j ) m j −1
               = ∑ [ f (x j ) +
                h
                                                   q j (x) + · · · +                  q       (x)]s j (x),
                     j=1                    1!                        (m j − 1)! j
                     r
                                f (x j )                         f (m j −1) (x j )
               = ∑ [ f (x j ) +                                                    (x − x j )m j −1 ]s j (x)
                h
                                          (x − x j ) + · · · +
                 j=1               1!                              (m  j −  1)!
                                                                 
                  r
                       f (m j −1) (x j )       f (x j )
               =∑
               h
                                         ,...,          , f (x j )         s j (x),                        (1.21)
                 j=1    (m j − 1)!               1!
                                                                            x−x j

[29, p. 101]. Note that to find the interpolation polynomial g(x), we are using the
spectral decomposition of x ∈ R[x]h , (1.18), and evaluating f (x) by expanding in
Taylor series about the spectral points x j .
   For example, let h(x) = (x − 1)(x + 1)2 x3 as above, and let f (x) be any function
for which the values
                                f (1), f (−1), f (−1), f (2) (0), f (0), f (0)
are defined. In terms of the spectral basis {s1 (x), s2 (x), s3 (x)} of R[x]h , the interpo-
lation polynomial g(x) ∈ R[x]h of f (x) is given by
                                                                                                         
             f (1)                            f (1) (−1)                               f (2) (0) f (0)
g(x) =                         s1 (x) +                  , f (1)        s2 (x) +                ,      , f (0) s3 (x).
               0!     x−1                          1!                                    (2)!      1!
                                                                  x+1                                         x

Shown in the Figs. 1.1 and 1.2 are the graphs of f (x) and its interpolation
polynomial g(x), for f (x) = x+1/21
                                     , and f (x) = x sin 5x. Note that the interpolation
polynomials agree with the given functions and their derivatives evaluated at the
spectral points xi of the respective polynomials h(x).
1.4 Interpolation Polynomials                                               15

Fig. 1.1 Plot of the                          g        20
interpolation polynomial
                                                       15
g(x) = − 32
 5
 32x + 16x4 − 40x3 − 12x2 + 6x − 3                     10
for f (x) = x+1/2
              1
                  , where                               5
h(x) = (x − 1)(x + 1)2 x3
                                     -2           -1              1          2
                                          f             -5
                                                       -10
                                                       -15


Fig. 1.2 Plot of the
interpolation polynomial                      g
                                                        4
g(x) = 7.148x5 − 5.959x4 +
7.148x3 + 5x2 for
 f (x) = x sin 5x, where                                2
h(x) = (x − 1)(x + 1)2 x3            f
                                     -2           -1              1          2

                                                       -2

                                                       -4



   The graphs of the figures were made using Mathematica. The following package
in Mathematica can be used to calculate the spectral basis.
   (* A Mathematica Package *)
   (* POWER SERIES METHOD FOR EVALUATING SPECTRAL
        BASIS *)
   (* OF POLYNOMIALS *)
   (* Calculates p[i]=pqs[m,i,0] and q[i]ˆk=pqs[m,i,k]
    using power series for i=1,2, ... , Length[m],
    where m={m1,m2,...mr}*)
    psi[m_List]:=Product[(t - x[j])ˆ(m[[j]]),
      {j,Length[m]}]
    psi[m_List,i_]:=psi[m]/((t-x[i])ˆ(m[[i]]))
    pqs[m_,i_,k_]:=
    Together[Normal[Series[1/psi[m,i],{t,x[i],m[[i]]-
    (1+k)}]]]*(t-x[i])ˆk *psi[m,i]
   (* Calculates p[i] and q[i] for i=1,2, ... ,
     Length[m] *)
    pqs[m_List]:=Do[p[i]=pqs[m,i,0];q[i]=pqs[m,i,1];
      Print[i],
    {i,Length[m]}]
   (*end*)
16                                                              1 Modular Number Systems


   There are interesting possibilities for the generalization of interpolation
polynomials to apply to polynomials in several variables or to a function defined by
a convergent power series such as the trigonometric or exponential functions, [83].


Exercises

1. Let h = (x + 1)(x − 1)2 in Z3 [x]h .
     (a) Make a multiplication table for the basis elements of the standard basis
         {1, x, x2 }. (Note that addition of the basis elements is just ordinary addition
         of polynomials.)
     (b) Find the spectral basis {s1 (x), s2 (x), q2 (x)} of Z3 [x]h .
     (c) Express each element of the standard basis of Z3 [x]h in terms of the spectral
         basis of Z3 [x]h .
     (d) Use part (c) to find the inverse x−1 of x and the inverse of x−2 of x2 in Z3 [x]h .
2. Let h(x) = (x + 1)(x − 1)2 in R[x]h .
     (a) Make a multiplication table for the basis elements of the standard basis
          {1, x, x2 }. (Note that addition of the basis elements is just ordinary addition
          of polynomials.)
     (b) Find the spectral basis {s1 (x), s2 (x), q2 (x)} of R[x]h .
     (c) Express each element of standard basis of R[x]h in terms of the spectral basis
          of R[x]h .
     (d) Use part c) to find the inverse x−1 of x and the inverse of x−2 of x2 in R[x]h .
     (e) Find the Lagrange–Sylvester interpolation     √ polynomial g(x) ∈ R[x]h which
          best approximates the function f (x) = x + 2 in the interval (−2, 2). Plot
          the functions f (x) and g(x) in a graph.
      (f) Find the Lagrange–Sylvester interpolation polynomial g(x) ∈ R[x]h which
          best approximates the function f (x) = 1/x in the interval (−2, 2). Plot the
          functions f (x) and g(x) on a single graph. What can you say about f (x) and
          g(x) at the point x = 0?
3. Let h(x) = (x + 1)(x − 1)2 in Z5 [x]h .
     (a) Make a multiplication table for the basis elements of the standard basis
         {1, x, x2 }.
     (b) Find the spectral basis {s1 (x), s2 (x), q2 (x)} of Z5 [x]h .
     (c) Express each element of the standard basis of Z5 [x]h in terms of the spectral
         basis of Z5 [x]h .
     (d) Use part (c) to find the inverse x−1 of x and the inverse of x−2 of x2 in Z5 [x]h .
4. Let h(x) = (x − x1 )(x − x2 )2 in R[x]h .
     (a) Make a multiplication table for the basis elements of the standard basis
         {1, x, x2 }.
     (b) Find the spectral basis {s1 (x), s2 (x), q2 (x)} of R[x]h .
*1.5 Generalized Taylor’s Theorem                                                    17


  (c) Express each element of standard basis of R[x]h in terms of the spectral basis
       of R[x]h .
  (d) Use part (c)√to find the inverse x−1 of x and the inverse of x−2 of x2 in R[x]h .
  (e) When will x exist in R[x]h ?
   (f) When will x−1 = 1/x exist in R[x]h ?



*1.5 Generalized Taylor’s Theorem

The interpolation polynomial of a function is a generalized Taylor’s expansion about
spectral points in the domain of the function. What is so far missing is an expression
for the remainder, which is useful in numerical analysis. We begin our discussion
with a generalized Rolle’s theorem.
   Let h(x) = ∏ri=1 (x − xi )mi for distinct xi ∈ [a, b] ⊂ R with multiplicity mi ≥ 1,
and let n = deg(h(x)). Given two functions f (x) and g(x), we say that f (x) =
                         h
g(x) mod(h(x)) or f (x) = g(x) if for each 1 ≤ i ≤ r and 0 ≤ k < mi

                                    f (k) (xi ) = g(k) (xi ).                   (1.22)
                                                       h
If f (x) and g(x) are polynomials, then f (x) = g(x) is equivalent to saying that if
f (x) and g(x) are divided by the polynomial h(x) (the Euclidean algorithm), they
give the same remainder, as was discussed in Sect. 1.3. We denote the factor ring of
polynomials modulo h(x) over the real numbers R by

                              R[x]h := R[x]/ < h(x) >,

see [28, p.266].
Generalized Rolle’s Theorem 1.5.1. Let f (x) ∈ C[a, b] and (n − 1)-times differen-
tiable on (a, b), an open interval that contains all the zeros of h(x).
If f (x)=0 mod(h(x)) , then there exists a c ∈ (a, b) such that f (n−1) (c) = 0.
                                                                          
                                                                1, u < v
Proof. Following [53, p.38], define the function σ (u, v) :=                 .
                                                                0, u ≥ v
    The function σ is needed to count the simple zeros of the polynomial h(x) and
its derivatives.
    Let #h(k) denote the number of simple zeros that the polynomial equation
  (k)
h (x) = 0 has. Clearly, #h = r = ∑ri=1 σ (0, mi ). By the classical Rolle’s theorem,
                    r                             r                  r
           #h = ∑ σ (1, mi ) + (#h) − 1 = ∑ σ (1, mi ) + ∑ σ (0, mi ) − 1.
                   i=1                           i=1                i=1

Continuing this process, we find that
           r                             r                      r          r
   #h = ∑ σ (2, mi ) + (#h ) − 1 = ∑ σ (2, mi ) + ∑ σ (1, mi ) + ∑ σ (0, mi ) − 2,
          i=1                           i=1                i=1            i=1
18                                                                      1 Modular Number Systems


and more generally that
                       r                                        r   k
             #h(k) = ∑ σ (k, mi ) + (#h(k−1)) − 1 = ∑ ∑ σ ( j, mi ) − k
                      i=1                                   i=1 j=0

for all integers k ≥ 0.
   For k = n − 1, we have
                           r n−1                            r
            #h(n−1) = ∑ ∑ σ ( j, mi ) − (n − 1) = ∑ mi − (n − 1) = 1.
                        i=1 j=0                            i=1

The proof is completed by noting that # f (k) ≥ #h(k) for each k ≥ 0, and hence
# f (n−1) ≥ 1.                                                               



1.5.1 Approximation Theorems

We can now prove
Generalized Taylor’s Theorem 1.5.2. Let f (x) ∈ C[a, b] and n times differentiable
on the open interval (a, b). Suppose that f (x) = g(x) mod(h(x)) for some polyno-
mial g(x) where deg(g) < deg(h). Then for every x ∈ [a, b], there exists a c ∈ (a, b)
such that
                                                f (n) (c)
                               f (x) = g(x) +             h(x).
                                                   n!

Proof. For a given x ∈ [a, b], define the function
                                                                    h(t)
                       p(t) = f (t) − g(t) − [ f (x) − g(x)]             .                (1.23)
                                                                    h(x)
In the case that x = xi for some 1 ≤ i ≤ r, it is shown below that p(t) has a removable
singularity and can be redefined accordingly. Noting that

                           p(t) = 0 mod(h(t)) and           p(x) = 0

it follows that p(t) = 0 mod(h(t)(t − x)). Applying the generalized Rolle’s theorem
to p(t), there exists a c ∈ (a, b) such that p(n) (c) = 0. Using (1.23), we calculate
p(n) (t), getting

                                                                        d    n h(t)
                p(n) (t) = f (n) (t) − g(n)(t) − [ f (x) − g(x)]
                                                                        dt    h(x)
                                                         n!
                        = f (n) (t) − [ f (x) − g(x)]        ,
                                                        h(x)
*1.5 Generalized Taylor’s Theorem                                                      19


so that
                                                                      n!
                        0 = p(n) (c) = f (n) (c) − [ f (x) − g(x)]
                                                                     h(x)
from which the result follows.                                                          
Applying the theorem to the case when x = xi , we find by repeated application of
L’Hospital’s rule that

                      f (x) − g(x)   f (mi ) (xi ) − g(mi ) (xi )   f (n) (c)
                 lim               =                              =           .
                 x→xi     h(x)                h(mi ) (xi )             n!

   There remains the question of how do we calculate the polynomial g(x) with the
                    h
property that f (x) = g(x) where deg(g(x)) < deg(h(x))? The brute force method is
to impose the conditions (1.22) and solve the resulting system of linear equations for
the unique solution known as the osculating polynomial approximation to f (x), see
[18], [93, p.52]. A far more powerful method is to make use of the special algebraic
properties of the spectral basis of the factor ring R[x]h , as explained in Sect. 1.3. See
also [81, 85].
    Much time is devoted to explaining the properties of Lagrange, Hermite, and
other types of interpolating polynomials in numerical analysis. In teaching this
subject, the author has discovered that many of the formulas and theorems follow
directly from the above theorem. For rational approximation, we have the following
refinement:


Rational Approximation Theorem 1.5.3. Let f (x) ∈ C[a, b] and n times differ-
entiable on (a, b). Let u(x) and v(x) be polynomials such that v(0) = 1 and
deg(u(x)v(x)) < deg(h(x)), and suppose that f (x)v(x) − u(x) = 0 mod(h(x)). Then

                                  u(x)   1
                        f (x) =        +      [ f (t)v(t)](n) (c)h(x)
                                  v(x) n!v(x)

for some c ∈ (a, b).
Proof. Define the function

                                                                       h(t)
                    p(t) = f (t)v(t) − u(t) − [ f (x)v(x) − u(x)]
                                                                       h(x)

where x ∈ [a, b]. Clearly, p(t) = 0 mod(h(t)(t − x)). Applying the generalized
Rolle’s theorem to p(t), it follows that there exists a c ∈ (a, b) such that

                                           1 d      n
                    f (x)v(x) − u(x) =                  [ f (t)v(t)]t→c h(x),
                                           n! dt
20                                                                        1 Modular Number Systems


from which it follows that

                                     u(x)   1
                           f (x) =        +      [ f (t)v(t)](n) (c)h(x).                                
                                     v(x) n!v(x)



1.5.2 Hermite–Pade Approximation

Hermite–Pade Approximation is a rational approximation of a function of the kind

                                               a(x)  ∑n ai xn
                                      f (x)=        = mi=0 m .                                      (1.24)
                                               b(x) ∑i=0 bi x

In what follows, we only consider rational approximations where b0 = 1. Let
                                                    r
                                         h(x) = ∏(x − xi )mi
                                                  i=1

where the zeros xi of h(x) are all distinct and where deg(h(x)) = m + n + 1 is exactly
the number of unknown coefficients of a(x)/b(x) which determine the rational
                                                  1 −1                                r −1 } be the spectral
approximation to f (x). Let {s1 , q1 , . . . , qm
                                                1      , . . . , sr , qr , . . . , qm
                                                                                    r
basis of the spectral algebra of polynomials R[x]h(x) of h(x).
   The approximation equation (1.24) above is clearly equivalent to

                                         f (x)b(x) − a(x)
                                                          = 0,
                                               b(x)

and if we assume that none of the zeros xi of h(x) are zeros of b(x), then the
approximation equation becomes simply

                                         f (x)b(x) − a(x) = 0.

The osculating-Pade approximation a(x)/b(x) to f (x) is defined by choosing the
m + n + 1 unknowns ai , b j so that they satisfy

                               f (x)b(x) − a(x) ≡ 0 modulo (h(x)).                                  (1.25)

This will be the case if and only if the resulting system of m + n + 1 linear equations
in m + n + 1 unknowns has a solution.
   As an example, we will find the Hermite–Pade rational approximation for a given
function f (x) at the points x1 = 0, x2 = 1. Recall that the spectral basis for R[x]h(x)
for h(x) = t 2 (t − 1)2 is

         {s1 = (2t + 1)(t − 1)2, q1 = t(t − 1)2 , s2 = (3 − 2t)t 2, q2 = t 2 (t − 1)}.
*1.5 Generalized Taylor’s Theorem                                                        21


In terms of the spectral basis, the resulting linear equations from (1.25) are

            [( f (0) + f (0)q1 )(b(0) + b (0)q1 ) − (a(0) + a (0)q1 )]s1
                      + [( f (1) + f (1)q2 )(b(1) + b (1)q2 ) − (a(1) + a (1)q2 ]s2 ,

or

     f (0) − a(0) = 0, f (0) + f (0)b1 − a1 = 0, (1 + b1) f (1) − (a0 + a1 + a2 ) = 0,
                       (1 + b1) f (1) + f (1)b1 − (a1 + 2a2) = 0.

     The unique solution is

                                            f (0)[2 f (0) − 2 f (1) + f (0) + f (1)]
             a0 = f (0), a1 = f (0) −
                                                       f (0) − f (1) + f (1)
                        f (0)2 − 2 f (0) f (1) + f (1)2 − f (0) f (1)
             a2 = −                                                   ,
                                    f (0) − f (1) + f (1)
                        2 f (1) − 2 f (0) − f (0) − f (1)
             b1 = −                                       ,
                               f (0) − f (1) + f (1)

provided that f (0) − f (1) + f (1) = 0.



Exercises

1. A rational approximation to a function f (x) has the form

                                               a(x)  ∑n ai xn
                                      f (x)=        = mi=0 m .
                                               b(x) ∑i=0 bi x

     where b0 = 1. For h(x) = x2 (x − 1)2 , determine the formulas to approximate f (x)
     by the rational forms
           a0 +a1 x
     (a) 1+b         2.
             1 x+b2 x
     (b) 1+b x+ba0x2 +b x3 .
             1    2      3

2. Find all Hermite–Pade approximations of the form (a) and (b) to f (x) = ln(x + 2)
   over the closed interval [−1, 1]. Which one gives the best approximation over that
   interval?
3. Find all Hermite–Pade approximations to f (x) = exp(x) of the form (a) and (b)
   over the closed interval [−1, 1]. Which one gives the best approximation over that
   interval?
Chapter 2
Complex and Hyperbolic Numbers




                                 The laws of nature are but the mathematical thoughts of God.
                                                                                         –Euclid



The complex numbers were grudgingly accepted by Renaissance mathematicians
because of their utility in solving the cubic equation.1 Whereas the complex
numbers were discovered primarily for algebraic reasons, they take on geometric
significance when they are used to name points in the plane. The complex number
system is at the heart of complex analysis and has enjoyed more than 150 years
of intensive development, finding applications in diverse areas of science and
engineering.
   At the beginning of the twentieth century, Albert Einstein developed his theory
of special relativity, built upon Lorentzian geometry, yet at the end of that century,
almost all high school and undergraduate students are still taught only Euclidean
geometry. At least part of the reason for this state of affairs has been the lack of a
simple mathematical formalism in which the basic ideas can be expressed.
   The hyperbolic numbers are blood relatives of the popular complex numbers and
deserve to be taught alongside the latter. They not only serve to put Lorentzian
geometry on an equal mathematical footing with Euclidean geometry but also help
students develop algebraic skills and concepts necessary in higher mathematics.
Whereas
    √ the complex numbers extend the real numbers to include a new number
i = −1, √  the hyperbolic numbers extend the real numbers to include a new square
root u = +1, where u = ±1.2 Whereas each nonzero complex number has a
multiplicative inverse, this is no longer true for all nonzero hyperbolic numbers.



1 A historical account of this fascinating story is told by Tobias Dantzig in his book NUMBER: The

Language of Science, [17]. See also Struik’s A Concise History of Mathematics [94], and [59].
2 This chapter is based upon an article by the author that appeared in the College Mathematical

Journal [77].

G. Sobczyk, New Foundations in Mathematics: The Geometric                                      23
Concept of Number, DOI 10.1007/978-0-8176-8385-6 2,
© Springer Science+Business Media New York 2013
24                                                 2 Complex and Hyperbolic Numbers


2.1 The Hyperbolic Numbers

Whereas the algebraic equation x2 − 1 = 0 has the real number solutions x = ±1,
we assume the existence of a new number, the unipotent u, which has the algebraic
property that u = ±1 but u2 = 1. In terms of the standard basis {1, u}, any
hyperbolic number w ∈ H can be written in the form w = x + uy where x, y are
real numbers. Thus, the hyperbolic numbers H ≡ R(u) are just the real numbers
extended to include the unipotent u in the same way that the complex numbers
C ≡ R(i) are the real numbers extended to include the imaginary i where i2 = −1.
   It follows that multiplication in H is defined by (x + uy)(r + us) = (xr + ys) +
u(xs+ yr). Just as the complex numbers can be identified
                                                        with skew-symmetric 2 × 2
                                                     a b
matrices with equal diagonal entries, a + ib ↔             , the hyperbolic numbers
                                                    −b a
correspond
           to the symmetric 2 × 2 matrices with equal diagonal entries: x + uy ↔
  xy
        . This correspondence is an isomorphism because the operations of addition
  yx
and multiplication in H correspond to the usual matrix operations, as is explained
later in Chap. 4.
   The complex numbers C of the form z = x + iy where i2 = −1 and the hyperbolic
numbers H are two-dimensional vector spaces over the real numbers, so each can
identified with points in the plane R2 . Using the standard basis {1, u}, we identify
w = x + uy with the point or vector (x, y), see Fig. 2.1. The hyperbolic number
w = x + uy names the corresponding point (x, y) in the coordinate plane. Also
pictured is the conjugate w− = x − uy.


                                                     uy




                                                                          (x,y)

                                                              w


                                                                                   x



Fig. 2.1 The hyperbolic                                      w−
number plane. The hyperbolic
number w and its conjugate                                                (x,−y)
w− are shown
2.1 The Hyperbolic Numbers                                                         25


  The real numbers x and y are called the real and unipotent parts of the hyperbolic
number w, respectively. The hyperbolic conjugate w− of w is defined by

                                       w− = x − uy.

The hyperbolic modulus or length of w = x + uy is defined by
                                              
                             |w|h ≡    |ww− | = |x2 − y2 |                      (2.1)

and is the hyperbolic distance of the point w from the origin.
   Note that the points w = 0 on the lines y = ±x are isotropic, meaning that
they are nonzero vectors with |w|h = 0. Thus, the hyperbolic distance yields a
geometry, Lorentzian geometry, on R2 quite unlike the usual Euclidean geometry
of the complex plane where |z| = 0 only if z = 0. It is easy to verify that

                                         w−   x − uy
                               w−1 =        = 2      ,                          (2.2)
                                        ww−  x − y2

is the hyperbolic inverse of w, whenever |w|h = 0.



Exercises

1. Given the complex numbers z1 = 2 + 3i and z2 = 3 − 5i, and the hyperbolic
   numbers w1 = 2 + 3u and w2 = 3 − 5u,
  (a) Calculate z1 + z2 and z1 z2 , and w1 + w2 and w1 w2 .
  (b) Calculate the Euclidean norms |z1 |, |z2 | of z1 and z2 and the hyperbolic norms
      |w1 |, |w2 | of w1 and w2 .
  (c) Calculate the inverses z−1        −1         −1
                                 1 and z2 , and w1 and w2 .
                                                             −1

  (d) More generally, show that a complex number z = x + iy for x, y ∈ R will have
      an inverse iff z = 0. Show that a hyperbolic number w = x + uy for x, y ∈ R
      will have an inverse iff x = ±y.
2. Find the matrices [z1 ] and [z2 ] representing the complex numbers z1 and z2 and
   the matrices [w1 ] and [w2 ] representing the hyperbolic numbers w1 and w2 given
   in Problem 1. Show that [z1 ][z2 ] = [z1 z2 ] and [w1 ][w2 ] = [w1 w2 ].
3. (a) Find all complex numbers z = x + iy with the property that z2 = i.
   (b) Show that there is no hyperbolic number w = x + yu with the property that
       w2 = u. In the next section, we learn which complex numbers and which
       hyperbolic numbers have square roots.
26                                                          2 Complex and Hyperbolic Numbers


2.2 Hyperbolic Polar Form

Let us recall some basic properties of the exponential function. The exponential
function is defined by
                    ∞
                        xj          x2 x3 x4 x5
           ex = ∑          = 1 + x + + + + + · · · = cosh x + sinh x,
                    j=0 j!          2! 3! 4! 5!

where
                                  ∞
                                       x2 j       x2 x4 x6 x8
                      cosh x = ∑             = 1 + + + + + ···
                                  j=0 (2 j)!      2! 4! 6! 8!

are the even terms of the series and
                                   ∞
                                        x2 j+1        x3 x5 x7
                        sinh x = ∑               = x + + + + ···
                                  j=0 (2 j + 1)!      3! 5! 7!

are the odd terms of the series. The cosh x and sinh x are called the trigonometric
hyperbolic cosine and hyperbolic sine functions, respectively.
   Calculating eix , we find that
                ∞
                    xj           x2  x3 x4 x5
        eix = ∑        = 1 + ix − − i + + i + · · · = cos x + i sin x,                 (2.3)
                j=0 j!           2!  3! 4! 5!

where
                            ∞
                                         x2 j       x2 x4 x6 x8
                    cos x = ∑ (−1) j           = 1 − + − + + ···
                            j=0         (2 j)!      2! 4! 6! 8!

are the even terms of the series and
                             ∞
                                           x2 j+1        x3 x5 x7
                    sin x = ∑ (−1) j                = x − + − + ···
                            j=0          (2 j + 1)!      3! 5! 7!

are the odd terms of the series. The cos x and sin x are called the trigonometric cosine
and sine functions, respectively.
   Calculating eux , we find that
            ∞
               xj           x2  x3 x4 x5
     eux = ∑      = 1 + ux + + u + + u + · · · = cosh x + u sinhx.                     (2.4)
           j=0 j!           2!  3! 4! 5!

     Every nonzero complex number z ∈ C can be written in the polar form

                                  z = r(cos θ + i sin θ ) ≡ r exp iθ                   (2.5)
2.2 Hyperbolic Polar Form                                                                            27




Fig. 2.2 (a) In the r-circle the shaded area = θ2 . (b) In the ρ -hyperbola the shaded area = φ2



for 0 ≤ θ < 2π , where θ = tan−1    √(y/x) is the angle that the vector z makes with
the positive x-axis and r = |z| ≡ zz is the Euclidean distance of the point z to the
origin. The set of all points in the complex number plane that satisfy the equation
|z| = r is a circle of radius r ≥ 0 centered at the origin, see Fig. 2.2a.
    Each time the parameter θ increases by 2π , the point z = r exp iθ makes a
complete counterclockwise revolution around the r-circle. In the case of the ρ -
hyperbola, the points on the branches, given by w = ±ρ exp uφ in the hyperbolic
quadrants H-I and H-III, and w = ±ρ u expuφ in the hyperbolic quadrants H-II
and H-IV, respectively, are covered exactly once in the indicated directions as the
parameter φ increases, −∞ < φ < ∞. The hyperbolic quadrants are demarcated by
the asymtotes y = ±x and are not the usual quadrants demarcated by the x- and
y-axes.
    Similarly, the set of all points in the hyperbolic plane that satisfy the equation
|w|h = ρ > 0 is a four-branched hyperbola of hyperbolic radius ρ . Such hyperbolic
numbers w = x + uy can be written in the hyperbolic polar form

                          w = ±ρ (cosh φ + u sinh φ ) ≡ ±ρ exp uφ                                  (2.6)

when w lies in the hyperbolic quadrants H-I or H-III or

                         w = ±ρ (sinh φ + u cosh φ ) ≡ ±ρ u expuφ                                  (2.7)

when w lies in the hyperbolic quadrants H-II or H-IV, respectively. The hyperbolic
quadrants of the hyperbolic plane are demarcated by the isotropic lines |w|h = 0,
which are the asymtotes of the ρ -hyperbolas |w|h = ρ > 0. See Fig. 2.2b.
28                                                     2 Complex and Hyperbolic Numbers

Fig. 2.3 The hyperbolic
angle φ = 2A, where A is the                                           1.5
shaded area                                                              1

                                                                       0.5
                                                                              A   O
                                                                                  |
                                                           -2     -1                  2
                                                                       -0.5

                                                                        -1

                                                                       -1.5




   The hyperbolic angle φ is defined by φ ≡ tanh−1 (y/x) in the quadrants H-I and
H-III or φ ≡ tanh−1 (x/y) in H-II and H-IV, respectively. Just as the area of the
sector of the unit circle with central angle θ is 12 θ , the area of the unit hyperbolic
sector determined by the ray from the origin to the point exp uφ = cosh φ + u sinh φ
(shaded in Fig. 2.2b) is 12 φ .
                                   Given the hyperbolic number w = 5 + 3u, its
   Let us consider a simple example.
hyperbolic magnitude is |w|h = |52 − 32| = 4, and its hyperbolic polar form is
given by
                                       5 + 3u
                                 w=4          = 4eφ u
                                          4
where φ = tanh−1 3/5 = log 2=0.693147.
                               ˙            Alternatively, we can calculate the
hyperbolic angle φ by calculating the hyperbolic arc length along the hyperbola
x2 − y2 = 1, getting
                                     5        dy 2
                                          4
                dsh =    |dx2 − dy2| =       |1 −         |dx = log 2
                                        1           dx

where dy
      dx = x/y =
                 √x              . We can also calculate the hyperbolic angle φ by
                  2       x −1
calculating 2A where A is the area enclosed in Fig. 2.3. We find
                                        5/4 
                                 5 3
                        2A =      · −2        x2 − 1dx = log 2.
                                 4 4   1

   The polar form of complex numbers provides the familiar geometric interpreta-
tion of complex number multiplication

                      r1 expiθ1 · r2 exp iθ2 = r1 r2 exp i(θ1 + θ2 )

Similarly, the hyperbolic polar form gives a geometric interpretation of hyperbolic
number multiplication, but because the hyperbolic plane is divided into four
quadrants separated by the isotropic lines, we must keep track of the quadrants of the
2.2 Hyperbolic Polar Form                                                         29

Fig. 2.4 Shaded regions have
equal area 12 φ1




factors. For example, if w1 = ρ1 expuφ1 lies in quadrant H-I and w2 = ρ2 u exp uφ2
lies in H-II, then

              w1 w2 = ρ1 ρ2 u exp uφ1 exp uφ2 = ρ1 ρ2 u exp u(φ1 + φ2 )

lies in quadrant H-II and is located as shown in Fig. 2.4.


Exercises

1. Given the complex numbers z1 = 2 + 3i and z2 = 3 − 5i, and the hyperbolic
   numbers w1 = 2 + 3u and w2 = 3 − 5u,
   (a) Calculate the polar forms of z1 and z2 . (b) Calculate the hyperbolic polar
       forms of w1 and w2 .
                                       √        √
   (c) Use the polar forms to calculate z1 and z2 .
                                                   √        √
   (d) Use the hyperbolic polar forms to calculate w1 and w2 .
2. (a) Given that z = r exp (iθ ), show that z−1 = 1r exp (−iθ ).
   (b) Given that w = ρ exp (uφ ), show that w−1 = ρ1 exp (−uφ ).
3. Find the matrix representation [z] of z = r exp (iθ ) and [w] of w = ρ exp (uφ ).
4. Plot the points z = r exp (iθ ) and iz = ri exp (iθ ) in the complex number plane,
   and show that iz = ri exp (iθ ) = r exp (i(θ + π /2)).
5. Plot the points w = ρ exp(uφ ) and uw = ρ u exp(uφ ) in the hyperbolic number
   plane. Explain why uw does not have a square root in the real hyperbolic plane.
30                                                       2 Complex and Hyperbolic Numbers


2.3 Inner and Outer Products

Let us now compare the multiplication of the hyperbolic numbers w−1 = x1 − uy1
and w2 = x2 + uy2 with the multiplication of the corresponding complex numbers
z1 = x1 − iy1 and z2 = x2 + iy2 . The conjugate products are

             z1 z2 = (x1 − iy1 )(x2 + iy2) = (x1 x2 + y1 y2 ) + i(x1 y2 − x2 y1 ),     (2.8)

and
           w−
            1 w2 = (x1 − uy1 )(x2 + uy2 ) = (x1 x2 − y1 y2 ) + u(x1 y2 − x2 y1 ).      (2.9)

The real and imaginary parts of the conjugate product z1 z2 , denoted by z1 z2 0 and
 z1 z2 i , respectively, are called the inner and outer products of the complex numbers
z1 and z2 . Likewise, the real and unipotent parts of the conjugate product w−         1 w2 ,
denoted by w−    1 w 2 0 and   w −
                                 1 w 2 u , respectively, are called the hyperbolic inner and
outer products of the hyperbolic numbers w1 and w2 . The vectors z1 and z2 in the
complex number plane and w1 and w2 in the hyperbolic number plane are said to
be, respectively, Euclidean orthogonal or hyperbolic orthogonal if their respective
inner products are zero.
    From (2.8) and (2.9), it is seen that the components of the respective Euclidean
and hyperbolic outer products are identical and give the directed area of the
parallelogram with w1 and w2 as adjacent edges. Rather surprisingly, the concept
of area is identical in Euclidean and Lorentzian geometry.
    The conjugate products (2.8) and (2.9) are also nicely expressed in polar form.
Letting w1 = ρ1 exp(uφ1 ) ∈H-I and w2 = ρ2 exp(uφ2 ) ∈H-I, and z1 = r1 exp(iθ1 )
and z2 = r2 exp(iθ2 ), we find that

      w−
       1 w2 = ρ1 ρ2 exp u(φ2 − φ1 ) = ρ1 ρ2 cosh(φ2 − φ1 ) + u sinh(φ2 − φ1 )

where φ2 − φ1 is the hyperbolic angle between w1 and w2 and

         z1 z2 = r1 r2 exp i(θ2 − θ1 ) = r1 r2 cos(θ2 − θ1 ) + i sin(θ2 − θ1 )

where θ2 − θ1 is the Euclidean angle between z1 and z2 . The special cases when
w1 = s + us and/or w2 = t + ut for s,t ∈ R must be considered separately since no
hyperbolic polar forms of these numbers exists. This happens when either or both
of w1 and w2 lie on the isotropic lines y = ±x.
   Multiplication by exp(φ u) is a linear transformation that sends the standard basis
{1, u} to the new basis {exp(φ u), u exp(φ u)}. The product

                                 exp(φ u)− u exp(φ u) = u,

shows that the new basis is hyperbolic orthogonal like the standard basis, since the
hyperbolic inner product (real part) is zero. The mapping w → w exp(φ u) is naturally
2.3 Inner and Outer Products                                                      31




Fig. 2.5 Euclidean rotation. The shaded areas each equal 12 θ




Fig. 2.6 Hyperbolic rotation. The shaded areas each equal 12 φ


called the hyperbolic rotation through the hyperbolic angle φ . If w = a + ub is any
vector, the coordinates a , b of w with respect to the rotated basis satisfy
                  w = a exp(φ u) + b u exp(φ u) = (a + ub ) exp(φ u),
so
                               a + ub = (a + ub) exp(−φ u).                   (2.10)

It follows at once that |a + ub |h = |a + ub|h , that is, the hyperbolic distance of
a point from the origin is independent of which hyperbolic orthogonal basis is
used to coordinatize the plane. Figures 2.5 and 2.6 show the geometric pictures
of multiplication by exp(iθ ) in the complex plane and multiplication by exp(φ u)
in the hyperbolic number plane, both as mappings sending each point to its image
(alibi) and as a change of coordinates (alias). As a mapping, the hyperbolic rotation
exp(φ u) moves each point a + ub along the hyperbola x2 − y2 = |a2 − b2 |, through
the hyperbolic angle φ , Fig. 2.6a. Equivalently, as a change of coordinates, the new
coordinates of any point are found by the usual parallelogram construction after
rotation of the axes of the original system through the hyperbolic angle φ , as in
Fig. 2.6b. (Note that the angles in Fig. 2.6 are hyperbolic angles, not Euclidean
angles!)
32                                                     2 Complex and Hyperbolic Numbers


   Notice that multiplying by i sends the basis {1, i} into {i, −1}, a counterclockwise
rotation about the origin taking the positive x-axis into the positive y-axis and the
positive y-axis into the negative x-axis. Multiplying by u in the hyperbolic plane
sends {1, u} into {u, 1}, a hyperbolic rotation about the line y = x that interchanges
the positive x- and y-axes.



Exercises

1. Given the complex numbers z1 = 2 + 3i and z2 = 3 − 5i, and the hyperbolic
   numbers w1 = 3 + 2u and w2 = 5 − 3u,
     (a) Calculate the conjugate product z1 z2 of z1 with z2 . Calculate the inner product
          < z1 z2 >0 and the outer product < z1 z2 >i between z1 and z2 . Do the
          same calculations for the conjugate product z2 z1 of z2 with z1 . What is the
          relationship between the two conjugate products?
     (b) Calculate the conjugate product w−   1 w2 of w1 with w2 . Calculate the hyper-
          bolic inner product < w−   w
                                   1 2 0>   and the outer product < w−   1 w2 >u between
          w1 and w2 . Do the same calculations for the conjugate product w−     2 w1 of w2
          with w1 . What is the relationship between the two conjugate products?
     (c) What is the area of the parallelogram with the sides z1 and z2 ?
     (d) What is the area of the parallelogram with the sides w1 and w2 ?
     (e) What is the Euclidean angle between the vectors z1 and z2 ?
      (f) What is the hyperbolic angle between the vectors w1 and w2 ?
2. Given the complex numbers z1 = r1 eiθ1 and z2 = r2 eiθ2 , and the hyperbolic
   numbers w1 = ρ1 euφ1 and w2 = ρ2 euφ2 ,
     (a) Calculate the conjugate product z1 z2 of z1 with z2 . Calculate the inner product
          < z1 z2 >0 and the outer product < z1 z2 >i between z1 and z2 . Do the
          same calculations for the conjugate product z2 z1 of z2 with z1 . What is the
          relationship between the two conjugate products?
     (b) Calculate the conjugate product w−   1 w2 of w1 with w2 . Calculate the hyper-
          bolic inner product < w−   w
                                   1 2 0>   and the outer product < w−   1 w2 >u between
          w1 and w2 . Do the same calculations for the conjugate product w−     2 w1 of w2
          with w1 . What is the relationship between the two conjugate products?
     (c) What is the area of the parallelogram with the sides z1 and z2 ?
     (d) What is the area of the parallelogram with the sides w1 and w2 ?
     (e) What is the Euclidean angle between the vectors z1 and z2 ?
      (f) What is the hyperbolic angle between the vectors w1 and w2 ?
2.4 Idempotent Basis                                                                   33


2.4 Idempotent Basis

Besides the standard basis {1, u} in which every hyperbolic number can be
expressed as w = x + uy, the hyperbolic plane has another distinguished basis,
associated with the two isotropic lines which separate the hyperbolic quadrants.
The idempotent basis of the hyperbolic numbers is the pair {u+ , u− } where

                            1                1
                        u+ = (1 + u) and u− = (1 − u).                             (2.11)
                            2                2
In terms of this basis, the expression for w = x + uy is w = w+ u+ + w− u− , where

                           w+ = x + y and w− = x − y.                              (2.12)

Conversely, given w = w+ u+ + w− u− , we can recover the coordinates with respect
to the standard basis by using the definitions of w+ and w− :

                          1                  1
                       x = (w+ + w− ) and y = (w+ − w− ).                          (2.13)
                          2                  2
   From the definitions of u+ and u− , it is clear that u+ + u− = 1 and u+ − u− =u.
We say that u+ and u− are idempotents because u2+ = u+ and u2− = u− , and they
are mutually annihilating because u+ u− = 0. Therefore, we have the projective
properties
                         wu+ = w+ u+      and wu− = w− u− .                        (2.14)

(The decomposition w = w+ u+ + w− u− is the spectral decomposition of w = x + uy.
Under the identification of hyperbolic numbers with symmetric 2 × 2 matrices,
                                                                         it
                                                                        xy
corresponds to the spectral decomposition [78] of the symmetric matrix      .)
                                                                        yx
   Because of its special properties, the idempotent basis is very nice for cal-
culations. For example, from (2.12) we see that w+ w− = x2 − y2 . Since for any
hyperbolic numbers v, w we have

         vw = (v+ u+ + v− u− )(w+ u+ + w− u− ) = (v+ w+ )u+ + (v− w− )u− ,

it follows that
                                                 
           |vw|h =    |(v+ w+ )(v− w− )| = |v+ v− | |w+ w− | = |v|h |w|h .

In particular, if one of the factors in a product is isotropic, then the entire product is
isotropic. Thus, although strictly speaking the polar decomposition (2.7) is defined
only for nonisotropic vectors, we can extend it to the isotropic lines by assigning
the isotropic vectors u± to the exponentials of the hyperbolic arguments ±∞,
respectively.
34                                                     2 Complex and Hyperbolic Numbers


  The binomial theorem takes a very simple form in the idempotent basis
representation, so we can easily compute powers of hyperbolic numbers:

        (w+ u+ + w− u− )k = (w+ )k uk+ + (w− )k uk− = (w+ )k u+ + (w− )k u−      (2.15)

This formula is valid for all real numbers k ∈ R and not just the positive integers.
For example, for k = −1, we find that

                         1/w = w−1 = (1/w+ )u+ + (1/w−)u− ,

a valid formula for the inverse (2) of w ∈ H, provided that |w|h = 0.
    Indeed, the validity of (2.15) allows us to extend the definitions of all of the
elementary functions to the elementary functions in the hyperbolic number plane. If
f (x) is such a function, for w = w+ u+ + w− u− , we define

                                f (w) ≡ f (w+ )u+ + f (w− )u−                    (2.16)

provided that f (w+ ) and f (w− ) are defined. It is natural to extend the hyperbolic
numbers to the complex hyperbolic numbers or unipodal      √ numbers by allowing
w+ , w− ∈ C. In this extension, we assume that i = −1 commutes with the
unipotent u, i.e., iu = ui. The unipodal numbers have been studied in [71]. They
will be used in the next section to find the solutions of the cubic equation.
   The extension of the real number system to include the unipodal numbers raises
the question of the possibility of even further extensions. Shortly before his early
death in 1879, William Kingdon Clifford geometrically extended the real number
system to include the concept of direction, what is now called geometric algebra or
Clifford algebra. In [43], geometric algebra provides a basis for a unified language
for mathematics and physics. We begin our study of geometric algebra in the next
chapter.


Exercises

1. Given the hyperbolic numbers w1 = 3 + 2u and w2 = 5 − u,
     (a) Express w1 and w2 in the spectral basis (u+ , u− ).
                                         √
     (b) Calculate w31 , w−1
                          1 , w1 w2 , and w2 .
     (c) Calculate u+ w1 and u− w1 and show that u+ w1 + u−w1 = w1 .
     (d) Calculate ew1 and ew2 by using the properties of the spectral basis.
2. Given the hyperbolic number w = x + yu,
     (a) Calculate ew . (b) Calculate log w.
3. Find sin( π4 u+ + π3 u− ).
2.5 The Cubic Equation                                                                     35

          1
4. Find 5−3u .
5. Solve the following quadratic equation for the hyperbolic number w.

                             (5 − 4u)w2 + (5 + 3u)w − 1 = 0.




2.5 The Cubic Equation

As mentioned in the introduction, the complex numbers were only grudgingly
accepted because of their utility in solving the cubic equation. Following [42],
we demonstrate here the usefulness of complex hyperbolic numbers by finding a
formula for the solutions of the venerated reduced cubic equation

                                    x3 + 3ax + b = 0.                                   (2.17)

(The general cubic Ay3 + 3By2 + Cy + D = 0, A = 0, can be transformed to the
reduced form (2.17) by dividing through by the leading coefficient and then making
the linear substitution y = x − B/A .) The basic unipodal equation wn = r can easily
be solved using the idempotent basis, with the help of (2.15). Writing w = w+ u+ +
w− u− and r = r+ u+ + r− u− , we get

                         wn = wn+ u+ + wn− u− = r+ u+ + r− u− ,                         (2.18)
                                                                    1               1
so w+ n = r+ and wn− = r− . It follows that w+ = |r+ | n α j and w− = |r− | n α k for
some integers 0 ≤ j, k ≤ n − 1, where α is a primitive nth root of unity http://en.
wikipedia.org/wiki/Root of unity. This proves the following theorem.
Theorem 2.5.1. For any positive integer n, the unipodal equation wn = r has n2
                    1           1
solutions w = α j r+n u+ + α k r−n u− for j, k = 0, 1, . . . , n − 1, where α ≡ exp(2π i/n).
  The number of roots to the equation wn = r can be reduced by adding constraints.
The following corollary follows immediately from the theorem by noting that
w+ w− = ρ = 0 is equivalent to w− = ρ /w+ .
Corollary 2.5.2. The unipodal equation wn = r, subject to the constraint w+ w− =
ρ , for a nonzero complex number ρ , has the n solutions
                                          1          ρ
                                w = α j r+n u+ +         1   u− ,
                                                   α j r+n
                                                                1
for j = 0, 1, . . . , n − 1, where α ≡ exp (2π i/n) and r+n denotes any nth root of the
complex number r+ .
36                                                 2 Complex and Hyperbolic Numbers


   It is interesting to note that Corollary 2.5.2 gives another way of solving the
dihedral equation
                                          1
                                    zn + n = β ,
                                         z
which is used by Felix Klein in his discussion of the solution of the cubic equation,
[49, p.141]. We are now prepared to solve the reduced cubic equation (2.17).
Theorem 2.5.3. The reduced cubic equation x3 + 3ax + b = 0 has the solutions for
j = 0, 1, 2,
                                                     
                            1       √           ρ
                       x=      α s + t + j√
                                   j 3
                                                        ,                  (2.19)
                            2                α 3 s+t
                                    √
where α = exp (2π i/3) = − 12 + 12 i 3 is a primitive cube root of unity and ρ =
                                      √
−4a, s = −4b, and t = s2 − ρ 3 = 4 b2 + 4a3.

Proof. The unipodal equation w3 = r, where r = s + ut, is equivalent in the standard
basis to (x + yu)3 = s + tu or (x3 + 3xy2 ) + u(y3 + 3x2 y) = s + ut. Equating the
complex scalar parts gives
                                 x3 + 3xy2 − s = 0.                           (2.20)
Making the additional constraint that w+ w− = x2 − y2 = ρ , we can eliminate y2
from (2.20), getting the equivalent equation

                                    3     1
                                x3 − ρ x − s = 0.                             (2.21)
                                    4     4
The constraint w+ w− = ρ further implies that

                   ρ 3 = (w+ w− )3 = w+ 3 w3− = r+ r− = s2 − t 2 ,
                                                                        
which   gives t =    s2 − ρ 3 . By letting ρ = −4a and s = −4b, so t =     s2 − ρ 3 =
 √
4 b + 4a , (2.21) becomes the reduced cubic equation x + 3ax + b = 0. Since
     2      3                                                 3

r+ = s + t, the desired solution (2.19) is then obtained by taking the complex scalar
part of the solution given in Corollary 2.5.2.                                      

Example. Find the solutions of the reduced cubic x3 − 6x + 4 = 0.

Solution: Here, a = −2, b = 4, so ρ = 8, s = −16, and √ we set t = 16i. Then
s + t = 16(−1 + i) = 29/2 exp(i3π /4), so we may take 3 s + t = 23/2 exp (iπ /4).
Thus,
                                                            
                    1 3/2                          8
                x=      2 exp(iπ /4)α j + 3/2
                    2                       2 exp (iπ /4)α j
                   = 21/2 exp (iπ /4)α j + exp(−iπ /4)α − j ,
2.6 Special Relativity and Lorentzian Geometry                                      37


for j = 0, 1, 2. That is,

         (i) x = 21/2 exp (iπ /4) + exp(−iπ /4) = 21/2 2 cos(π /4) = 2,

        (ii) x = 21/2 exp (iπ /4)exp (2π i/3) + exp(−iπ /4)exp (−2π i/3)

                = 21/2 exp (11π i/12) + exp(−11π i/12)
                                               √
                = 21/2 2 cos (11π i/12) = −(1 + 3) ≃ −2.7321,

or

        (iii) x = 21/2 exp (iπ /4)exp(−2π i/3) + exp(−iπ /4)exp (2π i/3)

                = 21/2 exp (−5π i/12)+ exp(5π i/12)
                                              √
                = 21/2 2 cos (5π i/12) = (−1 + 3) ≃ 0.7321.



Exercises

1. Find the solutions of the reduced cubic equation x3 − 3x − 1 = 0.
2. Find the solutions of the reduced cubic equation x3 − 3x + 1 = 0.
3. Find the solutions of the reduced cubic equation x3 − 4x + 2 = 0.



2.6 Special Relativity and Lorentzian Geometry

In 1905, Albert Einstein, at that time only 26 years of age, published his special
theory of relativity based on two postulates:
1. All coordinate systems (for measuring time and distance) moving with constant
   velocity relative to each other are equally valid for the formulation of the laws of
   physics.
2. Light propagates in every direction in a straight line and with the same speed c
   in every valid coordinate system.
   The formulas for transforming space and time coordinates between systems in
uniform relative motion had been found somewhat earlier by the Dutch physicist
H. A. Lorentz and were termed Lorentz transformations by H. Poincare. In 1907,
Hermann Minkowski showed that Einstein’s postulates imply a non-Euclidean
geometry in four-dimensional space-time, called (flat) Minkowski space-time.
Whereas more elaborate mathematical formalisms have been developed [3, 33, 68,
70], most of the features of the geometry can be understood by studying a two-
dimensional subspace involving only one space dimension and time, which might
38                                                       2 Complex and Hyperbolic Numbers


naturally be called the Minkowski plane. But that term is already in use for another
plane geometry that Minkowski developed for a quite different purpose, so this two-
dimensional model of space-time is instead called the Lorentzian plane (even though
Lorentz does not appear to have shared Minkowski’s geometrical point of view).
The hyperbolic numbers, which have also been called the “perplex numbers” [23],
serve as coordinates in the Lorentzian plane in much the same way that the complex
numbers serve as coordinates in the Euclidean plane.
   An event X that occurs at time t and at the place x is specified by its coordinates t
and x. If c is the speed of light, the product ct is a length, and the coordinates of the
event X can be combined into the hyperbolic number X = ct + ux. By the space-time
distance between two events X1 and X2 , we mean the hyperbolic modulus |X1 − X2 |h
which is the hyperbolic distance of the point X1 − X2 to the origin. If X1 = ct + x1 u
and X2 = ct + x2 u are two events occurring at the same time t, then by (2.1),
                                      
                    |X1 − X2 |h =      |02 − (x1 − x2 )2 | = |x1 − x2 |,             (2.22)

which is exactly the Euclidean distance between the points x1 and x2 on the x-axis.
   If the coordinates of an event in two-dimensional space-time relative to one
coordinate system are X = ct + ux, what are its coordinates X = ct + ux with
respect to a second coordinate system that moves with uniform velocity v < c with
respect to the first system? We have already laid the groundwork for solving this
problem. By (2.10), we have X = Xe−φ u . Calculating
                                  −
                           XX         = Xe−φ u X − eφ u = XX − ,

we conclude that
                           −
                               = c2t − (x )2 = c2t 2 − x2 = XX −
                                       2
                      XX                                                             (2.23)

is invariant under the Lorentz transformation of coordinates X = Xe−φ u .
    Let φ = tanh−1 (v/c) so that tanh φ = vc , which implies sinh(φ ) = vc cosh(φ ) and
the identity
                    1 = cosh2 φ − sinh2 φ = cosh2 φ (1 − v2/c2 ).
It follows that γ := cosh φ = √     1
                                           . The factor γ often arises in special relativity
                                  1−v2 /c2
which is why we denote it by a special symbol. Since X exp(−φ u) = X , we find

                 (ct + ux) cosh(−φ ) + u sinh(−φ )
                    = (ct cosh φ − x sinh φ ) + u(x cosh φ − ct sinh φ )
                      ct − xv/c      x − cvt/c
                    =            +u
                       1 − v /c
                            2   2     1 − v2/c2
                    = ct + ux .
2.6 Special Relativity and Lorentzian Geometry                                         39

Fig. 2.7 Minkowski
diagram. Note that the
unipotent u lies on the x-axis
and that ct lies on the real
y-axis




Equating scalar and unipotent parts in the last equality gives the famous Lorentz
equations:
                                t − xv/c2           x − vt
                            t =             , x =                                (2.24)
                                  1 − v /c
                                       2   2       1 − v2/c2
relating the times and positions of an event as measured by two observers in relative
motion [9, p.236]. Diagrams such as Fig. 2.7, showing two coordinate systems in
space-time in relative motion (using equal distance scales on the two axes), are
called Minkowski diagrams [25].
    In Fig. 2.7, we have adopted the convention that the unipotent u lies along the
horizontal x-axis and 1 lies along the vertical time axis ct.
    The histories of two particles in relative uniform motion are given by X(t) = ct
and X (t ) = ct . Each observer has a rest frame or hyperbolic orthogonal coordinate
system in which he or she measures the relative time t and relative position x of
an event X = ct + xu. The history or worldline of a particle is just the graph of its
location as a function of time, X(t) = ct + ux(t). For example, in a coordinate system
moving with the particle, so that the particle remains at x(t) ≡ 0 (the rest frame of
the particle), the particle’s history or worldline is just the straight line with equation
X = ct, Fig. 2.7.
    The division of the Lorentz plane into quadrants has an important physical
interpretation. The interval between two events, say, the origin and X, is said to
be timelike if there is a velocity v < c such that in the coordinate system moving
along the x-axis with velocity v, the history of the origin passes through X. Thus,
to an observer in this coordinate system, the second event X occurs at the same
place x = 0 but at a later time t > 0. Events with a timelike separation are causally
related in that the earlier event can influence the later one, since a decision at the
later time might be made on the basis of information left at the given location at the
earlier time.
    In the Minkowski diagram, Fig. 2.7, each of the events X1 = ct1 and X2 = ct2 have
a timelike separation from the event X3 = ct3 . The events X1 and X2 have a lightlike
separation because the line segment connecting them, the history or worldline of a
40                                                   2 Complex and Hyperbolic Numbers




Fig. 2.8 Fitzgerald–Lorentz contraction


light signal, is parallel to the isotropic line x = ct. (The isotropic lines x = ±ct are
the worldlines of light signals moving at the velocity of light and passing through the
origin X = 0 = X .) The events X1 and X1 have a spacelike separation because in the
coordinate system X = ct moving along the x-axis with velocity v < c, the two
appear as simultaneous events at different locations, since the line segment joining
them is parallel to the x axis.
    Whereas the space-time distance reduces to the usual Euclidean distance (2.22)
when an observer makes measurements of the distances between objects in her rest
frame along her x-axis, the Fitzgerald–Lorentz contraction comes in to play when
two coordinate systems are moving with respect to each other. An object at rest
in either system appears shorter when measured from the other system than when
measured in its rest system.
    Suppose system S is moving with velocity v < c with respect to system S. The
histories of an interval I at rest in S with ends at the origin and point X = x0 u are
the lines X = ct and X = ct + ux0 . Now recall that the points on the hyperbola
c2t 2 − x2 = ρ 2 , ρ > 0, all have hyperbolic distance ρ from the origin. Thus, the
point on the x -axis at hyperbolic distance x0 is the point where this axis intersects
the hyperbola c2t 2 − x2 = x20 , and it is clear from the Minkowski diagram Fig. 2.8a
that this is beyond the intersection of the x -axis with the worldline X = ct + ux.
Thus, the hyperbolic length of the interval I in the rest frame S is less than x0 , its
hyperbolic length in S.
    The history of a particle moving with constant velocity v < c along the x-axis is
X(t) = ct + utv. Differentiating X(t) with respect to t gives
                                  V := dX/dt = c + uv,                           (2.25)

the space-time velocity of this particle: a vector parallel to the ct -axis. Thus, the
histories of the endpoints of an interval I of the x -axis (i.e., an interval at rest in
system S ) will be parallel to the ct -axis, as in Fig. 2.8b, and again the Minkowski
diagram shows that the length of this interval in the coordinate system S is less than
its length in S . The invariance of the hyperbolic distance under change of orthogonal
2.6 Special Relativity and Lorentzian Geometry                                      41


coordinates in the Lorentz plane is seen to be a geometric expression of the relativity
of physical length measurements. It follows that the length of an object is dependent
upon the rest frame in which it is measured.
   Experimentally, it has been determined in the coordinate system S that the
momentum of a particle with rest mass m moving with the velocity vu = dx        dt u is
p = γ mvu where γ = √ 1 2 2 . The space-time momentum for a moving particle
                           1−v /c
with the space-time velocity V = dX
                                 dt is defined to be
                                                                   
                                                                E
                        P = γ mV = γ m(c + vu) =                  +p ,          (2.26)
                                                                c

where E is called the total energy of the particle with respect to the coordinate
system S at rest. Note that whereas we found in (2.23) the quantity XX − to be
Lorentz invariant for the space-time event X, the corresponding quantity VV − =
c2 − v2 of the space-time velocity V is not Lorentz invariant.
   From the above relationships, we can easily derive Einstein’s most famous
formula for the total energy E in the coordinate system S. We first calculate

                                        E2
                             PP− =         − γ 2 m2 v 2 = m2 c 2
                                        c2
which is a Lorentz-invariant relation. Solving this relation for the total energy E
gives
                                         E = γ mc2                              (2.27)

relative to the coordinate system S in which the particle has velocity vu. The total
energy (2.27) reduces to the energy E0 = mc2 of the particle when it is at rest.
   The kinetic energy K of the particle with mass m moving with the velocity vu can
be thought of as the difference of its total energy E and its energy E0 when it is at
rest. The kinetic energy is thus given by
                                                                          
                                                            1 v2 3 v4
               K = E − E0 = mc (γ − 1) = mc
                                    2               2
                                                                +     + ··· ,
                                                            2 c2 8 c4

where we are using a Taylor series expansion of the factor γ . It follows that for
v  c, when the speed v of the particle is much less than c, that K = 12 mv2 which is
in agreement with Newton’s kinetic energy for a moving particle.
   Many other fundamental results in special relativity theory can be derived using
geometric properties of the 2-dimensional Lorentzian plane. As we have seen, the
hyperbolic numbers play the same role for computations in the Lorentzian plane that
the complex numbers have in the Euclidean plane. Whereas here we have limited
our preliminary discussion of special relativity to the Lorentzian plane, we extend it
to 4-dimensional space-time in Chap. 11.
42                                                           2 Complex and Hyperbolic Numbers


Exercises

1. Two twins are born on Earth on the same day. One twin travels with his father
   on a rocketship to the nearest star Alpha Centauri, a distance of 4.37 light-
   years from Earth. They then turn around and return to Earth just in time for
   his Earth twin’s tenth birthday. Assuming that their outward and return journey
   was traveled roughly at the same speed,
     (a) Calculate the average velocity of the rocket (as a percentage of the speed of
         light).
     (b) Calculate the age of the returning twin in comparison to that of his sister who
         remained on Earth.
2. (a) Calculate the length of a meterstick in a direction parallel to its travel in a
       restframe in which it is moving at 95 % of the velocity of light. (The length of
       the same meterstick in a direction perpendicular to its travel is unchanged.)
3. Let X = ct + uvt be the history of a particle moving at a constant velocity vu in
   the coordinate system S, and let X = ct = Xe−φ u be the history of this same
   particle at rest in the coordinate system S .
     (a) Show that
                                   −
                                       = c2t = c2t 2 − v2t 2 = XX − ,
                                              2
                              XX
         which implies that

                          1                   dt        1
                       t = t       ⇐⇒            =γ =       = cosh φ .
                          γ                   dt       1− v
                                                           2
                                                                    c2

                                     −φ u .
                        dt = γ V e
     (b) Show that V = dX
     (c) Show that V = γ V e − φ u implies
                                                  −
                                         VV           = γ 2VV − ,

         so that the space-time velocity V of a particle moving at constant velocity is
         not Lorentz invariant.
Chapter 3
Geometric Algebra




                              That all our knowledge begins with experience, there is indeed
                              no doubt . . . but although our knowledge originates with
                              experience, it does not all arise out of experience.
                                                                               –Immanuel Kant



The real number system R has a long and august history spanning a host of
civilizations over a period of many centuries [17]. It may be considered the rock
upon which many other mathematical systems are constructed and, at the same time,
serves as a model of desirable properties that any extension of the real numbers
should have. The real numbers R were extended to the complex numbers C = R(i),
where i2 = −1, principally because of the discovery of the solutions to the quadratic
and cubic polynomials in terms of complex numbers during the Renaissance. The
powerful Euler formula z = r exp(iθ ) helps makes clear the geometric significance
of the multiplication of complex numbers, as we have seen in Fig. 2.5 in the last
chapter. Other extensions of the real and complex numbers have been considered
but until recently have found only limited acceptance. For example, the extension of
the complex numbers to Hamilton’s quaternions was more divisive in its effects
upon the mathematical community [14], one reason being the lack of universal
commutativity and another the absence of a unique, clear geometric interpretation.
    We have seen in the previous chapter that extending the real numbers R to
include a new square root of +1 leads to the concept of the hyperbolic number
plane H, which in many ways is analogous to the complex number plane C.
Understanding the hyperbolic numbers is key to understanding even more general
geometric extensions of the real numbers.
                                 √         Perhaps the extension of the real numbers
to include a new square root u = +1  √ ∈/ R only occurred much later because people
were happy with the status quo that 1 = ±1 and because such considerations were
before the advent of Einstein’s theory of special relativity and the study of non-
Euclidean geometries.
    Geometric algebra is the extension of the real number system to include new
anticommuting square roots of ±1, which represent mutually orthogonal unit

G. Sobczyk, New Foundations in Mathematics: The Geometric                                  43
Concept of Number, DOI 10.1007/978-0-8176-8385-6 3,
© Springer Science+Business Media New York 2013
44                                                              3 Geometric Algebra




vectors in successively higher dimensions. The critical new insight is that by
assuming that our new square roots of ±1 are anticommutative, we obtain a more
general concept of number that will serve us well in the expression of geometrical
ideas [72]. We begin with the extension of the real numbers to include two new
anticommuting square roots of +1 which are given the interpretation of two unit
vectors e1 and e2 lying along the x- and y-axes, respectively, as shown in Fig. 3.1.
More generally, if we introduce n anticommuting square roots of unity, together
with their geometric sums and products, we can represent all the directions in an
n-dimensional space.
   Geometric algebra provides the framework for the rest of the material developed
in this book, and it is for this reason that the book is entitled New Foundations in
Mathematics: The Geometric Concept of Number. A brief history of the develop-
ment of geometric algebra, also known as Clifford algebra, is given in the box.
3.1 Geometric Numbers of the Plane                                                       45

Fig. 3.1 Anticommuting                                             y
orthogonal unit vectors e1 and
e2 along the xy-axes. Also
pictured is the unit bivector
e12 = e1 e2
                                                              e2                   e12
                                                                            x
                                                                       e1




3.1 Geometric Numbers of the Plane

Let e1 = (1, 0) and e2 = (0, 1) be orthonormal unit vectors along the x- and y-axes
in R2 starting at the origin, and let a = (a1 , a2 ) = a1 e1 + a2 e2 and b = (b1 , b2 ) =
b1 e1 + b2 e2 , for a1 , a2 , b1 , b2 ∈ R, be arbitrary vectors in R2 . The familiar inner
product or “dot product” between the vectors a and b is given by

                             a · b = |a||b| cos θ = a1 b1 + a2b2 ,                  (3.1)

where |a| and |b| are the magnitudes or lengths of the vectors a and b and θ is the
angle between them.
   The associative geometric algebra G2 = G(R2 ) of the plane R2 is generated by
the geometric multiplication of the vectors in R2 , subjected to the rule that given
any vector x = (x1 , x2 ) ∈ R2 ,

                             x2 = xx = |x|2 = x · x = x21 + x22 .                   (3.2)

This rule means that the square of any vector is equal to its magnitude squared.
Geometric addition and multiplication of vectors satisfies all of the rules of an
associative algebra with the unity 1. Indeed, geometric algebra satisfies all of the
usual rules of addition and multiplication of real numbers, except that the geometric
product of vectors is not universally commutative. The geometric algebra G2 is
the geometric extension of the real numbers to include the two anticommuting unit
vectors e1 and e2 along the x- and y-axes. See Fig. 3.1.
   The fact that e1 and e2 are anticommuting can be considered to be a consequence
of the rule (3.2). Since e1 and e2 are orthogonal unit vectors, by utilizing the
Pythagorean theorem, we have

             (e1 + e2 )2 = e21 + e1 e2 + e2 e1 + e22 = 1 + e1e2 + e2e1 + 1 = 2,

from which it follows that e1 e2 + e2 e1 = 0, so e1 and e2 are anticommuting. We
give the quantity i = e12 := e1 e2 the geometric interpretation of a unit bivector or
46                                                                            3 Geometric Algebra



                                       a^b                              i
                                                   b
                                a

Fig. 3.2 The bivector a ∧ b is obtained by sweeping the vector b out along the vector a. Also
shown is the unit bivector i in the plane of a and b


                                             a+b
                                                           0    b
                                             a

Fig. 3.3 The law of cosines relates the lengths of the sides of the triangle to the cosine of the angle
between the sides a and b


directed plane segment in the xy-plane. Whereas by the rule (3.2) a unit vector has
square +1, we find that

             i2 = (e1 e2 )(e1 e2 ) = e1 (e2 e1 )e2 = −e1 (e1 e2 )e2 = −e21 e22 = −1,

so that the unit bivector i has square −1. The unit bivector i is pictured in both
Figs. 3.1 and 3.2. Notice that the shape of a bivector is unimportant; an oriented disk
with area one in the xy-plane provides an equally valid picture of a unit bivector as
does the oriented unit square in the xy-plane with the same orientation.
   For any vectors a, b ∈ R2 , we find by again using (3.2) that

                               (a + b)2 = a2 + (ab + ba) + b2,                                   (3.3)

or equivalently,

                    1            1                       
             a · b = (ab + ba) =    |a + b|2 − |a|2 − |b|2 = |a||b| cos θ ,
                    2            2
which is an expression of the law of cosines. See Fig. 3.3.
    Directly calculating the geometric products ab and ba for the vectors a = a1 e1 +
a2 e2 and b = b1 e1 + b2e2 , and simplifying, gives

      ab = (a1 e1 + a2 e2 )(b1 e1 + b2 e2 ) = a1 b1 e21 + a2 b2 e22 + a1 b2 e1 e2 + a2b1 e2 e1
         = (a1 b1 + a2b2 ) + (a1b2 − a2b1 )e12 .                                                 (3.4)

and

      ba = (b1 e1 + b2e2 )(a1 e1 + a2e2 ) = (a1 b1 + a2 b2 ) − (a1b2 − a2 b1 )e12 .              (3.5)
3.1 Geometric Numbers of the Plane                                                   47


  Using (3.4) and (3.5), we decompose the geometric product ab into symmetric
and antisymmetric parts, getting

                      1           1
                  ab = (ab + ba) + (ab − ba) = a · b + a ∧ b.                   (3.6)
                      2           2
The symmetric part gives the inner product

                           1
                    a · b = (ab + ba) = ab0 = a1 b1 + a2b2 ,
                           2

where ab0 denotes the 0-vector part or scalar part of the argument. The
antisymmetric part, called the outer product or Grassmann exterior product, is
given by
                                                                       
               1                                                  a a
        a ∧ b = (ab − ba) = ab2 = (a1 b2 − a2 b1 )e1 e2 = i det 1 2 ,
               2                                                  b1 b2

where ab2 denotes the 2-vector part or bivector part of the argument.
   The outer product a ∧ b defines the direction and orientation of an oriented or
directed plane segment, just as a vector defines the direction and orientation of
a directed line segment. Note that the bivector a ∧ b has the direction of the unit
bivector i = e1 e2 and the magnitude of the paralellogram defined by the vectors a
and b. See Fig. 3.2.
   We can also express the outer product a ∧ b in the form

                                 a ∧ b = |a||b|i sin θ                          (3.7)

which is complimentary to (3.1) for the inner product. In the particular case that

                               1
                    0 = a · b = (ab + ba) ⇐⇒ ab = −ba,
                               2
we see once again that the geometric product of two nonzero orthogonal vectors is
anticommutative. In this case, (3.3) reduces to the familiar Pythagorean theorem for
a right triangle with the vectors a and b along its sides.
    Putting together (3.1) and (3.7) into (3.6), and using (2.3), we find that the
geometric product of the vectors a and b can be written in the Euler form

               ab = a · b + a ∧ b = |a||b|(cos θ + i sin θ ) = |a||b|eiθ .      (3.8)

We have made the fundamental discovery that the geometric product of the two
vectors a, b ∈ R2 is formally a complex number, most beautifully represented by
the Euler formula above. Notice that whereas our derivation was in R2 , the same
derivation carries over for any two vectors in Rn , since two linearly independent
vectors in Rn will always determine a two-dimensional subspace of Rn which we
can choose to be R2 .
48                                                                        3 Geometric Algebra


   The standard basis of the geometric algebra G2 = G(R2 ) over the real numbers
R is
                            G2 = spanR {1, e1 , e2 , e12 },                 (3.9)
where e21 = e22 = 1 and e12 := e1 e2 = −e2 e1 . We have seen that e1 and e2 have the
interpretation of orthonormal vectors along the x- and y-axes of R2 and that the
imaginary unit i = e12 is the unit bivector of the plane spanned by e1 and e2 . The
most general geometric number g ∈ G2 has the form

                            g = (α1 + α2 e12 ) + (v1e1 + v2e2 ),                       (3.10)

where αi , vi ∈ R for i = 1, 2, in the standard basis (3.9).



Exercises

1. Let x1 = (2, 3), x2 = (2, −3), and x3 = (4, 1). Calculate
     (a) x1 · x2 .
     (b) x1 ∧ x2 . Graph this bivector.
     (c) x2 x3 . Find the Euler form (3.8) for this product.
     (d) Verify that x1 (x2 + x3 ) = x1 x2 + x1x3 .
     (e) Graph x1 , x2 , and x1 + x2 in R2 .
2. For a = (a1 , a2 ), b = (b1 , b2 ), c = (c1 , c2 ) in R2 , calculate
     (a) a · b
     (b) a ∧ b. Graph this bivector.
     (c) Verify that a(b + c) = ab + ac.
     (d) Verify that (b + c)a = ba + ca.
3. Let x = (x, y) = xe1 + ye2 .
                                    √
     (a) Find the magnitude |x| = x2 .
                                     x
     (b) Find the unit vector x̂ := |x| , and show that

                                               1   x     x̂
                                       x−1 =     =    =
                                               x |x|2   |x|

         where x−1 x = 1 = xx−1.
     (c) Show that the equation of the unit circle in R2 with center at the point a ∈ R2
         is (x − a)2 = 1 .
4. Let w1 = 5 + 4e1 , w2 = 5 − 4e2 , and z3 = 2 + e1 e2 be geometric numbers in G2 .
     (a) Show that w1 w2 − z3 = 23 + 20e1 − 20e2 − 17e12.
3.1 Geometric Numbers of the Plane                                                       49


   (b) Show that w1 (w2 w3 ) = (w1 w2 )w3 = 66 + 60e1 − 20e2 − 7e12 (geometric
       multiplication is associative).
   (c) Show that w1 (w2 + w3 ) = w1 w2 + w1 w3 = 35 + 28e1 − 16e2 − 11e12 (dis-
       tributive law).
                                                                     
5. Let w = x + e1y and w− = x − e1y. We define the magnitude |w| = |ww− |.
                       
  (a) Show that |w| = |x2 − y2 |.
  (b) Show that the equation of the unit hyperbola in the hyperbolic number plane
      H = spanR {1, e1 } is |w|2 = |ww− | = 1 and has four branches.
  (c) Hyperbolic Euler formula: Let x > |y|. Show that
                                              
                              x        y
           w = x + e1y = |w|     + e1              = ρ (cosh φ + e1 sinh φ ) = ρ ee1 φ
                             |w|      |w|

      where ρ = |w| is the hyperbolic magnitude of w and φ is the hyperbolic angle
      that w makes with the x-axis. The (ρ , φ ) are also called the hyperbolic polar
      coordinates of the point w = (x, y) = x + e1 y. What happens in the case that
      y > |x|? Compare this with similar results in Chap. 2.
  (d) Let w1 = ρ1 exp (e1 φ1 ) and w2 = ρ2 exp (e1 φ2 ). Show that

                               w1 w2 = ρ1 ρ2 exp (e1 (φ1 + φ2 )).

      What is the geometric interpretation of this result? Illustrate with a figure.
      Compare this with similar results in Chap. 2.
  (f) Find the square roots of the geometric numbers w = 5 + 4e1 and z = 2 + e12 .
      Hint: First express the numbers in Euler form.
6. Calculate
  (a) eiθ e1 and eiθ e2 , where i = e1 e2 , and graph the results on the unit circle in R2 .
                                        iθ     −iθ
  (b) Show that eiθ e1 = e1 e−iθ = e 2 e1 e 2 .
  (c) Show that (eiθ e1 ) ∧ (eiθ e2 ) = e1 ∧ e2 = i, and explain the geometric signifi-
      cance of this result.
7. Show that e−iθ a rotates the vector a = (a1 , a2 ) counterclockwise in the (x, y)-
   plane through an angle of θ .
8. Let the geometric numbers A = 1 + 2e1 − e2 + 3i and B = −2 − e1 + 2e2 − i.
   Calculate the geometric product AB and write it as the sum of its scalar, vector,
   and bivector parts.
9. (a) Show that X = a−1 (c−b) ∈ G2 is the solution to the linear equation aX +b =
       c where a, b, c ∈ R2 .
   (b) Show that X = (c−b)a−1 ∈ G2 is the solution to the linear equation Xa+b =
       c where a, b, c ∈ R2 .
   (c) Find the solution to the equation aX 2 + b = c.
50                                                                              3 Geometric Algebra

Fig. 3.4 Geometric numbers
of space                                                                       Scalars



                                                                               Vectors

                                                                       a^b                          i
                                                                                   b
                                                                   a
                                                                              Bivectors



                                                                               c
                                                                                           b
                                                                                       a           a b c
                                                                              Trivectors
                                                              Geometric numbers of Space

Fig. 3.5 The trivector
a ∧ b ∧ c is formed by
sweeping the bivector a ∧ b
out along the vector c. Also                                                                             c
shown is the unit                                             e3                   (a ^ b) ^ c
pseudoscalar I = e123                      e1e2e3


                                                                                               b
                                                         e2
                                          e1                              a



3.2 The Geometric Algebra G3 of Space

To arrive at the geometric algebra G3 = G(R3 ) of the 3-dimensional Euclidean
space R3 , we simply extend the geometric algebra G2 = G(R2 ) of the vector plane
R2 to include the unit vector e3 which is orthogonal to the plane of the bivector e12 .
The standard basis of the geometric algebra G3 = G(R3 ) is

                         G3 = spanR {1, e1 , e2 , e3 , e23 , e31 , e12 , I},                            (3.11)

where e21 = e22 = e23 = 1 and ei j := ei e j = −e j ei for i = j and 1 ≤ i, j ≤ 3, and where
the trivector I := e123 = e1 e2 e3 . The geometric numbers of 3-dimensional space are
pictured in Fig. 3.4.
   The e1 , e2 , e3 are orthonormal unit vectors along the x, y, z-axes, the e23 , e31 ,
and e12 are unit bivectors defining the directions of the yz-, zx-, and xy-planes,
respectively, and the unit trivector I = e123 defines the directed volume element of
space. The trivector I is pictured in Fig. 3.5.
3.2 The Geometric Algebra G3 of Space                                                          51


   Calculating the square of the unit trivector or pseudoscalar of G3 gives

               I 2 = e1 e2 e3 e1 e2 e3 = −e1 e2 e1 e3 e2 e3 = (e1 e2 )2 e23 = −1,

so the trivector I is another geometric square root of minus one. The pseudoscalar I
also has the important property that it commutes with all the elements of G3 and is
therefore in the center Z(G3 ) of the algebra G3 .
   Noting that e3 = −Ie12 , e23 = Ie1 and e31 = Ie2 , the standard basis of G3 takes
the form

 G3 = spanR {1, e1 , e2 , −Ie12 , Ie1 , Ie2 , e12 , I} = spanC {1, e1 , e2 , e12 } = G2 (I) (3.12)

The last two equalities in the above equation show that the geometric algebra G3 can
be considered to be the geometric algebra G2 of the plane extended or complexified
to include the pseudoscalar element I = e123 . Any geometric number g ∈ G3 can be
expressed in the form g = A + IB where A, B ∈ G2 . Later, it will be shown that there
is an algebraic isomorphism between G2 and the 2 × 2 matrix algebra over the real
numbers and that G3 is isomorphic to the 2 × 2 matrix algebra over the complex
numbers.
    Given the vectors a, b ∈ R3 , where a = (a1 , a2 , a3 ) and b = (b1 , b2 , b3 ), a similar
calculation of the geometric products (3.4) and (3.5) shows that
                        1           1
                    ab = (ab + ba) + (ab − ba) = a · b + a ∧ b,                           (3.13)
                        2           2
where the inner product a · b = ab0 is given by

                               1
                        a · b = (ab + ba) = a1 b1 + a2b2 + a3 b3                          (3.14)
                               2
and the corresponding outer product a ∧ b = ab2 is given by
                                           ⎛          ⎞
                                             e1 e2 e3
                        1
                 a ∧ b = (ab − ba) = I det ⎝a1 a2 a3 ⎠ = I(a × b).                        (3.15)
                        2
                                             b1 b2 b3

We have expressed the outer product a ∧ b in terms of the familiar cross product
a × b of the vectors a, b ∈ R3 . The vector a × b is the right-handed normal to the
plane of the bivector a ∧ b, and |a × b| = |a ∧ b|. See Fig. 3.6.
   Let us now explore the geometric product of the vector a with the bivector b ∧ c.
We begin by decomposing the geometric product a(b ∧ c) into antisymmetric and
symmetric parts:
                        1                       1
              a(b ∧ c) = [a(b ∧ c) − (b ∧ c)a] + [a(b ∧ c) + (b ∧ c)a].
                        2                       2
52                                                                        3 Geometric Algebra

Fig. 3.6 The vector a is
swept out along the vector b
to form the bivector a ∧ b.                                                   axb
The vector a × b is the
right-handed normal to this
plane, whose length |a × b| is
equal to the area or magnitude
|a ∧ b| of the bivector a ∧ b                                               a^b
                                                                                       b

                                                                      a



For the antisymmetric part, we find that
                1                         1
  a · (b ∧ c) := [a(b ∧ c) − (b ∧ c)a] = I [a(b × c) − (b × c)a] = −a × (b × c),
                2                         2
                                                                            (3.16)
and for the symmetric part, we find that

                            1                          1
           a ∧ (b ∧ c) :=     [a(b ∧ c) + (b ∧ c)a] = I [a(b × c) + (b × c)a]
                            2                          2
                        = I[a · (b × c)].                                              (3.17)

The quantity a ∧ (b ∧ c) = (a ∧ b) ∧ c is called the trivector obtained by sweeping
the bivector a ∧ b out along the vector c, as shown in Fig. 3.5.
   Whereas we have carried out the above calculations for three vectors in R3 , the
calculation remains valid in Rn for the simple reason that three linearly independent
vectors in Rn , n ≥ 3, define a three-dimensional subspace of Rn . It is important,
however, to give a direct argument for the identity

                                 a · (b ∧ c) = (a · b)c − (a · c)b,                    (3.18)

which is also valid in Rn .
  Decomposing the left side of this equation, using (3.16) and (3.15), we find

                                      1
                         a · (b ∧ c) = [abc − acb − bca + cba].
                                      4
Decomposing the right hand side of the equation, using (3.14), we get

                          1
     (a · b)c − (a · c)b = [(a · b)c + c(a · b) − (a · c)b − b(a · c)]
                          2
                          1
                         = [(ab + ba)c + c(ab + ba) − (ac + ca)b − b(ac + ca)].
                          4
After cancellations, we see that the left and right sides of the equations are identical,
so the identity (3.18) is proved.
3.2 The Geometric Algebra G3 of Space                                                53


   We now give the definition of the inner product (a ∧ b) · (c ∧ d) of the two
bivectors a ∧ b and c ∧ d where a, b, c, d ∈ R3 .
Definition 3.2.1. (a ∧ b) · (c ∧ d) = (a ∧ b)(c ∧ d)0 so that (a ∧ b) · (c ∧ d) is the
scalar part of the geometric product (a ∧ b)(c ∧ d) of the bivectors.
   Using the above definition and (3.13), we can find a formula for calculating
(a ∧ b) · (c ∧ d). We find that

          (a ∧ b) · (c ∧ d) =< (a ∧ b)(c ∧ d) >0 =< (ab − a · b)(c ∧ d) >0
             =< ab(c ∧ d) >0 =< a[b · (c ∧ d)] >0 = a · [b · (c ∧ d)].           (3.19)

As a special case of this identity, we define the magnitude |a ∧ b| of the bivector
a ∧ b by
                          
               |a ∧ b| := (a ∧ b) · (b ∧ a) = |a|2 |b|2 − (a · b)2.          (3.20)



Exercises

 1. Verify the coordinate formulas (3.14) and (3.15) for the inner and outer products
    in G3 .
       For problems 2–5, do the calculation for the vectors a = 2e1 + 3e2 − e3 ,
    b = −e1 + 2e2 + e3 , c = 3e1 − 4e2 + 2e3 ∈ R3 . The reader is strongly encour-
    aged to check his hand calculations with the Clifford Algebra Calculator
    (CLICAL) developed by Pertti Lounesto [54]. The software for CLICAL can be
    downloaded from the site http://users.tkk.fi/ppuska/mirror/Lounesto/CLICAL.
    htm
 2. (a) Calculate a ∧ b.
    (b) Calculate
                                              1      a∧b
                               (a ∧ b)−1 =       =−          .
                                             a∧b    |a ∧ b|2

        Why is the minus sign necessary?
 3. Calculate a · (b ∧ c) = −a × (b × c) using formula (3.18)
 4. Calculate (a ∧ b) · (b ∧ c) :=< (a ∧ b)(b ∧ c) >0 by using (3.19) and (3.18).
 5. (a) Calculate a ∧ b ∧ c using the formula (3.17).
    (b) Using (3.15), calculate (a ∧ b)  (b ∧ c), where A  B := 12 (AB − BA). (The
        symbol  is used for the antisymmetric product to distinguish it from the
        symbol × used for the cross product of vectors in R3 .)
    For problems 6–16, let a, b, c be arbitrary vectors in R3 ⊂ G3 .
54                                                                3 Geometric Algebra


 6. (a) Show that for any vectors a, b, c ∈ R3 ,

                                1
                     a ∧ b ∧ c = (abc − acb + bca − cba)
                                4
                                1
                               = (abc − acb + bca − cba + cab − bac)
                                6

    (b) Show that (a ∧ b)(b ∧ c) = (a ∧ b) · (b ∧ c) + (a ∧ b)  (b ∧ c).
 7. Noting that b = (ba)a−1 = (b · a)a−1 + (b ∧ a)a−1 , show that b a = b · a and
    b⊥ a = b⊥ ∧ a where b = (b · a)a−1 and b⊥ = (b ∧ a)a−1 = b − b .
 8. Find vectors c and c⊥ such that c = c + c⊥ and c (a ∧ b) = c · (a ∧ b) and
    c⊥ (a ∧ b) = c ∧ (a ∧ b). Hint: Use the fact that

              c = [c(a ∧ b)](a ∧ b)−1 = [c · (a ∧ b) + c ∧ (a ∧ b)](a ∧ b)−1.

 9. Using (3.15), show that a × b = −I(a ∧ b) where I = e123 .
10. Show that a · [I(b ∧ c)] = I(a ∧ b ∧ c) where I = e123 .
11. Show that a ∧ [I(b ∧ c)] = I[a · (b ∧ c)] where I = e123 .
12. Show that a(a ∧ b) = a · (a ∧ b)
13. Show that (a + b ∧ c)2 = a2 + 2a ∧ b ∧ c + (b ∧ c)2.
14. Show that a(a ∧ b) = −(a ∧ b)a.
15. Show that (a + a ∧ b)2 = a2 + (a ∧ b)2.
16. Show that (a ∧ b + b ∧ c)2 = (a ∧ b)2 + 2(a ∧ b) · (b ∧ c) + (b ∧ c)2.



3.3 Orthogonal Transformations

Much of the utility of geometric algebra stems from the simple and direct expression
of orthogonal transformations. Specifically, given two vectors a and b, such that
|a| = |b|, let us find a reflection (mirror image) L(x) and a rotation R(x) with the
property that L(a) = R(a) = b.
    Noting that
                   (a + b) · (a − b) = a2 − a · b + b · a − b2 = 0,

and assuming a = b, define the transformation

                            L(x) = −(a − b)x(a − b)−1.                          (3.21)
Writing a = 12 (a + b) + 12 (a − b), it easily follows that
                                              
                       1            1               1       1
          L(a) = L       (a + b) + (a − b) = (a + b) − (a − b) = b
                       2            2               2       2
3.3 Orthogonal Transformations                                                            55

Fig. 3.7 The vector a is                                                   a
reflected in the plane
perpendicular to the vector                                                      a-b
a − b to give the vector b




                                                                           b



as required. See Fig. 3.7. The transformation L(x) represents a reflection through
the plane normal to the vector a − b. In the case that b = a, the required reflection
is given by
                                       L(x) = −cxc−1,
where c is any nonzero vector orthogonal to a. Another interesting case is when b =
−a, in which case the La (x) = −axa−1 is a reflection with respect to the hyperplane
that has a as its normal vector.
   Let us now see how to define a rotation R(x) with the property that R(a) = b
where a and b are any two vectors such that |a| = |b|. Recalling (3.8), we note that
                                                  1           1
                     b = a(a−1 b) = (ba−1 ) 2 a(a−1 b) 2 = b(a−1 a),

where a−1 = |a|a 2 . The desired rotation is given by
                                                      1           1
                                 R(x) = (ba−1 ) 2 x(a−1 b) 2 .                         (3.22)

Since |a| = |b|, it follows that a−1 b = âb̂ where â = |a|a
                                                              and b̂ = |b|
                                                                        b
                                                                           are unit vectors.
                                                                   √
   There is a very simple formula that allows us to calculate âb̂ algebraically. We
have
                                                â + b̂
                                     âb̂ = ±â           .                          (3.23)
                                                |â + b̂|
To verify (3.23), we simply calculate
                                      2
                              â + b̂       â(â + b̂)â(â + b̂)b̂b̂
                          â              =
                             |â + b̂|             (â + b̂)2
                                              â(â + b̂)(b̂ + â)b̂
                                          =                          = âb̂.
                                                    (â + b̂)2

    Equation (3.22) is called the half angle or two-sided representation of a rotation
in the plane of the vectors a and b. Writing the vector x = x + x⊥ where

                                                                       b∧a
                     x = [x · (a ∧ b)](a ∧ b)−1 = x · (a ∧ b)
                                                                      |a ∧ b|2
56                                                                               3 Geometric Algebra


                                                                      R(x)
                                                                      x

                                                                  b
                                                                             x
                                                                             x
                                                                  a    x



Fig. 3.8 The vector x = x + x⊥ is rotated in the plane of the bivector a ∧ b into R(x), leaving the
                                                                             θ   θ         θ
perpendicular component unchanged. When |a| = |b| = 1, R(x) = e−i 2 xei 2 , where ei 2 = a(a+b)
                                                                                          |a+b| ,
 −i θ2   = (a+b)a
e           |a+b| and θ is the angle between a and b. If a and b lie in the xy-plane, then i = e12




so that x is in the plane of a ∧ b, and x⊥ = x − x is the component of x
perpendicular to that plane, it follows that

                                 R(x) = R(x + x⊥) = R(x ) + x⊥.                                 (3.24)

Thus, the two-sided representation of the rotation leaves the perpendicular part of
the vector x to the plane of the rotation a ∧ b invariant. See Fig. 3.8.
   The rotation found in (3.22) can equally well be considered to be the composition
of the two reflections

                    La (x) = −axa−1 and La+b (x) = −(a + b)x(a + b)−1.

Using (3.23), we find that
                                              1           1
                            R(x) = (ba−1 ) 2 x(a−1b) 2 = La+b ◦ La (x).                         (3.25)



Exercises

Given the vectors a = (1, 2, 2), b = (1, 2, −2), and c = (2, 1, 2) in R3 . The reader
is strongly encouraged to check his hand calculations with Pertti Lounesto’s
CLICAL [54].
1. Calculate
     (a) a · b and a ∧ b
     (b) ab
     (c) (ab)c
     (d) a(bc)
     (e) a(b + c)
     (f) ab + ac.
2. (a) Find the magnitude |a ∧ b| of the bivector a ∧ b.
   (b) Graph the bivector a ∧ b.
3.4 Geometric Algebra of Rn                                                         57


   (c) Find √the Euler √
                       form of ac.
   (d) Find ab and ac.
3. (a) Find a reflection L(x) and a rotation R(x) which takes a into b.
   (b) Find a reflection L(x) and a rotation R(x) which takes b into c.
   (c) Find a reflection L(x) and a rotation R(x) which takes a into c.
4. Verify (3.24) for the rotation (3.22).
5. Verify (3.25) for the rotation (3.22).
6. Hamilton’s quaternions: In the geometric algebra G3 = G(R3 ), define

                                i = e23 , j = e31 , k = e21 .

   (a) Show that i2 = j2 = k2 = i jk = −1. These are the famous relationships that
       Hamilton carved into stone on the Bougham Bridge on 16 October 1843 in
       Dublin.
            http://en.wikipedia.org/wiki/Quaternion
  (b) Show that
                        i j = − ji = k, jk = −k j = i, ik = −ki = − j.

         We see that the quaternions {1, i, j, k} can be identified as the even subal-
         gebra of scalars and bivectors of the geometric algebra G3 . For a further
         discussion of these issues, see [55, p.68,190].



3.4 Geometric Algebra of Rn

Geometric algebra was introduced by William Kingdon Clifford in 1878 as a
generalization and unification of the ideas of Hermann Grassmann and William
Hamilton, who came before him [12–14]. Whereas Hamilton’s quaternions are
known and Grassmann algebras appear in the guise of differential forms and
antisymmetric tensors, the utility of Clifford’s geometric algebras is just beginning
to be widely appreciated [6, 20, 24, 41].
   http://en.wikipedia.org/wiki/Differential form
   Let
                           (e)(n) := (ei )ni=1 = e1 e2 . . . en                 (3.26)

be the standard orthonormal basis of the n-dimensional Euclidean space Rn . In
anticipation of our work with matrices whose elements are vectors, or even more
general geometric numbers, we are deliberately expressing the basis (3.26) as a row
matrix of the orthonormal basis vectors ei ∈ Rn for i = 1, . . . , n. We will have much
more to say about this later.
58                                                                    3 Geometric Algebra


     If the vectors a, b ∈ Rn are represented by column vectors of their components,
                          ⎛ ⎞                       ⎛ ⎞
                            a1                        b1
                          ⎜a 2 ⎟                    ⎜b 2 ⎟
                          ⎜ ⎟                       ⎜ ⎟
                          ⎜ ⎟                       ⎜ ⎟
                     a = ⎜ · ⎟ = ∑ ai ei and b = ⎜ · ⎟ = ∑ bi ei ,
                          ⎜ ⎟                       ⎜ ⎟
                          ⎝·⎠       i               ⎝·⎠       i

                            an                        bn

then their inner product is given by

                              a · b = |a||b| cos θ = ∑ ai bi
                                                        i

where θ is the angle between them.
  Just as we write the standard orthonormal basis of Rn as the row of vectors (e)(n) ,
we write the standard orthonormal reciprocal basis as the column of vectors:
                                           ⎛ ⎞
                                             e1
                                           ⎜ e2 ⎟
                                           ⎜ ⎟
                                           ⎜ ⎟
                                 (e)(n) := ⎜ · ⎟ .                            (3.27)
                                           ⎜ ⎟
                                           ⎝·⎠
                                             en

However, since we are dealing with an orthonormal basis, the reciprocal basis
vectors ei can be identified with the basis vectors ei , i.e., ei = ei for i = 1, . . . , n.
We can also represent a vector a ∈ Rn in the row vector form

                              a = a 1 a 2 · · · a n = ∑ a i ei .
                                                        i

More generally, given any basis (v)(n) of Rn , it is always possible to construct a
reciprocal basis (v)(n) , as will be discussed in Chap. 7.
   The associative geometric algebra Gn = G(Rn ) of the Euclidean space Rn is the
geometric extension of the real number system R to include n new anticommuting
square roots of unity, which we identify with the orthonormal basis vectors ei of Rn ,
and their geometric sums and products. Each vector a ∈ Rn has the property that

                                 a2 = aa = a · a = |a|2 ,                            (3.28)

where |a| is the Euclidean length or magnitude of the vector a.
   The fundamental geometric product ab of the vectors a, b ∈ Rn ⊂ Gn can be
decomposed into the symmetric inner product and the antisymmetric outer product

                  1           1
              ab = (ab + ba) + (ab − ba) = a · b + a ∧ b = |a||b|eiθ ,               (3.29)
                  2           2
3.4 Geometric Algebra of Rn                                                               59


where
                                   1
                            a · b = (ab + ba) = |a||b| cos θ
                                   2
is the inner product and

                                  1
                           a ∧ b = (ab − ba) = |a||b|i sin θ
                                  2
is the outer product of the vectors a and b. The outer product a ∧ b is given the
geometric interpretation of a directed plane segment or bivector and characterizes
the direction of the plane of the subspace of Rn spanned by the vectors a and b,
recall Fig. 3.2. The unit bivector i orients the plane of the vectors a and b, and, as
we have seen in Sect. 3.2, has the property that i2 = −1.
    The real 2n -dimensional geometric algebra Gn = G(Rn ) has the standard basis

                                   Gn = span{eλ(k) }nk=0 ,                             (3.30)
             
             n
where the       k-vector basis elements of the form eλ(k) are defined by
             k

                               eλ(k) = eλ1 ,...,λk = eλ1 · · · eλk

for each λ(k) = λ1 , . . . , λk where 1 ≤ λ1 < · · · < λk ≤ n. When k = 0, λ0 = 0 and
e0 = 1. Thus, as we have already seen in (3.11), the 23 -dimensional geometric
algebra of R3 has the standard basis

             G3 = span{eλ(k) }3k=0 = span{1, e1 , e2 , e3 , e12 , e13 , e23 , e123 }

over the real numbers R.
   In geometric algebra, deep geometrical relationships are expressed directly in
terms of the multivectors of the algebra without having to constantly refer to a basis.
On the other hand, the language gives geometric meaning to the powerful matrix
formalism that has developed over the last 150 years. As a real associative algebra,
each geometric algebra is isomorphic to a corresponding algebra or subalgebra of
real matrices, and we have advocated elsewhere the need for a uniform approach
to both of these structures [65, 86]. Matrices are invaluable for systematizing
calculations, but geometric algebra provides deep geometrical insight and powerful
algebraic tools for the efficient expression of geometrical properties. Clifford
algebras and their relationships to matrix algebra and the classical groups have been
thoroughly studied in [55, 64] and elsewhere and will be examined in many of the
succeeding chapters in this book.
   We denote the pseudoscalar of Rn by the special symbol I = e1...n . The
pseudoscalar gives a unique orientation to Rn and I −1 = en...1 . For an n-vector
An ∈ Gn , the determinant function is defined by An = det(An )I or det(An ) = An I −1 .
The determinant function will be studied in Chap. 5.
60                                                                 3 Geometric Algebra


   In dealing with geometric numbers, three different types of conjugation opera-
tions are important. Let A ∈ Gn be a geometric number. By the reverse A† of A,
we mean the geometric number obtained by reversing the order of all the geometric
products of vectors in A. For example, if A = 2e1 + 3e12 − 2e123 + e1234, then

        A† = 2e1 + 3e21 − 2e321 + e4321 = 2e1 − 3e12 + 2e123 + e1234.           (3.31)

By the grade inversion B− of a geometric number B ∈ Gn , we mean the geometric
number obtained by replacing each vector that occurs in B by the negative of that
vector. For the geometric number A given above, we find that

                         A− = −2e1 + 3e12 + 2e123 + e1234.                      (3.32)

The third conjugation, called the Clifford conjugation C = (C† )− of C ∈ Gn , is the
composition of the operations of reversal together with grade inversion. For the
geometric number A, we find that
  = (A† )− = (2e1 − 3e12 + 2e123 + e1234)− = −2e1 − 3e12 − 2e123 + e1234. (3.33)
 A

   For A, B,C ∈ Gn , the following properties are easily verified. For the operation
of reverse, we have

                    (A + B)† = A† + B† ,    and (AB)† = B† A† .                 (3.34)

For the grade involution, we have

                  (A + B)− = A− + B− ,      and (AB)− = A− B− .                 (3.35)

Clifford conjugation, like the conjugation of reverse, satisfies

                         
                        (A         + B,
                           + B) = A              = BA.
                                             and AB                            (3.36)

   In general, the geometric product of a vector a and a k-vector Bk for k ≥ 1 can
always be decomposed into the sum of an inner product and an outer product:

                                aBk = a · Bk + a ∧ Bk .                         (3.37)

The inner product a · Bk is the (k − 1)-vector

                             1
                    a · Bk := (aBk + (−1)k+1Bk a) = aBk k−1 ,                 (3.38)
                             2

and the outer product a ∧ Bk is the (k + 1)-vector

                            1
                   a ∧ Bk := (aBk − (−1)k+1Bk a) = aBk k+1 .                  (3.39)
                            2
3.4 Geometric Algebra of Rn                                                           61


More generally, if Ar and Bs are r- and s-vectors of Gn , where r > 0, s > 0, we
define Ar · Bs = Ar Bs |r−s| and Ar ∧ Bs = Ar Bs r+s . In the exceptional cases when
r = 0 or s = 0, we define Ar · Bs = 0 and Ar ∧ Bs = Ar Bs .
   In a similar way that we established the identity (3.18), we now show that for the
vectors a and b and the k-vector Ck , where k ≥ 1,

                        a · (b ∧ Ck ) = (a · b)Ck − b ∧ (a · Ck ).                (3.40)

Decomposing the left side of this equation, with the help of (3.38) and (3.39), gives

                           1
            a · (b ∧ Ck ) = [abCk + (−1)k aCk b + (−1)k bCk a + Ck ba].
                           4
Decomposing the right hand side of the equation, with the help of (3.38) and (3.39),
we get

                          1
(a · b)Ck − b ∧ (a · Ck) = [(a · b)Ck + Ck (a · b) − b(a · Ck) + (−1)k (a · Ck )b]
                          2
       1
    = [(ab + ba)Ck + Ck (ab + ba) − baCk + (−1)k bCk a + (−1)k aCk b − Ck ab].
       4
After cancellations, we see that the left and right sides of the equations are the same,
so the identity (3.40) is proved.
   In the equations above, three different products have been used, the geometric
product ab, the outer or wedge product a ∧ b, and the inner or dot product a · b, often
more than one such product in the same equation. In order to simplify the writing
of such equations and to eliminate the use of a host of parentheses, we establish a
convention regarding the order in which these operations are to be carried out. Outer,
inner, and then geometric products are to be carried out in that order in evaluating
any expression. For example, for the vectors a, b, c, d,

                       a · b ∧ c d = a · (b ∧ c)d = [a · (b ∧ c)]d.               (3.41)

   One very useful identity, which follows from (3.40), is

 a · (Ar ∧ Bs ) = (a · Ar ) ∧ Bs + (−1)r Ar ∧ (a · Bs ) = (−1)r+s+1 (Ar ∧ Bs ) · a (3.42)

and gives the distributive law for the inner product of a vector over the outer product
of an r- and an s-vector. In Chap. 5, we study the outer product a1 ∧ · · · ∧ ak of
k vectors ai ∈ Rn . This outer product can be directly expressed as the completely
antisymmetric geometric product of those vectors. We have

                                         1
                                         k! π∑
                     a1 ∧ · · · ∧ ak =          sgn(π )aπ (1) · · · aπ (k) ,      (3.43)
                                             ∈Π
62                                                                    3 Geometric Algebra


where π is a permutation on the indices (1, 2, . . . , k), and sgn(π ) = ±1 according to
whether π is an even or odd permutation, respectively.
   A simple k-vector or k-blade is any geometric number which can be expressed
as the outer product of k vectors. For example, the bivector e12 + e23 is a 2-blade
because e12 + e23 = (e1 − e3 ) ∧ e2 . On the other hand, the bivector e12 + e34 is not a
simple bivector. The magnitude of a k-vector Ak is defined by

                                   |Ak | =    |Ak · A†k |,                            (3.44)
                   k(k−1)                                                        k(k−1)
where A†k = (−1) 2 Ak . If Ak is a k-blade for k ≥ 1, then A−1  k = (−1)
                                                                            2
                                                                                Ak
                                                                               |Ak |2
                                                                                      .
   We have given here only a few of the most basic algebraic identities, others are
given in the exercises below. For further discussion of basic identities, we suggest
the references [1, 36, 43, 55]. In addition, the following links provide good online
references:
http://users.tkk.fi/ppuska/mirror/Lounesto/
http://geocalc.clas.asu.edu/
http://www.mrao.cam.ac.uk/∼clifford/pages/introduction.htm
http://www.science.uva.nl/ga/index.html
http://en.wikipedia.org/wiki/Geometric algebra



Exercises

 1. Let a, b, c, d ∈ Rn . Show that

                       abc = (b · c)a − (a · c)b + (a · b)c + a ∧ b ∧ c.

 2. Show that
                       a · (b ∧ c ∧ d) = (a · b)c ∧ d − b ∧ [a · (c ∧ d)].
 3. Show that

                 a · (b ∧ c ∧ d) = (a · b)c ∧ d − (a · c)b ∧ d + (a · d)b ∧ c.

 4. Show that
                       (a ∧ b)  (cd) = [(a ∧ b) · c]d + c[(a ∧ b) · d],

    where A  B = 12 (AB − BA) is the anti-symmetric part of the geometric product
    of A and B.
 5. Show that

                  (a ∧ b)  (c ∧ d) = [(a ∧ b) · c] ∧ d + c ∧ [(a ∧ b) · d].
3.5 Vector Derivative in Rn                                                                63


 6. Show that

         (a ∧ b)(c ∧ d) = (a ∧ b) · (c ∧ d) + (a ∧ b)  (c ∧ d) + (a ∧ b) ∧ (c ∧ d).

 7. Prove the identity (3.42) by using (3.40).
                                                      k(k−1)
 8. Show that if Ak ∈ Gkn , then A†k = (−1) 2 Ak . Also find a formula for A−      k
        k .
    and A
 9. Using (3.44), find the magnitudes of the bivectors e12 + 2e34 and e12 + 2e23.
                                           Ak
10. Let Ak be a k-blade, and define Âk = |A  | . Show that Âk = ±1. For what values
                                                              2
                                                  k
    of k is Â2k = 1, and for what values of k is Â2k = −1? We say that Âk is a unit
    k-vector.
11. Let F = Fk be a k-vector where k ≥ 1, x a vector, and B = Br an r-vector where
    r ≥ k. Prove the identity,

                          (B ∧ x) · F = B · (x · F) + (−1)k(B · F) ∧ x.

    This identity will be needed in Chap. 16 when studying Lie algebras.
12. Let Ak , Bk ∈ Gkn be k-vectors and a, b ∈ G1n be 1-vectors.
     (a) Show that
                              Ak · (Bk ∧ b) = (Ak · Bk )b − (b · Ak ) · Bk .
    (b) Show that

                     (a ∧ Ak ) · (Bk ∧ b) = (a · b)(Ak · Bk ) − (b · Ak )(Bk · a).

13. (a) Let A, B, C be bivectors. Show that

                A  (B  C) = (A · B)C − (A · C)B + (A ∧ B) · C − (A ∧ C) · B.

    (b) Show that A ◦ (B  C) = (A  B) ◦ C, where A ◦ B = 12 (AB + BA) is the
        symmetric part of the geometric product of A and B.




3.5 Vector Derivative in Rn

A powerful vector deriviative ∂x at a point x ∈ Rn can be easily defined in terms
of its basic properties. Given a direction a ∈ Rn at the point x, we first define the
a-derivative a · ∂x in the direction a. Let F : D −→ Gn be any continuous geometric
algebra-valued function defined at all points x ∈ D where D ⊂ Rn is an open
domain.1 Recall that an open r-ball around a point x0 ∈ Rn is defined by

1 An open domain is an open connected subset of Rn . The topological propererties of Rn are

rigorously defined and discussed in Michael Spivak’s book, “Calculus on Manifolds” [92].
64                                                                 3 Geometric Algebra


                         Br (x0 ) := {x ∈ Rn | |x − x0| < r}.

   We say that F(x) has an a-derivative Fa (x) = a · ∂x F(x) at the point x ∈ D
provided the limit
                                             F(x + ha) − F(x)
                           Fa (x) = lim                                         (3.45)
                                       h→0          h

exists, where h ∈ R. We say that F is C1 differentiable on the open domain D if
Fa (x) exists and is continuous for all directions a ∈ Rn and at all points x ∈ D. The
definition of the a-derivative is equivalent to the directional derivative on Rn , but
the range of the function F lies in the much larger geometric algebra Gn of Rn . In
Chap. 15, when we study the differential geometry of a vector manifold, we will
refine this definition.
    To complete the definition of the vector derivative ∂x F(x) of the geometric
algebra-valued function F(x), we require that the vector derivative ∂x has the
algebraic properties of a vector in Rn . This means that for the orthonormal basis
(e)(n) of Rn , we have
                                  n                  n
                                                           ∂
                           ∂x = ∑ ei (ei · ∂x ) = ∑ ei         ,                (3.46)
                                 i=1                i=1   ∂ xi

where ei · ∂x = ∂∂xi is the ordinary partial derivatives in the directions of the
coordinate axis at the point x = x1 x2 · · · xn ∈ Rn . The geometric function F(x)
is said to have order C p at the point x ∈ Rn for a positive integer p ∈ N, if all pth
order partial derivatives of F(x) exist and are continuous at the point x. If F(x)
has continuous partial derivatives of all orders, we say that F(x) is a C∞ function
[92, p.26].
    As our first example, consider the identity function f (x) = x for all x ∈ Rn .
We calculate

                              f (x + ha) − f (x)       x + ha − x
        fa (x) = a · ∂xx = lim                   = lim            =a            (3.47)
                          h→0         h            h→0     h

for all x ∈ Rn and all a ∈ G1 . It follows that the identity function is differentiable
on Rn . From (3.46) and (3.47), we calculate the vector derivative of the identity
function
                                  n                  n
                         ∂x x = ∑ ei (ei · ∂x x) = ∑ ei ei = n,                 (3.48)
                                 i=1                i=1

which gives the number of degrees of freedom at the point x ∈ Rn . It follows
immediately from (3.48) that

                             ∂x · x = n, and ∂x ∧ x = 0.                        (3.49)
3.5 Vector Derivative in Rn                                                          65


   From the basic identities (3.47) and (3.49), together with Leibniz product rule for
directional or partial deriviatives, other identities easily follow. For example, since
∂x ∧ x = 0, it follows that

                              0 = a · (∂x ∧ x) = a · ∂x x − ∂xx · a,

so that
                                        ∂x x · a = a · ∂x x = a.                 (3.50)
We also have
                               a · ∂x |x|2 = a · ∂x (x · x) = 2a · x,            (3.51)
                                ∂x x = ∂˙x ẋ · x + ∂˙ x x · ẋ = 2x,
                                    2
                                                                                 (3.52)
and consequently,

                                                  1
                            ∂x |x| = ∂x (x2 )1/2 = (x2 )−1/2 2x = x̂.            (3.53)
                                                  2
The dots over the arguments denote which argument is being differentiated.
   There is one further property of the vector derivative ∂x in Rn that needs to be
discussed, and that is the integrability condition

                               ∂ ∂                   ∂ ∂   ∂ ∂ 
          ∂x ∧ ∂x = ∑ ei j              = ∑ ∂ xi ∂ x j ∂ x j ∂ xi = 0,
                                              e i j       −                      (3.54)
                     i, j     ∂ xi ∂ x j i< j


since partial derivatives commute for differentiable functions. This property for the
vector derivative in Rn depends heavily upon the fact that in a flat space a constant
orthonormal basis, in this case the standard orthonormal basis (e)(n) , can be chosen
                                                             ∂e
at all points x ∈ Rn , thus making the derivatives ∂ x jj = 0 for all 1 ≤ i, j ≤ n. When
we discuss the vector derivative on a curved space, say, a cylinder or a sphere, this
property is no longer true as we will later see.
   The above differentiation formulas will be used in the study of the structure
of a linear operator on Rn . In Chap. 13, and in later chapters, we generalize the
concept of both the a-derivative and the vector derivative in Rn to the concept
of the corresponding derivatives on a k-dimensional surface in Rn or in an even
more general pseudo-Euclidean space R p,q . Because the a-derivative and the vector
derivative are defined ultimately in terms of partial derivatives, the usual rules of
differentiation remain valid. However, care must be taken when applying these rules
since we no longer have universal commutativity in the geometric algebra Gn . Other
differentiation formulas, which follow easily from the basic formulas above, are
given as exercises below. All of these formulas remain valid when we generalize to
the vector derivative for a curved surface, except formulas using the property (3.54)
which only apply in flat spaces.
66                                                                                3 Geometric Algebra


Exercises

Calculate or verify the following vector derivatives:
 1. ∂x |x|k = k|x|k−2 x,
 2. a · ∂x |x|k = k|x|k−2 a · x,
 3. ∂x |x|x k = n−k
                |x|k
                     ,
 4. a · ∂x |x|x k = a−k(a·x̂)x̂
                      |x|k
                                ,
 5. ∂x log |x| = |x|x 2 = x−1 .
 6. a · ∂x log |x| = |x|
                       a·x
                         2.

 7. a · ∂x x̂ = (a∧x̂)x̂
                  |x| .
 8. a · ∂x sin x = a · ∂xx̂ sin |x| = (a∧x̂)x̂
                                        |x| sin |x| + (a · x̂)x̂ cos |x|.
                                             (a∧x̂)x̂
 9. a · ∂x sinh x = a · ∂x x̂ sinh |x| =       |x| sinh |x| + (a · x̂)x̂ cosh |x|.
10. ∂x sin x = n−1
                |x| sin |x| + cos|x|.
11. ∂x sinh x = n−1
                 |x| sinh |x| + cosh|x|.
12. a · ∂x exp x = (a · x̂)x̂ex + (a∧x̂)x̂
                                    |x| sinh |x|.
                                        n−1 −x
13. ∂x exp x = ex + n−1
                     |x| sinh |x| = (1 + |x| e sinh |x|)e .
                                                         x

14. a · ∂x (x ∧ b)2 = 2(a ∧ b) · (x ∧ b).
15. ∂x (x ∧ b)2 .
16. a · ∂x |x ∧ b| = − (a∧b)·(x∧b)
                          |x∧b|    .
17. ∂x |x ∧ b|.
                                     
18. a · ∂x |x∧b|
            x∧b
                 = a∧b+(a∧b)·(
                         |x∧b|
                               x∧b)x∧b
                                       .
19. ∂x |x∧b|
        x∧b
             .
20. a · ∂x exp(x ∧ b).
21. ∂x exp(x ∧ b).
22. Using the property (3.54), show that the vector derivative in Rn satisfies the
    property
                         (a ∧ b) · (∂x ∧ ∂x ) = [b · ∂x , a · ∂x ] − [b, a] · ∂x = 0,

     where the brackets are defined by

                               [b · ∂x , a · ∂x ] = b · ∂x a · ∂x − a · ∂x b · ∂x ,            (3.55)

     and
                                         [b, a] = b · ∂x a − a · ∂xb,                          (3.56)

     and where a = a(x) and b = b(x) are any differentiable vector-valued functions
     at the point x ∈ Rn .
Chapter 4
Vector Spaces and Matrices




                              Pure mathematics is, in its way, the poetry of logical ideas.
                                                                               –Albert Einstein



We begin this chapter with the formal definition of a vector space. Multiplication
of matrices is defined in terms of the product of a row vector and a column vector.
Since the rules of matrix algebra over the real and complex numbers are identical
to the rules of the addition and multiplication of geometric numbers, it makes
sense to consider matrices whose entries are geometric numbers alongside the
more traditional matrices of real and complex numbers. Whereas geometric algebra
provides geometric insight into what otherwise is just a table of numbers with an
unintuitive rule of multiplication, the use of matrices augments the computational
power of geometric algebra. The geometric algebras of the plane and 3-dimensional
space can be represented by square 2 × 2 matrices of real or complex numbers,
respectively.



4.1 Definitions

In studying modular number systems Zh and modular polynomial number systems
K[x]h(x) , we have met with the concept of a basis and the fact that elements
in either Zh or K[x]h are linear combinations of the respective basis elements.
We now formalize these properties in the definition of a vector space over a field K.
As before, we are mainly interested in the cases when the scalar field K is either the
real numbers R or complex numbers C.
Definition 4.1.1. By a vector space over a field K, we mean a set of elements V
on which is defined the two binary operations of addition and scalar multiplication.




G. Sobczyk, New Foundations in Mathematics: The Geometric                                   67
Concept of Number, DOI 10.1007/978-0-8176-8385-6 4,
© Springer Science+Business Media New York 2013
68                                                         4 Vector Spaces and Matrices


More precisely, let w, x, y ∈ V and α , β , γ ∈ K. Then the following properties are
satisfied:
1. (a) x + y ∈ V. Addition of vectors is a vector.
   (b) There exists a zero vector with the property that x + 0 = x for all vectors
       x ∈ V. (Note: We use the same symbol for the zero vector and the zero scalar.)
   (c) x + y = y + x. Commutative law of addition of vectors.
   (d) w + (x + y) = (w + x) + y. Associative law of addition of vectors.
   (e) For every x ∈ V, there exists a unique −x ∈ V such that x + (−x) = 0.
       Additive inverse.
2. (a) α x = xα ∈ V. Multiplication of a vector by a scalar.
   (b) (αβ )x = α (β x). Associative law of scalar multiplication.
3. α (x + y) = α x + α y and (α + β )x = α x + β x. Distributive properties.
   It is often expedient to replace the concept of a vector space over a field by the
more general concept of a module over a ring. For example, we will often consider
matrices whose elements are geometric numbers. The addition and multiplication
of matrices are fully compatible with the addition and multiplication of geometric
numbers.


Examples

1. The set of all polynomials R[x] over the real numbers R satisfies Definition 4.1.1
   and is therefore a vector space, as is the set of polynomials C[z] over the complex
   numbers C. We can also consider the set of polynomials over the geometric
   numbers G3 , which make up a module.
2. The set of all polynomials Z[x] over the intergers Z is not a vector space because
   the integers Z do not form a field.
3. The set of all polynomials Q[x] over the rational numbers Q is a vector space.
   Because the polynomials in Q[x] can also be multiplied together, we say that
   Q[x] has the structure of a ring.
4. The set of all polynomials Z p [x] over the finite field Z p for a prime number p ∈ N
   makes up a vector space under the addition of polynomials. Because polynomials
   in Z p [x] can be multiplied as well as added, Z p [x] is also a ring.
5. Let Rn denote the set of all column n-tuples of the form
                                    ⎛ ⎞
                                      x1
                                    ⎜ x2 ⎟
                                    ⎜ ⎟
                                    ⎜ ⎟
                     Rn = {x| x = ⎜ · ⎟ , where x1 , x2 , . . . , xn ∈ R}.
                                    ⎜ ⎟
                                    ⎝·⎠
                                      xn

     With the usual addition of components and multiplication by scalars, Rn is called
     the n-dimensional vector space of real column vectors.
4.1 Definitions                                                                            69


6. Let Rn denote the set of all row n-tuples of the form
                              
                  Rn = {x| x = x1 x2 . . . xn , where x1 , x2 , . . . , xn ∈ R}.

       With the usual addition of components and multiplication by scalars, Rn is
   called the n-dimensional vector space of real row vectors. No distinction is made
   between row and column vectors with respect to the standard orthonormal basis
   {ei }ni=1 of Rn . However, the distinction between a row vector and a column vector
   becomes important in the definition of matrix multiplication. The identification
   of both row and column n-tuples as names for points in the n-dimensional
   coordinate plane is very common, as is the geometric interpretation of addition
   and scalar multiplication of vectors in Rn in terms of directed line segments.
       There are many, many other important examples of finite and infinite dimen-
   sional vector spaces, which are exactly the reason for defining them in the first
   place! There is one more important example which we will give here:
7. Let MK (m, n) denote the set of all (m, n)-dimensional matrices of the form
                                        ⎛                  ⎞
                                         a11 a12 . . . a1n
                                       ⎜a a . . . a ⎟
                                       ⎜ 21 22          2n ⎟
                                       ⎜                   ⎟
                                   A = ⎜ · · ... · ⎟
                                       ⎜                   ⎟
                                       ⎝ · · ... · ⎠
                                        am1 am2 . . . amn

   where the scalars ai j ∈ K for all i = 1, . . . , m and j = 1, . . . , n. The set MK (m, n)
   of all matrices makes up a vector space where addition is component-wise and
   scalar multiplication is as usual. By allowing the entries in the matrices to be
   geometric numbers, say in G3 , the matrices MG3 (m, n) become a module over the
   geometric algebra G3 . Left and right scalar multiplication by geometric numbers
   is well defined but no longer universally commutative.



Exercises

1. Show that 6 of the 7 examples given above are vector spaces.
2. Give vector diagrams to represent the addition and scalar multiplication of
   vectors in the plane. Represent each of the properties of a vector space in
   Definition 1, in terms of a corresponding vector diagram.
                   1 e2         1 e2
3. Show that e1            =          e1 , where e1 , e2 , e12 ∈ G2 .
                   e1 e12       e1 e12
70                                                           4 Vector Spaces and Matrices


4.2 Matrix Algebra

The reader may be wondering why, in the definition of a vector space, the
multiplication of vectors with themselves is not defined as it was in the definition
of geometric algebra in the last chapter. This restriction is removed when we use,
instead, the structure of a module and allow matrices to be multiplied by the
elements of a geometric algebra instead of just by elements of a field.
   Whereas in Chap. 3, we constructed the geometric algebra Gn (Rn ) of the
Euclidean space Rn by taking the geometric sums and geometric products of all
vectors in Rn , in this chapter, we define the quite different algebra of matrices
which we construct from the row and column vectors of Rn . Whereas the addition
and multiplication of matrices satisfy the same algebraic rules as the addition and
multiplication of geometric numbers, care must be taken to distinguish between
these two different algebras. Although the algebra of matrices and the algebra
of geometric numbers are very different objects, they are completely compatible
structures. For this reason, it makes sense to consider matrices whose elements
are geometric numbers and to multiply them by geometric numbers. We shall have
much to say about matrix algebras of geometric numbers, and we will show how
they provide us with powerful new tools.
   The basic building blocks of a matrix algebra are rows and columns of elements
of a field or more generally of a geometric algebra. We have already considered
the row and column vectors of the Euclidean space Rn , given in Examples 5 and 6
above.
   For an m-row matrix of vectors from a geometric algebra G, we write
                                       
                               (a)(m) = a1 a2 . . . am ,                            (4.1)

where each ai ∈ G for i = 1, . . . , m. The transpose (a)T(m) of the row of vectors (a)(m)
gives the m-column
                                               ⎛ ⎞
                                                 a1
                                               ⎜a ⎟
                                               ⎜ 2⎟
                                               ⎜ ⎟
                                               ⎜ ·⎟
                                      (a)(m) = ⎜ ⎟
                                         T
                                                                                     (4.2)
                                               ⎜ ·⎟
                                               ⎜ ⎟
                                               ⎝ ·⎠
                                                 am

of these same vectors.
   Consider now the (m, n)-matrix A ∈ MK (m, n), given in Example 7. The matrix A
can be expressed in terms of either the column vectors or row vectors of Km or Kn ,
respectively, given in Examples 5 and 6. When considering row or column vectors
of Km or Kn where matrix multiplication applies, we must be careful to distinguish
them from the vectors from a geometric algebra G where geometric multiplication
applies.
4.2 Matrix Algebra                                                                          71


   We write
                                           
                               A = (a)(n) ≡ a1 a2 . . . an

when we think about A as consisiting of the n column vectors,
                                             ⎛    ⎞
                                             a1 j
                                            ⎜a ⎟
                                            ⎜ 2j⎟
                                            ⎜ ⎟
                                       aj ≡ ⎜ · ⎟,
                                            ⎜ ⎟
                                            ⎝ · ⎠
                                             am j

where ai j ∈ K for all i = 1, . . . , m and j = 1, 2, . . . , n. But, we may equally well think
about the matrix A as consisting of m row vectors,
                                                  ⎛  ⎞
                                                  a1
                                                ⎜ a2 ⎟
                                                ⎜ ⎟
                                                ⎜ ⎟
                                   A = (a)(m) ≡ ⎜ · ⎟ ,
                                                ⎜ ⎟
                                                ⎝ ·⎠
                                                 am

where the row vectors ai , for i = 1, . . . , m are defined by
                                       
                                   ai ≡ ai1 ai2 . . . ain .

The use of lower and upper indicies is an artifice often used to distinguish between
column and row vectors, respectively.
   We also write the matrix A in the form
                                         ⎛                ⎞
                                            a11 · · · a1n
                                         ⎜ · ··· · ⎟
                                         ⎜                ⎟
                                         ⎜                ⎟
                          A = (a)(m,n) = ⎜ · · · · · ⎟                          (4.3)
                                         ⎜                ⎟
                                         ⎝ · ··· · ⎠
                                           am1 · · · amn

where the scalars ai j ∈ K for 1 ≤ i ≤ m and 1 ≤ j ≤ n. The transpose AT of the
matrix A is obtained by interchanging the rows and columns of the matrix A,
                                              ⎛           ⎞
                                            a11 · · · am1
                                          ⎜ · ··· · ⎟
                                          ⎜               ⎟
                                          ⎜               ⎟
                             A = (a)m,n = ⎜ · · · · · ⎟ .
                              T     T
                                                                                         (4.4)
                                          ⎜               ⎟
                                          ⎝ · ··· · ⎠
                                            a1n · · · amn
72                                                         4 Vector Spaces and Matrices


     For example, the (3, 2)-matrix
                                            ⎛  ⎞
                                           12
                                      A = ⎝3 4 ⎠
                                           56

can be considered to consist of the column vectors
                                           ⎛ ⎞          ⎛ ⎞
                                           1            2
                   (a)(2) = a1 a2 for a1 = ⎝3⎠ and a2 = ⎝4⎠
                                            5            6

or of the row vectors
                                            ⎛ 1⎞
                                             a
                                   (a)(3) = ⎝a2 ⎠ for
                                         a3
                                                  
                      a1 = 1 2 , a2 = 3 4 , and a3 = 5 6 .

The transpose of the matrix A is

                                135       T  aT
                         AT =       = a1 a2 = 1T .
                                246           a2

  Any (m, n)-matrix (4.3) can be multiplied by a scalar α ∈ K simply by
multiplying all its components by the scalar α ,
                                        ⎛                  ⎞
                                         α a11 · · · α a1n
                                       ⎜ · ··· · ⎟
                                       ⎜                   ⎟
                                       ⎜                   ⎟
                    α A = (α a)(m,n) = ⎜ · · · · · ⎟ = Aα .
                                       ⎜                   ⎟
                                       ⎝ · ··· · ⎠
                                         α am1 · · · α amn

The addition A + B of two (m, n)-matrices A = (ai j ) and B = (bi j ) is defined by
        ⎛               ⎞ ⎛               ⎞ ⎛                           ⎞
          a11 · · · a1n     b11 · · · b1n     a11 + b11 · · · a1n + b1n
        ⎜ · ··· · ⎟ ⎜ · ··· · ⎟ ⎜                 ·     ···       ·     ⎟
        ⎜               ⎟ ⎜               ⎟ ⎜                           ⎟
        ⎜               ⎟ ⎜               ⎟ ⎜                           ⎟
        ⎜ · ··· · ⎟+ ⎜ · ··· · ⎟ = ⎜              ·     ···       ·     ⎟.        (4.5)
        ⎜               ⎟ ⎜               ⎟ ⎜                           ⎟
        ⎝ · ··· · ⎠ ⎝ · ··· · ⎠ ⎝                 ·     ···       ·     ⎠
          am1 · · · amn    bm1 · · · bmn      am1 + bm1 · · · amn + bmn

The definition of matrix multiplication is given in the next section.
4.3 Matrix Multiplication                                                         73


Exercises
                                      
1. Let (a)(3) = e1 2e2 e12 and (b)(3) = e2 2e12 e1 be row matrices over the
   geometric algebra G2 . Calculate:
   (a) 2(a)(3) − 3(b)(3).
   (b) e1 (a)(3) − e12(b)(3) .

              1 2 3          −1 3 −2
2. Let A =           and B =         . Calculate:
              2 −4 0         1 −5 2
   (a) A − 3B.
   (b) Show that AT − 3BT = (A − 3B)T.
                     1 e2         1 e2
3. Show that e123            =           e123 over the geometric algebra G3 .
                    e1 e12       e1 e12
                   1             e 1
4. Show that e1          1 e1 = 1        over the geometric algebra G1 .
                  e1               1 e1
                                        1                 11
5. Let u+ = 12 (1 + e2 ). Show that u+        1 e2 = u +         over the geometric
                                        e2                 11
   algebra G2 .



4.3 Matrix Multiplication

Matrix multiplication can be most easily defined in terms of the multiplication
of row and column vectors. The multiplication of the  ⎛ row  ⎞ vector of real numbers
                                                        b1
                                                      ⎜ b2 ⎟
                                                     ⎜ ⎟
                                                      ⎜ ⎟
 a1 a2 . . . am by the column vector of real numbers ⎜ · ⎟ is defined to be the real
                                                      ⎜ ⎟
                                                      ⎝ ·⎠
                                                        bm
number
                                 ⎛ ⎞
                                   b1
                                 ⎜ b2 ⎟
                                ⎜ ⎟
                                 ⎜ ⎟
                  a1 a2 . . . am ⎜ · ⎟ ≡ a1 b1 + a2 b2 + · · · + am bm .
                                 ⎜ ⎟
                                 ⎝ · ⎠
                                  bm

Note that the matrix multiplication of a row vector times a column vector is only
defined when they each have the same number m of components.
74                                                         4 Vector Spaces and Matrices

                                                                               ⎛ ⎞
                                                                              b1
                                                                            ⎜ b2 ⎟
                                                                            ⎜ ⎟
                                                                            ⎜ ⎟
   On the other hand, the matrix product of a column vector of real numbers ⎜ · ⎟
                                                                            ⎜ ⎟
                                                                            ⎝ · ⎠
                                                                             bm
                   
with the row vector a1 a2 . . . an of real numbers is the (m, n)-matrix
                 ⎛    ⎞                 ⎛                         ⎞
                   b1                     b1 a1 b1 a2 . . . b1 an
                 ⎜ b2 ⎟                 ⎜ b2 a b2 a . . . b2 a ⎟
                 ⎜ ⎟                   ⎜     1     2           n⎟
                 ⎜ ⎟                    ⎜                         ⎟
                 ⎜ · ⎟ a1 a2 . . . an ≡ ⎜ ·       · ... · ⎟.
                 ⎜ ⎟                    ⎜                         ⎟
                 ⎝ ·⎠                   ⎝ ·       · ... · ⎠
                  bm                      bm a1 bm a2 . . . bm an

   In terms of the previous definitions of the product of row and column vectors, we
can now easily define the general product of a real (m, n)-matrix
                                ⎛ ⎞ ⎛                       ⎞
                                   a1         a11 · · · a1n
                                ⎜ a2 ⎟ ⎜ · · · · · ⎟
                                ⎜ ⎟ ⎜                       ⎟
                                ⎜ ⎟ ⎜                       ⎟
                           A = ⎜ · ⎟ = ⎜ · ··· · ⎟
                                ⎜ ⎟ ⎜                       ⎟
                                ⎝ · ⎠ ⎝ · ··· · ⎠
                                  am         am1 · · · amn

with a real (n, s)-matrix
                                               ⎛              ⎞
                                                b11 · · · b1s
                                               ⎜ · ··· · ⎟
                                              ⎜              ⎟
                                               ⎜              ⎟
                        B = b1 b2 . . . bs   = ⎜ · ··· · ⎟
                                               ⎜              ⎟
                                               ⎝ · ··· · ⎠
                                                bn1 · · · ans

to be the real (m, s)-matrix C given by
                                 ⎛                         ⎞
                                   a1 b1 a1 b2 . . . a1 bs
                                 ⎜ a2 b a2 b . . . a2 b ⎟
                                 ⎜     1     2           s⎟
                                 ⎜                         ⎟
                            C=⎜ ·          · ... · ⎟.
                                 ⎜                         ⎟
                                 ⎝ ·       · ... · ⎠
                                   am b1 am b2 . . . am bs

Note that multiplying a row of real column vectors times a column of real row
vectors is a generalization of the definition of a real row vector times a real column
vector. We must warn the reader that here we are not employing the geometric
product of vectors. We give simple examples below in order to minimize possible
confusion.
4.4 Examples of Matrix Multiplication                                                         75


4.4 Examples of Matrix Multiplication
                              ⎛ ⎞
                              2
1. For a = 1 2 3 ∈ R3 and b = ⎝5⎠ ∈ R3 ,
                               6
                              ⎛ ⎞
                              2
                   ab = 1 2 3 ⎝5⎠ = 1 · 2 + 2 · 5 + 3 · 6 = 30 ∈ R.
                               6

   We are not using the geometric product here since we are considering a and b to
   be strictly a real row vector and a real column vector, respectively.
             ⎛ ⎞
               2            
2. For b = ⎝5⎠ and a = 1 3 , we get
               6
                           ⎛ ⎞       ⎛           ⎞ ⎛      ⎞
                            2         2·1 2·3        2 6
                      ba = ⎝5⎠ 1 3 = ⎝5 · 1 5 · 3⎠ = ⎝5 15⎠ .
                            6          6·1 6·3        6 18

   We are not using the geometric product.
                             ⎛      ⎞
                               2 −2
             123
3. For A =           and B = ⎝2 0 ⎠, we have
             456
                               1 −1
                                   ⎛     ⎞
                                     2 −2
                               123 ⎝        9 −5
                          AB =       2 0 ⎠=
                               456          24 −14
                                     1 −1

   and
                            ⎛    ⎞       ⎛        ⎞
                             2 −2         −6 −6 −6
                                   123
                       BA = ⎝2 0 ⎠     = ⎝ 2 4 6 ⎠.
                                   456
                             1 −1         −3 −3 −3

   No geometric product is used.
                                       ⎛ ⎞
                                       e1
4. For (e)(3) = e1 e2 e3 and (e)T(3) = ⎝e2 ⎠ over G3 , we calculate:
                                        e3
   (a)

                                                                3           3
           (e)(3) (e)T(3) = (e)(3) · (e)T(3) + (e)(3) ∧ (e)T(3) = ∑ ei · ei + ∑ ei ∧ ei = 3
                                                               i=1         i=1
76                                                                     4 Vector Spaces and Matrices


     (b)

           (e)T(3) (e)(3) = (e)T(3) · (e)(3) + (e)T(3) ∧ (e)(3)
                            ⎛                          ⎞ ⎛                             ⎞ ⎛            ⎞
                              e1 · e1 e1 · e2 e1 · e3          e1 ∧ e1 e1 ∧ e2 e1 ∧ e3      1 e12 e13
                            ⎜                          ⎟ ⎜                             ⎟ ⎜            ⎟
                          = ⎝e2 · e1 e2 · e2 e2 · e3 ⎠ + ⎝e2 ∧ e1 e2 ∧ e2 e2 ∧ e3 ⎠ = ⎝e21 1 e23 ⎠ .
                              e3 · e1 e3 · e2 e3 · e3          e3 ∧ e1 e3 ∧ e2 e3 ∧ e3     e31 e32 1

           Here, both the geometric product and matrix product are being used.



Exercises

 1. Compute AB and BA for
                                                        ⎞        ⎛
                                                    2 −1
                                   1 −2 −1
                                A=         and B = ⎝2 1 ⎠ .
                                   4 2 −1
                                                    1 −1

 2. Show that the associative law A(BC) = (AB)C is valid for matrix multiplication
    for
                                  1 2      2 −2           01
                         A=           , B=      , and C =    .
                                 −3 2      1 2            02

 3. Show that the system of linear equations

                                          x1 + 2x2 + 3x3 = 3
                                          4x1 + 5x2 + 6x3 = 4

      can be expressed in the matrix form AX = B for the matrices
                                        ⎛ ⎞
                                          x1
                               123                      3
                            A=     , X = x2 ⎠ , and B =
                                        ⎝                 .
                               456                      4
                                          x3
                                      ⎛
                                      ⎞
                                 123
 4. Show that the matrix P = ⎝0 0 0⎠ has the property that P2 = P. Such a matrix
                                 000
    is called an idempotent or a projection.
4.4 Examples of Matrix Multiplication                                           77

                               ⎛        ⎞
                                 0123
                               ⎜0 0 0 0⎟
 5. Show that the matrix Q = ⎜          ⎟
                               ⎝0 0 0 4⎠ has the property that Q = 0, but Q = 0.
                                                                   3           2


                                 0000
    Such a matrix is called a nilpotent with the index of nilpotency of m = 3.
             ⎛       ⎞            ⎛           ⎞
               111                  0 −1 −1
 6. Let P1 = ⎝0 0 0⎠ and P2 = ⎝0 1 0 ⎠ .
               000                  0 0 1
    (a) Calculate A = 2P1 + 3P2.
    (b) Show that A2 = 4P1 + 9P2.
    (c) Show that P12 = P1 , P22 = P2 and P1 P2 = P2 P1 = 0. The matrices P1 and P2
        are called mutually annihilating idempotents.
 7. Express the system of linear equations
                                    ⎛                ⎞
                                     2x − 5y + z = 5
                                    ⎝ x + 2y − z = 3 ⎠
                                     4x − y − z = 11

    as a matrix equation in the form AX = B.
             ⎛      ⎞                        ⎛        ⎞
                120                            2 −4 2
 8. Let A = ⎝0 1 1⎠. The matrix A−1 = 1 ⎝ 1 2 −1⎠ is called the inverse
                                             4
                 102                             −1 2    1
                                                             ⎛      ⎞
                                                               100
    of A because it satisfies AA−1 = I = A−1 A where I = ⎝0 1 0⎠ is the identity
                                                               001
    matrix. Verify this relationship.
                                                                           ⎛     ⎞
                                                                             100
 9. Show that if A ∈ MR (3) is any (3, 3)-matrix, then IA = A = AI for I = ⎝0 1 0⎠.
                                                                             001
10. Let
                                   ⎛ √        √      √      √ ⎞
                                        √7 − 3√ 3     √7 + 3 √3
                               1
                      D= √ ⎝                                    ⎠.
                            2 21        √3 − 7√ −√ 3 − √7
                                      −2 3 − 2 7 2 3 − 2 7

    Using the computer software package MATHEMATICA, MATLAB, or
    MAPLE, show that

                                        10
                             DT D =          and DDT = P
                                        01

    where P2 = P.
78                                                                4 Vector Spaces and Matrices

                    
11. Let (a)(2) = a1 a2 where a1 = 2e1 + 3e2 − e3 and a2 = −e1 + e2 + e3 are
                                                                   
    vectors of R3 considered as vectors in G3 . Let (e)(3) = e1 e2 e3 be the
    standard basis of R3 considered as vectors in G3 . Show that:
                           ⎛ ⎞             ⎛                   ⎞ ⎛      ⎞
                            e1              e1 · a 1 e1 · a 2      2 −1
    (a) (e)T(3) · (a)(2) = ⎝e2 ⎠ · a1 a2 = ⎝e2 · a1 e2 · a2 ⎠ = ⎝ 3 1 ⎠
                            e3               e3 · a 1 e3 · a 2     −1 1
                            a                  2 3 −1
    (b) (a)T(2) · (e)(3) = 1 · e1 e2 e3 =
                            a2                 −1 1 1
        so
                                                  T
                               (e)T(3) · (a)(2)       = (a)T(2) · (e)(3) .

     (c) Show that
                                     ⎛ ⎞               ⎛                   ⎞
                                      e1                e1 ∧ a 1 e1 ∧ a 2
                  (e)T(3) ∧ (a)(2) = ⎝e2 ⎠ ∧ a1 a2 = ⎝e2 ∧ a1 e2 ∧ a2 ⎠
                                      e3                 e3 ∧ a 1 e3 ∧ a 2
                                     ⎛                       ⎞
                                       3e12 − e13 e12 + e13
                                   = ⎝ 2e12 − e23 −e12 + e23 ⎠
                                      2e31 + 3e32 −e31 + e32
        and
                                       a1  
                  (a)T(2) ∧ (e)(3) =      ∧ e1 e2 e3
                                       a2
                                       3e21 − e31 2e12 − e32 2e13 + 3e23
                                 =                                       ,
                                        e21 + e31 −e12 + e32 −e13 + e23
        so
                                                  T
                              (e)T(3) ∧ (a)(2)        = −(a)T(2) · (e)(3) .



4.5 Rules of Matrix Algebra

Let A, B,C ∈ MR (n) where MR (n) denotes the set of all (n, n)-matrices over the real
numbers R. Addition and multiplication of matrices satisfy the rules:
1. A + B and AB are in MR (n). (Closure of addition and multiplication.)
2. (a) (A + B) + C = A + (B + C). (Associative law of addition.)
   (b) (AB)C = A(BC). (Associative law of multiplication.)
3. A + B = B + A. (Commutative law of addition.)
   Note that in general, the multiplication of matrices is not commutative.
4. (a) α (A + B) = α A + α B. (Distributive law of scalar multiplication over matrix
       addition.)
4.6 The Matrices of G2 and G3                                                     79


  (b) α A = Aα . (Scalars commute with matrices.)
  (c) α (AB) = A(α B).
  (d) A(B + C) = AB + AC. (Distributive law of matrix multiplication over addi-
      tion.)
   The addition and multiplication of matrices satisfy the same rules as the addition
and multiplication of real numbers, with the exception of the commutative law of
multiplication and the existence of zero divisors in MR (n). The matrices MG (n)
over the geometric algebra G make up a module and obey the same rules as the
matrix algebra MR (n), except that the rules 4(b) and 4(c) for scalar multiplication
by elements of G no longer remain universally valid.



4.6 The Matrices of G2 and G3

Recall (3.10) that the most general geometric number g ∈ G2 has the form

                         g = (α1 + α2 e12 ) + (v1e1 + v2e2 ),                   (4.6)

where αi , vi ∈ R for i = 1, 2, in the standard basis {1, e1 , e2 , e12 } of G2 . The
geometric algebra G2 obeys all the algebraic rules of the real numbers R, except
that G2 has zero divisors and is not universally commutative.
   The algebraic rules satified by elements of G2 are identical to the rules of
matrix algebra and are therefore completely compatible with them [71]. Indeed, the
elements of the geometric algebra G2 provide a natural geometric basis for matrices.
By the spectral basis of G2 , we mean

                 1             u + u + e1                u + e1 u −
                    u + 1 e1 =                      =                ,          (4.7)
                 e1            e1 u + e1 u + e1          e1 u + u −

where u± = 12 (1 ± e2 ) are mutually annihilating idempotents. The spectral basis
of G2 has the same number of elements as the standard basis (3.9) but different
algebraic properties. The position of the spectral basis elements in (4.7) determines
the matrix which represents that element. For example, if

                                           ab
                                   [g] =      ,
                                           cd

for a, b, c, d ∈ R, then the corresponding element g ∈ G2 is specified by

                                1
               g = 1 e1 u+ [g]        = au+ + be1 u− + ce1u+ + du−              (4.8)
                                 e1

as is demonstrated below.
80                                                              4 Vector Spaces and Matrices


     Noting that e1 u+ = u− e1 and e21 = 1, it follows that

                               1
                     1 e1 u +        = u+ + e1u+ e1 = u+ + u− = 1.
                                e1

Then for g ∈ G2 , given by (4.6), we find that
                                          1            1
                        g = 1 e1 u +          g 1 e1 u +
                                           e1            e1
                                           g ge1         1
                          = 1 e1 u +                   u+
                                           e1 g e1 ge1    e1
                                    α1 + v2 v1 − α2            1
                          = 1 e1 u +                               .
                                     v1 + α2 α1 − v2            e1

The last equality in the steps above follows by noting that

            u+ gu+ = u+ (α1 + α2 e12 ) + (v1 e1 + v2 e2 ) u+ = u+ (α1 + v2),

          u+ ge1 u+ = u+ (α1 + α2 e12 ) + (v1 e1 + v2 e2 ) e1 u+ = u+ (v1 − α2 ),

          u+ e1 gu+ = u+ e1 (α1 + α2 e12 ) + (v1 e1 + v2 e2 ) u+ = u+ (v1 + α2 ),

and

       u+ e1 ge1 u+ = u+ e1 (α1 + α2 e12 ) + (v1 e1 + v2 e2 ) e1 u+ = u+ (α1 − v2 ).

The real matrix
                                           α1 + v2 v1 − α2
                                [g] :=                                                 (4.9)
                                           v1 + α2 α1 − v2

is called the matrix of g with respect to the spectral basis (4.7).
    By the inner automorphism or e1 -conjugate ge1 of g ∈ G2 with respect to the
unit vector e1 , we mean
                                         ge1 := e1 ge1 .                             (4.10)
Consider now the equation
                                                          1
                                 g = 1 e1 u+ [g]                                     (4.11)
                                                           e1

relating a geometric number g ∈ G2 to the corresponding real matrix [g] ∈ MR (2).
   We can explicitly solve (4.11) for the matrix [g] of g as follows: Multiplying each
                               1        
side on the left and right by      and 1 e1 , respectively, gives
                               e1
4.6 The Matrices of G2 and G3                                                           81


                        1          1 e1        1 e1
                           g 1 e1 =      u+ [g]      .
                        e1          e1 1        e1 1

Then, multiplying on the left and right sides of this equation by u+ , we get

                1                  1 e1        1 e1
          u+       g 1 e1 u + = u +      u+ [g]      u+ = u+ [g],
                e1                  e1 1        e1 1

and taking the e-conjugate of this equation gives

                                   1     
                            u−        ge1 1 e1 u− = u− [g].
                                   e1

Adding the last two expressions gives the desired result that

                                 g ge1              e ge e g
                  [g] = u+                  u+ + u− 1 1 1 u− .                       (4.12)
                                e1 g e1 ge1          ge1 g

   We now introduce the spectral basis for the geometric numbers G3 of the 3-
dimensional Euclidean space R3 . Recall that the standard basis of G3 , given in
(3.11), is
                G3 := spanR {1, e1 , e2 , e3 , e2 e3 , e3 e1 , e1 e2 , i = e123 }.
In the complexified standard basis (3.12), over the center Z(G3 ) of G3 ,

                              G3 = span{1, e1 , e2 , e3 }Z(G3 ) ,

an element has the form g = α + xe1 + ye2 + ze3 , where α , x, y, z ∈ Z(G3 ). Recall
that Z(G3 ) = span{1, i}, where i = e123 . Making the substitutions

                         α1 → α , v1 → x, v2 → y, α2 → −iz

in (4.9) or (4.12), we find that the matrix representing g ∈ G3 is

                                      α + y x + iz   ab
                            [g] =                  =                                 (4.13)
                                      x − iz α − y   cd

where a, b, c, d ∈ Z(G3 ). The spectral basis of G3 is is identical to the spectral
basis (4.7) of G2 , except that the spectral basis of G3 is over the center Z(G3 ) =
span{1, i}.
   Recall that the geometric algebra G3 has three involutions which are related to
complex conjugation. The main involution (3.32) is obtained by changing the sign
of all vectors,
                             g− := α − xe1 − ye2 − ze3 .                      (4.14)
82                                                             4 Vector Spaces and Matrices


Reversion (3.31) is obtained by reversing the order of the products of vectors,

                               g† := α + xe1 + ye2 + ze3 ,                            (4.15)

and Clifford conjugation (3.33) is obtained by combining the above two operations,

                           g := (g− )† = α − xe1 − ye2 − ze3 .                       (4.16)

  We can now calculate the corresponding operations on the matrix (4.13) of g.
We find

                                      α − y −x − iz   d −c
                   [g]− := [g− ] =                  =      ,
                                      −x + iz α + y   −b a
                                     α + y x + iz   ac
                   [g]† := [g† ] =                =    , and
                                     x − iz α − y   bd

                     := [          α − y −x − iz   d −b
                    [g]   g] =                     =      .
                                     −x + iz α + y   −c a

                                           g
       g = det[g], it follows that g−1 = det[g]
Since g                                        .
   The geometric algebra G3 is algebraically closed, with i = e123 ∈ Z(G3 ), and
enjoys the same algebraic rules as the complex number system C, except that G3 is
not universally commutative and has zero divisors.



Exercises

1. (a) Find the matrix [ek ] of the unit vectors ek for k = 1, 2, 3.
   (b) Show that the matrix [1] that represents the identity element g = 1 is the
                                  10
       identity matrix [1] =            .
                                  01
   (c) Show that [e1 ][e2 ][e3 ] = i[1].
   (d) More generally, show that [g1 + g2 ] = [g1 ] + [g2 ] and [g1 g2 ] = [g1 ][g2 ] for any
       elements g1 , g2 ∈ G3 .
2. Find the matrix [e1 + ie2 ] which represents the nilpotent e1 + ie2 .
3. Find the inverse (5 + 3e1)−1 of the element 5 + 3e1, and show that

                                [(5 + 3e1)−1 ] = [5 + 3e1]−1 .

4. Solve the characteristic equation (x − 5 − 3e1 )(x − 5 + 3e1 ) = 0 for the eigen-
   values x = x1 , x2 of the element 5 + 3e1 ∈ G3 . Show that trace[5 + 3e1] = x1 + x2
   and det[5 + 3e1] = x1 x2 .
4.6 The Matrices of G2 and G3                                                     83


5. More generally, let a = α + A ∈ G3 where α ∈ Z(G3 ) and A is a complex vector.
   The characteristic equation of the element a is

                             a − x) = (α − x + A)(α − x − A) = 0.
                     (a − x)(



  (a) Show that
             √the eigenvalues of a (solutions of the characteristic equations) are
      x = α ± A2 .
  (b) Show that trace[a] = x1 + x2 and det[a] = x1 x2 .
6. (a) Calculate the multiplication table for the standard basis of G2 by calculating
       the matrix product B T B, where
                                         
                                      B = 1 e1 e2 e12 .

  (b) Calculate the multiplication table for the spectral basis of G2 by calculating
      the matrix product S T S , where
                                     
                                  S = u + e1 u − e1 u + u − .

   (c) Show that AS T = B T and S T = 12 AT B T , where
                                       ⎛         ⎞
                                        10 0 1
                                       ⎜0 1 1 0 ⎟
                                     A=⎜         ⎟
                                       ⎝1 0 0 −1⎠ .
                                        0 1 −1 0

7. Show that the e1 conjugation, defined in (4.10), satisfies the properties

                     (g1 + g2 )e1 = ge11 + ge21 and (g1 g2 )e1 = ge11 ge21

   where g1 , g2 ∈ G2 . What is the most general element g ∈ G3 for which ge1 = g?
Chapter 5
Outer Product and Determinants




                               . . . A good notation has a subtlety and suggestiveness which at
                               times make it seem almost like a live teacher.
                                                                              —Bertrand Russell



The outer product of vectors is closely related to the concept of a determinant. The
outer products of vectors and determinants are very important tools in the study of
the structure of a linear transformation. A set of vectors is linearly independent if
and only if the outer product of those vectors is not zero. Whereas a determinant is
scalar valued, the outer product characterizes the oriented direction of the subspace
spanned by the set of vectors.



5.1 The Outer Product

As noted in Chap. 3, the geometric product of two vectors, consisting of the sum
of its symmetric and antisymmetric parts, was discovered in 1878 by William
Kingdon Clifford. The geometric significance of the antisymmetric outer product
was discovered separately and considerably earlier by the German mathematician
Hermann Grassmann in his famous Ausdehnungslehre (1844) (which is translated
as the Theory of Extension). If (v)(k) = (v1 , v2 , . . . , vk ) are any k vectors in the
geometric algebra Gn , then

                           v(k) := ∧(v)(k) = v1 ∧ v2 ∧ · · · ∧ vk                        (5.1)

is antisymmetric (changes sign) over the interchange of any two of its vectors in
(5.1) and has the geometric interpretation of a simple k-vector or k-blade as given
in Chap. 3. If the k-vector v(k) = 0, the vectors v1 , . . . , vk are linearly dependent, and
if v(k) = 0, the vectors are linearly independent.


G. Sobczyk, New Foundations in Mathematics: The Geometric                                   85
Concept of Number, DOI 10.1007/978-0-8176-8385-6 5,
© Springer Science+Business Media New York 2013
86                                                                  5 Outer Product and Determinants


   The outer product of k vectors is the completely antisymmetric part of the
geometric products of those vectors (3.43). We now explore the properties of the
outer product of vectors and its relationship to the determinant in more detail.
The most simple case of (5.1) is when k = 2,

                               v(2) = v1 ∧ v2 = −v2 ∧ v1 ,

which has the geometric interpretation of a simple bivector, or 2-blade, as we have
seen in Fig. 3.1 of Chap. 3. Bivectors in the geometric algebra Gn , just like vectors,
are added and multiplied by scalars and make up the subspace G2n ⊂ Gn .
   The standard basis G2n of the bivectors of the geometric algebra Gn is given by

                                      (n)
                    G2n = span{e(2) } = {ei j | for 1 ≤ i < j ≤ n},

where
                                            ei j = ei ∧ e j .
                               
                               n
It follows that dim(G2n ) =       , as we have seen earlier in (3.30) of Chap. 3.
                               2
     Letting
                                                                n
                                a = (e)(n) (a)(n) = ∑ ai ei ,
                                                            i=1
                                                                n
                                b = (e)(n) (b)(n) = ∑ bi ei ,
                                                            i=1

we find, by using the fact that the outer product is antisymmetric, that
                         n             n                              
               a ∧ b = ( ∑ ai ei ) ∧ ( ∑ b j e j ) = e(2) det a(2) b(2) (n) ,
                                                      (n)

                         i=1                j=1


where
                                                                  i i
                                                                a b
                                                       ∑ ei j det a j b j .
                      (n)
                     e(2) det a(2) b(2) (n) ≡
                                                       i< j

Note that
                                       i i
                                       a b
                                det          = ai b j − a j bi
                                       aj bj

is the usual determinant function.
    It is worthwhile to go over these calculations in detail for the simple cases of
bivectors of G2n when n = 2 and n = 3. This will give insight into the notation being
used and the exact relationship between a bivector and a determinant of order 2.
5.1 The Outer Product                                                                  87


  For n = 2, let a = (e)(2) (a)(2) = a1 e1 + a2 e2 and b = (e)(2) (b)(2) = b1 e1 + b2 e2 .
Then
                                               1 1
              (2)                             a b
     a ∧ b = e(2) det a(2) b(2) (2) = e12 det 2 2 = (a1 b2 − a2 b1 )e12            (5.2)
                                                a b
                   1 1
                   a b
We see that det          relates the bivector a ∧ b to the size and orientation of the
                   a2 b2
bivector e12 .
   Similarly, for n = 3, let a = (e)(3) (a)(3) and b = (e)(3) (b)(3) . Then

                   (3)             
          a ∧ b = e(2) det a(2) b(2) (3)
                           1 1          1 1       2 2
                            a b           a b         a b
                = e12 det 2 2 + e13 det 3 3 + e23 det 3 3
                            a b           a b         a b
                = (a1 b2 − a2 b1 )e12 + (a1 b3 − a3b1 )e13 + (a2 b3 − a2 b3 )e23    (5.3)
                                      i i
                                        a b
We see that the determinants det j j relate the bivector a ∧ b to the size and
                                        a b
orientation of the bivectors e12 , e13 , and e23 .
   Comparing the bivectors in the standard basis for n = 2 and n = 3, we see
that a ∧ b in (5.2) has only one term, whereas in (5.3), there are three distinct
components for a general bivector in a three-dimensional space. However, if we
consider a trivector (or 3-vector) in three-dimensional space, we once again get a
simple relationship. Specifically, for n = 3 and the vectors

                  a = (e)(3) (a)(3) , b = (e)(3) (b)(3) , c = (e)(3) (c)(3) ,

in terms of the basis vectors (e)(3) = (e1 , e2 , e3 ), we calculate
                                                                
                     a ∧ b ∧ c = e123 det (a)(3) (b)(3) (c)(3) (3) ,

where
                                                     ⎛ 1 1 1⎞
                         (3)                        a b c
                     det (a) (b)(3) (c)(3) (3) = det ⎝a2 b2 c2 ⎠
                                                      a 3 b 3 c3

is the usual 3-dimensional determinant function.
    We have introduced the concept of the standard basis (e)(n) of Rn . More generally
we make the following:
                                            
Definition 5.1.1. A row (a)(n) = a1 . . . an of vectors of Rn make up a basis of
Rn iff
                           a(n) = ∧(a)(n) = a1 ∧ · · · ∧ an = 0.
88                                                         5 Outer Product and Determinants


     Suppose that we are given two sets of n vectors of Rn
                                                                    
                   (a)(n) = a1 a2 . . . an ,    (b)(n) = b1 b2 . . . bn ,

related by a matrix of transition C = (ci j ), for ci j ∈ R, where (a)(n) = (b)(n)C, then
                                                 
                        a(n) = ∧(a)(n) = ∧ (b)(n)C = b(n) detC.                       (5.4)

   This fundamental relationship follows immediately from the antisymmetric
properties of the outer product and the definition of the determinant function. In
view of the above definition, (a)(n) is a basis of Rn iff (b)(n) is a basis of Rn
and detC = 0. Further relationships between the outer product and the determinant
function are explored in the exercises.
   The elements of the geometric algebra Gn = G(Rn ) of the Euclidean space Rn
have a natural grading into the sum of Grassmann subspaces Gkn of k-vectors over
the real numbers R. We identify G1n = Rn and write

                           Gn = R + G1n + · · · + Gkn + · · · + Gnn,                  (5.5)

where each Gkn represents the linear space of all k-vectors generated by taking all
outer products of k vectors in Rn . A basis for the space of k-vectors Gkn is constructed
by taking all distinct outer products of k basis vectors from (e)(n) of Rn to get

        Gkn = span{eλk | λk = i1 i2 · · · ik where 1 ≤ i1 < i2 < · · · < ik ≤ n}.     (5.6)

A general multivector M ∈ Gn has the form

                  M =< M >0 + < M >1 + < M >2 + · · · + < M >n                        (5.7)

where < M >k denotes the k-vector part of M. We denote the Grassmann algebra of
the n-dimensional vector space Rn with the same symbol as used for the geometric
algebra Gn , although in the Grassmann algebra only the antisymmetric outer product
is used.



Exercises

 1. In R3 , let a = (e)(3) (a)(3) = e1 + 2e2 − e3 and b = (e)(3) (b)(3) = 2e1 − 2e2 +
    3e3 .
      (a) Calculate a ∧ b, and draw a picture of this bivector in the xy-plane. Also
          draw a picture of the bivector b ∧ a.
      (b) Calculate the trivectors e1 ∧ a ∧ b, e2 ∧ a ∧ b, and e3 ∧ a ∧ b. What is the
          relationship between these trivectors and the bivector a ∧ b?
5.1 The Outer Product                                                                          89


    (c) Calculate the bivectors e1 ∧ a, e2 ∧ a, and e3 ∧ a. What is the relationship
        between these bivectors and the vector a?
    (d) What is the relationship between the bivectors a ∧ b and a ∧ (2a + b)?
 2. Let a = (e)(4) (a)(4) and b = (e)(4) (b)(4) be vectors in R4 expressed in the basis
    (e)(4) = (e1 , e2 , e3 , e4 ).
    (a) Find the formula for the bivector a ∧ b in terms of the 6 components in the
                         (4)
        standard basis {e(2) } of bivectors in G24 of G4 .
    (b) Find the 4-blade e1 ∧ e2 ∧ a ∧ b. What is the relationship between this
        4-blade and the bivector a ∧ b?
 3. Let a, b, c be 3 vectors expressed in the standard basis (e)(4) = (e1 , e2 , e3 , e4 )
    of R4 .
    (a) Find the explicit formula for the 4 components of the trivector a ∧ b ∧ c in
                                      (4)
        terms of the standard basis {e(3) } of the space of trivectors G34 in G4 .
    (b) Find the 4-blade e1 ∧a ∧b∧c. What is the relationship between this 4-blade
        and the trivector a ∧ b ∧ c?
 4. Let a, b, c, d be 4 vectors expressed in the basis (e)(4) = (e1 , e2 , e3 , e4 ) of R4 .
    (a) Find the explicit formula for the the 4-blade a ∧ b ∧ c ∧ d in terms of the
         standard basis {e(4) } = {e1234} of the space of 4 vectors G44 of G4 .
    (b) What is the relationship between the 4-blade e1234 and the 4-blade a ∧ b ∧
         c ∧ d?
                                                                  (4)
    (c) Express the trivector a ∧ b ∧ c in terms of the basis {e(3) } of trivectors of
                                                              
                                                              4
         the vector space R4 . Show that there are exactly         = 4 standard basis
                                                              3
         elements of the trivector space G34 of G4 .
                               
 5. Let (e)(n) = e1 e2 . . . en be the standard basis of Rn , and let v1 , v2 , . . . ,
    v n ∈ Rn .
    (a) Show that
                                                                               
                        v(n) = v1 ∧ v2 ∧ · · · ∧ vn = e12···n det v1 v2 . . . vn ,
                                               ⎛ ⎞
                                                 v1i
                                               ⎜v ⎟
                                               ⎜ 2i ⎟
                                               ⎜ ⎟
        where vi are the column vectors vi = ⎜ · ⎟.
                                               ⎜ ⎟
                                               ⎝·⎠
                                                 vni
    (b) Show that the vectors (v)(n) are linearly independent if and only if

                            n
                           ∑ vi v i = 0     ⇐⇒       vi = 0 for i = 1, . . . , n.
                           i=1
90                                                           5 Outer Product and Determinants


     (c) Show that the vectors v1 , . . . , vn are linearly dependent iff
                                                              n
                                 ∧(v)(n) = 0        ⇐⇒       ∑ vi v i = 0
                                                             i=1

         and not all vi = 0 for i = 1, . . . , n.
 6. In R3 , suppose that
                                                             ⎛     ⎞
                                                             1 23
                          (a)(3) = (a1 , a2 , a3 ) = (e)(3) ⎝−1 0 1⎠ .
                                                             2 30
     Show that
                                                             ⎛  ⎞
                                                          1 23
                          a(3) = a1 ∧ a2 ∧ a3 = e123 det ⎝−1 0 1⎠ .
                                                          2 30

     Conclude that the vectors a1 , a2 , a3 form a basis of V 3 if and only if
                                            det a(3) = 0.
 7. In Rn , suppose that
                  (a)(n) = (a1 , a2 , . . . , an ) = (e)(n) A, and a(n) = ∧(a)(n) ,
                  (b)(n) = (b1 , b2 , . . . , bn ) = (e)(n) B, and b(n) = ∧(b)(n) ,
                  (c)(n) = (c1 , c2 , . . . , cn ) = (e)(n)C, and c(n) = ∧(c)(n) ,

     and that the matrices A, B,C satisfy C = AB. Show, by using (5.4), that

                               c(n) = a(n) det B = e(n) detA det B,

    and conclude that det(C) = det(A) det(B).
 8. Show that the Grassmann algebra Gn , considered as a linear (vector) space, has
    2n dimensions just like the geometric algebra G(Rn ).
 9. Let (a)(n) = (e)(n) A, where A is the n × n matrix
                                          ⎛                ⎞
                                         a11 a12 . . . a1n
                                       ⎜a a . . . a ⎟
                                       ⎜ 21 22          2n ⎟
                                       ⎜                   ⎟
                                     A=⎜ · · · · ⎟
                                       ⎜                   ⎟
                                       ⎝ · · · · ⎠
                                         an1 a12 . . . ann

     which defines the n vectors ai in Rn . Show that
                                                     n
                   a1 ∧ (a2 ∧ a3 ∧ · · · ∧ an ) = ∑ ai1 ei ∧ a2 ∧ a3 ∧ · · · ∧ an
                                                    i=1
5.1 The Outer Product                                                                               91


    gives the formula for the expansion of a determinant by cofactors of elements
    in the first column.
10. Let (a)(n) = (e)(n) A as in Problem 9. We know that

                                 a(n) ≡ a1 ∧ · · · ∧ an = e12...n det A.

    Now define

                   (a)(n) i j = {a1 , . . . , a j−1 , ei , a j+1 , . . . , an } = (e)(n) A(i j) .

    The matrix A(i j) is called the (ij)-minor of the matrix A and is formed by
    replacing the jth column of the matrix A with the column vector ei . Taking
    the determinant of this matrix gives

                                               Ai j = det A(i j) ,

    called the cofactor of the element ai j of the matrix A.
                  ⎛         ⎞
                    1 2 3
    (a) For A = ⎝0 −1 1⎠, explicitly calculate A(12) and A(23) and their corre-
                    1 1 1
        sponding determinants A12 and A23 , respectively. The adjoint matrix of the
        matrix A is defined in terms of its cofactors Ai j by
                                                   ⎛               ⎞T
                                                 A11 A12 . . . A1n
                                               ⎜A A . . . A ⎟
                                               ⎜ 21 22          2n ⎟
                                               ⎜                   ⎟
                                      adj(A) = ⎜ · · · · ⎟ .
                                               ⎜                   ⎟
                                               ⎝ · · · · ⎠
                                                 An1 A12 . . . Ann

    (b) Show that ∑ni=1 ai j Ai j = det A for j = 1, 2, . . . , n.
    (c) Show that ∑ni=1 ai j Aik = 0 for j = k.
    (d) Use parts (b) and (c) above to show that

                                      A adj(A) = det(A)I = adj(A)A.

         Using this result, show that

                                                            adj(A)
                                                  A−1 =            .
                                                             detA

        It follows that a square matrix A has an inverse A−1 if and only if detA = 0.
    (e) Use the formula given in part (d) to find the inverse of the matrix given in
        part (a).
92                                                            5 Outer Product and Determinants


5.2 Applications to Matrices

Suppose that AB = C for the three (n, n)-matrices A, B,C. Multiplying this matrix
equation on the left by the standard basis (e)(n) of Rn gives the vector equation

                         (e)(n) AB = (a)(n) B = (e)(n)C = (c)(n) ,

which means that the vectors ci are linear combinations of the vectors (a)(n) . Taking
the outer products of both sides of this last equation, and using (5.4), gives

                                       c(n) = a(n) det B                                  (5.8)

and defines the determinant function of the matrix B relating the n-vectors c(n)
and a(n) . But (c)(n) = (e)(n)C and (a)(n) = (e)(n) A imply that c(n) = e(n) detC and
a(n) = e(n) det A. Using these relationships in (5.8) gives the result

                                 e(n) detC = e(n) det A det B,

or det(AB) = det(A) det(B).
   We have noted that a system of linear equations can be written in the matrix form
                                      ⎛ ⎞ ⎛ ⎞
                                        x1     b1
                                      ⎜ x2 ⎟ ⎜ b 2 ⎟
                                      ⎜ ⎟ ⎜ ⎟
                                      ⎜ ⎟ ⎜ ⎟
                                     A⎜ · ⎟ = ⎜ · ⎟,
                                      ⎜ ⎟ ⎜ ⎟
                                      ⎝·⎠ ⎝·⎠
                                        xn     bn

where A = (ai j ) is an (n, n)-matrix. Multiplying both sides of this equation on the
left by (e)(n) gives the equivalent vector equation

                                       (a)(n) (x)(n) = b

of this system of equations.
   We can easily solve this system of equations for xi , for 1 ≤ i ≤ n, by taking the
outer product on the left and right sides of the last equation, with a1 ∧ · · · ∧ ai−1 and
ai+1 ∧ · · · ∧ an , respectively, to get

          xi det(a)(n) e12···n = det(a1 ∧ · · · ∧ ai−1 ∧ b ∧ ai+1 ∧ · · · ∧ an )e12···n

or
                            det(a1 ∧ · · · ∧ ai−1 ∧ b ∧ ai+1 ∧ · · · ∧ an )
                     xi =                                                   .             (5.9)
                                              det(a)(n)

The formula (5.9) is known as Cramer’s rule and is well defined if det(a)(n) = 0.
5.2 Applications to Matrices                                                           93


Exercises
                              
             12             1 −1
1. Let A =         , B=            . Calculate (a)(2) = (e)(2) A and (c)(2) = (e)(2) (AB).
             34             1 1
   Verify that a1 ∧ a2 det B = c1 ∧ c2 
                                       and det(A) det(B)= detC.
                                         a x + b 1 y = c1
2. (a) Write the system of equation 1                       in matrix form.
                                         a 2 x + b 2 y = c2
   (b) Write the system of equations in equivalent vector form and solve by using
       Cramer’s rule.                  ⎛                      ⎞
                                          x1 + 2x2 − x3 = 5
3. (a) Write the system of equation ⎝ x1 + x2 + x3 = 1 ⎠ in matrix form.
                                         2x1 − 2x2 + x3 = 4
   (b) Write the system of equations in equivalent vector form and solve by using
       Cramer’s rule.
Chapter 6
Systems of Linear Equations




                              Even stranger things have happened; and perhaps the strangest
                              of all is the marvel that mathematics should be possible to a
                              race akin to the apes.
                                                                                 —Eric T. Bell



We give a rather conventional treatment of the study of a system of linear equations
by using the augmented matrix of the system. The so-called LU decomposition of
a matrix is introduced, together with the concept of elementary row and column
operations and their corresponding matrices. All vectors are to be considered row
vectors or column vectors of Rn . Geometric algebra is not used in this chapter.



6.1 Elementary Operations and Matrices

The theory of matrices arose primarily from techniques for solving systems of linear
equations. A system of m linear equations in n unknowns has the form
                        ⎛                                       ⎞
                           a11 x1 + a12 x2 + · · · + a1nxn = b1
                        ⎜ a x + a x + ···+ a x = b ⎟
                        ⎜ 21 1       22 2             2n n    2 ⎟
                        ⎜                                       ⎟
                        ⎜                   ·                   ⎟
                        ⎜                                       ⎟                       (6.1)
                        ⎜                   ·                   ⎟
                        ⎜                                       ⎟
                        ⎝                   ·                   ⎠
                          am1 x1 + am2 x2 + · · · + amn xn = bm

We have already noted that this system of linear equations can be expressed by the
matrix equation AX = B where




G. Sobczyk, New Foundations in Mathematics: The Geometric                                  95
Concept of Number, DOI 10.1007/978-0-8176-8385-6 6,
© Springer Science+Business Media New York 2013
96                                                       6 Systems of Linear Equations

                   ⎛                 ⎞         ⎛ ⎞             ⎛  ⎞
                   a11 a12 . . . a1n            x1             b1
                 ⎜a a ... a ⎟                  ⎜x ⎟           ⎜b ⎟
                 ⎜ 21 22          2n ⎟         ⎜ 2⎟           ⎜ 2⎟
                 ⎜                   ⎟         ⎜ ⎟            ⎜ ⎟
                 ⎜ · · ... · ⎟                 ⎜·⎟            ⎜ · ⎟
               A=⎜                   ⎟,    X = ⎜ ⎟,       B = ⎜ ⎟.
                 ⎜ · · ... · ⎟                 ⎜·⎟            ⎜ · ⎟
                 ⎜                   ⎟         ⎜ ⎟            ⎜ ⎟
                 ⎝ · · ... · ⎠                 ⎝·⎠            ⎝ · ⎠
                   am1 am2 . . . amn            xn             bm

The augmented matrix M of the coefficients of the equations is defined by
                                   ⎛                 ⎞
                                a11 a12 . . . a1n b1
                              ⎜a a ... a b ⎟
                              ⎜ 21 22          2n 2 ⎟
                              ⎜                      ⎟
                              ⎜ · · ... · · ⎟
                            M=⎜                      ⎟.                          (6.2)
                              ⎜ · · ... · · ⎟
                              ⎜                      ⎟
                              ⎝ · · ... · · ⎠
                                am1 am2 . . . amn bm

   The following elementary (row) operations can be performed on the system of
linear equations (6.1) or on the corresponding augmented matrix (6.2), giving an
equivalent system of linear equations with exactly the same solutions as (6.1):
1. Multiply any equation (row) by a nonzero scalar.
2. Multiply the ith equation (row) by a nonzero scalar and add it to the jth equation
   (row).
3. Interchange the ith equation (row) with the jth equation (row).
     For example, given the system of linear equations
                               
                                x1 + 2x2 + 3x3 = 3
                                                    ,                            (6.3)
                                4x1 + 5x2 + 6x3 = 6

the augmented matrix is
                                      
                                       1233
                                   M=       .
                                       4566

If we multiply the first equation by 2, we get the equivalent set of equations
                               
                                2x1 + 4x2 + 6x3 = 6
                                                    ,
                                4x1 + 5x2 + 6x3 = 6

and the corresponding augmented matrix of the system becomes
                                       
                                        2466
                                             .
                                        4566
6.1 Elementary Operations and Matrices                                           97


This is an example of the first elementary (row) operation. On the other hand, if we
multiply the 1st equation by −4 and add it to the 2nd equation of (6.3), we get
                               
                                x1 + 2x2 + 3x3 = 3
                                                   .
                                 −3x2 − 6x3 = −6

The corresponding row operation on the matrix M is
                                  
                                   1 2 3 3
                               M=             .
                                   0 −3 −6 −6

    The third elementary operation of interchanging the first and second equations
(rows) is easily written down and is omitted. We see that elementary operations
on a system of linear equations correspond exactly to the same row operation on
its augmented matrix. This makes it more economical to work with the augmented
matrix of the system. We now observe that the same elementary row operations on
the augmented matrix M can be accomplished by multiplying the matrix M on the
left by the corresponding elementary row matrix. The elementary row matrices are
constructed from the standard m row vectors

                                 ei = δ1i δ2i · · · δmi

where δij = 0 for i = j and δij = 1 when i = j.
  For the matrix
                                 A = (a)(m,n) = (ai j ),

where 1 ≤ i ≤ m and 1 ≤ j ≤ n, we define the following three kinds of elementary
matrices:
1. The elementary square (m, m)-matrix
                                              ⎛   ⎞
                                               e1
                                             ⎜ e2 ⎟
                                             ⎜ ⎟
                                             ⎜ ⎟
                                             ⎜ · ⎟
                                    E (α ) = ⎜ i ⎟ ,
                                     i
                                             ⎜α e ⎟
                                             ⎜ ⎟
                                             ⎝ · ⎠
                                               em

   in the product E i (α )A multiplies the ith row of the matrix A by the nonzero
   constant α ∈ R.
2. The elementary square matrix
98                                                         6 Systems of Linear Equations

                                             ⎛       ⎞
                                               e1
                                           ⎜ e2 ⎟
                                           ⎜         ⎟
                                           ⎜         ⎟
                                           ⎜    ·    ⎟
                                  E (α ) = ⎜ i
                                   ij
                                                     ⎟
                                           ⎜α e + e ⎟
                                                   j
                                           ⎜         ⎟
                                           ⎝    ·    ⎠
                                               e m


   in the product E i j (α )A multiplies the ith row of the matrix A by α and adds it to
   the jth row of A.
3. The elementary square matrix
                                              ⎛ 1⎞
                                               e
                                              ⎜·⎟
                                              ⎜ ⎟
                                              ⎜ej ⎟
                                              ⎜ ⎟
                                              ⎜ ⎟
                                       Ei j = ⎜ · ⎟
                                              ⎜ i⎟
                                              ⎜e ⎟
                                              ⎜ ⎟
                                              ⎝·⎠
                                               em

     in the product E i j A interchanges the ith and jth rows of the matrix A, leaving
     the other rows unaffected. This 3rd type of elementary matrix is a permutation
     matrix and, indeed, is just the permutation of the ith and jth rows of the identity
     matrix.
   Notice that the (m, m) identity matrix [1]m can be expressed in terms of the row
vectors ei ,
                                ⎛              ⎞
                                   1 0 0... 0       ⎛ 1⎞
                                ⎜ 0 1 0 . . . 0⎟       e
                                ⎜              ⎟ ⎜ 2⎟
                                ⎜              ⎟       e ⎟
                        [1]m = ⎜. . .     ... ⎟ = ⎜ ⎝
                                ⎜              ⎟        ·⎠
                                ⎝. . .    ... ⎠
                                                       em
                                   0 ... 0 1

The elementary (row) matrices are formed by simply performing the desired row
operation on the identity matrix [1]m .



Exercises
             ⎛       ⎞
            1 2 3 4
1. Let A = ⎝0 −1 1 0 ⎠
            1 3 0 −1
6.1 Elementary Operations and Matrices                                           99


   (a) Show that                             ⎛         ⎞
                                              1 2 3 4
                                  E 2 (3)A = ⎝0 −3 3 0 ⎠
                                              1 3 0 −1
       where the elementary matrix
                                             ⎛ ⎞ ⎛       ⎞
                                           e1       100
                                E 2 (3) = ⎝3e2 ⎠ = ⎝0 3 0⎠
                                           e3       001

   (b) Show that
                                                 ⎛     ⎞
                                             1 2 3 4
                              E 13 (−2)A = ⎝ 0 −1 1 0 ⎠
                                            −1 −1 −6 −9

       where the elementary matrix
                                         ⎛       ⎞ ⎛         ⎞
                                          e1           1 00
                          E 13 (−2) = ⎝   e2     ⎠ = ⎝ 0 1 0⎠
                                       −2e + e
                                          1    3      −2 0 1

   (c) Show that
                                             ⎛        ⎞
                                             0 −1 1 0
                                   E 12 A = ⎝1 2 3 4 ⎠
                                             1 3 0 −1

       interchanges the first two rows of the matrix A where the elementary matrix
                                         ⎛ 2⎞ ⎛        ⎞
                                          e       010
                                  E 12 = ⎝e1 ⎠ = ⎝1 0 0⎠
                                             e3      001
                      ⎛             ⎞
                       1 2 3 4
2. For the matrix A = ⎝0 −1 1 0 ⎠ , show that E 23 (−2)A multiplies the second
                       1 3 0 −1
   row of A by −2 and adds it to the third row of A, where the elementary matrix
                                    ⎛         ⎞ ⎛         ⎞
                                       e1          1 0 0
                       E 23 (−2) = ⎝   e2     ⎠ = ⎝0 1 0 ⎠
                                    −2e + e
                                       2    3      0 −2 1

3. Show that E 23 (2)E 23 (−2) = [1]3 where [1]3 is the identity matrix; we see that
   E 23 (−2) is the inverse elementary matrix to E 23 (2).
100                                                      6 Systems of Linear Equations


4. Show that E 2 (1/2) is the inverse of the elementary matrix E 2 (2).
5. Show that E 12 is the inverse of the elementary matrix E 12 ; thus, E 12 is its own
   inverse.
6. We have seen how the elementary (row) matrices perform elementary row
   operations on a matrix A by multiplication on the left. Similarly, elementary
   (column) matrices can be defined, which perform elementary column operations
   on a matrix A by multiplication on the right. For the Problems 1–5 above, find
   the elementary (column) matrices which perform the corresponding elementary
   column operations.



6.2 Gauss–Jordan Elimination

The method of Gauss–Jordan elimination is used to find the solutions of a system
of linear equations. We have already noted that, given the augmented matrix M
of a system of linear equations, we are free to perform an arbitrary number of
elementary row operations without fear of altering its solutions. Thus, the idea
of Gauss–Jordan elimination is to simplify the matrix M as much as possible by
performing elementary row operations on M.
   For example,
                               ⎛                   ⎞
                                 −2 2 −4 −6 2
                               ⎜−3 6 3 −15 3⎟
                          M=⎜  ⎝ 5 −8 −1 17 5⎠
                                                   ⎟                        (6.4)
                                   2 −2 2 2 8
is the augmented matrix of the system of linear equations AX = B, where
                  ⎛            ⎞       ⎛ ⎞         ⎛ ⎞
                   −2 2 −4 −6           x1          2
                  ⎜−3 6 3 −15⎟         ⎜x2 ⎟       ⎜3⎟
                A=⎜            ⎟       ⎜ ⎟         ⎜ ⎟
                  ⎝ 5 −8 −1 17 ⎠ , X = ⎝x3 ⎠ , B = ⎝5⎠
                        2 −2 2       2              x4           8

   Multiplying M on the left by successive elementary (row) matrices gives
                                                  ⎛             ⎞
                                                  1 −1 2 3 −1
                                                ⎜−3 6 3 −15 3 ⎟
                                  E 1 (−1/2)M = ⎜
                                                ⎝ 5 −8 −1 17 5 ⎠
                                                                ⎟

                                                  2 −2 2 2 8
                                                ⎛              ⎞
                                                  1 −1 2 3 −1
                                                ⎜0 3 9 −6 0 ⎟
         E 14 (−2)E 13(−5)E 12 (3)E 1 (−1/2)M = ⎜              ⎟
                                                ⎝0 −3 −11 2 10 ⎠ .
                                                  0 0 −2 −4 10
6.2 Gauss–Jordan Elimination                                                        101


Continuing this process ultimately gives
                                  ⎛             ⎞
                                    1 0 0 −9 24
                                  ⎜0 1 0 −8 15 ⎟
                                  ⎜             ⎟
                                  ⎝0 0 1 2 −5⎠ ,                                  (6.5)
                                      000 0     0

  Using this final row-reduced form of M, the solution to the original system of
equations is easily calculated to be
           ⎛               ⎞               ⎛ ⎞      ⎛ ⎞ ⎛ ⎞
             x1 = 9x4 + 24                   x1       9     24
           ⎜ x2 = 8x4 + 15 ⎟               ⎜ x2 ⎟   ⎜ 8 ⎟ ⎜ 15 ⎟
           ⎜               ⎟       ⇐⇒      ⎜ ⎟ = x4 ⎜ ⎟ + ⎜ ⎟ .
           ⎝x3 = −2x4 − 5⎠                 ⎝ x3 ⎠   ⎝−2⎠ ⎝−5⎠
                x4 = x4                      x4       1      0

Since x4 ∈ R is arbitrary, we see that there are infinitely many solutions parameter-
ized by x4 . Geometrically, the solutions lie on a straight line in R4 , passing through
                        T                                             T
the point 24 15 −5 0 in the direction of the vector 9 8 −2 1 .
    The Gauss–Jordan elimination method can also be used to find the inverse A−1
of a matrix A, provided that detA = 0. We will illustrate the method by using the
first 3 rows and columns of the matrix (6.4). To find the inverse of the matrix
                                       ⎛     ⎞
                                      −2 2 −4
                                 A = ⎝−3 6 3 ⎠ ,
                                      5 −8 −1

where det A = 12, we apply Gauss–Jordan elimination to the augmented matrix
                                   ⎛             ⎞
                                    −2 2 −4 1 0 0
                               M = ⎝−3 6 3 0 1 0⎠
                                    5 −8 −1 0 0 1

to get
                                    ⎛                                 ⎞
                                     100
     E 13 (−5)E 12 (3)E 1 (−1/2)M = ⎝0 1 0 E 13 (−5)E 12 (3)E 1 (−1/2)⎠ .         (6.6)
                                     001

It follows that
                                                      ⎛         ⎞
                                                        9 17 15
                                                    1
                  A−1 = E 13 (−5)E 12(3)E 1 (−1/2) = ⎝ 6 11 9 ⎠ .
                                                    6
                                                       −3 −3 −3
102                                                   6 Systems of Linear Equations


Exercises

Use the Gauss–Jordan elimination method to find the solutions (if they exist) of
the following systems of linear equations for which the augmented matrices are the
following:
        ⎛             ⎞
           0 0 −4 3
1. A = ⎝−2 −1 −1 4⎠
           3 1 −3 0
        ⎛             ⎞
          −2 −4 −4 0
2. B = ⎝ 0 0 −4 3⎠
           4 0 0 3
        ⎛          ⎞
          2 4 −4 3
3. C = ⎝2 3 1 3⎠
          4 0 −1 2
         ⎛               ⎞
            0 2 −1 4
4. D = ⎝−1 −2 0 −4⎠
            4 1 −3 −4
        ⎛                     ⎞
           4 −1 −4 3 0
5. E = ⎝−3 1 8 −6 −2⎠
           2 4 15 −13 −4
         ⎛                 ⎞
          −4 0 −1 2 3
6. F = ⎝ 3 0 −4 3 4 ⎠
           1 −3 −3 0 −1
         ⎛                   ⎞
           −1 −2 −3 2 0
         ⎜−3 1 0 −2 1 ⎟
7. G = ⎜ ⎝−3 1 −1 3 −4⎠
                             ⎟

           −4 −4 4 −3 2
8. Show that
                                 −1            
                             ab             1      d −b
                                     =
                             cd         ad − bc −c a
                      
                       ab
  provided that det        = ad − bc = 0.
                        cd
9. Show that
                          ⎛       ⎞−1 ⎛        ⎞
                            1 2 3       −1 4 3
                          ⎝ 2 −1 0⎠ = ⎝−2 7 6 ⎠ .
                           −2 2 1       2 −6 −5
6.3 LU Decomposition                                                              103


6.3 LU Decomposition

A square matrix L is called a lower triangular matrix if all of its elements above its
main diagonal are zero. Similarly, a square matrix U is called an upper triangular
matrix if all of its elements below its main diagonal are zero. A matrix which is both
lower triangular and upper triangular is called a diagonal matrix.
    It is not hard to verify that the inverse of a lower triangular elementary row
matrix is also a lower triangular elementary matrix and that the product of lower
triangular matrices is lower triangular. Given a square matrix M, if we can perform
the Gauss–Jordan elimination process by only using the first 2 kinds of elementary
row operations on M, then we can express M in the form

                           M = Ek−1 · · · E1−1 E1 · · · Ek M = LU                (6.7)

where L = Ek−1 · · · E1−1 is a lower triangular matrix and U = E1 · · · Ek M is the
resulting reduced upper triangular matrix form of M.
   The LU decomposition (6.7) of a matrix M is possible only when the first 2 kinds
of elementary matrices are used in the Gauss–Jordan elimination process. When the
3rd kind of elementary matrix is used, we can only find an LU decomposition up to
the inverse of a permutation matrix. This allows us to write PM = LU, where P is a
permutation matrix. We give a simple example of this modified LU decomposition
below.
   Let
                                    ⎛             ⎞
                                       0 0 4
                               M = ⎝ 2 4 6 ⎠,
                                      −4 −8 −10

and let P = E 12 so that
                                          ⎛      ⎞
                                         0 0 4
                             PM = E 12 ⎝ 2 4 6 ⎠ .
                                        −4 −8 −10
We then successively calculate
                ⎛             ⎞            ⎛            ⎞
                  2 4 6                        1 2 3
         PM = ⎝ 0 0 4 ⎠ = E 1 (2) ⎝ 0 0 4 ⎠
                 −4 −8 −10                    −4 −8 −10
                               ⎛       ⎞                         ⎛     ⎞
                                 123                               123
            = E 1 (2)E 13 (−4) ⎝0 0 4⎠ = E 1 (2)E 13 (−4)E 2 (4) ⎝0 0 1⎠
                                 002                               002
                                              ⎛     ⎞
                                                123
            = E 1 (2)E 13 (−4)E 2 (4)E 23 (2) ⎝0 0 1⎠ = LU,
                                                000
104                                                  6 Systems of Linear Equations


where

          L = E 1 (2)E 13 (−4)E 2 (4)E 23 (2)
              ⎛       ⎞⎛            ⎞⎛        ⎞⎛    ⎞ ⎛        ⎞
                 200         1 00        100     100    2 00
            = ⎝0 1 0⎠ ⎝ 0 1 0⎠ ⎝0 4 0⎠ ⎝0 1 0⎠ = ⎝ 0 4 0⎠
                 001        −4 0 1       001     021    −4 2 1

and                                  ⎛    ⎞
                                     123
                                U = ⎝0 0 1⎠ .
                                     000



Exercises

1. Give the LU decomposition for the following matrices:
           
             12
   (a) A =
             34
           
             21
   (b) B =
             87
            
             10
   (c) C =
             81
2. Give the LU decomposition for A and solve the upper triangular system UX =
   L−1C for X where            ⎛      ⎞⎛ ⎞ ⎛ ⎞
                                 233      x1       2
                        AX = ⎝0 5 7⎠ ⎝x2 ⎠ = ⎝2⎠
                                  698       x3       5
  for                 ⎛     ⎞              ⎛ ⎞          ⎛ ⎞
                       233                   x1          2
                  A = ⎝0 5 7⎠ ,       X = ⎝x2 ⎠ and C = ⎝2⎠ .
                       698                   x3          5
                                       ⎛            ⎞
                                           0 0 −4
3. Find the LU decomposition for A = ⎝−2 −1 −1⎠. If this is not possible, then
                                           3 1 −3
   find the permutation matrix P such that PA = LU.
                                       ⎛            ⎞
                                          −2 −4 −4
4. Find the LU decomposition for B = ⎝ 0 0 −4⎠. If this is not possible, then
                                           4 0 0
   find the permutation matrix P such that PB = LU.
6.3 LU Decomposition                                                         105

                                       ⎛         ⎞
                                         2 4 −4
5. Find the LU decomposition for C = ⎝2 3 1 ⎠. If this is not possible, then find
                                         4 0 −1
   the permutation matrix P such that PC = LU.
                                        ⎛           ⎞
                                           0 2 −1
6. Find the LU decomposition for D = ⎝−1 −2 0 ⎠. If this is not possible, then
                                           4 1 −3
   find the permutation matrix P such that PD = LU.
                                        ⎛              ⎞
                                           −1 −2 −3 2
                                        ⎜−3 1 0 −2⎟
7. Find the LU decomposition for E = ⎜                 ⎟
                                        ⎝−3 1 −1 3 ⎠. If this is not possible,
                                           −4 −4 4 −3
   then find the permutation matrix P such that PE = LU.
Chapter 7
Linear Transformations on Rn




                              Life is good for only two things, discovering mathematics and
                              teaching mathematics.
                                                                              —Simón Poisson



The definition of a linear transformation on Rn , and its natural extension to an
outermorphism on all of the geometric algebra Gn , is given. The tools of geometric
algebra, such as the a-derivative and the simplicial k-derivative, are used to study its
basic properties. We introduce the adjoint linear transformation and use it to derive
the inverse of a nonsingular transformation.



7.1 Definition of a Linear Transformation

Let K be the real number field R or the complex number field C, and let f :
A n → B m , where A n is an n-dimensional vector space over K and B m is an
m-dimensional vector space over K. We say that f is a linear transformation over
K if for all x, y ∈ A n , and all α , β ∈ K,

                        f (α x + β y) = α f (x) + β f (y) ∈ B m .                      (7.1)

It is easily checked that this is equivalent to saying that

             f (x + y) = f (x) + f (y) ∈ B m and f (α x) = α f (x) ∈ B m ,

for all x, y ∈ A n and α ∈ K. A linear transformation f is also called a linear
mapping or a linear operator. In this chapter, we are primarily interested in studying
the basic properties of linear transformations f : Rn → Rn , using the rich algebraic
structure of the geometric algebra Gn = G(Rn ).


G. Sobczyk, New Foundations in Mathematics: The Geometric                                107
Concept of Number, DOI 10.1007/978-0-8176-8385-6 7,
© Springer Science+Business Media New York 2013
108                                                                 7 Linear Transformations on Rn


   In order to be able to use the full power of the geometric algebra Gn in the study
of the linear transformation f , we extend f to an outermorphism f on the geometric
algebra Gn . We extend f to f by the following.
Outermorphism Rule 7.1.1. There are three parts to the rule:
1. f (α ) = α for all α ∈ R.
2. f (v) = f (v) for all v ∈ Rn .
3. f (v1 ∧ · · · ∧ vk ) = f (v1 ) ∧ · · · ∧ f (vk ).
Note that f inherits the property of linearity from the linearity of f so that

                      f (α A + β B) = α f (A) + β f (B) for all A, B ∈ Gn .

  Recalling the definition (3.45) of the a-derivative of a function on Rn , it
immediately follows that if f is a linear transformation on Rn , then its a-derivative

                                                f (x + ha) − f (x)
                          a · ∂x f (x) = lim                       = f (a)                     (7.2)
                                          h→0           h

for all a ∈ Rn . Indeed, the a-derivative of a function f , defined on Rn , evaluates
to f (a) for all a ∈ Rn iff f (x) is a linear transformation on Rn . Introducing the
simplicial k-derivative

                                          1
                                 ∂(k) =     ∂x ∧ ∂xk−1 ∧ · · · ∧ ∂x1 ,                         (7.3)
                                          k! k

for k = 1, . . . , n, then for each k-vector Ak ∈ Gkn ,

                                        Ak · ∂(k) f(k) = f (Ak )                               (7.4)

where f(k) := f (x(k) ) = f (x1 ) ∧ · · · ∧ f (xk ). Using the simplicial derivative, we can
express the determinant of a linear function f by

                                 det f = e−1
                                          (n) f (e(n) ) = ∂(n) · f (n) ,                       (7.5)

which will be very useful in the next chapter.
  For example, for A2 = a1 ∧ a2 , applying (7.2) and (7.3), we have

                                  1
         (a1 ∧ a2 ) · ∂(2) f(2) = (a2 · ∂x2 a1 · ∂x1 − a1 · ∂x2 a2 · ∂x1 ) f (x1 ) ∧ f (x2 )
                                  2
                                  1                                      
                                =    f (a1 ) ∧ f (a2 ) − f (a2 ) ∧ f (a1 ) = f (a1 ∧ a2 ),
                                  2
and the more general (7.4) follows by a similar argument. If we apply the operator
(a1 ∧ a2 ) · ∂(2) to the geometric product f (x1 )g(x2 ) of two linear operators f and g,
we get the antisymmetric operator
7.1 Definition of a Linear Transformation                                                    109


                                                           f (a1 )g(a2 ) − f (a2 )g(a1 )
      H(a1 ∧ a2 ) = (a1 ∧ a2 ) · ∂(2) f (x1 )g(x2 ) =                                       (7.6)
                                                                         2
defined in termsof f and g.
   Let (e)(n) = e1 . . . en be the standard orthonormal (row) basis vectors of Rn .
Then the matrix [ f ] of f with respect to the standard row basis is defined by
                                                        
                      f (e)(n) := ( f e)(n) = f1 · · · fn = (e)(n) [ f ],       (7.7)
where
                                                             ⎛ ⎞
                                                               e1
                                                             ⎜  ·⎟              
                    [ f ] = [ fi j ] = (e)T(n) · ( f e)(n) = ⎜    ⎟
                                                             ⎝ · ⎠ · f1 . . . fn
                                                               en
                                       ⎛                 ⎞
                                          f11 . . . f1n
                                       ⎜ · · · ⎟
                                       ⎜                 ⎟
                                       ⎜                 ⎟
                                     = ⎜ · · · ⎟,
                                       ⎜                 ⎟
                                       ⎝ · · · ⎠
                                         fm1 . . . fmn
fi = f (ei ), and fi j = ei · f j . By taking the transpose of (7.7), we get
                                                   ⎛ ⎞
                                                     f1
                                                   ⎜·⎟
                          f (e)(n) = ( f e)(n) = ⎜
                                   T         T          ⎟
                                                   ⎝ · ⎠ = [ f ] (e)(n) ,
                                                                T   T
                                                                                            (7.8)
                                                     fn
the relationship of f to its transpose matrix [ f ]T .
   Note that ei = ei for 1 ≤ i ≤ n, since the reciprocal basis of a given orthonormal
basis of Rn is identical to the given orthonormal basis. We can thus write the
reciprocal basis (e)(n) as a column matrix of the basis vectors ei ,
                                         ⎛ ⎞
                                          e1
                                         ⎜e2 ⎟
                                         ⎜ ⎟
                                         ⎜ ⎟
                                (e)(n) = ⎜ · ⎟ = (e)T(n) .                       (7.9)
                                         ⎜ ⎟
                                         ⎝·⎠
                                          en

Since (e)(n) · (e)(n) = [1]n , we sometimes write (e)(n) = (e)−1
                                                              (n) , where [1]n is the
(n, n)-identity matrix. Because of the noncommutative nature of matrix multiplica-
tion,
                         [1]n = (e)(n) · (e)(n) = (e)(n) · (e)(n) = n,                    (7.10)

so these operations must be used carefully.
110                                                                  7 Linear Transformations on Rn


   Suppose now that (a)(n) = (e)(n) A is an arbitrary basis of Rn , where A is the
matrix of transition. We wish to find the unique reciprocal basis (a)(n) = (a)−1
                                                                              (n) such
that
                                      (a)(n) · (a)(n) = [1]n .

We find immediately that

                                (a)(n) = (a)−1     −1
                                            (n) = A (e)
                                                       (n)
                                                                                             (7.11)

as can be easily verified.
   We can find the reciprocal basis (a)(n) in another way by finding the linear
mapping g with the property that g(ai ) = ai for 1 ≤ i ≤ n. With the help of (7.8), we
see that this is equivalent to the requirement that

                          g(a)(n) = (ga)(n) = (a)T(n) = [g]T (a)(n) .

Dotting each side of this equation on the right with (a)(n) gives

                                 [g]T = (a)T(n) · (a)(n) = [g],

which is called the Gramian matrix of the basis (a)(n) . It follows that

                                      (a)(n) = [g]−1 (a)T(n) .                               (7.12)

Comparing (7.11) with (7.12), we find that [g]−1 AT = A−1 which is equivalent to
AT A = [g].
   Given a basis (a)(n) of Rn , it is always possible to construct an orthogonal basis
(b)(n) with the property that

                                b1 = a1       and b(k) = a(k) ,                              (7.13)

for k = 2, . . . , n. The construction proceeds recursively as follows:

        b1 = a1 , bk = b̂†(k−1) b̂(k−1) ∧ ak = ak − b̂†(k−1) b̂(k−1) · ak                    (7.14)

for k = 2, . . . , n, where

                                      b†(k−1)
               b̂†(k−1) = b̂−1
                            (k−1)
                                  =                = b̂k−1 ∧ · · · ∧ b̂1 = b̂k−1 · · · b̂1
                                      |b†(k−1) |

since bi ’s, by construction, are orthogonal. This construction is known as the
Gram-Schmidt orthogonalization process, [15, p.160]. Later, in Chap. 10, we will
generalize this process to apply in more general pseudo-Euclidean spaces R p,q .
7.1 Definition of a Linear Transformation                                                       111


   As an example, we will construct an orthogonal basis for R4 from the basis of
column vectors                         ⎛          ⎞
                                          101 1
                                       ⎜0 1 2 0 ⎟
                          A = (a)(4) = ⎜
                                       ⎝1 1 0 −1⎠
                                                  ⎟

                                                     001 2
Thus,

        b1 = a1 = (1, 0, 1, 0)T
                                                      T
                    (a2 · b1 )b1    1    1
        b2 = a2 −                = − , 1, , 0
                      b1 · b1       2    2
                    (a3 · b1 )b1 (a3 · b2 )b2
        b3 = a3 −               −             = (1, 1, −1, 1)T
                      b1 · b1      b2 · b2
                                                                                        T
                    (a4 · b1 )b1 (a4 · b2 )b2 (a4 · b3 )b3    1 1 1
        b4 = a4 −               −            −             = − ,− , ,1                      .
                      b1 · b1      b2 · b2      b3 · b3       3 3 3

We can also write (b)(4) = (a)(4)  where
                                                               ⎛                 ⎞
                                                                   1 − 12 0 − 13
                                                                 ⎜0 1 −1 5 ⎟
                = (a1 , a2 , a3 , a4 )−1 (b1 , b2 , b3 , b4 ) = ⎜
                                                                 ⎝0 0 1 −1 ⎠
                                                                             3 ⎟


                                                                   0 0 0 1

  We can now use the orthogonal basis (7.14) defined by the basis (a)(n) to
demonstrate the Schwarz inequality. Using (7.13), we have

          (a1 ∧ a2 ) · (a2 ∧ a1 ) = |a1 |2 |a2 |2 − (a1 · a2 )2 = |b1 |2 |b2 |2 ≥ 0.        (7.15)

   In the case of an orthonormal basis, indices can be raised or lowered at will. For
example, for any vector x ∈ Rn , then

            x = (x)(n) (e)(n) = x · (e)(n)(e)(n) = (e)(n) (x)(n) = (e)(n) (e)(n) · x.

Since ei = ei for 1 ≤ i ≤ n, it follows that (x)(n) = (x)T(n) . Suppose now that (a)(n) =
(e)(n) A is any other basis of Rn . Then

                       x = ((e)(n) A)A−1 (x)(n) = (x)(n) A−1 (A(e)(n) ),                    (7.16)

which gives the transformation rule for the vector x. In words, the components (x)(n)
                                                                               (n)
with respect to the standard basis (e)(n) transform into the components (x)a =
A−1 (x)(n) with respect to the basis (a)(n) .
112                                                               7 Linear Transformations on Rn


  We can now find the transformation rule for the matrix [ f ] of a linear transfor-
mation f . We have

                 f ((e)(n) ) = (e)(n) [ f ] = (e)(n) AA−1 [ f ] = (a)(n) A−1 [ f ],

which implies that

      f (x) = f ((e)(n) )(x)(n) = (e)(n) [ f ](x)(n) = (e)(n) AA−1 [ f ]AA−1 (x)(n) .               (7.17)

It follows that the matrix of the transformation f with respect to the bases (a)(n) is
[ f ]a = A−1 [ f ]A.
     Let us see how the formulas (7.16) and (7.17) work for the following simple
example: Given the basis

                                        32
              (a)(2) = (e)(2) A = e1 e2      = (3e1 + 7e2, 2e1 + 5e2)
                                          75

                          32                          5 −2
for the matrix A =           , whose inverse is A−1 =      , a vector
                          75                          −7 3

                                                  x1
                        x = (e)(2) (x)(2) = e1 e2            = x1 e1 + x2 e2
                                                    x2

in the standard basis (e)(2) becomes

                                                                      (2)
           x = (e)(2) (x)(2) = (e)(2) AA−1 (x)(2) = (a)(2) (x)a = x1a a1 + x2a a2

where
                  (2)                       5 −2       x1          5x1 − 2x2
              (x)a = A−1 (x)(2) =                             =                           ,
                                            −7 3       x2          −7x1 + 3x2         a

when expressed in the basis (a)(2) . For a linear transformation

                                                                                              (2)
         f (x) = (e)(2) [ f ](x)(2) = (e)(n) AA−1 [ f ]AA−1 (x)(2) = (a)(2) [ f ]a (x)a ,

the matrix [ f ]a of the transformation f with respect to the basis (a)(2) is

                                             5 −2           f11 f12         32
                    [ f ]a = A−1 [ f ]A =                                      .
                                             −7 3           f21 f22         75
7.2 The Adjoint Transformation                                                                113


Exercises
                                                                             ⎞  ⎛
                                                                       1 2 3
In the following exercises, let (a)(3) = (e)(3) A for the matrix A = ⎝ 2 −1 0⎠,
                                                                      −2 2 1
              ⎛             ⎞
                  −1 4 3
given A−1 = ⎝−2 7 6 ⎠.
                  2 −6 −5
                                                            ⎛ ⎞
                                                              3
1. Using (7.16), find the components of x = (e)(3) ⎝ 2 ⎠ with respect to the
                                                             −1
   basis (a)(3) .
2. Find the Gramian matrix [g] of the basis (a)(3) .
3. Find the reciprocal basis (a)(3) of the basis (a)(3) .
4. Given the linear transformation f defined by
                                                         ⎛      ⎞
                                                          1 −1 2
                        f (e)(3) = (e)(3) [ f ] = (e)(3) ⎝2 2 1⎠ ,
                                                          0 1 3
   using (7.17), find the matrix [ f ]a of f with respect to the basis (a)(3) .
5. (a) Using the Gram-Schmidt orthogonalization process (7.14), find the orthogo-
       nal basis (b)(3) for the given basis (a)(3) .
   (b) Show that b1 b2 = a1 ∧ a2 and b1 b2 b3 = a1 ∧ a2 ∧ a3 .
   (c) Verify the Schwarz inequality (7.15) that |a1 |2 |a2 |2 − (a1 · a2 )2 ≥ 0.
6. For the linear transformation given in problem 4, find
   (a) f (e1 ),   (b) f (e2 ), (c) f (e3 ),   (d) f (e12 ),   (e) f (e13 ),   (f) f (e23 ).
   (g) Show that f (e123 ) = det[ f ]e123 .
7. Find the antisymmetric operator defined by (7.6) for the two linear operators f
   and g specified by
                                        12                                10
                  f (e)(2) = (e)(2)            and g(e)(2) = (e)(2)          .
                                        01                                02
   (Note that this operator has a scalar and a bivector part.)



7.2 The Adjoint Transformation

A useful auxiliary tool in the study of a linear transformation f and its outermor-
phism f is the adjoint transformation and its outermorphism, both denoted by the
same symbol f . The adjoint f is defined by the condition that for all x, y ∈ Rn ,
114                                                                 7 Linear Transformations on Rn


                                       f (x) · y = x · f (y).                                     (7.18)

We can solve for an explicit expression for f (x), getting

               f (x) = f (x) · (e)(n) (e)(n) = x · ( f e)(n) (e)(n) = ∂y f (y) · x

The last equality expresses the adjoint transformation in terms of the vector
derivative, defined in (3.46).
   There is a simple relationship between the matrix [ f ] and the matrix [ f ] of the
adjoint transformation. Using (7.8), we find that

                     [ f ]T = f (e)(n) · (e)(n) = (e)(n) · f (e)(n) = [ f ].

Note that [ f ] = [ f ], since the outermorphism f is identical to the linear transforma-
tion f when restricted to a vector argument.
   The following two basic relationships between the outermorphism f and its
adjoint outermorphism f are important and easily established. Let Ar , Bs ∈ Gn be
an r-vector and an s-vector, respectively, where r ≥ s. Then

              f (Ar ) · Bs = f [Ar · f (Bs )], and f (Ar ) · Bs = f [Ar · f (Bs )].               (7.19)

   Using (7.19) and the fact that det f = det f , we can establish the classical formula
for the inverse [ f ]−1 of the matrix [ f ] of an invertible linear transformation f . In the
second relationship, let Ar = In = e12...n the unit pseudoscalar element of Gn , Bs = x,
and y = f (x). Then

                  det( f )In x = f (In y)      ⇐⇒         det( f )xIn = f (yIn ),

or
                             f (yIn )In−1   f (ye1...n )en...1
                      x=                  =                    = f −1 (y),                        (7.20)
                                det f            det f

which gives x = f −1 (y) for all y ∈ Rn . Expressing both sides of (7.20) in terms of
the standard basis gives

                            f [(e)(n) (y)(n) e1...n ]en...1   f [(e)(n) e1...n ]en...1 (y)(n)
          (e)(n) (x)(n) =                                   =
                                       det f                             det f
                       = (e)(n) [ f −1 ](y)(n) .

Dotting both sides of this equation on the left by (e)(n) , and simplifying, gives

                                                                                     T
                                                (ee1...n )(n) · f [(en...1 e)(n) ]
           [ f −1 ](y)(n) = [ fi−1
                                j ](y)
                                      (n)
                                          =                                              (y)(n)
                                                              det f
7.2 The Adjoint Transformation                                                           115


or
                                                      Fji
                                           fi−1
                                             j =                                    (7.21)
                                                     det f

where
                                 Fji = (e j e1...n ) · f [(en...1 ei )]

is the algebraic cofactor of the element f ji in the determinant det[ f ] of f [29, p. 15].
See also Problem 10 of the exercises in Sect. 5.1. The formula (7.21) is the classical
formula for the inverse of a square matrix in terms of its algebraic cofactors.
    For example, if
                                                            ⎛           ⎞
                                                            f11 f12 f13
                       [ f ] = (f)(n) = (f1 , f2 , f3 ) = ⎝ f21 f22 f23 ⎠ ,
                                                            f31 f32 f33

then
                                                             T
                           (ee123 )(3) · f [(e321 e)(3) ]
     [ f −1 ] = [ fi−1
                    j ]=
                                       det f
                               ⎛                                                   ⎞
                             f f − f32 f23 f13 f32 − f33 f12 f12 f23 − f22 f13
                        1 ⎝ 22 33
                     =       f23 f31 − f33 f21 f11 f33 − f31 f13 f13 f21 − f23 f11 ⎠ .
                       det f
                             f21 f32 − f31 f22 f12 f31 − f32 f11 f11 f22 − f21 f12




Exercises
                                                                        ⎞     ⎛
                                                                  1 2 3
1. Using the formula (7.21), find the inverse of the matrix A = ⎝ 2 −1 0⎠.
                                                                 −2 2 1
                                         ab
2. Show that the inverse of the matrix         is
                                         cd

                                        −1
                                  ab                1    d −b
                                             =                .
                                  cd             ad − bc −c a

3. Given the linear transformation defined by
                                                 ⎛    ⎞
                                                1 2 3
                               f (x) = (e)(3) ⎝ 2 −1 0⎠ (x)(3) ,
                                               −2 2 1
116                                                       7 Linear Transformations on Rn


      where x = (e)(3) (x)(3) , find
  (a) f −1 (e1 ), (b) f −1 (e2 ), (c) f −1 (e3 ),   (d) f −1 (e12 ),   (e) f −1 (e13 ),   (f)
      f −1 (e23 ).
  (g) Show that f −1 (e123 ) = det[ f −1 ]e123 .
4. Establish the basic relationship (7.19). It may be helpful to first show f (Ar )·Br =
   Ar · f (Br ) for all r-vectors Ar , Br ∈ Grn .
5. Show that det f = det f by using (7.5).
Chapter 8
Structure of a Linear Operator




                              Mathematicians are like Frenchmen: whatever you say to them
                              they translate into their own language, and forthwith it is
                              something entirely different.
                                                                                       –Goethe



We show how the basic structure of a linear operator follows from its minimal
polynomial. The spectral decomposition of a linear operator follows immediately
from the spectral basis of idempotents and nilpotents which was developed in
Chap. 1 for modular polynomials. The Jordan form of a linear operator, while
technically more difficult, is just a refinement of its more fundamental spectral
decomposition.



8.1 Rank of a Linear Operator

Before we can talk about the structure of a linear operator, we must understand what
is meant by the rank of a linear operator. Let g be a linear operator, g : Rn → Rm ,
where Rn and Rm are n and m-dimensional Euclidean
                                                       spaces
                                                              over the real numbers
R. With respect to the standard basis (e)(n) = e1 e2 . . . en of Rn and the standard
                            
basis (f)(m) = f1 f2 . . . fm of Rm , we have

                      g(x) = g(e)(n) (x)(n) = (f)(m) [g](m,n) (x)(n)

where [g](m,n) is the m × n matrix of g with respect to the bases (e)(n) and (f)(m) .
Note, if (a)(n) = (e)(n) A and (b)(m) = (f)(m) B are any other bases of Rn and Rm ,
then
                                                                                      (n)
   g(x) = (f)(m) [g](m,n) (x)(n) = (f)(m) BB−1 [g](m,n) AA−1 (x)(n) = (b)(m) Gba (x)a ,



G. Sobczyk, New Foundations in Mathematics: The Geometric                                   117
Concept of Number, DOI 10.1007/978-0-8176-8385-6 8,
© Springer Science+Business Media New York 2013
118                                                             8 Structure of a Linear Operator


where Gba = B−1 [g](m,n) A is the matrix of g with respect to the new bases (a)(n) and
                 (n)
(b)(m) , and (x)a = A−1 (x)(n) .
   The rank of the linear operator g is the rank of either of the matrices [g](m,n) or
Gba , or it can be defined independent of a basis by
Definition 8.1.1. An operator g is said to have rank(g)= k if there is a set of k
vectors {a1 , a2 , . . . , ak } in Rn such that

                        g(a(k) ) = g(a1 ) ∧ g(a2) ∧ · · · ∧ g(ak ) = 0,

and there is no larger set of vectors from Rn with this property.
    Suppose that rank(g)= k, and g(a(k) ) = 0. (Recall that the vectors a1 , a2 , . . . , ak
are linearly independent if and only if a(k) = a1 ∧ a2 ∧ · · · ∧ ak = 0.) We can then
                                                                       
find vectors ak+1 , . . . , an ∈ Rn , such that (a)(n) = a1 a2 . . . an = (e)(n) A is a basis
of Rn , where A is the matrix of transition from the basis (e)(n) to the basis (a)(n) .
    Indeed, we can do even better by requiring the vectors ak+1 , ak+2 , . . . , an to be in
the kernel of g; that is, g(a j ) = 0 for j = k + 1, . . ., n. For suppose that for some such
 j, g(a j ) = 0. Since we know that

                              g(a1 ) ∧ · · · ∧ g(ak ) ∧ g(a j ) = 0,
or else rank(g) > k, it follows that
                                             k
                                   g(a j ) − ∑ αi g(ai ) = 0,
                                            i=1

or that
                                              k
                                    g(a j − ∑ αi ai ) = 0.
                                             i=1

So if g(a j ) = 0 for some j > k, we can redefine the vector a j to be the vector
                                                         k
                                (a j )new = (a j )old − ∑ αi ai
                                                        i=1

which is in the kernel of g. We have proved
Theorem 8.1.2. Given a linear operator g : Rn → Rm with rank(g) = k, there
exists a basis (a)(n) = (e)(n) A such that

                         g(a(k) ) = g(a1 ) ∧ g(a2 ) ∧ · · · ∧ g(ak ) = 0
and g(a j ) = 0 for j = k + 1, . . ., n.
   Theorem 8.1.2 has two important corollaries which easily follow.
Corollary 8.1.3. For every linear operator g on Rn ,

                                 rank[g] + dim(ker[g]) = n.
8.1 Rank of a Linear Operator                                                           119


Corollary 8.1.4. There exist bases (a)(n) and
                                                                
                       (b)(m) = g(a1 ) . . . g(ak ) bk+1 . . . bm ,

such that the matrix Gba = [gba
                             i j ] is diagonal in the sense that gi j = 0 for i = j.
                                                                  ba




Exercises

1. Give a proof of Corollary 8.1.3 of Theorem 8.1.2.
2. Give a proof of Corollary 8.1.4 of Theorem 8.1.2.
3. Let g : R3 → R3 , be defined by
                                           ⎛     ⎞⎛ ⎞
                                            233      x1
                             g(x) = (e)(3) ⎝0 5 7⎠ ⎝x2 ⎠
                                            698      x3


   (a) What is the rank of g?
   (b) Find a basis (a)(3) of vectors such that the matrix [g]a is diagonal.
4. Let g : R4 → R3 be a linear operator, and let
                                                     ⎛            ⎞
                                                        0 0 −4 3
                    g(e)(4) = (f)(3) [g](3,4) = (f)(3) ⎝−2 −1 −1 4⎠
                                                        3 1 −3 0

   where [g]3,4 is the matrix of g with respect to the standard basis (e)(4) of R4 and
   (f)(3) of R3 .
   (a) What is the rank of the matrix [g]3,4 , and what is the rank of g?
   (b) Find the bases (a)(4) and (b)(3) of vectors of R4 and R3 , such that the matrix
       [g]ba is diagonal.
5. Let g : R4 → R3 be a linear operator, and let
                                                    ⎛            ⎞
                                                       −2 −4 −4 0
                     g(e)(4) = (f)(3) [g]3,4 = (f)(3) ⎝ 0 0 −4 3⎠
                                                        4 0 0 3

   where [g](3,4) is the matrix of g with respect to the standard basis (e)(4) of R4 and
   (f)(3) is the standard basis of R3 .
   (a) What is the rank of the matrix [g](3,4) , and what is the rank of g?
   (b) Find a bases (a)(4) and (f)(3) of vectors of R4 and R3 , such that the matrix
       [g]ba is diagonal.
120                                                         8 Structure of a Linear Operator


8.2 Characteristic Polynomial

Let f : Rn → Rn be a linear transformation. The set of all such operators End(Rn ) are
called linear endomorphisms. We define a new auxiliary operator h ∈ End(Rn ) by
h(x) = f (x)− λ x where λ ∈ R. Recall (7.5) that det f = ∂(n) · f(n) . The characteristic
polynomial ϕ f (λ ) of f is defined by

                               ϕ f (λ ) = deth = ∂(n) · h(n)                          (8.1)

We directly calculate
                           
  ϕ f (λ ) = det h = ∂(n) · ( f (x1 ) − λ x1) ∧ · · · ∧ ( f (xn ) − λ xn)
                   
           = ∂(n) · f(n) − λ f(n−1) ∧ xn + λ 2 f(n−2) ∧ xn−1 ∧ xn + · · · + (−1)nλ n x(n)

          = ∂(n) · f(n) − λ ∂(n−1) · f(n−1) + λ 2 ∂(n−2) · f(n−2) + · · · + (−1)nλ n . (8.2)

The scalars ∂(k) · f(k) are called the scalar invariants of the operator f . Most widely
known are the trace ∂ · f = ∂x · f (x) and the determinant det f = ∂(n) · f(n) .
   The characteristic polynomial is a polynomial with real coefficients. Such a
polynomial will not necessarily have real roots. However, using Gauss’ fundamental
theorem of algebra, http://en.wikipedia.org/wiki/Fundamental theorem of algebra
we may always factor ϕ f (λ ) into a unique product of its distinct roots λi , called
the eigenvalues of f . Thus,
                                                r
                             ϕ f (λ ) = (−1)n ∏(λ − λi )ni .                          (8.3)
                                               i=1

Each distinct root λi ∈ C has algebraic multiplicity ni , and since ϕ f (λ ) is a real
polynomial, complex eigenvalues will always occur in conjugate pairs; if λi = xi +
iyi with yi = 0 is an eigenvalue with multiplicity ni , then λ i = xi − iyi will also be an
eigenvalue with the same multiplicity ni as λi .
    For each eigenvalue λi , det( f − λi ) = 0 guarantees the existence of a vector vi ∈
Cn , called a complex eigenvector of the operator f , with the property that

                             ( f − λi )vi = f (vi ) − λivi = 0,                       (8.4)

or equivalently, f (vi ) = λi vi . Since we began our discussion assuming that f ∈
End(Rn ), we are in the awkward situation of having to explain our acceptance of
complex eigenvalues and complex eigenvectors. The defensive explanation is that
we have no choice but to consider complex eigenvalues and their corresponding
complex eigenvectors because of the algebraic fact that polynomial equations over
the real numbers will not always have real roots, but will always have a complete
set of roots over the complex numbers.
   It is common practice to simply replace the real scalar field R with the complex
scalar field C and the real vector space Rn with the complex vector space Cn .
8.2 Characteristic Polynomial                                                            121


In a like manner, the real geometric algebra G(Rn ) can be “complexified” to give
the complex geometric algebra G(Cn ), where it is assumed that the complex scalars
commute with vectors and therefore do not affect the linearity of the inner and outer
product [10, 11]. We will leave the question about a geometric interpretation of i as
unresolved at this point, although one possibility is to assume that it is a bivector
from a larger geometric algebra [74]. In Chap. 10, i will be given an unambiguous
geometric interpretation in the appropriate geometric algebra.
     To clarify the issue, consider the following simple example. Let f ∈ End(R3 ) be
defined by f (x) = x · e12 so that f (e1 ) = e2 , f (e2 ) = −e1 , and f (e3 ) = 0. The matrix
[ f ] of f is given by
                                                 ⎛          ⎞
                                                     0 −1 0
                               f (e)(3) = (e)(3) ⎝1 0 0⎠ .
                                                     0 0 0

   Calculating the characteristic polynomial ϕ f (λ ) of f , we find
                                         ⎛        ⎞
                                          −λ −1 0
          ϕ f (λ ) = det ( f − λ ) = det ⎝ 1 −λ 0 ⎠ = −λ (λ − i)(λ + i),
                                           0 0 −λ

so the eigenvalues are λ1 = i, λ2 = −i, and λ3 = 0. The corresponding complex
eigenvectors are v1 = (i, 1, 0) = ie1 + e2 , v2 = (−i, 1, 0) = −ie1 + e2 , and v3 =
e3 , respectively. It is interesting to note that f (e1 ) = e1 e12 and f (e2 ) = −e2 e12 ,
opening up the possibility of giving i the geometric interpretation of the bivector
e12 the generator of rotations in the plane of e12 . This interpretation is not entirely
satisfactory because e12 anticommutes with all of the vectors in the plane of e12 , but
commutes with e3 . We defer further consideration of these issues until we resolve
them in Chap. 10.
    We now come to one of the most beautiful, famous, and important theorems in
linear algebra, known as the Cayley–Hamilton theorem after its discoverers. When
the author proved this theorem using geometric algebra as a Ph.D. student at Arizona
State University, he realized that geometric algebra has precisely the rich algebraic
structure necessary for the efficient expressions and proofs of the key theorems of
linear algebra [67]. The Cayley–Hamilton theorem tells us that if λ is replaced by
 f in (8.2), then we get the valid operator equation ϕ f ( f )(x) = 0 for all x ∈ Rn . In
this equation, 1 is treated as the identity operator on Rn , and powers f k of f are
interpreted as functional composition.
    The proof of the Cayley–Hamilton theorem follows directly from the identity

                ∂(k) · ( f(k) ∧ x) = ∂(k) · f(k) x − ∂(k−1) · ( f(k−1) ∧ f (x)),       (8.5)

for all x ∈ Rn . Choosing k = n in the equation above, and calculating recursively,
we get
122                                                              8 Structure of a Linear Operator


  0 = ∂(n) · ( f(n) ∧ x) = ∂(n) · f(n) x − ∂(n−1) · ( f(n−1) ∧ f (x))
      = ∂(n) · f(n) x − ∂(n−1) · f(n−1) f (x) + ∂(n−2) · ( f(n−2) ∧ f 2 (x)) = . . .

      = ∂(n) · f(n) x − ∂(n−1) · f(n−1) f (x) + ∂(n−2) · f(n−2) f 2 (x) + · · · + (−1)n f n (x)

for all x ∈ Rn .



Exercises

                                                                            11
1. Given the linear transformation defined by f (e)(2) = (e)(2)                .
                                                                            41
   (a) Find the characteristic polynomial of f . What are its eigenvalues?
   (b) Find the eigenvectors of f .
   (c) Verify that f satisfies its characteristic polynomial. What are the trace and
       determinant of f ?
                                                                ⎛            ⎞
                                                                   0 −2 −3
2. Given the linear transformation defined by f (e)(3) = (e)(3) ⎝−1 1 −1⎠.
                                                                   2 2 5
   (a) Find the characteristic polynomial of f . What are its eigenvalues?
   (b) Find the eigenvectors of f .
   (c) Verify that f satisfies its characteristic polynomial. What are the trace and
       determinant of f ?
3. (a) For a linear transformation f : R2 → R2 and h(x) = f (x) − λ x, carry out the
       calculation (8.2),

                           ϕ f (λ ) = ∂(2) · h(2) = ∂(2) · f(2) − λ ∂ · f + λ 2,

       for the characteristic polynomial of f .
   (b) Prove the Cayley–Hamilton theorem for f , that is,

                     0 = ∂(2) · ( f(2) ∧ x) = ∂(2) · f(2) x − (∂ · f ) f (x) + f 2 (x).



8.3 Minimal Polynomial of f

Let f ∈ End(Rn ), v ∈ Rn , and v = 0. Then for some integer s > 1,

                                  v ∧ f (v) ∧ · · · ∧ f s (v) = 0,                          (8.6)
8.3 Minimal Polynomial of f                                                          123


but v ∧ f (v) ∧ · · · ∧ f s−1 (v) = 0. Equation (8.6) implies that there exists a unique
monic polynomial ψv (λ ) of smallest degree s ≤ n, called the minimal polynomial of
v with respect to f , with the property that ψv ( f )(v) = 0. Whereas the polynomial
ψv (λ ) is a real polynomial, its roots may well be complex,
                                           k
                                ψv (λ ) = ∏(λ − βi )bi                             (8.7)
                                          i=1

where βi ∈ C and bi ∈ N. Since the minimal polynomial ψv (λ ) is of smallest degree
and since the characteristic polynomial ϕ f (λ ) given by (8.1) also annihilates v,
i.e., ϕ f ( f )v = 0 for each v ∈ Rn , it follows that ψv (λ )|ϕ f (λ ) for each v ∈ Rn ,
meaning that the polynomial ψv (λ ) divides the polynomial ϕ f (λ ) with 0 remainder.
This implies that βi = λi and bi ≤ ni . We also know that for each root λi of the
characteristic polynomial, there is a complex eigenvector (8.4) such that ( f − λi )ei =
0. Putting (8.7) and (8.4) together, it follows that the minimal polynomial ψ f (λ ) of
 f ∈ End(Rn ) is the unique monic polynomial of the form
                                           r
                               ψ f (λ ) = ∏(λ − λi )mi ,
                                          i=1

where 1 ≤ mi ≤ ni for each 1 ≤ i ≤ r.
  We now give the formal definition of the minimal polynomial ψ f (λ ) of f .
Definition 8.3.1. The minimal polynomial of f ∈ End(Rn ) is the unique monic
polynomial of smallest degree of the form
                                           r
                               ψ f (λ ) = ∏(λ − λi )mi ,
                                          i=1

where 1 ≤ mi ≤ ni for each 1 ≤ i ≤ r, which has the property that ψ f ( f )(x) = 0 for
all x ∈ Rn .
The minimal polynomial of f ∈ End(Rn ) can always be found by first calculating the
characteristic polynomial and then reducing the multiplicities ni of its eigenvalues
until the minimal values mi are found with the property that ψ f ( f )(x) = 0 for all
x ∈ Rn .



Exercises

1. Find the minimal polynomial for the following matrices:
            ⎛           ⎞
              3 2 2
   (a) T = ⎝ 1 4 1 ⎠.
              −2 −4 −1
124                                                       8 Structure of a Linear Operator

            ⎛     ⎞
           5 −6 −6
  (b) T = ⎝−1 4 2 ⎠.
           3 −6 −4
2. Let V be a vector space of finite dimension. Find the minimal polynomial for the
   identity and the zero operators on V.
3. In each case, find the minimal polynomial:
             ⎛      ⎞
               00c
   (a) T = ⎝1 0 b⎠.
               01a
             ⎛              ⎞
               1 1 0 0
             ⎜−1 −1 0 0⎟
   (b) T = ⎜ ⎝−2 −2 2 1⎠.
                            ⎟

             1 1 −1 0
            ⎛       ⎞
             0101
           ⎜1 0 1 0 ⎟
   (c) T = ⎜        ⎟
           ⎝0 1 0 1⎠.
             1010
4. Find a 3 × 3 matrix such that its minimal polynomial is x2 . How about for x3 ?
5. Show that

                  ψ (x) = xn + αn−1 xn−1 + αn−2 xn−2 + · · · + α1 x + a0 ,

   for α0 , α1 , . . . , αn−1 ∈ R, is the minimal polynomial for the matrix
                                 ⎛                          ⎞
                                   0   1 ·       ...    0
                                ⎜ 0    0 1 ...          0 ⎟
                                ⎜                           ⎟
                                ⎜                           ⎟
                       Aψ = det ⎜ ·    · ·        ·     · ⎟.
                                ⎜                           ⎟
                                ⎝ ·    · ·        ·     1 ⎠
                                  −α0 −α1 . . . −αn−2 −αn−1

   The matrix Aψ is called the companion matrix of the polynomial ψ (x).
6. Let P be an operator on Rn such that
                                          ⎛ ⎞
                                   ⎛ ⎞       x1
                                     x1   ⎜ x2 ⎟
                                   ⎜x ⎟ ⎜ ⎟
                                   ⎜ 2⎟ ⎜ · ⎟
                                   ⎜·⎟ ⎜ ⎟
                                   ⎜ ⎟ ⎜ ⎟
                                   ⎜ ⎟ ⎜·⎟
                                 P⎜ · ⎟ = ⎜ ⎟.
                                   ⎜ ⎟ ⎜ xk ⎟
                                   ⎜·⎟ ⎜ ⎟
                                   ⎜ ⎟ ⎜0⎟
                                   ⎝·⎠ ⎜ ⎟
                                          ⎝·⎠
                                     xn
                                             0
8.4 Spectral Decomposition                                                                        125


   Thus, P is the projection onto the first k components of the vector x.
   (a) What is the characteristic polynomial for P?
   (b) What is the minimal polynomial for P?
   (c) Find the matrix P.



8.4 Spectral Decomposition

Let f ∈ End(Rn ), and suppose that the minimal polynomial ψ (x) has been found,
                                                            r
                                             ψ (x) = ∏(x − xi )mi                                (8.8)
                                                           i=1

where the xi ∈ C are distinct, and that the algebraic multiplicities have been ordered
to satisfy
                                         1 ≤ m1 ≤ m2 ≤ · · · ≤ mr .
   In Chapter 1, for each polynomial of the form (8.8), we learned how to find a
spectral basis of the form

                             {s1 , q1 , . . . , q1mi −1 , . . . , sr , qr , . . . , qm
                                                                                     r
                                                                                       r −1
                                                                                            },
                                                      j h
where q0i = si (x) for i = 1, . . . , r and qi = (x − xi ) j si (x) = 0 for j = 1, . . . , mi − 1. We
can immediately apply this spectral basis to the linear operator f to find the spectral
basis of f by simply making the replacement x → f in the spectral basis of ψ (x).
Since ψ (x) is the minimal polynomial of f , the resulting spectral basis of operators

                             {p1 , q1 , . . . , q1mi −1 , . . . , pr , qr , . . . , qm
                                                                                     r
                                                                                       r −1
                                                                                            },

where pi = si ( f ), qi = qi ( f ) for i = 1, · · · , r, obeys exactly the same rules as the
algebra of modular polynomials modulo ψ (x).
   Applying the spectral decomposition formula (1.18) to the operator f gives the
corresponding spectral decomposition of f ,
                         r                                  r                         r
                  f = ∑ ( f − xi + xi )pi = ∑ (xi + qi )pi = ∑ xi pi + qi .                      (8.9)
                       i=1                                 i=1                       i=1

The reader may compare the spectral decomposition given here with that given by
Nering in [60, p.270].
   The following theorem summarizes the basic properties of a linear operator that
follow from its spectral decomposition (8.9).
Theorem 8.4.1. The spectral decomposition
                                                       r
                                               f = ∑ (xi + qi )pi ,
                                                     i=1
126                                                                8 Structure of a Linear Operator


of f ∈ End(Rn ) implies:
 (i) For each i = 1, 2, . . . , r, mi ≤ rank(qi ) + 1 ≤ ni , where ni ≡ rank(pi ). Also,
     ∑ri=1 ni = n.
(ii) The distinct eigenvalues of f are x1 , x2 , . . . , xr and deg(ψ (x)) ≤ n. The
     characteristic polynomial ϕ (x) of f is given by
                                                     r
                                          ϕ (x) = ∏(x − xi )ni
                                                    i=1

      where ni = rank(pi ).
(iii) f is diagonalizable iff m1 = m2 = · · · = mr = 1.
(iv) The minimal polynomial ψ (x) divides ϕ (x) (Cayley- Hamilton theorem).
Proof. (i) Let ni ≡ rank(pi ). Then n−ni = kernel(pi ) for each i = 1, 2, . . . , r. Since
     pi p j = 0 for i = j, it follows that

                                        n1 + n2 + · · · + nr = n.

        On the other hand, since pi qi = qi , it follows that rank(qi ) ≤ rank(pi ). Since
        qm
         i = 0, we can find a vector pi (a) = a with the property that
          i



                                    a ∧ qi (a) ∧ · · · ∧ qimi −1 (a) = 0.

        It follows from this that

                                 mi ≤ rank(qi ) + 1 ≤ rank(pi ) = ni .
                                  i −1                i −1
(ii) Note that for each i, f (qmi      (vi )) = xi qm
                                                    i      (vi ) for some pi (vi ) = vi . It follows
           mi −1
     that qi     (vi ) is an eigenvector of f with eigenvalue xi for i = 1, 2, . . . , r. Let
     us now calculate the characteristic polynomial ϕ (x) ≡ det(x − f ). We find that
                                                     r
                                         ϕ (x) = ∏(x − xi )ni .
                                                   i=1

(iii)   If mi = 1, then q1i = 0, for i = 1, . . . , r and
                                                         r
                                               f = ∑ xi p i ,
                                                    i=1

     so that f is diagonalizable.
(iv) We have seen from part (i) that mi ≤ ni for i = 1, 2, . . . , r. It follows from part
     (ii) that
                                               ψ (x)|ϕ (x).                                      

   Because the minimal polynomial, by part (iv) of the spectral decomposition
theorem, always divides the characteristic polynomial, one way of finding the
8.4 Spectral Decomposition                                                          127


minimal polynomial is to first calculate the spectral decomposition (8.9) of f using
the characteristic polynomial and then by trial and error calculate the minimal values
mi ≤ ni for which qm i = 0, for i = 1, . . . , r. Once again, we defer discussion of the
                       i

meaning of complex eigenvalues until Chap. 10.
   Let us see the spectral decomposition Theorem 8.4.1 in action. Suppose that the
linear operator f is specified by f (e)(4) = (e)(4) [ f ] for the matrix
                                      ⎛         ⎞
                                       10 2 3
                                      ⎜0 1 −1 2 ⎟
                                [f] = ⎜         ⎟
                                      ⎝0 0 1 1 ⎠ .
                                       0 0 0 −1

The characteristic polynomial of f is ϕ (λ ) = (λ + 1)(λ − 1)3 , and the minimal
polynomial of f is ψ (λ ) = (λ + 1)(λ − 1)2. Using the spectral basis for the minimal
polynomial calculated in (1.19) of Chap. 1, we find that the spectral basis for f is
                                                   ⎛            ⎞
                                                     0 0 0 −1
                               1                   ⎜0 0 0 − 5 ⎟
                        [p1 ] = ([ f ] − [1]4 )2 = ⎜          4⎟
                                                   ⎝0 0 0 − 1 ⎠ ,
                               4                              2
                                                     000 1
                                                            ⎛        ⎞
                                                              1001
                             1                              ⎜0 1 0 5 ⎟
                 [p2 ] = − ([ f ] − 3[1]4)([ f ] + [1]4 ) = ⎜      4⎟
                                                            ⎝0 0 1 1 ⎠ ,
                             4                                     2
                                                              0000

and
                                                          ⎛          ⎞
                                                           00 2 1
                        1                                 ⎜0 0 −1 − ⎟
                                                                   1
                 [q2 ] = ([ f ] − [1]4 )([ f ] + [1]4 ) = ⎜        2⎟
                                                          ⎝0 0 0 0 ⎠ .
                        2
                                                           00 0 0

In terms of the matrix [ f ] of f , the spectral decomposition of f is

                               [ f ] = −[p1 ] + [p2] + [q2]                      (8.10)

as can be easily checked.
   From the spectral decomposition (8.10) of [ f ], we can easily find a complete set
of eigenvectors for f . For the eigenvalue λ1 = −1, we have the column eigenvector
                                         ⎛ ⎞ ⎛ ⎞
                                           0    −1
                                         ⎜0⎟ ⎜− 5 ⎟
                              v1 = [p1 ] ⎜  ⎟ ⎜ 4⎟
                                         ⎝0⎠ = ⎝− 1 ⎠ .
                                                  2
                                           1     1
128                                                           8 Structure of a Linear Operator


For the eigenvalue λ2 = 1, we have the column eigenvectors
                           ⎛ ⎞ ⎛ ⎞                ⎛ ⎞ ⎛ ⎞
                             1    1                0      2
                           ⎜0⎟ ⎜0⎟                ⎜0⎟ ⎜−1⎟
                v2 = [p2 ] ⎜  ⎟ ⎜ ⎟               ⎜ ⎟ ⎜ ⎟
                           ⎝0⎠ = ⎝0⎠ , v3 = [q2 ] ⎝1⎠ = ⎝ 0 ⎠ .
                             0        0                   0            0

In addition, we have the generalized column eigenvector
                                            ⎛ ⎞ ⎛ ⎞
                                              0    0
                                            ⎜0⎟ ⎜0⎟
                                 v4 = [p2 ] ⎜  ⎟ ⎜ ⎟
                                            ⎝1⎠ = ⎝1⎠ .
                                              0    0

In the basis of column eigenvectors T = [v](4) of R4 , we find that
                                                ⎛            ⎞
                                                    −1 0 0 0
                                                  ⎜ 0 1 0 0⎟
                           [ f ]v = T −1 [ f ]T = ⎜          ⎟
                                                  ⎝ 0 0 1 1⎠ .
                                                    0 001



Exercises

1. Let f be a linear operator on R3 , specified by f (e)(3) = (e)(3) [ f ], where
                                          ⎛          ⎞
                                              1 −1 0
                                    [ f ] = ⎝−1 2 1⎠ .
                                              0 −1 1


   (a) Show that ϕ (x) = (x − 2)(x − 1)2 is the characteristic polynomial f .
   (b) What is the minimal polynomial ψ (x) of f ?
   (c) Find the spectral basis and the spectral decomposition of f .
   (d) What are the eigenvectors and eigenvalues of f ?
   (e) Can f be diagonalized?
2. Let f be a linear operator on R3 specified by
                                            ⎛       ⎞
                                               111
                                      [ f ] = ⎝1 1 1⎠ .
                                               113
8.4 Spectral Decomposition                                                      129


  (a) Show that ϕ (x) = x(x − 1)(x − 4) is the characteristic polynomial f .
  (b) What is the minimal polynomial ψ (x) of f ?
  (c) Find the spectral basis and the spectral decomposition of f .
  (d) What are the eigenvectors and eigenvalues of f ?
  (e) Can f be diagonalized?
3. (a) Find the companion matrix Ah(x) , defined in Problem 5 of Section 8.3, for
       the polynomial
                              h(x) = (x − 1)2(x + 1)2 .
  (b) Find the spectral basis and the spectral decomposition of Ah(x) .
  (c) What are the eigenvectors and eigenvalues of Ah(x) ?
  (d) Can Ah(x) be diagonalized?
  (e) Show that the characteristic polynomial and minimal are the same for Ah(x) .
4. Given the characteristic polynomials for the following matrices, find the minimal
   polynomials and spectral decompositions of these matrices.
                ⎛           ⎞
                   3 2 2
   (a) For F = ⎝ 1 4 1⎠, the characteristic polynomial is
                  −2 −4 1
       ϕ (x) = (x − 2)(x − 3 − 2i)(x − 3 + i).
                ⎛           ⎞
                  −1 1 −1
   (b) For F = ⎝ 2 0 −1⎠, the characteristic polynomial is
                   2 0 0
       ϕ (x) = (x − 1)(x − 1 + i)(x − 1 − i).
                ⎛             ⎞
                   0 0 −1 1
                ⎜ 1 0 0 1⎟
   (c) For F = ⎜              ⎟
                ⎝ 0 0 −1 1⎠, the characteristic polynomial is ϕ (x) = x .
                                                                           4


                  −1 0 0 1
5. Write down the minimal polynomial and spectral basis for the following
   matrices:
            ⎛         ⎞
              1 0 −1 1
            ⎜0 2 0 1⎟
   (a) T = ⎜⎝0 0 1 1⎠.
                      ⎟

              00 0 1
            ⎛      ⎞
              312
   (b) F = ⎝0 1 1⎠,
              001
           ⎛          ⎞
             0 0 −1 1
           ⎜0 2 0 1⎟
   (c) S = ⎜
           ⎝0 0 2 3⎠.
                      ⎟

             00 0 2
130                                                             8 Structure of a Linear Operator

                                                  ⎛  ⎞
                                              7 4 −4
6. Let f ∈ End(R3 ) be specified by [ f ] = ⎝ 4 −8 −1⎠.
                                             −4 −1 −8
   (a) Find the characteristic polynomial of f .
   (b) Find the spectral basis of f using the characteristic polynomial.
   (c) Using the spectral decomposition of f based on the characteristic polyno-
       mial, find the minimal polynomial of f .



*8.5 Jordan Normal Form

We show in this section how the Jordan normal form of a linear operator follows
from the spectral decomposition (8.9) of f [78]. Jordan form has been discussed
by many authors [15, p.197] [46]. The key idea is to understand the structure of
a nilpotent q with index(q) = m so that qm = 0, but qm−1 = 0. Our discussion is
similar to that given in [15, p.189]. See also [75, 76].
   We can assume that q0 = p = 1, where p is the identity operator on Rn . Since
q m−1 = 0, there exists a vector p(a) = a in Rn such that qm−1 (a) = 0, for otherwise
index(q) < m which would be a contradiction. This implies that

                 q(m−1) (a) ≡ a ∧ q(a) ∧ · · · ∧ qm−2 (a) ∧ qm−1 (a) = 0.               (8.11)

For if q(m−1) (a) = 0, there would exists scalars αi not all zero such that

                                       m−1
                                        ∑ αi qi (a) = 0.
                                        i=0


Multiplying this sum successively by qk , for k = m − 1, m − 2, . . . , 1 , shows that
each αi = 0, a contradiction. We say that the vectors

                                a, q(a), . . . , qm−2 (a), qm−1 (a)

make up an ascending Jordan chain with height m.
  More generally, we have the following:
Lemma 8.5.1. If qk1 −1 (a1 ) ∧ · · · ∧ qkr −1 (ar ) = 0 and qk1 (a1 ) = · · · = qkr (ar ) = 0,
then
                        q(k1 −1) (a1 ) ∧ · · · ∧ q(kr −1) (ar ) = 0.
Proof. Without loss of generality, we can assume that k1 ≥ · · · ≥ kr . Suppose now
that
                        k1 −1                      kr −1
                         ∑ α1i qi (a1) + · · · + ∑ αr j q j (ar ) = 0.
                         i=0                       j=0
*8.5 Jordan Normal Form                                                                   131


Applying qk1 −1 to both sides of this equation gives

                         α10 qk1 −1 (a1 ) + · · · + αr0 qkr −1 (ar ) = 0,

which implies that αs0 = 0 whenever ks = k1 . Successively applying
                                      qk1 −2 , . . . , q0 = 1,

to each side of the equation further reduces the equation until all αi j are shown = 0,
proving the linear independence of all the qi (a j ) and establishing the lemma.     
   Armed with the above lemma, we finish the construction by finding a set of
Jordan chains q(k1 −1) (a1 ), . . . , q(kr −1) (ar ) for the nilpotent q of index m = k1 which
make up a basis for the block p(Rn ) = Rn . This is equivalent to finding a set
of ascending Jordan chains, as given in the lemma, which satisfies the additional
restraint that n = ∑ri=1 ki . To see that this additional constraint can be satisfied, we
systematically calculate of the ranks

                         ni = rank(qm−i ) = n − dim(ker(qm−i ))

for i = 1, . . . , m. The successive ranks ni , in turn, determine the number of mountain
tops ri of ascending Jordan chains of height m − i.
   The following recursive relationships between ranks ni and the corresponding ri
easily follow:
                        n1 = rank(qm−1 ) = #(a1 , . . . , ar1 ) = r1 ,
                               n2 = rank(qm−2 ) = 2r1 + r2
                           n3 = rank(qm−3 ) = 3r1 + 2r2 + r3 ,

and more generally,
                     ns = rank(qm−s ) = sr1 + (s − 1)r2 + · · · + rs .

For s = m, we get the relationship

                   nm = rank(q0 ) = mr1 + (m − 1)r2 + · · · + rm = n.

Solving this system of equations for the numbers ri in terms of the ranks ni gives
the recursive mountain top formulas

                     r1 = n1 , r2 = −2n1 + n2, r3 = n1 − 2n2 + n3                      (8.12)

and more generally, r3+i = n1+i − 2ni+2 + ni+3 for i ≥ 1.
   The construction is illustrated in Fig. 8.1
   Since the problem of finding the Jordan normal form of a linear operator reduces
to finding the Jordan normal form of the nilpotents in its Jordan blocks, it is
worthwhile to consider an example of a nilpotent. Suppose that we are given the
nilpotent q(e)(5) = (e)(5) [q], where
132                                                                        8 Structure of a Linear Operator


                 qk1 −1          a1                          ar1
                 qk1 −2       a1 qa1                      ar1 qar1           ...
                 ..
                  .              ...            ...          ...
                  p      a1 qa1 . . . qk1 −1 a1     ar1 qar1 . . . qk1 −1 ar . . . ah1 . . . ah2
                        where h1 = r1 + · · · + rm−1 + 1 and h2 = r1 + · · · + rm .

Fig. 8.1 The operator qk1 − j on the left side of the figure operates on the vectors in the pyramids at
the same level to form a basis of the subspace qk1 − j (Rn ) and determines its rank. The first level of
the pyramids is q0 ≡ p. The rank of qk1 −1 is the number r1 of highest pyramids or mountain tops.
If the next highest mountain top is more than one unit lower, then rank(qk1 −2 ) = 2r1 . If there are
r2 mountain tops which are one unit lower, then rank qk1 −2 = 2r1 + r2


                                            ⎛              ⎞
                                            12 19 50 −28 2
                                          ⎜ 1 2 5 −2 0 ⎟
                                          ⎜                ⎟
                                          ⎜                ⎟
                                    [q] = ⎜ 4 5 14 −8 0 ⎟ .
                                          ⎜                ⎟
                                          ⎝ 14 20 54 −30 1 ⎠
                                            13 20 53 −30 2

We calculate
                                         ⎛               ⎞
                                          −3 −4 −11 6 0
                                         ⎜ 6 8 22 −12 0⎟
                                         ⎜               ⎟
                                         ⎜               ⎟
                                  [q]2 = ⎜−3 −4 −11 6 0⎟
                                         ⎜               ⎟
                                         ⎝−3 −4 −11 6 0⎠
                                          −6 −8 −22 12 0

and [q]3 = 0 so that index[q] = 3. We then calculate the ranks n1 = rank[q2 ] = 1 = r1 ,
n2 = rank[q] = 2r1 + r2 so that r2 = 1, and n3 = rank[q0 ] = 3r1 + 2r2 = 5. Choosing
a1 = e1 and a2 = e5 , then
                                                ⎛            ⎞
                                                 1 12 −3 0 2
                                                ⎜0 1 6 0 0⎟
                                             ⎜⎜
                                                             ⎟
                                                             ⎟
                       A = a1 qa1 q a1 a2 qa2 = ⎜0 4 −3 0 0⎟
                                   2
                                                ⎜            ⎟
                                                ⎝0 14 −3 0 1⎠
                                                 0 13 −6 1 2

is a lower Jordan chain of generalized eigenvectors for which
                                                           ⎛ ⎞
                                                   00000
                                                 ⎜1 0 0 0 0⎟
                                                 ⎜           ⎟
                                         −1      ⎜           ⎟
                                 [q]a = A [q]A = ⎜ 0 1 0 0 0 ⎟
                                                 ⎜           ⎟
                                                 ⎝0 0 0 0 0⎠
                                                   00010
*8.5 Jordan Normal Form                                                           133


is the (lower) Jordan normal form of the nilpotent q. If, instead, we choose the
generalized eigenvectors in reverse order,
                                           ⎛           ⎞
                                            −3 12 1 2 0
                                           ⎜ 6 1 0 0 0⎟
                      2                 ⎜⎜
                                                       ⎟
                                                       ⎟
                  B = q a1 qa1 a1 qa2 a2 = ⎜−3 4 0 0 0⎟ ,
                                           ⎜           ⎟
                                           ⎝−3 14 0 1 0⎠
                                            −6 13 0 2 1

we obtain a (upper) Jordan chain of generalized eigenvectors for which
                                                    ⎛   ⎞
                                              01000
                                            ⎜0 0 1 0 0⎟
                                            ⎜           ⎟
                                            ⎜           ⎟
                          [q]b = B−1 [q]B = ⎜ 0 0 0 0 0 ⎟
                                            ⎜           ⎟
                                            ⎝0 0 0 0 1⎠
                                              00000

is in (upper) Jordan normal form.
    We can now finish the construction of the Jordan normal form of a linear operator.

Theorem 8.5.2 (Jordan normal form). Given a linear operator f (e)(n) = (e)(n) [ f ]
on Rn , there exists a basis (a)(n) = (e)(n) A of Jordan chains for which f (a)(n) =
(a)(n) [ f ]a , where [ f ]a = A−1 [ f ]A is in Jordan normal form.
Proof. From the spectral decomposition of f , we know that
                                          r
                                   f = ∑ (xi + qi )pi .
                                        i=1

Let (a)(n) be a basis for Rn in which the operator

                                               r
                                       g = ∑ xi p i
                                              i=1

has the property that g(a)(n) = (a)(n) [g]a where D = [g]a is the diagonal matrix
whose elements are
                                                                      
                    diag(D) = x1 . . . x1 x2 . . . x2 . . . xr . . . xr .

We now use the construction given in the lemma to construct an ascending
Jordan basis of Jordan chains for each of the Jordan blocks pi , qi in the spectral
decomposition.
                                                                                 
134                                                         8 Structure of a Linear Operator


Exercises

For the matrices [ f ] given in Exercises 1–7, find the characteristic polynomial, the
minimal polynomial, and the spectral form of f . Find a Jordan basis B of generalized
eigenvectors of [ f ] for which [ f ]B = B−1 T B is in upper Jordan normal form.
           1 2
 1. T =              .
          −2 −1
          11
 2. T =         .
          11
           1 1
 3. T =              .
          −1 −1
         ⎛             ⎞
           −1 1 0
 4. T = ⎝ 0 −1 0 ⎠.
           0 0 −1
         ⎛       ⎞
           012
 5. T = ⎝0 0 0⎠.
           000
         ⎛       ⎞
           123
 6. T = ⎝0 4 5⎠.
           006
         ⎛            ⎞
           00100
         ⎜0 0 0 1 0⎟
         ⎜            ⎟
         ⎜            ⎟
 7. T = ⎜0 0 0 0 1⎟.
         ⎜            ⎟
         ⎝0 0 0 0 0⎠
           00000
 8. Let Poly4 [x] be the space of polynomials of degree ≤ 3,

                  Poly4 [x] = {a1 + a2x + a3x2 + a4x3 | a1 , a2 , a3 , a4 ∈ R.}

      We can represent a polynomial f (x) = a1 + a2 x + a3 x2 + a4 x3 by the column
                                  T                          
      vector (a)T(4) = a1 a2 a3 a4 so that f (x) = 1 x x2 x3 (a)T(4) . The derivative
                                                                                      
      operator is represented with respect to the standard basis Poly4 [x] = 1 x x2 x3
      by the matrix
                                          ⎛          ⎞
                                             0100
                                          ⎜0 0 2 0⎟
                                      D=⎜ ⎝0 0 0 3⎠ ,
                                                     ⎟

                                              0000
                              
      so that f (x) = 1 x x2 x3 D(a)T(4) . What is the Jordan form for the matrix D?
*8.5 Jordan Normal Form                                                       135


 9. Let A be a 5 × 5 complex matrix with characteristic polynomial ϕ (x) = (x −
    2)3 (x + 7)2 and minimal polynomial p = (x − 2)2 (x + 7). What is the Jordan
    form for A ?
10. Given the matrices

                     1 −1                1 −1                   1 −1
             R=           ,      S=           ,       T=
                    −12 2               −12 2                  −12 2


    (a) Find the spectral basis of each of these matrices.
    (b) Find a Jordan basis C of column vectors for each of these matrices.
    (c) Find the Jordan form for each of these matrices.
11. Given the matrices
                ⎛      ⎞            ⎛       ⎞              ⎛     ⎞
                 1 −1 1               6 −2 2               3 −1 1
            R = ⎝0 −1 0⎠ ,      S = ⎝ 1 2 0⎠ ,       T = ⎝ 1 1 0⎠
                 0 −1 0              −1 −2 0              −1 −1 0


    (a) Find the spectral basis of each of these matrices.
    (b) Find a Jordan basis C of column vectors for each of these matrices.
    (c) Find the Jordan form for each of these matrices.
                                                                  ⎛         ⎞
                                                                    1 −1 1 1
                                                                  ⎜0 1 1 0⎟
12. Given the minimal polynomial ψ (x) = x(x− 2)(x− 1)2 of T = ⎜  ⎝0 0 2 1⎠.
                                                                            ⎟

                                                                    0 0 00
    (a) Find the spectral basis for this matrix.
    (b) Find a Jordan basis C of column vectors this matrix.
    (c) Find the Jordan form of this matrix.
                                                                ⎛        ⎞
                                                                 1 0 0 −1
                                                                ⎜0 1 0 −1⎟
13. Given the minimal polynomial ψ (x) = x(x − 2)(x − 1) of T = ⎜        ⎟
                                                                ⎝0 0 2 1 ⎠.
                                                                   000 0
    (a) Find the spectral basis of this matrix.
    (b) Find a Jordan basis C of column vectors for this matrix.
    (c) Find the Jordan form for this matrix.
                                                                   ⎛    ⎞
                                                                  1010
                                                                ⎜0 1 1 0⎟
14. Given the minimal polynomial ψ (x) = (x − 2)(x − 1)2 of T = ⎜       ⎟
                                                                ⎝0 0 2 1⎠.
                                                                  0001
136                                                     8 Structure of a Linear Operator


    (a) Find the spectral basis for this matrix.
    (b) Find a Jordan basis C of column vectors for this matrix.
    (c) Find the Jordan form of this matrix.
                                                           ⎛        ⎞
                                                             1010
                                                           ⎜0 1 1 0 ⎟
15. Given the minimal polynomial ψ (x) = (x − 1)3 of T = ⎜          ⎟
                                                           ⎝0 0 1 1⎠.
                                                             0001
      (a) Find the spectral basis for this matrix.
      (b) Find a Jordan basis C of column vectors for this matrix.
      (c) Find the Jordan form of this matrix.
Chapter 9
Linear and Bilinear Forms




                              I am not for imposing any sense on your words: you are at
                              liberty to explain them as you please. Only, I beseech you, make
                              me understand something by them.
                                                                              –Bishop Berkeley



Geometric algebra is not used in this chapter. The material presented is closely
related to the material in Sect. 7.1 but represents a change of viewpoint. Instead
of talking about the reciprocal basis of a given basis, we introduce the concept of
a dual basis. The relationship between a bilinear and a quadratic form is discussed,
and Sylvester’s famous law of inertia is proven. The material lays the foundation for
studying geometric algebras of arbitrary signatures in later chapters.



9.1 The Dual Space

Let V = Kn be an n-dimensional vector space over the field K where K = R or
K = C the real or complex numbers.
Definition 9.1.1. A linear form is a function f : V → K which satisfies the property
that
                            f (α x + β y) = α f (x) + β f (y)

for all x, y ∈ V and α , β ∈ K.
The set V∗ of all linear forms,
                                  V∗ ≡ { f | f : V → K},
makes up an n-dimensional vector space, called the dual space of the vector
space V, with the operations of addition and scalar multiplication of forms f , g ∈ V∗
defined by

G. Sobczyk, New Foundations in Mathematics: The Geometric                                 137
Concept of Number, DOI 10.1007/978-0-8176-8385-6 9,
© Springer Science+Business Media New York 2013
138                                                                      9 Linear and Bilinear Forms


                                  ( f + g)(x) = f (x) + g(x)
for all x ∈ V and
                                         (α f )(x) = α f (x)

for all x ∈ V and all α ∈ K. Once a basis (e)(n) of V is chosen, a corresponding dual
basis (e)(n) of V∗ is defined by the requirement that

                                             ei (e j ) = δ ji                                 (9.1)

for all i, j = 1, 2, . . . , n, where δ ji is the Kronecker delta (δii = 1 and δ ji = 0 for i = j).
   Recall that a vector x ∈ V is a column vector
                                                 ⎛ ⎞
                                                   x1
                                                 ⎜ x2 ⎟
                                                 ⎜ ⎟
                                                 ⎜ ⎟
                                 x = (x)T(n) = ⎜ · ⎟ = (e)(n) (x)(n) ,
                                                 ⎜ ⎟
                                                 ⎝·⎠
                                                   xn

where xi ∈ K for i = 1, 2, . . . , n, and where the standard basis of column vectors ei
in (e)(n) is defined by
                           ⎛ ⎞             ⎛ ⎞              ⎛ ⎞
                               1             0                0
                           ⎜0⎟             ⎜1⎟              ⎜0⎟
                           ⎜ ⎟             ⎜ ⎟              ⎜ ⎟
                           ⎜ ⎟             ⎜ ⎟              ⎜ ⎟
                           ⎜0⎟             ⎜0⎟              ⎜·⎟
                      e1 = ⎜ ⎟ , e2 = ⎜ ⎟ , . . . , en = ⎜ ⎟ .
                           ⎜·⎟             ⎜·⎟              ⎜·⎟
                           ⎜ ⎟             ⎜ ⎟              ⎜ ⎟
                           ⎝·⎠             ⎝·⎠              ⎝0⎠
                               0             0                1

   Analogously, by the standard row basis (e)(n) of V∗ , we mean
                                     ⎛ ⎞
                                      e1
                                     ⎜e2 ⎟
                                     ⎜ ⎟
                                     ⎜ ⎟
                            (e)(n) = ⎜ · ⎟ = (e)T(n) ,
                                     ⎜ ⎟
                                     ⎝·⎠
                                      en

where
               e1 = (1     0 0         ...   0), e2 = (0         1   0   ...   0), . . . ,
                                  e = (0 0
                                   n
                                                      ...       0 1),

A row vector y ∈ V∗ can now be expressed as the linear combination of the standard
row basis vectors,
                         
                     y = y1 y2 . . . yn = (y)(n) (e)(n) .
9.1 The Dual Space                                                               139


   Since the dimension n of the column space V is equal to the dimension n of the
row space V∗ , the matrix multiplication of a row vector and a column vector can be
used to define the form f ∈ V∗ . Thus, we can think about the elements of the dual
space V∗ as row vectors,

                              ei = ei (e)(n) = (δ1i , . . . , δni ).

Similarly, we can write
                                        ei = (e)(n) ei

where ei ∈ V is the corresponding column vector in V.
  We have the following theorem:

Theorem 9.1.2. In terms of the dual basis (e)(n) of V∗ , the form f ∈ V∗ can be
written f = ∑ fi ei = ( f )(n) (e)(n) where ei (e j ) = δ ji and fi ∈ K, and

                                ( f )(n) = ( f1 , f2 , . . . , fn )

is the row vector of components of f with respect to (e)(n) .
Proof. Define fi ≡ f (ei ). Then
                                             
                       f (e)(n) = ( f e)(n) = f1          f2     ...   fn .

By using the linearity of f , we then find for x = (e)(n) (x)(n) ∈ V,

                                                                        n
                     f (x) = f (e)(n) (x)(n) = ( f )(n) (x)(n) = ∑ xi fi
                                                                       i=1

as required.                                                                       
                                                                                   
   From the last equation of the above proof, we see that the equation of an (n − 1)-
dimensional hyperplane passing through the origin of V, defined by the linear form
f ∈ V∗ , is given by
                                                          n
                           f (x) = ( f )(n) (x)(n) = ∑ xi fi = 0.               (9.2)
                                                         i=1

   Taking advantage of matrix notation, notice that the relationship between the
standard basis (e)(n) of V and the dual standard basis of V∗ can be expressed in the
form
                                    (e)(n) (e)(n) = [1]n

where [1]n is the n × n identity matrix.
140                                                               9 Linear and Bilinear Forms


Example: Let V = R3 be a 3 dimensional vector space over R with the standard
bases (e)(3) , and let (a)(3) = (e)(3) A be a second basis of V defined by
                                          ⎛      ⎞
                                          1 1 0
                                     A = ⎝1 −1 2 ⎠ .
                                          2 0 −1

Find the corresponding dual bases (a)(3) of V∗ in terms of the dual basis (e)(3) of V∗ .
Solution. The dual basis (a)(3) must satisfy the defining relationship

                          (a)(3) (a)(3) = A−1 (e)(3) (e)(3) A = [1]3 .

Thus, the problem has been reduced to finding the inverse of the matrix A,
                                         ⎛       ⎞
                                           1 1 2
                                       1
                                  A−1 = ⎝5 −1 −2⎠ .
                                       6
                                           2 2 −2

Whereas the column vectors of A define the vectors (a)(3) , the row vectors of A−1
define the corresponding dual vectors (a)(3) = (a)(3) (e)(3) .
   The above example shows how to change basis in the dual vector space V∗ . In
general, since
                          (a)(n) (a)(n) = [1]n = A−1 (e)(n) (e)(n) A,

it follows that
                                     (a)(n) = A−1 (e)(n) .

Given x ∈ V,

                  x = (e)(n) (x)(n) = (e)(n) AA−1 (x)(n) = (a)(n) A−1 (x)(n) .

     To express the linear form f ∈ V∗ in the dual basis (a)(n) , we write

             f (x) = f (e)(n) (x)(n) = f (e)(n) AA−1 (x)(n) = f (a)(n) A−1 (x)(n)

or
                                                        (n)
                                    f (x) = f (a)(n) (x)a ,
            (n)
where (x)a = A−1 (x)(n) .
9.1 The Dual Space                                                                    141


Exercises

1. Let V = V3 be a 3-dimensional vector space over R, and let (a)(3) = (e)(3) A
                                        ⎛       ⎞
                                          1 1 0
   be a basis of V where the matrix A = ⎝1 −1 2 ⎠ is the same as in the above
                                          2 0 −1
   example.
  (a) Let f = 5e1 − 3e2 + e3 . Find f in the dual basis (a)(3) .
  (b) Find a vector x ∈ V, x = 0, such that f (x) = 0.
  (c) Find f (2e1 − e2 + 3e3) and f (2a1 − a2 + 3a3).
2. Let f ∈ V∗ . Show that if f (x) = 0 for all x ∈ V, then f = 0.
3. For each x ∈ V, define f (x) = 2. Is f ∈ V∗ ? Justify your answer.
                          ⎛        ⎞
                             100
4. For the basis (a)(3) = ⎝1 1 0⎠ of V3 , find the corresponding dual basis (a)(3)
                             111
   of V∗ .                 ⎛           ⎞
                               1 0 −1
5. For the basis (a)(3) = ⎝−1 1 0 ⎠ of V3 , find the corresponding dual basis
                               0 1 1
   (a)(3) of V∗ .
6. Let R[x] denote the vector space of all polynomials over R. Determine which of
   the following are linear forms in the dual space R[x]∗ :
  (a) For g(x) ∈ R[x], define f (g(x)) = g(0) + g(1).
  (b) For g(x) ∈ R[x], define f (g(x)) = g(0).
  (c) For g(x) ∈ R[x], define f (g(x)) = 01 g(x)dx.
7. Let f ∈ V∗ the dual space of V = R3 . Show that the set of all points x ∈ R3 such
   that f (x) = 0 is a plane passing through the origin. Show this for the general case
   for f ∈ V∗ the dual space of V = Rn as stated in (9.2).
8. Let R[x]h(x) for h(x) = (x − 1)x2.
  (a) Show that {D0 } ≡ {D00 , D10 , 1/2D20} is a dual basis of R[x]∗h corresponding to
      the standard basis {x} = {1, x, x2 } of R[x]h , where Di0 g(x) = g(i) (0) is the ith
      derivative of g(x) ∈ R[x]h evaluated at x = 0.
  (b) Find the spectral basis {p1 , p2 , q2 } of R[x]h and the corresponding dual spec-
      tral basis of R[x]∗h . Finding the Lagrange–Sylvester interpolation polynomial
      of f (x) ∈ R[x] is equivalent to representing f (x) in terms of the spectral basis
      of R[x]h .
  (c) Find the matrix of transition between the standard basis and the spectral basis
      of R[x]h and the corresponding matrix of transition for the dual spectral basis.
  (d) Show that R[x]h ∗∗ ≡ R[x]h .
142                                                                 9 Linear and Bilinear Forms


9.2 Bilinear Forms

Let V = Rm and W = Rn be m- and n-dimensional vector spaces over the real
numbers R.
Definition 9.2.1. A bilinear form is a function b : V × W → R satisfying the
properties
 (i) b(α x + β y, z) = α b(x, z) + β b(y, z)
(ii) b(x, α w + β z) = α b(x, w) + β b(y, z)
for all scalars α , β ∈ R and vectors x, y ∈ V and w, z ∈ W.
   We begin the study of a bilinear form b by representing it in terms of a given
basis (e)(m) of V and (f)(n) of W. Letting x = (x)(m) (e)T(m) and y = (f)(n) (y)T(n) be
vectors in V and W expressed in the bases (e)(m) and (f)(n) , respectively, we find

             b(x, y) = (x)(m) b((e)T(m) , (f)(n) )(y)T(n) = (x)(m) (b)(m,n) (y)T(n)
where
                                 ⎛                                          ⎞
                                  b(e1 , f1 ) b(e1 , f2 ) . . . b(e1 , fn )
                                ⎜ b(e2 , f1 ) b(e2 , f2 ) . . . b(e2 , fn ) ⎟
                     (b)(m,n) = ⎜
                                ⎝ ...
                                                                            ⎟
                                                ...       ...      ... ⎠
                                 b(em , f1 ) b(em , f2 ) . . . b(em , fn )

is the matrix of the bilinear form b with respect to the basis (e)(m) of V and (f)(n)
of W.
    We now restrict attention to the case when V = W = Rn and (e)(n) = (f)(n) .
A bilinear form b, b : V × V → R, is said to be symmetric if b(x, y) = b(y, x)
for all vectors x, y ∈ V. Clearly, if b is a symmetric bilinear form, then its matrix
B = (b)(n,n) is a symmetric matrix, i.e., BT = B. Let us now see how the matrix
of a bilinear form transforms when we change from the basis (e)(n) to a new basis
(a)(n) = (e)(n) A.
    Recall that
                  x = (e)(n) (x)T(n) = (e)(n) AA−1 (x)T(n) = (a)(n) (xa )T(n)

where (xa )T(n) = A−1 (x)T(n) . Since real numbers commute with vectors, we can take
the transpose of this equation, getting
                          x = xT = (x)(n) (e)T(n) = (xa )(n) (a)T(n) ,
where
                         (xa )(n) = (x)(n) (A−1 )T = (x)(n) (AT )−1 .

   For the bilinear form b(x, y), we find

   b(x, y) = (x)(n) B(y)T(n) = (x)(n) (AT )−1 AT BAA−1 (y)T(n) = (xa )(n) Ba (ya )T(n)   (9.3)
9.2 Bilinear Forms                                                                                143


where Ba = AT BA. We have thus found the transformation rule Ba = AT BA for a
bilinear form. It is important to note that this rule is quite different from the rule
Ta = A−1 TA which we previously derived for the transformation of the matrix T
of a linear transformation. However, in the special case that AT = A−1 , the rules
become the same.
   A matrix A is called symmetric if AT = A where AT is the transpose of A. A
matrix S is said to be skew-symmetric if ST = −S. Two matrices S and T are said
to be similar if T = A−1 SA, and S and T are said to be congruent if T = AT SA for
some nonsingular matrix of transition A.
   The rank of a bilinear form is defined to be the rank of it’s matrix: rank(b) ≡
rank(B). Note that the rank of a bilinear form is independent of the choice of a
basis. A bilinear form b is nonsingular if rank(b) = dim(V), or, equivalently, if
det(B) = 0. Suppose that in some basis (a)(n) the matrix B has the diagonal form
                                          ⎛            ⎞
                                          β1 0 . . . 0
                                        ⎜0 β2 . . . 0⎟
                                   Ba = ⎜
                                        ⎝ · · ... · ⎠.
                                                       ⎟

                                          0 . . . 0 βn
                          
Then in the basis (a)(n) = a1 a2 . . . an

          b(x, y) = (xa )(n) Ba (ya )T(n) = β1 xa 1 ya 1 + β2 xa 2 ya 2 + · · · + βnxa n ya n ,

called the diagonal form of b(x, y). We will soon give a method for finding a basis
which diagonalizes a given bilinear form.


Exercises

 1. Show that it makes sense to take the transpose of a vector by verifying for
    x ∈ Rn ,
                                            n            n
                    x = (e)(n) (x)T(n) = ∑ ei xi = ∑ xi ei = (x)(n) (e)T(n) = xT .
                                           i=1          i=1

 2. Let the bilinear form b : R2 × R3 → R be defined by
                          b(x, y) = x1 y1 + 2x1 y2 − x2 y1 − x2 y2 + 6x1y3

    for
                                                                                    ⎛ ⎞
                                                                                     y1
                                          x1
          x = (e)(2) (x)T(2) = (e)(2)        ,      and y = (e)(3) (y)T(3) = (e)(3) ⎝y2 ⎠ .
                                          x2
                                                                                     y3

    Determine the 2 × 3 matrix B such that b(x, y) = (x)(2) B(y)T(3) .
144                                                       9 Linear and Bilinear Forms


 3. Show that if BT = B, then AT BA is symmetric for each matrix A. Also show that
    if B is skew-symmetric, then AT BA is also skew-symmetric.
 4. Express the matrix
                                      ⎛            ⎞
                                         1 2 3
                                 B = ⎝−1 2 5 ⎠
                                          2 −1 −2

    as the sum of a symmetric matrix and a skew-symmetric matrix.
 5. Show that if A = A(m,n) is an m × n matrix, then both AT A and AAT are
    symmetric matrices.
 6. Show that a skew-symmetric matrix A of odd order must be singular, i.e.,
    det A = 0.
 7. Let b : V × W → R be a bilinear form. Show that for each fixed a ∈ V, fa (y) =
    b(a, y) defines a linear form on W and thus fa ∈ V∗ .
 8. Show by an example that if A and B are symmetric 2 × 2 matrices, then AB may
    not be symmetric.
 9. Show that if BT = −B, then (x)(n) B(x)T(n) = 0 for all x = (e)(n) (x)T(n) ∈ Rn .
10. A square matrix P is said to be an idempotent or a projection if P2 = P. If in
    addition P = PT , then P is an orthogonal projection.
      (a) Give an example of a 2 × 2 matrix which is an idempotent.
      (b) Give an example of a 2 × 2 matrix which is an orthogonal projection.



9.3 Quadratic Forms

Given any bilinear form b(x, y) over the real numbers R, we can write
                 1                     1
       b(x, y) =     b(x, y) + b(y, x) + b(x, y) − b(y, x) = s(x, y) + t(x, y)
                 2                      2
                                                                         
where s(x, y) ≡ 2 b(x, y) + b(y, x) is the symmetric part and t(x, y) ≡ 12 b(x, y) −
                 1

b(y, x) is the skew-symmetric part.
Definition 9.3.1. By the quadratic form of a bilinear form b(x, y), we mean q(x) ≡
b(x, x).
We see that the quadratic form of a bilinear form b = s + t satisfies q(x) = s(x, x)
because t(x, x) = 0. Thus, we need only study quadratic forms of symmetric bilinear
forms. Conversely, given a quadratic form q(x), we can reconstruct the symmetric
bilinear form s(x, y) by writing

                           1
                   s(x, y) = q(x + y) − q(x) − q(y)
                           2
                           1
                          = b(x + y, x + y) − b(x, x) − b(y, y)
                           2
9.4 The Normal Form                                                             145


             1
            =  b(x, x) + b(x, y) + b(y, x) + b(y, y) − b(x, x) − b(y, y)
             2
             1
            = b(x, y) + b(y, x) .
             2


Exercises

1. Find the quadratic form q(x) = (x)(n) B(x)T(n) determined by the matrix
                                       ⎛     ⎞
                                      1 2 3
                                 B = ⎝−1 2 5 ⎠ .
                                      2 −1 −2

   Show that q(x) = (x)(3) S(x)T(3) for the symmetric matrix S = 12 (BT + B).
2. Find the symmetric matrix S representing each of the following quadratic forms
   q(x) = (x)(n) S(x)T(n) :

                                       x
   (a) q(x) = x2 + 6xy + 8y2 for x =     ∈ R2 .
                                       y
  (b) q(x) = 6xy + 4y2.
  (c) q(x) = x2 + 2xy + 4xz + 5y2 + yz + 9z2.
  (d) q(x) = 4xy.
  (e) q(x) = x2 + 6xy − 4y2 + 4xz + z2 − 4yz.
  (f) q(x) = x2 + 4xy + 9y2.
3. Write down the unique symmetric bilinear form determined by each of the
   quadratic forms given in Problem 2.
4. Show that the unique symmetric bilinear form of a quadratic form can be found
   by the formula
                                      
                         s(x, y) = 1/4 q(x + y) − q(x − y) .



9.4 The Normal Form

In this section, we show that the matrix of any symmetric bilinear form of a vector
space V over a field K can be diagonalized if the field K = Z2 .
Theorem 9.4.1. Given a symmetric bilinear form s(x, y) = (x)(n) S(y)T(n) on V, there
exists a basis (a)(n) = (e)(n) A of V such that Sa = AT SA is diagonal.
Proof. Let q(x) = s(x, x) be the associated quadratic form of the symmetric bilinear
form s(x, y). The proof is by induction on the dimension n of the vector space V.
146                                                               9 Linear and Bilinear Forms


If n = 1, then S = (s(e1 , e1 )) is a diagonal 1 × 1 matrix. Now assume true for n − 1.
If q(x) = 0 for all x ∈ V, there is nothing more to prove. So suppose that q(a1 ) =
α1 = 0 for some vector a1 ∈ V and define the linear form f1 (x) = s(x, a1 ). Recalling
(9.2),
                             H = {x ∈ V | f1 (x) = 0} ⊂ V

is the (n − 1)-hyperplane of the linear form f1 . Then s(x, y) is a symmetric bilinear
form when restricted to the (n − 1)-dimensional space H . Using the induction
hypothesis, we find a set of n − 1 vectors {a2 , . . . , an } for which s(ai , a j ) = δi j for
i, j = 2, 3, . . . , n. But also
                                     s(a1 , a j ) = δ1 j α1

for j = 1, . . . , n, so in the new basis A = (e)(n) A, the matrix
                                       ⎛              ⎞
                                        α1 0 . . . 0
                                       ⎜0 α    . . . 0⎟
                                       ⎜    2         ⎟
                                       ⎜              ⎟
                           Sa = A SA = ⎜ · · . . . · ⎟
                                 T
                                       ⎜              ⎟
                                       ⎝ · · ... · ⎠
                                        0 0 . . . αn

representing the symmetric bilinear form s(x, y) in the basis (a)(n) is diagonal.            
                                                                                             
   Note that the diagonal values αi s that we found in the above theorem are not
unique. We have the following:
Corollary 9.4.2. If the vector space V is over the real numbers R, then there exists
a basis in which the matrix of a symmetric bilinear form consists only of +1 s, −1 s,
or 0 s down the diagonal.
Proof. If αi = 0, define bi = √ai           and define bi = ai when αi = 0. Then in the
                                     |αi |
basis (b)(n) ,
                  ⎛                                  ⎞   ⎛                          ⎞
                      √1       0    ...      0               √1   0   ...   0
                 ⎜ |α1 | 1                           ⎟ ⎜ |α1 | 1                    ⎟
                 ⎜ 0 √         ... 0                 ⎟ ⎜ 0 √         ... 0          ⎟
                 ⎜       |α2 |                       ⎟ ⎜       |α2 |                ⎟
                 ⎜                                   ⎟ ⎜                            ⎟
            Sb = ⎜ ·     · ... ·                     ⎟ a⎜ ·
                                                      S        · ... ·              ⎟
                 ⎜                                   ⎟ ⎜                            ⎟
                 ⎜ ·     · ... ·                     ⎟ ⎜ ·     · ... ·              ⎟
                 ⎝                                   ⎠ ⎝                            ⎠
                   0     0 . . . √1                       0    0 . . . √1
                                             |αn |                          |αn |

                                     ⎛                   ⎞
                                       ±1 0 . . .  0
                                     ⎜ 0 ±1 . . .  0 ⎟
                                     ⎜                   ⎟
                                     ⎜                   ⎟
                                   = ⎜ · · ...      · ⎟.                                    
                                                                                            
                                     ⎜                   ⎟
                                     ⎝ · · ...      · ⎠
                                       0 0 . . . ±1 or 0
9.4 The Normal Form                                                                                                      147


    The following theorem tells in what way the diagonal representation of a
symmetric bilinear form or quadratic form is unique. It is known as Sylvester’s law
of inertia in honor of the mathematician who first discovered it. A diagonal basis can
always be arranged in such a way that the first p terms on the diagonal are positive,
followed by q diagonal terms which are negative, and the rest of the diagonal terms
are zero.
Theorem 9.4.3. Let q(x) be a quadratic form of a real vector space V = Rn . Let
p be the number of positive terms and q be the number of negative terms in the
diagonal representation matrix Q. Then in any other diagonal representation, p and
q are the same.
Proof. Let

     {a1 , . . . , a p , a p+1 , . . . , a p+q, . . . , an } and {b1 , . . . , bs , bs+1 , . . . , as+t , . . . , bn }
                                                  p
be two diagonal basis of q. For any x = 0, x = ∑i=1 αi ai , then q(x) > 0, and for any
y, y = ∑i=s+1 βi bi , q(y) ≤ 0. This implies that
        n


               (U = span{a1 , . . . , a p }) ∩ (W = span{bs+1 , . . . , bn }) = {0}.

Now dim(U) = p, dim(W) = n − s, and dim(U + W) ≤ n. It follows that

            p + (n − s) = dim(U) + dim(W) = dim(U + W) + dim(U ∩ W)

                                             = dim(U + W) ≤ n.
But this implies that p − s ≤ 0 or p ≤ s. Interchanging the order of the diagonal
basis (a)(n) and (b)(n) gives s ≤ p so that s = p. By a similar argument, it follows
that q = t.                                                                        
                                                                                   
   Given a symmetric bilinear form s(x, y) = (x)(n) S(y)T(n) , we now give a purely
algebraic method for completing the square, i.e., finding a basis (a)(n) = (e)(n) A for
which Sa = AT SA is diagonal. There are two cases that need to be considered:
1. If sii = s(ei , ei ) = 0, we can eliminate the variable xi from the quadratic form

                                                q(x) = (x)(n) S(x)T(n)

   by completing the square, defining

                                                           1       ∂q      2
                                                  qi =
                                                          4sii     ∂ xi
   and taking ri = q − qi.
2. If si j = s(ei , e j ) = 0 and sii = s j j = 0 for i = j, we can eliminate both of the
   variables xi and x j from the quadratic form

                                                q(x) = (x)(n) S(x)T(n)
148                                                                    9 Linear and Bilinear Forms


   by completing the square, defining
                                                                                  
                              1          ∂q    ∂q          2
                                                                 ∂q    ∂q     2
                      qi j =                 +                 −     −
                             8sii        ∂ xi ∂ x j              ∂ xi ∂ x j

   and taking ri j = q − qi j .
    The process is repeated on either the remainder ri or ri j until the remainder is
itself diagonalized. The diagonalized result is in the form

                             q = q1 + q2 + q34 + · · · + qkk+1 .

   The details of the above process are best exhibited by working through a couple
of examples.
Example 1. Consider

               q = (x)(n) S(x)T(n) = x21 + 4x1x2 + x22 + 4x1 x3 − 4x2x3 + x23

where
                                ⎛ ⎞                       ⎛   ⎞
                                  x1                   1 2 2
                            x = ⎝ x2 ⎠ ,          S = ⎝2 1 −2⎠ .
                                  x3                   2 −2 1

Solution. Since s11 = 1 = 0, define

                                  1    ∂q     2
                                                   1
                        q1 =                      = (2x1 + 4x2 + 4x3)2
                                  4    ∂ x1        4

Now define
                           r1 = q − q1 = −3(x22 + 4x2 x3 + x23 ).

Again, we have case 1, so we define

                                  −1     ∂ r1     2
                                                          −3
                         q2 =                         =      (2x2 + 4x3)2 .
                                  12     ∂ x2             4

Continuing, we next define
                                        r2 = r1 − q2 = 9x23

Since r2 is a perfect square, we set q3 = r2 , and we are done.
   It then follows that
                            1                      −3
          q = q1 + q2 + q3 = (2x1 + 4x2 + 4x3 )2 +    (2x2 + 4x3 )2 + 9x23
                            4                       4
9.4 The Normal Form                                                                 149


To find A−1 , we take the coefficients of the xi ’s in the completed squares, getting
                                          ⎛            ⎞
                                          2 4         4
                                   A−1 = ⎝0 2         4⎠ ,
                                          0 0         1

and find
                                        ⎛       ⎞
                                         1 −2 4
                                      1⎝
                                   A=    0 1 −4⎠ .
                                      2
                                         0 0 2

Finally, we calculate
                                         ⎛         ⎞
                                          1/4 0 0
                                 AT SA = ⎝ 0 −3/4 0⎠ .
                                           0  0 9

Note that the diagonal elements of this matrix are the coefficients of the completed
squares in the final expression for q.
Example 2. Consider

           q = (x)(n) S(x)T(n) = 2x1 x2 + 4x1x3 + 2x2 x3 + 6x1x4 + 4x2 x4 + 2x3x4

where
                            ⎛ ⎞                   ⎛             ⎞
                              x1              0        1   2   3
                            ⎜ x2 ⎟          ⎜1         0   1   2⎟
                          x=⎜    ⎟
                            ⎝ x3 ⎠ ,      S=⎜
                                            ⎝2
                                                                ⎟.
                                                       1   0   1⎠
                                 x4           3        2   1   0

Solution. Since s11 = 0 = s22 and s12 = 1, we have case 2. Thus, define
                                                              
                       1       ∂q     ∂q 2       ∂q     ∂q 2
               q12 =               +         −       −
                      8s12     ∂ x1 ∂ x2         ∂ x1 ∂ x2

            1
           = {−(−2x1 + 2x2 + 2x3 + 2x4)2 + (2x1 + 2x2 + 6x3 + 10x4)2 },
            8
and let
                         r12 = q − q12 = −4(x23 + 3x3 x4 + 3x24),

which is a case 1. Thus, we now define

                                 −1   ∂ r12   2
                          q3 =                    = −(2x3 + 3x4)2 ,
                                 16   ∂ x3
150                                                         9 Linear and Bilinear Forms


and
                                r3 = r12 − q3 = −3x4

Since r3 is a perfect square, we let q4 = r3 and we are done. Thus, we have found

                   1
q = q12 + q3 + q4 = {−(−2x1 + 2x2 + 2x3 + 2x4)2 + (2x1 + 2x2 + 6x3 + 10x4)2 }
                   8
                         − (2x3 + 3x4)2 − 3x4

   To find A−1 , we take the coefficients of xi ’s in the completed squares, getting
                                     ⎛                   ⎞
                                       −2 2 2 2
                                     ⎜ 2 2 6 10 ⎟
                             A−1 = ⎜ ⎝ 0 0 2 3 ⎠,
                                                         ⎟

                                        0 0 0 1

and find
                                     ⎛       ⎞
                                   −1 1 −2 −2
                                1 ⎜ 1 1 −4 0 ⎟
                              A= ⎜           ⎟.
                                4 ⎝ 0 0 2 −6⎠
                                    0 0 0 4

Finally, we calculate
                                    ⎛            ⎞
                                     −1/8 0 0 0
                                   ⎜ 0 1/8 0 0 ⎟
                           AT SA = ⎜
                                   ⎝ 0
                                                 ⎟.
                                          0 −1 0 ⎠
                                      0   0 0 −3

Note that the diagonal elements of this matrix are the coefficients of the completed
squares in the final expression for the quadratic form q(x).
Definition 9.4.4. The numbers (p, q, n − p − q), where p is the number of positive
terms, q is the number of negative terms, and n − p − q is the number of zeros along
the diagonal representation AT SA, are called the signature of the quadratic form
q(x) = s(x, x) defined by the matrix S. The quadratic form q(x) is said to be positive
definite if p = n, negative definite if q = n, and indefinite if p + q = n for nonzero p
and q. If p + q < n, the quadratic form is said to be degenerate.



Exercises

1. Reduce each of the following symmetric matrices S to diagonal form Sa by
   finding a basis (a)(n) = (e)(n) A such that Sa = AT SA is diagonal.
9.4 The Normal Form                                                                 151

       ⎛        ⎞
        1 3 3
  (a) ⎝3 1 −1⎠ .
        3 −1 1
      ⎛         ⎞
        1 2 3
  (b) ⎝2 0 −1⎠ .
        3 −1 1
      ⎛            ⎞
         0 1 −1 2
      ⎜ 1 1 0 −1⎟
  (c) ⎜            ⎟
      ⎝−1 0 −1 1 ⎠ .
         2 −1 1 0
      ⎛        ⎞
        0134
      ⎜1 0 1 3 ⎟
  (d) ⎜        ⎟
      ⎝3 1 0 1 ⎠ .
        4310
2. Determine the rank and signature of each of the quadratic forms in Problem 1.
3. Show that the quadratic form q(x) = ax2 + bxy + cy2 is positive definite if and
   only if a > 0 and b2 − 4ac < 0.
4. Show that if S is a real symmetric positive definite matrix, then there exists a real
   nonsingular matrix A such that S = AT A. (A matrix S is said to be positive definite
   if the quadratic form defined by S is positive definite.)
5. Show that if A is a real matrix and detA = 0, then AT A is positive definite.
6. Show that if A is a real matrix, then AT A is nonnegative semidefinite.
7. Show that if A is a real matrix and AT A = 0, then A = 0.
Chapter 10
Hermitian Inner Product Spaces




                                  One cannot escape the feeling that these mathematical formulae
                                  have an independent existence and an intelligence of their own,
                                  that they are wiser than we are, wiser even than their
                                  discoverers, that we get more out of them than we originally put
                                  into them.
                                                                                 —Heinrich Hertz



In the last chapter, we discovered that the positive definite quadratic form (3.28)
used to define the inner product of the Euclidean space Rn , and the corresponding
geometric algebra Gn = G(Rn ), is only one of the many possible quadratic
forms. We now introduce the pseudo-Euclidean space R p,q of a general indefinite
quadratic form q(x) and the corresponding geometric algebra G p,q = G(R p,q ).
More generally, we introduce the unitary geometric algebra U p,q = U(H p,q ) of
the Hermitian space H p,q . The complexification
                                    √                is obtained by assuming the
existence of a new square root i = −1 which anticommutes with all the vectors
of the given geometric algebra. Hermitian inner and outer products reduce to the
standard inner and outer products for real multivectors. Hermitian spaces, and
their corresponding unitary geometric algebras, resolve the problem of complex
eigenvalues and eigenvectors. The spectral decompositions of Hermitian, normal,
and unitary operators are derived, and we give a treatment of polar and singular
value decompositions.1




1 This chapter is based upon articles by the author that appeared in the College Mathematics Journal

[77] and in Advances in Applied Clifford Algebras [90].

G. Sobczyk, New Foundations in Mathematics: The Geometric                                       153
Concept of Number, DOI 10.1007/978-0-8176-8385-6 10,
© Springer Science+Business Media New York 2013
154                                                      10 Hermitian Inner Product Spaces


10.1 Fundamental Concepts

The n-dimensional pseudo-Euclidean space R p,q of an indefinite quadratic form
q(x) with signature (p, q), where n = p + q, is characterized by the property that
for each x ∈ R p,q ,
                                    x2 = x · x = q(x).                                 (10.1)
A standard orthonormal basis (e)(p+q) = (e1 , e2 , . . . , e p+q   ) of R p,q has the property
that
                  e21 = · · · = e2p = 1, and e2p+1 = · · · = e2p+q = −1,               (10.2)
and the basis vectors are mutually anticommuting. In terms of this basis, any x ∈
R p,q has the form
                                                    ⎛ ⎞
                                                      e1
                                                    ⎜e ⎟
                                                   ⎜
                                                   ⎜ 2⎟ ⎟
                                                            n
               x = (x)(n) (e)T(n) = x1 x2 · · · xn ⎜ · ⎟ = ∑ x j e j ,
                                                    ⎜ ⎟ j=1
                                                    ⎝·⎠
                                                      en

and if y = (y)(n) (e)T(n) ∈ R p,q is a second such vector, then the inner product x · y for
x, y ∈ R p,q is given by
      1
 x·y = [q(x+y)−q(x)−q(y)] = x1 y1 +· · ·+x p y p −x p+1 y p+1 −· · ·−xn yn . (10.3)
      2
   In Chap. 7, the standard basis (e)(n) and the reciprocal basis (e)(n) of Rn are
related by the formula (7.9), and we are able to identify ei = ei for 1 ≤ i ≤ n. The
relationship between the standard basis (e)(n) and its reciprocal basis (e)(n) of R p,q
is more complicated. In this case, we have

                                 ei       ei if 0 ≤ i ≤ p
                        ei =           =                      .                        (10.4)
                               ei · ei   −ei if p < i ≤ p + q

As we see below, the relationship (10.4) changes the way we defined the vector
derivative (3.46) in Chap. 3.
   In R p,q , we must carefully distinguish between the column reciprocal basis (e)(n)
defined by (10.4) and the column (e)T(n) of the standard basis (e)(n) . They are
related by
                                 ⎛ ⎞          ⎛ ⎞
                                   e1           e1
                                 ⎜ e2 ⎟       ⎜e ⎟
                                 ⎜ ⎟          ⎜ 2⎟
                                 ⎜ ⎟          ⎜ ⎟
                        (e)(n) = ⎜ · ⎟ = [g] ⎜ · ⎟ = [g](e)T(n) ,              (10.5)
                                 ⎜ ⎟          ⎜ ⎟
                                 ⎝·⎠          ⎝·⎠
                                   en           en
10.1 Fundamental Concepts                                                                    155


where

        [g] = (e)T(n) · (e)(n) = [ei · e j ] and (e)(n) · (e)(n) = [ei · e j ] = [1]n .    (10.6)

The metric tensor [g] of R p,q is the diagonal matrix with the first p entries +1 and
the remaining q entries −1, and [1]n is the identity n × n matrix.
   In terms of the orthonormal and reciprocal bases (e)(n) and (e)(n) , related
by (10.5), any vector x ∈ R p,q can be expressed by
                                                  n
                          x = (x)(n) (e)(n) = ∑ xi ei = (e)(n) (x)(n) ,                    (10.7)
                                                 i=1

where xi = x · ei and xi = ei · x for i = 1, . . . , n. If y = (e)(n) (y)(n) is a second such
vector, then in agreement with (10.3), the inner product between them is
                                       n
                             x · y = ∑ xi yi
                                      i=1

                                   = (x)(n) (y)(n) = (x)(n) [g](y)T(n)                     (10.8)

where n = p + q. Because of the indefinite signature of the quadratic form, a vector
x ∈ R p,q can have negative square, x2 = x · x < 0. For this reason, we define the
magnitude |x| = |x2 | ≥ 0. Contrast this with the definition (3.28) in Chap. 3.
In (3.44), we defined the magnitude of a k-vector to be always nonnegative.
   Let (a)(n) be a second basis of R p,q . Then

                        (a)(n) = (e)(n) A, ⇐⇒ (a)T(n) = AT (e)T(n) ,                       (10.9)

where A is the matrix of transition from the standard basis (e)(n) of R p,q to the basis
(a)(n) of R p,q .
   The real associative geometric algebra G p,q = G(R p,q ) is generated by the
geometric multiplication of the vectors in R p,q , subjected to the rule that x2 =
q(x) = x · x for all vectors x ∈ R p,q . Just as for the geometric algebra Gn of the
Euclidean space Rn , see (3.30), the dimension of G p,q as a real linear space is 2n ,
where n = p + q, with the standard orthonormal basis of geometric numbers

                                    G p,q = span{eλ(k) }nk=0 ,                            (10.10)

              n
where the       k-vector basis elements of the form eλ(k) are defined by
              k
                                  eλ(k) = eλ1 ...λk = eλ1 · · · eλk

for each λ(k) = λ1 , . . . , λk where 1 ≤ λ1 < · · · < λk ≤ n. When k = 0, λ(0) = 0 and
e0 = 1.
156                                                      10 Hermitian Inner Product Spaces


   The vector derivative with respect to the vector x ∈ R p,q , given in (10.7), is
defined by
                                 n             n
                                                   ∂
                          ∂x = ∑ ei ei · ∂x = ∑ ei i .                     (10.11)
                                i=1           i=1 ∂ x
This is the same definition as given for the vector derivative (3.46) in Rn , except that
we must strickly use the raised indices because of the indefinite metric.
   All of the algebraic and differential identities derived in Chap. 3 for the geometric
algebra Gn remain valid in the geometric algebra G p,q , with the single exception of
differential identities involving the derivative of the |x|, given in (3.53). In R p,q , the
identity (3.53) must be modified to read
                                                            
                                        |x| = x̂ if x ≥ 0
                                         x            2
                           ∂x |x| =                            ,                  (10.12)
                                      − |x|
                                         x
                                            = −x̂ if x2 < 0

as easily follows by differentiating |x|2 and noting that

                                          x2 if x2 ≥ 0
                                |x|2 =                  .
                                          −x2 if x2 < 0



Exercises

1. Let (e)(4) = (e1 , e2 , e3 , e4 ) be an orthonormal basis and let a = (1, 2, −1, 0)(e)T(4)
   and b = (2, 5, −1, 1)(e)T(4).

   (a) Compute a · b in R4 .
   (b) Compute a · b in R3,1 .
   (c) Compute a · b in R2,2 .
   (d) Compute a · b in R1,3 .
   (e) Compute a · b in R0,4 .
2. Write down the standard orthonormal basis (10.10) for each of the geometric
   algebras in Problem 1.
3. (a) Show that |a + b|2 + |a − b|2 = 2|a|2 + 2|b|2 in Rn .
   (b) Show by an example that the identity given in part (a) is not true in R1,1 .
4. Let (e)(3) = (e1 , e2 , e3 ) be an orthonormal basis and let a = (1, 2, −1)(e)T(3) ,
   b = (2, 5, −1)(e)T(3) , and c = (2, 1, 2)(e)T(3) .

   (a) Compute a · (b ∧ c) in R3 .
   (b) Compute a · (b ∧ c) in R2,1 .
   (c) Compute a · (b ∧ c) in R1,2 .
   (d) Compute a · (b ∧ c) in R0,3 .
5. Prove the differential identity (10.12) and find the corresponding differential
   identiy for a · ∂x |x|.
10.2 Orthogonality Relationships in Pseudo-Euclidean Space                                   157


10.2 Orthogonality Relationships in Pseudo-Euclidean Space

We now generalize the basic orthogonality relationships that we found for the
Euclidean space Rn in Chap. 7 to the pseudo-Euclidean space R p,q , utilizing the
tools of its geometric algebra G p,q = G(R p,q). Later, we shall generalize them even
further to apply to unitary spaces.
   Two vectors a, b ∈ R p,q are said to be orthogonal in R p,q if a · b = 0. One of the
basic tasks is given a basis (a)(n) of non-null vectors in R p,q to find a closely related
orthogonal basis (b)(n) of R p,q which satisfies the following two conditions:

                          bi · b j = 0 and b1 ∧ · · · ∧ bk = a1 ∧ · · · ∧ ak ,            (10.13)

for each 1 ≤ i < j ≤ n and 1 ≤ k ≤ n. By a non-null vector, we mean any vector
v ∈ R p,q such that v2 = 0.
   This task is immediately completed in almost the same way as for Euclidean
spaces, given in (7.14), by the following recursive construction:

                                                      b†(k−1) · (b(k−1) ∧ ak )
                            b1 = a1 , and bk =                                   ,        (10.14)
                                                           b†(k−1) b(k−1)

for all k such that 1 < k ≤ n. Note, since the b j ’s are orthogonal,

                       b†(k−1) b(k−1) = bk−1 · · · b1 b1 · · · bk−1 = b21 · · · b2k−1 .

The above construction is often called the Gram-Schmidt orthogonalization process
[27, p.369].
   Let f be the linear operator which takes the basis (a)(n) into the basis (b)(n) , i.e.,
f (a)(n) = (a)(n) [ f ] = (b)(n) where [ f ] is the matrix of f with respect to the basis
(a)(n) . We can solve this relationship directly for the matrix [ f ]. Using the fact that
(b−1 )T(n) · (b)(n) is the identity n × n matrix, we get
                                              ⎛ −1                   ⎞−1
                                               b · a1 . . . b−1
                                                              1 · an
                                         −1 ⎜ 1
                                                  ... ... ... ⎟
              [ f ] = (b−1 )T(n) · (a)(n)    =⎜
                                              ⎝ ... ... ... ⎠ ,
                                                                     ⎟

                                               b−1            −1
                                                n · a1 . . . bn · an

where b−1
               b
       j = b2 for j = 1, . . . , n.
            j
                   j
   By the Gram matrix of the basis (a)(n) , we mean the matrix
                                         ⎛                        ⎞
                                            a1 · a1 . . . a1 · an
                                         ⎜ ... ... ... ⎟
                  A = (a)T(n) · (a)(n) = ⎜
                                         ⎝ ... ... ... ⎠.
                                                                  ⎟                       (10.15)
                                            an · a1 . . . an · an
     http://en.wikipedia.org/wiki/Gramian matrix
158                                                                10 Hermitian Inner Product Spaces


     But the relationship

                      (a)(n) [ f ] = (b)(n)      ⇐⇒         [ f ]T (a)T(n) = (b)T(n)

implies that

                   [ f ]T A[ f ] = [ f ]T (a)T(n) · (a)(n) [ f ] = (b)T(n) · (b)(n) = B

where B is the diagonal Gram matrix of the orthogonal basis (b)(n) . Thus, we
have diagonalized the quadratic form defined by the matrix A. Since the relation-
ship (10.13) implies that det[ f ] = 1, it also follows that det A = det B. Of course,
the signature of the quadratic form of the matrix A is the same as signature of
the quadratic form defined by the matrix B. This is just Sylvester’s law of inertia
Theorem 9.4.3 and is the same as the signature of R p,q .
   Let (e)(n) be the standard basis of R p,q and let f (e)(n) = (e)(n) [ f ] define a
nonsingular linear transformation on R p,q in terms of its matrix [ f ]. We have the
following important
Definition 10.2.1. A nonsingular linear transformation f is said to be an orthogonal
transformation on R p,q if f (x) · f (y) = x · y for all x, y ∈ R p,q .
In terms of the matrix [ f ] of f in the standard basis (e)(n) , we find that for an
orthogonal transformation on R p,q ,

                             f (e)T(n) · f (e)(n) = (e)T(n) · (e)(n) = [g],

or
                       [ f ]T [g][ f ] = [g]    ⇐⇒         [ f ]T = [g][ f ]−1 [g].         (10.16)
An orthogonal transformation on R p,q is often called an isometry on R p,q .
  The Gram determinant of the basis (a)(n) is defined to be the determinant of the
Gram matrix A of (a)(n) . We have

                            det A = det[(a)T(n) · (a)(n) ] = a†(n) · a(n),                  (10.17)

where a†(n) = an ∧ an−1 ∧ · · · ∧ a1 is the reverse of the pseudoscalar a(n) . Again,
because of the properties (10.13) of the related basis (b)(n) , it follows that in the
geometric algebra G(R p,q ),

                               a†(k) · a(k) = b†(k) · b(k) = b21 · · · b2k ,

for 1 ≤ k ≤ n. In the case when n = 2, we have

               a†(2) · a(2) = (a2 ∧ a1 ) · (a1 ∧ a2 ) = a21 a22 − (a1 · a2 )2 = b21 b22 ,
10.2 Orthogonality Relationships in Pseudo-Euclidean Space                           159


but we no longer have the Schwarz inequality (7.15) that we had in Rn .
   When the Gram determinant of the Gram matrix A = (a)T(n) · (a)(n) is nonzero, the
vectors (a)(n) form a basis of R p,q . In this case, the corresponding reciprocal basis
(a)(n) of R p,q is defined by
                                   (a)(n) = A−1 (a)T(n) ,                         (10.18)

as easily follows from the relationship [1]n = A−1 A = (A−1 (a)T(n) ) · (a)(n) .
   We shall generalize these fundamental results to the unitary geometric algebra
U p,q of the unitary space H p,q in the next section.



Exercises

 1. Prove the relationship (10.18) by showing that
                                                           
                   A−1 (a)T(n) · (a)(n) = A−1 (a)T(n) · (a)(n) = A−1 A = [1]n .

 2. Let (e)(3) = (e1 , e2 , e3 ) be the standard orthonormal basis and let (a)(3) =
           ⎛          ⎞
             1 2 −1
    (e)(3) ⎝2 5 −2⎠ be the second basis. Using (10.14), find the corresponding
             1 −1 1
    orthogonal basis (b)(3) satisfying (10.13) in each of the following pseudo-
    Euclidean spaces:
    (a) In R3
    (b) In R2,1
    (c) In R1,2
    (d) In R0,3
 3. Let (e)(3) = (e1 , e2 , e3 ) be the standard orthonormal basis and let (a)(3) =
           ⎛          ⎞
             1 2 −1
    (e)(3) ⎝2 5 −2⎠ be the second basis. Using (10.18), find the corresponding
             1 −1 1
    reciprocal basis (a)(3) to (a)(3) in each of the following pseudo-Euclidean
    spaces:
    (a) In R3
    (b) In R2,1
    (c) In R1,2
    (d) In R0,3
160                                                             10 Hermitian Inner Product Spaces


 4. Let W be the subspace spanned by
                                                     ⎛       ⎞
                                                      0 0 −3
                                                    ⎜1 5 −3⎟
                                    (a)(4) = (e)(4) ⎜        ⎟
                                                    ⎝1 −3 5 ⎠ ,
                                                      0 −2 7

      where (e)(4) is the standard orthonormal basis.
      (a) Find an orthogonal basis for the subspace W in the pseudo-Euclidean
          space R4 .
      (b) Find an orthogonal basis for the subspace W in the pseudo-Euclidean
          space R0,4 .
      (c) Find an orthogonal basis for the subspace W in the pseudo-Euclidean
          space R3,1 .
      (d) Find an orthogonal basis for the subspace W in the pseudo-Euclidean
          space R2,2 .
       e) Find an orthogonal basis for the subspace W in the pseudo-Euclidean
          space R1,3 .
 5. Show that if |x| = |y| for vectors x, y ∈ R p,q , then in general it is no longer true
    that x + y and x − y are orthogonal. Give an example.
 6. Let x = (e)(n) (x)(n) where (e)(n) is an orthonormal basis of R p,q . Show that

                                          (x)(n) = (e)(n) · x

    or xi = eeii·e·xi = ei · x for i = 1, 2, . . . , n.
 7. Let (e)(n) be an orthonormal basis of the n-dimensional space R p,q and let f :
    R p,q → R p,q be a linear operator. Show that the matrix [ f ] = ( f ji ) of f , with
    respect to the basis (e)(n) , is defined by f (e)(n) = (e)(n) [ f ] or

                                        [ f ] = (e)(n) · f (e)(n) ,

      where
                    ei · f (e j )   ei · f (e j ) for 1 ≤ i ≤ p 1 ≤ j ≤ n
           f ji =                 =                                        = ei · f (e j ),
                      ei · ei       −ei · f (e j ) for p < i ≤ n 1 ≤ j ≤ n

    and n = p + q.
 8. Given (b)(n) = (a)(n)          in R p,q , where (b)(n) is defined in (10.14). Show that

               b1 = a1 , b1 b2 = a1 ∧ a2 , . . . , b1 b2 . . . bn = a1 ∧ a2 ∧ . . . ∧ an .

 9. Show that any bilinear form b : Rn × Rn → R can be expressed in the form
    b(x, y) = x · f (y), where f (x) is a linear operator on Rn .
10. Verify the last equality in the relationship (10.17).
10.3 Unitary Geometric Algebra of Pseudo-Euclidean Space                                      161


10.3 Unitary Geometric Algebra of Pseudo-Euclidean Space

We now show how all of the previous identities in G p,q can be generalized to hold
in a larger complex geometric algebra which I call the unitary geometric algebra
U p,q .2 We extend the geometric algebra G p,q by a new unit vector, denoted by i,
which has square minus one and anticommutes with all the vectors in R p,q . In this
approach, the geometric interpretation of a complex scalar z = x + iy for x, y ∈ R
as the sum of a real number x and the distinguished vector part yi is unambiguous,
and the Hermitian inner product arises in a natural way. This larger complexified
geometric algebra is necessary in order to have all of the tools of geometric algebra
available for the study of Hermitian spaces and their generalizations [63].
   By a (complex) vector x in the Hermitian space H p,q , we mean the quantity

                     x = x1 + ix2 ,     where x1 , x2 ∈ R p,q ⊂ R p,q+1

and i := e p+q+1 ∈ R p,q+1 ⊂ G p,q+1 with i2 = −1. Note that although i is just an
ordinary vector in R p,q+1, we denote it by the unbold symbol i and give it the special
interpretation of the unit imaginary scalar in the Hermitian space H p,q.
    The complex vector a + ib, shown in Fig. 10.1, is thus the sum of the real vector
part a ∈ R p,q , and the imaginary vector part ib which is a bivector in G2p,q+1. Since
the distinguished unit vector i ≡ e p+q+1 in R p,q+1 with square −1 is orthogonal to
all of the basis vectors in (e)(p+q) ⊂ (e) p+q+1 , it follows that a + ib = a − bi.
    We say that x = x1 − ix2 = x† is the complex conjugate of x, where A is the
operation of complex conjugation for A ∈ G p,q+1. The conjugate A of A agrees
with the previously defined operation of reversal when the argument A is a complex
vector, but it does not reverse the order of the terms in a geometric product. The
conjugation A of any geometric number A ∈ U p,q can most simply be obtained
by replacing i by −i wherever i appears in A and is the natural generalization of
the conjugation of a complex number.3 By a complex scalar α ∈ U p,q , we mean
α = a1 + ia2 where a1 , a2 ∈ R, and α = a1 − ia2 . For A, B ∈ G p,q+1, we have


                                                                                          b


                                                                  i                   ib


                                                                                      a
Fig. 10.1 The complex
vector a + ib




2 The material in this Section 10.3 and Section 10.4 is based upon the author’s paper [88], which

appeared in “Advances in Applied Clifford Algebra”.
3 In terms of the inner product of the geometric algebra G
                                                             p,q+1 , A = A + 2i(i · A).
162                                                     10 Hermitian Inner Product Spaces


                           A + B = A + B, and AB = A B.

Note that this complex conjugation is not the Clifford conjugation defined in (3.33).
  The unitary geometric algebra

                              U p,q = U(H p,q ) = G p,q+1                        (10.19)

of the Hermitian space H p,q = R p,q + iR p,q has exactly the same elements as the
geometric algebra G p,q+1 = G(R p,q+1). The geometric product of the elements
of U p,q is also exactly the same as for the same elements in G(R p,q+1). What
is different is what we mean by complex vectors, how we grade the algebra
into complex k-vectors, and how we define the Hermitian inner product and the
Hermitian outer product of the complex multivectors in U p,q . By a complex k-vector
Bk ∈ U p,q , we mean Bk = B1 + iB2 where B1 , B2 are k-vectors in Gkp,q . Alternatively,
U p,q = G p,q + iG p,q can be thought of as being generated by taking all geometric
sums of geometric products of the complex vectors in H p,q .
   We are now ready to define the Hermitian inner and outer products of complex
vectors x, y ∈ H p,q. The Hermitian inner product is defined by

                                1         1         
                        x·y =     xy + y x = xy + (xy)† ,
                                2           2
and the Hermitian outer product is defined by

                                1         1         
                       x∧y =      xy − y x = xy − (xy)† ,
                                2           2
from which it follows that xy = x · y + x ∧ y.
   Letting x = x1 + ix2 and y = y1 + iy2 for the complex vectors x, y ∈ H p,q , we
calculate

             x · y = x1 · y1 + x2 · y2 + i(x2 · y1 − x1 · y2 ) =< xy >C ,
             x · y = x1 · y1 − x2 · y2 + i(x2 · y1 + x1 · y2 ) =< xy >C ,
            x ∧ y = x1 ∧ y1 + x2 ∧ y2 + i(x2 ∧ y1 − x1 ∧ y2 ) =< xy >B ,
            x ∧ y = x1 ∧ y1 − x2 ∧ y2 + i(x2 ∧ y1 + x1 ∧ y2 ) =< xy >B ,         (10.20)

where < xy >C and < xy >B denote the complex scalar and complex bivector
parts of the geometric product xy, respectively. Note also that the Hermitian
inner and outer products are Hermitian symmetric and Hermitian antisymmetric,
respectively, i.e.,

                  x · y = y · x = y · x and x ∧ y = −y ∧ x = −y ∧ x.
10.3 Unitary Geometric Algebra of Pseudo-Euclidean Space                                      163

Fig. 10.2 The vector e1 is
rotated in the xy-plane of e12
into the vector e1 . The vector
e1 is boosted into the relative         U(H 2 )
                                                                   i''
vector e1 of the relative plane
of the relative bivector                             y       i
e12 = e1 e2 . The relative plane                                            e''1
of e12 has the relative velocity                  e2
of vc = ie1 tanh φ with respect
to the plane of e12 , where c is                                           e1
the speed of light                                                                     x
                                                                     e'1




   The Hermitian inner and outer products reduce to the ordinary inner and outer
products (10.8) in G p,q when the complex vectors x, y ∈ U p,q are real, i.e., x = x
and y = y, and the closely related identities satisfied by the Hermitian inner and
outer products of complex k-vectors reduce to their real counterparts in G p,q .
The complexification of R2 to H2 and G2 to U2 gives new geometric meaning to
the notion of a complex scalar and a complex vector and the resulting complex
geometric algebra. In Fig. 10.2, a rotation in the plane of the imaginary vector ie1
takes on the interpretation of a Lorentz boost of the Euclidean plane having the
direction of the bivector e12 . We will discuss this further in the next chapter.
   Let x ∈ H p,q be a complex vector. Using the same conventions as in (10.6) and
(10.7), in the standard row basis (e)(n) of H p,q, we write
                                            n            n
                       x = (e)(n) (x)(n) = ∑ ei xi = ∑ xi ei = (x)(n) (e)(n) ,             (10.21)
                                           i=1        i=1

where (x)(n) = [g](x)T(n) is the column of complex reciprocal scalar components of
x and (x)(n) is the corresponding row of the conjugated complex scalar components
of x. The relationship (10.21) reduces to (10.7) when x = x.
   Let us now explore the corresponding Hermitian versions of the identities in the
unitary geometric alebra U p,q that were given for the real geometric algebra Gn in
Chap. 3. Just as the inner and outer products between a and Bk were defined in
(3.37), we similarly define the corresponding Hermitian inner and outer products.
For odd k ≥ 1,
                                    1
                            a · Bk := (aBk + Bk a) =< aBk >k−1 ,
                                    2
                                    1
                         a · Bk+1 := (aBk+1 − Bk+1 a) =< aBk+1 >k ,                        (10.22)
                                    2
164                                                      10 Hermitian Inner Product Spaces


and
                            1
                    a ∧ Bk := (aBk − Bk a) =< aBk >k+1 ,
                            2
                            1
                 a ∧ Bk+1 := (aBk+1 + Bk+1 a) =< aBk+1 >k+2                        (10.23)
                            2
so that aB j = a · B j + a ∧ B j for all j ≥ 1. In the case that a and Bk are real, the
identities (10.22) and (10.23) reduce to (3.37).
   The corresponding identity to (3.40) is

                         a · (b ∧ Ck ) = (a · b)Ck − b ∧ (a · Ck )

and to (3.42), when r and s are both odd, is

            a · (Ar ∧ Bs ) = (a · Ar ) ∧ Bs − Ar ∧ (a · Bs ) = −(Ar ∧ Bs ) · a.

In the last identity, when r and s are both even, the identity must be modified to read

            a · (Ar ∧ Bs ) = (a · Ar ) ∧ Bs + Ar ∧ (a · Bs ) = −(Ar ∧ Bs ) · a.

The rules for the other two case of this identity when r + s is odd are left to the
reader.
   From these identities, many other useful identities for the unitary geometric
algebra U p,q can be derived. For example, for complex vectors a, b, c ∈ H p,q ,
we have

           a · (b ∧ c) = (a · b)c − b(a · c) = a · b c − a · c b = −(b ∧ c) · a.

With care, anyone familiar with the rules of real geometric algebra can quickly
become adept to the closely related rules in the unitary geometric algebra U p,q .
    However, there are peculiarities that must be given careful consideration. For
example, in general a ∧ a = 0, but always a ∧ a = 0. Also, a complex vector a ∈ H p,q
is not always invertible, as follows from

                                a a = a · a + a ∧ a = a · a,

which implies that the inverse

                                          1           1
                             a−1 = a            =        a
                                         a·a         a·a

of the complex vector a, with respect to the unitary geometric product, exists only
when a · a = 0. In the special case that a ∈ Hn , the identities (10.20) show that
a · a = 0 only when a = 0. However, a ∧ a = 0 for a = a1 + ia2 ∈ H p,q only when
10.3 Unitary Geometric Algebra of Pseudo-Euclidean Space                            165


a1 = α a2 for some α ∈ R. On the other hand, a · a = 0 for a ∈ H p,q if and only if
a21 = a22 and a1 · a2 = 0.
    By the magnitude of a complex vector a ∈ H p,q , we mean

                                       |a| =       |a · a|.                      (10.24)

In the case of the unitary geometric algebra Un of the Euclidean space Rn , the
magnitude is positive definite, but there are still non-invertible complex vectors with
positive magnitude. For example, for a = e1 + ie2 ∈ H2 , a · a = 2, but a−1 does not
exist since

                a · a = (e1 + ie2 ) · (e1 − ie2 ) = e21 − e22 + 2ie1 · e2 = 0.

Sometimes, however, we write a−1 = |a|a2 for which a · a−1 = 1 with respect to the
Hermitian inner product.
   Suppose now that a column (a)T(n) of n complex vectors in H p,q is given. In terms
of the standard basis (e)(n) of H p,q , we write
                                                          T
                             (a)T(n) = A(e)T(n) = (e)(n) A∗ ,                    (10.25)

where the kth row of the n × n complex matrix A consists of the components of the
                                                  T
corresponding complex vectors ak = ak and A∗ = A is the conjugate transpose of
the matrix A. For example, for n = 2, we have

                           a11 a12     e1           a11 e1 + a12e2
   (a)T(2) = A(e)T(2) =                        =
                           a21 a22     e2           a21 e1 + a22e2
                                            a11 a21 T          T
              e1 a11 + e2 a12
         =                       =     e1 e2             = (e)(2) A∗ .           (10.26)
              e1 a21 + e2 a22                  a12 a22

   We can now relate the determinant function of the matrix A to the outer product
of the complex vectors (a)(n) . We have the rather strange looking relationship

                 a(n) ≡ a1 ∧ a2 ∧ · · · ∧ a2k+1 ∧ a2k ∧ · · · = (det A)e(n) .    (10.27)

The Hermitian character of the outer product requires that we take the conjugation of
every even numbered complex vector in the product. For the 2-dimensional example
of (10.26), we have

                a1 ∧ a2 = (a11 e1 + a12e2 ) ∧ (a21 e1 + a22 e2 )
                                                               a11 a12
                          = (a11 a22 − a12 a21 )e(2) = det             e12 .
                                                               a21 a22
166                                                       10 Hermitian Inner Product Spaces


It follows that a set of complex vectors (a)(n) , defined in the equation (10.25), is
(complex) linearly independent iff detA = 0.


Exercises

1. Let (e)(3) = (e1 , e2 , e3 ) be standard orthonormal basis and let a = (1, i, 1 + i)(e)T(3)
   and b = (1 − i, −i, 2)(e)T(3).

   (a) Compute a · b and a · (a ∧ b) in H3 .
   (b) Compute a · b and a · (a ∧ b) in H2,1 .
   (c) Compute a · b and a · (a ∧ b) in H1,2 .
   (d) Compute a · b and a · (a ∧ b) in H0,3 .
2. Define the complex vectors a = (1, i, 2)(e)T(3) , b = (1, i, −i)(e)T(3) , and
   c = (1, −i, 0)(e)T(3) .

   (a) Compute a ∧ b ∧ c in H3 .
   (b) Compute a · (b ∧ c) and a · (b ∧ c) in H2,1 .
   (c) Compute (a ∧ b) · (b ∧ a) in H1,2 .
   (d) Compute a · (b ∧ c) and (a ∧ b) · c in H0,3 .
                                               ⎛        ⎞
                                                 2 i 2
3. Given the complex vectors (a)(3) = (e)(3) ⎝1 i −i⎠, show the following:
                                                 1 −i 1
   (a) Show that the vectors are linearly independent by calculating a(3) .
   (b) In H2,1 , calculate (a)T(3) · (a)(3) .
   (c) In H1,2 , calculate (a)T(3) · (a)(3) .
   (d) In H0,3 , calculate (a)T(3) · (a)(3) .

4. Show that |a + b|2 + |a − b|2 = 2|a|2 + 2|b|2 in Hn .


10.4 Hermitian Orthogonality

We now generalize the results obtained in Sect. 2 for the pseudo-Euclidean space
R p,q to the unitary space H p,q . In the special case of the unitary space Un of the
Hermitian space Hn , even stronger results are possible as we shall see.
    Two complex vectors a, b ∈ H p,q are said to be Hermitian orthogonal in H p,q if
a · b = 0; they are said to be conjugate orthogonal if a · b = 0. The complex vectors
shown in Fig. 10.3 are Hermitian orthogonal. The magnitude of a complex vector
a ∈ H p,q has already been defined in (10.24). The complex vector a is said to be
non-null if |a| = 0. If a = a1 + ia2 , where a1 and a2 are real vectors, then

                |a|2 = |(a1 + ia2) · (a1 + ia2 )| = |a1 · a1 + a2 · a2 | ≥ 0.
10.4 Hermitian Orthogonality                                                                        167

Fig. 10.3 The complex
vectors x = x1 + ix2 and                                              i                      i
y = y1 + iy2 are Hermitian                                            y2     i iiiiii   x2
orthogonal
                                                                                                     x1
                                                                     y1




In the special case when a ∈ Hn , |a|2 = a · a ≥ 0 so that the magnitude |a| = 0 iff
a = 0.
   A row (a)(k) = (a1 , . . . , ak ) of k complex vectors ai ∈ H p,q is said to be (complex)
linearly independent if for every column (α )T(k) of not all zero complex scalars
αi ∈ C,
                                           ⎛ ⎞
                                             α1
                                         ⎜  ·⎟    k
         (a)(k) (α )T(k) = a1 . . . ak ⎜        ⎟ = ∑ a jα j
                                           ⎝·⎠
                                                          j=1
                                              αk
                                                 ⎛ ⎞
                                                   a1
                          k                    ⎜ · ⎟
                        = ∑ α ja j = α1 . . . αk ⎜    ⎟
                                                 ⎝ · ⎠ = (α )(k) (a)(k) = 0.
                                                                    T
                             j=1
                                                                ak

   We can easily characterize the linear dependence or independence of a row of
complex vectors by using the Hermitian outer product. But first we introduce some
necessary notation. If (a)(k) is a row of complex vectors, where k is even, we define
the row (a)(k) by
                               (a)(k) = (a1 , a2 , a3 , a4 , . . . , ak ).                       (10.28)
On the other hand, if k is odd, we have

                               (a)(k) = (a1 , a2 , a3 , a4 , . . . , ak ).                       (10.29)

In both rows, only the even terms of the rows are conjugated. We define the corre-
sponding alternatingly conjugated k-complex vectors, consistent with (10.27), by

                                          a(k) = ∧(a)(k) .                                       (10.30)

   With this notation, a row of complex vectors (a)(k) is linearly independent iff

                                       a(k) = ∧(a)(k) = 0.

The magnitude |a(k) | of the complex k-vector a(k) is defined by
                                       
                              |a(k) | = |a†(k) · a(k) | ≥ 0.
168                                                            10 Hermitian Inner Product Spaces


We will shortly see that the magnitude of a complex k-vector is also positive definite
in the special case of a k-vector in Un .
    Given a basis (a)(n) of non-null complex vectors in H p,q, we want to find
the closely related Hermitian orthogonal basis (b)(n) of H p,q which satisfies the
following two conditions:

                                  bi · b j = 0 and b(k) = a(k)                            (10.31)

for all 1 ≤ i < j ≤ n and 1 ≤ k ≤ n.
   This task is completed in much the same way as (10.14) by the following
recursive construction. For k = 1, we set b1 = a1 . For all k, 2 ≤ k ≤ n,

                                        b(k−1) · (b†(k−1) ∧ ak )
                                 bk =                              .                      (10.32)
                                            b(k−1) · b†(k−1)

Note, since the b j ’s are orthogonal,

                        b(k−1) · b†(k−1) = (b1 · b1 ) · · · (bk−1 · bk−1 ).

The above construction is often called the Gram-Schmidt orthogonalization process,
but is more general since we are dealing with an indefinite metric. In the special case
of the positive definite metric of Hn , it shows that (10.31) is positive definite. Our
construction (10.32) is closely related to [29, p.258].
   The method by which we constructed the corresponding orthogonal basis (b)(n)
for the basis (a)(n) , satisfying the conditions (10.31), makes possible the following
Corollary 10.4.1. The relationship of the constructed orthogonal basis (b)(n) =
(b1 , b2 , . . . , bn ) to the given basis (a)(n) = (a1 , a2 , . . . , an ) can be expressed in the
form (b)(n) = (a)(n) where is an upper triangular matrix.
Proof. Notice that in the construction of the kth basis vector bk of (b)(n) , only
a1 , a2 , . . . , ak are involved for k = 1, 2, . . . , n. It is for this reason that is an upper
triangular matrix.
    More specifically, let f be the linear operator which takes the basis (a)(n) into the
basis (b)(n) , i.e., f (a)(n) = (a)(n) [ f ] = (b)(n) where = [ f ] is the matrix of f . We
can solve this relationship directly for the matrix , getting
                                             ⎛ −1                   ⎞−1
                                              b1 · a1 . . . b−1
                                                             1 · an
                                        −1 ⎜ . . . . . . . . . ⎟
                   = (b−1 )T(n) · (a)(n)    =⎜
                                             ⎝ ... ... ... ⎠ ,
                                                                    ⎟

                                              b−1            −1
                                               n · a1 . . . bn · an


where each b−1   bi
            i = bi ·bi .                                                                        
                                                                                                
10.4 Hermitian Orthogonality                                                               169


   The Gram matrix (10.15) of the basis (a)(n) is
                                              ⎛                      ⎞
                                               a1 · a1 . . . a1 · an
                                              ⎜ ... ... ... ⎟
                       A = (a)T(n) · (a)(n) = ⎜
                                              ⎝ ... ... ... ⎠.
                                                                     ⎟                  (10.33)
                                               an · a1 . . . an · an

But the relationship

                   (a)(n) [ f ] = (b)(n)      ⇐⇒         [ f ]∗ (a)T(n) = (b)T(n) ,

from which it follows that

                 [ f ]∗ A[ f ] = [ f ]∗ (a)T(n) · (a)(n) [ f ] = (b)T(n) · (b)(n) = B

where B is the diagonal Gram matrix of the orthogonal basis (b)(n) . Thus, we have
diagonalized the indefinite Hermitian quadratic form defined by the matrix A. Since
the relationship (10.31) implies that det[ f ] = 1, it also follows that detA = det B. Of
course, the signature of the Hermitian quadratic form of the matrix A is the same as
the signature of the Hermitian quadratic form defined by the matrix B, which is just
the equally valid Sylvester’s law of inertia Theorem 9.4.3 applied to the complex
case.
   The Gram determinant of the basis (a)(n) is defined to be the determinant of
Gram matrix A of (a)(n) . We have

                          detA = det[(a)T(n) · (a)(n) ] = a†(n) · a(n) .

In the special case of the unitary space Un = U(Hn ), because of the properties
(10.31) of the related basis (b)(n) , it follows that

                                                   †
                                 a†(k) · a(k) = b(k) · b(k) ≥ 0,

for 1 ≤ k ≤ n. When n = 2, this relationship reduces to the Schwarz inequality [66,
p.218],

        a†(2) · a(2) = (a2 ∧ a1 ) · (a1 ∧ a2 ) = |a1 |2 |a2 |2 − |a1 · a2 |2 ≥ 0.       (10.34)

   The positive definite Hermitian space Hn , and its unitary geometric algebra Un ,
has much in common with the Euclidean space Rn and its geometric algebra Gn
which it generalizes. The next theorem gives the basic properties of the distance
|b − a| between the two complex vectors a, b ∈ Hn .
170                                                        10 Hermitian Inner Product Spaces


Theorem 10.4.2. For vectors a, b ∈ Hn ,
1. |a − b| = |b − a|
2. |b − a| = 0 if and only if a = b
3. |a + b| ≤ |a| + |b| (triangle inequality)
Proof. The proofs of (1) and (2) follow directly from from the definitions. The proof
of 3) follows from the steps

               |a + b|2 = (a + b) · (a + b) = a · a + a · b + b · a + b · b
                        = |a|2 + a · b + a · b+ |b|2 ≤ |a|2 + 2|a · b| + |b|2
                        ≤ |a|2 + 2|a||b| + |b|2 = (|a| + |b|)2,

with the help of Schwarz inequality (10.34).                                                  
                                                                                              
   In the more general unitary space H p,q where q > 0, only the first part of the
above theorem remains true. For example, let a = e1 + e2 and b = e1 − e2 in H1,1 .
Then |a| = |b| = 0 and
                                2 = |a + b| > |a| + |b| = 0,
violating the triangle inequality, and

                                     0 = |a| = |2a − a|

violating property (2) of the theorem.



Exercises

1. Let    (e)(3) = (e1 , e2 , e3 )   be         an     orthonormal        basis     and      let
                   ⎛               ⎞
                      1 i 1+i
   (a)(3) = (e)(3) ⎝1 − i −i 2 ⎠.
                     2+i 3 i
   (a) Find the corresponding orthogonal basis (b)(3) in H3 given by (10.32).
   (b) Find the corresponding orthogonal basis (b)(3) in H2,1 given by (10.32).
   (c) Find the corresponding orthogonal basis (b)(3) in H1,2 given by (10.32).
   (d) Find the corresponding orthogonal basis (b)(3) in H0,3 given by (10.32).
2. Show that the vectors {(1, i, 2)(e)T(3) , (1, i, −i)(e)T(3) , and (1, −i, 0)(e)T(3) } are
   orthogonal in H3 .
3. Given the basis (a)(3) = {(2, i, 2)(e)T(3) , (1, i, −i)(e)T(3) , (1, −i, 1)(e)T(3) }, use the
   Gram-Schmidt orthogonalization process (10.32) to find a corresponding or-
   thonormal basis (b1 , b2 , b3 ) in the following Hermitian spaces:
10.4 Hermitian Orthogonality                                                                 171


  (a) In H3 . Also find the triangular matrix such that (a)(3) = (b)(3) .
  (b) In H2,1 . Also find the triangular matrix such that (a)(3) = (b)(3) .
  (c) In H1,2 . Also find the triangular matrix such that (a)(3) = (b)(3) .
  (d) In H0,3 . Also find the triangular matrix such that (a)(3) = (b)(3) .
4. Show that |a + b|2 + |a − b|2 = 2|a|2 + 2|b|2 in Hn .
5. Let (e)(n) be an orthonormal basis of the n-dimensional space H p,q and let f :
   H p,q → H p,q be a linear operator. Recall that the matrix [ f ] = ( f ji ) of f , with
   respect to the basis (e)(n) , is defined by f (e)(n) = (e)(n) [ f ] or

                                        [ f ] = (e)(n) · f (e)(n) .

   Show that

                   ei · f (e j )   ei · f (e j ) for 1 ≤ i ≤ p 1 ≤ j ≤ n
          f ji =                 =                                        = ei · f (e j ),
                     ei · ei       −ei · f (e j ) for p < i ≤ n 1 ≤ j ≤ n

   where n = p + q.
6. Given (b)(n) = (a)(n)         , where (b)(n) is defined in (10.32), show that

              b1 = a1 , b1 b2 = a1 ∧ a2 , . . . , b1 b2 . . . bn = a1 ∧ a2 ∧ . . . ∧ an .

7. Show that any Hermitian form h : Hn × Hn → C can be expressed in the form
   h(x, y) = f (x) · y, where f (x) is a complex linear operator on Hn .
8. Letting x = (x)(n) (A∗ )−1 A∗ (e)T(n) and y = (e)(n) (y)T(n) = (e)(n) AA−1 (y)T(n) in H p,q ,
   verify that the transformation rule for the Hermitian form x · y is

                         x · y = (x)(n) (A∗ )−1 A∗ (e)T(n) · (e)(n) AA−1 (y)T(n)

                              = (x)(n) (A∗ )−1 A∗ [g]AA−1(y)T(n)

   in the basis (a)(n) = (e)(n) A, where [g] = (e)T(n) ·(e)(n) is the metric tensor of H p,q .
   This gives the transformation rule

                         (x)(n) [g](y)T(n) = (x)(n) (A∗ )−1 A∗ [g]AA−1(y)T(n) .

9. Let x ∈ H p,q and let (b)(n) be an orthogonal basis.
  (a) Show that
                                                              p+q
                                                                 (x · bi )bi
                               x = x · (b)(n)(b−1 )T(n) = ∑                  .
                                                              i=1 bi · bi
172                                                                     10 Hermitian Inner Product Spaces


  (b) Show that
                                                                    †
                                                   (x · b(n) ) · b(n)
                                       x=                                    .
                                               (b1 · b1 ) · · · (bn · bn )



10.5 Hermitian, Normal, and Unitary Operators

For the remaining sections of this chapter, we restrict our considerations to the
positive definite Hermitian space Hn and its unitary geometric algebra Un . Whereas
many of the results can be generalized to the indefinite Hermitian spaces H p,q , we
will not attempt this here. The proofs given in this section were first developed
in [78].
    Let x · y be a Hermitian inner product on the Hermitian space Hn . The Hermitian
adjoint f ∗ of an operator f is uniquely defined by

                                          f (x) · y = x · f ∗ (y)                                (10.35)

for all vectors x, y ∈ Hn . Now let (e)(n) be a real orthonormal basis of Hn . We saw
in Exercise 5 of the previous section that the matrix [ f ] = ( fi j ) of f , satisfying
 f (e)(n) = (e)(n) [ f ], with respect to an orthonormal basis (e)(n) , is specified by

                                            fi j = ei · f (e j ).

From
                      fi j = ei · f (e j ) = f (e j ) · ei = e j · f ∗ (ei ) = f ji ,
it immediately follows that the matrix of f ∗ , defined by f ∗ (e)(n) = (e)(n) [ f ∗ ], is the
                                      T
conjugated transpose [ f ∗ ] = [ f ] of the matrix [ f ] of f . Note also that

                      x · f (y) = f (y) · (x) = y · f ∗ (x) = f ∗ (x) · y.

  An operator f is called normal if f f ∗ = f ∗ f , Hermitian or self-adjoint if f ∗ = f ,
and unitary if f ∗ = f −1 . It follows that Hermitian and unitary operators are normal.
We will need three simple lemmas for the proof of the spectral theorem for normal
operators.
Lemma 10.5.1. If f is a normal operator then ker( f ) = ker( f ∗ ).
Proof. For any x ∈ Hn we have,

                 f (x) · f (x) = x · f ∗ f (x) = x · f f ∗ (x) = f ∗ (x) · f ∗ (x),

from which it follows that f (x) = 0 if and only if f ∗ (x) = 0.                                       
                                                                                                       
10.5 Hermitian, Normal, and Unitary Operators                                    173


Lemma 10.5.2. Every normal nilpotent operator q is identically 0.
Proof. Let q be a normal nilpotent operator with index of nilpotency k > 1; that
is, qk−1 = 0 but qk = 0. Then for all x, qqk−1 x = 0, so by Lemma 1 q∗ qk−1 x = 0.
But then
                       qk−1 (x) · qk−1(x) = q∗ qk−1 (x) · qk−2(x) = 0
for all x, which means that qk−1 = 0, a contradiction. Thus, a normal nilpotent
operator q must have index of nilpotency 1, i.e., q = 0.                     
                                                                             
Lemma 10.5.3. A normal projection p is self-adjoint.
Proof. Note that the adjoint of a projection p is also a projection, for (p∗ )2 =
(p2 )∗ = p∗ . The range of 1− p is ker(p). Thus, if p is normal, then by Lemma 10.5.1

                          ker(p) = ker(p∗ ) so 1 − p = 1 − p∗,

from which it follows that p = p∗ .                                                
                                                                                   
Theorem 10.5.4 (The spectral decomposition theorem for a normal operator).
If f is a normal operator, then f = ∑ri=1 λi pi , where the pi ’s are self-adjoint
orthogonal idempotents with ∑ pi = 1.
Proof. By the structure Theorem 8.4.1,
                                            r
                                      f = ∑ (λi + qi )pi ,
                                           i=1

where the operators pi and qi are all polynomials in f . But a polynomial in a normal
operator is normal, so the projections pi and nilpotents qi are themselves normal
operators. Thus, by Lemmas 10.5.2 and 10.5.3, each qi is zero and each pi is self-
adjoint.                                                                           
                                                                                   
   The following corollary now follows trivially
Corollary 10.5.5. The eigenvalues of a self-adjoint operator are real.
Proof. Just compare the two expressions of f ∗ = f ,
                                                  r
                                          f = ∑ λi pi
                                                 i=1

where p∗i = pi and
                                                  r
                                         f ∗ = ∑ λi pi
                                                 i=1

to conclude that λi = λi for i = 1, . . . , r.                                     
                                                                                   
174                                                      10 Hermitian Inner Product Spaces


Exercises

 1. Given a complex linear operator f , show that the Hermitian operators f ∗ f and
     f f ∗ have only positive real eigenvalues. Use this result to show that if f ∗ f = 0,
    then f = 0 also.
 2. Let f and g be two complex linear operators. Show that ( f g)∗ = g∗ f ∗ .
 3. Given a complex linear operator f , show that b(x, y) = f (x) · y is a bilinear
    form.
 4. Show that if W is an invariant subspace of f , then W⊥ is an invariant subspace
    of f ∗ .
 5. Show that if f = f ∗ ( f is Hermitian), and W is invariant under f , then W⊥ is
    also invariant under f .
 6. Let W = f (V). Show that W⊥ is the kernel of f ∗ .
 7. Show that f and f ∗ have the same rank.
 8. Let W = f (V). Show that f ∗ (V) = f ∗ (W).
 9. Show that f ∗ (V) = f ∗ f (V) and that f (V) = f f ∗ (V).
10. Show that f + f ∗ is Hermitian.
11. Show that f − f ∗ is skew-Hermitian.
12. Show that every operator f = s + h where s is skew-Hermitian and h is
    Hermitian.
13. A matrix U is said to be orthogonal if U TU = I. Which of the following
    matrices are orthogonal?
                  √                            √
              1/2
              √     3/2                   √1/2   3/2                  0.6 0.8
         (a)            ,             (b)            ,          (c)           .
             − 3/2 1/2                      3/2 1/2                   0.8 −.6

14. A matrix U is said to be unitary if U ∗U = I. Which of the following matrices
    are unitary?

                            1+i 1−i
                                                 1 i             1 −i
                      (a)    2   2
                            1−i 1+i    ,   (b)       ,    (c)         .
                             2   2               i 1             i 1

15. Show that the matrix
                                   ⎛                    ⎞
                                    cos(θ ) − sin(θ ) 0
                                   ⎝ sin(θ ) cos(θ ) 0⎠
                                        0       0     1
    is orthogonal.
16. A matrix N is said to be normal if N ∗ N = NN ∗ ; a matrix H is Hermitian if
    H ∗ = H and unitary if U ∗ = U −1 . Determine what kind of matrices are given
    below.
                            1+i 1−i
                                                 1 i             1 −i
                      (a)    2   2
                            1−i 1+i    ,   (b)       ,    (c)         .
                             2   2               i 1             i 1
*10.6 Principal Correlation                                                                   175


17. Show that if A and B are real symmetric matrices, and B is positive definite,
    then the roots of det|B − xA| = 0 are all real.
18. Show that every real skew-symmetric matrix A has the form A = PT BP where
    P is orthogonal and B2 is diagonal.



*10.6 Principal Correlation

Let Hn be a Hermitian space with the Hermitian inner product x · y and let (e)(n) be
any orthonormal basis of Hn . Then for any x = (e)(n) (x)(n) and y = (e)(n) (y)(n) ∈ Hn ,
we calculate
                                                                        
         x · y = (e)(n) (x)(n) · (e)(n) (y)(n) = (x)(n) (e)(n) · (e)(n) (y)(n)

              = (x)(n) (y)(n) ,

where (x)(n) is the conjugated row vector of x. By noting that

         x · y = (x)(n) (y)(n) = (x)(n) A∗ −1 A∗ AA−1 (y)(n) = (xa )(n) A∗ A(ya )(n) ,

we have easily found the rule for expressing x · y in terms of the components of x
and y in the arbitrary basis (a)(n) = (e)(n) A.
   Suppose now that f : Hn → Wm is a complex linear operator from the n-
dimensional Hermitian space Hn with the inner product x · y to the m-dimensional
Hermitian space Wm with the inner product u · v. We shall denote the set of all
such operators (homomorphisms) as Hom(Hn , Wm ). Let (e)(n) and (e)(m) denote
orthonormal bases of Hn and Wm , respectively. Then for the vector x = (e)(n) (x)(n) ∈
Hn , we have
                       f (x) = f (e)(n) (x)(n) = (e)(m) [ f ](m,n) (x)(n) ,
where [ f ](m,n) is the complex (m, n)-matrix of f with respect to the orthonormal
bases (e)(n) of Hn and (e)(m) of W. If (a)(n) = (e)(n) A and (b)(m) = (e)(m) B are new
bases, then clearly
                                                                                        (n)
       f (x) = (e)(m) [ f ](x)(n) = (e)(m) BB−1 [ f ]AA−1 (x)(n) = (b)(m) [ f ]ab (x)a

where [ f ]ab = B−1 [ f ]A is the matrix of f with respect to the bases (b)(m) of Wm and
(a)(n) of Hn .
   The adjoint operator f ∗ : Wm → Hn is defined to satisfy

                                      f (x) · y = x · f ∗ (y)

for all x ∈ Hn and y ∈ Wm . The calculations

             f (e)(n) = (e)(m) [ f ](m,n)    ⇐⇒        (e)(m) · f (e)(n) = [ f ](m,n)
176                                                           10 Hermitian Inner Product Spaces


and
                (e)(m) · f (e)(n) = f ∗ (e)(m) · (e)(n) = (e)(m) [ f ∗ ] · (e)(n) ,
                                    T
together with the fact [ f ∗ ] = [ f ] , established right before Lemma 10.5.1, show that
the conjugated transpose of the matrix [ f ] corresponds to the adjoint operator f ∗ .
   We have already seen in Theorem 8.1.2, Corollary 8.1.4, that the matrix [ f ] of f
becomes particularly simple when expressed in the appropriate bases (a)(n) of Hn
and (b)(m) of Wm . We shall state this result here as the following theorem:
Theorem 10.6.1 (First canonical form). There exist a basis (a)(n) of Hn and a
basis (b)(m) of Wm so that f (x) = (b)(m) [ f ]ab (xa )(n) where [ f ]ab = B−1 [ f ]A is a
m × n-diagonal matrix with the first k = rank( f ) elements down the diagonal 1’s
and all other elements 0’s.
   We will now refine this theorem by the requirement that the basis (a)(n) and
(b)(m) be orthonormal in Hn and Wm , respectively.
   Let (a)(n) be an orthonormal basis of Hn and (b)(m) an orthonormal basis of
W . If f (a)(n) = (b)(m) G where G is a diagonal matrix with the first k = rank( f )
   m

elements down the diagonal positive, we say that f is a correlation between the
orthonormal basis (a)(n) of Hn and the orthonormal basis (b)(m) of Wm . If f is a
correlation and rank( f ) = min{n, m}, we say that f is a full correlation. Finally,
a full correlation d between the orthonormal bases (a)(n) and (b)(m) , having the
property that d(a)(n) = (b)(m) D where D a full rank diagonal matrix with 1’s down
the diagonal, is called a principal correlation. A principal correlation between Hn
and Wm is the generalization of the idea of a unitary operator on a vector space.
   Recall that an operator f ∈ End(Hn ) is normal if f ∗ f = f f ∗ and that a normal
operator has the spectral form given in Theorem 10.5.4,
                                                 r
                                          f = ∑ τi pi
                                               i=1

where the eigenvalues τi are distinct and where pi = p∗i are mutually annihilating
Hermitian projections which partition the identity 1 ∈ End(Hn ). We say that an
orthonormal basis (a)(n) is compatible with a set {p} of mutually annihilating
Hermitian idempotents which partition 1 ∈ End(Hn ) if pi (a)(n) = (a)(n) Pi where
Pi is a diagonal matrix with a block of ni = rank(pi ) 1’s down the diagonal; we also
require that the blocks of 1’s in each of P1 , P2 , . . . , Pr run consecutively starting from
the top.
    Now let f ∈ Hom(Hn , Wm ) as before. Whereas, in general, we are unable to
multiply (compose) operators in Hom(Hn , Wm ), the Hermitian operators f ∗ f ∈
End(Hn ) and f f ∗ ∈ End(Wm ) are always well defined and have the nonnegative
eigenvalues λi = τ i τi ; see Exercise 1 of 10.5.1. We can also assume that n ≤ m;
if this is not the case, interchange the names of the operators f and f ∗ . If d ∈
Hom(Hn , Wm ) is a principal correlation between V and W, then d ∗ ∈ Hom(Wm , Hn )
is a principal correlation between W and V. When n ≤ m,
*10.6 Principal Correlation                                                               177


                   d ∗ d = 1 ∈ End(V) and              p = dd ∗ ∈ End(Wm )

where p is a Hermitian projection with rank(p ) = m.
  We can now prove the main theorem of this section
Theorem 10.6.2. (Principal correlation of a linear operator.) Given a linear
operator f ∈ Hom(Hn ,W m ) where n = dim(Hn ) ≤ m = dim(W m ), there exists a
principal correlation d ∈ Hom(Hn ,W m ) with the property that d f ∗ = f d ∗ and
d ∗ f = f ∗ d.
Proof. The Hermitian operators f ∗ f and f f ∗ have the structure

                                      r                            r
                              f ∗ f = ∑ λi pi ,      f f ∗ = ∑ λ j pj
                                     i=1                        j=1


for λ1 > · · · > λr ≥ 0 and where pi = p∗i , pi ∗ = pi are mutually annihilating
Hermitian idempotents. If λr = 0, then r = r . If λr = 0 and m = n, then r = r,
but if λr = 0 and m > n, then r = r + 1 and λr+1 = 0. We also have ni = rank(pi ) =
rank(pi ) for all i = 1, . . . , r for which λi > 0. If λk = 0 (for k = r or k = r + 1), then
rank(pk ) may not be equal to rank(pk ) (in fact pr+1 is not even defined!).
   The above relationships follow from the operator identity

                               f f ∗ f = ∑ λi f pi = ∑ λ j pj f .
                                           i                j


Multiplying on the left and right sides of this identity by pk and pl , respectively,
gives λk pk f pl = λl pk f pl for all k, l = 1, . . . , r. It follows that

                                      pi f p j = δi, j pi f pi

where δi, j is the Kronecker delta.
    To complete the proof, we must define the principal correlation d. This is
accomplished by first selecting any orthonormal basis (a)(n) of Cn compatible with
the orthogonal projections {p}. The principal correlation d : Cn → Cm is then
defined by b = d(a) = λ1 f (a) where a ∈ {a} is any representative basis element
with the nonzero eigenvalue λ . In the case that f (a) = 0, we define d(a) = b where
pr b = b. We then complete the orthonormal basis (b)(m) to be compatible with the
projections {p }. The constructed bases (a)(n) of Cn and (b)(m) of Cm are principally
correlated by the operator d satisfying d(a)(n) = (b)(m) D. It is easily verified by the
construction that f d ∗ = d f ∗ and d ∗ f = f ∗ d.                                     
                                                                                       
   From the construction of the principal correlation d of the operator f , it is clear
that d is uniquely determined in all cases when λr > 0 and n = m, and not uniquely
determined in all other cases. In the compatible orthonormal basis (a)(n) of Hn and
(b)(m) of W, f (a)(n) = (b)(m) G where G is a nonnegative diagonal (m, n)-matrix
with decreasing distinct eigenvalues down the diagonal.
178                                                       10 Hermitian Inner Product Spaces


*10.7 Polar and Singular Value Decomposition

Let f ∈ Hom(Hn , Wm ). The polar decomposition of the operator f follows once
a principal correlation d of f is known. Given the principal correlation d of f
satisfying f d ∗ = d f ∗ and d ∗ d = 1, the left and right polar decompositions are
immediately determined by writing

                                f = (d f ∗ )d = d( f ∗ d),

because h = f ∗ d satisfies h∗ = d ∗ f = f ∗ d and so is Hermitian in V. Similarly, h =
d f ∗ is Hermitian in W. In the case when Hn = Wm , the principal correlation d
becomes a unitary operator on Hn .
     The singular value decomposition f = ugv∗ , where u and v are unitary operators
and g ≡ u∗ f v is a correlation between the standard bases (e)(n) of Hn and (e)(m)
of Wm , is also easily constructed from properties of the principal correlation d of
 f . Let (a)(n) and (b)(m) be the orthonormal bases compatible with the principal
correlation d of f defined in Theorem 10.6.2. The unitary operator u ∈ End(Wm )
is defined by (b)(m) = u(e)(m) , and the unitary operator v ∈ End(Hn ) is defined by
(a)(n) = v(e)(n) . We then have

               f (a)(n) = ugv∗ (a)(n) = ug(e)(n) = u(e)(m) G = (b)(m) G,

where G is diagonal and nonnegative, exactly as required.
  Finally, note that the Moore-Penrose generalized inverse f −1mp of f [46, page
421] can also be easily defined in terms of the principal correlation d of f . We have

                       f −1mp ≡ d ∗ (d f ∗ )−1mp = ( f ∗ d)−1mp d ∗

where the Moore-Penrose inverses (d f ∗ )−1mp and ( f ∗ d)−1mp of the Hermitian
operators d f ∗ = ∑i τi pi and f ∗ d = ∑i τi pi are defined by

                                                    1 
                                (d f ∗ )−1mp ≡ ∑       pi
                                                    τ
                                               τi =0 i

and
                                                     1
                               ( f ∗ d)−1mp ≡ ∑         pi ,
                                               τi =0 τi

where only the nonzero eigenvalues τi appear in the sums.
   As an example, we will find a principal correlation and corresponding polar and
singular value decomposition of the matrix S given by
                                        ⎛    ⎞
                                        −1 2
                                   S = ⎝ 0 −1⎠
                                        −2 0
*10.7 Polar and Singular Value Decomposition                                        179


taking R2 into R3 . We calculate
                          ⎛          ⎞
                              5 −2 2
                                               5 −2
                    SS∗ = ⎝−2 1 0⎠ and S∗ S =
                                              −2 5
                              2 0 4

We find that the eigenvalues of SS∗ are τ12 = 7, τ22 = 3, and τ32 = 0, the first two, 7
and 3, also being eigenvalues of T ∗ T . The algebra R[α ](α −7)(α −3) of S∗ S is easily
found, giving the spectral form
                                   S∗ S = τ12 P1 + τ22 P2

where

               S∗ S − τ22       1 −1        10            11
        P1 =              = 1/2      , P2 =    − P1 = 1/2    .
               τ12 − τ22        −1 1        01            11

   We choose the first column vectors of P1 and P2 , normalizing them, to get the
orthonormal basis (a)(2) of R2 . The compatible orthonormal basis (b)(3) of R3 is
                                                                √             √
defined by bi = τ1i f (ai ) for the nonzero eigenvalues τ1 = 7 and τ2 = 3, and
completed to form a basis of R3 ; the principal correlation d : R2 → R3 is then defined
by the relation
                                                         ⎛ ⎞
                                                           10
                        d(a)(2) = (b)(3) D where D = ⎝0 1⎠
                                                            00
or
                                         ⎛ −3       −2 ⎞ ⎛    ⎞
                                          √    √1 √
                                                           10
                          √1 √1              14   6  21
                                         ⎜      −1 √−4 ⎟ ⎝
                     d      2
                          −1 √1
                               2       = ⎝ √114 √    21 ⎠
                                                           0 1⎠ .
                          √                       6
                            2  2           −2 √
                                           √    −2 √1      00
                                             14   6  21

Multiplying both sides of the above relation by (a)−1
                                                    (2)
                                                        , we find the principal
correlation
                             ⎛ √      √      √     √ ⎞
                                 7 − 3√ 3     7 + 3 √3
                         1 ⎝ √                √
                                                         ⎠.
                  d= √
                       2 21      √3 − 7√ −√ 3 − √7
                              −2 3 − 2 7 2 3 − 2 7

It can be directly verified that S∗ d = d ∗ S and dS∗ = Sd ∗ as required.
    The polar and singular value decompositions of S are immediate consequences
of the existence of the principal correlation d and the compatible bases (a)(n) and
(b)(m) . For the singular value, we find that
                                         ⎛√         ⎞
                                               7 √0
                             S = (b)(m) ⎝ 0        3⎠ (a)∗(n) .
                                              0 0
Chapter 11
Geometry of Moving Planes




                              If people do not believe that mathematics is simple, it is only
                              because they do not realize how complicated life is.
                                                                         —John von Neumann



In special relativity, the fabric of space and time becomes irrevocably knit together
in the concept of space–time. The first section explains how the concept of
2-dimensional space–time in the geometric algebra G1 , introduced in Chap. 2,
generalizes to the full 4-dimensional space–time of special relativity in the geomet-
ric algebra G3 . With only a slight loss of generality, we then restrict our attention
to the study of 3-dimensional space–time in the geometric algebra G2 . Various
concepts in special relativity are considered, such as the concept of a Lorentz boost,
the addition of velocities, and the novel concept of a moving plane. In the final
section of this chapter, the geometric algebra G2 of R2 is split into the geometric
algebra G1,2 of Minkowski space–time R1,2 .



11.1 Geometry of Space–Time

We have already seen how well-known elementary properties of space–time can be
derived in the two-dimensional hyperbolic plane in Chap. 2. In special relativity,
space and time become inextricably bound together in the concept of space–time.
It is not surprising that even to this day, there is a great deal of confusion surrounding
the concept of space–time, considering the many different and sometimes conflict-
ing formalisms that are employed. Geometric algebra offers powerful new tools
to express profound ideas about the special relativity of space–time, with a clear
geometric interpretation always close at hand.




G. Sobczyk, New Foundations in Mathematics: The Geometric                                181
Concept of Number, DOI 10.1007/978-0-8176-8385-6 11,
© Springer Science+Business Media New York 2013
182                                                             11 Geometry of Moving Planes




Fig. 11.1 Rest frames are distinguished from each other by their relative velocities and relative
times

  Recall from Chap. 2, Sect. 2.6, that special relativity was constructed around the
two postulates:
1. All coordinate systems (for measuring time and distance) moving with constant
   velocity relative to each other are equally valid for the formulation of the laws of
   physics.
2. Light propagates in every direction in a straight line and with the same speed c
   in every valid coordinate system.
The first postulate tells us that all rest frames moving with constant velocity relative
to each other are equally valid. In Fig. 11.1, three men are shown moving off
in different directions. We can imagine that each of these clockheads accurately
measures the passage of time in each of their respective rest frames.
   In the geometric algebra G3 = G(R3 ), it becomes geometrically possible to
distinguish rest frames which have a constant relative velocity with respect to one
another. Let (e)(3) be the standard orthonormal basis of unit vectors along the
respective (x, y, z) coordinate axis of R3 . As such, (e)(3) defines a rest frame of R3
in G3 . Notice that
11.1 Geometry of Space–Time                                                           183

                                              θ               θ
                                (e )(3) = e 2 e21 (e)(3) e− 2 e21 ,
representing a rotation of the basis vectors (e)(3) in the (x, y)-plane of R3 , is an
equally valid orthonormal frame of basis vectors in R3 and as such defines the same
rest frame. That is
                              R3 = span(e)(3) = span(e )(3) .

   By an event X in space–time, we mean X = ct + x ∈ G3 where x = (e)(3) (x)(3) ∈
R3 . The event X occurs at time t and at the position x ∈ R3 as measured in the rest
frame (e)(3) of R3 . In Chap. 2, Sect. 2.6, events in different rest frames were related
by a transformation of the kind
                                     X  = Xe−φ e2 ∈ G3 ,                          (11.1)
where tanh φ = vc . In this case, for simplicity, we have chosen our velocity v = ve2 to
be in the direction of the y-axis in R3 . The question is does the transformation (11.1)
still make sense as applied in the geometric algebra G3 = G(R3 ) of the Euclidean
space R3 ?
    To explore this possibility, we carry out the same calculation that we did to find
the famous relationships (2.24). Starting with (11.1) and v = vv̂ for an arbitrary
speed v = |v| in the direction of the unit vector v̂ ∈ R3 , we find
                                                                          v
           ct  + x = (ct + x)(cosh φ − v̂ sinh φ ) = cosh φ (ct + x) 1 −
                                                                           c
                                       v                         v
                     = cosh φ ct − x ·     + cosh φ x − tv − x ∧
                                        c                           c
so that
            1       x · v                         1                  v
     t =          t− 2 ,               and x =          x − tv − x ∧ ,         (11.2)
                 2
           1 − vc2     c                                 2
                                                   1 − vc2              c

                           
                           2 −1
where cosh φ =       1 − vc2     as after (2.23) in Chap. 2.
   In order to compare our result with what is in the literature, we further break
down x into components that arise from the parallel and perpendicular components
of x with respect to the velocity vector v. We write x = x|| + x⊥ where x|| = (x · v̂)v̂
and x⊥ = x − x||, and find that

                   1                                 1           v
          x|| =           x|| − tv ,     and x⊥ =         x⊥ 1 − .             (11.3)
                        2
                  1 − vc2
                                                            2
                                                      1 − vc2       c

The decomposition formula (11.3) is extremely interesting insofar as that it differs
from what is found in all books. References [4, 9, 36, 47] are all in agreement with
our formula for x|| , but they all find that x⊥ = x⊥ ∈ R3 . So how is our formula (11.3)
possible? What is going on?
184                                                                   11 Geometry of Moving Planes

Fig. 11.2 The relative vector
x is the vector x moving at
the constant velocity v. It is                         x
drawn as a double vector to
indicate that it has picked up
a bivector component
                                                                            v

   First note that x⊥ 2 = x2⊥ , which is encouraging. We also note that the pullback
                         φ                 φ       φ             φ
                      e− 2 v̂ x e+ 2 v̂ = e− 2 v̂ (x|| + x⊥)e 2 v̂ = x|| + x⊥ ,
and
                                  φ            φ
                             e− 2 v̂ Xe− 2 v̂ = (ct + x|| )e−φ v̂ + x⊥.                     (11.4)
We identify (11.4) the passive Lorentz boost found in [4, p. 60] and [36, p. 581]. This
passive transformation is equivalent to the Lorentz boost coordinate transformations
found in the early references [9, p. 237], [47, p. 356].
   We are now ready to define what we mean by the active Lorentz boost of a vector
x ∈ R3 for the velocity vector v.
Definition 11.1.1. The active Lorentz boost of the vector x ∈ R3 ⊂ G3 is the relative
vector
                       φ        φ              1          v
               x = e+ 2 v̂ xe− 2 v̂ = x|| +       x⊥ 1 −    ∈ G3 ,
                                              1− v
                                                  2        c
                                                            c2

and has the interpretation of the vector x moving in G3 with velocity v.
The relative vector x is the vector x moving in the direction v̂ at the constant speed
v = |v|. Because of the nature of space–time, the relative vector x has picked up the
bivector component −  1 x⊥c v , see Fig. 11.2. Notice that the parallel component
                                       2
                             1− v2
                                   c
x|| of x is unaffected by the boost.
    The active Lorentz boost of the rest frame (e)(3) of R3 , for the given velocity v, is
                                                   φ         φ
                                 (e )(3) = e+ 2 v̂ (e)(3) e− 2 v̂ ∈ R .
                                                                       3
                                                                                            (11.5)
Any two reference frames (e)(3) and (e )(3) , related by (11.5), are valid rest frames
of R3 and R 3 , respectively, in the sense of postulate 1) of special relativity. For the
particular case when v = ve2 , we find that
                                                      
                      (e )(3) = e1 e−φ v̂ e2 e3 e−φ v̂ ∈ R ⊂ G3
                                                            3
                                                                                    (11.6)

and is the relative orthonormal basis for the relative Euclidean space R 3 =
span(e )(3) ⊂ G3 moving with velocity v with respect to the Euclidean space
R3 = span(e)(3) .
11.1 Geometry of Space–Time                                                            185


   It is easily verified that the boosted rest frame (e )(3) of R 3 obeys all of the same
algebraic properties as does the orthonormal frame (e)(3) of R3 . Just as we found
for the standard orthonormal basis (3.11) of G3 , we find that

                  e1 = e2 = e3 = 1,           and ei j := ei ej = −ej ei
                     2        2       2


for i = j and 1 ≤ i, j ≤ 3. In addition,

                                  i = e123 = e1 e2 e3 = e123 .
Except for a regrading of the elements of the algebra G3 into relative vectors and
relative bivectors, which are rest frame dependent, nothing has changed. Indeed,
the relative vectors can serve as equally valid generators of the algebra G3 . Thus,
every rest frame (e )(3) of R 3 can serve equally well as the generators of the space–
time algebra G3 , that is, G3 = G(R3 ) = G(R 3 ), and induce a corresponding relative
inner product and a relative outer product on the elements of G3 . What other authors
have apparently failed to notice is that in special relativity, the concept of a vector
and bivector are themselves observer-dependent concepts, just as are the concepts
of space and time.
   To finish our setup of special relativity in G3 , we need to define what is meant
by the space–time interval of an event X = ct + x in a given rest frame of R3 .
The space–time interval of an event X is defined to be the quantity

                             X X = (ct + x)(ct − x) = c2t 2 − x2                   (11.7)

in the rest frame (e)(3) of R3 . Similarly, the space–time interval of the event X  =
ct  + x in the rest frame (e )(3) of R 3 is given by

                          X  X  = (ct  + x)(ct  − x ) = c2t  − x
                                                                     2      2
                                                                                    (11.8)

(Recall that any geometric number G ∈ G3 has the form G = (α + β i)+ a + ib where
α , β ∈ R so that G   = G† − = (α + β i) − (a + ib).) The crucial fact is that the space-
time interval is independent of the rest frame in which it is calculated. For example,
if X  = Xe−φ v̂ , then
                                                    
                            X  X = Xe−φ v̂ e+φ v̂ X = X X.
                                                             

For valid rest frames, the calculation

                         X  X = c2t  − x = c2t 2 − x2 = X X = 0,
                                      2      2


shows that postulate (2) of special relativity is satisfied.
   Early work of the author in developing special relativity in the geometric algebra
G3 can be found in [68–70] and later with William Baylis in [5]. In the remaining
sections of this chapter, we restrict our study of special relativity to the geometric
algebra G2 of the Euclidean plane R2 . This simplifies the discussion considerably
with little loss of generality.
186                                                                 11 Geometry of Moving Planes


Exercises

1. In (11.7) and (11.8), we used the Clifford conjugation (3.33) of G(R3 ). Show
   that we could equally well use the Clifford conjugation operation of G(R 3 ) or
   that of any other valid rest frame.
2. For the valid rest frame (e )(3) of R 3 given in the example (11.6), show that
                                   ⎛                         ⎞
                                     cosh φ    0 −i sinh φ
                       (e )T(3) = ⎝ 0         1        0    ⎠ (e)T .
                                                                  (3)
                                    i sinh φ 0       cosh φ
   Also verify that
                             e(3) ≡ e1 ∧ e2 ∧ e3 = e1 e2 e3 = i,
   so that the concept of the unit volume element i is independent of the rest frame
   in which it is calculated.
3. (a) Verify that G3 = G(R3 ) = G(R 3 ) is just a regrading of the elements of G3
       where (e)(3) and (e )(3) are given in (11.6).
   (b) Given x = (e )(3) (x )(3) ∈ R 3 and y = (e )(3) (y )(3) R 3 , calculate
                                              1
                                     x · y ≡ (x y + y x )
                                              2
       and
                                             1
                                    x ∧ y ≡ (x y − yx ).
                                             2
4. For the unit vector â = e1 cos αx + e2 cos αy + e3 cos αz ∈ R3 , define the valid rest
   frame (e )(3) of R 3 = span(e )(3) by
                                              φ â           φ â
                                 (e )(3) = e 2 (e)(3) e− 2 .

   Find the matrix of transition A such that

                                      (e )(3) = (e)(3) A

   and show that ∧(e )(3) = ∧(e)(3) det A = i.



11.2 Relative Orthonormal Basis

We have seen in Chap. 3 that the geometric algebra G2 algebraically unites the
complex number plane C and the vector plane R2 . This unification opens up many
new possibilities. Recall (3.22) that an active rotation R(x) in R2 has the form

                                  R(x) = e− 2 iθ xe 2 iθ ,
                                               1     1
                                                                                          (11.9)
11.2 Relative Orthonormal Basis                                                                  187




                                y        i                            1 e        1 e
                                                                          2          2
                                                              e1     e2     e1 e 2
                                e2

                           R2                           e1
                                                                1         x   1
                                                                     i            i
                                                   e1         e 2        e1 e 2




Fig. 11.3 An active rotation and an active boost. The active rotation takes place in the Euclidean
plane R2 , and the active boost takes the Euclidean plane R2 into the (relative) Euclidean plane R 2


where the bivector i = e12 . Consider the transformation L(x) defined by
                                                         φa    φa
                                      x = L(x) = e− 2 xe 2                                 (11.10)
for a unit vector a ∈ R2 . The transformation (11.10) has the same half-angle form as
the rotation (11.9). We say that (11.10) defines an active Lorentz boost of the vector
x into the relative vector x moving with velocity1
                                 v
                                   = tanh (−φ a) = −a tanh φ                                (11.11)
                                 c
where c is the velocity of light. For simplicity, we shall always take c = 1. An active
rotation and an active boost are pictured in Fig. 11.3.
   Both R(x) and L(x) are inner automorphisms on G2 , satisfying R(g1 g2 ) =
R(g1 )R(g2 ) and L(g1 g2 ) = L(g1 )L(g2 ) for all g1 , g2 ∈ R2 . Whereas R(x) is an
outermorphism, preserving the grading of the algebra G2 into scalars, vectors, and
bivectors, the mapping L(x) does not have this property as we shall shortly see.
   Note that under both a Euclidean rotation (11.9) and under an active boost
(11.10),
                                     |x |2 = (x )2 = x2 = |x|2 ,




1 We have introduced the minus sign in (11.11) to keep (11.10) consistent with Definition 11.1.1.
188                                                                    11 Geometry of Moving Planes


so that the Euclidean lengths |x| = |x | of both the rotated vector and the boosted
relative vector are preserved. Whereas the meaning of this statement is well-known
for rotations, the corresponding statement for a boost needs further explanation.
   The active boost (11.10) leaves invariant the direction of the boost, that is
                                                  φa     φa
                                   L(a) = e− 2 ae 2 = a.                                   (11.12)

On the other hand, for the vector ai orthogonal to a, we have
                              φa        φa
                 L(ai) = e− 2 aie 2 = aieφ a = ai cosh φ − i sinh φ ,                      (11.13)

showing that the boosted relative vector L(ai) has picked up the bivector component
−i sinh φ .
   We say that two relative vectors are orthogonal if they are anticommutative. From
the calculation

                   L(a)L(ai) = aaieφ a = −aieφ a a = −L(ai)L(a),                           (11.14)

we see that the active boost of a pair orthonormal vectors gives a pair of orthonormal
relative vectors. When the active Lorentz boost is applied to the bivector i = e1 e2 ,
we find that j = L(i) = ieaφ so that a boost of the bivector i in the direction of the
vector a gives the relative bivector j = ieaφ . Note that

                           j2 = ieaφ ieaφ = i2 e−aφ eaφ = −1

as expected.
   Using (11.12)–(11.14), we say that

                                   B j := {1, e1 , e2 , e1 e2 },                       (11.15)

where e1 = a, e2 = aieφ a , and j = aaieφ a = ieφ a , makes up a relative orthonormal
basis of G2 . Note that the defining rules for the standard basis (3.9) of G2 remain
the same for the relative basis B j :

                       (e1 )2 = (e2 )2 = 1, and e1 e2 = −e2 e1 .
Essentially, the relative basis B j of G2 regrades the algebra into relative vectors and
relative bivectors moving at the velocity of v = a tanh φ with respect to the standard
basis Bi . We say that j defines the direction and orientation of the relative plane

                    R2j := {v | v = x e1 + y e2 , for x , y ∈ R}.                  (11.16)

   Active rotations (3.22) and active boosts (11.10) define two different kinds
of automorphisms on the geometric algebra G2 . Whereas active rotations are
well understood in Euclidean geometry, an active boost brings in concepts from
non-Euclidean geometry. Since an active boost essentially regrades the geometric
algebra G2 into relative vectors and relative bivectors, it is natural to refer to the
relative geometric algebra G2 of the relative plane (11.16) when using this basis.
11.3 Relative Geometric Algebras                                                       189


Exercises

1. Find the relative orthonormal basis (11.15) in G2 for the active Lorentz boost
   defined by the velocity vector v = e1 tanh φ where |v| = 12 of the speed of light.
2. Find the relative orthonormal basis (11.15) in G2 for the active Lorentz boost
   defined by the velocity vector v = e1 tanh φ where |v| = 34 of the speed of light.



11.3 Relative Geometric Algebras

We have seen that both the unit bivector i and the relative unit bivector j = ieaφ have
square −1. Let us see what can be said about the most general element h ∈ G2 which
has the property that h2 = −1. In the standard basis (3.9), h will have the form
                                   h = h 1 e1 + h 2 e2 + h 3 i

for h1 , h2 , h3 ∈ R as is easily verified. Clearly the condition that
                                                                    h = h1 + h2 − h3 =
                                                                       2  2    2    2

−1 will be satisfied if and only if 1 + h21 + h22 = h23 or h3 = ± 1 + h21 + h22. We have
two cases:
                                                         
1. If h3 ≥ 0, define cosh φ = 1 + h21 + h22, sinh φ = h21 + h22, and the unit vector a
                                              h1 e2 −h2 e1
   such that ia sinh φ = h1 e1 + h2 e2 or a = √             . Defined in this way, h = ieaφ
                                                     1+h1 +h2
                                                     2    2

   is a relative bivector to i.                       
2. If h3 < 0, define cosh φ = 1 + h21 + h22, sinh φ = − h21 + h22, and the unit vector
                                                    h1 e2 −h2 e1
   a such that ia sinh φ = −(h1 e1 + h2 e2 ) or a = √             . In this case, h = −ieaφ
                                                           21+h1 +h2
                                                                2

   is a relative bivector to −i.
   From the above remarks, we see that any geometric number h ∈ G2 with the
property that h2 = −1 is a relative bivector to ±i. The set of relative bivectors to +i,
        H + := {ieφ a | a = e1 cos θ + e2 sin θ , 0 ≤ θ < 2π , φ ∈ R}              (11.17)

are said to be positively oriented . Moving relative bivectors i, j, and k are pictured
in Fig. 11.4. Similarly, the set H − of negatively oriented relative bivectors to −i
can be defined.
   For each positively oriented relative bivector h = ieaφ ∈ H + , we define a
positively oriented relative plane R2h by

                          R2h = {x| x = xa + yai, x, y ∈ R},

and the corresponding relative basis Bh of the geometric algebra G2 :

                                Bh = {1, a, aieaφ , ieaφ }.                        (11.18)
190                                                           11 Geometry of Moving Planes

Fig. 11.4 The relative
bivectors j is moving in the
direction a, and k is moving                                                    v           j
in the direction b with respect
to i. Similarly, k is moving in                                             a
the direction c with respect to
j. The extra labels u, v, and w
for the rest frames of these                                                            c           d
respective bivectors will be                                     u      i
explained later, as will the
significance of the direction d
                                                                            b

                                                                                    w           k


In Fig. 11.4, we have also introduced the symbols u, v, and w to label the rest frames,
or inertial systems, defined by the relative bivectors i, j, and k, respectively. These
symbols will later take on an algebraic interpretation as well.
    For each relative plane R2h , there exist a relative inner product and a relative outer
product. Rather than use the relative inner and outer products on each different
relative plane, we prefer to decompose the geometric product of two elements
g1 , g2 ∈ G2 into symmetric and antisymmetric parts. Thus,
              1                  1
       g1 g2 = (g1 g2 + g2 g1 ) + (g1 g2 − g2g1 ) = g1          g2 + g1  g2            (11.19)
              2                  2
           
where g1 g2 = 12 (g1 g2 + g2 g1 ) is called the symmetric product and g1  g2 =
2 (g1 g2 − g2 g1 ) is called the antisymmetric product. We use the boxed cross product
1

for the antisymmetric product to distinguish it from the closely related vector cross
product.
   We give here formulas for evaluating the symmetric and antisymmetric products
of geometric numbers with vanishing scalar parts. Letting A = a1 e1 + a2 e2 + a3 i,
B = b1 e1 + b2e2 + b3 i, and C = c1 e1 + c2 e2 + c3 i, we have

                                  A    B = a1 b1 + a2 b2 − a3 b3 ,
                                                 ⎛                 ⎞
                                                   e1 e2 −i
                                                 ⎜                 ⎟
                                   A  B = − det ⎝a1 a2 a3 ⎠,
                                                  b1     b2    b3
                                                 ⎛                 ⎞
                                                  a1     a2    a3
                         A                       ⎝
                                  (B  C) = − det b1     b2    b 3 ⎠,
                                                   c1    c2    c3
11.4 Moving Planes                                                                     191


which bear striking resemblance to the dot and cross products of vector analysis.
In general, a nonzero geometric number A ∈ G2 with vanishing scalar part is said to
be a relative vector if A2 > 0, a nilpotent if A2 = 0, and a relative bivector if A2 < 0.



Exercises

1. Let A = e1 + 2e2 + i, B = 2e1 + e2 − i and C = e1 + e2 + 2i in G2 .
                     
   (a) Calculate A B.
   (b) Calculate A  B.
        
   (c) A (B  C).
2. (a) Calculate the relative basis (11.18) for the relative geometric algebra gener-
       ated by the vector a = e1 and the hyperbolic angle φ = 1.
   (b) What is the velocity of this rest frame relative to the bivector i = e12 of G2 ?
3. Find a nilpotent element N ∈ G2 .



11.4 Moving Planes

Consider the set H + of positively oriented relative bivectors to i. For j ∈ H + ,
this means that j = ieφ a as given in (11.17). We say that the rest frame v, and its
relative plane R2j , defined by the bivector j, is moving with velocity uv := a tanh φ
with respect to the rest frame u and its relative plane R2i defined by the bivector i.
   Note that j = ieφ a implies that i = je−φ a so that if j is moving with velocity
uv = a tanh φ with respect to i, then i is moving with velocity vu = −a tanh φ with
respect to j. Suppose now for the inertial system w that k = ieρ b ∈ H + , where the
unit vector b ∈ R2i and the hyperbolic angle ρ ∈ R. Then

                      k = i(eφ a e−φ a )eρ b = j(e−φ a eρ b ) = jeω c ,

where eω c = e−φ a eρ b for some hyperbolic angle ω and relative unit vector
c ∈ R2j ∩ R2k .
   Expanding eω c = e−φ a eρ b , we get

       cosh ω (1 + vw) = e−φ a eρ b = cosh φ cosh ρ (1 − uv)(1 + uw )
                         = cosh φ cosh ρ [(1 − uv · uw ) + (uw − uv − uv ∧ uw )].

It follows that
                         cosh ω = (cosh φ cosh ρ )(1 − uv · uw ),                   (11.20)
192                                                                    11 Geometry of Moving Planes


and
              cosh φ cosh ρ                        uw − uv − uv ∧ uw
       vw =                 (uw − uv − uv ∧ uw ) =                   .                     (11.21)
                 cosh ω                               1 − uv · uw
                                                              vw
  We have found a relative unit vector c ∈ R2j ∩ R2k , c := tanh ω and a hyperbolic
angle ω ≥ 0 with the property that

                                k = jeω c = e− 2 ω c je 2 ω c .
                                                           1       1



The relative bivector k has velocity vw = c tanh ω with respect to the j. However,
the relative unit vector c ∈
                           / R2i . This means that the relative vector c defining
the direction of the velocity of the relative bivector k with respect to j is not
commensurable with the vectors in R2i .
   The question arises whether or not there exists a unit vector d ∈ R2i with the
property that

                       k = e− 2 Ω d je 2 Ω d
                               1        1
                                                       for some Ω ∈ R.                     (11.22)
Substituting j = ieφ a and k = ieρ b into this last equation gives

                                ieρ b = e− 2 Ω d ieφ a e 2 Ω d ,
                                                   1               1



which is equivalent to the equation

                                   eρ b = e 2 Ω d eφ a e 2 Ω d .
                                               1               1
                                                                                           (11.23)

The transformation L p : G2 − > G2 defined by

                                   L p (x) = e 2 Ω d xe 2 Ω d
                                                       1       1
                                                                                           (11.24)

is called the passive Lorentz boost relating R2j to R2k with respect to R2i .
    Equation (11.23) can either be solved for eρ b given eΩ d and eφ a , or for eΩ d
given eφ a and eρ b . Defining the velocities uv = a tanh φ , uw = b tanh ρ , and uvw =
d tanh Ω , we first solve for eρ b given eΩ d and eφ a . In terms of these velocities,
equation (11.23) takes the form
                                                                                        
   cosh ρ (1 + uw ) = cosh φ e 2 Ω d (1 + uv )e 2 Ω d = cosh φ eΩ d + e 2 Ω d uv e 2 Ω d
                                1               1                       1          1


                                                            
                     = cosh φ cosh Ω (1 + uvw )(1 + uv ) + cosh φ u⊥    v


where uv = (uv · d)d and u⊥
                          v = (uv ∧ d)d . Equating scalar and vector parts gives

                        cosh ρ = cosh φ cosh Ω (1 + uv · uvw ),                            (11.25)

and
                              uv + uvw + ( cosh
                                              1
                                                Ω − 1)(uv ∧ d)d
                       uw =                                     .                          (11.26)
                                        1 + uv · uvw
11.4 Moving Planes                                                                             193


Equation (11.26) is the (passive) composition formula for the addition of velocities
of special relativity in the rest frame u, [36, p. 588] and [55, p. 133].
   To solve (11.23) for eΩ d given eφ a and eρ b , we first solve for the unit vector
d ∈ R2 by taking the antisymmetric product of both sides of (11.23) with d to get
the relationship

                    d  b sinh ρ = e 2 Ω d d  a sinh φ e 2 Ω d = a sinh φ ,
                                      1                       1



or equivalently,
                                d ∧ (b sinh ρ − a sinh φ ) = 0.
In terms of the velocity vectors uv and uw , we can define the unit vector d by
                            uw cosh ρ − uv cosh φ
            d=                                                                             (11.27)
                u2v cosh φ − 2uv · uw cosh φ cosh ρ + u2w cosh2 ρ
                        2


     Taking the symmetric product of both sides of (11.23) with d gives

                                 [d       eφ a ]eΩ d = d     eρ b ,

or
                   (d cosh φ + a · d sinh φ )eΩ d = d cosh ρ + b · d sinh ρ .
Solving this last equation for eΩ d gives
                     (d cosh ρ + b · d sinh ρ )(d cosh φ − a · d sinh φ )
            eΩ d =                                                        ,                 (11.28)
                                cosh2 φ − (a · d)2 sinh2 φ
or in terms of the velocity vectors,
                                                                            
                             cosh ρ           (1 + uw · d d)(1 − uv · d d)
         cosh Ω (1 + uvw ) =
                             cosh φ                  1 − (uv · d)2
                                                                                     
                               cosh ρ         1 − (uv · d)(uw · d) + (uw − uv ) · d d
                             =                                                          .
                               cosh φ                      1 − (uv · d)2
     Taking scalar and vector parts of this last equation gives
                                                               
                                  cosh ρ 1 − (uv · d)(uw · d)
                       cosh Ω =                                                             (11.29)
                                  cosh φ         1 − (uv · d)2
and
                                             (uw − uv ) · d d
                                 uvw =                          .                           (11.30)
                                           1 − (uv · d)(uw · d)
We say that uvw is the relative velocity of the passive boost (11.24) of j into k
relative to i. The passive boost is at the foundation of the algebra of physical space
formulation of special relativity [5], and a coordinate form of this passive approach
194                                                             11 Geometry of Moving Planes


was used by Einstein in his famous 1905 paper [21]. Whereas Hestenes in [38]
employs the active Lorentz boost, in [36] he uses the passive form of the Lorentz
boost.
   The distinction between active and passive boosts continues to be the source
of much confusion in the literature [62]. Whereas an active boost (11.10) mixes
vectors and bivectors of G2 , the passive boost defined by (11.24) mixes the vectors
and scalars of G2 in the geometric algebra G2 of i. In the next section, we shall
find an interesting geometric interpretation of this result in a closely related higher
dimensional space.


Exercises

1. Let j iee1 and k = ie2e2 .
   (a) Express the relative bivector in the form k = jeω c by using the formulas of
       this section. Find the hyperbolic angle ω and the relative vector c.
   (b) Find the hyperbolic angle Ω (or eΩ d ) and a unit vector d ∈ R2i such that
       k = je− 2 Ω d je 2 Ω d as in formula (11.28).
                1       1


   (c) What is the relative velocity uv that the bivector j is moving with respect to i?
   (d) What is the relative velocity vw that the bivector k is moving with respect
       to j?
   (e) What is the relative velocity uw that the bivector k is moving with respect
       to i?



*11.5 Splitting the Plane

Geometric insight into the previous calculations can be obtained by splitting or
factoring the geometric algebra G2 into a larger geometric algebra G1,2 . The most
mundane way of accomplishing this is to factor the standard orthonormal basis
vectors of (3.9) into anticommuting bivectors of a larger geometric algebra G1,2 =
G(R1,2 ) of the pseudo-Euclidean space R1,2 , called restricted Minkowski space–
time. By Minkowski space–time, we mean the pseudo-Euclidean space R1,3 , [33,
p. 24]. We write
                                e1 = γ0 γ1 , and e2 = γ0 γ2 ,
and assume the rules γ02 = 1 = −γ12 = −γ22 , and γμ γη = −γη γμ for all μ , η = 0, 1, 2
and μ = η .
   (http://en.wikipedia.org/wiki/Minkowski space)
*11.5 Splitting the Plane                                                              195


   The standard orthonormal basis of G1,2 consists of the eight elements

                            {1, γ0 , γ1 , γ2 , γ01 , γ02 , γ21 , γ012 }.          (11.31)

With this splitting, the standard basis elements (3.9) of G2 are identified with
elements of the even subalgebra

                     G+
                      1,2 := span{1, e1 = γ01 , e2 = γ02 , e12 = γ21 }            (11.32)

of G1,2 . We denote the oriented unit pseudoscalar element by s = γ012 . Note that
s ∈ Z(G1,2 ), the center of the algebra G1,2 .
    The geometric algebra G1,2 is algebraically closed in the sense that in dealing
with the characteristic and minimal polynomials of the matrices which represent the
elements of G1,2 , we can interpret complex eigenvalues of these polynomials to be
in the space–time algebra G1,2 . Alternatively, we can interpret complex eigenvalues
to be in G1,3 = U(G1,2 ) as we did in Chap. 10.
    Consider now the mapping

                            ψ : H + −→ {r ∈ G11,2 | r2 = 1}                       (11.33)

defined by r = ψ (h) = sh for all h ∈ H + . The mapping ψ sets up a 1 − 1
correspondence between the positively oriented unit bivectors h ∈ H + and unit
timelike vectors r ∈ G11,2 , which are dual under multiplication by the pseudoscalar
s. Suppose now that ψ (i) = u, ψ (j) = v and ψ (k) = k. Then it immediately follows
by duality that if j = ieφ a , k = ieρ b , and k = jeω c , then v = ueφ a , w = ueφ a , and
w = veω c , respectively. It is because of this 1 − 1 correspondence that we have
included the labels u, v, and w as another way of identifying the oriented planes
of the bivectors i, j, and k in Fig. 11.4.
    Just as vectors in x, y ∈ G12 are identified with points x, y ∈ R2 , Minkowski vectors
x, y ∈ G11,2 are identified with points x, y ∈ R1,2 the 3-dimensional pseudo-Euclidean
space of restricted Minkowski space–time. A Minkowski vector x ∈ R1,2 is said
to be timelike if x2 > 0, spacelike if x2 < 0, and lightlike if x = 0 but x2 = 0.
For two Minkowski vectors x, y ∈ G11,2 , we decompose the geometric product xy
into symmetric and antisymmetric parts

                        1           1
                    xy = (xy + yx) + (xy − yx) = x · y + x ∧ y,
                        2           2

where x · y := 12 (xy + yx) is called the Minkowski inner product and x ∧ y := 12 (xy −
yx) is called the Minkowski outer product to distinguish these products from the
corresponding inner and outer products defined in G2 .
196                                                          11 Geometry of Moving Planes


    In [34] and [38], David Hestenes gives an active reformulation of Einstein’s
special relativity in the space–time algebra G1,3 . In [68, 70], I show that an
equivalent active reformulation is possible in the geometric algebra G3 of the
Euclidean space R3 . In [5], the relationship between active and passive formulations
is considered.
    For the two unit timelike vectors u,v ∈ G1,2 where u = ψ (i) and v = ψ (j),
we have
                     uv = u · v + u ∧ v = eφ a = cosh φ + a sinh φ .             (11.34)
It follows that u · v = cosh φ and u ∧ v = a sinh φ , which are the hyperbolic
counterparts to the geometric product (3.1) and (3.7) of unit vectors a, b ∈ R2 .
   The Minkowski bivector

                                    u∧v
                             uv =       = a tanh φ = −vu
                                    u·v

is the relative velocity of the timelike vector unit vector v in the rest frame of u.
    Suppose now that for i, j, k ∈ H + , ψ (i) = u, ψ (j) = v, and ψ (k) = w so that
uv = eφ a , uw = eρ b , and vw = eω c , respectively. Let us recalculate vw = eω c in the
space–time algebra G1,2 :

               vw = vuuw = (vu)(uw) = (v · u − u ∧ v)(u · w + u ∧ w)
                   = (v · u)(w · u)(1 − uv)(1 + uw ).

Separating into scalar and vector parts in G2 , we get

                            v · w = (v · u)(w · u)(1 − uv · uw )                 (11.35)

and
                     (v · w)vw = (v · u)(w · u)[uw − uv − uv ∧ uw ],             (11.36)
identical to what we calculated in (11.20) and (11.21), respectively.
   More eloquently, using (11.35), we can express (11.36) in terms of quantities
totally in the algebra G2 ,
                            uw − uv − uv ∧ uw
                     vw =                     = c tanh ω = −wv .                 (11.37)
                               1 − uv · uw
We see that the relative velocity vw , up to a scale factor, is the difference of the
velocities uw and uv and the bivector uv ∧ uw in the inertial system u. Setting w = v
in (11.35) and solving for v · u in terms of u2v gives
                                                  1
                              cosh φ := u · v =         ,                       (11.38)
                                                 1 − u2v
a famous expression in Einstein’s theory of special relativity, [38].
*11.5 Splitting the Plane                                                               197


    Let us now carry out the calculation for (11.29) and the relative velocity (11.30)
of the inertial system w with respect to v as measured in the rest frame of u. We begin
by defining the bivector D = (w − v) ∧ u and noting that w ∧ D = v ∧ w ∧ u = v ∧ D.
Now note that

                w = wDD−1 = (w · D)D−1 + (w ∧ D)D−1 = w + w⊥

where w = (w · D)D−1 is the component of w parallel to D and w⊥ = (w ∧ D)D−1
is the component of w perpendicular to D. Next, we calculate

                    (w · D)(v · D) (w · D)(v · D)
        ŵ v̂ = −                   =             = (w · D)(v · D)−1,             (11.39)
                     |w · D||v · D|   (v · D)2

since

                (w · D)2 = (v · D)2 = [(w · v − 1)u − (v · u)(w − v)]2
                            = (w · v − 1)[(w · v − 1) − 2(v · u)(w · u)] < 0.

   We can directly relate (11.39) to (11.29) and (11.30),

              (w · D)uu(v · D) [(w · D) · u + (w · D) ∧ u][(v · D) · u + (v · D) ∧ u]
    ŵ v̂ =                   =
                   (v · D)2                          (v · D)2
              [−(w ∧ u) · D − (w · u)D][−(v ∧ u) · D + (v · u)D]
          =
                                   (v · D)2
                               [uw · d + d][−uv · d + d]
          = −(w · u)(v · u)
                                        (v · d)2
                               1 − (uv · d)(uw · d) + (uw − uv ) · d d
          = −(w · u)(v · u)
                                              (v · d)2

where we have used the fact that d = D/|D|, see (11.27). In the special case when
v = w, the above equation reduces to (v · d)2 = −(u · v)2 [1 − (uv · d)2 ]. Using this
result in the previous calculation, we get the desired result that

                            (w · u)[1 − (uv · d)(uw · d) + (uw − uv ) · d d]
                 ŵ v̂ =                                                     ,
                                         (u · v)[1 − (uv · d)2 ]

the same expression we derived after (11.28).
                                               1           1
   Defining the active boost Lu (x) = (ŵ v̂ ) 2 x(v̂ ŵ ) 2 , we can easily check that it
has the desired property that

                Lu (v) = Lu (v + v⊥) = ŵ v̂ v + v⊥ = w + w⊥ = w.
198                                                              11 Geometry of Moving Planes

Fig. 11.5 Passive boost in
the space–time plane of D




                                                        j

                                               i

                                                    k




Fig. 11.6 Geometry of moving planes: Each disk represents a moving plane. The plane in the
center is at rest. All the other planes are moving off in all different directions, each color
representing a different direction. As the planes get further away from the center, they are moving
faster and faster and turn redder and redder as they approach the speed of light on the boundary of
the seen universe. Nothing can move faster than the speed of light
*11.5 Splitting the Plane                                                             199


Thus, the active boost taking the unit timelike vector v̂ into the unit timelike vector
ŵ is equivalent to the passive boost (11.24) in the plane of the space–time bivector
D, see Fig. 11.4.
   The above calculations show that each different rest frame u measures passive
relative velocities between the systems v and w differently by a boost in the plane
of the Minkowski bivector D = (w − v) ∧ u, whereas there is a unique active boost
(11.10) that takes the inertial system v into w in the plane of v ∧ w. The concept of
a passive and active boost become equivalent when u ∧ v ∧ w = 0, the case when
b = ±a (Fig. 11.5).
   Figure 11.6 is an attempt to artistically depict the idea of moving planes, as
explained in the caption. It would be much harder to draw such a figure if, instead,
we tried to draw the moving planes in the three-dimensional space R3 of G3 .



Exercises

1. Redo and compare the calculations done in Problems 1abcde of the last section in
   the splitting geometric algebra G1,2 .
2. For u = γ0 and v = γ0 eφ γ0 w where w = γ1 cos θ + γ2 sin θ , carry out the calculation
   given in (11.34), find a, and show that a2 = 1.
Chapter 12
Representation of the Symmetric Group




                              There are things which seem incredible to most men who have
                              not studied Mathematics.
                                                                  —Archimedes of Syracuse



Over the last 112 years since Frobenius and Burnside initiated the study of
representation theory, matrix algebra has played a central role with the indispensable
idea of a group character [16]. Recently, point groups and crystallographic groups
have been studied in geometric algebra [37, 40]. In this chapter, representations
of the symmetric group are studied in the geometric algebra Gn,n of neutral
signature. The representation depends heavily upon the definition of a new twisted
symmetric product, which does not depend upon a matrix representation, although
it is equivalent to it.



12.1 The Twisted Product

Let A be any associative algebra over the real or complex numbers and with the
unity 1. For elements a, b ∈ A , let ab ∈ A denote the product of a and b in A . For
elements a, b ∈ A , we define a new product
                         1                      1
                  a ◦ b = (1 + a + b − ab) = 1 − (1 − a)(1 − b),                  (12.1)
                         2                      2
which we call the twisted product of a, b ∈ A . In the definition of the twisted
product, the order of the elements in the product is always respected. This makes
very general identities hold, even if its arguments are not commutative.
   For any element a ∈ A , we define the special symbols
                            1                             1
                a+ = a ◦ 0 = (1 + a),      a− = (−a) ◦ 0 = (1 − a),               (12.2)
                            2                             2

G. Sobczyk, New Foundations in Mathematics: The Geometric                            201
Concept of Number, DOI 10.1007/978-0-8176-8385-6 12,
© Springer Science+Business Media New York 2013
202                                                 12 Representation of the Symmetric Group


and note that a+ + a− = 1 and a+ − a− = a. Using these symbols, we can
reexpress (12.1) in the useful alternative forms

                              a ◦ b = a+ + a−b = b+ + ab−.                           (12.3)

Note also the curious special cases

                                                            1
                        1 ◦ a = 1, a ◦ (−1) = a, and 0 ◦ 0 = ,                       (12.4)
                                                            2

and if a2 = ±1,
                                a ◦ a = a,     a ◦ a = 1 + a,                        (12.5)
respectively.
   It can be readily verified that for any a1 , a2 , a3 ∈ A that

                     (a1 ◦ a2) ◦ a3 = a1 ◦ (a2 ◦ a3) = 1 − 2a−  − −
                                                             1 a2 a3 ,               (12.6)

so that the twisted product inherits the important associative property from the
associative product in A . More generally, for n elements a1 , . . . , an ∈ A , we have

       a1 ◦ · · · ◦ an = 1 − 2a−        −      −        −
                               1 · · · an ⇐⇒ 2a1 · · · an = 1 − a1 ◦ · · · ◦ an .    (12.7)

It should also be noticed that whenever any argument is replaced by its negative on
the left side of the identity, then the corresponding sign of the term must be changed
on the right side. For example,

                        (−a1 ) ◦ a2 ◦ · · · ◦ an = 1 − 2a+  −        −
                                                         1 a2 · · · an .

   For three elements a, b, c ∈ A , using the definition (12.1), we derive the
distributive-like property

                       1
      a ◦ (b + c) = 1 − (1 − a)[(1 − b) + (1 − c) − 1] = a ◦ b + a ◦ c − a+.         (12.8)
                       2
Letting c = −b in the above identity, and using (12.2), we find the important identity
that
                              2a+ = a ◦ b + a ◦ (−b).                           (12.9)
   The commutator of the twisted product is also very useful. We find, using (12.7),
that
                                                       1
              a ◦ b − b ◦ a = −2(a−b− − b− a− ) = − (ab − ba),              (12.10)
                                                       2
as can be easily verified. Thus, the commutator of a ◦ b can be expressed entirely in
terms of the product of b− and a− . There is one other important general property
12.1 The Twisted Product                                                                  203


that needs to be mentioned. If a, b, g, g−1 ∈ A , where gg−1 = 1, then it immediately
follows from the definition (12.1) that

                             g(a ◦ b)g−1 = (gag−1 ) ◦ (gbg−1).                    (12.11)



12.1.1 Special Properties

Under certain conditions, the twisted product is also distributive over ordinary
multiplication. Suppose for k > 1 that a, b1 , . . . , bk ∈ A , a2 = 1 and that abi = bi a
for i = 1, . . . , k − 1. Then
                                           k
                     a ◦ (b1 · · · bk ) = ∏(a ◦ bi) = a+ + a− b1 · · · bk .       (12.12)
                                          i=1

The identity (12.12) is easily established. Using (12.3), we have
                              a ◦ (b1 · · · bk ) = a+ + a− b1 · · · bk

for the the left side of (12.12). For the right side, we use the fact that a+ and a− are
mutually annihilating idempotents so that
                     k               k
                    ∏(a ◦ bi) = ∏(a+ + a−bi) = a+ + a−b1 · · · bk .
                    i=1             i=1

   In the special case that α ∈ R and a2 = 1, we have

                      a ◦ (α b) = (a ◦ α )(a ◦ b) = (a+ + α a− )a ◦ b.            (12.13)
For α = −1, (12.13) reduces to a ◦ (−b) = a(a ◦ b), which further reduces to
                                      a ◦ (−a) = a2 = 1                           (12.14)

when b = a. Curiously when a2 = −1, a ◦ (−a) = 0, a divisor of zero.
    Let us suppose now that for k ∈ N, we have k mutually commuting elements
a1 , . . . , ak and that a21 = · · · = a2k = 1. Then it is easy to show that

                                      (a1 ◦ · · · ◦ ak )2 = 1,                    (12.15)
as follows by induction on k. For k = 1, there is nothing to show. Suppose now that
the hypothesis is true for some k ∈ N so that (a1 ◦ · · · ◦ ak )2 = 1. Then for k + 1,
using (12.3), we have

   [(a1 ◦ · · · ◦ ak ) ◦ ak+1]2 = [a+                        − 2
                                    k+1 + (a1 ◦ · · · ◦ ak )ak+1 ]

                              = (a+                         2 −         +      −
                                  k+1 ) + (a1 ◦ · · · ◦ ak ) (ak−1 ) = ak−1 + ak−1 = 1.
                                       2                            2
204                                             12 Representation of the Symmetric Group


   One other striking relationship that the twisted product satisfies when a2 = 1 is
that

       a+ ((ab) ◦ c) = a+ (b ◦ c),   and a− ((ab) ◦ c) = a− ((−b) ◦ c),           (12.16)

as follows directly from the steps

                         1                      1
       a+ ((ab) ◦ c) = a+ (1 + ab + c − abc) = (a+ + a+b + a+c − a+bc)
                         2                      2
                         1
                     = a+ (1 + b + c − bc) = a+ (b ◦ c).
                         2

The other half of (12.16) follows similarly. Thus, the idempotents a+ and a− absorb
the a in (ab)◦ c, leaving behind either 1 or −1 to give the stated results. In the special
case that b = 1, (12.16) reduces to the even simpler relationship

                      a+ (a ◦ c) = a+ ,   and a− (a ◦ c) = a− c.                  (12.17)



12.1.2 Basic Relationships

We list here basic relationships, which follow from (12.13) and (12.14), that hold
between two commutative elements a1 , a2 with the property that a21 = a22 = 1.
1. (a1 ◦ a2)2 = 1 ⇐⇒ [((−a1 ) ◦ a2]2 = [a1 ◦ (−a2)]2 = [((−a1 ) ◦ (−a2)]2 = 1,
2. a1 (a1 ◦ a2) = a1 ◦ (−a2) ⇐⇒ (a1 ◦ a2 )[a1 ◦ (−a2)] = a1 ,
3. a2 (a1 ◦ a2) = (−a1 ) ◦ a2 ⇐⇒ (a1 ◦ a2 )[(−a1 ) ◦ a2] = a2 ,
4. a1 a2 (a1 ◦ a2 ) = −(−a1 ) ◦ (−a2) ⇐⇒ (a1 ◦ a2 )[(−a1 ) ◦ (−a2)] = −a1 a2 .
Because of the associativity of the twisted product, these relationships can be easily
extended to the case of more commutative arguments which have square one. For
example, the relationship 2 above for three arguments becomes

  a1 (a1 ◦ a2 ◦ a3) = a1 ◦ [−(a2 ◦ a3 )] ⇐⇒ a1 = (a1 ◦ a2 ◦ a3)[a1 ◦ (−(a2 ◦ a3 ))].

Using the absorption property (12.17), we also have

           a1 (a1 ◦ a2 ◦ a3) = (a+    −                     +    −
                                 1 − a1 )(a1 ◦ a2 ◦ a3 ) = a1 − a1 (a2 ◦ a3 ).




Exercises

1. Prove the four basic relationships given above.
12.2 Geometric Numbers in Gn,n                                                        205


12.2 Geometric Numbers in Gn,n

Let Gn,n be a geometric algebra of the neutral signature (n, n). Since these geometric
algebras are algebraically isomorphic to to real matrix algebras MR (2n ) of square
matrices of order 2n × 2n , they give a comprehensive geometric interpretation to
these matrices. Since we carry out extensive calculations using the invaluable
software package CLICAL [54], we use the conventions in that program for the
definition of basis elements. We briefly review the main features below.
   Let n ≥ 1. The associative geometric algebra Gn,n is a graded algebra

                           Gn,n = G0n,n ⊕ G1n,n ⊕ · · · ⊕ G2n
                                                           n,n ,

of scalars, vectors, bivectors, etc., as we have seen earlier in (3.30) and (10.10) in
Chaps. 3 and 10. As before, the k-vector part of a multivector g ∈ Gn,n is denoted
by < g >k ∈ Gkn,n for 0 ≤ k ≤ 2n.
   The standard orthonormal basis (10.10) of Gn,n is generated by taking the
geometric products of the 2n basis vectors to get

                                   Gn,n = {eλ(k) }2n
                                                  k=0 ,                           (12.18)

where e2i = 1 for 1 ≤ i ≤ n and e2i = −1 for n < i ≤ 2n. Recall that eλ(k) = eλ1 ,...,λk =
eλ1 · · · eλk , where 1 ≤ λ1 < · · · < λk ≤ 2n. By the index set of the geometric algebra
Gn,n , we mean the set of all indices In,n = {λ(k) }2nk=0 which define the basis elements
eλ(k) of Gn,n . By (G†n,n )T we mean the reverse of the basis elements of Gn,n written
as a column matrix. Thus,

                               (G†n,n )T = ({e†λ }2n
                                                  k=0 ) .
                                                       T
                                                  (k)


   We now construct a 2n × 2n real matrix representation of the geometric algebra
Gn,n . First, we define the 2n idempotents u±
                                            i = 2 (1 ± ei,n+i ) for 1 ≤ i ≤ n, which we
                                                1
                       n
use to construct the 2 primitive idempotents

                                 u±±...±      ± ±         ±
                                  1 2 ...n = u1 u2 · · · un .                     (12.19)

Letting Un+ = u+        +
               1 · · · un , all of the other primitive idempotents can then be defined
succinctly by
                                    U sn(α ) = e†λ Un+ eλ
for λ ∈ In the index set for the geometric algebra Gn .
   By the spectral basis of the geometric algebra Gn,n , we mean

                                    (G†n,n )T Un+ Gn,n ,                          (12.20)
206                                               12 Representation of the Symmetric Group


where the convention of matrix row–column multiplication is utilized. Given a
geometric number g ∈ Gn,n , the relationship between g and its matrix representation
[g] with respect to the spectral basis (12.20) is given by
                    g = Gn Un+ [g]T (G†n )T ⇐⇒ g = G†n Un+ [g]GTn ,                 (12.21)

where [g]T denotes the transpose of the matrix [g]. If we denote the entries in the
matrix [g] by gαβ where α , β ∈ In , then we also have the relationship

                               gβ α Un+ = Un+ e−1      +
                                               α geβ Un .                           (12.22)
More details of this construction can be found in [71, 82, 86].
   We have already encountered the construction of the spectral basis for G1,1 , given
in (4.7). For n = 2, we have
      ⎛    ⎞              ⎛                            ⎞
        1                    u++ e1 u−+ e2 u+− e12 u−−
      ⎜ e1 ⎟ +           ⎜                            ⎟
      ⎜ ⎟ U 1 e1 e2 e12 = ⎜ e1 u++ u−+ e12 u+− e2 u−− ⎟ .                           (12.23)
      ⎝ e2 ⎠ 2            ⎝ e2 u++ e21 u−+ u+− −e1 u−− ⎠
       e21                  e21 u++ e2 u−+ −e1 u+− u−−

for the geometric algebra G2,2 . The relationship (12.21) for an element g ∈ G2,2 and
its matrix [g] is
                                                            ⎛ ⎞
                                                               1
                                                           ⎜  e
                                                           T⎜ 1 ⎟
                                                                  ⎟
          g = G2 U2+ [g]T (G†2 )T = 1 e1 e2 e12 u+    +
                                                   1 u2 [g] ⎝       .         (12.24)
                                                               e2 ⎠
                                                                  e21




Exercises

All of the following problems are in the geometric algebra G2,2 for which (12.23)
and (12.24) apply.
1. (a) Find the matrix [ek ] of the unit vectors ek for k = 1, 2, 3, 4.
   (b) Show that the matrix [1]4 that represents the identity element g = 1 is the
       4 × 4 identity matrix.
   (c) Find the matrix representing the pseudoscalar element i = e1234 .
   (d) More generally, show that [g1 + g2 ] = [g1 ] + [g2 ] and [g1 g2 ] = [g1 ][g2 ] for any
       elements g1 , g2 ∈ G2,2 .
2. Find the matrix [e1 + ie3 ] which represents the element e1 + ie3 .
3. Find the inverse (5 + 3e1)−1 of the element 5 + 3e1, and show that

                                [(5 + 3e1)−1 ] = [5 + 3e1]−1 .
12.3 The Twisted Product of Geometric Numbers                                       207


4. Find the matrix [5 + 3e1] of the element 5 + 3e1 ∈ G2,2 .
  (a) What is the characteristic equation and eigenvalues for this matrix?
  (b) What is trace[5 + 3e1] and det[5 + 3e1]?
5. Show that the e1 conjugation, defined in (4.10), satisfies the properties
                     (g1 + g2 )e1 = ge11 + ge21 , and (g1 g2 )e1 = ge11 ge21

   where g1 , g2 ∈ G2,2 . What is the most general element g ∈ G2,2 for which ge1 = g?



12.3 The Twisted Product of Geometric Numbers

Let G = Gn,n and a, b ∈ G1 be vectors. From the definition (12.1),
                    1                             1
             a ◦ b = (1 + a + b − ab), and b ◦ a = (1 + a + b − ba).
                    2                             2
Using (12.10) and the definition of the exterior product of vectors, we find that
                          1
           a ◦ b − b ◦ a = (ba − ab) = 2(b− a− − a−b− ) = b ∧ a.               (12.25)
                          2
A similar calculation shows that for vectors a, b, c ∈ G1 ,

                                   1
        a ◦ (b ∧ c) − (b ∧ c) ◦ a = [(b ∧ c)a − a(b ∧ c)] = (b ∧ c) · a.       (12.26)
                                   2

Note that if the vector a is orthogonal to the plane of b ∧ c, then a · (b ∧ c) = 0 so
that a ◦ (b ∧ c) = (b ∧ c) ◦ a in this case.
   It is interesting to consider the meaning of the symmetric part of the twisted
product. For vectors a, b ∈ G1 , we find that

                            a ◦ b + b ◦ a = 1 + a + b − a · b,                 (12.27)

and for the vector a and bivector b ∧ c, we find that

                a ◦ (b ∧ c) + (b ∧ c) ◦ a = 1 + a + b ∧ c − a ∧ (b ∧ c).       (12.28)

   If a, b, c ∈ G are geometric numbers with the property that ac = −ca and cb = bc,
then
                                 c[a ◦ b] = [(−a) ◦ b]c.                     (12.29)
If in addition cb = −bc, then we have

                               c[a ◦ b] = [(−a) ◦ (−b)]c.                      (12.30)
208                                              12 Representation of the Symmetric Group


These relationships are easily established directly from the definition (12.3) and can
easily be extended to the twisted product of more arguments.
   Let a and b be any geometric numbers with the property that ab = −ba. Then
from the alternative definition of the twisted product (12.3), we find that ab+ = b− a
and
                             1              1                1
                   a+ b+ = (1 + a)b+ = (b+ + b− a) = b ◦ a.                    (12.31)
                             2              2                2
Compare this with the general relationship (12.7) for arbitrary elements. Under the
same condition that ab = −ab, we also have the similar relationships
         1                 1                     1
  a− b+ = b ◦ (−a), a+ b− = (−b) ◦ a, and a− b− = (−b) ◦ (−a).                   (12.32)
         2                 2                     2
We also have
                                                           1
                a ◦ b = 1 − (−b) ◦ (−a)     ⇐⇒       a+ b+ = − b− a−             (12.33)
                                                           2
which follows from (12.31), (12.32), and (12.7), and the simple steps
                      1
               a ◦ b = b+ a+ = 1 − (1 − 2b+a+ ) = 1 − (−b) ◦ (−a).
                      2
Identities (12.32) and (12.33) are striking because they allow us to reverse the order
of the twisted symmetric product by changing the signs of its respective arguments.
   For three geometric numbers a, b, c with the properties that a2 = 1 and ab = −ba,
we find that

        (a ◦ b)(a ◦ c) = (a+ + a− b)(a+ + a−c) = a+ + a− b = a ◦ b.              (12.34)
If, instead, we have the condition that a2 = 1 and ac = ca, then

      (a ◦ c)(a ◦ b) = (a+ + a−c)(a+ + a− b) = a+ + a−cb = a ◦ (cb).             (12.35)

    We see in the above relationships that the properties of the twisted product a ◦ b
heavily depend upon the commutativity of a and b. Suppose now that we have
two pairs of commutative arguments, a1 , a2 and b1 , b2 . Whereas by assumption
a1 a2 = a2 a1 and b1 b2 = b2 b1 , we need some way of conveniently expressing the
commutativity or anticommutativity relationships between them. To this end, we
define the entanglement table tangle(a1, a2 ; b1 , b2 ).
Definition 12.3.1. If a1 b1 = −b1 a1 , a1 b2 = b2 a1 , a2 b1 = −b1 a2 and a2 b2 = −b2a2 ,
we say that the entanglement table tangle(a1, a2 ; b1 , b2 ) is
                                            b1     b2
                                       a1   −      +
                                       a2   −      −
and similarly for other possible commutativity relationships between a1 , a2 and
b1 , b2 .
12.3 The Twisted Product of Geometric Numbers                                               209


  We are interested in doing calculations for commutative pairs of arguments a1 , a2
and b1 , b2 which satisfy the following four entanglement tables:
                         b1 b2                              b1 b2
  Table 1.         a1 − +               Table 2.       a1 + −
                   a2 − −                              a2 − +

                          b1 b2                             b1 b2
   Table 3.         a1 + −              Table 4.       a1 − −
                    a2 + +                             a2 − −
    Thus, suppose that we are given two pairs of commutative elements a1 , a2 ∈ G
and b1 , b2 ∈ G that satisfy the entanglement Table 1. In addition, we assume that
a2i = b2i = 1 for i = 1, 2. Then, using (12.11) and the basic relationships found in
Sect 12.2, we calculate

      (a1 ◦ a2 )(b1 ◦ b2 )(a1 ◦ a2) = [(a1 ◦ a2)b1 (a1 ◦ a2 )] ◦ [(a1 ◦ a2 )b2 (a1 ◦ a2)]
              = (a1 ◦ a2)[(−a1 ) ◦ (−a2)]b1 ◦ (a1 ◦ a2)[a1 ◦ (−a2)]b2
                     = (−a1 a2 b1 ) ◦ (a1b2 ) = (a1 b2 ) ◦ (−a2b1 b2 ).

A similar calculation shows that

                   (b1 ◦ b2 )(a1 ◦ a2)(b1 ◦ b2) = (a1 b2 ) ◦ (−a2b1 b2 ).

It follows from the above calculations that for Table 1 entanglement and square one
arguments,

           (a1 ◦ a2 )(b1 ◦ b2)(a1 ◦ a2) = (b1 ◦ b2)(a1 ◦ a2)(b1 ◦ b2 ).                (12.36)

This is the basic relationship between adjacent 2-cycles in the symmetric group.
Indeed, the relationship (12.36) shows that the element (a1 ◦ a2 )(b1 ◦ b2 ) has order 3.
   For Table 2 entanglement and square one arguments, we find that

 (a1 ◦ a2 )(b1 ◦ b2)(a1 ◦ a2) = (a1 b1 ) ◦ (a2b2 ) = (b1 ◦ b2 )(a1 ◦ a2)(b1 ◦ b2), (12.37)

so the element (a1 ◦ a2 )(b1 ◦ b2 ) with entanglement Table 2 will also have order 3.
Calculations for Tables 3 and 4 entanglement with square one arguments proceed in
exactly the same way and give for Table 3

        (a1 ◦ a2 )(b1 ◦ b2 )(a1 ◦ a2) = b1 ◦ (a2 b2 ) = (a2 ◦ b1)(b1 ◦ b2 ),           (12.38)

and for Table 4

                (a1 ◦ a2)(b1 ◦ b2 )(a1 ◦ a2) = [(−a1 ) ◦ (−a2)](b1 ◦ b2 ).             (12.39)
210                                                 12 Representation of the Symmetric Group


From (12.38), we see directly that

                            [(a1 ◦ a2)(b1 ◦ b2)]2 = a2 ◦ b1 .                       (12.40)

For this case if b1 = −a2 , then (a1 ◦ a2 )(b1 ◦ b2) will have order 2; otherwise it will
have order 4. In the case of Table 4 entanglement, we have

                        [(a1 ◦ a2)(b1 ◦ b2)]2 = (−a1 ) ◦ (−a2),                     (12.41)

so (a1 ◦ a2)(b1 ◦ b2 ) will have order 4.
   There is one very important property about higher-degree twisted products that
we will need. Suppose that a1 ◦ a2 and b1 ◦ b2 are pairs of commutative square one
arguments and let c be an element with square one and such that cai = ai c and
cbi = bi c for i = 1, 2. Then the order of the element (a1 ◦ a2 ◦ c)(b1 ◦ b2 ◦ c) will be
the same as the element (a1 ◦ a2 )(b1 ◦ b2); in symbols,

                   |(a1 ◦ a2 ◦ c)(b1 ◦ b2 ◦ c)| = |(a1 ◦ a2 )(b1 ◦ b2 )|,           (12.42)

as easily follows from the steps

           (a1 ◦ a2 ◦ c)(b1 ◦ b2 ◦ c) = [c+ + (a1 ◦ a2 )c− ][c+ + c− (b1 ◦ b2)]
                                      = c+ + c− (a1 ◦ a2)(b1 ◦ b2),

and the fact that c+ and c− are mutually annihilating idempotents.
   Although we are far from exhausting the many interesting identities that can be
worked out, we now have a sufficient arsenal to continue our study of the symmetric
groups in the geometric algebra Gn,n .



12.4 Symmetric Groups in Geometric Algebras

Our objective is to construct geometric numbers which represent the elements of
the various subgroups S of the symmetric group Sn as a group algebra R in the
geometric algebra G = Gn,n . The construction naturally leads to the interpretation
of R as a real regular R-module, [48, p. 55–56]. To accomplish this, we construct
elements which represent the successive entangled 2-cycles

                                   (12), (13), . . . , (1n),                        (12.43)

which are the generators of the symmetric group Sn . Although there are many such
representations, we consider here only elements in Gn,n of the form

                                   g = a1 ◦ a2 ◦ · · · ◦ an ,                       (12.44)
12.4 Symmetric Groups in Geometric Algebras                                          211


where a1 , . . . , an ∈ Gn,n are mutually commuting blades such that a2i = 1 for 1 ≤
i ≤ n. Since by (12.15), g2 = 1, the element g has order 2 and is a good candidate
for representing a 2-cycle, where 1 ∈ G represents the group identity element. Once
we have a way of representing all 2-cycles in Sn as elements of Gn,n , we can also
construct the elements of any of its subgroups.
   Let R = {g1 , . . . , gk } be a representation of a finite group all of whose elements
are of the form (12.44) or a product of such elements in Gn,n . Let g ∈ S . By the
group character χ (g) (with respect to its embedding in Gn,n ), we mean

                                  χ (g) = 2n < g >0                              (12.45)

where < g >0 is the scalar part of the geometric number g ∈ Gn,n . We have defined
the group character function χ on Gn,n to agree with its matrix equivalent, since
Gn,n is real isomorphic to the real matrix algebra MR (2n × 2n ). In so doing, we can
directly incorporate all of the results from the rich theory of group representations
that has evolved over the years since April, 1896, when F. G. Frobenius wrote to R.
Dedekind about his new ideas regarding finite groups [50]. Indeed, we fully expect
that a new richer representation theory can be constructed based upon geometric
algebra.



12.4.1 The Symmetric Group S4 in G4,4

We represent the symmetric group S1 by R1 = {1} = G0,0 ⊂ G4,4 , where G0,0 = R
is the degenerate geometric algebra of real numbers. The symmetric group S2 is
represented by
                                R2 = gen{e1 },                         (12.46)
where e1 ∈ G1,1 ⊂ G4,4 . Using (12.20), we find that

                                    10               01
                             1≃        ,      e1 ≃      .                        (12.47)
                                    01               10

   Let us now carefully construct the representation R4 of S4 in G2,2 from
(12.46) given above, since it is the k = 1 step in our recursive construction of the
representation R2k+1 of S2k+1 in Gk+1,k+1 , given the representation R2k of S2k in
Gk,k . We use the conventions for the basis elements of G4,4 that we previously
established in (12.18). All calculations can be checked using Lounesto’s Clical [54].
   The construction of the representation of S22 from the representation of S2 breaks
down into three steps.
Step 1. We map the generator(s) e1 of S2 into the larger geometric algebra G2,2 by
   taking the twisted product of e1 with the element e62 to produce e1 ◦ e62 , which
   will be the new element representing the 2-cycle (12) in S4 .
212                                                12 Representation of the Symmetric Group


Step 2. The element representing the 2-cycle (13) in S4 is created from e1 ◦ e62 by
   introducing the orthogonal transformation represented by π2 which permutes the
   basis vectors e1 , e2 , e5 , e6 to give

                               e1 → e2 → e1 ,     e5 → e6 → e5 .                      (12.48)

   Thus,
                       e2 ◦ e51 = π2 (e1 ◦ e62 ) = [π2 (e1 )] ◦ [π2(e61 )].
   We can construct one more entangled 2-cycle in the geometric algebra G2,2 to
   get a regular representation R4 of S4 , which constitutes the last step 3 of the
   construction.
Step 3. We multiply the vector e1 in (12.46) on the left by e6 to get the bivector
   e61 which anticommutes with both e1 and e62 used in step 1 of the construction.
   Using this bivector, we then construct

                        e25 = −π2 (e61 ) = −π2 (e6 )π2 (e1 ) = −e5 e2 .

   The element that represents (14) in G2,2 is given by

                                 e61 ◦ [−π2(e61 )] = e61 ◦ e25 .                      (12.49)

   We now have a complete set of generators for our representation R4 of S4 in
   G2,2 .
                             ⎛                 ⎞
                                e1 ◦ e62 ≃ (12)
                             ⎝ e2 ◦ e51 ≃ (13)⎠                        (12.50)
                               e61 ◦ e25 ≃ (14)
   Indeed, the matrix representations [e1 ◦ e62 ], [e2 ◦ e51 ], [e61 ◦ e25 ] of these elements
   given by (12.23) are exactly the matrices obtained by interchanging the first
   and second rows, the first and third rows, and the first and fourth rows of the
   4 × 4 identity matrix, respectively. By appealing to the matrix-geometric algebra
   isomorphism, we have found the corresponding regular representation of S4 in
   the geometric algebra G2,2 . The reason for the minus sign that appears in step 3
   will become evident later.
    Let us consider in detail the structure of the representation R4 of S4 that we have
found, since, in turn, it will determine the structure of the faithful representations of
all higher order symmetric groups that we consider. In order to facilitate and clarify
our discussion, we write

       r1 = e1 ◦ e62 = a1 ◦ a2, r2 = e2 ◦ e51 = b1 ◦ b2 , r3 = e61 ◦ e25 = c1 ◦ c2 .

   The elements a1 , a2 , b1 , b2 , c1 , c2 ∈ G4,4 are not all independent. It can be easily
checked that c1 = −a1 a2 b1 and c2 = a1 b1 b2 . For convenience, we produce here the
entanglement table tangle(a1, a2 , b1 , b2 , c1 , c2 ) for the elements defining r1 , r2 , r3 :
12.4 Symmetric Groups in Geometric Algebras                                   213


                                 a1   a2      b1    b2   c1   c2
                           a1    +    +       −     −    −    +
                           a2    +    +       −     +    −    −
                           b1    −    −       +     +    +    −
                           b2    −    +       +     +    −    −
                           c1    −    −       +     −    +    +
                           c2    +    −       −     −    +    +
   We give here a complete table of the geometric numbers representing the 24
elements of S4 . As generators, we choose the elements which represent (12), (13),
and (14), respectively.
     ⎛                                                                 ⎞
           S4     ≃                 g ∈ G2,2 ⊂ G4,4               χ (g)
     ⎜(1)(2)(3) ≃                        1 = 1◦1                    4 ⎟
     ⎜                                                                 ⎟
     ⎜ (12) ≃                          r1 = a1 ◦ a2                 2 ⎟
     ⎜                                                                 ⎟
     ⎜                                                                 ⎟
     ⎜ (13) ≃                          r2 = b1 ◦ b2                 2 ⎟
     ⎜                                                                 ⎟
     ⎜ (14) ≃ r3 = c1 ◦ c2 = (−a2 b2 ) ◦ (−a1b1 b2 )                2 ⎟
     ⎜                                                                 ⎟
     ⎜ (23) ≃ r1 r2 r1 = c1 ◦ (−c2 ) = (a2 b2 ) ◦ (−a1a2 b1 ) 2 ⎟
     ⎜                                                                 ⎟
     ⎜ (24) ≃                    r1 r3 r1 = b1 ◦ (−b2)              2 ⎟
     ⎜                                                                 ⎟
     ⎜ (34) ≃                 r2 r3 r2 = (−a1 ) ◦ (−a2)             2 ⎟
     ⎜                                                                 ⎟
     ⎜ (12)(34) ≃                  r1 r2 r3 r2 = −a1 a2             0 ⎟
     ⎜                                                                 ⎟
     ⎜                                                                 ⎟
     ⎜ (13)(24) ≃                     r2 r1 r3 r1 = b1              0 ⎟
     ⎜                                                                 ⎟
     ⎜ (14)(23) ≃            r3 r1 r2 r1 = c1 = −a1 a2 b1           0 ⎟
     ⎜                                                                 ⎟
     ⎜ (123) ≃                r2 r1 = (b1 ◦ b2)(a1 ◦ a2)            1 ⎟
     ⎜                                                                 ⎟
     ⎜ (132) ≃                                                      1 ⎟
     ⎜                        r1 r2 = (a1 ◦ a2)(b1 ◦ b2)               ⎟. (12.51)
     ⎜ (124) ≃                       =   (c   ◦     )(a   ◦     )      ⎟
     ⎜                        r  r
                                3 1         1   c 2     1   a 2     1  ⎟
     ⎜ (142) ≃                r1 r3 = (a1 ◦ a2 )(c1 ◦ c2)           1 ⎟
     ⎜                                                                 ⎟
     ⎜                                                                 ⎟
     ⎜ (134) ≃                r3 r2 = (c1 ◦ c2 )(b1 ◦ b2)           1 ⎟
     ⎜                                                                 ⎟
     ⎜ (143) ≃                r2 r3 = (b1 ◦ b2 )(c1 ◦ c2)           1 ⎟
     ⎜                                                                 ⎟
     ⎜ (234) ≃                  r1 r3 r2 r1 = −a1 a2 r3 r1          1 ⎟
     ⎜                                                                 ⎟
     ⎜ (243) ≃                  r1 r2 r3 r1 = −a1 a2 r2 r1          1 ⎟
     ⎜                                                                 ⎟
     ⎜ (1234) ≃             r3 r2 r1 = c1 r2 = −a1 a2 b1 r2         0 ⎟
     ⎜                                                                 ⎟
     ⎜                                                                 ⎟
     ⎜ (1243) ≃                       r2 r3 r1 = b1 r3              0 ⎟
     ⎜                                                                 ⎟
     ⎜ (1324) ≃             r3 r1 r2 = c1 r1 = −a1 a2 b1 r1         0 ⎟
     ⎜                                                                 ⎟
     ⎜ (1342) ≃                    r1 r3 r2 = −a1 a2 r3             0 ⎟
     ⎜                                                                 ⎟
     ⎝ (1423) ≃                       r2 r1 r3 = b1 r1              0 ⎠
        (1432) ≃                   r1 r2 r3 = −a1 a2 r2             0
   Let us summarize in what we have accomplished so far.
                                                   ⎛     ⎞
                                                    1 62
                             1        and          ⎝ 2 51⎠                (12.52)
                                                    61 25
214                                              12 Representation of the Symmetric Group


In (12.52), we have abbreviated the elements ei and ei j by using only their indices
which serve to completely define the elements in the twisted symmetric product.
Thus, S2 is generated by the element e1 ∈ G1,1 , and S4 is generated by the elements

                        {e1 ◦ e62 , e2 ◦ e51 , e61 ◦ e25 } ⊂ G2,2 ,

under the geometric product. The matrices of our elements correspond exactly to
the regular 4 × 4 matrix representation.



Exercises

1. The elements in table (12.52) generate the symmetric group S4 . Find the matrix
   representation of each of these generators using (12.24).
2. Write down a complete multiplication table for the elements of the symmetric
   group S3 as a subgroup of S4 . Find the 4 × 4 matrix representation for each of six
   elements in S3 .



12.4.2 The Geometric Algebra G4,4

In order to see more clearly what is involved in this recursive construction, let us
continue the construction for k = 2 and k = 3 and find the representations R8 of
S8 and R16 of S16 in G4,4 . As a subalgebra of G4,4 , the geometric algebra G3,3 is
generated by the basis vectors e1 , e2 , e3 , e5 , e6 , e7 .
   We begin by applying step 1 to the table (12.52) with the element e73 to produce
the new table                        ⎛                 ⎞
                                          1 62 73
                                     ⎝ 2 51 73⎠ .                            (12.53)
                                         61 25 73
   For step 2, we define the orthogonal transformation π3 = πk+1 on the basis
elements of G3,3 {e1 , e2 , e3 , e5 , e6 , e7 } by

                    e1 → e2 → e3 → e1 ,        e5 → e6 → e7 → e5 .               (12.54)

Applying this transformation successively twice to (12.53) gives us the additional
two copies
                         ⎛          ⎞ ⎛              ⎞
                            2 73 51         3 51 62
                         ⎝ 3 62 51⎠ ≃ ⎝ 1 73 62⎠ ,                        (12.55)
                           72 36 51         53 17 62
12.4 Symmetric Groups in Geometric Algebras                                       215


which represent different but equivalent representations of S4 in G3,3 considered as
a subalgebra of G4,4 . Next, we paste together the distinct elements found in these 3
tables to get                       ⎛           ⎞
                                        1 62 73
                                    ⎜ 2 51 73⎟
                                    ⎜           ⎟
                                    ⎜           ⎟
                                    ⎜61 25 73⎟
                                    ⎜           ⎟.                            (12.56)
                                    ⎜ 3 62 51⎟
                                    ⎜           ⎟
                                    ⎝72 36 51⎠
                                       35 71 62
                                                                          
Notice that we have changed the sign of the first two elements of the row 53 17 62 .
The reason for this will be explained later. This completes step 2.
   In (12.56), we have constructed 6 of the 7 elements that represent the 2-cycles
of S8 in G3,3 . We use step 3 to construct the last element by taking the first two
elements 61 25 from the last row of (12.52) and place a 3 in front of them to
    
get 361 325 . Step 3 is completed by applying π3 to e361 to get π3 (e361 ) = e172 .
Notice in this case we do not change the sign of this element as we did in (12.49).
In general, the sign for πk+1 in this step is (−1)k . The element representing the 7th
2-cycle (18) is thus found to be
                              e361 ◦ e325 ◦ e172 ≃ (18).                      (12.57)

   Thus, the table                ⎛            ⎞
                                     1 62 73
                                  ⎜ 2 51 73 ⎟
                                  ⎜            ⎟
                                  ⎜ 61 25 73 ⎟
                                  ⎜            ⎟
                                  ⎜            ⎟
                                  ⎜ 3 62 51 ⎟                                 (12.58)
                                  ⎜            ⎟
                                  ⎜ 72 36 51 ⎟
                                  ⎜            ⎟
                                  ⎝ 35 71 62 ⎠
                                    361 325 172
gives the regular representation R8 of S8 in G3,3 ⊂ G4,4 .
   We continue the construction for k = 3 of the representation R16 of S16 in G4,4 .
Step 1. We extend the table (12.58) by adding a 4th column consisting of the
   element (84), which represents e84 which has square 1 and commutes with all of
   the other elements in the table, getting
                                  ⎛              ⎞
                                    1 62 73 84
                                  ⎜ 2 51 73 84⎟
                                  ⎜              ⎟
                                  ⎜ 61 25 73 84⎟
                                  ⎜              ⎟
                                  ⎜              ⎟
                                  ⎜ 3 62 51 84⎟                               (12.59)
                                  ⎜              ⎟
                                  ⎜ 72 36 51 84⎟
                                  ⎜              ⎟
                                  ⎝ 35 71 62 84⎠
                                   361 325 172 84
216                                          12 Representation of the Symmetric Group


   which is a faithful but no longer regular representation of S8 because it is no
   longer maximal in G4,4 .
Step 2. Next, by applying the orthogonal transformation πk+1 =π4 =(1234)(5678),
   or

         e1 → e2 → e3 → e4 → e1 ,     and e5 → e6 → e7 → e8 → e5             (12.60)

   repeatedly to the table (12.59), we find the additional representations of the
   following distinct 2-cycles of S8 in G4,4 :
                                ⎛              ⎞
                                  4 73 62 51
                                ⎜ 46 82 73 51⎟
                                ⎜              ⎟
                                ⎜ 83 47 62 51⎟
                                ⎜              ⎟
                                ⎜              ⎟
                                ⎜472 436 283 51⎟ .                           (12.61)
                                ⎜              ⎟
                                ⎜ 45 81 73 62⎟
                                ⎜              ⎟
                                ⎝183 147 354 62⎠
                                 542 182 614 73

   We now paste together the above representations of the 14 distinct 2-cycles of S8
   in (12.59) and (12.61), getting the table
                                ⎛              ⎞
                                  1 62 73 84
                                ⎜ 2 51 73 84⎟
                                ⎜              ⎟
                                ⎜ 61 25 73 84⎟
                                ⎜              ⎟
                                ⎜              ⎟
                                ⎜ 3 62 51 84⎟
                                ⎜              ⎟
                                ⎜ 72 36 51 84⎟
                                ⎜              ⎟
                                ⎜ 35 71 62 84⎟
                                ⎜              ⎟
                                ⎜361 325 172 84⎟
                                ⎜              ⎟
                                ⎜ 4 73 62 51⎟ .                              (12.62)
                                ⎜              ⎟
                                ⎜ 46 82 73 51⎟
                                ⎜              ⎟
                                ⎜              ⎟
                                ⎜ 83 47 62 51⎟
                                ⎜              ⎟
                                ⎜472 436 283 51⎟
                                ⎜              ⎟
                                ⎜ 45 81 73 62⎟
                                ⎜              ⎟
                                ⎝183 147 354 62⎠
                                 542 182 614 73

   This completes step 2 of the construction.
Step 3. The last additional
                              row to the table (12.62) is constructed by taking the
   first three numbers 361 325 172 of the last row in (12.59) and placing the
                                    
   number 8 in front of them to get 8361 8325 8172 . The fourth entry is obtained
   by applying −π4 to the first
                             number 8361 to get −π4 (8361) = (4572). We thus
   get the 15th and last row 8361 8325 8172 4572 . This completes the last step of
   the construction of the elements in R16 representing S16 in G4,4 .
12.4 Symmetric Groups in Geometric Algebras                                           217


   We give a summary of our results in the combined tables
                                                   ⎛                   ⎞
                                                      1   62 73 84
                                                   ⎜ 2    51 73 84 ⎟
                                                   ⎜                   ⎟
                                                   ⎜ 61 25 73 84 ⎟
                                                   ⎜                   ⎟
                                                   ⎜ 3    62 51 84 ⎟
                            ⎛           ⎞          ⎜                   ⎟
                                                   ⎜                   ⎟
                              1 62 73              ⎜ 72 36 51 84 ⎟
                            ⎜ 2 51 73 ⎟            ⎜                   ⎟
                            ⎜           ⎟          ⎜ 35 71 62 84 ⎟
              ⎛     ⎞       ⎜ 61 25 73 ⎟           ⎜                   ⎟
                1 62        ⎜           ⎟          ⎜ 361 325 172 84 ⎟
                           ⎜           ⎟          ⎜                   ⎟
        1     ⎝ 2 51⎠       ⎜ 3 62 51 ⎟            ⎜ 4    73 62 51 ⎟              (12.63)
                            ⎜           ⎟          ⎜                   ⎟
                            ⎜ 72 36 51 ⎟           ⎜ 46 82 73 51 ⎟
               61 25
                            ⎜           ⎟          ⎜                   ⎟
                            ⎝ 35 71 62 ⎠           ⎜                   ⎟
                                                   ⎜ 83 47 62 51 ⎟
                                                   ⎜                   ⎟
                             361 325 172           ⎜ 472 436 283 51 ⎟
                                                   ⎜                   ⎟
                                                   ⎜ 45 81 73 62 ⎟
                                                   ⎜                   ⎟
                                                   ⎜ 183 147 354 62 ⎟
                                                   ⎜                   ⎟
                                                   ⎝ 542 182 614 73 ⎠
                                                    8361 8325 8172 4572



12.4.3 The General Construction in Gn,n

For k = 0 and R1 = {1}, we are given R2 = {1, e1 }, the representation of S2 in
G1,1 considered as a subalgebra of Gn,n . We give here the general rule for the
recursive construction of the representation R2k+1 of S2k+1 in Gk+1,k+1 , given that
the representation of R2k of S2k in Gk,k for 1 ≤ k < n has been constructed, where
both Gk,k and Gk+1,k+1 are considered as subalgebras of Gn,n .
Step 1. Each rα ∈ R2k is mapped into rα ◦ en+k+1,k+1 ∈ R2k+1 .
Step 2. The orthogonal transformation represented by πk+1 = (1, . . . , k + 1)(n +
   1, . . . , n + k + 1) is applied repeatedly to each of the elements of R2k ◦ en+k+1,k+1
   until no more distinct new elements are formed. Taken together, this will form a
   table of 2k+1 − 1 distinct elements of R2k+1 .
Step 3. If k is odd, the last element of R2k+1 is formed by placing the vector
   en+k+1 in front of the first k elements of the last entry in R2k . Thus, if this last
   entry in R2k is eγ1 ◦ · · · ◦ eγk , this operation gives

                                 en+k+1,γ1 ◦ · · · ◦ en+k+1,γk .

   The last element in R2k+1 is then formed by applying −πk+1 to en+k+1,γ1 to get
   −πk+1 (en+k+1,γ1 ). The last element is then given by

                     en+k+1,γ1 ◦ · · · ◦ en+k+1,γk ◦ [−πk+1(en+k+1,γ1 )].
218                                             12 Representation of the Symmetric Group


   If k is even, this step is modified by placing the vector ek+1 in front of the first
   k elements, instead of en+k+1 , and applying the orthogonal transformation πk+1
   without the minus sign.



*12.5 The Heart of the Matter

Let us formalize the regular representations of the symmetric groups that we have
found in the previous section. We start by reorganizing the rows of (12.63) and
identifying the primitive idempotent U4+ = e+         + + +
                                                  15 e26 e37 e48 and the identity element
r0 = 1 ◦ · · · ◦ 1 = 1 of our representation R16 of the group S16 . Let us also explicitly
define the elements rα of our representation by writing
     ⎛         ⎞          ⎛                       ⎞           ⎛       ⎞
         r0                   1    1     1    1                 e0 = 1
     ⎜ r1 ⎟               ⎜ 1      62 73 84 ⎟                 ⎜ e1 ⎟
     ⎜         ⎟          ⎜                       ⎟           ⎜       ⎟
     ⎜ r2 ⎟               ⎜ 2      51    73   84  ⎟           ⎜ e2 ⎟
     ⎜         ⎟          ⎜                       ⎟           ⎜       ⎟
     ⎜ r ⎟                ⎜ 3      62 51 84 ⎟                 ⎜ e ⎟
     ⎜ 3 ⎟                ⎜                       ⎟           ⎜ 3 ⎟
     ⎜         ⎟          ⎜                       ⎟           ⎜       ⎟
     ⎜ r4 ⎟               ⎜ 4      73 62 51 ⎟                 ⎜ e4 ⎟
     ⎜         ⎟          ⎜                       ⎟           ⎜       ⎟
     ⎜ r21 ⎟              ⎜ 61 25 73 84 ⎟                     ⎜ e21 ⎟
     ⎜         ⎟          ⎜                       ⎟           ⎜       ⎟
     ⎜ r31 ⎟              ⎜ 35 71 62 84 ⎟                     ⎜ e31 ⎟
     ⎜         ⎟          ⎜                       ⎟           ⎜       ⎟
     ⎜ r41 ⎟ + ⎜ 45 81 73 62 ⎟ + ⎜ e41 ⎟ +
     ⎜         ⎟U = ⎜                             ⎟U = ⎜              ⎟
     ⎜r ⎟ 4               ⎜ 72 36 51 84 ⎟ 4                   ⎜ e ⎟ U4 .           (12.64)
     ⎜ 32 ⎟               ⎜                       ⎟           ⎜ 32 ⎟
     ⎜r ⎟                 ⎜ 46 82 73 51 ⎟                     ⎜ e ⎟
     ⎜ 42 ⎟               ⎜                       ⎟           ⎜ 42 ⎟
     ⎜         ⎟          ⎜                       ⎟           ⎜       ⎟
     ⎜ r43 ⎟              ⎜ 83 47 62 51 ⎟                     ⎜ e43 ⎟
     ⎜         ⎟          ⎜                       ⎟           ⎜       ⎟
     ⎜ r321 ⎟             ⎜ 361 325 172 84 ⎟                  ⎜ e321 ⎟
     ⎜         ⎟          ⎜                       ⎟           ⎜       ⎟
     ⎜ r421 ⎟             ⎜ 542 182 614 73 ⎟                  ⎜ e421 ⎟
     ⎜         ⎟          ⎜                       ⎟           ⎜       ⎟
     ⎜ r431 ⎟             ⎜ 183 147 354 62 ⎟                  ⎜ e431 ⎟
     ⎜         ⎟          ⎜                       ⎟           ⎜       ⎟
     ⎝ r432 ⎠             ⎝ 472 436 283 51 ⎠                  ⎝ e432 ⎠
       r4321             8361 8325 8172 4572                   e4321
   The matrix identities in (12.64) reflect everything we have accomplished in
this paper and also what is left to be done in order to prove that our construction
produces a regular representation as claimed. First, we are identifying and renaming
the geometric numbers which represent the entangled 2-cycles of S16 . Thus, for
example, the first and second equalities of the ninth row of our matrix equation
express that
                r32 = e72 ◦ e36 ◦ e51 ◦ e84,   and r32 U4+ = e32 U4+ ,            (12.65)

respectively.
   Multiplying both sides of the last expression in (12.65) on the left by r32 gives

                                   U4+ = r32 e32 U4+
*12.5 The Heart of the Matter                                                                  219

       2 = 1, showing that r flips the first (the row containing e ) and the ninth
since r32                   32                                      0
rows of (12.64). This is more elegantly stated for the representation R2n of S2n in
Gn,n by saying that

                        rα Un+ = eα Un+ ⇐⇒ Un+ = rα eα Un+                                  (12.66)

for all indexes α ∈ In which define the basis elements eα of the geometric algebra
Gn . For a regular representation, we also need to show that such an operation leaves
all the other rows of (12.64) fixed. In other words, we must show in general that for
all nonzero indices α , β ∈ In , and β = α , that

                                           sgn(β )                            sgn(β )
     rα eβ Un+ = eβ Un+ ⇐⇒ rα Un                     = rα eβ Un+ e−1
                                                                  β = Un                .   (12.67)

  The usual regular matrix representation of Sn follows immediately from (12.66)
and (12.67), giving for each α ∈ In ,

                                sn(β )                                −δ      sn(β )
              rα = rα    ∑ Un            = rα Un+ +       ∑          eα α ,β Un        ,
                        β ∈IN                          β ∈In ,β =0


where δα ,β = 0 for α = β and δα ,β = 1 when α = β .
    Examining the right side of (12.64), we see that each 2-cycle representative rα
can be classified into k-vector types, where k ≥ 1. For example, we say that the rα
in the sixth through eleventh rows of (12.64) are of bivector or 2-vector type. Thus,
each of the representative elements rα of S16 , as given in (12.64), is of k-vector type
for some 1 ≤ k ≤ 4. Since in the steps 1, 2, and 3 of our construction, each k-vector
is related by the orthogonal transformation π4 to each of the other representatives of
the same k-vector type, we need only prove our assertions for one representative
element of each k-vector type. Note also that the orthogonal transformation π4
leaves the primitive idempotent U4+ invariant, that is, π4 (U4+ ) = U4+ . This means
that for all α ∈ I4 ,

                        π4 (rα U4+ ) = π4 (rα )U4+ = π4 (eα )U4+ .                          (12.68)

The property (12.68) justifies our change of the sign in the last row of the table
(12.56). Indeed, if we adjusted the indices of standard basis (12.18) to reflect the
order obtained in the construction process, no change of sign would be required.
   More generally, let R2n be the representation obtained for S2n by the three steps
outlined in Sect. 4.1 and let πn denote the orthogonal transformation defined in the
second step. Then πn (Un+ ) = Un+ , since it only permutes the idempotent factors of
Un+ among themselves. In addition, because πn is an orthogonal transformation, it
permutes k-vector representatives among themselves so that

                        πn (rα Un+ ) = πn (rα )Un+ = πn (eα )Un+ .                          (12.69)
220                                                     12 Representation of the Symmetric Group


   We are now ready to state and prove the only theorem of this chapter.
Theorem 12.5.1. For each n, there exists a regular representation R2n of S2n
in the geometric algebra Gn,n which acts on the set of elements En† Un+ . The
representations R2n are constructed recursively using the steps 1, 2, and 3, as
explained in Sect. 4.3 for Gn,n and satisfy the relationships (12.66), (12.67), and
(12.69).
Proof. Suppose that n > 1 and that the representation R2n has been constructed
according to three steps outlined in Sect. 4.1. By construction,
                                                n
                                      Un+ = ∏ e+
                                               i,n+i .
                                               i=1

We will show, by induction on k for 1 ≤ k ≤ n − 1, that the first representative
of each k + 1-vector type satisfies the relationships (12.66) and (12.67). Whereas
the recursive construction begins with k = 1, we must first show that the element
r1 = e1 = e+     −
           1 + e1 e1 , which occurs when k = 0 and which has vector type 1, satisfies
(12.66) and (12.67).
   Thus, for k = 0, we are given that r1 = e1 ◦ en+2,2 ◦ · · · ◦ e2n,n . By the repeated
application of the absorption properties (12.16) and (12.17), we find that
                                                    n                 n
          r1 Un+ = (e1 ◦ en+2,2 ◦ · · · ◦ e2n,n) ∏ e+
                                                    i,n+i = e1 ∏ ei,n+i = e1 Un ,
                                                                  +            +
                                                i=1                i=1

so that the relationship (12.66) is satisfied for all of the 1-vector types r1 , . . . , rn . To
show that (12.67) is satisfied, let β ∈ In , β = 1, and β = 0. It follows that for some
                           sn(i)                 sn(i) β        β
i, 1 < i ≤ n, we have Un         = en+i,i and Un Un = Un . It then easily follows
from the absorption property (12.17) that

                               r1 Unβ = r1 Un           Unβ = Unβ .
                                               sn(i)
                                                                                        (12.70)

   For k = 1, the recursive construction produces the element

                        r21 = (en+2,1 ◦ e2,n+1) ◦ en+3,3 ◦ · · · ◦ e2n,n,

which is the first element with 2-vector type. To show (12.66), we calculate with the
repeated help of the absorption property (12.17), as well as (12.33),

         r21 Un+ = [(en+2,1 ◦ e2,n+1) ◦ en+3,3 ◦ · · · ◦ e2n,n]Un+
                  = (en+2,1 ◦ e2,n+1)Un+ = (e+        −
                                             2,n+1 + e2,n+1 en+2,1 )Un
                                                                      +


                  = (e+     −         −                   +    +     +
                      21 + e211(n+1) e1,n+1 e2,2,n+2,1 )Un = (e21 + e21 e21 )Un
                                                                               +


                  = (e+     −     +        +
                      21 − e21 )Un = e21 Un .
*12.5 The Heart of the Matter                                                                     221


A similar calculation to (12.70) shows that (12.67) is true, i.e., that

                                            sn(β )        sn(β )
                                     r21 Un          = Un

for any index β ∈ In such that β = 0 and β = 21.
   Suppose now that the j-vector representative r j...1 has the properties (12.66)
and (12.67) for all positive integers j less than or equal to k where 1 ≤ k < n. Then
we must prove that the same is true for the representative element rk+1,k,...,1 . Recall
that rk+1,k,...,1 is constructed in step 3 from

                                     rk,...,1 = eγ1 ◦ · · · ◦ eγk

where eγi , for 1 ≤ i ≤ k, are commuting square one k-vectors in Gn,n obtained in the
construction process. Then, by the induction assumption, we know that

                                   rk,...,1 Un+ = ek,...,1 Un+ .

According to step 3 given in Sect. 4.3,

                       rk+1,k,...,1 = en+k+1,γ1 ◦ · · · ◦ en+k+1,γk ◦ eγk+1 ,

where eγk+1 = (−1)k πk+1 (en+k+1,γ1 ).
  We now verify (12.66) for rk+1,...,1 , getting

                                                                             n
               rk+1,...,1 Un+ = (en+k+1,γ1 ◦ · · · ◦ en+k+1,γk ◦ eγk+1 ) ∏ e+
                                                                            i,n+i
                                                                            i=1
                                                                       n
                      γk+1 + eγk+1 (en+k+1,γ1 ◦ · · · ◦ en+k+1,γk )] ∏ ei,n+i .
                  = [e+       −                                         +
                                                                                               (12.71)
                                                                      i=1

  There are basically four cases of (12.71) that need to be verified, depending upon
whether k is even or odd and whether e21...k+1 = ±1.
Case i) k is odd and e21...k+1 = −1. In this case, with the help of (12.16) and
  (12.33), (12.71) simplifies to
                                                         n                         n
                (k+1),...,1 + e(k+1),...,1 e(k+1),...,1 ] ∏ ei,n+i = e(k+1),...,1 ∏ ei,n+i ,
            = [e+              +                             +                       +
                                                        i=1                       i=1


   since e+          e
          (k+1),...,1 (k+1),...,1
                                  = −e−
                                      (k+1),...,1
                                                  .
Case ii) k is even and e21...k+1 = −1. In this case, with the help of (12.16) and
  (12.33), (12.71) simplifies in exactly the same way as case (i).
222                                                  12 Representation of the Symmetric Group


Case iii) k is odd and e21...k+1 = 1. In this case, with the help of (12.16) and
  (12.33), (12.71) simplifies to
                                                       n                         n
               (k+1),...,1 + e(k+1),...,1 e(k+1),...,1 ] ∏ ei,n+i = e(k+1),...,1 ∏ ei,n+i ,
           = [e+              −                             +                       +
                                                     i=1                       i=1


  since e−          e
         (k+1),...,1 (k+1),...,1
                                 = −e−
                                     (k+1),...,1
                                                 .
Case iv) k is even and e21...k+1 = 1. In this case, with the help of (12.16) and
  (12.33), (12.71) simplifies in exactly the same way as case (iii).           
                                                                               
Chapter 13
Calculus on m-Surfaces




                                 But mathematics is the sister, as well as the servant, of the arts
                                 and is touched with the same madness and genius.
                                                                          —Harold Marston Morse



We apply all of the machinery of linear algebra developed in the preceding chapters
to the study of calculus on an m-surface. The concept of the boundary of a surface
is defined, and the classical integration theorems in any dimension follow from a
single fundamental theorem of calculus.1



13.1 Rectangular Patches on a Surface

Let R = ×m                                                                           ∗
           i=1 [a , b ] be a closed m-rectangle in R where m ≥ 1. By the interior R
                 i i                                 m
                                       ∗
of R, we mean the open rectangle R = ×i=1 (a , b ). We denote the points s ∈ R by
                                             m     i  i

the position vectors s = ∑i si ei where (e)(m) is the standard orthonormal basis of Rm
and ai ≤ si ≤ bi . The boundary of the rectangle is the (m − 1)-chain

                                  β (R) = ⊕m
                                           i=1 (R− ⊕ R+ )
                                                 i    i
                                                                                             (13.1)

where the faces Ri± are defined by Ri+ = R(si = bi ) and Ri− = R(si = ai ), respectively.
For m = 1, the boundary β (R) consists of the end points of the interval [a1 , b1 ],

                             β (R) = R1− ⊕ R1+ = {a1 } ⊕ {b1}.




1 This chapter is based upon an article written by the author and Omar León Sanchez [88].



G. Sobczyk, New Foundations in Mathematics: The Geometric                                      223
Concept of Number, DOI 10.1007/978-0-8176-8385-6 13,
© Springer Science+Business Media New York 2013
224                                                                             13 Calculus on m-Surfaces

Fig. 13.1 The 2-rectangle
R = [a1 , b1 ] × [a2 , b2 ] is
                                                               s2
shown together with the
oriented 1-chain                                           2                                R +2
                                                       b
R2− ⊕ R1+ ⊕ R2+ ⊕ R1− that is its
boundary                                                                1                                         1
                                                                R                                             R+
                                                                 -
                                                       a2
                                                                                            R 2-
                                                                                                                  s1
                                                                                                              1
                                                                        a   1
                                                                                                          b

Fig. 13.2 The 2-patch                                                                 −11      -0.5
M = x(R) is the image in R3                                                     0.5                   0   0.5
of the 2-square                                                             0                                         1
                                                                −0.5
R = [−1, 1] × [−1, 1] in the
                                                               −1
xy-plane, where                                                3
x(x, y) = (x, y, −x2 + y + 2)


                                                                2


                                                                    1


                                                                    0




In Fig. 13.1, a 2-rectangle is shown together with the 1-chain that defines its
boundary. As we shall see, the concept of a chain is needed to properly define the
concept of integration over m-dimensional surfaces and their boundaries.
   Let M be an m-surface in Rn which is of class C p , where p ≥ 2 and m ≤ n.2
We first study the properties of an m-dimensional C p regular rectangular patch M
on the surface M . For example, a curve is the image of a 1-rectangle or interval.
The graph of the image in R3 of the 2-rectangle R = [−1, 1] × [−1, 1] where
                                    x(x, y) = (x, y, −x2 + y + 2),
is shown in Fig. 13.2.
    The tangent vectors (x)(m) at an interior point x ∈ M are defined by
                                           ∂x
                                    xi =        ,   i = 1, . . . , m,                                         (13.2)
                                           ∂ si

2 The concept of an m-surface will be more rigorously defined in Chap. 15.
13.1 Rectangular Patches on a Surface                                                    225


and make up a local basis of the tangent vector space Tx1 at the point x ∈ M. A C p
rectangular m-patch M is said to be regular if

                          x(m) = ∧(x)(m) = x1 ∧ · · · ∧ xm = 0                        (13.3)
at all interior points x ∈ M. We now give the formal definition of a C p regular
rectangular patch in M .
Definition 13.1.1. A set M = x(R) ⊂ Rn is a regular rectangular m-patch of class
C p , where p ≥ 1, if x : R → M is bicontinuous at all points in M and of class C p at
all interior points x ∈ M.
   The boundary of M is the (m − 1)-chain

                         β (M) = x(β (R)) = ⊕m
                                             i=1 (M− ⊕ M+ )
                                                   i    i
                                                                                       (13.4)

where the faces M±  i = x(Ri ), respectively, for i = 1, . . . , m.
                             ±
    Piecing together regular rectangular patches on an m-surface is technically more
difficult than piecing together the rectangular strips that are used to define the
Riemann integral for the area under a curve in elementary calculus, but the idea
is the same. The problem is matching up the points on the boundary in such a way
that the local properties, such as orientation and smoothness, are preserved when
moving from one patch to another.
    For a regular patch, the tangent m-vector Ix = x(m) , given in (13.3), is continuous
and does not vanish at any interior point x ∈ M. The reciprocal basis (x)(m) to (x)(m)
at the point x ∈ M is defined by

                                 xi = (−1)i−1 xi(m) · x−1
                                                       (m)                             (13.5)

where
                        xi(m) = x1 ∧ · · · ∧ xi−1 ∧ xi+1 ∧ · · · ∧ xm ,

and satisfies the relations xi · x j = δ ij . For example, for i = 1, 2 we have

          x1 = (x2 ∧ · · · ∧ xm ) · x−1                                        −1
                                     (m) , and x = −(x1 ∧ x3 ∧ · · · ∧ xm ) · x(m) .
                                                2


   Just as we did in Chaps. 7 and 10, we can turn the problem of finding a reciprocal
basis into a corresponding
                            problem of finding the inverse of a matrix. Thus, let
(x)(m) = x1 x2 . . . xm be the row matrix made up of the vectors xi . We wish to
find a column matrix of vectors
                                           ⎛ ⎞
                                              x1
                                           ⎜ x2 ⎟
                                           ⎜ ⎟
                                           ⎜ ⎟
                                  (x)(m) = ⎜ · ⎟
                                           ⎜ ⎟
                                           ⎝ ·⎠
                                              xm
226                                                                       13 Calculus on m-Surfaces


with the property that (x)(m) · (x)(m) = [1]m where [1]m is the m × m identity matrix.
The m × m symmetric Gram matrix [g] = [gi j ] of the inner products gi j = xi · x j of
the tangent vectors xi is given by
                           ⎛   ⎞                    ⎛                       ⎞
                            x1                        x1 · x1 . . . x1 · xm
                           ⎜x ⎟                     ⎜ ·                · ⎟
                           ⎜ 2⎟                  ⎜                        ⎟
                           ⎜ ⎟                      ⎜                       ⎟
   [g] = (x)(m) · (x)(m) = ⎜ · ⎟ · x1 x2 · · · xm = ⎜ ·
            T
                                                                       · ⎟.                 (13.6)
                           ⎜ ⎟                      ⎜                       ⎟
                           ⎝ · ⎠                    ⎝ ·                · ⎠
                            xm                        xm · x1 . . . xm · xm

Just as we saw in (7.12) and (10.18), the reciprocal basis is found by multiplying
both sides of (13.6) on the left by [g]−1 , and simplifying, to give (x)(m) =
[g]−1 (x)T(m) .
   For example, consider the matrix of column vectors in R3
                                        ⎛       ⎞
                                          1 2
                                        ⎜       ⎟
                               (x)(2) = ⎝2 1⎠ .
                                               1      1

The Gram matrix of inner products is

                                                          6   5
                           [g] = (x)T(2) · (x)(2) =                   ,
                                                          5   6

                                  6 −5
and has the inverse [g]−1 = 11
                             1
                                       . It follows that the reciprocal basis of row
                                  −5 6
vectors is given by

                      x1             xT1       1      −4          7        1
                           = [g]−1         =                                   .
                      x2             xT2       11         7   −4           1



Exercises

1. Consider the image M = x(R) of the 2-rectangle R = [−1, 1] × [−1, 1] in the xy-
   plane, where
                               x(x, y) = (x, y, −x2 + y + 2),
   see Fig. 13.2.
   (a) Find x1 = ∂∂ xx and x2 = ∂∂ xy
   (b) Find the reciprocal basis {x1 , x2 } at the point (x, y) ∈ R.
13.1 Rectangular Patches on a Surface                                             227

Fig. 13.3 The 2-patch                                                   1
M = x(R) is the image of the                                      0.5
2-square R = [−1, 1] × [−1, 1]                                0
in R3 , where                                         -0.5
x(x, y) = (x, y, x2 + y2 )                       -1
                                                 2

                                                1.5

                                                  1

                                                 0.5
                                                        0
                                                      -1
                                                       -0.5
                                                                    0
                                                                        0.5
                                                                              1


   (c) Find the 2-chain β (M) which is the boundary to M.
   (d) Find the tangent vector to the boundary of surface M at the points

                                 1             1    1             1
                       x=x         , −1 , x 1,   ,x   , 1 , x −1,   .
                                 2             2    2             2
2. Let R = [−1, 1] × [−1, 1] be a 2-square in R2 and let M = {x(R)} ⊂ R3 where
   x(x, y) = (x, y, x2 + y2). See Fig. 13.3.
   (a) Find x1 = ∂∂ xx and x2 = ∂∂ xy
   (b) Find the reciprocal basis {x1 , x2 } at the point x(x, y) ∈ M.
                                                              
          Ans: x1 = 4x24y+4y+12 +1 , − 4x2 +4y
                            2              4xy
                                                   ,     2x
                                               2 +1 4x2 +4y2 +1 ,
                                                              
                              4xy         4x2 +1         2y
               x2 = − 4x2 +4y         ,            ,
                                  2 +1 4x2 +4y2 +1 4x2 +4y2 +1 .


   (c) Find the tangent vector to the boundary of the surface M at the points
          x = x(1, 0), x(0, 1), x(−1, 0), x(0, −1).
   (d) Find the 2-chain β (M) which is the boundary to M.
3. Let R = [−1, 1] × [−1, 1] be a 2-square in R2 and let M = {x(R)} ⊂ R3 where
   x(x, y) = (x, y, x2 − y2 + 1). See Fig. 13.4.
   (a) Find x1 = ∂∂ xx and x2 = ∂∂ xy
   (b) Find the reciprocal basis {x1 , x2 } at the point x(x, y) ∈ M.
                                                              
          ans: x1 = 4x24y+4y+12 +1 , 4x2 +4y
                            2            4xy
                                                 ,     2x
                                             2 +1 4x2 +4y2 +1 ,
                                                                 
                            4xy         4x2 +1             2y
               x2 = 4x2 +4y         ,
                                2 +1 4x2 +4y2 +1  , − 4x2 +4y2 +1
                                                                   .
228                                                                              13 Calculus on m-Surfaces

Fig. 13.4 The 2-patch                                                             1
M = x(R) is the image of the                                               0.5
2-square R = [−1, 1] × [−1, 1]                                        0
in R3 , where                                                -0.5
x(x, y) = (x, y, x2 − y2 + 1)                       -1
                                                    2

                                                   1.5

                                                         1

                                                       0.5

                                                          0
                                                         -1
                                                                    -0.5
                                                                             0
                                                                                      0.5
                                                                                            1



   (c) Find the tangent vector to the boundary of the surface M at the points
          x = x(1, 0), x(0, 1), x(−1, 0), x(0, −1).
   (d) Find the 2-chain β (M) which is the boundary to M.
            ⎛ ⎞
               a1
            ⎜a ⎟
            ⎜ 2⎟                         
            ⎜ ⎟
4. Let A = ⎜ · ⎟, B = b1 b2 · · · bm , and C be a real m × k matrix. Show that
            ⎜ ⎟
            ⎝ ·⎠
              am
   (A · B)C = A · (BC) and C(A · B) = (CA) · B, where the product A · B is defined
   as in (13.6).
5. Let us consider cylindrical coordinates defined in R3 by

                         x = x(r, θ , z) = e1 r cos θ + e2 r sin θ + e3 z.


   (a) Find
                                        ∂x             ∂x                    ∂x
                                 xr =      ,    xθ =      ,          xz =       .
                                        ∂r             ∂θ                    ∂z
   (b) Find the corresponding reciprocal vectors xr , xθ , xz .
   (c) The vector derivative (3.46) on R3 can be defined by
                                               ∂        ∂     ∂
                                   ∂x = xr        + xθ    + xz .
                                               ∂r      ∂θ     ∂z
        Show that ∂x ∧ ∂x = 0, just as we found in (3.54).
6. Let x(r, θ , φ ) = (r cos θ sin θ , r sin θ sin φ , r cos φ ) where r > 0, 0 ≤ θ ≤ 2π , and
   0 ≤ φ ≤ π be spherical coordinates in R3 .
13.2 The Vector Derivative and the Directed Integral                                229


   (a) Find
                                      ∂x              ∂x            ∂x
                               xr =      ,     xθ =      ,   xφ =      .
                                      ∂r              ∂θ            ∂φ
   (b) Find the corresponding reciprocal vectors xr , xθ , xφ .
   (c) The vector derivative (3.46) on R3 can be defined by
                                              ∂        ∂       ∂
                                  ∂x = xr        + xθ    + xφ    .
                                              ∂r      ∂θ      ∂φ
        Show that ∂x ∧ ∂x = 0, just as we found in (3.54).



13.2 The Vector Derivative and the Directed Integral

Let M be a regular m-surface in Rn of class C p , where p ≥ 2, containing the m-patch
M. Just as we defined the vector derivative on Rn in (3.46), we now define the
two-sided vector derivative at an interior point x in the m-patch M ⊂ M . By “two
sided” we mean that the vector derivative acts both to the left and to the right.
This is convenient because the geometric product is not, in general, commutative.
Let f , g : M → Gn be Gn -valued functions of class C p on the interior of the m-patch
M ⊂ M , where p ≥ 2.
Definition 13.2.1. The two-sided vector derivative ġ(x)∂˙x f˙(x) of f (x) and g(x) on
M = x(R) at the point x ∈ M is defined indirectly in terms of the partial derivatives
on the interior of the m-rectangle R by
                       m                              m ˙
                                                          ∂
     ġ(x)∂˙x f˙(x) = ∑ (xi · ∂˙x )(ġ(x)xi f˙(x)) = ∑ i (ġ(x(s))xi f˙(x(s))),   (13.7)
                      i=1                            i=1 ∂ s

where the derivatives act only on the dotted arguments.
   In the above definition, we are using the chain rule,
                                      m
                                             ∂x          m
                                                             ∂
                             ∂x = ∑ xi           · ∂x = ∑ xi i ,
                                   i=1       ∂si
                                                        i=1 ∂ s

but all the formulas for the vector derivative (3.46) in Rm given in Chap. 3, except
those depending upon the integrability condition (3.54), remain valid for the vector
derivative on an m-surface. The integrability condition (3.54) for an m-surface M ⊂
Rn must be replaced by the weaker condition that

                                  (a ∧ b) · (∂x ∧ ∂x ) = 0                        (13.8)

for all tangent vector fields a = a(x), b = b(x) in Tx at all interior points x ∈ M .
230                                                                   13 Calculus on m-Surfaces


   We can express the reciprocal vectors xi in terms of the vector derivative. We
have xi = ∂x si for i = 1, . . . , m. The Leibniz product rule for partial derivatives gives

                        ġ(x)∂˙x f˙(x) = ġ(x)∂˙x f (x) + g(x)∂˙x f˙(x).

  For m ≥ 2, the oriented tangent (m − 1)-vector at a given point x on a given face
 i of the boundary of M is defined to be
M±

                                     xi(m−1) = ±x(m) xi .                               (13.9)

The vector xi is reciprocal to xi , and the ± sign is chosen on a given face in such a
way that n = ±xi defines the direction of the outward normal to the face at a given
point x on the boundary. In the case when m = 1, the oriented tangent 0-vector on
each face of M± 1 is taken to be −1 on M 1 = {x(a1 )} and +1 on M 1 = {x(b1 )},
                                             −                          +
respectively.
   The points of an m-rectangle R, when assigned an orientation, make up an m-
chain. An m-chain R has the directed content
                                             m
                                 D(R) = ∏(bi − ai )e(m) ,                              (13.10)
                                             i=1

which is the magnitude of the m-rectangle R times the unit m-vector
                                     ds(m)         ∂s          ∂s
                            e(m) =           =          ∧ ··· ∧ m ,
                                     ds(m)         ∂ s1        ∂s
giving it its direction.
   The m-rectangular patch M, the image of the m-rectangle R, is also an m-chain
inheriting its orientation from the m-chain R. We now define the concept of the
directed integral over the m-chain M. Let f , g : M → Gn be continuous Gn -valued
functions on the m-rectangular patch M ⊂ M .
Definition 13.2.2. The directed integral over M, for m ≥ 1, is defined by
                                            
                        g(x)dx(m) f (x) =          g(x(s))x(m) f (x(s))ds(m) ,         (13.11)
                    M                         R

where s = ∑m    i       (m) = ds1 · · · dsm and
           i=1 s ei , ds

                                     dx(m)         ∂x        ∂x
                            x(m) =           =         ∧ ···∧ m .
                                     ds(m)         ∂s1       ∂s

We use the directed integral to define the directed content of the m-chain M, for
m ≥ 1. We have
                                                   
                                     D(M) =             dx(m) .                        (13.12)
                                                    M
A directed integral over a surface is shown in Fig. 13.5.
13.2 The Vector Derivative and the Directed Integral                                                231



                                                                           s
Fig. 13.5 Choosing
 f (x) = g(x) = 1, when the
element of directed area
dx(2) = dx1 ∧ dx2 is
integrated over the
smooth-oriented surface S                                                                     dx2
                                                                                        dx1
bounded by the oriented unit

                                                                  c
circle
      C in the xy-plane, we
get S dx(2) = π e12                                                              e12

                                                                    dx(2) = dx1        dx2


  We also need to define the directed integral over the boundary β (M) of the
m-chain M.
Definition 13.2.3. The directed integral over the boundary, for m ≥ 2, is
                                           m 
                 g(x)dx(m−1) f (x) = ∑                       g(x)dx(m−1) f (x)
         β (M)                             i=1 M+ ⊕M−
                                                i   i

                                            m 
                                        =∑          −
                                                            g(x(s))x(m−1) f (x(s))ds(m−1)     (13.13)
                                           i=1 R+ ⊕Ri
                                                i


                            (m−1)                     (m)
where s = ∑m      i
             i=1 s ei and ds      = dsdsi = ds1 · · · dsi−1 dsi+1 · · · dsm in Ri± . For m = 1,
the directed integral over the boundary is given by
                                                 
                             g(x)dx(0) f (x) =               g(x)dx(0) f (x)
                     β (M)                          1 ⊕M 1
                                                   M+   −

                                            = g(x(b1)) f (x(b1 )) − g(x(a1)) f (x(a1 )).      (13.14)

   Our objective now is to prove the fundamental theorem of calculus relating the
integral over an m-chain M to the integral over its boundary β (M). One direct
consequence of this important theorem will be that

                                                  D(β (M)) = 0,                               (13.15)

where D(M) was defined in (13.12). In addition, all of the classical integration
theorems such as Stoke’s theorem, Green’s theorem, and Gauss’ divergence theorem
will follow as special cases.
   We will need the following lemma.
Lemma 13.2.4. Let M be a rectangular m-patch of class C2 in Rn . Then
                                              j
                                                      ∂
                                            ∑ ∂ si x( j) · xi = 0,
                                            i=1

for j = 1, . . . , m. In the case when j = m, the “·” can be removed.
232                                                                              13 Calculus on m-Surfaces


Proof. For j = 1, clearly ∂∂s1 x1 · x1 = 0. We now inductively assume that the lemma
is true for all j < m and calculate
              m
                 ∂               m
                                    ∂
             ∑ ∂ si (m)
                   x    · x i
                              = ∑ ∂ si [(x(m−1) ∧ xm ) · xi]
             i=1                i=1

                                           ∂             m−1
                                                              ∂
                                      =
                                          ∂s
                                               x (m−1) − ∑        [(x(m−1) · xi ) ∧ xm ]
                                                         i=1 ∂ s
                                             m                  i

                                                      m−1
                                      = x(m−1)m − ∑ (x(m−1) · xi ) ∧ xmi = 0.
                                                       i=1

   In the last step, we have used the fact that partial derivatives commute so that
                                               ∂ xm  ∂ xi
                                      xmi =         = m = xim .
                                               ∂s i  ∂s


   We now have everything necessary to prove the important fundamental theorem
of calculus. This theorem, as mentioned earlier, will give all of the classical
integration theorems such as Green’s theorem for the plane, Stokes’ theorem for a
surface in 3-dimensional space, Gauss’ divergence theorem, and higher dimensional
analogues.
Fundamental Theorem of Calculus 13.2.5. Let M be a rectangular m-patch of
class C2 and f , g : M → Gn of class C1 . Then
                                                      
                              g(x)dx(m)∂x f (x) =                  g(x)dx(m−1) f (x)              (13.16)
                          M                                β (M)

Proof.
            
                      gdx(m−1) f
              β (M)
                      m                                   m 
                  =∑                   gdx(m−1) f = ∑                    gx(m−1) f ds(m−1)
                  i=1 M+ ⊕M−                               i=1 R+ ⊕R−
                       i   i                                    i   i


                      m                bi ∂                          ds(m)
                  =∑                                (gx(m) xi f )dsi
                  i=1 R+ ⊕R−
                       i   i              ai   ∂ si                      dsi
                      m        ∂˙                   
                  =∑                  (ġx (m) x i ˙
                                                   f ) ds(m)
                  i=1 R          ∂ si
                      m                                   
                  =∑           (xi · ∂˙ )ġdx(m) xi f˙ =         gdx(m) ∂ f .
                  i=1 M                                      M
13.2 The Vector Derivative and the Directed Integral                                                  233


   Because this theorem is so important, giving all of the classical integration
theorems, it is worthwhile to go through the steps of its proof in detail for the case
when m = 2. This should also help the reader understand the notation that is being
used. We begin with the right side (13.16) of the theorem. By the Definition (13.13),
                                                                         
                              gdx(1) f =                     gdx(1) f +                  gdx(1) f
                      β (M)                        1 ⊕M 1
                                                  M+   −
                                                                                2 ⊕M 2
                                                                               M+   −

with the help of the chain rule,
                                                                  
                             =              gx(1) f ds(1) +                    gx(1) f ds(1)
                                 R1+ ⊕R1−                           R2+ ⊕R2−

with the help of (13.9), Fubini’s theorem [95, p. 919], and the one-dimensional
fundamental theorem of calculus,
         b2   b1                              (2)    b  b ∂                      (2)
                          ∂
                                                                       1        2
                                               1 ds                                   1 ds
    =                         (gx (1) x 1
                                          f )ds       +              (gx (1) x 1
                                                                                 f )ds
         a2     a1       ∂ s1                     ds1   a1   a2 ∂ s
                                                                   1                     ds2

again, with the help of Fubini’s theorem, Lemma 13.2.4, and the chain rule,
                                                                  
                 =                   x1 · ∂˙ ġdx(2)x1 f˙ +                    x2 · ∂˙ ġdx(2)x2 f˙
                           1 ⊕M 1
                          M+                                         1 ⊕M 1
                                                                    M+
                               −                                         −


and finally with the help of Definition (13.11)
                                                      
                                                  =        gdx(2)∂ f ,
                                                      M

which completes the proof.
  Choosing g(x) = f (x) = 1, the constant functions, in the fundamental theorem
immediately gives the following:
Corollary 13.2.6. Let M be a rectangular m-patch of class C2 , then
                                                      
                                      D(M) =                      dx(m−1) = 0.
                                                          β (M)

   Directed integration over m-chains and their boundaries can be extended to any
simple m-surface S in Rn obtained by gluing together the images of m-rectangles,
making sure that proper orientations are respected on their boundaries [45, p.101–
103]. While technically more difficult than evaluating a Riemann integral in the
plane, since surfaces and directed quantities are involved, the idea is basically the
same.
   In the application of the fundamental theorem of calculus 13.2.5, the convention
of the outward normal can be very confusing. It is worthwhile to look at this
234                                                                                      13 Calculus on m-Surfaces

Fig. 13.6 Showing the two
possible orientations for the                    D              dx                                D        dx
unit disk D bounded by the                                         n                                          n
positively oriented unit circle                                x                                          x
β (D) centered at origin                   d x (2) 0                                          d x (2) 0

                                             β (D)                                               β (D)

convention in detail for n = 2. Let us consider in detail this theorem applied to
the unit disk D centered at the origin, where g(x) = 1 and f (x) = x. We get
                                                                        
                              2        dx(2) =           dx(2)∂x x =                  dxx.
                                   D                 D                        β (D)

This equation implies that
                                                                            
                                           1                       1
                                   dx(2) =                 dxx = −                     xdx.                (13.17)
                                 D         2         β (D)         2           β (D)

   One hard fast convention is that when integrating over a simple closed curve in
the plane, the counterclockwise direction is always considered to be positive. But
we also have the outward normal convention (13.9) that needs to be satisfied. This
convention implies that we should choose

                         dx(2) = |e21 |e21 = −i|e21 | and dx = n̂|dx|                                      (13.18)

where i = e12 and n̂ is the outward normal unit vector at the point x on the boundary
of D. With these convention, multiplying equation (13.17) on the right by i gives
                                                                        
                                             1                        1
                                 |dx(2)| =                   idxx =                   n̂x|dx|.
                          D                  2       β (D)            2       β (D)

It seems more natural to choose dx(2) = e12 |dx(2) | = i|dx(2)|. We can do this if dxi =
n̂|dx|. In this case, multiplying (13.17) by −i gives
                                                                        
                                             1                        1
                                 |dx(2)| =                   xdxi =                   xn̂|dx|.
                          D                  2       β (D)            2       β (D)

  The problem is that there is no one convention that works well in all dimensions.
The two different conventions are summarized in Fig. 13.6.
13.2 The Vector Derivative and the Directed Integral                                          235


Exercises

1. Consider the image M = x(R) of the 2-rectangle R = [−1, 1] × [−1, 1], where

                              x(s1 , s2 ) = (s1 , s2 , −(s1 )2 + s2 + 2).

   See Fig. 13.2.
                                                                                          
   (a) Find the area |M| of the patch M by calculating the integral M |dx(2)| =
                  (2)        (2) = ds1 ds2 .
        R |x(m) |ds , where ds
   (b) Find the length |∂ M| of the boundary ∂ M of M by evaluating the integral
                                                        
                                              |∂ M| =             |dx|.
                                                          β (M)


2. Let R = [−1, 1] × [−1, 1] be a 2-square in R2 and let M = {x(R)} ⊂ R3 where
   x(s1 , s2 ) = (s1 , s2 , (s1 )2 + (s2 )2 ), see Fig. 13.3.
   (a) Find the area |M| of the patch M by calculating the integral
                                                                  
                                                                              √ 1 2
                                  |dx(2)| =       |x(2) |ds(2) =               gds ds ,
                              M               R                           R

       where g = −(x1 ∧ x2 )2 = det[g] and [g] is the Gram matrix.
   (b) Find the length |∂ M| of the boundary ∂ M of M by evaluating the integral
                                                        
                                              |∂ M| =             |dx|.
                                                          β (M)


3. Let R = [−1, 1] × [−1, 1] be a 2-square in R2 and let M = {x(R)} ⊂ R3 where
   x(s1 , s2 ) = (s1 , s2 , (s1 )2 (s2 )2 + 1), see Fig. 13.4.
                                                                                          
   (a) Find the area |M| of the patch M by calculating the integral M |dx(2)| =
                  (2)
                                                               
                              (2) = ds1 ds2 . Ans. 4 − 1 tan−1 4 + 7 log(5) = 7.44626.
        R |x(2) |ds , where ds                         3       3       3
   (b) Find the length |∂ M| of the boundary ∂ M of M by evaluating the integral
                                                        
                                              |∂ M| =             |dx|.
                                                          β (M)
              √
        Ans. 4 5 + 2 sinh−1 (2) = 11.8315.
4. Use the fundamental theorem of calculus to show that
                     
   (a) M dx(2) = 12 β (M) dx ∧ x.
       
   (b) β (M) dx · x = 0.
5. Choosing a = ei and b = e j , show that (13.8) is a consequence of the property
   that partial derivative commute.
236                                                                                   13 Calculus on m-Surfaces


6. (a) Whereas the integrability condition (13.8) holds for an m-surface, show that
        the stronger integrability condition (3.54) is not valid for the vector derivative
        on a 2-dimensional cylinder. What is the relationship of the vector derivative
        on the cylinder to the vector derivative in R3 expressed in cylindrical
        coordinates discussed in Problem 5 of Sect. 13.1?
    (b) Similarly, show that the stronger integrability condition (3.54) is not valid
        for the vector derivative on the 2-dimensional unit sphere. What is the
        relationship to the vector derivative in R3 expressed in spherical coordinates
        discussed in Problem 6 of Sect. 13.1?
7. Show that the integrability condition (13.8) implies that

                                       [b, a] = b · ∂x a − a · ∂xb ∈ Tx

   for all tangent vector fields a, b ∈ Tx .



13.3 Classical Theorems of Integration

Let x = x(s), for s ∈ R = [a, b], define a 1-dimensional curve M = x(R) ⊂ Rn and
let f (x), g(x) be C1 functions mapping the curve M → Gn . With the help of (13.14),
the fundamental theorem of calculus 13.2.5 gives
                                             
                       ġ(x)dx · ∂˙ f˙(x) =               g(x)dx(0) f (x) = |ba g(x(s)) f (x(s))
                   M                              β (M)

                                          = g(b) f (b) − g(a) f (a),

where a = x(a) and b = x(b). Note, with the help of the chain rule, that
                                                                      d
                                          dx∂ = dx · ∂x = ds             .
                                                                      ds
This gives the condition of when an integral along a curve M connecting the points
a, b ∈ Rn is independent of the path x(s). Note also that the vector derivative ∂ = ∂x
differentiates both to the left and to the right, as indicated by the dots over the
arguments.
    For a 2-dimensional surface S embedded in Rn , where the boundary β (S ) of
S is a simple closed curve, the fundamental theorem of calculus 13.2.5 gives
                                                                       
              g(x)dx(2)∂ f (x) =              g(x)dx(2) · ∂ f (x) =                   g(x)dx f (x).    (13.19)
          S                               S                                  β (S )

   This general integration theorem includes the classical Green’s theorem in the
plane and Stokes’ theorem for a surface in R3 as special cases [91, p.109], [92,
p.134]. If S ⊂ R2 is a 2-surface in the plane, and choosing g(x) = 1 and f = f (x)
to be a C1 vector-valued function in R2 , we have
13.3 Classical Theorems of Integration                                                                            237

                                                                 
                                                 dx(2)∂ ∧ f =                  dx · f,                         (13.20)
                                             S                        β (S )

which is equivalent to the standard Green’s theorem.
    Now let S be a 2-surface in R3 , having the simple closed curve β (S ) as
its boundary. For g(x) = 1 and f = f (x), a vector-valued function in R3 , (13.20)
becomes equivalent to Stokes’ theorem for a simple surface in R3 .
    If V is a region in R3 bounded by a simple 2-surface β (V ), and g(x) = 1 and
f = f (x) is a vector-valued function in R3 , then Theorem 13.2.5 gives
                                                            
                                              dx(3)∂ · f =                dx(2) ∧ f,                           (13.21)
                                          V                      β (V )

which is equivalent to the Gauss’ divergence theorem. This becomes more evident
when we multiply both sides of the above integral equation by I −1 = e321 , giving
                                                            
                                          ∂ · f |dx(3)| =                 n̂ · f |dx(2) |,                     (13.22)
                                      V                       β (V )

where n̂ is the unit outward normal to the surface element dx(2) at the point x ∈
β (V ).
   Over the last several decades, a powerful geometric analysis has been developed
using geometric algebra. This geometric analysis generalizes the concept of an
analytic function in the complex plane to a monogenic function in Rn , [10].
Definition 13.3.1. A differentiable geometric-valued function f (x) is said to be
monogenic on an open region M ⊂ Rn if ∂x f (x) = 0 for all x ∈ M.
   Let M ⊂ Rn be an open region bounded by S an (n − 1)-dimensional simple
closed surface. Let f = f (x) be a differentiable geometric-valued function in the
interior of M and continuous on its boundary S . Then for any interior point x ∈ M,
                                                                  
               1                     (x − x)            1                               (x − x)
   f (x ) =               |dx(n)|            ∂x f (x) −                   |dx(n−1)|               n̂ f (x),   (13.23)
               Ω       M
                                       
                                     |x − x|n            Ω             S                 |x − x|n

                                                                   π                               n/2
where n̂ is the unit outward normal to the surface S and Ω = Γ2(n/2)    is the area of
the (n − 1)-dimensional unit sphere in R . This important result is a consequence
                                          n
                                                                                   −x)
of Theorem 13.2.5 by choosing g(x) to be the Cauchy kernel function g(x ) = |x(x −x|n,

which has the property that ∂x g(x ) = 0 for all x = x ∈ Rn . For a proof of this
general result, see [43, p. 259–262]. For a monogenic function f (x) in M with
boundary S , it follows from (13.23) that
                                                     
                                                 1                      (x − x)
                               f (x ) = −               |dx(n−1)|                n̂ f (x).                    (13.24)
                                                 Ω   S                  |x − x|n
238                                                                                       13 Calculus on m-Surfaces

Fig. 13.7 The oriented unit
disk M is bounded by the                                                                       M            dx
oriented unit circle S                                                                                             n
centered at the point x                                                                                    x
                                                                                         d x (2) x




This means that a monogenic function f (x) in a region M ⊂ Rn is completely
determined by its values on its boundary S . This generalizes Cauchy’s famous
integral theorem for analytic functions in the complex number plane [2, p.119].
   Let us work through the details of the derivation of the important formulas
(13.23) and (13.24) when n = 2 and where M ⊂ R2 is the unit disk bounded by
the unit circle S centered at the point x , see Fig. 13.7. Let f = f (x) and g = g(x)
be differentiable geometric functions on M with values in the geometric algebra G2 .
Applying the fundamental theorem of calculus (13.16), we have
                                                                    
                                                    gdx(2)∂x f =           gdx f .                              (13.25)
                                                M                      S
                                            
We now choose g(x) = |x−x      |2 and note that ∂x g = 0 at all points x ∈ M, except at
                           x−x

                        
the singular point x = x . Expanding the left side of this equation gives
                                                                     
                    gdx(2)∂x f =                    gdx(2)(∂˙x f˙) −         (ġ∂˙x )dx(2) f
                M                               M                        M
                                                                                             
                                        =           gdx(2)(∂˙x f˙) −             dx(2) ∂x · g(x) f (x ).
                                                M                            M

Applying the fundamental theorem of calculus to the second term gives
                              
                                         x − x
                                                                 
        dx(2)∂x · g(x) f (x ) =     dx          f (x 
                                                        ) = e 21     |dx| f (x ) = 2π e21 f (x ).
      M                            S    |x − x|                   S


     Equating what we have found for the left side with the right side of (13.25) gives
                                                                          
                              1             1                 1                  1
               f (x ) =                          dx f (x) −                         dx (∂x f (x))
                             2π i       S x − x             2 πi            M x − x (2)
or
                                                                
                       1            1                1               1
          f (x ) =                      dx f (x) −                      (∂ f (x))|dx(2) |,
                                                                         x
                                                                                                                (13.26)
                      2π i       S x−x
                                                   2π            M x−x
where i = e12 and dx(2) = −i|dx(2)|. This very general formula applies to any
G2 -valued function f (x) which is differentiable at the interior points of M and
continuous on the boundary S of M. It expresses the value of f at any interior point
13.3 Classical Theorems of Integration                                                                             239


x ∈ M in terms of the sum of an integral of f (x) on the boundary S and an integral
of ∂x f (x) over the interior of M. Making the natural identification z = e1 x = x + iy,
we can write (13.26) in the equivalent complex form,
                                                            
                     1             1                 1               1 d            
     f (e1 z ) =                      dz f (e1 z) −                        f (e 1 z)  |dx(2)|,               (13.27)
                    2π i        S z−z
                                                    π                  
                                                                 M z − z dz

where we have identified dz  d
                               = 12 e1 ∂x . If in M g(z) = f (e1 z)e1 is a function of z and
not z, or equivalently dz g(z) = 0, then g(z) is said to be an analytic function in M.
                         d

   More generally, if f (x) is a differentiable vector-valued function in M, then
g(z) = f (e1 z)e1 is the corresponding differentiable complex valued function, and

                                                                      1     e−iθ
                                    z − z = reiθ    ⇐⇒                 
                                                                          =      .
                                                                     z−z     r

If in addition r = 1, then dz = ieiθ dθ . Using these relationships, (13.27) can be
written in the interesting complex form
                             2π                              2π  1
                      1                                  1                              d
        g(z ) =                      g(z + eiθ )dθ −                           e−iθ      g(z)drdθ .         (13.28)
                     2π i       0                        π       0       0              dz
   If in the disk M
                                                                         dg(z)
                                      ∂x f (x) = 0   ⇐⇒                        = 0,
                                                                          dz
then (13.26)–(13.28) all reduce to
                                                                                        
                     1         1                          1                                 g(z)
       f (x ) =                    dx f (x) ⇐⇒ g(z ) =                                          dz,         (13.29)
                    2π i    S x−x
                                                        2π i                             S z−z
                                                                                                


where g(z) = f (e1 z)e1 is the corresponding analytic function in the disk M. This is
Cauchy’s famous integral formula for an analytic function g(z) in the unit disk M.
   Formula (13.28) is considerable more general than (13.29). For example, if
g(z) = zz = x2 + y2 so that dg(z)
                              dz = z, then (13.28) gives the valid relationship
                        2π                                               2π  1
                 1                                                   1
      z z =                   (z + eiθ )(z + e−iθ )dθ −                              e−iθ (z + reiθ )drdθ .
                2π i    0                                            π       0      0

   In evaluating the left-hand side of Eq. (13.25), we had to make use of the
fundamental theorem of calculus as applied to generalized functions. Whereas
integrating over the singularity x = x presents difficulties, the integration over the
boundary of the disk, the unit circle, is well defined. The theory of generalized
functions or distributions makes precise what is going on here [30].
   Another way of constructing geometric calculus on a k-surface is by defining the
k-surface to be the limit set of a sequence of k-chains [73].
240                                                                              13 Calculus on m-Surfaces


Exercises

 1. If the acceleration of a particle at any time t > 0 is
                                    dv
                              a=       = 5 cos2te1 − sinte2 + 2te3,
                                    dt
    and the velocity v and position vector x are 0 at t = 0, find v(t) and x(t) at any
    time t > 0.                                                π /2
                                   d2 a                                      2
 2. Noting that dtd a ∧ da
                        dt = a ∧ dt 2 , evaluate the integral 0        a ∧ ddt 2a dt for the
    acceleration a given in Problem 1.
 3. Let a = (3x + 2y)e1 + 2yze2 + 5xz2 e3 .
                       
      (a) Calculate C a · dx from the point (0, 0, 0) to the point (1, 1, 1) where C is
          the curve defined by x = t, y = −t 2 + 2t, and z = 2t 2 − t.
      (b) Calculate the integral in (a) where C is the straight line joining (0, 0, 0) and
          (1, 1, 1, ).
                                    
 4. If a = ∂x φ (x), show that xx12 a · dx is independent of the curve C from the point
    x1 to the point x2 .
 5. Evaluate the integral
                                               
                                                        a · n|dx(2)|,
                                                    S
    where a = 2ze1 + e2 + 3ye3, S is that part of the plane 2x + 3y + 6z = 12 which
    is bounded by the coordinate planes, and n is the normal unit vector to this
    plane.
 6. Let f(x) = M(x)e1 + N(x)e2 , where M(x), N(x) are C1 real-valued functions for
    x ∈ R ⊂ R2 , where R is a closed region in R2 bounded by the simple curve C.
    Using (13.20), show that
                                                              
                                                                            ∂N ∂M
                       f · dx =             (∂x ∧ f)dx(2) =                    −    dxdy
                   C                    R                                   ∂x   ∂y
    which is classically known as Green’s theorem in the plane. Note that dx =
    dxe1 + dye2 and dx(2) = dxdye21 since we are integrating counterclockwise
    around the curve C in the xy-plane.
 7. Let S be an open-oriented 2-surface in R3 bounded by a closed simple curve C
    and let f(x) be a C1 vector-valued function on S. Using (13.19), show that
                                                             
                       f · dx =             (∂x ∧ f)dx(2) =                 (∂x × f) · n̂|dx(2)|,
                   C                    R                               R

    which is classically known as Stokes’ theorem for a surface S ⊂ R3 .
 8. Let V be a volume bounded by a closed surface S in R3 and f(x) ∈ C1 be a
    vector-valued function. Show that (13.21) implies (13.22),
13.3 Classical Theorems of Integration                                                        241


                                         II

                                                   I




                                             
Fig. 13.8 The path integrals I f (x)dx and II f (x)dx over the simple closed curves I and II are
equal if f (x) is monogenic within the enclosed regions. The path integrals in opposite directions
over the connecting paths between them cancel out


                                                       
                                     f · n̂|dx(2)| =               (∂x · f)|dx(3)|
                                 S                             V

    which is classically known as Gauss’ divergence theorem in R3 .
 9. Using the fundamental theorem of calculus, show that the vector derivative
    ∂x f (x) of a geometric-valued function f (x) ∈ G3 can be defined by
                                                        
                                              1
                            ∂x f (x) = lim                        |dx(2)|n̂ f (x),
                                      Δ V →0 Δ V             ΔS

    where the small volume element Δ V around the point x is bounded by the
    closed surface Δ S and n̂ is the outward unit normal
                                                    
                                                            vector at each point x ∈ Δ S.
10. Show that the path integrals I f (x)dx and II f (x)dx over the simple closed
    curves I and II shown in Fig. 13.8 are equal if f (x) is monogenic within the
    enclosed regions in R2 . Conclude that the unit circle centered at the singular
    point or pole at x can be replaced by any simple closed curve with the same
    orientation containing the pole x without changing the value f (x ) in the path
    integral given in (13.29).
11. (a) Show that g(z) = f (e1 z)e1 is analytic iff f (x) is a monogenic vector-valued
        function.
    (b) Show that an analytic function is g(z) is monogenic but all monogenic
        functions are not analytic.
Chapter 14
Differential Geometry of Curves




                                Cowboys have a way of trussing up a steer or a pugnacious
                                bronco which fixes the brute so that it can neither move nor
                                think. This is the hog-tie, and it is what Euclid did to geometry.
                                                                  —Eric Bell, The Search for Truth



The study of the differential geometry of surfaces rightly begins with the study
of curves, since a curve can be considered to be a 1-dimensional surface, and a
more general surface can be considered to be the set of all curves which belong to
the surface. In particular, the classical formulas of Frenet-Serret are derived for the
moving frame along a curve. The study of the calculus of a k-surface, begun in the
previous chapter, is also a part of differential geometry.



14.1 Definition of a Curve

A mapping x : [a, b] → Rn is said to be a regular curve of class Ck on [a, b], if the
                  j
 jth derivative ddt xj is defined and continuous for all t ∈ (a, b) and all 1 ≤ j ≤ k and
      dt = 0 for all t ∈ (a, b). The particular parameterization of a curve is generally
also dx
unimportant. By a regular reparameterization of the Ck curve x(t), we mean a Ck
function t = t(s) for all c ≤ s ≤ d such that ds   dt
                                                       = 0 for all s ∈ (c, d). This condition
guarantees that the function t(s) is one-to-one and onto on the interval [c, d] and is
therefore invertible, s = t −1 (t) for
                                    √  all t ∈ [a, b].
                                     3
    For example, x(t) = (t,t 2 , t 4 ) ∈ R3 is a regular C1 curve on any interval
[a, b] ⊂ R. This curve is shown on the interval [−1, 1] in the Fig. 14.1.




G. Sobczyk, New Foundations in Mathematics: The Geometric                                     243
Concept of Number, DOI 10.1007/978-0-8176-8385-6 14,
© Springer Science+Business Media New York 2013
244                                                   14 Differential Geometry of Curves

Fig. 14.1 The  √ curve
               3
x(t) = (t,t 2 , t 4 ) ∈ R3 for
t ∈ [−1, 1]
                                                                                       1
                                                                                      0.75
                                                                                      0.5
                                                                                      0.25
                                             -1                                      10
                                                   -0.5                             0.75
                                                           0                      0.5
                                                                0.5             0.25
                                                                          1 0



  Let x = x(t) be a Ck regular curve on the interval [a, b] and let t ∈ [a, b].
The arclength of the curve x from a to t is given by the integral
                                             t  
                            s(t) = |dx| =          dx  dt.           (14.1)
                                   x
                                                   
                                               a dt

By the fundamental theorem of calculus (13.2.5),
                                               
                        ds    d t  dx         dx 
                           =             dt =   = 0,
                        dt    dt a dt              dt

so that x(s) = x(t(s)) is a regular reparameterization of the curve x(t) on the interval
[a, b]. The regular reparameterization x(s) is called the natural reparameterization
or unit speed reparameterization and is very useful tool for deriving the theoretical
properties of curves. The only problem is that it is often impossible to find a
convenient form for the inverse function (14.1)  √   involved in its definition.
                                                  3
    For example, for the curve x(t) = (t,t 2 , t 4 ) ∈ R3 on the interval [−1, 1], the
arclength is given by
                              t           t
                                   dx                       16 2
                     s(t) =            dt =       1 + 4t 2 + t 3 dt.
                              −1    dt         a              9
But this integral is solvable only by using elliptic integrals. Thus, there is no good
expression for the natural reparameterization x(t(s)) of this curve. However, the
arclength s(t) is well defined on the interval [−1, 1] as shown in Fig. 14.2.



Exercises

1. Find the arclength of the curve x(θ ) = (cos θ , sin θ , 1 − sin θ − cos θ ) for 0 ≤
   θ ≤ 2π .
2. Let h > 0 and r > 0 be constants.
14.2 Formulas of Frenet–Serret                                                       245

Fig. 14.2 Graph of the                                           3.5
arclength of the
               √   curve                                          3
               3
x(t) = (t,t 2 , t 4 ) ∈ R3 for
                                                                 2.5
t ∈ [−1, 1]
                                                                  2
                                                                 1.5
                                                                  1
                                                                 0.5

                                               -1       -0.5                0.5        1



   (a) Find the arclength of the circular helix x(t) = (r cost, r sint, ht) for
       0 ≤ t ≤ 2π .
   (b) Reparameterize the right circular helix by arclength.
3. (a) Find the arclength of the curve x(t) = (et cost, et sint, et ) for 0 ≤ t ≤ 1.
   (b) Reparameterize the curve x(t) by arclength.
4. (a) Find the arclength of the curve x(t) = (cosht, sinht,t) for 0 ≤ t ≤ 1.
   (b) Reparameterize the curve x(t) by arclength.
5. Show that t = θ θ2 +1 is a regular reparameterization on 0 < θ < ∞ and takes the
                      2


   interval 0 < θ < ∞ √ onto 0 < t < 1.√             √            √
6. Let x(s) = 12 (s + s2 + 1, (s + s2 + 1)−1 , 2 log (s + s2 + 1)). Show that
   | ds
     d
        x(s)| = 1 and conclude that s is the natural parameter of arclength.
7. (a) Show that x = (t,t 2 + 1, (t − 1)3 ) is a regular curve for all t ∈ R.
                         of this curve from t = 1 
   (b) Find the arclength                              to t = 2.
8. Show that x(s) = 13 ((1 + s)3/2 , (1 − s)3/2, √3s2 ) is a unit speed curve.
9. (a) Show that x(θ ) = (1 + cos θ , sin θ , 2 sin(θ /2)), for −2π ≤ θ ≤ 2π , is regular
       and lies on the sphere of radius 2 and the cylinder (x1 − 1)2 + x22 = 1.
   (b) Find the arclength of this curve from t = −2π to t = 2π .



14.2 Formulas of Frenet–Serret

Let x(t) be the trajectory of a particle in R3 and v = x (t) = dx   dt be its velocity.
Assuming that the time t is a regular parameterization of the curve x(t), we can
consider the reparameterization x(s) of the curve in terms of the natural parameter of
arclength s. The unit tangent to the curve x(s) is defined by T = dx
                                                                  ds = ẋ. We also have

                                 dx dx ds     ds
                                    =       =T ,
                                 dt   ds dt   dt
                       dx 
where |T| = 1 and ds   
                  dt = dt is the speed of the particle.
246                                                        14 Differential Geometry of Curves


   The curvature κ is defined by κ = | dT ds | = |Ṫ|. We will use the dot notation
to indicate differentiation with respect to the natural parameter s. We have the
following formula for the calculation the curvature κ directly in terms of the
parameter t,
                                               |x × x |
                               κ = |Ṫ(s)| =               .
                                                 |x |3
This can be verified by noting that x = T ds
                                           dt so that
                                                          2
                             d2s dT
                              ds                     ds             d2 s
                     x =T    +T 2 =                             +T        ,
                          dt   dt   ds                dt             dt 2
from which the result easily follows.
                                                                           
    The principal normal vector to the curve x(t) is defined by N(t) := |TT | . Clearly
T · N = 0, since T · T = 1 implies by differentiation that
                                d(T · T)
                                         = 2T · T = 0.
                                  dt
The unit binormal B to the curve x(t) is defined by B = T × N so that {T, N, B}
forms a right-handed orthonormal frame. This orthonormal frame is called the
comoving Frenet frame and is defined at each point along the curve x(t).
   Since B · B = 1 implies Ḃ · B = 0, and B = T × N, we have

                            Ḃ = Ṫ × N + T × Ṅ = T × Ṅ.

                ds = −τ N for some τ = τ (s) ∈ R. We say that τ (s) is the torsion
It follows that dB
of the curve x(s). To complete the formulas for the derivatives of the Frenet frame
of a curve x(s), we must calculate Ṅ. From N = B × T, we get Ṅ = Ḃ × T + B × Ṫ
so that
                       Ṅ = −τ N × T + κ B × Ṅ = −τ T + τ B.
The formulas just derived, known as the Frenet-Serret equations, can be nicely
summarized in the matrix form
               ⎛ ⎞ ⎛                    ⎞⎛ ⎞ ⎛                ⎞
                 T          0   κ     0    T            κN
            d ⎜ ⎟ ⎜                     ⎟⎜ ⎟ ⎜                ⎟
               ⎝N⎠ = ⎝−κ        0     τ ⎠ ⎝N⎠ = ⎝−κ T + τ B⎠ .          (14.2)
            ds
                 B          0  −τ 0        B           −τ N

   Defining what is known as the Darboux bivector
                                      ⎛ ⎞
                                       Ṫ
                     1             ⎜ ⎟
               Ω=      T N B ∧ ⎝Ṅ⎠ = κ N ∧ T + τ B ∧ N,
                     2
                                       Ḃ
14.2 Formulas of Frenet–Serret                                                          247


of the curve x(s), the Frenet-Serret equations can be put in the simple form
                                  ⎛ ⎞          ⎛ ⎞
                                     T           T
                                d ⎜ ⎟          ⎜ ⎟
                                  ⎝N⎠ = Ω · ⎝N⎠ ,                            (14.3)
                               ds
                                     B           B

as can be easily verified. The Darboux bivector Ω defines the angular velocity of
the Frenet frame along the curve x(s). Shortly, we will see how these equations
completely determine the intrinsic structure of a curve x(s) in R3 .



Exercises

 1. Find the equations of the tangent line and the normal plane (the plane whose
    normal vector is tangent) to the curve x(t) = (1 + t,t 2 , 1 − t 3 ) at the point t = 1.
 2. Let x(s) = (r cos(s/r), r sin(s/r), 0) be the circle of radius r in the xy-plane.
    Find the Frenet frame (T, N, B) and κ and τ for x(s).
 3. Let x(t) be a regular curve in R3 . Show that the following formulas are valid:
                   
    (a) T = |xx (t)
                 (t)|
                 x (t)×x (t)
    (b) B = |x (t)×x (t)|
    (c) N = B × N
                        (t)|
    (d) κ = |x (t)×x
                  |x |3
                      
                  ·(x ×x )  
    (e) τ = |xx (t)×x  (t)|2


 4. Find the Frenet frame, curvature, and torsion for the circular helix x(t) =
    (r cost, r sint, ht), where r and h are constant.
 5. Find the Frenet frame, curvature, and torsion for the curve x(t) = (1 + t 2,t,t 3 ),
    where r and h are constant.
                                            √        
 6. Given the curve x(s) = cos hs sin hs 1 − h2s where 0 < h < 1 is a constant,
    (a) Show that x(s) is a unit speed curve. Hint: Show that |ẋ(s)| = 1.
    (b) Find the Frenet comoving frame for x(s).                   √
    (c) Show that the curvature κ = h2 and that the torsion τ = h 1 − h2.
    (d) Show that the angular velocity Ω = −he1 e2 and verify that
                                      ⎛ ⎞         ⎛ ⎞
                                        T            T
                                   d ⎜ ⎟          ⎜ ⎟
                                      ⎝N⎠ = Ω · ⎝N⎠ .
                                   ds
                                        B            B
248                                                     14 Differential Geometry of Curves


 7. For the unit speed curve
                   1                           √          
             x(s) = (s + s2 + 1, (s + s2 + 1)−1 , 2 log (s + s2 + 1)),
                   2
    find its Frenet-Serret frame, curvature, and torsion.
 8. Find the unit speed parameterization for the curve y(t) = (cosht, sinht,t).
    Using this, find its Frenet-Serret frame, curvature, and torsion.
 9. Find the unit speed parameterization for the curve y(t) = (et cost, et sint, et ).
    Using this, find its Frenet-Serret frame,
                                            curvature, and torsion.
10. Given the unit speed curve, x(s) = 3 (1 + s)3/2 , (1 − s)3/2, √3s2 , find its Frenet-
                                         1

    Serret frame, curvature, and torsion.



14.3 Special Curves

We will now investigate curves in R3 that have special properties, such as being a
straight line, lying in a plane, or lying on a sphere.
   Clearly, if T = dxds is a constant unit vector, then
                                           s
                                 x(s) =         Tds = sT,
                                           0

which is the equation of a straight line through the origin and having the unit tangent
vector T.
   Let us now determine the conditions for x(s) to be a planar curve lying in the
plane of the bivector T ∧ N. Using the Frenet-Serret formulas, we calculate

               d3 x  d        dκ     dN dκ
                  3
                    = (κ N) =    N+κ    =    N − κ 2T + κτ B.
               ds    ds       ds     ds   ds
From this calculation, it is clear that the unit speed curve x(s), with κ = 0 for all s,
will lie in the plane of T ∧ N if and only if τ = 0 for all s. But since dB
                                                                          ds = −τ N, it
follows that x(s) being a plane curve is equivalent to B being a constant vector.
   A helix is a regular curve x(t) such that for some fixed unit vector a, called the
axis of the helix, T · a is constant. We will now show that a unit speed curve x(s)
with κ = 0 for all s is a helix if and only if there is a constant c such that τ = cκ .
This result is due to Lancret (1802).
   Following [56, p.32], first, we assume that x(s) is a helix so that a · T = cos θ is
a constant. We have θ = kπ , for otherwise T = ±a would imply that κ = 0. It then
follows that
                                 d
                                    (a · T) = κ a · N = 0,
                                 ds
so that a = cos θ T + sin θ B. Since a is constant,
14.4 Uniqueness Theorem for Curves                                                   249


                            da
                               = κ cos θ N − τ sin θ N = 0
                            ds
from which it follows that τ = κ cot θ = 0. If we now assume that τ = κ cot θ = 0
and define a = cos θ T + sin θ B, we can essentially reverse the above argument to
conclude that a is constant. Finally, since a · T = cos θ is a constant, x(s) is a helix.
   A unit speed curve x(s) on a sphere can be characterized by the condition that
for some fixed point c, called the center of the sphere, (x − c) · T = 0 for all s.
Noting that
                               d
                                  (x − c)2 = 2(x − c) · T,
                               ds
it follows that x(s) is a unit speed curve on a sphere if and only if (x − c)2 = r2 for
some constant r which is the radius of the sphere.



Exercises

1. Show that κτ = −T · B .
2. If x(s) is a unit speed curve, show that x · (x × x) = κ 2 τ .
3. Find the equation of the tangent plane (having the direction of the bivector T∧N)
   to the unit speed curve x(s) at the point x = x(s).
4. Show that TN = iB implies that N = iTB = −T× B and T = iBN = N× B, where
   i = e123 .
5. Let x(s) be a unit speed curve with κτ = 0 and ρ = 1/κ , σ = 1/τ and suppose
   that ρ 2 + (ρ  σ )2 = r2 where r is a constant. Show that x(s) lies on a sphere with
   radius r and center c = x + ρ N + ρ σ B.
6. Prove that x(t) is a straight line if and only if x ∧ x = 0.



14.4 Uniqueness Theorem for Curves

We have seen how special properties of curves are determined by properties of
their curvature and torsion as long as κ = 0 for all values of the unit parameter s.
The following theorem tells to what extent curvature and torsion determines a curve.
Fundamental Theorem of Curves 14.4.1. Any regular curve x(t) in R3 with κ >
0 is completely determined, up to position, by its curvature κ (t) and torsion τ (t).
More precisely, given an initial position x0 and initial directions T0 , N0 , B0 , the
regular curve x(t) is uniquely determined by its curvature κ (t) and torsion τ (t).
   The proof of the Fundamental Theorem of Curves depends on the existence
and uniqueness of a solution to a system of ordinary differential equations, in this
case the Frenet-Serret equations (14.2), together with the initial position x0 and
250                                                  14 Differential Geometry of Curves


the initial directions T0 , N0 , B0 . See [56, p.42–44] for an elementary discussion of
the issues involved. A more direct approach to the problem, involving the Darboux
bivector (14.3), is given in the problems below.



Exercises
                                        
             d
1. Show that ds exp 12 iĉθ = Ω exp 12 iĉθ where
                                                                  
                 d        1           1       1 dθ                   dĉ
       Ω=           exp     iĉθ exp − iĉθ =   i  + (1 − exp(iĉθ )       ĉ
                 ds       2           2       2 ds                   ds

   and i = e123 .
2. Show that
                       ⎛ ⎞                ⎛ ⎞
                        T                T0             
                       ⎜ ⎟         1      ⎜ ⎟        1
                       ⎝N⎠ = exp     iĉθ ⎝N0 ⎠ exp − iĉθ
                                   2                 2
                        B                  B0
   is the solution of the Frenet-Serret equations (14.3), if ĉ and θ of Problem 1
   are chosen so that Ω = − 2i (κ B + τ T). The unique unit speed curve x(s) is then
   specified by x(s) = 0s Tds with the initial conditions that T(0) = T0 , N(0) =
   N0 , B(0) = B0 , and x(0) = x0 .
3. Show that the equation
                      ⎛ ⎞                    ⎛ ⎞
                        T                   T0                
                      ⎜ ⎟             1      ⎜ ⎟            1
                      ⎝N⎠ = exp         iĉθ ⎝N0 ⎠ exp − iĉθ
                                      2                     2
                        B                      B0

   can be directly solved for ĉ and θ by using
                                 ⎛ ⎞
                                  T                              
                                 ⎜ ⎟            1             1
                 (T0 , N0 , B0 ) ⎝N⎠ = ∂a exp     iĉθ a exp − iĉθ
                                                2             2
                                  B
   to get
                                   1
                            eiĉθ = (TT0 + NN0 + BB0 − 1)
                                   2
   or, equivalently,
                                1
                         cos θ = (T · T0 + N · N0 + B · B0 − 1)
                                2
14.4 Uniqueness Theorem for Curves                                                      251


   and
                                    1
                          ĉ sin θ = (T × T0 + N × N0 + B × B0).
                                    2
4. By equating the expressions found for Ω in Problems 2 and 3, show that θ = θ (s)
   and ĉ = ĉ(s) satisfy the equivalent differential equation
           dθ                       dĉ                                  d  1 iĉθ 
              ĉ + (1 − eiĉθ )ĉ ×     = −(κ B0 + τ T0 ) = −2ie− 2 iĉθ
                                                                  1
                                                                            e2
           ds                       ds                                   ds
   or, equivalently,

                 dθ           dĉ                 dĉ
                    ĉ − sin θ + (1 − cos θ )ĉ ×     = −(κ B0 + τ T0 ).
                 ds           ds                  ds
   This shows that the differential equation for the Frenet-Serret frame is completely
   determined by the initial directions T0 , N0 , B0 and the scalar functions κ (s) and
   τ (s) for curvature and torsion along the unit speed curve x(s).
5. By squaring the equation found in Problem 4, show that
                          2                     2
                            dθ                     dĉ
                                 + 2(1 − cos θ )        = κ 2 + τ 2.
                            ds                     ds
                                     
   Use this to show that ddsθ |s=0 = κ02 + τ02 .
6. By differentiating the last equation given in Problem 3, show that
          dĉ                 dθ   1                                          
              sin θ + ĉcos θ    = κ N × T0 + (−κ T + τ B) × N0 − τ N × B0 .
          ds                  ds   2
Chapter 15
Differential Geometry of k-Surfaces




                              The essence of mathematics is not to make simple things
                              complicated, but to make complicated things simple.
                                                                                 —S. Gudder



We have discussed the calculus of a k-surface, or a k-manifold M embedded in
Rn in Chap. 13, utilizing the basic building block of a k-rectangle. In differential
geometry, a k-surface is rigorously defined by an atlas of charts which maps the
points of open sets in Rk onto regions in the manifold M in a one-to-one continuous
and differentiable manner, in much the same way that the maps of an atlas represent
the surface of the Earth. The tricky part of the definition is to guarantee that in
regions where the charts on M overlap, that they do so in a consistent way.
   In 1936, Hassler Whitney and, later in 1956, John Nash proved a number
of embedding theorems which show that an abstract k-manifold can always be
isometrically (preserving distances) embedded in Rn if n ≥ k2 + 5k + 3. In light
of the Whitney-Nash embedding theorems [57, 58, 96, 97],
   http://en.wikipedia.org/wiki/Nash embedding theorem
   http://www.math.poly.edu/∼yang/papers/gunther.pdf
little or nothing is lost by assuming that a general manifold is embedded in Rn or
even more generally in R p,q . We call such manifolds vector manifolds. By making
such an assumption, all the tools of the geometric algebra G p,q of R p,q become
available in the study of the extrinsic properties of M , alongside the intrinsic
properites of M which are independent of the particular embedding in Rn .
    The most basic object on a k-surface is its tangent geometric algebra Tx at
each point x on the surface. Since a k-surface is embedded in Rn , the concepts
of differentiation and integration carry over in a natural way from differentiation
and integration on Rn . Whereas Rn is flat, a general k-surface has many different




G. Sobczyk, New Foundations in Mathematics: The Geometric                              253
Concept of Number, DOI 10.1007/978-0-8176-8385-6 15,
© Springer Science+Business Media New York 2013
254                                                      15 Differential Geometry of k-Surfaces


kinds of curvature. We study the principle, Gaussian, mean, and normal curvatures
of a k-surface. The shape and curvature tensors of a k-surface are also defined and
studied.


15.1 The Definition of a k-Surface M in Rn

Let Rn denote Euclidean n-space and Gn = G(Rn ) the corresponding geometric
algebra of Rn . By a regular r-differentiable k-dimensional surface M in Rn , we
mean an alas of r-differentiable charts (coordinate patches) which taken together
cover M .
   Let
                    x(s) = x(s1 , . . . , sk ) and y(s) = y(s1 , . . . , sk )                  (15.1)
be two r-differentiable charts on M , pictured in Fig. 15.1. This means that the
charts are Cr differentiable in each of the local coordinates si of the point x ∈ M .
In addition, the composition maps x ◦ y−1(s) and y ◦ x−1(s) must be Cr differentiable
in the overlapping regions on M . When r > 0, M is called a differentiable or smooth
manifold. A more careful discussion of these fundamental concepts, with examples,
is found in [45, p. 1–5] or recently in [52, p. 11–22].
    In Chap. 13, a coordinate patch M = x(R) was chosen to be the image of
a closed k-rectangle R = ×ki=1 [ai , bi ] in M . We now need only require that the
closed rectangular patches lie within the open regions on M defined by the charts
covering M . The tangent space Tx1 of tangent vectors at each interior point x of a
regular k-surface M is spanned by the linearly independent tangent vectors (x)(k) ,
                                                              
                       Tx1 := span(x)(k) = span x1 x2 . . . xk                  (15.2)

where xi = ∂∂sxi . The vectors of the tangent space Tx1 , under the geometric product
in Gn , generate the tangent geometric algebra Tx to the surface M at the
point x. Of course, the tangent geometric algebra Tx is a 2k -dimensional geometric
subalgebra of the geometric algebra Gn .


                                                                                Rn
                                                                                           M




                                                                     x(s)
                                                                                   xoy-1(s)    y(s)

                                                               R2
                                                                                                  R2
Fig. 15.1 The images of two
coordinate charts on M must
                                                                                yox-1(s)
be compatible on their
overlapping ranges
15.1 The Definition of a k-Surface M in Rn                                              255


   Let
                       Ix = ∧(x)(k) = x1 ∧ · · · ∧ xk = αx Ix ∈ Tx ,                (15.3)
be the tangent k-dimensional pseudoscalar element to the k-surface at the point
x ∈ M and let
                                                    
                      αx = |Ix | = Ix Ix† = Ix Ix† = det g              (15.4)
be its magnitude. The pseudoscalar element Ix determines whether or not the k-
surface is orientable.
Definition 15.1.1. The k-surface M is orientable if the unit pseudoscalar element
Ix is single valued at all points x ∈ M . Otherwise, the k-surface is non-orientable.
   In the case k = n − 1, the k-surface M is a hypersurface in Rn . Letting i =
∧(e) be the pseudoscalar element of Rn defined by the standard basis (e)(n) =
 (n)          
 e1 e2 . . . en ,

                                  x1 ∧ x2 ∧ · · · ∧ xk
                 nx = Ix i−1 =                        (en ∧ en−1 ∧ · · · ∧ e1 )     (15.5)
                                         αx
is the unit vector normal to the surface M at the point x. If M is an orientable
closed hypersurface, then the standard basis can be chosen in such a way that nx is
the outward normal to the surface at each point x ∈ M .
    As discussed before in (13.6), the metric tensor [g] = [gi j ] of the surface M is
defined by the matrix
                         ⎛ ⎞
                          x1                      ⎛                       ⎞
                         ⎜x ⎟                      x1 · x1 . . . x1 · xk
                         ⎜ 2⎟                  ⎜ ··· ··· ··· ⎟
                         ⎜ ⎟
               [gi j ] = ⎜ · ⎟ · x1 x2 . . . xk = ⎜
                                                  ⎝ ··· ··· ··· ⎠,
                                                                          ⎟      (15.6)
                         ⎜ ⎟
                         ⎝·⎠
                                                    xk · x1 . . . xk · xk
                          xk

where gi j = xi · x j . The reciprocal metric tensor [g]−1 = [gi j ] is defined by [gi j ] =
                                                      T
[gi j ]−1 . The reciprocal basis vectors x1 x2 . . . xk , in the notation used in (7.12),
is given by
                                    (x)(k) = [g]−1 (x)(k) .
Also, x j = g ji xi where the Einstein summation convention over repeated upper and
lower indices is being used.
   A geometric-valued function F : M → Gn assigns a value F = F(x) ∈ Gn for
each point x ∈ M . The function F(x) is said to be continuous in the induced
topology from Rn at the point x if limy→0 F(x + y) = F(x), where y is in an open
256                                                   15 Differential Geometry of k-Surfaces


set Nx ⊂ M containing the point x. By the vector derivative ∂x F(x) of F(x) at the
point x ∈ M , we mean
                                               k
                                                    ∂ F(x)
                                 ∂x F(x) := ∑ xi           ,                         (15.7)
                                             i=1      ∂ si
if the derivative exists. Note that the reciprocal basis vectors xi , as before, satisfy
(or are defined by) the property that xi = ∂x si .
    By the directional a-derivative of F(x) we mean

                                   Fa (x) := a · ∂xF(x),                             (15.8)

provided the derivative exists. This is the same vector derivative and a-derivative that
were defined in Definition 13.2.1 and in (3.45) and (3.46) in Chap. 3. More formally,
we say that F(x) is differentiable at x ∈ M if there is a linear map Fa : Tx → Gn
such that
                                 |F(x + v) − F(x) − Fv(x)|
                         lim                                 = 0.                (15.9)
                      v→0,v∈Tx 1              |v|
This definition will be refined in an exercise after the projection operator onto the
tangent space has been defined. The map Fa (x) is linear in the tangent vector a ∈ Tx1
and uniquely determined by the local properties of F at the point x ∈ M , [92, p.16].
The vector derivative at the point x can be directly expressed in terms of the vector
derivative in the tangent space Tx by

                                                        
                                ∂x F(x) = ∂v v · ∂x F(x) ,                          (15.10)

where v ranges over the tangent space Tx1 at the point x.
   It is worthwhile to review the crucial integrability property (13.8) of the vector
derivative. For a C2 differentiable function F(x), we have

                               (a ∧ b) · (∂x ∧ ∂x )F(x) = 0,                        (15.11)

where a, b are tangent vector fields in Tx1 . Expanding (15.11),

             (a ∧ b) · (∂x ∧ ∂x )F(x) = [b · ∂x , a · ∂x ]F(x) − [b, a] · ∂xF(x),

where [b · ∂x , a · ∂x ] := b · ∂x a · ∂x − a · ∂x b · ∂x and [b, a] := b · ∂x a − a · ∂x b.
The quantity [a, b] is called the Lie bracket of the vector fields a, b ∈ Tx . We also
express this integrability condition of the differentiable function F(x) more directly
by writing
                                  Fa,b (x) − Fb,a(x) = 0,                           (15.12)
where Fa,b (x) := b · ∂x Fa (x) − Fb·∂ a(x).
   An important class of functions defined on a k-surface M are geometric-valued
tensors or g-tensors.
15.1 The Definition of a k-Surface M in Rn                                         257


Definition 15.1.2. A homogeneous geometric-valued r-tensor
                                 Hx : M × Grn −→ Grn
is a linear r-vector-valued function Hx (Ar ) in r-vector argument Ar ∈ Grn at each
point x ∈ M .
Thus, a homogeneous r-tensor assigns a linear r-vector-valued function to each
point in an open neighborhood of the point x ∈ M . We will shortly see that we
can generalize this definition to include additional linear arguments.
   The directional a-derivative and vector derivative can be extended to g-tensors as
given below.
Definition 15.1.3. The directional a-derivative of the g-tensor Hx (g) at the point
x ∈ M is defined by
                          Ha (g) = a · ∂xHx (g) − Hx(a · ∂x g)                 (15.13)

for all g ∈ Gn . The vector derivative of Hx (g) is specified by
                                                      k
                          ∂˙x Ḣx (g) = ∂v Hv (g) = ∑ xi Hxi (g).              (15.14)
                                                   i=1

Of course, if in (15.13) g ∈ Gn is a constant and not a function of x ∈ M , the
definition simplifies to Ha (g) = a · ∂x Hx (g). Indeed, the purpose of the second term
in (15.13) of Definition 15.1.3 is to guarantee that the a-directional derivative of a
g-tensor depends only upon the value of g at the point x ∈ M and so g can always
be treated as a constant. Higher-order a-derivatives of Hx (g) are defined in much the
same way in order to preserve the linearity in its tensor arguments. For example, for
a, b ∈ Tx ,
                   Ha,b (g) = b · ∂x Ha (g) − Hb·∂ a (g) − Ha(b · ∂x g).       (15.15)
   Much of the local differential geometry of a k-surface M in Rn depends upon
how the pseudoscalar element Ix behaves at the point x. Important in this study is
the projection operator, Px : Gn −→ Tx , which projects the geometric algebra Gn
into the tangent geometric algebra Tx at each point x ∈ M . Let
                                   n              n
                            A = ∑ < A > r = ∑ Ar ∈ G n
                                  r=0            r=0

be a general multivector in Gn . The projection operator Px (A) is our first example of
a geometric-valued tensor on M .
Definition 15.1.4. The projection operator Px : Gn −→ Tx is specified by
                                       n                  k
                     Px (A) := Px ( ∑ Ar ) = A0 + ∑ (Ar · Ix )Ix−1 ,
                                   r=0                 r=1

for all multivectors A ∈ Gn .
258                                                      15 Differential Geometry of k-Surfaces


   The projection operator is an outermorphism at each point x ∈ M and so satisfies
the outermorphism rule 7.1.1. Of course, if a ∈ Tx1 , then Px (a) = a. The projection
Px is a symmetric operator, satisfying

                       Px (Ar ) · Br = Px (Ar ) · Px(Br ) = Ar · Px (Br ),             (15.16)

for all r-vectors Ar , Br ∈ Grn . This follows from the steps

               Px (Ar ) · Br =< Ar · IxIx−1 Br >0 =< Ar · Ix Ix−1 · Br >0
                            =< Ar · IxIx−1 Ix−1 Ix · Br >0 = Px (Ar ) · Px(Br ).

   The directional a-derivative of the projection operator Px at the point x ∈ M is
given by
                             Pa (A) = a · ∂xPx (A) − Px(a · ∂xA)                       (15.17)
for all A ∈ Gn . Taking the directional a-derivative of (15.16), gives

         Pa (Ar ) · Br = Pa (Ar ) · Px(Br ) + Px(Ar ) · Pa (Br ) = Ar · Pa (Br )       (15.18)

for all Ar , Br ∈ Grn , showing that the operator Pa is also symmetric on Grn . However,
Pa is not an outermorphism because it obeys, instead, the derivation rule. Taking the
directional a-derivative of the equation

                              Px (Ar ∧ Bs ) = Px (Ar ) ∧ Px(Bs ),

for the r-vector Ar and s-vector Bs , we find that that

                   Pa (Ar ∧ Bs ) = Pa (Ar ) ∧ Px(Bs ) + Px(Ar ) ∧ Pa (Bs ).            (15.19)

    Since Px is a projection, it satisfies the basic property that Px2 (Ar ) = Px (Ar ) for
all r-vectors Ar ∈ Grn . Taking the directional b-derivative of this relationship gives

                           Pb (Px (Ar )) + Px (Pb (Ar )) = Pb (Ar ).                   (15.20)

From this it immediately follows that if Ar ∈ Txr , then Px (Pb (Ar )) = 0, and if
Px (Ar ) = 0, then Px (Pb (Ar )) = Pb (Ar ). This is important in determining the basic
curvature relationships of a k-surface.
    Now define the matrix of second derivatives of the coordinate tangent vectors xi
to M at x by
                                           ⎛ ∂x                 ⎞
                                                1
                                             ∂ s1
                                                  . . . ∂∂ xsk1
                                           ⎜                    ⎟
                                           ⎜ ··· ··· ··· ⎟
                                (xi j ) := ⎜                    ⎟,              (15.21)
                                           ⎝ ··· ··· ··· ⎠
                                             ∂ xk
                                             ∂ s1
                                                  . . . ∂∂ xskk

where xi j = ∂∂ sxji . Since partial derivatives commute,
15.1 The Definition of a k-Surface M in Rn                                                        259


                                          ∂ 2x       ∂ 2x
                                xi j =             =           = x ji ,
                                         ∂ s j ∂ si ∂ si ∂ s j

the matrix of second derivatives (xi j ) is symmetric.
   The matrix (xi j ) can be decomposed into intrinsic and extrinsic vector matrix
parts:
                                     (xi j ) = (Ki j ) + (Li j ).                              (15.22)
The Christoffel vectors Ki j := Px (xi j ) are tangent to the surface, and the normal
vectors Li j are orthogonal to the surface at the point x ∈ M . Since Px (xi ) = xi , it
follows that
                         ∂ Px (xi )
                                    = Pj (xi ) + Px(xi j ) = xi j ,
                            ∂sj
which implies that Li j = Pj (xi ), where Pj := ∂∂ Psxj . The Christoffel components are
defined by Γi kj = Ki j · xk . When M is an oriented (n − 1)-dimensional hypersurface
in Rn , with the outward unit normal vector nx at the point x ∈ M , the normal
components Li j are defined by Li j = Li j nx , or
                                Li j = Li j · nx = xi j · nx = L ji .                          (15.23)

   By applying the subscript notation to a-derivatives, as we did in (15.15), we have
                           La,b = Pa (Px (b)) = Pb (Px (a)) = Lb,a ,                           (15.24)

where a, b ∈ Tx1 . When a = xi and b = x j , La,b = Li j as expected. Noting that
xa = a · ∂xx = a, and

                      xa,b = b · ∂x xa − xb·∂ a = b · ∂x xa − Px(b · ∂ a),

it also makes sense to write Ka,b = Px (xa,b ).
    It is easy to verify that
                                                        
                                 1 k ∂ gik ∂ gi j ∂ gk j
                           Ki j = x        − k +           .                                   (15.25)
                                 2    ∂sj       ∂s ∂ si
We have

            Ki j = xk xk · xi j = xk (∂ j xk · xi − x jk · xi ) = xk (∂ j gik − x jk · xi ).

Noting that Ki j = K ji , we get
                   1                                                            
             Ki j = (Ki j + K ji ) = xk ∂ j gik − x jk · xi + ∂i g jk − xik · x j .
                   2
Substituting −x jk · xi = −∂k gi j + x j · xik into the last equation gives the desired
result (15.25). This shows that Ki j are completely determined by the metric tensor
g at the point x ∈ M .
260                                                        15 Differential Geometry of k-Surfaces


Exercises

Let M ⊂ Rn and Px be the projection onto the tangent algebra Tx at x ∈ M .
                                           ∂g
 1. Show that gi j,k := xk · ∂x gi j = ∂ sikj = xik · x j + xi · x jk = gl j Γikl + gliΓjkl .
 2. Show that gi j g jk = δki implies gi kj = −gil Γlkj − gl jΓlki .
 3. For a ∈ Rn , write a = a + a⊥ where a := Px (a). Show that

                         Pi (a) = Pi (a ) + Pi(a⊥ ) = a · Li j x j + a · x j Li j .

         Let x = x(s1 , s2 ) be a 2-surface in R3 . Then the chain rule gives the 1-
      differential
                                 ∂x        ∂x
                           dx = 1 ds1 + 2 ds2 = x1 ds1 + x2ds2
                                 ∂s        ∂s
    in the direction defined by (ds1 , ds2 ).
 4. Show that ds2 := dx2 = g11 (ds1 )2 + 2g12 ds1 ds2 + g22 (ds2 )2 . The expression
    ds2 is called the first fundamental form of the surface x(s1 , s2 ) in the direction
    defined by (ds1 , ds2 ).
 5. Show that g11 > 0, g22 > 0 and g11 g22 − g212 = (x1 × x2 )2 > 0.
 6. Let x = x(s1 , s2 ) be a 2-surface in R3 . Show that the 2nd differential, in the
    direction (ds1 , ds2 ), is given by

                           d2 x = x11 (ds1 )2 + 2x12ds1 ds2 + x22(ds2 )2 .

 7. Let x = x(s1 , s2 ) be a 2-surface in R3 and n̂ = |xx11 ×x 2
                                                             ×x2 | be the unit orthonormal
    vector to x(s1 , s2 ). It follows that dx · n̂ = 0. Using Problem 6, show that

                        −dx · dn̂ = L11 (ds1 )2 + 2L12ds1 ds2 + L22 (ds2 )2 ,

    which is called the second fundamental form of x(s1 , s2 ).
 8. Show that Taylor’s theorem at the point x(s10 , s20 ) in the direction of (ds1 , ds2 )
    can be expressed as
                                                 k
                                                    1 k
      x(s10 + ds1 , s20 + ds2) = x(s10 , s20 ) + ∑
                                                                                                k
                                                       d x(ds1 , ds2 ) + o[((ds1 )2 + (ds2 )2 ) 2 ],
                                                i=1 k!

    where dk x is the kth differential of x at the point x0 = x(s10 , s20 ) in the direction
                                                                                   k
    of (ds1 , ds2 ), and the “small oh” notation f(x) = o[((ds1 )2 + (ds2 )2 ) 2 ] means
    that
                                            f(x)
                                lim                         = 0.
                               x→x0 ((ds1 )2 + (ds2 )2 ) 2k

 9. Recalling Problem 7 of Sect. 13.2, show that the integrability condition (13.8)
    implies that Pa (b) = Pb (a) for all tangent vector fields a, b ∈ Tx .
15.2 The Shape Operator                                                                    261


10. Let Px be the projection onto the tangent algebra Tx at the point x ∈ M . We say
    that F(x) is differentiable at x if

                                        |F(y) − F(x) − Fv (x)|
                                 lim                           =0
                              y→x,y∈M            |v|

    where v = Px (y − x). Why is this refinement of (15.9) necessary?



15.2 The Shape Operator

Let M be a regular differentiable k-surface in Rn . The most general shape operator
L(g) at a point x ∈ M is the linear operator L : Gn −→ Gn , defined by

                                L(g) = ∂˙x Ṗx (g) = ∂v Pv (g)                         (15.26)

where g is any geometric number in Gn . Of course when g ∈ Gn is a constant,
L(g) = ∂x Px (g). In the case that g = α ∈ R is a scalar, L(α ) = 0, since Px (α ) = α ,
so we need only study L(Ar ) for r-vectors Ar ∈ Grn for r ≥ 1. The shape operator
plays an important role in determining both the intrinsic and the extrinsic properties
of the surface M . In particular, we are interested in studying the shape operator
evaluated at tangent vectors a ∈ Tx1 .
   Let Ar , Bs be an r-vector and a s-vector in Gn . Using (15.19), we find that

       L(Ar ∧ Bs ) = ∂v Pv (Ar ∧ Bs ) = ∂v Pv (Ar ) ∧ Px (Bs ) + ∂v Px (Ar ) ∧ Pv (Bs ).

From (15.20), we know that

                           Pv (Px (Ar )) + Px (Pv (Ar )) = Pv (Ar )

for any v ∈ Tx1 . Taking the vector derivative ∂v of this equation gives

                  L(Ar ) = ∂v Pv (Ar ) = ∂v Pv (Px (Ar )) + ∂v Px (Pv (Ar ))
                          = ∂v Pv (Px (Ar )) + Px (∂v (Pv (Ar ))) .

It follows that if Px (Ar ) = Ar , then Px (L(Ar )) = 0, and if Px (Ar ) = 0, then L(Ar ) =
Px (L(Ar )). This is important in determining the basic curvature relationships below.
    In order to prove the following theorem, we need
Lemma 15.2.1. If Px (Ar ) = Ar for r ≥ 1, then for all a ∈ Tx1

                                Pa (Ar ) = Pa (v) ∧ (∂v · Ar ).

Proof. The proof is by induction on r. For r = 1, and A1 = b ∈ Tx1 , we have

                                    Pa (b) = Pa (v)∂v · b.
262                                                    15 Differential Geometry of k-Surfaces


Assuming now for r > 1 that Pa (Ar ) = Pa (v) ∧ (∂v · Ar ), for r + 1 we have

      Pa (b ∧ Ar ) = Pa (b) ∧ Ar + b ∧ Pa(Ar ) = Pa (b) ∧ Ar + b ∧ [Pa(v) ∧ (∂v · Ar )]
                                                = Pa (b) ∧ Ar − Pa(v) ∧ b ∧ (∂v · Ar )
                                                = Pa (v) ∧ [∂v · (b ∧ Ar )].



   We have the following
Theorem 15.2.2. Let Ar ∈ Grn , where 1 ≤ r ≤ n.
 i) If Ar ∈ Txr , then
                                L(Ar ) = ∂v Pv (Ar ) = ∂v ∧ Pv (Ar ).
ii) If Px (Ar ) = 0, then

                                L(Ar ) = ∂v Pv (Ar ) = ∂v · Pv (Ar ).

Proof.    i) The proof is by induction on r ≥ 1. For r = 1 and a ∈ Tx1 , we have

                   L(a) = ∂v Pv (a) = ∂v · Pv (a) + ∂v ∧ Pv (a) = ∂v ∧ Pv (a),

      since Px (Pv (a)) = 0. Assume now that L(Ar ) = ∂v ∧ Pv (Ar ) for Ar ∈ Txr . This
      implies that ∂v · Pv (Ar )=0. Then for r + 1 and a ∈ Tx1 , we have

                                  L(a ∧ Ar ) = ∂v Pv (a) ∧ Ar + ∂v a ∧ Pv(Ar )
                     = −Pv(a) ∧ (∂v · Pv (Ar )) + ∂v ∧ Pv (a) ∧ Ar + Pa(Ar )
                                        −a ∧ (∂v · Pv(Ar )) + ∂v ∧ a ∧ Pv(Ar )
                  = ∂v ∧ Pv (a) ∧ Ar + ∂v ∧ a ∧ Pv(Ar ) = ∂v ∧ Pv (a ∧ Ar ).

ii) Let Ar ∈ Grn be any r-vector such that Px (Ar ) = 0. We must show that ∂v ∧
    Pv (Ar ) = 0. The proof is by induction on r ≥ 1. For r = 1, let A1 = a and
    suppose that Px (a) = 0. We now calculate

                         (b ∧ c) · (∂v ∧ Pv (a)) = Pc (a) · b − Pb(a) · c
                                                = [Pc (b) − Pb (c)] · a = 0

  for all b, c ∈ Tx1 , since by Problem 9 of Sect. 15.1, Pc (b) = Pb (c).
  Now assume that for r > 1, ∂v ∧ Pv (Ar ) = 0 for all Ar ∈ Grn such that Px (Ar ) = 0.
Now let a ∧ Ar ∈ Gr+1
                    n     such that Px (a ∧ Ar ) = 0. Then

           ∂v ∧ Pv (a ∧ Ar ) = ∂v ∧ Pv (a) ∧ Px(Ar ) + ∂v ∧ Px (a) ∧ Pv(Ar ) = 0.
15.2 The Shape Operator                                                                       263


  For tangent vectors a ∈ Tx1 , the shape operator determines the shape bivector.
With the help of (15.20), we find that

                        L(a) = ∂˙x Ṗx (a) = ∂˙x ∧ Ṗx (a) = ∂v ∧ Pv (a),                  (15.27)

since Pi (a) = Pa (xi ) for 1 ≤ i ≤ k. Equation (15.27) shows that the shape bivector is
a measure of how the surface changes at the point x when moving off in the direction
of the vector a.
    We can get another expression for the shape bivector L(a) by evaluating
(a · ∂xIx ) Ix−1 , for Ix = x1 ∧· · · ∧xk and Ik−1 = xk ∧· · · ∧x1 . Recalling (15.4), Ix = αg Ix
where
                                                   
                                    αg := Ix Ix† = det(g) > 0.
It follows that
                                                             a · ∂x αg
              a · ∂xIx = (a · ∂x αg )Ix + αg (a · ∂xIx ) =           Ix + αg Pa (Ix )
                                                                αg
                       = (a · ∂x log(αg )) Ix + Pa (Ix ),

which implies that
                            (a · ∂x Ix )Ix−1 = a · ∂x log(αg ) − L(a),                     (15.28)
since

          Pa (Ix )Ix−1 = Pa (x1 ∧ · · · ∧ xk )xk ∧ · · · ∧ x1 = −∂x ∧ Pa (x) = −L(a).

Thus, the shape bivector L(a) is completely determined by the directional derivative
of the pseudoscalar element Ix .
   Dotting (15.27) with a second tangent vector b gives

                        b · L(a) = Pb (a) = Pa (b) = a · L(b) = La,b .                     (15.29)

For the tangent coordinate vectors xi , x j , this gives

                        xi · L(x j ) = xi · (∂˙v ∧ Ṗj (v)) = Pj (xi ) = Li j ,

so the shape operator (15.26) is a generalization of the normal vectors Li j defined
in (15.22) and La,b defined in (15.24).
   Let n be the unit normal to the (n − 1)-hypersurface M in Rn . The Weingarten
map n : Tx1 −→ Tx1 is defined by

                                  n(a) := a · ∂xn = −Pa (n),                               (15.30)

and can be extended to an outermorphism on the tangent algebra Tx . Dotting the
shape bivector L(a), given in (15.27), with n and using (15.18), we find that
264                                                      15 Differential Geometry of k-Surfaces


                       n · L(a) = n · (∂v ∧ Pa (v)) = −∂v n · Pa(v)
                                 = −∂v v · Pa(n) = −Pa (n) = n(a),

so in the case of a hypersurface, the shape bivector also completely determines the
Weingarten map. In terms of the tangent vectors xi , we get the normal components
defined in (15.23),

           Li j = n · Li j = (n ∧ xi ) · L(x j ) = −xi · [n · L(x j )] = −xi · n(x j ).

   We will use the second fundamental form, defined in Problem 7, and Taylor’s
theorem in Problem 8 of the last section to study the local properties of a surface
in R3 . Let x = x(s1 , s2 ) be a point on a surface of class C2 or greater, and let y =
x(s1 + ds1 , s2 + ds2 ) be a nearby point. Then
                                        r = (y − x) · n̂,

the projection of the vector from the point x to the point y onto the unit normal
vector n̂, will indicate which side of the tangent plane to the surface at x that the
point y is on.
   Taylor’s theorem gives
                                    1
                        y − x = dx + d2 x + o((ds1)2 + (ds2 )2 ).
                                    2
Since dx is in the tangent plane, dx · n̂ = 0, so d2 x · n̂ = −dx · dn̂. It follows that
             1
         r = d2 x · n̂ + o((ds1 )2 + (ds2 )2 )
             2
             1                                         
           =    L11 (ds1 )2 + 2L12 ds1 ds2 + L22(ds2 )2 + o((ds1 )2 + (ds2 )2 )
             2
                                                                           
   The function f (ds1 , ds2 ) = 12 L11 (ds1 )2 + 2L12ds1 ds2 + L22 (ds2 )2 is called the
osculating paraboloid at x. The nature of this paraboloid is determined by the
discriminant L11 L22 − L212 and approximates the surface x(R) at the point x(s1 , s2 ).
We have the following four cases:
1. If L11 L22 − L12 > 0, we say that the surface is elliptic at the point x(s1 , s2 ).
2. If L11 L22 − L12 = 0, we say that the surface is parabolic at the point x(s1 , s2 ).
3. If L11 L22 − L12 < 0, we say that the surface is hyperbolic at the point x(s1 , s2 ).
4. If L11 = L22 = L12 = 0, we say that the surface is planar at the point x(s1 , s2 ).
   Consider the following example: Let
                                                                        
                   x(s1 , s2 ) = s1 , s2 , (s1 )2 s2 + s1 s2 − (s2 )2 + 2
15.2 The Shape Operator                                                                            265

Fig. 15.2 The surface                                                                1
x(s1 , s2 ) = (s1 , s2 , (s1 )2 s2 +                                       0.5
s1 s2 − (s2 )2 + 2), its tangent                                       0
plane, and osculating                                          −0.5
paraboloid at the point
                                                         −1
(0, 0, 2)                                                3




                                                           2



                                                               1
                                                               −
                                                               −1
                                                                    −0.5
                                                                                 0
                                                                                         0.5
                                                                                               1



for −1 < s1 < 1 and −1 < s2 < 1. We calculate

           x1 = (1, 0, s2 + 2s1s2 ), x2 = (0, 1, s1 + (s1 )2 − 2s2), x11 = (0, 0, 2s2 ),
          x12 = (0, 0, 2), and x22 = (0, 0, −2)

The tangent plane to this surface at the point x(0, 0) = (0, 0, 2) is

                                  z = (0, 0, 2) + s1x1 + s2 x2 = (s1 , s2 , 2)

The osculating paraboloid at (0, 0, 2) is given by
                                       1                                              
          y = (0, 0, 2) + dx(s1, s2 ) + d2 x = s1 , s2 , (s1 )2 s2 − (s2 )2 + s1 s2 + 2
                                       2

The graphs of the surface x(s1 , s2 ), its tangent plane y(s1 , s2 ), and its osculating
paraboloid z(s1 , s2 ) are given in Fig. 15.2. We further calculate L11 = 0, L12 = 1,
L22 = −2, and the discriminant

                                          L11 L22 − L212 = −4 < 0

at the point (0, 0, 2). It follows that the surface x(s1 , s2 ) is hyperbolic at the point
x(0, 0) = (0, 0, 2).
266                                                   15 Differential Geometry of k-Surfaces


Exercises

1. Given the surface x(s1 , s2 ) = (s1 , s2 , (s1 )2 s2 + s1 s2 − (s2 )2 + 2) of the last
   example.
   (a) Calculate the tangent vectors x1 , x2 and the mixed derivatives x11 , x12 , and
       x22 at the point x( 12 , 0).
   (b) Calculate the tangent plane at the point x( 12 , 0).
   (c) Calculate the osculating paraboloid at the point x( 12 , 0).
   (d) Classify the surface at the point x( 12 , 0).
2. For the 2-rectangle R = [−1, 1] × [−1, 1], define the surface x(R) by

                           x(s1 , s2 ) = (s1 , s2 , −(s1 )2 + s2 + 2),

   see Fig. 13.2 of Sect. 13.1.
   (a) Calculate the tangent vectors x1 , x2 and the mixed derivatives x11 , x12 , and
       x22 at the point x(0, 0).
   (b) Calculate the tangent plane at the point x(0, 0).
   (c) Calculate the osculating paraboloid at the point x(0, 0).
   (d) Classify the surface at the point x(0, 0).
3. For the 2-rectangle R = [−1, 1] × [−1, 1], define the surface x(R) by

                                  x(x, y) = (x, y, x2 + y2),

   see Fig. 13.3 of Sect. 13.1.
   (a) Calculate the tangent vectors x1 , x2 and the mixed derivatives x11 , x12 , and
       x22 at the point x(0, 0).
   (b) Calculate the tangent plane at the point x(0, 0).
   (c) Calculate the osculating paraboloid at the point x(0, 0).
   (d) Classify the surface at the point x(0, 0).
4. For the 2-rectangle R = [−1, 1] × [−1, 1], define the surface x(R) by

                                x(x, y) = (x, y, x2 − y2 + 1),

   see Fig. 13.4 of Sect. 13.1.
   (a) Calculate the tangent vectors x1 , x2 and the mixed derivatives x11 , x12 , and
       x22 at the point x(0, 0).
   (b) Calculate the tangent plane at the point x(0, 0).
   (c) Calculate the osculating paraboloid at the point x(0, 0).
   (d) Classify the surface at the point x(0, 0).
15.3 Geodesic Curvature and Normal Curvature                                           267


15.3 Geodesic Curvature and Normal Curvature

Let M ⊂ Rn be a regular differentiable k-surface with the projection Px onto the
tangent space Tx at the point x ∈ M , and let x = x(s) be a unit speed curve on M
with the tangent unit vector T = dx
                                  ds = Px (T). Then
                                        
                d2 x dT                 dT
                     =      = Ṫ =  Px        + PT (T) = κg S + κnK         (15.31)
                 ds2    ds              ds
               Px ( dT
                    ds )
where S =                  and K = |PPT (T)  . The intrinsic absolute geodesic curvature is
              |Px ( dT ) |            T (T)|
           dT     ds
κg = |Px ds | and the extrinsic absolute normal curvature is κn = |PT (T)|. Both
the intrinsic absolute geodesic curvature κg and the absolute normal curvature κn
are positive quantities.
   However, if M is an orientable (n − 1)-hypersurface surface in Rn , with the unit
normal vector n, the normal curvature κn := n · PT (T) can take on negative values
with respect to the normal vector n. In the particular case of an orientable 2-surface
M in R3 , we define the geodesic curvature with respect to the normal vector n to be

                                    κg = (n × T) · Ṫ,                            (15.32)

which can also be negative. In these cases, the signs of the vectors S and K in
(15.31) must be adjusted accordingly.
   In terms of the coordinate vectors, we find that
                                                  k
                                              dx     dsi
                             Px (T) = T =        =∑      xi ,
                                              ds i=1 ds

and differentiating a second time with respect to s gives
                     
                      dT               dT d2 si         dsi ds j
                 Px        + PT (T) =      = 2 xi +              xi j
                       ds              ds     ds        ds ds
                                           d2 si      dsi ds j
                                       =      2
                                                 xi +          (Ki j + Li j ) ,   (15.33)
                                           ds         ds ds
where we are utilizing the summation convention on repeated upper and lower
indices. It follows that
                                       d2 si       dsi ds j
                              κg S =         x i +          Ki j                  (15.34)
                                       ds2         ds ds
and
                                        dsi ds j
                                   κn K =        Li j .                    (15.35)
                                        ds ds
Definition 15.3.1. The curve x(s) is a geodesic if κg = 0 along x(s). Equivalently,
x(s) is a geodesic if
268                                                 15 Differential Geometry of k-Surfaces

                                   2 
                                   d x
                               Px       = Px (Ṫ) = 0.                            (15.36)
                                   ds2
A geodesic x(s) on a surface plays the role of a straight line in flat Euclidean space.
For example, on the surface of a sphere, the great circles are geodesics and give the
shortest distance between any two points on the surface.
   For a non-unit speed regular curve, we have dxdt = ds dt , and
                                                       dx ds


                              d2 x dT ds 2     d2 s
                                   =        + T      ,                            (15.37)
                              dt 2   ds dt      dt 2
                                                2         2
which implies that ( dx
                     dt ) = ( dt ) and dt · dt 2 = dt dt 2 . Taking the projection of
                         2       ds 2       dx d x     ds d s

(15.37) gives
                            d2 x          dT  ds 2        d2 s
                       Px           =  P x             +  T       .
                            dt 2           ds    dt          dt 2
We see from this equation and (15.36), that a non-unit speed regular curve x(t) is a
geodesic iff
                                                               
                       d2 x        d2 s               dv
                  Px          =   T        ⇐⇒    P x       ∧  v    = 0.       (15.38)
                       dt 2         dt 2               dt
    A geometric-valued function F(x) on M is said to be a multivector field on M
if Px (F(x)) = F(x) ∈ Tx for all x ∈ M . Thus, the values of a multivector field F
on M at the point x are restricted to the tangent algebra Tx . We have already seen
in (15.17), and elsewhere, that neither the vector derivative ∂x nor the directional
derivative a · ∂x preserve a tangent field on M . We now define a coderivative and
directional coderivative that preserves the tangency of a field on M .
Definition 15.3.2. By the vector coderivative ∇x F(x) of a multivector field F(x),
induced by the vector derivative ∂x of the k-surface M , we mean

                     ∇x F(x) = Px (∂x Px (F(x))) = Px (∂x F(x)) ,                 (15.39)

and the corresponding directional a-coderivative is defined by

        F/a (x) = a · ∇xF(x) = Px (a · ∂x Px (F(x))) = Px (a · ∂x F(x)) .         (15.40)

In terms of the vector coderivative, the condition (15.36) for a unit speed curve x(s)
to be a geodesic becomes T · ∇x T = 0 or T/T = 0.
   Every vector field v = v(x) on M satisfies the identity

                                                    1
                            v · ∇x v = v · (∇ ∧ v) + ∇v2 .                        (15.41)
                                                    2
A tangent vector field a = a(x) is said to be parallel along a curve x = x(t) if
                                           
                                           da
                            v · ∇x a = Px       = λ (t)a,
                                            dt
15.3 Geodesic Curvature and Normal Curvature                                         269



where v = dx  dt . In the case of a unit speed curve x(s), this equation simplifies to
T · ∇x a = 0 where T = dx  ds .
    If a ∧ (v · ∇x a) = 0 for the directional coderivative in every direction v ∈ Txk ,
including v = a, then it follows from (15.41) that ∇x ∧ a = 0 = ∇x |a|2 , so that

                                   v · ∇xa = (v · b)a

for some constant vector b. In this case, we say that the tangent vector field a(x) is
everywhere parallel to a geodesic spray, [52, p.545], [43, p.206].
      http://en.wikipedia.org/wiki/Geodesic#Geodesic_flow



Exercises

1. Let x(s) be a unit speed curve on M . Prove that κ 2 = κn2 + κg2 , where κ is the
   curvature, κg is the intrinsic geodesic curvature, and κn is the extrinsic normal
   curvature of the unit speed curve.
2. For the surface x(x, y) = (x, y, x2 + y2 ) in R3 , find the normal curvature κn of the
   curve x(t 2 ,t) at t = 1.    
3. The surface x(x, y) = (x, y, 1 − x2 − y2 ) for x2 + y2 ≤ 1 is the upper hemisphere
   above the xy-plane. For the unit speed curve y(s) = (cos s, 0, − sin s) on x(x, y),
   show that κ = 1, κn = −1, and κg = 0. Since κg = 0, y(s) is a great circle on
   x(x, y).
4. Let x(s1 , s2 ) be a surface with the property that g11 = 1 and g12 = 0. Let a be
   a constant, and let y(s) = x(s, a) be a curve on x(s1 , s2 ). Show that y(s) is a
   geodesic on x(s1 , s2 ).
5. Let x(x, y) be a surface, x(s) = x(x(s), y(s)) be a unit speed curve on x(s), and let
   x1 = ∂∂ xx and x2 = ∂∂ xy .
                              dy
                 ds = ds x1 + ds x2 .
   (a) Show that dx   dx

   (b) Show that
                2 
                d x    dx 2         dx dy       dy 2         d2 x   d2 y
          Px      2
                     =       K11 + 2       K12 +       K22 + x1 2 + x2 2 .
                ds     ds            ds ds       ds            ds     ds

   (c) Prove that x(s) is a geodesic if and only if x(s) and y(s) satisfy

                      d2 x        dx 2         dx dy        dy 2
                         2
                           + Γ111       + 2Γ121       + Γ221       =0
                      ds          ds            ds ds        ds
       and
                      d2 y          2                       2
                               2 dx         2 dx dy     2 dy
                           + Γ11       + 2Γ12       + Γ22       = 0.
                      ds2        ds           ds ds       ds
270                                                       15 Differential Geometry of k-Surfaces


15.4 Gaussian, Mean, and Principal Curvatures of M

Let M be an (n − 1)-hypersurface surface in Rn , with the unit normal vector n.
The Gaussian curvature KG = det(n) and the mean curvature κm are defined by

                   n(x1 ) ∧ n(x2 ) ∧ · · · ∧ n(xn−1 ) = det(n)Ix = KG Ix ,

where Ix is the unit tangent (n − 1)-vector, or pseudoscalar to the k-surface at x ∈
M , and
                                       1
                                    κm =   ∂v · n(v),                                   (15.42)
                                     n−1
respectively. The Gaussian curvature can also be expressed in the form
                               1
                       KG =      (∂v ∧ · · · ∧ ∂v1 ) · n(v1 ∧ · · · ∧ vk ).             (15.43)
                               k! k
   For a 2-surface x(s1 , s2 ) in R3 , the Gaussian curvature KG is

                       n(x1 ∧ x2 ) = n(x1 ) ∧ n(x2 ) = KG x1 ∧ x2 .

Since g = det(gi j ) = (x1 ∧ x2 ) · (x2 ∧ x1 ) = |x1 × x2 |2 , a unit trivector is defined by
                                                      √
                                   i = [(x1 ∧ x2 )n]/ g.

Multiplying the above equation by −i gives the result
                                                               √
               n(x1 ) × n(x2 ) = −iKG x1 ∧ x2 = KG x1 × x2 = KG g n.

   The second fundamental form for a 2-surface x(s1 , s2 ) in R3 can be expressed by

                         La,b = La,b · n = Pa (b) · n = b · Pa (n).                     (15.44)

The principal curvatures κ1 , κ2 for the 2-surface x(s1 , s2 ) are defined to be the
eigenvalues of the symmetric linear operator Pv (n) for v ∈ Tx1 . The corresponding
eigenvectors are said to be the principal directions at the point x(s1 , s2 ).



Exercises

1. Given the surface

                       x(s1 , s2 ) = (s1 , s2 , (s1 )2 s2 + s1 s2 − (s2 )2 + 2),

   calculate the Gaussian, mean, and principal curvatures at the point x(s1 , s2 ). See
   Fig. 15.2.
15.5 The Curvature Bivector of a k-Surface M                                                 271


2. For the 2-rectangle R = [−1, 1] × [−1, 1], define the surface x(R) by

                            x(s1 , s2 ) = (s1 , s2 , −(s1 )2 + s2 + 2),

   see Fig. 13.2 of Sect. 13.1. Calculate the Gaussian, mean, and principal curva-
   tures at the point x(s1 , s2 ).
3. For the 2-rectangle R = [−1, 1] × [−1, 1], define the surface x(R) by

                                    x(x, y) = (x, y, x2 + y2),

   see Fig. 13.3 of Sect. 13.1. Calculate the Gaussian, mean, and principal curva-
   tures at the point x(x, y).
4. For the 2-rectangle R = [−1, 1] × [−1, 1], define the surface x(R) by

                                 x(x, y) = (x, y, x2 − y2 + 1),

   see Fig. 13.4 of Sect. 13.1. Calculate the Gaussian, mean, and principal curva-
   tures at the point x(x, y).



15.5 The Curvature Bivector of a k-Surface M

We now calculate ∇x ∧ ∇x Cr where Cr is any tangent r-vector field on M and
discover that it is directly connected to the Riemann curvature bivector R(a ∧ b) of
M at the point x. We first note, by a simple calculation, that for tangent vectors a, b,

                    (a ∧ b) · (∇x ∧ ∇x ) = [b · ∇x , a · ∇x ] − [b, a] · ∇x,

where [b · ∇x , a · ∇x ] = b · ∇x a · ∇x − a · ∇xb · ∇x and [b, a] = b · ∇x a − a · ∇xb. Here,
the vector coderivatives ∇x differentiate only to the right.
   We now calculate,

  b · ∇x a · ∇x Cr = Px (b · ∂x Px (a · ∂xCr )) = Px (Pb (a · ∂x Cr )) + Px(b · ∂x a · ∂xCr )
                          = Pb (Pa (Cr )) + Px (b · ∂x a · ∂x Cr ) .

It follows that

     (a ∧ b) · (∇x ∧ ∇x )Cr = [b · ∇x , a · ∇x ]Cr − [b, a] · ∇xCr = Pb (Pa (Cr ))
                                 −Pa (Pb (Cr )) + Px (b · ∂x a · ∂xCr )
                                 −Px (a · ∂xb · ∂x Cr ) − Px ([b, a] · ∂x Cr )
                             = [Pb , Pa ](Cr ) + (a ∧ b) · (∂x ∧ ∂x )Cr = [Pb , Pa ](Cr ),
                                                                                       (15.45)

where [Pb , Pa ] = Pb Pa − Pa Pb . Applying (15.45) to the (r + s)-tangent vector field
Ar ∧ Bs ∈ Txs , with the help of (15.19) and (15.20), we find that
272                                                  15 Differential Geometry of k-Surfaces


                    (a ∧ b) · (∇x ∧ ∇x )Ar ∧ Bs = [Pb , Pa ](Ar ∧ Bs )
                                                                  
                     = [Pb , Pa ](Ar ) ∧ Bs + Ar ∧ [Pb , Pa ](Bs ) .               (15.46)

   We can now define a new quantity, called the Riemann curvature bivector.
Definition 15.5.1. The Riemann curvature bivector of the k-surface M is given by

                                R(a ∧ b) = ∂v ∧ Pa Pb (v)
for all tangent vectors a, b ∈ Tx1 .
The Riemann curvature bivector is intimately connected to the shape bivec-
tor (15.27), as is evident from
                                        
              Pa (L(b)) = Pa ∂v ∧ Pv (b) = ∂v ∧ Pa (Pv (b)) = R(a ∧ b),

with the help of (15.18) and the derivation rule (15.19).
   The simple calculation for the tangent vector field c ∈ Tx1 ,

           R(a ∧ b) · c = [∂v ∧ Pa Pb (v)] · c = ∂v Pa (Pb (v)) · c − Pa(Pb (c))
           = Pb (Pa (c)) − Pa (Pb (c)) = [Pb , Pa ](c) = (a ∧ b) · (∇x ∧ ∇x )c,    (15.47)

together with (15.46), shows that for the (r + s)-vector field Ar ∧ Bs ∈ Txr+s ,

                 (a ∧ b) · (∇x ∧ ∇x )Ar ∧ Bs = R(a ∧ b)  (Ar ∧ Bs )
                                                                
                 = R(a ∧ b)  Ar ∧ Bs + Ar ∧ R(a ∧ b)  Bs ,                       (15.48)

where A  B = 12 (AB − BA) denotes the antisymmetric part of the geometric product
AB. Dotting both sides of (15.47) on the right by d, and using the symmetry
property (15.18), gives the further useful relationships

                   R(a ∧ b) · (c ∧ d) = Pa (c) · Pb (d) − Pa(d) · Pb (c).          (15.49)

and
                          1                                       
               R(a ∧ b) = ∂v ∧ ∂u Pu (a) · Pv (b) − Pv(a) · Pu (b) .               (15.50)
                          2
   We have the following.
Theorem 15.5.2. The Riemann curvature bivector satisfies the following identi-
ties:
  i) ∂u ∧ R(a ∧ u) = ∂u ∧ ∂v ∧ Pa Pu (v) = 0. (1st Bianchi identity).
 ii) ∇
     ˙ x ∧ Ṙ(a ∧ b) = 0. (2nd Bianchi identity).
iii) R(a ∧ b) · (c ∧ d) = (a ∧ b) · R(c ∧ d). (Symmetric bivector operator)
Proof. i) The proof of this part follows from the symmetry property (15.18),
   which gives Pu (v) = Pv (u) for all tangent vectors u, v ∈ Tx1 .
15.5 The Curvature Bivector of a k-Surface M                                                           273


ii) Taking the w-coderivative of both sides of (15.50) gives
                                  1
                    R/w (a ∧ b) = ∂v ∧ ∂u Pu,w (a) · Pv(b) + Pu (a) · Pv,w(b)
                                  2
                                                                     
                                −Pv,w (a) · Pu (b) − Pv(a) · Pu,w (b) .

      If we now take the curl of R/w with respect to ∂w , the identity follows by
      noting that
                           ∂w ∧ R/w (a ∧ b) = ∇
                                              ˙ ∧ Ṙ(a ∧ b)

     on the left side of the equation and where we are using the integrability
     condition that Pu,w = Pw,u and Pv,w = Pw,v on the right side of the equation.
iii) The fact that R(a ∧ b) is a symmetric bivector operator follows from (15.49) and
     is left as an exercise.


     The classical Riemann curvature tensor is defined by

                                    Ri jkl = R(xi ∧ y j ) · (xk ∧ xl ).                          (15.51)

Taking the partial k-derivative of the relation Px (Li j ) = 0 gives

                                        Pk (Li j ) + Px(Li j,k ) = 0

or
                               Px (Li j,k ) = −Pk (Li j ) = −Pk Pi (x j ).
From this relationship, we get

               Px (Lk j,i ) − Px(Lki, j ) = Pj Pi (xk ) − PiPj (xk ) = R(xi ∧ x j ) · xk .

   In the case of a (n − 1)-hypersurface in Rn , with the normal vector nx at the point
x, by taking the k-derivative of the second fundamental form (15.23), we get
                                        ∂ Li j
                             Li j,k =          = Pjk (xi ) · n + Pj (xik ) · n.
                                        ∂ sk
Using this relationship, after cancelations, we arrive at the classical Codazzi-
Mainardi equations,

       Li j,k − Lik, j = xik · Pj (n) − xi j · Pk (n) = Pj (xik ) · n − Pk (xi j ) · n
                      = (Kik · xl )(xl · Pj (n)) − (Ki j · xl )(xl · Pk (n)) = Γikl Ll j − Γi lj Llk

where we are employing the Einstein summation convention, [45, p.76], [56, p.142].
274                                                             15 Differential Geometry of k-Surfaces


Exercises

1. Using the symmetry property (15.18) of the operator Pc for c ∈ Txk , show that
                                            
                                [Pb , Pa ](c) · c = 0.

2. Prove that the classical Riemann curvature tensor (15.51) satisfies:
      (a) R(xi ∧ x j ) · (xk ∧ xl ) = (∂v ∧ Pi Pj (v)) · (xk ∧ xl ) = xk · Pi Pj (xl ) − xl · Pi Pj (xk ).
      (b) For an orientable (n − 1)-hypersurface in Rn , show that

                           R(xi ∧ x j ) · (xk ∧ xl ) = Pi (xk ) · Pj (xl ) − Pi(xl ) · Pj (xk )
                                                     = Lik · L jl − Lil · L jk .

3. (a) Show that the Riemann curvature bivector can be expressed directly in terms
       of the shape operator by

                                   R(a ∧ b) = Pa (∂v ∧ Pv (b)) = Pa (L(b))

   (b) ∂v · R(v ∧ b) = L2 (b).
4. (a) Prove part iii) of Theorem 15.5.2.
   (b) Show that the second Bianchi identity can be expressed in the form

                                   R/c (a ∧ b) + R/a(b ∧ c) + R/b (c ∧ a) = 0,

       where the directional coderivative wasdefined in (15.40).
5. (a) Show that R(a ∧ b) = Px L(a)  L(b) .
   (b) More generally, show that

                                 L(a)  L(b) = R(a ∧ b) − Pa(∂w ) ∧ Pb (w).

       In [43, p.195], the quantity L(a)  L(b) is referred to as the total curvature.
       The total curvature consists of the intrinsic curvature part R(a ∧ b) and the
       extrinsic curvature part −Pa (∂w ) ∧ Pb (w).
6. Prove the generalized Bianchi identity
                                                                 
                L(a)  L(b) + L(b)  L(c) + L(c)  L(a) = 0,
                                       c                       a                      b

   where
                                                                   
      L(a)L(b) := c· ∂x L(a)L(b) − L(c· ∂x a)L(b) − L(a)L(c· ∂x b) .
                       c
Chapter 16
Mappings Between Surfaces




                                We could use up two Eternities in learning all that is to be
                                learned about our own world and the thousands of nations that
                                have arisen and flourshed and vanished from it. Mathematics
                                alone would occupy me eight million years.
                                                                                  —Mark Twain



In this chapter we explore when a mapping will preserve geodesics, the shortest
distances between two points on a surface, and when a mapping will preserve the
angles between the intersection of two curves on the surface, known as conformal
mappings. A conformal mapping of a pseudo-Euclidean space R p,q generalizes the
idea of an analytic function in the two-dimensional theory of complex variables.1



16.1 Mappings Between Surfaces

Let a regular k-surface M be given in Rn by x = x(s1 , . . . , sk ) and a second
regular k-surface M  in Rn by x = x (v1 , . . . , vk ). Let x = f (x) be a local bijective
differentiable (in a coordinate patch) invertible function, f : M → M  . The mapping
 f induces a second mapping x = f (x) = f (x(s1 , . . . , sk )) on the surface M  , which
we naturally assume to be compatible with x = x (v1 , . . . , vk ). This means that each
coordinate vi = vi (s1 , . . . , sk ) is a differentiable function of the coordinates of M .
The mapping f is called a diffeomorphism between the surfaces M and M  (at
least in some neighborhood of a point x ∈ M ). Although we have specified that our
surfaces are embedded in Rn , all our results in this chapter remain generally valid
for surfaces embedded in R p,q .


1 This chapter is based upon an article by the author that appeared in the American Mathematical

Mathematical Society Notices [89].

G. Sobczyk, New Foundations in Mathematics: The Geometric                                   275
Concept of Number, DOI 10.1007/978-0-8176-8385-6 16,
© Springer Science+Business Media New York 2013
276                                                                 16 Mappings Between Surfaces


   The mapping f between the surfaces M and M  induces a linear outermorphism
f = f x between the tangent spaces Tx and Tx , defined for each a ∈ Tx1 by

                                    f (a) = a · ∂x f (x) ∈ Tx1 .                         (16.1)

The a-derivative f (a) is called the differential of f at the point x ∈ M and maps
each tangent vector a ∈ Tx1 into a corresponding tangent vector a = f (a) ∈ Tx1 .
Indeed, f maps the whole tangent geometric algebra Tx at x into the tangent
geometric algebra Tx at x .
   The mapping x = f (x) induces a relationship between the basis vectors (x)(k) of
Tx and the corresponding basis vectors (x )(k) of Tx1 , defined by
  1


                                    ∂ f (x)
                            xi =           = xi · ∂x f (x) = f (xi ).                    (16.2)
                                     ∂ si

The tangent vectors (x)(k) of Tx1 are said to be pushed forward by the differential
f into the tangent vectors (x )(k) = f (x)(k) of the tangent space Tx1 at the point
x ∈ M  . The additional relationship

              [1]k = (x )(k) · (x )(k) = (x )(k) · f (x)(k) = f (x )(k) · (x)(k) ,    (16.3)

where [1]k is the identity k ×k-matrix, shows that the reciprocal basis (x )(k) is pulled
back by the adjoint mapping f = f x into the reciprocal basis vectors (x)(k) of the
tangent space Tx of M at the point x. Thus, we have

                                        f (x )(k) = (x)(k) ,

and consequently,
                                           f (∂x  ) = ∂x .                              (16.4)

   Taking the differential of both sides of the mapping (16.1) with respect to b ∈ Tx1
gives
                 b · ∂x f (a) = f b (a) + f (b · ∂x a) = b · ∂x a · ∂x f (x).   (16.5)
Using this relationship, the integrability condition (13.8), and the change of
variables formula a · ∂x = f (a) · ∂x , implies that

                    [b , a ] = b · ∂x f (a) − a · ∂x f (b) = f ([a, b]),            (16.6)

and shows that the Lie bracket [a, b] of the tangent vector fields a, b on the surface
M is pushed forward by the differential f into the corresponding Lie bracket [a , b ]
of the corresponding tangent vector fields a , b on the surface M  . The integrability
condition also implies that
                                         f a (b) = f b (a),                               (16.7)
16.1 Mappings Between Surfaces                                                       277


as can be easily verified by using (16.5) and (16.6). Since f a is a derivation
satisfying the derivation rule (15.19), a more general version of (16.7) is
                                                             
                              f a (Br ) = f v (a) ∧ ∂v · Br ,                  (16.8)

where Br = f (Br ) is an r-vector in Tx for r ≥ 1 and the tangent vector derivative
∂v operates to the left.
   Let a, b, c be tangent vector fields in Tx . Defining the b-differential of f a (c) by

                    f a,b (c) = b · ∂x f a (c) − f b·∂ a (c) − f a (b · ∂x c)     (16.9)

guarantees that f a,b (c) retains its tensor-like quality (linearity) in the arguements
a, b, and c. With this definition, another consequence of the integrability conditions
(13.8) and (16.7) is
                                     f a,b (c) = f b,a (c).                      (16.10)

   Just like we defined an intrinsic coderivative (15.40) of a vector field, we now
define the intrinsic coderivatives of the differential f of the mapping f between the
surfaces M and M  .
Definition 16.1.1. Let f : M → M  be a differentiable mapping between the k-
surfaces M and M  . The a-coderivative of the differential f of f at the point x ∈ M
is given by
                                         f /a = P f a P                         (16.11)

The intrinsic second coderivative is given by

                            f /a,/b = P (b · ∂ f /a )P − P f b·∇a P.           (16.12)

   Note that the second term on the right side of (16.12) is necessary to guarantee
that the second coderivative depends only upon the value of a at the point x ∈ M .
   Calculating f /a,/b , we find that
                                                                      
               f /a,/b = P b · ∂x P f a P P − P f b·∇a P = P P f a P P
                                                                          b
                                                     
                                             
                       = P Pb f a + f a,b + P f b·∇a P.

Using (16.10) and the fact that f = P f P, so that

                              f a = Pa f P + P f a P + P f Pa ,
278                                                                     16 Mappings Between Surfaces


we can now calculate
                                                          
 f /a,/b − f /b,/a = P Pb f a − Pa f b + f a Pb − f b Pa P
                                                          
                   = Pb Pa − Pa Pb f − f Pb Pa − PaPb = [Pb , Pa ] f − f [Pb , Pa ]. (16.13)

Applying both sides of this operator equation to the tangent vector c then gives
                                                                           
       f /a (c) := f /a ,/a − f /a ,/a (c) = R (a(2) ) · c − f R(a(2) ) · c ,             (16.14)
          (2)             1   2         2   1


which is the basic relationship between the curvature tensors of M and M  .
   A differentiable bijective mapping f : M −→ M  is said to be an isometry
between the surfaces M and M  , if for all a, b ∈ Tx1

                                            a · b = f (a) · f (b).                           (16.15)

Let x = x(t) be a regular curve in M . Then x (t) = f (x(t)) is the corresponding
regular curve in M  . Calculating the lengths of the corresponding curves in M and
M  , for t0 < t < t1 , we find that
                         t1          t1                
                                                                        t1   
                               dx              dx                         f dx  dt
        L = |dx | =                 dt =            · ∂x f (x) dt =       
                           t0    dt         t0     dt                    t0       dt 
              t1      12                    t1     12             
          =         f dx · f dx  dt =                    dx · dx  dt = |dx|,
              t0
                       dt          dt              t0
                                                           dt         dt 

which shows that the lengths of the corresponding curves x(t) and x (t) = f (x(t))
under the isometry f are preserved.
   Let M be defined by the coordinates x = x(s1 , . . . , sk ) and M  by the coordinates
x = x (s1 , . . . , sk ) = f (x(s1 , . . . , sk )), where f is an isometry between them. Then we
 

easily calculate

                                       ∂ x ∂ x
                 gi j = xi · xj =       ·      = f (xi ) · f (x j ) = xi · x j = gi j ,
                                       ∂ si ∂ s j
showing that the corresponding metric tensors are preserved under an isometry.
   A mapping f : Rn −→ Rn is called a rigid motion if f (x) is the composition of a
rotation and a translation,
                                                   
                                      1            1
                         f (x) = exp    B x exp − B + c
                                      2            2

where B is a constant bivector and c is a constant vector. Two surfaces M , M  are
rigidly equivalent if f (M ) = M  for some rigid motion of Rn .
16.2 Projectively Related Surfaces                                                             279


   A ruled surface can be parameterized by

                                     x(s,t) = a(s) + tb(s),

where a(s) is a unit speed curve and |b(s)| = 1, [56, p.139].



Exercises

Let f : M → M  be a regular mapping between the k-surfaces M and M  at the
point x ∈ M , and let x = f (x) ∈ M  . Let a, b ∈ Tx1 , and let a = f (a) and b = f (b).
1. Let h(x ) be a differentiable geometric-valued function on M  . Show that

                                 a · ∂x h(x ) = a · ∂xh(x (x))

   is a statement of the chain rule.
2. (a) Show that the integrability conditions (13.8) on M and M  are related by

            (a ∧ b ) · (∂x ∧ ∂x ) = (a ∧ b) · f (∂x ∧ ∂x ) = (a ∧ b) · (∂x ∧ ∂x ) = 0.

   (b) Show that f a (b) = f b (a) for all a, b ∈ Tx1 . When f (x) = x is the identity
        mapping of M onto itself, this reduces to the integrability condition that
        Pa (b) = Pb (a) for the projection Px .
3. Prove the more general integrability condition (16.8) follows from the integrabil-
   ity condition (16.7).
4. Show that a cylinder is a ruled surface.
5. (a) Show that the surface z = x2 − y2 is it doubly ruled in the sense that through
        each point on the surface, two straight lines can be drawn that are on the
        surface.
   (b) Show that the surface

                                          x2 y2 z2
                                             + − =1
                                          a 2 b 2 c2
      is doubly ruled.
6. Show that a right circular cone is a ruled surface.



16.2 Projectively Related Surfaces

Let M and M  be k-surfaces in Rn related by the diffeomorphism x = f (x),
with the induced tangent outermorphism f : Tx → Tx as given in (16.1) of the
280                                                               16 Mappings Between Surfaces


previous section. Much information about how the geometries of the surfaces are
related is contained in the generalized shape operator L (A), defined by

                                    L (A) = ∂˙x ḟ (A),                             (16.16)

where A ∈ Gn . The generalized shape operator between the k-surfaces M and
M  reduces to the shape operator (15.26) when f (x) is the identity mapping,
x = f (x) = x for all x ∈ M . We shall be particularly interested in the generalized
shape divergence when evaluated at tangent r-vector fields Ar ∈ Txr . We define

                                               1 ˙
                                  φ (Ar ) :=     ∂ · ḟ (Ar ),
                                               μ

where μ is a normalizing constant chosen for convenience.
   We wish to characterize when a mapping x = f (x) between two surfaces
preserves geodesics, that is, given a geodesic x(t) on M , we require that the
corresponding curve x (t) = f (x(t)) be a geodesic on M  . We calculate

                                  dx dx
                           v =      =    · ∂x f (x) = f (v).
                                  dt   dt
Taking the second derivative, we get
                                                                   
                          dv d f (v)                            dv
                             =        = f v (v) + f                   .
                          dt    dt                               dt

Wedging this last equation with v = f (v), we get
                                                                
                        dv                                 dv
                            ∧ v = f v (v) ∧ v + f            ∧v .
                        dt                                  dt

Recalling (15.38) that a non-unit speed curve x(t) is a geodesic iff Px ( dv
                                                                          dt ∧ v) = 0,
we are led to the following:
Definition 16.2.1. The f -related surfaces M and M  are said to be projectively
related by f if for all tangent vectors a ∈ Tx1 , and corresponding tangent vectors
a = f (a) in Tx1 ,
                                   P ( f a (a)) ∧ a = 0,
where
                      f a (b) = a · ∂x f (b) − f (a · ∂x b) = f b (a),

and P = Px is the projection onto the tangent space Tx of M  .
16.2 Projectively Related Surfaces                                                       281


Saying that M and M  are projectively related by the regular mapping f means
that the mapping f (x) preserves geodesics; if x(t) is a geodesic on M , then x (t) =
 f (x(t)) is a geodesic on M  .
    In studying projectively related k-surfaces, we define the normalizing factor μ =
k + 1 in the definition of the shape divergence φ (a). Let Ar ∈ Txr be any tangent
r-vector field, then

                                       1
                       Φ  (Ar ) =        ∂  · f (Ar ) = f (Φ (Ar )).                (16.17)
                                     k + 1 v v

Suppose now that the k-surfaces M and M  are projectively related by the mapping
f , so that for all a ∈ Ta
                                     P ( f a (a)) ∧ a = 0.                         (16.18)

   Treating a as a variable in the tangent space Tx1 , noting that a = f −1 (a ), and
taking the divergence of both sides of the equation (16.18) with ∂a gives
                                                                          
                 0 = ∂a · P ( f a (a)) ∧ a ) = P ∂a · ( f a (a) ∧ a ) .

Continuing the calculation, we get
                                                       
             0 = P ∂a · f a (a)a − ∂a · a f a (a)

               = 2∂a · f a (a)a + P ( fa (a)) − 2P( fa (a)) − kP( fa (a)).

Solving this last relationship for P ( fa (a)) gives

                          P ( f a (a)) = 2Φ (a)a = 2 f (Φ (a)a).                   (16.19)

   It is not difficult to show that the relationship (16.19) can be equivalently
expressed in each of the alternative forms

                            P ( f a (c)) = f (Φ (a)c + Φ (c)a),                     (16.20)

and
                         P ( f a (Cr )) = f (rΦ (a)Cr + aΦ (Cr ))                   (16.21)
where Cr ∈ Txr .


Exercises

1. Show that the relationship (16.19) is equivalent to (16.20).
2. Show that the relationship (16.19) is equivalent to (16.21).
282                                                               16 Mappings Between Surfaces


3. Find the equations of the geodesic curves on a unit sphere centered at the origin.
4. Find the equations of the geodesics on a right circular cone through the origin.
5. Find the equations of the geodesics on a right circular cylinder centered at the
   origin.



16.3 Conformally Related Surfaces

We now study conformal mappings between surfaces.
Definition 16.3.1. A mapping f : M → M  between the k-surfaces in Rn is said to
be a (proper) conformal transformation if for all tangent vectors a, b ∈ Tx1 ,

      f (a) · f (b) = e2φ a · b ⇐⇒ f (a) = ψ aψ † , and f (a ) = ψ † a ψ            (16.22)

              φ
where ψ = e 2 U is an even multivector and ψψ † = eφ where φ = φ (x) ∈ R.
Although we have restricted our considerations to proper conformal mappings
where U is an even multivector (defining a rotation), little generality is lost
since a conformal reflection can be made into a rotation by composing it with a
reflection defined by a constant unit vector. A conformal mapping reduces to an
isometry (16.15) when φ ≡ 0.
   We now calculate
                           1 φ       1 φ        1
                      ψ/b = e 2 φbU + e 2 UB/b = ψ (φb + B/b ),
                           2         2          2

where B/b = U †U/b is a bivector. It follows that ψ/b† = 12 (φb − B/b )ψ † and

                                          1                            
           f /b (a) = ψ/b aψ † + ψ aψ/b† = ψ (φb + B/b )a + a(φb − B/b ) ψ †
                                          2
                                      
                    = ψ φb a + B/b · a ψ † = f (φb a + B/b · a).                      (16.23)

Similarly, using that f f (a) = e2φ a, we calculate

                                  f b (a ) = e2φ (φb a + a · B/b).

   Taking the divergence of both sides of (16.23) with respect to b , and us-
ing (16.4), we find that

            ∂b  · f /b (a) = ∂b  · f (φb a + B/b · a)

                          = ∂b · (φb a + B/b · a) = φa + (k − 1)a · ∂xφ = kφa ,
16.3 Conformally Related Surfaces                                                      283


from which it follows that φa = 1k ∂b  · f b (a) and also that ∂ φ = k−1
                                                                        1
                                                                           ∂ · B. This last
relationship implies that
                                    B/a = a ∧ ∂x φ                                 (16.24)
provided that ∇x ∧ B = 0.
   Note that
                     f a (b) = f b (a) ⇐⇒ ∂a ∧ ∂b f /a (b) = 0.

Since
                                    f c (b ) = ∂a f c (a) · b ,

it follows that
                           ˙ ∧ ˙f (b ) = ∂c ∧ ∂a f (a) · b = 0.
                           ∇                       c

   Let us directly calculate ∂a ∧ B/a = ∇ ∧ B, where B/a = U †U/a . Equation (16.23),
together with the integrability condition f a (b) = f b (a), implies that

                     φb a − φab = B/a · b − B/b · a = a · B/b − b · B/a .

Taking the outer product of both sides of this equation with ∂b gives

                   a ∧ ∂ φ = 2B/a + ∂b ∧ (B/b · a) = B/a + (∇ ∧ B) · a.

But taking the outer product of both sides of this equation with ∂a shows that

                           0 = ∂a ∧ B/a − 2∇ ∧ B = −∇ ∧ B,

so that a ∧ ∂ φ = B/a as given in (16.24).
   Equation (16.24) shows that a conformal mapping between surfaces is com-
pletely determined by dilation factor eφ . Let us explore this interesting property
further. Note first that from B/a = U †U/a , we immediately get

                            U/a = UB/a = UB/aU †U = B/a U,

where

         B/a = UB/aU † = e−φ f (Ba ) = e−φ f (a ∧ ∂ φ ) = eφ a ∧ ∂  φ        (16.25)

is a bivector in the tangent space Tx2 . In deriving the last step in (16.25), we have
used the fact that a = f (a) and f (∂v ) = f f (∂v  ) = e2φ ∂v  .
    We wish now to determine how the Riemann curvature bivector transforms under
a conformal mapping. First, note that P(∂ ∧ ∂ φ ) = 0 implies that for any tangent
vector a,
                              P(a · ∂ ∂ φ ) = ∂ φa = ∂v φv,a .
284                                                                        16 Mappings Between Surfaces


Now, recalling (16.23) and (16.24),
                                                                               1
          f /a (c) = f (φa c + B/a · c) = f (φa c + φc a − a · c ∂ φ ) =         f (a∇φ c + c∇φ a).
                                                                               2
We then somewhat tediously calculate
               1                     1
 f /a,/b (c) =   f (a∇φ c + c∇φ a) + f (a∇φb c + c∇φb a)
               2 /b                  2
               1
              = f [(a∇φ c + c∇φ a)∇φ b + b∇φ (a∇φ c + c∇φ a) + 2a∇φbc + 2c∇φba],
               4
which we use to get
                         1 
    f /a,/b − f /b,/a (c) = f c∇φ (a∇φ b − b∇φ a) − (a∇φ b − b∇φ a)∇φ c
                           4
                                                               
                           +2c∇(φb a − φab) − 2(b∇φa − a∇φb )c

                                 1 
                             =     f c∇φ (a ∧ ∇φ b + ba ∧ ∇φ ) − (a ∧ ∇φ b + ba ∧ ∇φ )∇φ c
                                 4
                                                                           
                                 +2c∇(φb a − φab) − 2(b ∧ ∇φa − a ∧ ∇φb )c

                               1 
                             =   f c∇φ (b ∧ a ∧ ∇φ − (b ∧ a ∧ ∇)∇φ c + c∇(φba − φa b)
                               2
                                                        
                               −(b ∧ ∇φa − a ∧ ∇φb )c
                                                                                        
                             = f [∇φ · (a ∧ b ∧ ∇φ )] · c+([(a ∧ b) · ∂u] ∧ ∂v φu,v ) · c = f (Ωc · c),

where

                  Ω = Ω (a ∧ b) = ∇φ · (a ∧ b ∧ ∇φ ) − [(a ∧ b) · ∂u] ∧ ∂v φu,v
                        = a ∧ b ∧ ∂ φ ∂ φ − [(a ∧ b) · ∂u]∂v φu,v .                             (16.26)

    Defining a(2) = a1 ∧a2 , and a(2) = f (a(2) ), c = f (c), and using (16.14), we get a
direct relationship between the Riemann curvature bivectors on M and M  . Letting
f /a (c) = ( f /a ,/a − f /a ,/a )(c), we find that
    (2)             1    2          2   1

                                                                    
                         f /a (c) = R (a(2) ) · c − f R(a(2) ) · c = f (Ω · c).
                              (2)


Taking the outer product of both sides of this equation with f (∂c ) = e2φ ∂c we find
the important relationship

                                        f (Ω ) = e2φ R (a(2) ) − f (R(a(2) )).                (16.27)
16.3 Conformally Related Surfaces                                                    285


   Wedging both sides of (16.27) with the bivector a(2) and noting that because
of (16.26) f (Ω ) ∧ a(2) = 0, we find that
                                          
                         f R(a(2) ) ∧ a(2)) = e2φ R (a(2) ) ∧ a(2) .   (16.28)

We call W4 (a(2) ) := R(a(2) ) ∧ a(2) the conformal Weyl 4-vector because it is
closely related to the classical conformal Weyl tensor. We see from (16.28) that
f (W4 (a(2) )) = e2φ W4 (a(2) ). Obviously, if k = 3, the conformal Weyl 4-vector
W4 (a(2) ) ≡ 0.
   More closely related to the classical conformal Weyl tensor is the quantity
                                        1
                   WC (a(2) ) =                 ∂a · [∂a1 · W4 (a(2) )].
                                  (k − 1)(k − 2) 2
Calculating WC (a(2) ), we find that

                            1                                      R
 WC (a(2) ) = R(a(2) ) −       [R(a1 ) ∧ a2 + a1 ∧ R(a2 )] +               a . (16.29)
                           k−2                               (k − 1)(k − 2) (2)

Taking the divergence of both sides of (16.28) with ∂a ∧ ∂a shows that
                                                                   2     1

                                                    2φ
                               f (WC (a(2) )) = e        WC (a(2) ).            (16.30)

Furthermore, by dotting both sides of this equation on the right by c , and using the
fact that c = e−2φ f f (c), we get that
                                            
                             f WC (a(2) ) · c = WC (a(2) ) · c .               (16.31)



Exercises

1. Let                                                                       
                    A = [R (a(2) ) · c ] ∧ a(2) − f [R(a(2) ) · c] ∧ a(2)

   and
                              B = R (v) ∧ a(2) − f [R(v) ∧ a(2)],
   where v = a(2) · c. Using the property (16.14), show that

                                              1
                                       A−        B = 0.
                                             k−2

2. Using the Bianchi identities (15.5.2), show that

                 [R(a1 ) ∧ a2 + a1 ∧ R(a2 )] · c = a(2) · R(c) + R(a(2) · c).
286                                                           16 Mappings Between Surfaces


3. Calculate WC given in (16.29) by taking the second divergence of the Weyl 4-
   vector.
4. Use (16.30) to show that WC2 = WC 2 .



16.4 Conformal Mapping in Rp,q

When we make the assumption that our conformal mapping x = f (x) is between
the flat space M = R p,q = M  and itself, for which the curvature bivectors R(a ∧ b)
and R (a ∧ b ) vanish, (16.27) simplifies to the identity Ω (a ∧ b) ≡ 0. Taking the
contraction of this equation with respect to the bivector variable B = a ∧ b gives the
relationship
                                              k−2 2
                                   ∇·w = −         w
                                               2
for all values of k = n > 2. Calculating ∂b · Ω = 0 and eliminating ∇ · w from this
equation leads to the surprisingly simple differential equation

                                            1
                               wa = a · ∇w = waw.                                 (16.32)
                                            2

Equation (16.32) specifies the extra condition that w = ∇φ must satisfy in order that
f (x) is a nondegenerate conformal mapping of the pseudo-Euclidean space R p,q
onto itself, where n = p + q > 2.
   Trivial solutions of (16.32) satisfying (16.22) consist of i) ∇φ = 0 so that ψ is a
constant dilation factor and ii) ψ = U where U is a constant rotation in the plane of
some constant bivector B.
   Let c be a constant non-null vector in R p,q . A nontrivial solution to (16.32) is

                                                   1
                        f (x) = ψ x = x(1 − cx)−1 = c−1 wx                        (16.33)
                                                   2

where w = ∇φ = 2(1 − cx)−1c and

                         e−φ = (1 − xc)(1 − cx) = 4c2 w2 .                        (16.34)

Equivalently, we can write (16.33) in the form

                                            x − x2 c
                              f (x) =                     .
                                        1 − 2c · x + c2x2

The mapping f (x) is called a transversion in the identity component of the
conformal or Möbius group of R p,q and is well defined for all values of x ∈ R p,q
for which
                         1 − 2c · x + c2x2 = 4c2 w2 > 0.
16.5 Möbius Transformations and Ahlfors–Vahlen Matrices                            287


Of course, for a Euclidean signature, this is always true. In addition to transversions,
the sense-preserving conformal group is generated by rotations, translations, and
dilations. A related derivation of the sense-preserving conformal group can be found
in [43, p.210–19].



Exercises

1. Given the transversion y = f (x) = x(1 − cx)−1, show that

                               x = f −1 (y) = y(1 + cy)−1.

2. (a) Show that the transversion y = f (x) = x(1 − cx)−1, with c = (0, 0, −1), maps
       the xy-plane in R3 into the unit sphere lying above the xy-plane with the south
       pole at the origin.
   (b) What happens to the mapping when the constant vector c = (0, 0, −1/4)?
   (c) Show that if we choose c = e1 , the transversion f (x) maps the xy-plane into
       itself and that this mapping is equivalent to the complex mapping w = 1−z    z

       mapping the complex number plane conformally onto itself, where z = e1 x
       and w = e1 y.



16.5 Möbius Transformations and Ahlfors–Vahlen Matrices

We must take a step back to see the whole picture of the structure of conformal
transformations of R p,q . Following [55, 248–51], by the Ahlfors–Vahlen matrix
[ f ] of a conformal transformation of the form f (x) = (ax + b)(cx + d)−1 where
a, b, c, d ∈ G p,q , we mean
                                          
                                           ab
                                   [f] =        .                         (16.35)
                                           cd
                                                                             
                                                                             x
Note that when the Ahlfors–Vahlen matrix operates on the column matrix          ,
                                                                             1
we get                                          
                               ab     x       ax + b
                                          =            .                  (16.36)
                               cd     1       cx + d
We will see what is behind this unusual circumstance in the next chapter. The
Ahlfors–Vahlen matrix [ f ] of   the identity
                                              transformation f (x) = x is easily seen
                                    10
to be the identity matrix [ f ] =       .
                                    01
   The Ahlfors–Vahlen matrices of conformal transformations simplify the study
of the conformal group because the group action of composition is reduced to the
288                                                           16 Mappings Between Surfaces

Fig. 16.1 The transversion                                    1      0       −1
f (x) = x(1 − cx)−1 , with
c = (0, 0, 3/4), maps the
cylinder in R3 conformally                           −1
onto the figure shown
                                                     0


                                                     1

                                                                                       1
                                                                                       0.5
                                                                                      0
                                                                                     −0.5
                                                                                     −1


matrix product of the corresponding Ahlfors–Vahlen matrices. If f (x) and g(x) are
conformal transformations, then h(x) = g( f (x)) is also a conformal transformation
of R p,q and their Ahlfors–Vahlen matrices satisfy the rule

                                [h] = [g ◦ f ] = [g][ f ].

   By the pseudodeterminant of a Ahlfors–Vahlen matrix, we mean
                                     
                                     ab
                             pdet       = ad † − bc† .
                                     cd

A conformal transformation f is a sense preserving (rotation) if pdet[ f ] > 0 and
sense reversing (reflection) if pdet[ f ] < 0. By the normalized identity component of
the conformal group, we mean all conformal transformations f with the property
that pdet[ f ] = 1.
   We can now talk in greater detail about the conformal Möbius transformations
shown inFigs. 16.1–16.5.
                            Figures 16.1–16.3 all have Ahlfors–Vahlen matrices of
               1 0
the form            with the pseudodeterminant
             −c 1
                                              
                                          1 0
                                   pdet          = 1.
                                          −c 1

This means that these transformations are sense-preserving conformal transforma-
tions of R3 onto itself which are continuously connected to the identity component,
represented by the identity 2 × 2 matrix.
   Figures 16.4 and 16.5 have Ahlfors–Vahlen matrices of the respective forms
                                                       
                                 c 1                 1 −c
                                              and
                                 1 −c                 c 1
16.5 Möbius Transformations and Ahlfors–Vahlen Matrices                             289

Fig. 16.2 The transversion                                                  -1   0           1
 f (x) = x(1 − cx)−1 with
                                           2
c = (−1/4, 1/2, 0) maps the
cylinder in R3 conformally
onto the figure shown. The                 1
image is translated by 3 units
on the y-axis for clarity
                                           0


                                           -1


                                           -2
                                                                                 4
                                                                      2
                                                             0

Fig. 16.3 The transversion
f (x) = x(1 − cx)−1 with
c = (−1/4, −1/4, −1/4)
maps the xy-plane
conformally onto the unit
sphere in R3 above plane as
shown                                                                                        2
                                 -4
                                                                                         1
                                      -2
                                                                                         0
                                                                                     4
                                           0                                 2
                                                                      0
                                                2
                                                                 -2
                                                    4   −4



with pseudodeterminants −2 and 2, respectively. These global conformal transfor-
mations on R3 and R2,1 are the extensions of the standard stereographic projection
from the Euclidean plane in R2 to the unit sphere in R3 in the case of Fig. 16.4
and from the hyperbolic plane in R1,1 to the unit hyperboloid in R2,1 in the case of
Fig. 16.5. Whereas Fig. 16.5 is continuously connected to the identity component
as c → 0, this is not the case for Fig. 16.4.
   We wish to call one peculiarity to the attention of the reader. The standard
stereographic transformation from the Euclidean plane in R2 to the unit sphere in
R3 , with the north pole at the unit vector e3 on the z-axis, can be represented either
by f (x) = (e3 x + 1)(x − e3 )−1 or by g(x) = (x − e3 )(e3 x + 1)−1 . Both of these
transformations are identical when restricted to the xy-plane, but are globally distinct
on R3 . One of these conformal transformations is sense preserving and continuously
connected to the identity, while the other one is not. How is this possible?
   I highly recommend the Clifford algebra calculator software [54], which can be
downloaded, for checking calculations. Also, transversions (16.34) can be easily
plotted with the help of software graphics programs such as Mathematica or
290                                                             16 Mappings Between Surfaces


                                                                 1−1
Fig. 16.4 The stereographic
projection f (x) =                                                     -0.5
                                                          0.5                 0
(cx + 1)(x − c)−1 in R3 , with                                                         0.5
                                                      0                                                 1
c = (0, 0, 1), wraps the
cylinder conformally around                    −0.5
the unit sphere as shown. For             −1
a cylinder four times as long
as the radius of the sphere,
the sphere is covered twice                1




                                               0



                                               −1




Fig. 16.5 The hyperbolic
stereographic projection
 f (x) = (x − c)(1 + cx)−1
with c = (0, 0, 1) maps the
hyperbolic xy-plane
conformally onto the unit            0
hyperboloid. The metric g has    -0.25
the Lorentzian signature           -0.5
                                  -0.75                                                                 1
(+, −, +)
                                     −1                                                           0.5
                                           −1                                                 0
                                                          0                            −0
                                                                                         .5
                                                                       1          −1



Maple. The following website gives the graphs of some more exotic conformal
transformations, and other information:
   http://www.garretstar.com/algebra



Exercises

1. Explain the “peculiarity” mentioned above regarding the mappings
      f (x) = (e3 x + 1)(x − e3)−1 and g(x) = (x − e3)(e3 x + 1)−1.
2. In R3 , let
*16.6 Affine Connections                                                                291


                     f (x) = x(1 − ax)−1     and g(x) = x(1 − bx)−1.
   Show that                                                  −1
                         f (g(x)) = g( f (x)) = x 1 − (a + b)x     .

3. (a) Let b ∈ R3 be a constant nonzero vector. Define the reflection h(x) =
       −bxb−1 . Find the Ahlfors–Vahlen matrix [h] of the reflection h(x).
   (b) Let a ∈ R3 be a constant vector and let i = e123 ∈ G3 . Define the rotation in
       R3 by
                                                  1      −1
                                      rot(x) = e 2 ia xe 2 ia .

       Find the Ahlfors–Vahlen matrix [rot] of the rotation rot(x).
   (c) Let f (x) = x(1 − cx)−1 be a transversion. For the reflection h(x) defined in
       part a), find the composition f (h(x)), and verify that [ f ◦ h] = [ f ][h] for their
       corresponding Ahlfors–Vahlen matrices.
4. (a) Let d be a constant vector. Define the translation t(x) = x + d for all x ∈ Rn .
       Find the Ahlfors–Vahlen matrix [t] of the translation t(x).
   (b) Let f (x) be the transversion given in Problem 3 (c). Find the composition
       f (t(x)), and verify that their Ahlfors–Vahlen matrices satisfy [ f ◦ t] = [ f ][t].
5. Given the transversion y = f (x) = x(1 − cx)−1, show that

                                 x = f −1 (y) = y(1 + cy)−1

   by finding the inverse of the Ahlfors–Vahlen matrix [ f ] of the transversion f (x).



*16.6 Affine Connections

The concept of a coderivative (15.39), and directional coderivative (15.40), on
a k-surface embedded in Rn can be generalized by the concept of an affine
connection. The concept of an affine connection has been used for an interesting new
formulation of Einstein’s Theory of General Relativity (GR) in the flat spacetime
algebra G1,3 = G(R1,3 ) of the pseudoEuclidean space R1,3 of special relativity,
[39, 51]. We should also like to mention another interesting model of GR in flat
spacetime which shows great promise in-so-far as that it is a much simpler theory
but makes many of the same famous predictions of GR, [87, 98]. Unfortunately for
science fiction fans, if the latter model is correct, there will be no black holes for
unsuspecting space travellers to fall into. A powerpoint talk “Do Black Holes Really
Exist” can be found on my website: http://www.garretstar.com/blackholestalk.ppt
   Following [43, p.220], we let

                                     hx : Tx −→ Tx

be an invertible outermorphism of the tangent algebra Tx to a k-surface M in Rn
at the point x ∈ M to a geometric algebra Tx . We assume that the range of hx is a
292                                                            16 Mappings Between Surfaces


2k -dimensional geometric algebra Tx , and we further suppose that hx is smoothly
differentiable on M . For example, hx could be the differential f x of a mapping
f : M → M  , in which case Tx is the tangent algebra to M  at the point x = f (x).
In the case that f (x) = x, the identity mapping on M , hx = Px is the projection
operator onto the tangent algebra Tx of M at the point x.
    The induced affine directional h-coderivative a · δx is defined by

                         a · δx = h−1                      −1
                                   x a · ∂x hx = a · ∇x + hx ha                    (16.37)

and the induced affine h-coderivative is defined by

                         δx = ∂a h−1                     −1
                                  x a · ∂x hx = ∇x + ∂a hx ha .                    (16.38)

It is understood that the affine h-coderivative and affine directional h-coderivative
only operate on fields in the tangent algebra Tx . This becomes explicit when we
assume that
                                     h = Px hx Px ,                         (16.39)
where Px is the projection onto the tangent algebra Tx and Px is the projection onto
the range space Tx .
   If hx = Px , the projection onto the tangent algebra Tx , then h−1
                                                                   x = Px and

                              a · δx = a · ∇x ,   and δx = ∇x ,

so the affine directional and affine h-coderivative reduce to the directional and
coderivatives defined in (15.39) and (15.40), respectively. We see that the directional
and h-coderivatives distort the geometry of the natural coderivative inherited from
Rn . We will see what the consequences of this distortion is below.
   As a measure of this distortion, we define the affine tensor

                                    H/a = h−1 ha = h−1 h/a .                       (16.40)

For a scalar field φ = φx ,

                        δx φ = ∇x φ       ⇐⇒ a · δx φ = a · ∇xφ ,

since H(φ ) = φ . More generally, in terms of the affine tensor H/a , we see that for
any multivector field F ∈ Tx ,

                                 a · δx F = a · ∇x F + H/a (F).                    (16.41)

   Taking the a-coderivative of

                                         h−1
                                          x hx = Px ,
*16.6 Affine Connections                                                               293


and simplifying by using the fact that P/a = 0, gives

                             h−1     −1
                              /a = −h h/a h
                                            −1
                                               = −H/a h−1 .                       (16.42)

We also have for vector fields b, c ∈ Tx1

                           H/a (b ∧ c) = H/a (b) ∧ c + b ∧ H/a(c),                (16.43)

just as we had the similar property (15.19) for the projection Px .
   Decomposing the affine tensor H/a (b) into symmetric and skew-symmetric parts,

                                  H/a (b) = K/a (b) + T/a (b)                     (16.44)
where
                 1                                        1
        K/a (b) = (H/a (b) + H/b (a)),       and T/a (b) = (H/a (b) − H/b (a)).
                 2                                        2
The symmetric part K/a is the Christoffel tensor of the affine tensor H, and the skew-
symmetric part T is called the torsion tensor of the affine tensor H. If h = f is the
differential of a mapping f : M → M  , then by the integrability condition (16.7)
gives h/a) (b) = h/b (a), so that
                      1                     1
             T/a (b) = (H/a (b) − H/b (a)) = h−1 (h/a (b) − h/b (a)) = 0.
                      2                     2
It follows that the torsion tensor T/a (b), in the affine geometry induced by a mapping
between surfaces, always vanishes.
    The affine geometry induced by h can be used to define a new metric tensor g on
M , given by
                     h(a) · h(b)      ⇐⇒        a · h(h(b)) = a · g(b),           (16.45)
                                                                                  −1
where g(a) := h(h(a)). Since H/a (b) = h−1 h/a (b), it follows that H /a (b) = h/a h (b).
Using this, we calculate the differential of g,

                             −1
              g/b (a) = h/b h hh(a) + hhh−1 h/b (a) = H /b g(a) + gH/b(a).

Assuming again h = f , so that h is the differential of a mapping f between surfaces,
it follows that H/b (a) = H/a (b). In this case, we further calculate that

                             ∂˙ ġ(a) · b = H /a g(b) + H /b g(a).

  With the above calculations in hand, in the case that h is the differential of a
mapping, we find that

                       g/a (b) + g/b (a) − ∂˙ a · ġ(b) = 2g(H/a (b)),
294                                                                16 Mappings Between Surfaces


which gives the Christoffel tensor
                1                     1                                   
       K/a (b) = (H/a (b) + H/b (a)) = g−1 g/a (b) + g/b (a) − ∂˙ a · ġ(b) .          (16.46)
                2                     2
In the special case that h is the differential of the mapping of a coordinate patch in
Rn to a n-surface M in Rn , the formula for (16.46) becomes equivalent to (15.25),
which we found in Chap. 15. We see that

                                            1
                          ek · g(Ki j ) =     ∂i gk j + ∂ j gki − ∂k gi j
                                            2
or
                                 1      
                        g(Ki j ) =
                                 2 ∑  ek ∂i gk j + ∂ j gki − ∂k gi j .

Using (16.45), we are thus able to pull back the geometry on M to the geometry on
a flat coordinate patch in Rn by introducing the new affine metric tensor g on Rn .
    In (16.41), we saw how the affine derivative is related to the coderivative on
M . We now calculate how the affine curvature is related to the Riemann curvature,
assuming that the torsion tensor T/a (b) = 0. Using (16.41), we find
                                                                        
 Q(a ∧ b) · c : = (a ∧ b) · (δx ∧ δx )c = [a · δx, b · δx ] − [a, b] · δx c
                                                                      
                = (a · ∇ + H/a)(b · ∇ + H/b ) − [a, b] · ∇ − H[a,b] c
                  
                = [a · ∇, b · ∇]−[a, b] · ∇+(a · ∇H/b −H/b a · ∇)−(b · ∇H/a −H/a b · ∇)
                                       
                  −H[a,b] +[H/a , H/b ] c
                                                           
                = R(a ∧ b) · c+ H/b,/a −H/a,/b +[H/a , H/b ] c.                 (16.47)

     Recalling that H/a = h−1 h/a , from h−1 h = P, we easily find that

                        h−1      −1           −1
                         /a h + h h/a = 0 ⇐⇒ h/a h = −H/a .

Using this, we calculate

                   H/b,/a − H/a,/b = h−1        −1        −1
                                      /a h/b − h/b h/a + h (h/b,/a − h/a,/b )

                                 = −[H/a , H/b ] + h−1 (h/b,/a − h/a,/b ),

giving the simple expression

                    Q(a ∧ b) · c − R(a ∧ b) · c = h−1 (h/b,/a − h/a,/b )(c).           (16.48)
*16.6 Affine Connections                                                   295


Exercises

1. Compare the results found for conformal mappings for the affine geometry
   obtained by letting h = f , where x = f (x) is a conformal mapping satisfy-
   ing (16.22).
Chapter 17
Non-euclidean and Projective Geometries




                              The secret of science is to ask the right questions, and it is the
                              choice of problem more than anything else that marks the man
                              of genius in the scientific world.
                                                                             —Sir Henry Tizard



We investigate the relationship between conformal transformations in R p,q , studied
in the previous chapter, and orthogonal transformations acting on the horosphere
in R p+1,q+1. The horosphere is a nonlinear model of a pseudo-Euclidean space
in a pseudo-Euclidean space of two dimensions higher. In the process, we are
led to consider the relationships between non-Euclidean and projective geometries,
beginning with the definition of the affne plane and the meet and join operations.
One of the first to consider the problems of projective geometry was Leonardo da
Vinci (1452–1519). But it was only much later that the French mathematician Jean-
Victor Poncelet (1788–1867) developed projective geometry into a well-defined
subject. The generality and simplicity of projective geometry led the English
mathematician Arthur Cayley (1821–1895) to proclaim “Projective Geometry is all
of geometry”. Whereas we cannot delve deeply into this beautiful subject, we can
lay down just enough of the basic ideas to understand what led Cayley to make his
famous proclamation.



17.1 The Affine n-Plane Ahn

Following [35, 44], we begin by extending the geometric algebras Gn of Rn to the
geometric algebra Gn+1 of Rn+1 . Recall (10.2) that the standard orthonormal basis
of Rn is given by
                                 (e)(n) = (e1 , . . . , en ),



G. Sobczyk, New Foundations in Mathematics: The Geometric                                   297
Concept of Number, DOI 10.1007/978-0-8176-8385-6 17,
© Springer Science+Business Media New York 2013
298                                                   17 Non-euclidean and Projective Geometries


                                                          S*y
                                                              h
                                                                  xh
                                               x
                                                  h
                                                      y                   S*x
                                                                             h
                                              y       h
                                               h

                                                          e n+1
                                                          y
                                             e n+1                e n+1
                          n
                     Ah
                                                              x


                                  Rn


Fig. 17.1 The affine n-plane Ahn . Each point x ∈ Rn determines a unique point xh = x+en+1 ∈ Ahn
which in turn determines the unique ray Sx∗h . Two distinct points xh and yh determine the the unique
line xh ∧ yh



where e2i = 1 for 1 ≤ i ≤ n. For the standard basis of Rn+1 , we naturally extend the
standard basis of Rn to include the new orthonormal vector en+1 , so the standard
basis of Rn+1 becomes (e)(n+1) = (e)(n) ∪ {en+1}.
Definition 17.1.1. By the affine n-plane Ahn of the Euclidean space Rn , we mean

                               Ahn = {xh = x + en+1| x ∈ Rn }.

The affine n-plane Ahn consists of all of the points x ∈ Rn displaced or translated by
the unit vector en+1 ∈ Rn+1 . Since any point y ∈ Rn+1 is of the form y = x + α en+1
for x ∈ Rn and α ∈ R, it follows that the affine plane Ahn is the hyperplane in Rn+1
consisting of all points y ∈ Rn+1 satisfying the equation y · en+1 = 1. The affine
n-plane Ahn is pictured in Fig. 17.1.
   Notice that each point xh ∈ Ahn is uniquely determined by the direction of a
nonzero vector or ray

                          Sx∗h = {y ∈ Rn+1 | y ∧ xh = 0, and y = 0}                         (17.1)

through the origin of Rn+1 . Each ray Sx∗h through the origin of Rn+1 meets the affine
n-plane Ahn in precisely the point xh . The point xh ∈ Ahn is called the homogeneous
representant of the ray Sx∗h and can be easily recovered from any other representant
y ∈ Sx∗h by the simple formula xh = y·eyn+1 . The ray Sx∗h becomes a one-dimensional
subspace Sxh of Rn+1 if we add in the missing origin y = 0, i.e., so that

                          Sxh := {y ∈ Rn+1 | y ∧ xh = 0} = Sx∗h ∪ {0}.                       (17.2)

Definition 17.1 brings us closer to a projective geometry of rays through the origin.
17.2 The Meet and Joint Operations                                                    299


Exercises

Consider the affine plane Ah2 ⊂ R3 .
1. Find the ray Sx∗h and one-dimensional subspace Sxh of R3 corresponding to each
   of the given homogeneous representants xh ∈ Ah2 :
   (a) xh = (1, 2, 1). b) xh = (0, 0, 1). c) xh = (2, −1, 1).
2. Find the unique line xh ∧ yh ∈ Ah2 determined by the points xh = (1, 2, 1) and
   yh = (2, −1, 1) in Ah2 . Give a figure showing the affine plane Ah2 , the points
   xh , yh , the ray Sx∗h , the subspace Sxh , and the line xh ∧ yh .



17.2 The Meet and Joint Operations

Not only can rays Sx∗h through the origin of Rn+1 , and their associated 1-dimensional
subspaces Sxh , be identified with the points xh ∈ Ahn , but higher dimensional (k + 1)-
rays, for 0 < k ≤ n, can be identified with k-planes lying in the affine n-plane Ahn .
For example, two distinct points xh , yh ∈ Ahn determine the unique line xh ∧yh in Ahn
which passes through these points. The line xh ∧ yh is the intersection of the plane
of the bivector xh ∧ yh passing through the origin of Rn+1 and the affine n-plane
Ahn . The plane of the bivector xh ∧ yh passing through the origin of Rn+1 uniquely
determines the 2-ray Sx∗h ∧yh and the corresponding 2-dimensional subspace Sxh ∧yh
of Rn+1 , as shown in Fig. 17.1.
   More generally, the k-plane xh(k+1) = xh1 ∧ · · · ∧ xhk in Ahn is uniquely determined
by both the (k + 1)-ray
               Sx∗h       = {y ∈ Rn+1 | y ∧ xh(k+1) = 0, and y · en+1 = 0}
                 (k+1)


and its corresponding (k + 1)-dimensional subspace
                S xh          = {y ∈ Rn+1 | y ∧ xh(k+1) = 0} = Sx∗h         ∪ {0}.
                      (k+1)                                         (k+1)


   Just as a point in Ahn is identified by the vector xh ∈ Rn+1 , a k-plane in Ahn is
identified with the (k + 1)-vector xh(k+1) ∈ Gn+1. We write

                                               ˙ Sx∗h
                                       xh(k+1) =            ∩ Ahn
                                                    (k+1)


to formally express this idea, the dot over the equal sign to signify that xh(k+1) is only
determined up to a nonzero scalar. As such, the affine n-plane Ahn itself is identified
with xh(n+1) = 0, the outer product of any (n + 1) points xhi of Ahn which are linearly
independent as vectors in Rn+1 , so that

                                ˙ Ahn = S(xh )(n+1) ∩ Ahn = ∪xh ∈Ahn Sx∗h .
                        xh(n+1) =
300                                                17 Non-euclidean and Projective Geometries


   We see that the objects of points (0-planes), lines (1-planes), and higher
dimensional k-planes in Ahn can all be identified with their corresponding (k + 1)-
rays Sx∗h and (k + 1)-dimensional subspaces Sxh , respectively. We now introduce
       k+1                                              k+1
the the meet and join operations on these subspaces to characterize the incidence
relationship between these objects, which are also the basic objects of projective
geometry. As we now show, the meet and join operations of these objects become,
respectively, the intersection and union of the corresponding subspaces which name
these objects in Ahn .
   The direct correspondence between simple nonzero r-blades Ar in Gn+1 and
subspaces of Rn+1 is given by

                            SAr = {x ∈ Rn+1 | x ∧ Ar = 0}.

We say that the nonzero r-blade Ar represents, or is a representant of, the r-subspace
SAr . However, this correspondence is not unique since any nonzero multiple kAr of
the nonzero r-vector Ar will represent the same subspace SAr , i.e.,

                               SAr = SkAr for all k ∈ R∗ .

    Let Ar , Bs , and Ct be nonzero blades representing three subspaces SAr , SBs , and
SCt , respectively. We say that
Definition 17.2.1. The t-blade Ct = ˙ Ar ∩ Bs is the meet of Ar and Bs if SCt is the
intersection of the subspaces SAr and SBs ,

                                      SCs = SAr ∩ SBs .                               (17.3)

We say that
Definition 17.2.2. The t-blade Ct =  ˙ Ar ∪ Bs is the join of Ar and Bs if SCt is the
union of the subspaces SAr and SBs ,

                                      SCt = SAr ∪ SBs .                               (17.4)

   For r, s ≥ 1, suppose that an (r − 1)-plane SAr in Ahn is represented by the r-blade

                                  Ar = a 1 ∧ a 2 ∧ · · · ∧ a r

and an (s − 1)-plane SBs by

                                 Bs = b1 ∧ b2 ∧ · · · ∧ bs .

Considering the a’s and b’s to be the basis elements spanning the respective
subspaces SAr and SBs , they can be sorted in such a way that

                    SAr ∪ SBs = span{a1, a2 , . . . as , bλ1 , . . . , bλk },
17.2 The Meet and Joint Operations                                                           301


where the λ ’s are chosen as small as possible and are ordered to satisfy 1 ≤ λ1 <
λ2 < · · · < λk ≤ s. It follows that the join

                           Ar ∪ Bs =
                                   ˙ Ar ∧ bλ1 ∧ · · · ∧ bλk = 0.                          (17.5)

   Once the join Ar ∪ Bs of the subspaces SAr and SBs has been determined, it can be
used to determine the meet Ar ∩ Bs of those subspaces. Letting i=A˙ r ∪ Bs , then the
meet is specified by

                            Ar ∩ Bs =(iA
                                    ˙ r ) · Bs =A
                                               ˙ r · (iBs ) = 0.                          (17.6)

The problem of “meet” and “join” has thus been solved by finding the union and
intersection of linear subspaces and their equivalent (s + k)-blade and (s − k)-blade
representants.
    It is important to note that it is only in the special case when Ar ∩ Bs = 0, which
is equivalent to writing SAr ∩ SBs = {0}, that the join reduces to the outer product.
That is,
                         Ar ∩ Bs = 0 ⇐⇒ Ar ∪ Bs =
                                                ˙ Ar ∧ Bs
    After either the join Cs+k =
                               ˙ Ar ∪ Bs or the meet Ds−k = ˙ Ar ∩ Bs has been found,
it can be used to find the meet Ds−k or the join Cs+k , respectively. We have

     Ar ∩ Bs =
             ˙ [(Ar ∪ Bs ) · Ar ] · Bs, ⇐⇒ Ar ∪ Bs =
                                                   ˙ Ar ∧ [Bs (Ar ∩ Bs )].                 (17.7)

This is a reflection of the powerful principle of duality in projective geometry about
which we will have more to say later.
    With the basic definitions of meet and join defined on subspaces, and the objects
in the affine plane that they represent, we can now give the basic definition regarding
the incidence relationships among the objects in the affine plane.
Definition 17.2.3. A point xh ∈ Ahn is said to be incident to, or on an r-plane
ch(r+1) = ∧r+1
           i=1 ci in Ah if
                h      n



                      xh ∧ ch(r+1) = 0      ⇐⇒        xh ∩ ch(r+1) =
                                                                   ˙ xh .

If xh ∧ ch(r+1) = 0, the point xh is not on the r-plane ch(r+1) . More generally, a t-plane
xh(t+1) in Ahp,q is said to be the meet of the r- and s-planes ch(r+1) and dh(s+1) in Ahn if

                                  xh(t+1) =
                                          ˙ ch(r+1) ∩ dh(s+1) ,

and there is no larger t-plane in Ahn with this property.
  For example, consider two lines l1 =
                                     ˙ ah ∧bh and l2 =
                                                     ˙ ch ∧dh on the affine 2-plane
Ah2 embedded in R3 , where

         ah = (a1 , a2 , 1), bh = (b1 , b2 , 1), ch = (c1 , c2 , 1), dh = (d1 , d2 , 1).
302                                               17 Non-euclidean and Projective Geometries


Recall that the pseudoscalar trivector in G3 is i = e123 . If no three of the four points
are coplanar, then
                                 (ah ∧ bh ) ∪ (ch ∧ dh ) =
                                                         ˙ i,
and using (17.7), we find that

       (ah ∧ bh ) ∩ (ch ∧ dh ) =
                               ˙ (i(ah ∧ bh )) · (ch ∧ dh ) = [(iah ) · bh ] · (ch ∧ dh )
                                            
 = [(iah ) · bh ] · ch cd − [(iah ) · bh ] · dh ch = i ah ∧ bh ∧ ch dh − i ah ∧ bh ∧ dh ch
                          ⎛             ⎞          ⎛               ⎞
                          a1 a2 1                     a1 a2 1
                = − det ⎝b1 b2 1⎠ dh + det ⎝b1 b2 1⎠ ch .                        (17.8)
                           c1 c2 1                    d1 d2 1
Formula (17.8) gives the ray of the intersection. This ray is easily normalized to give
the point xh of intersecion on the affine plane Ah2 . We find that
                                                   ⎛  ⎞          ⎛         ⎞
                                               a1 a2 1             a1 a2 1
                                        − det ⎝b1 b2 1⎠ dh + det ⎝b1 b2 1⎠ ch
           (ah ∧ bh ) ∩ (ch ∧ dh )             c1 c2 1             d1 d2 1
   xh =                             =            ⎛                 ⎞        .
         (ah ∧ bh ) ∩ (ch ∧ dh ) · e3                  a1     a2 1
                                               det ⎝ b1       b2 1⎠
                                                            d 1 − c1 d 2 − c2 0

   Suppose that we are given two noncollinear points ah , bh ∈ Ah2 , then as we have
mentioned previously, the line lab passing through the points ah , bh ∈ Ah2 is uniquely
determined by the bivector ah ∧ bh . Suppose that we are given a third point dh ∈ Ah2 ,
as in Fig. 17.2a, and we are asked to find the point ph on the line lab such that
lab is perpendicular to l pd . The point ph we are looking for is of the form ph =
d + si(ah − bh ) for some s ∈ R and lies on the line l pd which is specified by

                ph ∧ dh = [dh + si(ah − bh )] ∧ dh = s[i(ah − bh )] ∧ dh ,

where i = e1 e2 is the bivector tangent to the affine plane Ah2 . The scalar s = 0
is unimportant since the line is uniquely determined by the planar direction of
the bivector ph ∧ dh and not by its magnitude. The point p is therefore uniquely
specified by
                            p=
                             ˙ (a ∧ b) ∩ {[i(ah − bh )] ∧ dh }.                             (17.9)
   Evaluating (17.9) for the point p, we find

        ˙ (ah ∧ bh ) ∩ {[i(ah − bh )] ∧ dh } =
       p=                                    ˙ {[e3 ∧ (ah − bh )] · dh } · (ah ∧ bh )
         = [e3 ∧ (ah − bh )] · (dh ∧ ah ) bh − [e3 ∧ (ah − bh )] · (dh ∧ bh ) ah
         = (ah − bh ) · (bh − dh ) ah − (ah − bh ) · (ah − dh ) bh
17.2 The Meet and Joint Operations                                                                   303

Fig. 17.2 (a) Perpendicular
point on a line. (b) Simpson’s
                                                                                           a1
theorem for a circle                                     dh                 dh                  ch


                                                                                      b1
                                                                                      e3             bh

                                                                       ah        c1
                                     ah              ph bh


The normalized point

            p             1
   ph =         =−               [(ah − bh ) · (bh − dh ) ah − (ah − bh ) · (ah − dh ) bh ]
         p · e3      (ah − bh )2
                                                                                     (17.10)
will be in the affine plane Ah2 .
   We now prove Simpson’s theorem for a circle in the affine plane of rays Ah2 using
the operations of meet and join. Referring to the Fig. 17.2b, we have
Theorem 17.2.4. (Simpson’s theorem for the circle.) Three noncollinear points
ah , bh , ch ∈ Ah2 define a unique circle. A fourth point dh ∈ Ah2 will lie on this circle
iff a1 ∧ b1 ∧ c1 = 0 where

                            a1 =
                               ˙ (bh ∧ ch ) ∩ {[i(bh − ch )] ∧ dh }
                            b1 =˙ (ch ∧ ah ) ∩ {[i(ch − ah )] ∧ dh }
                            c1 =
                               ˙ (ah ∧ bh ) ∩ {[i(ah − bh )] ∧ dh }


Proof. Using the above formula above for evaluating the meets, we find that

                 a1 =(b
                    ˙ h − ch ) · (dh − ch ) bh − (bh − ch ) · (dh − bh ) ch ,

                  b1 =(c
                     ˙ h − ah) · (dh − ah) ch − (ch − ah ) · (dh − ch) ah ,
and
                 c1 =(a
                    ˙ h − bh ) · (dh − bh ) ah − (ah − bh ) · (dh − ah ) bh .
These points will be collinear if and only if a1 ∧ b1 ∧ c1 = 0, but

a1 ∧ b1 ∧ c1 =
             ˙ {[(bh − ch ) · (dh − ch )][(ch − ah ) · (dh − ah)][(ah − bh ) · (dh − bh )]
    − [(ch − ah ) · (dh − ch )][(ah − bh ) · (dh − ah )][(bh − ch) · (dh − bh )]}ah ∧ bh ∧ ch

   Note that the right-hand side of the last equation only involves differences of the
points ah , bh , ch , dh and that these differences lie in the tangent plane R2 of Ah2 .
304                                              17 Non-euclidean and Projective Geometries


Without loss of generality, we can assume that the center of the circle is the point e3
and that the circle has radius ρ . Using normalized points (17.10), it is not difficult
to show that
                                       ρ 2 − d2h − 1
                      a1 ∧ b1 ∧ c1 =                 (ah ∧ bh ∧ ch )
                                           4ρ 2
                                             ρ 2 − d2 − 1
           ⇐⇒ (b1 − a1 ) ∧ (c1 − b1 ) =                   (bh − ah ) ∧ (ch − ah)
                                                 4ρ 2
Since the points ah , bh , ch are not collinear, ah ∧ bh ∧ ch = 0, from which it follows
that a1 ∧ b1 ∧ c1 = 0 iff d2h − 1 = ρ 2 .                                               
    Note in the proof that the distance of the point dh on the circle of radius ρ in the
affine plane Ah2 , centered at the point e3 , is defined by ρ 2 = (dh − e3 )2 = d2h − 1.



Exercises

1. For Ahn ⊂ Rn+1 , show that

                               Ar ∩ Bs =[(A
                                       ˙    r ∪ Bs ) · Bs ] · Ar .

2. For Ahn ⊂ Rn+1 , show that

                              Ar ∪ Bs =
                                      ˙ Ar ∧ [Ar (Ar ∩ Bs )].
3. Given a = (1, 2, 1), b = (−1, 2, 3), c = (−2, 1, −1), and d = (1, 1, −2) ∈ R3 :
   (a) Find (a ∧ b) ∪ (c ∧ d). (b) Find (a ∧ b) ∩ (c ∧ d).
   (b) Find (a ∧ c) ∪ (d ∧ d). (b) Find (a ∧ c) ∩ (b ∧ d).
4. Given ah = (1, 2, 1), bh = (−1, 2, 1), and ch =√(1, −2, 1) ∈ Ah2 ⊂ R3 . Show by
   using Simpson’s theorem that the point dh = ( 5, 0, 1) lies on the circle through
   the points ah , bh , ch .



17.3 Projective Geometry

The projective n-plane Π n is closely related to the affine n-plane Ahn ⊂ Rn+1 . It is
the purpose of this section, and the next two sections, to explain this relationship
and what led Cayley to make his famous proclimation that “projective geometry is
all of geometry.” The points of projective geometry include all of the points (rays)
xh = x + en+1 of the affine plane Ahn and, in addition, the points on an ideal (n − 1)-
hyperplane at infinity which are called ideal points. Each line xh ∧ en+1 in A n for
x ∈ Rn , x = 0 meets the ideal (n − 1)-hyperplane i = e1···n in the unique ideal point
{x}ray , i.e., xray ∪ i =
                        ˙ x ∧ i = 0. Formally,
17.3 Projective Geometry                                                              305


   Π n := Ahn ∪ {xray | x ∈ Rn and x = 0} = {yray | y ∈ Rn+1 , and y = 0}.     (17.11)

   The association of points in the projective n-plane with rays, or directions from
the origin, is quite natural. If we think about a point of light being located at the
origin, then the rays of light will radiate outward in all possible directions— each
direction represented by the direction of a nonzero vector from the origin. In this
association, the orientation of the vector is unimportant; the nonzero vector v ∈ Rn+1
represents the same point in Π n as the nonzero vector −v ∈ Rn+1 . In order to express
this idea more precisely, we write

                                               Rn+1
                                       Πn =
                                          ˙         .                            (17.12)
                                                R∗
We say that a set of n + 1 points (a)(n+1) ∈ Π n is in general position if the vectors
(a)(n+1) ∈ Rn+1 are linearly independent, i.e., a(n+1) = 0.
   Linear transformations are a natural tool and play a crucial role in the study of
the projective n-plane Π n embedded in Rn+1 . We have the following important
Definition 17.3.1. By a projective transformation f between two sets of (n + 1)
points in Π n in general position, we mean a nonsingular linear transformation f
with the property that

                           f (a)(n+1) = (a)(n+1) [ f ] = (b)(n+1) ,

where [ f ] is the real (n + 1)-square matrix of the transformation with det( f ) = 0.
   The theory of linear transformations developed in earlier chapters can be
immediately applied to give key results in projective geometry. Any theorem
about linear transformations on Rn+1 translates into a corresponding theorem in
the projective geometry of Π n . We will present a simple proof of the classical
Desargues’ configuration, a basic result of projective geometry, in the projective
plane Π 2 embedded in R3 . We do so to emphasize the point that even though
geometric algebra is endowed with a metric, there is no reason why we cannot use
the tools of this structure to give a proof of this metric independent result, which is
also valid in the affine plane Ah2 and in the Euclidean plane R2 .
   Two distinct points a, b ∈ Π 2 define the projective line a ∧ b = 0, and a third
point c ∈ Π 2 lies on this line (is collinear) if and only if a ∧ b ∧ c = 0. Suppose now
that a, b, c, d ∈ Π 2 are such that no 3 of them are collinear. Then the meet of the
projectives lines a ∧ b and c ∧ d is the unique point d ∈ Π 3 defined by

 d=
  ˙ (a ∧ b) ∩ (c ∧ d) =
                      ˙ (a ∧ b) · [(a ∧ b ∧ c) · (c ∧ d)] =
                                                          ˙ (a × b) × (c × d). (17.13)

This formula is considerably simpler than the corresponding formula (17.8) that we
derived for the meet in the affine plane.
306                                              17 Non-euclidean and Projective Geometries

Fig. 17.3 Desargue’s                                                 c1
configuration




                                                          3




                                                      2
                                                                          1          c3
                                                                                c2



   Refering to Fig. 17.3, we are now ready to prove
Theorem: Desargues’ Configuration 17.3.2. Let a1 , a2 , a3 and b1 , b2 , b3 be the
verticies of two triangles in Π 2 , and suppose that

 (a1 ∧ a2 ) ∩ (b1 ∧ b2 ) =
                         ˙ c3 , (a2 ∧ a3 ) ∩ (b2 ∧ b3 ) =
                                                        ˙ c1 , (a3 ∧ a1 ) ∩ (b3 ∧ b1 ) =
                                                                                       ˙ c2 .

Then c1 ∧ c2 ∧ c3 = 0 if and only if there is a point p such that

                       a1 ∧ b1 ∧ p = a2 ∧ b2 ∧ p = a3 ∧ b3 ∧ p = 0.

Proof.
                       a1 ∧ b1 ∧ p = 0              p = α1 a1 + β1 b1
                       a2 ∧ b2 ∧ p = 0   ⇐⇒          p = α2 a2 + β2 b2
                       a3 ∧ b3 ∧ p = 0               p = α3 a3 + β3 b3
but this, in turn, implies that
                         α1 a1 − α2 a2 = −(β1 b1 − β2b2 ) = c3 ,
                         α2 a2 − α3 a3 = −(β2 b2 − β3b3 ) = c1 , and
                         α3 a3 − α1 a1 = −(β3 b3 − β1b1 ) = c2 .

Taking the sum of the last three equalities gives c1 + c2 + c3 = 0, which implies that
c1 ∧ c2 ∧ c3 = 0. Since the above steps can be reversed, the other half of the proof
follows.                                                                            
   We mentioned earlier, when defining the meet and join operation, the powerful
principle of duality that exists in projective geometry. This principle is most
simply illustrated by considering points and lines which are dual objects in the
projective plane Π 2 , although the same principle applies relating points and (n − 1)-
hyperplanes in Π n . By the principle of duality, any valid statement about points and
17.3 Projective Geometry                                                              307


lines in the projective plane Π 2 can be changed into an equally valid statement
about lines and points in Π 2 . It follows that it is only necessary to prove one of the
statements, the proof of the dual statement following automatically by the principle
of duality.
    For example, given three distinct points a, b, c ∈ Π 2 , the statement (a ∧ b) ∧ c = 0
which means that the projective point c is on the projective line a ∧ b, is equivalent
to the dual statement that [i(a ∧ b)] ∧ (ic) = 0 which means that the point i(a ∧ b) is
on the line ic, where i = e123 is the unit pseudoscalar element in G3 . The equivalence
of these statements follows from the trivial algebraic identity

      (a ∧ b) ∧ c =
                  ˙ < (a ∧ b)c >3 =
                                  ˙ < [i(a ∧ b)](ic) >3 =
                                                        ˙ [i(a ∧ b)] ∧ (ic).

   A more substantive example is the classical theorem of Pappus relating collinear
points and the corresponding dual theorem of Pappus which relates concurrent lines:
Theorem of Pappus 17.3.3. Given triplets of points a, b, c and a , b , c respectively
on two distinct lines in Π 2 and letting

                                  ˙ (a ∧ b ) ∩ (a ∧ b)
                                 p=
                                  ˙ (a ∧ c ) ∩ (a ∧ c)
                                 q=
                                  ˙ (b ∧ c ) ∩ (b ∧ c),
                                 r=

then p ∧ q ∧ r = 0.
Proof. Since c is on the line a ∧ b, c = α a + β b for α , β ∈ R. Similarly,

                                    c = α  a + β b

for α  , β  ∈ R. Using (17.13), we find that

                    ˙ (a × b ) × (a × b), q =
                   p=                         ˙ (a × c) × (a × c)

and
                                 ˙ (b × c ) × (b × c).
                                r=
The remainder of the proof consists in establishing the vector analysis identity that

                            p ∧ q ∧ r = e123 (p × q) · r = 0.

                                                                                        
See Fig. 17.4.
308                                                17 Non-euclidean and Projective Geometries




                                      c
                                                                                    a
                          b                                                                 b
                 a                                                                      c
                                                         s
                                                                                c
                      a       b                                    r        a
                                                                                b
                                           c                           q


Fig. 17.4 Theorem of Pappus for points and dual theorem of Pappus for lines


   We now dualize the theorem of Pappus to obtain
Dual Theorem of Pappus 17.3.4. Given triplets of concurrent lines ia, ib, ic and
ia , ib , ic respectively on two distinct points in Π 2 and letting

                                     ˙ (ia ∧ b ) ∩ (ia ∧ b)
                                  ip =
                                     ˙ (ia ∧ c ) ∩ (ia ∧ c)
                                  iq =
                                     ˙ (ib ∧ c ) ∩ (ib ∧ c),
                                  ir =

then (ip) ∩ (iq) =
                 ˙ (iq) ∩ (ir).
Proof. Since the line ic is concurrent with the lines ia and ib and ic is concurrent
with the lines ia and ib , it follows that ic = α ia + β ib for α , β ∈ R. Similarly,

                                     ic = α  ia + β  ib
for α  , β  ∈ R. Using (17.13), we calculate
                        ˙ (ia ∧ b ) ∧ (ia ∧ b) =
                     ip =                        ˙ (a × b ) ∧ (a × b),
                        ˙ (ia ∧ c ) ∧ (ia ∧ c) =
                     iq =                        ˙ (a × c ) ∧ (a × c),

and
                         ˙ (ib ∧ c ) ∧ (ib ∧ c) =
                      ir =                        ˙ (b × c ) ∧ (b × c).
The remainder of the proof consists in showing that

                  (ip) ∩ (iq) =
                              ˙ (iq) ∩ (ir)        ⇐⇒          p×q =
                                                                   ˙ q × r,
which is equivalent to the vector analysis identity

                          (p × q) × (q × r) = [(p × q) · r]q = 0.
                                                                                                
See Fig. 17.4.
17.3 Projective Geometry                                                                   309

Fig. 17.5 Given 3 points
a, b, c on a line in Π n , a                                                  o
fourth point d can always be
constructed that is                                              q
harmonically related to the
given three points                                                    r           s



                                                            a             b       c    d



   Two useful tools of projective geometry are the concept of harmonically related
points on a line and the cross ratio of points on a line. Suppose that we are given
three distinct points a, b, c on a line in the projective plane Π n . This means that
a ∧ b ∧ c = 0, but a ∧ b, b ∧ c and a ∧ c are all nonzero. We will now construct a
fourth point d ∈ Π n on the line a ∧ b harmonically related to a, b, c in that order.
The construction is shown in Fig. 17.5.
1. Choose any point o ∈ Π n such that o ∧ a ∧ b = 0 and draw the lines a ∧ o, b ∧ o
   and c ∧ o.
2. Choose any point q on the line a∧o, which means that q∧a∧b = 0, and construct
   the line q ∧ c. Now let r = ˙ (q ∧ c) ∩ (o ∧ b) and construct the line a ∧ r.
3. Let s =˙ (a ∧ r) ∩ (o ∧ c). The point d = ˙ (q ∧ s) ∩ (a ∧ b).
   The point d is said to be harmonically related to the points a, b, c in that order.
Symbolically, we write H (a, b, c, d) to express this relationship.
   To see analytically that the point d on the line a ∧ b is uniquely determined by the
points a, b, c and independent of the choice of the points o and q, we carry out the
following calculations in Π 2 . Let a, b ∈ Π 2 such that a ∧ b = 0, and let c = α a + β b
be any point on the line joining a and b. Now choose any point o ∈ Π 2 such that
a ∧ b ∧ c = 0 so that the points a, b, o are not collinear, and define q = sa + to. Using
(17.13), we calculate successively

              q ∧ c = (sa + tc) ∧ (α a + β b) = sβ a ∧ b + α tc ∧ a + t β c ∧ b,

                       r=
                        ˙ (q ∧ c) ∩ (o ∧ b), s =
                                               ˙ (a ∧ r) ∩ (o ∧ c),
and finally
                               d=                   ˙ 2α a + β b.
                                ˙ (q ∧ s) ∩ (a ∧ b) =                                 (17.14)
Note that the final result depends only on the choice of values α and β , which
determine the position of the point c on the line a ∧ b, but not upon the values of s
and t which determine the position of the point q on the line o ∧ a.
310                                                17 Non-euclidean and Projective Geometries


  Given four points a, b, c, d on a line in Π n , at least three of which are distinct,
another important invarient is the cross ratio r(a, b, c, d) of those points, defined by

                                                                b·c b·d
                                                          det
                                  (a ∧ b)(c ∧ d)                a·c a·d
                  r(a, b, c, d) =                =                          .        (17.15)
                                  (c ∧ b)(a ∧ d)              b·a b·d
                                                          det
                                                              c·a c·d

The points a, b, c, d are harmonically related iff r(a, b, c, d) = −1. In symbols,
                      H (a, b, c, d)      ⇐⇒          r(a, b, c, d) = −1.            (17.16)

This relationship can be checked analytically simply by substituting in the har-
monically related points a, b, c, d just found by using (17.14). Any variation of the
position of the point d on the line a ∧ b will give a value of the cross ratio different
than −1, as can also be easily checked analytically.
   Consider now the case of a projective transformation f on the projective line
Π 1 embedded in R2 . From (8.9), the spectral decomposition of a nonsingular linear
transformation f on R2 can only be of the two possible types:

                        f = λ1 p1 + λ2 p2        or    f = λ1 p1 + q1 ,              (17.17)

where the eigenvalues λ1 and λ2 are both nonzero and q21 = 0.
Definition 17.3.5. A nonidentity projectivity of a line onto itself is elliptic,
parabolic, or hyperbolic, if it has no, one, or two fixed points.
It follows from (17.17) that f is elliptic if λ2 = λ 1 are complex conjugate (no real
eigenvalues), parabolic if f = λ1 p1 + q1 , and hyperbolic if λ1 = λ2 and are both
real.
    Using the outermorphism rule 7.1.1,
                                                 f [(a ∧ b)] f [(c ∧ d)]
              r( f (a), f (b), f (c), f (d)) =
                                                 f [(c ∧ b)] f [(a ∧ d)]
                                                 (a ∧ b)(c ∧ d)
                                           =                    = r(a, b, c, d),
                                                 (c ∧ b)(a ∧ d)

which shows that a projectivity of a line preserves the cross ratio r(a, b, c, d) of four
points on that line. Consequently, by (17.16), the harmonic property of four points
on a projective line is also preserved under a projective transformation.
   By an involution f on the projective line Π 1 , we mean a nonsingular linear
transformation, which is not of the form f = λ 1, i.e., f is not a multiple of the
identity operator 1, and f 2 = λ 2 . It immediately follows that the involution f must
be one of the forms
17.3 Projective Geometry                                                                     311


                           f = λ p1 − λ p2      or    f = λ p1 + q1

for some nonzero λ ∈ R∗ . In other words, an involution on a projective line must be
either elliptic or hyperbolic, respectively.



Exercises

1. Prove the “only if” part of Desargue’s theorem by reversing the steps of the “if”
   part.
2. In order for d to be well defined in (17.14), for b = (b1 , b2 , b3 ) and s = (s1 , s2 , s3 ),
   the denominator s1 s3 (b1 − 2b2 − b3 + b2 s2 )3 must not be zero. Explain what
   conditions this places on the choices of the points in the construction of the
   harmonically related points H (a, b, c, d).
3. Give a geometric proof, based on Desargues’ theorem, of

                         H (a, b, c, d)     ⇐⇒        r(a, b, c, d) = −1.

4. Let f (x) = axa be defined for x ∈ R2 , where a ∈ R2 is nonzero. The linear
   transformation f defines a projectivity on the projective line Π 1 .
   (a) Is f elliptic, parabolic, or hyperbolic?
   (b) What about f = −axa?
                          4 1
5. (a) Suppose [ f ] =            . Is f elliptic, parabolic, or hyperbolic?
                         −1 2
                         41
   (b) Suppose [ f ] =         . Is f elliptic, parabolic, or hyperbolic?
                         12
                         1 −4
   (c) Suppose [ f ] =            . Is f elliptic, parabolic, or hyperbolic?
                         2 1
6. (a) Determine the cross ratio of the points a) a = (2, 1), b = (3, 2), c = (−1, 4),
       d = (1, 1).
   (b) Construct a point d that is harmonically related to a = (2, 1), b = (3, 2),
       c = (−1, 4).
   (c) Determine the cross ratio of the points a) a = (3, 5), b = (4, 1), c = (−2, 7),
       d = (2, 3).
   (d) Construct a point d that is harmonically related to a = (3, 5), b = (4, 1),
       c = (−2, 7).
7. (a) Let a, b, c ∈ Π 2 and suppose that a ∧ b = 0. Show that the projective point c
       lies on the projective line a ∧ b if and only if (a ∧ b) ∧ c = 0.
   (b) By a nondegenerate projective r-simplex in Π n , where r < n, we mean a
       set of points (p)(r+1) with the property that p(r+1) = ∧(p)(r+1) = 0. Show
       that a point b lies on the nondegenerate r-simplex p(r+1) if and only if
       p(r+1) ∧ b = 0.
312                                                17 Non-euclidean and Projective Geometries


8. (a) Given the projective triangle defined by the points (1, 1, 2), (−1, 1, 0) and
       (2, 1, 1) in Π 2 , find the matrix [ f ] of the projective transformation f which
       maps this triangle into an arbitrary projective triangle (a)(3) defined by ai =
       (ai1 , ai2 , ai3 ) for i = 1, 2, 3, where det(a)(3) = 0.
   (b) Give a geometric interpretation of this result in terms of the shadow a cutout
       of the given triangle would cast when held in various positions between a
       point source of light and a screen.
9. Find the 2-ray Sx∧y    ∗    ∈ Π 2 that corresponds to the projective line through the
   projective points x = (1, 2, 1) and y = (2, −1, 2) in Π 2 . Is the projective point
   w = (3, 1, 3) on this projective line?



17.4 Conics

We now turn our attention to the study of projective transformations on Π 2 . A
projective transformation on Π 2 , which is embedded in R3 , is simply a nonsingular
linear transformation f on R3 . Each projective transformation on Π 2 defines a
unique conic, as we now explain.
   Let f be a projectivity on Π 2 . Given three noncollinear points a, x1 , x2 ∈ Π 2 , let
b = f (a), y1 = f (x1 ), and y2 = f (x1 ). Given that the points are noncollinear means
that a ∧ x1 ∧ x2 = 0, so they form a basis of R3 . Thus, any nonzero vector xs ∈ R3 ,
which represents a point in Π 2 , is of the form

                      xs = sa a + s1x1 + s2 x2 ,    for sa , s1 , s2 ∈ R.                      (17.18)
The projectivity f defines a relationship between two pencils of lines through the
points a and b. The lines a ∧ x1, a ∧ x2 , and a ∧ xs correspond to the lines f (a ∧ x1 ) =
b∧y1 , f (a ∧x2 ) = b∧y2 , and f (a ∧xs ) = s1 b∧y1 + s2 b∧y2 , respectively, as shown
in Fig. 17.6. The property of interest here is to note that the intersections of the
correlated lines of the two pencils define a unique conic in Π 2 .
    Given the projective relationship f between the pencils of lines through the points
a and b = f (a), any point x on the conic defined by f must satisfy x = (a ∧xs )∩(b∧
ys ). In order that the point x is incident to the line a ∧xs , we must have x ∧a ∧xs = 0.


                                                                                          y2
                                                                                  x1               x2
                                                                            y1

                                                                                                        b
Fig. 17.6 Two projectively
related pencils of lines
located at the points a and                                        a
                                                                                      x
b = f (a) in Π 2 define a
conic, shown here as an                                                                   xs
ellipse                                                                          ys
17.4 Conics                                                                          313


Similarly, in order that x is incident to the line b ∧ ys = f (a ∧ xs ), we must have
x ∧ b ∧ ys = 0. From these two equations, it follows that

              s1 x ∧ a ∧ x1 + s2 x ∧ a ∧ x2 = 0 = s1 x ∧ b ∧ y1 + s2 x ∧ b ∧ y2
or, equivalently,
                                 s1   x ∧ a ∧ x2 x ∧ b ∧ y2
                             −      =           =           ,
                                 s2   x ∧ a ∧ x1 x ∧ b ∧ y1
which by cross multiplying gives the desired relationship

                (x ∧ a ∧ x2)(x ∧ b ∧ y1) − (x ∧ a ∧ x1)(x ∧ b ∧ y2) = 0.          (17.19)

  The expression (17.19) is quadratic in x and can be used to define an associated
quadratic form

               q(x) = (x ∧ a ∧ x2)(x ∧ b ∧ y1 ) − (x ∧ a ∧ x1)(x ∧ b ∧ y2)
                          ⎛                          ⎞
                             a·x     a·b      a · y2
                    = det ⎝x1 · x x1 · b x1 · y2 ⎠
                             x·x     x·b      x · y2
                            ⎛                           ⎞
                               a·x     a·b       a · y1
                      − det ⎝x2 · x x2 · b x2 · y1 ⎠
                                  x·x      x·b      x · y1
                     = (x)(3) S(x)T(3) ,                                          (17.20)

where S is the matrix of the quadratic form q with respect to the standard basis (e)(3)
of R3 . The quadratic form q(x) also defines a symmetric linear transformation
                                            1
                                      g(x) = ∂x q(x),                             (17.21)
                                            2
which, in turn, defines the bilinear form

                                      S(x, y) = x · g(y).                         (17.22)

   Before going further, it is worthwhile to consider an example. Let

                    a = 1 0 1 , x1 = 0 2 1 ,

                    x2 = 1 2 1 , y1 = −2 −1 1 , y2 = −2 3 1

be points in the projective plane Π 2 . Since

                          a ∧ x1 ∧ x2 = 0 and b ∧ y1 ∧ y2 = 0,
314                                                   17 Non-euclidean and Projective Geometries


the points are noncollinear in Π 2 . The linear mapping f : R3 → R3 , such that

                             f a x1 x2 = a x1 x2 [ f ] = b y1 y2

is specified by the matrix
                                            ⎛                    ⎞
                                             0            4    0
                                   [ f ] = ⎝−2            5
                                                          2    0⎠ .
                                             2        −6       1

   Using (17.18)–(17.20), we then find the quadratic form
                     ⎛                               ⎞       ⎛                               ⎞
                   a·x            a·b        a · y2            a·x          a·b      a · y1
       q(x) = det ⎝x1 · x         x1 · b     x1 · y2 ⎠ − det ⎝x2 · x        x2 · b   x2 · y1 ⎠
                   x·x            x·b        x · y2            x·x          x·b      x · y1
                     ⎛                                                         ⎞
                          x1 + x3                 3                 −1
               = det ⎝ 2x2 + x3                  −3                  7         ⎠
                      x21 + x22 + x23       2x1 − 2x2 + x      −2x1 + 3x2 + x3
                         ⎛                                                           ⎞
                             x1 + x3                   3                   −1
                 − det ⎝x1 + 2x2 + x3                 −1                   −3        ⎠
                         x21 + x22 + x23         2x1 − 2x2 + x3       −2x1 − x2 + x3

               = 8x21 + 5x1x2 + 4x22 − 24x1x3 − 2x2x3 + 16x23.

   Using (17.21) and (17.22), we also find the associated linear mapping

            1                  5         5
      g(x) =  ∂x q(x) = 8x1 + x2 − 12x3 x1 + 4x2 − x3 −12x1 − x2 + 16x3
            2                  2         2
            ⎛                   ⎞⎛ ⎞
                8      5
                       2   −12      x1
          = ⎝ 52       4   −1   ⎠ ⎝ x2 ⎠
              −12 −1        16      x3

and the bilinear mapping S(x, y) for which
                                        ⎛                        ⎞⎛ ⎞
                                             8        5
                                                      2       −12   y1
 S(x, y) = x · g(y) = x1 x2 x3 ⎝ 52                  4        −1 ⎠ ⎝y2 ⎠
                                −12                  −1       16       y3
                5                5
      = 8x1 y1 + x2 y1 − 12x3y1 + x1 y2 + 4x2y2 − x3 y2 − 12x1y3 − x2 y3 + 16x3y3 .
                2                2
                                                                                            (17.23)
17.4 Conics                                                                                315

Fig. 17.7 The quadratic form
q(x) = 0 defines a projective
cone in R3 . Three distinct
affine planes cut the cone in
an ellipse, hyperpola, and
parabola




   Using the methods of Sect. 9.4, we can complete the square for (17.23), getting

          S(x, y) = (x)(3) S(y)T(3) = (x)(3) (A−1 )T AT SAA−1(y)T(3)
                            ⎛              ⎞
                             1 0         0
                  = (x)A(3) ⎝0 1         0 ⎠ ((y)A(3) )T = xA1 yA1 + xA2 yA2 − xA3 yA3 .
                             0 0 −1

By intersecting this projective cone with the affine planes, defined by the equations
xA3 = 1, xA2 = 1, and xA2 + xA3 = 1, we get the equations of an ellipse, (xA1 )2 + (xA2 )2 = 1;
hyperbola, (xA3 )2 − (xA1 )2 = 1; and parabola, (xA1 )2 + 2xA2 = 1, in the respective affine
planes defined by these equations, shown in Fig. 17.7. The points on the projective
cone in Π 2 are all the rays (lines) on the cone passing through, but not including
the origin. The ideal line for the affine plane xA3 = 1 is xA3 = 0. The ideal line for the
affine plane xA2 = 1 is xA2 = 0, and the ideal line for the affine plane xA2 + xA3 = 1 is
xA2 + xA3 = 0.
    By the theory of quadratic forms, worked out in Sect. 9.4 of Chap. 9, we can
find a coordinate system of R3 in which the general quadratic form q(x), given in
(17.20), is reduced to a sum of squares of the form

                       q(x) = (κ )(3) (x)T(3) = κ1 x21 + κ2x22 + κ3x23 ,
316                                           17 Non-euclidean and Projective Geometries


where each κi = −1, 0, 1 for i = 1, 2, 3. This reduces to the 6 distinct cases

                       (κ )(3) = { 1 1 1 , 1 1 −1 , 1 1 0 ,

                                 1 −1 0 , 1 0 0 , 0 0 0 }                        (17.24)

in the projective plane Π 2 , [22, p.166].
    Other concepts that arise in the study of conics in Π 2 are the idea of conjugate
points and the concept of polarity with respect to a given nondegenerate conic.
We can hardly give more than definitions of these beautiful ideas.
    For x, y ∈ Π 2 , let x ·g(y) be the associated bilinear form of a given nondegenerate
conic q(x) = 0 in Π 2 .
Definition 17.4.1. Two points x, y ∈ Π 2 are said to be conjugate with respect to the
conic q(x) = 0 if x · g(y) = 0.
Definition 17.4.2. Given a point y ∈ Π 2 and two distinct points y1 , y2 ∈ Π 2 , the
projective line y1 ∧ y2 is called the polar line of the point y if g(y) · (y1 ∧ y2 ) = 0.
The point y is said to be the pole of its polar line y1 ∧ y2 .
   Clearly, if y1 ∧ y2 is the polar line of the point y, then y1 ∧ y2 =
                                                                      ˙ ig(y) where
i = e123 ∈ G3 , since

                          g(y) · [ig(y)] = [g(y) ∧ g(y)]i = 0.

Also if y1 ∧ y2 =˙ ig(y), using the fact that g(y) is a symmetric nonsingular linear
operator on R3 , we can with the help of (7.20) solve this equation for the pole y in
terms of its polar line y1 ∧ y2 , getting

                  ˙ g−1 (i y1 ∧ y2 ) =
                 y=                  ˙ g(y1 ∧ y2 )i = g(y1 ) × g(y2),            (17.25)

where g is the outermorphism extension of g to the geometric algebra G3 . Thus,
there is a one-to-one correspondence between polar lines py and their corresponding
poles y with respect to a given nondegenerate conic q(x) = 0.
   The following theorem gives the relationship between a given nondegenerate
conic q(x) = 0 in Π 2 and the polar line py with its pole y for any point y ∈ Π 2 .
The theorem is in three parts, depending upon whether the polar line py intersects
the the conic in two points, is a tangent line to the conic, or does not intersect the
conic.
Theorem 17.4.3. Given the nondegenerate conic q(x) = 0 and a point y ∈ Π 2 :
(a) The polar line px = ˙ ig(x) to a point x on the conic q(x) = 0 is the tangent line
    to the conic at the point x.
(b) If the polar line py in Π 2 intersects the conic at two distinct points x1 and x2 ,
    then py =˙ x1 ∧ x2 and

                          ˙ [ig(x1 )] ∩ [ig(x2 )] =
                         y=                       ˙ g(x1 ) × g(x2).
17.4 Conics                                                                            317


(c) If the polar line py = ig(y) to the point y does not intersect the conic, then each
    line through the point y will meet the conic at two distinct points, say, x1 and
    x2 . If lx1 and lx2 are the tangent lines to the conic at the points x1 and x2 , then

                        py ∧ [lx1 ∩ lx2 ] = py ∧ (g(x1 ) × g(x2)) = 0.

Proof. (a) Suppose that x1 · g(x1 ) = 0 so that x1 is on the conic. Since x1 ∧
   (ig(x1 )) = (x1 · g(x1 ))i = 0, it follows that the polar line px1 = ig(x1 ) passes
   through the point x1 . Now suppose that px1 = x1 ∧ x2 = 0 for a second point x2
   on the conic which is distinct from x1 . But then, any point y = α x1 + β x2 would
   also be on the conic since

     g(y) · y = α 2 g(x1 ) · x1 + 2αβ g(x1) · x2 + β 2g(x2 ) · x2 = 2αβ g(x1 ) · x2 = 0.
                                                                                  (17.26)

    However, this is impossible since the line x1 ∧ x2 will cut the conic in at most
    two points. The last equality in (17.26) follows from

    0 = g(x1 )· px1 =
                    ˙ g(x1 )·(x1 ∧x2 ) = (g(x1 )·x1 )x2 −(g(x1 )·x2 )x1 =
                                                                        ˙ −(g(x1 )·x2 )x1 .


(b) Suppose that py = ˙ ig(y) = x1 ∧ x2 where x1 and x2 are distinct points on the
    conic. Then by part a) of the theorem, lx1 = ig(x1 ) and lx2 = ig(x2 ) are the
    tangent lines through the conic at the points x1 and x2 , respectively. But by
    (17.25),
                   y=
                    ˙ g(x1 ) × g(x2) =
                                     ˙ [ig(x1 )] ∩ [ig(x2)] = lx1 ∩ lx2 .
(c) Let py = ig(y) be any polar line which does not meet the conic, and let x1 be
    any point on the conic. Then

               x1 ∧ (ig(y)) = i(x1 · g(y)) = i(g(x1 ) · y) = y ∧ (ig(x1)) = 0

    for any point x1 on the conic implies that y is not on any tangent line to the
    conic. This means that every line that meets the point y will meet the conic in
    two distinct points, say, x1 and x2 , so that y ∧ x1 ∧ x2 = 0.
    Since y ∧ x1 ∧ x2 = 0, it follows that

         g(y ∧ x1 ∧ x2 ) = g(y) ∧ g(x1) ∧ g(x2 ) = [ig(y)] ∧ [g(x1) × g(x2)] = 0.

Letting lx1 = ig(x1 ) and lx2 = ig(x2 ) be the tangent lines to the conic at the points
x1 and x2 , it then follows that

                      py ∧ [lx1 ∩ lx2 ] = py ∧ (g(x1 ) × g(x2)) = 0.

                                                                                           
Figure 17.8 constructs the polarity for the cases b) and c) of the theorem.
318                                               17 Non-euclidean and Projective Geometries




                                                               lx
                                                                1
              x1                                          x1
                    py                                              y
          y        x2                                          x2       l x2
                                                     py

Fig. 17.8 The polarity between a pole y and its polar line py = ig(y) is shown for the cases (b)
and (c) of the theorem


Exercises

1. For x = (x1 , x2 , x3 ) ∈ R3 , define the quadratic form q(x) = x21 − 4x1 x3 + 3x22 −
   x23 .
   (a) Find the associated symmetric linear tramsformation g(x), defined in (17.21),
       and the matrix S of the bilinear form √   x · g(y).
   (b) Show that the points x = (1, 0, −2 ± 5) satisfy the equation q(x) = 0, and
       find the polar lines tangent to the conic at these points. Find the projective
       line that passes through these two points and the pole of this line.
   (c) Find a point y = (y1 , y2 , y3 ) ∈ Π 2 which is conjugate to the point x=(1,
                                                                               ˙    2, 3) ∈
       Π 2.
   (d) Given the two points x = (1, −1, 1) and y = (2, 2, 2) in Π 2 , find the projective
       line x ∧ y which passes through these points. Find the projective point p =
       (p1 , p2 , p3 ) which is the pole of the polar line x ∧ y.
2. For x = (x1 , x2 , x3 ) ∈ R3 , define the quadratic form q(x) = x21 + 2x1 x2 + x22 +
   4x2 x3 + 4x23.
   (a) Find the associated symmetric linear tramsformation g(x), defined in (17.21),
       and the matrix S of the bilinear form x · g(y).
   (b) Show that the point x = (1, −1, 0) satisfies the equation q(x) = 0, and find
       the polar line tangent to the conic at this point.
   (c) Find a point y = (y1 , y2 , y3 ) ∈ Π 2 which is conjugate to the point x=(1,
                                                                               ˙    2, 3) ∈
       Π 2.
   (d) Given the two points x = (1, −1, 1) and y = (2, 0, 2) in Π 2 , find the projective
       line x ∧ y which passes through these points. Find the projective point p =
       (p1 , p2 , p3 ) which is the pole of the polar line x ∧ y.
17.5 Projective Geometry Is All of Geometry                                         319


17.5 Projective Geometry Is All of Geometry

We are now in a position to explain what Cauchy meant by his famous exclamation
that “projective geometry is all of geometry.” We shall only discuss the projective
plane Π 2 and some of the geometries for which Π 2 is the precusor or parent
geometry, although the discussion could be broadened to the higher dimensional
geometries for which Π n is the precursor geometry.
   Projective geometry of the real projective plane Π 2 is the study of all those
properties that remain invariant or unchanged under a projective transformation or
the composition of projective transformations. In our study of the analytic projective
geometry of Π 2 , all projective transformations are represented by nonsingular
linear transformations on R3 . Thus, the group of projective transformations GL3 (R)
consists of all linear transformations on R3 which have nonzero determinant.
The group GL3 (R) is also known as the general linear group. We will have a lot
more to say about the general linear group in the next chapter.
   The group of projective transformations GL3 (R) is the parent geometry of a host
of other geometries, only some of which we will now discuss. The affine plane
Ah2 is the subgeometry obtained from the projective plane Π 2 , by picking out the
projective line e12 in Π 2 and calling it the ideal line at infinity. Recalling (17.24),
the equation of this ideal line is the degenerate conic x23 = 0. The ordinary points of
the affine plane Ah2 are all those points of Π 2 which do not lie on the ideal line at
infinity. This definition of Ah2 agrees with Definition 17.1.1 and (17.1) given earlier.
The affine group is the subgroup of the projective transformations GL3 (R) of Π 2
which leave the ideal line fixed and map ordinary points into ordinary points.
   Let x = (x1 , x2 , 1) ∈ Ah2 , and suppose y = (y1 , y2 , 1)(e)T(3) is given such that
                                                      ⎛ ⎞
                                                       x1
                             y = f (x) = (e)(3) [ f ] ⎝x2 ⎠ .
                                                       1

Then the matrix [ f ] of the projective transformation f must be of the form
                                      ⎛               ⎞
                                        f11 f12 b1
                              [ f ] = ⎝ f21 f22 b2 ⎠ ,                       (17.27)
                                         0    0     1

where det( f ) = det[ f ] = f11 f22 − f12 f21 = 0. This is the most general projective
transformation that has the required property. We see that
                                             ⎛ ⎞          ⎛ ⎞
                                               x1           b1
                                             ⎝
                         f (x) = (e)(3) [ f ] x2 + (e)(3) b2 ⎠ ,
                                                  ⎠       ⎝
                                               0             1

which has the interpretation a projective transformation of GL2 (R) in the first two
components plus a translation in Ah2 . An affine transformation does not preserve the
angles or the area of a triangle.
320                                             17 Non-euclidean and Projective Geometries


   If we further restrict the affine group by requiring that it leaves a given involution,
called the absolute involution invariant, we obtain a similarity transformation. The
group of similarity transformations on the affine plane Ah2 is called similarity
geometry. The matrix [ f ] of such a transformation will have the form
                                   ⎛                         ⎞
                                     r cos θ  −r sin θ b1
                           [ f ] = ⎝rs sin θ  rs cos θ    b2 ⎠ ,                  (17.28)
                                        0         0       1

where r > 0 and s2 = 1.
   It is only when we further restrict the similarity transformations (17.28) of Ah2
by the requirement that det[ f ] = s, or r = 1 and s = ±1, that we obtain the familiar
Euclidean geometry R2 on the plane. Thus, a Euclidean transformation, or motion
in Ah2 , consists of reflections when r = 1 and s = −1, rotations when r = 1 = s, and
translations.
   The path
                    Π 2 −→ Ah2 −→ similarity −→ Euclidean
to Euclidean geometry is only one of a number of different paths that are available
to us. There are other paths that lead us instead to hyperbolic geometry and elliptic
geometry. To get from Π 2 to hyperbolic geometry H 2 , we pick out a nondegenerate
conic of the form x21 + x22 = x23 , which we call the absolute conic. The points of
H 2 are those points of the form x21 + x22 < x23 , called ordinary points. The points
x21 + x22 = x23 on the conic are called ideal points, and those satisfying x21 + x22 > x23
are called ultra ideal. The reader is encouraged to further study these fascinating
geometries. A good elementary account can be found in [22, p.229–260].
   http://en.wikipedia.org/wiki/Hyperbolic geometry
    There is still another path that is available to us, and that is the path to elliptic
geometry obtained by selecting a nondegenerate absolute conic of the form x21 +
x22 + x23 = 0. Of course, there are no real points on this conic so all the points of Π 2
are points of the elliptic plane. For a brief introduction to elliptic geometry, see [22,
p.261-285].
   http://en.wikipedia.org/wiki/Elliptic geometry



Exercises

1. (a) Show that the similarity transformation f (x), with the matrix given in
       (17.28) with s = 1, can be equivalently expressed in the form

                                 f (x) = re 2 θ e21 xre−1/2θ e21 + b,
                                            1



       where x = (x1 , x2 , 0)(e)T(3) and b = (b1 , b2 , 1)(e)T(3) . Explain your result.
17.6 The Horosphere H p,q                                                                321


   (b) Show that the similarity transformation f (x), with the matrix given in
       (17.28) with s = −1, can be equivalently expressed in the form

                               f (x) = −re 2 θ e21 e2 xe2 re− 2 θ e21 + b,
                                                1                   1



       where x = (x1 , x2 , 0)(e)T(3) and b = (b1 , b2 , 1)(e)T(3) . Explain your result.
2. Verify that a projective transformation y = f (x), whose matrix [ f ] is of the form
   (17.27), leaves the projective line e12 invariant, i.e., f (e12 ) = ˙ e12 .



17.6 The Horosphere H p,q

We began this chapter by defining the affine n-plane Ahn as a translation of Rn in
the larger Euclidean space Rn+1 , and we saw how the concept of points in Ahn as
rays led us to the study of projective geometry. We take this idea a step further in
this section by embedding the pseudo-Euclidean space R p,q , and its corresponding
geometric algebra G p,q , in the larger pseudo-Euclidean space R p+1,q+1 and its
corresponding geometric algebra G p+1,q+1. In order to better understand the nature
of Ahlfors–Vahlen matrices and how they arise, we introduce the horosphere H p,q
in R p+1,q+1. The horosphere is a nonlinear model of the pseudo-Euclidean space
R p,q . It was first introduced for the Euclidean space Rn by F. A. Wachter, a student
of Gauss, and has been recently finding diverse applications [6, 20, 31].
   Recall (10.2) that the standard orthonormal basis of R p,q is given by

                        (e)(p+q) = (e1 , . . . , e p , e p+1 , . . . , e p+q ),

where e2i = 1 for 1 ≤ i ≤ p and e2i = −1 for p < i ≤ p + q. For the standard basis
of R p+1,q+1, we extend the standard basis of R p,q to include two new orthonormal
(anticommuting) vectors e and f with the properties that e2 = 1 and f2 = −1. The
standard basis of R p+1,q+1 then becomes
                                 (e)(n) = (e)(p+q) ∪ (e, f),
where n = p + q + 2. We also introduce two reciprocal null vectors
                                1
                             a = (e + f) and b = e − f,                               (17.29)
                                2
which play a prominant role in what follows. The null vectors a and b satisfy the
properties
                              a2 = b2 = 0           and a · b = 1.
  Now define the bivector u = ef = b∧a and idempotents u± = 12 (1 ± u). A general
geometric number G ∈ G p+1,q+1 in this basis can be written

         G = (g1 + g2u) + (g3 + g4u)e               for g1 , g2 , g3 , g4 ∈ G p,q ,   (17.30)
322                                                17 Non-euclidean and Projective Geometries


with the three operations of conjugation given by

       G† = (g†1 − g†2 u) + (
                             g3 + g4 u)e,     G− = (g−    −        −    −
                                                      1 + g2 u) − (g3 + g4 u)e, and
                                 = (
                                G    g1 − g2u) − (g†3 + g†4 u)e.                    (17.31)

   By the spectral basis of the geometric algebra G p+1,q+1 over the geometric
algebra G p,q , we mean

                               1                     u+      u+ e
                                 u+ 1        e =                  .                  (17.32)
                               e                     eu+     u−

In the spectral basis (17.32), the general element G in (17.30) takes the form of a
2 × 2 matrix over G p,q ,

                          1          1                              G      Ge    1
      G= 1        e u+      G 1 e u+   = 1                  e u+              u+
                          e          e                              eG    eGe    e
                            g1 + g2            g3 + g4       1
        = 1       e u+
                          e(g3 − g4)e        e(g1 − g2 )e    e
                          g1 + g2       g3 + g4       1
        = 1       e u+                                  ,
                          g−    −
                           3 − g4       g−    −
                                         1 − g2       e

where ege = g− for g ∈ G p,q is recognized as the operation of grade inversion
defined in (17.31). We call

                                  g1 + g2      g3 + g4    a           b
                       [G] =                          − =                            (17.33)
                                  g−    −
                                   3 − g4      g−
                                                1 − g 2   c           d

the matrix of G ∈ G p+1,q+1 over the geometric algebra G p,q. Using (17.31), we also
find that
                           g†1 − g†2   −g†3 − g†4      d −    b
                 [G† ] =                          =               .          (17.34)
                          −g3 + g4    g1 + g2     −c     a
   The (p, q)-horosphere is defined by
                        1
      H p,q = {xc | xc = xa bxa , xa = x + a for x ∈ R p,q } ⊂ R p+1,q+1.            (17.35)
                        2
                         p,q
By the affine plane Aa , we mean

                               Aap,q := {xa = x + a| x ∈ R p,q },

so the affine plane Aap,q ⊂ R p+1,q+1 is just the pseudo-Euclidean space R p,q
displaced by the null vector a ∈ R p+1,q+1. (In contrast, the affine plane Ahn was ob-
tained by displacing Rn by the unit vector en+1 ∈ Rn+1 , given in Definition 17.1.1.)
17.6 The Horosphere H p,q                                                          323


The reciprocal null vectors a and b have been previously specified in (17.29). Noting
that x2a = x2 and expanding the point xc ∈ H p,q , we say that
                      1         1                          1
                 xc =   xa bxa = (xa · b + xa ∧ b)xa = xa − x2 b
                      2         2                          2
                            1             1
                    = exp     xb a exp(− xb)                                  (17.36)
                            2             2

is the conformal representant of both x ∈ R p,q and xa ∈ Aap,q . The conformal
representant xc is a null vector for all x ∈ R p,q , since by (17.36)
                                                         2
                                1                  1
                   x2c = exp      xb a exp − xb              = a2 = 0.
                                2                  2
   The points xc are homogeneous in the sense that
                                         α xc     α xc
                                  xc =        =
                                          α     (α xc ) · b
for all nonzero α ∈ R. Given xc , it is easy to get back xa by the simple projection,

                                     xa = (xc ∧ b) · a.                       (17.37)

We can also retrieve the vector x ∈ R p,q from xc by noting that

                                 x = (xc ∧ b ∧ a) · (b ∧ a).                  (17.38)

The expression of the conformal representant xc in (17.36) is interesting because
it shows that all points on H p,q can be obtained by a simple rotation of a in the
                                                 p,q
plane of the bivector xb. The affine plane Aa and horosphere H p,q are pictured
in Fig. 17.9.
    The horosphere has attracted a lot of attention in the computer science community
because of its close relationship to the conformal group of R p,q . Any conformal
transformation in R p,q can be represented by an orthogonal transformation on the
horosphere H p,q in R p+1,q+1. We have already explored conformal transformations
on R p,q in Chap. 16, and we now show how we can connect up these ideas to
orthogonal transformations in R p+1,q+1 restricted to the horophere H p,q .
    For xc , yc ∈ H p,q ,

                                            x2         y2
                     xc · yc =     x+a−        b · y+a− b
                                            2          2
                                     1             1
                            = x · y − (x2 + y2) = − (x − y)2,                 (17.39)
                                     2             2
324                                              17 Non-euclidean and Projective Geometries




Fig. 17.9 The affine plane Aap,q and horosphere H p,q


which is −1/2 the pseudo-Euclidean distance squared between the points xc and yc .
Thus, the pseudo-Euclidean structure of R p,q is preserved in the form of the inner
product xc · yc on the horosphere. The horosphere H p,q is a nonlinear model of both
                     p,q
the affine plane Aa and the pseudo-Euclidean space R p,q .
   Let us now find the matrix [xc ], as given in (17.33), of the point xc ∈ H p,q .
Noting that
                                    1           1
                            xc = x + (1 − x2)e + (1 + x2)f
                                    2           2
when expanded in the standard basis of R p+1,q+1 and using (17.33) with
                                      1                1
                  g1 = x, g2 = 0, g3 = (1 − x2), g4 = − (1 + x2),
                                      2                2
we easily find that

                g1 + g2     g3 + g4   x           −x2         x
      [xc ] =                     − =                    =         1   −x .        (17.40)
                g−    −
                 3 − g4
                             −
                            g1 − g2   1           −x          1

  Recalling (17.36), for any y ∈ R p,q , define Sy = exp 12 yb . Calculating the
matrix of Sy , we find that
17.6 The Horosphere H p,q                                                                                325

                                             
                                             
                                          1     1                               y
                               [Sy ] = 1 + yb =                                   .
                                          2     0                               1

                                                  0 0
Noting that the matrix of the null vector [a] =       , and using (17.34), we can
                                                  1 0
reexpress the relationship (17.36) in the matrix form

                                                               1       x    0          0   1   −x
           [xc ] = [Sx aSx†] = [Sx ][a][Sx†] =                                                    .
                                                               0       1    1          0   0   1

   More generally, with the help of (17.40), (17.33), and (17.34), any transformation
of the form L(xc ) = Gxc G† for G ∈ G p+1,q+1 can be expressed in the equivalent
matrix form
                                         a       b         x                        d     − b
       [L(xc )] = [Gxc G† ] =                                      1       −x                   .     (17.41)
                                         c       d         1                        −
                                                                                     c      a

From the last equation, it is clear that for any transformation of the form L(xc ), we
can work with the simpler twistor form

                                             a       b         x   ax + b
                            T (xc ) =                            =                                    (17.42)
                                             c       d         1   cx + d

of this equation without losing any information, since the full equation (17.41) can
easily be recovered, [65, p.236].
   The general transformation L(xc ), and its twistor equivalent T (xc ), is well
defined for all values of G ∈ G p+1,q+1. However, for only certain values of G will
L : H p,q −→ H p,q . For these values of G, the twistor form T (xc ) becomes the
conformal transformations of the Ahlfors–Vahlen matrices discussed in Chap. 16.
The following table gives the equivalent expressions for the various kinds of
conformal transformations.


                                 G               [G]                            (ax + b)(cx + d)−1
                                     1             1       y
              Translation        e 2 yb                                         x+y
                                                   0       1
                                                   0       1                    1
              Inversion          e                                              x
                                                 1        0           
                                                     e2φ
                                                       1
                                                          0
                                 e 2 φu                                         eφ x
                                     1
              Dilation
                                                      0 e− 2 φ
                                                           1


                                                     y 0
              Reflection         y                                              −yxy−1
                                                     0 −y
                                                      1 0
              Transversion       eca                                            x(1 − cx)−1
                                                     −c 1
326                                                 17 Non-euclidean and Projective Geometries


   From the table, it is clear that every orthogonal transformation L(xc ) in R p+1,q+1
acting on the horosphere H p,q induces a corresponding conformal transformation
on R p,q . Rewriting a transversion in the equivalent form

                                x(1 − cx)−1 = (x−1 − c)−1 ,

it is clear that it is a composition of an inversion, a translation, and an inversion. In
terms of the corresponding matrices, we see that

                      0   1      1     −c       0     1   1           0
                                                        =               ,
                      1   0      0     1        1     0   −c          1

as expected.



Exercises

1. Let x be a point in R3 . This point can be represented by the vector xa = x + a in
   the affine plane Aa3 ⊂ R4,1 and by the null vector xc ∈ Hc3 ⊂ R4,1 . The point x ∈
   R3 can also be represented by the bivector xc ∧ b ∈ R4,1 , see Fig. 17.9. Show that
   (xc ∧ b)2 = 1 and that the origin 0 ∈ R3 is represented by the bivector a ∧ b = −u.
2. (a) Let xc ∧ yc ∧ b = (xa ∧ ya ) ∧ b represent the line segment from the point x to
        the point y in R2 . Show that

                                     (xc ∧ yc ∧ b) · a = xa ∧ ya

       and
                                     (xc ∧ yc ∧ b)2 = (x − y)2.
   (b) Show that the equation of a circle in R2 centered at the point p ∈ R2 and
       with radius r as represented in the horosphere H 2 is
                                                                                      
                                                                                   1 2
        {xc ∈ H | (xc ∧ pc ∧ b) = r } ⇐⇒
                  2                    2    2
                                                               xc ∈ H | xc · pc = − r .
                                                                      2
                                                                                   2

        Defining sr = pc + 12 r2 b, the circle can also be represented can also be
        represented as all points xc ∈ H 2 such that xc · sr = 0.
3. Let xc ∧ yc ∧ wc ∧ b represent the triangular plane segment in R2 whose vertices
   are at the points xc , yc , wc ∈ H 2 . Show that

                              (xc ∧ yc ∧ wc ∧ b) · a = xa ∧ ya ∧ wa

   and that

        (xc ∧ yc ∧ wc ∧ b)2 = (x ∧ y − x ∧ w + y ∧ w)2 = −|(x − w) ∧ (y − w)|2
17.6 The Horosphere H p,q                                                           327


   where |(x − w) ∧ (y − w)| is twice the area of the triangle in R2 with vertices at
   the points x, y, w ∈ R2 .
4. (a) Let xc , yc , wc ∈ H 2 . Show that (xc ∧ yc ∧ wc ) · b = (xc − yc ) ∧ (yc − wc ).
   (b) Let xc and yc be distinct points in H 1 , and let wc ∈ H 1 . Show that

                        xc ∧ yc ∧ wc = 0 iff      wc = xc or wc = yc .
   (c) More generally, show that xc , yc , wc ∈ H 3 and xc ∧ yc = 0 then

                     x c ∧ y c ∧ wc = 0    ⇐⇒       wc = xc , or wc = yc .

5. Given three distinct points, xc , yc , wc ∈ H 2 , show that there will always exist a
   fourth point vc ∈ H 2 with the property that

                                 (xc ∧ yc ) · (wc ∧ vc ) = 0.

6. (a) Show that three distinct points, xc , yc , wc ∈ H 2 , determine the equation of a
       unique circle if xa ∧ ya ∧ wa = 0.
   (b) Show that fourth point, dc ∈ H 2 , will lie on this circle iff

                                     d ∧ xc ∧ yc ∧ wc = 0.

       (Without loss of generality, we may assume that the center of the circle
       pc = a.)
   (c) Show that the radius r of the circle determined by the xc , yc , wc ∈ H 2
       satisfies
                                (xc ∧ yc ∧ wc )(wc ∧ yc ∧ xc )
                          r2 =                                 .
                                     (b ∧ xa ∧ ya ∧ wa )2
7. (a) Prove Simpson’s theorem 17.2.4 for points xa , ya , wa in the affine plane Aa2 .
       How does the proof differ from the proof given earlier in the affine plane
       Ah2 ?
Chapter 18
Lie Groups and Lie Algebras




                              The universe is an enormous direct product of representations of
                              symmetric groups.
                                                                          —Steven Weinberg



We have studied linear transformation on Rn using the traditional matrix formalism
in Chap. 7 and more generally in Chaps. 8–10, using the machinery of geometric
algebra. This chapter explains the bivector interpretation of a general linear operator
and offers a new proof of the Cayley–Hamilton theorem based upon this interpre-
tation. The bivector interpretation of a linear transformation leads naturally to the
study of Lie algebras and their corresponding Lie groups, including an introductory
discussion of the powerful Dynkin diagrams as a means of classifying all complex
semisimple Lie algebras.



18.1 Bivector Representation

Let Gn,n = G(Rn,n ) be the 22n geometric algebra of neutral signature, which
was basic to our study of the symmetric group in Chap. 12. The corresponding
unitary geometric algebra Un,n = Gn,n+1 was introduced in Chap.10. The bivector
representation of a linear operator in Rn or Cn takes place in the n-dimensional
complimentary or dual null cones A n and B n . These null cones are defined by
introducing the complimentary Witt basis of null vectors. Let (e)(2n) be the standard
orthonormal basis of Gn,n . Then the null cones A n and B n are specified by
                                                 
              A n = span(a)(n) = span a1 . . . an    B n = span(b)(n) ,         (18.1)

where ai = ei + en+i and bi = 12 (ei + en+i ) .




G. Sobczyk, New Foundations in Mathematics: The Geometric                                 329
Concept of Number, DOI 10.1007/978-0-8176-8385-6 18,
© Springer Science+Business Media New York 2013
330                                                                18 Lie Groups and Lie Algebras




                              n                           n
                            A                        B


Fig. 18.1 The null cones A n and B n make up a Witt basis of Rn,n . It would take 6 dimensions
to properly display dual 3-dimensional null cones. For clarity, the origin of B n has been shifted to
the right

   The null vectors (a)(n) and (b)(n) satisfy the following basic properties, as is
easily verified,
                              (a)T(n) · (a)(n) = 0 = (b)T(n) · (b)(n)                        (18.2)
and
                                       (a)T(n) · (b)(n) = [1]n ,                             (18.3)
where [1]n is the identity n × n matrix. The n-dimensional vector spaces defined by
A n and B n are said to be null cones because they satisfy (18.2) and reciprocal to
each other because they satisfy (18.3). As a consequence of these two relationships,
we also have
                                                      n
                                  (a)(n) · (b)T(n) = ∑ ai · bi = n.                          (18.4)
                                                     i=1

The null cones A n and B n have one point in common, the origin, and are pictured
in Fig. 18.1.
   By the standard matrix basis Ωn,n2 of bivectors, we mean

                                       ⎛                               ⎞
                                         a1 ∧ b1 a1 ∧ b2 . . . a1 ∧ bn
                                       ⎜a ∧ b a ∧ b . . . a ∧ b ⎟
                                       ⎜ 2     1 2     2        2    n⎟
                                       ⎜                               ⎟
              Ωn,n = (a)(n) ∧ (b)(n) = ⎜ . . .
               2        T
                                                   ... ... ... ⎟.          (18.5)
                                       ⎜                               ⎟
                                       ⎝ ...       ... ... ... ⎠
                                         an ∧ b1 an ∧ b2 . . . an ∧ bn

The matrix Ωn,n
             2 spans a n2 -dimensional linear space of bivectors, defined by the

same symbol,

         Ωn,n
          2
              = span{a ∧ b| a ∈ A n , b ∈ B n } = {F| F = (a)(n) [F] ∧ (b)T(n) }

where [F] is a real (or complex) n × n matrix, called the matrix of the bivector F. The
algebra Ωn,n is generated by taking all sums of geometric products of the elements
of Ωn,n
    2 and is an even subalgebra of the geometric algebra G .
                                                                n,n
18.1 Bivector Representation                                                                331


   Each bivector F ∈ Ωn,n
                      2 defines two linear operators, F : A n → A n and F : B n →

B n , specified by

         F(xa ) := F · xa = (a)(n) [F] ∧ (b)T(n) · xa = (a)(n) [F](xa )T(n)             (18.6)

and
                  xb · F = xb · (a)(n) [F] ∧ (b)T(n) = (xb )(n) [F](b)T(n) .

The action of the linear transformation on the null cone A n is completely
determined by its bivector F. The bivector representation of a linear transformation
is the key idea to the study and classification of Lie algebras and Lie groups, as we
discover below.
    The space of bivectors Ωn,n 2 , acting on A n , is isomorphic to the set of all

endomorphisms of A into itself. Let K = (a)(n) ∧ (b)T(n) , then we find that [K] =
                        n

[1]n is the identity matrix and F · K = tr([F]) is the trace of the matrix [F] of F. By
the rank of a bivector F ∈ Ωn,n2 , we mean the highest positive integer k such that

∧k F = 0. A bivector F is said to be nonsingular if ∧n F = det[F] ∧n K = 0.
   We can provide a new proof of the Cayley–Hamilton theorem for a linear
operator f in terms of its bivector invariants (∧k K) · (∧k F). The proof follows
immediately by iterating the identity
  (∧n F) · [(∧n K)]x = (∧n F) · [(∧n K) · x] = n[(∧n F) · x] · (∧n−1 K)
                     = n2 (∧n−1 F) ∧ (F · x) · (∧n−1 K)
                                                                                    
                     = n2 (∧n−1 F) · (∧n−1 K)F · x + (∧n−1 F) · [(F · x) · (∧n−1 K)]
                                                                                          
                     = n2 (∧n−1 F) · (∧n−1 K)F · x − (n − 1)[(∧n−1 F) · (F · x)] · (∧n−2 K) .


   For example for n = 3, after iterating and simplifying, we get the relationship
                             1                            1
 F(3) : x − (K · F)F(2) : x + [(K ∧ K) · (F ∧ F)](F · x) − [(∧3 K) · (∧3 F)]x = 0,
                             4                            36
where we have introduced the notation

                     f k (x) = f ( f k−1 (x)) = F · (F(k−1) : x) = F(k) : x

for the repeated composition of the linear operator f in terms of its bivector F.
This gives quite a different, but closely related, proof that a linear operator f on R3
satisfies its characteristic polynomial and should be compared with the derivation
(8.5) found in Chap. 8. Sometimes we use the alternative notation

                                     F(k) : x = F(k)  x,                               (18.7)

since F · x = F  x.
332                                                                 18 Lie Groups and Lie Algebras


Exercises
                                                                                
                                                                             1 0
1. (a) Find the bivector K ∈ Ω2,2
                              2 of the identity matrix [1] =                      .
                                                                             0 1
   (b) Let f : A 2 → A 2 be defined by

                                              f (a)(2) = (a)(2) [ f ]
                              
                       1    3
       where [ f ] =             . Find the bivector F ∈ Ω2,2 2
                                                                   of the matrix [ f ].
                     −1 −2
   (c) Show that the trace of the matrix [ f ] is given by tr[ f ] = F · K.
   (d) Prove the Cayley–Hamilton theorem for the matrix [ f ] using its bivector
       representation.
                                                                    ⎛           ⎞
                                                                       1 0 0
                                2 of the identity matrix [1] = ⎝
2. (a) Find the bivector K ∈ Ω3,3                                      0 1 0 ⎠.
                                                                       0 0 1
   (b) Let f : A 3 → A 3 be defined by

                                              f (a)(3) = (a)(3) [ f ]
                       ⎛            ⎞
                       1    2 −1
       where [ f ] = ⎝−1 −2 2 ⎠. Find the bivector F ∈ Ω3,3          2 of the matrix [ f ].

                       1    0     1
   (c) Show that the trace of the matrix [ f ] is given by tr[ f ] = F · K.
   (d) Prove the Cayley–Hamilton theorem for the matrix [ f ] using its bivector
       representation.
3. Let F ∈ Ωn,n
             2 .

   (a) Show that
                                          F  K = K  F = 0.
                     t         t
   (b) Show that e   2K    Fe− 2 K = F.
                     t         t
   (c) Show that e   2FKe− 2 F = K.
4. Show that all of the bivectors of G2n,n are specified by

                   G2n,n = Ωn,n
                            2
                                ∪ {ai ∧ a j }1≤i< j≤n ∪ {bi ∧ b j }1≤i< j≤n.
                                          t          t
            2 , and let f (x ) = e 2 F x e− 2 F where x ∈ A n and t ∈ R.
5. Let F ∈ Ωn,n          t a            a              a

   (a) By expanding in a Taylor series around t = 0, show that

                                                   t 2 (2)            tk
                ft (xa ) = K · xa + tF · xa +         F : xa + · · · + F(k) : xa + · · · .
                                                   2!                 k!
18.2 The General Linear Group                                                              333


   (b) Show that fs ◦ ft (xa ) = fs+t (xa ). For this reason, we say that ft (xa ) defines
       the one parameter group

                                         G = { ft | t ∈ R}

       with the group operation fs ◦ ft = fs+t .
   (c) For F = ai ∧ b j , i = j, show that

                     ft (xa ) = K · xa + t(ai ∧ b j ) · xa = xa + t(ai ∧ b j ) · xa .

   (d) For F = ai ∧ bi , show that

                                ft (xa ) = xa + (et − 1)(ai ∧ bi ) · xa .




18.2 The General Linear Group

The general linear group is the Lie group defined to be the set of bivectors

                         GLn = {F| F ∈ Ωn,n
                                        2
                                            and ∧n F = 0},                              (18.8)

together with the group operation H = F ◦ G, where
                           1                  1
                        H = F · (G · x) ∂x = − ∂x (x · G) · F.                           (18.9)
                           2                  2
Recall that ∂x is the vector derivative on Rn,n .
   http://en.wikipedia.org/wiki/General linear group
    The vector derivative ∂x on Gn,n can be broken down into two pieces with respect
to the null cones A n and B n . We write

                                       ∂x = ∂xa + ∂xb                                   (18.10)

where
                                   ∂xa = (b)(n) (a)T(n) · ∂x
and
                                  ∂xb = (a)(n) (b)T(n) · ∂x .
Using the vector derivative on the null cone A n , the composition formula (18.9)
takes the simpler form

                  H = F · (G · xa) ∧ ∂xa = −∂xa ∧ (xa · G) · F                          (18.11)
334                                                                18 Lie Groups and Lie Algebras


as follows from
          1               1
       F = (F · x) ∧ ∂x =   (F · xa) ∧ ∂xa + (F · xb) ∧ ∂xb = (F · xa ) ∧ ∂xa ,
          2               2
since by Problem 3(a) of the previous exercises

                  F  K = [F · (a)(n) ] ∧ (b)T(n) + (a)(n) ∧ [F · (b)T(n)] = 0,

which is equivalent to

                    F = ∂xa ∧ (xa · F) = (F · xa) ∧ ∂xa = ∂xb ∧ (xb · F).

   Let F ∈ Ωn,n
            2 and


            t         t                           t 2 (2)          tk
 ft (xa ) = e 2 F xa e− 2 F = K·xa +tF·xa +          F : xa +· · ·+ F(k) : xa +· · · . (18.12)
                                                  2!               k!
Clearly, for each t ∈ R,

                              fs ◦ ft (xa ) = fs ( ft (xa )) = fs+t (xa ),

so ft defines a one parameter group. Now define
                                    t           t
         Gt = −∂xa ∧ exp              F xa exp − F             = −∂xa ∧ ft (xa ).        (18.13)
                                    2           2
Using (18.12) and expanding Gt in a Taylor series around t = 0, we find that

                    t2                              t k (k)
 Gt = K + tF +         F  (F  xa) ∧ ∂xa + · · · +     F  xa ∧ ∂xa + · · · . (18.14)
                    2!                              k!
It follows that
                                  Gt ∈ GLn        and G0 = K,
where K ∈ GLn is the identity element.
   From (18.14), we see that the set Ωn,n
                                       2 of bivectors makes up the tangent space

of bivectors of the Lie group GLn at the identity element K ∈ GLn . We make the
following
Definition 18.2.1. The general Lie algebra gln = Ωn,n2 is the tangent space of

bivectors to GLn at the identity element K ∈ GLn , together with the Lie algebra
product. Given A, B ∈ gln ,
                                            1
                                     A  B = (AB − BA).
                                            2

The Lie algebra product satisfies the famous Jacobi identity

                          A  (B  C) = (A  B)  C + B  (A  C),                       (18.15)

which for bivectors is always valid.
18.2 The General Linear Group                                                                       335


   We have the following important
Theorem 18.2.2. For each F ∈ gln ,
                                   t      t
                              e 2 F xa e− 2 F = (a)(n) et[F] (xa )T(n) ,                    (18.16)

where xa = (a)(n) (xa )T(n) and [F] is the matrix of F.
Proof. It is sufficient to show that
     t            t                           t             t
   e 2 F (a)(n) e− 2 F = (a)(n) et[F] or e 2 F (a)(n) e− 2 F ∧ (b)T(n) = (a)(n) et[F] ∧ (b)T(n) .

The proof follows immediately by noting that both sides are identical when
expanded in a Taylor series around t = 0.
The expression
                      t            t
          Gt = e 2 F (a)(n) e− 2 F ∧ (b)T(n) = (a)(n) et[F] ∧ (b)T(n) ∈ GLn                 (18.17)

shows that the group element Gt ∈ GLn can either be defined by the left or right
sides of (18.16). We say that the left side of the equation is a double covering of the
group element G, since
                  t            t                        t                    t
         Gt = e 2 F (a)(n) e− 2 F ∧ (b)T(n) = − e 2 F (a)(n) − e− 2 F ∧ (b)T(n) .

The right side of (18.16) relates the group element Gt ∈ GLn , defined by the bivector
F ∈ gln , to exponential of the matrix [F] of F.
   The general linear group GLn has many important subgroups. The special linear
group SLn is the subgroup of GLn defined by

  SLn := {G ∈ GLn |        ∧n G = ∧n K}           ⇐⇒            {G ∈ GLn |       detG = 1}. (18.18)

Just as for the general linear group GLn , the special linear group SLn has a
corresponding special linear Lie algebra defined to be the tangent space of bivectors
to SLn at the identity element K. For F ∈ gln , consider the one parameter subgroup
in SLn defined by (18.13). Using (18.14) and imposing the condition (18.18), we
find that
                          d
                    0 = (∧n Gt )t=0 = nF ∧n−1 K = tr(F) ∧n K,                 (18.19)
                         dt
so that tr(F) = K · F = 0. Thus, we have found that

                             sln = {F ∈ gln | F · K = 0} ⊂ gln .
336                                                                           18 Lie Groups and Lie Algebras


Exercises

1. Let A, B ∈ GL2 be given by

       A = a1 ∧ b1 + 2a1 ∧ b2 + 3a2 ∧ b2 ,                           B = −a1 ∧ b1 − a2 ∧ b1 + a2 ∧ b2 .

   (a) Find the matrices [A] and [B] of A and B, respectively.
   (b) Find the bivector C ∈ GL2 such that C = B ◦ A, and show that [C] = [B][A].
2. More generally, for A = (a)(n) ∧[A](b)T(n) and B = (a)(n) ∧[B](b)T(n) in GLn , show
   that [C] = [B ◦ A] = [B][A].
3. (a) Show that
                                      t                  t
                                  e 2 a1 ∧b2 xa e− 2 a1 ∧b2 ∧ ∂xa = K + ta1 ∧ a2 .

   (b) Calculate
                                                   t                  t
                                                  e 2 a1 ∧b1 xa e− 2 a1 ∧b1 ∧ ∂xa .

4. Prove the Jacobi identity (18.15) for bivectors.
5. Find the one parameter group in SL2 specified by
                              t                                  t
                            e 2 (a1 ∧b1 −a2 ∧b2 ) xa e− 2 (a1 ∧b1 −a2 ∧b2 ) ∧ ∂xa .

   Suggestion: Use Problem 5(d) of Sect. 18.1.
6. (a) Show that
                                  1                          1
                             e 2 a1 ∧b2 a1 ∧ b1 e− 2 a1 ∧b2 = a1 ∧ b1 − ta1 ∧ b2 .
  (b) Show that
                                              1                      1
                                          e 2 a1 ∧b2 a1 ∧ b2 e− 2 a1 ∧b2 = a1 ∧ b2 .
   (c) Show thats
            1                             1
           e 2 a1 ∧b2 a2 ∧ b1 e− 2 a1 ∧b2 = a2 ∧ b1 + t(a1 ∧ b1 − a2 ∧ b2 ) − t 2 a1 ∧ b2 .

7. Let A, B ∈ gln . Define the exponential mapping etA : gln → gln by
                                                                          t (k)
                     etA (B) = B + tA  B + · · ·+                          A  B+ ··· .
                                                                          k!
                   (k)                                                                           t       −t
   Show that etA           (B) is just the Taylor series expansion of ft (B) = e 2 A Be 2 A
   around t = 0.
18.3 The Algebra Ωn,n                                                                  337


18.3 The Algebra Ωn,n

The space of bivectors Ωn,n       2 and the corresponding algebra Ω
                                                                            n,n have many
interesting properties. Consider W ∈ Ωn,n to be a bivector variable. Noting that
                                                2

(ai ∧ b j ) · (a j ∧ bi ) = 1 for each ai ∧ b j ∈ Ωn,n
                                                   2 , it is natural to define the bivector

derivative ∂W by requiring that for all A ∈ Ωn,n   2 ,


                              A · ∂W W = A = ∂W W · A,                            (18.20)

which is simply saying that A · ∂W is the A-directional derivative in the direction of
the bivector A. We can express (18.20) in terms of its component partial (ai ∧ b j )-
derivatives ∂i j = (ai ∧ b j ) · ∂W . We find that

                              ∂W = (a)(n) [∂W ]T ∧ (b)T(n) ,                      (18.21)

where W = (a)(n) [W] ∧ (b)T(n) for [W] = [wi j ] and [∂W ]= [∂i j ].
   Let F = (a)(n) [F] ∧ (b)T(n) and G = (a)(n) [G] ∧ (b)T(n) . Since F and G are bivectors
     2 , we have FG = F  G + F  G where the symmetric and skew-symmetric
in Ωn,n
parts are given by
          1                                      1
F       G = (FG + GF) = F · G + F ∧ G, and F  G = (FG − GF) =< FG >2 .
           2                                      2
In terms of the matrices [F], [G] of the respective components of F and G, we
find that
                                                           
          F · G = (a)(n) [F] ∧ (b)T(n) · (a)(n) [G] ∧ (b)T(n)
                               
                = (a)(n) [F][G] · (b)T(n) = trace([F][G]) = G · F,     (18.22)

                                               
                          f f           g g
         F ∧ G = ∑ det ii i j + det ii i j ai ∧ bi ∧ a j ∧ b j ,                  (18.23)
                 i< j    g ji g j j     f ji f j j
and
                                                                  
                 F  G = (a)(n) [F] ∧ (b)T(n)  (a)(n) [G] ∧ (b)T(n)
                                              
                       = (a)(n) [F][G] − [G][F] ∧ (b)T(n) .                       (18.24)

   The last relationship (18.24) relates the Lie algebra gln (R) to the usual Lie
bracket of the matrices [F] and [G] of the bivectors F, G ∈ Ωn,n
                                                               2 . If we consider

F and G to be complex bivectors in Gn,n+1, we have the corresponding complex Lie
algebra gln (C).
338                                                       18 Lie Groups and Lie Algebras


   As a simple application of the identities (18.22)–(18.24), we use them to calculate
the bivector derivative (18.21) of the bivector variable W. We find that ∂W W =
   
∂W W + ∂W  W, where
      
 ∂W       W = ∂W · W + ∂W ∧ W = n2 − 2 ∑ ai ∧ bi ∧ a j ∧ b j = n2 − K ∧ K (18.25)
                                               i< j


and
                                    ∂W  W = 0.                                 (18.26)
We give here a number of other basic bivector derivative identities which will be
needed:
                 ∂W W · F = F, and ∂W · (W ∧ F) = (n − 1)2F               (18.27)
and
                             ∂W ∧ W ∧ F = −K ∧ K ∧ F.                           (18.28)
For the skew-symmetric part ∂W W  F, we find that

          ∂W W  F = 2(n − 1)F − (K ∧ K) · F = 2nF − 2(F · K)K.                 (18.29)

The last equality in (18.29) implies the interesting identity

                            (K ∧ K) · F = 2(F · K)K − 2F.                       (18.30)

Another relationship which we will occasionally use is

                                K ∧ K ∧ (X  Y) = 0.                            (18.31)



Exercises

1. Prove the identities (18.25)–(18.31).
2. Show that for a bivector A ∈ Ωn,n
                                   2 ,


                            (A  ∂W )  W = ∂W  (W  A).

3. For A ∈ Ωn,n
            2 , show that



                 ∂W A W = (n2 − 4n + 2)A + 2(A · K)K − K ∧ K ∧ A.

4. For A ∈ Ωn,n
            2 , calculate
                                           t          t
                                 ∂W  e 2 A W e− 2 A .
18.4 Orthogonal Lie Groups and Their Lie Algebras                                             339


5. Let A = a1 ∧ b1 + 2a2 ∧ b1 − a2 ∧ b2 and B = 2a1 ∧ b1 − a1 ∧ b2 + 3a2 ∧ b2 .
  (a) Find the matrices [A] and [B] of A and B.
  (b) Verify that A · B = tr([A][B]).
  (c) Verify that A  B = a(2) ([A][B] − [B][A]) ∧ (b)T(2) .
  (d) Calculate A ∧ B using (18.23).
6. Let A ∈ Ωn,n
            2 and [A] be the matrix of A. Show that



                                     (a)(n) [A]k = A(k)  (a)(n).

7. Let A, B ∈ gln = Ωn,n
                     2 . By the Killing form κ on gl , we mean
                                                    n


                               κ (A, B) := ∂W · (W  A)  B .



  (a) Show that κ (A, B) = 2nA · B − 2(K · A)(K · B) = κ (B, A).
  (b) Show that the Killing form reduces to κ (A, B) = 2nA·B on the Lie algebra sln .



18.4 Orthogonal Lie Groups and Their Lie Algebras

Let n = p + q and (e)(p,q) = (e1 , . . . , e p , en+1 , . . . , en+q ) be the standard orthonormal
basis of R p,q ⊂ Rn,n . Define
                                                       −1
                          I p,q = ∧(e)(p,q) ,        I p,q = (−1)q I p,q
                                                                     †
                                                                         ,               (18.32)

and the corresponding projections Pp,q : Gn,n → G p,q by

                                                              −1
                                     Pp,q (Ar ) = Ar · I p,qI p,q                        (18.33)

for each Ar ∈ Grp,q . Acting on the null cone A n , the projection Pp,q : A n → R p,q . In
addition, Pp,q : Ωn,n
                  2 → G2 . More precisely,
                           p,q

                                                     ⎛                         ⎞
                                                    0      e12 . . . e1 n+q
                                                ⎜ −e              . . . e2 n+q⎟
                                                ⎜      12    0                 ⎟
                                                ⎜                              ⎟
                    1                           ⎜  . . .   . . .  . . .  . . . ⎟
       Pp,q(Ωn,n
             2
                 ) = (e)T(p,q) ∧ (e)(p,q) [g] = ⎜                              ⎟ [g],
                    2                           ⎜  ...     ... ... ... ⎟
                                                ⎜                              ⎟
                                                ⎝ ...      ... ... ... ⎠
                                                  −e1 n+q −e2 n+q . . . 0

where [g] = (e)T(p,q) · (e)(p,q) .
340                                                            18 Lie Groups and Lie Algebras


   Let F = (a)(n) ∧ [F](b)T(n) , where [F] = F · (a)T(n) ∧ (b)(n) . Projecting F onto
G2p,q , we find that

                                            1
                         F p,q := Pp,q (F) = (e)(p,q) ∧ [F][g](e)T(p,q) .            (18.34)
                                            2

The matrix [F p,q ] with respect to the basis (e)(p,q) is defined by

 F p,q ·(e)(p,q) = (e)(p,q) [F p,q ] ⇐⇒ [F p,q ] = −[g] (e)T(p,q) ∧(e)(p,q) ·F p,q. (18.35)

   Dotting both sides of (18.34) on the right by x = (e)(p,q) (x)(p,q) gives

                                   1
                        F p,q · x = (e)(p,q) [F] − [g][F]T[g] (x)(p,q) .
                                   2

If the matrix [F] satisfies the property [F]T = −[g][F][g], then this last equation
simplifies to

        F p,q · x = (e)(p,q) [F](x)(p,q) ⇐⇒ F p,q · (e)(p,q) = (e)(p,q) [F].         (18.36)

Comparing (18.35) with (18.36), we see that

                        (e)(p,q) [F] = (e)(p,q) [F p,q ] ⇐⇒ [F] = [F p,q ]

in the case when [F]T = −[g][F][g].
    We are now ready to make the following
Definition 18.4.1. The Lie algebra so p,q is the Lie subalgebra of bivectors of gln ,
specified by

                          so p,q := {A ∈ gln | [A] = −[g][A]T[g]}                    (18.37)

where A = (e)(p,q) ∧ [A](e)T(p,q) .
The Lie algebra so p,q can be projected onto the corresponding spin Lie algebra,

           spin p,q := {A p,q = Pp,q(A)| A ∈ gln } = {A p,q ∈ G2p,q }.               (18.38)

Comparing (18.37) and (18.38), we see that

                       spin p,q = Pp,q so p,q = Pp,q gln = Pp,q sln .                (18.39)
18.4 Orthogonal Lie Groups and Their Lie Algebras                                               341


    We can also view the corresponding Lie group SO p,q as a subgroup of GLn . We
first define the orthogonal Lie group O p,q .
Definition 18.4.2. The Lie group O p,q is the subgroup of GLn specified by

          O p,q := {F ∈ GLn | Pp,q F · xa · Pp,q F · ya = Pp,q(xa ) · Pp,q(ya )}

for all xa , ya ∈ A n .
Using (18.6), this is equivalent to saying that

    (e)(p,q) [F](xa )T(n) · (e)(p,q) [F](ya )T(n) = (e)(p,q) (xa )T(n) · (e)(p,q) (ya )T(n)

for all xa , ya ∈ A n or, even more simply,

                      [F]T [g][F] = [g]        ⇐⇒         [g][F]T [g] = [F]−1              (18.40)

where the metric tensor [g] = (e)T(p,q) · (e)(p,q). In establishing (18.40), we are using
the fact that (18.6) is equivalent to the statement that

                                      F · (a)(n) = (a)(n) [F].

The Lie group SO p,q of the Lie algebra so p,q is the subgroup of O p,q defined by

                             SO p,q := {G ∈ O p,q |        det[G] = 1.                     (18.41)

  There is one other important class of classical Lie groups that needs to be
mentioned, and that is the sympletic Lie groups Sp2n ⊂ GL2n . First, we define

                       J = (a)(n) ∧ (b)T(n ) − (a)(n) ∧ (b)T(n) ∈ G22n,2n

where (a)(n) = (a1 , . . . , an ) and (b)(n ) = (bn+1 , . . . , b2n). Next, we note that P2n (A 2n )
= R2n and define
                                 J2n := P2n (J) = (e)(n) ∧ (e)T(n ) ,
where
                   (e)(n) = (e1 , . . . , en ), and (e)(n ) = (en+1 , . . . , e2n ).
   We can now give
Definition 18.4.3. The sympletic group, Sp2n ⊂ GL2n , is the subgroup of GL2n
specified by

Sp2n := {F ∈ GL2n | J2n · (xa ∧ ya ) = J2n · (F · xa ) ∧ (F · ya ) for all xa , ya ∈ A 2n }.
                                                                                    (18.42)
342                                                          18 Lie Groups and Lie Algebras


The condition that

                      J2n · (xa ∧ ya ) = J2n · (F · xa) ∧ (F · ya)

for all xa , ya ∈ A 2n means that the skew-symmetric bilinear form J2n · (xa ∧ yb ) is
preserved under the action of any bivector F ∈ Sp2n . Recalling that the matrix [F] of
the bivector F ∈ GL2n is defined by

                                F · (a)(2n) = (a)(2n) [F],

the condition (18.42) takes the alternative form

          J2n · (a)T(2n) ∧ (a)(2n) = J2n · [F]T (a)T(2n) ∧ (a)(2n) [F] .            (18.43)

But the matrix
                                                                            
                                                                      0 In
            [J2n ] = (e)(2n) ∧ (e)T(2n) · (a)T(2n) ∧ (a)(2n) =
                                                                     −In 0

where In = [1]n is the identity n × n matrix. Using this relationship on the right side
of (18.43) gives the classical result that F ∈ Sp2n iff

                                  [J2n ] = [F]T [J2n ][F].                          (18.44)

   We now find the corresponding Lie algebra sp2n of dimension n(2n + 1) by using
the property (18.17). Suppose that A ∈ sp2n and that A · (a)(2n) = (a)(2n) [A] and that
Ft ∈ Sp2n is a one parameter group at the identity element K2n ∈ GL2n . Then using
(18.17),

          Ft = (a)(2n) et[A] ∧ (b)T(2n) ∈ GL2n ⇐⇒ [Ft ]T [J2n ][Ft ] = [J2n ].

Differentiating this last relationship, and evaluating at t = 0, gives the result

                   A ∈ sp2n      ⇐⇒        [A]T [J2n ] + [J2n][A]T = 0.

   A different treatment of the classical groups in geometric algebra can be found
in [19]. See also [55, p.220] for a discussion of the Lipschitz, Pin, and Spin groups.
Also, it should be pointed out, there are Lie groups which are isomorphic with no
subgroups of the general linear group GLn , [8].
18.4 Orthogonal Lie Groups and Their Lie Algebras                                   343


Exercises

The generators of the Lie algebra gln are the bivectors of Ωn,n
                                                            2 .

1. (a) Use (18.39) to find the bivector generator of the Lie algebra

                                      spin2 = P2 Ω2,2 .

   (b) What is the matrix of the generator of spin2 ?
   (c) Use the matrix found in (b) to write down the bivector generator of so2 .
2. (a) Use (18.39) to find the generators of the Lie algebra

                                    spin1,1 = P1,1 Ω2,2 .

   (b) What is the matrix of the generator of spin1,1 ?
   (c) Use the matrix found in b) to write down the bivector generator of so1,1 .
3. (a) Use (18.39) to find the bivector generators of the Lie algebra

                                      spin3 = P3 Ω3,3 .

   (b) Find the matrices of the three generators of spin3 .
   (c) Use the matrices found in b) to write down the three bivector generators
       of so3 .
   (d) Show that spin3 ≡ so3 by showing that their Lie algebras are isomorphic.
       (Their generators have the same Lie algebra multiplication table.)
4. (a) Use (18.39) to find the generators of the Lie algebra

                                    spin2,1 = P2,1 Ω3,3 .

   (b) Find the matrices of the three generators of spin2,1 .
   (c) Use the matrices found in (b) to write down the three generators of so2,1 .
   (d) Show that spin2,1 ≡ so2,1 by showing that their Lie algebras are isomorphic.
       (Their generators have the same Lie algebra multiplication table.)
5. (a) Recalling the definition of the unitary space H p,q and its geometric algebra
       U p,q , given in Sect. 10.3 of Chap. 10, we can define the projection operator
       (18.33)
                                   Pp,q+1 : A n (C) → H p,q ,
       where A n (C) is the complexified null cone and i = en+q+1 . The unitary Lie
       algebra u p,q is defined by

                          u p,q := {A ∈ gln (C)| [A] = −[g][A]∗[g]}
344                                                       18 Lie Groups and Lie Algebras


         where [A]∗ = [A]T . Alternatively, u p,q can be defined by

                  up,q := {A p,q = Pp,q+1(A)| A ∈ gln (C)} = {A p,q ∈ U p,q
                                                                          2
                                                                             }.

         By a similar analysis given to establish (18.39), show that

                 sup,q = Pp,q+1 su p,q = Pp,q+1 gln (C) = Pp,q+1 sln (C) .

  (b) The unitary Lie group U p,q , analogous to Definition 18.4.2, can be defined
      by

      U p,q := {F ∈ GLn (C)2 | Pp,q+1 F · xa · Pp,q+1 F · ya = Pp,q+1(xa ) · Pp,q+1(ya )

                                                                                  (18.45)

         for all xa , ya ∈ A n (C). Show that F ∈ GLn (C)2 iff

                                [F]−1 = [g][F]∗ [g] = [g][F]T [g].

         The special unitary group is the subgroup of U p,q defined by

                              SU p,q := {G ∈ U p,q|   det[G] = 1}.                (18.46)

6. (a) Define the Pauli bivectors by
                                                               
                                  01                         0 −i
                   σ1 = (a)(2) ∧     (b)(2) , σ2 = (a)(2) ∧
                                        T
                                                                    (b)T(2)
                                  10                          i 0

         and                                       
                                                1 0
                                 σ3 = (a)(2) ∧        (b)T(2) ,
                                                0 −1
         where i = e5 . Show that the group SU2 consists of all complex bivectors

                                     F = (a)(2) ∧ [F](b)T(2)

         where the matrix [F] of F has determinant one and is of the form

                             [F] = a[1]3 + ib[σ1 ] + ic[σ2] + id[σ3],

      a, b, c, d ∈ R and [1]2 is the identity matrix.
  (b) Define the rotation bivectors Ei := (a)(3) ∧ [Ei ](b)(3) of S03 by
                         ⎛        ⎞          ⎛        ⎞          ⎛        ⎞
                          1 0 0                0 0 −1              0 −1 0
                 [E1 ] = ⎝0 0 1⎠ , [E2 ] = ⎝0 1 0 ⎠ , [E3 ] = ⎝1 0 0⎠ .
                          0 −1 0               10 0                0 0 1
18.5 Semisimple Lie Algebras                                                      345


       Show that there is a group homomorphism between the group bivectors of
       SO3 and the Pauli bivectors of SU2 .
   (c) Show that the Lie algebras so3 and su2 are algebraically isomorphic.
7. Calculate the Killing form κ (A, B) on the Lie algebras son , sun , and spn .



18.5 Semisimple Lie Algebras

Whereas not all Lie groups are isomorphic to a matrix group [8], it is well known
that all Lie algebras can be faithfully represented by matrix Lie algebras on Rn .
Since we have seen that each linear transformation on Rn can be represented by a
corresponding bivector, it follows that every Lie algebra can be represented by a
corresponding Lie algebra of bivectors. Lie algebras arise in all kinds of different
settings, so the problem of their classification is an important one. While there is
no general way to classify all Lie algebras, the so-called classical Lie algebras
of orthogonal transformations, or simple Lie algebras, lend themselves to a neat
classification by the Dynkin diagrams of their root systems. Whereas it is impossible
to deal with this beautiful subject in any detail, it is the purpose of the remainder
of this chapter to give the reader a general idea about how the structure of gln (C)
and its semisimple Lie subalgebras can be elegantly and concisely formulated in the
language of geometric algebra.
   Let h be a Lie subalgebra of a Lie algebra g. We say that h is an ideal of g if

                         B  A ∈ h for all B ∈ g, A ∈ h.                      (18.47)

An ideal h is said to be nontrivial if h = {0}. An ideal h of a Lie algebra g is said
to be an Abelian ideal if A  B = 0 for all A, B ∈ h. A Lie algebra g = 0 is said to
be simple if it has no nontrivial ideals, and g is said to be semisimple if it has no
nontrivial Abelian ideals. It follows that a simple Lie algebra is also semisimple.
   There are several more definitions that must be given if we are going to be
able gain entry into the vast edifice of Lie algebras and Lie groups that has been
constructed over the last century. The commutator subalgebra Dg of a Lie algebra
g is defined by
                        Dg = {A  B| for all A, B ∈ g.}                        (18.48)
The commutator subalgebra Dg ⊂ g is an ideal Lie subalgebra in g. A Lie algebra
g is said to be nilpotent if there is an integer k such that

                       A1  (A2  (. . .  (Ak  B) . . .)) = 0.              (18.49)

Furthermore, the Lie algebra g is said to be solvable if its commutatior subalgebra
Dg is a nilpotent Lie algebra. It follows that a solvable Lie algebra is only slightly
more general than a nilpotent Lie algebra.
   http://en.wikipedia.org/wiki/Solvable Lie algebra
346                                                         18 Lie Groups and Lie Algebras


   We give some standard examples. Let νn be the Lie subalgebra of gln defined by

              νn = {A| A ∈ gln and [A] is strictly upper triangular},

then νn is a nilpotent Lie algebra. Now define the Lie subalgebra τn of gln ,

                   τn = {A| A ∈ gln and [A] is upper triangular},

then τn is a solvable Lie algebra with the nilpotent commutator subalgebra D τn =
νn . It is also interesting to note that a Lie algebra g is semisimple if and only if its
Killing form is nonsingular, g is nilpotent if and only if its Killing form is zero, and
g is solvable if and only if its Killing form vanishes on Dg.
    The key to the classification of a semisimple complex Lie algebra g is that each
such Lie algebra contains a Cartan subalgebra. A Cartan subalgebra h ⊂ g of a
semisimple Lie algebra g is a maximal Abelian subalgebra with the property that if
A ∈ g and H  A = 0 for all H ∈ h, then A ∈ h.
   http://en.wikipedia.org/wiki/Cartan subalgebra
    To understand how the classification scheme works, we now define what is meant
by a root system of a semisimple complex Lie algebra g with a Cartan subalgebra h.
In this case, the Killing form κ can be chosen so that κ (A, B) = A·B for all A, B ∈ g.
A bivector hα ∈ h determines a root if there exists a nonzero element A ∈ g such that

                          h  A = (hα · h)A for all h ∈ h.

Sometimes, we will refer to the bivectors hα as cobivectors because they are being
used to determine the dual form (hα · h).
Definition 18.5.1. Let g be a semisimple complex Lie algebra with the with Cartan
subalgebra h. A finite set S ⊂ h of nonzero cobivectors in h, called roots, form a
root system in g if:
1. The set S spans an n-dimensional space of bivectors S n = span(S ) over the
   real numbers.
2. If hα ∈ S is a root cobivector, then −hα ∈ S is also a root cobivector.
3. If hα1 , hα2 ∈ S are roots, then

                                  hα2 − 2(hα2 · ĥα1 )ĥα1 ∈ S

   is also a root in S , where ĥα = √hhα·h .
                                       α α
4. If hα1 , hα2 ∈ S , then

                                 h α1 · h α2               |hα |
                             2               = 2ĥα1 · ĥα2 2 ∈ Z
                                 h α1 · h α1               |hα1 |

   where Z is the set of integers. It follows that 4 cos2 θ ∈ Z where ĥα1 · ĥα2 = cos θ .
18.5 Semisimple Lie Algebras                                                                347


                                        Main Series


                     An                                    sln+1(C), n≥1.

                     Bn                                    so2n+1(C), n≥2.

                     Cn                                    sp2n (C), n≥3.


                     Dn                                    so2n(C), n≥4.


                               Exceptional simple Lie algebras




             E6                              E7




                          E8




                          F4                            G2

Fig. 18.2 The Dynkin digrams represent the only possible simple Lie algebras of finite dimension
over the complex numbers. Each diagram contains all the information necessary to construct the
given Lie algebra


   Given a root system S ⊂ h of a semisimple complex Lie algebra g, it is always
possible to find a subset S + ⊂ S called the positive roots of S . A positive root
subset S + is characterized by the following two properties:
1. For each root hα ∈ S , either hα or −hα is in S + but not both.
2. If hα , hβ ∈ S + , hα = hβ , and hα + hβ ∈ S , then hα + hβ ∈ S + .
An element hα ∈ S + is indecomposable or simple if hα = hβ + hγ for some hβ , hγ ∈
S + . The set R ⊂ S + of simple roots makes up a basis of S n , and any positive root
hα ∈ S + is then a linear combination of the simple roots with positive coefficients.
The rank of a root system S is n, the dimension of S n . A more complete discussion
of root systems, and the proof of the last statement, can be found online at
   http://en.wikipedia.org/wiki/Root system
   See also [7, 26] and many other references.
   We give here a brief description of the irreducible Dynkin diagrams for all
possible root systems for simple complex Lie algebras, Fig. 18.2. Some explanation
of the meaning of the above Dynkin diagrams is required for even a rudimentary
understanding of the structure that they reveal. The vertices of a diagram represent
348                                                              18 Lie Groups and Lie Algebras


the positive roots hα of the particular root system in S n that they characterize. A
line segment is drawn between each non-orthogonal pairs of positive roots; it is
undirected if the cobivectors make an angle of 120◦ = 23π r, a directed double line
segment connects them if they make an angle of 135◦ = 34π , and a directed trible
line segment means they make an angle of 150◦ = 56π r. A “directed arrow” in the
diagram points to the shorter cobivector.
   It can be shown from the basic properties of a root system that if hα and hβ are
positive simple roots, then

                               hα , hα + hβ , . . . , hα + shβ                         (18.50)

                                         hα ·h
are all positive roots, where s = −2 h ·hβ and hα + (s + 1)hβ is not a root. For a
                                        β β
detailed description of the significance of these Dynkin diagrams, see [7, 26]. For a
detailed account of the automorphism groups in Clifford algebras, see [55, 64].



18.6 The Lie Algebras An

We have seen that the bivectors in (18.5), under the Lie algebra product (18.24),
make up the Lie algebra gln . All finite dimensional Lie algebras can be represented
as Lie subalgebras of gln . In particular, we are interested in all finite dimensional Lie
algebras that are characterized by their root systems as represented by their Dynkin
diagrams. We begin by considering those simple Lie algebras whose root systems
are characterized by the Dynkin diagram An where n = 1, 2, . . .. The matrices of the
bivectors which characterize the Lie algebra with the root system An are all those
matrices which are trace-free, called the special linear Lie algebra sln . We can thus
write
                        sln (C) = {B ∈ gln |K · B = 0} ⊂ gln .                     (18.51)
  The Lie algebra sln+1 has the root structure of the Dynkin diagram of An . This
means that sln+1 has n positive diagonal root elements hαi ∈ sln+1 . These elements,
when normalized, give the elements

                                                 h αi
                                     hi = 2               ,                            (18.52)
                                              h αi · h αi
                                                     
of the Cartan subalgebra Hn = (h)(n) = h1 , . . . , hn of sln+1 . The Cartan matrix
[Hn ] of sln is then defined by

                                [Hn ] = (h)T(n) · (hα )(n) .                           (18.53)

   To see how all this works in practice, let us consider the cases for n = 1, 2, 3. The
Lie algebra sl2 has one simple positive root hα1 , which we may choose to be the
18.6 The Lie Algebras An                                                                    349


element hα1 = a1 ∧ b1 − a2 ∧ b2 ∈ sl2 . Using (18.52), we see that the corresponding
normalized diagonal element h1 = hα1 , which then gives the Cartan matrix

                                 [H1 ] = [h1 · hα1 ] = [2].

    The Lie algebra sl2 = span{h1, X12 ,Y21 }, where X12 = a1 ∧ b2 and Y21 = a2 ∧ b1 .
In general, the symbol Xi j = ai ∧b j , where i < j, is used to represent the positive root
bivectors that lie above the diagonal elements in (18.5). Similarly, the symbol Y ji =
a j ∧ bi , where i < j is used to represent the negative root bivectors that lie below the
diagonal elements in (18.5). The Lie algebra sl2 is then completely determined by
the Lie algebra products

  h1  X12 = (h)T(1) · (hα )(1) X12 = 2X12, h1  Y12 = (h)T(1) · (−hα )(1)Y21 = −2Y21,

                                  and X12  Y21 = h1 .                                   (18.54)
   The cases for n = 2 and n = 3 are more instructive. For n = 2, the case of sl3 , we
have two simple positive roots, which may be chosen as hα1 = a1 ∧ b1 − a2 ∧ b2 and
hα2 = a2 ∧ b2 − a3 ∧ b3 . Using (18.52) to normalize these roots, gives the Abelian
Cartan subalgebra                                     
                            H2 = (h)(2) = span h1 h2
and the Cartan matrix
                                                                                
                                                h 1 · h α1 h 1 · h α2         2 −1
             [H2 ] = (h)T(2) · (hα )(2) =                                   =        ,
                                                h 2 · h α1 h 2 · h α2         −1 2

where in this case once again hi = hαi for i = 1, 2.
   We now select the positive root bivectors X12 , X23 , and X13 = X12  X23 , which
satisfy the general positive Lie eigenvalue equation
                                                      
                                 (h)T(2)  X12 X23 X13
                                            ⎛          ⎞
                                            X12 0 0
                     h                   
                   = 1 · hα1 hα2 hα1 + hα2 ⎝ 0 X23 0 ⎠ ,                                 (18.55)
                     h2
                                               0 0 X13
where                                                    
                      h1                           2 −1 1
                         · h α1 h α2 h α1 + h α2 =                                       (18.56)
                      h2                            −1 2 1
is the general Lie algebra eigenmatrix of the Lie eigenvalue equation (18.55). Note
that the last column of this matrix is just the sum of the first two columns. This
property is a direct consequence of the root structure of A2 .
350                                                       18 Lie Groups and Lie Algebras


  Similarly, it can be directly verified that negative root bivectors Y21 ,Y32 , and Y31 =
−Y21  Y32 satisfy the corresponding negative Lie eigenvalue equation
                                                    ⎛         ⎞
                                                   Y21 0 0
                                           2 −1 1 ⎝
            (h)T(2)  Y21 Y32 Y31 = −                 0 Y32 0 ⎠ .                 (18.57)
                                            −1 2 1
                                                      0 0 Y31

To completely determine the Lie algebra sl3 , calculate the additional Lie algebra
products
               ⎛ ⎞                       ⎛                    ⎞
                 X12                        h1 0 −Y32
               ⎝X23 ⎠  Y21 Y32 Y31 = ⎝ 0 h2 Y21 ⎠ .
                 X13                        −X23 X12 h1 + h2
We have now completely determined the structure of sl3 from the structure of its
root system A2 .
   For the case when n = 3, sl4 has the root structure of A3 . In this case, we take as
the three simple positive roots hαi = ai ∧ bi − ai+1 ∧ bi+1 , for i = 1, 2, 3. By applying
(18.52) to normalize hαi , we again find that hi = hαi , giving the Cartan subalgebra
H3 = (h)(3) and the Cartan matrix
                                                  ⎛          ⎞
                                                      2 −1 0
                       [H3 ] = (h)T(3) · (hα )(3) = ⎝−1 2 −1⎠
                                                      0 −1 2

which completely determines the root structure of sl3 . We now choose the positive
root bivectors X12 , X23 , X34 , which further determine the positive root bivectors
X13 = X12  X23 , X24 = X23  X34 , and X14 = X13  X34 .
   The general positive Lie eigenvalue equation for sl4 is then given by
                                       
      (h)T(3)  X12 X23 X34 X13 X24 X14
          ⎛ ⎞
           h1                                                   
        = ⎝h2 ⎠ · hα1 hα2 hα3 hα1 + hα2 hα2 + hα3 hα1 + hα2 + hα3 [X],            (18.58)
           h3
where                           ⎛                ⎞
                                  X12 0 0 0 0 0
                                ⎜ 0 X 0 0 0 0 ⎟
                                ⎜     23         ⎟
                                ⎜                ⎟
                                ⎜ 0 0 X34 0 0 0 ⎟
                          [X] = ⎜                ⎟,
                                ⎜ 0 0 0 X13 0 0 ⎟
                                ⎜                ⎟
                                ⎝ 0 0 0 0 X24 0 ⎠
                                   0 0 0 0 0 X14
18.6 The Lie Algebras An                                                                 351


and
                 ⎛           ⎞
                      1 −1 1 
              H3 | ⎝ 1 1 0⎠
                     −1 1 1
                 ⎛ ⎞
                    h1                                                             
              = ⎝ h 2 ⎠ · h α1 h α2 h α3 h α1 + h α2 h α2 + h α3 h α1 + h α2 + h α3
                    h3
                 ⎛                         ⎞
                     2 −1 0 1 −1 1
              = ⎝−1 2 −1 1 1 0⎠                                                       (18.59)
                     0 −1 2 −1 1 1

is the general Lie algebra eigenmatrix of the Lie eigenvalue equation (18.55). Note
how the last three columns of this matrix are formed augmenting the Cartan matrix
with the appropriate sums of the three columns of the Cartan matrix. This property
is a direct consequence of Cartan matrix and the root structure of A3 .
    Similarly, it can be directly verified that negative root bivectors

                                 Y21 ,Y32 ,Y43 ,Y31 ,Y42 ,Y41 ,

where Y31 = −Y21  Y32 , Y42 = −Y32  Y43 , and Y41 = −Y31  Y43 satisfy the
corresponding negative Lie eigenvalue equation

                                                    ⎛      ⎞
                                                      1 −1 1 
                     (h)T(3)  (Y j>i )(6) = − H3 | ⎝ 1 1 0⎠ [Y ].                  (18.60)
                                                     −1 1 1

   To completely determine the Lie algebra sl3 , we calculate the additional Lie
algebra products

                 (Xi< j )T(6)  (Y j>i )(6)
                       ⎛                                      ⎞
                             h1      0      0 −Y32  0    −Y42
                       ⎜ 0                         −Y43       ⎟
                       ⎜            h2 0      Y21         0   ⎟
                       ⎜                                      ⎟
                       ⎜ 0           0 h3      0   Y32   Y31  ⎟
                   =⎜                                         ⎟.
                       ⎜−X23 X12 0 h1 + h2          0    −Y43 ⎟
                       ⎜                                      ⎟
                       ⎝ 0 −X34 X23            0 h2 + h3 Y21  ⎠
                           −X24 0 X13 −X34 X12 h1 + h2 + h3

We have now completely determined the structure of sl3 from the structure of its
root system A2 .
References




 1. Ablamowicz, R., Sobczyk, G.: Lectures on Clifford (Geometric) Algebras and Applications.
    Birkhäuser, Boston (2004)
 2. Ahlfors, L.V.: Complex Analysis, 3rd edn. McGraw-Hill, New York (1979)
 3. Baylis, W.E., Huschilt, J., Jiansu, W.: Why i? Am. J. Phys. 60(9), 788 (1992)
 4. Baylis, W.E.: Electrodynamics: A Modern Geometric Approach (Progress in Mathematical
    Physics). Birkhäuser, Boston (1998)
 5. Baylis, W.E., Sobczyk, G.: Relativity in clifford’s geometric algebras of space and spacetime.
    Int. J. Theor. Phys. 43(10), 1386–1399 (2004)
 6. Bayro Corrochano, E., Sobczyk, G. (eds.): Geometric Algebra with Applications in Science
    and Engineering. Birkhäuser, Boston (2001)
 7. Belinfante, J.G.F., Kolman, B.: A Survey of Lie Groups and Lie Algebras with Applications
    and Computational Methods. Society for Industrial and Applied Mathematics, Pennsylvania
    (1972)
 8. Birkhoff, G.: Lie groups isomorphic with no linear group. Bull. Am. Math. Soc., 42, 882–888
    (1936)
 9. Born, M.: Einstein’s Theory of Relativity, rev. edn. Dover, New York (1962)
10. Brackx, F., Delanghe R., Sommen, F.: Clifford Analysis. Research Notes in Mathematics,
    vol. 76. Pitman Advanced Publishing Program, Boston (1982)
11. Brackx, F., De Schepper, H., Sommen, F.: The hermitian clifford analysis toolbox. Adv. Appl.
    Clifford Algebras 18, 451–487 (2008)
12. Clifford, W.K.: Applications of grassmann’s extensive algebra. Am. J. Math. 1, 350–358 (1878)
13. Clifford, W.K.: On the classification of geometric algebras, In: R. Tucker (ed.) Mathematical
    Papers by William Kingdon Clifford, pp. 397–401. Macmillan, London (1882) (Reprinted by
    Chelsea, New York, 1968)
14. Crowe, M.J.: A History of Vector Analysis. Chapter 6. Dover, New York (1985)
15. Cullen, C.G.: Matrices and Linear Transformations, 2nd edn. Dover, New York (1972)
16. Curtis, C.W.: Pioneers of Representation Theory: Frobenius, Burnside, Schur, and Brauer,
    AMS and the London Mathematical Society (1999). http://www.ams.org/bookstore-getitem/
    item=HMATH-15-S
17. Dantzig, T.: NUMBER: The Language of Science, 4th edn. Free Press, New York (1967)
18. Davis, P.J.: Interpolation and Approximation. Dover, New York (1975)
19. Doran, C., Hestenes, D., Sommen, F., Van Acker, N.: Lie groups as spin groups. J. Math. Phys.,
    34(8), 3642–3669 (1993)
20. Dorst, L., Doran, C., Lasenby, J. (eds.): Applications of Geometric Algebra in Computer
    Science and Engineering. Birkhäuser, Boston (2002)



G. Sobczyk, New Foundations in Mathematics: The Geometric                                     353
Concept of Number, DOI 10.1007/978-0-8176-8385-6,
© Springer Science+Business Media New York 2013
354                                                                                   References


21. Einstein, A., Lorentz, H.A., Minkowski, H., Weyl, H.: On the Electrodynamics of Moving
    Bodies. In: The Principle of Relativity, pp. 37–65. Dover, New York (1923). Translated from
    “Zur Elektrodynamik bewegter Körper”, Annalen der Physik, 17 (1905)
22. Fishback, W.T.: Projective & Euclidean Geometry, 2nd edn. Wiley, New York (1969)
23. Fjelstad, P.: Extending relativity via the perplex numbers. Am. J. Phys. 54(5), 416 (1986)
24. Flanders, H.: Differential Forms with Applications to the Physical Sciences. Dover, New York
    (1989)
25. French, A.P.: Special Relativity. Norton, New York (1968)
26. Fulton, W., Harris, J.: Representation Theory: A First Course. Springer, New York (1991)
27. Friedberg, S.H., Insel, A.J., Spence, L.E.: Linear Algebra. Prentice-Hall, Englewood Cliffs
    (1979)
28. Gallian, J.A.: Contemporary Abstract Algebra, 6th edn. Houghton Mifflin Company, Boston
    (2006)
29. Gantmacher, F.R.: Theory of Matrices, translated by Hirsch, K.A. Chelsea Publishing, New
    York (1959)
30. Gel’fand, I.M., Shilov, G.E.: Generalized Functions. Properties and Operations, vol. 1.
    Academic, New York (1964)
31. Havel, T.F.: Geometric Algebra: Parallel Processing for the Mind (Nuclear Engineer-
    ing) (2002). http://www.garretstar.com/secciones/clases/MT318/lect1.pdf, http://web.mit.edu/
    tfhavel/www/
32. Heath, T.L: Euclid’s Elements, vol. 2, p. 298, 2nd edn. Dover, New York (1956)
33. Hestenes, D.: Space Time Algebra. Gordon and Breach, New York (1966)
34. Hestenes, D.: Proper particle mechanics. J. Math. Phys. 15, 1768–1777 (1974)
35. Hestenes, D.: The design of linear algebra and geometry. Acta Appl. Math. vol. 23, pp. 65–93.
    Kluwer Academic, Dordrecht (1991)
36. Hestenes, D.: New Foundations for Classical Mechanics, 2nd edn. Kluwer, Dordrecht (1999)
37. Hestenes, D.: Point groups and space groups in geometric algebra, In: Doerst, L., Doran, C.,
    Lasen, J. (eds.) Applications of Geometric Algebra with Applications in Computer Science and
    Engineering, pp. 3–34. Birkhauser, Boston (2002)
38. Hestenes, D.: Spacetime physics with geometric algebra. Am. J. Phys. 71(6), pp. 691–714
    (2003)
39. Hestenes, D.: Gauge Theory Gravity with Geometric Calculus, Foundations of Physics,
    35(6):903–970 (2005)
40. Hestenes, D., Holt, J.: The crystallographic space groups in geometric algebra. J. Math. Phys.
    48, 023514 (2007)
41. Hestenes, D.: Grassmann’s Legacy. In: Grassmann Bicentennial Conference (1809-1877)
    September 16–19, (2009) Potsdam Szczecin (DE PL). http://geocalc.clas.asu.edu/pdf/
    GrassmannLegacy2.pdf
42. Hestenes, D., Reany, P., Sobczyk, G.: Unipodal algebra and roots of polynomials. Adv. Appl.
    Clifford Algebras 1(1), 31–51 (1991)
43. Hestenes D., Sobczyk. G.: Clifford Algebra to Geometric Calculus: A Unified Language for
    Mathematics and Physics, 2nd edn. Kluwer, Dordrecht (1992)
44. Hestenes, D., Ziegler, R.: Projective geometry with Clifford algebra, Acta Applicandae
    Mathematicae, vol. 23, p. 25–63, Kluwer Academic, Dordrecht (1991)
45. Hicks, N.J.: Notes on Differential Geometry. Van Nostrand Company, Princeton (1965)
46. Horn, R., Johnson, C.R.: Matrix Analysis. Cambridge University Press, New York (1990)
47. Jackson, J.D.: Classical Electrodynamics. Wiley, New York (1962)
48. James, G., Liebeck, M.: Representations and Characters of Groups, 2nd edn. Cambridge
    University Press, Cambridge (2001)
49. Klein, F.: Elementary Mathematics From an Advanced Standpoint, vol. 1, 3rd edn. Dover, New
    York (1924)
50. Lam, T.Y.: Representations of finite groups: a hundred years. Part I Notices of the AMS 45(3),
    361–372 (1998)
References                                                                                       355


51. Lasenby, A., Doran, C., & Gull, S.: Gravity, gauge theories and geometric algebra, Phil. Trans.
    R. Lond. A 356: 487–582 (1998)
52. Lee, J.M.: Manifolds and Differential Geometry, Graduate Studies in Mathematics, vol. 107.
    American Mathematical Society, Providence, Rhode Island (2009)
53. Linz, P.: Theoretical Numerical Analysis. Wiley, New York (1979)
54. Lounesto, P.: Clical Algebra Calculator and user manual, Helsinki University of Technol-
    ogy of Mathematics, Research Report 248, (1994) http://users.tkk.fi/ppuska/mirror/Lounesto/
    CLICAL.htm
55. Lounesto, P.: Clifford Algebras and Spinors, 2nd edn. Cambridge University Press, Cambridge
    (2001)
56. Millman, R.S., Parker, G.D.: Elements of Differential Geometry. Prentice-Hall, Englewood
    Cliffs (1977)
57. Nash, J.: C1 isometric imbeddings. Ann. Math. 60(3), 383–396 (1954)
58. Nash, J.: The imbedding problem for riemannian manifolds. Ann. Math. 63(1), 20–63 (1956)
59. Nahin, P.: An Imaginary Tale: The story of the Square Root of Minus One. Princeton University
    Press, Princeton (1998)
60. Nering, E.: Linear Algebra and Matrix Theory (Paperback). Wiley, New York (1976)
61. Niven, I.N., Zuckerman, H.S., Montgomery, H.L.: An Introduction to the Theory of Numbers,
    5th edn. Wiley, New York (1991)
62. Oziewicz, Z.: How do you add relative velocities? In: Pogosyan, G.S., Vicent, L.E., Wolf, K.B.
    (eds.) Group Theoretical Methods in Physics. Institute of Physics, Bristol (2005)
63. Pontryagin, L.S.: Hermitian operators in a space with indefinite metric. Izv. Akad. Nauk SSSR
    Ser. Mat. 8, 243–280 (1944)
64. Porteous, I.R.: Clifford Algebras and the Classical Groups. Cambridge University Press,
    Cambridge (1995)
65. Pozo, J., Sobczyk, G.: Geometric algebra in linear algebra and geometry. Acta Appl. Math. 71,
    207–244 (2002)
66. Shilov, G.E.: Linear Algebra. Dover, New York (1977)
67. Sobczyk, G.: Mappings of Surfaces in Euclidean Space using Geomtric Algebra. Ph.D dis-
    sertation, Arizona State University (1971). http://www.garretstar.com/secciones/publications/
    publications.html
68. Sobczyk, G.: Spacetime vector analysis. Phys. Lett. 84A, 45–49 (1981)
69. Sobczyk, G.: Conjugations and hermitian operators in spacetime. Acta Phys. Pol. B12(6),
    509–521 (1981)
70. Sobczyk, G.: A complex gibbs-heaviside vector algebra for space-time. Acta Phys. Pol. B12(5),
    407–418 (1981)
71. Sobczyk, G.: Unipotents, idempotents, and a spinor basis for matrices. Adv. Appl. Clifford
    Algebras 2(1), 51–64 (1992)
72. Sobczyk, G.: Noncommutative extensions of number: an introduction to clifford’s geometric
    algebra. Aportaciones Mat. Comun. 11, 207–218 (1992)
73. Sobczyk, G.: Simplicial calculus with geometric algebra. In: Micali, A., et al. (eds.) Clifford
    Algebras and their Applications in Mathematical Physics, p. 279–292. Kluwer, the Netherlands
    (1992)
74. Sobczyk, G.: Linear transformations in unitary geometric algebra. Found. Phys. 23(10),
    1375–1385 (1993)
75. Sobczyk, G.: Jordan form in associative algebras. In: Oziewicz, Z., et al. (eds.) Clifford
    Algebras and Quantum Deformations, pp. 357–364. Kluwer, the Nethelands (2003)
76. Sobczyk, G.: Jordan form in clifford algebra. In: Bracks, F., et al. (eds.) Clifford Algebras and
    their Applications in Mathematical Physics, pp. 33–41. Kluwer, the Netherlands (2003)
77. Sobczyk, G.: Hyperbolic number plane. College Math. J. 26(4), 268–280 (1995)
78. Sobczyk, G.: The generalized spectral decomposition of a linear operator. College Math. J.
    28(1), 27–38 (1997)
79. Sobczyk, G.: Spectral Integral Domains in the Classroom. Aportaciones Matematicas. Serie
    Comunicaciones, vol. 20, pp. 169–188. Sociedad Matemática Mexicana, Mexico (1997)
356                                                                                  References


80. Sobczyk, G.: The missing spectral basis in algebra and number theory. The American
    Mathematical Monthly, vol. 108, pp. 336–346 (2001)
81. Sobczyk, G.: Generalized Vandermonde determinants and applications. Aportaciones Matem-
    aticas, Serie Comunicaciones, vol. 30, pp. 203–213. Sociedad Matemática Mexicana, Mexico
    (2002)
82. Sobczyk, G.: Clifford geometric algebras in multilinear algebra and non-euclidean geometries.
    Byrnes, J., (ed.) Computational Noncommutative Algebra and Applications: NATO Science
    Series, pp. 1–28. Kluwer, Dordrecht (2004)
83. Sobczyk, G.: Quantum Hermite Interpolation Polynomials. Aportaciones Matematicas, Para-
    metric Optimization and Related Topics VII 18, Sociedad Matemática Mexicana, Mexico,
    pp. 105–112 (2004)
84. Sobczyk, G.: Structure of Factor Algebras and Clifford Algebra. Linear Algebra and Its
    Applications, vol. 241–243, pp. 803–810, Elsevier Science, New York (1996)
85. Sobczyk, G.: The spectral basis and rational interpolation. Proceedings of “Curves and
    Surfaces.” Avignon, France, arXiv:math/0602405v1 (2006)
86. Sobczyk, G.: Geometric matrix algebra. Lin. Algebra Appl. 429, 1163–1173 (2008)
87. Sobczyk, G., Yarman, T.: Unification of Space-Time-Matter-Energy, Appl. Comput. Math. 7,
    No. 2, pp. 255–268 (2008)
88. Sobczyk, G., León Sanchez, O.: The fundamental theorem of calculus. Adv. Appl. Clifford
    Algebras 21, 221–231 (2011)
89. Sobczyk, G.: Conformal mappings in geometric algebra. Not. AMS. 59(2), 264–273 (2012)
90. Sobczyk, G.: Unitary geometric algebra. In: Ablamowicz, R., Vaz, J. (eds.) Special Volume
    of Advances in Applied Clifford Algebras in Memory of Prof. Jaime Keller, pp. 283–292.
    Springer Basel AG (2012). http://link.springer.com/article/10.1007/s00006-011-0277-5
91. Spiegel, M.R.: Vector Analysis and an introduction to Tensor Analysis. Schaum’s Outline
    Series. Schaum Publishing, New York (1959)
92. Spivak, M.S.: Calculus on Manifolds. W.A. Benjamin, New York (1965)
93. Stoer, J., Bulirsch, R.: Introduction to Numerical Analysis, 2nd edn. Translated by Bartels,
    R., Gautschi, W., Witzgall, C. Springer, New York (1993)
94. Struik. D.J.: A Concise History of Mathematics. Dover, New York (1967)
95. Thomas, G.B., Finney, R.L.: Calculus and Analytic Geometry, 8th edn. Addison-Wesley,
    Reading, MA (1996)
96. Verma, N.: Towards an Algorithmic Realization of Nash’s Embedding Theorem. CSE, UC San
    Diego. http://cseweb.ucsd.edu/∼ naverma/manifold/nash.pdf
97. Whitney, H.: Differentiable manifolds. Ann. Math. 37, 645–680 (1936)
98. Yarman, T.: The End Results of General Relativity Theory via just Energy Conservation and
    Quantum Mechanics, Foundations of Physics Letters, 19(7), pp. 675–694 (2006)
99. Young, J.W.: Projective Geometry. The Open Court Publishing Company, Chicago (1930)
Symbols




gcd         Greatest common denominator:           (1.1),     (1.2)
Zh          Modular numbers modulo(h):         (1.3)
(am−1 am−2 . . . a1 a0 ) p      p-adic number basis:          (1.7)
K[x]h         Modular polynomials modulo(h(x)):              (1.11)
(am−1 am−2 . . . a1 a0 )x−x0         (x − x0)-adic number basis:           (1.15)
z = x + iy, w = x + uy Complex number z and hyperbolic number w:
|w|h ≡        |ww− |    Hyperbolic modulus of w:             (2.1)
z = r(cos θ + i sin θ ) ≡ r exp iθ        Polar form of z.         (2.5)
w = ±ρ (cosh φ + u sinh φ ) ≡ ±ρ exp uφ              Hyperbolic polar form of w:    (2.6)
z1 z2 0      Inner product of z1 and z2 :       (2.8)
z1 z2 i      Outer product of z1 and z2 :       (2.8)
w−
  1 w2 0        Inner product of w1 and w2 :        (2.9)
w−
  1 w2 u        Outer product of w1 and w2 :        (2.9)
{u+ , u− }       Idempotent basis:       (2.11)
|X1 − X2|h        Spacetime distance between two events:              (2.22)
V = dX/dt = c + uv           Spacetime velocity:          (2.25)
P = γ mV         Spacetime momentum:           (2.25)
E = γ mc2         Total energy:      (2.27)
ab = a · b + a ∧ b        Geometric product:         (3.6), (3.13), (3.29)
ab = |a||b|eiθ         Euler form:     (3.8)


G. Sobczyk, New Foundations in Mathematics: The Geometric                               357
Concept of Number, DOI 10.1007/978-0-8176-8385-6,
© Springer Science+Business Media New York 2013
358                                                                                         Symbols


G2 = G(R2 )           Geometric algebra of R2 :              (3.9)
G3 = G(R3 )           Geometric algebra of R3 :              (3.11)
I = e123       Pseudoscalr of G3 :            (3.11)
Z(G3 )        Center of G3 :       (3.12)
a×b         Vector cross product:           (3.15)
a · (b ∧ c), a ∧ (b ∧ c)         Inner and outer products:             (3.16), (3.17)
A  B = 12 (AB − BA)   Anti-symmetric product:
√
  âb̂ Square root: (3.23)
(e)(n) , (e)T(n)      Row and column of vectors: (3.26), (4.1), (4.2)

a2 = |a|2          Magnitude of vector:            (3.28)
Gn = span{eλ(k) }nk=0          Standard basis of Gn : (3.30)

A† , A− , A         3 conjugations:       (3.31), (3.32), (3.33)
a · Bk , a ∧ Bk  Inner and outer products: (3.40), (3.39)
         
|Ak | = |Ak · A†k |   Magnitude of k-vector: (3.44)

Fa (x)      Directional derivative:           (3.45)
∂x = ∑ni=1 ei ∂∂xi       Vector derivative:           (3.46)
[b · ∂x , a · ∂x ] = b · ∂x a · ∂x − a · ∂x b · ∂x       Bracket operation:       (3.55)
[b, a] = b · ∂x a − a · ∂xb        Bracket operation:           (3.56)
 e1
g := e1 ge1           e-conjugate:       (4.10)
[g]      Matrix of the geometric number g:                  (4.12), (4.13)
g− , g† , g        3 conjugations:       (4.14), (4.15), (4.16)
v(k) = ∧(v)(k)         k-vector notation:           (5.1), (5.4)
Gkn      Space of k-vectors:          (5.5)
Mk        k-vector part:       (5.7)
f (v1 ∧ · · · ∧ vk ) = f (v1 ) ∧ · · · ∧ f (vk )       Outermorphism rule:        Definition 7.1.1
∂(k)     Simplicial k-derivative:             (7.3)
det f = ∂(n) · f(n)       Determinant of f :           (7.5)
f (e)(n) = ( f e)(n) = (e)(n) [ f ]       Matrix of f :        (7.7)
Symbols                                                                                359


(e)(n)        Column of vectors:         (7.9)
[1]n        Identity matrix:        (7.10)
f        Adjoint of f :      (7.18)
End(Rn )            Endomorphisms:           defined before (8.1)
ϕ f (λ )       Characteristic polynomial of f :               (8.1)
ψv (λ )        Minimal polynomial of f :              (8.7)
q(m−1) (a)           Jordan chain:     (8.11)
ei (e j ) = δ ji      Dual basis:     (9.1)
R p,q        Pseudo-Euclidean space:            (10.2)
ei       Reciprocal basis vector:            (10.4)
(e)(n)        Reciprocal basis:        (10.5)
G p,q        Geometric algebra of signature (p, q):               (10.10)
∂x = ∑ni=1 ei ∂∂xi        Vector derivative of signature (p, q):             (10.11)

(a)(n)        Reciprocal basis:        (10.18)
detA = a†(n) · a(n)         Gram determinant:            (10.17)
H p,q , U p,q         Unitary geometric algebra:              (10.19)
x · y, x ∧ y         Hermitian inner and outer products:                (10.20)
(a)(k)        Hermitian row of vectors:           (10.28), (10.29)
a(k)        Complex k-vectors:          (10.30)
f∗         Hermitian adjoint of f :          (10.35)
B j = {1, e1, e2 , e1 e2 }      Relative basis:          (11.15)
R2j        Relative plane:      (11.16)
H+           Relative positive oriented bivectors:               (11.17)
     #
g1       g2 , g1  g2      Relative inner and outer products:               (11.19)
G1,2         Standard basis:        (11.31)
a◦b          Twisted product:         (12.1)
a+ , a−            Special symbols:     (12.2)
Gn,n         Geometric algebra:         (12.18)
u±±...±
 1 2 ...n          Primitive idempotent:        (12.19)
360                                                                                            Symbols


tangle(a1, a2 ; b1 , b2 )        Entanglement table:          Definition 12.3.1
R        Group algebra:          (12.43), (12.46), (12.58)
β (R), β (M)          Boundary of chain:         (13.1), (13.4)
xi = ∂∂sxi        Tangent vectors:      (13.2)
xi     Reciprocal vectors:           (13.5)
ġ(x)∂˙x f˙(x)       Two sided vector derivative:            (13.7)

 M g(x)dx(m) f (x)            Directed integral:     (13.11)
             
D(M) = M dx(m)                Directed content:      (13.12)

 β (M) g(x)dx(m−1) f (x)           Directed integral over boundary:              (13.13)
         
s(t) = x |dx|          Arc length of curve:         (14.1)
Tx1 , Tx          Tangent space and algebra:         (15.2)
Ix = ∧(x)(k)          Pseudoscalar on k-surface:           (15.3)

nx = I'x i−1        Unit normal to k-surface:         (15.5)
[g] = [gi j ]      Metric tensor of k-surface:         (15.6)
∂x = ∑ki=1 xi ∂∂si       Vector derivative on k-surface:              (15.7)
Fa (x) = a · ∂x F(x)           Directional derivative on k-surface:             (15.8)
Fa,b (x)         Second derivative on k-surface:         (15.12)
Ha (g)          Directional derivatives of g-tensor:          (15.13), (15.15)
Px       Projection operator:         Definition 15.1.4
(xi j ) = (Ki j ) + (Li j )      Matrix of second derivatives:            (15.21), (15.22)
La,b = Pa (Px (b))            Derivatives of normal vectors:           (15.24)
L(g) = ∂˙x Ṗx (g)       Shape operator:         (15.26)
n(a) = −Pa (n)           Weingarten map:           (15.30)
d2 x
ds2
     = κg S + κn K            Geodesic and normal curvature:             (15.31), (15.32)
∇x F(x), F/a (x)         Coderivatives:       (15.39), (15.40)
KG , κm          Gausian and mean curvature:           (15.42), (15.43)
La,b = La,b · n         Second fundamental form:              (15.44)
R(a ∧ b) = ∂v ∧ Pa Pb (v)            Riemann curvature bivector:               Definition 15.5.1
Ri jkl = R(xi ∧ y j ) · (xk ∧ xl )      Classical Riemann curvature tensor:                (15.51)
Symbols                                                                                          361


(x )(k) = f (x)(k)         Push forward:         (16.2)
f (∂x ) = ∂x          Pull back:      (16.4)
f a (b) = f b (a)        Integrability:        (16.7)
f /b (a), f /a,/b     Intrinsic coderivatives:          Definition 16.1.1

L (A) = ∂˙x ḟ (A)         Generalized shape operator:              (16.16)
Φ (Ar ) = f (Φ (Ar ))          Shape divergence:            (16.17)
W4 (a(2) ) = R(a(2) ) ∧ a(2)          Conformal Weyl 4-vector:            (16.28)
WC (a(2) )          Classical conformal Weyl tensor:           (16.29)

a · δx = a · ∇x + h−1
                   x ha            Affine directional h-coderivative:         (16.37)
H/a (b) = K/a (b) + T/a (b)           Affine tensor:        (16.44)
Ahn        Affine plane:       Definition 17.1.1
Sx∗h Sxh        Rays and representants:           (17.1), (17.2)
SAr ∩ SBs SAr ∪ SBs ,         Meet and join:        (17.3), (17.4)
Πn         Projective plane:         (17.11)
r(a, b, c, d)         Cross ratio:     (17.15)
H (a, b, c, d)          Harmonically related:           (17.16)
H p,q         (p, q)-horosphere:        (17.35)
xa , xc , [xc ]       Homogeneous and conformal representants:                (17.36), (17.40)
A n , Bn            Null cones:      (18.1)
Ωn,n
 2          Standard basis of bivectors:           (18.5)

F(k) : x = F(k)  x          Standard basis of bivectors:            (18.7)
GLn         General linear group:         (18.8)
∂x = ∂xa + ∂xb           Decomposition of vector derivative:             (18.10)
gln = Ωn,n
       2             General Lie algebra:         Definition 18.2.1
∂W         Bivector derivative:        (18.20), (18.21)
I p,q = ∧(e)(p,q)         Pseudoscalar:         (18.32)
Pp,q       Projection operator:         (18.33)
F p,q = Pp,q (F)         Projection of bivector:          (18.34)
so p,q      Lie algebra so p,q :       Definition 18.4.1
362                                                                  Symbols


spin p,q      Lie algebra spin p,q :     Definition 18.39
O p,q       Orthogonal Lie group O p,q :         Definition 18.4.2
SO p,q       Lie algebra SO p,q :      (18.41)
Sp2n        Lie group Sp2n :    Definition 18.42, (18.44)
SO p,q       Lie algebra SO p,q :      (18.41)
U p,q      Unitary Lie group U p,q :      (18.45)
SU p,q      Special unitary Lie group SU p,q:         (18.46)
Dg         Commutator subalgebra:         (18.48)
S ⊂h          Root system:      Definition 18.5.1
sln (C)      Special linear Lie algebra:         (18.51)
[Hn ]       Cartan matrix:     (18.53)
Index




Symbols                                       B
C p ,C∞ geometric function, 64                basis
a-derivative, 256                                 change of, 118
k-vector                                          dual, 137
     k-blade, 85                                  idempotent, 33
     magnitude of                                 of k-vectors, 59
        inverse of, 62                            orthogonal, 157
m-chain, 223, 230                                 reciprocal, 109, 110, 159, 225
m-surface, 224                                    relative, 189
p-adic number basis, 4                        basis of Rn , 87
                                              basis vectors
                                                  reciprocal, 255
A                                             bilinear form, 142
adjoint, 113                                      diagonal form, 143
    mapping, 276                                  matrix of, 142
affine connection, 291                            non-singular, 143
affine h-coderivative, 292                        quadratic form of, 144
affine tensor, 292                                rank of, 143
Ahlfors Vahlen matrix, 287                        skew-symmetric, 342
algebra                                           skewsymmetric part, 144
    associative, 45, 201                          symmetric, 142
algebraic multiplicity, 120                       symmetric part, 144
analytic function, 14, 239                    binomial theorem
angular velocity                                  idempotent basis, 34
    of a Frenet frame, 247                    bivector
antisymmetric product, 53                         2-blade, 86
approximation                                     relative, 188
    osculating-Pade, 20                           unit, 45
Approximation Theorem, 19                     bivector derivative, 337
arclength, 244                                boundary
atlas                                             of a rectangle, 223
    of charts, 253                            boxed cross product, 190
atlas of charts, 254                          bracket
Ausdehnungslehre, 85                              of partial derivatives, 66
automorphism                                      of vectors, 66
    inner, 187                                Burnside, 201


G. Sobczyk, New Foundations in Mathematics: The Geometric                          363
Concept of Number, DOI 10.1007/978-0-8176-8385-6,
© Springer Science+Business Media New York 2013
364                                                               Index


C                                 conjugate products
Cartan subalgebra, 346                complex
Cauchy kernel function, 237               hyperbolic, 30
Cauchy’s integral formula, 239    conjugation
    generalized, 239                  Clifford, 60
Cauchy’s integral theorem, 238        complex, 161
Cayley-Hamilton                       grade inversion, 60
    Theorem, 121                      reverse, 60
center                            correlation
    Z(G3 ), 81                        between basis, 176
    of G3 , 51                        full, 176
    of G1,2 , 195                     principal, 176
chain rule, 229                   Cramer’s rule, 92
characteristic polynomial, 120    cross product
Chinese Remainder Theorem, 3          boxed, 190
    for modular polynomials, 9        of vectors, 51
Christoffel                       cross ratio
    components, 259                   of points, 310
    vectors, 259                  cubic equation, 35
CLICAL, 205                           reduced, 35
Clifford                          curvature
    conjugation, 60                   of a curve, 246
    William Kingdon, 57               Gaussian, 270
Clifford algebra, 34                  mean, 270
Clifford-conjugation, 162             principal, 270
Codazzi-Mainardi equations, 273   curvature tensor, 254
coderivative, 268                 curve
    directional, 268                  regular, 243
    of a mapping, 277             cylindrical coordinates, 228
    second, 277
    vector, 268
cofactor                          D
    algebraic, 115                Darboux bivector, 246
column vectors, 68                Dedekind, R., 211
complex                           definition, 300, 305
    k-vector, 162                 derivation rule, 258
complex conjugation, 161          derivative
complex hyperbolic numbers, 34        a-, 108
complex numbers, 23, 24               directional, 64
    inner product                     partial, 64
        outer product, 30             simplicial, 108
complex vector, 161                   vector
    distance function, 169                a-derivative, 63
    magnitude, 165                Desargues’ configuration, 305
    non-null, 166                 determinant, 120
conformal mapping, 275            differentiable
    transversion, 286                 function, 64
conformal representant, 323       differentiable manifold, 254
conformal Weyl tensor, 285        differential
conformally related                   of a mapping, 276
    surfaces, 282                 differential forms, 57
conic, 312                        diffiomorphism, 275
conjugate                         directed content, 230
    hyperbolic, 24                directed integral, 230
Index                                                                365


directed plane segment, 46        Frenet–Serret, 245
    bivector, 59                  Frenet-Serret
directed volume element, 50          equations of, 246
dot product, 45                   Frobenius, 201
double covering, 335              Frobenius, F.G., 211
dual                              function
    space, 137                       analytic, 239
dual form, 346                       continuous, 255
dual space                           geometric-valued, 255
    change of basis, 140          fundamental theorem
Dynkin diagram, 347                  of calculus, 232
                                     of curves, 249

E
eigenvalues, 120                  G
   complex, 120                   Gauss Jordan
eigenvector                          elimination, 100
   complex, 120                   Gauss’ Divergence Theorem, 241
   generalized, 128               Gauss’ Theorem, 237
Einstein, 37, 194                 Gaussian curvature, 270
Einstein convention, 255          general linear group, 333
Einstein, Albert, 23              general position
endomorphism, 120                    of points, 305
entanglement table, 208           generators
Euclidean                            of a Lie algebra, 343
   distance, 38                   geodesic, 267
   orthogonal, 30                    spray, 269
Euclidean algorithm, 1, 2         geometric algebra, 34, 58
   for polynomials, 8                neutral signature, 201
Euclidean geometry, 23, 320          of pseudoeuclidean space, 155
Euclidean length                     relative, 188
   or magnitude, 58                  spectral basis, 205
Euclidean space                      tangent, 253
   n-dimensional, 57                 unitary, 161
   relative, 184                  geometric analysis, 237
Euclidean transformation, 320     geometric multiplication, 45
Euler form, 47                    geometric number
Euler phi function, 6                Clifford conjugation, 60
even subalgebra                      grade inversion, 60
   of G1,2 , 195                     reverse, 60
event, 38                         geometric product, 60
   coordinates, 38                   symmetric part
exponential function, 26                 anti-symmetric part, 58
                                  Gram determinant, 158
                                  Gram matrix, 157, 169, 226
F                                 Gram-Schmidt
factor ring, 2                       orthogonalization, 110, 157
    of polynomials, 17            Grassmann
Fermat’s theorem, 6                  Hermann, 57
field, 2                          Grassmann algebra, 88
fields                            Grassmann exterior product, 47
    finite modular number, 8      greatest common divisor, 2
Fitzgerald-Lorentz contraction,   Green’s Theorem, 240
            40                    Green’s theorem, 236
366                                                                    Index


group                                  hyperplane, 55, 139
   character, 211                      hypersurface, 255
   representation, 201
   special linear, 335
   special unitary, 344                I
   symmetric, 210                      ideal
group algebra, 210                         Abelian, 345
                                           hyperplane, 304
                                           point, 304
H                                      ideal line
Hamilton                                   at infinity, 319
    quaternions, 57                    idempotent, 144, 205
    William, 57                            basis, 33
Hamilton’s quaternions, 43                 primitive, 205
helix, 248                             idempotents
Hermite-Pade approximation, 20             mutually annihilating, 33
Hermitian                                  mutually annihiliating, 3
    transpose, 163                     index set, 205
hermitian                              indicies
    inner product, 162                     upper
    outer product, 162                         lower, 71
hermitian adjoint, 172                 inertial system
hermitian quadratic form                   rest frame, 190
    diagonalization of, 169            inner automorphism
Hermitian space, 153                       e1 -conjugate, 80
histories, 40                          inner product, 45, 60
history, 39                                Minkowski, 195
homogeneous representant, 298              of quadratic form, 154
hyperbola                                  of vectors, 58
    four branched, 27                      relative, 190
hyperbolic                             integrability
    angle, 28                              of a mapping, 277
    arc length, 28                     integrability condition, 65
    conjugate, 24                      integral domain, 2
    cosine, 26                         interior, 223
    distance, 25                       interpolation polynomial
    inverse, 25                            Lagrange-Sylvester, 14
    modulus                            intersection, 300
        distance, 38                   inverse
        length, 25                         Moore-Penrose, 178
    number plane                       involution, 310
        elementary functions, 34       isometry, 158, 278
    numbers, 23                        isotropic, 33
        real part, 25                      lines
    orthogonal, 30                             vectors, 33
    orthogonal coordinate system, 39   isotropic lines, 28
    polar form, 27
    quadrants, 27, 28
    sine, 26                           J
hyperbolic numbers                     Jacobi identity, 334
    inner product                      join, 300
        outer product, 30              Jordan normal form, 130
    unipotent part, 25                     mountain tops, 131
Index                                                                       367


K                                Lorentz boost, 163
kernel                              active, 184, 187, 194
   of linear operator, 118          passive, 184, 192, 194
Killing form, 339                Lorentz equations, 39
Kronecker delta, 138             Lorentz transformation, 37
                                 Lorentzian geometry, 23, 25
                                 Lorentzian plane, 38
L                                Lounesto
Lagrange                            Clical, 211
    Theorem of, 6
Lancret, 248
Law of Inertia                   M
    Sylvester’s, 147             Mathematica, 77
Leibniz product rule, 230           for spectral basis of polynomials, 15
Lie algebra                      matrices, 24
    so p,q , 340                    geometric basis
    spin p,q , 340                      spectral basis, 79
    commutator subalgebra, 345      mutually annihilating idempotents, 77
    general, 334                    over geometric numbers, 69
    ideal of, 345                matrix
    nilpotent, 345                  addition
    semisimple, 345                     scalar multiplication, 72
    simple, 345                     adjoint of, 91
    solvable, 345                   Ahlfors Vahlen, 287
    special, 335                    augmented, 96
    unitary, 343                    cofactor of, 91
Lie bracket, 256, 276               companion, 124
    of matrices, 337                congruent, 143
Lie eigenvalue equation             diagonal, 103
    negative, 350                   elementary, 97
    positive, 349                       inverse, 99
Lie group, 333                      Gram, 157, 169
    orthogonal, 341                 Gramian, 110
    sympletic, 341                  hermitian, 174
    unitary, 344                    idempotent, 76
light signal, 40                    inverse, 114
lightlike                               identity, 77
    separation, 39                  lower triangular, 103
line segment                        LU decomposition, 103
    directed, 47                    minor of, 91
linear                              multiplication, 73
    form, 137                       nilpotent, 77
    mapping                         normal, 174
         operator, 107              of g ∈ G2 , 80
    transformation, 107             of a bilinear form, 142
linear equations, 95                of a linear operator, 109
linear operator                     of second derivatives, 258
    determinant of, 120             of transition, 88, 155
    kernel of, 118                  orthogonal, 174
    scalar invariants, 120          permutation, 103
    trace, 120                      similar, 143
Lorentz                             skew-symmetric, 143
    H. A., 37                       symmetric, 143
368                                                                   Index


matrix (cont.)                   orthogonal transformation, 158
   transpose, 109                orthonormal basis
   unitary, 174                      relative, 184
   upper triangular, 103         outer product, 47, 60
matrix algebra                       Minkowski, 195
   rules of, 78                      of vectors, 58
matrix representation                relative, 190
   real, 205                     outermorphism, 108, 187
mean curvature, 270                  adjoint, 114
metric tensor, 155, 255          outward normal, 230
minimal polynomial, 123
Minkowski
   diagram, 40                   P
   diagrams, 39                  Pauli bivectors, 344
   Hermann, 37                   permutation matrix, 98
   plane, 38                     plane
   spacetime, 37                     splitting the, 194
   vector, 195                   plane segment
Minkowski space–time, 181, 194       directed, 47
Minkowski spacetime              Poincare, 37
   restricted, 194               points
modular number system, 2             conjugate, 316
module, 79, 210                      cross ratio, 310
   over a ring, 68                   harmonically related, 309
momentum, 41                     polar decomposition, 178
monogenic function, 237          polar form
moving frame, 243, 246               complex, 26
multivector field, 268                   hyperbolic, 28
multivectors                     polarity, 316
   complex, 162                  polynomial
                                     osculating, 19
                                 polynomial numbers, 9
N
                                 polynomials
Nash, John, 253
                                     Hermite interpolation, 19
nilpotent, 9, 130
                                 primitive nth root of unity, 35
    index of, 4, 77
                                 principal curvature, 270
    matrix, 77
                                 product
non-null, 166
                                     convention, 61
normal
                                 projection, 3, 144
    to a curve, 246
                                     orthogonal, 144
normal components, 259
                                 projective
normalized point, 303
                                     geometry, 304
                                     plane, 304
O                                projectively related surfaces, 280
open rectangle, 223              pseudo-Euclidean space, 65, 110,
operator                                     153
    hermitian, 172               pseudoscalar, 51
    nilpotent, 173                   of Rn , 59
    normal, 172                  pseudoscalar element, 255
    projection, 173              pull back
    self adjoint, 172                mapping, 276
    unitary, 172                 push forward
orientable                           mapping, 276
    manifold, 255                Pythagorean Theorem, 47
Index                                                                    369


Q                                   row operations
quadratic form, 144                    elementary, 96
   diagonalization of, 158          row vectors, 69
   inner product of, 154
   signature of, 150
quaternions, 57                     S
   Hamilton, 43                     Schwarz inequality, 111, 169
                                    shape bivector, 263
                                    shape divergence, 280
R                                   shape operator, 261
rank                                    generalized, 280
    of linear operator, 118         shape tensor, 254
ray, 298, 299, 304                  similarity geometry, 320
reciprocal basis, 110               simple k-vector, 85
reduced cubic equation, 36          simple m-surface, 233
reflection, 54                      Simpson’s theorem, 303
relative plane                      spacelike
    direction, 188                      separation, 40
    orientation, 188                spacetime
relative position, 39                   distance, 38
relative time, 39                   spacetime algebra, 196
relatively prime, 6                 spacetime momentum, 41
reparameterization                  spacetime velocity, 40
    natural, 244                    special linear group, 335
    regular, 244                    special relativity, 23, 37
    unit speed, 244                 spectral basis, 3, 19, 205
representant, 300                       complete, 4, 9
representation                          of G2 , 79
    group, 201                          of G3 , 81
    of S4 , 211                         of linear operator, 125
    of S8 , 214                         of polynomials, 9
    of S16 , 215                    spectral decomposition, 33
    of S2n , 220                        of linear operator, 125
rest frame, 39                      spectral decomposition formula, 10
    inertial system, 190            spherical coordinates, 228
rest mass, 41                       square roots of unity
Riemann                                 anticommuting, 58
    curvature tensor, 273           standard basis
Riemann curvature bivector, 272         of Gn , 59
Riemann integral, 225                   hyperbolic numbers, 24
rigid motion, 278                       of G2 , 48
ring                                    of G3 , 50
    modular polynomial, 8               of polynomials, 9
    polynomial, 8                   Stokes’ Theorem, 240
Rolle’s theorem                     Stokes’ theorem, 236
    generalized, 17                 subspace
root bivectors                          of bivectors, 86
    negative, 349
    positive, 349
rotation, 54                        T
    active, 186                     tangent geometric algebra, 253
    half angle formula              tangent vector space, 225
        two sided representation,   Taylor series, 14
             55                        generalized, 17
370                                                               Index


Taylor’s Theorem            unit tangent, 245
    generalized, 18         unitary geometric algebra, 153, 161
tensor, 256
    affine, 292
    antisymmetric, 57       V
    derivative of, 257      Vahlen matrix, 287
    torsion, 293            vector
timelike, 39                   column, 70
    separation, 39             complex, 161
topology                       derivative, 63
    induced, 255               lightlike, 195
torsion tensor, 293            magnitude of
total curvature, 274               length of, 45
total energy, 41               non-null, 157
trace                          position, 223
    of a linear operator,      relative, 187
            120                row, 58, 70
transformation                 spacelike, 195
    adjoint, 113               timelike, 195
transformations                unit, 44, 48
    orthogonal, 54             unit k-, 63
    reflection, 54          vector derivative, 256
    rotation, 54               two sided, 229
transversion, 286           vector manifolds, 253
trivector, 50               vector space, 9, 24
twisted product, 201           definition, 67
    symmetric part, 207     vectors
                               linearly independent, 89


U                           W
U-group, 6                  Whitney, Hassler, 253
union, 300                  Whitney-Nash
unipodal numbers, 34           embedding theorems, 253
unipotent, 24               worldline, 39



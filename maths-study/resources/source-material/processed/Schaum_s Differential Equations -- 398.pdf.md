---
normalized_id: shared-pdf-reference-schaum-s-differential-equations-398
exam_code: SHARED
material_scope: schaum_s differential equations -- 398.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Schaum_s Differential Equations -- 398.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-schaum-s-differential-equations-398

     SCHAUM'S
    OUTLINE OF




DIFFERENTIAL
  EQUATIONS
                                   SCHAUM'S
                                 OUTLINE OF




DIFFERENTIAL
           EQUATIONS
                                                    Third Edition

                   RICHARD BRONSON, Ph.D.
                            Professor of Mathematics and Computer Science
                                             Fairleigh Dickinson University

                      GABRIEL B. COSTA, Ph.D.
ssociate Professor of Mathematical Sciences, United States Military Academ
                   Associate Professor of Mathematics and Computer Science
                                                       Seton Hall University


                                      Cham's          Outline Series
                                                             McGRAW-fflLL
                                             New York Chicago San Francisco
                                   Lisbon London Madrid Mexico City Milan
                                         New Delhi San Juan Seoul Singapore
                                                            Sydney Toronto
Copyright © 2006, 1994, 1973 by The McGraw-Hill Companies, Inc. All rights reserved. Manufactured in the United States of America.
Except as permitted under the United States Copyright Act of 1976, no part of this publication may be reproduced or distributed in any form
or by any means, or stored in a database or retrieval system, without the prior written permission of the publisher.

0-07-149110-4

The material in this eBook also appears in the print version of this title: 0-07-145687-2.

All trademarks are trademarks of their respective owners. Rather than put a trademark symbol after every occurrence of a trademarked
name, we use names in an editorial fashion only, and to the benefit of the trademark owner, with no intention of infringement of the trade-
mark. Where such designations appear in this book, they have been printed with initial caps.

McGraw-Hill eBooks are available at special quantity discounts to use as premiums and sales promotions, or for use in corporate training
programs. For more information, please contact George Hoare, Special Sales, at george_hoare@mcgraw-hill.com or (212) 904-4069.

TERMS OF USE

This is a copyrighted work and The McGraw-Hill Companies, Inc. (“McGraw-Hill”) and its licensors reserve all rights in and to the work.
Use of this work is subject to these terms. Except as permitted under the Copyright Act of 1976 and the right to store and retrieve one copy
of the work, you may not decompile, disassemble, reverse engineer, reproduce, modify, create derivative works based upon, transmit, dis-
tribute, disseminate, sell, publish or sublicense the work or any part of it without McGraw-Hill’s prior consent. You may use the work for
your own noncommercial and personal use; any other use of the work is strictly prohibited. Your right to use the work may be terminated if
you fail to comply with these terms.

THE WORK IS PROVIDED “AS IS.” McGRAW-HILL AND ITS LICENSORS MAKE NO GUARANTEES OR WARRANTIES AS TO
THE ACCURACY, ADEQUACY OR COMPLETENESS OF OR RESULTS TO BE OBTAINED FROM USING THE WORK, INCLUD-
ING ANY INFORMATION THAT CAN BE ACCESSED THROUGH THE WORK VIA HYPERLINK OR OTHERWISE, AND
EXPRESSLY DISCLAIM ANY WARRANTY, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WAR-
RANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. McGraw-Hill and its licensors do not warrant or
guarantee that the functions contained in the work will meet your requirements or that its operation will be uninterrupted or error free.
Neither McGraw-Hill nor its licensors shall be liable to you or anyone else for any inaccuracy, error or omission, regardless of cause, in the
work or for any damages resulting therefrom. McGraw-Hill has no responsibility for the content of any information accessed through the
work. Under no circumstances shall McGraw-Hill and/or its licensors be liable for any indirect, incidental, special, punitive, consequential
or similar damages that result from the use of or inability to use the work, even if any of them has been advised of the possibility of such
damages. This limitation of liability shall apply to any claim or cause whatsoever whether such claim or cause arises in contract, tort or oth-
erwise.

DOI: 10.1036/0071456872
To Ignace and Gwendolyn Bronson, Samuel and Rose Feldschuh — RB
To the great mathematicians and educators I have been blessed to meet: Professors Bloom, Brady, Bronson,
Dostal, Goldfarb, Levine, Manogue, Pinkham, Pollara and Suffel...and, of course, Mr Rod! — GBC
                                                                      PREFACE



Differential equations are among the linchpins of modern mathematics which, along with matrices, are
essential for analyzing and solving complex problems in engineering, the natural sciences, econom-
ics, and even business. The emergence of low-cost, high-speed computers has spawned new tech-
niques for solving differential equations, which allows problem solvers to model and solve complex
problems based on systems of differential equations.
     As with the two previous editions, this book outlines both the classical theory of differential equa-
tions and a myriad of solution techniques, including matrices, series methods, Laplace transforms and
several numerical methods. We have added a chapter on modeling and touch upon some qualitative
methods that can be used when analytical solutions are difficult to obtain. A chapter on classical dif-
ferential equations (e.g., the equations of Hermite, Legendre, etc.) has been added to give the reader
exposure to this rich, historical area of mathematics.
     This edition also features a chapter on difference equations and parallels this with differential
equations. Furthermore, we give the reader an introduction to partial differential equations and the
solution techniques of basic integration and separation of variables. Finally, we include an appendix
dealing with technology touching upon the TI-89 hand-held calculator and the MATHEMATICA
software packages.
     With regard to both solved and supplementary problems, we have added such topics as integral
equations of convolution type, Fibonacci numbers, harmonic functions, the heat equation and the wave
equation. We have also alluded to both orthogonality and weight functions with respect to classical
differential equations and their polynomial solutions. We have retained the emphasis on both initial
value problems and differential equations without subsidiary conditions. It is our aim to touch upon
virtually every type of problem the student might encounter in a one-semester course on differential
equations.
     Each chapter of the book is divided into three parts. The first outlines salient points of the theory
and concisely summarizes solution procedures, drawing attention to potential difficulties and sub-
tleties that too easily can be overlooked. The second part consists of worked-out problems to clarify and,
on occasion, to augment the material presented in the first part. Finally, there is a section of problems
with answers that readers can use to test their understanding of the material.
     The authors would like to thank the following individuals for their support and invaluable assis-
tance regarding this book. We could not have moved as expeditiously as we did without their support
and encouragement. We are particularly indebted to Dean John Snyder and Dr. Alfredo Tan of
Fairleigh Dickinson University. The continued support of the Most Reverend John J Myers, J.C.D.,
D.D., Archbishop of Newark, N.J., is also acknowledged. From Seton Hall University we are grateful
to the Reverend Monsignor James M. Cafone and to the members of the Priest Community; we also
thank Dr. Fredrick Travis, Dr. James Van Oosting, Dr. Molly Smith, and Dr. Bert Wachsmuth and the
members of the Department of Mathematics and Computer Science. We also thank Colonel Gary
W. Krahn of the United States Military Academy.
     Ms. Barbara Gilson and Ms. Adrinda Kelly of McGraw-Hill were always ready to provide any
needed guidance and Dr. Carol Cooper, our contact in the United Kingdom, was equally helpful.
Thank you, one and all.

                                                           VII

Copyright © 2006, 1994, 1973 by The McGraw-Hill Companies, Inc. Click here for terms of use.
            For more information about this title, click here




                                           CONTENTS



Chapter 1    Basic Concepts                1
             Differential Equations 1
             Notation 2
             Solutions 2
             Initial-Value and Boundary-Value Problems                    2

Chapter 2    An Introduction to Modeling and
             Qualitative Methods 9
             Mathematical Models 9
             The "Modeling Cycle" 9
             Qualitative Methods 10

Chapter 3    Classifications of First-Order
             Differential Equations 14
             Standard Form and Differential Form                     14
             Linear Equations 14
             Bernoulli Equations 14
             Homogeneous Equations 15
             Separable Equations 15
             Exact Equations 15

Chapter 4    Separable First-Order Differential Equations                          21
             General Solution 21
             Solutions to the Initial-Value Problem 21
             Reduction of Homogeneous Equations 22

Chapter 5    Exact First-Order Differential Equations                         31
             Defining Properties 31
             Method of Solution 31
             Integrating Factors 32

Chapter 6    Linear First-Order Differential Equations                        42
             Method of Solution 42
             Reduction of Bernoulli Equations                   42

                                   IX
X                       CONTENTS




Chapter 7    Applications of First-Order Differential
             Equations 50
             Growth and Decay Problems     50
             Temperature Problems 50
             Falling Body Problems 51
             Dilution Problems 52
             Electrical Circuits 52
             Orthogonal Trajectories 53


Chapter 8    Linear Differential Equations: Theory of
             Solutions 73
             Linear Differential Equations 73
             Linearly Independent Solutions 74
             The Wronskian 74
             Nonhomogeneous Equations 74


Chapter 9    Second-Order Linear Homogeneous Differential
             Equations with Constant Coefficients 83
             Introductory Remark 83
             The Characteristic Equation   83
             The General Solution 84


Chapter 10   nth-Order Linear Homogeneous Differential
             Equations with Constant Coefficients 89
             The Characteristic Equation   89
             The General Solution 90


Chapter 11   The Method of Undetermined Coefficients     94
             Simple Form of the Method 94
             Generalizations 95
             Modifications 95
             Limitations of the Method 95


Chapter 12   Variation of Parameters            103
             The Method 103
             Scope of the Method   104


Chapter 13   Initial-Value Problems for Linear
             Differential Equations 110
                          CONTENTS                               XI




Chapter 14   Applications of Second-Order Linear
             Differential Equations 114
             Spring Problems 114
             Electrical Circuit Problems 115
             Buoyancy Problems 116
             Classifying Solutions 117


Chapter 15   Matrices      131
             Matrices and Vectors 131
             Matrix Addition 131
             Scalar and Matrix Multiplication 132
             Powers of a Square Matrix 132
             Differentiation and Integration of Matrices   132
             The Characteristic Equation 133


Chapter 16   eat    140
             Definition 140
             Computation of eAt    140


Chapter 17   Reduction of Linear Differential Equations
             to a System of First-Order Equations 148
             An Example 148
             Reduction of an nth Order Equation    149
             Reduction of a System 150


Chapter 18   Graphical and Numerical Methods for Solving
             First-Order Differential Equations 157
             Qualitative Methods 157
             Direction Fields 157
             Euler's Method 158
             Stability 158


Chapter 19   Further Numerical Methods for Solving
             First-Order Differential Equations 176
             General Remarks 176
             Modified Euler's Method 177
             Runge-Kutta Method 177
             Adams-Bashford-Moulton Method 177
             Milne's Method 177
             Starting Values 178
             Order of a Numerical Method 178
Xll                       CONTENTS




Chapter 20   Numerical Methods for Solving Second-Order
             Differential Equations Via Systems 195
             Second-Order Differential Equations 195
             Euler's Method 196
             Runge-Kutta Method 196
             Adams-Bashford-Moulton Method 196

Chapter 21   The Laplace Transform            211
             Definition 211
             Properties of Laplace Transforms 211
             Functions of Other Independent Variables     212

Chapter 22   Inverse Laplace Transforms             224
             Definition 224
             Manipulating Denominators 224
             Manipulating Numerators 225

Chapter 23   Convolutions and the Unit Step Function            233
             Convolutions 233
             Unit Step Function 233
             Translations 234

Chapter 24   Solutions of Linear Differential Equations with
             Constant Coefficients by Laplace Transforms 242
             Laplace Transforms of Derivatives     242
             Solutions of Differential Equations   243

Chapter 25   Solutions of Linear Systems by Laplace
             Transforms 249
             The Method    249

Chapter 26   Solutions of Linear Differential Equations
             with Constant Coefficients by Matrix Methods             254
             Solution of the Initial-Value Problem 254
             Solution with No Initial Conditions 255

Chapter 27   Power Series Solutions of Linear Differential
             Equations with Variable Coefficients 262
             Second-Order Equations 262
             Analytic Functions and Ordinary Points 262
             Solutions Around the Origin of Homogeneous Equations   263
                         CONTENTS                                           Xlll




             Solutions Around the Origin of Nonhomogeneous Equations      263
             Initial-Value Problems 264
             Solutions Around Other Points 264

Chapter 28   Series Solutions Near a Regular Singular Point                275
             Regular Singular Points 275
             Method of Frobenius 275
             General Solution 276

Chapter 29   Some Classical Different Equations               290
             Classical Differential Equations 290
             Polynomial Solutions and Associated Concepts     290

Chapter 30   Gamma and Bessel Functions                 295
             Gamma Function 295
             Bessel Functions 295
             Algebraic Operations on Infinite Series    296

Chapter 31   An Introduction to Partial
             Differential Equations 304
             Introductory Concepts 304
             Solutions and Solution Techniques    305

Chapter 32   Second-Order Boundary-Value Problems                   309
             Standard Form 309
             Solutions 310
             Eigenvalue Problems 310
             Sturm-Liouville Problems 310
             Properties of Sturm-Liouville Problems     310

Chapter 33   Eigenfunction Expansions             318
             Piecewise Smooth Functions     318
             Fourier Sine Series 319
             Fourier Cosine Series 319

Chapter 34   An Introduction to Difference Equations                325
             Introduction 325
             Classifications 325
             Solutions 326

APPENDIX A   Laplace Transforms           330
xiv                           CONTENTS




APPENDIX B          Some Comments about Technology   336
                    Introductory Remarks 336
                    Tl-89 337
                    MATHEMATICA 337

ANSWERS TO SUPPLEMENTARY PROBLEMS        338


INDEX   382
     SCHAUM'S
    OUTLINE OF




DIFFERENTIAL
  EQUATIONS
                                                                         CHAPTER 1



                                                   Basic Concepts

DIFFERENTIAL EQUATIONS
     A differential equation is an equation involving an u n k n o w n function and Ms derivatives.

Example 1.1.       The follow ins arc differential equations involving the unknown function v,




     A differential equation is an ordinary differential equation (ODH) if (he unknown function depends on onl>
one independent \ariahle. If Ihe unknown function depends on two or more independent \ariablcs. the differ-
ential equation is u partial differential t'i/itation (l'l)l-j. With the exceptions of Chapters 31 and 34, the primary
focus of this hook mil he ordinary differential equations.

Example 1.2. Hqualions ( / . / ) through ( / 4) art examples, lil'ordman iliireremial equations, since Ihe unknown funclion v
depends solely on the \ uriubk' .v. hk.|uiui(in (1.5) is LL parti al dillL'renlial equal Kin, si nee v depends on both LliL 1 independent
variables / and T.

     The order of a differenlial equation is the order of the highest derivative appearing in the equation.

Example 1.3. Equation ( l . t ) is a first-order differential equalion- (1.2), (!.4), and (/.5| are second-ordtr differential
equations. [Note in (1.4) that the order of the highest derivative appearing in Ihe equation is t\vo.| Equation ( l . j ) is a third-
order differential equation.

                                                                    1

Copyright © 2006, 1994, 1973 by The McGraw-Hill Companies, Inc. Click here for terms of use.
2                                                      BASIC CONCEPTS                                                      [CHAR 1



NOTATION
     The expressions /, /', /", y- ',..., y-"' are often used to represent, respectively, the first, second, third, fourth,
..., wth derivatives of y with respect to the independent variable under consideration. Thus, /' represents d2yldx2
if the independent variable is x, but represents d2yldp2 if the independent variable is p. Observe that parentheses
are used in y^ to distinguish it from the wth power, y^n\ If the independent variable is time, usually denoted by t,
primes are often replaced by dots. Thus, y, y, and y represent dyldt, d2yldt2, and d3yldt3, respectively.


SOLUTIONS
      A solution of a differential equation in the unknown function y and the independent variable x on the interval
J>, is a function y(x) that satisfies the differential equation identically for all x in J>.

Example 1.4.       Is y(x) = c1 sin 2x + c2 cos 2x, where c1 and c2 are arbitrary constants, a solution of y" + 4y = 0?

         Differentiating y, we find



Hence,




Thus, v = Ci sin 2jc + c, cos 2x satisfies the differential equation for all values of x and is a solution on the interval (- °°, °°).


Example 1.5.       Determine whether y = x2 — 1 is a solution of (y')4 + y2 = —I.

      Note that the left side of the differential equation must be nonnegative for every real function y(x) and any x, since it
is the sum of terms raised to the second and fourth powers, while the right side of the equation is negative. Since no function
y(x) will satisfy this equation, the given differential equation has no solution.

     We see that some dinerential equations have mnnitely many solutions (Example 1.4), whereas other dil-
ferential equations have no solutions (Example 1.5). It is also possible that a differential equation has exactly
one solution. Consider (y')4 + y2 = 0, which for reasons identical to those given in Example 1.5 has only one
solution y = 0.
     A particular solution of a differential equation is any one solution. The general solution of a differential
equation is the set of all solutions.

Example 1.6. The general solution to the differential equation in Example 1.4 can be shown to be (see Chapters 8 and 9)
y = Ci sin 2x + c2 cos 2x. That is, every particular solution of the differential equation has this general form. A few particular
solutions are: (a) y = 5 sin 2x - 3 cos 2x (choose c1 = 5 and c2 = — 3), (b) y = sin 2x (choose c1 = 1 and c2 = 0), and (c)y = 0
(choose Ci = c, = 0).

    The general solution of a differential equation cannot always be expressed by a single formula. As an example
consider the differential equation y' + y2 = 0, which has two particular solutions y = \lx and y = 0.


INITIAL-VALUE AND BOUNDARY-VALUE PROBLEMS
     A differential equation along with subsidiary conditions on the unknown function and its derivatives, all
given at the same value of the independent variable, constitutes an initial-value problem. The subsidiary condi-
tions are initial conditions. If the subsidiary conditions are given at more than one value of the independent
variable, the problem is a boundary-value problem and the conditions are boundary conditions.
CHAP. 1]                                              BASIC CONCEPTS                                                        3




Example 1.7. The problem y" + 2y' = ex;y(n) = 1, y'(Tt) = 2 is an initial-value problem, because the two subsidiary con-
ditions are both given at x = n. The problem y" + 2y' = ex; y(0) = 1, y(l)=l is a boundary-value problem, because the two
subsidiary conditions are given at the different values x = 0 and x = 1.

    A solution to an initial-value or boundary-value problem is a function y(x) that both solves the differential
equation and satisfies all given subsidiary conditions.




                                                 Solved Problems

1.1.    Determine the order, unknown function, and the independent variable in each of the following differential
        equations:




        (a)   Third-order, because the highest-order derivative is the third. The unknown function is y; the independent
              variable is x.
        (b)   Second-order, because the highest-order derivative is the second. The unknown function is y; the independent
              variable is t.
        (c)   Second-order, because the highest-order derivative is the second. The unknown function is t; the independent
              variable is s.
        (d)   Fourth-order, because the highest-order derivative is the fourth. Raising derivatives to various powers does not
              alter the number of derivatives involved. The unknown function is b; the independent variable is p.


1.2.    Determine the order, unknown function, and the independent variable in each of the following
        differential equations:




        (a)   Second-order. The unknown function is x; the independent variable is y.
        (b)   First-order, because the highest-order derivative is the first even though it is raised to the second power. The
              unknown function is x; the independent variable is y.
        (c)   Third-order. The unknown function is x; the independent variable is t.
        (d)   Fourth-order. The unknown function is y; the independent variable is t. Note the difference in notation between
              the fourth derivative y(*\ with parentheses, and the fifth power y5, without parentheses.


1.3.    Determine whether y(x) = 2e x + xe x is a solution of y" + 2y' + y = 0.
              Differentiating y(x), it follows that




        Substituting these values into the differential equation, we obtain



        Thus, y(x) is a solution.
4                                                    BASIC CONCEPTS                                                      [CHAR 1



1.4.   Is y(x) = 1 a solution of /' + 2/ + y = xl
            From y(x) = 1 it follows that y'(x) = 0 and ;y"(;e) = 0. Substituting these values into the differential equation,
       we obtain


       Thus, y(x) = 1 is not a solution.


1.5.   Show that y = In x is a solution of ;ry" + / = 0 on J> = (0, °°) but is not a solution on J> = (- °°, °°).
           On (0, °°) we have ;/=!/* and /' = -I/* 2 . Substituting these values into the differential equation
       we obtain




       Thus, y = In x is a solution on (0, °°).
            Note that y = In x could not be a solution on (- °°, °°), since the logarithm is undefined for negative numbers
       and zero.


1.6.   Show that y = l^x2 - 1) is a solution of y' + 2xy2 = 0 on J> = (—1, 1) but not on any larger interval
       containing J>.
            On (-1, 1), y= ll(x2— 1) and its derivative y' = — 2xl(x2 — I) 2 are well-defined functions. Substituting these
       values into the differential equation, we have




       Thus, y = l/(x2 - 1) is a solution on 5> = (-1, 1).
            Note, however, that l/(x2 - 1) is not defined at x = +1 and therefore could not be a solution on any interval
       containing either of these two points.


1.7.   Determine whether any of the functions (a) yl = sin 2x, (b) ;y2(x) = x, or (c) y3 (x) = -jsin2;t is a solution
       to the initial-value problem y" + 4y = 0; y(0) = 0, /(O) = 1.
             (a) y\(x) is a solution to the differential equation and satisfies the first initial condition y(0) = 0. However, y\(x)
       does not satisfy the second initial condition (y[(x) = 2cos2;t;;yj(0) = 2cosO = 2^1); hence it is not a solution to the
       initial-value problem, (b) y^(x) satisfies both initial conditions but does not satisfy the differential equation; hence
       y2(x) is not a solution, (c) y3(x) satisfies the differential equation and both initial conditions; therefore, it is a solu-
       tion to the initial-value problem.


1.8.   Find the solution to the initial-value problem / + y = 0; y(3) = 2, if the general solution to the differential
       equation is known to be (see Chapter 8) y(x) = c^'*, where cx is an arbitrary constant.
            Since y(x) is a solution of the differential equation for every value of c1; we seek that value of Cj which will
       also satisfy the initial condition. Note that y(3) = c^e^. To satisfy the initial condition y(3) = 2, it is sufficient
       to choose cl so that c^3 = 2, that is, to choose cl = 2e3. Substituting this value for cl into y(x), we obtain
       y(x) = 2e3e~x = 2e3^x as the solution of the initial-value problem.


1.9.   Find a solution to the initial-value problem /' + 4y = 0; y(0) = 0, /(O) = 1, if the general solution to the
       differential equation is known to be (see Chapter 9) y (x) = c1 sin 2x + c2 sos 2x.
            Since y(x) is a solution of the differential equation for all values of Cj and c2 (see Example 1.4), we seek those
       values of Cj and c2 that will also satisfy the initial conditions. Note that y(0) = Cj sin 0 + c2 cos 0 = c2. To satisfy
       the first initial condition, y(0) = 0, we choose c2 = 0. Furthermore, y'(x) = 2cl cos 2x - 2c2 sin 2x; thus,
CHAP. 1]                                            BASIC CONCEPTS                                                            5



        y'(0) = 2c1 cos 0-2c 2 sin 0 = 2c1. To satisfy the second initial condition, y'(0) = 1, we choose 2c1=l, or
         cl = j. Substituting these values of c1 and c2 into y(x), we obtain y(x) = ysin2;t as the solution of the initial-value
        problem.


1.10.   Find a solution to the boundary-value problem y" + 4y = 0; y(n!8) = 0, y(n!6) = 1, if the general solution
        to the differential equation is y(x) = c1 sin 2x + c2 cos 2x.
             Note that




        To satisfy the condition y(n/S) = 0, we require




        Furthermore,


        To satisfy the second condition, 31(71/6) = 1, we require




        Solving (_/) and (2) simultaneously, we find




        Substituting these values into y(x), we obtain




        as the solution or the boundary-value problem.


1.11.   Find a solution to the boundary-value problem                                                 if the general solution
        to the differential equation is known to be y(x) = c1 sin 2x + c2 cos 2x.
             Since y(0) = c1 sin 0 + c2 cos 0 = c2, we must choose c2 = 1 to satisfy the condition y(0) = 1. Since y(7tl2)
        = GI sin n+ c2 cos n= — c2, we must choose c2 = -2 to satisfy the second condition, y(7tl2) = 2. Thus, to satisfy both
        boundary conditions simultaneously, we must require c2 to equal both 1 and - 2, which is impossible. Therefore,
        there does not exist a solution to this problem.

1.12.   Determine c, and c2 so that y(x) = c1 sin 2x + c2 cos 2x + 1 will satisfy the conditions y(7t!8) = 0 and

             Note that




        To satisfy the condition y(n/8) = 0, we require                               or equivalently,
6                                                   BASIC CONCEPTS                                                 [CHAR 1



        Since




        To satisfy the condition               we require                       ar equivalently,



        Solving (_/) and (2) simultaneously, we obtain                    and


1.13.   Determine c1 and c2 so that                                    will satisfy the conditions y(0) = 0 and /(O) = 1.
             Because sin 0 = 0, y(0) = Cj + c2. To satisfy the condition y(0) = 0, we require


        From

        we have / (0) = 2cj + c2 + 2. To satisfy the condition / (0) = 1, we require 2cj + c2 + 2 = 1, or




        Solving (_/) and (2) simultaneously, we obtain        and



                                        Supplementary Problems

In Problems 1.14 through 1.23, determine (a) the order, (b) the unknown function, and (c) the independent
variable for each of the given differential equations.




1.24.   Which of the following functions are solutions of the differential equation y' — 5y = 0?
        (a) y = 5,        (b) y = 5x,       (c) y = x5,        (d)   y = e5x,     (e) y = 2e5x,      (/)    y = 5e2x

1.25.   Which of the following functions are solutions of the differential equation y' — 3y = 6?
        (a) y = -2,       (b) y = 0,        (c) y = e3x-2, (d) y = e2x-3, (e) y = 4e3x-2
CHAP.1]                                               BASIC CONCEPTS                                             7



1.26. Which of the following functions are solutions of the differential equation y — 2ty = f!
        (a)   y = 2,        (b)    y = -\,   (c) y = e'\         (d)     y = e'2-±, (e) y = -1/-\

1.27.   Which of the following functions are solutions of the differential equation dyldt = yltl
        (a)   y = 0,        (b) y = 2,       (c) y = 2t,         (d) y = -3t,           (e) y = t2

1.28.   Which of the following functions are solutions of the differential equation




1.29.   Which of the following functions are solutions of the differential equation y" -y = 0?
        (a)   y = e",       (b) y = sin x,   (c) y = 4ex,        (d)     y = 0,

1.30.   Which of the following functions are solutions of the differential equation y" — xy' + y = Ql
        (a)   y = x2,       (b) y = x,       (c) y=l-x2, (d) y = 2x2- 2, (e) y = 0

1.31.   Which of the following functions are solutions of the differential equation x - 4x + 4x = e'
        (a)   x = e',       (b) x = e2',     (c) x = e2t+ e', (d) x= te2' + e', (e) x = e2t+ te'

In Problems 1.32 through 1.35, find c so that x(t) = ce2t satisfies the given initial condition.

1.32.   X0) = 0         1.33.     X0)=l      1.34. XI) =1              1-35. x(2) = -3

In Problems 1.36 through 1.39, hnd c so that y(x) = c(\- x) satishes the given initial condition.

1.36.   XO) = 1         1-37. XI) = 0        1.38.    y(2) = 1         1.39. XI) = 2

In Problems 1.40 through 1.49, find c1 and c2 so that y(x) = c1 sin x + c2 cos x will satisfy the given conditions
Determine whether the given conditions are initial conditions or boundary conditions.

1.40.   XO) = 1, /(O) = 2                            1.41. XO) = 2,         y'(0) = 1




                                                     1.45. XO) = 1, Y(ri) = 1


1.46.   XO) = 1, XTC) = 2                            1.47.   XO) = 0, /(O) = 0
8                                               BASIC CONCEPTS                                        [CHAR 1



In Problems 1.50 through 1.54, find values of c1 and c2 so that the given functions will satisfy the prescribed
initial conditions.

1.50.   y(x) = cl<? + c2e~x + 4 sin x;   y(0) = 1, /(0) = -1

1.51.   y(x) = c1x+c2 + x2-l;            y ( l ) = 1, /(I) = 2

1.52.   y(x) = c1ex+c2elx + 3e3x;        y(0) = 0, /(O) = 0

1.53.   y(x) = c1 sin x + c2 cos x + 1; y(n) = 0, /(ft) = 0

1.54.   y(x) = c^ + c2xe* + x2^;         y(l) = 1, /(I) = -1
                                                                 CHAPTER 2



                                      An Introduction
                                          to Modeling
                                      and Qualitative
                                              Methods
MATHEMATICAL MODELS
     Mathematical models can he thought uf as equations. In this chapter, and in other parts of ihc book (sec
Chapter 7. Chapter 14 and Chapter 31. for example), we will consider equations which model certain real-world
situations.
     For example, when considering a simple direct current (DC) electrical circuit, the equation V = Rl modelfi
the voltage drop (measured in volts) aeross a resistor (measured in ohms), « here / is the current (measured in
amperes). This equation is called Ohm's Law. named in honor of G. S. Ohm (1787-1854), a German physicist,
     Onee Constructed, some models can he used to predict main physical situations. Kor example, weather
forecasting, the growth of a tumor, or the outcome of a roulette wheel, ean all be connected with some form of
mathematical modeling.
     In this chapter, we consider \ariables that are continuous and how differential equations can he used in
modeling. Chapter 34 introduces the idea of difference equations. These are equations in which we consider
discrete variables; that is, uiriables which can lake on only certain values, such as whole numbers. With few
modifications, everything presented about modeling w i t h differential equations also holds true viith regard to
modeling with difference equations.



THE "MODELING CYCLE"
     Suppose we have a real-life situation (we want tofind the amount of radio-active material in some element).
Research may be able to model this situation (in the form of a "very difficult" differential equation). Technology
may be used to help us solve the equation (computer programs give us an answer). The technological answers
are then interpreted or communicaied in light of the real-life situation (the amount of radio-active material).
Figure 2-1 illustrates this c\cle.

                                                           9
Copyright © 2006, 1994, 1973 by The McGraw-Hill Companies, Inc. Click here for terms of use.
10                       AN INTRODUCTION TO MODELING AND QUALITATIVE METHODS                                           [CHAR 2




QUALITATIVE METHODS
     To build a model can be a long and arduous process; it may take many years of research. Once they
are formulated, models may be virtually impossible to solve analytically. Then the researcher has two
options:

     •   Simplify, or "tweak", the model so that it can be dealt with in a more manageable way. This is a valid
         approach, provided the simplification does not overly compromise the "real-world" connection, and
         therefore, its usefulness.
     •   Retain the model as is and use other techniques, such as numerical or graphical methods (see
         Chapter 18, Chapter 19, and Chapter 20). This represents a qualitative approach. While we do not
         possess an exact, analytical solution, we do obtain some information which can shed some light on the
         model and its application. Technological tools can be extremely helpful with this approach (see
         Appendix B).




                                                  Solved Problems

Problems 2.1 through 2.11 deal with various models, many of which represent real-world situations. Assume
the models are valid, even in the cases where some of the variables are discrete.


2.1.      Discuss the model: 7> = 32 + 1.8 Tc.
               This model converts temperatures from degrees on the Celsius scale to degrees on the Fahrenheit scale.


2.2.      Discuss the model: PV = nRT.
               This models ideal gases and is known as the Perfect Gas Law. Here, P is the pressure (in atmospheres), V is the
          volume (liters), n is the number of moles, R is the universal gas constant (R = 8.3145 J/mol K), and Tis the temperature
          (degrees Kelvin).


2.3.      What does Boyle's law tell us?
               Boyle's law states that, for an ideal gas at a constant temperature, PV= k, where P (atmospheres), V (liters)
          and k is a constant (atmosphere-liters).
               Another way of stating this, is that the pressure and volume are inversely proportional.
CHAP. 21               AN INTRODUCTION TO MODELING AND QUALITATIVE METHODS                                                    11




2.4.    Discuss the model:

              This formula is used in electricity; I represents the current (amperes), q represents the charge (coulombs), t is
        the time (seconds). Problems involving this model will be presented in both Chapter 7 and Chapter 14.


2.5.    Discuss the model:

             This is a classic model: a forced, mass-spring system. Here, y is a displacement (m), t is time (sec), m is the mass
        (kg), a is a friction or damping constant (kg/sec), k is a spring constant (kg/sec2) and F(t) is a forcing function (N).
              Variations of this model can be used in problems ranging from shock absorbers on an automobile to answering
        questions about the human spinal column.
             The differential equation uses a number of classical concepts, including Newton's second law and Hooke's law.
        We will revisit this equation in Chapter 14.


2.6.    Assume M(f) represents the mass of an element in kgs. Suppose research has shown that the instanta-
        neous rate of decay of this element (kg/yr) is proportional to the amount present: M(t) x M(t). Set up a
        model for this relationship.
              The proportionality relationship M'(t) °= M(t) can be converted into an equation by introducing a
        proportionality constant, k (1/yr). So our model becomes M'(t) = kM(t). We note that k < 0, because M(t) is decreasing
        in size.
              This equation will be classified as a "separable equation" (see Chapter 3). The solution to this differential
        equation, which is qualitatively described as "exponential decay", will be explored in Chapter 4.


2.7.    Consider the previous problem. Assume research revealed that the rate of decay is proportional to the
        square root of the amount present. Model this situation.
                                                       We note here that the units of k are           The solution of this type
        of differential equation will be explored in Chapter 4.


2.8.    Model a population P(t), if its rate of growth is proportional to the amount present at time t.
            This is the sister problem to Problem 2.6; that is, we have an "exponential growth" model, P'(t) = kP(t),
        where k > 0.


2.9.    Assume the population described in Problem 2.8 has an initial composition of 1000. That is,
        F(0) = 1000. You are also told that the solution of the differential equation P'(t) = kP(t) is given by
        P(f) = I000ekt, where t is in years. Discuss this model.
             Since k > 0, we know that P(t) will increase exponentially as t —> °°. We are forced to conclude that this is
        (most probably) not a reasonable model, due to the fact that our growth is unlimited.
             We do add, however, that this model might be helpful over a short period of time. "How helpful?" and "How
        short a period?" are questions which must be looked at qualitatively, and depend on the constraints and requirements
        of the particular posed problem.


2.10.   Consider the assumptions in the two previous problems. Further, suppose the rate of growth of P(t)
        is proportional to the product of the amount present and some "maximum population" term, 100,000 -
         P(f), where the 100,000 represents the carrying capacity. That is, P(f) -» 100,000, as t -» °°. Introduction
        of a proportionality constant k, leads to the differential equation, P'(t) = kP(t)(lOO,000 - P(t)). Discuss
        this model.
             If P(t) is much less than 100,000, the differential equation can be approximated as P'(t)~kP(t)
        (100,000) = KP(t), where K= £(100,000). This would closely approximate exponential growth. So, for "small" P(t),
        there would be little difference between this model and the previous model discussed in Problems 2.8 and 2.9.
12                     AN INTRODUCTION TO MODELING AND QUALITATIVE METHODS                                           [CHAR 2



              If P(t) is close to 100,000 (meaning that 100,000 -P(t) ~0), then the differential equation can be approxi-
        mated as P'(t) ~ kP(t)(0) = 0. An approximate solution to this is P(t) = 100,000, since only a constant has a deriva-
        tive equal to 0. So "in the large", P(t) "levels off" to 100,000, the carrying capacity of the population.
              In this problem, we used a qualitative approach: we were able to decipher some information and express it in
        a descriptive way, even though we did not possess the solution to the differential equation. This type of equation is
        an example of a logistic population model and is used extensively in sociological studies. Also see Problem 7.7.


2.11.   Sometimes differential equations are "coupled" (see Chapter 17 and Chapter 25); consider the following
        system:




        Here, let R represent the number of rabbits in a population, while F represents the number of foxes, and
        t is time (months). Assume this model reflects the relationship between the rabbits and foxes. What does
        this model tell us?
             This system of equations (1) mirrors a "predator-prey" relationship. The RF terms in both equations can be
        interpreted as an "interaction term". That is, both factors are needed to have an effect on the equations.
             We see that the coefficient of R in the first equation is +2; if there was no RF term in this equation, R would
        increase without bound. The -3 coefficient of RF has a negative impact on the rabbit population.
             Turning our attention to the second equation, we see that F is multiplied by a - 4, indicating that the fox
        population would decrease if they did not interact with rabbits. The positive coefficient for RF indicates a positive
        impact on the fox population.
             Predator-prey models are used extensively in many fields ranging from wildlife populations to military strategic
        planning. In many of these models qualitative methods are employed.



                                         Supplementary Problems
2.12.   Using Problem 2.1. find a model which converts temperatures from degrees on the Fahrenheit scale to degrees on
        the Celsius scale.
2.13.   Charles' law states that, for an ideal gas at a constant pressure, — = k, where V (liters), T (degrees Kelvin) and k is
        a constant (lit/°K). What does this model tell us?

2.14.   Discuss Newton's second law of motion:

2.15.   Suppose a room is being cooled according to the model                     where t (hours) and T (degrees Celsius).
        If we begin the cooling process at t = 0, when will this model no longer hold? Why?
2.16.   Suppose the room in Problem 2.15. was being cooled in such a way that                        where the variables
        and conditions are as above. How long would it take for the room to cool down to its minimum temperature? Why?
2.17.   Consider the model discussed in Problem 2.5. If we assume that the system is both "undamped" and "unforced",

        that is F(t) = 0 and a = 0, the equation reduces to                  we letm = 1 and
                                                                                           k = 4 for further simplicity, we

        have                Suppose we know that y(t) = sin 2t, satisfies the model. Describe the motion of displacement, y(t).

2.18.   Consider the previous problem. Find (a) the velocity function; (b) the acceleration function.
2.19.   Consider the differential equation                       Describe (a) the behavior of y at y = 1 and y = 2; (b) what
        lappens to y if y < 1; (c) what happens to y if 1 < y < 2; (d) what happens to y if y > 2.
CHAP. 2]               AN INTRODUCTION TO MODELING AND QUALITATIVE METHODS                                                     13



2.20.   Assume a chemical compound, X, is such that its rate of decay is proportional to the cube of its difference from a
        given amount, M, where both X and M are given in grams and time is measured in hours. Model this relationship
        with a differential equation.

2.21.   Suppose A and B are two vats interconnected with a number of pipes and drains. If A(t) and B(t) represent the number
        of gallons of liquid sugar in the respective vats at time t (hours), what do A'(t) and B'(t) represent?

2.22.   Consider Problem 2.21. Suppose the following system of differential equations models the mixing of the vats:




        where a, b, c, d, e, and/are constants. What is happening to the liquid sugar and what are the units of the six constants?
                                                                 CHAPTER 3



                                              Classifications
                                                   of First-Order
       Differential Equations
STANDARD FORM AND DIFFERENTIAL FORM
     Standard form fora lirsl-order differential equation in ihe unknown I'unciion y(x) is



where the derivative y'appears onl\ on the left side of UJ). Many, hill not all. first-order differential equations
can be written in standard form b> algebraical!} solving for y' and then setting/Or, y) equal to ihe right side of
Ihe resulting equation.
     The right side of (J./Jcan always be written as a quotient of two other functions M(.r, v) and-M.v.y). Then
(3.}) becomes dy/dx = M(x. y)/-N(x. y). which is equivalent to Ihe differential farm




L I N E A R EQUATIONS
     Consider a differential equation in standard form (3.1}. If./i.v, y| can be written as/(jr. y) = —p(x)y + q(x)
(that is, as a function of .v times y. plus another function of .v). ihe differential equaiion is linear. First-order
linear differential equations can alwavs be e\pressed as



Linear equations are solved in Chapter 6.


BERNOULLI EQUATIONS
     A Bernoulli differential equaiion is an equation of the form



where n denotes a real number. When n = 1 or n = 0. a Bernoulli equaiion reduces to a linear equaiion. Bernoulli
equations are solved in Chapter 6.

                                                            14

Copyright © 2006, 1994, 1973 by The McGraw-Hill Companies, Inc. Click here for terms of use.
CHAP. 3]                  CLASSIFICATIONS OF FIRST-ORDER DIFFERENTIAL EQUATIONS                               15



HOMOGENEOUS EQUATIONS
       A differential equation in standard form (3.1) is homogeneous if


for every real number t. Homogeneous equations are solved in Chapter 4.
     Note: In the general framework of differential equations, the word "homogeneous" has an entirely different
meaning (see Chapter 8). Only in the context of first-order differential equations does "homogeneous" have the
meaning defined above.


SEPARABLE EQUATIONS
     Consider a differential equation in differential form (3.2). If M(x, y) = A(x) (a function only of x) and
N(x, y) = B(y) (a function only of y), the differential equation is separable, or has its variables separated.
Separable equations are solved in Chapter 4.


EXACT EQUATIONS
       A differential equation in differential form (3.2) is exact if




Exact equations are solved in Chapter 5 (where a more precise definition of exactness is given).




                                                 Solved Problems


3.1.      Write the differential equation xy' — y2 = 0 in standard form.
               Solving for y', we obtain y' = y2lx which has form (3.1) whh/(x, y) = y2lx.


3.2.      Write the differential equation exy' + e^y = sin x in standard form.
               Solving for y', we obtain


          or
          which has form (3.1) wi\hf


3.3.      Write the differential equation (/ + y)5 = sin (y'lx) in standard form.
               This equation cannot be solved algebraically for y', and cannot be written in standard form.


3.4.      Write the differential equation y(yy' - 1) = x in differential form.
               Solving for y', we have
16                      CLASSIFICATIONS OF FIRST-ORDER DIFFERENTIAL EQUATIONS                                     [CHAR 3




       or

       which is in standard form wi\hf(x, y) = (x + y)/y2. There are infinitely many different differential forms associated
       with (_/). Four such forms are:
       (a)   Take M(x, y)=x + y, N(x, y) = -y2. Then




             and (_/) is equivalent to the differential form




       (b)   TakeMX ;y) = -l, N(x,y) = ——.Then
                                       x +y




             and (1) is equivalent to the differential form




       (c)   Take M(x,y) =           , N(x, y        Then




             and (1) is equivalent to the differential form




       (d)   Take                                    Then




             and (1) is equivalent to the differential form




3.5.   Write the differential equation dyldx = ylx in differential form
             This equation has infinitely many differential forms. One is



       which can be written in form (3.2) as
CHAP. 3]                CLASSIFICATIONS OF FIRST-ORDER DIFFERENTIAL EQUATIONS                                                 17



       Multiplying (1) through by x, we obtain


       as a second differential form. Multiplying (_/) through by 1/y, we obtain




       as a third differential form. Still other differential forms are derived from (_/) by multiplying that equation through
       by any other function of x and y.


3.6.   Write the differential equation (xy + 3)dx + (2x - y2 + l)dy = 0 in standard forn
             This equation is in differential form. We rewrite it as



       which
       vhich has the standard form
                              fi



       or



3.7.   Determine if the following differential equations are linear:




       (a)   The equation is linear; here/>(X) = -sin x and q(x) = e*.
       (b)   The equation is not linear because of the term sin y.
       (c)   The equation is linear; here/>(X) = 0 and q(x) = 5.
       (d)   The equation is not linear because of the term y2.
       (e)   The equation is not linear because of the y5 term.
       (/)   The equation is not linear because of the y112 term.
       (g)   The equation is linear. Rewrite it as y' + (x- ex)y = 0 withp(x) =x- ex and q(x) = 0.
       (h)   The equation is not linear because of the 1/y term.


3.8.   Determine whether any of the differential equations in Problem 3.7 are Bernoulli equations.
           All of the linear equations are Bernoulli equations with n = 0. In addition, three of the nonlinear
       equations, (e), (/) and ( h), are as well. Rewrite (e) as y' = —xy5; it has form (3.4) wilhp(x) = 0, q(x) = —x, and n = 5.
       Rewrite (/) as




       It has form (3.4) whhp(x) = q(x) = llx and n = 1/2. Rewrite (h) asy' = —xy l whhp(x) = 0, q(x) = —x, and n = —l.


3.9.   Determine if the following differential equations are homogeneous:
18                       CLASSIFICATIONS OF FIRST-ORDER DIFFERENTIAL EQUATIONS                                      [CHAR 3



        (a)    The equation is homogeneous, since




        (b)    The equation is not homogeneous, since




        (c)    The equation is homogeneous, since




        (d)    The equation is not homogeneous, since




3.10.   Determine if the following differential equations are separable:
        (a)    sinxdx + y2dy = 0         (b)   xyzdx - x2y2dy = 0       (c)   (1 + xy)dx + y dy = 0
        (a)    The differential equation is separable; here M(x, y) = A(x) = sin x and N(x, y) = B(y) = y2.
        (b)    The equation is not separable in its present form, since M(x, y) = xy2 is not a function of x alone. But if we
               divide both sides of the equation by x2y2, we obtain the equation (llx)dx+ (-l)dy = 0, which is separable.
               Here, A(x) = llx and B(y) = -1.
        (c)    The equation is not separable, since M(x, y) = 1 + xy, which is not a function of x alone.


3.11.   Determine whether the following differential equations are exact:
        (a)    3x2ydx+(y + x3)dy = 0           (b)   xydx + y2dy = 0
        (a)    The equation is exact; here M(x, y) = 3x2y, N(x, y) = y + x3, and 3M3;y = 3AV3;c = 3x2.
        (b)    The equation is not exact. Here M(x, y) = xy and N(x, y) = y2; hence 3M3;y = x, 3AV3;c = 0, and 3M3;y ^ 3AV3;c.


3.12.   Determine whether the differential equation / = ylx is exact.
             Exactness is only defined for equations in differential form, not standard form. The given differential equation
        has manv differential forms. One such form is given in Problem 3.5. Eci. (1). as



        Here




        and the equation is not exact. A second differential form for the same differential equation is given in Eq. (3) of
        Problem 3.5 as
CHAP. 3]                  CLASSIFICATIONS OF FIRST-ORDER DIFFERENTIAL EQUATIONS                                       19



        riere M9x,y) = 1/x, N(x,y) = -1/y




        and the equation is exact. Thus, a given differential equation has many differential forms, some of which may be
        exact.


3.13.   Prove that a separable equation is always exact.
              For a separable differential equation,                and                  Thus,


                                                              and


        Since 3M3;y = 3AV3;c, the differential equation is exact.


3.14.   A theorem of first-order differential equations states that if f(x, y) and df(x, y)ldy are continuous in a
        rectangle 2ft: \x - x0\ < a, \y — y0\ < b, then there exists an interval about x0 in which the initial-value
        problem y' =f(x, y); y(xQ) = yQ has a unique solution. The initial-value problem y' = 2^J\ y \',y(0) = 0 has
        the two solutions y = x \x\ and y = 0. Does this result violate the theorem?

              No. Here,                  and, therefore, 3//3;y does not exist at the origin.




                                         Supplementary Problems

In Problems 3.15 through 3.25, write the given differential equations in standard form.

3.15.   xy' + y2 = 0                               3.16.    e"y'-x = y'

3.17.   (y')3 + y2 + y = sin x                     3.18.    xy' + cos(y' + y) = l

3.19.   e(y' +y) = x                               3.20.    (y')2 - 5/ + 6 = (x + y)(yr- 2)

3.21.   (x - y)dx + y2dy = 0

                                                   3.24.    (e2* - y)dx + e*dy = 0

3.25.   dy + dx = 0

In Problems 3.26 through 3.35, differential equations are given in both standard and differential form. Determine whether
the equations in standard form are homogeneous and/or linear, and, if not linear, whether they are Bernoulli; determine
whether the equations in differential form, as given, are separable and/or exact.

3.26.   y' = xy; xydx - dy = 0

3.27.

3.28.

3.29.
20   CLASSIFICATIONS OF FIRST-ORDER DIFFERENTIAL EQUATIONS   [CHAR 3
                                                                 CHAPTER 4



       Separable First-Order
       Differential Equations

GENERAL SOLUTION
     The solulion lo Ihe first-order separable differential equation (see Chapter 3)




is


where c represents an arbitrary constant.
     The integrals obtained in Hq. (4.2) may be. for all practical purposes, impossible lo evaluate. In such eases.
numerical techniques (see Chapters 18, 14. 20) are used to obtain an approximate solution. Even if the indicated
integrations in (4.2) can be performed, il may not be algebraical!} possible lo solve for y explicitly in terms of
x. In that case, the solution is left in implicit form.



SOLUTIONS TO THE INITIAL- VALUE PROBLEM
     The solulion to the initial-value problem




can be obtained, as usual. b\ first using Hq. (4.2) to solve the differential equation and then applying Ihe initial
condition directly lo evaluate r.
    Alternatively, the solulion lo hq. (4.3) can be obtained from




Liquation (4.4). however, may not determine the solulion of (43) uniquely: lhal is. (4.4) may have many solutions.
of which only one w i l l satisfy Ihe initial-value problem.

                                                           21
Copyright © 2006, 1994, 1973 by The McGraw-Hill Companies, Inc. Click here for terms of use.
22                             SEPARABLE FIRST-ORDER DIFFERENTIAL EQUATIONS                                         [CHAR 4



REDUCTION OF HOMOGENEOUS EQUATIONS
       The homogeneous differential equation




having the property that/(fct, ty) =f(x, y) (see Chapter 3) can be transformed into a separable equation by making
the substitution



along with its corresponding derivative




The resulting equation in the variables v and x is solved as a separable differential equation; the required solution
to Eq. (4.5) is obtained by back substitution.
    Alternatively, the solution to (4.5) can be obtained by rewriting the differential equation as




and then substituting


and the corresponding derivative




into Eq. (4.8). After simplifying, the resulting differential equation will be one with variables (this time, u and y)
separable.
     Ordinarily, it is immaterial which method of solution is used (see Problems 4.12 and 4.13).
Occasionally, however, one of the substitutions (4.6) or (4.9) is definitely superior to the other one. In such
cases, the better substitution is usually apparent from the form of the differential equation itself. (See
Problem 4.17.)




                                                Solved Problems

4.1.     Solve x dx -y1 dy = 0.
              For this differential equation, A(x) = x and B(y) = -y2. Substituting these values into Eq. (4.2), we have




         which, after the indicated integrations are performed, becomes x*/2 — ;y3/3 = c. Solving for y explicitly, we obtain
         the solution as
CHAP. 4]                      SEPARABLE FIRST-ORDER DIFFERENTIAL EQUATIONS                                                      23




4.2.   Solve / = y-2*3.
            We first rewrite this equation in the differential form (see Chapter 3) jr dx - (lly ) dy = 0. Then A(x) = jr and
       B(y) = -lly2. Substituting these values into Eq. (4.2), we have



       or, by performing the indicated integrations, x4/4 + lly = c. Solving explicitly for y, we obtain the solution as




4.3.   Solve

            This equation may be rewritten in the differential form
                                                     (x2+2)dx-ydy = 0
       which is separable with A(x) =x2 + 2 and B(y) = -y. Its solution is




       or


       Solving for y, we obtain the solution in implicit form as




       with k = -2c. Solving for y implicitly, we obtain the two solutions


                                                             and



4.4.   Solve / = 5y.
            First rewrite this equation in the differential form 5 dx— (lly) dy = 0, which is separable. Its solution is



       or, bv evaluating, 5x — In lyl = c.
            To solve for y explicitly, we first rewrite the solution as In                 md then take the exponential of both
       sides. Thus,               Noting that            we obtain                               The solution is given explicitly
       byy =
             Note that the presence of the term (—lly) in the differential form of the differential equation requires the
       restriction y ^ 0 in our derivation of the solution. This restriction is equivalent to the restriction k ^ 0, since y = ke5x.
       However, by inspection, y = 0 is a solution of the differential equation as originally given. Thus, y = keSx is the solution
       for all k.
             The differential equation as originally given is also linear. See Problem 6.9 for an alternate method of solution.


4.5.   Solve

            This equation, in differential form, is (x = 1) dx + (-y4 - 1) dy =0. which is separable. Its solution is
24                           SEPARABLE FIRST-ORDER DIFFERENTIAL EQUATIONS                                          [CHAR 4



       or, by evaluating,




       Since it is impossible algebraically to solve this equation explicitly for y, the solution must be left in its present
       implicit form.


4.6.   Solve dy = 2t(y2 + 9) dt.
            This equation may be rewritten as




       which is separable in variables y and t. Its solution is




       or, upon evaluating the given integrals,




       Solving for y, we obtain




       or
       with k = 3c.



4.7.   Solve

            This equation may be rewritten in differential form




       which is separable in the variables x and t. Its solution is




       Evaluating the first integral by first completing the square, we obtain




       or                                            arctan (x— l) — t=c
       Solving for x as a function of t, we obtain
                                                     arctan (x—l) = t+c
                                                      x - 1 = tan (t + c)
       or                                                 x=l +tan(t + c)
CHAP. 4]                      SEPARABLE FIRST-ORDER DIFFERENTIAL EQUATIONS                                                 25



4.8.    Solve ef dx - y dy = 0; y(0) = 1.
             The solution to the differential equation is given by Eq. (4.2) as



        or, by evaluating, as y = 2ex+k, k = —2c. Applying the initial condition, we obtain (1) = 2e + k, 1 = 2 + k, or
        k = —l. Thus, the solution to the initial-value problem is



        [Note that we cannot choose the negative square root, since then y(0)=-l, which violates the initial
        condition.]
              To ensure that y remains real, we must restrict x so that 2e* — 1 > 0. To guarantee that / exists [note that
        y'(x) = dyldx = ex/y], we must restrict x so that 2ex - 1^0. Together these conditions imply that 2ex - 1 > 0, or
        x>lni.


4.9.    Use Eq. (4.4) to solve Problem 4.8.
             For this problem, x0= 0, y0= 1, A(x) = e", and B(y) = —y. Substituting these values into Eq. (4.4), we obtain



        Evaluating these integrals, we have




             Thus, y2 = 2ex — 1, and, as in Problem 4.8,


4.10.   Solve x cos xdx+(i- 6/) dy = 0; y(ri) = 0.
             Here, x0 = n,y0= 0, A(x) = x cos x, and B(y) = 1 - 6y5. Substituting these values into Eq. (4.4), we obtain



        Evaluating these integrals (the first one by integration by parts), we find




        or

            Since we cannot solve this last equation for y explicitly, we must be content with the solution in its present
        mplicit form.


4.11.   Solve

             This differential equation is not separable, but it is homogeneous as shown in Problem 3.9(a). Substituting
        Eqs. (4.6) and (4.7) into the equation, we obtain




        which can be algebraically simplified to
26                             SEPARABLE FIRST-ORDER DIFFERENTIAL EQUATIONS                                             [CHAR 4



        This last equation is separable; its solution is




        which, when evaluated, yields v = In \x\ - c, or


        where we have set c = -In \k\ and have noted that In \x\ + In \ls\ = In Ifcd. Finally, substituting v = ylx back into (_/),
        we obtain the solution to the given differential equation as y = x In Ifcd.


4.12.   Solve

             This differential equation is not separable. Instead it has the form y' =f(x, y), with




        where


        so it is homogeneous. Substituting Eqs. (4.6) and (4.7) into the differential equation as originally given, we obtain




        which can be algebraically simplified to




        This last equation is separable; its solution is




        Integrating, we obtain in                                 or



        where we have set c = -In \k\ and then used the identities



        Finally, substituting v = ylx back into (_/), we obtain




4.13.   Solve the differential equation of Problem 4.12 by using Eqs. (4.9) and (4.10
             We first rewrite the differential equation as



        Then substituting (4.9) and (4.10) into this new differential equation, we obtain
CHAP. 4]                       SEPARABLE FIRST-ORDER DIFFERENTIAL EQUATIONS                                               27



        which can be algebraically simplified to




        or

        Equation (1) is separable; its solution is




        The first integral is in In \y\. To evaluate the second integral, we use partial fractions on the integrand to
        obtain



        Therefore,



        The solution to (_/) is in                                        which can be rewritten as


        where                   Substituting u = xly back into (2), we once again have (2) of Problem 4.12.


4.14.   Solve
              Phis differential equation is not separable. Instead it has the form y =f(x, y), with




        where


        so it is homogenous. Substituting Eqs. (4.6) and (4.7) into the differential equation as originally given, we obtain




        which can be algebraically simplified to




        or


        Using partial fractions, we can expand (1) to




        The solution to this separable equation is found by integrating both sides of (2). Doing so, we obtain In Ijcl -
        In Ivl + In (v 2 + 1) = c, which can be simplified to



        Substituting v = ylx into (3), we find the solution of the given differential equation is x2 + y2 = ky.
28                             SEPARABLE FIRST-ORDER DIFFERENTIAL EQUATIONS                                              [CHAR 4




4.15.   Solve

             This differential equation is homogeneous. Substituting Eqs. (4.6) and (4.7) into it, we obtain



        which can be algebraically simplified to



        The solution to this separable equation is In \x\ - v 2 /2 = c, or equivalently


        Substituting v = ylx into (1), we find that the solution to the given differential equation is




4.16.   Solve

             The solution to the differential equation is given in Problem 3.15 as y2 = x2 In x2+kx2. Applying the initial
        condition, we obtain (-2)2= (I) 2 In (1)2 + k(l)2, or k = 4. (Recall that In 1 = 0.) Thus, the solution to the initial-value
        problem is



        The negative square root is taken, to be consistent with the initial condition.


4.17.   Solve

              This differential equation is not separable, but it is homogeneous. Noting the (jtAy)-term in the exponential, we
        try the substitution u = xly, which is an equivalent form of (4.9). Rewriting the differential equation as




        we have upon using substitutions (4.9) and (4.10) and simplifying




        This equation is separable; its solution is



        which can be rewritten as


        Substituting u = xly into (_/), we obtain the solution of the given differential equation as




4.18.   Prove that every solution of Eq. (4.2) satisfies Eq. (4.1).
             Rewrite (4.1) as A(x) + B(y)y' = 0. If y(x) is a solution, it must satisfy this equation identically in x; hence,
CHAP. 4]                       SEPARABLE FIRST-ORDER DIFFERENTIAL EQUATIONS                                                       29



        Integrating both sides of this last equation with respect to x, we obtain



        In the second integral, make the change of variables y = y(x), hence dy = y'(x) dx. The result of this substitution is (4.2).


4.19.   Prove that every solution of system (4.3) is a solution of (4.4).
             Following the same reasoning as in Problem 4.18, except now integrating from x = XQ to x = x, we obtain



        The substitution y = y(x) again gives the desired result. Note that as x varies from XQ to x, y will vary from y(xQ) = yQ
        to y(x) = y.


4.20.   Prove that if / =f(x, y) is homogeneous, then the differential equation can be rewritten as / = g(ylx),
        where g(ylx) depends only on the quotient ylx.
             We have that/(jc, y) =f(tx, ty). Since this equation is valid for all t, it must be true, in particular, for t = 1/x.
        Thus, f(x, y) =/(!, ylx). If we now define g(ylx) =/(!, ylx), we then have y' =f(x, y) =/(!, ylx) = g(ylx) as
        required.
             Note that this form suggests the substitution v = ylx which is equivalent to (4.6). If, in the above, we had set
        t= lly, then/(X y) =f(xly, 1) = h(xly), which suggests the alternate substitution (4.9).


4.21.   A function g(x, y) is homogeneous of degree n if g(tx, ty) = fg(x, y) for all t. Determine whether the
        following functions are homogeneous, and, if so, find their degree:
        (a) xy + y2,      (b) x + y sin (ylx)2,    (c) x3 + xy2e,x/y,   and    (d) x + xy.

        (a) (tx)(ty) + (ty)2 = t2(xy + y2); homogeneous of degree two.

                                                         homogeneous of degree one.

        (c) (txf + (tx)(ty)2eKlty = ^(x3 + xy2exly); homogeneous of degree three.
        (d) tx + (tx)(ty) = tx+ t2xy; not homogeneous.


4.22.   An alternate definition of a homogeneous differential equation is as follows: A differential equation
        M(x, y) dx + N(x, y) dy = 0 is homogenous if both M(x, y) and N(x, y) are homogeneous of the same
        degree (see Problem 4.21). Show that this definition implies the definition given in Chapter 3.
             If M(x, y) and N(x, y) are homogeneous of degree n, then




                                          Supplementary Problems
In Problems 4.23 through 4.45, solve the given differential equations or initial-value problems.

4.23.   x dx + y dy = 0                                 4.24.    x dx - y3 dy = 0
30                           SEPARABLE FIRST-ORDER DIFFERENTIAL EQUATIONS                                      [CHAR 4




In Problems 4.46 through 4.54, determine whether the given differential equations are homogenous and, if so, solve them.
                                                                 CHAPTER 5



             Exact First-Order
       Differential Equations
DEFINING PROPERTIES
     A differential equation



is exacl if there exists a function ,i;(.v. y) such that



Test for exactness:     If Ml.v, y) and /V(A\ y) are continuous functions and ha\e continuous first partial deriva-
                        tives on some rectangle of the .vy-plane. then (5./) is exact if and onl\ if




METHOD OF SOLUTION
     To solve Eq. (5.1). assuming that it is exact, first solve the equations




for g(x, y). The solution to (5./I is then given implicitly In



where c represents an arbitrary constant.
     Equation (5.6) is immediate from Eqs. (J./l and (5.2). If (5.2) is substituted into I.5./I. \\e obtain
dg(x,y(x)) = Q. Integrating this equation (note that w e can write 0 as Qtlx), \ve havejdg(x,y(x))=]0dx, which,
in turn, implies (5.6).

                                                           31
Copyright © 2006, 1994, 1973 by The McGraw-Hill Companies, Inc. Click here for terms of use.
32                               EXACT FIRST-ORDER DIFFERENTIAL EQUATIONS                                [CHAR 5



INTEGRATING FACTORS
    In general, Eq. (5.7) is not exact. Occasionally, it is possible to transform (5.7) into an exact differential
equation by a judicious multiplication. A function I(x, y) is an integrating factor for (5.7) if the equation



is exact. A solution to (5.7) is obtained by solving the exact differential equation defined by (5.7). Some of the
more common integrating factors are displayed in Table 5-1 and the conditions that follow:


                                  a function of x alone, then



                                   a function of y alone, then




                                                      Table 5-1

              Group of terms         Integrating factor I(x, y)      Exact differential dg (x, y)

                y dx-x dy


                y dx-x dy


                y dx-x dy


                y dx-x dy


                y dx + x dy



                y dx + x dy



                y dy + x dx



                y dy + x dx


               ay dx + bx dy
              (a, b constants)
CHAP. 5]                           EXACT FIRST-ORDER DIFFERENTIAL EQUATIONS                                                  33




       If M= yf(xy) and N = xg(xy), then




    In general, integrating factors are difficult to uncover. If a differential equation does not have one of the
forms given above, then a search for an integrating factor likely will not be successful, and other methods of
solution are recommended




                                                  Solved Problems

5.1.     Determine whether the differential equation 2xy dx+ (1 + x2)dy = 0 is exact.
               This equation has the form of Eq. (5.1) with M(x, y) = 2xy and N(x, y) = 1 + x2. Since dMIdy = dNIdx = 2x, the
         differential equation is exact.



5.2.     Solve the differential equation given in Problem 5.1.
              This equation was shown to be exact. We now determine a function g(x, y) that satisfies Eqs. (5.4) and (5.5).
         Substituting M(x, y) = 2xy into (5.4), we obtain dgldx = 2xy. Integrating both sides of this equation with respect to
         x, we find




         or

         Note that when integrating with respect to x, the constant (with respect to x) of integration can depend on y.
              We now determine h(y). Differentiating (1) with respect to y, we obtain dgldy = x2 + h'(y). Substituting this
         equation along with N(x, y) = 1 + x2 into (5.5), we have



         Integrating this last equation with respect to y, we obtain h(y) = y + Cj (cj = constant). Substituting this expression
         into (1) yields



              The solution to the differential equation, which is given implicitly by (5.6) as g(x, y) = c, is



          Solving for y explicitly, we obtain the solution as y = C2l(x2+ 1).



5.3.     Determine whether the differential equation y dx - x dy = 0 is exact.
              This equation has the form of Eq. (5.1) with M(x, y) = y and N(x, y) = -x. Here




          which are not equal, so the differential equation as given is not exact.
34                              EXACT FIRST-ORDER DIFFERENTIAL EQUATIONS                                             [CHAR 5



5.4.   Determine whether the differential equation


       is exact.

            Here M(x, y) = x + sin y and N(x, y) = x cos y — 2y. Thus, dMIdy = dNIdx = cos y, and the differential equation
       is exact.



5.5.   Solve the differential equation given in Problem 5.4.
            This equation was shown to be exact. We now seek a function g(x, y) that satisfies (5.4) and (5.5). Substituting
       M(x, y) into (5.4), we obtain dgldx = x + sin y. Integrating both sides of this equation with respect to x, we find




       or

            To find h(y), we differentiate (1) with respect to y, yielding dgldy = x cos y + h'(y), and then substitute this
       result along with N(x, y) = x cos y - 2y into (5.5). Thus we find



       from which it follows that h(y) = —y2 + c^ Substituting this h(y) into (1), we obtain




            The solution of the differential equation is given implicitly by (5.6) as




5.6.   Solve

            Rewriting this equation in differential form, we obtain



       Here,                    and                     and, since                                the differential equation is
       exact. Substituting M(x, y) into (5.4), we find dgldx = 2 + yexy; then integrating with respect to x, we obtain




       or

            To find h(y), first differentiate (1) with respect to y, obtaining dgldy = xexy + h'(y); then substitute this result
       along with N(x, y) into (5.5) to obtain



       It follows that h(y) = -y2+ c1. Substituting this h(y) into (1), we obtain



            The solution to the differential equation is given implicitly by (5.6) as
CHAP. 5]                         EXACT FIRST-ORDER DIFFERENTIAL EQUATIONS                                                  35




5.7.   Determine whether the differential equation y2 dt + (2yt + 1) dy = 0 is exact.
            This is an equation for the unknown function y(t). In terms of the variables t and y, we have M(t, y) =y2,
       N(t,y) = 2yt+ I , and




       so the differential equation is exact.


5.8.   Solve the differential equation given in Problem 5.7.
            This equation was shown to be exact, so the solution procedure given by Eqs. (5.4) through (5.6), with t
       replacing x, is applicable. Here




       Integrating both sides with respect to t, we have




            Differentiating (1) with respect to y, we obtain




       Hence,


       where the right side of this last equation is the coefficient of dy in the original differential equation. It follows
       that




       h(y) =y + GI, and (_/) becomes g(t, y) = y2t + y + Cj. The solution to the differential equation is given implicitly by
       (5.6) as


       We can solve for y explicitly with the quadratic formula, whence




5.9.   Determine whether the differential equation



       is exact.
            This is an equation for the unknown function x(t). In terms of the variables t and x, we find




       so the differential equation is exact.
36                                EXACT FIRST-ORDER DIFFERENTIAL EQUATIONS                                              [CHAR 5



5.10.   Solve the differential equation given in Problem 5.9.
             This equation was shown to be exact, so the solution procedure given by Eqs. (5.4) through (5.6), with t and x
        replacing x and y, respectively, is applicable. We seek a function g(t, x) having the property that dg is the right side
        of the given differential equation. Here




        Integrating both sides with respect to t, we have




        or

             Differentiating (1) with respect to x, we obtain




        Hence,

        where the right side of this last equation is the coefficient of dx in the original differential equation. It follows that




        Now h(x) = x4 + GI, and (1) becomes



        The solution to the differential equation is given implicitly by (5.6) as



        or, by taking the square roots of both sides of this last equation, as




        We can solve for x explicitly with the quadratic formula, whence




5.11.   Solve

              The differential equation has the differential form given in Problem 5.1. Its solution is given in (2) of Problem 5.2
        as x2y + y = c2. Using the initial condition, y = —5 when x = 2, we obtain (2)2(-5) + (-5) = c2, or c2 = -25. The solution
        to the initial-value problem is therefore x2y + y = -25 or y = -25/(x2+ 1).


5.12.   Solve

             This differential equation in standard form has the differential form of Problem 5.7. Its solution is given in (2)
        of Problem 5.8 as y2t + y = c2. Using the initial condition y = -2 when t = 1, we obtain (-2)2(1) + (-2) = c2, or c2 = 2.
CHAP. 5]                          EXACT FIRST-ORDER DIFFERENTIAL EQUATIONS                                                       37



        The solution to the initial-value problem is y2t + y = 2, in implicit form. Solving for y directly, using the quadratic
        formula, we have




        where the negative sign in front of the radical was chosen to be consistent with the given initial condition.


5.13.

             This differential equation in standard form has the differential form of Problem 5.9. Its solution is given in (2)
        of Problem 5.10 as x2 - xt = c3. Using the initial condition x = 3 when t = 2, we obtain (3)2 - 3(2) = c3, or c3 = 3. The
        solution to the initial-value problem is x2 + xt = 3, in implicit form. Solving for x directly, using the quadratic formula,
        we have




        where the positive sign in front of the radical was chosen to be consistent with the given initial condition.


5.14. Determine whether -IIx2 is an integrating factor for the differential equation y dx - x dy = 0.
             It was shown in Problem 5.3 that the differential equation is not exact. Multiplying it by —llx2, we obtain




        Equation (1) has the form of Eq. (5.1) with M(x, y) = -ylx2 and N(x, y) = llx. Now




        so (1) is exact, which implies that -llx2 is an integrating factor for the original differential equation.


5.15.   Solve y dx - x dy =0
             Using the results of Problem 5.14, we can rewrite the given differential equation as




        which is exact. Equation (1) can be solved using the steps described in Eqs. (5.4) through (5.6).
             Alternatively, we note from Table 5-1 that (1) can be rewritten as d(ylx) = 0. Hence, by direct integration, we
        have ylx = c, or y = ex, as the solution.


5.16.   Determine whether —ll(xy) is also an integrating factor for the differential equation defined in Problem 5.14.
             Multiplying the differential equation y dx — x dy = 0 by —ll(xy), we obtain




        Equation (1) has the form of Eq. (5.1) with M(x, y) = —llx and N(x, y) = lly. Now




        so (1) is exact, which implies that —llxy is also an integrating factor for the original differential equation.
38                                EXACT FIRST-ORDER DIFFERENTIAL EQUATIONS                                               [CHAR 5



5.17.   Solve Problem 5.15 using the integrating factor given in Problem 5.16.
             Using the results of Problem 5.16, we can rewrite the given differential equation as




        which is exact. Equation (1) can be solved using the steps described in Eqs. (5.4) through (5.6).
              Alternatively, we note from Table 5-1 that (1) can be rewritten as d[ln (y/x)] = 0. Then, by direct integration,
        In (y/x) = Cj. Taking the exponential of both sides, we find ylx = e1, or finally,




5.18.   Solve (y2-y) dx + x dy = 0
              This differential equation is not exact, and no integrating factor is immediately apparent. Note, however, that
        if terms are strategically regrouped, the differential equation can be rewritten as


        The group of terms in parentheses has many integrating factors (see Table 5-1). Trying each integrating factor
        separately, we find that the only one that makes the entire equation exact is I(x, y) = lAy2. Using this integrating factor,
        we can rewrite (_/) as




        Since (2) is exact, it can be solved using the steps described in Eqs. (5.4) through (5.6).
             Alternatively, we note from Table 5-1 that (2) can be rewritten as -d(xly) + ldx = 0, or as d(xly)= Idx
        Integrating, we obtain the solution




5.19 Solve (y2-xy) dx +( x+x2y2) dy = 0.
             This differential equation is not exact, and no integrating factor is immediately apparent. Note, however, thai
        the differential equation can be rewritten as



        The first group of terms has many integrating factors (see Table 5-1). One of these factors, namely I(x, y) = l/(xy)2,
        is an integrating factor for the entire equation. Multiplying (1) by l/(xy)2, we find




        or equivalently,




        Since (2) is exact, it can be solved using the steps described in Eqs. (5.4) through (5.6).
             Alternatively, we note from Table 5-1




        so that (2) can be rewritten as
CHAP. 5]                          EXACT FIRST-ORDER DIFFERENTIAL EQUATIONS                                                   39



        Integrating both sides of this last equation, we find




        which is the solution in implicit form.


5.20.   Solve

              Rewriting this equation in differential form, we have


        which is not exact. Furthermore, no integrating factor is immediately apparent. We can, however, rearrange this
        equation as


        The group in parentheses is of the form ay dx + bx dy, where a = 3 and b = —l, which has an integrating factor x2y 2.
        Since the expression in parentheses is already multiplied by x2, we try an integrating factor of the form I(x, y) = y"2.
        Multiplying (_/) by y"2, we have


        which can be simplified (see Table 5-1) to


        Integrating both sides of (2), we obtain



        as the solution in implicit form.

5.21.   Convert y' = 2xy - x into an exact differential equation.
              Rewriting this equation in differential form, we have


        Here M(x, y) = -2xy + x and N(x, y) = l. Since

                                                                 and

        are not equal, (_/) is not exact. But




        is a function of x alone. Using Eq. (5.8), we have I(x,y) = xdx = e * as an integrating factor. Multiplying (_/)e
        by e~*2, we obtain



           which is exact.

5.22.   Convert y dx + xy dy = 0 into an exact differential equation.
           Here M(x, y) = y2 and N(x, y) = xy. Since

                                                                and
40                                EXACT FIRST-ORDER DIFFERENTIAL EQUATIONS                                                [CHAR 5



        are not equal, (1) is not exact. But




        is a function of y alone. Using Eq. (5.9), we have as an integrating factor I(x, y) = e '(lly~>dy = e ln)I = 1/y. Multiplying
        the given differential equation by I(x, y) = lly, we obtain the exact equation y dx + x dy = 0.


5.23.   Convert y —               into an exact differential equation.

             Rewriting this equation in differential form, we have


        Here M(x, y)=y(i— xy) and N(x, y) = x. Since




        are not equal, (1) is not exact. Equation (5.10), however, is applicable and provides the integrating factor




        Multiplying (1) by I(x, y), we obtain




        which is exact.




                                          Supplementary Problems

In Problems 5.24 through 5.40, test whether the differential equations are exact and solve those that are.

5.24.   (y + 2xy3) dx+(l+ 3x2y2 + x)dy = 0                         5.25. (jcy + 1) a t t + ( j t y - l ) rfy = 0

5.26.    e** (3x2y -x2)dx + ex' dy = 0                             5.27. 3x2y2 dc + (2X3); + 4y3) dy = 0

5.28.   ydx + xdy = 0                                              5.29. (jc-y)dc+(jc + y)rfy = 0


5.30.   (y sin x + xy cos x) dx + (x sin x + 1) dy = 0


                                                                   5.33. y2dt + t2dy = 0


5.34.   (4t3y3-2ty)dt+(3t4y2-t2)dy        =0


5.36.   (t2-x) dt-tdx = 0                                          5.37. (t2 + x2) dt + (2tx-x)dx = 0

5.38.   2xe2' dt+(l + e2') dx = 0                                  5.39. sin t cos x dt— sin x cos t dx = 0

5.40.   (cos x + x cos t) dt + (sin t - t sin x) dx = 0
CHAP. 5]                          EXACT FIRST-ORDER DIFFERENTIAL EQUATIONS                                        41



In Problems 5.41 through 5.55, find an appropriate integrating factor for each differential equation and solve.

5.41.   (y+ 1) dx-xdy = 0                                      5.42.    y dx+(l-x)dy = 0

5.43.   (x2 + y + y2) dx-xdy = 0                               5.44.    (y + x3y3) dx + xdy = 0

5.45.   (y + x4y2) dx + xdy = 0                                5.46.    (3x2y -x2)dx + dy = 0

5.47.   dx-2xydy = 0                                           5.48.    2xy dx + y2dy = 0


5.49.   ydx + 3xdy = 0

5.51.   xy2 dx+(x2y2 + x2y) dy = 0                             5.52.    ^y2 dx + x2ydy = 0

5.53.   (y + x3 + xy2) dx-xdy = 0                              5.54.    O3/ - y) dx + (x2y4 - x) dy = 0

5.55.   3x2y2 dx + (2x*y + x^y4) dy = 0

In Problems 5.56 through 5.65, solve the initial-value problems.

5.56.   Problem 5.10 with x(0) = 2                             5.57.    Problem 5.10 with x(2) = 0

5.58.   Problem 5.10 with *(!) = -5                            5.59.    Problem 5.24 with y ( l ) = - 5

5.60.   Problem 5.26 with y(0) = -1                            5.61.    Problem 5.31 with y(0) = -2

5.62.   Problem 5.31 with y(2) = -2                            5.63.    Problem 5.32 with y(2) = -2

5.64.   Problem 5.36 with XI) = 5                               5.65.   Problem 5.38 with x(\) = -2
                                                                 CHAPTER 6



            Linear First-Order
       Differential Equations
METHOD OF SOLUTION
     A first-order linear differential equation has the form (see Chapter .1)



An inlegrating factor for Eq. (6.7) is



which depends onl\ on .v and is independent of v. When both sides of (6.1) are multiplied h\ /(.v), the resulting
equation




is exact. This equation can he solved by ihe method described in Chapter 5. A simpler procedure is to rewrite
(6.3) as




integrate both sides of this last equation \viih respect to.v. and then solve the resulting equation for v.



REDUCTION OF BERNOULLI EQUATIONS
     A Bernoulli dilTcrcnlial equation has Ihe form




where n is a real number. The substitution




transforms (6.4) into a linear differential equation in ihe unknown function z(x).

                                                           42
Copyright © 2006, 1994, 1973 by The McGraw-Hill Companies, Inc. Click here for terms of use.
CHAP. 6]                        LINEAR FIRST-ORDER DIFFERENTIAL EQUATIONS                                              43




                                               Solved Problems

6.1.   Find an integrating factor for y' — 3y = 6.
            The differential equation has the form of Eq. (6.1), withp(x) = -3 and q(x) = 6, and is linear. Here



       so (6.2) becomes




6.2.   Solve the differential equation in the previous problem.
            Multiplying the differential equation by the integrating factor defined by (1) of Problem 6.1, we obtain




       Integrating both sides of this last equation with respect to x, we have




6.3.   Find an integrating factor for y' - 2xy = x.
            The differential equation has the form of Eq. (6.1), with p(x) = -2x and q(x) = x, and is linear. Here


       so (6.2) becomes




6.4.   Solve the differential equation in the previous problem.
            Multiplying the differential equation by the integrating factor defined by (1) of Problem 6.3, we obtain




       Integrating both sides of this last equation with respect to x, we find that




6.5.   Find an integrating factor for y' + (4lx)y = x4.
            The differential equation has the form of Eq. (6.1), with p(x) = 4/x and q(x) = x4, and is linear. Here
44                                LINEAR FIRST-ORDER DIFFERENTIAL EQUATIONS                                           [CHAR 6



        so (6.2) becomes




6.6.    Solve the differential equation in the previous problem.
               Multiplying the differential equation by the integrating factor defined by (_/) of Problem 6.5, we obtain




        Integrating both sides of this last equation with respect to x, we obtain




6.7.    Solve y + y = sin x.
               Here p(x) = 1; hence I(x) = &>ldx = g*. Multiplying the differential equation by I(x), we obtain




        Integrating both sides of the last equation with respect to x (to integrate the right side, we use integration by parts
        twice), we find




6.8.    Solve the initial-value problem / + y = sin x; y(n) = 1.
               From Problem 6.7, the solution to the differential equation is



        Applying the initial condition directly, we obtain




        Thus



6.9.    Solve
               Here p(x) = -5 and I(x) = e(- 5~>dx = g 5x, Multiplying the differential equation by I(x), we obtain




        Integrating, we obtain ye 5x = c or y = ceSx.
             Note that the differential equation is also separable. (See Problem 4.4.)



6.10.   Solve

             This is a linear differential equation for the unknown function z(x). It has the form of Eq. (6.1) with y replaced
        by z and p(x) = q(x) = —x. The integrating factor is
CHAP. 6]                        LINEAR FIRST-ORDER DIFFERENTIAL EQUATIONS                                                   45



        Multiplying the differential equation by I(x), we obtain




        or

        Upon integrating both sides of this last equation, we have



        whereupon


6.1 Solve the initial-value problem1.
             The solution to this differential equation is given in Problem 6.10 as



        Applying the initial condition directly, we have




6.12.   Solve

             This is a linear differential equation for the unknown function i(x). It has the form of Eq. (6.1) with y replaced
        by z. The integrating factor is




        Multiplying the differential equation by I(x), we obtain




        or


        Upon integrating both sides of this last equation, we have




        whereupon



6.13.   Solve

            This is a linear differential equation for the unknown function Q(t). It has the form of Eq. (6.1) with y replaced
        by Q, x replaced by t, p(t) = 21(10 + 2t), and q(t) = 4. The integrating factor is
46                              LINEAR FIRST-ORDER DIFFERENTIAL EQUATIONS                                            [CHAR 6



        Multiplying the differential equation by I(t), we obtain




        or


        Upon integrating both sides of this last equation, we have




        whereupon




6.14.   Solve the initial-value problem

             The solution to this differential equation is given in Problem 6.13 as




        Applying the initial condition directly, we have




6.15.   Solve

             This is a linear differential equation for the unknown function T(t). It has the form of Eq. (6.1) with y replaced
        by T, x replaced by t, p(t) = k, and q(t) = 100k. The integrating factor is


        Multiplying the differential equation by I(t), we obtain




        or

        Upon integrating both sides of this last equation, we have



        whereupon


6.16 Solve y + xy = xy2
             This equation is not linear. It is, however, a Bernoulli differential equation having the form of Eq. (6.4) with
        p(x) = q(x) = x, and n = 2. We make the substitution suggested by (6.5), namely, z = y1^2 = y~l, from which follow
CHAP. 6]                         LINEAR FIRST-ORDER DIFFERENTIAL EQUATIONS                                                       47



        Substituting these equations into the differential equation, we obtain




        This last equation is linear. Its solution is found in Problem 6.10 to be z = cex /2 +1. The solution of the original
        differential equation is then




6.17.   Solve

             This is a Bernoulli differential equation wi\hp(x) = -3/x, q(x) = x4, and n = ^. Using Eq. (6.5), we make the
        substitution z = y1 ~(1/3) = y213. Thus, y = z3'2 and y = |z1/2z'. Substituting these values into the differential equation,
        we obtain




        This last equation is linear. Its solution is found in Problem 6.12 to be z = ex2 + ^x5. Since z = y213, the solution of
        the original problem is given implicitly by y2'3 = ex2 + ^x5, or explicitly by y = ± (ex2 + ^x5)312.



6.18.   Show that the integrating factor found in Problem 6.1 is also an integrating factor as defined in Chapter 5
        Eq. (5.7).
             The differential equation of Problem 6.1 can be rewritten as




        which has the differential form



        or

        Multiplying (1) by the integrating factor I(x) = e 3x, we obtain




        Setting

        we have


        from which we conclude that (2) is an exact differential equation.



6.19.   Find the general form of the solution of Eq. (6.1).
             Multiplying (6.1) by (6.2), we have




        Since
48                              LINEAR FIRST-ORDER DIFFERENTIAL EQUATIONS                                          [CHAR 6



                                                                                                    x)dx
        it follows from the product rule of differentiation that the left side of (_/) equals —[e       y]. Thus, (_/) can be
                                                                                              x
        rewritten as




        Integrating both sides of (2) with respect to x, we have




        or,

        Finally, setting Cj = —c and solving (3) for y, we obtain




                                                Solved Problems
In Problems 6.20 through 6.49, solve the given differential equations.




6.24.   / + 3x2y = 0                                         6.25.   y' -x2y = 0

6.26.   / - 3x*y = 0




                                                             6.31.   / - ly = ex


6.32.   y'-ly= Ux                                            6.33.   y'-ly = sin 2x


6.34.   / + x2y = x2

6.36.   y' = cos x                                           6.37.   / + y = y2

6.38.   xy' + y = xy3

6.40.   / + y = y2                                           6.41.   y' + y = y 2

6.42.   / + y = y2e*
CHAP. 6]                        LINEAR FIRST-ORDER DIFFERENTIAL EQUATIONS          49




Solve the following initial-value problems.

                                                   6.51.   / + 6ry = 0; y(n) = 5

6.52.   / + 2xy = 2.x3; y(0) = 1
                                                                 CHAPTER 7



                                                    Applications
                                                   of First-Order
       Differential Equations

GROWTH AND DECAY PROBLEMS
     Let N(t) denote ihe amount of substance {or population) that is either grow ing or deca\ ing. It' we assume
that dN/dt. the lime rale of change of this amount of substance, is proportional to the amount of substance
present. Ihen ilNldt = kN. or




where k is the constant of proportionality. (See Problems 7.1-7.7.}
      We are assuming that N(n is a dilTcrenliabie, hence continuous, function of time. For population
problems, where N(t) is actually discrete and integer-valued, this assumption is incorrect. Nonetheless, ( 7 . 1 )
still provides a good approNi million io she physical laws governing such a system. (.See Problem 7.5.)



TEMPERATURE PROBLEMS
    Newton's law of cooling, "hieh is equally applicable lo healing, stales lhal ihe lime rate of change of ihe
temperature of a body is proportional to the temperature difference between the body and iis surrounding
medium. Let T denote ihe temperature of the body and lei T,H denote the temperature of the surrounding
medium. Then the time rate of change of Ihe temperature of the body \sdT/di, and Newton's law of cooling can
be formulated as ilT/di = -k(T- Tm). or as




where k is a positive constant of proportionality Once k is chosen positive, the minus sign is required in
Newton's law to make dT/di negative in a cooling process, when T is greater than Tm. and positive in a heating
process, when TMs less than T,,,. (See Problems 7.8-7.10.1

                                                           50
Copyright © 2006, 1994, 1973 by The McGraw-Hill Companies, Inc. Click here for terms of use.
CHAP. 7]              APPLICATIONS OF FIRST-ORDER DIFFERENTIAL EQUATIONS                                        51


FALLING BODY PROBLEMS
     Consider a vertically falling body of mass m that is being influenced only by gravity g and an air resistance
that is proportional to the velocity of the body. Assume that both gravity and mass remain constant and, for
convenience, choose the downward direction as the positive direction.

Newton's second law of motion: The net force acting on a body is equal to the time rate of change of the
momentum of the body; or, for constant mass,




where F is the net force on the body and v is the velocity of the body, both at time t.

    For the problem at hand, there are two forces acting on the body: (1) the force due to gravity given by the
weight w of the body, which equals mg, and (2) the force due to air resistance given by —kv, where k > 0 is a
constant of proportionality. The minus sign is required because this force opposes the velocity; that is, it acts in
the upward, or negative, direction (see Fig. 7-1). The net force F on the body is, therefore, F = mg-kv.
Substituting this result into (7.3), we obtain




or

as the equation of motion for the body.
     If air resistance is negligible or nonexistent, then k = 0 and (7.4) simplifies to




                         Fig. 7-1                                                   Fig. 7-2
52                       APPLICATIONS OF FIRST-ORDER DIFFERENTIAL EQUATIONS                                 [CHAR 7



(See Problem 7.11.) When k > 0, the limiting velocity V; is defined by



     Caution: Equations (7.4), (7.5), and (7.6), are valid only if the given conditions are satisfied. These equa-
tions are not valid if, for example, air resistance is not proportional to velocity but to the velocity squared, or if
the upward direction is taken to be the positive direction. (See Problems 7.14 and 7.15.)


DILUTION PROBLEMS
     Consider a tank which initially holds V0 gal of brine that contains a Ib of salt. Another brine solution,
containing b Ib of salt per gallon, is poured into the tank at the rate of e gal/min while, simultaneously, the
well-stirred solution leaves the tank at the rate of/gal/min (Fig. 7-2). The problem is to find the amount of salt
in the tank at any time t.
     Let <2 denote the amount (in pounds) of salt in the tank at any time t. The time rate of change of Q, dQIdt,
equals the rate at which salt enters the tank minus the rate at which salt leaves the tank. Salt enters the tank at
the rate of be Ib/min. To determine the rate at which salt leaves the tank, we first calculate the volume of brine
in the tank at any time t, which is the initial volume V0 plus the volume of brine added et minus the volume of
brine removed f t . Thus, the volume of brine at any time is


The concentration of salt in the tank at any time is QI(V0 + et -ft), from which it follows that salt leaves the
tank at the rate of




Thus,


or

(See Problems 7.16-7.18.)


ELECTRICAL CIRCUITS
     The basic equation governing the amount of current I (in amperes) in a simple KL circuit (Fig. 7-3)
consisting of a resistance R (in ohms), an inductor L (in henries), and an electromotive force (abbreviated emf)
E (in volts) is



For an RC circuit consisting of a resistance, a capacitance C (in farads), an emf, and no inductance (Fig. 7-4),
the equation governing the amount of electrical charge q (in coulombs) on the capacitor is




The relationship between q and I is



(See Problems 7.19-7.22.) For more complex circuits see Chapter 14.
CHAP. 7]                   APPLICATIONS OF FIRST-ORDER DIFFERENTIAL EQUATIONS                                            53




                            Fig. 7-3                                                    Fig. 7-4




ORTHOGONAL TRAJECTORIES
       Consider a one-parameter family of curves in the xy-plane defined by


where c denotes the parameter. The problem is to find another one-parameter family of curves, called the
orthogonal trajectories of the family (7.72) and given analytically by


such that every curve in this new family (7.13) intersects at right angles every curve in the original family (7.72).
     We first implicitly differentiate (7.72) with respect to x, then eliminate c between this derived equation and
(7.72). This gives an equation connecting x, y, and y', which we solve for / to obtain a differential equation of
the form



The orthogonal trajectories of (7.72) are the solutions of



(See Problems 7.23-7.25.)
    For many families of curves, one cannot explicitly solve for dyldx and obtain a differential equation of the
form (7.14). We do not consider such curves in this book.




                                                 Solved Problems

7.1.     A person places $20,000 in a savings account which pays 5 percent interest per annum, compounded
         continuously. Find (a) the amount in the account after three years, and (b) the time required for the
         account to double in value, presuming no withdrawals and no additional deposits.
              Let N(t) denote the balance in the account at any time t. Initially, N(Q) = 20,000. The balance in the account
         grows by the accumulated interest payments, which are proportional to the amount of money in the account. The
         constant of proportionality is the interest rate. In this case, k= 0.05 and Eq. (7.1) becomes




         This differential equation is both linear and separable. Its solution is
54                       APPLICATIONS OF FIRST-ORDER DIFFERENTIAL EQUATIONS                                          [CHAR 7



       At t= 0, N(0) = 20,000, which when substituted into (1) yields


       With this value of c, (1) becomes


       Equation (2) gives the dollar balance in the account at any time t.
       (a)   Substituting t = 3 into (2), we find the balance after three years to be


       (b)   We seek the time t at which N(t) = $40,000. Substituting these values into (2) and solving for t, we obtain




7.2.   A person places $5000 in an account that accrues interest compounded continuously. Assuming no
       additional deposits or withdrawals, how much will be in the account after seven years if the interest
       rate is a constant 8.5 percent for the first four years and a constant 9.25 percent for the last three years?
           Let N(t) denote the balance in the account at any time t. Initially, N(0) = 5000. For the first four years, k = 0.085
       and Eq. (7.1) becomes



       Its solution is


       At t= 0, N(0) = 5000, which when substituted into (1) yields


       and (1) becomes


       Substituting t = 4 into (2), we find the balance after four years to be



       This amount also represents the beginning balance for the last three-year period.
           Over the last three years, the interest rate is 9.25 percent and (7.1) becomes



       Its solution is


       Ait = 4, N(4) = $7024.74, which when substituted into (3) yields


       and (3) becomes


       Substituting t = 7 into (4), we find the balance after seven years to be
CHAP. 7]                 APPLICATIONS OF FIRST-ORDER DIFFERENTIAL EQUATIONS                                            55



7.3.   What constant interest rate is required if an initial deposit placed into an account that accrues interest
       compounded continuously is to double its value in six years?
             The balance N(t) in the account at any time t is governed by (7.1)



       which has as its solution


       We are not given an amount for the initial deposit, so we denote it as N0. At t = 0, N(0) = N0, which when
       substituted into (1) yields


       and (1) becomes


       We seek the value of k for which N=2N0 when t = 6. Substituting these values into (2) and solving for k,
       we find




       An interest rate of 11.55 percent is required.


7.4.   A bacteria culture is known to grow at a rate proportional to the amount present. After one hour, 1000
       strands of the bacteria are observed in the culture; and after four hours, 3000 strands. Find (a) an expres-
       sion for the approximate number of strands of the bacteria present in the culture at any time t and (b) the
       approximate number of strands of the bacteria originally in the culture.
       (a)   Let N(t) denote the number of bacteria strands in the culture at time t. From (6.1), dNIdt — kN = 0, which is
             both linear and separable. Its solution is


             AU=1,N= 1000; hence,


             At t = 4, W = 3000; hence,



             Solving (2) and (3) for k and c, we find




             Substituting these values of k and c into (1), we obtain



             as an expression for the amount of the bacteria present at any time t.
       (b)   We require N at t = 0. Substituting t = 0 into (4), we obtain N(0) = 694e(0 366)(0) = 694.
56                        APPLICATIONS OF FIRST-ORDER DIFFERENTIAL EQUATIONS                                    [CHAR 7



7.5.   The population of a certain country is known to increase at a rate proportional to the number of people
       presently living in the country. If after two years the population has doubled, and after three years the
       population is 20,000, estimate the number of people initially living in the country.
             Let N denote the number of people living in the country at any time t, and let NQ denote the number of people
       initially living in the country. Then, from (7.1),




       which has the solution


       At t = 0, N = N0; hence, it follows from (1) that N0 = cek(°\ or that c = N0. Thus,



       At t= 2, N= 2N0. Substituting
                        Substituting these values into (2), we have

                                                      from which

       Substituting this value into (2) gives


                            Substituting these values into (3),
       At t = 3, N= 20,000. Substituting                   (3), we obtain




7.6.   A certain radioactive material is known to decay at a rate proportional to the amount present. If initially
       there is 50 milligrams of the material present and after two hours it is observed that the material has lost
       10 percent of its original mass, find (a) an expression for the mass of the material remaining at any time t,
       (b) the mass of the material after four hours, and (c) the time at which the material has decayed to one
       half of its initial mass.
       (a)   Let N denote the amount of material present at time t. Then, from (7.1),




             This differential equation is separable and linear; its solution is



             At t = 0, we are given that N= 50. Therefore, from (1), 50 = cek(°\ or c = 50. Thus,



             At t = 2, 10 percent of the original mass of 50 mg, or 5 mg, has decayed. Hence, at t = 2, N= 50 - 5 = 45.
             Substituting these values into (2) and solving for k, we have




             Substituting this value into (2), we obtain the amount of mass present at any time t as


             where t is measured in hours.
       (b)   We require N at t = 4. Substituting t = 4 into (3) and then solving for N, we find that
CHAP. 7]                  APPLICATIONS OF FIRST-ORDER DIFFERENTIAL EQUATIONS                                                 57



       (c)    We require t when N = 50/2 = 25. Substituting N=25 into (3) and solving for t, we find




                    The time required to reduce a decaying material to one half its original mass is called the half-life of the
              material. For this problem, the half-life is 13 hours.


7.7.   Five mice in a stable population of 500 are intentionally infected with a contagious disease to test
       a theory of epidemic spread that postulates the rate of change in the infected population is proportional
       to the product of the number of mice who have the disease with the number that are disease free.
       Assuming the theory is correct, how long will it take half the population to contract the disease?
            Let N(t) denote the number of mice with the disease at time t. We are given that N(0) = 5, and it follows that
       500 - N(t) is the number of mice without the disease at time t. The theory predicts that




       where k is a constant of proportionality. This equation is different from (7.1) because the rate of change is no longer
       proportional to just the number of mice who have the disease. Equation (1) has the differential form




       which is separable. Using partial fraction decomposition, we have




       hence (2) may be rewritten as




       Its solution is




       or

       which may be rewritten as




       Bute                     Setting            we can write (3) as




       At t= 0, N= 5. Substituting these values into (4), we find




       so GI = 1/99 and (4) becomes
58                         APPLICATIONS OF FIRST-ORDER DIFFERENTIAL EQUATIONS                                         [CHAR 7



       We could solve (5) for N, but this is not necessary. We seek a value of t when N= 250, one-half the population.
       Substituting N = 250 into (5) and solving for t, we obtain




       or t = 0.009191k time units. Without additional information, we cannot obtain a numerical value for the constant of
       proportionality k or be more definitive about t.


7.8.   A metal bar at a temperature of 100° F is placed in a room at a constant temperature of 0°F. If after
       20 minutes the temperature of the bar is 50° F, find (a) the time it will take the bar to reach a temperature
       of 25° F and (b) the temperature of the bar after 10 minutes.
           Use Eq. (7.2) with Tm = 0; the medium here is the room which is being held at a constant temperature of 0° F.
       Thus we have



       whose solution is


       Since T= 100 at t = 0 (the temperature of the bar is initially 100° F), it follows from (1) that 100 = ce-k(0) or 100 = c.
       Substituting this value into (1), we obtain


       At t= 20, we are given that T= 50; hence, from (2),

                                             from which

       Substituting this value into (2), we obtain the temperature of the bar at any time t as



       (a)   We require t when T = 25. Substituting T=25 into (3), we have




             Solving, we find that t = 39.6 min.
       (b)   We require T when t = 10. Substituting t= 10 into (3) and then solving for T, we find that



                  It should be noted that since Newton's law is valid only for small temperature differences, the above
             calculations represent only a first approximation to the physical situation.


7.9.   A body at a temperature of 50° F is placed outdoors where the temperature is 100° F. If after 5 minutes
       the temperature of the body is 60° F, find (a) how long it will take the body to reach a temperature of
       75° F and (b) the temperature of the body after 20 minutes.
             Using (7.2) with Tm = 100 (the surrounding medium is the outside air), we have
CHAP. 7]                    APPLICATIONS OF FIRST-ORDER DIFFERENTIAL EQUATIONS                                         59



        This differential equation is linear. Its solution is given in Problem 6.15 as



        Since T = 50 when t = 0,ii follows from (1) that 50 = ce~*(0) + 100, or c = -50. Substituting this value into (1),
        we obtain



        Ait =5, we are given that T= 60; hence, from (2), 60 = —5Qe 5k + 100. Solving for k, we obtain




        Substituting this value into (2), we obtain the temperature of the body at any time t as



        (a)   We require t when T = 75. Substituting T=75 into (3), we have




              Solving for t, we find




        (b)   We require T when t = 20. Substituting t = 20 into (3) and then solving for T, we find




7.10.   A body at an unknown temperature is placed in a room which is held at a constant temperature of 30° F.
        If after 10 minutes the temperature of the body is 0° F and after 20 minutes the temperature of the body
        is 15° F, find the unknown initial temperature.
              From (7.2),




        Solving, we obtain



        At t= 10, we are given that T=0. Hence, from (_/),



        At t= 20, we are given that T= 15. Hence, from (_/) again,



        Solving (2) and (3) for k and c, we find
60                        APPLICATIONS OF FIRST-ORDER DIFFERENTIAL EQUATIONS                                           [CHAR 7



        Substituting these values into (1), we have for the temperature of the body at any time t



        Since we require T at the initial time t = 0, it follows from (4) that




7.11.   A body of mass 5 slugs is dropped from a height of 100 ft with zero velocity. Assuming no air resist-
        ance, find (a) an expression for the velocity of the body at any time t, (b) an expression for the position
        of the body at any time t, and (c) the time required to reach the ground.




                                                           Fig. 7-5


        (a)   Choose the coordinate system as in Fig. 7-5. Then, since there is no air resistance, (7.5) applies: dvldt = g. This
              differential equation is linear or, in differential form, separable; its solution is v = gt+c. When t=0, v = 0
              (initially the body has zero velocity); hence 0 = g(0) + c, or c = 0. Thus, v = gt or, assuming g = 32 ft/sec2,


        (b)   Recall that velocity is the time rate of change of displacement, designated here by x. Hence, v = dxldt, and
              (1) becomes dxldt = 32t. This differential equation is also both linear and separable; its solution is


              But at t = 0, x = 0 (see Fig. 7-5). Thus, 0 = (16)(0)2 + c1; or Cj = 0. Substituting this value into (2), we have



        (c)   We require t when x = 100. From (3) t = V(100) 1(16) = 2.5sec.


7.12.   A steel ball weighing 2 Ib is dropped from a height of 3000 ft with no velocity. As it falls, the ball
        encounters air resistance numerically equal to v/8 (in pounds), where v denotes the velocity of the ball
        (in feet per second). Find (a) the limiting velocity for the ball and (b) the time required for the ball to
        hit the ground.
              Locate the coordinate system as in Fig. 7-5 with the ground now situated at x = 3000. Here w = 2 Ib and
        k= 1/8. Assuming gravity g is 32 ft/sec32, we have from the formula w = mg that 2 = m(32) or that the mass of the
        ball is m= 1/16 slug. Equation (7.4) becomes
CHAP. 7]                   APPLICATIONS OF FIRST-ORDER DIFFERENTIAL EQUATIONS                                                61



        which has as its solution


        At t= 0, we are given that v = 0. Substituting these values into (_/), we obtain



        from which we conclude that c = -16 and (_/) becomes



        (a)   From (_/) or (2), we see that as t —> °°, v —> 16 so the limiting velocity is 16 ft/sec2.
        (b)   To find the time it takes for the ball to hit the ground (x = 3000), we need an expression for the position of the
              ball at any time t. Since v = dx/dt, (2) can be rewritten as




              Integrating both sides of this last equation directly with respect to t, we have



              where c1 denotes a constant of integration. At t = 0, x = 0. Substituting these values into (3), we obtain



              from which we conclude that Cj = -8 and (3) becomes



              The ball hits the ground when x(t) = 3000. Substituting this value into (4), we have



              or

              Although (5) cannot be solved explicitly for t, we can approximate the solution by trial and error, substituting
              different values of t into (5) until we locate a solution to the degree of accuracy we need. Alternatively, we
              note that for any large value of t, the negative exponential term will be negligible. A good approximation is
              obtained by setting 2t = 376 or t = 188 sec. For this value of t, the exponential is essentially zero.


7.13.   A body weighing 64 Ib is dropped from a height of 100 ft with an initial velocity of 10 ft/sec. Assume
        that the air resistance is proportional to the velocity of the body. If the limiting velocity is known to be
        128 ft/sec, find (a) an expression for the velocity of the body at any time t and (b) an expression for the
        position of the body at any time t.
        (a)   Locate the coordinate system as in Fig. 7-5. Here w = 64 Ib. Since w = mg, it follows that mg = 64, or m = 2
              slugs. Given that v: = 128 ft/sec, it follows from (7.6) that 128 = 641k, or k = j. Substituting these values into
              (6.4), we obtain the linear differential equation




              which has the solution


              At t = 0, we are given that v = 10. Substituting these values into (_/), we have 10 = ce° + 128, or c = -118. The
              velocity at any time t is given by
62                         APPLICATIONS OF FIRST-ORDER DIFFERENTIAL EQUATIONS                                       [CHAR 7



        (b)   Since v = dxldt, where x is displacement, (2) can be rewritten as




              This last equation, in differential form, is separable; its solution is


              At t = 0, we have x = 0 (see Fig. 7-5). Thus, (3) gives


              The displacement at any time t is then given by




7.14.   A body of mass m is thrown vertically into the air with an initial velocity v0. If the body encounters an
        air resistance proportional to its velocity, find (a) the equation of motion in the coordinate system of
        Fig. 7-6, (b) an expression for the velocity of the body at any time t, and (c) the time at which the body
        reaches its maximum height.




                                                            Fig. 7-6



        (a)   In this coordinate system, Eq. (7.4) may not be the equation of motion. To derive the appropriate equation,
              we note that there are two forces on the body: (1) the force due to the gravity given by mg and (2) the force
              due to air resistance given by kv, which will impede the velocity of the body. Since both of these forces act in
              the downward or negative direction, the net force on the body is —mg —kv. Using (7.3) and rearranging,
              we obtain




              as the equation of motion.
        (b)   Equation (T) is a linear differential equation, and its solution is v = ce ( ''-mg/k. At t = 0, v = v0; hence
              v0 = ce (*/m)0 - (mg/k), or c = v0 + (mg/k). The velocity of the body at any time t is
CHAP. 7]                  APPLICATIONS OF FIRST-ORDER DIFFERENTIAL EQUATIONS                                         63



        (c)   The body reaches its maximum height when v = 0. Thus, we require t when v = 0. Substituting v = 0 into (2)
              and solving for t, we find




7.15.   A body of mass 2 slugs is dropped with no initial velocity and encounters an air resistance that is
        proportional to the square of its velocity. Find an expression for the velocity of the body at any time t.
              The force due to air resistance is -kv2; so that Newton's second law of motion becomes




        Rewriting this equation in differential form, we have



        which is separable. By partial fractions,




        Hence (_/) can be rewritten as




        This last equation has as its solution




        or

        which can be rewritten as




        or


        At f = 0, we are given that v = 0. This implies cl = 1, and the velocity is given by




              Note that without additional information, we cannot obtain a numerical value for the constant k.
64                         APPLICATIONS OF FIRST-ORDER DIFFERENTIAL EQUATIONS                                     [CHAR 7



7.16.   A tank initially holds 100 gal of a brine solution containing 20 Ib of salt. At t = 0, fresh water is poured
        into the tank at the rate of 5 gal/min, while the well-stirred mixture leaves the tank at the same rate. Find
        the amount of salt in the tank at any time t.
              Here, V0 = 100, a = 20, b = 0, and e =/= 5. Equation (7.8) becomes



        The solution of this linear equation is


        At t=0, we are given that Q = a = 20. Substituting these values into (1), we find that c = 20, so that (1) can be
        rewritten as Q = 20e~'120. Note that as t —* °°, Q —* 0 as it should, since only fresh water is being added.


7.17.   A tank initially holds 100 gal of a brine solution containing 1 Ib of salt. At t = 0 another brine solution
        containing 1 Ib of salt per gallon is poured into the tank at the rate of 3 gal/min, while the well-stirred
        mixture leaves the tank at the same rate. Find (a) the amount of salt in the tank at any time t and (b) the
        time at which the mixture in the tank contains 2 Ib of salt.
        (a)   Here VQ = 100, a = 1, b = 1, and e =/= 3; hence, (7.8) becomes




              The solution to this linear differential equation is



              At t = 0, Q = a=l. Substituting these values into (1), we find 1 = ce° + 100, or c = -99. Then (1) can be
              rewritten as



        (b)   We require t when 2 = 2. Substituting 2 = 2 into (2), we obtain



              from which




7.18.   A 50-gal tank initially contains 10 gal of fresh water. At t = 0, a brine solution containing 1 Ib of salt per
        gallon is poured into the tank at the rate of 4 gal/min, while the well-stirred mixture leaves the tank at
        the rate of 2 gal/min. Find (a) the amount of time required for overflow to occur and (b) the amount of
        salt in the tank at the moment of overflow.
        (a)   Here a = 0, b = 1, e = 4,f= 2, and VQ = 10. The volume of brine in the tank at any time t is given by (7.7) as
              V0 + et -ft = 10 + 2t. We require t when 10 + 2t = 50; hence, t = 20 min.
        (b)   For this problem, (7.8) becomes




              This is a linear equation; its solution is given in Problem 6.13 as




              At t = 0, Q = a = 0. Substituting these values into (1), we find that c = 0. We require Q at the moment of
CHAP. 7]                   APPLICATIONS OF FIRST-ORDER DIFFERENTIAL EQUATIONS                                                     65



              overflow, which from part (a) is t = 20. Thus,




7.19.   An RL circuit has an emf of 5 volts, a resistance of 50 ohms, an inductance of 1 henry, and no initial
        current. Find the current in the circuit at any time t.
             Here E = 5, R = 50, and L = 1; hence (7.9) becomes




        This equation is linear; its solution is




                        thus                               . The current at any time t is then




             The quantity —-^e 50' in (_/) is called the transient current, since this quantity goes to zero ("dies out") as t —> °°.
        The quantity -^ in (_/) is called the steady-state current. As t —> °°, the current I approaches the value of the steady-
        state current.


7.20.   An RL circuit has an emf given (in volts) by 3 sin 2t, a resistance of 10 ohms, an inductance of 0.5 henry,
        and an initial current of 6 amperes. Find the current in the circuit at any time t.
             Here, E = 3 sin 2t, R = 10, and L = 0.5; hence (7.9) becomes




        This equation is linear, with solution (see Chapter 6)




        Carrying out the integrations (the second integral requires two integrations by parts), we obtain




        At t = 0, 1 = 6; hence,




        whence c = 609/101. The current at any time t is




        As in Problem 7.18, the current is the sum of a transient current, here (609/101)e 20(, and a
        steady-state current,
66                           APPLICATIONS OF FIRST-ORDER DIFFERENTIAL EQUATIONS                                      [CHAR 7



7.21.   Rewrite the steady-state current of Problem 7.20 in the form A sin (2t - (f>). The angle (f> is called the
        phase angle.
               Since A sin (2t - (f>) = A(sm 2t cos (f> - cos 2t sin (f>), we require




        Thus, A cos d> =        and A sin d> =      . It now follows that




        and


        Consequently, Is has the required form if




7.22.   An RC circuit has an emf given (in volts) by 400 cos 2t, a resistance of 100 ohms, and a capacitance of
        10~2 farad. Initially there is no charge on the capacitor. Find the current in the circuit at any time t.
           We first find the charge q and then use (7.11) to obtain the current. Here, E = 4QOcos2t, R= 100, and
        C= 10~2; hence (7.10) becomes




        This equation is linear, and its solution is (two integrations by parts are required)




        At t = 0, q = 0; hence,




        Thus

        and using (7.11), we obtain




7.23.   Find the orthogonal trajectories of the family of curves x2 + y2 = c2.
             The family, which is given by (7.12) with F(x, y, c) = x2 + y2 — c2, consists of circles with centers at the origin
        and radii c. Implicitly differentiating the given equation with respect to x, we obtain
CHAP. 7]                  APPLICATIONS OF FIRST-ORDER DIFFERENTIAL EQUATIONS                                                67



             Here/(X y) = -x/y, so that (7.15) becomes




        This equation is linear (and, in differential form, separable); its solution is



        which represents the orthogonal trajectories.
             In Fig. 7-7 some members of the family of circles are shown in solid lines and some members of the family
        (1), which are straight lines through the origin, are shown in dashed lines. Observe that each straight line intersects
        each circle at right angles.




                                                            Fig. 7-7


7.24.   Find the orthogonal trajectories of the family of curves y = ex2.
             The family, which is given by (7.12) with F(x, y, c)=y-cx2, consists of parabolas symmetric about the
        y-axis with vertices at the origin. Differentiating the given equation with respect to x, we obtain dyldx = 2cx.
        To eliminate c, we observe, from the given equation, that c = y/x2; hence, dyldx = 2y/x. Hetef(x, y) = 2y/x, so (7.15)
        becomes




        The solution of this separable equation is ^x1 + y2 =k. These orthogonal trajectories are ellipses. Some members
        of this family, along with some members of the original family of parabolas, are shown in Fig. 7-8. Note that each
        ellipse intersects each parabola at right angles.


7.25.   Find the orthogonal trajectories of the family of curves x1 + y2 = ex.
             Here, F(x, y, c) = x2 + y1 — ex. Implicitly differentiating the given equation with respect to x, we obtain
68                        APPLICATIONS OF FIRST-ORDER DIFFERENTIAL EQUATIONS                                           [CHAR 7




                                                            Fig. 7-8


        Eliminating c between this equation and x2 + y1 — ex = 0, we find




        Here/(X y) = (y2 - x2)/2xy, so (7.15) becomes




        This equation is homogeneous, and its solution (see Problem 4.14) gives the orthogonal trajectories as x2 +y2 = ky.




                                         Supplementary Problems

7.26.   Bacteria grow in a nutrient solution at a rate proportional to the amount present. Initially, there are 250 strands of the
        bacteria in the solution which grows to 800 strands after seven hours. Find (a) an expression for the approximate
        number of strands in the culture at any time t and (b) the time needed for the bacteria to grow to 1600 strands.

7.27.   Bacteria grow in a culture at a rate proportional to the amount present. Initially, 300 strands of the bacteria are in
        the culture and after two hours that number has grown by 20 percent. Find (a) an expression for the approximate
        number of strands in the culture at any time t and (b) the time needed for the bacteria to double its initial size.

7.28.   A mold grows at a rate proportional to its present size. Initially there is 2 oz of this mold, and two days later there
        is 3 oz. Find (a) how much mold was present after one day and (b) how much mold will be present in ten days.
CHAP. 7]                  APPLICATIONS OF FIRST-ORDER DIFFERENTIAL EQUATIONS                                                 69



7.29.   A mold grows at a rate proportional to its present size. If the original amount doubles in one day, what proportion
        of the original amount will be present in five days? Hint: Designate the initial amount by N0. It is not necessary to
        know N0 explicitly.

7.30.   A yeast grows at a rate proportional to its present size. If the original amount doubles in two hours, in how many
        hours will it triple?

7.31.   The population of a certain country has grown at a rate proportional to the number of people in the country. At
        present, the country has 80 million inhabitants. Ten years ago it had 70 million. Assuming that this trend continues,
        find (a) an expression for the approximate number of people living in the country at any time t (taking t = 0 to be
        the present time) and (b) the approximate number of people who will inhabit the country at the end of the next
        ten-year period.

7.32.   The population of a certain state is known to grow at a rate proportional to the number of people presently living in
        the state. If after 10 years the population has trebled and if after 20 years the population is 150,000, find the number
        of people initially living in the state.

7.33.   A certain radioactive material is known to decay at a rate proportional to the amount present. If initially there are
        100 milligrams of the material present and if after two years it is observed that 5 percent of the original mass has
        decayed, find (a) an expression for the mass at any time t and (b) the time necessary for 10 percent of the original
        mass to have decayed.

7.34.   A certain radioactive material is known to decay at a rate proportional to the amount present. If after one hour it is
        observed that 10 percent of the material has decayed, find the half-life of the material. Hint: Designate the initial
        mass of the material by N0. It is not necessary to know N0 explicitly.

7.35.   Find N(t) for the situation described in Problem 7.7.

7.36.   A depositor places $10,000 in a certificate of deposit which pays 6 percent interest per annum, compounded
        continuously. How much will be in the account at the end of seven years, assuming no additional deposits or
        withdrawals?

7.37.   How much will be in the account described in the previous problem if the interest rate is 7y percent instead?

7.38.   A depositor places $5000 in an account established for a child at birth. Assuming no additional deposits or with-
        drawals, how much will the child have upon reaching the age of 21 if the bank pays 5 percent interest per annum
        compounded continuously for the entire time period?

7.39.   Determine the interest rate required to double an investment in eight years under continuous compounding.

7.40.   Determine the interest rate required to triple an investment in ten years under continuous compounding.

7.41.   How long will it take a bank deposit to triple in value if interest is compounded continuously at a constant rate of
        5^ percent per annum?

7.42.   How long will it take a bank deposit to double in value if interest is compounded continuously at a constant rate of
        81 percent per annum?

7.43.   A depositor currently has $6000 and plans to invest it in an account that accrues interest continuously. What interest
        rate must the bank pay if the depositor needs to have $10,000 in four years?

7.44.   A depositor currently has $8000 and plans to invest it in an account that accrues interest continuously at the rate of
        6 j percent. How long will it take for the account to grow to $13,500?

7.45.   A body at a temperature of 0° F is placed in a room whose temperature is kept at 100° F If after 10 minutes
        the temperature of the body is 25° F, find (a) the time required for the body to reach a temperature of 50° F, and
        (b) the temperature of the body after 20 minutes.
70                        APPLICATIONS OF FIRST-ORDER DIFFERENTIAL EQUATIONS                                         [CHAR 7



7.46.   A body of unknown temperature is placed in a refrigerator at a constant temperature of 0° F If after 20 minutes the
        temperature of the body is 40° F and after 40 minutes the temperature of the body is 20° F, find the initial temper-
        ature of the body.

7.47.   A body at a temperature of 50° F is placed in an oven whose temperature is kept at 150° F. If after 10 minutes the
        temperature of the body is 75° F, find the time required for the body to reach a temperature of 100° F.

7.48.   A hot pie that was cooked at a constant temperature of 325° F is taken directly from an oven and placed outdoors
        in the shade to cool on a day when the air temperature in the shade is 85° F. After 5 minutes in the shade, the
        temperature of the pie had been reduced to 250° F. Determine (a) the temperature of the pie after 20 minutes and
        (b) the time required for the pie to reach 275° F.

7.49.   A cup of tea is prepared in a preheated cup with hot water so that the temperature of both the cup and the brewing
        tea is initially 190° F. The cup is then left to cool in a room kept at a constant 72° F. Two minutes later, the temper-
        ature of the tea is 150° F. Determine (a) the temperature of the tea after 5 minutes and (b) the time required for the
        tea to reach 100° F.

7.50.   A bar of iron, previously heated to 1200° C, is cooled in a large bath of water maintained at a constant temperature
        of 50° C. The bar cools by 200° in the first minute. How much longer will it take to cool a second 200°?

7.51.   A body of mass 3 slugs is dropped from a height of 500 ft in a with zero velocity. Assuming no air resistance, find
        (a) an expression for the velocity of the body at any time t and (b) an expression for the position of the body at any
        time t with respect to the coordinate system described in Fig. 7-5.

7.52.   (a) Determine the time required for the body described in the previous problem to hit the ground, (b) How long
        would it take if instead the mass of the body was 10 slugs?

7.53.   A body is dropped from a height of 300 ft with an initial velocity of 30 ft/sec. Assuming no air resistance, find (a)
        an expression for the velocity of the body at any time t and (b) the time required for the body to hit the ground.

7.54.   A body of mass 2 slugs is dropped from a height of 450 ft with an initial velocity of 10 ft/sec. Assuming no air
        resistance, find (a) an expression for the velocity of the body at any time t and (b) the time required for the body to
        hit the ground.

7.55.   A body is propelled straight up with an initial velocity of 500 ft/sec in a vacuum with no air resistance. How long
        will it take the body to return to the ground?

7.56.   A ball is propelled straight up with an initial velocity of 250 ft/sec in a vacuum with no air resistance. How high
        will it go?

7.57.   A body of mass m is thrown vertically into the air with an initial velocity v0. The body encounters no air resistance.
        Find (a) the equation of motion in the coordinate system of Fig. 7-6, (b) an expression for the velocity of the body
        at any time t, (c) the time tm at which the body reaches its maximum height, (d) an expression for the position of
        the body at any time t, and (e) the maximum height attained by the body.

7.58.   Redo Problem 7.51 assuming there is air resistance which creates a force on the body equal to -2v Ib.

7.59.   Redo Problem 7.54 assuming there is air resistance which creates a force on the body equal to ^-v Ib.

7.60.   A ball of mass 5 slugs is dropped from a height of 1000 ft. Find the limiting velocity of the ball if it encounters a
        force due to air resistance equal to —\v.

7.61.   A body of mass 2 kg is dropped from a height of 200 m. Find the limiting velocity of the body if it encounters a
        resistance force equal to —50v.

7.62.   A body of mass 10 slugs is dropped from a height of 1000 ft with no initial velocity. The body encounters an air
        resistance proportional to its velocity. If the limiting velocity is known to be 320 ft/sec, find (a) an expression for
        the velocity of the body at any time t, (b) an expression for the position of the body at any time t, and (c) the time
        required for the body to attain a velocity of 160 ft/sec.
CHAP. 7]                   APPLICATIONS OF FIRST-ORDER DIFFERENTIAL EQUATIONS                                                   71



7.63.   A body weighing 8 Ib is dropped from a great height with no initial velocity. As it falls, the body encounters a force
        due to air resistance proportional to its velocity. If the limiting velocity of this body is 4 ft/sec, find (a) an expres-
        sion for the velocity of the body at any time t and (b) an expression for the position of the body at any time t.

7.64.   A body weighing 160 Ib is dropped 2000 ft above ground with no initial velocity. As it falls, the body encounters a
        force due to air resistance proportional to its velocity. If the limiting velocity of this body is 320 ft/sec, find (a) an
        expression for the velocity of the body at any time t and (b) an expression for the position of the body at any time t.

7.65.   A tank initially holds 10 gal of fresh water. At t = 0, a brine solution containing y Ib of salt per gallon is poured into
        the tank at a rate of 2 gal/min, while the well-stirred mixture leaves the tank at the same rate. Find (a) the amount
        and (b) the concentration of salt in the tank at any time t.

7.66.   A tank initially holds 80 gal of a brine solution containing ^lb of salt per gallon. At t = 0, another brine solution con-
        taining 1 Ib of salt per gallon is poured into the tank at the rate of 4 gal/min, while the well-stirred mixture leaves the
        tank at the rate of 8 gal/min. Find the amount of salt in the tank when the tank contains exactly 40 gal of solution.

7.67.   A tank contains 100 gal of brine made by dissolving 80 Ib of salt in water. Pure water runs into the tank at the rate
        of 4 gal/min, and the well-stirred mixture runs out at the same rate. Find (a) the amount of salt in the tank at any
        time t and (b) the time required for half the salt to leave the tank.

7.68.   A tank contains 100 gal of brine made by dissolving 60 Ib of salt in water. Salt water containing 1 Ib of salt per
        gallon runs in at the rate of 2 gal/min and the well-stirred mixture runs out at the same rate of 3 gal/min. Find the
        amount of salt in the tank after 30 minutes.

7.69.   A tank contains 40 1 of solution containing 2 g of substance per liter. Salt water containing 3 g of this substance
        per liter runs in at the rate of 4 1/min and the well-stirred mixture runs out at the same rate. Find the amount of
        substance in the tank after 15 minutes.

7.70.   A tank contains 40 1 of a chemical solution prepared by dissolving 80 g of a soluble substance in fresh water. Fluid
        containing 2 g of this substance per liter runs in at the rate of 3 I/mm and the well-stirred mixture runs out at the
        same rate. Find the amount of substance in the tank after 20 minutes.

7.71.   An RC circuit has an emf of 5 volts, a resistance of 10 ohms, a capacitance of 10~2 farad, and initially a charge of
        5 coulombs on the capacitor. Find (a) the transient current and (b) the steady-state current.

7.72.   An RC circuit has an emf of 100 volts, a resistance of 5 ohms, a capacitance of 0.02 farad, and an initial charge on
        the capacitor of 5 coulombs. Find (a) an expression for the charge on the capacitor at any time t and (b) the current
        in the circuit at any time t.

7.73.   An RC circuit has no applied emf, a resistance of 10 ohms, a capacitance of 0.04 farad, and an initial charge on the
        capacitor of 10 coulombs. Find (a) an expression for the charge on the capacitor at any time t and (b) the current in
        the circuit at any time t.

7.74.   A RC circuit has an emf of 10 sin t volts, a resistance of 100 ohms, a capacitance of 0.005 farad, and no initial
        charge on the capacitor. Find (a) the charge on the capacitor at any time t and (b) the steady-state current.

7.75.   A RC circuit has an emf of 300 cos 2t volts, a resistance of 150 ohms, a capacitance of l/6xlO~ 2 farad, and an
        initial charge on the capacitor of 5 coulombs. Find (a) the charge on the capacitor at any time t and (b) the steady-
        state current.

7.76.   A RL circuit has an emf of 5 volts, a resistance of 50 ohms, an inductance of 1 henry, and no initial current. Find
        (a) the current in the circuit at any time t and (b) its steady-state component.

7.77.   A RL circuit has no applied emf, a resistance of 50 ohms, an inductance of 2 henries, and an initial current of
        10 amperes. Find (a) the current in the circuit at any time t and (b) its transient component.

7.78.   A RL circuit has a resistance of 10 ohms, an inductance of 1.5 henries, an applied emf of 9 volts, and an initial current
        of 6 amperes. Find (a) the current in the circuit at any time t and (b) its transient component.
72                        APPLICATIONS OF FIRST-ORDER DIFFERENTIAL EQUATIONS                                           [CHAR 7



7.79.   An RL circuit has an emf given (in volts) by 4 sin t, a resistance of 100 ohms, an inductance of 4 henries, and no
        initial current. Find the current at any time t.

7.80.   The steady-state current in a circuit is known to be -fysin t - -^cos t. Rewrite this current in the form A sin (t— (f>).

7.81.   Rewrite the steady-state current of Problem 7.21 in the form A cos (2t+ 0). Hint: Use the identity cos (x + y) =
        cos x cos y — sin x sin y.

7.82.   Find the orthogonal trajectories of the family of curves x2 — y1 = <?.

7.83.   Find the orthogonal trajectories of the family of curves y = ce*.

7.84.   Find the orthogonal trajectories of the family of curves x2 - y2 = ex.

7.85.   Find the orthogonal trajectories of the family of curves x2 + y2 = cy.

7.86.   Find the orthogonal trajectories of the family of curves y2 = 4cx.

7.87.   One hundred strands of bacteria are placed in a nutrient solution in which a plentiful supply of food is constantly
        provided but space is limited. The competition for space will force the bacteria population to stabilize at 1000
        strands. Under these conditions, the growth rate of bacteria is proportional to the product of the amount of bacteria
        present in the culture with the difference between the maximum population the solution can sustain and the current
        population. Estimate the amount of bacteria in the solution at any time t if it is known that there were 200 strands
        of bacteria in the solution after seven hours.

7.88.   A new product is to be test marketed by giving it free to 1000 people in a city of one million inhabitants, which is
        assumed to remain constant for the period of the test. It is further assumed that the rate of product adoption will be
        proportional to the number of people who have it with the number who do not. Estimate as a function of time the
        number of people who will adopt the product if it is known that 3000 people have adopted the product after four
        weeks.

7.89.   A body of mass 1 slug is dropped with an initial velocity of 1 ft/sec and encounters a force due to air resistance
        given exactly by -8v2. Find the velocity at any time t.
                                                                    CHAPTER 8



                           Linear Differential
                            Equations: Theory
                                  of Solutions
LINEAR DIFFERENTIAL EQUATIONS
     An nth-order linear differentia! equation has the form



where g(x) and the coefficients />, (.v) ( / = (). i. 2 ..... n) depend solelj on the variable x. In other words. the;
do not depend on y or on any derivative of y,
     If g(x) =0. then hq. (8.1) is homogeneous', if not, (8.1) is nonhomogeneous. A linear differential equation
has constant coefficients if all the coefficients bj(x) in (8.1) are constants: if one or more of these coefficients is
not constant, (8.1) has variable coefficients.

Theorem 8.1.      Consider the initial-; aluc problem given h\ the linear differential equation (8.1) and the n initial
                  conditions


                  If £(A) and ht(x) (j = 0. 1. 2. ... , n) arc continuous in some interval 3 containing A () and if
                  b,,(x)^Q in ,'/. then the initial-value problem given hy (8.1) and (8.2) has a unique (only one)
                  solution defined throughout ,<7.

     When the conditions on /^(.v) in 'I'heorem 8.1 hold, we can divide Hq. <<S'./) by b,,(x) to get



where Oj(x) = bj<x)/b,,(x) ( / = 0. I ..... n - 1 ) and <j>(x) = g(x)/b,,(x).
    Let US define ihe dilTerential operator L(y) by



where a,<jr) (i = 0, I. 2 ..... n— I) is continuous on some interval of interest. Then (8.3) can be rewritten as


and. in particular, a linear homogeneous differential equation can he expressed as



                                                              73
Copyright © 2006, 1994, 1973 by The McGraw-Hill Companies, Inc. Click here for terms of use.
74                        LINEAR DIFFERENTIAL EQUATIONS: THEORY OF SOLUTIONS                                       [CHAR 8



LINEARLY INDEPENDENT SOLUTIONS
     A set of functions {ji(x), y2(x), ..., yn(x)} is linearly dependent on a <x < b if there exist constants c x ,
c2, ... , cn, not all zero, such that




Example 8.1. The set {x, 5x, 1, sin x] is linearly dependent on [-1, 1] since there exist constants cl = -5, c 2 = 1, c3 = 0,
and c4 = 0, not all zero, such that (8.7) is satisfied. In particular,


     Note that c1 = c2 = • • • = cn = 0 is a set of constants that always satisfies (8.7). A set of functions is linearly
dependent if there exists another set of constants, not all zero, that also satisfies (8.7). If the only solution to
(8.7) is c1 = c2 = • • • = cn = 0, then the set of functions {yi(x), y2(x), ..., yn(x)} is linearly independent on
a < x < b.
Theorem 8.2. The wth-order linear homogeneous differential equation L(y) = 0 always has n linearly inde-
             pendent solutions. If Ji(x), y2(x), ..., yn(x) represent these solutions, then the general solution
             of L()0 = 0 is



                  where c1, c2, ... , cn denote arbitrary constants.


THE WRONSKIAN
     The Wronskian of a set of functions {z\(x), Z2(x), ..., Zn(x)} on the interval a<x<b, having the property
that each function possesses n — 1 derivatives on this interval, is the determinant




Theorem 8.3. If the Wronskian of a set of n functions defined on the interval a < x < b is nonzero for at
             least one point in this interval, then the set of functions is linearly independent there. If the
             Wronskian is identically zero on this interval and if each of the functions is a solution to the
             same linear differential equation, then the set of functions is linearly dependent.
     Caution: Theorem 8.3 is silent when the Wronskian is identically zero and the functions are not known to be
solutions of the same linear differential equation. In this case, one must test directiy whether Eq. (8.7) is satisfied.


NONHOMOGENEOUS EQUATIONS
     Let}^ denote any particular solution of Eq. (8.5) (see Chapter 3) and letyh (henceforth called the homogeneous
or complementary solution) represent the general solution of the associated homogeneous equation L(y) = 0.
Theorem 8.4.      The general solution to L(y) = (j)(x) is
CHAP. 8]                 LINEAR DIFFERENTIAL EQUATIONS: THEORY OF SOLUTIONS                                                 75




                                               Solved Problems

8.1.   State the order of each of the following differential equations and determine whether any are linear:

       (a) 2xy" + x2y' - (sin x)y = 2                  (b)   yy'" + xy'+ y = x2
       (c)   y"-y=0                                    (d)   3y'+xy = e~*2


       (e)   2exy'" + exy" = 1

                                                       (h)

       (a)   Second-order. Here b2(x) = 2x, b^x) = x2, bQ(x) = -sin x, and g(x) = 2. Since none of these terms depends on
             y or any derivative of y, the differential equation is linear.
       (b)   Third-order. Since b3 = y, which does depend on y, the differential equation is nonlinear.
       (c)   Second-order. Here b2(x) = 1, bi(x) = 0, b0(x) = 1, and g(x) = 0. None of these terms depends on y or any
             derivative of y; hence the differential equation is linear.
       (d)   First-order. Here b1(x) = 3, bQ(x)=x, and g(x) = e~x; hence the differential equation is linear. (See also
             Chapter 5.)
       (e)   Third-order. Here b3(x) = 2ex, b2(x) = ex, bi(x) = bQ(x) = 0, and g(x) = 1. None of these terms depends on y or
             any of its derivatives, so the equation is linear.
       (/)   Fourth-order. The equation is nonlinear because y is raised to a power higher than unity.
       (g)   Second-order. The equation is nonlinear because the first derivative of y is raised to a power other than unity,
             here the one-half power.
       (h)   First-order. Here bi(x) = 1, b0(x) = 2, and g(x) = -3. None of these terms depends on y or any of its derivatives,
             so the equation is linear.


8.2.   Which of the linear differential equations given in Problem 8.1 are homogeneous?
             Using the results of Problem 8.1, we see that the only linear differential equation having g(x) = 0 is (c), so
       this is the only one that is homogeneous. Equations (a), (d), (e), and (h) are nonhomogeneous linear differential
       equations.


8.3.   Which of the linear differential equations given in Problem 8.1 have constant coefficients?
             In their present forms, only (c) and (h) have constant coefficients, for only in these equations are all the
       coefficients constants. Equation (e) can be transformed into one having constant coefficients by multiplying it by
       e~x. The equation then becomes




8.4.   Find the general form of a linear differential equation of (a) order two and (b) order one.
       (a)   For a second-order differential equation, (8.1) becomes




             If b2(x) 2 0, we can divide through by it, in which case (8.3) takes the form
76                       LINEAR DIFFERENTIAL EQUATIONS: THEORY OF SOLUTIONS                                          [CHAR 8



       (b)   For a first-order differential equation, (8.1) becomes
             If b^x) ^ 0, we can divide through by it, in which case (8.3) takes the form


             This last equation is identical to (6.1) withp(x) = a0(x) and q(x) = 0 (x).

8.5.   Find the Wronskian of the set




8.6.   Find the Wronskian of the set (sin 3x, cos 3.x}.




8.7.   Find the Wronskian of the set {x, x2, x3}.




       This example shows that the Wronskian is in general a nonconstant function.

8.8.   Find the Wronskian of the set {1 - x, 1 + x, 1 - 3.x}.




8.9.   Determine whether the set {e*, e x} is linearly dependent on (—00, °°).
            The Wronskian of this set was found in Problem 8.5 to be -2. Since it is nonzero for at least one point in the
       interval of interest (in fact, it is nonzero at every point in the interval), it follows from Theorem 8.3 that the set is
       linearly independent.
CHAP. 8]                  LINEAR DIFFERENTIAL EQUATIONS: THEORY OF SOLUTIONS                                                     77



8.10.   Redo Problem 8.9 by testing directly how Eq. (8.7) is satisfied.
             Consider the equation


        We must determine whether there exist values of c1 and c2, not both zero, that will satisfy (_/). Rewriting (_/), we
        have c2e~x = —c\& or



        For any nonzero value of c1; the left side of (2) is a constant whereas the right side is not; hence the equality in (2)
        is not valid. It follows that the only solution to (2), and therefore to (_/), is Cj = c2 = 0. Thus, the set is not linearly
        dependent; rather it is linearly independent.


8.11.   Is the set {x2, x, 1} linearly dependent on (-co, co)?
             The Wronskian of this set was found in Problem 8.7 to be 2.x3. Since it is nonzero for at least one point in
        the interval of interest (in particular, at x = 3, W =54 ^ 0), it follows from Theorem 8.3 that the set is linearly
        independent.


8.12.   Redo Problem 8.11 by testing directly how Eq. (8.7) is satisfied.
             Consider the equation



        Since this equation is valid for all x only if c1 = c2 = c3 = 0, the given set is linearly independent. Note that if any of
        the c's were not zero, then the quadratic equation (_/) could hold for at most two values of x, the roots of the equation,
        and not for all x.


8.13.   Determine whether the set (1 - x, 1 + x, 1 - 3x} is linearly dependent on (—00, °°).
             The Wronskian of this set was found in Problem 8.8 to be identically zero. In this case, Theorem 8.3 provides
        no information, and we must test directly how Eq. (8.7) is satisfied.
             Consider the equation


        which can be rewritten as



        This linear equation can be satisfied for all x only if both coefficients are zero. Thus,
                                                                and

        Solving these equations simultaneously, we find that Cj = -2c3, c2 = c3, with c3 arbitrary. Choosing c3 = 1 (any other
        nonzero number would do), we obtain c1 = -2, c2 = 1, and c3 = 1 as a set of constants, not all zero, that satisfy (_/).
        Thus, the given set of functions is linearly dependent.


8.14.   Redo Problem 8.13 knowing that all three functions of the given set are solutions to the differential
        equation y" = 0.
              The Wronskian is identically zero and all functions in the set are solutions to the same linear differential equation,
        so it now follows from Theorem 8.3 that the set is linearly dependent.


8.15.   Find the general solution of y" + 9y = 0 if it is known that two solutions are

                                                               and
78                        LINEAR DIFFERENTIAL EQUATIONS: THEORY OF SOLUTIONS                                          [CHAR 8



             The Wronskian of the two solutions was found in Problem 8.6 to be -3, which is nonzero everywhere. It
        follows, first from Theorem 8.3, that the two solutions are linearly independent and, then from Theorem 8.2 that the
        general solution is




8.16.   Find the general solution of y" - y = 0 if it is known that two solutions are

                                                             and

            It was shown in both Problems 8.9 and 8.10 that these two functions are linearly independent. It follows from
        Theorem 8.2 that the general solution is




8.17.   Two solutions of y" - 2y' + y = 0 are e x and 5e x. Is the general solution y = c^e x + c25e xl
             We calculate




        Therefore the functions e x and 5e x are linearly dependent (see Theorem 8.3), and we conclude from Theorem 8.2
        that y = C]e~x + c25e~x is not the general solution.


8.18.   Two solutions of                       are e1 and       Is the general solution
             We have




        It follows, first from Theorem 8.3, that the two particular solutions are linearly independent and then from Theorem 8.2,
        that the general solution is




8.19.   Three solutions of /" = 0 are x1, x, and 1. Is the general solution y = c^x2 + c2x + c3?
           Yes. It was shown in Problems 8.11 and 8.12 that three solutions are linearly independent, so the result is
        immediate from Theorem 8.3.


8.20.   Two solutions of y"' — 6y" + 1 ly' - 6y = 0 are e1 and e^. Is the general solution y = c^e* + c2elxc!
            No. Theorem 8.2 states that the general solution of a third-order linear homogeneous differential equation is a
        combination of three linearly independent solutions, not two.


8.21.   Use the results of Problem 8.16 to find the general solution of



        if it is known that -sin x is a particular solution.
             We are given that ;yp = -sin x, and we know from Problem 8.16 that the general solution to the associated
        homogeneous differential equation is yh = c^ + c2e~x. It follows from Theorem 8.4 that the general solution to the
        given nonhomogeneous differential equation is
CHAP. 8]                   LINEAR DIFFERENTIAL EQUATIONS: THEORY OF SOLUTIONS                                                    79



8.22.   Use the results of Problem 8.18 to find the general solution of


        if it is known that x + 4x + 6 is a particular solution.
               We have from Problem 8.18 that the general solution to the associated homogeneous differential equation is


        Since we are given that yp = x2 + 4x + 6, it follows from Theorem 8.4 that




8.23.   Use the results of Problem 8.18 to find the general solution of


        if it is known that ±e3x is a particular solution.
               We have from Problem 8.18 that the general solution to the associated homogeneous differential equation is


        In addition, we are given that yp = -^e3*. It follows directly from Theorem 8.4 that




$.24.   Determine whether the set {.x3, be3!} is linearly dependent on [—1, 1].
               Consider the equation

        Recall that U3! = x3 if x > 0 and bt3! = -x3 if x < 0. Thus, when x>0,(l) becomes


        whereas when x < 0, (1) becomes

        Solving (2) and (3) simultaneously for cl and c2, we find that the only solution is cl = c2 = 0. The given set is, therefore,
        linearly independent.


8.25.   Find
               We have




        Then, for x> 0,



        For x < 0,



        For x = 0,



        Thus,
80                           LINEAR DIFFERENTIAL EQUATIONS: THEORY OF SOLUTIONS                                        [CHAR 8



8.26.   Do the results of Problems 8.24 and 8.25 contradict Theorem 8.3?
              No. Since the Wronskian of two linearly independent functions is identically zero, it follows from Theorem 8.3
        that these two functions, x3 and U3!, are not both solutions of the same linear homogeneous differential equation of
        the form L(y) = 0.


8.27.   Two solutions of /' - (2lx)yr = 0 on [-1, 1 ] are y = x3 and y=\}?\. Does this result contradict the solution
        to Problem 8.26?
             No. Although W(x3, U3!) = 0 and both y = x3 and y = I.*3! are linearly independent solutions of the same linear
        homogeneous differential equation y"—(2lx)y' = 0, this differential equation is not of the form \-(y) = 0. The
        coefficient —2lx is discontinuous at x = 0.


8.28.   The initial-value problem y' = 2^\y\; y(0) = 0 has the two solutions y = x\x\ and y = 0. Does this result
        violate Theorem 8.1?

             No. Here 0 = 2^/1 y I , which depends on y; therefore, the differential equation is not linear and Theorem 8.1 does
        not apply.


8.29.   Determine all solutions of the initial-value problem /' + exy> + (x+ l)y = 0;y (1) = 0, /(I) = 0.
              Here, b2(x) = 1, b^x) = ex, b0(x) = x+ 1, andg(x) = 0 satisfy the hypotheses of Theorems. 1; thus, the solution to
        the initial-value problem is unique. By inspection, y = 0 is a solution. It follows that y = 0 is the only solution.


8.30.   Show that the second-order operator L(y) is linear; that is



        where c1 and c2 are arbitrary constants and y1 and y2 are arbitrary «-times differentiable functions.
               In general,



        Thus




8.31.   Prove the principle of superposition for homogeneous linear differential equations; that is, if yl and
        y2 are two solutions of \-(y) = 0, then C1y1 + C2y2 is also a solution of \-(y) = 0 for any two constants c1
        and c2.
              Let y1 and y2 be two solutions of \-(y) = 0; that is, L(y 1 ) = 0 and \-(y2) = 0. Using the results of Problem 8.30,
        it follows that


        Thus, clyl + C2y2 is also a solution of \-(y) = 0.


8.32.   Prove Theorem 8.4.
               Since \-(yh) = 0 and \-(yp) = (f> (x), it follows from the linearity of L that


        Thus, y is a solution.
CHAP. 8]                  LINEAR DIFFERENTIAL EQUATIONS: THEORY OF SOLUTIONS                                                81



             To prove that it is the general solution, we must show that every solution of \-(y) = 0 (x) is of the form (8.9).
        Let y be any solution of \-(y) = 0 (x) and set z = y — yp. Then


        so that z is a solution to the homogeneous equation \-(y) = 0. Since i = y — yp, it follows that y = i + yp, where z is
        a solution of \-(y) = 0.




                                        Supplementary Problems

8.33.   Determine which of the following differential equations are linear:

        (a) /' + xy' + 2y = 0                  (b)     y'" -y = x

        (c) / + 5y = 0                         (d)     y(4) + x2y'" + xy" - exy' + 2y = x2 + x+l

        (e) /' + 2xy' + y = 4xy2               (/)     y'-2y = xy

        (g)   y" + yy' = x2                    (K)     y'" + (x2-l)y"-2y' + y = 5smx

        (i)   y' + y(sin x)=x                  (j)     y' + x(sin y)=x

        (k)   y"+ey = 0                        (I)     y" + ex = 0

8.34.   Determine which of the linear differential equations in Problem 8.33 are homogeneous.

8.35.   Determine which of the linear differential equations in Problem 8.33 have constant coefficients.

In Problems 8.36 through 8.49, find the Wronskians of the given sets of functions and, where appropriate, use that information
to determine whether the given sets are linearly independent.

8.36.   {3x, 4x}                               8.37.      [x2, x}

8.38.   {x3, x2}                               8.39.      {x3, x}

8.40.    [x2,5}                                8.41.      {x2, -x2}

8.42.   {e2x, e-2*}                            8.43.      {e2x, e3*}

8.44.   {Se2*, Se2*}                           8.45.      {jc, 1, 2x-7}

8.46.   {x+l,x2 + x,2x2-x-3}                   8.47.      {je2, x3, x4}

8.48.   {e-\ <•?, e2*}                         8.49.      {sin jc, 2 cos jc, 3 sin x + cos jc}

8.50.   Prove directly that the set given in Problem 8.36 is linearly dependent.

8.51.   Prove directly that the set given in Problem 8.41 is linearly dependent.

8.52.   Prove directly that the set given in Problem 8.44 is linearly dependent.

8.53.   Prove directly that the set given in Problem 8.45 is linearly dependent.

8.54.   Prove directly that the set given in Problem 8.46 is linearly dependent.
82                        LINEAR DIFFERENTIAL EQUATIONS: THEORY OF SOLUTIONS                                          [CHAR 8



8.55.   Prove directly that the set given in Problem 8.49 is linearly dependent.

8.56.   Using the results of Problem 8.42, construct the general solution of y" -4y = 0.

8.57.   Using the results of Problem 8.43, construct the general solution of y" - 5y' + 6y = 0.

8.58.   What can one say about the general solution of y" + 16y = 0 if two particular solutions are known to be y1 = sin 4x
        and y2 = cos 4x1

8.59.   What can one say about the general solution of y" — Sy' = 0 if two particular solutions are known to be y^ = e8* and
        3-2=1?

8.60.   What can one say about the general solution of y" + y' = 0 if two particular solutions are known to be y1 = 8 and
        y2= 1?

8.61.   What can one say about the general solution of y'" - y" = 0 if two particular solutions are known to be y± = x and
        y2 = ex?

8.62.   What can one say about the general solution of y"' + y" + y' + y = 0 if three particular solutions are known to be the
        functions given in Problem 8.49?

8.63.   What can one say about the general solution of y'" — 2y" — y' + 2y = 0if three particular solutions are known to be
        the functions given in Problem 8.48?

8.64.   What can one say about the general solution of cfy/dx5 = 0 if three particular solutions are known to be the functions
        given in Problem 8.47?

8.65.   Find the general solution of y" + y = x2, if one solution is y = x2 - 2, and if two solutions of y" + y = 0 are sin x and
        cos x.

8.66.   Find the general solution of y" — y = x2, if one solution is y = —x2 — 2, and if two solutions of y" — y = 0 are e*
        and 3e".

8.67.   Find the general solution of y'" — y" — y' + y = 5, if one solution is y = 5, and if three solutions of y'" — y"
        — y' + y = 0 are e", e~x, and xe".

8.68.   The initial-value problem y' - (2lx)y = 0; y(0) = 0 has two solutions y = 0 and y = x2. Why doesn' t this result violate
        Theorem 8.1?

8.69.   Does Theorem 8.1 apply to the initial-value problem y' - (2/x)y = 0; y(i) = 3?

8.70.   The initial-value problem xy' — 2y = 0; y(0) = 0 has two solutions y = 0 and y = x2. Why doesn't this result violate
        Theorem 8.1?
                                                                   CHAPTER 9



                 Second-Order
          Linear Homogeneous
                   Differential
                Equations with
          Constant Coefficients

JOTROftUCTORY REMARK
 ..• .,*flwsjfatj»*e have concentrated on first-order differential equations. We will now turn our attention to the
§ee(Jjfd:~Gidet .case. After investigating solution techniques, we will discuss applications of these differential
aeq«atiQa$"(se? Chapter 14).


;THl/GSARACTERISTIC EQUATION
-. • ", CSrrespottSng to the differential equation



jji'whieli'tfj. afld a0 are constants, is the algebraic equation



'tt'Meli is obiajjifefl, from Eq. (9.1) by replacing y", y' and y by A2, A,1, and A° = 1, respectively. Equation (9.2) is
 •ealle4 ^ft 'chofdtteristic equation of (9.1).

Example 9-1'' * The characteristic equation of y" + 3y' — 4y = 0 is X2 + 3X - 4 = 0; the characteristic equation of


                                                           83
Copyright © 2006, 1994, 1973 by The McGraw-Hill Companies, Inc. Click here for terms of use.
84                  SECOND-ORDER LINEAR HOMOGENEOUS DIFFERENTIAL EQUATIONS                                         [CHAR 9



    Characteristic equations for differential equations having dependent variables other than y are obtained
analogously, by replacing thej'th derivative of the dependent variable by A/ (j = 0, 1, 2).
    The characteristic equation can be factored into




THE GENERAL SOLUTION
     The general solution of (9.1) is obtained directly from the roots of (9.3). There are three cases to consider.
        Case 1. AI and A^ both real and distinct. Two linearly independent solutions are e~l* and e^, and
        the general solution is (Theorem 8.2)



        In the special case A2 = -Ax, the solution (9.4) can be rewritten as y = k^ cosh A,^ + k2 sinh A,^.
        Case 2. A^ = a + ib, a complex number. Since a^ and a0 in (9.1) and (9.2) are assumed real, the roots
        of (9.2) must appear in conjugate pairs; thus, the other root is A2 = a — ib. Two linearly independent
        solutions are e^a + lb)x and e(a ~lb)x, and the general complex solution is



        which is algebraically equivalent to (see Problem 9.16)



        Case 3.    A^ = A^. Two linearly independent solutions are e^x and xe '*, and the general solution is



     Warning: The above solutions are not valid if the differential equation is not linear or does not have constant
coefficients. Consider, for example, the equation y" — x2y = 0. The roots of the characteristic equation are 'kl=x
and A^ = -x, but the solution is not



Linear equations with variable coefficients are considered in Chapters 27, 28 and 29.



                                               Solved Problems

9.1. Solve
              The characteristic equation is X2 - X- 2 = 0, which can be factored into (A,+ 1)(A, — 2) = 0. Since the roots
        A,j = -1 and X 2 = 2 are real and distinct, the solution is given by (9.4) as




9.2. Solve
            The characteristic equation is X2 - 7k = 0, which can be factored into (k - 0)(X - 7) = 0. Since the roots A,j = 0
        and X2 = 7 are real and distinct, the solution is given by (9.4) as
CHAP. 9]            SECOND-ORDER LINEAR HOMOGENEOUS DIFFERENTIAL EQUATIONS                                              85



9.3.   Solve /' -5y = 0.
            The characteristic equation is             , which can be factored into                        Since the root!
                and            are real and distinct, the solution is given by (9.4) as




9.4.   Rewrite the solution of Problem 9.3 in terms of hyperbolic functions.
            Using the results of Problem 9.3 with the identities
                                                          and
       we obtain,




       where


9.5.   Solve y + 10y + 21y = 0.
            Here the independent variable is t. The characteristic equation is


       which can be factored into


       The roots A,j = -3 and X2 = -7 are real and distinct, so the general solution is




9.6.   Solve x - O.Olx = 0.
            The characteristic equation is


       which can be factored into


       The roots A,j = 0.1 and X2 = -0.1 are real and distinct, so the general solution is


       or, equivalently,



9.7.   Solve /' + 4/ + 5y = 0.
            The characteristic equation is


       Using the quadratic formula, we find its roots to be




       These roots are a complex conjugate pair, so the general solution is given by (9.6) (with a = -2 and b = 1) as
86                  SECOND-ORDER LINEAR HOMOGENEOUS DIFFERENTIAL EQUATIONS                                        [CHAR 9




9.8.    Solve /' + 4y = 0.
             The characteristic equation is


        which can be factored into


        These roots are a complex conjugate pair, so the general solution is given by (9.6) (with a = 0 and b = 2) as



9.9.    Solve /' - 3/ + 4y = 0.
             The characteristic equation is


        Using the quadratic formula, we find its roots to be




        These roots are a complex conjugate pair, so the general solution is given by (9.6) as




9.10. Solve y-6y + 25y = 0.
             The characteristic equation is


        Using the quadratic formula, we find its roots to be




        These roots are a complex conjugate pair, so the general solution is




9.11.   Solve

             The characteristic equation is


        Using the quadratic formula, we find its roots to be




        These roots are a complex conjugate pair, so the general solution is



9.12.   Solve /'- 8/ + I6y = 0.
             The characteristic equation is


        which can be factored into
CHAP. 9]             SECOND-ORDER LINEAR HOMOGENEOUS DIFFERENTIAL EQUATIONS                                                87



        The roots              are real and equal, so the general solution is given by (9.7) as




9.13.   Solve y" = 0.
             The characteristic equation is A2 = 0, which has roots A: = A2 = 0. The solution is given by (9.7) as



9.14.   Solve x + 4x + 4x = 0.
             The characteristic equation is


        which can be factored into


        The roots A: = A^ = -2 are real and equal, so the general solution is




9.15.   Solve

             Dividing both sides of the differential equation by 100, to force the coefficient of the highest derivative to be
        unity, we obtain




        Its characteristic equation is


        which can be factored into



        The roots A: = A^ = 0.1 are real and equal, so the general solution is




9.16.   Prove that (9.6) is algebraically equivalent to (9.5).
             Using Euler's relations



        we can rewrite (9.5) as




        where c1 = d1 + d2 and c2 = i^ - d2).
             Equation (_/) is real if and only if Cj and c2 are both real, which occurs, if and only if di and d2 are com-
        plex conjugates. Since we are interested in the general real solution to (9.1), we restrict di and d2 to be a
        conjugate pair.
88                    SECOND-ORDER LINEAR HOMOGENEOUS DIFFERENTIAL EQUATIONS      [CHAR 9




                                        Supplementary Problems

Solve the following differential equations.

9.17.   y"-y = 0                                     9.18.   y"-y'-30y = 0

9.19.   y"-2y' + y = 0                               9.20.   y" + y = Q

9.21.   y"+2y' + 2y = 0                              9.22.   y"-ly = Q

9.23.   y"+6y' + 9y = 0                              9.24.   y"+2y' + 3y = 0

9.25.   y"-3y'-5y = 0

9.27.   x-20x + 64x = 0                              9.28.   x + 60x + 500x = 0

9.29.   x-3x + x = 0                                 9.30.   x - lOi + 25x = 0

9.31.   x + 25x = 0                                  9.32.   x + 25x = 0

9.33.   x + x + 2x = 0                               9.34.   u - 2ii + 4u = 0

9.35.   u - 4u + 2u = 0                              9.36.   ii-36ii = 0
                                                                  CHAPTER 10



                                   nth-Order Linear
               Homogeneous
       Differential Equations
               with Constant
                 Coefficients
THE CHARACTERISTIC EQUATION
     The characteristic equation of the differential equation



with constant coefficients «; (/ = 0. I , .... n - 11 is



The characteristic equation (102) is obtained from (JOJ) h> replacing y'" h\ A/ (./ = 0. I, ... , n— l i .
Characteristic equations for differential equations1 h a v i n g dependent variables other than rare obtained analo-
gously, by replacing inejin deri\alive of the dependent variable b\ A.' (j = 0. I          n - I).

Example 10.1.      The characteristic equation of y(4' - 3y'" + 2y" - v = 0 it, A.4 - 3A,3 + 2X3 - I = 0. The tharaL-terislii;
i."i| nation of




is

    Caution: Characteristic equations are onf\ defined for linear homogeneous differential equations with
constant coefficients.

                                                             89
Copyright © 2006, 1994, 1973 by The McGraw-Hill Companies, Inc. Click here for terms of use.
90                      wth-ORDER LINEAR HOMOGENEOUS DIFFERENTIAL EQUATIONS                                   [CHAP. 10



THE GENERAL SOLUTION
     The roots of the characteristic equation determine the solution of (10.1). If the roots A                    are all
real and distinct, the solution is




If the roots are distinct, but some are complex, then the solution is again given by (10.3). As in Chapter 9, those
terms involving complex exponentials can be combined to yield terms involving sines and cosines. If A^ is a root
of multiplicity p [that is, if (A - 'kk)p is a factor of the characteristic equation, but (A - 'kk)p +1 is not] then there
will be p linearly independent solutions associated with A^ given by e h" ,xe h",x e k*,...,xp~ e k". These
solutions are combined in the usual way with the solutions associated with the other roots to obtain the complete
solution.
     In theory it is always possible to factor the characteristic equation, but in practice this can be extremely
difficult, especially for differential equations of high order. In such cases, one must often use numerical techniques
to approximate the solutions. See Chapters 18, 19 and 20.




                                                Solved Problems

10.1.   Solve /" - 6y" + Uy'-6y = 0.
             The characteristic equation is X3 - 6A2 + 11A - 6 = 0, which can be factored into


        The roots are A: = 1, A2 = 2, and ^3 = 3; hence the solution is




10.2.   Solve /4) - 9y" + 20y = 0.
             The characteristic equation is A4 - 9A2 + 20 = 0, which can be factored into




        The roots are                                            hence the solution is




10.3.   Solve y' -5y = 0.
            The characteristic equation is A, — 5 = 0, which has the single root Aj = 5. The solution is then y = cle5x.
        (Compare this result with Problem 6.9.)


10.4.   Solve /" - 6y" + 2y' + 36y = 0.
            The characteristic equation, A3 - 6A2 +2A + 36 = 0, has roots                              and
        The solution is
CHAP. 10]               wth-ORDER LINEAR HOMOGENEOUS DIFFERENTIAL EQUATIONS                                                    91



        which can be rewritten, using Euler's relations (see Problem 9.16) as




10.5.   Solve


             The characteristic equation,                                   has roots                                         and
                . The solution is



            If, using Euler's relations, we combine the first two terms and then similarly combine the last two terms,
        we can rewrite the solution as




10.6.   Solve /4) + 8/" + 24y" + 32/ + I6y = 0.
             The characteristic equation, X4 + 8X3 + 24X2 + 32X +16 = 0, can be factored into (k + 2)4 = 0. Here Xj = -2 is
        a root of multiplicity four; hence the solution is




10.7.   Solve

            The characteristic equation can be factored into (X - 1)3(X + I) 2 = 0; hence, A,j = 1 is a root of multiplicity three
        and X2 = -1 is a root of multiplicity two. The solution is




10.8.   Solve

             The characteristic equation has roots 2 + z'2 and 2 + z'2; hence A,j = 2 + z'2 and X2 = 2 - z'2 are both roots of
        multiplicity two. The solution is




10.9.   Find the general solution to a fourth-order linear homogeneous differential equation for y(x) with real
        numbers as coefficients if one solution is known to be J?e4x.
             If x3e4x is a solution, then so too are X2e4x, xe4x, and e4x. We now have four linearly independent solutions to a
        fourth-order linear, homogeneous differential equation, so we can write the general solution as




10.10. Determine the differential equation described in Problem 10.9.
             The characteristic equation of a fourth-order differential equation is a fourth-degree polynomial having
        exactly four roots. Because X3e4x is a solution, we know that X = 4 is a root of multiplicity four of the corresponding
92                     wth-ORDER LINEAR HOMOGENEOUS DIFFERENTIAL EQUATIONS                                        [CHAP. 10



       characteristic equation, so the characteristic equation must be (X - 4)4 = 0, or



       The associated differential equation is




10.11. Find the general solution to a third-order linear homogeneous differential equation for y(x) with real
       numbers as coefficients if two solutions are known to be e'2* and sin 3x.
             If sin 3x is a solution, then so too is cos 3x. Together with e~2x, we have three linearly independent solutions
       to a third-order linear, homogeneous differential equation, and we can write the general solution as




10.12. Determine the differential equation described in Problem 10.11.
            The characteristic equation of a third-order differential equation must have three roots. Because e^x and sin 3x
       are solutions, we know that X = -2 and X = + 3 are roots of the corresponding characteristic equation, so this equation
       must be


       or

       The associated differential equation is




10.13. Find the general solution to a sixth-order linear homogeneous differential equation for y(x) with real
       numbers as coefficients if one solution is known to be X2e7x cos 5.x.
            If x2elx cos 5x is a solution, then so too are xelx cos 5x and elx cos 5x. Furthermore, because complex roots of
       a characteristic equation come in conjugate pairs, every solution containing a cosine term is matched with another
       solution containing a sine term. Consequently, x2elx sin 5x, xelx sin 5x, and elx sin 5x are also solutions. We now
       have six linearly independent solutions to a sixth-order linear, homogeneous differential equation, so we can write
       the general solution as




10.14. Redo Problem 10.13 if the differential equation has order 8.
            An eighth-order linear differential equation possesses eight linearly independent solutions, and since we can
       only identify six of them, as we did in Problem 10.13, we do not have enough information to solve the problem. We
       can say that the solution to Problem 10.13 will be part of the solution to this problem.


10.15. Solve                                                if one solution is xe2*.

            If xe2x is a solution, then so too is e2x which implies that (X- 2)2 is a factor of the characteristic equation
                                       . Now,




       so two other roots of the characteristic equation are X = +3, with corresponding solutions e^x and e~3x. Having
       identified four linearly independent solutions to the given fourth-order linear differential equation, we can write the
       general solution as
CHAP. 10]                wth-ORDER LINEAR HOMOGENEOUS DIFFERENTIAL EQUATIONS                                                    93




                                          Supplementary Problems
In Problems 10.16 through 10.34, solve the given differential equations.

10.16. /" - 2y" -y' + 2y = 0                                10. 17.   y'" -/'- y' + y = 0
10.18. y'" - 3y" + 3y'-y = 0                                10. 19.   y'" ~ /' + / ~ y = 0
10.20. -y(4)+ 2y" + y = Q                                   10. 21. /4>~y = 0

10.22.   -y(4) + 2y'» -2y'-y = Q                            10.,23.   -y(4)
                                                                         -4y" + 16/ + 32y = 0

10.24.   yW + 5y'" = 0                                      10.,25.   /4> + 2y"' + 3y" + 2y' + y = 0
10.26. ;y(6) - 5/4) + 16/" + 36/' - 16/ - 32;y = 0




                                                            10.31. q(4) + q"-2q = 0

10.32. qw - 3q" + 2q = 0                                    10.33. N"'- 12N"- 28N + 480N= 0




In Problems 10.35 through 10.41, a complete set of roots is given for the characteristic equation of an wth-order near homoge-
neous differential equation in y(x) with real numbers as coefficients. Determine the general solution of the differential equation.

10.35. 2, 8,-14



10.39. 5, 5, 5,-5,-5



10.42. Determine the differential equation associated with the roots given in Problem 10.35.

10.43. Determine the differential equation associated with the roots given in Problem 10.36.

10.44. Determine the differential equation associated with the roots given in Problem 10.37.

10.45. Determine the differential equation associated with the roots given in Problem 10.38.

10.46. Determine the differential equation associated with the roots given in Problem 10.39.

10.47. Find the general solution to a fourth-order linear homogeneous differential equation for y(x) with real numbers as
       coefficients if one solution is known to be x3e~x.

10.48. Find the general solution to a fourth-order linear homogeneous differential equation for y(x) with real numbers as
       coefficients if two solutions are cos 4x and sin 3x.

10.49. Find the general solution to a fourth-order linear homogeneous differential equation for y(x) with real numbers as
       coefficients if one solution is x cos 4x.

10.50. Find the general solution to a fourth-order linear homogeneous differential equation for y(x) with real numbers as
       coefficients if two solutions are xe2x and xe5x.
                                                                 CHAPTER 11



                                                The Method of
                                                Undetermined
                                                  Coefficients
     The general solution to the linear differential equation L(y) = 0(.v) is given b> Theorem 8.4-as y = y/, + yp
wherey,,denotes one solution to the differential equation and y/, is Ihe general solution to the assoeialed homo-
geneous equation. L(y) = 0. Methods for obtaining y/, when the differential equation has constant coefficients
are given in Chapters 9 and 10. In this chapter and the next, we give methods for obtaining a particular solution
yp once y/, is known.


SIMPLE FORM OF THE METHOD
     The method of undetermined coefficients is applicable onh if <j)(x) and all of its deriuitives can he written
in terms of the same finite set of linearK independent functions. w h i c h we denote by {VI(A-), y2(.v), ... , .V,,(A-)}.
The method is initiated h\ assuming a particular solution of the form



where A]. A2 ..... A,, denote arhilrar; imiltiplicathe constants. These arhilrar; constants are then evaluated b\
substituting the proposed solution into the given differential equation and equaling the coefficients of like terms.

        Case 1. $(x) = p,,(x), an nth-degree polynomial in x. Assume a solution of the form



        where Aj-(./ = 0, 1. 2, .... H) is a constant to he determined.

        Case 2.    $(*! = keas where k and aare known con.slants. Assume a solution of the form



        where A is a constant to be determined.

        Case 3.    $(x) = kl sin flx + A; cos fix where fcj, ft;, and ^are known constants. Assume a solution

                                                           94-
Copyright © 2006, 1994, 1973 by The McGraw-Hill Companies, Inc. Click here for terms of use.
CHAP. 11]                        THE METHOD OF UNDETERMINED COEFFICIENTS                                                  95



        of the form


        where A and B are constants to be determined.

            Note: (11.3) in its entirety is assumed even when k^ or k2 is zero, because the derivatives of sines or
                  cosines involve both sines and cosines.


GENERALIZATIONS
     If (f)(x) is the product of terms considered in Cases 1 through 3, take yp to be the product of the corresponding
assumed solutions and algebraically combine arbitrary constants where possible. In particular, if (f)(x) = e^p^x)
is the product of a polynomial with an exponential, assume



where A,- is as in Case 1. If, instead, (f)(x) = e^p^x) sin fix is the product of a polynomial, exponential,
and sine term, or if (f)(x) = e^p^x) cos fix is the product of a polynomial, exponential, and cosine term, then
assume



where A;- and Bj (j = 0, 1, ..., n) are constants which still must be determined.
     If (f)(x) is the sum (or difference) of terms already considered, then we take yp to be the sum (or difference)
of the corresponding assumed solutions and algebraically combine arbitrary constants where possible.


MODIFICATIONS
     If any term of the assumed solution, disregarding multiplicative constants, is also a term of yh (the homoge-
neous solution), then the assumed solution must be modified by multiplying it by xm, where m is the smallest
positive integer such that the product of xm with the assumed solution has no terms in common with yh.


LIMITATIONS OF THE METHOD
    In general, if (f)(x) is not one of the types of functions considered above, or if the differential equation does
not have constant coefficients, then the method given in Chapter 12 applies.




                                                Solved Problems


11.1.   Solve /' -y'-2y = 4x2.
              From Problem 9.1, yh = c^x + c2e2*. Here <j>(x) = 4X2, a second-degree polynomial. Using (11.1), we assume that



        Thus,                  and         2. Substituting these results into the differential   equation, we have
96                              THE METHOD OF UNDETERMINED COEFFICIENTS                                          [CHAP. 11



        or, equivalently,



        Equating the coefficients of like powers of x, we obtain



        Solving this system, we find that A2 = -2, A1 = 2, and A0 = -3. Hence (_/) becomes



        and the general solution is




11.2.   Solve/'-/ -2y = e3x.
            From Problem 9.1, yh = c^x + C2e2x. Here <j>(x) has the form displayed in Case 2 with k = 1 and a = 3. Using
        (112), we assume that



        Thus, y'p = 3A63* and y"p = 9A^X. Substituting these results into the differential equation, we have



        It follows that 4A = 1, or A = ^, so that (_/) becomes yp =±e>x. The general solution then is




11.3.   Solve /' -y' -2y = sin 2x.
             Again by Problem 9.1, yh = c-\e~x + C2e2x. Here <j>(x) has the form displayed in Case 3 with k1 = 1, k2 = 0, and
        /?= 2. Using (11.3), we assume that



        Thus, y'p = 2A cos 2x — 2B sin 2x and y'p = —4A sin 2x — 4B cos 2x. Substituting these results into the differential
        equation, we have



        or, equivalently,
                              (-6A + 2B) sin2^ + (-6B - 2A) cos2x = (l) sin 2x + (0) cos 2x

        Equating coefficients of like terms, we obtain



        Solving this system, we find that A = -3/20 and B = 1/20. Then from (_/),




        and the general solution is
CHAP. 11]                         THE METHOD OF UNDETERMINED COEFFICIENTS                                                  97




11.4.   Solve
              From Problem 9.10,



        Here <j>(f) has the form displayed in Case 3 with the independent variable t replacing x, ki = 2, k2 = —1, and /? = j.
        Using (11.3), with t replacing x, we assume that



        Consequently,




        and

        Substituting these results into the differential equation, we obtain




        or, equivalently




        Equating coefficients of like terms, we have




        It follows that A = 56/663 and B = -20/663, so that (1) becomes




        The general solution is




11.5.   Solve y - 6y + 25y = 64e~'.
            From Problem 9.10,


        Here <j>(t) has the form displayed in Case 2 with the independent variable t replacing x, k= 64 and a = —1. Using
        (11.2), with t replacing x, we assume that



        Consequently, yp = —Ae~' and yp = Ae~'. Substituting these results into the differential equation, we obtain



        or, equivalently, 32Ae~' = 64e~'. It follows that 32A = 64 or A = 2, so that (_/) becomes yp = 2e~'. The general
        solution is
98                                THE METHOD OF UNDETERMINED COEFFICIENTS                                      [CHAP. 11




11.6.   Solve y - 6y + 25y = 50t3 -36t2 - 63t + 18.
              Again by Problem 9.10,


        Here <j>(t) is a third-degree polynomial in t. Using (11.1) with t replacing x, we assume that


        Consequently,



        and

        Substituting these results into the differential equation, we obtain



        or, equivalently,



        Equating coefficients of like powers of t, we have



        Solving these four algebraic equations simultaneously, we obtain A3 = 2, A2 = 0, A1 = —3, and AQ = 0, so that (_/)
        becomes


        The general solution is




11.7. Solve /" - 6y" + 11/ - 6y = 2xe~x.
             From Problem 10.1, yh = c^ + c^e1* + c3e3*. Here $(x) = e^p^x), where a = —1 and pn(x) = 2x, a first-degree
        polynomial. Using Eq. (11.4), we assume that yp = e^(Alx + A0), or



        Thus,




        Substituting these results into the differential equation and simplifying, we obtain



        Equating coefficients of like terms, we have



        from which Aj = -1/12 and A0 = -13/144.
            Equation (_/) becomes



        and the general solution is
CHAP. 11]                       THE METHOD OF UNDETERMINED COEFFICIENTS                                                    99



11.8. Determine the form of a particular solution for /' = 9x2 + 2x-\.
              Here (f>(x) = 9x2 + 2x- 1, and the solution of the associated homogeneous differential equation y"=Q is
        yh = c\x + c0. Since <j>(x) is a second-degree polynomial, we first try yp = A2x2 + Ape + A0. Note, however, that this
        assumed solution has terms, disregarding multiplicative constants, in common with yh: in particular, the first-power
        term and the constant term. Hence, we must determine the smallest positive integer m such that xm(A2x2 + AIX + AQ)
        has no terms in common with yh.
              For m = 1, we obtain


        which still has a first-power term in common with yh. For m = 2,we obtain


        which has no terms in common with yh; therefore, we assume an expression of this form for yp.


11.9.   Solve/' = 9x2 + 2x-l.
             Using the results of Problem 11.8, we have yh = c^x + c0 and we assume



        Substituting (1) into the differential equation, we obtain



        from which A2 = 3/4, Al = 1/3, and AQ = -1/2. Then (1) becomes




        and the general solution is




             The solution also can be obtained simply by twice integrating both sides of the differential equation with
        respect to x.


11.10. Solve / - 5y = 2eSx.
              From Problem 10.3, yh = c^. Since <j>(x) = 2e5^, it would follow from Eq. (11.2) that the guess for yp should
        be yp = A0e5x. Note, however, that this yp has exactly the same form as yh; therefore, we must modify yp. Multiplying
        yp by x (m = 1), we obtain



        As this expression has no terms in common with yh; it is a candidate for the particular solution. Substituting (1) and
        y'p = A0e5x + 5A0x^x into the differential equation and simplifying, we obtain A0e5x = 2e5x, from which A0 = 2.
        Equation (1) becomes yp = Ixe"^, and the general solution is y = (cj + 2x)e5x.


11.11. Determine the form of a particular solution of



             Here <j>(x) = (x — 1) sin x + (x + 1) cos x, and from Problem 10.3, we know that the solution to the associated
        homogeneous problem y' — 5y = 0 is yh = c^x. An assumed solution for (x — 1) sin x is given by Eq. (11.5) (with
        a = 0) as
100                            THE METHOD OF UNDETERMINED COEFFICIENTS                                         [CHAP. 11



       and an assumed solution for (x + 1) cos x is given also by Eq. (11.5) as



       (Note that we have used C and D in the last expression, since the constants A and B already have been used.)
       We therefore take

                      yp = (AjX + AQ) sin x + (Bpc + BQ) cos x + (C±x + CQ) sin x + (D^ + DQ) cos x

       Combining like terms, we arrive at



       as the assumed solution, where Ej = Aj + Cj and Fj = Bj + Dj (j = 0, 1).


11.12. Solve y -5y = (x- 1) sin x + (x + 1) cos x.
            From Problem 10.3, yh = c^*. Using the results of Problem 11.11, we assume that


       Thus,
       Substituting these values into the differential equation and simplifying, we obtain




       Equating coefficients of like terms, we have




       Solving, we obtain El = -2/13, E0 = 71/338, Fl = -3/13, and F0 = -69/338. Then, from (1),




       and the general solution is




11.13. Solve/ -5y = 3e*-2x+l.
              From Problem 10.3, yh = c^. Here, we can write <j>(x) as the sum of two manageable functions:
       ij>(x) = (3e") + (—2x+ 1). For the term 3e" we would assume a solution of the form Aex; for the term —2x4- 1 we
       would assume a solution of the form BIX + B0. Thus, we try


       Substituting (_/) into the differential equation and simplifying, we obtain


       Equating coefficients of like terms, we find that A = —314, BI = 2/5, and B0 = -3/25. Hence, (_/) becomes
CHAP. 11]                         THE METHOD OF UNDETERMINED COEFFICIENTS                                                     101



        and the general solution is




11.14. Solve y-5y = x^ef - xeSx.
             From Problem 10.3, yh = c^x. Here <j>(x) = x2^ - xeSx, which is the difference of two terms, each in manageable
        form. For x2^ we would assume a solution of the form


        For xe5x we would try initially a solution of the form


        But this supposed solution would have, disregarding multiplicative constants, the term eSx in common with yh. We
        are led, therefore, to the modified expression


        We now take yp to be the sum of (1) and (2):


        Substituting (3) into the differential equation and simplifying, we obtain




        Equating coefficients of like terms, we have


        from which




        Equation (3) then gives



        and the general solution is




                                          Supplementary Problems
In Problems 11.15 through 11.26, determine the form of a particular solution to \-(y) = <j>(x) for <j>(x) as given if the solution
to the associated homogeneous equation \-(y) = 0 is yh = Cie2x + C2e3x.
102                               THE METHOD OF UNDETERMINED COEFFICIENTS                                             [CHAP. 11




In Problems 11.27 through 11.36, determine the form of a particular solution to \-(y) = tj>(x) for <j>(x) as given if the solution
to the associated homogeneous equation \-(y) = 0 is yh = c^x cos 3x + C2e5x sin 3x.




In Problems 11.37 through 11.43, determine the form of a particular solution to L(x) = <j>(t) for <j>(t) as given if the solution
to the associated homogeneous equation L(x) = 0 is xh = Cj + c2e' + c3te'.




In Problems 11.44 through 11.52, find the general solutions to the given differential equations.

44. y"-2y' + y = x2-!                                          11.45. /'--2y' + y = 36^

,46. y" - 2y' + y = 4 cos x                                    11.47. /'--2y' + y = 3e*

,48.    y"-2y' + y = xex                                       11.49. /--y = e*

                    2x
,50. y' -y = xe + 1                                            11.51. y' -- y = sin x + cos 2x

11.,52. y'" -3y" + 3y'-y = if+l
                                                                 CHAPTER 12



                                                              Variation of
                                                              Parameters
     Variation ol' parameters is another method (see Chapter 1 1) for finding a particular solution of the nth-order
linear differential equation


once the solution of the associated homogeneous equation L(v) = 0 is known. Recall from Theorem 8.2 thai if
y\(x), VjOt). .... y,,(.v) are n linearK independent solutions of L(v) = 0. then Ihe general solution of L(y> = 0 is




THE METHOD
     A particular solution of L(y) = </>ix) has the form



where \'j = yj(x) (' = ' - 2 , ••• • "I is gi\en in Kq. (12.2} and i\- (i = I. 2, ... . n) is an unknown function of .t \\hidi
Slill must he determined.
      To find v/, firsl solve the following linear equations simultaneous!} for i1,';




Then integrate each r,' to obtain i1,. disregarding all constants of integration. This is permissible because we are
seeking only one particular solution.

Example 12.1.      For the special case n = .l. Eqs. (12.4) reduce to




                                                             103
Copyright © 2006, 1994, 1973 by The McGraw-Hill Companies, Inc. Click here for terms of use.
104                                          VARIATION OF PARAMETERS                                          [CHAP. 12



For the case n = 2, Eqs. (12.4) become




and for the case n = 1, we obtain the single equation



    Since y^(x), y2(x), ... , yn(x) are n linearly independent solutions of the same equation L(j) = 0, their
Wronskian is not zero (Theorem 8.3). This means that the system (12.4) has a nonzero determinant and can be
solved uniquely for v[(x), v2(x), ... ,v'n(x).


SCOPE OF THE METHOD
     The method of variation of parameters can be applied to all linear differential equations. It is therefore more
powerful than the method of undetermined coefficients, which is restricted to linear differential equations with
constant coefficients and particular forms of (j)(x). Nonetheless, in those cases where both methods are applicable,
the method of undetermined coefficients is usually the more efficient and, hence, preferable.
     As a practical matter, the integration of v'(x) may be impossible to perform. In such an event, other methods
(in particular, numerical techniques) must be employed.




                                                Solved Problems

12.1.   Solve /" + / = sec x.
             This is a third-order equation with



        (see Chapter 10); it follows from Eq. (12.3) that



        Here y1=l,y2 = cos x, y3 = sin x, and <j>(x) = sec x, so (12.5) becomes




        Solving this set of equations simultaneously, we obtain v( = sec x, v^ = —I, and v3 = -tan x. Thus,




        Substituting these values into (_/), we obtain


        The general solution is therefore
CHAP. 12]                                    VARIATION OF PARAMETERS                     105




12.2.   Solve

             This is a third-order equation with


        (see Chapter 10); it follows from Eq. (12.3) that


        Here yl =l,y2 = e*, y3 = e2x, and <j)(x) = ex/(l + e *), so Eq. (12.5) becomes




        Solving this set of equations simultaneously, we obtain




        Thus, using the substitutions u = e* + 1 and w = 1 + e x, we find that




        Substituting these values into (1), we obtain




        The general solution is




        This solution can be simplified. We first note that



        so
106                                            VARIATION OF PARAMETERS                                     [CHAP. 12



        Then, combining like terms, we have




12.3.   Solve .

             Here


        Since y^ = ^,y^ = xe*, and <j>(x) = e"lx, it follows from Eq. (12.6) that




        Solving this set of equations simultaneously, we obtain v{ = -1 and v2 = IIx. Thus,




        Substituting these values into (1), we obtain


        The general solution is therefore,




12.4. Solve y"-y'-2y = e3x.
             Here



        Since y1 = e x, y2 = e2*, and <j>(x) = e3*, it follows from Eq. (12.6) that




        Solving this set of equations simultaneously, we obtain v[ = -e4x/3 and V2 = e*l3, from which V1 = -e4x/l2 and
        v2 = ex/3. Substituting these results into (_/), we obtain




        The general solution is, therefore,



        (Compare with Problem 11.2.)
CHAP. 12]                                     VARIATION OF PARAMETERS                                                       107



12.5.   Solve x + 4x = sin2 2t.
             This is a second-order equation for x(t) with


        It follows from Eq. (12.3) that



        where vl and v2 are now functions of t. Here ^ = cos 2t, x2 = sin 2f are two linearly independent solutions of the
        associated homogeneous differential equation and <j>(t) = sin 2 2f, so Eq. (12.6), with x replacing y, becomes




        The solution of this set of equations is




        Thus,




        Substituting these values into (1), we obtain




        because cos2 2t + sin2 2t = 1. The general solution is




12.6.   Solve                               In? if it is known that two linearly independent solutions of the associated
        homogeneous differential equation are t and t .
            We first write the differential equation in standard form, with unity as the coefficient of the highest derivative.
        Dividing the equation by f2, we obtain




        with <j>(t) = (lit) In t. We are given Ni = t and N2 = t2 as two linearly independent solutions of the associated second-
        order homogeneous equation. It follows from Theorem 8.2 that
108                                           VARIATION OF PARAMETERS                                         [CHAP. 12



        We assume, therefore, that


        Equations (12.6), with N replacing y, become




        The solution of this set of equations is

                                                            and



        Thus,




        and (1) becomes




        The general solution is




12.7.   Solve

             Here n = 1 and (from Chapter 6)                hence,



        Since yi=x4 and (f>(x) = x4, Eq. (12.7) becomes v[x^ = x4, from which we obtain v{ = xs and Vi=x9/9.
        Equation (1) now becomes VD = xs/9, and the general solution is therefore



        (Compare with Problem 6.6.)


12.8.   Solve y(4) = 5.x by variation of parameters.
             Here n = 4 and yh = Cj + c2x + c^x2 + c^x3; hence,



        Since y± = l,y2 = x, y3 = x2,y4 = x3, and <j>(x) = 5x, it follows from Eq. (12.4), with n = 4, that
CHAP. 12]                                        VARIATION OF PARAMETERS                                                     109



         Solving this set of equations simultaneously, we obtain




         whence


         Then, from (_/),



         and the general solution is




              The solution also can be obtained simply by integrating both sides of the differential equation four times with
         respect to x.




                                            Supplementary Problems
Use variation of parameters to find the general solutions of the following differential equations:




                               In x if two solkution to the associated homogeneous problem are known to be x and 1/x

                              if two solution to the associated homogeneous problem are known to be I andex2.




                                           if two solutions to the associated homogeneous equations are known to be t and i2 + 1.

12.24.                                                if two solutions to the associated homogeneous equations are known to be
           and




12.29.                       if three linearly independent solutions to the associated homogeneous equations are known to be
                  and

12.30. y(S)
         -y(3) _
              4
                 _
                 g2*    32
                                                                    CHAPTER 13



                 Initial-Value
           Problems for Linear
        Differential Equations
    [nilial-\alue problems are solved h\ appKing ihc initial conditions lo ihc general solution of [he differential
equation, ll nuisl he emphasi/ed !hal ihc initial conditions are applied aiilv lo Ihc general solution and mil to the
homogeneous s{ilulion y,,. even though il is y/, lhai possesses all ihe arbitrary consianls lhai must be evaluated.
The one exception is when ihc general solution is ihe homogeneous solution; lhai is, when the dilTerenlial equation
under eon si derail on is iise.ll' homogeneous.




                                                 Solved Problems

13.1.   Solve y" - y' - 2v = 4\-; v(0) = 1. v'(0) = 4.
             The jicneral solution of the differential equation is given in Problem 1 I . I as




        Therefore.

        Applying ihc first initial condition to (/). we obtain




        Applying the second initial condition to (2). we obtain




        Solving ( 3 ) and (4) simultaneously, we find lhai ct = 2 and c2 = 2. Substituting these values into (/). ne obtain ihc
        solution of I he initial-value problem as

                                                y=2e+2e-2x+2x-3



                                                              111
Copyright © 2006, 1994, 1973 by The McGraw-Hill Companies, Inc. Click here for terms of use.
CHAP. 13]                                      INITIAL-VALUE PROBLEMS                                                   111




13.2.   Solve

             The general solution of the differential equation is given in Problem 12.3 as



        Therefore,

        Applying the first initial condition to (_/), we obtain


        or (noting that In 1 = 0),


        Applying the second initial condition to (2), we obtain



        or

        Solving (3) and (4) simultaneously, we find that cl = —c3 = (e— l)le. Substituting these values into (_/), we obtain
        the solution of the initial-value problem as




13.3.   Solve
             Here yh = e    (cj cos 2x + c2 sin 2x), and, by the method of undetermined coefficients,




        Thus, the general solution to the differential equation is



        Therefore,




        Applying the first initial condition to (_/), we obtain




        Applying the second initial condition to (2), we obtain




        Solving (3) and (4) simultaneously, we find that cl = 69/65 and c2 = 131/130. Substituting these values into (_/),
        we obtain the solution of the initial-value problem as
112                                            INITIAL-VALUE PROBLEMS                                             [CHAP. 13



13.4.   Solve
             From Problem 10.1, we have




        Since the given differential equation is homogeneous, yh is also the general solution. Applying each initial condition
        separately, we obtain




        Solving these equations simultaneously, we find



        Substituting these values into the first equation (_/), we obtain




13.5.   Solve
             The general solution of the differential equation is given in Problem 12.5 as




        Therefore,

        Applying the first initial condition to (_/), we obtain




        Hence cl = -1/6. Applying the second initial condition to (2), we obtain



        Hence c2 = 0. The solution to the initial-value problem is




13.6.   Solve
             The general solution of the differential equation and the derivative of the solution are as given in (_/) and (2)
        of Problem 13.5. Applying the first initial condition, we obtain




        or
CHAP. 13]                                       INITIAL-VALUE PROBLEMS   113



        Applying the second initial condition, we obtain




        or


        Solving (_/) and (2) simultaneously, we find that




        whereupon, the solution to the initial-value problem becomes




                                        Supplementary Problems
Solve the following initial-value problems.

13.7.   /' -y'-2y = e3x; y(G) = 1, /(O) = 2

13.8.   /' -y'-2y = e3x; y(G) = 2, /(O) = 1

13.9.   /' -y'-2y = 0; y(0) = 2, /(O) = 1

13.10. /' ~y'-2y = e3x; y ( l ) = 2, /(I) = 1

13.11. /' + y = x; XI) = 0, /(!) = !

13.12. /' + 4y = sin2 2x; y(n) = 0, y'(n) = 0

13.13. y" +y = 0;y(2) = 0,y'(2) = 0

13.14. y'" = 12; XI) = 0, /(I) = 0, /'(I) = 0

13.15. y = 2y+ 2y = sin 2t + cos 2t; y(0) = 0, y(0) = 1
                                                                CHAPTER 14



                             Applications of
                               Second-Order
                          Linear Differential
                                  Equations
SPRING PROBLEMS
     The simple spring system shown in Fig. 14-! consists of a mass m attached lo the lower end of a spring
that is itself suspended vertically from a mounting. The system is in its equilibrium position when it is at rest.
The mass is set in motion by one or more of the following means: displacing the mass from its equilibrium
position, providing it with an initial velocity, or subjecting it to an external force F(i).




                                                     Posiiive.v-diretrion
                                                        Fig. 14.1


                                                            114

Copyright © 2006, 1994, 1973 by The McGraw-Hill Companies, Inc. Click here for terms of use.
CHAP. 14]                      SECOND-ORDER LINEAR DIFFERENTIAL EQUATIONS                                               115



Hooke's law: The restoring force F of a spring is equal and opposite to the forces applied to the spring and
is proportional to the extension (contraction) I of the spring as a result of the applied force; that is, F = —kl,
where k denotes the constant of proportionality, generally called the spring constant.

Example 14.1. A steel ball weighing 128 Ib is suspended from a spring, whereupon the spring is stretched 2 ft from its
natural length. The applied force responsible for the 2-ft displacement is the weight of the ball, 128 Ib. Thus, F = -128 Ib.
Hooke's law then gives -128 = -k(2), or k = 64 Ib/ft.

     For convenience, we choose the downward direction as the positive direction and take the origin to be the
center of gravity of the mass in the equilibrium position. We assume that the mass of the spring is negligible
and can be neglected and that air resistance, when present, is proportional to the velocity of the mass. Thus, at
any time t, there are three forces acting on the system: (1) F(t), measured in the positive direction; (2) a restoring
force given by Hooke's law as Fs = -kx, k > 0; and (3) a force due to air resistance given by Fa=— ax, a > 0,
where a is the constant of proportionality. Note that the restoring force Fs always acts in a direction that will
tend to return the system to the equilibrium position: if the mass is below the equilibrium position, then x is
positive and -kx is negative; whereas if the mass is above the equilibrium position, then x is negative and -kx
is positive. Also note that because a > 0 the force Fa due to air resistance acts in the opposite direction of the
velocity and thus tends to retard, or damp, the motion of the mass.
     It now follows from Newton's second law (see Chapter 7) that mx = - kx - ax + F(t), or




If the system starts at t = 0 with an initial velocity v0 and from an initial position x0, we also have the initial
conditions


(See Problems 14.1-14.10.)
     The force of gravity does not explicitly appear in (14.1), but it is present nonetheless. We automatically
compensated for this force by measuring distance from the equilibrium position of the spring. If one wishes to
exhibit gravity explicitly, then distance must be measured from the bottom end of the natural length of the
spring. That is, the motion of a vibrating spring can be given by




if the origin, x = 0, is the terminal point of the unstretched spring before the mass m is attached.


ELECTRICAL CIRCUIT PROBLEMS
    The simple electrical circuit shown in Fig. 14-2 consists of a resistor R in ohms; a capacitor C in farads;
an inductor L in henries; and an electromotive force (emf) E(t) in volts, usually a battery or a generator, all




                                                         Fig. 14.2
116                         SECOND-ORDER LINEAR DIFFERENTIAL EQUATIONS IONS                            {CHAP.14



connected in series. The current 7 flowing through the circuit is measured in amperes and the charge q on the
capacitor is measured in coulombs.

Kirchhojfs loop law: The algebraic sum of the voltage drops in a simple closed electric circuit is zero.
    It is known that the voltage drops across a resistor, a capacitor, and an inductor are respectively RI, (HC)q,
and L(dlldt) where q is the charge on the capacitor. The voltage drop across an emf is —E(t). Thus, from
Kirchhoff s loop law, we have




The relationship between q and 7 is




Substituting these values into (14.3), we obtain




The initial conditions for q are




    To obtain a differential equation for the current, we differentiate Eq. (14.3) with respect to t and then
substitute Eq. (14.4) directly into the resulting equation to obtain




The first initial condition is 7(0) = 70. The second initial condition is obtained from Eq. (14.3) by solving for
dlldt and then setting t = 0. Thus,




An expression for the current can be gotten either by solving Eq. (14.7) directly or by solving Eq. (14.5) for
the charge and then differentiating that expression. (See Problems 14.12-14.16.)


BUOYANCY PROBLEMS
    Consider a body of mass m submerged either partially or totally in a liquid of weight density p. Such a body
experiences two forces, a downward force due to gravity and a counter force governed by:
Archimedes' principle:    A body in liquid experiences a buoyant upward force equal to the weight of the liquid
displaced by that body.
    Equilibrium occurs when the buoyant force of the displaced liquid equals the force of gravity on the body.
Figure 14-3 depicts the situation for a cylinder of radius r and height 77 where h units of cylinder height are
submerged at equilibrium. At equilibrium, the volume of water displaced by the cylinder is 7tr2h, which provides
a buoyant force of 7tr2hp that must equal the weight of the cylinder mg. Thus,
CHAP. 14]                   SECOND-ORDER LINEAR DIFFERENTIAL EQUATIONS                                          117




                                                     Fig. 14.3



     Motion will occur when the cylinder is displaced from its equilibrium position. We arbitrarily take the
upward direction to be the positive ^-direction. If the cylinder is raised out of the water by x(t) units, as shown
in Fig. 14-3, then it is no longer in equilibrium. The downward or negative force on such a body remains mg
but the buoyant or positive force is reduced to Jtr2[h - x(t)]p. It now follows from Newton's second law that



Substituting (14.9) into this last equation, we can simplify it to



or

(See Problems 14.19-14.24.)


CLASSIFYING SOLUTIONS
     Vibrating springs, simple electrical circuits, and floating bodies are all governed by second-order linear
differential equations with constant coefficients of the form



For vibrating spring problems defined by Eq. (14.1), a1 = aim, a0 = him, and/(?) = F(t)lm. For buoyancy problems
defined by Eq. (14.10), a1 = 0, a0 = Jtr2plm, and/(?) = 0. For electrical circuit problems, the independent variable
x is replaced either by q in Eq. (14.5) or I in Eq. (14.7).
      The motion or current in all of these systems is classified as free and undamped when/(?) = 0 and a1 = 0.
It is classified as free and damped when/(?) is identically zero but a1 is not zero. For damped motion, there are
three separate cases to consider, depending on whether the roots of the associated characteristic equation (see
Chapter 9) are (1) real and distinct, (2) equal, or (3) complex conjugate. These cases are respectively classified
as (1) overdamped, (2) critically damped, and (3) oscillatory damped (or, in electrical problems, underdamped).
If/(O is not identically zero, the motion or current is classified as forced.
      A motion or current is transient if it "dies out" (that is, goes to zero) as t —> °°. A steady-state motion or
current is one that is not transient and does not become unbounded. Free damped systems always yield transient
118                                SECOND-ORDER LINEAR DIFFERENTIAL EQUATIONS                                             [CHAP. 14



motions, while forced damped systems (assuming the external force to be sinusoidal) yield both transient and
steady-state motions.
    Free undamped motion defined by Eq. (14.11) with a1 = 0 and/(?) = 0 always has solutions of the form



 which defines simple harmonic motion. Here c1, c2, and ft) are constants with ft) often referred to as circular
frequency. The natural frequency j'is




and it represents the number of complete oscillations per time unit undertaken by the solution. The period of
the system of the time required to complete one oscillation is




        Equation (14.12) has the alternate form


where the amplitude                          the phase angle (j) = arctan (c2lcj), and k is zero when c1 is positive and unity
when c1 is negative.




                                                     Solved Problems


14.1.     A steel ball weighing 128 Ib is suspended from a spring, whereupon the spring is stretched 2 ft from its
          natural length. The ball is started in motion with no initial velocity by displacing it 6 in above the equi-
          librium position. Assuming no air resistance, find (a) an expression for the position of the ball at any
          time t, and (b) the position of the ball att=nl 12 sec.
           (a)   The equation of motion is governed by Eq. (14.1). There is no externally applied force, so F ( t ) = 0, and no
                 resistance from the surrounding medium, so a = 0. The motion is free and undamped. Here g = 32 ft/sec2,
                 m = 128/32 = 4 slugs, and it follows from Example 14.1 that k = 64 Ib/ft. Equation (14.1) becomes x + 16x = 0.
                 The roots of its characteristic equation are X = ±4i, so its solution is



                 At t = 0, the position of the ball is x0 = - j ft (the minus sign is required because the ball is initially displaced
                 above the equilibrium position, which is in the negative direction). Applying this initial condition to (_/), we
                 find that



                 so (1) becomes



                 The initial velocity is given as v0 = 0 ft/sec. Differentiating (2), we obtain

                                                    v(t) = x(i) = 2sin4t + 4c2 cos4f
CHAP. 14]                       SECOND-ORDER LINEAR DIFFERENTIAL EQUATIONS                                             119



             whereupon                      0 = v(0) = 2 sin 0 + 4c2 cos 0 = 4c2

             Thus, c2 = 0, and (2) simplifies to




             as the equation of motion of the steel ball at any time t.




14.2.   A mass of 2 kg is suspended from a spring with a known spring constant of 10 N/m and allowed to come
        to rest. It is then set in motion by giving it an initial velocity of 150 cm/sec. Find an expression for the
        motion of the mass, assuming no air resistance.
              The equation of motion is governed by Eq. (14.1) and represents free undamped motion because there is no
        externally applied force on the mass, F(t) = 0, and no resistance from the surrounding medium, a = 0. The mass and
        the spring constant are given as m = 2 kg and k = 10 N/m, respectively, so Eq. (14.1) becomes x + 5x = 0. The roots
        of its characteristic equation are purely imaginary, so its solution is




        At t=0, the position of the ball is at the equilibrium position x0 = 0m. Applying this initial condition to (_/),
        we find that
                                              0 = x(0) = cl cos 0 + c2 sin 0 = cl
        whereupon (1) becomes




        The initial velocity is given as v0 = 150 cm/sec = 1.5 m/sec. Differentiating (2), we obtain




        whereupon,

        and (2) simplifies to



        as the position of the mass at any time t.


14.3.   Determine the circular frequency, natural frequency, and period for the simple harmonic motion
        described in Problem 14.2.

        Circular frequency:

        Natural frequency:

        Period:
120                            SECOND-ORDER LINEAR DIFFERENTIAL EQUATIONS                                            [CHAP. 14



14.4.   Determine the circular frequency, natural frequency, and period for the simple harmonic motion
        described in Problem 14.1.

        Circular frequency:
        Natural frequency:
        Period:


14.5.   A 10-kg mass is attached to a spring, stretching it 0.7 m from its natural length. The mass is started in
        motion from the equilibrium position with an initial velocity of 1 ml sec in the upward direction. Find
        the subsequent motion, if the force due to air resistance is -90i N.
             Taking g = 9.8 m/sec2, we have w = mg = 98 N and k = w/l = 140 N/m. Furthermore, a = 90 and F(t) = 0 (there
        is no external force). Equation (14.1) becomes


        The roots of the associated characteristic equation are Xj = -2 and ^ = -7, which are real and distinct; hence this
        problem is an example of overdamped motion. The solution of (1) is


        The initial conditions are x(0) = 0 (the mass starts at the equilibrium position) and i(0) = -1 (the initial velocity is
        in the negative direction). Applying these conditions, we find that c1 = — c2 = --|, so that x = ^(e"7' - e~2'). Note that
        x —> 0 as t —> °°; thus, the motion is transient.


14.6.   A mass of 1/4 slug is attached to a spring, whereupon the spring is stretched 1.28 ft from its natural length.
        The mass is started in motion from the equilibrium position with an initial velocity of 4 ft/sec in the down-
        ward direction. Find the subsequent motion of the mass if the force due to air resistance is -2ilb.
             Here m=l/4, a = 2, F(t) = Q (there is no external force), and, from Hooke's law, k = mgll
        = (l/4)(32)/1.28 = 6.25. Equation (14.1) becomes



        The roots of the associated characteristic equation are Xj = -4 + O and ^ = -4 - 13, which are complex conjugates;
        hence this problem is an example of oscillatory damped motion. The solution of (1) is


        The initial conditions are x(0) = 0 and i(0) = 4. Applying these conditions, we find that Cj = 0 and c2 = |; thus,
        x = |e~4' sin3t. Since x —> 0 as t —> m, the motion is transient.


14.7.   A mass of 1/4 slug is attached to a spring having a spring constant of 1 Ib/ft. The mass is started in motion
        by initially displacing it 2 ft in the downward direction and giving it an initial velocity of 2 ft/sec in the
        upward direction. Find the subsequent motion of the mass, if the force due to air resistance is -lilb.
             Here m = 1/4, a = 1, k =1, and F(t) = 0. Equation (14.1) becomes



        The roots of the associated characteristic equation are A^ = A^ = -2, which are equal; hence this problem is an example
        of critically damped motion. The solution of (1) is


        The initial conditions are x(0) = 2 and i(0) = -2 (the initial velocity is in the negative direction). Applying these
        conditions, we find that Cj = c2 = 2. Thus,


        Since x —> 0 as t —> °°, the motion is transient.
CHAP. 14]                      SECOND-ORDER LINEAR DIFFERENTIAL EQUATIONS                                                    121



14.8.   Show that the types of motions that result from free damped problems are completely determined by the
        quantity a2 — 4 km.
             For free damped motions F(t) = 0 and Eq. (14.1) becomes




        The roots of the associated characteristic equation are




             If a2 - 4 km > 0, the roots are real and distinct; if a2 - 4 km = 0, the roots are equal; if a2 - 4 km < 0, the roots
        are complex conjugates. The corresponding motions are, respectively, overdamped, critically damped, and oscillatory
        damped. Since the real parts of both roots are always negative, the resulting motion in all three cases is transient.
        (For overdamped motion, we need only note that                        whereas for the other two cases the real parts are
        both-a/2m.)


14.9.   A 10-kg mass is attached to a spring having a spring constant of 140 N/m. The mass is started in motion
        from the equilibrium position with an initial velocity of 1 m/sec in the upward direction and with an
        applied external force F(t) = 5 sin t. Find the subsequent motion of the mass if the force due to air
        resistance is -90iN.
             Here m = 10, k = 140, a = 90, and F(t) = 5 sin t. The equation of motion, (14.1), becomes




        The general solution to the associated homogeneous equation x + 9x + 14x = 0 is (see Problem 14.5)



        Using the method of undetermined coefficients (see Chapter 11), we find




        The general solution of (_/) is therefore




        Applying the initial conditions, x(0) = 0 and i(0) = -1, we obtain




        Note that the exponential terms, which come from xh and hence represent an associated free overdamped motion,
        quickly die out. These terms are the transient part of the solution. The terms coming from xp, however, do not die
        out as t —> °°; they are the steady-state part of the solution.


14.10. A 128-lb weight is attached to a spring having a spring constant of 64 Ib/ft. The weight is started in
       motion with no initial velocity by displacing it 6 in above the equilibrium position and by simultaneously
       applying to the weight an external force F(t) = 8 sin 4t. Assuming no air resistance, find the subsequent
       motion of the weight.
             Here m = 4, k = 64, a = 0, and F(t) = 8 sin 4t; hence, Eq. (14.1) becomes
122                           SECOND-ORDER LINEAR DIFFERENTIAL EQUATIONS                                        [CHAP. 14



       This problem is, therefore, an example of forced undamped motion. The solution to the associated homogeneous
       equation is
                                                 xh = GI cos 4t + c2 sin 4t
       A particular solution is found by the method of undetermined coefficients (the modification described in Chapter 11
       is necessary here): x =-\ cos 4t. The solution to (1) is then



       Applying the initial conditions, x(0) = - y and i(0) = 0, we obtain



            Note that \x\ —> °° as t —> °°. This phenomenon is called pure resonance. It is due to the forcing function F(t)
       having the same circular frequency as that of the associated free undamped system.


14.11. Write the steady-state motion found in Problem 14.9 in the form specified by Eq. (14.13).
             The steady-state displacement is given by (2) of Problem 14.9 as



       Its circular frequency is to = 1. Here




       and

       The coefficient of the cosine term in the steady-state displacement is negative, so k= 1, and Eq. (14.13) becomes




14.12. An RCL circuit connected in series has R = 180 ohms, C = 1/280 farad, L = 20 henries, and an applied
       voltage E(i) = 10 sin t. Assuming no initial charge on the capacitor, but an initial current of 1 ampere at
       t = 0 when the voltage is first applied, find the subsequent charge on the capacitor.
             Substituting the given quantities into Eq. (14.5), we obtain



       This equation is identical in form to (1) of Problem 14.9; hence, the solution must be identical in form to the
       solution of that equation. Thus,



       Applying the initial conditions q(0) = 0 and q(0) = 1, we obtain Cj = 110/500 and c2 = -101/500. Hence,




             As in Problem 14.9, the solution is the sum of transient and steady-state terms.


14.13. An RCL circuit connected in series has R = 10 ohms, C = 10 2 farad, L = jhenry, and an applied voltage
       E = 12 volts. Assuming no initial current and no initial charge at t = 0 when the voltage is first applied,
       find the subsequent current in the system.
CHAP. 14]                      SECOND-ORDER LINEAR DIFFERENTIAL EQUATIONS                                               123



             Substituting the given values into Eq. (14.7), we obtain the homogeneous equation [since E(t) = 12, dEldt = 0]




       The roots of the associated characteristic equation are A,j = -10 + 10; and X2 = -10 - 10;; hence, this is an example
       of a free underdamped system for the current. The solution is


       The initial conditions are 7(0) = 0 and, from Eq. (14.8),




       Applying these conditions to (7), we obtain cl = 0 and c 2 = y ; thus, I = ^e 10' sinlOf, which is completely
       transient.


14.14. Solve Problem 14.13 by first finding the charge on the capacitor.
            We first solve for the charge q and then use 7 = dqldt to obtain the current. Substituting the values given in
       Problem 14.13 into Eq. (14.5), we have q + 20q + 200q = 24, which represents a forced system for the charge, in
       contrast to the free damped system obtained in Problem 14.3 for the current. Using the method of undetermined
       coefficients to find a particular solution, we obtain the general solution



       Initial conditions for the charge are q(0) = 0 and q(0) = 0; applying them, we obtain Cj = c2 = -3/25. Therefore,




       and

       as before.
            Note that although the current is completely transient, the charge on the capacitor is the sum of both transient
       and steady-state terms.


14.15. An RCL circuit connected in series has a resistance of 5 ohms, an inductance of 0.05 henry, a capacitor
       of 4 X 10~4 farad, and an applied alternating emf of 200 cos 100? volts. Find an expression for the current
       flowing through this circuit if the initial current and the initial charge on the capacitor are both zero.
             Here RIL = 5/0.05 = 100, 1/(LC) = 1/[0.05(4 X 10^)] = 50,000, and




       so Eq. (14.7) becomes



       The roots of its characteristic equation are -50 + 50Vl9i, hence the solution to the associated homogeneous
       problem is



       Using the method of undetermined coefficients, we find a particular solution to be
124                           SECOND-ORDER LINEAR DIFFERENTIAL EQUATIONS                                      [CHAP. 14



       so the general solution is



       The initial conditions are 7(0) = 0 and, from Eq. (14.8),




       Applying the first of these conditions to (1) directly, we obtain



       or Ci = - 40/17 = -2.35. Substituting this value into (1) and then differentiating, we find that




       whereupon

       and c2 = 22.13. Equation (_/) becomes




14.16. Solve Problem 14.15 by first finding the charge on the capacitor.
            Substituting the values given in Problem 14.15 into Eq. (14.5), we obtain




       The associated homogeneous equation is identical in form to the one in Problem 1415, so it has the same solution
       (with Ih replaced by qh). Using the method of undetermined coefficients, we find a particular solution to be




       so the general solution is




       The initial conditions on the charge are q(0) = 0 and




       Applying the first of these conditions to (_/) directly, we obtain




       or Ci = -16/170 = - 0.0941. Substituting this value into (_/) and then differentiating, we find that
CHAP. 14]                       SECOND-ORDER LINEAR DIFFERENTIAL EQUATIONS                                               125



       whereupon

       and c2 = -0.0324. Substituting this value into (2) and simplifying, we obtain as before




14.17. Determine the circular frequency, the natural frequency, and the period of the steady-state current found
       in Problem 14.16.
            The current is given by (3) of Problem 14.16. As t —> °°, the exponential terms tend to zero, so the steady-state
       current is




       Circular frequency:

       Natural frequency:

       Period:


14.18. Write the steady-state current found in Problem 14.17 in the form specified by Eq. (14.13).
            The amplitude is




       and the phase angle is




       The circular frequency is to= 100. The coefficient of the cosine term is positive, so k= 0 and Eq. (14.13) becomes




14.19. Determine whether a cylinder of radius 4 in, height 10 in, and weight 15 Ib can float in a deep pool of
       water of weight density 62.5 Ib/ft3.
           Let h denote the length (in feet) of the submerged portion of the cylinder at equilibrium. With r = jft, it follows
       from Eq. (14.9) that




       Thus, the cylinder will float with 10 - 8.25 = 1.75 in of length above the water line at equilibrium.


14.20. Determine an expression for the motion of the cylinder described in Problem 14.19 if it is released with
       20 percent of its length above the water line with a velocity of 5 ft/sec in the downward direction.
            Here r = }ft, p = 62.5 Ib/ft 3 , m = 15/32 slugs and Eq. (14.10) becomes
126                            SECOND-ORDER LINEAR DIFFERENTIAL EQUATIONS                                             [CHAP. 14




       The roots of the associated characteristic equation are H                         the general solution of the differential
       equation is


       At t = 0, 20 percent of the 10-in length of the cylinder, or 2 in, is out of the water. Using the results of Problem 14.19,
       we know that the equilibrium position has 1.75 in above the water, so at t = 0, the cylinder is raised 1/4 in or 1/48 ft
       above its equilibrium position. In the context of Fig. 14-3, jc(0) = 1/48 ft. The initial velocity is 5 ft/sec in the down-
       ward or negative direction in the coordinate system of Fig. 14-3, so x(0) = - 5. Applying these initial conditions to
       (_/), we find that




       Equation (_/) becomes



14.21. Determine whether a cylinder of diameter 10 cm, height 15 cm, and weight 19.6 N can float in a deep
       pool of water of weight density 980 dynes/cm3.
           Let h denote the length (in centimeters) of the submerged portion of the cylinder at equilibrium. With r = 5 cm
       and mg = 19.6 N = 1.96 X 106 dynes, it follows from Eq. (14.9) that




       Since this is more height than the cylinder possesses, the cylinder cannot displace sufficient water to float and will
       sink to the bottom of the pool.


14.22. Determine whether a cylinder of diameter 10 cm, height 15 cm, and weight 19.6 N can float in a deep
       pool of liquid having weight density 2450 dynes/cm3.
            Let h denote the length of the submerged portion of the cylinder at equilibrium. With r = 5 cm and mg = 19.6 N
       = 1.96 X 106 dynes, it follows from Eq. (14.9) that




       Thus, the cylinder will float with 15 - 10.2 = 4.8 cm of length above the liquid at equilibrium.


14.23. Determine an expression for the motion of the cylinder described in Problem 14.22 if it is released at
       rest with 12 cm of its length fully submerged.
            Here r = 5 cm, p = 2450 dynes/cm3, m = 19.6/9.8 = 2 kg = 2000 g, and Eq. (14.10) becomes



       The roots of the associated characteristic equation are                          the general solution of the differential
       equation is


       At t = 0, 12 cm of the length of the cylinder is submerged. Using the results of Problem 14.22, we know that the
       equilibrium position has 10.2 cm submerged, so at t= 0, the cylinder is submerged 12 - 10.2 = 1.8 cm below its
       equilibrium position. In the context of Fig. 14-3, x(Q) = —1.8 cm with a negative sign indicating that the equilibrium
       line is submerged. The cylinder begins at rest, so its initial velocity is x(0) = 0. Applying these initial conditions to
       (_/), we find that c1 = —1.8 and c2 = 0. Equation (1) becomes
CHAP. 14]                     SECOND-ORDER LINEAR DIFFERENTIAL EQUATIONS                                                   127



14.24. A solid cylinder partially submerged in water having weight density 62.5 Ib/ft3, with its axis vertical, oscil-
       lates up and down within a period of 0.6 sec. Determine the diameter of the cylinder if it weighs 2 Ib.
            With p = 62.5 Ib/ft 3 and m = 2/32 slugs, Eq. (14.10) becomes


       which has as its general solution



       Its circular frequency is               its natural frequency is                                      its period is
       T= !//= 1/8.92r. We are given 0.6 = T= 1/8.92r, thus r = 0.187 ft = 2.24 in with a diameter of 4.48 in.

14.25. A prism whose cross section is an equilateral triangle with sides of length / floats in a pool of liquid of
       weight density p with its height parallel to the vertical axis. The prism is set in motion by displacing it
       from its equilibrium position (see Fig. 14-4) and giving it an initial velocity. Determine the differential
       equation governing the subsequent motion of this prism.
            Equilibrium occurs when the buoyant force of the displaced liquid equals the force of gravity on the body. The
       area of an equilateral triangle with sides of length / is A = v3/ 2 /4. For the prism depicted in Fig. 14-4, with h units
       of height submerged at equilibrium, the volume of water displaced at equilibrium is -J^fhl 4, providing a buoyant
       force of v3/ 2 Ap / 4. By Archimedes' principle, this buoyant force at equilibrium must equal the weight of the prism
       mg; hence,



             We arbitrarily take the upward direction to be the positive x-direction. If the prism is raised out of the water by
       x(t) units, as shown in Fig. 14-4, then it is no longer in equilibrium. The downward or negative force on such a body
       remains mg but the buoyant or positive force is reduced to ^J3l2[h - x(t)]p 14. It now follows from Newton's second
       law that




       Substituting (1) into this last equation, we simplify it to




                                                          Fig. 14.4
128                            SECOND-ORDER LINEAR DIFFERENTIAL EQUATIONS                                          [CHAP. 14




                                        Supplementary Problems

14.26. A 10-lb weight is suspended from a spring and stretches it 2 in from its natural length. Find the spring constant.

14.27. A mass of 0.4 slug is hung onto a spring and stretches it 9 in from its natural length. Find the spring constant.

14.28. A mass of 0.4 g is hung onto a spring and stretches it 3 cm from its natural length. Find the spring constant.

14.29. A mass of 0.3 kg is hung onto a spring and stretches it 15 cm from its natural length. Find the spring constant.

14.30. A 20-lb weight is suspended from the end of a vertical spring having a spring constant of 40 Ib/ft and is allowed to
       reach equilibrium. It is then set into motion by stretching the spring 2 in from its equilibrium position and releasing
       the mass from rest. Find the position of the weight at any time t if there is no external force and no air resistance.

14.31.   Solve Problem 14.30 if the weight is set in motion by compressing the spring by 2 in from its equilibrium position
         and giving it an initial velocity of 2 ft/sec in the downward direction.

14.32. A 20-g mass is suspended from the end of a vertical spring having a spring constant of 2880 dynes/cm and is
       allowed to reach equilibrium. It is then set into motion by stretching the spring 3 cm from its equilibrium position
       and releasing the mass with an initial velocity of 10 cm/sec in the downward direction. Find the position of the mass
       at any time t if there is no external force and no air resistance.

14.33. A 32-lb weight is attached to a spring, stretching it 8 ft from its natural length. The weight is started in motion by
       displacing it 1 ft in the upward direction and by giving it an initial velocity of 2 ft/sec in the downward direction.
       Find the subsequent motion of the weight, if the medium offers negligible resistance.

14.34. Determine (a) the circular frequency, (b) the natural frequency, and (c) the period for the vibrations described in
       Problem 14.31.

14.35. Determine (a) the circular frequency, (b) the natural frequency, and (c) the period for the vibrations described in
       Problem 14.32.

14.36. Determine (a) the circular frequency, (b) the natural frequency, and (c) the period for the vibrations described in
       Problem 14.33.

14.37. Find the solution to Eq. (14.1) with initial conditions given by Eq. (14.2) when the vibrations are free and
       undamped.

14.38. A |-slug mass is hung onto a spring, whereupon the spring is stretched 6 in from its natural length. The mass is
       then started in motion from the equilibrium position with an initial velocity of 4 ft/sec in the upward direction. Find
       the subsequent motion of the mass, if the force due to air resistance is —2x Ib.

14.39. A -j-slug mass is attached to a spring so that the spring is stretched 2 ft from its natural length. The mass is started
       in motion with no initial velocity by displacing it yft in the upward direction. Find the subsequent motion of the
       mass, if the medium offers a resistance of —4x Ib.

14.40. A -j-slug mass is attached to a spring having a spring constant of 6 Ib/ft. The mass is set into motion by displacing
       it 6 in below its equilibrium position with no initial velocity. Find the subsequent motion of the mass, if the force
       due to the medium is —4x Ib.

14.41. A y-kg mass is attached to a spring having a spring constant of 8 N/m. The mass is set into motion by displacing
       it 10 cm above its equilibrium position with an initial velocity of 2 m/sec in the upward direction. Find the
       subsequent motion of the mass if the surrounding medium offers a resistance of -4iN.

14.42.   Solve Problem 14.41 if instead the spring constant is 8.01 N/m.

14.43.   Solve Problem 14.41 if instead the spring constant is 7.99 N/m.
CHAP. 14]                       SECOND-ORDER LINEAR DIFFERENTIAL EQUATIONS                                                    129



14.44. A 1-slug mass is attached to a spring having a spring constant of 8 Ib/ft. The mass is initially set into motion from
       the equilibrium position with no initial velocity by applying an external force F(t) = 16 cos 4t. Find the subsequent
       motion of the mass, if the force due to air resistance is —4x Ib.

14.45. A 64-lb weight is attached to a spring whereupon the spring is stretched 1.28 ft and allowed to come to rest. The
       weight is set into motion by applying an external force F(t) = 4 sin 2t. Find the subsequent motion of the weight if
       the surrounding medium offers a negligible resistance.

14.46. A 128-lb weight is attached to a spring whereupon the spring is stretched 2 ft and allowed to come to rest. The weight is
       set into motion from rest by displacing the spring 6 in above its equilibrium position and also by applying an external
       force F(t) = 8 sin 4t. Find the subsequent motion of the weight if the surrounding medium offers a negligible resistance.

14.47.   Solve Problem 14.38 if, in addition, the mass is subjected to an externally applied force F(t) = 16 sin 8t.

14.48. A 16-lb weight is attached to a spring whereupon the spring is stretched 1.6 ft and allowed to come to rest. The
       weight is set into motion from rest by displacing the spring 9 in above its equilibrium position and also by applying
       an external force F(t) = 5 cos 2t. Find the subsequent motion of the weight if the surrounding medium offers a
       resistance of —2x Ib.

14.49. Write the steady-state portion of the motion found in Problem 14.48 in the form specified by Eq. (14.13).

14.50. A |--kg mass is attached to a spring having a spring constant of 6 N/m and allowed to come to rest. The mass is set
       into motion by applying an external force F(t) = 24 cos 3t -33 sin 3t. Find the subsequent motion of the mass if the
       surrounding medium offers a resistance of —3x N.

14.51. Write the steady-state portion of the motion found in Problem 14.50 in the form of Eq. (14.13).

14.52. An RCL circuit connected in series with R = 6 ohms, C = 0.02 farad, and L = 0.1 henry has an applied voltage
       E(t) = 6 volts. Assuming no initial current and no initial charge at t = 0 when the voltage is first applied, find the
       subsequent charge on the capacitor and the current in the circuit.

14.53. An RCL circuit connected in series with a resistance of 5 ohms, a condenser of capacitance 4 X 10~4 farad, and an
       inductance of 0.05 henry has an applied emf E(t) = 110 volts. Assuming no initial current and no initial charge on the
       capacitor, find expressions for the current flowing through the circuit and the charge on the capacitor at any time t.

14.54. An RCL circuit connected in series with R = 6 ohms, C = 0.02 farad, and L = 0.1 henry has no applied voltage. Find
       the subsequent current in the circuit if the initial charge on the capacitor is -^ coulomb and the initial current is zero.

14.55. An RCL circuit connected in series with a resistance of 1000 ohm, a condenser of capacitance 4 X 10~6 farad, and
       an inductance of 1 henry has an applied emf E(t) = 24 volts. Assuming no initial current and no initial charge on the
       capacitor, find an expression for the current flowing through the circuit at any time t.

14.56. An RCL circuit connected in series with a resistance of 4 ohms, a capacitor of 1/26 farad, and an inductance of
       1/2 henry has an applied voltage E(t) = 16 cos 2t. Assuming no initial current and no initial charge on the capacitor,
       find an expression for the current flowing through the circuit at any time t.

14.57. Determine the steady-state current in the circuit described in Problem 14.56 and write it in the form of Eq. (14.13).

14.58. An RCL circuit connected in series with a resistance of 16 ohms, a capacitor of 0.02 farad, and an inductance of
       2 henries has an applied voltage E(t) = 100 sin 3t. Assuming no initial current and no initial charge on the capacitor,
       find an expression for the current flowing through the circuit at any time t.

14.59. Determine the steady-state current in the circuit described in Problem 14.56 and write it in the form of Eq. (14.13).

14.60. An RCL circuit connected in series with a resistance of 20 ohms, a capacitor of 10"* farad, and an inductance of
       0.05 henry has an applied voltage E(t) = 100 cos 200t. Assuming no initial current and no initial charge on the
       capacitor, find an expression for the current flowing through the circuit at any time t.

14.61. Determine the steady-state current in the circuit described in Problem 14.60 and write it in the form of Eq. (14.13).
130                            SECOND-ORDER LINEAR DIFFERENTIAL EQUATIONS                                           [CHAP. 14



14.62. An RCL circuit connected in series with a resistance of 2 ohms, a capacitor of 1/260 farad, and an inductance of
       0.1 henry has an applied voltage E(t) = 100 sin (X)t. Assuming no initial current and no initial charge on the capacitor,
       find an expression for the charge on the capacitor at any time t.

14.63.   Determine the steady-state charge on the capacitor in the circuit described in Problem 14.62 and write it in the form
         of Eq. (14.13).

14.64. An RCL circuit connected in series has R = 5 ohms, C = 10~2 farad, L = | henry, and no applied voltage. Find the
       subsequent steady-state current in the circuit. Hint. Initial conditions are not needed.

14.65. An RCL circuit connected in series with R = 5 ohms, C = 10~2 farad, and L = | henry has applied voltage E(t) = sin t.
       Find the steady-state current in the circuit. Hint Initial conditions are not needed.

14.66.   Determine the equilibrium position of a cylinder of radius 3 in, height 20 in, and weight 57rlb that is floating with
         its axis vertical in a deep pool of water of weight density 62.5 lb/ft 3 .

14.67. Find an expression for the motion of the cylinder described in Problem 14.66 if it is disturbed from its equilibrium
       position by submerging an additional 2 in of height below the water line and with a velocity of 1 ft/sec in the
       downward direction.

14.68.   Write the harmonic motion of the cylinder described in Problem 14.67 in the form of Eq. (14.13).

14.69.   Determine the equilibrium position of a cylinder of radius 2 ft, height 4 ft, and weight 600 Ib that is floating with
         its axis vertical in a deep pool of water of weight density 62.5 lb/ft 3 .

14.70. Find an expression for the motion of the cylinder described in Problem 14.69 if it is released from rest with 1 ft of
       its height submerged in water.

14.71. Determine (a) the circular frequency, (b) the natural frequency, and (c) the period for the vibrations described in
       Problem 14.70.

14.72.   Determine (a) the circular frequency, (b) the natural frequency, and (c) the period for the vibrations described in
         Problem 14.67.

14.73.   Determine the equilibrium position of a cylinder of radius 3 cm, height 10 cm, and mass 700 g that is floating with
         its axis vertical in a deep pool of water of mass density 1 g/cm3.

14.74.   Solve Problem 14.73 if the liquid is not water but another substance with mass density 2 g/cm3.

14.75. Determine the equilibrium position of a cylinder of radius 30 cm, height 500 cm, and weight 2.5 X 107 dynes that
       is floating with its axis vertical in a deep pool of water of weight density 980 dynes/cm3.

14.76. Find an expression for the motion of the cylinder described in Problem 14.75 if it is set in motion from its equilib-
       rium position by striking it to produce an initial velocity of 50 cm/sec in the downward direction.

14.77. Find the general solution to Eq. (14.10) and determine its period.

14.78. Determine the radius of a cylinder weighing 5 Ib with its axis vertical that oscillates in a pool of deep water
       (p = 62.5 lb/ft 3 ) with a period of 0.75 sec. Hint: Use the results of Problem 14.77.

14.79. Determine the weight of a cylinder having a diameter of 1 ft with its axis vertical that oscillates in a pool of deep
       water (p = 62.5 lb/ft 3 ) with a period of 2 sec. Hint: Use the results of Problem 14.77.

14.80. A rectangular box of width w, length /, and height h floats in a pool of liquid of weight density p with its height
       parallel to the vertical axis. The box is set into motion by displacing it x0 units from its equilibrium position and
       giving it an initial velocity of v0. Determine the differential equation governing the subsequent motion of the box.

14.81. Determine (a) the period of oscillations for the motion described in Problem 14.80 and (b) the change in that period
       if the length of the box is doubled.
                                                                     CHAPTER 15



                                                                                    Matrices
MATRICES AND VECTORS
     A matrix (designated h\ an uppercase boldface letter) is a rectangular arra\ of elements arranged in horizontal
rows and vertical columns. In this book, the elements of matrices will alwa\s be numbers or functions of the
variable ;. II all the elements are numbers. Ihen the matrix is called a constant matrix.
     Matrices will prove to be very helpful in several ways. For example, we can recast higher-order differential
equations into a sjslem of first-order differential equations using matrices (see Chapter 17). Matrix notation
also provides a compact wa\ of expressing solutions to differential equations (see Chapter 16).

Example 15.1.




are all matrices. In particular, the first matrix is a constant matrix, whereas the last two are not.

     A general matrix A haxing/j rows and n columns is gi\en h\




where a;; represents that element appearing in the /th row and /lh column. A matrix is square if it has the same
number of rows and columns.
     A vector (designated bv a lowercase boldface letter) is a matrix having onl\ one column or one row. (The
third matrix given in Example I5.I is a vector.)



MATRIX ADDITION
    The.viim A + B of two matrices A = |<;,,| and B = I/;,, having the same number of rows and the same number
of columns is the matrix obtained b\ adding the corresponding elements of A and B. That is,




     Matrix addition is both associative and commutalue. Thus. A + (B + C) = (A + B) + C and A + B = B + A.

                                                               131
Copyright © 2006, 1994, 1973 by The McGraw-Hill Companies, Inc. Click here for terms of use.
132                                                  MATRICES                                             [CHAP. 15



SCALAR AND MATRIX MULTIPLICATION
     If A, is either a number (also called a scalar) or a function of t, then AA (or, equivalently, AA) is defined to
be the matrix obtained by multiplying every element of A by A. That is,



    Let A = [fly] and B = [foy] be two matrices such that A has r rows and n columns and B has n rows and p
columns. Then the product AB is defined to be the matrix C = [cy] given by




The element cy is obtained by multiplying the elements of the rth row of A with the corresponding elements of
thej'th column of B and summing the results.
     Matrix multiplication is associative and distributes over addition; in general, however, it is not commutative.
Thus,
                   A(BC) = (AB)C,       A(B + C) = AB + AC,         and      (B + C)A = BA + CA

but, in general,


POWERS OF A SQUARE MATRIX
      If n is a positive integer and A is a square matrix, then




In particular, A2 = AA and A3 = AAA. By definition, A° = I, where




is called an identity matrix. For any square matrix A and identity matrix I of the same size
                                                    AI = IA = A


DIFFERENTIATION AND INTEGRATION OF MATRICES
      The derivative of A = [ay] is the matrix obtained by differentiating each element of A; that is,




Similarly, the integral of A, either definite or indefinite, is obtained by integrating each element of A. Thus,

                                                         and
CHAP. 15]                                              MATRICES                                                 133



THE CHARACTERISTIC EQUATION
    The characteristic equation of a square matrix A is the polynomial equation in A, given by


where det( ) stands for "the determinant of." Those values of A, which satisfy (15.1), that is, the roots of (15.1),
are the eigenvalues of A, a Mold root being called an eigenvalue of multiplicity k.
Theorem 15.1.     (Cayley—Hamilton theorem). Any square matrix satisfies its own characteristic equation.
                  That is, if


                  then



                                               Solved Problems

15.1.   Show that A + B = B + A for




        Since the corresponding elements of the resulting matrices are equal, the desired equality follows.

15.2.   Find 3A - |B for the matrices given in Problem 15.1.




15.3.   Find AB and BA for the matrices given in Problem 15.1.




        Note that for these matrices, AB ^ BA.
134                                                   MATRICES                                          [CHAP. 15




15.4.   Find (2A - B)2 for the matrices given in Problem 15.1.




        and




15.5.   Find AB and BA for




              Since A has three columns and B has two rows, the product AB is not defined. But




15.6.   Find AB and AC if




        Note that for these matrices AB = AC and yet B ^ C. Therefore, the cancellation law is not valid for matrix
        multiplication.
CHAP. 15]                                       MATRICES   135



15.7.   Find Ax if




15.8.   Find     if A =




15.9.   Find




15.10. Find J A dt for A as given in Problem 15.8.




15.11. Find
136                                                    MATRICES                                                   [CHAP. 15




15.12. Find the eigenvalues of A =


            We have




       Hence,



       The characteristic equation of A is X2 - 3X - 10 = 0, which can be factored into (X - 5) (X + 2) = 0. The roots of this
       equation are A,j = 5 and X2 = -2, which are the eigenvalues of A.



15.13. Find the eigenvalues of A? if A =




       Then,




       and the characteristic equation of At is X2 + t2 = 0. The roots of this equation, which are the eigenvalues of At, are
       A,j = it and X 2 = —it, where i = -J-l.




15.14. Find the eigenvalues of A =




       Thus,
CHAP. 15]                                              MATRICES                                                        137



       The characteristic equation of A is



       Hence, the eigenvalues of A are A,j = -3, X2 = 3, and ^3 = 3. Here X = 3 is an eigenvalue of multiplicity two, while
       X = -3 is an eigenvalue of multiplicity one.


15.15. Find the eigenvalues of




       and



       The characteristic equation of A is


       which has roots A,j = 2, X2 = -2, ^3 = -2, and X4 = -2. Thus, X = -2 is an eigenvalue of multiplicity three, whereas
       X = 2 is an eigenvalue of multiplicity one.


15.16. Verify the Cayley-Hamilton theorem for A =


             For this matrix, we have del (A - XI) = X2 - 8X + 33; hence




15.17. Verify the Cayley-Hamilton theorem for the matrix of Problem 15.14.
             For this matrix, we found del (A - XI) = -(X + 3) (X - 3)2; hence
138                                                   MATRICES                                                [CHAP. 15




                                       Supplementary Problems

In Problems 15.18 through 15.38, let




15.18. FindA + B.

15.19. Find3A-2B.

15.20. FindC-D.

15.21. Find2C + 5D.

15.22. FindA + D.

15.23. Findx-3y.

15.24. Find (a) AB and (b) BA.

15.25. Find A2.

15.26. Find A7.

15.27. FindB 2 .

15.28. Find (a) CD and (b) DC.

15.29. Find (a) Ax and (b) xA.

15.30. Find AC.

15.31. Find(C + D)y.

15.32. Find the characteristic equation and eigenvalues of A.

15.33. Find the characteristic equation and eigenvalues of B.

15.34. Find the characteristic equation and eigenvalues of A + B.

15.35. Find the characteristic equation and eigenvalues of 3A.

15.36. Find the characteristic equation and eigenvalues of A + 51.

15.37. Find the characteristic equation and the eigenvalues of C. Determine the multiplicity of each eigenvalue.
CHAP. 15]                                              MATRICES                                                    139



15.38. Find the characteristic equation and the eigenvalues of D. Determine the multiplicity of each eigenvalue.


15.39. Find the characteristic equation and the eigenvalues of A =



15.40. Find the characteristic equation and the eigenvalues of A =


15.41. Find      for A as given in Problem 15.39.


15.42.   Find    for A =


15.43.   Find   Adt for A as given in Problem 15.42.
                                                                   CHAPTER 16


                                                                                                                 At
                                                                                                           e

DEFINITION
     Fora square matrix A.




The infinite series (16.1) converges for every A and ;. so that e       is defined for all square matrices.


COMPUTATION OF e*'
     For actual!} computing the elements of ekt, (16.1) is not generally useful. However, it follows (with some
effort) from Theorem I .1. I. applied to the matrix A/, thai the infinite scries can be reduced to a polynomial in;. Thus:
Theorem 16.1.      If A is a malrK ha\ ing n rows and n columns, then


                   where a$. a,         «„_, are functions o f f which must be determined for each A.

Example 16.1.      When A has two rows and two columns, then /) = 2 and



When A has throe rows and three oiilnmiis, ihen n = ^ and



Theorem 16.2,      Let A he as in t hcorcm 16.1, and define


                   Then if ?., is an eigenvalue of A;.


                   Furthermore, if X; is an eigeinalue of multiplicity k. k> 1. then the following equations are
                   also valid:




                                                            141)

Copyright © 2006, 1994, 1973 by The McGraw-Hill Companies, Inc. Click here for terms of use.
CHAP. 16]                                                        eAt                                                       141



     Note that Theorem 16.2 involves the eigenvalues of A?; these are t times the eigenvalues of A. When com-
puting the various derivatives in (16.7), one first calculates the appropriate derivatives of the expression (16.5)
with respect to A, and then substitutes A = \. The reverse procedure of first substituting A = A, (a function of f)
into (16.5), and then calculating the derivatives with respect to t, can give erroneous results.

Example 16.2. Let A have four rows and four columns and let A = 5t and A = 2t be eigenvalues of At of multiplicities
three and one, respectively. Then n = 4 and




Since A = 5t is an eigenvalue of multiplicity three, it follows that e5t= r(5t), e5t= r'(5t), and e5t= r"(5t). Thus,




Also, since A = 2t is an eigenvalue of multiplicity one, it follows that e2t= r(2t), or



        Notice that we now have four equations in the four unknown a's.

    Method of computation: For each eigenvalue A,, of A?, apply Theorem 16.2 to obtain a set of linear
equations. When this is done for each eigenvalue, the set of all equations so obtained can be solved for a0,
«i, ... , «„_!. These values are then substituted into Eq. (16.2), which, in turn, is used to compute eAt.




                                                  Solved Problems

16.1.      Find eAt for A =

                Here n = 2. From Eq. (16.3),




           and from Eq. (16.5), r(A) = a{k + OQ. The eigenvalues of At are A^ = 4t and A^ = —2t, which are both of multiplicity
           one. Substituting these values successively into Eq. (16.6), we obtain the two equations




           Solving these equations for c^ and OQ, we find that

                                                              and

           Substituting these values into (1) and simplifying, we have
142                                                           eAt                                                   [CHAP. 16




16.2.   Find eM for A =

             Since n = 2, it follows from Eqs. (16.3) and (16.5) that




        and r (X) = c^X + a 0 . The eigenvalues of At are Xj = 2t and X2 = -4f, which are both of multiplicity one. Substituting
        these values successively into (16.6), we obtain



        Solving these equations for a: and aa, we find that




        Substituting these values into (1) and simplifying, we have




16.3.   Find eAt for A =

             Here n = 2; hence,




        and r(k) = cqX + a0. The eigenvalues of At are Xj = it and X2 = —it, which are both of multiplicity one. Substituting
        these values successively into Eq. (16.6), we obtain



        Solving these equations for a: and a 0 and using Euler's relations, we find that




        Substituting these values into (_/), we obtain




16.4.   Find e^' for A =

             Here n = 2. From Eq. (16.3),
CHAP. 16]                                                       eAt                                                            143



        and from Eq. (16.5), r(k) = a^ + a0. Thus, dr(k) I cfk = a^ The eigenvalues of At are A,j = X 2 = 3t, which is a single
        eigenvalue of multiplicity two. It follows from Theorem 16.2 that




        Solving these equations for a: and OQ, we find that



        Substituting these values into (1) and simplifying, we have




16.5.   Find eAt for A =


               Here n = 3. From Eqs. (16.4) and (16.5) we have




        and r (X) = a2X2 + a{k + aQ. Thus,




               Since the eigenvalues of At are A,j = A^ = ^3 = 3t, an eigenvalue of multiplicity three, it follows from Theorem 16.2
        that




        The solution to this set of equations is




        Substituting these values into (1) and simplifying, we obtain
144                                                        eAt                                                  [CHAP. 16




16.6.   Find eAt for A =



             Here n = 3. From Eq. (16.4),




        and from Eq. (16.5), r(k) = c^A,2 + c^A + aQ. The eigenvalues of At are A: = 0 and A2 = Ag = f; hence A = f is an
        eigenvalue of multiplicity two, while X = 0 is an eigenvalue of multiplicity one. It follows from Theorem 16.2 that
        e' = r(t), e' = r'(t), and e° = r(0). Since r'(A) = la^k + a1; these equations become




        which have as their solution




        Substituting these values into (1) and simplifying, we have




16.7.   Find e^' for A =


             Here n = 3. From Eq. (16.4),




        and from Eq. (16.5), r(k) = a2X2 + a:X + a0. The eigenvalues of At are A,j = 0, A^ = ;Y, and Xg = —rt. Substituting
        these values successively into (16.6), we obtain the three equations
CHAP. 16]                                                    eAt                                                           145



        which have as their solution




        Substituting these values into (_/) and simplifying, we have




16.8.   Establish the necessary equations to find eAt if




              Here n = 6, so



        and




        The eigenvalues of At are A,j = A^ = ^3 = t, X4 = X5 = 2t, and Xg = 0. Hence, X = f is an eigenvalue of multiplicity
        three, X = 2f is an eigenvalue of multiplicity two, and X = 0 is an eigenvalue of multiplicity one. It now follows from
        Theorem 16.2 that




        or, more simply,
146                                                               eAt                                               [CHAP. 16



16.9.   Find eAteEt and e(A + E)t for


                                                              and


        and verify that, for these matrices, e^e8' * e(A + B)(.

             Here, A+B =                   Using Theorem 16.1 and the result of Problem 16.3, we find that




        Thus,



16.10. Prove that e^'e3' = <?(A + B)' if and only if the matrices A and B commute.
             If AB = BA, and only then, we have




        and, in general,



        where                        is the binomial coefficient ("n things taken k at a time").

             Now, according to Eq. (16.1), we have for any A and B:




        and also

        We can equate the last series in (3) to the last series in (2) if and only if (1) holds; that is, if and only if A and B
        commute.


16.11. Prove that e^e'** = eAV~s).
             Setting t= 1 in Problem 16.10, we conclude that eAeB = e(A + B) if A and B commute. But the matrices At
        and -As commute, since
                                        (At)(-As) = (AA)(-ts) = (AA)(-st) = (-As)(At)
        Consequently, e 'g- = e< '- > = eA«-s>.
                           A   As   A As
CHAP. 16]                                                   eAt                             147



16.12. Prove that e° = I, where 0 denotes a square matrix all of whose elements are zero.
             From the definition of matrix multiplication, 0" = 0 for n > 1. Hence,




                                         Supplementary Problems

Find e^' for the following matrices A.
                                                                  CHAPTER 17



          Reduction of Linear
       Differential Equations
         to a System of First-
              Order Equations
AN EXAMPLE
     In Chapter 15. we introduced Ihe idea ol 'a matrix wtlh associated concepts. Consider the following second-
order differential equation:




     We see that (!7.l) implies




     Since lhal dcrhalivcs can be expressed in man> ways- using primes or dots are but two of ihem -we let
                                           • Then Kq. (17.1) can be written as the following matrix equation:




because                                              because We note, final h, thai Eq. (17.1) can also be expr




     Note that if .v(0) = 5 and *(()) = - 1 2 in (77.7). then these initial conditions are written as.c(0) = 5, v(0) = -!2.

                                                            148
Copyright © 2006, 1994, 1973 by The McGraw-Hill Companies, Inc. Click here for terms of use.
CHAP. 17]                       REDUCTION OF LINEAR DIFFERENTIAL EQUATIONS                                         149




REDUCTION OF AN nth-ORDER EQUATION
    As in the case of the second-order differential equation, with associated initial conditions, we can recast
higher order initial-value problems into a first-order matrix system as illustrated below:




with bn(t) jt 0, can be reduced to the first-order matrix system




where A(?), f(f), c, and the initial time t0 are known. The method of reduction is as follows.

Step 1. Rewrite (77.5) so that d"xldt" appears by itself. Thus,




            where                                          and

Step 2.   Define n new variables (the same number as the order of the original differential equation);
          Xi(t), x2(t), ..., xn(t), by the equations




          These new variables are interrelated by the equations




Step 3.     Express dxnldt in terms of the new variables. Proceed by first differentiating the last equation of (17.9)
            to obtain




          Then, from Eqs. (77.8) and (77.9),




          For convenience, we rewrite this last equation so that Xi(f), appears before x2(f), etc. Thus,
150                         REDUCTION OF LINEAR DIFFERENTIAL EQUATIONS                                  [CHAP. 17



Step 4. Equations (17.10) and (17.11) are a system of first-order linear differential equations in x^t),
        x2(t), ...,xn(t). This system is equivalent to the single matrix equation ii(t) = A(?)x(?) + f(t) if we
        define




Step 5. Define




         Then the initial conditions (17.6) can be given by the matrix (vector) equation x(?0) = c. This last equa-
         tion is an immediate consequence of Eqs. (17.12), (17.13), and (17.6), since




         Observe that if no initial conditions are prescribed, Steps 1 through 4 by themselves reduce any linear
         differential Eq. (17.5) to the matrix equation x(t) = A.(t)x(t) + f(t).


REDUCTION OF A SYSTEM
    A set of linear differential equations with initial conditions also can be reduced to System (17.7). The
procedure is nearly identical to the method for reducing a single equation to matrix form; only Step 2 changes.
With a system of equations, Step 2 is generalized so that new variables are defined for each of the unknown
functions in the set.
CHAP. 17]                      REDUCTION OF LINEAR DIFFERENTIAL EQUATIONS                                                 151




                                                Solved Problems

17.1.   Put the initial-value problem




        into the form of System (17.7).
             Following Step 1, we write x = - 2x + 8x + e'; hence, a^t) = —2, aQ(t) = 8, and/(f) = e'. Then, defining x^t) = x
        and x2(t) = x (the differential equation is second-order, so we need two new variables), we obtain xl=x2.
        Following Step 3, we find



        Thus,



        These equations are equivalent to the matrix equation x(t) = A(t)x(t) + f(t) if we define




        Furthermore, if we also define c =         then the initial conditions can be given by x(t0) = c, where t0 = 0.


17.2.   Put the initial-value problem




        into the form of System (17.7).
             Proceeding as in Problem 17.1, with ^ replaced by zero, we define




        The differential equation is then equivalent to the matrix equation x(t) = A(t)x(t) + f(t), or simply x(t) = A(t)x(t),

        since f(t) = 0. The initial conditions can be given by x(tQ) = c, if we define tQ = 1 and c =


17.3.   Put the initial-value problem



        into the form of System (17.7).
              Following Step 1, we write x = —x + 3; hence, a^t) = 0, aQ(t) = -1, and/(f) = 3. Then defining x^t) = x and
        x2(t) = x, we obtain xl = x2. Following Step 3, we find



        Thus,
152                            REDUCTION OF LINEAR DIFFERENTIAL EQUATIONS                                           [CHAP. 17



        These equations are equivalent to the matrix equation x(t) = A.(t)x(t) + f(t), if we define




        Furthermore, if we also define




        then the initial conditions take the form x(t0) = c, where t0 = n.


17.4. Convert the differential equation X - 6i + 9x = t into the matrix equation



            Here we omit Step 5, because the differential equation has no prescribed initial conditions. Following Step 1,
        we obtain


        Hence a^t) = 6, aQ(t) = —9, and/(f) = t. If we define two new variables, x^t) = x and x2(t) = x, we have



        Thus,



        These equations are equivalent to the matrix equation x(t) = A.(t)x(t) + f(t) if we define




17.5.   Convert the differential equation




        into the matrix equation x(?) = A(?)x(t) + f(t).
             The given differential equation has no prescribed initial conditions, so Step 5 is omitted. Following Step 1, we
        obtain




        Defining Xi(t) = x, x2(t) = x, and x3(t) = x (the differential equation is third-order, so we need three new variables),
        we have that Xi = x2, and x2 = x3, Following Step 3, we find




        Thus,
CHAP. 17]                       REDUCTION OF LINEAR DIFFERENTIAL EQUATIONS                                                   153



        We set




        Then the original third-order differential equation is equivalent to the matrix equation x(t) = A(t)x(t) + f(t), or, more
        simply, x(0 = A(t)x(t) because f(f) = 0.


17.6.   Put the initial-value problem




        into the form of System (17.7).
             Following Step 1, we obtain




        Hence; a3(t) = 0, a2(t) = e', a^t) = -t2e2', a0(t) = 0, and/(f) = 5. If we define four new variables,




        we obtain x1 = x2, x2 = x3, x3 = x4, and, upon following Step 3,




        Thus,




        These equations are equivalent to the matrix equation x(t) = A(t)x(t) + f(t) if we define




        Furthermore, if we also define c =        then the initial conditions can be given by x(t0) = c, where t0=l.
154                            REDUCTION OF LINEAR DIFFERENTIAL EQUATIONS                                         [CHAP. 17



17.7.   Put the following system into the form of System (17.7):




            Since this system contains a third-order differential equation in x and a second-order differential equation in y,
        we will need three new x-variables and two new y-variables. Generalizing Step 2, we define




        Thus,




        or




        These equations are equivalent to the matrix equation x(t) = A.(t)x(t) + f(t) if we define




        Furthermore, if we define c =       and t0 = 1, then the initial condition can be given by x(t0) = c.




17.8.   Put the following system into the form of System (17.7):




             Since the system contains a second-order differential equation in x and a first-order differential equation in y,
CHAP. 17]                       REDUCTION OF LINEAR DIFFERENTIAL EQUATIONS                                                     155



        we define the three new variables



        Then,



        or,




        These equations are equivalent to the matrix equation x(t) = A.(t)x(t) + f(t) if we define




        If we also define t0 = 0 and c =       then the initial conditions can be given by x(t0) = c.



17.9.   Put the following system into matrix form:




              We proceed exactly as in Problems 17.7 and 17.8, except that now there are no initial conditions to consider.
        Since the system consists of two first-order differential equations, we define two new variables x1(t)=x and
        yi(f) = y. Thus,




        If we define




        then this last set of equations is equivalent to the matrix equation x(t) = A.(t)x(t) + f(t), or simply to x(t) = A.(t)x(t),
        since f(t) = 0.




                                           Supplementary Problems

Reduce each of the following systems to a first-order matrix system.

17.10. x-2x + x = t + l;x(l) = l,x(l) = 2

17.11. 2x + x = 4e';x(0) = l,x(0) = l

17.12. tx - 3x - t2x = sin t; x(2) = 3, x(2) = 4
++156                             REDUCTION OF LINEAR DIFFERENTIAL EQUATIONS   [CHAP. 17



17.13. y + 5y - 2ty = i1 + 1; y(G) = 11, y(0) = 12

17.14. -y + 5y + 6y = 0

17.15.   e"x-tx + x-e'x = Q;
         jc(-l) = 1, jc(-l) = 0, jc(-l) = 1




17.17.   x = t; x(0) = 0, i(0) = 0, jc(0) = 0


17.18. x = x + y-z + t
         y = tx + y-2y + t2+l
         Z = x-y + y + z;
         x(l) = 1, i(l) = 15, y(l) = 0, y(l) = - 7, z(l) = 4

17.19.   x = 2x + 5y + 3
         y = -x-2y;
         x(0) = 0, i(0) = 0, y(0) = 1

17.20.   x = x + 2y
         y = 4x + 3y;
         x(7) = 2,y(7) = -3
                                                                 CHAPTER 18



             Graphical and
     Numerical Methods for
        Solving First-Order
     Differential Equations
QUALITATIVE METHODS
     In Chapter 2, we touched upon the concept of qualitative methods regarding differential equations; that is,
techniques which are used when analytical solutions are difficult or virtually impossible to obtain. In this
chapter, and in the two succeeding chapters, we introduce several qualitative approaches in dealing with
differential equations.


DIRECTION FIELDS
     Graphical methods produce plots of solutions to first-order differential equations of the form



where the derivative appears only on the left side of the equation.

                                                                                                                1
Example 18.1.       (a) For the problem / = -y + x + 2, we have/(jt, y) = -y + x + 2. (b) For the problem / = y + 1, we have
          2
f ( x , y) = y + 1. (c) For the problem y' = 3, we have f ( x , y) = 3. Observe that in a particular problem, f ( x , y) may be
 independent of x, of y, or of x and y.

     Equation (18.1) defines the slope of the solution curve y(x) at any point (x, y) in the plane. A line element
is a short line segment that begins at the point (x, y) and has a slope specified by (18.1); it represents an approxi-
mation to the solution curve through that point. A collection of line elements is a direction field. The graphs of
solutions to (18.1) are generated from direction fields by drawing curves that pass through the points at which
line elements are drawn and also are tangent to those line elements.
     If the left side of Eq. (18.1) is set equal to a constant, the graph of the resulting equation is called an
isocline. Different constants define different isoclines, and each isocline has the property that all line elements

                                                             157
Copyright © 2006, 1994, 1973 by The McGraw-Hill Companies, Inc. Click here for terms of use.
158                    GRAPHICAL METHODS FOR SOLVING DIFFERENTIAL EQUATIONS                                    [CHAP. 18



emanating from points on that isocline have the same slope, a slope equal to the constant that generated the
isocline. When they are simple to draw, isoclines yield many line elements at once which is useful for
constructing direction fields.


EULER'S METHOD
      If an initial condition of the form


is also specified, then the only solution curve of Eq. (18.1) of interest is the one that passes through the initial
point (XQ, y0).
     To obtain a graphical approximation to the solution curve of Eqs. (18.1) and (18.2), begin by constructing
a line element at the initial point (x0, y0) and then continuing it for a short distance. Denote the terminal point
of this line element as (x1, y^. Then construct a second line element at (x1, y^ and continue it a short distance.
Denote the terminal point of this second line element as (x2, y2). Follow with a third line element constructed
at (x2, y2) and continue it a short distance. The process proceeds iteratively and concludes when enough of the
solution curve has been drawn to meet the needs of those concerned with the problem.
     If the difference between successive x values are equal, that is, if for a specified constant h, h = x1 - x0
= x2- x1 = x3- x2 = ..., then the graphical method given above for a first-order initial-value problem is known
as Euler's method. It satisfies the formula



for n= 1,2,3, .... This formula is often written as



where
as required by Eq. (18.1).


STABILITY
     The constant h in Eqs. (18.3) and (18.4) is called the step-size, and its value is arbitrary. In general, the smaller
the step-size, the more accurate the approximate solution becomes at the price of more work to obtain that solution.
Thus, the final choice of h may be a compromise between accuracy and effort. If h is chosen too large, then the
approximate solution may not resemble the real solution at all, a condition known as numerical instability. To
avoid numerical instability, Euler's method is repeated, each time with a step-size one half its previous value, until
two successive approximations are close enough to each other to satisfy the needs of the solver.




                                              Solved Problems

18.1.    Construct a direction field for the differential equation / = 2y - x.
                 U&Kf(x,y) = 2y-x.
         At x= I , y= !,/(!, 1) = 2(1) -1 = 1, equivalent to an angle of 45°.
         Atx = l,y = 2,f(l, 2) = 2(2) - 1 = 3 , equivalent to an angle of 71.6°.
         Atjc = 2, y= l,/(2, 1) = 2(1) -2 = 0, equivalent to an angle of 0°.
         At x = 2, y = 2, f(2, 2) = 2(2) -2 = 2, equivalent to an angle of 63.4°.
         A t j c = 1, y = -!,/(!, -1) = 2(-1)- l=-3, equivalent to an angle of-71.6°.
         Atx = -2,y = -1, /(-2, -1) = 2(-l) - (-2) = 0, equivalent to an angle of 0°.
CHAP. 18]            GRAPHICAL METHODS FOR SOLVING DIFFERENTIAL EQUATIONS                                               159



           Line elements at these points with their respective slopes are graphed in Fig. 18-1. Continuing in this manner
      we generate the more complete direction field shown in Fig. 18-2. To avoid confusion between line elements asso-
      ciated with the differential equation and axis markings, we deleted the axes in Fig. 18-2. The origin is at the center
      of the graph.




                                                       Fig. 18-1




                                                       Fig. 18-2
160                    GRAPHICAL METHODS FOR SOLVING DIFFERENTIAL EQUATIONS                                       [CHAP. 18



18.2.   Describe the isoclines associated with the differential equation defined in Problem 18.1.
             Isoclines are defined by setting / = c, a constant. For the differential equation in Problem 18.1, we obtain



        which is the equation for a straight line. Three such isoclines, corresponding to c = 1, c = 0, and c = —1, are graphed
        in Fig. 18-3. On the isocline corresponding to c = 1, every line element beginning on the isocline will have a slope
        of unity. On the isocline corresponding to c = 0, every line element beginning on the isocline will have a slope
        of zero. On the isocline corresponding to c = -1, every line element beginning on the isocline will have a slope of
        negative one. Some of these line elements are also drawn in Fig. 18-3.




                                                         Fig. 18-3


18.3.   Draw two solution curves to the differential equation given in Problem 18.1.
             A direction field for this equation is given by Fig. 18-2. Two solution curves are shown in Fig. 18-4, one that
        passes through the point (0, 0) and a second that passes through the point (0, 2). Observe that each solution curve
        follows the flow of the line elements in the direction field.


18.4.   Construct a direction field for the differential equation / = x2 + y2 - 1.
              Here/(X y) = x2 + y2 - 1.
        Atx = 0,y = 0, /(O, 0) = (O)2 + (O)2 - 1 = -1, equivalent to an angle of -45°.
        Atx = 1, ;y = 2,/(l,2) = (l) 2 + (2) 2 - 1=4, equivalent to an angle of 76.0°.
        Atx = -l,y = 2,f(-l, 2) = (-1)2 + (2)2 - 1=4, equivalent to an angle of 76.0°.
        At x = 0.25, y = 0.5, f (0.25, 0.5) = (0.25)2 + (0.5)2 - 1 = -0.6875, equivalent to an angle of -34.5°.
        At x = -0.3, y = -0.1, /(-0.3, -0.1) = (-0.3)2 + (-0.1)2 - 1 = -0.9, equivalent to an angle of -42.0°.
              Continuing in this manner, we generate Fig. 18-5. At each point, we graph a short line segment emanating from
        the point at the specified angle from the horizontal. To avoid confusion between line elements associated with the
        differential equation and axis markings, we deleted the axes in Fig. 18-5. The origin is at the center of the graph.


18.5.   Describe the isoclines associated with the differential equation defined in Problem 18.4.
             Isoclines are defined by setting y' = c, a constant. For the differential equation in Problem 18.4, we obtain
        c = x2 + y2 — 1 or x2 + y2 = c+ 1, which is the equation for a circle centered at the origin. Three such isoclines,
CHAP. 18]            GRAPHICAL METHODS FOR SOLVING DIFFERENTIAL EQUATIONS                                              161




                                                       Fig. 18-4




                                                       Fig. 18-5



      corresponding to c = 4, c = l , and c = 0, are graphed in Fig. 18-6. On the isocline corresponding to c = 4,
      every line element beginning on the isocline will have a slope of four. On the isocline corresponding to c = 1, every
      line element beginning on the isocline will have a slope of unity. On the isocline corresponding to c = 0, every
      line element beginning on the isocline will have a slope of zero. Some of these line elements are also drawn in
      Fig. 18-6.
162                   GRAPHICAL METHODS FOR SOLVING DIFFERENTIAL EQUATIONS                                      [CHAP. 18



18.6.   Draw three solution curves to the differential equation given in Problem 18.4.
            A direction field for this equation is given by Fig. 18-5. Three solution curves are shown in Fig. 18-7, the top
        one passes through (0, 1), the middle curve passes through (0, 0), and the bottom curve passes through (0, -1).
        Observe that each solution curve follows the flow of the line elements in the direction field.




                                                        Fig. 18-6




                                                        Fig. 18-7
CHAP. 18]              GRAPHICAL METHODS FOR SOLVING DIFFERENTIAL EQUATIONS                                                  163




                                                          Fig. 18-8


18.7.   Construct a direction field for the differential equation / = x!2.
              Isoclines are defined by setting y' = c, a constant. Doing so, we obtain x = 2c which is the equation for a
        vertical straight line. On the isocline x = 2, corresponding to c = 1, every line element beginning on the isocline will
        have a slope of unity. On the isocline x = —\, corresponding to c = —1/2, every line element beginning on the
        isocline will have a slope of — I . These and other isoclines with some of their associated line elements are drawn
        in Fig. 18-8, which is a direction field for the given differential equation.


18.8.   Draw four solution curves to the differential equation given in Problem 18.7.
             A direction field for this equation is given by Fig. 18-8. Four solution curves are drawn in Fig. 18-9, which
        from top to bottom pass through the points (0, 1), (0, 0), (0, -1), and (0, -2), respectively. Note that the differential
        equation is solved easily by direct integration. Its solution, y = x2/4 + k, where k is a constant of integration, is a
        family of parabolas, one for each value of k.


18.9.   Draw solution curves to the differential equation y' = 5y(y - I).
             A direction field for this equation is given by Fig. 18-10. Two isoclines with line elements having zero slopes
        are the horizontal straight lines y = 0 and y=l. Observe that solution curves have different shapes depending on
        whether they are above both of these isoclines, between them, or below them. A representative solution curve of
        each type is drawn in Fig. 18-ll(a) through (c).
164                   GRAPHICAL METHODS FOR SOLVING DIFFERENTIAL EQUATIONS                                         [CHAP. 18




                                                         Fig. 18-9




                                                        Fig. 18-10




18.10. Give a geometric derivation of Euler's method.
             Assume that yn = y(xn) has already been computed, so that y'n is also known, via Eq. (18.5). Draw a straight
       line l(x) emanating from (xn, yn) and having slope y'n, and use l(x) to approximate y(x) on the interval [xn, xn+1] (see
CHAP. 18]              GRAPHICAL METHODS FOR SOLVING DIFFERENTIAL EQUATIONS                                          165



       Fig. 18-12). The value l(xn+1) is taken to be yn+1. Thus



       and


       Hence, yn+i =yn + hy'n, which is Euler's method.


18.11. Give an analytic derivation of Euler's method.
             Let Y(x) represent the true solution. Then, using the definition of the derivative, we have




       If A.X is small, then




       Setting Ax = h and solving for Y(xn + Ax) = Y(xn+1), we obtain



       Finally, if we use yn and y'n to approximate Y(xn) and Y'(xn), respectively, the right side of (_/) can be used to
       approximate Y(xn+i). Thus,


       which is Euler's method.




                                                        Fig. 18-11
166                  GRAPHICAL METHODS FOR SOLVING DIFFERENTIAL EQUATIONS                                    [CHAP. 18




                                                 Fig. 18-11 (cont.)



18.12. Find y(l) for y' = y — x; y(0) = 2, using Euler's method with
           For this problem, XQ = 0,yQ = 2, and/(X y) = y — x; so Eq. (18.5) becomes y'n = yn- xn. Because h = ^,




       Using Eq. (18.4) with n = 0, 1,2,3 successively, we now compute the corresponding y-values.
CHAP. 18]            GRAPHICAL METHODS FOR SOLVING DIFFERENTIAL EQUATIONS   167




                                           Fig. 18-12


      n = 0:

               But


               Hence.


      n = l:

               But



               Hence,

      n = 2:

               But


               Hence,

      n = 3:

               But



               Hence,
168                  GRAPHICAL METHODS FOR SOLVING DIFFERENTIAL EQUATIONS                                            [CHAP. 18



            Thus,




           Note that the true solution is Y(x) = a* + x + 1, so that 7(1) = 4.718. If we plot (xn, yn) for n = 0, 1, 2, 3, and 4,
      and then connect successive points with straight line segments, as done in Fig. 18-13, we have an approximation to
      the solution curve on [0, 1] for this initial-value problem.


18.13. Solve Problem 18.12 with h = 0.1.
          With h = 0.1, y(1) = y10. As before,                   Then, using Eq. (18.4) with n = 0, 1, ..., 9 successively,
      we obtain




                                                        Fig. 18-13
CHAP. 18]             GRAPHICAL METHODS FOR SOLVING DIFFERENTIAL EQUATIONS                                                169



             The above results are displayed in Table 18-1: For comparison, Table 18-1 also contains results for h = 0.05,
       h = 0.01, and h = 0.005, with all computations rounded to four decimal places. Note that more accurate results are
       obtained when smaller values of h are used.
             If we plot (xn, yn) for integer values of n between 0 and 10, inclusively, and then connect successive points with
       straight line segments, we would generate a graph almost indistinguishable from Fig. 18-13, because graphical
       accuracy with the chosen scales on the axes is limited to one decimal place.


18.14. Find y(0.5) for / = y; y(0) = 1, using Euler's method with h = 0.1.
            For this problem, f ( x , y)=y, x0 = 0, and y0= 1; hence, from Eq. (18.5), y!,=f(xn, yn)=yn. With h = 0.1,
       y(O.S) = ys. Then, using Eq. (18.4) with n = 0, 1, 2, 3, 4 successively, we obtain




       Thus, X0.5) = y5 = 1.610. Note that since the true solution is Y(x) = if, 7(0.5) = e°-5 = 1.649.



                                                         Table 18-1

                               Method:       EULER'S METHOD

                               Problem:      y' = y -x; y(0) = 2

                       xn                               yn                            True solution
                                 h = 0.1     h = 0.05        ft = 0.01   h = 0.005   Y(x) = (f + x + 1

                       0.0       2.0000       2.0000         2.0000       2.0000         2.0000

                       0.1       2.2000       2.2025         2.2046       2.2049         2.2052

                       0.2       2.4100       2.4155         2.4202       2.4208         2.4214

                       0.3       2.6310       2.6401         2.6478       2.6489         2.6499

                       0.4       2.8641       2.8775         2.8889       2.8903         2.8918

                       0.5       3.1105       3.1289         3.1446       3.1467         3.1487

                       0.6       3.3716       3.3959         3.4167       3.4194         3.4221

                       0.7       3.6487       3.6799         3.7068       3.7102         3.7138

                       0.8       3.9436       3.9829         4.0167       4.0211         4.0255

                       0.9       4.2579       4.3066         4.3486       4.3541         4.3596

                       1.0       4.5937       4.6533         4.7048       4.7115         4.7183
170                  GRAPHICAL METHODS FOR SOLVING DIFFERENTIAL EQUATIONS                                      [CHAP. 18



18.15. Find y ( l ) for y' = y; y(0) = 1, using Euler's method with h = 0.1.
            We proceed exactly as in Problem 18.14, except that we now calculate through n = 9. The results of these
       computations are given in Table 18-2. For comparison, Table 18-2 also contains results for h = 0.05, h = 0.001, and
       h = 0.005, with all calculations rounded to four decimal places.

18.16. Find y(l) for / = /+!; y(Q) = 0, using Euler's method with h = 0.1.
               Here,/(*, y)=y2+l, x0 = 0, and y0 = 0; hence, from Eq. (18.5), ?„'=/(*„, yn) = (yn)2 + 1. With A = 0.1,
       y ( l ) = yw. Then, using Eq. (18.4) with n = 0, 1, ..., 9 successively, we obtain




                                                       Table 18-2

                              Method:      EULER'S METHOD
                              Problem:     / = y; y(0) = 1

                      xn                              yn                           True solution
                                h = 0.l    h = 0.05        ft = 0.01   h = 0.005     Y(x) = f
                      0.0       1.0000      1.0000         1.0000       1.0000        1.0000
                      0.1       1.1000      1.1025         1.1046       1.1049        1.1052

                      0.2       1.2100      1.2155         1.2202       1.2208        1.2214
                      0.3       1.3310      1.3401         1.3478       1.3489        1.3499
                      0.4       1.4641      1.4775         1.4889       1.4903        1.4918

                      0.5       1.6105      1.6289         1.6446       1.6467        1.6487
                      0.6       1.7716      1.7959         1.8167       1.8194        1.8221
                      0.7       1.9487      1.9799         2.0068       2.0102        2.0138

                      0.8       2.1436      2.1829         2.2167       2.2211        2.2255
                      0.9       2.3579      2.4066         2.4486       2.4541        2.4596
                      1.0       2.5937      2.6533         2.7048       2.7115        2.7183
CHAP. 18]              GRAPHICAL METHODS FOR SOLVING DIFFERENTIAL EQUATIONS                                             171



                                                         Table 18-3

                                 Method:     EULER'S METHOD

                                 Problem:    / = y2 + 1 ; y(0) = 0

                           xn                           yn                              True solution
                                  h = 0.l    h = 0.05        ft = 0.01   h = 0.005       Y(x) = tan x

                           0.0    0.0000      0.0000         0.0000       0.0000            0.0000

                           0.1    0.1000      0.1001         0.1003       0.1003            0.1003

                           0.2    0.2010      0.2018         0.2025       0.2026            0.2027

                           0.3    0.3050      0.3070         0.3088       0.3091            0.3093

                           0.4    0.4143      0.4183         0.4218       0.4223            0.4228

                           0.5    0.5315      0.5384         0.5446       0.5455            0.5463

                           0.6    0.6598      0.6711         0.6814       0.6827            0.6841

                           0.7    0.8033      0.8212         0.8378       0.8400            0.8423

                           0.8    0.9678      0.9959         1.0223       1.0260            1.0296

                           0.9    1. 1615     1.2055         1.2482       1.2541            1.2602

                           1.0    1.3964      1.4663         1.5370       1.5470            1.5574


         n = 4:



         Continuing in this manner, we find that yw = 1.396.
              The calculations are found in Table 18-3. For comparison, Table 18-3 also contains results for h = 0.05,
         h = 0.01, and h = 0.005, with all computations rounded to four decimal places. The true solution to this problem is
         Y(x) = tan x, hence 7(1) = 1.557.




                                        Supplementary Problems

Direction fields are provided in Problems 18.17 through 18.22. Sketch some of the solution curves.

18.17. See Fig. 18-14.                                                    18.18.     See Fig. 18-15.

18.19.   See Fig. 18-16.                                                  18.20.     See Fig. 18-17.

18.21.   See Fig. 18-18.                                                  18.22.     See Fig. 18-19.

18.23. Draw a direction field for the equation y' = x - y + 1.

18.24. Describe the isoclines for the equation in Problem 18.23.
172   GRAPHICAL METHODS FOR SOLVING DIFFERENTIAL EQUATIONS   [CHAP. 18




                            Fig. 18-14




                            Fig. 18-15
CHAP. 18]   GRAPHICAL METHODS FOR SOLVING DIFFERENTIAL EQUATIONS   173




                                  Fig. 18-16




                                 Fig. 18-17
174   GRAPHICAL METHODS FOR SOLVING DIFFERENTIAL EQUATIONS   [CHAP. 18




                            Fig. 18-18




                            Fig. 18-19
CHAP. 18]              GRAPHICAL METHODS FOR SOLVING DIFFERENTIAL EQUATIONS             175



18.25. Draw a direction field for the equation y' = 2x.

18.26. Describe the isoclines for the equation in Problem 18.25.

18.27. Draw a direction field for the equation y' = y — 1.

18.28. Describe the isoclines for the equation in Problem 18.27.

18.29. Draw a direction field for the equation y' = y - x2.

18.30. Describe the isoclines for the equation in Problem 18.29.

18.31. Draw a direction field for the equation y' = sin x - y.

18.32. Describe the isoclines for the equation in Problem 18.31.

18.33. Find y (1.0) for/ = -y;y(G) = 1, using Euler's method with h = 0.1.

18.34. Find y (0.5) for / = 2x; y (0) = 0, using Euler's method with h = 0.1.

18.35. Find y (0.5) for / = -y + x + 2; y (0) = 2, using Euler's method with h = 0.1.

18.36. Find y (0.5) for y' = 4.x3; y (0) = 0, using Euler's method with h = 0.1.
                                                              CHAPTER 19


        Further Numerical
      Methods for Solving
  First-Order Differential
                Equations

GENERAL REMARKS
    As we have seen in the previous chapter, graphical and numerical methods can be very helpful in obtaining
approximate solutions to initial-value problems at particular points. It is interesting to note that often the only
required operations are addition, subtraction, multiplication, division and functional evaluations.
    In this chapter, we consider only first-order initial-value problems of the form



Generalizations to higher-order problems are given in Chapter 20. Each numerical method will produce
approximate solutions at the points x0, x^, x2, ..., where the difference between any two successive.x-values is
a constant step-size h; that is, xn +1 - xn = h (n = 0, 1,2,...). Remarks made in Chapter 18 on the step-size
remain valid for all the numerical methods presented below.
    The approximate solution at xn will be designated by y(xn), or simply yn. The true solution at xn will be
denoted by either Y(xn) or Yn. Note that once yn is known, Eq. (19.1) can be used to obtain y'n as




    The simplest numerical method is Euler's method, described in Chapter 18.
    A predictor-corrector method is a set of two equations for yn +1. The first equation, called the predictor, is
used to predict (obtain a first approximation to) yn + \, the second equation, called the corrector, is then used to
obtain a corrected value (second approximation) to yn + 1. In general, the corrector depends on the predicted
value.

                                                           176
Copyright © 2006, 1994, 1973 by The McGraw-Hill Companies, Inc. Click here for terms of use.
CHAP. 19]            NUMERICAL METHODS FOR SOLVING DIFFERENTIAL EQUATIONS                                      177



MODIFIED EULER'S METHOD
     This is a simple predictor-corrector method that uses Euler's method (see Chapter 18) as the predictor
and then uses the average value of y' at both the left and right end points of the interval \xn, xn + J
(n = 0, 1,2,...) as the slope of the line element approximation to the solution over that interval. The resulting
equations are:
                                     predictor:

                                     corrector:


For notational convenience, we designate the predicted value of yn + 1 by pyn + 1 . It then follows from Eq. (19.2)
that



The modified Euler's method becomes

                                     predictor:

                                     corrector:




RUNGE-KUTTA METHOD




where




This is not a predictor-corrector method.


ADAMS-BASHFORTH-MOULTON METHOD

                     predictor:

                     corrector:


MILNE'S METHOD

                             predictor:

                             corrector:
178                   NUMERICAL METHODS FOR SOLVING DIFFERENTIAL EQUATIONS                                       [CHAP. 19



STARTING VALUES
     The Adams-Bashforth-Moulton method and Milne's method require information at y0, ylt y2, and y3 to
start. The first of these values is given by the initial condition in Eq. (19.1). The other three starting values are
gotten by the Runge-Kutta method.



ORDER OF A NUMERICAL METHOD
     A numerical method is of order n, where n is a positive integer, if the method is exact for polynomials of
degree n or less. In other words, if the true solution of an initial-value problem is a polynomial of degree n or
less, then the approximate solution and the true solution will be identical for a method of order n.
     In general, the higher the order, the more accurate the method. Euler's method, Eq. (18.4), is of order one,
the modified Euler's method, Eq. (19.4), is of order two, while the other three, Eqs. (19.5) through (19.7), are
fourth-order methods.




                                               Solved Problems

19.1.   Use the modified Euler's method to solve y' = y —x; y(0) = 2 on the interval [0, 1] with h = 0.1.
             Here/(jt, y) = y -x, xa = 0, and ya = 2. From Eq. (19.2) we have y'Q =/(0, 2) = 2-0 = 2. Then using Eqs. (19.4)
        and (19.3), we compute




        Continuing in this manner, we generate Table 19-1. Compare it to Table 18-1.


19.2.   Use the modified Euler's method to solve / = y2 + 1; y(0) = 0 on the interval [0, 1] with h = 0.1.
             Here/(jt, y) = y2 + 1, x0 = 0, and y0 = 0. From (19.2) we have y^ =/(0, 0) = (O)2 + 1 = 1. Then using (19.4) and
CHAP. 19]           NUMERICAL METHODS FOR SOLVING DIFFERENTIAL EQUATIONS                    179



                                                     Table 19-1

                                   Method:       MODIFIED EULER'S METHOD

                                   Problem:    y' = y-x- y(Q) = 2


                            xn                   ft = 0.1
                                                                         True solution
                                        pyn                 yn          Y(x) = (f + x + 1

                           0.0           —              2.0000000          2.0000000

                           0.1       2.2000000          2.2050000          2.2051709

                           0.2       2.4155000          2.4210250          2.4214028

                           0.3       2.6431275          2.6492326          2.6498588

                           0.4       2.8841559          2.8909021          2.8918247

                           0.5       3.1399923          3.1474468          3.1487213

                           0.6       3.4121914          3.4204287          3.4221188

                           0.7       3.7024715          3.7115737          3.7137527

                           0.8       4.0127311          4.0227889          4.0255409

                           0.9       4.3450678          4.3561818          4.3596031

                           1.0       4.7017999          4.7140808          4.7182818




      (19.3), we compute




      Continuing in this manner, we generate Table 19-2. Compare it to Table 18-3.
180                   NUMERICAL METHODS FOR SOLVING DIFFERENTIAL EQUATIONS                                  [CHAP. 19



                                                       Table 19-2

                                    Method:        MODIFIED EULER'S METHOD

                                    Problem:     / = y2 + 1 ; y(0) = 0

                             xn                    ft = 0.1
                                                                          True solution
                                          pyn                 yn           Y(x) = tan x

                             0.0           —              0.0000000          0.0000000

                             0.1       0.1000000          0.1005000          0.1003347

                             0.2       0.2015100          0.2030353          0.2027100

                             0.3      0.3071577           0.3098138         0.3093363

                             0.4      0.4194122           0.4234083         0.4227932

                             0.5      0.5413358           0.5470243         0.5463025

                             0.6      0.6769479           0.6848990         0.6841368

                             0.7      0.8318077           0.8429485         0.8422884

                             0.8       1.0140048          1.0298869          1.0296386

                             0.9       1.2359536          1.2592993          1.2601582

                             1.0       1.5178828          1.5537895          1.5574077




19.3.   Find y(l.6) for y1 = 2x; y(l) = 1 using the modified Euler's method with h = 0.2.
             Here/0, y) = 2x,x0 = 1, and ya = 2. From Eq. (19.2) we have y'Q =/(!, 2) = 2(1) = 2. Then using (19.4) and
        (19.3), we compute




        The true solution is Y(x)=x2; hence 7(1.6) = y(l.6) = (1.6)2 = 2.56. Since the true solution is a second-degree
        polynomial and the modified Euler's method is a second-order method, this agreement is expected.
CHAP. 19]             NUMERICAL METHODS FOR SOLVING DIFFERENTIAL EQUATIONS                             181



19.4.   Use the Runge-Kutta method to solve / = y - x; y(0) = 2 on the interval [0, 1] with h = 0.1.
             Here/(X y) = y - x. Using Eq. (19.5) with n = 0, 1, ... , 9, we compute




        Continuing in this manner, we generate Table 19-3. Compare it with Table 19-1.



19.5.   Use the Runge-Kutta method to solve / = y; y(0) = 1 on the interval [0,1] with h = 0.1.
             Here/(X y) = y. Using Eq. (19.5) with n = 0, 1, ... , 9, we compute
        n = 0:
182   NUMERICAL METHODS FOR SOLVING DIFFERENTIAL EQUATIONS    [CHAP. 19



                                   Table 19-3

                Method:      RUNGE-KUTTA METHOD

                Problem:     y' = y-x; y(0) = 2

                 xn         h = 0.1          True solution
                              yn            Y(x) = ex + x+l

                 0.0       2.0000000            2.0000000

                 0.1       2.2051708            2.2051709

                 0.2       2.4214026            2.4214028

                 0.3       2.6498585            2.6498588

                 0.4       2.8918242            2.8918247

                 0.5       3.1487206            3.1487213

                 0.6       3.4221180            3.4221188

                 0.7       3.7137516            3.7137527

                 0.8       4.0255396            4.0255409

                 0.9       4.3596014            4.3596031

                 1.0       4.7182797            4.7182818
CHAP. 19]             NUMERICAL METHODS FOR SOLVING DIFFERENTIAL EQUATIONS                             183




        Continuing in this manner, we generate Table 19-4.


                                                         Table 19-4

                                     Method:      RUNGE-KUTTA METHOD

                                     Problem:     y' = y;y(Q)=l

                                      xn         ft = 0.1             True solution
                                                    yn                  Y(x) = ex

                                      0.0       1.0000000              1.0000000

                                      0.1       1.1051708              1.1051709

                                      0.2       1.2214026              1.2214028

                                      0.3       1.3498585              1.3498588

                                      0.4       1.4918242              1.4918247

                                      0.5       1.6487206              1.6487213

                                      0.6       1.8221180              1.8221188

                                      0.7       2.0137516              2.0137527

                                      0.8       2.2255396              2.2255409

                                      0.9       2.4596014              2.4596031

                                      1.0       2.7182797              2.7182818



19.6.   Use the Runge-Kutta method to solve / = y2 + 1; y(0) = 0 on the interval [0,1] with h = 0.1.
            Here/(X y) = y2 + 1. Using Eq. (19.5) we compute
184                    NUMERICAL METHODS FOR SOLVING DIFFERENTIAL EQUATIONS                                       [CHAP. 19




        Continuing in this manner, we generate Table 19-5.


19.7.   Use the Adams-Bashforth-Moulton method to solve / = y - x; y(0) = 2 on the interval [0,1] with h = 0.1.
             Here f ( x , y) = y — x, XQ = 0, and yQ = 2. Using Table 19-3, we find the three additional starting values to be
        y1 = 2.2051708, y2 = 2.4214026, and y3 = 2.6498585. Thus,




        Then, using Eqs. (19.6), beginning with n = 3, and Eq. (19.3), we compute
CHAP. 19]           NUMERICAL METHODS FOR SOLVING DIFFERENTIAL EQUATIONS           185



                                                      Table 19-5

                                   Method:      RUNGE-KUTTA METHOD

                                   Problem:     / = y2 + 1 ; >>(0) = 0

                                    xn         h = 0.l             True solution
                                                 yn                 Y(x) = tan x

                                   0.0        0.0000000             0.0000000

                                   0.1        0.1003346             0.1003347

                                   0.2        0.2027099             0.2027100

                                   0.3        0.3093360             0.3093363

                                   0.4        0.4227930             0.4227932

                                   0.5        0.5463023             0.5463025

                                   0.6        0.6841368             0.6841368

                                   0.7        0.8422886             0.8422884

                                   0.8        1.0296391             1.0296386

                                   0.9        1.2601588             1.2601582

                                    1.0       1.5574064             1.5574077




      Continuing in this manner we generate Table 19-6.
186                   NUMERICAL METHODS FOR SOLVING DIFFERENTIAL EQUATIONS                                       [CHAP. 19



                                                        Table 19-6

                             Method:       ADAMS-BASHFORTH-MOULTON METHOD

                             Problem:      y' = y-x; y(0) = 2

                              xn                    h = 0.1
                                                                             True solution
                                           pyn                  yn          Y(x) = (f + x + 1

                              0.0           —             2.0000000             2.0000000

                              0.1           —             2.2051708             2.2051709

                              0.2           —             2.4214026             2.4214028

                              0.3           —             2.6498585             2.6498588

                              0.4       2.8918201         2.8918245             2.8918247

                              0.5       3.1487164         3.1487213             3.1487213

                              0.6       3.4221137         3.4221191             3.4221188

                              0.7       3.7137473         3.7137533             3.7137527

                              0.8       4.0255352         4.0255418             4.0255409

                              0.9       4.3595971         4.3596044             4.3596031

                              1.0       4.7182756         4.7182836             4.7182818



19.8.   Use the Adams-Bashforth-Moulton method to solve y' = y1 + 1; y(0) = 0, on the interval [0, 1] with
        h = 0.l.
             Here f(x, y) = y2 + 1, x0 = 0, and y0 = 0. Using Table 19-5, we find the three additional starting values to be
        y1 = 0.1003346, y2 = 0.2027099, and y3 = 0.3093360. Thus,




        Then, using Eqs. (19.6), beginning with n = 3, and Eq. (19.3), we compute
CHAP. 19]           NUMERICAL METHODS FOR SOLVING DIFFERENTIAL EQUATIONS          187




      Continuing in this manner, we generate Table 19-7.



                                                    Table 19-7

                          Method:      ADAMS-BASHFORTH-MOULTON METHOD

                          Problem:     y' = y2+l, y(0) = 0

                           xn                  h = 01
                                                                  True solution
                                        pyn                yn      Y(x) = tan x

                           00            —            0 0000000     0 0000090

                           01            —            0 1003346     0 1003347

                           02            —            0 2027099     0 2027100

                           03            —            0 3093360     0 3093363

                           04        04227151         0 4227981     0 4227932

                           05        0 5461974        05463149      0 5463025

                           06        0 6839784        06841611      0 6841368

                           07        0 8420274        08423319      0 8422884

                           08        1 0291713        1 0297142     1 0296386

                           09        1 2592473        1 2602880     1 2601582

                           10        1 5554514        1 5576256     1 5574077
188                    NUMERICAL METHODS FOR SOLVING DIFFERENTIAL EQUATIONS                                            [CHAP. 19




19.9.   Use the Adams-Bashforth-Moulton method to solve / = 2xyl(x2 - y2); y ( l ) = 3 on the interval [1, 2]
        with h = 0.2.
              Here f ( x , y) = 2xy/(x2 - y2), x0=l and ya = 3. With A = 0.2, x1 =xa + h = 1.2, x2 = x1 + h = 1.4, and
        x3 = x2 + h= 1.6. Using the Runge-Kutta method to obtain the corresponding y-values needed to start the
        Adams-Bashforth-Moulton method, we find y1 = 2.8232844, y2 = 2.5709342, and y3 = 2.1321698. It then follows
        from Eq. (19.3) that




        Then, using Eqs. (19.6), beginning with n = 3, and Eq. (19.3), we compute




            These results are troubling because the corrected values are not close to the predicted values as they should be.
        Note that ys is significantly different from pys and y'4 is significantly different from py'4. In any predict or-correct or
        method, the corrected values of y and / represent a fine-tuning of the predicted values, and not a major change.
        When significant changes occur, they are often the result of numerical instability, which can be remedied by a
        smaller step-size. Sometimes, however, significant differences arise because of a singularity in the solution.
             In the computations above, note that the derivative at x = 1.8, namely 81.667, generates a nearly vertical slope
        and suggests a possible singularity near 1.8. Figure 19-1 is a direction field for this differential equation. On this
CHAP. 19]           NUMERICAL METHODS FOR SOLVING DIFFERENTIAL EQUATIONS                                              189




                                                       Fig. 19.1



      direction field we have plotted the points (XQ, yQ) through (jc4, y4) as determined by the Adams-Bashforth-Moulton
      method and then sketched the solution curve through these points consistent with the direction field. The cusp
      between 1.6 and 1.8 is a clear indicator of a problem.
           The analytic solution to the differential equation is given in Problem 4.14 as x2 + y2 = ky. Applying
      the initial condition, we find k= 10/3, and then using the quadratic formula to solve explicitly for y,
      we obtain the solution




      This solution is only defined through x = 5/3 and is undefined after that.


19.10. Redo Problem 19.7 using Milne's method.
           The values of y0, yi, y2, y?, and their derivatives are exactly as given in Problem 19.7. Using Eqs. (19.7) and
      (19.3), we compute
190                 NUMERICAL METHODS FOR SOLVING DIFFERENTIAL EQUATIONS                                       [CHAP. 19




      Continuing in this manner, we generate Table 19-8.


19.11. Redo Problem 19.8 using Milne's method.
           The values of y0, yi, y2, y^, and their derivatives are exactly as given in Problem 19.8. Using Eqs. (19.7) and
      (19.3), we compute
CHAP. 19]           NUMERICAL METHODS FOR SOLVING DIFFERENTIAL EQUATIONS           191



                                                  Table 19-8

                                Method:       MILNE'S METHOD

                                Problem:     y' = y~x; y(0) = 2

                         xn                   h = 0.1
                                                                   True solution
                                     pyn                   yn     Y(x) = ex+x+l

                        0.0           —             2.0000000        2.0000000

                        0.1           —             2.2051708        2.2051709

                        0.2           —             2.4214026        2.4214028

                        0.3           —             2.6498585       2.6498588

                        0.4       2.8918208         2.8918245       2.8918247

                        0.5       3.1487169         3.1487209       3.1487213

                        0.6       3.4221138         3.4221186       3.4221188

                        0.7       3.7137472         3.7137524       3.7137527

                        0.8       4.0255349         4.0255407       4.0255409

                        0.9       4.3595964         4.3596027       4.3596031

                         1.0      4.7182745         4.7182815       4.7182818




      Continuing in this manner, we generate Table 19-9.
192                  NUMERICAL METHODS FOR SOLVING DIFFERENTIAL EQUATIONS                                   [CHAP. 19



                                                      Table 19-9

                                         Method:       MILNE'S METHOD

                                        Problem:       / = y2 + 1 ; >>(0) = 0

                             xn                   h = 0.l
                                                                            True solution
                                         pyn                   yn            Y(x) = lanx

                            0.0           —             0.0000000               0.0000000

                            0.1           —             0.1003346               0.1003347

                            0.2           —             0.2027099               0.2027100

                            0.3           —             0.3093360               0.3093363

                            0.4       0.4227227         0.4227946               0.4227932

                            0.5       0.5462019         0.5463042               0.5463025

                            0.6       0.6839791         0.6841405               0.6841368

                            0.7       0.8420238         0.8422924               0.8422884

                            0.8       1.0291628             1.0296421           1.0296386

                            0.9       1.2592330             1.2601516           1.2601582

                            1.0       1.5554357             1.5573578           1.5574077




19.12. Use Milne's method to solve / = y; y(0) = 1 on the interval [0, 1] with h = 0.1.
            Here f ( x , y)=y, x0 = 0, and yo=l. From Table 19-4, we find as the three additional starting values
       y1= 1.1051708, y2= 1.2214026, and y3 = 1.3498585. Note that y{ = yi, y2 = y2, and y3=y3. Then, using Eqs. (19.7)
       and (19.3) and we compute
CHAP. 19]           NUMERICAL METHODS FOR SOLVING DIFFERENTIAL EQUATIONS                193




      Continuing in this manner, we generate Table 19-10.




                                                   Table 19-10

                                       Method:      MILNE'S METHOD

                                       Problem:     y' = y; y(ff) = 1

                           xn                  ft = 0.1
                                                                        True solution
                                        pyn                 yn            Y(x) = ex

                           0.0           —            1.0000000           1.0000000

                           0.1           —            1.1051708           1.1051709

                           0.2           —            1.2214026           1.2214028

                           0.3           —            1.3498585           1.3498588

                           0.4       1.4918208        1.4918245           1.4918247

                           0.5       1.6487169        1.6487209           1.6487213

                           0.6       1.8221138        1.8221186           1.8221188

                           0.7      2.0137472         2.0137524           2.0137527

                           0.8      2.2255349         2.2255407           2.2255409

                           0.9      2.4595964         2.4596027           2.4596031

                           1.0      2.7182745         2.7182815           2.7182818
194                    NUMERICAL METHODS FOR SOLVING DIFFERENTIAL EQUATIONS                                      [CHAP. 19




                                        Supplementary Problems

Carry all computations to three decimal places.

19.13. Use the modified Euler's method to solve y' = —y + x + 2; y(0) = 2 on the interval [0, 1] with h = 0.1.

19.14. Use the modified Euler's method to solve y' = -y; y(0) = 1 on the interval [0, 1] with h = 0.1.

19.15. Use the modified Euler's method to solve                   XI) = 3 on the interval [1,2] with h = 0.2.

19.16. Use the modified Euler's method to solve y' = x; y(2) = 1 on the interval [2, 3] with h = 0.25.

19.17. Use the modified Euler's method to solve y' = 4.x3; y(2) = 6 on the interval [2, 3] with h = 0.2.

19.18. Redo Problem 19.13 using the Runge-Kutta method.

19.19. Redo Problem 19.14 using the Runge-Kutta method.

19.20. Redo Problem 19.15 using the Runge-Kutta method.

19.21. Redo Problem 19.17 using the Runge-Kutta method.

19.22. Use the Runge-Kutta method to solve / = 5x4; y(0) = 0 on the interval [0, 1] with h = 0.1.

19.23. Use the Adams-Bashforth-Moulton method to solve y' = y; y(0) = 1 on the interval [0, 1] with h = 0.1.

19.24. Redo Problem 19.13 using the Adams-Bashforth-Moulton method.

19.25. Redo Problem 19.14 using the Adams-Bashforth-Moulton method.

19.26. Redo Problem 19.15 using the Adams-Bashforth-Moulton method.

19.27. Redo Problem 19.13 using Milne's method.

19.28. Redo Problem 19.14 using Milne's method.
                                                                   CHAPTER 20



     Numerical Methods for
      Solving Second-Order
     Differential Equations
                                                                Via Systems
SECOND-ORDER DIFFERENTIAL EQUATIONS
     In Chapter 17. we showed how a second (or higher)-order differeiilial equation could he expressed as a
system of first-order differential equations.
     In this chapter we investigate several numerical techniques dealing with such sjslems.
     In the following s\stem of initial-value problems, v and .: are functions of x,




We note that. w'\thy'=f(x,y,z) = z. System (20./) represenls ihe second-order initial-value problem



Standard form for a svslcm of three equations is




If. in such a system, /(.v, v, c, vt 1 ) = ;. and g(x, v, ;, w) = vv. ihcn sjslem (20.2) represents ihu ihird-ordcr i n i t i a l -
value problem




                                                               195
Copyright © 2006, 1994, 1973 by The McGraw-Hill Companies, Inc. Click here for terms of use.
196                        SOLVING SECOND-ORDER DIFFERENTIAL EQUATIONS                               [CHAP. 20



     The formulas that follow are for systems of two equations in standard form (20.1) Generalizations to
systems of three equations in standard form (20.2) or systems with four or more equations are straightforward.


EULER'S METHOD




RUNGE-KUTTA METHOD




where




ADAMS-BASHFORTH-MOULTON METHOD

                        predictors:




                        correctors:




Corresponding derivatives are calculated from System (20.1). In particular,




The derivatives associated with the predicted values are obtained similarly, by replacing y and z in Eq. (20.6)
with py and pz, respectively. As in Chapter 19, four sets of starting values are required for the
Adams-Bashforth-Moulton method. The first set comes directly from the initial conditions; the other three sets
are obtained from the Runge-Kutta method.
CHAP. 20]                     SOLVING SECOND-ORDER DIFFERENTIAL EQUATIONS                                                  197




                                                Solved Problems

20.1.   Reduce the initial-value problem y" -y = x; y(0) = 0, / (0) = 1 to System (20.7).
             Defining z = y', we have z(0) = y'(0) = 1 and z' = y". The given differential equation can be rewritten as
        y" = y + x, or z' = y + x. We thus obtain the first-order system




20.2.   Reduce the initial-value problem /' - 3/ + 2y = 0; y(0) = -I, y'(0) = 0 to System (20.7).
             Defining z = y', we have z(0) = y'(0) = 0 and z' = y". The given differential equation can be rewritten as
        y" = 3y' — 2y, or z' = 3z — 2y. We thus obtain the first-order system




20.3.   Reduce the initial-value problem 3x2y" - xy' + y = 0; y(l) = 4, /(I) = 2 to System (20.7).
             Defining z = y', we have z(l) = y'(l) = 2, and z' = y". The given differential equation can be rewritten as




        or

        We thus obtain the first-order system




20.4.   Reduce the initial-value problem y'" - 2xy" + 4y'-x2y=l; y(0) = 1, /(O) = 2, /'(O) = 3 to System (20.2).
             Following Steps 1 through 3 of Chapter 17, we obtain the system




        To eliminate subscripting, we define y = y\,Z = y^, and w = y3. The system then becomes
198                              SOLVING SECOND-ORDER DIFFERENTIAL EQUATIONS                                        [CHAP. 20



20.5.   Use Euler's method to solve /' - y = x; y (0) = 0, /(O) = 1 on the interval [0,1] with h = 0.1.
             Using the results of Problem 20.1, we have/(jt, y, z) = z, g(x, y,z)=y + x,x0 = 0, y0 = 0, and z0 = 1. Then, using
        (20.3), we compute




        Continuing in this manner, we generate Table 20-1.


                                                     Table 20-1

                                    Method:      EULER'S METHOD

                                    Problem:     y" - y = x; y(0) = 0, /(O) = 1

                           xn                    ft = 0.1
                                                                           True solution
                                         yn                   Zn         Y(x) = ex-e~x-x

                           0.0          0.0000              1.0000            0.0000
                           0.1          0.1000              1.0000            0.1003
                           0.2          0.2000              1.0200            0.2027
                           0.3          0.3020              1.0600            0.3090
                           0.4          0.4080              1.1202            0.4215
                           0.5          0.5200              1.2010            0.5422
                           0.6          0.6401              1.3030            0.6733
                           0.7          0.7704              1.4270            0.8172
                           0.8          0.9131              1.5741            0.9762
                           0.9          1.0705              1.7454            1.1530
                           1.0          1.2451              1.9424            1.3504


20.6.   Use Euler's method to solve y" - 3y' + 2y = 0; y(0) = -1, /(O) = 0 on the interval [0, 1] with
        A = 0.1.
             Using the results of Problem 20.2, we have/(jc, y, z) = Z, g(x, y, z) = 3z — 2y, x0 = 0,y0 = —1, and
CHAP. 20]                     SOLVING SECOND-ORDER DIFFERENTIAL EQUATIONS                                                  199



        ZQ = 0. Then, using (20.3), we compute




        Continuing in this manner, we generate Table 20-2.


                                                        Table 20-2

                                      Method:       EULER' S METHOD

                                      Problem:      /' - 3/ + 2y = 0 ; y(0) = - 1 , /(O) = 0

                               xn                   ft = 0.1
                                                                               True solution
                                             yn                  Zn           Y(x) = e2*-2<?

                              0.0        -1.0000               0.0000           -1.0000

                              0.1        -1.0000               0.2000          -0.9889

                              0.2        -0.9800               0.4600          -0.9510

                              0.3        -0.9340               0.7940          -0.8776

                              0.4        -0.8546               1.2190          -0.7581

                              0.5        -0.7327               1.7556          -0.5792

                              0.6        -0.5571               2.4288          -0.3241

                              0.7        -0.3143               3.2689            0.0277

                              0.8          0.0126              4.3125            0.5020

                              0.9          0.4439              5.6037            1.1304

                              1.0          1.0043              7.1960            1.9525



20.7.   Use the Runge-Kutta method to solve y" -y = x; y(0) = 0, /(O) = 1 on the interval [0, 1] with h = 0.1.
             Using the results of Problem 20.1, we have/(jc, y, z) = Z, g(x, y,z)=y + x,xQ = 0, yQ = 0, and z0 = 1- Then, using
        (20.4) and rounding all calculations to three decimal places, we compute:
200   SOLVING SECOND-ORDER DIFFERENTIAL EQUATIONS   [CHAP. 20
CHAP. 20]                     SOLVING SECOND-ORDER DIFFERENTIAL EQUATIONS                                                  201



        Continuing in this manner, but rounding to seven decimal places, we generate Table 20-3.


                                                         Table 20-3

                                       Method:      RUNGE-KUTTA METHOD

                                       Problem: y"-y = x; y(0) = 0, /(O) = 1

                               xn                   ft = 0.1
                                                                               True solution
                                             yn                 zn           Y(x) = e*-e~x-x

                               0.0       0.0000000          1.0000000             0.0000000

                               0.1       1.1003333          1.0100083             0.1003335

                               0.2       0.2026717          1.0401335             0.2026720

                               0.3       0.3090401          1.0906769             0.3090406

                               0.4       0.4215040          1.1621445             0.4215047

                               0.5       0.5421897          1.2552516             0.5421906

                               0.6       0.6733060          1.3709300             0.6733072

                               0.7       0.8171660          1.5103373             0.8171674

                               0.8       0.9762103          1.6748689             0.9762120

                               0.9       1.1530314          1.8661714             1.1530335

                               1.0       1.3504000          2.0861595             1.3504024



20.8.   UsetheRunge-Kuttamethodtosolve/'-3}; + 2}; = 0;XO) = -l,/(0) = Oontheinterval [0,1] withA = 0.1.
             Using the results of Problem 20.2, we have/(jc, y, z) = I, g(x, y, z) = 3z — 2y, XQ = 0,yQ = —1, and z0 = 0. Then,
        using (20.4), we compute:
202                           SOLVING SECOND-ORDER DIFFERENTIAL EQUATIONS                                           [CHAP. 20




        Continuing in this manner, we generate Table 20-4.

                                                         Table 20-4

                                      Method:       RUNGE-KUTTA METHOD

                                      Problem:      /' - 3/ + 2y = 0 ; y(0) = - 1 , /(O) = 0

                               xn                   h = 0.1
                                                                               True solution
                                             yn                 zn            Y(x) = e21 - 2ex

                              0.0      -1.0000000          0.0000000            -1.0000000

                              0.1      -0.9889417          0.2324583           -0.9889391

                              0.2      -0.9509872          0.5408308           -0.9509808

                              0.3      -0.8776105          0.9444959           -0.8775988

                              0.4      -0.7581277          1.4673932           -0.7581085

                              0.5      -0.5791901          2.1390610           -0.5791607

                              0.6      -0.3241640          2.9959080           -0.3241207

                              0.7        0.0276326         4.0827685             0.0276946

                              0.8        0.5018638         5.4548068             0.5019506

                              0.9        1.1303217         7.1798462              1.1304412

                              1.0        1.9523298         9.3412190              1.9524924



20.9.   Use the Runge-Kutta method to solve 3.x2/' -xy' + y = 0; y(l) = 4, /(I) = 2 on the interval [1,2]
        with h = 0.2.
             It follows from Problem 20.3, we have/(jc, y, z) = Z, g(x, y, z) = (xz — y)l(3x2), x0 =l,y0 = 4, and
        ZQ = 2. Using (20.4), we compute:
CHAP. 20]                    SOLVING SECOND-ORDER DIFFERENTIAL EQUATIONS                                                  203




       Continuing in this manner, we generate Table 20-5.

                                                          Table 20-5

                                        Method:       RUNGE-KUTTA METHOD

                                        Problem:      3x2y" -xy' + y = 0; y(l) = 4, /(I) = 2

                                 xn                   ft = 0.2
                                                                                 True solution
                                               yn                 •7
                                                                  •^n           Y(x) = x + 3x113

                                1.0        4.0000000         2.0000000             4.0000000

                                1.2        4.3879715         1.8855447             4.3879757

                                1.4        4.7560600         1.7990579             4.7560668

                                1.6        5.1088123         1.7309980             5.1088213

                                1.8        5.4493105         1.6757935             5.4493212

                                2.0        5.7797507         1.6299535             5.7797632



20.10. Use the Adams-Bashforth-Moulton method to solve 3.x2)/' - xy' + y = 0; y(l) = 4, /(I) = 2 on the interval
       [1,2] with/; = 0.2.
            It follows from Problem 20.3, that/(^, y, z) = z, g(x, y, z) = (xz - y)/^), X0=l,y0 = 4,andz0 = 2. From Table 20-5,
204                       SOLVING SECOND-ORDER DIFFERENTIAL EQUATIONS               [CHAP. 20



      we have

                                      xl = 1.2    yi = 4.3879715   Zi = 1.8855447

                                      x2 = 1.4    y2 = 47560600    z2 = 1.7990579

                                      jc3 = 1.6   y3 = 5.1088123   z3 = 1.7309980

      Using (20.6), we compute




      Then using (20.5), we compute
CHAP. 20]                     SOLVING SECOND-ORDER DIFFERENTIAL EQUATIONS                              205




      See Table 20-6.




                                                     Table 20-6

                 Method:       ADAMS-BASHFORTH-MOULTON METHOD

                 Problem:      3x2y" -xy' + y = Q; y(l) = 4, /(I) = 2

            xn                                 h = 0.2
                                                                                     True solution
                        pyn              PZn                 yn           •7
                                                                         •^n        Y(x) = x + 3x113

        1.0             —                —               4.0000000      2.0000000      4.0000000

        1.2             —                —               4.3879715      1.8855447      4.3879757

        1.4             —                —               4.7560600      1.7990579      4.7560668

        1.6             —                —               5.1088123      1.7309980      5.1088213

        1.8       5.4490260          1.6767876           5.4493982      1.6757705      5.4493212

        2.0       5.7796793          1.6303746           5.7798739      1.6299149      5.7797632
206                        SOLVING SECOND-ORDER DIFFERENTIAL EQUATIONS                                     [CHAP. 20



20.11. Use the Adams-Bashforth-Moulton method to solve y"-y = x; y(0) = 0, /(O) = 1 on the interval [0, 1]
       with/; = 0.1.
           It follows from Problem 20.1 that/(jc, y,z) = z and g(x, y, z)=y + x and from Table 20-3 that
                            XQ = 0          y0 = 0                  za = 1

                            jd=0.1          y1 = 0.1003333          Zi = 1.0100083

                            x2=0.2          y2 = 0.2026717          z2 = 1.0401335

                            x = 0.3         y, = 0.3090401          z, = 1.0906769
       Using (20.6), we compute




       Then using (20.5), we compute
CHAP. 20]                          SOLVING SECOND-ORDER DIFFERENTIAL EQUATIONS                      207



       Continuing in this manner, we generate Table 20-7.


                                                         Table 20-7

                      Method:         ADAMS-BASHFORTH-MOULTON METHOD

                      Problem:        y"-y = x; y(0) = 0, /(O) = 1

            xn                                     h = 0.l
                                                                                    True solution
                           pyn               PZn             yn          •7
                                                                         •^n      Y(x) = ef-e~x-x

            0.0                —             —           0.0000000    1.0000000     0.0000000

            0.1                —             —           0.1003333    1.0100083     0.1003335

            0.2                —             —           0.2026717    1.0401335     0.2026720

            0.3                —             —           0.3090401    1.0906769     0.3090406

            0.4        0.4214970          1.1621432      0.4215046    1.1621445     0.4215047

            0.5        0.5421832          1.2552496      0.5421910    1.2552516     0.5421906

            0.6        0.6733000          1.3709273      0.6733080    1.3709301     0.6733072

            0.7        0.8171604          1.5103342      0.8171687    1.5103378     0.8171674

            0.8        0.9762050          1.6748654      0.9762138    1.6748699     0.9762120

            0.9        1.1530265          1.8661677      1.1530358    1.8661731     1.1530335

            1.0        1.3503954         2.0861557       1.3504053    2.0861620     1.3504024



20.12. Formulate the Adams-Bashforth-Moulton method for System (20.2).

                 predictors:




                 correctors:




20.13. Formulate Milne's method for System (20.7).

                                         predictors:
208                          SOLVING SECOND-ORDER DIFFERENTIAL EQUATIONS                                         [CHAP. 20




                                       correctors:




20.14. Use Milne's method to solve f -y = x; y(0) = 0, /(O) = 1 on the interval [0, 1] with h = 0.1.
            All starting values and their derivatives are identical to those given in Problem 20.11. Using the formulas given
       in Problem 20.13, we compute
CHAP. 20]                      SOLVING SECOND-ORDER DIFFERENTIAL EQUATIONS                                   209




Continuing in this manner, we generate Table 20-8.



                                                       Table 20-8

                     Method:       MILNE'S METHOD
                     Problem: f-y = x; y(0) = 0, /(O) = 1

             xn                                 h = 0.l
                                                                                             True solution
                           pyn            PZn              yn               zn             Y(x) = <?-e~x-x
              0.0          —               —          0.0000000         1.0000000            0.0000000
              0.1          —               —          0.1003333         1.0100083            0.1003335

              0.2          —               —          0.2026717         1.0401335            0.2026720
              0.3          —               —          0.3090401         1.0906769            0.3090406
              0.4      0.4214983       1.1621433      0.4215045         1.1621445            0.4215047

              0.5      0.5421838       1.2552500      0.5421903         1.2552517            0.5421906
              0.6      0.6733000       1.3709276      0.6733071         1.3709300            0.6733072
              0.7      0.8171597       1.5103347      0.8171671         1.5103376            0.8171674

              0.8      0.9762043       1.6748655      0.9762120         1.6748693            0.9762120
              0.9      1.1530250       1.8661678      1.1530332         1.8661723            1.1530335
              1.0      1.3503938       2.0861552      1.3504024         2.0861606            1.3504024



                                       Supplementary Problems

20.15. Reduce the initial-value problem y" + y = 0; y(G) = 1, /(O) = 0 to system (20.1).
20.16. Reduce the initial-value problem y"-y = x; y(Q) = 0, /(O) = -1 to system (20.1).
210                           SOLVING SECOND-ORDER DIFFERENTIAL EQUATIONS                                            [CHAP. 20



20.17. Reduce the initial-value problem 2yy"- 4xy2y' + 2(sin x)y4 = 6; y ( l ) = 0, /(I) = 15 to system (20.1).
20.18.   Reduce the initial-value problem xy'" - x2y" + (y'fy = 0; y(0) = 1, /(O) = 2, y"(0) = 3 to system (20.2).
20.19.   Use Euler's method with h = 0.1 to solve the initial-value problem given in Problem 20.15 on the interval [0, 1].
20.20. Use Euler's method with h = 0.1 to solve the initial-value problem given in Problem 20.16 on the interval [0, 1].
20.21.   Use the Runge-Kutta method with h = 0.1 to solve the initial-value problem given in Problem 20.15 on the interval
         [0, 1].
20.22. Use the Runge-Kutta method with h = 0.1 to solve the initial-value problem given in Problem 20.16 on the interval
       [0, 1].
20.23. Use the Adams-Bashforth-Moulton method with h = 0.1 to solve the initial-value problem given in Problem 20.2
       on the interval [0, 1]. Obtain appropriate starting values from Table 20-4.
20.24. Use the Adams-Bashforth-Moulton method with h = 0.1 to solve the initial-value problem given in Problem 20.15
       on the interval [0, 1].
20.25. Use the Adams-Bashforth-Moulton method with h = 0.1 to solve the initial-value problem given in Problem 20.16
       on the interval [0, 1].
20.26. Use Milne's method with h = 0.1 to solve the initial-value problem given in Problem 20.2 on the interval [0, 1].
       Obtain appropriate starting values from Table 20-4.
20.27. Use Milne's method with h = 0.1 to solve the initial-value problem given in Problem 20.15 on the interval [0, 1].
20.28. Formulate the modified Euler's method for System (20.1).
20.29. Formulate the Runge-Kutta method for System (20.2).
20.30. Formulate Milne's method for System (20.2).
                                                               CHAPTER 21



                                                   The Laplace
                                                     Transform
DEFINITION
    Letf(x) be defined for 0 <.r <•* and let i denote an arbitrary real variable. The Laplace (rans/brni off(x).
designated b\ either %{f(x)} or F(s). is



for all values of s for which the improper integral converges. Convergence occurs when she l i m i t




exists. If this limit does not exist, the improper integral diverges and/(.v) has nol_aplace transform. When evaluating
the integral in Eq. (21.1), the variable s is treated as a constant because the integration is w i t h respect to _v.
     The Laplace transforms for a number of elementary functions are calculated in Problems 21.4 through 21.8:
additional transforms are gi\en in Appendix A.


PROPERTIES OF LAPLACE TRANSFORMS

Properly 21.1.    (Linearity).       If cf{f(x)}   = F(s) and %{g(x)} = G'(.v). then for any two constants c, and c2



Property 21.2.       If !£{f(x)} = F(s\ then for an\ constant a


Property 21.3.       If ?£{f(x)} = F(.s), then for an\ posili\e integer n




Properly21.4.



                                                           21

Copyright © 2006, 1994, 1973 by The McGraw-Hill Companies, Inc. Click here for terms of use.
212                                           THE LAPLACE TRANSFORM                                    [CHAP. 21




Property 21.5.       If,          = F(s), then




Property 21.6.       If f(x) is periodic with period co, that is,f(x + co) =f(x), then




FUNCTIONS OF OTHER INDEPENDENT VARIABLES
     For consistency only, the definition of the Laplace transform and its properties, Eqs. (21.1) through (21.8),
are presented for functions of x. They are equally applicable for functions of any independent variable and
are generated by replacing the variable x in the above equations by any variable of interest. In particular, the
counterpart of Eq. (21.1) for the Laplace transform of a function of t is




                                                Solved Problems

21.1.   Determine whether the improper integral                converges.

             Since




        the improper integral converges to the value •!•.


21.2.   Determine whether the improper integral               converges.

             Since




        the improper integral diverges.

21.3.   Determine those values of s for which the improper integral                 converges.
             For 5 = 0,
CHAP. 21]                                       THE LAPLACE TRANSFORM                                                            213



        hence the integral diverges. For s ^ 0,




        when s < 0, —sR > 0; hence the limit is °° and the integral diverges. When s > 0, —sR < 0; hence, the limit is 1/5 and
        the integral converges.

21.4.   Find the Laplace transform off(x) = 1.
               Using Eq. (21.1) and the results of Problem 21.3, we have



        (See also entry 1 in Appendix A.)

21.5.   Find the Laplace transform of f(x) = x1.
               Using Eq. (21.1) and integration by parts twice, we find that




        For s < 0, lim/;^^ [- (R2ls)e   sR
                                          ] = °°, and the improper integral diverge. For s > 0, it follows from repeated use of
        L'Hopital's rule that




        Also, lim/^co [- (2/s3)e sR] = 0 directly; hence the integral converges, and F(s) = 2/s3. For the special cases s = 0, we have



        Finally, combining all cases, we obtain ££{jc2} = 21s3, s > 0. (See also entry 3 in Appendix A.)

21.6.   Find
               Using Eq. (21.1), we obtain




        Note that when s < a, the improper integral diverges. (See also entry 7 in Appendix A.)
214                                           THE LAPLACE TRANSFORM         [CHAP. 21




21.7.   Find
               Using Eq. (21.1) and integration by parts twice, we obtain




        (See also entry 8 in Appendix A.)



21.8.   Find the Laplace transform of f ( x ) =




21.9.   Find the Laplace transform of the function graphed in Fig. 21-1.




                                                          Fig. 21-1
CHAP. 21]                                    THE LAPLACE TRANSFORM                                                      215




21.10. Find the Laplace transform of/(;t) = 3 + 2.x2.
           Using Property 21.1 with the results of Problems 21.4 and 21.5, or alternatively, entries 1 and 3 (w = 3) of
       Appendix A, we have




21.11. Find the Laplace transform off(x) = 5 sin 3x - lie 2x.
            Using Property 21.1 with the results of Problems 21.6 (a = -2) and 21.7 (a = 3), or alternatively, entries 7 and
       8 of Appendix A, we have




21.12. Find the Laplace transform off(x) = 2 sin x + 3 cos 2x.
              Using Property 21.1 with entries 8 (a = 1) and 9 (a = 2) of Appendix A, we have




21.13. Find the Laplace transform off(x) = 2x2 - 3x + 4.
              Using Property 21.1 repeatedly with entries 1, 2 and 3 (w = 3) of Appendix A, we have




21.14. Find
            This problem can be done three ways.
216                                           THE LAPLACE TRANSFORM                                               [CHAP. 21



       (a)    Using entry 14 of Appendix A with n = 2 and a = 4, we have directly that




       (b)    Set/(X) = x. Using Property 21.2 with a = 4 and entry 2 of Appendix A, we have




              and


       (c)    Set /(x) = e4*. Using Property 21.3 with n=\ and the results of Problem 21.6, or alternatively, entry 7 of
              Appendix A with a = 4, we find that




              and



21.15. Find ^{e-2* sin 5*}.
             This problem can be done two ways,
       (a)    Using entry 15 of Appendix A with b = —2 and a = 5, we have directly that




       (b)    Set/(X) = sin 5x. Using Property 21.2 with a = -2 and the results of Problem 21.7, or alternatively, entry 8 of
              Appendix A with a = 5, we have




              and



21.16. Find
             This problem can be done two ways.
       (a)    Using entry 13 of Appendix A with              we have directly that




       (b)    Set f ( x ) = cos"v/7jc. Using Property 21.3 with n=l and entry 9 of Appendix A with a = -\f7, we have
CHAP. 21]                                    THE LAPLACE TRANSFORM                                               217




              and




21.17. Find
              Let/(jc) = x cos 2x. From entry 13 of Appendix A with a = 2, we obtain




      Then, from Property 21.2 with a = —1,




21.18. Find

              Define f(x) = •     Then                           and, from entry 4 of Appendix A, we obtain




      It now follows from Property 21.3 with n = 3 that




      which agrees with entry 6 of Appendix A for n = 4.


21.19. Find

            Taking/(X) = sin 3x, we find from entry 8 of Appendix A with a = 3 that




      Then, using Property 21.4, we obtain




21.20. Find

            Taking f(t) = sinh 2t, we have f(x) = sinh 2x. It now follows from entry 10 of Appendix A with a = 2 that
218                                          THE LAPLACE TRANSFORM                                    [CHAP. 21



       F(s) = 2/02 - 4), and then, from Property 21.5 that




21.21. Prove that if fix +K>) = -f(x), then




            Since


       f(x) is periodic with period 2(0. Then, using Property 21.6 with to replaced by 2(0, we have




       Substituting y = x - to into the second integral, we find that




       The last integral, upon changing the dummy variable of integration back to x, equals




       Thus,




                                                         Fig. 21-2
CHAP. 21]                                    THE LAPLACE TRANSFORM                                                          219




21.22. Find !£{f(x)} for the square wave shown in Fig. 21-2.
       This problem can be done two ways,
       (a)   Note that/(jc) is periodic with period (0=2, and in the interval 0 < x < 2 it can be defined analytically by




             From Eq. (21.8), we have




             Since



             it follows that




       (b)   The square wave/(jc) also satisfies the equation/!* + 1) = —f(x). Thus, using (_/) of Problem 21.21 with (0=1,
             we obtain




                                                        Fig. 21-3
220                                           THE LAPLACE TRANSFORM                                              [CHAP. 21



21.23. Find the Laplace transform of the function graphed in Fig. 21-3.
              Note that f(x) is periodic with period K>=2n, and in the interval 0 < x < 2nit can be defined analytically by




       From Eq. (21.8), we have




       Since




       it follows that




21.24. Find

              Using Eq. (21.4) with a = - 4 on the results of Problem 21.19, we obtain




       It now follows from Eq. (21.7) that




       and then from Property 21.3 with n = 1,




       Finally, using Eq. (21.4) with a = 4, we conclude that the required transform is




21.25. Find the Laplace transforms at (a) t, (b) e^, and (c) sin at, where a denotes a constant.
              Using entries 2, 7, and 8 of Appendix A with x replaced by t, we find the Laplace transforms to be,
CHAP. 21]                                    THE LAPLACE TRANSFORM                                                      221



         respectively,




21.26. Find the Laplace transforms of (a) 62, (b) cos ad, (c) ebe sin ad, where a and b denote constants.
               Using entries 3 (with n = 3), 9, and 15 of Appendix A with x replaced by 6, we find the Laplace transforms to
         be, respectively.




                                        Supplementary Problems
In Problems 21.27 and 21.42, find the Laplace transforms of the given function using Eq. (21.1).

21.27. f(x) = 3

21.29. f(x) = e2*                                           21.30. f(x) = e~6x

21.31.   f(x)=x                                             21.32. f(x) = -Sx

21.33. f(x) = cos3x                                         21.34. f(x) = cos4x

21.35. f(x) = cos bx, where b denotes a constant            21.36.   f(x)=xe-8x

21.37. f(x) = xebx, where b denotes a constant              21.38.   f(x)=x3




21.41. f(x) in Fig. 21-4                                    21.42. f(x) in Fig. 21-5

In Problems 21.43 and 21.76, use Appendix A and the Properties 21.1 through 21.6, where appropriate, to find the Laplace
transforms of the given functions.




                                                         Fig. 21-4
222                                THE LAPLACE TRANSFORM                    [CHAP. 21




                                          Fig. 21-5



21.43.   f(x)=x1                            21.44.    f(x)=xcos3x

21.45.   f(x)=xse-x

                                            21.48. f(x) = 5e-*13

                                            21.50. f(x) = 8e~5x



21.53. /(*) = -!.                           21.54. f(x) = e-xsin2x

21.55. f(x) = ex sin 2x                     21.56. /(jc) = e^ cos 2x

21.57. f(x) = e3x cos 2x                    21.58. /(jc) = e3x cos 5^:



21.61. f(x) = e-2xsin2x                     21.62. x3 + 3 cos 2x

21.63. 5f^ + le-x                           21.64. /(jt) = 2 + 3x

21.65. /(jc) = 3-4;e2                       21.66. /(jc) = 2x + 5 sin 3;c

21.67. /(jc) = 2 cos 3x - sin 3x            21.68. 2X2 cosh jc

21.69. 2^6-•'cosh*                          21.70. ^ 2 sin4^




                                            21.74. f(x) in Fig. 21-6

21.75. f(x) in Fig. 21-7                    21.76. f(x) in Fig. 21-8
CHAP. 21]   THE LAPLACE TRANSFORM   223




                   Fig. 21-6




                   Fig. 21-7




                   Fig. 21-8
                                                              CHAPTER 22



                                         Inverse Laplace
                                             Transforms
DEFINITION
     An inverse Laplace transform of A'(.v), designated by *f~t{F(s)}, is another function J(x) having the prop-
erty that S{/U)} = F(.v). This presumes that the independent \ariahle of interest is .v. If the independent vari-
able of interest is / instead, then an inverse Laplace transform of Fix) if fit) where -£{.fti)} = F(s).
     The simplest technique for identifying inverse Laplace transforms i.s to recogni/.e them, either from mem-
orv or from a tahle such as Appendix A (see Problems 22.1 through 22.3). If F(x) is not in a recognisable form,
then occasionally it can be transformed into such a form in algebraic manipulation. Observe from Appendix A
that almost all Laplace transforms are quotients. The recommended procedure is to first convert the denominator
to a form that appears in Appendix A and then the numerator.



MANIPULATING DENOMINATORS
    The method of completing the square converts a quadratic po!\ normal into the sum of squares, a form that
appears in many of the denominators in Appendix A. Iti particular, for the quadratic as^+bs + c. where a.b, and
c denote constants.




where A- = b!2a and                        (See Problems 22.8 through 22.10.)
     The method of partial fractions transforms a function of the form a(x)/b(s). where both a(s) and b(s) are
polynomials in .v. into the sum of other fractions such that the denominator of each new fraction is either a first-
degree or a quadratic polynomial raised to some power. The method requires onl\ that ( I ) the degree of a(s) be
less than the degree of/Xs) (if this is not the ease, first perform long division, and consider the remainder term)
and (2) b(x) he factored into the product of distinct linear and quadratic polynomials raised to \arious powers.

                                                          224
Copyright © 2006, 1994, 1973 by The McGraw-Hill Companies, Inc. Click here for terms of use.
CHAP. 22]                                INVERSE LAPLACE TRANSFORMS                                             225



     The method is carried out as follows. To each factor of b(s) of the form (s - a)m, assign a sum of m frac-
tions, of the form




To each factor of b(s) of the form (s2 + bs + c)p, assign a sum of p fractions, of the form




Here A;, Bj, and Ck(i= 1, 2,..., m;j, k= 1, 2,...,p) are constants which still must be determined.
     Set the original fraction a(s)lb(s) equal to the sum of the new fractions just constructed. Clear the resulting
equation of fractions and then equate coefficients of like powers of s, thereby obtaining a set of simultaneous
linear equations in the unknown constants At, Bj, and Ck. Finally, solve these equations for At, Bj, and Ck. (See
Problems 22.11 through 22.14.)


MANIPULATING NUMERATORS
     A factor s - a in the numerators may be written in terms of the factor s - b, where both a and b are
constants, through the identity s - a = (s - b) + (b - a). The multiplicative constant a in the numerator may be
written explicitly in terms of the multiplicative constant b through the identity




Both identities generate recognizable inverse Laplace transforms when they are combined with:
Property 22.1. (Linearity).          If the inverse Laplace transforms of two functions F(s) and G(s) exist, then
                                     for any constants cl and c2,



(See Problems 22.4 through 22.7.)



                                               Solved Problems

22.1.   Find

            Here F(s) = Us. From either Problem 21.4 or entry 1 of Appendix A, we have ^{1} = Us. Therefore,
        £-l{lls} = 1.


22.2.   Find

               From either Problem 21.6 or entry 7 of Appendix A with a = 8, we have




        Therefore,
226                                       INVERSE LAPLACE TRANSFORMS                                             [CHAP. 22




22.3.   Find

               From entry 9 of Appendix A with a =       we have




        Therefore,



22.4.   Find

             The given function is similar in form to entry 12 of Appendix A. The denominators become identical if we take
        a = 1. Manipulating the numerator of the given function and using Property 22.1, we obtain




22.5.   Find

             The given function is similar in form to entry 5 of Appendix A. Their denominators are identical; manipulating
        the numerator of the given function and using Property 22.1, we obtain




22.6.   Find

            The denominator of this function is identical to the denominator of entries 10 and 11 of Appendix A with a = 3.
        Using Property 22.1 followed by a simple algebraic manipulation, we obtain




22.7.   Find

             The denominator of this function is identical to the denominators of entries 15 and 16 of Appendix A witha = 3
        and b = 2. Both the given function and entry 16 have the variable s in their numerators, so they are the most closely
        matched. Manipulating the numerator of the given function and using Property 22.1, we obtain
CHAP. 22]                                 INVERSE LAPLACE TRANSFORMS                                                 227




22.8.   Find

               No function of this form appears in Appendix A. But, by completing the square, we obtain

                                    s2 - 2s + 9 = (s2 - 2s + 1) + (9 -1) = (s - I)2


        Hence,


             Then, using Property 22.1 and entry 15 of Appendix A with a =            and b = 1, we find that




22.9.   Find

               No function of this form appears in Appendix A. Completing the square in the denominator, we have
                                    s2 + 4s + 8 = (s2 + 4s + 4) + (8 - 4) = (s + 2)2 + (2)2

        Hence,

        This expression also is not found in Appendix A. However, if we rewrite the numerator as s + 4 = (s + 2) + 2 and
        then decompose the fraction, we have



        Then, from entries 15 and 16 of Appendix A,




22.10. Find

               No function of this form appears in Appendix A. Completing the square in the denominator, we obtain




        so that



        We now rewrite the numerator as




        so that
228                                        INVERSE LAPLACE TRANSFORMS                                                [CHAP. 22



       Then,




22.11. Use partial function to decompose

            To the linear factor s + 1, we associate the fraction Al(s + 1); whereas to the quadratic factor s2 + 1, we asso-
       ciate the fraction (Bs + C)i(s2 + 1). We then set




       Clearing fractions, we obtain



       or                              s2(0) + 5(0) + 1 = s2(A + B) + s(B + C) + (A + C)

       Equating coefficients of like powers of s, we conclude that A + B = 0, B + C = 0, and A + C = 1. The solution of
       this set of equations is A = -|, B = —-|, and C = -j. Substituting these values into (_/), we obtain the partial-fractions
       decomposition




              The following is an alternative procedure for finding the constants A, B, and C in (_/). Since (2) must hold for
       all s, it must in particular hold s = —1. Substituting this value into (2), we immediately find A = ^. Equation (2) must
       also hold for s = 0. Substituting this value along with A = -| into (2), we obtain C = -|. Finally, substituting any other
       value of s into (2), we find that B = - -|.



22.12. Use partial fractions to decompose

            To the quadratic factors s2 + 1 and s2 + 4s + 8, we associate the fractions (As + B)l(s2 + 1) and
       (Cs + D)/(s2 + 4s + 8). We set




       and clear fractions to obtain
                                         l = (As + B)(s2 + 4s + 8) + (Cs + D)(s2 + 1)

       or           53(0) + s2(G) + 5(0) + 1 = s3(A + C) + s2(4A + B + D) + s(SA + 4B + C) + (SB + D)

       Equating coefficients of like powers of s, we obtain A + C = 0, 4A + B + D = 0, SA + 4B + C = 0, and SB + D = 1.
       The solution of this set of equation is
CHAP. 22]                                 INVERSE LAPLACE TRANSFORMS                                                         229




       Therefore,




22.13. Use partial fractions to decompose

            To the linear factors s — 2 and s + 1, we associate respectively the fractions Al(s - 2) and Bl(s + 1). We set




       and, upon clearing fractions, obtain



       To find A and B, we use the alternative procedure suggested in Problem 22.11. Substituting s = —l and then s = 2
       into (_/), we immediately obtain A = 5/3 and B = -2/3. Thus,




22.14. Use partial fractions to decompose

             Note that s2 - s - 2 factors into (s - 2)(s + 1). To the factor j3 = (s - O)3, which is a linear polynomial raised to
       the third power, we associate the sum A^s + A2/i2 + A3/s3. To the linear factors (s - 2) and (s + 1), we associate the
       fractions Bl(s - 2) and Cl(s + 1). Then




       or, clearing fractions,

                    8 = AiS2(s - 2)0 + 1) + A2s(s - 2)0 + 1) + A3(s - 2)0 + 1) + B^(s + 1) + Cs3(s - 2)

       Letting s = —1,2, and 0, consecutively, we obtain, respectively, C = 8/3, B = 1/3, and A3 = —4. Then choosing 5 = 1
       and s = —2, and simplifying, we obtain the equations A1+A2 = —l and 2A1 — A2 = —S, which have the solutions
       A1 = —3 and A2 = 2. Note that any other two values for s (not —1, 2, or 0) will also do; the resulting equations may
       be different, but the solution will be identical. Finally,




22.15. Find

            No function of this form appears in Appendix A. Using the results of Problem 22.13 and Property 22.1, we
       obtain
230                                       INVERSE LAPLACE TRANSFORMS                                              [CHAP. 22




22.16. Find

              No function of this form appears in Appendix A. Using the results of Problem 22.14 and Property 22.1, we obtain




22.17. Find

              Using the result of Problem 22.11, and noting that



      we find that




22.18. Find

              From Problem 22.12, we have




      The first term can be evaluated easily if we note that




      To evaluate the second inverse transforms, we must first complete the square in the denominator,
      s2 + 4s + 8 = (s + 2)2 + (2)2, and then note that




      Therefore,
CHAP. 22]                                 INVERSE LAPLACE TRANSFORMS                   231




22.19. Find

              By the method of partial fractions, we obtain




        Thus,




                                        Supplementary Problems

Find the inverse Laplace transforms, as a function of x, of the following functions:
232   INVERSE LAPLACE TRANSFORMS   [CHAP. 22
                                                              CHAPTER 23



         Convolutions and
    the Unit Step Function
CONVOLUTIONS
    The convolution of t\vo functions/^) and x(x) is




Theorem 23.1. f i x ) * g (x) = g ix) */(.v).

Theorem 23.2. (Convolution theorem).




     It follows directly from these two theorems that



If one of the t"o comolmions in Hq. (23. 2) is simpler 10 calculate, then thai convolution is chosen \vhen
determining the inverse Laplace transform of a product.


UNIT STEP FUNCTION
     The unit step function u(x) is defined as




As an immediate consequence of the definition, we have for any number < .




The graph of u(x — r) is given if Fig. 23- 1 .

                                                          233
Copyright © 2006, 1994, 1973 by The McGraw-Hill Companies, Inc. Click here for terms of use.
234                             CONVOLUTIONS AND THE UNIT STEP FUNCTION                                  [CHAP. 23




                                                     Fig. 23-1



Theorem 23.3.


TRANSLATIONS
      Given a function/(X) defined for x > 0, the function




represents a shift, or translation, of the function/(*) by c units in the positive ^-direction. For example, if f(x)
is given graphically by Fig. 23-2, then u(x- c)f(x - c) is given graphically by Fig. 23-3.




                        Fig. 23-2                                                 Fig. 23-3




Theorem 23.4.     If F(s) = £{f(xj},   then



                  Conversely,
CHAP. 23]                          CONVOLUTIONS AND THE UNIT STEP FUNCTION                                                235




                                                  Solved problems


23.1.   Find/(;t) * g (x) \vhenf(x) = (Px and g (x) = e2x.
               Here/(0 = e3', g(x-t) = e2(x-'\ and




23.2.   Find g(x) *f(x) for the two functions in problem 23.1 and verify Theorem 23.1.
               With/(;t - 0 = e3^0 and g(t) = e2t,




        which, from Problem 23.1 equals f(x) * g(x).


23.3.   Find f(x) * g(x) when f(x) = x and g(x) = x2.
               Here/(0 = t and g(x - t) = (x - I)2 = x2 - 2xt + t2. Thus,




23.4.   Find                         by convolutions.

               Note that




        Defining F(s) = ll(s — 3) and G(s) = ll(s — 2), we have from Appendix A that/(jc) = e3* and g(x) = e2*. It follows from
        Eq. (23.2) and the results of Problem 23.1 that




23.5.   Find 5T1               by convolutions.

               Note that
236                               CONVOLUTIONS AND THE UNIT STEP FUNCTION                                          [CHAP. 23



        Defining F(s) = ll(s — 1) and G(s) = ll(s + 1), we have from Appendix A that/(jc) = e" and g(x) = e x. It follows from
        Eq. (23.2) that




23.6.   Find 5T1                  by convolutions.

             Note that



        Defining F(s) = Us and G(s) = l/(s2 + 4), we have from Appendix A that/(jc) = 1 and g(x) = jsin2x . It now follows
        from Eq. (23.2) that




        See also Problem 22.19.



23.7.   Find $~l               by convolutions.


             If we define F(s) = G(s) = l/(s - 1), then/(jc) =g(x) = e"and




23.8.   Use the definition of the Laplace transform to find !£{u(x - c)} and thereby prove Theorem 23.3.
             It follows directly from Eq. (21.1) that
CHAP. 23]                              CONVOLUTIONS AND THE UNIT STEP FUNCTION                                    237



23.9.   Graph the function/(*) = u(x-2)-u(x-3).
               Note that




        Thus,



        the graph of which is given in Fig. 23-4.


23.10. Graph the function/(*) = 5- 5u(x - 8) for x > 0.
           Note that




        Thus



        The graph of this function when x > 0 is given in Fig. 23-5.




                           Fig. 23-4                                                   Fig. 23-5




23.11. Use the unit step function to give an analytic representation of the function/(X) graphed in Fig. 23-6.
             Note that f(x) is the function g (x) = x, x > 0, translated four units in the positive x-direction. Thus,
        f(x) = u(x - 4)g (x-4) = (x- 4)u(x - 4).


23.12. Use the unit step function to give an analytic description of the function g(x) graphed on the interval
       (0, co) in Fig. 23-7. If on the subinterval (0, a) the graph is identical to Fig. 23-2.
               Let/(jc) represent the function graphed in Fig. 23-2. Then g(x) =f(x)[l - u(x - a)}.
238                            CONVOLUTIONS AND THE UNIT STEP FUNCTION                                       [CHAP. 23




                         Fig. 23-6                                                     Fig. 23-7




23.13. Find £{g(x)} if g(x) = •

            If we define/(X) = x2, then g(x) can be given compactly as g(x) = u(x - 4)f(x - 4) = u(x - 4)(x - 4)2. Then,
       noting that ££{/(X)} = F(s) = 2/s3 and using Theorem 23.4, we conclude that




23.14. Find £{g(x)} if g(x) =

             We first determine a function f(x) such that/(jc - 4) =x2. Once this has been done, g(x) can be written as
       g (x) = u (x — 4)/(x — 4) and Theorem 23.4 can be applied. Now, f(x - 4) = x2 only if




       Since


       it follows that




23.15. Prove Theorem 23.1.
            Making the substitution r = x — t in the right-hand side of Eq. (23.1), we have
CHAP. 23]                         CONVOLUTIONS AND THE UNIT STEP FUNCTION                                                  239



23.16. Prove that/(;t) * [g(x) + h(x)] =f(x) * g(x) +f(x) * h(x).




23.17. The following equation is called an integral equation of convolution type.
       Assuming that the Laplace Transform for y(x) exists, we solve this equation, and the next two examples,
       for y(x).




            We see that this integral equation can be written as y(x) =x + y(x) * sin x. Taking the Laplace transform ££ of
       both sides and applying Theorem 23.2, we have




       Solving for c£(y} yields




                                      x3
       This implies that y(x) = x-\      , which is indeed the solution, as can be verified by direct substitution as follows:
                                      6




23.18. Use Laplace Transforms to solve the integral equation of convolution type:




            Here we have y(x) = 2 - y(x) * e*. Continuing as in Problem 23.17, we find that




       which gives y(x) = 2 - 2x as the desired solution.


23.19. Use Laplace Transforms to solve the integral equation of convolution type:




            Noting that y(x) = x3 + 4 * y(x), we find that (£{y} =             which gives y(x) =      (-l + e4* -4x-8x2)as
       the solution.
240                              CONVOLUTIONS AND THE UNIT STEP FUNCTION                                       [CHAP. 23




                                        Supplementary problems
23.20. Find x * x.                                          23.21. Find 2 * x.

23.22. Find 4x * e2*.                                       23.23. Find e4x * e^.

23.24. Find x * e*.                                         23.25. Find x * xe~x.

23.26. Find 3 * sin 2x.                                     23.27. Find jc * cos jc.

In Problems 23.28 through 23.35, use convolutions to find the inverse Laplace transforms of the given functions.




23.33.           - with F(s) = Us2 and G(s) = sl(s2 + 4). Compare with Problem 23.6.
                 l




23.36. Gra.phf(x) = 2u(x-2)-u(x-4).

23.37. Graph/(*) = u(x - 2) - 2u(x - 3) + u(x - 4).

23.38. Use the unit step function to give an analytic representation for the function graphed in Fig. 23-8.




                                                         Fig. 23-8



23.39. Graph/(*) = u(x - it) cos 2(x - it).                 23.40. Graph /(*) = •

In Problems 23.41 through 23.48, find (£{g(x)} for the given functions.
CHAP. 23]                        CONVOLUTIONS AND THE UNIT STEP FUNCTION                              241




In Problems 23.49 through 23.55, determine the inverse Laplace transforms of the given functions.




23.56. Prove that for any constant k, [kf(x)} * g(x) = k[f(x) * g(x)].

In Problems 23.57 through 23.60, assume that the Laplace Transform for y(x) exists. Solve for y(x).
                                                              CHAPTER 24



                 Solutions of
           Linear Differential
              Equations with
        Constant Coefficients
       by Laplace Transforms

LAPLACE TRANSFORMS OF DERIVATIVES
    Denote ^{v(.v)| h\ Y(.i). Then under broad conditions, ihe Laplace transform of the «th-deri\ alive
(n= 1.2,3. ...) of yU) is




If Ihc initial conditions on v(.v) at x = 0 arc given by



then (24.1) can be rewritten as




For the special cases of n = I and /? = 2. Eq. (24.3) simplifies to




                                                           242
Copyright © 2006, 1994, 1973 by The McGraw-Hill Companies, Inc. Click here for terms of use.
CHAP. 24]                      SOLUTIONS OF LINEAR DIFFERENTIAL EQUATIONS                                            243



SOLUTIONS OF DIFFERENTIAL EQUATIONS
    Laplace transforms are used to solve initial-value problems given by the wth-order linear differential equation
with constant coefficients




together with the initial conditions specified in Eq. (24.2). First, take the Laplace transform of both sides of
Eq. (24.6), thereby obtaining an algebraic equation for Y(s). Then solve for Y(s) algebraically, and finally take
inverse Laplace transforms to obtain y(x) = ^T1{Y(s)}.
     Unlike previous methods, where first the differential equation is solved and then the initial conditions are
applied to evaluate the arbitrary constants, the Laplace transform method solves the entire initial-value problem
in one step. There are two exceptions: when no initial conditions are specified and when the initial conditions
are not at x = 0. In these situations, c0 through cn in Eqs. (24.2) and (24.3) remain arbitrary and the solution to
differential Eq. (24.6) is found in terms of these constants. They are then evaluated separately when appropriate
subsidiary conditions are provided. (See Problems 24.11 through 24.13.)




                                               Solved problems

24.1.   Solve / - 5y = 0; y(0) = 2.
            Taking the Laplace transform of both sides of this differential equation and using Property 24.4, we obtain
        ££{/} - 5£{y} = £6{0}. Then, using Eq. (24.4) with ca= 2, we find

                                                             from which

        Finally, taking the inverse Laplace transform of Y(s), we obtain




24.2.   Solve / - 5y = e5x; y(0) = 0.
            Taking the Laplace transform of both sides of this differential equation and using Property 24.4, we find that
        ££{/} - 5£{y} = £{e5x}. Then, using Appendix A and Eq. (24.4) with c0= 0, we obtain

                                                             from which

        Finally, taking the inverse transform of Y(s), we obtain




        (see Appendix A, entry 14).


24.3.   Solve / + y = sin x; y(0) = 1.
             Taking the Laplace transform of both sides of the differential equation, we obtain
244                            SOLUTIONS OF LINEAR DIFFERENTIAL EQUATIONS                                     [CHAP. 24



        Solving for Y(s), we find



        Taking the inverse Laplace transform, and using the result of Problem 22.17, we obtain




24.4.   Solve /' + 4y = 0; y(0) = 2, /(O) = 2.
            Taking Laplace transforms, we have ££{j"} + 4!£{y} = ££{0}. Then, using Eq. (24.5) with c 0 = 2 and c1 = 2,
        we obtain


        or

        Finally, taking the inverse Laplace transform, we obtain




24.5.   Solve /'- 3/ + 4y = 0; y(0) = 1, /(O) = 5.
             Taking Laplace transforms, we obtain ££{/'} -3£6{/} + 4£6{;y} =£6{0}. Then, using foort Eqs. (24.4) and
        (24.5) with c0 = 1 and Cj = 5, we have



        or

        Finally, taking the inverse Laplace transform and using the result of Problem 22.10, we obtain




24.6.   Solve /'- / - 2y = 4x2; y(0) = 1, /(O) = 4.
             Taking Laplace transforms, we have ££{/'}-££{/} -2%{y} =4%{xi}. Then, using both Eqs. (24.4) and
        (24.5) with c0 = 1 and Cj = 4, we obtain



        or, upon solving for y(j),



        Finally, taking the inverse Laplace transform and using the results of Problems 22.15 and 22.16, we obtain




        (See Problem 13.1.)
CHAP. 24]                      SOLUTIONS OF LINEAR DIFFERENTIAL EQUATIONS                                              245



24.7.   Solve /' + 4/ + 83; = sin x; y(0) = 1, /(O) = 0.
            Taking Laplace transforms, we obtain c£(y"} + 4££{/} + &£{y} = ££{sin x}. Since c 0 = 1 and C j = 0 , this
        becomes




        Thus,


        Finally, taking the inverse Laplace transform and using the results of Problems 22.9 and 22.18, we obtain




        (See Problem 13.3.)


24.8.   Solve /'- 2/ + y = f(x); y(0) = 0, /(O) = 0.
             In this equation/I*) is unspecified. Taking Laplace transforms and designating ££{/(jc)} by F(s), we obtain




        From Appendix A, entry 14, ££ 1 {l/(5— I)2} =xex. Thus, taking the inverse transform of Y(s) and using convolutions,
        we conclude that




24.9.   Solve /' + y =f(x); y(0) = 0, /(O) = 0 if /(*) =

             Note that/(jc) = 2u (x — 1). Taking Laplace transforms, we obtain



        or


        Since


        it follows from Theorem 23.4 that




24.10. Solve /" +/ = (?; y(0) = /(O) = y"(0) = 0.
            Taking Laplace transforms, we obtain ££{/"} + ££{/} = £((?). Then, using Eq. (24.3) with n = 3 and Eq. (24.4),
        we have
246                           SOLUTIONS OF LINEAR DIFFERENTIAL EQUATIONS                                          [CHAP. 24



       Finally, using the method of partial fractions and taking the inverse transform, we obtain




24.11. Solve / - 5y = 0.
           No initial conditions are specified. Taking the Laplace transform of both sides of the differential equation,
       we obtain


       Then, using Eq. (24.4) with CQ = y(0) kept arbitrary, we have



       Taking the inverse Laplace transform, we find that




24.12. Solve /'- 3/ + 2y = e~x.
            No initial conditions are specified. Taking Laplace transforms, we have c£(y"} - 3££{;y'} + 2££{;y} = t£(e~*), or

                                  [s2Y(s) - SCQ - Cl] - 3[sY(S) - CQ] + 2[Y(s)] = ll(s + 1)
       Here c0 and c1 must remain arbitrary, since they represent y(0) and ;y'(0), respectively, which are unknown. Thus,




       Using the method of partial fractions and noting that s2 — 3s + 2 = (s — l)(s — 2), we obtain




       where                     and



24.13. Solve /'- 3/ + 2y = e~x; y(l) = 0, /(I) = 0.
            The initial conditions are given at x = 1, not x = 0. Using the results of Problem 24.12, we have as the solution
       to just the differential equation




       Applying the initial conditions to this last equation, we find that dQ = — je   and dl =^e~', hence,
CHAP. 24]                     SOLUTIONS OF LINEAR DIFFERENTIAL EQUATIONS                                                 247




24.14. Solve      = 0.05N; N(0) = 20,000.

           This is a differential equation for the unknown function N(t) in the independent variable t. We set
      N(s) = !£{N(t)}. Taking Laplace transforms of the given differential equation and using (24.4) with N replacing y,
      we have




      or, upon solving for N(s),



      Then from Appendix A, entry 7 with a = 0.05 and t replacing x, we obtain




      Compare with (2) of Problem 7.1.


24.15. Solve     + 507 = 5; 7(0) = 0.

          This is a differential equation for the unknown function I(t) in the independent variable t. We set I(s) = ££{/(£)}.
      Taking Laplace transforms of the given differential equation and using Eq. (24.4) with 7 replacing y, we have




      or, upon solving for I(s),



      Then using the method of partial fractions and Appendix A, with t replacing x, we obtain




      Compare with (1) of Problem 7.19.


24.16. Solve x + 16x = 2sm4t;x(0) = -±,x(0) = 0.

           This is a differential equation for the unknown function x(t) in the independent variable t. We set
      X(s) = ££{XO)- Taking Laplace transforms of the given differential equation and using Eq. (24.5) with x replacing
      y, we have
248                               SOLUTIONS OF LINEAR DIFFERENTIAL EQUATIONS                                   [CHAP. 24




         or


         Then using Appendix A, entries 17 and 9 with a = 4 and t replacing x, we obtain




         Compare with the results of Problem 1410.




                                        Supplementary Problems
Use Laplace transforms to solve the following problems.

24.17. y' + 2y = 0; y(0) = 1                               24.18. y' + 2y = 2;y(0) = l

24.19. y' + 2y = ex; y(0) = 1                              24.20. y' + 2y = 0; y ( l ) = 1

24.21. y' + 5y = 0; y ( l ) = 0                            24.22. y'-5y = esx; y(0) = 2

24.23. y' + y = xe~x; y(0) = -2                            24.24. y' + y = sin x

24.25. y' + 20y = 6 sin 2x; y(0) = 6                       24.26. y" - y = 0; y(0) = 1, /(O) = 1

24.27. y" -y = sin x; y(0) = 0, y'(0) = 1                  24.28. /'-3, = eI;XO) = L/(0) = 0

24.29. y" + 2y' -3y = sin 2x; y(0) = /(O) = 0              24.30. y" + y = sin x; y(0) = 0, /(O) = 2

24.31. y" + y' + y = 0; y(0) = 4, /(O) = -3                24.32. /' + 2y' + 5y = 3e^; y(G) = 1, /(O) = 1

24.33. y" + 5y' -3y = u(x - 4); y(0) = 0, y'(0) = 0        24.34. y" + y = 0; y(n) = 0, y'(n) = -1

24.35. y'" ~y = 5; y(G) = 0, /(O) = 0, /'(O) = 0           24.36. /4> -y = 0; y(0) = 1, /(O) = 0, /'(O) = 0, /"(O) = 0
                                                              CHAPTER 25



                      Solutions of Linear
                      Systems by Laplace
                              Transforms
THE METHOD
     Laplace transforms are useful for solving systems of linear differential equations; that is, sets of two or
more differential equations with an equal number of unknown functions. If all of the coefficients are constants,
then the method of solution is a straightforward generalization of the one given in Chapter 24. Laplace
transforms are taken of each differential equation in the system; the transforms of the unknown functions are
determined algebraically from the resulting set of simultaneous equations; inverse transforms for the unknown
functions are calculated with the help of Appendix A.




                                              Solved Problems

25.1.   Solve the following system for the unknown functions u(x) and v(x):




            Denote !£{u(x)} and !£{v(x)} by U(s) and V(s), respectively. Taking Laplace transforms of both differential
        equations, we obtain




        or


                                                           249
Copyright © 2006, 1994, 1973 by The McGraw-Hill Companies, Inc. Click here for terms of use.
250                  SOLUTIONS OF LINEAR SYSTEMS BY LAPLACE TRANSFORMS                                            [CHAP. 25



        The solution to this last set of simultaneous linear equations is




        Taking inverse transforms, we obtain




25.2.   Solve the system




             Denote c£{y(x)} and c£{i(x)} by Y(s) and Z(s), respectively. Then, taking Laplace transforms of both differential
        equations, we obtain




        The solution to this last set of simultaneous linear equations is




        Finally, using the method of partial fractions and taking inverse transforms, we obtain




25.3.   Solve the system




             Denote !£{w(x)}, !£{y(x)}, and !£{z(x)} by W(s), Y(s), and Z(s), respectively. Then, taking Laplace transforms
CHAP. 25]            SOLUTIONS OF LINEAR SYSTEMS BY LAPLACE TRANSFORMS                        251



        of all three differential equations, we have




        The solution to this last system of simultaneous linear equations is




        Using the method of partial fractions and then taking inverse transforms, we obtain




25.4.   Solve the system




             Taking Laplace transforms of both differential equations, we obtain




        Solving this last system for Y(s) and Z(s), we find that




        Thus, taking inverse transforms, we conclude that




25.5.   Solve the system




             Taking Laplace transforms of both differential equations, we obtain
252                  SOLUTIONS OF LINEAR SYSTEMS BY LAPLACE TRANSFORMS                          [CHAP. 25



        Solving this last system for Z(s) and Y(s), we find that



        Finally, taking inverse transforms, we obtain



25.6.   Solve the system




             Taking Laplace transforms of all three differential equations, we find that




        or




        The solution to this system is



        Hence,




                                         Supplementary Problems

Use Laplace transforms to solve the following systems. All unknowns are functions of x.

25.7.   u'-2v = 3                                                  25.8.   u' + 4u-6v=0
        v' + v —u =-x2;                                                    v' + 3u-5v=0;
        u(0) = 0, v(0) = -1                                                u(0) = 3, v(0) = 2


25.9.   M' + 5 M - 1 2 v = 0                                       25.10. y + z=x
        v' + 2u-5v=0;                                                      z'-y=0;
        u(0) = 8, v(0) = 3                                                 X0)=l,z(0) = 0
CHAP. 25]          SOLUTIONS OF LINEAR SYSTEMS BY LAPLACE TRANSFORMS                           253



25.11. y-z=0                                25.12. w'-w-2y = l

      y-z' = o-                                    y' _ 4 W - 3 - y = _ l ;



      y(0) = 1, z(0) = 1                           w(0) = 1, XO) = 2


25.13. w'-y=0                               25.14. u" + v = Q

      W + y' + Z = l                               u" -v' = -2e";

      w - y + z' = 2 sin x;                        u(0) = 0, u'(0) = -2, v(0) = 0, v'(0) = 2

      w(0) = 1,XO) = l,z(0) = 1


25.15. M"-2v = 2                            25.16. w"-2z=0

      u + v' = 5e2x+l;                             w' + y' -z = 2x

      u(0) = 2, u'(0) = 2, v(0) = 1                w' -2y+i"=0;

                                                   W(Q) = 0, w'(0) = 0, XO) = 0,


                                                   Z(0) = l,z'(0) = 0




25.17. w" + y+z=-\
      w+y" -i=0

      -w'-y' + z" = 0;

      w(0) = 0, w'(0) = 1, XO) = 0,

      /(0) = 0, z(0) = -l,z'(0) = l
                                                              CHAPTER 26



          Solutions of Linear
       Differential Equations
               with Constant
       Coefficients by Matrix
                     Methods
SOLUTION OF THE INITIAL-VALUE PROBLEM
    By the procedure of Chapter 17, any initial-value problem in which the differential equations are all linear
with constant coefficients, can be reduced to the matrix system



where A is a matrix of constants. The solution to Eq. (26.1) is



or equivalently




In particular, if the initial-value problem is homogeneous [i.e., f(t) = 0], then both equations (26.2) and (26.3)
reduce to



     In the above solutions, the matrices e^(> '°\e As, and eA<-'s) are easily computed from eAt by replacing the
variable t by t - t0, -s, and t — s, respectively. Usually x(t) is obtained quicker from (26.3) than from (26.2),

                                                          254
Copyright © 2006, 1994, 1973 by The McGraw-Hill Companies, Inc. Click here for terms of use.
CHAP. 26]                                 SOLUTIONS BY MATRIX METHODS                                          255



since the former equation involves one less matrix multiplication. However, the integrals arising in (26.3) are
generally more difficult to evaluate than those in (26.2).



SOLUTION WITH NO INITIAL CONDITIONS
    If no initial conditions are prescribed, the solution of x(?) = Ax(?) + f (?) is



or, when f(t) = 0,


where k is an arbitrary constant vector. All constants of integration can be disregarded when computing the
integral in Eq. (26.5), since they are already included in k.




                                                Solved Problems


26.1.   Solve x + 2x-Sx = 0;x(l) = 2, i(l)=3.
             From Problem 17.2, this initial-value problem is equivalent to Eq. (26.1) with




        The solution to this system is given by Eq. (26.4). For this A, eA( is given in Problem 16.2; hence,




        Therefore,




        and the solution to the original initial-value problem is
256                                            SOLUTIONS BY MATRIX METHODS                                           [CHAP. 26




26.2.   Solve x + 2x-8x = e'; x(0) = 1, i(0) = -4.
              From Problem 17.1, this initial-value problem is equivalent to Eq. (26.1) with




        and t0 = 0. The solution is given by either Eq. (26.2) or (26.3). Here, we use (26.2); the solution using (26.3) is found
        in Problem 26.3. For this A, eA( has already been calculated in Problem 16.2. Therefore,




        Thus,




        and



26.3.   Use Eq. (26.3) to solve the initial-value problem of problem 26.2.

              The vector e A<I '° }c remains          Furthermore,
CHAP. 26]                                SOLUTIONS BY MATRIX METHODS                          257




        Thus,




        as before.


26.4.   Solve x + x = 3; x(n) = 1, x(n) = 2.
             From Problem 17.3, this initial-value problem is equivalent to Eq. (26.1) with




        and tQ = n. Then, using Eq. (26.3) and the results of Problem 16.3, we find that




        Thus,




        and x(t) = xM) = 3 - 2 cos (t - n) + 2 sin (t - n).
             Noting that cos (t - n) = -cos t and sin (t - n) = -sin t, we also obtain
258                                       SOLUTIONS BY MATRIX METHODS                                      [CHAP. 26




26.5.   Solve the differential equation x -6x + 9x = t.
              This differential equation is equivalent to the standard matrix differential equation with




        (See Problem 17.4). It follows from Problem 16.4 that




        Then, using Eq. (26.5), we obtain




        and




        Thus,



        where k3 = —3ki + k2.



26.6.   Solve the differential equation

            Using the results of Problem 17.5, we reduce this homogeneous differential equation to the matrix equation
        x(0 = Ax(0 with
CHAP. 26]                                  SOLUTIONS BY MATRIX METHODS               259



        We have from Problem 16.6 that




        Then using Eq. (26.6), we calculate




        Thus




        where k$ = k\ — 2fc2 + k3, ks = 2k2 — k3, and k6 = — k2 + k3.


26.7.   Solve the system




               rhis initial-value problem is equivalent to Eq. (26.1) with




        and t0 = 0. (See Problem 17.8.) For this A, we have from Problem 16.7 that




        Then, using Eq. (26.3), we calculate
260                                      SOLUTIONS BY MATRIX METHODS                                          [CHAP. 26



        and




        Therefore,




        Finally,




26.8.   Solve the system of differential equations




              This set of equations is equivalent to the matrix system \(t) = Ax(t) with




        (See Problem 17.9.) The solution is given by Eq. (26.6). For this A, we have from Problem 16.1 that




        hence,
CHAP. 26]                                  SOLUTIONS BY MATRIX METHODS                                                  261



         Thus,




         If we define two new arbitrary constants k^ = (3k1 + k2)/6 and k4 = (3k± - k2)/6, then




                                          Supplementary Problems

Solve each of the following systems by matrix methods. Note that eA( for the first five problems is found in Problem 16.2,
while eA( for Problems 26.15 through 26.17 is given in Problem 16.3.

26.9.    x + 2x - Sx = 0; x(l) = 1, i(l) = 0                     26. 10.   x + 2x - Sx = 4; x(0) = 0, jfc(O) = 0

26.11.   x + 2x-Sx = 4;x(l) = 0, i(l) = 0                        26.12.    x + 2x-8x = 4;x(G) = 1, i(0) = 2

26.13.   x + 2x-8x = 9e-'; x(0) = 0, i(0) = 0                    26.14. The system of Problem 26.4, using Eq. (26.2)

26.15.   x + x =0                                                26. 16.   x + x = 0; x(2) = 0, x(2) = 0

26.17.   x + x = t;x(l) = 0,x(l) = l                             26.18.    y-y-2y = 0

26.19.   y-y-2y = 0; y(0) = 2, /(O) = 1                          26.20.    y-y-2y = e3';y(0) = 2, /(O) = 1


26.21.   y - y - 2y = e3' ; y(0) = 1, /(O) = 2                   26.22.    z + 9z + Uz = 9-sint; z(0) = 0, z(0) = - 1

26.23.   x = - 4x + 6y                                           26.24.    x + 5x - 12y = 0
         y = -3x + 5y;                                                     y + 2x - 5y = 0;
         x(0)=3,y(0) = 2                                                   ^(0) = 8, X°)= 3

26.25.   x-2y = 3                                                26.26.    x = x + 2y
         y + y-X = -t ;2
                                                                           y = 4x + 3y
         x(0) = 0,y(0) = -l

26.27.   x = 6t; x(0) = 0, x(0) = 0 , x(0) = 12                  26.28.    x + y =0
                                                                           y + x = 2e~' ;
                                                                           x(0) = 0, x(0) = - 2, y(0) = 0

26.29.   x = 2x + 5y + 3,
         y = ~ x - 2y;
         x(0) = 0,x(0) = 0,y(0) = l
                                                              CHAPTER 27



    Power Series Solutions
     of Linear Differential
            Equations with
      Variable Coefficients
SECOND-ORDER EQUATIONS
    A second-order linear differential equation


has variable coefficients when b2(x), b^x), and bQ(x) are not all constants or constant multiples of one another.
If b2(x) is not zero in a given interval, then we can divide by it and rewrite Eq. (27.1) as



where P(x) = b1(x)lb2(x), Q(x) = b0(x)lb2(x), and (f)(x) = g(x)lb2(x). In this chapter and the next, we describe
procedures for solving many equations in the form of (27.1) or (27.2). These procedures can be generalized
in a straightforward manner to solve higher-order linear differential equations with variable coefficients.


ANALYTIC FUNCTIONS AND ORDINARY POINTS
    A function/^) is analytic at x0 if its Taylor series about x0,




converges tof(x) in some neighborhood of x0.
      Polynomials, sin x, cos x, and e* are analytic everywhere; so too are sums, differences, and products of these
functions. Quotients of any two of these functions are analytic at all points where the denominator is not zero.
      The point x0 is an ordinary point of the differential equation (27.2) if both P(x) and Q(x) are analytic at x0.
If either of these functions is not analytic at x0, then x0 is a singular point of (27.2).

                                                          262
Copyright © 2006, 1994, 1973 by The McGraw-Hill Companies, Inc. Click here for terms of use.
CHAP. 27]           LINEAR DIFFERENTIAL EQUATIONS WITH VARIABLE COEFFICIENTS                                      263



SOLUTIONS AROUND THE ORIGIN OF HOMOGENEOUS EQUATIONS
    Equation (27.7) is homogeneous when g (x) = 0, in which case Eq. (27.2) specializes to


Theorem 27.1.     If x = 0 is an ordinary point of Eq. (27.3), then the general solution in an interval containing
                  this point has the form




                  where a0 and a^ are arbitrary constants and Ji(x) and y2(x) are linearly independent functions
                  analytic at x = 0.
    To evaluate the coefficients an in the solution furnished by Theorem 27.1, use the following five-step
procedure known as the power series method.
Step 1.   Substitute into the left side of the homogeneous differential equation the power series




          together with the power series for




          and



Step 2.   Collect powers of x and set the coefficients of each power of x equal to zero.
Step 3.   The equation obtained by setting the coefficient of x" to zero in Step 2 will contain a;- terms for a finite
          number of j values. Solve this equation for the a;- term having the largest subscript. The resulting equation
          is known as the recurrence formula for the given differential equation.
Step 4.   Use the recurrence formula to sequentially determine a, (j = 2, 3, 4,...) in terms of a0 and a^.
Step 5.   Substitute the coefficients determined in Step 4 into Eq. (27.5) and rewrite the solution in the form
          ofEq. (27.4).
     The power series method is only applicable when x = 0 is an ordinary point. Although a differential
equation must be in the form of Eq. (27.2) to determine whether x' = 0 is an ordinary point, once this condition
is verified, the power series method can be used on either form (27.7) or (27.2). If P(x) or Q(x) in (27.2) are
quotients of polynomials, it is often simpler first to multiply through by the lowest common denominator,
thereby clearing fractions, and then to apply the power series method to the resulting equation in the form of
Eq. (27.7).



SOLUTIONS AROUND THE ORIGIN OF NONHOMOGENEOUS EQUATIONS
     If (f> (x) in Eq. (27.2) is analytic at x = 0, it has a Taylor series expansion around that point and the power
series method given above can be modified to solve either Eq. (27.7) or (27.2). In Step 1, Eqs. (27.5) through
(27.7) are substituted into the left side of the nonhomogeneous equation; the right side is written as a Taylor
series around the origin. Steps 2 and 3 change so that the coefficients of each power of x on the left side of the
264                   LINEAR DIFFERENTIAL EQUATIONS WITH VARIABLE COEFFICIENTS                                 [CHAP. 27



equation resulting from Step 1 are set equal to their counterparts on the right side of that equation. The form of
the solution in Step 5 becomes


which has the form specified in Theorem 8.4. The first two terms comprise the general solution to the associated
homogeneous differential equation while the last function is a particular solution to the nonhomogeneous equation.


INITIAL-VALUE PROBLEMS
    Solutions to initial-value problems are obtained by first solving the given differential equation and then
applying the specified initial conditions. An alternate technique that quickly generates the first few terms of the
power series solution to an initial-value problem is described in Problem 27.23.


SOLUTIONS AROUND OTHER POINTS
     When solutions are required around the ordinary point x0 ^ 0, it generally simplifies the algebra if x0 is
translated to the origin by the change of variables t = x - x0. The solution of the new differential equation that
results can be obtained by the power series method about t = 0. Then the solution of the original equation is
easily obtained by back-substitution.




                                                Solved Problems

27.1.   Determine whether x = 0 is an ordinary point of the differential equation



              Here P(x) = -x and Q(x) = 2 are both polynomials; hence they are analytic everywhere. Therefore, every value
        of x, in particular x = 0, is an ordinary point.

27.2.   Find a recurrence formula for the power series solution around x = 0 for the differential equation given
        in Problem 27.1.
            It follows from Problem 27.1 that x = 0 is an ordinary point of the given equation, so Theorem 27.1 holds.
        Substituting Eqs. (27.5) through (27.7) into the left side of the differential equation, we find




        Combining terms that contain like powers of x, we have




        The last equation holds if and only if each coefficient in the left-hand side is zero. Thus,



        In general,
CHAP. 27]            LINEAR DIFFERENTIAL EQUATIONS WITH VARIABLE COEFFICIENTS                                             265




        which is the recurrence formula for this problem.


27.3.   Find the general solution near x = 0 of /' - xy' + 2y = 0.
             Successively evaluating the recurrence formula obtained in Problem 27.2 for n = Q, 1,2, ... , we
        calculate




        Note that since a 4 = 0, it follows from the recurrence formula that all the even coefficients beyond a4 are also zero.
        Substituting (_/) into Eq. (27.5) we have




             If we define




        then the general solution (2) can be rewritten as y = a0yi(x) + aiy2(x).


21 A.   Determine whether x = 0 is an ordinary point of the differential equation




              Here P(x) = 0 and Q(x) = 1 are both constants; hence they are analytic everywhere. Therefore, every value of
        x, in particular x = 0, is an ordinary point.


27.5.   Find a recurrence formula for the power series solution around x = 0 for the differential equation given
        in Problem 27.4.
            It follows from Problem 27.4 that x = 0 is an ordinary point of the given equation, so Theorem 27.1 holds.
        Substituting Eqs. (27.5) through (27.7) into the left side of the differential equation, we find
266                   LINEAR DIFFERENTIAL EQUATIONS WITH VARIABLE COEFFICIENTS                                        [CHAP. 27




        or




        Equating each coefficient to zero, we have
                              2a 2 +a 0 =0,   6a 3 +^ = 0, 12a 4 +a 2 =0,     20a 5 +a 3 = 0,   ...
        In general


        which is equivalent to



        This equation is the recurrence formula for this problem.


27.6.   Use the power series method to find the general solution near x = 0 of y" + y = 0.
              Since this equation has constant coefficients, its solution is obtained easily by either the characteristic equation
        method, Laplace transforms, or matrix methods as y = cl cos x + c2 sin x.
              Solving by the power series method, we successively evaluate the recurrence formula found in Problem 27.5
        for n = 0, 1, 2,..., obtaining




        Recall that for a positive integer n, n factorial, which is denoted by n\, is defined by
                                               «!=«(«-!)(«-2) •••(3)(2)(1)

        and 0! is defined as one. Thus, 4! = (4)(3)(2)(1) = 24 and 5! = (5)(4)(3)(2)(1) = 5(4!) = 120. In general,
        n\ =n(n- 1)!.
            Now substituting the above values for a2, a3, a 4 ,--- into Eq. (27.5) we have




        But
CHAP. 27]             LINEAR DIFFERENTIAL EQUATIONS WITH VARIABLE COEFFICIENTS                                              267



        Substituting these two results into (_/) and letting c1 = a0 and c 2 = a1; we obtain, as before,




27.7.   Determine whether x = 0 is an ordinary point of the differential equation



             Dividing by 2x2, we have




        As neither function is analytic at x = 0 (both denominators are zero there), x = 0 is not an ordinary point but, rather,
        a singular point.

27.8.   Determine whether x = 0 is an ordinary point of the differential equation




              Here P(x) = 2/x2 and Q(x) = IIx. Neither of these functions is analytic at x = 0, so x = 0 is not an ordinary point
        but, rather, a singular point.


27.9.   Find a recurrence formula for the power series solution around t = 0 for the differential equation




            Both P(t) = t — 1 and Q(t) = 2t — 3 are polynomials; hence every point, in particular t = 0, is an ordinary point.
        Substituting Eqs. (27.5) through (27.7) into the left side of the differential equation, with t replacing x, we have




        or




        Equating each coefficient to zero, we obtain



        In general,


        which is equivalent to




        Equation (2) is the recurrence formula for this problem. Note, however, that it is not valid for n = 0, because a_i
        is an undefined quantity. To obtain an equation for n = 0, we use the first equation in (_/), which gives
         a^ = \a^ +|a0
268                 LINEAR DIFFERENTIAL EQUATIONS WITH VARIABLE COEFFICIENTS                                      [CHAP. 27



27.10. Find the general solution near t = 0 for the differential equation given in Problem 27.9.
       We have from Problem 23.9 that




       Then evaluating recurrence formula (2) in Problem 27.9 for successive integer values of n beginning with n = 1, we
       find that




       Substituting these values into Eq. (27.5) with x replaced by t, we obtain as the general solution to the given differ-
       ential equation




27.11. Determine whether x = 0 or x= l i s a n ordinary point of the differential equation



       for any positive integer n.
            We first transform the differential equation into the form of Eq. (27.2) by dividing by x2- 1. Then




       Both of these functions have Taylor series expansions around x = 0, so both are analytic there and x = 0 is an
       ordinary point. In contrast, the denominators of both functions are zero at x = 1, so neither function is defined there
       and, therefore, neither function is analytic there. Consequently, x= 1 is a singular point.


27.12. Find a recurrence formula for the power series solution around x = 0 for the differential equation given
       in Problem 27.11.
            To avoid fractions, we work with the differential equation in its current form. Substituting Eqs. (27.5) through
       (27.7), with the dummy index n replaced by k, into the left side of this equation, we have that




       Combining terms that contain like powers of x, we obtain
CHAP. 27]            LINEAR DIFFERENTIAL EQUATIONS WITH VARIABLE COEFFICIENTS                                                269



       Noting that n2 + n - k2- k = (n - k)(n + k+ 1), we obtain the recurrence formula




27.13. Show that whenever n is a positive integer, one solution near x = 0 of Legendre's equation


            is a polynomial of degree n. (See Chapter 29.)
             The recurrence formula for this equation is given by Eq. (1) in Problem 27.12. Because of the factor n — k, we
       find, upon letting k = n, that an +2 = 0. It follows at once that 0 = an +4= an +6= an +s = .... Thus, if n is odd, all odd
       coefficients ak (k > n) are zero; whereas if n is even, all even coefficients ak (k > n) are zero. Therefore, either y\(x)
       or y2(x) in Eq. (27.4) (depending on whether n is even or odd, respectively) will contain only a finite number of
       nonzero terms up to and including a term in x"; hence, it is a polynomial of degree n.
             Since a0 and a1; are arbitrary, it is customary to choose them so that yi(x) or y2(x), whichever is the polyno-
       mial, will satisfy the condition y(\) = 1. The resulting polynomial, denoted by Pn(x), is known as the Legendre
       polynomial of degree n. The first few of these are




27.14. Find a recurrence formula for the power series solution around x = 0 for the nonhomogeneous differential
       equation (x2 + 4)y" + xy = x + 2.
             Dividing the given equation by x2 + 4, we see that x = 0 is an ordinary point and that (f> (x) = (x + 2)1 (x2 + 4) is
       analytic there. Hence, the power series method is applicable to the entire equation, which, furthermore, we may
       leave in the form originally given to simplify the algebra. Substituting Eqs. (27.5) through (27.7) into the given
       differential equation, we find that




       or




       Equating coefficients of like powers of x, we have


       In general,


       which is equivalent to




       (n = 2,3, ...). Note that the recurrence formula (3) is not valid for n = 0 or n = 1, since the coefficients of x° and
       x1 on the right side of (1) are not zero. Instead, we use the first two equations in (2) to obtain
270                 LINEAR DIFFERENTIAL EQUATIONS WITH VARIABLE COEFFICIENTS                                          [CHAP. 27



27.15. Use the power series method to find the general solution near x = 0 of



            Using the results of Problem 27.14, we have that a2 and a3 are given by (4) and an for (n = 4, 5, 6, ...) is given
       by (3). It follows from this recurrence formula that




       Thus,




            The third series is the particular solution. The first and second series together represent the general solution of
       the associated homogeneous equation (x2+4)y" + xy = 0.

27.16. Find the recurrence formula for the power series solution around t=0 for the nonhomogeneous
       differential equation (d2yldt2) + ty = et+1.
            Here P(t) = 0, Q(t) = t, and (f>(t) = et+1 are analytic everywhere, so t=0 is an ordinary point. Substituting
       Eqs. (27.5) through (27.7), with t replacing x, into the given equation, we find that




       Recall that et+1 has the Taylor expansion e'+ =            t" I n! about t = 0. Thus, the last equation can be rewritten as




       Equating coefficients of like powers of f, we have




       In general, (n + 2)(n+ l)an +2+ an_l= eln\ for n= 1, 2,..., or,




       which is the recurrence formula for n= 1, 2, 3,.... Using the first equation in (_/), we can solve for a 2 = e/2.


27.17. Use the power series method to find the general solution near t = 0 for the differential equation given in
       Problem 27.16.
           Using the results of Problem 27.16, we have a2 = e/2 and a recurrence formula given by Eq. (2). Using this
       formula, we determine that
CHAP. 27]           LINEAR DIFFERENTIAL EQUATIONS WITH VARIABLE COEFFICIENTS                                           271




       Substituting these results into Eq. (27.5), with x replaced by t, we obtain the general solution




27.18. Find the general solution near x = 2ofy"-(x- 2)y' + 2y = 0.
            To simplify the algebra, we first make the change of variables t = x — 2. From the chain rule we find the
       corresponding transformations of the derivatives of y:




       Substituting these results into the differential equation, we obtain




       and this equation is to be solved near t = 0. From Problem 27.3, with x replaced by t, we see that the solution is




       Substituting t = x — 2 into this last equation, we obtain the solution to the original problem as




27.19. Find the general solution near x = -1 of /' + xy' + (2x - l)y = 0.
             To simplify the algebra, we make the substitution t = x —(—l)=x+1. Then, as in Problem, 27.18
       (dyldx) = (dyldt) and ((fy/dx2) = (cPy/dt2). Substituting these results into the differential equation, we obtain




       The power series solution to this equation is found in Problems 27.9 and 27.10 as
272                  LINEAR DIFFERENTIAL EQUATIONS WITH VARIABLE COEFFICIENTS                                           [CHAP. 27



       Substituting back t = x+ 1, we obtain as the solution to the original problem




27.20. Find the general solution near x= 1 of /' + (x - l)y = ex.

            We set t = x - 1, hence x = t + 1. As in Problem 27.18,                   , so the given differential equation may be
       rewritten as




       Its solution is (see Problems 27.16 and 27.17)




       Substituting back t = x— 1, we obtain as the solution to the original problem




27.21. Solve the initial-value problem


            Since the initial conditions are prescribed at x = 2, they are most easily satisfied if the solution to the differential
       equation is obtained as a power series around this point. This has already been done in Eq. (_/) of Problem 27.18.
       Applying the initial conditions directly to this solution, we find that a0 = 5 and aj = 60. Thus, the solution is




27.22. Solve /' + xy' + (2x - l)y = 0; X~l) = 2, /(-I) = -2.
             Since the initial conditions are prescribed at x = — 1, it is advantageous to obtain the general solution to the
       differential equation near x = — 1. This has already been done in Eq. (_/) of Problem 27.19. Applying the initial
       conditions, we find that a 0 = 2 and aj = - 2. Thus, the solution is
CHAP. 27]            LINEAR DIFFERENTIAL EQUATIONS WITH VARIABLE COEFFICIENTS                                                273



27.23. Solve Problem 27.22 by another method.
           TAYLOR SERIES METHOD. An alternative method for solving initial-value problems rests on the
       assumption that the solution can be expanded in a Taylor series about the initial point XQ; i.e.,




       The terms y(x0) and y'(x0) are given as initial conditions; the other terms y(n\x0) (n = 2,3, ...) can be obtained by
       successively differentiating the differential equation. For Problem 27.22 we have xQ=-l, y(xQ) = y(-l) = 2, and
       y'(xQ) = y'(-l) = - 2. Solving the differential equation of Problem 23.22 for y", we find that


       We obtain y"(x0) = y"(—l) by substituting x0 = — 1 into (2) and using the given initial conditions. Thus,


       To obtain y"(-l), we differentiate (2) and then substitute XQ= -1 into the resulting equation. Thus,


       and


       To obtain y(4\-l), we differentiate (4) and then substitute x0= -1 into the resulting equation. Thus,


       and


       This process can be kept up indefinitely. Substituting Eqs. (3), (5), (7), and the initial conditions into (_/), we obtain,
       as before,




       One advantage in using this alternative method, as compared to the usual method of first solving the differential
       equation and then applying the initial conditions, is that the Taylor series method is easier to apply when only the
       first few terms of the solution are required. One disadvantage is that the recurrence formula cannot be found by the
       Taylor series method, and, therefore, a general expression for the wth term of the solution cannot be obtained. Note
       that this alternative method is also useful in solving differential equations without initial conditions. In such cases,
       we set y(x0) = a0 and y'(x0) = a1; where a0 and a^ are unknown constants, and proceed as before.

27.24. Use the method outlined in Problem 27.23 to solve /' - 2xy = 0; y(2) = 1, /(2) = 0.
             Using Eq. (_/) of Problem 27.23, we assume a solution of the form



       From the differential equation,


       Substituting x = 2 into these equations and using the initial conditions, we find that
274                    LINEAR DIFFERENTIAL EQUATIONS WITH VARIABLE COEFFICIENTS                                        [CHAP. 27



         Substituting these results into Eq. (_/), we obtain the solution as




27.25. Show that the method of undetermined coefficients cannot be used to obtain a particular solution of
       y" + xy = 2.
               By the method of undetermined coefficients, we assume a particular solution of the form yp = A^, where m
         might be zero if the simple guess yp = AQ does not require modification (see Chapter 11). Substituting yp into the
         differential equation, we find


         Regardless of the value of m, it is impossible to assign AQ any constant value that will satisfy (_/). It follows that the
         method of undetermined coefficients is not applicable.
              One limitation on the method of undetermined coefficients is that it is only valid for linear equations with
         constant coefficients.




                                          Supplementary Problems

In Problems 27.26 through 27.34, determine whether the given values of x are ordinary points or singular points of the given
differential equations.

27.26. x= l;y" + 3y' + 2xy = 0                                   27.27. x = 2;(x- 2)y" + 3(x2-3x + 2)/ +(x- 2)2y = 0

27.28.   x = Q;(x + l)y"+-y' + xy = Q                            27.29. x = -l;(x + l)y' + -y'+xy = 0
                            X                                                                  x
                                                                                  i
27.30. x = 0; x^y" + y = 0                                       27.31. x = 0;x y" + xy = 0
                x
27.32. x = 0; e y" + (sin x)y' + xy = 0                          27.33. x = -l;(x+ ify" + (x2-l)(x + I)/ +(x-l)y = 0
                                            2
27.34. x = 2; x\£ - 4)y" +(x+l)y'+ (x -3x + 2)y = 0

27.35. Find the general solution near x = 0 of y" - y' = 0. Check your answer by solving the equation by the method of
       Chapter 9 and then expanding the result in a power series about x = 0.

In Problems 27.36 through 27.47, find (a) the recurrence formula and (b) the general solution of the given differential
equation by the power series method around, the given value of x.

27.36. x = 0; y" + xy = 0                                        27.37. x = 0; y"-2xy'-2y = 0
                                                                                          2
27.38. x = 0; /' + x2y' + 2xy = 0                                27.39. x = 0; y" - x y' - y = 0
                                                                                      2
27.40. x = 0; y" + 2x2y = 0                                      27.41. x = 0; (x -l)y" + xy'-y = 0

27.42. x = 0; y"-xy = 0                                          27.43. x=l; y"-xy = 0
                                                                                      2
27.44. x = -2; y" -x2y ' + (x + 2)y = 0                          27.45. x = 0; (x +4)y" + y = x
                                                                                              x
27.46. x=l; y"-(x- I)/ = x2 - 2x                                 27.47. x = Q- y"-xy' = e-

27.48. Use the Taylor series method described in Problem 27.23 to solve /' - 2xy' + x2y = 0; y(0) = 1, /(O) = -1.

27.49. Use the Taylor series method described in Problem 27.23 to solve /' - 2xy = x2; y ( l ) = 0, /(I) = 2.
                                                               CHAPTER 28



                                      Series Solutions
                                       Near a Regular
                                       Singular Point
REGULAR SINGULAR POINTS
     The point x0 is a regular singular point of the second-order homogeneous linear differential equation


if XQ is not an ordinary point (see Chapter 27) but both (x — x0)P(x) and (x — x0)2Q(x) are analytic at XQ. We only
consider regular singular points at XQ = 0; if this is not the case, then the change of variables t = x — XQ will translate
XQ to the origin.


METHOD OF FROBENIUS
     Theorem 28.1. If x = 0 is a regular singular point of (28.1), then the equation has at least one solution of
                   the form



                        where A, and an (« = 0, 1, 2, ...) are constants. This solution is valid in an interval
                        0 < x < R for some real number R.
   To evaluate the coefficients an and A, in Theorem 28.1, one proceeds as in the power series method of
Chapter 27. The infinite series




with its derivatives




                                                           275
Copyright © 2006, 1994, 1973 by The McGraw-Hill Companies, Inc. Click here for terms of use.
276                        SERIES SOLUTIONS NEAR A REGULAR SINGULAR POINT                                  [CHAP. 28




and




are substituted into Eq. (28.1). Terms with like powers of x are collected together and set equal to zero. When
this is done for x" the resulting equation is a recurrence formula. A quadratic equation in A,, called the indicial
equation, arises when the coefficient of x° is set to zero and a0 is left arbitrary.
     The two roots of the indicial equation can be real or complex. If complex they will occur in a conjugate
pair and the complex solutions that they produce can be combined (by using Euler's relations and the identity
xa± ib _ xag ± ib in ^ to f orm reaj solutions. In this book we shall, for simplicity, suppose that both roots of the
indicial equation are real. Then, if A, is taken as the larger indicial root, A = Ax > A2, the method of Frobenius
always yields a solution



to Eq. (28.1). [We have written an(k]) to indicate the coefficients produced by the method when A = A x .]
    If P(x) and Q(x) are quotients of polynomials, it is usually easier first to multiply (28.1) by their lowest
common denominator and then to apply the method of Frobenius to the resulting equation.


GENERAL SOLUTION
     The method of Frobenius always yields one solution to (28.1) of the form (28.5). The general solution (see
Theorem 8.2) has the form y = c^y^x) + C2y2(x) where c1 and c2 are arbitrary constants and y2(x) is a second
solution of (28.1) that is linearly independent from yi(x). The method for obtaining this second solution depends
on the relationship between the two roots of the indicial equation.
        Case 1. If A! - A2 is not an integer, then



        where y2(x) is obtained in an identical manner as y\(x) by the method of Frobenius, using A^ m place of A x .
        Case 2.   If Ax = A2, then



       To generate this solution, keep the recurrence formula in terms of A and use it to find the coefficients
       an (n > 1) in terms of both A and a0, where the coefficient a0 remains arbitrary. Substitute these an into
       Eq. (28.2) to obtain a function y(k, x) which depends on the variables A and x. Then




        Case 3. If Ax - A2 = N, a positive integer, then



       To generate this solution, first try the method of Frobenius. with A2. If it yields a second solution, then
       this solution is y2(x), having the form of (28.9) with d^ = 0. Otherwise, proceed as in Case 2 to generate
       y(k, x), whence
CHAP. 28]                    SERIES SOLUTIONS NEAR A REGULAR SINGULAR POINT                                                277



                                                Solved Problems

28.1.   Determine whether x = 0 is a regular singular point of the differential equation



             As shown in Problem 27.1, x = 0 is an ordinary pont of this differential equation, so it cannot be a regular
        singular point.


28.2.   Determine whether x = 0 is a regular singular point of the differential equation



             Dividing by 2x2, we have



        As shown in Problem 27.7, x = 0 is a singular point. Furthermore, both




        are analytic everywhere: the first is a polynomial and the second a constant. Hence, both are analytic at x = 0, and
        this point is a regular singular point.

28.3.   Determine whether x = 0 is a regular singular point of the differential equation



             Dividing by x3, we have



        Neither of these functions is defined at x = 0, so this point is a singular point. Here,




        The first of these terms is analytic everywhere, but the second is undefined at x = 0 and not analytic there. Therefore,
        x = 0 is not a regular singular point for the given differential equation.


28.4.   Determine whether x = 0 is a regular singular point of the differential equation



             Dividing by &c2, we have



        Neither of these functions is defined at x = 0, so this point is a singular point. Furthermore, both




        are analytic everywhere: the first is a constant and the second a polynomial. Hence, both are analytic at x = 0, and
        this point is a regular singular point.
278                          SERIES SOLUTIONS NEAR A REGULAR SINGULAR POINT                                        [CHAP. 28



28.5.   Find a recurrence formula and the indicia! equation for an infinite series solution around x = 0 for the
        differential equation given in Problem 28.4.
             It follows from Problem 28.4 that x = 0 is a regular singular point of the differential equation, so Theorem 24.1
        holds. Substituting Eqs. (28.2) through (28.4) into the left side of the given differential equation and combining
        coefficients of like powers of x, we obtain




        Dividing by x^ and simplifying, we have




        Factoring the coefficient of an and equating the coefficient of each power of x to zero, we find



        and, for n > 1,



        or,


        Equation (2) is a recurrence formula for this differential equation.
            From (1), either a0 = 0 or


        It is convenient to keep a0 arbitrary; therefore, we must choose X to satisfy (3), which is the indicial equation.


28.6.   Find the general solution near x = 0 of 8x1y" + lOxy' + (x - l)y = 0.
              The roots of the indicial equation given by (3) of Problem 28.5 are Xj = ^, and X2 = — j. Since Xj - X 2 = |,
        the solution is given by Eqs. (28.5) and (28.6). Substituting X = ^ into the recurrence formula (2) of Problem 28.5
        and simplifying, we obtain




        Thus,


        and


              Substituting X = -y into recurrence formula (2) of Problem 28.5 and simplifying, we obtain




        Thus,


        and
CHAP. 28]                    SERIES SOLUTIONS NEAR A REGULAR SINGULAR POINT                                                 279



              The general solution is




        where ki = Cia0 and k2 = C2a0.


28.7.   Find a recurrence formula and the indicia! equation for an infinite series solution around x = 0 for the
        differential equation



             It follows from Problem 28.2 that x = 0 is a regular singular point of the differential equation, so Theorem 28.1
        holds. Substituting Eqs. (28.2) through (28.4) into the left side of the given differential equation and combining
        coefficients of like powers of x, we obtain




        Dividing by x^" and simplifying, we have




        Factoring the coefficient of an and equating each coefficient to zero, we find


        and, for n > 1,



        or,


        Equation (2) is a recurrence formula for this differential equation.
            From (_/), either a0 = 0 or


        It is convenient to keep a0 arbitrary; therefore, We require A, to satisfy the indicial equation (3).


28.8.   Find the general solution near x = 0 of 2x2y" + 7x(x + I)/ - 3y = 0.

              The roots of the indicial equation given by (3) of Problem 28.7 are A,j = -| and A,2 = -3. Since A,j — A,2 = |, the
        solution is given by Eqs. (28.5) and (28.6). Substituting A, = £ into (2) of Problem 28.7 and simplifying,
        we obtain




        Thus,


        and
280                           SERIES SOLUTIONS NEAR A REGULAR SINGULAR POINT                                           [CHAP. 28



              Substituting X = -3 into (2) of Problem 28.7 and simplifying, we obtain




        Thus,


        and, since a4 = 0, an = 0 for n > 4. Thus,




              The general solution is




        where ki = Cia0 and k2 = c2a0.

28.9.   Find the general solution near x = 0 of 3.x2)/' - xy' + y = 0.
             Here P(x) = -l/(3x) and Q(x) = l/(3x2); hence, x = 0 is a regular singular point and the method of Frobenius is
        applicable. Substituting Eqs. (28.2) through (28.4) into the differential equation and simplifying, we have

                  jt^SA,2 - 4A, + l]a0 + ^1+ 1[3X2 + 2X]a1 + ••• +^ + "[3(X + n)2 -4(X + n) + l]an + ••• = 0

        Dividing by x and equating all coefficients to zero, we find



        and

        From (1), we conclude that the indicial equation is 3A,2 — 4A, + 1 = 0, which has roots A,j = 1 and A,2 = i.

        Since A,j — A,2 = |, the solution is given by Eqs. (28.5) and (28.6). Note that for either value of A,, (2) is satisfied by
        simply choosing an = 0, n > 1. Thus,




        and the general solution is


        where k± = c^ and k2 = c2aQ.


28.10. Use the method of Frobenius to find one solution near x = 0 of xzy" + xy' + x2y = 0.
             Here P(x) = 1/x and Q(x) = 1, so x = 0 is a regular singular point and the method of Frobenius is applicable.
        Substituting Eqs. (28.2) through (28.4) into the left side of the differential equation, as given, and combining
        coefficients of like powers of x, we obtain



        Thus,


        and, for n > 2, (X, + n)2an + an _2 = 0, or,
CHAP. 28]                   SERIES SOLUTIONS NEAR A REGULAR SINGULAR POINT                                                    281



       The stipulation n > 2 is required in (3) because an _2 is not defined for n = 0 or n = 1. From (1), the indicial equation
       is X2 = 0, which has roots, A,j = A^ = 0. Thus, we will obtain only one solution of the form of (28.5); the second solution,
       y2(x), will have the form of (28.7).
              Substituting X = 0 into (2) and (3), we find that aj = 0 and an = -(l/w 2 )a n _ 2 - Since «i = 0, it follows that
       Q = a3 = a5 = a7= •••. Furthermore,




       and, in general, ,                  (k= 1, 2,3, ...). Thus,




28.11. Find the general solution near x = 0 to the differential equation given in Problem 28.10.
            One solution is given by (4) in Problem 28.10. Because the roots of the indicial equation are equal, we use Eq. (28.8)
       to generate a second linearly independent solution. The recurrence formula is (3) of Problem 28.10, augmented by (2)
       of Problem 28.10 for the special case n = 1. From (2), aj = 0, which implies that 0 = a3 = as = a7 = • • •. Then, from (3),



       Substituting these values into Eq. (28.2), we have




       Recall that                    In x. (When differentiating with respect to X, x can be thought of as a constant.) Thus,




       and




       which is the form claimed in Eq. (28.7). The general solution is y = c^^x) + C2y2(x).
282                         SERIES SOLUTIONS NEAR A REGULAR SINGULAR POINT                                              [CHAP. 28




28.12. Use the method of Frobenius to find one solution near x = 0 of xzy" - xy' + y = 0.
             Here P(x) = -1/x and Q(x) = l/x2, so x = 0 is a regular singular point and the method of Frobenius is applicable.
       Substituting Eqs. (28.2) through (28.4) into the left side of the differential equation, as given, and combining coefficients
       of like powers of x, we obtain



       Thus,

       and, in general,

       From (1), the indicial equation is (A - I) 2 = 0, which has roots A: = A2 = 1. Substituting X = 1 into (2), we obtain
       n2an = 0, which implies that an = 0, n > 1. Thus, yi(x) = a^.


28.13. Find the general solution near x = 0 to the differential equation given in Problem 28.12.
             One solution is given in Problem 28.12. Because the roots of the indicial equation are equal, we use Eq. (28.8)
       to generate a second linearly independent solution. The recurrence formula is (2) of Problem 28.12. Solving it for
       an, in terms of A, we find that an = Q (n> 1), and when these values are substituted into Eq. (28.2), we have
       y (A, x) = a0x^. Thus,




       and


       which is precisely the form of Eq. (28.7), where, for this particular differential equation, bn(ki) = 0(n = 0, 1,2, ...).
       The general solution is



       where fcj = C^Q, and k2 = C2a0.


28.14. Use the method of Frobenius to find one solution near x = 0 of x^y" + (x2 - 2x)y' + 2y = 0.
             Here



       so x = 0 is a regular singular point and the method of Frobenius is applicable. Substituting, Eqs. (28.2) through
       (28.4) into the left side of the differential equation, as given, and combining coefficients of like powers of x, we
       obtain




       Dividing by x^, factoring the coefficient of an, and equating the coefficient of each power of x to zero, we obtain



       and, in general, [(A + n) - 2] [(A + n) - l]an + (A + n - l)an _ i = 0, or,




       From (_/), the indicial equation is A2 - 3A + 2 = 0, which has roots A: = 2 and A2 = 1. Since A: - A^ = 1, a positive
       integer, the solution is given by Eqs. (28.5) and (28.9). Substituting A, = 2 into (2), we have an = —(lln)an_1,
CHAP. 28]                  SERIES SOLUTIONS NEAR A REGULAR SINGULAR POINT                                             283



       from which we obtain




       and, in general, ak =         Thus,




28.15. Find the general solution near x = 0 to the differential equation given in Problem 28.14.
            One solution is given by (3) in Problem 28.14 for the indicial. root A,j = 2. If we try the method of Frobenius
       with the indicial root X2 = 1, recurrence formula (2) of Problem 28.14 becomes




       which leaves a1; undefined because the denominator is zero when n=\. Instead, we must use (28.10) to generate a
       second linearly independent solution. Using the recurrence formula (2) of Problem 28.14 to solve sequentially for
       an (n = 1, 2, 3, ...) in terms of X, we find




       Substituting these values into Eq. (28.2) we obtain




       and, since X - X2 = X - 1,




       Then




       and




            This is the form claimed in Eq. (28.9), with d_i = -l, d0 = aQ, di = 0, d3 =|a 0 ,.... The general solution is
       y = crf^x) + C2y2(x).
284                         SERIES SOLUTIONS NEAR A REGULAR SINGULAR POINT                                           [CHAP. 28




28.16. Use the method of Frobenius to find one solution near x = 0 of Jt2/' + xy' + (x2 - \)y = 0.
           Here



       so x = 0 is a regular singular point and the method of Frobenius is applicable. Substituting Eqs. (28.2) through (28.4)
       into the left side of the differential equation, as given, and combining coefficients of like powers of x, we obtain




       Thus,



       and, for n > 2, [(A + nf - l]an + an _2 = 0, or,




       From (_/), the indicial equation is X2 - 1 = 0, which has roots A^ = 1 and A2 = —1. Since AJ - A^ = 2, a positive integer,
       the solution is given by (28.5) and (28.9). Substituting X = 1 into (2) and (3), we obtain aj = 0 and




       Since «i = 0, it follows that 0 = a3 = a5 = a7= •••. Furthermore,




       and, in general,



       Thus,



28.17. Find the general solution near x = 0 to the differential equation given in Problem 28.16.
            One solution is given by (4) in Problem 28.16 for the indicial root A: = 1. If we try the method of Frobenius
       with the indicial root A2 =—1, recurrence formula (3) of Problem 28.16 becomes




       which fails to define a2 because the denominator is zero when n = 2. Instead, we must use Eq. (28.10) to generate
       a second linearly independent solution. Using Eqs. (2) and (3) of Problem 28.16 to solve sequentially for
       an(n= 1, 2, 3, ...) in terms of A, we find 0 = al = a3 = a5 = ••• and




       Thus,


       Since A - A 2 = A + 1,
CHAP. 28]                   SERIES SOLUTIONS NEAR A REGULAR SINGULAR POINT                                                   285



       and




       Then




       This is in the form of (28.9) with d -^ =      da = aa, di = 0, d2 =   a0, di = 0, d4 =   •a 0 ,....The general solution is
       y = c1y1(x) + c2y2(x).


28.18. Use the method of Frobenius to find one solution near x = 0 of x2y" + (x2 + 2x)y' - 2y = 0.
              Here

                                                             and

       so x = 0 is a regular singular point and the method of Frobenius is applicable. Substituting Eqs. (28.2) through (28.4)
       into the left side of the differential equation, as given, and combining coefficients of like powers of x, we obtain




       Dividing by x^, factoring the coefficient of an, and equating to zero the coefficient of each power of x, we obtain


       and, for n > 1,


       which is equivalent to




       From (_/), the indicial equation is X2 + X - 2 = 0, which has roots Xj = 1 and ^ = -2. Since Xj - ^ = 3, a positive
       integer, the solution is given by Eqs. (28.5) and (28.9). Substituting X = 1 into (2), we obtain an = [-11 (n + 3)]an _ 1;
       which in turn yields
286                        SERIES SOLUTIONS NEAR A REGULAR SINGULAR POINT                                      [CHAP. 28



       and, in general,




       Hence,


       which can be simplified to




28.19. Find the general solution near x = 0 to the differential equation given in Problem 28.18.
            One solution is given by (3) in Problem 28.18 for the indicial root A,j = 1. If we try the method of Frobenius
       with the indicial root X2 = -2, recurrence formula (2) of Problem 28.18 becomes




       which does define all an(n > 1). Solving sequentially, we obtain




       and, in general, ak = (-I)ka0lk\. Therefore,




       This is precisely in the form of (28.9), with rf_j = 0 and dn = (-I)"a0/n\. The general solution is




28.20. Find a general expression for the indicial equation of (28.1).
            Since x = 0 is a regular singular point; xP(x) and x2Q(x) are analytic near the origin and can be expanded in
       Taylor series there. Thus,




       Dividing by x and x2, respectively, we have


       Substituting these two results with Eqs. (28.2) through (28.4) into (28.1) and combining, we obtain


       which can hold only if


       Since a0^0 (a0 is an arbitrary constant, hence can be chosen nonzero), the indicial equation is
CHAP. 28]                  SERIES SOLUTIONS NEAR A REGULAR SINGULAR POINT                                                287




28.21. Find the indicial equation of x2y" + xe*y' + (x3 - \)y = 0 if the solution is required near x = 0.
            Here



       and we have




       from which/70 = 1 and qQ = —1. Using (_/) of Problem 28.20, we obtain the indicial equation as X2 - 1 = 0.


28.22. Solve Problem 28.9 by an alternative method.
            The given differential equation, 3x2y" — xy' + y = 0, is a special case of Ruler's equation



       where bj(j=0, 1, ... , n) is a constant. Euler's equation can always be transformed into a linear differential equation
       with constant coefficients by the change of variables



       It follows from (2) and from the chain rule and the product rule of differentiation that




            Substituting Eqs. (2), (3), and (4) into the given differential equation and simplifying, we obtain




       Using the method of Chapter 9 we find that the solution of this last equation is y = c^ + c2e<1/3)z. Then using (2)
       and noting that e(1/3)z = (e1)113, we have as before,




28.23. Solve the differential equation given in Problem 28.12 by an alternative method.
           The given differential equation, x2y" — xy' + y = 0, is a special case of Euler's equation, (_/) of Problem 28.22.
       Using the transformations (2), (3), and (4) of Problem 28.22, we reduce the given equation to




       The solution to this equation is (see Chapter 9) y = c^ + c2zez. Then, using (2) of Problem 28.22, we have for the
       solution of the original differential equation


       as before.
288                         SERIES SOLUTIONS NEAR A REGULAR SINGULAR POINT                                           [CHAP. 28



28.24. Find the general solution near x = 0 of the hypergeometric equation



       where A and B are any real numbers, and C is any real nonintegral number.
            Since x = 0 is a regular singular point, the method of Frobenius is applicable. Substituting, Eqs. (28.2) through
       (28.4) into the differential equation, simplifying and equating the coefficient of each power of x to zero, we obtain



       as the indicial equation and




       as the recurrence formula. The roots of (1) are A^ = 0 and A^ = 1 - C; hence, A: - A^ = C - 1. Since C is not an integer,
       the solution of the hypergeometric equation is given by Eqs. (28.5) and (28.6).
            Substituting A, = 0 into (2), we have



       which is equivalent to



       Thus




       and y>i(x) = aQF(A, B; C; x), where




       The series F(A, B; C; x) is known as the hypergeometric series; it can be shown that this series converges for -1 < x < 1.
       It is customary to assign the arbitrary constant ag the value 1. Then y\(x) = F(A, B; C; x) and the hypergeometric series
       is a solution of the hypergeometric equation.
              To find y2(x), we substitute A, = 1 - C into (2) and obtain




       or


       Solving for an in terms of a0, and again setting a0 = 1, it follows that



       The general solution is y = c^^x) + C2y2(x).
CHAP. 28]                     SERIES SOLUTIONS NEAR A REGULAR SINGULAR POINT                                            289



                                        Supplementary Problems

In Problems 28.25 through 28.33, find two linearly independent solutions to the given differential equations.

28.25. 2x2y"-xy' + (l-x)y = 0                              28. 26.   2x2y" + (x2 - x)y' + y = 0

28.27. 3x2y" - 2xy' - (2 + x2)y = 0                        28.28. xy" + y'-y = 0

28.29. x2y" + xy' + x3y = 0                                28. 30. x2y" + (x-x2)y'-y = 0

28.31. xy" -(x + l)y'-y = 0                                28.32.    4x2y" + (4x + 2x2)y' + (3x - l)y = 0

28.33. x2y" + (x2 - 3x)y' -(x-4)y = 0

In Problem 28.34 through 28.38, find the general solution to the given equations using the method described in Problem 28.22.

28.34. 4x2y" + 4xy' - y = 0                                28.35.    x2y"-3xy' + 4y = 0

28. 36. 2x2y" + 1 Ley' + 4y = 0                            28.37.    x2y"-2y = 0

28.38. x2y"-6xy' = 0
                                                              CHAPTER 29



              Some Classical
       Differential Equations
CLASSICAL DIFFERENTIAL EQUATIONS
     Because some special differential equations have been studied for many years, both for the aesthetic beauty
of their solutions and because they lend themselves to many physical applications, they may be considered
classical. We have already seen an example of such an equation, the equation of Legendre, in Problem 27.13.
     We will touch upon four classical equations: the Chebyshev differential equation, named in honor of Pafnuty
Chebyshey (1821-1894); the Hermite differential equation, so named because of Charles Hermite (1822-1901);
the Laguerre differential equation, labeled after Edmond Laguerre (1834-1886); and the Legendre differential
equation, so titled because of Adrien Legendre (1752-1833). These equations are given in Table 29-1 below:


                                                      Table 29-1
                                               (Note: n = 0, 1,2,3, ...)

                      Chebyshev Differential Equation            (1 - x2) y" -xy' + n2y = 0

                      Hermite Differential Equation                  y" - 2xy' + 2ny = 0

                      Laguerre Differential Equation              xy" + (1 - *)/ + ny = 0
                      Legendre Differential Equation          (1 - x2)y" - 2xy' + n(n + l)y =0


POLYNOMIAL SOLUTIONS AND ASSOCIATED CONCEPTS
     One of the most important properties these four equations possess, is the fact that they have polynomial
solutions, naturally called Chebyshev polynomials, Hermite polynomials, etc.
     There are many ways to obtain these polynomial solutions. One way is to employ series techniques, as
discussed in Chapters 27 and 28. An alternate way is by the use of Rodrigues formulas, so named in honor of
O. Rodrigues (1794-1851), a French banker. This method makes use of repeated differentiations (see, for example,
Problem 29.1).
     These polynomial solutions can also be obtained by the use of generating Junctions. In this approach, infinite
series expansions of the specific function "generates" the desired polynomials (see Problem 29.3). It should be
noted, from a computational perspective, that this approach becomes more time-consuming the further along
we go in the series.


                                                           290
Copyright © 2006, 1994, 1973 by The McGraw-Hill Companies, Inc. Click here for terms of use.
CHAP. 29]                        SOME CLASSICAL DIFFERENTIAL EQUATIONS                                    291



     These polynomials enjoy many properties, orthogonality being one of the most important. This condition,
which is expressed in terms of an integral, makes it possible for "more complicated" functions to be expressed
in terms of these polynomials, much like the expansions which will be addressed in Chapter 33. We say that the
polynomials are orthogonal with respect to a weight function (see, for example, Problem 29.2).
     We now list the first five polynomials (n = 0, 1, 2, 3, 4) of each type:


  •   Chebyshev Polynomials, Tn(x):
            T0(x) = 1
            Tl(x)=x
            T2(x) = 2x2-l
            T3(x) = 4x*-3x
            T4(x) = 8x4 - &C2 + 1



  Hermite Polynomials,n(x):H
            H0(x)=l
            H!(X) = 2x
            H2(x) = 4x2-2
            H3(x) = 8.x3 - I2x
            H4(x) = I6x4 - 48.x2 + 12


  Laguerre Polynomials,
                     n(x): L

            L0(x) = 1
            Lv(x) = -x + 1
            L2(x) =x2-4x+2
            L3(x) = -x* + 9x2 -18^ + 6
            L4(x) =x4- 16X3 + 72X2 - 96x + 24



 Legendre Polynomials,n(x):
                         P
            P0(x) = 1
            Pi(x) = x
292                                SOME CLASSICAL DIFFERENTIAL EQUATIONS                                          [CHAP. 29




                                                Solved Problems

29.1.   Let n = 2 in the Reunite DE. Use the Rodrigues formula to find the polynomial solution.
             The Hermite DE becomes y" - 2xy' + 4y = 0. The Rodrigues formula for the Hermite polynomials, Hn(x), is
        given by




        Letting n = 2, we have H2(x) =                                   This agrees with our listing above and via direct
                                                2
        substitution into the DE, we see that 4x - 2 is indeed a solution.
        Notes: 1) Any non-zero multiple of 4x2 - 2 is also a solution. 2) When n = 0 in the Rodrigues formula, the "0-th
        Derivative" is defined as the function itself. That is,




29.2.   Given the Laguerre polynomials L^(x) = —x + 1 and L2(x) = x2 -4x + 2, show that these two functions
        are orthogonal with respect to the weight Junction e~x on the interval (0, °°).
             Orthogonality of these polynomials with respect to the given weight function means
         \(-x + 1) (x2 - 4x + 2)e~xdx = 0. This integral is indeed zero, as is verified by integration by parts and applying
         o
        L'Hospital's Rule.


29.3.   Using the generating function for the Chebyshev polynomials, Tn(x), find T0(x), T^x), and T2(x).
             The desired generating function is given by




        Using long division on the left side of this equation and combing like powers of t yields:



        Hence, TQ(x) = 1, TI(X) = x, and T2(x) = 2x2 - 1, which agrees with our list above. We note that, due to the nature of
        the computation, the use of the generating function does not provide an efficient way to actually obtain the
        Chebyshev polynomials.


29.4.   Let n = 4 in the Legendre DE; verify that P4(x) =          (35x4 - 30x2 + 3) is a solution.

             The DE becomes (1 -x2) y"- 2xy' + 20y = 0. Taking the first and second derivatives of PAx), we obtain
                                                             Direct substitution into the DE, followed by collecting like
        terms of x,




29.5.   The Hermite polynomials, Hn(x), satisfy the recurrence relation



        Verify this relationship for n = 3.
CHAP. 29]                               SOME CLASSICAL DIFFERENTIAL EQUATIONS                                                   293



                  If n = 3, then we must show that the equation H4(x) = 2xH3(x) - 6H2(x) is satisfied by the appropriate Hermite
             polynomials. Direct substitution gives



             We see that the right-side does indeed equal the left side, hence, the recurrence relation is verified.


29.6.    Legendre polynomials satisfy the recurrence formula



         Use this formula to find P5 (x).
                  Letting n = 4 and solving for P$(x), we have P5(x) =    (9xP4(x) - 4P 3 (x)). Substituting for P3(x) and for P4(x),
             we have P5(x) = (63x5 - 70x3 + I5x).


29.7.        Chebyshev polynomials, Tn (x), can also be obtained by using the formula Tn(x) = cos(« cos 1(x)). Verify
             this formula for T2(x) = 2x2 - 1.
              Letting n = 2, we have cos(2cos"1(jc)). Let a= cos"1^). Then cos(2a) = cos2(a) - sin2(a) = cos2(a)
         - (1 - cos2(a)) = 2 cos2(a) -1. But if a = cos"1^), then x = cos(a). Hence, cos(2 cos"1^)) = 2x2 -1 = T2(x).


29.8.    The differential equation (1 - x2)y" + Axy' + By = 0 closely resembles both the Chebyshev and Legendre
         equations, where A and B are constants. A theorem of differential equations states that this differential
         equation has two finite polynomial solutions, one of degree m, the other of degree «, if and only if
         A = m + n — 1 and B = —mn, where m and n are nonnegative integers and n + m is odd.
             For example, the equation (1 - x2)y" + 4xy' -6y = 0 has polynomial solutions of degree 2 and 3:
         y = 1 + 3x2 and y = x H           (these are obtained by using the series techniques discussed in Chapter 27).
                  We note here that A = 4 = n + m— 1 and B = —6 = —mn necessarily imply that m = 2, n = 3
             (or conversely). Hence our theorem is verified for this equation.
                  Determine whether the three following differential equations have two polynomial solutions:
             a) (1 - x2)y" + 6xy' - Uy = 0; b) (1 - Jt2)/' + xy' + 8y = 0; c) (1 - x2)y" - xy' + 3y = 0.

        a)     Here A = 6 = n + m- 1, B = -mn = -12 implies m = 3, n = 4; hence we have two finite polynomial solutions, one
               of degree 3, the other of degree 4.
        b)     Here A = 1 and B = 8; this implies m = 2, n = -4; therefore, we do not have two such solutions. (We will have
               one polynomial solution, of degree 2.)
        c)     Since A = -l, B = 3 implies m = -^j3, w = -V3, we do not have two polynomial solutions to the differential
               equation.




                                             Supplementary Problems

29.9.        Verify H2(x) and H3(x) are orthogonal with respect to the weight function e~x on the interval (—°°, °°).

29.10. Find H5(x) by using the recurrence formula Hn + i(x) = 2xHn(x) - 2nHn _l(x).

29.11. The Rodrigues formula for the Legendre polynomials is given by
294                                SOME CLASSICAL DIFFERENTIAL EQUATIONS                                         [CHAP. 29



Use this formula to obtain P5(x). Compare this to the results given in Problem 29.6.

29.12.   Find Pf(x) by following the procedure given in Problem 29.6.

29.13. Following the procedure in Problem 29.7, show that




29.14. Chebyshev polynomials satisfy the recursion formula




Use this result to obtain T5(x).

29.15. Legendre polynomials satisfy the condition                            Show that this is true for P3(x).


29.16. Laguerre polynomials satisfy the condition                            Show that this is true for L2(x).

29.17. Laguerre polynomials also satisfy the equation L'n(x) -nL'n_l(x) + nLn_ j(jc) = 0. Show that this is true for L3(x).


29.18. Generate HI(X) by using the equation e1" ' =



29.19. Consider the "operator" equation               , where m, n = 0, 1, 2, 3, .... The polynomials derived from this

         equation are called Associated Laguerre polynomials, and are denoted L™(x). Find L%(x) and L\(x).

29.20. Determine whether the five following differential equations have two polynomial solutions; if they do, give the
       degrees of the solutions: a) (1 - x2)/'+ 5xy'- 5y = 0; b) (1 -x2)y"+8xy'- 18y = 0; c) (1 -x2)y" + 2xy'+ Wy = 0;
       d)(l- x2)y" + 14xy' - 56y = 0; e) (1 - x2)y" + 12xy' - 22y = 0.
                                                              CHAPTER 30



                         Gamma and Bessel
                                                                       Functions
GAMMA FUNCTION
     The gamma function, T(p), is defined for any positive real number/? by



Consequently, F(l) = 1 and for any positive real number/?,


Furthermore, when p = n, a positive integer,


Thus, the gamma function (which is defined on all positive real numbers) is an extension of the factorial function
(which is defined only on the nonnegative integers).
    Equation (30.2) may be rewritten as



which defines the gamma function iteratively for all nonintegral negative values of p. F(0) remains undefined,
because




It then follows from Eq. (30.4) that F(/?) is undefined for negative integer values of p.
     Table 30-1 lists values of the gamma function in the interval 1 <p<2. These tabular values are used with
Eqs. (30.2) and (30.4) to generate values of T(p) in other intervals.


BESSEL FUNCTIONS
     Let/? represent any real number. The Bessel function of the first kind of order p, Jp(x), is




                                                           295
Copyright © 2006, 1994, 1973 by The McGraw-Hill Companies, Inc. Click here for terms of use.
296                                      GAMMA AND BESSEL FUNCTIONS                                             [CHAP. 30



The function Jp(x) is a solution near the regular singular point x = 0 of Bessel's differential equation of order p:



In fact, Jp(x) is that solution of Eq. (30.6) guaranteed by Theorem 28.1.



ALGEBRAIC OPERATIONS ON INFINITE SERIES
     Changing the dummy index. The dummy index in an infinite series can be changed at will without altering
the series. For example,




    Change of variables. Consider the infinite series                     If we make the change of variables j = k + 1,
or k=j— 1, then




Note that a change of variables generally changes the limits on the summation. For instance, if j = k + 1, it follows
that 7' = 1 when k = 0,j = ^o when k=^o, and, as k runs from 0 to °°, j runs from 1 to °°.
      The two operations given above are often used in concert. For example,




Here, the second series results from the change of variables j = k+2 in the first series, while the third
series is the result of simply changing the dummy index in the second series from7' to k. Note that all three series
equal




                                               Solved Problems

30.1.   Determine F(3.5).
             It follows from Table 30-1 that T(1.5) = 0.8862, rounded to four decimal places. Using Eq. (30.2) withp = 2.5,
        we obtain T(3.5) = (2.5)F(2.5). But also from Eq. (30.2), with p=1.5, we have T(2.5) = (1.5)r(1.5). Thus,
        T(3.5) = (2.5)(1.5) T(1.5) = (3.75)(0.8862) = 3.3233.


30.2.   Determine F(-0.5).
             It follows from Table 30-1 that T(1.5) = 0.8862, rounded to four decimal places. Using Eq. (30.4) withp = 0.5,
        we obtain T(0.5) = 2F(1.5). But also from Eq. (30.4), with p = -0.5, we have T(-0.5) = -2F(0.5). Thus, T(-0.5)
        = (-2)(2) T(1.5) = -4(0.8862) = -3.5448.
CHAP. 30]                                    GAMMA AND BESSEL FUNCTIONS                                                     297



                                  Table 30-1     The Gamma Function (1.00 < x < 1.99)

         X              rc*)           X            r<»            X             rc*)           X               rc*)
        1.00        1.00000000        1.25     0.9064 0248        1.50      0.8862 2693        1.75      0.9190 6253
        1.01        0.9943 2585       1.26     0.9043 9712        1.51      0.8865 9169        1.76      0.9213 7488
        1.02        0.98884420        1.27     0.9025 0306        1.52      0.8870 3878        1.77      0.92376313
        1.03        0.98354995        1.28     0.9007 1848        1.53      0.8875 6763        1.78      0.92622731
        1.04        0.97843820        1.29     0.8990 4159        1.54      0.8881 7766        1.79      0.9287 6749

        1.05        0.9735 0427       1.30     0.89747070         1.55      0.8888 6835        1.80      0.9313 8377
        1.06        0.96874365        1.31     0.8960 0418        1.56      0.8896 3920        1.81      0.93407626
        1.07        0.9641 5204       1.32     0.8946 4046        1.57      0.8904 8975        1.82      0.93684508
        1.08        0.95972531        1.33     0.8933 7805        1.58      0.8914 1955        1.83      0.9396 9040
        1.09        0.95545949        1.34     0.8922 1551        1.59      0.8924 2821        1.84      0.9426 1236

        1.10        0.9513 5077       1.35     0.8911 5144        1.60      0.8935 1535        1.85      0.94561118
        1.11        0.9473 9550       1.36     0.8901 8453        1.61      0.8946 8061        1.86      0.9486 8704
        1.12        0.9435 9019       1.37     0.8893 1351        1.62      0.8959 2367        1.87      0.95184019
        1.13        0.93993145        1.38     0.8885 3715        1.63      0.8972 4423        1.88      0.95507085
        1.14        0.9364 1607       1.39     6.8878 5429        1.64      0.8986 4203        1.89      0.95837931

        1.15        0.93304093        1.40     0.8872 6382        1.65      0.9001 1682        1.90      0.9617 6583
        1.16        0.9298 0307       1.41     0.8867 6466        1.66      0.9016 6837        1.91      0.96523073
        1.17        0.9266 9961       1.42     0.8863 5579        1.67      0.9032 9650        1.92      0.97877431
        1.18        0.9237 2781       1.43     0.8860 3624        1.68      0.9050 0103        1.93      0.9723 9692
        1.19        0.9208 8504       1.44     0.8858 0506        1.69      0.9067 8182        1.94      0.9760 9891

        1.20        0.9181 6874       1.45     0.8856 6138        1.70      0.9086 3873        1.95      0.9798 8065
        1.21        0.91557649        1.46     0.8856 0434        1.71      0.91057168         1.96      0.98374254
        1.22        0.9131 0595       1.47     0.88563312         1.72      0.9125 8058        1.97      0.9876 8498
        1.23        0.9107 5486       1.48     0.8857 4696        1.73      0.9146 6537        1.98      0.9917 0841
        1.24        0.9085 2106       1.49     0.8859 4513        1.74      0.9168 2603        1.99      0.9958 1326

30.3.   Determine r(-1.42).
               It follows repeatedly from Eq. (30.4) that




        From Table 30-1, we have F(1.58) = 0.8914, rounded to four decimal places; hence




30.4.   Prove that T(p + 1) pT(p), p>0.
               Using (30.1) and integration by parts, we have




        The result \imr^co rpe r = 0 is easily obtained by first writing rpe r as rpler and then using L'Hospital's rule.
298                                       GAMMA AND BESSEL FUNCTIONS                                                [CHAP. 30



30.5.   Prove that T(l) = 1.
             Using Eq. (30.1), we find that




30.6.   Prove that if p = n, a positive integer, then Y(n + !) = «!.
            The proof is by induction. First we consider n= 1. Using Problem 30.4 with p= 1 and then Problem 30.5,
        we have


        Next we assume that T(n + 1) = n\ holds for n = k and then try to prove its validity for n = k + 1:

                                                                        (Problem 30.4 with p = k + 1)
                                                                        (from the induction hypothesis)



        Thus, T(n + 1) = n\ is true by induction.
            Note that we can now use this equality to define 0!; that is,




30.7.   Prove that Y(p + k + 1) = (p + k)(p + k - 1) • • • (p + 2)(p + l)r(p + 1).
             Using Problem 30.4 repeatedly, where first/) is replaced by p + k, then by p + k— 1, etc., we obtain




30.8.   Express              as a gamma function.

             Let z = x2; hence x = z112 and dx = —z Il2dz. Substituting these values into the integral and noting that as x goes

        from 0 to °° so does z, we have




             The last equality follows from Eq. (30.1), with the dummy variable x replaced by z and with P -


30.9.   Use the method of Frobenius to find one solution of Bessel's equation of order/?:



             Substituting Eqs. (28.2) through (28.4) into Bessel's equation and simplifying, we find that
CHAP. 30]                                  GAMMA AND BESSEL FUNCTIONS                                                           299



       Thus,

       and, in general,




       The indicial equation is X2 - p2 = 0, which has the roots 'k\=p and X2 = —p (p nonnegative).
       Substituting 'k = p into (_/) and (2) and simplifying, we find that al = 0 and




       Hence, 0 = aj = a3 = as = a7 = • • • and




       and, in general,




       Thus,




            It is customary to choose the arbitrary constant a0 as a0 =                 . Then bringing aQxp inside the brackets
       and summation in (3), combining, and finally using Problem 30.4, we obtain




30.10. Find the general solution to Bessel's equation of order zero.
            For p = 0, the equation is x2y" + xy' + x2y = 0, which was solved in Chapter 28. By (4) of Problem 28.10, one solution is




       Changing n to k, using Problem 30.6, and letting                        = 1 as indicated in Problem 30.9, it follows that
       y\(x) = JQ(X). A second solution is [see (_/) of Problem 28.11, with a0 again chosen to be 1]
300                                          GAMMA AND BESSEL FUNCTIONS                                                [CHAP. 30



       which is usually designated by N0(x). Thus, the general solution to Bessel's equation of order zero is
       y = c^O) + c2N0(x).
            Another common form of the general solution is obtained when the second linearly independent solution is not
       taken to be N0(x), but a combination of N0(x) and JQ(X). In particular, if we define



       where y is the Euler constant defined by



       then the general solution to Bessel's equation of order zero can be given as y = CiJ0(x) + c2Y0(x).


30.11. Prove that



            Writing the k = 0 term separately, we have




       which, under the change of variables j = k— 1, becomes




       The desired result follows by changing the dummy variable in the last summation fromy to k.


30.12. Prove that




            Make the change of variables j = k + 1:




       Now, multiply the numerator and denominator in the last summation by 2j, noting that j(j — 1)! =j\ and
       22j+P-i(2)   = 22J+P. The result is




       Owing to the factory in the numerator, the last infinite series is not altered if the lower limit in the sum is changed from
      j = 1 toy = 0. Once this is done, the desired result is achieved by simply changing the dummy index fromy to k.
CHAP. 30]                                GAMMA AND BESSEL FUNCTIONS                                             301



30.13. Prove That

            We may differentiate the series for the Bessel function term by term. Thus,




       Noting that 2T(k + p + 2) = 2(k + p + l)T(k + p + 1) and that the factor 2(k + p + 1) cancels, we have




            For the particular case p = 0, it follows that




30.14. Prove thatxJp(x) = pJp(x)-xJp        + l(x).

            We have




       Using Problem 30.12 on the last summation, we find




            For the particular case p = 0, it follows that xJ$(x) = -xJi(x), or




30.15. Prove that xJ'p(x) = -pJp(x) + xJ^x).
302                                       GAMMA AND BESSEL FUNCTIONS                                       [CHAP. 30



       Multiplying the numerator and denominator in the second summation by 2(p + k) and noting that (p + k)T(p + k)
       = T(p + k + 1), we find




30.16. Use Problems 30.14 and 30.15 to derive the recurrence formula




            Subtracting the results of Problem 30.15 from the results of Problem 30.14, we find that



       Upon solving for Jp+1(x), we obtain the desired result.


30.17. Show that y = xJv(x) is a solution of xy"-y' -x2Jo(x) = 0.
            First note that J\(x) is a solution of Bessel's equation of order one:



       Now substitute y = xJ^x) into the left side of the given differential equation:



       But JQ(X) = -Ji(x) (by (_/) of Problem 30.14), so that the right-hand side becomes



       the last equality following from (_/).


30.18. Show that y = JxJ3l2(x)        is a solution of x2y" + (x2 - 2)y = 0.
            Observe that J^^x) is a solution of Bessel's equation of order |;




       Now substitute y = iJxJ3l2(x) into the left side of the given differential equation, obtaining




       the last equality following from (_/). Thus *JxJ3/2(x) satisfies the given differential equation.
CHAP. 30]                                 GAMMA AND BESSEL FUNCTIONS            303




                                          Supplementary Problems

30.19. FindT(2.6).

30.20. Findr(-1.4).

30.21. Findr(4.14).

30.22. FindT(-2.6).

30.23. Find r(-1.33).

30.24. Express              as a gamma function.

30.25. Evaluate


30.26. Prove that



30.27. Prove that

            Hint: Use Problem 30.11.

30.28. Prove that

30.29. (a) Prove that the derivative of

            Hint: Use (1) of Problem 30.13 and (1) of Problem 30.14.

         (b) Evaluate               in terms of Bessel functions.

30.30. Show that y = xJn(x) is a solution of x2y" - xy' + (1 + x2 - n2)y = 0.

30.31.   Show that y = x2J 2(x) is a solution of xy" - 3y' + xy = 0.
                                                              CHAPTER 31



                        An Introduction to
                        Partial Differential
                                 Equations
INTRODUCTORY CONCEPTS
    A partial differential equation (PDE) is a differential equation in which the unknown function depends on
two or more independent variables (see Chapter 1). For example,



is a PDE in which u is the (unknown) dependent variable, while x and y are the independent variables. The def-
initions of order and linearity are exactly the same as in the ODE case (see Chapters 1 and 8) with the proviso
that we classify a PDE as quasi-linear if the highest-order derivatives are linear, but not all lower derivatives
are linear. Thus, Eq. (31.1) is a first-order, linear PDE, while




is a second-order, quasi-linear PDE due to the             term.

Partial differential equations have many applications, and some are designated as classical, much like their ODE
counterparts (see Chapter 29). Three such equations are the heat equation




the wave equation




                                                          304

Copyright © 2006, 1994, 1973 by The McGraw-Hill Companies, Inc. Click here for terms of use.
CHAP. 31]                 AN INTRODUCTION TO PARTIAL DIFFERENTIAL EQUATIONS                                                305



and Laplace's equation (named in honor of P. S. Laplace (1749-1827), a French mathematician and
scientist)




These equations are widely used as models dealing with heat flow, civil engineering, and acoustics to name but
three areas. Note that k is a positive constant in Eqs. (31.3) and (31.4).



SOLUTIONS AND SOLUTION TECHNIQUES
    If a function, u(x, y,z, ...), is sufficiently differentiable - which we assume throughout this chapter for all
functions - we can verify whether it is a solution simply by differentiating u the appropriate number of times
with respect to the appropriate variables; we then substitute these expressions into the PDE. If an identity is
obtained, then u solves the PDE. (See Problems 31.1 through 31.4.)
    We will introduce two solution techniques: basic integration and separation of variables.
    Regarding the technique of separation of variables, we will assume that the/orw? of the solution of the PDE
can be "split off or "separated" into a product of Junctions of each independent variable. (See Problems 31.4
and 31.11). Note that this method should not be confused with the ODE method of "separation of variables"
which was discussed in Chapter 4.




                                                Solved Problems

31.1.   Verify that u(x, t) = sin x cos kt satisfies the wave equation (31.4).
             Taking derivatives of u leads us to ux = cos x cos kt, uxx = - sin x cos kt, u, = - k sin x sin kt, and utt = -k2

        sin x cos kt. Therefore u = —-u implies -sin x cos kt = —^ (— k sin x cos fcf) = - sin x cos fcf; hence, u indeed
        is a solution.


31.2.   Verify that any function of the form F(x + kt) satisfies the wave equation, (31.4).
             Let u = x + kt; then by using the chain rule for partial derivatives, we have Fx = Fuux = Fu(l) = Fu;
        Fxx = Fuuux = Fxx(l) = F^, F, = Fuu, = Fu (k); Ftt = kFuuu, = k2Fuu. Hence, Fa = Faa = -^Ftt = -^(k2Faa) = Faa, so we
                                                                                                K        K
        have verified that any sufficiently differentiable function of the form F(x + kt) satisfies the wave equation. We note
        that this means that functions such as -Jx + kt, tan"1^ + kt) and In (x + kt) all satisfy the wave equation.


31.3.   Verify u (x, t) = e~kt sin x satisfies the heat equation (31.3).
             Differentiation implies ux = e~kt cos x, uxx = -e~kt sin x, ut = -ke~h sin x. Substituting u^. and u, in (31.3)
        clearly yields an identity, thus proving that u(x, t) = e~kt sin x indeed satisfies the heat equation.


31.4.   Verify u(x, t) = (5x - 6X5 + x9)t6 satisfies the PDE X3t2uxtt - 9x2t2utt = tuxxt + 4uxx.
              We note that u(x, t) has a specific form; i.e., it can be "separated" or "split up" into two functions: a function
        of x times a function of t. This will be discussed further in Problem 31.11. Differentiation of u(x, t) leads to:
        ««< = (5 - 30x4 + 9x8)(30t4), u^ = (-12CU3 + 12x7)(t6), u^, = (-120.x3 + 12x1)(6t5), and utt = (5x -6x5 + x9)(30?).
306                       AN INTRODUCTION TO PARTIAL DIFFERENTIAL EQUATIONS                                           [CHAP. 31



        Algebraic simplification shows that




        because both sides reduce to 720x7t6 — IIQQjc't6. Hence, our solution is verified.


31.5.   Let u = u(x, y). By integration, find the general solution to ux = 0.
            The solution is arrived at by "partial integration", much like the technique employed when solving "exact"
        equations (See Chapter 5). Hence, u(x, y) =f(y), where f(y) is any differentiable function of y. We can write this
        symbolically as




        We note that a "+ C" is not needed because it is "absorbed" into/(;y); that is, f(y) is the most general "constant"
        with respect to x.


31.6.   Let u = u(x, y, z). By integration, find the general solution to ux = 0.
             Here, we see by inspection that our solution can be written as/(;y, z).


31.7.   Let u = u(x, y). By integration, find the general solution to ux = 2x.
             Since, one antiderivative of 2x (with respect to x) is x2, the general solution is J 2x dx = x + f(y)', where/(y)
        is any differentiable function of y.


31.8.   Let u = u(x, y). By integration, find the general solution to ux = 2x, u(0, y) = In y.
            By Problem 31.7, the solution to the PDE is u(x, y) = x2 +f(y). Letting x = 0 implies u(0, y) = O2 +f(y) = In y.
        Therefore/(;y) = In y, so our solution is u(x, y)=x2 + In y.


31.9.   Let u = u(x, y). By integration, find the general solution to uy = 2x.
             Noting that an antiderivative of 2x with respect to y is 2xy, the general solution is given by 2xy + g(x), where
        g(x) is any differentiable function of x.


31.10. Let u = u(x, y). By integration, find the general solution to u^ = 2x.
            Integrating first with respect to y, we have ux = 2xy +f(x), where f(x) is any differentiable function of x. We
        now integrate ux with respect to x, we arrive at u(x, y) = x2y + g(x) + h(y), where g(x) is an antiderivative of f(x), and
        where h(y) is any differentiable function of y.
            We note that if the PDE was written as uyx = 2x, our results would be the same.


31.11. Let u(x, t) represent the temperature of a very thin rod of length n, which is placed on the interval
       {xlO <x< TT), at position x and time t. The PDE which governs the heat distribution is given by




        where u, x, t and k are given in proper units. We further assume that both ends are insulated; that is,
        u(0, t) = u(n, t) = 0 are impose "boundary condition" for t > 0. Given an initial temperature distribution
        of u(x, 0) = 2 sin 4x - 11 sin 7x, for 0 < x < n, use the technique of separation of variables to find
        a (non-trivial) solution, u(x, t).
CHAP. 31]               AN INTRODUCTION TO PARTIAL DIFFERENTIAL EQUATIONS                                                 307




            We assume that u(x, t) can be written as a product of functions. That is, u(x, t) = X(x)T(t). Finding the appro-
      priate derivatives, we have uxx = X" (x)T(t) and ut = X(x)T'(t). Substitution of these derivatives into the PDE yields
      the following.



      Equation (1) can be rewritten as




           We note that the left-hand side of Eq. (2) is solely a function of x, while the right-hand side of this equation
      contains only the independent variable t. This necessarily implies that both ratios must be a constant, because there
      are no other alternatives. We denote this constant by c:




            We now separate Eq. (3) into two ODEs:

      and


           We note that the Eq. (4) is a "spatial" equation, while Eq. (5) is a "temporal" equation. To solve for u(x, t), we
      must solve these two resulting ODEs.
           We first turn our attention to the spatial equation, X"(x) - cX(x) = 0. To solve this ODE, we must consider our
      insulated boundary conditions; this will give rise to a "boundary value problem" (see Chapter 32). We note that
      u(0, t) = 0 implies that X(0) = 0, since T(t) cannot be identically 0, since this would produce a trivial solution;
      similarly, X(n) = 0. The nature of the solutions to this ODE depends on whether c is positive, zero or negative.
            If c> 0, then by techniques presented in Chapter 9, we have X(x) = c^e          + C2e~     , where Cj and c2 are
      determined by the boundary conditions. X(0) = Cie° + c2e° = Cj + c2 = 0 and X(n) = cle " + c2e ". These two
      equations necessarily imply that Cj = c2 = 0, which means that X(x) = 0 which renders u(x, t) trivial.
            If c = 0, then X(x) = c\x + c2, where cl and c2 are determined by the boundary conditions. Here again,
      X(0) = X(n) = 0 force cl = c2 = 0, and we have u(x, t) = 0 once more.
            Let us assume c < 0, writing c = - X2, X > 0 for convenience. Our ODE becomes X"(x) + X?X(x) = 0, which
      leads to X(x) = Cj sin Xx + c2 cos Xx. Our first boundary condition, X(0) = 0 implies c2 = 0. Imposing X(n) = 0, we
      have Ci sin 'kn= 0.
            If we let A,= 1, 2, 3, ..., then we have a non-trivial solution for X(x). That is, X(x) = Cj sin nx, where n is a
      positive integer. Note that these values can termed "eigenvalues" and the corresponding functions are called "eigen-
      functions" (see Chapter 33).
            We now turn our attention to Eq. (5), letting c = -X2 = -n2, where n is a positive integer. That is,
      T'(t) + n2kT(t) = 0. This type of ODE was discussed in Chapter 4 and has T(t) = c3e" ' as a solution, where c3 is
      an arbitrary constant.
            Since u(x, t) =X(x)T(t), we have u(x, t) = Cj sin nx c3e~"kl = ane~"kl sin nx, where an = CjC3. Not only does
      u(x, t) = ane~"kl sin nx satisfy the PDE in conjunction with the boundary conditions, but any linear combination of
      these for different values of n. That is,



      where N is any positive integer, is also a solution. This is due to the linearity of the PDE. (In fact, we can even have
      our sum ranging from 1 to °°).
           We finally impose the initial condition, u(x, 0) = 2 sin 4x - 11 sin Ix, to Eq. (6). Hence, u(x, 0) =        sin nx.
      Letting n = 4, a4 = 2 and n = 7, a7 = -11, we arrive at the desired solution,


          It can easily be shown that Eq. (7) does indeed solve the heat equation, while satisfying both boundary
      conditions and the initial condition.
308                        AN INTRODUCTION TO PARTIAL DIFFERENTIAL EQUATIONS                                       [CHAP. 31




                                         Supplementary Problems

31.12. Verify that any function of the form F(x - kt) satisfies the wave equation (31.4).

31.13. Verify that u = tanh (x - kt) satisfies the wave equation.

31.14. If u=f(x-y), show that

31.15. Verify u(x, t) = (55 + 22x6 + x12) sin 2t satisfies the PDE 12x4utt - x5uxtt = Au^

31.16. A function u(x, y) is called harmonic if it satisfies Laplace's equation; that is, uxx + uyy = 0. Which of the following
       functions are harmonic: (a) 3x + 4y + 1; (b) e3x cos 3y; (c) e3x cos 4y; (d) In (x2 + y2); (e) sin(ex) cos(ey)"?

31.17. Find the general solution to ux = cos y if u(x, y) is a function of x and y.

31.18. Find the general solution to uy = cos y if u(x, y) is a function of x and y.

31.19. Find the solution to uy = 3 if u(x, y) is a function of x and y, and u(x, 0) = 4x + 1.

31.20. Find the solution to ux = 2xy + 1 if u(x, y) is a function of x and y, and u(0, y) = cosh y.

31.21. Find the general solution to u^ = 3 if u(x, y) is a function of x and y.

31.22. Find the general solution to uxy = 8xy3 if u(x, y) is a function of x and y.

31.23. Find the general solution to uxyx = -2 if u(x, y) is a function of x and y.

31.24. Let u(x, t) represent the vertical displacement of string of length n, which is placed on the interval {x/0 < x < n}, at
       position x and time t. Assuming proper units for length, times, and the constant k, the wave-equation models the
       displacement, u(x, t):




        Using the method of separation of variable, solve the equation for the u(x, t), if the boundary conditions
        u(0, t) = u(n, t) = 0fort>0 are imposed, with initial displacement u(x, 0) = 5 sin 3x - 6 sin &c, and initial velocity
        ut(x, 0) = O f o r O < ^ < ^ .
                                                              CHAPTER 32



                                          Second-Order
                                        Boundary-Value
                                              Problems
STANDARD FORM
     A boundary-value problem in standard form consists of the second-order linear differential equation



and the boundary conditions




where P(x), Q(x), and (f)(x) are continuous in [a, b\ and ax, a^, j\, J32, Ji, and /2 are all real constants.
Furthermore, it is assumed that ax and /Jj are not both zero, and also that a^ and J32 are not both zero.
    The boundary-value problem is said to be homogeneous if both the differential equation and the boundary
conditions are homogeneous (i.e. (f)(x) = 0 and Ji=Ji= 0). Otherwise the problem is non-homogeneous. Thus
a homogeneous boundary-value problem has the form




A somewhat more general homogeneous boundary-value problem than (32.3) is one where the coefficients P(x)
and Q(x) also depend on an arbitrary constant ^,. Such a problem has the form




Both (32.3) and (32.4) always admit the trivial solution y(x) = 0.

                                                          309
Copyright © 2006, 1994, 1973 by The McGraw-Hill Companies, Inc. Click here for terms of use.
310                              SECOND-ORDER BOUNDARY-VALUE PROBLEMS                                     [CHAP. 32



SOLUTIONS
     A boundary-value problem is solved by first obtaining the general solution to the differential equation,
using any of the appropriate methods presented heretofore, and then applying the boundary conditions to evaluate
the arbitrary constants.
Theorem 32.1. Let y^(x) and y2(x) be two linearly independent solutions of



                  Nontrivial solutions (i.e., solutions not identically equal to zero) to the homogeneous boundary-
                  value problem (32.3) exist if and only if the determinant




                  equals zero.
Theorem 32.2. The nonhomogeneous boundary-value problem defined by (32.7) and (32.2) has a unique
              solution if and only if the associated homogeneous problem (32.3) has only the trivial solution.
In other words, a nonhomogeneous problem has a unique solution when and only when the associated homogeneous
problem has a unique solution.


EIGENVALUE PROBLEMS
     When applied to the boundary-value problem (32.4), Theorem 32.1 shows that nontrivial solutions may
exist for certain values of 'k but not for other values of 'k. Those values of 'k for which nontrivial solutions do
exist are called eigenvalues; the corresponding nontrivial solutions are called eigenfunctions.


STURM-LIOUVILLE PROBLEMS
      A second-order Sturm-Liouville problem is a homogeneous boundary-value problem of the form




wherep(x),p'(x), q(x), and w(x) are continuous on [a, b], and bothp(x) and w(x) are positive on [a, b\.
     Equation (32.6) can be written in standard form (32.4) by dividing through by p(x). Form (32.6), when
attainable, is preferred, because Sturm-Liouville problems have desirable features not shared by more general
eigenvalue problems. The second-order differential equation



where a2(x) does not vanish on [a, b], is equivalent to Eq. (32.6) if and only if a'2(x) = a^(x) (See Problem 32.15.)
This condition can always be forced by multiplying Eq. (32.8) by a suitable factor. (See Problem 32.16.)


PROPERTIES OF STURM-LIOUVILLE PROBLEMS
Property 32.1.    The eigenvalues of a Sturm-Liouville problem are all real and nonnegative.

Property 32.2.    The eigenvalues of a Sturm-Liouville problem can be arranged to form a strictly increasing
                  infinite sequence; that is, 0 < A,j < ^2 < ^3 < • • • Furthermore, A,n —> °° as n —> °°.
CHAP. 32]                         SECOND-ORDER BOUNDARY-VALUE PROBLEMS                                                      311



Property 32.3.     For each eigenvalue of a Sturm-Liouville problem, there exists one and only one linearly
                   independent eigenfunction.

     [By Property 32.3 there corresponds to each eigenvalue A,n a unique eigenfunction with lead coefficient
unity; we denote this eigenfunction by en(x).]

Property 32.4.     The set of eigenfunctions {e^x), e2(x), ...} of a Sturm-Liouville problem satisfies the relation



                   for n i= m, where w(x) is given in Eq. (32.6).




                                                 Solved Problems

32.1. Solve /' + 2/ - 3y = 0; y(0) = 0, /(I) = 0.
              This is a homogeneous boundary-value problem of the form (32.3), with P(x) = 2, Q(x) = -3, a: = 1, fi1 = 0,
        a 2 = 0, /?2= 1, a = 0, and b=l. The general solution to the differential equation is y = cf3* + c2ex Applying the
        boundary conditions, we find that c1 = c2 = 0; hence, the solution is y = 0.
              The same result follows from Theorem 32.1. Two linearly independent solutions arey\(x) = e^x andy 2 (x) = e*',
        hence, the determinant (32.5) becomes




        Since this determinant is not zero, the only solution is the trivial solution y(x) = 0.


32.2.   Solve /' = 0; y(-l) = 0, y(l) - 2/(l) = 0.
              This is a homogeneous boundary-value problem of form (32.3), where P(x) = Q(x) = 0, KI = 1, Pi = 0, O2 = 1,
        /?2 = -2, a = -1, and b=l. The general solution to the differential equation is y = Cj+ c2x. Applying the boundary
        conditions, we obtain the equations c1 - c2 = 0 and c1 - c2 = 0, which have the solution c1 = c2, c2 arbitrary. Thus, the
        solution to the boundary-value problem is y = c2(l +x), c2 arbitrary. As a different solution is obtained for each
        value of c2, the problem has infinitely many nontrivial solutions.
              The existence of nontrivial solutions is also immediate from Theorem 32.1. Here y\(x) = 1, y2(x) = x, and deter-
        minant (32.5) becomes




32.3.   Solve /' + 2/ -3y = 9x; y(0) = 1, /(I) = 2.
            This is a nonhomogeneous boundary-value problem of forms (32.1) and (32.2) where $(x) =x, Yi= L and
        %=2. Since the associated homogeneous problem has only the trivial solution (Problem 32.1), it follows from
        Theorem 32.2 that the given problem has a unique solution. Solving the differential equation by the method of
        Chapter 11, we obtain


        Applying the boundary conditions, we find



        whence


        Finally,
312                                SECOND-ORDER BOUNDARY-VALUE PROBLEMS                                                  [CHAP. 32



32.4.   Solve /' = 2; y(-l) = 5, y ( l ) - 2/(l) = 1.
             This is a nonhomogeneous boundary-value problem of forms (32.1) and (32.2), where (f>(x) = 2, Yi = 5, and
        Ji=\. Since the associated homogeneous problem has nontrivial solutions (Problem 32.2), this problem does not
        have a unique solution. There are, therefore, either no solutions or more than one solution. Solving the differential
        equation, we find that y = cl + c2x + x2. Then, applying the boundary conditions, we obtain the equations cl - c2 = 4
        and cl - c2 = 4; thus, cl = 4 + c2, c2 arbitrary. Finally, y = c2(1 + x) + 4 + x2; and this problem has infinitely many
        solutions, one for each value of the arbitrary constant c2.


32.5.   Solve /' = 2; y(-l) = 0, y ( l ) - 2/(l) = 0.
             This is a nonhomogeneous boundary-value problem of forms (32.1) and (32.2), where (f>(x) = 2 and y1 = y2 = 0.
        As in Problem 32.4, there are either no solutions or more than one solution. The solution to the differential equa-
        tion is y = cl + c2x + x2. Applying the boundary conditions, we obtain the equations c 1 -c 2 = -l and c 1 -c 2 = 3.
        Since these equations have no solution, the boundary-value problem has no solution.


32.6.   Find the eigenvalues and eigenfunctions of



             The coefficients of the given differential equation are constants (with respect to x)', hence, the general solution
        can be found by use of the characteristic equation. We write the characteristic equation in terms of the variable m,
        since X now has another meaning. Thus we have m2 - 4km + 4X2 = 0, which has the double root m = 2X; the solution
        to the differential equation is y = cler": + c2xe2^ Applying the boundary conditions and simplifying, we obtain



             It now follows that cl = 0 and either c2 = 0 or X = -1. The choice c2 = 0 results in the trivial solution y = 0; the
        choice X = -1 results in the nontrivial solution y = c2xe"2x, c2 arbitrary. Thus, the boundary-value problem has the
        eigenvalue X = -1 and the eigenfunction y = c2xe"2x.


32.7.   Find the eigenvalues and eigenfunctions of



            As in Problem 32.6 the solution to the differential equation is y = c1e2Xjr+c2xe2Xjr Applying the boundary
        conditions and simplifying, we obtain the equations




        This system of equations has a nontrivial solution for Cj and c2 if and only if the determinant




        is zero; that is, if and only if either A, = — ^ o r ^ , = ^. When A, = — j , (1) has the solution cl = 0, c2 arbitrary; when
        A, = -j, (1) has the solution cl = -3c2, c2 arbitrary. It follows that the eigenvalues are 'kl = — j and A,2 = ^ and the
        corresponding eigenfunctions are y^ = c2xe~x and y2= c2(—3 + x)exl2.


32.8.   Find the eigenvalues and eigenfunctions of


             In terms of the variable m, the characteristic equation is m2 + 'km = 0. We consider the cases X = 0 and X + 0
        separately, since they result in different solutions.
CHAP. 32]                          SECOND-ORDER BOUNDARY-VALUE PROBLEMS                                                      313



        A. = 0:   The solution to the differential equation is y = cl + c2x. Applying the boundary conditions, we obtain the
                  equations c1 + c2 = 0 and c2 = 0. It follows that c1 = c2 = 0, and y = 0. Therefore, X = 0 is not an eigenvalue.
        A, i= 0: The solution to the differential equation is y = Cj + c2e^x. Applying the boundary conditions, we obtain




                  These equations have a nontrivial solution for c1 and c2 if and only if




                  which is an impossibility, since X ^ 0.
             Since we obtain only the trivial solution for X = 0 and X ^ 0, can conclude that the problem does not have any
        eigenvalues.


32.9.   Find the eigenvalues and eigenfunctions of


            As in Problem 32.6, the solution to the differential equation is y = Cie2"" + c2xe2"". Applying the boundary
        conditions and simplifying, we obtain the equations




        Equations (_/) have a nontrivial solution for c1 and c2 if and only if the determinant




        is zero; that is, if and only if A, = + -j-z. These eigenvalues are complex. In order to keep the differential equation
        under consideration real, we require that X be real. Therefore this problem has no (real) eigenvalues and the only
        (real) solution is the trivial one: y(x) = 0.


32.10. Find the eigenvalues and eigenfunctions of


             The characteristic equation is m2 + X = 0. We consider the cases X = 0, X < 0, and X > 0 separately, since they
        lead to different solutions.
        A, = 0:   The solution is y = Cj + c2x. Applying the boundary conditions, we obtain Cj = c2 = 0, which results in the
                  trivial solution.
        A.<0:     The solution is y = c\e ^ + C2e~ ^, where-X and v-^- are positive. Applying the boundary conditions,
                  we obtain




                  Here


                  which is never zero for any value of X < 0. Hence, Cj = c2 = 0 and y = 0.

        A. > 0:   The solution is A sin vA x + B cos vA, x. Applying the boundary conditions, we obtain B = 0 and A sin vA = 0
                  Note that sin 6=0 if and only if 6 = nn, where n = 0, + 1, + 2, ... Furthermore, if 6 > 0, then n must be
314                               SECOND-ORDER BOUNDARY-VALUE PROBLEMS                                             [CHAP. 32




                 positive. To satisfy the boundary conditions, B = 0 and either A = 0 or sinv^- = 0. This last equation is
                 equivalent to v^- = njt where n= 1, 2, 3, .... The choice A = 0 results in the trivial solution; the choic
                 V^- = nn results in the nontrivial solution yn = An sin mtx. Here the notation An signifies that the arbitrary
                 constant An can be different for different values of n.
            Collecting the results of all three cases, we conclude that the eigenvalues are X n = if if and the corresponding
       eigenfunctions arey n = An sin nnx, for n= 1,2,3, ....

32.11. Find the eigenvalues and eigenfunctions of


             As in Problem 32.10, the cases X = 0, X < 0, and X > 0 must be considered separately.
       A, = 0:   The solution is y = Cj + c2x. Applying the boundary conditions, we obtain Cj = c2 = 0; hence y = 0.

       K<0:      The solution is y = c^e     + C2e~      , where -X and •J-'X. are positive. Applying the boundary conditions,
                 we obtain



                 which admits only the solution cl = c2 = 0; hence y = 0.

       A,>0:     The solution is y = A sin •y'kx + BcasyJix. Applying the boundary conditions, we obtain B = 0 and
                 A^J'k cos V^- 7f = 0. For 6 > 0, cos 6 = 0 if and only if 6 is a positive odd multiple of n!2; that is, when
                 9 = (2n — 1)(7T / 2) = (n — \)n, where n= 1, 2,3, .... Therefore, to satisfy the boundary conditions,
                 must have B = 0 and either A = 0 or cos V^- n = 0. This last equation is equivalent to v^- = n — j. Th
                 choice A = 0 results in the trivial solution; the choice V^- =n~\ results in the nontrivial solution
                 yn = An sin(«-|)j:.

             Collecting all three cases, we conclude that the eigenvalues are 'kn = (n — -j) and the corresponding eigen-
       functions are yn = An sin (n — j")x, where n=l,2,3, ....

32.12. Show that the boundary-value problem given in Problem 32.10 is a Sturm-Liouville problem.
            It has form (32.6) with p(x) = 1, q(x) = 0, and w(x) = 1. Here both p(x) and w(x) are positive and continuous
       everywhere, in particular on [0, 1].

32.13. Determine whether the boundary-value problem


       is a Sturm-Liouville problem.
            Here/>(X) =x, q(x) =x2+ 1, and w(x) = ex. Since bo\hp(x) and q(x) are continuous and positive on [1, 2], the
       interval of interest, the boundary problem is a Sturm-Liouville problem.

32.14. Determine which of the following differential equations with the boundary conditions y(0) = 0, /(I) = 0
       form Sturm-Liouville problems:




       (a)   The equation can be rewritten as (e*y')' + 'ky = 0; hence p(x) = ex, q(x) = 0, and w(x) = 1. This is a
             Sturm-Liouville problem.
CHAP. 32]                          SECOND-ORDER BOUNDARY-VALUE PROBLEMS                                                           315



       (b)   The equation is equivalent to (xy')' + (x2 + l)y + 'ky = 0; hence p(x) = x, q(x) = x2 + 1 and w(x) = 1. Since p(x)
             is zero at a point in the interval [0, 1], this is not a Sturm-Liouville problem.
       (c)   Here p(x) = 1/x, q(x) = x, and w(x) = 1. Since p(x) is not continuous in [0, 1], in particular at x = 0, this is not
             a Sturm-Liouville problem.
       (d)   The equation can be rewritten as (y')' + X(l + x)y = 0; hence p(x) = 1, q(x) = 0, and w(x) = 1 +x. This is a
             Sturm-Liouville problem.
       (e)   The equation, in its present form, is not equivalent to Eq. (32.6); this is not a Sturm-Liouville problem.
             However, if we first multiply the equation by e~x, we obtain (exy')' + Xe~xy = 0; this is a Sturm-Liouville problem
             with p(x) = e1, q(x) = 0, and w(x) = e~x.

32.15. Prove that Eq. (32.6) is equivalent to Eq. (32.8) if and only if a'2(x) = a^x).
             Applying the product rule of differentiation to (32.6), we find that


       Setting a2(x) =p(x), cii(x) =p'(x), aQ(x) = q(x), and r(x) = w(x), it follows that (_/), which is (32.6) rewritten, is precisely
       (29.8) with a'2(x) =p'(x) = a^x).
            Conversely, if a'2(x) = cii(x). then (32.8) has the form


       which is equivalent to [a2(;e);y'] + a0(x)y + hr(x)y = 0. This last equation is precisely (32.6) with p(x) = a2(x),
       q(x) = aa(x), and w(x) = r(x).

32.16. Show that if Eq. (32.8) is multiplied by                                     , the resulting equation is equivalent to
       Eq. (32.6).
             Multiplying (32.8) by I(x), we obtain


       which can be rewritten as


       Divide (1) by a2(x) and then setp(x) = l(x), q(x) = I(x)aa(x)la2(x) and w(x) = I(x)r(x)la2(x); the resulting equation is
       precisely (32.6). Note that since I(x) is an exponential and since a2(x) does not vanish, I(x) is positive.

32.17. Transform                                  into Eq. (32.6) by means of the procedure outlined in Problem 32.16.

            Here a2(x) = 1 and cii(x) = 2x; hence a.i(x)la2(x) = 2x and I(x) =                   . Multiplying the given differential
       equation by I(x), we obtain


       which can be rewritten as


       This last equation is precisely Eq. (32.6) with p(x) = ex , q(x) = xex , and w(x)e" .

32.18. Transform (x + 2)y" + 4y' + xy + 'kexy = 0 into Eq. (32.6) by means of the procedure outlined in
       Problem 32.16.
             Here a2(x) =x + 2 and a^x) = 4; hence a^la^x) = 41 (x + 2) and



       Multiplying the given differential equation by I(x), we obtain



       which can be rewritten as
316                               SECOND-ORDER BOUNDARY-VALUE PROBLEMS                                             [CHAP. 32



        or
       This last equation is precisely (32.6) withp(x) = (x + 2)4, q(x) = (x + 2)3x, and w(x) = (x + 2)3ex. Note, that since we
       divided by a2(x), it is necessary to restrict x 2 -2. Furthermore, in order that bothp(x) and w(x) be positive, we must
       require x > -2.

32.19. Verify Properties 32.1 through 32.4 for the Sturm-Liouville problem


              Using the results of Problem 32.10 we have that the eigenvalues are X n = w2^2 and the corresponding eigen-
        functions are yn(x) = An sin nnx, for n = 1, 2, 3, ... The eigenvalues are obviously real and nonnegative, and they can
        be ordered as ^=7? < 1^ = 47? <X 3 =9?i 2 < • • • . Each eigenvalue has a single linearly independent eigenfunction
        en(x) = sin nnx associated with it. Finally, since



        we have for n ^ m and w(x) = 1:




32.20. Verify Properties 32.1 through 32.4 for the Sturm-Liouville problem



             For this problem, we calculate the eigenvalues 'kn = (n — -j)           and the corresponding eigenfunctions
        yn (x) = An cos (n — j)x, for n = 1, 2, .... The eigenvalues are real and positive, and can be ordered as




        Each eigenvalue has only one linearly independent eigenfunction en(x) = cos (n — j~)x associated with it. Also, for
        n^m and w(x) = 1,




32.21. Prove that if the set of nonzero functions {yi(x), y2(x), . ..,yp(x)} satisfies (32.9), then the set is linearly
       independent on [a, b\.
             From (8.7) we consider the equation


        Multiplying this equation by w(x)yk(x) and then integrating from a to b, we obtain
CHAP. 32]                          SECOND-ORDER BOUNDARY-VALUE PROBLEMS                                                        317




        From Eq. (29.9) we conclude that for i + k,



        But since y^(x) is a nonzero function and w(x) is positive on [a, b], it follows that




        hence, ck = 0. Since ck=0, k= 1, 2, ... ,p, is the only solution to (_/), the given set of functions is linearly independent
        on [a, b].




                                          Supplementary Problems

In Problems 32.22 through 32.29, find all solutions, if solutions exist, to the given boundary-value problems.




In Problems 32.30 through 32.36, find the eigenvalues and eigenfunctions, if any, of the given boundary-value problems.




In Problems 32.37 through 32.43, determine whether each of the given differential equations with the boundary conditions
X-l) + 2/(-l) = 0, XI) + 2/(l) = 0 is a Sturm-Liouville problem.




32.44. Transform e^y" + e^y' + (x + A,)y = 0 into Eq. (32.6) by means of the procedure outlined in Problem 32.16.

32.45. Transform x2y" + xy' + Xxy = 0 into Eq. (32.6) by means of the procedure outlined in Problem 32.16.

32.46. Verify Properties 32.1 through 32.4 for the Sturm-Liouville problem



32.47. Verify Properties 32.1 through 32.4 for the Sturm-Liouville problem
                                                              CHAPTER 33



                                                 Eigenfunction
                                                    Expansions

PIECEWISE SMOOTH FUNCTIONS
     A wide class of functions can be represented by infinite series of eigenfunctions of a Sturm-Liouville problem
(see Chapter 32).
Definition:    A function/(X) is piecewise continuous on the open interval a < x < b if (1) f(x) is continuous
               everywhere in a < x < b with the possible exception of at most a finite number of points x^x2, ... ,xn
               and (2) at these points of discontinuity, the right- and left-hand limits of f(x), respectively
               lim f ( x ) and lim f ( x ) , exist (j= 1,2, ... , «).


(Note that a continuous function is piecewise continuous.)

Definition:    A function/(X) is piecewise continuous on the closed interval a < x < b if (1) it is piecewise
               continuous on the open interval a < x < b, (2) the right-hand limit of f(x) exists at x = a, and (3) the
               left-hand limit of f(x) exists at x = b.

Definition:    A function/^) is piecewise smooth on [a, b] if both/(j:) and/'(.*:) are piecewise continuous on [a, b\.

Theorem 33.1.      If f(x) is piecewise smooth on [a, b] and if {en(x)} is the set of all eigenfunctions of a
                   Sturm-Liouville problem (see Property 32.3), then




                   where



                   The representation (33.1) is valid at all points in the open interval (a, b) where f(x) is continuous.
                   The function w(x) in (33.2) is given in Eq. (32.6).
     Because different Sturm-Liouville problems usually generate different sets of eigenfunctions, a given
piecewise smooth function will have many expansions of the form (33.7). The basic features of all such expansions
are exhibited by the trigonometric series discussed below.

                                                          318
Copyright © 2006, 1994, 1973 by The McGraw-Hill Companies, Inc. Click here for terms of use.
CHAP. 33]                                   EIGENFUNCTION EXPANSIONS                                                  319



FOURIER SINE SERIES
   The eigenfunctions of the Sturm-Liouville problem /' + ky = 0; y(0) = 0, y(L) = 0, where L is a real positive
number, are en(x) = sin (mccIL) (n = 1, 2, 3, ...). Substituting these functions into (33.1), we obtain




For this Sturm-Liouville problem, w(x) = 1, a = 0, and b = L; so that




and (33.2) becomes



The expansion (33.3) with coefficients given by (33.4) is the Fourier sine series for/(;t) on (0, L).


FOURIER COSINE SERIES
     The eigenfunctions of the Sturm-Liouville problem y" + A,;y = 0; /(O) = 0, y'(L) = 0, where L is a real positive
number, are e0(x) = 1 and en(x) = cos (njrxIL) (n = 1, 2, 3, ...). Here ^, = 0 is an eigenvalue with corresponding
eigenfunction e0(x) = 1. Substituting these functions into (33.7), where because of the additional eigenfunction
e0(x) the summation now begins at n = 0, we obtain




For this Sturm-Liouville problem, w(x) = 1, a = 0, and b = L; so that




Thus (33.2) becomes




The expansion (33.5) with coefficients given by (33.6) is the Fourier cosine series for f(x) on (0, L).




                                                Solved Problems

33.1.   Determine whether f ( x ) =                     is piecewise continuous on [-1, 1].

             The given function is continuous everywhere on [-1, 1] except at x = 0. Therefore, if the right- and left-hand
        limits exist at x = 0, f(x) will be piecewise continuous on [-1, 1]. We have




        Since the left-hand limit does not exist, f(x) is not piecewise continuous on [-1, 1].
320                                          EIGENFUNCTION EXPANSIONS                                                 [CHAP. 33




33.2.   Is f(x)=                            piecewise continuous on [-2, 5]?


             The given function is continuous on [-2, 5] except at the two points x\ = 0 and x2 = —I. (Note that/(jc) is
        continuous at x = 1.) At the two points of discontinuity, we find that




        and


        Since all required limits exist, f(x) is piecewise continuous on [-2, 5].


33.3.   Is the function




        piecewise smooth on [-2, 2]?
             The function is continuous everywhere on [-2, 2] except at x1 = 1. Since the required limits exist at x^ f(x) is
        piecewise continuous. Differentiating/^), we obtain




        The derivative does not exist at Xi = 1 but is continuous at all other points in [-2, 2]. At Xi the required limits exist;
        hence f(x) is piecewise continuous. It follows that/(jc) is piecewise smooth on [-2, 2].


33.4.   Is the function




        piecewise smooth on [-1,3]?
              The function f(x) is continuous everywhere on [-1, 3] except at Xi = 0. Since the required limits exist at x^ f(x)
        is piecewise continuous. Differentiating/^), we obtain




        which is continuous everywhere on [-1, 3] except at the two points x1 = 0 and x2 = 1 where the derivative does not
        exist. At jq,




         Hence, one of the required limits does not exist. It follows that/'(jc) is not piecewise continuous, and therefore that
        f(x) is not piecewise smooth, on [-1, 3].
CHAP. 33]                                  EIGENFUNCTION EXPANSIONS                                                  321



33.5.   Find a Fourier sine series for/(X) = 1 on (0, 5).
             Using Eq. (33.4) with L = 5, we have




        Thus Eq. (33.3) becomes




        Since/(X) = 1 is piecewise smooth on [0, 5] and continuous everywhere in the open interval (0, 5), it follows from
        Theorem 33.1 that (1) is valid for all x in (0, 5).


33.6.   Find a Fourier cosine series for/(X) = x on (0, 3).
             Using Eq. (33.6) with L = 3, we have




        Thus Eq. (33.5) becomes




        Since/(X) = x is piecewise smooth on [0, 3] and continuous everywhere in the open interval (0, 3), it follows from
        Theorem 33.1 that (1) is valid for all x in (0, 3).


33.7.   Find a Fourier sine series for f(x) =

             Using Eq. (33.4) with L = 3, we obtain
322                                          EIGENFUNCTION EXPANSIONS                                    [CHAP. 33



        Thus Eq. (33.3) becomes




        Furthermore,


        Hence,



        Since/(X) is piecewise smooth on [0, 3] and continuous everywhere in (0, 3) except at x = 2, it follows from
        Theorem 33.1 that (1) is valid everywhere in (0, 3) except at x = 2.



33.8.   Find a Fourier sine series for/(X) = ex on (0, n).
             Using Eq. (33.4) with L = 7T, we obtain




        Thus Eq. (33.3) becomes




        It follows from Theorem 33.1 that this last equation is valid for all x in (0, it).



33.9.   Find a Fourier cosine series for/(X) = e* on (0, n).
             Using Eq. (33.6) with L = n, we have




        Thus Eq. (33.5) becomes




        As in Problem 33.8, this last equation is valid for all x in (0, n).
CHAP. 33]                                 EIGENFUNCTION EXPANSIONS                                                  323




33.10. Find an expansion for f(x) = e* in terms of the eigenfunctions of the Sturm-Liouville problem
       /' + fy = 0; /(O) = 0, y(n) = 0.
           From Problem 32.20, we have en(x) = cos (n - ^)x for n = 1, 2,.... Substituting these functions and w(x) = 1,
      a = 0, and b = Trinto Eq. (33.2), we obtain for the numerator:




      and for the denominator:




      Thus

      and Eq. (33.1) becomes




      By Theorem 33.1 this last equation is valid for all x in (0, n).

33.11. Find an expansion for f(x)= 1 in terms of the eigenfunctions of the Sturm-Li ouville problem
       /' + ty = Q; y(0) = 0; /(I) = 0.
           We can show that the eigenfunctions are en(x) = sin (n - \)nx (n = 1, 2,...). Substituting these functions and
      w(x) = 1, a = 0, b= 1 into Eq. (33.2), we obtain for the numerator:




      and for the denominator:




      Thus


      and Eq. (33.1) becomes



      By Theorem 33.1 this last equation is valid for all x in (0, 1).
324                                          EIGENFUNCTION EXPANSIONS                                          [CHAP. 33




                                         Supplementary Problems
33.12. Find a Fourier sine series fotf(x) = 1 on (0, 1).

33.13. Find a Fourier sine series for/(x) = x on (0, 3).

33.14. Find a Fourier cosine series for/(x) = x2 on (0, n).


33.15. Find a Fourier cosine series for f ( x ) =            on (0, 3).

33.16. Find a Fourier cosine series fotf(x) = 1 on (0, 7).


33.17. Find a Fourier sine series for f ( x ) =            on (0, 2).


33.18. Find an expansion for/(x) = 1 in terms of the eigenfunctions of the Sturm-Liouville problem y" + *ky = 0; y'(0) = 0,
       y(n) = 0.

33.19. Find an expansion fotf(x) = x in terms of the eigenfunctions of the Sturm-Liouville problem y" + 'ky = 0; y(0) = 0,
       y'(n) = 0.

33.20. Determine whether the following functions are piecewise continuous on [—1, 5]:




33.21. Which of the following functions are piecewise smooth on [-2, 3]?
                                                               CHAPTER 34



                 An Introduction to
               Difference Equations

INTRODUCTION
     In this chapter we consider functions, yn =/(«), that are defined for non-negative integer values n = 0, 1,2,
3, ... So, for example, if yn = « 3 -4, then the first few terms are {y0, y ^ , y2, y$, y^, ...} or (-4,-3,4, 23, 60, ...}.
Because we will be dealing with difference equations, we will be concerned with differences rather than
derivatives. We will see, however, that a strong connection between difference equations and differential
equations exists.
     A difference is defined as follows: Ayn = yn+\—y, and an equation involving a difference is called a difference
equation, which is simply an equation involving an unknown function, yn, evaluated at two or more different n
values. Thus, Ayn = 9 + n2, is an example of a difference equation, which can be rewritten as yn+\—yn = 9 + n2
or


       We say that n is the independent variable or the argument, while y is the dependent variable.




CLASSIFICATIONS
    Equation (34.1) can be classified as a first-order, linear, non-homogeneous difference              equation. These
terms mirror their differential equations counterparts. We give the following definitions:

   •    The order of a difference equation is defined as the difference between the highest argument and the
        lowest argument.
   •    A difference equation is linear if all appearances of y are linear, no matter what the arguments may be;
        otherwise, it is classified as non-linear.
   •    A difference equation is homogeneous if each term contains the dependent variable; otherwise it is
        non-homogeneous.

     We note that difference equations are also referred to as recurrence relations or recursion formulas
(see Problem 34.7).

                                                           325
Copyright © 2006, 1994, 1973 by The McGraw-Hill Companies, Inc. Click here for terms of use.
326                          AN INTRODUCTION TO DIFFERENCE EQUATIONS                                            [CHAP. 34



SOLUTIONS
     Solutions to difference equations are normally labeled as particular or general, depending on whether there
are any associated initial conditions. Solutions are verified by direct substitution (see Problems 34.8 through
34.10). The theory of solutions for difference equations is virtually identical with that for differential equations
(see Chapter 8) and the techniques of "guessing solutions" are likewise reminiscent of the methods employed
for differential equations (see Chapters 9 and 11).
     For example, we will guess yn=p" to solve a constant coefficient, homogeneous difference equation.
Substitution of the guess will allow us to solve for p. See, for example, Problems 34.11 and 34.12.
     We will also use the method of undetermined coefficients to get a particular solutions for a non-homogeneous
equation. See Problem 34.13.




                                               Solved Problems

In Problems 34.1 through 34.6, consider the following difference equations and determine the following:
the independent variable, the dependent variable, the order, whether they are linear and whether they are
homogeneous.


34.1.   yn+3 = 4yn
             The independent variable is n, the dependent variable is y. This is a third-order equation because of the
        difference between the highest argument minus the lowest argument is (n + 3) - n = 3. It is linear because of the
        linearity of both yn+3 and yn. Finally, it is homogeneous because each term contains the dependent variable, y.


34.2.   4+2 = 4+^3-5^5
             The independent variable is i, the dependent variable is t. This is a seventh-order equation because the
        difference between the highest argument and the lowest argument is 7. It is linear because of the linear appearances
        of the tit and it is non-homogeneous because of the 4, which appears independently of the tt.


34.3.   zkzk+1=W
             The independent variable is k, the dependent variable is z. This is a first-order equation. It is non-linear
        because, even though both ik and zi+1 appear to the first power, they do not appear linearly (any more than sin ik is
        linear). It is non-homogeneous because of the solitary 10 on the right-hand side of the equation.


34.4. fn+2 =/n+1 +/„ where/0 = 1,/j = 1
              The independent variable is n, the dependent variable is/. This is a second-order equation which is linear and
        homogeneous. We note that there are two initial conditions. We also note that this relationship, coupled with the
        initial conditions, generate a classical set of values known as the Fibonacci numbers (see Problems 34.7 and 3430).


34.5.   yr = 9 cos yr_4
             The independent variable is r, the dependent variable is y. This is a fourth-order equation. It is non-linear
        because of the appearance of cos yr_4; it is a homogeneous equation because both terms contain the dependent
        variable.


34.6.   2" +Xn = xn+s
              The independent variable is n, the dependent variable is x. This is an eighth-order linear difference equation.
        It is non-homogeneous due to the 2" term.
CHAP. 34]                     AN INTRODUCTION TO DIFFERENCE EQUATIONS                                                          327



34.7.   By recursive computations, generate the first 11 Fibonacci numbers using Problem 34.4.
              We are given that /0 = 1 and /j = 1, and fn+2 =fn+i +/«• Using this recursion formula, with n =0, we have,
        f2 =/j +/„ = 1 + 1 = 2. We now let n = 1; this implies/ 3 =/2 +fi = 2 + 1 = 3 . Continuing in this recursive way, we
         have the following: /4 = 5,/5 = 8,/6 = 13,/7 = 21,/8 = 34,/9 = 55 and/10 = 89.


34.8.    Verify yn = c(4"), where c is any constant, solves the difference equation yn+1 = 4yn.
              Substituting our solution into the left-hand side of the difference equation, we have yn+i = c(4"+1). The right-
        hand side becomes 4c(4") = c(4"+1), which is precisely the result we obtained when we substituted our solution into
        the left-hand side. The equation is identically true for all n; that is, it can be written as 4c(4") = c(4"+1). Hence, we
        have verified our solution. We note that this solution can be considered the general solution to this linear, first-order
        equation, since the equation is satisfied for any value of c.


34.9.   Consider the difference equation an+2 + 5an+1 + 6an = 0 with the imposed conditions; a0 = 1, a^ = -4.
        Verify that an = 2(-3)" - (-2)" solves the equation and satisfies both conditions.
            Letting n = 0 and n = 1 in an clearly gives a0 = 1 and a1 = —4, hence our two subsidiary conditions are satisfied.
        Substitution of an into the difference equation gives




        Thus the equation is satisfied by an.
              We note that this solution can be considered a particular solution, as opposed to the general solution, because
        this equation is coupled with specific conditions.


34.10. Verify that pn = c^S)" + c2(5)" + 3 + 4n, where c1 and c2 are any constants, satisfies the difference
       equationpn+2 = 8pn+1 - I5pn + 32n.
             Letting n, n + 1 and n + 2 into pn and substituting into the equation yields




        whence, both sides simplify to 9ci(3)" + 25c2(5)" + 11 + 4n, thereby verifying the solution.


34.11. Consider the difference equation, yn+l = -6yn. By guessing yn = p " for p ^ 0, find a solution to this equation.
             Direct substitution gives pn+1 = -6p" which implies p = -6. Hence, yn = (-6)" is a solution to our difference
        equation, which we can easily verify. We note that yn = k(-6)n also solves the difference equation, where k is any
        constant. This can be thought of as the general solution.


34.12. Using the technique            employed      in the previous problem,              find    the general       solution    to
       3bn+2 + 4bn+1 + bn=0.
             Substitution of the guess bn = ff into the difference equation gives 3p n+2 + 4p n+1 + p " = p " (3p 2 + 4p + 1) = 0,
        which implies 3p2 + 4p + 1 = 0. This results in p = —, -1. So the general solution, as can easily be verified, is


                              where the c; are arbitrary constants.

            We note that 3p2 + 4p+ 1 = 0 is called the characteristic equation. Its roots can be treated in exactly the
        same way as the characteristic equations derived from constant coefficient differential equations are handled (see
        Chapter 9).
328                          AN INTRODUCTION TO DIFFERENCE EQUATIONS                                             [CHAP. 34



34.13. Solve dn+1 = 2dn + 6n, by guessing a solution of dn = An + B, where A and B are coefficients to be
       determined.
            Substitution of our guess into the difference equation leads to the identity A(n + 1) + B = 2(An + B) + 6n.
       Equating the coefficients of like powers of n, we have A = 2A + 6 and A + B = 2B, which implies A = B = -6. Hence
       our solution becomes dn = —6n — 6.
            We note that the method of "undetermined coefficients" was presented in Chapter 11 regarding differential
       equations. Our guess here is the discrete variable counterpart, assuming a first degree polynomial, because the non-
       homogeneous part of the equation is a first degree polynomial.


34.14. Find the general solution to the non-homogeneous difference equation dn+l = 2dn + 6n, if we know that
       the general solution to the corresponding homogeneous equation is dn = k(2)n, where k is any constant.
            Because the theory of solutions for difference equations parallels that of differential equations (see Chapter 8),
       the general solution to the non-homogeneous, equation is the sum of the general solution to the corresponding
       homogeneous equation plus any solution to the non-homogeneous equation.
            Since we are given the general solution to the homogeneous equation, and we know a particular solution to the
       non-homogeneous equation (see Problem 34.13), the desired solution is dn = k(2)n - 6n- 6.


34.15. Consider the difference equation yn+2 + 6yn+1 + 9yn = 0. Use the guessing technique presented in
       Problem 34.11, find the general solution.
            Assuming yn=p" leads to p"(p2 + 6p + 9) = 0 which implies p = —3, —3, a double root. We expect two
       "linearly independent" solutions to the difference equations, since it is of the second-order. In fact, following the
       identical case in which the characteristic equation for second-order differential equations has a double root (see
       Chapter 9), we can easily verify that yn = Cj(—3)" + c2n(—3)n indeed solves the equation and is, in fact, the general
       solution.


34.16. Suppose you invest $100 on the last day of the month at an annual rate of 6%, compounded monthly. If
       you invest an additional $50 on the last day of each succeeding month, how much money would have
       been accrued after five years.
             We will model this situation (see Chapter 2) using a difference equation.
             Let yn represent the total amount of money ($) at the end of month n. Therefore y0 = 100. Since the 6%
       interest is compounded monthly, the amount of money at the of the first month is equal to the sum of y0 and the
       amount made during the first month which is 100(.06/12) = 0.50 (we divide by 12 because we are compounding
       monthly). Hence, y1 = 100 + 0.50 + 50 = 150.50 (because we add $50 at the end of each month). We note that
       yi = y0 + 0.005y0 + 50 = (1.005)3;0 + 50.
             Building on this equation, we see that y2 = (1.005)3^ + 50. And, in general, our difference equation becomes
       yn+1 = (1.005)yn + 50, with the initial condition y0 = 100.
             We solve this difference equation by following the methods presented in the five previous problems. That is,
       we first guess a homogeneous solution of the form yn = kp", where k is a constant to be determined.
             Substitution of this guess into the difference equation yields kpn+l = (1.005)kp"; this implies p = 1.005. We
       will solve for k after we find a solution to the non-homogeneous part of the difference equation.
             Because the degree of the non-homogeneous part of our difference equation is 0 (50 is a constant), we guess
       yn = C, where we must determine C.
             Substitution into the difference equation implies C = (1.005)C + 50, which leads to C = -10,000.
             Summing our solutions leads us to the general solution of the difference equation:




           Finally, we obtain k by imposing our initial condition: yQ = 100. Letting n = 0 in (1) implies 100 = fc(1.005)
       - 1000 = k- 1000; hence, k = 10,100. So (1) becomes
CHAP. 34]                       AN INTRODUCTION TO DIFFERENCE EQUATIONS                                               329



               Equation (2) gives us the accrued amount of money after n months. To find the amount of money compiled
         after 5 years, we let n = 60 in (2) and find that y60 = 3623.39.




                                         Supplementary Problems

In Problems 34.17 through 31.20, consider the following difference equations and determine the following: (1) the inde-
pendent variable; (2) the dependent variable; (3) the order; (4) whether they are linear; (5) whether they are homogeneous.

34.17.    ua+1=

3418. wk = 6* + k + 1 + In wk_^

34.19. Z( + Z(+i + Z(+2 + Z(+3 = 0.

34.20. gm_2 = 7gm+2 + gm+11

34.21.   Verify an = Ci(2)n + c2(-2)n satisfies an+2 = 4an, where Cj and c2 are any constants.

34.22. Verify bn = Ci(5)" + c2w(5)" satisfies bn+2 - Wbn+i + 25bn = 0, where Cj and c2 are any constants.

34.23. Verify rn =                      satisfies rn+2 = 6rn+1 — 5rn + 1, subject to rQ = 1, rl = 0.

34.24. Find the general solution to kn+i = —17kn.

34.25. Find the general solution to yn+2 = llyn+i + 12yn.

34.26. Find the general solution to xn+2 = 20xn+1 - W0xn.

34.27. Find a particular solution to wn+1 = 4wn + 6" by guessing wn = A(6)n, and solving for A.

34.28. Find the general solution to vn+1 = 2vn + n2.

34.29. Solve the previous problem with the initial condition v0 = 7.

34.30. Solve Fibonacci's equation/n+2 =/„+! +/„, subject to/0 =/j = 1.

34.31.   Suppose you invest $500 on the last day of the month at an annual rate of 12%, compounded monthly. If you invest
         an additional $75 on the last day of each succeeding month, how much money would have been accrued after ten
         years.
                                                              APPENDIX A



                      Laplace Transforms
                                   f(x)                                            ) = g{f(x)}




                                                          330

Copyright © 2006, 1994, 1973 by The McGraw-Hill Companies, Inc. Click here for terms of use.
            APPENDIX A                                     331



       Laplace Transforms (cont.)

f(x)                                F(S) = X ( f ( x ) }
332               APPENDIX A



             Laplace Transforms (cont.)

      f(x)                                F(s)=<E{f(x)}
            APPENDIX A                               333




       Laplace Transforms (cont.)

f(x)                                F(s) = %{f(x)}
334               APPENDIX A



             Laplace Transforms (cont.)

      f(x)                                F(s) = g{f(x)}
            APPENDIX A                            335



       Laplace Transforms (cont.)

f(x)                                F(s)= L(x)]
                                                              APPENDIX B



                                Some Comments
                               about Technology

INTRODUCTORY REMARKS
     In this book we have presented many classical and time-honored methods to solve differential equations.
Virtually all these techniques produced closed-form analytical solutions. These solutions were of an exact
nature.
     However, we have also discussed other approaches to differential equations; equations which did not easily
lend themselves to exact solutions. In Chapter 2, we touched upon the idea of qualitative approaches; Chapter 18
dealt with graphical methods; Chapters 19 and 20 investigated numerical techniques.
     In Chapter 2, we also dealt with the question of modeling. In Fig. B-l, we see the "modeling cycle" schema
which we introduced in that chapter. The "technology" leg leads from the model (e.g. a differential equation) to
a solution. This is (hopefully) the case, especially when the differential equation is too difficult to solve by hand.
The solution may be of an exact nature or it may be given in numerical, graphical or some other form.
     Over the last generation, calculators and computer software packages have had a great impact on the field
of differential equations, especially in the computational areas.
     What follows are thumbnail descriptions of two technological tools - the TI-89 calculator and the
MATHEMATICA computer algebra system.




                                                        Fig. B-l

                                                           336
Copyright © 2006, 1994, 1973 by The McGraw-Hill Companies, Inc. Click here for terms of use.
                                                   APPENDIX B                                                   337



TI-89
     The TI-89 Symbolic Manipulation is manufactured by Texas Instruments Incorporated
(http://www.ti.com/calc). It is hand-held, measuring approximately 7 inches by 3.5 inches, with a depth of
nearly an inch. The display screen measures approximately 2.5 inches by 1.5 inches. The TI-89 is powered by
four AAA batteries.
     Regarding differential equations, the TI-89 can do the following:

    •   Graph slope fields to first-order equations;
    •   Transform higher-order equations into a system of first-order equations;
    •   Runge-Kutta and Euler numerical methods;
    •   Symbolically solve many types of first-order equations;
    •   Symbolically solve many types of second-order equations.


MATHEMATICA
     There are many versions of MATHEMATICA, such as 5.0, 5.1, etc. MATHEMATICA is manufactured by
Wolfram Research, Inc. (http://www.wolfram.com/). With this package, the user "interacts" with the computer
algebra system.
     MATHEMATICA is extremely robust. It has the ability to do everything the TI-89 can do. Among its many
other capabilities, it has a library of classical functions (e.g. the Hermite polynomials, the Laguerre polynomials,
etc.), solves linear difference equations and its graphics powerfully illustrate both curves and surfaces.
                                                                     ANSWERS



                                                 Answers to
                                              Supplementary
                                                   Problems
CHAPTER 1
1.14.   (a) 2;     (b) y;   (c) x                            1.15.   (a) 4;   (£>) y;    (c) x

1.16.   (a) 2;     (b) s;   (c) t                            1.17.   (a) 4;   (£>) y;    (c) jc

1.18.   (a) n;     (b) x;   (c) y                            1.19.   (a) 2;   (£>) r;    (c) y

1.20.   (a) 2;     (b) y;   (c) x                            1.21.   (a) 7;   (b) b;     (c) p

1.22.   (a) 1;     (b) b;   (c) p                            1.23.   (a) 6;   (£>) y;    (c) x

1.24.   (d) and (e)                                          1.25.   (a), (c), and (e)

1.26.   (b), (d), and (e)                                    1.27.   (a), (c), and (d)

1.28.   (d)                                                  1.29.   (a), (c), and (d)

1.30.   (b) and (e)                                          1.31.   (a), (c), and (d)

1.32.   c=0                                                  1.33.   c=1

1.34.   c = e-2                                              1.35.   c = -3e-4

1.36.   c=1                                                  1.37.   c can be any real number

1.38.   c = -1/3                                             1.39.   No solution

1.40.   GI = 2, c2 = 1; initial conditions                   1.41.   GI = 1, c2 = 2; initial conditions

1.42.   Cj = 1, c2 = -2; initial conditions                  1.43.   Cj = c2 = 1; boundary conditions

1.44.   d = 1, c2 = —1; boundary conditions                  1.45.   Ci = —1, c2 = 1; boundary conditions

1.46.   No values; boundary conditions                       1.47.   GI = c2 = 0; initial conditions

                                                          338
Copyright © 2006, 1994, 1973 by The McGraw-Hill Companies, Inc. Click here for terms of use.
                                         ANSWERS TO SUPPLEMENTARY PROBLEMS                                                  339




                                    boundary conditions          1.49. No values; boundary conditions

1.50.   d = -2, c2 = 3                                           1.51.   d = 0, c2 = 1

1.52.   d = 3, c2 = -6                                           1.53.   c1 = 0, c2 = 1




CHAPTER 2




2.13.   Ine volume and the temperature are in direct proportion. As one increases, so will the other; as one decreases,
        so will the other.

2.14.   The net force acting on a body is proportional the body's acceleration. This assumes the mass is constant.

2.15.   Since t is increasing, and T(576) = 0, this model is valid for 576 hours. Any time afterwards gives us a negative
        radicand, and hence, an imaginary answer, thereby rendering the model useless.

2.16.   At t = 10, because 7"(10) = 0, and T'(t) >0fott> 10.

2.17.   The motion must be periodic, because sin 2t is a periodic function of period n.

2.18.   (a) 2 cos 2t;    (b) -4 sin 2t

2.19.   (a) y is a constant;   (b) y is increasing;   (c) y is decreasing;   (d) y is increasing.

2.20.   — = k(M - X ) 3 , where k is a negative constant.
        dt

2.21.   The rates of change of gallons of liquid sugar per hour.

2.22.   The rates of change of the vats (gal/hr) are affected by the amount of liquid sugar present in the vats, as the equations
        reflect. The signs and magnitudes of the constants (a, b, c, d, e, and/) will determine whether there is an increase
        or decrease of sugar, depending on the time. The units for a, b, c, and d is (1/hr); the units for e and/is (gal/hr).




CHAPTER 3

3.15. y' = -y2lx                                                 3.16.   y' = xl(ex- 1)

3.17.   / = (sin;t-;y 2 -;y) 1/3                                 3.18.   Cannot reduce to standard form

3.19. y' = -y + lnx                                              3.20.   / = 2 and / = x + y + 3




                                                                 3.24.   y' = ye-x-ex
340                                  ANSWERS TO SUPPLEMENTARY PROBLEMS



3.25.   / = -1                                       3.26. Linear

3.27. Linear, separable, and exact                   3.28. Linear

3.29. Homogeneous, Bernoulli                         3.30. Homogeneous, Bernoulli, separable, and exact

3.31.   Linear, homogeneous, and exact               3.32.   Homogeneous

3.33.   Exact                                        3.34. Bernoulli

3.35.   Linear and exact




CHAPTER 4

                                                     4.24. y = ±(k+2x2)1/4,k = -4c


4.25.   y = (k + 3x)-1/3,k = -3c


4.27.   y = kx,k = ±e~c

4.29.   y = ke-'i/2 ,k = ±(f                         4.30. 2f + 6t+2y3 + 3y2 = k,k = 6c

4.31.   y3t4 = key,k = ±ec                           4.32. y = tan (x - c)


4.33.   y = 3 + 2 tan (2x + k), k = -2c




4.37. y = -\l(x-c)                                   4.38. x = -3l(t3 + k),k = 3c

4.39. x = kt,k = ±ec

                                                             y




                                                     4.46. y = x In \klx\

4.47.   y = kx2 - X                                  4.48. y2 = kx4-x2

4.49.   Not homogeneous                              4.50.   V2 = X2 - kx


4.51.   3yx2-y3 = k


4.53.   Not homogeneous
                                      ANSWERS TO SUPPLEMENTARY PROBLEMS     341




CHAPTER 5

5.24.   xy + x2y3 +y = c2                             5.25.   Not exact


                                                      5.27. ^3;2 + / = c2

5.28.   xy = c2                                       5.29.   Not exact

5.30.   xy sin x + y = c2                             5.31.   y2 =C2l
5.32.   y = c2t2                                      5.33.   Not exact


5.34.   ty-fy      = C2




                                                      5.39.   Not exact

5.40.   t cos x + x sin t = c2




5.52.   I(x, y) = l (the equation is exact);




                                                      5.61.   No solution
342                                           ANSWERS TO SUPPLEMENTARY PROBLEMS



CHAPTER 6

6.20.   y = ce 5x                                             6.21. y = ce5x

6.22.   y
            = C(,0.01X                                        6.23.   y = ce~*


6.24.   y = ce~x                                              6.25.   y = cex'

6.26.   y = ce3^                                              6.27.   y = c/x

6.28.   y = c/x2                                              6.29. y = ex2

6.30.   y = ce-2/x




6.34.   y = cefR + 1


6.36.   y = c + sin x

6.38.   y2 = l/(2x + cx2)                                     6.39.   y = (6 + eg"*2'4)2

6.40.   y= l / ( l +     ctf)                                 6.41. y = (1 + eg"3-*)1'3

6.42.   y = e~xl(c - x)                                       6.43. y = ce-50t

                                                              6.45.   N=cekt




6.48.   T = (3.2t + c)e-°Mt

                                                                              2 2>
                                                              6.51.   y = 5e-^ -'


6.52.   y = 2e~x2 + x1 -1


6.54.   v = -l6e- 2 <+16


                                                              6.57.   T=-60e-0.069r+30


CHAPTER 7

7.26.   (a) JV=250e0166';            (b) 11.2 ht              7.27.   (a) JV=300e00912';   (b) 7.6 hr

7.28.   (a) 2.45 oz;            (b) 15.19oz                   7.29.   32 fold increase

7.30.   3.17hr                                                7.31.   (a) N=80e°M34t (in millions);
                                                                      (b) 91.5 million
                                       ANSWERS TO SUPPLEMENTARY PROBLEMS                             343




7.32.   N = 16,620e° 11(; N0 = 16,620                  7.33.   (a) JV= 100e-°-026';    (b) 4.05 yr

7.34.   N = N0e-°-W5>;t1/2 = 6.6hr


7.36.   $15,219.62                                     7.37.   $16,904.59

7.38.   $14,288.26                                     7.39.   8.67 percent

7.40.   10.99 percent                                  7.41.   20.93 yr

7.42.   7.93 yr                                        7.43.   12.78 percent

7.44.   8.38 yr                                        7.45.   r=-100e-° 029 <+100;
                                                               (a) 23.9 min; (b) 44° F

7.46.   T = 80e-° 035(; T0 = 80° F                     7.47.   r=-100e-°029'+ 150; f100 = 23.9min

7.48.   (a) 138.6°F;    (b) 3.12min                    7.49.   (a) 113.9°F;     (b) 6.95 min

7.50.   An additional 1.24 min                         7.51.   (a) v = 32t;    (b) 16t2

7.52.   (a) 5.59 sec;   (b) 5.59 sec                   7.53.   (a) 32J + 30;    (b) 3.49 sec

7.54.   (a) 32t+ 10; (b) 5 sec                         7.55.   31.25 sec

7.56.   976.6 ft




7.58.   (a) v = 48 - 48e-2"3;                          7.59.   (a) v = 128- llSe""4;
        (b) x = 72e-2"3 + 481-72                               (b) 6.472 sec

7.60.   320 ft/sec                                     7.61.   0.392 m/sec with g = 9.8 m/sec2

7.62.   (a) v = -320e-°1( + 320;                       7.63.   (a) v=4-4e8r

        (b) x = 3200e-°-lt + 320?-3200;
        (c) 6.9 sec

7.64.   (a) v = 320 - 320e-"10;                        7.65.   (a) Q = -5e-°-2t + 5;

        (b) x = 3200e-"10 + 320f - 3200


                                                       7.67.   (a) g = 80e-°04';

          at f = 10, 2 = 22.5 Ib                               (b) 17.3 min
          (Note that a = 80(1/8) = 10 Ib.)

7.68.   56.3 Ib                                        7.69.   111.1 g

7.70.   80 g
344                                   ANSWERS TO SUPPLEMENTARY PROBLEMS



7.72.   (a) q = 2 + 3e-10';   (b) I = -30e-10'                    7.73.   (a) q=We-25';        (b) I = -25e~2 5(




                                                                  7.77.   (a) I=We-25t;      (b)I,= We-25t




7.82.   xy = k                                                    7.83. y2 = -2x + k

                                                                  7.85. x2 + y2 = kx




CHAPTER 8

8.33.   (e), (g), (j), and (K) are nonlinear; all the rest are linear. Note that (/) has the form y' — (2 + x)y = 0.

8.34.   (a), (c), and (/) are homogeneous. Note that (/) has the form y" = -ex.

8.35.   (b), (c), and (/) have constant coefficients.             8.36. W= 0

8.37.   W= —x2; the set is linearly independent.                  8.38.   W= —x4; the set is linearly independent.

8.39.   W=-2x3; the set is linearly independent                   8.40.   W= -Wx; the set is linearly independent.

8.41.   W=0                                                       8.42.   W=-4; the set is linearly independent.

8.43.   W= e5x; the set is linearly independent.                  8.44.   W=0

8.45.   W=0                                                       8.46.   W=0

8.47.   W= 2x6; the set is linearly independent.                  8.48.   W= 6e2x; the set is linearly independent.

8.49.   W=0                                                       8.50.   [4]3x + [-3]4x = 0

8.51.   [1]^2+[1](-^2) = 0                                        8.52.   [5](3e2x) + [-3](5e2*) = 0

8.53.   [-2]x+[7](l) + [l](2x-7) = 0                              8.54.   [3](x + 1) + [-2](x2 + x)
                                                                                + [l](2x2-x-3) = 0
                                        ANSWERS TO SUPPLEMENTARY PROBLEMS                                                 345



8.55.   [-6]sin;c+[-l](2cosjc)                                  8.56.    y = c1e2x + c2e-2x
          + [2] (3 sin x + cos x) = 0

8.57.   y = c^e2" + c2e^x                                       8.58.    y = c1 sin 4x + c2 cos 4x

8.59.   y = c^* + c2

8.60.   Since y± and y2 are linearly dependent, there is not enough information provided to exhibit the general solution.

8.61.   y = CiX + c^e* + C3y3 where y3 is a third particular solution, linearly independent from the other two.

8.62.   Since the given set is linearly dependent, not enough information is provided to exhibit the general solution.

8.63.   y = c^ + c2e* + C3e2j:

8.64.   y = CiX2 + c^x" + c3x4 + C4y4 + csys, where y4 and ys are two other solutions having the property that the set (x2, x',
        x4, y4, y$} is linearly independent.

8.65.   y = GI sin x + c2 cos x + x2 — 2

8.66.   Since e* and 3e" are linearly dependent, there is not enough information given to find the general solution.

8.67.   y = c^ + c2e~x + Cjxe* + 5

8.68.   Theorem 8.1 does not apply, since aQ(x) = —(2lx) is not continuous about XQ = 0.

8.69.   Yes; aQ(x) is continuous aboutx Q =l.

8.70.   Theorem 8.1 does not apply, since bi(x) is zero at the origin.




CHAPTER 9

9.17.   y = c1ex + c2e~x                                        9.18.    y = cle-5x + c2e6x

9.19.   y = c1ex + c2xex                                        9.20.    y = c1 cos x + c2 sin x

9.21.   y = Cie~x cos x + c2e~x sin x                           9.22.    y = cf^x + c2e~^x

9.23.   y = c^ + c2xe-3x                                        9.24.    y = cf~x cos -fix + c2e~x sin J2x

9.25.   y = c,eK3 + ^m:t + c2eK3-^mx                            9.26.    y = cle-(l!2)x + c2xe-(l!2)x




9.27.   x = cje4' + c2e16'                                      9.28.    x = cie-50t + c2e-wt

9.29.   x = c1e<3 + ^)"2+c2e<3-'rs)"2                           9.30.    x = c1est+c2te5'

9.31.   x = Ci cos 5t + c, sin 5t                               9.32.    x = c1 + c2e-2St
346                                       ANSWERS TO SUPPLEMENTARY PROBLEMS




                                                          9.34.    u = c,e'cosj3t + c2e'sm\/3t

                 (2+
9.35.    u = cie    ^'+c2e(2-^'                           9.36. u = cl + c2e36'


9.37.    u = Cje6' + c2e~6' = ki cosh 6t + k2 sin 6t

9.39.    Q = c^7^"2 + c/7-^"2                             9.40.    P = Cje9' + c2te9'

                                                          9.42.    N = c^3* + c2e-Sx

                                                          9.44. T = c1e-lse + c26e-lse

9.45.;. R = CI + c2e-se



CHAPTER 10

10.16. y = cie~x + c2e* + c^e1*                           10.17. y = c1ex + c2xe* + c3g-*

10.18. y = c1ex + c^e* + CjxV                             10.19. y = c1ex + c2 cos x + c3 sin x

10.20.    y = (ci + c2x) cos x + (c3 + c4x) sin x         10.21. y = c^e* + c2e~x + c3 cos x + c4 sin x

10.22.    y = clex + c2e~x + c?lxe~x + c^e~x              10.23.    y = c^2* + c2xe'2x + c^ cos 2x + C4e2j: sin 2x

10.24.    y = c1 + c2x + c-jX2 + c4e~5x




10.26.    y = c^e2* cos 2x + c^ sin 2x + c3e~2j:          10.27.. x = c1e ' + c2te '+C3t2e '+ c4fe '
             + c4xe~2x + c^ + c6e~x

10.28.    x = c1 + c2t + c3t2                             10.29.    x = c1 cos t + c2 sin t + c3 cos 3t + c4 sin 3t

10.30.    x = c^5' + c2 cos 5t + c3 s'mSt                 10.31.    q = qe1 + c2e~x + c3 cos^/2x + c4 sin\/2x

10.32.    q = cf* + c2e~x + c3e^x + c4e^x                 10.33.    N = c1e-6x + c2e8x + c3e10x

10.34.    r = Cle-e + c^ + c30V« + c4<?Vfl + c50V«        10.35.    y = clelx + c2e*x + c3e-Ux

10.36.    y = cl + c2 cos 19x + c3 sin 19x                10.37.    y = c1 + c2x + C3e2x cos 9x + C4e2j: sin 9x

10.38.    y = c^ cos 9x + c2e^ sin 9x                     10.39.    y = c^ + C2xe5x + c^e^ + c4e~5x
              + C3xe2x cos 9x + C4xe2x sin 9x                           + c<xe-5x

10.40.    y = Ci cos 6x + c2 sin 6x + c3x cos 6x          10.41.    y = e~ 3 '(CjCos^; + c 2 sinjc + c3xcosx
             + c4x sin 6x + c^ cos 6x + c6x2 sin 6x                    + c4xsinx) + e3x(c5cosx + c 6 sinjc
                                                                       + CjXcosx + CgXs'mx)
10.42.    y'" + 4y" - 124y' + 224y = 0                    10.43.    /" + 361/ = 0
                                       ANSWERS TO SUPPLEMENTARY PROBLEMS                                                 347




10.44.    /4) - 4y'" + 85y" = 0                               10.45.   /4) - 8/" + 186y" - 680);' + 7225y = 0

10.46.    /5) - 5/4) - 50y(3) + 250y" + 625y' -3125y = 0      10.47.   y = cie~x + c2xe~x + C3x2e~x + c4x3e~x

10.48.    y = Ci cos 4x + c2 sin 4x + c3 cos 3x + c4 sin 3x   10.49.   y = Ci cos 4x + c2 sin 4x + c3x cos 4x + c4x sin 4x

10.50.    y = c^ + c^xe2* + C3e5x + C4xe5x




CHAPTER 11


11.15.    yp = A1x + A0                                       11.16.   yp = A2x2 + A1x + A0

11.17.   yp = A2x2 + A1x + A0                                 11.18.   yp = Ae-2x

11.19.   yp = Ae5x                                            11.20.   yp = Axe2-1

11.21.   yp = A sin 3x + B cos 3x                             11.22.   yp = A sin 3;t + B cos 3;t

11.23.   yp = (AiX + A0) sin 3x + (B^ + B0) cos 3x            11.24.   yp = Ajjc + A0 + Se&

11.25.   yp = (AJ* + A0)e5-*                                  11.26.   ^ = XA^ + A0)e3^

11.27.   yp = Ae3-1                                           11.28.   ^ = (A^ + A0)e3^

11.29.   yp = Ae5-1                                           11.30.   yp = (A2^ + A!* + A0)e5-1

11.31.    v, = Asimj2x +Bcos^x                                11.32.   ^ ^ ( A j ^ 2 + A ^ +A 0 )sin>/2^
                                                                            + (S2^2 + Sjjc + S0)cos>/2.

11.33.    yn = A sin 3x + B cos 3x                            11.34.   yp = A sin 4x + B cos 4x + C sin 7x + D cos 7jc

11.35.   yp = Aex sin 3x + Be x cos 3x                        11.36.   ;yp = ^(Ae& sin 3x + Be5x cos 3;c)

11.37.   jtp = i(Aji + A0)                                    11.38.   xp = t(A2t2 + Ajf + A0)

11.39.   xp = (Ait + A0)e-2' + Bt                             11.40.   xp = t\Ae<)

11.41.   xp = t2(Ait + A0)e'                                  11.42.   xp = At + (Bit + B0) sin t + (Ctf + C0) cos t

11.43.    Xp=(A1t     + A<>)e2'sm3t                           11.44.   y = c-lex + c?xex + x2+ 4x +5
                + (BJ + S0)e2' cos3t

11.45.   y = Cje* + Cj^e1 + Se21                              11.46.   y = c^ + c2xex — 2 sin x




11.49.    y = c-lex + xex                                     11.50.   y = c,ex + xe2x-e2x-l
348                                   ANSWERS TO SUPPLEMENTARY PROBLEMS




CHAPTER 12


                                                      12.10.   y = c1 cos x + c2 sin x + (cos x) In Icos x\ + x sin x




12.15.   y = cl + c2x2 + xtf - e

                                                      12.18.   y = c1 + c2x + c^x2 + 2x"


                                                      12.20.   ^ = c 3 e 3 '+c 2 fe 3 '-e 3 'lnUI   (with c3 = Cj - 1)

12.21.   x = c1 cos 2t + c2 sin It- 1
              + (sin 2t) In Isec 2t + tan 2A




                                                      12.26.   r = Cle-2' + c2te-2t + C3t2e-2t + 2fV2<

12.27.   r = Cjg5' + c2 cos 5t + c3 sin 5t - 8        12.28.                )
                                                               Z = c1 + c2e' +C 3 e
                                                                                    2e




CHAPTER 13




13.9.    v = e--l + e21




13.11.   y = -cos 1 cos x - sin 1 sin x + x
           = -cos(jc- 1) + x
                                 ANSWERS TO SUPPLEMENTARY PROBLEMS                                         349




                                                       13.14.   y = -2 + 6x - 6x2 + 2X3




CHAPTER 14

14.26.   60 Ib/ft                                      14.27.   17.07 Ib/ft

14.28.   130.7 dynes/cm                                14.29.   19.6 N/m




14.34.   (a) to = 8 Hz; (£>)/=4/7rHz;    (c)T=rt4sec   14.35.   (a) to =12 Hz;   (fc)/= 6/7rHz;   (c)T=n/6sec


14.36.   (a) to = 2 Hz; (b) f= l/rcHz;   (c)T=^sec     14.37.
350                                    ANSWERS TO SUPPLEMENTARY PROBLEMS




                                                       14.55.   I=24te-S00t




                                                                    =cos200t-2sin200t
                                                                   = V5 cos (200*+ 1.11)




14.66.   1.28 ft = 15.36 in submerged

14.68.   x = -0.260 cos (5t - 0.876)                   14.69.   0.764 ft submerged

14.70.   x =-0.236 cos 6.47*                           14.71.   (a) (0= 6.47 Hz; (b) /= 1.03 Hz;
                                                                (c) T= 0.97 sec

14.72.   (a) to = 5 Hz; (b) /= 5l(2n) Hz;              14.73.   No equilibrium position; it sinks.
         (c) T = 2?r/5 sec

14.74.   No equilibrium position; it sinks.            14.75.   9.02 cm submerged

14.76.   x =-4.80 sin 10.42*




14.78.   0.236 ft = 2.84 in                            14.75    159.151b


                                                                                     (b) period is reduced by


CHAPTER 15
                                          ANSWERS TO SUPPLEMENTARY PROBLEMS                                                  351



15.22.     Not defined                                             15.23.   Not defined




                                                                                           (b) not defined



15.30.i.   Not defined


15.32.     X 2 - 1 = 0;X 1 = 1,X 2 = -1                            15.33.    X 2 -2A, + 13 = 0; \ = 1 + 2-J31,
                                                                                X2 = 1 - 2-j3i

15.34.     X 2 - 2 X - 1 = 0;X 1 = 1 + V 2 , X 2 = 1 - V 2         15.35.   X2 - 9 = 0; Xj = 3, X2 = -3

15.36.     X 2 -lCa + 24 = 0;X 1 = 4, X2 = 6                       15.37.
                                                                                      2
                                                                            (1 - X) (X + 1) = 0; A,! = 1, X2 = -z, Xg = -z
                                                                               Each eigenvalue has multiplicity one.




15.38.     (-X.) (X2 - 5X.) = 0; ^ = 0, X2 = 0, Ag = 5
              The eigenvalue X = 0 has multiplicity
              two,while X = 5 has multiplicity one.


15.40.     (5t - X) (k2 - 25t2) = 0; A,j = 5r, X2 = 5r, Xg = -5f   15.41.




CHAPTER 16
352          ANSWERS TO SUPPLEMENTARY PROBLEMS




                                         (see problem16.12




CHAPTER 17




                       and t0 not specfied
                           ANSWERS TO SUPPLEMENTARY PROBLEMS   353




CHAPTER 18

18.17.   See Fig. 18-20.




                                       Fig. 18-20.
354                        ANSWERS TO SUPPLEMENTARY PROBLEMS



18.18.   See Fig. 18-21.




                                       Fig. 18-21.




18.19.   See Fig. 18-22.




                                       Fig. 18-22.
                           ANSWERS TO SUPPLEMENTARY PROBLEMS   355



18.20.   See Fig. 18-23.




                                       Fig. 18-23.




18.21.   See Fig. 18-24.




                                       Fig. 18-24.
356                                ANSWERS TO SUPPLEMENTARY PROBLEMS



18.22.   Four solution curves are drawn, beginning at the points (1, 3), (1, -3), (-1, -3), and (-1, 3), respectively, and
         continuing in the positive x-direction. See Fig. 18-25.




                                                       Fig. 18-25.




18.23. See Fig. 18-17.                                       18.24.   Straight lines of the form y = x+ (1 — c)

18.25. See Fig. 18-15.                                       18.26.   Vertical straight lines

18.27. See Fig. 18-16.                                       18.28.   Horizontal straight lines

18.29. See Fig. 18-14.                                       18.30.   Parabolas of the form y = x2 + c

18.31. See Fig. 18-18.                                       18.32.   Curves of the form v = sin x - c

For comparison with other methods to be presented in subsequent chapters, answers are carried through x= 1.0, and are
given for additional values of h.
                             ANSWERS TO SUPPLEMENTARY PROBLEMS     357




18.33.         Method:     EULER'S METHOD

               Problem:    / = -y; y(0) = I

         xn                   yn                   True solution
                ft = 0.1   h = 0.05    ft = 0.01     Y(x) = e~x

         0.0    1.0000      1.0000      1.0000        1.0000

         0.1    0.9000      0.9025      0.9044        0.9048

         0.2    0.8100      0.8145      0.8179        0.8187

         0.3    0.7290      0.7351      0.7397        0.7408

         0.4    0.6561      0.6634      0.6690        0.6703

         0.5    0.5905      0.5987      0.6050        0.6065

         0.6    0.5314      0.5404      0.5472        0.5488

         0.7    0.4783      0.4877      0.4948        0.4966

         0.8    0.4305      0.4401      0.4475        0.4493

         0.9    0.3874      0.3972      0.4047        0.4066

         1.0    0.3487      0.3585      0.3660        0.3679


18.34.         Method:     EULER'S METHOD

               Problem:    y' = 2x; y(0) = 2

         xn                   yn                   True solution
                h = 0.l    h = 0.05    ft = 0.01     Y(x) = x2

         0.0    0.0000      0.0000      0.0000        0.0000

         0.1    0.0000      0.0050      0.0090        0.0100

         0.2    0.0200      0.0300      0.0380        0.0400

         0.3    0.0600      0.0750      0.0870        0.0900

         0.4    0.1200      0.1400      0.1560        0.1600

         0.5    0.2000      0.2250      0.2450        0.2500

         0.6    0.3000      0.3300      0.3540        0.3600

         0.7    0.4200      0.4550      0.4830        0.4900

         0.8    0.5600      0.6000      0.6320        0.6400

         0.9    0.7200      0.7650      0.8010        0.8100

         1.0    0.9000      0.9500      0.9900        1.0000
358                          AANSWERS TO SUPPLEMENTARY PROBLEMS




18.35.         Method:     EULER'S METHOD

               Problem:    / = -y + x + 2; y(0) = 2

         xn                   yn                     True solution
                ft = 0.1   h = 0.05    ft = 0.01   Y(x) = e~x + x+l
         0.0    2.0000      2.0000      2.0000          2.0000

         0.1    2.0000      2.0025      2.0044          2.0048

         0.2    2.0100      2.0145      2.0179          2.0187

         0.3    2.0290      2.0351      2.0397          2.0408

         0.4    2.0561      2.0634      2.0690          2.0703

         0.5    2.0905      2.0987      2.1050          2.1065

         0.6    2.1314      2.1404      2.1472          2.1488

         0.7    2.1783      2.1877      2.1948          2.1966

         0.8    2.2305      2.2401      2.2475          2.2493

         0.9    2.2874      2.2972      2.3047          2.3066

         1.0    2.3487      2.3585      2.3660          2.3679


18.36.         Method:     EULER'S METHOD

               Problem:    y' = 4x2; y(0) = 0

         xn                   yn                    True solution
                h = 0.l    h = 0.05    ft = 0.01      Y(x) = x4

         0.0    0.0000      0.0000      0.0000          0.0000

         0.1    0.0000      0.0000      0.0001          0.0001

         0.2    0.0004      0.0009      0.0014          0.0016

         0.3    0.0036      0.0056      0.0076          0.0081

         0.4    0.0144      0.0196      0.0243          0.0256

         0.5    0.0400      0.0506      0.0600          0.0625

         0.6    0.0900      0.1089      0.1253          0.1296

         0.7    0.1764      0.2070      0.2333          0.2401

         0.8    0.3136      0.3600      0.3994          0.4096

         0.9    0.5184      0.5852      0.6416          0.6561

         1.0    0.8100      0.9025      0.9801          1.0000
                              ANSWERS TO SUPPLEMENTARY PROBLEMS        359



CHAPTER 19


19.13.         Method:      MODIFIED EULER'S METHOD

               Problem:     / = -y + x + 2; >>(0) = 2

         xn                 ft = 0.1
                                                     True solution
                   pyn                   yn        Y(x) = e~x + x+ 1

         0.0        —                 2.000000          2.000000

         0.1    2.000000              2.005000          2.004837

         0.2    2.014500           2.019025             2.018731

         0.3    2.037123           2.041218             2.040818

         0.4    2.067096           2.070802             2.070320

         0.5    2.103722           2.107076             2.106531

         0.6    2.146368           2.149404             2.148812

         0.7    2.194463           2.197210             2.196585

         0.8    2.247489           2.249975             2.249329

         0.9    2.304978           2.307228             2.306570

         1.0    2.366505           2.368541             2.367879



19.14.         Method:      MODIFIED EULER'S METHOD

               Problem:     y' = -y; y(0) = 1

         xn                 h = 0.l
                                                    True solution
                   pyn                   yn           Y(x) = e-*

         0.0        —                 1.0000000         1.0000000

         0.1    0.9000000          0.9050000            0.9048374

         0.2    0.8145000          0.8190250            0.8187308

         0.3    0.7371225          0.7412176            0.7408182

         0.4    0.6670959          0.6708020            0.6703201

         0.5    0.6037218          0.6070758            0.6065307

         0.6    0.5463682          0.5494036            0.5488116

         0.7    0.4944632          0.4972102            0.4965853

         0.8    0.4474892          0.4499753            0.4493290

         0.9    0.4049777          0.4072276            0.4065697

         1.0    0.3665048          0.3685410            0.3678794
360                               ANSWERS TO SUPPLEMENTARY PROBLEMS




19.15.             Method:      MODIFIED EULER'S METHOD

                   Problem:

            xn                  ft = 0.2
                                                         True solution
                                                       Y(x) = x^9 + \nx2
                        #yn                  yn
            1.0         —                  3.0000           3.0000

            1.2        3.6667              3.6716           3.6722

            1.4        4.3489              4.3530           4.3542

            1.6        5.0393              5.0429           5.0444

            1.8        5.7367              5.7399           5.7419

            2.0        6.4404              6.4432           6.4456




19.16. The true solution is Y(x) = x2/2- 1, a second-degree polynomial. Since the modified Euler's method is a second-
       order method, it will generate the exact solution.




19.17.             Method:      MODIFIED EULER'S METHOD

                   Problem:     / = -4.x3 ;y(2) = 6

            xn                  ft = 0.2
                                                         True solution
                         pyn                 yn          Y(x) = x4 - 10
            2.0          —                  6.0000          6.0000

            2.2       12.4000              13.4592         13.4256

            2.4       21.9776              23.2480         23.1776

            2.6       34.3072              35.8080         35.6976

            2.8       49.8688              51.6192         51.4656

            3.0       69.1808              71.2000         71.0000
                                ANSWERS TO SUPPLEMENTARY PROBLEMS   361




19.18.   Method:      RUNGE-KUTTA METHOD

         Problem: / = y + x + 2;y(0) = 2

         xn          ft = 0.1         True solution
                       yn           Y(x) = e~x+x+l

         0.0        2.000000              2.000000

         0.1        2.004838              2.004837

         0.2        2.018731              2.018731

         0.3        2.040818              2.040818

         0.4        2.070320              2.070320

         0.5        2.106531              2.106531

         0.6        2.148812              2.148812

         0.7        2.196586              2.196585

         0.8        2.249329              2.249329

         0.9        2.306570              2.306570

         1.0        2.367880              2.367879




19.19.   Method:      RUNGE-KUTTA METHOD

         Problem:     y' = -y; y(0) = 1

         xn          ft = 0.1         True solution
                       yn               Y(x) = e-*

         0.0        1.0000000             1.0000000

         0.1        0.9048375             0.9048374

         0.2        0.8187309             0.8187308

         0.3        0.7408184             0.7408182

         0.4        0.6703203             0.6703201

         0.5        0.6065309             0.6065307

         0.6        0.5488119             0.5488116

         0.7        0.4965856             0.4965853

         0.8        0.4493293             0.4493290

         0.9        0.4065700             0.4065697

         1.0        0.3678798             0.3678794
362                                ANSWERS TO SUPPLEMENTARY PROBLEMS




19.20.      Method:      RUNGE-KUTTA METHOD

            Proble

             xn         h = 0.2         True solution
                          yn          Y(x) = x^9 + \nx2
             1.0      3.0000000          3.0000000

             1.2      3.6722028          3.6722045

             1.4      4.3541872          4.3541901

             1.6      5.0444406          5.0444443

             1.8      5.7418469          5.7418514

            2.0       6.4455497          6.4455549




19.21.   Since the true solution Y(x) =x4- 10 is a fourth-degree polynomial, the Runge-Kutta method, which is a fourth-
         order numerical method, generates an exact solution.




19.22.      Method:      RUNGE-KUTTA METHOD

            Problem: / = 5x4; y(0) = 0

             xn         ft = 0.1        True solution
                          yn              Y(x) = x5

             0.0      0.0000000          0.0000000

             0.1      0.0000104          0.0000100

             0.2      0.0003208          0.0003200

             0.3      0.0024313          0.0024300

             0.4      0.0102417          0.0102400

             0.5      0.0312521          0.0312500

             0.6      0.0777625          0.0777600

             0.7      0.1680729          0.1680700

             0.8      0.3276833          0.3276800

             0.9      0.5904938          0.5904900

             1.0      1.0000042           1.0000000
                               ANSWERS TO SUPPLEMENTARY PROBLEMS     363




19.23.   Method: ADAMS-BASHFORTH-MOULTON METHOD

         Problem: / = y; y(0) = 1

         xn                  ft = 0.1
                                                   True solution
                    pyn                  yn          Y(x) = e-*

         0.0         —                1.0000000      1.0000000

         0.1         —                1.1051708      1.1051709

         0.2         —                1.2214026      1.2214028

         0.3         —                1.3498585      1.3498588

         0.4     1.4918201            1.4918245      1.4918247

         0.5     1.6487164            1.6487213      1.6487213

         0.6     1.8221137            1.8221191      1.8221188

         0.7     2.0137473          2.0137533        2.0137527

         0.8     2.2255352          2.2255418        2.2255409

         0.9     2.4595971          2.4596044        2.4596031

         1.0     2.7182756          2.7182836        2.7182818


19.24.   Method: ADAMS-BASHFORTH-MOULTON METHOD

         Problem: / = -y + x + 2; y(0) = 2

         xn                 h = 0.l
                                                    True solution
                    pyn                  yn       Y(x) = e~x + x+l

         0.0         —              2.000000         2.000000

         0.1         —              2.004838         2.004837

         0.2         —              2.018731         2.018731

         0.3         —              2.040818         2.040818

         0.4     2.070323           2.070320         2.070320

         0.5     2.106533           2.106530         2.106531

         0.6     2.148814           2.148811         2.148812

         0.7     2.196587           2.196585         2.196585

         0.8     2.249330           2.249328         2.249329

         0.9     2.306571           2.306569         2.306570

         1.0     2.367880           2.367878         2.367879
364                            ANSWERS TO SUPPLEMENTARY PROBLEMS




19.25.   Method: ADAMS-BASHFORTH-MOULTON METHOD

         Problem: / = -}>; y(0) = 1

         xn                  ft = 0.1
                                                  True solution
                    pyn                 yn          Y(x) = e~x
         0.0         —              1.0000000        1.0000000
         0.1         —              0.9048375       0.9048374

         0.2         —              0.8187309       0.8187308
         0.3         —              0.7408184       0.7408182
         0.4     0.6703231          0.6703199       0.6703201

         0.5     0.6065332          0.6065303       0.6065307
         0.6     0.5488136          0.5488110       0.5488116
         0.7     0.4965869          0.4965845       0.4965853

         0.8     0.4493302          0.4493281       0.4493290
         0.9     0.4065706          0.4065687       0.4065697
         1.0     0.3678801          0.3678784       0.3678794




19.26.   Method: ADAMS-BASHFORTH-MOULTON METHOD

         Problem

         xn                  h = 0.2
                                                  True solution
                    pyn                 yn      Y(x) = x-y/9 + lnx 2
         1.0         —              3.0000000       3.0000000

         1.2         —              3.6722028       3.6722045
         1.4         —              43541872        43541901
         1.6         —              5.0444406       5.0444443

         1.8     5.7419118          5.7418465       5.7418514
         2.0     6.4455861          6.4455489       6.4455549
                              ANSWERS TO SUPPLEMENTARY PROBLEMS     365




19.27.         Method:      MILNE'S METHOD

               Problem:    / = -y + x + 2; y(0) = 2

         xn                 ft = 0.1
                                                   True solution
                   pyn                  yn       Y(x) = e~x + x+l

         0.0        —                2.000000         2.000000

         0.1        —                2.004838         2.004837

         0.2        —                2.018731         2.018731

         0.3        —                2.040818         2.040818

         0.4    2.070323           2.070320           2.070320

         0.5    2.106533           2.106531           2.106531

         0.6    2.148814           2.148811           2.148812

         0.7    2.196588           2.196585           2.196585

         0.8    2.249331           2.249329           2.249329

         0.9    2.306571           2.306570           2.306570

         1.0    2.367881           2.367879           2.367879


19.28.         Method:     MILNE'S METHOD

               Problem:    y' = -y; y(0) = 1

         xn                h = 0.l
                                                  True solution
                   pyn                  yn          Y(x) = e~x

         0.0        —                1.0000000        1.0000000

         0.1        —              0.9048375          0.9048374

         0.2        —              0.8187309          0.8187308

         0.3        —              0.7408184          0.7408182

         0.4    0.6703225          0.6703200          0.6703201

         0.5    0.6065331          0.6065307          0.6065307

         0.6    0.5488138          0.5488114          0.5488116

         0.7    0.4965875          0.4965852          0.4965853

         0.8    0.4493306          0.4493287          0.4493290

         0.9    0.4065714          0.4065695          0.4065697

         1.0    0.3678807          0.3678791          0.3678794
366                                 ANSWERS TO SUPPLEMENTARY PROBLEMS



CHAPTER 20


20.15.   y' =z,z' = - y, y(G) = 1, z(0) = 0


20.16.   y' = i, i' = y + x; y(0) = 0, z(0) = - 1




20.19.               Method:      EULER'S METHOD

                     Problem:     /' + y = 0; y(0) = 1 , y'(0) = 0

             xn                   h = 0.l
                                                             True solution
                           yn                  ^n             Y(x) = cos x

             0.0         1.0000               0.0000            1.0000

             0.1         1.0000             -0.1000             0.9950

             0.2        0.9900              -0.2000             0.9801

             0.3        0.9700              -0.2990             0.9553

             0.4        0.9401              -0.3960             0.9211

             0.5        0.9005              -0.4900             0.8776

             0.6        0.8515              -0.5801             0.8253

             0.7        0.7935              -0.6652             0.7648

             0.8        0.7270              -0.7446             0.6967

             0.9        0.6525              -0.8173             0.6216

             1.0        0.5708              -0.8825             0.5403




20.20.   Since the true solution Y(x) = -x, a first-degree polynomial, Euler's method is exact and generates the true solution
         yn=-xnateachxn.
                                    ANSWERS TO SUPPLEMENTARY PROBLEMS                                                 367




20.21.              Method:       RUNGE-KUTTA METHOD

                    Problem:      /' + y = 0; y(0) = 1 , /(O) = 0

             xn                   ft = 0.1
                                                               True solution
                           yn                 •7
                                             •^n                Y(x) = cos x

             0.0       1.0000000         0.0000000               1.0000000

             0.1      0.9950042        -0.0998333                0.9950042

             0.2      0.9800666        -0.1986692                0.9800666

             0.3      0.9553365        -0.2955200                0.9553365

             0.4      0.9210611        -0.3894180                0.9210610

             0.5      0.8775827        -0.4794252                0.8775826

             0.6      0.8253359        -0.5646420                0.8253356

             0.7      0.7648425        -0.6442172                0.7648422

             0.8      0.6967071        -0.7173556                0.6967067

             0.9      0.6216105        -0.7833264                0.6216100

             1.0      0.5403030        -0.8414705                0.5403023

20.22.   Since the true solution is Y(x) = -x, a first-degree polynomial, the Runge-Kutta method is exact and generates the
         true solutiionyn=-xm ateachxn

20.23.                     Method:       ADAMS-BASHFORTH-MOULTON METHOD

                           Problem:      y" - 3y' + 2y = 0; y(0) = -1 , /(O) = 0

             xn                                      h = 0.l
                                                                                                True solution
                          pyn                PZn                  yn               •7
                                                                                   •^n         Y(x) = e2x- 2ex

             0.0           —                 —            -1.0000000           0.0000000       -1.0000000

             0.1           —                 —            -0.9889417           0.2324583       -0.9889391

             0.2           —                 —            -0.9509872           0.5408308       -0.9509808

             0.3           —                 —            -0.8776105           0.9444959       -0.8775988

             0.4      -0.7582805         1.4670793        -0.7581212           1.4674067       -0.7581085

             0.5      -0.5793682         2.1386965        -0.5791739           2.1390948       -0.5791607

             0.6      -0.3243735         2.9954802        -0.3241340           2.9959702       -0.3241207

             0.7      0.0273883          4.0822712             0.0276819       4.0828703        0.0276946

             0.8      0.5015797          5.4542298             0.5019396       5.4549628        0.5019506

             0.9      1.1299923          7.1791788             1.1304334       7.1800757         1.1304412

             1.0      1.9519493          9.3404498             1.9524898       9.3415469         1.9524924
368                                ANSWERS TO SUPPLEMENTARY PROBLEMS




20.24.                     Method:      ADAMS-BASHFORTH-MOULTON METHOD

                           Problem:    /' + y = 0; y(0) = 1 , /(O) = 0

             xn                                     ft = 0.1
                                                                                               True solution
                          pyn                PZn                  yn            •7
                                                                                •^n             Y(x) = cos x

            0.0           —                  —                 1.0000000    0.0000000          1.0000000

            0.1           —                  —                 0.9950042   -0.0998333          0.9950042

            0.2           —                  —                 0.9800666   -0.1986692          0.9800666

            0.3           —                  —                 0.9553365   -0.2955200          0.9553365

            0.4       0.9210617        -0.3894147              0.9210611   -0.3894184          0.9210610

            0.5       0.8775837        -0.4794223              0.8775827   -0.4794259          0.8775826

            0.6       0.8253371        -0.5646396              0.8253357   -0.5646431          0.8253356

            0.7       0.7648439        -0.6442153              0.7648422   -0.6442186          0.7648422

            0.8       0.6967086        -0.7173541              0.6967066   -0.7173573          0.6967067

            0.9       0.6216119        -0.7833254              0.6216096   -0.7833284          0.6216100

             1.0      0.5403043        -0.8414700              0.5403017   -0.8414727          0.5403023

20.25.   Since the true solution is Y(x) = —x, a first-degree polynomial, the Adams-Bashforth-Moulton method is exact and
         generates the true solution yn=-xn at each xn.

20.26.                            Method:        MILNE'S METHOD

                                  Problem:     y" -3y' + 2y = 0; y(0) = -1 , /(O) = 0

             xn                                     h = 0.l
                                                                                               True solution
                          pyn                PZn                  yn            •7
                                                                                •^n           Y(x) = e2x- 2ex

            0.0           —                  —           -1.0000000         0.0000000        -1.0000000

            0.1           —                  —           -0.9889417         0.2324583        -0.9889391

            0.2           —                  —           -0.9509872         0.5408308        -0.9509808

            0.3           —                  —           -0.8776105         0.9444959        -0.8775988

            0.4      -0.7582563         1.4671290        -0.7581224         1.4674042        -0.7581085

            0.5      -0.5793451         2.1387436        -0.5791820         2.1390779        -0.5791607

            0.6      -0.3243547         2.9955182        -0.3241479         2.9959412        -0.3241207

            0.7       0.0274045         4.0823034              0.0276562    4.0828171          0.0276946

            0.8       0.5015908         5.4542513              0.5019008    5.4548828          0.5019506

            0.9       1.1299955         7.1791838              1.1303739    7.1799534          1.1304412

             1.0      1.9519398         9.3404286              1.9524049    9.3413729          1.9524924
                                    ANSWERS TO SUPPLEMENTARY PROBLEMS                                    369




20.27.                             Method:        MILNE'S METHOD

                                   Problem:     /' + y = 0; y(0) = 1 , /(O) = 0

             xn                                     ft = 0.1
                                                                                         True solution
                          pyn                 PZn                 yn              7
                                                                                  ^•n     Y(x) = cos x

             0.0          —                   —                1.0000000     0.0000000   1.0000000

             0.1          —                   —                0.9950042   -0.0998333    0.9950042

             0.2          —                   —                0.9800666   -0.1986692    0.9800666

             0.3          —                   —                0.9553365   -0.2955200    0.9553365

             0.4       0.9210617       -0.3894153              0.9210611   -0.3894183    0.9210610

             0.5       0.8775835       -0.4794225              0.8775827   -0.4794254    0.8775826

             0.6       0.8253369       -0.5646395              0.8253358   -0.5646426    0.8253356

             0.7       0.7648437       -0.6442148              0.7648423   -0.6442178    0.7648422

             0.8       0.6967086       -0.7173535              0.6967069   -0.7173564    0.6967067

             0.9       0.6216120       -0.7833245              0.6216101   -0.7833272    0.6216100

             1.0       0.5403047       -0.8414690              0.5403024   -0.8414715    0.5403023




20.28.   predictors:



         correctors:


20.29.




         where
370                                ANSWERS TO SUPPLEMENTARY PROBLEMS




20.30.   Same equations as given in Problem 20.13 with the addition of




CHAPTER 21
             ANSWERS TO SUPPLEMENTARY PROBLEMS   371




CHAPTER 22
372                   ANSWERS TO SUPPLEMENTARY PROBLEMS




                                      22.47. x2/2 + x4/8




CHAPTER 23

23.20.   x3/6                         23.21.   x2


23.22.   e2x-(2x+l)

23.24.   ^-r-1

                                      23.27.   1 - cos x

23.28.   e2x-ex                       23.29.   x

23.30.   2(1 - e~*)
                                       ANSWERS TO SUPPLEMENTARY PROBLEMS                        373



23.36.   See Fig. 23-9.                                23.37.   See Fig. 23-10.




                           Fig. 23-!                                              Fig. 23-10.


23.38.    u(x)-u(x-c)                                  23.39.   See Fig. 23-11.




                                                                                  Fig. 23-11.



23.40.   See Fig. 23-12.                               23.41.




                           Fig. 23-12.
374                                 ANSWERS TO SUPPLEMENTARY PROBLEMS




                                                    23.43.   g(x) = u(x - 3)f(x - 3) if f(x) =x + 3




23.44.   g(x) = u(x - 3)f(x - 3) if f(x) =x + 4.




                                                    23.49.   u(x - 3) cos 2(x - 3)




23.52.    2u(x-2)e3(x-2)                            23.53.   SwOt-iy- 3 '*- 1 '

23.54.   u(x-2)                                     23.55.   (jc - ^)M(JC - ^)

                                                    23.57.   y(x) = -3e~x + 3e*-6x

23.58.   y(x) = e* + xe*                            23.59.   y(x) = cos jc

23.60.   y(x) = 0



CHAPTER 24

24.17.   y =e-2x                                    24.18.   y=l




24.21.   y=0                                        24.22.   y = 2e5x + xe5x




                                                    24.34.   y = smx
                                      ANSWERS TO SUPPLEMENTARY PROBLEMS                                375




                                                      24.38.   JV=5000e°-085'

                                                      24.40.   r=70e-3' + 30


24.41.   v = dae-2t + 16 (da = ca- 16)


                                                      24.44.   x = 2(l + t)e-2'


24.45.   x = -2e-4('-n)sm3t




CHAPTER 25

25.7.    u(x)=x2 + x      v(x)=x-l                    25.8.    u(x) = e2x + 2e-x    v(x) = e2x + e~x

25.9.    u(x) = 2e* + 6e~x v(x) = e* + 2e~x           25.10.   y(x) = l    z(x)=x

25.11.   y(x) = e* z(x) = ex                          25.12.   w(x) = e5x - e-x + 1
                                                               y(x) = 2eSx + e-x-l

25.13.   w(x) = cos x + sin x                         25.14.   u(x) = -if + e-x     v(x) = ex - e~x
         y(x) = cos x - sin x    z(x) = 1

25.15.   u(x) = e2x+l     v(x) = 2s2* - 1             25.16.   w(x) = x2 y(x) = x      z(x) = 1

25.17.   w(x) = sin x y(x) = — 1 + cos x
          z(x) = sin x - cos x




CHAPTER 26




26.15. x = k1 cos t + k2 sin t                        26.16.   x=0

26.17. x = -cos(t- 1) + t                             26.18.   y = k3e-' + k4e2'

                    2t
26.19.   y = e-' + e
376                                  ANSWERS TO SUPPLEMENTARY PROBLEMS




26.23.   x = elt + 2e-< y = elt + 2e-<                      26.24. x = 2e'+6e-' ;y = e' + 2e-'

26.25.   x = f - + t y = t-l                                26.26. x = k3es' + k4e-' y = 2k^est - k4e~'


                                                            26.28.   x = -et + e~' y =et-e-'


26.29. jc = -8 cos t-6 sin t + S + 6t y = 4 cos f - 2 sin f - 3




CHAPTER 27

27.26.   Ordinary point                                     27.27.   Ordinary point

27.28.   Singular point                                     27.29.   Singular point

27.30.   Singular point                                     27.31.   Singular point

27.32.   Ordinary point                                     27.33.   Singular point

27.34.   Singular point


27.35.                                             where cl = aQ — a: and c2 = a1



27.36.   RF (recurrence formula):
ANSWERS TO SUPPLEMENTARY PROBLEMS   377
378                                 ANSWERS TO SUPPLEMENTARY PROBLEMS



CHAPTER 28


28.25.   RF (recurrenceformula):




28.28.   For convenience, first multiply the differential equation by x. Then




28.31.   For convenience, first multiply the differential equation by x. Then
                                    ANSWERS TO SUPPLEMENTARY PROBLEMS                                                    379




28.34.   y =Clxin + cfm                                       28.35. y --c1x2+c22 Inx

28.36.   y = c^-m + c2x~4                                     28.37.y=c1x-1c2x2

28.38.   y = cl + c2x7


CHAPTER 29


                                                              29.10.   Hs(x) = 32X5 - 16CU3 + 12Ck




                                                              29.14.   T5(x) = 16x5- 2CU3 + 5x


                                                              29.16.   4

                                                              29.18.   H1(x) = 2x

29.19.   L\(x) = - 6x + 18; L\(x) = 4x3 - 48x2 + I44x - 96

29.20.   (a) no;   (b) yes (3 and 6);   (c) no;   (d) yes (7 and 8);   (e) yes (2 and 11)


CHAPTER 30

30.19.   1.4296                                               30.20.   2.6593

30.21. 7.1733                                                 30.22.   -0.8887

30.23. 3.0718



30.26.   First separate the k = 0 term from the series, then making the change of variables j = k — 1, and finally change the
         dummy index from j to k.
380                                   ANSWERS TO SUPPLEMENTARY PROBLEMS



CHAPTER 31

31.16.   (a) harmonic;      (b) harmonic;     (c) not harmonic;    (d) harmonic;    (e) not harmonic

31.17. x cos y +f(y), where f(y) is any differentiable function of y

31.18.   sin y +f(x), where f(x) is any differentiable function of x

31.19.   3^ + 4^+1

31.20.   x2y + x + cosh y

31.21.   — x2 + xg(y) + h(y), where g(y) and h(y) are any differentiable functions of y

31.22.   u(x, y) = x2y4 + g(x) + h(y), where g(x) is a differentiable function of x, h(y) is a differentiable function of y

31.23.   u(x, y) = — x2y + g(x) + xh(y), where g(x) is a differentiable function of x, and h(y) is a differentiable function of y

31.24.   u(x, t) = 5 sin 3x cos 3kt - 6 sin 8x cos 8kt




CHAPTER 32

32.22. y = 0


32.24. y = sin x

32.26. y = B cos x, B arbitrary                                   32.27.   No solution

32.28.   No solution                                              32.29. y = x + B cos x, B arbitrary

32.30.   'k=l,y = cle-x                                           32.31.   No eigenvalues or eigenfunctions




32.33.   A,= 1, y = c2e x (c2 arbitrary)

32.34.   Xn = -n2jf, yn = An sin rim (n = 1, 2, ...) (An arbitrary)




32.36.   Xn = n2, yn = Bn cos nx (n = 1, 2, ...) (Bn arbitrary)

32.37. Yes                                                        32.38.   No, p(x) = sin TK is zero at x = + 1, 0.

32.39.   No, p(x) = sin x is zero at x = 0.                       32.40. Yes


32.41.   No, the equation is not equivalent to (29.6).            32.42.   No, w(x) =      s not continuous at x = 0.
                                         ANSWERS TO SUPPLEMENTARY PROBLEMS                                             381




32.43.   Yes                                                     32.44.   I(x) = (?; (exy')' + xe~*y + l£~*y = 0

32.45.   I(x) = x; (xy')r + ^y = 0                               32.46.   Xn = n2; en(x) = cos nx (n = 0, 1, 2, ...)




CHAPTER 33




CHAPTER 34

34.17    (a) n;   (b) u;    (c) 7;     (d) non-linear; (e) homogeneous

34.18    (a) k;   (b) w;     (c) 1;     (d) non-linear; (e) non-homogeneous

34.19    (a) t;   (b) z',   (c) 3;     (d) linear;   (e) homogeneous

34.20    (a) m;    (b) g;    (c) 13;     (d) linear;   (e) homogeneous

34.24    k(-17)n, where k is any constant

34.25    c1(-l)" + c2(12)",                                      34.26    c1(10)" + c2w(10)",
           where cl and c2 are any constants                                 where cl and c2 are any constants


                                                                 34.28    k(2)n -n2-2n-3, where k is any constant


34.29    10(2)" - n2 - In - 3


34.31    $18,903.10
                                                                           INDEX •




Adams-Bashforth-Moulton method, 177                             Completing the square, method of, 224
  for systems, 196, 207                                         Constant coefficients, 73, 83, 89, 94, 254
Addition of matrices, 131                                       Constant matrix, 131
Amplitude, 118                                                  Convolution, 233
Analytic functions, 262                                         Cooling problems, 50
Applications:                                                   Critically damped motion, 117
  to buoyancy problems, 116
  to cooling problems, 50
  to dilution problems, 52                                      Damped motion, 117
  to electrical circuits, 52, 115                               Decay problems, 50
  to falling-body problems, 51                                  Derivative:
  of first-order equations, 50                                    of a Laplace transform, 211
  to growth and decay problems, 50                                of a matrix, 132
  to orthogonal trajectories, 53                                Difference, 325
  of second-order equations, 114                                Difference equations, 9, 325
  to spring problems, 114                                       Differential equation, 1
  to temperature problems, 50                                     Bernoulli, 42
Archimedes principle, 116                                         with boundary conditions, 2, 309
                                                                  exact, 15, 31
                                                                  homogeneous, 15, 21, 73 (See also Homogeneous
Bernoulli equation, 14, 42                                              linear differential equations)
Bessel functions, 295                                             with initial conditions, 2, 110
Bessel's equation, of order/), 296                                linear, 14, 42, 73 (See also Linear differential
  of order zero, 299                                                    equations)
Boundary conditions, 2, 309                                       order of, 1
Boundary-value problems:                                          ordinary, 1
  definition, 2, 309                                              partial, 1, 304
  Sturm-Liouville problems, 310                                   separable, 15, 21
Boyle's law, 10                                                   solution of (see Solutions of ordinary differential
Buoyancy problems, 116                                                  equations)
                                                                  systems of (see Systems of differential equations)
                                                                Differential form, 14
Cayley-Hamilton theorem, 133                                    Dilution problems, 52
Characteristic equation:                                        Direction field, 157
  for a linear differential equation, 83, 89
  of a matrix, 133
Characteristic value (see Eigenvalue)                           eA(, 140, 254
Charles' law, 12                                                Eigenfunctions, 307, 310, 318
Chebyshev's differential equation, 290                          Eigenvalues:
Chebyshev's polynomials, 291                                      for a boundary-value problem, 307, 310
Circular frequency, 118                                           of a matrix, 133
Complementary solution, 74                                        for a Sturm-Liouville problem, 310

                                                          382
Copyright © 2006, 1994, 1973 by The McGraw-Hill Companies, Inc. Click here for terms of use.
                                                        INDEX                                                       383



Electrical circuits, 52, 115                                Homogeneous boundary conditions, 309
Equilibrium point:                                          Homogeneous boundary-value problem, 309
  for a buoyant body, 116                                     Sturm-Liouville problem, 310
  for a spring, 114                                         Homogeneous difference equation, 325
Euler's constant, 300                                       Homogeneous linear differential equation, 73
Euler's equation, 287                                         characteristic equation for, 83, 89
Euler's method, 158                                           with constant coefficients, 83, 89, 254
  modified, 177                                               solution of (see Solutions of ordinary differential
  for systems, 196                                                 equations)
Euler's relations, 87                                         with variable coefficients, 262, 275
Exact differential equation, 15, 31                         Homogeneous first-order equations, 15, 22, 29
Existence of solutions:                                     Homogeneous function of degree n, 29
  of first-order equations, 19                              Hooke's law, 115
  of linear initial-value problems, 73                      Hypergeometric equation, 288
  near an ordinary point, 262                               Hypergeometric series, 288
  near a regular singular point, 275
Exponential of a matrix, 140
                                                            Ideal Gas law (see Perfect Gas law)
                                                            Identity matrix, 132
Factorial, 266, 298                                         Indicial equation, 276
Falling-body problem, 51                                    Initial conditions, 2, 148
Fibonacci numbers, 326, 327, 329                            Initial-value problems, 2
First-order differential equations:                            solutions of, 2, 21, 110, 242, 254, 264
  applications of, 50                                       Instability, numerical, 158
  Bernoulli, 14, 42                                         Integral of a matrix, 132
  differential form, 14                                     Integral equations of convolution type, 239
  exact, 15, 31                                             Integrating factors, 32
  existence and uniqueness theorem, 19                      Inverse Laplace transform, 224
   graphical methods, 157                                   Isocline, 157
  homogeneous, 15, 22, 29
  integrating factors, 32
  linear, 14, 42, 73                                        Jp(x) (see Bessel functions)
  numerical solutions of (see Numerical methods)
   separable, 15, 21
   standard form, 15
                                                            Kirchhoff's loop law, 116
   systems of (see Systems of differential equations)
Fourier cosine series, 319
Fourier sine series, 319
Free motion, 117                                            L(y), 73
Frequency, circular, 118                                    Laguerre's differential equation, 290
  natural, 118                                              Laguerre's polynomials, 291
Frobenius, method of, 275                                     Associated polynomials, 294
                                                            Laplace differential equation, 305
                                                            Laplace transforms, 211
                                                              applications to differential equations, 242
Gamma function, 295
                                                              of convolution, 233
  table of, 297
                                                              of derivatives, 242
General solution, 74 (See also Solutions of ordinary
                                                              derivatives of, 211
     differential equations)
                                                              of integrals, 212
Graphical methods for solutions, 157
                                                              inverse of, 224
Growth problems, 50
                                                              of periodic functions, 212
                                                              for systems, 249
                                                              table of, 330
Half-life, 57                                                 of the unit step function, 234
Harmonic function, 308                                      Legendre's differential equation, 269, 290
Harmonic motion, simple, 118                                Legendre's polynomials, 269, 291
Heat equation, 304                                          Limiting velocity, 52
Hermite's differential equation, 290                        Line element, 157
Hermite's polynomials, 291                                  Linear dependence of functions, 74
384                                                         INDEX



Linear difference equation, 325                                 Nontrivial solutions, 307, 310
Linear differential equations:                                  Numerical instability, 158
  applications of, 50, 114                                      Numerical methods, 176
  characteristic equation for, 83, 89                             Adams-Bashforth-Moulton method, 177, 196, 207
  with constant coefficients, 73, 83, 89, 94, 254                 Euler's method, 158, 196
  existence and uniqueness of solution of, 73                     Milne's method, 177, 207
  first-order, 14, 42                                             Modified Euler's method, 177
  general solution of, 74 (See also Solutions of ordinary         order of, 178
        differential equations)                                   Runge-Kutta method, 177, 196
  homogeneous, 73, 262                                            stability of, 158
  wth-order, 89                                                   starting values, 178
  nonhomogeneous, 73, 94, 103                                     for systems, 195
  ordinary point of, 262
  partial differential equation, 304
  regular singular point of, 275
  second-order, 83, 262, 275                                    Order:
  series solution of (see Series solutions)                       of a difference equation, 325
  singular point, 262                                             of an ordinary differential equation, 1
  solutions of, 73 (See also Solutions of ordinary                of a numerical method, 178
        differential equations)                                   of a partial differential equation, 304
  superposition of solutions of, 80                             Ordinary differential equation, 1
  systems of (see Systems of differential equations)            Ordinary point, 262
  with variable coefficients, 73, 262, 275                      Orthogonal trajectories, 53
Linear independence:                                            Orthogonality of polynomials, 291
  of functions, 74                                              Oscillatory damped motion, 117
  of solutions of a linear differential equation, 74            Overdamped motion, 117
Logistics population model, 12, 57

                                                                Partial differential equation, 1, 304
                                                                Partial fractions, method of, 224
Mathematica ®, 337
                                                                Particular solution, 74
Mathematical models, 9
                                                                Perfect Gas law, 10
Matrices, 131
                                                                Period, 118
 eA(, 140, 254
                                                                Periodic function, 212
Method of Frobenius, 275
                                                                Phase angle, 66, 118
 general solutions of, 276
                                                                Piecewise continuous function, 318
Milne's method, 177
                                                                Piecewise smooth function, 318
 for systems, 207
                                                                Power series method, 263
Modeling (see Mathematical models)
                                                                Powers of a matrix, 132
Modeling Cycle, 9, 10, 336
                                                                Predator-Prey model, 12
Modified Euler's method, 177
                                                                Predictor-corrector methods, 176
Multiplication of matrices, 132
                                                                Pure resonance, 122
Multiplicity of an eigenvalue, 133


                                                                Qualitative approach in modeling, 10
n\, 266, 298
                                                                Quasi-linear partial differential equations, 304
Natural frequency, 118
Natural length of a spring, 115
Newton's law of cooling, 50
Newton's second law of motion, 51, 115                          RC circuits, 45
Nonhomogeneous boundary conditions, 309                         RCL circuits, 115
Nonhomogeneous boundary-value problem, 309                      Recurrence formula, 263
Nonhomogeneous difference equation, 325                         Reduction to a system of differential equations, 148
Nonhomogeneous linear differential equations, 73                Regular singular point, 275
   existence of solutions, 74                                   Resonance, 122
   matrix solutions, 254                                        RL circuit, 45
   power series solutions, 263                                  Runge-Kutta method, 177
   undetermined coefficients, 94                                  for systems, 196
   variation of parameters, 103                                 Rodrigues' formula, 290
                                                      INDEX                                                385



Scalar multiplication, 132                                Standard form, 14
Second-order linear equations, 83, 262, 275               Starting values, 178
     (See also Linear differential equations)             Steady-state current, 65, 117
Separable equations, 15, 21                               Steady-state motion, 117
Separation of variables, method of                        Step size, 158
  for partial differential equations, 306                 Sturm-Liouville problems, 310, 318
Series solutions:                                         Superposition, 80
  existence theorems for, 263                             Systems of differential equations, 249
  indicial equation, 276                                    homogeneous, 254
  method of Frobenius, 275                                  in matrix notation, 148
  near an ordinary point, 263                               solutions of, 195, 249, 254
  recurrence formula, 263
  near a regular singular point, 276
  Taylor series method, 273
Simple harmonic motion, 118                               Taylor series, 163, 273
Singular point, 262                                       Temperature problems, 50
Solutions of difference equations:                        77-89 ®, 337
  general, 326                                            Transient current, 65, 117
  particular, 326                                         Transient motion, 117
Solutions of ordinary differential equations, 2, 73       Trivial solution, 307, 310
  boundary-value problems, 2, 309
  from the characteristic equation, 83, 89
  complementary, 74                                       Underdamped motion, 117
  for exact, 31                                           Undetermined coefficients, method of
  existence of (see Existence of solutions)                  for difference equations, 326
  general, 74, 276                                           for differential equations, 94
  by graphical methods, 157                               Uniqueness of solutions:
  homogeneous, 21, 74, 83, 89                               of boundary-value problems, 310
  by infinite series (see Series solutions)                 of first-order equations, 19
  for initial-value problem, 2, 73, 110                     of linear equations, 73
  by integrating factors, 32                              Unit step function, 233
  by Laplace transforms, 242
  for linear first order, 42
  linearly independent, 74
  by matrix methods, 254                                  Variable coefficients, 73, 262, 275
  by the method of Frobenius, 275                         Variables separated
  by numerical methods (see Numerical methods)              for ordinary differential equations, 15
  near an ordinary point, 262                               for partial differential equations, 305, 306
  particular, 74                                          Variation of parameters, method of, 103
  by power series, 263                                    Vectors, 131
  near a regular singular point, 275                      Vibrating springs, 114
  for separable equations, 21
  by superposition, 80
  of systems, 195, 249, 254
                                                          Wave equation, 304
  by undetermined coefficients, 94
                                                          Weight function, 291
  uniqueness of (see Uniqueness of solutions)
                                                          Wronskian, 74
  by variation of parameters, 103
Spring constant, 115
Spring problems, 114
Square matrix, 131                                        Zero factorial, 298



---
normalized_id: shared-pdf-reference-schaum-s-signals-and-systems-483
exam_code: SHARED
material_scope: schaum_s signals and systems -- 483.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Schaum_s Signals and Systems -- 483.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-schaum-s-signals-and-systems-483

           SCHAUM'S OUTLINES OF

Theory and Problems of Signals and Systems

                   Hwei P. Hsu, Ph.D.
            Professor of Electrical Engineering
             Fairleigh Dickinson University




           Start of Citation[PU]McGraw-Hill Professional[/PU][DP]1995[/DP]End of Citation
HWEI P. HSU is Professor of Electrical Engineering at Fairleigh Dickinson University. He received
his B.S. from National Taiwan University and M.S. and Ph.D. from Case Institute of Technology. He
has published several books which include Schaum's Outline of Analog and Digital Communications.

Schaum's Outline of Theory and Problems of

SIGNALS AND SYSTEMS

Copyright © 1995 by The McGraw-Hill Companies, Inc. All rights reserved. Printed in the United
States of America. Except as permitted under the Copyright Act of 1976, no part of this publication
may be reproduced or distributed in any form or by any means, or stored in a data base or retrieval
system, without the prior written permission of the publisher.

4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 BAW BAW 9 9

ISBN 0-07-030641-9

Sponsoring Editor: John Aliano
Production Supervisor: Leroy Young
Editing Supervisor: Maureen Walker

Library of Congress Cataloging-in-Publication Data

Hsu, Hwei P. (Hwei Piao), date
Schaum's outline of theory and problems of signals and systems / Hwei P. Hsu.
p. cm.—(Schaum's outline series)
Includes index.
ISBN 0-07-030641-9
1. Signal theory (Telecommunication)—Problems, exercises, etc.
I. Title.
TK5102.92.H78 1995
621.382'23—dc20                            94-44820
                                               CIP




                           Start of Citation[PU]McGraw-Hill Professional[/PU][DP]1995[/DP]End of Citation
Preface

The concepts and theory of signals and systems are needed in almost all electrical engineering fields
and in many other engineering and scientific disciplines as well. They form the foundation for further
studies in areas such as communication, signal processing, and control systems.

This book is intended to be used as a supplement to all textbooks on signals and systems or for self-
study. It may also be used as a textbook in its own right. Each topic is introduced in a chapter with
numerous solved problems. The solved problems constitute an integral part of the text.

Chapter 1 introduces the mathematical description and representation of both continuous-time and
discrete-time signals and systems. Chapter 2 develops the fundamental input-output relationship for
linear time-invariant (LTI) systems and explains the unit impulse response of the system and
convolution operation. Chapters 3 and 4 explore the transform techniques for the analysis of LTI
systems. The Laplace transform and its application to continuous-time LTI systems are considered in
Chapter 3. Chapter 4 deals with the z-transform and its application to discrete-time LTI systems. The
Fourier analysis of signals and systems is treated in Chapters 5 and 6. Chapter 5 considers the Fourier
analysis of continuous-time signals and systems, while Chapter 6 deals with discrete-time signals and
systems. The final chapter, Chapter 7, presents the state space or state variable concept and analysis
for both discrete-time and continuous-time systems. In addition, background material on matrix
analysis needed for Chapter 7 is included in Appendix A.

I am grateful to Professor Gordon Silverman of Manhattan College for his assistance, comments, and
careful review of the manuscript. I also wish to thank the staff of the McGraw-Hill Schaum Series,
especially John Aliano for his helpful comments and suggestions and Maureen Walker for her great
care in preparing this book. Last, I am indebted to my wife, Daisy, whose understanding and constant
support were necessary factors in the completion of this work.

                      HWEI P. HSU
                      MONTVILLE, NEW JERSEY



                           Start of Citation[PU]McGraw-Hill Professional[/PU][DP]1995[/DP]End of Citation
To the Student

To understand the material in this text, the reader is assumed to have a basic knowledge of calculus,
along with some knowledge of differential equations and the first circuit course in electrical
engineering.

This text covers both continuous-time and discrete-time signals and systems. If the course you are
taking covers only continuous-time signals and systems, you may study parts of Chapters 1 and 2
covering the continuous-time case, Chapters 3 and 5, and the second part of Chapter 7. If the course
you are taking covers only discrete-time signals and systems, you may study parts of Chapters 1 and 2
covering the discrete-time case, Chapters 4 and 6, and the first part of Chapter 7.

To really master a subject, a continuous interplay between skills and knowledge must take place. By
studying and reviewing many solved problems and seeing how each problem is approached and how it
is solved, you can learn the skills of solving problems easily and increase your store of necessary
knowledge. Then, to test and reinforce your learned skills, it is imperative that you work out the
supplementary problems (hints and answers are provided). I would like to emphasize that there is no
short cut to learning except by "doing."



                           Start of Citation[PU]McGraw-Hill Professional[/PU][DP]1995[/DP]End of Citation
Contents

Chapter 1. Signals and Systems                                                    1
      1.1 Introduction                                                            1
      1.2 Signals and Classification of Signals                                   1
      1.3 Basic Continuous-Time Signals                                           6
      1.4 Basic Discrete-Time Signals                                             12
      1.5 Systems and Classification of Systems                                   16
      Solved Problems                                                             19

Chapter 2. Linear Time-Invariant Systems                                          56
      2.1 Introduction                                                            56
      2.2 Response of a Continuous-Time LTI System and the Convolution Integral   56
      2.3 Properties of Continuous-Time LTI Systems                               58
      2.4 Eigenfunctions of Continuous-Time LTI Systems                           59
      2.5 Systems Described by Differential Equations                             60
      2.6 Response of a Discrete-Time LTI System and Convolution Sum              61
      2.7 Properties of Discrete-Time LTI Systems                                 63
      2.8 Eigenfunctions of Discrete-Time LTI Systems                             64
      2.9 Systems Described by Difference Equations                               65
      Solved Problems                                                             66

Chapter 3. Laplace Transform and Continuous-Time LTI Systems                      110
      3.1 Introduction                                                            110
      3.2 The Laplace Transform                                                   110
      3.3 Laplace Transforms of Some Common Signals                               114
      3.4 Properties of the Laplace Transform                                     114
      3.5 The Inverse Laplace Transform                                           119
      3.6 The System Function                                                     121
      3.7 The Unilateral Laplace Transform                                        124
      Solved Problems                                                             127

Chapter 4. The z-Transform and Discrete-Time LTI Systems                          165
      4.1 Introduction                                                            165
      4.2 The z-Transform                                                         165
      4.3 z-Transforms of Some Common Sequences                                   169
      4.4 Properties of the z-Transform                                           171
      4.5 The Inverse z-Transform                                                 173
      4.6 The System Function of Discrete-Time LTI Systems                        175
      4.7 The Unilateral z-Transform                                              177
      Solved Problems                                                             178

Chapter 5. Fourier Analysis of Continuous-Time Signals and Systems                211
      5.1 Introduction                                                            211
      5.2 Fourier Series Representation of Periodic Signals                       211
      5.3 The Fourier Transform                                                   214
      5.4 Properties of the Continuous-Time Fourier Transform                     219

                                                  vii
      5.5 The Frequency Response of Continuous-Time LTI Systems                  223
      5.6 Filtering                                                              227
      5.7 Bandwidth                                                              230
      Solved Problems                                                            231

Chapter 6. Fourier Analysis of Discrete-Time Signals and Systems                 288
      6.1 Introduction                                                           288
      6.2 Discrete Fourier Series                                                288
      6.3 The Fourier Transform                                                  291
      6.4 Properties of the Fourier Transform                                    295
      6.5 The Frequency Response of Discrete-Time LTI Systems                    300
      6.6 System Response to Sampled Continuous-Time Sinusoids                   302
      6.7 Simulation                                                             303
      6.8 The Discrete Fourier Transform                                         305
      Solved Problems                                                            308

Chapter 7. State Space Analysis                                                  365
      7.1 Introduction                                                           365
      7.2 The Concept of State                                                   365
      7.3 State Space Representation of Discrete-Time LTI Systems                366
      7.4 State Space Representation of Continuous-Time LTI Systems              368
      7.5 Solutions of State Equations for Discrete-Time LTI Systems             371
      7.6 Solutions of State Equations for Continuous-Time LTI Systems           374
      Solved Problems                                                            377

Appendix A. Review of Matrix Theory                                              428
     A.1 Matrix Notation and Operations                                          428
     A.2 Transpose and Inverse                                                   431
     A.3 Linear Independence and Rank                                            432
     A.4 Determinants                                                            433
     A.5 Eigenvalues and Eigenvectors                                            435
     A.6 Diagonalization and Similarity Transformation                           436
     A.7 Functions of a Matrix                                                   437
     A.8 Differentiation and Integration of Matrices                             444

Appendix B. Properties of Linear Time-Invariant Systems and Various Transforms   445
     B.1 Continuous-Time LTI Systems                                             445
     B.2 The Laplace Transform                                                   445
     B.3 The Fourier Transform                                                   447
     B.4 Discrete-Time LTI Systems                                               449
     B.5 The z-Transform                                                         449
     B.6 The Discrete-Time Fourier Transform                                     451
     B.7 The Discrete Fourier Transform                                          452
     B.8 Fourier Series                                                          453
     B.9 Discrete Fourier Series                                                 454

Appendix C. Review of Complex Numbers                                            455
     C.1 Representation of Complex Numbers                                       455
     C.2 Addition, Multiplication, and Division                                  456
     C.3 The Complex Conjugate                                                   456
     C.4 Powers and Roots of Complex Numbers                                     456

Appendix D. Useful Mathematical Formulas                                         458
     D.1 Summation Formulas                                                      458
     D.2 Euler's Formulas                                                        458

                                                viii
        D.3 Trigonometric Identities                     458
        D.4 Power Series Expansions                      459
        D.5 Exponential and Logarithmic Functions        459
        D.6 Some Definite Integrals                      460

Index                                                    461




                                                    ix
                                                                         Chapter 1

                              Signals and Systems
1.1 INTRODUCTION
      The concept and theory of signals and systems are needed in almost all electrical
  engineering fields and in many other engineering and scientific disciplines as well. In this
  chapter we introduce the mathematical description and representation of signals and
  systems and their classifications. We also define several important basic signals essential to
  our studies.

1.2   SIGNALS AND CLASSIFICATION OF SIGNALS
      A signal is a function representing a physical quantity or variable, and typically it
  contains information about the behavior or nature of the phenomenon. For instance, in a
  RC circuit the signal may represent the voltage across the capacitor or the current flowing
  in the resistor. Mathematically, a signal is represented as a function of an independent
  variable t. Usually t represents time. Thus, a signal is denoted by x ( t ) .

A. Continuous-Time and Discrete-Time Signals:
      A signal x(t) is a continuous-time signal if t is a continuous variable. If t is a discrete
  variable, that is, x ( t ) is defined at discrete times, then x ( t ) is a discrete-time signal. Since a
  discrete-time signal is defined at discrete times, a discrete-time signal is often identified as
  a sequence of numbers, denoted by {x,) o r x[n], where n = integer. Illustrations of a
  continuous-time signal x ( t ) and of a discrete-time signal x[n] are shown in Fig. 1-1.




                       (4                                                       (b)
       Fig. 1-1 Graphical representation of (a) continuous-time and ( 6 )discrete-time signals.

     A discrete-time signal x[n] may represent a phenomenon for which the independent
 variable is inherently discrete. For instance, the daily closing stock market average is by its
 nature a signal that evolves at discrete points in time (that is, at the close of each day). On
 the other hand a discrete-time signal x[n] may be obtained by sampling a continuous-time
                                                  1
                                   SIGNALS AND SYSTEMS                                          [CHAP. 1



  signal x(t) such as
                                    x(to), +,)'       .   7   ~ ( t , ) ., . *
  or in a shorter form as
                                     x[O], x [ l ] , ..., x [ n ] , . ..
  or                                    xo, x ~ ,. . ,x,, . . .
  where we understand that
                                         x, = x [ n ] =x(t,)
  and x,'s are called samples and the time interval between them is called the sampling
  interval. When the sampling intervals are equal (uniform sampling), then
                                     x,, = x [ n ] =x(nT,)
  where the constant T, is the sampling interval.
     A discrete-time signal x[n] can be defined in two ways:
  1. We can specify a rule for calculating the nth value of the sequence. For example,




  2. We can also explicitly list the values of the sequence. For example, the sequence
     shown in Fig. l-l(b) can be written as

                             (x,) = ( . . . , 0,0,1,2,2,1,0,1,0,2,0,0,... )
                                                              T

       We use the arrow to denote the n = 0 term. We shall use the convention that if no
       arrow is indicated, then the first term corresponds to n = 0 and all the values of the
       sequence are zero for n < 0.




                             (c,) = a(a,)          +C, = aa,                     a = constant

B. Analog and Digital Signals:
      If a continuous-time signal x(l) can take on any value in the continuous interval (a, b),
  where a may be - 03 and b may be + m, then the continuous-time signal x(t) is called an
  analog signal. If a discrete-time signal x[n] can take on only a finite number of distinct
  values, then we call this signal a digital signal.

C. Real and Complex Signals:
      A signal x(t) is a real signal if its value is a real number, and a signal x(t) is a complex
  signal if its value is a complex number. A general complex signal ~ ( t is) a function of the
CHAP. 11                            SIGNALS AND SYSTEMS


 form
                                        x ( t ) = x , ( t ) +ix2(t)
 where x,( t ) and x2( t ) are real signals and j =   m.
    Note that in Eq. (I.l)t represents either a continuous or a discrete variable.

D. Deterministic and Random Signals:
     Deterministic signals are those signals whose values are completely specified for any
 given time. Thus, a deterministic signal can be modeled by a known function of time I .
 Random signals are those signals that take random values at any given time and must be
 characterized statistically. Random signals will not be discussed in this text.

E. Even and Odd Signals:
     A signal x ( t ) or x [ n ] is referred to as an even signal if
                                            x(-t) =x(r)
                                            x[-n] =x[n]
 A signal x ( t ) or x [ n ] is referred to as an odd signal if
                                           x(-t) = -x(t)
                                          x[-n] = -x[n]
 Examples of even and odd signals are shown in Fig. 1-2.




                   (4                                                     (4
             Fig. 1-2 Examples of even signals (a and 6 ) and odd signals ( c and d l .
4                                        SlGNALS AND SYSTEMS                             [CHAP. 1



       Any signal x ( t ) or x [ n ] can be expressed as a sum of two signals, one of which is even
    and one of which is odd. That is,



    where                 x e ( t )= $ { x ( t )+ x ( - t ) ]    even part of x ( t )
                                                                                             (1.5)
                         x e [ n ]= i { x [ n ]+ x [ - n ] )     even part of x [ n ]
                          x , ( t ) = $ { x ( t )- x ( - t ) )   odd part of x ( t )
                                                                                             ( 1.6 )
                          x , [ n ] = $ { x [ n ]- x [ - n ] )   odd part of x [ n ]
        Note that the product of two even signals or of two odd signals is an even signal and
    that the product of an even signal and an odd signal is an odd signal (Prob. 1.7).

F. Periodic and Nonperiodic Signals:
       A continuous-time signal x ( t ) is said to be periodic with period T if there is a positive
    nonzero value of T for which
                                         x(t + T )= x ( t )        all t                     (1.7)
    An example of such a signal is given in Fig. 1-3(a). From Eq. (1.7) or Fig. 1-3(a) it follows
    that


    for all t and any integer m. The fundamental period T, of x ( t ) is the smallest positive
    value of T for which Eq. (1.7) holds. Note that this definition does not work for a constant




                                                         (b)
                                  Fig. 1-3 Examples of periodic signals.
CHAP. 11                          SIGNALS AND SYSTEMS                                          5


 signal x ( t ) (known as a dc signal). For a constant signal x ( t ) the fundamental period is
 undefined since x ( t ) is periodic for any choice of T (and so there is no smallest positive
 value). Any continuous-time signal which is not periodic is called a nonperiodic (or
 aperiodic ) signal.
     Periodic discrete-time signals are defined analogously. A sequence (discrete-time
 signal) x[n] is periodic with period N if there is a positive integer N for which
                                 x[n      +N] =x[n]              all n                    (1.9)
 An example of such a sequence is given in Fig. 1-3(b). From Eq. (1.9) and Fig. 1-3(b) it
 follows that


 for all n and any integer m. The fundamental period No of x[n] is the smallest positive
 integer N for which Eq. (1.9) holds. Any sequence which is not periodic is called a
 nonperiodic (or aperiodic sequence.
     Note that a sequence obtained by uniform sampling of a periodic continuous-time
 signal may not be periodic (Probs. 1.12 and 1.13). Note also that the sum of two
 continuous-time periodic signals may not be periodic but that the sum of two periodic
 sequences is always periodic (Probs. 1.14 and 1.l5).

G. Energy and Power Signals:
     Consider v(t) to be the voltage across a resistor R producing a current d t ) . The
 instantaneous power p( t ) per ohm is defined as



     Total energy E and average power P on a per-ohm basis are
                                     3:

                              E=[         i 2 ( t ) d t joules
                                    -?O




                                                      i 2 ( t ) dt watts

     For an arbitrary continuous-time signal x(t), the normalized energy content E of x ( t ) is
 defined as



 The normalized average power P of x ( t ) is defined as



 Similarly, for a discrete-time signal x[n], the normalized energy content E of x[n] is
 defined as
6                                        SIGNALS AND SYSTEMS                                 [CHAP. 1


    The normalized average power P of x[n] is defined as
                                           1
                              P = lim -
                                  N + - 2 N + 1 ,,=- N

    Based on definitions (1.14) to (1.17), the following classes of signals are defined:
    1. x(t) (or x[n]) is said to be an energy signal (or sequence) if and only if 0 < E < m, and
       so P = 0.
    2. x(t) (or x[n]) is said to be a power signal (or sequence) if and only if 0 < P < m, thus
       implying that E = m.
    3. Signals that satisfy neither property are referred to as neither energy signals nor power
       signals.
    Note that a periodic signal is a power signal if its energy content per period is finite, and
then the average power of this signal need only be calculated over a period (Prob. 1.18).

1.3 BASIC CONTINUOUS-TIME SIGNALS
A. The Unit Step Function:
        The unit step function u(t), also known as the Heaciside unit function, is defined as



    which is shown in Fig. 1-4(a). Note that it is discontinuous at t = 0 and that the value at
    t = 0 is undefined. Similarly, the shifted unit step function u(t - to) is defined as



    which is shown in Fig. 1-4(b).




                 (a)                                                          (b)
                       Fig. 1-4 ( a ) Unit step function; ( b )shifted unit step function.



B. The Unit Impulse Function:
        The unit impulse function 6(t), also known as the Dirac delta function, plays a central
    role in system analysis. Traditionally, 6(t) is often defined as the limit of a suitably chosen
    conventional function having unity area over an infinitesimal time interval as shown in
CHAP. 11                          SIGNALS AND SYSTEMS




                                               Fig. 1-5


  Fig. 1-5 and possesses the following properties:




  But an ordinary function which is everywhere 0 except at a single point must have the
  integral 0 (in the Riemann integral sense). Thus, S(t) cannot be an ordinary function and
  mathematically it is defined by


  where 4 ( t ) is any regular function continuous at t = 0.
     An alternative definition of S(t) is given by




         Note that Eq. (1.20) or (1.21) is a symbolic expression and should not be considered an
  ordinary Riemann integral. In this sense, S(t) is often called a generalized function and
  4 ( t ) is known as a testing function. A different class of testing functions will define a
  different generalized function (Prob. 1.24). Similarly, the delayed delta function 6(t - I,) is
  defined by
                                     m

                                         4 ( t ) W - to) dt = 4 P o )                      (1.22)

  where 4 ( t ) is any regular function continuous at t = to. For convenience, S(t) and 6 ( t - to)
  are depicted graphically as shown in Fig. 1-6.
                                        SIGNALS AND SYSTEMS                                     [CHAP. 1




                      (a)                                                               (b)
                Fig. 1-6 ( a ) Unit impulse function; ( b )shifted unit impulse function.


      Some additional properties of S ( t ) are



                                                  S(- t ) =S(t)
                                              x ( t ) S ( t ) = x(O)S(t)
  if x ( t ) is continuous at t = 0.
                                       x ( t ) S ( t - t o ) = x ( t o ) 6 ( t- t , )
  if x ( t ) is continuous at t = to.
       Using Eqs. (1.22) and ( 1.241, any continuous-time signal x(t can be expressec




Generalized Derivatives:
      If g( t ) is a generalized function, its nth generalized derivative g("Y t ) = dng(t )/dt " is
  defined by the following relation:




  where 4 ( t ) is a testing function which can be differentiated an arbitrary number of times
  and vanishes outside some fixed interval and @ " ' ( t ) is the nth derivative of 4(t).Thus, by
  Eqs. ( 1.28) and (1.20) the derivative of S( t ) can be defined as




  where 4 ( t ) is a testing function which is continuous at t = 0 and vanishes outside some
  fixed interval and $ ( 0 ) = d 4 ( t ) / d t l , = o . Using Eq. (1.28), the derivative of u ( t ) can be
  shown to be S ( t ) (Prob. 1.28); that is,
CHAP. 11                              SIGNALS AND SYSTEMS



  Then the unit step function u(t) can be expressed as

                                            ( t )=      S(r)di                                      (1.31)
                                                     -m

  Note that the unit step function u(t) is discontinuous at t = 0; therefore, the derivative of
  u(t) as shown in Eq. (1.30)is not the derivative of a function in the ordinary sense and
  should be considered a generalized derivative in the sense of a generalized function. From
  Eq. (1.31)we see that u(t) is undefined at t = 0 and


  by Eq. (1.21)with $(t) = 1. This result is consistent with the definition (1.18)of u(t).

C. Complex Exponential Signals:
    The complex exponential signal




Fig. 1-7 ( a ) Exponentially increasing sinusoidal signal; ( b )exponentially decreasing sinusoidal signal.
10                                   SIGNALS AND SYSTEMS                                    [CHAP. 1


  is an important example of a complex signal. Using Euler's formula, this signal can be
  defined as
                                  ~ ( t =) eiUo'= cos o,t + jsin w0t                          (1.33)
  Thus, x ( t ) is a complex signal whose real part is cos mot and imaginary part is sin o o t . An
  important property of the complex exponential signal x ( t ) in Eq. (1.32) is that it is
  periodic. The fundamental period To of x ( t ) is given by (Prob. 1.9)



  Note that x ( t ) is periodic for any value of o,.

General Complex Exponential Signals:
      Let s = a + jw be a complex number. We define x ( t ) as
                            ~ ( t =) eS' = e("+~")'= e"'(cos o t +j sin wt )                  ( 1-35)
  Then signal x ( t ) in Eq. (1.35) is known as a general complex exponential signal whose real
  part eu'cos o t and imaginary part eu'sin wt are exponentially increasing (a > 0) or
  decreasing ( a < 0) sinusoidal signals (Fig. 1-7).

Real Exponential Signals:
      Note that if s = a (a real number), then Eq. (1.35) reduces to a real exponential signal
                                               x ( t ) = em'                                  (1.36)




                                             (b)
              Fig. 1-8 Continuous-time real exponential signals. ( a ) a > 0; ( b )a < 0.
CHAP. 11                           SIGNALS AND SYSTEMS                                          11


 As illustrated in Fig. 1-8, if a > 0, then x(f ) is a growing exponential; and if a < 0, then
 x ( t ) is a decaying exponential.


D.   Sinusoidal Signals:
      A continuous-time sinusoidal signal can be expressed as


 where A is the amplitude (real), w , is the radian frequency in radians per second, and 8 is
 the phase angle in radians. The sinusoidal signal x ( t ) is shown in Fig. 1-9, and it is periodic
 with fundamental period




 The reciprocal of the fundamental period To is called the fundamental frequency fo:

                                      fo=-        h ertz (Hz)
                                            7.0

 From Eqs. (1.38) and (1.39) we have


 which is called the fundamental angular frequency. Using Euler's formula, the sinusoidal
 signal in Eq. (1.37) can be expressed as



 where "Re" denotes "real part of." We also use the notation "Im" to denote "imaginary
 part of." Then




                           Fig. 1-9 Continuous-time sinusoidal signal.
12                                  SIGNALS AND SYSTEMS                                   [CHAP. 1



1.4 BASIC DISCRETE-TIME SIGNALS
A. The Unit Step Sequence:
    T h e unit step sequence u[n] is defined as



 which is shown in Fig. 1-10(a). Note that the value of u[n] at n = 0 is defined [unlike the
 continuous-time step function u(f) at t = 01 and equals unity. Similarly, the shifted unit step
 sequence ii[n - k ] is defined as



  which is shown in Fig. 1-lO(b).




                     (a)                                                      (b)
                 Fig. 1-10 ( a ) Unit step sequence; (b) shifted unit step sequence.



B. The Unit Impulse Sequence:
     T h e unit impulse (or unit sample) sequence 6[n] is defined as



  which is shown in Fig. 1 - l l ( a ) . Similarly, the shifted unit impulse (or sample) sequence
  6[n - k ] is defined as



  which is shown in Fig. 1-1l(b).




                     (a)                                                      (b)
         Fig. 1-11 ( a ) Unit impulse (sample) sequence; (6) shifted unit impulse sequence.
CHAP. 11                            SIGNALS AND SYSTEMS                                        13


    Unlike the continuous-time unit impulse function S(f), S [ n ] is defined without mathe-
 matical complication or difficulty. From definitions (1.45) and (1.46) it is readily seen that



 which are the discrete-time counterparts of Eqs. (1.25) and (1.26), respectively. From
 definitions (1.43) to (1.46), 6 [ n ] and u [ n ] are related by
                                                                                           (1.49)

                                                                                           ( 1SO)

 which are the discrete-time counterparts of Eqs. (1.30) and (1.31), respectively.
    Using definition (1.46), any sequence x [ n ] can be expressed as



 which corresponds to Eq. (1.27) in the continuous-time signal case.

C. Complex Exponential Sequences:
     The complex exponential sequence is of the form
                                      x[n]= e ~ n ~ "
 Again, using Euler's formula, x [ n ] can be expressed as
                              x [ n ] = eJnnn= cos R o n +j sin R o n                      (1.53)
 Thus x [ n ] is a complex sequence whose real part is cos R o n and imaginary part is sin R o n .



    In order for ejn@ to be periodic with period N ( > O), R o must satisfy the following
 condition (Prob. 1.1 1):
                              no
                              =      -m        m = positive integer
                              2 r    N
 Thus the sequence eJnonis not periodic for any value of R,. It is periodic only if R , / ~ I Tis
 a rational number. Note that this property is quite different from the property that the
 continuous-time signal eJwo' is periodic for any value of o,. Thus, if R, satisfies the
 periodicity condition in Eq. (1.54), !& f 0, and N and m have no factors in common, then
 the fundamental period of the sequence x[n] in Eq. (1.52) is No given by



     Another very important distinction between the discrete-time and continuous-time
 complex exponentials is that the signals el"o' are all distinct for distinct values of w , but
 that this is not the case for the signals ejRon.
                                  SIGNALS AND SYSTEMS                                       [CHAP. 1




                                                             0


                                       0
                                               *
                        ...                                             ...
                                                                              b
                                                                              n


                                                   0
                                                         b
                                              (4
Fig. 1-12   Real exponential sequences. (a) a > 1; ( b ) 1 > a > 0; (c) 0 > a > - 1; ( d l a < - 1.
CHAP. 11                           SIGNALS AND SYSTEMS                                           15


      Consider the complex exponential sequence with frequency (R, + 2 7 k ) , where k is an
  integer:
                              e j ( i l o + 2 r r k ) n = e j R o n j2rrkn - i n o n
                                                                   e       -e        (1.56)
  since e j 2 " k n = 1. From Eq. (1.56) we see that the complex exponential sequence at
  frequency R, is the same as that at frequencies (R, f 27), (R, f 4.~1, and so on.
  Therefore, in dealing with discrete-time exponentials, we need only consider an interval of
  length 2 7 in which to choose R,. Usually, we will use the interval 0 I R, < 2 7 or the
  interval - 7 sr R, < 7 .

General Complex Exponential Sequences:
     The most general complex exponential sequence is often defined as
                                     x [ n ] = Can                                            (1.57)
 where C and a are in general complex numbers. Note that Eq. (1.52) is the special case of
 Eq. (1.57) with C = 1 and a = eJRO.




           ...
                                          a
                                              ..
                                               I



                                                    0
                                                                             ...
                     -9      -6                                6        9
                                     t                  t                                         b
             -I2
                     1               .3        o        3
                                                                       1       12         1       n




                          Ylll                              '111'
                                              (b)
           Fig. 1-13 Sinusoidal sequences. (a) x[n] = cos(rrn/6); ( b )x[n] = cos(n/2).
                                        SIGNALS AND SYSTEMS                              [CHAP. 1



Real Exponential Sequences:
         If C and a in Eq. (1.57) are both real, then x[n] is a real exponential sequence. Four
     distinct cases can be identified: a > 1 , 0 < a < 1, - 1 < a < 0, and a < - 1. These four real
     exponential sequences are shown in Fig. 1-12. Note that if a = 1, x[n] is a constant
     sequence, whereas if a = - 1, x[n] alternates in value between + C and -C.


D. Sinusoidal Sequences:
        A sinusoidal sequence can be expressed as


     If n is dimensionless, then both R, and 0 have units of radians. Two examples of
     sinusoidal sequences are shown in Fig. 1-13. As before, the sinusoidal sequence in Eq.
     (1.58) can be expressed as



     As we observed in the case of the complex exponential sequence in Eq. (1.52), the same           G.

     observations [Eqs. (1.54) and (1.5611 also hold for sinusoidal sequences. For instance, the
     sequence in Fig. 1-13(a) is periodic with fundamental period 12, but the sequence in Fig.
     l-13( b ) is not periodic.


1.5     SYSTEMS AND CLASSIFICATION OF SYSTEMS
A.     System Representation:
          A system is a mathematical model of a physical process that relates the input (or
     excitation) signal to the output (or response) signal.
          Let x and y be the input and output signals, respectively, of a system. Then the system
     is viewed as a transformation (or mapping) of x into y. This transformation is represented
     by the mathematical notation


     where T is the operator representing some well-defined rule by which x is transformed
     into y. Relationship (1.60) is depicted as shown in Fig. 1-14(a). Multiple input and/or
     output signals are possible as shown in Fig. 1-14(b). We will restrict our attention for the
     most part in this text to the single-input, single-output case.


                                                             XI

                               System
                                 T
                                           Y   --                     Sy stem
                                                                                     b




                                (a)                                     (b)
                    Fig. 1-14 System with single or multiple input and output signals.
CHAP. 11                            SIGNALS AND SYSTEMS


B. Continuous;Time and Discrete-Time Systems:
      If the input and output signals x and p are continuous-time signals, then the system is
  called a continuous-time system [Fig. I - 15(a)].If the input and output signals are discrete-time
  signals or sequences, then the system is called a discrete-time s?.stem [Fig. I - 15(h)J.




                              (a)                                     (h)
                  Fig. 1-15 ( a ) Continuous-time system; ( b )discrete-time system.




C. Systems with Memory and without Memory
     A system is said to be memoryless if the output at any time depends on only the input
 at that same time. Otherwise, the system is said to have memory. An example of a
 memoryless system is a resistor R with the input x ( t ) taken as the current and the voltage
 taken as the output y ( t ) . The input-output relationship (Ohm's law) of a resistor is


 An example of a system with memory is a capacitor C with the current as the input x( t )
 and the voltage as the output y ( 0 ; then



 A second example of a system with memory is a discrete-time system whose input and
 output sequences are related by




D. Causal and Noncausal Systems:
     A system is called causal if its output y ( t ) at an arbitrary time t = t,, depends on only
 the input x ( t ) for t It o . That is, the output of a causal system at the present time depends
 on only the present and/or past values of the input, not on its future values. Thus, in a
 causal system, it is not possible to obtain an output before an input is applied to the
 system. A system is called noncausal if it is not causal. Examples of noncausal systems are




 Note that all memoryless systems are causal, but not vice versa.
18                                    SIGNALS AND SYSTEMS                                 [CHAP. 1


E. Linear Systems and Nonlinear Systems:
         If the operator T in Eq. (1.60) satisfies the following two conditions, then T is called a
     linear operator and the system represented by a linear operator T is called a linear system:
1. Additivity:
         Given that Tx, = y , and Tx, = y,, then
                                          T{x, +x2) = y , +Y,
     for any signals x , and x2.
2. Homogeneity (or Scaling):



     for any signals x and any scalar a.
         Any system that does not satisfy Eq. (1.66) and/or Eq. (1.67) is classified as a
     nonlinear system. Equations (1.66) and ( 1.67) can be combined into a single condition as
                                    T { ~+ wI 2 ) = ~ I Y +I a 2 Y z                    (1.68)
     where a , and a, are arbitrary scalars. Equation (1.68) is known as the superposition
     property. Examples of linear systems are the resistor [Eq. (1.6111 and the capacitor [Eq.
     ( 1.62)]. Examples of nonlinear systems are
                                              y =x2                                     (1.69)
                                                y = cos x                                    (1.70)
         Note that a consequence of the homogeneity (or scaling) property [Eq. (1.6711 of linear
     systems is that a zero input yields a zero output. This follows readily by setting a = 0 in Eq.
     (1.67). This is another important property of linear systems.

F.     Time-Invariant and Time-Varying Systems:
         A system is called rime-inuariant if a time shift (delay or advance) in the input signal
     causes the same time shift in the output signal. Thus, for a continuous-time system, the
     system is time-invariant if


     for any real value of T. For a discrete-time system, the system is time-invariant (or
     shift-incariant ) if
                                       ~ { x [ -nk ] ) = y [ n - k ]                         (1.72)
     for any integer k . A system which does not satisfy Eq. (1.71) (continuous-time system) or
     Eq. (1.72) (discrete-time system) is called a time-varying system. To check a system for
     time-invariance, we can compare the shifted output with the output produced by the
     shifted input (Probs. 1.33 to 1.39).

G.     Linear Time-Invariant Systems
        If the system is linear and also time-invariant, then it is called a linear rime-invariant
     (LTI) system.
CHAP. 11                                     SIGNALS AND SYSTEMS


H. Stable Systems:
      A system is bounded-input/bounded-output (BIBO) stable if for any bounded input x
  defined by


  the corresponding output y is also bounded defined by


  where k , and k, are finite real constants. Note that there are many other definitions of
  stability. (See Chap. 7.)

I. Feedback Systems:
      A special class of systems of great importance consists of systems having feedback. In a
  feedback system, the output signal is fed back and added to the input to the system as
  shown in Fig. 1-16.




                                                        -   -



                                            Fig. 1-16 Feedback system.




                                               Solved Problems
SIGNALS AND CLASSIFICATION OF SIGNALS

1.1.   A continuous-time signal x ( t ) is shown in Fig. 1-17. Sketch and label each of the
       following signals.
       ( a ) x(t - 2); ( b ) x(2t); ( c ) x ( t / 2 ) ; ( d l x ( - t )




                                                  -2-10       1 2 3 4 5   t

                                                             Fig. 1-17
                                               SIGNALS AND SYSTEMS                  [CHAP. 1



       ( a ) x(r - 2 ) is sketched in Fig. 1-18(a).
       ( 6 ) x ( 2 0 is sketched in Fig. 1-18(b).
       ( c ) x(t/2) is sketched in Fig. 1-18(c).
       ( d ) X ( - t ) is sketched in Fig. 1-1Nd).




                          (c)

                                                             Fig. 1-18




1.2.   A discrete-time signal x [ n ] is shown in Fig. 1-19. Sketch and label each of the
       following signals.
       ( a ) x [ n - 21; ( b ) x [ 2 n ] ; ( c ) x [ - n ] ; ( d ) x [ - n   + 21




                                                                 Fig. 1-19
CHAP. 11                             SIGNALS AND SYSTEMS


      ( a ) x[n - 21 is sketched in Fig. 1-20(a).
      ( b ) x[2n] is sketched in Fig. 1-20(b).
      ( c ) x [ - n ] is sketched in Fig. 1-2Nc).
      ( d ) x [ - n + 21 is sketched in Fig. 1-2Nd).




                                                                                  (4
                                                    Fig. 1-20




13.   Given the continuous-time signal specified by

                                     x(t) =   (A - It'          -1lfll
                                                                otherwise
      determine the resultant discrete-time sequence obtained by uniform sampling of x(t)
      with a sampling interval of ( a ) 0.25 s, ( b ) 0.5 s, and (c) 1.0 s.
           It is easier to take the graphical approach for this problem. The signal x(t) is plotted in
      Fig. 1-21(a).Figures 1-21(b) to ( d l give plots of the resultant sampled sequences obtained for
      the three specified sampling intervals.
      ( a ) T, = 0.25 s. From Fig. 1-21(b) we obtain
                              x [ n ] = (. .. ,0,0.25,0.5,0.75,1,0.75,0.5,0.25,0,.     ..)
                                                                T
      ( b ) T, = 0.5 s. From Fig. 1-21(c)we obtain
                                         x [ n ] = { ...,0,0.5,1,0.5,0, . . . I
                                                                T
                                                SIGNALS AND SYSTEMS                                            [CHAP. 1




                                                                                                     (4
                                                                  Fig. 1-21



       (c)    T, = 1 s. From Fig. 1-21(d) we obtain
                                                      x [ n ] = ( . . . , O , 1,O.. . .) = S[nl




1.4.   Using the discrete-time signals x , [ n ] and x , [ n ] shown in Fig. 1-22, represent each of
       the following signals by a graph and by a sequence of numbers.
       ( a ) y J n 1 = x , [ n l + x , [ n l ; ( b ) y , [ n I = 2 x , [ n l ; ( c ) y,[nI = x J n I x J n l




                                                                  Fig. 1-22
CHAP. 11                               SIGNALS AND SYSTEMS



       ( a ) y , [ n ] is sketched in Fig. 1-23(a). From Fig. 1-23(a) we obtain




       (b) y 2 [ n ] is sketched in Fig. 1-23(b). From Fig. 1-23(b) we obtain




       (c) y J n ] is sketched in Fig. 1-23(c). From Fig. 1-23(c) we obtain




                                                    (d
                                                    Fig. 1-23




1.5.   Sketch and label the even and odd components of the signals shown in Fig. 1-24.
           Using Eqs. (1.5) and (1.6), the even and odd components of the signals shown in Fig. 1-24
       are sketched in Fig. 1-25.
                                              SIGNALS AND SYSTEMS                                             [CHAP. 1




                                                                                                (4
                                                                Fig. 1-24


1.6.   Find the even and odd components of x ( r ) = e J ' .
            Let x , ( r ) and x , ( I ) be the even and odd components of ei', respectively.

                                                         eJ' = x , ( I ) + x , ( I )

       From Eqs. ( 1 . 5 ) and ( 1 . 6 ) and using Euler's formula, we obtain

                                                  x,( I ) = $ ( e J r+ e - J ' ) = cos I

                                                  x,,(I) = f(ei'-e-j')            =jsint



       Show that the product of two even signals or of two odd signals is an even signal and
       that the product of an even and an odd signaI is an odd signal.
            Let x ( t ) = x l ( t ) x 2 ( t ) . If X J I ) and x 2 ( l ) are both even, then

                                      x ( - l ) =x,(-I)X,(-t)              =xI(I)x2(t)=x(t)

       and x ( t ) is even. If x , ( t ) and x 2 ( t ) are both odd, then

                         x(-I) =x,(-I)x,(-I)               = -x,(t)[-x2(t)]            =x1(t)x2(t)= x ( t )

       and x ( t ) is even. If x , ( t ) is even and x 2 ( f ) is odd, then



       and X ( I ) is odd. Note that in the above proof, variable I represents either a continuous or a
       discrete variable.
CHAP. 11   SIGNALS AND SYSTEMS




                    (4
                    Fig. 1-25
                                             SIGNALS AND SYSTEMS                                            [CHAP. 1



1.8.   Show that
       (a) If x(t) and x [ n ] are even, then

                                                                                                               (1.75a)

                                                                                                               ( I . 75b)

       ( b ) If x(t) and x[n] are odd, then
                                                x(0) = 0         and         x[O] = O

                                        /a
                                         -a
                                              ~ ( rdr) = 0       and           x x [ n ]= O
                                                                               k

                                                                             n= -k


       (a)   We can write



             Letting t = - A in the first integral on the right-hand side, we get



             Since x ( t ) is even, that is, x ( - A ) = x ( A ) , we have



             Hence,



             Similarly,



             Letting n = - m in the first term on the right-hand side, we get



             Since x [ n ] is even, that is, x [ - m ] = x [ m ] , we have



             Hence,



       ( 6 ) Since x ( t ) and x [ n ] are odd, that is, x( - t ) = - x ( t ) and x [ - n ] = - x [ n ] , we have
                                       X ( - 0 ) = -x(O)         and         x[-01 = -x[O]
CHAP. 11                               SIGNALS AND SYSTEMS


               Hence,



               Similarly,




               and




             in view of Eq. (1.76).

1.9.   Show that the complex exponential signal
                                            (t ) = ,j@d
       is periodic and that its fundamental period is 27r/00.
           By Eq. (1.7), x(t) will be periodic if
                                                  e i @ d t + TI = e i w d

       Since
                                              e i w ~ ( r+ T ) = e i q r e i q , T

       we must have
                                                        eimoT = 1                                  (1.78)
       If w, = 0, then x(t) = 1, which is periodic for any value of T. If o0# 0,Eq. (1.78) holds if
                                                        27T
                        ooT=m2r          or      T=m-            m = positive integer
                                                                a0

       Thus, the fundamental period To, the smallest positive T, of x(t) is given by 2 r / o o .

1.10. Show that the sinusoidal signal
                                             x ( t ) = cos(w,t             +8)
       is periodic and that its fundamental period is 27r/wo.
           The sinusoidal signal x(l) will be periodic if
                                      cos[o,(t + T) + 81 = w s ( o o t + 8)
       We note that
                            cos[w,(t + T) + 81 = cos[oot + 8 + woT] = cos(oot + 8 )
                                       SIGNALS A N D SYSTEMS                                              [CHAP. 1




                                                                 27
                          w0T=m2.rr         or        T=m-                         m = positive integer
                                                                  *o
      Thus. the fundamental period To of x ( r ) is given by 2.rr/wo.

1.11. Show that the complex exponential sequence
                                                      x [ n ] =e ~ " ~ "

      is periodic only if fl0/2.rr is a rational number.
           By Eq. (1.9), x[n] will be periodic if
                                          ,iflo("   +Nl =,in,,n,i~hp            = ,inon

      or
                                                           e i n ~ N= 1


      Equation (1.79) holds only if
                                 floN= m 2 ~                     m = positive integer
      or
                                            a0
                                            -=
                                                      m = rational number
                                                      -
                                            2.rr      N
      Thus, x[n] is periodic only if R0/27r is a rational number

1.12. Let x ( r ) be the complex exponential signal


      with radian frequency wo and fundamental period To = 2.rr/oo. Consider the
      discrete-time sequence x [ n ] obtained by uniform sampling of x ( t ) with sampling
      interval Ts.That is,
                                              x [ n ] = x ( n T , ) =eJ"unT.
      Find the condition on the value of T, so that x [ n ] is periodic.
           If x[n] is periodic with fundamental period N,,,
                                                          then
                                      ,iou(n+N,,)T,   = , i w ~ n T , , i w u N , J ' , = ejwun-l;

      Thus, we must have




                                            -T,
                                              = - - m - rational number
                                             To       No
      Thus x [ n ] is periodic if the ratio T,/T,, of the sampling interval and the fundamental period of
      x ( t ) is a rational number.
           Note that the above condition is also true for sinusoidal signals x ( t ) = cos(o,,t + 8 ) .
CHAP. 11                                    SIGNALS AND SYSTEMS


1.13. Consider the sinusoidal signal
                                                         x ( t ) = cos 15t
              Find the value of sampling interval T, such that x [ n ] = x ( n T , ) is a periodic
              sequence.
              Find the fundamental period of x [ n ] = x(nT,) if TT= 0 . 1 ~
                                                                           seconds.
              The fundamental period of x ( t ) is To = 2*rr/wo= 2 7 / 1 5 . By Eq. (1.81), x [ n ] = x ( n T s ) is
              periodic if



           where m and No are positive integers. Thus, the required value of T, is given by



              Substituting T, = 0 . 1 =~ ~ / 1 0in Eq. (1.821, we have



           Thus, x [ n ] =x(nT,) is periodic. By Eq. (1.82)



           The smallest positive integer No is obtained with m = 3. Thus, the fundamental period of
           x [ n l = x ( 0 . l ~ nis) N , = 4.


  .4. Let x , ( t ) and x , ( t ) be periodic signals with fundamental periods T, and T 2 , respec-
      tively. Under what conditions is the sum x ( t ) = x , ( t ) + x 2 ( t ) periodic, and what is the
      fundamental period of x( t ) if it is periodic?
          Since x , ( t ) and x , ( t ) are periodic with fundamental periods T I and T,, respectively, we
      have
                           x l ( t ) = x , ( t + T I )= x , ( t + m T , ) m = positive integer
                           x 2 ( t ) = x 2 ( t + T 2 )= x 2 ( f+ k T 2 )     k = positive integer
      Thus,


      In order for x ( t ) to be periodic with period T , one needs


     Thus, we must have
                                                        mT, = kT2 = T


                                                 T I-- - k=
                                                 -
                                                 rational number
                                      T2 m
     In other words, the sum of two periodic signals is periodic only if the ratio of their respective
     periods can be expressed as a rational number. Then the fundamental period is the least
                                               SIGNALS AND SYSTEMS                                [CHAP. 1


     common multiple of T, and T2, and it is given by Eq. (1.84) if the integers m and k are relative
     prime. If the ratio T,/T, is an irrational number, then the signals x,(t) and x,(t) do not have a
     common period and x(t) cannot be periodic.

1.15. Let x,[n] and x2[n] be periodic sequences with fundamental periods N , and N2,
      respectively. Under what conditions is the sum x[n] =x,[n] +x2[n] periodic, and what
      is the fundamental period of x[n] if it is periodic?
         Since x,[n] and x2[n] are periodic with fundamental periods N, and N2, respectively, we
     have
                          x I [ n ] = x I [ n + N,] =x,[n +mN,]            m = positive integer
                          x2[n] =x,[n          + N,] =x,[n + kN,]          k = positive integer
     Thus,
                                               ~ [ n =x,[n
                                                     ]     +mN,] + x 2 [ n + kN,]
     In order for x[n] to be periodic with period N, one needs
                       x[n + N ] =x,[n + N ]+ x 2 [ n + N ] = x , [ n + mN,] +x,[n + kN2]
     Thus, we must have
                                                        mN, = kN2 = N
     Since we can always find integers m and k to satisfy Eq. (1.861, it follows that the sum of two
     periodic sequences is also periodic and its fundamental period is the least common multiple of
     N, and N,.

1.16. Determine whether or not each of the following signals is periodic. If a signal is
      periodic, determine its fundamental period.
                                                         2TT
      ( a ) x ( t ) = cos                  ( b ) x(t)=sinpt
                                                                            3
                              T           TT
     ( c ) x(t)=cos-I             +sin -t                 (dl x(t)=cost+sinfit
                              3           4
     (el x ( t ) = sin2t                                  ( f ) X(t) = eiI(r/2)f- 11

     ( g ) x[n] = ej("/4)"                                ( h ) x[n]=cosfn
                              T           T                                  TT
     (i)     x[n] = cos -n
                        3
                                  + sin -n4               ( j ) x[n] = cos2 -n
                                                                             8


           x(t) is periodic with fundamental period T , = 27r/w0 = 27r.


           x(r) is periodic with fundamental period TO= 27r/o,, = 3.
                         lr          lr

                         3
                           + sin -t4 = x , ( t ) +x2(t)
     ( c ) x ( t ) = cos --I

           where x,(t) = cos(7r/3)r = cos w,t is periodic with T, = 27r/w, = 6 and x2(t) =
           s i n ( ~ / 4 ) t= sin w2t is periodic with T2 = 21r/w2 = 8. Since T,/T, = = is a rational
           number, x(t) is periodic with fundamental period To = 4T, = 3T2 = 24.
CHAP. 11                                               SIGNALS AND SYSTEMS


        ( d l x(t) = cos r + sin f i r =x,(r) +x2(r)
              where x,(t) = cos r = cos o , t is periodic with TI = 27r/01 = 27r and x2(t) = sin f i t =
              sin w2t is periodic with T2 = 27r/02 = fir. Since T,/T2 = fi is an irrational number,
              x(t) is nonperiodic.
        (e) Using the trigonometric identity sin2 0 = t(l - cos 201, we can write


             where x,(t) = $ is a dc signal with an arbitrary period and x2(t) = - $ cos2r = - I cos 0 2 t
             is periodic with T2 = 2n/w2 = 7. Thus, x(t) is periodic with fundamental period To = T.
                                                                                    7T
       ( f ) x(t) = ejt(r/2)r-    11 = e - j e j ( r / 2 ) r   = -I 'ej w d    ,
                                                                               Wo = Ir
                                                                                           L

             x(t) is periodic with fundamental period To = 27r/w0 = 4.


             Since R0/27r = $ is a rational number, x[nl is periodic, and by Eq. (1.55) the fundamen-
             tal period is No = 8.
             x[n] = cos f n = cos n o n --,R o = $
             Since n0/27r = 1 / 8 ~is not a rational number, x[n] is nonperiodic.
                          7r                T
             x[n] = cos -n
                         3
                                 + sin -n
                                       4
                                          = x,[n] + x2[n 1

             where



                                                                        7r                            7r
                                                       x2[n] = sin -n = cos f12n +0, = -
                                                                   4                   4
            Since R , / 2 ~ r= (= rational number), xl[n] is periodic with fundamental period N, = 6,
            and since R2/27r = $ ( = rational number), x2[n] is periodic with fundamental period
            N2 = 8. Thus, from the result of Prob. 1.15, x[n] is periodic and its fundamental period is
            given by the least common multiple of 6 and 8, that is, No = 24.
             Using the trigonometric identity cos28 = i ( l + cos28), we can write
                                                     T                 1       1       7    r
                                         x[n] = cost -n               =    - + - cos -n = x , [ n ] + x 2 [ n ]
                                                      8                    2       2       4
            where x,[n] = $ = $(l)" is periodic with fundamental period Nl = 1 and x2[n] =
            1
              cos(a/4)n = cos R 2 n --,Q 2 = ~ / 4 .Since R2/27r = ( = rational number), x2[n] is
            periodic with fundamental period N2 = 8. Thus, x[n] is periodic with fundamental period
            No = 8 (the least common multiple of N, and N,).

1.17. Show that if x ( t + T ) = x ( t ) , then




       for any real a,p, and a.
                                         SIGNALS AND SYSTEMS                               [CHAP. 1



            If x(t + T ) = x ( t ) , then letting t = 7 - T , we have
                                          X ( T - T + T ) = x ( r )= x ( T - T )
      and



      Next, the right-hand side of Eq. ( 1 . 8 8 )can be written as



      By E q . ( 1 . 8 7 )we have

                                               (   t   )d =   / x ( t ) dt
                                                              a+T

      Thus.




1.18. Show that if x ( t ) is periodic with fundamental period To, then the normalized average
      power P of x ( t ) defined by Eq. ( 1 . 1 5 ) is the same as the average power of x ( 0 over
      any interval of length T , , that is,



            By Eq. ( 1.15)
                                                         1
                                             P = lim - /T'2 1 x ( t ) 1' dt
                                                 T-.r: T - 7 . / 2

      Allowing the limit to be taken in a manner such that T is an integral multiple of the
      fundamental period, T = kT,, the total normalized energy content of x ( t ) over an interval of
      length T is k times the normalized energy content over one period. Then




1.19. The following equalities are used on many occasions in this text. Prove their validity.
                                       SIGNALS AND SYSTEMS




            Then
                                               N- 1
                                       aS=a    C an=a+aZ+a"                     + - .   +aN
                                               n=O

            Subtracting Eq. (1.95) from Eq. (1.941, we obtain


            Hence if a # 1, we have



            If a = 1, then by Eq. (1.94)



      ( 6 ) For la1 < 1, lim a N= 0. Then by Eq. (1.96) we obtain
                        N-m
                                  m                   N- l
                                  x
                                 n-0
                                       a n=   lim
                                              N-m n =O
                                                      x      a n=
                                                                        ]-aN
                                                                    lim -- -
                                                                    N   I   -
                                                                                          I
                                                                                         1-a

      (c)   Using Eq. (1.911, we obtain




      (d) Taking the derivative of both sides of Eq. (1.91) with respect to a,we have



            and



            Hence,




1.20. Determine whether the following signals are energy signals, power signals, or neither.
     ( a ) x(t)=e-"'u(t), a > O                (b) x(t)=Acos(w,t+8)
     (c) x ( t ) = tu(t)                       ( d l x [ n ] = ( - 0.5)"u[n]
     ( e ) x [ n l = u[nl                      (f x [ n ] = 2ej3"
                                         SIGNALS AND SYSTEMS                                 [CHAP. 1




           Thus, x ( t ) is an energy signal.
     ( b ) The sinusoidal signal x ( t ) is periodic with To = 2 7 r / o o . Then by the result from
           Prob. 1.18, the average power of x(t ) is




          Thus, x ( t ) is a power signal. Note that periodic signals are, in general, power signals.




           Thus, x ( t ) is neither an energy signal nor a power signal.
     ( d ) By definition ( 1 . 1 6 ) and using Eq. (1.91), we obtain



          Thus, x [ n l is an energy signal.
    ( e ) By definition ( 1 . 1 7 )
                                                 1       N
                             P = lim ---         C lxb1I2
                                   N+% 2 N + 1 ,=-N

                                                 1                               1
                               =    lim - 1 = lim                (N+l)=-<a
                                   N + C = 2 N + 1 ,=,     2N+ 1
                                                       ~ + m            2

           Thus, x [ n ] is a power signal.
     (f    Since I x [ n ] l = I2eiJnI = 2IeJ3"l= 2,
                                                   N                1
                                           1
                               P = lim --- C l x [ n ] 1 2 = lim -
                                   N-+= 2 N + l n = - N      N-m 2 N + 1      .= -N
                                                                                      2'

                                                     1
                                   = lim     -4 ( 2 N + 1 ) = 4 < m
                                     ~   +   2N+ 1
                                             m

           Thus, x [ n ] is a power signal.


BASIC SIGNALS

1.21. Show that
CHAP. 11                                     SIGNALS AND SYSTEMS


           Let T = - t . Then by definition (1.18)



      Since T > 0 and 7 < 0 imply, respectively, that t < 0 and r > 0, we obtain



      which is shown in Fig. 1-26.




                                                                Fig. 1-26




1.22. A continuous-time signal A t ) is shown in Fig. 1-27. Sketch and label each of the
      following signals.


     ( a ) x ( t ) u ( l - t ) ; ( b ) x ( t ) [ u ( t )- u(t - I)]; (c) x ( t ) H t -




                                                      -     1     0    1    2                  t

                                                                Fig. 1-27
     (a) By definition ( 1 . 1 9 )




           and x(r)u(l - t ) is sketched in Fig. 1-28(a).
     ( 6 ) By definitions (1.18) and (1.19)
                                                                                   O<tll
                                             u      -( t - 1 =
                                                                                   otherwise
           and x ( t ) [ u ( r )- u(t - I ) ] is sketched in Fig. 1-28(b).
                                             SIGNALS AND SYSTEMS                                     [CHAP. 1


     ( c ) By Eq. (1.26)
                                            x(t)s(t -      3) = x ( $ ) s ( t - $) = 26(t - $)
            which is sketched in Fig. 1-28(c).




                                                                 (c)
                                                               Fig. 1-28



1.23. A discrete-time signal x [ n ] is shown in Fig. 1-29. Sketch and label each of the
     following signals.
                                                  +
     ( a ) x [ n ] u [ l - n ] ; ( b ) x [ n ] ( u [ n 21 - u [ n ] } ;( c ) x [ n ] 6 [ n- 11




                                               -4-3-2-1        0    1 2 3      4   5             n
                                                               Fig. 1-29


     ( a ) By definition ( 1 . 4 4 )



            and x[n]u[l- n ] is sketched in Fig. 1-30(a).
CHAP. 11                                SIGNALS AND SYSTEMS


      ( b ) By definitions (1.43) and (1.44)
                                                                               -21n <0
                                        u [ n + 21 - u [ n ] =
                                                                               otherwise
          and x [ n ] ( u [ n+ 21 - u [ n ] )is sketched in Fig. 1-30(b).
      (c) By definition (1.48)
                                                                                           n=l
                             x [ n ] S [ n - 11 = x [ l ] S [ n- I ] = S [ n - 11 =

            which is sketched in Fig. 1-30(c).




                                                          (4
                                                           Fig. 1-30




1-24 The unit step function u ( t ) can be defined as a generalized function by the following
      relation:
                                             m


                                           1- m
                                                  + ( t ) u ( t ) dt = j w 4 ( t ) dt
                                                                        0
                                                                                                 (1.98)

     where & ( t ) is a testing function which is integrable over 0 < t < m. Using this
     definition, show that



           Rewriting Eq. (1.98) as
38                                         SIGNALS AND SYSTEMS                                         [CHAP. 1



       we obtain




       This can be true only if
                              0
                                                                k w 4 ( t ) [ l- u ( t ) ] dt = 0
                            1- 4 ( t ) u ( t )dt 0
                                  a
                                                  =       and

       These conditions imply that
                            b ( t ) u ( t )= 0 , t < 0    and   c $ ( t ) [ l- u ( t ) ] = 0 , t > 0

       Since 4 ( t ) is arbitrary, we have
                                      u(t)=O,t<O          and    1 -u(t)=O,t>O
       that is,




1.25. Verify Eqs. (1.23) and (1.24), that is,
                        1
      ( a ) 6 ( a t )= -6(t); ( b ) S ( - t ) = S ( t )
                       la1
              The proof will be based on the following equiualence property:
               Let g , ( t ) and g 2 ( t ) be generalized functions. Then the equivalence property states that
       g , ( t ) = g t ( t ) if and only if




       for all suitably defined testing functions 4 ( t ) .
       ( a ) With a change of variable, at = T , and hence t = r / a , dt = ( l / a ) d r , we obtain the
             following equations:
              If a > 0 ,




             Thus, for any a
CHAP. 11                               SIGNALS AND SYSTEMS


            Now, using Eq. (1.20) for 4(0), we obtain




            for any 4(t). Then, by the equivalence property (1.991, we obtain
                                                               1
                                                      6(at)= -6(t)
                                                             la1
      (6) Setting a = - 1 in the above equation, we obtain
                                                            1
                                              6( - t ) = - 6 ( t )          = S(t)
                                                         I - 11
            which shows that S(t) is an even function.

1.26. (a) Verify Eq. (1.26):
                                        x ( t ) 8 ( t - t o ) =x(t,)S(l - 1,)

            if x ( t ) is continuous at t = to.
      ( b ) Verify Eq. (1.25):

                                                  x ( r ) S ( t ) =x(O)S(t)
            if x ( t ) is continuous at t = 0.
      ( a ) If x ( t ) is continuous at t = t o , then by definition (1.22) we have




           for all +(t) which are continuous at t = to. Hence, by the equivalence property (1.99) we
           conclude that
                                           x ( t ) 6 ( t - t o ) = x ( t o ) 6 ( t - t,,)
     ( 6 ) Setting to = 0 in the above expression, we obtain
                                                 x ( t ) b ( t ) =x(O)S(t)


1.27. Show that
     (a) t8(t) = 0
     ( b ) sin t 8 ( r ) = 0
     (c)   COS tS(t - r)= -S(t        - T)
                                            SIGNALS AND SYSTEMS                                   [CHAP. 1




1.28. Verify Eq. (1.30):



           From Eq. (1.28)we have



      where 4 ( t ) is a testing function which is continuous at t = 0 and vanishes outside some fixed
      interval. Thus, + I ( ! ) exists and is integrable over 0 < t < rn and +(a)= 0. Then using Eq. (1.98)
      or definition (1.18),we have




      Since 4 ( t ) is arbitrary and by equivalence property (1.991, we conclude that




1.29. Show that the following properties hold for the derivative of 6 ( t ) :



      (6) t s ' ( t ) = - 6 ( r )
      ( a ) Using Eqs. (1.28) and (1.201, we have

                                      00



                                    1-4 ( 1 ) S . ( t )
                                       rn
                                                      dl = -    /-
                                                                 -
                                                                   m . ( t ) 6 ( t )dl = -4'(O)
                                                                   m


      ( b ) Using Eqs. (1.101) and (1.201, we have




             Thus, by the equivalence property (1.99)we conclude that
                                                          t6'(t) = - 6 ( t )
CHAP. 11                                    SIGNALS AND SYSTEMS



1.30. Evaluate the following integrals:




      (d)     /m e-'S(2t      - 2 ) dt
               -w



      ( a ) By Eq. (1.21),with a = - 1 and b = 1, we have




      ( b ) By Eq. ( 1 . 2 0 , with a = 1 and b = 2, we have




      (c)   By Eq. (1.22)



                                                                     = l +COST= 1 -1=0
      ( d ) Using Eqs. (1.22) and (1.23),we have

                                               - 2 ) dt = Irn
                                 m
                               /-Cts(2t                    e-'S[2(t - 1)] dt
                                                              -m




      ( e l By Eq. (1.29)




1.31. Find and sketch the first derivatives of the following signals:
      ( a ) x ( t ) = u ( t ) - u(t - a ) , a > 0
      ( b ) ~ ( t=) t [ u ( t ) - u ( t - a ) ] , a > 0


      ( a ) Using Eq. (1.301, we have
                                         u l ( t )= S ( t )    and   u l ( t- a ) = S(t - a )
                                   SIGNALS AND SYSTEMS                                              [CHAP. 1



      Then


      Signals x ( t ) and xYt) are sketched in Fig. 1-31(a).
( b ) Using the rule for differentiation of the product of two functions and the result from part
      ( a ) , we have

                              x l ( t ) = [ u ( t ) - u(l - a ) ]   + t [ 6 ( t ) - S(t - a ) ]
      But by Eqs. (1.25) and (1.26)
                          t 6 ( t ) = (O)S(t)= 0           and         t6(t - a ) = a 6 ( t - a )

      Thus,


       Signals x ( t ) and x f ( t ) are sketched in Fig. 1-31(b).
( c ) x ( t ) = sgn t can be rewritten as

                                            ~ ( t=)s g n t = u ( t ) - u ( - t )

      Then using Eq. (1.301, we obtain
                            xl(t)=ul(t) - u l ( - t ) = 6 ( t ) - [-6(t)] =2S(t)

      Signals x ( t ) and x'(t) are sketched in Fig. 1-31(c).




                                      (b)
                                                     Fig. 1-31
CHAP. 11                                  SIGNALS AND SYSTEMS



SYSTEMS AND CLASSIFICATION OF SYSTEMS

1.32. Consider the RC circuit shown in Fig. 1-32. Find the relationship between the input
     x ( t ) and the output y ( t )
            If ~ ( t=) v , ( t ) and y ( r ) = v,( t ).
            If ~ ( t =) u,(t) a n d y ( t ) = i ( t ) .
           Applying Kirchhofs voltage law to the R C circuit in Fig. 1-32, we obtain
                                                     c,(r) = R i ( r ) + ~ , ( t )                       ( 1.103)

           The current i(t ) and voltage or( t ) are related by




           Letting u,(t) = x ( t ) and u,(t) = y ( r ) and substituting Eq. (1.04) into Eq. (1.1031, we obtain

                                                   RC-
                                                              dr




           Thus, the input-output relationship of the RC circuit is described by a first-order linear
           differential equation with constant coefficients.
           Integrating Eq. (1.104), we have

                                                                   1   ,
                                                     ( t )=-  i(i)di                                     (1.106)
                                                           C -,
           Substituting Eq. (1.106) into Eq. (1.103) and letting c , ( t ) = x ( r ) and $11 = y ( t ) , we obtain




                                                          R




                                             Fig. 1-32        R C circuit.
                                       SIGNALS AND SYSTEMS                                        [CHAP. 1



             Differentiating both sides of the above equation with respect to 1, we obtain



             Thus. the input-output relationship is described by another first-order linear differential
             equation with constant coefficients.


1.33. Consider the capacitor shown in Fig. 1-33. Let input x ( t ) = i ( t ) and output y ( t ) = i ; ( t ) .
       ( a ) Find the input-output relationship.
       ( b ) Determine whether the system is (i) memoryless, (ii) causal, ( i i i ) linear, ( i ~ !time-
                                                                                                     )
             invariant, or ( L ! )stable.
       ( a ) Assume the capacitance C is constant. The output voltage y(r) across the capacitor and
             the input current x(t) are related by [Eq. (1.106)]




       (b)     ( i ) From Eq. (1.108) it is seen that the output p(r) depends on the past and the
                     present values of the input. Thus, the system is not memoryless.
              (ii) Since the output y(t) does not depend on the future values of the input, the system
                     is causal.
             (iii) Let x(r) = a , x , ( O + a 2 x 2 ( 0 .Then




                     Thus, the superposition property (1.68) is satisfied and the system is linear.
             ( i r ) Let y,(r) be the output produced by the shifted input current x,(l) = x ( l - f,,).
                     Then




                   Hence, the system is time-invariant.




                                                 Fig. 1-33
CHAP. 11                                SIGNALS AND SYSTEMS




                                              0
                                      Fig. 1-34 Unit ramp function.


            ( c ) Let x ( t ) = k l u ( t ) ,with k , # 0. Then



                  where r ( t ) = t u ( t ) is known as the unit ramp function (Fig. 1-34). Since y ( t ) grows
                  linearly in time without bound, the system is not B I B 0 stable.

1.34. Consider the system shown in Fig. 1-35. Determine whether it is (a) memoryless, ( b )
      causal, ( c ) linear, ( d ) time-invariant, or ( e ) stable.
           From Fig. 1-35 we have
                                              y ( t ) = T { x ( t ) }= x ( t ) cos w,t
           Since the value of the output y ( t ) depends on only the present values of the input x ( t ) ,
           the system is memoryless.
           Since the output y ( t ) does not depend on the future values of the input x ( t ) , the system
           is causal.
           Let x ( t ) = a , x ( t ) + a 2 x ( t ) .Then
                                   y ( t ) = T ( x ( t ) } = [ a , x l ( t )+ a 2 x 2 ( t ) ]cos w,t
                                          = a , x , ( t )cos w,t   + a 2 x 2 ( t )cos w,t
                                          = " l ~ , ( t +) f f 2 ~ 2 ( t )
           Thus, the superposition property (1.68) is satisfied and the system is linear.




                                                     Fig. 1-35
                                         SIGNALS AND SYSTEMS                                                  [CHAP. 1


      ( d l Let y , ( t ) be the output produced by the shifted input x , ( t ) = x ( t -to). Then
                                         y , ( t ) = T { x ( t- t o ) )= x ( t - t,-,)c~s wct
           But


            Hence, the system is not time-invariant.
      ( e ) Since Icos w,tl s 1, we have


           Thus, if the input x ( t ) is bounded, then the output y ( t ) is also bounded and the system is
           B I B 0 stable.

1-35. A system has the input-output relation given by
                                                           y = T { x )= x 2
      Show that this system is nonlinear.

                                    T ( x , + x 2 )= ( x , + x 2 )2 = x : +xS + 2 x , x 2
                                                         + T { x , }+ T { x , ) = x : + x 2,
      Thus, the system is nonlinear.

1.36. The discrete-time system shown in Fig. 1-36 is known as the unit delay element.
      Determine whether the system is ( a ) memoryless, ( b ) causal, ( c ) linear, ( d ) time-
      invariant, o r (e) stable.
      (a) The system input-output relation is given by


            Since the output value at n depends on the input values at n - 1, the system is not
            memoryless.
      ( b ) Since the output does not depend on the future input values, the system is causal.
      (c) Let .r[n]=cw,x,[n]+ a,x2 [ n ] .Then
                            y [ n ] = T { a , x , [ n ]+ a 2 x 2 [ n ]=) a , x , [ n - 11 + a 2 x 2 [ n- 11
                                   =~    I    Y     I   +~ a2y2[nI
                                                            I

            Thus, the superposition property (1.68) is satisfied and the system is linear.
      ( d ) Let ~ , [ nbe] the response to x , [ n ]= x [ n - n o ] . Then
                                     y I [ n ]= T ( x , [ n ] )= x , [ n - 11 = x [ n- 1 - n o ]
           and                   y [ n - n o ] = x [ n - n, - 11 = x [ n - 1 - n o ] = y , [ n ]
           Hence, the system is time-invariant.


                                             xlnl             Unit        ylnl = xln-I]
                                                             delay                  b

                                        Fig. 1-36 Unit delay element
CHAP. 11                                 SIGNALS AND SYSTEMS


      (e)   Since

                                 l y [ n ] I = l x [ n - 111 I k       if I x [ n ] l s k for all n

            the system is BIB0 stable.


1.37. Find the input-output relation of the feedback system shown in Fig. 1-37.




                               ,-+y-lT
                                     I
                                     I
                                                               Unit
                                                               delay
                                                                               I




                                                                               I
                                                                               I
                                                                                   Y@]




                                     I                                         I
                                     I                                         I




          From Fig. 1-37 the input to the unit delay element is x [ n ] - y [ n ] . Thus, the output y [ n ] of
      the unit delay element is [Eq. (1.111)l



      Rearranging, we obtain



      Thus the input-output relation of the system is described by a first-order difference equation
      with constant coefficients.


1.38. A system has the input-output relation given by



     Determine whether the system is (a) memoryless, ( b ) causal, ( c ) linear, ( d ) time-in-
     variant, or ( e ) stable.
     ( a ) Since the output value at n depends on only the input value at n , the system is
           memoryless.
     ( b ) Since the output does not depend on the future input values, the system is causal.
     (c) Let x [ n ] = a , x , [ n l + a z x , [ n ] . Then




            Thus, the superposition property (1.68) is satisfied and the system is linear.
                                          SIGNALS AND SYSTEMS                                          [CHAP. 1




         - 2 - 1 0   1   2   3   4              n                               -2-1 0   1   2   3 4       n

                                                        Fig. 1-38


      ( d ) Let y , [ n ] be the response to x l [ n ] = x [ n - n o ] . Then
                                                             n n o ] ) = n x [ n - n,]
                                             y ,[n] =~ { x [ -

            But                           ~ [ - nno ]   = ( n -n,)x[n       -no] # ~ , ( n ]
          Hence, the system is not time-invariant.
      (el Let x [ n ] = u [ n l . Then y [ n l = nu[nl. Thus, the bounded unit step sequence produces an
          output sequence that grows without bound (Fig. 1-38) and the system is not B I B 0 stable.


139. A system has the input-output relation given by


      where k,,is a positive integer. Is the system time-invariant?




      Hence, the system is not time-invariant unless k, = 1. Note that the system described by Eq.
      (1.114) is called a compressor. It creates the output sequence by selecting every koth sample of
      the input sequence. Thus, it is obvious that this system is time-varying.

1.40. Consider the system whose input-output relation is given by the linear equation
                                                          y=ax+b                                        (1.115)
      where x and y are the input and output of the system, respectively, and a and b are
      constants. Is this system linear?
           If b + 0, then the system is not linear because x = 0 implies y = b # 0. If b = 0, then the
      system is linear.

1.41. The system represented by T in Fig. 1-39 is known to be time-invariant. When the
      inputs to the system are xl[n], x,[n], and x,[n], the outputs of the system are yl[n],
      y,[n], and y , [ n ] as shown. Determine whether the system is linear.
           From Fig. 1-39 it is seen that
                                               x 3 [ n ] = x l [ n ] + x , [ n - 21
CHAP. 1)                            SIGNALS AND SYSTEMS




                                               Fig. 1-39


      Thus, if T is linear, then
                        T{xJnI) = T{x,[nl} + T(x,[n - 21) = y , [ n I + y , [ n - 21
      which is shown in Fig. 1-40. From Figs. 1-39 and 1-40 we see that
                                         y 3 b I +y,[nI + y J n - 21
      Hence, the system is not linear.




                                         - 2 - 1 0 1 2 3 4     n              -2 - 1
                                              Fig. 1-90




1.42. Give an example of a system that satisfies the condition of additivity (1.66) but not the
      condition of homogeneity ( 1.67).
                                             SIGNALS AND SYSTEMS                                                            [CHAP. 1


         Consider a discrete-time system represented by an operator T such that
                                                    y [ n ] = T ( x [ n ] )= x * [ n ]                                         (1.116)
     where x * [ n ] is the complex conjugate of x [ n ] . Then
                   T { x l [ n I + x 2 [ n I } = { x ~ [ n+I ~ 2 [ n I } =* x T [ n I + x ? [ n I = ~ l [ n +I ~ 2 [ n I
     Next, if a is any arbitrary complex-valued constant, then
                                T { a x [ n ] } = { a x [ n ] )* = cu*x*[n] = a * y [ n ] # a y [ n ]
     Thus, the system is additive but not homogeneous.

           Show that the causality for a continuous-time linear system is equivalent to the
           following statement: For any time t o and any input x ( t ) with x ( t ) = 0 for t r r,,,
           the output y ( t ) is zero for t It o .
           Find a nonlinear system that is causal but does not satisfy this condition.
           Find a nonlinear system that satisfies this condition but is not causal.
          Since the system is linear, if x ( t ) = 0 for all I , then y ( t ) = 0 for all t . Thus, if the system is
          causal, then x ( r ) = 0 for t _< t o implies that y ( t ) = 0 for 1 I I,. This is the necessary
          condition. That this condition is also sufficient is shown as follows: let x , ( t ) and x,(t) be
          two inputs of the system and let y , ( t ) and y,(t) be the corresponding outputs. If
          x , ( t ) = x , ( t ) for t I t o , or x ( r ) = x , ( t ) - x 2 ( t ) = 0 for I s t , , then y , ( t ) = y 2 ( t ) for I s t , ,
          or y ( t ) = y , ( ~ ) - y 2 ( t ) = 0for t s t,.
          Consider the system with the input-output relation
                                                               y(t) =x(t) + l
          This system is nonlinear (Prob. 1.40) and causal since the value of y ( t ) depends on only
          the present value of x ( t ) . But with x ( t ) = 0 for I II,, y ( t ) = I for t s t,.
          Consider the system with the input-output relation
                                                           y ( t ) = x ( t ) x ( t + 1)
          It is obvious that this system is nonlinear (see Prob. 1.35) and noncausal since the value of
          y ( t ) at time I depends on the value of x ( t + I ) of the input at time I + 1. Yet x ( t ) = 0 for
          t It, implies that y ( t ) = 0 for I I I,.


1.44. Let T represent a continuous-time LTI system. Then show that
                                                             T{es'} = ks'
     where s is a complex variable and h is a complex constant.
         Let y ( t ) be the output of the system with input x ( t ) = e". Then
                                                             T { e S t )= y ( t )
     Since the system is time-invariant, we have
                                                       T(es('+'(l))= y ( I + t o )
     for arbitrary real t o . Since the system is linear, we have
                                                    I IT{eS'
                                     T { ~ ~ ( ' + '=  ) ) e s ' ~ } = e " ~ T { e S ' )= e S ' ~ y ( t )

      Hence,                                            y(r +I,) = e H 0 y ( t )
CHAP. 11                               SIGNALS AND SYSTEMS


        Setting t = 0, we obtain
                                                  to) =y(0)eS1"
        Since to is arbitrary, by changing to to t,' we can rewrite Eq. (1.118) as
                                              y ( t ) = y(0)eS1= hes'
        or                                        T ( e S ' }= AeS'
        where A = ~ ( 0 ) .

1.45. Let T represent a discrete-time LTI system. Then show that
                                                  T { z n )= h z n
        where z is a complex variable and A is a complex constant.
             Let y[n]be the output of the system with input x [ n ]= z n . Then
                                                  Tbnj=ybl
        Since the system is time-invariant, we have
                                             T { z n + " ~=jy [ n + n o ]
        for arbitrary integer no. Since the system is linear, we have


        Hence,                                y [ n + n o] = z n O y [ n ]
        Setting n = 0, we obtain


        Since no is arbitrary, by changing no to n, we can rewrite Eq. (1.120) as
                                              y [ n 3 = y[O]zn= Azn
        or                                        T ( z n )= Azn
        where A = y[O].
           In mathematical language, a function x ( . ) satisfying the equation


        is called an eigenfunction (or characteristic function) of the operator T , and the constant A is
        called the eigenvalue (or characteristic value) corresponding to the eigenfunction x(.). Thus
        Eqs. (1.117) and (1.119) indicate that the complex exponential functions are eigenfunctions of
        any LTI system.




                                   Supplementary Problems
1.46.   Express the signals shown in Fig. 1-41 in terms of unit step functions.
                              t
        Ans. ( a ) x ( t ) = - [ u ( t ) - u(t - 2)1
                             2
              (6) ~ ( t=) u(t + 1) + 2u(t) - u(t - 1 ) - u(t - 2) - ~ (-t3)
                                   SIGNALS AND SYSTEMS                            [CHAP. 1




                    (4
                                             Fig. 1-41



1.47. Express the sequences shown in Fig. 1-42 in terms of unit step functions.
      Am. ( a ) x[nl=u[n]-u[n - ( N + I)]
          ( b ) x[n]= -u[-n - 11
          (c) x[nl = u[n + 21 - u[n - 41




                                                  (4
                                              Fig. 1-42
CHAP. 11                              SIGNALS AND SYSTEMS


     Determine the even and odd components of the following signals:




    Am.     (a) xe(t) = i , xo(t) = i sgn t
                          1                 1
            (b) x,(t) = -cos wot, xJt) = -sin          wot
                          fi                   fi
            (c) x,[nl = jcos n,n, xo[nl = -sin Ron
            ( d l xe[nl = S[nI, xo[nl = 0

     Let x(t) be an arbitrary signal with even and odd parts denoted by xe(t) and xo(t),
     respectively. Show that



    Hint:    Use the results from Prob. 1.7 and Eq. (1.77).

    Let x[n] be an arbitrary sequence with even and odd parts denoted by x,[nl and xo[n],
    respectively. Show that




    Hinr:   Use the results from Prob. 1.7 and Eq. (1.77).

    Determine whether or not each of the following signals is periodic. If a signal is periodic,
    determine its fundamental period.

    ( a ) x(r) = cos 2r + -
                     (      1)


                     ( 1 ("4")
    ( g ) x[nl=cos - cos -

    (h) x[n] = cos - (2+ . ( y) sln        - 2cos(?)
    Am.     ( a ) Periodic, period = .rr    ( b ) Periodic, period = .rr
            (c) Nonperiodic                 ( d l Periodic, period = 2
            (el Nonperiodic                 (f Periodic, period = 8
            ( g ) Nonperiodic               (h) Periodic, period = 16
54                                      SIGNALS AND SYSTEMS                                  [CHAP. 1



1.52.   Show that if x [ n ] is periodic with period N, then




        Hint:   See Prob. 1.17.

1.53.   ( a ) What is S(2t)?
        ( b ) What is S[2n]?
        Am.     (a) S(2t)=$(t)
                ( b ) S[2nl= S[n]

1.54.   Show that
                                                   sy -I) = - S 1 ( t )
        Hint:   Use Eqs. (1.101) and (1.99).

1.55.   Evaluate the following integrals:




        Ans.    ( a ) sin t
                ( b ) 1 for t > 0 and 0 for t < 0; not defined for t = 0
                (c) 0
                ( d ) .sr

1.56.   Consider a continuous-time system with the input-output relation



        Determine whether this system is ( a ) linear, ( b ) time-invariant, ( c ) causal.



1.57.   Consider a continuous-time system with the input-output relation



        Determine whether this system is ( a ) linear, ( b ) time-invariant.
        Am.     ( a ) Linear; ( b ) Time-varying

1.58.   Consider a discrete-time system with the input-output relation
                                              y [ n ] = T { x [ n ] )= x 2 [ n ]
        Determine whether this system is ( a ) linear, ( b ) time-invariant.
        Ans.    ( a ) Nonlinear; ( b ) Time-invariant
CHAP. 11                                     SlGNALS AND SYSTEMS                                     55


1.59.   Give an example of a system that satisfies the condition of homogeneity ( 1 . 6 7 ) but not the
        condition of additivity (1.66).
        Ans.   Consider the system described by




1.60.   Give an example of a linear time-varying system such that with a periodic input the correspond-
        ing output is not periodic.
        Ans. y [ n ] = T { x [ n ] =
                                   ) m[n]

1.61.   A system is called invertible if we can determine its input signal x uniquely by observing its
        output signal y. This is illustrated in Fig. 1-43. Determine if each of the following systems is
        invertible. If the system is invertible, give the inverse system.

                                  X                        Y                 x
                                              System
                                                                   Inverse       -
                                                                   system


                                                       Fig. 1-43




        Ans.   (a)   Invertible; x ( t ) = i y ( r )
               ( b ) Not invertible
                                          dy(0
               (c)   Invertible; x(t ) = -
                                              dt
               ( d ) Invertible; x [ n ]= y [ n ] - y[n - 11
               (el Not invertible
                                                                      Chapter 2

                     Linear Time-Invariant Systems
2.1 INTRODUCTION
      Two most important attributes of systems are linearity and time-invariance. In this
  chapter we develop the fundamental input-output relationship for systems having these
  attributes. It will be shown that the input-output relationship for LTI systems is described
  in terms of a convolution operation. The importance of the convolution operation in LTI
  systems stems from the fact that knowledge of the response of an LTI system to the unit
  impulse input allows us to find its output to any input signals. Specifying the input-output
  relationships for LTI systems by differential and difference equations will also be dis-
  cussed.


2.2     RESPONSE OF A CONTINUOUS-TIME LTI SYSTEM AND
        THE CONVOLUTION INTEGRAL
A. Impulse Response:
         The impulse response h(t) of a continuous-time LTI system (represented by T) is
     defined to be the response of the system when the input is 6(t), that is,



B.     Response to an Arbitrary Input:
         From Eq. (1.27) the input x ( t ) can be expressed as



     Since the system is linear, the response y( t of the system to an arbitrary input x( t ) can be
     expressed as




     Since the system is time-invariant, we have


     Substituting Eq. (2.4) into Eq. (2.31, we obtain
CHAP. 21                      LINEAR TIME-INVARIANT SYSTEMS                                        57


  Equation (2.5) indicates that a continuous-time LTI system is completely characterized by
  its impulse response h( t 1.

C. Convolution Integral:
     Equation (2.5) defines the convolution of two continuous-time signals x ( t ) and h ( t )
  denoted by



  Equation (2.6) is commonly called the convolution integral. Thus, we have the fundamental
  result that the output of any continuous-time LTI system is the convolution of the input x ( t )
  with the impulse response h ( t ) of the system. Figure 2-1 illustrates the definition of the
  impulse response h ( t ) and the relationship of Eq. (2.6).




                                 Fig. 2-1 Continuous-time LTl system.




D. Properties of the Convolution Integral:
      The convolution integral has the following properties.
I . Commutative:
                                          ~ ( t* h) ( t ) = h ( t )* ~ ( t )
2. Associative:
                            { x P )* h l ( 4 * h , ( t ) = x ( t )* { h l ( f *) h 2 ( 4
3. Distributive:
                        x ( t ) * { h , ( t ) )+ h N = x ( t )* h l ( t ) + x ( t )* h , ( t )

E. Convolution Integral Operation:
      Applying the commutative property (2.7) of convolution to Eq. (2.61, we obtain
                                                              00

                              ( t )= h       )* x   h ( r ) x ( t- r ) d r
                                                      )=                               (2.10)
                                                 -m
  which may at times be easier to evaluate than Eq. (2.6). From Eq. ( 2 . 6 ) we observe that
  the convolution integral operation involves the following four steps:
  1. The impulse response h ( ~ is) time-reversed (that is, reflected about the origin) to
     obtain h( - 7 ) and then shifted by t to form h ( t - r ) = h [ - ( r - t ) ]which is a function
     of T with parameter t.
  2. The signal x ( r ) and h ( t - r ) are multiplied together for all values of r with t fixed at
     some value.
58                            LINEAR TIME-INVARIANT SYSTEMS                             [CHAP. 2


     3. The product x ( ~ ) h (-
                               t T ) is integrated over all T to produce a single output value
        At).
     4. Steps 1 to 3 are repeated as I varies over - 03 to 03 to produce the entire output y( t ).
Examples of the above convolution integral operation are given in Probs. 2.4 to 2.6.

F. Step Response:
         The step response s(t) of a continuous-time LTI system (represented by T) is defined to
     be the response of the system when the input is 4 1 ) ; that is,


 In many applications, the step response d t ) is also a useful characterization of the system.
 The step response s ( t ) can be easily determined by Eq. (2.10); that is,



     Thus, the step response s(t) can be obtained by integrating the impulse response h(t).
     Differentiating Eq. (2.12) with respect to t, we get




 Thus, the impulse response h ( t ) can be determined by differentiating the step response
 dl).


2.3 PROPERTIES OF CONTINUOUS-TIME LTI SYSTEMS

A.     Systems with or without Memory:
         Since the output y(t) of a memoryless system depends on only the present input x(t),
     then, if the system is also linear and time-invariant, this relationship can only be of the
     form

                                        Y ( [ )= Kx(t)                             (2.14)
 where K is a (gain) constant. Thus, the corresponding impulse response h(f) is simply
                                             h ( t ) = K6(t)                               (2.15)

     Therefore, if h(tJ # 0 for I,, # 0, the continuous-time LTI system has memory.

B. Causality:
        As discussed in Sec. 1.5D, a causal system does not respond to an input event until that
     event actually occurs. Therefore, for a causal continuous-time LTI system, we have


     Applying the causality condition (2.16) to Eq. (2.101, the output of a causal continuous-time
CHAP. 21                    LINEAR TIME-INVARIANT SYSTEMS


  LTI system is expressed as



 Alternatively, applying the causality condition ( 2.16) to Eq. (2.61, we have

                                   y(t) =   lt- x ( r ) h ( t - T )d r
                                               w
                                                                                           (2.18)

 Equation (2.18) shows that the only values of the input x ( t ) used to evaluate the output
 y( t ) are those for r 5 t.
       Based on the causality condition (2.161, any signal x(t) is called causal if


  and is called anticausal if
                                     x(t) = 0        t>O
 Then, from Eqs. (2.17), (2. I8), and (2. Iga), when the input x ( t ) is causal, the output y(t )
 of a causal continuous-time LTI system is given by



C. Stability:
     The BIBO (bounded-input/bounded-output)stability of an LTI system (Sec. 1.5H) is
 readily ascertained from its impulse response. It can be shown (Prob. 2.13) that a
 continuous-time LTI system is BIBO stable if its impulse response is absolutely integrable,
 that is,




2.4 EIGENFUNCTIONS OF CONTINUOUS-TIME LTI SYSTEMS
     In Chap. 1 (Prob. 1.44) we saw that the eigenfunctions of continuous-time LTI systems
 represented by T are the complex exponentials eS',with s a complex variable. That is,


 where h is the eigenvalue of T associated with e"'. Setting x(t) = es' in Eq. (2.10), we have




 where

 Thus, the eigenvalue of a continuous-time LTI system associated with the eigenfunction es'
 is given by H ( s ) which is a complex constant whose value is determined by the value of s
 via Eq. (2.24). Note from Eq. (2.23) that y(0) = H ( s ) (see Prob. 1.44).
     The above results underlie the definitions of the Laplace transform and Fourier
 transform which will be discussed in Chaps. 3 and 5.
60                               LINEAR TIME-INVARIANT SYSTEMS                                  [CHAP. 2



2.5     SYSTEMS DESCRIBED BY DIFFERENTIAL EQUATIONS
A.     Linear Constant-Coefficient Differential Equations:
         A general Nth-order linear constant-coefficient differential equation is given by




  where coefficients a , and b, are real constants. The order N refers to the highest
  derivative of y ( 0 in Eq. (2.25).Such differential equations play a central role in describing
  the input-output relationships of a wide variety of electrical, mechanical, chemical, and
  biological systems. For instance, in the RC circuit considered in Prob. 1.32, the input
  x ( 0 = il,(O and the output y ( l ) = i-,.(t)are related by a first-order constant-coefficient
  differential equation [Eq. ( l . 1 0 5 ) ]




         The general solution of Eq. (2.25) for a particular input x ( t ) is given by


     where y , ( t ) is a particular solution satisfying Eq. (2.25) and y h ( t ) is a homogeneous
     solution (or complementary solution) satisfying the homogeneous differential equation




     The exact form of y h ( t )is determined by N auxiliary conditions. Note that Eq. ( 2 . 2 5 )does
     not completely specify the output y ( t ) in terms of the input x ( t ) unless auxiliary
     conditions are specified. In general, a set of auxiliary conditions are the values of




     at some point in time.

B.     Linearity:
         The system specified by Eq. (2.25) will be linear only if all of the auxiliary conditions
     are zero (see Prob. 2.21). If the auxiliary conditions are not zero, then the response y ( t ) of
     a system can be expressed as


     where yzi(O,called the zero-input response, is the response to the auxiliary conditions, and
     yz,(t), called the zero-state response, is the response of a linear system with zero auxiliary
     conditions. This is illustrated in Fig. 2-2.
           Note that y,,(t) # y h ( t ) and y,,(t) 2 y,(t) and that in general yZi(0 contains y h ( t ) and
     y,,( t ) contains both y h ( t and y,( t (see Prob. 2.20).
CHAP. 21                         LINEAR TIME-INVARIANT SYSTEMS




                                                                 Y,(O
                               Fig. 2-2 Zero-state and zero-input responses.


C. Causality:
         In order for the linear system described by Eq. (2.25) to be causal we must assume the
     condition of initial rest (or an initially relaxed condition). That is, if x( t) = 0 for t I t,,, then
     assume y(t) = 0 for t 5 to (see Prob. 1.43). Thus, the response for t > to can be calculated
     from Eq. (2.25) with the initial conditions




     where


     Clearly, at initial rest y,,(t) = 0.

D. Time-Invariance:
         For a linear causal system, initial rest also implies time-invariance (Prob. 2.22).

E. Impulse Response:
         The impulse response h(t) of the continuous-time LTI system described by Eq. (2.25)
     satisfies the differential equation




     with the initial rest condition. Examples of finding impulse responses are given in Probs.
     2.23 to 2.25. In later chapters, we will find the impulse response by using transform
     techniques.


2.6     RESPONSE OF A DISCRETE-TIME LTI SYSTEM AND CONVOLUTION SUM
A.     Impulse Response:
         The impulse response (or unit sample response) h [ n ] of a discrete-time LTI system
     (represented by T) is defined to be the response of the system when the input is 6[n], that
     is,
62                          LINEAR TIME-INVARIANT SYSTEMS                                 [CHAP. 2



B. Response to an Arbitrary Input:
     From Eq. ( 1.51) the input x [ n ] can be expressed as



 Since the system is linear, the response y [ n ] of the system to an arbitrary input x [ n ] can be
 expressed as




                                 =         x [ k ] T { S [ n- k]}

 Since the system is time-invariant, we have
                                       h [ n - k ] = T { S [ n- k ] )                        (2.33)
 Substituting Eq. (2.33) into Eq. (2.321, we obtain
                                                 x

                                     Y [ ~ I= k =C x [ k l h [ n- k l
                                                 -m


 Equation (2.34)indicates that a discrete-time LTI system is completely characterized by its
 impulse response h [ n ] .

C. Convolution Sum:
     Equation (2.34) defines the convolution of two sequences x [ n ] and h [ n ]denoted by



 Equation (2.35) is commonly called the con~~olution            sum. Thus, again, we have the
 fundamental result that the output of any discrete-time LTI system is the concolution of the
 input x [ n ] with the impulse response h [ n ] of the system.
     Figure 2-3 illustrates the definition of the impulse response h [ n ] and the relationship
 of Eq. (2.35).


                                 614
                                         ).
                                                ~n          hlnl
                                               system
                                xlnl                       v l n l = x [ n l * hlnj

                               Fig. 2-3 Discrete-time LTI system.




D. Properties of the Convolution Sum:
     The following properties of the convolution sum are analogous to the convolution
 integral properties shown in Sec. 2.3.
CHAP. 21                         LINEAR TIME-INVARIANT SYSTEMS


I . Commutative:
                                            x [ n ]* h [ n ]= h [ n ]* x [ n ]                     (2.36)
2. Associative:
                             { ~ [ n* h] , [ n ] } *h2[nl =+I        * ( h , [ n l* h , [ n I l    (2.37)
3. Distributive:
                        x [ n ]* { h , [ n ]+] h , [ n ] ]=+I     * h , [ n l + x b ]* h , [ n l   (2.38)

E. Convolution Sum Operation:
        Again, applying the commutative property (2.36) of the convolution sum to Eq. (2.351,
     we obtain



     which may at times be easier to evaluate than Eq. (2.35). Similar to the continuous-time
     case, the convolution sum [Eq. (2.391 operation involves the following four steps:
      1. The impulse response h [ k ] is time-reversed (that is, reflected about the origin) to
        obtain h [ - k ] and then shifted by n to form h [ n - k ] = h [ - ( k - n ) ] which is a
        function of k with parameter n.
     2. Two sequences x [ k ] and h [ n - k ] are multiplied together for all values of k with n
        fixed at some value.
     3. The product x [ k ] h [ n- k ] is summed over all k to produce a single output sample
        y[nI.
     4. Steps 1 to 3 are repeated as n varies over -GO to GO to produce the entire output y[n].
Examples of the above convolution sum operation are given in Probs. 2.28 and 2.30.

F. Step Response:
         The step response s [ n ]of a discrete-time LTI system with the impulse response h [ n ]is
     readily obtained from Eq. (2.39) as



     From Eq. (2.40) we have
                                             h [ n ]= s [ n ]- s [ n - l ]                         (2.41)
     Equations (2,401 and (2.41) are the discrete-time counterparts of Eqs. (2.12) and (2,131,
     respectively.


2.7     PROPERTIES OF DISCRETE-TIME LTI SYSTEMS
A.     Systems with or without Memory:
         Since the output y [ n ]of a memoryless system depends on only the present input x [ n ] ,
     then, if the system is also linear and time-invariant, this relationship can only be of the
                             LINEAR TIME-INVARIANT SYSTEMS                              [CHAP. 2


     form
                                            Y[.]
                                               =Kx[n]                              (2.42)
  where K is a (gain) constant. Thus, the corresponding impulse response is simply
                                        h [ n ]= K 6 [ n ]                         (2.43)
  Therefore, if h[n,] # 0 for n, # 0, the discrete-time LTI system has memory.

B.    Causality:
      Similar to the continuous-time case, the causality condition for a discrete-time LTI
  system is


  Applying the causality condition ( 2 . 4 4 ) to Eq. (2.391, the output of a causal discrete-time
  LTI system is expressed as
                                                   72


                                     Y[.]   =      C h [ k ] x [ n- k ]                    (2.45)
                                                k =O

  Alternatively, applying the causality condition ( 2 . 4 4 ) to Eq. (Z..V), we have



  Equation (2.46) shows that the only values of the input x[n] used to evaluate the output
  y[n] are those for k In.
     As in the continuous-time case, we say that any sequence x[n] is called causal if


  and is called anticausal if


  Then, when the input x[n] is causal, the output y[n] of a causal discrete-time LTI system
  is given by




C. Stability:
     It can be shown (Prob. 2.37) that a discrete-time LTI system is B I B 0 stable if its
  impulse response is absolutely summable, that is,




2.8    EIGENFUNCTIONS OF DISCRETE-TIME LTI SYSTEMS
      In Chap. 1 (Prob. 1.45) we saw that the eigenfunctions of discrete-time LTI systems
  represented by T are the complex exponentials z n ,with z a complex variable. That is,
                                             T(zn)= Azn                                    (2.50)
CHAP. 21                    LINEAR TIME-INVARIANT SYSTEMS                                      65


  where A is the eigenvalue of T associated with zn. Setting x[n] = z n in Eq. (2.391, we have


                                       k = -m

                           = H ( z ) z n = Azn                                             (2.51)

  where                              A =H(z) =     xrn


                                                 k = -ra
                                                             h [ k ]z P k                  (2.52)

  Thus, the eigenvalue of a discrete-time LTI system associated with the eigenfunction z n is
  given by H ( z ) which is a complex constant whose value is determined by the value of z via
  Eq. (2.52). Note from Eq. (2.51) that y[O] = H(z) (see Prob. 1.45).
      The above results underlie the definitions of the z-transform and discrete-time Fourier
  transform which will be discussed in Chaps. 4 and 6.


2.9 SYSTEMS DESCRIBED BY DIFFERENCE EQUATIONS
      The role of differential equations in describing continuous-time systems is played by
 difference equations for discrete-time systems.

A. Linear Constant-Coefficient Difference Equations:
     The discrete-time counterpart of the general differential equation (2.25) is the Nth-
  order linear constant-coefficient difference equation given by
                                 N                       M




 where coefficients a, and b, are real constants. The order N refers to the largest delay of
 y[n] in Eq. (2.53). An example of the class of linear constant-coefficient difference
 equations is given in Chap. I (Prob. 1.37). Analogous to the continuous-time case, the
 solution of Eq. (2.53) and all properties of systems, such as linearity, causality, and
 time-invariance, can be developed following an approach that directly parallels the
 discussion for differential equations. Again we emphasize that the system described by Eq.
 (2.53) will be causal and LTI if the system is initially at rest.

B. Recursive Formulation:
    An alternate and simpler approach is available for the solution of Eq. (2.53). Rear-
 ranging Eq. (2.53) in the form




 we obtain a formula to compute the output at time n in terms of the present input and the
 previous values of the input and output. From Eq. (2.54) we see that the need for auxiliary
 conditions is obvious and that to calculate y[n] starting at n = no, we must be given the
 values of y[n,, - 11, y[no - 21,. . . , y[no - N ] as well as the input x[n] for n 2 n,, - M. The
 general form of Eq. (2.54) is called a recursiue equation since it specifies a recursive
 procedure for determining the output in terms of the input and previous outputs. In the
66                                     LINEAR TIME-INVARIANT SYSTEMS                [CHAP. 2


  special case when N = 0, from Eq. (2.53)we have




  which is a nonrecursice equation since previous output values are not required to compute
  the present output. Thus, in this case, auxiliary conditions are not needed to determine
  Y ~ I .
C. Impulse Response:
      Unlike the continuous-time case, the impulse response h[n] of a discrete-time LTI
  system described by Eq. (2.53)or, equivalently, by Eq. (2.54)can be determined easily as




  For the system described by Eq. (2.55)the impulse response h[n] is given by




  Note that the impulse response for this system has finite terms; that is, it is nonzero for
  only a finite time duration. Because of this property, the system specified by Eq. (2.55) is
  known as a finite impulse response (FIR) system. On the other hand, a system whose
  impulse response is nonzero for an infinite time duration is said to be an infinite impulse
  response (IIR) system. Examples of finding impulse responses are given in Probs. 2.44 and
  2.45. In Chap. 4, we will find the impulse response by using transform techniques.




                                                   Solved Problems

RESPONSES OF A CONTINUOUS-TIME LTI SYSTEM AND CONVOLUTION

2.1.   Verify Eqs. ( 2 . 7 )and ( 2 . 8 ) ,that is,
       (a) x(t)*h(t)=h(t)*x(t)
       ( b ) ( x ( t ) *h , ( t ) J *h , ( t ) = x ( t ) * ( h , ( t ) h,(t)J
                                                                       *
       ( a ) By definition (2.6)




              By changing the variable t - T = A, we have
CHAP. 21                              LINEAR TIME-INVARIANT SYSTEMS


       ( b ) Let x ( t ) * h , ( t ) =f , ( t ) and h , ( t ) * h 2 ( t ) =f2(t). Then




              Substituting A = a - T and interchanging the order of integration, we have



              Now, since



             we have




             Thus,




2.2.   Show that




                                          I-to
       ( d ) x ( t ) * u(t - to)=
       ( a ) By definition ( 2 . 6 ) and Eq. (1.22) we have




       ( b ) By Eqs. ( 2 . 7 ) and (1.22)we have




       (c)   By Eqs. ( 2 . 6 ) and (1.19) we have




             since u(t - 7 ) =                     7<t
                                                   7>t'
                                   LINEAR TIME-INVARIANT SYSTEMS                                [CHAP. 2


       ( d l In a similar manner, we have
                                                        m

                                x ( t )* u(t - t,,) =       x ( r ) u ( t- 7 - t o ) dr =




2.3.   Let y ( r ) = x ( r ) * h ( t 1. Then show that


             By Eq. ( 2 . 6 )we have




       and

       Let r - t , = A . Then T = A + t , and Eq. (2.63b)becomes



       Comparing Eqs. ( 2 . 6 3 ~and ) (2.63~1, we see that replacing I in Eq. ( 2 . 6 3 ~by     ,
                                                                                           ) r - r - r,, we
       obtain Eq. ( 2 . 6 3 ~ )Thus,
                                .    we conclude that



2.4.   The input x ( t ) and the impulse response h ( t ) of a continuous time LTI system are
       given by


       (a) Compute the output y ( t ) by Eq. ( 2 . 6 ) .
       ( b ) Compute the output y ( t ) by Eq. (2.10).
       ( a ) By Eq. ( 2 . 6 )




             Functions X ( T ) and h(t - r ) are shown in Fig. 2-4(a)for t < 0 and t > 0. From Fig. 2-4(a)
             we see that for t < 0, x ( r ) and h(t - T ) do not overlap, while for t > 0, they overlap from
             T = 0 to T = I . Hence, for t < 0, y ( t ) = 0. For t > 0, we have




             Thus, we can write the output y ( t ) as
CHAP. 21                     LINEAR TIME-INVARIANT SYSTEMS


     ( b ) By Eq. (2.10)




           Functions h ( r ) and x(t - 7)are shown in Fig. 2-4(b) for t < 0 and t > 0. Again from Fig.
           2-4(b) we see that for t < 0, h(7)and x(t - 7 ) do not overlap, while for t > 0, they overlap
           from 7 = 0 to r = t . Hence, for t < 0, y ( t ) = 0. For t > 0, we have




           Thus, we can write the output y ( t ) as




           which is the same as Eq. (2.64).




                    (a)
                                               Fig. 2-4
70                             LINEAR TIME-INVARIANT SYSTEMS                                      [CHAP. 2



2.5.   Compute the output y(t for a continuous-time LTI system whose impulse response
       h ( t ) and the input x ( 0 are given by

           By Eq. ( 2 . 6 )
                                   y        ) ( t )* h    )=     1 x ( r ) h ( t -r ) dr
                                                                  m


                                                                  -m
       Functions ~ ( 7and) h(t - 7 ) are shown in Fig. 2-5(a) for t < 0 and t > 0. From Fig. 2-5(a) we
       see that for t < 0, X ( T ) and h(t - 7 ) overlap from 7 = - w to 7 = t , while for t > 0, they overlap
       from 7 = -01 to 7 = 0. Hence, for t < 0, we have
                                                                                      1
                              y(r) =   j'    e'Te-'V-T)   dr = e - a ' G 2 a ' d r = -eat            (2.66~)
                                        - rn                                         2a
       For t > 0, we have




                        (4
                                                      Fig. 2-5
CHAP. 21                          LINEAR TIME-INVARIANT SYSTEMS


       Combining Eqs. ( 2 . 6 6 ~and
                                  ) (2.6681, we can write y ( t ) as
                                                              1
                                                  y ( t ) = -e-uIrl     CY>O
                                                           2a
       which is shown in Fig. 2 - S b ) .


2.6.   Evaluate y ( t ) = x ( t ) * h ( t ), where x ( t ) and h ( t ) are shown in Fig. 2-6, ( a ) by an
       analytical technique, and ( b ) by a graphical method.




                        0     1       2       3       1

                                                          Fig. 2-6



       ( a ) We first express x(t and h ( t ) in functional form:



            Then, by Eq. ( 2 . 6 )we have




                                                                         O<r<t,t>O
            Since                           u ( 7 ) u ( t- 7 ) =
                                                                         otherwise

                                                                         0<7<t-2,t>2
                                      u ( r ) u ( t- 2 - 7 ) =
                                                                   (A    otherwise

                                                                         3<7<t,t>3
                                      ~ ( 7 3-) u ( t     -7)=
                                                                         otherwise

                                                                         3<~<t-2,t>5
                                  U ( T - ~ ) U ( ~ - ~ - T=)
                                                                         otherwise
                                 LINEAR TIME-INVARIANT SYSTEMS                                          [CHAP. 2


             we can express y(t ) as




                               =tu(t)   - ( t - 2)u(t - 2) - ( t - 3)u(t -3) + ( r - 5)u(t - 5 )
             which is plotted in Fig. 2-7.




                                                     Fig. 2-7



       ( b ) Functions h ( r ) , X ( T ) and h(t - 71, x ( r ) h ( t - 7 ) for different values of t are sketched in
             Fig. 2-8. From Fig. 2-8 we see that x ( r ) and h(t - 7 ) do not overlap for t < 0 and t > 5,
             and hence y ( t ) = 0 for t < 0 and t > 5. For the other intervals, x ( r ) and h(t - T ) overlap.
             Thus, computing the area under the rectangular pulses for these intervals, we obtain




             which is plotted in Fig. 2-9.


2.7.   Let h ( t ) be the triangular pulse shown in Fig. 2-10(a) and let x ( t ) be the unit impulse
       train [Fig. 2-10(b)] expressed as




       Determine and sketch y ( t ) = h ( t )* x( t ) for the following values of T: ( a ) T = 3, ( b )
       T = 2, ( c ) T = 1.5.
CHAP. 21                LINEAR TIME-INVARIANT SYSTEMS




  -2   -1   0   1   2    3   1     4   S   t    6   r

                             1-2
                                               Fig. 2-8
                       LINEAR TIME-INVARIANT SYSTEMS                             [CHAP. 2




                  -    1    0    1    2       3    4    5   6         I

                                            Fig. 2-9




                                                                (b)
                                            Fig. 2-10


    Using Eqs. (2.59) and (2.91, we obtain




( a ) For T = 3, Eq. (2.69) becomes




      which is sketched in Fig. 2-1 l(ah
( b ) For T = 2, Eq. (2.69) becomes




      which is sketched in Fig. 2-1 1(b).
( c ) For T = 1.5, Eq. (2.69) becomes




     which is sketched in Fig. 2-ll(c). Note that when T < 2 , the triangular pulses are no
     longer separated and they overlap.
CHAP. 21                     LINEAR TIME-INVARIANT SYSTEMS




                                                      (c)
                                                 Fig. 2-11


2.8.   If x , ( t ) and x 2 ( t ) are both periodic signals with a common period To, the convolution
       of x ,( t ) and x 2 ( t ) does not converge. In this case, we define the periodic conaolution
       of x , ( t ) and x 2 ( t ) as



       ( a ) Show that f ( t ) is periodic with period To.
       ( b ) Show that

                                      f ( t )=   la'T 0 x , ( ( l x 2 ( t- d~
                                                  a
                                                                      7)                     (2.71)

             for any a .
       ( c ) Compute and sketch the periodic convolution of the square-wave signal x ( t )
             shown in Fig. 2-12 with itself.
                  LINEAR TIME-INVARIANT SYSTEMS            [CHAP. 2




                        To   31   0       3       To   I


                                      Fig. 2-12




lit   0   r   9    70             7
              2




                                         (b)
                                      Fig. 2-13
CHAP. 21                             LINEAR TIME-INVARIANT SYSTEMS



       ( a ) Since x 2 ( t )is periodic with period To, we have
                                                   x 2 ( t + To - 7 ) = x Z ( t- T )
              Then from Eq. (2.70)we have




             Thus, f ( t ) is periodic with period To.
       ( b ) Since both x l ( r ) and x , ( i ) are periodic with the same period To,x1(7)x2(t- T ) is also
             periodic with period To. Then using property (1.88) (Prob. 1.17), we obtain



              for an arbitrary a.
       (c)    We evaluate the periodic convolution graphically. Signals x ( r ) , x(t - T ) , and x ( r ) x ( t - T )
              are sketched in Fig. 2-13(a), from which we obtain


                      f(t)=    I!&       - To)

              which is plotted in Fig. 2-13(b).
                                                                0 < t 5 T0/2
                                                                T0/2 < t ITo
                                                                                    and   f ( t + T o ) =f ( t )




PROPERTIES OF CONTINUOUS-TIME LTI SYSTEMS

2.9.   T h e signals in Figs. 2-14(a) and ( b ) are the input x ( t ) and the output y ( t ) , respec-
       tively, of a certain continuous-time LTI system. Sketch the output t o the following
       inputs: ( a ) x ( t - 2); ( b ) i x ( t ) .
       ( a ) Since the system is time-invariant, the output will be y(t - 2) which is sketched in Fig.
             2-14(~).
       ( b ) Since the system is linear, the output will be fy(t) which is sketched in Fig. 2-14(d).

2.10. Consider a continuous-time LTI system whose step response is given by
                                                       s ( t )=ebru(t)
       Determine and sketch the output of this system to the input x ( t ) shown in Fig.
       2-15(a).
             From Fig. 2-15(a) the input x ( t ) can be expressed as
                                               x ( t ) = u ( t - 1) - u ( t - 3 )
       Since the system is linear and time-invariant, the output y ( t ) is given by
                                        y(t)=s(t-1)-s(t-3)
                                             =e - ( l - l)u(t                   -3)
                                                                 - 1 ) - e-(+3u(t

       which is sketched in Fig. 2-15(b).
                            LINEAR TIME-INVARIANT SYSTEMS                      [CHAP. 2




                                                                    (4
                                            Fig. 2-14




                                                                         (b)
                                            Fig. 2-15



2.11. Consider a continuous-time LTI system described by (see Prob. 1.56)




     (a)   Find and sketch the impulse response h ( t ) of the system.
     ( b ) Is this system causal?
     (a)   Equation (2.72) can be rewritten as
CHAP. 21                        LINEAR TIME-INVARIANT SYSTEMS


             Using Eqs. (2.61) and ( 2 . 9 ) , Eq. (2.73) can be expressed as




            Thus, we obtain

                                                                                   - T / 2 < t r T/2   ( 2.75)
                                           f)- u ( ~ -f)] 0
                       h ( t ) = :T[ ~ ( t +
                                                               =                   otherwise
             which is sketched in Fig. 2-16.
       ( b ) From Fig. 2-16 or Eq. (2.75) we see that h ( t ) # 0 for t < 0. Hence, the system is not
             causal.




                                         -Tn          0            rn          t

                                                  Fig. 2-16




2.12. Let y ( t ) be the output of a continuous-time LTI system with input x ( t ) . Find the
      output of the system if the input is x l ( t ) , where x l ( t ) is the first derivative of x ( t ) .
           From Eq. (2.10)



       Differentiating both sides of the above convolution integral with respect to 1 , we obtain




      which indicates that y l ( t ) is the output of the system when the input is x l ( t ) .

2.13. Verify the B I B 0 stability condition [Eq. (2.21)] for continuous-time LTI systems.
           Assume that the input x ( t ) of a continuous-time LTI system is bounded, that is,
                                               Ix(t)ll k,          all t                               (2.77)
80                             LINEAR TIME-INVARIANT SYSTEMS                                        [CHAP.2


      Then, using Eq. (2.10),we have




      since lx(t - 711 1 k, from Eq. (2.77). Therefore, if the impulse response is absolutely inte-
      grable, that is,



      then l y ( t )Is k , K = k, and the system is BIBO stable.

2.14. The system shown in Fig. 2-17(a) is formed by connecting two systems in cascade. The
      impulse responses of the systems are given by h , ( t ) and h 2 ( 0 , respectively, and
                                  h , ( t ) =e-2'u(t)             h,(t) = 2e-'u(t)
      ( a ) Find the impulse response h ( t ) of the overall system shown in Fig. 2-17(b).
      ( b ) Determine if the overall system is BIBO stable.




                                                      (b)
                                                   Fig. 2-17

      ( a ) Let w ( t ) be the output of the first system. By Eq. ( 2 . 6 )

                                                    ~ ( t= )~ ( t* h
                                                                   ) ,(t)                             (2.78)
           Then we have
                                  ~ ( t=)w ( t ) * h 2 ( t ) = [ x ( O* h,( t ) ] * h2( t )   (2.79)
           But by the associativity property of convolution (2.81, Eq. (2.79)can be rewritten as
                                     ~ ( t =)x ( t ) * [ h l ( t ) * h 2 ( t ) ]= ~ ( t ) * h ( O     (2.80)
           Therefore, the impulse response of the overall system is given by
                                               h ( t ) = h d t )*h2(t)                                (2.81)
           Thus, with the given h ,( t ) and h2(t), we have
CHAP . 21                     LINEAR TIME-INVARIANT SYSTEMS



      ( 6 ) Using the above h( t ), we have



                                           =2(1-+)=I                <a:

            Thus, the system is B I B 0 stable.


EIGENFUNCTIONS OF CONTINUOUS-TIME LTI SYSTEMS

2.15. Consider a continuous-time LTI system with the input-output relation given by

                                              y(t)=      1'-03
                                                                 e - ( ' - ' ' x ( r ) dr              (2.82)

      (a)   Find the impulse response h(t) of this system.
      ( b ) Show that the complex exponential function e"' is an eigenfunction of the system.
      ( c ) Find the eigenvalue of the system corresponding to eS' by using the impulse
            response h(t) obtained in part ( a ) .
      (a)   From Eq. (2.821, definition (2.1), and Eq. (1.21)we get

                            h ( f) =   /' e - ( 1 - T ) 6 ( 7 )d 7 e - ( ' - ' ) I 7 =0 - e
                                        -m
                                                                     =                      -   t >O

            Thus,                                         h(t)=e - ' ~ ( 1 )                           ( 2.83)
      ( 6 ) Let x ( f) = e". Then




            Thus, by definition (2.22) e" is the eigenfunction of the system and the associated
            eigenvalue is



      (c) Using Eqs. (2.24) and (2.83),the eigenvalue associated with e"' is given by




            which is the same as Eq. (2.85).


2.16. Consider the continuous-time LTI system described by
                              LINEAR TIME-INVARIANT SYSTEMS                                       [CHAP. 2



      ( a ) Find the eigenvalue of the system corresponding to the eigenfunction es'.
      ( b ) Repeat part ( a ) by using the impulse function h ( t ) of the system.
      ( a ) Substituting x ( r ) = e" in Eq. (2.861, we obtain




           Thus, the eigenvalue of the system corresponding to eS' is



      ( b ) From Eq. (2.75) in Prob. 2.1 1 we have

                               A
                      h ( t ) = T [u(t+    ): -   u(l -   :)I        =   (:IT
                                                                                     -T/2<tsT/2
                                                                                     otherwise
           Using Eq. (2.241, the eigenvalue H(s) corresponding to eS' is given by



           which is the same as Eq. (2.87).

2.17. Consider a stable continuous-time LTI system with impulse response h ( t ) that is real
      and even. Show that cos w t and sin w t are eigenfunctions of this system with the same
      real eigenvalue.
          By setting s = jw in Eqs. (2.23) and (2.241, we see that eJ"' is an eigenfunction of a
      continuous-time LTI system and the corresponding eigenvalue is

                                           A = H( jw) =   )- h ( r ) e-"'dr
                                                                Z
                                                                                                     (2.88)

      Since the system is stable, that is,




      since le-j"'J = 1. Thus, H( jw) converges for any w. Using Euler's formula, we have

                        H(jw) = /-?(r) e ' ~ " ' d i = jWh ( r ) ( c o so r - j sin w r ) dr
                                     Ti


                                                                -x
                                                                     w
                                               cos wr dr - j
                                = j::(r)
                                                                I-. h ( r )sin o r d r
      Since cos o r is an even function of r and sin o r is an odd function of 7 , and if h ( t ) is real and
      even, then h(r)coso r is even and h ( r )sin wr is odd. Then by Eqs. ( 1 . 7 5 ~ and) (1.77), Eq.
      (2.89 becomes
                                                          m
                                            H( jo) = 2/ h ( r )cos o r d r                           (2.90)
                                                          0
CHAP. 21                     LINEAR TIME-INVARIANT SYSTEMS                                               83


      Since cos w r is an even function of w, changing w to - w in Eq. (2.90) and changing j to - j in
      Eq. (2.891, we have
                                                                   m
                               H ( - j w ) = H ( jw)* = 2 / h ( r ) COS(- o r ) d r
                                                                   0

                                            = 2 j r n h ( r )cos o r d r = H ( j w )
                                                 0
      Thus, we see that the eigenvalue H ( j w ) corresponding to the eigenfunction el"' is real. Let the
      system be represented by T . Then by Eqs. (2.231, (2.241, and (2.91) we have
                                   T ( e j U ' }= H ( j w ) e'"'                                    (2.92~)
                                  T [ ~ - J " '=} H ( - j w ) e-J"'    = H ( j o ) e-I"'            ( 2.92b)
      Now, since T is linear, we get
                          T[COSo t } = T{;(ej"'      + e-'"I ) } = ; T ( ~ J ~+ ': }T ( ~ - J "1'
                                       = ~ ( j ~ ) { ; ( ~+ je -"J w' r ) } = ~ ( j w ) c o wt
                                                                                            s       (2.93~)




      Thus, from Eqs. ( 2 . 9 3 ~and
                                 ) (2.93b) we see that cos wt and sin wt are the eigenfunctions of the
      system with the same real eigenvalue H ( j o ) given by Eq. (2.88) or (2.90).


SYSTEMS DESCRIBED BY DIFFERENTIAL EQUATIONS

2.18. The continuous-time system shown in Fig. 2-18 consists of one integrator and one
      scalar multiplier. Write a differential equation that relates the output y( t ) and the
      input x( t 1.




                                                   Fig. 2-18


          Let the input of the integrator shown in Fig. 2-18 be denoted by e(t). Then the
      input-output relation of the integrator is given by



      Differentiating both sides of Eq. (2.94) with respect to t , we obtain
                              LINEAR TIME-INVARIANT SYSTEMS                              [CHAP. 2


      Next, from Fig. 2-18 the input e(t) to the integrator is given by
                                             e(t) = x ( t ) -ay(t)
      Substituting Eq. (2.96) into Eq. (2.95), we get




      which is the required first-order linear differential equation.

2.19. T h e continuous-time system shown in Fig. 2-19 consists of two integrators and two
      scalar multipliers. Write a differential equation that relates the output y ( t ) and the
      input x ( t ).




                                               Fig. 2-19



          Let e ( 0 and w(t) be the input and the output of the first integrator in Fig. 2-19,
      respectively. Using Eq. (2.951, the input to the first integrator is given by



      Since w(t) is the input to the second integrator in Fig. 2-19, we have



      Substituting Eq. (2.99) into Eq. (2.98), we get




      which is the required second-order linear differential equation.
          Note that, in general, the order of a continuous-time LTI system consisting of the
      interconnection of integrators and scalar multipliers is equal to the number of integrators in
      the system.
CHAP. 21                       LINEAR TIME-INVARIANT SYSTEMS                                              85


2.20. Consider a continuous-time system whose input x ( t ) and output y ( t ) are related by



      where a is a constant.
      ( a ) Find y ( t ) with the auxiliary condition y(0) = y, and
                                                   x ( t ) =~ e - ~ ' u ( t )                       (2.102)
      ( b ) Express y ( t ) in terms of the zero-input and zero-state responses.
      ( a ) Let


           where y p ( t ) is the particular solution satisfying Eq. (2.101) and y h ( t ) is the homogeneous
           solution which satisfies



           Assume that
                                              y p ( t )= ~ e - ~ '       t>O
           Substituting Eq. (2.104) into Eq. (2.101), we obtain
                                              - b ~ e - 6 '+ a ~ e - b =
                                                                       ' K ~ - ~ '

           from which we obtain A = K / ( a - b), and



           To obtain y h ( t ) , we assume
                                                      y h ( t )= BeS'
           Substituting this into Eq. (2.103) gives
                                             sBe"+aBe"=(s+a)Be"'=O
           from which we have s = - a and
                                                     y h ( t ) = Be-"'
           Combining yp(t)and yh(t),we get
                                                            K
                                       y ( t ) =Be-"+     -e - b ~              t>O
                                                          a-b
           From Eq. (2.106) and the auxiliary condition y(O) =yo, we obtain
                                                                  K
                                                    B=yo- -
                                                          a-b
           Thus, Eq. (2.106) becomes
                                  LINEAR TIME-INVARIANT SYSTEMS                                [CHAP. 2



           For t < 0, we have x(t) = 0, and Eq. (2.101 becomes Eq. (2.103). Hence,
                                                     y ( r ) = Bepa'           1 <O

           From the auxiliary condition y(0) = y,, we obtain
                                                    ~ ( r =yoe-"'
                                                          )                    r<O               ( 2.108)
     ( b ) Combining Eqs. (2.107) and (2.108), y(r) can be expressed in terms of y,,(t) (zero-input
           response) and y,,(t) (zero-state response) as




           where




2.21. Consider the system in Prob. 2.20.
      ( a ) Show that the system is not linear if y(0) = y,, # 0.
      ( b ) Show that the system is linear if y(0) = 0.
      ( a ) Recall that a linear system has the property that zero input produces zero output (Sec.
            1.5E). However, if we let K = 0 in Eq. (2.102), we have x(r) = 0, but from Eq. (2.109) we
            see that
                                                 y ( t ) = y,,e-"   +0
                                                                    Yo + 0
           Thus, this system is nonlinear if y(0) = yo # 0.
     ( b ) If y(0) = 0, the system is linear. This is shown as follows. Let x J t ) and x,(t) be two input
           signals and let y ,(t) and y,(r) be the corresponding outputs. That is,




           with the auxiliary conditions
                                                                         ) 0
                                                                 =~ 2 ( 0=

           Consider
                                                    x(r) =a,x,(t) +a,x*(t)
           where a , and a, are any complex numbers. Multiplying Eq. (2.111) by a , and Eq. (2.112)
           by a ? and adding, we see that
                                             ) ' ( r ) = a I ~ l ( t +) a z y , ( t )
           satisfies the differential equation

                                                       dy(t) +ay(t) = x ( I )
                                                        dr
           and also, from Eq. (2.113)
                                                 ~ ( 0 =) a,y,(O) + ~ , Y , ( O )= 0
           Therefore, y(t) is the output corresponding to x(t), and thus the system is linear.
CHAP. 21                         LINEAR TIME-INVARIANT SYSTEMS                                                87


2.22. Consider the system in Prob. 2.20. Show that the initial rest condition y ( 0 ) = 0 also
      implies that the system is time-invariant.
            Let y , ( t ) be the response to an input x , ( t ) and
                                                 xI(t) =0                t10                            (2.114)

      Then

      and                                               Y do) = 0                                       (2.116)
      Now, let y 2 ( t ) be the response to the shifted input x2(t ) = x ,(t - T ) . From Eq. (2.114) we have
                                                 x2(t)= 0                t s r                          (2.117)
      Then y ,( t must satisfy



      and                                               ~ ~ ( =7 01
      Now, from Eq. (2.115) we have



      If we let y 2 ( t ) = y l ( t - T), then by Eq. (2.116) we have
                                            yz(7) = Y , ( T- 7 ) = ~ 1 ( 0=
                                                                          )0
      Thus, Eqs. (2.118) and (2.119) are satisfied and we conclude that the system is time-invariant.

2.23. Consider the system in Prob. 2.20. Find the impulse response h ( r ) of the system.
            The impulse response h ( t ) should satisfy the differential equation



      The homogeneous solution h h ( t ) to Eq. (2.120) satisfies



      To obtain h h ( t ) we assume
                                                      h h ( t ) = ceS'
      Substituting this into Eq. (2.121) gives
                                            sces' + aces' = ( s + a)ces' = 0
      from which we have s = - a and
                                                  h h ( t ) = ce-"'u(t)
      We predict that the particular solution h p ( t ) is zero since h p ( t ) cannot contain N t ) . Otherwise,
      h ( t ) would have a derivative of S ( t ) that is not part of the right-hand side of Eq. (2.120). Thus,
                                                   h ( t ) =ce-"'u(t)                                   (2.123)
                               LINEAR TIME-INVARIANT SYSTEMS                                         [CHAP. 2


      To find the constant c , substituting Eq. (2.123) into Eq. (2.120), we obtain




      Using Eqs. (1.25)and (1.301, the above equation becomes



      so that c = 1. Thus, the impulse response is given by
                                                 h ( t ) =e-"'u(t)

2-24 Consider the system in Prob. 2.20 with y(0) = 0.
      ( a ) Find the step response s ( t ) of the system without using the impulse response
            h ( t 1.
      ( b ) Find the step response d r ) with the impulse response h ( t ) obtained in Prob.
            2.23.
      (c) Find the impulse response h(r from s ( t ).
      ( a ) In Prob. 2.20


           Setting K = 1, b = 0, we obtain x ( t ) = u ( t ) and then y ( t ) = s ( t 1. Thus, setting K = 1,
           b = 0, and y ( 0 ) = y o = 0 in Eq. (2.109),we obtain the step response



      ( b ) Using Eqs. ( 2 . 1 2 )and (2.124) in Prob. 2.23, the step response s ( t ) is given by




          which is the same as Eq. (2.125).
      (c) Using Eqs. (2.13) and (2.125),the impulse response h ( t ) is given by




            Using Eqs. (1.25)and (1.30), we have



           Thus,                                    h ( t ) =e-"'u(t)
           which is the same as Eq. (1.124).
CHAP. 21                         LINEAR TIME-INVARIANT SYSTEMS


2.25. Consider the system described by
                                          yf(t)   +2y(t)=x(t) +xl(t)
       Find the impulse response h ( t ) of the system.
           The impulse response h ( t ) should satisfy the differential equation
                                           h'(t)+ 2h(t) =6 ( r )+ S'(t)                            ( 2.127)
       The homogeneous solution h,(t) to Eq. (2.127) is [see Prob. 2.23 and Eq. (2.12211
                                                 h h ( t )= ~ ~ e - ~ ' u ( t )
       Assuming the particular solution h J t ) of the form


       the general solution is
                                                                    +
                                            h ( t ) = C ~ ~ - ~ ' Uc t( 6I( )t )                   (2.128)
       The delta function 6 ( t ) must be present so that h l ( t )contributes S1(t)to the left-hand side of
       Eq. (1.127).Substituting Eq. (2.128) into Eq. (2.1271, we obtain


                            =6(t)   +6'(t)
       Again, using Eqs. (1.25) and (1.301, we have
                                    ( c , + 2 c 2 )6 ( t ) + c 2 S 1 ( t =
                                                                         ) 6 ( t )+6'(t)
       Equating coefficients of 6 ( t ) and 6'(t), we obtain


       from which we have c , = - 1 and c, = 1. Substituting these values in Eq. (2.128).we obtain




RESPONSES OF A DISCRETE-TIME LTI SYSTEM AND CONVOLUTION

2.26. Verify Eqs. ( 2 . 3 6 ) and (2.37), that is,




       ( a ) By definition (2.35)



            By changing the variable n - k = m, we have



       ( b ) Let x[nl* h,[nl =fJn1 and h,[nI* h2[nl = f 2 [ n l .Then
                                 LINEAR TIME-INVARIANT SYSTEMS                                            [CHAP. 2




           Substituting r = m - k and interchanging the order of summation, we have




           Now, since



           we have




2.27. Show that
     ( a ) x [ n ]* 6 [ n ]= x [ n ]
     ( b ) x [ n ] * 6 [ n- n , ] = x [ n - n o ]
                                 n
     (el x [ n ] * u [ n ] =           x[kl
                               k= -m
                                       "-"11

     (dl x [ n ] * u[n - no] =                 xlk]
                                       k = - r,

     ( a ) By Eq. (2.35)and property(1.46)of 6 [ n - & ] w e have




     ( b ) Similarly, we have
                                                            m

                               ~ [ n* S] [ n - n o ] =     C x [ k ]S [ n - k - n , , ]= x [ n - n o ]
                                                         k = -m

     (c) By Eq. (2.35) and definition (1.44) of u [ n - k ] we have




     ( d l In a similar manner, we have
                                                                                          n -ntl
                               x[n]*u[n-no]=               z
                                                           rn



                                                         k = -m
                                                                  x[k]u[n-k-no]=
                                                                                         k= -m
                                                                                                   x[k]
CHAP. 21                     LINEAR TIME-INVARIANT SYSTEMS                                          91


2.28. The input x [ n ] and the impulse response h [ n ] of a discrete-time LTI system are given
      by



      (a) Compute the output y[n] by Eq. (2.35).
      ( b ) Compute the output y [ n ] by Eq. (2.39).
      ( a ) By Eq. (2.35) we have




           Sequences x [ k ] and h[n - k ] are shown in Fig. 2-20(a) for n < 0 and n > 0. From Fig.
           2-20(a) we see that for n < 0, x [ k ] and h [ n - k ] do not overlap, while for n 2 0, they
           overlap from k = 0 to k = n . Hence, for n < 0, y [ n ] = 0. For n r 0, we have




           Changing the variable of summation k to m = n - k and using Eq. (1.901,we have




                     (a)
                                             Fig. 2-20
                                 LINEAR TIME-INVARIANT SYSTEMS                                    [CHAP. 2


             Thus, we can write the output y [ n ] as




             which is sketched in Fig. 2-20(b).
       ( b ) By Eq. (2.39)




             Sequences h [ k l and x [ n - k ] are shown in Fig. 2-21 for n < 0 and n > 0.Again from Fig.
             2-21 we see that for n < 0, h [ k ] and x[n - k l d o not overlap, while for n 2 0, they overlap
             from k = 0 to k = n. Hence, for n < 0, y [ n ] = 0. For n 2 0, we have




             Thus, we obtain the same result as shown in Eq. (2.134).




                                                      -1   0       n
                                                       Fig. 2-21




2.29. Compute y [ n ] = x [ n ]* h [ n ] ,where
       ( a ) x [ n ] = cunu[n],h [ n ]= p n u [ n ]
       ( b ) x [ n ] = cunu[n],h [ n ] = a - " u [ - n ] , 0 < a < 1
CHAP. 21                    LINEAR TIME-INVARIANT SYSTEMS


     (a) From Eq. (2.35) we have




                                                                          Osksn
           Since                          u [ k ] u [ n- k ] =
                                                                          otherwise
           we have




           Using Eq. (1.90), we obtain




                                   m

                      y[n]=
                                 k = -m
                                          x [ k ] h [ n- k ] =     f aku[k]a-'"-*'u[-(n - k ) ]
                                                                 k - -m




           For n 1 0 , we have

                                          u [ k ] u [ k- n J =            Osk
                                                                          otherwise
           Thus, using Eq. (1.911, we have




           For n r 0, we have
                                                                          n s k
                                          u [ k ] u [ k- n ] =
                                                                          otherwise
           Thus, using Eq. (1.921, we have
                                LINEAR TIME-INVARIANT SYSTEMS                                                 [CHAP. 2


            Combining Eqs. ( 2 . 1 3 6 ~and
                                        ) (2.I36b), we obtain

                                                                                                               (2.137)

            which is sketched in Fig. 2-22.




                                                 -2-10 1 2 3
                                                       Fig. 2-22




2.30. Evaluate y [ n ] = x [ n ]* h [ n ] , where x [ n ] and h [ n ] are shown in Fig. 2-23, ( a ) by an
      analytical technique, and ( b ) by a graphical method.




                  - 1 0 1 2 3                      n                                     -I   0   1   2             n

                                                       Fig. 2-23



       (a) Note that x [ n ]and h [ n ]can be expressed as
                                    x [ n ] = 6 [ n ] + 6 [ n- l ] + 6 [ n- 2 ] + 6 [ n -31
                                    h [ n ]= 6 [ n ]+ S [ n - 1 ] + S [ n - 21
            Now, using Eqs. (2.38), (2.130), and (2.I3l), we have
                          x [ n ]* h [ n ]= x [ n ]* { S [ n ]+ 6 [ n - 1 ] + 6 [ n - 2 1 )
                                         =~    [ n* S] [ n ]+ x [ n ]* S [ n - I ] + x [ n ]* S [ n - 2 1 )
                                         = x [ n ]+ x [ n - 1 ] + x [ n - 21
            Thus,               y [ n ] = S [ n ]+ S [ n - I ] + S [ n - 21 + 6 [ n - 31
                                          +6[n- 1]+8[n-2]+6[n-3]+6[n-41
                                          +S[n-2]+6[n-3]+6[n-4]+6[n-5]
            or      y [ n ] = S [ n ]+ 2 S [ n - 1 ] + 36[n - 21 + 3 6 [ n - 31 + 2 6 [ n - 41 + 6 [ n - 51
            or                                      Y [ ~ I ={ 1 , 2 , 3 , 3 , 2 , l }
CHAP. 21   LJNEAR TIME-INVARIANT SYSTEMS




                      Fig. 2-24
96                              LINEAR TIME-INVARIANT SYSTEMS                                            [CHAP. 2


      ( b ) Sequences h [ k ] ,x [ k l and h [ n - k ] , x [ k ] h [ n- k l for different values of n are sketched in
            Fig. 2-24. From Fig. 2-24 we see that x [ k J and h [ n - k ] do not overlap for n < 0 and
            n > 5, and hence y [ n ] = 0 for n < 0 and n > 5. For 0 5 n 1:5, x [ k ] and h [ n - k ] overlap.
            Thus, summing x [ k ] h [ n- k ] for 0 s n 2 5, we obtain




            which is plotted in Fig. 2-25.




                                                    Fig. 2-25




2.31. If x , [ n ] and x 2 [ n ] are both periodic sequences with common period N,the convolu-
      tion of x , [ n ] and x 2 [ n ] does not converge. In this case, we define the periodic
      convolution of x , [ n ] and x 2 [ n ] as




      Show that f [ n ] is periodic with period N.
          Since x , [ n ] is periodic with period N, we have


      Then from Eq. (2.138) we have




      Thus, f [ n 1 is periodic with period N.

2.32. The step response s [ n ] of a discrete-time LTI system is given by
                                         s [ n ]= a n u [ n ]        O<a<l
      Find the impulse response h [ n ] of the system.
CHAP. 21                        LINEAR TIME-INVARIANT SYSTEMS


           From Eq. (2.41) the impulse response h[nl is given by
                                h[n] = s [ n ] - s[n - 11 = crnu[n] - a"-'u[n         - 11
                                     = {S[n] + a n u [ n - 11) - a n - ' u [ n   - 11
                                     = 6[n] - (1 - a)crn-'u[n          - 11


PROPERTIES OF DISCRETE-TIME LTI SYSTEMS

2.33. Show that if the input x[n] to a discrete-time LTI system is periodic with period N ,
      then the output y[n] is also periodic with period N .
           Let h[n] be the impulse response of the system. Then by Eq. (2.39) we have



      Let n = m + N . T h e n
                                     m                                   10


                   y[m + N ] =              h[k]x[m + N - k ] =         C h[k]x[(m - k ) + N ]
                                   k = -m                             k = -03

      Since x[n] is periodic with period N, we have
                                            x[(m-k) + N ] =x[m-k]
                                                        OD

      Thus,                        y[m + N ] =                 h[k]x[m - k ] = y[m]
                                                   k-    -OD


      which indicates that the output y[n] is periodic with period N.

2.34. The impulse response h[n] of a discrete-time LTI system is shown in Fig. 2-26(a).
      Determine and sketch the output y[n] of this system t o the input x[n] shown in Fig.
      2-26(b) without using the convolution technique.
           From Fig. 2-26(b) we can express x[n] as
                                             x[n] = 6[n - 21 - S[n - 41




                                                                                    (b)
                                                  Fig. 2-26
                             LINEAR TIME-INVARIANT SYSTEMS                                   [CHAP. 2


      Since the system is linear and time-invariant and by the definition of the impulse response, we
      see that the output y [ n ] is given by
                                          y[n] = h [ n -21 - h [ n -41
      which is sketched in Fig. 2-27.




                                                 Fig. 2-27




2.35. A discrete-time system is causal if for every choice of no the value of the output
      sequence y [ n ] at n = n o depends on only the values of the input sequence x [ n ] for
      n I no (see Sec. 1.5D). From this definition derive the causality condition (2.44) for a
      discrete-time LTI system, that is,


          From Eq. (2.39) we have
                                          ffi


                             Y[.]   =    C h[klx[n- k l
                                        k = -=




      Note that the first summation represents a weighted sum of future values of x [ n ] . Thus, if the
      system is causal, then
CHAP. 21                         LINEAR TIME-INVARIANT SYSTEMS


      This can be true only if
                                             h [ n ]= 0           n<O
      Now if h[n]= 0 for n < 0 , then Eq. (2.139) becomes
                                                        m




      which indicates that the value of the output y[n] depends on only the past and the present
      input values.

2.36. Consider a discrete-time LTI system whose input x [ n ] and output y [ n ] are related by



      Is the system causal?
            By definition (2.30) and Eq. (1.48)the impulse response h [ n ]of the system is given by


                        k = -x                 k = -x                                  k= -m
      By changing the variable k + 1 = m and by Eq. (1.50)we obtain

                                 h [ n ]= 2-("+')
                                                =,
                                                     x
                                                     n+ 1


                                                       -m
                                                            S [ m ] = 2-("+"u[n+ 1 ]           ( 2.140)

      From Eq. (2.140) we have h [ - 11 = u[O]= 1 + 0. Thus, the system is not causal.

2.37. Verify the BIBO stability condition [Eq. ( 2 . 4 9 ) ]for discrete-time LTI systems.
            Assume that the input x [ n ] of a discrete-time LTl system is bounded, that is,
                                            Ix[n]l l k l           all n                       (2.141)
      Then, using Eq. (2.351, we have



      Since lxIn - k)l i k , from Eq. (2.141). Therefore, if the impulse response is absolutely
      summable, that is,



      we have
                                            l y [ n ] l ~ k , K =<km~
      and the system is BIB0 stable.

2.38. Consider a discrete-time LTI system with impulse response h [ n ] given by


      (a)   Is this system causal?
      ( b ) Is this system BIBO stable?
                                LINEAR TIME-INVARIANT SYSTEMS                                      [CHAP. 2


      (a)   Since h [ n ] = 0 for n < 0, the system is causal.
      ( b ) Using Eq. (1.91) (Prob. 1,191, we have




              Therefore, the system is B I B 0 stable if la1 < 1 and unstable if la1 2 1.


SYSTEMS DESCRIBED BY DIFFERENCE EQUATIONS

239. The discrete-time system shown in Fig. 2-28 consists of one unit delay element and one
     scalar multiplier. Write a difference equation that relates the output y [ n ] and the
     input x [ n ] .


                                                                         YI~I




                                                 Fig. 2-28



             In Fig. 2-28 the output of the unit delay element is y [ n - 11. Thus, from Fig. 2-28 we see
      that




      which is the required first-order linear difference equation.

2.40. The discrete-time system shown in Fig. 2-29 consists of two unit delay elements and
      two scalar multipliers. Write a difference equation that relates the output y[n] and the
      input x [ n ] .


                                                                                            ~Inl




                                                  Fig. 2-29
CHAP. 21                     LINEAR TIME-INVARIANT SYSTEMS                                          101


          In Fig. 2-29 the output of the first (from the right) unit delay element is y[n - 11 and the
      output of the second (from the right) unit delay element is y[n - 21. Thus, from Fig. 2-29 we
      see that
                                  y[n]=a,y[n-l]+a,y[n-2]+x[n]                                   (2.144)
      or                          y [ n ] - a , y [ n - 1 ] - a , y [ n - 21 = x [ n ]          (2.145)
      which is the required second-order linear difference equation.
           Note that, in general, the order of a discrete-time LTI system consisting of the interconnec-
      tion of unit delay elements and scalar multipliers is equal to the number of unit delay elements
      in the system.

2.41. Consider the discrete-time system in Fig. 2-30. Write a difference equation that relates
      the output y [ n ] and the input x [ n ] .




                                                    Unit
                                                    delay

                                                      I
                                                   q b - 11
                                                 Fig. 2-30



           Let the input to the unit delay element be q[nl. Then from Fig. 2-30 we see that
                                           q [ n ]= 2 q [ n - 1 1 + x [ n ]                    ( 2.146a)
                                           ~ [ n=]s [ n I + 3 q [ n - 11                      (2.1466)
      Solving Eqs. (2.146a) and (2.146b) for q [ n ]and q [ n - 11 in terms of x [ n ]and y[n],we obtain
                                               9 [ n ] =f y [ n ]+ $+I                        (2.147a)
                                          q [ n - 1 1 = i y [ n ]- i x [ n ]                  (2.147b)
      Changing n to ( n - 1) in Eq. (2.147a), we have
                                     q [ n - 1 1 = f y [ n - 11 + i x [ n - 1 1               (2.147~)
      Thus, equating Eq. (2.1476) and (Eq. (2.147c), we have
                                 ; y [ n ] - f x [ n ] = f y [ n - 1 1 + + x [ n - 11
      Multiplying both sides of the above equation by 5 and rearranging terms, we obtain
                                   y [ n ] - 2 y [ n - 1 1 = x [ n ]+ 3 x [ n - 1 1            (2.148)
      which is the required difference equation.

2.42. Consider a discrete-time system whose input x [ n ] and output y [ n ] are related by
                                         y [ n ] - a y [ n - 11 = x [ n ]                      (2.149)
102                           LINEAR TIME-INVARIANT SYSTEMS                                [CHAP. 2



      where a is a constant. Find y [ n ] with the auxiliary condition y [ - l] = y -   , and
                                                 x [ n ] =Kbnu[n]                           (2.150)
      Let                                   yLn1 =ypLn1 + y h L n 1
      where y,[n] is the particular solution satisfying Eq. (2.149) and y h [ n ] is the homogeneous
      solution which satisfies
                                            y [ n ] -ay[n - 11 = O
      Assume that
                                          y,[n] = Abn                nrO
      Substituting Eq. (2.1521 into Eq. (2.1491, we obtain
                                            Abn - a A b n - ' = K b n
      from which we obtain A = Kb/(b - a), and



      To obtain yh["], we assume
                                                   y,[n] = Bzn
      Substituting this into Eq. (2.151) gives


      from which we have z = a and
                                                   ~ ~ [=Ban
                                                         n ]
      Combining yp[n] and yh[n],we get
                                                      K
                                   y [ n ] = B a n + -b"+l                 n20
                                                     b-a
      In order to determine B in Eq. (2.155) we need the value of y[O]. Setting n = 0 in Eqs. (2.149)
      and (2.1501, we have
                                 Y [ O ] -ay[-11 =y[O] - a y - , =x[O] = K
      or                                         y[O] = K + a y - ,
      Setting n = 0 in Eq. (2.155), we obtain
                                                                 b
                                             y[O] = B +K-
                                                               b-a
      Therefore, equating Eqs. (2.156) and (2.1571, we have



      from which we obtain

                                            B = a y - , - K-
                                                               b-a
      Hence, Eq. (2.155) becomes
CHAP. 21                       LINEAR TIME-INVARIANT SYSTEMS                                              103


      For n < 0, we have x [ n ] = 0, and Eq. (2.149) becomes Eq. (2.151). Hence.
                                                       y [ n ] =Ban                                  (2.159)
                                                      ,,
      From the auxiliary condition y[ - 11 = y - we have
                                                y [ - 11 = y - , = B U - '
      from which we obtain B = y - ,a. Thus,


      Combining Eqs. (2.158) and (2.160), y [ n ] can be expressed as



           Note that as in the continuous-time case (Probs. 2.21 and 2.221, the system described by
      Eq. (2.149) is not linear if y [ - 11 # 0. The system is causal and time-invariant if it is initially at
      rest, that is, y [ - 11 = 0. Note also that Eq. (2.149) can be solved recursively (see Prob. 2.43).

2.43. Consider the discrete-time system in Prob. 2.42. Find the output y [ n ] when x [ n ] =
      K S [ n ] and y [ - l ] = y - , = a .
          We can solve Eq. (2.149) for successive values of y [ n ] for n r 0 as follows: rearrange Eq.
      (2.149) as
                                             y[n]=ay[n - 11 +x[n]
      Then




                                                                       +
                           y [ n ] = a y [ n - 1 1 + x [ n ] =an(acu K ) =an+'cu + anK              ( 2.16.3)
      Similarly, we can also determine y [ n ] for n < 0 by rearranging Eq. (2.149) as



      Then                    y[-11 = a




                                         1
                              y[-n] = -{y[-n
                                      a
                                                       + 1 1 - x [ - n + 1 1 ) =a-"+'a
     Combining Eqs. (2.163) and (2.169, we obtain
                                             y [ n ] = a n + ' a+ K a n u [ n ]
104                             LINEAR TIME-INVARIANT SYSTEMS                           [CHAP. 2


2.44. Consider the discrete-time system in Prob. 2.43 for an initially at rest condition.
      ( a ) Find in impulse response h [ n ] of the system.
      ( b ) Find the step response s [ n ] of the system.
      (c) Find the impulse response h [ n ] from the result of part ( b ) .
      (a)   Setting K = 1 and y [ - 11 = a = 0 in Eq. (2.166), we obtain



      (b)   Setting K = 1, b = 1 , and y [ - 1] = y - , = 0 in Eq. (2.161), we obtain




      (c)   From Eqs. (2.41) and (2.168) the impulse response h [ n ] is given by




            When n = 0.




            When n r 1,




            Thus,                                     h [ n ]= anu[n]

            which is the same as Eq. (2.167).


2.45. Find the impulse response h [ n ] for each of the causal LTI discrete-time systems
      satisfying the following difference equations and indicate whether each system is a FIR
      or an IIR system.
      ( a ) y [ n ] = x [ n ] - 2 x [ n - 21 + x [ n - 31
      ( b ) y [ n ] + 2 y [ n - 11 = x [ n ] + x [ n - 11
      (c) y [ n ] - t y [ n - 21 = 2 x [ n ] - x [ n - 21
      (a)   By definition (2.56)




            Since h [ n ] has only four terms, the system is a FIR system.
CHAP. 21                        LINEAR TIME-INVARIANT SYSTEMS


        ( b ) h[nl = -2h[n - 11 + 6 [ n ]+ 6 [ n- 11
              Since the system is causal, h[- 1 ] = 0. Then
                                 h[O]= -2h[ - 1 ] + 6 [ 0 ]+ 6[ - 1 1 = S [ O ] = 1
                                 h [ l ]= -2h[O] + 6 [ 1 ]+ S [ O ] = -2 + 1 = - 1
                                 h [ 2 ]= - 2 h [ l ] + 6 [ 2 ]+ S [ l ]= - 2 ( - 1 ) = 2
                                 h [ 3 ]= -2h[2] + 6 [ 3 ]+ 6 [ 2 ]= - 2 ( 2 ) = -2'




              Hence,                       h [ n ]= 6 [ n ]+ ( - 1 ) " 2 " - ' u [ n - 1 1
            Since h[nl has infinite terms, the system is an IIR system.
        (c) h[nl = i h [ n - 21 + 26[n]- 6[n - 21
            Since the system is causal, h [ - 21 = h[- 11 = 0. Then




              Hence,                                      h [ n ]= 2 6 [ n ]
              Since h[nl has only one term, the system is a FIR system.




                                  Supplementary Problems
2.46.   Compute the convolution y(t ) = x ( t * h(t ) of the following pair of signals:

        (a) X ( I ) =
                                -a < t < a
                                otherwise , h ( t )=
                                                     1
                                                          I0           -a < t l a
                                                                      otherwise
                                O<rsT                                O<r52T
                                otherwise '                          otherwise

                             2a - It1          It( < 2a
        Am. ( a ) Y O ) =
                                               111 L 2a
                                                               r<O
                                                               O<t_<T
                                                               T<rs2T
                                                               2T<rs3T
                                                               3T<t
106                                     LINEAR TIME-INVARIANT SYSTEMS                               [CHAP. 2


2.47.   Compute the convolution sum y [ n ] = x [ n l * h[nl of the following pairs of sequences:




        Am.     ( a ) y [ n ]=                          ns0
                                                        n>O




2.48.   Show that if y ( t ) = x ( t ) * h ( t ) , then
                                                   y l ( r ) = ~ ' ( r* h
                                                                        ) (r) = x ( t ) * hl(t)

        Hint: Differentiate Eqs. (2.6) and (2.10) with respect to t .


2.49.   Show that
                                                               ~ ( t* S'(1)
                                                                      )     =xt(t)
        Hint: Use the result from Prob. 2.48 and Eq. (2.58).


2.50.   Let y [ n ] = x [ n ] *h [ n ] .Then show that
                                               x [ n - n , ] *h [ n - n , ] = y [ n - n , - n , ]

        Hint: See Prob. 2.3.


2.51.   Show that




        for an arbitrary starting point no.
        Hint: See Probs. 2.31 and 2.8.


2.52.   The step response s ( t ) of a continuous-time LTI system is given by


        Find the impulse response h(r) of the system.
        Am.     h ( t ) = S ( t ) - w,[sin w , , f l u ( t )
CHAP. 21                           LINEAR TIME-INVARIANT SYSTEMS                              107


2.53.   The system shown in Fig. 2-31 is formed by connection two systems in parallel. The impulse
        responses of the systems are given by

                                       h   )= e 2 ( )       and        h,(t) = 2ee'u(t)

        ( a ) Find the impulse response h ( t ) of the overall system.
        ( b ) Is the overall system stable?
        Ans. (a) h ( t ) = ( e - 2 ' + 2e-')u(t)
             ( b ) Yes




2.54.   Consider an integrator whose input x ( t ) and output y ( t ) are related by




        ( a ) Find the impulse response h ( t ) of the integrator.
        ( b ) Is the integrator stable?
        Ans. ( a ) h ( t ) = u ( t )
             ( b ) No

2.55.   Consider a discrete-time LTI system with impulse response h [ n ]given by
                                                    h [ n ]= S [ n - 1 1
        Is this system memoryless?
        Am.     No, the system has memory.

2.56.   The impulse response of a discrete-time LTI system is given by
                                                    h [ n ] = (f) " u [ n ]
        Let y[nl be the output of the system with the input
                                               x [ n ] = 2 S [ n ] + S [ n - 31
        Find y [ l ] and y[4].
        Am. y[ll = 1 and y[4] = 5.
108                              LINEAR TIME-INVARIANT SYSTEMS                              [CHAP. 2



2.57. Consider a discrete-time LTI system with impulse response h [ n ] given by
                                                h [ n ]= ( - ; ) l 1 u [ n - I ]

      ( a ) Is the system causal?
      ( b ) Is the system stable?
      Ans.    ( a ) Yes; ( b ) Yes


2.58. Consider the RLC circuit shown in Fig. 2-32. Find the differential equation relating the output
      current y ( t ) and the input voltage x ( t ) .
              d2y(t)       R dy(t)       1             1 &([I
      Ans.    ---       +--L          + -y(t)       = --
                 dt'             dt     LC             L dl




                                                     Fig. 2-32




2.59. Consider the RL circuit shown in Fig. 2-33.
             Find the differential equation relating the output voltage y ( t ) across R and the input
             voltage x( t 1.
             Find the impulse response h ( t ) of the circuit.
             Find the step response d t ) of the circuit.




                                                     Fig. 2-33
CHAP. 21                             LINEAR TIME-INVARIANT SYSTEMS


2.60.   Consider the system in Prob. 2.20. Find the output y ( t ) if x ( t ) = e-"'u(t) and y(0) = 0.
        Am.    te-"u(t)


2.61.   Is the system described by the differential equation



        linear?
        Am. No, it is nonlinear

2.62.   Write the input-output equation for the system shown in Fig. 2-34.
        Am.                                      +
               2 y [ n ] - y[n - 11 = 4 x [ n ] 2 x [ n - 11




                                                            Fig. 2-34




2.63.   Consider a discrete-time LTI system with impulse response

                                                  h[n]=                 n=0,1
                                                                        otherwise
        Find the input-output relationship of the system.
                              +
        Am. y [ n ] = x [ n ] x[n - 11

2.64.   Consider a discrete-time system whose input x [ n ] and output y [ n ] are related by
                                                     y[n]- iy[n- 11 =x[n]
        with y [ - l ] = 0. Find the output y [ n ] for the following inputs:
        ( a ) x[nl = (f )"u[nl;
        ( b ) xtnl= (f)"u[nl
        Am.    ( a ) y [ n ] = 6[(;)"+' - ( f ) " + ' ] u [ n ]
               ( b ) y [ n l = ( n + lX;)"u[n]

2.65.   Consider the system in Prob. 2.42. Find the eigenfunction and the corresponding eigenvalue of
        the system.
                      z
        Am     zn,A = -
                         z-a
                                                                   Chapter 3

           Laplace Transform and Continuous-Time
                        LTI Systems
3.1 INTRODUCTION
     A basic result from Chapter 2 is that the response of an LTI system is given by
 convolution of the input and the impulse response of the system. In this chapter and the
 following one we present an alternative representation for signals and LTI systems. In this
 chapter, the Laplace transform is introduced to represent continuous-time signals in the
 s-domain ( s is a complex variable), and the concept of the system function for a
 continuous-time LTI system is described. Many useful insights into the properties of
 continuous-time LTI systems, as well as the study of many problems involving LTI systems,
 can be provided by application of the Laplace transform technique.


3.2 THE LAPLACE TRANSFORM
         In Sec. 2.4 we saw that for a continuous-time LTI system with impulse response h(t),
     the output y ( 0 of the system to the complex exponential input of the form e" is



 where


A.     Definition:
        The function H ( s ) in Eq. (3.2) is referred to as the Laplace transform of h(t). For a
     general continuous-time signal x(t), the Laplace transform X(s) is defined as




     The variable s is generally complex-valued and is expressed as


     The Laplace transform defined in Eq. (3.3) is often called the bilateral (or two-sided)
     Laplace transform in contrast to the unilateral (or one-sided) Laplace transform, which is
     defined as
 CHAP. 31      LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS                             111


   where 0 - = lim,,,(O - E ) . Clearly the bilateral and unilateral transforms are equivalent
   only if x(t) = 0 for t < 0. The unilateral Laplace transform is discussed in Sec. 3.8. We will
   omit the word "bilateral" except where it is needed to avoid ambiguity.
       Equation (3.3) is sometimes considered an operator that transforms a signal x ( t ) into a
   function X(s) symbolically represented by


   and the signal x ( t ) and its Laplace transform X(s) are said to form a Laplace transform
   pair denoted as



B. The Region of Convergence:
     The range of values of the complex variables s for which the Laplace transform
  converges is called the region of convergence (ROC). To illustrate the Laplace transform
  and the associated ROC let us consider some examples.

EXAMPLE 3.1. Consider the signal
                                   x ( t ) =e-O1u(t)      a real
Then by Eq. (3.3) the Laplace transform of x(t) is




             ,e-("'")' = 0 only if Re(s + a ) > 0 or Reb) > -a.
because lim, ,

    Thus, the ROC for this example is specified in Eq. (3.9) as Re(s) > -a and is displayed
in the complex plane as shown in Fig. 3-1 by the shaded area to the right of the line
Re(s) = -a. In Laplace transform applications, the complex plane is commonly referred to
as the s-plane. The horizontal and vertical axes are sometimes referred to as the a-axis and
the jw-axis, respectively.

EXAMPLE 3.2.      Consider the signal
                                  ~ ( t =) -e-"u( - t )     a real
Its Laplace transform X(s) is given by (Prob. 3.1)




    Thus, the ROC for this example is specified in Eq. (3.11) as Re(s) < -a and is displayed
in the complex plane as shown in Fig. 3-2 by the shaded area to the left of the line
Re(s) = -a. Comparing Eqs. (3.9) and (3.11), we see that the algebraic expressions for X(s)
for these two different signals are identical except for the ROCs. Therefore, in order for the
Laplace transform to be unique for each signal x(t), the ROC must be specified as par1 of the
transform.
            LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS                       [CHAP. 3




                                          s-plane




                    (a)                                                (b)
                                 Fig. 3-1 ROC for Example 3.1.

C. Poles and Zeros of X ( s 1:
     Usually, X(s) will be a rational function in s, that is,



 The coefficients a, and b, are real constants, and m and n are positive integers. The X(s)
 is called a proper rational function if n > m, and an improper rational function if n I m.
 The roots of the numerator polynomial, z,, are called the zeros of X(s) because X(s) = 0
 for those values of s. Similarly, the roots of the denominator polynomial, p,, are called the
 poles of X(s) because X(s) is infinite for those values of s. Therefore, the poles of X(s)
 lie outside the ROC since X(s) does not converge at the poles, by definition. The zeros, on
 the other hand, may lie inside or outside the ROC. Except for a scale factor ao/bo, X(s)
 can be completely specified by its zeros and poles. Thus, a very compact representation of
 X(s) in the s-plane is to show the locations of poles and zeros in addition to the ROC.
      Traditionally, an " x " is used to indicate each pole location and an " 0 " is used to
 indicate each zero. This is illustrated in Fig. 3-3 for X(s) given by



  Note that X(s) has one zero at s = - 2 and two poles at s = - 1 and s = - 3 with scale
  factor 2.

D. Properties of the ROC:
     As we saw in Examples 3.1 and 3.2, the ROC of X(s) depends on the nature of d r ) .
  The properties of the ROC are summarized below. We assume that X(s) is a rational
  function of s.
CHAP. 31        LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS




                         (a)                                                            (b)
                                       Fig. 3-2 ROC for Example 3.2.




                    Fig. 3-3 s-plane representation of X ( s ) = (2s + 4)/(s2 + 4s + 3).


Property 1: The ROC does not contain any poles.
Property 2: If x ( t ) is a finiteduration signal, that is, x ( r ) = 0 except in a finite interval r , 5 r 2 r ,
            ( - m < I , and I , < m), then the ROC is the entire s-plane except possibly s = 0 or s = E.

Property 3:   If x ( t ) is a right-sided signal, that is, x ( r ) = 0 for r < r , < m, then the ROC is of the form
                LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS                              [CHAP. 3


               where a,,, equals the maximum real part of any of the poles of X(s). Thus, the ROC is
               a half-plane to the right of the vertical line Reb) = a,,, in the s-plane and thus to the
               right of all of the poles of Xb).
Property 4: If x(t) is a left-sided signal, that is, x(t) = O for t > t, > -=, then the ROC is of the
               form


               where a,,, equals the minimum real part of any of the poles of X(s). Thus, the ROC is
               a half-plane to the left of the vertical line Re(s) =amin
                                                                      in the s-plane and thus to the left
               of all of the poles of X(s).
Property 5:    If x(t) is a two-sided signal, that is, x(t) is an infinite-duration signal that is neither
               right-sided nor left-sided, then the ROC is of the form


               where a, and a, are the real parts of the two poles of X(s). Thus, the ROC is a vertical
               strip in the s-plane between the vertical lines Re(s) = a, and Re(s) = a,.
    Note that Property 1 follows immediately from the definition of poles; that is, X(s)is
infinite at a pole. For verification of the other properties see Probs. 3.2 to 3.7.


3 3 LAPLACE TRANSFORMS OF SOME COMMON SIGNALS
A.     Unit Impulse Function S( t ):
        Using Eqs. (3.3) and (1.20), we obtain

                                 J [ s ( t ) ]=   /-
                                                  -m
                                                       s ( t ) e - " dt = 1   all s


B. Unit Step Function u ( t 1:




where O + = lim, ,"(0    + €1.
C. Laplace Transform Pairs for Common Signals:
        The Laplace transforms of some common signals are tabulated in Table 3-1. Instead of
     having to reevaluate the transform of a given signal, we can simply refer to such a table
     and read out the desired transform.


3.4 PROPERTIES OF THE LAPLACE TRANSFORM
         Basic properties of the Laplace transform are presented in the following. Verification
     of these properties is given in Probs. 3.8 to 3.16.
CHAP. 31        LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS



                                  Table 3-1 Some Laplace Transforms Pairs


                                                   1                 All s




                     cos wotu(t)

                     sin wotu(t
                                                 s+a
                     e-"' cos wotu(t)                           Re(s) > - Re(a)
                                             (s+a12+w;




A.     Linearity:
         If




     The set notation A I B means that set A contains set B, while A n B denotes the
     intersection of sets A and B, that is, the set containing all elements in both A and B.
     Thus, Eq. (3.15) indicates that the ROC of the resultant Laplace transform is at least as
     large as the region in common between R , and R 2 . Usually we have simply R' = R , n R , .
     This is illustrated in Fig. 3-4.
            LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS                        [CHAP.


                                                            iw




                               Fig. 3-4     ROC of a , X , ( s ) + a , X , ( s ) .


B. Time Shifting:
     If

                                         ) '-*X(S)               ROC = R
 then                          x ( t - t o ) -e-"[)X ( s 1                R'=R          (3.16)
 Equation (3.16)indicates that the ROCs before and after the time-shift operation are the
 same.

C. Shifting in the s-Domain:
     If


 then                    e + " x ( t )- X ( s    -so)             R' = R + Re(so)       (3.17)
 Equation (3.17 ) indicates that the ROC associated with X ( s - so) is that of X ( s ) shifted
 by Re(s,,).This is illustrated in Fig. 3-5.

D. Time Scaling:
     If
                                   x ( t )+ + X ( S )            ROC = R

 then                           x(at)- -X
                                                la l
                                                       (-              R1=aR
CHAP- 31      LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS




                     (4                                                     (b)
 Fig. 3-5 Effect on the ROC of shifting in the s-domain. ( a ) ROC of X(s); ( b ) ROC of X ( s - so).


 Equation (3.18) indicates that scaling the time variable t by the factor a causes an inverse
 scaling of the variable s by l / a as well as an amplitude scaling of X ( s / a ) by I/ Jal.The
 corresponding effect on the ROC is illustrated in Fig. 3-6.

E. Time Reversal:
     If




          Fig. 3-6 Effect on the ROC of time scaling. (a) ROC of X ( s ) ; ( b ) ROC of X(s/a).
118           LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS                      [CHAP. 3


 then                          x ( - t ) *X(-S)        R' = - R                         (3.19)
 'Thus, time reversal of x ( t ) produces a reversal of both the a- and jw-axes in the s-plane.
 Equation (3.19) is readily obtained by setting a = - 1 in Eq. (3.18).


F. Differentiation in the Time Domain:
       If

                                 ~ ( t++X(S)
                                       )             ROC = R

 then

 Equation (3.20) shows that the effect of differentiation in the time domain is multiplication
 of the corresponding Laplace transform by s. The associated ROC is unchanged unless
 there is a pole-zero cancellation at s = 0.


G.    Differentiation in the s-Domain:
       If

                                 41)
                                   ++X(S)            ROC = R

  then                          -




H. Integration in the Time Domain:
       If



  then

  Equation (3.22) shows that the Laplace transform operation corresponding to time-domain
  integration is multiplication by l/s, and this is expected since integration is the inverse
  operation of differentiation. The form of R' follows from the possible introduction of an
  additional pole at s = 0 by the multiplication by l/s.


I. Convolution:
       1f

                                xdl) * w )           ROC= R,
                                ~ 2 ( ++XZ(S)
                                      4               ROC = R 2
CHAP. 31        LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS


                             Table 3-2 Properties of the Laplace Transform
 Property                            Signal                      Transform                    ROC
                                        x(t)                         X(s)                        R
                                       x,(t)                         x,w                         R1
                                       x2W                           x,w                         R2
 Linearity                   a , x , ( t )+ a 2 x 2 ( l )   a ,X , ( s )+ a , X 2 ( s )     R'IR, nR2
 Time shifting                     x(t - t o )                   e-""X(s)                      R' = R
 Shifting in s                       es"'x(t                      X ( s - so)                  +
                                                                                          R' = R Re(s,)
                                                                     1
 Time scaling                         x( at                        -X(s)                     R' = aR
                                                                    la l
 Time reversal                                                                              R'= - R

 Differentiation in t
                                                                    dX( s )
 Differentiation in s                -t x ( t )                                              Rf=R
                                                                     ds
 Integration
 Convolution


     then                   % ( t ) * ~ 2 0 H) X I ( ~ ) X ~ ( ~ ) R ' I R , n R 2                        (3.23)
     This convolution property plays a central role in the analysis and design of continuous-time
     LTI systems.
         Table 3-2 summarizes the properties of the Laplace transform presented in this
     section.


3.5     THE INVERSE LAPLACE TRANSFORM
    Inversion of the Laplace transform to find the signal x ( t ) from its Laplace transform
 X(s) is called the inverse Laplace transform, symbolically denoted as




A.     Inversion Formula:
         There is a procedure that is applicable to all classes of transform functions that
     involves the evaluation of a line integral in complex s-plane; that is,




     In this integral, the real c is to be selected such that if the ROC of X(s) is a,< Re(s) < a 2 ,
     then a, < c < u2.The evaluation of this inverse Laplace transform integral requires an
     understanding of complex variable theory.
120             LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS                        [CHAP. 3


B.     Use of Tables of Laplace Transform Pairs:
         In the second method for the inversion of X(s), we attempt to express X(s) as a sum
                                     X(s) = X,(s) + . . . +Xn(s)                            (3.26)
     where X,(s), . . ., Xn(s) are functions with known inverse transforms xl(t),. . . ,xn(t). From
     the linearity property (3.15) it follows that
                                      x(t) =xl(t)+     - - +xn(t)                           (3.27)

C. Partial-Fraction Expansion:
         If X(s) is a rational function, that is, of the form



     a simple technique based on partial-fraction expansion can be used for the inversion of
 Xb).
     ( a ) When X(s) is a proper rational function, that is, when m < n:
1. Simple Pole Case:
      If all poles of X(s), that is, all zeros of D(s), are simple (or distinct), then X(s) can be
     written as



     where coefficients ck are given by




   If D(s) has multiple roots, that is, if it contains factors of the form ( s -pi)', we say that
 pi is the multiple pole of X(s) with multiplicity r . Then the expansion of X(s) will consist of
 terms of the form




     where

     ( b ) When X(s) is an improper rational function, that is, when m 2 n:
           If m 2 n, by long division we can write X(s) in the form



     where N(s) and D(s) are the numerator and denominator polynomials in s, respectively,
     of X(s), the quotient Q(s) is a polynomial in s with degree rn - n, and the remainder R(s)
CHAP. 31      LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS                                           121


  is a polynomial in s with degree strictly less than n. The inverse Laplace transform of X ( s )
  can then be computed by determining the inverse Laplace transform of Q ( s ) and the
  inverse Laplace transform of R ( s ) / D ( s ) .Since R ( s ) / D ( s ) is proper, the inverse Laplace
  transform of R ( s ) / D ( s ) can be computed by first expanding into partial fractions as given
  above. The inverse Laplace transform of Q ( s ) can be computed by using the transform
  pair




3.6 THE SYSTEM FUNCTION
A. The System Function:
    In Sec. 2.2 we showed that the output y ( t ) of a continuous-time LTI system equals the
 convolution of the input x ( t ) with the impulse response h ( t ) ; that is,


 Applying the convolution property (3.23), we obtain


 where Y ( s ) , X ( s ) , and H ( s ) are the Laplace transforms of y ( t ) , x ( t ) , and h ( t ) , respec-
 tively. Equation (3.36) can be expressed as



 The Laplace transform H ( s ) of h ( t ) is referred to as the system function (or the transfer
 function) of the system. By Eq. (3.37), the system function H ( s ) can also be defined as the
  ratio of the Laplace transforms of the output y ( t ) and the input x ( t ) . The system function
 H ( s ) completely characterizes the system because the impulse response h ( t ) completely
 characterizes the system. Figure 3-7 illustrates the relationship of Eqs. (3.35) and (3.36).

B. Characterization of LTI Systems:
     Many properties of continuous-time LTI systems can be closely associated with the
 characteristics of H ( s ) in the s-plane and in particular with the pole locations and the
 ROC.




                           Fig. 3-7 Impulse response and system function.
122             LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS                       [CHAP. 3


I.     Causality:
         For a causal continuous-time LTI system, we have
                                         h(t) =0             t<O
     Since h(t) is a right-sided signal, the corresponding requirement on H(s) is that the ROC
     of H ( s ) must be of the form

                                             R e W > amax
     That is, the R O C is the region in the s-plane to the right of all of the system poles.
     Similarly, if the system is anticausal, then
                                         h(t) =0             t>O
     and h ( t ) is left-sided. Thus, the R O C of H(s) must be of the form

                                             Re( s ) < %in
     That is, the ROC is the region in the s-plane to the left of all of the system poles.
2. Stabilio:
         In Sec. 2.3 we stated that a continuous-time LTI system is B I B 0 stable if and only if
     [Eq. (2-2111



     The corresponding requirement on H(s) is that the R O C of H ( s ) contains the jw-axis
     (that is, s = j w ) (Prob. 3.26).
3. Causal and Stable Systems:
         If the system is both causal and stable, then all the poles of H(s) must lie in the left
     half of the s-plane; that is, they all have negative real parts because the ROC is of the
     form Re(s) >amax,and since the jo axis is included in the ROC, we must have a,, < 0.

C. System Function for LTI Systems Described by Linear Constant-Coefficient Differential
   Equations:
         In Sec. 2.5 we considered a continuous-time LTI system for which input x ( t ) and
     output y(t) satisfy the general linear constant-coefficient differential equation of the form




     Applying the Laplace transform and using the differentiation property (3.20) of the
     Laplace transform, we obtain
CHAP. 31     LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS



 or

 Thus,




 Hence, H(s) is always rational. Note that the ROC of H(s) is not specified by Eq. (3.40)
 but must be inferred with additional requirements on the system such as the causality or
 the stability.

D. Systems Interconnection:
    For two LTI systems [with hl(t) and h2(t), respectively] in cascade [Fig. 3-Nu)], the
 overall impulse response h(t) is given by [Eq. (2.811, Prob. 2.141


 Thus, the corresponding system functions are related by the product


 This relationship is illustrated in Fig. 3-8(b).
     Similarly, the impulse response of a parallel combination of two LTI systems
 [Fig. 3-9(a)] is given by (Prob. 2.53)


 Thus,


 This relationship is illustrated in Fig. 3-9(b).




  Fig. 3-8 Two systems in cascade. ( a ) Time-domain representation; ( b )s-domain representation.
                 LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS                            [CHAP. 3




                                                      (b)
     Fig. 3-9 Two systems in parallel. ( a ) Time-domain representation; Ib) s-domain representation.



3.7 THE UNILATERAL LAPLACE TRANSFORM
A.     Definitions:
        The unilateral (or one-sided) Laplace transform X,(s) of a signal x ( t ) is defined as
     [Eq. (3.5)l




     The lower limit of integration is chosen to be 0- (rather than 0 or O+) to permit x(t) to
     include S(t) or its derivatives. Thus, we note immediately that the integration from 0- to
     O + is zero except when there is an impulse function or its derivative at the origin. The
     unilateral Laplace transform ignores x ( t ) for t < 0. Since x ( t ) in Eq. (3.43) is a right-sided
     signal, the ROC of X,(s) is always of the form Re(s) > u,,, that is, a right half-plane in
     the s-plane.


B. Basic Properties:
         Most of the properties of the unilateral Laplace transform are the same as for the
     bilateral transform. The unilateral Laplace transform is useful for calculating the response
     of a causal system to a causal input when the system is described by a linear constant-
     coefficient differential equation with nonzero initial conditions. The basic properties of the
     unilateral Laplace transform that are useful in this application are the time-differentiation
     and time-integration properties which are different from those of the bilateral transform.
     They are presented in the following.
CHAP. 31      LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS


I . Differentiation in the Time Domain:




  provided that lim ,,
                     ,x(t )e-"' = 0. Repeated application of this property yields




  where

2. Integration in the Time Domain:




C. System Function:
      Note that with the unilateral Laplace transform, the system function H ( s ) = Y ( s ) / X ( s )
  is defined under the condition that the LTI system is relaxed, that is, all initial conditions
  are zero.

D. Transform Circuits:
      The solution for signals in an electric circuit can be found without writing integrodif-
  ferential equations if the circuit operations and signals are represented with their Laplace
  transform equivalents. [In this subsection the Laplace transform means the unilateral
  Laplace transform and we drop the subscript I in X,(s).] We refer to a circuit produced
  from these equivalents as a transform circuit. In order to use this technique, we require the
  Laplace transform models for individual circuit elements. These models are developed in
  the following discussion and are shown in Fig. 3-10. Applications of this transform model
  technique to electric circuits problems are illustrated in Probs. 3.40 to 3.42.
I . Signal Sources:


  where u ( t ) and i ( t ) are the voltage and current source signals, respectively.
2. Resistance R:
126                LAPLACE TRANSFORM AND CONTINUOUS-TIMELTI SYSTEMS                          [CHAP. 3


 Circuit element                                             Representation




 Voltage source




 Current source




 Resistance




 Inductance




  Capacitance




                                                                                      V(s)
                   Fig. 3-10 Representation of Laplace transform circuit-element models.
CHAP. 31       LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS                                      127


3. Inductance L:
                                 di(t )
                                        t,V ( s )= sLI(s) - L i ( 0 - )
                                ~ ( t=)L -                                         (3.50)
                                  dt
  The second model of the inductance L in Fig. 3-10 is obtained by rewriting Eq. (3.50) as
                                                            1            1
                                       i ( t )t,I ( s ) = - V ( s )
                                                          sL
                                                                      + -i(O-)
                                                                        S
                                                                                                    (3.51)

4. Capacitance C:
                                    d m
                        i ( t ) = C-    t* I ( s ) = sCV(s) - C u ( 0 - )           (3.52)
                                     dt
  The second model of the capacitance C in Fig. 3-10 is obtained by rewriting Eq. (3.52) as
                                                            1            1
                                       u ( t )t* V ( s )= - I ( s )
                                                          sc
                                                                      + -u(O-)
                                                                        S
                                                                                                    (3.53)




                                             Solved Problems

LAPLACE TRANSFORM

3.1.   Find the Laplace transform of
       ( a ) x ( t ) = -e-atu( - t )
       (b) x(t)=ea'u(-t)
       ( a ) From Eq. (3.3)
                                                  m
                                 (       ) = - ( e - a f u ( - r ) e - f l d t = - (O-e-("")' d f




             Thus, we obtain
                                                                 1
                                          -e-"'u( - I )   H   -
                                                              s+a
       ( b ) Similarly,
                LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS                                                [CHAP. 3


              Thus, we obtain
                                                                           1
                                                ealu( - t ) H - -                         Re(s) < a
                                                                        s-a

3.2.   A finite-duration signal x ( t ) is defined as
                                                                               t,I t I t ,
                                                              =0               otherwise
       where I , and I, are finite values. Show that if X ( s ) converges for at least one value of
       s , then the ROC of X ( s ) is the entire s-plane.
             Assume that X(s) converges at s = a,;then by Eq. (3.3)




       Since (u,- 0,) > 0, e-(ul-"~)l is a decaying exponential. Then over the interval where x ( t ) + 0,
       the maximum value of this exponential is e-("l-"o)'l, and we can write



       Thus, X(s) converges for Re(s) = a, > u,,.By a similar argument, if a, < u,, then

                                /I2     (   "    1   1   dl < e ( w ~ - ~ l~ ' )' ll ~~ ( r ) l e - ~ ~ ' <d m
                                                                                                             t     (3.57)
                                '   1                                            'I


       and again X(s) converges for Re(s) = u, <u,. Thus, the ROC of X(s) includes the entire
       s-plane.

3.3.   Let

                                                ~ ( t=)                         O I t l T
                                                                                otherwise
       Find the Laplace transform of x ( t ) .
             By Eq. (3.3)




                                            -
                                            - --                                                                   ( 3.58)
                                                e
                                                     s + a                , s + a [ 1 -e-(s+u)T~
       Since x(f is a finite-duration signal, the ROC of X(s) is the entire s-plane. Note that from Eq.
       (3.58) it appears that X(s) does not converge at s = -a. But this is not the case. Setting
CHAP. 31         LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS


       s = -a in the integral in Eq. (3.581, we have



       The same result can be obtained by applying L'Hospitalls rule to Eq. (3.58).

3.4.   Show that if x ( t ) is a right-sided signal and X(s)converges for some value of s, then
       the R O C of X ( s ) is of the form


                equals the maximum real part of any of the poles of X ( s ) .
       where amax
             Consider a right-sided signal x(t) so that


       and X(s) converges for Re(s) = a,. Then




       Thus, X(s) converges for Re(s) = a , and the ROC of X(s) is of the form Re($) > a ( , . Since the
       ROC of X(s) cannot include any poles of X(s), we conclude that it is of the form

                                                        Re( s > ~ m a x
       where a,,,,,
                  equals the maximum real part of any of the poles of X(s).

3.5.   Find the Laplace transform X ( s ) and sketch the pole-zero plot with the ROC for the
       following signals x( t ):
       ( a ) x ( t )=e-"u(t) +eP3'u(t)
       ( b ) x ( t ) =e-"u(t) + e2'u(-t)
       (c) x ( t ) = e 2 ' u ( t )+ e - 3 ' u ( - t )
       (a)    From Table 3-1
       LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS                        [CHAP. 3




                                                                    (b)
                                          Fig. 3-11


      We see that the ROCs in Eqs. (3.59) and (3.60) overlap, and thus,



                                                             5
    From Eq. (3.61) we see that X(s) has one zero at s = - and two poles at s = - 2 and
    s = - 3 and that the ROC is Re(s) > - 2, as sketched in Fig. 3-1 l(a).
(b) From Table 3-1




      We see that the ROCs in Eqs. (3.62) and (3.63) overlap, and thus,



      From Eq. (3.64) we see that X(s) has no zeros and two poles at s = 2 and s = - 3 and
      that the ROC is - 3 < Re(s) < 2, as sketched in Fig. 3-1 l(b).
(c)   From Table 3-1




                            e - 3 r ~ -(t )   -
                                           s +3
                                                  --
                                                      1
                                                      Re(s) < - 3                (3.66)

      We see that the ROCs in Eqs. (3.65) and (3.66) do not overlap and that there is no
      common ROC; thus, x(t) has no transform X(s).
CHAP. 31       LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS


3.6.   Let


       Find X(s)and sketch the zero-pole plot and the ROC for a > 0 and a < 0.
           The signal x ( t ) is sketched in Figs. 3-12(a) and ( b ) for both a > 0 and a < 0. Since x ( t ) is
       a two-sided signal, we can express it as

                                           x ( t ) =e-"u(t) +ea'u(-r)                                  (3.67)

       Note that x ( t ) is continuous at t = 0 and x(O-) =x(O) = x ( O + ) = 1 . From Table 3-1




                                                       1
                                     earu( - t ) H - -               Re(s) < a                         (3.69)
                                                     s-a




                                                    (c)
                                                Fig. 3-12
              LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS                               [CHAP. 3



       If a > 0, we see that the ROCs in Eqs. (3.68)and (3.69) overlap, and thus,
                                     1        1      - 2a
                           x ( s )= -    - -= -                   - a < Re(s) < a
                                    s+a     s-a     sZ-aZ
       From Eq. (3.70)we see that X ( s ) has no zeros and two poles at s = a and s = - a and that the
       ROC is - a < Re(s) < a , as sketched in Fig. 3-12(c).If a < 0, we see that the ROCs in Eqs.
       (3.68) and (3.69) do not overlap and that there is no common ROC; thus, X ( I ) has no
       transform X ( s ) .


PROPERTIES OF THE LAPLACE TRANSFORM

3.7.   Verify the time-shifting property (3.161, that is,
                                     x ( t - t o )H e - " o X ( S )       R1=R
           By definition ( 3 . 3 )



       By the change of variables T = t - I , we obtain




       with the same ROC as for X ( s ) itself. Hence,


       where R and R' are the ROCs before and after the time-shift operation.

3.8.   Verify the time-scaling property (3.181, that is,




           By definition ( 3 . 3 )



       By the change of variables 7 = a t with a > 0, we have
                                      I w
                       ( x a )= -          x(r)e-('/")'dr = - X
                                        a -,                          a   ( )
                                                                          -
                                                                                 RP=aR
       Note that because of the scaling s / a in the transform, the ROC of X ( s / a ) is aR. With a < 0,
       we have
CHAP. 31        LAF'LACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS                                                    133


       Thus, combining the two results for a > 0 and a < 0, we can write these relationships as



3.9.   Find the Laplace transform and the associated ROC for each of the following signals:
       ( a ) x ( t ) = S(t - t o )
       ( b ) x ( t ) = u(t - to)
       ( c ) ~ ( t=)e - " [ u ( t ) - u ( t - 5 ) ]
                         ffi


       (dl x(t)=               S(t - k T )
                       k=O
       ( e ) x ( t ) = S(at    + b ) , a , b real constants
       ( a ) Using Eqs. (3.13) and (3.161, we obtain
                                                     S ( I - I,,)    H   e-s'fl         all s

       ( b ) Using Eqs. (3.14) and (3.16), we obtain




       (c)    Rewriting x ( l ) as




              Then, from Table 3-1 and using Eq. (3.161, we obtain




       (d)    Using Eqs. (3.71) and (1.99), we obtain
                                              m                 m
                                                                                        1
                                 ~ ( s= ) C e-.~'T= C (e-sT)li =                                        Re(s) > 0   (3.73)
                                                                                    1 -e s T
                                             k=O              k -0

       ( e ) Let

                                                                     f ( 0= s ( a t )

                                                                     -
             Then from Eqs. (3.13) and (3.18)we have
                                                                                      1
                                                   f ( t ) = S(a1)        F(s)= -                all s
                                                                                     la l

              Now

              Using Eqs. (3.16) and (3.741, we obtain
                                                                         1
                                              X ( s ) = e s b / a ~ (=
                                                                     S )-esh/"                  all s
                                                                             la l
134          LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS                             [CHAP. 3



3.10. Verify the time differentiation property (3.20),that is,




          From Eq. (3.24) the inverse Laplace transform is given by



      Differentiating both sides of the above expression with respect to t, we obtain




      Comparing Eq. ( 3 . 7 7 ) with Eq. (3.76), we conclude that h ( t ) / d t is the inverse Laplace
      transform of sX(s). Thus,

                                                               R'3R

      Note that the associated ROC is unchanged unless a pole-zero cancellation exists at s = 0.

3.11. Verify the differentiation in s property (3.21), that is,




          From definition (3.3)
                                                   -   IIj




      Differentiating both sides of the above expression with respect to s , we have



      Thus, we conclude that




3.12. Verify the integration property (3.22), that is,



          Let




      Then
CHAP. 31      LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS


     Applying the differentiation property (3.20), we obtain
                                                X(s) =sF(s)
     Thus,



     The form of the ROC R' follows from the possible introduction of an additional pole at s = 0
     by the multiplying by l/s.

     Using the various Laplace transform properties, derive the Laplace transforms of the
     following signals from the Laplace transform of u(t).
     ( a ) 6(t)                         ( b ) 6'(t)
     (c) tu(t)                          ( d ) e-"'u(t)
     (e) te-"'u(t)                      (f) coso,tu(t)
     (g) e-"'cos w,tu(t)
     (a)     From Eq. (3.14)we have
                                                 1
                                          u(t) H -            for Re( s) > 0
                                                     S

             From Eq. ( 1.30) we have



           Thus, using the time-differentiation property (3.20), we obtain
                                                         1
                                            S(t) H S -       =1      all s
                                                         S

     ( b ) Again applying the time-differentiation property (3.20) to the result from part (a), we
           obtain
                                               a'(!) H S          all s                        ( 3.78)

     (c)   Using the differentiation in s property (3.211, we obtain




     (dl   Using the shifting in the s-domain property (3.17), we have
                                                         1
                                    e-a'u(t) w -                  Re(s) > -a
                                               s+a
    (el    From the result from part (c) and using the differentiation in s property (3.21), we obtain




    ( f ) From Euler's formula we can write
136            LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS                           [CHAP. 3


             Using the linearity property (3.15) and the shifting in the s-domain property (3.17), we
             obtain




      (g)    Applying the shifting in the s-domain property (3.17) to the result from part (f),we
             obtain




3.14. Verify the convolution property (3.23), that is,



                                                           m
                                  y(t) =x,(t) * x2(t) =   j - x,(r)x2(t - r ) d r
                                                            m


      Then, by definition (3.3)




      Noting that the bracketed term in the last expression is the Laplace transform of the shifted
      signal x2(t - 71, by Eq. (3.16) we have




      with an ROC that contains the intersection of the ROC of X,(s) and X2(s). If a zero of one
      transform cancels a pole of the other, the ROC of Y(s) may be larger. Thus, we conclude that



3.15. Using the convolution property (3.23), verify Eq. (3.22), that is,



            We can write [Eq. (2.601, Prob. 2.21



      From Eq. (3.14)
CHAP. 31     LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS                             137


      and thus, from the convolution property (3.23) we obtain

                                                    -    1
                                        x ( t ) * ~ ( t ) -X(S)
                                                         5

      with the ROC that includes the intersection of the ROC of X(s) and the ROC of the Laplace
      transform of u( t 1. Thus,




INVERSE LAPLACE TRANSFORM

3.16. Find the inverse Laplace transform of the following X(s):
                      1
      ( a ) X ( s > = -, Re(s) > - 1
                    s+l
                     1
      (b) X ( s ) = -, Re(s) < - 1
                    s+l
                      S
      ( c ) X(s) = -, Re(s) > 0
                   s2+4
                       s+l
      (dl X(s) =               , Re(s) > - 1
                   ( s + 1)'+4
      (a)   From Table 3-1 we obtain



      ( b ) From Table 3-1 we obtain
                                             ~ ( t =) -e-'u(-t)

      (c)   From Table 3-1 we obtain
                                              x ( t ) = cos2tu(t)

      ( d ) From Table 3-1 we obtain
                                            ~ ( t =) e-'cos2tu(t)


3.17. Find the inverse Laplace transform of the following X(s):
              LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS                                     [CHAP. 3


      Expanding by partial fractions, we have



             Using Eq. (3.30), we obtain




             Hence,



      (a) The ROC of X(s) is Re(s) > - 1. Thus, x(t) is a right-sided signal and from Table 3-1 we
          obtain
                                 x ( t ) = eP'u(t) + e - 3 ' ~ ( t )= ( e - ' + e - 3 ' ) ~ ( t )
      ( b ) The ROC of X(s) is Re(s) < -3. Thus, x(t) is a left-sided signal and from Table 3-1 we
            obtain
                           x ( t ) = -e-'u(-t)      - eC3'u( -1) = - ( e - '       +e-3')u( -1)
      (c) The ROC of X(s) is - 3 < Re(s) < - 1. Thus, x(t) is a double-sided signal and from
          Table 3-1 we obtain



3.18. Find the inverse Laplace transform of



          We can write


      Then




      where
CHAP. 31       LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS


      Thus,



      The ROC of X(s) is Re(s) > 0.Thus, x ( t ) is a right-sided signal and from Table 3-1 we obtain




      into the above expression, after simple computations we obtain




      Alternate Solution:
              We can write X(s) as



      As before, by Eq. (3.30) we obtain



      Then we have



      Thus,




      Then from Table 3-1 we obtain




3.19. Find the inverse Laplace transform of



          We see that X(s) has one simple pole at s = - 3 and one multiple pole at s = -5 with
      multiplicity 2. Then by Eqs. (3.29) and (3.31)we have
               LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS                            [CHAP. 3



      By Eqs. (3.30) and (3.32) we have




      Hence,




      The ROC of X(s) is R d s ) > -3. Thus, x(t) is a right-sided signal and from Table 3-1 we
      obtain




          Note that there is a simpler way of finding A , without resorting to differentiation. This is
      shown as follows: First find c , and A, according to the regular procedure. Then substituting the
      values of c , and A, into Eq. (3.84), we obtain




      Setting s = 0 on both sides of the above expression, we have



      from which we obtain A , =


3.20. Find the inverse Laplace transform of the following X(s):
                   2s+ 1
      ( a ) X(s) = -, Re(s) > -2
                   s+2


                    s3 + 2s' + 6
     (c)   X(S)=                 , Re(s) > 0
                       s z + 3s
                     2s + 1        +
                              2(s 2) - 3
                                         =2- -
                                                3
     (a)   X ( s ) = --     -
                     s +2        s 2+         s+2
           Since the ROC of X(s) is Re(s) > -2, x ( t ) is a right-sided signal and from Table 3-1 we
           obtain
( b ) Performing long division, we have




      Let



      where




      Hence,



      The ROC of X(s) is Re(s) > - 1. Thus, x ( r ) is a right-sided signal and from Table 3-1
      we obtain


(c)   Proceeding similarly, we obtain




      Let




      where




      Hence,



      The ROC of X(s) is Re(s) > 0.Thus, x(t) is a right-sided signal and from Table 3-1 and
      Eq. (3.78) we obtain


      Note that all X(s) in this problem are improper fractions and that x(t) contains S(t) or
      its derivatives.
142           LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS                                              [CHAP. 3



3.21. Find the inverse Laplace transform of
                                           2 + 2se-" + 4eP4'
                              X(s) =                                             Re(s) > - 1
                                                s2+ 4 s + 3
           We see that X ( s ) is a sum


      where
                                    2                              2s                               4
                   X I ( $ )= s 2 + 4s + 3        X 2 ( s ) = s t + 4s + 3          X A s ) = s 2 + 4s + 3

      If
                           x l ( f) - X d s )        x2(t) # X Z ( S )           ~ 3 ( f- X 3 ( s )

      then by the linearity property (3.15) and the time-shifting property (3.16) we obtain
                                        ~ ( t= )x l ( t ) + x 2 ( t - 2 ) + x 3 ( t - 4 )                      (3.85)
      Next, using partial-fraction expansions and from Table 3-1, we obtain




3.22. Using the differentiation in s property (3.211, find the inverse Laplace transform of



           We have




      and from Eq. (3.9) we have
                                                  1
                                       e-"u(t) o -                       Re(s) > -a
                                                 s+a
      Thus, using the differentiation in s property (3.21), we obtain
                                                    X ( I ) = te-"'u(t)
CHAP. 31        LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS


SYSTEM FUNCTION

3.23. Find the system function H(s)and the impulse response h ( t ) of the RC circuit in Fig.
      1-32 (Prob. 1.32).
      ( a ) Let



           In this case, the RC circuit is described by [Eq. (1.105)]




           Taking the Laplace transform of the above equation, we obtain




           Hence, by Eq. (3.37) the system function H(s) is




           Since the system is causal, taking the inverse Laplace transform of H(s), the impulse
           response h(t ) is




      ( b ) Let


           In this case, the RC circuit is described by [Eq. (1.107)l




           Taking the Laplace transform of the above equation, we have




                                                              1
           or                              ( s + &)Y(S)    = Rsx(s)


           Hence, the system function H(s) is
                LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS                           [CHAP. 3


              In this case, the system function H(s) is an improper fraction and can be rewritten as




              Since the system is causal, taking the inverse Laplace transform of H(s), the impulse
              response h(t ) is




             Note that we obtained different system functions depending on the different sets of input
             and output.


3.24. Using the Laplace transform, redo Prob. 2.5.
            From Prob. 2.5 we have
                             h ( t ) = e-"'u(t)           ~ ( t =)e a ' u ( - t )    a>O
      Using Table 3-1, we have
                                                1
                                        H(s) = -                    Re(s) > -a
                                               s+a
                                                         1
                                        X(s) = - -                      Re(s) < a
                                                 s-a
      Thus,




      and from Table 3-1 (or Prob. 3.6) the output is




      which is the same as Eq. (2.67).


3.25. The output y ( t ) of a continuous-time LTI system is found to be 2e-3'u(t) when the
      input x ( t is u(t ).
      (a) Find the impulse response h ( t ) of the system.
      (6) Find the output y ( t ) when the input x ( t ) is e-'u(f).
      (a)                                         x(f) = u(t), y(t) = 2e-3'u(t)
             Taking the Laplace transforms of x(t) and                   we obtain
CHAP. 31      LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS


            Hence, the system function H(s) is




            Rewriting H(s) as




            and taking the inverse Laplace transform of H(s), we have



            Note that h ( t ) is equal to the derivative of 2 e - " d l ) which is the step response s(r) of
            the system [see Eq. (2.1311.
                                                                  I
                                      x ( t ) = e - ' d t ) ++   -      Re(s)> - 1
                                                                 s+l
            Thus,




            Using partial-fraction expansions, we get




            Taking the inverse Laplace transform of Y(s), we obtain

                                              y ( t ) = (-e-' + 3e-")u(r)


3.26. If a continuous-time LTI system is B I B O stable, then show that the ROC of its system
      function H ( s ) must contain the imaginary axis, that is, s = jo.
          A continuous-time LTI system is BIBO stable if and only if its impulse response h ( t ) is
      absolutely integrable, that is [Eq. (2.2111,



      By Eq. (3.3)



      Let s = jw. Then




      Therefore, we see that if the system is stable, then H(s) converges for s = jo. That is, for a
      stable continuous-time LTI system, the ROC of H(s) must contain the imaginary axis s = j w .
146            LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS                                     [CHAP. 3


3.27. Using the Laplace transfer, redo Prob. 2.14.
      ( a ) Using Eqs. ( 3 . 3 6 ) and ( 3 . 4 0 , we have
                                           Y ( s )=X(s)H,(s)H,(s) = X ( s ) H ( s )
             where H ( s ) = H , ( s ) H , ( s ) is the system function of the overall system. Now from Table
             3-1 we have




             Hence,



             Taking the inverse Laplace transfer of H ( s ) , we get
                                                   h ( t )=2(ep' -e-2')u(t)
      (b)    Since the ROC of H ( s ) , Re(s) > - 1, contains the jo-axis, the overall system is stable.

3.28. Using the Laplace transform, redo Prob. 2.23.
            The system is described by



      Taking the Laplace transform of the above equation, we obtain
                             s Y ( s ) + a Y ( s ) =X ( s )     or      ( s + a ) Y ( s ) =X ( s )
      Hence, the system function H ( s ) is



      Assuming the system is causal and taking the inverse Laplace transform of H ( s ) , the impulse
      response h ( t ) is
                                                      h ( t ) =e-"'u(t)
      which is the same as Eq. (2.124).

3.29. Using the Laplace transform, redo Prob. 2.25.
            The system is described by
                                             yf(t)+2y(t) = x ( t ) +xl(t)
      Taking the Laplace transform of the above equation, we get
                                           s Y ( s ) + 2 Y ( s ) =X ( s ) +s X ( s )
      or                                      ( s + 2 ) Y ( s )= ( s + l ) X ( s )
CHAP. 31      LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS


      Hence, the system function H(s) is



      Assuming the system is causal and taking the inverse Laplace transform of H(s), the impulse
      response h(t ) is



3.30. Consider a continuous-time LTI system for which the input x ( t ) and output y ( t ) are
      related by
                                          ) yl(t) - 2y(t) =x(t)
                                      ~"(1+                                                   (3.86)

      ( a ) Find the system function H(s).
      ( b ) Determine the impulse response h ( t ) for each of the following three cases: (i)
            the system is causal, (ii) the system is stable, (iii) the system is neither causal nor
            stable.
      (a)   Taking the Laplace transform of Eq. (3.86),we have
                                        s 2 ~ ( s+) sY(s) - 2Y(s) = X ( s )
            or                              ( s 2 + s - ~ ) Y ( s )= X ( s )
            Hence, the system function H(s) is




      ( b ) Using partial-fraction expansions, we get



             (i) If the system is causal, then h(t) is causal (that is, a right-sided signal) and the
                 ROC of H(s) is Re(s) > 1. Then from Table 3-1 we get


            (ii)   If the system is stable, then the ROC of H(s) must contain the jo-axis. Conse-
                   quently the ROC of H(s) is - 2 < Re(s) < 1. Thus, h(t) is two-sided and from
                   Table 3-1 we get


            (iii) If the system is neither causal nor stable, then the ROC of H(s) is Re(s) < -2.
                  Then h(r) is noncausal (that is, a left-sided signal) and from Table 3-1 we get



331. The feedback interconnection of two causal subsystems with system functions F ( s )
     and G ( s ) is depicted in Fig. 3-13. Find the overall system function H ( s ) for this
     feedback system.
148              LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS                         [CHAP. 3




                                                          -
                                       Fig. 3-13 Feedback system.

        Let
        Then,
                                                    Y ( s ) = E ( s )F ( s )                 (3.87)
                                                    R(s)= Y(s)G(s)                           (3.88)
        Since
                                                   e ( t )= x ( t )+ r ( t )
        we have
                                                  E ( s ) =X ( s ) + R ( s )                 (3.89)
        Substituting Eq. (3.88) into Eq. (3.89) and then substituting the result into Eq. (3.87), we
        obtain
                                          Y ( s ) = [ X ( s )+ Y ( s ) G ( s ) l F ( s )
        or                            [ l - ~ ( s ) G ( s~) ]( s =) F ( s )X ( s )
        Thus, the overall system function is




UNILATERAL LAPLACE TRANSFORM

3.32. Verify Eqs. ( 3 . 4 4 ) and ( 3 . 4 5 ) ,that is,
                d-41)
       (a)      -H s X I ( s )- x ( O - )
                  dl



       ( a ) Using Eq. (3.43)and integrating by parts, we obtain




              Thus, we have
CHAP. 31     LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS


      (b) Applying the above property to signal xt(t) = du(t)/dt, we obtain




                Note that Eq. (3.46) can be obtained by continued application of the above proce-
            dure.

3.33. Verify Eqs. (3.47) and (3.481, that is,
                          1
      (a)    L-X(T) d~   ++   -X,(S)
                              S




      (a)   Let


            Then

            Now if
                                                 dl)++G,(s)
            then by Eq. (3.44)
                                       X1(s) =sG1(s) -g(O-) =sGI(s)
            Thus,




      (b)   We can write



            Note that the first term on the right-hand side is a constant. Thus, taking the unilateral
            Laplace transform of the above equation and using Eq. (3.47), we get




3.34. ( a ) Show that the bilateral Laplace transform of x ( t ) can be computed from two
            unilateral Laplace transforms.
      (b) Using the result obtained in part ( a ) , find the bilateral Laplace transform of
            e-21rl.
150            LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS                                                 [CHAP. 3



      ( a ) The bilateral Laplace transform of x ( t ) defined in Eq. (3.3) can be expressed as




             Now                          / : x ( t ) e p " dl = X , ( s )     R e ( s ) > o+                      (3.92)
             Next. let




             Then         ~ , ~ x ( - ~ ) e=     /   ffi

                                           " d r~ ( - r ) e - ' ~ ' ~ =' dXt; ( - s )
                                                  0-
                                                                                                R e ( s ) < o-     (3.94)

             Thus, substituting Eqs. (3.92)and (-3.94)into Eq. (3.91),we obtain
                                      X(s) =X,(s) +X,( - s )                  a + <R e ( s ) < a -                 (3.95)

      (b)                                                  X ( t ) = e-21'I
             ( 1 ) x(t   = e-2' for t    > 0, which gives



             ( 2 ) x(t ) = e2' for t < 0. Then x ( - t ) = e-2' for t > 0, which gives



             Thus,



             ( 3 ) According to Eq. (3.95),we have




            which is equal to Eq. (3.701, with a = 2, in Prob. 3.6.

3.35. Show that
      ( a ) ~ ( 0 ' )= lim s X , ( s )                                                                            (3.97)
                         s-m
      ( b ) lim x ( t ) = lirn s X , ( s )                                                                         (3.98)
             t +=              s -0
      Equation ( 3 . 9 7 ) is called the initial value theorem, while Eq. (3.98)is called the final
      calue theorem for the unilateral Laplace transform.
CHAP. 31     LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS


      (a)   Using Eq. (3.441, we have

                            SX,(S) -x(o-)     =   / m-
                                                     k ( ' ) e-"
                                                      dt
                                                      0-

                                              = /O'd'oe-s'dt
                                                      0-   dt
                                                                             +cT W t ) e -" dt


                                              =x(t)E?+    /o+ -   a
                                                                 dt
                                                                         dt  e-st




                                              =x(O+) - x ( o - ) + / - W
                                                                       - f ) e-s,dt
                                                                    o+ dt
            Thus,




            and                lirn sX,(s) =x(O+) +
                            5-07




          since lim, ,, e-" = 0.
      (b) Again  using Eq. (3.441, we have

                                   lirn [sX,(s) - x(0-)] = 1im
                                   s-o                          s-o
                                                                       / a &-
                                                                        0-
                                                                            (t)
                                                                            dt
                                                                                ePS'dt

                                                                               lirn e-"'




                                                            = lirn x(t ) - ~        ( 0 ~ )
                                                                t-rm

            Since                  lirn [sX,(s) -x(0-)]     = lim [sx,(s)]          -x(O-)
                                   s-ro                          s-ro
            we conclude that
                                               limx(t) = lirnsX,(s)
                                              t--t-             s-ro



3.36. T h e unilateral Laplace transform is sometimes defined as



      with O+ as the lower limit. (This definition is sometimes referred to as the 0
                                                                                   '
      definition.)
      ( a ) Show that
               LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS                                [CHAP. 3


      ( b ) Show that




      (a)     Let x ( t ) have unilateral Laplace transform X,?(s). Using Eq. (3.99) and integrating by
              parts, we obtain




             Thus, we have



      ( b ) By definition (3.99)

                                                      ,/0' u ( t ) e - " d t = ,/ e-"dt
                                                        Oe                     OC

                                   P + { u ( t ) )=
                                                                               0'

                                                         1
                                                                                    Re(s) > 0

              From Eq. (1.30)we have



             Taking the 0' unilateral Laplace transform of Eq. (3.103) and using Eq. (3.100), we
             obtain



             This is consistent with Eq. (1.21);that is,



             Note that taking the 0 unilateral Laplace transform of Eq. (3.103)and using Eq. (3.44),
             we obtain




APPLICATION OF UNILATERAL LAPLACE TRANSFORM

337. Using the unilateral Laplace transform, redo Prob. 2.20.
            The system is described by
                                              ~ ' ( t )+ a y ( t ) = x ( l )
     with y(0) = yo and x(t = ~ e - ~ 'tu1. (
CHAP. 31      LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS


      Assume that y(0) = y(0-1. Let
                                                   ~ ( t-Y,(s)
                                                         )
      Then from Eq. (3.44)
                                    y l ( t )-sY,(s)        -y(O-) =sY,(s) - Y o
      From Table 3-1 we have
                                                             K
                                  x ( t )-X,(S)      =-                    R e ( s ) > -b
                                                            s+b
      Taking the unilateral Laplace transform of Eq. (3.1041,we obtain




      or

      Thus,
                                                       K
                                        Y1(s)= -+
                                               s+a (s+a)(s+b)
      Using partial-fraction expansions, we obtain



      Taking the inverse Laplace transform of Y,(s),we obtain
                                                             K
                                          [
                                 y ( t ) = yoe-"+ -
                                                  a-b
                                                      (e-br - e-a:)



      which is the same as Eq. (2.107). Noting that y(O+) = y(0) = y(0-) = yo, we write y ( t ) as
                                                        K
                               y ( t ) = y0e-O1 + -( e - b r - e - a ' )                   t20
                                                  a-b

3.38. Solve the second-order linear differential equation
                                        y"(t)   + 5 y 1 ( t )+ 6 y ( t ) = x ( t )
      with the initial conditions y(0) = 2, yl(0) = 1, and x ( t ) = e P ' u ( t ) .
           Assume that y(0) = y(0-) and yl(0)= yl(O-). Let

                                                   ~ ( t-Y,(s)
                                                         )
      Then from Eqs. (3.44) and (3.45)


                          yN(t)
      From Table 3-1 we have
                                 -  y l ( t ) -sY,(s)       - y ( 0 - ) = s Y , ( s )- 2
                                     s2Y1(s)- sy(0-) - y l ( O - ) = s 2 Y J s ) - 2s - I
              LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS                             [CHAP. 3


      Taking the unilateral Laplace transform of Eq. (3.105),we obtain




      Thus,



      Using partial-fraction expansions, we obtain



      Taking the inverse Laplace transform of Yl(s),we have


      Notice that y(O+) = 2 = y(O) and y'(O+)= 1 = yl(0);and we can write y ( f ) as



3.39. Consider t h e RC circuit shown in Fig. 3-14(a). T h e switch is closed at t = 0 . Assume
      that there is a n initial voltage o n the capacitor and uC(Om)
                                                                   = u,,.

      ( a ) Find the current i ( t ) .
      ( 6 ) Find the voltage across the capacitor u c ( t ) .




                                               vc (0-
                                                    )=v,
                          (a)                                                  (b)
                                         Fig. 3-14 RC circuit.


      ( a ) With the switching action, the circuit shown in Fig. 3-14(a) can be represented by the
            circuit shown in Fig. 3-14(b)with i.f,(t)= Vu(t).When the current i ( t ) is the output and
            the input is r,(t), the differential equation governing the circuit is
                                                     1
                                           Ri(t) +   -1'
                                                     C -,
                                                           i ( r ) d~ = c s ( t )               (3.106)

            Taking the unilateral Laplace transform of Eq. (3.106) and using Eq. (3.481, we obtain
CHAP. 31     LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS




                                                             1 I
            Now                                  ( t )= -        i ( r )dr
                                                             C -,

            and

            Hence, Eq. (3.107) reduces to



            Solving for I(s), we obtain
                                        v-0,   1      v-u,   1
                                 I(s) = -           =-
                                         s R + 1/Cs    R s + l/RC
            Taking the inverse Laplace transform of I(s), we get




      ( b ) When u,(r) is the output and the input is u,(t), the differential equation governing the
            circuit is



            Taking the unilateral Laplace transform of Eq. (3.108) and using Eq. (3.441, we obtain




            Solving for V,(s),we have
                                               v     1
                                    V c ( s )= -          + uo
                                               RCs(s+l/RC) s+l/RC




            Taking the inverse Laplace transform of I/,(s), we obtain
                                   u c ( t ) = V [ 1 - e - t / R C ] u ( t )+ ~ , e - ' / ~ ~ u ( t )
            Note that uc(O+)= u, = u,(O-). Thus, we write uc(t) as
                                  u c ( t ) = V ( 1 -e-'IRC) + ~ ~ e - ' / t~r O
                                                                               ~


3.40. Using the transform network technique, redo Prob. 3.39.
      (a)   Using Fig. 3-10, the transform network corresponding to Fig. 3-14 is constructed as shown
            in Fig. 3-15.
              LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS                               [CHAP. 3




                                    Fig. 3-15 Transform circuit,


            Writing the voltage law for the loop, we get



            Solving for I(s), we have
                                        v-u,     1    --
                                                        v-u,    1
                                  I(s)= -
                                          s  R + 1/Cs    R s + l/RC
            Taking the inverse Laplace transform of I(s), we obtain



      ( b ) From Fig.3.15 we have



            Substituting I ( s ) obtained in part (a) into the above equation, we get




            Taking the inverse Laplace transform of V,(s),we have




3.41. In the circuit in Fig. 3-16(a) the switch is in the closed position for a long time before
      it is opened at t = 0. Find the inductor current i(t) for t 2 0.
          When the switch is in the closed position for a long time, the capacitor voltage is charged
      to 10 V and there is no current flowing in the capacitor. The inductor behaves as a short circuit,
      and the inductor current is = 2 A.
          Thus, when the switch is open, we have i ( O - ) = 2 and u,(O-) = 10; the input voltage is 10
      V, and therefore it can be represented as lOu(t). Next, using Fig. 3-10, we construct the
      transform circuit as shown in Fig. 3-16(b).
CHAP. 31       LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS




                                                                         (b)

                                              Fig. 3-16


            From Fig. 3-16(b) the loop equation can be written as




      or

      Hence,




      Taking the inverse Laplace transform of I(s), we obtain



      Note that i(O+) = 2 = i(0-); that is, there is no discontinuity in the inductor current before and
      after the switch is opened. Thus, we have




3.42. Consider the circuit shown in Fig. 3-17(a). The two switches are closed simultaneously
      at t = 0. The voltages on capacitors C, and C, before the switches are closed are 1
      and 2 V, respectively.
      (a) Find the currents i , ( t ) and i,(t).
      ( b ) Find the voltages across the capacitors at t = 0'
      (a)    From the given initial conditions, we have
                                    uCl(O-) = 1 V         and   L!=~(O-)= 2 V

             Thus, using Fig. 3-10, we construct a transform circuit as shown in Fig. 3-17(b). From
158          LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS                              [CHAP. 3




                                                                                      (b)
                                                Fig. 3-17


           Fig. 3-17(b) the loop equations can be written directly as




           Solving for I,(s) and I,(s) yields




           Taking the inverse Laplace transforms of I , ( s ) and 12(s),we get
                                           i l ( t )= 6 ( t ) + i e - ' l 4 u ( t )
                                           i 2 ( t )= 6 ( t ) - f e - ' / 4 ~ ( t )

      ( b ) From Fig. 3-17(b) we have




           Substituting I,(s) and 12(s)obtained in part ( a ) into the above expressions, we get
CHAP. 31        LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS


              Then, using the initial value theorem (3.971, we have
                                                                     s+l
                                  v , , ( O + ) = lim sVcl(s)= lim -
                                              s 4 m           s-rm
                                                                     1= 1
                                                                    -7
                                                                     S   +a +      + 1= 2 V
                                                                             I
                                                                     S - 7
                                  ucJO+) = lim sVC-(s) = lim --+  =1 +2=3 V
                                              s-+m
                                                               - 27
                                                               s-+m S    +,
              Note that ucl(O+)#u,1(0-) and ucz(O+)# ~ ~ $ 0 -This    ) . is due to the existence of a
              capacitor loop in the circuit resulting in a sudden change in voltage across the capacitors.
              This step change in voltages will result in impulses in i , ( t ) and i 2 ( t ) . Circuits having a
              capacitor loop or an inductor star connection are known as degener~ti~e            circuits.




                                    Supplementary Problems
3.43.   Find the Laplace transform of the following x(t 1:




                                       2s
        ( c ) If a > 0 , X ( s ) = -
                                   s z - ,2 ' - a < Re(s) < a. If a < 0, X ( s ) does not exist since X ( s ) does
              not have an ROC.
        ( d ) Hint: x ( t ) = u ( t ) + u ( - t )
              X ( s ) does not exist since X ( s ) does not have an ROC.
        ( e l Hint: x ( t ) = u ( t ) - u ( - t )
              X ( s ) does not exist since X ( s ) does not have an ROC.


3.44. Find the Laplace transform of x ( t ) given by

                                                                t , _< t s t ,
                                              x(t) =
                                                        0       otherwise

                      1
        Am. X ( s ) = -[e-"I - e-"21, all s
                        S
160             LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS                          [CHAP. 3


3.45.   Show that if X(I) is a left-sided signal and X(s) converges for some value of s, then the ROC
        of X(s) is of the form


                 equals the minimum real part of any of the poles of X(s).
        where amin
        Hint:   Proceed in a manner similar to Prob. 3.4.


3.46.   Verify Eq. (3.21), that is,




        Hint:   Differentiate both sides of Eq. (3.3) with respect to s.


3.47.   Show the following properties for the Laplace transform:
        ( a ) If x ( t ) is even, then X( -s) = X(s); that is, X(s) is also even.
        (b) If ~ ( t isodd,
                          )      then X ( - s ) = -X(s); that is, X(s)is alsoodd.
        (c)   If x ( t ) is odd, then there is a zero in X(s) at s = 0.
        Hint:
        ( a ) Use Eqs. (1.2) and (3.17).
        ( b ) Use Eqs. (1.3) and (3.17).
        ( c ) Use the result from part (b) and Eq. (1.83~).


3.48.   Find the Laplace transform of

                                       x ( t ) = (e-'cos21- Se-*')u(t) + :e2'u(-t)

                                 s+l           5      1   1
        Ans. X ( s ) =                                        , - 1 < Re(s)<2
                          ( ~ + 1 ) ~ + 4S + 2        2s-2

3.49.   Find the inverse Laplace transform of the following X(s);



                             1
        ( b ) X(s) =                   -
                         s(s + l)? '


                      s + l
        (d) X(s) =              , Re(s) > -2
                  s 2 + 4 s + 13
CHAP. 31         LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS


        Am.
        ( a ) x ( r ) = ( 1 - e-' - t e - ' M t )
        ( b ) x ( t )= - 4 - t ) -(l + t ) e - ' d t )
        (c) ~ ( t=)( - 1 + e-' + t e - ' I d - t )
        ( d ) x ( t ) = e - 2 ' ( ~ o s 3-t f sin 3 t ) u ( t )
        ( e l x ( t ) = at sin 2tu(t)
        ( f ) x ( t ) = ( - $e-2'+ Acos3t-t & s i n 3 t ) u ( t )


3.50.   Using the Laplace transform, redo Prob. 2.46.
        Hint:    Use Eq. (3.21) and Table 3-1.


3.51. Using the Laplace transform, show that




        (a)   Use Eq. (3.21) and Table 3-1.
        ( b ) Use Eqs. (3.18) and (3.21) and Table 3-1.


3.52. Using the Laplace transform, redo Prob. 2.54.
        Hint:
        ( a ) Find the system function H ( s ) by Eq. (3.32) and take the inverse Laplace transform of
              H(s).
        ( 6 ) Find the ROC of H ( s ) and show that it does not contain the jo-axis.


3.53. Find the output y ( t ) of the continuous-time LTI system with


        for the each of the following inputs:
        (a) x ( t ) = e-'u(t)
        ( b ) x ( t ) = e-'u(-t)
        Ans.
        ( a ) y ( r ) = (e-'-e-")u(t)
        ( b ) y ( t ) = e-'u(-f)+e- 2 ' ~ ( t )


3.54. The step response of an continuous-time LTI system is given by (1 - e-')u(t). For a certain
      unknown input x ( t ) , the output y ( t ) is observed to be (2 - 3e-' + e-3')u(r). Find the input
      x(t).
         LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS                              [CHAP. 3




                                                    Fig. 3-18


Determine the overall system function H ( s ) for the system shown in Fig. 3-18.
Hint:    Use the result from Prob. 3.31 to simplify the block diagram.
                            S
Am. H ( s ) =
                   s3+3s2+s-2

If x ( t ) is a periodic function with fundamental period T, find the unilateral Laplace transform
of x ( t ) .



Find the unilateral Laplace transforms of the periodic signals shown in Fig. 3-19.




Using the unilateral Laplace transform, find the solution of
                                             y"(t) -y l ( t ) - 6 y ( t ) =et
with the initial conditions y ( 0 ) = 1 and y ' ( 0 ) = 0 for t 2 0.
Am. y ( t ) = - ; e l + f e - 2 ' + ;e3', t z O

Using the unilateral Laplace transform, solve the following simultaneous differential equations:
                                         y l ( t ) +y ( t ) + x f ( r ) + x ( t ) = 1
                                             yl(t) -y(t) -2x(t) =O
with x ( 0 ) = 0 and y ( 0 ) = 1 for t 1 0 .
Ans.    x ( t ) = e-' - 1 , y ( t ) = 2 - e - ' , t r 0

Using the unilateral Laplace transform, solve the following integral equations:




Am.     ( a ) y ( t ) =eat, t 2 0 ; ( 6 ) y ( t ) =e2', t 2 0
CHAP. 31      LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS




                                                         (b)
                                                      Fig. 3-19


3.61. Consider the RC circuit in Fig. 3-20. The switch is closed at t = 0 . The capacitor voltage before
      the switch closing is u,. Find the capacitor voltage for t 2 0.
      Ans.   u , ( t ) = ~ , e - ' / ~1 ~2 ,0


3.62. Consider the RC circuit in Fig. 3-21. The switch is closed at t = 0. Before the switch closing,
      the capacitor C , is charged to u, V and the capacitor C , is not charged.
      ( a ) Assuming c , = c , = c , find the current i ( t ) for t 2 0 .
      ( b ) Find the total energy E dissipated by the resistor R and show that E is independent of R
            and is equal to half of the initial energy stored in C , .




                                                Fig. 3-20 RC circuit.
164           LAPLACE TRANSFORM AND CONTINUOUS-TIME LTI SYSTEMS                               [CHAP. 3




                                        Fig. 3-21   RC circuit.


      (c)   Assume that R = 0 and C , = C , = C . Find the current i ( r ) for I 2 0 and voltages u,1(0+)
            and uC2(0+).
                                                                         Chapter 4

                 The z-Transform and Discrete-Time
                            LTI Systems
4.1 INTRODUCTION
         In Chap. 3 we introduced the Laplace transform. In this chapter we present the
     z-transform, which is the discrete-time counterpart of the Laplace transform. The z-trans-
     form is introduced to represent discrete-time signals (or sequences) in the z-domain ( z is a
     complex variable), and the concept of the system function for a discrete-time LTI system
     will be described. The Laplace transform converts integrodifferential equations into
     algebraic equations. In a similar manner, the z-transform converts difference equations
     into algebraic equations, thereby simplifying the analysis of discrete-time systems.
         The properties of the z-transform closely parallel those of the Laplace transform.
     However, we will see some important distinctions between the z-transform and the
     Laplace transform.


4.2 THE Z-TRANSFORM
        In Sec. 2.8 we saw that for a discrete-time LTI system with impulse response h[n], the
     output y[n] of the system to the complex exponential input of the form z" is


     where




A.     Definition:
         T h e function H ( z ) in Eq. (4.2) is referred to as the z-transform of h[n]. For a general
     discrete-time signal x[n], the z-transform X ( z ) is defined as
                                                      m

                                          X(Z)=              x[n]z-"                               (4.3)
                                                   n = -OD

     T h e variable z is generally complex-valued and is expressed in polar form as


     where r is the magnitude of z and R is the angle of z . The z-transform defined in Eq.
     ( 4 . 3 ) is often called the bilateral (or two-sided) z-transform in contrast to the unilateral (or
166                THE Z-TRANSFORM AND DISCRETE-TIME LTI SYSTEMS                             [CHAP. 4


  one-sided) z-transform, which is defined as



  Clearly the bilateral and unilateral z-transforms are equivalent only if x[n] = 0 for n < 0.
  The unilateral z-transform is discussed in Sec. 4.8. We will omit the word "bilateral"
  except where it is needed to avoid ambiguity.
      As in the case of the Laplace transform, Eq. (4.3) is sometimes considered an operator
  that transforms a sequence x[n] into a function X ( z ) , symbolically represented by


  The x[n] and X ( z ) are said to form a z-transform pair denoted as



B. The Region of Convergence:
      As in the case of the Laplace transform, the range of values of the complex variable z
  for which the z-transform converges is called the region of convergence. T o illustrate the
  z-transform and the associated R O C let us consider some examples.

EXAMPLE 4.1. Consider the sequence
                                      x [ n] =a"u[n]       a real
Then by Eq. (4.3) the z-transform of x [ n ] is



For the convergence of X(z) we require that



Thus, the ROC is the range of values of z for which laz -'I < 1 or, equivalently, lzl > lal. Then



Alternatively, by multiplying the numerator and denominator of Eq. (4.9) by z, we may write X(z) as
                                                  z
                                      X(z) = -            Izl > la1
                                             z-a

Both forms of X ( z ) in Eqs. ( 4 . 9 ) and (4.10) are useful depending upon the application.
From Eq. (4.10) we see that X ( z ) is a rational function of z. Consequently, just as with
rational Laplace transforms, it can be characterized by its zeros (the roots of the numerator
polynomial) and its poles (the roots of the denominator polynomial). From Eq. (4.10) we see
that there is one zero at z = 0 and one pole at z = a . The ROC and the pole-zero plot for
this example are shown in Fig. 4-1. In z-transform applications, the complex plane is
commonly referred to as the z-plane.
CHAP. 41          THE z-TRANSFORM AND DISCRETE-TIME LTI SYSTEMS




                     t 1
                            Unit circle




                  -I ca<O                                                a<-I
                                  Fig.4-1 ROCofthe form lzl>lal.



EXAMPLE 4.2. Consider the sequence

                                          x [ n ] = - a n u [ - n - 11

Its z-transform X(z) is given by (Prob. 4.1)
168               THE Z-TRANSFORMAND DISCRETE-TIME LTI SYSTEMS                      [CHAP. 4


Again, as before, X ( z ) may be written as
                                                  z
                                       X(z) = -           Izl < la1
                                               z-a


Thus, the ROC and the pole-zero plot for this example are shown in Fig. 4-2. Comparing
Eqs. (4.9) and (4.12) [or Eqs. (4.10) and (4.13)], we see that the algebraic expressions of
X ( z ) for two different sequences are identical except for the ROCs. Thus, as in the Laplace




                                  Fig. 4-2 ROC of the form I z I < lal.
CHAP. 41           THE Z-TRANSFORM AND DISCRETE-TIME LTI SYSTEMS                                          169


transform, specification of the z-transform requires both the algebraic expression and the
ROC.


C. Properties of the ROC:
     As we saw in Examples 4.1 and 4.2, the ROC of X ( z ) depends on the nature of x [ n ] .
  The properties of the ROC are summarized below. We assume that X ( Z ) is a rational
  function of z.
Property 1:   The ROC does not contain any poles.
Property 2:    If x [ n ] is a finite sequence (that is, x [ n ] = 0 except in a finite interval N l ~ n s N,,
              where N , and N , are finite) and X(z) converges for some value of z, then the ROC is
              the entire z-plane except possibly z = 0 or z = co.
Property 3:   If x [ n ] is a right-sided sequence (that is, x [ n ] = 0 for n < N, < 03) and X(z) converges
              for some value of z, then the ROC is of the form



              where r,, equals the largest magnitude of any of the poles of X(z). Thus, the ROC is
              the exterior of the circle lzl= r,, in the z-plane with the possible exception of z = m.
Property 4:   If x [ n ] is a left-sided sequence (that is, x [ n l = 0 for n > N , > - 03) and X(z) converges
              for some value of z, then the ROC is of the form



              where r,, is the smallest magnitude of any of the poles of X(z). Thus, the ROC is the
              interior of the circle lzlE rminin the z-plane with the possible exception of z = 0.
Property 5:   If x [ n ] is a two-sided sequence (that is, x [ n ] is an infinite-duration sequence that is
              neither right-sided nor left-sided) and X ( z ) converges for some value of z, then the
              ROC is of the form



              where r , and r, are the magnitudes of the two poles of X(z). Thus, the ROC is an
              annular ring in the z-plane between the circles lzl= r , and lzl = r2 not containing any
              poles.
                   Note that Property 1 follows immediately from the definition of poles; that is, X(z)
              is infinite at a pole. For verification of the other properties, see Probs. 4.2 and 4.5.




4.3   z-TRANSFORMS OF SOME COMMON SEQUENCES
A. Unit Impulse Sequence 61 nl:
      From definition (1.45) and ( 4 . 3 )
                                          m

                             X ( z )=            6 [ n ]z-" = z-O = 1       all z
                                        n = -m
                     THE Z-TRANSFORM AND DISCRETE-TIME LTI SYSTEMS                               [CHAP. 4


     Thus,
                                       6 [ n ]H 1           all z

B.     Unit Step Sequence d n l :
        Setting a = 1 in Eqs. (4.8) to (4.101, we obtain




C.     z-Transform Pairs:
        The z-transforms of some common sequences are tabulated in Table 4-1.

                            Table 4-1. Some Common z-Transform Pairs



                                                                                      All z

                                                                                     lzl > 1

                                                                                     Izl< 1
                                               Z-"'                 All z except 0 if ( m > 0) or m if ( m < 0)
                                            1     Z
                                                                                     Izl > lal
                                         1-az-''2-a




                                         z 2 - (COSn o ) z
(COSRon)u[nl                                                                         lzl> 1
                                      z 2 - (2cos R o )t + 1
                                             (sin n o ) z
(sin R,n)u[n]                                                                        Izl> 1
                                      z 2 - (2cos R,)z + 1
                                         z2- (rcosR0)z
( r n cos R,n)u[n]                                                                    Izl> r
                                     z 2 - (2r cos R o ) z + r 2
                                            ( r sin R,)z
( r nsin R,n)u[nI                                                                     Izl> r
                                     z 2 - (2r cos R,)z + r 2
          O<nsN-1                           1-~ " ' z - ~
(         otherwise                          1- az-'
                                                                                     lzl> 0
CHAP. 41             THE z-TRANSFORM AND DISCRETE-TIME LTI SYSTEMS                          171


4.4 PROPERTIES OF THE 2-TRANSFORM
      Basic properties of the z-transform are presented in the following discussion. Verifica-
  tion of these properties is given in Probs. 4.8 to 4.14.

A. Linearity:
      If
                                    x l b ] ++X1(z)        ROC = R,
                                    ~    2   b -Xz(z)
                                                I           R O C = R,
  then
                     Q I X I [ ~ ]+ a,xz[n] ++alXl(z)   + a2XAz)         R r ~ Rn lR 2   (4.17)
  where a , and a, are arbitrary constants.

B. Time Shifting:
      If
                                        +I    ++X(z)       ROC = R
  then
                          x [ n - n,] -z-"oX(z)           R' = R n {O < (21< m}          (4.18)
Special Cases:




  Because of these relationships [Eqs. (4.19) and (4.20)1, z-' is often called the unit-delay
  operator and z is called the unit-advance operator. Note that in the Laplace transform the
                 '
  operators s - = 1/s and s correspond to time-domain integration and differentiation,
  respectively [Eqs. (3.22) and (3.2011.

C. Multiplication by z,":
      If


  then



  In particular, a pole (or zero) at z = z , in X(z) moves to z = zoz, after multiplication by
  2," and .the ROC expands or contracts by the factor (z,(.
Special Case:
172              THE Z-TRANSFORMAND DISCRETE-TIME LTI SYSTEMS                         [CHAP. 4



  In this special case, all poles and zeros are simply rotated by the angle R, and the ROC is
  unchanged.

D. Time Reversal:
      If


  then



  Therefore, a pole (or zero) in X ( z ) at z = z , moves to l / z , after time reversal. The
  relationship R' = 1 / R indicates the inversion of R , reflecting the fact that a right-sided
  sequence becomes left-sided if time-reversed, and vice versa.

E. Multiplication by n (or Differentiation in 2 ) :
      If
                                  ~ [ n +l + X ( Z )     ROC = R
  then




F. Accumulation:
      If
                                  x[nI + + X ( z )       ROC = R
  then



  Note that C z , _ , x [ k ] is the discrete-time counterpart to integration in the time domain
  and is called the accumulation. The comparable Laplace transform operator for integra-
  tion is l / ~ .

G. Convolution:
      If
                                 %[n] + + X I ( Z )      ROC = R 1
                                 ~ 2 [ n+]+ X 2 ( 4      ROC = R 2
  then
                       XI[.]   * x2bI + + X I ( Z ) X Z ( Z )
                                                         R t 3 R 1n R 2            (4.26)
  This relationship plays a central role in the analysis and design of discrete-time LTI
  systems, in analogy with the continuous-time case.
CHAP. 41             T H E Z-TRANSFORM AND DISCRETE-TIME LTI SYSTEMS                       173


                               Table 4-2. Some Properties of the z-Transform
     Property                        Sequence                Transform         ROC




     Linearity
     Time shifting
     Multiplication by z,"

     Multiplication by einon

     Time reversal

                                                                   &(z)
     Multiplication by n                                     -2-
                                                                    d.?
     Accumulation

     Convolution


H.     Summary of Some z-transform Properties
     For convenient reference, the properties of the z-transform presented above are
  summarized in Table 4-2.


4.5 THE INVERSE Z-TRANSFORM
      Inversion of the z-transform to find the sequence x [ n ] from its z-transform X ( z ) is
  called the inverse z-transform, symbolically denoted as
                                            ~ [ n =]s - ' { X ( z > }                   (4.27)

A. Inversion Formula:
     As in the case of the Laplace transform, there is a formal expression for the inverse
 z-transform in terms of an integration in the z-plane; that is,



 where C is a counterclockwise contour of integration enclosing the origin. Formal
 evaluation of Eq. (4.28) requires an understanding of complex variable theory.

B. Use of Tables of z-Transform Pairs:
        In the second method for the inversion of X(z), we attempt to express X(z) as a sum
                                       X(z) =X,(z) +       . . . +X,(z)                 (4.29)
174             THE Z-TRANSFORM AND DISCRETE-TIME LTI SYSTEMS                        [CHAP. 4


 where X,(z ), . . . , Xn(z ) are functions with known inverse transforms x,[n], . ..,xn[n].
 From the linearity property (4.17) it follows that



C. Power Series Expansion:
     The defining expression for the z-transform [Eq. (4.3)] is a power series where the
 sequence values x[n] are the coefficients of z-". Thus, if X( z) is given as a power series in
 the form




 we can determine any particular value of the sequence by finding the coefficient of the
 appropriate power of 2 - ' . This approach may not provide a closed-form solution but is
 very useful for a finite-length sequence where X(z) may have no simpler form than a
 polynomial in z - ' (see Prob. 4.15). For rational r-transforms, a power series expansion
 can be obtained by long division as illustrated in Probs. 4.16 and 4.17.

D. Partial-Fraction Expansion:
    As in the case of the inverse Laplace transform, the partial-fraction expansion method
 provides the most generally useful inverse z-transform, especially when X t z ) is a rational
 function of z. Let




      Assuming n 2 m and all poles pk are simple, then




 where




 Hence, we obtain



 Inferring the ROC for each term in Eq. (4.35) from the overall ROC of X(z) and using
 Table 4-1, we can then invert each term, producing thereby the overall inverse z-transform
 (see Probs. 4.19 to 4.23).
     If rn > n in Eq. (4.321, then a polynomial of z must be added to the right-hand side of
 Eq. (4.351, the order of which is (m - n). Thus for rn > n, the complete partial-fraction
CHAP. 41        THE z-TRANSFORM AND DISCRETE-TIME LTI SYSTEMS


  expansion would have the form




      If X(Z) has multiple-order poles, say pi is the multiple pole with multiplicity r, then
  the expansion of X(z)/z will consist of terms of the form




  where




4.6   THE SYSTEM FUNCTION OF DISCRETE-TIME LTI SYSTEMS
A. The System Function:
     In Sec. 2.6 we showed that the output y[n] of a discrete-time LTI system equals the
  convolution of the input x[n] with the impulse response h[n]; that is [Eq. (2.3511,


  Applying the convolution property (4.26) of the z-transform, we obtain


  where Y(z), X(z), and H(z) are the z-transforms of y[n], x[n], and h[n], respectively.
  Equation (4.40) can be expressed as




 The z-transform H(z) of h[n] is referred to as the system function (or the transfer
 function) of the system. By Eq. (4.41) the system function H(z) can also be defined as the
 ratio of the z-transforms of the output y[n] and the input x[n.l. The system function H ( z )
 completely characterizes the system. Figure 4-3 illustrates the relationship of Eqs. (4.39)
 and (4.40).




                                   t
                                  X(Z)
                                               t           t
                                                       Y(z)=X(z)H(z)
                                         +    H(z)              t

                       Fig. 4-3   Impulse response and system function.
176              THE Z-TRANSFORMAND DISCRETE-TIME LTI SYSTEMS                            [CHAP. 4


B. Characterization of Discrete-Time LTI Systems:
     Many properties of discrete-time LTI systems can be closely associated with the
  characteristics of H(z) in the z-plane and in particular with the pole locations and the
  ROC.
1. Causality:
      For a causal discrete-time LTI system, we have [Eq. (2.4411


  since h[n] is a right-sided signal, the corresponding requirement on H(z) is that the ROC
  of H ( z ) must be of the form


  That is, the ROC is the exterior of a circle containing all of the poles of H ( z ) in the
  z-plane. Similarly, if the system is anticausal, that is,


  then h[n] is left-sided and the ROC of H ( z ) must be of the form


  That is, the ROC is the interior of a circle containing no poles of H ( z ) in the z-plane.
2. Stability:
      In Sec. 2.7 we stated that a discrete-time LTI system is BIB0 stable if and only if [Eq.
  (2.4911




  The corresponding requirement on H(z) is that the ROC of H(z1 contains the unit circle
  (that is, lzl= 1). (See Prob. 4.30.)
3. Ctzusal and Stable Systems:
      If the system is both causal and stable, then all of the poles of H ( z ) must lie inside the
  unit circle of the z-plane because the ROC is of the form lzl> r,,, and since the unit
  circle is included in the ROC, we must have r,, < 1.


C. System Function for LTI Systems Described by Linear Constant-Coefficient Difference
   Equations:
     !n Sec. 2.9 we considered a discrete-time LTI system for which input x[n] and output
 y[n] satisfy the general linear constant-coefficient difference equation of the form
CHAP. 41              THE z-TRANSFORM AND DISCRETE-TIME LTI SYSTEMS                            177


      Applying the z-transform and using the time-shift property (4.18) and the linearity
      property (4.17) of the z-transform, we obtain



      or



     Thus,




     Hence, H ( z ) is always rational. Note that the ROC of H ( z ) is not specified by Eq. (4.44)
     but must be inferred with additional requirements on the system such as the causality or
     the stability.

D. Systems Interconnection:
        For two LTI systems (with h,[n] and h2[n], respectively) in cascade, the overall
     impulse response h[n] is given by
                                      h[nl = h , [ n l * h 2 b l                            (4.45)
     Thus, the corresponding system functions are related by the product


           Similarly, the impulse response of a parallel combination of two LTI systems is given
     by
                                         +I   =h,[nl +h*lnl                                (4.47)
     and



4.7        THE UNILATERAL Z-TRANSFORM
A.     Definition:
      The unilateral (or one-sided) z-transform X,(z) of a sequence x[n] is defined as [Eq.
  (4.511

                                        X,(z) =   zm



                                                  n-0
                                                        x[n]z-"                            (4.49)

 and differs from the bilateral transform in that the summation is carried over only n 2 0.
 Thus, the unilateral z-transform of x[n] can be thought of as the bilateral transform of
 x[n]u[n]. Since x[n]u[n] is a right-sided sequence, the ROC of X,(z) is always outside a
 circle in the z-plane.
178               THE 2-TRANSFORM AND DISCRETE-TIME LTI SYSTEMS                           [CHAP. 4


B. Basic Properties:
      Most of the properties of the unilateral z-transform are the same as for the bilateral
  z-transform. The unilateral z-transform is useful for calculating the response of a causal
  system to a causal input when the system is described by a linear constant-coefficient
  difference equation with nonzero initial conditions. The basic property of the unilateral
  z-transform that is useful in this application is the following time-shifting property which is
  different from that of the bilateral transform.
Time-Shifting Property:
       If x[n] t,X,( z ), then for m 2 0,
             x[n - m ] - Z - ~ X , ( Z ) +z-"+'x[-11       +z-"+~x[-~+
                                                                     ]         - +x[-m]
                                                                   -
             x [ n + m] t,zmX,(z) -zmx[O] - z m - ' x [ l ] - . . - ~ [ m- 11
  The proofs of Eqs. (4.50) and (4.51) are given in Prob. 4.36.

D. System Function:
      Similar to the case of the continuous-time LTI system, with the unilateral z-transform,
  the system function H(z) = Y(z)/X(z) is defined under the condition that the system is
  relaxed, that is, all initial conditions are zero.




                                        Solved Problems

THE Z-TRANSFORM

4.1.   Find the z-transform of



       (a) From Eq. ( 4 . 3 )




             By Eq. (1.91)
                                                    1
                                     ( a - ~ z=
                                              )~             if la-'zl< 1 or lz( < la1
                                n =O            I - a-'z
CHAP. 41             THE Z-TRANSFORM AND DISCRETE-TIME LTI SYSTEMS


             Thus,

                                         1                      z       1
                          X(z) = 1-            - -a-'z       =--   -                Izl < I4   (4.52)
                                      1-a-'z        1-a-'z     z-a   1-az-'

       ( b ) Similarly,




             Again by Eq. (1.91)




             Thus,




4.2.   A finite sequence x [ n ] is defined as
                                                             N, I n I N ,
                                               =O            otherwise
       where N, and N, are finite. Show that the ROC of X(z) is the entire z-plane except
       possibly z = 0 or z = m.
           From Eq. (4.3)




       For z not equal to zero or infinity, each term in Eq. (4.54) will be finite and thus X(z) will
       converge. If N, < 0 and N2 > 0, then Eq. (4.54) includes terms with both positive powers of z
       and negative powers of z. As lzl- 0, terms with negative powers of z become unbounded,
       and as lzl+ m, terms with positive powers of z become unbounded. Hence, the ROC is the
       entire z-plane except for z = 0 and z = co. If N, 2 0, Eq. (4.54) contains only negative powers
       of z, and hence the ROC includes z = m. If N, I 0, Eq. (4.54) contains only positive powers of
       z, and hence the ROC includes z = 0.


4.3.   A finite sequence x [ n ] is defined as



       Find X(z) and its ROC.
                   THE Z-TRANSFORM AND DISCRETE-TIME LTI SYSTEMS                                                        [CHAP. 4


           From Eq. (4.3) and given x [ n ] we have




                           =5~~+3~-2+4z-~-3z-~
       For z not equal to zero or infinity, each term in X ( z ) will be finite and consequently X ( z ) will
       converge. Note that X ( z ) includes both positive powers of z and negative powers of z. Thus,
       from the result of Prob. 4.2 we conclude that the ROC of X ( z ) is 0 < lzl < m.

4.4.   Consider the sequence
                                                                  OsnsN-l,a>O
                                                   otherwise
       Find X ( z ) and plot the poles and zeros of X(z).
           By Eq. (4.3) and using Eq. (1.90),we get
                                N- I                   N- I             I -( a z - ~ ) ~ 1                    zN-aN
                     X(Z)=       C anz-"= C ( a z - I ) " =                 1-az-~
                                                                                                   =-
                                                                                                      z   ~   z- - a~     (4.55)
                                n=O                    n=O

       From Eq. (4.55) we see that there is a pole of ( N - 1)th order at z = 0 and a pole at z = a .
       Since x[n] is a finite sequence and is zero for n < 0, the ROC is IzI > 0. The N roots of the
       numerator polynomial are at
                                   Zk = a e i ( 2 r k / N ) k = 0 , 1 , ..., N - 1           (4.56)

       The root at k = 0 cancels the pole at z = a . The remaining zeros of X ( z ) are at


       The pole-zero plot is shown in Fig. 4-4 with N = 8.




                                                                                        z-plane


                           ( N - 1)th
                                                   *
                                                        .--4b--   .
                          order pole
                                             ,a'                      *@.
                                                                                          Pole-zero cancel


                                  \     Y
                                         I
                                                                            \#';



                                                                                   I
                                                                                    I
                                                                                        /         F
                                                                                                  Re(z)




                                        Fig. 4-4 Pole-zero plot with N = 8.
CHAP. 41            THE Z-TRANSFORMAND DISCRETE-TIME LTI SYSTEMS                                      181


4.5.   Show that if x [ n ] is a right-sided sequence and X ( z ) converges for some value of z,
       then the ROC of X ( z ) is of the form


       where r,      is the maximum magnitude of any of the poles of X(z).
           Consider a right-sided sequence x[nl so that


       and X(z) converges for (zl= r,. Then from Eq. (4.3)




       Now if r, > r,, then




       since (r, /r,)-"   is a decaying sequence. Thus, X(z) converges for r = r, and the ROC of X(z)
       is of the form


       Since the ROC of X(z) cannot contain the poles of X(z), we conclude that the ROC of X(z)
       is of the form


       where r,  is the maximum magnitude of any of the poles of X(z).
          If N, < 0, then




       That is, X(z) contains the positive powers of z and becomes unbounded at z = m. In this case
       the ROC is of the form


       From the above result we can tell that a sequence x [ n ] is causal (not just right-sided) from the
       ROC of XCz) if z = oo is included. Note that this is not the case for the Laplace transform.

4.6.   Find the z-transform X(z)and sketch the pole-zero plot with the ROC for each of the
       following sequences:
            THE z-TRANSFORM AND DISCRETE-TIME LTI SYSTEMS                                [CHAP. 4


( a ) From Table 4-1




      We see that the ROCs in Eqs. ( 4 . 5 8 ) and ( 4 . 5 9 )overlap, and thus,




      From Eq. ( 4 . 6 0 ) we see that X ( z ) has two zeros at z = 0 and z = & and two poles at
                                                     4,
      z = and z = and that the ROC is l z l > as sketched in Fig. 4-5(a).
(b)   From Table 4-1




      We see that the ROCs in Eqs. (4.61) and ( 4 . 6 2 ) overlap, and thus



      From Eq. ( 4 . 6 3 )we see that X ( z ) has one zero at z = 0 and two poles at z = $ and z =   4
                             3
      and that the ROC is < l z l < :, as sketched in Fig. 4-5(b).




                                          Fig. 4-5
CHAP. 41           T H E Z-TRANSFORM AND DISCRETE-TIME LTI SYSTEMS


       (c)   FromTable4-1




             We see that the ROCs in Eqs. (4.64) and (4.65) do not overlap and that there is no
             common ROC, and thus x[n] will not have X ( z ) .

4.7.   Let



       ( a ) Sketch x [ n ] for a < 1 and a > 1.
       ( b ) Find X ( z ) and sketch the zero-pole plot and the ROC for a < 1 and a > 1.
       ( a ) The sequence x [ n ] is sketched in Figs. 4 4 a ) and ( b ) for both a < 1 and a > 1.
       ( b ) Since x [ n ] is a two-sided sequence, we can express it as
                                           ~ [ n=]a n u [ n ]+ a m n u [ - n- 11                     (4.67)
             From Table 4-1




             If a < 1, we see that the ROCs in Eqs. (4.68) and (4.69) overlap, and thus,
                                z    z   a2- 1     z                                             1
                     X ( z ) = -- ---                                                 a < lzl < - ( 4 . 7 0 )
                               z-a z-l/a  a ( z-a)(z- l/a)                                      a
             From Eq. (4.70)we see that X ( z ) has one zero at the origin and two poles at z = a and
             z = l / a and that the ROC is a < lzl< l / a , as sketched in Fig. 4-7. If a > 1 , we see that
             the ROCs in Eqs. (4.68) and (4.69) do not overlap and that there is no common ROC,
             and thus x[n] will not have X ( z ) .




                    (4
                                                Fig. 4-6
                   THE Z-TRANSFORM AND DISCRETE-TIME LTI SYSTEMS                              [CHAP. 4




                                               Fig. 4-7


PROPERTIES OF THE Z-TRANSFORM

4.8.   Verify t h e time-shifting property (4.18), that is,



           By definition (4.3)




       By the change of variables m = n - no, we obtain




       Because of the multiplication by 2-"0, for no > 0, additional poles are introduced at r = 0 and
       will be deleted at z = w. Similarly, if no < 0, additional zeros are introduced at z = 0 and will
       be deleted at z = m. Therefore, the points z = 0 and z = oo can be either added to or deleted
       from the ROC by time shifting. Thus, we have



       where R and R' are the ROCs before and after the time-shift operation.
CHAP. 41            THE Z-TRANSFORMAND DISCRETE-TIME LTI SYSTEMS


4.9.   Verify Eq. (4.211, that is,



             By definition (4.3)




       A pole (or zero) at z = zk in X(z) moves to z = zoz,, and the ROC expands or contracts by
       the factor Izol. Thus, we have




4.10. Find the z-transform and the associated ROC for each of the following sequences:




       (a) From Eq. (4.15)
                                                     S[n]   -   1
              Applying the time-shifting property (4.181, we obtain
                                                                          all z




       ( b ) From Eq. (4.16)
                                                                Z
                                               4.1                         IZI> I
              Again by the time-shifting property (4.18) we obtain




       (c)    From Eqs. (4.8) and (4.10)
                                                                Z
                                             anu[n] w -                     Izl> la1
                                                      z-a
              By Eq. (4.20) we obtain

                                   a n +'u[n + I]   - z-
                                                        z-a
                                                            Z        z
                                                                    =-
                                                                    z-a
                                                                                    lal< lzl < m   (4.73)

       ( d l From Eq. (4.16)
                   THE Z-TRANSFORM AND DISCRETE-TIME LTI SYSTEMS                      [CHAP. 4


             By the time-reversal property (4.23) we obtain




                                                  -
      ( e ) From Eqs. (4.8) and (4.10)
                                                       Z
                                         anu[n]       -          Izl> la1
                                                      2-a
             Again by the time-reversal property (4.23) we obtain




4.11. Verify the multiplication by n (or differentiation in z ) property (4.24), that is,




            From definition (4.3)




      Differentiating both sides with respect to 2 , we have




      and




      Thus, we conclude that




4.12. Find the z-transform of each of the following sequences:
      (a) x [ n ] = n a n u [ n ]
      ( b ) x [ n ] = nan- l u [ n ]
      ( a ) From Eqs. (4.8) and (4.10)
                                                       Z
                                         anu[n] o -
                                                  z-a
                                                                 I z I > la1
             Using the multiplication by n property (4.24), we get
CHAP. 41          T H E Z-TRANSFORM AND DISCRETE-TIME LTI SYSTEMS                                    187


      ( b ) Differentiating Eq. (4.76)with respect to a, we have




            Note that dividing both sides of Eq. (4.77)by a , we obtain Eq. (4.78).

4.13. Verify the convolution property (4.26), that is,


           By definition (2.35)




      Thus, by definition (4.3)




      Noting that the term in parentheses in the last expression is the z-transform of the shifted
      signal x 2 [ n - k ] , then by the time-shifting property (4.18)we have




      with an ROC that contains the intersection of the ROC of X , ( z ) and X , ( z ) . If a zero of one
      transform cancels a pole of the other, the ROC of Y ( z )may be larger. Thus, we conclude that




4.14. Verify the accumulation property (4.25), that is,



           From Eq. (2.40)we have




      Thus, using Eq. (4.16) and the convolution property (4.26),we obtain




     with the ROC that includes the intersection of the ROC of X ( z ) and the ROC of the
     z-transform of u [ n ] .Thus,
188                 THE Z-TRANSFORM AND DISCRETE-TIME LTI SYSTEMS                                         [CHAP. 4



INVERSE Z-TRANSFORM

4.15. Find the inverse z-transform of
                       X ( z ) = z 2 ( l - i2-')(1 -2-')(I             +22-7                0 < lzl< 00     (4.79)
          Multiplying out the factors of Eq. (4.79),we can express X ( z ) as
                                               X ( Z )= z 2 + t z - 3 + z - I
      Then, by definition ( 4 . 3 )
                                  X ( z ) = x [ - 2 ] z 2 + x [ - 1 ] z + x [ o ]+ x [ 1 ] z - '
      and we get
                                          x [ n ] = { ...,O , l , $ , - 5 , 1 , 0 ,... }
                                                                         T
4.16. Using the power series expansion technique, find the inverse z-transform of the
      following X ( 2):




      ( a ) Since the ROC is ( z ( >la(, that is, the exterior of a circle, x [ n ] is a right-sided sequence.
            Thus, we must divide to obtain a series in the power of z - ' . Carrying out the long
            division, we obtain




            Thus,
                                              1
                             X(z)=                   = 1+ a ~ - ' + a ~ z - ~ +
                                       1 - az-'
            and so by definition ( 4 . 3 ) we have
                        x[n]=O           n<O
                         x[O]=1          x[l]=a           x[2]=a2              *..
            Thus, we obtain
                                                           x [ n ]= anu[n]
      ( 6 ) Since the ROC is lzl < lal, that is, the interior of a circle, x[n] is a left-sided sequence.
            Thus, we must divide so as to obtain a series in the power of z as follows, Multiplying
            both the numerator and denominator of X ( z ) by z , we have
                                                               z
                                                           X(z) =-
                                                                       z-a
CHAP. 41           THE z-TRANSFORM AND DISCRETE-TIME LTI SYSTEMS


           and carrying out the long division, we obtain
                                             -a-'z - a - 2 z 2 - a - 3 z 3 -     .-




           Thus,



           and so by definition ( 4 . 3 ) we have
              x[n]=O       n20
           x [ - 11 = -a-1   x[-2]        = -a-2        x[-'j]= - 0 - 3

           Thus, we get
                                                   x[n] = -anu[-n         - I]

4.17. Find the inverse z-transform of the following X(z):




     (a) The power series expansion for log(1 - r) is given by



           Now
                                                   1
                              X(z)= log         -az-,)     = -lo@      -afl)          Izl> lal

           Since the ROC is lzl> lal, that is, laz-'I< 1 , by Eq. (4.80), X(z) has the power sel
           expansion



           from which we can identify x[n] as
                  THE z-TRANSFORM AND DISCRETE-TIME LTI SYSTEMS                           [CHAP. 4


           Since the ROC is J z J< lal, that is, la-'zl < 1, by Eq. (4.801, X(z) has the power series
           expansion



           from which we can identify x [ n ] as




4.18. Using the power series expansion technique, find the inverse z-transform of the
      following X( z):
                          Z              1
      ( a ) X(z)=                   IzI< -
                   2 z 2 - 3z + 1        2


     (a) Since the ROC is (zl < i, x [ n ] is a left-sided sequence. Thus, we must divide to obtain a
         series in power of z. Carrying out the long division, we obtain
                                                  z + 3 z 2 + 7z3 + 15z4+ - . .




                                                                   15z4   -
          Thus,


           and so by definition (4.3) we obtain



     ( b ) Since the ROC is lzl> 1, x [ n ] is a right-sided sequence. Thus, we must divide so as to
                                          '
           obtain a series in power of z- as follows:




          Thus,
CHAP. 41             THE z-TRANSFORM AND DISCRETE-TIME LTI SYSTEMS


             and so by definition (4.3) we obtain
                                                                1 3 7
                                                                        , )
                                                  x[n] = { O , T , ~ , E-.

4.19. Using partial-fraction expansion, redo Prob. 4.18.
                                           Z                     Z                    1
      (a)                  X ( z ) = 2 ~ 2 - 3 ~ +-1 2 ( z - l ) ( z - + )       lzl< -
                                                                                      2

             Using partial-fraction expansion, we have




             where

             and we get



             Since the ROC of X(z) is lzl < i, x[n] is a left-sided sequence, and from Table 4-1 we
             get
                           x[n] = -u[-n        - I] +                - I ] = [(i)n
                                                                                 - I]u[-n - 11

             which gives
                                                x[n] = (..., 15,7,3,l,O)




             Since the ROC of X(z) is lzl> 1, x[n] is a right-sided sequence, and from Table 4-1 we
             get
                                    x[n] = u[n] - (i)'u[n] = [I - (i)']u[n]
             which gives



4.20. Find the inverse z-transform of



            Using partial-fraction expansion, we have




      where
192               THE z-TRANSFORM AND DISCRETE-TIME LTI SYSTEMS                                   [CHAP. 4


      Substituting these values into Eq. (4,831, we have




      Setting z = 0 in the above expression, we have



      Thus,



      Since the ROC is lzl> 2, x [ n ] is a right-sided sequence, and from Table 4-1 we get



4.21. Find the inverse t-transform of




      Note that X(Z)is an improper rational function; thus, by long division, we have




      Let


      Then


      where




      Thus.


                                      3     Z                    1   2
      and                     X(z)=2z+---
                                      2   2 - 1
                                                             + --
                                                               22-2
                                                                                  121   <1
      Since the ROC of X ( z ) is ( z( < 1, x [ n ] is a left-sided sequence, and from Table 4-1 we get
                                                        +
                         x [ n ] = 2 S [ n + 11 + i S [ n ] u [ - n - 1 1 - $ 2 " u [ - n - 1 )
                               = 2 S [ n + 11 + $ [ n ] + (1 - 2 " - ' ) u [ - n - 11
CHAP. 41          T H E z-TRANSFORM AND DISCRETE-TIME LTI SYSTEMS



4.22. Find the inverse z-transform of
                                                        2



           X( 2) can be rewritten as

                                                                               lzl > 2

      Since the ROC is J z >
                           J 2, x[n] is a right-sided sequence, and from Table 4-1 we have



      Using the time-shifting property (4.181, we have
                                                                  Z            1
                                    2n-Lu[n- l ] ~ z - 1

      Thus, we conclude that
                                             x[n] = 3(2)"-'u[n - 11

4.23. Find the inverse z-transform of
                                               2 + z - +~ 3 2 - 4
                                   X(2)=                                          >0
                                                 z 2 + 4z + 3
                                                                            121

           We see that X ( z ) can be written as
                                       X ( z ) = (2.7-I + z - ~+ ~ z - ~ ) x , ( z )

     where

     Thus, if


     then by the linearity property (4.17) and the time-shifting property (4.18), we get




     where

                                          1 z        1 z
     Then                     X , ( z ) = - -- - -                 lz1 > 0
                                          2z+1       2z+3
     Since the ROC of X,(z) is Izl > 0, x,[n] is a right-sided sequence, and from Table 4-1 we get
                                        x1[n] = ;[(-I)" - (-3)"]u[n]
     Thus, from Eq. (4.84) we get
                x[n] = [ ( - I ) " - ' - (-3)"-']u[n - I ] + f [ ( - I ) " - ' - (-3)"-']u[n - 3 1

                         + f [( -I)"-' - (-3)"-']u[n         - 51
194                  THE 2-TRANSFORM AND DISCRETE-TIME LTI SYSTEMS                                 [CHAP.4


4.24. Find the inverse z-transform of




                                                     1                   Z
                                    X(2)=                     2
                                                                  -              2   l z l > lal
                                              (1 a       z    )       ( z -a )
      From Eq. (4.78) (Prob. 4.12)



      Now, from Eq. (4.85)




      and applying the time-shifting property (4.20) to Eq. (4.86), we get
                                     ~ [ n=]( n + l ) a n u [ n+ 1 ] = ( n + l ) a n u [ n ]
      since x [ - 1 ] = 0 a t   n = -1.


SYSTEM FUNCTION

4.25. Using the z-transform, redo Prob. 2.28.
           From Prob. 2.28, x [ n ] and h [ n ] are given by
                                  x[n]=u[n]                  h [ n ]=anu[n]          O<a<1
      From Table 4-1



                                   h[n]=anu[n]       -       H(z)=-
                                                                         Z-a
                                                                             L
                                                                                     l z l > la1

      Then, by Eq. (4.40)




      Using partial-fraction expansion, we have




      where

      Thus,
CHAP. 41           THE z-TRANSFORM AND DISCRETE-TIME LTI SYSTEMS


     Taking the inverse z-transform of Y(z), we get




     which is the same as Eq. (2.134).

     Using the z-transform, redo Prob. 2.29.
     (a) From Prob. 2.29(a), x [ n ] and h [ n ] are given by
                                      x [ n ] =anu[n]           h[n] =Pnu[n]
           From Table 4-1
                                                                   z
                                ~ [ n=] a n u [ n ]H X ( Z ) = -              Izl> la1
                                                               z-a




           Then

           Using partial-fraction expansion, we have




           where            C, = -
                                z-P,=,
                                       (   =-
                                                a

                                              a-P
                                                           C2 = -       I
                                                                   z - a ~ = p
                                                                               =--
                                                                                      P
                                                                                     a-p
           Thus,
                                    a 2 P z
                          y ( z ) = --- --                                  lzl > max(a,p )
                                   a - p 2-(Y       a-p    2 - p



           and

           which is the same as Eq. (2.135). When a = P ,




           Using partial-fraction expansion, we have




           where

           and
                   T H E Z-TRANSFORM AND DISCRETE-TIME LTI SYSTEMS                                            [CHAP. 4


           Setting z = 0 in the above expression, we have



           Thus,
                                                z                     az
                                         Y(z) = -+                             2         Izl> a
                                                     2-a         (z-a)
           and from Table 4-1 we get


            Thus, we obtain the same results as Eq. (2.135).
      ( b ) From Prob. 2.29(b), x [ n ] and h[nl are given by


           From Table 4-1 and Eq. (4.75)




                                                   1                       z                             1
           Then         Y(z) = X ( z ) H ( z ) = - -                                              a<lzl< -
                                                          a ( z - a ) ( z - I/a)                          a
           Using partial-fraction expansion, we have
                                           1              1
                          Y(-z
                          -        - --                                =--           -+"-)
                            z             a (z-a)(z-a)                             a z-a          z-1/a
                                                            a                        1                a
           where         C, =   -

           Thus,
                                        1   Z       1        z                                      1
                           Y ( z ) = -- - -                                                  a<lzl<-
                                     1 -a2 Z - a 1 - a 2 Z - 1/a                                   a
           and from Table 4-1 we obtain




           which is the same as Eq. (2.137).

4.27. Using t h e z-transform, redo Prob. 2.30.
          From Fig. 2-23 and definition ( 4 . 3 )
                                ~ [ n=] ( l , l , l , l ] - X ( z )   = 1 + z - ' +z-2z-3

                                h [ n ] = ( l , l , 1)   -H(z)         = 1+z-' +z-*
CHAP. 41         THE z-TRANSFORM AND DISCRETE-TIME LTI SYSTEMS


      Thus, by the convolution property (4.26)
                        Y ( Z ) = x ( z ) H ( z ) = ( I + Z - ' + Z - ~ + Z - ~ ) +( IZ - ' + Z - ~ )
                               =1   + 2 ~ +4           + 3 ~ +- ~ +2 4
      Hence,
                                                 h [ n l = {1,2,3,3,2,1)
      which is the same result obtained in Prob. 2.30.

4.28. Using the z-transform, redo Prob. 2.32.
           Let x[nl and y[nl be the input and output of the system. Then
                                                                    Z
                               x [ n ] = u [ n ] -X(z)         =   -
                                                                   2- 1
                                                                                 lzl > 1




      Then, by Eq. (4.41)




      Using partial-fraction expansion, we have




                                             1                               a-1            1-a
      where            c, = -                          C2 =   -
                                                                                              a
     Thus,
                                              1   1-a z
                                    H ( z ) = - - --                         lzl> a
                                                 a      a     Z-a
     Taking the inverse z-transform of H(z), we obtain



     When n = 0,



     Then




     Thus, h [ n ] can be rewritten as


     which is the same result obtained in Prob. 2.32.
198              THE Z-TRANSFORM AND DISCRETE-TIME LTI SYSTEMS                          [CHAP. 4


4.29. The output y [ n ] of a discrete-time LTI system is found to be 2(f )"u[n]when the input
      x [ n ] is u [ n ] .
      ( a ) Find the impulse response h [ n ] of the system.
      ( b ) Find the output y[n] when the input x [ n ] is ( ; ) " u [ n ] .




            Hence, the system function H(z) is




            Using partial-fraction expansion, we have




            where

            Thus,




            Taking the inverse z-transform of H(z), we obtain
                                                 h [ n ] = 6 6 [ n ] - 4(;)'u[n]




            Then,

             Again by partial-fraction expansion we have




                                    2(z - 1 )
                                           ,I
                                                                             2(z - 1)
             where           C, =                        =-6          c2 =
                                     2-7         r-L/2

             Thus,




             Taking the inverse z-transform of Y(z), we obtain
                                                y [ n ] = [-6(;)'   + 8($)'lu[n]
CHAP. 41          T H E 2-TRANSFORM AND DISCRETE-TIME LTI SYSTEMS                                    199


     If a discrete-time LTI system is BIBO stable, show that the ROC of its system function
     H ( z ) must contain the unit circle, that is, lzl = 1.
         A discrete-time LTI system is BIBO stable if and only if its impulse response h[nl is
     absolutely summable, that is [Eq. (2.49)1,




     Now

     Let z = ejR so that lzl = lejRI = 1. Then




     Therefore, we see that if the system is stable, then H ( z ) converges for z = ei". That is, for a
     stable discrete-time LTI system, the ROC of H ( z ) must contain the unit circle lzl = 1.


     Using the z-transform, redo Prob. 2.38.
     (a)   From Prob. 2.38 the impulse response of the system is



           Then

           Since the ROC of H ( z ) is Izl > IaI, z = oo is included. Thus, by the result from Prob. 4.5
           we conclude that h[n] is a causal sequence. Thus, the system is causal.
     ( b ) If la1 > 1, the ROC of H ( z ) does not contain the unit circle lzl= 1, and hence the system
           will not be stable. If la1 < 1, the ROC of H ( z ) contains the unit circle lzl = 1, and hence
           the system will be stable.


     A causal discrete-time LTI system is described by

                                 y [ n ] - ;y[n - 11 + i y [ n - 21 = x [ n ]                    (4.88)
     where x[n] and y[n] are the input and output of the system, respectively.
     ( a ) Determine the system function H ( z ) .
     ( b ) Find the impulse response h[n] of the system.
     ( c ) Find the step response s[n]of the system.
     ( a ) Taking the z-transform of Eq. (4.88), we obtain

                                    Y(2) - $ z - ' ~ ( z )+ ; z - ~ Y ( z ) = X ( z )
200                THE z-TRANSFORM AND DISCRETE-TIME LTI SYSTEMS                              [CHAP. 4


           Thus,




      ( b ) Using partial-fraction expansion, we have




           Thus,




           Taking the inverse z-transform of H(z), we get




                                                               2
           Then           Y(z) = X ( Z )H ( z ) =                                        >1
                                                    ( z - l ) ( z - ; ) ( z - i)
                                                                                   121



           Again using partial-fraction expansion, we have




           Thus,




           Taking the inverse z-transformation of Y(z), we obtain
CHAP. 41          THE z-TRANSFORM AND DISCRETE-TIME LTI SYSTEMS


4.33. Using the z-transform, redo Prob. 2.41.
           As in Prob. 2.41, from Fig. 2-30 we see that
                                           q [ n ] = 2 q [ n - 11 + x [ n ]
                                           ~ [ n l s=[ n l + 3 4 [ n - 11
      Taking the z-transform of the above equations, we get
                                          Q ( z )=22-'Q(z) +X ( z )
                                          Y ( z )= Q ( z )+ ~ z - ' Q ( z )
      Rearranging, we get
                                           ( 1 - 2 2 - ' ) Q ( L )= X ( z )
                                           ( 1 + 3 . 2 - ' ) Q ( z )= Y ( z )
      from which we obtain



      Rewriting Eq. (4.89), we have
                                    (1 - 2 2 - ' ) Y ( 2 ) = ( 1 + 3 2 - ' ) x ( ~ )
     or
                                  Y ( z )- 2 2 - ' Y ( z ) = X ( z ) + 32-'X(z)           (4.90)
     Taking the inverse z-transform of Eq. (4.90) and using the time-shifting property (4.181, we
     obtain
                                   y [ n ] - 2 y [ n - 1 1 = x [ n ]+ 3 x [ n - 1 1
     which is the same as Eq. (2.148).

4.34. Consider the discrete-time system shown in Fig. 4-8. For what values of k is the
      system BIB0 stable?
                   THE Z-TRANSFORM AND DISCRETE-TIME LTI SYSTEMS                            [CHAP. 4


           From Fig. 4-8 we see that




      Taking the z-transform of the above equations, we obtain



                                                           k
                                          Y(z) = Q ( z ) + ?z-'Q(z)

      Rearranging, we have




      from which we obtain




      which shows that the system has one zero at z = - k / 3 and one pole at z = k / 2 and that the
      ROC is J z l > lk/2l. Thus, as shown in Prob. 4.30, the system will be BIB0 stable if the ROC
      contains the unit circle, lzl= 1. Hence the system is stable only if IkJ< 2.


UNILATERAL Z-TRANSFORM

4.35. Find the unilateral z-transform of the following x[n]:
      ( a ) x[n] = a n u [ n ]
      ( b ) x[n] = a n 'u[n
                        +        + 11
      (a) Since x[nl = 0 for n < 0, X,(z) = X(z) and from Example 4.1 we have




      ( b ) By definition (4.49) we have




                                           1          az
                                   =a            =-          Izl > la1
                                        1-az-'    z-a
            Note that in this case x[n] is not a causal sequence; hence X,(z) + X(z) [see Eq. (4.73) in
            Prob. 4.101.
CHAP. 41          THE z-TRANSFORM AND DISCRETE-TIME LTI SYSTEMS


4.36. Verify Eqs. (4.50) and (4.51), that is, for m 2 0,
      ( a ) x [ n - m ] -z-"x,(z)       + Z - ~ + ' X [ - 11 + Z-""     'x[-2]    + - +x[-m]
                                                                                       a




      ( a ) By definition (4.49) with m 2 0 and using the change in variable k = n - m, we have




      ( b ) With m 1 0
                                        m                           m

                   8,{x[n   +m ] )= C x[n +m]z-" = C x [ k ] ~ - ( ~ - ~ )
                                       n =O                      k=m




4.37. Using the unilateral z-transform, redo Prob. 2.42.
           The system is described by
                                              ~ [ n-] ay[n - 11 = x [ n ]
                       ,
      with y [ - 11 = y - and x[n 1 = Kbnu[n].Let
                                                   ~ [ " *l Y I ( z )
      Then from Eq. (4.50)
                             ~ [ -n11 - z - ~ Y , ( z ) + y [ - I ] = Z - ' & ( Z ) + y - I
     From Table 4-1 we have
                                                                Z
                                    x [ n ] -X,(Z) =K-                      Izl> lbl
                                                             t-b
     Taking the unilateral z-transform of Eq. (4.931, we obtain

                                    &(z)      - a { z - ' ~ ( z +) y - J = KZ
                                                                           z-b
204                   THE Z-TRANSFORM AND DISCRETE-TIME LTI SYSTEMS                                            [CHAP. 4


      Thus,
                                                            z        z
                                         y ( z ) = a y - \ -+ K
                                                           z-a  (z-a)(z-b)
      Using partial-fraction expansion, we obtain
                                                      z           K          z            z
                                    Y,(z) =ay-,-
                                                     z-a
                                                            +-b - ~ ( -
                                                                      ~ z - b z-a
      Taking the inverse z-transform of Y,(z), we get
                                                             b                        a
                                Y [ n ] = a y - ,anu[n] + K-bnu[n]               - K-anu[n]
                                                           b-a                      b-a



      which is the same as Eq. (2.158).

4.38. For each of the following difference equations and associated input and initial
      conditions, determine the output y[n I:
      ( a ) y[nl - f y [ n - 11 = x [ n l , with x [ n ] = (:In, y[- 11 = 1
      ( b ) 3 y [ n ] - 4 y [ n - 11 + y[n - 21 = A n ] , with x[n] = (i)", y[ - 11 = 1, y[- 21 = 2



              Taking the unilateral z-transform of the given difference equation, we get
                                             Y,(z) - +{z-'Y,(z) + y [ - I]} = X , ( z )
              Substituting y[- 11 = 1 and X,(z) into the above expression, we get




              Thus,




              Hence,

                                             y [ n ) = 7(;)"+' - 2 ( f ) n          n 2 -1
                                                                 z
      (b)                                       x[n] ++ X,(z) = ---7
                                                                      2-2

              Taking the unilateral z-transform of the given difference equation, we obtain
                      3Y,(z) - 4{z- ' 5( z ) + Y [ - I ] } + { ~ -2Y, ( z ) + z - ' y [ - 11 + ~ [ - 2 ] }= X I ( Z )
CHAP. 41            THE Z-TRANSFORMAND DISCRETE-TIME LTI SYSTEMS


             Substituting y[- 11= 1, y[-2]= 2, and X,(z) into the above expression, we get




            Thus,




            Hence,

                                       y [ n ] = $ - (f)"+ +(f)"        n r -2


439. Let x [ n ] be a causal sequence and
                                                   x b l -X(z)
      Show that
                                                  x[O] = lim X(z)
                                                            Z'W


      Equation (4.94) is called the initial value theorem for the z-transform.
           Since x [ n ] = 0 for n < 0, we have



      As z -+ oa, z-" -+ 0 for n > 0. Thus, we get
                                                   lim X ( z ) = x[O]
                                                  2--.m




4.40. Let x [ n ] be a causal sequence and


      Show that if X(z) is a rational function with all its poles strictly inside the unit circle
      except possibly for a first-order pole at z = 1, then
                                       lim x [ N ] = lim (1 -2-')X(z)                        (4.95)
                                      N-tm                1-1
      Equation (4.95) is called the final value theorem for the z-transform.
           From the time-shifting property (4.19) we have


      The left-hand side of Eq.(4.96) can be written as
                     T H E Z-TRANSFORM AND DISCRETE-TIME LTI SYSTEMS                                      [CHAP. 4


        If we now let z ---, 1, then from Eq. (4.96) we have

                           lim ( I - 2 - ' ) X ( z ) = lim         ( x [ n ]- x [ n - I]} = lim x [ N ]
                          z-+ 1                       N-+m n = O                          N+w




                                      Supplementary Problems
4.41.   Find the z-transform of the following x [ n ] :
        ( a ) x [ n l = ( ; , I , - $1
        ( b ) x [ n ]= 2 S [ n + 21 - 3S[n - 21
        ( c ) x [ n ]= 3 ( - f)"u[n] - 2(3)"u[-n - I ]
        ( d ) x [ n l = 3 ( i ) " u [ n l - 2(a)"u[-n - 11
        Am.     ( a ) X ( z ) = f + z - ' - $z-', 0 < lzl




                ( d ) X ( z ) does not exist.


4.42.   Show that if x [ n ] is a left-sided sequence and X ( z ) converges from some value of z, then the
        ROC of X ( z ) is of the form

                                             IzI<rmin        or       O<IzI<rmin
        where rmin is the smallest magnitude of any of the poles of X ( z ) .
        Hint:    Proceed in a manner similar to Prob. 4.5.


4.43.   Given


        ( a ) State all the possible regions of convergence.
        ( b ) For which ROC is X ( z ) the z-transform of a causal sequence?
        Ans.    ( a ) 0 < lzl < 1 , l < lzI< 2,2 < I z k 3, lzl> 3
                ( b ) lz1>3


4.44.   Verify the time-reversal property (4.23), that is,




        Hint: Change n to - n in definition (4.3).
CHAP. 41            T H E Z-TRANSFORM AND DISCRETE-TIME LTI SYSTEMS


4.45.   Show the following properties for the z-transform.
        ( a ) If x [ n ]is even, then X ( z L ' )= X ( z ) .
        ( b ) If x [ n ] is odd, then X ( z - ' ) = - X ( z ) .
        ( c ) If x [ n ]is odd, then there is a zero in X ( z ) at z = 1.
        Hint: ( a ) Use Eqs. (1.2) and (4.23).
              ( b ) Use Eqs. (1.3) and (4.23).
              ( c ) Use the result from part ( b ) .

4.46.   Consider the continuous-time signal


        Let the sequence x [ n ]be obtained by uniform sampling of x ( t ) such that x [ n ]= x(nT,), where
        T, is the sampling interval. Find the z-transform of x [ n ] .

        Am.

4.47.   Derive the following transform pairs:




                                                   -
                                (sin n 0 n ) u [ n ]
                                                             (sin R o ) z
                                                       z 2 - (2cos R o ) z + 1
                                                                                 lzl> I


        Hint: Use Euler's formulas.




        and use Eqs. (4.8) and (4.10) with a = .e0*' '

4.48.   Find the z-transforms of the following x [ n ] :
        ( a ) x [ n ]= ( n - 3)u[n- 31
        ( b ) x[nl = ( n - 3)u[n]
        ( c ) x[nl = u [ n ]- u [ n - 31
        ( d l x[nl = n{u[nl- u [ n - 33)
                        z - ~
        Am. ( a )             , , lz1> 1
                     ( 2 - 1)
208                    THE z-TRANSFORM AND DISCRETE-TIME LTI SYSTEMS                                 [CHAP. 4


4.49.   Using the relation
                                                                   Z
                                                    a n u [ n ]H -      Izl> la1
                                                                z-a
        find the z-transform of the following x [ n ] :
        ( a ) x [ n ]= nun-'u[n]
        ( b ) x [ n ] = n(n - l ) a " - 2 u [ n ]
        ( c ) x [ n l = n(n - 1 ) . . . ( n - k     +l)~"-~u[n]
        Hint:     Differentiate both sides of the given relation consecutively with respect to a .




4.50.   Using the z-transform, verify Eqs. (2.130) and (2.131) in Prob. 2.27, that is,



        Hint:     Use Eq. (4.26) of the z-transform and transform pairs 1 and 4 from Table 4-1.

4.51.   Using the z-transform, redo Prob. 2.47.
        Hint:     Use Eq. (4.26) and Table 4-1.

4.52.   Find the inverse z-transform of
                                                      X ( z ) = ea/'   1.4> 0
        Hint:     Use the power series expansion of the exponential function e r .

        Am.

4.53.   Using the method of long division, find the inverse z-transform of the following X ( z ) :
CHAP. 41          THE Z-TRANSFORM AND DISCRETE-TIME LTI SYSTEMS


4.54. Using the method of partial-fraction expansion, redo Prob. 4.53.
      Ans.   ( a ) x [ n ]= (1 - 2 9 4 - n - 11
             (6) x [ n ] = - u [ n ] - 2"u[-n - 11
             (c) ~ [ n=]( - 1 + 2")u[n]


4.55. Consider the system shown in Fig. 4-9. Find the system function H ( z ) and its impulse response
      hbl.
                          1
      Am.    H(z)=         , -, , h [ n l =
                      1 - 72




                                                     u
                                                Fig. 4-9




4.56. Consider the system shown in Fig. 4-10.
      ( a ) Find the system function H ( z ) .
      ( b ) Find the difference equation relating the output y [ n ] and input x [ n ] .




                                               Fig. 4-10
210                  T H E Z-TRANSFORM AND DISCRETE-TIME LTI SYSTEMS                                      [CHAP. 4


4.57.   Consider a discrete-time LTI system whose system function H(z)is given by




        ( a ) Find the step response s[n].
        ( b ) Find the output y[n]to the input x [ n ]= nu[n].
        Ans.   ( a ) s[n]= [2 - ( ~ ) " ] u [ n ]
               ( 6 ) y[nl = 2[(4)"+ n - llu[nl

4.58.   Consider a causal discrete-time system whose output y[n]and input x [ n ]are related by
                                           y [ n ] - : y [ n - 1 1 + i y [ n -21 = x [ n ]

        ( a ) Find its system function H ( z ) .
        ( b ) Find its impulse response h[n].
                                       z   *                1
        Am.    (a) H(z)=                         , lzl> -
                               ( z - $ ) ( z- 3)        2
               ( b ) h [ n ]= [3($)"- 2(f)"]u[n]

4.59.   Using the unilateral z-transform, solve the following difference equations with the given initial
        conditions.
        ( a ) y [ n ]- 3y[n - 11 = x [ n ] with
                                           ,    x [ n ]= 4u[n],y [ - 11 = 1
        ( b ) y[n]- 5y[n - 11 + 6y[n - 21 = x [ n ] with ,   x [ n ]= u[n],y [ - I ] = 3, y [ - 2 ] = 2
        Am.    (a) y[n]=-2+9(3)",nr -1
                              4
               ( b ) y[n]= + 8(2In - Z(3ln, n 2 -2

4.60.   Determine the initial and final values of x [ n ]for each of the following X ( z ) :



                              z
        (b) X(z)=                      , 121 > 1
                     2 z 2 - 3.2 + 1
        Ans. ( a ) x[O]=2,x [ w ] =0
             ( b ) x[Ol = 0, x[wl= 1
                                                                      Chapter 5

               Fourier Analysis of Continuous-Time
                       Signals and Systems
5.1 INTRODUCTION
         In previous chapters we introduced the Laplace transform and the z-transform to
     convert time-domain signals into the complex s-domain and z-domain representations that
     are, for many purposes, more convenient to analyze and process. In addition, greater
     insights into the nature and properties of many signals and systems are provided by these
     transformations. In this chapter and the following one, we shall introduce other transfor-
     mations known as Fourier series and Fourier transform which convert time-domain signals
     into frequency-domain (or spectral) representations. In addition to providing spectral
     representations of signals, Fourier analysis is also essential for describing certain types of
     systems and their properties in the frequency domain. In this chapter we shall introduce
     Fourier analysis in the context of continuous-time signals and systems.


5.2     FOURIER SERIES REPRESENTATION OF PERIODIC SIGNALS
A.     Periodic Signals:
        In Chap. 1 we defined a continuous-time signal x ( t ) to be periodic if there is a positive
     nonzero value of T for which
                                      x(t + T )= x ( t )      all t                           (5.1)
  The fundamental period To of x ( t ) is the smallest positive value of T for which Eq. (5.1)
  is satisfied, and l / T o =fo is referred to as the fundamental frequency.
      Two basic examples of periodic signals are the real sinusoidal signal


  and the complex exponential signal
                                              X ( t )= e~%'                                   (5.3)
 where oo= 2n-/To = 2n-fo is called the fundamental angular frequency.

B. Complex Exponential Fourier Series Representation:
    The complex exponential Fourier series representation of a periodic signal x ( t ) with
 fundamental period To is given by
212                FOURIER ANALYSIS O F TIME SIGNALS AND SYSTEMS                                    [CHAP. 5


  where c , are known as the complex Fourier coefficients and are given by




  where 1
        ", denotes the integral over any one period and 0 to To or - T o / 2 to T 0 / 2 is
  commonly used for the integration. Setting k = 0 in Eq. ( 5 3 , we have



  which indicates that co equals the average value of x ( t ) over a period.
     When x ( t ) is real, then from Eq. ( 5 . 5 ) it follows that
                                                          C - , =C,
                                                                   *                                   (5.7)
  where the asterisk indicates the complex conjugate.

C. Trigonometric Fourier Series:
     The trigonometric Fourier series representation of a periodic signal x ( t ) with funda-
  mental period T,, is given by

                  x(t)= -
                          a0
                               +   x02




                                   k=l
                                          (a,cos ko,t + b , sin k w o t )
                                                                                              23T
                                                                                           w0 = -
                                                                                              To
                                                                                                       (5.8)

  where a , and b, are the Fourier coefficients given by

                                                            x ( t ) c o s kw,tdt                      (5.9a)




  The coefficients a , and b, and the complex Fourier coefficients c , are related by
  (Prob. 5.3)



  From Eq. ( 5 . 1 0 ) we obtain
                               c , = + ( a , - jb,)               c - , = : ( a k + jb,)              (5.11)
  When x ( t ) is real, then a , and b, are real and by Eq. (5.10) we have
                                 a, = 2 Re[c,]                    b, = - 2 Im[c,]                     (5.12)
Even and Odd Signals:
      If a periodic signal x ( t ) is even, then b, = 0 and its Fourier series ( 5 . 8 ) contains only
  cosine terms:

                           x(t) = -
                                         a0

                                         2
                                              +   xffi




                                                  k=l
                                                         a , cos kwot
                                                                                      23T
                                                                                   o0= -
                                                                                       T"
CHAP. 51           FOURIER ANALYSIS OF TIME SIGNALS AND SYSTEMS


  If x ( t ) is odd, then a, = 0 and its Fourier series contains only sine terms:
                                         m
                                                                   2TT
                                x(t) =      b, sin kwot      w0= -
                                       k= 1                         To

D. Harmonic Form Fourier Series:
     Another form of the Fourier series representation of a real periodic signal x ( t ) with
  fundamental period To is



  Equation (5.15) can be derived from Eq. (5.8) and is known as the harmonic form Fourier
  series of x(t). The term Co is known as the d c component, and the term C, cos(kwot - 0,)
  is referred to as the kth harmonic component of x(t). The first harmonic component
  C, C O S ( ~-, 8,)
                 ~ is commonly called the fundamental component because it has the same
  fundamental period as x(t). The coefficients C, and the angles 8, are called the harmonic
  amplitudes and phase angles, respectively, and they are related to the Fourier coefficients
  a, and b, by



      For a real periodic signal ~ ( r ) the
                                          , Fourier series in terms of complex exponentials as
  given in Eq. (5.4) is mathematically equivalent to either of the two forms in Eqs. (5.8) and
  (5.15). Although the latter two are common forms for Fourier series, the complex form in
  Eq. (5.4) is more general and usually more convenient, and we will use that form almost
  exclusively.

E. Convergence of Fourier Series:
      It is known that a periodic signal x(t) has a Fourier series representation if it satisfies
  the following Dirichlet conditions:
  1.   x ( t ) is absolutely integrable over any period, that is,



  2. x(t) has a finite number of maxima and minima within any finite interval of t .
  3. x(t) has a finite number of discontinuities within any finite interval of t, and each of
     these discontinuities is finite.
Note that the Dirichlet conditions are sufficient but not necessary conditions for the Fourier
series representation (Prob. 5.8).

F. Amplitude and Phase Spectra of a Periodic Signal:
       Let the complex Fourier coefficients c, in Eq. (5.4) be expressed as
214                   FOURIER ANALYSIS O F TIME SIGNALS AND SYSTEMS                              [CHAP. 5


     A plot of lckl versus the angular frequency w is called the amplitude spectrum of the
     periodic signal x ( t ) , and a plot of 4, versus w is called the phase spectrum of x(t 1. Since
     the index k assumes only integers, the amplitude and phase spectra are not continuous
     curves but appear only at the discrete frequencies k o , , . They are therefore referred to as
     discrete frequency spectra or line spectra.
         For a real periodic signal x ( t ) we have c - , = c:. Thus,


     Hence, the amplitude spectrum is an even function of w , and the phase spectrum is an odd
     function of o for a real periodic signal.

C . Power Content of a Periodic Signal:
         In Chap. 1 (Prob. 1.18) we introduced the average power of a periodic signal x ( t ) over
     any period as




     If x ( t ) is represented by the complex exponential Fourier series in Eq. ( 5 . 4 ) ,then it can be
     shown that (Prob. 5.14)




     Equation ( 5 . 2 1 ) is called Parserlal's identity (or Parse~lal'stheorem) for the Fourier series.


5.3 THE FOURIER TRANSFORM
A.     From Fourier Series to Fourier Transform:
         Let X ( t ) be a nonperiodic signal of finite duration, that is,
                                           x(t)=0               Itl> TI
     Such a signal is shown in Fig. 5 - l ( a ) . Let x,,)(t) be a periodic signal formed by repeating
     x ( r ) with fundamental period T,, as shown i n " ~ i5~- l.( b). If we let To --+ m, we have
                                               lim x T , l t ) = x ( t )
                                              TO+=

     The complex exponential Fourier series of xril(t)is given
                                               m




     where

     Since ~ , , ~) (=t x ( r ) for It 1 < T,,/2 and also since x( t ) = 0 outside this interval, Eq. (5.24a)
CHAP. 51         FOURIER ANALYSIS OF TIME SIGNALS AND SYSTEMS




                                                (6)
  Fig. 5-1 (a) Nonperiodic signal x(r);( b )periodic signal formed by periodic extension of x(r ).


 can be rewritten as




     Let us define X(w) as



 Then from Eq. (5.246) the complex Fourier coefficients c, can be expressed as




 Substituting Eq. (5.26) into Eq. (5.231, we have




 As To -+ m, o, = 27r/T, becomes infinitesimal ( w ,
 Eq. (5.27) becomes
                                                             -   0). Thus, let w,, = Aw. Then
216              FOURIER ANALYSIS O F T I M E SIGNALS AND SYSTEMS                         [CHAP. 5


 Therefore,

                                   x,Jt)    =    lim               X(k Am) ejkA"'Aw
                                                Aw-0       2 r ,= -,
 The sum on the right-hand side of Eq. (5.29) can be viewed as the area under the function
 X(w) ei"', as shown in Fig. 5-2. Therefore, we obtain



 which is the Fourier representation of a nonperiodic x(t).




                                                       0                 k Aw         w

                        Fig. 5-2    Graphical interpretation of Eq. (5.29).



B. Fourier Transform Pair:
    The function X ( o ) defined by Eq. (5.25) is called the Fourier transform of x(t), and
 Eq. (5.30) defines the inuerse Fourier transform of X(o). Symbolically they are denoted by




 and we say that x(t) and X(w) form a Fourier transform pair denoted by
                                                44-X(4                                      (5.33)

C. Fourier Spectra:
      The Fourier transform X(w) of x(t) is, in general, complex, and it can be expressed as
                                           X ( o ) = ( X ( o ) (eJd(")                      (5.34)
 By analogy with the terminology used for the complex Fourier coefficients of a periodic
 signal x(t), the Fourier transform X(w) of a nonperiodic signal x(t) is the frequency-
 domain specification of x(t) and is referred to as the spectrum (or Fourier spectrum) of
 x ( t ). The quantity I X( w)( is called the magnitude spectrum of x(t), and $(w) is called the
 phase spectrum of x(t).
CHAP. 51            FOURIER ANALYSIS OF TIME SIGNALS AND SYSTEMS


        If x ( t ) is a real signal, then from Eq. (5.31) we get



  Then it follows that


  and                        Ix(-o)l    = Ix(o)l          4(-4         = -$(@)           (5.36b)
  Hence, as in the case of periodic signals, the amplitude spectrum IX(o)( is an even
  function and the phase spectrum 4 ( o ) is an odd function of o .

D. Convergence of Fourier Transforms:
       Just as in the case of periodic signals, the sufficient conditions for the convergence of
  X ( o ) are the following (again referred to as the Dirichlet conditions):
  1. x ( l ) is absolutely integrable, that is,



  2. x ( t ) has a finite number of maxima and minima within any finite interval.
  3. x ( t ) has a finite number of discontinuities within any finite interval, and each of these
     discontinuities is finite.
Although the above Dirichlet conditions guarantee the existence of the Fourier transform for
a signal, if impulse functions are permitted in the transform, signals which do not satisfy
these conditions can have Fourier transforms (Prob. 5.23).

E. Connection between the Fourier Transform and the Laplace Transform:
     Equation (5.31) defines the Fourier transform of x(r as



 The bilateral Laplace transform of x(t), as defined in Eq. (4.31, is given by



 Comparing Eqs. (5.38) and (5.39), we see that the Fourier transform is a special case of
 the Laplace transform in which s = j o , that is,


 Setting s = u + jo in Eq. (5.39), we have
                                    m
                                            e-("+~")'dt =   1 [ x ( t ) e-"1 e-jW'dt
                                                              m

                                                              -m


                                     X ( u + jw) = Y ( x ( t ) e-"'1
218                    FOURIER ANALYSIS O F TIME SIGNALS AND SYSTEMS                        [CHAP. 5


  which indicates that the bilateral Laplace transform of x ( t ) can be interpreted as the
  Fourier transform of x ( t ) e-"'.
      Since the Laplace transform may be considered a generalization of the Fourier
  transform in which the frequency is generalized from jw to s = a + j o , the complex
  variable s is often referred to as the complexfrequency.
      Note that since the integral in Eq. (5.39) is denoted by X(s), the integral in Eq. (5.38)
  may be denoted as X ( j w ) . Thus, in the remainder of this book both X ( o ) and X ( j w )
  mean the same thing whenever we connect the Fourier transform with the Laplace
  transform. Because the Fourier transform is the Laplace transform with s =jo, it should
  not be assumed automatically that the Fourier transform of a signal ~ ( r is) the Laplace
  transform with s replaced by j w . If x ( t ) is absolutely integrable, that is, if x ( r ) satisfies
  condition (5.37), the Fourier transform of x ( t ) can be obtained from the Laplace
  transform of x ( t ) with s =jw. This is not generally true of signals which are not absolutely
  integrable. The following examples illustrate the above statements.

EXAMPLE 5.1. Consider the unit impulse function S( t ) .
   From Eq. (3.13) the Laplace transform of S ( t ) is
                                              J ( S ( t ) }= 1        all s
By definitions ( 5 . 3 1 ) and ( 1 . 2 0 ) the Fourier transform of 6 ( t ) is



Thus, the Laplace transform and the Fourier transform of S ( t ) are the same.

EXAMPLE 5.2.         Consider the exponential signal


      From Eq. ( 3 . 8 ) the Laplace transform of x ( t ) is given by



By definition (5.31) the Fourier transform of x ( t ) is




Thus, comparing Eqs. ( 5 . 4 4 ) and (5.451, we have
                                                  X ( w ) =X(s)ls-jcu
Note that x ( t ) is absolutely integrable.

EXAMPLE 5.3. Consider the unit step function u(t ).
   From Eq. (3.14) the Laplace transform of u ( t ) is
CHAP. 51           FOURIER ANALYSIS OF TIME SIGNALS AND SYSTEMS


The Fourier transform of u(r) is given by (Prob. 5.30)
                                                            1
                                      F { u ( t ) } = ns(o) + -
                                                           10

Thus, the Fourier transform of u(t) cannot be obtained from its Laplace transform. Note that the unit
step function u(t) is not absolutely integrable.


5.4   PROPERTIES OF THE CONTINUOUS-TIME FOURIER TRANSFORM
     Basic properties of the Fourier transform are presented in the following. Many of these
  properties are similar to those of the Laplace transform (see Sec. 3.4).




B. Time Shifting:




  Equation ( 5 . 5 0 ) shows that the effect of a shift in the time domain is simply to add a linear
  term -ot, to the original phase spectrum 8 ( w ) .This is known as a linear phase shift of the
  Fourier transform X( w ) .

C. Frequency Shifting:




 The multiplication of x ( t ) by a complex exponential signal             is sometimes called
                                                                        eJ"l)'

 complex modulation. Thus, Eq. (5.51) shows that complex modulation in the time domain
 corresponds to a shift of X ( w ) in the frequency domain. Note that the frequency-shifting
 property Eq. (5.51) is the dual of the time-shifting property Eq. ( 5 . 5 0 ) .

D. Time Scaling:




 where a is a real constant. This property follows directly from the definition of the Fourier
 transform. Equation ( 5 . 5 2 ) indicates that scaling the time variable t by the factor a causes
 a n inverse scaling of the frequency variable o by l / a , as well as an amplitude scaling of
 X ( o / a ) by l / l a ( . Thus, the scaling property (5.52) implies that time compression of a
 signal ( a > 1) results in its spectral expansion and that time expansion of the signal ( a < 1 )
 results in its spectral compression.
220               FOURIER ANALYSIS O F TIME SIGNALS AND SYSTEMS                   [CHAP. 5



E. Time Reversal:



 Thus, time reversal of x ( t ) produces a like reversal of the frequency axis for X ( o ) .
 Equation (5.53) is readily obtained by setting a = - 1 in Eq. (5.52).

F. Duality (or Symmetry):



 The duality property of the Fourier transform has significant implications. This property
 allows us to obtain both of these dual Fourier transform pairs from one evaluation of
 Eq. (5.31) (Probs. 5.20 and 5.22).

G.    Differentiation in the Time Domain:




 Equation (5.55) shows that the effect of differentiation in the time domain is the
 multiplication of X(w) by jw in the frequency domain (Prob. 5.28).

H.    Differentiation in the Frequency Domain:



                                    (-P)x(t)     -
 Equation (5.56) is the dual property of Eq. (5.55).
                                                     dX(4
                                                     ,o

I. Integration in the Time Domain:




 Since integration is the inverse of differentiation, Eq. (5.57) shows that the frequency-
 domain operation corresponding to time-domain integration is multiplication by l/jw, but
 an additional term is needed to account for a possible dc component in the integrator
 output. Hence, unless X(0) = 0, a dc component is produced by the integrator (Prob. 5.33).

J. Convolution:
CHAP. 51             FOURIER ANALYSIS O F TIME SIGNALS AND SYSTEMS                              221



  Equation (5.58) is referred to as the time convolution theorem, and it states that convolu-
  tion in the time domain becomes multiplication in the frequency domain (Prob. 5.31). As
  in the case of the Laplace transform, this convolution property plays an important role in
  the study of continuous-time LTI systems (Sec. 5.5) and also forms the basis for our
  discussion of filtering (Sec. 5.6).


K. Multiplication:




  The multiplication property (5.59) is the dual property of Eq. (5.58) and is often referred
  to as the frequency convolution theorem. Thus, multiplication in the time domain becomes
  convolution in the frequency domain (Prob. 5.35).


L. Additional Properties:
      If x ( t ) is real, let


  where x,( t ) and xo(t) are the even and odd components of x( t 1, respectively. Let


  Then




 Equation ( 5 . 6 1 ~ )is the necessary and sufficient condition for x( t ) to be real (Prob. 5.39).
 Equations (5.61b) and ( 5 . 6 1 ~ )show that the Fourier transform of an even signal is a real
 function of o and that the Fourier transform of an odd signal is a pure imaginary function
 of w .

M. Parseval's Relations:
                 FOURIER ANALYSIS O F TIME SIGNALS AND SYSTEMS                       [CHAP. 5



Equation (5.64) is called Parseual's identity (or Parseual's theorem) for the Fourier
transform. Note that the quantity on the left-hand side of Eq. (5.64) is the normalized
energy content E of x(t) [Eq. (1.14)]. Parseval's identity says that this energy content E
can be computed by integrating Ix(w)12 over all frequencies w . For this reason Ix(w)l2 is
often referred to as the energy-density spectrum of x(t), and Eq. (5.64) is also known as
the energy theorem.
    Table 5-1 contains a summary of the properties of the Fourier transform presented in
this section. Some common signals and their Fourier transforms are given in Table 5-2.



                       Table 5-1.   Properties of the Fourier Transform
      Property                              Signal               Fourier transform




     Linearity
     Time shifting
     Frequency shifting

     Time scaling
     Time reversal
     Duality

     Time differentiation

      Frequency differentiation

      Integration

     Convolution

      Multiplication
      Real signal

       Even component
       Odd component
     Parseval's relations
CHAP. 51            FOURIER ANALYSIS OF TIME SIGNALS AND SYSTEMS


                           Table 5-2. Common Fourier Transforms Pairs




                              sin at




5.5     THE FREQUENCY RESPONSE OF CONTINUOUS-TIME LTI SYSTEMS
A.     Frequency Response:
        In Sec. 2.2 we showed that the output y ( t ) of a continuous-time LTI system equals the
     convolution of the input x ( t ) with the impulse response h(t 1; that is,


     Applying the convolution property (5.58),we obtain
224              FOURIER ANALYSIS OF TIME SIGNALS AND SYSTEMS                          [CHAP. 5


 where Y(w), X(o), and H(w) are the Fourier transforms of y(f), d t ) , and h(t),
 respectively. From Eq. (5.66) we have



 The function H ( o ) is called the frequency response of the system. Relationships repre-
 sented by Eqs. (5.65) and (5.66) are depicted in Fig. 5-3. Let
                                      H(w) = I H(w)I ei@~(O)                              (5.68)
 Then IH(o)lis called the magnitude response of the system, and 0 , ( 0 ) the phase response
 of the system.




                               X(w)                     Y(w)=X(w)H(w)

              Fig. 5-3 Relationships between inputs and outputs in an LTI system.


      Consider the complex exponential signal


 with Fourier transform (Prob. 5.23)
                                      X(w) = 2 d q w - 0,)
 Then from Eqs. (5.66) and ( I .26) we have
                                  Y(o) = 27rH(wo) 6(w - too)
 Taking the inverse Fourier transform of Y(w), we obtain
                                       y(f ) = H(wo) eioll'
 which indicates that the complex exponential signal ei"l)' is an eigenfunction of the LTI
 system with corresponding eigenvalue H(w,), as previously observed in Chap. 2 (Sec. 2.4
 and Prob. 2.171. Furthermore, by the linearity property (5.491, if the input x ( t ) is periodic
 with the Fourier series
                                                 m

                                      ~ ( 1=)    C ckejkw,+                               (5.73)
                                                &= -m

 then the corresponding output y(l) is also periodic with the Fourier series
CHAP. 51           FOURIER ANALYSIS OF TIME SIGNALS AND SYSTEMS



  If x ( t ) is not periodic, then from Eq. (5.30)



  and using Eq. (5.66), the corresponding output y ( t ) can be expressed as



  Thus, the behavior of a continuous-time LTI system in the frequency domain is completely
  characterized by its frequency response H(w 1. Let
                        X ( w ) = IX(o)leiexcw)            Y ( o )= lY(w)leiey(o)           (5.77)
  Then from Eq. (5.66) we have
                                      b'(o)l= IX(w)llH(o)l                                 (5.78a)
                                      e y ( 4 = e x b >+      e ~ b )                      (5.78b)
  Hence, the magnitude spectrum IX(o)( of the input is multiplied by the magnitude
  response JH(w)lof the system to determine the magnitude spectrum JY(w)lof the output,
  and the phase response O,(o) is added to the phase spectrum O,(w) of the input to
  produce the phase spectrum Oy(o)of the output. The magnitude response IH(o)l is
  sometimes referred to as the gain of the system.

B. Distortionless Transmission:
      For distortionless transmission through an LTI system we require that the exact input
  signal shape be reproduced at the output although its amplitude may be different and it
  may be delayed in time. Therefore, if x ( t ) is the input signal, the required output is
                                           Y ( t) = q
                                                  t - t,)                                 (5.79)
  where t, is the time delay and K ( > 0)is a gain constant. This is illustrated in Figs. 5-4(a)
  and ( b ) .Taking the Fourier transform of both sides of Eq. (5.791, we get
                                        Y ( o )= Ke-jw'dX(w)                                (5.80)
  Thus, from Eq. (5.66) we see that for distortionless transmission the system must have
                                  H ( w )= I H ( ~ ) ~ ~ ~ ~ H (=W Ke-ju'd
                                                                   )                        (5.81)
  Thus,



  That is, the amplitude of H ( o ) must be constant over the entire frequency range, and the
  phase of H ( w ) must be linear with the frequency. This is illustrated in Figs. 5-4(c)and ( d l .
Amplitude Distortion and Phase Distortion:
      When the amplitude spectrum IH(o)( of the system is not constant within the
  frequency band of interest, the frequency components of the input signal are transmitted
  with a different amount of gain or attenuation. This effect is called amplitude distortion.
  When the phase spectrum OH(w)of the system is not linear with the frequency, the output
                   FOURIER ANALYSIS OF TIME SIGNALS AND SYSTEMS                    [CHAP. 5




   Cl    Id    ' I +Id                     I




                         (b)
                               Fig. 5-4 Distortionless transmission.



 signal has a different waveform than the input signal because of different delays in passing
 through the system for different frequency components of the input signal. This form of
 distortion is called phase distortion.


C. LTI Systems Characterized by Differential Equations:
    As discussed in Sec. 2.5, many continuous-time LTI systems of practical interest are
 described by linear constant-coefficient differential equations of the form




 with M I N . Taking the Fourier transform of both sides of Eq. (5.83) and using the
 linearity property (5.49) and the time-differentiation property (5.551, we have
CHAP. 51             FOURIER ANALYSIS O F TIME SIGNALS AND SYSTEMS



     Thus, from Eq. (5.67)




     which is a rational function of o.The result (5.85) is the same as the Laplace transform
     counterpart H ( s ) = Y(s)/X(s) with s = jo [Eq. (3.40)],that is,




5.6 FILTERING
         One of the most basic operations in any signal processing system is filtering. Filtering is
     the process by which the relative amplitudes of the frequency components in a signal are
     changed or perhaps some frequency components are suppressed. As we saw in the
     preceding section, for continuous-time LTI systems, the spectrum of the output is that of
     the input multiplied by the frequency response of the system. Therefore, an LTI system
     acts as a filter on the input signal. Here the word "filter" is used to denote a system that
     exhibits some sort of frequency-selective behavior.


A.     Ideal Frequency-Selective Filters:
      An ideal frequency-selective filter is one that exactly passes signals at one set of
  frequencies and completely rejects the rest. The band of frequencies passed by the filter is
  referred to as the pass band, and the band of frequencies rejected by the filter is called the
  stop band.
      The most common types of ideal frequency-selective filters are the following.
1. Ideal Low-Pass Filter:
        An ideal low-pass filter (LPF) is specified by




  which is shown in Fig. 5-5(a). The frequency o, is called the cutoff frequency.
2. Ideal High-Pass Filter:
        An ideal high-pass filter (HPF) is specified by




 which is shown in Fig. 5-5(b).
                 FOURIER ANALYSIS OF TIME SIGNALS AND SYSTEMS                           [CHAP. 5




                    (c)                                                       (4
                Fig. 5-5    Magnitude responses of ideal frequency-selective filters.



3. Ideal Bandpass Filter:
     An ideal bandpass filter (BPF) is specified by

                                                        0,    < lwl < 0 2
                                 IH(w)l=
                                                         otherwise

  which is shown in Fig. 5-5(c).
4. Ideal Bandstop Filter:
      An ideal bandstop filter (BSF) is specified by

                                              0          0,   < 101< w 2
                                 H(w)1=
                                                         otherwise

  which is shown in Fig. 5-5(d).
      In the above discussion, we said nothing regarding the phase response of the filters. T o
  avoid phase distortion in the filtering process, a filter should have a linear phase
  characteristic over the pass band of the filter, that is [Eq. (5.82b11,



  where t , is a constant.
     Note that all ideal frequency-selective filters are noncausal systems.
CHAP. 51        FOURIER ANALYSIS OF TIME SIGNALS AND SYSTEMS                              229


B. Nonideal Frequency-Selective Filters:
     As an example of a simple continuous-time causal frequency-selective filter, we
 consider the RC filter shown in Fig. 5-6(a).The output y(t) and the input x ( t ) are related
 by (Prob. 1.32)



 Taking the Fourier transforms of both sides of the above equation, the frequency response
 H(w) of the RC filter is given by



 where w 0 = 1/RC. Thus, the amplitude response (H(w)l and phase response OJw) are
 given by




                                                                         (b)
                        Fig. 5-6 RC filter and its frequency response.
230                  FOURIER ANALYSIS OF TIME SIGNALS AND SYSTEMS                        [CHAP. 5


     which are plotted in Fig. 5-6(b). From Fig. 5-6(b) we see that the RC network in
     Fig. 5-6(a) performs as a low-pass filter.



5.7 BANDWIDTH
A.     Filter (or System) Bandwidth:
        One important concept in system analysis is the bandwidth of an LTI system. There are
     many different definitions of system bandwidth.
I . Absolute Bandwidth:
          The bandwidth WB of an ideal low-pass filter equals its cutoff frequency; that is,
     WB= w, [Fig. 5-5(a)]. In this case W, is called the absolute bandwidth. The absolute
     bandwidth of an ideal bandpass filter is given by W, = w 2 - w , [Fig. 5-5(c)]. A bandpass
     filter is called narrowband if W, << w,, where w,, = ;( w , + w 2 ) is the center frequency of
     the filter. No bandwidth is defined for a high-pass or a bandstop filter.
2. 3-dB (or Half-Power) Bandwidth:
         For causal or practical filters, a common definition of filter (or system) bandwidth is
     the 3-dB bandwidth W ,   ., In the case of a low-pass filter, such as the RC filter described
     by Eq. (5.92) or in Fig. 5-6(b), W,     ,,  is defined as the positive frequency at which
     the amplitude spectrum IH(w)l drops to a value equal to I H ( o ) I / ~ ,as illustrated in
     Fig. 5-7(a). Note that (H(O)I is the peak value of H ( o ) for the low-pass RC filter. The
     3-dB bandwidth is also known as the half-power bandwidth because a voltage or current
     attenuation of 3 dB is equivalent to a power attenuation by a factor of 2. In the case of a
                         ,,
     bandpass filter, W, is defined as the difference between the frequencies at which )H(w)l
     drops to a value equal to 1/a times the peak value IH(w,)l as illustrated in Fig. 5-7(b).
     This definition of W ,   ,,
                               is useful for systems with unimodal amplitude response (in the
     positive frequency range) and is a widely accepted criterion for measuring a system's
     bandwidth, but it may become ambiguous and nonunique with systems having multiple
     peak amplitude responses.
         Note that each of the preceding bandwidth definitions is defined along the positive
     frequency axis only and always defines positive frequency, or one-sided, bandwidth only.




                                                                        (6)
                                      Fig. 5-7 Filter bandwidth.
CHAP. 51           FOURIER ANALYSIS O F TIME SIGNALS AND SYSTEMS



B. Signal Bandwidth:
       The bandwidth of a signal can be defined as the range of positive frequencies in which
   "most" of the energy or power lies. This definition is rather ambiguous and is subject to
   various conventions (Probs. 5.57 and 5.76).
3-dB Bandwidth:
       The bandwidth of a signal x ( t ) can also be defined on a similar basis as a filter
   bandwidth such as the 3-dB bandwidth, using the magnitude spectrum (X(o)lof the signal.
   Indeed, if we replace IH(o)l by IX(o)l in Figs. 5-5(a) to ( c ) , we have frequency-domain
   plots of low-pass, high-pass, and bandpass signals.
Band-Limited Signal:
       A signal x(t) is called a band-limited signal if


  Thus, for a band-limited signal, it is natural to define o, as the bandwidth.




                                      Solved Problems

FOURIER SERIES

5.1.   We call a set of signals {*,Jt)} orthogonal on an interval ( a , b) if any two signals ql,,(t)
       and q k ( t ) in the set satisfy the condition



       where * denotes the complex conjugate and a + 0. Show that the set of complex
       exponentials {ejk"o': k = 0, f 1, f 2,. . . ) is orthogonal on any interval over a period To,
       where To = 2.rr/oU.
           For any t o we have




       since eJm2"= 1. When m = 0, we have eJm"o'lm=o= 1 and
                     FOURIER ANALYSIS O F TIME SIGNALS AND SYSTEMS                               [CHAP. 5



       Thus, from Eqs. ( 5 . 9 6 ) and ( 5 . 9 7 ) we conclude that




       which shows that the set {eJkwo':k = 0, +_ 1, f 2,. . . ) is orthogonal on any interval over a period
       To.

5.2.   Using the orthogonality condition (5.98), derive Eq. ( 5 . 5 ) for the complex Fourier
       coefficients.
           From Eq. ( 5 . 4 )




       Multiplying both sides of this equation by e-imwo' and integrating the result from to to
       ( t o + To),we obtain




       Then by Eq. ( 5 . 9 8 ) Eq. ( 5 . 9 9 ) reduces to



       Changing index m to k, we obtain Eq. (5.51, that is,




       We shall mostly use the following two special cases for Eq. (5.101): to = 0 and to = - T 0 / 2 ,
       respectively. That is,




5.3.   Derive the trigonometric Fourier series Eq. ( 5 . 8 ) from the complex exponential
       Fourier series Eq. (5.4).
            Rearranging the summation in Eq. ( 5 . 4 ) as



       and using Euler's formulas
CHAP. 51               FOURIER ANALYSIS O F TIME SIGNALS AND SYSTEMS


       we have

                          ~ ( t=)c , + C [ ( c k+ c P k )cos kwOt + j(ck - C - , ) sin k ~ , t ]   (5.103)
                                          k- 1

       Setting
                                     a,
                                                  c, +c - , = a k    j ( c k - c - ~ =) bk
                                     -5-
       Eq. (5.103) becomes
                                                     m
                                             a0
                                   ~ ( t=) - + C ( a kcos kwot + bk sin k w , , t )
                                                    k=l


5.4.   Determine the complex exponential Fourier series representation for each of the
       following signals:
       ( a ) x ( t ) = cos w,t
       (6) x ( t ) = sin w,t


                   =
                        (  +-
       ( c ) x ( t ) = cos 2 t
                              3
       ( d l x ( t ) cos4t + sin 6 t
       (el x ( t ) = sin2t
       ( a ) Rather than using Eq. ( 5 . 5 ) to evaluate the complex Fourier coefficients c , using Euler's
             formula, we get




             Thus, the complex Fourier coefficients for cos w,t are


       ( b ) In a similar fashion we have




            Thus, the complex Fourier coefficients for sin w,t are




       ( c ) The fundamental angular frequency w , of x ( t ) is 2. Thus,




            Now
                    FOURIER ANALYSIS O F TIME SIGNALS AND SYSTEMS                               [CHAP. 5


             Thus, the complex Fourier coefficients for cos(2t + 7r/4) are




       ( d ) By the result from Prob. 1.14 the fundamental period To of x ( t ) is 7r and w,, = 21r/T, = 2.
             Thus,




             Again using Euler's formula, we have




             Thus, the complex Fourier coefficients for cos 4t + sin 6t are




           and all other c, = 0.
       (e) From Prob. 1.16(e) the fundamental period To of x(t) is rr and w, = 2rr/T,, = 2. Thus,




             Again using Euler's formula, we get




             Thus, the complex Fourier coefficients for sin2 t are
                                          Cpl
                                                -    I
                                                - - -4   c0=$        c,=-$

             and all other c, = 0.

5.5.   Consider the periodic square wave x ( t ) shown in Fig. 5-8.
       (a)   Determine the complex exponential Fourier series of x ( t ).
       ( b ) Determine the trigonometric Fourier series of x ( t 1.
CHAP. 51            FOURIER ANALYSIS OF TIME SIGNALS AND SYSTEMS




                                           Fig. 5-8


     ( a ) Let




           Using Eq. (5.102a), we have




           since ooTo= 27r and ePik"= ( - I)&.Thus,
                                  ck = 0      k=2m#O




           Hence,



           and we obtain
                                      A A "           1
                                 x(t)=-+-    C -ej(2m + I)""'
                                      2 ~ ~ , , , ~ - ~ 2 r n + l

    ( b ) From Eqs. (5.1051, (5.10), and (5.12) we have
                     FOURIER ANALYSIS OF TIME SIGNALS AND SYSTEMS                                [CHAP. 5


            Substituting these values in Eq. (5.81, we get




                                  --
                                   2      7r
                                                          1             1
                                               sin w,l + -sin3wot + -sin5w0t + .
                                                         3          5
                                                                                            )     (.5.107)


5.6.   Consider the periodic square wave x ( t ) shown in Fig. 5-9.
       ( a ) Determine the complex exponential Fourier series of x ( t 1.
       ( b ) Determine the trigonometric Fourier series of x ( r ) .




                                               Fig. 5-9

       ( a ) Let




            Using Eq. (5.102b),we have




            Thus.




            Hence.
                              A                                                 rn      A
                        c0 = -         c,,,, = 0, m z 0       C ~ + I (=- 1 )        (2m I ) a
                                                                                        +
                                                                                                  ( 5.108)
                              2
CHAP. 51           FOURIER ANALYSIS O F TIME SIGNALS AND SYSTEMS


            and we obtain
                                                                    m
                                            A      A     " ( - I ) ej(2m+1)q,t
                                       x(t)=-+-          C -
                                             2     ~,,-,Zrn+l

       (b) From Eqs. (5.108), (5.10), and (5.12) we have




            Substituting these values into Eq. (5.81, we obtain




                                   2     n-
                                                     1           1
                                            cos wOt- -cos3w0t + -cos5wot - . -
                                                     3          5
                                                                                     )       (5.110)

           Note that x(t) is even; thus, x(t) contains only a dc term and cosine terms. Note also that
           x(t) in Fig. 5-9 can be obtained by shifting x(t) in Fig. 5-8 to the left by T0/4.


5.7.   Consider the periodic square wave x ( t ) shown in Fig. 5-10.
       (a) Determine the complex exponential Fourier series of x(t).
       ( b ) Determine the trigonometric Fourier series of x(t).
           Note that x(t) can be expressed as
                                                  ~ ( t =x1(t)
                                                        )      -A

           where x,(t) is shown in Fig. 5-11. Now comparing Fig. 5-11 and Fig. 5-8 in Prob. 5.5, we
           see that x,(t) is the same square wave of x(t) in Fig. 5-8 except that A becomes 2A.




                                             j      -A




                                             Fig. 5-10
                     FOURIER ANALYSIS O F TIME SIGNALS AND SYSTEMS                        [CHAP. 5




                                                 Fig. 5-11


       (a)   Replacing A by 2 A in Eq. (5.106), we have



             Thus,




       ( b ) Similarly, replacing A by 2A in Eq. (5.107), we have



             Thus,



                                                      1            1
                                      =   2(sin o,t + -sin3w,,t
                                          7T          3
                                                                + -sin 5w,r + - . -
                                                                  5
             Note that x ( t ) is odd; thus, x(t) contains only sine terms.

5.8.   Consider the periodic impulse train S G , ( t ) shown in Fig. 5-12 and defined by
                                                          33




                                          - 70        0          70           2 70    I

                                                 Fig. 5-12
CHAP. 51            FOURIER ANALYSIS OF TIME SIGNALS AND SYSTEMS



       ( a ) Determine the complex exponential Fourier series of ST$t).
       ( 6 ) Determine the trigonometric Fourier series of ST$t).
       ( a ) Let




             Since S ( t ) is involved, we use Eq. (5.1026) to determine the Fourier coefficients and we
             obtain




             Hence, we get




                                        a0
                            a T J t ) = i+    z( a , kwot + bk k o , t )
                                              30




                                             k-1
                                                          cos            sin        oo= -
                                                                                          2n
                                                                                          To
             Since aT,$t) is even, b, = 0, and by Eq. (5.9a), a, are given by
                                               2                          2
                                         a, = -/"'/*  S ( t )cos kw0tdt = -
                                              To - T0/2                   To
             Thus, we get




5.9.   Consider the triangular wave x ( t ) shown in Fig. 5-13(a). Using the differentiation
       technique, find ( a ) the complex exponential Fourier series of d t ) , and ( 6 ) the
       trigonometric Fourier series of x( t 1.
            The derivative x l ( t )of the triangular wave x ( t ) is a square wave as shown in Fig. 5-13(b).
       ( a ) Let




       Differentiating Eq. (5.118), we obtain
                                                            m
                                             x l ( t )=    z jko c ejkW~1'
                                                          & = -m
                                                                   o k

       Equation (5.119) shows that the complex Fourier coefficients of x Y t ) equal jkw,c,. Thus, we
       can find ck ( k # 0) if the Fourier coefficients of x l ( t ) are known. The term c, cannot be
       determined by Eq. (5.119) and must be evaluated directly in terms of x ( t ) with Eq. (5.6).
             FOURIER ANALYSIS O F TIME SIGNALS AND SYSTEMS                                [CHAP. 5




                                             (b)
                                         Fig. 5-13


Comparing Fig. 5-13(b) and Fig. 5-10, we see that x f ( r ) in Fig. 5-13(b) is the same as x ( r ) in
Fig. 5-10 with A replaced by 2 A / T 0 . Hence, from Eq. (5.111). replacing A by 2 A / T 0 , we have




Equating Eqs. (5.119) and (5.1201, we have




From Fig. 5-1Na) and Eq. ( 5 . 6 ) we have




Substituting these values into Eq. (5.118), we obtain
CHAP. 51           FOURIER ANALYSIS OF TIME SIGNALS A N D SYSTEMS


           (b) In a similar fashion, differentiating Eq. (5.81, we obtain

                                x'(r) =   zkwo(bkcoskwot -aksin kw,r)
                                           OC



                                          k-1
                                                                                            (5.122)

      Equation (5.122) shows that the Fourier cosine coefficients of xf(t) equal nw,,b, and that the
      sine coefficients equal -nwOak. Hence, from Eq. (5.112), replacing A by 2 A / T 0 , we have




      Equating Eqs. (5.122) and (5.1231, we have
                               b, = 0           a, = O   k=2m#O




      From Eqs. (5.61 and (5.10) and Fig. 5-13(a) we have




      Substituting these values into Eq. (5.8), we get




5.10. Consider the triangular wave x ( t ) shown in Fig. 5-14(a). Using the differentiation
      technique, find the triangular Fourier series of x(t ).
           From Fig. 5-14(a) the derivative x'(t) of the triangular wave x(t) is, as shown in
      Fig. 5-l4(b),




      Using Eq. (5.1171, Eq. (5.125) becomes




      Equating Eqs. (5.126) and (5.122), we have



      From Fig. 5-14(a) and Eq. ( 5 . 9 ~we
                                         ) have




     Thus, substituting these values into Eq. (5.81, we get
                                     A   A W L
                              x(t) = - + -
                                     2
                                                   z
                                                -sin kw,t
                                         T k = ,k
                                                                    W,, =
                                                                            2T
                                                                            -
                                                                            To
                  FOURIER ANALYSIS OF TIME SIGNALS AND SYSTEMS                      [CHAP. 5




                                                  (b)
                                              Fig. 5-14



5-11. Find and sketch the magnitude spectra for the periodic square pulse train signal x ( t )
      shown in Fig. 5-15(a) for ( a ) d = T 0 / 4 , and ( b ) d = T 0 / 8 .
          Using Eq. (5.102a), we have




      Note that c, = 0 whenever k w o d / 2 = m7r; that is,
CHAP. 51            FOURIER ANALYSIS OF TIME SIGNALS AND SYSTEMS




                            -T           O     d      T        2T     t




        Inn
                                             d=I




                                                   Fig. 5-15




     The magnitude spectrum for this case is shown in Fig. 5-15(b).
           ( b ) d = T0/8, k w , d / 2 = krrd/T, = k a / 8 ,




    The magnitude spectrum for this case is shown in Fig. 5-15(c).
244                   FOURIER ANALYSIS OF TIME SIGNALS AND SYSTEMS                                            [CHAP. 5



5.12. If x J t ) and x 2 ( t ) are periodic signals with fundamental period To and their complex
      Fourier series expressions are




      show that the signal x ( t ) = x , ( t ) x 2 ( t ) is periodic with the same fundamental period To
      and can be expressed as



      where c k is given by



         Now                       x ( t + T o ) = x l ( t + To)x2(t+ T , ) = x 1 ( t ) x 2 ( t ) = x ( t )
      Thus, x ( t ) is periodic with fundamental period To. Let




      Then




      since

      and the term in brackets is equal to e,-,.

5.13. Let x l ( t ) and x2( t ) be the two periodic signals in Prob. 5.12. Show that




      Equation ( 5.130) is known as Parseoal's relation for periodic signals.
           From Prob. 5.12 and Eq. (5.129) we have




      Setting k = 0 in the above expression, we obtain
CHAP. 51              FOURIER ANALYSIS O F TIME SIGNALS AND SYSTEMS



5.14. Verify Parseval's identity (5.21) for the Fourier series, that is,




      then                              Ckejkw~r
                                                r   =
                                                          m

                                                         x C-e-ikW
                                                        k- -m
                                                                     =
                                                                           w

                                                                           C
                                                                         k = -w
                                                                                  C*_keikwo'



      where * denotes the complex conjugate. Equation (5.131). indicates that if the Fourier
                                                                                               (5.131)


      coefficients of x(t) are c,, then the Fourier coefficients of x*(t) are c?,. Setting x,(O =x(O
      and x2(t)=x*(t) in Eq. (5.1301, we have d , = c, and ek = c?, or (e-, = c:), and we obtain




5.15. (a)  The periodic convolution f(r) = x ,(t ) @ x2(t) was defined in Prob. 2.8. If d, and
      en are the complex Fourier coefficients of x,(r) and x2(t), respectively, then show that
      the complex Fourier coefficients ck of f(t) are given by


      where To is the fundamental period common to x,(t), x2(t), and f(t).
      (b) Find the complex exponential Fourier series of f ( t ) defined in Prob. 2.8(c).
      (a)    From Eq. (2.70) (Prob. 2.8)




             Let


             Then




             Since

             we get




             which shows that the complex Fourier coefficients c, of f ( t ) equal Todkek.
                     FOURIER ANALYSIS O F TIME SIGNALS AND SYSTEMS                                    [CHAP. 5



      ( b ) In Prob. 2.8(c), x , ( r ) = x 2 ( t )= x ( t ) , as shown in Fig. 2-12, which is the same as Fig. 5-8
            (Prob. 5.5). From Eq. (5.105) we have



            Thus, by Eq. (5.133) the complex Fourier coefficients ck of f ( t ) are




            Note that in Prob. 2.8(c), f ( t ) = x , ( r ) @ x , ( t ) , shown in Fig. 2-13(b), is proportional to
            x ( t ) , shown in Fig. 5-13(a). Thus, replacing A by A ~ T , /in~ the results from Prob. 5.9,
            we get



            which are the same results obtained by using Eq. (5.133).


FOURIER TRANSFORM

5.16. ( a ) Verify the time-shifting property (5.50), that is,
                                            x(t - t o ) H e-jw'~lX
                                                                 (o)
          By definition (5.31)



      By the change of variable T = r - t,,, we obtain




      Hence,



5.17. Verify the frequency-shifting property (5.511, that is,
                                             x ( t ) eiwuJ
                                                         HX(O      - wO)
          By definition (5.31)
CHAP. 51           FOURIER ANALYSIS OF TIME SIGNALS AND SYSTEMS


      Hence,
                                         ~ ( t e)i " ~ ' wX(w - w,)

5-18. Verify the duality property (5.54), that is,


           From the inverse Fourier transform definition (5.321, we have



      Changing t to - t, we obtain



      Now interchanging r and o,we get




      Since

      we conclude that



5.19. Find the Fourier transform of the rectangular pulse signal x ( t ) [Fig. 5-16(a)] defined
      by



           By definition (5.31)




                      (4                                                    (b)
                       Fig. 5-16 Rectangular pulse and its Fourier transform.
248               FOURIER ANALYSIS O F TIME SIGNALS AND SYSTEMS                              [CHAP. 5


      Hence, we obtain
                                                          sin o a             sin ma
                                     p u ( t ) -2-                   =2a-
                                                            o                   wa
      The Fourier transform X(o) of x(t) is sketched in Fig. 5-16(b).

5.20. Find the Fourier transform of the signal [Fig. 5-17(a)]
                                                                sin at
                                                   x(t) = -
                                                                    7Tt

          From Eq. (5.136) we have
                                                                    sin o a
                                                 pa(!) t-,2-
                                                                      W

      Now by the duality property (5.541, we have

                                            2-
                                                 sin at
                                                   I
                                                          -     257pa( - o )

      Dividing both sides by 2~ (and by the linearity property), we obtain
                                        sin at
                                        --pa(-o)                          = pa(w)
                                           Tt
      where pa(w) is defined by [see Eq. (5.135) and Fig. 5-1Xb)I




                     (a)                                                               (b)
                           Fig. 5-17 sin a t / ~ and
                                                 t its Fourier transform.



5.21. Find the Fourier transform of the signal [Fig. 5-18(a)]
                                        x ( t ) = e-alfl                   a>O
          Signal x(t) can be rewritten as
CHAP. 51          FOURIER ANALYSIS OF TIME SIGNALS AND SYSTEMS




                     0                      I                                    0
                             Fig. 5-18   e-Ial' and its Fourier transform.



     Then




     Hence, we get



     The Fourier transform X ( w ) of x ( l ) is shown in Fig. 5-18(b).

     Find the Fourier transform of the signal [Fig. 5-19(a)]
                                                           1
                                                x(t) = -
                                                       a2 + t 2
           From Eq. (5.138) we have



     Now by the duality property ( 5 . 5 4 )we have




                         Fig. 5-19    l/(a2 + 1 2 , and its Fourier transform.
                     FOURIER ANALYSIS O F TIME SIGNALS AND SYSTEMS                               [CHAP. 5


      Dividing both sides by 2 a , we obtain




      The Fourier transform X ( w ) of x ( t ) is shown in Fig. 5-19(b).


5.23. Find the Fourier transforms of the following signals:
      ( a ) x(t) = 1                   ( b ) x(t) =eJWO'
      (c) x(t)=e-JWu'                  ( d ) x(t) = cos o,t
      (e) x ( t ) = s i n o , t
      ( a ) By Eq. (5.43) we have


            Thus, by the duality property (5.54) we get


            Figures 5-20(a) and ( b ) illustrate the relationships in Eqs. (5.140) and ( 5 . 1 4 0 , respec-
            tively.
      ( b ) Applying the frequency-shifting property (5.51) to Eq. (5.1411, we get




Fig. 5-20 ( a ) Unit impulse and its Fourier transform; ( 6 ) constant (dc) signal and its Fourier
          transform.
                   FOURIER ANALYSIS OF TIME SIGNALS AND SYSTEMS                                25 1


            From Eq. (5.142) it follows that
                                               e-j"~'H2rTTS(o + w o )

            From Euler's formula we have

                                                           2
                                                                    +
                                             COS mot = L ( e ~ " ' ~e' - ~ w ~ ' )




                                     cos wot   -
           Thus, using Eqs. (5.142) and (5.143) and the linearity property (5.49), we get
                                                       - w,,) + 6(w + w o ) ]
                                                   ~[6(w

           Figure 5-21 illustrates the relationship in Eq. (5.144).
                                                                                            (5.144)


           Similarly, we have




                                   sin wot   -
           and again using Eqs. (5.142) and (5.143), we get
                                                 - j.rr[S(o - w o ) - 6 ( w + w o ) ]       (5.145)




                                                                                     (b)
                         Fig. 5-21 Cosine signal and its Fourier transform.




5.24. Find the Fourier transform of a periodic signal x ( t ) with period T o .
          We express x(t ) as




      Taking the Fourier transform of both sides and using Eq. (5.142) and the linearity property
      (5.49), we get




      which indicates that the Fourier transform of a periodic signal consists of a sequence of
      equidistant impulses located at the harmonic frequencies of the signal.
252                 FOURIER ANALYSIS O F TIME SIGNALS AND SYSTEMS                              [CHAP. 5


5.25. Find the Fourier transform of the periodic impulse train [Fig. 5-22(a)]



            From Eq. (5.115) in Prob. 5.8, the complex exponential Fourier series of 6,,,(t) is given by



      Using Eq. (5.1461, we get



                                                           m

                                                 = W()    C S(w - kw,) = w,G,,(w)
                                                         k = -m

                                                                                                (5.147)

      Thus, the Fourier transform of a unit impulse train is also a similar impulse train [Fig. 5-22(b)].




                       (0)                                                               (6)
                        Fig. 5-22     Unit impulse train and its Fourier transform.



5.26. Show that


      and
                               x ( t ) cos o,,t
                              x ( t ) sin w,,t
                                                 --  -j
                                                         i X ( o - o,,)+ i X ( o + o o )
                                                           [ : ~ ( w- w,) - : ~ ( +o w,)]
      Equation (5.148) is known as the modulation theorem.
            From Euler's formula we have
                                             cos wol = i ( e j W +     -jW
                                                                             1
      Then by the frequency-shifting property (5.51) and the linearity property (5.491, we obtain
                              ~ [ x ( t ) c owet]               ) + 'x(t)
                                             s = . ~ [ i x ( t ei"ut 2    e-jU~lt         I
                                                     = ; x ( w - wo)   + f x ( w + w,)
      Hence,
                                                      t $X(W- w,) + ; x ( w + w")
                                    X ( ~ ) C O~ S( )c-'
CHAP. 51           FOURIER ANALYSIS OF TIME SIGNALS A N D SYSTEMS


      In a similar manner we have




             and
                                                            [
                                                                1
                              Y [ x ( t )sin w , t ] = Y - x ( t )

                                                        1
                                                                2i
                                                                                   1
                                                                        eJ"ot - -x ( t ) e -'"o'

                                                                               1
                                                                                                   I
                                                   =-X(w             -w,) - - X ( w        + w,)
                                                      2J                    2J
             Hence,
                                  x ( t ) sin wot t* - j [ i ~ ( w
                                                                 -wo) - ;X(O               +wo)]

5.27. The Fourier transform of a signal x ( t ) is given by [Fig. 5-23(a)]
                                   X ( w ) = $pa(w - wo) + ; P ~ ( W + ~               0    )

      Find and sketch x ( r ) .
           From Eq. (5.137)and the modulation theorem (5.148)it follows that
                                                 sin at
                                       x ( t ) = -COS wot
                                                         Tf

      which is sketched in Fig. 5-23(b).




                                                   (4
                                               Fig. 5-23
254                FOURIER ANALYSIS OF TIME SIGNALS AND SYSTEMS                     [CHAP. 5



5.28. Verify the differentiation property (5.55), that is,




           From Eq. (5.321 the inverse Fourier transform of X(w) is



      Then




      Comparing Eq. (5.151) with Eq. (5.150), we conclude that dr(t)/dt is the inverse Fourier
      transform of jwX(w). Thus,




5.29. Find the Fourier transform of the signum function, sgn(t) (Fig. 5-24), which is defined
      as



           The signum function, sgn(t), can be expressed as
                                           sgn(t) = 2 u ( t ) - 1
      Using Eq. (1.301, we have




                                    Fig. 5-24 Signum function.
CHAP. 51            FOURIER ANALYSIS O F TIME SIGNALS AND SYSTEMS


      Let
                                                sgn(t) -X(w)
      Then applying the differentiation property (5.551, we have
                                                                               2
                                  jwX(w) = F [ 2 6 ( t ) ] = 2 + X ( w )   =   -
                                                                               iw
      Hence,



      Note that sgn(t) is an odd function, and therefore its Fourier transform is a pure imaginary
      function of w (Prob. 5.41).

530. Verify Eq. (5.481, that is,
                                                                       1
                                            ~ ( tH             +
                                                 ) ~ s ( 0 . l ) y-
                                                                   I
            As shown in Fig. 5-25, u(t) can be expressed as


      Note that $ is the even component of u(t) and sgn(t) is the odd component of d t ) . Thus, by
      Eqs. (5.141) and (5.153) and the linearity property (5.49) we obtain




                    Fig. 5-25 Unit step function and its even and odd components.




531. Prove t h e time convolution theorem (5.581, that is,
                                       -4)
                                         * - 4 1 ) -X,(4X*(4
            By definitions (2.6) and (5.311, we have



      Changing the order of integration gives
                   FOURIER ANALYSIS OF TIME SIGNALS AND SYSTEMS              [CHAP. 5


      By the time-shifting property (5.50)



      Thus, we have




5.32. Using the time convolution theorem (5.58), find the inverse Fourier transform of
                      +
      X ( w ) = l/(a j ~ ) ~ .
          From Eq. ( 5 . 4 5 ) we have




      Now




      Thus, by the time convolution theorem (5.58) we have
                                   x ( r ) = e-"u(r) * e-"u(t)




      Hence,




5.33. Verify the integration property (5.57), that is,




          From Eq. (2.60)we have
CHAP. 51            FOURIER ANALYSIS OF TIME SIGNALS AND SYSTEMS


      Thus, by the time convolution theorem (5.58) and Eq. (5.154) we obtain




      since X ( o ) S ( o )= X(O)S(w) by Eq. (1.25). Thus,




5.34. Using the integration property ( 5 . 5 7 ) and Eq. ( 1 . 3 1 ) , find the Fourier transform of
      u(t).
            From Eq. (1.31) we have

                                                           ( t )=   / S(r)dr
                                                                    -m
      Now from Eq. (5.140)we have


      Setting x ( r ) = S(7) in Eq. (5.571, we have
                                                               S(t)   -    1


                                  x(t) =s ( t )- X ( o )            =1         and           X(0) = 1
      and




5.35. Prove the frequency convolution theorem (5.591, that is,
                                                           1
                                           x d f ) x 2 W "% X I ( 4              *X2(4
            By definitions (5.31) and (5.32) we have

                    . F [ x l ( t ) x 2 ( t )=
                                             ]   jm
                                                  -
                                                    ~~(t)x,(t)e-~"'dt
                                                      m




                                                                                     1
                                                                X,(h)eJ" dA ~ , ( t ) e - ~ " ' d t


                                           =-
                                                  1


                                                 2~
                                                     / X , ( A ) x,(t)e-j("-*)'dt
                                                          m


                                                          -w          -m

                                           =     -/
                                                  1       m                         1
                                                       X , ( A ) X , ( o - A) d l - X , ( o ) * X , ( o )
                                                 2 7 ~-,                          27r
                                                                                         =


      Hence,
258               FOURIER ANALYSIS OF TIME SIGNALS AND SYSTEMS                                [CHAP. 5



5.36. Using the frequency convolution theorem (5.59), derive the modulation theorem
      (5.148).
          From Eq. (5.144) we have
                                  cos w,t   -     a6(w - 0 , ) + a 6 ( 0 + w 0 )



                                       -
      By the frequency convolution theorem (5.59) we have
                                             1
                        ~ ( t cos
                               ) 0,t        -X(0)*
                                            2lT
                                                          [ a S ( w - 00)   + d ( 0+w ~ ) ]
                                       = + X ( O - 0,)    + $X(w + 0 , )
      The last equality follows from Eq. (2.59).

5.37. Verify Parseval's relation (5.63), that is,



          From the frequency convolution theorem (5.59) we have




      Setting w = 0, we get



      By changing the dummy variable of integration, we obtain




5.38. Prove Parseval's identity [Eq. (5.6411 or Parseval's theorem for the Fourier transform,
      that is,



          By definition (5.31) we have




      where * denotes the complex conjugate. Thus,
                                              x*(t)-X*(-w)
CHAP. 51             FOURIER ANALYSIS OF TIME SIGNALS AND SYSTEMS


      Setting x,(t) = x(r) and x2(t)=x*(t) in Parseval's relation (5.631, we get




5.39. Show that Eq. (5.61a), that is,
                                               X*(O) = X ( - 0 )

      is the necessary and sufficient condition for x ( t ) to be real.
           By definition (5.31)




      If x(t) is real, then x*(t) = x(t) and




      Thus, X*(w) = X(-w) is the necessary condition for x(t) to be real. Next assume that
      X * ( o ) = X(- o). From the inverse Fourier transform definition (5.32)



      Then




      which indicates that x(t) is real. Thus, we conclude that
                                               X * ( W )= X ( - W )

      is the necessary and sufficient condition for x(t) to be real.


5.40. Find the Fourier transforms of the following signals:
      (a) x ( t ) = u ( - t )
      ( b ) x(t)=ea'u(-t), a > O
                   FOURIER ANALYSIS O F TIME SIGNALS AND SYSTEMS                          [CHAP. 5


      From Eq. (5.53) we have
                                                     X(- t ) -X(-w)
            Thus, if x ( t ) is real, then by Eq. ( 5 . 6 1 ~we
                                                             ) have
                                              x( -1) - X ( - 0 )          =X*(w)
       ( a ) From Eq. (5.154)




             Thus, by Eq. (5.158) we obtain



      ( b ) From Eq. (5.155)

                                                    e-"'u(t)      -   -
                                                                      a+jw
                                                                          1


             Thus, by Eq. (5.158) we get




5.41. Consider a real signal x ( t ) and let
                                    X ( o ) = F [ x ( t ) ] =A ( w )       +j B ( o )


      where x,(t) and x,(t) are the even and odd components of x ( t ) , respectively. Show
      that
                                                  x&) + N o )                             (5.161~)
                                                  x,( t ) - j B ( o   )                   (5.161b)
          From Eqs. (1.5) and (1.6) we have
                                            x , ( t ) = f [.(I)   +X( -t ) ]
                                           x,(t) = f [ x ( t ) - x ( - t ) ]
      Now if x ( t ) is real, then by Eq. (5.158) we have
                                  X(t) H X ( O ) = A ( @ ) jB(w)  +
                                x ( - t ) H X ( - W ) = X * ( W )= A ( w ) - j B ( w )
      Thus, we conclude that
                                     x,(t) - ~ x ( w )      + ;X*(O) =A(w)
                                     x,(t) t--, ~ x ( w )- $ x * ( o ) =j B ( w )
      Equations (5.161~)and (5.161b) show that the Fourier transform of a real even signal is a real
      function of o,and that of a real odd signal is an imaginary function of w, respectively.
CHAP. 51            FOURIER ANALYSIS OF TIME SIGNALS AND SYSTEMS



                               ) (5.1551, find the Fourier transform of e-"Itl ( a > 0).
5-42, Using Eqs. ( 5 . 1 6 1 ~and
            From Eq. (5.155)we have




      By Eq. (1.5) the even component of e-"'u(t) is given by


      Thus, by Eq. ( 5 . 1 6 1 ~we
                                 ) have




      which is the same result obtained in Prob. 5.21 [Eq. (5.138)l.

5.43. Find the Fourier transform of a gaussian pulse signal


            By definition (5.31)



      Taking the derivative of both sides of Eq. (5.162)with respect to o,we have



      Now, using the integration by parts formula



      and letting
                                          =   -jwl
                                                     and   do =        dr
      we have



      and
                   FOURIER ANALYSIS O F TIME SIGNALS AND SYSTEMS                      [CHAP. 5



      since a > 0. Thus, we get
                                            dX(w)
                                            --        w
                                                  - --X(w)
                                              dw             2a
      Solving the above separable differential equation for X ( w ) , we obtain


      where A is an arbitrary constant. To evaluate A we proceed as follows. Setting w = 0 in
      Eq. (5.162) and by a change of variable, we have



      Substituting this value of A into Eq. (5.1631, we get



      Hence, we have



      Note that the Fourier transform of a gaussian pulse signal is also a gaussian pulse in the
      frequency domain. Figure 5-26 shows the relationship in Eq. (5.165).




                        Fig. 5-26 Gaussian pulse and its Fourier transform.




FREQUENCY RESPONSE

5.44. Using t h e Fourier transform, redo Prob. 2.25.
          The system is described by
                                       y'(t) + 2 y ( t ) = x ( t ) + x f ( t )
      Taking the Fourier transforms of the above equation, we get
                                   jwY(w) + 2Y(w) =X ( w ) + j w X ( w )
CHAP. 51          FOURIER ANALYSIS O F TIME SIGNALS AND SYSTEMS


      or

                                    ( jw + 2)Y(w) = (1 + jw) X(w )

      Hence, by Eq. (5.67) the frequency response H(w) is




      Taking the inverse Fourier transform of H(w), the impulse response h(t) is



     Note that the procedure is identical to that of the Laplace transform method with s replaced
     by j w (Prob. 3.29).



5.45. Consider a continuous-time LTI system described by




     Using the Fourier transform, find the output y(t) to each of the following input
     signals:

     ( a ) x(t) = eP'u(t)
     (b) x(r)=u(t)
     (a)   Taking the Fourier transforms of Eq. (5.1661, we have

                                         jwY(w) + 2Y(w) = X(w)

           Hence,




           From Eq. (5.155)




           and




           Therefore,
                   FOURIER ANALYSIS O F TIME SIGNALS AND SYSTEMS                                 [CHAP. 5


      ( b ) From Eq. (5.154)




             Thus, by Eq. (5.66) and using the partial-fraction expansion technique, we have




                                                       1        1
                                          =q    w ) -+
                                                    2 + jw jw(2 + j w )




            where we used the fact that f ( w ) 6 ( w ) = f(O)6(o) [Eq. (1.2511. Thus,



            We observe that the Laplace transform method is easier in this case because of the
            Fourier transform of d t ) .


5.46. Consider the LTI system in Prob. 5.45. If the input x ( t ) is the periodic square
      waveform shown in Fig. 5-27, find the amplitude of the first and third harmonics in the
      output y ( t ) .
          Note that x ( t ) is the same x ( t ) shown in Fig. 5-8 [Prob. 5.51. Thus, setting A = 10, To = 2,
      and w , = 2rr/T0 = rr in Eq. (5.1061, we have




      Next, from Prob. 5.45




                                               Fig. 5-27
CHAP. 51          FOURIER ANALYSIS OF TIME SIGNALS AND SYSTEMS


      Thus, by Eq. (5.74) we obtain




      Let



      The harmonic form of y(r) is given by [Eq. (5.15)]



     where D k is the amplitude of the kth harmonic component of y(t ). By Eqs. (5.11) and (5.16),
     D, and d , are related by

     Thus, from Eq. (5.167), with m = 0, we obtain

                                   D , = 21d,I = 2   1 +10
                                                     ja(2 ja)
                                                                I=1.71

      With m = 1, we obtain




5.47. The most widely used graphical representation of the frequency response H(w) is the
      Bode plot in which the quantities 2010glo~H(w)land 8,(0) are plotted versus w, with
      w plotted on a logarithmic scale. The quantity 2010glolH(o)l is referred to as the
      magnitude expressed in decibel! (dB), denoted by (H(o)l,,. Sketch the Bode plots for
      the following frequency responses:




                               +
                       104(1 j o )
     ( c ) H(w) =
                           +
                    (10 jw)(lOO + jw)



            For o << 10,
CHAP. 51           FOURIER ANALYSIS OF TIME SIGNALS AND SYSTEMS


            For o s 10,



           On a log frequency scale, 2010glo(w/10) is a straight line with a slope of 20 dB/decade
           (a decade is a 10-to-1 change in frequency). This straight line intersects the 0-dB axis at
           o = 10 [Fig. 5-28(a)]. (This value of o is called the comer frequency.) At the corner
           frequency w = 10
                                 ~(10)1,, = 2010glo11+ jll = 2010glofi-- 3 dB
           The plot of (H(w)ldBis sketched in Fig. 5-28(a). Next,



           Then
                                                     W
                                   O,(o)   = tan-'   -
                                                     10
                                                        --,0       aso-0



           At w = 10, OH(lO)= tan-' 1 = ~ / 4radian (rad). The plot of BH(o) is sketched in
           Fig. 5-28(b). Note that the dotted lines represent the straight-line approximation of the
           Bode plots.




           For o     100,



           For w >> 100,



           On a log frequency scale -2010glo(w/100) is a straight line with a slope of
           -20 dB/decade. This straight line intersects the 0-dB axis at the corner frequency
           o = 100 [Fig. 5-29(a)]. At the corner frequency o = 100
                                     H(100)1,,   = -2010glofi = -3     dB
           The plot of IH(w)ldBis sketched in Fig. 5-29(a). Next



           Then




           At o = 100, 8,(100)    = -tanp'   1 = - ~ / 4 rad. The plot of OH(w) is sketched in
           Fig.    6).
CHAP. 51            FOURIER ANALYSIS O F TIME SIGNALS AND SYSTEMS


      (c)    First, we rewrite H(w) in standard form as
                                                           lO(1 +jw)
                                          H(o) =
                                                    ( 1 +jw/lO)(l +jo/100)
             Then




             Note tha~t there are three corner frequencies, o = 1, w = 10, and w = 100. A,t corner
             frequency w = 1
                       H ( ~ ) I , , = 20 + 20loglO& - 2010g,,m6- - 2 0 1 0 g , %~23~dB
             At corner frequency w = 10
                        ~ ( 1 0 ) ~ ~ , = 2 0 + 2 0 l o ~ , , ~ - 2 0 1 o ~2 ,0, 1&0 -g l o m b 37dB
             At corner frequency w = 100


             The Bode amplitude plot is sketched in Fig. 5-30(a). Each term contributing to the
             overall amplitude is also indicated. Next,
                                                                    w            0
                                      OH(w) = tan-' w - tan-' - - t a n - ' -
                                                              10            100
             Then




             and
                              e H ( l ) = tan-'(1) - tan-'(0.1) - tan-'(0.01)     = 0.676 rad

                             eH(lO) = tan-'(10) - tan-'(1) - tan-'(0.1)         = 0.586 rad

                           8,(100) = tan-'(100) - tan-'(10) - tan-'(1) = -0.696 rad
             The plot of eH(w) is sketched in Fig. 5-30(b).

5.48. An ideal ( -7r/2) radian (or -90") phase shifter (Fig. 5-31) is defined by the frequency
      response



      ( a ) Find the impulse response h(t ) of this phase shifter.
      (6) Find the output y ( t ) of this phase shifter due to an arbitrary input x(t).
      ( c ) Find the output y(t) when x ( t ) = cos o o t .
      (a) Since e - j " l 2 = -j and e J " / 2 = j, H(w) can be rewritten as
                                                  H(w) = -jsgn(w)                                      (5.170)
270   FOURIER ANALYSIS OF TIME SIGNALS AND SYSTEMS   [CHAP. 5




                    Fig. 5-30 Bode plots.
CHAP. 51            FOURIER ANALYSIS O F TIME SIGNALS AND SYSTEMS




                                                -
                                  Fig. 5-31 - n / 2 rad phase shifter.

            where




                                                                  -
            Now from Eq. (5.153)
                                                                         2
                                                         sgn(t)         jo
            and by the duality property (5.54) we have




                                                        1
                                                      -     C,   - jsgn(w)                      (5.172)
                                                      Tt
            since sgn(w) is an odd function of w. Thus, the impulse response h(t) is given by
                                                                                            1
                                  h ( t ) = F - ' [ ~ ( w ) ]= F - ' [ - j s g n ( w ) ]   =-   (5.173)
                                                                                           nt

      ( b ) By Eq. (2.6)



            The signal y(t) defined by Eq. (5.174) is called the Hilbert transform of x ( t ) and is
            usually denoted by f (l).
     ( c ) From Eq. (5.144)
                                        cos wet H T[S(W - w,,) + a ( w + wO)]
            Then
                           Y(w) = X ( w ) H ( w ) = T [ s ( ~- w,) + S(w + w,)][-jsgn(w)]
                                 = - j sgn(w,)S(w
                                        ~           - w,,) - jT sgn( -w,,)S(w + w,)
                               = - j d ( w - w,) + j.rrS(w + w,)

            since sgn(oo) = 1 and sgn( -w,)     - 1. Thus, from Eq. (5.145) we get
                                                        y ( t ) =sin w,t
            Note that cos(w,t - 7/21 = sin wot.

5.49. Consider a causal continuous-time LTI system with frequency response
                                             H ( o ) = A ( w ) +j B ( o )
     Show that the impulse response h ( t ) of the system can be obtained in terms of A(w)
     or B(w) alone.
                    FOURIER ANALYSIS O F TIME SIGNALS AND SYSTEMS                               [CHAP. 5


            Since the system is causal, by definition
                                                   h(t)=0              r<O
     Accordingly,


      Let


     where he(r) and h,(t) are the even and odd components of h(r), respectively. Then from
     Eqs. ( 1 . 5 ) and ( 1 . 6 ) we can write
                                                h ( r ) = 2he(r)= 2h,(r)
     From Eqs. (5.616) and ( 5 . 6 1 ~we
                                       ) have
                                    h,(t) -A(w)              and        h,(t) -jB(w)
     Thus, by Eq. (5.175)




     Equations ( 5 . 1 7 6 ~and
                             ) (5.176b) indicate that h ( t ) can be obtained in terms of A ( w ) or B ( w )
     alone.

5.50. Consider a causal continuous-time LTI system with frequency response
                                                H ( o ) = A ( o ) +j B ( o )
     If the impulse response h ( t ) of the system contains no impulses at the origin, then
     show that A ( w ) and B ( w ) satisfy the following equations:




            As in Prob. 5.49, let
                                               h ( r ) = h e ( r )+ h o ( t )
     Since h ( t ) is causal, that is, h(r) = 0 for t < 0, we have
                                              h e ( t )= - h O ( t )        t <O
     Also from Eq. (5.175) we have
                                      h,(t) =h,(t)                         r>O
     Thus, using Eq. (5.1521, we can write
                                                  h , ( t ) = h , ( r ) sgn(r)
                                                  h o ( r ) = h e ( r ) sgn(t)
      Now, from Eqs. (5.6161, (5.61~1,
                                     and (5.153) we have
CHAP. 51           FOURIER ANALYSIS OF TIME SIGNALS A N D SYSTEMS


      Thus, by the frequency convolution theorem (5.59) we obtain



      and




      Note that A ( w ) is the Hilbert transform of B ( w )[Eq. (5.17411 and that B ( w )is the negative of
      the Hilbert transform of A(w).

5.51. The real part of the frequency response H ( w ) of a causal LTI system is known to be
      r S ( w ) . Find the frequency response H ( o ) and the impulse function h ( t ) of the
      system.
            Let
                                            H ( w ) = A ( w ) + jB( w )
      Using Eq. (5.177b1, with A ( w ) = 7 ~ 8 ( w )we
                                                     , obtain



      Hence,



      and by Eq. (5.154)
                                                  h(t) =u(t)



FILTERING

     Consider an ideal low-pass filter with frequency response



     The input to this filter is
                                                       sin at
                                                x(r) = -
                                                         7T t

     (a)   Find the output y ( r ) for a < w,.
     ( b ) Find the output y( t ) for a > w,.
     ( c ) In which case does the output suffer distortion?
                        FOURIER ANALYSIS O F TIME SIGNALS AND SYSTEMS                                       [CHAP.5


      ( a ) From Eq. (5.137) (Prob. 5.20) we have
                                             sin at                                          I4 < a
                                      ~ ( t=)-- X ( w )            = p 0 ( w )=
                                               ~t                                            Iwl > a
                Then when a < w,, we have
                                                   Y ( w )=X ( w ) H ( w )= X ( w )
                Thus,
                                                                   sin at
                                                       y(t) =x(t)= -
                                                                     Xt

      ( b ) When a > w,, we have
                                                   Y ( w ) = X ( w ) H ( w )= H ( w )
                Thus,
                                                                        sin o,t
                                                      y(t) =h(t) =      - Xt
      (c)       In case ( a ) , that is, when w, > a , y ( t ) = x ( t ) and the filter does not produce any
                distortion. In case ( b ) , that is, when w, < a , y ( t ) = h ( t ) and the filter produces distortion.

5.53. Consider an ideal low-pass filter with frequency response



      The input to this filter is the periodic square wave shown in Fig. 5-27. Find the output
      y( t 1.
            Setting A = 10, T, = 2, and w , = 2n/To = n in Eq. (5.107) (Prob. 5 . 9 , we get



      Since the cutoff frequency o, of the filter is 4 7 ~rad, the filter passes all harmonic components
      of x ( t ) whose angular frequencies are less than 4 n rad and rejects all harmonic components of
      x ( t ) whose angular frequencies are greater than 477 rad. Therefore,
                                                          20            20
                                            y ( t ) = 5 + - s i n n t + -s i n 3 ~ t
                                                          x             3n


5 - 5 4 Consider an ideal low-pass filter with frequency response




      The input to this filter is


      Find the value of o, such that this filter passes exactly one-half of the normalized
      energy of the input signal x ( t ).
CHAP. 51           FOURIER ANALYSIS OF TIME SIGNALS AND SYSTEMS


            From Eq. (5.155)



      Then




      The normalized energy of x ( t ) is



      Using Parseval's identity (5.641, the normalized energy of y ( t ) is




                           =-/
                            1
                               --
                                 do    w,1      w,
                                      - - tan-' -
                               4 + 0 2 27
                               T   O            2
                                                   1
                                                   -E  -1
                                                   2 " 8
                                                                    =       =


      from which we obtain
                                                 IT
                                       -'"=
                                          c
                                              tan - = 1       and       o, = 2 rad/s
                                       2         4


5.55. T h e equivalent bandwidth of a filter with frequency response H ( o ) is defined by



      where IH(w)lm, denotes the maximum value of the magnitude spectrum. Consider the
      low-pass RC filter shown in Fig. 5 - 6 ( a ) .
      ( a ) Find its 3-dB bandwidth W,.,
      ( b ) Find its equivalent bandwidth We,.
      (a)   From Eq. (5.91) the frequency response H ( w ) of the RC filter is given by
                                                          1                 1
                                              H(o)=                 -
                                                      l+joRC            l+j(o/o,)
             where o, = 1 /RC. Now




            The amplitude spectrum lH(w)l is plotted in Fig. 5-6(b). When w = o , = 1/RC,
            IH(o,)l = I / & . Thus, the 3-dB bandwidth of the RC filter is given by
                  FOURIER ANALYSIS OF TIME SIGNALS AND SYSTEMS                           [CHAP. 5



      ( 6 ) From Fig. 5-6(b) we see that IH(O)I = 1 is the maximum of the magnitude spectrum.
            Rewriting H(w) as



           and using Eq. (5.179), the equivalent bandwidth of the RC filter is given by (Fig. 5-32)




                                                0      Wa    Weq          w

                                    Fig. 5-32 Filter bandwidth.



5.56. The risetime t , of the low-pass RC filter in Fig. 5-6(a) is defined as the time required
      for a unit step response to go from 10 to 90 percent of its final value. Show that



      where f,   ,, W,,,/2.rr = 1/2.rrRC is the 3-dB bandwidth (in hertz) of the filter.
                   =

          From the frequency response H(w) of the RC filter, the impulse response is



      Then, from Eq. (2.12) the unit step response d t ) is found to be




      Dividing the first equation by the second equation on the right-hand side, we obtain
                                               e ( r ~ - r d / R C= 9
CHAP. 51           FOURIER ANALYSIS OF TIME SIGNALS AND SYSTEMS




                                                 Fig. 5-33


      and




      which indicates the inverse relationship between bandwidth and risetime.

5.57. Another definition of bandwidth for a signal x ( t ) is the 90 percent energy containment
      bandwidth W,, defined by



      where Ex is the normalized energy content of signal x ( t ) . Find the W , for the
      following signals:
      ( a ) x ( t ) = e-"'u(t), a > 0
                      sin at
      ( b ) x(t)= -
                      rr l
      (a)   From Eq. (5.155)

                                        ~ ( t=)e - " u ( t )   -      1
                                                               X( W ) = -
                                                                    a +jo
            From Eq. (1.14)



            Now, by Eq. (5.180)
                    FOURIER ANALYSIS O F TIME SIGNALS AND SYSTEMS                              [CHAP. 5


            from which we get




            Thus.



      (b)   From Eq. (5.137)
                                         sin at                                  Iwl < a
                                ~ ( t =) --X(w)          =pu(w) =
                                           7~t                                   Iwl > a
            Using Parseval's identity (5.64), we have




            Then, by Eq. (5.180)



            from which we get
                                                Ww = 0.9a rad/s
            Note that the absolute bandwidth of x(t) is a (radians/second).

5.58. Let x ( t ) be a real-valued band-limited signal specified by [Fig. 5-34(b)]


      Let x,(t be defined by




                                      and for T, > r/oM.
      ( a ) Sketch x $ t ) for T, < r/o,
      ( b ) Find and sketch the Fourier spectrum X $ o ) of x J r ) for T, < r/oM and for
            T, > n/w,.
      (a) Using Eq. (I.26), we have




            The sampled signal x , ( r ) is sketched in Fig. 5-34(c) for Tq< r/w,, and in Fig. 5-34(i) for
            T, > T / w ~ .
               The signal x,(t) is called the ideal sampled signal, T, is referred to as the sampling
            interr.al (or period), and f , = 1/T, is referred to as the sampling rate (or frequency ).
CHAP. 51   FOURIER ANALYSIS OF TIME SIGNALS AND SYSTEMS




                       Fig. 5-34 Ideal sampling.
                  FOURIER ANALYSIS OF TIME SIGNALS AND SYSTEMS                           [CHAP. 5


      ( h ) From Eq. (5.147) (Prob. 5.25) we have



            Let


            Then, according to the frequency convolution theorem (5.59), we have




            Using Eq. (1.261, we obtain



           which shows that X,(w) consists of periodically repeated replicas of X(w) centered about
           kw, for all k. The Fourier spectrum X,(w) is shown in Fig. 5-34 f ) for T, < r/w, (or
           w, > 2wM), and in Fig. 5-34( j ) for T, > r / w M (or w, < 2wM), where w, = 27~/T,. It is
           seen that no overlap of the replicas X(o - ko,) occurs in X,(o) for w, r 2wM and that
           overlap of the spectral replicas is produced for w,$ < 2wM. This effect is known as
           aliasing.


5.59. Let x ( t ) be a real-valued band-limited signal specified by


      Show that x ( t ) can be expressed as
                                           cC              sin wM(t - kT,)
                                 41)= & -C x(kTs)
                                            -m                    - kT-)
      where T, = rr/w,.
          Let




      From Eq. ( 5.183 we have
                                                    Xi


                                     T,X,(w) =      C X ( o - ko,)
                                                  k = -m

      Then, under the following two conditions,
                                                                                  7T
                          (1)    X(o)=O,IwI>o,              and     (2)    T,=-
                                                                                  WM

      we see from Eq. (5.1185 that
CHAP. 51           FOURIER ANALYSIS O F TIME SIGNALS AND SYSTEMS


       Next, taking the Fourier transform of Eq. (5.182), we have




       Substituting Eq. (5.187) into Eq. (5.186), we obtain




       Taking the inverse Fourier transform of Eq. (5.1881, we get




                                           a
                                                           sin w M (t - kT,)
                                     =
                                         k=
                                           C x ( k T , ) W M ( -~k T s )
                                            -m


           From Probs. 5.58 and 5.59 we conclude that a band-limited signal which has no frequency
      components higher that f M hertz can be recovered completely from a set of samples taken at
      the rate of f, ( 12fM) samples per second. This is known as the uniform sampling theorem for
      low-pass signals. We refer to T, = X / W , = 1 / 2 fM ( o M = 27r fM as the Nyquist sampling
      interval and f, = 1/T, = 2 fM as the Nyquist sampling rate.

5.60. Consider the system shown in Fig. 5 - 3 5 ( a ) . The frequency response H ( w ) of the ideal
      low-pass filter is given by [Fig. 5 - 3 5 ( b ) ]




      Show that if w , = 0J2, then for any choice of T,,




                                               Fig. 5-35
              FOURIER ANALYSIS O F TIME SIGNALS AND SYSTEMS                                    [CHAP. 5


    From Eq. (5.137) the impulse response h ( t ) of the ideal low-pass filter is given by

                                              sin w, t   T5wc sin w,t
                                  h ( t ) = T5-----    = --
                                                  at      i~ w,t


From Eq. (5.182) we have




By Eq. (2.6) and using Eqs. ( 2 . 7 ) and (1.261, the output y ( t ) is given by




Using Eq. (5.1891, we get
                                         cc               T p , sin w,(t - k c )
                             ~ ( t=)      C x ( k T , ) - 77
                                       k = - cc                    w,(t - kT,)

If w, = w J 2 , then T,w,/a = 1 and we have




Setting t = mT, ( m = integer) and using the fact that w,T, = 2 ~we, get
                                                rn               sin ~   ( -m
                                                                            k)
                                Y ( ~ T=)              X (kTS)    77(m - k )
                                              k = -a

Since




we have



which shows that without any restriction on x ( t ) , y(mT5)= x(mT,) for any integer value of m .
    Note from the sampling theorem (Probs. 5.58 and 5.59) that if w, = 2 a / T 5 is greater than
twice the highest frequency present in x ( t ) and w , = w J 2 , then y ( t ) = x ( t ) . If this condition
on the bandwidth of x ( t ) is not satisfied, then y ( t ) z x ( t ) . However, if w, = 0 , / 2 , then
y(mT,) = x(mT5) for any integer value of m .
CHAP. 51              FOURIER ANALYSIS O F TIME SIGNALS AND SYSTEMS



                                          Supplementary Problems
5.61.   Consider a rectified sine wave signal x ( t ) defined by
                                               x ( l ) = IAsin.srt(


        (a)   Sketch x ( t ) and find its fundamental period.
        (6) Find the complex exponential Fourier series of x ( ! ) .
        ( c ) Find the trigonometric Fourier series of x ( t 1.
        Am.     (a)   X ( t ) is sketched in Fig. 5-36 and T, = 1.




                                2A     4 A m   1
                (c) x ( t ) =   -.sr
                                     - - C -cos k 2 r t
                                           IT4k2-1




                                                       Fig. 5-36



5.62.   Find the trigonometric Fourier series of a periodic signal x ( t ) defined by
                                    x(t) =t2,    -a < t < .rr       and    x(r   + 2a) = x ( t )
                          a2         a    (-ilk
        Am. x ( t ) = -        +4         -cos kt
                          3         k-l    k
5.63.   Using the result from Prob. 5.10, find the trigonometric Fourier series of the signal x ( t ) shown
        in Fig. 5-37.
                         A   A " 1                        2a
        A ~ S . ~ ( t =) - - -         - sin ko,!     wo= -
                         2   .rr & = I k                   To




                                           -To           0            To         2T"               r
                                                        Fig. 5-37
284                    FOURIER ANALYSIS OF TIME SIGNALS AND SYSTEMS                                       [CHAP. 5


5.64.   Derive the harmonic form Fourier series representation (5.15) from the trigonometric Fourier
        series representation (5.8).
        Hint:   Rewrite a , cos k w , t + b, sin k w , t as
                                                                               bk
                                                     ,/,
                                                           cos k w , t +                ,/, sin k w , t
                                                                           ( 4+ b:)
        and use the trigonometric formula cod A - B) = cos A cos B + sin A sin B.

5.65.   Show that the mean-square value of a real periodic signal x ( r ) is the sum of the mean-square
        values of its harmonics.
          1
        Hint:   Use Parseval's identity (5.21) for the Fourier series and Eq. (5.168).

5.66.   Show that if


        then




        Hint:   Repeat the time-differentiation property (5.55).

5.67.   Using the differentiation technique, find the Fourier transform of the triangular pulse signal
        shown in Fig. 5-38.

        Ar..Ad[
                sin( w d / 2 )
                   wd/2          ]   2




                                                -d          0        d              I

                                                     Fig. 5-38



5.68.   Find the inverse Fourier transform of



        Hint:   Differentiate Eq. (5.155) N times with respect to ( a ) .
CHAP. 51               FOURIER ANALYSIS O F TIME SIGNALS AND SYSTEMS


5.69.   Find the inverse Fourier transform of
                                                                     1
                                                    X(w) =
                                                              2 - w 2 + j3w

        Hint: Note that
                                                                                      +
                                     2 - w2 + j3w = 2 + ( jw12 + j3w = ( 1 + j w ) ( 2 j w )
        and apply the technique of partial-fraction expansion.
        Am. x ( t ) = (e-' - e - 2 ' ) u ( t )

5.70.   Verify the frequency differentiation property (5.561, that is,




        Hint:    Use definition (5.31) and proceed in a manner similar to Prob. 5.28.

5.71.   Find the Fourier transform of each of the following signals:
        ( a ) x ( t ) = cos wotu(t)
        ( b ) x ( t ) = sin wotu(t)
        ( c ) x ( t ) = e - " ' ~ ~ ~ w ~ tau>(Ot ) ,
        ( d l x ( t ) = e-"'sin w,tu(t), a > 0
        Hint:    Use multiplication property (5.59).
                                 X                 X                     iw
        Am.     ( a ) X ( w ) = -S(w
                                2
                                          - w o ) + -S(w
                                                    2
                                                         + w , ) + ( jw)' + w i




                                         0 0
                (dl X(w)=
                                 ( a + jo12 +
5.72.   Let x ( t ) be a signal with Fourier transform X ( w ) given by



        Consider the signal



        Find the value of




        Hint: Use Parseval's identity (5.64) for the Fourier transform.
286                    FOURIER ANALYSIS O F TIME SIGNALS AND SYSTEMS                               [CHAP. 5


5.73.   Let x ( t ) be a real signal with the Fourier transform X ( w ) . The analytical signal x + ( t )
        associated with x ( t ) is a complex signal defined by
                                                     x + ( t )= x ( t ) + j i ( t )
        where         is the Hilbert transform of x(t 1.
        ( a ) Find the Fourier transform X + ( w ) of x + ( t 1.
        ( 6 ) Find the analytical signal x + ( t ) associated with cos w,t and its Fourier transform X + ( w ) .




5.74.   Consider a continuous-time LTI system with frequency response H(w). Find the Fourier
        transform S ( w ) of the unit step response s ( t ) of the system.
        Hint:   Use Eq. (2.12) and the integration property (5.57).
        Am.     S ( w ) = .rrH(O)G(o)+ ( l / j w ) H ( w )

5.75.   Consider the RC filter shown in Fig. 5-39. Find the frequency response H ( w ) of this filter and
        discuss the type of filter.
                                 iw
        Ans.    H(o)=                     , high-pass filter
                          ( l / R C ) +jw




                                                                                      -
                                                       Fig. 5-39




5.76.   Determine the 99 percent energy containment bandwidth for the signal




        Ans.    W,,= 2.3/a radians/second or f, = 0.366/a hertz

5.77.   The sampling theorem in the frequency domain states that if a real signal x ( t ) is a duration-
        limited signal. that is,
CHAP. 51          FOURIER ANALYSIS O F TIME SIGNALS AND SYSTEMS                                      287


     then its Fourier transform X ( w ) can be uniquely determined from its values X ( n s r / t , ) at a
     series of equidistant points spaced n / t , apart. In fact, X ( w ) is given by


                                           n = -00            o t , - n.rr
     Verify the above sampling theorem in the frequency domain.
     Hint:  Expand x ( t ) in a complex Fourier series and proceed in a manner similar to that for
     Prob. 5.59.
                                                                       Chapter 6

                   Fourier Analysis of Discrete-Time
                         Signals and Systems

6.1     INTRODUCTION
         In this chapter we present the Fourier analysis in the context of discrete-time signals
     (sequences) and systems. The Fourier analysis plays the same fundamental role in discrete
     time as in continuous time. As we will see, there are many similarities between the
     techniques of discrete-time Fourier analysis and their continuous-time counterparts, but
     there are also some important differences.

6.2 DISCRETE FOURIER SERIES
A.     Periodic Sequences:
          In Chap. 1 we defined a discrete-time signal (or sequence) x [ n ] to be periodic if there
     is a positive integer N for which
                                        x [ n +N] = x [ n ]    all n                          (6.1)
     The fundamental period No of x [ n ] is the smallest positive integer N for which Eq. (6.1) is
     satisfied.
         As we saw in Sec. 1.4, the complex exponential sequence


     where no= 27r/Nu, is a periodic sequence with fundamental period Nu. As we discussed
     in Sec. 1.4C, one very important distinction between the discrete-time and the continuous-
     time complex exponential is that the signals el"^' are distinct for distinct values of wO,but
     the sequences eiR~~", which differ in frequency by a multiple of 2rr, are identical. That is,


     Let




     and more generally,
                                *k[.I     =*k+o~N,,[~l        rn = integer
     Thus, the sequences q k [ n ]are distinct only over a range of No successive values of k.
CHAP. 61 FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS



B. Discrete Fourier Series Representation:
      The discrete Fourier series representation of a periodic sequence x[n] with fundamen-
  tal period No is given by



  where c, are the Fourier coefficients and are given by (Prob. 6.2)



  Because of Eq. (6.5) [or Eq. (6.6)], Eqs. (6.7) and (6.8) can be rewritten as




  where C,         denotes that the summation is on k as k varies over a range of No
  successive integers. Setting k = 0 in Eq. (6.101, we have



  which indicates that co equals the average value of x[n] over a period.
     The Fourier coefficients c, are often referred to as the spectral coefficients of x[n].

C. Convergence of Discrete Fourier Series:
      Since the discrete Fourier series is a finite series, in contrast to the continuous-time
  case, there are no convergence issues with discrete Fourier series.

D. Properties of Discrete Fourier Series:
I. Periodicity of Fourier Coeficients:
      From Eqs. ( 6 . 5 ) and (6.7) [or (6.911, we see that
                                             C,+N,   = Ck
  which indicates that the Fourier series coefficients c, are periodic with fundamental
  period No.
2. Duality:
     From Eq. (6.12) we see that the Fourier coefficients c, form a periodic sequence with
  fundamental period No. Thus, writing c, as c[k], Eq. (6.10) can be rewritten as
290         FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS [CHAP. 6


  Let n = - m in Eq. (6.13). Then



  Letting k = n and m = k in the above expression, we get



  Comparing Eq. (6.14) with Eq. (6.91, we see that (l/N,,)x[-k]   are the Fourier coefficients
  of c[n]. If we adopt the notation
                                     x [ n ]B c k= c [ k ]                             (6.15)
  to denote the discrete Fourier series pair, then by Eq. (6.14) we have
                                           DFS 1
                                            ] -x[-k]
                                     ~ [ nc--)
                                                 No
  Equation (6.16) is known as the duality property of the discrete Fourier series.
3. Other Properties:
      When x[n] is real, then from Eq. (6.8) or [Eq. (6.10)] and Eq. (6.12) it follows that
                                                    *
                                    C P k =CN,,-k= ck                                (6.17)
  where * denotes the complex conjugate.
Even and Odd Sequences:
      When x[n] is real, let
                                  x[nl =xe[nl + ~ o [ n l
 where xe[n] and xo[n] are the even and odd components of x[n], respectively. Let
                                         x[n] S c k
 Then
                                      xe[n]      Re[ck]                               (6.18~)
                                     xo[n] 2%j Im[ck]                                 (6.186)
 Thus, we see that if x[n] is real and even, then its Fourier coefficients are real, while if
 x[n] is real and odd, its Fourier coefficients are imaginary.

E. Parseval's Theorem:
      If x[n] is represented by the discrete Fourier series in Eq. (6.9), then it can be shown
  that (Prob. 6.10)



  Equation (6.19) is called Parseval's identity (or Parseual's theorem) for the discrete
  Fourier series.
CHAP. 61 FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS


6 3 THE FOURIER TRANSFORM
A. From Discrete Fourier Series to Fourier Transform:
       Let x [ n ] be a nonperiodic sequence of finite duration. That is, for some positive
   integer N , ,


   Such a sequence is shown in Fig. 6-l(a). Let x,Jn] be a periodic sequence formed by
   repeating x [ n ] with fundamental period No as shown in Fig. 6-l(b). If we let No -, m, we
   have
                                             lim x N o [ n ]= x [ n ]
                                            No+-

   The discrete Fourier series of x N o [ n ]is given by




  where




                                                   (4
Fig. 6-1 ( a ) Nonperiodic finite sequence x [ n ] ;( 6 ) periodic sequence formed by periodic extension of
         xhl.
292        FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS                     [CHAP. 6


 Since xN,,[n]= x [ n ] for In1 IN, and also since x [ n ] = 0 outside this interval, Eq. (6.22~)
 can be rewritten as




      Let us define X(R) as



 Then, from Eq. (6.22b) the Fourier coefficients c , can be expressed as



 Substituting Eq. (6.24) into Eq. (6.21), we have




 From Eq. (6.231, X(R) is periodic with period 27r and so is eJRn.Thus, the product
 X(R)e*'" will also be periodic with period 27r. As shown in Fig. 6-2, each term in the
 summation in Eq. (6.25) represents the area of a rectangle of height ~ ( k R , ) e ' ~ ~ 1and
                                                                                           1"
 width R,. As No + m, 0, = 27r/N0 becomes infinitesimal (R, + 0) and Eq. (6.25) passes
 to an integral. Furthermore, since the summation in Eq. (6.25) is over N,, consecutive
 intervals of width 0, = 27r/N,,, the total interval of integration will always have a width
 27r. Thus, as NO+ a: and in view of Eq. (6.20), Eq. (6.25) becomes
                                           1
                                             /
                                x [ n ] = - ~ ( 0ejRn
                                          27r 2 v
                                                       ) dR                             (6.26)

 Since X(R)e 'On is periodic with period 27r, the interval of integration in Eq. (6.26) can be
 taken as any interval of length 27r.




                        Fig. 6-2 Graphical interpretation of Eq. (6.25).
CXV'. 61 FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS



B. Fourier Transform Pair:
     The function X(R) defined by Eq. (6.23) is called the Fourier transform of x[n], and
  Eq. (6.26) defines the inverse Fourier transform of X(R). Symbolically they are denoted by

                        X ( R ) = F { x [ n ] )=
                                                   n= -m
                                                        x
                                                        m
                                                             x[n] ePJRn              (6.27)




  and we say that x[n] and X(R) form a Fourier transform pair denoted by
                                          44 ++X(fl)                                (6.29)
  Equations (6.27) and (6.28) are the discrete-time counterparts of Eqs. (5.31) and (5.32).

C. Fourier Spectra:
     The Fourier transform X(R) of x[n] is, in general, complex and can be expressed as


 As in continuous time, the Fourier transform X(R) of a nonperiodic sequence x[n] is the
 frequency-domain specification of x[n] and is referred to as the spectrum (or Fourier
 spectrum) of x[n]. The quantity IX(R)I is called the magnitude spectrum of x[n], and #dR )
 is called the phase spectrum of x[n]. Furthermore, if x[n] is real, the amplitude spectrum
 IX(R)I is an even function and the phase spectrum 4((n) is an odd function of R.

D. Convergence of X(R):
   Just as in the case of continuous time, the sufficient condition for the convergence of
 X(R) is that x[n] is absolutely summable, that is,
                                            m

                                           C Ix[n]kw                                 (6.31)
                                         n = -oo



E. Connection between the Fourier Transform and the z-Transform:
     Equation (6.27) defines the Fourier transform of x[n] as

                                   X(R) =          z
                                                   D5




                                                n = -m
                                                            x[n] e-jnn

 The z-transform of x[n], as defined in Eq. (4.3), is given by

                                     X ( Z )=      zm



                                                n- -m
                                                            x[n]z-"

 Comparing Eqs. (6.32) and (6.331, we see that if the ROC of X(z) contains the unit circle,
 then the Fourier transform X(R) of x[n] equals X(z) evaluated on the unit circle, that is,
                                   ~ ( a=)~ ( z ) l , = , , ~ ~                   (6.34)
     Note that since the summation in Eq. (6.33) is denoted by X(z), then the summation
 in Eq. (6.32) may be denoted as X(ejn). Thus, in the remainder of this book, both X(R)
294            FOURIER ANALYSIS O F DISCRETE-TIME SIGNALS AND SYSTEMS                        [CHAP. 6


  and X(ejn) mean the same thing whenever we connect the Fourier transform with the
  z-transform. Because the Fourier transform is the z-transform with z = ein, it should not
  be assumed automatically that the Fourier transform of a sequence x [ n ] is the z-transform
  with z replaced by eiR. If x [ n ] is absolutely summable, that is, if x [ n ] satisfies condition
  (6.311, the Fourier transform of x [ n ] can be obtained from the z-transform of x [ n ] with
    = e i f l since the ROC of X(z) will contain the unit circle; that is, leinJ= 1. This is not
  generally true of sequences which are not absolutely summable. The following examples
  illustrate the above statements.

EXAMPLE 6.1. Consider the unit impulse sequence 6 [ n l .
   From Eq. (4.14) the z-transform of 6 [ n ] is


By definitions (6.27) and (1.45)the Fourier transform of 6 [ n ] is



Thus, the z-transform and the Fourier transform of 6 [ n ] are the same. Note that 6 [ n ] is absolutely
summable and that the ROC of the z-transform of 6 [ n l contains the unit circle.

EXAMPLE 6.2. Consider the causal exponential sequence
                                          x [ n ]=anu[n]          a real
      From Eq. ( 4 . 9 ) the z-transform of x [ n ] is given by



Thus, X(ei") exists for la1 < 1 because the ROC of X ( z ) then contains the unit circle. That is,



Next, by definition (6.27) and Eq. (1.91)the Fourier transform of x [ n ] is




Thus, comparing Eqs. (6.37)and (6.38),we have
                                               X ( R ) =X(z)l,=p
Note that x [ n ] is absolutely summable.

EXAMPLE 6.3. Consider the unit step sequence u[nl.
   From Eq. (4.16)the z-transform of u[nl is



The Fourier transform of u [ n ] cannot be obtained from its z-transform because the ROC of the
CHAP. 61 FOURIER ANALYSIS O F DISCRETE-TIME SIGNALS AND SYSTEMS                               295


z-transform of u[n] does not include the unit circle. Note that the unit step sequence u[n] is not
absolutely summable. The Fourier transform of u[n] is given by (Prob. 6.28)




6.4     PROPERTIES OF THE FOURIER TRANSFORM
         Basic properties of the Fourier transform are presented in the following. There are
     many similarities to and several differences from the continuous-time case. Many of these
     properties are also similar to those of the z-transform when the ROC of X ( z) includes the
     unit circle.

A.     Periodicity:



     As a consequence of Eq. (6.41), in the discrete-time case we have to consider values of R
     (radians) only over the range 0 I R < 27r or -7r I R < 7r, while in the continuous-time
     case we have to consider values of o (radians/second) over the entire range - m < o < m.

B. Linearity:




C. Time Shifting:




D. Frequency Shifting:




                                        x * [ n ] -X*(-R)
 where * denotes the complex conjugate.

F. Time Reversal:
296       FOURIER ANALYSIS O F DISCRETE-TIME SIGNALS AND SYSTEMS [CHAP. 6


G. Time Scaling:
     In Sec. 5.4D the scaling property of a continuous-time Fourier transform is expressed
 as [Eq. (5.5211




 However, in the discrete-time case, x[an] is not a sequence if a is not an integer. On the
 other hand, if a is an integer, say a = 2, then x[2n] consists of only the even samples
 of x[n]. Thus, time scaling in discrete time takes on a form somewhat different from
 Eq. (6.47).
     Let m be a positive integer and define the sequence

                             x[n/m] = x [ k ]        if n = km, k = integer
                                                     ifn#km

 Then we have



 Equation (6.49) is the discrete-time counterpart of Eq. (6.47). It states again the inverse
 relationship between time and frequency. That is, as the signal spreads in time (m > I), its
 Fourier transform is compressed (Prob. 6.22). Note that X(rnR) is periodic with period
 27r/m since X ( R ) is periodic with period 27r.


H. Duality:
     In Sec. 5.4F the duality property of a continuous-time Fourier transform is expressed
 as [Eq. (5.5411



 There is no discrete-time counterpart of this property. However, there is a duality between
 the discrete-time Fourier transform and the continuous-time Fourier series. Let



 From Eqs. (6.27) and (6.41)




 Since fl is a continuous variable, letting R = t and n = -k in Eq. (6.51), we have
CHAP. 61 FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS                                  297


  Since X ( t ) is periodic with period To = 27r and the fundamental frequency oo= 27r/T0 = 1 ,
  Eq. (6.53) indicates that the Fourier series coefficients of ~ ( twill
                                                                       ) be x [ - k ] . This duality
  relationship is denoted by
                                       ~ ( tB )c , = x [ - k ]                               (6.54)
  where FS denotes the Fourier series and c, are its Fourier coefficients.

I. Differentiation in Frequency:




J. Differencing:




  The sequence x [ n ] - x [ n - 11 is called the firsf difference sequence. Equation (6.56) is
  easily obtained from the linearity property (6.42) and the time-shifting property (6.43).

K. Accumulation:




  Note that accumulation is the discrete-time counterpart of integration. The impulse term
  on the right-hand side of Eq. (6.57) reflects the dc or average value that can result from
  the accumulation.

L. Convolution:




 As in the case of the z-transform, this convolution property plays an important role in the
 study of discrete-time LTI systems.

M. Multiplication:
298         FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS [CHAP. 6


 where @ denotes the periodic convolution defined by [Eq. (2.70)]




 The multiplication property (6.59) is the dual property of Eq. (6.58).


N. Additional Properties:
      If x[n] is real, let



 where x,[n] and xo[n] are the even and odd components of x[n], respectively. Let

                             x [ n ] t,X ( n ) = A ( R ) +jB(R) = IX(R)leJe(n)          (6.61)

 Then




 Equation (6.62) is the necessary and sufficient condition for x[n] to be real. From
 Eqs. (6.62) and (6.61) we have

                                A( - R ) = A ( R )     B ( - R ) = -B(R)               (6.64a)

                              Ix(-fl)I= Ix(R)I           +a)     = - 9 ( ~ )           (6.646)
 From Eqs. ( 6 . 6 3 ~ (6.636),
                       )~       and (6.64~)we see that if x[n] is real and even, then X(R) is
 real and even, while if x[n] is real and odd, X(R) is imaginary and odd.


0. Parseval's Relations:




 Equation (6.66 ) is known as Parseual's identity (or Parseual's theorem) for the discrete-time
 Fourier transform.
     Table 6-1 contains a summary of the properties of the Fourier transform presented in
 this section. Some common sequences and their Fourier transforms are given in Table 6-2.
CHAP. 61 FOURIER ANALYSIS O F DISCRETE-TIME SIGNALS AND SYSTEMS



                            Table 6-1. Properties of the Fourier Transform
Property                                   Sequence                          Fourier transform




Periodicity
Linearity
Time shifting
Frequency shifting
Conjugat ion
Time reversal

Time scaling


Frequency differentiation

First difference

Accumulation


Convolution

Multiplication

Real sequence


  Even component
  Odd component
  Parseval's relations
               FOURIER ANALYSIS OF DISCRETE-TIME SlGNALS AND SYSTEMS                 [CHAP. 6



                             Table 6-2. Common Fourier Transform Pairs




                   sin Wn
                     77 n
                          ,o<w<sr




6.5     THE FREQUENCY RESPONSE OF DISCRETE-TIME LTI SYSTEMS
A.     Frequency Response:
        In Sec. 2.6 we showed that the output y [ n ] of a discrete-time LTI system equals the
     convolution of the input x [ n ] with the impulse response h [ n ] ; that is,



     Applying the convolution property (6.581,we obtain
CHAP. 61 FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS                                301


 where Y(R), X(R), and H(R) are the Fourier transforms of y [ n ] , x [ n ] , and h [ n ] ,
 respectively. From Eq. ( 6.68) we have




 Relationships represented by Eqs. (6.67) and (6.68) are depicted in Fig. 6-3. Let


 As in the continuous-time case, the function H(R) is called the frequency response of the
 system, I H(R)l the magnitude response of the system, and BH(R)the phase response of the
 system.


                                6InI

                                xfnl
                                              hlnl
                                              40)
                                                          hlnl

                                                                     *
                                                                      L
                                                                       -
                                                          y[n]=x[n] h[n]


                                 I
                                X(W
                                                                 t
                                                          Y(n)=X(R)H(n)
        Fig. 6-3 Relationships between inputs and outputs in an LTI discrete-time system.


     Consider the complex exponential sequence


 Then, setting z = ejRo in Eq. (4.1), we obtain


 which indicates that the complex exponential sequence ejRnnis an eigenfunction of the
 LTI system with corresponding eigenvalue H(Ro), as previously observed in Chap. 2
 (Sec. 2.8). Furthermore, by the linearity property (6.42), if the input x [ n ] is periodic with
 the discrete Fourier series




 then the corresponding output y [ n ] is also periodic with the discrete Fourier series



 If x [ n ] is not periodic, then from Eqs. (6.68) and (6.28) the corresponding output y [ n ] can
 be expressed as
302            FOURIER ANALYSIS O F DISCRETE-TIME SIGNALS AND SYSTEMS [CHAP. 6



B. LTI Systems Characterized by Difference Equations:
        As discussed in Sec. 2.9, many discrete-time LTI systems of practical interest are
     described by linear constant-coefficient difference equations of the form
                                      N                 M
                                      C a k y [ n - k ] = C b,x[n - k ]
                                     k=O               k=O
                                                                                             (6.76)

     with M I N. Taking the Fourier transform of both sides of Eq. (6.76) and using the
     linearity property (6.42) and the time-shifting property (6.43), we have
                                 N                      M
                                 C a, e-jkRY(R)= C bk e-Jkb'X( a )
                                k=O                    k=O
     or, equivalently,
                                                            M




     The result (6.77) is the same as the 2-transform counterpart H ( z ) = Y(z)/X(z) with
 z = eJ" [Eq. (4.4411; that is,



C. Periodic Nature of the Frequency Response:
         From Eq. (6.41) we have
                                       H ( R ) = H ( n + 27r)
     Thus, unlike the frequency response of continuous-time systems, that of all discrete-time
     LTI systems is periodic with period 27r. Therefore, we need observe the frequency
     response of a system only over the frequency range 0 I R R 27r or -7r I I R T .

6.6     SYSTEM RESPONSE TO SAMPLED CONTINUOUS-TIME SINUSOIDS
A.     System Responses:
         We denote by y,[n], y,[n], and y[n] the system responses to cos R n , sin R n , and eJRn,
     respectively (Fig. 6-4). Since e ~ ~ =' "cos R n + j sin R n , it follows from Eq. (6.72) and the
     linearity property of the system that
                                  y [ n ] = y,[n] + jy,[n] = H ( R ) eJRn
                                 ~ , [ n ]= Re{y[n]) = R ~ ( H ( ReJRn)
                                                                  )
                                               Y ) = Im{H(R)
                                 y,[n] = I ~ {[nl




                         Fig. 6-4 System responses to elnn, cos Rn, and sin Rn.
CHAP. 61 FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS                              303


      When a sinusoid cos R n is obtained by sampling a continuous-time sinusoid cos w t
  with sampling interval T,, that is,
                                cos R n = cos w t       = cos wT,n                      (6.80)
  all the results developed in this section apply if we substitute wT, for R :
                                              R = oT,                                    (6.81)
  For a continuous-time sinusoid cos wt there is a unique waveform for every value of o in
  the range 0 to w. Increasing w results in a sinusoid of ever-increasing frequency. O n the
  other hand, the discrete-time sinusoid cos R n has a unique waveform only for values of R
  in the range 0 to 27r because
               COS[(R+ 27rm)nI = cos(Rn + 27rmn) = cos R n                m = integer   (6.82)
  This range is further restricted by the fact that
                         cos(7r f R ) n = cos .rrn cos R n T sin 7rn sin R n


  Therefore,


  Equation (6.84) shows that a sinusoid of frequency (7r + R ) has the same waveform as one
  with frequency (.rr - R). Therefore, a sinusoid with any value of R outside the range 0 to
  7r is identical to a sinusoid with R in the range 0 to 7r. Thus, we conclude that every
  discrete-time sinusoid with a frequency in the range 0 I R < .rr has a distinct waveform,
  and we need observe only the frequency response of a system over the frequency range
  OsR<7r.

B. Sampling Rate:
     Let w, ( = 27rfM) be the highest frequency of the continuous-time sinusoid. Then
  from Eq. (6.81) the condition for a sampled discrete-time sinusoid t o have a unique
  waveform is                            7r
                        wMTs< 7 r + Ts< -       or     f , > 2fM                (6.85)
                                               WM

  where f, = l/T, is the sampling rate (or frequency). Equation (6.85) indicates that to
  process a continuous-time sinusoid by a discrete-time system, the sampling rate must not
  be less than twice the frequency (in hertz) of the sinusoid. This result is a special case of
  the sampling theorem we discussed in Prob. 5.59.


6.7   SIMULATION
      Consider a continuous-time LTI system with input x ( t ) and output y(t). We wish to
  find a discrete-time LTI system with input x[n] and output y[n] such that
                             if x [ n ] =x(nT,) then y [ n ] = y(nT,)                   (6.86)
  where T, is the sampling interval.
          FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS                          [CHAP. 6


    Let H,(s) and HJz) be the system functions of the continuous-time and discrete-time
systems, respectively (Fig. 6-51. Let


Then from Eqs. (3.1) and (4.1) we have
                      y (t ) = H,( jw ) elw'          Y [ n ] = H ~ ( ~ JeJnwTs
                                                                            W ~ )          (6.88)
Thus, the requirement y[n] = y(nTs) leads to the condition
                            H,(jo) eJnwT,= Hd(ejwK)e~nwrs
from which it follows that
                                      H,(jw) = Hd(ejwT1)
In terms of the Fourier transform, Eq. (6.89) can be expressed as
                               H A 4 = HdW)           R = wTs                          (6.90)
Note that the frequency response Hd(R) of the discrete-time system is a periodic function
of w (with period 27r/Ts), but that the frequency response H,(o) of the continuous-time
system is not. Therefore, Eq. (6.90) or Eq. (6.89) cannot, in general, be true for every w . If
the input x(t) is band-limited [Eq. (5.9411, then it is possible, in principle, to satisfy
Eq. (6.89) for every w in the frequency range (-rr/Ts,r/Ts) (Fig. 6-6). However, from
Eqs. (5.85) and (6.771, we see that Hc(w) is a rational function of w, whereas Hd(R) is a
rational function of eJn (R = wT,). Therefore, Eq. (6.89) is impossible to satisfy. However,
there are methods for determining a discrete-time system so as to satisfy Eq. (6.89) with
reasonable accuracy for every w in the band of the input (Probs. 6.43 to 6.47).




                        Fig. 6-5 Digital simulation of analog systems.




                                               --2n           "
                                                             --         0           -
                                                                                    n      -
                                                                                           2n
                                                                                                lo
                                                T,            T,                    T,     r,
                                           Fig. 6-6
CHAP. 61 FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS


6.8 THE DISCRETE FOURIER TRANSFORM
         In this section we introduce the technique known as the discrete Fourier transform
     (DFT) for finite-length sequences. It should be noted that the DFT should not be confused
     with the Fourier transform.

A.     Definition:
         Let x [ n ] be a finite-length sequence of length N, that is,
                           x [ n ]= O            outside the range 0 I n I N - 1
     The DFT of x [ n ] ,denoted as X [ k ] ,is defined by
                                        N- l
                           X [ k ]=            x[n]W,kn       k = 0 , 1 , ..., N - 1
                                        n=O

     where WN is the Nth root of unity given by


     The inverse DFT (IDFT) is given by



     The DFT pair is denoted by
                                         x b l -X[kI
         Important features of the DFT are the following:
     1. There is a one-to-one correspondence between x [ n ] and X [ k ] .
     2. There is an extremely fast algorithm, called the fast Fourier transform (FFT) for its
        calculation.
     3. The DFT is closely related to the discrete Fourier series and the Fourier transform.
     4. The DFT is the appropriate Fourier representation for digital computer realization
        because it is discrete and of finite length in both the time and frequency domains.
Note that the choice of N in Eq. (6.92) is not fixed. If x [ n ] has length N , < N, we want to
assume that x [ n ] has length N by simply adding ( N - Nl) samples with a value of 0. This
addition of dummy samples is known as zero padding. Then the resultant x [ n ] is often
referred to as an N-point sequence, and X [ k ] defined in Eq. (6.92) is referred to as an
N-point DFT. By a judicious choice of N, such as choosing it to be a power of 2,
computational efficiencies can be gained.

B. Relationship between the DET and the Discrete Fourier Series:
      Comparing Eqs. (6.94) and (6.92) with Eqs. (6.7) and (6.81, we see that X [ k ] of finite
  sequence x [ n ] can be interpreted as the coefficients c, in the discrete Fourier series
  representation of its periodic extension multiplied by the period N,, and NO= N. That is,
                                                  X [ k ] = Nc,                         (6.96)
      Actually, the two can be made identical by including the factor 1/N with the D R
  rather than with the IDFT.
306            FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS                            [CHAP. 6


C. Relationship between the DFT and the Fourier Transform:
        By definition (6.27) the Fourier transform of x [ n ] defined by Eq. (6.91) can be
     expressed as
                                                     N- 1
                                           X(fl) =          x [ n ] e-j""                         (6.97)
                                                     n =0

     Comparing Eq. (6.97) with Eq. (6.92), we see that



     Thus, X [ k ] corresponds to the sampled X(fl) at the uniformly spaced frequencies
     f l = k27r/N for integer k .

D. Properties of the D m
         Because of the relationship (6.98) between the DFT and the Fourier transform, we
     would expect their properties to be quite similar, except that the DFT X [ k ] is a function
     of a discrete variable while the Fourier transform X ( R ) is a function of a continuous
     variable. Note that the DFT variables n and k must be restricted to the range 0 In,
     k < N, the DFT shifts x [ n - no] or X [ k - k , ] imply x [ n -no],,, or X [ k - k,],,, .,
     where the modulo notation [m],,, means that


     for some integer i such that
                                               0   [mImod~      <N                               (6.100)
     For example, if x [ n ] = 6 [ n - 31, then
                         x [ n - 4],,,   = 6 [ n - 7],,,, = S [ n - 7       + 61 = 6 [ n - 11
     The DFT shift is also known as a circular shift. Basic properties of the DFT are the
     following:




2.     Time ShifCing:



3. Frequency Shifiing:



4. Conjugation:

                                    '*In] ~ ~ * [ - ~ l m o d N
     where * denotes the complex conjugate.
CHAP. 61      FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS                          307


5.     Time Reversal:



6. Duality:



7. Circular Convolution:



     where

  The convolution sum in Eq. (6.108) is known as the circular conuolution of x , [ n ] and
  4nI.
8. Multiplication:




     where

9. Additional Properties:
        When x [ n ] is real, let




     Then
                             x[n]   -
     where x,[n] and xo[n] are the even and odd components of x [ n ] , respectively. Let
                                     X [ k ] = A [ k ] + j B [ k ] = IX[k]leie[kl
                                          x [ - k I m ~ d =~ X * [ k l                  ( 6 . 110)
                                    x e [ n ]w R ~ { [Xk ] )= A [ k ]                  (6.111a)
                                    x o [ n ]- j   I m { X [ k ] )= j B [ k ]          (6.111b)
     From Eq. (6.110) we have




10. Parseval's Relation:




     Equation (6.113) is known as Parseual's identity (or Parseual's theorem) for the DFT.
             FOURIER ANALYSIS O F DISCRETE-TIME SIGNALS AND SYSTEMS                                [CHAP. 6



                                         Solved Problems

DISCRETE FOURIER SERIES


6.1.   We call a set of sequences ( q k [ n ] orthogonal
                                              )          on an interval [ N , , N , ] if any two signals
       W,[n] and q k [ n ]in the set satisfy the condition




       where * denotes the complex conjugate and a # 0. Show that the set of complex
       exponential sequences



       is orthogonal on any interval of length N .
           From Eq. (1.90) we note that




       Applying Eq. (6.116), with a = eik(2"/N),
                                              we obtain




       since e'k(2"/N'N  = e jk2" = 1 . Since each of the complex exponentials in the summation in
       Eq. (6.117) is periodic with period N, Eq. (6.117) remains valid with a summation carried over
       any interval of length N. That is,

                                 C eiWn/N)n,                    k = O , f N , f 2 N , ...
                               n=(N)
                                                                otherwise

       Now, using Eq. (6.118), we have




       where m, k < N. Equation (6.119) shows that the set ( e ~ ~ ( ~ "k /=~0). 1", :. . ., N - 1 ) is orthog-
       onal over any interval of length N. Equation (6.114) is the discrete-time counterpart of
       Eq. (5.95) introduced in Prob. 5.1.
CHAP. 61 FOURIER ANALYSIS O F DISCRETE-TIME SIGNALS AND SYSTEMS                                    309


6.2.   Using the orthogonality condition Eq. (6.119), derive Eq. (6.8) for the Fourier
       coefficients.
           Replacing the summation variable k by m in Eq. (6.71, we have




       Using Eq. (6.115) with N = NO, Eq. (6.120) can be rewritten as




       Multiplying both sides of Eq. (6.121) by q t [ n ] and summing over n = 0 to (No - l), we obtain




       Interchanging the order of the summation and using Eq. (6.1191, we get




       Thus,




6.3.   Determine the Fourier coefficients for the periodic sequence x [ n ] shown in Fig. 6-7.
           From Fig. 6-7 we see that x [ n ] is the periodic extension of (0,1,2,3) with fundamental
       period No = 4. Thus,



       By Eq. (6.8) the discrete-time Fourier coefficients c, are




       Note that c, = c,-, = cT [Eq. (6.17)].
             FOURIER ANALYSIS OF DISCRETE-TIME SlGNALS AND SYSTEMS [CHAP. 6




                                   -4-3-2-1 0        1 2     3 4   5   6 7
                                                  Fig. 6-7


6.4.   Consider the periodic sequence x [ n ] shown in Fig. 6-8(a). Determine the Fourier
       coefficients c , and sketch the magnitude spectrum lc,(.
           From Fig. 6-8(a) we see that the fundamental period of x [ n ] is N o = 10 and R,, =
                       . Eq. ( 6 . 8 ) and using Eq. (1.90),we get
       27r/N,, = ~ / 5 By




       The magnitude spectrum lckl is plotted in Fig. 6-8(b).




                                            (b)
                                                  Fig. 6-8
CHAP. 61 FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS



6.5.   Consider a sequence



             Sketch x[n].
             Find the Fourier coefficients c, of x[n].
             The sequence x [ n ]is sketched in Fig. 6-9(a).It is seen that x[n]is the periodic extension
             of the sequence {1,0,0,O} with period No = 4.




                                                   (b)
                                               Fig. 6-9


             From Eqs. ( 6 . 7 )and (6.8)and Fig. 6-9(a)we have




             and

             since x [ l ]= x[2] = x[3]= 0. The Fourier coefficients of x[n] are sketched in Fig. 6-9(b).

6.6.   Determine the discrete Fourier series representation for each of the following se-
       quences:
                        7T
       (a)   x[nl = cos-n
                        4
                        7T         T
       ( b ) x[n]=cos-n+sin-n
                      3       4
             FOURIER ANALYSIS O F DISCRETE-TIME SIGNALS AND SYSTEMS                                      [CHAP. 6



       (a)   The fundamental period of x [ n ] is No = 8, and Ro = 277/N0 = n / 4 . Rather than using
             Eq. ( 6 . 8 )to evaluate the Fourier coefficients c,, we use Euler's formula and get



             Thus, the Fourier coefficients for x [ n ] are c l = f , c - , = c - , + , = c 7 = $, and all other
             c, = 0. Hence, the discrete Fourier series of x(n1 is



       ( b ) From Prob. 1.16(i) the fundamental period of x [ n ] is No = 24, and R, = 277/N0 = 77/12.
             Again by Euler's formula we have




                                                              I                               I
             Thus, c3 = -j(4),c4 = $ , c - , = c - ~ =+c Z~O
                                                           = ~? , c P 3= c - ~ =+c 2~] =~I ( ? ) , and all other
             c, = 0. Hence, the discrete Fourier series of x [ n ] is




       (c)   From Prob. l.l6( j ) the fundamental period of x [ n ] is No = 8, and Ro = 277/No = n / 4 .
             Again by Euler's formula we have




                                 I                       1
             Thus, c0 = f , c 1= a, c - = c - + n = c7 = a, and all other c, = 0. Hence, the discrete
             Fourier series of x[nl is




6.7.   Let x[n] be a real periodic sequence with fundamental period N, and Fourier
       coefficients ck = a k + jb,, where a, and b, are both real.
       ( a ) Show that a - , = a k and b-,= -bk.
       (b) Show that c,,,,, is real if No is even.
       (c) Show that x [ n ] can also be expressed as a discrete trigonometric Fourier series of
             the form
                                   ( N u - 1)/2
                                                                                                    27r
                  x[n]=co+2                       (a,coskfl,n -b,sinkfl,n)                    fl, = - (6.123)
                                      k= 1                                                          No
             if No is odd or
                                                           ( N o - 2)/2
                     x[n] = c, + ( - 1)'ch/,          +2                  (a, cos kR,n - bk sin k f l o n ) (6.124)
                                                              k=l

             if N,, is even.
CHAP. 61   FOURIER ANALYSIS O F DISCRETE-TIME SIGNALS AND SYSTEMS


     ( a ) If x [ n l is real, then from Eq. ( 6 . 8 ) we have



           Thus,
                                         C d k = a _ , + j b - , = ( a , + j b k ) *= a ,

           and we have
                                               a-,=a,           and        b-,=-bk

     ( 6 ) If No is even, then from Eq. ( 6 . 8 )



                                         1 No-'
                                  = -         C ( - l ) " x [ n ] = real
                                     NO n = o




           If No is odd, then (No - 1) is even and we can write x [ n ] as



           Now, from Eq. (6.17)



           Thus,




                                              (No-1)/2
                                  = c,   +2       z ( a , cos kRon - bk sin k R o n )
                                                 k=l

           If No is even, we can write x [ n ] as
               FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS                                             [CHAP. 6




                                                               (Nu-2)/2
               Then     x [ n ] = c0   + ( - I ) ~ C , ~ /+,     x
                                                                 k=l
                                                                          2Re(ckejkRun)

                                                                (Nu-2)/2
                              = c,     + ( -l)nc,v/2 + 2           x
                                                                  k =1
                                                                           ( a , cos kfl,,n - b, sin k R o n )



6.8.   Let x , [ n ] and x , [ n ] be periodic sequences with fundamental period No and their
       discrete Fourier series given by




       Show that the sequence x [ n ] = x , [ n ] x , [ n ] is periodic with the same fundamental
       period No and can be expressed as



       where ck is given by



           Now note that


       Thus, x [ n ] is periodic with fundamental period No.Let




                                 1 Nu-'                           1 No-'
       Then                Ck = -       C X [ n ] e - i k f M = - z x l [ n ] x 2 [ n ]e-',"on
                                No .=o                           No n = o




       since

       and the term in parentheses is equal to ek-,.
CHAP. 61     FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS


6.9.   Let x,[n] and x,[n] be the two periodic signals in Prob. 6.8. Show that



       Equation (6.127) is known as Parseval's relation for periodic sequences.
           From Eq. (6.126) we have
                                       1 N0-I                               No- 1
                                ck = - C x , [ n ] x 2 [ n ]e-jknon =        C ddk-m
                                      NO n = o                              m =O

       Setting k = 0 in the above expression, we get




6.10. (a) Verify Parseval's identity [Eq. (6.19)] for the discrete Fourier series, that is,




       (6) Using x [ n ] in Prob. 6.3, verify Parseval's identity [Eq. (6.19)].
       ( a ) Let




            and

                                    1 No-'                         ] No-'
            Then            d --                                 = C X[n]e~kRon
                                        C X * [ n ~ e - ~ k ~ o n-                                        (6.128)
                                - NO n = O                        NO n = o
            Equation (6.128) indicates that if the Fourier coefficientsof x [ n ] are c , , then the Fourier
            coefficientsof x * [ n ] are c?,. Setting x , [ n ]= x [ n ] and x 2 [ n ]= x * [ n ] in Eq. (6.1271, we
            have d k = c k and ek = c?, (or e - , = c : ) and we obtain




       ( b ) From Fig. 6-7 and the results from Prob. 6.3, we have




            and Parseval's identity is verified.
316         FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS [CHAP. 6


FOURIER TRANSFORM

6.11. Find the Fourier transform of
                                  x [ n ] = - a n u [ - n - 11                     a real
          From Eq. (4.12) the z-transform of x[n] is given by
                                                             1
                                        X(z) =                           Izl< lal
                                                          I -az-'
      Thus, X(eJf') exists for la1 > 1 because the ROC of X( z ) then contains the unit circle. Thus,




6.12. Find the Fourier transform of the rectangular pulse sequence (Fig. 6-10)
                                              x [ n ] =u [ n ] -u [ n - N ]
          Using Eq. (1.90), the z-transform of x[nl is given by
                                           N- 1     1-ZN
                                  X(Z) = C zn= -                                   1-4> 0       (6.131)
                                           n=O       1-2
      Thus, ~ ( e ' " )exists because the ROC of X(z) includes the unit circle. Hence,




                                      1 0 .       .. ... ..
                            -     -    0      1   2   3                 N- 1
                                                                               -            F
                                                                                            n
                                                      Fig. 6-10




6.13. Verify the time-shifting property (6.431, that is,


          By definition (6.27)
                                                                    m

                                  F ( x [ n - n,]) = C x [ n - n o ] e-j""
                                                              n = -m
CHAP. 61 FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS                                            317


      By the change of variable m = n - no, we obtain




     Hence,




6.14. (a) Find the Fourier transform X ( 0 ) of the rectangular pulse sequence shown in
      Fig. 6-1l(a).




                                                                                 (b)
                                                Fig. 6-11


     ( b ) Plot X(R) for N, = 4 and N, = 8.
     (a)   From Fig. 6-11 we see that
                                                  x [ n ] = x , [ n +N,]

           where x , [ n ] is shown in Fig. 6 - l l ( b ) .Setting N = 2 N 1 + 1 in Eq. (6.132),we have




           Now, from the time-shifting property (6.43)we obtain




     ( b ) Setting N, = 4 in Eq. (6.133), we get
318         FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS [CHAP. 6


      which is plotted in Fig. 6-12(a). Similarly. for N , = 8 we get



            which is plotted in Fig. 6.12(b).




                                                                                              (6)
                                                Fig. 6-12

6.15. ( a ) Find the inverse Fourier transform x[n] of the rectangular pulse spectrum X ( n )
            defined by [Fig. 6-13(a)]



      ( b ) Plot x[n] for W = r / 4 .
                                                     I xcn)




                                                          .tl n   I
                                                    I
                                                    4f)

                                                a            0

                                            a                         0


                          dl-
                                                                              1- lo
                                                                                      t
                     1'
                                        w

                                        -4-3-2-10 1 2 3 4
                                                                          w               A




                                                                                                    rr
                                                      (6)
                                                Fig. 6-13
CHAP. 61 FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS


      ( a ) From Eq. (6.28)
                               1
                         x[n]=- X(R)
                              2 7 -,
                                                    IT                              dfi = -
                                                                                          27 -w       IW
                                                                                                          sin Wn
                                                                                                elnnd o = -
                                                                                                            rn
           Thus, we obtain
                              sin Wn                                                                     IRl s w
                                7n
                                     -x(n)                                       =
                                                                                                         W C I ~ I S T

      ( b ) The sequence x[n] is plotted in Fig. 6-13(b)for W = 7 / 4 .

6.16. Verify the frequency-shifting property ( 6 . 4 4 , that is,
                                                        eJnonx[n]tt X(n- 0,)
           By Eq. (6.27)
                                                                      m

                            ~   (   ~   j   f   l   t    ~=~      C
                                                                  [       ~                       e-~fl"
                                                                              ]e ~ )f l ~ " X [ n ]
                                                             ,=       -m
                                                                      m
                                                         =        C x[n]                            =
                                                                                        e-~(fl-flt~)n
                                                                                                           X(fl - a , )
                                                             ,=       -m

      Hence,
                                                        e ~ ~ o " x -[ n
                                                                       X ]( R                    - a,)

6.17. Find the inverse Fourier transform x [ n ] of
                                    x(n)= 2 ~ q -nno)                                                 WI, lfiol 5
          From Eqs. (6.28)and (1.22) we have



      Thus, we have
                                     ejnon      -       2 r S ( R - R,)

6.18. Find the Fourier transform of
                                                         x[n]=1                                all n
          Setting R , = 0 in Eq. (6.1351, we get
                                    x [ n ] = 1 o2 n S ( R )                                          In1 I
      Equation (6.136) is depicted in Fig. 6-14.




                      Fig. 6-14 A constant sequence and its Fourier transform.
320         FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS                                  [CHAP. 6


6.19. Find the Fourier transform of the sinusoidal sequence
                                       x [ n ] = cos R o n          lflolS
          From Euler's formula we have
                                          cos Ron = ; ( e i n ~ "+ e-'    IJn ,


      Thus, using Eq. (6.135) and the linearity property (6.42), we get
                           X ( R ) = T [ S ( -~ 0 , ) + 6 ( R + a , ) ]           IRI, Ia0I5


                         cos Ron   -
      which is illustrated in Fig. 6-15. Thus,
                                       a [ 6 ( R- R o ) + 6 ( R + a , ) ]          Ial, IRol r T    (6.137)




                       Fig. 6-15 A cosine sequence and its Fourier transform.



6.20. Verify the conjugation property (6.45), that is,
                                               x * [ n ] -X*(-R)
          From Eq. (6.27)
                                               m

                            .F(x*[n]) =       C x * [ n ] e-inn =
                                            n = -m                       n= -m




      Hence,
                                               x * [ n ] -X*( -0)

6.21. Verify the time-scaling property (6.491, that is,


          From Eq. (6.48)
                                       x[n/m] = x [ k ]             if n = km, k = integer
                                                                    ifnzkm
      Then, by Eq. (6.27)
                                                           m

                                       .F(-qrn)b1)
                                                =
                                                         ,= C- m ~(,)bl
                                                                     e-jnn
CHAP. 61    FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS


      Changing the variable n = km on the right-hand side of the above expression, we obtain



      Hence,



6.22. Consider the sequence x [ n ] defined by
                                                            In12
                                      ~ [ n=]
                                                            otherwise
      (a) Sketch x [ n ] and its Fourier transform X ( R ) .
      ( b ) Sketch the time-scaled sequence x ( , j n ] and its Fourier transform Xo,(R).
      ( c ) Sketch the time-scaled sequence ~ ( ~ jand   n ]its Fourier transform Xo,(R).
      (a)   Setting N , = 2 in Eq. (6.1331, we have



            The sequence x [ n ] and its Fourier transform X ( 0 ) are sketched in Fig. 6-16(n).




                                             Fig. 6-16
            FOURIER ANALYSIS O F DISCRETE-TIME SIGNALS AND SYSTEMS                      [CHAP. 6


            From Eqs. (6.49) and (6.138) we have



           The time-scaled sequence xo,[n] and its Fourier transform Xo,(R) are sketched in Fig.
           6-16(b).
           In a similar manner we get



           The time-scaled sequence x(,,[n] and its Fourier transform X,,,(R) are sketched in Fig.
           6-16(~).

6.23. Verify the differentiation in frequency property (6.55), that is,



          From definition (6.27)



      Differentiating both sides of the above expression with respect to R and interchanging the
      order of differentiation and summation, we obtain




      Multiplying both sides by j, we see that



      Hence,




6.24. Verify the convolution theorem (6.581, that is,
                                        x , [ n l * x 2 b I -X,(~)x,(n)
          By definitions (2.35) and (6.27),we have

                        F { x , [ n ]* x , [ n ] ) =    z ( z x,[k]x,[n k ] )
                                                       n- -m   k = -m
                                                                            -   e-j""


      Changing the order of summation, we get
                                                         m          /   m
CHAP. 61     FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS                                 323


      By the time-shifting property Eq. (6.43)




      Thus, we have
                                                         m

                        . F { x l [ n ]* x 2 [ n1) =            x , [ k ]e - j n k X 2 ( f l )
                                                       k = -m




6.25. Using the convolution theorem (6.58),find the inverse Fourier transform x [ n ] of



           From Eq. (6.37)we have
                                                                       1
                                             anu[nI cr             - ae-jn               la1 < 1

      Now

      Thus, by the convolution theorem Eq. (6.58) we get




      Hence,




6.26. Verify the multiplication property (6.59),that is,



           Let x [ n ] = x l [ n ] x 2 [ n ]Then
                                            .    by definition (6.27)




      By Eq. (6.28)
             FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS [CHAP. 6



      Then

      Interchanging the order of summation and integration, we get

                         X      )=(
                                      1
                                                  0   (1 w



                                                      n = -00
                                                                x , [ n ] e'j("-@"




      Hence,




6.27. Verify the properties (6.62),(6.63~1,and (6.63b);that is, if x [ n ] is real and
                             x [ n ] = x , [ n ] + x o [ n ] ++X(fl) =A(R)           +jB(R)         (6.140)
      where x , [ n ] and x o [ n ] are the even and odd components of x [ n ] , respectively, then
                                          X(-R) =X*(R)
                                           x , [ n ] ++ Re{X(R)} = A(i2)
                                           x , [ n ] ++j Im{X(i2)} = j B ( f l )
          If x [ n ] is real, then x * [ n ] = x [ n ] , and by Eq. (6.45) we have
                                                 x * [ n ] -X*(       -R)
      from which we get
                                x ( n )= x * ( - n )         or        x( - 0 ) = x * ( n )
      Next, using Eq. (6.46) and Eqs. (1.2) and (1.3), we have
                       X[ -n]   = x , [ n ] - x , [ n ] c-,X( - 0 ) = X * ( R ) = A ( R ) - jB(R)   (6.141)
      Adding (subtracting) Eq. (6.141) to (from) Eq. (6.1401, we obtain
                                           x,[n] -A(R)           = Re(X(R)}

                                           x , [ n ] H jB( 0 )= j Im{ X ( R ) )


6.28. Show that



          Let
                                                      44 ++X(R>
      Now, note that
                                               s [ n ] = u [ n ] - u [ n - 11
      Taking the Fourier transform of both sides of the above expression and by Eqs. (6.36) and
      (6.431, we have
CHAP. 61 FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS


      Noting that (1 - e-jn) = 0 for R = 0, X ( R ) must be of the form



      where A is a constant. To determine A we proceed as follows. From Eq. (1.5) the even
      component of u[nl is given by
                                                  u,[n] = $ + f 6 [ n ]

      Then the odd component of u [ n ] is given by
                                    u o [ n ]= u [ n ] - u , [ n ] = u [ n ] - f - $ [ n ]
                                                                    1 1
      and                        y { u o [ n l ]= A         +     - e-jn - a S ( R ) - -
                                                                      2
      From Eq. (6.63b) the Fourier transform of an odd real sequence must be purely imaginary.
      Thus, we must have A = a , and




6.29. Verify the accumulation property (6.571, that is,



          From Eq. (2.132)



      Thus, by the convolution theorem (6.58) and Eq. (6.142) we get




6.30. Using the accumulation property (6.57) and Eq. (1.501, find the Fourier transform of
      4nI.
          From Eq. (1.50)



      Now, from Eq. (6.36) we have
                                                       s[n] H 1
      Setting x [ k l = 6 [ k ] in Eq. (6.571, we have
                               x [ n ] = 6 [ n ]H X ( R ) = 1           and       X(0) = 1
            FOURIER ANALYSIS O F DISCRETE-TIME SIGNALS AND SYSTEMS [CHAP. 6



      and



FREQUENCY RESPONSE

6.31. A causal discrete-time LTI system is described by

                                  y [ n ] - + y [ n - 11 + $ y [ n - 21 = x [ n ]                 (6.143)
      where x[n]and y[n] are the input and output of the system, respectively (Prob. 4.32).
      ( a ) Determine the frequency response H ( n ) of the system.
      ( b ) Find the impulse response h[n]of the system.
      ( a ) Taking the Fourier transform of Eq. (6.1431, we obtain
                                   Y ( R )- i e - ' " ~ ( f l +
                                                              ) ;e-j2'y ( a )= X ( R )
            or
                                        (1 - i e - i f l + Le - j 2 n ) Y ( R )= X ( R )

            Thus,




      ( 6 ) Using partial-fraction expansions, we have
                                                   1                            2             1
                           H(R)= (1 -                   -I            - 1 - Ie-in - 1 - Le-in
                                                                                2

            Taking the inverse Fourier transform of H ( f l ) , we obtain

                                             h [ n ] = [ 2 ( i l n- ( f ) " ] u [ n ]

            which is the same result obtained in Prob. 4.32(6).

6.32. Consider a discrete-time LTI system described by
                                  y [ n ] - ;y[n - 11 = x [ n ] + ix[n - 11

      ( a ) Determine the frequency response H ( n ) of the system.
      ( b ) Find the impulse response h[n] of the system.
      ( c ) Determine its response y[n] to the input
                                                                      iT
                                                     ~ [ n=]cos-n
                                                                2
      ( a ) Taking the Fourier transform of Eq. (6.1441, we obtain
                                   Y ( R ) - i e - j n Y ( R )= X ( R ) + ; e - j n x ( R )
CHAP. 61 FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS


           Thus,




           Taking the inverse Fourier transform of H(R), we obtain




      (c) From Eq.(6.137)



           Then




           Taking the inverse Fourier transform of Y(R) and using Eq. (6.1351, we get




6.33. Consider a discrete-time LTI system with impulse response



     Find the output y[n] if the input x [ n ] is a periodic sequence with fundamental period
     No = 5 as shown in Fig. 6-17.
         From Eq. (6.134) we have



     Since R, = 27r/NO = 2 ~ / 5and the filter passes only frequencies in the range lRl I7r/4, only
     the dc term is passed through. From Fig. 6-17 and Eq. (6.11)
            FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSI'EMS [CHAP. 6




                                         -2-10       1 2 3 4 5                   n
                                            Fig. 6-17


     Thus, the output y[nl is given by
                                           ~ [ n=l   5        all n

634. Consider the discrete-time LTI system shown in Fig. 6-18.
     (a) Find the frequency response H ( n ) of the system.
     ( b ) Find the impulse response h [ n ]of the system.
     ( c ) Sketch the magnitude response IH(n)I and the phase response N R ) .
     ( d ) Find the 3-dB bandwidth of the system.
     (a)    From Fig. 6-18 we have
                                            y [ n ] = x [ n ] + x [ n - 11           (6.145)
            Taking the Fourier transform of Eq. (6.145) and by Eq. (6.77), we have




      ( b ) By the definition of h[nl [Eq. (2.3011 and Eq. (6.145) we obtain
                                            h [ n ] = 6 [ n ] + 6 [ n - 11
                                                                 Osnsl
                                         h [ n ]=
                                                                 otherwise
      (c)   From Eq. (6.146)




                           xlnl




                                            Fig. 6-18
CHAP. 61    FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS


                                                           R
            and                            9 ( ~ ) =- -              IRI IT
                                                           2
            which are sketched in Fig. 6-19.




                                               Fig. 6-19

      (dl   Let R,   ,,be the 3-dB bandwidth of the system. Then by definition (Sec. 5.7)

            we obtain
                                                      1                         'lT
                                                               and      i13dB
                                                                            =


            We see that the system is a discrete-time wideband low-pass finite impulse response
            (FIR) filter (Sec. 2 . 9 0 .

6.35. Consider the discrete-time LTI system shown in Fig. 6-20. where a is a constant and




                                               Fig. 6-20
            FOURIER ANALYSIS O F DISCRETE-TIME SIGNALS AND SYSTEMS [CHAP. 6



      ( a ) Find the frequency response H(S1) of the system.
      ( b ) Find the impulse response h [ n ]of the system.
      ( c ) Sketch the magnitude response ( H ( a ) (of the system for a = 0.9 and a = 0.5.
      ( a ) From Fig. 6-20 we have
                                             y [ n ] - a y [ n - 11 = x [ n ]              (6.147)
            Taking the Fourier transform of Eq. (6.147)and by Eq. (6.771,we have



      ( b ) Using Eq. (6.371, we obtain
                                                    h [ n ]= a n u [ n ]

      (c)   From Eq. (6.148)



            and




            which is sketched in Fig. 6-21 for a = 0.9 and a = 0.5.
                 We see that the system is a discrete-time low-pass infinite impulse response (IIR)
            filter (Sec. 2 . 9 0




                            -TI      -n
                                      -             o              T        ?r
                                                                                 -
                                                                                 n
                                      2                            2
                                              Fig. 6-21




6.36. Let h L p F [ nbe
                     ] the impulse response of a discrete-time 10~4-passfilter with frequency
      response H L p F ( R )Show
                            .    that a discrete-time filter whose impulse response h [ n ] is
      given by

                                          h[nl = ( - l)"hLPF[nl
      is a high-pass filter with the frequency response
                                          H ( S 1 )= H L P F ( a       T)
CHAP. 61 FOURIER ANALYSIS O F DISCRETE-TIME SIGNALS AND SYSTEMS


            Since - 1 = el", we can write
                                   h [ n ] = ( - l ) " h L P F [ n=] eJ""hLPF[n]             ( 6.152)
        Taking the Fourier transform of Eq. (6.152) and using the frequency-shifting property (6.44),
        we obtain
                                           H(R)= H L P F ( R - ~ )
        which represents the frequency response of a high-pass filter. This is illustrated in Fig. 6-22.




   -n         -a,     0      R,        7r     R               -n   -7r   + -a,   0         n-R,   n        R
                    Fig. 6-22 Transformation of a low-pass filter to a high-pass filter.



6.37. Show that if a discrete-time low-pass filter is described by the difference equation



        then the discrete-time filter described by



        is a high-pass filter.
            Taking the Fourier transform of Eq. (6.153),we obtain the frequency response H L p F ( Rof
                                                                                                    )
        the low-pass filter as
                                                                   M




        If we replace R by ( R - a ) in Eq. (6.155), then we have




        which corresponds to the difference equation
332          FOURIER ANALYSIS O F DISCRETE-TIME SIGNALS AND SYSTEMS [CHAP. 6


6.38. Convert the discrete-time low-pass filter shown in Fig. 6-18 (Prob. 6.34) to a high-pass
      filter.
            From Prob. 6.34 the discrete-time low-pass filter shown in Fig. 6-18 is described by [Eq.
      ( 6.145   )I

      Using Eq. (6.154), the converted high-pass filter is described by


      which leads to the circuit diagram in Fig. 6-23. Taking the Fourier transform of Eq. (6.157) and
      by Eq. (6.77), we have




      From Eq. (6.158)




      and

      which are sketched in Fig. 6-24. We see that the system is a discrete-time high-pass FIR filter.




                                             Fig. 6-23


6.39. The system function H ( z ) of a causal discrete-time LTI system is given by



      where a is real and la1 < 1. Find the value of b so that the frequency response H ( R )
      of the system satisfies the condition
                                          IH(n)l= 1          all R                           (6.160)
      Such a system is called an all-pass filter.
            By Eq. (6.34) the frequency response of the system is
CHAP. 61 FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS                                 333




                                            Fig. 6-24


      Then, by Eq. (6.160)



      which leads to

                                       J b+ e-]'I= 11 - ae-jnl
      or                     Ib+cosn-jsinRI=Il -acosR+jasinRl
      or                        1 + b 2 + 2bcosR= 1 + a 2 - 2acosO                         (6.162)
      and we see that if b = -a, Eq. (6.162)holds for all R and Eq. (6.160)is satisfied.

6.40. Let h [ n ] be the impulse response of an FIR filter so that
                                     h [ n ]=0          n<O,nrN
      Assume that h [ n ] is real and let the frequency response H ( R ) be expressed as
                                         H ( I 2 ) = 1H ( f l ) ) e ~ ~ ( ~ )

      ( a ) Find the phase response 8 ( R ) when h [ n ] satisfies the condition [Fig. 6-25(a)]
                                            h[n]= h [ N - 1 - n ]                          (6.163)

      ( b ) Find the phase response B ( R ) when h [ n ] satisfies the condition [Fig. 6-25(b)]
                                          h [ n ]= - h [ N - 1 - n ]                       (6.164)
             FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS [CHAP. 6




                                                                                                       N even



                                                                                          N- I
                                                                                                                n




                     I
                     I
                     I      a              N odd
                     I
                     I

 -
 w
     0
                     I


                                N
                                    -              b
                                                   n

         t




                                                       Fig. 6-25


(a)          Taking the Fourier transform of Eq. (6.163) and using Eqs. (6.431, (6.461, and (6.62).we
             obtain
                                                   H ( R ) = H * ( R ) e-j(N-')R
             or                          IH(f))le1flfl)= ) H ( n ) ( e - i o ( ~ ~ e - ~ ( N - I ) n
             Thus,
                                               e ( n ) = - e ( n ) - ( N -i ) n
             and                                       e ( n )= -+(N- 1 ) ~
      which indicates that the phase response is linear.
( b ) Similarly, taking the Fourier transform of Eq. (6.164, we get
                                     ~ ( n= )- H * ( R ) e - ~ ( " - ' ) f l
             or                         I H ( f l ) l e i 0 ( n ) , IH(n)(e~ne-l@(fl)e-~(N-l)fl
             Thus,
                                              e(n)= T - q n ) - ( N - i p
             and

             which indicates that the phase response is also linear.
CHAP. 61 FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS                                335


6.41. Consider a three-point moving-average discrete-time filter described by the difference
      equation




      (a)   Find and sketch the impulse response h [ n ]of the filter.
      ( b ) Find the frequency response H(IR) of the filter.
      (c) Sketch the magnitude response IH(IR)I and the phase response 8(IR) of the filter.
      (a)   By the definition of h[n] [Eq. (2.30)] we have



                                                             Osns2
                                         h[n] =
                                                             otherwise

            which is sketched in Fig. 6-26(a). Note that h[n] satisfies the condition (6.163) with
            N=3.
      ( b ) Taking the Fourier transform of Eq. (6.168), we have




                                            Fig. 6-26
            FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS [CHAP. 6


           By Eq. (1.90), with a = e-jR, we get
                                   1 1 - e-i3fi  1 e - i 3 f i / 2 ( e j 3 R / 2 - ,- j 3 R / 2
                             H(R)= -            =-
                                                                                                1
                                   3 ~ - ~ - j n3 e - i R / 2 ( e j R / 2 - e - i ~ / 2 )




           where




                                                                     when H r ( R ) > 0
           and                    e(n)=                              when H r ( R ) < 0
           which are sketched in Fig. 6-26(b).We see that the system is a low-pass FIR filter with
           linear phase.

6.42. Consider a causal discrete-time FIR filter described by the impulse response
                                            h [ n ] = {2,2,- 2, - 2)
      ( a ) Sketch the impulse response h [ n ] of the filter.
      ( b ) Find the frequency response H ( R ) of the filter.
      (c) Sketch the magnitude response IH(R)I and the phase response 8 ( R ) of the filter.
      ( a ) The impulse response h [ n ] is sketched in Fig. 6-27(a). Note that h [ n ] satisfies the
            condition (6.164) with N = 4.
      ( b ) By definition ( 6 . 2 7 )




          where



                                 IH(R)l= IHr(R)l= sln -
                                                            I ( 1 + ("z")i sin -




          which are sketched in Fig. 6-27(b). We see that the system is a bandpass FIR filter with
          linear phase.
CHAP. 61 FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS




                                           Fig. 6-27


SIMULATION

6.43. Consider the RC low-pass filter shown in Fig. 6-28(a)with RC = 1
          Construct a discrete-time filter such that
                                       h d [ n ] = h c ( t ) l ,= n ~ =
                                                                      , hc(nTS)       (6.172)
          where h c ( t ) is the impulse response of the RC filter, h,[n] is the impulse
          response of the discrete-time filter, and T, is a positive number to be chosen as
          part of the design procedures.
          Plot the magnitude response IH , ( o ) ) of the RC filter and the magnitude response
          ( H J w T J of the discrete-time filter for T, = 1 and T, = 0.1.
          The system function H,(s) of the RC filter is given by (Prob. 3.23)
                                                              1
                                                HJs) =-
                                                            s+ 1
          and the impulse response h$) is
                                               h c ( t )= e-'u(t)
          By Eq. (6.172) the corresponding h,[nl is given by

                                     h , [ n ] = e - n c u [ n ] = (e-")"u[d
      FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS [CHAP. 6




                                             (b)
        Fig. 6-28 Simulation of an RC filter by the impulse invariance method.


      Then, taking the z-transform of Eq. (6.175), the system function Hd(z) of the discrete-
      time filter is given by


                                                   =   ,      1
                                                           -e-Tsz-,


      from which we obtain the difference equation describing the discrete-time filter as

                                    y [ n ] - e - T s y [ n - 1) = x [ n ]             (6.176)

      from which the discrete-time filter that simulates the RC filter is shown in Fig. 6-28(b).
(b)   By Eq. (5.40)




      Then


      By Eqs. (6.34) and (6.81)




      From Eq. (6.149)
CHAP. 61 FOURIER ANALYSIS O F DISCRETE-TIME SIGNALS AND SYSTEMS


            From T, = 1,




            For T, = 0.1,




            The magnitude response IHc(w)l of the RC filter and the magnitude response IH,(wq)l
            of the discrete-time filter for T, = 1 and T, = 0.1 are plotted in Fig. 6-29. Note that the
            plots are scaled such that the magnitudes at w = 0 are normalized to 1.
                The method utilized in this problem to construct a discrete-time system to simulate
            the continuous-time system is known as the impulse-inuariance method.




                            0           5                  10                15
                                                  Fig. 6-29




6.44. By applying the impulse-invariance method, determine the frequency response H d ( f l )
      of the discrete-time system to simulate the continuous-time LTI system with the
      system function



          Using the partial-fraction expansion, we have



     Thus, by Table 3-1 the impulse response of the continuous-time system is
                                            h c ( t )= ( e - t - e - " ) u ( t )              (6.177)
      Let hd[nl be the impulse response of the discrete-time system. Then, by Eq. (6.177)
                                 h d [ n ]= h,(nT,) = (e-"'5 - e-'"'j ) 4 n ]
            FOURIER ANALYSIS O F DISCRETE-TIME SIGNALS AND SYSTEMS                                         [CHAP. 6


      and the system function of the discrete-time system is given by




      Thus, the frequency response H d ( f l )of the discrete-time system is
                                                                     1                        1
                         H d ( f l )= H d ( z ) l , , , , ~=~ 1 - e - n T s e - ~ n- 1 - e - 2 n ~ ,,-in    (6.179)

          Note that if the system function of a continuous-time LTI system is given by




      then the impulse-invariance method yields the corresponding discrete-time system with the
      system function H,( z given by




6.45. A differentiator is a continuous-time LTI system with the system function [Eq. (3.2011


      A discrete-time LTI system is constructed by replacing s in H c ( s ) by the following
      transformation known as the bilinear transformation:




      to simulate the differentiator. Again T, in Eq. ( 6 . 1 8 3 ) is a positive number to be
      chosen as part of the design procedure.
      ( a ) Draw a diagram for the discrete-time system.
      ( b ) Find the frequency response H d ( f l ) of the discrete-time system and plot its
            magnitude and phase responses.
      ( a ) Let H , ( z ) be the system function of the discrete-time system. Then, from Eqs. (6.182)
            and (6.183)we have




           Writing Hd( z ) as




           then, from Probs. (6.35) and (6.38) the discrete-time system can be constructed as a
           cascade connection of two systems as shown in Fig. 6-3Ma). From Fig. 6-3Ma) it is seen
           that we can replace two unit-delay elements by one unit-delay element as shown in Fig.
           6-30( 6).
CHAP. 61 FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS




                                           (b)
                             Fig. 6-30 Simulation of a differentiator.

    ( b ) By Eq. (6.184) the frequency response Hd(R) of the discrete-time system is given by




         Note that when R -C 1, we have
                                               2    R   R
                                      Hd(R) =j-tan-   =j- =jw
                                               T,   2    Ts
         if R = oT, (Fig. 6-31).




                                          Fig. 6 3 1
342         FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS                           [CHAP. 6



6.46. Consider designing a discrete-time LTI system with system function H J z ) obtained by
      applying the bilinear transformation to a continuous-time LTI system with rational
      system function H,(s). That is,


      Show that a stable, causal continuous-time system will always lead to a stable, causal
      discrete-time system.
          Consider the bilinear transformation of Eq. (6.183)




      Solving Eq. (6.188) for z, we obtain




      Setting s =jw in Eq. (6.1891, we get




      Thus, we see that the jw-axis of the s-plane is transformed into the unit circle of the z-plane.
      Let
                                      z =re'"         and       s = a + jo
      Then from Eq. (6.188)




                                         r2- 1        2 r sin $2
                                      1+r2+2rcosR+'1+r2+2rcos~

      Hence,




                                                 2       2 r sin R
                                         w=-
                                                 T, 1 + r 2 + 2 r c o s R
      From Eq. (6.191a)we see that if r < 1, then a < 0, and if r > 1, then cr > 0. Consequently, the
      left-hand plane (LHP) in s maps into the inside of the unit circle in the z-plane, and the
      right-hand plane (RHP) in s maps into the outside of the unit circle (Fig. 6-32). Thus, we
      conclude that a stable, causal continuous-time system will lead to a stable, causal discrete-time
      system with a bilinear transformation (see Sec. 3.6B and Sec. 4.6B). When r = 1, then o = 0
      and
                                             2      sin 0         2         R
                                       w=-                    = -tan-
                                             T, I + cos R        T,         2
CHAP. 61    FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS




                                     s-plane                                                         z-plane




                                                                                    I   U ~ circle
                                                                                              I


                                   Fig. 6-32 Bilinear transformation.




      From Eq. (6.193) we see that the entire range -a, < w <a, is mapped only into the range
      -Trsn I T .

6.47. Consider the low-pass RC filter in Fig. 6-28(a). Design a low-pass discrete-time filter
      by the bilinear transformation method such that its 3-dB bandwidth is ~ / 4 .
           Using Eq. (6.192), R,   ,,= 7r/4 corresponds to
                                               2      R,,,     2       7r   0.828
                                     w,,,   = -tan-          = -tan-        =-
                                               Ts      2      Ts   8      Ts
      From Prob. 5.55(a), w ,   ,, = l / R C . Thus, the system function H,(s) of the RC filter is given by




      Let H J z ) be the system function of the desired discrete-time filter. Applying the bilinear
      transformation (6.183)to Eq. (6.1951, we get




      from which the system in Fig. 6-33 results. The frequency response of the discrete-time filter is



     At R = 0, Hd(0)= 1 , and at R = ~ / 4J,H d ( r / 4 )=( 0.707 = I / fi, which is the desired re-
     sponse.
             FOURIER ANALYSIS O F DISCRETE-TIME SIGNALS AND SYSTEMS                                   [CHAP. 6




                                            0.414

             Fig. 6-33 Simulation of an RC filter by the bilinear transformation method.

6.48. Let h [ n ] denote the impulse response of a desired IIR filter with frequency response
      H ( R ) and let h , [ n ] denote the impulse response of an FIR filter of length N with
      frequency response H,(R). Show that when
                                                                    OsnsN-1
                                         h o [ n ] = (:["I                                             (6.198)
                                                                    otherwise
      the mean-square error e 2 defined by



      is minimized.
            By definition (6.27)

                     H(R)=
                                   ffi


                                   C h[n]e-J'"
                                n = -m
                                                             and     H,(R)=
                                                                               n-
                                                                                    z
                                                                                    m



                                                                                    -m
                                                                                         ho[n]e-JRn


      Let




      where e [ n ] = h [ n ]- h , [ n ] . By Parseval's theorem (6.66) we have




      The last two terms in Eq. (6.201) are two positive constants. Thus, E' is minimized when


      that is,


            Note that Eq. (6.198) can be expressed as


      where w [ n ] is known as a rectangular window function given by
                                                                   OsnsN-1
                                               w [ n ]=
                                                                   otherwise
CHAP. 61     FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS


DISCRETE FOURIER TRANSFORM


6.49. Find the N-point DFT of the following sequences x [ n ] :




      (a)   From definitions (6.92) and (1.45), we have




            Figure 6-34 shows x [ n ] and its N-point DFT X [ k ] .




                                              n

                                               Fig. 6-34




     ( b ) Again from definitions (6.92) and (1.44) and using Eq. (1.90), we obtain




            Figure 6-35 shows x [ n ] and its N-point DFT X [ k ] .




                                              Fig. 6-35
346         FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS [CHAP. 6



6.50. Consider two sequences x [ n ] and h [ n ] of length 4 given by




      ( a > Calculate y [ n ] = x [ n ] 8 h [ n ] by doing the circular convolution directly.
      ( b ) Calculate y [ n ] by DFT.
      (a)   The sequences x [ n ] and h [ n ] can be expressed as

                                 x[n]= {l,O,- 1,O)          and      h [ n ] = ( l I , 1 ~1 , ~ , ~ )

            By Eq. (6.108)




            The sequences x [ i ] and h [ n - iImod4for n = 0 , 1 , 2 , 3 are plotted in Fig. 6-36(a).Thus, by
            Eq. (6.108) we get




            which is plotted in Fig. 6-36(b).
      ( b ) By Eq. (6.92)




            Then by Eq. (6.107) the DFT of y [ n ] is

                           Y [ k ]= X [ k ] H [ k ]= ( 1 - w,Zk)(l + i~qk+ ;wqZk + twak)
                                  - 1 +i w k -lw2k-
                                  -
                                         2   4   4   4
                                                          1 ~ 3 -
                                                          8  4
                                                                k Lw4k -Lw5k
                                                                  4 4   $ 4

            Since W:k = (w:)~
                            = l k and wdjk= W4( 4 + ' ) =
                                                        k wqk, we obtain

                                y [ k ] = $ + $ ~ q k - f ~ : ~ - i wk~= 0~ , ~1 , 2 , 3
            Thus, by the definition of DFT [Eq. (6.9211 we get
CHAP. 61 FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS




6.51. Consider the finite-length complex exponential sequence

                             ~ [ n=]               OsnsN-1
                                                   otherwise

     ( a ) Find the Fourier transform X(fl)of x[n].
     ( b ) Find the N-point DFT X[k]of x[n].
              FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS [CHAP. 6


      (a)    From Eq. (6.27)and usingEq.(1.90), we have




                                                          sin [( R - R,) ~ / 2 ]
                                  - ,j(R-RuXN-     I)/Z
                                                           sin[(R - R , ) / 2 ]

      ( b ) Note from Eq. (6.98) that



             we obtain




6.52. Show that if x [ n ] is real, then its DFT X [ k ] satisfies the relation


      where * denotes the complex conjugate.
            From Eq. (6.92)




       Hence, if x [ n ] is real, then x * [ n ] = x [ n ] and




6.53. Show that



      where * denotes the complex conjugate and
                                                   X [ k ] = DFT{x[n])
            We can write Eq. (6.94) as
CHAP. 61 FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS                                  349


      Noting that the term in brackets in the last term is the DFT of X * [ k ] ,we get




      which shows that the same algorithm used to evaluate the DFT can be used to evaluate the
      IDFT.

6.54. T h e DFT definition in Eq. (6.92) can be expressed in a matrix operation form as
                                                 X=WNx                                      (6.206)
      where



                    x=




     The N x N matrix WN is known as the D F T matrix. Note that WN is symmetric; that is,
     W z = WN, where W: is the transpose of WN.
      (a) Show that




                       '
         where W; is the inverse of WN and W,* is the complex conjugate of WN.
     (6) Find W, and W;' explicitly.
     (a)   If we assume that the inverse of W, exists, then multiplying both sides of Eq. (6.206) by
               ',
           W i we obtain



           which is just an expression for the IDFT. The IDFT as given by Eq. (6.94) can be
           expressed in matrix form as




           Comparing Eq. (6.210) with Eq. (6.2091, we conclude that
350           FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS                        [CHAP. 6


       (b)    Let W n + , , , + , denote the entry in the ( n + 1)st row and (k + 1)st column of the W4
              matrix. Then, from Eq. (6.207)


              and we have




6.55. ( a ) Find the DFT X [ k ] of x [ n ] = ( 0 , 1 , 2 , 3 ) .
       ( b ) Find the IDFT x [ n ] from X [ k ] obtained in part (a).
       (a)    Using Eqs. (6.206) and (6.212), the DFT XIk]of x[n] is given by




       (b)    Using Eqs. (6.209) and (6.212), the IDFT x[n] of X [ k ] is given by
                                        1         1         1        1       6
                                                 1        -1                       =-
                                        1       -1          1       -1               4
                                        1       -j        -1         j -   -2-j2


6.56. Let x [ n ] be a sequence of finite length N such that
                                            x[n]=0              n<O,n>N
       Let the N-point DFT X [ k ] of x [ n ] be given by [Eq. (6.9211
                            N- 1




       Suppose N is even and let



       The sequences f [ n ] and g [ n ] represent the even-numbered and odd-numbered
       samples of x [ n ] , respectively.
       ( a ) Show that
                                                                                N
                                    f [ n ] = 4.1 = 0           outside 0 s n 5 - - 1
                                                                                2
CHAP. 61 FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS                                  351


    ( b ) Show that the N-point DFT X [ k ] of x [ n ] can be expressed as




                                     (N/2)-1                                         N
          where           F[k]=             C f[n]W$2                  k =0,1,...9
                                                                                 --1
                                                                                 2
                                                                                             (6.218~)
                                        n=O




    (c)   Draw a flow graph to illustrate the evaluation of X [ k ] from Eqs. ( 6 . 2 1 7 ~and
                                                                                            )
          (6.2176)with N = 8.
    ( d ) Assume that x [ n ] is complex and w,"~have been precomputed. Determine the
          numbers of complex multiplications required to evaluate X [ k ] from Eq. (6.214)
          and from Eqs. (6.217a) and (6.217b) and compare the results for N = 2'' = 1024.
    (a)   From Eq. (6.213)

                         f [ n ]= x [ 2 n ]= 0 , n < 0       and       f[:]   = x [ N ] =O


          Thus

          Similarly




          Thus,
                      g[n]=x[2n+l]=O,n<O                         and
                                                                          KI
                                                                        g - = x [ N + 1]=O




    ( b ) We rewrite Eq. (6.214) as
                        X [ k ]=    x x [ n ]Win+ C x [ n ]W,kn
                                   n even                n odd




          With this substitution Eq. (6.219) can be expressed as
      FOURIER ANALYSIS O F DISCRETE-TIME SIGNALS AND SYSTEMS                               [CHAP. 6


                                   (N/2)- I
                                                                              N
      where               F[kl=       C       f[nlW,k;2       k = O , l , ...,- - 1
                                     n=O                                       2




      Note that F [ k ] and G [ k ] are the (N/2)-point DFTs of f i n ] and g i n ] , respectively. Now




      Hence, Eq. (6.221) can be expressed as




(c) The flow graph illustrating the steps involved in determining X [ k ] by Eqs. (6.217~)and
    (6.2176) is shown in Fig. 6-37.
(d) T o evaluate a value of X [ k ] from Eq. (6.214) requires N complex multiplications. Thus,
    the total number of complex multiplications based on Eq. (6.214) is N ~The     . number of
    complex multiplications in evaluating F [ k ] or G [ k ] is (N/2)2. In addition there are N
    multiplications involved in the evaluation of ~ , k ~ [ Thus,
                                                              k ] . the total number of complex
    multiplications based on Eqs. (6.217~)and (6.217b) is 2 ( ~ / 2 +      ) ~N = ~ ' / 2+ N. For
    N = 2"'= 1024 the total number of complex multiplications based on Eq. (6.214) is
    22" -- l o h and is 106/2 + 1024 .= 106/2 based on Eqs. (6.217~)and (6.217b). So we see
    that the number of multiplications is reduced approximately by a factor of 2 based on
    Eqs. ( 6 . 2 1 7 ~ and
                       ) (6.2176).
        The method of evaluating X [ k I based on Eqs. (6.217~)and (6.217b) is known as the
    decimation-in-time fast Fourier transform (FFT) algorithm. Note that since N/2 is even,
    using the same procedure, F [ k l and G [ k ] can be found by first determining the
    (N/4)-point DFTs of appropriately chosen sequences and combining them.




        Fig. 6-37 Flow graph for an 8-point decimation-in-time F l T algorithm.
CHAP. 61   FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS A N D SYSTEMS                                                  353


6.57. Consider a sequence
                                      x[n]={l,l,-1,-1,-l,l,l,-1)
     Determine the DFT X [ k ] of x [ n ] using the decimation-in-time FFT algorithm.
        From Figs. 6-3Na) and (61, the phase factors W: and W,k are easily found as follows:
                       wb)= 1        w; =                 -,
                                                     w~~= - 1       w~~ =j

     and        W:= 1
                                      1
                                 w,'= -
                                          a -'7T
                                                      1
                                                                   w+       -j            w+        - -a1- , - a1

     Next, from Eqs. ( 6 . 2 1 5 ~and
                                   ) (6.2156)
                      f 1.1 = x [ 2 n ] = ( x [ O ] x, [ 2 ] ,x [ 4 ] ,x [ 6 ] ) = ( 1 , - 1 , - 1 , l )
                      g [ n ] = x [ 2 n +1 ] = { x [ l ] , x [ 3 ] , x [ S ] , x [ 7=] }{ I , - 1 , 1 , - 1 )
     Then, using Eqs. (6.206)and (6.2121, we have




                 (4                                                                           (b)
                                 Fig. 6 3 8 Phase factors W: and W,".
354         FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS                                                [CHAP. 6


      and by Eqs. ( 6 . 2 1 7 ~and
                                ) (6.2176) we obtain




          Noting that since x[n] is real and using Eq. (6.204),.X[7], X [ 6 ] , and X[5] can be easily
      obtained by taking the conjugates of X [ l ] , X[2], and X[3], respectively.

6.58. Let x [ n ] be a sequence of finite length N such that
                                       x[n]=0                    n <0,n r N
      Let the N-point DFT X [ k ] of x [ n ] be given by [Eq. (6.92)]
                        N-1
              X[k]=            x [ n ]w,kn           wN -- e - ~ ( 2 7 7 / N )          k = 0 , 1 , ..., N - 1    (6.224)
                         n=O

      Suppose N is even and let




      (a) Show that the N-point DFT X [ k ] of x [ n ] can be expressed as



                                                                                            N
                                 X[2k   + 11 = Q [ k ]                  k = 0 , 1 , ..., - - 1
                                                                                            2
                                                                                                                 (6.2266)
                                      ( N / 2 )- 1                                                N
           where              P[kl=       C p[nlW,k;z                            k = 0 , 1 , ..., - - 1
                                                                                                  2
                                                                                                                 (6.227~)
                                        n=O
                                      (N/2)- 1                                                    N
                                                                                                 --
                            Q[k]=         C 4[nlW,k;2                            k = 0 , 1 , ...,
                                                                                                  2 1            (6.2276)
                                        n=O

      (6) Draw a flow graph to illustrate the evaluation of X [ k ] from Eqs. (6.226~)and
          (6.2266) with N = 8.
      ( a ) We rewrite Eq. (6.224)as



           Changing the variable n = m + N / 2 in the second term of Eq. (6.228),we have
CHAP. 61 FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS                                 355


          Noting that [Eq. (6.223)l


          Eq. (6.229) can be expressed as



          For k even, setting k = 2r in Eq. (6.230), we have




          where the relation in Eq. (6.220) has been used. Similarly, for k odd, setting k = 2r + 1
          in Eq. (6.230). we get



          Equations (6.231) and (6.232) represent the (N/2)-point DFT of ~ [ nand
                                                                               l &I, respec-
          tively. Thus, Eqs. (6.231) and (6.232) can be rewritten as




                                      (N/2)- 1                                 N
          where             P[kl=       C        ~[nlW,k;2     k = O , l , ...,- - 1
                                                                               2
                                       n-0




    (6)   The flow graph illustrating the steps involved in determining X[k] by Eqs. (6.227~)and
          (6.2276) is shown in Fig. 6-39.
              The method of evaluating X[k] based on Eqs. (6.227~)and (6.2276) is known as the
          decimation-in-frequencyfast Fourier transform (FFT) algorithm.




          Fig. 6-39 Flow graph for an &point decimation-in-frequencyFFT algorithm.
356         FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS                     [CHAP. 6


6.59. Using the decimation-in-frequency FFT technique, redo Prob. 6.57.
          From Prob. 6.57
                                     x[n]=(l,l,-1,-1,-l,l,l,-1)
          By Eqs. (6.225a)and (6.225b)and using the values of W,"obtained in Prob. 6.57, we have




                            = (2,0, 12,O)

      Then using Eqs. (6.206) and (6.212).we have




      and by Eqs. (6.226a)and (6.2266)we get
                            X[0] = P[0] = 0                X[4] = P[2] = o
                            X[1] = Q[O] = 2 + j2           X[5] = Q[2] = 2 + j2
                            X[2] = P[1] = -j4              X[6] = P[3] =j4
                            X[3] = Q[l] = 2 - j2           X[7] = Q[3] = 2 - j2
      which are the same results obtained in Prob. 6.57.

6.60. Consider a causal continuous-time band-limited signal x ( t ) with the Fourier transform
      X(w). Let


      where Ts is the sampling interval in the time domain. Let
                                        X [ k ] = X ( k Aw)
      where Aw is the sampling interval in the frequency domain known as the frequency
      resolution. Let T, be the record length of x ( t ) and let w, be the highest frequency of
      x ( t ) . Show that x [ n ] and X [ k ] form an N-point DFT pair if
                                TI
                               -=-
                                       2%                             w ~ T 1
                                          =N         and        N2-
                                T,     Aw                               T
CHAP. 61 FOURIER ANALYSIS O F DISCRETE-TIME SIGNALS AND SYSTEMS


          Since x(t ) = 0 for t < 0, the Fourier transform X(w) of x(t ) is given by [Eq.



    Let T I be the total recording time of x ( t ) required to evaluate X(w). Then the above integral
    can be approximated by a finite series as
                                                        N-l
                                        X(w) = At       z
                                                        n=O
                                                               x ( t n ) e-;"'"

    where tn = n At and T, = NAt. Setting w = w, in the above expression, we have
                                                        N- 1
                                       X ( w k ) = At          x(t,) e-'"'kln                        (6.237)
                                                        n=O

    Next, since the highest frequency of x(t) is w,           the inverse Fourier transform of ~ ( w is) given
    by [Eq. (5.3211



    Dividing the frequency range -oMI w I w,             into N (even) intervals of length Aw, the above
    integral can be approximated by




    where 2wM= NAw. Setting t = t, in the above expression, we have




    Since the highest frequency in x(t) is w,       then from the sampling theorem (Prob. 5.59) we
    should sample x(t) so that



    where T, is the sampling interval. Since T, = At, selecting the largest value of A t (the Nyquist
    interval), we have
                                                              7
                                                  At = -
                                                              OM


    and

    Thus, N is a suitable even integer for which
                                 T ,-- -~ W M
                                 -                                                WM   TI
                                            =N            and           N2-
                                  T,    Aw                                         T

    From Eq. (6.240) the frequency resolution A w is given by
            FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS [CHAP. 6


      Let t n = n A t and w k = k A w . Then



      Substituting Eq. (6.243) into Eqs. (6.237) and (6.239), we get
                                                 N- 1
                                   X ( k A o ) = C A t x ( n A t ) e-j(2"/N)nk
                                                 n =O

                                                   (N/2)-1
      and                        x ( n At) = -          C     ~   ( b wk ) e(2"/N)nk
                                               2a k = -N/Z

      Rewrite Eq. (6.245) as

                                         X ( k A w ) e'(2"/N'nk+       C
                                                                        -1


                                                                    k = -N/2                       1
                                                                               X ( k A w ) ei(2"/N)nk

      Then from Eq. (6.244) we note that X ( k A w ) is periodic in k with period N. Thus, changing
      the variable k = m - N in the second sum in the above expression, we get




      Multiplying both sides of Eq. (6.246) by At and noting that Aw At = 2,rr/N, we have
                                                  1 N-1
                                 x ( n A t ) At = - C X ( k A w ) ei(2"/N)nk
                                                        k=O

      Now if we define
                                        x [ n ] = A t x ( n A t ) = T,x(nT,)                            (6.248)
                                       X [ k ]= X ( k A w )
      then Eqs. (6.244) and (6.247) reduce to the DFT pair, that is,




6.61. ( a ) Using the DFT, estimate the Fourier spectrum X ( w ) of the continuous-time
            signal


            Assume that the total recording time of x ( t ) is T, = 10 s and the highest
            frequency of x ( t ) is w , = 100 rad/s.
      ( b ) Let X [ k ] be the DFT of the sampled sequence of x ( t ) . Compare the values of
            X[O], X [ l ] , and X [ 1 0 ] with the values of X(O), X ( A w ) , and X ( 1 0 A w ) .
FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS


From Eq. (6.241)




Thus, choosing N = 320, we obtain

                                     Aw = 2 = =0.625 rad




Then from Eqs. (6.244), (6.249), and (1.921, we have
                       N- 1
            X [ k ]=          A t x ( n A t ) e-j(2T/N'nk
                       n=O




which is the estimate of X ( k A o ) .
Setting k = 0 , k = 1 , and k = 10 in Eq. (6.250), we have




From Table 5-2




and




                                                      1
                   x ( l 0 A o ) = X(6.25) =                 - 0,158e-11.412
                                                 1 + j6.25
Even though x ( t ) is not band-limited, we see that X [ k l offers a quite good
                                                                            -    approxima-
                                                                                  -.
tion to X ( w ) for the frequency range we specified.
              FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS [CHAP. 6



                                     Supplementary Problems
6.62.   Find the discrete Fourier series for each of the following periodic sequences:
        (a) x[n] = cos(0,l~n)
        (b) x[n] = sin(0.l.rrn)
        (c) x[n] = 2cos(1.6~n)+ sin(2.47rn)
        Am.   (a) x[n] = $ e j n o n + 1ze ~   ~   R0 =~0 . 1 ~~   0   ~   ,




6.63.   Find the discrete Fourier series for the sequence x[n] shown in Fig. 6-40.




                                                     Fig. 6-40



6.64.   Find the trigonometric form of the discrete Fourier series for the periodic sequence x[n]
        shown in Fig. 6-7 in Prob. 6.3.
                      3       Tr        Tr 1
        Am. x[n] = - - cos-n - sin-n - -cos r n
                      2       2         2  2
6.65.   Find the Fourier transform of each of the following sequences:
        (a) x[nl= al"l,la1 < 1
        (6) x[n] = sin(flon), IRoI < 7r
        (c) x[nl= u[ -n - 11
                                   1-a2
        Am.   (a) X(fl)=
                               1-2acosfl+a2
CHAP. 61 FOURIER ANALYSIS O F DISCRETE-TIME SIGNALS AND SYSTEMS                               361


     Find the Fourier transform of the sequence x[n] shown in Fig. 6-41
    Am. X(R) =j2(sin R + 2 sin 2 R       + 3 sin 3R)




                                             Fig. 6-41



    Find the inverse Fourier transform of each of the following Fourier transforms:
    (a) X ( R ) = cos(2R)
    (6) X(R) =j R
    Am.    (a) x [ n l = f8[n - 21 + 3 [ n + 21



    Consider the sequence y[n] given by
                                                            n even
                                                            n odd
    Express y(R) in terms of X(R).
    Ans.   Y(R) = $X(R) + $x(R - 7)

    Let




    (a) Find y[n 1 = x[n] * x[n].
    ( b ) Find the Fourier transform Y(0) of y[n].

   Am.     (a) y[n] =                             In15 5
                                                  In1 > 5



   Verify Parseval's theorem [Eq. (6.66)] for the discrete-time Fourier transform, that is,
                                     m                  1




   Hint:   Proceed in a manner similar to that for solving Prob. 5.38.
362           FOURIER ANALYSIS O F DISCRETE-TIME SIGNALS AND SYSTEMS                             [CHAP. 6


6.71.   A causal discrete-time LTI system is described by
                                      y [ n ] - i y [ n - 1 1 + i y [ n - 21 = x [ n ]
        where x [ n ] and y[nl are the input and output of the system, respectively.
        ( a ) Determine the frequency response H ( R ) of the system.
        ( b ) Find the impulse response h [ n ] of the system.
        ( c ) Find y[nl if x[nl = ( i ) " u [ n l .




6.72.   Consider a causal discrete-time LTI system with frequency response
                             H ( R ) = Re{ H ( R ) ) + j I m { H ( R ) )= A ( R ) +j B ( R )

        ( a ) Show that the impulse response h [ n ] of the system can be obtained in terms of A ( R ) or
              B ( R ) alone.
        ( b ) Find H ( R ) and h [ n ] if



        ( a ) Hint: Process in a manner similar to that for Prob. 5.49.
        ( b ) Ans. H ( R ) = 1 + ePin, h [ n ]= ~ [ n+]S[n - 11

6.73.   Find the impulse response h [ n ] of the ideal discrete-time HPF with cutoff frequency R ,
        (0 < R , < r )shown in Fig. 6-42.
                              sin R,n
        Am. h [ n ]= S [ n ]- -
                                Tn




                                                  Fig. 6-42




6.74.   Show that if H L P F ( z is
                                 ) the system function of a discrete-time low-pass filter, then the
        discrete-time system whose system function H ( z ) is given by H ( z ) = H L P F ( - z is
                                                                                               ) a high-pass
        filter.
        Hint: Use Eq. (6.156) in Prob. 6.37.
CHAP. 61 FOURIER ANALYSIS O F DISCRETE-TIME SIGNALS AND SYSTEMS


6.75.   Consider a continuous-time LTI system with the system function




        Determine the frequency response H d ( R ) of the discrete-time system designed from this
        system based on the impulse invariance method.
                                          -in
        Am.     H ( n ) = T, e-Ts
                                  ( 1 - e-T3e-ia )
                                                  ,, where T, is the sampling interval of h c ( t ) .

6.76.   Consider a continuous-time LTI system with the system function
                                                             1
                                                  H A S ) = s+l

        Determine the frequency response H d ( R ) of the discrete-time system designed from this
        system based on the step response invariance, that is,


        where s c ( t ) and s d [ n ] are the step response of the continuous-time and the discrete-time
        systems, respectively.




6.77.   Let H p ( z ) be the system function of a discrete-time prototype low-pass filter. Consider a new
        discrete-time low-pass filter whose system function H ( z ) is obtained by replacing z in H p ( z )
        with ( z - a ) / ( l - a z ) , where a is real.
        ( a ) Show that




        ( b ) Let R,, and R , be the specified frequencies ( < T ) of the prototype low-pass filter and
              the new low-pass filter, respectively. Then show that




                             e i n ~- a
        Hint:   Set einpl = 1 - a e i n ~and solve for a.

6.78.   Consider a discrete-time prototype low-pass filter with system function



        ( a ) Find the 3-dB bandwidth of the prototype filter.
        (6) Design a discrete-time low-pass filter from this prototype filter so that the 3-dB bandwidth
              of the new filter is 2 1 ~ / 3 .
                FOURIER ANALYSIS OF DISCRETE-TIME SIGNALS AND SYSTEMS [CHAP. 6



        Hint:     Use the result from Prob. 6.77.
                                    7T
        Ans.     (a)    a,,,= -2


6.79.   Determine the DFT of the sequence


                            I -aN
        Ans. X [ k ] = 1 - a e - i ( 2 r / N ) k   k = 0 . 1 , ..., N - 1

6.80.   Evaluate the circular convolution


        where


        ( a ) Assuming N = 4.
        ( b ) Assuming N = 8 .
        Ans.     (a) y [ n ] = ( 3 , 3 , 3 , 3 )
                 ( b ) y[nI=~l,2,3,3,2,l,O,O)

6.81.   Consider the sequences x[nl and h[nl in Prob. 6.80.
        ( a ) Find the 4-point DFT of x[nl, hln], and y [ n ] .
        ( b ) Find y [ n ] by taking the IDFT of Y [ k ] .
        Ans.     ( a ) [ X[Ol, X[11, X[21, X[311 = [4,O,0,Ol
                       [H[Ol,H[11, HI21, H[311= [3,- j , 1 , jl
                       [ Y[Ol,Y [11, Y P l , Y[311= [ 12,0,0,01
                 (6) y [ n I = { 3 , 3 , 3 , 3 )

6.82.   Consider a continuous-time signal A t ) that has been prefiltered by a low-pass filter with a
        cutoff frequency of 10 kHz. The spectrum of x ( t ) is estimated by use of the N-point DFT. The
        desired frequency resolution is 0.1 Hz. Determine the required value of N (assuming a power
        of 2 ) and the necessary data length T I .
        Ans.     N = 2'' and T , = 13.1072 s
                                                                     Chapter 7

                              State Space Analysis
7.1 INTRODUCTION
         So far we have studied linear time-invariant systems based on their input-output
     relationships, which are known as the external descriptions of the systems. In this chapter
     we discuss the method of state space representations of systems, which are known as the
     internal descriptions of the systems. The representation of systems in this form has many
     advantages:
     1. It provides an insight into the behavior of the system.
     2. It allows us to handle systems with multiple inputs and outputs in a unified way.
     3. It can be extended to nonlinear and time-varying systems.
 Since the state space representation is given in terms of matrix equations, the reader
 should have some familiarity with matrix or linear algebra. A brief review is given in App.
 A.

7.2 THE CONCEPT OF STATE
A.     Definition:
         The state of a system at time to (or n o ) is defined as the minimal information that is
     sufficient to determine the state and the output of the system for all times t 2 to (or
     n 2 n o ) when the input to the system is also known for all times t 2 to (or n 2 n o ) . The
     variables that contain this information are called the state variables. Note that this
     definition of the state of the system applies only to causal systems.
         Consider a single-input single-output LTI electric network whose structure is known.
     Then the complete knowledge of the input x ( t ) over the time interval - m to t is sufficient
     to determine the output y ( t ) over the same time interval. However, if the input x ( t ) is
     known over only the time interval t o to t , then the current through the inductors and the
     voltage across the capacitors at some time to must be known in order to determine the
     output y ( t ) over the time interval to to t . These currents and voltages constitute
     the "state" of the network at time t o . In this sense, the state of the network is related to
     the memory of the network.

B.     Selection of State Variables:
      Since the state variables of a system can be interpreted as the "memory elements" of
 the system, for discrete-time systems which are formed by unit-delay elements, amplifiers,
 and adders, we choose the outputs of the unit-delay elements as the state variables of the
 system (Prob. 7.1). For continuous-time systems which are formed by integrators, ampli-
 fiers, and adders, we choose the outputs of the integrators as the state variables of the
 system (Prob. 7.3). For a continuous-time system containing physical energy-storing ele-
366                                    STATE SPACE ANALYSIS                                       [CHAP. 7


  ments, the outputs of these memory elements can be chosen to be the state variables of the
  system (Probs. 7.4 and 7.5). If the system is described by the difference or differential
  equation, the state variables can be chosen as shown in the following sections.
      Note that the choice of state variables of a system is not unique. There are infinitely
  many choices for any given system.


7.3 STATE SPACE REPRESENTATION OF DISCRETE-TIME LTI SYSTEMS
A. Systems Described by Difference Equations:
    Suppose that a single-input single-output discrete-time LTI system is described by an
 Nth-order difference equation
                          y [ n ] + a , y [ n - 11   +       + a N y [ n- N ] = x [ n ]              (7.1)
 We know from previous discussion that if x [ n ] is given for n 2 0, Eq. (7.1) requires N
 initial conditions y [ - I ] , y [ - 2 1 , . . ., y [ - N ] to uniquely determine the complete solution
 for n > 0. That is, N values are required to specify the state of the system at any time.
      Let us define N state variables q , [ n ] ,q 2 [ n ] ,. . . ,q N [ n ]as




  and               y [ n ] = - a N q , [ n ] - a N - , q 2 [ n ]- - . . - a , q ~ [ +~x l[ n l
  In matrix form Eqs. ( 7 . 3 ~ and
                                ) (7.36) can be expressed as




  Now we define an N x 1 matrix (or N-dimensional vector) q [ n ] which we call the state
CHAP. 71                               STATE SPACE ANALYSIS



     vector :




     Then Eqs. ( 7 . 4 ~and
                         ) (7.46) can be rewritten compactly as



     where




         Equations ( 7 . 6 ~and
                             ) (7.66) are called an N-dimensional state space representation (or
     state equations) of the system, and the N x N matrix A is termed the system matriu. The
                                ) (7.66) for a given initial state is discussed in Sec. 7.5.
     solution of Eqs. ( 7 . 6 ~and

B.     Similarity Transformation:
        As mentioned before, the choice of state variables is not unique and there are infinitely
     many choices of the state variables for any given system. Let T be any N X N nonsingular
     matrix (App. A) and define a new state vector
                                            v [ n ]= m [ n ]                                (7.7)
     where q [ n ] is the old state vector which satisfies Eqs. ( 7 . 6 ~ )and (7.66). Since T is
     nonsingular, that is, T-I exists, and we have
                                             q [ n ]= T - ' v [ n ]                            (7.8)
     Now
                        v [ n + 11 = T q [ n + 11 = T ( ~ q [ n+]b x [ n ] )
                                  = TAq[n]     + T b x [ n ]= T A T - ' v [ n ]+ T b x [ n ]   (7.9~)


     Thus, if we let

                                   A

                                   b=Tb            ;=(q-'              i=d
     then Eqs. ( 7 . 9 ~and
                         ) (7.9b) become
                                        v [ n + 11 = R [ n ] +b x ~ n l
368                                  STATE SPACE ANALYSIS                                [CHAP. 7



     Equations (7.11a) and (7.11b) yield the same output y[n] for a given input x[n] with
     different state equations. In matrix algebra Eq. (7.10a) is known as the similarity transfor-
     mation and matrices A and are called similar matrices (App. A).

C. Multiple-Input Multiple-Output Systems:
         If a discrete-time LTI system has m inputs and p outputs and N state variables, then a
     state space representation of the system can be expressed as
                                     q[n + 11 = Aq[n] + Bx[n]
                                         y[nI = Cq[n] + Dx[n]
     where




     and
                                                                                     -



             A=

                                                                                     -NXrn




7.4     STATE SPACE REPRESENTATION OF CONTINUOUS-TIME LTI SYSTEMS
A.     Systems Described by Differential Equations:
        Suppose that a single-input single-output continuous-time LTI system is described by
     an Nth-order differential equation



     One possible set of initial conditions is y(O), y(l)(O),. . . , Y(~-')(O),where y(k)(O=
     dky(t)/dt '. Thus, let us define N state variables ql(0,q,( 0,.. . ,qN(O as
                                           q1W = y ( t )
                                           qz(1) = Y ( ' ) ( ~ )
CHAP. 71                       STATE SPACE ANALYSIS




 where q,( t ) = dq,( t ) / d l .
   In matrix form Eqs. (7.15a) and (7.156) can be expressed as




 Now we define an N X 1 matrix (or N-dimensional vector) q(t) which we call the state
 vector:




The derivative of a matrix is obtained by taking the derivative of each element of the
matrix. Thus




Then Eqs. (7.16a) and (7.166) can be rewritten compactly as
370                              STATE SPACE ANALYSIS                                [CHAP. 7


 where




     As in the discrete-time case, Eqs. (7.19~)and (7.19b) are called an N-dimensional state
 space representation (or state equations) of the system, and the N x N matrix A is termed
 the system matrix. In general, state equations of a single-input single-output continuous-
 time LTI system are given by




 As in the discrete-time case, there are infinitely many choices of state variables for any
 given system. The solution of Eqs. (7.20a) and (7.206) for a given initial state are discussed
 in Sec. 7.6.


B. Multiple-Input Multiple-Output Systems:
     If a continuous-time LTI system has m inputs, p outputs, and N state variables, then a
 state space representation of the system can be expressed as
                                    q(t) = Aq(t) + Bx(t)

                                     YO) = Cq(t) + Dx(t)



 where



 and



         A=

                                     :I   NxN




                                     lpxN
CHAP. 71                             STATE SPACE ANALYSIS



7.5   SOLUTIONS OF STATE EQUATIONS FOR DISCRETE-TIME LTI SYSTEMS
A.    Solution in the Time Domain:
       Consider an N-dimensional state representation
                                      q [ n + 1] = Aq[n] + bx[n]                                   (7.22a)
                                          Y [n] = cq[n] + &[n]                                     (7.226)
  where A, b, c, and d are N x N, N x 1, 1 x N, and 1 X 1 matrices, respectively. One
  method of finding q[n], given the initial state q[O], is to solve Eq. (7.22a) iteratively. Thus,
                        q[l] = Aq[OJ + bx[O]
                        q[2] = Aq[l] + bx[l] = A { ~ q [ 0+
                                                          ] bx[O] ] + bx[l]
                                         +
                              = A ~ ~ [ O ] Abx[O]   + bx[l]
  By continuing this process, we obtain




  If the initial state is q[n,] and x[n] is defined for n 2 no, then, proceeding in a similar
  manner, we obtain



       The matrix An is the n-fold product


                                             n
  and is known as the state-transition matrix of the discrete-time system. Substituting
  Eq. (7.23) into Eq. (7.2231, we obtain
                                         n- I
                    y[n] =cAnq[O] +             CA"-'-~   bx[k] + & [ n ]        n>O                (7.25)
                                         k =O
  The first term cAnq[O]is the zero-input response, and the second and third terms together
  form the zero-state response.

B. Determination of An:
Method 1: Let A be an N X N matrix. The characteristic equation of A is defined to be (App. A)


           where J A I - Al means the determinant of Al - A and I is the identiry matrix (or unit
           matrir) of Nth order. The roots of c(A) = 0, A , ( k = 1,2,. . . , N ) , are known as the
           eigenualues of A. By the Cayley-Hamilton theorem An can be expressed as [App. A, Eq.
           (AS7)I


           When the eigenvalues A , are all distinct, the coefficients b,, b,, . . . ,6,-   , can be found
                                       STATE SPACE ANALYSIS                                   [CHAP. 7


             from the conditions


             For the case of repeated eigenvalues, see Prob. 7.25.
Method 2: The second method of finding An is based on the diagonalization of a matrix A. If
          eigenvalues A, of A are all distinct, then An can be expressed as [App. A, Eq. (A.53)]




             where matrix P is known as the diagonalization matrix and is given by [App. A, Eq.
             (A.3611
                                              p=[x,       x,    a   .   B   x,]                   (7.30)

             and x, ( k = 1,2,. . . , N ) are the eigenvectors of A defined by


Method 3: The third method of finding An is based on the spectral decomposition of a matrix A.
          When all eigenvalues of A are distinct, then A can be expressed as




             where A, ( k = 1,2,. . .,N ) are the distinct eigenvalues of A and E, (k = 1,2, .. .,N ) are
             called constituent matrices which can be evaluated as [App. A, Eq. ( A H ) ]
                                                         N




             Then we have



Method 4: The fourth method of finding An is based on the z-transform.


             which is derived in the following section [Eq. (7.41)l.

C. The z-Transform Solution:
        Taking the unilateral z-transform of Eqs. (7.22a) and (7.226) and using Eq. (4.51), we
  get
CHAP. 71                                STATE SPACE ANALYSIS




     Rearranging Eq. (7.36a), we have
                                      (21 - A)Q(z) = zq(0) + bX(z)                                  (7.37)
     Premultiplying both sides of Eq. (7.37) by ( z I - A)-' yields
                             Q     ) =1      - A ) - ~ Z ~ (+O(21
                                                              ) -A)-'~x(z)                          (7.38)
     Hence, taking the inverse unilateral z-transform of Eq. (7.38), we get
                      q [ n ]= ~ ; ' ( ( Z I- A ) - ' z ) ~ ( o ) + ~ ~ ' ( -(A~) - '1b ~ ( z ) )   (7.39)
     Substituting Eq. (7.39) into Eq. (7.2261, we get
                y[n]=~~;~((z1-~)~'z)~(0)+~~;'((~1-~)~'b~(z))+dr[n] (7.40)

     A comparison of Eq. (7.39) with Eq. (7.23) shows that




D.     System Function H ( z ) :
      In Sec. 4.6 the system function H ( z ) of a discrete-time LTI system is defined by
 H ( z ) = Y(z)/X(z) with zero initial conditions. Thus, setting q[O] = 0 in Eq. (7.38), we have
                                          Q(Z) = (21 - A ) - ' ~ x ( z )
  The substitution of Eq. (7.42) into Eq. (7.36b) yields
                                     Y(z) = [c(z1- A)-'b + d ] x ( z )
  Thus,




E. Stability:
     From Eqs. (7.25) and (7.29) o r (7.34) we see that if the magnitudes of all eigenvalues
 A, of the system matrix A are less than unity, that is,
                                              bkl   <1           all k                              (7.45)
 then the system is said to be asymptotically stable; that is, if, undriven, its state tends to
 zero from any finite initial state q,. It can be shown that if all eigenvalues of A are distinct
 and satisfy the condition (7.45), then the system is also BIB0 stable.
374                                  STATE SPACE ANALYSIS                               [CHAP. 7


7.6 SOLUTIONS OF STATE EQUATIONS FOR CONTINUOUS-TIME LTI SYSTEMS
A.     Laplace Transform Method:
         Consider an N-dimensional state space representation




     where A, b, c, and d are N x N, N X 1, 1 X N, and 1 X 1 matrices, respectively. In the
     following we solve Eqs. ( 7 . 4 6 ~ )and (7.46b) with some initial state q(0) by using the
     unilateral Laplace transform. Taking the unilateral Laplace transform of Eqs. ( 7 . 4 6 ~ and
                                                                                               )
     (7.466) and using Eq. (3.441, we get




     Rearranging Eq. (7.47~1,we have
                                     ( s I - A)Q(s) = q(0) + bX(s)
     Premultiplying both sides of Eq. (7.48) by (sI - A)-' yields
                              Q(S) = ( S I - A ) - ' ~ ( o +
                                                           ) ( S I - A)-'~x(s)             (7.49)
     Substituting Eq. (7.49) into Eq. (7.47b1, we get


     Taking the inverse Laplace transform of Eq. (7.501, we obtain the output y(t). Note that
     c(sI - A)-'q(0) corresponds to the zero-input response and that the second term corre-
     sponds to the zero-state response.

B.     System Function H(s):
         As in the discrete-time case, the system function H(s)of a continuous-time LTI system
     is defined by H(s) = Y(s)/X(s) with zero initial conditions. Thus, setting q(0) = 0 in
     Eq. (7.501, we have


     Thus,
CHAP. 71                        STATE SPACE ANALYSIS


C. Solution in the Time Domain:
     Following



 we define



 where k!= k(k - 1) . . -2.1.If t = 0,then Eq. (7.53)reduces to
                                              e0 = I                               (7.54)
 where 0 is an N x N zero matrix whose entries are all zeros. As in ea('-')   = ea'e-a' =
 e - a r at
        e , we can show that
                                eA(t-r) =e A ~ e - A r = e - A r e A ~
                                                                                  (7.55)
 Setting T = t in Eq. (7.55),we have
                                 eAte-Ar   = e-AteAt = e O = I                    (7.56)
 Thus,


 which indicates that e-A' is the inverse of eA'.
   The differentiation of Eq. (7.53)with respect to t yields




 which implies
                                     d
                                    -eAt     = AeA' = e A t ~
                                    dt
 Now using the relationship [App. A, Eq. (A.70)]



 and Eq.(7.581,we have
376                                   STATE SPACE ANALYSIS                                       [CHAP. 7


  Now premultiplying both sides of Eq. (7.46a) by e--A',we obtain

                                 ePA'q(t) = L? - A ' ~ q ( +
                                                           t )e A ' b x ( t )

 or                               e P A ' q ( t-
                                               ) e P A ' A q ( t=
                                                                ) e-A'bx(t)
  From Eq. (7.59)Eq. (7.60) can be rewritten as
                                        d
                                       -[ e - A ' q ( t ) =
                                                          ] CA'bx(t)
                                       dl
  Integrating both sides of Eq. (7.61)from 0 to I , we get




 Hence                            e - * ' q ( t ) = q ( 0 ) + /'e-*'bx(r) d i                       (7.62)
                                                          0

  Premultiplying both sides of Eq. (7.62) by eA' and using Eqs. (7.55)and (7.561, we obtain




  If the initial state is q(t,,)and we have x( t ) for t 2 I , , then




 which is obtained easily by integrating both sides of Eq. (7.61) from t , to t . The matrix
 function eA' is known as the state-transition matrix of the continuous-time system.
 Substituting Eq. (7.63) into Eq. (7.466),we obtain




D. Evaluation of eA':
Method 1: As in the evaluation of An, by the Cayley-Hamilton theorem we have



            When the eigenvalues A , of A are all distinct, the coefficients b,, b , , . . ., b N - , can be
            found from the conditions



            For the case of repeated eigenvalues see Prob. 7.45.
CHAP. 71                             STATE SPACE ANALYSIS                                            377


Method 2: Again, as in the evaluation of An we can also evaluate eA' based on the diagonalization of
          A. If all eigenvalues A, of A are distinct, we have


                                       eA' = P



            where P is given by Eq. (7.30).
Method 3: We could also evaluate eA' using the spectral decomposition of A, that is, find constituent
          matrices E, (k = 1,2,. . ., N ) for which
                                          A=A,El      + A2E2+ . . . +ANEN                         ( 7.69)
            where A, ( k = 1,2,. . ., N ) are the distinct eigenvalues of A. Then, when eigenvalues A, of
            A are all distinct, we have
                                       e A t= e A ~ ' E+l e A ~ +
                                                                ' ~. ., . +eAN'E,                 (7.70)

Method 4: Using the Laplace transform, we can calculate eA'. Comparing Eqs. (7.63)and (7.49),we
          see that




E. Stability:
      From Eqs. (7.63) and (7.68) or (7.70), we see that if all eigenvalues A, of the system
   matrix A have negative real parts, that is,
                                        Re{A,) < 0              all k                            (7.72)
  then the system is said to be asymptotically stable. As in the discrete-time case, if all
  eigenvalues of A are distinct and satisfy the condition (7.721, then the system is also B I B 0
  stable.




                                       Solved Problems

STATE SPACE REPRESENTATION

7.1.   Consider the discrete-time LTI system shown in Fig. 7-1. Find the state space
       representation of the system by choosing the outputs of unit-delay elements 1 and 2 as
       state variables q,[n] and q2[n], respectively.
          From Fig. 7-1 we have
                                    4 1 b + 11 = 4 2 M
                                    42[n + 11 = 2 q , [ n l + 3 q 2 b I + x b I
                                         y b I = 2q,[nl+ 3 q h I + x b I
                                     STATE SPACE ANALYSIS                                   [CHAP. 7




                                                  Fig. 7-1


       In matrix form




       or


       where




7.2.   Redo Prob. 7.1 by choosing the outputs of unit-delay elements 2 and 1 as state
       variables u,[n] and u,[n], respectively, and verify the relationships in Eqs. ( 7 . 1 0 ~and
                                                                                                )
       (7. lob).
            We redraw Fig. 7-1 with the new state variables as shown in Fig. 7-2. From Fig. 7-2 we have
                                     u,[n + 11 = 3 u l [ n ] + 2 u , [ n ] + x [ n ]
                                     ~ l ~+[ 11
                                              n =c,[n]

                                         y [ n ] = 3 u l [ n ] + 2 u 2 [ n ]+ x [ n ]




                                                  Fig. 7-2
CHAP. 71                          STATE SPACE ANALYSIS


     In matrix form




     or


     where




     Note that u,[n] = q,[n] and u,[n] = q,[n]. Thus, we have



     Now using the results from Prob. 7.1, we have




     which are the relationships in Eqs. (7.10a) and (7.10b).

73. Consider the continuous-time LTI system shown in Fig. 7-3. Find a state space
    representation of the system.




                                            Fig. 7-3
                              STATE SPACE ANALYSIS                                   [CHAP. 7




In matrix form




Consider the mechanical system shown in Fig. 7-4. It consists of a block with mass m
connected to a wall by a spring. Let k , be the spring constant and k , be the viscous
friction coefficient. Let the output y ( f ) be the displacement of the block and the input
x(f) be the applied force. Find a state space representation of the system.
    By Newton's law we have



The potential energy and kinetic energy of a mass are stored in its position and velocity. Thus,
we select the state variables q , ( t )and q 2 ( t )as



Then we have




                                      y4
                                       y(0

                              Fig. 7-4 Mechanical system.
CHAP. 71                                     STATE SPACE ANALYSIS


       In matrix form




7.5.   Consider the RLC circuit shown in Fig. 7-5. Let the output y ( t ) be the loop current.
       Find a state space representation of the circuit.
             We choose the state variables q , ( t ) = i,(t) and q 2 ( l )= u,(t). Then by Kirchhoffs law we
       get
                                                L 4 , ( t ) + R s , ( t ) + q2(1) = x ( t )
                                                           cq,(t) = d l )
                                                Y ( t )= 4 1 ( t )
       Rearranging and writing in matrix form, we get




                                                 Fig. 7-5 RLC circuit.



7.6.   Find a state space representation of the circuit shown in Fig. 7-6, assuming that the
       outputs are the currents flowing in R , and R , .
           We choose the state variables q , ( t )= i,(t) and q 2 ( t )= r;(t). There are two voltage sources
       and let x , ( t ) = u , ( t ) and x J t ) = u2(t).Let y , ( t ) = i , ( t ) and y , ( t ) = i , ( t ) . Applying krchhoffs
       law to each loop, we obtain
                                       STATE SPACE ANALYSIS                              [CHAP. 7




                                                   Fig. 7-6


       Rearranging and writing in matrix form, we get




       where



STATE EQUATIONS OF DISCRETE-TIME LTI =STEMS DESCRIBED
BY DIFFERENCE EQUATIONS

7.7.   Find state equations of a discrete-time system described by

                                     y [ n ] - f y [ n - 11   + $ y [ n - 21 = x [ n ]
          Choose the state variables q , [ n ] and q 2 [ n ]as
                                                   41[nl = y [ n - 21
                                                  4 J n I = y [ n - 11
       Then from EqsJ7.79) and (7.80) we have
                                     4 d n + 11 = q , [ n I
                                     42[n + 11 = - $ q l [ n ] + $ ? 2 [ n ]+ x [ n ]
                                           Y [ ~=I - $ s J n I + % 2 [ n I +-+I
       In matrix form
CHAP. 71                               STATE SPACE ANALYSIS


7.8.   Find state equations of a discrete-time system described by


           Because of the existence of the term $x[n - 11 on the right-hand side of Eq. (7.82), the
       selection of y [ n - 21 and y [ n - 11 as state variables will not yield the desired state equations of
       the system. Thus, in order to find suitable state variables we construct a simulation diagram of
       Eq. (7.82) using unit-delay elements, amplifiers, and adders. Taking the z-transforms of both
       sides of Eq. (7.82) and rearranging, we obtain


       from which (noting that z - & corresponds to k unit time delays) the simulation diagram in
       Fig. 7-7 can be drawn. Choosing the outputs of unit-delay elements as state variables as shown
       in Fig. 7-7, we get
                                         Y [ ~ =I s , [ n l + x [ n l
                                   4 J n + 11 = q , [ n I + : y [ n ] + $+I
                                                = f s , [ n l + 4 2 [ n l + $[nI

                                   q 2 [ n+ 11 = - i y [ n ] = - i q l [ n ] - i x [ n ]
       In matrix form




                                                   Fig. 7-7



7.9.   Find state equations of a discrete-time LTI system with system function
                                 STATE SPACE ANALYSIS                                                 [CHAP. 7


    From the definition of the system function [Eq. (4.4111




we have

                     ( 1 + a , z - ' + ~ , Z - ~ ) Y ( Z =) ( 6 , + b , z - I + b , ~ - ~ ) ~ ( z )

Rearranging the above equation, we get

          Y ( z )= - a , z - ' Y ( z ) - ~ , z - ~ Y ( +
                                                       z b) o X ( z ) + b , z - I ~ ( z+) b , ~ - ~ ~ ( z )

from which the simulation diagram in Fig. 7-8 can be drawn. Choosing the outputs of unit-delay
elements as state variables as shown in Fig. 7-8, we get

                              Y ~ = 9I , [ n l + b , x [ n l
                        q , [ n+ 1 1 = -a,y[nI + q 2 b I + b , x [ n l




In matrix form




Note that in the simulation diagram in Fig. 7-8 the number of unit-delay elements is 2 (the
order of the system) and is the minimum number required. Thus, Fig. 7-8 is known as the
canonical simulation of the first form and Eq. (7.85) is known as the canonical state representa-
tion of the first form.




                      Fig. 7-8 canonical simulation of the first form.
CHAP. 71                               STATE SPACE ANALYSIS


7.10. Redo Prob. 7.9 by expressing H ( z ) as

                                                H ( z =H,(z)H,(z )




           Let




      Then we have
                                 W ( z ) + a , z - ' W ( z ) + ~ ~ z - ~ W= X
                                                                            ( z( z) )

                                Y ( z ) = b , W ( z ) + b , z - ' ~ ( z +) b , z - ' ~ ( z )

      Rearranging Eq. (7.881, we get

                                W ( z ) = - a , z - ' W ( z ) - a , ~ - ~ ~+ (~ z( ) z )

      From Eqs. (7.89) and (7.90) the simulation diagram in Fig. 7-9 can be drawn. Choosing the
      outputs of unit-delay elements as state variables as shown in Fig. 7-9, we have

                      u l [ n+ l ] = I I ~ [ ~ ]

                      u , [ n + 11 = - a , ~ ! , [ n-] a , u , [ n ] + x [ n ]

                            Y [ ~ =I b,u,[nI + b,u,[nI + b,u,[n + 1 1
                                   = ( b 2 - b o a 2 ) u , [ n l + ( 6 1- b , a , ) c 2 t n I   +b&l




                       Fig. 7-9 Canonical simulation of the second form.
386                                      STATE SPACE ANALYSIS                                        [CHAP. 7


      In matrix form




      The simulation in Fig. 7-9 is known as the canonical simulation of the second form, and
      Eq. (7.91) is known as the canonical state representation of the second form.

7.11. Consider a discrete-time LTI system with system function

                                                 H(z)=
                                                            2 z 2 - 3z + 1
      Find a state representation of the system.
            Rewriting H( z ) as



      Comparing Eq. (7.93)with Eq. (7.84) in Prob. 7.9, we see that
                          a1 = - 2               = 12
                                     2       2      bo = 0        b, = f                    b2 = 0
      Substituting these values into Eq. (7.85) in Prob. 7.9, we get




7.12. Consider a discrete-time LTI system with system function
                                                        Z                      Z
                                  H ( z )=                       -                                     (7.95)
                                             2 z 2 - 32 + 1          2 ( z - l ) ( z - $)
      Find a state representation of the system such that its system matrix A is diagonal.
            First we expand H ( z ) in partial fractions as




      where


      Let

      Then                                 (1 - p k z - ' ) Y k ( z ) = a k X ( z )
      or                                  Y k ( z )= p k z - I Y k ( z )+ a k X ( z )
      from which the simulation diagram in Fig. 7-10 can be drawn. Thus, H( z ) = HI(z ) + H2(z ) can
CHAP. 71                           STATE SPACE ANALYSIS




                                            Fig. 7-10




                                            Fig. 7-11


      be simulated by the diagram in Fig. 7-11 obtained by parallel connection of two systems.
      Choosing the outputs of unit-delay elements as state variables as shown in Fig. 7-11, we have




      In matrix form




      Note that the system matrix A is a diagonal matrix whose diagonal elements consist of the poles
      of M z ) .

7.13. Sketch a block diagram of a discrete-time system with the state representation
388                                  STATE SPACE ANALYSIS                        [CHAP. 7


          We rewrite Eq. (7.98) as
                                     4 d n + 11 = q z b l
                                 q2[n + 11 = & l [ n ] + : q , [ n ] + x [ n ]
                                          Y ~ = 3I q , [ n l - 2 q 2 b I
      from which we can draw the block diagram in Fig. 7-12.




                                                 Fig. 7-12




STATE EQUATIONS OF CONTINUOUS-TIME LTI SYSTEMS DESCRIBED
BY DIFFERENTIAL EQUATIONS

7.14. Find state equations of a continuous-time LTI system described by
                                        y(t)   +3 j ( t )+2y(t)=x(t)              (7.100)
         Choose the state variables as
                                                     sdt)=y(t)
                                                    92(1) = ~ ( t )
      Then from Eqs. (7.100) and (7,101)we have
                                      4 1 ( ~= )q 2 ( l )
                                      42(t) = - 2 q l ( f ) -392(1) + x ( t )
                                       Y ( t )= 4 d t )
      In matrix form
CHAP. 71                               STATE SPACE ANALYSIS


7.15. Find state equations of a continuous-time LTI system described by
                                    y(t)   + 3y(t) + 2 y ( t )= 4x(t) + x ( t )                       (7.103)
           Because of the existence of the term 4 1 ( t ) on the right-hand side of Eq. (7.103), the
      selection of y ( t ) and y ( t ) as state variables will not yield the desired state equations of the
      system. Thus, in order to find suitable state variables we construct a simulation diagram of
      Eq. (7.103) using integrators, amplifiers, and adders. Taking the Laplace transforms of both
      sides of Eq. (7.103),we obtain
                                 s 2 ~ ( s+)3 s Y ( s ) + 2 Y ( s ) = 4 s X ( s ) + X ( s )
      Dividing both sides of the above expression by s 2 and rearranging, we get
                          Y ( s ) = - 3 Y 1 Y ( s ) - 2 s C 2 ~ ( s+) 4 s - ' ~ ( s+) s - ~ x ( s )
      from which (noting that    corresponds to integration of k times) the simulation diagram in
      Fig. 7-13 can be drawn. Choosing the outputs of integrators as state variables as shown in




      In matrix form




                                                 Fig. 7-13




7.16. Find state equations of a continuous-time LTI system with system function
                               STATE SPACE ANALYSIS                                         [CHAP. 7


    From the definition of the system function [Eq. (3.37)]



we have
                 ( s 3+ a l s 2+ a2s + a 3 ) Y ( s )= (bos3+ b l s Z+ b2s + b 3 ) x ( s )
Dividing both sides of the above expression by s3 and rearranging, we get



from which (noting that s - k corresponds to integration of k times) the simulation diagram in
Fig. 7-14 can be drawn. Choosing the outputs of integrators as state variables as shown in
Fig. 7-14, we get




As in the discrete-time case, the simulation of H(s) shown in Fig. 7-14 is known as the
canonical simulation of the first form, and Eq. (7.106) is known as the canonical state
representation of the first form.




                   Fig. 7-14 Canonical simulation of the first form.
CHAP. 71                             STATE SPACE ANALYSIS


7.17. Redo Prob. 7.16 by expressing H ( s ) as
                                               H(s)=H,(s)H*(s)
                                                                  1
      where
                                                                  +
                                       H 1 ( s )= s 3 + a , s 2 a 2 s + a ,


           Let




      Then we have




      Rearranging the above equations, we get
                         s 3 W ( s ) = - a 1 s 2 w ( s ) - a 2 s W ( s )- a 3 W ( s ) + X ( s )

                            Y ( s ) = b,s3W(s) + b l s 2 ~ ( s+)b , s W ( s ) + b , W ( s )
      from which, noting the relation shown in Fig. 7-15, the simulation diagram in Fig. 7-16 can be




                        Fig. 7-16 Canonical simulation of the second form.
392                                       STATE SPACE ANALYSIS                            [CHAP. 7


      drawn. Choosing the outputs of integrators as state variables as shown in Fig. 7-16, we have

                                  Cl(t) =u,(t)




      In matrix form




      As in the discrete-time case, the simulation of H ( s ) shown in Fig. 7-16 is known as the
      canonical simulation of the second form, and Eq. (7.109) is known as the canonical state
      representation of the second form.

7.18. Consider a continuous-time LTI system with system function




      Find a state representation of the system.
          Rewrite H ( s ) as




      Comparing Eq. (7.111) with Eq. (7.105) in Prob. 7.16, we see that
              a, = 8           a , = 17       a , = 10       b , = b , =O   b, = 3
      Substituting these values into Eq. (7.106) in F'rob. 7.16, we get




                                     y(t) = [1     0     0


7.19. Consider a continuous-time LTI system with system function



      Find a state representation of the system such that its system matrix A is diagonal.
CHAP. 71                                STATE SPACE ANALYSIS



           First we expand H ( s ) in partial fractions as




                                                                     -I                        2
                                    1                                3
                                                                                               -
                                                                                               3
     where             H,(s) = -                 H Z ( s )= - -                    H 3 ( s )= - -
                               s+l                            s+2                               s+5

                                                           ffk yk(~)
     Let                                     H k ( s ) = -= -
                                                         s -Pk X(s)

     Then                                    ( S -pk)Yk(s) = % X ( S )


     or                                 Y k ( s )= P ~ s - ~ Y ~+( ask)s - ' X ( s )

     from which the simulation diagram in Fig. 7-17 can be drawn. Thus, H( S ) = H J s ) + H 2 ( s )+
     H , ( s ) can be simulated by the diagram in Fig. 7-18 obtained by parallel connection of three
     systems. Choosing the outputs of integrators as state variables as shown in Fig. 7-18, we get

                                          441) = -s,(t) + x ( t )

                                          & ( t ) = - 2 q ~ ( t )- ; x ( t )

                                          q3(t) = -5q3(t) - : x ( t )

                                           ~ ( t= )q , ( t ) + q z ( t ) + q , ( t )
     In matrix form




    Note that the system matrix A is a diagonal matrix whose diagonal elements consist of the poles
    of H ( s ) .




                                                  Fig. 7-17
                                   STATE SPACE ANALYSIS                                   [CHAP. 7




                                            Fig. 7-18


SOLUTIONS OF STATE EQUATIONS FOR DISCRETE-TIME LTI SYSTEMS

7.20. Find An for




     by the Cayley-Hamilton theorem method.
         First, we find the characteristic polynomial c(A) of A.




                                       =    - ?A+        = (A - L)(A - L)
                                               4     8               2       4


     Thus, the eigenvalues of A are A , = i and A, =     a. Hence, by Eqs. (7.27) and (7.28) we have
                                  An = b,I + b,A =

      and b, and b, are the solutions of
                                                     i   -b
                                                           bo
                                                                     b,, + 36,
                                                                         b1      I
                                            bo + b,(;) =      (4)"
                                            bo + b,(+)= ($)"
CHAP. 71                               STATE SPACE ANALYSIS


     from which we get

                                bo =   - (;ln + 2(;ln       b , = 4($   - 4($)"
     Hence,




7.21. Repeat Prob. 7.20 using the diagonalization method.
           Let x be an eigenvector of A associated with A . Then

                                                 [ A l - A]x = 0

                    ;
      For A=Al = we have




      The solutions of this system are given by x , = 2x2. Thus, the eigenvectors associated with A ,
      are those vectors of the form




      For A = A 2 = $ we have




      The solutions of this system are given by x, = 4x2. Thus, the eigenvectors associated with A,
      are those vectors of the form

                                                               8+0

      Let a = p = 1 in the above expressions and let




      Then
396                                  STATE SPACE ANALYSIS                  (CHAP. 7


      and by Eq. (7.29) we obtain




7.22. Repeat Prob. 7.20 using the spectral decomposition method.
          Since all eigenvalues of A are distinct, by Eq. (7.33) we have




      Then, by Eq. (7.34) we obtain




7.23. Repeat Prob. 7.20 using the z-transform method.
          First, we must find ( z l - A)-'.
CHAP. 71                                STATE SPACE ANALYSIS


      Then by Eq. (7.35) we obtain

                                 = ~ ; , { ( z I- A)-'z)




          From the above results we note that when the eigenvalues of A are all distinct, the spectral
      decomposition method is computationally the most efficient method of evaluating An.


7.24. Find An for




           The characteristic polynomial c(A) of A is




                                                        4
                                                        5A +   + (A - l)(A $1
                                                                =        -

     Thus, the eigenvalues of A are A , = 1 and A, = 4, and by Eq. (7.33) we have




                                                                                       3
                             1                      1                                  2
                  E2= -(                A      -    (      A        -
                        A2   -4                    5 -1                                2


     Thus, by Eq. (7.34) we obtain
398                                  STATE SPACE ANALYSIS


7.25. Find An for



            The characteristic polynomial c(A) of A is



      Thus, the eigenvalues of A are A, = A, = 2. We use the Cayley-Hamilton theorem to evaluate
      An. By Eq. (7.27) we have




      where b, and b, are determined by setting A = 2 in the following equations [App. A,
      Eqs. (A.59) and (A.60)I:
                                              b, +b,A =An
                                                    b, = n ~ " - '
      Thus,
                                              b, + 2b, = 2"
                                                    b, =n2"-'
      from which we get
                                      b,= ( 1 -n)2"           b, = n2"-'

      and


7.26. Consider the matrix A in Prob. 7.25. Let A be decomposed as




      where                       D=   [i i]          and      N=    [:i]
      (a) Show that N2= 0.
      (b) Show that D and N commute, that is, DN = ND.
      ( c ) Using the results from parts ( a ) and ( b ) , find An.
      (a)    By simple multiplication we see that



      (b) Since the diagonal matrix D can be expressed as 21, we have
                                       DN = 21N = 2N = 2NI = N(2I) = ND
              that is, D and N commute.
CHAP. 71                          STATE SPACE ANALYSIS


     (c) Using the binomial expansion and the result from part (b), we can write



           Since N*= 0, then Nk = 0 for k 2 2, and we have


           Thus [see App. A, Eq. (A.431,




          which is the same result obtained in Prob..7.25.
     Note that a square matrix N is called nilpotent of index r if Nr-'# 0 and Nr= 0.

7.27. The minimal polynomial m(A) of A is the polynomial of lowest order having 1 as its
      leading coefficient such that m(A) = 0. Consider the matrix
                                                   0 0



     ( a ) Find the minimal polynomial m(A) of A.
     ( b ) Using the result from part ( a ) , find An.
     (a) The characteristic polynomial c(A) of A is




           Thus, the eigenvalues of A are A , = - 3 and A, = A, = 2. Consider


           Now




           Thus, the minimal polynomial of A is


     (b)   From the result from part (a) we see that An can be expressed as a linear combination of
           I and A only, even though the order of A is 3. Thus, similar to the result from the
                                  STATE SPACE ANALYSIS                                    [CHAP. 7


           Cayley-Hamilton theorem, we have




           where 6, and 6 , are determined by setting A = - 3 and A = 2 in the equation
                                                  b0+b,A =An
           Thus,

                                                b,- 36, = ( - 3 ) "
                                                b,+ 26, = 2"
           from which we get

                            b O = $(-3)" + $(2)"            6 , = - f ( - 3 ) " + f(2)"


           and




7.28. Using the spectral decomposition method, evaluate An for matrix A in Prob. 7.27.
         Since the minimal polynomial of A is


     which contains only simple factors, we can apply the spectral decomposition method to
     evaluate A". Thus, by Eq. (7.33) we have
CHAP. 71                               STATE SPACE ANALYSIS


      Thus, by Eq. (7.34) we get




     which is the same result obtained in Prob. 7.27(6).

7.29. Consider the discrete-time system in Prob. 7.7. Assume that the system is initially
      relaxed.
     (a) Using the state space representation, find the unit step response of the system.
     ( b ) Find the system function H(z).
     (a)   From the result from Prob. 7.7 we have
                                            q [ n + 11 = A q [ n ] + b x [ n ]
                                                  Y [ ~ =I c q [ n l + d u b 1


           Setting q[O] = 0 and x [ n ] = u [ n ] in Eq. ( 7 . 2 9 , the unit step response s [ n ] is given by




           Now, from Prob. 7.20 we have




                                                       n-l-k                         n- l -k
                                                                    1    4
           and    c ~ n - ' - k=b [




                                  +(f)
                                          n-l-k

                                                   [-s       [          -,][,]
                                                                        -4       0

                                       n- l-k                                n-k           n -k
402                                  STATE SPACE ANALYSIS                                    [CHAP. 7


      Thus,




           which is the same result obtained in Prob. 4.32(c).
      (6) By Eq. (7.44) the system function H ( z ) is given by



                                           [ z112]( )                              [ -i :]
                                                           -I                         3
                                                                         1         2-Ti
              Now           ( IA      )=                        =
                                            8                                  (
      Thus,




              which is the same result obtained in Prob. 4.32(a).

7.30. Consider the discrete-time LTI system described by
                                        q[n     + 11 = A q [ n ] + b x [ n ]
                                            Y [ n ] = c q [ n ]+ h [ n ]

      (a)     Show that the unit impulse response h [ n ]of the system is given by




      (6) Using Eq. (7.] I T ) , find the unit impulse response hlnl of the system in Prob.
          7.29.
      (a> By setting q[O] = 0, x[k] = 6[k], and x[n] = 6[n] in Eq. (7.25), we obtain
CHAP. 71                                   STATE SPACE ANALYSIS                                   403


             Note that the sum in Eq. (7.118) has no terms for n = 0 and that the first term is cA"-'b
             for n > 0. The second term on the right-hand side of Eq. (7.118) is equal to d for n = 0
             and zero otherwise. Thus, we conclude that




      (6) From the result from Prob. 7.29 we have




             and                           &-I,,     = ( + ) " - ' - '(')"-I
                                                                     4 4                 n2l
             Thus, by Eq. (7.117) h [ n ] is




             which is the same result obtained in Prob. 4.32(b).

7.31. Use the state space method to solve the difference equation [Prob. 4.38(6)]
                                       3 y [ n ] - 4 y [ n - 11 + y [ n - 21 = x [ n ]         (7.119)
      with x [ n ] = ( ; ) " u [ n ] and y [ - 11 = 1 , y [ - 2 ] = 2 .
           Rewriting Eq. (7.119), we have
                                        y [ n ] - $ y [ n - 1 1 + + y [ n - 21 = i x [ n ]
      Let q , [ n ]= y[n - 21 and q,[n] = y [ n - 11. Then
                                       d n + 1 1 =+I
                                       s z [ n + 11 = - f q l [ n ]+ ; q 2 [ n ] + i x [ n ]
                                             ~ [ n l =- f q l [ n l + ; q 2 [ n ] + + [ n l
     In matrix form




     and

     Then, by Eq. (7.25)
404                                                STATE SPACE ANALYSIS                                        [CHAP. 7



      Now from the result from Prob. 7.24 we have




      and                 c A n q [ 0 ] =[ - 4             $1
                                         =f +          '(9)"
                                                       6   3


                        ,.An-   I -k b =   [-)             ;I


      Thus,
                                                   "                     ]   ,       n+l-k
                                                                                                     1   I n
                    I
                                1
                                +
                                     1     1
                                               (       [
                                                           "-1
                                                                    (            j           ](i)+&)



      which is the same result obtained in Prob. 4.38(b).

732. Consider the discrete-time LTI system shown in Fig. 7-19.
      (a) Is the system asymptotically stable?
      ( b ) Find the system function H ( z ) .
      (c) Is the system BIB0 stable?
      (a)     From Fig. 7-19 and choosing the state variables q , [ n ] and q , [ n ] as shown, we obtain
                                                           9 , [ n + 1 1 = tclz[n1 + x [ n l
                                                           92[n + 11 = - $ ? l [ n ] + 2 9 2 [ n ]
                                                                  Y ~ = qI , [ n l - 9 * [ n l
              In matrix form
                                                                q [ n+ 1 ] = Aq[n]+ bx[n]
                                                                    Y [ ~ =I cq[nl
CHAP. 71                            STATE SPACE ANALYSIS




                                              Fig. 7-19



           where




           Thus, the eigenvalues of A are A , = $ and A, = ;. Since IAzl > 1, the system is not
           asymptotically stable.
     (b)   By Eq. ( 7 . 4 4 ) the system function H ( z ) is given by




     (c)   Note that there is pole-zero cancellation in H ( z ) at z = :. Thus, the only pole of H ( z ) is
            I
              which lies inside the unit circle of the z-plane. Hence, the system is BIBO stable.
                Note that even though the system is BIBO stable, it is essentially unstable if it is not
           initially relaxed.


7.33. Consider an Nth-order discrete-time LTI system with the state equation


     The system is said to be controllable if it is possible to find a sequence of N input
     samples x [ n , ] , x [ n , + 11, . . . ,x [ n , f N - 1 ] such that it will drive the system from
     q [ n , ] = q , to q [ n , + N ] = q , and q , and q , are any finite states. Show that the system
                                   STATE SPACE ANALYSIS                                     [CHAP. 7


      is controllable if the controllability matrix defined by
                                     M , = [b A b      -.- ~ ~ - ' b ]
      has rank N.
         We assume that no = 0 and q[O] = 0. Then, by Eq. (7.23) we have




     which can be rewritten as




     Thus, if q[N] is to be an arbitrary N-dimensional vector and also to have a nonzero input
     sequence, as required for controllability, the coefficient matrix in Eq. (7.122) must be nonsingu-
     lar, that is, the matrix


      must have rank N.

734. Consider a n Nth-order discrete-time LTI system with state space representation




      The system is said to be obseruable if, starting at an arbitrary time index nu, it is
      possible to determine the state q[n,] = q , from the output sequence y[n,], y[nO+
      I ] , . . ., y[n, + N - 11. Show that the system is observable if the obseruability matrix
      defined by




      has rank N .
          We assume that n, = 0 and x [ n ] = 0. Then, by Eq. (7.25) the output y[n] for n =
      0,1,. ..,N - 1, with x[n] = 0, is given by
CHAP. 71                           STATE SPACE ANALYSIS


      Rewriting Eq. (7.125) as a matrix equation, we get




      Thus, to find a unique solution for q[O], the coefficient matrix of Eq. (7.126) must be
      nonsingular; that is, the matrix



                                              M, =


      must have rank N.


7.35. Consider the system in Prob. 7.7
      ( a ) Is the system controllable?
     ( b ) Is the system observable?
     ( c ) Find the system function H ( z ) .
      ( a ) From the result from Prob. 7.7 we have




           Now

           and by Eq. (7.120) the controllability matrix is




           and IM,l = - 1 # 0. Thus, its rank is 2 and hence the system is controllable.
     ( b ) Similarly,




           and by Eq. (7.123) the observability matrix is




           and (MoI = - & # 0. Thus, its rank is 2 and hence the system is observable.
408                                  STATE SPACE ANALYSIS                           [CHAP. 7


      ( c ) By Eq. (7.44) the system function H ( z ) is given by




7.36. Consider the system in Prob. 7.7. Assume that



      Find x[O] and x[l] such that q[2] = 0.
          From Eq. (7.23)we have




      Thus,




      from which we obtain x[O] = -
                                       =   [:j [m
                                               +
                                                       x[ol


                                           and x[l] = i.
                                                        + :x[ol]


7.37. Consider the system in Prob. 7.7. We observe y[O] = 1 and y[l] = 0 with x[O] = x[l] = 0.
      Find the initial state q[O].
          Using Eq. (7.1251,we have




      Thus,




      Solving for ql[Ol and q,[Ol, we obtain
CHAP. 71                             STATE SPACE ANALYSIS


7.38. Consider the system in Prob. 7.32.
      ( a ) Is the system controllable?
      (6) Is the system observable?
      ( a ) From the result from Prob. 7.32 we have




             Now

            and by Eq. (7.120) the controllability matrix is



            and IM,I = - 4 # 0. Thus, its rank is 2 and hence the system is controllable.
      ( b ) Similarly,




            and by Eq. (7.123) the observability matrix is



            and IMol = 0. Thus, its rank is less than 2 and hence the system is not observable.
                Note from the result from Prob. 7.32(b)that the system function H ( z ) has pole-zero
            cancellation. If H ( z ) has pole-zero cancellation, then the system cannot be both control-
            lable and observable.


SOLUTIONS OF STATE EQUATIONS FOR CONTINUOUS-TIME LTI SYSTEMS

7.39. Find eA' for



     using the Cayley-Hamilton theorem method.
           First, we find the characteristic polynomial c(A) of A.



                                          = A ' + 5A + 6 = ( A + 2)(A + 3)
     Thus, the eigenvalues of A are A , = - 2 and A , = - 3. Hence, by Eqs. (7.66)and (7.67)we have
                                     STATE SPACE ANALYSIS                                      [CHAP. 7


      and b, and b , are the solutions of




      from which we get


      Hence,




7.40. Repeat Prob. 7.39 using the diagonalization method.
          Let x be an eigenvector of A associated with A . Then
                                                 [ A 1 - A]x = 0
      For A = A , = - 2 we have



      The solutions of this system are given by x , = - 2 x 1 . Thus, the eigenvectors associated with A ,
      are those vectors of the form

                                        Xl =a[   -;I         with a # 0

      For A = A 2 = -3 we have



     The solutions of this system are given by x , = - 3 x , . Thus, the eigenvectors associated with A ,
     are those vectors of the form



      Let a = p = 1 in the above expressions and let



      Then
CHAP. 71                             STATE SPACE ANALYSIS



7.41. Repeat Prob. 7.39 using the spectral decomposition method.
           Since all eigenvalues of A are distinct, by Eq. (7.33) we have
                                      1
                             El = -( A - A 2 1 ) = A + 3 1 =
                                   AI -A2                        [-6 -:]
                                                                     3




      Then by Eq. (7.70) we obtain
                                      1
                            E 2 = -(A-AII) = - ( A + 2 1 ) =
                                  A 2 - A1                          [-:-:I


7.42. Repeat Prob. 7.39 using the Laplace transform method.
           First, we must find (SI -A)-'




      Then, by Eq. (7.71) we obtain



     Again we note that when the eigenvalues of A are all distinct, the spectral decomposition
     method is computationally the most efficient method of evaluating eA'.

7.43. Find eA' for



           The characteristic polynomial c(A) of A is



                                           = h 2 + 4 ~ + 3 = ( ~1)(A
                                                                  + +3)
     Thus, the eigenvalues of A are A , = - 1 and A, = -3. Since all eigenvalues of A are distinct, by
412                                   STATE SPACE ANALYSIS                     [CHAP. 7


      Eq. (7.33) we have




      Then, by Eq. (7.70) we obtain




7.44. Given matrix




      ( a ) Show that A is nilpotent of index 3.
      ( 6 ) Using the result from part ( a ) find eA'.
      (a)    By direct multiplication we have




            Thus, A is nilpotent of index 3.
      ( b ) By definition (7.53) and the result from part ( a )




7.45. Find eA' for matrix A in Prob. 7.44 using the Cayley-Hamilton theorem method.
            First, we find the characteristic polynomial c(A) of A.
                                                   A         2    -
                                     c(A)=lAl-A, =I0         A    -il=A3
                                                   0         0
CHAP. 71                            STATE SPACE ANALYSIS


      Thus, A = 0 is the eigenvalues of A with multiplicity 3. By Eq. (7.66) we have
                                          eA' = b,I   + b,A + b2A2
      where b,, b,, and b2 are determined by setting A = 0 in the following equations [App. A, Eqs.
      (A. 5 9 ) and ( A . 60 )I:
                                          b, + b,A + b2h2 = eA'




      Thus,



      Hence,
                                                              t
                                           eA' = I    + tA + -A'2
      which is the same result obtained in Prob. 7.44(b).

7.46. Show that
                                              eA+B     = eAeB

      provided A and B commute, that is, AB = BA.
            By Eq. (7.53)




                                             1       1     1      1
                              =I+A+B+-A~+-AB+-BA+-B~+                        ...
                                            2!       2     2      2!
      and                                             ,
                                 eAeB - e A + B = L (AB - BA) + .

     Thus, if AB = BA, then
                                              e A + B = eAeB



7.47. Consider the matrix
                              STATE SPACE ANALYSIS                                [CHAP. 7


Now we decompose A as
                                          A=A+N

where                 A = [ O2 20 00 ]
                            0 0 2
                                              and            [
                                                        N = O O
                                                                 0

                                                                 0
                                                                     1

                                                                     0    0
                                                                              0
                                                                              1


( a ) Show that the matrix N is nilpotent of index 3.
( b ) Show that A and N commute, that is, AN = N h
( c ) Using the results from parts ( a ) and ( b ) ,find eA'.
(a)   By direct multiplication we have
                                   0      1   0     0   1   0    0        0
                        N ~ = N N =o      o   1  o o        1 = o         o
                                    lo    0   olio 0        01 ( 0        0
                               0 0
                        N3=N2N=0 0
                              [o 0
      Thus, N is nilpotent of index 3.
                                               1
                                               0
                                               oI[o
                                                    0
                                                    0
                                                        1
                                                        0
                                                        0   01
                                                            0   0
                                                            1 = 0
                                                                     [o
                                                                              0
                                                                              0
                                                                              0


( b ) Since the diagonal matrix A can be expressed as 21, we have


      that is, A and N commute.
(c)   Since A and N commute, then, by the result from Prob. 7.46


      Now [see App. A, Eq. (A.4911




      and using similar justification as in Prob. 7.44(b),we have




      Thus,
CHAP. 71                                 STATE SPACE ANALYSIS                                                          415


7.48. Using the state variables method, solve the second-order linear differential equation
                                           y"(t) + 5y'(t)+ 6 y ( t )= x ( t )                                      (7.127)
      with the initial conditions y(0) = 2, yl(0) = 1 , and x ( t ) = e - ' u ( t ) (Prob. 3.38).
          Let the state variables q J t ) and q,(t) be
                                          qdt)=Y(I)                 ~ 2f )
                                                                         ( = ~ ' ( t )

      Then the state space representation of Eq. (7.127) is given by [Eq. (7.19)l
                                                q ( t ) = Aq(t) + b x ( t )
                                                ~ t t =)c q ( t )

      with       A=[-:        I:-           b=[y]               c = [ l O]            q'ol = [ q d2 o( 0) ) ]=   [i]
      Thus, by Eq.(7.65)



      with d = 0. Now, from the result from Prob. 7.39




      and             c ~ q ( 0=) [ I    ~](e-~'[-:       I:-       +e-''[-:       ]:[)I:-

      Thus,




7.49. Consider the network shown in Fig. 7-20. The initial voltages across the capacitors C,
      and C, are f V and 1 V, respectively. Using the state variable method, find the
      voltages across these capacitors for t > 0 . Assume that R , = R , = R, = 1 0 and
      C ,= C 2 =1 F.
            Let the state variables q , ( t ) and q2(t ) be
                                     STATE SPACE ANALYSIS                                      [CHAP. 7




                                               Fig. 7-20

     Applying Kirchhoffs current law at nodes 1 and 2, we get




     Substituting the values of R , , R 2 , R,, C , , and C 2 and rearranging, we obtain
                                          41(t) = - 2 9 1 ( t ) + q 2 ( t )
                                          42(t) = 9 l ( t )-292(t)
     In matrix form
                                                 il(t) =Aq(t)

     with

     Then, by Eq. (7.63) with x ( t ) = 0 and using the result from Prob. 7.43, we get




7.50. Consider the continuous-time LTI system shown in Fig. 7-21.
     (a) Is the system asymptotically stable?
     ( b ) Find the system function H(s).
     ( c ) IS the system B I B 0 stable?
     (a)    From Fig. 7-21 and choosing the state variables q , ( t ) and q 2 ( t )as shown, we obtain
                                           41(t) = 9 2 ( t ) + x ( t )
                                           4 2 ( t ) = 29l(t) +92(t)- x ( t )

                                            ~ ( t =) 9 L t ) - % ( t )
CHAP. 71                           STATE SPACE ANALYSIS




           In matrix form




           where


           Now

           Thus, the eigenvalues of A are A , = - 1 and A t = 2. Since Re{A,) > 0, the system is not
           asymptotically stable.
     ( b ) By Eq. (7.52) the system function H(s) is given by




     (c)   Note that there is pole-zero cancellation in H(s) at s = 2. Thus, the onIy pole of H(s)
           is - 1 which is located in the left-hand side of the s-plane. Hence, the system is B I B 0
           stable.
               Again it is noted that the system is essentially unstable if the system is not initially
           relaxed.

7.51. Consider an Nth-order continuous-time LTI system with state equation


     The system is said to be controllable if it is possible to find an input x ( t ) which will
     drive the system from q(t,) = q , to q(t ,) = q , in a specified finite time and q , and q ,
     are any finite state vectors. Show that the system is controllable if the controllability
     matrix defined by


     has rank N.
                                    STATE SPACE ANALYSIS                                    [CHAP. 7


            We assume that r, = 0 and q[Ol = 0. Then, by Eq. (7.63) we have



      Now, by the Cayley-Hamilton theorem we can express e-A' as



      Substituting Eq. (7.130) into Eq. (7.129) and rearranging, we get




      Let

     Then Eq. (7.131) can be rewritten as




     For any given state q , we can determine from Eq. (7.132) unique Pk's (k = 0,1,. . . , N - I), and
     hence x(t), if the coefficients matrix of Eq. (7.132) is nonsingular, that is, the matrix


      has rank N.

7.52. Consider an Nth-order continuous-time LTI system with state space representation
                                          q ( t ) = Aq(t) + b x ( t )
                                          ~ ( t=) c 4 t )
     T h e system is said to be observable if any initial state q(t,) can be determined by
     examining the system output y ( t ) over some finite period of time from to to t , . Show
     that the system is observable if the observability matrix defined by




      has rank N.
         We prove this by contradiction. Suppose that the rank of M, is less than N. Then there
     exists an.initia1 state q[O] = q, f 0 such that
                                                 Moq, = 0
CHAP. 71                            STATE SPACE ANALYSIS


      Now from Eq. (7.65), for x(t ) = 0 and to = 0,


      However, by the Cayley-Hamilton theorem eA'can be expressed as




      Substituting Eq. (7.136) into Eq.(7.135),we get




      in view of Eq. (7.134).Thus, qo is indistinguishable from the zero state and hence the system is
      not observable. Therefore, if the system is to be observable, then Mo must have rank N.

7.53. Consider the system in Prob. 7.50.
      ( a ) Is the system controllable?
      ( 6 ) Is the system observable?
      (a)   From the result from Prob. 7.50 we have




            Now

            and by Eq. (7.128) the controllability matrix is

                                          M, = [b Ab] =        [-1 -11
            and IM,I = 0. Thus, it has a rank less than 2 and hence the system is not controllable.
      ( b ) Similarly,



            and by Eq. (7.133) the observability matrix is



            and J M J = - 2 # 0. Thus, its rank is 2 and hence the system is observable.
                 Note from the result from Prob. 7.50(b) that the system function H(s) has pole-zero
            cancellation. As in the discrete-time case, if H(s) has pole-zero cancellation, then the
            system cannot be both controllable and observable.

7.54. Consider the system shown in Fig. 7-22.
     (a)   Is the system controllable?
     ( b ) Is the system observable?
     ( c ) Find the system function H(s).
                               STATE SPACE ANALYSIS                                  [CHAP. 7




                                         Fig. 7-22




      In matrix form




      where

      Now

      and by Eq. (7.128) the controllability matrix is

                                        M,= [b Ab] =     [: :]
      and lM,I = 0. Thus, its rank is less than 2 and hence the system is not controllable.
( b ) Similarly,


      and by Eq. (7.133) the observability matrix is



      and lMoI= 0. Thus, its rank is less than 2 and hence the system is not observable.
(c)   By Eq. (7.52) the system function H(s) is given by
                       H ( S )= c ( s ~ - A ) - ' ~




      Note that the system is both uncontrollable and unobservable.
CHAP. 71                             STATE SPACE ANALYSIS



                                 Supplementary Problems
7.55.   Consider the discrete-time LTI system shown in Fig. 7-23. Find the state space representation
        of the system with the state variables q , [ n ] and q , [ n ] as shown.




                                              Fig. 7-23




7.56.   Consider the discrete-time LTI system shown in Fig. 7-24. Find the state space representation
        of the system with the state variables q , [ n ] and q , [ n ] as shown.




                                             Fig. 7-24
422                                    STATE SPACE ANALYSIS                                       [CHAP. 7


      Am.




7.57. Consider the discrete-time LTI system shown in Fig. 7-25.

      ( a ) Find the state space representation of the system with the state variables q , [ n ] and q 2 [ n ]
            as shown.
      ( b ) Find the system function H ( z ) .
      (c)   Find the difference equation relating x [ n ] and y [ n ] .




                                                 Fig. 7-25
CHAP. 71                                   STATE SPACE ANALYSIS


7.58. A discrete-time LTI system is specified by the difference equation

                                y [ n ] + y [ n - 11 - 6 y [ n - 21 = 2 x [ n - 1 1 + x [ n - 21
        Write the two canonical forms of state representation for the system.




7.59. Find A" for




        ( a ) Using the Cayley-Hamilton theorem method.
        ( b ) Using the diagonalization method.

        Am. A" =


7.60. Find A" for
                       - 2(+)" + 3 0 ) "
                         -   (i)"+ (4)"
                                              6 ( f )" - 6 ( f)"
                                              3($)" - 2(;)"        I
        ( a ) Using the spectral decomposition method.
        ( b ) Using the z-transform method.

                [(3)"                 0                       0



7.61.
        Am. An=    0

                     I
        Given a matrix
                         0
                                f(2)"+ ;(-3)"
                                ;(2)" - ; ( - 3 ) "
                                                       f(2)" - + ( - 3 ) "
                                                       j(2)" - j ( - 3 ) "




        ( a ) Find the minimal polynomial m ( A ) of A.
        ( b ) Using the result from part ( a ) , find An.
        Ans.   ( a ) m(A) = ( A - 3XA + 3) = A' - 9
424                                    STATE SPACE ANALYSIS                                    [CHAP. 7


7.62.   Consider the discrete-time LTI system with the following state space representation:




        (a) Find the system function H(z).
        (b) Is the system controllable?
        (c) IS the system observable?
                                  1
                                  1
        Ans.    (a) H ( z ) =
                            ( 2 - 1)*
                (b) The system is controllable.
                (c) The system is not observable.

7.63.   Consider the discrete-time LTI system in Prob. 7.55.
        (a)    Is the system asymptotically stable?
        (b)    Is the system BIBO stable?
        (c)    IS the system controllable?
        (dl    Is the system observable?
        Am. (a)      The system is asymptotically stable.
            (b)      The system is BIBO stable.
            (c)      The system is controllable.
            (dl      The system is not observable.

7.64.   The controllability and observability of an LTI system may be investigated by diagonalizing the
        system matrix A. A system with a state space representation
                                            v [ n + 1 1 = Av[n] + *bx[n]
                                                y [ n ]= b [ n ]
        (where A is a diagonal matrix) is controllable if the vector Ib has no zero elements, and it is
        observable if the vector e has no zero elements. Consider the discrete-time LTI system in Prob.
        7.55.
               Let d n ] = Tq[n].Find the matrix T such that the new state space representation will have
               a diagonal system matrix.
               Write the new state space representation of the system.
               Using the result from part ( b ) , investigate the controllability and observability of the
               system.




                (c) The system is controllable but not observable.
CHAP, 71                                   STATE SPACE ANALYSIS                                                      425


7.65.   Consider the network shown in Fig. 7-26. Find a state space representation for the network
        with the state variables q , ( t ) = i,(t), q , ( t ) = o&) and outputs y , ( t ) = i , ( t ) , y , ( t ) = uc(t),
        assuming R , = R , = 1 $2, L = 1 H, and C = 1 F.




                                                      Fig. 7-26




7.66.   Consider the continuous-time LTI system shown in Fig. 7-27.

        ( a ) Find the state space representation of the system with the state variables q , ( t ) and q , ( t )
              as shown.
        ( 6 ) For what values of n will the system be asymptotically stable?
                         -3            1
        Am.    (a) 4(t)=[-n            l]q(t)+[y]x(t)




                                                     Fig. 7-27
426                                   STATE SPACE ANALYSIS                                        [CHAP. 7


7.67. A continuous-time LTI system is described by
                                                           3s2 - 1
                                            H(s)=
                                                 s3 + 3sZ- s - 2
      Write the two canonical forms of state representation for the system.




7.68. Consider the continuous-time LTI system shown in Fig. 7-28.
      ( a ) Find the state space representation of the system with the state variables q , ( t ) and q 2 ( t )
            as shown.
      ( b ) Is the system asymptotically stable?
      ( c ) Find the system function Hts).
      ( d l Is the system BIBO stable?



                  y(t) =[I  llq(t)
                  The system is not asymptotically stable.


                  The system is BIBO stable.




                                               Fig. 7-28



7.69. Find e A' for



      ( a ) Using the Cayley-Hamilton theorem method.
CHAP. 71                                STATE SPACE ANALYSIS


     (b) Using the spectral decomposition method.

     Am, eA' =e-'
                        cos t
                       -sin t
                                 sin t
                                 cos t   I
     Consider the matrix A in Prob. 7.69. Find e-A' and show that eWA'= [eA']-    '.
     Am.    e-At=e
                       sin t    cos t    I
     Find eA' for



     (a) Using the diagonalization method.
     (b) Using the Laplace transform method.



     Consider the network in Prob. 7.65 (Fig. 7.26). Find u,(t) if x(t) = u(t) under an initially
     relaxed condition.
     Am.    v,(t)= $0 +e-'sint -e-'cost),                t>O

     Using the state space method, solve the linear differentia! equation
                                             yV(t)   + 3y1(t) + 2 y ( t ) = 0
     with the initial conditions y(O) = 0, yl(0) = 1.
     Am. y(t) = e-' - e-", t > 0

     As in the discrete-time case, controllability and observability of a continuous-time LTI system
     may be investigated by diagonalizing the system matrix A. A system with state space representa-
     tion



     where A is a diagonal matrix, is controllable if the vector b has no zero elements and is
     observable if the vector C has no zero elements. Consider the continuous-time system in Prob.
     7.50.
    (a) Find a new state space representation of the system by diagonalizing the system matrix A.
    (b) Is the system controllable?
    (c) IS the system observable?

    Am     (a) ir(t)=   [ -A    ;]*(I)       + [;]x(t)
                 y(t) = [2 - llv(t)
           (b) The system is not controllable.
           ( c ) The system is observable.
                                                              Appendix A

                        Review of Matrix Theory
A.l    MATRIX NOTATION AND OPERATIONS
A. Definitions:
  1.   An m X n matrix A is a rectangular array of elements having m rows and n columns
       and is denoted as




     When m = n, A is called a square matrix of order n.
  2. A 1 x n matrix is called an n-dimensional row vector:



       An m x 1 matrix is called an m-dimensional column uector:




  3. A zero matrix 0 is a matrix having all its elements zero.
  4. A diagonal matrix D is a square matrix in which all elements not on the main diagonal
     are zero:




       Sometimes the diagonal matrix D in Eq. ( A . 4 ) is expressed as

                                    D = diag(d, d 2       .   4)
APP. A]                            REVIEW OF MATRIX THEORY                             429


  5. The idenrity (or unit) matrix I is a diagonal matrix with all of its diagonal elements
     equal to 1.




B. Operations:
       Let A = [ a i j l m x nB, = [biilmxn,and C = [C~~I,,,.
    a. Equality of Two Matrices:
                                                A = B = , a .I J. = b .11.

    b. Addition:
                                           C = A + B =s c i j = a i j + bij

    c. Multiplication by a Scalar:
                                              B = a A =s bij = a a i j
          If a = - 1, then B = - A is called the negative of A.

EXAMPLE A.l        Let




Then




Notes:
         1.
         2.
         3.
         4.
         5.
         6.
                                      REVIEW OF MATRIX THEORY                                    [APP. A


    d.    Multiplication:
    Let A = [a,,],.,,     B = [bijInxp, and C = [cijImxp.
                                                                        n
                                           C=AB =Cij=                        aikbkj
                                                                   k=l
The matrix product AB is defined only when the number of columns of A is equal to the number of
rows of B. In this case A and B are said to be conformable.
EXAMPLE A.2         Let




Then
                                            0(1)+(-1)3                      0(2)+(-I)(-1)
                                             1(1) + 2(3)
                                            2(1) + ( -3)3                   2(2) + ( -3)( - 1)
but BA is not defined.

Furthermore, even if both AB and BA are defined, in general
                                                         AB # BA

EXAMPLE A.3         Let

                                A          -;]            B                 -;I
Then                          B=[;         [                  -:I=[-:             A]
                              .A=[:
                                             2       0
                                                              -:I=[-:                 -:]-
A n example of the case where AB = BA follows.
EXAMPLE A.4         Let
                                                 1       0                   2    0
                                       0                 31       ~ = [ o 41
Then                                         AB=BA=[~


Notes:
         1. AO=OA=O
         2. A1 = LA = A
         3. (A + B)C = AC + BC
         4. A ( B + C ) = A B + A C
         5. (AB)C = A(BC) = ABC
         6. a(AB) = (aA)B = A(aB)
APP. A]                         REVIEW O F MATRIX THEORY


It is important to note that AB = 0 does not necessarily imply A = 0 or B = 0.

EXAMPLE A.5      Let




Then



A.2 TRANSPOSE AND INVERSE
A. Transpose:
     Let A be an n x m matrix. The transpose of A, denoted by AT, is an m x n matrix
  formed by interchanging the rows and columns of A.
                                         B=AT+b.,=a..1)   11                          ( A .14)

EXAMPLE A.6




If AT= A, then A is said to be symmetric, and if AT = -A, then A is said to be skew-symmetric.

EXAMPLE A.7      Let




Then A is a symmetric matrix and B is a skew-symmetric matrix.

Note that if a matrix is skew-symmetric, then its diagonal elements are all zero.

Notes:
       1. (AT)T=A
       2. (A + B ) =~ + B~                                                            ( A .1.5)
       3. ( a ~ ) Q~ A= ~
       4. ( A B ) ~ = B ~ A ~

B. Inverses:
       A matrix A is said to be invertible if there exists a matrix B such that
                                         BA=AB=I                                     ( A .16a)
The matrix B is called the inverse of A and is denoted by A-I. Thus,
                                         A - ~ A = M - ~= I                          ( A .l6b)
432                                     REVIEW OF MATRIX THEORY                                  [APP. A


EXAMPLE A.8




Thus,




Notes:
         1. ( A - y = A
         2. ( A - ' ) ~ = ( A ~ ) - '




Note that if A is invertible, then AB = 0 implies that B = 0 since




A.3     LINEAR INDEPENDENCE AND RANK
A.     Linear independence:
         Let A = [ a , a , ... a,], where ai denotes the ith column vector of A. A set of
     column vectors a; ( 1 = 1 , 2 , . . . ,n) is said to be linearly dependent if there exist numbers a i
     (i = 1,2,. . .,n ) not all zero such that


     If Eq. (A.18) holds only for all cui = 0, then the set is said to be linearly independent.

EXAMPLE A.9          Let




Since 2a, + (-3)a,     + a, = 0, a,, a,, and a, are linearly dependent. Let




Then


implies that a ,= a, = a, = 0.Thus, d , , d,, and d, are linearly independent.
                                   REVIEW OF MATRIX THEORY


B. Rank of a Matrix:
        The number of linearly independent column vectors in a matrix A is called the column
     rank of A, and the number of linearly independent row vectors in a matrix A is called the
     row rank of A. It can be shown that
                             Rank of A = column rank of A = row rank of A                  (A.19)

Note:
           If the rank of an N x N matrix A is N , then A is invertible and A-' exists.


A.4        DETERMINANTS
A.        Definitions:
         Let A = [aij] be a square matrix of order N. We associate with A a certain number
     called its determinant, denoted by detA or IAl. Let M,, be the square matrix of order
     ( N - 1) obtained from A by deleting the ith row and jth column. The number A,j defined
     by



     is called the cofactor of a,,. Then det A is obtained by
                                               N
                               detA=IAl=CaikAik                    i = 1 , 2 ,..., N      (A.21~)
                                              k=l
                                               N
     or                        detA = (A1 =   C akjAk,             j = 1 9 2 ?..   .N     ( A.21b)
                                              k=l

  Equation ( A . 2 1 ~ )is known as the Laplace expansion of IAl along the ith row, and Eq.
  (A.21b) the Laplace expansion of IAl along the jth column.

EXAMPLE A.10 For a 1 x 1 matrix,

                                         A = [ a , , ] --, IAl = a , ,

For a 2 x 2 matrix,




For a 3 x 3 matrix,
                                 REVIEW OF MATRIX THEORY                                      [APP. A


        Using Eqs. (A.21~)and (A.231, we obtain




B. Determinant Rank of a Matrix:
      The determinant rank of a matrix A is defined as the order of the largest square
  submatrix M of A such that det M # 0. It can be shown that the rank of A is equal to the
  determinant rank of A.

EXAMPLE A . l l    Let




Note that IAl = 0. One of the largest submatrices whose determinant is not equal to zero is




Hence the rank of the matrix A is 2. (See Example A.9.)

C. Inverse of a Matrix:
        Using determinants, the inverse of an N x N matrix A can be computed as
                                                         1
                                           ~   -   1    ~  - adj A
                                                       det A

                                                   A11      A21
                                                                     ...   ANI
                                                                     ...
  and                      a d j A = [ ~ , , ] ~ =A[I ~N: A:         ...   ]A:

                                                                           ANN
  where A,, is the cofactor of a i j defined in Eq. (A.20) and "adj" stands for the adjugate (or
  adjoint). Formula (A.25) is used mainly for N = 2 and N = 3.

EXAMPLEA.12 Let
APP. A]                           REVIEW OF MATRIX THEORY



Then




               adj A =




Thus,




For a 2 x 2 matrix,



    From Eq. (A.25)we see that if det A = 0, then A-' does not exist. The matrix A is called
singular if det A = 0, and nonsingular if det A # 0. Thus, if a matrix is nonsingular, then it is
invertible and A-' exists.

AS      EIGENVALUES AND EIGENVECTORS
A.     Definitions:
        Let A be an N x N matrix. If
                                                Ax = Ax                                    (A.28)
     for some scalar A and nonzero column vector x, then A is called an eigenvalue (or
     characteristic value) of A and x is called an eigenuector associated with A.
B.     Characteristic Equation:
         Equation (A.28) can be rewritten as
                                            (A1 - A ) x = 0                    (A.29)
     where I is the identity matrix of Nth order. Equation (A.29) will have a nonzero
     eigenvector x only if A1 - A is singular, that is,
                                          IAI-A1 = O                                       (A.30)
 which is called the characteristic equation of A. The polynomial c(A) defined by
                      c ( A )= IAI - Al =A" + c,-,A"-' + - .. +c,A + co                     ( A.31)
 is called the characteristic polynomial of A. Now if A,, A,, .. . , A, are distinct eigenvalues of
 A, then we have
                                                              -
                           c ( A ) = ( A - A , ) ~ ' (-AA ~ ) ~. .*( A -                   (A.32)
 where m ,    + m 2 + - - +mi = N and mi is called the algebraic multiplicity of A,.
436                                REVIEW OF MATRIX THEORY                                  [APP. A


THEOREM A.l:
      Let A, (k = 1,2,. . .,i) be the distinct eigenvalues of A and let x, be the eigenvectors
      associated with the eigenvalues A,. Then the set of eigenvectors x,, x,, . . . ,x, are linearly
      independent.
Proof. The proof is by contradiction. Suppose that x,, x,, .. . , x i are linearly dependent.
   Then there exists a , , a,, . . . ,ai not all zero such that
                                                                             1

                               a 1 x , + a 2 x 2+   a   .    + a i x i = C a k x k= 0        ( A.33)
                                                                            K= l
      Assuming a , # 0, then by Eq. (A.33) we have

                            (A,I - A)(A,I - A)                                               (A.34)

      Now by Eq. (A.28)
                                   (A,I - A)x, = ( A j - A,)x,                     j#k
      and                                      (A,I - A)x, = 0
      Then Eq. (A.34) can be written as
                                a,(A2 - A , ) ( A , -A,)        - - - (Ai - A,)x, = 0        (A.35)
      Since A, (k = 1,2,. . .,i) are distinct, Eq. (A.35) implies that a, = 0, which is a contradic-
      tion. Thus, the set of eigenvectors x,, x,, . . .,xi are linearly independent.


A.6     DIAGONALIZATION AND SIMILARITY TRANSFORMATION
A.     Diagonalization:
         Suppose that all eigenvalues of an N X N matrix A are distinct. Let x1,x2,.. ., x N be
     eigenvectors associated with the eigenvalues A,, A,, . . .,AN. Let
                                          P = [x, x,            -   e   m   x,]              (A.36)
     Then              AP=A[X,       x,             x,]
                           '[AX]     AX2      ' "           AXN]
                           = [A,x,     A2x2                   ANxN]




     where
APP. A]                          REVIEW O F MATRIX THEORY                                  437


 By Theorem A.1, P has N linearly independent column vectors. Thus, P is nonsingular
 and P-' exists, and hence




     We call P the diagonalization matrix or eigenvector matrix, and A the eigenvalue matrix.


Notes:

     1. A sufficient (but not necessary) condition that an N x N matrix A be diagonalizable is
        that A has N distinct eigenvalues.
     2. If A does not have N independent eigenvectors, then A is not diagonalizable.
     3. The diagonalization matrix P is not unique. Reordering the columns of P or multiply-
        ing them by nonzero scalars will produce a new diagonalization matrix.

B. Similarity Transformation:
        Let A and B be two square matrices of the same order. If there exists a nonsingular
     matrix Q such that
                                            B = Q-'AQ                                   (A.40)
     then we say that B is similar to A and Eq. (A.40) is called the similarity transformation.


Notes:
     1.   If B is similar to A, then A is similar to B.
     2.   If A is similar to B and B is similar to C, then A is similar to C.
     3.   If A and B are similar, then A and B have the same eigenvalues.
     4.   An N X N matrix A is similar to a diagonal matrix D if and only if there exist N
          linearly independent eigenvectors of A.


A.7       FUNCTIONS O F A MATRIX
A.     Powers of a Matrix:
          We define powers of an N x N matrix A as
438                              REVIEW OF MATRIX THEORY                                     [APP. A


  It can be easily verified by direct multiplication that if




 then




Notes:
  1. If the eigenvalues of A are A,, A,, . . . , A,, then the eigenvalues of An are A;, A;, . . .,A:.
  2. Each eigenvector of A is still an eigenvector of An.
  3. If P diagonalizes A, that is,




  then it also diagonalizes An, that is,




  since




B. Function of a Matrix:
         Consider a function of A defined by
APP. A]                       REVIEW OF MATRIX THEORY                                     439


 With any such function we can associate a function of an N x N matrix A:

                          f(A) =a,I + a , A +a2A2 + .        =   xm



                                                                 k=O
                                                                       a   ,   ~   ~   (A.48)

  If A is a diagonal matrix D in Eq. (A.421, then using Eq. (A.431, we have




 If P diagonalizes A, that is [Eq. (A.4411,
                                           P-'AP = A
 then we have
                                           A = PAP-'
 and



 Thus, we obtain
                                   f ( ~=
                                        ) P~(A)P-
 Replacing D by A in Eq. (A.491, we get




 where A, are the eigenvalues of A.

C. The Cayley-Hamilton Theorem:
       Let the characteristic polynomial c(A) of an N x N matrix A be given by [Eq. (A.3111
                      c(A) = IAI - AJ= AN + C N - i A N - ] + . . . +c1A   + C,
 The Cayley-Hamilton theorem states that the matrix A satisfies its own characteristic
 equation; that is,
                         c(A) = AN +              +      +c,A + cOI= 0                 (A.54)
440                                REVIEW O F MATRIX THEORY                                       [APP. A


EXAMPLE A.13        Let



Then, its characteristic polynomial is




and




Rewriting Eq. (A.54), we have


Multiplying through by A and then substituting the expression ( A . 5 5 ) for AN on the right and
rearranging, we get


By continuing this process, we can express any positive integral power of A as a linear combination of
I , A , . . . , A ~ - 'Thus,
                       .     f(A) defined by Eq. ( A . 4 8 )can be represented by



In a similar manner, if A is an eigenvalue of A, then f ( A ) can also be expressed as
                                                                       N- l
                            f ( A ) = b , + blA +   . a .          - l C b,Arn
                                                            +b,-,~~=                                ( A.58)
                                                                      m =O

Thus, if all eigenvalues of A are distinct, the coefficients bm ( r n = 0,1,.. . , N - 1 ) can be determined
by the following N equations:


If all eigenvalues of A are not distinct, then Eq. ( A . 5 9 ) will not yield N equations. Assume that an
eigenvalue A , has multiplicity r and all other eigenvalues are distinct. In this case differentiating both
sides of Eq. ( A . 5 8 ) r times with respect to A and setting A = A ; , we obtain r equations corresponding
to A i :




Combining Eqs. ( A . 5 9 ) and (A.601,we can determine all coefficients bm in Eq. ( A . 5 7 ) .

D. Minimal Polynomial of A:
      The minimal (or minimum) polynomial m ( h ) of an N x N matrix A is the polynomial
  of lowest degree having 1 as its leading coefficient such that m ( A ) = 0. Since A satisfies its
  characteristic equation, the degree of m(A) is not greater than N.
APP. A]                            REVIEW O F MATRIX THEORY


EXAMPLE A.14        Let



The characteristic polynomial is



and the minimal polynomial is
                                          m(A) = A - a

since

Notes:
  1. Every eigenvalue of A is a zero of m(A).
  2. If all the eigenvalues of A are distinct, then c(A) = m(A).
  3. C(A)is divisible by m(A).
  4. m(A) may be used in the same way as c(A) for the expression of higher powers of A in
     terms of a limited number of powers of A.
            It can be shown that m(A) can be determined by




         where d(A) is the greatest common divisor (gcd) of all elements of adj(A1 -A).

EXAMPLE A.15       Let




Then
442                              REVIEW O F MATRIX THEORY                             [APP. A


Thus, d(A) = A - 2 and




                                                                          0   0   0
and       m(A) = ( A - I ) ( A - 21) =




E. Spectral Decomposition:
     It can be shown that if the minimal polynomial m(A) of an N x N matrix A has the
  form



  then A can be represented by



 where Ej ( j = 1,2,. ..,i) are called consrituent matrices and have the following properties:




Any matrix B for which B2 = B is called idempotent. Thus, the constituent matrices Ej are
idempotent matrices. The set of eigenvalues of A is called the spectrum of A, and Eq. (A.63)
is called the spectral decomposition of A. Using the properties of Eq. (A.641, we have




The constituent matrices E, can be evaluated as follows. The partial-fraction expansion of




                                   =-+kl      k2 + ...
                                            ------        +-A -kiA ,
                                     A-A,   A-A,
APP. A]                      REVIEW OF MATRIX THEORY


leads to




Then


where


Let e,(A) = kjgj(A). Then the constituent matrices E, can be evaluated as




EXAMPLE A.16 Consider the matrix A in Example A.15:




From Example A.15 we have



Then

and                         e,(A)= - ( A - 2 )       e,(A)=A-1

                                                 6
Then          E,=e,(A)= -(A-21)=
444                            REVIEW O F MATRIX THEORY                              [APP. A



A.8 DIFFERENTIATION AND INTEGRATION OF MATRICES
A. Definitions:
     The derivative of an m x n matrix A(t) is defined to be the m x n matrix, each element
 of which is the derivative of the corresponding element of A; that is,




  Similarly, the integral of an m x n matrix A(t) is defined to be




EXAMPLE A.17      Let




Then




and



B. Differentiation of the Product of Two Matrices:
       If the matrices A(t) and B(t) can be differentiated with respect to t, then
                                                                    Appendix B

      Properties of Linear Time-Invariant Systems
               and Various Transforms
B.l   CONTINUOUS-TIME LTI SYSTEMS
      Unit impulse response: h(t)
                                                  w

      Convolution: y ( t ) = x ( t ) * h(t) =
      Causality: h( t ) = 0, t < 0
      Stability:   / Ih(t)l dt <
                    w


                    - ?D
                                   m




B.2 THE LAPLACE TRANSFORM
The Bilateral (or Two-sided) Laplace Transform
Definition:




Properties of the Bilateral Laplace Transform:
      Linearity: a , x , ( t ) + a,x,(t) -a,X,(s) + a,X,(s), R ' 3 R , n R ,

      Shifting in s: e"llx(t)  -
      Time shifting: x( t - t,) H e-"oX(s), R' = R

                                   1
                                      X(s - so), R' = R + Re(s,)


      Time reversal: x( - t)   -
      Time scaling: x(at) H -X(S), R' = aR
                             la l
                              X( -s), R' = -R
                               Wt)

                                        -
      Differentiation in t : --sX(s), R' 3 R
                             dt
                                       fl(s)
      Differentiation in s: - tx(t     -, R ' = R

      Integration:
                  1-
                     I
                       x(r)dr
                           w
                                   -
                                   1
                                         ds
                                   -X(s), R' > R n {Re(s)> 0)
      Convolution: x,( t ) * x,( t )   t
                                        S
                                        ,   X,(s)X,(s), R' 3 R , n R,
446           PROPERTIES O F LINEAR TIME-INVARIANT SYSTEMS TRANSFORMS                                                 [APP. B




       6(t)   -
Some taplace Transforms Pairs:
                  1 , all s




                                         s+a
       e-"' cos w&t)           H                        , Re(s) > - R e ( a )
                                   (s   +a)2+w i

The Unilateral (or One-sided) Laplace Transform
Definition:


                                   x,(s) = /mx(t)e-stdr                     0 - = lirn ( 0 - E )
                                                  0-                                €40
Some Special Properties:
      Differentiation in the Time Domain:




                  d n x ( t)
                    dt"
                               -   S " X I ( S )- S " - I X ( O - ) - S " - 2 X y 0 - ) - . . . - x ( n - ' ) ( 0 -
APP. B]       PROPERTIES OF LINEAR TIME-INVARIANT SYSTEMS TRANSFORMS               447


    Integration in the Time Domain:




      Initial value theorem: ~ ( 0 ' =
                                     ) lirn sX,(s)
                                                 S-m
      Final value theorem: lim x ( t ) = lim sX,(s)
                                    t-oc            s-0



B.3 THE FOURIER TRANSFORM
DeJinition:




Properties of the Fourier Transform:
                               +                                +
      Linearity: a l x l ( t ) a 2 x 2 ( t )c * a l X , ( o ) a 2 X 2 ( o )
      Time shifting: x ( t - t o )c* e - ~ " ' o ~ ( w )


      Time scaling: x ( a t )      -
      Frequency shifting: e J w ~ ~ ' xc (*tX) ( o - oo)



      Time reversal: x( - t ) c* X ( - o )
      Duality: X ( t ) c* 2lrx( - o )
                               W t )
      Time differentiation: -c*jwX(w)
                                 dt
                                                    dX(4
      Frequency differentiation: ( -jt ) x ( t ) c* -
                                                     do



      Convolution: x , ( t ) * x 2 ( t )- X , ( w ) X 2 ( w )

      Multiplication: x,(t ) x 2 ( t )  -       1
                                            - X , ( o ) * X2(W )
                                             2lr
      Real signal: x ( t ) = x e ( t )+ x o ( t )- X ( o ) = A ( o ) + j B ( o )

                                       -
      Even component: x e ( t ) R e { X ( o ) )=A ( w )
                                                         X( -0) =X * ( o )

      Odd component: x o ( t )c*j I m ( X ( o ) )=j B ( o )
448       PROPERTIES OF LINEAR TIME-INVARIANT SYSTEMS TRANSFORMS   [APP. B



Parseval's Relations:




Common Fourier Transforms Pairs:




                                 sin w a
      p,(O =                 +2a ---
                              ,
                                      wa
       sin at                     Iwl < a
                -pa(w)   =
        lTt
              2
      sgn t o -
                 1w
APP. B]      PROPERTIES OF LINEAR TIME-INVARIANT SYSTEMS TRANSFORMS                            449


B.4 DISCRETE-TIME LTI SYSTEMS
      Unit sample response: h [ n ]
                                                         m

      Convolution: y [ n ] = x [ n ]* h [ n ]=               x [ k ] h [ n- k ]
                                                    k = -m

      Causality: h [ n ]= 0, n < 0
                      m

      Stability:             ( h [ n ] ( d<
                                          t a:
                   n= -m




B.5 THE Z-TRANSFORM
The Bilateral (or Two-sided) z-Transform:
Dejnition:




Properties of the z-Transform:
      Linearity: a l x l [ n ]+ a 2 x 2 [ nt]- , a , X 1 ( z )+ a 2 X 2 ( z ) ,R' 3 R , nR 2


      Multiplication by z:: z:x[n]               - -1,
      Time shifting: x [ n - n o ]-2-"oX(z), R' 3 R n (0 < lzl < w)
                                                         Z
                                                   x(% R' = lzdR
      Multiplication by ejR1tN:e ~ ~ o " ~ [ ~n( ]e - j n l ) z )R', = R
                                                             1
      Time reversal: x[ - n ] t-,X

                                     dX(z )
     Multiplication by n: nx[n]o - z -,          R' = R

     Accumulation:
                       n
                          x[n]
                                   1
                             k = - OC
                                        dz
                                          -
                                         X ( z ) , R' 3 R n {lzl > 1)
                                                 1-2-'




      6[n]   -
Some Common z-Transforms Pairs:
                 1 , all z
450         PROPERTIES O F LINEAR TIME-INVARIANT SYSTEMS TRANSFORMS     [APP. B




       anu[n]  -
       6[n - m] -zPm, all z except 0 if m > 0, or 03 if m < 0
                     1
                  1-az-'
                          =-
                              Z

                            z-a
                            1
                                 , IzI > la1
                                       Z
       -anu[-n - 11-            =-         , Izl < lal
                         1-az-'      z-a




       (COS fl,n)u[n   1   -       z 2 - (cos 0,)z
                               z 2 - (2cos n o ) z + 1
                                                       , lzl > 1

       (sin n,n)u[n]   -              (sin 0 , ) z
                               z 2 - (2cos Ro)z + 1
                                                    , 121 > 1

       ( r ncos R,n)u[n]-             z 2 - ( r cos n o ) z
                                  z 2 - (2r cos n,)z + r 2 '
                                                              Izl > r

                        -
       ( r n sin fl,n)u[n]
                                         ( r sin 0 , ) z
                                  ~~-(2rcos~~)z+r~'
                                                             Izl > r

                  OsnsN-1-                1 -aNz-N
                  otherwise                1 - az-I
                                                    IzI>O 9




The Unilateral (or One-sided) z-Transform:




Some Special Properties:
      Time-Shifting Property:




        Initial value theorem: x[O] = lim X( z)
                                            z-rm

        Final value theorem: lim x[N] = lim (1 - z- ')X( z)
                                   N-m             z- 1
APP. B]       PROPERTIES O F LINEAR TIME-INVARIANT SYSTEMS TRANSFORMS           45 1


B.6 THE DISCRETE-TIME FOURIER TRANSFORM
Definition:



                                                         m

                                          X ( R )=      C x [ n ]eeJf'"
                                                      n = -0c




                            -
Properties of the Discrete-Time Fourier Transform:
      Periodicity: x [ n ] X ( R ) = X ( R + 2rr)
      Linearity: a , x , [ n ]+ a 2 x 2 [ n+
                                           ] + a ,X J R ) + a 2 X 2 ( R )


                             -- -
      Time shifting: x [ n - n o ]++ e - ~ ~ " l l X ( R )
      Frequency shifting: e ~ " ~ " x [ n ]X ( R - R,)
      Conjugation: x * [ n ] X*( - R )
      Time Reversal: x[ - n ] X( - R )
                                                        ifn=km
      Time Scaling: x(,,,[n] =                                       -X(mR)

                                 -
                                                        ifnzkm
                                                     dX(R)
      Frequency differentiation: m [ n ] j------
                                                       dR
      First difference: x [ n ]- x [ n - 11 ++ ( 1 - e - j o ) x ( f l )

      Accumulation:
                             n
                            C x[k]
                          k = -CC
                                       -                         1
                                           rrX(0)S ( R )+ 1 - e -jn x(n)
                                                                 A




      Convolution: x , [ n ]* x 2 [ n ]++ X , ( R ) X , ( R )

                                        -     1
      Multiplication: x , [ n ] x 2 [ n ] - X , ( R ) @ X 2 ( R )
                                          2rr
      Real sequence: x [ n ]= x , [ n ] + x,[n] X ( R ) = A ( R ) + j B ( R )

                                       --
                                                    ++

                                                          X(-R) =X*(R)
        Even component: x,[n]             R e { X ( R ) )= A ( R )
        Odd component: x,[n] j 1 m { X ( R ) )= j B ( R )
Parseval's Relations:
45 2        PROPERTIES O F LINEAR TIME-INVARIANT SYSTEMS TRANSFORMS                   [APP. B



Some Common Fourier Transform Pairs:




       sin Wn                                                0 i IRIS w
                (0<Wcn-1-X(fl)=                              W<ln,5T
         n-n




B.7 DISCRETE FOURIER TRANSFORM
Definition:
                                 x [ n ] =O           outside the range 0 In IN - 1
                                                      x[n]          ~ [ k ]




Properties of the DFT:

       Time shifting: x [ n - no],,           --
       Linearity: a , x , [ n ]+ a 2 x 2 [ n-] a , X , [ k ] + a , X , [ k ]
                                                  w,knux[k]
       Frequency shifting: ~ ; ~ " u x [ n ]X[k- k,],,
APP. B]    PROPERTIES OF LINEAR TIME-INVARIANT SYSTEMS TRANSFORMS                     453


      Conjugation: x * [ n ]HX * [ - k Imod       ,
                        -            ,
      Time reversal: x[ - n],,, w X [ - k I,
      Duality: X [ n ] Nx[-k],,,
                                                           ,
      Circular convolution: x , [ n ]@ x 2 [ n -] X , [ k ] X , [ k ]
                                              1
      Multiplication: x , [ n ] x 2 [ no
                                                    -
                                       ] -X,[k] @X2[k]
                                         N
      Real sequence: x [ n ] = x e [ n ]+ x o [ n ] X [ k ] = A [ k ] + j B [ k ]
                                                       x[-klmo,, =X*[kl



Parseval S Relation:
                                       -
        Even component: x e [ n ]t,R e ( X [ k1) =A [ k ]
        Odd component: x o [ n ] j Im{X [ k ] )=jB[k ]




  Note




B.8 FOURIER SERIES


Complex hkponential Fourier Series:




Trigonometric Fourier Series:
                                        a0
                                ~ ( t=) - +       x ( a kcos kwOt+ bk sin k ~ , t )
                                                   m



                                                  k=l




                                          2
                                                        x ( t ) sin kw,tdt

Harmonic Form Fourier Series:
454       PROPERTIES OF LINEAR TIME-INVARIANT SYSTEMS TRANSFORMS         [APP. B


Relations among Various Fourier Coefiients:




Parseval's Theorem for Fourier Series:
                                                                m
                                     1
                                    - I
                                    To To
                                         /        ) l2 dt =    C Icx12
                                                              k= - m



B.9 DISCRETE FOURIER SERIES




Parseval's Theorem for Discrete Fourier Series:
                                                             Appendix C

                  Review of Complex Numbers
C.l   REPRESENTATION OF COMPLEX NUMBERS
      The complex number z can be expressed in several ways.
 Cartesian or rectangular form:
                                            z=a+jb
 where j =        and a and b are real numbers referred to the real part and the imaginary
 part of z. a and b are often expressed as
                                  a = Re{z)         b = lrn{z)                       (c.2)
 where "Re" denotes the "real part o f ' and "Im" denotes the "imaginary part of."
 Polar form:
                                              z =

 where r > 0 is the magnitude of z and 6 is the angle or phasc~ of z. These quantities are
 often written as
                                    r = IzI         O=LZ                             (C-4)
 Figure C-1 is the graphical representation of z. Using Euler's formula,
                                        = cos6 +jsinO
                                                                                       (C.5)
 or from Fig. C-1 the relationships between the cartesian and polar representations of z are
                              a = r cos 6           b = I- sin 0                     (C.6a)




                                        Fig. C-1
                                       455
456                             REVIEW O F COMPLEX NUMBERS


C.2 ADDITION, MULTIPLICATION, AND DMSION
      If z , = a , + j b , and z, = a , + jb,, then
                                    z, + z2 = ( a , + a , ) + j(b, + b,)

                                z l z 2= ( a l a 2- b,b2) +j(a,b, + b p , )




                                                                              (C. 1 0 )

                                                                              (C. I I )



C.3 THE COMPLEX CONJUGATE
      The complex conjugate of z is denoted by z* and is given by


 Useful relationships:
 1. zz* = r 2



 4.   z - z * =j2Im(z}




C.4 POWERS AND ROOTS OF COMPLEX NUMBERS
      The nth power of the complex number z = reie is
                                   n = neine = r "(cos n8    +j sin n8)       (C. 13)
 from which we have DeMoivre's relation

                                                                              (C.14)
APP. Cl                   REVIEW OF COMPLEX NUMBERS


 The nth root of a complex z is the number w such that
                                      W n = z = reje                             ( C .15)
 Thus, to find the nth root of a complex number z we must solve
                                      Wn   - reje = 0                            ( C .16)
 which is an equation of degree n and hence has n roots. These roots are given by
                           - l/nei[e+2(k - l ) ~ ] / n
                        Wk -                           k = 1,2, ..., n            (C.17)
                                                     Appendix D

              Useful Mathematical Formulas
D.1   SUMMATION FORMULAS




D.2   EULER'S FORMULAS




D.3 TRIGONOMETRIC IDENTITIES


                         sin2B +cos26 = 1
                         sin2B = $ ( I - cos20)
                         cos2 0 =   i(1 + cos20)
                         sin20 = 2sinOcosO
                        cos 26 = cos' 0 - sin2 0 = 1 - 2 cos2 0
                                              +
                    sin(a f P ) = sin a cos p cos a sin p
APP. Dl           USEFUL MATHEMATICAL FORMULAS


                     cos(a  + p) = cos a cos p T cos a cos /3
                      sin a sin P = [cos(a - /3) - cos(a + P)]

                     COS a COS p = 3 [COS((Y- p) + cos(a + P)]

                     sin a cos P = $[sin(a - P) + sin(a + P)]
                                       a+p           a-p
                   sina+sinp=2sin-             COS   -
                                         2            2
                                        a + @ a-/3
                  cosa + c o s p = 2cos -COS -
                                          2     2

                a cos a + b sin a =             (
                                             cos a-tan-'!)   a



D.4 POWER SERIES EXPANSIONS




D.5 EXPONENTIAL AND LOGARITHMIC FUNCTIONS




                                               log, N
                      log, N = log, N log, a = -
                                               log, b
460               USEFUL MATHEMATICAL FORMULAS   [APP. D



D.6 SOME DEFINITE INTEGRALS
Index


A
Absolute bandwidth, 230
Accumulation, 172
Additivity, 18
Adjoint (or adjugate) matrix, 434
Advance, unit, 171
Aliasing, 280
All-pass filter, 332
Amplitude distortion, 225
Analog signals, 2
Analytic signal, 286
Anticausal sequence, 64
Anticausal signals, 59
Aperiodic sequences (see Nonperiodic sequences)
Aperiodic signals (see Nonperiodic signals)
Asymptotically stable systems, 373, 377
Auxiliary conditions
       difference equations, 65
       differential equations, 60
Average power, 5
       normalized, 5

B
Band-limited signal, 231, 278
Bandpass signal, 231
Bandwidth
       absolute, 230
       energy containment, 277
       equivalent, 275
       filter (or system), 230
       signal, 231
Bilateral (or two-sided) Laplace transform, 110
Bilateral (or two-sided) z-transform, 165
Bilinear transformation, 340
Bode plots, 265
Bounded-input / bounded-output (BIBO) stability, 19, 59, 64, 79, 99, 122, 145, 199

C
Canonical simulation
      the first form, 384
      the second form, 386
Canonical State representation
      the first form, 384, 390
      the second form, 386, 392
Causal signal, 59, 64

                                                  461
462                                                                             Index

Causality, 50, 58, 61, 64, 98, 122, 176
Cayley-Hamilton theorem, 371, 376, 439
Characteristic equation, 371
Characteristic function (see Eigenfunction)
Characteristic polynomial, 435
Characteristic values (see Eigenvalues)
Circular convolution, 307
Circular shift, 306
Cofactor, 433
Complex frequency, 218
Complex numbers, 455
Complex signals, 2
Compressor, 48
Connection between
       the Fourier transform (continuous-time) and the Laplace transform, 217
       the Fourier transform (discrete-time) and the z-transform, 293
Constituent matrix, 372, 377, 442
Continuous-time LTI systems, 56
       causality, 122
       described by differential equations, 60, 226
       eigenfunctions, 59
       frequency response, 223
       impulse response, 56
       properties, 58
       response, 56
       stability, 59
       state space representation, 368
       system (or transfer) function, 121
Continuous-time signals, 1
Continuous-time systems, 17
Controllability matrix, 406, 417
Controllable systems, 405, 417
Convolution
       circular, 307
       continuous-time, 57
       discrete-time, 62
       in frequency, 221
       integral, 57
       periodic, 75, 96
       properties, 57, 62
       sum, 62
Convolution property
       discrete Fourier transform (DFT), 307
       Fourier transform (continuous-time), 220, 225
       Fourier transform (discrete-time), 297, 322
       Laplace transform, 119
       z-transform, 172, 187
Convolution theorem
       frequency, 221, 257
       time, 221, 255

D
Decimation-in-frequency, 355
Decimation-in-time, 352
Degenerative circuits, 159
Index                                                           463

Delay, unit, 46
Determinants, 433
       Laplace expansion, 433
Deterministic signals, 3
DFS (see Discrete Fourier series)
DFT (see Discrete Fourier transform)
DFT matrix, 349
Diagonal matrix, 428
Diagonalization matrix, 436
Difference equations, 65
       recursive, 60
Differential equations, 60
       homogeneous solution, 60
       particular solution, 60
Digital signals, 2
Digital simulation of analog signals, 304
Dirac delta function (d-function) (see Unit impulse function)
Dirichlet conditions
       for Fourier series, 213
       for Fourier transforms, 217
Discrete Fourier series (DFS), 288
       properties, 289
Discrete Fourier transform (DFT)
       definition, 305
       inverse, 305
       N-point, 305
       properties, 306
Discrete-time LTI systems
       causality, 64
       described by difference equations, 65
       eigenfunctions, 64
       finite impulse response (FIR), 66
       impulse response, 61
       infinite impulse response (IIR), 66
       response, 61
       stability, 64
       state space representation, 366
       system function, 175
Discrete-time signals, 1
Discrete-time systems, 17
Distortionless transmission, 225
Duality property
       discrete Fourier series, 289
       discrete Fourier transform, 307
       Fourier transform (continuous-time), 220, 247
       Fourier transform (discrete-time), 296
Duration-limited signal, 286

E
Eigenfunctions, 51
      of continuous-time LTI systems, 59
      of discrete-time LTI systems, 64
Eigenvalues (characteristic values), 51, 371
Eigenvectors, 372
Energy containment bandwidth, 277
464                                              Index

Energy content, 5
      normalized, 5
Energy-density spectrum, 222
Energy signal, 5
Energy theorem, 222
Equivalence property, 38
Equivalent bandwidth, 275
Even signal, 3
Exponential sequences
      complex, 13
      real, 16
Exponential signals
      complex, 9
      real, 10

F
Fast Fourier transform (FFT)
        decimation-in-frequency algorithm, 355
        decimation-in-time algorithm, 352
Feedback systems, 19
FFT (see Fast Fourier transform)
Filter
        bandwidth, 230
        ideal band pass, 228
        ideal band stop, 228
        ideal low-pass, 227
        ideal high-pass, 227
Filtering, 227, 273
Final-value theorem
        unilateral Laplace transform, 150
        unilateral z-transform, 205
Finite-duration signal, 113
Finite impulse response (FIR), 66
Finite sequence, 169
FIR (see Finite impulse response)
First difference, 297
Fourier series
        coefficients, 212
        complex exponential, 211
        continuous-time, 211
        convergence, 213
        discrete (DFS), 288
        harmonic form, 213
        trigonometric, 212
Fourier spectra, 216, 293
Fourier transform (continuous-time), 216
        convergence, 217
        definition, 216
        inverse, 216
        properties, 219
        tables, 222, 223
Fourier transform (discrete-time), 293
        convergence, 293
        definition, 293
        inverse, 293
Index                                            465

Fourier transform (continued)
       properties, 295
       tables, 299, 300
Frequency
       angular, 211
       complex, 218
       fundamental, 11, 211
       radian, 11
Frequency response
       continuous-time LTI systems, 223, 262
       discrete-time LTI systems, 300, 326
Frequency selective filter, 227

G
Gain, 225
Gaussian pulse, 261
Generalized derivatives, 8
Generalized functions, 7, 37

H
Harmonic component, 213
Hilbert transform, 271
Homogeneity. 18

I
Identity matrix, 371
IIR (see Infinite impulse response)
Impulse-invariant method, 339
Impulse response
         continuous-time LTI systems, 56
         discrete-time LTI systems, 61
Impulse train, periodic, 238
Infinite impulse response (IIR), 66
Initial condition, 61
Initial rest, 61
Initial state, 418
Initial-value theorem
         unilateral Laplace transform, 150
         unilateral z-transform, 205
Initially relaxed condition (see Initial rest)
Interconnection of systems, 80, 123
Inverse transform (see Fourier, Laplace, etc.)
Invertible system, 55

L
Laplace transform
       bilateral (two-sided), 110
       definition, 110
       inverse, 119
       properties, 114, 132
       region of convergence (ROC), 111
       tables, 115, 119
       unilateral (one-sided), 110, 124, 151
Left-sided signal, 114
Linear-phase filter, 334
466                                           Index

Linear system, 18
Linear time-invariant (LTI) system, 18
       continuous-time, 56
       discrete-time, 61
Linearity, 60, 115

M
Magnitude response, 224, 301
Magnitude spectrum, 216, 293
Matrix (or matrices)
      characteristic equation, 435
      characteristic polynomial, 435
      conformable, 430
      constituent, 372, 377, 442
      controllability, 406, 417
      diagonal, 428
      diagonalization, 436
      differentiation, 444
      eigenvalues, 435
      eigenvectors, 435
      function of, 437
      idempotent, 442
      identity (or unit), 429
      integration, 444
      inverse, 431, 434
      minimal polynomials, 440
      nilpotent, 399
      nonsingular, 367, 435
      observability, 406, 418
      power, 437
      rank, 433
      similar, 368
      singular, 435
      skew-symmetric, 431
      spectral decomposition, 372, 377, 442
      spectrum, 442
      state-transition, 371
      symmetric, 431
      system, 367
      transpose, 431

N
N-dimensional state equations, 367
Nilpotent, 399
Noncausal system, 17
Nonideal frequency-selective filter, 229
Nonlinear system, 17
Nonperiodic (or aperiodic) signals, 5
Nonrecursive equation, 66
Nonsingular matrix, 367
Normalized average power, 5, 32
Normalized energy content, 5
N-point DFT, 305
Nyquist interval, 281
Nyquist sampling rate, 281
Index                                                           467

O
Observability matrix, 406, 418
Observable system, 406, 418
Odd signal, 3
Orthogonal sequences, 308
Orthogonal signals, 231

P
Parseval's identity (see Parseval's theorem)
Parseval's relation
        discrete Fourier series (DFS), 315
        discrete Fourier transform (DFT), 307
        Fourier series, 244
        Fourier transform (continuous-time), 221, 258
        Fourier transform (discrete-time), 298
Parseval's theorem
        discrete Fourier series (DFS), 290, 315
        discrete Fourier transform (DFT), 307
        Fourier series, 214
        Fourier transform (continuous-time), 222, 258
        Fourier transform (discrete-time), 361
Partial fraction expansion, 120, 174
Pass band, 227
Period, 4
        fundamental, 4
Periodic convolution
        continuous-time, 75
        discrete-time, 96
Periodic impulse train, 238
Periodic sequences, 288
Periodic signals, 4
Phase distortion, 225
Phase response, 224, 301
Phase shifter, 269
Poles, 112
Power, 5
        average, 5
Power series expansion, 174, 188
Power signals, 5

R
Random signals, 3
Real signals, 2
Recursive equation, 65
Region of convergence (ROC)
       Laplace transform, 111
       z-transform, 166
Relationship between
       the DFT and the DFS, 305
       the DFT and the Fourier transform (discrete-time), 306
Response
       frequency, 223, 262, 300, 326
       impulse, 56, 61
       magnitude, 224, 301
       phase, 224, 301
468                                    Index

Response (continued)
       step, 58, 63
       system, 302
       zero-input, 60
       zero-state, 60
Right-sided signal, 113
Rise time, 276

S
Sampled signal, ideal, 278
Samples, 2
Sampling, 1
        interval, 2, 278
                Nyquist, 281
        rate, 281, 303
                Nyquist, 281
Sampling theorem
        in the frequency domain, 286
        uniform, 281
Sequence, 1
        complex exponential, 13
        exponential, 16
        finite, 169
        nonperiodic, 5
        periodic, 5
        sinusoidal, 16
Sift-invariant, 18
Signal bandwidth, 231
Signals
        analog, 2
        analytical, 286
        anticausal, 59
        band-limited, 231, 278, 280
        bandpass, 231
        causal, 59, 64
        complex, 2
        complex exponential, 9
        continuous-time, 1
        deterministic, 3
        digital, 2
        discrete-time, 1
        duration-limited, 286
        energy, 5
        even, 3
        finite-duration, 113
        left-sided, 114
        nonperiodic, 5
        odd, 3
        periodic, 4
        power, 5
        random, 3
        real, 2
        real exponential, 10
        right-sided, 113
        sinusoidal, 11, 27, 29
Index                                                                                   469

Signals (continued)
        time-limited, 113
        two-sided, 114
Signum function, 254
Similar matrices, 368
Similarity transformation, 367, 436
Simulation, 303, 337
        by bilinear transformation, 340
        canonical, 384, 386
        impulse-invariance method, 339
Singular matrix, 435
Sinusoidal sequences, 16
Sinusoidal signals, 11, 27, 29
Spectral coefficients, 289
Spectral decomposition, 372, 377, 442
Spectrum (or spectra), 216
        amplitude, 214
        discrete frequency, 214
        energy-density, 222
        Fourier, 216
        line, 214
        magnitude, 216
        phase, 214, 216
        s-plane, 111
Stability
        asymptotical, 373, 377
        bounded-input / bounded-output (BIBO), 19, 59, 64, 79, 99, 122, 145, 176, 199
Stable systems, 19
State, 365
State equations
        continuous-time, 374, 388, 409
        discrete-time, 371, 382, 394
State space, 365
State space representation
        continuous-time LTI systems, 368
        discrete-time LTI systems, 366
        canonical
                the first form, 384, 390
                the second form, 386, 392
State-transition matrix, 371, 376
State variables, 365
State vectors, 366, 369
Step response, 58, 63
Stop band, 227
Superposition property, 18
Systems
        causal and noncausal, 17
        continuous-time and discrete-time, 17
        continuous-time LTI, 110
        described by difference equations, 65, 100
        described by differential equations, 60, 83
        discrete-time LTI, 165
        feedback, 19
        invertible, 55
        linear and nonlinear, 18
470                                                    Index

Systems (continued)
      linear time-invariant (LTI), 18, 56
      memoryless, 17
      stable, 19
      time-invariant and time-varying, 18
      with and without memory, 17, 58, 63
System function
      continuous-time LTI systems, 121, 143, 374
      discrete-time LTI systems, 175, 194, 373
System representation, 16
System response, 302

T
Testing function, 7
       3-dB bandwidth, 230
Time convolution theorem, 221, 255
Time delay, 225
Time-invariance, 61
Time-invariant systems, 18
Time reversal, 117, 172, 220, 295, 307
Time scaling, 116, 219, 296
Time shifting, 116, 171, 219, 295, 306
Time-varying systems, 18
Transfer function, 121
Transform circuits, 125
Transforms (see Fourier, Laplace, etc.)
Two-sided signal, 114

U
Uniform sampling theorem, 281
Unilateral Laplace transform, 124, 148
Unilateral z-transform, 177, 202
Unit, advance, 171
Unit circle, 167, 176
Unit-delay, 171
Unit-delay element, 46
Unit impulse function, 6
Unit impulse sequence, 12
Unit ramp function, 45
Unit sample response, 61 (See also Impulse response)
Unit sample sequence (see Unit impulse sequence)
Unit step function, 6, 37
Unit step sequence, 12

Z
z-plane, 166
z-transform
       bilateral (or two-sided), 165
       definition, 165
       inverse, 173
       properties, 171, 184
       region of convergence (ROC), 166
       tables, 170, 173
       unilateral (or one-sided), 177, 202
Zero-input response, 60
Index                     471

Zero padding, 305
Zero-state response, 60
Zeros, 112



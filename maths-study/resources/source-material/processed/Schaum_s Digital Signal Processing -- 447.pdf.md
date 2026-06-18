---
normalized_id: shared-pdf-reference-schaum-s-digital-signal-processing-447
exam_code: SHARED
material_scope: schaum_s digital signal processing -- 447.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Schaum_s Digital Signal Processing -- 447.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-schaum-s-digital-signal-processing-447

Schaum's Outline of Theory and Problems of
         Digital Signal Processing
                             Monson H. Hayes

        Professor of Electrical and Computer Engineering
                 Georgia Institute of Technology


                SCHAUM'S OUTLINE SERIES




            Start of Citation[PU]McGraw Hill[/PU][DP]1999[/DP]End of Citation
MONSON H. HAYES is a Professor of Electrical and Computer Engineering at the Georgia
Institute of Technology in Atlanta, Georgia. He received his B.A. degree in Physics from the
University of California, Berkeley, and his M.S.E.E. and Sc.D. degrees in Electrical Engineering
and Computer Science from M.I.T. His research interests are in digital signal processing with
applications in image and video processing. He has contributed more than 100 articles to journals
and conference proceedings, and is the author of the textbook Statistical Digital Signal Processing
and Modeling, John Wiley & Sons, 1996. He received the IEEE Senior Award for the author of a
paper of exceptional merit from the ASSP Society of the IEEE in 1983, the Presidential Young
Investigator Award in 1984, and was elected to the grade of Fellow of the IEEE in 1992 for his
"contributions to signal modeling including the development of algorithms for signal restoration
from Fourier transform phase or magnitude."

Schaum's Outline of Theory and Problems of
DIGITAL SIGNAL PROCESSING

Copyright © 1999 by The McGraw-Hill Companies, Inc. All rights reserved. Printed in the United
States of America. Except as permitted under the Copyright Act of 1976, no part of this publication
may be reproduced or distributed in any forms or by any means, or stored in a data base or retrieval
system, without the prior written permission of the publisher.

2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 PRS PRS 9 0 2 10 9

ISBN 0–07–027389–8

Sponsoring Editor: Barbara Gilson
Production Supervisor: Pamela Pelton
Editing Supervisor: Maureen B. Walker

Library of Congress Cataloging-in-Publication Data
Hayes, M. H. (Monson H.), date.
Schaum's outline of theory and problems of digital signal
processing / Monson H. Hayes.
p. cm. — (Schaum's outline series)
Includes index.
ISBN 0–07–027389–8
1. Signal processing—Digital techniques—Problems, exercises,
etc. 2. Signal processing—Digital techniques—Outlines, syllabi,
etc. I. Title. II. Title: Theory and problems of digital signal
processing.
TK5102.H39 1999
621.382'2—dc21                                      98–43324
                                                        CIP
Start of Citation[PU]McGraw Hill[/PU][DP]1999[/DP]End of Citation




                     For Sandy
Preface
Digital signal processing (DSP) is concerned with the representation of signals in digital form, and
with the processing of these signals and the information that they carry. Although DSP, as we know
it today, began to flourish in the 1960's, some of the important and powerful processing techniques
that are in use today may be traced back to numerical algorithms that were proposed and studied
centuries ago. Since the early 1970's, when the first DSP chips were introduced, the field of digital
signal processing has evolved dramatically. With a tremendously rapid increase in the speed of DSP
processors, along with a corresponding increase in their sophistication and computational power,
digital signal processing has become an integral part of many commercial products and applications,
and is becoming a commonplace term.

This book is concerned with the fundamentals of digital signal processing, and there are two ways
that the reader may use this book to learn about DSP. First, it may be used as a supplement to any
one of a number of excellent DSP textbooks by providing the reader with a rich source of worked
problems and examples. Alternatively, it may be used as a self-study guide to DSP, using the method
of learning by example. With either approach, this book has been written with the goal of providing
the reader with a broad range of problems having different levels of difficulty. In addition to
problems that may be considered drill, the reader will find more challenging problems that require
some creativity in their solution, as well as problems that explore practical applications such as
computing the payments on a home mortgage. When possible, a problem is worked in several
different ways, or alternative methods of solution are suggested.

The nine chapters in this book cover what is typically considered to be the core material for an
introductory course in DSP. The first chapter introduces the basics of digital signal processing, and
lays the foundation for the material in the following chapters. The topics covered in this chapter
include the description and characterization of discrete-type signals and systems, convolution, and
linear constant coefficient difference equations. The second chapter considers the represention of
discrete-time signals in the frequency domain. Specifically, we introduce the discrete-time Fourier
transform (DTFT), develop a number of DTFT properties, and see how the DTFT may be used to
solve difference equations and perform convolutions. Chapter 3 covers the important issues
associated with sampling continuous-time signals. Of primary importance in this chapter is the
sampling theorem, and the notion of aliasing. In Chapter 4, the z-transform is developed, which is
the discrete-time equivalent of the Laplace transform for continuous-time signals. Then, in Chapter
5, we look at the system function, which is the z-transform of the unit sample response of a linear
shift-invariant system, and introduce a number of different types of systems, such as allpass, linear
phase, and minimum phase filters, and feedback systems.

The next two chapters are concerned with the Discrete Fourier Transform (DFT). In Chapter 6, we
introduce the DFT, and develop a number of DFT properties. The key idea in this chapter is that
multiplying the DFTs of two sequences corresponds to circular convolution in the time domain.
Then, in Chapter 7, we develop a number of efficient algorithms for computing the DFT of a finite-
length sequence. These algorithms are referred to, generically, as fast Fourier transforms (FFTs).
Finally, the last two chapters consider the design and implementation of discrete-time systems. In
Chapter 8 we look at different ways to implement a linear shift-invariant discrete-time system, and
look at the sensitivity of these implementations to filter coefficient quantization. In addition, we
analyze the propagation of round-off noise in fixed-point implementations of these systems. Then, in
Chapter 9 we look at techniques for designing FIR and IIR linear shiftinvariant filters. Although the
primary focus is on the design of low-pass filters, techniques for designing other frequency selective
filters, such as high-pass, bandpass, and bandstop filters are also considered.

It is hoped that this book will be a valuable tool in learning DSP. Feedback and comments are
welcomed through the web site for this book, which may be found at

http://www.ee.gatech.edu/users/mhayes/schaum

Also available at this site will be important information, such as corrections or amplifications to
problems in this book, additional reading and problems, and reader comments.



                               Start of Citation[PU]McGraw Hill[/PU][DP]1999[/DP]End of Citation
Contents
Chapter 1. Signals and Systems                                   1
      1.1 Introduction                                           1
      1.2 Discrete-Time Signals                                  1
              1.2.1 Complex Sequences                            2
              1.2.2 Some Fundamental Sequences                   2
              1.2.3 Signal Duration                              3
              1.2.4 Periodic and Aperiodic Sequences             3
              1.2.5 Symmetric Sequences                          4
              1.2.6 Signal Manipulations                         4
              1.2.7 Signal Decomposition                         6
      1.3 Discrete-Time Systems                                  7
              1.3.1 Systems Properties                           7
      1.4 Convolution                                            11
              1.4.1 Convolution Properties                       11
              1.4.2 Performing Convolutions                      12
      1.5 Difference Equations                                   15
      Solved Problems                                            18

Chapter 2. Fourier Analysis                                      55
      2.1 Introduction                                           55
      2.2 Frequency Response                                     55
      2.3 Filters                                                58
      2.4 Interconnection of Systems                             59
      2.5 The Discrete-Time Fourier Transform                    61
      2.6 DTFT Properties                                        62
      2.7 Applications                                           64
              2.7.1 LSI Systems and LCCDEs                       64
              2.7.2 Performing Convolutions                      65
              2.7.3 Solving Difference Equations                 66
              2.7.4 Inverse Systems                              66
      Solved Problems                                            67

Chapter 3. Sampling                                              101
      3.1 Introduction                                           101
      3.2 Analog-to-Digital Conversion                           101
             3.2.1 Periodic Sampling                             101
             3.2.2 Quantization and Encoding                     104
      3.3 Digital-to-Analog Conversion                           106
      3.4 Discrete-Time Processing of Analog Signals             108
      3.5 Sample Rate Conversion                                 110
             3.5.1 Sample Rate Reduction by an Integer Factor    110
             3.5.2 Sample Rate Increase by an Integer Factor     111
             3.5.3 Sample Rate Conversion by a Rational Factor   113
      Solved Problems                                            114

Chapter 4. The Z-Transform                                       142
      4.1 Introduction                                           142
      4.2 Definition of the z-Transform                          142
      4.3 Properties                                             146

                                                   vii
      4.4 The Inverse z-Transform                                       149
            4.4.1 Partial Fraction Expansion                            149
            4.4.2 Power Series                                          150
            4.4.3 Contour Integration                                   151
      4.5 The One-Sided z-Transform                                     151
      Solved Problems                                                   152

Chapter 5. Transform Analysis of Systems                                183
      5.1 Introduction                                                  183
      5.2 System Function                                               183
             5.2.1 Stability and Causality                              184
             5.2.2 Inverse Systems                                      186
             5.2.3 Unit Sample Response for Rational System Functions   187
             5.2.4 Frequency Response for Rational System Functions     188
      5.3 Systems with Linear Phase                                     189
      5.4 Allpass Filters                                               193
      5.5 Minimum Phase Systems                                         194
      5.6 Feedback Systems                                              195
      Solved Problems                                                   196

Chapter 6. The DFT                                                      223
      6.1 Introduction                                                  223
      6.2 Discrete Fourier Series                                       223
      6.3 Discrete Fourier Transform                                    226
      6.4 DFT Properties                                                227
      6.5 Sampling the DTFT                                             231
      6.6 Linear Convolution Using the DFT                              232
      Solved Problems                                                   235

Chapter 7. The Fast Fourier Transform                                   262
      7.1 Introduction                                                  262
      7.2 Radix-2 FFT Algorithms                                        262
             7.2.1 Decimation-in-Time FFT                               262
             7.2.2 Decimation-in-Frequency FFT                          266
      7.3 FFT Algorithms for Composite N                                267
      7.4 Prime Factor FFT                                              271
      Solved Problems                                                   273

Chapter 8. Implementation of Discrete-Time Systems                      287
      8.1 Introduction                                                  287
      8.2 Digital Networks                                              287
      8.3 Structures for FIR Systems                                    289
             8.3.1 Direct Form                                          289
             8.3.2 Cascade Form                                         289
             8.3.3 Linear Phase Filters                                 289
             8.3.4 Frequency Sampling                                   291
      8.4 Structures for IIR Systems                                    291
             8.4.1 Direct Form                                          292
             8.4.2 Cascade Form                                         294
             8.4.3 Parallel Structure                                   295
             8.4.4 Transposed Structures                                296
             8.4.5 Allpass Filters                                      296
      8.5 Lattice Filters                                               298
             8.5.1 FIR Lattice Filters                                  298
             8.5.2 All-Pole Lattice Filters                             300

                                                 viii
               8.5.3 IIR Lattice Filters                        301
        8.6 Finite Word-Length Effects                          302
               8.6.1 Binary Representation of Numbers           302
               8.6.2 Quantization of Filter Coefficients        304
               8.6.3 Round-Off Noise                            306
               8.6.4 Pairing and Ordering                       309
               8.6.5 Overflow                                   309
        Solved Problems                                         310

Chapter 9. Filter Design                                        358
      9.1 Introduction                                          358
      9.2 Filter Specifications                                 358
      9.3 FIR Filter Design                                     359
              9.3.1 Linear Phase FIR Design Using Windows       359
              9.3.2 Frequency Sampling Filter Design            363
              9.3.3 Equiripple Linear Phase Filters             363
      9.4 IIR Filter Design                                     366
              9.4.1 Analog Low-Pass Filter Prototypes           367
              9.4.2 Design of IIR Filters from Analog Filters   373
              9.4.3 Frequency Transformations                   376
      9.5 Filter Design Based on a Least Squares Approach       376
              9.5.1 Pade Approximation                          377
              9.5.2 Prony's Method                              378
              9.5.3 FIR Least-Squares Inverse                   379
      Solved Problems                                           380

Index                                                           429




                                                    ix
274                                     THE FAST FOURIER TRANSFORM                                              [CHAP. 7


7.3   Speech that is sampled at a rate of I0 kHz is to be processed in real time. Part of the computations
      required involve collecting blocks of 1024 speech values m d computing a 1024-point DFT and a 1024-
      point inverse DFT. If it takes I p s for each real multiply. how much time remains for processing the data
      after the DFT and the inverse DFT are computed?
      With a 10-kHz sampling rate, a block of 1024 samples is collected every 102.4 ms. With a radix-2 FFT, the number
      of complex multiplications for a 1024-point DFT is approximately 5 12 log, 1024 = 5120. With a complex multiply
      consisting of four real multiphes. this means that we have to perform 5.120. 4 = 20,480 real multiplies for the DFT
      and the same number for the inverse DFT. With 1 ps per multiply, this will take



      which leaves 61.44 ms for any additional processing.


7.4   Sampling a continuous-time signal x l , ( t )for I s generates a sequence of 4096 samples.
      ( a ) What is the highest frequency in .rl,(t)if it was sampled without aliasing?
      (b) If a 4096-point DFT of the sampled signal is computed, what is the frequency spacing in hertz
          between the DFT coefficients'?
      (c) Suppose that we are only interested in the DFT samples that correspond to frequencies in the range
          200 5 f 5 300 Hz. How many complex multiplies are required to evaluate these values computing
          the DFT directly, and how many are required if a decimation-in-time FFT is used?
      ( d ) How many frequency samples would be needed in order for the FFT algorithm to be more efficient
            than evaluating the DFT directly?

      (a) Collecting 4096 samples in I s means that Ihe sampling frequency is ,ti = 4096 Hz. If . r , ( ~ ) is to be sampled
          without aliasing, the sampling frequency must be a1 least twice the highest frequency in .r,(1). Therefore, l a ( / )
          should have no frequencies above fi, = 2048 Hz.
      ( h ) With a 4096-point DFT. we are sampling X ( e l " ) at 4096 equally spaced frequencies between 0 and 2 ~ rwhich
                                                                                                                     ,
            corresponds to 4096 frequency samples over the range 0 5 ,f 5 4096 Hz. Therefore, the frequency spacing is
            Af = I H z .
      (c) Over the frequency range from 200 to 300 Hz we have 101 DFT samples. Because it takes 4096 complex
           multiplies to evaluate each DFT coefficient, the number of multiplies necessary toevaluate only these frequency
           samples is


           On the other hand, the number of multiplications required if an FFT is used is



           Therefore, even though the FFT generates all of the frequency samples in the range 0 5 ,f 5 4096 Hz, it is
           more efficient than evaluating these 101 samples directly.
      (d) An N-point FFT requires N log, N complex multiplies. and to evaluate M DFT coefficients directly requires
           M . N complex multiplica;ions. Therefore, the FFT will be more efticient in finding these M samples if




           With N = 4096, the number of frequency samples is M = 6 .


7.5   Because some of the f N log, N multiplications in the decimation-in-time and decimation-in-frequency
      FFT algorithms are multiplications by fI . it is possible to more efticiently implement these algorithms
      by writing programs that specitically excluded these multiplications.
      ( a ) How many multiplications are there in an eight-point decimation-m-time FFT if we exclude the
            multiplications by fI ?
CHAP. 71                                 THE FAST FOURIER TRANSFORM


      ( b ) Repeat part ( a )for a 16-point decimation-in-time FFT.
      (c) Generalize the results in parts (a)and ( b )for N = 2".

      ( a ) For an eight-point decimation-in-time FFT,we may count the number of complex multiplications in the flow-
            graph given in Fig. 7-6. In the first stage of the FFT, there are no complex multiplications, whereas in the second
            stage, there are two multiplications by W:. Finally, in the third stage there are three multiplications by W x ,w;,
            and W:. Thus, there are a total of five complex multiplies.
      ( b ) A 16-point DFT is formed from two &point DFTs as follows:



           where G ( k ) and H(k) are eight-point DFTs. There are eight butterflies in the last stage that produces X ( k )
           from G ( k )and H(k). Because the simplified butterfly in Fig. 7-5(b)only requires only one complex multiply,
           and noting that one of these is by WP, = 1, we have a total of seven twiddle factors. In addition, we have
           two 8-point FFTs, which require five complex multiplies each. Therefore. the total number of multiplies IS
           2 - 5 + 7 = 17.
      ( c ) Let L ( v ) be the number of complex multiplies required for a radix-2 FFT when N = 2". From parts (a) and (h)
            we see that L(3) = 5 and L(4) = 17. Given that an FFT of length N = 2"-' requires L(v - I) mul~iplies.for
            an FFT of length N = 2", we have an additional 2"-I butterflies. Because each butterfly requires one multiply.
            and because one of these multiplies is by W: = 1, the number of multiplies required for an FFT of length
            2" is


           Solving this recursion for L(v), we have the following closed-form expression for L ( v ) :




7.6   The FFT requires the multiplication of complex numbers:



      (a) Write out this complex multiplication, and determine how many real multiplies and real adds are
           required.
      (b) Show that the complex multiplication may also be performed as follows:




           and determine the number of real multiplies and adds required with this method.

      (a) The product of two complex number is



           which requires four real multiplies and three real adds.
      (h) Expanding the expressions for q. we have



           as required. Similarly, for dl we have



           also as required. This approach only requires three multiplies and four adds.
276                                        THE FAST FOURIER TRANSFORM                                                    [CHAP. 7


7.7   The decimation-in-time and decimation-in-frequency FFT algorithms evaluate the DFT of a complex-
      valued sequence. Show how an N-point FFT program may be used to evaluate the N-point DFT of two
      real-valued sequences.
      As we saw in Prob. 6.18. the DFTs of two real-valued sequences may be found from one N-point DFT as follows.
      First, we form the N-point complex sequence



      After finding the N-point DFT of .r(n). we extract X I ( k )and X z ( k ) from X ( k ) by exploiting the symmetry of the
      DFT. Specifically.



      which is the conjugate symmetric part of X ( k ) . and

                                                  X?(k) = t l X ( k )- X*((N - k ) ) ~ ]

      which is the conjugate antisymmetric part of X ( k ) .


7.8   Determine how a 2N-point DFT of a real-valued sequence may be computed using an N-point FFT
      algorithm.
      Let g ( n ) be a real-valued sequence of length 2N. From this sequence. we may form two real-valued sequences of
      length N as follows:




      From these two sequences, we form the complex sequence



      Computing the N-point DFT of . r ( n ) . we niay then extract the N-point DFTs of x , ( n ) and x 2 ( n ) as follows
      (see Prob. 7 . 7 ) :
                                                         ) i [ ~ ( k )X*((N -k ) ) ~ ]
                                                  x ~ ( k=             +
                                                  x ~ k =) ; [ x ( k ) - x * ( ( N - k ) ) N I

      Now all that is left to do is to relate the 2N-point DFT of g ( n ) to the N-point DFTs X l ( k ) and X , ( k ) . Note that




      Therefore,                      G(k)= Xl(k)+ w ; , ~ z ( k )           k =0, 1 , .... 2N - 1

      where the periodicity of X l ( k ) and X 2 ( k ) is used to evaluate G ( k ) for N < k < 2N, that is,

                                            X l ( k )= Xl(k + N )          Xz(k) =X2(k       + N)
7.9   Given an FFT program to find the N-point DFT of a sequence, how may this program be used to find
      the inverse DFT?
      As we saw in Prob. 6.9, we may tind . r ( n ) by first using the DFT program to evaluate the sum
CHAP. 71                                   THE FAST FOURIER TRANSFORM


       which is the DFT of X*(k). Then, x(n) may be found from x(n) as follows:



       Alternatively, we may find the DFT of X(k),




       and then extract x(n) as follows:




7.10   Let x ( n ) be a sequence of length N with



       where N is an even integer.
       (a) Show that the N-point DFT of x ( n ) has only odd harmonics. that is.
                                                           X(k) =0          k even

       (b) Show how to find the N-point DFT of x ( n ) by finding the N/2-point DFT of an appropriately
           modified sequence.
       (a) The N-point DFT of x(n) is




            Because x(n) = -x(n      + N/2), if k is even, each term in the sum is zero, and X(k) = 0 fork = 0 , 2 , 4 , . . ..
       (b) In the first stage of a decimation-in-frequency FFT algorithm, we separately evaluate the even-index and odd-
           index san~plesof X(k). If X(k) has only odd harmonics, the even samples are zero, and we need only evaluate
           the odd samples. From Eq. (7.4) we see that the odd samples are given by




            With x ( n ) = -x(n   + N/2) this becomes


            which is the N/2-point DFT of the sequence y(n) = 2WE;x(n). Therefore, to find the N-point DFT of x(n),
            we multiply the first N/2 points of x(n) by 2W;.



            and then compute the N/2-point DFT of y(nh The N/2-point DFT of x(n) is then given by
                                         THE FAST FOURIER TRANSFORM                                                [CHAP. 7


FFT Algorithms for Composite N

7.11   When the number of points in the D F T is a power of 4, w e can use a radix-2 FFT algorithm. However,
       when N = 4", it is more efficient to use a radix-4 FFT algorithm.

       (a) Derive the r a d i x 4 decimation-in-time FFT algorithm when N = 4".
       (b) Draw the structure for the butterfly in the radix-4 FFT, and compare the number of complex multiplies
           and adds with a radix-4 F F T to a radix-2 FFT.

       (a) To derive a decimation-in-time radix-4 FFT. let NI = N/4 and N2 = 4. and define the index maps




            We then express X ( k ) using the decomposition given in Eq. (7.7) with NI = N/4 and N2 = 4,




           The inner summation.




            is the N/4-point DFT of the sequence x(4nI    + n2),and the outer summation is a 4-point DFT,




           Since W4 = -j, these 4-point transforms have the form




                                                  .
           for kl = 0. 1 , 2 . 3 , and n2 = 0, I , . . . (N/4) 1. If N2 = N/4 is divisible by 4, then the process is repeated.
                                                          -


           In this way, we generate v = Iog, N stages with N/4 butterflies in each stage.
       (b) The 4-point butterflies in the radix-4 FFT perform operations of the form
CHAP. 71                               THE FAST FOURIER TRANSFORM


           With




           Since multiplications by ij only requires interchanging real and imaginary parts and possibly changing a sign
           bit, then each 4-point butterfly only requires 3 complex multiplications. With v = log, N stages, and N/4
           butterflies per stage, the number of complex multiplies for a DFT of length N = 4" is
                                                        N            3N
                                                    3 . - log, N = - log, N
                                                        4             8
           For a radix-:! decimation-in-time FFT, on the other hand, the number of multiplications is
                                                              N
                                                             - log, N
                                                              2
           Therefore, the number of multiplications in a radix-4 FFT is   & times the number in a radix-2 FFT.

7.12   Suppose that we would like to find the N-point DFT of a sequence where N is a power of 3, N = 3".
       ( a ) Develop a radix-3 decimation-in-time FFT algorithm, and draw the corresponding flowgraph for
             N =9.
       ( h ) How many multiplications are required for a radix-3 FFT?
       (c) Can the computations be performed in place?
       (a) A radix-3 decimation-in-time FFT may be derived in exactly the same way as a radix-2 FFT. First, x ( n ) is
           decimated by a factor of 3 to form three sequences of length Nj3:
                             THE FAST FOURIER TRANSFORM                                                [CHAP. 7


Expressing the N-point DFT in terms of these sequences, we have




Since w$' =    W k 3 ,then



Note that the first term is the N/3-point DFT o f f (n), the second is W i times the N/3-point DFT of g(n), and
the third is w;' times the N 13-point DFT of h(n),




We may continue decimating by factors of 3 until we are left with only 3-point DFTs. The flowgraph for a
9-point decimation-in-time FFT is shown in Fig. 7- 1 I . Only one of the 3-point butterflies is shown in the second
stage in order to allow for the labeling of the branches. The complete flowgraph is formed by replicating this
3-point butterfly up by one node, and down by one node, and changing the branch multiplies to their appropriate
values.




  47)




  45)


                                                                                          0 X(8)
                         WJ"
  Fig. 7-11. Flowgraph for a9-point decimation-in-time FFT (only one butterfly in the second
    stage is shown).
CHAP. 71                                   THE FAST FOURIER TRANSFORM                                                         28 1

       (b) If N = 3". then there are v stages in the radix-3 FFT. The general form of each 3-point butterfly, shown in the
           second stage of the flowgraph in Fig. 7-1 1, requires six multiplies (some require fewer if we do not consider
           multiplications by fI). Since there are N / 3 butterflies in each stage, then the total number of multiplications is

                                                                 6N log, N

       ( c ) Yes, the computations may be performed in place.


7.13   Derive a radix-3 decimation-in-frequency FFT for N = 3" a.nd draw the corresponding flowgraph for
       N =9.
       As with the radix-2 decimation-in-frequency FFT, with N =3", we separately evaluate the indices for which
       ((k))3 = 0, ((k))3 = I , and ((k))3 = 2. For ((k))3 = 0 (i.e., k is a multiple of 3),




       Separating this sum into the first N / 3 points, the second N / 3 points, and the last N / 3 points, and using the fact that
                  .,,
       W Z k = wnk, this becomes




       With a change in the indexing in the second and third sums, we have




                         "+ $
       Finally, because WNi, = W:/,,
                                                  n+   y
                                          and WN13 = Wi13,




       which is the N/3-point DFT of the sequence in brackets.
                                                                  +
           Proceeding in the same way for the samples X(3k I), we have




       Finally, for the samples X(3k   + 2) we have
                                          THE FAST FOURIER TRANSFORM                                                [CHAP. 7


       The flowgraph for a nine-point decimation-in-frequency FFT is shown below.




7.14   Suppose that we have a number of eight-poin~decimation-in-time FFT chips. How could these chips be
       used to compute a 24-point DFT?
       A 24-point DFT is defined by




       Decimating x(n) by a factor of 3, we may decompose this DFT into three %point DFTs as follows:




       Therefore, if we form the three sequences




       and use the 8-point FFT chips to find the DFTs F ( k ) , G(k), and H ( k ) , the 24-point DFT of x ( n ) may be found by
       combining the outputs of the 8-point FFTs as follows:




Prime Factor FFT

7.15   Find the index maps for a 21 -point prime factor FFT with N I = 7 and N 2 = 3. HOWmany multiplications
       are required compared to a 32-point radix-2 decimation-in-time FFT?
CHAP. 71                                 THE FAST FOURIER TRANSFORM                                                      283

       For a 21-point prime factor FFT with N I = 7 and N 2 = 3, we sel A = N2 = 3 and B = N I = 7. Then, with
       C = N~((N;' ))N, = 15 and D = N ~ (N(        = 7, we have the following index mappings:




       Thus, the two-dimensional array representation for the input is




                                        x(7)     ~ ( 1 0 ) ~ ( 1 3 ) ~ ( 1 6 ) ~ ( 1 9 ) .x(l)
                               2       x(14)     ~ ( 1 7 ) ~ ( 2 0 ) s(2)      s(5)      ~ ( 8 ) .u(l I )

       and the two-dimensional array for the output is




       With the prime factor FFT, there are no twiddle factors. Therefore, the only multiplications necessary are those
       required to compute the three 7-point DFTs, and the seven 3-point DFTs. Because each 3-point DFT requires 6 com-
       plex multiplies, and each 7-point DFT requires 42, the number of multiplies for a 2 1-point prime factor FFT is
             +
       (7)(6) (3)(42) = 168. For a 32-point radix-2 FFT. on the other hand. we require



       complex multiplies. Therefore. it would be more efficient to pad a 21-point sequence with zeros and compute a 32-
       point DFT. The increasedefficiency is a result of the fact that 32 = 2' is a much more composite number than 2 1 = 7.3.


7.16   Suppose that we would like to compute a 15-point DFT of a sequence x ( n ) .
       ( a ) Using a mixed-radix FFT with N I = 5 and N2 = 3, the DFT is decomposed into two stages, with
            the first consisting of three 5-point DFTs, and the second stage consisting of five 3-point DFTs.
            Make a sketch of the connections between the five- and three-point DFTs, indicating any possible
            twiddle factors, and the order of the inputs and outputs.
       (b) Repeat part ( a ) for the prime factor algorithm with N I ==5 and N 2 = 3, and determine how many
           complex multiplies are saved with the prime factor algorithm.

       (a) Using a mixed-radix FFT with N I = 5 and N2 = 3, the index mappings for n and k are as follows:




           Thus, the two-dimensional array representation for the input is
                                  THE FAST FOURIER TRANSFORM                                              [CHPLP. 7


    After the five-point DFT of each row in the data array is computed. the resulting complex array is multiplied
    by the array of twiddle factors:




    The last step then involves computing the three-point DFT of each column. This produces the output array
    X ( k ) , which is




    The connections between the three- and five-point DFTs are shown in the following figure, along with the eight
    twiddle factors:




(h) Using the prime factor algorithm with N I = 5 and N2 = 3, we set A = N 2 = 3 and B = N , = 5. Then, with
    C = N ~ ( ( N , ' ) ) N ,= 6 and D = N ~ ( ( N ; ' ) ) ~=, 10, we have the following index mappings for n and k :
CHAP. 71                                  THE FAST FOURIER TRANSFORM


            The two-dimensional array representation for the input is




            and for the output array we have
                                                               1        2         3         4




            The interconnections between the five- and three-point DFTs are the same as in the mixed-radix algorithm.
            However, there are no twiddle factors, and the ordering of the input and output arrays is different. The 15-point
            prime fuctor algorithm is diagrammed in the figure below.




            The savings with the prime factor algorithm over the mixed-radix FFT are the eight complex multiplies by the
            twiddle factors.




                                        Supplementary Problems
Radix-2 FFT Algorithms

7.17   Let x ( n ) be a sequence of length 1024 that is to be convolved with a sequence h ( n ) of length L. For what values of
       L is it more efficient to perform the convolution directly than it is to perform the convolution by taking the inverse
       DFT of the product X (k)H ( k ) and evaluating the DFTs using a radix-2 FFT algorithm?
286                                      THE FAST FOURIER TRANSFORM                                              [CHAP. 7


7.18   Suppose that we have a 1025-point data sequence (1 more than N = 2"). Instead of discarding the final value, we
       zero pad the sequence to make it of length N = 2" so that we can use a radix-2 FFT algorithm. (a) How many
       multiplications and additions are required to compute the DFT using a radix-2 FFT algorithm? (b) How many
       multiplications and additions would be required to compute a 1025-point DFT directly?


FFT Algorithms for Composite N

7.19   In a radix-3 decimation-in-time FFT, how is the input sequence indexed?

7.20   How many complex multiplications are necessary in a radix-3 decimation-in-frequency FFT?

7-21   Consider the FFT algorithm given in Example 7.3.2. ( a ) How many multiplications and additions are required to
       compute a 12-point DFT? (h) How many multiplications and additions are necessary if the 12-point DFT is computed
       directly?


Prime Factor FFT

7.22   Find the index maps for a 99-point prime factor FFT with N I = I I and N2 = 9.

7.23   How many complex multiplications are required for a 12-point prime factor FFT with N, = 4 and N3 = 3 if we do
                                             +
       not count multiplications by + I and j?

7.24   How many twiddle factors are there in a 99-point prime factor FFT with N I = I 1 and N2 = 9?

7.25   How many complex multiplications are required for a 15-point prime factor FFT if we do not count multiplications
       by & I ?




                              Answers to Supplementary Problems


7.18   (a) 1 1.264. (b) 1,050,625.

7.19   The index for x(n) is expressed in ternary form, and then the ternary digits are read in reverse order.

7.20   The same as a decimation-in-time FFT, which is 2N log, N .

7.21   (a) Each 4-point DFT requires no multiplies and 12 adds, and each 3-point DFT requires 6 multiplies and 6 adds. With
                                     +                                 +
       6 twiddle factors, there are 6 (4)(6) = 30 multiplies and (4)(6) (3)(12) = 60 adds. (b) 144 multiplies and 132 adds.

7.22   n = 9nI   + 1 In2, and k = 45kl + %k2.
7.23   24.

7.24   None.

7.25   90.
                                                                                    Chapter 8
           Implementation of Discrete-Time Systems
8.1 INTRODUCTION
Given a linear shift-invariant system with a rational system function H ( z ) , the input and output are related by a
linear constant coefficient difference equation. For example, with a system function




the input x ( n ) and output y(n) are related by the linear constant coefficient difference equation



This difference equation defines a sequence of operations that are to be performed in order to implement this
system. However, note that this system may also be implemented with the following pair of coupled difference
equations:




With this implementation, it is only necessary to provide one memory location to store w(n - I), whereas
Eq. (8.1)requires two memory locations, one to store y(n - I) and one to store x(n - 1). This simple example
illustrates that there is more than one way to implement a system and that the amount of computation and/or
memory required will depend on the implementation. In addition, the implementation may affect the sensitivity
of the filter to coefficient quantization. and the amount of round-off noise that appears at the output of the
filter.
      In this chapter, we look at a number of different ways to implement a linear shift-invariant discrete-time
system and look at the effect of finite word lengths on these implementations.



8.2 DIGITAL NETWORKS
For a linear shift-invariant system with a rational system function, the input x ( n ) and the output y(n) are related
by a linear constant coefficient difference equation:




The basic computalional elements required to find the output at time n are adders, multipliers, and delays. It is
often convenient to use a block diagram to illustrate how these adders.. multipliers, and delays are interconnected
to implement a given system. The notation that is used for these elements is shown in Fig. 8-1. A network is
also often represented pictorially using a signalflowgraph, which is a network of directed branches that are
connected at nodes. Each branch has an input and an output, with the direction indicated by an arrowhead. The
nodes in a flowgraph correspond to either adders or branch points. Adders correspond to nodes with more
than one incoming branch, and branch points are nodes with more lhan one outgoing branch, as illustrated in
Fig. 8-2. With a linear flowgraph, the output of each branch is a linear transformation of the branch input, and the
linear operator is indicated next to the arrow. For linear shift-invariant discrete-time filters, these linear operators
consist of multiplies and delays. Finally, there are two special types of nodes:
288                                IMPLEMENTATION OF DISCRETE-TIME SYSTEMS                                       [CHAP. 8


      1. Source nodes. These are nodes that have no incoming branches and are used for sequences that are
         input to the filter.
      2. Sink nodes. These are nodes that have only entering branches and are used to represent output sequences.




                                                               ( a ) Adder.



                            x(n)
                                        -
                                        a             a x(n)
                                                                          x(n;      r-q              x(n
                                                                                                     ;
                                                                                                           -I)

                                    (b) Multiplier.                              (c) A unit delay.
                            Fig. 8-1. Notation used for an adder, multiplier, and delay in a
                              digital network.




                                              Fig. 8-2. Signal flowgraph con-
                                                sisting of nodes, branches, and
                                                node variables. Node j repre-
                                                sents an adder, and node k is a
                                                branch point.


EXAMPLE 8.2.1 Consider the first-order discrete-time system described by the difference equation




Shown in the figure below is a block diagram for this system.




Using a signal flowgraph, this system is represented as follows:
CHAP. 81                      IMPLEMENTATION OF DISCRETE-TIME SYSTEMS


8.3 STRUCTURES FOR FIR SYSTEMS
A causal FIR filter has a system function that is a polynomial in zp':


                                               H (z) =          h(n)zpn
                                                          n=O


For an input x(n), the output is
                                                      N




For each value of n, evaluating this sum requires (N        + I) multiplications and N additions. The following
subsections describe several different realizations of this system.


8.3.1 Direct Form
The most common way to implement an FIR filter is in direct form using a tapped delay line as shown in the
figure below.
                                   z-'         z-I




                                                                                h(N - I )



                                                                                                          y(n)

                          +
This structure requires N I multiplications, N additions, and N delays. However, if there are some symmetries
in the unit sample response, it may be possible to reduce the number of multiplications (see the section on linear
phase filters).


8.3.2 Cascade Form
For a causal FIR filter, the system function may be factored into a product of first-order factors,




where ak for k = 1 , . . . , N are the zeros of H (z). If h(n) is real, the complex roots of H(z) occur in complex
conjugate pairs, and these conjugate pairs may be combined to form second-order factors with real coefficients,




Written in this form, H (z) may be implemented as a cascade of second-order FIR filters as illustrated in Fig. 8-3.


8.3.3 Linear Phase Filters
Linear phase filters have a unit sample response that is either symmetric,
290                            IMPLEMENTATION OF DISCRETE-TIME SYSTEMS                                     [CHAP 8




                      Fig. 8-3. An FIR tilter implemented as a cascade of second-order systems.

or antisymmetric (see Sec. 5.3).
                                                h ( n ) = -h(N - n)

This symmetry may be exploited to simplify the network structure. For example, if N is even and h(n) is
symmetric (type 1 filter),




                                          +            +
Therefore, forming the sums [x(n - k) x(n - N k)] prior to multiplying by h(k) reduces the number of
multiplications. The resulting structure is shown in Fig. 8-4(a). If N is odd and h(n) is symmetric (type I1 filter),
the structure is as shown in Fig. 8-4(h). There are similar structures for the antisymmetric (types 111 and IV)
linear phase filters.
CHAP. 81                              IMPLEMENTATION OF DISCRETE-TIME SYSTEMS                                                               29 1

8.3.4 Frequency Sampling
The frequency sampling structure is an implementation that parameterizes a filter in terms of its DFT coefficients.
Specifically, let H ( k ) be the N-point DFT of an FIR filter with h ( n ) .= 0 for n < 0 and n 2 N.' Because the
unit sample response of the filter is
                                                    1 N-I
                                           h ( n )= -                 x
                                                          ~ ( ku ) J ~ ~ ~ ~ / ~
                                                                      k=O

the system function may be written as


                                   H ( z )=   x
                                              N-l


                                               n =O
                                                      h(n)z-" =      x [i
                                                                     N-I


                                                                     n=O
                                                                        x       N-1


                                                                                k =O
                                                                                       ~   (   k   )
                                                                                                       I
                                                                                                       ~z - f l j   ~   ~   ~   ~   /   ~




Evaluating the sum over n , this becomes




which corresponds to a cascade of an FIR filter                 k(1 - z - ~ with
                                                                            )    a parallel network of one-pole filters:




For a narrowband filter that has most of its DFT coefficients equal to zero, the frequency sampling structure
will be an efficient implementation. The frequency sampling structure is shown in Fig. 8-5. If h ( n ) is real,
H ( k ) = H * ( N - k ) , and the structure may be simplified. For example, if N is even,




where                                      A ( k ) = H ( k )+ H ( N - k )
                                           B ( k ) = ~ ( ke - j)2 n k / N   + H ( N - k ) eJZnklN
A similar simplification results when N is odd.


8.4 STRUCTURES FOR IIR SYSTEMS
The input x ( n ) and output y ( n ) of a causal IIR filter with a rational system function




                                                                            +
'Note that here we are assuming that h ( n ) is of length N, instead of N I as in the previous sections. This is consistent with the convention
that the frequency sampling filter is based on an N-point DFT of h(n).
                                IMPLEMENTATION OF DISCRETE-TIME SYSTEMS                                      [CHAP. 8




                                     Fig. 8-5. Frequency sampling filter structure.

is described by the linear constant coefficient difference equation




In the following sections, several different implementations of this system are presented, including the direct
form structures, the cascade and parallel forms, and the transposed filter structures.


8.4.1   Direct Form
There are two direct form filter structures, referred to as direct form I and direct form 11. The direct form I
structure is an implementation that results when Eq. (8.3)is written as a pair of difference equations as follows:




The first equation corresponds to an FIR filter with input x ( n ) and output w ( n ) , and the second equation
corresponds to an all-pole filter with input w ( n ) and output y ( n ) . Therefore, this pair of equations represents a
CHAP. 81                        IMPLEMENTATION OF DISCRETE-TIME SYSTEMS


cascade of two systems,



as illustrated in Fig. 8-6. The computational requirements for a direct form I structure are as follows:

    Number of multiplications: p     + q + 1 per output sample
    Number of additions: p     + q per output sample
    Number of delays: p     +q




                                   Fig. 8-6. Direct form I realization of an IIR filter.

     The directform IJ structure is obtained by reversing the order of the cascade of B(z) and 1/A(z) as illustrated
in Fig. 8-7. With this implementation, x ( n ) is first filtered with the all-pole filter l / A ( z ) and then with B(z):




                    Fig. 8-7. Reversing the order of the cascade in the direct form I filter structure.
294                            IMPLEMENTATION OF DISCRETE-TIME SYSTEMS                                   [CHAP. 8


If we denote the output of the all-pole filter 1 /A(z) by w(n),this structure is described by the following pair of
coupled difference equations:




This structure may be simplified by noting that the two sets of delays are delaying the same sequence. Therefore,
they may be combined as illustrated in Fig. 8-8 for the case in which p = q. The computational requirements
for a direct form I1 structure are as follows:

      Number of multiplications: p   + q + I per output sample
      Number of additions: p   + q per output sample
      Number of delays: max(p. q )


The direct form I1 structure is said to be canonic because it uses the minimum number of delays for a given H(z).




                           Fig. 8-8. Direct form 11 realization of an IIR filter with p = q .



8.4.2 Cascade Structure
The cascade structure is derived by factoring the numerator and denominator polynomials of H(z):




This factorization corresponds to a cascade of first-order filters, each having one pole and one zero. In general.
the coefficients nk and Bk will be complex. However, if h ( n ) is real. the roots of H(z) will occur in complex
CHAP. 81                        IMPLEMENTATION OF DISCRETE-TIME SYSTEMS                                             295

conjugate pairs, and these complex conjugate factors may be combined to form second-order factors with real
coefficients:



A sixth-order 1IR filter implemented as a cascade of three second-order systems in direct form I1 is shown in
Fig. 8-9.




        Fig. 8-9. A sixth-order 11R filter implemented as a cascade of three direct form 11 second-order systems.

     There is considerable flexibility in how a system may be implemented in cascade form. For example, there
are different pairings of the poles and zeros and different ways in which the sections may be ordered.


8.4.3 Parallel Structure
An alternative to factoring H ( z ) is to expand the system function using a partial fraction expansion. For example,
with




if p > q and ai # c r k (the roots of the denominator polynomial are distinct), H ( z ) may be expanded as a sum
of p first-order factors as follows:




where the coefficients At and a k are, in general, complex. This expansion corresponds to a sum of p first-order
system functions and may be realized by connecting these systems in parallel. If h ( n ) is real, the poles of H ( z )
will occur in complex conjugate pairs, and these complex roots in the partial fraction expansion may be combined
to form second-order systems with real coefficients:




Shown in Fig. 8-10 is a sixth-order filter implemented as a parallel connection of three second-order direct form I1
systems. If p 5 q, the partial fraction expansion will also contain a term of the form



which is an FIR filter that is placed in parallel with the other terms in the expansion of H(z).
                               IMPLEMENTATION OF DISCRETE-TlME SYSTEMS                           [CHAP. 8




                            Fig. 8-10. A sixth-order IIR filter implemented as a parallel con-
                              nection of three second-order direct form 11 structures.



8.4.4 Transposed Slruclures
The transposition theorem states that the input-output properties of' a network remain unchanged after the
following sequence of network operations:
    1. Reverse the direction of all branches.
    2. Change branch points into summing nodes and summing nodes into branch points.
    3. Interchange the input and output.
Applying these manipulations to a network results in what is referred to as the transposed form. Shown in
Fig. 8-1 1 are second-order transposed direct form I and direct form I1 filter structures.


8.4.5 Allpass Filters
An allpass filter has a frequency response with a constant magnitude:

                                               IH,,(&")J=~           allw

If the system function of an allpass filter is a rational function of z, it has the form
                              IMPLEMENTATION OF DISCRETE-TIME SYSTEMS




                                                         VJ)
                      Fig. 8-11. Transposed direct form ti lter structures. [ u )Transposed direct
                        form I. (b) Transposed direct form 11.



If h ( n ) is real-valued, the complex roots occur in conjugate pairs, and these pairs may be combined to form
second-order factors with real coefficients:




A direct form I1 implementation for one of these sections is shown in Fig. 8- 12. Because each section only has
two distinct coefficients, ak and Bk, it is possible to implement these sections using as few as two multiplies.




                            Fig. 8-12. A second-order section of an allpass ti lter imple
                              mented in direct form 11.
298                               IMPLEMENTATION OF DISCRETE-TIME SYSTEMS                                        [CHAP. 8


8.5 LATTICE FILTERS
Lattice filters have a number of interesting and important properties that make them popular in a number of
different applications. These properties include modularity, low sensitivity to parameter quantization effects,
and a simple criterion for ensuring filter stability. In the following sections, we present the lattice filter structure
for FIR ti lters, all-pole filters, and filters that have both poles and zeros.


8.5.1 FIR Lattice Filters
An FIR lattice filter is a cascade of two-port networks as shown in Fig. 8-13. Each two-port network is defined
by the value of its reflection coeficient, r k .The two inputs, fk-, ( n ) and g k - ~ ( n )are
                                                                                            , related to the outputs fk(n)
and g k ( n )by a pair of coupled difference equations




with the input to the first section being fo(n) = g o @ ) = x ( n ) .




                                                              (h)
       Fig. 8-13. A pth-order FIR lattice filter. (a)The two-port network for each lattice filter module. (b)A cascade
         of p lattice filter modules.


      With A k ( z )the system function relating the input x ( n ) to the intermediate output f k ( n ) ,



these difference equations may be solved by induction to yield the following recurrence formula for A k ( z ) :



which is called the step-up recucrion. The recursion is initialized by setting A o ( z ) = 1. This recurrence formula
also defines a recurrence relation for the coefficients a k ( i )of A k ( z ) ,which is
CHAP. 81                            IMPLEMENTATION O F DISCRETE-TIME SYSTEMS


A simple way to write this recursion is in terms of vectors as follows:




EXAMPLE 8.5.1 For a second-order FIR lattice tiller with reflection coefficient< r I = t and r2=              i, the system function
relating x(n) to f l(n) is
                                 A'(:) = An(:) + r l ; ' ~ , , (I ) := 1 + i2 --           '
and the second-order system function relating . r ( ~ r )to fz(n) is




     The recurrence formula in Eq. (8.5) provides an algorithm to find the system function A , ( z ) from the
reflection coefficients r k ,k = 1,2. . . . . p. To find the reflection coefficients r r for a given system function
A ,(z), we use the s t e p d o w n recu~siotz,which is given by




In terms of the coefficients a k ( i ) ,this recursion is




The reflection coefficients are then found from the polynomials A k ( z )by setting T L = u k ( k ) .

EXAMPLE 8.5.2 To find the reflection coefticients T I and 1':               corresponding to the second-order FIR filter A z ( z ) =
1 - f z - 2 , we begin by setting
                                                          Tz = n 2 ( 2 )=   -:
Next, we find A 1 ( z ) us~ngthe step-down recursion.




Because cl,(l) = 0. r l = 0. Therefore, the reflection coefficients are          = 0 and I-2 = -l2 '

     So far, we have only considered the system function relating the input .u(n) to the output f,,(n). A similar
set of equations relate the input x ( n ) to the output R , , ( I I ) With



the relationship between the system function A p ( z )and A',,(z)is as follows:
300                              IMPLEMENTATION OF DISCRETE-TIME SYSTEMS                                          [CHAP. 8

Thus, f,(n) and g p ( n )are related by an allpass filter, F,(z) = Hu,f(z)G,(z), where




     An important property of the lattice filter is that the roots of A,(z) will lie inside the unit circle if and only
if the reflection coefficients are bounded by I in magnitude:



This property is the basis for the Schur-Cohn stability test for digital filters. Specifically, a causal filter with a
system function



will be stable if and only if the reflection coefficients associated with A(z) are bounded by 1 in magnitude.


8.5.2 All-Pole Lattice Filters
The structure for an all-pole lattice filter is shown in Fig. 8-14. As with the FIR lattice, a pth-order all-pole
filter is a cascade of p stages, with each stage being a two-port network that is parameterized by its reflection
coefficient rk.The two inputs, f k ( n ) and gk-1 ( n ) ,are related to the two outputs f L F (I n )and g k ( n )by a pair of
coupled difference equations:

                                           fk-l(n) = fh(n) - r k ~ k - l ( n- 1)
                                             gk(n) = ~ k - l ( n- 1 )   + rkfk(n)
The system function relating the input x ( n ) to the output y ( n ) is




where A,(z) is the polynomial that is generated by the recursion given in Eq. (8.5). In addition, note that the
system function relating x ( n ) to w ( n ) is an allpass filter with a system function Hap(z)given in Eq. (8.7).




      Fig. 8-14. A pth-order all-pole lattice filter. (a)The two-port network for the kth stage of the all-pole lattice
        filter. (b) Cascade of p lattice stages.
CHAP. 81                          IMPLEMENTATION OF DISCRETE-TIME SYSTEMS


8.5.3 IZR Lattice Filters
If H ( z ) is an IIR filter with p poles and q zeros,




with q 5 p, a lattice filter implementation of H ( z ) consists of two components. The first is an all-pole lattice
with reflection coefficients r l ,rz,. . . , F, that implements I / A p ( z ) . The second is a tapped delay line with
coefficients cq(k). The structure is illustrated in Fig. 8-15 for the case in which p = 4. The relationship between
the lattice filter coefficients cq(k)and the direct form coefficients bq(k) is given by




Similarly, a recursion that generates the coefficients cq(k)from the coefficients h q ( k )is




This recursion is initialized with c q ( q )= bq(9).




EXAMPLE 8.5.3         A third-order low-pass elliptic filter with a cutoff frequency of w,. = 0 . 5 ~has a system function




To implement this filter using a lattice filter structure, we first transform the denominator coefficients into reflection coeffi-
cients. Using the step-down recursion, we find



with the second-order system function given by



and the first-order system function
302                                IMPLEMENTATION O F DISCRETE-TIME SYSTEMS                                    [CHAP. 8


Next, the coefficients q ( k ) are found using the recursion given in Eq. (8.9). Beginning with



we then have




This leads to the lattice filter implementation illustrated below.
      s(n)




8.6 FINITE WORD-LENGTH EFFECTS
In implementing a discrete-time system in hardware or software, it is important to consider the finite word-length
effects. For example, if a tilter is Lo be implemented on a tixed-point processor, the filter coefficients must be
quantized lo a finite number of bits. This will change the frequency response characteristics of the filter. In this
section, we look at the finite precision effects in digital tilter implementations.


8.6.1 Binary Representation of Numbers
There are two basic systems for representing numbers in a digital system: fixed point and floating point. There
is a trade-off in which type of representation to use. The dynamic range that is available in a floating-point
representation IS much larger than with fixed-point numbers. However, fixed-point processors are typically faster
and less expensive. Below, we briefly describe these number representations.

Fixed Point

In the binary representation of a real number, x, using B            +
                                                            I bits, there are three commonly used formats: sign
magnitude, one's complement. and two's complement, with two's complement being the most common. In these
systems, the only difference is in the way that negative numbers are represented.
      I.     Sign magnitude: With a sign-magni~udeformat, a number x is represented as




             where X,, is an arbitrary scale factor and where each of the bits hi are either 0 or 1. Thus, ho is the sign
             bit, and the remaining bits represent the magnitude of the fractional number. Bit h l is called the most
             sign$canr bit (MSB).   and hB is called the leusr significant bit (LSB). For example, with X, = 1,




             and                                      - ,y = -0.8125 = 1.1 1010
CHAP. 81                       IMPLEMENTATION OF DISCRETE-TIME SYSTEMS                                         303


    2.   One's complement: In one's complement form, a negative number is represented by complementing
         all of the bits in the binary representation of the positive number. For example, with X,, = I and
         x = 0.8125 = 0.1 1010,
                                          -X = -0.8125 = 0.11010 = 1.00101

    3.   Two's conzplement: With a two's complement format, a real number x is represented as




         Thus, negatlve numbers are formed by complementing the bits of the positive number and adding I to the
         least significant bit. For example, with X , = I, the two's complement representation of .r = -0.8125
         is
                                      x = -0.8125 =0.I1010+0.00001 = 1.00110
         Note that with B   + I bits, the smallest difference between two quantized numbers, the resolution, is

         and all quantized numbers lie on the range -X,,    5 x < X,,


Floating Point
                       +
For a word length of B I bits in a fixed-point number system, the resolution is constant over the entire range of
numbers, and the resolution decreases ( A increases) in direct proportion to the dynamic range, 2X,,. A floating-
point number system covers a larger range of numbers at the expense of an overall decrease in resolution, with
the resolution varying over the entire range of numbers. The representation used for floating-point numbers is
typically of the form
                                                  x = M ,2E
where M, the mantissa, is a signed BM-bit fractional binary number with 5 I M I < I . and E , the exponent, is
a BE-bit signed integer. Because M is a signed fraction, it may be represented using any of the representations
described above for fixed-point numbers.

Quantization Errors in Fixed-Point Number Systems
In performing computations within a fixed- or floating-point digital processor, it is necessary to quantize numbers
by either truncation or rounding from some level of precision to a lower level. For example, because multiplying
two 16-bit fixed-point numbers will produce a product with up to 3 1 bits of precision, the product will generally
need to be quantized back to 16 bits. Truncation and rounding introduce a quantization error



where x is the number to be quantized and Q[.Y]is the quantized number. The characteristics of the error depend
upon the number representation that is used. Truncating numbers that are represented in sign-magnitude form
result in a quantization error that is negative for positive numbers and positive for negative numbers. Thus, the
quantization error is symmetric about zero and falls in the range




where                                             A =~ , , 2 - ~

On the other hand, for a two's complement representation, the truncation error is always negative and falls in the
range
                                                -A(e(O
304                            IMPLEMENTATION OF DISCRETE-TIME SYSTEMS                                       [CHAP. 8


With rounding, the quantization error is independent of the type of fixed-point representation and falls in the
range


For floating-point numbers. the mantissa is either rounded or truncated, and the size of the error depends on the
value of the exponent.


8.6.2 Quantization of Filter Coefficients
In order to implement a filter on a digital processor. the filter coefficients must be converted into binary form.
This conversion leads to movements in the pole and zero locations and a change in the frequency response of
the filter. The accuracy with which the filter coefficients can be specified depends upon the word length of the
processor, and the sensitivity of the filter to coefficient quantization depends on the structure of the filter, as well
as on the locations of the poles and zeros.
     For a second-order section with poles at z = r e f J e ,



the filter coefficients in a direct form realization are



                                     +
If a(1) and a(2) are quantized to B 1 bits, the real part of the pole location is restricted to 2B+' possible values,
and the radius squared is restricted to 2 B values. The set of allowable pole locations for a bbit processor is
shown in Fig. 8- 16.




                           Fig. 8-16. The set of allowable pole locations in the first quadrant
                             of the z-plane for a second-order 11R filter implemented in direct
                             form using a 4-bit processor.

      A general sensitivity analysis of a pth-order polynomial
CHAP. 81                        IMPLEMENTATION OF DISCRETE-TIME SYSTEMS                                           305

shows that the root locations are more sensitive to coefficient quantization errors when the roots are tightly
clustered. For example, if the coefficients a(k) are quantized,




then the sensitivity of the location of the ith pole to changes Aa(k) in the coefficients a(k) is approximately

                                                        "a,
                                               Aai *             Aa(k)
                                                       k=l



With


where




then




Thus, if the poles are tightly clustered, la; - njI is small, and small changes in a ( k )will result in large changes
in the pole locations.
     The movement of the poles may be minimized by maximizing the distance between the poles, lai - a / 1 . This
may be accomplished by implementing a high-order filter as a combination of first- or second-order &stems.
For example, with a cascade of second-order sections. each pair of complex conjugate poles and zeros may be
realized separately, thereby localizing the coefficient quantization errors to each section.
     For an FIR filter,

                                                H (z) =       h(n)zCn

when the coefficients are quantized, the system function becomes




Thus, the quantization errors may be modeled as H ( z ) in parallel with A H ( z ) as shown in Fig. 8-17. If we
                                                                                                            +
assume that the coefficients h(n)are less than I in magnitude, and that the coefficients are rounded to B 1 bits,


Therefore, a loose bound on the error in the frequency response is




    As with IIR filters, if the zeros are tightly clustered, the zero locations will be sensitive to coefficient
quantization errors. However, FIR filters are commonly implemented in direct fonn for two reasons:
       1. The zeros of FIR filters are not generally tightly clustered.
       2. In direct form, linear phase is easily preserved.
                                IMPLEMENTATION OF DISCRETE-TI ME SYSTEMS                                      [CHAP. 8




                             Fig. 8-17.   Model for the coefticient quunliza~ionerror in FIR
                               filters.

8.6.3 Round-Off Noise
Round-off noise is introduced into a digital filter when products or sums of products are quantized. For example,
                                                                     +
if two ( B + I)-bit numbers are multiplied, the producl is a ( 2 8 I)-bit number. I f the product is to be saved in
                                                                                        +
a ( B + I)-bit register or used in a ( B + I)-bit adder, it must be quantized to ( B I)-bits, which results in the
addition of round-qfnoiw. This round-off noise propagates lhrough the filter and appears at the output of the
filter as round-off noise. I n this section, we illustrate the analys~sof round-off noise effects by example.
      Consider the second-order IIR filter ~mplementedin direct form I shown in Fig. 8-lS(u). The difference
equation For this network is




                                                       +
If we assume that all numbers are represented by B I fixed-point numbers and that the network uses ( B I)-bit   +
                  +                                              +
adders, each ( 2 R I)-bit product must be quantized to B I bits by either truncation or rounding. Fig. 8-18(h)
shows the quantizers explicitly. The difference equation corresponding to this system is the nonlinear equation




If the quantizers are replaced with noise sources that are equal to the quantization error, we have an alternative
representation shown in Fig. 8-18(c). This representation is particularly useful when it is assumed that the
quantization noise has the following properties:
     1.Each quantization noise source is a w i d e - , ~ e nstationary
                                                             s~        white n o i s ~process.
    2. The probability distribution Function of each noise source is uniformly distributed over the quantization
       interval.
    3. Each noise source is uncorrelated with the input to the quantizer. all other noise sources, and the input
       to the system.
          +
With B I bits, and a fractional representation for all numbers, the second property implies that the quantization
noise for rounding has a zero mean and o variance equal to

                                                       2 - 1 2-20
                                                     (T.
                                                       (
                                                           --
                                                            I?


     To analyze the effect of the round-off noise sources at the output of the filter, it is necessary to know how
noise propagates through a filter. If the input to a linear shift-invariant filter with a unit sample response h(n) is
wide-sense stationary white noise, e(n). with a mean nr, and a variance     4.  the filtered noise, f (11) = h(n) * e(n),
is a wide-sense stationary process with a mean
CHAP. 81             IMPLEMENTATION OF DISCRETE-TIME SYSTEMS




                                   t
                                 e?W
                                                                  t
                                                                edn)
                                                  (c)
           Fig. 8-18. Analysis of round-off noise. (a) A second-order direct form 1
             filter. (b)Quantization of products in the filter. ( c )An additive noise model
             for the round-off noise. .
308                                IMPLEMENTATION OF DISCRETE-TIME SYSTEMS                                               [CHAP. 8


and a variance




The variance may also be evaluated using 2-transforms as follows:




EXAMPLE 8.6.1         Consider the first-order all-pole tilter with a system function

                                                                1
                                                           H(z)=-
                                                                   1 - cuz-'

If the input to this filter, e ( n ) , is zero mean white noise with a variance a,?,the variance of the output will be
                                                                       IXi
                                                                                                I
                                                          h(n)12 = 4
                                                                                        7
                                       a; = a,,                              lul2''= a,:--
                                                 ,,=-C€                =O                    1 - laI2

    Returning to the direct form I filter, note that the model in Fig. 8-18(c) may be represented in the equivalent
form shown in Fig. 8-19 where




                              Fig. 8-19.   An additive noise model after combining noise sources.

Thus, the quantization noise is filtered only by the poles of the filter, and the output noise satisfies the difference
equation




If the noise sources are uncorrelated, as assumed by the third property above, the variance of e,(n) is the sum of
the variances of the five noise sources, or




Assuming that the filter is stable, and that the poles of the filter are complex,
CHAP. 81                       IMPLEMENTATION OF DISCRETE-TIME SYSTEMS


the variance of the output noise is

                                                   1
                      a,2.= 5 --                          z-' d z




Using Cauchy's residue theorem to evaluate this integral, we find that




Note that as the poles move closer to the unit circle, r + 1, the variance of the output noise increases.
                                                                               +
     The noise performance of digital filters may be improved by using (2B 1)-bit adders to accumulate sums
of products prior to quantization. In this case, the difference equation for the direct form I network becomes




                                                           +
Thus, the sums are accumulated with an accuracy of 2B 1 bits, and the sum is then quantized to B 1 bits in+
                                             +                                                 +
order to store j(n - I) and j ( n - 2) in ( B ])-bit delay registers and to generate the (B I)-bit output j(n).
Because there is only one quantizer, which quantizes the sum of products. the variance of the noise source in
Fig. 8-19 is reduced from 50; to 0,:.


8.6.4 Pairing and Ordering
For a fiIter that is implemented in cascade or parallel form, there is considerable flexibility in terms of selecting
which poles are to be paired with which zeros and in selecting the order in which the sections are to be cascaded
for a cascade structure. Pairing and ordering may have a significant effect on the shape of the output noise power
and on the total output noise variance. The rules that are generally followed for pairing and ordering are as
follows:
    1. The pole that is closest to the unit circle is paired with the zero that is closest to it in the z-plane, and
       this pairing is continued until all poles and zeros have been paired.
    2. The resulting second-order sections are then ordered in a cascade realization according to the closeness
       of the poles to the unil circle. The ordering may be done either in terms of increasing closeness to the
       unit circle or in terms of decreasing closeness to the unit circle. Which ordering is used depends on
       the consideration of a number of factors, including the shape of the output noise and the output noise
       variance.




Another issue in fixed-point implementations of discrete-time systems is overflow. If each fixed-point number
is taken to be a fraction that is less than 1 in magnitude, each node variable in the network should be constrained
to be less than I in magnitude in order to avoid overflow. If we let h k ( n )denote the unit sample response of the
system relating the input x ( n ) to the kth node variable, wk(n),
310                                IMPLEMENTATION O F DISCRETE-TIME SYSTEMS                                               [CHAP. 8


where X,,, is the maximum value of the input x ( n ) . Therefore, a sufficient condition that Iwk(n)l < I so that
no overflow occurs in the network is




for all nodes in the network. If this is not satisfied, x ( n ) may be scaled by a factor s so that




EXAMPLE 8.6.2         In the first-order direct form I1 network shown below.

                                   s(n)        Node I                         Node 2        YO,)




there are two nodes that represent adders, which are labeled "Node I" and "Node 2." The unit sample response from the
input to the first node is
                                                   h (11) = (0.8)"u(n)


Therefore.


The unit sample response from the input to the second node is




Thus, with a fractional representation for .r(n). a sufficient condition for no overflow to occur is that X,,,   5 0.2.




                                                   Solved Problems

Structures for FIR Systems

8.1     Find the frequency response of the system defined by the following network:
                                                        z-I                      - I                  2-I
CHAP. 81                          IMPLEMENTATION O F DISCRETE-TIME SYSTEMS


      We recognize this structure as a linear phase system with a unit sample response

               h ( n ) = -O.I[S(n)   + 6(n - 6)1 + 0.2[6(n- I ) + 6(n - 5 ) ].t0.5[6(n- 2) + 6(n - 4)] + 6(n - 3 )




8.2   A linear shift-invariant system has a unit sample response given by

                                                          h(0) = -0.01
                                                          /?(I)= 0.02
                                                          h(2) = -0.10
                                                          h(3) =     0.40
                                                          h(4) = -0.10
                                                          h(5) =     0.02
                                                          h(6) = -0.01


      (a) Draw a signal flowgraph for this system that requires the minimum number of multiplications.
      (b) If the input to this system is bounded with Ix(n)l 4 I for all n , what is the maximum value that the
          output. y(n ), can attain?

      (a) Because this system is a linear phase filter, it may be implemented with a network that has only four multiplies
          and six delays as shown in the figure below.




      ( b ) With an input x i n ) , the output is




           Therefore, the magnitude of y(n) is upper bounded by




           With Ix(n)l < 1 for all n,
312                          IMPLEMENTATION OF DISCRETE-TIME SYSTEMS                                         [CHAP. 8


8.3   The unit sample response of an FIR filter is

                                               h(n) =
                                                                  otherwise

      (a) Draw the direct form implementation of this system.
      (b) Show that the corresponding system function is




           and use this to draw a flowgraph that is a cascade of an FIR system with an IIR system
      (c) For both of these implementations, determine the number of multiplications and additions required
          to compute each output value and the number of storage registers that are required.

      (a) With a unit sample response
                                                  h(n) = an[u(n) - u(n - 7)]
          the direct form implementation of this system is as shown below.




      (b) The system function is




          which converges for Izl z 0. Thus, H ( z ) may be implemented as a cascade of an IIR system,




          with an FIR system,
                                                        H2(z)= 1 - u7z-'
          Therefore, an alternative implementation of this system is as shown below.




          where the branch labeled with z-6 represents a delay by 6.
      (c) The direct form structure requires six delays, which is the minimum number necessary for this system, six
          multiplications, and six additions. The cascade, on the other hand, requires one additional delay but only two
          multiplications and two additions.


8.4   A DSP chip used in real-time signal processing applications has an instruction cycle time of 100 ns. One
      of the instructions in the instruction set, MACD, will fetch a value from data memory (input signal), fetch
      another data value from program memory (filter coefficient), multiply the two numbers together, add the
      product to the accumulator, and then move a number in data memory into the next memory location (this
      corresponds to a shift or delay of the data sequence). Thus, for an FIR filter of order N, to find the value
CHAP. 81                       IMPLEMENTATION OF DISCRETE-TIME SYSTEMS                                                   313

      of the output at time n , we need one instruction to read the new input value, x ( n ) , into the processor, we
                +
      need (N 1) MACD instructions to evaluate the sum




      and we need one instruction to output the value of y(n). In addition, there are eight other instruction
      cycles required for each n in order to perform such functions as setting up memory pointers, zeroing the
      accumulator, and so on.
      (a) With these requirements in mind, determine the maximum bandwidth signal that may be filtered
          with an FIR filter of order N = 255, in real time, using a single DSP chip.
      (b) A speech waveform x , ( t ) is sampled at 8 kHz. Determine the maximum length FIR filter that may
          be used to filter the sampled speech signal in real time.

                                                +
      (a) For the given DSP chip, we need N 1 I instruction cycles to compute a single output value for an FIR filter of
          order N. Therefore, with N = 255, we need 266 cycles, or 266 x       s to compute each output point. Thus,
          the signal to be filtered cannot be sampled any faster than


                                                    '= 266 x
                                                              I
                                                                      Hz = 37.6 kHz

           Therefore. the bandwidth of the input signal is limited to 18.8 kHz (i.e., X,(f )must be zero for If I z 18.8 kHz).
      ( b ) Sampling speech at 8 kHz produces 8000 samples per second. Therefore, we have T, = 1/8000 = 0.125 ms
            to compute each output. This allows for M = (0.125 x 10-"/10-' = 1250 instruction cycles. Thus, we may
            implement an FIR filter of order N = 1250 - I 1 = 1239.


      Find the unit sample response, h(n), of the network drawn below and find the 64-point DFT of h(n).
                              IMPLEMENTATION OF DISCRETE-TIME SYSTEMS                                          [CHAP 8


      This is a frequency sampling structure for an FIR filter with a unit sample response of length N = 64. Because the
      gain of the first-order section with a pole at z = I is equal to 1, H(0) = I. With second-order networks of the form




      with                                A(k) = H (k)    + H(N    - k)


                                          B(k) =                      + H(N - k)eJ2nkJN
      we see that H(1) and H(2) are nonzero, along with H(62) and H(63). We may therefore solve these equations for
      H(1), H(2), H(62), and H(63) as follows. Because A(I) = 2,



      and because B(1) = 2cos(rc/32),



      Thus, we have two equations in two unknowns, which may be written in matrix form as follows:




      Solving these equations we find that H(1) = H(63) = 1. Similarly, with A(2) = 2 and B(2) = 2cos(n/32), we
      find that H(2) = H(62) = 1. Therefore, the 64-point DFT of h(n) is

                                                          1       k = 0. I . 2, 62.63
                                              H(k) =
                                                          0       else

      and the unit sample response is
                                          1   63
                                h(') = -           H(k) eJ2nt1"lh -
                                                                  -   ,,+ & cos nrr + & cos nrr
                                                                                  -         -
                                         64 ,=o                                   32        16


8.6   Consider the FIR filter with unit sample response



                                                   1O                          otherwise
      Draw the frequency sampling structure for this filter and compare the computational complexity of this
      structure to a direct form realization.
      The 64-point DFT of the unit sample response is

                                                              1          k=O
                                                   H(k)=[;i              k=l,63
                                                                         else

      Therefore, for the frequency sampling structure, we write the system function in the following form,
CHAP. 83                      IMPLEMENTATION OF DISCRETE-TIME SYSTEMS


      This leads to the frequency sampling structure shown below.




      This implementation has 67 delays (4 more than the minimum), and it requires 3 multiplies and 6 adds to evaluate
      each output y(n). A direct-form realization, on the other hand. has 63 delays and, because h ( n ) has linear phase,
      requires 32 niultiplies and 63 adds to compute each output value.


8.7   The frequency sampling structure for an FIR filter is based on expressing the system function in the form




      where H ( k ) are samples of the frequency response at wk = 2 7 r k / N . If h ( n ) is real, the symmetry of the
      DFT may be used to simplify this structure so that all of the coefficients are real. For example, Eq. (8.2)
      specifies a structure when N is even. Derive the corresponding structure when N is odd.
      If N is odd, we may write H(z) as follows:




      where


      Note that, due to the conjugate symmetry of the DFT, H(k) = H*(N - k), the coefficients A(k) and B(k) are real.


8.8   As discussed in Chap. 3, sample rate reduction may be realized by cascading a low-pass filter with a
      down-sampler as shown in the following figure:
                        IMPLEMENTATION OF DISCRETE-TIME SYSTEMS                                             [CHAP. 8


Because the down-sampler only retains one out of every M outputs from the low-pass filter H ( z ) , if M
is large, most of the filter outputs will be discarded. Therefore, if H ( z ) is an FIR filter, it is not necessary
to evaluate the discarded values, and efficient implementations of the decimator are possible.
(a) Assume that H ( z ) is an FIR filter with h ( n ) = 0 for n < 0 and n 2 N. If H ( z ) is implemented
    in direct form, draw a flowgraph for the decimator, and determine how many multiplications and
    additions are necessary to compute each output value y(n).
(b) Exploit the fact that only one out of every M values of w ( n )is saved by the down-sampler to derive a
    more efficient implementation of this system, and determine how many multiplications and additions
    are necessary to compute each value of y(n).
(c) If H ( z ) is an IIR filter, are efficient implementations of the decimator still possible? If so, for which
    structures, and by what factor are they more efficient?

(a) With a direct form implementation of the FIR filter H (2). the decimator is as shown below.




    Because we need N multiplies and N - 1 adds to find each value of w(n),and because only one value of y(n) is
    computed for every M values of w ( n ) ,M N multiplies and M ( N - 1) adds are performed for each value of y ( n ) .
(b) Because the down-sampler only saves one out of every M values of w(n), the decimator may be implemented
    more efficiently by only evaluating those values of w ( n ) that are passed through the down-sampler. This may
    be accomplished by embedding the down-sampler within the FIR filter as illustrated below.
CHAP. 81                        IMPLEMENTATION OF DISCRETE-TIME SYSTEMS                                                    317

           Now. because only one out of every M input samples is multiplied by h ( k ) , this implementation only requires
           N multiplies and N - 1 adds to compute each value of y ( n ) . Thus. the number of multiplies and adds has been
           reduced by a factor of M.
      (c) If H ( z ) is an IIR filter, it is not possible, in general, to commute the down-sampling operation with branch
           operations as was done with the FIR filter. For example, if




           we have the system illustrated below.




           However, in order to evaluate a given value of w ( n ) . the previous value, w ( n - I), must be known. Therefore,
           the down-sampler cannot be commuted with any branch operations within the filter, because this would discard
           values of w ( n ) that are required to compute future values. On the other hand, consider the direct form I1
           implementation of




           as illustrated below.




           Because                                 w ( n ) = b(O)v(n)   +b(l)u(n - 1 )


           the down-sampler may be commuted with the branch operations that form the multiplications by b ( 0 ) and b(1)
           as illustrated in the following figure:




           To compute each value of y ( n ) , this structure requires that we find M values of v ( n ) , which requires M multi-
           plies and M adds, and it requires two multiplies and one add to find y ( n ) from u(n). Thus, the total number of
                               +                             +
           computations is M 2 multiplications and M I additions. The direct form 11 structure is the only one that
           allows for a savings in computation. For direct form I, transposed direct form 1, and transposed direct form 11.
           the down-sampler cannot be commuted with any branch operations.
318                             IMPLEMENTATION O F DISCRETE-TIME SYSTEMS                                            [CHAP. 8


8.9   The previous problem examined the simplifications that are possible in implementing a decimator. Similar
      savings are possible for the interpolator shown in the figure below.




      Because the up-sampler inserts L - I zeros between each sample of x ( n ) , assume that H ( z ) is the system
      function of an FIR filter, and use the fact that many of the values of w ( n ) are equal to zero to derive a
      more efficient implementation of this system.
      A direct implementation of the cascade of an up-sampler with an FIR filter using the transposed direct form is
      illustrated in the figure below.




      Note that the evaluation of each value of y ( n ) requires N multiplications and N - I additions. However, only one
      out of every L values that are being multiplied by the coefficients h ( n ) is nonzero. Therefore, it is more efficient to
      modify the structure so that the filtering is performed prior to the insertion of zeros. With the transposed direct form
      structure, we may commute the up-sampler with the branch multiplies as illustrated in the following figure:




      With this simplification, only N multiplies and N - 1 adds are required for every L output values.
CHAP. 81                         IMPLEMENTATION OF DISCRETE-TIME SYSTEMS


Structures for IIR Systems

8.10   Consider the causal linear shift-invariant filter with system function




       Draw a signal flowgraph for this system using
       (a) Direct form I
       (b) Direct form 11
       (c) A casczlde of first- and second-order systems realized in direct form I1
       (4 A cascade of first- and second-order systems realized in transposed direct form I1
       (e) A parallel connection of first- and second-order systems realized in direct form I1

       (a) Writing the system function as a ratio of polynomials in z - I ,


                                                    H (z) =
                                                                        +
                                                                      I 0.8752-'
                                                                        +
                                                              I - 0.5~-I 0.76r2 - 0 . 6 3 2 ~ ~

            it follows that the direct form I realization of H ( z ) is as follows:




            For direct           realization of H ( z ) ,we have

                                        0
                                         x(n)
                                                r        "        -      -
                                                                         "        -      a
                                                                                         "
                                                                                                  ~ ( n )
                                                                                                     0


                                                                         " 2-I
                                                         li                              li



                                                         0         -
                                                                 0.5
                                                                   A
                                                                                 0.875



                                                                         " z-I
                                                         li


                                                                -0.76
                                                         <)
                                                                  A
                                                                         c1

                                                                         " 2-I
                                                         1,



                                                                   -
                                                                0.63
                                                                         0
                            IMPLEMENTATION O F DISCRETE-TIME SYSTEMS                                                         [CHAP. 8


(c) Using a cascade of first- and second-order systems realized in direct form 11, we have a choice of either pairing
    the zero with the first-order factor in the denominator or with the second-order factor. Although it does not
    make a difference from a computational point of view, because the zero is closer to the pair of complex poles
    than to the pole at z = 0.7, we will pair the zero with the second-order factor. With this pairing, the realization
    of H ( z ) is as follows:




(d) If we change the direct form 11 systems in part ( r )to transposed direct form 11, we have the realization shown
    below.
                x(n)
                0       -          n
                                   "                 "       -         ,
                                                                       "-        --                                 - y(n)
                            z-I    ,,                1I                11
                                                                                         ,,   2-I              1r




                                   0         -
                                           0.7                                  0.875
                                                                                                       -
                                                                                                    -0.2
                                                                                                      A




                                                                                         ,,z-I
                                                                                         0            -
                                                                                                    0.9
                                                                                                      A




(e) For a parallel structure, H ( z ) must be expanded using a partial fraction expansion:

                                          1 + 0.875zr1                      -         A + Bz-I                     C
                   H (z)=
                              (1   + 0.2zr1 + 0 . 9 z r 2 ) ( l - 0 . 7 ~ - I )- 1 + 0 . 2 -~I + 0.9zr2    +    1 -0.7~-I

     The constants A, B , and C may be found as follows. Recombining the two terms in the partial fraction expansion
     as follows.




     and equating the coefficients in the numerator of this expression with the numerator of H ( z ) , we have the
     following three equations in the three unknowns A , B , and C :




     Solving for A , B, and C we find



     and, therefore, the partial fraction expansion is
CHAP. 81                        IMPLEMENTATION OF DISCRETE-TIME SYSTEMS


            Thus. parallel structure for H(z) is shown below.
                                                    0.7206




8.11   Consider the filter structure shown in the figure below.
                                                             -
                           x(n)
                           0      :                   -
                                                      L      "
                                                             I              ,.           "     --   ~ ( n )




                                               4i            "    z-I
                                                     0.2
                                                        -
                                                        A    -
                                                             P.            -2
       Find the system function and the unit sample response of this system.
       For the three nodes labeled in the flowgraph below.
                                                             -
                                                             L




                                           I         w(n)
                                                                                      Node 3



                                  Node I   /I I


       we have the following node equations:




       Using z-transforms, the first equation becomes




       Taking the z-transform of the second equation, and substituting the expression above for W ( z ) ,we have
                                IMPLEMENTATION OF DISCRETE-TIME SYSTEMS                                         [CHAP. 8


       Finally, taking the z-transform of the last equation, we find




       Therefore, the system function is

                                                          H ( z )=
                                                                       +
                                                                      2 1.82-'
                                                                      I - 0.22-'

       and the unit sample response is
                                            h ( n ) = 2(0.2)"u(n)     + 1.8(0.2)"-'u(n - I)

8.12   Find a direct form I1 realization for the following network:




       To solve this problem, we begin by writing the node equations for each of the adders in the network. If we label the
       three nodes that are adders as in the figure below,

                                    x01)
                                   0                "
                                                    n                 n
                                                                      "          -
                                                    "NO)              " MI)              " h(2)
                                                                              --I
                                                           z- I
                                                            -                    -                - y(n)
                                           Node 1   >
                                                                                              '
                                                                                                  L




                                                         Node 2
                                                                  f                           Node 3
                                                        dl)               a(2)           ,,

                                                              -                      -
                                                                                     a




       and denote the output of the first node by wl(n), and the output of the second by wz(n),we have the following three
       equations for the three node variables,




       Substituting the first equation into the second, we have



       Then, substituting this equation into the third equation, we have
CHAP. 81                        IMPLEMENTATION OF DISCRETE-TIME SYSTEMS


       Thus, the direct form I1 structure for this system is as shown below.




8.13   Find a transposed direct form I1 realization for the system described by the difference equation
                                 y ( n ) = 24 Y( n - I ) - i y ( n - 2 ) + x ( n ) - JI x ( n - 1)
       and write down the set of difference equations that corresponds to this realization.
       The transposed direct form I1 realization for this system is as follows:




       With the node variables v l ( n )and v,(n) as labeled in the network above, the difference equations that describe this
       network are as follows:
                                                            +
                                               vl ( n ) = x ( n ) v d n - I )
                                                                   +
                                               v z ( n )= - f x ( n ) 5 v l ( n )- :vl(n - I )
                                              v ( n )= v ~ ( n )


8.14   Find the system function and the unit sample response for the following network, and draw an equivalent
       direct form 11 structure:
324                             IMPLEMENTATION OF DISCRETE-TIME SYSTEMS                                       [CHAP. 8


      This network is a parallel connection of two first-order systems, plus a feed-through connection with a gain of 2.
      Therefore, the system function is the sum of three system functions:




      Thus, the unit sample response is



      To find an equivalent direct form 11 realization, H ( z ) is first expressed as follows:




      Therefore, the direct form 11 structure is as shown in the following figure:
                                                                            4




      Find the system function for the following network, and determine the conditions o n the coefficients a ( ] ) ,
      a(2),a(3),and a(4) that will ensure the stability of the system:




      The first thing to observe is that this system corresponds to a feedback network of the form shown in the following
      figure:
                                    x(n)
CHAP. 81                       IMPLEMENTATION OF DISCRETE-TIME SYSTEMS


      where G(z) is the second-order system shown below.




      Therefore,                                   Y(z) = X(z)   + G(z)Y(z)
                                                                  I
      and                                               H(z)= -
                                                              1 - G(z)

      To find G(z), we begin by writing the node equations for this network:




      Taking the z-transform of the first two equations, we have




      Substituting the second equation into the first gives



      Finally, from the last difference equation, we have




     Therefore.


      and for H(z) we have




     For stability, it is necessary and sufficient that the coefficients [a(2) +a(4)] and [a(l)   + a(3)] lie within the stability
     triangle (see Chap. 5 ) , which requires that
326                            IMPLEMENTATION OF DISCRETE-TIME SYSTEMS                                     [CHAP. 8


8.16   Find the system function of the following network:
                   x(n)                                                    2




       This system is a feedback network that has the following form:




                                  G
                                     x(n)
                                                            G(z)




                                                            -If2


       Therefore, the system function is




       With




       we have




8.17   Find the system function of the following network:
                   x(n)




       The system function of this network may be found by writing down the difference equations corresponding to each
       adder and solving these equations using z-transforms. A simpler approach, however, is to redraw the network as
       follows,
CHAP. 81                        IMPLEMENTATION O F DISCRETE-TIME SYSTEMS                                              327

       which we recognize as a cascade of three second-order networks. Therefore, the system function is the product of
       the system functions of each network in the cascade, and we have




8.18   Consider the network in the figure below. Redraw the flowgraph as a cascade of second-order sections
       in transposed direct form 11.




       To implement lhis system as a cascade of second-order transformed direct form 11 networks, we must first find the
       system function corresponding to this network. Note that this network is of the form shown in the following figure:

                                       -
                                       L
                                                   HI(:)        -
                     XOI)                                                                               ~ ( n )
                     0      :                                                 -            Hs(z)    -
                                                                                                    &




                                                   Hz(-)        -
                                                                L




       where


       Therefore,

       or


                                       -
                                       -
                                                               --



                                           (l   - 0.2:r1 + 0.8:r2)( 1 + 0 . 2 +~ 0.82-I)
                                                                                  ~ ~

       Therefore, the desired network is as shown in the following figure:
                    .~(II)                  2
328                             IMPLEMENTATION OF DISCRETE-TIME SYSTEMS                                        [CHAP. 8


8.19   A digital oscillator has a unit sample response



       The system function of this oscillator is




       (a) Draw a direct form I1 network for this oscillator, and show how the sinusoid may be generated with
           no input and the appropriate set of initial conditions.
       (b) In applications involving the modulation of sinusoidal carrier signals in phase quadrature, it is
           necessary to generate the sinusoids




            Beginning with a system that has a unit sample response h ( n ) = e J n q u ( n ) , separate the difference
            equation for this system into its real and imaginary parts, and draw a network that will generate
            these signals when initialized with the appropriate set of initial conditions.

       (a) A direct form I1 network for the oscillator is as follows:

                                              sin wl




            With the input x ( n ) = &n). the response is y(n) = sin[(n     + I)w]for n 2 0. Equivalently, if the storage
            registers corresponding to the delays are initialized so that



            the zero-input response will be a sinusoid of frequency wo.
       ( h ) A complex exponential sequence y(n) = e J n q u(n) is generated by the difference equation



            with the initial condition
                                                            y(- I ) = e - j q
            Writing this difference equation in terms of its real and imaginary parts, we have




           This equation is equivalent to the following pair of coupled difference equations, which are formed from the
           real part and the imaginary part of the equation:
CHAP. 81                         IMPLEMENTATION OF DISCRETE-TIME SYSTEMS


            A network that implements this pair of equations is shown below.
                                                           z-I




                                                                        V     -
                                                                              L
                                                                                              0
                                                         COS Wg                          .yi(n) = sinnwo




            The initial condition required to generate the desired output is yc - I ) = e - J q , or




8.20   Implement the system



       as a parallel network of first-order direct form structures.
       Factoring the denominator of the system function, we find




       To implement H ( z ) as a parallel network of first-order filters, we must express H ( z ) as a sum of first-order factors
       using a partial fraction expansion. Because the order of the numerator is equal to the order of the denominator, this
       expansion will contain a constant term,



       To find the value of C. we divide the numerator polynomial by the denominator as follows:




       Therefore, C = 2, and we may write H ( z ) as follows:




       Finally, with




       we have, for the coefficients A and B,
                               IMPLEMENTATION OF DISCRETE-TIME SYSTEMS                            [CHAP. 8



       and




       Thus,


       and the parallel network for this system is as shown below.




8.21   The system function of a discrete-time system is




       Draw a signal flowgraph of this system using a cascade of second-order systems in direct form 11, and
       write down the set of difference equations that corresponds to this implementation.
       Expressing H ( z ) as a product of two second-order systems, we have

                                                     I + 22-I + z-=   1   + 2z-' + z - ~
                                          H ( z )=
                                                     1 - z-1 + 12-2   1 + 22-1 + 3 - 2
                                                               8


       which leads to the following cascade implementation for H(z):
CHAP. 81                        IMPLEMENTATION OF DISCRETE-TIME SYSTEMS


       With w(n), vl(n). and v2(n) as labeled in the figure above, the set of difference equations for this network is:




8.22   Consider the fourth-order combfilter that has a system function




       (a) Draw a pole-zero diagram for H (z).
       (b) Find the value for A so that the peak gain of the filter is equal to 2.
       (c) Find a structure for this filter that requires only one multiplier.

       (a) The comb filter has four zeros on the unit circle at
                                                   pk = e~(2k+l)n/4     k = O . 1.2.3

            and four poles at
                                                  ark =                  k = 0, 1,2,3

            A pole-zero diagram for H(z) is shown in the following figure:




       (b) Due to the zeros on the unit circle, the magnitude of the frequency response is zero at wt=(2k       +
                                                                                                              l)n/4 for
           k = 0, 1,2, 3, and it increases monotonically until it reaches a maximum value at the frequencies that are
           midway between the zeros at wk = k1r/2. Therefore, in order for the peak gain to be equal to 2, we want



           which implies that
                                IMPLEMENTATION OF DISCRETE-TIME SYSTEMS                                          [CHAP. 8


       (c) With a system function



            we may implement this system using two multiplies as shown in the figure below.




            Note, however, that the multiplier may be shared as follows:
                              a(n)




            The difference equations for this network are




8.23   The system function of an allpass filter has the form




       The symmetry that exists between the numerator and denominator polynomials allows for special struc-
       tures that are more efficient than direct form realizations in terms of the number of multiplies required to
       compute each output value y(n ).
       (a) Consider the first-order allpass filter,

                                                            H(z) =
                                                                     z-I   +a
                                                                     I   +az-I
            where a! is real. Find an implementation for this system that requires two delays but only one
            multiplication.
       (h) For a second-order allpass filter with h ( n ) real, the system function has the form




            where a and B are real. Derive a structure that implements this system using four delays but only
            two multiplies.
       (a) The direct form realization of a first-order allpass filter requires two multiplies and one delay as shown in the
           figure below.
CHAP. 81                          IMPLEMENTATION OF DISCRETE-TIME SYSTEMS


            To see how the two multiplies may be combined, consider the difference equation for this system:




            Therefore, only one multiplication is necessary if we form the difference x ( n ) - y ( n - I ) prior to multiplying
            by a. Thus, we have the structure illustrated in the figure below that has two delays but only one multiplication.




            Because this structure requires an extra delay compared to direct form, this structure is not canonic.
       ( b ) As with the first-order allpass filter. we may find a two-multiplier realization ol'a second-order allpass filter by
            combining together terms in the difference equation for the allpass filter as follows:




            Thus, only two multiplications are required if we can form the differencess(n - 1 ) - y ( n - 1 ) and . r ( n ) - y ( n -2)
            prior to performing any multiplications. A structure that accomplishes this is given in the figure below.




            Note that with the additional delays, two multiplications are saved compared to a direct form implementation.

Lattice Filters

8.24   Sketch a lattice filter implementation of the FIR filter



       To implement this system using a lattice filter structure, we must find the reflection coefficients that generate the
       polynomial H(z). First, however, it is necessary to normalize H ( z ) so that the first coefficient is unity:



       Now, with

       we see that
                                 IMPLEMENTATION OF DISCRETE-TIME SYSTEMS                                                [CHAP. 8


       Next. we generate the second-order system H r ( z )using the step-down recursion:




       Therefore, r2 = 0.1905. Finally, we have




       and, therefore, I-1 = 0.4. Thus, the lattice filter structure is as shown below.




8.25   Shown in the figure below is an FIR lattice filter.




       ((1)   Find the system function A ( = ) = F ( z ) / X ( z ) relating the input x ( n ) to the output f ( n ) . Does this
              system have minimum phase?
       (b) Repeat part (0)for the system function relating x ( n ) to ~ ( n ) .

       ( a ) To find the system function relating .u(tz) to f ' ( t l ) , we use the step-up recursion. Using the vector form of the
             recursion, we have for the coefficients u l ( k )




              Then, with Tz = 0.4, for a?(/,),we have
CHAP. 81                         IMPLEMENTATION O F DISCRETE-TIME SYSTEMS


            Finally, with r3= 0.2. we have




            Thus.                                A(:) = 1   + 0.78;-' + 0.54z-' + 0.2;-'
            This system will have minimum phase if the zeros of A(z) are inside this unit circle. Although this could be
            determined by factoring A(z), because the reflection coefficients used to generate A ( : ) are bounded by I In
            magnitude. it follows that A ( z ) has minimum phase.
       ( b ) The system function A'(z) = G(-.)/X ( z ) is related to X ( z ) as follows:



            Because the zeros of A1(z)are formed by flipping the zeros of A ( ? )about the unit c~rcle.all of the zeros of A'(:)
            will be o~ctsidethe unit circle and thus will not have minimum phase.


8.26   Let A ( z ) be an FIR filter with lattice filter coefficients



       ( a ) Find the zeros of the system function A ( z ) .
       ( h ) Repeat for the case when r3= - 1 .
       (c) Can a general result be proved for lattice filters that have reflection coefficients Ti with

                                                 ITjl < I      for j = 1,2, ... . p - 1
                                                 ITPI = 1

       ( a ) To find the system function A ( z ) for a given set of reflection coefficients, we use the step-up recursion. For
             a l ( k )we have



            Then, with r2 =    4 we have


            Finally, with T3 = I we have




            Thus.                                     A(z) = 1   + + z - ' + t ~+ z-3
                                                                                  - ~
            The zeros of the system function may be found by factoring A ( z ) . The roots are found to be
                                              pI = - 1       p2 = e~1).4646n     fi3 = C-~().JM6"

            which are on the unit circle.
                          IMPLEMENTATION OF DISCRETE-TIME SYSTEMS                                             [CHAP. 8


(h) If r3= -I.    the system function may be found by modifying the last step of the step-up recursion in pan (a) as
    follows:




     which are again on the unit circle.
(c) If A,,(z) is a pth-order FIR filter with reflection coefficients r, where (r,I < I for j = 1.. . . . p - I , and
    lr,*l= 1,
                                            A,,(z) = A p - I ( ~ )f z - " A ~ - ~ ( ~ - ' )
     and it follows that the polynomial A,(z) is symmetric or antisymmetric, that is.



     Therefore, A,&) has (generalized) linear phase, which implies that all of the zeros of A,@) lie on the unit
                                                                                       .
     circle or in conjugate reciprocal p a n However, if Ir, 1 < I for j = 1.2, . . . p - I, the zeros must lie on the
     unit circle. The reason for this is as follows. The Schur-Cohn stability criterion states that none of the roots of
     A,(z) may lie outside the unit circle if ITj\ 5 1 for j = 1.2, . . . , p. Therefore, if A&) has generalized linear
     phase with no zeros outside the unit circle. then all of the zeros must be on the unit circle.


Draw a lattice filter implementation for the all-pole filter




and determine the number of multiplications, additions, and delays required to implement the filter.
Compare this structure to a direct form realization of H ( z ) in terms of the number of multiplies, adds,
and delays.
To implement this filter usinga lattice filter, we must first derive the reflectioncoefficientsrI.r 2 ,and r,3
                                                                                                             corresponding
to the denominator polynomial. With



it follows that r3= 0.6. Next, using the step-down recursion to find A2(z),we have

                          I
              A2(z) = -[Adz) - r 3 ~ - ' ~ d - ' ) l
                       I - r:
                            1
                    -
                       1 - (0.6)2
                                                +
                                  1 l - 0 . 2 ~ ' 0.4zT2 t 0.61-" - 0 . 6 ~ - ~ -        + 0.4z2 + 0.6z3)]
                                                                                ( 10 . 2 ~

                                       +
                    = I - 0 . 6 8 7 5 ~ ~ '0.8 1 2 5 8
Thus. for r2we have r2 = 0.8 125. Finally, for A'(,-), we have




and, therefore, r I = -0.3793. Thus, the structure is as follows:
CHAP. 81                          IMPLEMENTATION OF DISCRETE-TIME SYSTEMS                                                      337




       This filter structure has three delays and requires five multiplications and five additions to evaluate each value of the
       output, y(n). A direct-form structure also requires three delays but only three multiplications and three additions.


8.28   Without factoring any polynomials, determine whether o r not the following causal filter is stable:


                                    H ( z )=
                                                             1  + 21-' + 2 r 2 + 2 - 3
                                               1 + 1 . 5 8 ~ - '+ 1.638~-2+ 1.556~-"            04-4
       We may easily check the stability of this filter using the Schur-Cohn stability test, which involves checking to
       see whether or not the magnitudes of the reflection coefficients corresponding to the denominator polynomial are
       bounded by 1 in magnitude. With




       it follows that lr41= 0.4 < 1. Using the step-down recursion to find A 3 ( z ) , we have




       Therefore, 1 r3I = I . I > 1, and it follows that the filter is unstable.


8.29   Use the Schur-Cohn stability test to derive the stability conditions




       for a second-order filter
                                                                         b(0)
                                                  H (z)=
                                                             I   +a(1 ) ~ - I + a ( 2 ) ~ - ~
       In order for H ( z )to be stable, it is necessary and sufficient for the reflection coefficients TI and Tzto have a magnitude
       that is less than 1. In t e n s of the first two reflection coefficients, the denominator of H(z) is




       Therefore, because a(2) = Tz, the constraint that )r2(
                                                            < 1 gives us the first condition,




       Next, with
                                                   a(1) = rl + rlrz = II + a(2)lrl
                                   IMPLEMENTATION OF DISCRETE-TIME SYSTEMS                                                 [CHAP. 8


       it follows that




       Because we require that 1 rl1 < I,




       These two equations are equivalent to


       as was to be shown.


8.30   Implement the allpass filter




       using a lattice filter structure.
       To find the lattice filter structure for this allpass filter, we use the step-down recursion to find the reflection coefficients
       corresponding to the denominator polynomial,

                                                A3(z)= I - 0.82-I    + 0.64z-? - 0.512z-~
       First, we note that r3= -0.5 12. Then, we find Az(z) as follows:

                         1
              Az(z) = -[A3(z) - T ~ Z - ~ A ~ ( Z - ' ) ]
                      I - r:
                            1
                    -
                      1 - (0.512)?
                                                      +
                                   [ I - 0.8z-~ 0 . 6 4 ~ ~-' 0.512z--'        + 0 . 5 1 2 ~ - ~ (-1 0.82 + 0.64z2 - 0.512z3)]
                    = 1 - 0.64Olz-'      +
                                        O.3123z-~

       Thus. the second reflection coefficient is r2= 0.3123. Finally, we have

                           I
                   A,(z) = -[Az(z)- r 2 ~ - 2 ~ ~ ( ~ - ' ) 1
                              1-   r;
                          -          1
                          -
                              1 - (0.3 123)2
                                                               +
                                               [I - 0.6401~-' 0.3123~-' - 0 . 3 1 2 3 ~ - ~ (-1 0.64012     + 0.3123z2)]
                          = 1 - 0.4878~-'

       and, therefore, r1 = -0.4878. Thus, a lattice implementation of this allpass filter is as shown in the figure below.
CHAP. 81                        IMPLEMENTATION OF DISCRETE-TIME SYSTEMS


8.31   Find the system function for the lattice filter given in the figure below.

       x(n)




       This structure implements a third-order IIR filter with three poles and three zeros:




       To find the system function, first we use the step-up recursion to find A3(z)from the reflection coefficients r,,r2,
       and r3.With rI = 0.2, we have




       Next, for a2(k)we have




       Finally, for a3(k)we have




       Therefore, the denominator polynomial is




       To find the numerator B3(2),we use Eq. (8.8),




       Thus, we have




       Therefore, the system function is
340                               IMPLEMENTATION OF DISCRETE-TIME SYSTEMS                                                  [CHAP. 8


8.32   Sketch a lattice filter structure for each of the following system functions:




       (a) To implement the filter




            using a lattice filter structure, we must first find the reflection coefficients corresponding to the denominator
            polynomial. Using the step-down recursion, we find



            Next, we find the coefficients c l(k) that produce the numerator polynomial



            Using the recursion




            we have                                            cl(l)= bl(l)= - I


            and                                       c,(0) = bl(0) - c l ( l ) a 1 ( l ) = 2.4698

            (note that a l ( l ) = r , ) . Therefore. the lattice filter structure for this system is as shown in the figure below.




       (b) To find the lattice filter structure for




            we first use the step-down recursion to find the reflection coefficients for the denominator, which are



            Next, we use the recursion
                                                                            u
CHAP. 81                          IMPLEMENTATION OF DISCRETE-TIME SYSTEMS


             to find the coefficients c3(k).which are




             Thus, the lattice filter structure for this system is as shown in the figure below.
                           xfn)




       (c)   Note that the system function



             is an allpass filter. Because the denominator is the same as the system function in part (b), the reflection
             coefficients are rl = 0.5 and T2 = 0.75, and the lattice filter is as shown in the figure below.




Finite Word-Length Effects

8.33   Express the fractions        and   -& in sign-magnitude, one's complement, and two's complement notation
       using 6 bits.
       With B   + 1 = 6 bits, I bit will be a sign bit, and 5 will be the fractional bits. Because


       the 6-bit representation for x = $ in all three binary forms is



       For x = -   & we have, in sign-magnitude form,

       and in one's complement form.
                                                        x = 0.001 11 = 1.1 1000

       and in two's complement form
                                                 x = 0.001 1 1   + 0.00001 = 1.1 1001
342                             IMPLEMENTATION O F DISCRETE-TIME SYSTEMS                                                    [CHAP. 8


8.34   Consider the following implementation of a second-order filter:



                       0              .   r    -   r                    "                -
                                                                                         "               -
                                                                                                         "       -    . .




                                                                        Ir                               " I-'
                                                   1L                                    1L




                                                           -
                                                        r cos wo                              r cos wo
                                                                                                         0




                                                                             - r sinwo



       (a) Find the system function corresponding to this network.
       (b) If the coefficients ( r cos wo) and ( I . sinwo) are quantized to 4 bits, draw the set of allowable pole
            locations in the z-plane. For what types of filters would this filter structure be preferred over a direct
            form structure'?

       (a) This filter structure is called the coupled form realization. The system function for this filter may be found as
           follows. The difference equations relating .r(n), v ( n ) .and v(n) are

                                              u(n) = x(n) - r sin(q)y(n - 1 )                 + r cos(wIJ)v(ri- I )
                                              y (n) = r sin(wo)v(n - I ) + r cos(w,,)v(n- I )

            Taking the z-transform of the first equation. we have




            Solving for V(z) yields
                                                                            X(z) - r sin(wo)z-' Y (z)
                                                          V(z) =
                                                                               I - r cos(wo)z-~

            Substituting this into the :-transform of the second difference equation gives




            Solving this equation for Y (z). we have




            Therefore, the system function is




       (b) This filter has poles at
                                                         -.. -
                                                             -   rc*llull     -               *
                                                                              - r cos q, j r sin q,
            Thus, the coefficients in this structure are the real and imaginary parts of the pole locations. Therefore, if the
            coefficients are quantized to B        +                                                                   '
                                                I bits. the poles will lie at the intersections of 2'+ evenly spaced horizontal
            and vertical lines in the i-plane. These positions are illustraled in the figure below for the first quadrant when
            B+1=4.
CHAP. 81                          IMPLEMENTATION O F DISCRETE-TIME SYSTEMS




            Note that, compared with the direct form structure, the allowable pole locations are uniformly distributed
            within the unil circle. The cost for this uniform spacing is four multiplies and three additions per output value,
            compared to only two multiplications and two additions for a direct form implementation. This extra cost may
            be worthwhile, particularly for low-pass filters that have poles close to the unit circle in the vicinity of z = 1,
            where the density of the allowable pole locations is sparse in the direcl form implementation compared to the
            coupled form implementation.


8.35   A white noise sequence e ( n ) with variance 0; is input to a filter with a system function

                                            H (z) =
                                                      (1    + 2zr2)(1 + 3 z r I ) ( l + z r ' )
                                                             (1 + iz-2)(1 + iz-1)

       Find the variance of the output sequence.
       The variance of the output sequence is




       For the given filter, note that



       where the firs1 two terms are allpass filters with




       Therefore,

       Using Parseval's theorem,
                                IMPLEMENTATION OF DISCRETE-TIME SYSTEMS                                                  [CHAP. 8


       we find


       Thus. we have
                                                               0: = 720,'



8.36   Consider the following cascade of two first-order all-pole filters:




       (a) Find the variance of the round-off noise at the output of the cascade for an 8-bit processor with
            rounding.
       (h) Repeat for the case in which the order of the cascade is reversed.

       (a) A model for the round-off noise is shown in the following figure:




           where the variance of each noise source is equal to




           The system function of the filter is


                                         H(z) =


           and the unit sample response is



           Note that because e l ( n ) is filtered by h ( n ) , and e2(n) is only filtered by the second filter in the cascade, which
           has a unit sample response
                                                               hdn) =   (:)nw
           the output noise, f (n), is
                                                    f ( n )=       * h ( n )+ e d n ) * h d n )
           Therefore, the variance of f (n) is
CHAP. 81                         IMPLEMENTATION OF DISCRETE-TIME SYSTEMS


            With


            we have


            Next, we have




           Therefore, the variance of the round-off noise at the output of the filter is



            which, for an 8-bit processor (B = 7), is
                                                          2-28
                                            O:   = 2.8953 - = 0.2413 . 2-l4 = I.4726 .
                                                            12

       (b) If the order of the cascade is reversed. we have the following network:




           The variance of the round-off noise due to e l ( n ) is the same as in part (a),but because the unit sample response
           of the second system in the cascade is now

                                                             h;?(n)= ( i ) n u ( n )

           the variance of the noise due to e z ( n ) is




           Thus, the variance of the round-off noise at the output of the filter is

                                                  a: = 1.82860:   + 1.33330: = 3.16190;
           which, for an 8-bit processor is




           With this structure, the round-off noise is slightly larger.


8.37   Consider a linear shift-invariant system with a system function
                                                                   1-0 . 4 ~ ~ '
                                                 H (z) =
                                                           ( 1 - 0.62-')(I - 0.8~-1)
       Suppose that this system is implemented on a 16-bit fixed-point processor and that the sums of products
       are accumulated prior to quantization. Let :a be the variance of the round-off noise.
                          IMPLEMENTATION OF DISCRETE-TIME SYSTEMS                                               [CHAP. 8


(a) If the system is implemented in direct form 11, find the variance of the round-off noise at the output
    of the filter.
(b) Repeat part (a) if the system is implemented in parallel form.

( a ) The direct form I1 implementation of this system is shown in the figure below along with the two round-off
      noise sources.




     Because the sum
                                             x(n)   + 1.4w(n - 1) - 0.48w(n - 2 )
     may be accumulated prior to quantization, the variance of the noise e l ( n )is .:a   Similarly, because the sum



     may be accumulated prior to quantization, the variance of the noise e2(n)is also me2. With c l ( n )being filtered
     by the system and with ez(n)being noise that is simply added to the output, the quantization noise at the output
     of the filter is
                                                                       +
                                             f ( n ) = h(n) * el ( n ) eAn)
     which has a variance equal to




     To find the unit sample response of the filter, we expand H ( z ) in a partial fraction expansion as follows:

                                                 I - 0.4~-I        -    -1                  2
                              H ( z )=                             -
                                         ( 1 - O.6zr1)(I - 0.82-I)   1 - 0.62-I     +   1 - 0.8~-I


     Therefore,                              h(n) = -(0.6)"u(n)    + 2(0.8)"u(n)

     and                lh(n)12 = [-(0.6)"    + 2(0.8)"]2u(n)= [(0.6)'"    - 4(0.48)"   +4(0.8)~"]u(n)
     Evaluating the sum of the squares of h(n),we have




     Thus, the variance of the output noise is
                                                           0
                                                           ;   = 6u:
(b) Using the partial fraction expansion for H ( z ) given in part ( a ) ,the parallel form implementation of this filter is
     shown in the following figure:
CHAP. 81                         IMPLEMENTATION OF DISCRETE-TIME SYSTEMS




            As indicated in the figure, there are two noise sources. The first, cl (n), is filtered with a first-order all-pole filter
            that has a unit sample response
                                                            hl(n) = (0.8)"1~(~)
            and the second, ez(n), is filtered with a first-order all-pole filter that has a unit sample response



            Because the output noise is
                                                    f ( n ) = cJl(n)* I I I ( ~+)r 2 ( n )* hz(n)
            the variance of f (n) is




8.38   A linear shift-invariant system with a system function of the form




       is to be implemented as a cascade of N second-order sections. where each section is realized in either
       direct form I o r 11 or in their transposed forms. How many different cascaded realizations are possible.
       Let us assume that each factor in H ( z ) is unique, so that there arc N different second-order polynomials in the
       numerator and the same number of polynomials in the denominator. In this case. there are N! different pairings
       of factors in the numerator with factors in the denominator. In addition, for each of these pairings, there are N !
       different orderings of these sections. Therefore. there are ( N !)' different pairings and orderings. With four different
       structures for each section (direct form I, direct form 11, transposed direct form I, and transposed direct form 11),
       there are a total of 4N(N!)2different realizations. For a tenth-order system (N = 5). this corresponds to 14,745,600
       different structures. This is why general pairing and ordering rules are important.


8.39   Let H ( z ) be a pth-order allpass filter with a gain of 1 that is implemented in direct form I1 using a
       processor with B     +1 bits.
       ( a ) If the product of two ( B     +
                                         1)-bit numbers is rounded to B                  +
                                                                             I bits before any additions are per-
            formed, find the variance of the round-off noise at the output of the filter.
       (b) Repeat part (a) for the case in which sums of products are accumulated prior to quantization.
                        IMPLEMENTATION OF DISCRETE-TIME SYSTEMS                                         [CHAP. 8


(a) The system function for a pth-order allpass filter has the form


                                       H (z) =
                                                  a(p)+ a ( p - l)z-I + . . . + z-"
                                                   1 + a(l)z-' + . . . + a(p)z-P

     With a direct form I1 implementation of this system, rounding each product to 5   + 1 bits prior to performing
     any additions, we have the round-off noise model shown in the following figure:




     where the variance of each noise source is
                                                              2-28
                                                         u2 = -
                                                               12

    Note, however, that this noise model may be simplified as illustrated in the following figure:




    where
CHAP. 81                         IMPLEMENTATION OF DISCRETE-TIME SYSTEMS


            Assuming that each noise source is uncorrelated with the others, the variances of e,(n) and eh(n)are

                                                           u,Z=,,u;          ~ ; = ~ u ;


            Because the output noise is
                                                         f (n) = e d n ) * h ( n ) + eh(n)
            where h ( n ) is the unit sample response of the allpass filter, the variance of f ( n ) is




            Equivalently, we may write this using Parseval's theorem as follows:




            Because H(e1") is an allpass filter with I H (elW)I= I, the variance of the output noise is

                                                            a: = u,Z   + 02 = 2pu,'
       (b) If the products are accumulated prior to quantization, the variances of e,(n) and eh(n) in the noise model given
           in part (a)will be reduced by a factor of p:



            Therefore, the variance of the output noise becomes




8.40   In the figure below are direct form I1 and transposed direct form I1 realizations of the first-order system




                                                             (a) Direct form 11.




                                                       ( b ) Transposed direct form 11.


                                                                        +
       Assume that both systems are implemented using ( B 1)-bit fixed-point arithmetic and that all products
                            +
       are rounded to B 1 bits before any additions are performed.
                         IMPLEMENTATION OF DISCRETE-TIME SYSTEMS                                         [CHAP. 8


(a) Using a linear noise model for the round-off noise, find the variance of the round-off noise at the
    output of the direct form I1 filter.
(b) Repeat part (a)for the transposed direct form I1 filter.
(c) How would the variance of the output noise change if the sums of products were accumulated prior
    to quantization?

( a ) The linear noise model for round-off noise in the direct form I1 implementation is shown in the figure below.




     The variance of the noise eo(n) is a: and the variance of el( n ) is 2 4 , where



     Because the output noise is
                                                f ( n )=       + e d n ) * h(n)
     where h ( n ) is the unit sample response of the filter, the variance of the output noise is




     With

     it follows that the unit sample response is




     Therefore,




     and the output noise variance is




( b ) For the transposed direct form I1 implementation, the noise model is as follows,
CHAP. 81                          IMPLEMENTATION OF DISCRETE-TIME SYSTEMS




             where the variance of eo(n) is , a and the variance of e l ( n ) is 2u:. Note that because neither noise source is
                                              :
             filtered by the zeros of the system, an equivalent model for the generation of the filtered noise f ( n ) is as shown
             in the figure below,




                                  +
             where e ( n ) = en@) e l ( n - I). Because e&) and e l ( n ) are uncorrelated, the variance of e ( n ) is 30:. and the
             variance of the output noise is



       (c) If we accumulate the sums of products prior to quantization, for the direct form I1 implementation, the variance
           of the noise e l ( n ) would be a,' instead of 2u:, and everything else remains the same. For the transposed direct
           form I1 structure, on the other hand, the variance of el ( n ) would be 0; instead of 2u:, which implies that the
           variance of e ( n ) would be 2u:,


8.41   A sixth-order filter with a system function
       H (z) =
                                          + zp2)(I + ~ - ' ) ~ ( 12cos(lr/6)z-' + zp2)
                                         (1                         -

           (1 - 1.6 cos(lr/4)z-I + 0 . 6 4 ~ - ~ ) (+
                                                    1 1.6 cos(lr/4)z-I + 0.64zr2)(1 - 1.8 cos(rr/6)z-' + 0 . 8 1 r 2 )
       is to be implemented as a cascade of second-order sections. Considering only the effects of round-off
       noise, determine what the best pole-zero pairing is, and the best ordering of the second-order sections.
       Note that all six zeros of this system lie on the unit circle, with two at z = -1, a complex pair at z = fj, and a
       complex pair at z = eiJ"I6. The poles, on the other hand, are at z = 0.8e*J"I4, z = 0 . 8 e * ~ ~and
                                                                                                         ~ J z~ =
                                                                                                                , 0.9e*J"16.
       A pole-zero diagram showing each of these poles and zeros is given below.
352                               IMPLEMENTATION OF DISCRETE-TIME SYSTEMS                                                [CHAP. 8


       The general strategy for pairing poles with zeros is to first find the two poles that are closest to the unit circle, in this
       case those at z = 0.9e*jnI6, and pair these with the two zeros that are closest to these poles, which are those on the
       unit circle at z = e*j"I6. Thus, the first pole-zero pairing yields the second-order section




       Of the remaining poles, we next find the pair that is closest to the unit circle, which are either those at z = 0.8ei'R/4
       or those at z = 0 . 8 e f j 3 x / 4Let
                                          . us arbitrarily select the first of these, Paired with these poles would then be the zeros
       at z = j, which gives us the second-order section



       Finally, for the last section we have



       The cascade is then done in the reverse order, with the first second-order section being H3(z),followed by H&),
       and then H l ( z ) .




                                          Supplementary Problems

Structures for FIR Systems

       Find the unit sample response for the following network:
                                             z-I              --I              2-I              .-1




       What is the frequency response of the following network?
                                             _-I                z-I




       What is the minimum number of multiplications and additions and delays required to implement a linear phase filter
       with h(n) = 0 for n < 0 and n r 63?

       How many multiplies, adds, and delays are required to implement the filter




                                         I                      0                             otherwise
       using ( a ) a direct form structure and (b) a frequency sampling structure?
CHAP. 81                         IMPLEMENTATION OF DISCRETE-TIME SYSTEMS


8.46    Draw a frequency sampling structure for the FIR high-pass filter of length N = 32 with

                                                              $         k = l S , l 6 , 17
                                                  H(k) =
                                                              0         else


Structures for IIR Systems

8.47    Find the system function for the following network, where a z - ' is a unit delay combined with a multiplication by a :
                                     .x(n)                                                     ~(n)




8.48    Find the unit sample response of the following network:




8.49    Find the constant A so that the second-order all-pole filter

                                                                           A
                                                     H(z) =
                                                              I   + a , z - ' + a 2 z-r 2
        has unit gain at w = 0, and find a structure that only requires two multiplications.

8.50    What is the system function corresponding to the following filter structure?




8.51    Find the transposed direct form 11 realization of the system described by the difference equation




Lattice Filters

8.52    What is the frequency response of the FIR filter that has reflection coefficients r l = r 2 = . . . = r 9 = 0 and
        I-lo = I ?
354                                1MPLEMENTATION OF DISCRETE-TIME SYSTEMS                                              [CHAP. 8


8.53   Draw a lattice filter implementation for the allpass filter

                                                          H (z) =
                                                                    0.25 - 0.52-' z-2 +
                                                                                  +
                                                                    1 - 0.5~-I 0 . 2 5 r 2

8.54   If the system function of a causal filter is
                                                                              I
                                          H(z) =
                                                      I   + I. lz-I + 0 . 9 r 2+ 1           +0 . 5 ~ - ~
       is this filter stable?

8.55   If H(z) is an FIR filter with reflection coefficients T I , r2. . . , r,,, what is the system function of the filterG(i) with
       reflection coefficients rI.0.r2.0, rl, . . . - 0 , r,,?

8.56   Suppose that the last reflection coefficient of an FIR lattice filter. not necessarily minimum phase, has unit magnitude
       Ir,,l = I. What general statements can be made about the system function H(z)?
8.57   Find the system function of the following lattice filter:
                            r(n)




Finite Word-Length Effects

       (a) Whal fraction does the binary number x = 1.01 101 represent in one's complemenr notation'? (b) What about
       two's complemenl notation?

       White noise with a variance    < is input to a linear shifi-invariant filter with a system function

       Find the variance of the noise at the output of the filter.

       Consider the following cascade of two tirst-order filters, where la1 > Ibl:




       Without explicitly evaluating the variance, determine whether the variance of the round-off noise at the output of
       this filter will be larger or smaller if the order of the cascade is reversed.

       Consider a linear shift-invariant system with a system function




       Assume that each product is rounded to 16 bits before any additions are performed, and let :a be the variance of the
       round-off noise.
CHAP 81                         IMPLEMENTATION OF DISCRETE-TIME SYSTEMS                                                 355

       (a) If this system is implemented in direct form 11, compute the variance of the round-off noise at the output of the
                   a due to all noise sources.
           filter, ,
                   :
       (h) Repeat part (a) if the system is implemented in direct form I

8.62   Suppose that an FIR filter with a system function



       is implemented on a 16-bit fixed-point processor. If sums of products are accumulated prior to rounding, find the
       variance of the round-off noise at the output of the filter.

8.63   The second-order system
                                                                     1
                                                H (z) =
                                                           1 - 1.2728~-'+ O.XIZ--~
       is implemented in direct form I1 using 16-bit fixed point arithmetic. Assuming that all sums of products are
       accumulated prior to rounding, find the quantization noise power at the filter output.

8.64   To minimize the effects of round-off noise, what is the best pairing of poles and zeros into second-order sections for
       the system
                         H(z) =
                                                +
                                              (1 0 . 9 ~ - ~ ) (-12.4cos(0.75n)z-' +   1.44~-~)
                                                            +                                  +
                                   (1 - 1.4 cos(O.251r)z-' 0.49r2)(1 - 1.8 cos(O.9lr)z' 0.8 1 z r Z )
       and what is the best ordering for the second-order sections?




                              Answers to Supplementary Problems




8.44   63 delays, 63 additions, and 32 multiplications.

8.45   (a) 33 multiplies, 63 adds, and 63 delays. ( b ) 9 multiplies, 10 adds, and 69 delays
356                              IMPLEMENTATION OF DISCRETE-TIME SYSTEMS               [CHAP. 8


8.49                +
       A = I + a, az,and the structure is
                           .W)




8.54   No, the filter is unstable because r3= 1.2.

8.55   G ( z ) = H (z2).

8.56   The system function will have generalized linear phase, H ( z ) = fz-PH(z-I).




8.58   (a)   6. (b) $.
CHAP. 81                           IMPLEMENTATION OF DISCRETE-TIME SYSTEMS                                                   357

8.60   The variance of the output noise will be larger if the pole closest to the unit circle is the second filter in the cascade.
       Thus, the output noise variance will be larger if the order of the cascade is reversed.

8.61       : = 2.70;. (b) o: = 2.20:.
       (a) a

8.62   The variance of the output noise is simply the noise variance, a: = .h2-2B = 12-'O
                                                                                    12    '



8.63       = 0.20770; where 0: = h2-30.


8.64   Hl(z) = -
                               +
                         1 O.~Z-~
                                             and H2(z) =
                                                         1 - 2.4 cos(0.75n)z-I               + 1.44~-~
               1 - 1.4cos(0.25n)z-'      +
                                    0.49zr2'              1 - 1.8cos(0.9n)z-I                +0.81~-~    '
                                                                                           Chapter 9
                                              Filter Design
9.1 INTRODUCTION
This chapter considers the problem of designing a digital filter. The design process begins with the filter specifi-
cations, which may include constraints on the magnitude and/or phase of the frequency response, constraints on
the unit sample response or step response of the filter, specification of the type of filter (e.g., FIR or IIR), and the
filter order. Once the specifications have been defined, the next step is to find a set of filter coefficients that pro-
duce an acceptable filter. After the filter has been designed, the last step is to implement the system in hardware
or software, quantizing the filter coefficients if necessary, and choosing an appropriate filter structure (Chap. 8).


9.2 FILTER SPECIFICATIONS
Before a filter can be designed, a set of filter specifications must be defined. For example, suppose that we would
like to design a low-pass filter with a cutoff frequency w,.. The frequency response of an ideal low-pass filter
with linear phase and a cutoff frequency w,. is




which has a unit sample response
                                                            sin(n - a ) w , .
                                                 hd(n) =
                                                              n(t7 - a )
Because this filter is unrealizable (noncausal and unstable), it is necessary to relax the ideal constraints on the
frequency response and allow some deviation from the ideal response. The specifications for a low-pass filter
will typically have the form




as illustrated in Fig. 9-1. Thus, the specifications include the passband cutoff frequency, w,, the stopband cutoff
frequency, w,, the passband deviation, 6,. and the stopband deviation, 6,. The passband and stopband deviations




                                                       I              I                         I
                                    Passband   4                                Stopband   i-
                                                       I              I                         I




                                  Fig. 9-1.    Filter specifications for a low-pass filter,
CHAP. 91                                             FILTER DESIGN


are often given in decibels (dB) as follows:



and                                              a,. = -2010g(6,~)

The interval [w,, w,] is called the trunsitiotr hand.
     Once the filter specifications have been defined, the next step is to design a filter that meets these specifica-
tlons.


9.3 FIR FILTER DESIGN
The frequency response of an N th-order causal FIR filter is




and the design of an FIR filter involves finding the coefficients h ( n ) that result in a frequency response that
satisfies a given ser of filter specifications. FIR filters have two important advantages over 1IR filters. First, they
are guaranteed to be stable, even after the filter coefficients have been quantized. Second, they may be easily
constrained to have (generalized) linear phase. Because FIR filters are generally designed to have linear phase,
in the following we consider the design of linear phase FIR filters.



9.3.1      Linear Phase FIR Design Using Windows
Let hd(n) be the unit sample response of an ideal frequency selective filter with linear phase,



Because hd(n) will generally be infinite in length, it is necessary to find an FIR approximation to Hd(ejw).With
the window design method, the filter is designed by windowing the unit sample response,



where w(n) is a finite-length window that is equal to zero outside the interval 0     n 5 N and is symmetric about
its midpoint:
                                               w(n) = w(N - n )

The effect of the window on the frequency response may be seen from the complex convolution theorem,




Thus, the ideal frequency response is snzoothed by the discrete-time Fourier transform of the window, W(ejW).
     There are many different types of windows that may be used in the window design method, a few of which
are listed in Table 9- 1 .
     How well the frequency response of a filter designed with the window design method approximates a desired
response, H~(&"). is determined by two factors (see Fig. 9-2):

      1.    The width of the main lobe of W (el").
      2. The peak side-lobe amplitude of W(ejU).
                                                      FILTER DESIGN                                                [CHAP. 9




                                                                I Peak Sidelobe


             -?r                            -4 it           A            Mainlobe
                                                                         Width
                                                                                                      'IT
                                                                                                           I   W




           Fig. 9-2. The DTFT of a typical window, which is characterized by the width of its main lobe. A.
             and the peak amplitude of its side lobes, A, relative to the amplitude of W ( d ' " )at o = 0.


Ideally, the main-lobe width should be narrow, and the side-lobe amplitude should be small. However, for a
fixed-length window, these cannot be minimized independently. Some general properties of windows are as
follows:

    1. As the length N of the window increases, the width of the main lobe decreases, which results in a decrease
        in the transition width between passbands and stopbands. This relationship is given approximately by



        where A f is the transition width, and c is a parameter that depends on the window.
    2. The peak side-lobe amplitude of the window is determined by the shape of the window, and it is
       essentially independent of the window length.
    3. If the window shape is changed to decrease the side-lobe amplitude, the width of the main lobe will
       generally increase.

Listed in Table 9.2 are the side-lobe amplitudes of several windows along with the approximate transition width
and stopband attenuation that results when the given window is used to design an N th-order low-pass filter.

                                           Table 9-1 Some Common Windows

                                              I      O s n s N
                   Rectangular    w(n) =
                                              0      else


                   Hanning'
                                            10                             else

                   Hamming
                                            I0                                else

                   Blackman
                                            I0                                                      else

               'In the literature, this window is also called a Hann window or a von Hann window.
CHAP. 91                                             FILTER DESIGN


            Table 9-2 The Peak Side-Lobe Amplitude of Some Common Windows and the Approximate
                   Transition Width and Stopband Attenuation of an Nth-Order Low-Pass Filter
                                       Designed Using the Given Window.

           Window          Side-Lobe Amplitude (dB)         Transition Width (.Af )     Stopband Attenuation (dB)
         Rectangular                  - 13                          0.9/N                           -21
          Hanning                     -31                           3.1IN                           -44
          Hamming                     -41                           3.3/N                           -53
         Blackman                     -57                           5S/N                            - 74



EXAMPLE 9.3.1        Suppose that we would like to design an FIR linear phase low-pass filter according to the following
specifications:




For a stopband attenuation of 20 log(0.O I ) = -40 dB. we may use a Hanning window. Although we could also use a Hamming
or a Blackman window, these windows would overdesign the filter and produce a larger stopband attenuation at the expense
of an increase in the transition width. Because the specification calls for a transition width of Aw = w, - w, = 0.02n, or
Af = 0.01, with
                                                         NAf = 3.1
for a Hanning window (see Table 9.2), an estimate of the required filter order is




The last step is to find the unit sample response of the ideal low-pass filter that is to be windowed. With a cutoff frequency
            +
of w,. = (w, w,)/2 := 0.2n, and a delay of cr = N/2 = 155, the unit sample response is




     In addition to the windows listed in Table 9-1, Kaiser developed a family of windows that are defined by




where a = N / 2 , and l o ( . )is a zeroth-order modified Bessel function of the first kind, which may be easily
generated using the power series expansion




The parameter determines the shape of the window and thus controls the trade-off between main-lobe width
and side-lobe amplitude. A Kaiser window is nearly optimum in the sense of having the most energy in its main
lobe for a given side-lobe amplitude. Table 9-3 illustrates the effect of changing the parameter /3.
     There are two empirically derived relationships for the Kaiser window that facilitate the use of these windows
to design FIR filters. The first relates the stopband ripple of a low-pass filter, a, = -20 log(6,), to the parameter B,
                                                       FILTER DESIGN                                       [CHAP. 9


                          Table 9-3 Characteristics of the Kaiser Window as a Function of 0

                         Parameter       Side Lobe          Transition Width   Stopband Attenuation
                             B              (dB)                (NAf                  (dB)




The second relates N to the transition width Af and the stopband attenuation a,,




Note that if a, < 21 dB, a rectangular window may be used (B = O ) , and N = O.9/Af.

EXAMPLE 9.3.2 Suppose that we would like to design a low-pass filter with a cutoff frequency w, = n / 4 , a transition
width Aw = 0.02n, and a stopband ripple 6, = 0.01. Because a, = -20 log(O.01)= -40. the Kaiser window parameter is



With A f = Aw/2n = 0.01, we have




where

is the unit sample response of the ideal low-pass filter.

     Although it is simple to design a filter using the window design method, there are some limitations with
this method. First, it is necessary to find a closed-form expression for hd(n)(or it must be approximated using
a very long DFT). Second, for a frequency selective filter, the transition widths between frequency bands, and
the ripples within these bands, will be approximately the same. As a result, the window design method requires
that the filter be designed to the tightest tolerances in all of the bands by selecting the smallest transition width
and the smallest ripple. Finally, window design filters are not, in general, optimum in the sense that they do not
have the smallest possible ripple for a given filter order and a given set of cutoff frequencies.


9.3.2 Frequency Sampling Filter Design
Another method for FIR filter design is the frequency sampling approach. In this approach, the desired frequency
response, Hd(eJ"),is first uniformly sampled at N equally spaced points between 0 and 27r:
CHAP. 91                                         FILTER DESIGN


These frequency samples constitute an N -point DFT, whose inverse is an FIR filter of order N - 1:




The relationship between h(n) and hd(n) (see Chap. 3) is




Although the frequency samples match the ideal frequency response exactly, there is no control on how the
samples are interpolated between the samples. Because filters designed with the frequency sampling method
are not generally vely good, this method is often modified by introducing one or more transition samples as
illustrated in Fig. 9-3. These transition samples are optimized in an iterative manner to maximize the stopband
attenuation or minimize the passband ripple.




                                                       Transition
                                                         Band
                      Fig. 9-3. Introducing a transition sample with an amplitude of A , in the
                        frequency sampling method.




9.3.3 Equiripple Linear Phase Filters
The design of an FIR low-pass filter using the window design technique is simple and generally results in a filter
with relatively good performance. However, in two respects, these filters are not optimal:

    1.   First, the passband and stopband deviations, 6, and 6,, are approximately equal. Although it is common
         to require S, to be much smaller than S,, these parameters cannot be independently controlled in the
         window design method. Therefore, with the window design method, it is necessary to overdesign the
         filter in the passband in order to satisfy the stricter requirements in the stopband.
    2.   Second, for most windows, the ripple is not uniform in either the passband or the stopband and generally
         decreases when moving away from the transition band. Allowing the ripple to be uniformly distributed
         over the entire band would produce a smaller peak ripple.

An equiripple linear phase filter, on the other hand, is optimal in the sense that the magnitude of the ripple
is minimized in all bands of interest for a given filter order, N. In the following discussion, we consider the
design of a type I linear phase filter. The results may be easily modified to design other types of linear phase
filters.
      The frequency response of an FIR linear phase filter may be written as
364                                                  FILTER DESIGN                                               [CHAP. 9


where the amplitude. A(eJw),is a real-valued function of w. For a type I linear phase filter,

                                                    h(n) = Iz(N - n)

where N is an even integer. The symmetry of h(n) allows the frequency response to be expressed as




where L = N / 2 and




The terms cos(kw) may be expressed as a sum of powers of cos w in the form



where T&) is a kth-order Chebyshev polynomial [see Eq. (9.9)]. Therefore, Eq. (9.4) may be written as




Thus, A(ejw)is an Lth-order polynomial in coso.
   With Ad(ei") a desired amplitude, and W(eiw)a positive weighting function, let



be a weighted approximation error. The equiripple filter design problem thus involves finding the coefficients
a ( k ) that minimize the maximum absolute value of E(ejU)over a set of frequencies, F,



For example, to design a low-pass filter, the set F will be the frequencies in the passband. [O, w,,], and the
stopband,     n],as illustrated in Fig. 9-4. The transition band, (w,, o,), is a don't care region, and it is not




                  3                                                                                          W

                                                       Don't Care
                Fig. 9-4. The set R in the equiripple filter design problem, consisting of the passband
                  [0, w,] and the stopband [op.o , ] . The transition band ( o , , w,) is a don't care region.
CHAP. 91                                             FILTER DESIGN                                              365

considered in the minimization of the weighted error. The solution to this optimization problem is given in the
alternation theorem. which is as follows:

         Alternation Theorem: Let 3 be a union of closed subsets over the interval [O. n]. For a
         positive weighting function w ( d W ) ,a necessary and sufficient condition for




         to be the unique function that minimizes the maximum value of the weighted error I E(eJW)I
                                                                +
         over the set 3is that the E(eJW)have at least L 2 alternations. That is to say, there must be
                   +
         at least L 2 extremalfiequencies.



         over the set 3such that
                                   E(eJWk)                                    .
                                         = - ~ ( e J ~ ~ + l )k = 0, I , . . . L


         and                                                                  . +1
                               ~ ~ ( e j=~m~a )x !~ ~ ( e j ~ ) kl = 0, I , ... L
                                             W € F



Thus, the alternation theorem states that the optimum filter is equiripple. Although the alternation theorem
specifies the minimum number of extremal frequencies (or ripples) that the optimum filter must have, it may
have more. For example, a low-pass filter may have either L 2 or    +       +
                                                                          3 extremal frequencies. A low-pass
               +
filter with L 3 extrema is called an extraripplefilter.
      From the alternation theorem, it follows that




where                                          E = fmax I E ( ~ ; ~ ) J
                                                        W € F


is the maximum absolute weighted error. These equations may be written in matrix form in terms of the unknowns
         .
a(O), . . . a ( L ) and E as follows:




Given the extremal frequencies, these equations may be solved for a(O), . . . , a ( L ) and c . To find the extremal
frequencies, there is an efficient iterative procedure known as the Parks-McClellan algorithm, which involves
the following steps:
    1. Guess an initial set of extremal frequencies.
    2. Find r by solving Eq. (9.5). The value of c has been shown to be
                                                     FILTER DESIGN                                                [CHAP. 9



          where


     3.   Evaluate the weighted error function over the set .F by interpolating between the extremal frequencies
          using the Lagrange interpolation formula.
     4.   Select a new sel of extremal frequencies by choosing the L         + 2 frequencies for which the interpolated
          error function is maximum.
     5.   If the extremal frequencies have changed, repeat the iteration from step 2.
A design formula that may be used to estimate the equiripple filter order for a low-pass filter with a transition
width Af , passband ripple 6,. and stopband ripple 6 , is




EXAMPLE 9.3.3 Suppose thal we would like to design an equiripple low-pass filter with a passband cutoff frequency
w,, = 0 . 3 ~a. stopband cutoff frequency o,= 0 . 3 5 ~a, passband ripple of 6, = 0.01, and a stopband ripple of 6, = 0.001.
Estimating the filter using Eq. (9.h),we find




Because we want the ripple in Ihe stopband to be I0 times smaller than the ripple in the passband, the error must be weighted
usmg the weighting function



Using the Parks-McClellan algorilhm to design the filter. we obtain a filter with the frequency response magnitude shown
below.




9.4 IIR FILTER DESIGN
There are two general approaches used to design IIR digital filters. The most common is to design an analog IIR
filter and then map it into an equivalent digital filter because the art of analog filter design is highly advanced.
Therefore, it is prudent to consider optimal ways for mapping these filters into the discrete-time domain. Fur-
thermore, because there are powerful design procedures that facilitate the design of analog filters, this approach
CHAP. 91                                                  FILTER DESIGN                                                         367

to IIR filter design is relatively simple. The second approach to design IIR digital filters is to use an algorithmic
design procedure, which generally requires the use of a computer to solve a set of linear or nonlinear equations.
These methods may be used to design digital filters with arbitrary frequency response characteristics for which
no analog filter prototype exists or to design filters when other types of constraints are imposed on the design.
     In this section, we consider the approach of mapping analog filters into digital filters. Initially, the focus
will be on the design of digital low-pass filters from analog low-pass filters. Techniques for transforming these
designs into more general frequency selective filters will then be discussed.


9.4.1 Analog Low-Pass Filter Prototypes
To design an IIR digital low-pass filter from an analog low-pass filter, we must first know how to design an
analog low-pass filter. Historically, most analog filter approximation methods were developed for the design of
passive systems having a gain less than or equal to 1. Therefore, a typical set of specifications for these filters is
as shown in Fig. 9-5(a),with the passband specifications having the form




                ( ( I ) Specifications in terms of   and 6,.                      ( I ? ) Specifications in terms of e and A.

        Fig. 9-5. Tivo different conventions for specifying the passband and stopband deviations for an analog
          low-pass filter.

 Another convention that is commonly used is to describe the passband and stopband constraints in terms of the
 parameters E and A as illustrated in Fig. 9-5(h). Two auxiliary parameters of interest are the dist.riminatior7
factor,
                                                                        ]   =--
                                                                              fin
                                                                                   E



and the selectivity factor
                                                                  Q
                                                               k ="
                                                                  Q.5

    The three most commonly used analog low-pass filters are the Butterworth, Chebyshev, and elliptic filters.
These filters are described below.

Butterworth Filter
A low-pass Butterworth filter is an all-pole filter with a squared magnitude response given by
368                                                  FILTER DESIGN                                               [CHAP. 9


The parameter N is the order of the filter (number of poles in the system function), and Q,. is the 3-dB cutoff
frequency. The magnitude of the frequency response may also be written as




where

The frequency response of the Butterworth filter decreases monotonically with increasing 0, and as the filter
order increases, the transition band becomes narrower. These properties are illustrated in Fig. 9-6, which shows
IH,(jQ)l for Butterworth filters of orders N = 2 , 4 , 8 , and 12. Because



from the magnitude-squared function, we may write




                          I
                     Fig. 9-6. The magnitude of the frequency response for Butterworth filters of orders
                       N = 2.4, 8.


Therefore, the poles of G,(s) are located at 2N equally spaced points around a circle of radius Q,.,

                  3,: = ( - I ) ~ / ' ~ ( ~ R
                                            =, Q
                                               ) , expIj
                                                           (N   +2   N+2k)n       I   k = 0 . 1, .... 2N-1

and are symmetrically located about the jR-axis. Figure 9-7 shows these pole positions for N = 6 and N = 7.
                                                                                                                       (9.7)


The system function, H,(s), is then formed from the N roots of H,(s)H,(-s) that lie in the left-half s-plane.
For a iiormuli-.ed Butterworth filter with Q,. = 1 , the system function has the form
                                          I                                   I
                                H,(s) = --     -
                                                                                                                       (9.8)
                                        A N ( ~ ) sN alsN-' +           + . . . + aN-Is + a N
Table 9-4 lists the coefficients of AN(s) for I      N 5 8. Given Q p , Q,7,S,,, and S,, the steps involved in designing
a Butterworth filter are as follows:
      I.   Find the values for the selectivity factor, k , and the discrimination factor, d. from the filter specifications.
      2.   Determine the order of the filter required to meet the specifications using the design formula
                                                                       log d
                                                                NZ-
                                                                       log k
CHAP. 91                                             FILTER DESIGN




                      (u) Order N = 6.                                      ( h ) Order N = 7.
                                                  for a Butterworth filter of order N = 6 and N = 7.
                 Fig. 9-7. The poles of H,(a)H,(-s)


        Table 9-4 The Coefficients in the System Function of a Normalized Butterworth Filter (a,
                                                                                               = I) for
                                               Orders I 5 N 5 8
                                                                                 -
                                             a3           ad            as




                                            1 .om
                                           2.6131       1 .OOOO
                                           5.2361       3.2361         1.OW0
                                           9.1416       7.4641        3.8637
                                          14.59 18     14.59 I8      10.0978
                                          2 1.8462     25.6884       2 1.8462



   3. Set the 3-dB cutoff frequency, Q,, to any value in the range
                                    n,[(i - J,)-~ - i ~ - 5~Q,/ 5~c2,[q2
                                                                    ~   - 11-l'~~

   4.    Synthesize the system function of the Butterworth filter from the poles of
                                                                                   1
                                           Ga(s) = Ha(s)Ha(-s) =
                                                                         I   +   (S/~Q,)~~
         that lie in the left-half s-plane. Thus,




         where

EXAMPLE 9.4.1       Let us design a low-pass Butterworth filter to meet the following specifications:

                                    f, =6kHz          f, = 10kHz        6, = 6 , = 0 . l
370                                                    FTLTER DESIGN                                               [CHAP. 9


First, we compute the discrimination and selectivity factors:




                                                                log d
Because                                               N Z -      = 5.92
                                                           log k
it follows that the minimum filter order is N = 6. With

                                               fp[(l - s,,)-'     - 11-'IZN = 6770

and                                               f, [6;' - I ] - . " ~=~68 19
the center frequency, f,,may be any value in the range

                                                       6770       f,. 5 6819
The system function of the Butterworth filter may then be found using Eq. (9.8) by first constructing a sixth-order normalized
Butterworth filter from Table 9-4,

                                                                        1
                          Hu(s) =
                                      +
                                    sb 3.8637s5   + 7.4641s4 + 9.1416s' + 7.4641s2 + 3.8637s + I
and then replacing s with s/ R, SO that the cutoff frequency is 52, instead of unity (see Sec. 9.4.3).


Chebyshev Filters
Chebyshev filters are defined in terms of the Chebyshev polynomials:




These polynomials may be generated recursively as follows,



with To(x)= 1 and Tl(x)
                      = x. The following properties of the Chebyshev polynomials follow from Eq. (9.9):
      1.   For 1x1 5 1 the polynomials are bounded by 1 in magnitude, ITN(x)l5 1, and oscillate between f1.
           For 1x1 > I , the polynomials increase monotonically with x.
      2. TN(l)= I for all N.
      3. TN(0)= fl for N even, and TN(0)= 0 for N odd.
      4.   All of the roots of TN(x)are in the interval - 1 _< x I1.
    There are two types of Chebyshev filters. A type I Chebyshev filter i s all-pole with an equiripple passband
and a monotonically decreasing stopband. The magnitude of the frequency response is




where N is the order of the filter, Q, is the passband cutoff frequency, and 6 is a parameter that controls
the passband ripple amplitude. Because T ~ ( Q / Qvaries
                                                       ~ ) between 0 and 1 for        < Q,,, I H , ( ~ Roscillates
                                                                                                           )I~
                      +
between I and 1/(1 e2). As the order of the filter increases, the number of oscillations (ripples) in the passband
increases, and the transition width between the passband and stopband becomes narrower. Examples are given
in Fig. 9-8 for N = 5,6.
CHAP. 91                                           FILTER DESIGN




                       ( a ) Odd order (N = 5).                                ( 6 ) Even order (N = 6).
                  Fig. 9-8. Frequency response of Chebyshev type I filter for orders N = 5 and N = 6.

       The system function of a type I Chebyshev filter has the form




where H,(O) = ( 1 - c2)-'I2 if N is even, and H,(O) = 1 if N is odd. Given the passband and stopband cutoff
frequencies, Q , and Q,, and the passband and stopband ripples, 8 , and 6, (or the parameters E and A), the steps
involved in designing a type I Chebyshev filter are as follows:
           Find the values for the selectivity factor, k, and the discrimination factor, d.
           Determine the filter order using the formula




           Form the rational function




           where E = [(l - s , ) - ~- 1 1 l / ~ and
                                                ,   construct the system function H,(s) by taking the N poles of G,(s)
           that lie in the left-half s-plane.

EXAMPLE 9.4.2 If we were to design a low-pass type I Chebyshev filter to meet the specificationsgiven in Example 9.4.1
where we found d = 0.0487 and k = 0.6, the required filter order would be




or N = 4. Therefore, with


and


then

where 52, = 2n(6000).
372                                                 FILTER DESIGN                                             [CHAP. 9

     A type I1 Chebyshev filter, unlike a type 1 filter, has a monotonic passband and an equiripple stopband, and
the system function has both poles and zeros. The magnitude of the frequency response is




where N is the order of the filter, 52, is the passband cutoff frequency, R, is the stopband cutoff frequency, and
E is the parameter that controls the stopband ripple amplitude. Again, as the order N is increased. the number of
ripples increases and the transition width becomes narrower. Examples are given in Fig. 9-9 for N = 5 , 6 .




                        (a)Odd order (N = 5).                                     ( b ) Even order (N = 6).
          Fig. 9-9. Frequency response of a Chebyshev type I1 filter for orders N = 5 and N = 6.

      The system function of a type I1 Chebyshev filter has the form




The poles are located at
                                                            Q
                                                       ak = -   f
                                                               Sk

where sk for k = 0, I, . . . , N - 1 are the poles of a type 1 Chebyshev filter. The zeros bk lie on the j52-axis at
the frequencies for which TN(Q,/ R ) = 0. The procedure for designing a type 11 Chebyshev filter is the same as
for a type I filter, except that
                                                   = ( 8 .- ~ 1)-
                                                               ~ 'I2


Elliptic Filter
An elliptic filter has a system function with both poles and zeros. The magnitude of its frequency response is




where UN(52/Qp) is a Jacobian elliptic function. The Jacobian elliptic function U N ( x )is a rational function of
order N with the following property:



Elliptic filters have an equiripple passband and an equiripple stopband. Because the ripples are distributed uni-
formly across both bands (unlike the Butterworth and Chebyshev filters, which have a monotonically decreasing
CHAP. 91                                           FILTER DESIGN                                               373

passband and/or stopband), these filters are optimum in the sense of having the smallest transition width for
a given filter order, cutoff frequency Q,, and passband and stopband ripples. The frequency response for a
4th-order elliptic filter is shown in Fig. 9- 10.




                   Fig. 9-10. The magnitude of the frequency response of a sixth-order elliptic filter.

    The design of elliptic filters is more difficult than the Butterworth and Chebyshev filters, because their
design relies on the use of tables or series expansions. However, the filter order necessary to meet a given set of
specifications may be estimated using the formula




where d is the discrimination factor, and




where

with k being the selectivity factor.


9.4.2 Design of ZZR Filters from AnalogFilters
The design of a digital filter from an analog prototype requires that we transform ha(t) to h(n) or Ha(s) to H(z).
A mapping from the s-plane to the z-plane may be written as



where s = m(z) is the mapping function. In order for this transformation to produce an acceptable digital filter,
the mapping m(z) should have the following properties:
     I.The mapping from the jS2-axis to the unit circle, Izl = 1, should be one to one and onto the unit circle
       in order to preserve the frequency response characteristics of the analog filter.
    2. Points in the left-half s-plane should map to points inside the unit circle to preserve the stability of the
       analog filter.
    3. The mapping m(z) should be a rational function of z so that a rational Ha(s) is mapped to a rational
       H(z).
    Described below are two approaches that are commonly used to map analog filters into digital filters.
374                                              FILTER DESIGN                                            [CHAP. 9


Impulse Invariance
With the inzpulse invariance method, a digital filter is designed by sampling the impulse response of an analog
filter:
                                                h ( n )= h,,(nT,)
From the sampling theorem, it follows that the frequency response of the digital filter, H(eJW),is related to the
frequency response H,(jR) of the analog filter as follows:




More generally, this may be extended into the complex plane as follows:




The mapping between the s-plane and the z-plane is illustrated in Fig. 9-1 I . Note that although the jR-axis
maps onto the unit circle, the mapping is not one to one. In particular, each interval of length 2 n / T , along the
jR-axis is mapped onto the unit circle (i.e., the frequency response is aliased). In addition, each point in the
left-half s-plane is mapped to a point inside the unit circle. Specifically, strips of width 2 n / T , map onto the
z-plane. If the frequency response of the analog filter, H,,(jR). is sufficiently bandlimited, then




Although the impulse invariance may produce a reasonable design in some cases, this technique is essentially
limited to bandlimited analog filters.




    To see how poles and zeros of an analog filter are mapped using the impulse invariance method, consider
an analog filter that has a system function




The impulse response, hu(t), is
CHAP. 91                                          FILTER DESIGN


Therefore, the digital filter that is formed using the impulse invariance technique is




and the system function is



Thus, a pole at s = sk in the analog filter is mapped to a pole at z = tJkTs   in the digital filter.



The zeros, however, do not get mapped in any obvious way.

The Bilinear Transformation
The bilinear transformation is a mapping from the s-plane to the z-plane defined by




Given an analog filler with a system function H,(s), the digital filter is designed as follows:

                                             H (z) = Hu   (-2 -)11 +-
                                                            T,
                                                                        2-'

                                                                        z-I

The bilinear transformation is a rational function that maps the left-half s-plane inside the unit circle and maps
the jC2-axis in a one-to-one manner onto the unit circle. However, the relationship between the jR-axis and the
unit circle is highly nonlinear and is given by thefr-equency warpb~g,funcrion




As a result of this warping, the bilinear transformation will only preserve the magnitude response of analog filters
that have an ideal response that is piecewise constant. Therefore, the bilinear transformation is generally only
used in the design of frequency selective filters.
     The parameter T, in the bilinear transformation is normally included for historical reasons. However, it does
not enter into the design process, because i l only scales the jR-axis in the frequency warping function, and this
scaling may be done in the specification of the analog filter. Therefore, T, may be set to any value to simplify the
design procedure. The steps involved in the design of a digital low-pass filter with a passband cutoff frequency
w,, stopband cutoff frequency w.,, passband ripple 6 , , and stopband ripple 8, are as follows:

         Prewarp the passband and stopband cutoff frequencies of the digital filter, w, and o,,
                                                                                              , using the inverse
         of Eq. (9.12) to determine the passband and cutoff frequencies of' the analog low-pass filter. With
         T, = 2, the prewarping function is


         Design an analog low-pass filter with the cutoff frequencies found in step I and a passband and stopband
         ripple ap and a, respectively.
         Apply the bilinear transformation to the filter designed in step 2.

EXAMPLE 9.4.3 Let us design a first-order digital low-pass filter with a 3-dB cutoff frequency of w, = 0.2% by applying
the bilinear transformation to the analog Butterworth filter
                                                             I
                                                  H,,(s) = -
                                                             +
                                                           1 s j R,.
376                                                       FILTER DESIGN                                            [CHAP. 9

Because the 3-dB cutoff frequency of the Butterworth filter is R,., for a cutoff frequency w, = 0.2% in the digital filter, we
must have



Therefore, the system function of the analog ti lter is




Applying the bilinear transformation to the analog filter gives




Note that the parameter T, does not enter into the design.



9.4.3 Frequency Transformations
The preceding section considered the design of digital low-pass filters from analog low-pass filters. There are
two approaches that may be used to design other types of frequency selective filters, such as high-pass, bandpass,
or bandstop filters. The tirst is to design an analog low-pass filter and then apply a frequency transformation to
map the analog filter into the desired frequency selective prototype. This analog prototype is then mapped to
a digital filter using a suitable s-plane to z-plane mapping. Table 9-5 provides a list of some analog-to-analog
transformations.

                          Table 9-5 The 'kansformation of an Analog Low-pass Filter with a
                            3-dR Cutoff Frequency L2, to Other F'req"ency selective Filters

                         I Transformation I               Mapping      I New Cutoff Frequencies




     The second approach that may be used is to design an analog low-pass filter, map it into a digital filter
using a suitable s-plane to z-plane mapping, and then apply an appropriate frequency transformation in the
discrete-time domain to produce the desired frequency selective digital filter. Table 9-6 provides a list of some
digital-to-digital transformations. The two approaches do not always result in the same design. For example,
although the second approach could be used to design a high-pass filter using the impulse invariance technique,
with the first approach the design would be unacceptable due to the aliasing that would occur when sampling the
analog high-pass filter.


9.5   FILTER DESIGN BASED ON A LEAST SQUARES APPROACH
The design techniques described in the previous section are based on converting an analog filter into a digital
filter. It is also possible to perform the design directly in the time domain without any reference to an analog
filter. This section describes several methods for designing a digital filter directly.
CHAP. 91                                                FILTER DESIGN                                                      377

   Table 9-6 The Transformation of a Digital Low-Pass Filter with a Cutoff Frequency w, to Other Frequency
                                               Selective Filters

    Filter Type                             Mapping                                                 Design Parameters

                                                                                                  sin[(w,. - w:.)/2]
    Low-pass                                                                                    ff =
                                                                                                              +
                                                                                                  sinl(w,. q ' . ) / 2 ]
                                                                                         w:. = desired cutoff frequency

    High-pass                         z-I   +,   --2-' +a!                                                     +
                                                                                                  cos[(w,. w:.)/21
                                                                                                    =-
                                                   1   + curl                                  ff
                                                                                                  cos[(w, - w3/21
                                                                                         w: = desired cutoff frequency

    Bandpass



                                                                                    wCl= desired lower cutoff frequency
                                                                                    W, = desired upper cutoff frequency

    Bandstop



                                                                                    w,,~= desired lower cutoff frequency
                                                                                    w,2 = desired upper cutoff frequency


9.5.1 Pad4 Approximation
Let h d ( n )be the unit sample response of an ideal filter that is to be approximated by a causal filter that has a unit
sample response, h ( n ) ,and a rational system function,




                      + +
Because H ( z ) has p q 1 free parameters, it is generally possible to find values for the coefficients a ( k ) and
                                                        +
h(k) so that h ( n ) = h d ( n )for n = 0, 1 , . . . , p q . The procedure that is used to find these coefficients is to
write H ( z ) = B ( z ) / A ( z )as follows,



and note that, in the time domain, the left-hand side corresponds to a convolution




(note that b(n) is a finite-length sequence that is equal to zero for n .c0 and n z q). Setting h ( n ) = hd(n)for
                  +                          +                                  +
n = 0. 1, . . . , p q results in a set of p q + 1 linear equations in p q + 1 unknowns,

                                                                        n = 0. I . . . . , q
                         hd(n)   + &o(k)hd(n - k ) = { E ( n )
                                   ~ = I                                n=q+l, ...,q+p
378                                                  FILTER DESIGN                                           [CHAP. 9


that may be solved using a two-step approach. In the first step, the coefficients a ( k ) are found using the last p
equations in Eq. (9.14),which may be written in matrix form as




Assuming that these equations are linearly independent, the coefficients may be uniquely determined. In the
                                                                   +
second step, the coefficients b ( k ) are found from the first 9 1 equations in Eq. (9.14) as follows:




                                                                                                 +
Although PadC's method produces an exact match of h ( n ) to h d ( n )for n = 0. 1. . . . , p 9, because h ( n ) is
                             +
unconstrained for n > p q , the PadC method does not generally produce a good approximation to h d ( n )for
n > p+q.


9.5.2 Prony 's Method
With a least-squares approach to filter design, the problem is to find the coefficients a ( k ) and b ( k )that minimize
the least-squares error




where U is some preselected upper limit. Because E is a nonlinear function of the coefficients a ( k ) and b(k),
solving this minimization problem is, in general, difficult. With Prony's method, however, an approximate
least-squares solution may be found using a two-step procedure as follows. Ideally, because [see Eq. (9.14)]




the first step is to find the coefficients a ( k ) that minimize




where


Once the coefficients a ( k ) have been determined, the coefficients h ( k ) are found using the PadC approach of'
forcing h ( n ) = h d ( n )for n = 0, 1. . . . , 9 :




The coefficients a ( k ) that minimize E may be found by setting the partial derivatives of E equal to zero,
CHAP. 91                                           FILTER DESIGN                                                     379




where

is the correlation of hd(n).


9.5.3   FIR Least-Squares Inverse
The inverse of a linear shift-invariant system with unit sample response g(n) and system function G ( z ) is the
system that has a unit sample response, h(n),such that




In most applications, the system function H ( z ) = I/G(z) is not a v~ablesolution. One of the reasons is that,
unless G ( z )is minimum phase, I / G ( z )cannot be both causal and stable. Another consideration comes from the
fact that, in some applications, it may be necessary to constrain H ( 2 ) to be an FIR filter. Because l / G ( z )will be
infinite in length unless G ( z )is an all-pole filter, constraining h ( n )to be FIR would only be an approximation to
the inverse filter.
     In the FIR least-squares inverse filter design problem. the goal is to find the FIR filter h ( n )of length N such
that
                                                     h ( n )* ~ ( n ) S(n)
The filter that minimizes the squared error
                                                          0:




where

may be found by solving the linear equations




where

     In many cases, constraining the least-squares inverse filter to minimize the difference between h ( n )* ~ ( n )
and S(n) is overly restrictive. For example. if a delay may be tolerated, we may consider finding the filter h ( n )
so that
                                            h ( n )* ~ ( n ) 6(n - no)
for some delay no. In most cases, a nonzero delay will produce a better approximate inverse filter and, in many
cases, the improvement will be substantial. The least-squares inverse filter with delay is found by solving the
linear equations
                                                    FILTER DESIGN


                                               Solved Problems

FIR Filter Design

9.1   Use the window design method to design a linear phase FIR filter of order N = 24 to approximate the
      following ideal frequency response magnitude:




      The ideal filter that we would like to approximate is a low-pass filter with a cutoff frequency w, = 0 . 2 ~ .With
      N = 24, the frequency response of the filter that is to be designed has the form




      Therefore, the delay of h ( n ) is a = N / 2 = 12. and the ideal unit sample response that is to be windowed is




      All that is left to do in the design is to select a window. With the length of the window fixed, there is a trade-off
      between the width of the transition band and the amplitude of the passband and stopband ripple. With a rectangular
      window, which provides the smallest transition band,




      and the filter is



                                                  I          0              otherwise
      However. the stopband attenuation is only 21 dB. which is equivalent to a ripple of 6, = 0.089. With a Hamming
      window, on the other hand,




      and the stopband attenuation is 53 dB, or 6 , = 0.0022. However, the width of the transition band increases to




      which, for most designs, would be too wide.


9.2   Use the window design method to design a minimum-order high-pass filter with a stopband cutoff
      frequency w, = 0.22n, a passband cutoff frequency w,, = 0.28n, and a stopband ripple 6 , = 0.003.
      A stopband ripple of 6, = 0.003 corresponds to a stopband attenuation of a,= -20 log 6, = 50.46. For the minimum-
      order filter. we use a Kaiser window with



      Because the transition width is Aw = 0.06n, or A f = 0.03. the required window length is
CHAP. 91                                             FILTER DESIGN                                                         38 1

      Rounding this up to N = 99 results in a type I1 linear phase filter, which will have a zero in its system function at
      z = -1. Because this produces a null in the frequency response at w = n , this is not acceptable. Therefore, we
      increase the order by I to obtain a type 1 linear phase filter with N =: 100.
           In order to have a transition band that extends from o,= 0 . 2 2 ~to w, = 0.28n, we set the cutoff frequency of
      the ideal high-pass filter equal to the midpoint:




      The unit sample response of an ideal zero-phase high-pass filter with a cutoff frequency w,. = 0 . 2 5 ~is




      where the second term is a low-pass filter with a cutoff frequency w,. = 0.25n. Delaying hh,(n) by N / 2 = 50, we
      have


      and the resulting FIR high-pass filter is
                                                        h(n) = hd(n). w(n)
      where w(n) is a Kaiser window with N = I00 and B = 4.6.


9.3   Given a desired frequency response Hd(eJ"), show that the rectangular window design minimizes the
      least-squares error




      For this problem, we use Parseval's theorem to express the least-squares error ELs in the time domain:




      If we assume that h(n) is of order N , with h(n) = 0 for n < 0 and n z N ,




      Because the last two terms are constants that are not affected by the filler h(n), the least-squares errorELs is minimized
                                                                                                 .
      by minimizing the first term, which is done by setting h(n) = hd(n) for n = 0, I . . . . N (i.e., using a rectangular
      window in the window design method).


9.4   If hd(n) is the unit sample response of an ideal filter, and h ( n ) is an N th-order FIR filter, the least-squares
      error
                                                        In
                                           fLS= I\ H ~ ( P -~ H~ ()e j W ) ( ' d w
                                                    277 -=
      is minimized when h(n) is designed using the rectangular window design method. If ER is the squared
      error using a rectangular window, find the excess squared emor that results when a Hanning window is
      used instead of a rectangular window; that is, find an expression for



      where EH is the squared error using a Hanning window.
      Using Parseval's theorem. it is more convenient to express the least-squares error in the time domain as follows:
                                                   FlLTER DESIGN                                                [CHAP. 9


      Because e(n) = hd(n) - h(n) = hd(n) for n c 0 and n > N.




      where wH(n) and wx(n) are the Hanning and rectangular windows, respectively. However, the second sum is equal
      to zero. Therefore, the excess squared error is simply




      which is the desired relationship.


9.5   Consider the following specifications for a low-pass filter:




      Design a linear phase FIR filter to meet these specifications using the window design method.
      Designing a low-pass filter with the window design method generally produces a filter with ripples of the same
      amplitude in the passband and stopband. Therefore, because the passband and stopband ripples in the filter speci-
      fications are the same, we only need to be concerned about the slopband ripple requirement. A stopband ripple of
      6 , = 0.01 corresponds to a stopband attenuation of -40 dB. Therefore. froin Table 9-2 it follows that we may use
      a Hanning window, which provides an attenuation of approximately 44 dB. The specification on the transition band
      is that Aw = 0.05rr, or A f = 0.025. Therefore, the required filter order is




      and we have



      With an ideal low-pass filter that has a cutoff frequency of w,. = 0.325 (the midpoint of the transition band), and a
      delay of N/2 = 62 so that hd(n) is placed symmetrically within the interval [O, 1241, we have




      Therefore, the filter is


                                                  ( 1
                                     0.5 - 0.5 cos -        .
                                                                sin[0.325~(n- 62)]
                                                                    ~ ( -n62)
                                                                                        O S n s 124

      Note that if we were to use a Hamming or a Blackman window instead of a Hanning window, the stopband and
      passband ripple requirements would have been exceeded, and the required filter order would have been larger. With
      a Blackman window, for example, the filter order required to meet the transition band requirement is




9.6   W e would like t o filter an analog signal x,(t) with a n analog low-pass filter that has a cutoff frequency
      f,. = 2 kHz, a transition width Af = 500 Hz, a n d a stopband attenuation o f 50 dB. This filter is t o b e
      implemented digitally, a s illustrated in the following figure:
CHAP. 91                                               FILTER DESIGN




                                      I                                              I
                       4 1 )                      44                   y(n)                yo ( t )
                           -         C-D      .    =       H(ejw)       -            D-C     -


      Design a digital filter to meet the analog filter specifications with a sampling frequency f, = 10 kHz.
      With a sampling frequency of 10 kHz, the digital filter should have a cutoff frequency w, = 2 n f,./f, = 0.41~and a
      transition bandwidth Aw = 2nAf/f, = O.lrr. For a stopband attenuation of 50 dB, we may use a Kaiser window
      with
                                               B = 0.l l02(50 - 8.7) = 4.55
      For the length of the window, we have




      or N = 59. Finally, the unit sample response of the ideal filter that is to be windowed is a low-pass filter with a
      cutoff frequency w,. = 0 . 4 and
                                   ~ a delay N / 2 = 29.5. Therefore,



      where w ( n ) is a Kaiser window with N = 59 and B = 4.55. and




9.7   Find the Kaiser window parameters, B and N , to designa low-pass filter with acutofffrequency w, = n / 2 ,
      a stopband ripple 6, = 0.002, and a transition bandwidth no 1a.rger than 0.117.
      The parameter B for the Kaiser window depends only on the stopband ripple requirements. With 6, = 0.002,



      and we have
                                                       = 0.1 102(0r, - 8.7) = 4.99
      The window length, N , on the other hand, is determined by the stopband ripple, 6,. and the transition width as
      follows:


      Therefore, the required filter order is N = 65


9.8   Consider the following specifications for a bandpass filter:




      (a) Design a linear phase FIR filter to meet these specifications using a Blackman window
      (b) Repeat part (a) using a Kaiser window.

      (a) For this filter, the width of each transition band is Aw = 0 . 1 ~ The
                                                                             .   ripples in the lower stopband, passband,
          and upper stopband are 4 = 0.01. a2 = 0.05, and a3 = 0.02, respectively, and are all different. Because the
          ripples produced with the window design method will be approximately the same in all three bands, the filter
          must be designed so that it has a maximum ripple of 8, = 0.01 in all three bands. With
                                                     FILTER DESIGN                                                [CHAP. 9


           i t follows that the Blackman window will satisfy this requirement. An estimate of the filter order necessary to
           meet the transition bandwidth requirement of A f = 0.05 with a Blackman window is




           Finally, for the unit sample response of the ideal filter that is to be windowed, we have




           where Hd(eIW)is the frequency response of an ideal bandpass filter. For the cutoff frequencies of ~,,(ej"), we
           choose the midpoints of the transition bands of H ( e l ' " ) .Therefore.




           Thus, the unit sample response of the ideal bandpass filter with zero phase is




           and




           However, we want to delay this filter so that it is centered at N / 2 = 55. Therefore, the unit sample response of
           the tilter that is to be windowed should be




      ( b ) For a Kaiser window design, the order of the filter that is required i s




           Therefore, we set N = 45. Next, for the Kaiser window parameter, with an attenuation of 40 dB, we have



           Therefore, the filter is
                                                           h(n) = w(n).hd(n)


           where


9.9   Suppose that we would like to design a bandstop filter to meet the following specifications:
CHAP. 91                                               FILTER DESIGN


       (a) Design a linear phase FIR filter to meet these filter specifications using the window design method.
       ( b ) What is the approximate order of the equiripple filter that will meet these specifications?

       (a) Recall that with the window design method, the ripples in the passbands and stopbands will be approximately
           the same, along with the widths of the transition bands. Because the smallest ripple occurs in the stopband, we
           must pick a window that provides a stopband attenuation of



            Thus, we may use a Hamming window or a Kaiser window with

                                           B = 0.5842(aS - 2 I)'.~+ 0.07886(a, - 2 1) = 4.09
            The transition width between the lower stopband and the passband is Aw = 0 . 0 2 ~and between the upper
            stopband and the passband it is A o = 0 . 0 5 ~ Therefore,
                                                            .          we must design the filter to meet the lower transition
            bandwidth requirement, Aw = 0.02j7, or Af = 0.01. Thus, for ;i Hamming window, the estimated filter order



            For a Kaiser window, on the other hand. the filter order is




       ( b ) For an equiripple filter, the filter order may be estimated as follows,




9.10   Use the window design method to design a type I1 bandpass filter according to the following specifications:




       With the window design method, the amplitudes of the ripples in each band of a multiband filter will be approximately
       equal, and the transition bands will have approximately the same width. Because the requirements on the peak ripple
       in the three bands of this bandpass filter are not the same, it is necessary to design the filter so that it has the smallest
       ripple in all three bands, which, in this case, requires that we set 6, = 0.0025. In addition, because the transition
       bands do not have the same width, it is necessary to set the desired transition width, Aw, equal to the smaller of the
       two (Aw = 0 . 1 5 ~ ) .
             With a, = -20 log 6, = 52 dB. it follows that we may use a Hamming window, and with

                                                              NAf = 3.3




       For a type I1 filter, however, N must be odd, so we set N = 45.
            Now we must find the unit sample response of the ideal bandpass filter that is to be windowed. Because the
       width of both the upper and lower transition bands will be approximately Aw = 0 . 1 5 ~for
                                                                                              , the ideal filter we set the
       lower cutoff frequency equal to
                                                      FILTER DESIGN                                                    [CHAP. 9


       and the upper cutoff frequency equal to




       Therefore, the magnitude of the frequency response of the ideal filter is

                                                            I     0 . 1 7 5 ~5 Iwl 5 0 . 6 7 5 ~
                                            1 H,,(ul"')(=
                                                            0     otherwise

       Repeating the steps in the derivaticn of the unit sample response of an ideal bandpass fi lter given in Prob. 9.8, using
       the given cutoff frequencies and a delay of N j 3 = 22.5. we have




9.11   Use the window design method to design a multiband filter that meets the following specifications:




       To design a multiband filter that meets these specifications usmg the window design method, we begin by finding
       the ideal unit sample response. For the frequency response of the ideal filter. we set the cutoff frequencies equal to
       the midpoint of the transition bands. Therefore, we have




       The unit sample response of this ideal lilter may be found easily by noting that Hd(ei")may be written as an allpass
       filter with a gain of 0.5 minus a low-pass ti lter with a gain of 0.5 and a cutoff frequency w, = 0 . 5 7 5 ~plus a low-pass
       filter with a gain of I and a cutoff frequency of w2 = 0.325n. Therefore. if we assume that H,,(eJW)       has linear phase
       with a delay of n d ,




       Having found the ideal unit sample response. the next step is to choose an appropriate window. When h d ( n ) is
       multiplied by a window w(rr),the frequency response is the convolution of the transform of the window W ( e J Wwith )
       Hd(el'").Assuming that the length of the filter is long compared to the inverse of the transition width, so that the
       discontinuities between the bands may be treated independently. the ripples in the three bands will be approximately
       the same as they would be for a low-pass filter, except that they will be scaled by the amplitude of the discontinuities
       at the band edge. Therefore. if the ripple in the lower passband and the stopband are 4, the ripple in the upper
       passband will be 6 , , / 2 . Consequently. we must use a window that would produce a low-pass filter with a ripple no
       larger than 0.01. Thus. we may use a Hanning window. Finally, to determine the filter order, note that because the
       widths of both transition bands are the same. Ao) = 0 . 0 5 ~an~ . estimate of the filter order is




       Note that another way to design this tilter would have been to design a network of three filters in parallel: a low-pass
       filter, a bandpass filter, and a high-pass filter. This approach would give greater control over the ripple amplitudes
       and the transition widths but would require a trial and error approach to establish the specifications for the three
       filters.


9.12   Shown in the following figure is the magnitude of the frequency response of a type I high-pass filter that
       was designed using the Parks-McClellan algorithm.
CHAP. 91                                            FILTER DESIGN




     The stopband cutoff frequency is w, = 0.4n, and the passband cutoff frequency is o,,= 0 . 5 ~ ~In.
     addition, the stopband ripple is 8, = 0.0574, and the passband ripple is 6, = 0.1722.
           Determine the weighting function, W ( e J W )used
                                                         , to design this filter, and find the length of the unit
           sample response.
           Describe approximately where the zeros of the system function of this filter lie in the z-plane.

           To detennine the weighting function, we observe that




           Therefore, the weighting function used to design the filter has a value in the stopband that is 3 times larger than
           the value in the passband. This makes the errors in the stopband more costly and, therefore, smaller by a factor
           of 3. So, a weighting function that could have been used to design this filter is as follows:




           To determine the length of the unit sample response. recall that a type I equiripple high-pass (or low-pass)
                                     +          +
           filter must either have L 2 or L 3 alternations where L = N / 2 . Therefore, the order of the filter may
           be detennined by counting the alternations. For this filter, we have nine alternations, which are labeled in the
           figure below.
                                                          FILTER DESIGN                                          [CHAP. 9


            Thus, L = 7 or. in the case of an extraripple filter, L = 6. However, in order for h ( n ) to be an extraripple
            filter, w = 0 and w = IT must both be extremal frequencies (see Prob. 9.15). Because w = 0 is not an extremal
            frequency. this is no1 an extraripple filter. Therefore, L = 7 and N = 14.
       (b) Because the order of this filter is N = 14, the system function has 14 zeros. For a linear phase filter, we know
           that the zeros of the system function may lie on the unit circle, or they may occur in conjugate reciprocal pairs.
           From the plot of the frequency response magnitude, we see that I H ( e J ' " ) (= 0 at w l w 0.175n, w2 w 0.3n,
           and w3 0 . 3 9 ~ Therefore,
                                .          there are three zeros on the unit circle at these frequencies. Because there must
           also be zeros at the conjugate positions, z = e-'"'1 for i = 1, 2,3, these unit circle zeros account for six of the
           fourteen zeros. In addition to these. there must be a conjugate pair of zeros at z = re*'", where w4 0.71~.
           These zeros account for the dip in I H ( e l " ) I at w = 0.71~.Because the filter has linear phase, in addition to
           this pair of complex zeros, there must be a pair at the reciprocal locations, z - ' = re*jW4. For the same reason,
           there will be zeros on the real axis at z = a land z = I/cul,as well as zeros on the real axis at z = -a2 and
           z = -I/a2,where a , and a2 are positive real numbers that are less than I. These four zeros account for the
                                  ) w = 0 and w = n . A plot showing the actual positions of the 14 zeros of H ( z ) is given
           minima in I H ( e J w at
           below.




9.13   With the frequency sampling method, the frequency samples match the ideal frequency response exactly.
       Derive an interpolation formula that shows how the frequency samples H (k) are interpolated.
       The frequency response of an FIR filter of length N is




       If h ( n ) is designed using the frequency sampling method.
                                           N-I
                                H ( k )=                                                ) 0, I . .. . , N - I
                                                               - ~ , , ( e ~ ' " ~ / k~ =
                                                  h(n)e-"n"klN -
                                           ,r=o
       Because these frequency samples correspond to the N-point DFT of h ( n ) ,the unit sample response may be expressed
       in terms of these samvles as follows:



       Substituting this into the expression above for H ( e J w ) we
                                                                   , have

                                                                     )
                                                      H ( ~ ) ~ J ~e -~J r l W
                                                                                    N-I
                                                                               N ,=H(k)(=e-in(.-2r*'N,
                                                                             w =

                                                                                                n =D

       Using the geometric series to evaluate this sum, we find




       which is the desired interpolation formula.
CHAP. 91                                               FILTER DESIGN                                                                 389

9.14   Given a low-pass filter that has been designed and implemented, either in hardware or software, it may be
       of interest to try to improve the frequency response characteristics by repetitive use of the filter. Suppose
       that h ( n ) is the unit sample response of a zero phase FIR filter with a frequency response that satisfies
       the following specifications:




       (Note that H ( e J w )having zero phase implies that H ( e J W is
                                                                      ) real-valued for all LO).
       ( a ) If a new filter is formed by cascading h ( n ) with itself,



            G ( e J " ) satisfies a set of specifications of the form




            Find A . B. C , and D in terms of 6, and 6 , of the low-pass filter h ( n ) .
       (b) If 6, << 1 and 6, << 1, what are the approximate passband and stopband ripples of G(ejw)?

       (a) With a cascade, g(n) = h ( n )* h(n),the frequency response is


            Therefore, in the passband we have



            and in the stopband we have
                                                   0 5 C(el"')< ~f                      COT   5 (0 5 77

       (bj If we assume that 6 , << I,
                                                  (I - 6,)' = 1 - 26,                 + 26; = I   - 26,



            and                                   (1   + 6,)"       I           + 226, + 6% I + 26,,
            Therefore, the passband specifications are approximately



            In other words, the passband ripple is approximately doubled. In the stopband, however, the ripple is much
            smaller with the cascade. In fact, in decibels, the stopband attenuation is doubled. With other systems built
            out of interconnections of h(n) it is possible to improve the filter characteristics in both the passband and the
            stopband.


9.15   Show that a type I equiripple low-pass filter of order N may have either L                         + 2 or L + 3 alternations where
       L = N/2.
       For a type I linear phase filter of order N , the frequency response is




       where                                           A(.'.)   =                 .(k) cos r w
                                                                        =,!1I
                                                          FILTER DESIGN                                                     [CHAP. 9


       with L = N/2. Because the desired response, &(elW),and the weighting function, w (ejUJ),are piecewise constant,




       However, because ~ ( e j " )is a trigonometric polynomial of degree N/2 in cos w,




       then
                           d--                     x
                             A (ej") - -sin w i. k a ( k ) ( c o s w ) " ' = - sin w xL - I ( k
                              dw             k=O                                      I=O
                                                                                                  + I)c~(k+ I)(cos   0))"



       Therefore, the derivative of A(ej"') with respecl to w is always equal to zero at w = 0 and w = n . In addition.
       however, the derivative is equal to zero at L - I other frequencies between 0 and n ,which correspond to the roots of
       the polynomial given by the sum. Therefore, A(d'") may have at most L + 1 local maxima and minima. In addition.
       however, the band-edge frequencies, w,, and w,, must also be extremal frequencies. Thus, the maximum number of
                          +                                                                            +
       alternations is L 3. Because the alternation theorem requires a minimum of L 2, the optimum filter may have
                 +        +
       either L 2 or L 3 alternations.


9.16   Suppose that we would like to design a type I equiripple bandstop filter of order N = 30.
       (a) What is the minimum number of alternations that this filter must have?
       (b) What is the maximum number?

       (a) For a type I linear phase FlR filter of order N , the alternation theorem states that the minimum number of
           alternations is L + 2, where L = N/2. Therefore. with N = 30, the minimum number of alternations is 17.
       ( 6 ) As shown in Prob. 9.15, with
                                                                        = A(~W)~-JWNI~
                                                              ~ ( ~ 1 0 ~ )


                                                                  +
              A(eJW),and thus ,E(rjw).will have, at most, L I local maxima and minima in the interval 10, n ] .In addition.
              however, there may be alternations at the band-edge frequencies. For a bandstop filter, there are four band
              edges: the lower passband cutoff frequency, the lower stopband cutoff frequency, the upper stopband cutoff
              frequency, and the upper passband cutoff frequency. Therefore. the maximum number of alternations is L 5.         +

9.17   We would like to design a bandstop filter to satisfy the following specifications:




       ( a ) Estimate the order of the equiripple filter required to meet these specifications.
       (b) What weighting function ~ ( e i ' "should
                                                )        be used to design this filter?
       (c) What is the minimum number of extremal frequencies that the optimal tilter must have'?

       (a) The design formula used to estimate the order for a low-pass equiripple tilter is



              With the smaller of the two passband ripples being equal to 6, = 0.02, a stopband ripple of 6, = 0.001, and a
              transition width Aw = 0.02n, an estimate of the filter order is



              However, because this estimate is for a low-pass filter, the actual tilter order required is closer to N = 242.
              which may be confirmed by computer.
CHAP. 91                                            FILTER DESIGN                                                    391

       ( b ) With a ripple of 6, = 0.02 in the lower passband, S2 = 0.001 in the stopband, and S3 = 0.05 in the upper
             passband, an appropriate weighting function would be




            However, scaling these weights by any constant would not change the design.
       ( c ) Assuming a filter order of N = 232, which is a type I design, the amplitude response has the form
                                                                  L
                                                       A(el") =       a ( k )cos kw


            where L = N / 2 = 116. Therefore, the minimum number of extrcmal frequencies is L + 2 = 1 18.


9.18   We would like to design an equiripple high-pass filter of order N = 64. The stopband ripple is to be no
       larger than 6, = 0.001, and the passband ripple no larger than 8 , = 0.01. If we want a passband cutoff
       frequency equal tow, = 0 . 7 2 ~what
                                        ,    will the stopband cutoff trequency be approximately equal to?
       For an equiripple low-pass filter, an approximate relation between the filter order N , the passband and stopband
       ripples, 8, and &, respectively, and the transition width A f , is given by




       Because a high-pass filter may be formed from a low-pass filter as follows,




       this formula is also applicable to high-pass filters. With N = 64, 6, = 0.0 I, and 8, = 0.001, we find that




       Therefore, if the passband cutoff frequency is w, = 0 . 7 2 ~ the
                                                                     . stopband cutoff frequency will be approximately

                                                  w,, = w, - 2~ Af = 0 . 6 4 0 8 ~


9.19   Suppose that we want to design a low-pass filter of order N == 63 with a cutoff frequency w, = 0 . 3 1 ~
       and a stopband cutoff frequency o,= 0 . 3 2 ~ .
       ( a ) What is the approximate stopband attenuation that would obtained if this filter were designed using
             the window design method with a Kaiser window.
       (6) Repeat part ( a )for a equiripple filter assuming that we want 8, = 6,.

       (a) For a Kaiser window design. the relationship between the filler order N , the stopband attenuation a, =
           -20 log 6,. and the transition w ~ d t hAf is
                                                               a, - 7.95
                                                         N = -
                                                                l4.36Af
            Solving this for the stopband attenuation, we have



            which corresponds to a stopband (and passband) ripple of

                                                       6S -
                                                          - 10-16.99120 = 0.141
                                                      FILTER DESIGN                                                 [CHAP. 9


       (b) For an equiripple filter, the filter order is approximately



            With 6, = 6,. this becomes


            where a, = -20 log 6,. Solving for a,, we have


            The corresponding stopband ripple is
                                                            6S -
                                                               - 10-22.0-W"        0 079


9.20   The linear phase constraint on FIR filters places constraints on the unit sample response and the location
       of the zeros of the system function. In the table below, indicate with a check which filter types could
       successfully be used to approximate the given filter type.

                                                            Type I       Type 11      Type 111   Type IV
                                      Low-pass filter
                                      High-pass filter 11
                                      Band~assfilter 11
                                      Bandstop filter 11
                                      Differentiator 11

       A type I linear phase filter has no constraints on the locations of its zeros. Therefore, a type I filter may be used for
       the design of any type of filter. The type I1 linear phase filter will always have a zero at w = n. Therefore, these
       filters should only be used for low-pass and bandpass filters. The type 111 linear phase filter is constrained to have
       zeros at w = n and w = 0. Therefore, type 111 filters should only be used for the design of bandpass tilters. Finally,
       because the type IV filters have a zero at w = 0, they should not be used in the design of low-pass or bandstop filters.
       These results are summarized in the table below.

                                                        11 Type I I Type 11 I Type I11 I Type IV I
                                      Low-pass filter 11        x          x
                                      High-pass filter (1       x    I                              x
                                      Bandpass filter 11        x          x               x        x
                                      bands to^ filter 11       x
                                  I   Differentiator 11         x                                   x


IIR Filter Design

9.21   For historical reasons, the design formulas for analog filters are given assuming a peak gain of I in the
       passband. In terms of the parameters E and A, the filter specifications have the form



                                                                               1
                                                             IHAjW 5 ,
       Suppose that we would like to use the bilinear transformation to design a discrete-time IIR low-pass filter
       that satisfies the following frequency response constraints:
                                         1-6,            5 1 +S,
                                                 5 IH(eJW)I                           0 5 w 5 w,
                                                        l~(ej9i
                                                              l 6,                    w,sw5n
CHAP. 91                                             FILTER DESIGN                                                          393

       Find the relationship between the parameters 6, and 6, for the discrete-time filter and between the
       parameters c and A for the continuous-time filter.
       For a digital low-pass filter with a frequency response magnitude



       dividing by 1 $. 6, this becomes




       Setting



       we have



       and

       With a stopband ripple of &, the normalization of the peak passband gain to I produces a peak stopband ripple of




       Therefore                                         A = s;'(I   + 8,)
9.22   As the order of an analog Butterworth filter is increased, the slope of J H , ( J Q )at~ the  ~ 3-dB cutoff
       frequency, Q,.,increases. Derive an expression for the slope of I H , ( J Q ) at
                                                                                     I ~R,. as a function of the filter
       order, N.
       The magnitude squared of the Butterworth filter's frequency response is




       To evaluate the slope of IH a ( jSt)I2 at St = St,., we may set St, = 1 and evaluate the derivative at St = I. Therefore,
       with
                                                                             1
                                                           l H a ( j ~ )=
                                                                        l~
                                                                        +  I


       we have

       Evaluating this at St = I , we have




9.23   Show that the frequency response of an Nth-order low-pass Butterworth filter is maximallyflat at R = 0
       in the sense that the first 2N - I derivatives of J H , ( J R )are
                                                                       I ~equal to zero at R = 0.
       An Nth-order Butterworth filter has a magnitude squared frequency response given by
                                                     FILTER DESIGN                                                 [CHAP. 9


       Without any loss in generality, we may assume that Q, = 1 and evaluate the derivative of the function

                                                                   I
                                                          G(Q) = -
                                                                 I RZN  +
       at Q = 0. Multiplying both sides of this equation by (1    + R2N),we have

       Differentiating this equation with respect to R yields



       Setting R = 0, we have
                                                            ~'(fi)),=, = 0
       Differentiating a second time gives



       Again setting R = 0, we have
                                                           G"(Q)],=, = 0
       If we continue to differentiate k times, where k 5 2N - I, we have an equation of the form




       where G(')(R) is the ith derivative of G(R), and F(Q) is a polynomial in 52. Given that Gt')(Q) is equal to zero at
       Q = O f o r i = I , . .. , k - I , itfollowsthat
                                                        G("(R)ln=a = 0
       Differentiating 2N times, however, we have




       Therefore,                       G ' ~ ~ ) ( Q ) ~ ,=
                                                           , -G(Q)[,,       . (2N)! = -(2N)!

       which is nonzero, and the maximally flat property is established.


9.24   Design a low-pass Butterworth filter that has a 3-dB cutoff frequency of 1.5 kHz and an attenuation of
       40 dB at 3.0 kHz.
       Given the 3-dB cutoff frequency of the Butterworth filter, all that is needed is to find the filter order, N, that will
       give 40 dB of attenuation at 3 kHz, or Q, = 2 n .3000.At the stopband cutoff frequency a,, the magnitude of the
       frequency response squared is




       Therefore, if we want the magnitude of the frequency response to be down 40 dB at R, = 2n .3000, the magnitude
       squared must be no larger than      or


       Thus, we want
                                                            log(lo4 - 1)
                                                   2N =                  = 13.29
                                                                log 2
CHAP. 91                                                FILTER DESIGN


       or N = 7. For a seventh-order Butterworth filter, the 14 poles of
                                                                            I
                                                    Ha(s)Ha(-s) =
                                                                    1   +
       lie on a circle of radius Q, = 2 n ,3000, at angles of

                                      Bk =
                                             (N   + I + 2k)n -- (4 + k)n        k = 0 , 1 , . . . , 13
                                                    N               7
       as illustrated in the following figure:




       The poles of Ha@)are the seven poles of Ha(s)H,(-s) that lie in the left-half s-plane, that is,



            Except for the isolated pole at s = -Q,, the remaining six poles occur in complex conjugate pairs. The conjugate
       pairs may be combined to form second-order factors with real coefficients to yield factors of the form




       Thus, the system function of the seventh-order Butterworth filter is




9.25   Let apand 52, be the desired passband and stopband cutoff frequencies of an analog low-pass filter, and
       let 6, and 6, be the passband and stopband ripples. Show that the order of the Butterworth filter required
       to meet these s~ecificationsis
                                                            log d
                                                      N Z -
                                                            log k
       with the 3-dB cutoff frequency a, being any value within the range



       The squared magnitude of the frequency response of the Butterworth filter is
                                                     FILTER DESIGN                                                  [CHAP. 9


       Because I H,(jQ)l is monotonically decreasing, the maximum error in the passband and stopband occurs at the band
       edges, Q, and a,, respectively. Therefore, we want




       and

       From the first equation, we have



       and from the second.



       Dividing these two equations, we have




       and taking the logarithm gives
                                                        Nlog(?)               5 log d

       Dividing by

                                                              ("n)
                                                         log 2 = log k


                                                                       log d
       we have                                                 NZ-
                                                                       log k

       (note that the inequality is reversed because log k < 0). Because the right side of this equation will not generally
       be an integer, the order N is taken to be the smallest integer larger than (logd)/(log k ) . Finally, once the order N is
       fixed, it follows from Eqs. (9.20) and (9.21) that a,, may be any value in the range




9.26   Suppose that w e would like to design an analog Chebyshev low-pass filter s o that

                                            1 - Jp 5 I H a ( j Q ) l I1                 IQI 1 Qp
                                                      I H a ( j Q ) l 5 J,T             Qs I IQI
       Find an expression for the required filter order, N , as a function of a,               a,, tip,and
       For a Chebyshev filter, the magnitude of the frequency response squared is




       where


       is an Nth-order Chebyshev polynomial. Over the passband, In1 < Q,, the magnitude of the frequency response
                                    +
       oscillates between 1 and ( l c2)-'I2. Therefore, the ripple amplitude, 6,. is

                                                       6 , = 1 - (1      +c ~ ) - ' / ~
CHAP. 91                                            FILTER DESIGN


       or                                              6'   = (1 - a,)-'   -I

       At the stopband frequency R , we have
                                                                      I
                                                                   +
                                                I H ~ ( ~ Q=. ~ ) I ~
                                                               I c~T,:(R~I
       which we want to be less than or equal to 8::




       Therefore,

       Because (Q,/R,) > I, then TN(R,/i2,) = cosh(N ~ o s h - ~ ( ~ , / R , and
                                                                             ) ) , we have




                                                     cosh-'(I I d )      cosh-'( l / d )
       or
                                                ' C O S ~ - I (QJR,)
                                                                       -
                                                                       -
                                                                           COS~-~(I,X)

       which is the desired expression.


9.27   If Ha(s) is a third-order type I Chebyshev low-pass filter with a cutoff frequency Q p = I and 6 = 0. I ,
       find Ha(s)H,(-s).
       The magnitude of the frequency response squared for an Nth-order type 1 Chebyshev filter is



       where TN(x)is an Nth-order Chebyshev polynomial that is defined recursively as follows,



       with To(x) = 1 and Tl(x) = x. Therefore, to find the third-order Chebyshev polynomial, we first find T2(.u) as
       follows,
                                         T2(x)= 2xTl(x) - To(x) = 2x2 - I
       and then we have
                                    T3(x) = 2xT2(x) - Tl(x) = 4x3 - 2x - x = x(4x2 - 3)
       Thus, the denominator polynomial in I Hu(jR)12is




       and we have




       we make the substitution R = s / j in 1H,(jC2)l2as follows:
398                                                     FILTER DESIGN                                             [CHAP. 9


9.28   Show that the bilinear transformation maps the jQ-axis in the s-plane onto the unit circle, lzl = 1, and
       maps the left-half s-plane. Re(s) < 0 insidc the unit circle, l z ( < 1.
       To investigate the characteristics of the bilinear transformation, let z = reJ"' and s = a       + J R . The bilinear
       transformation may then be written as




                                          ='(T , I + r 2r+22 r cl o s w + ' 1 + r 2 +3r2 sinr c ows w
                                                               -



                                                              2         r2 - I
       Therefore,                                      0 = -
                                                              T, I   + rr' + 2r cosw

       and

       Note that if r < I, then o < 0, and if r      1, then 0 z 0. Consequently, the left-half s-plane is mapped inside the
       unit circle. and the right-half s-plane is mapped outside the unit circle. If 1, = I, then a = 0, and




       Thus, the JR-axis is mapped onto the unit circle. Using trigonometric identities, thismay be written in the equivalent




9.29   Let H&) be an all-pole filter with no zeros in the finite s-plane,




       If H,,(s) is mapped into a digital filter using the bilinear transformation, will H ( z ) be an all-pole filter?
       With T, = 2, the bilinear transformation is
                                                                       I -:-I
                                                                  s =-
                                                                       I +z-'
       and the system function of the digital filter is




       This may be written in the more conventional form as follows,




       where
CHAP. 91                                              FILTER DESIGN


       and

       Therefore, H ( z ) has p poles (inside the unit circle if Re(sd) < 0) and p zeros at z = - I . Note that rhese zeros come
       from the p zeros in HJs) at s = m. which are mapped to z = - I by the bilinear transformation. Thus. H ( : ) will
       nor be an all-pole filter.


9.30   Shown in the figure below is the magnitude of the frequency response of a low-pass tilter that was designed
       by mapping a type I analog Chebyshev filter into a discrete-lime filter using the bilinear transformation.




       Find the filter order (i.e., the number of poles and zeros in H(::)).
       The magnitude-squared response of a type I analog Chebyshev filter is




       where


       is an Nth-order Chebyshev polynomial. Over the passband,                 i R,, the magnitude of the frequency response
                                    +
       oscillates between I and ( 1 c ' ) - ' / ~ . AS the frequency varies from I2 = O to R = R,,, H = N cos-'(R/R,,) varies
       from 8 = N 7r/2 to 0 = 0. Therefore.




       oscillates between zero and 1 N $ 1 times over the interval [O, Q,] [i.e., T,~(R/Q,,)reaches its maximum or
       minimum value N     +  I times]. The bilinear transformation is a one-to-one mapping of the jR-axis onto the unit
       circle. Therefore. I H ( ~ J ' "will
                                        ) ~ alternate
                                            ~         +                                   +
                                                      N I times belween I and I/([ 6') over the interval 10, w , ) , where

                                                           w, = tan 2
                                                                     (: )
       Because there are six alternations of I H (eJ'")12in the passband, N   + 1 = 6. and H , , ( s ) is a tifth-order type I Chebyshev
       filter,
                                                                      5       .




       where A is a constant. Applying the bilinear transformation to HJs) results in a discrete-time filter with a system
       function H(z) that has five poles inside the unit circle, and five zeros on the unit circle at := - I (as shown in hob.
       9.29, the five zeros come from the five zeros in H,,(s) at s = m).
400                                                   FILTER DESIGN                                                 [CHAP. 9


9.31   Use the bilinear transformation to design a discrete-time Chebyshev high-pass filter with an equiripple
       passband with
                                             0    (   e     )0 . 1         O s w 50.11~

       and                                  0.9 5 I H ( &    5 1.0         0.31~5 w 5 IT


       To design a discrete-time high-pass filter, there are two approaches that we may use. We may design an analog type I
       Chebyshev low-pass filter, map it into a Chebyshev low-pass filter using the bilinear transformation, and then perform
       a low-pass-to-high-pass transformation in the z-domain. Alternatively, before applying the bilinear transformation.
       we could perform a low-pass-to-high-pass transformation in the s-plane and then map the analog high-pass filter into
       a discrete-time high-pass filter using the bilinear transformation. Because both methods result in the same design,
       it does not matter which method we use. Therefore, we will use the second approach, because it is a little easier
       algebraically.
            Given that we want lo design a high-pass filter with a stopband cutoff frequency ws = 0.117 and a passband
       cutoff frequency w, = 0.317, we first transform the specifications of the digital filter into the continuous-time domain.
       With T, = 2 and
                                                                       W
                                                               R = tan -
                                                                       2




       Using the transformation s -+ I 1s to map these high-pass filter cutoff frequencies to low-pass filter cutoff frequen-
       cies, we have




       and

       Therefore, the selectivity factor for the analog Chebyshev filter is




       With 6, = 6, = 0.1, the discrimination factor is




       Thus. the required filter order is



       Although we should round up to N = 3, with a second-order Chebyshev filter we should come close to meeting the
       specifications. Therefore, we will use N = 2.
            The next step is to design a second-order low-pass Chebyshev filter with




       where C!, = 1.9627 and R , = 6.3 138. With
CHAP. 91                                             FILTER DESIGN


      it follows that



      For a second-order Chebyshev filter, we need to generate a second-order Chebyshev polynomial. which is




      Squaring T2(x), we have
                                                      T;(X) = 4x4 - 4x2 + I

      and, for the magnitude squared frequency response of the Chebyshev filter, we have




      Substituting for the given values of Q, and c, we have




      Next, we find H4(s)H4(-s) with the substitution St = -js,




      Factoring the denominator polynomial, we find that the two roots in the left-half s-plane are at




     Thus, the second-order Chebyshev filter is




      Now we transform this low-pass filter into a high-pass filter with the low-pass-to-high-pass transformations + I /s.
      This gives



      Finally, applying the bilinear transformation, we have


                                                              3.9778 I    (-)+ z-'
                                                                           I - 2-'

                                    H (z) =
                                              I   + 2.2327(=)1 +    z-I      + 4 . 4 1 8 15+( Ez-') 2
      Multiplying numerator and denominator by (1      +   2-l)'   gives




     The magnitude of the frequency response is plotted in the following figure.
                                                      FILTER DESIGN                                                  [CHAP. 9




       As a check on the design, we may compute the magnitude of the frequency response at w = 0. I n , which is

                                                       I H ( ~ ~ ~ ) I ~=, 0.1044
                                                                           =O,~,

       which comes close to satisfying the stopband specifications. At the passband edge, we have

                                                       I ~ ( e j ~ ) l , , o . s ,= 0.9044
       which does satisfy the constraint.


9.32   We would like to design a digital low-pass filter that has a passband cutoff frequency w p = 0 . 3 7 5 ~with
       6, = 0.01 and a stopband cutoff frequency w, = 0.5x with 6, = 0.01. The filter is to be designed using
       the bilinear transformation. What order Butterworth, Chebyshev, and elliptic filters are necessary to meet
       the design specifications?
       To find the required filter order, we begin by finding the discrimination factor and the selectivity factor for the analog
       low-pass filter prototype. With 8, = 6, = 0.01, the discrimination factor is




       For the selectivity factor, we first find the cutoff frequencies for the analog prototype. With wp = 0.375r and
       w, = O S r , we prewarp the frequencies as follows (T, = 2),

                                                   Rp = tan       (    l
                                                                  0 375r
                                                                             )
                                                                         = 0.6682

                                                    i-2. = tan    (F)        =1


                                                             R
       Therefore,                                        k = 2-= 0.6682
                                                                  i-2.s

       For the Butterworth filter, the required filter order is
                                                               log d
                                                          N = - -     - 16.25
                                                                log k
       or N = 17. For the Chebyshev filter,



       so the minimum order is N = 8. Finally, for the elliptic filter, we first evaluate




       where
CHAP. 91                                             FILTER DESIGN

       With k = 0.6682, we have



       and                                                     9 = 0.0369

       Therefore. for the filter order. we find




9.33   With impulse invariance, a first-order pole in H,(s) at s = sk is mapped to a pole in H ( z ) at z = e s k T s :



       Determine how a second-order pole is mapped with impulse invariance.
       If the system function of a continuous-time filter is



       the impulse response is
                                                          ha(t) = tesk'u(t)
       where u(t) is the unit step function. Sampling h,(t) with a sampling period T,, we have



       Using the z-transform property
                                                              z   dX(z)
                                                       nx(n) t,-z -
                                                                   dz
       and the z-transform pair
                                                                       I
                                                      cunu(n) c4-t -
                                                                   1 - az-'
       it follows that the z-transform of h(n) is




       Therefore, for a second-order pole, we have the mapping




9.34   Suppose that we would like to design and implement a low-pass filter with




       ( a ) What order FIR equiripple filter is required to satisfy these specifications?
       (b) Repeat part ( a ) for an elliptic filter.
       (c) Compare the complexity of the implementations for the equiripple and elliptic filters in terms of the
             number of coefficients that must be stored, the number of delays that are required, and the number
             of multiplications necessary to compute each output sample y ( n ) .

       (a) With a transition width of Aw = 0.027r. an estimate of the required filter order for an FIR equiripple filter is
                                                                                                                     [CHAP. 9


       (b) For an elliptic filter, we have




            and



            With


            and


            then

            o r N = 10.
       (c) For an FIR filter of order N = 254, the output y(n) is




            Therefore, implementing this filter requires N = 254 delays. Since this filter has linear phase, exploiting the
            symmetry of the unit sample response,
                                                          h(n) = h(254 - n)
            it follows that we must only provide storage for 128 filter coefficients, h(O), h(l), . . . , h(127). In addition, we
            may simplify the evaluation of y(n) as follows,
                                 254                   126
                          y(n) = )h(k)x(n - k) = )h(k)[x(n - k)           + x(n - 254 + k)] + h(127)x(n - 127)
                                 k=O                  A LO

            Thus, 128 multiplications are required to compute each value of y(n). For a 10th-order elliptic filter,




            Therefore, it follows that 21 memory locations are required to store the coefficients a(k) and b(k), and 10 delays
            are required for a canonic implementation. In addition, we see that 21 multiplications are necessary to evaluate
            each value of y(n). However, since the zeros of H ( z ) lie on the unit circle, the coefficients b(k) are symmetric,



            By exploiting this symmetry, we may eliminate five multiplications per output point and five memory locations.


9.35   The input x a ( t ) and output ya(t) of a continuous-time filter with a rational system function are related by
       a linear constant coefficient differential equation of the form




       Suppose that we sample x,(t) and ya(t),



       and approximate a first derivative with the first backward difference,
CHAP. 91                                           FILTER DESIGN

      Approximations to higher-order derivatives are then defined as follows,



      Applying these approximations to the differential equation gives the following approximation to the
      differential equation:
                                             I)                      a




     The first backward difference def nes a mapping from the s-plane to the z-plane that is given by
                                                                 1 - z-'
                                                          ,y=-
                                                                   Ts
      Determine the characteristics of this mapping, and compare it to the bilinear transformation. Is this a
      good mapping to use? Explain why or why not.
      As with the bilinear transformation, the first backward difference will map a rational function of s into a rational
      function of z. To see how points in the s-plane map to points in the z-plane, let us write the mapping as follows,



      Note that with s = u   +jR,

     .and it follows that points in the left-half s-plane (a c 0) are mapped to points inside the unit circle, lzl < I . Thus,
     stable analog filters are mapped to stable digital filters.
           Now, let us look at how the jR-axis is mapped to the z-plane. With s = j R , we see that



      which is an equation for a circle of radius r = f centered at z =    i. To see this, note that


     Thus.

     The properties of the mapping are illustrated in the following figure.




     Since the jR-axis does not map onto the unit circle, the frequency response of the digital filter produced with this
     mapping will not, in general. be an accurate representation of the frequency response of the analog filter except when
     w is close to zero. In other words, the frequency response of a continuous-time filter will be well preserved only for
     low frequencies.
406                                                   FILTER DESIGN                                                 [CHAP. 9


9.36   Use the impulse invariance method to design a digital filter from an analog prototype that has a system
       function
                                                                          s +a
                                                       Ha(s) =
                                                                 (s      + + h2
       To design a filter using the impulse invariance technique, we first expand H,,(s) in a partial fraction expansion as
       follows,
                                                     s+a        -           AI                       A2
                                      HAS)=                     -
                                                (S   + + b2
                                                      ~ 1 ) ~        s   + (a + jh)       +   s   + (a - jb)

       where



       and

       Therefore, with
                                                                -I                    I
                                                                                      2
                                                 Hu(s)=
                                                           s+a+,jh+s+a-                       jh
       using the mapping given in Eq. (9.10), we have




       Note that the zero at s = -a is mapped to a zero at z = PT7     cos(bT,). Thus, the location of the zero in the discrete-
       time filter depends on the position of the poles as well as the zero in the analog filter.


9.37   With the impulse invariance method, the unit sample response of a digital filter is formed by sampling
       the impulse response of the continuous-time filter,



       Another approach is to use the step invariance method in which the step response of the digital filter is
       formed by sampling the step response of the continuous-time filter.
       ( a ) Design a digital filter with the step invariance method using the continuous-time prototype




       (6) Determine whether or not the filter is the same as that which would be designed using the impulse
             invariance method.

       ( a ) If the impulse response of a continuous-time filter is h,(r), its step response is




             Therefore, because the Laplace transform of the step response is related to the system function H,(s) as follows,




             then
CHAP. 91                                             FILTER DESIGN


            To design a digital filter using step invariance, we first perform a partial fraction expansion of S,(s),




            where




            and



                                          a  I             -a + j h                  -a   jh
                                            + b2 s + 2(a2+ h2)(s+ u + j h ) + 2(a2 + b2)(s+ a
                                                                                              -
            Therefore.         S,, (s) = ---    -

                                       a2                                                           - jh)


            Sampling s,,(t),
                                                               s ( n ) = s,(nT,)

            and finding the z-transform of s(n) corresponds to the substitution




           Thus, the z-transform of the step response is




           The system function of the digital filter is then




       ( b ) Using impulse invariance, we see from Prob. 9.36 that the system function is




           Note that although H ( z ) has the same poles as the filter designed using step invariance, the system functions
           are not the same. Therefore, the two designs are not equivalent.


9.38   Suppose that we would like to design a discrete-time low-pass filter by applying the impulse invariance
       method to a continuous-time Butterworth tilter that has a magnitude-squared function
                                                       FILTER DESIGN                                                  [CHAP. 9


       The specifications for the discrete-time ti lter are




       Show that the design is not affected by the value of the sampling period that is used in the impulse
       invariance technique.
       In the absence of aliasing, the impulse invariance method is a linear mapping from H,,(jQ) to H(eJL" for Iwl 5 n.
       This mapping is
                                              H W " ) = H,,(;w "=,!,         IwI 5 n
       Let us assume that there is no aliasing (this will be approximately true if the filter order is large enough). The required
       filter order is then
                                                                    log d
                                                               N Z -
                                                                    log k
       where d, the discrimination factor, is



       and k , the selectivity factor, is
                                                        d = [
                                                                (I - 6,J2
                                                                   6;z-1
                                                                                - 1
                                                                                      1"'
                                                                   k='     R
                                                                   Q,
       Clearly, the discrimination factor does not depend on the sampling period T,. In addition, with w, = Q,T, and
       w, = Q,T,, it follows that
                                                       k = - w,,l T, -
                                                                     - w,,
                                                                       -
                                                                   to,,   1T,    W,
       which does not depend on the sampling period. Therefore, the required filter order is independent of T,. Next, if we
       expand the system function of the Butterworth filter in a partial fraction expansion. we have




       where the poles, sk, are



       With impulse invariance, the system function of the discrete-time filter becomes




       and it follows that the poles of H(z) are at

                                                      2 = exp(sl   T,) = exp{Q,T,Or 1


       where

       Because w, = R, T , is the 3-dB cutoff frequency of the low-pass filter in the discrete-time domain, it is fixed by the
       tilter specifications. Therefore, the poles of H ( : ) will not be affected by the sampling period T,. For example, if we
       try to decrease T, to reduce aliasing, this would require an increase in Q, to preserve the cutoff frequency. Thus, 11
       follows that the design is not affected by T,.


9.39   Use the impulse invariance method to design a low-pass digital Butterworth filter to meet the following
       specifications:
CHAP. 91                                             FILTER DESIGN                                                          409


      In the absence of aliasing, the impulse invariance method is a linear mapping from H,(jR) to H(eJW)for Iwl 5 n,
      which is given by
                                             H(eJ") = ~ . ( . i R ) l ~ , ~ ~ , 1 45 x
      Therefore, in order to simplify the design, we will assume that there is no aliasing and then, after the design is
      completed. check to see that the filter satisfies the given specification:;. Because the parameter T, does not enter into
      the design using the impulse invariance method (see Prob. 9.38), for convenience we will set T, = 1 .
           The first step, then, is to design an analog Butterworth filter according to the following specifications:




      To determine the filter order. we compute the discrimination factor,




      and the selectivity factor.



      Thus, we have
                                                               log d
                                                         N=-         = 5.71
                                                               log k
      which, when rounded up, gives N = 6.
          For the 3-dB cutoff frequency of the Butterworth filter, we will select 52, so that




      that is, so that the Butterworth filter satisfies the passband specifications exactly (this will provide for some allowance
      for aliasing in the stopband). With




      we have




      which gives



      Therefore, the magnitude of the frequency response squared is

                                                                      I
                                                  ~HU(J')~' = I + c n / o , 7 0 9 ~

      and the 12 poles of
                                                                             I
                                                  Ha(s)Ha(-s) =
                                                                     I   + (~/jS2(.)'~
      lie on a circle of radius R, = 0.7090, at angles
                                                FILTER DESIGN                                              [CHAP. 9


as illustrated in the following figure:




Thus, the poles of the Butterworth filter are the three complex conjugate pole pairs of H,(s)H,(-s)    that are in the
left-half s-plane:




Therefore, with




forming second-order polynomials from each conjugate pole pair, we have




The next steps, which are algebraically very tedious, are lo perform a partial fraction expansion of H,,(s),




perform the transformation




and then recombine the terms. The result is


             H (z) =
                               0.0007~    ' +          +             +
                                           0.0105z~-' 0.0168z-~ 0 . 0 0 4 2 ~ -+        ~ 0.0001z-~
                                      +                                                     +
                       I - 3.3431~-I 5 . 0 1 5 0 ~ --~ 4.21532-2 + 2 . 0 7 0 3 ~ --~ 0.5593zr5 O.0646zr6

The magnitude of the frequency response in decibels is plotted in the following figure.
CHAP. 91                                             FILTER DESIGN




       As a final check on the design, evaluating H ( e J U )at w = 0 . 2 ~and w = 0 . 3 ~we
                                                                                          , find that




       Therefore, the filter exceeds the passband specifications and comes close to meeting the stopband specifications. If
       this filter is unacceptable, the design could be modified by decreasing Q, to improve the stopband performance.

9.40   Repeat Prob. 9.39 using the bilinear transformation.
       Using the bilinear transformation to design a Butterworth filter according to the specifications given in Prob. 9.39,
       we first use the transformation


       to map the passband and stopband frequencies of the digital filter to the cutoff frequencies of the analog filter. With
       Ts = 2, we have
                                                                = tan(0. I n ) == 0.3249



       and
                                                       (11
                                             R, = tan 2 = t a n ( 0 . 1 5 ~L)- 0.5095

       As we found in Prob. 9.39, the required filter order IS N = 6. For the 3-dB cutoff frequency of the analog Butterworth
       filter, we may choose any frequency in the range




       or                                             0.3667 5 R,. 5 0.39 10

       If we select Q,. =0.3667, the passband specifications will be met exactly, and the stopband specifications will be
       exceeded. Conversely. if we set R, = 0.3910. the stopband specifications will be met exactly, and the passband
       specifications exceeded. Picking a frequency between the two extremes will produce an improvement in both bands.
       Because the stopband deviation is twice that of the deviation in the passband. we will set 0,.= 0.3667 in order to
       improve the stopband performance. From Table 9-4, we find the coel'ticients in the system function of a sixth-order
       normalized (52, = I) Butterworth filter to be



       To obtain a Butterworth filter with a cutofl' frequency R, = 0.3666, we perform the low-pass-to-low-pass transfor-
       mation
                                                                    r
                                                         FILTER DESIGN                                                       [CHAP. 9


       This gives
                                                                         (0.3666)'
                         Hob) =
                                     s6   + 1.4 165s5+ 1 .0033sJ + 0.4505s3 + 0. 1349s2+ 0.0256s + 0.0024
       Finally, we apply the bilinear transformation
                                                                        I - z-'
                                                                 s=-
                                                                          +
                                                                        I 2-'
       which yields the digital filter

                 H (z) =
                                     +
                           0.0006 0.0036z-'         +             +                   +          +              +
                                                     0 . 0 0 9 0 ~ - ~ 0.0120~--' 0 . 0 0 9 0 ~ - ~ 0 . 0 0 3 6 ~ - ~ 0.0006~-'
                                                +                                 +
                              I - 3 . 2 9 4 2 ~ ' 4.8985zr2 - 4.0857zr3 1 . 9 9 3 2 ~ - ~0 . 5 3 5 3 ~ -+      ~ 0.0615~-~
       At the passband cutoff frequency, o, = 0.217, the magnitude of the frequency response is



       and at the stopband cutoff frequency, o,= 0.317, the magnitude of the frequency response is



       Therefore, this filter meets the given specifications.


9.41   Use the bilinear transformation to design a first-order low-pass Butterworth filter that has a 3-dB cutoff
       frequency w,. = 0 . 2 ~ .
       If a digital low-pass filter is to have a 3-dB cutoff frequency at w,. = 0.217, the analog Butterworth filter should have
       a 3-dB cutoff frequency
                                                   Q. = tan($)         = tan(0. I n ) = 0.3249

       For a first-order Butterworth filter.




       Therefore, the system function is
                                                                                 Q,
                                                              H0(s) = -
                                                                      s Q,.   +
       With Q, = 0.3249, applying the bilinear transformation




                                          0.3249              0.3249(1 + Z-I)     0.2452(1 + z-I)
       we have             H (z) =                    -
                                                      -                         -
                                                                                -
                                     1 - z-'
                                               +
                                               0.3249
                                                                             +
                                                        (1 - 2-I) O.3249(1 z-I)           +
                                                                                   1 - 0.5095~-I
                                         +
                                     1 z-'

9.42   A second-order continuous-time filter has a system function
                                                                         1            I
                                                        H,(s) = -+ -
                                                                s-a s-b
       where a < 0 and b i0 are real.
       ( a ) Determine the locations of the poles and zeros of H ( z ) if the filter is designed using the bilinear
             transformation with T, = 2.
       (b) Repeat part (a)for the impulse invariance technique, again with T, = 2.
CHAP. 91                                               FILTER DESIGN


       (a) The bilinear transformation is defined by the mapping




            Therefore, for the given filter, we have




            which has poles at
                                                           I                          I
                                                   zl = -          and      z2 = -
                                                        I -a                       I-h
            To find the zeros, it is necessary to combine the two terms in the system function over a common denominator.
            Doing this. we have




            Finding the roots of the numerator may be facilitated by noting that H,(s) has a zero at s = co,which gets
                                                                                                                     +
            mapped to z = - 1 with the bilinear transformation. Therefore. one of the factors of the numerator is ( 1 z-I).
            Dividing the numerator by this factor, we obtain the second factor, which is [(2 - a - b) - 2z-'1. Thus, H ( ; )
            has zeros at


       (b) With the impulse invariance technique, for first-order poles, the mapping is



            Therefore, with T, = 2 we have




            which has two poles at
                                                       z1=eL1        and        z:!=e2h
            and only one zero. which is located at
                                                               z,, = i(e2"   + eZb
                                                                                 )




9.43   The system function of a digital fi lter is




       (a) If this filter was designed using impulse invariance with T, = 2, find the system function, H&), of
           an analog filter that could have been the analog filter prototype. Is your answer unique?
       (b) Repeat part (a) assuming that the bilinear transformation was used with T, = 2.

       (a) Because H ( z ) is expanded in a partial fraction expansion, the poles at z = a k in H ( z ) are mapped from poles
           in Ha(s)according to the mapping
                                                               ( y k = esl



            Therefore, if T, = 2,
                                                                 sk =    hak
                                                      FILTER DESIGN                                            [CHAP. 9


           and one possible analog filter prototype is




           Because the mapping from the s-plane to the z-plane is not one to one, this answer is not unique. Specifically,
           note that we may also write
                                                                ak   = @rT,+iZn

           Therefore, with T, = 2, we may also have



           and another possible analog Rlter prototype is




       (6) With the bilinear transformation, because the mapping from the s-plane to the z-plane is a one-to-one mapping,
           with T, = 2,
                                                            z=-
                                                                 I +s
                                                                 I -S
           and the analog filter prototype that is mapped to H ( z ) is unique and given by




9.44   A continuous-time system is called an inlegrator. if the response of the system y,(r) to an input x u ( [ )is




       The system function for an integrator is



       ( a ) Design a discrete-time "integrator" using the bilinear transformation, and find the difference equation
             relating the input x ( n ) to the output y ( n ) of the discrete-time system.
       (b) Find the frequency response of the discrete-time integrator found in part ( a ) ,and determine whether
           or not this system is a good approximation to the continuous-time system.

       (a) With a system function H&) = I/s, the bilinear transformation produces a discrete-time filter with a system
           function



           The unit sample response of this filter is




           and the difference equation relating the output y ( n ) to the input s ( n ) is
CHAP. 91                                            FILTER DESIGN                                                          415

       (b) Because the frequency response of the continuous-time system, H,(jR) = I / j R , is related to the discrete-time
            filter through the mapping


            the frequency response of the discrete-time system is




           Note that because H (ejC")  goes to zero at w = n ,then H ( e J wwill
                                                                            ) not be a good approximation to H,(jR) =
           1 / j R except for low frequencies. However, if w << I, using the expansion




           and                                            sinxxx         x<<1


            we have

           and we have, for the frequency response.




           Therefore, for small w
                                                          H (ciw)% T,H,(jR)


9.45   Let H,(jQ) be an Nth-order low-pass Butterworth filter with a 3-dB cutoff frequency Q,.
       (a) Show that H,(s) may be transformed into an Nth-order high-pass Butterworth filter by adding N
           zeros at s = 0 and scaling the gain.
       ( 6 ) What is the relationship between the corresponding digital low-pass and high-pass Butterworth
             filters that are designed using the bilinear transformation?

       (a) For an N th-order low-pass Butterworth with a system function H,(s),




           Adding N zeros to H,(s) at s = 0, we have




           Multiplying numerator and denominator by ( J R ,          yields




           which corresponds to a magnitude-squared frequency response




           Scaling t f u ( j R )by R-N results in a filter that has a frequency response G , ( j R )with a squared magnitude




           which is a high-pass filter with a cutoff frequency R,.. Specifically, note that IC,(jR)12 is equal to zero at
           R = 0, and that I C , ( ~ R+      as R + oo,
                                        ) ~1 ~
                                                     FILTER DESIGN                                                  [CHAP. 9


       ( h ) Applying the bilinear transformation to a low-pass Butterworth filter, we have




            For the high-pass filter, on the other hand, we have




            Therefore, we see that the poles of the low-pass digital Butterworlh filter are the same as those of the high-pass
            digital Butterworth filter. The zeros, however, which are at z = - I in the case of the low-pass filter, are at
            z = I in the high-pass filter. Thus, excepl for a difference in the gain, the high-pass digital Butterworth filter
            may be derived from the low-pass filler by flipping the N zeros in H ( z ) at z = - 1 to z = 1.


9.46   The impulse invariance method and the bilinear transformation are two filter design techniques that
       preserve stability of the analog filter by mapping poles in the left-half s-plane to poles inside the unit
       circle in the z-plane. An analog filter is minimum phase if all of its poles and zeros are in the left-half
       s-plane.
       ( a ) Determine whether or not a minimum phase analog tilter is mapped to a minimum phase discrete-time
             system using the impulse invariance method.
       (b) Repeat part ( a ) for the bilinear transformation.

       (a) With impulse invariance, an analog filter with a system function




            will be mapped lo a digital filter with a system function




            Rewriting this system function as a ratio of polynomials, it follows that the locations of the zeros of H ( z ) will
            depend on the locations of poles as well as the zeros of H,,(s), and there is no way 10 guarantee that the zeros
            lie inside the unit circle. A simple example showing that a minimum phase continuous-time filter will not
            necessarily be mapped to a minimum phase discrete-time tilter is the following:



            Using the impulse invariance method with T, = I, we have




            which has a zero at
                                                     z = -(be-' - 7e-2) % - 1.256
           Therefore, although H,(s) is minimum phase, H ( z ) is not.
CHAP. 91                                                  FILTER DESIGN


       (b) The mapping between the s-plane and the z-plane with the bilinear transformation is defined by



            Therefore, a pole or a zero at s = s k becomes a pole or a zero at



            If Ha(s) is minimum phase, the poles and zeros of H,,(s) are in the left-half s-plane. In other words, if H,(s)
            has a pole or a zero at s = sk, where sk = UL j Q n ,+

                                I:kI   2 = 1 1 + ( T s / 2 ) k 1 2 1 ( 2 / ~ ) + ~ k-
                                                                                    1 2[ ( 2 / K ) + ~ k ] ~ f f i<? I
            Therefore,
                                          11 - ( T A / ~ -
                                                         ) ~1(2/TT)
                                                              I ~ - sn12 - [(2/Ts) - un12f fi:
            and it follows that a pole or a zero in the left-half s-plane will be mapped to a pole or a zero inside the unit
            circle in the z-plane (i.e., H(z) is minimum phase).


9.47   The system function of a continuous-time filter H a ( s ) of order N 2 2 may be expressed as a cascade of
       two lower-order systems:
                                                     Ha(s)= H,I(s)H,~(s)
       Therefore, a digital filter may either be designed by applying a transformation directly to H,(s) or by
       individually transforming H a l ( s )and H a z ( s )into H I ( z ) and H:!(z),respectively, and then realizing H ( z )
       as the cascade:
                                                      H ( z ) = Hi(z)Hz(z)
       ( a ) If H l ( z ) and H2(z) are designed from H O l ( s )and Ha2(s) using the impulse invariance technique,
             compare the cascade H ( z ) = H I ( z ) H 2 ( z )with the filter that is designed by using the impulse invari-
             ance technique directly on H,(s).
       (b) Repeat part ( a ) for the bilinear transformation.

       (a) Due to sampling, aliasing occurs when designing a digital filter using the impulse invariance method. Because
           the operations of sampling and convolution do not commute, the filter designed by using impulse invariance on
           H,(s) will not be the same as the filter designed by cascading the two filters that are designed using impulse
           invariance on H,,(s) and Ha2(s). In other words, if




            where h(n) = h,(nT,), hl(n) = hal(nTx),and h2(n) = ha2(nT,). As an example, consider the continuous-time
            filter that has a system function
                                                                      I         I               I
                                                    tf,(s) =                 -
                                                               ( s + l)(s+2)   s+ 1            s+2
            Using the impulse invariance technique on Ha(s) with T, = I, we have



            On the other hand, writing H,(s) as a cascade of two first-order systems,



            and using the impulse invariance method on each of these systems with T, = 1, we have



            which is not the same as the previous filter.
                                                      FILTER DESIGN                                                [CHAP 9


       ( b ) With the bilinear transformation. ( T , = 2 )




            and the two designs are the same.


9.48   What are the properties of the s-plane-to-:-plane mapping defined by




       and what might this mapping be used for?
       This mapping is very similar to the bilinear trandormation which. with T, = 2, is




       In fact, this mapping may be considered to be a cascade of two mappings. The first is the bilinear transformation,
       and the second is one that replaces 1 with -:.
                                                           - -
                                                           "  - -2

       This mapping reflects points in the :-plane about the origin and. tbr points on the unit circle. corresponds to a shift
       of 1 8 0 :
                                                  = H ( - : ) I :=,, ,,,, = /I(-c"") = H (e.l""+n')
                                     H(z1)Ic,=,,,,.,

       Therefore, this mapping has the same properties as the bilinear transformation. except that the ;St axis is mapped




       Because the unit circle is rotated hy IXO' , this mapping may be used to map low-pass analog filters into high-pass
       digital filters, and high-pass analog tilters into low-pass digital filters.

Least-Squares Filter Design

9.49   Suppose that the desired unit sample response of a linear shift-invariant system is



       Use the Pad6 approximation method to find the parameters of'a filter with a system function




       that approximates this unit sample response.
       Using the Pad6 approximation method, with p = q = I . we want to solve the following set of linear equations for
       b(0). h( I), and a( I):
CHAP. 91                                              FILTER DESIGN


       Using the last equation, we may easily solve for a ( l ) ,




       Having found a(l), we may solve for b(0) and h(l) using the first two equations




       Therefore, we have
                                                                        3
                                                          H(z) =
                                                                    1 - 0.52-'
       Notice that the unit sample response corresponding to this system exactly matches the given unit sample response. In
       general, however, this will not be true. A perfect match depends on hd(n)being the inverse z-transform of a rational
       function of z, and it depends upon an appropriate choice for the order of the Pad6 approximation (the number of
       poles and zeros).


9.50   Let the first three values of the unit sample response of a desired causal filter be hd(0) = 3 , h d ( l ) =      a?
       and h d ( 2 ) =&.
       (a) Using the Pad6 approximation method, find the coefficients of a second-order all-pole filter that has
           a unit sample response h(n), such that h ( n ) = h d ( n )for 12 = 0, 1,2.
       (b) Repeat part ( a ) for a filter that has one pole and one zero.
       (c) Repeat part ( a ) for an FIR filter that has two zeros.

       (a) For a second-order all-pole filter, the equations for the Pad6 approximation are




            which, with the given values for hn(n) become




            From the last two equations, we have




            Solving for a(1) and a(2), we find
                                                         a(])=   -A       a(2) := -1
                                                                                   72

            Then, using the first equation, we have
                                                                    h(0) = 3
            Thus, the system function of the filter is
                                                         FILTER DESIGN                                 [CHAP. 9


       (b) Using a first-order system to match the given values of hd(n),




            the equations that we must solve are as follows,




            or, using the given values for h&),




            We may solve for a( I) using the last equation.

                                                                      + $ a ( l )= 0
            or                                                    a(l)=       -a
            Next. we solve for h(0) and b(l) using the first two equations.




            which gives



            Thus, the system function is
                                                  I:;[      =    [;
                                                                  3
                                                                          ,I;'[ I;:[
                                                                          0
                                                                                       =




       (c) For an FIR filter, the solution is trivial:




9.51   Find the least-squares FIR inverse filter of length 3 for the system that has a unit sample response




                                                                  I
                                                                      2       n=O
                                                         g(n)=        I       n=l
                                                                      0       else

       Also, find the least-squares error,
                                                                       M




       for this least-squares inverse filter.
       To find the least-squares inverse, we need to solve the linear equations
CHAP. 91                                               FILTER DESIGN



       where


       is the deterministic autocorrelation of g(n). With N = 3, these equation:, may be written in matrix form as follows,




       For the given sequence g(n),we compute the autocorrelation sequence as follows,




       Therefore, the linear equations become




       and the solution is
                                                                  '     0.494   n .=0
                                                                      -0.235    n =1
                                                     h ( n )= '
                                                                        0.094   n =2
                                                                         0      else
       Performing the convolution of h ( n ) with g(n),we have




       From this sequence, we may evaluate the squared error,




9.52   Find the FIR least-squares inverse filter of length N for the system having a unit sample response



       where cr is an arbitrary real number.
       Before we begin. note that if la[ > 1, G ( z )has a zero that is outside the unit circle. In this case, G ( z )is not minimum
       phase, and the inverse filter 1 / G ( z )cannot be both causal and stable. However, if la1 < I ,




       and the inverse filter is
                                                FILTER DESIGN                                               [CHAP. 9


We begin by finding the least-squares inverse of length N = 2. The autocorrelation sequence r.,*(k) is

                                                         I+w2      k=O
                                                                   k=fl
                                                                   else

Therefore, the linear equations that we must solve are




The solution for h(O) and h ( l ) is easily seen to be




The system function of this least-squares inverse filter is




which has a zero at


Note that because


the zero of H(z) is inside the unit circle, and H(z) is minimum phase. regardless of whether the zero of G(z) is inside
or outside the unit circle.
     Let us now look at the least-squares inverse, hN(n),of' length N . In this case, the linear equations have the form




Solving these equations for arbitrary a and N may be accomplished as follows. For n = 1.2, . . . , N - 2 these
equations may be represented by the homogeneous difference equation,



The general solution to this equation is of the form



where c l and c.2 are constants that are determined by the boundary conditions at 11 = O and n = N - I [the ti rst and
last equations in Eq. (9.22)l:




Substituting Eq. (9.23) into Eq. (9.24), we have
CHAP. 91                                                   FILTER DESIGN


       which, after canceling common terms, may be simplified to




       or


       The solution for cl and c2 is




       Therefore, h N ( n )is




       Let us now look at what happens asyrnptoticaIly as N -t m. If Ial < 1,
                                                                       a"-N
                                                  lirn h N ( n )= -- a"                    n>O
                                                  N-no                   -I\'



       which is the inverse filter, that is,
                                                         lim h N ( n )= a n u ( n )= g - l ( n )
                                                       N-m



                                                                                    I
       and                                                   lirn H N ( z )= -
                                                            N-m              I - az-'
       However, if la 1 > 1,
                                                                    aN-n
                                                lirn h N ( n )= -= a-n-2                     n 1 0
                                                N-lo                @N+?

                                                                                   a -2
       and                                                 lirn HN( z ) =                -
                                                          N+m                   1 -a-Iz- 1

       which is not the inverse filter. Note that although &n) = h N ( n )* g ( n ) does not converge to S(n) as N + m, taking
       the limit o ~ B N ( zas) N + co,we have




       which is an all-pass filter, that is,




9.53   The first five samples of the unit sample response of a causal filter are

                                h(0) = 3       h(1) = - 1             h(2) = 1            h(3) = 2   h(4) = 0

       If it is known that the system function has two zeros and two poles, determine whether or not the filter is
       stable.
       The system function of this filter has the form
                                                      FILTER DESIGN                                             [CHAP, 9


       To determine whether or not this system is stable, it is necessary to find the denominator polynomial,



       and check to see whether or not the roots of A(z) lie inside the unit circle. Given that H(z) has two poles and two
       zeros, we may use the Pad6 approximation method to find the denominator coefficients:




       Using the last two equations, we have




       which become



       Substituting the given values for h(n), we have




       The solution is
                                                      a )=-            4 2 ) = 13
       and the denominator polynomial is
                                                       A(z) = I - i z - ' + !z-2
       Because the roots of this polynomial are not inside the unit circle, the filter is unstable.




                                         Supplementary Problems
FIR Filter Design

9.54   What type of window(s) may be used to design a low-pass filter with a passband cutoff frequency w , = 0.35n, a
       transition width A o = 0 . 0 2 5 ~and
                                         , a maximum stopband deviation of 8, = 0.003?

9.55   Use the window design method to design a minimum-order low-pass filter with a passband cutoff frequency o, =
       0.457, a stopband cutoff frequency w, = OSn, and a maximum stopband deviation 6, = 0.005.

9.56   We would like to design a bandstop filter to satisfy the following specifications:




       (a) What weighting function W(eJU)should be used to design this filter?
CHAP. 91                                              FILTER DESIGN                                                     425

       ( b ) What are the minimum and maximum numbers of extremal frequencies that a type I filter of order N = 128
             must have?

9.57   Suppose that we would like todesign a low-pass filter oforder N = 128 with apassband cutoff frequency w, = 0 . 4 8 ~
       and a stopband cutoff frequency of w, = 0 . 5 2 ~ .
       (a) Find the approximate passband and stopband ripple if we were to use a Kaiser window design.
       ( b ) If an equiripple filter were designed so that it had a passband ripple equal to that of the Kaiser window design
             found in part ( a ) , how small would the stopband ripple be?

9.58   We would like to design an equiripple low-pass filter of order N = 30. For a type I filter of order N , what is the
       minimum number of alternations that this filter may have. and what is the maximum number?

9.59   For a low-pass filter with ti,, = ti,, what is the difference in the stopband attenuation in decibels between a Kaiser
       window design and an equiripple filter if both filters have the same transition width?


IIR Filter Design

9.60   Find the minimum order and the 3-dB cutoff frequency of a continuous-time Butterworth filter that will satisfy the
       following Frequency response constraints:




9.61   Use the bilinear transformation to design a first-order low-pass Butterworth filter that has a 3-dB cutoff frequency
       w,.= 0 . 5 ~ .

9.62   Use the bilinear transformation to design a second-order bandpass Butterworth filter that has 3-dB cutoff frequencies
       w,= 0 . 4 and
                   ~ w,, = 0 . 6 ~ .

9.63   If the specifications for an analog low-pass filter are to have a I-dB cutoff frequency of 1 kHz and a maximum
       stopband ripple 6, = 0.01 for If I > 5 kHz, determine the required filter order for the following:
       ( a ) Butterworth filter
       (h) Type 1 Chebyshev filter
       (c) Type I1 Chebyshev filter
       (d) Elliptic filter

9.64   Let H,(jQ) be an analog filter with
                                                           HAjQ)ln=o = 1
       ( a ) If a discrete-time filter is designed using the impulse invariance method, is it necessarily true that



       (b) Repeat part ( a ) for the bilinear transformation

9.65   Consider a causal and stable continuous-time filter that has a system function



       If a discrete-time filter is designed using impulse invariance with T, = 1, find H ( z ) .

9.66   The system function of a digital filter is
                                                      FILTER DESIGN                                                [CHAP 9


       ( a ) Assuming that this filter was designed using impulse invariance with T, = 2, find the system function of two
             different analog filters that could have been the analog filter prototype.
       ( b ) If this filter was designed using the bilinear transformation with T, = 2, find the analog filter that was used as
             the prototype.

9.67   Determine the characteristics of the s-plane-to-z-plane mapping




9.68   The system function of an analog filter Ha(s)may be expressed as a parallel connection of two lower-order systems



       If Ha(s),Hal(s),
                     and Ha2(s)are mapped into digital filters using the impulse invariance technique, will it be true that



       What about with the bilinear transformation?

9.69   If an analog filter has an equiripple passband, will the digital filter designed using the impulse invariance method
       have an equiripple passband? Will it have an equiripple passband if the bilinear transformation is used?

9.70   Can an analog allpass filter be mapped to a digital allpass filter using the bilinear transformation?

9.71   An IIR low-pass digital filter is to be designed to meet the following specifications:

              Passband cutoff frequency of 0.221~
                                                with a passband ripple less than 0.01

              Stopband cutoff frequency of 0.241~
                                                with a stopband attenuation greater than 40 dB

       (a) Determine the filter order required to meet these specifications if a digital Butterworth filter is designed using
           the bilinear transformation.
       ( b ) Repeat for a digital Chebyshev filter.
       (c) Compare the number of multiplications required to compute each output value using these filters, and compare
           them to an equiripple linear phase filter.



Least-Squares Filter Design

9.72   Suppose that the desired unit sample response of a linear shift-invariant system is



       Use the Pad6 approximation method to find the parameters of a filter with a system function




       that approximates this unit sample response.

9.73   The first five samples of the unit sample response of a causal filter are

                h(0) = 0.2000        h(1) = 0.7560       h(2) = 1.0737       h(3) = -0.8410         h(4) = -0.6739

       If it is known that the system function has two zeros and two poles, determine whether or not the filter is stable.
CHAP. 91                                                  FILTER DESIGN


                                   Answers to Supplementary Problems
       A Hamming or a Blackman window or a Kaiser window with 9, = 4.6.

       h(n) = w(n)h,,(n),where w ( n ) is a Kaiser window with B = 4.09 and N = 107, and




                              1       05w 50.3~
                              5       0 . 3 5 ~9 w 5 0 . 8 ~
                              1       0 . 8 5 ~5 w 5 K
       (b) The minimum is 66 and the maximum is 69.

       ( a ) 6 , % 6, =0.0058.(b)SS =0.0016.

       The minimum number is 17 and the maximum is 18.

       5 dB.

       N = 9 and Q,. = 17.342~.



                   0.65( 1 - zr2)
       H ( z )=
                  2.65 -t 1 . 3 5 r 2 '

       ( a ) N = 4. ( h ) N = 3. ( c ) N = 3. ( d ) N = 3.

       ( a ) No. (b) Yes.

                 I - ze-Zz-'
       H ( z )= -    -
                (1 -C - ~ Z - ~ ) ~ '

       ( a ) One possible filter has a system function




            and another is                                                          I




            Note, however, that the second filter has a complex-valued impulse response.
       (b) This filter is unique and has a system function




       This is a cascade of two mappings. The first is the bilinear transformation, and the second is the mapping z + zZ,
       which compresses the frequency axis by a factor of 2. Thus, a low-pass filter is mapped into a bandstop filter, and a
       high-pass filter is mapped into a bandpass filter.

       True for both methods.

9.69   The digital filter will have an equiripple passband with the bilinear trimsformation but not with the impulse
       invariance method.
                                                      FILTER DESIGN                                            [CHAP. 9


9.70   Yes.

9.71   (a) Butterworth filter order is N = 69.
       (h) Chebyshev filter order is N = 17.
       (c) For an equiripple filter, we require N = 185, which requires 185 delays. In addition, 93 multiplications are
           needed to evaluate each value of y(n). The Butterworth and Chebyshev filters require 69 and 17 delays,
           respectively, and approximately twice this number of multiplications to evaluate each value of y(n).

9.72   Pad6 gives b(0) = 1, b ( l ) = 0.5, and a ( l ) = -0.5, or




9.73   PadC's method with p = q = 2 gives

                                                    H (z)=
                                                                 +
                                                             0.2 0.82-'    + 1.42-~
                                                                +
                                                             1 0.222-1     + 0.8zr2
       Because the roots of the denominator lie inside the unit circle, this filter is stable.
Index
A
A-D converter, 101
Aliasing, 103
Allpass filter, 59, 193
         lattice, 300
         network, 296
Alternation, 364
         theorem, 364
Analog low-pass filter, 367
         Butterworth, 367
         Chebyshev, 370
         elliptic, 372
Analog-to-digital converter, 101
Anti-aliasing filter, 104
Aperiodic, 3
Associative property, 11
Autocorrelation, 42

B
Bandpass filter, 59
Bandstop filter, 59
BIBO, 10
Bilinear transformation, 375
Bit-reversed ordering, 265
Blackman window, 360
Block convolution, 232
Branch, 287
Butterfly, 265
Butterworth analog low-pass filter, 367
         normalized, 368

C
C-D, 101
Cascade, 59
        network, 289, 294
Causality, 10
        z-transform and, 184
Center of gravity, 91
Characteristic polynomial, 16
Chebyshev analog low-pass filter, 370
Chebyshev polynomials, 364, 370
Circulant matrix, 257
Circular convolution, 228
        matrix formulation, 257
        versus linear convolution, 230
Circular shift, 227
Comb filter, 331
Commutative property, 11
Compensation filter, 102

                                          429
Complex sequence, 2
Conjugate symmetry, 4
Continuous-to-discrete converter, 101
Conservation of energy theorem, 64
Contour integration, 151
Convolution, 10, 11
        block, 232
        circular, 228
        DFT to perform, 232
        direct method, 12
        DTFT to perform, 65
        graphical method, 13
        periodic, 225
        properties, 11
        slide rule method, 15
Convolution theorem, 64, 147
        periodic, 64
Correlation, 42
Coupled form, 342
Cutoff frequency, 59, 358

D
D-A converter, 106
D-C converter, 106
Decibels, 56
Decimation, 14
Decimator, 111, 315
Decimation-in-frequency FFT, 266
Decimation-in-time FFT, 262
Derivative property, 148
DFT, 223
Direct form network, 289, 292
Discrimination factor, 367
DFS, 223
Difference equation, 15, 64
Discrete Fourier series, 223
Discrete Fourier transform, 236
        performing linear convolution with, 232
        properties, 227
Discrete-time Fourier transform, 61
        properties, 62
Discrete-time signal, 1
Discrete-time system, 7
        implementation, 287
Discrete-to-analog converter, 106
Discrete-to-continuous converter, 106
Distributive property, 11
Divide and conquer, 262
Down-sampling, 5, 110
DTFT, 61

E
Eigenfunction, 55
Elliptic analog low-pass filter, 372
Encoder, 106

                                                  430
Equiripple filter design, 363
Even sequence, 4
Exponential sequence, 3
Extraripple filter, 365
Extremal frequencies, 364

F
Feedback, 60, 195
FFT, 262
          composite N, 267
          decimation-in-frequency, 266
          decimation-in-time, 262
          mixed radix, 270
          prime factor, 271
          radix-2, 262
          radix-3, 279
          radix-4, 278
          radix-R, 270
Filter, 58
          allpass, 59
          design, 358
finite word-length effects, 302
          frequency selective, 59
          linear phase, 58
          networks (structures), 287
          specifications, 358
Finite length impulse response, 16
Finite length sequence, 3
Finite word-length effects, 302
filter coefficient quantization, 304
          overflow, 309
          pairing and ordering, 309
          round-off noise, 306
FIR, 16, 188
          structures, 289
FIR filter design, 359
          equiripple, 363
          frequency sampling, 363
          least squares inverse, 379
          least squares methods, 376
          Pade approximation, 377
          Prony's method, 378
          window design, 359
Fixed point numbers, 302
          one's complement, 303
          sign magnitude, 302
          two's complement, 303
Floating point numbers, 303
Flowgraph, 287
Frequency response, 55
          periodicity, 57
          inverse, 58
          symmetry, 58
Frequency transformations, 376
Fourier analysis, 55

                                         431
Fundamental period, 3

G
Generalized linear phase, 58, 189
Geometric series, 13
Group delay, 56
        computing, 78
        equalization, 193

H
Hamming window, 360
Hanning window, 360
High-pass filter, 59
Hilbert transform, 185
Homogeneous solution, 16

I
IIR, 16, 188
          structures, 291
IIR filter design, 366
          analog low-pass filter prototypes, 367
          bilinear transformation, 375
          frequency transformations, 376
          impulse invariance, 374
Index maps, 268
Infinite length impulse response, 16
Initial rest, 16
Initial value theorem, 148
          generalized, 161
In-place computation, 265
Interpolator, 112, 318
Inverse system, 66, 186
Inverse z-transform, 149
          contour integration, 151
          partial fraction expansion, 149
          power series, 150
Invertibility, 11

K
Kaiser window, 361

L
Lattice filter, 298
         all-pole, 300
         FIR, 298
         IIR, 301
LCCDE, 15
Least-squares filter design, 376
         FIR least squares inverse, 379
         Pade approximation, 377
         Prony's method, 378
Left-sided sequence, 3
Linear convolution using DFT, 232
Linear phase, 58, 189
         generalized, 189

                                                   432
Linear phase (continued)
        network, 289
        system function constraints, 191
        types I-IV, 190
Linear system, 8
Lollipop, 1
Low-pass filter, 59
LSI, 10

M
Memoryless, 7
Minimum energy delay, 195
Minimum phase, 194
Minimum phase lag, 195
Mixed radix FFT, 270
Modulator, 64
Modulo, 21, 226, 271
Mortgage, 46, 172
Multiplicative inverse, 271

N
Node, 287
Nyquist frequency, 103
Nyquist rate, 103

O
Odd harmonics, 277
Odd sequence, 4
One-sided z-transform, 151
One's complement, 303
Oscillator, 328
Overflow, 309
Overlap-add, 233
Overlap-save, 234

P
Pade approximation, 377
Pairing and ordering, 309
Paley-Wiener theorem, 184
Parallel network, 60, 295
Parks-McClellan algorithm, 365
Parseval's theorem, 64
Partial fraction expansion, 149, 187
Particular solution, 16
Passband, 59
         deviation, 358
Period, 3
Periodic convolution, 225
         theorem, 64
Phase, 55
         generalized linear, 58
         linear, 58
         shifter, 69
Poles, 143


                                           433
Power, 22
        series, 150
Prime factor FFT, 271
Prony's method, 378

Q
Quantization, 303
       filter coefficient, 304
Quantizer, 104

R
Radix-2 FFT, 262
Radix-R FFT, 270
Realizable system, 185
Reconstruction filter, 106
Rectangular window, 360
Reflection coefficient, 298
Region of convergence, 142
Relatively prime, 271
Residue, 151
Right-sided sequence, 3
Round-off noise, 306

S
Sample rate conversion, 110
Sampling, 103
         bandpass, 119, 120
         DTFT, 231
         frequency, 101
         period, 101
         theorem, 103
Schur-Cohn stability test, 300
Selectivity factor, 367
Shifting property, 63
Shift-invariance, 9
Shuffling, 265
Sifting property, 6
Sign bit, 302
Sign magnitude, 302
Signal, 1
         aperiodic, 3
         complex conjugate, 2
         conjugate symmetry, 4
         decomposition, 6
         down-sampling, 5
         duration, 3
         exponential, 2
         finite length, 3
         infinite length, 3
         left-sided, 3
         manipulations, 4
         periodic, 3
         right-sided, 3
         symmetric, 4
         unit sample, 2

                                 434
Signal (continued)
         unit step, 2
Signal-to-quantization noise ratio, 106
Signal manipulations, 4
Sink node, 288
Slide rule method, 15
Source node, 288
SQNR, 106
Stability, 10
         Schur-Cohn test, 300
         triangle, 185
         z-transform and, 184
Step-down recursion, 299
Step-up recursion, 298
Stopband, 59
         deviation, 358
Summation property, 155
Superposition sum, 9
Symmetric sequence, 4
System, 7
         additive., 8
         causal, 10
         function, 183
         homogeneous, 8
         invertible, 11
         linear, 8
         LSI, 10
         memoryless, 7
         shift-invariant, 9
         stable, 10
         unit sample response, 10

T
Transition band, 359
Transposed network, 296
Transposition theorem, 296
Twiddle factor, 263
Two's complement, 106, 303

U
Uniform quantizer, 104
Unit circle, 143
Unit sample, 2
Unit step, 2
Unit sample response, 10
         for a rational system function, 187
Up-sampling, 5, 112
         property, 88, 163

W
Windows, 360
Warping, 375

Z
Z-transform, 142

                                               435
Z-transform (continued)
        inverse, 149
        one-sided, 151
        properties, table of, 148
        region of convergence, 142
        useful pairs, table of, 146
Zeros, 16, 143
Zero-order hold, 107




                                      436



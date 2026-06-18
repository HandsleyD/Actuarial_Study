---
normalized_id: shared-pdf-reference-vaidyanathan-p-the-theory-of-linear-prediction-morgan-2008-isbn-1598295756-197s-gl
exam_code: SHARED
material_scope: vaidyanathan p. the theory of linear prediction (morgan, 2008)(isbn 1598295756)(197s)_gl_.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Vaidyanathan P. The theory of linear prediction (Morgan, 2008)(ISBN 1598295756)(197s)_GL_.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-vaidyanathan-p-the-theory-of-linear-prediction-morgan-2008-isbn-1598295756-197s-gl

The Theory of Linear Prediction
Copyright © 2008 by Morgan & Claypool


All rights reserved. No part of this publication may be reproduced, stored in a retrieval system, or transmitted in
any form or by any means---electronic, mechanical, photocopy, recording, or any other except for brief quotations
in printed reviews, without the prior permission of the publisher.


     The Theory of Linear Prediction
     P. P. Vaidyanathan
     www.morganclaypool.com



     ISBN: 1598295756          paperback
     ISBN: 9781598295757       paperback

     ISBN: 1598295764          ebook
     ISBN: 9781598295764       ebook



     DOI: 10.2200/S00086ED1V01Y200712SPR03
     A Publication in the Morgan & Claypool Publishers series

     SYNTHESIS LECTURES ON SIGNAL PROCESSING # 3


     Lecture #3
     Series Editor: José Moura, Carnegie Mellon University



     Series ISSN

     ISSN 1932-1236 print
     ISSN 1932-1694 electronic
The Theory of Linear Prediction
P. P. Vaidyanathan
California Institute of Technology




SYNTHESIS LECTURES ON SIGNAL PROCESSING #3




 M
 &C Mor gan &Cl aypool Publishers
To Usha, Vikram, and Sagar and my parents.
vi

     ABSTRACT
     Linear prediction theory has had a profound impact in the field of digital signal processing.
     Although the theory dates back to the early 1940s, its influence can still be seen in applications
     today. The theory is based on very elegant mathematics and leads to many beautiful insights into
     statistical signal processing. Although prediction is only a part of the more general topics of linear
     estimation, filtering, and smoothing, this book focuses on linear prediction. This has enabled
     detailed discussion of a number of issues that are normally not found in texts. For example, the
     theory of vector linear prediction is explained in considerable detail and so is the theory of line
     spectral processes. This focus and its small size make the book different from many excellent texts
     which cover the topic, including a few that are actually dedicated to linear prediction. There are
     several examples and computer-based demonstrations of the theory. Applications are mentioned
     wherever appropriate, but the focus is not on the detailed development of these applications. The
     writing style is meant to be suitable for self-study as well as for classroom use at the senior and
     first-year graduate levels. The text is self-contained for readers with introductory exposure to signal
     processing, random processes, and the theory of matrices, and a historical perspective and detailed
     outline are given in the first chapter.




     KEYWORDS
     Linear prediction theory, vector linear prediction, linear estimation, filtering, smoothing,
     line spectral processes, Levinson’s recursion, lattice structures, autoregressive models
                                                                                                          vii




                                         Preface
Linear prediction theory has had a profound impact in the field of digital signal processing.
Although the theory dates back to the early 1940s, its influence can still be seen in applications
today. The theory is based on very elegant mathematics and leads to many beautiful insights into
statistical signal processing. Although prediction is only a part of the more general topics of linear
estimation, filtering, and smoothing, I have focused on linear prediction in this book. This has
enabled me to discuss in detail a number of issues that are normally not found in texts. For example,
the theory of vector linear prediction is explained in considerable detail and so is the theory of
line spectral processes. This focus and its small size make the book different from many excellent
texts that cover the topic, including a few that are actually dedicated to linear prediction. There are
several examples and computer-based demonstrations of the theory. Applications are mentioned
wherever appropriate, but the focus is not on the detailed development of these applications.
        The writing style is meant to be suitable for self-study as well as for classroom use at the
senior and first-year graduate levels. Indeed, the material here emerged from classroom lectures that
I had given over the years at the California Institute of Technology. So, the text is self-contained
for readers with introductory exposure to signal processing, random processes, and the theory of
matrices. A historical perspective and a detailed outline are given in Chapter 1.
                                                                                                      ix




                          Acknowledgments
The pleasant academic environment provided by the California Institute of Technology and the
generous support from the National Science Foundation and the Office of Naval Research have
been crucial in developing some of the advanced materials covered in this book.
        During my ‘‘young’’ days, I was deeply influenced by an authoritative tutorial on linear
filtering by Prof. Tom Kailath (1974) and a wonderful tutorial on linear prediction by John
Makhoul (1975). These two articles, among other excellent references, have taught me a lot and
so has the book by Anderson and Moore (1979). My ‘‘love for linear prediction’’ was probably
kindled by these three references. The small contribution I have made here would not have been
possible were it not for these references and other excellent ones mentioned in the introduction in
Chapter 1.
        It is impossible to reduce to words my gratitude to Usha, who has shown infinite patience
during my busy days with research and book projects. She has endured many evenings and
weekends of my ‘‘disappearance’’ to work. Her sincere support and the enthusiasm and love from
my uncomplaining sons Vikram and Sagar are much appreciated!

P. P. Vaidyanathan

California Institute of Technology
                                                                                                                                                            xi




                                                          Contents

1. Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1
   1.1 History of Linear Prediction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1
   1.2 Scope and Outline . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2
        1.2.1 Notations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3
2. The Optimal Linear Prediction Problem . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5
   2.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5
   2.2 Prediction Error and Prediction Polynomial . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5
   2.3 The Normal Equations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6
        2.3.1 Expression for the Minimized Mean Square Error . . . . . . . . . . . . . . . . . . . . . . . 8
        2.3.2 The Augmented Normal Equation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .9
   2.4 Properties of the Autocorrelation Matrix . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 10
        2.4.1 Relation Between Eigenvalues and the Power Spectrum . . . . . . . . . . . . . . . . 12
        2.4.2 Singularity of the Autocorrelation Matrix . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 13
        2.4.3 Determinant of the Autocorrelation Matrix . . . . . . . . . . . . . . . . . . . . . . . . . . . . 15
   2.5 Estimating the Autocorrelation. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 16
   2.6 Concluding Remarks . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 18
3. Levinson’s Recursion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 19
   3.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 19
   3.2 Derivation of Levinson’s Recursion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 19
        3.2.1 Summary of Levinson’s Recursion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 22
        3.2.2 The Partial Correlation Coefficient . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 22
   3.3 Simple Properties of Levinson’s Recursion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 23
   3.4 The Whitening Effect . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 26
   3.5 Concluding Remarks . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 29
4. Lattice Structures for Linear Prediction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 31
   4.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 31
   4.2 The Backward Predictor . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 31
        4.2.1 All-Pass Property . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 33
xii     THE THEORY OF LINEAR PREDICTION
              4.2.2 Orthogonality of the Optimal Prediction Errors . . . . . . . . . . . . . . . . . . . . . . . . 34
         4.3 Lattice Structures . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 35
              4.3.1 The IIR LPC Lattice. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 36
              4.3.2 Stability of the IIR Filter . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 37
              4.3.3 The Upward and Downward Recursions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 38
         4.4 Concluding Remarks . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 39
      5. Autoregressive Modeling . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 41
         5.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 41
         5.2 Autoregressive Processes . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 41
         5.3 Approximation by an AR(N) Processes . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 44
              5.3.1 If a Process is AR, Then LPC Will Reveal It . . . . . . . . . . . . . . . . . . . . . . . . . . 45
              5.3.2 Extrapolation of the Autocorrelation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 46
         5.4 Autocorrelation Matching Property . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 47
         5.5 Power Spectrum of the AR Model . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 50
         5.6 Application in Signal Compression . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 58
         5.7 MA and ARMA Processes . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 61
         5.8 Summary . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 62
      6. Prediction Error Bound and Spectral Flatness . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 65
         6.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 65
         6.2 Prediction Error for an AR Process . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 65
         6.3 A Measure of Spectral Flatness . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 68
         6.4 Spectral Flatness of an AR Process . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 72
         6.5 Case Where Signal Is Not AR . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 75
              6.5.1 Error Spectrum Gets Flatter as Predictor Order Grows . . . . . . . . . . . . . . . . . 76
              6.5.2 Mean Square Error and Determinant . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 79
         6.6 Maximum Entropy and Linear Prediction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 81
              6.6.1 Connection to the Notion of Entropy . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 82
              6.6.2 A Direct Maximization Problem . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 83
              6.6.3 Entropy of the Prediction Error . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 85
         6.7 Concluding Remarks . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 85
      7. Line Spectral Processes . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 87
         7.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 87
         7.2 Autocorrelation of a Line Spectral Process . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 88
              7.2.1 The Characteristic Polynomial . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 90
              7.2.2 Rank Saturation for a Line Spectral Process . . . . . . . . . . . . . . . . . . . . . . . . . . . 91
         7.3 Time Domain Descriptions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 91
                                                                                                                          CONTENTS                  xiii
        7.3.1 Extrapolation of Autocorrelation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 91
        7.3.2 All Zeros on the Unit Circle . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 91
        7.3.3 Periodicity of a Line Spectral Process . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 92
        7.3.4 Determining the Parameters of a Line Spectral Process . . . . . . . . . . . . . . . . . 93
   7.4 Further Properties of Time Domain Descriptions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 93
   7.5 Prediction Polynomial of Line Spectral Processes . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 98
   7.6 Summary of Properties . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 100
   7.7 Identifying a Line Spectral Process in Noise . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 102
        7.7.1 Eigenstructure of the Autocorrelation Matrix . . . . . . . . . . . . . . . . . . . . . . . . . 103
        7.7.2 Computing the Powers at the Line Frequencies . . . . . . . . . . . . . . . . . . . . . . . 105
   7.8 Line Spectrum Pairs . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 111
   7.9 Concluding Remarks . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 115
8. Linear Prediction Theory for Vector Processes .. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 117
   8.1 Introduction. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .117
   8.2 Formulation of the Vector LPC Problem . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 117
   8.3 Normal Equations: Vector Case . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 120
   8.4 Backward Prediction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 120
   8.5 Levinson’s Recursion: Vector Case . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 122
   8.6 Properties Derived from Levinson’s Recursion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 126
        8.6.1 Properties of Matrices Fmf and Fbm . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 126
        8.6.2 Monotone Properties of the Error Covariance Matrices . . . . . . . . . . . . . . . . 128
        8.6.3 Summary of Properties Relating to Levinson’s Recursion . . . . . . . . . . . . . . 128
   8.7 Transfer Matrix Functions in Vector LPC . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 129
   8.8 The FIR Lattice Structure for Vector LPC . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 130
        8.8.1 Toward Rearrangement of the Lattice . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 131
        8.8.2 The Symmetrical Lattice . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 133
   8.9 The IIR Lattice Structure for Vector LPC . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 135
   8.10 The Normalized IIR Lattice . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 137
   8.11 The Paraunitary or MIMO All-Pass Property . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 138
        8.11.1 Unitarity of Building Blocks . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 140
        8.11.2 Propagation of Paraunitary Property . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 141
        8.11.3 Poles of the MIMO IIR Lattice . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 142
   8.12 Whitening Effect and Stalling . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 144
   8.13 Properties of Transfer Matrices in LPC Theory . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 146
        8.13.1 Review of Matrix Fraction Descripions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 146
        8.13.2 Relation Between Predictor Polynomials . . . . . . . . . . . . . . . . . . . . . . . . . . . . 148
xiv      THE THEORY OF LINEAR PREDICTION
         8.14 Concluding Remarks . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 149
      A. Linear Estimation of Random Variables . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 151
         A.1 The Orthogonality Principle . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 151
         A.2 Closed-Form Solution . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 152
         A.3 Consequences of Orthogonality . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 154
         A.4 Singularity of the Autocorrelation Matrix . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 156
      B. Proof of a Property of Autocorrelations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 157
      C. Stability of the Inverse Filter . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 159
      D. Recursion Satisfied by AR Autocorrelations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .161
         Problems . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 163
         References . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 171
         Author Biography . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 177
         Index . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 179
                                                                                                             1




                                       CHAPTER 1

                                     Introduction

Digital signal processing has influenced modern technology in many wonderful ways. During the
course of signal processing history, several elegant theories have evolved on a variety of important
topics. These theoretical underpinnings, of which we can be very proud, are certainly at the heart
of the crucial contributions that signal processing has made to the modern technological society we
live in.
        One of these is the theory of linear prediction. This theory, dating back to the 1940s, is
fundamental to a number of signal processing applications. For example, it is at the center of many
modern power spectrum estimation techniques. A variation of the theory arises in the identification
of the direction of arrival of an electromagnetic wave, which is important in sensor networks, array
processing, and radar. The theory has been successfully used for the representation, modeling,
compression, and computer generation of speech waveforms. It has also given rise to the idea of
line spectrum pairs, which are used in speech compression based on perceptual measures. More
recently, vector versions of linear prediction theory have been applied for the problem of blind
identification of noisy communication channels.
        Another product of the theory is a class of filtering structures called lattice structures. These
have been found to be important in speech compression. The same structures find use in the design
of robust adaptive digital filter structures. The infinite impulse response (IIR) version of the linear
prediction lattice is identical to the well-known all-pass lattice structure that arises in digital filter
theory. The lattice has been of interest because of its stability and robustness properties despite
quantization.
        In this book, we give a detailed presentation of the theory of linear prediction and place in
evidence some of the applications mentioned above. Before discussing the scope and outline, it is
important to have a brief glimpse of the history of linear prediction.

1.1      HISTORY OF LINEAR PREDICTION
Historically, linear prediction theory can be traced back to the 1941 work of Kolmogorov, who
considered the problem of extrapolation of discrete time random processes. Other early pioneers
are Levinson (1947), Wiener (1949), and Weiner and Masani (1958), who showed how to extend
2   THE THEORY OF LINEAR PREDICTION
    the ideas for the case of multivariate processes. One of Levinson’s contributions, , which for some
    reason he regarded as ‘‘mathematically trivial,’’ is still in wide use today (Levinson’s recursion). For
    a very detailed scholarly review of the history of statistical filtering, we have to refer the reader to
    the classic article by Kailath (1974), wherein the history of linear estimation is traced back to its
    very roots.
           An influential early tutorial is the article by John Makhoul (1975) , which reviews the
    mathematics of linear prediction, Levinson’s recursion, and so forth and makes the connection to
    spectrum estimation and the representation of speech signals. The connection to power spectrum
    estimation is studied in great detail in a number of early articles [Kay and Marple, 1981; Robinson,
    1982; Marple, 1987; Kay, 1988]. Connections to maximum entropy and spectrum estimation
    techniques can be found in Kay and Marple (1981), Papoulis (1981), and Robinson (1982). Articles
    that show the connection to direction of arrival and array processing include Schmidt (1979),
    Kumaresan (1983), and Paulraj et al. (1986).
           Pioneering work that explored the application in speech coding includes the work of Atal
    and Schroeder (1970) and that of Itakura and Saito (1970). Other excellent references for this
    are Makhoul (1975), Rabiner and Schafer (1978), Jayant and Noll (1984), Deller et al. (1993),
    and Schroeder (1999). Applications of multivariable models can be found even in the early image
    processing literature (e.g., see Chellappa and Kashyap, 1985).
           The connection to lattice structures was studied by Gray and Markel (1973) and Makhoul
    (1977), and their applications in adaptive filtering and channel equalization were studied by a
    number of authors (e.g., Satorius and Alexander, 1979). This application can be found in a number
    of books (e.g., Haykin, 2002; Sayed, 2003). All-pass lattice structures that arise in digital filter
    theory are explained in detail in standard signal processing texts (Vaidyanathan, 1993; Proakis and
    Manolakis, 1996; Oppenheim and Schafer, 1999; Mitra, 2001; Antoniou, 2006).
           Although the history of linear prediction can be traced back to the 1940s, it still finds new
    applications. This is the beauty of any solid mathematical theory. An example is the application of
    the vector version of linear prediction theory in blind identification of noisy finite impulse response
    (FIR) channels (Gorokhov and Loubaton, 1999; Lopez-Valcarce and Dasgupta, 2001).


    1.2      SCOPE AND OUTLINE
    Many signal processing books include a good discussion of linear prediciton theory, for example,
    Markel and Gray (1976), Rabiner and Schafer (1978), Therrien (1992), Deller et al. (1993),
    Anderson and Moore (1979), Kailath et al. (2000), Haykin (2002), and Sayed (2003). The book
    by Strobach (1990) is dedicated to an extensive discussion of linear prediction, and so is the early
    book by Markel and Gray (1976), which also discusses application to speech. The book by Therrien
    (1992) not only has a nice chapter on linear prediction, it also explains the applications in spectrum
                                                                                   INTRODUCTION            3
estimation extensively. Another excellent book is the one by Kailath et al. (2000), which focuses on
the larger topic of linear estimation. Connections to array processing are also covered by Therrien
(1992) and Van Trees (2002).
       This short book focuses on the theory of linear prediction. The tight focus allows us to
include under one cover details that are not normally found in other books. The style and emphasis
here are different from the above references. Unlike most of the other references, we have included
a thorough treatment of the vector case (multiple-input/multiple-output linear predictive coding,
or MIMO LPC) in a separate chapter. Another novelty is the inclusion of a detailed chapter on the
theory of line spectral processes. There are several examples and computer-based demonstrations
throughout the book to enhance the theoretical ideas. Applications are briefly mentioned so that
the reader can see the connections. The reader interested in these applications should peruse some
of the references mentioned above and references in the individual chapters.
       Chapter 2 introduces the optimal linear prediction problem and develops basic equations for
optimality, called the normal equations. A number of properties of the solution are also studied.
Chapter 3 introduces Levinson’s recursion, which is a fast procedure to solve the normal equations.
This recursion places in evidence further properties of the solution. In Chapter 4, we develop lattice
structures for linear prediction. Chapter 5 is dedicated to the topic of autoregressive modeling,
which has applications in signal representation and compression.
       In Chapter 6, we develop the idea of flatness of a power spectrum and relate it to predictability
of a process. Line spectral processes are discussed in detail in Chapter 7. One application is in the
identification of sinusoids in noise, which is similar to the problem of identifying the direction of
arrival of an electromagnetic wave. The chapter also discusses the theory of line spectrum pairs,
which are used in speech compression.
       In Chapter 8, a detailed discussion of linear prediction for the MIMO case (case of vector
processes) is presented. The MIMO lattice and its connection to paraunitary matrices is also
explored in this chapter. The appendices include some review material on linear estimation as well
as a few details pertaining to some of the proofs in the main text.
       A short list of homework problems covering most of the chapters is included at the end,
before the bibliography section.


1.2.1 Notations
Boldface letters such as A and v indicate matrices and vectors. Superscript T,*, and †as in AT , A*,
       †
and A denote, respectively, the transpose, conjugate, and transpose--conjugate of a matrix. The
tilde notation on a function of z is defined as follows:

                                          (z) = H† (1/z *)
                                         H
4   THE THEORY OF LINEAR PREDICTION
    Thus,
                                                                    
                              H(z) =                   ( z) =
                                            h(n)z−n ⇒ H
                                                                          †
                                                                         h (n)zn ,
                                        n                            n

    so that the tilde notation effectively replaces all coefficients with the transpose conjugates and
    replaces z with 1/z. For example,
                                                    (z) = h*(0) + h*(1)z
                           H(z) = h(0) + h(1)z−1 ⇒ H

    and
                                        a0 + a1 z−1   (z) = a0* + a1* z .
                               H(z) =               ⇒H
                                        1 + b1 z−1            1 + b1* z
    Note that the tilde notation reduces to transpose conjugation on the unit circle:
                                             (e jω ) = H† (e jω )
                                            H

    As mentioned in the preface, the text is self-contained for readers with introductory exposure to
    signal processing, random processes, and matrices. The determinant of a square matrix A is denoted
    as det A and the trace as Tr A. Given two Hermitian matrices A and B, the notation A ≥ B means
    that A − B is positive semidefinite, and A > B means that A − B is positive definite.

                                               •    •   •    •
                                                                                                          5




                                         CHAPTER 2

            The Optimal Linear Prediction
                     Problem

2.1        INTRODUCTION
In this chapter, we introduced the optimal linear prediction problem. We develop the equations for
optimality and discuss some properties of the solution.

2.2        PREDICTION ERROR AND PREDICTION POLYNOMIAL
Let x(n) be a wide sense stationary (WSS) random process (Papoulis, 1965), possibly complex.
Suppose we wish to predict the value of the sample x(n) using a linear combination of N most
recent past samples. The estimate has the form

                                     f
                                                     
                                                     N
                                   
                                   xN (n) = −              aN* ,i x(n − i).                      (2.1)
                                                     i=1

The integer N is called the prediction order. Notice the use of two subscripts for a, the first one
being the prediction order. The superscript f on the left is a reminder that we are discussing the
‘‘forward’’ predictor, in contrast to the ‘‘backward predictor’’ to be introduced later. The estimation
error is
                                          f                       f
                                         eN (n) = x(n) − 
                                                         xN (n),                                 (2.2)

that is,

                                   f
                                                       
                                                       N
                                 eN (n) = x(n) +               aN* ,i x(n − i).                  (2.3)
                                                       i=1

                                          f
We denote the mean squared error as EN :
                                                fΔ         f
                                              EN =E[|eN (n)|2 ].                                 (2.4)

In view of WSS property, this is independent of time. The optimum predictor (i.e., the optimum
set of coefficients aN* ,i ) is the one that minimizes this mean squared value. From Eq. (2.3), we see
6   THE THEORY OF LINEAR PREDICTION


             x(n)             A N (z)               eNf (n)       eNf (n)                1/ A N (z)        x(n)

               (a)      FIR prediction filter                               (b)       IIR inverse filter


                        FIGURE 2.1: (a) The FIR prediction filter and (b) its inverse.



                                  f
    that the prediction error eN (n) can be regarded as the output of an FIR filter AN(z) in response to
    the WSS input x(n). See Fig. 2.1. The FIR filter transfer function is given by

                                                                 
                                                                 N
                                                AN ( z ) = 1 +         aN* ,i z−i.                                    (2.5)
                                                                 i=1


                                                                                                              f
    The IIR filter 1/AN (z) can therefore be used to reconstruct x(n) from the error signal eN (n) (Fig.
                                                                                                          f
    2.1(b)). The conjugate sign on aN,i in the definition (2.5) is for future convenience. Because eN(n)
                                                                               f
    is the output of a filter in response to a WSS input, we see that eN (n) is itself a WSS random
    process. AN (z) is called the prediction polynomial, although its output is only the prediction error.
           Thus, linear prediction essentially converts the signal x(n) into the set of N numbers {aN,i }
                           f                                        f
    and the error signal eN (n). We will see later that the error eN (n) has a relatively flat power spectrum
    compared with x(n). For large N, the error is nearly white, and the spectral information of x(n) is
    mostly contained in the coefficient {aN,i }. This fact is exploited in data compression applications.
    The technique of linear predictive coding (LPC) is the process of converting segments of a real time
    signal into the small set of numbers {aN,i } for storage and transmission (Section 5.6).


    2.3      THE NORMAL EQUATIONS
                                                                                                                  f
    From Appendix A.1, we know that the optimal value of aN,i should be such that the error eN (n) is
    orthogonal to x(n − i), that is,

                                            f
                                        E[eN (n)x* (n − i)] = 0,          1 ≤ i ≤ N.                                  (2.6)

    This condition gives rise to N equations similar to Eq. (A.13). The elements of the matrices R and
    r, defined in Eq. (A.13), now have a special form. Thus,



                       [R]im = E[x(n − 1 − i)x* (n − 1 − m)],                     0 ≤ i, m ≤ N − 1.
                                                       THE OPTIMAL LINEAR PREDICTION PROBLEM                  7

Define R(k) to be the autocorrelation sequence of the WSS process x(n), that is,1

                                            R(k) = E[x(n)x* (n − k)].                                 (2.7)

Using the fact that R(k) = R* (−k), we can then simplify Eq. (A.13) to obtain
                    ⎡                                                ⎤⎡        ⎤ ⎡        ⎤
                          R(0)          R(1)       . . . R ( N − 1)      aN ,1     R* (1)
                    ⎢                                                ⎥⎢        ⎥ ⎢        ⎥
                    ⎢     R* (1)        R(0)       . . . R ( N − 2 ) ⎥ ⎢ aN ,2 ⎥ ⎢ R* (2) ⎥
                    ⎢                                                ⎥⎢ . ⎥ = −⎢ . ⎥                  (2.8)
                    ⎢        ..          ..        ..         ..     ⎥⎢ . ⎥      ⎢ . ⎥
                    ⎣         .           .           .        .     ⎦⎣ . ⎦      ⎣ . ⎦
                        R* (N − 1) R* (N − 2) . . .       R(0)          aN ,N            R* (N)
                                                                                                 
                                           RN                                             −r


For example, with N = 3, we get
                             ⎡                    ⎤⎡      ⎤    ⎡        ⎤
                               R(0) R(1) R(2)        a3,1        R* (1)
                             ⎢                    ⎥⎢      ⎥    ⎢        ⎥
                             ⎣ R* (1) R(0) R(1) ⎦ ⎣ a3,2 ⎦ = − ⎣ R* (2) ⎦ .                           (2.9)
                               R* (2) R* (1) R(0)    a3,3        R* (3)
                                                  
                                           R3


These equations have been known variously in the literature as normal equations, Yule--Walker
equations, and Wiener--Hopf equations . We shall refer to them as normal equations. We can find a
unique set of optimal predictor coefficients aN,i, as long as the N × N matrix RN is nonsingular.
Singularity of this matrix will be analyzed in Section 2.4.2. Note that the matrix RN is Toeplitz,
that is, all the elements on any line parallel to the main diagonal are identical. We will elaborate
more on this later.
        Minimum-phase property. The optimal predictor polynomial AN (z) in Eq. (2.5), which
is obtained from the solution to the normal equations, has a very interesting property. Namely,
all its zeros, zk satisfies |zk | ≤ 1. That is, AN (z) is a mimimum-phase polynomial. In fact, the
zeros are strictly inside the unit circle |zk | < 1, unless x(n) is a very restricted process called a
line spectral process (Section 2.4.2). The minimum-phase property guarantees that the IIR filter
1/AN (z) is stable. The proof of the minimum-phase property follows automatically as a corollary
of the so-called Levinson’s recursion, which will be presented in Section 3.2. A more direct proof
is given in Appendix C.                                                                             



1
    A more appropriate notation would be Rxx (k), but we have omitted the subscript for simplicity.
8   THE THEORY OF LINEAR PREDICTION
    2.3.1 Expression for the Minimized Mean Square Error
    We can use Eq. (A.17) to arrive at the following expression for the minimized mean square error:

                                         f
                                                           
                                                           N
                                       EN = R(0) +                aN* ,i R* (i).
                                                            i=1

               f
    Because EN is real, we can conjugate this to obtain

                                           f
                                                            
                                                            N
                                         EN = R(0) +               aN,i R(i).                 (2.10)
                                                             i=1

                     f
    Next, because eN (n) is orthogonal to the past N samples x(n − k), it is also orthogonal to the
               f                         f       f
    estimate 
             xN (n). Thus, from x(n) = 
                                       xN(n) + eN (n), we obtain
                                                                             f
                                 E[ |x(n)|2 ] = E[ |
                                                    x(n)|2] + E[ |eN (n)|2] .                 (2.11)
                                                                         
                                                                                 f
                                                                            EN


    Thus the mean square value of x(n) is the sum of mean square values of the estimate and the
    estimation error.
           Example 2.1: Second-Order Optimal Predictor. Consider a real WSS process with auto-
    correlation sequence

                                R(k) = (24/5) × 2−|k| − (27/10) × 3−|k| .                     (2.12)

    The values of the first few coefficients of R(k) are

                                R(0) = 2.1, R(1) = 1.5, R(2) = 0.9, . . .                     (2.13)

    The first-order predictor produces the estimate
                                               f
                                          x1 (n) = −a1,1 x(n − 1),                           (2.14)

    and the optimal value of a1,1 is obtained from R(0)a1,1 = −R(1), that is,

                                                           R(1)    5
                                               a1 ,1 = −        =−
                                                           R(0)    7

    The optimal predictor polynomial is

                                   A1 (z) = 1 + a1,1 z−1 = 1 − (5/7)z−1                       (2.15)
                                              THE OPTIMAL LINEAR PREDICTION PROBLEM                    9
The minimized mean square error is, from Eq. (2.10),
                                   f
                                  E1 = R(0) + a1,1 R(1) = 36/35.                             (2.16)

The second-order optimal predictor coefficients are obtained by solving the normal equations Eq.
(2.8) with N = 2, that is,
                                                       
                                2.1 1.5       a2,1         1.5
                                                     =−                                   (2.17)
                                1.5 2.1       a2,2         0.9

The result is a2,1 = −5/6 and a2,2 = 1/6. Thus, the optimal predictor polynomial is

                               A2 (z) = 1 − (5/6)z−1 + (1/6)z−2 .                            (2.18)

The minimized mean square error, computed from Eq. (2.10), is
                              f
                            E2 = R(0) + a2,1 R(1) + a2,2 R(2) = 1.0.                         (2.19)

2.3.2 The Augmented Normal Equation
We can augment the error information in Eq. (2.10) to the normal equations (2.8) simply by
moving the right hand side in Eq. (2.8) to the left and adding an extra row at the top of the matrix
RN . The result is
                   ⎡                                      ⎤⎡       ⎤ ⎡ f⎤
                      R(0)      R(1)       . . . R(N)          1          EN
                   ⎢                                      ⎥⎢       ⎥ ⎢ ⎥
                   ⎢ R* (1)     R(0)       . . . R(N − 1) ⎥ ⎢ aN,1 ⎥ ⎢ 0 ⎥
                   ⎢ .                                    ⎥⎢ . ⎥ = ⎢ . ⎥                      (2.20)
                   ⎢ .             ..      ..       ..    ⎥⎢ . ⎥ ⎢ . ⎥
                   ⎣ .              .         .      .    ⎦⎣ . ⎦ ⎣ . ⎦
                      R* (N) R* (N − 1) . . .      R(0)           aN,N       0
                                                                        
                                       RN+1                        aN

This is called the augmented normal equation for the N th-order optimal predictor and will be used
in many of the following sections. We conclude this section with a couple of remarks about normal
equations.

    1. Is any Toeplitz matrix an autocorrelation? Premultiplying both sides of the augmented
       equation by vector a†N , we obtain
                                               †              f
                                              aN RN+1 aN = EN .                              (2.21)

       Because RN+1 is positive semidefinite, this gives a second verification of the (obvious) fact
             f
       that EN ≥ 0. This observation, however, has independent importance. It can be used to
10    THE THEORY OF LINEAR PREDICTION
              prove that any positive definite Toeplitz matrix is an autocorrelation of some WSS process
              (see Problem 14).
           2. From predictor coefficients to autocorrelations. Given the set of autocorrelation coefficients
              R(0), R(1), . . . , R(N ), we can uniquely identify the N predictor coefficients aN,i and the
                                    f
              mean square error EN by solving the normal equations (assuming nonsingularity) and then
                                                                                                          f
              using Eq. (2.10). Conversely, suppose we are given the solution aN,i and the error EN .
              Then, we can work backward and uniquely identify the autocorrelation coefficients R(k),
              0 ≤ k ≤ N. This result, perhaps not obvious, is justified as part of the proof of Theorem
              5.2 later.



     2.4       PROPERTIES OF THE AUTOCORRELATION MATRIX
     The N × N autocorrelation matrix RN of a WSS process can be written as


                                                 RN = E[x(n)x† (n)]                                       (2.22)


     where

                                                                                  T
                               x(n) = x(n) x(n − 1)          ...    x(n − N + 1)        .                 (2.23)


     For example, the 3 × 3 matrix R3 in Eq. (2.9) is

                                      ⎡        ⎤
                                        x(n)
                                    ⎢          ⎥
                             R3 = E ⎣ x(n − 1) ⎦ [ x* (n)      x* (n − 1) x* (n − 2) ].
                                      x(n − 2)


     This follows from the definition R(k) = E[x(n)x* (n − k)] and from the property R(k) = R* (−k).
     We first observe some of the simple properties of RN :

           1. Positive definiteness. Because x(n)x† (n) is Hermitian and positive semidefinite, RN is also
              Hermitian and positive semidefinite. In fact, it is positive definite as long as it is nonsingular.
              Singularity is discussed in Section 2.4.2.
           2. Diagonal elements. The quantity R(0) appears on all the diagonal elements and is the mean
              square value of the random process, that is, R(0) = E[|x(n)|2 ].
                                            THE OPTIMAL LINEAR PREDICTION PROBLEM                       11
    3. Toeplitz property. We observed earlier that RN has the Toeplitz property, that is, the (k, m)
       element of RN depends only on the difference m − k. To prove the Toeplitz property
       formally, simply observe that

                                    [RN]km = E[x(n − k)x* (n − m)]
                                           = E[x(n)x* (n − m + k)]
                                           = R(m − k).

       The Toeplitz property is a consequence of the WSS property of x(n). In Section 3.2, we
       will derive a fast procedure called the Levinson’s recursion to solve the normal equations.
       This recursion is made possible because of the Toeplitz property of RN .
    4. A filtering interpretation of eigenvalues. The eigenvalues of the Toeplitz matrix RN can be
       given a nice interpretation. Consider an FIR filter

                               V(z) = v0* + v*1 z−1 + . . . + v*N−1 z−(N−1)                   (2.24)

       with input x(n). Its output can be expressed as

                  y(n) = v0* x(n) + v1* x(n − 1) + . . . + v*N−1 x(n − N + 1) = v† x(n),

       where
                                                                      
                                     v† = v*0     v*1    ...   vN
                                                                * −1

       The mean square value of y(n) is E[|v† x(n)|2 ] = v† E[x(n)x† (n)]v = v† RNv. Thus,

                                           E[|y(n)|2 ] = v† RN v.                             (2.25)

       That is, given the Toeplitz autocorrelation matrix RN , the quadratic form v† RN v is the
       mean square value of the output of the FIR filter V(z), with input signal x(n). In particular,
       let v be an unit-norm eigenvector of RN with eigenvalue λ, that is,

                                          RN v = λv,     v† v = 1.

       Then,

                                                v† RN v = λ.                                  (2.26)

       Thus, any eigenvalue of RN can be regarded as the mean square value of the output y(n) for
       appropriate choice of the unit-energy filter V(z) driven by x(n).

In the next few subsections, we study some of the deeper properties of the autocorrelation matrix.
These will be found to be useful for future discussions.
12    THE THEORY OF LINEAR PREDICTION
     2.4.1 Relation Between Eigenvalues and the Power Spectrum
     Suppose λi , 0 ≤ i ≤ N − 1 are the eigenvalues of RN . Because the matrix is positive semidefinite,
     we know that these are real and nonnegative. Now, let Sxx (ejω ) be the power spectrum of the
     process x(n), that is,
                                                                  
                                                                  ∞
                                                  Sxx (e jω ) =          R(k)e−jωk .                          (2.27)
                                                                  k=−∞

     We know Sxx (e jω ) ≥ 0. Now, let Smin and Smax denote the extreme values of the power spectrum
     (Fig. 2.2). We will show that the eigenvalues λi are bounded as follows:

                                                       Smin ≤ λi ≤ Smax .                                     (2.28)

     For example, if x(n) is zero-mean white, then Sxx (e jω ) is constant, and all the eigenvalues are equal
     (consistent with the fact that RN is diagonal with all diagonal elements equal to R(0)).
            Proof of Eq. (2.28). Consider again a filter V(z) as in (2.24) with input x(n) and denote the
     output as y(n). Because the mean square value is the integral of the power spectrum, we have
                                               2π
                                            1
                             E[|y(n)|2] =           Syy (e jω )dω
                                           2π 0
                                               2π
                                            1
                                        =           Sxx (e jω )|V(e jω )|2 dω
                                           2π 0
                                                    2π
                                                                      dω
                                           ≤ Smax         |V(e jω )|2      = Smax v† v
                                                     0                2π
     where the last equality follows from Parseval’s theorem. Similarly, E[|y(n)|2 ] ≥ Smin v† v. With v
     constrained to have unit norm (v† v = 1), we then have

                                                   Smin ≤ E[|y(n)|2 ] ≤ Smax                                  (2.29)



                                          S max
                                 jω
                        Sxx (e        )                                                     All eigenvalues
                                                                                            are here


                                                         S min
                                                                                                  ω
                                      0                                                2π

     FIGURE 2.2: The relation between power spectrum and eigenvalues of the autocorrelation matrix.
                                             THE OPTIMAL LINEAR PREDICTION PROBLEM                       13



                                            poorly conditioned


                        jω                                 well conditioned
                  Sxx (e )



                                                                                   ω
                             0                                                2π

FIGURE 2.3: Examples of power spectra that are well and poorly conditioned.



But we have already shown that any eigenvalue of RN can be regarded as the mean square value
E[|y(n)|2 for appropriate choice of the unit-energy filter V(z) (see remark after Eq. (2.26)). Because
(2.29) holds for every possible output y(n) with unit-energy V(z), Eq. (2.28), therefore, follows. 
      With λmin and λmax denoting the extreme eigenvalues of RN , the ratio

                                                 λmax
                                          N =         ≥1                                       (2.30)
                                                 λmin

is called the condition number of the matrix. It is well-known (Golub and Van Loan, 1989) that if
this ratio is large, then numerical errors tend to have a more severe effect during matrix inversion
(or when trying to solve Eq. (2.8)). It is also known that the condition number cannot decrease as
the size N increases (Problem 12). If the condition number is close to unity, we say that the system
of equations is well-conditioned. By comparison with Eq. (2.28), we see that

                                                  λmax   Smax
                                     1≤N =             ≤                                       (2.31)
                                                  λmin   Smin

Thus, if a random process has a nearly flat power spectrum (i.e., Smax /Smin ≈ 1), it can be
considered to be a well-conditioned process. If the power spectrum has a wide range, it is possible
that the process is poorly conditioned (i.e., N could be very large). See Fig. 2.3 for demonstration.
Also see Problem 11.


2.4.2 Singularity of the Autocorrelation Matrix
If the autocorrelation matrix is singular, then the corresponding random variables are linearly
14    THE THEORY OF LINEAR PREDICTION


                                   x(n)               V(z)                        y(n) = 0
                                                                                  for all time
                                                      FIR

     FIGURE 2.4: The FIR filter V(z), which annihilates a line spectral process.



     dependent (Section A.4). To be more quantitative, let us assume that RL+1 [the (L + 1) × (L + 1)
     matrix] is singular. Then, proceeding as in Section A.4, we conclude that

                               v0* x(n) + v1* x(n − 1) + . . . + vL* x(n − L) = 0,                      (2.32)

     where not all vi ’s are zero. This means, in particular, that if we measure a set of L successive samples
     of x(n), then all the future samples can be computed recursively, with no error. That is, the process
     is fully predictable.
             Eq. (2.32) implies that if we pass the WSS random process x(n) through an FIR filter (see
     Fig. 2.4),

                                     V(z) = v0* + v1* z−1 + . . . + vL* z−L ,                           (2.33)

     then the output y(n) is zero for all time! Its power spectrum Syy (e jω ), therefore, is zero for all ω.
     Thus

                                      Syy (e jω ) = Sxx (e jω )|V(e jω )|2 ≡ 0.                         (2.34)

     Because V(z) has at most L zeros on the unit circle (i.e., |V(e jω )|2 has, at most, L distinct zeros in
     0 ≤ ω < 2π ), we conclude that Sxx (e jω ) can be nonzero only at these points. That is, it has the
     form
                                                
                                                L
                                     jω
                               Sxx (e ) = 2π          ci δa (ω − ωi ),            0 ≤ ω < 2π,           (2.35)
                                                i=1

     which is a linear combination of Dirac delta functions. This is demonstrated in Fig. 2.5. The
     autocorrelation of the process x(n), which is the inverse Fourier transform of Sxx (e jω ), then takes
     the form
                                                            
                                                            L
                                               R(k) =              ci e jωi k .                         (2.36)
                                                             i=1

     A WSS process characterized by the power spectrum Eq. (2.35) (equivalently the autocorrelation
     (2.36)) is said to be a line spectral process, and the frequencies ωi are called the line frequencies.
                                                  THE OPTIMAL LINEAR PREDICTION PROBLEM                   15

                                                                     Dirac delta
                                                                     functions
                              jω
                     Sxx (e        )

                                                                                        ω
                                       0                                           2π

                        FIGURE 2.5: Power spectrum of a line spectral process.




Because the process is fully predictable, it is the exact ‘‘opposite’’ of a white process, which has no
correlation between any pair of samples. In terms of frequency domain, for a white process, the
power spectrum is constant, whereas for a fully predictable process, the power spectrum can only
have impulses---it cannot have any smooth component.
       In Chapter 7, we present a more complete study of these and address the problem of
identifying the parameters ωi and ci when such a process is buried in noise.


2.4.3 Determinant of the Autocorrelation Matrix
                                                                 f
We now show that the minimized mean square error EN can be expressed directly in terms of the
determinants of the autocorrelation matrices RN+1 and RN . This result is of considerable value in
theoretical analysis.
      Consider the augmented normal equation Eq. (2.20) for the N th-order predictor. We can
further augment this equation to include the information about the lower-order predictors by
appending more columns. To demonstrate, let N = 3. We then obtain four sets of augmented
normal equations, one for each order, which can be written elegantly together as follows:

                                           ⎡           ⎤ ⎡ f          ⎤
                                      1 0 0 0              E3 × × ×
                                    ⎢a 1 0 0⎥ ⎢ 0 E f × × ⎥
                                    ⎢ 3 ,1             ⎥ ⎢            ⎥
                               R4 × ⎢                  ⎥=⎢    2
                                                                      ⎥                         (2.37)
                                    ⎣ a3,2 a2,1 1 0 ⎦ ⎣ 0 0 E1f × ⎦
                                                                    f
                                      a3,3 a2,2 a1,1 1      0 0 0 E0

This uses the fact that R3 is a submatrix of R4 , that is,
                                                                
                                                          R(0) ×
                                               R4 =                ,                            (2.38)
                                                           × R3
16    THE THEORY OF LINEAR PREDICTION
     and similarly, R2 is a submatrix of R3 and so forth. The entries × are possibly nonzero but will not
     enter our discussion. Taking determinants, we arrive at
                                                                f       f   f   f
                                            det R4 = E3 E2 E1 E0 ,

     where we have used the fact that the determinant of a triangular matrix is equal to the product
     of its diagonal elements (Horn and Johnson, 1985). Extending this for arbitrary N, we have the
     following result:
                                                            f       f               f
                                        det RN+1 = EN EN−1 . . . E0 .                               (2.39)

     In a similar manner, we have
                                                        f           f               f
                                        det RN = EN−1 EN−2 . . . E0 .                               (2.40)

     Taking the ratio, we arrive at
                                                  f     det RN+1
                                               EN =              .                                  (2.41)
                                                         det RN
     Thus, the minimized mean square prediction errors can be expressed directly in terms of the
     determinants of two autocorrelation matrices. In Section 6.5.2, we will further show that
                                                            1/N                         f
                                         lim (det RN )                  = lim EN                    (2.42)
                                        N→∞                                 N→∞

     That is, the limiting value of the mean squared prediction error is identical to the limiting value of
               1 /N
     (det RN ) .

     2.5     ESTIMATING THE AUTOCORRELATION
     In any practical application that involves linear prediction, the autocorrelation samples R(k) have
     to be estimated from (possibly noisy) measured data x(n) representing the random process. There
     are many methods for this, two of which are described here.
            The autocorrelation method. In this method, we define the truncated version of measured
     data
                                              
                                                 x(n) 0 ≤ n ≤ L − 1,
                                     xL (n) =
                                                 0       outside,

     and compute its deterministic autocorrelation. Thus, the estimate of R(k) has the form

                                                  
                                                  L−1
                                        R(k) =         xL (n)xL* (n − k).                          (2.43)
                                                  n=0
                                              THE OPTIMAL LINEAR PREDICTION PROBLEM                         17
There are variations of this method; for example, one could divide the summation by the number
of terms in the sum (which depends on k) and so forth. From the estimated value R (k), we form
the Toeplitz matrix RN and proceed with the computation of the predictor coefficients.
      A simple matrix interpretation of the estimation of RN is useful. For example, if we have
L = 5 and wish to estimate the 3 × 3 autocorrelation matrix R3 , the computation (2.43) is
equivalent to defining the data matrix
                                         ⎡                      ⎤
                                           x(0) 0          0
                                         ⎢                      ⎥
                                         ⎢ x(1) x(0) 0 ⎥
                                         ⎢                      ⎥
                                         ⎢ x(2) x(1) x(0) ⎥
                                         ⎢                      ⎥
                                    X=⎢  ⎢ x( 3 ) x( 2 ) x( 1 ) ⎥
                                                                ⎥                        (2.44)
                                         ⎢ x(4) x(3) x(2) ⎥
                                         ⎢                      ⎥
                                         ⎢                      ⎥
                                         ⎣ 0 x(4) x(3) ⎦
                                             0      0 x(4)

and forming the estimate of R3 using
                                             3 = (X† X)* .
                                            R                                                     (2.45)

This is a Toeplitz matrix whose top row is R( 0), R(
                                                     1), . . . . Furthermore, it is positive definite by
                     †
virtue of its form X X. So, all the properties from linear prediction theory continue to be satisfied
by the polynomial AN (z). For example, we can use Levinson’s recursion (Section 3.2) to solve for
AN (z), and all zeros of AN (z) are guaranteed to be in |z| < 1 (Appendix C).
       Note that the number of samples of x(n) used in the estimate of R(k) decreases as k increases,
so the estimates are of good quality only if k is small compared with the number of available data
samples L. There are variations of this method that use a tapering window on the given data instead
of abruptly truncating it (Rabiner and Schafer, 1978; Therrien, 1992).
       The covariance method. In a variation called the ‘‘covariance method,’’ the data matrix X is
formed differently:
                                          ⎡                       ⎤
                                            x(2) x(1) x(0)
                                          ⎢                       ⎥
                                     X = ⎣ x(3) x(2) x(1) ⎦                                       (2.46)
                                            x(4) x(3) x(2)

and the autocorrelation estimated as R  3 = (X† X)* . If necessary we can divide each element of the
estimate by a fixed integer so that this looks like a time average.
      In the covariance method, each R(k) is an average of N possibly nonzero samples of data,
unlike the autocorrelation method, where the number of samples used in the estimate of R(k)
decreases as k increases. So, the estimates, in general, tend to be better than in the autocorrelation
18    THE THEORY OF LINEAR PREDICTION

     method, but the matrix R    N in this case is not necessarily Toeplitz. So, Levinson’s recursion
     (Section 3.2) cannot be applied for solving the normal equations, and we have to solve the normal
     equations directly. Another problem with non-Toeplitz covariances is that the solution AN(z) is
     not guaranteed to have all zeros inside the unit circle.
            More detailed discussions on the relative advantages and disadvantages of these methods
     can be found in many references (e.g., Makhoul, 1975; Rabiner and Schafer, 1978; Kay, 1988;
     Therrien, 1992).

     2.6      CONCLUDING REMARKS
     In this chapter, we introduced the linear prediction problem and discussed its solution. The solution
     appears in the form of a set of linear equations called the normal equations. An efficient way to solve
     the normal equations using a recursive procedure, called Levinson’s recursion, will be introduced in
     the next chapter. This recursion will place in evidence a structure called the lattice structure for linear
     prediction. Deeper discussions on linear prediction will follow in later chapters. The extension of
     the optimal prediction problem for the case of vector processes, the MIMO LPC problem, will be
     considered in Chapter 8.

                                                   •   •    •   •
                                                                                                         19




                                      CHAPTER 3

                         Levinson’s Recursion

3.1     INTRODUCTION
The optimal linear predictor coefficients aN,i are solutions to the set of normal equations given
by Eq. (2.8). Traditional techniques to solve these equations require computations of the order of
N 3 (see, e.g., Golub and Van Loan, 1989). However, the N × N matrix RN in these equations is
not arbitrary, but Toeplitz. This property can be exploited to solve these equations in an efficient
manner, requiring computations of the order of N 2 . A recursive procedure for this, due to Levinson
(1947), will be described in this chapter. This procedure, in addition to being efficient, also places
in evidence many useful properties of the optimal predictor, as we shall see in the next several
sections.



3.2     DERIVATION OF LEVINSON’S RECURSION
Levinson’s recursion is based on the observation that if the solution to the predictor problem is
known for order m, then the solution for order (m + 1) can be obtained by a simple updating
process. In this way, we obtain not only the solution to the Nth-order problem, but also all the
lower orders. To demonstrate the basic idea, consider the third-order prediction problem. The
augmented normal Eq. (2.20) becomes

                         ⎡                        ⎤⎡      ⎤ ⎡ f⎤
                           R(0) R(1) R(2) R(3)        1        E3
                         ⎢ R*(1) R(0) R(1) R(2) ⎥ ⎢ a ⎥ ⎢ ⎥
                         ⎢                        ⎥ ⎢ 3,1 ⎥ ⎢ 0 ⎥
                         ⎢                        ⎥⎢      ⎥ = ⎢ ⎥.                              (3.1)
                         ⎣ R*(2) R*(1) R(0) R(1) ⎦ ⎣ a3,2 ⎦ ⎣ 0 ⎦
                           R*(3) R*(2) R*(1) R(0)    a3,3       0
                                                         
                                     R4               a3


This set of four equations describes the third-order optimal predictor. Our aim is to show how we
can pass from the third-order to the fourth-order case. For this, note that we can append a fifth
equation to the above set of four and write it as
20    THE THEORY OF LINEAR PREDICTION
                          ⎡                             ⎤⎡       ⎤ ⎡ f⎤
                            R(0) R(1) R(2) R(3) R(4)         1       E3
                          ⎢ R*(1) R(0) R(1) R(2) R(3) ⎥ ⎢ a ⎥ ⎢ 0 ⎥
                          ⎢                             ⎥ ⎢ 3 ,1 ⎥ ⎢ ⎥
                          ⎢                             ⎥⎢       ⎥ ⎢ ⎥
                          ⎢ R*(2) R*(1) R(0) R(1) R(2) ⎥ ⎢ a3,2 ⎥ = ⎢ 0 ⎥ .                       (3.2)
                          ⎢                             ⎥⎢       ⎥ ⎢ ⎥
                          ⎣ R*(3) R*(2) R*(1) R(0) R(1) ⎦ ⎣ a3,3 ⎦ ⎣ 0 ⎦
                              R*(4) R*(3) R*(2) R*(1) R(0)              0    α3
                                                                    
                                            R5

     where

                                 Δ
                              α3 =R*(4) + a3,1 R*(3) + a3,2 R*(2) + a3,3 R*(1).                   (3.3)

     The matrix R5 above is Hermitian and Toeplitz. Using this, we verify that its elements satisfy
     (Problem 9)

                                      R4*−i,4−k = Rik ,     0 ≤ i, k ≤ 4.                         (3.4)

     In other words, if we reverse the order of all rows, then reverse the order of all columns and then
     conjugate the elements, the result is the same matrix! As a result, Eq. (3.2) also implies
                          ⎡                              ⎤⎡       ⎤ ⎡ ⎤
                            R(0) R(1) R(2) R(3) R(4)          0       α3*
                          ⎢ R*(1) R(0) R(1) R(2) R(3) ⎥ ⎢ a* ⎥ ⎢ 0 ⎥
                          ⎢                              ⎥ ⎢ 3,3 ⎥ ⎢ ⎥
                          ⎢                              ⎥⎢       ⎥ ⎢ ⎥
                          ⎢ R*(2) R*(1) R(0) R(1) R(2) ⎥ ⎢ a3*,2 ⎥ = ⎢ 0 ⎥ .                      (3.5)
                          ⎢                              ⎥⎢       ⎥ ⎢ ⎥
                          ⎣ R*(3) R*(2) R*(1) R(0) R(1) ⎦ ⎣ a3*,1 ⎦ ⎣ 0 ⎦
                                                                         f
                            R*(4) R*(3) R*(2) R*(1) R(0)      1       E3
                                                         
                                         R5

     If we now take a linear combination of Eqs. (3.2) and (3.5) such that the last element on the
     right-hand side becomes zero, we will obtain the equations governing the fourth-order predictor
     indeed! Thus, consider the operation

                                      Eq. (3.2)    +      k4* × Eq. (3.5),                        (3.6)

     where k4 is a constant. If we choose

                                                          −α3
                                                  k4* =     f
                                                                ,                                 (3.7)
                                                          E3
                                                                              LEVINSON’S RECURSION          21
then the result has the form
                       ⎡                             ⎤⎡       ⎤ ⎡ ⎤
                         R(0) R(1) R(2) R(3) R(4)         1        ×
                       ⎢ R*(1) R(0) R(1) R(2) R(3) ⎥ ⎢ a ⎥ ⎢ 0 ⎥
                       ⎢                             ⎥ ⎢ 4 ,1 ⎥ ⎢ ⎥
                       ⎢                             ⎥⎢       ⎥ ⎢ ⎥
                       ⎢ R*(2) R*(1) R(0) R(1) R(2) ⎥ ⎢ a4,2 ⎥ = ⎢ 0 ⎥ ,                            (3.8)
                       ⎢                             ⎥⎢       ⎥ ⎢ ⎥
                       ⎣ R*(3) R*(2) R*(1) R(0) R(1) ⎦ ⎣ a4,3 ⎦ ⎣ 0 ⎦
                          R*(4) R*(3) R*(2) R*(1) R(0)                a4,4       0
                                                               
                                        R5

where

                                            a4,1 = a3,1 + k4* a3*,3
                                            a4,2 = a3,2 + k4* a3*,2
                                            a4,3 = a3,3 + k4* a3*,1
                                            a4,4 = k4* .

By comparison with Eq. (3.1), we conclude that the element denoted × on the right-hand side of
               f
Eq. (3.8) is E4 , which is the minimized forward prediction error for the fourth-order predictor.
                                                              f
From the above construction, we see that this is related to E3 as
                                  f     f
                               E4 = E3 + k4* α3*
                                      f            f
                                  = E3 − k4 k4* E3 (from Eq. (3.7)).
                                                   f
                                  = (1 − |k4 |2 )E3 .
                                                                                       f
Summarizing, if we know the coefficients a3,i and the mean square error E3 for the third-order
optimal predictor, we can find the corresponding quantities for the fourth-order predictor from the
above equations.
      Polynomial Notation. The preceding computation of {a4,k } from {a3,k } can be written
more compactly if we use polynomial notations and define the FIR filter

        Am (z) = 1 + a*m,1 z−1 + a*m,2 z−2 + . . . + am* ,m z−m         (prediction polynomial).    (3.9)

With this notation, we can rewrite the computation of a4,k from a3,k as

                                                               3 (z)],
                                 A4 (z) = A3 (z) + k4 z−1 [z−3 A                                   (3.10)

where the tilde notation is as defined in Section 1.2. Thus,

                        m (z) = am,m + am,m−1 z−1 + . . . + am,1 z−(m−1) + z−m .
                    z−m A                                                                          (3.11)
22    THE THEORY OF LINEAR PREDICTION
     3.2.1 Summary of Levinson’s Recursion
     The recursion demonstrated above for the third-order case can be generalized easily to arbitrary
     predictor orders. Thus, let Am (z) be the predictor polynomial for the mth-order optimal predictor
            f
     and Em the corresponding mean square value of the prediction error. Then, we can find the
     corresponding quantities for the (m + 1)th-order optimal predictor as follows:
                                                             −αm*
                                                 km+1 =         f   ,                               (3.12)
                                                              Em

                                                           m (z)] (order update),
                         Am+1 (z) = Am (z) + km+1 z−1 [z−m A                                        (3.13)


                                   f
                                 Em+1 = (1 − |km+1 |2 )Emf ,        (error update),                 (3.14)

     where
                    αm = R*(m + 1) + am,1 R*(m) + am,2 R*(m − 1) + . . . + am,m R*(1).              (3.15)

            Initialization. Once this recursion is initialized for small m (e.g., m = 0), it can be used to
     solve the optimal predictor problem for any m. Note that for m = 0, the predictor polynomial is

                                                   A0 (z) = 1,                                      (3.16)
                                         f
     and the error is, from Eq. (2.3), e0 (n) = x(n). Thus,
                                                     f
                                                  E0 = R(0).                                        (3.17)

     Also, from the definition of αm , we have

                                                  α0 = R*(1).                                       (3.18)

     The above three equations are used to initialize Levinson’s recursion. For example, we can compute
                                                         f
                                        k1 = −α0* /E0 = −R(1)/R(0),                                 (3.19)

     and evaluate A1 (z) from Eq. (3.13) and so forth.                                                   

     3.2.2 The Partial Correlation Coefficient
     The quantity ki in Levinson’s recursion has a nice ‘‘physical’’ significance. Recall from Section 2.3
                     f
     that the error em (n) of the optimal predictor is orthogonal to the past samples

                                       x(n − 1), x(n − 2), . . ., x(n − m).                         (3.20)
                                                                        LEVINSON’S RECURSION              23
The ‘‘next older’’ sample x(n − m − 1), however, is not necessarily orthogonal to the error, that
                       f
is, the correlation E[em (n)x*(n − m − 1)] could be nonzero. It can be shown (Problem 6) that the
quantity αm* in the numerator of km+1 satisfies the relation

                                  αm* = E[emf (n)x*(n − m − 1)].                                (3.21)
                                                                                                     f
The coefficient km+1 represents this correlation, normalized by the mean square error Em .
The correction to the prediction polynomial in the order-update equation (second term in
Eq. (3.13)) is proportional to this normalized correlation.
       In the literature, the coefficients ki have been called the partial correlation coefficients and
abbreviated as parcor coefficients. They are also known as the lattice or reflection coefficients, for
reasons that will become clear in later chapters.
       Example 3.1: Levinson’s Recursion. Consider again the real WSS process with the auto-
correlation (2.12). We initialize Levinson’s recursion as described above, that is,
                                                                f
                    A0 (z) = 1, α0 = R(1) = 1.5,        and E0 = R(0) = 2.1.                    (3.22)

We can now compute the quantities
                                            f
                              k1 = −α0 /E0 = −5/7
                          A1 (z) = A0 (z) + k1 z−1 A0 (z) = 1 − (5/7)z−1 ,
                               f              f
                             E1 = (1 − k21 )E0 = 36/35.

We have now obtained all information about the first-order predictor. To obtain the second-order
predictor, we compute the appropriate quantities in the following order:

                       α1 = R(2) + a1,1 R(1) = (9/10) − (5/7) × 1.5 = −6/35
                                     f
                       k2 = −α1 /E1 = 1/6
                   A2 (z) = A1 (z) + k2 z−2 A 1 (z) = 1 − (5/6)z−1 + (1/6)z−2
                        f              f
                      E2 = (1 − k22 )E1 = 1.0.

We can proceed in this way to compute optimal predictors of any order. The above results agree
with those of Example 2.1, where we used a direct approach to solve the normal equations.

3.3       SIMPLE PROPERTIES OF LEVINSON’S RECURSION
Inspection of Levinson’s recursion reveals many interesting properties. Some of these are discussed
below. Deeper properties will be studied in the next several sections.

      1. Computational complexity. The computation of Am+1 (z) from Am (z) requires nearly m
         multiplication and addition operations. As a result, the amount of computation required
24    THE THEORY OF LINEAR PREDICTION

            for N repetitions (i.e., to find aN,i) is proportional to N 2 . This should be compared with
            traditional methods for solving Eq. (2.8) (such as Gaussian elimination), which require
            computations proportional to N 3 . In addition to reducing the computation, Levinson’s
            recursion also reveals the optimal solution to all the predictors of orders ≤ N.
                                                        f
         2. Parcor coefficients are bounded. Because Em is the mean square value of the prediction error,
                         f
            we know Em ≥ 0 for any m. From Eq. (3.14), it, therefore, follows that |ki |2 ≤ 1, for any i.
                                                                                              f
         3. Strict bound on parcor coefficients. Let |km+1 | = 1. Then Eq. (3.14) says that Em+1 = 0. In
                                                                                        f
            other words, the mean square value of the prediction error sequence em+1 (n) is zero. This
                            f
            means that em+1 (n) is identically zero for all n. In other words, the output of Am+1 (z) in
            response to x(n) is zero (Fig. 2.1(a)). Using an argument similar to the one in Section 2.4.2,
            we conclude that this is not possible unless x(n) is a line spectral process. Summarizing, we
            have


                                                | ki | < 1 ,   for any i,                          (3.23)

            unless x(n) is a line spectral process. Recall also that the assumption that x(n) is not
            line spectral also ensures that the autocorrelation matrix RN in the normal equations is
            nonsingular for all N (Section 2.4.2).
         4. Minimized error is monotone. From Eq. (3.14) it also follows that the mean square error is a
            monotone function, that is,

                                                         f
                                                     Em+1 ≤ Emf ,                                  (3.24)

            with equality if and only if km+1 = 0. It is interesting to note that repeated application
            of Eq. (3.14) yields the following expression for the mean square prediction error of the
            N th-order optimal predictor:

                                  f                                       f
                                EN = 1 − |kN |2 1 − |kN−1 |2 . . . 1 − |k1 |2 E0
                                                                         
                                    = 1 − |kN |2 1 − |kN−1 |2 . . . 1 − |k1 |2 R(0)

            Example 3.2: Levinson’s recursion. Now, consider a WSS process x(n) with power spectrum
          jω
     Sxx (e ) as shown in Fig. 3.1 (top). The first few samples of the autocorrelation are


                   R(0)      R(1)      R(2)      R(3)           R(4)         R(5)     R(6)
                  0.1482    0.0500    0.0170    −0.0323        −0.0629      0.0035   −0.0087
                                                                                                      LEVINSON’S RECURSION   25


                                                    1




                                  Power spectrum
                                                   0.5




                                                    0
                                                     0           0.2        0.4         0.6     0.8        1
                                                                                  ω/π


                                            0.16
                         Prediction error




                                            0.12




                                            0.08

                                                     0       1         2
                                                                           Prediction order m


                                            0.16
                         Prediction error




                                            0.12




                                            0.08

                                                     0   1   2                                        14
                                                                           Prediction order m

                                                                                                                     f
FIGURE 3.1: Example 3.2. The input power spectrum Sxx (e jω ) (top), the prediction error Em plotted
                                                                   f
for a few prediction orders m (middle), and the prediction error Em shown for more orders (bottom).
26    THE THEORY OF LINEAR PREDICTION
     If we perform Levinson’s recursion with this, we obtain the parcor coefficients

                             k1        k2              k3           k4           k5          k6
                           −0.3374   −0.0010         0.2901       0.3253       −0.3939     0.1908

     for the first six optimal predictors. Notice that these coefficients satisfy |km | < 1 as expected from
     theory. The corresponding prediction errors are

                             f       f           f            f            f         f          f
                         E0         E1         E2         E3           E4           E5        E6
                       0.1482     0.1314     0.1314     0.1203       0.1076       0.0909    0.0876

     The prediction errors are also plotted in Fig. 3.1 (middle). The error decreases monotonically as the
     prediction order increases. The same trend continues for higher prediction orders as demonstrated
     in the bottom plot. The optimal prediction polynomials A0 (z) through A6 (z) have the coefficients
     given in the following table:

                A0 ( z )    1.0
                A1 ( z )    1.0   −0.3374
                A2 ( z )    1.0   −0.3370     −0.0010
                A3 ( z )    1.0   −0.3373     −0.0988         0.2901
                A4 ( z )    1.0   −0.2429     −0.1309         0.1804       0.3253
                A5 ( z )    1.0   −0.3711     −0.2020         0.2320       0.4210   −0.3939
                A6 ( z )    1.0   −0.4462     −0.1217         0.2762       0.3825   −0.4647         0.1908

     The zeros of these polynomials can be verified to be inside the unit circle, as expected from our
     theoretical development (Appendix C). For example, the zeros of A6 (z) are complex conjugate
     pairs with magnitudes 0.9115, 0.7853, and 0.6102.


     3.4     THE WHITENING EFFECT
     Suppose we compute optimal linear predictors of increasing order using Levinson’s recursion. We
     know the prediction error decreases with order, that is, Ek+1 ≤ Ek . Assume that after the predictor
     has reached the order m, the error does not decrease any further, that is, suppose that
                                                f         f            f
                                         Emf = Em+1 = Em+2 = Em+3 = . . .                                    (3.25)

     This represents a stalling condition, that is, increasing the numberof past samples does not help to
     increase the prediction accuracy any further. Whenever such a stalling occurs, it turns out that the
                                                                                      LEVINSON’S RECURSION     27
       f
error em (n) satisfies a very interesting property, namely, any pair of samples are mutually orthogonal.
That is,
                                                               
                                                                 0         i = 0
                              E emf (n)[emf (n + i)]* =              f                                (3.26)
                                                                   Em        i = 0.

                                             f
In particular, if x(n) has zero mean, then em (n) will also have zero mean, and the preceding equation
               f
means that em (n) is white. Now, from Section 2.2, we know that x(n) can be represented as the
                                    f
output of a filter, excited with em (n) (see Fig. 2.1(b)). Thus, whenever stalling occurs, x(n) is the
output of an all-pole filter 1/Am (z) with white input; such a zero-mean process x(n) is said to be
autoregressive (AR). We will present a more complete discussion of AR processes in Section 5.2.
                                                                          f
For the case of nonzero mean, Eq. (3.26) still holds, and we say that em (n) is an orthogonal (rather
than white) random process.
       Theorem 3.1. Stalling and whitening. Consider the optimal prediction of a WSS process
x(n), with successively increasing predictor orders. Then, the iteration stalls after the mth-order
predictor (i.e., the mean square error stays constant as shown by Eq. (3.25)), if and only if the
                    f
prediction error em (n) satisfies the orthogonality condition Eq. (3.26).                           ♦
                                                       f                 f
      Proof. Stalling implies, in particular, that Em+1 = Em , that is, km+1 = 0 (from Eq. (3.14)).
As a result, Am+1 (z) = Am (z). Repeating this, we see that

                                Am (z) = Am+1 (z) = Am+2 (z) = . . .                                  (3.27)

                                    f
The prediction error sequence e (n), therefore, is the same for all  ≥ m. The condition km+1 = 0
implies αm = 0 from Eq. (3.12). In other words, the cross-correlation Eq. (3.21) is zero. Repeating
this argument, we see that whenever stalling occurs, we have

                                f
                            E[em+ (n)x*(n − m −  − 1)] = 0,                   ≥ 0.                 (3.28)

      f           f
But em+ (n) = em (n) for any  ≥ 0, so that

                             E[emf (n)x*(n − m −  − 1)] = 0,                  ≥ 0.                  (3.29)

                                                           f
By orthogonality principle, we already know that E[em (n)x*(n − i)] = 0 for 1 ≤ i ≤ m. Combining
the preceding two equations, we conclude that

                                    E[emf (n)x*(n − )] = 0,              ≥ 1.                       (3.30)
28    THE THEORY OF LINEAR PREDICTION
                                f
     In other words, the error em (n) is orthogonal to all the past samples of x(n). We also know that
      f
     em (n) is a linear combination of present and past samples of x(n), that is,

                                                         
                                                         m
                                      emf (n) = x(n) +         am* ,i x(n − i).                  (3.31)
                                                         i=1

     Similarly,

                                                          
                                                          m
                              emf (n − ) = x(n − ) +             am* ,i x(n −  − i).          (3.32)
                                                           i=1

                  f                                                                                f
     Because em (n) is orthogonal to all the past samples of x(n), we, therefore, conclude that em (n)
                        f                                                        f f
     is orthogonal to em (n − ),  > 0. Summarizing, we have proved, E[em (n)[em (n − )]*] = 0 for
                                                                                                 f
      > 0. This proves Eq. (3.26) indeed. By reversing the above argument, we can show that if em (n)
     has the property (3.26) then the recursion stalls (i.e., Eq. (3.25) holds).                    
           Example 3.3: Stalling and Whitening. Consider a real WSS process with autocorrelation

                                                 R(k) = ρ|k| ,                                   (3.33)

     where −1 < ρ < 1. The first-order predictor coefficient a1,1 is obtained by solving

                                              R(0)a1,1 = −R(1),                                  (3.34)

     so that a1,1 = −ρ. Thus, the optimal predictor polynomial is A1 (z) = 1 − ρz−1 . To compute the
     second-order predictor, we first evaluate

                                    α1 = R(2) + a1,1 R(1) = ρ2 − ρ2 = 0.                         (3.35)
                                                               f
     Using Levinson’s recursion, we find k2 = −α1* /E1 = 0, so that A2 (z) = A1 (z). To find the
     third-order predictor, note that

                         α2 = R(3) + a2,1 R(2) + a2,2 R(1) = R(3) − ρR(2) = 0.                   (3.36)

     Thus, k3 = 0 and A3 (z) = A1 (z). No matter how far we continue, we will find in this case that
     Am (z) = A1 (z) for all m. That is, the recursion has stalled. Let us double-check this by testing
               f                                    f
     whether e1 (n) satisfies Eq. (3.26). Because e1 (n) is the output of A1 (z) in response to x(n), we
     have
                                          f
                                         e1 (n) = x(n) − ρx(n − 1).                              (3.37)
                                                                          LEVINSON’S RECURSION                29
Thus, for k > 0,
                   f     f
               E[e1 (n)e1 (n − k)] = R(k) + ρ2R(k) − ρR(k − 1) − ρR(k + 1) = 0,                    (3.38)
                                                                               f
as anticipated. Because R(∞) = 0, the process x(n) has zero mean. So, e1 (n) is a zero-mean white
process.

3.5      CONCLUDING REMARKS
Levinson’s work was done in 1947 and, in his own words, was a ‘‘mathematically trivial procedure.’’
However, it is clear from this chapter that Levinson’s recursion is very elegant and insightful. It can
be related to early work by other famous authors (e.g., Chandrasekhar, 1947). It is also related to
the Berlekamp--Massey algorithm (Berlekamp, 1969). For a fascinating history, the reader should
study the scholarly review by Kaliath (1974; in particular, see p. 160). The derivation of Levinson’s
recursion in this chapter used the properties of the autocorrelation matrix. However, the method
can be extended to the case of Toeplitz matrices, which are not necessarily positive definite (Blahut,
1985).
       In fact, even the Toeplitz structure is not necessary if the goal is to obtain an O(N 2 ) algorithm.
In 1979, Kailath et al. introduced the idea of displacement rank for matrices. They showed that as
long as the displacement rank is a fixed number independent of matrix size, O(N 2 ) algorithms can
be found for solving linear equations involving these matrices. It turns out that Toeplitz matrices
have displacement rank 2, regardless of the matrix size. The same is true for inverses of Toeplitz
matrices (which are not necessarily Toeplitz).
       One of the outcomes of Levinson’s recursion is that it gives rise to an elegant structure for
linear prediction called the lattice structure. This will be the topic of discussion for the next chapter.

                                              •   •    •   •
                                                                                                              31




                                        CHAPTER 4

                Lattice Structures for Linear
                         Prediction

4.1      INTRODUCTION
In this chapter, we present lattice structures for linear prediction. These structures essentially
follow from Levinson’s recursion. Lattice structures have fundamental importance not only in linear
prediction theory but, more generally, in signal processing. For example, they arise in the theory
of all-pass filters: any stable rational all-pass filter can be represented using an IIR lattice structure
similar to the IIR LPC lattice. As a preparation for the main topic, we first discuss the idea of
backward linear prediction.


4.2      THE BACKWARD PREDICTOR
Let x(n) represent a WSS random process as usual. A backward linear predictor for this process
estimates the sample x(n − N − 1) based on the ‘‘future values’’ x(n − 1), . . . , x(n − N). The
predicted value is a linear combination of the form

                                  b
                                                       
                                                       N
                                xN (n − N − 1) = −           bN* ,i x(n − i),                       (4.1)
                                                        i=1


and the prediction error is

                                                              b
                              ebN (n) = x(n − N − 1) − xN (n − N − 1)
                                        N
                                      =     bN* ,i x(n − i) + x(n − N − 1).
                                        i=1


The superscript b is meant to be a reminder of ‘‘backward.’’ Figure 4.1 demonstrates the difference
                                                                         f        b
between the forward and backward predictors. Notice that both xN (n) and xN(n − N − 1) are based
on the same set of N measurements. The backward prediction problem is primarily of theoretical
interest, but it helps us to attach a ‘‘physical’’ significance to the polynomial z−m Am (z) in Levinson’s
32    THE THEORY OF LINEAR PREDICTION
                                                       observed data

                      backward predictor
                      estimates this
                                                                                     forward predictor
                                                                                     estimates this


                                                                                            time
                               n− N − 1 n−N                              n−1 n

                      FIGURE 4.1: Comparison of the forward and backward predictors.



     recursion (3.13), as we shall see. As in the forward predictor problem, we again define the predictor
     polynomial

                                                      
                                                      N
                                           BN (z) =         bN* ,i z−i + z−(N+1) .                       (4.2)
                                                      i=1


     The output of this FIR filter in response to x(n) is equal to the predictor error ebN (n).
           To find the optimal predictor coefficients bN* ,i , we again apply the orthogonality principle,
     which says that ebN (n) must be orthogonal to x(n − k), for 1 ≤ k ≤ N. Using this, we can show that
     the solution is closely related to that of the forward predictor of Section 2.3. With aN,i denoting
     the optimal forward predictor coefficients, it can be shown (Problem 15) that

                                           bN,i = a*N,N+1−i,       1 ≤ i ≤ N,                            (4.3)

     This equation represents time-reversal and conjugation. Thus, the optimum backward predictor
     polynomial is given by

                                              BN (z) = z−(N+1) AN (z),                                  (4.4)

     where the tilde notation is as defined in Section 1.2.1. Figure 4.2 summarizes how the forward and
     backward prediction errors are derived from x(n) by using the two FIR filters, AN (z) and BN (z). It
     is therefore clear that we can derive the backward prediction error sequence ebN (n) from the forward
                                  f
     prediction error sequence eN (n) as shown in Fig. 4.3. In view of Eq. (4.4), we have

                                              BN (z)   z−(N+1) AN(z)
                                                     =                                                   (4.5)
                                              AN (z)      AN ( z )
                                                 LATTICE STRUCTURES FOR LINEAR PREDICTION                       33


                              x(n)                                A N (z)                 eNf (n)
                                                          forward prediction filter




                                                                  B N (z)                 eNb (n)
                                                          backward prediction filter


                        FIGURE 4.2: The forward and the backward prediction filters.



4.2.1 All-Pass Property
We now show that the function
                                                                −N 
                                                           Δz      AN ( z )
                                               GN ( z ) =                                               (4.6)
                                                                  AN ( z )

is all-pass, that is,

                                            |GN (e jω )| = 1,             ∀ ω.                          (4.7)

To see this, simply observe that

                                           N          −N 
                            N (z)GN(z) = z AN (z) × z AN (z) = 1, ∀ z
                            G
                                           AN (z)     AN (z)

But because

                                             N (e jω ) = HN* (e jω ),
                                             H

the preceding implies that |GN (e jω )|2 = 1, which proves Eq. (4.7). From Fig. 4.3, we therefore
see that the backward error ebN (n) is the output of the all-pass filter z−1 GN(z) in response to the


                        eNf (n)                            x(n)                               eNb (n)
                                        1/ A N (z)                           B N (z)
                                     inverse of forward              backward prediction filter
                                     prediction filter


FIGURE 4.3: The backward prediction error sequence, derived from the forward prediction error
sequence.
34    THE THEORY OF LINEAR PREDICTION
             f                                                                  f
     input eN(n), which is the forward error. The power spectrum of eN (n) is therefore identical to that
     of ebN (n). In particular, therefore, the mean square values of the two errors are identical, that is,
                                                                  f
                                                      ENb = EN                                          (4.8)
                                      f         f
     where ENb = E[|ebN (n)|2 ] and EN = E[|eN(n)|2]. Notice that the all-pass filter (4.6) is stable because
     the zeros of AN (z) are inside the unit circle (Appendix C).

     4.2.2 Orthogonality of the Optimal Prediction Errors
     Consider the set of backward prediction error sequences of various orders, that is,

                                             eb0 (n), eb1 (n), eb2 (n), . . .                           (4.9)

     We will show that any two of these are orthogonal. More precisely,
           Theorem 4.1. Orthogonality of errors. The backward prediction error sequences satisfy the
     property
                                                   
                                                        0    for k = m
                                E ebm (n)[ebk (n)]* =                                        (4.10)
                                                        Em for k = m.
                                                          b


     for all k, m ≥ 0.                                                                                     ♦
            Proof. It is sufficient to prove this for m > k. According to the orthogonality principle, ebm (n)
     is orthogonal to

                                            x(n − 1), . . . , x(n − m).                                (4.11)

     From its definition,

                 ebk (n) = x(n − k − 1) + bk*,1 x(n − 1) + bk*,2 x(n − 2) + . . . + bk*,k x(n − k).

     From these two equations, we conclude that E[ebm (n)[ebk (n)]∗] = 0, for m > k. From this result, Eq.
     (4.10) follows immediately.                                                                        
           In a similar manner, it can be shown (Problem 16) that the forward predictor error sequences
     have the following orthogonality property:
                                                         
                                                f
                                    E emf (n)[ek (n − 1)]* = 0, m > k.                           (4.12)

     The above orthogonality properties have applications in adaptive filtering, specifically in improving
     the convergence of adaptive filters (Satorius and Alexander, 1979; Haykin, 2002). The process
     of generating the above set of orthogonal signals from the random process x(n) has also been
                                           LATTICE STRUCTURES FOR LINEAR PREDICTION                        35
interpreted as a kind of Gram--Schmidt orthogonalization (Haykin, 2002). These details are beyond
scope of this chapter, but the above references provide further details and bibliography.

4.3      LATTICE STRUCTURES
In Section 3.2, we presented Levinson’s recursion, which computes the optimal predictor polynomial
Am+1 (z) from Am (z) according to

                              Am+1 (z) = Am (z) + km+1 z−1 [z−m Am (z)]                         (4.13)

On the other hand, we know from Section 4.2, that the optimal backward predictor polynomial is
given by Eq. (4.4). We can therefore rewrite Levinson’s order update equation as

                                  Am+1 (z) = Am (z) + km+1 Bm (z).                               (4.14)

From this, we also obtain

                               Bm+1 (z) = z−1 [km* +1 Am (z) + Bm (z)],                          (4.15)

by using Bm+1 (z) = z−(m+2) Am+1 (z). The preceding relations can be schematically represented as
                         f
in Fig. 4.4(a). Because em (n) and ebm (n), are the outputs of the filters Am (z) and Bm (z) in response
to the common input x(n), the prediction error signals are related as shown in Fig. 4.4(b). By


                 A m (z)                                                   A m+1 (z)

                                k *m+1
                                                                                       (a)

                                k m+1

                  B m (z)                                    z −1          Bm+1 (z)




                  emf (n)                                                    f
                                                                           em+1 (n)

                                k *m+1
                                                                                       (b)
                                k m+1

                  emb (n)                                    z −1            b
                                                                           em+1 (n)


FIGURE 4.4: (a) The lattice section that generates the (m + 1)th-order predictor polynomials from
the mth-order predictor polynomials. (b) The same system shown with error signals indicated as the
inputs and outputs.
36    THE THEORY OF LINEAR PREDICTION
                 x(n)             f                      f                             f                        f
                                e0 (n)                 e1 (n)                        e2 (n)                    eN(n)
                                A0 (z)                 A1 (z)                        A2 (z)                    AN(z)

                                 b
                                         k1
                                                             b
                                                                         k2                    …   kN
                                                                                       b                            b
                                e0 (n)                  e1 (n)                        e2 (n)                   eN(n)
                         z −1                   z −1                          z −1                      z −1
                                B0 (z)                 B1 (z)                        B2 (z)                    BN(z)
                   (a)




                                                                              k *m
                                          km
                   (b)                                                        km


                                                                                                                        f
     FIGURE 4.5: (a) The FIR LPC lattice structure that generates the prediction errors em (n) and ebm (n)
     for all optimal predictors with order 1 ≤ m ≤ N. (b) Details of the mth lattice section.



     using the facts that A0 (z) = 1 and B0 (z) = z−1 , we obtain the structure of Fig. 4.5(a). Here,
     each rectangular box is the two multiplier lattice section shown in Fig. 4.5(b). In this structure,
     the transfer functions Am (z) and Bm (z) are generated by repeated use of the lattice sections in
     Fig. 4.4. This is a cascaded FIR lattice structure, often referred to as the LPC FIR lattice. If we
     apply the input x(n) to the FIR lattice structure, the optimal forward and backward prediction
                        f
     error sequences em (n) and ebm (n) appear at various nodes as indicated. Lattice structures for linear
     prediction have been studied in detail by Makhoul (1977).

     4.3.1 The IIR LPC Lattice
     From Fig. 4.4(b), we see that the prediction errors are related as
                                          f
                                         em+1 (n) = emf (n) + km+1 ebm (n),
                                         ebm+1 (n) = km* +1 emf (n − 1) + ebm (n − 1).
                                                                     f        f
     Suppose we rearrange the first equation as em (n) = em+1 (n) − km+1 ebm (n), then these two equations
     become
                                                                 f
                                            emf (n) = em+1 (n) − km+1 ebm (n),
                                         ebm+1 (n) = km* +1 emf (n − 1) + ebm (n − 1).

     These equations have the structural representation shown in Fig. 4.6(a). Repeated application of
     this gives rise to the IIR structure of Fig. 4.6(b). This is precisely the IIR all-pass lattice structure
                                                    LATTICE STRUCTURES FOR LINEAR PREDICTION                                37
                                f
                              em+1 (n)                                                        emf (n)


                                                    −k m+1
            (a)
                                b
                              em+1 (n)                k *m+1                                      emb (n)
                                            z −1
                                                    This box is labelled as   k m+1


                  f                     f                                           f                            f
              eN (n)               e        (n)                                   e1 (n)                    e0 (n) = x(n)
                                       N −1



               b              kN    b                k N −1        …               b
                                                                                                       k1    b
                                                                                                            e0 (n)
             eN (n)                e    (n)                                       e1 (n)
                                   N −1
                       z −1                  z −1                                          z −1                      z −1
            (b)


FIGURE 4.6: (a) The IIR LPC lattice section. (b) The IIR LPC lattice structure that generates the
                                                f                                                 f
signal x(n) from the optimal prediction error eN (n). The lower-order forward prediction errors em (n)
and the backward prediction errors are also generated in the process automatically.



studied in signal processing literature (Gray and Markel, 1973; Vaidyanathan, 1993; Oppenheim
                                                                     f
and Schafer, 1999). Thus, if we apply the forward prediction error eN (n) as an input to this structure,
then the forward and backward error sequences of all the lower-order optimal predictors appear at
                                                                                       f
various internal nodes, as indicated. In particular, the 0th-order prediction error e0 (n) appears at
                                 f
the rightmost node. Because e0 (n) = x(n), we therefore obtain the original random process x(n)
                                                           f
as an output of the IIR lattice, in response to the input eN (n). We already showed that the transfer
function

                                                                              AN (z)
                                             z−1 GN(z) = z−(N+1)
                                                                              AN ( z )
                                                                              f
is all-pass. This is the transfer function from the input eN(n) to the node ebN (n) in the IIR lattice.
The transfer function from the input to the rightmost node in Fig. 4.6(b) is the all-pole filter
                                                                                   f
1/AN (z), because this transfer function produces x(n) in response to the input eN (n) (see Fig. 4.2).


4.3.2 Stability of the IIR Filter
It is clear from these developments that the ‘‘parcor’’ coefficients km derived from Levinson’s
recursion are also the lattice coefficients for the all-pass function z−NAN (z)/AN (z). Now, it is well
38    THE THEORY OF LINEAR PREDICTION
     known from the signal processing literature (Gray and Markel, 1973; Vaidyanathan, 1993) that the
     polynomial AN(z) has all its zeros strictly inside the unit circle if and only if


                                           |km | < 1,   1 ≤ m ≤ N.                                    (4.16)

     In fact, under this condition, all the polynomials Am (z), 1 ≤ m ≤ N have all zeros strictly inside
     the unit circle.
            On the other hand, Levinson’s recursion (Section 3.2) has shown that the condition |km | < 1
     is indeed true as long as x(n) is not a line spectral process. This proves that the IIR filters 1/Am (z)
     and z−m Am (z)/Am (z) indeed have all poles strictly inside the unit circle so that Fig. 4.6(b) is, in
     particular, stable. Although the connection to the lattice structure is insightful, it is also possible
     to prove stability of 1/Am (z) directly without the use of Levinson’s recursion or the lattice. This is
     done in Appendix C.


     4.3.3 The Upward and Downward Recursions
     Levinson’s recursion (Eq. (4.14) and (4.15)) computes the optimal predictor polynomials of
     increasing order, from a knowledge of the autocorrelation R(k) of the WSS process x(n). This is
     called the upward recursion. These equations can be inverted to obtain the relations


                            (1 − |km+1 |2 ) × Am (z) = Am+1 (z) − km+1 zBm+1 (z),


                           (1 − |km+1 |2 ) × Bm (z) = −km* +1 Am+1 (z) + zBm+1 (z).                   (4.17)

     Given Am+1 (z), the polynomial Bm+1 (z) is known, and so is


                                               km+1 = am* +1,m+1 .                                    (4.18)

     Using this, we can uniquely identify Am (z), hence, Bm (z), from (4.17). Thus, if we know the
     N th-order optimal prediction polynomial AN (z), we can uniquely identify all the lower-order
     optimal predictors. So Eq. (4.17) is called the downward recursion. This process automatically
                                                                                         f
     reveals the lower-order lattice coefficients ki . If we know the prediction error EN , we can therefore
                                             f
     also identify the lower-order errors Ei , by repeated use of Eq. (3.14), that is,

                                                    f
                                          Emf = Em+1 /(1 − |km+1 |2 )                                 (4.19)
                                           LATTICE STRUCTURES FOR LINEAR PREDICTION                        39

4.4      CONCLUDING REMARKS
The properties of the IIR lattice have been analyzed in depth by Gray and Markel (1973), and lattice
structures for linear prediction have been discussed in detail by Makhoul (1977). The advantage of
lattice structures arises from the fact that even when the coefficients km are quantized the IIR lattice
remains stable, as long as the quantized numbers continue to satisfy |km | < 1. This is a very useful
result in compression and coding, because it guarantees stable reconstruction of the data segment
that was compressed. We will return to this point in Sections 5.6 and 7.8.

                                             •   •   •   •
                                                                                                          41




                                      CHAPTER 5

                     Autoregressive Modeling

5.1       INTRODUCTION
Linear predictive coding of a random process reveals a model for the process, called the autoregressive
(AR) model. This model is very useful both conceptually and for approximating the process with a
simple model. In this chapter, we describe this model.


5.2       AUTOREGRESSIVE PROCESSES
A WSS random process w(n) is said to be autoregressive (AR) if it can be generated by using the
recursive difference equation

                                            
                                            N
                                 w(n) = −          di *w(n − i) + e(n),                          (5.1)
                                             i=1


where

      1. e(n) is a zero-mean white WSS process, and
                                    N
      2. the polynomial D(z) = 1 + i=1 di*z−i has all zeros inside the unit circle.

In other words, we can generate w(n) as the output of a causal, stable, all-pole IIR filter 1/D(z) in
response to white input (Fig. 5.1). If dN = 0, we say that the process is AR(N ), that is, AR of order
N. Because e(n) has zero mean, the AR process has zero mean according to the above definition.
      Now, how does the AR process enter our discussion of linear prediction? Given a WSS
process x(n), let us assume that we have found the Nth-order optimal predictor polynomial AN (z).
We know, we can then represent the process as the output of an IIR filter as shown in Fig. 2.1(b).
                                                  f
The input to this filter is the prediction error eN (n). In the time domain, we can write

                                           
                                           N
                                                                   f
                                x(n) = −         a∗N,i x(n − i) + eN (n).                        (5.2)
                                           i=1
42    THE THEORY OF LINEAR PREDICTION

                                         e(n)              1 /D(z)                 w(n)
                                      white process                              AR process
                                                        IIR allpole filter


     FIGURE 5.1: Generation of an AR process from white noise and an all-pole IIR filter.



                                                                             f
     In Section 3.4, we saw that if the error stalls, that is, Em does not decrease anymore as m increases
                                     f
     beyond some value N, then eN (n) is white (assuming x(n) has zero mean). Thus, the stalling
     phenomenon implies that x(n) is AR(N ).
            Summarizing, suppose the optimal predictors of various orders for a zero-mean process x(n)
     are such that the minimized mean square errors satisfy

                                f        f                  f                f
                             E1 ≥ E2 ≥ . . . ≥ EN−1 > EN = Emf ,                          m > N.        (5.3)

     Then, x(n) is AR(N ).
           Example 5.1: Levinson’s recursion for an AR process. Consider a WSS AR process
     generated by using an all-pole filter c/D(z) with complex conjugate pairs of poles at

                                                0.8e±0.2 jπ , 0.85e±0.4 jπ

     so that

                  D(z) = 1.0000 − 1.8198z−1 + 2.0425z−2 − 1.2714z−3 + 0.4624z−4 .

     The power spectrum Sww (e jω ) of this AR(4) process is shown in Fig. 5.2 (top plot). The constant
     c in c/D(z) is such that Sww (e jω ) has maximum magnitude unity. The first few autocorrelation
     coefficients for this process are as follows:

                       R(0)          R(1)        R(2)            R(3)             R(4)         R(5)
                      0.2716        0.1758      −0.0077         −0.1091          −0.0848      −0.0226

     If we perform Levinson’s recursion with this, we obtain the lattice coefficients


                          k1             k2             k3             k4            k5         k6
                        −0.6473        0.7701         −0.5469        0.4624        0.0000     0.0000
                                                                                                    AUTOREGRESSIVE MODELING   43

                                                        1




                                    Power spectrum
                                                       0.5




                                                        0
                                                         0           0.2        0.4         0.6     0.8        1
                                                                                      ω/π

                                                       0.3
                                    Prediction error




                                                       0.2




                                                       0.1




                                                        0
                                                         0   1   2   3     4                              14
                                                                               Prediction order m


                                              0.16
                           Prediction error




                                              0.12




                                              0.08

                                                         0   1   2                                        14
                                                                               Prediction order m


FIGURE 5.2: Example 5.1. The input power spectrum Sww (e jω ) of an AR(4) process (top) and the
                   f
prediction error Em plotted for a few prediction orders m (middle). The prediction error for the non-AR
process of Ex. 3.2 is also reproduced (bottom).
44    THE THEORY OF LINEAR PREDICTION
     for the first six optimal predictors. Notice that these coefficients satisfy |km | < 1 as expected from
     theory. The optimal prediction polynomials A0 (z) through A6 (z) have the coefficients given in the
     following table:


                       A0 ( z )    1.0
                       A1 ( z )    1.0    −0.6473           0             0             0         0   0
                       A2 ( z )    1.0    −1.1457        0.7701           0             0         0   0
                       A3 ( z )    1.0    −1.5669        1.3967        −0.5469          0         0   0
                       A4 ( z )    1.0    −1.8198        2.0425        −1.2714       0.4624       0   0
                       A5 ( z )    1.0    −1.8198        2.0425        −1.2714       0.4624       0   0
                       A6 ( z )    1.0    −1.8198        2.0425        −1.2714       0.4624       0   0

     The prediction filter does not change after A4 (z) because the original process is AR(4). This is also
     consistent with the fact that the lattice coefficients past k4 are all zero. The prediction errors are
     plotted in Fig. 5.2 (middle). The error Em decreases monotonically and then becomes a constant for
     m ≥ 4. For comparison, the prediction error Em for the non-AR process of Ex. 3.2 is also shown
     in the figure (bottom); this error continues to decrease.


     5.3     APPROXIMATION BY AN AR(N) PROCESSES
     Recall that an arbitrary WSS process x(n) (AR or otherwise), can always be represented in terms
                                             f                                                          f
     of the optimal linear prediction error eN (n) as in Eq. (5.2). In many practical cases, the error eN(n)
                                                                         f
     tends to be nearly white for reasonably large N. If we replace eN (n) with zero-mean white noise
                                           f
     e(n) having the mean square value EN , we obtain the so-called AR model y(n) for the process x(n).



                                  (a)      eNf (n)           1 /A N (z)            x(n)
                                                                                  original
                                                          IIR allpole filter      process




                                            e(n)             1 /A N (z)            y(n)
                                  (b)    white process
                                                                               AR approximation
                                                          IIR allpole filter


     FIGURE 5.3: Generation of the AR(N ) approximation y(n) for a WSS process x(n). (a) The exact
     process x(n) expressed in terms of the Nth-order LPC parameters and (b) the AR(N ) approximation
     y(n).
                                                                         AUTOREGRESSIVE MODELING             45
This is shown in Fig. 5.3. The process y(n) satisfies

                                            
                                            N
                                 y(n) = −           aN* ,i y(n − i) + e(n)                          (5.4)
                                                                         
                                              i=1
                                                                     white
The model process y(n) is also called the AR(N ) approximation (N th-order autoregressive
approximation) of x(n).

5.3.1 If a Process is AR, Then LPC Will Reveal It
                                                                               f
If a zero-mean WSS process x(n) is such that the optimal LPC error eN(n) is white, then we know
that x(n) is AR. Now, consider the converse. That is, let x(n) be AR(N ). This means that we can
express it as
                                              
                                              N
                                  x(n) = −          cN* ,i x(n − i) + e(n),                         (5.5)
                                              i=1

for some set of coefficients cN,i , where e(n) is white. This is a causal difference equation, so that, at
any time n, the sample x(n) is a linear combination

                       x(n) = g(0)e(n) + g(1)e(n − 1) + g(2)e(n − 2) + . . .                        (5.6)

Similarly, x(n − i) is a linear combination of

                                       e(n − i), e(n − i − 1) . . .

Now consider
                                                                                  
               E[e(n)x*(n − i)] = E e(n)[ g(0)e(n − i) + g(1)e(n − i − 1) + . . .]*

Because e(n) is white (i.e., E[e(n)e*(n − )] = 0,  > 0), this means that

                                    E[e(n)x*(n − i)] = 0,             i > 0.                        (5.7)

In other words, e(n) is orthogonal to all the past samples of x(n). In view of the orthogonality
principle, this means that the linear combination
                                              
                                              N
                                          −         cN* ,i x(n − i)
                                              i=1

is the optimal linear prediction of x(n). As the solution to the optimal N th-order prediction
problem is unique, the solution {aN,i } to the optimal predictor problem is therefore equal to cN,i.
Thus, the coefficients cN,i of the AR(N ) process can be identified simply by solving the N th-order
46    THE THEORY OF LINEAR PREDICTION
                                                                       f
     optimal prediction problem. The resulting prediction error eN (n) is white and equal to the ‘‘input
     term’’ e(n) in the AR equation Eq. (5.5). Summarizing, we have:
            Theorem 5.1. LPC of an AR process. Let x(n) be an AR(N ) WSS process, that is, a zero-mean
     process representable as in Eq. (5.5), where e(n) is white. Then,

         1. The AR coefficients cN,i can be found simply by performing N th-order LPC on the process
            x(n). The optimal LPC coefficients aN,i will turn out to be cN,i . Thus, the AR model y(n)
            resulting from the optimal LPC (Fig. 5.3) is the same as x(n), that is y(n) = x(n).
                                             f
         2. Moreover, the prediction error eN (n) is white and the same as the white noise sequence e(n)
            appearing in the AR(N ) description Eq. (5.5) of x(n).                                    ♦


     5.3.2 Extrapolation of the Autocorrelation
                f
     Because eN (n) is white, the autocorrelation R(k) of an AR(N ) process x(n) is completely
                                                          f                                      f
     determined by the filter 1/AN (z) and the variance EN . Because the quantities AN (z) and EN can be
     found from the N + 1 coefficients

                                            R(0), R(1), . . ., R(N )

     using Levinson’s recursion, we conclude that for AR(N ) processes, all the coefficients R(k), |k| > N
                                                                                                 f
     are determined by the above N + 1 coefficients. So, the determination of AN (z) and EN provides
     us a way to extrapolate an autocorrelation. In other words, we can find R(k) for |k| > N from the
     first N + 1 values in such a way that the Fourier transform Sxx (e jω ) of the extrapolated sequence is
     nonnegative for all ω.
            Extrapolation equation. An explicit equation for extrapolation of R(k) can readily be written
     down. Thus, given R(0), R(1), . . . R(N ) for an AR(N ) process, we can find R(k) for any k > N
     using the equation

                        R(k) = −a∗N,1 R(k − 1) − a∗N,2 R(k − 2) . . . − a∗N,N R(k − N).

     This equation follows directly from normal equations. See Appendix D for details.                    
             In many practical situations, a signal x(n) that is not AR can be modeled well by an AR
     process. A common example is speech (Markel and Gray, 1976; Rabiner and Schafer, 1978; Jayant
                                                                                             f
     and Noll, 1984). The fact that x(n) is not AR means that the prediction error em (n) never gets
     white, but its power spectrum often gets flatter and flatter as m increases. This will be demonstrated
     later in Section 6.3 where we define a mathematical measure for spectral flatness and study it in the
     context of linear prediction.
                                                                         AUTOREGRESSIVE MODELING         47

5.4     AUTOCORRELATION MATCHING PROPERTY
Let x(n) be a WSS process, AN (z) be its optimal N th-order predictor polynomial, and y(n) be
the AR(N ) approximation of x(n) generated as in Fig. 5.3. In what mathematical sense does y(n)
approximate x(n), that is, in what respect is y(n) ‘‘close’’ to x(n)? We now provide a quantitative
answer:
       Theorem 5.2. Let R(k) and r(k) be the autocorrelations of x(n) and the AR(N ) approxima-
tion y(n), respectively. Then,

                                      R(k) = r(k),          | k| ≤ N .                          (5.8)

Thus, the AR(N ) model y(n) is an approximation of x(n) in the sense that the first N + 1
autocorrelation coefficients for the two processes are equal to each other.            ♦
       So, as the approximation order N increases, more and more values of R(k) are matched to
r(k). If the process x(n) is itself AR(N ), then we know (Theorem 5.1) that the AR(N ) model
y(n) satisfies y(n) = x(n) so that Eq. (5.8) holds for all k, not just |k| ≤ N. A simple corollary of
Theorem 5.2 is

                                             R(0) = r(0),

which can be used to prove that for any WSS process x(n),
                                                   2π
                                           f                  1        dω
                                  R(0) = EN                                                     (5.9)
                                                   0     |AN (e jω )|2 2π
To see this, observe first that the AR process y(n) in Fig. 5.3(b) is generated using white noise e(n)
                 f
with variance EN , so that
                                              2π             f
                                                           EN        dω
                                    r(0) =                              .
                                              0        |AN (e jω )|2 2π

But because r(0) = R(0), Eq. (5.9) follows readily.
      Proof of Theorem 5.2. By construction, the AR(N ) process y(n) is representable as in
Fig. 5.3(b) and therefore satisfies the difference equation Eq. (5.4). Now consider the sample
y(n − k). Because Fig. 5.3(b) is a causal system,

                     y(n − k) = linear combination of e(n − k − i),            i ≥ 0.          (5.10)

But because e(n) is zero-mean white, we have E[e(n)e∗ (n − k)] = 0 for k = 0. Thus,

                                  E[e(n)y*(n − k)] = 0,            k > 0.                      (5.11)
48    THE THEORY OF LINEAR PREDICTION
     Multiplying Eq. (5.4) by y*(n − k), taking expectations, and using the above equality, we obtain
     the following set of equations.

                            ⎡                                    ⎤⎡       ⎤ ⎡ f⎤
                              r(0)        r(1)    . . . r (N )        1      EN
                            ⎢                                    ⎥⎢       ⎥ ⎢ ⎥
                            ⎢ r*(1)       r(0)    . . . r(N − 1) ⎥ ⎢ aN,1 ⎥ ⎢ 0 ⎥
                            ⎢ .                                  ⎥⎢ . ⎥ = ⎢ . ⎥                  (5.12)
                            ⎢ .             ..    ..        ..   ⎥⎢ . ⎥ ⎢ . ⎥
                            ⎣ .              .       .       .   ⎦⎣ . ⎦ ⎣ . ⎦
                                r*(N ) r*(N − 1) . . .   r(0)    aN,N        0

     where r(k) = E[ y(n)y*(n − k)]. This set of equations has exactly the same appearance as the
     augmented normal equations Eq. (2.20). Thus, the coefficients aN,i are the solutions to two optimal
     predictor problems: one based on the process x(n) and the other based on y(n).
           We now claim that Eq. (2.20) and (5.12) together imply R(k) = r(k), for the range of values
                                                                             f
     0 ≤ k ≤ N. This is proved by observing that the coefficients aN,i and EN completely determine the
                                                                   f
     lower-order optimal prediction coefficients am,i and errors Em (see end of Section 4.3.3, ‘‘Upward
                                                        f
     and Downward Recursions’’). Thus, am,i and Em satisfy smaller sets of equations of the form
     Eq. (2.20). Collecting them together, we obtain a set of equations resembling Eq. (2.37). We
     obtain a similar relation if R(k) is replaced by r(k). Thus, we have the following two sets of
     equations (demonstrated for N = 3)

                       ⎡                        ⎤⎡                  ⎤ ⎡ f          ⎤
                         r(0) r(1) r(2) r(3)       1 0 0 0              E3 × × ×
                       ⎢ r*(1) r(0) r(1) r(2) ⎥ ⎢ a 1 0 0 ⎥ ⎢ 0 E f × × ⎥
                       ⎢                        ⎥ ⎢ 3,1             ⎥ ⎢            ⎥
                       ⎢                        ⎥⎢                  ⎥=⎢    2
                                                                                   ⎥
                       ⎣ r*(2) r*(1) r(0) r(1) ⎦ ⎣ a3,2 a2,1 1 0 ⎦ ⎣ 0 0 E1f × ⎦
                                                                                 f
                         r*(3) r*(2) r*(1) r(0)    a3,3 a2,2 a1,1 1      0 0 0 E0
                                                                                 
                                  rN+1                   Δ                Δu1


                   ⎡                           ⎤⎡                  ⎤ ⎡ f          ⎤
                     R(0) R(1) R(2) R(3)          1 0 0 0              E3 × × ×
                   ⎢ R∗ (1) R(0) R(1) R(2) ⎥ ⎢ a 1 0 0 ⎥ ⎢ 0 E f × × ⎥
                   ⎢                           ⎥ ⎢ 3 ,1            ⎥ ⎢            ⎥
                   ⎢ ∗                         ⎥⎢                  ⎥=⎢    2
                                                                                  ⎥
                   ⎣ R (2) R∗ (1) R(0) R(1) ⎦ ⎣ a3,2 a2,1 1 0 ⎦ ⎣ 0 0 E1f × ⎦
                     R∗ (3) R∗ (2) R∗ (1) R(0)    a3,3 a2,2 a1,1 1      0 0 0 E0
                                                                                f
                                                                                
                               RN+1                     Δ                Δu2

     The symbol × stands for possibly nonzero entries whose values are irrelevant for the discus-
     sion. Note that Δ is lower triangular and Δu1 and Δu2 are upper triangular matrices. We
                                                                 AUTOREGRESSIVE MODELING                   49
have not shown that Δu1 = Δu2 , so we will take a different route to prove the desired claim
Eq. (5.8). By premultiplying the preceding equations with Δ† , we get

                                       Δ† rN+1 Δ = Δ† Δu1 ,
                                       Δ† RN+1 Δ = Δ† Δu2 .

The right-hand side in each of these equations is a product of two upper triangular matrices and
is therefore upper triangular. The left-hand sides, on the other hand, are Hermitian. As a result,
                                                                                                 f
the right-hand sides must be diagonal! It is easy to verify that these diagonal matrices have Em
as diagonal elements, so that the right-hand sides of the above two equations are identical. This
               †                †
proves that Δ RN+1 Δ = Δ rN+1 Δ . Since Δ is nonsingular, we can invert it, and obtain
RN+1 = rN+1 . This proves Eq. (5.8) indeed.                                                    
                                                     f
       In a nutshell, given {aN,i } and the error EN , we can use the downward recursion (Section
                               f                                                                f
4.3.3) to compute am,i and Em for m = N − 1, N − 2, . . . So we uniquely identify R(0) = E0 . Next,
from the normal equation with m = 1, we can identify R(1). In general, if R(0), . . ., R(m − 1) are
known, we can use the normal equation for mth order and identify R(m) from the mth equation in
this set (refer to Eq. (2.8)). Thus, the coefficients R(0), R(1), . . . R(N ), which lead to a given set
                  f
of {aN,i } and EN , are unique, so r(k) and R(k) in Eqs. (2.20) and (5.12) must be the same!
       R(k) is Matched to the Autocorrelation of the IIR Filter. The AR(N ) model of Fig. 5.3(b)
can be redrawn as in Fig. 5.4 where e1 (n) is white noise with variance equal to unity and where
                                                     
                                                        f
                                                      EN
                                           H(z) =                                                (5.13)
                                                     AN ( z )

H(z) is a causal IIR filter with impulse response, say, h(n). The deterministic autocorrelation of
the sequence h(n) is defined as
                                         
                                               h(n)h*(n − k).
                                           n


Because e1 (n) is white with E[|e1 (n)|2 ] = 1, the autocorrelation r(k) of the AR model process y(n)
is given by
                                               
                                     r(k) =        h(n)h*(n − k).                                (5.14)
                                               n


So we can rephrase Eq. (5.8) as follows:
50    THE THEORY OF LINEAR PREDICTION

                                         e1 (n)                H(z)                y(n)
                                   white, variance = 1                         AR model of x(n)
                                                          IIR allpole filter


                           FIGURE 5.4: Autoregressive model y(n) of a signal x(n).


           Corollary 5.1. Let x(n) be a WSS process with autocorrelation R(k) and AN (z) be the
           optimal predictor polynomial. Let h(n) be the impulse response of the causal stable IIR
     N th-order
                f
     filter   EN /AN (z). Then,

                                                         
                                                         ∞
                                              R(k) =           h(n)h*(n − k),                         (5.15)
                                                         n=0

     for |k| ≤ N. That is, the first N + 1 coefficients of the deterministic autocorrelation of h(n) are
     matched to the values R(k). In particular, if x(n) is AR(N ), then Eq. (5.15) holds for all k.   ♦

     5.5      POWER SPECTRUM OF THE AR MODEL
     We just proved that the AR(N ) approximation y(n) is such that its autocorrelation coefficients
     r(k) match that of the original process x(n) for the first N + 1 values of k. As N increases, we
     therefore expect the power spectrum Syy (e jω ) of y(n) to resemble the power spectrum Sxx (e jω ) of
     x(n). This is demonstrated next.
            Example 5.2: AR approximations. In this example, we consider a random process generated
     as the output of the fourth-order IIR filter

                                       3.9 − 2.7645z−1 + 1.4150z−2 − 0.5515z−3
                      G4 (z) =
                                  1 − 0.9618z−1 + 0.7300z−2 − 0.5315z−3 + 0.5184z−4
     This system has complex conjugate pairs of poles inside the unit circle at 0.9e±0.2 jπ and 0.8e±0.6 jπ .
     With white noise of variance σe2 driving this system, the output has the power spectrum

                                               Sxx (e jω ) = σe2 |G4 (e jω )|2 .

     This is shown in Fig. 5.5 (dotted plots), with σe2 assumed to be such that the peak value of Sxx (e jω )
     is unity. Clearly Sxx (e jω ) is not an AR process because the numerator of G4 (z) is not a constant.
            Figure 5.5 shows the AR(N ) approximations Syy (e jω ) of the spectrum Sxx (e jω ) for various
     orders N (solid plots). We see that the AR(4) approximation is quite unacceptable, whereas
     the AR(5) approximation shows significant improvement. The successive approximations are
     better and better until we find that the AR(9) approximation is nearly perfect. From the
     preceding theory, we know that the AR(9) approximation and the original process have matching
                                                                                AUTOREGRESSIVE MODELING   51
                      (a)
                                              1


                                                                      original



                            Power spectrum
                                                                      AR(4)


                                             0.5




                                              0
                                               0   0.2   0.4          0.6        0.8   1
                                                               ω/π
                      (b)
                                              1



                                                                     original
                            Power spectrum




                                                                     AR(5)

                                             0.5




                                              0
                                               0   0.2   0.4          0.6        0.8   1
                                                               ω/π
                      (c)
                                              1



                                                                original
                            Power spectrum




                                                                AR(6)

                                             0.5




                                              0
                                               0   0.2   0.4          0.6        0.8   1
                                                               ω/π


FIGURE 5.5: AR approximations of a power spectrum: (a) AR(4), (b) AR(5), (c) AR(6), (d) AR(7),
(e)AR(8), and (f) AR(9).
52   THE THEORY OF LINEAR PREDICTION


                    (d)
                                            1




                                                                 original



                          Power spectrum
                                                                 AR(7)
                                           0.5




                                            0
                                             0   0.2     0.4          0.6       0.8   1
                                                               ω/π
                    (e)
                                            1




                                                                original
                          Power spectrum




                                                                AR(8)
                                           0.5




                                            0
                                             0   0.2     0.4          0.6       0.8   1
                                                               ω/π
                    (f)
                                            1



                                                                     original
                          Power spectrum




                                                                     AR(9)

                                           0.5




                                            0
                                             0   0.2     0.4          0.6       0.8   1
                                                               ω/π


                                                 FIGURE 5.5: Continued.
                                                                       AUTOREGRESSIVE MODELING              53
autocorrelation coefficients, that is, R(m) = r(m) for 0 ≤ m ≤ 9. This is indeed seen from the
following table:

                                       m       R(m)               r(m)

                                       0     0.1667         0.1667
                                       1     0.0518         0.0518
                                       2    −0.0054        −0.0054
                                       3     0.0031         0.0031
                                       4    −0.0519        −0.0519
                                       5    −0.0819        −0.0819
                                       6    −0.0364        −0.0364
                                       7    −0.0045        −0.0045
                                       8     0.0057         0.0057
                                       9     0.0318         0.0318
                                      10     0.0430         0.0441
                                      11     0.0234         0.0241

The coefficients R(m) and r(m) begin to differ starting from m = 10 as expected. So the AR(9)
approximation is not perfect either, although the plots of Sxx (e jω ) and Syy (e jω ) are almost
indistinguishable.
        The spectrum Syy (e jω ) of the AR approximation y(n) is called an AR-model-based estimate of
Sxx (e jω ). This is also said to be the maximum entropy estimate, for reasons explained later in Section
6.6.1. We can say that the estimate Syy (e jω ) is obtained by extrapolating the finite autocorrelation
segment

                                           R(k),       |k| ≤ N                                    (5.16)

using an AR(N ) model. The estimate Syy (e jω ) is nothing but the Fourier transform of the
extrapolated autocorrelation r(k). Note that if R(k) were ‘‘extrapolated’’ by forcing it to be zero for
|k| > N, then the result may not even be a valid autocorrelation (i.e., its Fourier transform may not
be nonnegative everywhere). Further detailed discussions on power spectrum estimation techniques
can be found in Kay and Marple (1981), Marple (1987), Kay (1988), and Therrien (1992).
       Peaks are well matched. We know that the AR(N ) model approximates the power spectrum
      jω
Sxx (e ) with the all-pole spectrum power spectrum
                                                              f
                                                           EN
                                       Syy (e jω ) =                                              (5.17)
                                                       |AN (e jω )|2
54    THE THEORY OF LINEAR PREDICTION

     If Sxx (e jω ) has sharp peaks, then AN (z) has to have zeros close to the unit circle to approxi-
     mate these peaks. If, on the other hand, Sxx (e jω ) has zeros (or sharp dips) on the unit circle,
     then Syy (e jω ) cannot approximate these very well because it cannot have zeros on the unit
     circle. Thus, the AR(N ) model can be used to obtain a good match of the power spectrum



                                               1



                                                                      Original
                             Power spectrum




                                                                      AR(18)

                                              0.5




                                               0
                                                0   0.2   0.4         0.6         0.8   1
                                                                ω/π

                                               1



                                                                       Original
                             Power spectrum




                                                                       AR(31)

                                              0.5




                                               0
                                                0   0.2   0.4         0.6         0.8   1
                                                                ω/π


     FIGURE 5.6: Demonstrating that the AR approximation of a power spectrum shows good agreement
     near the peaks. In the AR(18) approximation, the peaks are more nicely matched than the valleys. The
     AR(31) approximation is nearly perfect. The original power spectrum is generated with a pole-zero filter
     as in Ex. 5.2, but instead of G4 (z), we have in this example a 10th-order real-coefficient filter G10 (z)
     with all poles inside the unit circle.
                                                                       AUTOREGRESSIVE MODELING             55
      jω
Sxx (e ) near its peaks but not near its valleys. This is demonstrated in the example shown in
Fig. 5.6. Such approximations, however, are useful in some applications such as the AR represen-
tation of speech.                                                                             
       Spectral factorization. If the process x(n) is indeed AR(N ), then the autoregressive model
is such that Sxx (e jω ) = Syy (e jω ). So,
                                                              f
                                                           EN
                                       Sxx (e jω ) =                                             (5.18)
                                                       |AN (e jω )|2
In other words, we have found a rational transfer function HN (z) = c/AN (z) such that

                                       Sxx (e jω ) = |HN (e jω )|2.

We see that HN (z) is a spectral factor of Sxx (e jω ). Thus, when x(n) is AR(N ), the N th-order
prediction problem places in evidence a stable spectral factor HN (z) of the power spectrum Sxx (e jω ).
When x(n) is not AR(N ), the filter HN (z) is an AR(N ) approximation to the spectral factor.
      Example 5.3: Estimation of AR model paramaters. We now consider an AR(4) process
x(n) derived by driving the filter 1/A4 (z) with white noise, where

               A4 (z) = 1.0000 − 1.8198z−1 + 2.0425z−2 − 1.2714z−3 + 0.4624z−4

This has roots

                               0.2627 ± 0.8084 j, 0.6472 ± 0.4702 j

with absolute values 0.85 and 0.8. A sample of the AR(N ) process can be generated by first
generating a WSS white process e(n) using the Matlab command randn and driving the filter
1/A4 (z) with input e(n). The purpose of the example is to show that, from the measured values
of the random process x(n), we can actually estimate the autocorrelation and hence, the model
parameters (coefficients of A4 (z)) accurately.
       First, we estimate the autocorrelation R(k) using (2.43), where L is the number of samples
of x(n) available. To see the effect of noise (which is always present in practice), we add random
noise to the output x(n), so the actual data used are

                                      xnoisy (n) = x(n) + η(n).

The measurement noise η(n) is assumed to be zero-mean white Gaussian. Its variance will be
denoted as ση2 . With L = 210 and ση2 = 10−4 , and xnoisy (n) used instead of x(n), the estimated
autocorrelation R(k) for 0 ≤ k ≤ 4 is as follows:

           R(0) = 8.203, R(1) = 4.984, R(2) = −1.032, R(3) = −3.878, R(4) = −2.250.
56    THE THEORY OF LINEAR PREDICTION

                                                                                    Original
                                                       5                            Estimate




                                  Magnitude response
                                                       4


                                                       3


                                                       2


                                                       1


                                                       0
                                                        0   0.2   0.4         0.6   0.8        1
                                                                        ω/π


                                                                                    Original
                                                       5                            Estimate
                                  Magnitude response




                                                       4


                                                       3


                                                       2


                                                       1


                                                       0
                                                        0   0.2   0.4         0.6   0.8        1
                                                                        ω/π


                                                                                    Original
                                                       5                            Estimate
                                  Magnitude response




                                                       4


                                                       3


                                                       2


                                                       1


                                                       0
                                                        0   0.2   0.4         0.6   0.8        1
                                                                        ω/π


     FIGURE 5.7: Example 5.3. Estimation of AR model parameters. Magnitude responses of the original
     system 1/A4 (z) and the estimate 1/A4 (z) are shown for three values of the measurement noise variance
     ση2 = 10−4 , 0.0025, and ση2 = 0.01, respectively, from top to bottom. The segment length used to
     estimate autocorrelation is L = 210 .
                                                                            AUTOREGRESSIVE MODELING   57



                                                                            Original
                                               5                            Estimate


                          Magnitude response
                                               4


                                               3


                                               2


                                               1


                                               0
                                                0   0.2   0.4         0.6   0.8        1
                                                                ω/π


                                                                            Original
                                               5                            Estimate
                          Magnitude response




                                               4


                                               3


                                               2


                                               1


                                               0
                                                0   0.2   0.4         0.6   0.8        1
                                                                ω/π


                                                                            Original
                                               5                            Estimate
                          Magnitude response




                                               4


                                               3


                                               2


                                               1


                                               0
                                                0   0.2   0.4         0.6   0.8        1
                                                                ω/π


FIGURE 5.8: Example 5.3. Repetition of Fig. 5.7 with segment length L = 28 instead of 210 .
58       THE THEORY OF LINEAR PREDICTION
     From this, the estimated prediction polynomial can be obtained as

                     A4 (z) = 1.0000 − 1.8038z−1 + 2.0131z−2 − 1.2436z−3 + 0.4491z−4

     This should be compared with the original A4 (z) given above. The roots of A4 (z) are 0.2616 ±
     0.8036 j and 0.6403 ± 0.4679 j, which are inside the unit circle as expected.
             Figure 5.7 (top plot) shows the magnitude responses of the filters 1/A4 (z) and 1/A4 (z),
     which are seen to be in good agreement. The middle and lower plots show these responses with
     the measurement noise variance increased to ση2 = 0.0025 and ση2 = 0.01, respectively. Thus, the
     estimate deteriorates with increasing measurement noise. For the same three levels of measurement
     noise, Fig. 5.8 shows similar plots for the case where the number of measured samples of x(n) are
     reduced to L = 28 . Decreasing L results in poorer estimates of A4 (z) because the estimated R(k)
     is less accurate.


     5.6       APPLICATION IN SIGNAL COMPRESSION
     The AR(N ) model gives an approximate representation of the entire WSS process x(n), using
                                                                                                        f
     only N + 1 numbers, (i.e., the N autoregressive coefficients a∗N,i and the mean square value EN ).
     In practical applications such as speech coding, this modeling is commonly used for compressing
     the signal waveform. Signals of practical interest can be modeled by WSS processes only over short
     periods. The model has to be updated as time evolves.
            It is typical to subdivide the sampled speech waveform x(n) (evidently, a real-valued sequence)
     into consecutive segments (Fig. 5.9).1 Each segment might be typically 20-ms long, corresponding
     to 200 samples at a sampling rate of 10 kHz. This sequence of 200 samples is viewed as representing
     a WSS random process, and the first N autocorrelation coefficients R(k) are estimated. With
     N << 200 (usually N ≈ 10), the finiteness of duration of the segment is of secondary importance
     in affecting the accuracy of the estimates. There are several sophisticated ways to perform this
     estimation (Section 2.5). The simplest would be to use the average

                                             1
                                                    L−1
                                      R(k) ≈    x(n)x(n − k),                0 ≤ k ≤ N.                               (5.19)
                                             L
                                                    n=0

     Here, L is the length of the segment. If N << L, the end effects (caused by the use of finite
     summation) are negligible. In practice, one multiplies the segment with a smooth window to reduce
     the end effects. Further details about these techniques can be found in Rabiner and Schafer (1978).


     1
      Note that when x(n) is real-valued as in speech, the polynomial coefficients aN,i , the parcor coefficients ki , and the
                                 f
     prediction error sequence eN (n) are real as well.
                                                                                   AUTOREGRESSIVE MODELING           59




                    x(n)
                   signal to be                        segment k          k+1           k+2
                                                                                                      …
                   compressed                            20 ms




                 (a)                                                                          compression
                                                    Perform LPC




                                                                     f     LPC
                                                  A (z) and         N
                                                   N                       parameters




                 (b)
                                  e(n)                 1/ A N (z)               y(n)      reconstruction
                                              f
                           white, variance
                                             N     IIR allpole filter


FIGURE 5.9: (a) Compression of a signal segment using LPC and (b) reconstruction of an approxima-
                                                                     f
tion of the original segment from the LPC parameters AN (z) and EN . The k th segment of the original
signal x(n) is approximated by a segment of the AR signal y(n). For the next segment of x(n), the LPC
parameters AN (z) and EN are generated again.



     Note that with segment length L = 200 and the AR model order N = 10, a segment of 200
samples has been compressed into 11 coefficients! The encoded message
                                                             
                                                            f
                                     aN,1 aN,2 . . . aN,N EN                        (5.20)

is then transmitted, possibly after quantization. At the receiver end, one generates a local white-noise
                              f
source e(n) with variance EN and drives the IIR filter

                                               1           1
                                                    =    N                                                 (5.21)
                                             AN (z)   1+     a N , i z −ii=1

with this noise source as in Fig. 5.9(b). A segment of the output y(n) is then taken as the AR(N )
approximation of the original speech segment.
       Pitch-excited coders and noise-excited coders. Strictly speaking, the preceding discussion
tells only half the story. The locally generated white noise e(n) is satisfactory only when the speech
segment under consideration is unvoiced . Such sounds have no pitch or periodicity (e.g., the part
60    THE THEORY OF LINEAR PREDICTION
     ‘‘Sh’’ in ‘‘Should I.’’ By contrast, voiced sounds such as vowel utterances (e.g., ‘‘I’’) are characterized
     by a pitch, which is the local periodicity of the utterance. This periodicity T of the speech segment
     has to be transmitted so that the receiver can reproduce faithful voiced sounds. The modification
     required at the receiver is that the AR(N ) model is now driven by a periodic waveform such as an
     impulse train, with period T. Summarizing, the AR(N ) model is excited by a noise generator or a
     periodic impulse train generator, according to whether the speech segment is unvoiced or voiced.
     This is summarized in Fig. 5.10. There are further complications in practice such as transitions
     from voiced to unvoiced regions and so forth.                                                            
     Many variations of linear prediction have been found to be useful in speech compression. A
     technique called differential pulse code modulation is widely used in many applications; this uses
     the predictive coder in a feedback loop in an ingenious way. The reader interested in the classical
     literature on speech compression techniques should study (Atal and Schroeder, 1970; Rabiner and
     Schafer, 1978; Jayant and Noll, 1984; Deller et al., 1993) or the excellent, although old, tutorial
     paper on vector quantization by Makhoul et al. (1985).
              Quantization and stability. It is shown in Appendix C that the unquantized coefficients
     aN,i , which result from the normal equations are such that 1/AN (z) has all poles inside the unit circle
     (i.e., it is causal and stable). However, if we quantize aN,i before transmission, this may not continue
     to remain true, particularly in low bit-rate coding. A solution to this problem is to transmit the
     ‘‘parcor’’ or lattice coefficients km . From Section 3.3, we know that |km | < 1. In view of the relation
     between Levinson’s recursion and lattice structures (Section 4.3.1), we also know that 1/AN (z) is
     stable if and only if |km | < 1. Suppose the coefficients km are quantized in such a way that |km | < 1
                                                                                                        (q )
     continues to hold after quantization. At the receiver end, one recomputes an approximation AN (z)
                                                                                         (q )
     of AN (z), from the quantized versions km . Then, the AR(N ) model 1/AN (z) is guaranteed
     to be stable.



                             white noise
                             generator

                         for unvoiced signals
                                                               1/ A N (z)         y(n)
                                                                              reconstructed
                                                             AR(N) model of   speech segment
                           periodic impulse                 speech segment
                           train generator

                          for voiced signals


     FIGURE 5.10: Reconstruction of a speech segment from its AR(N ) model. The source of excitation
     depends on whether the segment is voiced or unvoiced (see text).
                                                                       AUTOREGRESSIVE MODELING            61
      In Section 7.8, we introduce the idea of line-spectrum pair (LSP). Instead of quantizing
and transmitting the coefficients of AN (z) or the lattice coefficients km , one can quantize and
transmit the LSPs. Like the lattice coefficients, the LSP coefficients preserve stability even after
quantization. Other advantages of using the LSP coefficients will be discussed in Section 7.8.


5.7     MA AND ARMA PROCESSES
We know that a WSS random process x(n) is said to be AR if it satisfies a recursive (IIR) difference
equation of the form

                                               
                                               N
                                 x(n) = −             di*x(n − i) + e(n),                       (5.22)
                                               i=1
                                                                                   N
where e(n) is a zero-mean white WSS process, and the polynomial D(z) = 1 + i=1 di*z−i has
all zeros inside the unit circle. We say that a WSS process x(n) is a moving average (MA) process
if it satisfies a nonrecursive (FIR) difference equation of the form

                                                 
                                                 N
                                       x(n) =           pi*e(n − i),                            (5.23)
                                                  i=0

where e(n) is a zero-mean white WSS process. Finally, we say that a WSS process x(n) is an
ARMA process if

                                       
                                       N                      
                                                              N
                            x(n) = −         di*x(n − i) +           pi*e(n − i),               (5.24)
                                       i=1                     i=0

where e(n) is a zero-mean white WSS process. Defining the polynomials

                                       
                                       N                                 
                                                                         N
                        D( z ) = 1 +         di*z−i     and P(z) =             pi*z−i ,         (5.25)
                                       i=1                               i=0

we see that the above processes can be represented as in Fig. 5.11. In each of the three cases, x(n) is
the output of a rational discrete time filter, driven by zero-mean white noise. For the AR process,
the filter is an all-pole filter. For the MA process, the filter is FIR. For the ARMA process, the
filter is IIR with both poles and zeros.
        We will not have occassion to discuss MA and ARMA processes further. However, the
theory and practice of linear prediction has been modified to obtain approximate models for these
types of processes. Some discussions can be found in Marple (1987) and Kay (1988). In Section
5.5, we saw that the AR model provides an exact spectral factorization for an AR process. An
62    THE THEORY OF LINEAR PREDICTION


                               (a)    e(n)            1 /D(z)           x(n)   AR process
                                     white
                                                   IIR allpole filter




                               (b)    e(n)              P(z)            x(n)   MA process
                                     white
                                                      FIR filter




                               (c)    e(n)           P(z) /D(z)         x(n)   ARMA process
                                     white
                                                 IIR pole-zero filter


                             FIGURE 5.11: (a) AR, (b) MA, and (c) ARMA processes.



     approximate spectral factorization algorithm for MA processes, based on the theory of linear
     prediction, can be found in Friedlander (1983).


     5.8       SUMMARY
     We conclude the chapter with a summary of the properties of AR processes.

           1. An AR process x(n) of order N (AR(N ) process) satisfies an N th-order recursive difference
              equation of the form Eq. (5.22), where e(n) is zero-mean white noise. Equivalently, x(n) is
              the output of a causal stable IIR all-pole filter 1/D(z) (Fig. 5.11(a)) excited by white noise
              e(n).
           2. If we perform N th-order linear prediction on a WSS process x(n), we obtain the represen-
                                              f
              tation of Fig. 5.3(a), where eN (n) is the optimal prediction error and AN (z) is the predictor
                                            f
              polynomial. By replacing eN (n) with white noise, we obtain the AR(N ) model of Fig.
              5.3(b). Here, y(n) is an AR(N ) process, and is the AR(N ) approximation (or model) for
              x(n).
           3. The AR(N ) model y(n) approximates x(n) in the sense that the autocorrelations of the two
              processes, denoted r(k) and R(k), respectively, are matched for 0 ≤ |k| ≤ N (Theorem 5.2).
           4. The AR(N ) model y(n) is such that its power spectrum Syy (e jω ) tends to approximate
              the power spectrum Sxx (e jω ) of x(n). This approximation improves as N increases and is
              particularly good near the peaks of Sxx (e jω ) (Fig. 5.6). Near the valleys of Sxx (e jω ), it is
              not so good, because the AR spectrum Syy (e jω ) is an all-pole spectrum and cannot have
              zeros on or near the unit circle.
                                                            AUTOREGRESSIVE MODELING                  63
                                                                             f
5.   If x(n) itself is AR(N ), then the optimal N th-order prediction error eN (n) is white. Thus,
     x(n) can be written as in Eq. (5.22), where e(n) is white and di are the solutions (usually
     denoted aN,i ) to the normal equations Eq. (2.8). Furthermore, the AR(N ) power spectrum
       f
     EN /|AN (e jω )|2 is exactly equal to Sxx (e jω ). Thus, we can compute the power spectrum
     Sxx (e jω ) exactly, simply by knowing the autocorrelation coefficients R(k), |k| ≤ N and
     identifying AN (z) using normal equations. This means, in turn, that all the autocorrelation
     coefficients R(k) of an AR(N ) process x(n) are determined, if R(k) is known for |k| ≤ N.

                                         •   •   •   •
                                                                                                               65




                                        CHAPTER 6

      Prediction Error Bound and Spectral
                    Flatness

6.1       INTRODUCTION
In this chapter, we first derive a closed-form expression for the minimum mean-squared prediction
error for an AR(N ) process. We then introduce an important concept called spectral flatness. This
measures the extent to which the power spectrum Sxx (e jω ) of a WSS process x(n), not necessarily
AR, is ‘‘flat.’’ The flatness γx2 is such that 0 < γx2 ≤ 1, with γx2 = 1 for a flat power spectrum (white
process). We will then prove two results:

      1. For fixed mean square value R(0), as the flatness measure of an AR(N ) process x(n) gets
                                                                 f
         smaller, the mean square optimal prediction error EN also gets smaller (Section 6.4). So, a
         less flat process is more predictable.
      2. For any WSS process (not necessarily AR), the flatness measure of the optimal prediction
                   f
         error em (n) increases as m increases. So, the power spectrum of the prediction error gets
         flatter and flatter as the prediction order m increases (Section 6.5).


6.2       PREDICTION ERROR FOR AN AR PROCESS
                                                                                   f
If x(n) is an AR(N ) process, we know that the optimal prediction error eN (n) is white. We will
                                  f
show that the mean square error EN can be expressed in closed form as

                                                  2π                      
                                  f       1
                                EN = exp                 LnSxx (e jω ) dω                             (6.1)
                                         2π        0



where Sxx (e jω ) is the power spectrum of x(n). Here, Ln is the natural logarithm of a positive
number as normally defined in elementary calculus and demonstrated in Fig. 6.1. Because x(n) is
AR, the spectrum Sxx (e jω ) > 0 for all ω , and LnSxx (e jω ) is real and finite for all ω . The derivation
of the above expression depends on the following lemma.
66    THE THEORY OF LINEAR PREDICTION
                                            3


                                            2


                                    Ln y    1


                                            0


                                           -1
                                             0   1        5             10
                                                         y

                                     FIGURE 6.1: A plot of the logarithm.


                                                                             N
           Lemma 6.1. Consider a polynomial in z−1 of the form A(z) = 1 + n=1 anz−n , and let all
     the zeros of A(z) be strictly inside the unit circle. Then,
                                              2π
                                           1
                                                   lnA(e jω ) dω = j 2π k                       (6.2)
                                          2π 0
                                         2π
     for some integer k. This implies 0 ln|A(e jω )|2dω/2π = j 2π m for some integer m, so that
                                              2π
                                           1
                                                   Ln|A(e jω )|2 dω = 0,                        (6.3)
                                          2π 0
     where Ln(.) stands for the principal value of the logarithm.                                      ♦
           Because the logarithm arises frequently in our discussions in the next few sections, it is
     important to bear in mind some of the subtleties in its definition. Consider the function ln w, with
     w = Re jθ . Here, R > 0 and θ is the phase of w. Clearly, replacing θ with θ + 2π k for integer k
     does not change the value of w. However, the value of ln w will depend on k. Thus,

                                           lnw = LnR + jθ + j 2π k,                                 (6.4)

     where Ln is the logarithm of a positive number as normally defined in calculus (Fig. 6.1). Thus, ln w
     has an infinite number of branches, each branch being defined by one value of the arbitrary integer
     k (Kreyszig, 1972; Churchill and Brown, 1984). If we restrict θ to be in the range −π < θ ≤ π
     and set k = 0, then the logarithm ln w is said to be evaluated on the principal branch and denoted
     as Lnw (called the principal value). For real and positive w, this agrees with Fig. 6.1. Note that
     Ln1 = 0, but ln1 = j 2π k, and its value depends on the branch number k.
            Because the branch of the function ln w has not been specified in the statement of Lemma
     6.1, the integer k is undetermined (and unimportant for our discussions). Similarly, the integer m is
                                           PREDICTION ERROR BOUND AND SPECTRAL FLATNESS                              67
undetermined. However, in practically all our applications, we deal with quantities of the form Eq.
(6.1), so that it is immaterial whether we use ln(.) or Ln(.) (because exp(j 2π k) = 1 for any integer
k). The distinction should be kept in mind only when trying to follow detailed proofs.
        Proof of Lemma 6.1. Note first that because A(z) has no zeros on the unit circle, ln A(e jω )
is well defined and finite there (except for branch ambiguity). We can express

                                                     
                                                     N
                                                  jω
                                            A( e ) =   (1 − αi e− jω ),                                      (6.5)
                                                              i=1

so that
                                                       
                                                       N
                                            jω
                                   ln A(e ) =                 ln(1 − αi e− jω ) + j 2π k.                    (6.6)
                                                        i=1

It is therefore sufficient to prove that
                                            2π
                                      1
                                                  ln(1 − αi e− jω ) dω = j 2π ki,                            (6.7)
                                     2π     0

where ki is some integer. This proof depends crucially on the condition that the zeros of A(z)
are inside the unit circle, that is |αi | < 1. This condition enables us to expand the principal value
Ln(1 − αi e− jω ) using the power series1

                                                                
                                                                ∞
                                                                  vn
                                       Ln(1 − v) = −                       ,       |v| < 1.                  (6.8)
                                                                       n
                                                                 n=1

Identifying v as v = αi e− jω , we have

                                                                 
                                                                 ∞
                                                                   αn e− jωn
                                                 − jω
                                  ln(1 − αi e           )=−                i
                                                                                      + j 2 π ki .           (6.9)
                                                                               n
                                                                 n=1

The power series Eq. (6.8) has region of convergence |v| < 1. We know that any power series
converges uniformly in its region of convergence and can therefore be integrated term by term
(Kreyszig, 1972; Churchill and Brown, 1984). Because
                                      2π
                                            e− jωn dω = 0,             n = 1, 2, 3 . . . ,                  (6.10)
                                       0



1
    This expansion evaluates the logarithm on the principal branch because it reduces to zero when v = 0.
68    THE THEORY OF LINEAR PREDICTION
                                                                 N
     Eq. (6.7) readily follows, proving (6.2). Next, A *(e jω ) = i=1 (1 − α*i e jω ). Because |αi| < 1, the
     above argument can be repeated to obtain a similar result. Thus,


                   2π                              2π                           2π
              1                                1                             1
                         ln|A(e jω )|2 dω =               ln A(e jω )dω +               ln A∗ (e jω )dω = j 2π m
             2π    0                          2π    0                       2π    0



     for some integer m. This completes the proof.                                                                 
                                                           f
            Derivation of Eq. (6.1). Recall that eN (n) is the output of the FIR filter AN (z), in response
                                                        f                                                  f
     to the process x(n). So, the power spectrum of eN (n) is given by Sxx (e jω )|AN (e jω )|2 . Because eN(n)
                                                                                                             f
     is white, its spectrum is constant, and its value at any frequency equals the mean square value EN of
       f
     eN (n). Thus,


                          f
                                 e jω )|AN (e jω )|2
                       EN = Sxx (                            
                                                            
                                               jω       jω 2
                          = exp Ln Sxx (e )|AN (e )|
                                                                          
                                    1     2π                           
                          = exp              Ln Sxx (e jω )|AN (e jω )|2 dω
                                   2π 0
                                                                     2π                
                                          2π
                                    1                jω            1               jω 2
                          = exp              LnSxx (e ) dω +               Ln|AN (e )| dω
                                   2π 0                          2π 0
                                                           
                                          2π
                                    1                jω
                          = exp              LnSxx (e ) dω ,
                                   2π 0


               2π
     because 0 Ln|AN (e jω )|2 dω = 0 by Lemma 6.1. This establishes the desired result. The third
     equality above was possible because Sxx (e jω )|AN (e jω )|2 is constant for all ω .



     6.3      A MEASURE OF SPECTRAL FLATNESS
     Consider a zero-mean WSS process x(n). We know that x(n) is said to be white if its power
     spectrum Sxx (e jω ) is constant for all ω . When x(n) is not white, it is of interest to introduce a
     ‘‘degree of whiteness’’ or ‘‘measure of flatness’’ for the spectrum. Although such a measure is by no
     means unique, the one introduced in this section proves to be useful in linear prediction theory,
     signal compression, and other signal processing applications.
                                     PREDICTION ERROR BOUND AND SPECTRAL FLATNESS                        69
      Motivation from AM/GM ratio. The arithmetic-mean geometric mean inequality (abbre-
viated as the AM--GM inequality) says that any set of positive numbers x1 , . . . , xN satisfies the
inequality
                                                               !1/N
                                        1                
                                               N          N
                                              xi ≥          xi                                 (6.11)
                                        N
                                          i=1             i=1
                                                               
                                           AM             GM

with equality if and only if all xi are identical (Bellman, 1960). Thus,

                                                      GM
                                               0≤        ≤1                                    (6.12)
                                                      AM
and the ratio GM/AM is a measure of how widely different the numbers {xi } are. As the numbers
get closer to each other, this ratio grows and becomes unity when the numbers are identical. The
ratio GM/AM can therefore be regarded as a measure of ‘‘flatness.’’ The larger this ratio, the flatter
the distribution is.                                                                                
       By extending the concept of the GM/AM ratio to functions of a continuous variable (i.e.,
where the integer subscript i in xi is replaced with a continuous variable, say frequency) we can
obtain a useful measure of flatness for the power spectrum.
       Definition 6.1. Spectral flatness. For a WSS process with power spectrum Sxx (e jω ), we define
the spectral flatness measure as
                                                                  
                                                   2π
                                              1                jω
                                       exp            LnSxx (e ) dω
                                             2π 0
                                 γx2 =            2π                                           (6.13)
                                              1             jω
                                                      Sxx (e ) dω
                                             2π 0

where it is assumed that Sxx (e jω ) > 0 for all ω .                                               ♦
      We will see that the ratio γx2 can be regarded as the GM/AM ratio of the spectrum Sxx (e jω ).
Clearly, γx2 > 0. The denominator of γx2 is
                                           2π
                                      1
                                                   Sxx (e jω )dω = R(0),
                                     2π    0

which is the mean square value of x(n). We will first show that
                        2π                                              
                                                          2π
                     1             jω               1                jω
                             Sxx (e ) dω ≥ exp               LnSxx (e ) dω                     (6.14)
                    2π 0                           2π 0
70    THE THEORY OF LINEAR PREDICTION

     with equality if and only if Sxx (e jω ) is constant (i.e., x(n) is white). Because of this result, we have


                                                       0 < γx2 ≤ 1,


     with γx2 = 1 if and only if x(n) is white. A rigorous proof of a more general version of (6.14) can
     be found in Rudin (1974, pp. 63--64). The justification below is based on extending the AM--GM
     inequality for functions of continuous argument.
           Justification of Eq. (6.14). Consider a function f (y) > 0 for 0 ≤ y ≤ a. Suppose we divide
     the interval 0 ≤ y ≤ a into N uniform subintervals of length Δy as shown in Fig. 6.2. From the
     AM--GM inequality, we obtain


                                   1 
                                     N −1             N −1     1/N
                                         f (nΔy) ≥      f (nΔy)
                                   N
                                     n=0           n=0                        
                                                            
                                                            N −1         1/N
                                                 = exp Ln         f (nΔy)
                                                                  n=0            
                                                               1 
                                                                 N −1
                                                      = exp              Ln f (nΔy) .
                                                               N
                                                                   n=0


     Equality holds if and only if f (nΔy) is identical for all n. We can replace 1/N with Δy/a
     (Fig. 6.2) so that the above becomes

                                                      N −1             
                               1                     1
                                 N −1
                                      f (nΔy)Δy ≥ exp       Ln f (nΔy)Δy .
                               a                      a
                                   n=0                             n=0




                            f(y)




                                                              …                         y
                               0
                                         Δy     2Δy                                ΝΔy = a
                                         =a/N


                                   FIGURE 6.2: Pertaining to the proof of Eq. (6.14).
                                                         PREDICTION ERROR BOUND AND SPECTRAL FLATNESS                                              71
If we let Δy → 0 (i.e., N → ∞), the two summations in the above equation become integrals. We
therefore have

                                              a                                       
                                         1                               1 a
                                                         f ( y) dy ≥ exp     Ln f ( y) dy .                                               (6.15)
                                         a       0                       a 0


With f ( y) identified as Sxx (e jω ) > 0 and a = 2π , we immediately obtain Eq. (6.14).                                                      
       Example 6.1. Spectral Flatness Measure. Consider a real, zero-mean WSS process x(n)
with the power spectrum Sxx (e jω ) shown in Fig. 6.3(a). Fig. 6.3(b) shows the spectrum for various
values of α. It can be verified that

                                                                       2π
                                                         1
                                                 R(0) =                         Sxx (e jω ) dω = 2.
                                                        2π                 0


The quantity in the numerator of Eq. (6.13) can be computed as

                                             2π                                                 
                             1                                                                "1   #
                                                                      jω
                        exp                              LnSxx (e ) dω               = exp αLn   +1 ,
                            2π                   0                                             α



                                    jω
                        Sxx (e           )

                       1 + (π/ω c )
            (a)
                                                                           α = ω c /π


                                        1
                                                                                                                  ω
                                         0                   ωc                                        π


                               jω                                              jω                                     jω
                      Sxx (e        )                                 Sxx (e )                                 Sxx (e )
            (b)
                         small α                                                    medium α                    max α (= 1)
                                                                                                                              2
                                             1           ω                              1          ω                                  ω
                  0                                  π            0                            π           0                      π


FIGURE 6.3: (a) Power spectrum for Ex. 6.1 and (b) three special cases of this power spectrum.
72    THE THEORY OF LINEAR PREDICTION

     where α = ωc /π . We can simplify this and substitute into the definition of γx2 to obtain the flatness
     measure
                                                                            α
                                                                1
                                                  γx2 = 0.5 1 +
                                                                α

     This is plotted in Fig. 6.4 as a function of α. We see that as α increases from zero to unity, the
     spectrum gets flatter, as expected from an examination of Fig. 6.3(b).


     6.4     SPECTRAL FLATNESS OF AN AR PROCESS
     We know that if x(n) is an AR(N ) process, then the mean square value of the optimal prediction
     error is given by Eq. (6.1). The spectral flatness measure γx2 defined in Eq. (6.13) therefore becomes

                                                                    f
                                                                EN
                                                      γx2 =                                          (6.16)
                                                               R(0)

                                                                         f
     For fixed R(0), the mean square prediction error EN is smaller if the flatness measure γx2 is
     smaller. Qualitatively speaking, this means that if x(n) has a very nonflat power spectrum, then the
                         f
     prediction error EN can be made very small. If on the other hand the spectrum Sxx (e jω ) of x(n) is
                                              f
     nearly flat, then the prediction error EN is nearly as large as the mean square value of x(n) itself.
            Expression in Terms of the Impulse Response. An equivalent and useful way to express the
     above flatness measure is provided by the fact that x(n) is the output of the IIR filter

                                                                 1
                                                    G(z) =              ,
                                                               AN ( z )


                                             1

                                            0.8

                                            0.6
                                     γ x2
                                            0.4

                                            0.2


                                              0      0.2      0.4       0.6       0.8   1
                                                               α

                                    FIGURE 6.4: Flatness measure γx2 in Ex. 6.1.
                                  PREDICTION ERROR BOUND AND SPECTRAL FLATNESS                          73
                          f                                                       f
in response to the input eN (n) (Fig. 2.1(b)). Because x(n) is AR(N ), the error eN (n) is white, and
therefore, the power spectrum of x(n) is
                                                               f
                                                           EN
                                       Sxx (e jω ) =                 .
                                                       |AN (e jω )|2

The mean square value of x(n) is therefore given by
                                          2π                           ∞
                              f      1               1                f
                     R(0) = EN ×                              dω = E      |g(n)|2 ,
                                    2π     0    |AN (e jω )|2        N
                                                                         n=0


where g(n) is the causal impulse response of G(z). So, Eq. (6.16) becomes

                                                   1          1
                                    γx2 = ∞                 = ,
                                                n=0 |g(n)|
                                                           2  Eg

where
                                 
                                 ∞
                          Eg =         |g(n)|2 = energy of the filter G(z).
                                 n=0

Summarizing, we have
      Theorem 6.1. Spectral flatness of AR process. Let x(n) be an AR(N ) process with mean square
                                                                                               f
value R(0) = E[|x(n)|2]. Let AN (z) be the optimal N th-order prediction polynomial and EN the
corresponding mean square prediction error. Then, the spectral flatness γx2 of the process x(n) can
be expressed in either of the following two forms:

               f
    1. γx2 = EN /R(0), or
                ∞
    2. γx2 = 1/ n=0 |g(n)|2 ,

where g(n) is the causal impulse response of G(z) = 1/AN(z).                                      ♦
      Example 6.2. Spectral Flatness of an AR(1) Process. In Ex. 3.3, we considered a process
x(n) with autocorrelation

                                               R(k) = ρ|k| ,

with −1 < ρ < 1. The optimal first-order prediction polynomial was found to be

                                          A1 (z) = 1 − ρz−1 .
74    THE THEORY OF LINEAR PREDICTION
                                                     1

                                                   0.8

                                                   0.6
                                            γ x2
                                                   0.4

                                                   0.2

                                                     0
                                                     -1            -0.5    0            0.5         1
                                                                          ρ

     FIGURE 6.5: The flatness of an AR(1) process as a function of the correlation coefficient ρ.

                                                                                                f
     We also saw that the first-order prediction error sequence e1 (n) is white. This means that the
     process x(n) is AR(1). The IIR all-pole filter G(z) defined in Theorem 6.1 is
                                                    1           1
                                                   G( z ) ==
                                                  A1 ( z )   1 − ρ z −1
                                                    ∞
     and its impulse response is g(n) = ρnU (n). So n=0 g2 (n) = 1/(1 − ρ 2), and the flatness measure
     for the AR(1) process x(n) is
                                                              γx2 = 1 − ρ 2 .

     This is plotted in Fig. 6.5. So, the process gets flatter and flatter as ρ 2 gets smaller. The power
     spectrum of the process x(n), which is the Fourier transform of R(k), is given by
                                                        1 − ρ2             1 − ρ2
                                     Sxx (e jω ) =                 =
                                                     |1 − ρe−jω |2   1 + ρ 2 − 2ρ cos ω
     This is depicted in Fig. 6.6 for two (extreme) values of ρ in the range 0 < ρ < 1. (For −1 < ρ < 0,
     it is similar except that the peak occurs at π .) As ρ increases from zero to unity (i.e., the pole of

                                                                                    20
                                                         ρ = 0.1                                            ρ = 0.9
                             1
                        jω                                                         jω
               Sxx (e        )                                            Sxx (e        )
                                                                                    10
                         0.5




                             0                                                          0
                                 0         ω                          π                     0           ω             π

     FIGURE 6.6: The power spectrum of an AR(1) process for two values of the correlation coefficient ρ.
                                   PREDICTION ERROR BOUND AND SPECTRAL FLATNESS                            75
G(z) gets closer to the unit circle), the spectrum gets more and more peaky (less and less flat),
consistent with the fact that γx2 decreases as in Fig. 6.5.


6.5      CASE WHERE SIGNAL IS NOT AR
We showed that if x(n) is an AR(N ) process, then the Nth-order mean square prediction error is
given by (6.1). When x(n) is not AR, it turns out that this same quantity acts as a lower bound for
the mean square prediction error as demonstrated in Fig. 6.7. We now prove this result.
       Theorem 6.2. Prediction error bound. Let x(n) be a WSS process with power spectrum
      jω                                      f
Sxx (e ) finite and nonzero for all ω . Let Em be the mean square value of the optimal mth-order
prediction error. Then,
                                                                
                                                2π
                                            1               jω
                             Em ≥ exp
                               f
                                                   LnSxx (e ) dω .                           (6.17)
                                           2π 0

Furthermore, equality holds if and only if x(n) is AR(N ) and m ≥ N.                                 ♦
                                                     f
      Proof. We know that the prediction error em (n) is the output of the FIR filter Am (z) with
input equal to x(n) (Fig. 2.1(a)). So, its power spectrum is given by Sxx (e jω )|Am (e jω )|2 , so that
                          2π
                      1
               Emf =          Sxx (e jω )|Am (e jω )|2 dω
                     2π 0                                         
                               2π                            
                           1                     jω       jω 2
                   ≥ exp             Ln Sxx (e )|Am (e )| dω            (by Eq. (6.15))
                          2π 0
                                                         2π                     
                           1  2π               jω                       jω 2
                                                                                 
                   = exp              LnSxx (e ) dω +           Ln|Am (e )| dω
                          2π
                         0                            0
                                 2π
                           1
                   = exp             LnSxx (e jω ) dω      (by Lemma 6.1).
                          2π 0




                       f
                       m
                                                                 theoretical bound



                                                                           m (prediction
                           0   1   2                                           order)


                                               f
FIGURE 6.7: The optimal prediction error Em decreases monotonically with increasing m but is lower
bounded by Eq. (6.1) for any WSS process.
76    THE THEORY OF LINEAR PREDICTION

     Equality holds if and only if Sxx (e jω )|Am (e jω )|2 is constant, or equivalently, x(n) is AR with order
     ≤ m. The proof is therefore complete.                                                                   

     6.5.1 Error Spectrum Gets Flatter as Predictor Order Grows
                                                                              f
     We will now show that the power spectrum of the error em (n) gets ‘‘flatter’’ as the prediction order
                                                                  f
     m increases. With Sm (e jω ) denoting the power spectrum of em (n), we have

                                                Sm (e jω ) = Sxx (e jω )|Am (e jω )|2 .
                                                          f
     The flatness measure γm2 for the process em (n) is
                                                                  
                                               2π
                                          1
                                   exp            LnSm (e jω ) dω
                                         2π 0
                            γm2 =             2π
                                          1
                                                  Sm (e jω ) dω
                                         2
                                        0π                                     
                                          1    2π                           
                                   exp            Ln Sxx (e jω )|Am (e jω )|2 dω
                                         2π 0
                                =                             f
                                                           Em
            2π
     Using 0 Ln|Am (e jω )|2 dω = 0 (Lemma 6.1), this simplifies to
                                                                          
                                                        2π
                                                 1
                                          exp              LnSxx (e jω ) dω
                                                2π 0
                                   γm2 =                     f
                                                                              .                           (6.18)
                                                           Em
     The numerator is fixed for a given process. As the prediction order increases, the error Em decreases.
     This proves that the flatness is an increasing function of prediction order m (Fig. 6.8).



                                    1

                            γm2
                         flatness
                         of error

                                                                                          m (prediction
                                        0   1    2                                            order)



     FIGURE 6.8: The flatness γm2 of the optimal prediction error increases monotonically with increasing
     m. It is bounded above by unity.
                                          PREDICTION ERROR BOUND AND SPECTRAL FLATNESS                      77

We can rewrite γm2 in terms of the flatness measure γx2 of the original process x(n) as follows:

                                                             γx2R(0)
                                                    γm2 =          f     .
                                                                Em
Here, γx2 and R(0) are constants determined by the input process x(n). The flatness γm2 of the error
          f                                                                                 f
process em (n) is inversely proportional to the mean square value of the prediction error Em .
      Example 6.3: Spectral Flattening With Linear Prediction. In this example, we consider an
AR(4) process with power spectrum
                                                                    1
                                                Sxx (e jω ) =               ,
                                                                |A(e jω )|2
where

                   A(z) = 1 − 1.8198z−1 + 2.0425z−2 − 1.2714z−3 + 0.4624z−4

The first few elements of the autocorrelation are

           R(0)     R(1)             R(2)        R(3)         R(4)             R(5)     R(6)        R(7)
           7.674    4.967           −0.219      −3.083       −2.397           −0.639   −0.087      −0.474

If we do linear prediction on this process, the prediction polynomials are

                   A0 ( z )        1.0
                   A1 ( z )        1.0   −0.6473          0               0           0      0     0
                   A2 ( z )        1.0   −1.1457       0.7701             0           0      0     0
                   A3 ( z )        1.0   −1.5669       1.3967          −0.5469        0      0     0
                   A4 ( z )        1.0   −1.8198       2.0425          −1.2714     0.4624    0     0
                   A5 ( z )        1.0   −1.8198       2.0425          −1.2714     0.4624    0     0
                   A6 ( z )        1.0   −1.8198       2.0425          −1.2714     0.4624    0     0

Thus, after A4 (z), the polynomial does not change, because the original process is AR(4). The
lattice coefficients are

                              k1           k2           k3               k4      k5    k6    k7

                      −0.6473            0.7701     −0.5469            0.4624    0.0   0.0   0.0

Again, after k4 , all the coefficients are zero because the original process is AR(4).
78    THE THEORY OF LINEAR PREDICTION
                                                                                                                   f
           Fig. 6.9 shows the power spectrum Sm (e jω ) of the prediction error em (n) for 1 ≤ m ≤ 4. The
     original power spectrum Sxx (e jω ) = S0 (e jω ) is shown in each plot for comparison. For convenience,
     the plots are shown normalized so that Sxx (e jω ) has peak value equal to unity. It is seen that the
     spectrum Sm (e jω ) gets flatter as m grows, and S4 (e jω ) is completely flat, again because the original
     process is AR(4). The flatness measure, calculated for each of these power spectra, is as follows:
                               γ02                                 γ12         γ22         γ32         γ42   γ52   γ62

                            0.1309                           0.2248      0.5517        0.7862          1.0   1.0   1.0



                                (a)                           1
                                      Error power-spectrum




                                                                                                         m=0
                                                                                                         m=1
                                                             0.5




                                                              0
                                                               0         0.2         0.4         0.6         0.8         1
                                                                                           ω/π


                                (b)                           1
                                      Error power-spectrum




                                                                                                         m=0
                                                                                                         m=2
                                                             0.5




                                                              0
                                                               0         0.2         0.4         0.6         0.8         1
                                                                                           ω/π


     FIGURE 6.9: Original AR(4) power spectrum (dotted) and power spectrum of prediction error
     (solid). (a) Prediction order = 1, (b) prediction order = 2, (c) prediction order = 3, and (d) prediction
     order = 4.
                                                         PREDICTION ERROR BOUND AND SPECTRAL FLATNESS                   79
                        (c)
                                                         1




                              Error power-spectrum
                                                                                                    m=0
                                                                                                    m=3
                                                     0.5




                                                         0
                                                          0         0.2       0.4         0.6        0.8   1
                                                                                    ω/π

                        (d)
                                                         1
                              Error power-spectrum




                                                                                                    m=0
                                                                                                    m=4
                                                     0.5




                                                         0
                                                          0         0.2       0.4         0.6        0.8   1
                                                                                    ω/π


                                                               FIGURE 6.9: Continued.



6.5.2 Mean Square Error and Determinant
In Section 2.4.3, we found that the minimized mean square prediction error can be written in
terms of the determinant of the autocorrelation matrix. Thus,

                                                                          f    f                f
                                                         det Rm = Em−1 Em−2 . . . E0 .                         (6.19)
                                                     f
We know that the sequence Em is monotone nonincreasing and lower bounded by zero. So it
                 f
reaches a limit E∞ as m → ∞. We will now show that
                                                                              !1/m
                                                              lim   det Rm           = E∞f                     (6.20)
                                                              m→∞
80    THE THEORY OF LINEAR PREDICTION

     The quantity (det Rm )1/m can be related to the differential entropy of a Gaussian random process
     (Cover and Thomas, 1991, p. 273). We will say more about the entropy in Section 6.6.1.
          Proof of (6.20). If a sequence of numbers α0 , α1, α2 , . . . tends to a limit α, then

                                                   1 
                                                       M−1
                                               lim     αi = α.                                      (6.21)
                                              M→∞ M
                                                       i=0


                                                                                                        f
     That is, the average value of the numbers tends to α as well (Problem 26). Defining αi = Ln Ei ,
     we have from Eq. (6.19)
                               "      #
                                              f         f               f
                             Ln det Rm = Ln Em−1 + Ln Em−2 . . . + Ln E0 .

     Because Ln(x) is a continuous function when x > 0, we can say

                                                       f
                                              lim Ln Ei = Ln E∞f .                                  (6.22)
                                              i→∞


     (Problem 26). We therefore have

                         "      #                                                               !
                      1                   1       f         f               f
                   lim Ln det Rm = lim       Ln Em−1 + Ln Em−2 . . . + Ln E0
                  m→∞ m             m→∞ m
                                  = Ln E∞f ,

     by invoking Eq. (6.21) and (6.22). This implies
                                                 
                                       1 "       #       "      #
                               exp lim Ln det Rm    = exp Ln E∞f .
                                   m→∞ m



     Because exp(x) is a continuous function of the argument x, we can interchange the limit with
     exp(.). This results in (6.20) indeed.                                                    
           A deeper result, called Szego’s theorem (Haykin, 1986, pp. 96), can be used to prove the
     further fact that the limit in Eq. (6.20) is really equal to the bound on the right-hand side of
     Eq. (6.17). That is,

                                       !1/m                           2π                
                                                                  1                 jω
                       lim    det Rm          = E∞f = exp                    Ln Sxx (e ) dω .       (6.23)
                      m→∞                                        2π    0
                                     PREDICTION ERROR BOUND AND SPECTRAL FLATNESS                         81
In other words, the lower bound on the mean square prediction error, which is achieved for the
AR(N ) case for finite prediction order, is approached asymptotically for the non-AR case. For
further details on the asymptotic behavior, see Grenander and Szego (1958) and Gray (1972).
       Predictability measure. We now see that the flatness measure in Eq. (6.13) can be written
in the form
                                                        f
                                                     E∞
                                             γx2 =                                              (6.24)
                                                     R(0)
                                 f
For very small γx2 , the power E∞ in the prediction error is therefore much smaller than the power
R(0) in the original process, and we say that the process is very predictable. On the other hand, if
γx2 is close to unity then the ultimate prediction error is only slightly smaller that R(0), and we say
that the process is not very predictable. For white noise, γx2 = 1, and the process is not predictable,
as one would expect. The reciprocal 1/γx2 can be regarded as a convenient measure of predictability
of a process.                                                                                        


6.6     MAXIMUM ENTROPY AND LINEAR PREDICTION
There is a close relation between linear prediction and the so-called maximum entropy methods
(Burg, 1972). We now briefly outline this. In Section 6.5, we showed that the mth-order prediction
        f
error Em for a WSS process x(n) is bounded as
                                               2π                  
                                          1
                               Emf ≥ exp              LnSxx (e jω ) dω .                        (6.25)
                                         2π     0


We also know that if the process x(n) is AR(N ), then equality is achieved in Eq. (6.25) whenever
the prediction order m ≥ N. Now consider two WSS processes x(n) and y(n) with autocorrelations
R(k) and r(k), respectively, and power spectra Sxx (e jω ) and Syy (e jω ), respectively. Assume that

                                       R(k) = r(k),     | k| ≤ N .
                                                                                    f
Then the predictor polynomials Am (z) and the mean square prediction errors Em will be identical
for the processes, for 1 ≤ m ≤ N.
       Suppose now that y(n) is AR(N ), but x(n) is not necessarily AR, then from Section 6.2, we
know that
                                                          
                                         2π
                                   1                                f
                              exp           LnSyy (e jω ) dω = EN
                                  2π 0
82    THE THEORY OF LINEAR PREDICTION
     From Theorem 6.2, on the other hand, we know that
                                                                
                                                 2π
                                  f          1              jω
                                EN ≥ exp            LnSxx (e ) dω
                                            2π 0

     Comparison of the two preceding equations shows that
                                                                          
                              2π                               2π
                         1               jω                1              jω
                  exp            LnSyy (e ) dω ≥ exp              LnSxx (e ) dω .
                        2π 0                              2π 0

     Moreover, they are equal if and only if x(n) is also AR(N ) (by Theorem 6.2). Because exp(v) is a
     monotone-increasing function of real v, the above also means
                                  2π                        2π
                                                jω
                                        LnSyy (e )dω ≥              LnSxx (e jω )dω.
                                   0                          0

     Summarizing, we have proved the following result.
            Theorem 6.3. Let x(n) and y(n) be two WSS processes with autocorrelations R(k) and
     r(k), respectively, and power spectra Sxx (e jω ) > 0 and Syy (e jω ) > 0, respectively. Assume that
     r(k) = R(k) for |k| ≤ N and that y(n) is AR(N ), then
                                  2π                         2π
                                               jω
                                        LnSyy (e ) dω ≥             LnSxx (e jω ) dω                 (6.26)
                                  0
                                                             0
                                       AR(N) process


     with equality if and only if x(n) is also AR.                                                       ♦


     6.6.1 Connection to the Notion of Entropy
     The importance of the above result lies in the fact that the integrals in Eq. (6.26) are related to the
     notion of entropy in information theory. If a WSS process y(n) is Gaussian, then it can be shown
     (Cover and Thomas, 1991) that the quantity
                                                      2π
                                         φ = a+b            LnSyy (e jω ) dω                         (6.27)
                                                      0
                                                                                     √
     is equal to the entropy per sample (entropy rate) of the process, where a = ln 2π e and b = 1/4π .
            Details. For discrete-amplitude random variables, entropy is related to the extent of
     ‘‘uncertainty’’ or ‘‘randomness.’’ For a continuous-amplitude random variable, the entropy is more
     appropriately called differential entropy and should be interpreted carefully. Thus, given a random
                                  PREDICTION ERROR BOUND AND SPECTRAL FLATNESS                          83
variable x with differential entropy Hx , consider the quantized version xΔ with a fixed quantization
step size Δ. Then the number of bits required to represent xΔ is

                                           bΔ = Hx + c,

where c depends only on the step size Δ (Cover and Thomas, 1991, p. 229). Thus, for fixed step
size, larger differential entropy implies more number of bits, uncertainty, or randomness.   
       Although the integral in the second term of (6.27) will be referred to as ‘‘entropy’’ and
interpreted as ‘‘randomness’’ in the following discussions, the details given above should be kept
in mind. The problem of maximizing φ under appropriate constraints is said to be an entropy
maximization problem. Theorem 6.3 says that, among all Gaussian WSS processes with fixed
autocorrelation for |k| ≤ N, the entropy has the maximum value for AR(N ) processes. Furthermore,
all AR(N ) processes with autocorrelation fixed as above have the same entropy.
       Now assume that y(n) is the AR(N ) model for x(n) obtained by use of linear prediction as
                                                                             f
in Fig. 5.3. We know that in this model e(n) is white noise with variance EN . If we also make e(n)
Gaussian, then the output y(n) will be Gaussian as well (Papoulis, 1965). In other words, we have
obtained an AR(N ) model y(n) for the process x(n), with the following properties.

    1. The AR(N ) process y(n) is Gaussian.
    2. The autocorrelation r(k) of the AR(N ) process y(n) matches the autocorrelation R(k) of
       the given process x(n) (i.e., R(k) = r(k)), for |k| ≤ N (as shown in Section 5.4).
                                                        2π
    3. Under this matching constraint, the entropy 0 LnSyy (e jω ) dω of the process y(n) is the
       largest possible. In other words, y(n) is ‘‘as random as it could be,’’ under the constraint
       r(k) = R(k) for |k| ≤ N .

The relation between linear prediction and maximum entropy methods is also discussed by Burg
(1972), Robinson (1982), and Cover and Thomas (1991). Robinson (1982) also gives a good
perspective on the history of spectrum estimation. Also see Papoulis (1981).


6.6.2 A Direct Maximization Problem
A second justification of Theorem 6.3 will now be mentioned primarily because it might be more
insightful for some readers. Suppose we forget about the linear prediction problem and consider
the following maximization problem directly: we are given a WSS process x(n) with autocorrelation
R(k). We wish to find a WSS process y(n) with the following properties.

    1. Its autocorrelation r(k) satisfies r(k) = R(k) for |k| ≤ N.
84       THE THEORY OF LINEAR PREDICTION
                                                                                 2π
          2. With Syy (e jω ) denoting the power spectrum of y(n), the entropy 0 LnSyy (e jω ) dω is as
             large as possible. This must be achieved by optimizing the coefficients r(k) for |k| > N.

     A necessary condition for the maximization2 of the entropy φ defined in Eq. (6.27) is ∂φ/∂ r (k) = 0
     for |k| > N. Now,
                                                  2π
                                      ∂φ              ∂[LnSyy (e jω )]
                                            =b                              dω
                                     ∂ r(k)                   ∂ r(k)
                                               0 2π
                                                            1       ∂ Syy (e jω )
                                         =b                                       dω
                                                  0   Syy (e jω ) ∂ r(k)
                                                2π
                                                            1
                                         =b                    jω )
                                                                    e−jωk dω
                                                  0   S yy ( e
                                                             ∞
     The last equality follows by using Syy (e jω ) = k=−∞ r(k)e−jωk . Setting ∂φ/∂ r(k) = 0, we
     therefore obtain
                                2π
                                          1
                                             jω )
                                                  e−jωk dω = 0,              | k| > N .
                                0   S yy ( e

     This says that the inverse Fourier transform of 1/Syy (e jω ) should be of finite duration, restricted to
     the region |k| ≤ N. In other words, we must be able to express 1/Syy (e jω ) as

                                                  1
                                                         = c1 |AN (e jω )|2,
                                             Syy (e jω )

     or equivalently
                                                                  c
                                             Syy (e jω ) =                 ,
                                                             |AN (e jω )|2
                                                                   N
     where AN (z) is an FIR function of the form AN (z) = 1 + i=1 a∗N,i z−i . Thus, Syy (e jω ) is an
     autoregressive spectrum.
           Because the desired solution has been proved to be AR(N ), we can find it simply by finding
     the AR(N ) model of the process x(n) using linear prediction techniques (Section 5.3). This is
     because we already know that the AR(N ) model y(n) arising out of linear prediction satisfies
     r(k) = R(k) for |k| ≤ N (Section 5.4) and, furthermore, that an AR(N ) spectrum satisfying the
     constraint r(k) = R(k), |k| ≤ N is unique (because the solution to the normal equations is unique).


     2
      The fact that this maximizes rather than minimizes φ is verified by examining the Hessian matrix (Chong and
     Żak, 2001; Antoniou and Lu, 2007).
                                   PREDICTION ERROR BOUND AND SPECTRAL FLATNESS                           85
6.6.3 Entropy of the Prediction Error
      f
Let em (n) be the mth-order optimal prediction error for a WSS process x(n), and let Sm (e jω ) be
                        f
the power spectrum for em (n). With Sxx (e jω ) denoting the power spectrum of x(n), we have

                                     Sm (e jω ) = Sxx (e jω )|Am (e jω )|2
                                      2π
and S0 (e jω ) = Sxx (e jω ). Because 0 Ln|Am (e jω )|2 dω = 0 (Lemma 6.1), we have
                            2π                          2π
                                  LnSm (e jω ) dω =               LnSxx (e jω ) dω,
                             0                           0
                                              f
for all ω . If x(n) is Gaussian, then so is em (n), and the integral above represents the entropy of
  f
em (n).
       Thus, in the Gaussian case, the entropy of the prediction error is the same for all prediction
orders m and equal to the entropy of the input x(n). From Eq. (6.18), we see that the flatness γm2
              f
of the error em (n) is given by
                                                        K
                                                γm2 =        f,                                 (6.28)
                                                        Em
where K is independent of m and depends only on the entropy of x(n). So, the flatness of the
                                         f
prediction error is proportional to 1/Em . Thus, as the prediction order m increases, the error
                                                                                                 f
spectrum becomes flatter, not because the entropy increases, but because the mean square error Em
decreases.

6.7       CONCLUDING REMARKS
The derivation of the optimal linear predictor was based only on the idea that the mean-squared
prediction error should be minimized. We also pointed out earlier that the solution has the
minimum-phase property and that it has structural interpretations in terms of lattices. We now
see that the solution has interesting connections to flatness measures, entropy, and so forth. It is
fascinating to see how all these connections arise starting from the ‘‘simple’’ objective of minimizing
a mean square error.
       Another interesting topic we have not discussed here is the prediction of a continuous-time
band-limited signal from a finite number of past samples. With sufficiently large sampling rate, this
can be done accurately, with predictor coefficients independent of the signal! This result dates back
to Wainstein and Zubakov (1962). Further results can be found in Vaidyanathan (1987), along
with a discussion of the history of this problem.

                                            •     •     •         •
                                                                                                            87




                                       CHAPTER 7

                       Line Spectral Processes

7.1      INTRODUCTION
A WSS random process is said to be line spectral, if the power spectrum Sxx (e jω ) consists only of
Dirac delta functions, that is,

                                          
                                          L
                               jω
                        Sxx (e ) = 2π           ci δa (ω − ωi ),     0 ≤ ω < 2π,                   (7.1)
                                          i=1


where {ωi } is a set of L distinct frequencies (called line frequencies) and ci ≥ 0. If ci > 0 for all i,
then L represents the number of lines in the spectrum as demonstrated in Fig. 7.1, and we say that
L is the degree of the process. We also sometimes abbreviate this as a Linespec(L) process. Note
that the power of the signal x(n) around frequency ωi is ci , that is,

                                           ωi +
                                      1
                                                    Sxx (e jω ) dω = ci                            (7.2)
                                     2π    ωi −


for sufficiently small  > 0. So we say that ci is the power at the line frequency ωi .
        In this chapter, we study line spectral processes in detail. We first express the Linespec(L)
property concisely in terms of the autocorrelation matrix. We then study the time domain
properties and descriptions of Linespec(L) processes. For example, we show that a Linespec(L)
process satisfies a homogeneous difference equation. Using this, we can predict, with zero error,
all of its samples, if we know the values of L successive samples. We then consider the problem of
identifying a Linespec(L) process in noise. More specifically, suppose we have a signal y(n), which
is a sum of a Linespec(L) process x(n) and uncorrelated white noise e(n):

                                          y(n) = x(n) + e(n).

We will show how the line frequencies ωi and the line powers ci in Eq. (7.1) can be extracted from
the noisy signal.
88    THE THEORY OF LINEAR PREDICTION

                                              2 π c1

                                                       2 π c2
                                     jω
                            Sxx (e        )

                                                                             …                    ω
                                              ω1       ω2                                ω L 2π
                                          0

     FIGURE 7.1: Power spectrum of a line spectral process with L lines. The kth line is a Dirac delta
     function with height 2πck .



     7.2     AUTOCORRELATION OF A LINE SPECTRAL PROCESS
     The autocorrelation of the line spectral process is the inverse Fourier transform of Eq. (7.1):

                                                                   
                                                                   L
                                                         R(k) =           ci e jωi k .                 (7.3)
                                                                    i=1

     This is a superposition of single-frequency sequences. Consider the (L + 1) × (L + 1) autocorre-
     lation matrix RL+1 of a WSS process:
                                      ⎡                                      ⎤
                                         R(0)       R(1)      ...     R(L)
                                      ⎢                                      ⎥
                                      ⎢ R*(1)       R(0)      . . . R(L − 1) ⎥
                                      ⎢
                             RL+1 = ⎢ .                                      ⎥                  (7.4)
                                                      ..      ..         ..  ⎥
                                      ⎣ ..             .         .        .  ⎦
                                                R*(L)           R*(L − 1)          ...     R(0)

     The Linespec(L) property can be stated entirely in terms of RL+1 and RL as shown by the following
     result.

            Theorem 7.1. Line spectral processes. A WSS process x(n) is line spectral with degree L if and
     only if the matrix RL+1 is singular and RL is nonsingular.                                         ♦
           Proof. We already showed in Section 2.4.2 that if RL+1 is singular, then the power spectrum
     has the form Eq. (7.1) (line spectral, with degree ≤ L). Conversely, assume x(n) is line spectral
     with degree ≤ L. If we pass x(n) through an FIR filter V(z) of order ≤ L with zeros at the line
     frequencies ωi , the output is zero for all n. With the filter written as

                                                                   
                                                                   L
                                                         V(z) =           v*i z−i ,                    (7.5)
                                                                    i=0
                                                                  LINE SPECTRAL PROCESSES                89
the output is
                         v0* x(n) + v1* x(n − 1) + . . . + vL* x(n − L) = 0.                     (7.6)

Defining
                                                                T
                             x(n) = x(n) x(n − 1) . . . x(n − L)
                     T
and v = v0 v1 . . . vL , we can rewrite (7.6) as v† x(n) = 0. From this, we obtain
v† E[x(n)x† (n)]v = 0, that is,
                                           v† RL+1 v = 0.
Because RL+1 is positive semidefinite, the above equation implies that RL+1 is singular. Summa-
rizing, RL+1 is singular if and only if x(n) is line spectral with degree ≤ L. By replacing L + 1
with L, it also follows that RL is singular if and only if x(n) is line spectral with degree ≤ L − 1.
This means, in particular, that if x(n) is line spectral with degree equal to L, then RL has to be
nonsingular and, of course, RL+1 singular.
        Conversely, assume RL is nonsingular and RL+1 singular. The latter implies that the process
is line spectral with degree ≤ L, as we already showed. The former implies that the degree is not
≤ L − 1. So the degree has to be exactly L.                                                        
      Notice, by the way, that RL is a principal submatrix of RL+1 in two ways:
                                                              
                                         RL ×            R(0) ×
                             RL+1 =                 =               .                            (7.7)
                                          × R(0)          × RL

We now show that if x(n) is Linespec(L), there is a unique nonzero vector v (up to a scale factor)
that annihilates RL+1 :

                                            RL+1 v = 0.                                          (7.8)

      Proof. Because RL+1 is singular, it is obvious that there exists an annihilating vector v. To
prove uniqueness, we assume there are two linearly independent vectors u = 0 and w = 0, such that
RL+1 u = RL+1 w = 0, and bring about a contradiction. The 0th elements of these vectors must be
nonzero, that is, u0 = 0 and w0 = 0, for otherwise the remaining components annihilate RL in
view of (7.7), contradicting nonsingularity of RL . Now consider the vector y = u/u0 − w/w0 . This
is nonzero (because u and w are linearly independent), but its zeroth component is zero:
                                                 
                                                   0
                                           y=         = 0
                                                   z

Because RL+1 y = 0, it follows that RL z = 0,    z = 0, which violates nonsingularity of RL .      
90    THE THEORY OF LINEAR PREDICTION
          The result can also be proved by using the eigenvalue interlace property for principal
     submatrices of Hermitian matrices (Horn and Johnson, 1985). But the above proof is more direct.


     7.2.1 The Characteristic Polynomial
     The unique vector v that annihilates RL+1 has zeroth component v0 = 0. For, if v0 = 0, then the
     smaller vector
                                                                       T
                                                     w = v1 v2 . . . vL

     would satisfy RL w = 0 (in view of Eq. (7.7)) contradicting the fact that that RL is nonsingular.
     So, without loss of generality, we can assume v0 = 1. So the FIR filter V(z) in Eq. (7.5), which
     annihilates the line spectral process x(n), can be written as

                                                                     
                                                                     L
                                                     V(z) = 1 +            v*i z−i .
                                                                     i=1

     This filter, determined by the unique eigenvector v, is itself unique and is called the characteristic
     polynomial or characteristic filter of the line spectral process. From Eq. (7.6), we see that a
     Linespec(L) process x(n) also satisfies the homogeneous difference equation

                                                               
                                                               L
                                                    x(n) = −         v*i x(n − i).                   (7.9)
                                                               i=1

     This means, in particular, that all future samples can be predicted with zero error if a block of L
     samples is known.




                                    L


                          rank of R m


                                        1
                                                                                       m
                                            1   2                              L

     FIGURE 7.2: The rank of the autocorrelation matrix Rm as a function of size m, for a Linespec(L)
     process.
                                                                       LINE SPECTRAL PROCESSES           91

7.2.2 Rank Saturation for a Line Spectral Process
From the above discussions, we see that if x(n) is Linespec(L), then RL as well as RL+1 have rank
L. It can, in fact, be proved (Problem 24) that
                                             
                                                 m     for 1 ≤ m ≤ L
                                rank Rm =                                                      (7.10)
                                                 L       for m ≥ L.

This is indicated in Fig. 7.2. Thus, the rank saturates as soon as m exceeds the value L.


7.3     TIME DOMAIN DESCRIPTIONS
Line spectral processes exhibit a number of special properties, which are particularly useful when
viewed in the time domain. In this section, we discuss some of these.


7.3.1 Extrapolation of Autocorrelation
We showed that a Linespec(L) process x(n) sastisfies the homogeneous difference equation
Eq. (7.9). If we multiply both sides of (7.9) by x*(n − k) and take expectations, we get

                                                 
                                                 L
                                     R(k) = −          v*i R(k − i),                           (7.11)
                                                 i=1


where we have used R(k) = E[x(n)x*(n − k)]. Conversely, we will see that whenever the autocor-
relation satisfies the above recursion, the random process x(n) itself satisfies the same recursion,
that is, (7.9) holds.
       Thus, if we know R(k) for 0 ≤ k ≤ L − 1 for a Linespec(L) process x(n), we can compute
R(k) for all k using (7.11). This is similar in spirit to the case where x(n) is AR(N), in which case,
the knowledge of R(k) for 0 ≤ k ≤ N would reveal the polynomial AN (z) and therefore the value
of R(k) for all k (Section 5.3.2).


7.3.2 All Zeros on the Unit Circle
From the proof of Theorem 7.1, we know that V(z) annihilates the process x(n). This implies, in
particular, that all the L zeros of

                                                       
                                                       L
                                      V(z) = 1 +             v*m z−m                           (7.12)
                                                       m=1
92       THE THEORY OF LINEAR PREDICTION

     are on the unit circle at the L distinct points ωi , where Sxx (e jω ) has the lines.1 This means, in
     particular, that the numbers vi satisfy the property

                                       vi = cv*L−i ,   |c| = 1,           0 ≤ i ≤ L,                          (7.13)

     where v0 = 1. That is, V(z) is a linear phase filter. Because V(z) has the L distinct zeros e jωi , the
     solutions to the homogeneous equation Eq. (7.9) necessarily have the form

                                                           
                                                           L
                                                  x(n) =         di e jωi n .                                 (7.14)
                                                           i=1

     Note that there are only L random variables di in Eq. (7.14), although the ‘‘random’’ process x (n) is an
     infinite sequence. The WSS property of x(n) imposes some strong conditions on the joint behavior
     of the random variables di, which we shall derive soon. The deterministic quantity ci in Eq. (7.3) is
     the power of the process x(n) at the line frequency ωi , whereas the random variable di is said to be
     the random amplitude (possibly complex) at the frequency ωi .

     7.3.3 Periodicity of a Line Spectral Process
     The process (7.14) is periodic if and only if all the frequencies ωi are rational multiples of 2π
     (Oppenheim and Schafer, 1999). That is,
                                                   "K #
                                                        i
                                             ωi =          2π
                                                      Mi
     for integers Ki , Mi . In this case, we can write ωi = 2π Li /M where M is the least common multiple
     (LCM) of the set {Mi }, and Li are integers. Thus, all the frequencies are harmonics of the
     fundamental frequency 2π/M. Under this condition, we say that the process is periodic with period
     M or just harmonic. Because R(k) has the same form as x(n) (compare Eqs. (7.3) and (7.14)), we
     see that R(k) is periodic if and only if x(n) is periodic. In this connection, the following result is
     particularly interesting.
            Theorem 7.2. Let x(n) be a WSS random process with autocorrelation R(k). Suppose
     R(0) = R(M) for some M > 0. Then, x(n) is periodic with period M, and so is R(k).                  ♦
            Proof. Because R(0) = R(M), we have

                                         E[x(n)x*(n)] = E[x(n)x*(n − M)].                                     (7.15)

     1
      Another way to see this would be as follows: R(k) satisfies the homogeneous difference equation (7.11). At the
     same time, it also has the form (7.3). From the theory of homogeneous equations, it then follows that the L zeros
     of V(z) have the form e jωi .
                                                                   LINE SPECTRAL PROCESSES                93
The mean square value of x(n) − x(n − M), namely,
                         "                 #"            #
                       E x(n) − x(n − M) x*(n) − x*(n − M) ,

can be written as

                           μ = E[|x(n)|2 ] − E[x(n)x*(n − M)]
                               −E[x(n − M)x*(n)] + E[|x(n − M)|2].

The first and the last terms are equal because of WSS property. Substituting further from
Eq. (7.15), we get μ = 0. So the random variable x(n) − x(n − M) has mean square value equal
to zero. This implies x(n) = x(n − M). So x(n) is periodic with period M. Using the definition
R(k) = E[x(n)x*(n − k)], it is readily verified that R(k) is also periodic, with period M.   

7.3.4 Determining the Parameters of a Line Spectral Process
Given the autocorrelation R(k), 0 ≤ k ≤ L of the Linespec(L) process x(n), we can identify the
unique eigenvector v satisfying RL+1 v = 0. Then, the unique characteristic polynomial V(z) is
determined (Eq. (7.12)). All its L zeros are guaranteed to be on the unit circle (i.e., they have the
form e jωi ). The line frequencies ωi can therefore be identified. From Eq. (7.3), we can solve for the
constants ci (line powers) by writing a set of linear equations. For example, if L = 3, we have
                                ⎡                  ⎤⎡ ⎤ ⎡             ⎤
                                     1 1       1       c1       R(0)
                                ⎢ jω1 jω2 jω3 ⎥ ⎢ ⎥ ⎢                 ⎥
                                ⎣e       e    e ⎦ ⎣ c2 ⎦ = ⎣ R(1) ⎦ .                           (7.16)
                                    2jω1 2jω2 2jω3
                                  e     e    e         c3       R(2)

The 3 × 3 matrix is a Vandermonde matrix and is nonsingular because ωi are distinct (Horn and
Johnson, 1985). So, we can uniquely identify the line powers ci . Thus, the line frequencies and
powers in Fig. 7.1 have been completely determined from the set of coefficients R(k), 0 ≤ k ≤ L.
       Identifying amplitudes of sinusoids in x (n). Similarly, consider the samples x(n) of
the Linespec(L) random process x(n). If we are given the values of L successive samples, say
x(0), x(1), . . . x(L − 1), we can uniquely identify the coefficients di appearing in Eq. (7.14) by
solving a set of equations similar to (7.16). Thus, once we have measured L samples of the random
process, we can find all the future and past samples exactly, with zero error! The randomness is only
in the L coefficients {di }, and once these have been identified, x(n) is known for all n.         

7.4     FURTHER PROPERTIES OF TIME DOMAIN DESCRIPTIONS
Starting from the assumption that x(n) is a line spectral process, we derived the time domain
expression Eq. (7.14). Conversely, consider a sequence of the form Eq. (7.14), where di are random
94    THE THEORY OF LINEAR PREDICTION
     variables. Is it necessarily a line spectral process? Before addressing this question, we first have to
     address WSS property. The WSS property of Eq. (7.14) itself imposes some severe restrictions on
     the random variables di, as shown next.
            Lemma 7.1. Consider a random process of the form


                                                       
                                                       L
                                              x(n) =         d i e j ωi n ,                          (7.17)
                                                       i=1



     where di are random variables and ωi are distinct constants. Then, x(n) is a WSS process if and
     only if

         1. E[di] = 0 whenever ωi = 0 (zero-mean condition).
         2. E[didm* ] = 0 for i = m (orthogonality condition).                                          ♦

            Proof. Recall that x(n) is WSS if E[x(n)] and E[x(n)x*(n − k)] are independent of n. First,
                                                                                   L
     assume that the two conditions in the lemma are satisfied. We have E[x(n)] = i=1 E[di ]e jωi n . By
     the first condition of the lemma, this is constant for all n. Next,


                                                  
                                                  L 
                                                    L
                             E[x(n)x*(n − k)] =               E[didm* ]e jωi n e−jωm (n−k)           (7.18)
                                                   i=1 m=1



     With di satisfying the second condition of the lemma, this reduces to


                                                             
                                                             L
                                    E[x(n)x*(n − k)] =             E[|di |2 ]e jωi k ,               (7.19)
                                                             i=1



     which is independent of n. Thus, the two conditions of the lemma imply that x(n) is WSS. Now
     consider the converse. Suppose x(n) is WSS. Because E[x(n)] is independent of n, we see from
     Eq. (7.17) that E[di ] = 0 whenever ωi = 0. So the first condition of the lemma is necessary. Next,
     Eq. (7.18) can be rewritten as


                                                 
                                                 L 
                                                   L
                            E[x(n)x*(n − k)] =               e jωi n E[di dm* ]e−jωmn e jωm k .
                                                  i=1 m=1
                                                                                   LINE SPECTRAL PROCESSES     95
Express the right-hand side as
                                           ⎡                                       ⎤⎡         ⎤
                                                 e−jω1 n 0 . . .              0       e jω1 k
                                               ⎢                                   ⎥ ⎢ jω2 k ⎥
                                               ⎢ 0 e−jω2 n . . .              0    ⎥⎢ e       ⎥
                    [ e jω1 n . . . e jωL n ]D ⎢
                                               ⎢ ..      .. . .               ..   ⎥ ⎢ . ⎥,
                                                                                   ⎥⎢ . ⎥
                                               ⎣ .        .     .              .   ⎦⎣ . ⎦
                                                0           0      . . . e−jωL n        e jωL k
                                                                                                 
                                       call this A(n)                                   t(k)
where D is an L × L matrix with [D]im = E[di dm* ]. WSS property requires that A(n)t(k) be
independent of n, for any fixed choice of k. Thus, defining the matrix

                                    T = [ t(0) t(1) . . . t(L − 1) ],

we see that A(n)T must be independent of n. But T is a Vandermonde matrix and is nonsingular
because ωi are distinct. So A(n) must itself be independent of n. Consider now its mth column:
                                               
                                               L
                                 [A(n)]m =           E[di dm *]e j(ωi −ωm )n .
                                               i=1

Because ωi are distinct, the differences ωi − ωm are distinct for fixed m. So the above sum is
independent of n if and only if E[di dm* ] = 0 for i = m. The second condition of the lemma is,
therefore, necessary as well.                                                                 
      From Eq. (7.19), it follows that R(k) has the form
                                                 
                                                 L
                                       R(k) =             E[|di |2 ]e jωi k                           (7.20)
                                                    i=1

so that the power spectrum is a line spectrum. Thus, if di satisfies the conditions of the lemma,
then x(n) is not only WSS, but is also a line spectral process of degree L. Summarizing, we have
proved this:
      Theorem 7.3. Consider a random process of the form
                                                     
                                                     L
                                          x(n) =             di e jωi n ,                             (7.21)
                                                      i=1

where di are random variables and ωi are distinct constants. Then, x(n) is a WSS and, hence, a line
spectral process if and only if

    1. E[di ] = 0 whenever ωi = 0 (zero-mean condition).
    2. E[di dm* ] = 0 for i = m (orthogonality condition).
96    THE THEORY OF LINEAR PREDICTION

     Under this condition, R(k) is as in Eq. (7.20), so that E[|di |2 ] represents the power at the line
     frequency ωi .                                                                                   ♦
            Example 7.1: Stationarity and Ergodicity of Line spectral Processes. Consider the random
     process x(n) = Ae jω0 n , where ω0 = 0 is a constant and A is a zero-mean random variable. We see
     that E[x(n)] = E[A]e jω0 n = 0 and E[x(n)x*(n − k)] = E[|A|2 ]e jω0 k . Because these are independent
     of n, the process x(n) is WSS.
            If a process x(n) is ergodic (Papoulis, 1965), then, in particular, E[|x(n)|2] must be equal to
     the time average. In our case, because |x(n)| = |A|, we see that

                                             1      N
                                                    |x(n)|2 = |A|2
                                           2N + 1
                                                    n=−N

     and is, in general, a random variable! So the time average will in general not be equal to the ensemble
     average E[|A|2 ], unless |A|2 is nonrandom. (For example, if A = ce jθ , where c is a constant and θ is
     a random variable, then |A|2 would be a constant.) So we see that, a WSS line spectral process is
     not ergodic unless we impose some strong restriction on the random amplitudes.
            Example 7.2: Real Random Sinusoid. Next consider a real random process of the form

                                            x(n) = A cos(ω0 n + θ),

     where A and θ are real random variables and ω0 > 0 is a constant. We have

                                   x(n) = 0.5Ae jθ e jω0 n + 0.5Ae−jθ e−jω0 n .

     From Lemma 7.1, we know that this is WSS if and only if

                          E[Ae jθ ] = 0,    E[Ae−jθ ] = 0,       and     E[A 2 e j2θ ] = 0.          (7.22)

     This is satisfied, for example, if A and θ are statistically independent random variables and θ is
     uniformly distributed in [0, 2π). Thus, statistical independence implies

                         E[Ae jθ ] = E[A]E[e jθ ]    and     E[A 2 e j2θ ] = E[A 2 ]E[e j2θ ],

     and the uniform distribution of θ implies E[e jθ ] = E[e j2θ ] = 0, so that Eq. (7.22) is satisfied.
     Notice that Lemma 7.1 requires that Ae jθ and Ae−jθ have zero mean for WSS property, but it is not
     necessary for A itself to have zero mean! Summarizing, x(n) = A cos(ω0 n + θ) is WSS whenever
     the real random variables A and θ are statistically independent and θ is uniformly distributed in
     [0, 2π]. It is easily verified that E[x(n)] = 0 and

                        R(k) = E[x(n)x(n − k)] = 0.5E[A 2 ]cos(ω0 k) = P cos(ω0 k),
                                                                            LINE SPECTRAL PROCESSES     97

where P = 0.5E[A 2 ]. So the power spectrum is
                                                                  !
                                P
                Sxx (e jω ) =     × 2π δa (ω − ω0 ) + δa (ω + ω0 ) , 0 ≤ ω < 2π.
                                2
The quantity P is the total power in the two line frequencies ±ω0 .
     Example 7.3: Sum of Sinusoids. Consider a real random process of the form
                                                
                                                N
                                       x(n) =         Ai cos(ωi n + θi ).                      (7.23)
                                                i=1

Here Ai and θi are real random variables and ωi are distinct positive constants. Suppose we make
the following statistical assumptions:

    1. Ai and θm are statistically independent for any i, m.
    2. θi and θm are statistically independent for i = m.
    3. θm is uniformly distributed in 0 ≤ θm < 2π for any m.

We can then show that x(n) is WSS. For this, we only have to rewrite x(n) in the complex form
Eq. (7.21) and verify that the conditions of Theorem 7.3 are satisfied (Problem 25). Notice that
no assumption has been made about the joint statistics of Ai and Am , for i = m. Under the above
conditions, it can be verified that E[x(n)] = 0. How about the autocorrelation? We have

                          R(k) = E[x(n)x(n − k)]
                               = E[x(0)x(−k)] (using WSS)
                                   N             
                                                  N
                               =E     Ai cos(θi )   Am cos(−kωm + θm ).
                                       i=1              m=1

Using the assumptions listed above, the cross terms for i = m reduce to

                            E[Ai Am ]E[cos(θi )]E[cos(−kωm + θm )] = 0.

When i = m, the terms reduce to Pi cos(ωi k) as in Ex. 7.2. Thus,
                                                               
                                                               N
                             R(k) = E[x(n)x(n − k)] =                 Pi cos(ωi k),
                                                                i=1

where Pi = 0.5E[Ai2 ] > 0. The power spectrum is therefore
                                
                                N                                    !
                     jω
               Sxx (e ) = π            Pi δa (ω − ωi ) + δa (ω + ωi ) ,         0 ≤ ω < 2π.
                                 i=1

The total power at the frequencies ωi and −ωi is given by 0.5Pi + 0.5Pi = Pi .
98    THE THEORY OF LINEAR PREDICTION
                                             1




                                     cos(ω 0 n)




                                                  0              n

                                           FIGURE 7.3: Plot of the cosine.



             Philosophical Discussions. A random process of the form Eq. (7.21), where there are only L
     random variables di , always appears to hold some conceptual mystery. If we measure the L random
     variables di by some means, then we know the entire waveform x(n). So the samples are fully
     predictable, as also seen from the difference equation Eq. (7.9). Furthermore, a plot of x(n) does
     not look ‘‘random.’’ For example, consider A cos(ω0 n + θ) discussed in Ex. 7.2. Here, the random
     variables A and θ do not depend on n, and the plot of x(n) as a function of n (Fig. 7.3) is just a nice
     and smooth cosine!
             So, where does the randomness manifest? Recall that a random process, by definition, is
     a collection (or ensemble) of waveforms (Papoulis, 1965; Peebles, 1987). Each waveform is an
     outcome of an experiment. For example, the result of an experiment determines the values of the
     random variables A and θ to be A0 and θ0 , and the outcome A0 cos(ω0 n + θ0 ) is fully determined
     for all n and is said to be a realization of the random process. It is for this reason that it is somewhat
     tricky to force ergodicity (Ex. 7.1); ergodicity says that time averages are equal to ensemble averages,
     but if a particular outcome (time function) of the random process does not exhibit ‘‘randomness’’
     along time, then the time average cannot tell us much about the ensemble averages indeed.

     7.5      PREDICTION POLYNOMIAL OF LINE SPECTRAL
              PROCESSES
     Let x(n) be Linespec(L) and let RL+1 be its autocorrelation matrix of size (L + 1) × (L + 1). In
     Section 7.2, we argued that there exists a unique vector v of the form

                                                  v = [ 1 v1 . . . vL ] T

     such that RL+1 v = 0. By comparison with the augmented normal equation Eq. (2.20), we see that
     if we take the coefficients of the Lth-order predictor to be

                                                       aL,i = vi ,
                                                                         LINE SPECTRAL PROCESSES            99
                                             f
then the optimal Lth-order prediction error EL becomes zero. The optimal predictor polynomial
for the process x(n) is therefore

                            AL (z) = 1 + v∗1 z−1 + . . . + v∗L z−L = V(z).

In Section 7.3.2, we saw that V(z) has all the L zeros on the unit circle, at the points e jωi , where ωi
are the line frequencies. We therefore conclude that the optimal Lth-order predictor polynomial
AL (z) of a Linespec(L) process has all L zeros on the unit circle. This also implies

                                              an = ca∗L−n

for some c with |c| = 1. For example, in the real case, an is symmetrical or antisymmetrical. In what
follows, we present two related results.

       Lemma 7.2. Let R(k) be the autocorrelation of a WSS process x(n), and let R(k) satisfy the
difference equation

                                                  
                                                  L
                                      R(k) = −          a∗i R(k − i).                             (7.24)
                                                  i=1

Furthermore, let there be no such equation of smaller degree satisfied by R(k). Then the process
                                                                    L
x(n) is line spectral with degree L and the polynomial AL (z) = 1 + i=1 a∗i z−i necessarily has all
the L zeros on the unit circle.                                                                 ♦
      Proof. By using the property R(k) = R*(−k), we can verify that Eq. (7.24) implies
                        ⎡                              ⎤⎡ ⎤
                           R(0)    R(1) . . . R(L)          1
                        ⎢                              ⎥⎢ ⎥
                        ⎢ R*(1) R(0) . . . R(L − 1) ⎥ ⎢ aL ⎥
                        ⎢ .                            ⎥ ⎢ . ⎥ = 0.
                        ⎢ .          ..    ..     ..   ⎥⎢ . ⎥
                        ⎣ .           .       .    .   ⎦⎣ . ⎦
                            R*(L) R*(L − 1) . . .       R(0)            aL
                                                                 
                                           RL+1


So RL+1 is singular. If RL were singular, we could proceed as in Section 7.2.1 to show that x(n)
satisfies a difference equation of the form Eq. (7.9) (but with lower-degree L − 1); from this, we
could derive an equation of the form Eq. (7.24) but with lower degree L − 1. Because this violates
the conditions of the lemma, we conclude that RL is nonsingular. Using Theorem 7.1, we therefore
conclude that the process x(n) is Linespec(L). It is clear from Section 7.3 that the polynomial
AL (z) is the characteristic polynomial V(z) of the process x(n) and therefore has all zeros on the
unit circle.                                                                                      
100     THE THEORY OF LINEAR PREDICTION
            We now present a related result directly in terms of the samples x(n) of random process.
      This is a somewhat surprising conclusion, although its proof is very simple in light of the above
      discussions. (For a more direct proof, see Problem 23.)
            Theorem 7.4. Let x(n) be a random process satisfying

                                                         
                                                         L
                                              x(n) = −         a∗i x(n − i).                           (7.25)
                                                         i=1


      Furthermore, let there be no such equation of smaller degree satisfied by x(n). If the process x(n) is
      WSS, then
                                               L
            1. The polynomial AL (z) = 1 + i=1 a∗i z−i has all the L zeros on the unit circle.
            2. x(n) is line spectral with degree L.                                                        ♦

      Thus, if a process satisfies the difference equation Eq. (7.25) (and if L is the smallest such number),
      then imposing the WSS property on x(n) immediately forces the zeros of AL (z) to be all on the
      unit circle!
             Proof. Suppose the process is WSS. If we multiply both sides of Eq. (7.25) by x*(n − k)
      and take expectations, this results in Eq. (7.24). If there existed an equation of the form Eq. (7.24)
      with L replaced by L − 1, we could prove then that RL is singular and proceed as in Section 7.2.1
      to derive an equation of the form Eq. (7.25) with L replaced by L − 1. Because this violates the
      conditions of the theorem, there is no smaller equation of the form Eq. (7.24). Applying Lemma
      7.2, the claim of the theorem immediately follows.                                                   


      7.6       SUMMARY OF PROPERTIES
      Before we proceed to line spectral processes buried in noise, we summarize, at the expense of being
      somewhat repetitive, the main properties of line spectral processes.

            1. Spectrum has only impulses. We say that a WSS random process is Linespec(L) if the power
               spectrum is made of L impulses, that is,

                                                   
                                                   L
                                         jω
                                   Sxx (e ) = 2π         ci δa (ω − ωi ),      0 ≤ ω < 2π,             (7.26)
                                                   i=1


               with ci > 0 for any i. Here, ωi are distinct and called the line frequencies and ci are the
               powers at these line frequencies. In this case, the process x(n) as well as its autocorrelation
                                                                       LINE SPECTRAL PROCESSES        101
   R(k) satisfy an Lth-order recursive, homogeneous, difference equation:

                                
                                L                                           
                                                                            L
                     x(n) = −          vi*x(n − i),       R(k) = −                vi*R(k − i).   (7.27)
                                 i=1                                        i=1

   So all the samples of the sequence x(n) can be predicted with zero error, if L successive
   samples are known. Similarly, all the autocorrelation coefficients R(k) of the process x(n)
   can be computed if R(k) is known for 0 ≤ k ≤ L − 1.
2. Characteristic polynomial. In the above, v*i are the coefficients of the polynomial

                                                          
                                                          L
                                        V(z) = 1 +              v*i z−i .                        (7.28)
                                                          i=1

   This is called the characteristic polynomial of the Linespec(L) process x(n). This polynomial
   has all its L zeros on the unit circle at z = e jωi .
3. Sum of sinusoids. The random process x(n) as well as the autocorrelation R(k) can be
   expressed as a sum of L single-frequency signals

                                       
                                       L                              
                                                                      L
                            x(n) =           die jωi n,   R(k) =             ci e jωi k ,        (7.29)
                                       i=1                             i=1

   where di are random variables (amplitudes at the line frequencies ωi ) and ci = E[|di |2 ]
   (powers at the line frequencies ωi ).
4. Autocorrelation matrix. A WSS process x(n) is Linespec(L) if and only if the autocorrelation
   matrix RL+1 is singular and RL nonsingular. So RL+1 has rank L. There is a unique vector
   v of the form
                                                          T
                                         v = 1 v1 . . . vL                              (7.30)

   satisfying RL+1 v = 0, and this vector uniquely determines the characteristic polynomial
   V(z). Furthermore, the rank has the saturation behavior sketched in Fig. 7.2.
                                                                         L
5. Sum of sinusoids, complex. A random process of the form x(n) = i=1 di e jωi n is WSS and,
   hence, line spectral, if and only if (a) E[di ] = 0 whenever ωi = 0 and (b) E[di dm* ] = 0 for
                                           L
   i = m. Under this condition, R(k) = i=1 E[|di |2]e jωi k (Theorem 7.3).
                                                             N
6. Sum of sinusoids, real. Consider the process x(n) = i=1 Ai cos(ωin + θi ), where Ai and
   θi are real random variables and ωi are distinct positive constants. This is WSS, hence,
   line spectral, under the conditions stated in Ex. 7.3. The autocorrelation is then R(k) =
   N
       i=1 Pi cos(ωi k), where Pi = 0.5E[A i ] is the total power in the line frequencies ±ωi .
                                            2
102     THE THEORY OF LINEAR PREDICTION
            7. Identifying the parameters. Given the set of autocorrelation coefficients R(k), 0 ≤ k ≤ L of
               the Linespec(L) process x(n), we can determine vi in Eq. (7.28) from the eigenvector v
               of RL+1 corresponding to zero eigenvalue. The line frequencies ωi can then be determined
               because e jωi are the zeros of the characteristic polynomial V(z). Once the line frequencies
               are known, the constants ci are determined as described in Section 7.3.4.
            8. Periodicity. If a WSS process x(n) is such that R(0) = R(M) for some M > 0, then x(n) is
               periodic with period M, and so is R(k) (Theorem 7.2). So the process is line spectral.
            9. Prediction polynomial. If we perform optimal linear prediction on a Linespec(L) process,
               we will find that the Lth-order prediction polynomial AL (z) is equal to the characteristic
               polynomial V(z) and therefore has all its zeros on the unit circle. The prediction error
                 f
               EL = 0.



      7.7       IDENTIFYING A LINE SPECTRAL PROCESS IN NOISE
      Identification of sinusoids in noise is an important problem in signal processing. It is also related
      to the problem of finding the direction of arrival of a propagating wave using an array of sensors.
      An excellent treatment can be found in Therrien (1992). We will be content with giving a brief
      introduction to this problem here. Consider a random process


                                              y(n) = x(n) + e(n),                                   (7.31)


      where x(n) is Linespec(L) (i.e., a line spectral process with degree L). Let e(n) be zero-mean white
      noise with variance σe2 , that is,


                                           E[e(n)e*(n − k)] = σe2 δ(k).


      We thus have a line spectral process buried in noise (popularly referred to as sinusoids buried in
      noise). The power spectrum of x(n) has line frequencies (impulses), whereas that of e(n) is flat,
      with value σe2 for all frequencies. The total power spectrum is demonstrated in Fig. 7.4. Notice that
      some of the line frequencies could be very closely spaced, and some could be buried beneath the
      noise level.
             Assume that x(n) and e(m) are uncorrelated, that is,


                                      E[x(n)e*(m)] = 0,        for any n, m.
                                                                                    LINE SPECTRAL PROCESSES         103
                                 2 π c1


                        jω
               Sxx (e        )                                                            noise variance σ 2
                                                                                                          e
                                                  2π c4
                                                              …
                                                                                      ω
                                 ω1       ω2       ω4                      ω L 2π
                             0

            FIGURE 7.4: A Linespec(L) process with additive white noise of variance σe2 .



Let r(k) and R(k) denote the autocorrelation sequences of y(n) and x(n), respectively. Using this
and the whiteness of e(n), we get

                                      r(k) = E[y(n)y*(n − k)]
                                           = E[x(n)x*(n − k)] + E[e(n)e*(n − k)]
                                           = R(k) + σe2 δ(k),

which yields
                                                   r(k) = R(k) + σe2 δ(k)                                      (7.32)

Note, in particular, that r(k) = R(k), k = 0. Thus, the m × m autocorrelation matrix rm of the
process y(n) is given by
                                                      rm = Rm + σe2 Im ,                                       (7.33)

where Rm is the m × m autocorrelation matrix of x(n). We say that Rm is the signal autocorrelation
matrix and rm is the signal-plus-noise autocorrelation matrix.

7.7.1 Eigenstructure of the Autocorrelation Matrix
Let ηi be an eigenvalue of Rm with eigenvector ui , so that

                                                          Rm ui = ηiui .

Then
                                               [Rm + σe2 Im ] ui = [ηi + σe2 ]ui.
                                                           
                                                     rm

Thus, the eigenvalues of rm are
                                                          λi = ηi + σe2 .

The corresponding eigenvectors of rm are the same as those of Rm .
104      THE THEORY OF LINEAR PREDICTION
                                       R(0)
                    λ     (R m )                                                         (a)
                        min


                                                                              m (size)
                                   0   1   2                     L L+1

                                       R(0) + σe2


                     λ      (r )                                                         (b)
                         min m

                                                                                noise variance σ 2
                                                                                                e
                                                                              m (size)
                                   0   1   2                     L L+1

      FIGURE 7.5: (a) The decreasing minimum-eigenvalue of the autocorrelation matrix Rm as the size m
      increases and (b) corresponding behavior of the minimum eigenvalue of rm .



             The Minimum Eigenvalue. Because x(n) is Linespec(L), its autocorrelation matrix Rm
      is nonsingular for 1 ≤ m ≤ L and singular for m = L + 1 (Theorem 7.1). Thus, the smallest
      eigenvalue of Rm is positive for m ≤ L and equals zero for m > L. It is easily shown (Problem
      12) that the smallest eigenvalue λmin (Rm ) of the matrix Rm cannot increase with m. So it behaves
      in a monotone manner as depicted in Fig. 7.5(a).
             Accordingly, the smallest eigenvalue of rm behaves as in Fig. 7.5(b). In particular, for m > L
      it attains a constant value equal to σe2 . We can use this as a means of identifying the number of
      line frequencies L in the process x(n), as well as the variance σe2 of the noise e(n). (This could be
      misleading in some cases, as we cannot keep measuring the eigenvalue for an unlimited number of
      values of m; see Problem 29.)
             Eigenvector corresponding to the smallest eigenvalue. Let v be the eigenvector of rL+1
      corresponding to the smallest eigenvalue σe2 . So

                                                        rL+1 v = σe2 v.                              (7.34)

      In view of Eq. (7.33) this implies

                                                    RL+1 v + σe2 v = σe2 v,

      that is,

                                                         RL+1 v = 0.
                                                                          LINE SPECTRAL PROCESSES     105
Thus, v is also the eigenvector that annihilates RL+1 . The eigenvector corresponding to the
minimum eigenvalue of rL+1 can be computed using any standard method, such as, for example,
the power method (Golub and Van Loan, 1989). Once we identify the vector v, then we can find
the characteristic polynomial V(z) (Eq. (7.28)). Its roots are guaranteed to be on the unit circle
(i.e., have the form e jωi ), revealing the line frequencies. The smallest eigenvalue of rL+1 gives the
noise variance σe2 .                                                                                  

7.7.2 Computing the Powers at the Line Frequencies
The autocorrelation R(k) of the process x(n) has the form (7.3), where ci are the powers at the line
frequencies ωi . Because we already know ωi , we can compute ci by solving linear equations (as in
Eq. (7.16)), if we know enough samples of R(k). For this note that R(k) is related to the given
autocorrelation r(k) as in Eq. (7.32). So we know all the samples of R(k) (because σe2 has been
identified as described above).
       What if we do not know the noise variance? Even if the noise variance σe2 and, hence,
R(0) are not known, we can compute the line powers as follows. From Eq. (7.32) we have
R(k) = r (k), k = 0. So we know the values of R(1), . . . , R(L). We can write a set of L linear
equations
                           ⎡                           ⎤⎡ ⎤ ⎡            ⎤
                              e jω1 e jω2 . . . e jωL      c1       R(1)
                           ⎢ j2ω1 j2ω2                 ⎥⎢ ⎥ ⎢            ⎥
                           ⎢e       e     . . . e j2ωL ⎥ ⎢ c2 ⎥ ⎢ R(2) ⎥
                           ⎢ .                     . ⎥⎢ . ⎥ ⎢ . ⎥
                                                       ⎥ ⎢    ⎥ = ⎢                          (7.35)
                           ⎢ .        .. . .
                                             . .. ⎦ ⎣ .. ⎦ ⎣ .. ⎦
                                                                         ⎥
                           ⎣ .         .
                              e jLω1 e jLω2 . . . e jLωL     cL           R(L)

The L × L matrix above is Vandermonde and nonsingular because the line frequencies ωi are
distinct (Horn and Johnson, 1985). So we can solve for the line powers ci uniquely.    
      The technique described in this section to estimate the parameters of a line spectral process
is commonly referred to as Pisarenko’s harmonic decomposition. Notice that the line frequencies need
not be harmonically related for the method to work (i.e., ωk need not be integer multiplies of a
fundamental ω0 ).
      Case of Real Processes. The case where x(n) is a real line spectral process is of considerable
importance. From Ex. 7.3 recall that a process of the form

                                               
                                               N
                                     x(n) =          Ai cos(ωi n + θi )
                                               i=1

is WSS and hence, harmonic, under some conditions. If x(n) in Eq. (7.31) has this form, then the
above discussions continue to hold. We can identify the eigenvector v of rL+1 corresponding to
106     THE THEORY OF LINEAR PREDICTION
      its minimum eigenvalue (Eq. (7.34)) and, hence, the corresponding line frequencies as described
      previously. In this case, it is more convenient to write R(k) in the form

                                                    
                                                    N
                                           R(k) =         Pi cos(ωi k),
                                                    i=1

      where Pi > 0 is the total power at the frequencies ±ωi . Because R(k) is known for 1 ≤ k ≤ N, we
      can identify Pi by writing linear equations, as we did for the complex case.
            Example 7.4: Estimation of sinusoids in noise. Consider the sum of sinusoids

                         x(n) = 0.3 sin(0.1π n) + 1.6 sin(0.5π n) + 2.1 sin(0.9π n),                (7.36)

      and assume that we have noisy samples

                                             y(n) = x(n) + e(n),

      where e(n) is zero-mean white noise with variance σe2 = 0.1. We assume that 100 samples of y(n)
      are available. The signal component x(n) and the noise component e(n) generated using the Matlab
      command randn are shown in Fig. 7.6. The noisy data y(n) can be regarded as a process with a line
      spectrum (six lines because each sinusoid has two lines), buried in a background noise spectrum
      (as in Fig. 7.4). We need the 7 × 7 autocorrelation matrix R7 of the process y(n), to estimate the
      lines. So, from the noisy data y(n), we estimate the autocorrelation R(k) for 0 ≤ k ≤ 6 using the
      autocorrelation method described in Section 2.5. This estimates the top row of R7 :
                                                                                          
                     3.6917 −2.0986 0.5995 −1.4002 2.1572 −0.1149 −1.8904

      From these coefficients, we form the 7 × 7 Toeplitz matrix R7 and compute its smallest eigenvalue
      and the corresponding eigenvector
                                                                                          T
                v = 0.6065      0.0083   −0.3619 0.0461 −0.3619 0.0083 0.6065                   .

      With the elements of v regarded as the coefficients of the polynomial V(z), we now compute the
      zeros of V(z) and obtain

                         0.0068 ± 0.9999j, 0.9414 ± 0.3373j, −0.9550 ± 0.2965j.

      From the angles of these zeros, we identify the six line frequencies ±ω1 , ±ω2 , and ±ω3 . The three
      sinusoidal frequencies ω1 , ω2 , and ω3 are estimated to be

                                     0.1029π, 0.4985π, and 0.9034π,
                                                                        LINE SPECTRAL PROCESSES      107



                                       4


                                       2
                   signal amplitude




                                       0


                                      -2


                                      -4


                                           0                                     99
                                                             n



                                       4


                                       2
                   noise amplitude




                                       0


                                      -2


                                      -4


                                           0                                     99
                                                             n

FIGURE 7.6: Example 7.4. Estimation of sinusoids in noise. The plots show the signal and the noise
components used in the example.

which are quite close to the correct values given in Eq. (7.36), namely, 0.1π , 0.5π , and 0.9π . With
ωk thus estimated and R(k) already estimated, we can use (7.35) to estimate ck and finally obtain
the amplitudes of the sinusoids (positive square roots of ck in this example). The result is
                                               0.3058, 1.6258, and 2.1120,
108     THE THEORY OF LINEAR PREDICTION
      which should be compared with 0.3, 1.6, and 2.1 in Eq. (7.36). Owing to the randomness of noise,
      these estimates vary from experiment to experiment. The preceding numbers represent averages
      over several repetitions of this experiment, so that the reader sees an averaged estimate.
             Large number of measurements. In the preceding example, we had 100 noisy measurements
      available. If this is increased to a large number such as 5000, then the accuracy of the estimate
      improves. The result (again averaged over several experiments) is

                                      0.1001π, 0.5000π, and 0.9001π

      for the line frequencies and

                                        0.2977, 1.5948, and 2.1019

      for the line amplitudes. If the noise is large, the estimates will obviously be inaccurate, but this
      effect can be combated if there is a large record of available measurements. Thus, consider the above
      example with noise variance increased to unity. Fig. 7.7 shows the signal and noise components
      for the first few samples---the noise is very significant indeed. With 10,000 measured samples y(n)
      used in the estimation process (an unrealistically large number), we obtain the estimate

                                        0.1005π, 0.4999π, 0.9000π,

      for the line frequencies and

                                        0.3301, 1.6140, and 2.1037

      for the line amplitudes. Considering how large the noise is, this estimate is quite good indeed.
      Figure 7.8 shows even larger noise, almost comparable with the signal (noise variance σe2 = 2).
      With 10,000 measured samples y(n) used in the estimation process , we obtain the estimate

                                       0.1030π, 0.5039π and 0.9010π

      for the line frequencies and

                                        0.2808, 1.6162, and 2.0725

      for the line amplitudes.                                                                            
             In this section, we have demonstrated that sinusoids buried in additive noise can be identified
      effectively from the zeros of an eigenvector of the estimated autocorrelation. The method outlined
      above reveals the fundamental principles as advanced originally by Pisarenko (1973). Since then,
      many improved methods have been proposed, which can obtain more accurate estimates from a small
                                                               LINE SPECTRAL PROCESSES           109


                                     4


                                     2
                 signal amplitude




                                     0


                                    -2


                                    -4

                                         0                                  200
                                                  n


                                     4


                                     2
                 noise amplitude




                                     0


                                    -2


                                    -4

                                         0                                  200
                                                  n

FIGURE 7.7: Example 7.4. Estimation of sinusoids in large noise. The plots show the signal and the
noise components used in the example.



number of noisy measurements. Notable among these are minimum-norm methods (Kumaresan and
Tufts, 1983), MUSIC (Schmidt, 1979, 1986), and ESPRIT (Paulraj et al., 1986; Roy and Kailath,
1989). These methods can also be applied to the estimation of direction of arrival information in
110     THE THEORY OF LINEAR PREDICTION


                                            4



                        signal amplitude    2


                                            0


                                           -2


                                           -4

                                                0                                   200
                                                         n


                                            4


                                            2
                        noise amplitude




                                            0


                                           -2


                                           -4

                                                0                                   200
                                                         n

      FIGURE 7.8: Example 7.4. Estimation of sinusoids in very large noise. The plots show the signal and
      the noise components used in the example.



      array processing applications (Van Trees, 2002). In fact, many of these ideas originated in the array
      processing literature (Schmidt, 1979). A review of these methods can be found in the very readable
      account given by Therrien (1992).
                                                                   LINE SPECTRAL PROCESSES             111

7.8      LINE SPECTRUM PAIRS
In Section 5.6, we discussed the application of linear prediction theory in signal compression. We
explained the usefulness of the lattice coefficients {km } in the process. Although the quantization
and transmission of lattice coefficients {km } guarantees that the reconstruction filter 1/AN (z)
remains stable, the coefficients km are difficult to interpret from a perceptual viewpoint. If we knew
the relative importance of various coefficients km in preserving perceptual quality, we could assign
them bits according to that. But this has not been found to be possible.
        In speech coding practice, one uses an important variation of the prediction coefficients called
line-spectrum pairs (LSP). The motivation comes from the fact that the connection between LSP
and perceptual properties is better understood (Itakura, 1975; Soong and Juang, 1984, 1993; Kang
and Fransen, 1995). The set of LSP coefficients not only guarantees stability of the reconstruction
filter under quantization, but, in addition, a better perceptual interpretation in the frequency domain
is obtained. To define the LSP coefficients, we construct two new polynomials

                                    P(z) = AN (z) + z−(N+1) AN (z),

                                    Q(z) = AN (z) − z−(N+1) AN (z).                             (7.37)

Notice that these can be regarded as the polynomial AN+1 (z) in Levinson’s recursion for the cases
kN+1 = 1 and kN+1 = −1, respectively. Equivalently, they are the transfer functions of the FIR
lattice shown in Fig. 7.9.
        Let us examine the zeros of these polynomials. The zeros of P(z) and Q(z) are solutions of
the equations
                                           
                                   
                                   A   ( z)
                         z−(N+1)              = −1 = e j(2m+1)π [for P(z)]
                                     N
                                   AN (z)
                                           
                                   
                           −(N+1) AN (z)
                         z                    = 1 = e j2mπ [for Q(z)].
                                   AN (z)


        x(n)          A0 (z)                A1 (z)                      AN (z)           P(z)


                               k1                    …   kN
                      B0 (z)                B1 (z)                      BN (z)           Q(z)
               z −1                  z −1                        z −1
                                                                                 −1

FIGURE 7.9: Interpretation of the LSP polynomials P(z) and Q(z) in terms of the FIR LPC lattice.
112     THE THEORY OF LINEAR PREDICTION
      Because the left-hand side is all-pass of order N + 1 with all zeros in |z| < 1, it satisfies the
      modulus property
                                                       ⎧
                                    $                $ < 1 for|z| > 1
                                    $ z−(N+1) A (z) $ ⎪
                                                       ⎨
                                    $           N    $
                                    $                $ > 1 for|z| < 1
                                    $     AN (z)     $⎪⎩ = 1 for|z| = 1

      See Vaidyanathan (1993, p. 75) for a proof. Thus, the solutions of the preceding equations are
      necessarily on the unit circle. That is, all the N + 1 zeros of P(z) and similarly those of Q(z) are
      on the unit circle.
            Alternation Property. In fact, we can say something deeper. It is well known (Vaidyanathan,
      1993, p. 76) that the phase response φ(ω) of the stable all-pass filter

                                                     z−(N+1)AN (z)
                                                        AN (z)


                                                 ω1 θ ω2                     2π
                                                     1
                                                                                           ω
                                         −π
                                        −2π
                          φ(ω)
                                        −3π
            (a)

                                −2π (Ν +1)




                  unit circle                                            unit circle
                                          θ1                                                   θ1
                                               ω1                                                   ω1
                                                          z-plane
                                                θ0                                                   θ0
                                    0                                                  0
                                                         zeros of P(z)
                                               ω5                                                   ω6
                                                         zeros of Q(z)
            (b)                           θ4                                                   θ5

                      N = 4, P(−1) = 0, Q(−1) = 0                         N = 5, P(−1) = 0, Q(−1) = 0

      FIGURE 7.10: Development of LSPs. (a) Monotone phase response of z−(N+1) AN (z)/AN (z) and (b)
      zeros of P(z) and Q(z) for the cases N = 4 and N = 5.
                                                                  LINE SPECTRAL PROCESSES            113


                                                                  ω2
                       ω2       θ1           z-plane                       θ1
                                                          θ2
               θ2                      ω1                ω3                       ω1

                            0                                          0
              unit                                       unit
              circle                                     circle



                LSP coefficients for N = 4                 LSP coefficients for N = 5

FIGURE 7.11: Examples of LSP coefficients for N = 4 and N = 5. The unit-circle coefficients in the
lower half are redundant and therefore dropped.



is a monotone decreasing function, spanning a total range of 2(N + 1)π (Fig. 7.10(a)). Thus, the
N + 1 zeros of P(z) and Q(z) alternate with each other as demonstrated in Fig. 7.10(b) for N = 4
and N = 5. The angles of these zeros are denoted as ωi and θi .
       Because AN(z) has real coefficients in speech applications, the zeros come in complex
conjugate pairs. Note that P(−1) = 0 for even N and Q(−1) = 0 for odd N. Moreover,
Q(1) = 0 and P(1) = 0 regardless of N. These follow from the fact that AN (±1) = AN (±1).
Thus, if we know the zeros of P(z) and Q(z) in the upper half of the unit circle (and excluding
z = ±1), we can fully determine these polynomials (their constant coefficients being unity by the
definition (7.37)). There are N such zeros (ωk and θk ), as demonstrated in Fig. 7.11 for N = 4
and N = 5. These are called line spectrum pairs (LSP) associated with the predictor polynomial AN (z).
For example, the LSP parameters for N = 4 are the four ordered frequencies

                                        ω1 < θ1 < ω2 < θ2                                      (7.38)

and the LSP parameters for N = 5 are the five ordered frequencies

                                     ω1 < θ1 < ω2 < θ2 < ω3 .                                  (7.39)

      Properties and Advantages of LSPs. Given the N coefficients of the polynomial AN (z),
the N LSP parameters can be uniquely identified by finding the zeros of P(z) and Q(z). These
parameters are quantized, making sure that the ordering (e.g., Eq. (7.39)) is preserved in the
process. The quantized coefficients are then transmitted. Because P(z) and Q(z) can be computed
114     THE THEORY OF LINEAR PREDICTION
      uniquely from the LSP parameters, approximations of these polynomial can be computed at the
      receiver. From these, we can identify an approximation of AN(z) because

                                            AN (z) = (P(z) + Q(z))/2.

      The speech segment can then be reconstructed from the stable filter 1/AN (z) as described in
      Section 5.6. Several features of the LSP coding scheme are worth noting.

          1. Stability preserved . As long as the ordering (e.g., Eq. (7.39)) is preserved in the quantization,
             the reconstructed version of AN (z) is guaranteed to have all zeros in |z| < 1. Thus, stability
             of 1/AN (z) is preserved despite quantization as in the case of lattice coefficient quantization.
          2. Perceptual spectral interpretation. Unlike the lattice coefficients, the LSP coefficients are
             perceptually better understood. To explain this, recall first that for sufficiently large N, the
             AR(N) model gives a good approximation of the speech power spectrum Sxx (e jω ). This
             approximation is especially good near the peak frequencies, called the formants of speech.
             Now, the peak locations correspond approximately to the pole angles of the filter 1/AN (z).
             Near these locations, the phase response tends to change rapidly. The same is true of the
             phase response φ(ω) of the all-pass filter, as shown in Fig. 7.12(b). The LSP coefficients,
             which are intersections of the horizontal lines (multiples of π ) with the plot of φ(ω),
             therefore tend to get crowded near the formant frequencies. Thus, the crucial features of
             the power spectrum tend to get coded into the density-information of the LSP coefficients
             at various points on the unit circle. This information allows us to perform bit allocation
             among the LSP coefficients (quantize the crowded LSP coefficients with greater accuracy).
             For a given bit rate, this results in perceptually better speech quality, as compared with
             the quantization of lattice coefficients. Equivalently, for a given perceptual quality, we can
             reduce the bit rate; in early work, an approximately 25% saving has been reported using
             this idea, and more savings have been obtained in a series of other papers. Furthermore, as
             the bit rate is reduced, the speech degradation is found to be more gradual compared with
             lattice coefficient quantization.
          3. Acoustical tube models. It has been shown in speech literature that the lattice structure is
             related to an acoustical tube model of the vocal tract (Markel and Gray, 1976). This is
             the origin of the term reflection coefficients. The values kN+1 = ±1 in Fig. 7.9 indicate, for
             example, situations where one end of the tube is open or closed. Thus, the LSP frequencies
             are related to the open- and close-ended acoustic tube models.
          4. Connection to circuit theory. In the theory of passive electrical circuits, the concept of reactances
             is well-known (Balabanian and Bickart, 1969). Reactances are input impedances of electrical
             LC networks. It turns out that reactances have a pole-zero alternation property similar to the
                                                                  LINE SPECTRAL PROCESSES            115

                                                        formant



                          Power
                          spectrum


                 (a)
                                                                                 ω
                                                                         2π



                                                                         2π
                                                                                 ω
                                 −π
                       phase of −2π
                       allpass  −3π
                       filter
                                −4π
                                −5π
                 (b)



FIGURE 7.12: Explanation of how the LSP coefficients tend to get crowded near the formant regions
of the speech spectrum. (a) A toy power spectrum with one formant and (b) the phase response of the
all-pass filter z−(N+1)AN (z)/AN (z), where AN (z) is the prediction polynomial (see text).



       alternation of the zeros of the LSP polynomials P(z) and Q(z). In fact, the ratio P(z)/Q(z)
       is nothing but a discrete time version of the reactance function.

7.9     CONCLUDING REMARKS
In this chapter, we presented a rather detailed study of line spectral processes. The theory finds
applications in the identification of sinusoids buried in noise. A variation of this problem is
immediately applicable in array signal processing where one seeks to identify the direction of arrival
of a signal using an antenna array (Van Trees, 2002). Further applications of the concepts in signal
compression, using LSPs, was briefly reviewed.

                                            •   •   •     •
                                                                                                 117




                                      CHAPTER 8

      Linear Prediction Theory for Vector
                   Processes

8.1        INTRODUCTION
In this chapter, we consider the linear prediction problem for vector WSS processes. Let x(n)
denote the L × 1 vector sequence representing a zero-mean WSS process. Thus, E[x(n)] = 0 and
the autocorrelation is

                                      R(k) = E[x(n)x† (n-k)],                                (8.1)

where x† (n) represents transpose conjugation, as usual. Note that R(k) is independent of n (owing
to WSS property) and depends only on k. The autocorrelation is a matrix sequence with each
element R(k) representing an L × L matrix. Furthermore, it is readily shown from the definition
(8.1) that

                                          R† (−k) = R(k).                                    (8.2)

For a vector WSS process characterized by autocorrelation R(k), we now formulate the linear
prediction problem. Most of the developments will be along lines similar to the scalar case. But
there are some differences between the scalar and vector cases that need to be emphasized. A short
and sweet introduction to this topic was given in Section 9.6 of Anderson and Moore (1979). We
shall go into considerably greater details in this chapter.

8.2        FORMULATION OF THE VECTOR LPC PROBLEM
The forward predictor of order N predicts the sample x(n) from a linear combination of past N
samples:

                    x(n) = −a†N,1 x(n − 1) − a†N,2 x(n − 2) . . . − a†N,N x(n-N).           (8.3)

The forward prediction error is therefore

                      x(n) = x(n) + a†N,1 x(n − 1) + a†N,2 x(n − 2) . . . + a†N,N x(n − N)
       f
      eN (n) = x(n) −                                                                       (8.4)
118     THE THEORY OF LINEAR PREDICTION
      and the forward prediction polynomial is

                             AN (z) = IL + a†N,1 z−1 + a†N,2 z−2 + . . . + a†N,Nz−N .                 (8.5)

      The optimal predictor has the L × L matrix coefficients aN,k chosen such that the total mean square
      error in all components is minimized, that is,
                                               f Δ         f       f
                                             EN = E[(eN (n))†eN (n)]                                  (8.6)

      is minimized. This quantity is also equal to the trace (i.e., sum of diagonal elements) of the forward
      prediction error covariance matrix
                                               f       f       f
                                             EN = E[eN (n)(eN (n))† ].                                (8.7)

      Note that this is an L × L matrix. The goal therefore is to minimize
                                                     f Δ       f
                                                   EN = Tr(EN )                                       (8.8)

      by choosing aN,k appropriately. The theory of optimal predictors for the vector case is again based
      on the orthogonality principle:
             Theorem 8.1. Orthogonality principle (vector processes). The Nth-order forward linear predictor
                                                                           f
      for a WSS vector process x(n) is optimal if and only if the error eN (n) at any time n is orthogonal
      to the N past observations x(n − 1), . . . , x(n − N ), that is,
                                         f
                                    E[eN (n)x† (n − k)] = 0,       1 ≤ k ≤ N,                         (8.9)

      where the right-hand side 0 represents the L × L zero-matrix (with L denoting the size of the
      column vectors x(n)).                                                                      ♦
            Proof. Let x⊥ (n) be the predicted value for which the error e⊥ (n) satisfies the orthogonality
      condition (8.9), and let 
                               x(n) be another predicted value with error e(n) (superscript f and subscript
      N deleted for simplicity). Now,

                            e(n) = x(n) − x(n) = x(n) − 
                                                         x⊥ (n) + x⊥ (n) − x(n),

      so that

                                        e(n) = e⊥ (n) + 
                                                        x⊥ (n) − 
                                                                 x(n).                               (8.10)

      Now, the estimates 
                         x⊥ (n) and x(n) are, by construction, linear combinations of x(n − k), 1 ≤ k ≤
      N. Because the error e⊥ (n), by definition, is orthogonal to these past samples, it follows that

                     E[e(n)e† (n)] = E[e⊥ (n)e†⊥ (n)] +E[(
                                                          x⊥ (n) − x(n))(        x(n))† ]
                                                                          x⊥ (n) −                  (8.11)
                                                   
                      call this E      call this E⊥
                                         LINEAR PREDICTION THEORY FOR VECTOR PROCESSES                               119
Because the second term on the right-hand side is a covariance, it is positive semidefinite. The
preceding therefore shows that

                                                   E − E⊥ ≥ 0                                                 (8.12)

where the notation A ≥ 0 means that the Hermitian matrix A is positive semidefinite. Taking trace
on both sides, we therefore obtain

                                                     E ≥ E⊥ .                                                 (8.13)

When does equality arise? Observe first that E − E⊥ = Tr(E − E⊥ ). Because E − E⊥ has been
shown to be positive semidefinite, its trace is zero only when1 E − E⊥ = 0. From (8.11), we see
that this is equivalent to the condition

                                     x⊥ (n) − 
                                  E[(                       x(n))† ] = 0,
                                                    x⊥ (n) − 
                                              x(n))(

which, in turn, is equivalent to 
                                 x⊥ (n) − 
                                          x(n) = 0. This proves that equality is possible if and only
if 
   x(n) = 
          x⊥ (n).                                                                                  
                                                                          f
      Optimal Error Covariance. The error covariance EN for the optimal predictor can be
expressed in an elegant way using the orthogonality conditions:
                 f      f     f             f               †      f
                EN = E[eN(n)(eN (n))†] = E[eN (n) x(n) − 
                                                         x(n) ] = E[eN(n)x† (n)].

The third equality follows by observing that the optimal x(n) is a linear combination of samples
                                   f
x(n − k), which are orthogonal to eN(n). Using Eq. (8.4), this can be rewritten as
              f    )          †                  †                    †
                                                                                     *
             EN = E x(n) + aN,1 x(n − 1) + aN,2 x(n − 2) . . . + aN,N x(n − N) x† (n)
                = R(0) + a†N,1 R† (1) + a†N,2 R† (2) + . . . + a†N,NR† (N)
                                     f
Because the error covariance EN is Hermitian anyway, we can rewrite this as
                           f
                         EN = R(0) + R(1)aN,1 + R(2)aN,2 + . . . + R(N)aN,N.                                  (8.14)

We shall find this useful when we write the augmented normal equations for optimal linear
prediction.


1
 The trace of a matrix A is the sum of its eigenvalues. When A is positive semidefinite, all eigenvalues are
nonnegative. So, zero-trace implies all eigenvalues are zero. This implies that the matrix itself is zero (because any
positive semidefinite matrix can be written as A = UΛU† , where Λ is the diagonal matrix of eigenvalues and U is
unitary).
120   THE THEORY OF LINEAR PREDICTION

  8.3     NORMAL EQUATIONS: VECTOR CASE
  Substituting the expression (8.4) for the prediction error into the orthogonality condition (8.9), we
  get N matrix equations. By using the definition of autocorrelation given in Eq. (8.1), we find these
  equations to be

                   R(k ) + a†N,1 R(k − 1) + a†N,2 R(k − 2) + . . . + a†N,NR(k − N ) = 0,         (8.15)

  for 1 ≤ k ≤ N. Here the 0 on the right is an L × L matrix of zeros. Solving these equations, we
  can obtain the N optimal predictor coefficient matrices aN,k . For convenience, we shall rewrite the
  equations in the form

                   R† (k − 1)aN,1 + R† (k − 2)aN,2 + . . . + R† (k − N )aN,N = −R† (k)           (8.16)
                                               †
  for 1 ≤ k ≤ N. By using the fact that R (−k) = R(k), these equations can be written in the
  following elegant form:
               ⎡                                            ⎤⎡        ⎤  ⎡       ⎤
                      R(0)         R(1)      . . . R(N − 1)     aN ,1      R(−1)
               ⎢                                            ⎥⎢        ⎥  ⎢       ⎥
               ⎢     R(−1)         R(0)      . . . R(N − 2) ⎥ ⎢ aN,2 ⎥   ⎢ R(−2) ⎥
               ⎢                                            ⎥ ⎢       ⎥  ⎢       ⎥.
               ⎢       ..           ..       ..       ..    ⎥ ⎢ .. ⎥ = − ⎢   ..  ⎥               (8.17)
               ⎣        .            .          .      .    ⎦⎣ . ⎦       ⎣    .  ⎦
                   R(−N + 1) R(−N + 2) . . .       R(0)        aN ,N          R(−N )

  These represent the normal equations for the vector LPC problem. Note that these equations reduce
  to the normal equations for scalar processes given in Eq. (2.8) (remembering R† (−k) = R(k)). If
  we move the vector on the right to the left-hand side and then prefix Eq. (8.14) at the top, we get
  the following augmented normal equations for the optimal vector LPC problem:
                      ⎡                                      ⎤⎡       ⎤ ⎡ f⎤
                         R(0)        R(1)     . . . R(N )         IL     EN
                      ⎢                                      ⎥⎢       ⎥ ⎢ ⎥
                      ⎢ R(−1)        R(0)     . . . R(N − 1) ⎥ ⎢ aN,1 ⎥ ⎢ 0 ⎥
                      ⎢                                      ⎥⎢ . ⎥ = ⎢ . ⎥.                     (8.18)
                      ⎢   ..          ..      ..       ..    ⎥⎢ . ⎥ ⎢ . ⎥
                      ⎣    .           .         .      .    ⎦⎣ . ⎦ ⎣ . ⎦
                          R(−N ) R(−N + 1) . . .    R(0)         aN,N          0

  We will soon return to this equation and solve it. But first, we have to introduce the idea of
  backward prediction.


  8.4     BACKWARD PREDICTION
  The formulation of the backward predictor problem for the vector case allows us to derive a
  recursion similar to Levinson’s recursion in the scalar case (Chapter 3). This also results in elegant
                                    LINEAR PREDICTION THEORY FOR VECTOR PROCESSES                 121
lattice structures. The Nth-order backward linear predictor predicts the L × 1 vector x(n − N − 1)
as follows:

               x(n − N − 1) = −b†N,1 x(n − 1) − b†N,2 x(n − 2) − . . . − b†N,N x(n − N ),

where bN,k are L × L matrices. The backward prediction error is

                                 ebN (n) = x(n − N − 1) − 
                                                          x(n − N − 1),

so that

                                        †                †                        †
          ebN (n) = x(n − N − 1) + bN,1 x(n − 1) + bN,2 x(n − 2) + . . . + bN,N x(n − N ).

So the backward prediction polynomial takes the form

                       BN (z) = b†N,1 z−1 + b†N,2 z−2 . . . + b†N,N z −N + z−(N+1) I.        (8.19)

The optimal coefficients bN,k are again found by imposing the orthogonality condition (8.9),
namely,

                                  E[ebN (n)x† (n − k)] = 0,   1≤k≤N

This results in the N equations

           †                 †                     †
          bN,1 R(k − 1) + bN,2 R(k − 2) + . . . bN,N R(k − N ) + R(k − N − 1) = 0            (8.20)

for 1 ≤ k ≤ N. The error covariance for the optimal backward predictor is
                                                                                        †
                EbN = E[ebN (n)(ebN(n))†] = E[ebN (n) (x(n − N − 1) − x(n − N − 1)) ]
                    = E[ebN (n)(x† (n − N − 1)].

The third equality follows by observing that the optimal 
                                                         x(n − N − 1) is a linear combination of
                                                    b
samples x(n − k) that are orthogonal to eN (n). So EN can be rewritten as
                                         b

                "                                                      #              
       EbN = E x(n − N − 1) + b†N,1 x(n − 1) + . . . + b†N,N x(n − N) x† (n − N − 1)

                                            b                       †
Using Eq. (8.1) and the facts that EN is Hermitian and R (−k) = R(k), this can further be
rewritten as

                           EbN = R(−N)bN,1 + . . . + R(−1)bN,N + R(0).                       (8.21)
122     THE THEORY OF LINEAR PREDICTION
  Combining this with the N equations in Eq. (8.20) and rearranging slightly, we obtain the following
  augmented normal equations for the backward vector predictor:
                           ⎡                                  ⎤⎡       ⎤ ⎡ ⎤
                              R(0)         R(1). . . R(N)        bN ,1     0
                           ⎢                                  ⎥⎢       ⎥ ⎢ ⎥
                           ⎢ (−1)
                             R             R(0). . . R(N − 1) ⎥ ⎢ ... ⎥ ⎢ 0 ⎥
                           ⎢                                  ⎥⎢       ⎥=⎢ . ⎥                    (8.22)
                           ⎢   ..           .. ..       ..    ⎥⎢       ⎥ ⎢ ⎥
                           ⎣    .            .    .      .    ⎦ ⎣ N,N ⎦ ⎣ .. ⎦
                                                                 b
                               R(−N) R(−N + 1) . . . R(0)         IL      EbN


  8.5         LEVINSON’S RECURSION: VECTOR CASE
  We now combine the normal equations for the forward and backward predictors to obtain
  Levinson’s recursion for solving the optimal predictors recursively. For this, we start from Eq.
  (8.18) and add an extra column and row 2 to obtain
              ⎡                                          ⎤⎡       ⎤ ⎡ f⎤
                       R(0)          . . . R(N) R(N + 1)
                                   R(1)                       IL      EN
              ⎢                                          ⎥
                                     . . . R(N − 1) R(N) ⎥ ⎢ aN,1 ⎥ ⎢ 0 ⎥
                                                           ⎢      ⎥ ⎢
              ⎢       R(−1)        R(0)                                   ⎥
              ⎢                                          ⎥⎢ . ⎥ ⎢ . ⎥
              ⎢         ..          ..
                                     . ..     .
                                              ..         ⎥ ⎢ .. ⎥ = ⎢ .. ⎥ ,                      (8.23)
              ⎢          .           .                   ⎥⎢       ⎥ ⎢ ⎥
              ⎢                                          ⎥⎢       ⎥ ⎢ ⎥
              ⎣ R(−N) R(−N + 1) . . . R(0)          R(1) ⎦ ⎣ aN,N ⎦ ⎣ 0 ⎦
                                                                        f
                R(−N − 1) R(−N) . . . R(−1)         R(0)       0      FN
                                                         
                            call this RN+2

                  f
  where FN is an L × L matrix, possibly nonzero, which comes from the extra row added at the
  bottom. Similarly, starting from Eq. (8.22), we add an extra row and column to obtain
              ⎡                                         ⎤⎡       ⎤ ⎡ b⎤
                       R(0)         . . . R(N) R(N + 1)
                                    R(1)                      0     FN
              ⎢                                         ⎥⎢       ⎥ ⎢ ⎥
              ⎢       R(−1)         . . . R(N − 1) R(N) ⎥ ⎢ bN,1 ⎥ ⎢ 0 ⎥
                                    R(0)
              ⎢                                         ⎥⎢ . ⎥ ⎢ . ⎥
              ⎢         ..           ..
                                     ..      ..         ⎥ ⎢ .. ⎥ = ⎢ .. ⎥                         (8.24)
              ⎢          .            . .     .         ⎥⎢       ⎥ ⎢ ⎥
              ⎢                                         ⎥⎢       ⎥ ⎢ ⎥
              ⎣ R(−N) R(−N + 1) . . . R(0)         R(1) ⎦ ⎣ bN,N ⎦ ⎣ 0 ⎦
                                                                       b
                R(−N − 1) R(−N) . . . R(−1)        R(0)      IL     EN
                                                        
                           this is RN+2 too!

              b
  where FN comes from the extra row added at the top. We now postmultiply Eq. (8.24) by an L × L
           f                                                                  f
  matrix (KN+1 )† and add it to Eq. (8.23) with the hope that the last entry FN in the right-hand side is



  2
      Actually L extra columns and rows because each entry is itself an L × L matrix.
                                LINEAR PREDICTION THEORY FOR VECTOR PROCESSES                      123
replaced with zero. This will then lead to the augmented normal equation for the (N + 1)th-order
forward predictor. We have

                    ⎛⎡       ⎤ ⎡       ⎤     ⎞ ⎡ f⎤ ⎡ b ⎤
                        IL        0               EN       FN
                   ⎜⎢        ⎥ ⎢       ⎥     ⎟ ⎢ ⎥ ⎢ ⎥
                   ⎜⎢ aN,1 ⎥ ⎢ bN,1 ⎥        ⎟ ⎢ 0 ⎥ ⎢ 0 ⎥
                   ⎜⎢ . ⎥ ⎢ . ⎥              ⎟ ⎢ . ⎥ ⎢ . ⎥
              RN+2 ⎜⎢ .. ⎥ + ⎢ .. ⎥ (KN+1 ) ⎟
                   ⎜ ⎢       ⎥ ⎢       ⎥         ⎢ ⎥ ⎢ ⎥
                                         f †                       f     †
                                             ⎟ = ⎢ .. ⎥ + ⎢ .. ⎥ (KN+1 )                     (8.25)
                   ⎜⎢        ⎥ ⎢       ⎥     ⎟ ⎢ ⎥ ⎢ ⎥
                   ⎝ ⎣ aN ,N ⎦ ⎣ bN ,N ⎦     ⎠ ⎣ 0 ⎦ ⎣ 0 ⎦
                                                     f
                         0        IL              FN       EbN

                         f
Clearly, the choice of KN+1 , which achieves the aforementioned purpose should be such that

                                        f          f
                                      FN + EbN (KN+1 )† = 0.


At this point, we make the assumption that the L × L error covariance EbN , and for future purposes,
  f                                  f
EN , are nonsingular. The solution KN+1 is therefore given by

                                        f              f
                                     KN+1 = −[FN ]† [EbN ]−1 .                               (8.26)

We can similarly postmultiply Eq. (8.23) by an L × L matrix KbN+1 and add it to Eq. (8.24):

                      ⎛⎡      ⎤     ⎡      ⎤⎞ ⎡ f ⎤         ⎡ b⎤
                         IL            0       EN            FN
                     ⎜⎢ a ⎥         ⎢ b ⎥⎟ ⎢ 0 ⎥            ⎢ 0 ⎥
                     ⎜ ⎢ N ,1 ⎥     ⎢ N,1 ⎥⎟ ⎢ ⎥            ⎢ ⎥
                     ⎜⎢ . ⎥ b       ⎢ . ⎥⎟ ⎢ . ⎥ b          ⎢ . ⎥
                RN+2 ⎜ ⎢      ⎥     ⎢      ⎥⎟ ⎢ ⎥           ⎢ ⎥
                     ⎜⎢ .. ⎥ KN+1 + ⎢ .. ⎥⎟ = ⎢ .. ⎥ KN+1 + ⎢ .. ⎥ .                         (8.27)
                     ⎜⎢       ⎥     ⎢      ⎥⎟ ⎢ ⎥           ⎢ ⎥
                     ⎝⎣ aN,N ⎦      ⎣ bN,N ⎦⎠ ⎣ 0 ⎦         ⎣ 0 ⎦
                                                  f             b
                         0             IL      FN            EN

To create the augmented normal equation for the (N + 1)-order backward predictor, we have to
                                           b
reduce this to the form (8.22). For this, KN+1 should be chosen as

                                            f
                                      [EN ]KbN+1 + FbN = 0,

that is,

                                                           f
                                      KbN+1 = −[EN]−1 FbN .                                  (8.28)
124   THE THEORY OF LINEAR PREDICTION
                  f          b
  The matrices KN+1 and KN+1 are analogous to the parcor coefficients km used in scalar linear
                     f
  prediction. With KN+1 and KbN+1 chosen as above, Eqs. (8.25) and (8.27) reduce to the form
                            ⎛⎡       ⎤ ⎡        ⎤           ⎞ ⎡ f ⎤
                                  IL          0                     EN+1
                            ⎜⎢ a ⎥ ⎢ b ⎥                    ⎟ ⎢           ⎥
                            ⎜ ⎢ N ,1 ⎥ ⎢ N ,1 ⎥             ⎟ ⎢ 0 ⎥
                            ⎜⎢ . ⎥ ⎢ . ⎥                    ⎟    ⎢        ⎥
                       RN+2 ⎜  ⎢     ⎥ ⎢        ⎥          †⎟    ⎢ . ⎥
                                                      f
                            ⎜⎢ .. ⎥ + ⎢ .. ⎥ (KN+1 ) ⎟ = ⎢ .. ⎥                             (8.29)
                            ⎜⎢       ⎥ ⎢        ⎥           ⎟ ⎢           ⎥
                            ⎝⎣ aN,N ⎦ ⎣ bN,N ⎦              ⎠ ⎣ 0 ⎦
                                   0         IL                       0
  and
                                 ⎛⎡    ⎤   ⎡      ⎤⎞ ⎡        ⎤
                                  IL          0            0
                             ⎜⎢ a ⎥        ⎢ b ⎥⎟ ⎢ 0 ⎥
                             ⎜ ⎢ N ,1 ⎥    ⎢ N ,1 ⎥ ⎟ ⎢       ⎥
                             ⎜⎢ . ⎥ b      ⎢ . ⎥⎟ ⎢ . ⎥
                                   .       ⎢
                        RN+2 ⎜⎢ . ⎥ KN+1 + ⎢ . ⎥⎟ = ⎢ . ⎥
                             ⎜ ⎢       ⎥       .  ⎥ ⎟ ⎢    .
                                                              ⎥,                           (8.30)
                             ⎜⎢        ⎥   ⎢      ⎥⎟ ⎢        ⎥
                             ⎝ ⎣ aN ,N ⎦   ⎣ bN,N ⎦⎠ ⎣ 0 ⎦
                                  0           IL        EbN+1

  respectively. These are the augmented normal equations for the (N + 1)th-order optimal for-
  ward and backward vector predictors, respectively. Thus, the (N + 1)th-order forward predictor
  coefficients are obtained from
                             ⎡          ⎤ ⎡       ⎤ ⎡        ⎤
                                  IL          IL          0
                             ⎢          ⎥ ⎢       ⎥ ⎢        ⎥
                             ⎢ aN+1,1 ⎥ ⎢ aN,1 ⎥ ⎢ bN,1 ⎥
                             ⎢          ⎥   ⎢     ⎥   ⎢      ⎥
                             ⎢     ..   ⎥ = ⎢ ... ⎥ + ⎢ ... ⎥ (K f )† .
                             ⎢      .   ⎥ ⎢       ⎥ ⎢        ⎥ N+1
                             ⎢          ⎥ ⎢       ⎥ ⎢        ⎥
                             ⎣ aN+1,N ⎦ ⎣ aN,N ⎦ ⎣ bN,N ⎦
                               aN+1,N+1        0         IL

  Similarly, the (N + 1)th-order backward predictor coefficients are obtained from
                            ⎡          ⎤ ⎡         ⎤           ⎡       ⎤
                               bN+1,1          IL                   0
                            ⎢ b        ⎥ ⎢         ⎥           ⎢b ⎥
                            ⎢ N+1,2 ⎥ ⎢ aN,1 ⎥                 ⎢ N ,1 ⎥
                            ⎢      ..  ⎥ ⎢ . ⎥ b               ⎢ . ⎥
                            ⎢          ⎥    ⎢      ⎥           ⎢       ⎥
                            ⎢       .  ⎥ = ⎢ .. ⎥ KN+1 + ⎢ .. ⎥ .
                            ⎢          ⎥ ⎢         ⎥           ⎢       ⎥
                            ⎣ bN+1,N+1 ⎦ ⎣ aN,N ⎦              ⎣ bN ,N ⎦
                                  IL            0                  IL
  The forward and backward prediction polynomials defined in Eqs. (8.5) and (8.19) are therefore
  given by
                                                         f
                                  AN+1 (z) = AN (z) + KN+1 BN(z)                           (8.31)

  and
                                    LINEAR PREDICTION THEORY FOR VECTOR PROCESSES                   125



                              BN+1 (z) = z −1 [(KbN+1 )† AN (z) + BN (z)].                    (8.32)

The extra z−1 arises because the 0th coefficient in the backward predictor, by definition, is zero
(see Eq. (8.19)). By comparing Eqs. (8.25) and (8.29) we see that the optimal prediction error
covariance matrix is updated as follows:
                                          f             f             f
                                        EN+1 = EN + FbN (KN+1 )† .                            (8.33)

Similarly, from (8.25) and (8.29), we obtain
                                              b             b    f    b
                                         EN+1 = EN + FNKN+1 .                                 (8.34)

By substituting from Eq. (8.26) and (8.28) and using the fact that the error covariances are
Hermitian anyway, we obtain the error covariance update equations
                                       "                   #
                                f               f              f
                             EN+1 = IL − KN+1 (KN+1 )† EN
                                                      b
                                                                                      (8.35)

and
                                           "                   #
                                                            f
                                    EbN+1 = IL − (KbN+1 )† KN+1 EbN                           (8.36)

       Summary of Levinson’s Recursion. We now summarize the key equations of Levinson’s
recursion. The subscript m is used instead of N for future convenience. Let R(k) be the L × L
autocorrelation matrix sequence of a WSS process x(n). Then, the optimal linear predictor
                                                          f
polynomials AN (z) and BN (z) and the error covariances EN and EbN can be calculated recursively
as follows: first, initialize the recursion according to
                                                                           f
                                        B0 (z) = z−1 I,
                                                                                b
                      A0 (z) = I,                               and       E0 = E0 = R(0).   (8.37(a))
                          f         b
Given Am (z), Bm (z), Em , and Em (all L × L matrices), proceed as follows:

      1. Calculate the L × L matrices

                        Fmf = R(−m − 1) + R(−m)am,1 + . . . + R(−1)am,m                     (8.37(b))

                                b
                              Fm = R(1)bm,1 + . . . + R(m)bm,m + R(m + 1)                   (8.37(c))

      2. Calculate the parcor coefficients (L × L matrices)
                                                    f
                                                  Km+1 = −[Fm ]† [Em ]−1
                                                                      f     b
                                                                                            (8.37(d))

                                                  Kbm+1 = −[Emf ]−1 Fbm                     (8.37(e))
126   THE THEORY OF LINEAR PREDICTION
        3. Update the prediction polynomials according to
                                                                      f
                                          Am+1 (z) = Am (z) + Km+1 Bm (z)                          (8.37( f ))

                                          Bm+1 (z) = z−1 [(Kbm+1 )† Am (z) + Bm (z)].              (8.37(g))

        4. Update the error covariances according to
                                               "               #
                                         f           f
                                      Em+1 = IL − Km+1 (Km+1 )† Em
                                                         b       f
                                                                                                   (8.37(h))
                                                "                  #
                                                                f
                                          Em+1 = IL − (Km+1 )† Km+1 Em .
                                           b            b            b
                                                                                                    (8.37(i))

  This recursion can be repeated to obtain the optimal predictors for any order N.

  8.6       PROPERTIES DERIVED FROM LEVINSON’S RECURSION
  We now derive some properties of the matrices that are involved in Levinson’s recursion. This gives
  additional insight and places the mathematical equations in proper context.

  8.6.1 Properties of Matrices Fmf and Fbm
  Eq. (8.37(b)) can be rewritten as

              (Fmf )† = R(m + 1) + a†m,1 R(m) + . . . + a†m,m R(1)
                          )                                                           *
                      = E x(n) + a†m,1 x(n − 1) + . . . + a†m,m x(n − m) x† (n − m − 1)
                      = E[emf (n)x† (n − m − 1)]
                         f
  We know the error em (n) is orthogonal to the samples x(n − 1), . . ., x(n − m), but not necessarily
                                                               f
  to x(n − m − 1). This ‘‘residual correlation’’ between em (n) and x(n − m − 1) is precisely what is
                               f                       f
  captured by the matrix Fm . The coefficient Km+1 in Eq. (8.37(d)) is therefore called the partial
  correlation or parcor coefficient, as in the scalar case. From Eq. (8.37(d)), we see that if this ‘‘residual
                                 f
  correlation’’ is zero, then Km+1 = 0, and as a consequence, there is no progress in the recursion,
  that is,
                                                                  f
                                 Am+1 (z) = Am (z) and Em+1 = Emf .

  How about Fbm ? Does it have a similar significance? Observe from (8.37(c)) that

              (Fbm )† = b†m,1 R(−1) + . . . + b†m,m R(−m) + R(−m − 1)
                           "                                                   #       
                      = E b†m,1 x(n − 1) + . . . + b†m,m x(n − m) + x(n − m − 1) x† (n)
                     = E[ebm (n)x† (n)]
                                  LINEAR PREDICTION THEORY FOR VECTOR PROCESSES                        127

The backward error ebm (n) is the error in the estimation of x(n − m − 1) based on the samples
x(n − m), . . . , x(n − 1). Thus, ebm (n) is orthogonal to x(n − m), . . ., x(n − 1) but not necessarily
                                                                b                         b
to the sample x(n). This residual correlation is captured by Fm . If this is zero, then Km+1 is zero as
seen from Eq. (8.37(e)). That is, there is no progress in prediction as we go from stage m to m + 1.
       Relation Between Fmf and Fmb . We have shown that

                                  (Fmf )† = E[emf (n)x† (n − m − 1)]                             (8.38)

and

                                       (Fbm )† = E[ebm (n)x† (n)].                               (8.39)

For the scalar case, the parameter αm played the role of the matrices Fmf and Fbm . But for the
vector case, we have the two matrices Fmf and Fbm , which appear to be unrelated. This gives the
first impression that there is a lack of symmetry between the forward and backward predictors.
                                              f      b
However, there is a simple relation between Fm and Fm credited to Burg (Kailath, 1974); namely,

                                               Fm = (Fm )† .
                                                  b      f
                                                                                                 (8.40)

This is readily proved as follows:
       Proof of Eq. (8.40). We can rewrite Eq. (8.38) as
                              "                                                 #† 
              f †                                †                  †
           (Fm ) = E em (n) x(n − m − 1) + bm,1 x(n − 1) + . . . + bm,m x(n − m)
                          f


                 = E[emf (n)(ebm (n))† ]
             f
because E[em (n)x(n − k)] = 0 for 1 ≤ k ≤ m anyway. Similarly, from Eq. (8.39), we get
                                 )                                               *† 
               (Fbm )† = E ebm (n) x(n) + a†m,1 x(n − 1) + . . . + a†m,m x(n − m)
                       = E[ebm (n)(emf (n))† ].

So we have shown that

                    Fmf = E[ebm (n)(emf (n))†] and           Fbm = E[emf (n)(ebm (n))†],         (8.41)

which proves (8.40).                                                                                  
                                                                           f
      Relation Between Error Covariance Matrices. From the definitions of Km+1 and Kbm+1
given in Eqs. (8.37(d)) and (8.37(e)), we have
                                           f
                           [Fmf ]† = −Km+1 Ebm        and Fbm = −Emf Kbm+1 .
128   THE THEORY OF LINEAR PREDICTION
  In view of the symmetry relation (8.40), it then follows that
                                                 f
                                               Km+1 Ebm = Emf Kbm+1 .                                             (8.42)

  8.6.2 Monotone Properties of the Error Covariance Matrices
  We now show that the error covariances of the optimal linear predictor satisfy the following:
                                                     f
                                      Emf ≥ Em+1                 and Ebm ≥ Ebm+1 ,                                (8.43)
                                      f
  that is, the differences Emf − Em+1 and Ebm − Ebm+1 are positive semidefinite. Because the total
                        f               f
  mean square error Em is the trace of Em , Eq. (8.43) means in particular that
                                                         f
                                          Emf ≥ Em+1              and Emb ≥ Emb +1                                (8.44)
                                                                                                            f
        Proof of (8.43). Substituting (8.37(d)) into Eq. (8.33), we see that Em+1 = Emf −
  Fm (Em )−1 Fm . In view of the symmetry relation (8.40), it then follows that
   b   b      f


                                           f
                                      Em+1 = Em − (Fm )† (Em )−1 Fm .
                                                             f            f           b       f
                                                                                                                  (8.45)

  Because (Ebm )−1 is Hermitian and positive definite, it follows that the second term on the right-hand
                                                                  f      f
  side is Hermitian and positive semidefinite. This proves Em ≥ Em+1 . Similarly, substituting Eq.
                                     b        b       f     f −1 b
  (8.37(e)) into Eq. (8.34), we get Em+1 = Em − Fm (Em ) Fm , from which it follows that

                                      Em+1 = Em − Fm (Em )−1 (Fm )† .
                                           b                 b        f       f           f
                                                                                                                  (8.46)
                     b         b
  This shows that Em ≥ Em+1 and the proof of Eq. (8.43) is complete.                                                   

  8.6.3 Summary of Properties Relating to Levinson’s Recursion
  Here is a summary of what we have shown so far:

       1. Fmf and Fbm have the following interpretations:

                    (Fmf )† = E[emf (n)x† (n − m − 1)],                       (Fbm )† = E[ebm (n)x† (n)].       (8.47(a))

       2. We can also express these as

                         Fm = E[ebm (n)(emf (n))† ] and Fm = E[emf (n)(ebm (n))† ],
                           f                                                  b
                                                                                                                (8.47(b))

          so that

                                                                 F m = (F m )† .
                                                                  b               f
                                                                                                                (8.47(c))
                                   LINEAR PREDICTION THEORY FOR VECTOR PROCESSES                            129
      3. The parcor coefficients are related as
                                                           f
                                                      Km+1 Ebm = Emf Kbm+1 .                      (8.47(d))

      4. The error covariances matrices satisfy
                                                  f            f        b       b
                                             Em ≥ Em+1 ,              Em ≥ Em+1 ,                 (8.47(e))

         where A ≥ B means that A − B is positive semidefinite.
                                                   f     f
      5. Traces of the error covariances satisfy Em ≥ Em+1 and Emb ≥ Emb +1 .
      6. For completeness, we list one more relation that will only be proved in Section 8.8.1. The
         error covariances for successive prediction orders are related as
                                                        "                #1/2
                                  (Em+1 )1/2 = (Emf )1/2 IL − Pm+1 P†m+1
                                    f
                                                                                                  (8.47( f ))

                                                         "                #1/2
                                  (Ebm+1 )1/2 = (Ebm )1/2 IL − P†m+1 Pm+1      ,                  (8.47(g))

         where
                              Δ
                     Pm+1 = (Emf )−1/2 Km+1 (Ebm )1/2 = (Emf )†/2 Kbm+1 (Ebm )−†/2
                                              f
                                                                                                  (8.47(h))

         and the matrices Pm satisfy

                                              Pm P†m < I,             P†m Pm < I.                 (8.47(i))


8.7       TRANSFER MATRIX FUNCTIONS IN VECTOR LPC
The forward prediction polynomial (8.5) is a multi-input multi-output (MIMO) FIR filter, which
                       f
produces the output eN (n) in response to the input x(n). Similarly backward prediction polynomial
(8.19) produces ebN(n) in response to the input x(n). These are schematically shown in Fig. 8.1(a).
                                                                                              f
It then follows that the backward error ebN(n) can be generated from the forward error eN(n) as
                                                                                   f
shown in part (b) of the figure. We therefore see that the transfer function from eN (n) to ebN(n) is
given by
                                                               Δ         −1
                                           z−1 HN (z)=BN (z)AN (z)                                   (8.48)
                                                                                    f
A modification of this is shown in part (c) where the quantities gN (n) and gbN (n) are given by
                          f            f               f
                        gN (n) = (EN)−1/2 eN (n),                  gbN (n) = (EbN )−1/2 ebN (n)      (8.49)
130   THE THEORY OF LINEAR PREDICTION

                                        x(n)                     A N (z)            eNf (n)
                   (a)


                                                                 BN (z)             eNb (n)



                   (b)                                    -1        x(n)
                                   eNf (n)               AN(z)             BN (z)                    eNb (n)



                   (c)
                                               eNf (n)         x(n)                    eNb (n)
                         gNf (n)                          -1                                                    gNb (n)
                                                         AN(z)             BN (z)
                                     [ ENf ]1/2                                                   [ ENb ]−1/2

  FIGURE 8.1: (a) Generation of the forward and backward errors using the prediction polynomials
                                                                                            f
  AN (z) and BN (z), (b) generation of the backward error ebN (n) from the forward error eN (n), and (c)
                                                                                          f
  generation of the normalized backward error gNb (n) from the normalized forward error gN (n).




  These are called normalized errors because their covariance matrices are equal to I. The transfer
                  f
  function from gN (n) to gbN(n) is given by

                                                         Δ                   −1               f
                                       z−1 GN (z)=[EN ]−1/2 BN (z)AN (z)[EN ]1/2 .
                                                             b
                                                                                                                          (8.50)

  The properties of GN (z) will be studied in later sections.


  8.8      THE FIR LATTICE STRUCTURE FOR VECTOR LPC
  The update equations for predictor polynomials, given in Eqs. (8.37(f )) and (8.37(g)), can be used
  to derive lattice structures for vector linear prediction, similar to the scalar case. Recall that the
         f
  error em (n) is the output of Am (z) in response to the input x(n), and similarly, ebm (n) is the output
  of Bm (z). Thus, the update Eqs. (8.37(f )) and (8.37(g)) show that the prediction errors for order
  m + 1 can be derived from those for order m using the MIMO lattice section shown in Fig. 8.2.
         Comparing this with the lattice structure for the scalar case (Fig. 4.5), we see that there is
  a great deal of similarity. One difference is that, in the scalar case, the lattice coefficients were
  km+1 and its conjugate km* +1 . But in the MIMO case, the lattice coefficients are the two different
              f
  matrices Km+1 and (Km+1 )† .
                          b
                                  LINEAR PREDICTION THEORY FOR VECTOR PROCESSES                        131

                emf (n)                                                                  f
                                                                                       em+1 (n)
                                  b
                                K m+1
                                  f
                                K m+1

                emb (n)                                               z −1 I             b
                                                                                       em+1 (n)

FIGURE 8.2: The MIMO lattice section that generates prediction errors for order m + 1 from
prediction errors for order m.



8.8.1 Toward Rearrangement of the Lattice
We now show how to bring more symmetry into the lattice structure by rewriting equations a little
                                   f        b
bit. Recall that the coefficients Km+1 and Km+1 are related as in Eq. (8.42). We first rearrange this.
Because error covariances are positive semidefinite matrices, they can be factored into the form

                                                E = E1/2 E†/2 ,

where E1/2 can be regarded as the left ‘square root and its transpose conjugate E†/2 the right
square root. Using this notation and remembering that the error covariances are assumed to be
nonsingular, we can rewrite Eq. (8.42) as
                                        f
                          (Emf )−1/2 Km+1 (Ebm )1/2 = (Emf )†/2 Kbm+1 (Ebm )−†/2 .

We will indicate this quantity by the notation Pm+1 , that is,
                            Δ               f
                     Pm+1 = (Em )−1/2 Km+1 (Em )1/2 = (Em )†/2 Km+1 (Em )−†/2 ,
                                  f                 b             f            b   b
                                                                                                  (8.51)

so that
                 f
              Km+1 = (Emf )1/2 Pm+1 (Ebm )−1/2 and Kbm+1 = (Emf )−†/2 Pm+1 (Ebm )†/2 .            (8.52)

From the definition of Pm+1 , we see that

                           Pm+1 P†m+1 = (Emf )−1/2 (Km+1 )(Kbm+1 )† (Emf )1/2
                                                          f
                                                                                                  (8.53)

and

                            P†m+1 Pm+1 = (Ebm )−1/2 (Kbm+1 )† Km+1 (Ebm )1/2 .
                                                                      f
                                                                                                  (8.54)
132   THE THEORY OF LINEAR PREDICTION
  To understand the role of these matrices, recall the error update Eq. (8.35). This can be
  rewritten as
                        "                   #
                 f               f
               Em+1 = IL − Km+1 (Kbm+1 )† Emf
                        "                   #
                                 f
                     = IL − Km+1 (Kbm+1 )† (Emf )1/2 (Emf )†/2
                        "                                  #
                                      f
                     = (Emf )1/2 − Km+1 (Kbm+1 )† (Emf )1/2 (Emf )†/2
                                "                                        #
                                                   f
                     = (Emf )1/2 IL − (Emf )−1/2 Km+1 (Kbm+1 )† (Emf )1/2 (Emf )†/2 ,

  so that
                                            "              #
                              f                         †
                             Em+1 = (Em )1/2 IL − Pm+1 Pm+1 (Em )†/2 .
                                      f                       f
                                                                                            (8.55)

  Similarly, from Eq. (8.36), we have
                           "                   #
                                           f
                  Ebm+1 = IL − (Kbm+1 )† Km+1 Ebm
                           "                   #
                                           f
                        = IL − (Kbm+1 )† Km+1 (Ebm )1/2 (Ebm )†/2
                           "                                   #
                        = (Ebm )1/2 − (Kbm+1 )† Km+1 (Ebm )1/2 (Ebm )†/2
                                                  f
                                   "                                        #
                                                                f
                        = (Ebm )1/2 IL − (Ebm )−1/2 (Kbm+1 )† Km+1 (Ebm )1/2 (Ebm )†/2 ,

  so that
                                            "              #
                                                   †
                             Em+1 = (Em )1/2 IL − Pm+1 Pm+1 (Em )†/2 .
                              b       b                       b
                                                                                            (8.56)

  Thus, the modified lattice coefficient Pm+1 enters both the forward and backward error updates in
  a symmetrical way. Under the assumption that the error covariances are nonsingular, we now prove
  that Pm+1 satisfies a boundedness property:
                                                     †
                                              Pm+1 Pm+1 < I                                 (8.57)

  and similarly

                                            P†m+1 Pm+1 < I.                                 (8.58)

  These can equivalently be written as

                            (I − Pm+1 P†m+1 ) > 0,       (I − P†m+1 Pm+1 ) > 0.             (8.59)

        Proof. Eq. (8.55) can be written as

                                            Em+1 = U† QU,
                                               f
                                 LINEAR PREDICTION THEORY FOR VECTOR PROCESSES                      133
                                                           f
where Q is Hermitian and U is nonsingular. Because Em+1 is assumed to be nonsingular, it is
positive definite, so that v† Em+1 v > 0 for any nonzero vector v. Thus, v† U† QUv > 0. Because
                               f

U = (Emf )†/2 is nonsingular, this implies that w† Qw > 0 for any vector w = 0, which is equivalent
                                                                            †
to the statement that Q is positive definite. This proves that I − Pm+1 Pm+1 is positive definite,
which is equivalent to Eq. (8.57). Eq. (8.58) follows similarly.                                   
         f
Because Em+1 is Hermitian and positive definite, it can be written in the form
                                         f          f             f
                                    Em+1 = (Em+1 )1/2 (Em+1 )†/2

From Eq. (8.55), we therefore see that the left square root can be expressed as
                                                 "                #1/2
                           (Em+1 )1/2 = (Emf )1/2 IL − Pm+1 P†m+1
                              f
                                                                       .                       (8.60)

                                                        †
The existence of the square root (IL − Pm+1 Pm+1 )1/2 is guaranteed by the fact that (IL −
Pm+1 P†m+1 ) is positive definite (as shown by Eq. (8.59)). Similarly, from Eq. (8.56), we have
                                                   "                #1/2
                            (Ebm+1 )1/2 = (Ebm )1/2 IL − P†m+1 Pm+1                            (8.61)


8.8.2 The Symmetrical Lattice
                                                                                           f
The advantage of defining the L × L matrix Pm+1 from the L × L matrices Km+1 and Kbm+1 is
that it allows us to redraw the lattice more symmetrically, in terms of Pm+1 . Because Pm+1 also has
the boundedness property (8.57), the lattice becomes very similar to the scalar LPC lattice, which
had the boundedness property |km | < 1. We now derive this symmetrical lattice. From Eq. (8.51),
we see that the lattice coefficients can be expressed as
                                     f
                                  Km+1 = (Em )1/2 Pm+1 (Em )−1/2 ,
                                                f                     b
                                                                                               (8.62)

and

                                  Kbm+1 = (Emf )−†/2 Pm+1 (Ebm )†/2 .                          (8.63)

Substituting these into Fig. 8.2 and rearranging, we obtain the lattice section shown in Fig. 8.3(b).
The quantities gmf (n) and gbm (n) indicated in Fig. 8.3(b) are given by

                       gmf (n) = (Emf )−1/2 emf (n),        gbm (n) = (Ebm )−1/2 ebm (n)       (8.64)

       These are normalized prediction error vectors, in the sense that their covariance matrix is
identity. We can generate the set of all forward and backward normalized error sequences by using
the cascaded FIR lattice structure, as demonstrated in Fig. 8.4 for three stages.
134   THE THEORY OF LINEAR PREDICTION

                         emf (n)                                                              f
                                                                                            em+1 (n)
                                               b
                                              K m+1
                                                  f
             (a)                              K m+1

                         emb (n)                                          z −1 I              b
                                                                                            em+1 (n)




                                 ( Emf)−1/2
                                          f
                                                                                       (Emf )1/2
                                        g (n)
                                         m
                   emf (n)                                                                           f
                                                                                                   em+1 (n)

                                              P
                                                 m+1
             (b)

                                 (Ebm )−1/2 Pm+1                                       (Ebm )1/2
                   emb (n)                                                z −1 I                     b
                                                                                                   em+1 (n)
                                        g b(n)
                                         m


  FIGURE 8.3: (a) The original MIMO lattice section and (b) an equivalent section in a more symmetrical
  form.


                             f
  The multipliers Q m in the figure are given by
                                                              f
                                         Q mf = (Emf )−1/2 (Em−1 )1/2 ,   m≥1                                 (8.65)
         f           f
  and Q 0 = (E0 )−1/2 . The multipliers Q bm are similar (just replace superscript f with b everywhere).
  In view of Eqs. (8.60) and (8.61), these multipliers can be rewritten as
                           "            #−1/2                   "           #−1/2
                        f             †                      b         †
                      Q m = I L − Pm Pm       ,            Q m = IL − Pm Pm               m ≥ 1.              (8.66)

  The unnormalized error sequence for any order can be obtained simply by inserting matrix
  multipliers (Emf )1/2 and (Ebm )1/2 at appropriate places. Because
                                   f              f    f
                                 e3 (n) = (E3 )1/2 g3 (n) and eb3 (n) = (E3 )1/2 gb3 (n),
                                                                              b


                                                                                   f
  the extra (rightmost) multipliers in Fig. 8.4(a) are therefore (E3 )1/2 and (E3 )1/2 . The lattice
                                                                                               b

  sections in Fig. 8.4 will be referred to as normalized lattice sections because the outputs at each of
  the stages represent the normalized error sequences.
                                          LINEAR PREDICTION THEORY FOR VECTOR PROCESSES                                                   135
                                                                                                                           f
      x(n)      f
              e 0(n)
                             f
                          g 0(n)
                                                            f
                                                          g 1 (n)
                                                                                               f
                                                                                             g2 (n)                   g 3 (n)
                                                                                                                                  f
                                                                                                                                e 3 (n)

                       Q 0f                        Q 1f                               Q 2f                          Q 3f
                                     P1                             P2                                P3
                  b
                e 0 (n)
                           g 0b(n)                        g 1b(n)                            g2b(n)                   g3b(n)    e b3(n)
              z −1 I                      z −1 I                         z −1 I                            z −1 I
                        Q b0                       Q b1                               Q b2                          Q b3
        (a)




                                                                         Pm
                                     Pm
        (b)                                                              Pm


FIGURE 8.4: (a) The MIMO FIR LPC lattice structure with normalized sections and (b) details of
the box labeled Pm .



8.9     THE IIR LATTICE STRUCTURE FOR VECTOR LPC
The IIR LPC lattice for the vector case can be obtained similar to the scalar case by starting from
Fig. 8.2 reproduced in Fig. 8.5(a) and rearranging equations. From Fig. 8.5(a), we have
                                              f                                   f
                                           em+1 (n) = emf (n) + Km+1 ebm (n)

and

                                      ebm+1 (n + 1) = [Km+1 ]† emf (n) + ebm (n).
                                                                    b



The first equation can be rewritten as
                                                                f                 f
                                          emf (n) = em+1 (n) − Km+1 ebm (n).

Substituting this into the second equation, we get
                                                         "                #
                                                f                      f
                       ebm+1 (n + 1) = [Km+1 ]†em+1 (n) + I − [Km+1 ]†Km+1 ebm (n).
                                         b                      b



These equations can be ‘‘drawn’’ as shown in Fig. 8.5(b). By repeated application of this idea, we
obtain the IIR LPC lattice shown in Fig. 8.6. This is called the MIMO IIR LPC lattice. The
transfer functions indicated as Hk (z) in the figure will be discussed later.
136   THE THEORY OF LINEAR PREDICTION

                             emf (n)                                                                                        f
                                                                                                                          em+1 (n)
                                                    b
                                                  K m+1
                    (a)
                                                    f
                                                  K m+1

                             emb (n)                                                                z −1 I                  b
                                                                                                                          em+1 (n)



                               f
                             em+1 (n)                                                                                     emf (n)

                                                                − K m+1
                                                                    f

                    (b)
                                                                      b
                                                                     K m+1
                               b
                             em+1 (n)                z −1 I                                                              emb (n)

  FIGURE 8.5: (a) The MIMO FIR lattice section and (b) the corresponding IIR lattice section.




            f                             f                                    f                                f
          e 3(n)                        e 2 (n)                              e1 (n)                           e0 (n)                 x(n)


                                 K3                                  K2                                  K1
          e 3b(n)                       e 2b(n)                              e1b(n)                           e0b(n)
                    z −1 I                        z −1 I                              z −1 I                           z −1 I

          (a)             H 3 (z)                          H 2 (z)                             H 1 (z)                     H0



                                                                              − K mf
          (b)                   Km                                                    b
                                                                                   Km



  FIGURE 8.6: (a) The MIMO IIR cascaded LPC lattice, and (b) details of the building block labeled
  Km .
                                        LINEAR PREDICTION THEORY FOR VECTOR PROCESSES                                           137

8.10    THE NORMALIZED IIR LATTICE
Starting from the symmetrical MIMO FIR LPC lattice in Fig. 8.3(b), we can derive an IIR LPC
lattice with slightly different structural arrangement. We will call this the normalized IIR LPC
lattice for reasons that will become clear. To obtain this structure, consider again the MIMO FIR
lattice section shown separately in Fig. 8.7(a). This FIR lattice section can be represented using the
equations
                                      f           f                         
                                     gm+1 (n) = Q m+1 gmf (n) + Pm+1 gbm (n)                                               (8.67)

and
                                                    "                       #
                              gbm+1 (n + 1) = Q bm+1 P†m+1 gmf (n) + gbm (n) .                                             (8.68)

The first equation can be rearranged to express gmf (n) in terms of the other quantities:
                                                           f        f
                                 gmf (n) = (Q m+1 )−1 gm+1 (n) − Pm+1 gbm (n).                                             (8.69)

The second equation (8.68) can then be rewritten by substituting from Eq. (8.69):

                                                       †       f                f
               gbm+1 (n + 1) = Q m+1 Pm+1 (Q m+1 )−1 gm+1 (n) + (Q m+1 )−† gbm (n),
                                          b                                                      b
                                                                                                                           (8.70)


                                 f
                                                                                    Q mf +1
                                                                                                                 f
                              g m (n)                                                                        g       (n)
                                                                                                                 m +1

               (a)
                                                   Pm+1
                                                   Pm+1
                                                                                    Q mb +1
                               b
                              gm (n)                                                          z −1 I         g b (n)
                                                                                                                 m +1




                                                                            −1
                          f
                                                                   (Q mf +1 )                            f
                      g       (n)                                                                      g m (n)
                          m +1
                                                       −1
                                     m+1 ( m +1 )
               (b)   Q bm +1 P            Q    f
                                                                                         −P
                                                                                −             m+1
                                                                   (Q bm +1 )
                      g b (n)                 z −1 I                                                   g bm (n)
                          m +1


FIGURE 8.7: (a) The normalized MIMO FIR lattice section and (b) the corresponding IIR normalized
lattice section.
138   THE THEORY OF LINEAR PREDICTION

  where we have used the definitions (8.66) for Q mf and Q bm , that is,
                        "             #−1/2             "              #−1/2
                                    †
                   f
                Q m = I L − Pm Pm           , Q bm = IL − P†m Pm                                                            m ≥ 1.

  The preceding two equations can be represented using the normalized IIR lattice section shown in
  Fig. 8.7(b).
         The normalized MIMO IIR LPC lattice therefore takes the form shown in Fig. 8.8 for three
                                                                                              f
  sections. For an N-stage IIR lattice, the signal entering at the left is the forward error eN (n), and
                                   f
  the signal at the right end is g0 (n). Upon scaling with the multiplier
                                                                     f                  f
                                                             (Q 0 )−1 = (E0 )1/2 ,
                              f                     f
  the error signal g0 (n) becomes e0 (n), which is nothing but the original signal x(n). Thus, while
  the FIR lattice produced the (normalized) error signals from the original signal x(n), the IIR lattice
  reproduces x(n) back from the error signals.

  8.11     THE PARAUNITARY OR MIMO ALL-PASS PROPERTY
  Figure 8.9 shows one section of the IIR lattice structure. Here, Gm (z) is the transfer function from
  the pervious section, and Pm+1 is the constant matrix shown in Fig. 8.8(b). Comparing with Fig.
  8.8(a), we see that the transfer matrices Gm (z) convert the forward error signals to corresponding


               f                            f                                   f
                                                                              g 1 (n)
                                                                                                                     f               ( Q 0f )−1
          g 3 (n)                         g2 (n)                                                                 g 0(n)                           x(n)


                                     P3                                  P2                               P1
          g3b(n)                          g2b(n)                              g 1b(n)                            g 0b(n)
                   z −1 I                          z −1 I                               z −1 I                             z −1 I

         (a)                G3 (z)                          G2 (z)                               G1 (z)                         G0

                                                                                                          (Q mf )−1

                                                                                         −1
         (b)                      Pm                            Q bm Pm (Q fm )                                                     −P
                                                                                                                 −                    m
                                                                                                          ( Q bm )


  FIGURE 8.8: (a) The normalized MIMO IIR LPC lattice shown for three stages and (b) details of
  the normalized IIR lattice sections. Here, Q mf = (IL − Pm P†m )−1/2 , Q bm = (IL − P†m Pm )−1/2 , m ≥ 1,
         f      f
  and Q 0 = (E0 )−1/2 .
                                    LINEAR PREDICTION THEORY FOR VECTOR PROCESSES                             139

                                     x 1 (n)                y 2 (n)


                                                    Pm+1 x (n)
                                     y1 (n)                  2
                                                                      z−1 Gm(z)
                          Gm+1 (z)

                        FIGURE 8.9: The normalized MIMO IIR lattice section.



backward error signals. More precisely, if gmf (n) is input to the system Gm (z), then the output is
gbm (n + 1).
       In the scalar case, the transfer function Gm (z) was all-pass, and this was used to show that
Gm+1 (z) was all-pass. Furthermore, these all-pass filters had all their poles inside the unit circle
(Section 4.3.2). We now prove an analogous property for the vector case. This is somewhat more
complicated than in the scalar case because the transfer functions are MIMO, and the all-pass
property generalizes to the so-called paraunitary property to be defined below (Vaidyanathan,
1993). We will first show that the building block indicated as Pm+1 has a unitary transfer matrix
Tm+1 . We then show that in an interconnection such as this, whenever Gm (z) is paraunitary
and Pm+1 unitary, then Gm+1 (z) is paraunitary as well. Because G0 (z) = I is paraunitary, it will
therefore follow that all the transfer functions Gm (z) in the normalized IIR lattice are paraunitary.
At this point, we ask the reader to review the tilde notation G (z) described in Section 1.2.1.
       Definition 8.1. Paraunitary Systems. An M × M transfer matrix G(z) is said to be
paraunitary if

                                               G† (e jω )G(e jω ) = I                                  (8.71)

for all ω . That is, the transfer matrix is unitary for all frequencies. If G(z) is rational (i.e., the entries
Gkm (z) are ratios of polynomials in z−1 ) then the paraunitary property is equivalent to

                                                   (z)G(z) = I
                                                  G                                                    (8.72)

for all z.                                                                                                  ♦
With x(n) and y(n) denoting the input and output of an LTI system (Fig. 8.10), their Fourier
transforms are related as

                                         Y(e jω ) = G(e jω )X(e jω )
140   THE THEORY OF LINEAR PREDICTION

                                        x(n)            G(z)           y(n)


                       FIGURE 8.10: An LTI system with input x(n) and output y(n).



  A number of important properties of paraunitary matrices are derived in Vaidyanathan (1993). The
  following properties are especially relevant for our discussions here:

       1. If G(e jω ) is unitary, it follows that

                                    Y† (e jω )Y(e jω ) = X† (e jω )X(e jω ),   for all ω         (8.73)

          for any Fourier transformable input x(n).
       2. It can, in fact, be shown that a rational LTI system G(z) is paraunitary if and only if (8.73)
          holds for all Fourier-transformable inputs x(n).
       3. By integrating both sides of (8.73) and using Parseval’s relation, it also follows that, for a
          paraunitary system, the input energy is equal to the output energy, that is,
                                                                 
                                                   x† (n)x(n) =       y† (n)y(n)                 (8.74)
                                               n                  n


          for all finite energy inputs.


  8.11.1 Unitarity of Building Blocks
  The building block Pm+1 in Fig. 8.9 has the form shown in Fig. 8.8(b). Its transfer matrix has the
  form
                                      ⎡                          ⎤
                                        Q b P† (Q f )−1 (Q b )−†
                                      ⎢                          ⎥
                                T=⎣                              ⎦,                           (8.75)
                                                f −1
                                           (Q )           −P

                                                                                           b       f
  where all subscripts have been omitted for simplicity. Recall here that the matrices Q and Q are
  related to P as in Eq. (8.66), that is,
                                   "         #−1/2             "         #−1/2
                          Q
                              f
                                  = IL − PP†       ,         b        †
                                                            Q = IL − P P       .                 (8.76)

                                                       †
  We will now show that T is unitary, that is, T T = I.
                                   LINEAR PREDICTION THEORY FOR VECTOR PROCESSES                  141
      Proof of Unitarity of T. We have
                                                            
                                              †         A B
                                          T T=                 ,
                                                        B† D

where the symbols above are defined as
                                                  b †
                      A = (Q )−† P(Q )† Q P (Q )−1 + (Q )−† (Q )−1 ,
                               f          b                 f      f     f

                      B = (Q f )−† P(Qb )† (Qb )−† − (Q f )−† P = 0,
                      D = (Qb )−1 (Qb )−† + P† P.

So, B is trivially zero. To simplify D, we substitute from Eq. (8.76) to obtain
                                   "         #1/2 "           #†/2
                              D = IL − P† P         IL − P† P      + P† P
                                   "         #
                                = IL − P† P + P† P = IL

Next, substituting from Eq. (8.76), the first term of A becomes
               "          #†/2 "              #−†/2 "          #−1/2 "             #1/2
                 IL − PP†      P IL − P† P            IL − P† P        P† IL − PP†
               "          #†/2 "              #−1 "               #1/2
            = IL − PP†         P IL − P P
                                           †        †
                                                  P IL − PP
                                                                †
                                                                       ,

so that
                   "          #†/2  "          #−1       !"          #1/2
                            †               †         †
                A = IL − PP        P IL − P P        P +I   IL − PP†      .
                                                          
                                        call this A1
We now claim that A1 = (IL − PP† )−1 :
                                 "           # −1 "            # "         #
               A1 (IL − PP† ) = P IL − P† P         P† − P† PP† + IL − PP†
                                 "           # −1 "          #    "         #
                              = P I L − P† P        IL − P† P P† + IL − PP†
                                      "            #
                              = PP† + IL − PP† = IL .
                      †               †                 †                                     †
Thus, A = (IL − PP )†/2 (IL − PP )−1 (IL − PP )1/2 = I, where we have used (IL − PP ) =
(IL − PP† )1/2 (IL − PP† )†/2 . This completes the proof that T is unitary.           

8.11.2 Propagation of Paraunitary Property
Return now to Fig. 8.9. We will show that if the rational transfer matrix Gm (z) is paraunitary and
the box labeled Pm+1 has a unitary transfer matrix Tm+1 (z) then Gm+1 (z) is also paraunitary.
142   THE THEORY OF LINEAR PREDICTION
         Proof of Paraunitarity of Gm+1 (z). From Fig. 8.9, we have
                                                                   
                                     Y1 (e jω )            X1 (e jω )
                                                  = Tm+1
                                     Y2 (e jω )            X2 (e jω )

  The unitary property of Tm+1 implies that

                                      Y†1 (e jω )Y1 (e jω ) + Y†2 (e jω )Y2 (e jω )



                                   = X†1 (e jω )X1 (e jω ) + X†2 (e jω )X2 (e jω ),    for all ω.

  Because Gm (z) is paraunitary, we also have Y†2 (e jω )Y2 (e jω ) = X†2 (e jω )X2 (e jω ) for all ω . So it
  follows that
                               †                        †
                             Y1 (e jω )Y1 (e jω ) = X1 (e jω )X1 (e jω ),       for all ω.

  This shows that the rational function Gm+1 (z) is paraunitary.                                             

  8.11.3 Poles of the MIMO IIR Lattice
  Figure 8.11 is a reproduction of Fig. 8.9 with details of the building block Pm+1 shown explicitly
  (with subscripts deleted for simplicity). Here, the matrices Q f and Qb are as in Eq. (8.66), that is,
                              "           #−1/2                 "         #−1/2
                       Q f = IL − PP†              and Qb = IL − P† P            .

  In Section 8.8.1, we showed that the LPC lattice satisfies the property

                                                      P† P < I                                         (8.77)

  (see Eq. (8.58)). Under this assumption, we will prove an important property about the poles3 of
  the transfer matrix Gm+1 (z).
         Lemma 8.1. Poles of the IIR Lattice. If the rational paraunitary matrix Gm (z) has all poles in
  |z| < 1 and if the matrix multiplier P is bounded as in Eq. (8.77), then the poles of Gm+1 (z) are
  also confined to the region |z| < 1.                                                                ♦
         Proof. It is sufficient to show that the transfer function F(z) indicated in Fig. 8.11 has all
  poles in |z| < 1. To find an expression for F(z), note that

                 Y(z) = z−1 Gm (z)W(z) and               W(z) = −z−1 PGm (z)W(z) + X(z),

  3
   The poles of a MIMO transfer function F(z) are nothing but the poles of the individual elements Fkm (z). For
  this section, the reader may want to review the theory on poles of MIMO systems (Kailath, 1980; Vaidyanathan,
  1993, Chapter 13).
                                 LINEAR PREDICTION THEORY FOR VECTOR PROCESSES                       143

                                              ( Q f ) −1      x(n) w(n)

                                  f −1
                         Qb P (Q )                                   −P
                                              ( Q b )−        y(n)
                                                                          z−1 Gm(z)
                  Gm+1 (z)
                                                           F(z)

FIGURE 8.11: The normalized MIMO IIR lattice section with some of the details indicated. Subscripts
on P and Q are omitted for simplicity.



where w(n) is the signal indicated in the figure. Eliminating W(z), we get Y(z) = z−1 Gm (z)(I +
z−1 PGm (z))−1 X(z). This shows that

                              F(z) = z−1 Gm (z)(I + z−1 PGm (z))−1 .                           (8.78)

Because the poles of Gm (z) are assumed to be in |z| < 1, it suffices to show that all the poles of
(I + z−1 PGm (z))−1 are in |z| < 1. Because
                                                                          
                                         − 1   Adj   I + z−1
                                                               PG  m ( z )
                          I + z−1 PGm (z)      =                             ,
                                                 det (I + z−1 PGm (z))

where Adj is the adjugate matrix, it is sufficient to show that all zeros of the denominator above are
in |z| < 1. We will use Eq. (8.77) and the assumption that Gm (z) is paraunitary with all poles in
|z| < 1. The latter implies
                                               †
                                             Gm (z)Gm (z) ≤ I                                  (8.79)

for all z in |z| ≥ 1 (see Section 14.8 of Vaidyanathan, 1993). Now, if z0 is a zero of the determinant
of (I + z−1 PGm (z)), then I + z0−1 PGm (z0 ) is singular. So there exists a unit-norm vector v such
that z0−1 PGm (z0 )v = −v. This implies
                                         †         †
                                  v† Gm (z0 )P PGm (z0 )v = |z0 |2 .                           (8.80)

If |z0 | ≥ 1, then Gm (z0 )v has norm ≤ 1 (in view of Eq. (8.79)). So the left-hand side in Eq. (8.80)
is < 1 in view of (8.77). This contradicts the statement that the right-hand side of Eq. (8.80)
satisfies |z0 | ≥ 1. This proves that all zeros of the said determinant are in |z| < 1.             
By induction, it therefore follows that the MIMO IIR LPC lattice is stable. Summarizing, we have
proved the following:
144   THE THEORY OF LINEAR PREDICTION
         Theorem 8.2. Stability of the IIR Lattice. Assume all the matrix multipliers indicated as Pm
  in the MIMO IIR lattice (demonstrated in Fig. 8.8 for three stages) satisfy P†m Pm < I and define
      f       b
  Q m and Q m as in (8.66). Then, the poles of all the paraunitary matrices Gm (z) in the LPC lattice
  are confined to be in |z| < 1.                                                                    ♦
  Equivalently, all poles of the MIMO IIR LPC lattice are in |z| < 1 (i.e., the IIR lattice is a causal
  stable system). This is the MIMO version of the stability property we saw in Section 4.3.2 for the
  scalar LPC lattice.

  8.12      WHITENING EFFECT AND STALLING
  Consider again Levinson’s recursion for the MIMO linear predictor described in Section 8.5.
  Recall that the error covariances are updated according to Eqs. (8.37(h)) and (8.37(i)), which can
  be rewritten using (8.37(d)) and (8.37(e)) as follows:
                                              f                   f               f                       f
                                         EN+1 = EN − (FN )† (EbN )−1 FN                                               (8.81)

                                                                              f           f           f
                                         EbN+1 = EbN − FN (EN )−1 (FN )† .                                            (8.82)
                                                                                                              f   f
  We say that there is no progress as we move from order N to order N + 1, if EN+1 = EN , that is,
                                                                      f                       f
                                                      Tr EN+1 = Tr EN .                                               (8.83)
                                                          f
  We know that the optimal prediction eN(n) at time n is orthogonal to the samples x(n − k), for
  1 ≤ k ≤ N. We now claim the following:
        Lemma 8.2. No-Progress Situation. The condition (8.83) arises if and only if
                                          f       Δ           f
                                       (FN )† =E[eN (n)x† (n − N − 1)] = 0                                            (8.84)
                           f
  that is, the error eN (n) is orthogonal to x(n − N − 1) in addition to being orthogonal to
  x(n − 1), . . . , x(n − N).                                                             ♦
                                                                          f                       f
        Proof. Eq. (8.83) is equivalent to Tr ((FN )† (EbN )−1FN ) = 0, as seen from Eq. (8.45). Because
                 f            f
  the matrix (FN )† (EbN)−1 FN is Hermitian and positive semidefinite, the zero-trace condition is
  equivalent to the statement4
                                                      f                               f
                                                  (FN)† (EbN )−1 (FN ) = 0.

  4
   The trace of a matrix A is the sum of its eigenvalues. When A is positive semidefinite, all eigenvalues are
  nonnegative. So, zero-trace implies all eigenvalues are zero. This implies that the matrix itself is zero (because any
  positive semidefinite matrix can be written as A = UΛU† where Λ is the diagonal matrix of eigenvalues and U
  unitary).
                                   LINEAR PREDICTION THEORY FOR VECTOR PROCESSES                   145
                       f
This is equivalent to FN = 0 (because (EN )−1 is Hermitian and nonsingular). This completes the
                                        b

proof.                                                                                            
A number of points should be noted.

    1. From Eqs. (8.82) and (8.84), we see that when there is no progress in forward prediction,
       then there is no progress in backward prediction either (and vice versa).
                                              f
    2. When Eq. (8.84) holds, we have KN+1 = 0 (from (8.26)) so that AN+1 (z) = AN (z).
       Similarly KN+1 = 0 and BN+1 (z) = z−1 BN(z).
                   b



We say that linear prediction ‘‘stalls’’ at order N if there is no further progress after stage N,
that is, if
                                                f           f   f
                                            EN = EN+1 = EN+2 = . . . .                        (8.85)

We now prove the following:
     Lemma 8.3. Stalling and Whitening. The stalling situation (8.85) occurs if and only if
                                            f           f             f
                                   E[eN (n)(eN )† (n − m)] = EN δ(m),                         (8.86)
                         f
that is, if and only if eN (n) is white.                                                          ♦
         Proof. From Lemma 8.2, it is clear that stalling arises if and only if

                                                    Fmf = 0, m ≥ N,

or equivalently,
                                    f
                                E[eN (n)x† (n − m)] = 0,            m ≥ N + 1.

Because this equality holds for 1 ≤ m ≤ N directly because of orthogonality principle, we can say
that stalling happens if and only if
                                            f
                                   E[eN (n)x† (n − m)] = 0,           m ≥ 1.                  (8.87)
      f
But eN (n) is a linear combination of x(n − m), m ≥ 0, so the preceding equation implies
                                        f           f
                                  E[eN (n)(eN )† (n − k)] = 0,            k ≥ 1.              (8.88)
                                                                f
Conversely, because x(n) is a linear combination of eN(n − k), k ≥ 0, we see that Eq. (8.88) implies
Eq. (8.87) as well. But because (8.88) is equivalent to Eq. (8.86), we have shown that the stalling
condition is equivalent to Eq. (8.86).                                                            
146     THE THEORY OF LINEAR PREDICTION

  8.13         PROPERTIES OF TRANSFER MATRICES IN LPC THEORY
  In the scalar case, the properties of the transfer functions AN (z) and BN(z) are well understood. For
  example, AN(z) has all zeros strictly inside the unit circle (i.e., it is a minimum-phase polynomial).
  Furthermore, we showed that
                                                                  N (z).
                                                 BN (z) = z−(N+1) A

  This implies that BN(z) has all its zeros outside the unit circle and the filter BN(z)/AN (z) is stable
  and all-pass. That is, the forward and backward error sequences are related by an all-pass filter,
            f
  so that EN = ENb . For the case of vector linear prediction, it is trickier to prove similar properties
  because the transfer functions are matrices. Let us first recall what we have already done. The
                                                      f
  transfer matrix HN (z) from the prediction error eN (n) to the prediction error ebN (n) is given in Eq.
  (8.48) and is reproduced below:
                                                             Δ     −1
                                                z−1 HN(z)=BN (z)AN (z).                              (8.89)
                                                                                      f
  The transfer matrix z−1 GN (z) from the normalized prediction error gN (n) to the normalized
  prediction error gbN (n) is given in Eq. (8.50) and reproduced below:
                                                   Δ               −1        f
                                      z−1 GN (z)=[EbN ]−1/2 BN (z)AN  (z)[EN ]1/2 .                  (8.90)

  This also appears in the MIMO IIR lattice of Fig. 8.8(a) (indicated also in Fig. 8.11). We showed
  in Section 8.11.2 that GN (z) is paraunitary, which is an extension of the all-pass property to the
  MIMO case. We also showed (Section 8.11.3) that all poles of GN (z) are in |z| < 1.
         We will start from these results and establish some more. The fact that the poles of GN (z)
  are in |z| < 1 does not automatically imply that the zeros of the determinant of AN (z) are in
  |z| < 1 unless we establish that the rational form in Eq. (8.90) is ‘‘irreducible’’ or ‘‘minimal’’ in some
  sense. We now discuss this issue more systematically. We will also establish a relation between the
  forward and backward matrix polynomials AN (z) and BN (z).


  8.13.1 Review of Matrix Fraction Descripions
  An expression of the form

                                                   H(z) = B(z)A−1 (z),                               (8.91)

  where A(z) and B(z) are polynomial matrices is called a matrix fraction description (MFD).5 The
  expressions (8.89) and (8.90) for z−1 HN(z) and z−1 GN (z) are therefore MFDs. We know that the

  5
      In this section, all polynomials are polynomials in z−1 .
                                LINEAR PREDICTION THEORY FOR VECTOR PROCESSES                      147
rational expression H(z) = B(z)/A(z) for a transfer function is not unique because there can be
cancellations between the polynomials A(z) and B(z). Similarly, the MFD expression for a rational
transfer matrix is not unique. If there are ‘‘common factors’’ between A(z) and B(z), then we can
cancel these to obtain a reduced MFD description for the same H(z). To be more quantitative,
we first need to define ‘‘common factors’’ for matrix polynomials. If the two polynomials A(z) and
B(z) can be written as

                         B(z) = B1 (z)R(z) and A(z) = A1 (z)R(z)

where B1 (z), A1 (z), and R(z) are polynomial matrices, then we say that R(z) is a right common
divisor or factor between A(z) and B(z), abbreviated as rcd. In this case, we can rewrite Eq. (8.91)
as

                                      H(z) = B1 (z)A1−1 (z).                                 (8.92)

Because

                                  det A(z) = det A1 (z)det R(z),

it follows that det A1 (z) has smaller degree than det A(z) (unless det R(z) is constant). Thus,
cancellation of all these common factors results in a reduced MFD (i.e., one with smaller degree
for det A(z)). We say that the MFD (8.91) is irreducible if every rcd R(z) has unit determinant,

                                          det R(z) = 1,                                      (8.93)

or more generally, a nonzero constant. A matrix polynomial R(z) satisfying Eq. (8.93) is said to
be unimodular. Thus, an MFD (8.91) is irreducible if the matrices A(z) and B(z) can have only
unimodular rcds. In this case, we also say that A(z) and B(z) are right coprime.
      Any unimodular matrix is an rcd. Given A(z) and B(z), we can always write

               A(z) =    A(z)U−1 (z) ×U(z),        B(z) =    B(z)U−1 (z) ×U(z)
                                                                       
                        polynomial A1 (z)                   polynomial B1 (z)

for any unimodular polynomial U(z). The inverse U−1 (z) remains a polynomial because det U(z) =
1. Thus, A1 (z) and B1 (z) are still polynomials. This shows that any unimodular matrix can be
regarded as an rcd of any pair of matrix polynomials.                                         
      The following results are well-known in linear system theory (e.g., see Lemmas 13.5.2 and
13.6.1 in Vaidyanathan, 1993).
      Lemma 8.4. Irreducible MFDs and Poles. Let H(z) = B(z)A−1 (z) be an irreducible MFD.
Then, the set of poles of H(z) is precisely the set of zeros of [det A(z)].                  ♦
148   THE THEORY OF LINEAR PREDICTION

       Lemma 8.5. Irreducible and Reducible MFDs. Let H(z) = B(z)A−1 (z) be an MFD and
                   −1
  H(z) = Bred (z)Ared (z) an irreducible MFD for the same system H(z). Then, B(z) = Bred (z)R(z)
  and A(z) = Ared (z)R(z) for some polynomial matrix R(z).                                    ♦

  8.13.2 Relation Between Predictor Polynomials
  We now prove a crucial property of the optimal MIMO predictor polynomials. The property
  depends on the vector version of Levinson’s upward recursion Eqs. (8.37(f ))--(8.37(g)). First note
  that we can solve for Am (z) and Bm (z) in terms of Am+1 (z) and Bm+1 (z) and obtain
                             "                   #−1 "                            #
                                    f                                f
                   Am (z) = I − Km+1 (Kbm+1 )†         Am+1 (z) − z Km+1 Bm+1 (z)             (8.94)

  and
                        "                  #−1 "                               #
                                       f
                Bm (z) = I − (Km+1 )† Km+1      z Bm+1 (z) − (Kbm+1 )† Am+1 (z) .
                               b
                                                                                               (8.95)

  This is called the downward recursion because we go from m + 1 to m using these equations.
  The inverses indicated in Eq. (8.94) and (8.95) exist by virtue of the assumption that the error
  covariances at stage m and m + 1 are nonsingular and related as in Eqs. (8.35) and (8.36).
        Lemma 8.6. Coprimality of Predictor Polynomials. The optimal predictor polynomials AN (z)
                                                                             −1
  and BN (z) are right coprime for any N, so that the MFD given by BN (z)AN     (z) is irreducible. ♦
         Proof. If R(z) is an rcd of Am+1 (z) and Bm+1 (z), then we see from Eqs. (8.94) and (8.95)
  that it is also an rcd of Am (z) and Bm (z). Repeating this argument, we see that any rcd R(z) of
  AN (z) and BN (z) for N > 0 must be an rcd of A0 (z) and B0 (z). But A0 (z) = I and B0 (z) = z−1 I,
  so these have no rcd other than unimodular matrices. Thus, R(z) has to be unimodular, or
  equivalently, AN (z) and BN (z) are right coprime.                                              
  We are now ready to prove the following result. The only assumption is that the error covariances
    f
  EN and EbN are nonsingular (as assumed throughout the chapter).
        Theorem 8.3. Minimum-Phase Property. The optimal predictor polynomial matrix AN (z) is
  a minimum-phase polynomial, that is, all the zeros of [det AN (z)] are in |z| < 1.             ♦
        Proof. From Eq. (8.90), we have
                                   −1                               f
                            BN (z)AN  (z) = z−1 (EbN )1/2 GN (z)(EN )−1/2 .

  From Theorem 8.2, we know that GN (z) is a stable transfer matrix (all poles restricted to |z| < 1).
                             −1                                       −1
  This shows that BN (z)AN      (z) is stable as well. Because BN (z)AN  (z) is an irreducible MFD
                                                                  −1
  (Lemma 8.6), all the zeros of [det AN (z)] are poles of BN(z)AN (z) (Lemma 8.4). So all zeros of
  [det AN (z)] are in |z| < 1.                                                                      
                                    LINEAR PREDICTION THEORY FOR VECTOR PROCESSES                   149
       Refer again to Eq. (8.90), which is reproduced below:


                                Δ                −1
                                                     (z)[EN ]1/2 = B(z)A−1 (z)
                                                                   f
                   z−1 GN (z)= [EbN]−1/2 BN(z) AN                                              (8.96)
                                                               
                                 call this B(z) call this A−1 (z)
                                                          −1
Because GN (z) is paraunitary, it follows that B(z)A (z) is paraunitary as well. Thus,
                                       −1
                                      A       (z)B(z)A−1 (z) = I
                                       ( z) B

from which it follows that

                                    B            (z)A(z)
                                     (z)B(z) = A                  for all z.                  (8.97)

That is,

                             B                        N (z)[E f ]−1 AN (z).
                              N (z)[Eb ]−1 BN (z) = A                                         (8.98)
                                      N                       N

So, the forward and backward predictor polynomials are related by the above equation. For the
                                      f                          N (z)BN (z) = AN (z)AN (z), which,
scalar case, note that we had ENb = EN , so that this reduces to B
of course, is equivalent to the statement that BN (z)/AN(z) is all-pass. Summarizing, the main
properties of the optimal predictor polynomials for vector LPC are the following:

                                                               −1
    1. AN (z) and BN (z) are right coprime, that is, BN (z)AN     (z) is irreducible (Lemma 8.6).
    2. AN (z) has minimum-phase property (Theorem 8.3).
    3. B                        N (z)[E f ]−1 AN (z), or equivalently,
        N (z)[Eb ]−1 BN (z) = A
                N                       N
                                             Δ               −1                 f
                                 z−1 GN(z)=[EbN ]−1/2 BN (z)AN  (z)[EN ]1/2                    (8.99)

       is paraunitary.

8.14       CONCLUDING REMARKS
Although the vector LPC theory proceeds along the same lines as does the scalar LPC theory, there
are a number of important differences as shown in this chapter. The scalar all-pass lattice structure
introduced in Section 4.3 has applications in the design of robust digital filter structures (Gray
and Markel, 1973, 1975, 1980; Vaidyanathan and Mitra, 1984, 1985; Vaidyanathan et al., 1986).
Similarly, the paraunitary lattice structure for MIMO linear prediction can be used for the design of
low sensitivity digital filter structures, as shown in the pioneering work of Rao and Kailath (1984).
The MIMO lattice is also studied by Vaidyanathan and Mitra (1985).

                                             •   •    •        •
                                                                                                       151




                                    APPENDIX                        A

             Linear Estimation of Random
                       Variables

Let x1 , x2 , . . . , xN be a set of N random variables, possibly complex. Let x be another random
variable, possibly correlated to xi in some way. We wish to obtain an estimate of x from the observed
values of xi , using a linear combination of the form

                                  x = −a1* x1 − a2* x2 . . . − aN* xN.                           (A.1)

The use of −ai* rather than just ai might appear to be an unnecessary complication, but will become
notationally convenient. We say that x is a linear estimate of x in terms of the ‘‘observed’’ variables
xi . The estimation error is defined to be

                                              e = x − x,                                         (A.2)

so that

                                e = x + a*1 x1 + a2* x2 + . . . + aN* xN .                        (A.3)

A classic problem in estimation theory is the identification of the constants ai such that the mean
square error

                                             E = E[ |e|2 ],                                       (A.4)

is minimized. The estimate x is then said to be the minimum mean square error (MMSE) linear
estimate.

A.1       THE ORTHOGONALITY PRINCIPLE
The minimization of mean square error is achieved with the help of the following fundamental
result:
        Theorem A.1. Orthogonality Principle. The estimate x in Eq. (A.1) results in minimum mean
square error among all linear estimates, if and only if the estimation error e is orthogonal to the N
random variables xi , that is, E[ex*i ] = 0 for 1 ≤ i ≤ N.                                          ♦
152   THE THEORY OF LINEAR PREDICTION
        Proof. Let 
                   x⊥ denote the estimate obtained when the orthogonality condition is satisfied.
  Thus, the error
                                                     Δ
                                                e⊥ =x − 
                                                        x⊥                                      (A.5)

  satisfies

                                       E[e⊥ xi*] = 0,          1 ≤ i ≤ N.                       (A.6)

  Let 
      x be some other linear estimate, with error e. Then,

                            e = x −
                                   x = e⊥ + 
                                            x⊥ − 
                                                 x                     (from Eq. (A.5)).

  This has the mean square value

               E[ |e|2 ] = E[ |e⊥ |2] + E[ |
                                            x⊥ − 
                                                 x|2 ] + E[(
                                                            x⊥ −                x⊥* − 
                                                                 x)e⊥* ] + E[e⊥ (     x *)].   (A.7)

  Because 
          x⊥ and 
                 x are both linear combinations as in Eq. (A.1), we can write
                                                           
                                                           N
                                            
                                            x⊥ − 
                                                 x=                  c i xi .                   (A.8)
                                                               i=1

  We therefore have
                                                      
                                                      N
                               x⊥* − 
                         E[e⊥ (     x *)] = E[e⊥              ci*xi* ] (from Eq. (A.8))
                                                         i=1
                                               
                                               N
                                           =         ci* E[e⊥ xi* ]
                                               i=1
                                           =0                  (from Eq. (A.6)),

  so that Eq. (A.7) becomes

                                  E[ |e|2 ] = E[ |e⊥ |2 ] + E[ |
                                                                x⊥ − 
                                                                     x|2 ].

  The second term on the right-hand side above is nonnegative, and we conclude that

                                           E[ |e|2 ] ≥ E[|e⊥ |2 ].

  Equality holds in the above, if and only if 
                                              x⊥ = 
                                                   x.                                              

  A.2         CLOSED-FORM SOLUTION
  If we impose the orthogonality condition on the error (A.3), we obtain the N equations

                               E[ex∗i ] = 0, 1 ≤ i ≤ N               (orthogonality).           (A.9)
                                                 LINEAR ESTIMATION OF RANDOM VARIABLES             153
We use these to find the coefficients ai, which result in the optimal estimate. (The subscript ⊥
which was used in the above proof will be discontinued for simplicity.) Defining the column vectors

                              x = [ x1 x2 . . . xN ]T , a = [ a1 a2 . . . aN ]T ,

we can write the error e as

                                                 e = x + a† x ,                              (A.10)

and the orthogonality condition Eq. (A.9) as

                                                 E[e x† ] = 0.                               (A.11)

Substituting from Eq. (A.10), we arrive at

                                           E[x x† ] + a† E[xx† ] = 0.                        (A.12)

In the above equation, the matrix
                                                    Δ
                                                  R=E[xx† ]
                                                                                             †
is the correlation matrix for the random vector x. This matrix is Hermitian, that is, R = R.
Defining the vector

                                                 r = E[x x*],

Eq. (A.12) simplifies to

                                                  Ra = −r.

More explicitly, in terms of the matrix elements, this can be written as
                   ⎡                                         ⎤⎡ ⎤         ⎡          ⎤
                      E[ |x1 |2 ] E[x1 x2*] . . . E[x1 xN* ]     a1         E[x1 x*]
                   ⎢                                         ⎥⎢ ⎥         ⎢          ⎥
                   ⎢ E[x2 x1*] E[ |x2 |2 ] . . . E[x2 xN* ] ⎥ ⎢ a2 ⎥      ⎢ E[x2 x*] ⎥
                   ⎢                                         ⎥ ⎢    ⎥     ⎢          ⎥
                   ⎢      ..         ..     ..       ..      ⎥ ⎢ .. ⎥ = − ⎢ .. ⎥ .           (A.13)
                   ⎣       .          .        .      .      ⎦⎣ . ⎦       ⎣ . ⎦
                      E[xN x1*] E[xN x2*] . . . E[ |xN |2 ]       aN          E[xN x*]
                                                                                       
                                       R                          a             −r
The vector r is the cross-correlation vector. Its ith element represents the correlation between the
random variable x and the observations xi . If the correlation matrix R is nonsingular, we can solve
for a and obtain

                               a = −R−1 r (optimal linear estimator).                        (A.14)
154   THE THEORY OF LINEAR PREDICTION
  The autocorrelation matrix R is positive semidefinite because xx† is positive semidefinite. If in
  addition R is nonsingular, then it is positive definite. The case of singular R will be discussed in
  Section A.4.
         The above development does not assume that x or xi have zero mean. Notice that if the
  correlation between x and the observation xi is zero for each i, then r = 0. Under this condition,
  a = 0. This means that the best estimate is x = 0 and the error is e = x itself!


  A.3     CONSEQUENCES OF ORTHOGONALITY
  Because the estimate 
                       x is a linear combination of the random variables xi , the orthogonality property
  (A.9) implies

                                               E[e 
                                                   x *] = 0.                                      (A.15)

  That is, the optimal linear estimate 
                                       x is itself orthogonal to the error e. The random variable x and
  its estimate 
               x are related as x = 
                                    x + e. From this, we obtain

                                      E[ |x|2 ] = E[ |
                                                      x|2 ] + E[ |e|2 ]                           (A.16)
                                                                     
                                                                  E


  by exploiting Eq. (A.15).
         Geometric Interpretation. A geometric interpretation of orthogonality principle can be given
  by visualizing the random variables as vectors. Imagine we have a three-dimensional Euclidean
  vector x, which should be approximated in the two-dimensional plane (x1 , x2 ) (Fig. A.1). We see
  that the approximation error is given by the vector e and that the length of this vector is minimized
  if and only if it is perpendicular to the x1 , x2 plane. Under this condition, the lengths of the vector
  x, the error e, and the estimate x are indeed related as

                           (length of x)2 = (length of x )2 + (length of e)2 ,

  which is similar to Eq. (A.16). The above relation is also reminiscent of the Pythagorean
  theorem.                                                                                
        Expression for the Minimized Error. Assuming that the coefficients ai have been found, we
  can compute the minimized mean square error as follows:

                           E = E[|e|2 ] = E[ee*] = E[e(x* + x† a)]
                                        = E[ex*] (by orthogonality (A.11)).
                                                LINEAR ESTIMATION OF RANDOM VARIABLES                   155




                                                      x
                                                             e

                                                                          x1

                                                      x


                            x2

FIGURE A.1: Pertains to the discussion of orthogonality principle.



Using Eq. (A.10) and the definition of r, this can be rewritten as

                                       E[ |e|2 ] = E[ |x|2 ] + a† r                              (A.17)
                                              
                                           E

      Example A.1: Estimating a Random Variable. Let x and x1 be real random variables. We
wish to estimate x from the observed values of x1 using the linear estimate

                                                
                                                x = −a1 x1 .

The normal equations are obtained by setting N = 1 in Eq. (A.13), that is,

                                        E[x12 ] × a1 = −E[x1 x].

Thus,
                                                      −E[x1 x]
                                               a1 =            .
                                                       E[x21 ]
The mean square value of the estimation error is
                                                (E[x1 x])2
                          E[e 2 ] = E[x 2 ] −                [from Eq. (A.17)].
                                                  E[x12 ]
Thus, a1 is proportional to the cross-correlation E[x1 x]. If E[x1 x] = 0, then a1 = 0, that is, the best
estimate is x = 0, and the mean square error is

                          E[e 2 ] = E[x 2 ] = mean square value of x itself!
156   THE THEORY OF LINEAR PREDICTION

  A.4      SINGULARITY OF THE AUTOCORRELATION MATRIX
  If the autocorrelation matrix R defined in Eq. (A.13) is singular, (i.e., [det R] = 0), we cannot
  invert it to obtain a unique solution a as in Eq. (A.14). To analyze the meaning of singularity, recall
  (Horn and Johnson, 1985) that R is singular if and only if Rv = 0 for some vector v = 0. Thus,
  singularity of R implies v† Rv = 0, that is,
                                         v† E[xx† ]v = 0,     v = 0.
  Because v is a constant with respect to the expectation operation, we can rewrite this as E[v† xx† v] =
  0. That is,
                                              E[ |v† x|2 ] = 0.
  This implies that the scalar random variable v† x is zero, that is,
                               v† x = v1*x1 + v2*x2 + . . . + vN* xN = 0.
                         T                        T
  with x = x1 x2 . . . xN    and v = v1 v2 . . . vN . Because v = 0, at least one of components
  vi is nonzero. In other words, the N random variables xi are linearly dependent. Assuming, for
  example, that vN is nonzero, we can write

                                 xN = −[v1*x1 + . . . + vN* −1 xN−1 ]/vN* .

  That is, we can drop the term aN* xN from Eq. (A.3) and solve a smaller estimation problem, without
  changing the value of the optimal estimate. We can continue to eliminate the linear dependence
  among random variables in this manner until we finally arrive at a smaller set of random variables,
  say, xi , 1 ≤ i ≤ L, which do not have linear dependence. The L × L correlation matrix of these
  random variables is then nonsingular, and we can solve a set of L equations (normal equations)
  similar to Eq. (A.13), to find the unique set of L coefficients ai .
          Example A.2: Singularity of Autocorrelation. Consider the estimation of x from two real
  random variables x1 and x2 . Let the 2 × 2 autocorrelation matrix be
                                                         
                                                     1 a
                                             R=             .
                                                     a a2
                                                                                           
                                                                                          a
  We have [det R] = a 2 − a 2 = 0 so that R is singular. We see that the vector v =           has the
                                                                                         −1
  property that Rv = 0. From the above theory, we conclude that x1 and x2 are linearly dependent
  and ax1 − x2 = 0, that is,

                                                 x2 = ax1 .

  In other words, x2 is completely determined by x1 .
                                                                                                      157




                                     APPENDIX                     B

                        Proof of a Property of
                          Autocorrelations

The autocorrelation R(k) of a WSS process satisfies the inequality
                                           R(0) ≥ |R(k)|.                                        (B.1)
To prove this, first observe that
                                      E|x(0) − e jφ x(−k)|2 ≥ 0                                  (B.2)
for any real constant φ. The left-hand side can be rewritten as
                       )                                                      *
                     E |x(0)|2 + |x(−k)|2 − e jφ x*(0)x(−k) − e−jφ x(0)x*(−k)
                   = 2R(0) − e jφ R*(k) − e−jφ R(k).

Because this holds for any real φ, let us choose φ so that R∗ (k)e jφ is real and nonnegative, that is,
R∗ (k)e jφ = |R(k)|. Thus,
                          E|x(0) − e jφ x(−k)|2 = 2R(0) − 2|R(k)| ≥ 0,
from (B.2). This proves Eq. (B.1). Equality in (B.1) is possible if and only if
                                     E|x(0) − e jφ x(−k)|2 = 0,
that is,
                                     E|x(n) − e jφ x(n − k)|2 = 0
for all n (by WSS property). Thus,
                                        x(n) = e jφ x(n − k),
which means that all samples of x(n) can be predicted perfectly if we know the first k samples
x(0), . . ., x(k − 1). Summarizing, as long as the process is not perfectly predictable, we have
                                           R(0) > |R(k)|                                         (B.3)

for k = 0.
                                                                                                           159




                                      APPENDIX                      C

                 Stability of the Inverse Filter

We now give a direct proof that the optimum prediction polynomial AN (z) has all zeros pk
inside the unit circle, that is, | pk | < 1, as long as x(n) is not a line spectral process (i.e., not fully
predictable). This gives a direct proof (without appealing to Levinson’s recursion) that the causal
IIR filter 1/AN (z) is stable. This proof appeared in Vaidyanathan et al. (1997). Also see Lang and
McClellan (1979).
       Proof. The prediction filter reproduced in Fig. C.1(a) can be redrawn as in Fig. C.1(b),
where q is some zero of AN (z) and CN−1 (z) is causal FIR with order N − 1. First observe that
1 − qz−1 is the optimum first-order prediction polynomial for the WSS process y(n), for otherwise,
the mean square value of its output can be made smaller by using a different q, which contradicts
the fact that AN (z) is optimal. Thus, q is the optimal coefficient


                                                      Ryy (1)
                                                 q=           ,                                      (C.1)
                                                      Ryy (0)


where Ryy (k) is the autocorrelation of the WSS process y(n). From Appendix B, we know that
Ryy (0) ≥ |Ryy (k)| for any k that shows


                                                  |q| ≤ 1.


This proves that all zeros of AN (z) satisy |zk | ≤ 1. To show that, in fact, |q| < 1 when x(n)
                                                                                            f
is not a line spectral process, we have to work a little harder. Recall that the optimal eN (n) is
orthogonal to x(n − 1), . . ., x(n − N ) (Section 2.3). Because y(n − 1) is a linear combination of
                                                 f
x(n − 1), . . ., x(n − N ), it is orthogonal to eN (n) as well:


                                             f
                                        E[eN(n)y*(n − 1)] = 0.                                       (C.2)
160     THE THEORY OF LINEAR PREDICTION

                           (a)           x(n)                A N (z)                eNf (n)

                                                     FIR prediction filter



                                                                    y(n)
                                 x(n)           CN − 1 (z)                         1 − qz −1       eNf (n)
                           (b)


      FIGURE C.1: (a) The prediction filter and (b) an equivalent drawing, with a factor (1 − qz−1 ) shown
      separately.


                                     f
      Thus, using the fact that eN(n) = y(n) − qy(n − 1), we can write
                                 f         f                    f
                             EN = E[|eN (n)|2 ] = E[eN (n)(y(n) − qy(n − 1))*]
                                                       f
                                                = E[eN (n)y*(n)] (from (C.2))
                                                = E[(y(n) − qy(n − 1))y*(n)]
                                                = Ryy (0) − qRyy* (1)
                                                = Ryy (0)(1 − |q|2 ) (from (C.1)).
                                                                           f                   f
      Because x(n) is not a line spectral process, we have EN = 0, that is, EN > 0. Thus, (1 − |q|2 ) > 0,
      which proves |q| < 1 indeed.                                                                       

                                                        •      •       •       •
                                                                                                   161




                                   APPENDIX                     D

                 Recursion Satisfied by AR
                     Autocorrelations
                                                                      f
Let ak*,n denote the optimal N th-order prediction coefficients and EN the corresponding prediction
error for a WSS process x(n) with autocorrelation R(k). Then, the autocorrelation satisfies the
following recursive equations:
                
                                                                                   f
                   −aN* ,1 R(k − 1) − aN* ,2 R(k − 2) . . . − aN* ,N R(k − N ) + EN , k = 0
        R(k) =                                                                               (D.1)
                   −aN* ,1 R(k − 1) − aN* ,2 R(k − 2) . . . − aN* ,N R(k − N ), 1 ≤ k ≤ N.

In particular, if the process x(n) is AR(N ), then the second equation can be made stronger:

       R(k) = −aN* ,1 R(k − 1) − aN* ,2 R(k − 2) . . . − aN* ,N R(k − N ), for all k > 0       (D.2)

       Proof. The above equations are nothing but the augmented normal equations rewritten. To
see this, note that the 0th row in Eq. (2.20) is precisely the k = 0 case in (D.1). For 1 ≤ k ≤ N,
the kth equation in (2.20) is

             R*(k) + aN,1 R*(k − 1) + . . . + aN,NR*(k − N ) = 0 (using R(i) = R*(−i)).

Conjugating both sides, we get the second equation in Eq. (D.1). For the case of the AR(N )
process, we know that the (N + m)th-order optimal predictor for any m > 0 is the same as the
N th-order optimal predictor, that is,
                                          
                                            aN ,n 1 ≤ n ≤ N
                                 aN+m,n =
                                             0     n > N.

So, the second equation in Eq. (D.1), written for N + m instead of N yields

           R(k) = −a*N,1 R(k − 1) − a*N,2 R(k − 2) . . . − aN* ,N R(k − N ), 1 ≤ k ≤ N + m

for any m ≥ 0. This proves Eq. (D.2) for AR(N ) processes.                                        

                                           •    •   •   •
                                                                                                    163




                                   Problems
1. Suppose x(n) is a zero-mean white WSS random process with variance σ 2 . What are the
   coefficients aN,i of the N th-order optimal predictor? What is the prediction error variance?

2. Consider the linear prediction problem for a real WSS process x(n) with autocorrelation
   R(k). The prediction coefficients aN,i are now real. Show that the mean square prediction
           f
   error EN can be written as
                                      f
                                   EN = R(0) + aT RN a + 2aT r,

   where
                                                            T
                                     a = aN,1 aN,2 . . . aN,N ,
                                                             f
   and RN and r are as in Eq. (2.8). By differentiating EN with respect to each aN,i and setting
   it to zero, show that we again obtain the normal equations (derived in Section 2.3 using
   orthogonality principle).

3. Consider a WSS process x(n) with autocorrelation
                                       
                                         b0.5|k| for k even
                               R(k) =                                                          (P.3)
                                           0      for k odd

   where 0 < b < 1.
   a) Compute the power spectral density Sxx (e jω ).
   b) Find the predictor polynomials A1 (z), A2 (z), the lattice coefficients k1 , k2 , and the error
                  f    f
      variances E1 , E2 using Levinson’s recursion.
                    f
   c) Show that e2 (n) is white.

4. Someone performs optimal linear prediction on a WSS process x(n) and finds that the first
   two lattice coefficients are k1 = 0.5 and k2 = 0.25 and that the second-order mean square
                         f
   prediction error is E2 = 1.0. Using these values, compute the following.
   a) The predictor polynomials A1 (z) and A2 (z).
                                   f      f
   b) The mean square errors E0 and E1 .
   c) The autocorrelation coefficients R(m) of the process x(n), for m = 0, 1, 2.
164   THE THEORY OF LINEAR PREDICTION
       5. Someone performs optimal linear prediction on a WSS process x(n) and finds that the first
          four lattice coefficients are

                                     k1 = 0, k2 = 0.5, k3 = 0, k4 = 0.25,                         (P.5)
                                                                          f
         and that the fourth-order mean square prediction error is E4 = 2.0. Using these values,
         compute the following:
         a) The predictor polynomials Am (z) for m = 1,2,3,4.
                                      f
         b) The mean square errors Em for m = 0,1,2,3.
         c) The autocorrelation coefficients R(m) of the process x(n), for m = 0,1,2,3,4.

       6. Show that the quantity αm arising in Levinson’s recursion can be expressed in terms of a
          cross-correlation, that is,

                                         α*m = E[emf (n)x*(n − m − 1)].                           (P.6)

       7. Estimation From Noisy Data. Let v be a noisy measurement of a random variable u, that is,

                                                   v = u + ,                                    (P.7a)

          where the random variable  represents noise . Assume that this noise has zero mean and
          that it is uncorrelated with u. From this noisy measurement v, we would like to find an
          estimate of u of the form 
                                    u = av. Let e = u − 
                                                        u be the estimation error. Compute the value
          of a, which minimizes the mean square error E[|e|2 ]. Hence, show that the best estimate of
          u is
                                                              !
                                                       Ruu
                                             
                                             u=                 v,                             (P.7b)
                                                    Ruu + σ2

          where Ruu = E[|u|2] and σ2 = E[||2 ] (noise variance). Show also that the minimized mean
          square error is

                                                            Ruuσ2
                                              E[|e|2 ] =             .                           (P.7c)
                                                           Ruu + σ2

          Thus, when the noise variance σ2 is very large, the best estimate approaches zero; this means
          that we should not trust the measurement and just take the estimate to be zero. In this
          extreme case, the error E[|e|2] approaches Ruu. Thus, with the above estimate, the mean
          square estimation error will never exceed the mean square value Ruu of the random variable
          u to be estimated, no matter how strong the noise is!
                                                                                PROBLEMS       165

 8. Valid Autocorrelations. Let R be a Hermitian positive definite matrix. Show that it is a
    valid autocorrelation matrix. That is, show that there exists a random vector x such that
    R = E[xx† ].

 9. Let J denote the N × N antidiagonal matrix, demonstrated below for N = 3.
                                             ⎡      ⎤
                                                001
                                             ⎢      ⎥
                                         J = ⎣0 1 0⎦                                      (P.9)
                                                100

    If A is any N × N matrix, then JA represents a matrix whose rows are identical to those of
    A but renumbered in reverse order. Similarly, AJ corresponds to column reversal.
    a) Now assume that A is Hermitian and Toeplitz. Show that JAJ = A*.
    b) Conversely, suppose JAJ = A*. Does it mean that A is Hermitian and Toeplitz? Justify.
    c) Suppose JAJ = A* and A is Hermitian. Does it mean that A is Toeplitz? Justify.

10. Consider a WSS process x(n) with power spectrum

                                             1 − ρ2
                        Sxx (e jω ) =                        − 1 < ρ < 1.                (P.10)
                                        1 + ρ2 − 2ρ cos ω

    Let R2 represent the 2 × 2 autocorrelation matrix of x(n) as usual. Compute the eigenvalues
    of this matrix and verify that they are bounded by the extrema of the power spectrum (i.e.,
    as in Eq. (2.28)).

11. Condition number and spectral dynamic range. Eq. (2.31) shows that if the power spectrum
    has wide variations (large Smax /Smin ), then the condition number of RN can, in general, be
    very large. However, this does not necessarily always happen: we can create examples where
    Smax /Smin is arbitrarily large, and yet the condition number of RN is small. For example,
    given the autocorrelation R(k) with Fourier transform Sxx (e jω ), define a new sequence as
    follows:
                                        
                                           R(k/N ) if k is multiple of N
                              Ryy (k) =
                                           0         otherwise.

    a) Find the Fourier transform Syy (e jω ) of Ryy (k), in terms of Sxx (e jω ).
    b) Argue that Ryy (k) represents a valid autocorrelation for a WSS process y(n).
    c) For the process y(n), write down the N × N autocorrelation matrix. What is its condition
       number?
166   THE THEORY OF LINEAR PREDICTION

          d) For the process x(n), let γ denote the ratio Smax /Smin in its power spectrum Sxx (e jω ).
             For the process y(n), what is the corresponding ratio?

      12. Consider two Hermitian matrices A and B such that A is the upper left submatrix of B,
          that is
                                                      
                                                  A×
                                            B=           .                              (P.12)
                                                  ××

          a) Show that the minimum eigenvalue of B cannot be larger than that of A. Similarly,
             show that the maximum eigenvalue of B cannot be smaller than that of A. Hint. Use
             Rayleigh’s principle (Horn and Johnson, 1985).
          b) Prove that the condition number N of the autocorrelation matrix Rm of a WSS process
             (Section 2.4.1) cannot decrease as the matrix size m grows.

      13. Consider a WSS process x(n) with the first three autocorrelation coefficients

                                        R(0) = 3, R(1) = 2, R(2) = 1.                              (P.13)

          a) Compute the coefficients of the first and the second-order optimal predictor polynomials
             A1 (z) and A2 (z) by directly solving the normal equations.
          b) By using Levinson’s recursion, compute the predictor polynomials and mean square
             prediction errors for the first- and second-order predictors.
          c) Draw the second-order FIR LPC lattice structure representing the optimal predictor and
             indicate the forward and backward prediction errors at the appropriate nodes. Indicate
             the values of the lattice coefficients k1 and k2 .
          d) Draw the second-order IIR lattice structure representing the optimal predictor and
             indicate the forward and backward prediction errors at the appropriate nodes. Indicate
             the values of the lattice coefficients k1 and k2 .

      14. Valid Toeplitz autocorrelation. Consider a set of numbers R(k), 0 ≤ k ≤ N and define
          the matrix RN+1 as in Eq. (2.20). By construction, this matrix is Hermitian and Toeplitz.
          Suppose, in addition, it turns out that it is also positive definite. Then, show that the numbers
          R(k), 0 ≤ k ≤ N, are valid autocorrelation coefficients of some WSS process x(n). Give a
          constructive proof, that is, show how you would generate a WSS process x(n) such that its
          first N + 1 autocorrelation coefficients would be the elements R(0), R(1), . . . , R(N ).

      15. Show that the coefficients bN,i of the optimal backward predictor are indeed given by
          reversing and conjugating the coefficients of the forward predictor, as shown in Eq. (4.3).
                                                                                PROBLEMS       167
         f
16. Let em (n) denote the forward prediction error for the optimal mth-order predictor as usual.
    Show that the following orthogonality condition is satisfied:
                                                   
                                          f
                              E emf (n)[ek (n − 1)]* = 0, m > k.                         (P.16)

17. In Problem 4, suppose you are informed that x(n) is actually AR(2). Then, compute the
    autocorrelation R(m) for m = 3,4.

18. In Example 2.1, the autocorrelation R(k) of a WSS process x(n) was supplied in closed
                                                                                       f
    form. Show that the process x(n) is in fact AR(2), that is, the prediction error e2 (n) is
    white.

19. Compute and sketch the entropy of a Gaussian WSS process, with autocorrelation R(k) =
    ρ|k| , −1 < ρ < 1. Make qualitative remarks explaining the nature of the plot.

20. Consider a Gaussian AR(2) process with R(0) = 1, for which the second-order predictor
    polynomial is
                                                !             !
                                           1 −1          1 −1
                           A2 (z) = 1 − z          1− z                           (P.20)
                                           2             3

    Compute the entropy of the process and the flatness measure γx2 .

21. Consider a real WSS Gaussian process x(n) with power spectrum sketched as shown in
    Fig. P.21.
    a) Compute the entropy of the process.




                                             4
                         jω
                Sxx (e        )


                                  2

                                                        1
                                                                        ω
                          0           π /4       π /2           π

                                       FIGURE P.21
168   THE THEORY OF LINEAR PREDICTION
                                             f
          b) Compute the limiting value E∞ of the mean square prediction error.
          c) Compute the flatness measure γx2 .

      22. Consider a WSS process x(n) with autocorrelation R(k). Let the 3 × 3 autocorrelation
          matrix have the form
                                                       ⎡      ⎤
                                                        1ρα
                                                      ⎢       ⎥
                                                 R3 = ⎣ ρ 1 ρ ⎦ ,                                 (P.22)
                                                        αρ1

          where ρ and α are real and −1 < ρ < 1. (Thus, R(0) = 1, R(1) = ρ, and R(2) = α.) If
          you are told that x(n) is a line spectral process of degree = 2, what would be the permissible
          values of α? For each of these permissible values of α, do the following:
          a) Find the line frequencies ω1 and ω2 and the powers at these line frequencies.
          b) Find the recursive difference equation satisfied by R(k).
          c) Find a closed form expression for R(k).
          d) Compute R(3) and R(4).

      23. We now provide a direct, simpler, proof of the result in Theorem 7.4. Let y(n) be a WSS
          random process such that if it is input to the FIR filter 1 − αz−1 the output is identically
          zero (see Fig. P.23)
          a) Show that the constant α must have unit magnitude. (Assume, of course, that y(n) itself
             is not identically zero.)
          b) Now let x(n) be a WSS process satisfying the difference equation

                                                          
                                                          L
                                             x(n) = −            ai*x(n − i).                     (P.23)
                                                           i=1

                                                                   L
             That is, if x(n) is input to the FIR filter A(z) = 1 + i=1 ai*z−i , the output is identically
             zero. Furthermore, let there be no such FIR filter of lower order. Show then that all the
             zeros of A(z) must be on the unit circle.



                               y(n)          1 − α z −1              = 0 for all n


                                           FIGURE P.23
                                                                                  PROBLEMS        169

24. Let Rm be the m × m autocorrelation matrix of a Linespec(L) process x(n). We know that
    RL has rank L and RL+1 is singular, with rank L. Using (some or all of) the facts that Rm is
    Hermitian, Toeplitz, and positive semidefinite for any m, show the following.
    a) Rm has rank m for all m ≤ L.
    b) Rm has rank exactly L for any m ≥ L.

25. Show that the sum of sinusoids considered in Example 7.3 is indeed WSS under the three
    conditions stated in the example.

26. Suppose a sequence of numbers

                                           α0 , α1 , α2 , . . .                           (P.26a)

    tends to a limit α. This means that, given  > 0, there exits a finite integer N, such that

                                     |αi − α| <         for i > N.                       (P.26b)

    a) Show that

                                              1 
                                                    M−1
                                          lim     αi = α.                                 (P.26c)
                                         M→∞ M
                                                     i=0
                                                         M−1
       In other words, define a sequence βM = (1/M) i=0 αi and show that it tends to α.
    b) Suppose f (x) is a continuous function for all x in a given range R. Thus, for any fixed x
       in the range, if we are given a number  > 0, we can find a number δ > 0 such that

                                | f (x1 ) − f (x)| <      for |x1 − x| < δ.             (P.26d )

       Let all members αi of the sequence (P.26a) be in the range R. Show then that
                                                 "       #
                                  lim f (αi ) = f lim αi = f (α).                   (P.26e)
                                   i→∞                i→∞



27. Let R1 (k) and R2 (k) represent the autocorrelations of two WSS random processes. Which
    of the following sequences represent valid autocorrelations?
    a) R1 (k) + R2 (k)
    b) R1 (k) − R2 (k)
    c) R1 (k)R2 (k)
        
    d)    n R1 (n)R2 (k − n)
    e) R1 (2k)
170   THE THEORY OF LINEAR PREDICTION
                       
                        R1 (k/2) for k even
           f) R(k) =
                        0         for k odd.
      28. Let R(k) be the autocorrelation of a zero mean WSS process and suppose R(k1 ) = R(k2 ) = 0
          for some k2 > k1 > 0. Does this mean that R(k) is periodic? Note. If k1 = 0 and k2 > 0,
          then the answer is yes, as asserted by Theorem 7.2.

      29. Find an example of the autocorrelation R(k) for a WSS process such that, for some m,
          the autocorrelation matrices Rm and Rm+1 have the same minimum eigenvalue, but the
          minimum eigenvalue of Rm+2 is smaller.

      30. Let x and y be real random variables such that E[xy] = E[x]E[y], that is, they are uncorrelated.
          This does not, in general, imply that E[x k yn ] = E[x k ]E[yn ] (i.e., that x k and yn are
          uncorrelated) for arbitrary positive integers k, n. Prove this statement with an example.

      31. It is well-known that the power spectrum Sxx (e jω ) of a scalar WSS process is nonnegative
          (Papoulis, 1965; Peebles, 1987). Using this, show that the power spectral matrix Sxx (e jω )
          of a WSS vector process x(n) is positive semidefinite.

      32. Let x(n) and y(n) be zero mean WSS processes, with power spectra Sxx (e jω ) and Syy (e jω ).
          Suppose Sxx (e jω )Syy (e jω ) = 0 for all ω , that is, these spectra do not overlap as demonstrated
          in the figure.
          a) This does not mean that the processes are necessarily uncorrelated. Demonstrate this.
          b) Assume, however, that the above processes are not only WSS but also jointly WSS (i.e.,
              E[x(n)y*(n − k)] does not depend on n). Show then that they are indeed uncorrelated.




                                              jω
                                     Sxx (e    )                    jω
                                                           Syy (e    )

                                                                                   ω
                           0                                                 2π

                                              FIGURE P.32



                                                   •   •   •   •
                                                                                                  171




                                    References
 1. Anderson, B. D. O., and Moore, J. B. Optimal filtering, Prentice-Hall, Englewood Cliffs, NJ,
    1979.
 2. Antoniou, A. Digital signal processing: signals, systems, and filters, McGraw-Hill, New York,
    2006.
 3. Antoniou, A., and Lu, W.-S. Practical optimization: algorithms and engineering applications,
    Springer, New York, 2007.
 4. Atal, B. S., and Schroeder, M. R. ‘‘Adaptive predictive coding of speech signals,’’ Bell. Sys.
    Tech. J., vol. 49, pp. 1973--1986, October 1970. doi:10.1109/ICASSP.1980.1170967
 5. Atal, B. S., and Schroeder, M. R. ‘‘Predictive coding of speech signals and subjective error
    criteria,’’ IEEE Trans. Acoust. Speech Signal Process., vol. 27, pp. 247--254, June 1979.
 6. Balabanian, N., and Bickart, T. A. Electrical network theory, John Wiley & Sons, New York,
    1969.
 7. Bellman, R. Introduction to matrix analysis, McGraw-Hill, New York, 1960.
 8. Berlekamp, E. R. Algebraic coding theory, McGraw-Hill, New York, 1969.
 9. Blahut, R. E. Fast algorithms for digital signal processing, Addison-Wesley, Reading, MA, 1985.
10. Burg, J. P. ‘‘The relationship between maximum entropy spectra and maximum likelihood
    spectra,’’ Geophysics, vol. 37, pp. 375--376, April 1972. doi:10.1190/1.1440265
11. Chandrasekhar, S. ‘‘On the radiative equilibrium of a stellar atmosphere,’’ Astrophys. J., vol.
    106, pp. 152--216, 1947.
12. Chellappa, R., and Kashyap, R. L. ‘‘Texture synthesis using 2-D noncausal autoregressive
    models,’’ IEEE Trans. Acoust. Speech Signal Process., vol. 33, pp. 194--203, February 1985.
13. Chong, E. K. P., and Żak, S. H. An introduction to optimization, John Wiley & Sons, New
    York, 2001. doi:10.1109/MAP.1996.500234
14. Churchill, R. V., and Brown, J. W. Introduction to complex variables and applications, McGraw-
    Hill, New York, 1984.
15. Cover, T. M., and Thomas, J. A. Elements of information theory, John Wiley & Sons, New
    York, 1991.
16. Deller, J. R., Proakis, J. G., and Hansen, J. H. L. Discrete-time processing of speech signals,
    Macmillan, New York, 1993.
172     THE THEORY OF LINEAR PREDICTION
      17. Friedlander, B. ‘‘A lattice algorithm for factoring the spectrum of a moving average pro-
          cess,’’ IEEE Trans. Automat. Control, vol. 28, pp. 1051--1055, November 1983. doi:10.1109/
          TAC.1983.1103175
      18. Gersho, A., and Gray, R. M. Vector quantization and signal compression, Kluwer Academic
          Press, Boston, 1992.
      19. Golub, G. H., and Van Loan, C. F. Matrix computations, Johns Hopkins University Press,
          Baltimore, MD, 1989.
      20. Gorokhov, A., and Loubaton, P. ‘‘Blind identification of MIMO-FIR systems: a general-
          ized linear prediction approach,’’ Signal Process., vol. 73, pp. 105--124, 1999. doi:10.1016/
          S0165-1684(98)00187-X
      21. Gray, Jr., A. H. ‘‘Passive cascaded lattice digital filters,’’ IEEE Trans. Circuits Syst., vol. CAS-27,
          pp. 337--344, May 1980.
      22. Gray, R. M. ‘‘On asymptotic eigenvalue distribution of Toeplitz matrices,’’ IEEE Trans. Inform.
          Theory, vol. 18, pp. 725--730, November 1972.
      23. Gray, Jr., A. H., and Markel, J. D. ‘‘Digital lattice and ladder filter synthesis,’’ IEEE Trans. Audio
          Electroacoust. vol. AU-21, pp. 491--500, December 1973. doi:10.1109/TAU.1973.1162522
      24. Gray, Jr., A. H., and Markel, J. D. ‘‘A normalized digital filter structure,’’ IEEE Trans.
          Acoust. Speech Signal Process., vol. ASSP-23, pp. 268--277, June 1975. doi:10.1109/TASSP.
          1975.1162680
      25. Grenander, U., and Szego, G. Toeplitz forms and their applications, University of California
          Press, Berkeley, CA, 1958.
      26. Hayes, M. H. Statistical digital signal processing and modeling, John Wiley & Sons, New York,
          1996.
      27. Haykin, S. Adaptive filter theory, Prentice-Hall, Upper Saddle River, NJ, 1986 and 2002.
      28. Horn R. A., and Johnson, C. R. Matrix analysis, Cambridge University Press, Cambridge,
          1985.
      29. Itakura, F. ‘‘Line spectrum representation of linear predictive coefficients of speech signals,’’ J.
          Acoust. Soc. Am., vol. 57, 1975.
      30. Itakura, F., and Saito, S. ‘‘A statistical method for estimation of speech spectral density and
          formant frequencies,’’ Trans IECE Jpn., vol. 53-A, pp. 36--43, 1970.
      31. Jayant, N. S., and Noll, P. Digital coding of waveforms, Prentice-Hall, Englewood Cliffs, NJ,
          1984. doi:10.1016/0165-1684(85)90053-2
      32. Kailath, T. ‘‘A view of three decades of linear filtering theory,’’ IEEE Trans. Inform. Theory,
          vol. 20, pp. 146--181, March 1974. doi:10.1109/TIT.1974.1055174
      33. Kailath, T. Linear systems, Prentice Hall, Inc., Englewood Cliffs, NJ, 1980.
                                                                                  REFERENCES        173

34. Kailath, T., Kung S-Y., and Morf, M. ‘‘Displacement ranks of a matrix,’’ Am. Math. Soc., vol.
    1, pp. 769--773, September 1979. doi:10.1016/0022-247X(79)90124-0
35. Kailath, T., Sayed, A. H., and Hassibi, B. Linear estimation, Prentice-Hall, Englewood Cliffs,
    NJ, 2000.
36. Kang, G. S., and Fransen, L. J. ‘‘Application of line-spectrum pairs to low-bit-rate speech
    coders,’’ Proc. IEEE Int. Conf. Acoust. Speech Signal Process., pp. 7.3.1--7.3.4, May 1995.
37. Kay, S. M., and Marple, S. L., Jr., ‘‘Spectrum analysis---a modern perspective,’’ Proc. IEEE,
    vol. 69, pp. 1380--1419, November 1981.
38. Kay, S. M. Modern spectral estimation: theory and application, Prentice-Hall, Englewood Cliffs,
    NJ, 1988.
39. Kolmogorov, A. N. ‘‘Interpolation and extrapolation of stationary random sequences,’’ Izv.
    Akad. Nauk SSSR Ser. Mat. 5, pp. 3--14, 1941.
40. Kreyszig, E. Advanced engineering mathematics, John Wiley & Sons, New York, 1972.
41. Kumaresan, R., and Tufts, D. W. ‘‘Estimating the angles of arrival of multiple plane waves,’’
    IEEE Trans. Aerosp. Electron. Syst., vol. 19, pp. 134--139, January 1983.
42. Lang, S. W., and McClellan, J. H. ‘‘A simple proof of stability for all-pole linear prediction
    models,’’ Proc. IEEE, vol. 67, pp. 860--861, May 1979.
43. Lepschy, A., Mian, G. A., and Viaro, U. ‘‘A note on line spectral frequencies,’’ IEEE Trans.
    Acoust. Speech Signal Process., vol. 36, pp. 1355--1357, August 1988. doi:10.1109/29.1664
44. Levinson, N. ‘‘The Wiener rms error criterion in filter design and prediction,’’ J. Math. Phys.,
    vol. 25, pp. 261--278, January 1947.
45. Lopez-Valcarce, R., and Dasgupta, S. ‘‘Blind channel equalization with colored sources based
    on second-order statistics: a linear prediction approach,’’ IEEE Trans. Signal Process., vol. 49,
    pp. 2050--2059, September 2001. doi:10.1109/78.942633
46. Makhoul, J. ‘‘Linear prediction: a tutorial review,’’ Proc. IEEE, vol. 63, pp. 561--580, April
    1975.
47. Makhoul, J. ‘‘Stable and efficient lattice methods for linear prediction,’’ IEEE Trans. Acoust.
    Speech Signal Process., vol. 25, pp. 423--428, October 1977.
48. Makhoul, J., Roucos, S., and Gish, H. ‘‘Vector quantization in speech coding,’’ Proc. IEEE,
    vol. 73, pp. 1551--1588, November 1985. doi:10.1109/ISCAS.2003.1206020
49. Manolakis, D. G., Ingle, V. K., and Kogon, S. M. Statistical and adaptive signal processing,
    McGraw-Hill, New York, 2000.
50. Markel, J. D., and Gray, A. H., Jr. Linear prediction of speech, Springer-Verlag, New York,
    1976.
51. Marple, S. L., Jr. Digital spectral analysis, Prentice-Hall, Englewood Cliffs, NJ, 1987.
    doi:10.1121/1.398548
174     THE THEORY OF LINEAR PREDICTION
      52. Mitra, S. K. Digital signal processing: a computer-based approach, McGraw-Hill, New York,
          2001.
      53. Moon, T. K., and Stirling, W. C. Mathematical methods and algorithms for signal processing,
          Prentice-Hall, Upper Saddle River, NJ, 2000.
      54. Oppenheim, A. V., and Schafer, R. W. Discrete-time signal processing, Prentice-Hall, Englewood
          Cliffs, NJ, 1999.
      55. Papoulis, A. Probability, random variables and stochastic processes, McGraw-Hill, New York,
          1965.
      56. Papoulis, A. ‘‘Maximum entropy and spectrum estimation: a review,’’ IEEE Trans. Acoust.
          Speech Signal Process., vol. 29, pp. 1176--1186, December 1981.
      57. Paulraj, A., Roy, R., and Kailath, T. ‘‘A subspace rotation approach to signal parameter
          estimation,’’ Proc. IEEE, vol. 74, pp. 1044--1046, July 1986.
      58. Peebles, Jr., P. Z. Probability, random variables and random signal principles, McGraw-Hill,
          New York, 1987.
      59. Pisarenko, V. F. ‘‘The retrieval of harmonics from a covariance function,’’ Geophys. J. R. Astron.
          Soc., vol. 33, pp. 347--366, 1973. doi:10.1111/j.1365-246X.1973.tb03424.x
      60. Proakis, J. G., and Manolakis, D. G. Digital signal processing: principles, alogrithms and
          applications, Prentice-Hall, Upper Saddle River, NJ, 1996.
      61. Rabiner, L. R., and Schafer, R. W. Digital processing of speech signals, Prentice-Hall, Englewood
          Cliffs, NJ, 1978.
      62. Rao, S. K., and Kailath, T. ‘‘Orthogonal digital lattice filters for VLSI implementation,’’ IEEE
          Trans. Circuits Syst., vol. CAS-31, pp. 933--945, November 1984.
      63. Robinson, E. A. ‘‘A historical perspective of spectrum estimation,’’ Proc. IEEE, vol. 70, pp.
          885--907, September 1982.
      64. Roy, R., and Kailath, T. ‘‘ESPRIT---estimation of signal parameters via rotational invariance
          techniques,’’ IEEE Trans. Acoust. Speech Signal Process., vol. 37, pp. 984--995, July 1989.
          doi:10.1109/29.32276
      65. Rudin, W. Real and complex analysis, McGraw-Hill, New York, 1974.
      66. Satorius, E. H., and Alexander S. T. ‘‘Channel equalization using adaptive lattice algorithms,’’
          IEEE Trans. Commun., vol. 27, pp. 899--905, June 1979. doi:10.1109/TCOM.1979.1094477
      67. Sayed, A. H. Fundamentals of adaptive filtering, IEEE Press, John Wiley & Sons, Hoboken,
          NJ, 2003.
      68. Schmidt, R. O. ‘‘Multiple emitter location and signal parameter estimation,’’ IEEE Trans.
          Antennas Propagation, vol. 34, pp. 276--280, March 1986 (reprinted from the Proceedings of
          the RADC Spectrum Estimation Workshop, 1979). doi:10.1109/TAP.1986.1143830
                                                                                    REFERENCES         175

69. Schroeder, M. Computer speech: recognition, compression and synthesis, Springer-Verlag, Berlin,
    1999.
70. Soong, F. K., and Juang B.-H, ‘‘Line spectrum pair (LSP) and speech data compression,’’ Proc.
    IEEE Int. Conf. Acoust. Speech Signal Process., pp. 1.10.1--1.10.4, March 1984.
71. Soong, F. K., and Juang B.-H, ‘‘Optimal quantization of LSP parameters,’’ IEEE Trans. Speech
    Audio Process., vol. 1, pp. 15--24, January 1993.
72. Strobach, P. Linear prediction theory, Springer-Verlag, Berlin, 1990.
73. Therrien, C. W. Discrete random signals and statistical signal processing, Prentice-Hall, Upper
    Saddle River, NJ, 1992.
74. Vaidyanathan, P. P. ‘‘The discrete-time bounded-real lemma in digital filtering,’’ IEEE. Trans.
    Circuits Syst., vol. CAS-32, pp. 918--924, September 1985. doi:10.1109/TCS.1985.1085815
75. Vaidyanathan, P. P. ‘‘Passive cascaded lattice structures for low sensitivity FIR filter design,
    with applications to filter banks,’’ IEEE Trans. Circuits Syst., vol. CAS-33, pp. 1045--1064,
    November 1986. doi:10.1109/TCS.1986.1085867
76. Vaidyanathan, P. P. ‘‘On predicting a band-limited signal based on past sample values,’’ Proc.
    IEEE, vol. 75, pp. 1125--1127, August 1987.
77. Vaidyanathan, P. P. Multirate systems and filter banks, Prentice-Hall, Englewood Cliffs, NJ,
    1993. doi:10.1109/78.382395
78. Vaidyanathan, P. P., and Mitra, S. K. ‘‘Low passband sensitivity digital filters: A generalized
    viewpoint and synthesis procedures,’’ Proc. IEEE, vol. 72, pp. 404--423, April 1984.
79. Vaidyanathan, P. P., and Mitra, S. K. ‘‘A general family of multivariable digital lattice filters,’’
    IEEE. Trans. Circuits Syst., vol. CAS-32, pp. 1234--1245, December 1985. doi:10.1109/
    TCS.1985.1085661
80. Vaidyanathan, P. P., Mitra, S. K., and Neuvo, Y. ‘‘A new approach to the realization of low
    sensitivity IIR digital filters,’’ IEEE Trans. Acoust. Speech Signal Process., vol. ASSP-34, pp.
    350--361, April 1986. doi:10.1109/TASSP.1986.1164829
81. Vaidyanathan, P. P., Tuqan, J., and Kirac, A. ‘‘On the minimum phase property of prediction-
    error polynomials,’’ IEEE Signal Process. Lett., vol. 4, pp. 126--127, May 1997. doi:10.1109/
    97.575554
82. Van Trees, H. L. Optimum array processing, John Wiley & Sons, New York, 2002.
83. Wainstein, L. A., and Zubakov, V. D. Extraction of signals from noise, Prentice-Hall, London,
    1962. doi:10.1119/1.1969250
84. Weiner, N. Extrapolation, interpolation and smoothing of stationary time series, John Wiley &
    Sons, New York, 1949.
85. Weiner, N., and Masani, P. ‘‘The prediction theory of multivariate stochastic processes,’’ Acta
    Math., part 1: vol. 98, pp. 111--150, 1957; part 2: vol. 99, pp. 93--137, 1958.
                                                                                                   177




                           Author Biography
P. P. Vaidyanathan received his bachelor of science, bachelor of technology, and master of
technology degrees from the University of Calcutta, India. He obtained his doctor of philosophy
degree from the University of California at Santa Barbara and became a faculty of the Department
of Electrical Engineering at the California Institute of Technology in 1983. He served as the
executive officer of the Department of Electrical Engineering at Caltech for the period 2002–2005.
He has received several awards for excellence in teaching at Caltech. He is the author of the book
Multirate Systems and Filter Banks and has authored or coauthored more than 370 articles in the
signal processing area. His research interests include digital filter banks, digital communications,
image processing, genomic signal processing, and radar signal processing. He is an IEEE Fellow
(1991), past distinguished lecturer of the IEEE SP society, and recipient of the IEEE ASSP Senior
Paper Award and the S. K. Mitra Memorial Award (IETE, India). He was the Eliahu and Joyce
Jury lecturer at the University of Miami for 2007. He received the F. E. Terman Award (ASEE)
in 1995, the IEEE CAS Society’s Golden Jubilee Medal in 1999, and the IEEE Signal Processing
Society’s Technical Achievement Award in 2001.
                                                                                    179




                                            Index

Acoustical tube, 114                           Autocorrelation inequality, 157
All-pass                                       Autocorrelation matching, 47
  phase response, 112                            filter, 49
All-pass filters, 31                           Autocorrelation matrix
All-pass property, 33                            properties, 10
  MIMO, 138                                    Autocorrelation method, 16
Allpole filter, 37                             Autocorrelation sequence, 7
Alternation property, 112                      Autoregressive(AR), 27, 41
AM--GM inequality, 69
Antidiagonal matrix, 165                       Backward prediction polynomial, 32
AR (autoregressive), 27, 41                    Backward predictor, 31
AR approximation, 44                           Band-limited signal
AR model                                         prediction of, 85
  estimation, 55                               Burg’s relation, 127
  power spectrum, 50
AR modeling, 44                                Compression, 58
AR process                                     Condition number, 13
  maximum entropy, 83                          Condition number and spectrum, 165
  summary, 62                                  Coprimality
AR property and stalling, 42                     predictor polynomials, 148
Augmented normal equation, 9                   Coprime matrices, 147
Autocorrelation                                Covariance method, 17
  determinant, 15
  eigenstructure, 103                          Dagger notation, 3
  estimating, 16                               Determinant and MSE, 79
  recursion, 161                               Determinant of autocorrelation, 15
  singularity, 13                              Differential entropy, 82
Autocorrelation and periodicity, 92            Displacement rank, 29
Autocorrelation extrapolation, 46, 53, 91      Downward recursion, 38
180     THE THEORY OF LINEAR PREDICTION
      Eigenstructure of autocorrelation, 103     Irreducible MFDs, 147
      Eigenvalues and power spectrum, 12         Irreducible MFDs and poles, 147
      Entropy
        differential, 82                         Kailath, 2
        Gaussian, 82                             Kolmogorov, 1
      Entropy maximization, 83
      Entropy maximum                            Lattice coefficients, 23
        AR process, 83                           Lattice structure
      Entropy of prediction error, 85              derivation, 35
      Ergodicity, 96                               FIR, 36
      Error covariance matrix, 118                 FIR, vector LPC, 130
      Error spectrum                               IIR, 36
        flatness, 76                               IIR, vector LPC, 135
      ESPRIT, 109                                  normalized, vector LPC, 137
      Estimating autocorrelations, 16              stability, 37
      Estimation                                   symmetrical, vector LPC, 133
        AR model, 55                             Lattice structures, 31
      Estimation from noisy data, 164            Levinson, 2
      Extrapolation of autocorrelation, 46, 53   Levinson’s recursion, 19
                                                   downward, 38
      FIR lattice, 36                              history, 29
      Flatness, 65                                 initialization, 22
        error spectrum, 76                         properties, 23
      Formants in speech, 114                      summary, 22
      Forward predictor, 5                         upward, 38
      Full predictability, 14                      vector case, summary, 128
                                                 Line frequencies, 15, 87
      Harmonic process, 92                       Line spectra
      History of linear prediction, 1              extrapolation, 91
      Homogeneous difference equation, 90          periodicity, 92
                                                   unit-circle zeros, 91
      IIR lattice, 36                            Line spectral paremeters, 93
        stability, 37                            Line spectral process, 15, 87
      Inverse filter                               autocorrelation, 88
        stability proof, 159                       characteristic polynomial, 90
      Inverse filter (IIR), 6                      rank saturation, 91
                                                                            INDEX   181

Line spectrum                             Modulus property, 112
  amplitude, 92                           Moving average (MA) process, 61
  conditions for, 95                      MSE and determinant, 79
  ergodicity, 96                          MUSIC, 109
  power, 92, 105
  prediction polynomial, 98               Noise-excited coders, 60
  summary, 100                            Normal equations, 7
Line spectrum in noise, 102               Normalized error, 130
Line spectrum pairs                       Notations, 3
  definition, 113
Line-spectrum pair (LSP), 61              Optimal error covariance, 119
Linear dependence, 156                    Optimal linear estimator, 153
Linear estimation, 151                    Optimum predictor, 5
Linear prediction                         Orthogonality
  MIMO, 117                                 geometric interpretation, 154
  vector process, 117                       prediction errors, 34
Linear predictive coding (LPC), 6         Orthogonality of error, 6
Linespec(L), 87                           Orthogonality principle, 151
LPC for compression, 58
LSP, 113                                  Paraunitary property, 138
LSPs                                        propagation, 141
  properties, 113                         Parcor, 22
                                            bound, 24
Makhoul, 2                                  vector LPC, 124
Masani, 1                                 Partial correlation, 22
Matrix fraction descriptions (MFD), 146   Perceptual quality and LSP, 114
Maximum entropy, 81                       Periodic autocorrelation, 92
Maximum entropy estimate, 53              Periodic process, 92
Maximum entropy method, 83                Phase response
Mean squared error, 5                       all-pass, 112
MFD (matrix fraction descriptions), 146   Pisarenko’s harmonic decomposition, 105
Minimum mean square error estimate, 151   Pitch-excited coders, 60
Minimum-norm methods, 109                 Poles of MIMO lattice, 142
Minimum-phase                             Poles, MIMO case, 142
 vector LPC, 148                          Positivity of power spectrum, 170
Minimum-phase property, 7                 Power spectrum, 12
182     THE THEORY OF LINEAR PREDICTION
        AR model, 50                      Reflection coefficients, 23
        estimate, 53                        origin, 114
        positivity, 170                   Right common divisor (rcd), 147
      Power spectrum and                  Right coprime matrices, 147
           eigenvalues, 12
      Predictability and                  Singularity of autocorrelation, 13, 156
           spectral flatness, 65          Sinusoids
      Predictability measure, 81            identification, 93
      Predictability, full, 14              in noise, 102
      Prediction error, 6                 Spectral factorization, 55
        closed form (AR), 65              Spectral flatness, 65
        limit, 16                           and predictability, 65
        orthogonality, 34                   AR case, 72
      Prediction error bound, 75            definition, 69
      Prediction error limit              Stability
        integral, 81                        inverse filter, proof, 159
        proof, 79                           of MIMO lattice, 144
      Prediction filter (FIR), 6            and quantization, 60
      Prediction order, 5                   inverse filter, 7
      Prediction polynomial, 6              lattice structure, 37
        backward, 32                      Stalling, 26
        line spectral, 98                   and AR property, 42
      Predictor                             vector LPC, 144
        backward, 31                      Symmetrical lattice, 133
        forward, 5                        Szego’s theorem, 80

      Quantization and stability, 60      Tilde notation, 3
                                          Toeplitz, 7
      Rank saturation                     Toeplitz autocorrelation, validity, 166
        line spectral process, 91         Toeplitz property
      RCD (right common divisor), 147       proof, 11
      Reactance in circuits, 114          Transfer matrices, 129
      Real random sinusoid, 96              properties, 146
      Recursion
        AR autocorrelation, 161           Unimodular matrices, 147
      Recursive difference equation, 41   Upward recursion, 38
                                                                     INDEX   183

Vector LPC, 117                     Vector processes, 117
  augmented normal equations, 120   Voiced and unvoiced sounds, 60
  augmented normal equations,
     backward, 122                  Whitening effect, 26
  backward prediction, 121           vector LPC, 144
  error covariance, 118             Wiener, 1
  Levinson Properties, 126          Wiener-Hopf equations, 7
  Levinson summary, 125             WSS
  Levinson’s recursion, 122          conditions for, 94, 95
  normal equations, 120
  parcor, 124                       Yule-Walker equations, 7
  prediction polynomial, 118



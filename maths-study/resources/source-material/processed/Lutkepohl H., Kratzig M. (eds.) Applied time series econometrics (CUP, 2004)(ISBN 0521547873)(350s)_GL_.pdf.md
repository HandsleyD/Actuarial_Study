---
normalized_id: shared-pdf-reference-lutkepohl-h-kratzig-m-eds-applied-time-series-econometrics-cup-2004-isbn-0521547873-350s-gl
exam_code: SHARED
material_scope: lutkepohl h., kratzig m. (eds.) applied time series econometrics (cup, 2004)(isbn 0521547873)(350s)_gl_.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Lutkepohl H., Kratzig M. (eds.) Applied time series econometrics (CUP, 2004)(ISBN 0521547873)(350s)_GL_.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-lutkepohl-h-kratzig-m-eds-applied-time-series-econometrics-cup-2004-isbn-0521547873-350s-gl

Applied Time Series Econometrics

Time series econometrics is a rapidly evolving field. In particular, the cointegration
revolution has had a substantial impact on applied analysis. As a consequence of
the fast pace of development, there are no textbooks that cover the full range of
methods in current use and explain how to proceed in applied domains. This gap in
the literature motivates the present volume. The methods are sketched out briefly to
remind the reader of the ideas underlying them and to give sufficient background for
empirical work. The volume can be used as a textbook for a course on applied time
series econometrics. The coverage of topics follows recent methodological develop-
ments. Unit root and cointegration analysis play a central part. Other topics include
structural vector autoregressions, conditional heteroskedasticity, and nonlinear and
nonparametric time series models. A crucial component in empirical work is the
software that is available for analysis. New methodology is typically only gradually
incorporated into the existing software packages. Therefore a flexible Java interface
has been created that allows readers to replicate the applications and conduct their
own analyses.

Helmut Lütkepohl is Professor of Economics at the European University Institute in
Florence, Italy. He is on leave from Humboldt University, Berlin, where he has been
Professor of Econometrics in the Faculty of Economics and Business Administration
since 1992. He had previously been Professor of Statistics at the University of Kiel
(1987–92) and the University of Hamburg (1985–87) and was Visiting Assistant
Professor at the University of California, San Diego (1984–85). Professor Lütkepohl
is Associate Editor of Econometric Theory, the Journal of Applied Econometrics,
Macroeconomic Dynamics, Empirical Economics, and Econometric Reviews. He
has published extensively in learned journals and books and is author, coauthor
and editor of several books on econometrics and time series analysis. Professor
Lütkepohl is the author of Introduction to Multiple Time Series Analysis (1991) and
a Handbook of Matrices (1996). His current teaching and research interests include
methodological issues related to the study of nonstationary, integrated time series,
and the analysis of the transmission mechanism of monetary policy in the euro area.

Markus Krätzig is a doctoral student in the Department of Economics at Humboldt
University, Berlin.
                     Themes in Modern Econometrics

                                Managing Editor
                    PETER C.B. PHILLIPS, Yale University

                                  Series Editors
        ERIC GHYSELS, University of North Carolina, Chapel Hill
              RICHARD J. SMITH, University of Warwick

Themes in Modern Econometrics is designed to service the large and growing
need for explicit teaching tools in econometrics. It will provide an organized
sequence of textbooks in econometrics aimed squarely at the student popula-
tion and will be the first series in the discipline to have this as its express aim.
Written at a level accessible to students with an introductory course in econo-
metrics behind them, each book will address topics or themes that students and
researchers encounter daily. Although each book will be designed to stand alone
as an authoritative survey in its own right, the distinct emphasis throughout will
be on pedagogic excellence.

                               Titles in the Series

            Statistics and Econometric Models: Volumes 1 and 2
             CHRISTIAN GOURIEROUX and ALAIN MONFORT
                        Translated by QUANG VOUNG
                      Time Series and Dynamic Models
             CHRISTIAN GOURIEROUX and ALAIN MONFORT
               Translated and edited by GIAMPIERO GALLO
             Unit Roots, Cointegration, and Structural Change
                    G.S. MADDALA and IN-MOO KIM
                Generalized Method of Moments Estimation
                        Edited by LÁSZLÓ MÁTYÁS
                         Nonparametric Econometrics
                     ADRIAN PAGAN and AMAN ULLAH
              Econometrics of Qualitative Dependent Variables
                          CHRISTIAN GOURIEROUX
                       Translated by PAUL B. KLASSEN
            The Econometric Analysis of Seasonal Time Series
                 ERIC GHYSELS and DENISE R. OSBORN
        Semiparametric Regression for the Applied Econometrician
                              ADONIS YATCHEW
APPLIED TIME SERIES
ECONOMETRICS

Edited by

HELMUT LÜTKEPOHL
European University Institute, Florence


MARKUS KRÄTZIG
Humboldt University, Berlin
cambridge university press
Cambridge, New York, Melbourne, Madrid, Cape Town, Singapore, São Paulo

Cambridge University Press
The Edinburgh Building, Cambridge cb2 2ru, UK
Published in the United States of America by Cambridge University Press, New York
www.cambridge.org
Information on this title: www.cambridge.org/9780521839198

© Cambridge University Press 2004


This publication is in copyright. Subject to statutory exception and to the provision of
relevant collective licensing agreements, no reproduction of any part may take place
without the written permission of Cambridge University Press.

First published in print format 2004

isbn-13   978-0-511-21739-5 eBook (NetLibrary)
isbn-10   0-511-21739-0 eBook (NetLibrary)

isbn-13   978-0-521-83919-8 hardback
isbn-10   0-521-83919-x hardback

isbn-13   978-0-521-54787-1 paperback
isbn-10   0-521-54787-3 paperback

Cambridge University Press has no responsibility for the persistence or accuracy of urls
for external or third-party internet websites referred to in this publication, and does not
guarantee that any content on such websites is, or will remain, accurate or appropriate.
HL   To my delightful wife, Sabine

MK   To my parents
        Contents




Preface                                                          page xv
Notation and Abbreviations                                           xix
List of Contributors                                                xxv

1 Initial Tasks and Overview                                          1
  Helmut Lütkepohl
  1.1 Introduction                                                    1
  1.2 Setting Up an Econometric Project                               2
  1.3 Getting Data                                                    3
  1.4 Data Handling                                                   5
  1.5 Outline of Chapters                                             5

2 Univariate Time Series Analysis                                     8
  Helmut Lütkepohl
  2.1 Characteristics of Time Series                                  8
  2.2 Stationary and Integrated Stochastic Processes                 11
      2.2.1 Stationarity                                             11
      2.2.2 Sample Autocorrelations, Partial Autocorrelations,
            and Spectral Densities                                   12
      2.2.3 Data Transformations and Filters                         17
  2.3 Some Popular Time Series Models                                22
      2.3.1 Autoregressive Processes                                 22
      2.3.2 Finite-Order Moving Average Processes                    25
      2.3.3 ARIMA Processes                                          27
      2.3.4 Autoregressive Conditional Heteroskedasticity            28
      2.3.5 Deterministic Terms                                      30
  2.4 Parameter Estimation                                           30
      2.4.1 Estimation of AR Models                                  30
      2.4.2 Estimation of ARMA Models                                32
  2.5 Model Specification                                            33
                                                                      ix
x         Contents

         2.5.1 AR Order Specification Criteria                    33
         2.5.2 Specifying More General Models                     35
     2.6 Model Checking                                           40
         2.6.1 Descriptive Analysis of the Residuals              40
         2.6.2 Diagnostic Tests of the Residuals                  43
         2.6.3 Stability Analysis                                 47
     2.7 Unit Root Tests                                          53
         2.7.1 Augmented Dickey–Fuller (ADF) Tests                54
         2.7.2 Schmidt–Phillips Tests                             57
         2.7.3 A Test for Processes with Level Shift              58
         2.7.4 KPSS Test                                          63
         2.7.5 Testing for Seasonal Unit Roots                    65
     2.8 Forecasting Univariate Time Series                       70
     2.9 Examples                                                 73
         2.9.1 German Consumption                                 73
         2.9.2 Polish Productivity                                78
    2.10 Where to Go from Here                                    85

3 Vector Autoregressive and Vector Error Correction Models         86
  Helmut Lütkepohl
  3.1 Introduction                                                 86
  3.2 VARs and VECMs                                               88
      3.2.1 The Models                                             88
      3.2.2 Deterministic Terms                                    91
      3.2.3 Exogenous Variables                                    92
  3.3 Estimation                                                   93
      3.3.1 Estimation of an Unrestricted VAR                      93
      3.3.2 Estimation of VECMs                                    96
      3.3.3 Restricting the Error Correction Term                 105
      3.3.4 Estimation of Models with More General Restrictions
            and Structural Forms                                  108
  3.4 Model Specification                                         110
      3.4.1 Determining the Autoregressive Order                  110
      3.4.2 Specifying the Cointegrating Rank                     112
      3.4.3 Choice of Deterministic Term                          120
      3.4.4 Testing Restrictions Related to the Cointegration
            Vectors and the Loading Matrix                        121
      3.4.5 Testing Restrictions for the Short-Run Parameters
            and Fitting Subset Models                             122
  3.5 Model Checking                                              125
      3.5.1 Descriptive Analysis of the Residuals                 125
      3.5.2 Diagnostic Tests                                      127
      3.5.3 Stability Analysis                                    131
        Contents                                                xi

  3.6 Forecasting VAR Processes and VECMs                      140
      3.6.1 Known Processes                                    141
      3.6.2 Estimated Processes                                143
  3.7 Granger-Causality Analysis                               144
      3.7.1 The Concept                                        144
      3.7.2 Testing for Granger-Causality                      148
  3.8 An Example                                               150
  3.9 Extensions                                               158

4 Structural Vector Autoregressive Modeling and Impulse
  Responses                                                    159
  Jörg Breitung, Ralf Brüggemann, and Helmut Lütkepohl
  4.1 Introduction                                             159
  4.2 The Models                                               161
  4.3 Impulse Response Analysis                                165
       4.3.1 Stationary VAR Processes                          165
       4.3.2 Impulse Response Analysis of Nonstationary VARs
              and VECMs                                        167
  4.4 Estimation of Structural Parameters                      172
       4.4.1 SVAR Models                                       172
       4.4.2 Structural VECMs                                  175
  4.5 Statistical Inference for Impulse Responses              176
       4.5.1 Asymptotic Estimation Theory                      176
       4.5.2 Bootstrapping Impulse Responses                   177
       4.5.3 An Illustration                                   179
  4.6 Forecast Error Variance Decomposition                    180
  4.7 Examples                                                 183
       4.7.1 A Simple AB-Model                                 183
       4.7.2 The Blanchard–Quah Model                          185
       4.7.3 An SVECM for Canadian Labor Market Data           188
  4.8 Conclusions                                              195

5 Conditional Heteroskedasticity                               197
  Helmut Herwartz
  5.1 Stylized Facts of Empirical Price Processes              197
  5.2 Univariate GARCH Models                                  198
      5.2.1 Basic Features of GARCH Processes                  199
      5.2.2 Estimation of GARCH Processes                      201
      5.2.3 Extensions                                         203
      5.2.4 Blockdiagonality of the Information Matrix         206
      5.2.5 Specification Testing                              207
      5.2.6 An Empirical Illustration with Exchange Rates      207
  5.3 Multivariate GARCH Models                                212
xii        Contents

         5.3.1 Alternative Model Specifications              214
         5.3.2 Estimation of Multivariate GARCH Models       217
         5.3.3 Extensions                                    218
         5.3.4 Continuing the Empirical Illustration         220

6 Smooth Transition Regression Modeling                      222
  Timo Teräsvirta
      6.1 Introduction                                       222
      6.2 The Model                                          222
      6.3 The Modeling Cycle                                 225
          6.3.1 Specification                                225
          6.3.2 Estimation of Parameters                     228
          6.3.3 Evaluation                                   229
      6.4 Two Empirical Examples                             234
          6.4.1 Chemical Data                                234
          6.4.2 Demand for Money (M1) in Germany             238
      6.5 Final Remarks                                      242

7 Nonparametric Time Series Modeling                         243
  Rolf Tschernig
  7.1 Introduction                                           243
  7.2 Local Linear Estimation                                245
       7.2.1 The Estimators                                  245
       7.2.2 Asymptotic Properties                           248
       7.2.3 Confidence Intervals                            250
       7.2.4 Plotting the Estimated Function                 251
       7.2.5 Forecasting                                     254
  7.3 Bandwidth and Lag Selection                            254
       7.3.1 Bandwidth Estimation                            256
       7.3.2 Lag Selection                                   258
       7.3.3 Illustration                                    261
  7.4 Diagnostics                                            262
  7.5 Modeling the Conditional Volatility                    263
       7.5.1 Estimation                                      264
       7.5.2 Bandwidth Choice                                265
       7.5.3 Lag Selection                                   266
       7.5.4 ARCH Errors                                     267
  7.6 Local Linear Seasonal Modeling                         268
       7.6.1 The Seasonal Nonlinear Autoregressive Model     269
       7.6.2 The Seasonal Dummy Nonlinear Autoregressive
             Model                                           270
       7.6.3 Seasonal Shift Nonlinear Autoregressive Model   271
        Contents                                              xiii

  7.7 Example I: Average Weekly Working Hours in the United
      States                                                  272
  7.8 Example II: XETRA Dax Index                             280

8 The Software JMulTi                                         289
  Markus Krätzig
  8.1 Introduction to JMulTi                                  289
      8.1.1 Software Concept                                  289
      8.1.2 Operating JMulTi                                  290
  8.2 Numbers, Dates, and Variables in JMulTi                 290
      8.2.1 Numbers                                           290
      8.2.2 Numbers in Tables                                 291
      8.2.3 Dates                                             291
      8.2.4 Variable Names                                    292
  8.3 Handling Data Sets                                      292
      8.3.1 Importing Data                                    292
      8.3.2 Excel Format                                      292
      8.3.3 ASCII Format                                      293
      8.3.4 JMulTi .dat Format                                293
  8.4 Selecting, Transforming, and Creating Time Series       293
      8.4.1 Time Series Selector                              293
      8.4.2 Time Series Calculator                            295
  8.5 Managing Variables in JMulTi                            296
  8.6 Notes for Econometric Software Developers               296
      8.6.1 General Remark                                    296
      8.6.2 The JStatCom Framework                            297
      8.6.3 Component Structure                               297
  8.7 Conclusion                                              299

References                                                    301
Index                                                         317
         Preface




Time series econometrics is a rapidly evolving field. In particular, the cointegra-
tion revolution has had a substantial impact on applied work. As a consequence
of the fast development there are no textbooks that cover the full range of meth-
ods in current use and at the same time explain how to proceed in applied work.
This gap in the literature motivates the present volume. It is not an introductory
time series textbook but assumes that the reader has some background in time
series analysis. Therefore the methods are only sketched briefly to remind the
reader of the underlying ideas. Thus the book is meant to be useful as a refer-
ence for a reader who has some methodological background and wants to do
empirical work. It may also be used as a textbook for a course on applied time
series econometrics if the students have sufficient background knowledge or if
the instructor fills in the missing theory.
    The coverage of topics is partly dictated by recent methodological devel-
opments. For example, unit root and cointegration analysis are a must for a
time series econometrician, and consequently these topics are the central part
of Chapters 2 and 3. Other topics include structural vector autoregressions
(Chapter 4), conditional heteroskedasticity (Chapter 5), and nonlinear and non-
parametric time series models (Chapters 6 and 7). The choice of topics reflects
the interests and experiences of the authors. We are not claiming to cover only
the most popular methods in current use. In fact, some of the methods have not
been used very much in applied studies but have a great potential for the future.
This holds, for example, for the nonparametric methods.
    A crucial component in empirical work is the software that is available for
an analysis. New methodology is typically only gradually incorporated into the
existing software packages. Some project participants have developed new time
series methods, and we wanted them to be available quickly in an easy-to-use
form. This has required the creation of a flexible Java interface that allows
the user to run GAUSS programs under a uniform menu-driven interface. The
empirical examples presented in the text are carried out with this software


                                                                                xv
xvi      Preface

called JMulTi (Java-based Multiple Time series software). It is available free
of charge on the internet at www.jmulti.de.
    A major advantage of the interface lies in its flexibility. This makes it easy
to integrate new methods, and the interface is general enough to allow other
software such as Ox to be connected as well. Therefore we expect rapid devel-
opment of the JMulTi software such that it will shortly also include methods
that are not covered in this book.
    Although the JMulTi software is primarily a tool for empirical work, it has
already proven helpful for classroom use as well. Because it is menu-driven and,
hence, very easy to apply, the software has been found to be useful in presenting
classroom examples even in more theory-oriented courses.
    It is perhaps worth emphasizing that this book is not just meant to be a
manual for JMulTi. It can be used together with other software packages as
well, although some of the methods covered are not yet available in other
software. Again, in accord with our own preferences and research interests,
JMulTi includes some methods available in other software products in a differ-
ent from. In particular, it provides some computer-intensive bootstrap methods
that are very time consuming with current computer technology but will most
likely not be a computational challenge anymore in a few years.
    The important role of the software in empirical analysis has prompted us to
present JMulTi in some detail in the book (see Chapter 8). We also provide
most data sets used in the examples in this volume together with the program.
Readers can thereby replicate any results they like, and they may also use the
data in their own projects to get hands-on experience with the methods discussed
in the following chapters.


The Project Story
The origins of this project go back to the times when one of us was working on an
introductory multiple time series book [Lütkepohl (1991)]. Parallel to writing
up the statistical theory contained in that book a menu-driven program based on
GAUSS was already developed under the name MulTi [see Haase, Lütkepohl,
Claessen, Moryson & Schneider (1992)]. At that time there was no suitable
easy-to-use software available for many of the methods discussed in Lütkepohl
(1991), and it seemed natural to provide the basis for empirical analysis by
making the program available. Because of restrictions of the program design,
the project was later terminated.
   Some years later Alexander Benkwitz, then working at the Humboldt Uni-
versity in Berlin, relaunched the project by applying modern, object-oriented
design principles. It started out as a Java user interface to some GAUSS pro-
cedures but rapidly evolved to a comprehensive modeling framework. Many
people contributed their procedures to the project, which put the idea of reusing
code to life. Major parts of JMulTi were provided by Ralf Brüggemann, Helmut
         Preface                                                              xvii

Herwartz, Carsten Trenkler, Rolf Tschernig, Markku Lanne, Stefan Lundbergh,
Jörg Breitung, Christian Kascha, and Dmitri Boreiko. We thank all of them for
their cooperation.
    The current package includes many parts that were not available in the old
MulTi, and many of the procedures already available in the older software
are now improved considerably taking into account a decade of methodological
development. On the other hand, there are still some methods that were included
in MulTi and are not available in JMulTi. The procedures related to vector
autoregressive moving average (VARMA) modeling are an example. These
models have not become as popular in empirical work as some of the methods
that are included in JMulTi. Given the rather complex programming task behind
VARMA modeling, we think that investing our resources in other procedures
was justified. Of course, it is possible that such models will be added at some
stage.
    With a quite powerful software for time series econometrics at hand, it seemed
also natural to write an applied time series econometrics text covering our
favorite models and procedures and extending the small text given away with
the old MulTi. It was only after the two of us had moved to the European
University Institute (EUI) in the lovely hills around Florence in 2002 that this
project gained momentum. It became apparent that such a text might be useful
to have for the students, and therefore we worked more intensively on both the
JMulTi software and the applied time series econometrics text describing the
relevant methods. Because some of the people who have written the software
components for JMulTi clearly have more expert knowledge on their methods
than we do, we asked them to also contribute their knowledge to this volume.
We thank all the contributors for their good cooperation and help in finalizing
the book.



Acknowledgments
There are also many further people who contributed significantly to this book
and JMulTi in one way or other. Their names are too numerous to list them
all. We would like to mention the following contributions specifically, however.
Kirstin Hubrich, Carsten Trenkler, Dmitri Boreiko, Maria Eleftheriou, Aaron
Mehrotra, and Sebastian Watzka gave us feedback and comments during a
workshop organized in Florence at the end of March 2003. Dmitri Boreiko also
produced many of the figures. Tommaso Proietti discussed an early version
of JMulTi generously when he was visiting the EUI as a Jean Monnet Fel-
low in 2002. Stefan Kruchen, Franz Palm, and Jean-Pierre Urbain commented
in particular on Chapter 7. Last, but not least, we would like to thank Scott
Parris, the economics editor of Cambridge University Press, for his cheerful
encouragement during the preparation of the manuscript.
xviii    Preface

Financial Support
The Deutsche Forschungsgemeinschaft, SFB 373, the European Commission
under the Training and Mobility of Researchers Programme (contract No.
ERBFMRXCT980213), and the Jan Wallander and Tom Hedelin Foundation
(contract No. J99/37) provided financial support for which we are very grateful
because it enabled us to complete this project and in particular to make the
software available free of charge to the research community.

San Domenico di Fiesole and Berlin,                         Helmut Lütkepohl
September 4, 2003                                            Markus Krätzig
          Notation and Abbreviations




General Symbols
:=        equals by definition
⇒         implies
⇔         is equivalent to
∼         is distributed as
 a
∼         is asymptotically distributed as
∈         element of
⊂         subset of
∪         union
∩
         intersection
         summation sign
          product sign
→         converges to, approaches
 p
→         converges in probability to
a.s.
→         converges almost surely to
q.m.
→         converges in quadratic mean to
 d
→         converges in distribution to
o(·)      order of convergence to zero
O(·)      order of convergence
o p (·)   order of convergence to zero in probability
O p (·)   order of convergence in probability
lim       limit
plim      probability limit
max       maximum
min       minimum
sup       supremum, least upper bound
log       natural logarithm
exp       exponential function


                                                        xix
xx           Notation and Abbreviations

I (·)          indicator function
|z|            absolute value or modulus of z
R              real numbers
Rm             m-dimensional Euclidean space
C              complex numbers
L              lag operator
              differencing operator
E              expectation
Var            variance
Cov            covariance, covariance matrix
MSE            mean-squared error (matrix)
Pr             probability
l(·)           log-likelihood function
λ LM , LM      Lagrange multiplier statistic
λ LR , LR      likelihood ratio statistic
λW , W         Wald statistic
Qh             portmanteau statistic
Q ∗h           modified portmanteau statistic
d.f.           degrees of freedom
H0             null hypothesis
H1             alternative hypothesis
K (·)          kernel
T              sample size, time series length
1991Q3         third quarter of 1991

AIC, AIC         Akaike information criterion
FPE, FPE         final prediction error (criterion)
HQ, HQ           Hannan–Quinn (criterion)
SC, SC           Schwarz criterion

Distributions and Related Symbols

p-value        tail probability of a statistic
p F(. , .)     p-value of an F(· , ·) statistic
N (µ, )       (multivariate) normal distribution with mean (vector) µ and
               variance (covariance matrix) 
χ 2 (m)        χ 2 -distribution with m degrees of freedom
F(m, n)        F-distribution with m numerator and n denominator degrees of
               freedom
t(m)           t-distribution with m degrees of freedom
          Notation and Abbreviations                                             xxi

Vector and Matrix Operations

M               transpose of M
M −1             inverse of M
M 1/2            square root of M
Mk               kth power of M
MN               matrix product of the matrices M and N
⊗                Kronecker product
det(M), det M    determinant of M
|M|              determinant of M
M              Euclidean norm of M
rk(M), rk M      rank of M
tr(M), tr M      trace of M
vec              column stacking operator
vech             column stacking operator for symmetric matrices (stacks the
                 elements on and below the main diagonal only)
∂ϕ
                 vector or matrix of first-order partial derivatives of ϕ with
∂β              respect to β
 ∂ 2ϕ
                 Hessian matrix of ϕ, matrix of second order partial
∂β∂β            derivatives of ϕ with respect to β

General Matrices

Im               (m × m) unit or identity matrix
0                zero or null matrix or vector
0m×n             (m × n) zero or null matrix

Stochastic Processes and Related Quantities

ut               white noise process
vt               white noise process
wt               white noise process
εt               white noise process
yt               stochastic process
                         
                         T
y                := T −1    yt , sample mean (vector)
                         t=1
 y (h)          := Cov(yt , yt−h ) for a stationary process yt
R y (h)          correlation matrix corresponding to  y (h)
σu2              := Var(u t ) variance of univariate process u t
                            
u                     t u t ) = Cov(u t ), white
                 := E(u                            noise covariance matrix
y               := E (yt − µ)(yt − µ) = Cov(yt ),
                 covariance matrix of a stationary process yt
µ                mean (vector)
xxii   Notation and Abbreviations

Abbreviations

AC                autocorrelation
ACF               autocorrelation function
ADF               augmented Dickey–Fuller (test)
AFPE              asymptotic final prediction error
AIC               Akaike information criterion
API               application programming interface
AR                autoregressive (process)
AR( p)            autoregressive process of order p
ARCH              autoregressive conditional heteroskedasticity
ARIMA             autoregressive integrated moving average (process)
ARIMA( p, d, q)   autoregressive integrated moving average process
                  of order ( p, d, q)
ARMA              autoregressive moving average (process)
ARMA( p, q)       autoregressive moving average process of order ( p, q)
BEKK              Baba–Engle–Kraft–Kroner (model)
BHHH              Berndt–Hall–Hall–Hausman (algorithm)
CAFPE             corrected asymptotic final prediction error
CAPM              capital asset pricing model
CI                confidence interval
CUSUM             cumulated sum
DAFOX             German stock index for research purposes
DEM               Deutsche mark
DGP               data generation process
ESTAR             exponential smooth transition autoregression
ESTR              exponential smooth transition regression
FPE               final prediction error
GARCH             generalized autoregressive conditional heteroskedasticity
GBP               Great Britain pounds
GDP               gross domestic product
GED               general error distribution
GLS               generalized least squares
GNP               gross national product
GUI               graphical user interface
HEGY              Hylleberg–Engle–Granger–Yoo (test)
HP                Hodrick–Prescott (filter)
HQ                Hannan–Quinn (criterion)
I(d)              integrated of order d
iid               independently identically distributed
JVM               Java virtual machine
KPSS              Kwiatkowski–Phillips–Schmidt–Shin (test)
       Notation and Abbreviations                                    xxiii

LJB            Lomnicki–Jarque–Bera (test)
LM             Lagrange multiplier (test)
LR             likelihood ratio (test)
LSTR           logistic smooth transition regression
LTW            Lütkepohl–Teräsvirta–Wolters (study)
MA             moving average (process)
MA(q)          moving average process of order q
MGARCH         multivariate generalized autoregressive conditional
               heteroskedasticity
ML             maximum likelihood
MSE            mean-squared error
NAR            nonlinear autoregression
OLS            ordinary least squares
PAC            partial autocorrelation
PACF           partial autocorrelation function
PAR            periodic autoregression
pdf            probability density function
QML            quasi-maximum likelihood
RESET          regression specification error test
RR             reduced rank
SC             Schwarz criterion
SDAR           seasonal dummy autoregression
SDNAR          seasonal dummy nonlinear autoregression
SHNAR          seasonal shift nonlinear autoregression
SNAR           seasonal nonlinear autoregression
STAR           smooth transition autoregression
STR            smooth transition regression
SVAR           structural vector autoregression
SVECM          structural vector error correction model
TGARCH         threshold generalized autoregressive conditional
               heteroskedasticity
TV-STAR        time-varying smooth transition autoregression
TV-STR         time-varying smooth transition regression
USD            U.S. dollar
VAR            vector autoregressive (process)
VAR(p)         vector autoregressive process of order p
VARMA          vector autoregressive moving average (process)
VARMA( p, q)   vector autoregressive moving average process
               of order ( p, q)
VEC            vector error correction
VECM           vector error correction model
3SLS           three-stage least squares
        Contributors




JÖRG BREITUNG
Universität Bonn, GERMANY
email: breitung@uni-bonn.de

RALF BRÜGGEMANN
Humboldt Universität zu Berlin, GERMANY
email: brueggem@wiwi.hu-berlin.de

HELMUT HERWARTZ
Christian Albrechts Universität Kiel, GERMANY
email: Herwartz@stat-econ.uni-kiel.de

MARKUS KRÄTZIG
Humboldt Universität zu Berlin, GERMANY
email: mk@mk-home.de

HELMUT LÜTKEPOHL
European University Institute, ITALY
email: helmut.luetkepohl@iue.it

TIMO TERÄSVIRTA
Stockholm School of Economics, SWEDEN
email: Timo.Terasvirta@hhs.se

ROLF TSCHERNIG
Maastricht University, THE NETHERLANDS
email: R.Tschernig@KE.unimaas.nl




                                                 xxv
1        Initial Tasks and Overview

Helmut Lütkepohl




1.1 Introduction
This book discusses tools for the econometric analysis of time series. Generally,
a time series is a sequence of values a specific variable has taken on over some
period of time. The observations have a natural ordering in time. Usually, when
we refer to a series of observations as a time series, we assume some regularity
of the observation frequency. For example, one value is available for each year
in a period of thirty years, for instance. To be even more specific, consider the
annual gross national product (GNP) of some country for a period of 1970 to
1999. Of course, the observation frequency could be more often than yearly.
For instance, observations may be available for each quarter, each month, or
even each day of a particular period. Nowadays, time series of stock prices or
other financial market variables are even available at a much higher frequency
such as every few minutes or seconds.
    Many economic problems can be analyzed using time series data. For exam-
ple, many macroeconometric analyses are based on time series data. Forecasting
the future economic conditions is one important objective of many analyses.
Another important goal is understanding the relations between a set of possibly
related variables or uncovering the ongoings within an economic system or a
specific market.
    Before engaging in an econometric time series analysis it is a good idea to
be clear about the objectives of the analysis. They can determine in part which
models and statistical tools are suitable. A brief discussion of this initial stage
of a project follows in Section 1.2. The next step is getting a good data set to
work with. Some discussion of this step is provided in Sections 1.3 and 1.4. The
discussion is presented in two separate sections because it is one thing to find
data in some suitable data source and another issue to prepare the data for the
project of interest. When a time series data set has been created, a good model
has to be constructed for the data generation process (DGP). This is the stage
at which the actual econometric analysis begins, and the tools discussed in this

                                                                                 1
2        Helmut Lütkepohl

volume may be useful at that stage. A brief overview of the topics considered
in this book is given in the final section of this chapter.


1.2 Setting Up an Econometric Project
As mentioned in the chapter introduction, the first stage of a time series econo-
metric project is to clarify the objectives of the analysis. These objectives may
be formulated by a customer who is interested in specific results or the solution
of a particular problem. For example, the government may wish to know the
tax revenues for the next quarter or year. In that case a forecast of a specific
variable is desired. Sometimes the objectives are formulated in a less precise
way, such as when the government wants to know the general implications of a
change in a particular tax rule. Clearly, the econometrician has to narrow down
the questions to be addressed in such a way that they become accessible with
econometric analysis. A more precise question in this context would be, for in-
stance, What are the implications for the income distribution of the households
of the target economy? In short, it is important to be sufficiently precise about
the desired targets of an analysis to be able to focus the analysis properly.
    When the objectives of the analysis are specified, it is a good idea to check
what economic theory has to say about the problem of interest or the general
problem area. Often alternative theories exist that have something to say on
a particular problem. Such theories are useful in different respects. First, they
may be used to specify the framework for analysis and to choose the relevant
variables that have to be included in a model. In economics it is clear that many
variables interact more or less strongly. When the models and statistical tools for
an econometric time series analysis are discussed in subsequent chapters, it will
become clear, however, that typically only a very limited number of variables
can be accommodated in a particular model. Otherwise a meaningful statistical
analysis is not possible on the basis of the given data information. Therefore, it
is important to narrow down the variables of central importance for an analysis.
Here economic theory has an important part to play. The data usually have
features that are not well explained or described by economic theory, however.
For a proper econometric analysis they still have to be captured in the model for
the DGP. Therefore, economic theory cannot be expected to deliver a complete
statistical model but may be very helpful in providing some central relations
between the variables of interest.
    This aspect provides a second important ingredient for the analysis that
comes from economic theory. When an econometric model has been constructed
for the DGP, it should only be used for the analysis if it reflects the ongoings
in the system of interest properly. Several statistical tools will be presented in
the following chapters that can be used for checking the adequacy of a model.
In addition, economic theory can also be used to check whether the central
relations are reflected in the model. Of course, determining whether a given
          Initial Tasks and Overview                                                 3

theory is compatible with the data may just be the main objective of an analysis.
However, if a specific theory is used, for example, as the basis for choosing the
variables for a forecasting model, investigating whether the theory is indeed
reflected in the model may be a good check. Otherwise some other theory may
have been a better basis for the choice of variables, and the final model may
leave room for improvement. When the set of potentially most relevant variables
is specified, it is necessary to get time series data for the actual analysis. That
stage is discussed briefly in the next section.


1.3 Getting Data
There is now a wealth of databases with time series for a large number of
variables. Therefore, at first sight the data collection step may seem easy. A
problem arises, however, because economic theory considers abstract variables
that are not always easy to measure. In any case, when it comes to measuring a
variable such as GNP, the statistical office in charge has to establish a specific
measurement procedure that may not be the same in some other statistical office.
Moreover, many variables are not specified uniquely by economic theory. For
example, what is the price level in some economy? Is it preferable to measure
it in terms of consumer prices using, for example, the consumer price index
(CPI), or should the GNP deflator be used? How is the CPI constructed? That
depends, of course, on the weights given to prices of different goods and, hence,
on the principle for index construction used by the statistical office in charge.
Also, which goods are included has an important impact on the result. The
basket of goods is typically adjusted every few years, and that may be important
information to take into account in the statistical modeling procedure.
    The problem of nonuniqueness and ambiguity of the definitions of the vari-
ables is not limited to macroeconomic data by the way. For instance, it may also
not be fully clear how stock prices are collected. There are different possibilities
to define the price associated with a specific day, for example. The quoted value
may be the closing price at some specific stock exchange. Of course, many
stocks are traded at different stock exchanges with different closing times;
hence, quite different series may be obtained if a different specification is used.
In addition, instead of the closing price, the price at some other time of the day
may be considered.
    It is not always easy to determine the exact definition or construction pro-
cedure of a particular time series. Nevertheless it should be clear that a good
background knowledge about the data can be central for a good analysis. In
turn, some surprising or strange results may just be a consequence of the spe-
cific definition of a particular variable. It is also possible that the definition of a
variable will change over time. We have already mentioned the frequent adjust-
ments of the basket of goods underlying CPI data. As another example consider
German macroeconomic variables. Some of them refer to West Germany only
4        Helmut Lütkepohl

before the German reunification and to all of Germany thereafter. Clearly, one
could argue that the definitions of the relevant variables have changed over
time.
    Another problem with the data offered in many databases is that they have
been adjusted, modified, or transformed in some way. Seasonal adjustment is,
for instance, a standard procedure that is often applied to data published by
statistical agencies. We will briefly touch on such procedures in Chapter 2,
where it will become clear that quite different seasonal adjustment procedures
exist. Consequently, even if the original series is the same, there may be striking
differences when it is seasonally adjusted by different agencies. The reason is
that defining and determining the seasonal component of a series are not easy
tasks. In particular, there is no single best way to perform them. In any case,
one should remember that adjusted or filtered data may be distorted in such a
way that interesting features for a particular analysis are lost.
    Aggregation is another issue of importance in setting up a suitable data set.
Often the series of interest have different frequencies of observation. For ex-
ample, many variables are recorded at monthly frequency, whereas others are
available only quarterly or even annually. Although it is in principle possible
to interpolate missing values of a time series, doing so entails problems. First,
there is no unique best way to perform the interpolation. Secondly, seasonal
fluctuations are difficult to model realistically. Ignoring them can lead to distor-
tions of the relation with other series that have seasonal components. Generally,
it should be understood that interpolation on the basis of a single series does
not lead to an extension of the information content. Therefore, it is not un-
common in practice to set up a data set with several time series such that all
series have the frequency of the series that is observed least frequently. Such an
approach, however, may require that some series be aggregated over time (e.g.,
from monthly to quarterly frequency).
    Again, there are different ways to aggregate a series, and it may be worth
thinking about the implications of the aggregation method for the subsequent
analysis. Suppose that a monthly interest rate series is given, whereas quarterly
observations are available only for some other series. In that case, what is the
best way to convert the monthly interest rate series into a quarterly one? Should
one use the value of the last month of each quarter as the quarterly value or
should an average of the values of the three months of each quarter be used? If
it is not clear which variable best reflects the quantity one would like to include
in the model, it is, of course, possible to perform an analysis with several
different series based on different temporal aggregation schemes and to check
which one results in the most satisfactory outcome. In any case, the analysis
methods for sets of time series variables described in this book assume that all
series are observed at the same frequency and for the same period. Therefore,
if the original series do not satisfy this condition, they have to be modified
accordingly.
         Initial Tasks and Overview                                                5

   In conclusion, getting suitable data for a particular analysis can be a very
demanding part of an econometric project despite the many databases that are at
our disposal today. Data from different sources may be collected or constructed
in markedly different ways even if they refer to the same variable. A careful
examination of the data definitions and specifications is therefore advisable at
an early stage of an analysis.


1.4 Data Handling
The discussion in the previous section suggests that the data obtained from a
specific source may not be in precisely the form to be used in the analysis. Data
formats and codings can be – and often are – different when the data come
from different sources. Therefore, it is usually necessary to arrange them in a
uniform way in a common data file to be used in the software at the disposal
of the econometrician. Fortunately, modern software can handle all kinds of
different data formats. In other words, they can be imported into the econometric
software tool, for instance, in ASCII or EXCEL format. Still it may be useful
to make adjustments before the econometric analysis begins. For example, to
avoid numerical problems it may be helpful to pay attention to a roughly similar
order of magnitude in the actual time series numbers. For instance, it may not
be a good idea to measure the GNP in billions of euros and another variable of
similar order of magnitude in cents. The required operations for making the data
more homogenous are often easy to perform with the software tool available.
More details on data handling with the software JMulTi frequently referred
to in this volume are discussed in Chapter 8.


1.5 Outline of Chapters
When the project objectives have been defined properly, the underlying eco-
nomic or other subject matter theory has been evaluated, and a suitable set of
time series has been prepared, the actual econometric modeling and statistical
analysis can begin. Some tools for this stage of the analysis are presented in the
following chapters.
   Even when the objective is a joint analysis of a set of time series, it is usually
a good idea to start with exploring the special properties and characteristics
of the series individually. In other words, univariate analysis of the individual
series typically precede a multivariate or systems analysis. The tools available
for univariate analysis are presented in Chapter 2. In that chapter, some more
discussion of important characteristics is given, in particular, in anticipation
of a later multivariate analysis. For example, specific attention is paid to an
exploration of the trending behavior of a series. Therefore, unit root tests that
can help in detecting the existence of stochastic trends form a prominent part
of the chapter. With respect to the models for describing univariate DGPs, the
6        Helmut Lütkepohl

emphasis in Chapter 2 is on linear models for the conditional expectation or the
first- and second-order moment part of a series because it is an advantage in
many situations to construct simple models. Therefore, if a simple linear model
is found to describe the data well, this is important information to carry on to
a multivariate analysis.
    At the multivariate level, linear models for the conditional mean such as vec-
tor autoregressions (VARs) and vector error correction models (VECMs) are
again the first choice. Given that data sets are often quite limited and that even
linear models can contain substantial numbers of parameters, it is sometimes
difficult to go beyond the linear model case at the multivariate level. Chapter 3
discusses VECMs and VAR models, how to specify and estimate them, how to
use them for forecasting purposes, and how to perform a specific kind of causal-
ity analysis. The recent empirical literature has found it useful to distinguish
between the short- and long-run parts of a model. These parts are conveniently
separated in a VECM by paying particular attention to a detailed modeling of
the cointegration properties of the variables. Therefore, Chapter 3 emphasizes
modeling of cointegrated series. In this analysis the results of preliminary unit
root tests are of some importance. More generally, some univariate character-
istics of the series form a basis for the choice of multivariate models and the
analysis tools used at the systems level.
    Once a model for the joint DGP of a set of time series of interest has been
found, econometricians or economists often desire to use the model for analyz-
ing the relations between the variables. The objective of such an analysis may be
an investigation of the adequacy of a particular theory or theoretical argument.
Alternatively, the aim may be a check of the model specification and its ability
to represent the structure of a specific market or sector of an economy properly.
Nowadays impulse responses and forecast error variance decompositions are
used as tools for analyzing the relations between the variables in a dynamic
econometric model. These tools are considered in Chapter 4. It turns out, how-
ever, that a mechanical application of the tools may not convey the information
of interest, and therefore structural information often has to be added to the
analysis. Doing so results in a structural VAR (SVAR) or structural VECM
(SVECM) analysis that is also covered in Chapter 4, including the resulting
additional estimation and specification problems.
    If sufficient information is available in the data to make an analysis of non-
linearities and higher order moment properties desirable or possible, there are
different ways to go beyond the linear models discussed so far. Of course, the
choice depends to some extent on the data properties and also on the purpose of
the analysis. An important extension that is often of interest for financial market
data is to model the conditional second moments. In a univariate context, this
means, of course, modeling the conditional variances. For multivariate systems,
models for the conditional covariance matrices may be desired. Some models,
         Initial Tasks and Overview                                              7

estimation methods, and analysis tools for conditional heteroskedasticity are
presented in Chapter 5.
    Nonlinear modeling of the conditional mean is considered in Chapters 6
and 7. Chapter 6 contains a description of the parametric smooth transition
(STR) model, and an organized way of building STR models is discussed and
illuminated by empirical examples. An STR model may be regarded as a linear
model with time-varying parameters such that the parametric form of the linear
model varies smoothly with two extreme “regimes” according to an observable,
usually stochastic – but in some applications deterministic – variable. The
smoothness of the transition from one extreme regime to the other accounts
for the name of this model. The modeling strategy described in Chapter 6 is
only applicable to single-equation models, and the question of how to build
nonlinear systems consisting of STR equations is not addressed in this book.
The discussion in Chapter 6 also covers purely univariate smooth transition
autoregressive (STAR) models that have been frequently fitted to economic and
other time series.
    A more general approach, as far as the form of nonlinearity is concerned, is
adopted in Chapter 7, where both the conditional mean as well as the conditional
variance of the DGP of a univariate series are modeled in general nonlinear form.
Estimation of the nonlinear functions is done nonparametrically using suitable
local approximations that can describe general nonlinear functions in a very
flexible way. The drawback of the additional flexibility is, however, that more
sample information is needed to get a clear picture of the underlying structures.
Therefore, these methods can currently only be recommended for univariate
time series analysis and, hence, the exposition in Chapter 7 is limited to this
case.
    In modern applied time series econometrics the computer is a vital tool for
carrying out the analysis. In particular, the methods described in this volume rely
heavily on extensive computations. Therefore, it is important to have software
that does not create obstacles for the analysis by presenting only tools that are
too limited. In the last chapter of this volume, software is therefore introduced
that includes many of the methods and procedures considered in this book.
Clearly, the methods for econometric time series analysis are evolving rapidly;
hence, packaged, ready-to-use software can easily become obsolete. The soft-
ware JMulTi introduced in Chapter 8 is supposed to be able to decrease the
time gap between the development of new methods and their availability in
user-friendly form. This software provides a flexible framework for checking
new methods and algorithms quickly. Readers may therefore find it useful to
familiarize themselves with the software as they go through the various chapters
of the book. In other words, it may be worth having a look at the final chapter
at an early stage and trying out the methods by replicating the examples using
the JMulTi software.
2        Univariate Time Series
         Analysis

Helmut Lütkepohl




2.1 Characteristics of Time Series
The first step in building dynamic econometric models entails a detailed analysis
of the characteristics of the individual time series variables involved. Such an
analysis is important because the properties of the individual series have to be
taken into account in modeling the data generation process (DGP) of a system
of potentially related variables.
    Some important characteristics of time series can be seen in the example
series plotted in Figure 2.1. The first series consists of changes in seasonally
adjusted U.S. fixed investment. It appears to fluctuate randomly around a con-
stant mean, and its variability is homogeneous during the observation period.
Some correlation between consecutive values seems possible. In contrast, the
second series, representing a German long-term interest rate, evolves more
slowly, although its variability is also fairly regular. The sluggish, longer term
movements are often thought of as a stochastic trend. The third series represents
German gross national product (GNP). It appears to evolve around a determin-
istic polynomial trend, and, moreover, it has a distinct seasonal movement. In
addition there is a level shift in the third quarter of 1990. This shift is due to a
redefinition of the series, which refers to West Germany only until the second
quarter of 1990 and to the unified Germany afterwards. Although German re-
unification took place officially in October 1990, many economic time series
were adjusted already on 1 July of that year, the date of the monetary unifica-
tion. Finally, the last series in Figure 2.1 represents the daily DAFOX returns
from 1985 to 1996. The DAFOX is a German stock index. It moves around
a fixed mean value. The variability is quite dissimilar in different parts of the
sample period. Furthermore, there is an unusually long spike in late 1989. Such
an unusual value is sometimes referred to as an outlier.
    To summarize, we see series in the figure with very different and clearly
visible characteristics. They may evolve regularly around a fixed value, or they
may have stochastic or deterministic trending behavior. Furthermore, they may

8
         Univariate Time Series Analysis                                   9




                  (a) quarterly changes in U.S. fixed investment




           (b) quarterly German long-term interest rate (Umlaufsrendite)




                        (c) quarterly German nominal GNP
Figure 2.1. Example time series.
10       Helmut Lütkepohl




                               (d) daily  log DAFOX
Figure 2.1. (continued )

display seasonal movements, and they may have level shifts or outliers. All
these characteristics have to be taken into account in constructing models for
a set of related time series variables. Some of the characteristics may have an
impact on the statistical inference procedures used in modeling and analyzing
the underlying economic system. The specific characteristics of the series may
be an integral part of the relationship of interest, or they may reflect features that
are not of interest for the relationship under study but may still be of importance
for the statistical procedures used in analyzing a given system of variables.
Therefore, it is important to obtain a good understanding of the individual
time series properties before a set of series is modeled jointly. Some important
characteristics of the DGPs of time series will be described more formally in
this chapter, and we will also present statistical quantities and procedures for
analyzing these properties.
   Generally, it is assumed that a given time series y1 , . . . , yT consists of a
stretch of (at least roughly) equidistant observations such as a series of quarterly
values from the first quarter of 1975 (1975Q1) to the fourth quarter of 1998
(1998Q4). The fact that quarters are not of identical length will be ignored,
whereas if the values of some of the quarters are missing, the observations of the
time series would not be regarded as equidistant anymore. On the other hand,
the DAFOX returns are often treated as a series of equidistant observations,
although weekend and holiday values are missing. There are methods for dealing
explicitly with missing observations. They will not be discussed here, and the
reader may consult specialized literature for methods to deal with them [see,
e.g., Jones (1980) and Ansley & Kohn (1983)].
   In this volume, it is assumed that the time series are generated by stochastic
processes. Roughly speaking, a stochastic process is a collection of random
variables. Each time series observation is assumed to be generated by a different
member of the stochastic process. The associated random variables assumed
to have generated the time series observations will usually be denoted by the
same symbols as the observations. Thus, a time series y1 , . . . , yT is generated
by a stochastic process {yt }t∈T , where T is an index set containing the subset
{1, . . . , T }. The subscripts t are usually thought of as representing time or
         Univariate Time Series Analysis                                         11

time periods, and the associated terminology is chosen accordingly. Note that
the DGP may begin before the first time series value is observed, and it may
stretch beyond the last observation period. Such an assumption is convenient
for theoretical discussions, for example, of forecasting and asymptotic analysis,
where the development beyond the sample period is of interest. Often T is the
set of all integers or all nonnegative integers. It will be obvious from the context
whether the symbol yt refers to an observed value or the underlying random
variable. To simplify the notation further we sometimes use it to denote the
full stochastic process or the related time series. In that case the range of the
subscript is either not important or it is understood from the context.
   In this chapter many concepts, models, procedures, and theoretical results
are sketched only briefly because we do not intend to provide a full introduction
to univariate time series analysis but will just present some of the important
background necessary for applied econometric modeling. Several time series
textbooks are available with a more in-depth treatment that may be consulted for
further details and discussions. Examples are Fuller (1976), Priestley (1981),
Brockwell & Davis (1987), and Hamilton (1994).


2.2 Stationary and Integrated Stochastic Processes

2.2.1 Stationarity
A stochastic process yt is called stationary if it has time-invariant first and
second moments. In other words, yt is stationary if

1. E(yt ) = µ y for all t ∈ T and
2. E[(yt − µ y )(yt−h − µ y )] = γh for all t ∈ T and all integers h such that
   t − h ∈ T.

The first condition means that all members of a stationary stochastic process
have the same constant mean. Hence, a time series generated by a stationary
stochastic process must fluctuate around a constant mean and does not have a
trend, for example. The second condition ensures that the variances are also time
invariant because, for h = 0, the variance σ y2 = E[(yt − µ y )2 ] = γ0 does not de-
pend on t. Moreover, the covariances E[(yt − µ y )(yt−h − µ y )] = γh do not de-
pend on t but just on the distance in time h of the two members of the process. Our
notation is also meant to imply that the means, variances, and covariances are
finite numbers. In other words, the first two moments and cross moments exist.
    Clearly, some of the time series in Figure 2.1 have characteristics that make
them unlikely candidates for series generated by stationary processes. For ex-
ample, the German GNP series has a trend that may be better modeled by a
changing mean. Moreover, the level shift in 1990 may indicate a shift in mean
that is inconsistent with a constant mean for all members of the process. The
changes in the variability of the DAFOX return series may violate the constant
12        Helmut Lütkepohl

variance property of a stationary DGP. On the other hand, the U.S. investment
series gives the visual impression of a time series generated by a stationary pro-
cess because it fluctuates around a constant mean and the variability appears to
be regular. Such a time series is sometimes referred to as a stationary time series
for simplicity of terminology. From our examples it may seem that stationarity
is a rare property of economic time series. Although there is some truth to this
impression, it is sometimes possible to obtain stationary-looking time series by
simple transformations. Some of them will be discussed shortly.
    Before we go on with our discussion of stationary processes, it may be worth
mentioning that there are other definitions of stationary stochastic processes that
are sometimes used elsewhere in the literature. Some authors call a process with
time-invariant first and second moments covariance stationary, and sometimes
a process is defined to be stationary if all the joint distributions of (yt , . . . , yt−h )
are time invariant for any integer h, that is, they depend on h only and not on
t. Sometimes a process satisfying this condition is described as being strictly
stationary. This terminology will not be used here, but a process is simply called
stationary if it has time-invariant first and second moments.
    If the process starts in some fixed time period (e.g., if T is the set of non-
negative integers), then it is possible that it needs some start-up period until the
moments stabilize. In fact, it is conceivable that the moments reach a constant
state only asymptotically. This happens often if the process can be made station-
ary by modifying the initial members of the process. In that case, the process
may be called asymptotically stationary. We will not always distinguish be-
tween asymptotic stationarity and stationarity but will call a process stationary
if stationarity can be achieved by modifying some initial variables.
    Sometimes a process is called trend-stationary if it can be made stationary
by subtracting a deterministic trend function such as a linear function of the
form µ0 + µ1 t, where µ0 and µ1 are fixed parameters.

2.2.2 Sample Autocorrelations, Partial Autocorrelations,
and Spectral Densities
It is not always easy to see from the plot of a time series whether it is reasonable
to assume that it has a stationary DGP. For instance, the stationarity properties of
the interest rate series DGP in Figure 2.1 are not obvious. Therefore, it is useful to
consider some statistics related to a time series. For example, one may consider
the sample autocorrelations (ACs) ρ̃h = γ̃h /γ̃0 or ρ̂h = γ̂h /γ̂0 obtained from
                  1  T
          γ̃h =           (yt − ȳ)(yt−h − ȳ)
                  T t=h+1
or
                    1    T
          γ̂h =               (yt − ȳ)(yt−h − ȳ),
                  T − h t=h+1
          Univariate Time Series Analysis                                           13
                    T
where ȳ = T −1 t=1          yt is the sample mean. For a series with stationary DGP,
the sample autocorrelations typically die out quickly with increasing h, as in
Figure 2.2, where the sample autocorrelation function (ACF) of the U.S. invest-
ment series is plotted. In contrast, the autocorrelation function of the interest
rate series, which is also plotted in Figure 2.2, tapers off more slowly. Therefore,
the stationarity properties of this series are less evident. We will discuss formal
statistical tests for stationarity later on in Section 2.7.
    In Figure 2.2, the dashed lines to both sides of the zero axis enable the reader
to assess which one of the autocorrelation coefficients may be regarded as zero.
Notice that the sample autocorrelations are estimates of the actual autocorrela-
tions if the process is stationary. If it is purely random, that is, all members are
mutually independent and identically distributed so that yt and yt−h are stochas-
tically independent for h = 0, then the normalized√estimated autocorrelations
                                                                   d
are asymptotically standard normally   √      distributed,
                                              √              T ρ̃h → N (0, 1), and thus
ρ̃h ≈ N (0, 1/T ). Hence, [−2/ T , 2/ T ] is an approximate 95% confidence   √
interval around zero. The dashed lines in Figure 2.2 are just ±2/ T lines;
consequently, they give a rough indication of whether the autocorrelation coef-
ficients may be regarded as coming from a process with true autocorrelations
equal to zero. A stationary process for which all autocorrelations are zero is
called white noise or a white noise process.
    Clearly, on the basis of the foregoing criterion for judging the significance of
the autocorrelations in Figure 2.2, the U.S. investment series is not likely to be
generated by a white noise process because some autocorrelations reach outside
the area between the dashed lines. On the other hand, all coefficients at higher
lags are clearly between the dashed lines. Hence, the underlying autocorrelation
function may be in line with a stationary DGP.
    Partial autocorrelations (PACs) are also quantities that may convey useful
information on the properties of the DGP of a given time series. The partial
autocorrelation between yt and yt−h is the conditional autocorrelation given
yt−1 , . . . , yt−h+1 , that is, the autocorrelation conditional on the in-between val-
ues of the time series. Formally,
          ah = Corr(yt , yt−h |yt−1 , . . . , yt−h+1 ).
The corresponding sample quantity âh is easily obtained as the ordinary least-
squares (OLS) estimator of the coefficient αh in an autoregressive model
          yt = ν + α1 yt−1 + · · · + αh yt−h + u t .
These models are discussed in more detail in Section 2.3.1. For stationary
processes, partial autocorrelations also approach zero as h goes to infinity;
hence, the estimated counterparts should be small for large lags h. In Figure 2.2,
the partial autocorrelation functions (PACFs) are shown for the U.S. investment
series and the German long-term interest rate series. In this case they all
tend to approach small values quickly for increasing h. We will see later that
                                             -




                                                  -




Figure 2.2. Autocorrelation functions and partial autocorrelation functions of U.S.
investment and German long-term interest rate series.
         Univariate Time Series Analysis                                         15

autocorrelation functions and partial autocorrelation functions can give useful
information on specific properties of a DGP other than stationarity.
   The autocorrelations of a stationary stochastic process may be summarized
compactly in the spectral density function. It is defined as
                                                                         
                           
                           ∞                                 
                                                             ∞
                        −1          −iλj         −1
         f y (λ) = (2π)         γje      = (2π)       γ0 + 2   γ j cos(λj) ,
                            j=−∞                              j=1

                                                                             (2.1)
           √
where i = −1 is the imaginary unit, λ ∈ [−π, π] is the frequency, that is,
the number of cycles in a unit of time measured in radians, and the γ j ’s are the
autocovariances of yt as before. It can be shown that
               π
        γj =       eiλj f y (λ)dλ.
                 −π

Thus, the autocovariances can be recovered from the spectral density function
via the integral on the right-hand side. In particular,
                       π
          γ0 = σ y2 =      f y (λ)dλ.
                       −π
                                                          λ
In other words, for −π ≤ λ1 < λ2 ≤ π , the integral λ12 f y (λ)dλ represents the
contribution of cycles of frequencies between λ1 and λ2 to the variance of yt .
Letting the distance between λ1 and λ2 become very small shows that f y (λ) may
be interpreted as the contribution of cycles of frequency λ to the total variability
of yt .
   A possible estimator of the spectral density is the periodogram, which is
suggested by the definition of the spectral density in (2.1). It is obtained by
replacing the autocorrelations by estimators,
                                                      
                                      
                                      T −1
                         −1
          I y (λ) = (2π)      γ̂0 + 2      γ̂ j cos(λj) .
                                    j=1

Unfortunately, the periodogram is not a good estimator because it is not con-
sistent and usually gives an imprecise impression of the spectral density. This
property is a result of the increasing number of sample autocovariances included
in the periodogram with growing sample size. Therefore, downweighing auto-
covariances for larger lags is preferable in estimating the spectral density. This
results in an estimator
                                                            
                                          
                                          MT
                          −1
           fˆy (λ) = (2π)      ω0 γ̂0 + 2    ω j γ̂ j cos(λj) ,
                                          j=1

where the weights ω j ( j = 1, . . . , MT ) represent the so-called spectral window
and MT is the truncation point. The following examples of spectral windows
16       Helmut Lütkepohl




Figure 2.3. Periodogram and spectral density of log income series.

have been proposed in the literature among others:

         ω j = 1 − j/MT [Bartlett (1950)]
                         2           3
               1 − 6 j     + 6 MjT for 0 ≤ j ≤ M2T
                       MT
         ωj =                                            [Parzen (1961)]
               2 1 − j 3               for M2T ≤ j ≤ MT
                       MT

[see also Priestley (1981, Sec. 6.2.3) for further proposals of spectral windows].
The weights decrease with increasing j; hence, less weight is given to γ̂ j s with
greater j, which are computed from fewer observations than the γ̂ j s with smaller
 j. In other words, the autocovariance estimates based on fewer observations
receive less weight. Using a spectral window such as those proposed by Bartlett
or Parzen ensures consistent estimators fˆy (λ) if the truncation point is chosen
such that MT → ∞ and MT/T → 0 as T → ∞.
    In Figure 2.3, the logarithms of quarterly real per capita personal disposable
West German income are plotted. The series has an upward trend and a distinct
seasonal pattern. The trend is reflected as a spike near zero in the periodogram;
that is, the very low frequencies dominate. Because the spike is so large, nothing
much else can be seen in the second panel of Figure 2.3. In such a situation, it is
often preferable to plot the log of the periodogram rather than the periodogram.
         Univariate Time Series Analysis                                        17

The logarithm is a monoton transformation and therefore ensures that larger
values remain larger than smaller ones. The relative size is reduced, however.
This is clearly seen in the third panel of Figure 2.3. Now it is obvious that
the variability in the periodogram estimates is quite large. Therefore, we also
show the log of the smoothed spectral density estimator based on a Bartlett
window with window width MT = 20 in the last panel of Figure 2.3. In that
graph the series is seen to be dominated by very low frequency cycles (trend)
and seasonal cycles. Notice the peak at frequency 2π/4 = 1.57, which is the
seasonal frequency of a quarterly series that completes a quarter of a cycle in
each observation period. Because the frequency is measured in radians, that is,
in fractions of 2π, the value 1.57 is obtained. There may be further peaks at mul-
tiples of the seasonal frequency because more than one cycle may be completed
within a year, which may contribute to the appearance of a seasonal movement
throughout the year. For the example series this is clearly reflected in a second
peak at the right end of the graph. Note that, owing to the symmetry around
frequency zero, spectral densities are typically plotted only for λ ∈ [0, π].
    Although the log income series is hardly stationary – and, hence, its spec-
tral density may not even be properly defined – the estimate can be computed,
and it may still be informative as a descriptive device. The observation that
much of the spectral mass is concentrated near the zero frequency and further
peaks occur around the seasonal frequencies is quite common for macroeco-
nomic time series. Therefore, this pattern has been termed the typical spectral
shape by Granger (1966). It describes the fact that the series is trending with
long-term movements; hence, low frequencies contribute considerably to the
variability of the series. In addition, the series has a strong seasonal component
that contributes to the variance.
    An important problem in estimating the spectral density of a time series is
the choice of the window size MT . Larger values lead to more volatile function
estimates with larger variances, whereas small values of MT result in smooth
estimates that may be biased, however. For descriptive purposes, it may be worth
investigating which features are of most importance for a given series by trying
several different values. Alternatively, one may consult the relevant literature
for a discussion on the choice of the window width and then make a more
informed choice [see, e.g., Priestley (1981, Chapter 7)].


2.2.3 Data Transformations and Filters
The log transformation and rates of change. As we have seen, many economic
time series have characteristics incompatible with a stationary DGP. However,
in some cases simple transformations can move a series closer to stationarity.
Consider, for instance, the German income series in Figure 2.4, which shows
larger fluctuations for greater values of the series. In such a case, a logarithmic
transformation may help to stabilize the variance. This can be seen in Figure 2.4.
Of course, the trend still remains, but the variance has become more uniform
18       Helmut Lütkepohl




Figure 2.4. Quarterly West German real per capita personal disposable income and its
transformations for the period 1961–87.


over time in the first right-hand-side panel, where the natural logarithm (log) of
the series is displayed. Taking now first differences of the logs, that is, consider-
ing the quantities  log yt = log yt − log yt−1 , results in a series without a trend
in the first panel of the middle row of Figure 2.4 (see D log income). Because
the first differences of the logs are roughly the rates of change of the series, one
way to summarize this result is that, if the original series has a trending mean
and a variance proportional to the levels of the series, then the rates of change
may be in line with a stationary DGP. Of course, it is possible that subject
matter considerations may make it useful to study the rates of change rather
than the original series. For the present example series a pronounced seasonal
pattern remains in the rates of change. In such a case, considering annual rates
of change may result in a more random-looking series. For the income series,
the annual rates of change are obtained as 4 log yt = log yt − log yt−4 . They
are plotted in the right-hand panel in the second row of Figure 2.4 (see D4 log
income). The series clearly has important characteristics of a stationary series.
The last plot in Figure 2.4 will be discussed later in this section.
    Generally, from a statistical point of view, taking logs may be a useful trans-
formation to stabilize the variance of a time series if the variance of the original
series increases with the level of the series. Such a transformation has implica-
tions for the distribution of the DGP, which may be important in some situations.
          Univariate Time Series Analysis                                             19

It is not uncommon, however, for the log transformation also to result in a series
more in line with a normally distributed (Gaussian) DGP.
    There are also other transformations that make economic time series look
like stationary series. For example, a pronounced seasonal pattern in yt may be
due to varying means as seasons change. For instance, for a quarterly series,
a different mean may be associated with every quarter. In this case, the DGP
is nonstationary according to our previous definition because the mean is not
time invariant. This kind of nonstationarity may, in fact, be present in the quar-
terly rates of change of income in Figure 2.4. However, subtracting the different
quarterly means from the variables may resolve the situation and result in sta-
tionarity. For the example series the result of subtracting the seasonal means can
also be seen in Figure 2.4 (see deseas D log income). Although the series
fluctuates around a constant mean and appears to have a rather stable variance,
subtracting the different quarterly means from the variables may not be the
best way to transform the series in this case because some seasonal fluctuation
may remain. As an alternative, the annual rates of change may be preferable.
Formal statistical tests to help in deciding which transformation to use will be
considered in Section 2.7.
Filtering. Time series are often filtered to extract or eliminate special features
or components. Generally, a filter is a function of a time series that transforms
it into another one. In practice many filters are linear functions. For example,
if y1 , . . . , yT is a given time series, a new series may be obtained as
                 
                 l
          xt =          ω j yt− j ,   t = k + 1, . . . , T − l,                    (2.2)
                 j=−k

where k and l are positive integers and (ω−k , . . . , ω0 , . . . , ωl ) defines the fil-
ter with weights ω j . Often the ω j ’s are chosen so as to add up to 1, that is,
l
   j=−k ω j = 1, to ensure that the level of the series is maintained.
   As an example, consider the filter ( 18 , 14 , 14 , 14 , 18 ), which gives a series
                 1        1        1       1          1
          xt =      yt−2 + yt−1 + yt + yt+1 + yt+2                              (2.3)
                 8        4        4       4          8
that is a moving weighted average of consecutive values of the original series
yt . This filter may remove seasonal variation from a quarterly series yt . To see
this more clearly, suppose that yt is a quarterly series with a different mean for
each quarter, yt = µt + z t , where µt = µ j if t is associated with the jth quarter
and z t is a zero mean stochastic part. In this case, if we use the filter in (2.3),
                  1                          1          1       1
           xt = (µ1 + µ2 + µ3 + µ4 ) + z t−2 + z t−1 + z t
                  4                          8          4       4
                     1      1
                 + z t+1 + z t+2 ,
                     4      8
and thus xt has a constant mean 14 (µ1 + µ2 + µ3 + µ4 ).
20        Helmut Lütkepohl

   Often a filter is written efficiently by using the lag operator L, which is
defined such that L yt = yt−1 , that is, it shifts the time index back by one period.
Applying it j times gives L j yt = yt− j . Also, negative powers are possible, in
which case L − j yt = yt+ j , and we may define L 0 yt = yt . Using this notation,
we can write the simple example filter as
                                                             
                 1 −2 1 −1 1 0 1 1 1 2
         xt =      L + L + L + L + L yt .
                 8         4          4         4        8
More generally, a filter may simply be        written as a general function of the lag
operator, ω(L). For example, ω(L) = lj=−k ω j L j . We will encounter several
special filters in the following sections.
   Filtering is often used for seasonal adjustment. In that case, if a filter such
as the one in (2.2) is applied, values at the beginning and at the end of the
original series yt are lost in the filtered series xt , which is defined for t =
k + 1, . . . , T − l only. This feature is sometimes undesirable – especially if,
for example, the series are to be used in forecasting where the latest values are
of particular importance. Therefore, the filter may be modified towards the end,
the beginning, or the end and the beginning of the series. Thereby complicated
nonlinear filters may result. In practice, seasonal adjustment filters are usually
such more complicated filters. They may also distort important features of a
given series in addition to removing the seasonality. Therefore, they should not
be used uncritically.
   In business cycle analysis it is sometimes desirable to extract the trend from
a series to get a better understanding of the business cycle fluctuations. The so-
called Hodrick–Prescott (HP) filter is a popular tool in this context [see Hodrick
& Prescott (1997)]. This filter may be defined indirectly by specifying the
trend of the series y1 , . . . , yT to be the component that solves the minimization
problem
                
                T
          min         [(yt − µt )2 + λ{(µt+1 − µt ) − (µt − µt−1 )}2 ],
           µt
                t=1

where λ is a positive constant chosen by the user of the filter. It can be shown
that this minimization problem has a unique solution µ1 , . . . , µT so that the
filtered series µt has the same length as the original series yt .
    The smoothness of the filtered series is determined by the choice of λ. A
large λ will magnify any changes in µt relative to the difference yt − µt and,
hence, will force µt to move very little. In contrast, a small value of λ will
allow more movement of µt . The trend components (µt ) of the German log
income series for different λ values are plotted in Figure 2.5 to see the effect
of λ on the solution of the minimization problem. Hodrick & Prescott (1997)
have recommended a λ value of 1,600 for quarterly data, and Ravn & Uhlig
(2001) have suggested using the fourth power of the change in observation
         Univariate Time Series Analysis                                             21




Figure 2.5. HP filtering of West German log income series with different λ values.

frequency for data observed at a different frequency. For example, yearly data
are observed only one-fourth as often as quarterly data. Hence, for yearly data
λ = 1600/44 = 6.25 is recommended.
   It may be worth noting that the HP filter can be written alternatively with the
help of the lag operator as
                              1
         ω(L) =                               ,
                   1 + λ(1 − L)2 (1 − L −1 )2
although this representation does not show clearly how exactly the end effects
are treated.
   Typically, the difference yt − µt , which is called the cyclical component, is
of interest for business cycle analysis.
Integrated processes. Taking first differences is a useful device for removing
a series trend – either stochastic or deterministic or both. Because this trans-
formation has been used successfully for many economic time series, a special
terminology has been developed. A nonstationary stochastic process that can
be made stationary by considering first differences is said to be integrated of
order one (I(1)). More generally, a DGP is said to be integrated of order d (I(d))
if first differences have to be applied d times to make the process stationary or
22        Helmut Lütkepohl

asymptotically stationary. Denoting the differencing operator by  (i.e.,  =
1 − L so that for a time series or stochastic process yt we have yt = yt − yt−1 ),
the process yt is said to be I(d) or yt ∼ I(d), if d yt is stationary, whereas d−1 yt
is still nonstationary. A stationary process yt is sometimes called I(0). For rea-
sons that will become clear later, an I(d) process with d ≥ 1 is often called a unit
root process, or it is said to have a unit root. Of course, it will not always be easy
to decide on the order of integration of the DGP of a time series by looking at the
plots, autocorrelations, partial autocorrelations, or spectral density estimates of
the series and its differenced version. Therefore, formal statistical tests for unit
roots have been developed. Some of them will be discussed in Section 2.7.
    Occasionally, a distinct seasonal component can be removed by applying a
seasonal differencing operator. If s denotes the periodicity of the season (e.g.,
s = 4 for quarterly series), then this operator is defined as s yt = yt − yt−s ;
hence, s = 1 − L s . If this operator removes the nonstationarity of a process, it
is called a process with seasonal unit roots. Again the origin of this terminology
will be explained in the next section. In Figure 2.4, the seasonal differences of
the log income series are also depicted. In this case they represent annual rates
of change and look even more stationary than quarterly rates of change.

2.3 Some Popular Time Series Models
We have already encountered a white noise process as a specific stationary
stochastic process consisting of serially uncorrelated random variables. Because
most economic time series exhibit serial correlation, such a model is often in-
sufficient for describing the DGP. There are some simple parametric models,
however, that have been used frequently to describe the DGPs of economic time
series. In this section we will briefly discuss autoregressive (AR) processes,
which were already encountered in Section 2.2.2. In addition, we will consider
moving average (MA) and mixed autoregressive moving average (ARMA) mod-
els. Furthermore, we will consider autoregressive integrated moving average
(ARIMA) processes and seasonal variants. To simplify the notation it is some-
times helpful to use the lag operator L, which shifts the subscript of a time
series variable backwards by one period, as mentioned in the previous section.

2.3.1 Autoregressive Processes
An AR process yt of order p (AR( p)) may be written as

          yt = α1 yt−1 + · · · + α p yt− p + u t ,                               (2.4)

where u t is an unobservable zero mean white noise process with time invariant
variance E(u 2t ) = σu2 and the αi are fixed coefficients. Using the lag operator,
one can write the process more compactly as

          (1 − α1 L − · · · − α p L p )yt = u t      or α(L)yt = u t ,
         Univariate Time Series Analysis                                                      23

with α(L) = 1 − α1 L − · · · − α p L p . The process is said to be stable if

         α(z) = 0 for all complex numbers z satisfying |z| ≤ 1.                            (2.5)

In that case the process can be represented as a weighted sum of past errors,
                                                         
                                                         ∞
         yt = α(L)−1 u t = φ(L)u t = u t +                     φ j u t− j ,
                                                         j=1

where φ(L) is an operator satisfying α(L)φ(L) = 1. Comparing        j coefficients
shows that the φ j may be obtained recursively as φ j = i=1 φ j−i αi for
 j = 1, 2, . . . with φ0 = 1 and αi = 0 for i > p. For example, if yt is an
AR(1) process, that is yt = α1 yt−1 + u t , the AR operator is 1 − α1 L. It sat-
isfies the condition (2.5) if |α1 | < 1. In that case, (1 − α1 L)−1 = φ(L) =
                                            j
1 + α1 L + α12 L 2 + · · ·, and thus φ j = α1 . Therefore, yt has the representation
                      
                      ∞
                                j
         yt = u t +         α1 u t− j .
                      j=1

   A process consisting of a weighted sum of the elements of a white noise pro-
cess is called an MA process, finite order versions of which will be considered
in the next section. Assuming that T is the set of all integers and, hence, the
process yt in (2.4) has been initiated in the infinite past, it is stationary (I(0))
with mean zero, variance
                            
                            ∞
         σ y2 = γ0 = σu2             φ 2j ,
                               j=0

and covariances
                    
                    ∞
         γh = σu2         φ j+h φ j ,          h = ±1, ±2, . . . .
                    j=0

For instance, for the aforementioned AR(1) process,
                            
                            ∞
                                          2j
         σ y2 = γ0 = σu2             α1 = σu2 /(1 − α12 )
                               j=0

and
                    
                    ∞
                            j+h       j
         γh = σu2         α1        α1 = σu2 α1h /(1 − α12 ),         h = ±1, ±2, . . . .
                    j=0

   For the AR( p) process (2.4), the partial autocorrelations ah = 0 for h > p,
and the spectral density is of the form

          f y (λ) = (2π)−1 σu2 |α(eiλ )|−2 ,
24       Helmut Lütkepohl




Figure 2.6. Autocorrelation functions, partial autocorrelation functions, and spectral
densities of AR(1) processes.


where | · | denotes the modulus of a complex number. For the previously con-
sidered AR(1) example process we obtain, for instance,
                       1     σu2           1         σu2
          f y (λ) =      ·              =    ·                   ,
                      2π |1 − α1 eiλ |2   2π 1 + α12 − 2α1 cos λ
where the relation eiλ = cos λ + i sin λ and the rules for working with sine and
cosine functions have been used. Autocorrelation functions, partial autocorre-
lation functions, and spectral densities of two AR(1) processes are depicted in
Figure 2.6 together with a single realization of each of the processes. Notice that
the left-hand process has positive autocorrelation and is therefore less volatile
than the right-hand one for which consecutive members are negatively corre-
lated. Consequently, the spectral density of the latter process has more mass at
high frequencies than that of the left-hand process.
    If, for an AR( p) process, α(z) = 0 for some complex number z with |z| ≤ 1,
the process is nonstationary. For the special case in which the AR operator has
a unit root, that is, the polynomial α(z) has a root for z = 1 so that α(1) = 0,
the operator can be factored as
         α(L) = (1 − α1∗ L − · · · − α ∗p−1 L p−1 )(1 − L).
          Univariate Time Series Analysis                                              25

Replacing 1 − L by , we obtain an AR( p − 1) model, (1 − α1∗ L − · · · −
α ∗p−1 L p−1 )yt = u t for the first differences of yt . If α ∗ (L) = 1 − α1∗ L − · · · −
α ∗p−1 L p−1 has all its roots outside the complex unit circle, yt is station-
ary and, hence, yt ∼ I(1). If, however, α ∗ (z) has again a unit root, further
differencing is necessary to obtain a stationary process, and yt ∼ I(d) with
d > 1. This relation between the unit roots of the AR operator and the integrat-
edness of the process explains why an integrated process is sometimes called a
unit root process.
    As an example, consider the AR(2) process yt = 1.5yt−1 − 0.5yt−2 + u t .
The AR operator is α(L) = 1 − 1.5L + 0.5L 2 , and thus α(1) = 1 − 1.5 +
0.5 = 0. Hence, α(L) = (1 − 0.5L)(1 − L) and yt has a unit root. It can be
written alternatively as yt = 0.5yt−1 + u t . Clearly, α ∗ (z) = (1 − 0.5z) has
a root for z = 2 that is outside the complex unit circle. Thus, the differenced
process is stable and stationary. In other words, yt ∼ I(1).
    For seasonal processes, α(z) may have roots z on the complex unit circle
with z = 1. For example,
                      √      for a quarterly process there may be roots for z = ±i
and −1, where i = −1 as before. These roots are sometimes called seasonal
unit roots, and the associated process is said to have seasonal unit roots. Notice
that the quarterly seasonal differencing operator 4 can be factored as 4 =
1 − L 4 = (1 − L)(1 + i L)(1 − i L)(1 + L).


2.3.2 Finite-Order Moving Average Processes
If the process yt can be represented as
          yt = u t + m 1 u t−1 + · · · + m q u t−q ,                                (2.6)
where u t is again zero mean white noise, the process is called a moving average
of order q (MA(q)). The process is stationary, and, with the help of the lag
operator, it can be written more compactly as
          yt = (1 + m 1 L + · · · + m q L q )u t       or   yt = m(L)u t ,
with m(L) = 1 + m 1 L + · · · + m q L q . Uniqueness of the MA representation
requires restrictions on the coefficients. Uniqueness is guaranteed, for example,
if m(z) = 0 for complex numbers z with |z| < 1. If in fact m(z) = 0 for |z| ≤
1, the process is called invertible. In that case, it has an infinite order AR
representation
                                           
                                           ∞
          m(L)−1 yt = α(L)yt = yt −               α j yt− j = u t ,
                                            j=1

where α(L) is such that α(L)m(L) = 1. For example, for the MA(1) process
yt = u t + m 1 u t−1 , invertibility
                                is ensured        if |m 1 | < 1. In that case we get the
AR representation yt = − ∞         j=1 (−m 1 ) j
                                                 yt− j + ut .
26       Helmut Lütkepohl




Figure 2.7. Autocorrelation functions, partial autocorrelation functions, and spectral
densities of MA(1) processes.


   It is easy to see that qthe process (2.6) has zero mean (E(yt ) = 0),
variance σ y2 = γ0 = σu2 j=0 m 2j (m 0 = 1) as well as autocovariances
         q−h
γh = σu2 j=0 m j+h m j (h = ±1, . . . , ±q), and γh = 0 for h = ±(q + 1),
±(q + 2) . . . . Moreover, the spectral density is
          f y (λ) = (2π)−1 σu2 |m(eiλ )|2 .
As a special case we obtain a constant spectral density of a white noise process,
f u (λ) = (2π)−1 σu2 . For the MA(1) process yt = u t + m 1 u t−1 we have
          f y (λ) = (2π)−1 σu2 |1 + m 1 eiλ |2 = (2π)−1 σu2 (1 + m 21 + 2m 1 cos λ).
    The autocorrelation functions, partial autocorrelation functions, and spectral
densities of two first order MA processes are plotted in Figure 2.7. Obviously,
the autocorrelations have a cutoff point at lag 1, whereas the partial autocorre-
lations taper off to zero. Thus, the behavior of these quantities, in this respect,
is opposite to that of finite-order AR processes. This feature is one corner-
stone in the popular Box–Jenkins specification procedure for time series mod-
els [Box & Jenkins (1976)]. In contrast, the spectral densities of AR and MA
          Univariate Time Series Analysis                                              27

processes can be very similar. Therefore, it is difficult to distinguish between
the two classes of processes on the basis of spectral density plots – especially if
only estimates are available. Notice, however, that the process generating more
volatile time series has a spectral density with more mass at high frequencies.

2.3.3 ARIMA Processes
A mixed ARMA process yt with AR order p and MA order q (ARMA( p, q))
has the representation
          yt = α1 yt−1 + · · · + α p yt− p + u t + m 1 u t−1 + · · · + m q u t−q ,   (2.7)
where all the symbols have the previously specified definitions. In compact lag
operator notation, we have
          α(L)yt = m(L)u t
with α(L) = 1 − α1 L − · · · − α p L p and m(L) = 1 + m 1 L + · · · + m q L q .
The process is stable and stationary if α(z) = 0 for |z| ≤ 1, and it is invert-
ible if m(z) = 0 for |z| ≤ 1. If the process is stable, it has a pure (possibly
infinite order) MA representation from which the autocorrelations can be ob-
tained. Conversely, if the process is invertible, it has a pure (infinite order) AR
representation. For mixed processes with nontrivial AR and MA parts, the au-
tocorrelations and partial autocorrelations both do not have a cutoff point but
taper off to zero gradually. The spectral density of the ARMA process (2.7) is
           f y (λ) = (2π)−1 σu2 |m(eiλ )/α(eiλ )|2 .
    A stochastic process yt is called an ARIMA( p, d, q) process (yt ∼ ARIMA-
( p, d, q)) if it is I(d) and the d times differenced process has an ARMA( p, q)
representation, that is d yt ∼ ARMA( p, q). For processes with distinct sea-
sonality, so-called seasonal models are sometimes considered. For a series with
seasonal periodicity s (e.g., s = 4 for quarterly data), a general model form is
          αs (L s )α(L)sD d yt = m s (L s )m(L)u t ,
where α(L) = 1 − α1 L − · · · − α p L p , αs (L s ) = 1 − αs1 L s − · · · − αs P L s P ,
m(L) = 1 + m 1 L + · · · + m q L q , and m s (L s ) = 1 + m s1 L s + · · · + m s Q L s Q .
In other words, in addition to the regular AR and MA operators, there are
operators in seasonal powers of the lag operator. Such operators can some-
times result in a more parsimonious parameterization of a complex seasonal
serial dependence structure than a regular nonseasonal operator. As an ex-
ample consider the quarterly ARMA process (1 − α41 L 4 )(1 − α1 L)yt = u t or
yt = α1 yt−1 + α41 yt−4 − α1 α41 yt−5 + u t . Thus, although the AR part involves
five lags, it can be represented with two parameters and, hence, it is parameter-
ized more parsimoniously than a full AR(5) process. Notice that also a seasonal
differencing operator may be included.
28        Helmut Lütkepohl

2.3.4 Autoregressive Conditional Heteroskedasticity
So far we have focused on modeling the conditional mean of the DGP of a time
series given the past of the process. For example, if u t is a white noise process
of independent random variables and yt is an AR( p) process as in (2.4), then
E(yt |yt−1 , yt−2 , . . .) = α1 yt−1 + · · · + α p yt− p . Hence, the AR part takes care
of the conditional mean of yt . Engle (1982) observed that, for series with large
outliers and volatility clustering as in the DAFOX return series in Figure 2.1, the
conditional second moments may have an important structure as well. Therefore,
he introduced autoregressive conditional heteroskedasticity (ARCH) models.
By now the acronym ARCH stands for a wide range of models for changing
conditional volatility. In this section the original models and generalized ARCH
(GARCH) models will be introduced briefly. A more extensive introduction to
modeling conditional heteroskedasticity is given in Chapter 5.
    Consider the univariate AR( p) model (2.4). The residuals u t of this model
are said to follow an autoregressive conditionally heteroskedastic process of
order q (ARCH(q)) if the conditional distribution of u t , given its past t−1 =
{u t−1 , u t−2 , . . .}, has zero mean and the conditional variance is
          σt2 = Var(u t |t−1 ) = E(u 2t |t−1 ) = γ0 + γ1 u 2t−1 + · · · + γq u 2t−q ,
                                                                                    (2.8)
that is, u t |t−1 ∼ (0, σt2 ). Of course, alternatively the u t s may be the residuals
of a more general time series model.
    Originally, Engle (1982) in his seminal paper on ARCH models assumed
the conditional distribution to be normal, u t |t−1 ∼ N (0, σt2 ). Even with this
special distributional assumption the model is capable of generating series with
characteristics similar to those of many observed financial time series. In par-
ticular, it is capable of generating series with volatility clustering and outliers
similar to the DAFOX series in Figure 2.1. Although the conditional distribution
is normal, the unconditional distribution will generally be markedly nonnormal.
Furthermore, the u t s will be serially uncorrelated, that is, they are white noise.
    The German long-term interest rate series is considered as an example.
We have fitted an AR(4) model to the data, and the residuals together with
autocorrelations and autocorrelations of the squared residuals are shown in
Figure 2.8. The residual series shows some variation in its variability. Whereas
the variance is low at the end, there is a substantially larger volatility in some
earlier periods. Although the autocorrelation function is consistent with a white
noise process, the autocorrelations of the squared residuals clearly show that
there may be some dependence structure in the second moments.
    It was observed by some researchers that, for many series, an ARCH process
with fairly large order is necessary to capture the dynamics in the conditional
variances. Therefore, Bollerslev (1986) and Taylor (1986) have proposed gain-
ing greater parsimony by extending the model in a way similar to the approach
Figure 2.8. Plots of residuals from AR(4) model for German long-term interest rate,
autocorrelations, and partial autocorrelations of residuals and squared residuals.
30       Helmut Lütkepohl

used for extending the AR model when we moved to mixed ARMA models.
They suggested the generalized ARCH (GARCH) model with conditional vari-
ances given by
         σt2 = γ0 + γ1 u 2t−1 + · · · + γq u 2t−q + β1 σt−1
                                                         2
                                                            + · · · + βn σt−n
                                                                           2
                                                                              .   (2.9)
These models are abbreviated as GARCH(q, n). They generate processes with
existing unconditional variance if and only if the coefficient sum
         γ1 + · · · + γq + β1 + · · · + βm < 1.
If this condition is satisfied, u t has a constant unconditional variance given by
                                     γ0
          σu2 =                                        .
                1 − γ1 − · · · − γq − β1 − · · · − βn
A more extensive discussion of ARCH-type processes is provided in Chapter
5. For the remainder of this chapter, a basic knowledge of these models is
sufficient.

2.3.5 Deterministic Terms
So far we have considered purely stochastic processes with zero mean. In prac-
tice, such processes are rarely sufficient for an adequate representation of real-
life time series. Consider, for instance, the U.S. investment series in Figure 2.1,
which may be generated by a stationary process. Its mean is not likely to be zero,
however. Consequently, we have to allow at least for a nonzero mean term. For
many series, more general deterministic terms may be required. For example, a
polynomial trend term or seasonal dummy variables may have to be included.
     We will do so by adding such deterministic terms simply to the stochastic part
of the process, that is, we assume that the observable process yt is equal to µt +
xt , where µt is a purely deterministic part and xt is a purely stochastic process.
For example, xt may be an ARIMA process, whereas µt = µ or µt = µ0 + µ1 t
or µt = µ0 + µ1 t + δ1 s1t + · · · + δq sqt are examples of deterministic terms.
Here sit represents a seasonal dummy variable that has the value 1 if t refers to
the ith season but is zero otherwise. The number of seasons is assumed to be q.
     Although there may be series for which our assumption of an additive relation
between the deterministic and stochastic parts of the DGP does not hold, the
assumption is often not very restrictive in practice and it is therefore usually
supposed to hold in the following chapters.

2.4 Parameter Estimation

2.4.1 Estimation of AR Models
Estimation of AR processes is particularly easy because it can be done by
ordinary least squares (OLS). Therefore, it will be considered first before we
comment on the estimation of more complicated models. If the deterministic
          Univariate Time Series Analysis                                                31

term is linear in the unknown parameters, it can be included in a straightforward
way in the regression model used for estimation. To simplify the presentation, we
assume that the deterministic term consists of a constant only, that is, µt = µ
and thus yt = µ + xt ; hence, α(L)yt = α(L)µ + α(L)xt = α(1)µ + u t . The
estimation equation then becomes
          yt = ν + α1 yt−1 + · · · + α p yt− p + u t ,                               (2.10)
where ν = α(1)µ = (1 − α1 − · · · − α p )µ. If it is assumed that presample val-
ues y− p+1 , . . . , y0 are available in addition to the sample values y1 , . . . , yT , the
OLS estimator of α = (ν, α1 , . . . , α p ) is
                                  −1
                     T                 T
                                
         α̂ =            Yt−1 Yt−1         Yt−1 yt ,
                    t=1                t=1

where Yt−1 = (1, yt−1 , . . . , yt− p ) . If the process is stationary and does not
have unit roots, then, under standard assumptions [see, e.g., Brockwell & Davis
(1987)],
                                                                 −1 
         √                                            T
            T (α̂ − α) → N 0, σu2 plim T −1                           
                        d                                       
                                                         Yt−1 Yt−1
                                                       t=1

or, written in a more intuitive although less precise way,
                                        −1 
                            T
          α̂ ≈ N α, σu2               
                                Yt−1 Yt−1     .
                                t=1

The residual variance may be estimated consistently as
                       1     T
                                                             1 T
          σ̂u2 =                û 2         or      
                                                     σu2 =        û 2 ,
                   T − p − 1 t=1 t                           T t=1 t
                    
where û t = yt − Yt−1 α̂ (t = 1, . . . , T ) are the OLS residuals.
   As an example we have estimated an AR(4) model for the U.S. investment
series. The first four observations are set aside as presample values, and con-
sequently we have sample values for 1948Q2 − 1972Q4; hence, T = 99. The
resulting estimated model is
          yt = 0.82 + 0.51 yt−1 − 0.10 yt−2 + 0.06 yt−3 − 0.22 yt−4 + û t ,
                   (2.76)   (4.86)       (−0.83)          (0.54)           (−2.02)

where the t-ratios of the estimated parameters (e.g., tα̂i = α̂i /σ̂α̂i ) are given
in parentheses. Here σ̂α̂i denotes an estimator of the standard deviation
of α̂i . In other words, σ̂α̂i is the square root of the diagonal element of
      T           
σ̂u2 ( t=1  Yt−1 Yt−1 )−1 , which corresponds to α̂i .
     It may be worth noting that OLS estimation of the model (2.10) is equivalent
to maximum likelihood (ML) estimation conditional on the initial values if
32       Helmut Lütkepohl

the process is normally distributed (Gaussian). In that case, the estimators have
asymptotic optimality properties. Moreover, the results for the AR coefficients
also hold if yt is I(1) and the AR order is greater than one ( p > 1). In that case,
the covariance matrix of the asymptotic distribution is singular, however [see,
e.g., Sims, Stock & Watson (1990)]. This fact has, for instance, implications for
setting up F-tests for hypotheses regarding the coefficients. Therefore, although
the asymptotic theory remains largely intact for unit root processes, it may still
be preferable to treat them in a different way, in particular, if inference regarding
the unit root is of interest. This issue is discussed in more detail in Section 2.7.
If yt is known to be I(d), then it is preferable to set up a stable model for d yt .


2.4.2 Estimation of ARMA Models
If a model for the DGP of a time series involves MA or GARCH terms, es-
timation becomes more difficult because the model is then nonlinear in the
parameters. It is still possible to set up the Gaussian likelihood function and
use ML or, if the conditional distributions of the observations are not Gaussian
(normally distributed), quasi-ML estimation. The joint density of the random
variables y1 , . . . , yT may be written as a product of conditional densities

          f (y1 , . . . , yT ) = f (y1 ) · f (y2 |y1 ) · · · f (yT |yT −1 , . . . , y1 ).

Hence, the log-likelihood function for an ARMA( p, q) process α(L)yt =
m(L)u t has the form
                                                      
                                                      T
         l(α1 , . . . , α p , m 1 , . . . , m q ) =         lt (·),                         (2.11)
                                                      t=1

where
                   1        1
         lt (·) = − log 2π − log σu2 − (m(L)−1 α(L)yt )2 /2σu2
                   2        2
if the conditional distributions of the yt are normally distributed. Maximiz-
ing the log-likelihood results in ML or quasi-ML estimators in the usual way.
The optimization problem is highly nonlinear and should observe inequality
restrictions that ensure a unique, stable ARMA representation. Notice that, for
uniqueness, the model must be such that cancellation of parts of the MA term
with parts of the AR operator is not possible. Under general conditions, the
resulting estimators will then have an asymptotic normal distribution, which
may be used for inference.
    Because iterative algorithms usually have to be used in optimizing the log-
likelihood, start-up values for the parameters are required. Different procedures
may be used for this purpose. They depend on the model under consideration.
For example, for an ARMA model, one may first fit a pure AR model with long
         Univariate Time Series Analysis                                                 33

order h by OLS. Denoting the residuals by û t (h) (t = 1, . . . , T ), one may then
obtain OLS estimates of the parameters from the regression equation

         yt = α1 yt−1 + · · · + α p yt− p + u t + m 1 û t−1 (h) + · · · + m q û t−q (h).

These estimates may be used for starting up an iterative maximization of the
log-likelihood function.


2.5 Model Specification
Specifying the kinds of models we have discussed so far requires deciding on
the orders of the various operators and possibly deterministic terms and dis-
tributional assumptions. This can be done by fitting a model, which includes
all the terms that may be of interest, and then performing tests for model ad-
equacy and model reduction in the usual way. This approach is limited by the
fact, however, that the parameters in an overspecified ARMA model may not be
unique; therefore, the estimators do not have the usual asymptotic properties.
Thus, model selection procedures are often applied for specifying the orders.
We discuss some of them in the context of pure AR models next.


2.5.1 AR Order Specification Criteria
Many of the AR order selection criteria are of the general form

         Cr (n) = log 
                      σu2 (n) + cT ϕ(n),
                       T
where  σu2 (n) = T −1 t=1     û t (n)2 is the error variance estimator based on the
OLS residuals û t (n) from an AR model of order n, cT is a sequence indexed by
the sample size, and ϕ(n) is a function that penalizes large AR orders. For the
criteria discussed in this section, ϕ(n) is the order of the fitted process and cT
is a weighting factor that may depend on the sample size. The way this factor
is chosen effectively distinguishes the different criteria. The first term on the
right-hand side, log σu2 (n), measures the fit of a model with order n. This term
decreases for increasing order because there is no correction for degrees of
freedom in the variance estimator. It is important to notice, however, that the
sample size is assumed to be constant for all orders n and, hence, the number of
presample values set aside for estimation is determined by the maximum order
pmax , say. The order that minimizes the criterion is chosen as estimator p̂ of the
true AR order p.
    The following are examples of criteria that have been used in practice:

                                    2
          AIC(n) = log 
                       σu2 (n) +      n       [Akaike (1973, 1974)],
                                    T
34            Helmut Lütkepohl

Table 2.1. Order selection criteria for U.S. investment series

                                                       n
          0        1       2       3       4       5          6       7       8       9       10
AIC (n)   2.170    1.935   1.942   1.950   1.942   1.963      1.990   2.018   1.999   1.997   2.032
HQ (n)    2.180    1.956   1.974   1.997   1.995   2.027      2.065   2.104   2.097   2.107   2.153
SC (n)    2.195    1.987   2.020   2.059   2.073   2.122      2.176   2.231   2.241   2.268   2.331



                                       2 log log T
              HQ(n) = log 
                          σu2 (n) +                n              [Hannan & Quinn (1979)]
                                            T
and
                                       log T
              SC(n) = log 
                          σu2 (n) +          n             [Schwarz (1978) and
                                         T
                                                              Rissanen (1978)].

Here the term cT equals 2/T , 2 log log T/T , and log T/T for the Akaike infor-
mation criterion (AIC), the Hannan-Quinn criterion (HQ), and the Schwarz
criterion (SC), respectively. The criteria have the following properties: AIC
asymptotically overestimates the order with positive probability, HQ estimates
the order consistently (plim p̂ = p), and SC is even strongly consistent ( p̂ → p
a.s.) under quite general conditions if the actual DGP is a finite-order AR pro-
cess and the maximum order pmax is larger than the true order. These results
hold for both stationary and integrated processes [Paulsen (1984)]. Denoting
the orders selected by the three criteria by p̂(AIC), p̂(HQ), and p̂(SC ), respec-
tively, the following relations hold even in small samples of fixed size T ≥ 16
[see Lütkepohl (1991, Chapters 4 and 11)]:

              p̂(SC) ≤ p̂(HQ) ≤ p̂(AIC).

Thus, using SC results in more parsimonious specifications with fewer param-
eters than HQ and AIC if there are differences in the orders chosen by the three
criteria.
    In Table 2.1, the values of the order selection criteria for the U.S. investment
series are given. They all suggest an order of 1, although it was seen earlier
that the coefficient attached to lag four has a t-value greater than 2. Using the
t-ratios of the estimated coefficients and reducing the lag length by 1 if the
t-ratio of the coefficient associated with the highest lag is smaller than 2 or
some other threshold value is another obvious possibility for choosing the lag
length. Of course, by relying on model selection criteria one may end up with a
different model than with sequential testing procedures or other possible tools
for choosing the AR order.
          Univariate Time Series Analysis                                                35

2.5.2 Specifying More General Models
In principle, model selection criteria may also be used in specifying more gen-
eral models such as ARMA processes. One possible difficulty may be that
estimation of many models with different orders is required, some of which
have overspecified orders, and thus cancellation of parts of the AR and MA
operators is possible. In that case iterative algorithms may not converge owing
to the nonuniqueness of parameters. Therefore, simpler estimation methods are
sometimes proposed for ARMA models at the specification stage. For example,
the method for computing start-up values for ML estimation may be used (see
Section 2.4.2). In other words, an AR(h) model with large order h is fitted first
by OLS to obtain residuals û t (h). Then models of the form
          yt = α1 yt−1 + · · · + αn yt−n + u t + m 1 û t−1 (h) + · · · + m l û t−l (h)
                                                                                      (2.12)
are fitted for all combinations (n, l) for which n, l ≤ pmax < h. The combination
of orders minimizing a criterion
          Cr (n, l) = log 
                          σu2 (n, l) + cT ϕ(n, l)
is then chosen as an estimator for the true order ( p, q). This procedure was
proposed by Hannan & Rissanen (1982). It is therefore known as the Hannan–
Rissanen procedure. Here the symbols have definitionsT        analogous to those of
the pure AR case. In other words,  σu2 (n, l) = T −1 t=1   û t (n, l)2 , where û t (n, l)
is the residual from fitting (2.12) by OLS, cT is a sequence depending on the
sample size T , and ϕ(n, l) is a function that penalizes large orders. For example,
the corresponding AIC is now
                                          2
          AIC(n, l) = log 
                          σu2 (n, l) +      (n + l).
                                          T
Here the choice of h and pmax may affect the estimated ARMA orders. Hannan
& Rissanen (1982) have suggested letting h increase slightly faster than log T .
In any case, h needs to be greater than pmax , which in turn may depend on the
data of interest. For example, pmax should take into account the observation
frequency.
    Generally, there may be deterministic terms in the DGP. They can, of course,
be accommodated in the procedure. For example, if the observations fluctuate
around a nonzero mean, the sample mean should be subtracted, that is, the
observations should be mean-adjusted before the Hannan–Rissanen procedure
is applied. Similarly, if the series has a deterministic linear trend, µ0 + µ1 t, then
the trend parameters may be estimated by OLS in a first step and the estimated
trend function is subtracted from the original observations before the order
selection procedure is applied. Alternatively, the linear trend may be estimated
36          Helmut Lütkepohl

Table 2.2. Hannan–Rissanen model selection for generated AR(1)
(yt = 0.5yt−1 + u t ) with h = 8 and pmax = 4

                                                MA order
Selection      AR
criterion      order    0             1            2           3            4
               0         0.259         0.093        0.009      −0.013       −0.002
               1        −0.055∗       −0.034       −0.017      −0.001        0.019
AIC            2        −0.034        −0.012        0.004       0.017        0.032
               3        −0.012         0.011        0.006       0.028        0.049
               4         0.005         0.028        0.026       0.045        0.060


from the first-stage AR(h) approximation, and the corresponding trend function
may be subtracted from the yt ’s before the ARMA order selection routine is
applied. It is also worth noting that, in this procedure, the stochastic part is
assumed to be stationary. Therefore, if the original series is integrated, it should
be differenced appropriately to make it stationary.
    For illustration, T = 100 observations were generated with the AR(1) pro-
cess yt = 0.5yt−1 + u t , and the Hannan–Rissanen procedure was applied with
h = 8 and pmax = 4. These settings may be realistic for a quarterly series. The
results obtained with the AIC criterion are shown in Table 2.2. In this case
the ARMA orders p = 1 and q = 0 are detected correctly. Although the series
was generated without a deterministic term, a constant term is included in the
procedure. More precisely, the sample mean is subtracted from the yt ’s before
the procedure is applied.
    There are also other formal statistical procedures for choosing ARMA or-
ders [e.g., Judge, Griffiths, Hill, Lütkepohl & Lee (1985, Section 7.5)]. A more
subjective method is the classical Box–Jenkins approach to ARMA model spec-
ification. It relies on an examination of the sample autocorrelations and partial
autocorrelations of a series to decide on the orders. As we have seen in Section
2.3, the true autocorrelations of a pure MA process have a cutoff point corre-
sponding to the MA order, whereas the partial autocorrelations of such processes
taper off. In contrast, for pure, finite-order AR processes the autocorrelations
taper off, whereas the partial autocorrelations have a cutoff point corresponding
to the AR order. These facts can help in choosing AR and MA orders.
    For example, in Figure 2.9 sample autocorrelations and partial autocorre-
lations of AR(1) and AR(2) processes are depicted that illustrate the point. In
particular, the autocorrelations and partial autocorrelations of the first AR(1)
clearly reflect the theoretical properties of the corresponding population
                                                                       √       quan-
tities (see also Figure 2.6). The dashed lines in the figures are ±2/ T bounds
around the zero line that can be used to assess whether the estimated quantities
are different from zero, as explained in Section 2.2.2. Generally, it is impor-
tant to keep in mind that the sampling variability of the autocorrelations and
          Univariate Time Series Analysis                                            37




Figure 2.9. Estimated autocorrelations and partial autocorrelations of artificially gen-
erated AR(1) and AR(2) time series (AR(1): yt = 0.5yt−1 + u t ; AR(2): yt = yt−1 −
0.5yt−2 + u t ; sample size T = 100).


partial autocorrelations may lead to patterns that are not easily associated with
a particular process order. For example, the second set of autocorrelations and
partial autocorrelations of an AR(1) process shown in Figure 2.9 are generated
with the same DGP, yt = 0.5yt−1 + u t , as the first set, and still they cannot be
associated quite so easily with an AR(1) process.
   Also for the AR(2) processes underlying Figure 2.9, specifying the order
correctly from the estimated autocorrelations and partial autocorrelations is
not easy. In fact, the pattern for the first AR(2) process is similar to the one of
an MA(1) process shown in Figure 2.7, and the pattern obtained for the second
AR(2) time series could easily come from a mixed ARMA process. In summary,
the estimated autocorrelations and partial autocorrelations in Figure 2.9 show
that guessing the ARMA orders from these quantities can be a challenge. This
experience should not be surprising because even the true theoretical autocor-
relations and partial autocorrelations of AR, MA, and mixed ARMA processes
can be very similar. Therefore, it is not easy to discriminate between them on
the basis of limited sample information.
38       Helmut Lütkepohl




Figure 2.10. Estimated autocorrelations and partial autocorrelations of artificially
generated MA(1) and MA(2) time series (MA(1): yt = u t − 0.7u t−1 ; MA(2): yt =
u t − u t−1 + 0.5u t−2 ; sample size T = 100).




Figure 2.11. Estimated autocorrelations and partial autocorrelations of artificially
generated ARMA(1,1) time series (DGP: yt = 0.5yt−1 + u t + 0.5u t−1 ; sample size
T = 100).
            Univariate Time Series Analysis                                        39

Table 2.3. Hannan–Rissanen model selection for generated MA(2)
(yt = u t − u t−1 + 0.5u t−2 ) with h = 8 and pmax = 4

                                                   MA order
Selection        AR
criterion        order      0           1            2            3            4
                 0          0.820       0.358        0.155        0.171        0.164
                 1          0.192       0.118        0.131        0.115∗       0.134
AIC              2          0.127       0.138        0.153        0.134        0.157
                 3          0.138       0.159        0.162        0.156        0.179
                 4          0.144       0.151        0.173        0.178        0.201
                 0          0.820       0.386        0.212        0.255        0.277
                 1          0.220       0.174∗       0.216        0.227        0.275
SC               2          0.183       0.223        0.266        0.275        0.326
                 3          0.223       0.272        0.303        0.325        0.376
                 4          0.257       0.292        0.342        0.375        0.426



    A similar situation can be observed in Figures 2.10 and 2.11, where
sample autocorrelations and partial autocorrelations of MA(1), MA(2), and
ARMA(1,1) processes are depicted. Although the MA(1) processes can perhaps
be inferred from the estimated autocorrelations and partial autocorrelations (see
also the theoretical quantities depicted in Figure 2.7), it is difficult to guess the
orders of the underlying DGPs of the other time series correctly. In this context it
may be of interest that using the Hannan–Rissanen procedure instead of looking
at the sample autocorrelations and partial autocorrelations does not necessarily
result in correct estimates of the ARMA orders. For example, we have applied
the procedure to the MA(2) time series underlying the last set of autocorrela-
tions and partial autocorrelations shown in Figure 2.10. Using an AR order of
h = 8 in fitting a long AR in the first step of the procedure and a maximum order
of pmax = 4 in the second step, we obtained the results in Table 2.3. Neither the
AIC nor the SC finds the correct orders. This outcome illustrates that it may also
be difficult for formal procedures to find the true ARMA orders on the basis of
a time series with moderate length. Again, given the possible similarity of the
theoretical autocorrelations and partial autocorrelations of ARMA processes
with different orders, this observation should not be surprising. Nevertheless,
less experienced time series analysts may be better off using more formal and
less subjective approaches such as the Hannan–Rissanen procedure.
    Also, keep in mind that finding the correct ARMA orders in the specification
step of the modeling procedure may not be possible in practice anyway when
real economic data are analyzed. Usually in that case no true ARMA orders exist
because the actual DGP is a more complicated creature. All we can hope for
is finding a good and, for the purposes of the analysis, useful approximation.
Moreover, the model specification procedures should just be regarded as a
preliminary way to find a satisfactory model for the DGP. These procedures
40       Helmut Lütkepohl

need to be complemented by a thorough model checking in which modifications
of, and changes to, the preliminary model are possible. Model specification
procedures are described next.

2.6 Model Checking
Once a model has been specified, a range of diagnostic tools are available for
checking its adequacy. Many of them are based on the model residuals. We will
first present several graphical tools for checking the residuals and then turn to
some tests that can be used to investigate specific properties of the residuals.
Finally, the robustness and stability of the model may be checked by estimating
it recursively for different subsamples. The relevant tools are described in this
section.

2.6.1 Descriptive Analysis of the Residuals
Plotting the residual series of a time series model is an important way to detect
possible model deficiencies. For example, outliers, inhomogeneous variances,
or structural breaks may show up in the residual series. For spotting unusual
residuals, a standardization of the residuals may be useful before plotting them.
Denoting the residual series by û t (t = 1, . . . , T ), we obtain the standardized
residuals by subtracting the mean and dividing by the standard deviation; T that is,
                                               ¯ σu , where 
the standardized residuals are û st = (û t − û)/          σu2 = T −1 t=1   (û t −
¯ 2 with û¯ = T −1 T û t . Alternatively, an adjustment for degrees of freedom
û)                   t=1
may be used in the variance estimator. If the residuals are normally distributed
with zero mean, roughly 95% of the standardized residuals should be in a band
±2 around the zero line. It may also be helpful to plot the squared residuals or
squared standardized residuals. Such a plot is helpful in discriminating between
periods of lower and higher volatility.
    Moreover, the autocorrelations and partial autocorrelations of the residu-
als may be worth looking at because these quantities contain information on
possibly remaining serial dependence in the residuals. Similarly, the autocor-
relations of the squared residuals may be informative about possible condi-
tional heteroskedasticity. If there is no leftover autocorrelation or conditional
heteroskedasticity,
               √ the autocorrelations and partial autocorrelations should be
within a ±2/ T -band around zero with a very few exceptions. The actual
asymptotic standard errors of autocorrelations
                               √                   computed from estimation resid-
uals tend to be smaller than 1/ T , especially for low lags [see Lütkepohl (1991,
Proposition 4.6)]. Therefore, autocorrelations and√partial autocorrelations as-
sociated with low lags that reach outside the ±2/ T -band are suspicious and
give rise to concern about the adequacy of the model.
    A rough impression of the main features of the residual distribution can
sometimes be obtained from a plot of the estimated density. It may be determined
           Univariate Time Series Analysis                                   41

Table 2.4. Some possible kernels for density estimation

Kernel name                      K (u)
Gaussian                         (2π)−1/2 exp(−u 2 /2)
                                 
                                   15
                                   16
                                      (1 − u 2 )2 for |u| < 1
Biweight
                                   0              otherwise
                                 
                                   1
                                   2
                                      for |u| < 1
Rectangular
                                   0 otherwise
                                 
                                     1 − |u| for |u| < 1
Triangular
                                     0       otherwise
                                                   √           √
                                     3
                                     4
                                       (1 − 15 u 2 )/5 for |u| < 5
Epanechnikov
                                     0                 otherwise



using a kernel estimator of the form
                                                       
                                 T
                                       u − û st
             fˆh (u) = (T h)−1       K                      ,
                                 t=1
                                         h
where h is the bandwidth or window width and K (·) is a kernel function, which
is typically a symmetric (about zero) probability density function (pdf). For
example, the standard normal pdf, K (u) = (2π)−1/2 exp(−u 2 /2), may be used.
Some other possible kernels are listed in Table 2.4 (see also Chapter 7 for
further discussion of kernel estimators). The choice of kernel function often
does not make much difference for the estimated density. A possible value for
the bandwidth is given by

           0.9T −1/5 min{σ̂u , interquartile range/1.34},

as recommended in Silverman (1986, p. 48). Here the interquartile range of an
assumed underlying normal distribution is used. To check the implications of
varying the bandwidth, h may alternatively be chosen manually [see Silverman
(1986, Section 3.4) for further discussion of bandwidth choice].
   In Figure 2.12, some diagnostics for the residuals of the AR(4) model for the
U.S. investment series are presented. The standardized residuals are generally
within the range [−2, 2], as one would expect for a normally distributed series.
The squared residuals show a fairly homogeneous variability of the series.
Autocorrelations and partial autocorrelations also do not give rise to concern
about the adequacy of the fitted model. Density estimates based on different
kernels are depicted in Figure 2.13. Clearly, they differ a bit. Some have two
Figure 2.12. Diagnostics of AR(4) residuals of U.S. investment series.

42
         Univariate Time Series Analysis                                        43




Figure 2.13. Kernel density estimates of AR(4) residuals of U.S. investment series
(bandwidth h = 0.301).

larger peaks, whereas others point to a unimodal underlying distribution. Overall
they do not provide strong evidence that the residuals are not from an underlying
normal distribution.

2.6.2 Diagnostic Tests of the Residuals
Several statistical tests are available for diagnostic purposes. Tests for autocor-
relation, nonnormality, ARCH, and general misspecification are often reported
in the literature. We will present possible candidates in this section.
44        Helmut Lütkepohl

Portmanteau test for residual autocorrelation. The portmanteau test checks
the null hypothesis that there is no remaining residual autocorrelation at lags 1
to h against the alternative that at least one of the autocorrelations is nonzero.
In other words, the pair of hypotheses
            H0 : ρu,1 = · · · = ρu,h = 0
                  versus
            H1 : ρu,i = 0 for at least one i = 1, . . . , h
is tested. Here ρu,i = Corr(u t , u t−i ) denotes an autocorrelation coefficient of
the residual series. If the û t ’s are residuals from an estimated ARMA( p, q)
model, a possible test statistic is
                    
                    h
          Qh = T             ρ̂u,
                               2
                                  j,
                       j=1
                      T
where ρ̂u, j = T −1 t=      j+1 û t û t− j . The test statistic has an approximate χ (h −
                                   s s                                                2

p − q)-distribution if the null hypothesis holds. This statistic is known as the
portmanteau test statistic. The null hypothesis of no residual autocorrelation
is rejected for large values of Q h . For the limiting χ 2 -distribution to hold,
the number of autocorrelations included has to go to infinity (h → ∞) at a
suitable rate with increasing sample size. Therefore, the size of the test may be
unreliable if h is too small, and it may have reduced power if h is large and,
hence, many “noninformative” autocorrelations are included. Also, it has been
found in Monte Carlo studies that the χ 2 approximation to the null distribution
of the test statistic is a good one only for very large sample sizes T . Therefore,
Ljung & Box (1978) have proposed a modified version of the portmanteau
statistic for which the χ 2 approximation was found to be more suitable in some
situations. In JMulTi a version is used that is in line with the corresponding
multivariate statistic discussed in Chapter 3:
                       
                       h
                              1
          Q ∗h = T 2              ρ̂u,
                                    2
                                       j ≈ χ (h − p − q).
                                            2

                        j=1
                            T − j
Clearly, remaining residual autocorrelation indicates a model defect. It may be
worth trying a model with larger orders in that case.

LM test for residual autocorrelation in AR models. Another test for residual
autocorrelation, sometimes known as the Breusch–Godfrey test, is based on
considering an AR(h) model for the residuals
          u t = β1 u t−1 + · · · + βh u t−h + errort
and checking the pair of hypotheses
          H0 : β1 = · · · = βh = 0 versus H1 : β1 = 0 or · · · or βh = 0.
         Univariate Time Series Analysis                                               45

If the original model is an AR( p),
          yt = ν + α1 yt−1 + · · · + α p yt− p + u t ,                             (2.13)
the auxiliary model
         û t = ν + α1 yt−1 + · · · + α p yt− p + β1 û t−1 + · · · + βh û t−h + et
 is fitted. Here û t are the OLS residuals from the model (2.13) [see Godfrey
(1988)]. It turns out that the LM statistic for the null hypothesis of interest can
be obtained easily from the coefficient of determination R 2 of the auxiliary
regression model as
          LMh = TR 2 .
 In the absence of residual autocorrelation, it has an asymptotic χ 2 (h)-distri-
bution. The null hypothesis is rejected if LMh is large and exceeds the critical
value from the χ 2 (h)-distribution. An F version of the statistic with potentially
better small sample properties may also be considered. It has the form
                       R2     T − p−h−1
          FLMh =            ·           ≈ F(h, T − p − h − 1)
                     1 − R2        h
[see Harvey (1990), Kiviet (1986), and Doornik & Hendry (1997) for details].
Lomnicki–Jarque-Bera test for nonnormality. Lomnicki (1961) and Jarque &
Bera (1987) have proposed a test for nonnormality based on the third and fourth
moments or, in other words, on the skewness and kurtosis of a distribution.
Denoting by u st the standardized true model residuals (i.e., u st = u t /σu ), the
test checks the pair of hypotheses
           H0 : E(u st )3 = 0 and E(u st )4 = 3
                 versus
           H1 : E(u st )3 = 0 or E(u st )4 = 3,
that is, it checks whether the third and fourth moments of the standardized
residuals are consistent with a standard normal distribution. If the standardized
estimation residuals are again denoted by û st , the test statistic is
                                             2                           2
                     T            T
                                                   T         T
                               −1                         −1
           LJB =             T            s 3
                                      (û t )    +      T        (û t ) − 3 ,
                                                                     s 4
                     6            t=1
                                                   24        t=1
              T
where T −1 t=1       (û st )3 is a measure for the skewness of the distribution and
  −1
       T
        t=1 (û t ) measures the kurtosis. The test statistic has an asymptotic χ (2)-
                s 4                                                              2
T
distribution if the null hypothesis is correct, and the null hypothesis is rejected if
LJB is large. If H0 is rejected, the normal distribution is clearly also rejected. On
the other hand, if the null hypothesis holds, this does not necessarily mean that
the underlying distribution is actually normal but only that it has the same first
46       Helmut Lütkepohl

four moments as the normal distribution. The test is still quite popular in practice
because the first four moments are often of particular interest, and deviations
from the normal distribution beyond that may not be of equal importance.
   If nonnormal residuals are found, this is often interpreted as a model de-
fect; however, much of the asymptotic theory on which inference in dynamic
models is based, strictly speaking, works also for certain nonnormal residual
distributions. Still, nonnormal residuals can be a consequence of neglected
nonlinearities, for example. Modeling such features as well may result in a
more satisfactory model with normal residuals. Sometimes, taking into account
ARCH effects may help to resolve the problem. An ARCH test is therefore also
performed routinely in model checking.

ARCH–LM test. A popular test for neglected conditional heteroskedasticity
or, briefly, for ARCH, is based on fitting an ARCH(q) model to the estimation
residuals,
         û 2t = β0 + β1 û 2t−1 + · · · + βq û 2t−q + errort ,             (2.14)
and checking the null hypothesis
         H0 : β1 = · · · = βq = 0 versus H1 : β1 = 0 or . . . or βq = 0.
The LM test statistic can be conveniently obtained from the coefficient of de-
termination R 2 of the regression (2.14). More precisely, the LM statistic is
         ARCH L M (q) = TR 2 .
It has an asymptotic χ 2 (q)-distribution if the null hypothesis of no conditional
heteroskedasticity holds [Engle (1982)]. Large values of the test statistic indicate
that H0 is false and, hence, there may be ARCH in the residuals. In that case, it
may be useful to go to Chapter 5 and consider fitting an ARCH or ARCH-type
model to the residuals.

RESET. The RESET (regression specification error test) was proposed by
Ramsey (1969). It is useful for testing a given model against general unspecified
alternatives. It proceeds as follows. Suppose we have a model yt = xt β + u t ,
which may be an AR model with possibly deterministic terms and other regres-
sors. Let us denote the OLS parameter estimator by β̂ and the corresponding
residuals by û t and perform a regression
                          
                          h
         û t = xt β +
                                     j
                                ψ j ŷt + vt ,
                          j=2

where ŷt = xt β̂. The residuals of this regression are denoted by v̂t . Under the
null hypothesis,
         H0 : ψ2 = · · · = ψh = 0,
             Univariate Time Series Analysis                                                  47

Table 2.5. Diagnostics of AR(4) model for U.S. investment series

                                  Tests for residual autocorrelation
Test                 Q 16         Q ∗16        Q 24     Q ∗24         LM2     FLM2    LM6   FLM6
Test statistic     6.75     7.45     10.64 12.40 0.75 0.35              5.99 0.94
Appr. distribution χ 2 (12) χ 2 (12) χ 2 (20) χ 2 (20) χ 2 (2) F(2, 92) χ 2 (6) F(6, 88)
p-value            0.87     0.83     0.96     0.90     0.69 0.71        0.42 0.47
                                             Other diagnostics
Test                    LJB               ARCH LM (1)           ARCH LM (4)      RESET2     RESET3
Test statistic          5.53              0.36                  2.50             0.004      0.003
Appr. distribution      χ 2 (2)           χ 2 (1)               χ 2 (4)          F(1, 99)   F(2, 99)
p-value                 0.06              0.55                  0.64             0.95       1.00


   there is no misspecification, and the test statistic
                         T            T 2
                        ( t=1   û 2t − t=1 v̂t )/(h − 1)
             RESETh = T 2
                             t=1 v̂t /(T − K − h + 1)

   has an approximate F(h − 1, T )-distribution. Here, K is the dimension of xt
   and, hence, the number of regressors in the original model. The null hypothesis
   of no misspecification is again rejected if the test value is large. For this test,
   see also Granger & Teräsvirta (1993). In practice, h = 2 or 3 will be sufficient
   to give an impression of whether the relevant model defects are present that can
   be detected by this test.
      In Table 2.5, diagnostic tests for the AR(4) model of the U.S. investment
   series are given together with p-values. Recall that a p-value represents the
   probability of getting a test value greater than the observed one if the null hy-
   pothesis is true. Hence, the null hypothesis is actually rejected only for p-values
   smaller than 0.1 or 0.05. In the present case, all p-values are relatively large;
   consequently, none of the diagnostic tests indicate problems with the model.

   2.6.3 Stability Analysis
   Another important way to check a model is to investigate its stability over time.
   For this purpose, estimates for different subperiods are usually computed and
   examined. Chow tests offer a formal way to do this. They will be discussed
   next. Thereafter, recursive analysis, which investigates the estimator variability
   for successively extended samples, is discussed. Throughout this section, the
   underlying model is assumed to be an AR( p) process with deterministic terms.

   Chow tests. Chow tests offer a classical possibility for testing for structural
   change. Different variants are often reported: sample-split, break-point, and
48       Helmut Lütkepohl

forecast tests [see, e.g., Doornik & Hendry (1994) or Krämer & Sonnberger
(1986)]. If it is assumed that a structural break may have occurred in period TB ,
the sample-split and break-point tests compare the estimates from the observa-
tions associated with the period before TB with those obtained after TB . More
precisely, the model is estimated by OLS from the full sample of T observations
as well as from the first T1 and the last T2 observations, where T1 < TB and
                                                            (1)      (2)
T2 ≤ T − TB . Denoting the resulting residuals by û t , û t and û t , respectively,
we define
                          
                          T
            σ̂u2 = T −1         û 2t ,
                          t=1
                                                                              
                                              
                                              T1                
                                                                T
           σ̂1,2
             2
                 = (T1 + T2 )−1                     û 2t +                 û 2t ,
                                              t=1             t=T −T2 +1

                          
                          T1                            
                                                        T
         σ̂(1,2)
            2
                 = T1−1         û 2t + T2−1                      û 2t ,
                          t=1                        t=T −T2 +1

                          
                          T1
                 = T1−1
                                   (1)
           σ̂(1)
              2
                                (û t )2 ,
                          t=1

and
                          
                          T
               = T2−1
                                          (2)
         σ̂(2)
            2
                                      (û t )2 .
                        t=T −T2 +1

With this notation, the sample-split test statistic becomes
         λSS = (T1 + T2 )[log σ̂1,2
                                2
                                    − log{(T1 + T2 )−1 (T1 σ̂(1)
                                                              2
                                                                 + T2 σ̂(2)
                                                                         2
                                                                            )}],
and the break-point test statistic is
         λBP = (T1 + T2 ) log σ̂(1,2)
                                 2
                                      − T1 log σ̂(1)
                                                  2
                                                     − T2 log σ̂(2)
                                                                 2
                                                                    .
These test statistics compare the residual variance estimate from a constant
coefficient model with the residual variance estimate of a model that allows for
a change in the parameters. Thereby, they check whether there are significant
differences in the estimates before and after TB . The sample-split test checks the
null hypothesis that the AR coefficients and deterministic terms do not change
during the sample period, whereas the break-point test checks in addition the
constancy of the white noise variance.
   Both test statistics are derived from likelihood ratio principles based on their
respective null hypotheses. Under parameter constancy, they have limiting χ 2 -
distributions with k and k + 1 degrees of freedom, respectively. Here k is the
number of restrictions imposed by assuming a constant coefficient model for
         Univariate Time Series Analysis                                           49

the full sample period. In other words, k is the difference between the sum of
the number of regression coefficients estimated in the first and last subperiods
and the number of coefficients in the full sample model. Note, however, that the
number of parameters may differ in the two subperiods if there are, for instance,
dummy variables that are nonzero only in one of the subsamples. For the break-
point test, an additional degree of freedom is obtained because the constancy
of the residual variance is also tested. The parameter constancy hypothesis is
rejected if the values of the test statistics λSS and/or λBP are large. It may be
worth noting that the names sample-split and break-point tests are sometimes
used for slightly different versions of the tests [e.g., Doornik & Hendry (1994)].
   The Chow forecast test statistic has the form
                  T σ̂u2 − T1 σ̂(1)
                                 2
                                          T1 − K
         λCF =                        ·          ,
                      T1 σ̂(1)
                            2             T − T1
where K is the number of regressors in the restricted, stable model. Thus,
the test compares the full sample residual variance with the residual variance
for the first subperiod. Another way of interpreting this test is that it checks
whether forecasts from the model fitted to the first subsample are compati-
ble with the observations in the second subsample [see Doornik & Hendry
(1994)]. This interpretation leads us to call this test the forecast test, although
this terminology is not used consistently in the literature. The test statistic has
an approximate F(T − T1 , T1 − K )-distribution under the null hypothesis of
parameter constancy. Again, the null hypothesis is rejected for large values
of λCF .
    All three tests may be performed repeatedly for a range of potential break
points TB , and the results may be plotted. Thereby a visual impression of possible
parameter instability is obtained. Of course, the outcomes of the repeated tests
will not be independent, and rejecting the stability of the model when one of the
statistics exceeds the critical value of an individual test may lead to misleading
results. If a sequence of tests is performed and the test decision is based on the
maximum of the test statistics, this has to be taken into account in deriving the
asymptotic distribution of the test statistic. For example, if the sample-split test
is applied to all periods in a set T ⊂ {1, . . . , T }, then we effectively consider a
test based on the test statistic
          sup λSS .
         TB ∈T

The distribution of this test statistic is not χ 2 under the stability null hypothesis
but was derived by Andrews (1993). Using such a test or similar tests considered
by Andrews & Ploberger (1994) and Hansen (1997) is useful if the timing of a
possible break point is unknown. Similar comments also apply for the forecast
version of the Chow test.
50        Helmut Lütkepohl




Figure 2.14. Chow tests for AR(4) model of U.S. investment series.


    Unfortunately, it turns out that, in samples of common size, the χ 2 and F
approximations to the actual distributions may be very poor even if a single
break point is tested. The actual rejection probabilities may be much larger than
the desired Type I error. Therefore, Candelon & Lütkepohl (2001) have pro-
posed using bootstrap versions of the tests. They are obtained by estimating the
model of interest, denoting the estimation residuals by û t , computing centered
residuals û 1 − û,              ¯ and generating bootstrap residuals u ∗ , . . . , u ∗ by
                 ¯ . . . , û T − û,
                                                                          1            T
randomly drawing with replacement from the centered residuals. These quan-
tities are then used to compute bootstrap time series recursively starting from
given presample values y− p+1 , . . . , y0 for an AR( p) model. The model of in-
terest is then reestimated with and without stability restriction and bootstrap
versions of the statistics of interest – for instance, λ∗SS , λ∗BP , and λ∗CF are com-
puted. If these steps are repeated many times, critical values are obtained as the
relevant percentage points from the empirical distributions of the bootstrap test
statistics. The stability hypothesis is rejected if the original statistic (λSS , λBP
or λCF ) exceeds the corresponding bootstrap critical value. Alternatively, the
p-values of the tests may be estimated as the fraction of times the values of the
bootstrap statistics exceed the original statistics.
    In Figure 2.14, bootstrapped p-values for the sample-split and forecast tests
applied to the U.S. investment series are plotted. In this case the tests are applied
for every quarter from 1955Q1 to 1966Q4. Obviously, not one of the p-values is
below 5%; hence, these tests do not give rise for concern regarding the stability
of the model during the period under test.

Recursive analysis. Many recursive statistics are often computed and plotted to
get an impression of the stability of a model through time. For this purpose, the
model is estimated using only data for t = 1, . . . , τ and letting τ run from some
small value T1 to T . The estimates and their estimated confidence intervals are
          Univariate Time Series Analysis                                           51




Figure 2.15. Recursive statistics for AR(4) model for U.S. investment series.



then plotted for the different τ values. Examples based on the AR(4) model for
the U.S. investment series are given in Figure 2.15. Also, the series of recursive
residuals, that is, the series of standardized one-step forecast errors from a
model estimated on the basis of data up to period τ − 1, is often plotted. It is
also informative about possible structural changes during the sample period.
More precisely, for a linear model yt = xt β + u t (t = 1, . . . , T ) with xt (K × 1)
52        Helmut Lütkepohl

and β̂(τ ) denoting the OLS estimator based on the first τ observations only, that
is,
                             −1
                      
                      τ           
                                  τ
                            
           β̂(τ ) =     xt xt       xt yt ,  τ ≥ K,
                         t=1                t=1

the recursive residuals are defined as
                                   yτ − xτ β̂(τ −1)
          û (rτ ) =                                            1/2 ,   τ = K + 1, . . . , T.
                                      τ −1       
                                                      −1
                         1 + xτ        t=1 x t x t        xτ

If xt consists of fixed, nonstochastic regressors, the forecast error yτ − xτ β̂(τ −1)
is known to have mean zero and variance
                                    −1 
                          
                          τ −1
          σu2 1 + xτ         xt xt    xτ  .
                                t=1

Hence, the recursive residuals have constant variance σu2 . Therefore, even if
some of the regressors are stochastic, the recursive residuals are often plotted
with ±2σ̂u bounds, where
                                      
                                      T
          σ̂u2 = (T − K )−1                 û 2t
                                      t=1

is the usual residual variance estimator. Notice that here the û t ’s are obtained
from OLS estimation of the model based on all T observations. In other words,
              
û t = yt − xt β̂(T ) . It is worth noting that the recursive residuals exist only if the
inverse of τt=1 xt xt exists for all τ = K + 1, . . . , T . Thus, they may not be
available in the presence of dummy variables. For example, if there is an impulse
dummy variable that takes a value of 1 in period TB and       is zero elsewhere, there is
a zero value in xt for t = K + 1, . . . , TB − 1; hence, τt=1 xt xt will be singular
for τ < TB .
     The recursive coefficient estimates and recursive residuals of the U.S. in-
vestment series are plotted in Figure 2.15. The two-standard error bounds of
the coefficient estimates are obtained using the square roots of the diagonal
elements of the matrices
                                −1
                     τ
                               
          σ̂u,τ
            2
                           xt xt     ,
                       t=1

where
                          1   τ
          σ̂u,τ
            2
                =                 (yt − xt β̂(τ ) )2 .
                        τ − K t=1
         Univariate Time Series Analysis                                          53

After a short, more volatile burn-in period, the recursive coefficients of the
example model are relatively stable. Clearly, in the early period, the very small
sample size on which the estimates are based induces a greater uncertainty into
the estimates.
CUSUM tests. The so-called CUSUM, that is, the cumulative sum of recursive
residuals,
                         
                         τ
                                  (r )
         CUSUMτ =                û t /σ̂u ,
                        t=K +1

can also reveal structural changes and is therefore often plotted for τ = K +
1, . . . , T in checking a model. The CUSUM was proposed for this purpose by
Brown, Durbin & Evans (1975). If the CUSUM wanders off too far from the
zero line, this is evidence against structural stability of the underlying model.
A test with a significance level of about
                                        √ 5% is obtained by √  rejecting stability if
CUSUMτ crosses the lines ±0.948[ T − K + 2(τ − K )/ T − K ] [see, e.g.,
Krämer & Sonnberger (1986), Krämer, Ploberger & Alt (1988), or Granger &
Teräsvirta (1993, p. 85)].
    This test is designed to detect a nonzero mean of the recursive residuals due to
shifts in the model parameters. The test may not have much power if there is not
only one parameter shift but various shifts that may compensate their impacts
on the means of the recursive residuals. In that case, the CUSUM-of-squares
plot based on
                                                  
                                  τ
                                           (r ) 2
                                                    
                                                    T
                                                          (r )
             CUSUM − S Q τ =           (û t )        (û t )2
                                 t=K +1         t=K +1

may be more informative. If these quantities cross the lines given by ±c + (τ −
K )/(T − K ), a structural instability is diagnosed. The constant c depends on
the desired significance level, the sample size T , and the number of regressors
in the model. Suitable values of c are, for instance, tabled in Johnston (1984).
    In Figure 2.16, CUSUM and CUSUM-of-squares tests are shown for the
AR(4) model of the U.S. investment series. Obviously, they do not give any
indication of model instability because neither the CUSUMs nor the CUSUM-
SQs leave the respective areas between the dashed lines.

2.7 Unit Root Tests
Because the order of integration of a time series is of great importance for
the analysis, several statistical tests have been developed for investigating it.
The first set of tests checks the null hypothesis that there is a unit root against
the alternative of stationarity of a DGP that may have a nonzero mean term, a
deterministic linear trend, and perhaps seasonal dummy variables. The stochas-
tic part is modeled by an AR process or, alternatively, it is accounted for by
54       Helmut Lütkepohl




Figure 2.16. CUSUM and CUSUM-of-squares tests (5% significance level) of AR(4)
model for U.S. investment series.


nonparametric techniques as in the second group of tests. The third kind of
tests presented in Section 2.7.3 allow, in addition, for structural shifts as they
are observed, for example, in the German GNP series in Figure 2.1. In that
context, procedures are also discussed dealing with the situation in which the
time of the shift is unknown. After that, so-called KPSS tests are introduced.
They take a quite different view at the unit root testing problem by checking a
stationarity null hypothesis against an alternative of a unit root. Finally, in the
last part of this section, tests for seasonal unit roots are considered. There is a
large literature on unit root testing with many more proposals and refinements
that will not be covered herein. A good review of unit root testing is given, for
instance, by Stock (1994).


2.7.1 Augmented Dickey–Fuller (ADF) Tests
If the DGP is an AR( p), as in (2.4), the process is integrated when α(1) =
1 − α1 − · · · − α p = 0, as seen in Section 2.3.1. In other words, a hypothesis
of interest is α(1) = 0. To test this null hypothesis against the alternative of
stationarity of the process, it is useful to reparameterize the model. Subtracting
yt−1 on both sides and rearranging terms results in a regression
                          
                          p−1
         yt = φyt−1 +           α ∗j yt− j + u t ,                        (2.15)
                           j=1

where φ = −α(1) and α ∗j = −(α j+1 + · · · + α p ). In this model we wish to test
the pair of hypotheses H0 : φ = 0 versus H1 : φ < 0. The so-called augmented
Dickey–Fuller (ADF) test statistic is based on the t-statistic of the coefficient φ
from an OLS estimation of (2.15) [Fuller (1976) and Dickey & Fuller (1979)].
It does not have an asymptotic standard normal distribution, but it has a non-
standard limiting distribution. Critical values have been obtained by simulation,
          Univariate Time Series Analysis                                            55

and they are available, for instance, in Fuller (1976) and Davidson & MacKin-
non (1993). It turns out, however, that the limiting distribution depends on the
deterministic terms that have to be included. Therefore, different critical values
are used when a constant or linear trend term is added in (2.15). On the other
hand, including seasonal dummies in addition to a constant or a linear trend
does not result in further changes in the limiting distribution.
     In these tests a decision on the AR order or, equivalently, on the number of
lagged differences of yt has to be made. This choice may be based on the model
selection criteria discussed in Section 2.5, or a sequential testing procedure
may be used that eliminates insignificant coefficients sequentially starting from
some high-order model [see, e.g., Ng & Perron (1995)].
     It may be worth noting that the limiting distribution does not depend on the
α ∗j or other characteristics of the short-term dynamics. Moreover, it was shown
by Said & Dickey (1984) that the tests may also be based on a finite-order AR
model if the actual process is mixed ARMA. In that case the same limiting
distributions are obtained as those for finite-order AR processes if the AR order
approaches infinity at a suitable rate with the sample size.
     In general, if the order of integration of a time series and, hence, the number
of unit roots in the AR operator, are not clear, one should difference the series
first as many times as deemed appropriate for making it stationary. Then a unit
root test is performed for the series in this way differenced. If the unit root is
rejected, a unit root test is applied to the series, which is differenced one time
less than in the previous test. If again a unit root is rejected, the procedure is
repeated until a unit root cannot be rejected. For example, if yt is suspected to
be I(2), then a unit root is tested for 2 yt first. If it is rejected, a unit root test
is applied to yt . If the unit root cannot be rejected in yt , this result confirms
that yt is indeed best modeled as an I(2) series. On the other hand, if a unit root
is also rejected for yt , treating yt as an I(2) series is not likely to be a good
choice. The strategy for determining the number of unit roots by applying a
test first to the series differenced a maximum number of times necessary for
inducing stationarity was proposed by Pantula (1989) and is sometimes referred
to as the Pantula principle. Note, however, that in this procedure, if a linear trend
term is needed in the test for yt , only a constant should be used in the test for
yt because, if yt = µ0 + µ1 t + xt , then yt = µ1 + xt . Similarly, if just
a constant is deemed necessary in the test for yt , then no deterministic term
is necessary in the test for yt . Analogous comments apply if higher order
differences are considered.
     For illustrative purposes we have applied the ADF test to the U.S. investment
and the German interest rate series. Both series may have a nonzero mean
but are not likely to have a linear trend component. Also there is no obvious
seasonality (see Figure 2.1). For demonstration the ADF test was applied to
the investment series in both forms with and without linear trend, and we have
used two different lag orders. The results in Table 2.6 clearly suggest that the
56         Helmut Lütkepohl

Table 2.6. ADF tests for example time series

                      Deterministic        No. of lagged        Test        5%
Variable              term                 differences          statistic   critical value
U.S. investment       constant and         0                    −5.83       −3.41
                      trend                3                    −5.66
                      constant             0                    −5.69       −2.86
                                           3                    −5.24
interest rate        none                 0                    −8.75       −1.94
                                           2                    −4.75
interest rate         constant             1                    −1.48       −2.86
                                           3                    −1.93
Note: Critical values from Davidson & MacKinnon (1993, Table 20.1).


unit root null hypothesis can be rejected. For example, for lag order 3 and just
a constant, the estimated model with t-values in parentheses underneath the
estimates is
           yt = 0.82 − 0.74 yt−1 + 0.25 yt−1 + 0.15 yt−2
                   (2.76)      (−5.24)         (1.97)         (1.34)

                   + 0.22 yt−3 + û t .
                      (2.02)

The t-value of the first lag of the levels variable is just the ADF test statistic.
It is clearly smaller than the 5% critical value of the relevant null distribution.
Hence, the null hypothesis is rejected at this level. Notice also in Table 2.6 that
the critical values are different for the case in which a linear trend is included. Of
course, this is a consequence of having a different null distribution for this case
than for the one in which a constant is the only deterministic term. Another issue
worth mentioning perhaps is that including lagged differences in the model up
to lag order 3 corresponds to a levels AR model of order 4. In other words, if
the preceding model is rewritten in levels, we get an AR(4),
           yt = ν0 + α1 yt−1 + α2 yt−2 + α3 yt−3 + α4 yt−4 + u t .
Therefore, the lag order used in the unit root test is in line with the AR(4) model
considered earlier.
   The results for the German long-term interest rate indicate that this variable
may best be viewed as being I(1). From the graph and the autocorrelations and
partial autocorrelations it cannot be excluded that the series is I(1). Therefore,
the first differences are tested first. For both lag orders the test clearly rejects
the unit root. Note that no deterministic term is included because a linear trend
term is not regarded as plausible for the original series and the constant term
vanishes upon differencing. Testing for a unit root in the original series, the null
         Univariate Time Series Analysis                                          57

hypothesis is not rejected for both lag orders. Therefore we conclude that the
DGP should be modeled as an I(1) process.


2.7.2 Schmidt–Phillips Tests
Schmidt & Phillips (1992) have proposed another variant of tests for the null
hypothesis of a unit root when a deterministic linear trend is present. They have
suggested estimating the deterministic term in a first step under the unit root
hypothesis. Then the series is adjusted for the deterministic terms, and a unit
root test is applied to the adjusted series. More precisely, if a deterministic trend
term µt = µ0 + µ1 t is assumed in the DGP, the parameter µ1 is estimated from
         yt = µ1 + xt
                                       T
by OLS. In other words, µ̃1 = T −1 t=2       yt . Then µ̃0 = y1 − µ̃1 is used as
an estimator of µ0 and an adjusted series is obtained as x̃t = yt − µ̃0 − µ̃1 t.
    Now an ADF-type test discussed previously can be applied to the adjusted
series x̃t using a model without deterministic terms. To allow for more general
DGPs than finite order AR processes, Schmidt & Phillips (1992), however, have
proposed basing the test on a regression x̃t = φ x̃t + et . The test cannot be
based on the OLS estimator φ̃ directly or on its t-statistic tφ̃ because the asymp-
totic distribution under the unit root null hypothesis depends on the dynamic
structure of the error term et . Therefore, an adjustment factor has to be used in
setting up the test statistics. Such an adjustment was previously developed by
Phillips (1987) and Phillips & Perron (1988) in a related context. For the present
case, Schmidt & Phillips (1992) have suggested the following two test statistics:
                                                       σ̃∞
          Z (φ̃) = T φ̃ σ̃∞
                          2
                            /σ̃e2   and   Z (tφ̃ ) =        tα̃ .
                                                        σ̃e
                T 2
Here σ̃e2 = T −1 t=1 ẽt is the variance estimator based on the OLS residuals
of the model yt = ν0 + ν1 t + ρyt−1 + et , and
                                                          
                1                    1 
                   T           lq           T
          σ̃∞ =
            2
                      ẽ + 2
                        2
                                  ωj            ẽt ẽt− j
                T t=1 t       j=1
                                       T t= j+1

is a nonparametric estimator of the so-called long-run variance of et with ω j
being a Bartlett window, ω j = 1 − lq +1 j
                                           . This estimator is sometimes referred
to as the Newey–West estimator. The asymptotic null distributions of these test
statistics are different from those of the ADF statistics. Critical values for these
tests are tabulated in Schmidt & Phillips (1992).
    The small sample properties of the tests will depend on the choice of lq .
One possible suggestion is to use lq = q(T /100)1/4 with q = 4 or q = 12.
Unfortunately, despite their appealing asymptotic properties, the tests may be
compromised by very distorted size in small samples. Therefore, they should
58         Helmut Lütkepohl

Table 2.7. Schmidt–Phillips tests for example time series

                                Lags     Test           5%
Variable             Test       lq       statistic      critical value
U.S. investment      Z (φ̃)      4       −29.0          −18.1
                                12       −34.1
                     Z (tφ̃ )    4       −4.23          −3.02
                                12       −4.59
interest rate        Z (φ̃)      4       −12.8          −18.1
                                12       −14.1
                     Z (tφ̃ )    4       −2.52          −3.02
                                12       −2.64
Note: Critical values from Schmidt & Phillips (1992).



be used with caution. In fact, a test based on the OLS estimator φ̂ rather than its
t-ratio in the model (2.15) has also been proposed by Dickey & Fuller (1979).
We have not discussed this version here because of its occasional small sample
distortions, which were found in simulations [see, e.g., Schwert (1989)].
   To illustrate the Schmidt–Phillips tests, we have also applied them to the
U.S. investment and German interest rate series. The test results are given
in Table 2.7. Again, a unit root in the U.S. investment series is clearly re-
jected, whereas a unit root in the German interest rate is not rejected at the 5%
level.


2.7.3 A Test for Processes with Level Shift
If there is a shift in the level of the DGP as, for instance, in the German
GNP series in Figure 2.1, it should be taken into account in testing for a unit
root because the ADF test may have very low power if the shift is simply
ignored [see Perron (1989)]. One possible approach is to assume that the shift
is deterministic. In that case, a shift function, which we denote by f t (θ) γ , may
be added to the deterministic term µt . Hence, we have a model

           yt = µ0 + µ1 t + f t (θ) γ + xt ,                                 (2.16)

where θ and γ are unknown parameters or parameter vectors and the errors
xt are generated by an AR( p) process α ∗ (L)(1 − ρ L)xt = u t with α ∗ (L) =
1 − α1∗ L − · · · − α ∗p−1 L p−1 .
   Shift functions may, for example, be based on
                           
             (1)              0,   t < TB
          f t = d1t :=                    ,
                              1,   t ≥ TB
         Univariate Time Series Analysis                                          59
                      
           (2)            0,                       t < TB
          f t (θ) =
                          1 − exp{−θ(t − TB + 1)}, t ≥ TB
or
                                           
           (3)              d1,t   d1,t−1
          f t (θ) =              :               .
                          1 − θL 1 − θL
The first one of these functions is a simple shift dummy variable with shift
date TB . The function does not involve any extra parameter θ. In the shift term
    (1)
 f t γ , the parameter γ is a scalar. The second shift function is based on the
exponential distribution function, which allows for a nonlinear gradual shift to
                                                             (2)
a new level starting at time TB . In the shift term f t (θ)γ , both θ and γ are
scalar parameters. The first one is confined to the positive real line (θ > 0),
whereas the second one may assume any value. Finally, the third function can
be viewed as a rational function in the lag operator applied to a shift dummy d1t .
The actual shift term is [γ1 (1 − θ L)−1 + γ2 (1 − θ L)−1 L]d1t . Here θ is a scalar
parameter between 0 and 1 and γ = (γ1, γ2 ) is a two-dimensional parameter
vector. An alternative way to write this shift function is
                        
                         0,                                  t < TB
            f t (θ) γ = γ1 ,                                t = TB .
               (3)
                        
                          γ1 + t−T j=1
                                      B
                                        θ j−1
                                              (θ γ 1 + γ 2 ), t > TB

This expression offers the possibility of very general nonlinear shifts. Some
possible shift functions for alternative parameter values are plotted in Figure
2.17. Notice that both f t (θ)γ and f t (θ) γ can generate sharp one-time shifts
                            (2)         (3)
                                                                            (1)
at time TB for suitable values of θ. Thus, they are more general than f t γ .
    Saikkonen & Lütkepohl (2002) and Lanne, Lütkepohl & Saikkonen (2002)
have proposed unit root tests for the model (2.16) based on estimating the
deterministic term first by a generalized least-squares (GLS) procedure and
subtracting it from the original series. Then an ADF-type test is performed on
the adjusted series.
    If a model with linear trend and shift term is assumed, the relevant parameters
η = (µ0 , µ1 , γ  ) are estimated by minimizing the generalized sum of squared
errors of the model in first differences,

         yt = µ1 +  f t (θ) γ + vt       (t = 2, . . . , T ),

where vt = α ∗ (L)−1 u t . In other words, estimation is done under the unit root
null hypothesis by minimizing

          Q p (η, θ, α ∗ ) = (Y − Z (θ)η) (α ∗ )−1 (Y − Z (θ)η),

where α ∗ is the vector of coefficients in α ∗ (L), (α ∗ ) = Cov(V )/σu2 , V =
(v1 , . . . , vT ) the error vector of the model, Y = [y1 , y2 , . . . , yT ] and
60        Helmut Lütkepohl




Figure 2.17. Some possible shift functions.


Z = [Z 1 : Z 2 : Z 3 ] with Z 1 = [1, 0, . . . , 0] , Z 2 = [1, 1, . . . , 1] , and Z 3 =
[ f 1 (θ),  f 2 (θ), . . . ,  f T (θ)] .
     Although the adjusted series x̂t = yt − µ̂0 − µ̂1 t − f t (θ̂) γ̂ could be used
in the ADF approach, Lanne et al. (2002) have proposed a slightly different
procedure that adjusts for the estimation errors in the nuisance parameters and
has worked quite well in small sample simulations. Denoting the estimator of
the AR polynomial obtained by minimizing Q p (η, θ, α ∗ ) by α̂ ∗ (L), Lanne et al.
(2002) have defined ŵt = α̂ ∗ (L)x̂t and base the unit root test on the auxiliary
regression model

          ŵt = ν + φ ŵt−1 + [α̂ ∗ (L) f t (θ̂) ]π1 + [α̂ ∗ (L)Ft (θ̂) ]π2
                       
                       p−1
                              †
                   +         α j x̂t− j + rt
                       j=1

                   (t = p + 1, . . . , T ),

where Ft (θ) = d f t/dθ is the first-order derivative of f t (θ) with respect to the
θ parameter and rt denotes an error term. The unit root test statistic is again
obtained as the usual t-statistic of the estimator of φ based on OLS estimation of
this model. As in the case of the ADF statistic, the asymptotic null distribution
is nonstandard. Critical values are tabulated in Lanne et al. (2002). Again a
         Univariate Time Series Analysis                                          61

different asymptotic distribution is obtained if the deterministic linear trend
term is excluded a priori. Because the power of the test tends to improve when
the linear trend is not present, it is advisable to use any prior information to this
effect. If the series of interest has seasonal fluctuations, it is also possible to
include seasonal dummies in addition in the model (2.16).
    In executing the test it is necessary to decide on the AR order and the
shift date TB . If the latter quantity is known, the desired shift function may be
included, and the AR order may be chosen in the usual way for a model in levels
with the help of order selection criteria, sequential tests, and model checking
tools. If the break date is unknown, Lanne, Lütkepohl & Saikkonen (2003)
have recommended, on the basis of simulation results, choosing a reasonably
large AR order in a first step and then picking the break date that minimizes
Q p (η, θ, α ∗ ). In this first step, choosing a shift dummy as shift function is
recommended. Usually the choice of the break date will not be critical if it is
not totally unreasonable. In other words, the unit root test is not sensitive to
slight misspecification of the break date. Once a possible break date is fixed, a
more detailed analysis of the AR order is called for because possible reductions
of the order may improve the power of the test.
    As an example, consider the German GNP series. We are considering the
logs of the series because, in Figure 2.1, it can be seen that the variability
increases with the level of the series. In this case the break date is known to be
the third quarter of 1990, when the German monetary reunification occurred,
and from then on the series refers to all of Germany whereas it refers to West
Germany before that date. Therefore, we can fix TB accordingly. Using initially
the simple shift dummy variable, a constant, seasonal dummy variables, and
a deterministic linear trend, both AIC and HQ favor four lagged differences,
which are therefore used in the following analysis.
    The series together with estimated deterministic term and the adjusted series
as well as the estimated shift function for the shift dummy and the exponential
                   (2)
shift function f t (θ)γ are plotted in Figure 2.18. Clearly in this case the expo-
nential shift function is almost a shift dummy because a relatively large value
for θ is optimal. In Figure 2.18 the objective function, which is minimized in
estimating the deterministic parameters, is also plotted as a function of θ in the
lower right-hand corner. It can be seen that the objective function is a decreasing
function of θ, which clearly indicates that a shift dummy describes the shift quite
well because, for large values of θ, the exponential shift function is the same as
a shift dummy for practical purposes. Actually, it seems reasonable to constrain
θ to a range between zero and 3 only because, for θ = 3, the exponential shift
function almost represents an instantaneous shift to a new level. Hence, larger
values are not needed to describe the range of possibilities. In this case we have
also found an instantaneous shift with the rational shift function. The results are
not plotted to save space. In Table 2.8 the test values for all three test statistics
are given. They are all quite similar and do not provide evidence against a unit
root.
Figure 2.18. Deterministic terms and adjusted series used in unit root tests for log
GNP series based on a model with four lagged differences (sample period: 1976Q2 −
1996Q4).
             Univariate Time Series Analysis                                       63

Table 2.8. Unit root tests in the presence of structural
shift for German log GNP using four lagged differen-
ces, a constant, seasonal dummies, and a trend

                                                    Critical values
Shift                Test
function             statistic                10%               5%
  (1)
ft γ                 −1.41                    −2.76             −3.03
   (2)
f t (θ)γ             −1.36
f t (θ) γ
   (3)
                     −1.43
Note: Critical values from Lanne et al. (2002).


   Of course, there could still be other forms of structural breaks than those
considered here. For example, if the series has a deterministic linear trend
function, there may also be a break in the trend slope. This form of break was
also considered in the literature, and appropriate unit root tests are available
[see, e.g., Perron (1989)].

2.7.4 KPSS Test
Another possibility for investigating the integration properties of a series yt is
to test the null hypothesis that the DGP is stationary (H0 : yt ∼ I(0)) against
the alternative that it is I(1) (H1 : yt ∼ I(1)). Kwiatkowski, Phillips, Schmidt &
Shin (1992) have derived a test for this pair of hypotheses. If it is assumed that
there is no linear trend term, the point of departure is a DGP of the form
             yt = xt + z t ,
where xt is a random walk, xt = xt−1 + vt , vt ∼ iid(0, σv2 ), and z t is a stationary
process. In this framework the foregoing pair of hypotheses is equivalent to
the pair H0 : σv2 = 0 versus H1 : σv2 > 0. If H0 holds, yt is composed of a
constant and the stationary process z t ; hence, yt is also stationary. Kwiatkowski
et al. (1992) have proposed the following test statistic:

                        1  T
             KPSS =           S 2 /σ̂ 2 ,
                       T 2 t=1 t ∞
                t
where St =          j=1 ŵ j with ŵt = yt − ȳ and σ̂∞ is an estimator of
                                                      2

                                                    
                                              
                                              T
                               −1
             σ∞
              2
                =    lim T          Var             zt ,
                     T →∞
                                              t=1

that is, σ̂∞
           2
              is an estimator of the long-run variance of the process z t . If yt is
a stationary process, St is I(1) and the quantity in the numerator of the KPSS
statistic is an estimator of its variance, which has a stochastic limit. The term
in the denominator ensures that, overall, the limiting distribution is free of
64       Helmut Lütkepohl

unknown nuisance parameters. If, however, yt is I(1), the numerator will grow
without bounds, causing the statistic to become large for large sample sizes.
   To avoid strong assumptions regarding the process z t , Kwiatkowski et al.
(1992) proposed a nonparametric estimator of σ∞   2
                                                      based on a Bartlett window
having, once again, a lag truncation parameter lq = q(T /100)1/4 :
                                                          
                1                      1 
                   T            lq           T
         σ̂∞ =
           2
                       ŵ + 2
                         2
                                   ωj            ŵt ŵt− j ,
                T t=1 t        j=1
                                        T t= j+1

where ω j = 1 − lq +1 j
                        , as before. Using this estimator, we find that the KPSS
statistic has a limiting distribution that does not depend on nuisance parameters
under the null hypothesis of stationarity of yt . Hence, critical values can be
tabulated provided z t satisfies some weak conditions. The critical values may
be found, for example, in Kwiatkowski et al. (1992) or in Moryson (1998, Table
4.1). The null hypothesis of stationarity is rejected for large values of KPSS.
One problem here is the choice of the truncation parameter lq . Again l4 or l12
may be suitable choices.
   If a deterministic trend is suspected in the DGP, the point of departure is a
DGP, which includes such a term,

          yt = µ1 t + xt + z t ,

and the ŵt s are residuals from a regression

          yt = µ0 + µ1 t + wt .

With these quantities the test statistic is computed in the same way as before. Its
limiting distribution under H0 is different from the case without a trend term,
however. Critical values for the case with a trend are available from Kwiatkowski
et al. (1992) or Moryson (1998, Table 5.11).
    Ideally, if a series yt is I(0), a Dickey–Fuller type test should reject the
nonstationarity null hypothesis, whereas the KPSS test should not reject its
null hypothesis. Such a result is pleasing because two different approaches
lead to the same conclusion. In practice, such an ideal result is not always
obtained for various reasons. Of course, if none of the tests reject the null
hypothesis, this may be due to insufficient power of one of them. In that case it
is difficult for the researcher to decide on the integration properties of yt . It may
be necessary to perform analyses under alternative assumptions for the variables
involved. It is also possible that the DGP is not of the type assumed in these
tests. For instance, there may be complicated and repeated structural breaks,
inhomogeneous variances, long-range dependence that is not of the simple I(1)
type, or heavy tailed distributions as they are sometimes observed in financial
time series. Although the tests are asymptotically robust with respect to some
such deviations from our ideal assumptions, there may still be an impact on the
results for time series of typical length in applications.
           Univariate Time Series Analysis                                       65

Table 2.9. KPSS tests for example time series

                                          Critical values
                     Lags     Test
Variable             lq       statistic   10%       5%
U.S. investment       4       0.250       0.347     0.463
                     12       0.377
interest rate         4       0.848       0.347     0.463
                     12       0.465
Note: Critical values from Kwiatkowski et al. (1992).


     To illustrate the use of the KPSS test, we again use the U.S. investment and
German interest rate series. The results for two different lag parameters are
given in Table 2.9. In no case can the stationarity null hypothesis be rejected
at the 5% level for the U.S. investment series, whereas it is rejected for the
German interest rate. This result corresponds quite nicely to rejecting the unit
root for the U.S. investment series and not rejecting it for the interest rate with
the ADF and Schmidt–Phillips tests. Notice, however, that using lq = 12 for
the investment series results in a test value that is significant at the 10% level.
Still, taking all the evidence together, we find that the series is better viewed as
I(0) than as I(1).
     KPSS tests are sometimes summarized under the heading of moving average
unit root tests. The reason is that, for σv2 = 0, that is, if yt ∼ I(0), the first
differences of yt have a moving average term with a unit root, yt = z t −
θ z t−1 with θ = 1. On the other hand, if σv2 > 0, then yt = vt + z t − z t−1 =
wt − θ wt−1 with θ = 1. Hence, testing stationarity of yt against yt ∼ I(1) may
be accomplished by testing H0 : θ = 1 versus H1 : θ = 1. In other words, the
hypotheses of interest can be formulated in terms of MA unit roots. Several
suitable tests for this purpose have been proposed in the literature [see, e.g.,
Saikkonen & Luukkonen (1993b) or Tanaka (1990)]. Related work is reported
by Saikkonen & Luukkonen (1993a), Leybourne & McCabe (1994), Arellano
& Pantula (1995), and Tsay (1993), among others.

2.7.5 Testing for Seasonal Unit Roots
If it is assumed again that the DGP of a time series yt has an AR representation,
it is possible that there are roots other than 1 on the complex unit circle. For
instance, if a quarterly time series has a strong seasonal component, it is possible
that the seasonality and the nonstationarity can be removed partly or completely
by applying a quarterly seasonal differencing operator 4 yt = (1 − L 4 )yt =
yt − yt−4 . As noted earlier,

           1 − L 4 = (1 − L)(1 + L)(1 + L 2 )
                   = (1 − L)(1 + L)(1 − i L)(1 + i L).                       (2.17)
66        Helmut Lütkepohl

Hence, if the AR operator can be decomposed as α(L) = α ∗ (L)(1 − L 4 ), then
α(z) has roots for z = 1, −1, i, −i. All of these roots are on the complex unit
circle, of course. The root z = −1 is called the root at semiannual frequency, and
the complex conjugate roots z = ±i are sometimes referred to as the annual
frequency roots because the corresponding spectral density of the DGP has
peaks at the semiannual and annual frequencies if the AR operator has roots at
−1 and ±i, respectively. Therefore, these three roots are called seasonal unit
roots. The root for z = 1 is sometimes referred to as a zero frequency unit root
to distinguish it from the other roots.
   Obviously, it is of interest to know if such unit roots exist because then it may
be useful or necessary to apply the seasonal differencing operator to a series or
take the seasonal unit roots into account in some other way in the subsequent
analysis. Tests have been proposed by Hylleberg, Engle, Granger & Yoo (1990)
to check for seasonal unit roots in quarterly time series. The idea is as follows:
   If the DGP is an AR( p), as in (2.4), with AR operator α(L) = 1 − α1 L
− · · · − α p L p and p ≥ 4, this operator can be rearranged as
          α(L) = (1 − L 4 ) − π1 L(1 + L + L 2 + L 3 ) + π2 L(1 − L
                 +L 2 − L 3 ) + (π3 + π4 L)(1 − L 2 ) − α ∗ (L)(1 − L 4 ),
or, if (2.17) is used, as
       α(L) = (1 − L)(1 + L)(1 − i L)(1 + i L)
              −π1 L(1 + L)(1 − i L)(1 + i L) + π2 L(1 − L)(1 − i L)(1 + i L)
              +(π3 + π4 L)(1 − L)(1 + L)
              −α ∗ (L)(1 − L)(1 + L)(1 − i L)(1 + i L).
Thus, the AR operator can be factored as follows:
                 a
                 α (L)(1 − L),              if π1 = 0
         α(L) = α b (L)(1 + L),              if π2 = 0
                 c
                  α (L)(1 − i L)(1 + i L), if π3 = π4 = 0.
Hence, α(L) has regular, semiannual, or annual unit roots if π1 = 0, π2 = 0,
or π3 = π4 = 0, respectively. Therefore, Hylleberg et al. (1990) have proposed
basing tests for seasonal unit roots on the model
          4 yt = π1 z 1,t−1 + π2 z 2,t−1 + π3 z 3,t−1 + π4 z 3,t−2
                       
                       p−4
                   +         α ∗j 4 yt− j + u t ,                           (2.18)
                       j=1

where z 1t = (1 + L)(1 − i L)(1 + i L)yt = (1 + L + L 2 + L 3 )yt , z 2t = −(1 −
L)(1 − i L)(1 + i L)yt = −(1 − L + L 2 − L 3 )yt and z 3t = −(1 − L)(1 + L)yt
= −(1 − L 2 )yt . The null hypotheses H0 : π1 = 0, H0 : π2 = 0, and H0 : π3 =
π4 = 0 correspond to tests for regular, semiannual, and annual unit roots, re-
spectively. These hypotheses can be tested by estimating the model (2.18)
         Univariate Time Series Analysis                                                 67

by OLS and considering the relevant t- and F-tests. These tests are known
as HEGY tests. We will denote the corresponding test statistics by tπ̂1 , tπ̂2 ,
and F34 , respectively. Their asymptotic distributions under the respective null
hypotheses are nonstandard and do not depend on the short-term dynamics
manifested in the terms with lagged differences. Suitable critical values may be
found in Hylleberg et al. (1990) and Franses & Hobijn (1997). “F-tests” were
also considered for the joint null hypothesis that π2 , π3 , and π4 are all zero as
well as for the case that all four πs are jointly zero (π1 = π2 = π3 = π4 = 0).
These tests will be denoted by F234 and F1234 , respectively.
   Again the asymptotic distributions of the test statistics under the respective
null hypotheses depend on the deterministic terms in the model. For example, if
only a constant is included, another asymptotic distribution is obtained as would
be the case for a model with a constant and seasonal dummy variables. Yet
another distribution results if a constant, seasonal dummies, and a linear trend
term are included in the model. It turns out that the t-statistic for H0 : π1 = 0
has the same asymptotic distribution as the corresponding ADF t-statistic if the
null hypothesis holds and the t-ratio of π2 has just the mirror distribution of the
t-ratio of π1 . Notice also that individual t-tests for the significance of π3 and
π4 have been considered as well. They are problematic, however, because the
asymptotic null distribution depends on the parameters of the lagged differences
[see Burridge & Taylor (2001)].
   In practice, the AR order p or the number of lagged seasonal differences
4 yt− j has to be chosen before the HEGY tests can be performed. This may
again be done by using model selection criteria. Alternatively, a fairly large
order may be chosen for (2.18) first, and then the t-ratios of the estimated α ∗j s
may be checked. Lagged values of 4 yt with insignificant coefficients may then
be eliminated sequentially one at a time starting from the largest lag.
   As an example, we consider the German log income series shown in Figure
2.4. Because both lag selection criteria AIC and HQ have suggested three lagged
differences in a model with a constant, seasonal dummy variables, and a linear
trend, we have estimated the corresponding model and obtained (with t-values
in parentheses)

          4 yt = 0.19 sd1t + 0.32 sd2t + 0.21 sd3t + 0.36 sd4t + 0.0002 t
                    (1.09)       (1.83)             (1.19)         (2.06)       (1.10)
                   − 0.01 z 1,t−1 − 0.62 z 2,t−1 − 0.16 z 3,t−1 − 0.07 z 3,t−2
                      (−1.48)             (−5.21)            (−2.31)        (−0.92)
                   + 0.25 4 yt−1 + 0.27 4 yt−2 − 0.14 4 yt−3 + û t .
                      (2.11)              (2.19)              (−1.52)


As mentioned earlier, the t-values of z 3,t−i cannot be interpreted in the usual
way. Therefore, we present the relevant test statistics for seasonal unit roots
with corresponding critical values in Table 2.10. Obviously, the zero frequency
and the annual unit roots cannot be rejected (see tπ̂1 and F34 ). On the other hand, a
68
     Table 2.10. Tests for seasonal unit roots in German log income series

                                                                                                  Critical values
                       Determ.         No. of                                        Test
     Variable          terms           lags         H0                       Test    statistic   10%        5%
     log income        constant        3            π1 = 0                   tπ̂1     −1.48      −3.10      −3.39
                       trend                        π2 = 0                   tπ̂2     −5.21      −2.53      −2.82
                       seasonals                    π3 = π4 = 0              F34       3.09       5.48       6.55
                                                    π2 = π3 = π4 = 0         F234     12.95       5.09       5.93
                                                    π1 = π2 = π3 = π4 = 0    F1234    10.81       5.55       6.31
                       constant        9            π1 = 0                   tπ̂1     −1.53      −3.11      −3.40
                       trend                        π2 = 0                   tπ̂2      0.50      −1.61      −1.93
                                                    π3 = π4 = 0              F34       0.98       2.35       3.05
                                                    π2 = π3 = π4 = 0         F234      0.74       2.18       2.74
                                                    π1 = π2 = π3 = π4 = 0    F1234     1.13       3.59       4.19
     4 log            constant        5            π1 = 0                   tπ̂1     −2.27      −2.55      −2.85
     income                                         π2 = 0                   tπ̂2     −6.88      −1.61      −1.93
                                                    π3 = π4 = 0              F34      32.76       2.37       3.08
                                                    π2 = π3 = π4 = 0         F234     35.04       2.20       2.76
                                                    π1 = π2 = π3 = π4 = 0    F1234    30.49       2.83       3.36
                       constant        1            π1 = 0                   tπ̂1     −2.62      −2.55      −2.85
                                                    π2 = 0                   tπ̂2     −7.92      −1.61      −1.93
                                                    π3 = π4 = 0              F34      58.76       2.37       3.08
                                                    π2 = π3 = π4 = 0         F234     56.15       2.20       2.76
                                                    π1 = π2 = π3 = π4 = 0    F1234    48.66       2.83       3.36
     Note: Critical values from Franses & Hobijn (1997).
         Univariate Time Series Analysis                                        69

semiannual root is clearly rejected (see tπ̂2 ). As a consequence, F234 and F1234
also reject their respective null hypotheses.
    Notice that four seasonal dummy variables (denoted by sdit ) are included
in the model; hence, an extra constant is not included. Equivalently, a constant
and three seasonal dummies could be used. Because the seasonal dummies have
relatively small t-values, we have also applied seasonal unit root tests to a model
without including them. The test results are also given in Table 2.10. In this
case the lag order criteria favor a larger number of lagged seasonal differences.
Such a result should not come as a surprise because the seasonality that was
captured by the seasonal dummies in the previous model has to be taken care
of by the lagged differences in the present model. Now not one of the tests can
reject its respective null hypothesis at conventional significance levels. Thus,
if no seasonal dummies are included, there is some evidence that seasonal
differencing of the log income series is adequate. Hence, for this series, the
seasonal differencing operator competes to some extent with capturing some
of the seasonality by seasonal dummies.
    In Table 2.10 we also give test results for the 4 log income series. In this
case the model selection criteria AIC and HQ suggest different lag orders,
and we have included them both. Now there is some evidence that there is no
additional unit root although the zero-frequency unit root cannot be rejected
very clearly. It is rejected at the 10% level if just one lagged seasonal differ-
ence of the variable is added, and it cannot be rejected even at the 10% level
with five lagged differences. Because unit root tests are known to have low
power – in particular if many lagged differences are included – we interpret
the results in Table 2.10 as weak evidence against further unit roots in 4 log
income.
    Although in principle one should always start from a model differenced
enough to obtain stationarity and if unit roots are rejected continue the unit root
testing with series in which fewer differencing operators are applied, the present
example shows that it is sometimes necessary to base the decision on possible
unit roots on a range of tests for different levels of differencing. A mechanistic
sequential procedure may not reveal all important aspects for the subsequent
analysis.
    For monthly series the corresponding tests for seasonal unit roots were dis-
cussed by Franses (1990) based on the observation that the seasonal differencing
operator in this case can be decomposed as follows:

         12 = 1 − L 12 = (1 − L)(1 + L)(1 − i L)(1 + i L)
                                     √                 √
                          × [1 + 12 ( 3 + i)L][1 + 12 ( 3 − i)L]
                                     √                 √
                          × [1 − 12 ( 3 + i)L][1 − 12 ( 3 − i)L]
                                     √                 √
                          × [1 + 12 ( 3 + i)L][1 − 12 ( 3 − i)L]
                                     √                 √
                          × [1 − 12 ( 3 + i)L][1 + 12 ( 3 − i)L].
70       Helmut Lütkepohl

Moreover, an AR( p) model with p ≥ 12 can be rearranged as
          12 yt = π1 z 1,t−1 + π2 z 2,t−1 + π3 z 3,t−1 + π4 z 3,t−2
                   + π5 z 4,t−1 + π6 z 4,t−2 + π7 z 5,t−1 + π8 z 5,t−2
                   + π9 z 6,t−1 + π10 z 6,t−2 + π11 z 7,t−1 + π12 z 7,t−2          (2.19)
                      p−12
                   + j=1 α ∗j 12 yt− j + u t ,
where
          z 1,t = (1 + L)(1 + L 2 )(1 + L 4 + L 8 )yt
          z 2,t = −(1 − L)(1 + L 2 )(1 + L 4 + L 8 )yt
          z 3,t = −(1 − L 2 )(1 + √
                                  L 4 + L 8 )yt
          z 4,t = −(1 − L )(1 − √3L + L 2 )(1 + L 4 + L 8 )yt
                          4

          z 5,t = −(1 − L 4 )(1 + 3L + L 2 )(1 + L 4 + L 8 )yt
          z 6,t = −(1 − L 4 )(1 − L 2 + L 4 )(1 − L + L 2 )yt
          z 7,t = −(1 − L 4 )(1 − L 2 + L 4 )(1 + L + L 2 )yt .
The process yt has a regular (zero frequency) unit root if π1 = 0, and it has
seasonal unit roots if any one of the other πi s (i = 2, . . . , 12) is zero. For the
conjugate complex roots, πi = πi+1 = 0 (i = 3, 5, 7, 9, 11) is required. The
corresponding statistical hypotheses can again be checked by “t-” and “F-
statistics,” critical values for which are given in Franses & Hobijn (1997). If
all the πi s (i = 1, . . . , 12) are zero, then a stationary model for the monthly
seasonal differences of the series is suitable. As in the case of quarterly series,
it is also possible to include deterministic terms in the model (2.19). Again it
is then necessary to use appropriately modified critical values.
    Tests for seasonal unit roots have also been discussed by other authors.
Examples are found in Dickey, Hasza & Fuller (1984); Canova & Hansen
(1995); Beaulieu & Miron (1993); and Maddala & Kim (1998).


2.8 Forecasting Univariate Time Series
If a suitable model for the DGP of a given time series has been found, it can be
used for forecasting the future development of the variable under consideration.
AR processes are particularly easy to use for this purpose. Neglecting deter-
ministic terms and assuming an AR( p) DGP, yt = α1 yt−1 + · · · + α p yt− p + u t ,
where the u t s are generated by an independent rather than just uncorrelated
white noise process, we find that the optimal (minimum MSE) 1-step forecast
in period T is the conditional expectation
         yT +1|T = E(yT +1 |yT , yT −1 , . . .) = α1 yT + · · · + α p yT +1− p .   (2.20)
Forecasts for larger horizons h > 1 may be obtained recursively as
         yT +h|T = α1 yT +h−1|T + · · · + α p yT +h− p|T ,                         (2.21)
          Univariate Time Series Analysis                                                  71

where yT + j|T = yT + j for j ≤ 0. The corresponding forecast errors are
           yT +1 − yT +1|T = u T +1 ,
           yT +2 − yT +2|T = u T +2 + φ1 u T +1 ,
                           ..                                                           (2.22)
                            .
           yT +h − yT +h|T = u T +h + φ1 u T +h−1 + · · · + φh−1 u T +1 ,
where it is easy to see by successive substitution that the φ j s are just the coeffi-
cients of the MA representation of the process if the process is stationary and,
hence, the MA representation exists. Consequently, the φ j can be computed
recursively as
                 
                 s
          φs =         φs− j α j ,   s = 1, 2, . . .                                    (2.23)
                 j=1

with φ0 = 1 and α j = 0 for j > p (see Section 2.3.1). Hence, u t is the 1-step
forecast error in period t − 1 and the forecasts are unbiased, that is, the forecast
errors have expectation 0. As mentioned earlier, these are the minimum MSE
forecasts. The MSE of an h-step forecast is
                                                       
                                                       h−1
          σ y2 (h) = E{(yT +h − yT +h|T )2 } = σu2           φ 2j .                     (2.24)
                                                       j=0

For any other h-step forecast with MSE σ̄ y2 (h), say, the difference σ̄ y2 (h) − σ y2 (h)
is nonnegative.
    This result relies on the assumption that u t is independent white noise, that
is, u t and u s are independent for s = t. If u t is uncorrelated white noise and not
independent over time, the forecasts obtained recursively as
          yT (h) = α1 yT (h − 1) + · · · + α p yT (h − p),            h = 1, 2, . . .   (2.25)
with yT ( j) = yT + j for j ≤ 0 are best linear forecasts [see Lütkepohl (1991,
Sec. 2.2.2) for an example]. It may be worth pointing out that the forecast MSEs
for I(0) variables are bounded by the unconditional variance σ y2 of yt .
   If the process yt is Gaussian, that is, u t ∼ iid N (0, σu2 ), the forecast errors
are also normal. This result may be used to set up forecast intervals of the form
          [yT +h|T − c1−γ /2 σ y (h), yT +h|T + c1−γ /2 σ y (h)],                       (2.26)
where c1−γ /2 is the (1 − γ2 )100 percentage point of the standard normal distri-
bution and σ y (h) denotes the square root of σ y2 (h), that is, σ y (h) is the standard
deviation of the h-step forecast error of yt .
   Although here we have discussed the forecasts for stationary processes, the
same formulas apply if yt is I(d) with d > 0. Also, the φ j s may be computed
as in (2.23). In the nonstationary case, the φ j s are not coefficients of an MA
representation, of course, and they will not converge to zero for j → ∞. As
72        Helmut Lütkepohl

a consequence, the forecast MSEs will not converge for h → ∞ but will be
unbounded. Hence, the length of the forecast intervals will also be unbounded
as h → ∞.
    For I(d) variables with d > 0 there is also another possibility to compute the
forecasts. Suppose yt is I(1) so that yt is stationary. Then we can utilize the fact
that yT +h = yT + yT +1 + · · · + yT +h . Thus, to forecast yT +h in period T ,
we just need to get forecasts of the stationary variables yT + j ( j = 1, . . . , h)
and add these forecasts to yT to get the forecast of yT +h . This forecast is identical
to the one obtained directly from the levels AR( p) model.
    If the DGP of a variable of interest is a mixed ARMA process with infinite
AR representation, this representation can in principle be used for forecasting.
For practical purposes it has to be truncated at some finite lag length.
    In practice we do not know the DGP exactly but have to base the forecasts on
an estimated approximation of the DGP. In other words, furnishing estimated
quantities with a hat, we get instead of (2.21),
          ŷT +h|T = α̂1 ŷT +h−1|T + · · · + α̂ p ŷT +h− p|T ,                (2.27)
where, of course, ŷT + j|T = yT + j for j ≤ 0. The corresponding forecast error
is
          yT +h − ŷT +h|T = [ yT +h − yT +h|T ] + [ yT +h|T − ŷT +h|T ]
                             
                             h−1
                                                                                (2.28)
                           =      φ j u T +h− j + [ yT +h|T − ŷT +h|T ].
                                 j=0

At the forecast origin T , the first term on the right-hand side involves future
residuals only, whereas the second term involves present and past variables only,
provided only past variables have been used for estimation. Consequently, if u t
is independent white noise, the two terms are independent. Moreover, under
standard assumptions, the difference yT +h|T − ŷT +h|T is small in probability as
the sample size used for estimation gets large. Hence, the forecast error variance
is
          σ ŷ2 (h) = E{[ yT +h − ŷT +h|T ]2 } = σ y2 (h) + o(1),              (2.29)
where o(1) denotes a term that approaches zero as the sample size tends to
infinity. Thus, for large samples the estimation uncertainty may be ignored
in evaluating the forecast precision and setting up forecast intervals. In small
samples, including a correction term is preferable, however. In this case, the
precision of the forecasts will depend on the precision of the estimators. Hence,
if precise forecasts are desired, it is a good strategy to look for precise parameter
estimators. Further details may be found in Lütkepohl (1991, Chapter 3).
    Including deterministic terms in the process used for forecasting is straight-
forward. The appropriate value of the deterministic term is simply added to
each forecast.
         Univariate Time Series Analysis                                         73




Figure 2.19. German consumption time series, 1960Q1–1982Q4, and transformations
of the series.


2.9 Examples
To illustrate univariate time series analysis, we consider two macroeconomic
time series. The first one is a quarterly German consumption series, and the sec-
ond is a Polish productivity series again with quarterly observation frequency.
The analyses are discussed in detail in the next two sections.


2.9.1 German Consumption
The first series to be analyzed for illustrative purposes consists of seasonally ad-
justed, quarterly German consumption data for the period 1960Q1 − 1982Q4.
The series is the consumption series given in Table E.1 of Lütkepohl (1991).
The time series length is T = 92. It is plotted together with its logs in Figure
2.19. The first differences of both series are also plotted in Figure 2.19. They
reveal that constructing a model for the logs is likely to be advantageous because
the changes in the log series display a more stable variance than the changes
in the original series.
    Otherwise, the two series have similar characteristics. In Figure 2.20 we also
show the autocorrelations, partial autocorrelations, and log spectral densities
Figure 2.20. Autocorrelations, partial autocorrelations, and log spectral densities of
German consumption time series.
           Univariate Time Series Analysis                                                   75

Table 2.11. Unit root tests for consumption time series

                                      Deterministic                 Test          5%
Variable                  Test        terms               Lags      value         critical value
 log consumption         ADF         c                   2         −3.13         −2.86
                          KPSS        c                   2          0.393         0.463
log consumption           ADF         c, t                3         −1.16         −3.41
                          KPSS        c, t                3          0.232         0.146
Note: Critical values from Davidson & Mackinnon (1993, Table 20.1) and Kwiatkowski et al. (1992).


of the two series. These quantities look quite similar. The slow decay of the
autocorrelations indicates that both series may have a unit root. A closer look
at the partial autocorrelations reveals that there may be a problem with the
seasonal adjustment of the series because, in particular, for the raw data these
quantities at some seasonal lags (4, 16, 20) are larger in absolute value than the
neighboring partial autocorrelations. The possible seasonal adjustment problem
becomes even more apparent in the estimated spectral densities in Figure 2.20.
Notice that they are plotted with a log scale. The estimates are obtained with a
Bartlett window and a window size of MT = 10. There are dips at the quarterly
seasonal frequencies (2π/4 = 1.57 and 2 × 2π/4 = π). In fact, there are even
dips at fractions of these frequencies at 2π/8 and so forth. Hence, the seasonal
adjustment procedure may have overadjusted a bit. Although this may not be a
dramatic problem for the present series, it may be useful to keep this possible
over adjustment in mind because it can be important for the lags to be included
in the model for the DGP and for the proper interpretation of some of the model-
checking statistics later in the analysis. In the following we will focus on the
log consumption series and call it yt because of the more stable variance.
    Given that the log consumption series has a trending behavior and the auto-
correlations indicate the possibility of a unit root, we first analyze that feature
in more detail by applying unit root tests. In Table 2.11, we present the results
of ADF and KPSS tests. Because we do not expect the series to have more than
one unit root, the tests are first applied to yt . The lag order used in the ADF
test for the lagged differences is 2, as suggested by the usual model selection
criteria (AIC, HQ, SC), and only a constant is included as a deterministic term.
This is what is obtained from the levels model with a linear time trend when
taking first differences. The test value is significant at the 5% level; hence, a
unit root in the first differences is rejected at this level. The result of the KPSS
test is in line with the ADF result. At the 5% level it cannot reject stationarity.
    The ADF test of the levels series is based on a model with a constant and a
time trend because a linear deterministic trend cannot be excluded a priori given
the shape of the series plot in Figure 2.19. The number of lagged differences is
3. This value is suggested by the model for yt , and it is also the choice of the
model selection criteria when a maximum of pmax = 14 is allowed for. Recall
that three lagged differences imply an AR(4) model when rewriting the ADF
76       Helmut Lütkepohl

test equation in levels form. Thus, the result is consistent with the observation
of a possible problem at the seasonal lags owing to the seasonal adjustment of
the series.
    The conclusion from the ADF test is quite clear: At the 5% level the unit root
cannot be rejected. The corresponding KPSS test, again with a constant and a
time trend, confirms the result. It clearly rejects stationarity at the 5% level.
This outcome results with a lag truncation parameter of three, but a rejection
of stationarity is also obtained with other lag orders. Overall, the test results
support one unit root in the log consumption series; thus, specifying a stationary
model for the first differences seems appropriate.
    Therefore we have fitted an AR(3) model for yt as our first guess. We
have not considered mixed ARMA models because a simple low-order AR
model appears to approximate the DGP well. Of course, it is still possible to
bring in MA terms at a later stage if the subsequent analysis reveals that this
may be advantageous. In line with the unit root test results, all model selection
criteria suggest the order p = 3, and including a constant term is plausible on
the basis of the plot in Figure 2.19. The resulting estimated model with t-values
in parentheses is

         yt = 0.0095 − 0.11 yt−1 + 0.26 yt−2 + 0.32 yt−3 + û t ,
                   (2.8)     (−1.1)          (2.6)          (3.0)

                 σ̂u2 = 1.058 × 10−4 .

Owing to the presample values used up in differencing and estimating the
foregoing model of order 3, the sample used in the OLS estimation runs from
1961Q1 to 1982Q4, and thus we have a sample size of T = 88. The reverse
characteristic roots of the AR polynomial have moduli 1.30 and 1.56; therefore,
the estimated AR operator clearly represents a stable, stationary model. Because
the t-value of the lag-one coefficient is substantially smaller than 2 in absolute
value, one could consider replacing it by zero in a final version of the model.
   Before trying that modification we have confronted the present model with
several specification tests. The standardized residuals of the model and the resid-
ual autocorrelations are plotted in Figure 2.21. The former quantities indicate
no specific problems with outliers (unusually large or small values) or changing
variability over time. The largest standardized residual is less than 3 in absolute
value (see the value associated with 1966Q4). The residual autocorrelations
are plotted with estimated “exact” asymptotic 95% confidence intervals around
zero, which take into account the fact that these are estimation residuals from
an AR model and not observed realizations of a white noise process. √   Therefore,
the confidence intervals are substantially smaller than the√usual ±2/ T at low
lags. Only at higher lags do they approach the usual ±2/ T bounds. In Figure
2.21, all but the first three intervals are close to these bounds. Obviously, none
of the residual autocorrelations reach outside the estimated 95% confidence
intervals around zero. Thus, a 5% level test of the null hypothesis that they are
             Univariate Time Series Analysis                                                  77




   Figure 2.21. Standardized residuals and residual autocorrelations of German consump-
   tion time series; sample period: 1961Q1–1982Q4, T = 88.


   individually zero does not reject the null hypothesis of zero residual correlation.
   Hence, they provide no reason for concern about the adequacy of the model.
      The results of a range of specification tests are shown in Table 2.12. None of
   the diagnostic tests indicates a specification problem. All p-values are clearly
   in excess of 10%. We have also done some stability analysis for the model and
   did not find reason for concern about its adequacy. The reader is encouraged to
   check recursive estimates, Chow tests, and CUSUMs to investigate the stability
   of the model.
      Given this state of affairs, we have also estimated a restricted AR(3) model
   with the first lag excluded (the associated AR coefficient restricted to zero).
   The result is
             yt = 0.0079 + 0.26 yt−2 + 0.29 yt−3 + û t ,
                        (2.6)            (2.7)               (2.9)

                      σ̂u2 = 1.02 × 10−4 .


Table 2.12. Diagnostics for AR(3) model of  log consumption series

                                 Tests for residual autocorrelation
Test                 Q 16        Q ∗16           Q 24      Q ∗24     LM2   FLM2        LM6   FLM6
Test statistic     10.82 12.31 21.03 25.85 1.09 0.52                    9.60 1.59
Appr. distribution χ 2 (13) χ 2 (13) χ 2 (21) χ 2 (21) χ 2 (2) F(2, 82) χ 2 (6) F(6, 78)
p-value            0.63     0.50     0.46     0.21     0.60 0.60        0.14 0.16
                                             Other diagnostics
Test                            LJB                     ARCH L M (1)         ARCH L M (4)
Test statistic                  1.26                    1.02                 1.51
Appr. distribution              χ 2 (2)                 χ 2 (1)              χ 2 (4)
p-value                         0.53                    0.31                 0.83
78          Helmut Lütkepohl

Obviously, the estimated values of the other parameters have not changed much.
Also the diagnostics do not give reason for concern about the model. We do not
show them to save space but encourage the reader to check our assessment. It
may be worth noting that the moduli of the reverse characteristic roots of the
present AR polynomial are 1.26 and 1.65. Thus, they are clearly in the stable
region as in the unrestricted AR(3) model.
   Just to illustrate forecasting, we have also computed predictions from the
estimated final model and show them with 95% forecast intervals in Figure
2.22. In the first panel, forecasts of yt are depicted. As expected in a stable
model, the forecasts approach the mean of the series rapidly with growing
forecast horizon. Also, the width of the forecast intervals reaches a maximum
quickly. The intervals reflect the overall variability in the series. Notice that
these forecast intervals do not take into account the estimation uncertainty
in the parameter estimates. The second panel in Figure 2.22 shows forecasts
of the undifferenced series yt , that is, these are forecasts for the trending log
consumption series. Now the forecast intervals grow with increasing forecast
horizon. They are in fact unbounded when the forecast horizon goes to infinity.
   Forecasts can also be used to check the goodness of a model by fitting
the model to a subsample and then comparing the forecasts with the actu-
ally observed values. This kind of model check is shown in the third panel of
Figure 2.22. The restricted AR(3) model is fitted to data up to 1979Q4, and
thus three years of data (twelve observations) at the end of the series are not
used in the estimation. Forecasts are then computed for these three years, and it
turns out that all actually observed values fall into the 95% forecast intervals.
Thus, this check also does not raise doubts about the adequacy of the model.


2.9.2 Polish Productivity
The second example series consists of the logarithms of a seasonally unadjusted
quarterly Polish productivity series for the period 1970Q1–1998Q4. Thus, we
have T = 116 observations. The series and its first differences are plotted in
Figure 2.23. The logarithms are chosen on the basis of arguments similar to
those of the previous example to obtain a more stable variance. Because we
have discussed this issue in the preceding example, we do not repeat it here but
start from the logs.1 Modeling the series may appear to be more challenging
than the previous one because there seem to be major shifts in the series. For
example, the introduction of marshal law in Poland in 1981 and the transition
from a socialist to a market economy in 1989 seem to have had major impacts
on the series. Although the first event is not apparent anymore in the differences,
the second one leaves a clear trace in the latter series.

1   For more details on the construction of the data and their sources see Lütkepohl, Saikkonen &
    Trenkler (2001b), where the series has been used in a larger model.
         Univariate Time Series Analysis                    79




Figure 2.22. Forecasts of German consumption time series.
80       Helmut Lütkepohl




Figure 2.23. Polish productivity series, 1970Q2–1998Q4, with first differences.


    Although the series is not seasonally adjusted, it does not have a very clear
seasonal pattern. Some seasonality is observable in parts of the series, however.
Because this may be regarded as a sign of moving seasonality and, hence,
possible seasonal unit roots, we have explored that possibility without actually
expecting to find it. To avoid the strong shift in the series we have performed
seasonal unit root tests on the data up to the end of 1989 only. Reducing the
sample size may result in reduced power of the tests and should therefore
normally be avoided. On the other hand, having a shift in the series without
taking special care of it may also result in a loss of power. Therefore we use the
reduced sample size in the hope that it is sufficient to reject seasonal unit roots.
This rejection is indeed clearly seen in Table 2.13. All unit roots except the zero
frequency one are rejected in models with time trends and with and without
seasonal dummy variables. The number of lagged differences used in these tests
is the one suggested by the SC and HQ criteria if a maximum lag order of 10
and no seasonal dummies are considered. With seasonal dummies, all criteria
agree that no lagged differences are necessary. Even with the possibly slightly
overspecified model, with seasonal dummies the seasonal unit roots are clearly
rejected at the 1% level. In conclusion, although the series is not seasonally
adjusted, there does not appear to be a need to worry about seasonal unit roots.
               Univariate Time Series Analysis                                                   81

  Table 2.13. Tests for seasonal unit roots in Polish productivity, sample period
  1970Q1–1989Q4

  Deterministic      No. of                                               Test        5% level
  terms              lags       H0                             Test       statistic   critical value
  constant           1          π1 = 0                         tπ̂1        −2.21      −3.40
  trend                         π2 = 0                         tπ̂2        −2.15      −1.93
                                π3 = π4 = 0                    F34          4.64       3.05
                                π2 = π3 = π4 = 0               F234         4.68       2.74
                                π1 = π2 = π3 = π4 = 0          F1234        5.31       4.19
  constant           1          π1 = 0                         tπ̂1        −2.00      −3.39
  trend                         π2 = 0                         tπ̂2        −3.15      −2.82
  seasonals                     π3 = π4 = 0                    F34         12.79       6.55
                                π2 = π3 = π4 = 0               F234        11.80       5.93
                                π1 = π2 = π3 = π4 = 0          F1234       11.07       6.31
  Note: Critical values from Franses & Hobijn (1997).



     That the zero-frequency unit root cannot be rejected may, of course, be due to
  reduced power of the test, which in turn may be caused by reducing the sample
  period and overspecifying the lag order. For a more detailed analysis of this issue
  we use the full sample and include a shift dummy to take care of the shift in the
  late 1980s or early 1990s. Because it is not fully clear where the shift actually
  occurred, we use the search procedure mentioned in Section 2.7.3 based on a
  model with a time trend and 4 lagged differences. Notice that the official shift
  date may not correspond to the actual shift date because economic agents may
  adjust their operations on the basis of knowing the official shift date in advance
  or possibly with some delay owing to adjustment costs. The estimated shift
  date is 1990Q1. Test results with this shift date and different shift functions are
  given in Table 2.14. The lag order is on the one hand suggested by the quarterly
  observation period of the series. On the other hand, the HQ and SC criteria also

Table 2.14. Unit root tests in the presence of a structural shift in 1990Q1 for Polish
productivity

                                                                                  Critical values
                                  Shift                 Lag   Test
Variable           Deterministics function              order statistic     10%       5%       1%
 productivity     constant           impulse           3      −4.45        −2.58     −2.88 −3.48
                                      dummy
productivity       constant,          shift dummy       4      −1.77        −2.76 −3.03 −3.55
                   trend              exponential              −1.75
  Note: Critical values from Lanne et al. (2002).
82       Helmut Lütkepohl




Figure 2.24. Standardized residuals and residual autocorrelations of restricted AR(4)
model for Polish productivity.


favor this order when a maximum of 10 is considered. It turns out that a simple
shift dummy may be sufficient for this series to capture the shift because the
shift estimated with the exponential shift function is also almost an abrupt shift
in period 1990Q1. Therefore, it is not surprising that the tests with both types
of shift functions reach the same conclusion. They cannot reject the unit root
hypothesis.
    In Table 2.14 we also give the test result for the differenced series. In this
case only an impulse dummy is included for 1990Q1 because a shift in the
mean of the original series is converted to an impulse in the differenced series.
Also the trend disappears as usual. In this case the unit root is clearly rejected
even at the 1% level. Hence, we continue the analysis with the first differences
of the series (denoted by yt ) and include an impulse dummy as a deterministic
term in addition to a constant.
    In line with the unit root analysis we consider an AR(4) model as our first
choice. Estimating the model, we found that the first lag had a coefficient with
a very small t-value. Therefore, we considered the following restricted AR(4)
model for our series (t-values in parentheses):

         yt = 0.011 − 0.27 I 90Q1t − 0.15 yt−2 − 0.22 yt−3
                   (2.6)    (−6.2)            (−2.0)          (−3.0)

                 + 0.42 yt−4 + û t ,    σ̂u2 = 0.0018.
                    (5.9)


All roots of the AR polynomial are clearly outside the unit circle, and thus the
model represents a stable, stationary process. This fairly simple model turned
out to be quite satisfactory.
   The standardized residuals and residual autocorrelations are depicted in
Figure 2.24. With very few exceptions all standardized residuals are between
±2. There are no outliers with absolute value substantially larger than 2, and
                 Univariate Time Series Analysis                                                            83

Table 2.15. Diagnostics for restricted AR(4) model of  productivity

                                      Tests for residual autocorrelation
Test              Q 16       Q ∗16             Q 24       Q ∗24      LM2       FLM2             LM6       FLM6
Test statistic    13.99      15.11             20.00      22.47      0.26      0.89             11.10     1.83
Appr. distr.      χ 2 (13)   χ 2 (13)          χ 2 (21)   χ 2 (21)   χ 2 (2)   F(2, 103)        χ 2 (6)   F(6, 99)
p-value           0.37       0.30              0.52       0.37       0.88      0.89             0.09      0.10
                                                  Other diagnostics
Test                                 LJB                   ARCH L M (1)               ARCH L M (4)
Test statistic                       0.14                  0.22                       6.29
Appr. distribution                   χ 2 (2)               χ 2 (1)                    χ 2 (4)
p-value                              0.93                  0.64                       0.18



   in fact there is no indication that the residuals are not coming from a normal
   distribution.
      The residual autocorrelations with estimated “exact” asymptotic 95% con-
   fidence intervals around zero also do not give rise to concern about remaining
   residual autocorrelation. The only autocorrelation coefficient reaching slightly
   outside the confidence interval is the one associated with lag 4. Of course,
   one in twenty quantities would be expected to reach outside a 95% confidence
   interval even if they had the assumed distribution. In this case it is suspi-
   cious that the relatively large autocorrelation coefficient is associated with the
   seasonal lag. The model is maintained, however, because the corresponding
   autocorrelation coefficient does not reach much outside the interval, and the
   fourth lag is included in the model.
      Some more diagnostic statistics are provided in Table 2.15. They are all
   unsuspicious. Given the autocorrelation coefficient at lag four, the p-value of




   Figure 2.25. Chow test p-values for restricted AR(4) model for Polish productivity.
84        Helmut Lütkepohl




Figure 2.26. Stability analysis of restricted AR(4) model for Polish productivity.



0.09 of the LM6 test for autocorrelation is not surprising. However, a stability
analysis reveals that the model may not be stable throughout the full estimation
period (see Figures 2.25 and 2.26). In particular, the Chow tests indicate insta-
bility at the beginning of the sample. The recursive parameter estimates have a
different level in the earlier part of the sample than at the end. They stabilize
only in the latter part of the sample period. Thus, a simple impulse dummy may
not capture the full change in the DGP that has occurred during the sample
         Univariate Time Series Analysis                                         85




Figure 2.27. Forecasts of restricted AR(4) model for Polish productivity.


period. It may be worth investigating the situation further, with, for example, a
smooth transition regression analysis (see Chapter 6).
    We have also fitted the model to a truncated sample up to 1994Q4, and
we have used this model for forecasting the last four years of our original
sample period. The results are presented in Figure 2.27. Even without tak-
ing into account the sampling variability in the parameter estimates, we find
that all observed values are well inside the 95% forecast intervals. Of course,
if all observed differences fall into their respective forecast intervals, the
same has to be true for the undifferenced observations. Just for illustrative
purposes, we also show them in Figure 2.27. Thus, despite the initial insta-
bility in the recursive parameter estimates, the model has some forecasting
potential.


2.10 Where to Go from Here
In this chapter a range of models and techniques for analyzing single time series
have been presented. Although these tools will often give useful insights into
the generation mechanism of a series under consideration, they are sometimes
insufficient to capture specific features of a DGP. In that case other tools have to
be used. Some of them are presented in later chapters. For example, modeling
second-order moments is discussed in Chapter 5, and different forms of non-
linearities are considered in Chapters 6 and 7. These models may be considered
if no satisfactory linear model is found using the tools of the present chapter.
    If the analyst has explored the individual properties of a set of time series,
it is also possible to go on and analyze them together in a system of series.
Suitable multivariate models are discussed in the next two chapters.
3        Vector Autoregressive and
         Vector Error Correction
         Models

Helmut Lütkepohl



3.1 Introduction
The first step in constructing a model for a specific purpose or for a particular
sector of an economy is to decide on the variables to be included in the analysis.
At this stage it is usually important to take into account what economic theory
has to say about the relations between the variables of interest. Suppose we
want to analyze the transmission mechanism of monetary policy. An important
relation in that context is the money demand function, which describes the link
between the real and the monetary sector of the economy. In this relationship
a money stock variable depends on the transactions volume and opportunity
costs for holding money. As an example we consider German M3 as the money
stock variable, GNP as a proxy for the transactions volume, a long-term interest
rate R as an opportunity cost variable, and the inflation rate Dp = p, where
p denotes the log of the GNP deflator. The latter variable may be regarded as
a proxy for expected inflation, which may also be considered an opportunity
cost variable. Because the quantity theory suggests a log linear relation, we
focus on the variables m = log M3 and gnp = log GNP. Seasonally unadjusted
quarterly series for the period 1972–98 are plotted in Figure 3.1. Of course, many
more variables are related to the presently considered ones and, hence, could be
included in a model for the monetary sector of the economy. However, increasing
the number of variables and equations does not generally lead to a better model
because doing so makes it more difficult to capture the dynamic, intertemporal
relations between them. In fact, in some forecast comparisons univariate time
series models were found to be superior to large-scale econometric models. One
explanation for the failure of the larger models is their insufficient representation
of the dynamic interactions in a system of variables.
   Vector autoregressive (VAR) processes are a suitable model class for de-
scribing the data generation process (DGP) of a small or moderate set of time
series variables. In these models all variables are often treated as being a priori
endogenous, and allowance is made for rich dynamics. Restrictions are usually

86
         Vector Autoregressive and Vector Error Correction Models             87




Figure 3.1. Seasonally unadjusted, quarterly German log real M3 (m), log real GNP
(gnp), long-term bond rate (R), and inflation rate (Dp), 1972Q1–1998Q4.
[Data source: see Lütkepohl & Wolters (2003); see also Section 3.8 for more
information on the data.]

imposed with statistical techniques instead of prior beliefs based on uncertain
theoretical considerations.
    From the example system shown in Figure 3.1, it is clear that special fea-
tures such as trends, seasonality, and structural shifts are sometimes present in
economic time series and have to be taken into account in modeling their DGP.
In particular, trends have attracted considerable attention, as we have seen in
Chapter 2. A situation of special interest arises if several variables are driven
by a common stochastic trend, as may occur in some of the example series. In
that case they have a particularly strong link that may also be of interest from
an economic point of view. Following Granger (1981) and Engle & Granger
(1987), variables are called cointegrated if they have a common stochastic trend.
If cointegrating relations are present in a system of variables, the VAR form is
not the most convenient model setup. In that case it is useful to consider spe-
cific parameterizations that support the analysis of the cointegration structure.
The resulting models are known as vector error correction models (VECMs)
or vector equilibrium correction models.
88        Helmut Lütkepohl

    VAR models and VECMs will be discussed in this chapter. Estimation and
specification issues related to these models will be considered in Sections 3.3
and 3.4, respectively. Model checking is discussed in Section 3.5, and forecast-
ing and causality analysis are presented in Sections 3.6 and 3.7, respectively.
Extensions are considered in Section 3.9. Illustrative examples are discussed
throughout the chapter based on the example series in Figure 3.1. A more de-
tailed analysis of a subset of the variables is considered in Section 3.8. Once
a statistically satisfactory model for the DGP of a set of time series has been
constructed, an analysis of the dynamic interactions is often of interest. Some
tools available for that purpose will be introduced in the next chapter under the
heading of structural modeling.
    Nowadays several books are available that treat modern developments
in VAR modeling and dynamic econometric analysis more generally [e.g.,
Lütkepohl (1991); Banerjee, Dolado, Galbraith & Hendry (1993); Hamilton
(1994); Hendry (1995); Johansen (1995a); Hatanaka (1996)]. Surveys of vector
autoregressive modeling include Watson (1994), Lütkepohl & Breitung (1997),
and Lütkepohl (2001).

3.2 VARs and VECMs
In this section, we first introduce the basic vector autoregressive and error
correction models, neglecting deterministic terms and exogenous variables.
How to account for such terms will be discussed afterwards.

3.2.1 The Models
For a set of K time series variables yt = (y1t , . . . , y Kt ) , a VAR model captures
their dynamic interactions. The basic model of order p (VAR( p)) has the form
          yt = A1 yt−1 + · · · + A p yt− p + u t ,                                   (3.1)
                                                                                 
where the Ai ’s are (K × K ) coefficient matrices and u t = (u 1t , . . . , u Kt ) is an
unobservable error term. It is usually assumed to be a zero-mean independent
white noise process with time-invariant, positive definite covariance matrix
E(u t u t ) = u . In other words, the u t ’s are independent stochastic vectors with
u t ∼ (0, u ).
    The process is stable if
          det(I K − A1 z − · · · − A p z p ) = 0 for |z| ≤ 1,                       (3.2)
that is, the polynomial defined by the determinant of the autoregressive operator
has no roots in and on the complex unit circle. On the assumption that the
process has been initiated in the infinite past (t = 0, ±1, ±2, . . .), it generates
stationary time series that have time-invariant means, variances, and covariance
         Vector Autoregressive and Vector Error Correction Models                  89

structure. If the polynomial in (3.2) has a unit root (i.e., the determinant is zero
for z = 1), then some or all of the variables are integrated. For convenience
we assume for the moment that they are at most I(1). If the variables have a
common stochastic trend, it is possible there are linear combinations of them that
are I(0). In that case they are cointegrated. In other words, a set of I(1) variables
is called cointegrated if a linear combination exists that is I(0). Occasionally
it is convenient to consider systems with both I(1) and I(0) variables. Thereby
the concept of cointegration is extended by calling any linear combination that
is I(0) a cointegration relation, although this terminology is not in the spirit of
the original definition because it can happen that a linear combination of I(0)
variables is called a cointegration relation.
    Although the model (3.1) is general enough to accommodate variables with
stochastic trends, it is not the most suitable type of model if interest centers on
the cointegration relations because they do not appear explicitly. The VECM
form

         yt = !yt−1 + 1 yt−1 + · · · +  p−1 yt− p+1 + u t                  (3.3)

is a more convenient model setup for cointegration analysis. Here ! =
−(I K − A1 − · · · − A p ) and i = −(Ai+1 + · · · + A p ) for i = 1, . . . , p − 1.
The VECM is obtained from the levels VAR form (3.1) by subtracting yt−1
from both sides and rearranging terms. Because yt does not contain stochas-
tic trends by our assumption that all variables can be at most I(1), the term
!yt−1 is the only one that includes I(1) variables. Hence, !yt−1 must also be
I(0). Thus, it contains the cointegrating relations. The  j s ( j = 1, . . . , p − 1)
are often referred to as the short-run or short-term parameters, and !yt−1 is
sometimes called the long-run or long-term part. The model in (3.3) will be
abbreviated as VECM( p − 1). To distinguish the VECM from the VAR model,
we sometimes call the latter the levels version. Of course, it is also possible to
determine the A j levels parameter matrices from the coefficients of the VECM.
More precisely, A1 = 1 + ! + I K , Ai = i − i−1 for i = 2, . . . , p − 1, and
A p = − p−1 .
     If the VAR( p) process has unit roots, that is, det(I K − A1 z − · · · −
A p z p ) = 0 for z = 1, the matrix ! = −(I K − A1 − · · · − A p ) is singular.
Suppose rk(!) = r . Then ! can be written as a product of (K × r ) matrices α
and β with rk(α) = rk(β) = r as follows: ! = αβ  . Premultiplying an I(0) vector
by some matrix results again in an I(0) process. Thus, β  yt−1 is I(0) because
it can be obtained by premultiplying !yt−1 = αβ  yt−1 with (α  α)−1 α  . Hence,
β  yt−1 contains cointegrating relations. It follows that there are r = rk(!) lin-
early independent cointegrating relations among the components of yt . The
rank of ! is therefore referred to as the cointegrating rank of the system, and
β is a cointegration matrix. For example, if there are three variables with two
90       Helmut Lütkepohl

cointegration relations (r = 2), we have
                                                                  
                                 α11 α12                   y1,t−1
                                          β11 β21 β31             
         !yt−1 = αβ  yt−1 =  α21 α22                      y2,t−1 
                                              β12 β22 β32
                                 α31 α32                      y3,t−1
                                                          
                                 α11 ec1,t−1 + α12 ec2,t−1
                                                          
                            =  α21 ec1,t−1 + α22 ec2,t−1  ,
                                 α31 ec1,t−1 + α32 ec2,t−1
where
         ec1,t−1 = β11 y1,t−1 + β21 y2,t−1 + β31 y3,t−1
and
         ec2,t−1 = β12 y1,t−1 + β22 y2,t−1 + β32 y3,t−1 .
    The matrix α is sometimes called the loading matrix. It contains the weights
attached to the cointegrating relations in the individual equations of the model.
The matrices α and β are not unique, and thus there are many possible α and
β matrices that contain the cointegrating relations or linear transformations of
them. In fact, using any nonsingular (r × r ) matrix B, we obtain a new loading
matrix αB and cointegration matrix βB  −1 , which satisfy ! = αB(βB  −1 ) . Con-
sequently, cointegrating relations with economic content cannot be extracted
purely from the observed time series. Some nonsample information is required
to identify them uniquely.
    The model (3.3) contains several special cases that deserve to be pointed out.
If all variables are I(0), r = K and the process is stationary. If r = 0, the term
!yt−1 disappears in (3.3). In that case, yt has a stable VAR representation.
In other words, a stable VAR representation exists for the first differences of
the variables rather than the levels variables. Clearly, these boundary cases
do not represent cointegrated systems in the usual sense of having a common
trend. There are also other cases in which no cointegration in the original sense
is present, although the model (3.3) has a cointegrating rank strictly between
0 and K . Suppose, for instance, that all variables but one are I(0); then, the
cointegrating rank is K − 1, although the I(1) variable is not cointegrated with
the other variables. Similarly, there could be K − r unrelated I(1) variables and
r I(0) components. Generally, for each I(0) variable in the system there can
be a column in the matrix β with a unit in one position and zeros elsewhere.
These cases do not represent a cointegrating relation in the original sense of
the term. Still it is convenient to include these cases in the present framework
because they can be accommodated easily as far as estimation and inference are
concerned. Of course, the special properties of the variables may be important
in the interpretation of a system and, hence, a different treatment of the special
         Vector Autoregressive and Vector Error Correction Models               91

cases may be necessary in this respect. The VECM in (3.3) also indicates that,
for a cointegrating rank r > 0, the vector of first differences of the variables,
yt , does not have a finite order VAR representation.


3.2.2 Deterministic Terms
Several extensions of the basic models (3.1) and (3.3) are usually necessary to
represent the main characteristics of a data set of interest. From Figure 3.1, it
is clear that including deterministic terms, such as an intercept, a linear trend
term, or seasonal dummy variables, may be required for a proper representation
of the DGP. One way to include deterministic terms is simply to add them to
the stochastic part,
         yt = µt + xt .                                                      (3.4)
Here µt is the deterministic part, and xt is a stochastic process that may
have a VAR or VECM representation, as in (3.1) or (3.3). In other words,
xt = A1 xt−1 + · · · + A p xt− p + u t or    xt = !xt−1 + 1 xt−1 + · · · +
 p−1 xt− p+1 + u t . On the assumption, for instance, that µt is a linear trend
term, that is, µt = µ0 + µ1 t, such a model setup implies the following VAR( p)
representation for yt :
         yt = ν0 + ν1 t + A1 yt−1 + · · · + A p yt− p + u t .                (3.5)
This representation is easily derived by left-multiplying (3.4) with A(L) =
I K − A1 L − · · · − A p L p , where L is the lag operator, as usual.Noting that
                                                                        p
A(L)xt = u t and rearranging terms, we find that ν0 = A(1)µ0 + ( j=1 jA j )µ1
and ν1 = A(1)µ1 . Hence, ν0 and ν1 satisfy a set of restrictions implied by the
trend parameters µ0 and µ1 and the VAR coefficients.
    Alternatively, one may view (3.5) as the basic model without restrictions
for νi (i = 0, 1). In that case, the model can, in principle, generate quadratic
trends if I(1) variables are included, whereas in (3.4), with a deterministic
term µt = µ0 + µ1 t, a linear trend term is permitted only. It is sometimes
advantageous in theoretical derivations that, in (3.4), a clear partitioning of the
process in a deterministic and a stochastic component be available. In some
instances it is desirable to subtract the deterministic term first because the
stochastic part is of primary interest in econometric analyses. Then the analysis
can focus on the stochastic part containing the behavioral relations.
    Of course, a VECM( p − 1) representation equivalent to (3.5) also exists. It
has the form
         yt = ν0 + ν1 t + !yt−1 + 1 yt−1 + · · · +  p−1 yt− p+1 + u t .
We will see in Section 3.4.2 that the restrictions on ν0 and ν1 sometimes allow
absorption of the deterministic part into the cointegrating relations.
92        Helmut Lütkepohl

3.2.3 Exogenous Variables
Further generalizations of the model are often desirable in practice. For ex-
ample, one may wish to include further stochastic variables in addition to the
deterministic part. A rather general VECM form that includes all these terms
is
          yt = !yt−1 + 1 yt−1 + · · · +  p−1 yt− p+1 + CDt + Bz t + u t ,
                                                                        (3.6)
where the z t s are “unmodeled” stochastic variables, Dt contains all regressors
associated with deterministic terms, and C and B are parameter matrices. The
z t s are considered unmodeled because there are no explanatory equations for
them in the system (3.6). For example, if interest centers on a money demand
relation, sometimes a single-equation model for m t is set up and no separate
equations are set up for the explanatory variables such as gnpt and Rt .
     Including unmodeled stochastic variables may be problematic for inference
and analysis purposes unless the variables satisfy exogeneity requirements. Dif-
ferent concepts of exogeneity have been considered in the literature [see Engle,
Hendry & Richard (1983)]. A set of variables z t is said to be weakly exogenous
for a parameter vector of interest, for instance θ, if estimating θ within a condi-
tional model (conditional on z t ) does not entail a loss of information relative to
estimating the vector in a full model that does not condition on z t . Furthermore,
z t is said to be strongly exogenous if it is weakly exogenous for the parameters of
the conditional model and forecasts of yt can be made conditional on z t without
loss of forecast precision. Finally, z t is termed super exogenous for θ if z t is
weakly exogenous for θ and policy actions that affect the marginal process of
z t do not affect the parameters of the conditional process. Hence, weak, strong,
and super exogeneity are the relevant concepts for estimation, forecasting, and
policy analysis, respectively [Ericsson, Hendry & Mizon (1998)]. In this chap-
ter the term exogeneity refers to the relevant concept for the respective context
if no specific form of exogeneity is mentioned.
     All the models we have presented so far do not explicitly include instan-
taneous relations between the endogenous variables yt . Therefore, they are
reduced form models. In practice, it is often desirable to model the contem-
poraneous relations as well, and therefore it is useful to consider a structural
form
          Ayt = !∗ yt−1 + 1∗ yt−1 + · · · +  ∗p−1 yt− p+1 + C ∗ Dt
                   +B ∗ z t + vt ,                                               (3.7)
where the ! ,  ∗j ( j = 1, . . . , p − 1), C ∗ , and B ∗ are structural form parameter
             ∗

matrices and vt is a (K × 1) structural form error term that is typically a zero
mean white noise process with time-invariant covariance matrix v . The matrix
A contains the instantaneous relations between the left-hand-side variables. It
          Vector Autoregressive and Vector Error Correction Models                        93

has to be invertible. The reduced form corresponding to the structural model
(3.7) is given in (3.6) with  j = A−1  ∗j ( j = 1, . . . , p − 1), C = A−1 C ∗ , ! =
A−1 !∗ , B = A−1 B ∗ , and u t = A−1 vt . In this chapter we will primarily focus
on reduced form models. Structural form models are discussed in more detail
in Chapter 4. Estimation of the model parameters will be considered next.


3.3 Estimation
Because estimation of the unrestricted levels VAR representation (3.1) and the
VECM (3.3) is particularly easy, these models are considered first. Afterwards,
estimation under various restrictions is discussed. In this section we make the
simplifying assumption that the lag order and, where used, the cointegrating rank
are known. Of course, in practice these quantities also have to be specified from
the data. Statistical procedures for doing so will be presented in Section 3.4.
Estimation is discussed first because it is needed in the model specification
procedures.


3.3.1 Estimation of an Unrestricted VAR
Given a sample y1 , . . . , yT and presample values y− p+1 , . . . , y0 , the K equa-
tions of the VAR model (3.1) may be estimated separately by ordinary least
squares (OLS). The resulting estimator has the same efficiency as a generalized
LS (GLS) estimator, as shown by Zellner (1962). Following Lütkepohl (1991),
we use the notation Y = [y1 , . . . , yT ], A = [A1 : · · · : A p ], U = [u 1 , . . . , u T ]
and Z = [Z 0 , . . . , Z T −1 ], where
                             
                       yt−1
                             
          Z t−1 =  ...  .
                       yt− p
Then the model (3.1) can be written as
          Y = AZ + U                                                                   (3.8)
and the OLS estimator of A is
         Â = [ Â1 : · · · : Â p ] = YZ  (ZZ  )−1 .                                (3.9)
Under standard assumptions [see, e.g., Lütkepohl (1991)], the OLS estimator
Â is consistent and asymptotically normally distributed,
          √                d
            T vec( Â − A) → N (0,  Â ).                             (3.10)
Here vec denotes the column stacking operator that stacks the columns of a
                               d
matrix in a column vector, and → signifies convergence in distribution. A more
94          Helmut Lütkepohl

intuitive notation for the result in (3.10) is
                    a
            vec( Â) ∼ N (vec(A),  Â /T ),
        a
where ∼ indicates “asymptotically distributed as”. The covariance matrix
of the asymptotic distribution is  Â = plim(ZZ  /T )−1 ⊗ u and thus an
even more intuitive, albeit imprecise, way of writing the result in (3.10)
is
            vec( Â) ≈ N (vec(A), (ZZ  )−1 ⊗ u ).
     For a normally distributed (Gaussian) I(0) process yt , the OLS estimator in
(3.9) is identical to the maximum likelihood (ML) estimator conditional on the
initial values.
     The OLS estimator also has the asymptotic distribution in (3.10) for non-
stationary systems with integrated variables [see Park & Phillips (1988, 1989),
Sims et al. (1990) and Lütkepohl (1991, Chapter 11)]. In that case it is im-
portant to note, however, that the covariance matrix  Â is singular, whereas it
is nonsingular in the usual I(0) case. In other words, if there are integrated or
cointegrated variables, some estimated coefficients or linear combinations of
coefficients converge with a faster rate than T 1/2 . Therefore, the usual t-, χ 2 -,
and F-tests for inference regarding the VAR parameters may not be valid in
this case, as shown, for example, by Toda & Phillips (1993). As an example
consider a univariate first-order autoregressive process yt = ρyt−1 + u t . If yt
is I(1) and, hence, ρ = 1, the
                             √ OLS estimator ρ̂ of ρ has a nonstandard limiting
distribution. The quantity T (ρ̂ − ρ) converges to zero in probability, that is,
the limiting distribution has zero variance and is degenerate, whereas T (ρ̂ − ρ)
has a nondegenerate nonnormal limiting distribution (see Chapter 2). It is per-
haps worth noting, however, that even in VAR models with I(1) variables, there
are also many cases where no inference problems occur. As shown by Toda
& Yamamoto (1995) and Dolado & Lütkepohl (1996), if all variables are I(1)
or I(0) and if a null hypothesis is considered that does not restrict elements of
each of the Ai s (i = 1, . . . , p), the usual tests have their standard asymptotic
properties. For example, if the VAR order p ≥ 2, the t-ratios have their usual
asymptotic standard normal distributions because they are suitable statistics for
testing that a single coefficient is zero. In other words, they test a null hypothesis
constraining one coefficient only in one of the parameter matrices while leaving
the other parameter matrices unrestricted.
     The covariance matrix u may be estimated in the usual way. Denoting by
û t the OLS residuals, that is, û t = yt − ÂZ t−1 , the matrices

                      1    T                            T
            
            ˆu =               û t û t   and   u = 1
                                                            û t û t        (3.11)
                   T − K p t=1                         T t=1
are possible estimators. Both estimators are consistent
                                               √        and asymptotically
                                                                 √         nor-
mally distributed independently of Â, that is, T (                 u − u )
                                                   ˆ u − u ) and T (
         Vector Autoregressive and Vector Error Correction Models                95

have asymptotic normal distributions if sufficient moment conditions are im-
posed [see Lütkepohl (1991) and Lütkepohl & Saikkonen (1997)]. These prop-
erties are convenient for inference purposes.
   As an example consider a system consisting of the German long-term interest
(Rt ) and inflation rate (Dpt ) plotted in Figure 3.1. Obviously, both series appear
to fluctuate around a nonzero mean and, in addition, the inflation rate has a
clear seasonal pattern. Therefore, in contrast to the theoretical situation just
discussed, it seems useful to include deterministic components in the model.
We just mention here that when they are included, the general estimation strategy
remains unchanged. In other words, estimation is still done by OLS for each
equation separately if the same deterministic terms are added to each equation.
They can be included by extending the Z t−1 vectors in the foregoing formulas
straightforwardly. Adding such terms does not affect the general asymptotic
properties of the VAR coefficient estimators mentioned earlier. Of course, these
properties are in general valid only if the model is specified properly. Hence,
deleting the deterministic terms from a system for which they are needed for
a proper specification may have an impact on the asymptotic properties of the
estimators.
   Using data from 1972Q2–1998Q4 and estimating a model for (Rt , Dpt ) of
order p = 4 with constant terms and seasonal dummies gives
                                                           
             1.15 0.18                     −0.28 −0.03               
   Rt        (11.3) (2.1)  Rt−1             (−1.8) (−0.3)  Rt−2
         =                              +                  
  Dpt          0.21 0.03        Dpt−1          −0.07 −0.06         Dpt−2
               (2.2)      (0.3)                  (−0.5)       (−0.7)
                                                                     
                  0.25 0.10                       −0.26 0.09
                                                           
             (1.6) (1.1)  Rt−3    (−2.4) (1.0)  Rt−4
           +                    +               Dp
              0.03 0.04     Dpt−3    −0.04 0.34        t−4
                  (0.2)      (0.4)                   (−0.4)     (4.1)

                                                   c 
               0.005 0.001 0.009 −0.000                                 
              (1.1)                       (−0.1)   s1,t 
          +
                         (0.3)     (1.7)
                                                            + û 1,t , (3.12)
               0.012 −0.034 −0.018 −0.016  s2,t                 û 2,t
                (2.9)  (−7.1)    (−3.6)    (−3.4)       s3,t
                                                                   
            2.85 −0.21         −5                      1.00 −0.08
     u =
     ˆ                    × 10 ,         Corr(u t ) =                    .
               · 2.59                                        · 1.00
Notice that, owing to the four lagged values on the right-hand side, only data
from 1973Q2–1998Q4 are actually used as sample values, and thus the sample
size is T = 103. The values for 1972Q2–1973Q1 are treated as presample
values. In Equation (3.12) t-values are given in parentheses underneath the
coefficient estimates. If the series are generated by a stationary process, the
t-ratios actually have asymptotic standard normal distributions; thus, the t-
values have the usual interpretation. For example, the coefficient estimates are
significant (more precisely: significantly different from zero) at the 5% level if
96        Helmut Lütkepohl

the t-ratios have absolute values greater than 1.96. Using this rule, one finds for
example, that the coefficient of Dpt−1 in the first equation is significant, whereas
the one in the second equation is not. Generally, there are many insignificant
coefficients under this rule. Therefore, model reductions may be possible. On
the other hand, two of the t-ratios in the coefficient matrix attached to lag 4 are
larger than 2 in absolute value. Consequently, simply reducing the VAR order
and thus dropping the larger lags may not be a good strategy here. We will
discuss estimation and specification of models with parameter constraints of
various forms later on.
   In fact, a univariate analysis of the two series reveals that both variables are
well described as I(1) variables. The earlier discussion of integrated variables
implies that the t-ratios maintain their usual interpretation for the VAR coeffi-
cient estimates even in this case because we have estimated a model of order
greater than 1. Notice that adding deterministic terms into the model does not
affect these results. The t-ratios of the parameters associated with the deter-
ministic part may not be asymptotically standard normal, however. Therefore,
the proper interpretation of the t-ratios of the coefficients in the last parameter
matrix in (3.12) is not clear. It makes sense, however, that the t-ratios of the
seasonal dummy variables in the inflation equation have larger absolute values
than the ones in the first equation of the estimated system because Dpt has a
seasonal pattern whereas Rt is free of obvious seasonality. In general, seasonal
dummies may be needed in an equation for a nonseasonal variable if some of the
right-hand-side variables have a seasonal pattern, as is the case in the present
model, where lags of Dpt also appear in the Rt equation.
   The estimated residual correlation matrix Corr (u t ) is the one corresponding
to the estimated covariance matrix     ˆ u , as given in JMulTi. In the present
example system, the instantaneous correlation between the two variables is
obviously quite small and is not significantly
                                          √      different from zero (at a 5% level)
because it is within an interval ±1.96/ T = ±0.2 around zero.


3.3.2 Estimation of VECMs
Reduced rank ML estimation. If the cointegrating rank of the system un-
der consideration is known, working with the VECM form (3.3) is conve-
nient for imposing a corresponding restriction. In deriving estimators for the
parameters of (3.3), the following notation is used: Y = [y1 , . . . , yT ],
Y−1 = [y0 , . . . , yT −1 ], U = [u 1 , . . . , u T ],  = [1 : · · · :  p−1 ], and X =
[X 0 , . . . , X T −1 ] with
                                 
                            yt−1
                             ..  
              X t−1 =         .  .
                      yt− p+1
          Vector Autoregressive and Vector Error Correction Models                    97

For a sample with T observations and p presample values, the VECM (3.3) can
now be written compactly as

          Y = !Y−1 +  X + U.                                                    (3.13)

Given a specific matrix !, the equationwise OLS estimator of  is easily seen
to be

          ˆ = (Y − !Y−1 )X  (XX  )−1 .                                        (3.14)

Substituting in (3.13) and rearranging terms gives

          YM = !Y−1 M + Û ,                                                     (3.15)

where M = I − X  (XX  )−1 X . For a given integer r , 0 < r < K , an estimator
!ˆ of ! with rk(!)ˆ = r can be obtained by a method known as canonical
correlation analysis [see Anderson (1984)] or, equivalently, a reduced rank
(RR) regression based on the model (3.15). Following Johansen (1995a), the
estimator may be determined by defining

          S00 = T −1 YMY  , S01 = T −1 YMY −1 , S11 = T −1 Y−1 MY −1

and solving the generalized eigenvalue problem
                         −1
          det(λS11 − S01 S00 S01 ) = 0.                                           (3.16)

 Let the ordered eigenvalues be λ1 ≥ · · · ≥ λ K with corresponding matrix of
                                                                −1
eigenvectors V = [b1 , . . . , b K ] satisfying λi S11 bi = S01 S00 S01 bi and normal-
ized such that V S11 V = I K . The reduced-rank estimator of ! = αβ  is then
                 

obtained by choosing

          β̂ = [b1 , . . . , br ]

and
                   
          α̂ = YMY−1 β̂(β̂  Y−1 MY−1
                                    
                                       β̂)−1 ,                                    (3.17)

that is, α̂ may be viewed as the OLS estimator from the model

          YM = α β̂  Y−1 M + Ũ .

The corresponding estimator of ! is !          ˆ = α̂ β̂  . Using (3.14), we find that a
feasible estimator of  is  = (Y − !Y
                                 ˆ              ˆ −1 )X  (XX  )−1 . Under Gaussian as-
sumptions these estimators are ML estimators conditional on the presample
values [Johansen (1988, 1991, 1995a)]. They are consistent and jointly asymp-
totically normal under general assumptions,
          √                                                         d
            T vec([ˆ 1 : · · · : ˆ p−1 ] − [1 : · · · :  p−1 ]) → N (0, ˆ )
98        Helmut Lütkepohl

and
          √                d
              T vec(!
                    ˆ − !) → N (0, !ˆ ).

Here the asymptotic distribution of ˆ is nonsingular; thus, standard inference
may be used for the short-term parameters  j . On the other hand, the (K 2 × K 2 )
covariance matrix !ˆ can be shown to have rank K r and is therefore singular
if r < K . This result is due to two factors. On the one hand, imposing the rank
constraint in estimating ! restricts the parameter space and, on the other hand, !
involves the cointegration relations whose estimators have specific asymptotic
properties.
    In this approach the parameter estimator β̂ is made unique by the normal-
ization of the eigenvectors, and α̂ is adjusted accordingly. However, these are
not econometric identification restrictions. Therefore, only the cointegration
space but not the cointegration parameters are estimated consistently. To esti-
mate the matrices α and β consistently, it is necessary to impose identifying
(uniqueness) restrictions. Without such restrictions only the product αβ  = !
can be estimated consistently. An example of identifying restrictions that has
received some attention in the literature assumes that the first part of β is an
                                       
identity matrix, that is, β  = [Ir : β(K −r ) ], where β(K −r ) is a ((K − r ) × r ) ma-
trix. For r = 1, this restriction amounts to normalizing the coefficient of the
first variable to be 1. This normalization requires some care in choosing the
order of the variables. The reason is that there may be a cointegrating relation
only between a subset of variables in a given system. Therefore, normalizing an
arbitrary coefficient may result in dividing by an estimate corresponding to a
parameter that is actually zero because the associated variable does not belong
in the cointegrating relation.
    If the cointegrating rank r > 1, the normalization is such that
                          
                    Ir
           β=                .
                  β(K −r )

Given that rk(β) = r , there exists a nonsingular (r × r ) submatrix of β  that
motivates the normalization. Notice that ! = αβ  = α BB −1 β  for any non-
singular (r × r ) matrix B. Hence, choosing B such that it corresponds to the
nonsingular (r × r ) submatrix of β  results in a decomposition of !, where
β contains an identity submatrix. A suitable rearrangement of the variables
                                                
can ensure that β  will be of the form [Ir : β(K −r ) ]. It should be clear, how-
ever, that such a normalization requires a suitable order of the variables. If
the order of the variables is inappropriate, this can lead to major distortions.
In practice, choosing the order of the variables may not be trivial. Ideally, the
order should be chosen such that economically interpretable cointegrating re-
lations result when the normalization restrictions are imposed. In choosing the
order of the variables it may be helpful also to analyze cointegration between
         Vector Autoregressive and Vector Error Correction Models                   99

subsets of the variables before the full system is set up. A more detailed ex-
ample is given in Section 3.8. Of course, different orderings may be checked.
The ordering leading to the most sensible set of cointegrating relations is then
maintained. An advantage of working with normalized cointegrating vectors
is that they can be used directly in a two-stage procedure if a structural form
model or a model with parameter restrictions is to be estimated eventually
(see Section 3.3.4).
    Moreover, the normalization ensures identified parameters β(K −r ) , and thus
inference becomes possible. Generally, if  √uniqueness restrictions are imposed,
it can be shown that T (β̂ − β) and T (α̂ − α) converge in distribution
[Johansen (1995a)]. Hence, the estimator of β converges with the fast rate
T and is therefore sometimes called √ superconsistent. In contrast, the estimator
of α converges with the usual rate T . It has an asymptotic normal distribution
under general assumptions; hence, it behaves like usual estimators in a model
with stationary variables. In fact, its asymptotic distribution is the same that is
obtained when β̂ is replaced by the true cointegration matrix β in (3.17).
    The estimators for the parameters β(K −r ) have an asymptotic distribution
that is multivariate normal upon appropriate normalization. More precisely,
partitioning yt as
                (1) 
                 yt
          yt =     (2) ,
                 yt
        (1)           (2)
where yt and yt are (r × 1) and ((K − r ) × 1), respectively, and defining
 (2)    (2)          (2)
Y−1 = [y0 , . . . , yT −1 ], we have
                                                       1/2 $
                                           (2)    (2)
        vec (β̂(K    −r ) −  β (K −r ) )   Y−1   MY −1
                                  1/2           
                        (2)  (2)                                   
              =        Y−1 MY−1            ⊗ I K −r vec(β̂(K −r ) − β(K −r ) )

                  d
                  → N (0, I K −r ⊗ (α  u−1 α)−1 ),

where M is the previously defined matrix from (3.15) [e.g., Reinsel (1993,
Chapter 6)]. With a slight abuse of notation this result may be written as
                                                                          
                                                 (2) −1
                                                           ⊗ (α  u−1 α)−1 .
                                              (2)
        vec(β̂(K −r ) ) ≈ N vec(β(K −r ) ), (Y−1 MY−1 )
                                                                                 (3.18)

Although this statement is misleading in the sense that the estimators are not
really asymptotically normally distributed, it is a convenient way to think of their
distributional properties when deriving inference procedures for the estimators.
For example, replacing the unknown parameters in the covariance matrix by their
100       Helmut Lütkepohl

ML estimators, t-ratios are obtained straightforwardly by dividing the elements
     
of β̂(K −r ) by the square roots of the corresponding diagonal elements of

                            
          
                (2)
          ˆ = (Y−1                   u−1 α̂)−1 .
                    MY−1 )−1 ⊗ (α̂  
                      (2)
                                                                                          (3.19)

   The expression in (3.18) can also be used to test composite hypotheses for
β(K −r ) . For a given fixed (J × r (K − r )) matrix R of rank J and a (J × 1)
vector r , the hypothesis
                     
          H0 : Rvec(β(K −r ) ) = r                                                        (3.20)

can be checked easily by a Wald test. The test statistic has an asymptotic χ 2 -
distribution with J degrees of freedom under H0 ,

                                                                                  d
          λW = [Rvec(β̂(K                 ˆ  −1       
                          −r ) ) − r ] (R R ) [Rvec(β̂(K −r ) ) − r ] → χ (J ).
                                                                          2

                                                                            (3.21)

   Suppose, for instance, that the three interest rates i 1 , i 2 , and i 3 are driven by
a common stochastic trend so that there are two cointegrating relations (r = 2).
Then the normalized cointegration matrix has the form
                           
                1 0 β31
        β =                  .
                0 1 β32

Suppose one now wants to test that the interest rate spreads are stationary so
that the cointegrating relations are i 1 − i 3 and i 2 − i 3 . In other words, one would
like to test that the cointegration matrix has the form
                             
                   1 0 −1
          β =                  .
                   0 1 −1

The null hypothesis of interest is then
                                                                               
                                                    1 0        β31               −1
          H0 : β31 = −1, β32 = −1 or                                     =            .
                                                    0 1        β32               −1

Hence, in this example, R = I2 and r = (−1, −1) . Under the null hypothesis,
the resulting Wald statistic λW has an asymptotic χ 2 (2)-distribution.
   As another example, consider a four-dimensional system with two cointe-
grating relations for which one would like to check that the cointegrating matrix
satisfies
                              
                1 0 0 ∗
          β =                    .
                 0 1 ∗ 0
          Vector Autoregressive and Vector Error Correction Models               101

Here the asterisks indicate unrestricted elements. In this case,
                          
                     0 ∗
         β(K −r ) =
                      ∗ 0

and the restrictions can be written as
                                           
           1 0 0 0                          0
                           vec(β(K −r ) ) =
           0 0 0 1                           0

so that
                                            
             1       0   0   0                0
          R=                         and r =     .
             0       0   0   1                0

   It is perhaps interesting to note that an estimator of the levels VAR param-
eters A can be computed via the estimates of ! and . That estimator has the
advantage of imposing the cointegration restrictions on the levels version of
the estimated VAR process. However, if no restrictions are imposed on α and
, the asymptotic distribution of the resulting estimator for A is the same as in
(3.10), where no restrictions have been imposed in estimating A. Computing
the covariance matrix estimator  u from the residuals of the VECM estimation,
we find that its asymptotic distribution is the same as if it were determined from
the levels VAR form treated in the previous section. Again, it is asymptotically
independent of !  ˆ and .ˆ Extensions of these results for the case in which the
true DGP is an infinite order VAR process are considered by Saikkonen (1992)
and Saikkonen & Lütkepohl (1996).
   To illustrate the estimation of a VECM, we again use the German interest
rate–inflation series plotted in Figure 3.1. On the basis of the levels VAR form
in (3.12), three lagged differences are likely to be necessary. Because both
variables are found to be I(1) in a univariate analysis, the cointegrating rank
should be either 0, if no cointegration is present, or 1, if a cointegration relation
is possible. The latter model is the less restricted one and, hence, has to be
chosen if cointegration cannot be excluded on a priori grounds. For the presently
considered variables, one cointegration relation is in fact suggested by economic
theory. The so-called Fisher effect implies that the real interest rate should be
stationary. In our case, where Rt is the annual nominal interest rate and Dpt is a
quarterly inflation rate, one may therefore expect that Rt − 4Dpt is a stationary
variable. Consequently, this may be a cointegration relation in our system.
Formal statistical tests for the number of cointegration relations are discussed
in Section 3.4.2.
   For our example system we have estimated a VECM with cointegrating
rank r = 1 and three lagged differences of the two variables using data from
1973Q2–1998Q4 (T = 103) plus four presample values. The following esti-
mates are determined by the Johansen procedure as implemented in JMulTi
102            Helmut Lütkepohl

with t-statistics in parentheses:
                                                                                          
                   −0.10                                              0.27 −0.21
                                                                                           
    Rt          (−2.3)  1.00 : −3.96                    Rt−1    (2.7) (−1.4)  Rt−1
               =                                               +              
    Dpt           0.16           (−6.3)                   Dpt−1    0.07 −0.34       Dpt−1
                         (3.8)                                              (0.7)   (−2.4)
                                                            
                    −0.02 −0.22               0.22 −0.11           
                   (−0.2) (−1.8)  Rt−2      (2.3) (−1.3)  Rt−3
                 +                         +              
                    −0.00 −0.39     Dpt−2      0.02 −0.35     Dpt−3
                         (−0.0)          (−3.4)                     (0.2)    (−4.5)
                                                     c 
                 0.002 0.001 0.009 −0.000                                  
               (0.4)      (0.3)     (1.8)   (−0.1)    s1,t 
                                                                    û 1,t
            +                                                  +            ,                  (3.22)
                 0.010 −0.034 −0.018 −0.016  s2,t                  û 2,t
                  (3.0)  (−7.5)    (−3.8)    (−3.6)       s3,t
                                                                      
             2.58 −0.15         −5                      1.00 −0.06
       u =                 × 10 ,         Corr(u t ) =                     .
                 · 2.30                                        · 1.00

Notice that the first coefficient in the cointegrating relation is normalized to
1 by JMulTi. With this normalization, the estimated cointegrating relation is
quite close to what one would expect on the basis of prior considerations. In
general, without normalizing the coefficient associated with Rt−1 , such a result
is unlikely because the RR estimation procedure imposes statistical uniqueness
constraints on the estimated cointegration parameters, which do not take any
prior economic considerations into account.
    Because the first coefficient of the cointegration vector is normalized, we can
use the asymptotic distribution of the second coefficient to test that it is −4, as
expected, if the Fisher effect is present. For this example, K − r = 1, and thus
ˆ is a scalar quantity that turns out to be 0.39. Hence, a t-test for H0 : β2 = −4
may be applied. The test statistic has the value

               β̂2 + 4   −3.96 + 4
                 %     =           = 0.06,
                   ˆ     0.628

and the null hypothesis cannot be rejected at any reasonable level of significance.
   Although in general the loading coefficients are also to some extent arbi-
trary because they are determined by the normalization of the cointegrating
vectors, their t-ratios can be interpreted in the usual way “conditional on the
estimated cointegration coefficients.” In other words, they can be used for as-
sessing whether the cointegration relations resulting from our normalization
enter a specific equation significantly. Because they are in fact asymptotically
normal, using them with critical values from a standard normal distribution
can be justified in the usual way. For our example system both estimated load-
ing coefficients have absolute t-ratios greater than 2, which suggests that the
cointegration relation is an important variable in both of the equations.
         Vector Autoregressive and Vector Error Correction Models                           103

    The estimators of the parameters associated with lagged differences of the
variables (short-run parameters) may be interpreted in the usual way. The t-
ratios are asymptotically normal under our assumptions. The same is not neces-
sarily true for the parameters associated with deterministic terms. Their t-ratios
are just given for completeness.
    For VECMs, JMulTi uses the residual covariance estimate       u , which di-
vides the residual sums of squares and cross products by the sample size used
for estimation and does not perform a degrees-of-freedom correction. For this
reason, the estimated variances for (3.22) are somewhat smaller than those of
the less restricted system (3.12). Notice that imposing a cointegrating rank of
r < 2 implies a restriction relative to a full VAR(4) model for the levels vari-
ables. The residual correlation matrix returned by JMulTi is always the one
corresponding to the estimated covariance matrix. Consequently, in the present
case it is based on u .
    As mentioned earlier, it is also possible to transform back from the VECM
to the levels VAR form. The resulting estimates for the model in (3.22) are
                                                                  
                        1.17 0.20                  −0.29 −0.01               
             Rt        (10.6) (0.9)  Rt−1          (−1.9) (−0.2)  Rt−2
                    =                            +
             Dpt          0.22 0.04  Dpt−1          −0.07 −0.05  Dp
                                                                              t−2
                              (2.2)       (0.2)                       (−0.5)     (−0.7)


                                                                          
                0.24 0.12                             −0.22 0.11
           (1.6) (1.4)  Rt−3   (−2.3) (1.3)  Rt−4
         +                    +
            0.02 0.04  Dpt−3     −0.02 0.35  Dpt−4
                (0.2)   (0.6)                               (−0.2)   (4.5)


                                          c 
                0.002         0.001           0.009 −0.000
                                                               
           (0.4)                  (−0.1)   s1,t      û 1,t
         +
                     (0.3)   (1.8)
                                                   +            .
            0.010 −0.034 −0.018 −0.016   s2,t         û 2,t
             (3.0) (−7.5)  (−3.8)  (−3.6)
                                              s3,t

Comparing these estimates and t-ratios with those of the unrestricted model in
(3.12) shows that most of them are quite similar, and thus imposing the rank
of 1 does not appear to be very restrictive. Some of the t-ratios have changed a
bit, however (see, for example, the coefficients of Dpt−1 and Dpt−3 in the first
equation).

A simple two-step (S2S) estimator for the cointegration matrix. Another sim-
ple method for estimating the cointegration matrix takes advantage of the fact
that the VECM (3.3) can be written in the form
                        (1)                           (2)
         yt − !1 yt−1 −  X t−1 = !2 yt−1 + u t ,                                        (3.23)
104         Helmut Lütkepohl

           (1)               (2)                                                 
where yt−1 is (r × 1), yt−1 is ((K − r ) × 1),  = [1 : · · · :  p−1 ], and X t−1 =
                   
[yt−1  , . . . , yt− p+1 ], as before. The matrices !   1 and ! 2 are (K  ×  r ) and
(K × (K − r )), respectively, such that [!1 : !2 ] = ! = αβ  . Normalizing the
                                                  
cointegration matrix such that β  = [Ir : β(K      −r ) ] gives !1 = α and !2 =
                                          −1 −1  −1
αβ(K −r ) . Premultiplying (3.23) by (α u α) α u and defining

            wt = (α  u−1 α)−1 α  u−1 (yt − αyt−1 −  X t−1 ),
                                                       (1)


gives
                           (2)
            wt = β(K −r ) yt−1 + vt ,                                              (3.24)
where vt = (α  u−1 α)−1 α  u−1 u t is an r -dimensional white noise process with
mean zero and covariance matrix v = (α  u−1 α)−1 .
                                      
   If α, , and u were given, β(K      −r ) could be estimated from (3.24) by OLS.
Because the former parameters are unknown in practice, the following two-step
procedure may be used. In the first step, we eliminate the short-term parameters
by replacing them with their OLS estimators given ! as in (3.14), and we
consider the concentrated model (3.15),
            YM = !Y−1 M + Û .
Using this model we estimate ! by OLS. Denoting the estimator by !  ˜ = [!˜1 :
˜ 2 ] and the corresponding residual covariance estimator by 
!                                                            ˜ u = T −1 (Y −
!Y
˜ t−1 )M(Y − !Y   ˜ t−1 ) and using α̃ = !
                                           ˜ 1 , we define
             = (α̃  
            W         ˜ u−1 α̃)−1 α̃  
                                       ˜ u−1 (Y − α̃Y−1
                                                      (1)
                                                          ),
           (1)      (1)           (1)                                    
where Y−1 = [y0 , . . . , yT −1 ]. Now the second step follows in which β(K −r ) is
estimated by OLS from
             = β(K
            WM           (2)
                    −r ) Y−1 M + Ṽ ,                                              (3.25)
that is,
                                            −1
                             (2)       (2)
            β̃˜ (K −r ) = WMY
                                     (2)
                             −1 Y−1 MY−1          ,                                (3.26)
           (2)      (2)           (2)
where Y−1 = [y0 , . . . , yT −1 ].
    This simple two-step (S2S) estimator has the same asymptotic distribution
as the ML estimator [see Reinsel (1993, Chapter 6) and Ahn 
                                                             & Reinsel (1990)].
Thus, for inference purposes we may pretend that vec(β̃˜ (K −r ) ) has an approx-
                                     
imate normal distribution, N (vec(β(K  −r ) ), ), where from (3.25) a possible
estimator of the covariance matrix is now
                                  
             = (Y−1
            
                  (2)            v .
                      MY−1 )−1 ⊗ 
                        (2)

                                                 
     v = T −1 (W
Here             − β̃˜ (K −r ) Y (2) )M(W
                                           − β̃˜ (K −r ) Y (2) ) is the residual covari-
                                  −1                       −1
ance matrix estimator from (3.25).
         Vector Autoregressive and Vector Error Correction Models             105

   The S2S estimator may be used in the usual way to obtain estimators of the
other parameters in the model by employing (3.17) and the formulas following
that equation. The estimator can be extended straightforwardly to the case in
which deterministic terms are present.
   Because the ML estimator is computationally unproblematic in the present
case, the usefulness of the S2S estimator may not be obvious at this stage. It
will be seen later, however, that it has advantages when restrictions are to be
imposed on the cointegrating vectors.
   For the interest rate–inflation example we obtain

         Rt = 3.63 Dpt + errort
                (0.61)


using again the model with three lagged differences, seasonal dummies and a
samples period 1972Q2 − 1998Q4 including presample values. Here the esti-
mated standard error is given in parentheses underneath the coefficient estimate.
Clearly, the estimate differs somewhat from the one obtained with the Johansen
ML procedure [see Equation (3.22)]. The value 4 is still well within a two-
standard error interval around the estimate, however. Thus, the S2S estimator
confirms that 4 may be an acceptable value of the cointegration parameter.


3.3.3 Restricting the Error Correction Term
If restrictions are available for the cointegration space from economic theory,
for instance, it is useful to take them into account in estimating the VECM
parameters. The error correction term can be restricted by imposing constraints
on β, α, or both. These two types of restrictions are discussed in turn next.

Restrictions for the cointegration relations. If only identifying restrictions for
the cointegration relations are available, estimation may proceed as described
in the previous section, and then the identified estimator of β may be obtained
by a suitable transformation of β̂. For example, if β is just a single vector, a
normalization of the first component may be obtained by dividing the vector β̂
by its first component, as discussed in the previous section.
    Sometimes over-identifying restrictions are available for the cointegration
matrix. They can be handled easily if they can be written in the form β = H ϕ,
where H is some known, fixed (K × s) matrix and ϕ is (s × r ) with s ≥ r .
For example, in a system with three variables and one cointegration relation, if
β31 = −β21 , we have
                                 
                   β11        1 0          
                                        β
           β =  β21  =  0 1  11 = H ϕ,
                                        β21
                  −β21        0 −1
106        Helmut Lütkepohl

and thus ϕ = (β11 , β21 ) . If the restrictions can be represented in this form, Y−1 is
simply replaced by H  Y−1 in the quantities entering the generalized eigenvalue
problem (3.16), that is, we have to solve
                                     −1
           det(λH  S11 H − H  S01
                                 
                                    S00 S01 H ) = 0                              (3.27)

for λ to get λ1H ≥ · · · ≥ λsH . The eigenvectors corresponding to λ1H , . . . , λrH are
the estimators of the columns of ϕ. Denoting the resulting estimator by ϕ̂ gives
a restricted estimator β̂ = H ϕ̂ for β and corresponding estimators of α and ,
as in (3.17) and the following equations.
   More generally, restrictions may be available in the form β = [H1 ϕ1 , H2 ϕ2 ],
where H j is (K × s j ) and ϕ j is (s j × r j ) ( j = 1, 2) with r1 + r2 = r . For in-
stance, if there are three variables (K = 3) and two cointegrating relations
(r = 2), one zero restriction on the last element of the second cointegrating
vector can be represented as
                            
                  β11 β12
                            
          β =  β21 β22  = [H1 ϕ1 , H2 ϕ2 ]
                  β31 0

with H1 = I3 , ϕ1 = (β11 , β21 , β31 ) ,
                     
                  1 0
        H2 =  0 1 
                  0 0

and ϕ2 = (β12 , β22 ) . In that case, restricted ML estimation is still not difficult
but requires an iterative optimization, whereas the S2S estimator is available in
closed form, as we will see now.
   In general, if the restrictions can be represented in the form
                
           vec(β(K −r ) ) = Hη + h

(where H is a fixed matrix, h a fixed vector, and η a vector of free parameters),
the second step of the S2S estimator given in (3.26) may be based on the
vectorized, modified model

                              (2)   
           vec(WM) = (MY−1 ⊗ Ir )vec(β(K −r ) ) + vec( Ṽ )
                        (2)
                   = (MY−1 ⊗ Ir )(Hη + h) + vec(Ṽ ),

and thus
                              (2)               (2)
                − (MY ⊗ Ir )h = (MY ⊗ Ir )Hη + vec(Ṽ ).
           vec(WM)    −1            −1
           Vector Autoregressive and Vector Error Correction Models                            107

                                            (2)
                    − (MY ⊗ Ir )h, we find that the feasible GLS esti-
Defining z̃ = vec(WM)         −1
mator of η is
              &                        '−1
                         (2)  v−1 )H                 v−1 )z̃,
         η̃˜ = H (Y−1 MY−1 ⊗             H (Y−1 M ⊗ 
                    (2)                         (2)



where v−1 is the covariance matrix estimator from an unrestricted S2S estima-
tion based on (3.25). Again, with some abuse of notation, we have
                  &                            '−1 
                                  (2)
         η̃˜ ≈ N η, H (Y−1 MY−1 ⊗ v−1 )H
                            (2)
                                                      ,

which can be used for inference for η. For example, the t-ratios can be obtained
and interpreted in the usual manner by dividing the parameter estimators by the
corresponding square roots of the diagonal elements of the covariance matrix
estimator.
                                                                R
   Using the restricted estimator β̂(K
                                    R
                                       −r ) obtained from vec(β̂(K −r ) ) = Hη̃ + h,
                                                                             ˜
a restricted estimator of the cointegration matrix is
                               
           β̂ R = [Ir : β̂(K
                           R
                              −r ) ].

This restricted estimator can, for example, be used in a multistage procedure
in systems estimation, where restrictions are also imposed on the short-run
parameters (see Section 3.3.4).
   For the German interest rate–inflation system we have the extreme case
that the cointegrating vector may be regarded as being known completely from
economic theory, and thus we may fix β  = (1, −4). Doing so and estimating the
system again by single-equation OLS with the new regressor variable Rt−1 −
4Dpt−1 in each of the equations yields
                                                        
              −0.10                         0.27 −0.21              
  Rt         (−2.3)                       (2.7) (−1.4)  Rt−1
           =           (Rt−1 − 4Dpt−1 ) +               
  Dp  t         0.16                         0.07 −0.34      Dp                      t−1
                      (3.8)                             (0.7)    (−2.4)
                                                                                
                      −0.02 −0.22                            0.22 −0.11
                                                                     
                 (−0.2) (−1.8)  Rt−2     (2.3) (−1.3)  Rt−3
               +                       +               
                  −0.00 −0.39     Dpt−2     0.02 −0.35       Dpt−3
                      (−0.0)       (−3.4)                       (0.2)     (−4.5)

                                                c 
                  0.001 0.001 0.009 −0.000                           
                 (0.4)    (0.3)   (1.8) (−0.1)  
                                                   s1,t 
                                                              û 1,t
               +                                         +            .                    (3.28)
                  0.010 −0.034 −0.018 −0.016  s2,t           û 2,t
                   (3.0) (−7.5)  (−3.8)  (−3.6)     s3,t

The coefficient estimates are almost the same as in (3.22). Only some of the
t-values have changed slightly owing to the restriction on the cointegration
vector.
108       Helmut Lütkepohl

Weak exogeneity restrictions. Linear restrictions on the loading matrix α of the
type α = Gψ with G a given fixed (K × s) matrix and ψ a (s × r ) parameter
matrix with s ≥ r can also be imposed easily. For example, one may wish to
consider the restriction that some or all of the cointegration relations do not
enter a particular equation. Such a restriction is of special interest because it
implies weak exogeneity of specific variables for the cointegrating parameters.
More precisely, a variable is weakly exogenous for the cointegrating parameters
if none of the cointegration relations enter the equation for that variable. For
instance, in a three-variable system (K = 3) with two cointegration relations
(r = 2) we may wish to consider the case that the third variable is weakly
exogenous. Hence,
                                     
                 α11 α12          1 0              
                                       α11 α12
         α = α21 α22 = 0 1                            = Gψ,
                                           α21 α22
                  0     0         0 0
where G and ψ are defined in the obvious way.
   Suppose that we wish to impose the restriction α = Gψ with rk(G) = s.
This can be done by premultiplying (3.15) by (G  G)−1 G  and performing an
RR regression on a transformed model. An estimator of ψ is thereby obtained
denoted as ψ̂. The restricted estimator of α is then α̂ = G ψ̂. Formally the
estimator of ψ may be obtained via the solution of an appropriately modified
generalized eigenvalue problem, similar to (3.16) [Johansen (1995a)].
   Again, more general restrictions of the form α = [G 1 ψ1 , . . . , G r ψr ] can
be handled in principle. In this case, iterative algorithms are necessary for
imposing them. If we combine this approach with the one considered previously
for restrictions on β, it is also possible to restrict α and β simultaneously. An
alternative way to impose restrictions on the loading coefficients and short-term
part of the model is described in the next section.


3.3.4 Estimation of Models with More General Restrictions and
Structural Forms
For a general structural form model such as (3.7) with restrictions on the loading
coefficients (α), the short-term parameters (), and other parameter matrices,
efficient estimation is more difficult. First of all, identifying restrictions are
needed. They are typically available in the form of zero restrictions on A,  ∗j
( j = 1, . . . , p − 1), C ∗ , and B ∗ . In addition, there may be a rank restriction for
!∗ given by the number of cointegrating relations. If identifying restrictions
are available for the cointegrating relations, the loading matrix α ∗ or both,
!∗ may be replaced by the product α ∗ β ∗  . Restrictions for α ∗ typically are
zero constraints, which means that some cointegrating relations are excluded
from some of the equations of the system. Usually it is possible to estimate
β ∗ in a first stage. For example, if we use a reduced form and ignore the
          Vector Autoregressive and Vector Error Correction Models                  109

structural restrictions, the RR regression procedure described in Section 3.3.2
or the S2S procedure of Section 3.3.2 may be employed. If there is just one
cointegrating relation, it may alternatively be estimated by a single-equation
procedure. Notice, for example, that the first equation of the VECM (3.3) has
the form

          y1t = π11 y1,t−1 + · · · + π1K y K ,t−1 + γ1 yt−1
                   + · · · + γ p−1 yt− p+1 + u 1t ,

where the π1 j ’s are the elements of the first row of ! and γ j is the first row
of  j ( j = 1, . . . , p − 1). This equation may be estimated by OLS to yield
estimates π̂1 j of the π1 j s. Denoting the first element of α by α1 , we have
(π11 , . . . , π1K ) = α1 β  . Hence, an estimate β̂ with normalized first element
may be obtained as β̂  = (1, π̂12 /π̂11 , . . . , π̂1K /π̂11 ), where it is assumed that
α1 = 0 so that the cointegration relation is actually present in the first equation.
A similar estimate may also be available in a structural form setting.
   The first-stage estimator β̂ ∗ , for example, may be treated as fixed in a second-
stage estimation of the structural form because the estimators of the cointegrat-
ing parameters converge at a better rate than the estimators of the short-term
parameters. In other words, a systems estimation procedure may be applied to
                          
          Ayt = α ∗ β̂ ∗ yt−1 + 1∗ yt−1 + · · · +  ∗p−1 yt− p+1
                    +C ∗ Dt + B ∗ z t + v̂t .                                     (3.29)

If only exclusion restrictions are imposed on the parameter matrices in this
form, standard econometric systems estimation procedures such as three-stage
LS (3SLS) [e.g., Judge et al. (1985)] or similar methods may be applied that
result in estimators of the short-term parameters with the usual asymptotic
properties.
   Some care is necessary, however, with respect to the treatment of exogenous
and deterministic variables. Generally, no problems arise if all exogenous vari-
ables are I(0). In this case parameter estimators with the usual properties are
obtained. If z t contains I(1) variables, the properties of the estimators depend
on the cointegration properties of z t . In particular, cointegration between un-
modeled and endogenous variables has to be taken into account appropriately
[see, e.g., Boswijk (1995)]. Numerous articles deal with estimating models
containing integrated variables. Examples are Phillips (1987, 1991), Phillips
& Durlauf (1986), Phillips & Hansen (1990), and Phillips & Loretan (1991).
A textbook treatment is given in Davidson (2000). Some more discussion of
estimating structural models is presented in Chapter 4.
   Rather than including deterministic terms separately, as in (3.29), they may be
included in the cointegrating relations. In this case, a suitable reparameterization
of the model is called for. For intercepts and linear trend terms, the relevant
110      Helmut Lütkepohl

reparameterizations will be presented in Section 3.4.2 in the context of testing
for the cointegrating rank, where a proper treatment of deterministic terms is
of particular importance. The properties of the corresponding estimators are
not treated in detail here because, in a subsequent analysis of the model, the
parameters of the deterministic terms are often of minor interest [see, however,
Sims et al. (1990)].

3.4 Model Specification
In specifying VAR models or VECMs it is necessary to specify the lag order
and, for VECMs, also the cointegrating rank. Statistical procedures that can
be used to help in deciding on these quantities are available and will be dis-
cussed next. Because unrestricted VAR models and VECMs usually involve
a substantial number of parameters, it is desirable to impose restrictions that
reduce the dimensionality of the parameter space and thereby improve the es-
timation precision. Restrictions may be based on economic theory or other
nonsample information and on statistical procedures. Such procedures for im-
posing restrictions on the deterministic term, the error correction part, and the
short-term parameters will be discussed subsequently.

3.4.1 Determining the Autoregressive Order
In determining the lag order of a dynamic model, in principle the same proce-
dures are available that were already discussed for univariate models. In other
words, sequential testing procedures and model selection criteria may be ap-
plied. It is useful to focus on the VAR form (3.1) at this stage because the
cointegrating rank r is usually unknown when the choice of the lag order p is
made. One possible approach is to start from a model with some prespecified
maximum lag length, pmax and apply tests sequentially to determine a suitable
model order. For example, the following sequence of null hypotheses may be
tested until the test rejects: H0 : A pmax = 0, H0 : A pmax −1 = 0, and so forth. In
this procedure, a decision on pmax has to be made. Occasionally this quantity
is chosen by some theoretical or institutional argument. For instance, one may
want to include lags of at least one year, and thus four lags have to be included
for quarterly data and twelve lags may be used for a monthly model. An in-
appropriate choice of pmax may not be very severe in some respect because, if
the order is chosen too small, this problem may be discovered later when the
final model is subjected to a series of specification tests (see Section 3.5). For
example, the portmanteau test may be unsatisfactory in this case. On the other
hand, an excessively large value of pmax may be problematic owing to its impact
on the overall error probability of a sequential procedure. If a very large order
pmax is used, a long sequence of tests may be necessary that will have an impact
on the overall Type I error of the testing sequence, that is, the choice of pmax
will have an impact on the probability of an inadequate selection of p. Again
         Vector Autoregressive and Vector Error Correction Models             111

such a problem may become apparent at some later stage when other checks
and criteria are also used to evaluate the model.
   Instead of sequential tests one may alternatively choose the lag length by
model selection procedures. Generalized versions of the criteria discussed in
Chapter 2 in the univariate case are available for that purpose. The general
approach is again to fit VAR(m) models with orders m = 0, . . . , pmax and to
choose an estimator of the order p that minimizes the preferred criterion. Many
of the criteria in current use have the general form
                          u (m)) + cT ϕ(m),
         Cr (m) = log det(                                                (3.30)

where det(·) denotes
                      the determinant, log is the natural logarithm, as usual,
u (m) = T −1 T û t û t is the residual covariance matrix estimator for a model
                 t=1
of order m, cT is a sequence that depends on the sample size T , and ϕ(m) is a
function that penalizes large VAR orders. For instance, ϕ(m) may represent the
number of parameters that have to be estimated in a VAR(m) model. The term
        u (m)) measures the fit of a model with order m. Because there is no
log det(
correction for degrees of freedom in the covariance matrix estimator, the log
determinant decreases (or at least does not increase) when m increases. As in
the univariate case, the sample size has to be held constant; hence, the number
of presample values set aside for estimation is determined by the maximum
order pmax .
   The following criteria are direct generalizations of the corresponding criteria
discussed for univariate processes in Chapter 2:

                          u (m)) +2
         AIC(m) = log det(           m K 2,
                                   T
                         u (m)) + 2 log log T m K 2 ,
         HQ(m) = log det(
                                        T
and

                         u (m)) + log T m K 2 .
         SC(m) = log det(
                                     T
Again, the AIC criterion asymptotically overestimates the order with positive
probability, whereas the last two criteria estimate the order consistently under
quite general conditions if the actual DGP has a finite VAR order and the
maximum order pmax is larger than the true order. These results not only hold for
I(0) processes but also for I(1) processes with cointegrated variables [Paulsen
(1984)]. Denoting by p̂(AIC), p̂(HQ) and p̂(SC) the orders selected by the
three criteria, respectively, we find that the following relations hold even in
small samples of fixed size T ≥ 16 [see Lütkepohl (1991, Chapters 4 and 11)]:

         p̂(SC) ≤ p̂(HQ) ≤ p̂(AIC).
112      Helmut Lütkepohl

Model selection criteria may also be used for identifying single coefficients that
may be replaced by zero or other exclusion restrictions. Possible procedures are
considered in Section 3.4.5.


3.4.2 Specifying the Cointegrating Rank
If some of the variables are I(1), a VECM is the suitable modeling framework,
and the cointegrating rank r has to be chosen in addition to the lag order.
Sequential testing procedures based on likelihood ratio (LR)–type tests are
possible statistical tools for this choice. Because Gaussian ML estimates for
the reduced-form VECM are easy to compute for a given cointegrating rank,
as shown in Section 3.3.2, LR test statistics are readily available. The following
sequence of hypotheses may be considered:

          H0 (0) : rk(!) = 0              versus H1 (0) : rk(!) > 0,
          H0 (1) : rk(!) = 1              versus H1 (1) : rk(!) > 1,
                                     ..                             (3.31)
                                      .
          H0 (K − 1) : rk(!) = K − 1 versus H1 (K − 1) : rk(!) = K .

The testing sequence terminates, and the corresponding cointegrating rank is
selected when the null hypothesis cannot be rejected for the first time. If the
first null hypothesis in this sequence, H0 (0), cannot be rejected, a VAR process
in first differences is considered. At the other end, if all the null hypotheses can
be rejected, including H0 (K − 1), a levels VAR process should be considered
for the subsequent analysis.
    Given the discussion of unit root testing, it is not surprising that, under
Gaussian assumptions, the LR statistic under H0 (r0 ) is nonstandard. It depends
on the difference K − r0 and on the deterministic terms included in the DGP. In
particular, the deterministic trend terms and shift dummy variables in the DGP
have an impact on the null distributions of the LR tests. Therefore, LR-type
tests have been derived under different assumptions regarding the deterministic
term. On the assumption that the lag order is specified properly, the limiting
null distributions do not depend on the short-term dynamics.
    To present the tests, the model (3.4) is a convenient point of departure.
Specifically, we first consider the model

         yt = µ0 + µ1 t + xt ,                                               (3.32)

where xt is a VAR( p) process. There are three cases of particular interest from
a practical point of view. First, if µ1 = 0, there is just a constant mean and no
deterministic trend term. In that case, yt − µ0 = xt , and thus yt = xt , and
from the VECM form of xt , the mean adjusted yt is seen to have the VECM
form
         Vector Autoregressive and Vector Error Correction Models                       113

                                         
                                         p−1
         yt = !(yt−1 − µ0 ) +                   j yt− j + u t                      (3.33)
                                         j=1

or, if an intercept term is used,
                                       
                                       p−1
          yt = ν0∗ + !yt−1 +                  j yt− j + u t
                                        j=1
                                     
                                       p−1                                            (3.34)
                    ∗       yt−1
               =!                  +           j yt− j + u t ,
                             1
                                       j=1

where !∗ = [! : ν0∗ ] is (K × (K + 1)) with ν0∗ = −!µ0 . Notice that it follows
from the absence of a deterministic trend term that the intercept can be absorbed
into the cointegration relations; thus, !∗ = αβ ∗  has rank r . Both VECM ver-
sions can be used for testing the cointegrating rank. Johansen (1995a) considers
the intercept version (3.34) and provides critical values for the LR test, which
is known as the trace test. The test statistic is of the form
                           K
          LR(r0 ) = −T          log(1 − λ j ),
                             j=r0 +1

where the λ j are the eigenvalues obtained by applying RR regression tech-
niques to (3.34). In Saikkonen & Luukkonen (1997) and Saikkonen & Lütkepohl
(2000d), two-step procedures are considered in which the mean term is esti-
mated in a first step by a feasible GLS procedure. Substituting the estimator for
µ0 in (3.33), we may apply an LR-type test based on a RR regression of (3.33).
The resulting test statistic has an asymptotic distribution that is different from
the one obtained for the intercept version. In fact, asymptotically the power of
the test based on (3.33) is superior to that obtained from (3.34) [see Saikkonen
& Lütkepohl (1999)].
   A second case results if there is actually a linear deterministic trend in the
DGP and, hence, µ1 = 0. If the trend is confined to some individual variables
but is absent from the cointegration relations, we have β  µ1 = 0, that is, the
trend parameter is orthogonal to the cointegration matrix; thus, !(yt−1 − µ0 −
µ1 (t − 1)) = !(yt−1 − µ0 ). Hence, for this case, using again the VECM form
of xt = yt − µ0 − µ1 t, we get
                                                  
                                                  p−1
         yt − µ1 = !(yt−1 − µ0 ) +                       j (yt− j − µ1 ) + u t ,   (3.35)
                                                   j=1

where (yt − µ0 − µ1 t) = yt − µ1 has been used. Collecting all constant
terms in an intercept gives
                                       
                                       p−1
         yt = ν0 + !yt−1 +                   j yt− j + u t ,                       (3.36)
                                       j=1
114      Helmut Lütkepohl
                         p
where ν0 = −!µ0 + ( j=1 j A j )µ1 [see Eq. (3.5)]. A test based on the trend-
adjusted version (3.35) was proposed by Saikkonen & Lütkepohl (2000b). In this
case the mean and trend parameters are estimated in a first step by a feasible GLS
procedure, the trend is subtracted from yt to yield x̂t = yt − µ̂0 − µ̂1 t, and then
the test statistic is computed via RR regression based on the VECM (3.35). The
null distributions are tabulated in Saikkonen & Lütkepohl (2000b). Correspond-
ing LR tests based on the intercept version of the VECM in (3.36) are treated by
Johansen (1995a).
   Notice, however, that the (K × r ) matrix β has to satisfy β  µ1 = 0 with
µ1 = 0 under the present assumptions. This requirement implies that r < K .
Hence, if a trend is known to be present, then it should also be allowed for
under the alternative; consequently, even under the alternative the rank must
be smaller than K . Thus, in the present setting only tests of null hypotheses
rk(!) = r0 < K − 1 should be performed. This result is an implication of the
fact that a linear trend is assumed in at least one of the variables (µ1 = 0),
whereas a stable model (where r = K ) with an intercept does not generate a
linear trend.
   The final case of practical importance results if a fully unrestricted linear
trend term is included in (3.32). In that situation we have again two types of
VECMs. Using the VECM of xt = yt − µ0 − µ1 t gives

                                                          
                                                          p−1
         yt − µ1 = !(yt−1 − µ0 − µ1 (t − 1)) +                    j (yt− j − µ1 ) + u t ,
                                                           j=1
                                                                                     (3.37)

and, rearranging the deterministic terms, we get
                                      p−1
                        +        yt−1
         yt = ν + !                   +      j yt− j + u t ,                      (3.38)
                                t −1
                                           j=1


where !+ = α[β  : η] is a (K × (K + 1)) matrix of rank r with η = −β  µ1 .
Furthermore, ν = −!µ0 + (I K − 1 − · · · −  p−1 )µ1 . In this case both the
variables and the cointegration relations may have a deterministic linear trend.
Again, the test statistics can be obtained conveniently via RR regression applied
to the VECMs by using the techniques of Section 3.3.2. The model (3.38) takes
into account the fact that the linear trend term can be absorbed into the cointe-
gration relation. Otherwise a quadratic trend would be possible in the variables
that is, however, excluded by the model statement in (3.32). Alternatively, a test
may once more be based on prior trend adjustment and estimation of (3.37)
with estimated µ0 and µ1 . The trend parameters are again estimated in a first
step by a GLS procedure [see Saikkonen & Lütkepohl (2000d) for details and
Lütkepohl & Saikkonen (2000) for critical values]. Neither of the two resulting
             Vector Autoregressive and Vector Error Correction Models            115

Table 3.1. Models and LR-type tests for cointegration

Assumption for
deterministic term     Model setup [reference]
                                        
                                   y          
µ0 arbitrary, µ1 = 0   yt = !∗ t−1 + p−1        j=1  j yt− j + u t
                                     1
                       [Johansen (1995a)]
                                                
                       yt = !(yt−1 − µ0 ) + p−1    j=1  j yt− j + u t
                       [Saikkonen & Luukkonen (1997), Saikkonen & Lütkepohl (2000d)]
                                              
µ0 arbitrary           yt = ν0 + !yt−1 + p−1    j=1  j yt− j + u t
µ1 = 0, β  µ1 = 0    [Johansen (1995a)]
                                                       
                       yt − µ1 = !(yt−1 − µ0 ) + p−1      j=1  j (yt− j − µ1 ) + u t
                       [Saikkonen & Lütkepohl (2000b)]
                                              
                                          yt−1       
µ0 , µ1 arbitrary      yt = ν + !+               + p−1 j=1  j yt− j + u t
                                         t −1
                       [Johansen (1992, 1994, 1995a)]

                       yt − µ1 = !(yt−1 − µ0 − µ1 (t − 1))
                                       
                                    + p−1 j=1  j (yt− j − µ1 ) + u t
                       [Saikkonen & Lütkepohl (2000d), Lütkepohl & Saikkonen (2000)]




  test versions was found to be superior in all situations; hence, both tests may
  be applied.
      All the tests are summarized in Table 3.1. Suitable critical values based on
  the asymptotic null distributions may be found in the references given in that
  table as well. It is worth noting that seasonal dummy variables may be added
  to the deterministic term. This will not change the asymptotic properties of the
  tests. On the other hand, other dummy variables may have an impact on the
  asymptotic distribution of the tests. A particular case of practical relevance is
  discussed shortly.
      We have applied cointegration tests to check the cointegrating rank of the
  German interest rate–inflation system. Because the series do not have an ap-
  parent linear trend, we just include a constant and seasonal dummy variables.
  The AIC suggests including three lagged differences, whereas HQ and SC fa-
  vor a specification without lagged differences. Therefore we have applied the
  cointegration tests using both types of models. The results of the Johansen
  trace tests and the tests proposed by Saikkonen and Lütkepohl (S&L tests) are
  presented in Table 3.2. It turns out that the Johansen test rejects rank 0 and
  does not reject rank 1 for both lag orders. Thus, on the basis of this test, one
  would continue the analysis with a model with one cointegration relation. The
116        Helmut Lütkepohl

Table 3.2. Tests for cointegration in the German interest rate–inflation system

                                                                            Critical values
                  No. of lagged         Null                Test
Test              differences           hypothesis          value         90%           95%
Johansen          0                     r =0                89.72         17.79         19.99
                                        r =1                 1.54          7.50          9.13
                  3                     r =0                21.78         17.79         19.99
                                        r =1                 4.77          7.50          9.13
S&L               0                     r =0                28.21         10.35         12.21
                                        r =1                 0.41          2.98          4.14
                  3                     r =0                10.13         10.35         12.21
                                        r =1                 2.42          2.98          4.14
Notes: Sample period: 1972Q2–1998Q4 (including presample values). Deterministic terms: con-
stant and seasonal dummies. Critical values from Johansen (1995a, Tables 15.1 and 15.2) for the
S&L and Johansen tests, respectively.



situation is slightly different for the S&L tests. Applying on S&L test, one
clearly finds rank one when no lagged differences are included. Otherwise the
test cannot reject the null hypothesis r = 0 at the 10% level. This result reflects
the possible loss in power caused by using long lag lengths. Still the test value
is close to the 90% quantile of the asymptotic distribution. Hence, the over-
all conclusion is that working with one cointegrating relation is a reasonable
choice.

Structural shifts. If there is a structural shift in the level of the DGP and if
the shift can be captured by adding dummy variables to the deterministic part
of the process, including such terms in the model leads to a change in the
asymptotic distributions of the Johansen-type tests for the cointegrating rank.
In fact, the null distributions will depend on where the shifts have occurred in
the sampling period [see Johansen, Mosconi & Nielsen (2000)]. In contrast,
Saikkonen & Lütkepohl (2000c) have extended their approach to DGPs with
level shifts and have shown that, for their tests, the limiting null distributions
are unaffected. For the case of shifts in period τ , they consider the following
model:

           yt = µ0 + µ1 t + δdtτ + xt ,

where µi (i = 0, 1) and δ are unknown (K × 1) parameter vectors. The quantity
dtτ is a dummy variable defined as
                
                  0, t < τ,
          dtτ =
                  1, t ≥ τ,
         Vector Autoregressive and Vector Error Correction Models                117

that is, dtτ is a shift dummy variable representing a shift in period τ . The
unobserved error process xt is again assumed to have a VECM( p − 1) form.
Then the observed process yt can be shown to have a VECM representation
                                   
                              yt−1     
                                       p−1              
                                                        p−1
          yt = ν + !shift  t − 1  +      j yt− j +     γ j dt− j,τ + u t ,
                             dt−1,τ    j=1              j=0

where ν is, as in (3.38), !shift = α[β  : η : θ] is (K × (K + 2)) of rank r , η =
−β  µ1 , θ = −β  δ, and
                
                     δ, j = 0,
           γj =
                  − j δ, j = 1, . . . , p − 1.
Here dt− j,τ is an impulse dummy variable with value 1 in period t = τ + j
and 0 elsewhere.
    For a given value of the shift date τ , the deterministic part of the DGP
can be estimated by RR regression if the nonlinear restrictions between the
parameters in the model are ignored, that is, the γ j s are estimated unrestrictedly.
Given that the restrictions occur in coefficient vectors of impulse dummies only,
Saikkonen & Lütkepohl (2000c) have suggested ignoring them because doing
so is not expected to do great damage to the properties of the other estimators,
even in small samples. Once estimates of the parameters associated with the
xt process are available, they can again be used to estimate the parameters
of the deterministic terms by a feasible GLS procedure. The observations are
then adjusted for deterministic terms, and cointegration tests are based on the
adjusted series as previously. The resulting test statistics for the cointegrating
rank have the same limiting distributions under the null hypothesis as in the
previous section, where no shift term was present. In other words, the asymptotic
critical values to be used depend only on the assumptions regarding the trend
terms and can be found in the references given in Table 3.1. Of course, the case
where µ1 = 0 is known a priori (hence, no linear trend appears in the model)
can be treated analogously.
    For illustration we use the German GNP, money (M3), and interest rate (R)
series plotted in Figure 3.1. As mentioned in the introduction to this chapter,
the three variables may be related by a money demand function, where the
demand for money depends on the transactions volume, represented by GNP,
and opportunity costs for holding money, represented by R. Thus, the three
series may be cointegrated. The cointegrating rank of these three variables
was actually investigated by Lütkepohl & Wolters (2003). For gnp = log GNP
and m = log M3 there may be a deterministic linear trend, and unit root tests
provide evidence for a stochastic trend as well. Moreover, the series have a
seasonal component; thus, seasonal dummy variables will be included in the
model underlying the cointegration tests and there is a clear shift in the third
quarter of 1990, where the German reunification occurred. This level shift can
118        Helmut Lütkepohl

Table 3.3. Tests for the cointegrating rank of the German money demand system

                                                                              Critical values
                         No. of lagged         Null             Test
Test                     differences           hypothesis       value        90%         95%
Johansen                 0                     r =0             33.75        39.08       42.20
                                               r =1             10.67        22.95       25.47
                                               r =2              4.04        10.56       12.39
                         2                     r =0             25.50        39.08       42.20
                                               r =1             12.51        22.95       25.47
                                               r =2              4.10        10.56       12.39
S&L                      0                     r =0             20.31        25.90       28.47
                                               r =1              6.41        13.89       15.92
                                               r =2              3.60         5.43        6.83
                         2                     r =0             16.03        25.90       28.47
                                               r =1              6.03        13.89       15.92
                                               r =2              4.11         5.43        6.83
S&L                      0                     r =0             35.31        25.90       28.47
with shift dummy                               r =1             12.43        13.89       15.92
                                               r =2              0.15         5.43        6.83
                         4                     r =0             13.60        25.90       28.47
                                               r =1              5.62        13.89       15.92
                                               r =2              1.04         5.43        6.83
Notes: Deterministic terms in all models: constant, linear trend, and seasonal dummies. Sample
period: 1972Q1–1998Q4 (including presample values). Critical values from Johansen (1995a,
Table 15.4) for the Johansen tests and Lütkepohl & Saikkonen (2000, Table 1) for the S&L tests.



perhaps be taken care of by a shift dummy S90Q3t , which is 1 from 1990Q3
onwards and 0 before that date.
   We have performed cointegrating rank tests with and without the shift dummy
to show the consequences of ignoring a structural break. The results are given
in Table 3.3. A linear trend, which is not assumed to be orthogonal to the coin-
tegration relations, and seasonal dummies are included in all the tests, and the
observation period is 1972Q1–1998Q4. The first few observations are used
as presample values in the usual way. The number of presample values de-
pends on the number of lagged differences included in the model. Different
lag orders are suggested by the AIC and HQ criteria and are therefore also
used in the tests. It turns out that none of the tests find cointegration if no shift
dummy is included in the model, whereas there is at least some evidence for
one cointegration relation if S90Q3 is included. More precisely, a cointegra-
tion rank of zero is clearly rejected if the HQ lag order zero is considered.
Hence, not being able to reject a cointegrating rank of zero when the shift is
         Vector Autoregressive and Vector Error Correction Models                 119

ignored may be a power problem. Thus, in this case it pays to account for the
shift.

Some remarks. A comprehensive survey of the properties of LR-type tests for
the cointegrating rank as well as numerous other tests that have been proposed
in the literature is given by Hubrich, Lütkepohl & Saikkonen (2001). We refer
the interested reader to that article for further details. Here we will only add a
few specific remarks.
    Instead of the pair of hypotheses in (3.31), one may alternatively test H0 (r0 ) :
rk(!) = r0 versus H∗1 (r0 ) : rk(!) = r0 + 1. LR tests for this pair of hypotheses
were also pioneered by Johansen (1988, 1991) and are known as maximum
eigenvalue tests. They are based on a statistic
         LRmax (r0 ) = −T log(1 − λr0 +1 )
and can be applied for all the different cases listed in Table 3.1. They also have
nonstandard limiting distributions. Critical values can be found in the literature
cited in the foregoing. Lütkepohl, Saikkonen & Trenkler (2001a) have compared
several different maximum eigenvalue and trace tests and found that the latter
have sometimes slightly more distorted sizes than the former in small samples
but may also have power advantages.
    The limiting distributions of the LR statistics are not only valid for normally
distributed (Gaussian) processes but also under more general distributional as-
sumptions even if the LR statistics are computed under Gaussian assumptions.
In that situation these tests are just quasi-LR tests. Saikkonen & Luukkonen
(1997) have demonstrated that some of the tests remain asymptotically valid
even if they are based on a finite order model although the true DGP has an
infinite VAR order. This result is of interest because, in practice, tests for unit
roots and cointegration are usually applied to the univariate series or subsys-
tems first to determine the order of integration for the individual variables or the
cointegrating properties of a subset of variables. However, if the full system of
variables is driven by a finite-order VAR process, then the generating process
of the individual variables may be of the infinite-order autoregressive type [see
Lütkepohl (1991, Section 6.6)]. Hence, for the sake of consistency it is reas-
suring to know that the tests remain valid for this case. Lütkepohl & Saikkonen
(1999) have analyzed this situation in more detail. In particular, these authors
consider the impact of lag length selection in this context.
    There is a notable difference between the asymptotic properties of the tests
and their actual performance for samples of the size typically available in eco-
nomics. The properties of the tests in small samples depend quite strongly on
the lag order chosen. Working with a low-order model that does not capture the
serial dependence in the data well may lead to size distortions, whereas choos-
ing an unnecessarily large lag order may spoil the power of the tests. Thus,
it is a good strategy to perform tests for different lag orders and to check the
120       Helmut Lütkepohl

Table 3.4. Hypotheses and tests concerning the deterministic term in a system of
K variables and a given cointegrating rank r

                                                                        Asymptotic
                                                                        distribution
H0                                  H1                                  of LR statistic
µ0 arbitrary, µ1 = 0                µ0 arbitrary, µ1 = 0, β  µ1 = 0   χ 2 (K − r )
µ0 arbitrary, µ1 = 0, β  µ1 = 0   µ0 , µ1 arbitrary                   χ 2 (r )


robustness of the results. A large-scale simulation study comparing the small
sample properties of many of the tests was performed by Hubrich et al. (2001).
The tests presented herein were found to perform relatively well compared with
other possible tests for the cointegrating rank.
   Instead of the sequential testing procedures, model selection criteria may be
used for determining the cointegrating rank. This possibility is considered, for
instance, by Lütkepohl & Poskitt (1998) and Gonzalo & Pitarakis (1998).

3.4.3 Choice of Deterministic Term
The foregoing discussion of the implications of the deterministic term for tests
of the cointegrating rank reveals that a proper choice of that term is important.
Of course, if a linear time trend is regarded as a possibility, one could just
include such a term in the process in fully general form to be on the safe side.
This, however, may result in a substantial power loss if the time trend is not
needed in the model. In Doornik, Hendry & Nielsen (1998), small sample and
asymptotic evidence is presented that, not taking into account a deterministic
trend actually present in the DGP, may result in major size distortions, and their
study confirms that including an unnecessary trend term may result in a loss of
power [see also Hubrich et al. (2001)].
    Therefore, in applied work, investing some effort in a proper trend specifi-
cation is worthwhile. This is often based on subject matter considerations or
a visual inspection of the plots of the time series under study. For instance, a
deterministic linear trend is often regarded as unlikely for interest rates for theo-
retical reasons. Consequently, if a system of interest rates is analyzed, including
a mean term may be sufficient.
    There are also statistical procedures that can aid in deciding on the de-
terministic components. Specifically, tests are proposed in Johansen (1994,
1995a) for hypotheses regarding the deterministic term within his Gaussian
likelihood framework. Apart from dummy variables, the most general deter-
ministic term in the VAR or VECM form of the processes considered thus far is
µ0 + µ1 t. To formulate the tests for the deterministic terms we list the hypothe-
ses of interest in Table 3.4. Because the ML estimators of the corresponding
models can be obtained easily, as seen in the previous section, LR tests are
         Vector Autoregressive and Vector Error Correction Models              121

obvious possibilities. The test statistics have asymptotic χ 2 -distributions under
the null hypothesis. For some pairs of hypotheses of interest, the correspond-
ing asymptotic distributions are given in Table 3.4 [see Johansen (1994)]. As
usual, the Gaussian framework is convenient in deriving the tests, whereas
the limiting distributions of the test statistics remain valid under more general
conditions.
   For example, in the German interest rate–inflation system we have assumed
that no linear trend is required in the model. We can now check this assumption
using the first test in Table 3.4. For this purpose, we use a model with cointe-
grating rank 1 and without lagged differences. In other words, we use the lag
order favored by the HQ and SC criteria. We estimate a model with the con-
stant term restricted to the cointegrating relation and one with an unrestricted
constant term. The likelihood ratio statistic is easily obtained from the determi-
nants of the residual covariance matrices by taking natural logs and multiplying
the difference by T = 106. In this case a value of 2.07 is obtained that has to
be compared with a critical value of a χ 2 (1)-distribution because K = 2 and
r = 1. Given that, for instance, the 90% quantile of the χ 2 (1)-distribution is
2.7, the null hypothesis cannot be rejected at any common level. On this basis
our previous decision to dispense with a linear trend term is supported.
   Although such tests may be helpful in deciding on the deterministic term, one
should keep in mind that they introduce an additional layer of uncertainty into
the overall procedure. The tests assume a specific cointegrating rank. Thus,
ideally, the cointegrating rank has to be determined before the deterministic
terms are tested. Therefore, checking the robustness of the testing results for
the cointegrating rank to different specifications of the deterministic terms is a
useful strategy. Note also that deterministic terms other than means and linear
trends may be required for a proper description of the DGP. Notably, dummy
variables to account for seasonality or structural shifts may be considered.
Properly specified seasonal dummies do not affect the asymptotic distribution
under the null hypothesis, as shown by Johansen (1995a).


3.4.4 Testing Restrictions Related to the Cointegration Vectors and the
Loading Matrix
Overidentifying linear restrictions on the cointegration space can also be tested
conveniently by LR or quasi-LR tests because, under Gaussian assumptions,
the restricted ML estimators are readily available, as discussed in Section 3.3.3.
Testing

         H0 : β = H ϕ     versus H1 : β = H ϕ

for a given, fixed (K × s) matrix H , r ≤ s < K , and a (s × r ) parameter matrix
ϕ is particularly easy because ϕ can be estimated by solving the eigenvalue
122      Helmut Lütkepohl

problem (3.27). The corresponding LR statistic is
                    
                    r
         LR H = T         [log(1 − λiH ) − log(1 − λi )],
                    i=1

where the λi ’s are the solutions from an “unrestricted” eigenvalue problem such
as (3.16). Under H0 , L R H has an asymptotic χ 2 (r (K − s))-distribution [see
Johansen (1995a)]. A similar procedure can also be used if the null hypoth-
esis is more complicated (e.g., H0 : β = [H1 ϕ1 , H2 ϕ2 ]). In that case, the ML
estimators can also be obtained as described in Section 3.3.3.
   Alternatively, if the restrictions can be put in the general linear form (3.20)
for the normalized cointegration matrix,
                    
         H0 : Rvec(β(K −r ) ) = r ,

where R is a fixed (J × r (K − r )) matrix of rank J and r is a (J × 1) vector,
the Wald statistic (3.21)
                                       ˆ  −1       
         λW = [Rvec(β̂(K −r ) ) − r ] (R R ) [Rvec(β̂(K −r ) ) − r ]

can be used to check the restrictions. It has an asymptotic χ 2 -distribution with
J degrees of freedom under H0 , as seen in (3.21).
   Hypotheses for the loading matrix α may also be of interest. For example,
one may wish to test that some or all of the cointegrating relations do not enter a
particular equation and thus that the corresponding left-hand variable is weakly
exogenous for the cointegration parameters. More generally, suppose that we
wish to test
         H0 : α = Gψ        versus H1 : α = Gψ,
where G is a given (K × s) matrix and ψ is (s × r ) with r ≤ s < K . Again
the restricted estimator may be obtained by an ML procedure as described
in Section 3.3.3, and the corresponding LR test statistic has a χ 2 (r (K − s))
limiting distribution under H0 . Moreover, there may be restrictions on both α
and β that can be tested jointly by an LR test.
   As an alternative we may again use Wald tests for restrictions on α by
applying the results discussed in Section 3.3.4. Using a two-stage procedure in
which β is estimated first and then fixed in the second stage, we may treat α in
the same way as the short-run parameters. Procedures for placing restrictions
on them will be discussed next.


3.4.5 Testing Restrictions for the Short-Run Parameters
and Fitting Subset Models
The standard t-ratios and F-tests retain their usual asymptotic properties if
they are applied to the short-run parameters in a VECM, whereas problems
          Vector Autoregressive and Vector Error Correction Models                 123

may arise for integrated variables in the levels VAR representation, as men-
tioned in Section 3.3.1. It is therefore a good idea to impose restrictions on
the VECM parameters, although there are also many situations in which the
tests are unproblematic for checking restrictions of the VAR coefficients, as
discussed in Section 3.3.1. A particular set of restrictions for which problems
arise is discussed in more detail in Section 3.7.
   Instead of using statistical testing procedures, restrictions for individual pa-
rameters or groups of parameters in VARs or VECMs may be based on model
selection criteria. For placing individual parameter restrictions we consider
the single equations of the system. Suppose the equation of interest is of the
form
          y jt = x1t θ1 + · · · + x N t θ N + ujt ,     t = 1, . . . , T.        (3.39)
Here all right-hand-side variables are denoted by xkt , including deterministic
variables, constants, or unlagged endogenous variables if the equation belongs to
a structural form. In some situations it is also convenient to include cointegration
relations among the xkt s. For example, xkt = β  yt−1 may be a regressor if β is
a known vector. For the present purposes it is convenient to write the variable
selection criteria in the form
          CR(i 1 , . . . , i n ) = log(SSE(i 1 , . . . , i n )/T ) + cT n/T,     (3.40)
where SSE(i 1 , . . . , i n ) is the sum of squared errors obtained by including
xi1 t , . . . , xin t in the regression model (3.39) and cT is a sequence, as in (3.30).
The following variable elimination strategies have, for instance, been consid-
ered in the literature [see, e.g., Brüggemann & Lütkepohl (2001)].

Full search. Choose the regressors that minimize CR(i 1 , . . . , i n ) for all subsets
{i 1 , . . ., i n } ⊂ {1, . . . , N }, where n = 0, . . . , N .                      

   This procedure is computationally expensive if N is large. The set {1, . . . , N }
has 2 N subsets. Therefore 2 N models have to be compared. The following elim-
ination procedure proceeds sequentially and is computationally more efficient.
One variable only is eliminated in each step.

Sequential elimination of regressors. Sequentially delete those regressors
that lead to the largest reduction of the given selection criterion until no further
reduction is possible.                                                            

   Individual zero coefficients can also be chosen on the basis of the t-ratios
of the parameter estimators. A possible strategy is to delete sequentially those
regressors with the smallest absolute values of t-ratios until all t-ratios (in
absolute value) are greater than some threshold value γ . Note that a single
regressor is eliminated in each step only. Then new t-ratios are computed for the
124      Helmut Lütkepohl

reduced model. Brüggemann & Lütkepohl (2001) have shown that this strategy
is equivalent to the sequential elimination based on model selection criteria
if the threshold value γ is chosen accordingly. More precisely, these authors
show that choosing γ = {[exp(cT /T ) − 1](T − N + j − 1)}1/2 in the jth step
of the elimination procedure results in the same final model that is obtained by
sequentially minimizing the selection criterion defined by the penalty term cT .
Hence, the threshold value depends on the selection criterion via cT , the sample
size, and the number of regressors in the model. The threshold values for the
t-ratios correspond to the critical values of the tests. The aforementioned AIC,
HQ, and SC with cT (AIC ) = 2, cT (HQ) = 2 log log T , and cT (SC) = log T ,
respectively, may be used in these procedures. In that case, for an equation with
twenty regressors and a sample size of T = 100, choosing a model by AIC, HQ,
or SC roughly corresponds to eliminating all regressors with t-values that are not
significant at the 15–20%, 10%, or 2–3% levels, respectively [see Brüggemann
& Lütkepohl (2001)].
    We are using the German interest rate–inflation example again to illustrate
subset modeling. Restricting the error correction term as ect = Rt − 4Dpt and
using the sequential elimination of regressors in conjunction with the AIC based
on a search for restrictions on individual equations, we obtain the following
model
                                                              
               −0.07                             0.24 −0.08                
   Rt         (−3.1)                          (2.5) (−1.9)  Rt−1
           =                    −            +
                   0.17  t−1                    0 −0.31  Dp
                          (R        4Dp     )
  Dpt                                  t−1
                                                                          t−1
                   (4.5)                                  (−2.5)
                                                            
                 0 −0.13                     0.20 −0.06
                                                      
            (−2.5)  Rt−2     (2.1) (−1.6)  Rt−3
          +                  +
             0 −0.37  Dpt−2      0 −0.34  Dpt−3
                   (−3.6)                             (−4.7)

                                         c 
                   0        0       0.010       0            
                           (2.8)        
                                           s1,t 
                                                      û 1,t
          +                                       +            . (3.41)
             0.010 −0.034 −0.018 −0.016   s2,t      û 2,t
              (3.0) (−7.6) (−3.8) (−3.6)
                                            s3,t

Here again the sample period 1973Q2–1998Q4 plus the required presample
values have been used. Obviously, quite a few coefficients are set to zero. In
fact, the Rt lags do not appear in the second equation anymore. The coeffi-
cients remaining in the model generally have fairly large t-ratios (in absolute
value), as expected. Notice, however, that the finally chosen model was esti-
mated by feasible GLS for the full system (3SLS). The resulting estimates are
shown in Equation (3.41) with corresponding t-ratios in parentheses. Thus, in
the search procedure based on individual equations, different t-ratios are the
basis for variable selection. Still, generally the coefficients with large absolute
         Vector Autoregressive and Vector Error Correction Models              125

t-ratios in the unrestricted model (3.28) are maintained in the restricted subset
VECM.
   It may be worth emphasizing that the same subset model selection procedure
may be applied if the cointegration relation contains estimated parameters. In
other words, it may be used as the second stage in a two-stage procedure in which
the cointegration matrix β is estimated first and then the estimated β matrix is
substituted for the true one in the second stage, where subset restrictions are
determined.


3.5 Model Checking
Many statistical tools exist for checking whether a given VAR model or VECM
provides an adequate representation of the DGP underlying the time series set
of interest. As in the univariate case, many of them are based on the residuals
of the final model. Some of them are applied to the residuals of individual
equations and others are based on the full residual vectors. Graphical tools for
model checking as well as recursive estimates and recursive residuals may also
be considered. Some of the tools will be presented in this section.
    If model defects such as residual autocorrelation or ARCH effects are de-
tected at the checking stage, this is usually regarded as an indication that the
model is a poor representation of the DGP. Efforts are then made to find a bet-
ter representation by adding other variables or lags to the model, by including
nonlinear terms or changing the functional form, by modifying the sampling
period, or getting other data.


3.5.1 Descriptive Analysis of the Residuals
A descriptive analysis of the model residuals is at least partly based on the
individual series. Therefore the graphs considered for checking univariate time
series are relevant here as well. For example, plots of standardized residual
series and squared residuals may be informative. Kernel density estimates may
also be of interest. In addition to the autocorrelation functions of the individual
series, the cross correlations are now also informative.
    As an example, consider the subset VECM (3.41) of the German interest
rate–inflation system. The standardized residuals, residual autocorrelations,
and cross correlations are plotted in Figure 3.2. The plot of the standardized
residuals indicates that some ARCH may be present in the residuals of the
interest rate equation (the first equation), or there may even be a change in the
structure of the relationship. Some relatively large residuals (in absolute value)
in the first half of the sample period may also create problems for nonnormality
tests. It may be useful to remember this
                                       √ point later. Although some residual au-
tocorrelations reach outside the ±2/ T bounds, they do not give rise to concern
Figure 3.2. Residuals and residual autocorrelations of subset VECM (3.41) of German
interest rate–inflation system (sample period: 1973Q2–1998Q4).

126
          Vector Autoregressive and Vector Error Correction Models                 127

because the “large” autocorrelations are at high lags. Formal tests for residual
autocorrelation will be discussed shortly.


3.5.2 Diagnostic Tests
A range of diagnostic tests is available for checking the model assumptions and
properties formally. Tests for autocorrelation, nonnormality, and conditional
heteroskedasticity are considered in this section.

Portmanteau test for autocorrelation. A formal test for residual autocorrela-
tion may be based on the portmanteau or adjusted portmanteau statistic. The
test checks the null hypothesis
          H0 : E(u t u t−i ) = 0,          i = 1, . . . , h > p
against the alternative that at least one autocovariance and, hence, one autocor-
relation is nonzero. The test statistic has the form
                    
                    h
          Qh = T             tr(Ĉ j Ĉ0−1 Ĉ j Ĉ0−1 ),
                       j=1

                −1
                   T               
where Ĉi = T         t=i+1 û t û t−i . Suppose the û t s are residuals from a stable
VAR( p) process. Then, under the null hypothesis, Q h has an approximate
χ 2 (K 2 (h − p))-distribution. More generally, the number of degrees of free-
dom is determined as the difference between the autocorrelations included
(K 2 h) and the number of estimated VAR coefficients. The latter number can
be smaller than K 2 p if subset restrictions are imposed. If the test is applied to
the residuals of a VECM, the parameters in the cointegration relations are not
counted. As in the univariate case, the limiting χ 2 -distribution is strictly valid
only if h → ∞ at a suitable rate with growing sample size [see Ahn (1988)].
A modified statistic with potentially superior small sample properties is the
adjusted portmanteau statistic
                       
                       h
                              1
          Q ∗h = T 2              tr(Ĉ j Ĉ0−1 Ĉ j Ĉ0−1 ),
                        j=1
                            T − j

which is similar to the Ljung–Box statistic for univariate series.
   In practice, the choice of h may be critical for the test result. If h is chosen too
small, the χ 2 -approximation to the null distribution may be very poor, whereas
a large h may result in a loss of power. Therefore, in applying the test it is a
good idea to try different values of h.
   Another test for autocorrelation may be obtained by overfitting the VAR
order; that is, a model with order p ∗ > p is fitted and the significance of the
additional lags is checked by a χ 2 - or F-version of an LR or Wald test for
128       Helmut Lütkepohl

parameter restrictions. Yet another possibility to test for residual autocorrelation
is obtained by fitting a VAR model to the residuals. This variant is sometimes
referred to as Breusch–Godfrey test. It is described next.

Breusch–Godfrey test for autocorrelation. The Breusch–Godfrey test [see,
e.g., Godfrey (1988)] for hth order residual autocorrelation assumes a model
          u t = B1 u t−1 + · · · + Bh u t−h + errort
and checks
          H0 : B1 = · · · = Bh = 0 versus H1 : B1 = 0 or · · · or Bh = 0.
For this purpose, the auxiliary model
          û t = A1 yt−1 + · · · + A p yt− p + CDt
                +B1 û t−1 + · · · + Bh û t−h + et                               (3.42)
or the analogous VECM form
          û t = α β̂  yt−1 + 1 yt−1 + · · · +  p−1 yt− p+1
                +CDt + B1 û t−1 + · · · + Bh û t−h + et                         (3.43)
is considered if there are no exogenous variables and the original models are
set up in reduced form without restrictions on the A j s or  j s. The models
are estimated by OLS. Notice that the û t s with t ≤ 0 are replaced by zero in
estimating (3.42) or (3.43).
    Denoting the estimated residuals by eˆt (t = 1, . . . , T ), we obtain the follow-
ing residual covariance matrix estimator from the auxiliary models:
                 T
          e = 1
                    êt êt .
               T t=1
Moreover, if we reestimate the relevant auxiliary model without the lagged
residuals û t−i (i = 1, . . . , h), that is, impose the restrictions B1 = · · · = Bh = 0
and denote the resulting residuals by eˆtR , the corresponding covariance matrix
estimator is
                 T
          R = 1
          
                             
                    ê R ê R .
               T t=1 t t
The relevant LM statistic is then
                           (        )
         LMh = T K − tr      e 
                                  −1 .
                                      R

It has an asymptotic χ (h K )-distribution under standard assumptions. A vari-
                         2        2

ant of the test statistic that adjusts the “likelihood ratio” in such a way that
its distribution under H0 can be approximated well by an F-distribution was
           Vector Autoregressive and Vector Error Correction Models                             129

recommended by Edgerton & Shukur (1999). More precisely, they found that,
in small samples, the following statistic worked well for stationary full VAR
processes without subset restrictions:
                                  
                        R | 1/s
                      |                Ns − q
         FLMh =                   −1 ·
                       
                      | e |              Km

with
                                          1/2
                       K 2m2 − 4                            1
            s=                                    ,   q=      K m − 1,
                      K 2 + m2 − 5                          2
                          1
           N = T − n − m − (K − m + 1),
                          2
where n is the number of regressors in each equation of the original system
and m = K h is the number of additional regressors in the auxiliary system.
The statistic is used together with critical values from an F(h K 2 , N s − q)-
distribution.
   The Brensch–Godfrey LM test is useful for testing for low order resid-
ual autocorrelation (small h), whereas a portmanteau test is preferable for
larger h.

Tests for nonnormality. Multivariate tests for nonnormality can be constructed
by generalizing the Lomnicki–Jarque–Bera tests described in Chapter 2. The
idea is to transform the joint normal distribution in order to obtain independent
components first and then apply the tests described for univariate series to the
independent components. Given the residuals û t (t = 1, . . . , T ) of an estimated
VAR process or VECM, the residual covariance matrix is therefore estimated
as
                         
                         T
           u = T −1
                               (û t − û)(û t − û) ,
                          t=1

and the square root matrix  u is computed. Notice that mean adjusting the esti-
                                     1/2

mated residuals is unnecessary if intercepts are included in the model equations.
The square root u1/2 is obtained by computing the eigenvalues λ1 , . . . , λ K of
u and the corresponding orthonormal matrix of eigenvectors Q such that 
                                                                                               u =
Q"Q  with " = diag(λ1 , . . . , λ K ). Then               u1/2 = Qdiag(λ1/2     , . . . , λ
                                                                                              1/2  
                                                                                 1             K )Q .
The tests for nonnormality can be based on the skewness and kurtosis of the
                                                             u−1/2 (û t − û):
standardized residuals û st = (û s1t , . . . , û sKt ) = 

                                                                   
                                                                   T
           b1 = (b11 , . . . , b1K )       with      b1k = T −1         (û skt )3
                                                                   t=1
130       Helmut Lütkepohl

and
                                                              
                                                              T
          b2 = (b21 , . . . , b2K )    with     b2k = T −1         (û skt )4 .
                                                              t=1

Possible test statistics are

          s32 = T b1 b1 /6

and, if we define the (K × 1) vector 3 K = (3, . . . , 3) ,

          s42 = T (b2 − 3 K ) (b2 − 3 K )/24.

Both statistics have asymptotic χ 2 (K )-distributions under the null hypothesis
of normality. Moreover, under the null, LJB K = s32 + s42 has a χ 2 (2K ) limiting
distribution.
    The standardization of the residuals used here was proposed by Doornik &
Hansen (1994). Lütkepohl (1991, Chapter 4) presents an alternative way of stan-
dardizing them based on a Choleski decomposition of the residual covariance
matrix. Suppose P     is a lower triangular matrix with positive diagonal such that
        
P P = u . Then the standardized residuals are defined as û st = P        −1 (û t − û).
                                                                                       ¯
Computing the third and fourth moments as in the foregoing gives statistics
 2
s3L    2
    , s4L , and L J B KL = s3L
                             2
                               + s4L
                                   2
                                      with asymptotic χ 2 (K )-, χ 2 (K )- and χ 2 (2K )-
distributions, respectively, under normality. The latter approach was criticized
by Doornik & Hansen (1994) on the grounds that the test result may depend on
the ordering of the variables because the normalization of the residuals is not in-
variant to the ordering of the variables. Obviously, whatever the normalization
procedure, the resulting multivariate test statistic reduces to the Lomnicki–
Jarque–Bera statistic for the univariate case. To get a better picture of possible
deviations from normality of individual equation errors, the univariate tests may
also be applied to the individual residual series separately.

ARCH–LM test. A multivariate extension of the univariate ARCH-LM test
may be constructed as follows. Consider the multivariate regression model

          vech(û t û t ) = β0 + B1 vech(û t−1 û t−1 )
                            + · · · + Bq vech(û t−q û t−q ) + errort ,          (3.44)

where vech is the column-stacking operator for symmetric matrices that
stacks the columns from the main diagonal downwards, β0 is 12 K (K + 1)-
dimensional, and the B j s are ( 12 K (K + 1) × 12 K (K + 1)) coefficient matrices
( j = 1, . . . , q). There is no ARCH in the residuals if all the B j matrices are
zero. Therefore, an ARCH test is based on the pair of hypotheses

          H0 : B1 = · · · = Bq = 0 versus H1 : B1 = 0 or · · · or Bq = 0,
            Vector Autoregressive and Vector Error Correction Models                           131

Table 3.5. Diagnostics for subset VECM model (3.41) for German interest rate and
inflation

Test                 Q 24       Q ∗24      LM2       LM4        LJB2      LJB2L     MARCH LM (2)
Test statistic       77.2       89.3       6.62      10.3       2.44      2.76      36.9
Appr. distribution   χ 2 (86)   χ 2 (86)   χ 2 (8)   χ 2 (16)   χ 2 (4)   χ 2 (4)   χ 2 (18)
p-value              0.74       0.38       0.58      0.85       0.66      0.60      0.005



  which may be checked by the multivariate LM statistic
                                   1
            MARCHLM (q) =            TK(K + 1)Rm2 ,
                                   2
  where
                                2          ˆ −1
             Rm2 = 1 −                tr(
                                         ˆ  0 ),
                            K (K + 1)

  ˆ is the residual covariance matrix of the 1 K (K + 1)-dimensional regression
                                               2
  model (3.44), and   ˆ 0 is the corresponding matrix with q = 0. The statistic is
  similar to the one described by Doornik & Hendry (1997, Section 10.9.2.4) and
  may be compared with critical values from a χ 2 (q K 2 (K + 1)2 /4)-distribution.
  Alternatively, an F-version based on MARCH L M (q)/[q K 2 (K + 1)2 /4] may be
  used.

  Example. As an example we consider again the German interest rate–inflation
  system. Some diagnostic statistics for the subset VECM (3.41) are shown in
  Table 3.5. The only test that rejects its respective null hypothesis is the multi-
  variate ARCH test. Clearly, this is not surprising given the way the residuals
  of the Rt equation look like (see Figure 3.2). One can also analyze the sources
  of the possible problem in more detail by considering the two residual series
  individually and performing univariate ARCH tests (see also Chapter 2). Of
  course, a model rejected by one of the diagnostic tests is not fully satisfactory.
  However, for some purposes it may still be sufficient. For example, if the linear
  dependencies are of major concern, the remaining ARCH in the residual series
  may not be a big problem. For other purposes, it may be desirable, however, to
  model the conditional variances properly as well. This can be done using the
  methods presented in Chapter 5.


  3.5.3 Stability Analysis
  The time invariance of a model may be checked, for example, by considering
  recursively estimated quantities. For this purpose, the model is estimated on
132       Helmut Lütkepohl

the basis of the first τ observations for τ = T1 , . . . , T . Here T1 is such that the
degrees of freedom necessary for estimation are available.
    Recursive estimation can be done efficiently by using updating formulas
if, for example, a full VAR model is considered. However, even more com-
plicated estimation procedures can be performed quickly a few hundred times
on a modern computer. Therefore, recursive estimation does not pose serious
problems as long as no iterative or simulation-based estimation procedures are
necessary. For instance, using bootstrap methods for each sample size may be
time-consuming.
    Plotting the recursive estimates together with their standard errors or con-
fidence intervals for τ = T1 , . . . , T can give useful information on possible
structural breaks. As an example, some recursive estimates of the subset VECM
(3.41) for the German interest rate–inflation system are shown in Figure 3.3.
Obviously, they are a bit erratic at the sample beginning owing to the small sam-
ple size on which they are based. Also, the larger confidence intervals around the
parameter estimates at the beginning reflect the greater estimation uncertainty.
Taking this uncertainty into account, one finds that the recursive estimates do
not indicate parameter instability. One may take note, however, of the slight shift
in the seasonal dummy variables of the inflation equation in the early 1990s. It
may indicate an effect of the German reunification, which happened in 1990,
and should be kept in mind in further stability checks.
    Formal tests of parameter constancy are also available for vector models. For
instance, CUSUM and CUSUM-of-squares tests as well as Chow tests may be
used in some situations. Specifically for VECMs, tests based on the recursively
computed eigenvalues used in the RR regression estimation may be considered.
These tests will be presented in the next section.

CUSUM tests. CUSUM and CUSUM-of-squares tests were described in Sec-
tion 2.6 of Chapter 2 for single-equation models. These tests can also be applied
to the individual equations for vector models. In some cases this will lead to
formally valid tests. For example, in a fully unrestricted VAR model with station-
ary variables, single-equation OLS estimation is efficient and the CUSUM-type
tests may be applied. Also, for a VECM, where the cointegration relations are
known as in the German interest rate-inflation example, single-equation esti-
mation can be applied without problems even if there are restrictions for the
parameters as in (3.41). In that case, the asymptotic efficiency of the estimators
can generally be improved by using systems estimation methods. For the subset
VECM (3.41), the CUSUM and CUSUM-of-squares plots are shown in Figure
3.4. They are all well inside the uncritical region and therefore do not give rise
to concern about the stability of the model.
   Generally, the critical bounds will not have a theoretical justification for
vector models. For example, if some of the variables are integrated and appear
in undifferenced form, or if estimated cointegration relations are present, the
validity of the CUSUM-type tests is not clear. In that case they may still be useful
         Vector Autoregressive and Vector Error Correction Models           133




Figure 3.3. Recursive estimates of subset VECM (3.41) for German interest rate–
inflation system with recursive 95% confidence intervals (sample period: 1973Q2–
1998Q4).
Figure 3.4. CUSUM and CUSUM-of-squares tests of subset VECM (3.41) for German
interest rate–inflation system with 5% level critical bounds (sample period: 1973Q2–
1998Q4).
         Vector Autoregressive and Vector Error Correction Models                                   135

descriptive tools for checking model stability if single-equation estimation
leads to sensible estimates. The latter condition may be violated for structural
form equations. [See Krämer & Sonnberger (1986), Krämer et al. (1988), and
Ploberger & Krämer (1992) for further discussion of CUSUM-type tests.]

Chow tests for structural change. As is the case for univariate models, differ-
ent types of Chow tests are available for vector models [see Doornik & Hendry
(1997)]. We present sample-split, break-point, and forecast tests. On the as-
sumption that a structural break may have occurred in period TB , the model
under consideration is estimated from the full sample of T observations and
from the first T1 and the last T2 observations, where T1 < TB and T2 ≤ T − TB .
                                                 (1)      (2)
The resulting residuals are denoted by û t , û t and û t , respectively. Moreover,
                     
                     T
         u = T −1
                           û t û t ,
                      t=1

                                                                                           
                                           
                                           T1                      
                                                                   T
         1,2 = (T1 + T2 )−1
                                                 û t û t +                 û t û t       ,
                                            t=1                  t=T −T2 +1


                         
                         T1                                  
                                                             T
         (1,2) = T1−1
                                û t û t + T2−1                     û t û t ,
                         t=1                             t=T −T2 +1


                       
                       T1
                                 (1) (1)
         (1) = T1−1
                             û t û t
                       t=1

and
                            
                            T
                                            (2) (2)
         (2) = T2−1
                                          û t û t .
                       t=T −T2 +1

With this notation, the sample-split (SS) test statistic can be written as
                                  1,2 − log det{(T1 + T2 )−1 (T1 
         λSS = (T1 + T2 )[log det                                (1) + T2 
                                                                            (2) )}],

and the break-point (BP) statistic is
                                  (1,2) − T1 log det 
         λBP = (T1 + T2 ) log det                    (1) − T2 log det 
                                                                        (2) .

If the model is time invariant, these statistics have approximate χ 2 -distribu-
tions. The degrees of freedom are given by the number of restrictions imposed
by assuming a constant coefficient model for the full sample period; that is, the
degrees of freedom are the difference between the sum of the number of free
coefficients estimated in the first and last subperiods and the number of free
coefficients in the full sample model. The parameter constancy hypothesis is
rejected if the value of the test statistics is large. The statistic λSS is used for a
136       Helmut Lütkepohl

test that assumes a constant white noise covariance matrix and λBP tests against
a changing u in addition [see Hansen (2003) for the asymptotic theory].
    To illustrate the determination of the degrees of freedom for the tests,
consider first a K -dimensional stationary VAR( p) model with constant term
yt = ν + A1 yt−1 + · · · + A p yt− p + u t . In this case the number of parameters
is the same in both subperiods. Hence, counting all the VAR and deterministic
parameters shows that λSS has to be used with a χ 2 ( pK 2 + K )-distribution,
whereas λBP has to be used with a χ 2 ( pK 2 + K + K (K + 1)/2)-distribution;
that is, the K (K + 1)/2 possibly different parameters of the white noise covari-
ance matrix also have to be counted.
    For a K -dimensional VECM, yt = ν + αβ  yt−1 + 1 yt−1 + · · · +
 p−1 yt− p+1 + u t , with cointegrating rank r , the situation is slightly more
complicated. Now, counting all parameters in the model apart from those in
u gives 2K r + ( p − 1)K 2 + K . The degrees of freedom for the test based on
λSS are, however, 2K r − r 2 + ( p − 1)K 2 + K , where r 2 is subtracted because
                            
normalizing β  = [Ir : β(K                       2
                               −r ) ] shows that r of its parameters are fixed through-
out the sample [see Hansen (2003)]. If in addition the cointegration matrix is
held constant throughout the sample period, the degrees of freedom reduce to
K r + ( p − 1)K 2 + K . For λBP we again have to add K (K + 1)/2 white noise
covariance parameters to get the degrees of freedom.
    Various generalizations of these tests are possible. For example, one could
test for more than one break or one could check constancy of a subset of param-
eters keeping the remaining subsets fixed. Moreover, there may be deterministic
terms in the cointegration relations, or the number of cointegration relations
may change in different subperiods. These generalizations are also treated by
Hansen (2003).
    On the basis of approximations proposed by Rao (1973), Doornik & Hendry
(1997) have suggested the following multivariate version of the Chow forecast
test statistic for the situation in which a break point at time TB is of interest:
                    1 − (1 − Rr2 )1/s N s − q
          λCF =                      ·        ≈ F(K k ∗ , N s − q),
                      (1 − Rr2 )1/s    K k∗
where
                                    1/2
                     K 2 k ∗2 − 4                    K k∗
           s=                               ,   q=        − 1,
                    K 2 + k ∗2 − 5                    2
          N = T − k1 − k ∗ − (K − k ∗ + 1)/2
with k1 being the number of regressors in the restricted, time-invariant model;
k ∗ the number of forecast periods considered by the test, that is, k ∗ = T − T1 ;
and
                     K
                      T1     (1) |(|
                                     u |)−1 .
          Rr = 1 −
           2
                            |
                      T
          Vector Autoregressive and Vector Error Correction Models                     137

Table 3.6. Chow tests for subset VECM model (3.41) for German interest rate and
inflation

Break point          Test          Test value          p-value          Bootstrap p-value
1982Q4               λSS            31.6               0.14             0.57
                     λBP           186.7               0.00             0.08

1990Q3               λSS            35.6               0.06             0.39
                     λBP           168.0               0.00             0.68
Note: Bootstrap p-values based on 2000 replications; sample period: 1973Q2–1998Q4 (plus pre-
sample values).


Again the null hypothesis of parameter constancy is rejected for large values of
λCF .
    As mentioned in Chapter 2 in the context of univariate analysis, Candelon
& Lütkepohl (2001) have proposed using bootstrap versions of the Chow tests
to improve their small sample properties. The bootstrap is set up as in the
univariate case with appropriate modifications to allow for residual vectors
rather than univariate residual series.
    We again use the German interest rate–inflation example VECM (3.41) to
illustrate the tests. In Table 3.6 results for two possible break dates are presented.
The first date corresponds to a period in which the government changed in
Germany, and the second one corresponds to the German unification. In each
case the starting point T − T2 + 1 of the second sample period is chosen such
that the presample values do not overlap with data up to TB . In other words,
T − T2 + 1 = TB + 4 because there are three lagged differences and, hence,
four lags of the levels variables in the model (3.41). The results illustrate several
properties of the tests. First of all, the p-values based on the approximate
χ 2 - distributions typically differ considerably from the bootstrap p-values, the
latter being often substantially larger. This illustrates the finding of Candelon
& Lütkepohl (2001) that the approximate χ 2 -distributions are often very poor
approximations and lead to substantially higher rejection rates than the bootstrap
tests. On the basis of the approximate p-values, the λBP test rejects stability for
both possible break dates, whereas one would clearly not reject stability in
1990Q3 based on the bootstrap version of the test. The results in Table 3.6
also show that the tests do not always lead to the same decision. Using only
the approximate distributions, one would not reject stability in 1982Q4 on the
basis of the sample-split test, whereas a rejection is clear on the basis of the
break-point test. Therefore, applying different tests may give additional insights
in practice.
    For the present example there is, however, a problem related to the inter-
pretation of the Chow tests. In Table 3.5 we have seen that there may be some
remaining ARCH and, hence, potential volatility clustering in the residuals of
138      Helmut Lütkepohl

our model. Recall that Chow tests compare the variances for different time pe-
riods to decide on parameter constancy. Therefore, a volatility cluster in one
of the subperiods may lead to the rejection of the constant parameter hypothe-
sis not because the model parameters actually vary but because of the ARCH
structure that has not been accounted for. This problem is just a special case
of the more general difficulty that, if model defects are diagnosed, the actual
cause of significant test results is not always obvious.
    As discussed for the univariate case in Chapter 2, Section 2.6.3, the Chow
tests may be performed repeatedly for a range of potential break points TB , and
the results may be plotted. If the test decision is based on the maximum of the
test statistics, we are effectively considering a test based on the test statistic
          sup λ∗∗ ,
         TB ∈T

where ‘**’ stands for any of the three tests and T ⊂ {1, . . . , T } is the set of pe-
riods for which the test statistic is determined. The distributions of test statistics
of this kind are discussed by Andrews (1993), Andrews & Ploberger (1994),
and Hansen (1997).

Recursive eigenvalues. For VECMs with cointegrated variables, Hansen &
Johansen (1999) have proposed recursive statistics for stability analysis. For
                                                                     (τ )
instance, recursive eigenvalues from (3.16) may be considered. Let λi be the
ith largest eigenvalue based on sample moments from the first τ observations
only. If the model is time invariant, approximate 95% confidence intervals for
                                                 (τ )         (τ )
the nonzero true eigenvalues corresponding to λ1 , . . . , λr are
                         (τ )                               (τ )
                                                                          
                         λi                               λi
             (τ )        (τ )
                                          , (τ )         (τ )
                                                                            ,
            λi + (1 − λi ) exp(1.96σ̂ii ) λi + (1 − λi ) exp(−1.96σ̂ii )
where σ̂ii2 is 2/T times the i + (i − 1)[r + K ( p − 1)]-th diagonal element of
the matrix ϒ + ϒ  obtained by defining
              ˜ −1 ⊗ 
         ϒ = (      ˜ −1 )(I − A ⊗ A)−1 .

Here
                                                                
             β̃  α̃ + I β̃  ˜ 1 · · · β̃  ˜ p−2 β̃  ˜ p−1
            α̃            ˜ 1 · · · ˜ p−2 ˜ p−1 
                                                                
                   0        I                 0           0 
         A=                                                     ,
                   ..             .            ..          .. 
                    .               . .         .           . 
                       0        0    ···      I         0

and 
    ˜ can be determined from

             ˜ +
         ˜ = AA  ˜ E,
          Vector Autoregressive and Vector Error Correction Models                        139

where  ˜ E is the usual estimator of the covariance matrix of (u t β, u t , 0, . . . , 0) .
Plotting the confidence intervals for consecutive sample sizes τ = T1 , . . . , T
can reveal structural breaks in the DGP. Of course, here the smallest sample
size T1 has to be large enough to permit a meaningful estimation to be made.
   In Hansen & Johansen (1999), formal tests are also proposed for parameter
change. For stating them we use the following notation:
                            (τ )
                                       
             (τ )          λi
           ξi = log               (τ )
                         1 − λi
and
                   (τ )       τ (τ )   (T )
          T (ξi ) =            |(ξ − ξi )/σ̂ii |.
                              T i
            (τ )
Thus, T (ξi ) compares the ith eigenvalue obtained from the full sample to the
one estimated from the first τ observations only. Hansen & Johansen (1999)
have shown that the maximum over all τ ,
                              (τ )
            sup T (ξi ),
           T1 ≤τ ≤T

has a limiting distribution that depends on a Brownian bridge and is tabulated
by Ploberger, Krämer & Kontrus (1989). Clearly, stability is rejected if the
difference between the eigenvalues based on the subsamples and the full sample
                              (τ )
gets too large. Thus, if T (ξi ) exceeds the critical value, stability of the model is
rejected.
   Alternatively, a test may be based on the sum of the r largest recursive
eigenvalues by considering the statistics
                                 *                      *
               r
                              τ    *  r                    *
                     (τ )          *         (τ ) (T )      *
          T        ξi       = *           (ξi − ξi ) /σ̂1−r * .
               i=1
                             T     *  i=1
                                                            *

Here σ̂1−r is an estimator of the standard deviation of the difference
          
          r
                     (τ )       (T )
                   (ξi      − ξi ),
           i=1

which may be based on the relevant part of the matrix ϒ + ϒ  . Again, Hansen
& Johansen (1999) have shown that the limiting distribution of
                            
                   r
                        (τ )
         sup T        ξi
           T1 ≤τ ≤T           i=1

is free of unknown nuisance parameters under the stability hypothesis. Thus,
we may again check if the sup exceeds the critical value, in which case the
stability null hypothesis is rejected.
140      Helmut Lütkepohl




Figure 3.5. Recursive eigenvalue analysis of VECM (3.22) for the German interest
rate–inflation system (with critical value for a 5% test level).


    It may be worth noting that various versions of these tests make sense as
stability tests. For example, if the short-term dynamics are assumed to be stable
and a test of parameter change in the long-run part only is desired, one may
first concentrate on the short-term parameters based on the full sample and
then one may focus on recursive estimation of α and β. In that case, the 
parameters are estimated as in (3.14) based on the full sample, and the M matrix
in (3.15) is hence also based on all observations. In addition, Hansen & Johansen
(1999) derived tests that may be used to test stability of the cointegration space
separately.

Example. For illustration we use the unrestricted VECM (3.22) for the German
interest rate–inflation data. Because the cointegrating rank r = 1, there is one
nonzero eigenvalue. Confidence intervals for that eigenvalue are depicted in
                                               (τ )
Figure 3.5. Moreover, the tau statistic T (ξ1 ) is plotted in the figure together
with the critical value for a 5% level test. The recursive eigenvalue appears to be
                                     (τ )
fairly stable, and the values of T (ξ1 ) are considerably smaller than the critical
value. Thus, these diagnostic statistics do not indicate instability of the system.


3.6 Forecasting VAR Processes and VECMs
So far in this chapter we have focused on constructing an adequate model for
the DGP of a system of variables. Once such a model has been found, it may be
used for forecasting as well as economic analysis. In this section, forecasting
VAR processes will be discussed first. In Section 3.7, the concept of Granger-
causality will be introduced as one tool for economic analysis. The concept
is based on forecast performance and has received considerable attention in
the theoretical and empirical literature. Other tools for analyzing VARs and
VECMs will be discussed in the next chapter.
         Vector Autoregressive and Vector Error Correction Models                     141

3.6.1 Known Processes
Forecasting vector processes is completely analogous to forecasting univariate
processes, as discussed in Chapter 2. The levels VAR form (3.1) is particu-
larly convenient to use in forecasting the variables yt . We will again initially
ignore deterministic terms and exogenous variables. Moreover, it is assumed
first that the process parameters are known. Suppose the u t s are generated by
an independent white noise process. In that case the minimum mean-squared
error (MSE) forecast is the conditional expectation. For example, at forecast
origin T , an h-step ahead forecast is obtained recursively as
         yT +h|T = A1 yT +h−1|T + · · · + A p yT +h− p|T ,                        (3.45)
where yT + j|T = yT + j for j ≤ 0. The corresponding forecast error is
         yT +h − yT +h|T = u T +h + %1 u T +h−1 + · · · + %h−1 u T +1 ,           (3.46)
where it can be shown by successive substitution that
                
                s
         %s =         %s− j A j ,   s = 1, 2, . . . ,                             (3.47)
                j=1

with %0 = I K and A j = 0 for j > p [see Lütkepohl (1991, Sec. 11.3)]. As
in the univariate case, u t is the 1-step forecast error in period t − 1, and the
forecasts are unbiased; that is, the forecast errors have expectation 0. The MSE
matrix of an h-step forecast is
                                                                 
                                                                 h−1
          y (h) = E{(yT +h − yT +h|T )(yT +h − yT +h|T ) } =         % j u %j .
                                                                 j=0

                                                                                  (3.48)
If u t is uncorrelated white noise and is not necessarily independent over time,
the forecasts obtained via a recursion as in (3.45) are just best linear forecasts.
    Also analogous to the univariate case, the forecast MSEs  y (h) for a
stationary process converge tothe unconditional covariance matrix of yt ,
E[(yt − E(yt ))(yt − E(yt )) ] = ∞              
                                     j=0 % j u % j . Thus, the forecast uncertainty
as reflected in the MSEs is bounded even for long-term forecasts for station-
ary processes. In contrast, for integrated processes the MSEs are generally
unbounded as the horizon h goes to infinity. Thus, the forecast uncertainty in-
creases without bounds for forecasts of the distant future. This does not rule
out, however, that forecasts of some components or linear combinations of
I(1) variables have bounded MSEs. In fact, forecasts of cointegration relations
have bounded MSEs even for horizons approaching infinity because they are
forecasts for stationary variables.
    The corresponding forecast intervals reflect these properties as well. If the
process yt is Gaussian, that is, u t ∼ iid N (0, u ), the forecast errors are also
142      Helmut Lütkepohl

multivariate normal. Using this result, the following forecast intervals can be
established:
         [yk,T +h|T − c1−γ /2 σk (h), yk,T +h|T + c1−γ /2 σk (h)].               (3.49)
Here c1−γ /2 is the (1 − γ2 )100 percentage point of the standard normal distri-
bution, yk,T +h|T denotes the kth component of yT +h|T , and σk (h) denotes the
square root of the kth diagonal element of  y (h), that is, σk (h) is the standard
deviation of the h-step forecast error for the kth component of yt . Obviously, if
σk (h) is unbounded for h → ∞, the same is true for the length of the interval
in (3.49).
    Of course, if the DGP is modeled as a VECM, it may be rewritten in VAR
form for forecasting. Alternatively, equivalent forecasting equations can be
obtained directly from the VECM.
    If a variable enters the system in differenced form only, it is, of course,
still possible to generate forecasts of the levels. This can be done by using
the relation between first differences and levels mentioned in the univariate
case (see Chapter 2). More precisely, suppose that ykt enters as ykt only.
Then yk,T +h = yk,T + yk,T +1 + · · · + yk,T +h , and thus an h-step forecast
yk,T +h|T = yk,T + yk,T +1|T + · · · + yk,T +h|T may be obtained via forecast-
ing the differences. The properties of the forecast errors including their MSEs
follow from the joint distribution of the forecasts yk,T +1|T , . . . , yk,T +h|T
[see Lütkepohl (1991)].
    If deterministic or exogenous variables are present, or both, it is straightfor-
ward to extend the formula (3.45) to allow for such terms. Because the future
development of deterministic variables is known by definition of the term “de-
terministic,” they are particularly easy to handle. They may simply be added
to the stochastic part. Exogenous variables may be more difficult to deal with
in some respects. They are also easy to handle if their future development is
known. Otherwise they have to be predicted along with the endogenous vari-
ables, in which case a model for their DGP is called for. Alternatively, if the
exogenous variables are under full control of a policy maker, it may be desirable
to forecast the endogenous variables conditionally on a specific future path of
the exogenous variables to check the future implications of their specific values.
Suppose the following reduced form model is given:
         yt = A1 yt−1 + · · · + A pyt− p + CDt + Bz t + u t .
As usual, Dt summarizes the deterministic terms and z t represents exogenous
variables. In that case, one may consider conditional expectations
         E(yT +h |yT , yT −1 , . . . , z T +h , z T +h−1 , . . .)
          = A1 E(yT +h−1 | · · ·) + · · · + A p E(yT +h− p | · · ·) + CDT +h + Bz T +h .
The forecast errors and MSEs will be unaffected if there is no uncertainty in
the future values of the exogenous variables.
         Vector Autoregressive and Vector Error Correction Models                143

3.6.2 Estimated Processes
So far we have worked under the assumption that the DGP is known, in-
cluding its parameters. Of course, this assumption is unrealistic in practice.
Therefore we will now consider the implications of using estimated VARs
for the forecast precision. Denoting the optimal h-step forecast by yT +h|T as
in (3.45) and furnishing its counterpart based on estimated coefficients by a
hat give

         ŷT +h|T = Â1 ŷT +h−1|T + · · · + Â p ŷT +h− p|T ,               (3.50)

where ŷT + j|T = yT + j for j ≤ 0 and the Âi s (i = 1, . . . , p) are estimated pa-
rameters. The corresponding forecast error is

          yT +h − ŷT +h|T = [yT +h − yT +h|T ] + [yT +h|T − ŷT +h|T ]
                             
                             h−1
                                                                              (3.51)
                           =     % j u T +h− j + [yT +h|T − ŷT +h|T ].
                                j=0

The first term on the right-hand side involves future residuals u t with t > T
only, whereas the second term is determined by present and past variables
if only past variables have been used for estimation. It follows that the two
terms are independent if u t is independent white noise. Moreover, under
standard assumptions, the difference yT +h|T − ŷT +h|T is small in probability
as the sample size used for estimation gets large and the VAR coefficients
are estimated more and more precisely. Hence, the forecast error covariance
matrix is
           ŷ (h) = E{(yT +h − ŷT +h|T )(yT +h − ŷT +h|T ) }
                                                                              (3.52)
                   =  y (h) + o(1).

Here the quantity o(1) denotes a term that tends to zero with increasing sample
size. Thus, as far as the forecast MSE is concerned, the estimation uncertainty
may be ignored in large samples. The same holds for setting up asymptotic
forecast intervals. In small samples, it may still be preferable to include a
correction term. Clearly, such a term will depend on the precision of the esti-
mators. Hence, if precise forecasts are desired, it is a good strategy to look for
precise parameter estimators. Further details on possible correction terms may
be found in Lütkepohl (1991, Chapter 3) for the stationary case and in Reimers
(1991), Engle & Yoo (1987), and Basu & Sen Roy (1987) for nonstationary
processes.
   Again, extensions to processes with deterministic terms and exogenous
variables are straightforward. The problems associated with the use of esti-
mated rather than known parameters are analogous to those discussed for the
VAR parameters. Of course, correction factors for forecast MSEs and forecast
144      Helmut Lütkepohl

intervals may become more complicated, depending on the terms to be included
in addition to the VAR part.

Example. To give an example we have reestimated the subset VECM (3.41)
using only data up to the fourth quarter of 1994, and we use that model to
predict the interest rate and inflation variables for the next 16 quarters after
the sample end. The resulting forecasts are presented in Figure 3.6. The 95%
forecast intervals, which are also shown in the figure, do not take into account
the estimation uncertainty. Notice that JMulTi does not provide a correction
of forecast intervals for parameter estimation uncertainty if VECMs are used.
In other words, the forecast intervals shown in Figure 3.6 are smaller than more
precise forecast intervals based on an asymptotic approximation that takes into
account estimation uncertainty. Nevertheless all of the actually observed values
for the years 1995–98 are within the forecast intervals. To see this fact a little
better, the forecast period is magnified in the lower part of Figure 3.6. That
all observed values are within the approximate 95% forecast intervals may be
viewed as an additional confirmation of the model adequacy for forecasting
purposes.
    In Figure 3.6 the two time series are plotted in addition to the forecasts.
In these plots the time series variability can be compared with the size of the
forecast intervals, and it becomes apparent that the forecast intervals reflect
the overall variability of the series, as one would expect. Clearly, the intrinsic
variability of a series must be taken into account in assessing the uncertainty of
a forecast. Hence, it is not surprising that, especially for longer term forecasts,
the overall series variability is reflected in the forecast intervals.

3.7 Granger-Causality Analysis

3.7.1 The Concept
Granger (1969) has introduced a causality concept that has become quite popular
in the econometrics literature. He defines a variable y2t to be causal for a time
series variable y1t if the former helps to improve the forecasts of the latter.
Denoting by y1,t+h|t the optimal h-step forecast of y1t at origin t based on the
set of all the relevant information in the universe t , we may define y2t to be
Granger-noncausal for y1t if and only if
         y1,t+h|t = y1,t+h|t \{y2,s |s≤t} ,   h = 1, 2, . . . .            (3.53)
The symbol A \ B denotes the set of all elements of a set A not contained in the
set B. Thus, in (3.53), y2t is not causal for y1t if removing the past of y2t from
the information set does not change the optimal forecast for y1t at any forecast
horizon. In turn, y2t is Granger-causal for y1t if (3.53) does not hold for at least
one h, and thus a better forecast of y1t is obtained for some forecast horizon by
including the past of y2t in the information set. If t contains past values of y1
Figure 3.6. Forecasts of the German interest rate–inflation system with 95% forecast
intervals based on subset VECM (3.41); estimation period: 1973Q2–1994Q4.

                                                                                145
146       Helmut Lütkepohl

and y2 only, that is, t = {(y1,s , y2,s ) |s ≤ t}, and (y1t , y2t ) is generated by a
bivariate VAR( p) process of the form
                   p                         
           y1t            α11,i α12,i       y1,t−i
                =                                    + ut ,                       (3.54)
           y2t            α21,i α22,i       y2,t−i
                       i=1

then (3.53) can be shown to be equivalent to
          α12,i = 0,         i = 1, 2, . . . , p.                                (3.55)
In other words, y2t is not Granger-causal for y1t if its lags do not appear in the
y1t equation. Analogously, y1t is not Granger-causal for y2t if the lags of the
former variable do not enter the second equation.
   It is perhaps worth mentioning that Granger-causality can also be investi-
gated in the framework of the VECM. Writing that model for the presently
considered bivariate case as
                                 
                                     p−1                        
            y1t            y              γ11,i γ12,i     y1,t−i
                   = αβ  1,t−1 +                                    + ut ,
            y2t            y2,t−1         γ21,i γ22,i     y2,t−i
                                            i=1

one can see that (3.55) is equivalent to γ12,i = 0 (i = 1, . . . , p − 1) and the
element in the upper right-hand corner of αβ  is also zero. Of course, in a
bivariate situation the cointegrating rank r can only be 0, 1, or 2, where r = 1
is the only instance that may involve genuine cointegration. In that case, α and
β are (2 × 1) vectors and
                                                
                   α1                  α1 β1 α1 β2
          αβ  =        [β1 , β2 ] =                 .
                   α2                  α2 β1 α2 β2
Thus, in this case, α1 β2 = 0 needs to be checked in addition to γ12,i = 0 (i =
1, . . . , p − 1) [see also Mosconi & Giannini (1992)]. Note that if r = 1, there
must be Granger-causality in at least one direction (from y2t to y1t or from y1t
to y2t , or both) because α and β both have rank one and, hence, cannot be zero.
    Because economic systems of interest typically consist of more than two
relevant variables, it is desirable to extend the concept of Granger-causality
to such systems. Different possible extensions have been considered in the
literature [see, e.g., Lütkepohl (1993), and Dufour & Renault (1998)]. One
approach partitions the vector of all variables, yt , into two subvectors so that
yt = (y1t , y2t ) . Then the definition in (3.53) may be used directly for the two
subvectors y1t , y2t . If t = {ys |s ≤ t} and yt is a VAR process of the form (3.54),
where the αkh,i s are now submatrices of appropriate dimensions, the restrictions
for noncausality are the same as in the bivariate case. For instance, y2t is Granger-
noncausal for y1t if and only if α12,i = 0 for i = 1, . . . , p [Lütkepohl (1991,
Section 2.3.1)].
    If interest centers on a causal relation between two variables within a higher
dimensional system, this approach is not satisfactory because a set of variables
          Vector Autoregressive and Vector Error Correction Models                 147

being causal for another set of variables does not necessarily imply that each
member of the former set is causal for each member of the latter set. Therefore
causality of y2t to y1t has been considered for the case in which further variables
belong to the system. Different causality concepts have been proposed in this
context. We will discuss them within the three-dimensional VAR process
                                                          
                   y1t      p    α11,i α12,i α13,i     y1,t−i
          yt =  y2t  =         α21,i α22,i α23,i   y2,t−i  + u t .     (3.56)
                   y3t      i=1   α31,i α32,i α33,i     y3,t−i
In this system, checking causality of y2t for y1t by testing

          H0 : α12,i = 0, i = 1, . . . , p                                       (3.57)

is not equivalent to (3.53), however. In the present system, these restrictions are
equivalent to equality of the 1-step forecasts, y1,t+1|t = y1,t+1|t \{y2,s |s≤t} . The
information in past y2t may still be helpful in forecasting y1t more than one
period ahead if (3.57) holds [Lütkepohl (1993)]. The intuitive reason for this
result is that there may be indirect causal links; for example, y2t may have an
impact on y3t , which in turn may affect y1t . Therefore, for higher dimensional
processes the definition based on (3.53) results in more complicated nonlinear
restrictions for the parameters of the VAR process. A more detailed discussion
may be found in Dufour & Renault (1998).
    Another concept related to Granger-causality is that of instantaneous causal-
ity. Roughly speaking, a variable y2t is said to be instantaneously causal for
another time series variable y1t if knowing the value of y2 in the forecast period
helps to improve the forecasts of y1 . Formally, y2t is said to be instantaneously
noncausal for y1t if and only if

          y1,t+1|t = y1,t+1|t ∪y2,t+1 .                                        (3.58)

It turns out, however, that, in a bivariate VAR process, this concept reduces to a
property of the model residuals. More precisely, let u t = (u 1t , u 2t ) be the resid-
ual vector of the DGP of yt = (y1t , y2t ) ; then, y2t is not instantaneously causal
for y1t if and only if u 2t and u 1t are uncorrelated. In turn, y2t is instantaneously
causal for y1t if and only if u 1t and u 2t are correlated. Consequently, the concept
is fully symmetric. If y2t is instantaneously causal for y1t , then y1t is also instan-
taneously causal for y2t . Hence, the concept as such does not specify a causal
direction. The causal direction must be known from other sources. The concept
has been criticized on the grounds that correlation generally does not define a
causal direction. Still, if it is known from other sources that there can only be a
causal link between two variables in one direction, it may be useful to check this
possibility by considering the correlation between the residuals. Generalizing
the concept to higher dimensional processes creates problems similar to those
encountered for Granger-causality. In other words, in the case of more than two
148      Helmut Lütkepohl

variables there may be indirect links between them that have to be taken into
account.


3.7.2 Testing for Granger-Causality
Because testing for Granger-causality requires checking whether specific coef-
ficients are zero, standard tests for zero restrictions on VAR coefficients may
be used here (χ 2 - or F-tests based on the Wald principle are typically thought
of in this context). Unfortunately, they may have nonstandard asymptotic prop-
erties if the VAR contains I(1) variables. In particular, Wald tests for Granger-
causality are known to result in nonstandard limiting distributions depending on
the cointegration properties of the system and possibly on nuisance parameters
[see Toda & Phillips (1993)].
    Fortunately, these problems can be overcome easily, as pointed out by Toda
& Yamamoto (1995) and Dolado & Lütkepohl (1996). As mentioned in Sec-
tion 3.3.1, the nonstandard asymptotic properties of the standard tests on the
coefficients of cointegrated VAR processes are due to the singularity of the
asymptotic distribution of the estimators. The singularity can be removed by
fitting a VAR process whose order exceeds the true order, however. It can be
shown that this device leads to a nonsingular asymptotic distribution of the rele-
vant coefficients. Thus, simply overfitting the VAR order and ignoring the extra
parameters in testing for Granger-causality overcomes the problems associated
with standard tests – at least if asymptotic properties are of interest.
    More precisely, Dolado & Lütkepohl (1996) have shown that, whenever
the elements in at least one of the coefficient matrices Ai are not restricted
at all under the null hypothesis, the Wald statistic has its usual limiting χ 2 -
distribution. Consequently, if a hypothesis is of interest involving elements
from all Ai , i = 1, . . . , p, as, for instance, in the noncausality restrictions in
(3.55) or (3.57), standard asymptotic properties of the Wald test can be ensured
simply by adding an extra (redundant) lag in estimating the parameters of the
process. If the true DGP is a VAR( p) process, then, of course, a VAR( p + 1)
with A p+1 = 0 is also an appropriate model. It is important to note, however,
that the test has to be performed on the Ai , i = 1, . . . , p, only with the last
redundant lag ignored.
    This procedure can even be used if the cointegration properties of the system
are unknown. If it is known that all variables are at most I(1), an extra lag may
simply be added and the test may be performed on the lag-augmented model to
be on the safe side. Unfortunately, the procedure is not fully efficient owing to
the redundant parameters. The procedure remains valid if an intercept or other
deterministic terms are included in the VAR model as a consequence of results
due to Park & Phillips (1989) and Sims et al. (1990).
    Testing for instantaneous causality can be done by determining the absence
of instantaneous residual correlation. Because the asymptotic properties of the
           Vector Autoregressive and Vector Error Correction Models                149

Table 3.7. Tests for causality between German interest rate and
inflation based on VAR(4) model

Causality hypothesis      Test value      Distribution       p-value
   Gr
R −→ Dp                   2.24            F(4, 152)         0.07
      Gr
Dp −→ R                   0.31            F(4, 152)         0.87
   inst
R −→ Dp                   0.61            χ 2 (1)           0.44
Note: Sample period: 1973Q3–1998Q4.



estimator of the residual covariance matrix of a VAR process are unaffected
by the degree of integration and cointegration in the variables, a test statistic
based on the usual Wald or likelihood ratio principles has an asymptotic χ 2 -
distribution under standard assumptions.
   For our German interest rate–inflation example, tests for causality based on
a VAR(4) model are given in Table 3.7. For the Granger-causality tests, the
model is augmented by one more lag; thus, these tests are actually based on a
VAR(5) model in which the relevant restrictions are, however, tested on the first
four coefficient matrices. The usual Wald statistic has an asymptotic χ 2 (4)-
distribution because four restrictions are tested. In JMulTi, an F-version of
this test is used because this version often leads to a better approximation of
the desired size of the test. The denominator degrees of freedom are obtained
as the total number of observations used for estimation (2T ) minus the total
number of estimated parameters. In contrast, the raw χ 2 approximation is used
in testing for instantaneous causality. This test is based on the residuals of a
VAR(4) model. Because only one correlation coefficient is tested to be zero,
the number of degrees of freedom of the approximating χ 2 -distribution is one.
Clearly, it is sufficient to report the test result for only one instantaneous causal
direction because the test value for the other direction is identical given that it
tests the very same correlation coefficient.
   In Table 3.7, none of the p-values are smaller than 0.05. Hence, using a 5%
significance level, none of the noncausality null hypotheses can be rejected. In
other words, on the basis of these tests no causal relation between the variables
can be diagnosed with any certainty. There is, however, weak evidence of a
                                                 Gr
Granger-causal relation from R to Dp (R −→ D p ) because the p-value of the
related test is at least less than 10%. Given the previous results for the present
pair of variables, the general test results are perhaps a bit surprising. First of all,
on the basis of the subset VECM (3.41) one may have expected a clear causal link
from Dp to R because the former variable enters the first equation of that model.
A closer look confirms, however, that the t-ratios of the coefficients associated
with lags of Dp are fairly small. On the other hand, no lagged differences of R
appear in the Dpt equation of model (3.41). In fact, R enters that equation
150      Helmut Lütkepohl

only via the error correction term. The loading coefficient has a t-ratio of more
than 4. This explains why a Granger-causal relation from R to Dp is found at
least when a 10% significance level is used in the test in Table 3.7.
    Generally, it is perhaps worth remembering that, if there is a cointegration
relation between two variables there must also be Granger-causality in at least
one direction. Despite the very clear cointegration result, the causality tests
do not suggest a strong relation, and this may be a bit puzzling. It should be
remembered, however, that a cointegration analysis and a Granger-causality
analysis look at the data from different angles. In such a situation the view
from one direction often gives a much clearer picture than from another corner.
The causality tests are based on fairly large models with many parameters. The
scarce sample information makes it difficult for such tests to reject the null
hypothesis. In other words, the causality tests may have a power problem. This
line of arguments shows that there is no conflict between the results from the
cointegration analysis and the causality analysis. One of them just provides a
clearer picture of the relation between the variables because of the different way
it processes the sample information.


3.8 An Example
As an example we consider a system modeled around a money demand relation
for Germany. This relation is of central interest for conducting a monetary
policy based on targeting the money stock growth because for such a strategy
the demand for money has to be predictable. In Germany the Bundesbank
(German central bank) has used that strategy since the middle of the 1970s.
Thus, the question of interest here is whether a stable, plausible money demand
relation has existed for Germany for the period of monetary targeting by the
Bundesbank.
    In modeling money demand for Germany, it is worth remembering that
economic theory suggests real money demand to depend on the real transactions
volume and a nominal interest rate representing opportunity costs of holding
money. Hence, we will consider a system with at least three variables: real
money, real output and a nominal interest rate. For deciding on the specific
variables to be included we note that the Bundesbank used a target value for
the broad measure of the money stock M3 starting in 1988. Therefore, this
variable is of particular interest here. It includes not only currency holdings
but also sight deposits, time deposits for up to four years, and savings deposits.
Hence, a longer term interest rate is a more suitable opportunity cost measure
in the present situation than a short-term interest rate. One could even argue in
favor of using the difference between a long-term rate and the interest rate on
components included in M3. If different possibilities are available, one may try
all of them in the course of the analysis. We decided to start with the so-called
         Vector Autoregressive and Vector Error Correction Models             151

Umlaufsrendite, which is an average bond rate. It may be thought of as a 5-year
rate. We measure the transactions volume by GNP. Because the quantity theory
suggests a log-linear relationship, we consider the three-dimensional system
(m t , gnpt , Rt ), where m t is the log of real M3, gnpt is the log of real GNP,
and Rt is the nominal long-term interest rate. Of course, other variables may
be important in the generation mechanism of these variables. For example, in
the introduction to this chapter (see Section 3.1) we already mentioned the
inflation rate as a potentially important variable. Moreover, foreign influences
may play a role. Therefore, one should keep in mind that further variables may
have to be added at a later stage. The decision on such variables may also
depend on the purpose of the analysis. We start out with the present system
and refer the reader to Lütkepohl & Wolters (2003) for an analysis of a larger
system.
    Because the Bundesbank started its monetary targeting policy in 1975, we
use data from 1975 to 1998. The final year is chosen to be 1998 because in 1999
the euro was introduced, and the responsibility for the monetary policy shifted to
the European Central Bank. Note that GNP data are only available quarterly for
Germany. Therefore, we use quarterly data. For the monthly series M3 and R, we
use the value published for the last month of each quarter as the corresponding
quarterly value. As mentioned in Chapter 2, seasonal adjustment is an operation
applied to univariate series individually; it may distort the relation between
variables. Thus we use seasonally unadjusted data. In other words, we use the
series m t , gnpt , and Rt plotted in Figure 3.1. The M3 series is deflated by the
GNP deflator because that price index is also used to deflate GNP. Obviously, m t
and gnpt have a noticeable seasonal pattern and a level shift in the third quarter
of 1990 when the monetary unification of East and West Germany occurred.
Since then all data refer to all of Germany, whereas, before that date, they only
refer to West Germany. Clearly the level shift and the seasonality have to be
taken into account in the subsequent analysis. Moreover, the trending behavior
of all three series deserves consideration.
    We start by investigating the unit root and univariate time series properties
of the three series and just mention that all three of them are well modeled
by allowing for a unit root. In fact, series similar to the present gnpt and Rt
series were already considered in Chapter 2. The appropriate tests support the
conclusion that the series may be treated as I(1). We encourage the reader to
confirm this result. The next step is then to investigate possible cointegration
relations between the series.
    We perform cointegration tests on all pairs of series before turning to the
three-dimensional system. The reason is that cointegration rank tests tend to
have relatively low power – especially when applied to higher dimensional
systems. Therefore, applying tests to bivariate systems first is a good check
of the overall plausibility and consistency of the results obtained by looking
152      Helmut Lütkepohl

at the data from different angles. Doing this can also help in finding a proper
normalization of the cointegration matrix for the estimation stage, as we will
see later. Because there is a shift in the m t and gnpt series in the third quarter of
1990, the time when the monetary unification of East and West Germany became
effective, a shift dummy variable will be included in the cointegration tests;
therefore, we use the cointegration tests proposed by Saikkonen and Lütkepohl
(S&L tests) (see Section 3.4.2). The results are given in Table 3.8.
    In performing the tests, a few choices have to be made. In particular, the
deterministic terms and the number of lagged differences in the model have
to be decided. Regarding the deterministic terms, we have already mentioned
that the unification shift in m t and gnpt makes it desirable to include a shift
dummy variable in any model involving at least one of these two variables.
In other words, a shift dummy should be included in all the bivariate models.
In addition, m t and gnpt have some seasonal variation and a trending behav-
ior that may perhaps be captured with a linear trend term. Therefore, seasonal
dummy variables as well as a linear trend term are included in the test models.
We leave it open whether the trend is just in the variables and, hence, orthog-
onal to the cointegration relations or whether a fully general linear trend is re-
quired. To avoid a decision on this issue at this point, we perform both types of
tests.
    Another choice that has to be made is the number of lagged differences
to be included in the models on which the cointegrating rank tests are based.
Notice that the lag length cannot be deduced easily from the model order used
in the univariate unit root analysis because the relation between the univariate
lags and those in a multivariate model is complicated and depends on the true
DGP. Hence, a new choice is necessary for each of the systems considered.
An easy way to make this choice is to ask the model selection criteria for
suggestions. In this case, we considered a maximum lag order of 10, taking into
account the data frequency and number of observations. Then VAR models
for the levels series of orders 1 to 10 were fitted without any cointegration
restrictions imposed, and the orders minimizing the different model selection
criteria were considered. This procedure is justified here because fitting the
model in the levels of the variables is equivalent to fitting a VECM without
restricting the cointegrating rank. Thus, the least restricted model considered in
any of the cointegration tests is used. For our systems of variables the different
order selection criteria propose quite different lag orders. Therefore, we have
performed cointegrating rank tests for different numbers of lags. Notice that the
orders specified in Table 3.8 refer to the number of lagged differences included
in the VECMs that are used for the tests. We know from Section 3.2 that this
number is one less than the VAR order. The larger number of lagged differences
in Table 3.8 is always the number suggested by AIC, whereas the lower number
is the proposal of the HQ criterion. Recall that choosing the order too small can
lead to size distortions for the tests while selecting too large an order may imply
            Vector Autoregressive and Vector Error Correction Models                               153

Table 3.8. S&L cointegration tests for German money demand system; sample
period: 1975Q1–1998Q4

                                       No.                                            Critical values
               Deterministic           of lagged                         Test
Variables      terms                   differences      H0 : r = r0      statistic    10%        5%
m, gnp         c, tr, sd, shift        0                r0 = 0             6.86       13.89      15.92
                                                        r0 = 1             0.37        5.43       6.83
                                       4                r0 = 0             4.91       13.89      15.92
                                                        r0 = 1             1.75        5.43       6.83
               c, orth tr, sd, shift   0                r0 = 0             9.13         8.03      9.79

m, R           c, tr, sd, shift        0                r0 = 0           26.71        13.89      15.92
                                                        r0 = 1            0.00         5.43       6.83
               c, orth tr, sd, shift   0                r0 = 0           22.98          8.03      9.79

gnp, R         c, tr, sd, shift        0                r0 = 0             8.26       13.89      15.92
                                                        r0 = 1             0.20        5.43       6.83
                                       6                r0 = 0             8.42       13.89      15.92
                                                        r0 = 1             0.56        5.43       6.83
               c, orth tr, sd, shift   0                r0 = 0             4.04         8.03      9.79
                                       6                r0 = 0             9.36         8.03      9.79

m, gnp, R      c, tr, sd, shift        0                r0 = 0           38.36        25.90      28.47
                                                        r0 = 1            9.07        13.89      15.92
                                                        r0 = 2            0.00         5.43       6.83
                                       4                r0 = 0           19.58        25.90      28.47
                                                        r0 = 1            4.93        13.89      15.92
                                                        r0 = 2            4.53         5.43       6.83
               c, orth tr, sd, shift   0                r0 = 0           33.62        18.19      20.66
                                                        r0 = 1            9.47         8.03       9.79
                                       4                r0 = 0           20.14        18.19      20.66
                                                        r0 = 1            4.53         8.03       9.79
Notes: c-constant, tr -linear trend, orth tr-linear trend orthogonal to the cointegration relations, sd-
seasonal dummies, shift-shift dummy variable S90Q3; critical values from Lütkepohl & Saikkonen
(2000, Table 1) for models with unrestricted trend and from Saikkonen & Lütkepohl (2000b, Table1)
for models with trend orthogonal to the cointegration relations.


reductions in power. Therefore, considering different orders may provide useful
insights.
   All cointegration test results are given in Table 3.8, where the sample period
1975Q1–1998Q4 refers to the full series length including the presample values
needed in the estimation. In other words, the actual sample is shorter when more
154       Helmut Lütkepohl

lagged differences are included. For the (m t , gnpt ) and (gnpt , Rt ) systems
there is very strong evidence for a cointegration rank of zero. In other words,
the two variables in each of these systems do not appear to be cointegrated.
Notice, however, that for both systems the rank zero hypothesis is rejected at
the 10% level if the trend is restricted to be orthogonal to the cointegration
relations. In total, we regard this piece of evidence as too weak to outweigh
the evidence in favor of no cointegration. In contrast, for the (m t , Rt ) system
the evidence is clearly in favor of one cointegration relation regardless of the
assumption for the linear trend. Thus, in a three-dimensional analysis one would
also expect to find at least one cointegration relation. In fact, if there is really no
cointegration relation between m t and gnpt and also none between gnpt and Rt ,
as suggested by the bivariate analysis, there cannot be a second cointegration
relation between the three variables. If there were two linearly independent
cointegration relations, they could always be transformed so that they would
both involve just two of the variables by using the normalization of Section
3.3.2. Therefore it is reassuring that the test results for the three-dimensional
system point to a cointegrating rank of 1. In line with the bivariate results, a
second cointegration relation may be diagnosed at the 10% level of significance
if the trend is assumed to be orthogonal to the cointegration relations and
a lag order of zero, as proposed by the HQ criterion, is used. The evidence
is sufficiently weak to continue the analysis with one cointegration relation.
Notice that the results for the three-dimensional system in Table 3.8 are similar
to those in Table 3.3, where the same variables are considered with a slightly
extended sample period. Although the sampling period in this case does not
change the general conclusions from the tests, it has some impact on the actual
test values.
    The next step in our analysis is then to search for an adequate model for
the three-dimensional system of interest, (m t , gnpt , Rt ) . On the basis of our
cointegration analysis results, we start out from a VECM with cointegrating
rank 1 and four lagged differences. Note that the AIC suggested four lagged
differences in an unrestricted model. Starting from a rather liberal specifica-
tion allows us to reduce the parameter space in further steps without running
the risk of neglecting important features of the DGP at an early stage. This is
also the reason for including a linear time trend initially. Because a quadratic
trend is not considered, the trend can be absorbed into the cointegration rela-
tion. Hence, we restrict the trend accordingly, as in (3.38). The shift dummy
is included in differenced form only because it turned out to be unnecessary
in the cointegration relations. Thus, we include an impulse dummy variable
I 90Q3t = S90Q3t in the model. At this early stage, one could also con-
sider a shift dummy in addition, and we ask the reader to try a model con-
taining that term as well. Also, of course, seasonal dummies are included
in all the equations. After estimating the model by the Johansen ML proce-
dure and checking the residuals, we found the model to be a quite satisfactory
         Vector Autoregressive and Vector Error Correction Models                 155




Figure 3.7. Recursive eigenvalues and stability test statistic for unrestricted VECM
with cointegrating rank one, four lagged differences, constants, seasonal dummies, and
a time trend restricted to the cointegration relation for German money demand system;
sample period: 1975Q1–1998Q4 (including presample values).


representation of the DGP. A stability analysis based an the recursive eigenval-
                  (τ )
ues and the T (ξ1 ) statistic for 1986Q1–1998Q4 does not give rise to concern
(see Figure 3.7). In particular, the value of the test statistic does not exceed the
critical value for a 5% level test, which is shown as a line near the top of the right
panel of Figure 3.7. Thus, the model may be used as a starting point for model
reduction.
    Choosing m t as the first variable in our model means that the coefficient
of this variable in the cointegration relation will be normalized to 1 in the
ML estimation procedure described in Section 3.3.2. This normalization is
problematic if m t is not actually present in the cointegration relation and, hence,
has a coefficient of zero attached to it. For our present system we found, however,
that m t is possibly cointegrated with Rt in a bivariate system. This result strongly
suggests that m t is part of the cointegration relation with nonzero coefficient,
which may thus be normalized to 1. The cointegration relation obtained from
the ML estimation with this normalization is
         ecttr = m t − 0.863 gnpt + 3.781 Rt − 0.002 t,
                         (0.228)        (0.801)       (0.002)

where estimated standard errors are given in parentheses. Notice that the co-
efficient of the trend term in the cointegration relation has an asymptotic
normal distribution under standard assumptions, and thus its t-ratio can be
interpreted in the usual way. Clearly, the coefficient of the trend term is not sig-
nificantly different from zero at conventional levels. Therefore, we reestimated
the model without the trend term and obtained the following cointegration
relation:
         ectML = m t − 1.093 gnpt + 6.514 Rt
                          (0.090)         (1.267)
156      Helmut Lütkepohl

or

         m t = 1.093 gnpt − 6.514 Rt + ectML ,
                (0.090)             (1.267)

where again estimated standard errors are given in parentheses. The latter equa-
tion looks like a quite plausible money demand relation, in which increases in the
transactions volume increase money demand and increases in the opportunity
costs for money holdings (Rt ) reduce the demand for money. Because both m t
and gnpt are in logs, the coefficient 1.093 is the estimated output elasticity. If
the (log) velocity of money (gnpt − m t ) is constant, one would expect a 1%
increase in the transactions volume (output) to induce a 1% increase in money
demand. Hence, in a simple theoretical model the output elasticity is expected
to be 1. The gnpt coefficient is in fact not far from this value and, given its
standard deviation of 0.090, it is not significantly different from 1 if common
significance levels are used. The reader may confirm this result using the Wald
test (3.21).
   Therefore it makes sense to estimate a model with a restricted cointegration
vector for which the output elasticity is set to 1. Using the S2S estimator for
this purpose, we obtain the long-run relation

         m t = gnpt − 3.876 Rt + ectS2S .                                  (3.59)
                          (0.742)

The coefficient of Rt is a semielasticity because this variable is not in logs.
Thus, the elasticity is obtained as ∂m/∂ log R = (∂m/∂ R)R; therefore, for an
interest rate of 5% the elasticity would be −3.876 × 0.05 = −0.194, which is
not an implausible value. Consequently, our estimated cointegration relation
qualifies as a long-run money demand relation.
    In the light of our previous results there is, however, one problem with this
interpretation. In the bivariate cointegration analysis we found a cointegration
relation between m t and Rt that does not involve gnpt . Thus, the single cointe-
gration relation found in the three-dimensional analysis may be one between m t
and Rt only. Hence, how can we find a cointegration relation involving all three
variables in the present three-dimensional analysis? Given the foregoing esti-
mation results, gnpt enters significantly in the cointegration relation. Both the
ML and the S2S estimators confirm this result. There is indeed a slight incon-
sistency between the bivariate and the three-dimensional analysis. We therefore
maintain all three variables in the cointegration relation. After all, eliminating
gnpt from the cointegration relation imposes a restriction on the model that is
rejected by the data if the full three-dimensional information set is taken into
account.
    We now use the cointegration relation from (3.59) and perform a model
reduction. Using a single-equation sequential elimination procedure based on
the AIC results in the following estimated model, where the final estimation
         Vector Autoregressive and Vector Error Correction Models                             157

was done by feasible GLS (EGLS), which is equivalent to 3SLS because the
model is in reduced form:
                    
            −0.04
   m t      (−3.1) 
 gnpt  =         
             0  (m t−1 − gnpt−1 + 3.876Rt−1 )
                    
   Rt        −0.01
              (−1.6)
                                                                                     
               0.15        −0.18 −0.58                                          −0.30
              (2.5)       (−2.9) (−3.4)   m                   0     0              
                                                                                          m t−2
                                                                                                 
              0.22                                  t−1                      (−1.6) 
            +             −0.36          0      gnpt−1  + 
                                                                0.25 −0.22
                                                                                      
                                                                                0.37  gnpt−2 
              (2.8)                                           (3.1) (−2.4)
             
                           (−4.2)
                                                   Rt−1                       (1.5)    Rt−2
                 0           0           0.18                      0     0        0
                                         (1.8)
                                                          
                  0 −0.09         0               0 0 0  m         
                   (−1.8)             m t−3                   t−4
                                                         
            +0        0           0  gnpt−3 +  (4.0)  gnpt−4 
                                                   0 0.28 0   
                                     
               0       0         0.18     Rt−3     0 0 0        Rt−4
                                 (1.8)
                                                                
                0.15        0.07 −0.03 −0.02 −0.02         I 90Q3t
                                                                             
              (17.5)       (4.9) (−5.4) (−3.5) (−4.4)       c      û 1,t
              0.11         0.04 −0.07 −0.03 −0.03               
            +
              (8.9)
                                                         s1,t  +  û 2,t  .
                            (7.7) (−9.1) (−4.2) (−3.5)                                    (3.60)
                                                        s2,t       û 3,t
                 0          0.01    0      0      0
                            (1.5)                             s3,t

Here the t-values are given in parentheses. The corresponding residual covari-
ance and correlation matrices are
                                                                       
                 6.85 −0.01 0.40                            1 −0.00 0.10
         u =  · 13.3 1.12 ×10−5 and Corr
                                                   =  · 1 0.19  .
                   ·     · 2.59                             ·     ·     1

                                           are quite small. Given our effective
Obviously, all off-diagonal elements of Corr                      √
sample size of T = 91 observations, they are all smaller than 2/ T = 0.21 and
thus not significantly different from zero. This can be useful information in a
further analysis of the model such as when an impulse response analysis is
performed (see Chapter 4).
   The reader may want to check the adequacy of the model by conducting the
usual diagnostic tests. They do not give rise to concern about the adequacy of
the model. The only potential model defect is a significant ARCH test for the
residuals of the interest rate equation. ARCH effects in the residuals of financial
data series are not surprising and are not necessarily a signal of inadequate
modeling of the conditional expectation of the DGP. Because we are mainly
interested in the latter part in the present analysis, we decided to ignore the
significant diagnostic test value. There is, however, a problem that may be
caused by ARCH in the residuals. As mentioned earlier, volatility clusters can
lead to significant values of Chow tests because these tests compare the residual
variability in different subperiods to decide on parameter instability. If the
158      Helmut Lütkepohl

variability differs due to ARCH effects, this may then be diagnosed as parameter
instability. Therefore, checking the stability of our model with these tests may
not be a fruitful exercise in this case. Given the results of the stability test based
on the recursive eigenvalues, we decide to maintain the present model as a basis
for economic analysis. Possible tools for such an analysis are considered in the
next chapter. We encourage the reader to consider model reduction using the
cointegration vectors from ML estimations with and without a linear trend term
in the model and to try other model variants such as a model with a shift dummy
variable.


3.9 Extensions
In this chapter we have focused on VAR and VEC models possibly enriched by
deterministic and exogenous variables. Pure VAR models have become standard
tools for macroeconometric analysis following the critique of static large-scale
econometric models launched by Sims (1980) in an influential article. VECMs
have become popular after the introduction of cointegration. A possible limi-
tation of our discussion of these models is the assumption regarding the order
of integration. We have considered I(0) and I(1) variables only. Higher order
integration may be present in some variables in practice. Although some results
of the present chapter remain valid in that case, it is generally a good idea to take
higher order integration into account explicitly. An extensive literature on the
related issues is currently unfolding [see, e.g., Johansen (1995b) and Haldrup
(1998)].
    The theoretical literature on multiple time series modeling has also consid-
ered more general vector models that allow for MA terms and thereby may
achieve more parsimonious parameterizations. Some relevant references are
Hannan & Deistler (1988), Lütkepohl (1991), and Lütkepohl & Poskitt (1996a).
Extensions of these models to cointegrated systems are discussed by Lütkepohl
& Claessen (1997) and Bartel & Lütkepohl (1998). Unfortunately, these mod-
els are more difficult to handle in practice and therefore have not become very
popular for empirical work.
    Some other model extensions of practical importance will be considered in
other parts of this book. For instance, for financial time series modeling the
conditional second moments are sometimes of primary interest. Multivariate
ARCH-type models that can be used for this purpose will be discussed in
Chapter 5. Generally, nonlinearities of unknown functional form may be treated
nonparametrically, semiparametrically, or seminonparametrically. A large body
of literature is currently developing on these issues. Some methods of this type
for univariate series will be considered in Chapter 7. Moreover, specific forms
of nonlinearities that have proved quite useful in applications will be presented
in Chapter 6.
4        Structural Vector
         Autoregressive Modeling and
         Impulse Responses

Jörg Breitung, Ralf Brüggemann, and Helmut Lütkepohl



4.1 Introduction
In the previous chapter we have seen how a model for the DGP of a set of eco-
nomic time series variables can be constructed. When such a model is available,
it can be used for analyzing the dynamic interactions between the variables. This
kind of analysis is usually done by tracing the effect of an impulse in one of the
variables through the system. In other words, an impulse response analysis is
performed. Although this is technically straightforward, some problems related
to impulse response analysis exist that have been the subject of considerable
discussion in the literature.
    As argued forcefully by Cooley & LeRoy (1985), vector autoregressions
have the status of “reduced form” models and therefore are merely vehicles to
summarize the dynamic properties of the data. Without reference to a specific
economic structure, such reduced-form VAR models are difficult to understand.
For example, it is often difficult to draw any conclusion from the large number of
coefficient estimates in a VAR system. As long as such parameters are not related
to “deep” structural parameters characterizing preferences, technologies, and
optimization behavior, the parameters do not have an economic meaning and
are subject to the so-called Lucas critique.
    Sims (1981, 1986), Bernanke (1986), and Shapiro & Watson (1988) put for-
ward a new class of econometric models that is now known as structural vector
autoregression (SVAR) or identified VAR. Instead of identifying the (autore-
gressive) coefficients, identification focuses on the errors of the system, which
are interpreted as (linear combinations of) exogenous shocks. In the early ap-
plications of Sargent (1978) and Sims (1980), the innovations of the VAR were
orthogonalized using a Choleski decomposition of the covariance matrix. A
recursive structure was thereby imposed on the instantaneous relations between
the variables. Unless there is a justification from subject matter theory for a
specific recursive structure, there is some degree of arbitrariness when con-
structing shocks in this manner. In general, choosing a different ordering of

                                                                              159
160      Jörg Breitung, Ralf Brüggemann, and Helmut Lütkepohl

the variables produces different shocks and, thus, the effects of the shocks on
the system depend on the way the variables are arranged in the time series vec-
tor yt . To account for this difficulty, Sims (1981) recommended trying various
triangular orthogonalizations and checking the robustness of the results to the
ordering of the variables.
    An alternative approach to the identification of the shocks is to formulate
structural equations for the errors of the system. In this case it is convenient to
think of the equations as an IS curve or a money demand relation, for example,
where the equations apply to the unexpected part of the variables (the inno-
vations) instead of the variables themselves. If the equations are valid for the
system variables, then they also apply to the unexpected part of the variables.
Therefore, the identification using a set of simultaneous equations is appealing
with respect to the traditional approach advocated by the Cowles Commission,
and it is not surprising that this kind of identification is used widely in empirical
work with SVAR models.
    In recent work, the identification of shocks using restrictions on their long-
run effects has become popular. In many cases, economic theory suggests that
the effects of some shocks are zero in the long-run, that is, the shocks have
transitory effects with respect to particular variables. For example, classical
economic theory implies that the effect of nominal shocks on real variables
like output or unemployment vanishes as time goes by. Such assumptions give
rise to nonlinear restrictions on the parameters and may be used to identify the
structure of the system.
    An important difference of SVAR models with respect to traditional simulta-
neous equation models is that the latter usually employ many more restrictions
than necessary to identify the system, that is, these models are often highly
over-identified. In his famous critique, Sims (1980) described these overly re-
stricted models as “incredible.” SVAR proponents therefore try to avoid over-
simplifying the structure and impose just enough restrictions to identify the
parameters. Accordingly, most SVAR models are just-identified.
    The impulse responses obtained from an SVAR or structural VECM
(SVECM) typically are highly nonlinear functions of the model parameters.
This property has implications for drawing inferences related to the impulse re-
sponses. It is known that, for the functions of interest here, standard asymptotic
inference may be a poor guide in small samples. We will discuss the problem
and possible solutions in Section 4.5.
    The structure of this chapter is as follows. In the next section, the model
framework for impulse response analysis will be reviewed briefly. The prin-
ciples of impulse response analysis for a given SVAR model with identified
shocks are considered in Section 4.3, the estimation of the structural parameters
is addressed in Section 4.4, and statistical inference for impulse responses is
treated in Section 4.5. Finally, forecast error variance decomposition as a special
          Structural Vector Autoregressive Modeling                                161

way of summarizing impulse responses is discussed in Section 4.6. Empirical
examples are presented in some detail in Section 4.7, and conclusions follow
in Section 4.8.


4.2 The Models
The most general model we have considered in the previous chapter is a struc-
tural VECM form

          Ayt = ∗ yt−1 + 1∗ yt−1 + · · · +  ∗p−1 yt− p+1
                    +C ∗ Dt + B ∗ z t + vt ,                                      (4.1)

where yt = (y1t , . . . , y K t ) is a (K × 1) vector of endogenous variables; z t is a
vector of exogenous or unmodeled stochastic variables; Dt contains all deter-
ministic terms; the ∗ ,  ∗j ( j = 1, . . . , p − 1), C ∗ , and B ∗ are structural form
parameter matrices; and vt is a (K × 1) structural form error that is a zero mean
white noise process with time-invariant covariance matrix v . The invertible
(K × K ) matrix A allows modeling instantaneous relations among the variables
in yt .
    As already noted, structural shocks are the central quantities in an SVAR
model. These shocks are unpredictable with respect to the past of the process
and are the input of a linear dynamic system generating the K-dimensional time
series vector yt . They are hence related to the residuals in (4.1). The shocks
are associated with an economic meaning such as an oil price shock, exchange
rate shock, or a monetary shock. Because the shocks are not directly observed,
assumptions are needed to identify them. There seems to be a consensus that
structural shocks should be mutually uncorrelated (and thus orthogonal). This
assumption is required to consider the dynamic impact of an isolated shock. If
the shocks were correlated, we would have to take into account the relationship
between the shocks. Moreover, the decomposition into orthogonal components
has a long tradition in statistical analysis and is also used in factor analysis,
for example. The shocks or structural innovations, denoted by εt , are assumed
to be related to the model residuals by linear relations vt = Bεt , where B is a
(K × K ) matrix.
    For our present purposes, the deterministic terms are of no importance be-
cause they are not affected by impulses hitting the system. Moreover, they do
not affect such impulses themselves. Therefore, for notational convenience the
deterministic term is often dropped from the model. In practice this may be
done by adjusting the variables or the model for deterministic terms before an
analysis of the dynamic interactions between the variables is carried out. Sim-
ilarly, exogenous variables, if they are under the control of some policy maker,
may not react to stochastic shocks of the system and may therefore be ignored
162      Jörg Breitung, Ralf Brüggemann, and Helmut Lütkepohl

for the present purposes. Also, in macroeconometric analysis, exogeneity of a
variable is often regarded as too strong a condition; therefore, all observable
stochastic variables are modeled as endogenous. Instead, the error variables
are viewed as the actual exogenous variables, although they are not under the
control of any economic agents. Hence, instead of (4.1) we consider
         Ayt = ∗ yt−1 + 1∗ yt−1 + · · · +  ∗p−1 yt− p+1 + Bεt           (4.2)
with εt ∼ (0, I K ). Such a model has an equivalent VAR representation for the
levels variables of the form
         Ayt = A∗1 yt−1 + · · · + A∗p yt− p + Bεt .                           (4.3)
This model is also often useful for our purposes, especially if the yt s are sta-
tionary I(0) variables. Here the Ai∗ ’s (i = 1, . . . , p) are (K × K ) coefficient
matrices, as usual.
   The reduced forms corresponding to the structural forms (4.2) and (4.3),
respectively, are obtained by premultiplying with A−1 ,
         yt = yt−1 + 1 yt−1 + · · · +  p−1 yt− p+1 + u t                (4.4)
and
         yt = A1 yt−1 + · · · + A p yt− p + u t ,                             (4.5)
where  = A−1 ∗ ,  j = A−1  ∗j ( j = 1, . . . , p − 1) and A j = A−1 A∗j ( j = 1,
. . . , p). Moreover,
         u t = A−1 Bεt ,                                                      (4.6)
which relates the reduced-form disturbances u t to the underlying structural
shocks εt .
   To identify the structural form parameters, we must place restrictions on
the parameter matrices. Even if the matrix A, which specifies the instantaneous
relations between the variables, is set to an identity matrix (A = I K ), the as-
sumption of orthogonal shocks εt is not sufficient to achieve identification.
For a K -dimensional system, K (K − 1)/2 restrictions are necessary for or-
thogonalizing the shocks because there are K (K − 1)/2 potentially different
instantaneous covariances. These restrictions can be obtained from a “timing
scheme” for the shocks. For such an identification scheme it is assumed that
the shocks may affect a subset of variables directly within the current time pe-
riod, whereas another subset of variables is affected with a time lag only. An
example of such an identification scheme is the triangular (or recursive) identi-
fication suggested by Sims (1980). In this model the shocks enter the equations
successively so that the additional shock of the second equation does not af-
fect the variable explained by the first equation in the same period. Similarly,
         Structural Vector Autoregressive Modeling                                163

the third shock does not affect the variables explained by the first and sec-
ond equation in the current time period. Such a scheme is also called a Wold
causal chain system [Wold (1960)] and is often associated with a causal chain
from the first to the last variable in the system. Because the impulse responses
computed from these models depend on the ordering of the variables, nonre-
cursive identification schemes that also allow for instantaneous effects of the
variables (A = I K ) have been suggested in the literature [see, e.g., Sims (1986)
and Bernanke (1986)]. Moreover, restrictions on the long-run effects of some
shocks are also sometimes used to identify SVAR models [see, e.g., Blanchard
& Quah (1989), Galı́ (1999), and King, Plosser, Stock & Watson (1991)]. In
empirical applications such restrictions are suggested by economic theory or
are imposed just for convenience.
   In the following we discuss different types of SVAR models that have been
used in applied work. The most popular kinds of restrictions can be classified
as follows:

  (i) B = I K . The vector of innovations εt is modeled as an interdependent
      system of linear equations such that Au t = εt . Linear restrictions on A can
      be written in explicit form as vec(A) = RA γA + rA , where γA contains all
      unrestricted elements of A, RA is a suitable matrix with 0-1 elements, and
      rA is a vector of normalizing constants.
 (ii) A = I K . In this case the model for the innovations is u t = Bεt , and to
      exclude some (linear combinations of the) structural shocks in particular
      equations, restrictions of the form vec(B) = RB γB + rB are imposed, where
      γB contains the unrestricted elements of B and RB is the corresponding
      selection matrix with 0-1 elements.
(iii) The so-called AB-model of Amisano & Giannini (1997) combines the re-
      strictions for A and B from (i) and (ii) such that the model for the innovations
      is Au t = Bεt . Accordingly, the two sets of restrictions vec(A) = RA γA + rA
      and vec(B) = RB γB + rB are used to identify the system.
(iv) There may be prior information on the long-run effects of some shocks.
      They are measured by considering the responses of the system variables
      to the shocks. Therefore, it is useful to discuss impulse responses and
      then also to consider the long-run effects in more detail. Impulse response
      analysis is presented in the next section.

   It is possible to check the identification of an SVAR model by using an
order condition similar to the one used to check for identification of a system
of simultaneous equations. The number of parameters of the reduced form
VAR (leaving out the parameters attached to the lagged variables) is given by
the number of nonredundant elements of the covariance matrix u , that is,
K (K + 1)/2. Accordingly, it is not possible to identify more than K (K + 1)/2
164      Jörg Breitung, Ralf Brüggemann, and Helmut Lütkepohl

parameters of the structural form. However, the overall number of elements of
the structural form matrices A and B is 2K 2 . It follows that
                  K (K + 1)        K (K − 1)
         2K 2 −             = K2 +                                            (4.7)
                      2                2
restrictions are required to identify the full model. If we set one of the matrices
A or B equal to the identity matrix, then K (K − 1)/2 restrictions remain to be
imposed.
    As an example, consider a recursive identification scheme. In this case,
A = I K and u t = Bεt . Restricting B to be lower triangular ensures that the first
component of εt , ε1t , can have an instantaneous impact in all equations, whereas
ε2t cannot affect the first equation instantaneously but only all the others, and
so on. Hence, the recursive structure implies just the required K (K − 1)/2 zero
restrictions.
    The simple IS–LM model discussed by Pagan (1995) is another example of
an AB-model. Let qt , i t , and m t denote output, an interest rate, and real money,
respectively. The errors of the corresponding reduced form VAR are denoted
            q               
by u t = (u t , u it , u m
                         t ) . A structural model reflecting a traditional Keynesian
view is
           q
         u t = −a12 u it + b11 εtIS                (IS curve),
                       q
         u it = −a21 u t − a23 u mt + b22 εt
                                           LM
                                                   (inverse LM curve),
          t = b33 εt
         um        m
                                                   (money supply rule),

where the structural shocks are assumed to be mutually uncorrelated. The first
equation represents a traditional IS curve with a negative parameter for the in-
terest rate innovation u it . The second equation results from solving a Keynesian
money demand relationship with respect to interest rate innovations. In other
                                                            q
words, the point of departure is a relation u m    t = β1 u t + β2 u t + εt , where
                                                                     i    LM

β1 is positive because more money is used to finance a larger transactions
volume. Moreover, β2 is negative because higher interest rates lead to lower
money holdings and, hence, less demand for money. Accordingly, it is ex-
pected that a21 is negative whereas a23 is positive. Finally, the third equation
postulates that the innovations of the money base are driven by exogenous
money supply shocks. Obviously, this model reflects a very stylized view of
the economy. A more realistic representation of the economic system would in-
volve further equations and parameter restrictions [see, e.g., Galı́ (1992)]. The
present three equations correspond to an AB-model, which can be written as
Au t = Bεt :
                                               
              1 a12 0                 b11 0 0
           a21 1 a23  u t =  0 b22 0  εt .                                 (4.8)
              0 0 1                    0 0 b33
         Structural Vector Autoregressive Modeling                             165

   To illustrate how the restrictions implied by this model can be written
using the notation defined above, we give the linear restrictions in matrix
form:
                                               
                      1         000                 1
                    a21   1 0 0               0
                                               
                    0  0 0 0                   
                                         0
                    a12   0 1 0  a21          0
                                               
                   
         vec(A) =  1  =  0 0 0  a12 + 
                                         
                                                  1
                                                      
                    0   0 0 0  a23            0
                                               
                    0  0 0 0                  0
                                               
                    a23   0 0 1               0
                      1         000                 1
and
                                 
                    b11       100
                   0  0 0 0
                                 
                   0  0 0 0
                                    
                   0   0 0 0  b11
                                 
         vec(B) =                   
                   b22  =  0 1 0  b22 .
                   0   0 0 0  b33
                                 
                   0  0 0 0
                                 
                   0  0 0 0
                    b33       001

As mentioned earlier in this section, 2K 2 − K (K + 1)/2 restrictions need to
be imposed for just-identification. In our example, K = 3, and consequently
we need 2K 2 − K (K + 1)/2 = 12 restrictions on A and B. Counting the re-
strictions given by (4.8), we find the model to be just-identified. There are 6
restrictions for A (3 zeros and 3 ones) and additional 6 zero restrictions for
B. Given that there are enough identifying assumptions, the parameters of the
SVAR model can be estimated by methods discussed in Section 4.4. Within
an SVAR model the dynamic effects of structural shocks are typically inves-
tigated by an impulse response analysis, which is discussed in the following
section.


4.3 Impulse Response Analysis

4.3.1 Stationary VAR Processes
If the process yt is I(0), the effects of shocks in the variables of a given system
are most easily seen in its Wold moving average (MA) representation
         yt =    0ut +    1 u t−1 +   2 u t−2 + · · · ,                      (4.9)
166      Jörg Breitung, Ralf Brüggemann, and Helmut Lütkepohl

where    0 = I K and the

                 
                 s
           s =          s− j A j ,   s = 1, 2, . . . ,                       (4.10)
                  j=1

can be computed recursively, as in (3.47), from the reduced-form coefficients
of the VAR in levels specified in (4.5). The coefficients of this representation
may be interpreted as reflecting the responses to impulses hitting the system.
The (i, j)th elements of the matrices s , regarded as a function of s, trace out
the expected response of yi,t+s to a unit change in y jt , holding constant all past
values of yt . Since the change in yit , given {yt−1 , yt−2 , . . .}, is measured by
the innovation u it , the elements of s represent the impulse responses of the
components of yt with respect to the u t innovations. In the presently considered
I(0) case, s → 0 as s → ∞. Hence, the effect of an impulse is transitory as
it vanishes over time. These impulse responses are sometimes called forecast
error impulse responses because the u t ’s are the 1-step ahead forecast errors.
    Occasionally, interest centers on the accumulated effects of the impulses.
They are easily obtained by adding up the s matrices. For example, the accu-
mulated effects over all periods, the total long-run effects, are given by
                
                ∞
                                                     −1
            =           s = (I K − A1 − · · · − A p ) .                      (4.11)
                 s=0

This matrix exists if the VAR process is stable (see the stability condition in
(3.2)).
   A critique that has been raised against forecast error impulse responses is that
the underlying shocks are not likely to occur in isolation if the components of u t
are instantaneously correlated, that is, if u is not diagonal. Therefore, orthog-
onal innovations are preferred in an impulse response analysis, as mentioned
in Section 4.2. One way to get them is to use a Choleski decomposition of the
covariance matrix u . If B is a lower triangular matrix such that u = BB , the
orthogonalized shocks are given by εt = B−1 u t . Hence, we obtain the following
from (4.9):
         yt = 0 εt + 1 εt−1 + · · · ,                                      (4.12)
where i = i B (i = 0, 1, 2, . . .). Here 0 = B is lower triangular, and thus an
ε shock in the first variable may have an instantaneous effect on all the variables,
whereas a shock in the second variable cannot have an instantaneous impact
on y1t but only on the other variables, and so on. Thus, we have a Wold causal
chain. Given that the ε shocks are instantaneously uncorrelated (orthogonal),
the corresponding impulse responses are often referred to as orthogonalized
impulse responses.
   Because many matrices B exist that satisfy BB = u , using a Choleski de-
composition approach is to some extent arbitrary unless there are good reasons
         Structural Vector Autoregressive Modeling                            167

for a particular recursive structure specified by a given B. As mentioned in Sec-
tion 4.1, if B is found by a lower triangular Choleski decomposition, choosing a
different ordering of the variables in the vector yt may produce different shocks.
Hence, the effects of a shock may depend on the way the variables are arranged
in the vector yt . In view of this difficulty, Sims (1981) has recommended try-
ing various triangular orthogonalizations and checking the robustness of the
results with respect to the ordering of the variables if no particular ordering is
suggested by subject matter theory. Using information based on the latter leads
to SVAR models, of course.
     As discussed earlier, in an SVAR such as (4.3), the residuals are represented
as Bεt and εt is a (K × 1) vector of structural shocks with (diagonal) covariance
matrix E(εt εt ) = ε , which is often specified to be an identity matrix. In any
case, the structural shocks are instantaneously uncorrelated. In the AB-model
the relation to the reduced form residuals is given by Au t = Bεt . Therefore,
the impulse responses in a general SVAR model may be obtained from (4.12)
with  j = j A−1 B. If restrictions on the long-run effects are available, they
may be placed on  = A−1 B, where is the matrix specified in (4.11). For
example, one may want to impose the restriction that some shocks do not have
any long-run effects. This is achieved by setting the respective elements of the
long-run impact matrix  = 0 + 1 + · · · equal to zero.
     As an example we consider the model suggested by Blanchard & Quah
(1989). On the basis of a simple economic model, Blanchard and Quah have
identified supply shocks as having persistent effects on output whereas demand
shocks are transitory. Suppose in a VAR model for yt = (Q t , Ut ) , where Q t
denotes the log of output and Ut is the unemployment rate, we wish to identify
innovations that can be interpreted as supply shocks and demand shocks, εt =
(εts , εtd ) . Because we have K = 2 variables and can specify A = I2 , we need
K (K − 1)/2 = 1 restriction to identify the structural shocks from the VAR
residuals. The effects of these shocks on the output growth rates Q t and the
unemployment Ut are obtained from the i matrices. Accumulating them gives
the effects on Q t and the accumulated unemployment rate. Thus, the restriction
that demand shocks have no long-run impact on output can be imposed by
                                                        ∞
constraining the (1,2)-element of the matrix  = i=0       i to be equal to zero.
Estimation of models with long-run restrictions is discussed in Section 4.4.


4.3.2 Impulse Response Analysis of Nonstationary VARs and VECMs
Although the Wold representation does not exist for nonstationary cointe-
grated processes, it is easy to see from Section 3.6 that the s impulse re-
sponse matrices can be computed in the same way as in (4.10) based on
VARs with integrated variables or the levels version of a VECM [Lütkepohl
(1991, Chapter 11) and Lütkepohl & Reimers (1992)]. In this case, the s
may not converge to zero as s → ∞; consequently, some shocks may have
168      Jörg Breitung, Ralf Brüggemann, and Helmut Lütkepohl

permanent effects. Of course, one may also consider orthogonalized or accu-
mulated impulse responses. Because the s and s may not approach zero
as s → ∞, the total accumulated impulse responses will generally not exist,
however. Recall that for cointegrated systems the matrix (I K − A1 − · · · − A p )
is singular. From Johansen’s version of Granger’s Representation Theorem [see
Johansen (1995a)] it is known, however, that if yt is generated by a reduced-
form VECM yt = αβ  yt−1 + 1 yt−1 + · · · +  p−1 yt− p+1 + u t , it has the
following MA representation:
                  
                  t
         yt =           u i + ∗ (L)u t + y0∗ ,
                   i=1

                                                   −1
                                               
                                                  , ∗ (L) = ∞          ∗ j
                                   p−1
where  = β⊥ α⊥        (I K − i=1 i )β⊥      α⊥                j=0  j L      is an
infinite-order polynomial in the lag operator with coefficient matrices ∗j that
go to zero as j → ∞. The term y0∗ contains all initial values. Notice that 
has rank K − r if the cointegrating rank of the system is r . It represents the
long-run effects of forecast error impulse responses, whereas the ∗j ’s contain
transitory effects.
    Because the forecast error impulse responses based on  and the ∗j ’s are
subject to the same criticism as for stable VAR processes, appropriate shocks
have to be identified for a meaningful impulse response analysis. If u t is replaced
by A−1 Bεt , the orthogonalized “short-run” impulse responses may be obtained
as ∗j A−1 B in a way analogous to the stationary VAR case. Moreover, the long-
run effects of ε shocks are given by

         A−1 B.                                                             (4.13)

This matrix has rank K − r because rk() = K − r and A and B are nonsingu-
lar. Thus, the matrix (4.13) can have at most r columns of zeros. Hence, there
can be at most r shocks with transitory effects (zero long-run impact), and at
least k ∗ = K − r shocks have permanent effects. Given the reduced rank of
the matrix, each column of zeros stands for only k ∗ independent restrictions.
Thus, if there are r transitory shocks, the corresponding zeros represent k ∗r in-
dependent restrictions only. To identify the permanent shocks exactly we need
k ∗ (k ∗ − 1)/2 additional restrictions. Similarly, r (r − 1)/2 additional contempo-
raneous restrictions identify the transitory shocks [see, e.g., King et al. (1991)].
Together these are a total of k ∗r + k ∗ (k ∗ − 1)/2 + r (r − 1)/2 = K (K − 1)/2
restrictions. Hence, assuming A = I K , we have just enough restrictions to iden-
tify B.
     For example, in King et al. (1991) a model is considered for the log of private
output (qt ), consumption (ct ), and investment (i t ). Using economic theory, King
et al. inferred that all three variables should be I(1) with r = 2 cointegration
relations and only one permanent shock. Because k ∗ = 1, the permanent shock
         Structural Vector Autoregressive Modeling                              169

is identified without further assumptions (k ∗ (k ∗ − 1)/2 = 0). For identification
of the transitory shocks, r (r − 1)/2 = 1 further restriction is needed. Suppose
a recursive structure of the transitory shocks is assumed such that the second
transitory shock does not have an instantaneous impact on the first one. Placing
the permanent shock first in the εt vector, these restrictions can be represented
as follows in the foregoing framework:
                   ∗    0   0                   ∗ ∗ ∗
         B =      ∗    0   0         and B =   ∗ ∗ 0 ,
                   ∗    0   0                   ∗ ∗ ∗
where asterisks denote unrestricted elements. Because B has rank 1, the two
zero columns represent two independent restrictions only. A third restriction is
placed on B, and thus we have a total of K (K − 1)/2 independent restrictions
as required for just-identification.
   In some situations A may also be specified differently from the identity
matrix. In any case, long-run restrictions imply in general nonlinear restrictions
on A, B, or both. To illustrate the process of deriving structural restrictions from
economic theory, we will discuss a more complex example next.

An example. Long-run identifying assumptions for the εt shocks are typically
derived from economic theory. To illustrate this point, we briefly describe a
simple macroeconomic model of the labor market used by Jacobson, Vredin &
Warne (1997) to investigate the effects of shocks to Scandinavian unemploy-
ment. This model consists of a production function, a labor demand relation, a
labor supply, and a wage-setting relation. All variables are expressed in natural
logarithms. The production function relates output gdpt to employment et as
follows:
         gdpt = ρet + θ1,t ,                                                 (4.14)
where ρ measures the returns to scale. The quantity θ1,t is a stochastic technol-
ogy trend that follows a random walk,
                            gdp
         θ1,t = θ1,t−1 + εt       ,
     gdp
and εt is the pure technology shock. Labor demand relates employment to
output and real wages (w − p)t :
         et = λgdpt − η(w − p)t + θ2,t ,                                     (4.15)
with an error process
         θ2,t = φd θ2,t−1 + εtd .
If |φd | < 1, the labor demand is stationary. In that case the pure labor demand
innovation εtd has only temporary effects on employment. Jacobson et al. (1997)
170       Jörg Breitung, Ralf Brüggemann, and Helmut Lütkepohl

assumed φd = 0 a priori, which implies that the labor demand shock has no
long-run effects. Within a cointegration analysis, stationarity of labor demand
can be tested; hence, the a priori assumption is not needed here. In the third
equation of the model, the labor force lt is related to real wages according to
          lt = π(w − p)t + θ3,t .                                                (4.16)
The exogenous labor supply trend θ3,t follows a random walk
          θ3,t = θ3,t−1 + εts ,
where εts is the underlying labor supply shock. Finally, we have the wage-setting
relation
          (w − p)t = δ(gdpt − et ) − γ (lt − et ) + θ4,t                         (4.17)
stating that real wages are a function of productivity (gdpt − et ) and unemploy-
ment (lt − et ). The wage setting trend θ4,t can be stationary or nonstationary,
as determined by φw in
          θ4,t = φw θ4,t−1 + εtw .
If |φw | < 1, the wage setting trend is stationary. Again, results from empirical
analysis can be used to determine whether wage setting is stationary.
    Under standard assumptions for the shocks ε gdp , ε d , ε s , and ε w the solution
of the model (4.14)–(4.17) in terms of the variables used in the empirical analysis
is given by
                                                                   
  gdpt − et        (1 − λ)(1 + γ π ) + ηγ              (ρ − 1)(1 + γ π)
                                                                   
     et         λ(1 + γ π ) − ηδ                      1 + γπ       
            = ψ                         θ1,t + ψ                    θ2,t
 l t − et       ηδ − λ + (1 − λ)π δ               (ρ − 1)δπ − 1 
  (w − p)t             λγ + δ(1 − λ)                     γ − δ(1 − ρ)
                                                                                 (4.18)
                                                                 
                          (ρ − 1)ηγ                      η(1 − ρ)
                            ηγ                           −η      
                                                                 
                 +ψ                      θ3,t + ψ                 θ4,t
                     1 − ρλ + (ρ − 1)δη            η + (1 − ρλ)π 
                          (ρλ − 1)γ                       1 − ρλ

with
                                  1
          ψ=                                        .
                (1 − ρλ)(1 + γ π ) + ηγ + (ρ − 1)ηδ
From this solution it is obvious that productivity, employment, unemployment,
and real wages are driven by two random walks in productivity and labor supply.
As explained earlier, the labor demand and the wage setting component can be
stationary or nonstationary. In terms of the common trends literature, there are
at least two and at most four common trends in this model. This implies at
         Structural Vector Autoregressive Modeling                            171

most two cointegration relations: a labor demand relation and a wage-setting
relation. The model together with results from a cointegration analysis implies a
set of identifying assumptions for the structural VECM. Suppose, for example,
that two cointegration relations (r = 2) have been found in a four-dimensional
VAR (K = 4) for productivity, employment, unemployment, and real wages.
Consequently, only k ∗ = K − r = 2 shocks may have permanent effects. We
associate the technology, the labor demand, the labor supply, and the wage-
setting shocks with the equations for productivity, employment, unemployment,
and real wages, respectively, such that εt = (εt , εtd , εts , εtw ) .
                                                gdp

    For stationarity of labor demand and wage-setting our model implies that
labor demand and wage-setting shocks have no long-run impact on the system
variables and, hence, the second and fourth columns of the long-run impact
matrix A−1 B are zero. To identify the two permanent shocks we have to
impose k ∗ (k ∗ − 1)/2 = 1 additional restriction. Assuming constant returns to
scale (ρ = 1) implies that productivity is only driven by productivity shocks
ε gdp in the long-run [see (4.18)]. Thus, if A = I K is assumed, these sets
of restrictions can be expressed as follows in terms of the long-run impact
matrix:
                 ∗ 0 0 0
              ∗ 0 ∗ 0
         B =           .
                ∗ 0 ∗ 0
                                                                           (4.19)
                ∗ 0 ∗ 0
Here unrestricted elements are again indicated by asterisks. Note that, owing to
the reduced rank of , we cannot simply count the zeros in (4.19) to determine
the number of restrictions imposed on the model. As explained at the beginning
of this section, the two zero columns represent k ∗r = 4 linearly independent
restrictions only. Hence, the zeros in (4.19) stand for only five linearly inde-
pendent restrictions. In addition, we need r (r − 1)/2 = 1 contemporaneous
restriction to disentangle the effects of the two transitory shocks. For instance,
we may choose the restriction that labor demand shocks do not affect real wages
on impact, that is, we set B42 = 0. In our example, a typical problem within
the SVAR modeling class arises: The theoretical model does not suggest con-
temporaneous restrictions, and thus, defending this type of restriction may be
difficult. In practice, a sensitivity analysis with respect to different contempo-
raneous identifying assumptions can be useful. We will employ the presented
theoretical model to derive identifying assumptions in a structural VECM for
Canadian labor market data in Section 4.7.3.
   To compute the impulse responses we need not only the reduced form pa-
rameters but also the structural parameters. How to estimate them will be dis-
cussed in the next section before we consider inference for impulse responses in
Section 4.5.
172       Jörg Breitung, Ralf Brüggemann, and Helmut Lütkepohl

4.4 Estimation of Structural Parameters

4.4.1 SVAR Models
The estimation of the SVAR model is equivalent to the problem of estimating
a simultaneous equation model with covariance restrictions. First, consider a
model without restrictions on the long-run effects of the shocks. It is assumed
that εt is white noise with εt ∼ N (0, I K ) and the basic model is a VAR( p); thus
the structural form is
          Ayt = A[A1 , . . . , A p ]Yt−1 + Bεt ,                                     (4.20)
                              
where Yt−1  = (yt−1  , . . . , yt− p ). If we define A = [A1 , . . . , A p ], the correspond-
ing reduced form is yt = AYt−1 + A−1 Bεt . Notice that the error term u t =
A−1 Bεt . Hence, for a sample y1 , . . . , yT , if we use the notation Y = [y1 , . . . , yT ]
and Z = [Y0 , . . . , YT −1 ], the log-likelihood function is
           l(A, A, B) = − KT
                           2
                             log 2π − T2 log |A−1 BB A −1 |
                           − T2 tr{(Y − AZ ) [A−1 BB A−1 ]−1 (Y − AZ )}
                                                                                     (4.21)
                       = constant + T2 log |A|2 − T2 log |B|2
                           − T2 tr{A B−1 B−1 A(Y − AZ )(Y − AZ ) }.
Here we have used the matrix rules |A−1 BB (A−1 ) | = |A−1 |2 |B|2 = |A|−2 |B|2
and tr(VW) = tr(WV) for matrices V and W with suitable dimensions. If there
are no restrictions on A, we know from Chapter 3, Section 3.3.1, that for any
given A and B the function l(A, A, B) is maximized with respect to A by Â =
YZ (ZZ )−1 . Substituting this expression in (4.21) gives the concentrated log-
likelihood
                                   T             T
          lC (A, B) = constant + log |A|2 − log |B|2
                                   2             2
                          T               u ),
                       − tr(A B−1 B−1 A                                 (4.22)
                          2
where  u = T −1 (Y − ÂZ )(Y − ÂZ ) is just the estimated covariance matrix
of the VAR residuals [cf. Breitung (2001)].
   It is easy to extend this approach to the case in which deterministic terms
are present in the original model. Moreover, the same concentrated likelihood
function is obtained if there are restrictions for A, for example, if a subset
                                                                     u by the
model is fitted. In this case, theoretically we just have to replace 
residual covariance matrix of the restricted ML estimator of the reduced form.
For practical purposes, the exact ML estimator is usually not used, however,
because its computation requires the use of nonlinear optimization methods in
general. Instead, the feasible GLS estimator, which has the same asymptotic
         Structural Vector Autoregressive Modeling                          173

properties as the ML estimator may be used. In that case, (4.22) is not strictly
the concentrated log-likelihood, however. For simplicity we still refer to this
function as the concentrated log-likelihood.
   The function (4.22) is maximized with respect to A and B subject to the
restrictions resulting from the structural form of the system, which for the
AB-model can be written compactly as
                               
            vec A        RA 0     γA       r
                    =                  + A .                             (4.23)
            vec B        0 RB     γB       rB
Because no closed form solution is available, this has to be done by employing
numerical optimization methods. For this purpose, Amisano & Giannini (1997)
have suggested using a scoring algorithm. More precisely, estimates for γA and
γB are found by iterating on
                                −1   
           γ̃A          γ̃            γ̃A              γ̃A
                   = A +I                      S             ,
           γ̃B i+1      γ̃B i         γ̃B i            γ̃B i

where  is the step length, I(·) denotes the information matrix of the free
parameters γA and γB , S(·) is the score vector, and the subscript refers to the
iteration number from which the signified estimator is obtained. If we use
                            
                       vec A
                  I
                       vec B
                        −1 −1            
                         [B A] ⊗ B−1
                  =T                        (I K 2 + K KK )
                          −(I K ⊗ B−1 )
                                                            
                           −1 −1       −1 .
                                            .             −1
                    × ([B A] ⊗ B ) . − (I K ⊗ B )

with KKK being a (K 2 × K 2 ) commutation matrix defined such that for any
(K × K ) matrix M, vec(M  ) = K KK vec(M), the information matrix for the
free parameters can be shown to be
                                          
              γA         RA 0        vec A      RA 0
         I           =           I                      .
              γB          0 RB      vec B       0 RB
The score vector for the free parameters is given by
                                      
              γA          RA 0          vec A
        S            =            S               ,
              γB           0 RB        vec B

where we have used
                                    
             vec A       (I K ⊗ B−1 )
        S            =                     S(vec[B−1 A])
             vec B      −(B−1 A ⊗ B−1 )
174         Jörg Breitung, Ralf Brüggemann, and Helmut Lütkepohl

and
                                                    u ⊗ I K )vec(B−1 A).
            S(vec[B−1 A]) = T vec([B−1 A]−1 ) − T (
Although straightforward in theory, sometimes the optimization turns out to be
difficult in practice, and the choice of appropriate starting values is crucial.
   Identification of the SVAR models is often checked numerically using the
starting values for γA and γB . As noted by Christiano, Eichenbaum & Evans
(1999), in some cases the signs of the elements in A and B are not identified
even if the usual order criterion for identification is met. They have suggested
normalizing the sign so that the contemporaneous impact matrix A−1 B will
have positive diagonal elements.
   Iteration of the algorithm stops when some prespecified criterion, such as the
relative change in the log-likelihood and the relative change in the parameters,
is met. The resulting ML estimator is asymptotically efficient and normally
distributed, where the asymptotic covariance matrix is estimated by the inverse
of the information matrix. Moreover, an ML estimator for u is given by
            u∗ = Ã−1 B̃B̃ Ã−1 ,
                                                                                   (4.24)

where Ã and B̃ are estimators of A and B, respectively. Note that     u∗ only
                                           
corresponds to the reduced-form estimate u if the SVAR is exactly identified.
In the presence of over-identifying restrictions, an LR test statistic for these
restrictions can be constructed in the usual way as
                         u∗ | − log |
            LR = T (log |            u |).                                        (4.25)
This statistic has an asymptotic χ 2 -distribution with degrees of freedom equal
to the number of over-identifying restrictions. In the AB-model this is the num-
ber of constraints imposed on A and B minus 2K 2 − K (K + 1)/2 = K 2 +
K (K − 1)/2.
    At times a priori information on the effects of structural shocks is available
that specifies the structural long-run impact matrix  to be lower triangular.
Examples in the literature include Blanchard & Quah (1989) and Galı́ (1999).
As discussed in Section 4.3, in a stationary VAR model these restrictions can be
imposed by restricting the elements above the main diagonal of  to zero. Esti-
mation is particularly easy in this case. For the computation of the structurally
identified impulse responses it is sufficient to estimate the contemporaneous
impact matrix C = A−1 B. We note that the long-run impact matrix of structural
shocks  can be related to by the contemporaneous impact matrix C,
            =       C,
such that
              =        u   


                  = (I K − A1 − · · · − A p )−1 u (I K − A1 − · · · − Ap )−1 .
         Structural Vector Autoregressive Modeling                              175

Because  is assumed to be lower triangular, it can be obtained from a Choleski
decomposition of the matrix
         (I K − A1 − · · · − A p )−1 u (I K − A1 − · · · − Ap )−1 .
Replacing the unknown quantities with estimates, we find that C can be esti-
mated by
         Ĉ = ˆ −1 
                   ˆ = ˆ −1 chol[ ˆ 
                                    ˆ u ˆ  ].

It must be emphasized that this estimation procedure works only in station-
ary VAR models because (I K − A1 − · · · − A p )−1 does not exist otherwise.
Moreover, this procedure can only be used to estimate models that are ex-
actly identified. Although this case can be seen as a fairly special model, it is
sometimes useful to have a closed-form solution for estimating the structural
parameters. Section 4.7 illustrates the use of different estimation techniques.
   Generally, if not otherwise mentioned, the procedures described in this sec-
tion are also applicable if some or all of the variables have unit roots and a
levels VAR model is fitted without taking possible cointegration restrictions
into account.


4.4.2 Structural VECMs
For VECMs the concentrated likelihood function (4.22) can also be used for
estimating the structural parameters A and B. If no restrictions are imposed on the
short-run parameters, the  u matrix represents the residual covariance matrix
obtained from a reduced rank regression as described in Chapter 3, Section
3.3.2. If the short-run parameters are restricted or restrictions are placed on
the cointegration vectors, some other estimator may be used instead of the ML
estimator, and u may be estimated from the corresponding residuals.
   Generally, if long-run identifying restrictions have to be considered, maxi-
mization of (4.22) is a numerically difficult task because these restrictions are
typically highly nonlinear for A, B, or both. In some cases, however, it is possible
to express these long-run restrictions as linear restrictions, and maximization
can be done using the scoring algorithm defined above. In particular, consider
a cointegrated VECM where A = I K . Then restrictions that some shocks have
no long-run impact on the system variables can be written in implicit form as
         R vec(B) = 0,
where R is an appropriate restriction matrix. Following Vlaar (1998) in using
the rules of the vec operator, we can reformulate these restrictions as
         R (I K ⊗ )vec(B) = RB,l vec(B) = 0.
Replacing  by an estimator obtained from the reduced form, we obtain R̂B,l =
R (I K ⊗ ),
          ˆ which is a stochastic restriction matrix. These implicit restrictions
176      Jörg Breitung, Ralf Brüggemann, and Helmut Lütkepohl

can be translated into the explicit form used in the maximization procedure of
the SVECM and, moreover, can be combined with contemporaneous restrictions
on the elements of B in the form vec(B) = RB γB . It is worth noting that this
method also works if there are more restrictions on the structural parameters
than necessary for exact identification. In other words, the method may be
applied for over-identified models, and the validity of these restrictions may be
tested using the LR test statistic given in (4.25).


4.5 Statistical Inference for Impulse Responses

4.5.1 Asymptotic Estimation Theory
If an estimator θ̂ of the SVAR or SVECM coefficients summarized in the vector θ
is available, estimators of the impulse responses may be obtained as functions of
θ̂. Formally, we write for some arbitrary impulse response coefficient φ = φ(θ),
and thus
         φ̂ = φ(θ̂).                                                        (4.26)
If θ̂ has an asymptotic normal distribution,
           √             d
             T ( θ̂ − θ) → N (0, θ̂ ),                                     (4.27)
the φ are also asymptotically normally distributed,
         √             d
            T (φ̂ − φ) → N (0, σφ̂2 ),                                      (4.28)

where
                  ∂φ        ∂φ
         σφ̂2 =      
                        θ̂                                                 (4.29)
                  ∂θ        ∂θ
and ∂φ/∂θ denotes the vector of first-order partial derivatives of φ with respect
to the elements of θ. The limiting result in (4.28) holds if σφ̂2 is nonzero, which
in turn is guaranteed if  θ̂ is nonsingular and ∂φ/∂θ = 0. Note that the covari-
ance matrix  θ̂ may be singular if there are constraints on the coefficients or,
as mentioned in Chapter 3, if there are I(1) variables. The partial derivatives
will also usually be zero in some points of the parameter space because the
φs generally consist of sums of products of the VAR coefficients; hence, the
partial derivatives will also be sums of products of such coefficients, which
may be zero. Nonzero partial derivatives are guaranteed if all elements of θ are
nonzero. In other words, fitting subset VAR models where all the coefficients
are restricted to zero that are actually zero helps to make the asymptotics work.
Of course, in practice which coefficients are zero is usually unknown. There-
fore, fitting subset models as described in Chapter 3, Section 3.4.5, may be a
good idea.
          Structural Vector Autoregressive Modeling                                177

4.5.2 Bootstrapping Impulse Responses
In applied work, statistical inference regarding impulse responses is often based
on bootstrap methods. In particular, they are frequently used to construct con-
fidence intervals (CIs) for impulse responses because, in this way, more reli-
able small sample inference is occasionally possible than by using asymptotic
theory [e.g., Kilian (1998)]. Moreover, the analytical expressions of the asymp-
totic variances of the impulse response coefficients are rather complicated [e.g.,
Lütkepohl (1991, Chapter 3)]. If the bootstrap is used for setting up CIs, the pre-
cise expressions of the variances are not needed; hence, deriving the analytical
expressions explicitly can be avoided.
      Alternative bootstrap approaches have been proposed for setting up CIs for
impulse responses. They use residual-based bootstraps that proceed as follows:
First the model of interest is estimated. If the estimation residuals are denoted by
                                    ¯ . . . , û T − û,
û t , centered residuals, û 1 − û,                ¯ are computed and bootstrap resid-
          ∗           ∗
uals, u 1 , . . . , u T , are generated by randomly drawing them with replacement
from the centered residuals. The u ∗t ’s are used to compute bootstrap time series
recursively starting from given presample values y− p+1 , . . . , y0 for a model with
p lags. The model is reestimated and the quantities of interest are determined
on the basis of the parameter estimates obtained in this way. Repeating these
steps many times gives the empirical bootstrap distribution of the quantities of
interest. From that distribution, quantiles, and hence CIs, may be obtained for
the impulse responses.
      In the following, the symbols φ, φ̂, and φ̂ ∗ denote some general impulse
response coefficient, its estimator implied by the estimators of the model coef-
ficients, and the corresponding bootstrap estimator, respectively. The following
bootstrap CIs have, for instance, been considered in the literature [see, e.g.,
Benkwitz, Lütkepohl & Wolters (2001)]:

• Standard percentile interval
  The most common method in setting up CIs for impulse responses in practice
  is to use the interval
                                
         CI S = sγ∗/2 , s(1−γ
                         ∗
                              /2) ,

  where sγ∗/2 and s(1−γ
                      ∗
                         /2) are the γ /2- and (1 − γ /2)-quantiles, respectively,
  of the empirical distribution of the φ̂ ∗ . The interval CI S is the percentile
  confidence interval described, for example, by Efron & Tibshirani (1993).
• Hall’s percentile interval
  Hall (1992) presents the usual bootstrap analogy stating that the distribution
  of (φ̂ − φ) is approximately equal to that of (φ̂ ∗ − φ̂) in large samples. From
  this result, the interval
                                             
                         ∗               ∗
         CI H = φ̂ − t(1−γ   /2) , φ̂ − tγ /2
178       Jörg Breitung, Ralf Brüggemann, and Helmut Lütkepohl

  can be derived. Here tγ∗/2 and t(1−γ∗
                                           /2) are the γ /2- and (1 − γ /2)-quantiles,
  respectively, of the empirical distribution of (φ̂ ∗ − φ̂).
• Hall’s studentized interval
  In some situations, using a studentized statistic (φ̂ − φ)/(        var(φ̂))1/2 for con-
  structing confidence intervals may be advantageous. In that case, bootstrap
  quantiles tγ∗∗/2 and t1−γ
                        ∗∗                                       ∗
                            /2 from the distribution of (φ̂ − φ̂)/(        var(φ̂ ∗ ))1/2 are
  used to construct an interval
                                                                         
                           ∗∗
         CI SH = φ̂ − t(1−γ         var(φ̂))1/2 , φ̂ − tγ∗∗/2 (
                               /2) (                          var(φ̂))1/2 .

   In this approach the variances are estimated by a bootstrap within each boot-
   strap replication.

    Several refinements and modifications of these intervals exist. Unfortunately,
the bootstrap does not necessarily overcome the problems due to a singularity in
the asymptotic distribution that results from a zero variance in (4.28). In other
words, in these cases bootstrap CIs may not have the desired coverage even
asymptotically. For a critical discussion, see Benkwitz, Lütkepohl & Neumann
(2000).
    At least three possible strategies are available to overcome the problems re-
sulting from the different rates of convergence in the parameter space. First,
one may consider bootstrap procedures that adjust to the kind of singularity in
the asymptotic distribution. Some different proposals of this kind are discussed
in Benkwitz et al. (2000). For instance, subsampling may be used to estimate
the convergence rate of the parameter estimators in addition to the model pa-
rameters. These and other methods were shown to have drawbacks, however,
in empirical applications. Either they are not very practical for processes of
realistic dimension and autoregressive order or they do not perform well in
samples of typical size.
    A second possibility for tackling the singularity problem is to single out
and eliminate the points at which problems occur before an impulse response
analysis is carried out. In the present case this proposal amounts to determining
all zero coefficients in a first stage of the analysis and enforcing the resulting zero
restrictions in the next stage, where the resulting subset model is estimated and
used for computing impulse responses. This solution is, for instance, considered
by Benkwitz et al. (2001). A possible problem in this approach is the uncertainty
with respect to the actual zero restrictions.
    A third way out of the singularity problem is to consider a different
type of modeling approach based on the assumption of a potentially infi-
nite VAR order. In this approach it is assumed that the model order is in-
creased when more sample information becomes available. In other words, the
model order is assumed to approach infinity with the sample size at a suitable
rate. An asymptotic theory has been developed by Lütkepohl (1988, 1996),
         Structural Vector Autoregressive Modeling                                179

Lütkepohl & Poskitt (1991, 1996b), Lütkepohl & Saikkonen (1997), and
Saikkonen & Lütkepohl (1996, 2000a) based on work by Lewis & Reinsel
(1985) and Saikkonen (1992). It turns out that this asymptotic theory avoids
the kind of singularity in the asymptotic distribution that causes the failure of
the bootstrap procedures. On the other hand, the greater generality of the model
results in an inefficiency relative to the model with finite fixed order. In practice,
using subset models may be the preferred solution.


4.5.3 An Illustration
To illustrate the use of an impulse response analysis for studying the relations
between the variables of a model, we consider again the German interest rate–
inflation system of Chapter 3. We use the subset VECM (3.41) to account for the
problems related to the construction of bootstrap confidence intervals for the
impulse responses. Because no instantaneous residual correlation was found
in testing for instantaneous causality, it may be reasonable for this system to
consider the forecast error impulse responses. In other words, our shocks are
identified by assuming that the reduced-form residuals are instantaneously un-
correlated. We plot the impulse responses in Figure 4.1 together with bootstrap
confidence intervals obtained using the three methods just mentioned. The stan-
dard and Hall confidence intervals are based on 2,000 bootstrap replications,
and the studentized Hall intervals are based in addition on 50 replications for
estimating the variances v   ar(φ̂ ∗ ) in each of the outer replication rounds. As a
consequence, the latter CIs are rather demanding computationally. The boot-
strap literature suggests that the number of bootstrap replications has to be
quite large in order to obtain reliable results. In the present case it is therefore
questionable if 2,000 replications are adequate. One way to check this would
be to simulate CIs with increasing numbers of replications and to determine
whether an increase of the number of replications leads to changes in the CIs.
For the present example, similar results are also obtained with smaller num-
bers of replications such as 1,000. Therefore, using 2,000 replications may be
sufficient.
    In this particular case all three methods for computing CIs produce qualita-
tively similar results. Both variables react permanently to a one-time impulse
in their own residuals. Also they both have an impact on each other. Notice that
the cointegrating rank r = 1. Hence, there can be at most one transitory shock.
Because we do not need such a restriction for identification and therefore do
not impose it, it should not come as a surprise that both shocks have permanent
effects. The feedback relation reflected in the impulse responses of our final
model was not seen as clearly in a Granger-causality analysis in Chapter 3. It
produced much weaker evidence for a feedback relation. One of the problems
in this kind of analysis is that a lack of sample information may make it difficult
to produce clear results in relatively unrestricted models.
180      Jörg Breitung, Ralf Brüggemann, and Helmut Lütkepohl

    To illustrate this point we also provide the impulse responses of an unre-
stricted VAR(4) model for the two variables of interest in the lower part of
Figure 4.1. Given the size of the CIs, the reactions of the variables are much
less clear in this experiment than in the restricted subset VECM. In particular,
because no cointegration restrictions have been imposed, the long-run reactions
of the variables to impulses to the system are not very clear and may not even
be diagnosed to be permanent. Of course, it is important to keep in mind that
our modeling effort, including the specification of the cointegration relation, is
based on a statistical analysis that cannot produce definite results with certainty.
Therefore, some uncertainty remains about the adequacy of the restrictions we
have imposed on the final model (3.41). Consequently, the conclusions drawn
from the model also have some degree of uncertainty.

4.6 Forecast Error Variance Decomposition
Forecast error variance decompositions are also popular tools for interpreting
VAR models and VECMs. Recall that the h-step forecast error from a VAR
model is
         yT +h − yT +h|T = u T +h +       1 u T +h−1 + · · · +   h−1 u T +1

[see (3.46) in Chapter 3]. Expressing this error in terms of the structural inno-
vations εt = (ε1t , . . . , ε K t ) = B−1 Au t gives
         yT +h − yT +h|T = 0 εT +h + 1 εT +h−1 + · · · + h−1 εT +1 ,
where  j = j A−1 B. If we denote the ijth element of n by ψi j,n , the kth
element of the forecast error vector becomes
                               
                               h−1
        yk,T +h − yk,T +h|T =      (ψk1,n ε1,T +h−n + · · · + ψk K ,n ε K ,T +h−n ).
                                  n=0

Given that the εkt s are contemporaneously and serially uncorrelated and have
unit variances by construction, it follows that the corresponding forecast error
variance is
                    
                    h−1                              
                                                     K
          σk2 (h) =       2
                        (ψk1,n + · · · + ψk2K ,n ) =   (ψk2j,0 + · · · + ψk2j,h−1 ).
                    n=0                               j=1

The term (ψk2j,0 + · · · + ψk2j,h−1 ) is interpreted as the contribution of variable
 j to the h-step forecast error variance of variable k. This interpretation makes
sense if the εit s can be viewed as shocks in variable i. Dividing the preceding
terms by σk2 (h) gives the percentage contribution of variable j to the h-step
forecast error variance of variable k,
         ωk j (h) = (ψk2j,0 + · · · + ψk2j,h−1 )/σk2 (h).
Figure 4.1. Forecast error impulse responses of German interest rate–inflation system
based on subset VECM (3.41) (upper panel) and an unrestricted VAR(4) model (lower
panel).
182      Jörg Breitung, Ralf Brüggemann, and Helmut Lütkepohl




Figure 4.2. Forecast error variance decomposition of German interest rate–inflation
system based on subset VECM (3.41).


These quantities, computed from estimated parameters, are often reported for
various forecast horizons. Clearly, their interpretation as forecast error vari-
ance components may be criticized on the same grounds as structural impulse
responses because they are based on the latter quantities.
    In Figure 4.2, a forecast error variance decomposition of the German interest
rate–inflation system based on the subset VECM (3.41) from Chapter 3 is shown.
It is based on a Choleski decomposition of the covariance matrix. In Figure
4.2 it appears that the interest rate dominates the system to some extent. Its
forecast errors are largely attributable to own innovations whereas the forecast
errors of the inflation rate are partly determined by interest rate changes –
at least for longer term forecasts. This interpretation has to be viewed with
caution, however, because the forecast error variance components are computed
from estimated quantities and are therefore uncertain. Also, in the present case,
one may wonder whether the picture changes if the order of the variables is
interchanged. Recall that the forecast error variance decomposition is based
on the orthogonalized impulse responses for which the order of the variables
matters. Although the instantaneous residual correlation is small in our subset
VECM, it will have some impact on the outcome of a forecast error variance
          Structural Vector Autoregressive Modeling                                  183

decomposition. For the present example the impact is small, however. Therefore,
we do not show the result but encourage the reader to perform his or her own
analysis.


4.7 Examples
In this section we illustrate the use of SVAR models by applying the methods dis-
cussed in previous sections. We start with the simple IS–LM model considered
in Section 4.2 to illustrate the AB-model. Then we discuss the Blanchard–Quah
model as an example for using long-run restrictions for the effects of shocks
in the SVAR framework. The main emphasis in these two examples is on il-
lustrating specific SVAR issues. In the final example we consider a Canadian
labor market model and go through the different steps of an analysis in more
detail.


4.7.1 A Simple AB-Model
In the first example we follow Breitung (2000) and estimate the stylized IS–LM
model considered in Section 4.2 using U.S. macroeconomic time series. The
empirical model is a simple trivariate VAR that includes the log of real GDP
(qt ), a three-month interbank interest rate (i t ), and the log of the real monetary
base (m t ). Therefore the vector of time series variables is yt = (qt , i t , m t ) . We
use quarterly, seasonally adjusted data for the period from 1970Q1 to 1997Q4
from the Federal Reserve Economic Data (FRED) database maintained at the
Federal Reserve Bank of St. Louis. Investigating the trending properties reveals
evidence for a unit root in each of the three time series. As mentioned earlier,
the estimation procedure from Section 4.4.1 may be applied to a VAR model
fitted to the levels even if variables have unit roots; hence, possible cointegra-
tion restrictions are ignored. This is frequently done in SVAR modeling to avoid
imposing too many restrictions, and we follow that road here. The specifica-
tion of the reduced form in our analysis is the model used in Breitung (2000).
More precisely, the starting point of the analysis is a reduced-form VAR(4)
including a trend and a constant as deterministic terms. Using the first four ob-
servations as presample values, we have T = 108 observations for estimation.
Alternative reduced-form model specifications may be used for the subsequent
structural analysis. For instance, lag length criteria point to a smaller lag length
( p = 2 or p = 3), whereas results from residual autocorrelation tests indicate
a lag length of p = 6. We encourage the reader to explore these possibilities
as well. As mentioned before, the main purpose of our analysis is an illustra-
tion of the AB-model. Therefore, we do not consider alternative specifications
here.
    Using the reduced form VAR(4), we impose the just-identifying restrictions
discussed in Section 4.2 and estimate the structural parameters by means of
184      Jörg Breitung, Ralf Brüggemann, and Helmut Lütkepohl

the ML estimator considered in Section 4.4. The resulting structural parameter
estimates of the matrices A and B are given by
                                                                       
                                             0.0068      0       0
              1    −0.04 0
                                              (13.9)                   
                  (−0.25)
                                             0                        
         
    Ã =  −0.14     1            
                           0.73  and B̃ =            0.0087     0    ,
                                                         (14.5)         
           (−0.51)         (4.92)                                      
              0      0       1                    0        0    0.0056
                                                                     (14.7)

where we list asymptotic t-ratios in parentheses below the coefficient estimates.
It turns out that the estimated coefficient a12 is negative – and thus has the
wrong sign (â12 = −0.04) – but is statistically insignificant. The parameters
of the inverted money demand relation have the expected sign; however, the
coefficient for the output innovation (−0.14) is not significant at conventional
levels.
    Once the structural model has been identified and estimated, the effects of the
structural shocks εt can be investigated through an impulse response analysis.
The results of the impulse response analysis are often more informative than
the structural parameter estimates themselves. For this purpose, the estimated
contemporaneous impact matrix can be obtained from the ML estimates of the
structural parameters:
                                          
                      0.69 0.03 −0.02
                                          
          Ã−1 B̃ =  0.10 0.88 −0.42  × 10−2 .
                      0.00 0.00       0.56

   Figure 4.3 gives the responses (multiplied by 100) of the three system vari-
ables to the identified structural shocks together with 95% Hall bootstrap con-
fidence intervals based on 2,000 bootstrap replications. According to our esti-
mated SVAR model, an IS or spending shock (ε IS ) increases output immediately,
increases interest rates for about twelve quarters with a maximal response af-
ter two years, and gradually drives down real money holdings. These effects
are predicted by the IS–LM model. Moreover, an LM shock (ε LM ) leads to an
increase in the interest rate and a decrease in real money holdings as well as a
decrease of output for about three years. A positive money supply shock (ε m )
drives output down after roughly a year, which is at odds with economic theory.
Although this effect is only marginally significant, it might suggest that money
supply shocks are not appropriately captured by our stylized model. However,
this money supply shock leads to an immediate drop in the interest rate and
to a gradual increase of real money balances. This reaction is known as the
“liquidity effect” and has also been observed in more complex SVAR models.
This example demonstrates that even a very simple model produces results that
are largely in line with predictions of a basic IS–LM model.
         Structural Vector Autoregressive Modeling                                185


              εIS → q                        εLM → q                        εm → q




              εIS → i                        εLM → i                        εm → i




              εIS → m                            →m
                                               εLM                          εm → m




Figure 4.3. Responses of output (q), interest rate (i), and real money (m) in an IS–LM
model with 95% confidence intervals based on 2,000 replications of the Hall bootstrap.

4.7.2 The Blanchard–Quah Model
Our second example provides estimates for the Blanchard–Quah model intro-
duced in Section 4.3. Their model is a simple bivariate VAR model for the
growth rates of output and the unemployment rate Ut . The growth rate is mea-
sured as the first differences of log output denoted as Q t . Consequently,
yt = (Q t , Ut ) . We use quarterly U.S. time series data for the period between
1948Q2 and 1987Q4, as in the original study by Blanchard & Quah (1989).
The data are available from the data archive of the Journal of Applied Econo-
metrics [see data for Weber (1995)]. In the data set, the growth rate of output
is adjusted for a constant mean with a structural break at 1974Q1, whereas the
unemployment rate is adjusted for a linear time trend. ADF unit root tests for
both variables clearly reject the hypothesis of a unit root, indicating that both
series are stationary.
    Blanchard & Quah (1989) have identified aggregate demand shocks by as-
suming that they have merely transitory effects on the level of output. In contrast,
aggregate supply shocks may have permanent effects on Q t (see also Section
4.3). In other words, the vector of structural shocks εt = (εts , εtd ) is identified
by restricting the long-run effect of the demand shock εtd on output [i.e., the
(1,2)-element of the matrix ] to zero. This restriction implies a lower triangular
structure for  such that  ˆ can be obtained by a Choleski decomposition of the
long-run covariance matrix (see Section 4.4). Results from lag-length informa-
tion criteria suggest a VAR order of p = 2 and, apart from some nonnormality
in the residuals of the unemployment equation, a VAR(2) is a well-specified
186      Jörg Breitung, Ralf Brüggemann, and Helmut Lütkepohl


                            εs → Q                                        εd → Q




                            εs → U                                        εd → U




Figure 4.4. Responses of output and unemployment to supply and (negative) demand
shock based on an unrestricted VAR(8) with 95% Hall bootstrap confidence intervals
using 2,000 bootstrap replications.


model. Whereas the reader is invited to perform the following analysis based on
a VAR(2) specification, we follow Blanchard & Quah (1989) and use a VAR(8)
with a constant term to estimate the reduced-form model in order to replicate
the original results as closely as possible. Checking the t-values of the VAR(8)
reveals many insignificant coefficient estimates. Therefore a subset model may
be another alternative reduced-form model. Based on the unrestricted VAR(8),
we estimate the structural decomposition by computing the contemporaneous
impact matrix B as well as the identified total long-run impact matrix :
                                                                
                 0.075 −0.930                      0.519      0
                (0.270) (−7.02)           =  (4.29)            ,
          B̂ =                       and 
                 0.220 0.208 
                                                                           (4.30)
                                                   0.008 4.044
                  (3.18)   (2.98)                  (0.005)   (3.01)

where we give t-statistics based on 2,000 bootstrap draws in parentheses. The t-
statistics have been obtained using the standard bootstrap method from Section
4.5.2. These estimates suggest that supply shocks have a significant, positive
long-run effect on output, whereas the long-run effect of a (negative) demand
shock is restricted to zero.
   Figure 4.4 shows the implied impulse response functions for the Blanchard–
Quah example together with approximate 95% confidence intervals obtained
from Hall’s bootstrap method using 2,000 replications. Because we are inter-
ested in the effects of the structural shocks on the level of output, the first row
in Figure 4.4 shows the accumulated impulse responses for Qt which are the
responses of Q t . As already suggested by the estimate of ,   positive supply
         Structural Vector Autoregressive Modeling                              187


                             εs → Q                                          εd → Q




                             εs → U                                          εd → U




Figure 4.5. Responses of output and unemployment to supply and (negative) demand
shock based on a subset VAR model with 95% Hall bootstrap confidence intervals using
2,000 bootstrap replications.


shocks increase output in the long-run. The interval estimate indicates, how-
ever, that output does not react significantly to supply shocks for about one year
after the shock has occurred. Interestingly, a positive supply shock increases
unemployment for about one year before it returns to its initial level. The re-
sponse of output to a negative demand shock given in the upper-right panel of
Figure 4.4 represents the identifying long-run restriction imposed. After first
decreasing, output returns to its initial level after about two years. Similarly,
unemployment goes up, reaching its peak one year after the shock has occurred,
and then returns to its equilibrium level. Overall, the results seem compatible
with the usual interpretation of demand and supply effects.
   Just to illustrate the impact of imposing subset restrictions on the present
model, we have also determined estimates of B and  based on a subset model
obtained using the sequential selection procedure in conjunction with the AIC
described in Section 3.4.5. The resulting estimates are
                                                                     
                    0.129 −0.896                      0.507      0
                (0.55)            
                             (-10.0)
                                          =  (6.63)                   .
          B̂ =                      and 
                 0.199       0.214            0.990           2.842
                    (3.23)    (4.31)                  (1.09)   (4.69)


Although these estimates are somewhat different from those in (4.30), the cor-
responding impulse responses shown in Figure 4.5 do not look very different
from those in Figure 4.4. In the latter figure the confidence intervals are a bit
wider in general, however. Thus, imposing subset restrictions may result in
188      Jörg Breitung, Ralf Brüggemann, and Helmut Lütkepohl




                             gdp − e                                      e




                             U                                            w−p

Figure 4.6. Canadian labor market time series, 1980Q1–2000Q4.


more precise estimates of the impulse responses provided, of course, that the
subset restrictions are valid.


4.7.3 An SVECM for Canadian Labor Market Data
In this section, we use the theoretical framework considered in Section 4.3.2
to identify macroeconomic shocks to the labor market within a VECM for
Canadian data. In particular, the empirical VAR model is specified for labor
productivity, employment, unemployment rate, and real wages. In our analysis
we use quarterly, seasonally adjusted data for Canada constructed from data
obtained from the OECD database for the period from 1980Q1 to 2000Q4.
Productivity (gdp − e) is constructed by subtracting the log of employment (e)
from the log real GDP (gdp), U denotes the unemployment rate, and w − p is
the log of a real wage index. The time series vector used in our analysis is thus
given by
         yt = [(gdpt − et ), et , Ut , (wt − pt )] ,
and we show the time series plots in Figure 4.6.
   The time series for productivity, employment, and real wages clearly show
upward trending behavior. Although this upward trend cannot be observed in
the unemployment series, none of the four time series look stationary. There-
fore, we conduct ADF unit root tests in a first step before proceeding with the
reduced-form model specification. The unit root test results are summarized
in Table 4.1. Given the shape of the time series in Figure 4.6, we include a
constant and a deterministic time trend in the test regressions for gdp − e, e,
and w − p. Accordingly, we only use a constant when testing for a unit root in
           Structural Vector Autoregressive Modeling                                   189

Table 4.1. Augmented Dickey–Fuller unit root tests for Canadian data

                 Deterministic                    Test                Critical values
Variable         terms               Lags        value       1%             5%        10%
gdp − e          constant,trend      2         −1.99         −3.96        −3.41     −3.13
(gdp − e)       constant            1         −5.16∗∗∗      −3.43        −2.86     −2.57
e                constant,trend      2         −1.91         −3.96        −3.41     −3.13
e               constant            1         −4.51∗∗∗      −3.43        −2.86     −2.57
U                constant            1         −2.22         −3.43        −2.86     −2.57
U               —                   0         −4.75∗∗∗      −2.56        −1.94     −1.62
(w − p)          constant,trend      4         −2.05         −3.96        −3.41     −3.13
(w − p)         constant            3         −2.62∗        −3.43        −2.86     −2.57
(w − p)         constant            0         −5.60∗∗∗      −3.43        −2.86     −2.57
Note: Critical values from Davidson & MacKinnon (1993, Table 20.1).


unemployment. As the number of lagged differences included in the Dickey–
Fuller test, we use values suggested by the AIC criterion when employing a
maximum lag order of pmax = 8. Given the test results in Table 4.1, unit roots
cannot be rejected in the levels of all four variables. To test for unit roots in the
first differences of our variables, we include a constant in the test regression of
(gdp − e), e and (w − p) and no deterministic terms in the equation for
U . Moreover, compared with the level test regressions, the number of lagged
differences is decreased by one. These specifications are obtained by taking first
differences of the levels model. The unit root hypothesis is rejected at the 1%
level for the first differences of productivity, employment, and unemployment,
whereas for (w − p) it can only be rejected on the 10% level. The conclusions
of the ADF test for productivity, employment, and the unemployment rate are
quite clear and are not sensitive to the choice of the lag length. The test statistic
for the real wages, however, is only slightly larger than the 10% critical value,
but varying the number of lagged differences (e.g., to 0, 1, or 2) in the test
regressions leads to the rejection of a unit root at the 1% level. As an example,
we included the test result for the specification with no lagged differences as
suggested by the SC. Overall, the results in Table 4.1 suggest that gdp − e, e,
U , and w − p can be treated as I(1) variables.
    Given the integration and trending properties of the time series, cointegration
between the four variables is possible. Therefore, the next step in our analysis
is the specification of an initial, unrestricted VAR model that forms the basis
for systems cointegration tests as discussed in Chapter 3. For this purpose we
employ information criteria to select the lag length of a VAR specification, in-
cluding a constant and a deterministic trend. If we choose a maximum lag order
of pmax = 8, AIC and FPE suggest p = 3, HQ proposes p = 2, and SC chooses
p = 1. For all the suggested lag lengths, we conduct a series of diagnostic tests.
   190        Jörg Breitung, Ralf Brüggemann, and Helmut Lütkepohl

Table 4.2. Diagnostic tests for VAR(p) specifications for Canadian data

              Q 16               Q ∗16         FLM5            LJB4             LJB4L    MARCH L M (5)
p=3      174.0 [0.96]       198.0 [0.68]    0.99 [0.51]     8.63[0.37]     9.67 [0.29]   512.0 [0.35]
p=2      209.7 [0.74]       236.1 [0.28]    1.20 [0.16]     3.23[0.92]     2.28 [0.97]   528.1 [0.19]
p=1      233.5 [0.61]       256.9 [0.22]    1.74 [0.00]     9.71[0.24]     9.92 [0.27]   570.1 [0.02]
   Note: p-values in brackets.


   In particular, we test against autocorrelation, nonnormality, and ARCH effects
   in the VAR residuals (see Chapter 3 for details on the diagnostic tests). We list
   the results for p = 1, 2, and 3 in Table 4.2. For p = 3 and p = 2, none of the
   diagnostic tests indicate signs of misspecification. The VAR(1) suggested by
   the SC criterion, however, shows some signs of residual autocorrelation and
   residual ARCH effects. Moreover, univariate Lomnicki–Jarque–Bera tests (re-
   sults not shown) indicate some signs of nonnormality for the employment and
   unemployment equation if p = 1 is used. Therefore, the lag length p = 1 seems
   too restrictive as an initial choice. Using the tools of stability analysis for p = 2
   and p = 3 reveals some signs of parameter non-constancy. In particular, some
   significant Chow tests, the visual inspection of recursive coefficients, and some
   large recursive residuals point to instability of some VAR model parameters.
   Although, in principle, it would be desirable to model these effects, we continue
   the analysis using a time-invariant VAR model.
       To test for cointegration we use, the VAR(2) and VAR(3) specifications. As
   deterministic terms, we include a constant and a linear trend. With p = 3, the
   Johansen cointegration test (see Section 3.4.2) rejects the null hypothesis of no
   cointegration at the 1% level. In contrast, the null of r = 1 cannot be rejected
   at conventional significance levels. Note, however, that the value of the test
   statistic is not too far away from the critical values. Nevertheless, formally, the
   Johansen test indicates a cointegrating rank of r = 1, and for illustration we
   proceed by assuming a cointegrating rank of r = 1. Against the background

   Table 4.3. Johansen cointegration tests for Canadian
   system

                     Test statistics                Critical values
   H0           p=3            p=2          90%          95%          99%
   r =0         84.92          86.12        58.96        62.61        70.22
   r =1         36.42          37.33        39.08        42.20        48.59
   r =2         18.72          15.65        22.95        25.47        30.65
   r =3          3.85           4.10        10.56        12.39        16.39
   Notes: Deterministic terms: constant and linear trend (restricted to long-
   run part). Critical values from Johansen (1995a, Table 15.4).
           Structural Vector Autoregressive Modeling                              191




Figure 4.7. Recursive eigenvalue (left) and T -test with 10% critical value (right) of
VECM with two lagged differences and r = 1.

of the theoretical model discussed in Section 4.3.2, which suggests up to two
cointegration relations, the reader is invited to perform a sensitivity analysis
using r = 2 as an alternative specification.
   We estimate a VECM based on the VAR(3) specification suggested by AIC
and FPE under the rank restriction r = 1, that is, we include two lags of the
differences of the variables. The diagnostic tests for this VECM do not indi-
cate signs of misspecification. Moreover, we show the recursive eigenvalues
and the corresponding T -tests in Figure 4.7. They do not give rise to concern
about instability of the model. Hence, we regard the VECM as an adequate
description of the data. Table 4.4 shows the Johansen ML estimate of the coin-
tegration relation β, where we have normalized the coefficient of real wages to
one. This cointegration vector may be interpreted as a stationary wage-setting
relation in which real wages are related to productivity and unemployment, as
in equation (4.17). Rewriting the vector in the form of a wage-setting relation
gives
           (w − p)t = −0.545(gdp − e)t + 0.013et − 1.727Ut + 0.709t + ect .
                                                                               (4.31)
Productivity enters the wage relation with the wrong sign, but this may be just a
consequence of including a linear trend in (4.31). This trend may be interpreted

Table 4.4. Cointegration vector and loading parameters for
VECM with two lagged differences and cointerating rank r = 1

       gdp − e       e               U         w− p      t

β̂    0.545         −0.013          1.727     1         −0.709
       (0.90)         (−0.02)        (1.19)                  (−2.57)
α̂    −0.012        −0.016          −0.009    −0.085
       (−0.92)        (−2.16)        (−1.49)   (−5.71)

Note: t-statistics in parentheses.
192       Jörg Breitung, Ralf Brüggemann, and Helmut Lütkepohl

as a proxy for productivity that picks up the effects of productivity increases.
The coefficient for employment is relatively small and insignificant. In line with
theoretical arguments, real wages are negatively related to unemployment, al-
though the coefficient is not significant at conventional levels. Hence, outsiders
may influence the wage-setting in Canada. The estimates of the adjustment
coefficients α support the interpretation of the cointegration vector as a wage
setting schedule. According to the significant loading estimates from Table 4.4,
excess real wages drive real wage growth down and also decrease employment
growth.
   Having specified the reduced form model, we now turn to the structural
analysis. The reader is encouraged to specify a satisfactory subset model for
the present data set. We continue our analysis based on a full VECM with two
lagged differences and cointegrating rank 1. For this purpose, we next discuss
the identification of shocks to the Canadian labor market.


Identification of labor market shocks. Recall from Section 4.3.2 that the vec-
tor of structural shocks is given by εt = (εt , εtd , εts , εtw ) . To derive the set of
                                              gdp

identifying assumptions, we make use of the theoretical labor market model
discussed in Section 4.3.2. If we let A = I K , we need 12 K (K − 1) = 6 lin-
early independent restrictions to just-identify the parameters in B. We have
k ∗ = K − r = 3 shocks with permanent effects in our VECM, whereas r = 1
shock merely has transitory effects. The cointegration analysis suggests that
the wage-setting relation is stationary. Accordingly, wage shocks ε w have no
long-run impact on the variables included in yt , which corresponds to four zero
restrictions in the last column of the identified long-run impact matrix B.
Owing to the reduced rank of B, this only imposes k ∗r = 3 linearly indepen-
dent restrictions. To identify the k ∗ = 3 permanent shocks, k ∗ (k ∗ − 1)/2 = 3
additional restrictions are necessary. If constant returns to scale are assumed,
productivity is only driven by technology shocks ε gdp in the long-run. These
restrictions are imposed by setting the elements (B)1 j , j = 2, 3, 4 equal to
zero. Because (B)14 = 0 is already imposed by the first set of restrictions,
only two additional linearly independent restrictions are provided by assuming
constant returns to scale. Consequently, one additional restriction is needed
for just-identification of the SVECM. Because the theoretical model does not
suggest an additional long-run restriction, we choose one contemporaneous re-
striction, that is, a zero restriction for B. As in Section 4.3.2, we assume that
labor demand shocks do not affect real wages on impact, that is, B42 = 0. In
Section 4.3.2 this restriction was needed to identify the two transitory shocks.
In the present empirical analysis, only one shock is transitory and consequently
no contemporaneous restrictions are needed to identify it. Here, the restric-
tion is used to identify the permanent shocks. Taken together, these identifying
assumptions are exactly identifying and correspond to the following structure
         Structural Vector Autoregressive Modeling                              193

on the contemporaneous impact matrix B and the identified long-run impact
matrix B:
             ∗ ∗ ∗ ∗                      ∗ 0 0 0
             ∗ ∗ ∗ ∗                      ∗ ∗ ∗ 0
         B=                   and B =                      .
              ∗ ∗ ∗ ∗                        ∗ ∗ ∗ 0
                                                                    (4.32)
              ∗ 0 ∗ ∗                         ∗ ∗ ∗ 0
Using the estimation procedure described in Section 4.4.2, we obtain the fol-
lowing estimates for the contemporaneous and long-run impact matrix:
                                                  
                  0.58      0.07 −0.15 0.07
               (5.94)      (0.61) (−0.66)  (0.92) 
               −0.12       0.26 −0.16 0.09 
                                                  
               (−1.72)     (4.15) (−0.88)  (2.12) 
        B̃ =                                                         (4.33)
               0.03 −0.27           0.01 0.05 
               (0.44) (−5.22)                     
                                    (0.09) (1.53)
                                                   
                  0.11        0      0.48 0.49
                    (0.73)                (0.74)     (5.99)

and
                                                          
                      0.79         0          0        0
                     (5.21)                             
               0.20            0.58      −0.49        0
                                                        
              (0.86)           (3.10)   (−0.85)        
         B =                                           .                  (4.34)
               −0.16          −0.34        0.14       0
               (−1.38)                                  
                              (−3.59)      (0.91)
                                                         
                −0.15           0.60      −0.25        0
                    (−0.84)      (3.59)   (−0.91)

In parentheses we provide bootstrapped t-values obtained using 2,000 boot-
strap replications. The estimated long-run effects of labor market shocks on
unemployment are given in the third row of (4.34). Note that, according to our
estimate, only labor demand shocks significantly decrease the unemployment
rate in Canada in the long-run. Conditional on the set of just-identifying restric-
tions, it is also possible to test further restrictions on the effects of structural
shocks. For instance, checking whether labor supply shocks have no long-run ef-
fects on unemployment corresponds to testing the hypothesis H0 : (B)33 = 0.
In our example, the corresponding LR test statistic has a χ 2 (1)-distribution and
is given by LR = 6.07 with a p-value = 0.014. Hence, the null hypothesis is
rejected on the 5% significance level. Using the estimates B̃ in (4.33), we may
also compute the responses to the structural shocks εt , which provide a more
informative picture of the dynamic effects of macroeconomic shocks to the
Canadian labor market.
   Figure 4.8 shows the responses of unemployment to a technology, a labor de-
mand, a labor supply, and a wage-setting shock together with 95% Hall bootstrap
confidence intervals based on 2,000 bootstrap replications. The point estimates
suggest that a technology shock (ε gdp ) drives unemployment down. However,
194      Jörg Breitung, Ralf Brüggemann, and Helmut Lütkepohl


                            εgdp → U                                      εd    U




                     h                                            h

                            εs → U                                        εw     U




                     h                                            h
Figure 4.8. Responses of unemployment to economic shocks with 95% Hall bootstrap
confidence intervals based on 2,000 bootstrap replications.



this effect is not significant either in the short-run or in the long-run. A labor
demand shock (ε d ) leads to a significant drop in unemployment reaching the
maximum effect after about one year. A positive labor supply (ε s ) shock has a
significant positive impact on unemployment for about two years. In the long-
run there is no significant effect of the labor supply shock, which is in line
with the bootstrap t-values of the estimated long-run impact matrix. Finally,
unemployment increases after a shock to wage-setting (εw ). This effect becomes
significant only about six quarters after the shock. In the long-run the response to
wage shocks is zero as imposed by our identifying assumption. Note, however,
that compared with responses to other shocks in the system, the reaction of
wages is relatively small. Overall, the impulse responses are in line with what
one would have expected from economic theory. Moreover, the adjustment to
a new labor market equilibrium takes about three to five years.
    To assess the relative importance of the identified labor market shocks, we
list for different horizons h the forecast error variance decomposition of un-
employment in Table 4.5. Clearly, according to our estimates, labor demand
shocks are the dominant source for Canadian unemployment. Even in the long-
run about 70% of the variation in the unemployment variable can be attributed
to the labor demand shocks. Although technology shocks are not important at
short horizons, they become more and more important as h increases. After
h = 48 periods, technology shocks explain a fraction of 12% of the variance
in unemployment. In contrast, wage-setting shocks are not an important source
for the determination of unemployment in the long-run. Note that this result
         Structural Vector Autoregressive Modeling                            195

Table 4.5. Forecast error variance decomposition
of Canadian unemployment

h         ε gdp       εd          εs          εw
 1        0.01        0.96        0.00        0.03
 4        0.01        0.78        0.21        0.01
 8        0.05        0.69        0.24        0.01
12        0.08        0.68        0.23        0.01
24        0.10        0.69        0.21        0.01
48        0.12        0.70        0.18        0.00



for the wage-setting shocks is implied by the identifying restrictions of the
shocks.
   As in every structural VAR analysis, the results may depend to some extent
on the specification of the reduced-form model and the choice of identifying
assumptions. Here, the main purpose was to illustrate the use of structural
VECMs. Therefore, we used only one specification. The reader is invited to
check the robustness of the results with respect to different reduced-form model
specifications and alternative identifying assumptions.


4.8 Conclusions
In this chapter tools for analyzing dynamic time series models have been dis-
cussed. If the dynamic interactions between the variables of a given system are
of interest, impulse response analysis can give useful insights. A major prob-
lem, however, is the identification of those innovations that actually reflect the
ongoings in the system. We have discussed how information from subject mat-
ter theory can be used to identify unique impulses that can be traced through
the system and may convey useful information on the relations of the variables.
Imposing such restrictions means considering structural VARs or VECMs. Fore-
cast error variance decompositions are alternative tools for a dynamic analysis.
They can also be based on structural VARs or VECMs.
   Although imposing structural restrictions resolves the nonuniqueness prob-
lem of the innovations, it may be worth remembering that Sims (1980) advocated
VAR models as alternatives to econometric simultaneous equations models be-
cause he regarded the identifying restrictions used for them as “incredible.”
Thus, structural VAR modeling may be criticized on the same grounds. Even if
the restrictions imposed are firmly based on some economic theory, they may
not truly reflect what goes on in the actual underlying system. Thus, all we can
hope for in an impulse response analysis is getting information on the question
of whether some theory or theoretical concept is compatible with the data or
rather whether the data can be interpreted in such a way as to reflect a specific
196      Jörg Breitung, Ralf Brüggemann, and Helmut Lütkepohl

theory. It is much harder to reject a specific theory on the basis of a VAR or
VECM analysis because, if the implications of the theory are not reflected in
the impulse responses, for instance, this can have various reasons. Not choosing
the identifying restrictions properly is only one source of possible error. Other
sources may be a wrong choice of variables, inappropriate data, or poor mod-
eling and estimation. Therefore, conclusions from analyzing a dynamic model
are conditional on several assumptions and choices of the analyst. These reser-
vations should be kept in mind and they should be a challenge for improving
one’s analysis.
5        Conditional
         Heteroskedasticity

Helmut Herwartz




5.1 Stylized Facts of Empirical Price Processes
Price processes observed at speculative markets such as foreign exchanges
or stock, bond, or commodity markets have been attracting a huge interest in
the academic world for decades. A particular time series model that has been
proven to approximate empirical (log) price processes quite accurately is the
random walk model [Fama (1965)]. According to this model the best forecast
of a future price is today’s price and, thus, the latter summarizes efficiently the
(publicly) available information for prediction. Although the concept of weak
market efficiency may also cover some degree of predictability of future price
changes [Campbell, Lo & MacKinlay (1997)], there is a wide consensus that
(log) speculative prices are nonstationary and, more precisely, show dynamic
properties in line with processes that are integrated of order one.
    Given nonstationarity of actual price processes, the statistical analysis mostly
concentrates on speculative returns. Changes of log speculative prices (com-
pounded returns) are typically not, or at most weakly, autocorrelated [Campbell
et al. (1997)]. Measured at some higher frequency, daily price variations, for
example, exhibit positive autocorrelation. Periods of higher and smaller price
variations alternate; empirical volatilities tend to cluster. The latter property is
easily found in the empirical autocorrelation function of squared returns. Thus,
although price processes are hardly predictable, the variance of the forecast error
is time dependent and can be estimated by means of observed past variations. As
a consequence of volatility clustering, it turns out that the unconditional distri-
bution of empirical returns is at odds with the hypothesis of normally distributed
price changes that had been put forth by Bachelier (1900) and was powerfully
rejected by Fama (1965). Yet, the phenomenon of time-varying volatility is
well known and has generated a vast body of econometric literature follow-
ing the seminal contributions by Engle (1982), Bollerslev (1986), and Taylor
(1986) introducing the (generalized) autoregressive conditionally heteroskedas-
tic ((G)ARCH) process and the stochastic volatility model, respectively. The

                                                                                197
198      Helmut Herwartz

former class of time series processes has been introduced briefly in Chapter 2
and will be discussed in more detail in the next section.
    Different price processes measured on financial markets are often contem-
poraneously related. For instance, stock prices of firms acting on the same
market may show similar patterns in the sequel of news important for the entire
market. Similarly, one observes relatedness of the worlds leading exchanges
[Engle, Ito & Lin (1990), King, Sentana & Wadhwani (1994)]. In addition to
these stylized facts one may also expect relatedness of speculative prices in the
light of economic theory. For instance, interest rate parities formalize a close
link between interest rates and foreign exchange rates. Long- and short-term
interest rates are also dependent. Therefore, one may regard the analysis of
financial market data within a system of related variables as a fruitful means of
improving the understanding of volatility dynamics. Moreover, a multivariate
framework allows modeling of time-depending patterns of covariances. In the
Capital Asset Pricing Model (CAPM) [Sharpe (1964), Lintner (1965)], the ratio
of the covariance between returns on a particular asset and the so-called market
portfolio and the variance of the latter measures the undiversifiable risk of the
asset. This ratio has become popular as the asset’s “beta,” and, if one regards
the market portfolio’s variance as depending on time, it is quite natural to make
allowance for time-varying covariances. Multivariate versions of the GARCH
model are considered in Section 5.3.
    This chapter will concentrate throughout on the class of GARCH models. As
another important approach to modeling time varying second order moments
the class of stochastic volatility models is not considered here. For detailed
reviews of the latter field the reader may consult Taylor (1986) or Shephard
(1996). More detailed surveys of GARCH models are offered, for instance, by
Bera & Higgins (1993), Bollerslev, Engle & Nelson (1994), Bollerslev, Chou
& Kroner (1992), Pagan (1996) and Palm (1996).


5.2 Univariate GARCH Models
Since its introduction, the univariate GARCH model has been applied in count-
less empirical studies. The GARCH(1,1) model has turned out to be particularly
useful for describing a wide variety of financial market data [Bollerslev et al.
(1994)]. Therefore, this chapter focuses mainly on this parsimonious specifi-
cation of conditional heteroskedasticity. This section will first briefly discuss
theoretical properties of GARCH models and thereby address most of the pre-
ceding issues, volatility clustering and forecasting, unconditional leptokurtosis,
and stationarity. The second part addresses estimation of GARCH specifications
and gives properties of the maximum likelihood estimator. Then, two directions
to extend the basic GARCH model motivated from empirical experiences, con-
ditional leptokurtosis, and asymmetry of volatility, will be considered. A few
remarks on diagnostic testing are also made.
           Conditional Heteroskedasticity                                                   199

5.2.1 Basic Features of GARCH Processes
Representation. A representation of the GARCH(q, p) model [Bollerslev
(1986)] has been given already in Chapter 2. Equivalently, a GARCH process
u t can be written as
           u t = ξt σt ,      ξt ∼ iid N (0, 1),                                           (5.1)
           σt2 = γ0 + γ1 u 2t−1 + γ2 u 2t−2 + . . . + γq u 2t−q + β1 σt−1
                                                                       2


                  + . . . + β p σt−
                                  2
                                    p                                                      (5.2)
               = z t θ.                                                                   (5.3)
Note that the case p = 0 in (5.2) covers the ARCH(q) process [Engle (1982)].
                                                                                         
In the compact notation (5.3), z t = (1, u 2t−1 , . . . , u 2t−q , σt−1
                                                                     2
                                                                        , . . . , σt−
                                                                                    2
                                                                                      p ) and the
                                                               
p + q + 1 vector θ = (γ0 , γ1 , . . . , γq , β1 , . . . , β p ) collects the parameters of
interest. The following are sufficient conditions for the conditional variances
σt2 to be positive:
           γ0 > 0,         γi , β j ≥ 0,         i = 1, . . . , q, j = 1, . . . , p.
Necessary as well as less restrictive sufficient conditions for σt2 > 0 can be
found in Nelson & Cao (1992). Using lag-polynomials, one may specify σt2 in
(5.2) as
           (1 − β1 L − . . . − β p L p )σt2 = γ0 + (γ1 L + . . . + γq L q )u 2t
                           ⇔ (1 − β(L))σt2 = γ0 + γ (L)u 2t .                              (5.4)
If the roots of the polynomial (1 − β(z)) are larger than 1 in absolute value, the
GARCH(q, p) process has an ARCH representation of infinite order:
           σt2 = (1 − β(L))−1 γ0 + (1 − β(L))−1 γ (L)u 2t                                  (5.5)
                            
                            ∞
               = γ0∗ +            γi∗ u 2t−i .                                             (5.6)
                            i=1


Volatility forecasting. Defining a zero-mean process as
           vt = u 2t − σt2 ,                                                               (5.7)
the GARCH(q, p) model yields a representation of squared observations u 2t ,
which is similar to the ARMA process introduced in Chapter 2, that is,
                            
                           max( p,q)                              
                                                                  p
           u 2t = γ0 +                 (γi + βi )u 2t−i + vt −           βi vt−i .         (5.8)
                             i=1                                   i=1

In (5.8) γi = 0, i > q, or βi = 0, i > p are set implicitly if q < p or p < q,
respectively. Although the error process vt can be shown to be uncorrelated, it
200       Helmut Herwartz

is still dependent with respect to higher order moments, thereby weakening the
analogy of the GARCH(q, p) and ARMA( p, q) model to some extent.
    Since the squared GARCH(q, p) process u 2t has an autoregressive represen-
tation, the corresponding conditional expectation σt2 is also autoregressive. The
latter argument is of particular importance for ex-ante forecasting of conditional
variances. For this issue, the following representation of σt2 is useful:
                         
                         ∞                   
                                             ∞
          σt2 = γ0∗ +           γi∗ σt−i
                                      2
                                         +         γi∗ vt−i .                 (5.9)
                          i=1                i=1

Since E[vT +h |T ] = 0, h > 0, the usual recursive forecasting formulas apply
to predict the mean of σT2 +h conditional on T , the set of information available
in time T .

Unconditional moments. Although the distribution of the basic model given in
(5.1) is conditionally normal, it turns out that the unconditional distribution of a
GARCH process is leptokurtic. In comparison with the normal distribution, the
unconditional distribution of u t shows higher mass around the zero mean and in
its tails. The latter result becomes evident from investigating the unconditional
moments of the GARCH process. To facilitate the presentation, consider the
GARCH(1,1) model. Then, applying the law of iterated expectations, we find
that the unconditional variance is

          E[u 2t ] = E[E[u 2t |t−1 ]]
                 = γ0 + γ1 E[u 2t−1 ] + β1 E[E[u 2t−1 |t−2 ]]
                 = (1 − γ1 − β1 )−1 γ0 .                                     (5.10)

Accordingly, one obtains E[u 2t ] = (1 − γ (1) − β(1))−1 γ0 for the general
GARCH(q, p) case. Along similar lines it can be shown that all odd order
moments of the GARCH(q, p) process are zero. Moreover, under conditional
normality the fourth-order moment of the GARCH(1,1) process is
                                 3γ02 (1 + γ1 + β1 )
          E[u 4t ] =                                            .            (5.11)
                       (1 − γ1 − β1 )(1 − β12 − 2γ1 β1 − 3γ12 )

Note that E[u 4t ] only exists if

          (β12 + 2γ1 β1 + 3γ12 ) < 1.

From the results in (5.10) and (5.11), the kurtosis of the GARCH(1,1) under
conditional normality is derived as
                 E[u 4t ]     3(1 − γ1 − β1 )(1 + γ1 + β1 )
          κ=                =                               .                (5.12)
                (E[u 2t ])2     (1 − β12 − 2γ1 β1 − 3γ12 )
          Conditional Heteroskedasticity                                              201

Under the parameter restrictions made for positivity of conditional variances
and existence of the fourth-order moment, it holds that κ > 3, indicating lep-
tokurtosis of u t . Note that it is essentially the ARCH-parameter γ1 that gov-
erns volatility clustering and leptokurtosis. In case γ1 = 0, the GARCH(1,1)
model is not identified (κ = 3), and for β1 = 0 excess kurtosis increases
with γ1 .

Stationarity. Nelson (1990) has provided a detailed discussion of stationar-
ity and ergodicity of the GARCH(1,1) process. In particular, σt2 and u t are
strictly stationary and ergodic if E[log(β1 + γ1 ξt2 )] < 0. Furthermore E[u t ] = 0
if E[(β1 + γ1 ξt2 )1/2 ] < 1. Imposing the stronger restriction E[β1 + γ1 ξt2 ] < 1,
we can show that E[u 2t ] = σ 2 < ∞ and u t is weakly (covariance) stationary.
Note that these moment conditions depend on the distribution of the innovations
ξt . Since the condition under which the GARCH(1,1) is strictly stationary is
weaker as the requirement for covariance or weak stationarity, it can happen that
a particular GARCH process is strictly stationary but fails to be weakly station-
ary. A prominent example for this case is the so-called integrated GARCH(1,1)
process [Engle & Bollerslev (1986)]:
           u t = σt ξt , ξt ∼ iid N(0, 1),
          σt2 = γ0 + γ1 u 2t−1 + β1 σt−1
                                      2
                                         , γ1 + β1 = 1.                            (5.13)
In the light of the apparent similarity between the IGARCH(1,1) model in (5.13)
and the familiar random walk model with deterministic drift, it is worthwhile to
stress that the dynamic properties of both specifications differ sharply. Whereas
the random walk is nonstationary, the variance process in (5.13) remains strictly
stationary and ergodic.


5.2.2 Estimation of GARCH Processes
To discuss maximum likelihood (ML) estimation of GARCH models, we as-
sume for the moment that a finite stretch of observations u t , t = 1, . . . , T is
available. In a more general context, GARCH-type disturbances could also ap-
pear on the right-hand side of (auto)regression models. In this case the GARCH
process will not be directly observable. For a wide variety of common empirical
models, however, the variance parameters can be estimated given some (con-
sistent) estimate of the conditional mean such that the methods outlined below
apply if estimation residuals û t replace the u t , t = 1, . . . , T . A few additional
remarks on this issue are given in Section 5.2.4.
    Specifying the joint density of u 1 , u 2 , . . . , u T makes use of its representation
as the product of some conditional and the corresponding marginal density.
Let UT −1 denote the sequence of random variables u 0 , u 1 , . . . , u T −1 . On the
assumption that u 0 is constant or is drawn from a known distribution, the joint
202      Helmut Herwartz

distribution of a finite stretch of observations from a GARCH process is
          f (u 1 , . . . , u T ) = f (u T |UT −1 ) · f (UT −1 )
                             = f (u T |UT −1 ) f (u T −1 |UT −2 ) · · · f (u 1 |U0 ) f (U0 ).
                                                                                           (5.14)
The conditional distributions in (5.14) are available from the definition of the
GARCH(q, p) process in (5.2). Then, the log-likelihood function is, conditional
on some initialization σ0 , given as
                                     
                                     T
         l(θ|u 1 , . . . , u T ) =         lt                                              (5.15)
                                     t=1

                                     T                                
                                           1          1          1 u 2t
                               =          − log(2π ) − log σt2 −          .                (5.16)
                                     t=1
                                           2          2          2 σt2
   Compared with the common case with independent random variables, the
ML estimator θ̂ cannot be obtained analytically but requires iterative optimiza-
tion routines. A particular optimization routine that is often used to estimate
the model in (5.2) is the BHHH algorithm named after Berndt, Hall, Hall &
Hausman (1974). According to this algorithm the ith step estimate is obtained as
                                              −1
                           T
                               ∂lt ∂lt **          T
                                                       ∂lt **
         θ̂i = θ̂i−1 + φ                *                   *     ,        (5.17)
                           t=1
                               ∂θ ∂θ  θ=θ̂i−1     t=1
                                                       ∂θ θ=θ̂i−1
where φ > 0 is used to modify the step length.
       √ regularity conditions [Davidson (2000)] the ML estimator θ̂ converges
    Under
at rate T and is asymptotically normally distributed, that is,
         √            d
           T (θ̂ − θ) → N (0, S −1 ),                                   (5.18)
where S is the expectation of the outer product of the scores of lt (θ),
                            
               T
                      ∂lt ∂lt
        S=        E             .
              t=1
                      ∂θ ∂θ 
   The log-likelihood function in (5.16) is determined under the assumption of
conditional normality stated in (5.1), which in turn was more ad hoc than based
on statistical or economic reasoning. In the empirical literature on GARCH pro-
cesses, it turned out that conditional normality of speculative returns is more
an exception than the rule. Therefore, issues arising for estimation and infer-
ence under conditional nonnormality have also attracted a large interest in the
theoretical literature on GARCH processes. Maximum likelihood estimation
in presence of leptokurtic innovations ξt will be sketched in Section 5.2.3. If
nonnormality of innovations ξt is ignored the log-likelihood function will be
misspecified. Maximizing the misspecified Gaussian log-likelihood function is,
         Conditional Heteroskedasticity                                        203

however, justified by quasi-maximum likelihood theory. Asymptotic theory on
properties of the QML estimator in univariate GARCH models is well devel-
oped. Consistency and asymptotic normality of the QML estimator have been
shown for a wide variety of strictly stationary GARCH processes, including the
IGARCH(1,1) process or even the mildly explosive specification with γ1 + β1
(slightly) exceeding unity [Bollerslev & Wooldridge (1992), Lumsdaine (1996),
Lee & Hansen (1994)]. If the normality assumption is violated, the covariance
matrix of the QML estimator is
          √            d
            T (θ̂ − θ) → N (0, D −1 S D −1 ),                           (5.19)
where D is the negative expectation of the matrix of second-order derivatives
                  2 
                     ∂ l
        D = −E             .                                            (5.20)
                   ∂θ ∂θ 
   Analytical expressions for the derivatives necessary to implement the BHHH
algorithm and a practical guide through (Q)ML estimation and inference are
given in Bollerslev (1986) and Fiorentini, Calzolari & Panattoni (1996).

5.2.3 Extensions
Asymmetry and leverage effects. As provided in (5.2), the GARCH model
is characterized by a symmetric response of current volatility to positive and
negative lagged errors u t−1 . Positive and negative innovations that are equal in
absolute value imply the same impact on the conditional variance σt2 . Since u t is
uncorrelated with its history, it could be interpreted conveniently as a measure
of news entering a financial market in time t. From the empirical literature
on returns of risky assets, it is known that future volatility of stock returns is
much more affected by negative compared with positive news [Black (1976)].
In the light of economic theory, such an effect might be explained via a firm’s
debt-to-equity ratio. Negative news will increase this measure and, thus, the
corresponding asset will be more risky. The described asymmetry in response
to market news has become popular as the so-called leverage effect, which is
obviously not captured by the basic GARCH process discussed so far.
    To allow for different impacts of lagged positive and negative innovations,
threshold GARCH (TGARCH) models have been introduced by Glosten, Ja-
gannathan & Runkle (1993) for the variance and by Zakoian (1994) for the
standard deviation. According to the former, the TGARCH(1,1) model takes
the following form:
         σt2 = γ0 + γ1 u 2t−1 + γ1− u 2t−1 I (u t−1 < 0) + β1 σt−1
                                                                2
                                                                   .        (5.21)
In (5.21), I (·) denotes an indicator function. The leverage effect is covered by
the TGARCH model if γ1− > 0.
   In addition to threshold specifications, many other parametric as well as non-
parametric volatility models have been designed to capture asymmetries in the
204      Helmut Herwartz

conditional variance. Engle & Ng (1993) and Hentschel (1995) have provided
comparative reviews on this issue. Nelson (1991) has proposed the exponential
GARCH model (EGARCH). Under conditional normality the EGARCH(1,1)
model reads as follows:

         log(σt2 ) = γ̃0 + γ̃1 (|ξt−1 | − E[|ξt−1 |]) + γ̃1− ξt−1 + β̃1 log(σt−1
                                                                              2
                                                                                 ).
                                                                                  (5.22)
                                         √
Note that under normality E[|ξt |] = 2/π . If γ̃1 > 0, the process in (5.22) is
convenient to generate volatility clustering. In addition, γ̃1− < 0 will deliver a
leverage effect. Owing to its specification in terms of log(σt2 ) the EGARCH
model has the advantage that, irrespective of the parameter values, conditional
variances will be positive throughout. As a particular drawback of the EGARCH
model, Engle & Ng (1993) have pointed out that, owing to the exponential
structure, the model may tend to overestimate the impact of outliers on volatility.

Conditional leptokurtosis. As it is often argued in empirical contributions,
the normal distribution specified in (5.1) is rarely supported by real data. The
normality assumption is often rejected for the estimated GARCH innovations
(ξ̂t ). As outlined in Section 5.2.2, QML estimation is consistent and provides
asymptotically valid distributional
                          √           results for the rescaled and centered vector
of parameter estimates T (θ̂ − θ) under suitable conditions. If an alternative
parametric distribution can reasonably be assumed, exact ML methods may
outperform QML estimation in terms of efficiency. ML estimation under mis-
specification of the (non-Gaussian) conditional distribution, however, may yield
inconsistent parameter estimates [Newey & Steigerwald (1997)].
     Moreover, if the normality assumption is violated it is no longer possible to
provide valid forecasting intervals for u T +h given T by means of quantiles of
the Gaussian distribution. To improve interval forecasting it pays to consider
a leptokurtic distribution of ξt . In addition to statistical aspects like interval
forecasting or efficiency excess, it is worthwhile to mention that conditional
leptokurtosis is an important feature that has to be taken into account for prac-
tical economic issues like derivative pricing [Duan (1995, 1999), Hafner &
Herwartz (2001a)] or Value-at-Risk evaluation [Jorion (2001)].
     Given the often apparent violation of conditional normality on the one hand
and uncertainty concerning the true underlying distribution of innovations ξt
on the other hand, Engle & Gonzalez-Rivera (1991) have proposed a semi-
parametric GARCH model in which the conditional distribution is left unspec-
ified. Parametric models covering conditional leptokurtosis require an appro-
priate distribution to be assumed explicitly. For instance, Bollerslev (1987) and
Nelson (1991) have advocated evaluating the sample log-likelihood under the
assumptions that innovations ξt follow a standardized t-distribution and a stan-
dardized general error distribution (GED), respectively. For given variance
         Conditional Heteroskedasticity                                              205

dynamics, leptokurtic innovations will, in comparison with normally distributed
innovations, strengthen the leptokurtosis of the unconditional distribution of a
GARCH process. Moreover, outlying observations are more likely to occur. The
implementation of GARCH models under the conditional t-distribution and the
GED is now briefly considered in turn.
GARCH  t- . A random variable u t is t-
distributed with v degrees of freedom, mean zero, and variance σt2 if it has
the following density:
                                     (   )                     −( v+1
                             v v/2  v+1               v · u 2t      2 )

          f (u t |θ, v) =            0 2
                                                  v+                     . (5.23)
                          √                   2      (v − 2)σt2
                            π ( v2 ) (v−2)σ
                                         v
                                             t


                                                            ∞
In (5.23), (.) denotes the Gamma function, (h) = 0 x h−1 exp(−x)d x, h >
0. Recall that for v → ∞, the density in (5.23) coincides with the Gaussian
density. The contribution of a single observation to the log-likelihood function is
         lt (θ, v) = log( f (u t |t−1 ))                                         (5.24)
                                                                      1              
                                                 v 
                                  v+1           √                          (v − 2)σt 
                                                                                    2
                  = log v v/2           − log  π 
                                   2                  2                        v
                                             
                       v+1           v · u 2t
                     −     log v +              .                                 (5.25)
                        2          (v − 2)σt2
Noting that σt2 = z t θ, we find that analytical scores of the log-likelihood
function are
                                                      −1
         ∂lt     1 1             v+1          v · u 2t
             =−          · z t +       v +
         ∂θ      2 σt2            2        (v − 2)σt2
                   v · u 2t
                 ×              · zt ,                                              (5.26)
                 (v − 2)σt4
                                                                
         ∂lt   12                      −1 v + 1           v+1
             =    log(v) + 1 +                        
         ∂v    2                                  2           2
                     v  v                                                      
                  −1                           1     1                    v · u 2t
               −                      −           + − log v +
                       2           2        v−2 v                        (v − 2)σt2
                                                 −1                      3
                                       v · u 2t                 2 · u 2t
               −(v + 1) v +                             1 −                     . (5.27)
                                   (v − 2)σt2               (v − 2)2 σt2
G   (GED). The discussion of the GARCH
process under generally distributed error terms is almost analogous to the lat-
ter case. According to this distribution, with shape parameter v, a zero-mean
206       Helmut Herwartz

random variable u t with variance σt2 has the following density:
                                 *       *                    −1
                                1 * u t **v             1
        f (u t |θ, v) = v exp − **
                                                  v+1
                                                2  v      λ · σ       ,       (5.28)
                                2 λ · σt *
                                                                 t
                                                        v
where λ is defined as
                           0.5
                 ( v1 )
        λ=        2              .                                             (5.29)
                2 v ( v3 )
In case v = 2, the density in (5.28) is equal to the N (0, σt2 ) density and the
distribution becomes leptokurtic if v < 2. For v = 1 (v → ∞) the GED coin-
cides with the (approximates the) double exponential (rectangular) distribution
[Harvey (1990)]. Under GARCH, the contribution of a single observation to
the sample log-likelihood and its analytical scores are given as
                              *       *                        $
                           1 * u t **v                         1      1
           lt = log(v) − **
                                                      v+1
                                          −   log   2  v          λ − log(σt2 ),
                           2 λ · σt *                          v      2
                                                                                (5.30)
                       *        *
          ∂lt          * u t *v 1                 1
              = 0.25v **        *       · zt −         · zt ,                   (5.31)
          ∂θ             λ · σt * σt2           2σt2
                         *        *  *              *         $
          ∂lt    1 1 ** u t **v              * ut *
                                             *        * − vλ
              = − *                  log
          ∂v     v    2 λ · σt *             *λ · σ *
                                                    t           λ
                                            $
                   1                         1          1         λ
                 + 2 log(2) +  −1                           − ,              (5.32)
                   v                         v          v         λ
where
                               2             
                       v−2      3               1
          λ = λ−1 2 2 v −2  −1    2 log(2)
                                v               v
                                    3
                     1       −1 3        3       1
                 −      + 3                    .
                      v           v       v       v


5.2.4 Blockdiagonality of the Information Matrix
So far ML estimation of variance dynamics has been discussed for an observed
GARCH process or estimates obtained from consistent first-step estimates for
the conditional mean equation. Separating the estimation of the conditional
mean on the one hand and volatility dynamics on the other is justified whenever
the information matrix of the underlying model is blockdiagonal with respect to
the parameters governing first- and second-order dynamics, respectively [Engle
(1982)]. Two prominent cases in which blockdiagonality of the information ma-
trix does not hold are the (auto)regression with EGARCH error terms and the
so-called (G)ARCH-in-mean model [Engle, Lilien & Robins (1987)] in which
         Conditional Heteroskedasticity                                           207

the conditional mean of some variable depends on the current state of volatility.
For the class of (auto)regression models with (T)GARCH disturbances, block-
diagonality of the information matrix holds if the distribution of the underlying
innovations ξt is not skewed, that is, E[ξt3 ] = 0 [Linton (1993), Lundbergh &
Teräsvirta (2002)].

5.2.5 Specification Testing
Apart from a visual inspection of the autocorrelation function of a squared (es-
timated) GARCH process, u 2t , t = 1, . . . , T , (û 2t ) formal tests of homoskedas-
ticity against the presence of ARCH-type variances are in widespread use. To
test the null hypothesis of a homoskedastic error variance, McLeod & Li (1983)
derived a portmanteau-type test building on the autocorrelation function of the
squared GARCH process. Based on the Lagrange multiplier (LM) principle, an
asymptotically equivalent test, the familiar ARCH–LM test, is given in Engle
(1982). The latter principle often allows the test statistic to be derived from
the degree of explanation offered by simple auxiliary regressions. Engle & Ng
(1993) proposed LM tests of the symmetric GARCH model against volatility
models allowing asymmetry, so-called size effects, or both. Once a particular
GARCH model has been estimated, issues of diagnostic testing are naturally fo-
cused on the implied GARCH innovations ξ̂t = u t /σ̂t . For instance, the analyst
should be led to respecify the model if ξ̂t , t = 1, . . . , T , show remaining condi-
tional heteroskedasticity. Although applying standard diagnostic tests for ξ̂t such
as the ARCH–LM test may give some indication of remaining misspecification,
the asymptotic distributions of such tests are unknown in general. Li & Mak
(1994) and Lundbergh & Teräsvirta (2002) have formulated portmanteau and
LM tests for testing the null hypothesis of “no remaining ARCH,” respectively.
Moreover, Lundbergh & Teräsvirta (2002) have exploited the LM principle to
cover the issue of testing the symmetric, structurally invariant GARCH pro-
cess against asymmetric and nonlinear smooth-transition GARCH processes
[Hagerud (1997)] on the one hand and against smoothly changing parameters
on the other. Specifying a smooth transition GARCH process under the alter-
native hypothesis, the TGARCH process and a model with a single shift point
are nested when diagnosing the symmetric GARCH. More specific tests of the
structural stability of GARCH-type volatility dynamics, as introduced by Chu
(1995) or Lin & Yang (1999), only allow a single structural shift in the variance
parameters.

5.2.6 An Empirical Illustration with Exchange Rates
To illustrate practical issues involved when analyzing empirical price processes,
this section investigates the dynamic properties of a bivariate exchange rate
series composed of the prices of the U.S. dollar (USD) in terms of the British
pound sterling (GBP) and the deutsche mark (DEM) using JMulTi. The in-
vestigated sample consists of 4,367 daily observations covering the period
208      Helmut Herwartz




Figure 5.1. Log exchange rate series (- - GBP/USD, — DEM/USD); 2 January 1986 to
27 September 2002; T = 4,367.

2 January 1986 to 27 September 2002. Note that, with the advent of the euro
in 1999, the DEM/USD rate is actually an implicit price of the USD. As shown
in Figure 5.1, both log price series are nonstationary and, more precisely, have
an evolution similar to a random walk process without a drift term. Since the
difference between the two log exchange rates yields the implicit log price of
the GBP in terms of the DEM, that is,
                                                 
               DEM              DEM               GBP
         log            = log            − log          ,
                GBP              USD             USD
the two investigated series are presumably not cointegrated.
   Log exchange rate changes are depicted in Figure 5.2. Both series of log
price variations show marked patterns of volatility clustering. It appears that
the process of log GBP/USD changes is more concentrated around zero and
shows more outlying observations than is the case for the DEM/USD rate.
   Autocorrelation and partial autocorrelation patterns, as shown in Figure 5.3
for changes of the log GBP/USD rate, do not indicate any predictability of
the conditional mean. Similar results are obtained for the DEM/USD rate and
are thus not shown to economize on space. In sharp contrast, the correspond-
ing diagnostics for squared-log exchange rate changes confirm the diagnosed
         Conditional Heteroskedasticity                                         209




   u1,t = D log GBP/USDt                       u2,t = D log DEM/USDt

Figure 5.2. Changes of log exchange rates.


volatility clustering. From Figure 5.4 it is evident that second-order moments
of exchange rate changes have significant positive autocorrelation. Comparing
the magnitude of the estimated autocorrelations of second-order moments in-
dicates that volatility clustering is more pronounced in the GBP/USD series as
against the DEM/USD rate. A similar conclusion is offered from kernel density
estimates for the unconditional distribution of standardized log price changes,
which are depicted in Figures 5.5 and 5.6. For convenience of presentation, the
graphs provide a corresponding density estimate for a sample drawn from the
N (0, 1) distribution. Excess kurtosis is stronger in the case of the GBP/USD
rate.
    Given the descriptive results obtained so far it is appropriate to estimate
a parametric model covering time-varying variances such as GARCH(1,1).
Estimation results for this specification are shown in Table 5.1. ML estimation
has been implemented on the assumption of three alternative conditional
distributions, the basic normal model, the t-distribution, and the GED. For both
processes and all distributional assumptions, the obtained parameters are in
line with other empirical applications of the GARCH process. The γ̂1 estimate
is small but significant, and β̂1 is about 0.95 and also significant. Interestingly,
estimates of the parameters governing volatility clustering (γ̂1 ) or excess con-
ditional kurtosis (v̂) indicate that both properties are more pronounced for the
autocorrelations




partial autocorrelations




Figure 5.3. Empirical autocorrelations of  log GBP/USDt (u 1,t ).




autocorrelations




partial autocorrelations



Figure 5.4. Empirical autocorrelations of  log GBP/USDt squared (u 21,t ).
          Conditional Heteroskedasticity                                           211




Figure 5.5. Density estimation for  log GBP/USDt (u 1,t ) (solid line, Gaussian kernel
with h = 0.127) and standard normal observations (broken line, Gaussian kernel with
h = 0.185).


GBP/USD rate. In comparison with the DEM/USD rate, γ̂1 is slightly higher
throughout when modeling the former rate. Moreover, for the GBP/USD rate,
estimated degrees of freedom for the t-distribution (v̂ = 4.18) or the estimated
shape parameter of the GED (v̂ = 0.78) are larger and smaller, respectively,
in comparison with the DEM/USD rate. Thus, the latter rate shows less condi-
tional leptokurtosis than log price changes of the GBP/USD rate. Comparing the
obtained maximum values of the alternative log-likelihood functions discloses
that the GED provides the closest fit to the empirical processes. In compari-
son with the conditional t-distribution involving the same number of unknown
parameters, this specification improves the maximum of the log-likelihood by
91.4 and 39.2 points, respectively. The Gaussian approximation is clearly out-
performed by both alternatives. Given that the underlying innovations are not
normally distributed, the ML t-ratios given for the basic GARCH specification
should be treated with care.
   Diagnostic statistics computed for ξ̂t , the implied GARCH(1,1) residuals,
are also given in Table 5.1. It turns out that the GARCH(1,1) model is con-
venient for capturing the time-varying variances of both processes entirely.
LM statistics testing the hypothesis of homoskedasticity against remaining
212       Helmut Herwartz




Figure 5.6. Density estimation for  log DEM/USDt (u 2,t ) (solid line, Gaussian kernel
with h = 0.135) and standard normal observations (broken line, Gaussian kernel with
h = 0.178).

conditional heteroskedasticity are insignificant throughout. Moreover, employ-
ing more general models, that is, extending the basic GARCH(1,1) to higher
order processes or towards a TGARCH(1,1), does not indicate misspecifica-
tion of the volatility model discussed. Detailed estimation results for more
general univariate volatility specifications are not given here because of space
considerations. Not surprisingly, the Lomnicki–Jarque–Bera test on normality
delivers strong evidence against the Gaussian model. Again, excess kurtosis is
larger when considering the GBP/USD rate (κ ≈ 5.3) in comparison with the
DEM/USD (κ ≈ 4.5).

5.3 Multivariate GARCH Models
Having introduced the univariate GARCH approach to time-varying volatility,
this section will discuss aspects of multivariate conditionally heteroskedastic
processes. Being conceptually straightforward, however, the generalization of
univariate towards multivariate GARCH models involves very large parameter
spaces and thus will prove to be analytically and computationally quite de-
manding. Specification issues for multivariate GARCH processes are discussed
      Table 5.1. Univariate GARCH(1,1) estimates and diagnostics for ξ̂t

                                    GBP/USD                                       DEM/USD
      Statistics    N (0, σt2 )   t(v, 0, σt2 )   GED(v, 0, σt2 )   N (0, σt2 )   t(v, 0, σt2 )   GED(v, 0, σt2 )
      γ̂0           3.03e-07       2.28e-07       2.42e-07           6.86e-07     5.61e-07        5.77e-07
                      (5.93)         (2.70)         (1.85)            (5.28)         (2.93)         (2.75)
      γ̂1           3.61e-02       3.61e-02       4.47e-02           3.49e-02     3.54e-02        3.48e-02
                      (15.1)         (6.70)         (5.24)            (9.46)         (6.03)         (5.52)
      β̂1           9.57e-01       9.61e-01       9.59e-01           9.51e-01     9.55e-01        9.53e-01
                      (322.8)       (174.5)         (123.9)           (168.7)       (122.8)         (107.6)
      v̂            4.18e+00       7.83e-01                          5.05e+00     1.14e+00
                       (12.5)        (37.5)                            (10.4)        (33.6)
      log lik.     1.615e+04      1.633e+04       1.642e+04         1.567e+04     1.579e+04       1.583e+04
      No remaining ARCH (LM, 1 lag)
      F test       0.326          0.276           0.372             0.123         0.093           0.088
      p-value      0.568          0.600           0.567             0.726         0.911           0.766
      Lomnicki–Jarque–Bera test
      LJB          959.9          981.3           975.4             405.5         411.6           410.1
      p-value      .000           .000            .000              .000          .000            .000
      skewness     0.153          0.153           0.150             −0.061        −0.066          −0.065
      kurtosis     5.277          5.303           5.296             4.488         4.499           4.496




213
214       Helmut Herwartz

first. QML estimation of these processes is also addressed. Some extensions of
the symmetric, conditionally normally distributed multivariate GARCH model
close this section.


5.3.1 Alternative Model Specifications
The half-vec Model. In principle, the generalization of the univariate GARCH
process towards a dynamic model describing second-order moments of a se-
rially uncorrelated but conditionally heteroskedastic K-dimensional vector of
error terms, u t = (u 1,t , u 2,t , . . . , u K ,t ) , is straightforward. Doing so requires
relating the covariance matrix t and the information generated by the his-
tory of the process (t−1 ) parametrically. The vector u t follows a multivariate
GARCH(q, p) process (MGARCH) if
          u t |t−1 ∼ N (0, t ),
                               
                               q                                     
                                                                     p
          vech(t ) = γ̃0 +           ˜ j vech(u t− j u t− j ) +         B̃ j vech(t− j ),
                                j=1                                  j=1
                                                                                                (5.33)
where vech(.) is the half-vectorization operator that stacks the elements
of a quadratic (K × K ) matrix from the main diagonal downwards in a
1
2
  K (K + 1)-dimensional vector; ˜ j , j = 1, . . . , q, and B̃ j , j = 1, . . . , p, are
fixed ( 12 K (K + 1) × 12 K (K + 1)) coefficient matrices; and γ̃0 is a 12 K (K + 1)
dimensional column vector collecting time invariant (co) variance components.
The special case where p = 0 formalizes the multivariate ARCH(q) process.
Introduced by Bollerslev, Engle & Wooldridge (1988), the representation in
(5.33) has become popular as the so-called half-vec (vech) MGARCH model.
    Within such a multivariate model, dynamics of second-order moments eas-
ily become intractable owing to the large parameter space involved. Recall that
the estimation of GARCH processes requires iterative numerical procedures.
Apart from computational infeasibility one may imagine that it is cumbersome
in applied work to restrict the admissible parameter space of the half-vec model
such that the implied matrices t , t = 1, . . . , T are positive definite. For these
reasons, there are only rare (if any) empirical applications of the half-vec model.
Since most of the more restrictive specifications have an implied half-vec repre-
sentation, however, the model in (5.33) has become a useful tool to investigate
theoretical properties of multivariate GARCH processes such as covariance
stationarity or to implement recursive forecasting schemes.

Volatility forecasting and covariance stationarity. Consider for convenience
the MGARCH(1,1) case and define a vector of serially uncorrelated, mean-zero
error terms
          vt = vech(u t u t ) − vech(t ).                                                     (5.34)
          Conditional Heteroskedasticity                                                         215

Then, substituting vech(u t u t ) in (5.33), we obtain a vector autoregressive
scheme for vech(t ) that can be used for covariance forecasting:
        vech(t ) = γ̃0 + (˜ 1 + B̃1 )vech(t−1 ) + ˜ 1 vt−1 .         (5.35)
The unconditional mean of vech(u t u t ), E[vech(u t u t )] = E[vech(t )] is avail-
able from (5.35) by successive substitutions as
         E[vech(t )] = (I + (˜ 1 + B̃1 ) + (˜ 1 + B̃1 )2 + (˜ 1 + B̃1 )3 + · · ·)γ̃0 .
                                                                                               (5.36)
The relation in (5.36) provides a finite solution for E[vech(t )] if the series of
matrix powers (˜ 1 + B̃1 )h converges to a zero matrix with increasing horizon
h. This condition holds if the eigenvalues of (˜ 1 + B̃1 ) have modulus less than
unity. In this case the MGARCH process is covariance stationary.

Constant correlation and diagonal MGARCH. Various strategies have been
followed to reduce the complexity of the dynamic structure in (5.33) and to
improve the scope of multivariate GARCH modeling in practice. Let σi j,t denote
a typical element of t . To economize on the number of parameters, one may
regard the systems’ variances to be generated by univariate GARCH processes
of order p = q = 1 for instance, as follows:
          σii,t = γii,0 + γii,1 u i,t−1
                                  2
                                        + βii,1 σii,t−1 , i = 1, . . . , K .                   (5.37)
To specify covariance dynamics, Bollerslev (1990) introduced the constant cor-
relation model, where
                      √
         σi j,t = ρi j σii,t σ j j,t , i, j = 1, . . . , K .           (5.38)
This MGARCH version implies strong restrictions compared with the gen-
eral model in (5.33). For instance, in the bivariate MGARCH(1,1) case the
model in (5.38) and (5.37) contains only seven parameters as against twenty
one parameters encountered in (5.33). A particular advantage of constant
correlation models is that, given suitable initial conditions, the assumptions
|γii + βii | < 1, |ρi j | < 1, i, j = 1, . . . , K are sufficient to guarantee positive
definiteness of the time path of implied covariances t . The price paid for par-
simony and feasibility is, however, a very specific dynamic structure that might
not be met by empirical processes [Tsui & Yu (1999)]. Applying this model in
practice will therefore require some pretest for constant correlation [Tse (2000),
Engle (2002)].
    To estimate a dynamic generalization of the CAPM, Bollerslev et al. (1988)
made use of the restriction that all off-diagonal elements in ˜ j and B̃ j are
zero, thereby introducing the diagonal model. In this framework, variance pro-
cesses, as in (5.37) are combined with ARMA-type dynamics governing the
covariances, that is,
          σi j,t = γi j,0 + γi j,1 u i,t−1 u j,t−1 + βi j,1 σi j,t−1 , i, j = 1, . . . , K .
                                                                                               (5.39)
216      Helmut Herwartz

   For the bivariate case, the diagonal model has nine parameters and thus is
less parsimonious than the constant correlation model. A specific difficulty for
practical work is to control the parameters in off-diagonal equations such that
covariance matrices t , t = 1, 2, . . . , T are positive definite. Ding & Engle
(1994) demonstrated that, in spite of its parsimony, the diagonal model is not
computationally feasible for systems exceeding dimension K = 5. For such
systems the interaction of parameters is too complex for existing optimization
algorithms to converge.

The BEKK form. A particular drawback of the constant correlation and diago-
nal models is the possibility that important cross-sectional dynamics, as allowed
by the half-vec model, will be ruled out by construction. Assume, for instance,
that a bivariate system is composed of returns for a particular asset and a mar-
ket portfolio. In this case, one may immediately take current volatility of the
asset to depend partially on information processed in the aggregated stock mar-
ket. Tests on causality in variance [Cheung & Ng (1996), Hafner & Herwartz
(2004)] may be employed to indicate if an empirical vector return process ex-
hibits cross-sectional relationships. The so-called BEKK model [Baba, Engle,
Kraft & Kroner (1990)] formalizes a multivariate volatility specification that
incorporates cross-equation dynamics. Engle & Kroner (1995) have discussed
this model in detail. The BEKK form of the GARCH(q, p) process is
                         
                         N 
                           q                                
                                                            N 
                                                              p
         t = 0 0 +              
                                   ni u t−i u t−i ni +              
                                                                      Bni t−i Bni .   (5.40)
                         n=1 i=1                            n=1 i=1

In (5.40), 0 is a (K × K ) upper triangular matrix and ni , i = 1, . . . , q, and
Bni , i = 1, . . . , p, are (K × K ) parameter matrices. When the order parame-
ter N is increased, the BEKK–specification allows more general forms of the
dynamic dependence of t on t−1 . For an appropriate choice of N the BEKK
model can be shown to span the entire space of positive definite symmetric ma-
trices. In practice, however, mostly N = 1 is chosen such that, for the bivariate
GARCH(1,1) model, eleven parameters control the time path of second-order
moments. In the following discussion we implicitly assume N = 1 throughout
the presentation. Then parameter matrices 1i and −1i (or B1i and −B1i ) imply
identical volatility processes. Thus, for the purpose of identification, γ11 > 0
(β11 > 0) is assumed. A particular advantage of the BEKK-representation is
that only squared terms enter the right-hand side of (5.40). Therefore, given
positive definite initial covariances 0 , . . . , 1− p , time paths of second-order
moments t , t = 1, . . . , T are positive definite under the weak (sufficient) con-
dition that at least one of the matrices 0 or B1i has full rank [Engle & Kroner
(1995)].
    Compared with the diagonal model, the BEKK specification economizes on
the number of parameters by restricting the half-vec model within and across
equations. To illustrate this issue it is interesting to regard the dynamic structure
         Conditional Heteroskedasticity                                         217

implied by the BEKK model separately for each element in t , that is,
         σ11,t = [0 0 ]11 + γ11
                                2 2
                                   u 1,t−1 + 2γ11 γ21 u 1,t−1 u 2,t−1
                  +γ21
                    2 2
                       u 2,t−1 ,                                              (5.41)
         σ21,t = [0 0 ]21 + γ11 γ12 u 21,t−1
                  +(γ21 γ12 + γ11 γ22 )u 1,t−1 u 2,t−1 + γ21 γ22 u 22,t−1 ,   (5.42)
         σ22,t = [0 0 ]22 + γ12
                                2 2
                                   u 1,t−1 + 2γ12 γ22 u 1,t−1 u 2,t−1
                  +γ22
                    2 2
                       u 2,t−1 .                                              (5.43)
For convenience of presentation, autoregressive dynamics are excluded in (5.41)
to (5.43). Since the coefficients in 11 (and B11 ) enter the second moments non-
linearly, a decided drawback of the model is that the role of particular param-
eters for the evolvement of conditional (co)variances over time is not obvious.
Therefore, numerous approaches to impulse response analysis have been ad-
vocated to uncover the dynamic structure of multivariate nonlinear models in
general [Gallant, Rossi & Tauchen (1993), Koop, Pesaran & Potter (1996)] and
MGARCH models in particular [Lin (1997), Herwartz & Lütkepohl (2000),
Hafner & Herwartz (2001b)].


5.3.2 Estimation of Multivariate GARCH Models
Conceptually, estimation of multivariate GARCH models is a straightforward
extension of the univariate benchmark. The contribution of an observed vector
u t to the (quasi) log-likelihood function is given as
                                 K             1            1
         log( f (u t |t−1 )) = −  log(2π ) − log |t | − u t t−1 u t .
                                 2             2            2
With respect to asymptotic properties of the (Q)ML estimator on the one hand
and to computational issues involved when maximizing the log-likelihood func-
tion on the other hand, the multivariate estimation problem is substantially more
involved than its univariate counterpart. These two issues are now considered
in turn.

Asymptotic properties of the QML estimator. In the multivariate framework,
results for the asymptotic properties of the (Q)ML estimator have been derived
recently. Jeantheau (1998) proved the QML estimator to be consistent under the
main assumption that the multivariate process is strictly stationary and ergodic.
For a vector ARMA model with MGARCH disturbances exhibiting constant
conditional correlation, Ling & McAleer (2003) proved consistency and asymp-
totic normality of the QML estimator assuming finiteness of unconditional
second- and sixth-order moments of u t , respectively. With finite unconditional
moments up to order eight, Comte & Lieberman (2003) derived asymptotic
218      Helmut Herwartz

normality of the QML estimator within the BEKK model. The asymptotic distri-
bution of the rescaled QML estimator of θ  = (vech(0 ) , vec(11 ) , vec(B11 ) )
is analogous to the univariate case given in (5.19). If, however, a particular
GARCH process fails to have finite eighth-order moments, the common ap-
proach to evaluate the covariance matrix of θ̂ given in (5.19) provides, strictly
speaking, little more than a rule of thumb.

Numerical issues. Implementing the BHHH algorithm (5.17) and evaluating
the covariance matrix of the QML estimator require first- and second-order
derivatives of the Gaussian log-likelihood function. Although software pack-
ages such as GAUSS provide algorithms to evaluate these derivatives numer-
ically, analytical derivatives may be preferable for their precision and shorter
computing time [McCullough & Vinod (1999)]. Explicit formulas for analyti-
cal scores for the multivariate regression model with BEKK-type conditionally
heteroskedastic error terms are given in Lucchetti (2002). Comte & Lieberman
(2003) have provided the following general expressions for first- and second-
order derivatives:
           ∂lt    1 ˙        −1         −1 ˙     −1
               = − tr[ t,i t − u t u t t t,i t ],                                        (5.44)
           ∂θi    2
            ∂ 2 lt     1 ¨           −1         −1 ˙    −1
                    = − tr[ t, j,i t − t, j t t,i t
                                         ˙
           ∂θi ∂θ j    2
                       + u t u t t−1 
                                       ˙ t,i t−1 
                                                  ˙ t, j t−1 + u t u t t−1       ˙ t, j t−1
                                                                              ˙ t, j 
                        ˙ t,i t−1 − u t u t t−1 
                       ×                          ¨ t,i, j t−1 ].                           (5.45)
In (5.44) and (5.45),  ˙ t, j (
                                ¨ t,i, j ) is a (K × K ) matrix containing the first-
(second-) order derivatives of each element of t with respect to θi (θi and θ j ).
Building on (5.44) and (5.45), Hafner & Herwartz (2003) have given explicit
first- and second-order derivatives for the simplest version of the BEKK model
(N = p = q = 1). Moreover, they have demonstrated, by means of a Monte
Carlo experiment, that the empirical size properties of QML inference are con-
siderably closer to their nominal counterparts when using analytical instead of
numerical second-order derivatives.


5.3.3 Extensions
The basic multivariate volatility models discussed so far may be generalized
along similar lines, as discussed in Section 5.2.3 for the univariate case. Mul-
tivariate processes incorporating an asymmetric response of (co)variances to
negative versus positive news have been introduced, for example, by Braun, Nel-
son & Sunier (1995) to generalize the univariate EGARCH [Nelson (1991)].
Hafner & Herwartz (1998) and Herwartz & Lütkepohl (2000) have formalized
          Conditional Heteroskedasticity                                          219




Figure 5.7. Empirical autocorrelations of cross-product process (u 1,t u 2,t ).



asymmetry of (co)variances in the spirit of the TGARCH [Glosten et al. (1993)].
The assumption of conditional multivariate normality made in (5.33) could be
replaced by a multivariate t-distribution as in Hafner & Herwartz (2001b) and
Fiorentini, Sentana & Calzolari (2002). Adopting a semiparametric approach,
Hafner & Rombouts (2002) have left the conditional distribution unspecified.
   As outlined, the huge parameter spaces typically involved when employing
multivariate GARCH processes make it practically impossible to analyze large-
scale systems of empirical price variations. Recently, a few contributions have
been aimed at modeling high-dimensional systems via the GARCH approach,
namely the Dynamic Conditional Correlation MGARCH [Engle (2002)] and
the Flexible MGARCH [Ledoit, Santa-Clara & Wolf (2002)]. Both approaches
involve the estimation of univariate variance processes. Then, by means of the
former procedure, transformed first-step residuals are used to yield dynamic cor-
relation estimates. According to the Flexible MGARCH approach, unrestricted
“univariate” covariance estimates are obtained from an equation like (5.39).
In a second step, unrestricted estimates of γi j,0 , γi j,1 , βi j,1 are transformed
such that the resulting matrices of parameter estimates deliver positive definite
covariances  ˆ t.
220          Helmut Herwartz

Table 5.2. MGARCH estimates for bivariate exchange rate series

                Estimates           ML t-ratios               QML t-ratios
ˆ 0       9.41e-04   5.98e-04    14.9        6.14           5.47       3.68
               −      7.92e-04               11.9                      11.2
ˆ 1          0.240   −0.053      25.8      −3.95            6.81     −1.93
           −0.027        0.220   −2.85       16.9           −0.743      8.99
B̂1           0.957      0.012   279.         2.70          99.6        1.45
              0.006      0.964     1.66     211.1            0.677    145.0



5.3.4 Continuing the Empirical Illustration
Having investigated the univariate case of time-varying volatility for the log
price changes of the GBP/USD and DEM/USD rates in Section 5.2.6, we now
turn our attention to joint second-order dynamics exhibited by these series. As a
first indication of contemporaneous correlation, Figure 5.7 shows the autocor-
relation and partial autocorrelation functions for the process of the product of


√
 σˆ 11,t                                          σˆ 12,t




                                              √
ρˆ 12,t                                        σˆ 22,t


Figure 5.8. Estimated second-order moments (conditional standard deviations of u it ,
covariance, and correlation between u 1t and u 2t ). Univariate GARCH (- -) versus
MGARCH (—).
         Conditional Heteroskedasticity                                          221

the two log price changes. Evidently, this moment process shows persistent pos-
itive autocorrelation, thereby motivating a multivariate approach to modeling
volatility of the two exchange rates under study.
    Estimates of the BEKK representation of the bivariate GARCH(1,1) model
are shown in Table 5.2. In addition to the parameter estimates ML and QML,
t-ratios are provided. Given the apparent violation of the Gaussian assump-
tion obtained from the univariate exercises, the latter should be preferred when
interpreting the estimation results. QML t-ratios are smaller than the ML coun-
terparts throughout, indicating that ignoring conditional leptokurtosis will over-
estimate the significance of estimated dynamics. The parameter estimates ob-
tained imply that the eigenvalues of the variance dynamics are smaller than 1
and, thus, the estimated process is covariance stationary. Estimated diagonal
coefficients are plausible in the light of the univariate results. In the parameter
matrix ˆ 1 ( B̂1 ), the diagonal elements are 0.024 and 0.022 (0.957 and 0.964)
and, thus, are close to the square root of their univariate counterparts given
in Table 5.1. Cross-sectional dynamics are indicated if off-diagonal elements
of these matrices are significant. Evaluating QML t-ratios, we find that only
γ̂12,1 = −0.053 is significant at the 10% level but fails slightly to be significant
at the 5% level. Using (5.43) reveals that, in the present case, this coefficient
governs the impact of log GBP/USD changes on the conditional variance of the
log DEM/USD rate. From the latter results, one may expect that the bivariate
and the univariate approaches to volatility estimation will deliver different time
paths for the DEM/USD volatility but will give similar results with respect to
the GBP/USD rate.
    Time paths of standard deviations implied by the univariate and the bivariate
volatility models are depicted on the diagonal of Figure 5.8. The upper-right and
lower-left panels show the conditional covariance process and the implied cor-
relations, respectively. Recall that the evaluation of the latter quantities requires
a multivariate approach to volatility estimation. Apparently, the estimated stan-
dard deviations correspond to the volatility clusters and outlying observations
documented in Figure 5.2. Whereas both approaches, the univariate and mul-
tivariate models, deliver almost identical estimates of GBP/USD volatility, it
turns out that, relative to the BEKK model, the univariate GARCH(1,1) tends
to overestimate the volatility of the DEM/USD rate. This effect is particularly
evident in the second half of the sample period. Time-varying correlation es-
timates are almost uniformly positive and vary mostly between 0.2 and 0.9.
Though not being a formal test one may conclude from a graphical inspection
of the correlation pattern that the assumption of constant correlation would
hardly be appropriate for this bivariate exchange rate process.
6        Smooth Transition Regression
         Modeling

Timo Teräsvirta




6.1 Introduction
Nonlinear models have gained a foothold in both macroeconomic and finan-
cial modeling. Linear approximations to nonlinear economic phenomena have
served macroeconomic modelers well, but in many cases nonlinear specifica-
tions have turned out to be useful. Nonlinear econometric models can be divided
in two broad categories. The first one contains the models that do not nest a linear
model as a special case. Disequilibrium models [e.g., Fair & Jaffee (1972)] are
a case in point. The second category embraces several popular models that do
nest a linear model. The switching regression model, various Markov-switching
models, and the smooth transition regression model are examples of models that
belong to this class. Researchers interested in applying them can then choose
a linear model as their starting-point and consider nonlinear extensions should
they turn out to be necessary. In this chapter, the discussion is centered on mod-
eling of economic time series using the family of smooth transition regression
models as a tool.
    This chapter is organized as follows. The smooth transition regression model
is presented in Section 6.2. The modeling cycle, consisting of specification,
estimation and evaluation stages, is the topic of Section 6.3. In Section 6.4,
the modeling strategy and its application using JMulTi is illustrated by two
empirical examples. Section 6.5 presents some final remarks.


6.2 The Model
The smooth transition regression (STR) model is a nonlinear regression model
that may be viewed as a further development of the switching regression model
that Quandt (1958) introduced. The univariate version of the switching re-
gression model has long been known as the threshold autoregressive model;
for a thorough review, see Tong (1990). The two-regime switching regression
model with an observable switching variable is a special case of the standard
222
          Smooth Transition Regression Modeling                                      223

STR model, but switching regression models with more than two regimes are
generally not nested in it. Accordingly, the univariate smooth transition au-
toregressive (STAR) model contains the two-regime threshold autoregressive
model as a special case. The STR model originated as a generalization of a
particular switching regression model in the work of Bacon & Watts (1971).
These authors considered two regression lines and devised a model in which
the transition from one line to the other is smooth. One of the two data sets
Bacon & Watts (1971) used as examples will be reconsidered in Section 6.4. In
the time series literature, Chan & Tong (1986) suggested the univariate STAR
model. The earliest references in the econometrics literature are Goldfeld &
Quandt (1972, pp. 263–264) and Maddala (1977, p. 396). Recent accounts in-
clude Granger & Teräsvirta (1993), Teräsvirta (1994, 1998), Franses & van Dijk
(2000), and van Dijk, Teräsvirta & Franses (2002).
   The standard STR model is defined as follows:

           yt = φ  zt + θ  zt G(γ , c, st ) + u t
                                                                                    (6.1)
              = {φ + θ G(γ , c, st )} zt + u t ,      t = 1, ..., T,

where zt = (wt , xt ) is a vector of explanatory variables, wt =
(1, yt−1 , . . . , yt− p ) , and xt = (x1t , . . . , xkt ) , which is a vector of exoge-
nous variables. Furthermore, φ = (φ0 , φ1 , . . . , φm ) and θ = (θ0 , θ1 , . . . , θm )
are ((m + 1) × 1) parameter vectors and u t ∼ iid(0, σ 2 ). Transition function
G(γ , c, st ) is a bounded function of the continuous transition variable st ,
continuous everywhere in the parameter space for any value of st , γ is the slope
parameter, and c = (c1 , . . . , c K ) , which is a vector of location parameters,
c1 ≤ . . . ≤ c K . The last expression in (6.1) indicates that the model can
be interpreted as a linear model with stochastic time-varying coefficients
φ + θ G(γ , c, st ). In this chapter it is assumed that the transition function is a
general logistic function
                                                                −1
                                             4
                                             K
          G(γ , c, st ) = 1 + exp{−γ               (st − ck )}         ,γ > 0       (6.2)
                                             k=1

where γ > 0 is an identifying restriction. Equations (6.1) and (6.2) jointly define
the logistic STR (LSTR) model. The most common choices for K are K = 1 and
K = 2. For K = 1, the parameters φ + θ G(γ , c, st ) change monotonically as a
function of st from φ to φ + θ. For K = 2, they change symmetrically around
the midpoint (c1 + c2 )/2, where this logistic function attains its minimum value.
The minimum lies between zero and 1/2. It reaches zero when γ → ∞ and
equals 1/2 when c1 = c2 and γ < ∞. Slope parameter γ controls the slope
and c1 and c2 the location of the transition function. Transition function (6.2)
with K = 1 is also the one that Maddala (1977) proposed, whereas Goldfeld
& Quandt (1972) and Chan & Tong (1986) favored the cumulative distribution
224      Timo Teräsvirta

function of a normal random variable. In fact, these two functions are close
substitutes.
   The LSTR model with K = 1 (LSTR1 model) is capable of characteriz-
ing asymmetric behavior. As an example, suppose that st measures the phase
of the business cycle. Then the LSTR1 model can describe processes whose
dynamic properties are different in expansions from what they are in reces-
sions, and the transition from one extreme regime to the other is smooth. On
the other hand, the LSTR2 model (K = 2) is appropriate in situations in which
the local dynamic behavior of the process is similar at both large and small
values of st and different in the middle. For further work on parameterizing the
transition in the STR framework, see Öcal & Osborn (2000) and van Dijk &
Franses (1999).
   When γ = 0, the transition function G(γ , c, st ) ≡ 1/2, and thus the STR
model (6.1) nests the linear model. At the other end, when γ → ∞, the LSTR1
model approaches the switching regression model with two regimes that have
equal variances. When γ → ∞ in the LSTR2 model, the result is another
switching regression model with three regimes such that the outer regimes
are identical and the midregime is different from the other two. Note that an
alternative to the LSTR2 model exists, the so-called exponential STR (ESTR)
model. It is (6.1) with the transition function

         G E (γ , c, st ) = 1 − exp{−γ (st − c1∗ )2 }, γ > 0.                (6.3)

This function is symmetric around st = c1∗ and has, at low and moderate values
of slope parameter γ , approximately the same shape, albeit a different minimum
value (zero), as (6.2). Because this function contains one parameter less than
the LSTR2 model, it can be regarded as a useful alternative to the correspond-
ing logistic transition function. It has a drawback, however. When γ → ∞,
(6.1) with (6.3) becomes practically linear, for the transition function equals
zero at st = c1∗ and unity elsewhere. The ESTR model is therefore not a good
approximation to the LSTR2 model when γ in the latter is large and c2 − c1 is
at the same time not close to zero.
    In practice, the transition variable st is a stochastic variable and very often
an element of zt . It can also be a linear combination of several variables. In
some cases, it can be a difference of an element of zt ; see Skalin & Teräsvirta
(2002) for a univariate example. A special case, st = t, yields a linear model
with deterministically changing parameters.
    When xt is absent from (6.1) and st = yt−d or st = yt−d , d > 0, the
STR model becomes a univariate smooth transition autoregressive model; see
Teräsvirta (1994) for more discussion. The exponential STAR (ESTAR) model
is a slight generalization of the Exponential Autoregressive model that Haggan
& Ozaki (1981) have already introduced.
         Smooth Transition Regression Modeling                                    225

6.3 The Modeling Cycle
In this section we consider modeling nonlinear relationships using STR model
(6.1) with transition function (6.2). We present a modeling cycle consisting of
three stages: specification, estimation, and evaluation. Previous presentations of
the modeling strategy can be found in Teräsvirta (1994), completed by Eitrheim
& Teräsvirta (1996) (the STAR model) and Teräsvirta (1998) (the STR model).
We will now discuss the three stages of the cycle separately, beginning with
specification, continuing with estimation, and ending with evaluation.


6.3.1 Specification
The specification stage entails two phases. First, the linear model forming the
starting point is subjected to linearity tests, and then the type of STR model
(LSTR1 or LSTR2) is selected. Economic theory may give an idea of which
variables should be included in the linear model but may not be particularly
helpful in specifying the dynamic structure of the model. The linear specification
including the dynamics may in that case be obtained by various model selection
techniques described in Chapters 2 and 3. If the model is a purely autoregressive
one, however, it may be advisable not to create gaps in the lag structure by
omitting lags shorter than the maximum lag selected for the model. The reason
is that such omissions may reduce the power of the linearity tests. Models for
strongly seasonal time series constitute an obvious exception to this rule. For
example, when the seasonal series is a monthly one and model selection criteria
suggest omitting several consecutive lags shorter than 12, it may be sensible to
do that.
    Linearity is tested against an STR model with a predetermined transition
variable. If economic theory is not explicit about this variable, the test is repeated
for each variable in the predetermined set of potential transition variables, which
is usually a subset of the elements in zt . The purpose of these tests is twofold.
First, they are used to test linearity against different directions in the parameter
space. If no rejections of the null hypothesis occur, the model builder accepts
the linear model and does not proceed with STR models. Second, the test results
are used for model selection. If the null hypothesis is rejected for at least one of
the models, the model against which the rejection, measured in the p-value, is
strongest is chosen to be the STR model to be estimated. Details of this follow
next.

Testing linearity. Testing linearity against STAR or STR has been discussed, for
example, in Luukkonen, Saikkonen & Teräsvirta (1988a) and Teräsvirta (1994,
1998). The STR model shares with many other nonlinear models the property
that the model is only identified under the alternative, not the null, hypothesis of
226       Timo Teräsvirta

linearity; see Hansen (1996) for a general discussion. The ensuing identification
problem in testing linearity can, in the STR context, be circumvented by ap-
proximating the transition function (6.2) in (6.1) by a Taylor expansion around
the null hypothesis γ = 0. It is customary to assume K = 1 in (6.2) and use
the third-order Taylor approximation: see, for example, Teräsvirta (1998). The
resulting test has power against both the LSTR1 (K = 1) and LSTR2 (K = 2)
models.
   Assume now that the transition variable st is an element in zt and let zt =
(1,zt ) , where
                  zt is an (m × 1) vector. The approximation yields, after merging
terms and reparameterizing, the following auxiliary regression:
                           
                           3
          yt = β0 z t +         β j
                                     zt st + u ∗t ,
                                         j
                                                      t = 1, . . . , T,            (6.4)
                           j=1

where u ∗t = u t + R3 (γ , c, st )θ  zt with the remainder R3 (γ , c, st ). The null hy-
pothesis is H0 : β1 = β2 = β3 = 0 because each β j , j = 1, 2, 3, is of the form
γβj , where, β   j = 0 is a function of θ and c. This is a linear hypothesis in a
linear (in parameters) model. Because u ∗t = u t under the null hypothesis, the
asymptotic distribution theory is not affected if an LM-type test is used. The
asymptotic distribution theory of the resulting χ 2 -test requires the existence of
Est6  zt . If the model is a univariate STAR model, this is equivalent to requiring
     zt
Eyt < ∞. This assumption naturally implies restrictions on β0 .
   8

    The test statistic has an asymptotic χ 2 -distribution with 3m degrees of
freedom when the null hypothesis is valid. But then, the χ 2 -statistic can be
severely size-distorted in small and even moderate samples. The corresponding
F-statistic is recommended instead. It has an approximate F-distribution with
3m and T − 4m − 1 degrees of freedom under the null hypothesis. JMulTi
always uses the F-version of the test.
    In building STR models, the test is applied as follows. First, select a set
of potential transition variables S = {s1t , . . . , skt }. It may contain the same
elements as      zt , but economic theory or other considerations may restrict the
set or suggest adding other variables. After defining S, perform the test using
each element in S in turn as the transition variable. If the null hypothesis is
rejected for several transition variables, select the one for which the p-value of
the test is minimized. The logic behind this suggestion is that the rejection of
the null hypothesis is stronger against the correct alternative than other alterna-
tive models. However, if several small p-values are close to each other, it may
be useful to proceed by estimating the corresponding STR models and leaving
the choice between them to the evaluation stage. For more discussion about this
procedure, see Teräsvirta (1998).

Choosing the type of the model. When linearity has been rejected and a tran-
sition variable subsequently selected, the next step will be to choose the model
          Smooth Transition Regression Modeling                                    227

type. The available choices are K = 1 and K = 2 in (6.2) . As mentioned in
Section 6.2, the former choice leads to the LSTR1 model, whose parameters
change monotonically as a function of the transition variable. Note, however,
that they do not need to change in the same direction. When K = 2, the
parameters change symmetrically around (c1 + c2 )/2 (LSTR2 model). Alter-
natively, instead of K = 2, one may in some situations use the exponential
transition function (6.3) , which is symmetric around c (ESTR model). This
can be the case when, for example, the sequences of estimates of c1 and c2 in
the iterative estimation converge toward the same value. As already discussed,
the LSTR1 and the LSTR2 models describe different types of behavior. The
former (K = 1) has two extreme regimes that are different. For example, if the
transition variable is a business cycle indicator, one regime will be related to
business cycle expansions and the other to contractions. The latter has two iden-
tical extremes (for both very large and small values of the transition variable),
whereas the midregime is different. As an example, a nonlinear equilibrium
correction in which the strength of attraction varies nonlinearly as a function
of the size of the deviation from the equilibrium can be characterized by an
LSTR2 model.
    The choice between these two types of models can be based on the auxiliary
regression (6.4) . The coefficient vectors β j , j = 1, 2, 3, in (6.4) are functions
of the parameters in (6.1) . In the special case c = 0, it can be shown that β2 = 0
when the model is an LSTR1 model, whereas β1 = β3 = 0 when the model is
an LSTR2 or ESTR model; see Teräsvirta (1994) for details. Even when c = 0,
β2 is closer to the null vector than β1 or β3 when the model is an LSTR1 model,
and vice versa for the LSTR2 model. This suggests the following short test
sequence:

1. Test the null hypothesis H04 : β3 = 0 in (6.4) .
2. Test H03 : β2 = 0|β3 = 0.
3. Test H02 : β1 = 0|β2 = β3 = 0.

If the test of H03 yields the strongest rejection measured in the p-value, choose
the LSTR2 or ESTR model. Otherwise, select the LSTR1 model. All three
hypotheses can simultaneously be rejected at a conventional significance level
such as 0.05 or 0.01; that is why the strongest rejection counts. This procedure
was simulated in Teräsvirta (1994) and appeared to work satisfactorily. It is
implemented in JMulTi. Escribano & Jordá (1999) suggested an alternative
procedure that requires adding the component β4      zt st4 to (6.4) and leads to the
general linearity hypothesis β1 = β2 = β3 = β4 = 0.
    In choosing the STR model type, either one of the two test sequences has
proved useful in practice. It is also possible to fit both an LSTR1 and an LSTR2
(or ESTR) model to the data and make the choice between them at the evaluation
stage. In practice, this is a sensible way of proceeding if the test sequence does
228      Timo Teräsvirta

not provide a clear-cut choice between the two alternatives in the sense that
p-values of the test of H03 , on the one hand, and of H02 or H04 on the other, are
close to each other.


Reducing the size of the model. As in linear models, the model builder of-
ten wants to reduce the size of the model by eliminating redundant variables.
In (6.1) , eliminating an element in zt such as z jt requires the restriction
φ j = θ j = 0. Unlike the situation for linear models, two other types of ex-
clusion restrictions are of interest. One is φ j = 0. This restriction limits the
combined coefficient of z jt to zero for G(γ , c, st ) = 0 so that z jt does not con-
tribute in that regime. A mirror image of this restriction is φ j = −θ j , which
limits the combined coefficient to zero when G(γ , c, st ) = 1. Thus, in reducing
the number of parameters, restrictions φ j = 0 and φ j = −θ j should both be
considered. Naturally, restricting z jt to only appear linearly (θ j = 0) in (6.1)
has to be considered as well.
    All of the preceding procedures require estimating several ST(A)R models.
In some cases, estimating the unrestricted STR model may be difficult owing
to a small sample size because the estimation algorithm may not converge. In
such situations, it may be useful to begin with a complete linear component φ  z t
and introduce zeroes in the nonlinear component. Success is not guaranteed,
however, if the true model contains restrictions of type φ j = −θ j . Imposing
such restrictions has to be considered as well.


6.3.2 Estimation of Parameters
Initial values. The parameters of the STR model are estimated using con-
ditional maximum likelihood. The log-likelihood is maximized numerically,
and JMulTi uses the iterative BFGS algorithm [see, for example, Hendry
(1995, Appendix A5)] with numerical derivatives for the purpose. Finding good
starting-values for the algorithm is important. One way of obtaining them is
the following. When γ and c in transition function (6.2) are fixed, the STR
model is linear in parameters. This suggests constructing a grid. Estimate the
remaining parameters φ and θ conditionally on (γ , c1 ), or (γ , c1 , c2 ) for K = 2,
and compute the sum of squared residuals. Repeat this process for N combi-
nations of these parameters. Select the parameter values that minimize the sum
of squared residuals. Because the grid is only two- or three-dimensional (in the
three-dimensional case, the restriction c1 ≤ c2 constrains the size of the grid
further), this procedure is computationally manageable.
    When constructing the grid, note that γ is not a scale-free parameter. The
exponent of the transition function is therefore standardized by dividing it by
the K th power of the sample standard deviation of the transition variable st ,
         Smooth Transition Regression Modeling                                229

which we will call ,σs . The transition function becomes
                                                          −1
                                               4
                                               K
        G(γ , c, st ) = 1 + exp{−(γ /,    σs ) (st − ck )}
                                            K
                                                               , γ > 0.     (6.5)
                                                k=1

This makes the slope parameter γ in (6.5) scale-free, which in turn facilitates
the construction of an effective grid.

A numerical problem. A specific numerical problem exists in the estimation of
STR models. It is present when γ in (6.5) is large and the model is consequently
close to a switching regression model. This makes the estimation of γ difficult in
small samples because determining the curvature of (6.2) then requires many
observations in the neighborhood of c (K = 1) and c1 and c2 (K = 2). It is
unlikely that such clusters can be found in small samples. For discussion, see
Bates & Watts (1988, p. 87), Seber & Wild (1989, pp. 480–481), or Teräsvirta
(1994, 1998). This lack of information manifests itself in the standard devia-
tion estimate of ,
                 γ , which becomes large. Contrary to first intuition, the ensuing
small value of the t-ratio does not, in that case, suggest redundancy of the non-
linear component (“insignificant , γ ”). Besides, quite apart from the numerical
problem, the identification problem mentioned in Section 6.3.1 invalidates the
standard interpretation of the t-ratio as a test of the hypothesis γ = 0.

6.3.3 Evaluation
Testing the STR model. Like any linear model, the estimated STR model needs
to be evaluated before it can be used for forecasting or other purposes. Mis-
specification tests are an important tool in checking the quality of an esti-
mated nonlinear model as they are in the case of linear models. Eitrheim &
Teräsvirta (1996) and Teräsvirta (1998) have considered misspecification test-
ing in ST(A)R models. The tests to be discussed here are generalizations of
correponding tests for evaluation of linear models. They are an LM test of no
error autocorrelation, an LM-type test of no additive nonlinearity, and another
LM-type test of parameter constancy. Consistency and asymptotic normality of
the maximum likelihood estimators are required for the asymptotic statistical
theory behind the tests to be valid.

Test of no error autocorrelation. The test of no error autocorrelation applicable
to STR models is a special case of a general test discussed in Godfrey (1988) (see
also the corresponding test for linear models described in Chapter 2). Assume
that M(z t ; ψ) is at least twice continuously differentiable with respect to the
parameters everywhere in the sample space and that
         yt = M(z t ; ψ) + u t ,   t = 1, . . . , T,                        (6.6)
230        Timo Teräsvirta

where u t = α  vt + εt with α = (α1 , . . . , αq ) , vt = (u t−1 , . . . , u t−q ) , and εt ∼
iid N (0, σ 2 ). The null hypothesis of no error autocorrelation against the alter-
native of autocorrelation of at most order q in u t in (6.6) is α = 0.
    The STR model satisfies the differentiability condition for γ < ∞. The de-
tails of applying Godfrey’s LM test to the STR model are discussed in Teräsvirta
(1998). Briefly, the test consists of regressing the residuals         u t of the estimated
STR model on the lagged residuals      u t−1 , . . . , 
                                                        u t−q and the partial derivatives
of the log-likelihood function with respect to the parameters of the model eval-
uated at the maximizing value ψ = ψ.      Let n be the number of parameters in
the model. Then the test statistic

                  FLM = {(SSR0 − SSR1 )/q}/{SSR1 /(T − n − q)},

where SSR0 is the sum of squared residuals of the STR model and SSR1 the
corresponding sum from the auxiliary regression just described, has an ap-
proximate F-distribution with q and T − n − q degrees of freedom under the
null hypothesis. The F-version of the test is preferable to the corresponding
χ 2 -statistic based on the asymptotic distribution theory. The reason is that the
latter statistic can be severely size distorted in small and moderate samples.
When the model is linear, the test collapses into the well-known test of no se-
rial correlation of Breusch (1978) and Godfrey (1978), already discussed in
Chapter 3.

Test of no additive nonlinearity. After an STR model has been fitted to the
data, it is important to ask whether the model adequately characterizes the
nonlinearity originally found in the data by applying linearity tests or to ask
whether some nonlinearity remains unmodeled. In the STR framework, a natural
alternative to consider in this context is an additive STR model. It can be defined
as follows:

           yt = φ  z t + θ  z t G(γ1 , c1 , s1t ) + ψ  zt H (γ2 , c2 , s2t ) + u t ,   (6.7)

where H (γ2 , c2 , s2t ) is another transition function of type (6.2) and u t ∼ iid
N (0, σ 2 ). For notational simplicity, assume H (0, c2 , s2t ) = 0. Then the null
hypothesis of no additive nonlinearity can be defined as γ2 = 0 in (6.7). The
model is only identified under the alternative: both ψ and c2 are nuisance
parameters under the null hypothesis. The identification problem can be solved
as in Section 6.3.1 by approximating the transition function H by its Taylor
expansion around γ2 = 0, merging terms, and reparameterizing. If a third-order
expansion is assumed, this yields the following auxiliary model:

                                                       
                                                       3
           yt = β0 zt + θ  zt G(γ1 , c1 , s1t ) +          β j (
                                                                   zt s2t ) + u ∗t ,
                                                                       j
                                                                                          (6.8)
                                                       j=1
          Smooth Transition Regression Modeling                                      231

where u ∗t = u t + ψ  zt R3 (γ2 , c2 , s2t ), R3 being the remainder from the polyno-
mial approximation. The null hypothesis is β1 = β2 = β3 = 0 in (6.8). If we
set θ = 0, (6.8) collapses into equation (6.4).
    Deriving the LM-type test for testing this hypothesis is straightforward. The
only difference compared with the case of testing linearity in Section 6.3.1
is that z t in (6.4) is replaced by the gradient vector vt = (zt , zt G(γ1 ,
                                                                               c1 , s1t ),
gt (        c1 ) ) , where
    γ ), gt (
          gt (γ ) = ∂G(γ1 , c1 , s1t )/∂γ1 |(γ1 ,c1 )=(
                                                       γ1 ,
                                                           c1 )

and
              c1 ) = ∂G(γ1 , c1 , s1t )/∂c1 |(γ1 ,c1 )=(
          gt (                                             c1 ) ).
                                                        γ1 ,

The moment requirement is Est6 zt zt < ∞. The test can be restricted to concern
only a subvector of ψ by assuming that some elements of ψ equal zero a
priori.
    This test can in practice be applied in the same way as the linearity test
by defining the set S of potential transition variables and carrying out the test
against every variable in the set. In practice, S may often be the same set as the
one used at the specification stage.
    As a special case, one may test restrictions imposed on the STR model.
Assume that the estimated equation contains the exclusion restriction φ (0) = 0
or, alternatively, φ (0) = −θ (0) , where φ (0) and θ (0) are subsets of elements of φ
and θ. For notational simplicity, consider the former case. The validity of the
restriction may be tested after estimating the restricted model by testing the
hypothesis φ (0) = 0 in the linearly augmented STR equation

          yt = φ (1) zt + θ  zt G(γ1 , c1 , s1t ) + φ (0) zt + u t ,
                        (1)                                           (0)


where zt = (zt , zt ) and the elements in zt correspond to the coefficients in
                (0)   (1)                              (i)

φ (i) , i = 0, 1. The test is a straightforward LM test as no identification problem
is present in this situation. A corresponding test is available for testing the
validity of φ (0) = −θ (0) .
    An alternative parsimonious misspecification test would be the RESET of
Ramsey (1969) that is also mentioned in Chapter 2. In this context, RESET
is carried out by testing the hypothesis β2 = · · · = βh in another linearly aug-
mented STR equation
                                                      
                                                      h
          yt = φ  zt + θ  zt G(γ1 , c1 , s1t ) +
                                                                  j
                                                            β j
                                                               yt + u t ,
                                                      j=2

where yt is the fitted value of yt from the estimated STR model. It should be
pointed out, however, that, in practice, RESET has turned out not to be a very
powerful test in detecting misspecification of the STR model. It may be best
232      Timo Teräsvirta

viewed as a complement to the other tests available for evaluating the STR
model.

Testing parameter constancy. Parameter nonconstancy may indicate misspec-
ification of the model or genuine change over time in the economic relationship
described by the model. Either way, parameter constancy is one of the hypothe-
ses that has to be tested before the estimated model can be used for forecasting
or policy simulations. The alternative to parameter constancy allows smooth
continuous change in parameters. This is different from the considerations in
Chapter 3, where the alternative is a single structural break. The present alter-
native does, however, contain a structural break as a special case. To consider
the test, rewrite (6.1) as follows:
         yt = φ(t) zt + θ(t) zt G(γ , c, st ) + u t , γ > 0,                    (6.9)
where
         φ(t) = φ + λφ Hφ (γφ , cφ , t ∗ )                                    (6.10)
and
         θ(t) = θ + λθ Hθ (γθ , cθ , t ∗ ),                                   (6.11)
where t ∗ = t/T and u t ∼ iid N (0, σ 2 ). Functions Hφ (γφ , cφ , t ∗ ) and
Hθ (γθ , cθ , t ∗ ) are defined as in (6.2) with st = t ∗ . They represent two time-
varying parameter vectors whose values vary smoothly between φ and φ + λφ
and θ and θ + λθ , respectively. Equations (6.9), (6.10), and (6.11) define a time-
varying, smooth transition regression (TV–STR) model. Its univariate counter-
part, the TV–STAR model, is discussed in detail in Lundbergh, Teräsvirta & van
Dijk (2003). The null hypothesis of parameter constancy equals γφ = γθ = 0,
whereas the alternative H1 : “either γφ > 0 or γθ > 0 or both.” Testing subhy-
potheses is possible by setting elements of λφ and λθ to zero a priori.
    In principle, it would also be possible to construct similar alternative hy-
potheses for the parameters γ and c in the transition function G. Time variation
implied by such alternatives would, however, be more difficult to detect in prac-
tice than time variation in φ and θ. For this reason, testing constancy of γ and
c is not considered here.
    The TV–STR model is only identified when γφ , γθ > 0. To circumvent the
problem, we proceed as in Section 6.3.1 and expand (6.10) and (6.11) into
Taylor series around the null hypothesis. A first-order Taylor expansion around
γψ = 0, if the order of the logistic function K = 3, has the following form after
reparameterization:

         T (γψ , cψ , t ∗ ) = (1/2) + (γψ /2){δ0 + δ1 t ∗ + δ2 (t ∗ )2 + δ3 (t ∗ )3 }
                                                 (ψ)         (ψ)   (ψ)      (ψ)


                            +R1 (γψ , cψ , γψ , cψ , t ∗ )                    (6.12)
          Smooth Transition Regression Modeling                                                                 233

for ψ = φ, θ, where R1 is the remainder. If one approximates (6.9) using (6.10)
and (6.11) using (6.12) and reparameterizes the following nonlinear auxiliary
regression results:
                              
                              3                             
                                                            3
          yt = β0 zt +             β j {zt (t ∗ ) j } +         β j+3 {zt (t ∗ ) j }G(γ , c, st ) + u ∗t ,
                              j=1                           j=1

                                                                                                          (6.13)
where β j = 0, j = 1, . . . , 6, if and only if the null hypothesis γφ = γθ = 0
holds. Note that u ∗t = u t under the null hypothesis. The new null hypothesis
thus equals β j = 0, j = 1, . . . , 6. As already mentioned, testing subhypotheses
by assuming that the parameters not under test are constant, is possible and
results in obvious modiﬁcations in (6.13); see Teräsvirta (1998) for discussion.
   The LM-type test for testing the current null hypothesis is analogous to
the ones in the preceding sections. The auxiliary regression now consists of
regressing residual u t (or yt ) on
          vt = [zt , zt t ∗ , zt (t ∗ )2 , . . . , zt (t ∗ )3 G(γ , c, st )] .
The F-version of the test is recommended because vt is a (7(m + 1) × 1) vector
and the number of degrees of freedom in the χ 2 -test would equal 6(m + 1).
Modifying the test for other values of K is straightforward. When θ = 0 in
(6.1), the test collapses into the corresponding parameter constancy test in a
linear model discussed in Eitrheim & Teräsvirta (1996) and Teräsvirta (1998).
In what follows, we call the test statistic LMK, where K indicates the order of
the polynomial in the exponent of Hφ (γφ , cφ , t ∗ ) and Hθ (γθ , cθ , t ∗ ). Carrying
out the test for a small number of parameters at a time is advisable, for the results
may yield important information about causes of possible misspeciﬁcation of
the model.
   Note that in Eitrheim & Teräsvirta (1996) and Teräsvirta (1998) it is as-
sumed that γφ = γθ . This restriction, however, affects neither the form nor the
asymptotic null distribution of the test statistic and has implications only if
the alternative model is actually estimated. This need not automatically be the
case because a rejection of parameter constancy may often be interpreted as an
indication of missing variables or other misspeciﬁcation of the functional form.

Other tests. Although the tests just discussed may be the most obvious ones
to use when an estimated STR model is evaluated, other tests may be useful.
One may, for example, test the null hypothesis of no ARCH using tests dis-
cussed in Chapter 2. Applied to macroeconomic equations, these tests may
most conveniently be regarded as general misspeciﬁcation tests because it is
unlikely that ARCH would be present, for example, in quarterly macroecono-
metric equations. Notice, however, that such tests cannot be expected to be
very powerful against misspeciﬁcation in the conditional mean. In fact, as
234      Timo Teräsvirta

Luukkonen, Saikkonen & Teräsvirta (1988b) pointed out, the LM test of no
ARCH only has trivial local power against misspecification of that kind. The
Lomnicki–Jarque–Bera normality test (see Chapter 2) is also available here. It
is sensitive to outliers, and the result should be considered jointly with a visual
examination of the residuals.

What to do when at least one test rejects. Although carrying out the misspec-
ification tests just discussed is straightforward, it may not always be easy to
decide what to do when some of them reject the null hypothesis. Error auto-
correlation indicates misspecification but is not specific about its nature. The
test may not only have power against misspecified dynamics but also against
omitted variables. Rejecting the null of no additive nonlinearity may suggest
adding another STR component to the model. But then, because a rejection as
such does not say anything definite about the cause, the idea of extending the
model further has to be weighted against other considerations such as the risk
of overfitting. Some protection against overfitting may be obtained by applying
low significance levels. This is important because the number of tests typically
carried out at the evaluation stage can be large.
    Parameter constancy tests are also indicative of general misspecification, and
there is no unique way of responding to a rejection. Note, however, that carrying
out the test for subsets of parameters can provide important information about
the shortcomings of the model and may suggest what to do next. In certain
cases, it may be reasonable to respond to a rejection by extending an estimated
ST(A)R model into a TV-ST(A)R model. Recent work by van Dijk, Strikholm
& Teräsvirta (2003) and Teräsvirta, Strikholm & van Dijk (2003) on time-
varying seasonal patterns in quarterly industrial production series constitutes
an example in which the TV–STAR model is an essential tool of the analysis.


6.4 Two Empirical Examples
In this section we consider two empirical examples of nonlinear modeling using
STR models. Our purpose is to illustrate the phases of the modeling cycle
presented in Section 6.3 and give examples of decisions the modeler has to
make during modeling. The first example is based on data from a chemical
experiment considered in Bacon & Watts (1971), who introduced the STR
model. The second example is from Lütkepohl, Teräsvirta & Wolters (1999).
The topic of the authors is modeling the demand for narrow money (M1) in
Germany.


6.4.1 Chemical Data
The observations in this modeling experiment come from Example 1 of Bacon &
Watts (1971). The purpose of the experiment they considered was to investigate
          Smooth Transition Regression Modeling                                    235




Figure 6.1. Observations of the logarithmic flow (cm), x-axis, and the logarithm of the
height of the stagnant layer (g/cm. s), y-axis. Source: Bacon & Watts (1971).

the effect of water flow down an inclined channel on the height of a stagnant
surface layer containing a certain surfactant. The thickness of the layer was
assumed to be a nonlinear function of the flow. The sample consisted of 29
independent observations (T = 29) of the thickness of the stagnant layer Yt
measured in centimeters and of flow X t measured in grams per centimeter and
second. The experimenter controlled X and observed the corresponding value
Y. The authors fitted an STR model to the logarithmic data using Bayesian
techniques. They defined the transition function as a hyperbolic tangent function
closely resembling the logistic function that has been a common choice in later
work. Figure 6.1 demonstrates a clearly nonlinear relationship between the
logarithmic flow (x-axis) and the logarithmic thickness of stagnant layer (y-
axis). When the flow is sufficiently strong, the thinning rate of the the stagnant
layer moves to a higher level.
    We repeat the example of Bacon and Watts by using our STR model. Fitting
a linear model to the data yields
          yt = 0.38 − 0.67 xt +
                               εt                                               (6.14)
                (0.023)   (0.032)

          T = 29, 
                  σ L = 0.124, R 2 = 0.943,         p RESET (2, 25) = 0.28,
where σ L equals the residual standard deviation and p RESET is the p-value of the
RESET. The test does not indicate any misspecification of (6.14). On the other
hand, the residuals arranged according to xt in ascending order and graphed
in Figure 6.2 show that the linear model is not adequate. The results of the
linearity tests in Section 6.3.1 appearing in Table 6.1 support this conclusion.
The p-values are remarkably small.
   Hypothesis H0 is the general null hypothesis based on the third-order Taylor
expansion of the transition function; see (6.4) . Hypotheses H04 , H03 , and H02
are the ones discussed in Section 6.3.1. Because the p-value of the test of H03
236       Timo Teräsvirta




Figure 6.2. Residuals of (6.14) arranged in ascending order of xt (x-axis: the value of
xt ; y-axis: residual 
                      εt ).

is much larger than the ones corresponding to testing H04 and H02 , the choice
of K = 1 in (6.2) (the LSTR1 model) is quite clear. This is also obvious from
Figure 6.1, for there appears to be a single transition from one regression line
to the other.
    The next step is to estimate the LSTR1 model, which yields
          yt = 0.57 − 0.39 xt
                (0.043)     (0.034)

                                                   σx1 )(xt − 0.30 )})−1 + ,
               −( 0.21 + 0.49 xt )(1 + exp{−( 2.5 /,                       ut
                   (0.28)     (0.14)               (0.30)           (0.24)

                                                                                (6.15)
                  σ = 0.014 R = 0.9994, 
          T = 29, ,                    2
                                        σ L /,
                                             σ = 0.115,
where , σx1 is the sample standard deviation of xt , and ,
                                                         σ is the residual standard
deviation. Note that there are two large standard deviations, which suggests that
the full model may be somewhat overparameterized. This is often the case when
the STR model is based on the linear model without any restrictions. Model
(6.15) is a “mini-example” of such a situation. It may appear strange that the
need to reduce the size of the model is obvious in this model already because

Table 6.1. p-Values of the linearity
tests of model (6.14)

Hypothesis        Transition variable
                  xt
H0                7 × 10−22
H04               9 × 10−7
H03               0.011
H02               8 × 10−18
          Smooth Transition Regression Modeling                                     237




Figure 6.3. Transition function of model (6.16) as a function of the transition variable.
Each dot corresponds to at least one observation.


it only has a single explanatory variable. On the other hand, the number of
observations is as small as 29, which probably explains this outcome.
    The first reaction of the modeler would perhaps be to tighten the specification
by removing the nonlinear intercept. Another possibility would be to restrict
the intercepts by imposing the other exclusion restriction φ0 = −θ0 . In fact, the
latter alternative yields a model with a slightly better fit than the former one.
The model estimated with this restriction is

          yt = 0.61 − 0.37 xt
                (0.21)      (0.017)

                                                   σx1 )(xt − 0.55 )})−1 + ,
               −( 0.61 + 0.27 xt )(1 + exp{−( 2.3 /,                       ut
                   (0.21)      (0.040)               (0.21)           (0.025)

                                                                                  (6.16)
          T = 29, ,
                  σ = 0.014, R = 0.9994, 
                                         σ L /,
                                         2
                                              σ = 0.114.

The estimated standard deviations of all estimates in (6.16) are now appreciably
small, and thus further reduction of the model size is not necessary. The fit of
both (6.15) and (6.16) is vastly superior to that of (6.14) , whereas there is little
difference between the two LSTR1 models. The residual standard deviation of
these models is only about one-tenth of the corresponding figure for (6.14) .
Such an improvement is unthinkable when economic time series are being
modeled. The graph of the transition function as a function of the observations
in Figure 6.3 shows that the transition is indeed smooth. The graph does not
convey the fact that eight observations (slightly less than one-third of the total)
lie to the right of 0.55, the estimate of the location parameter c.
    The test of no additive nonlinearity [H0 : β1 = β2 = β3 = 0 in (6.8)] has
the p-value 0.71. In testing H02 : β1 = 0|β2 = β3 = 0, a test based on a first-
order Taylor expansion of H (γ2 , c2 , s2t ) and thus one against another LSTR1
238      Timo Teräsvirta

component, we find that the p-value of the test equals 0.30. These results show
that nonlinearity in this data set has been adequately characterized by the LSTR1
model. The tests of no error autocorrelation and parameter constancy are not
meaningful here in the same way as they are in connection with time series
models, and they have therefore not been applied to model (6.16).

6.4.2 Demand for Money (M1) in Germany
The second example concerns modeling the demand for money in Germany and
follows Lütkepohl et al. (1999), which we will abbreviate, as LTW. The authors
considered the stability of a German demand-for-money function and were
also interested in possible nonlinearity. In particular, the effects of the German
unification on the demand for money (M1) were of interest. The observation
period covered the quarters from 1960Q1 to 1995Q4. The main variables were
the logarithm of money stock (M1) m t , the logarithm of gross national product
yt , the logarithm of the GNP deflator pt , and a long interest rate Rt . The exact
definitions of variables can be found in LTW.
    A cointegration analysis (see Chapter 3 for discussion) gives the result that
there is a single cointegrating relationship among the nonstationary variables of
interest. As in LTW, this cointegrating combination of m t , yt , and Rt is denoted
by z t∗ . STR modeling, to be reviewed here, has been preceded by an analysis
showing that the seasonal pattern in the demand of money has changed as a
result of German Monetary Unification on 1 July 1990. This has resulted in the
introduction of a set of seasonal dummies complementing the ones already in the
model. The new dummies obtain nonzero values only from 1990Q3 onwards.
    Our description of the modeling process begins at the stage where the new
seasonals have been incorporated in the linear model of m t . The estimated
equation has the form
         m t = 0.16 yt − 0.12 yt−1 − 0.17 yt−2 − 0.52 Rt
                  (0.057)      (0.044)         (0.055)           (0.23)
                                                  ∗
                  − 0.54 pt − 0.81 Rt−1 −0.16 z t−1          αt d t +
                                                      − 0.13 +         εt
                    (0.080)        (0.25)       (0.021)          (0.028)
                                                                            (6.17)
                                                             2
           T = 140[1961(1) − 1995(4)], 
                                       σ L = 0.013, R = 0.94,
                   pLJB = 0.14,
           pLMARCH (1) = 0.32, pLMARCH (4) = 0.31,
           pLM AR (1) = 0.60, pLM AR (4) = 0.97, p RESET (2, 124) = 0.23,
where αt d t is the estimated linear combination of the seasonal dummies, 
                                                                            σ L is
the residual standard deviation, pLJB is the p-value of the Lomnicki–Jarque–
Bera normality test, pLMARCH (q) is the p-value of the LM test of no ARCH
          Smooth Transition Regression Modeling                                  239

Table 6.2. p-values of parameter constancy tests of model (6.18)

                                                        Test statistic
Hypothesis                                      LM1        LM2           LM3
Constant (only) under H0 :
All parameters except new seasonals             0.45       0.18          0.21
Intercept and regular seasonal dummies          0.66       0.83          0.87
                 ∗
Coefficient of z t−1                            0.64       0.89          0.74
Coefficient of Rt                              0.083      0.044         0.077


against ARCH at most of order q, and pLM AR (q) is the p-value of the LM test
of no error autocorrelation against autocorrelation at most of order q. All these
tests have been discussed in Chapter 2. Not one of these tests, including RESET,
indicates misspecification of the model. Results of tests of parameter constancy
can be found in Table 6.2.
    They show, by and large, that model (6.18) has constant parameters. In par-
ticular, the introduction of the postunification seasonal dummies has stabilized
the seasonal parameters. The effect of the error correction term on m t is sta-
                  ∗
ble. Note that z t−1 is treated in the same way as the other variables, although
it contains estimated parameters. As explained in Chapter 3, the estimators of
these parameters are superconsistent, and the estimates can therefore be taken
as constants in this context. The last row of Table 6.2 contains the smallest
p-values found in the tests (not all results are reported). They concern the co-
efficient of the unlagged long-term interest rate variable Rt . Given the large
number of tests, they are not deemed worthy of further consideration.
    A stable linear equation offers a good starting point for testing linearity. The
results of the linearity tests can be found in Table 6.3. The p-values of tests of
H04 and H03 are not reported in cases where H0 is not rejected at the 5% level of
significance. The results show that there is only weak evidence of nonlinearity
                                                    ∗
and that it centers around the error correction z t−1   and the quarterly rate of

Table 6.3. p-values of linearity tests of model (6.18)

                                  Transition variable
                                                                     ∗
Hypothesis     yt−1      yt−2     Rt       Rt−1      pt       z t−1
H0             0.81       0.15      0.083     0.91       0.047     *
H04                                                      0.11      *
H03                                                      0.27      *
H02            0.32       0.62      0.14      0.98       0.087     0.063
Note: An asterisk means that the value of the test statistic has not been
computed owing to near singularity of the moment matrix.
240      Timo Teräsvirta

                                                                               ∗
inflation pt . It has not been possible to test the null hypothesis when z t−1
is the transition variable in the alternative because the moment matrix to be
inverted has been nearly singular. If pt is chosen to be the transition variable
of the STR model, the test sequence discussed in Section 6.3.1 clearly points
to an LSTR1 model.
    A sensible decision in this situation is to consider STR models with both pt
       ∗
and z t−1 as transition variables. The ultimate choice of LTW is a model with
pt as a transition variable. The final model estimated following a reduction in
size has the following form:
         m t = 0.37 yt − 0.19 yt−2 − 0.59 Rt − 0.95 Rt−1
                  (0.069)      (0.052)         (0.21)       (0.22)

                                     ∗
                  −0.48 pt − 0.28 z t−1         α  d t + ( 0.19 − 0.17 yt
                                         − 0.28 +,
                    (0.12)      (0.043)       (0.056)             (0.061)   (0.051)

                                        ∗
                  − 0.18 yt−1 + 0.15 z t−1 )(1 + exp{−( 47 /,
                                                             σp
                                                              1
                                                                 )pt })−1 +,
                                                                            εt
                    (0.045)        (0.046)                 (54)

                                                                                 (6.18)

          T = 140[1961(1)-1995(4)], ,
                                    σ = 0.012, 
                                               σ L /,
                                                    σ = 0.965, R 2 = 0.96

          pLJB = 7 × 10−4 , pLMARCH (1) = 0.86, pLMARCH (4) = 0.52

                        pLMAR (1) = 0.94, pLMAR (4) = 0.83,
where ,
      σp
       1
          is the sample standard deviation of pt and ,
                                                      σ is the residual standard
deviation.
    LTW discuss the economic interpretation of the STR-equation (6.18) – its
nonlinear features in particular. In this exposition, details related to modeling
will be in the foreground. First, note that the reduction in the residual standard
deviation, compared with (6.18) , is only 3.5%. This accords with the fact
that linearity was not rejected very strongly. Second, it may seem surprising
that normality of errors is rejected: that was not the case in equation (6.18) .
A comparison of residuals from both models shows that the STR model has
practically eliminated a few large positive residuals present in (6.18) but has
not done anything to the largest negative residuals in that model. This has led to
negative skewness in the residuals of (6.18) and caused a rejection of normality.
Third, the estimate of the slope parameter γ in the transition function has a large
standard deviation. This is an example of the situation discussed in Section 6.3.2.
As seen from Figure 6.4, the transition function has a steep slope, quite different
from the one in the previous example, and the large standard deviation estimate
is a numerical consequence of this fact.
    The other statistics below the estimated STR equation do not indicate
misspecification. An interesting issue is whether the model is a satisfactory
           Smooth Transition Regression Modeling                                          241




Figure 6.4. Transition function of (6.18) as a function of observations. Each dot cor-
responds to an observation. The transition variable is pt .


characterization of the nonlinearity detected at the specification stage. This is
considered using the tests of no additive nonlinearity. The results can be found
in Table 6.4.
    The results for the two hypotheses H04 and H03 have been omitted because
H0 is not strongly rejected. Two details deserve attention. First, the nonlinearity
                                              ∗
indicated by the results in columns pt and z t−1 of Table 6.3 has been adequately
modeled. The corresponding p-values in Table 6.4 are large. On the other hand,
the trace of nonlinearity signaled by the linearity test against STR with the
interest rate variable Rt as the transition variable has remained and become
slightly more visible. But then, the p-values in the corresponding column of
Table 6.4 are not sufficiently small to cause any action.
    Model (6.18) already had constant parameters. The STR model (6.18) passes
all parameter constancy tests, and results of the tests are therefore not reported
here. It should be mentioned, however, that the three tests for the coefficients of
Rt now have p-values between 0.13 and 0.26. As a whole, the model appears
adequate. This does not exclude the possibility that some other nonlinear model
would not fit the data better than (6.18) , but within the STR family and the
given information set, (6.18) appears to be a reasonable specification.

Table 6.4. p-values of the test of no additive nonlinearity in model (6.18)

                                         Transition variable
                                                                                  ∗
Hypothesis      yt        yt−1     yt−2      Rt       Rt−1       pt       z t−1
H0              0.28       0.80      0.077      0.062     0.91        0.44      *
H02             0.055      0.41      0.46       0.071     0.94        0.999     0.622
Note: An asterisk indicates that the value of the statistic has not been computed owing
to near-singularity of the moment matrix.
242      Rolf Tschernig

6.5 Final Remarks
This chapter has emphasized the modeling cycle for building STR models.
Nevertheless, the linearity tests discussed in Section 6.3.1 can also be used as
general tests against nonlinearity. Even the builders of switching regression or
threshold autoregressive models may use them because the tests also have power
against these nonlinear models. In that case they may be seen as a computation-
ally simple alternative offered by JMulTi to the simulation or bootstrap-based
linearity tests against threshold autoregressive models that Hansen (1999) has
advocated. Likewise, as Eitrheim & Teräsvirta (1996) have pointed out, the
test of no additive nonlinearity can be applied to checking the adequacy of a
switching regression or a threshold autoregressive model.
7        Nonparametric Time Series
         Modeling

Rolf Tschernig




7.1 Introduction
As the previous chapters have shown, parametric time series modeling offers
a great wealth of modeling tools. Linear time series models are generally the
starting point for modeling both univariate and multivariate time series data.
Such data may also exhibit nonstationary behavior caused by the presence of
unit roots, structural breaks, seasonal influences, and the like. If one is interested
in nonlinear dynamics, it is no longer sufficient to consider linear models. This
situation arises if, for example, the strength of economic relationships depends
on the state of the business cycle or if the adjustment speed toward long-run
equilibrium relationships is not proportional to the deviation from the long-run
equilibrium. Chapter 6 discusses how to build nonlinear parametric models for
various kinds of nonlinear dynamics, including those of business cycles. There
it is also explained how the parameter estimates can be used to understand the
underlying nonlinear dynamic behavior.
    However, nonlinear parametric modeling also has its drawbacks. Most im-
portantly, it requires an a priori choice of parametric function classes for the
function of interest. The framework of smooth transition regression models
discussed in Chapter 6, for example, is widely used. Although it is an appro-
priate modeling framework for many empirical problems, it may not always
capture features that are relevant to the investigator. In the latter case, one
has to choose alternative nonlinear parametric models like neural networks or
Markov-switching models to name a few. Thus, nonlinear parametric modeling
implies the difficult choice of a model class.
    In contrast, when using the nonparametric modeling approach, one can avoid
this choice. For example, when using local linear estimation it is sufficient to
assume that the function of interest is continuously differentiable up to second
order.
    This generality has its price. Nonparametric estimators are known to suffer
from the “curse of dimensionality.” This means that the rate of convergence of

                                                                                  243
244       Rolf Tschernig

the estimates decreases with the number of explanatory variables in the model
(see Section 7.2.2). The “curse of dimensionality” becomes even more of a
problem if one wants to estimate multivariate time series models with many
dimensions and a large number of lagged variables nonparametrically. For that
reason nonparametric multivariate modeling is generally not very useful for
small samples. One promising alternative is the use of semiparametric multi-
variate time series models. They are, however, beyond the scope of this chapter.
   Therefore, we focus in this chapter on the nonparametric estimation of uni-
variate nonlinear time series models. These models may contain conditionally
heteroskedastic errors and seasonal features. Deferring seasonal models to Sec-
tion 7.6, we assume that a univariate stochastic process {yt }t≥1 is generated by
the conditionally heteroskedastic nonlinear autoregressive (NAR) model
          yt = µ(xt ) + σ (xt )ξt ,                                                  (7.1)
                                        
where xt = (yt−i1 , yt−i2 , . . . , yt−im ) is the (m × 1) vector of all m correct lagged
values, i 1 < i 2 < · · · < i m , the ξt ’s, t = i m + 1, i m + 2, . . ., denote a sequence
of iid random variables with zero mean and unit variance, and µ(·) and σ (·)
denote the conditional mean and volatility function, respectively. To facilitate
notation, (7.1) is written such that the conditional mean µ(·) and the conditional
volatility function σ (·) are based on the same lags. However, the estimators and
their asymptotic theory presented in this chapter also hold as long as the lags
needed for modeling σ (·) are also required for modeling µ(·) but not vice
versa. Thus, a nonlinear time series with homoskedastic errors is included in
the present setup. Note that the vector xt does not necessarily include consec-
utive lags. This would unnecessarily increase the “curse of dimensionality” if
not all lags are relevant. Therefore, lag selection must be more advanced than
simply determining the order of the model, i m , as it is usually done in the case
of linear autoregressive models. It should also be mentioned that it is possible
to extend the vector xt by exogenous variables, but this option is not further
discussed in this chapter.
    In practice, the functions µ(·) and σ (·), the number of lags m, and the lag
indices i 1 , i 2 , . . . , i m are unknown and have to be estimated or selected. In this
chapter we provide a brief introduction to nonparametric modeling of the NAR
model (7.1) and some extensions.
    The chapter is organized as follows. In Section 7.2 we derive the local lin-
ear and the Nadaraya–Watson estimator for the conditional mean function µ(·)
on the assumption that the correct lags i 1 , . . . , i m and thus xt are known. In
Section 7.3 we present nonparametric methods for estimating the asymptoti-
cally optimal bandwidth and for selecting the relevant lags. Section 7.4 briefly
discusses some diagnostic tests for checking the residuals. All these steps are
illustrated with a running example. The nonparametric estimation of the con-
ditional volatility function σ (·) is presented in Section 7.5. In Section 7.6 the
nonparametric theory for fitting NAR models is extended to various seasonal
          Nonparametric Time Series Modeling                                        245

nonlinear autoregressive models. The last two sections illustrate the presented
nonparametric tools. Section 7.7 shows how to model the conditional mean
function of the monthly changes of U.S. average weekly working hours. Sec-
tion 7.8 discusses the modeling of a conditional volatility function for the daily
returns of the XETRA Dax index.


7.2 Local Linear Estimation
First we will explain the principles of local polynomial estimation applied to the
estimation of the conditional mean function and derive the local constant and
local linear estimator. We then present their asymptotic properties including a
heuristic discussion of the required assumptions. The construction of confidence
intervals is also explained. At the end of this section we show how one can
partially visualize the function estimates in the case of higher dimensional
regressors and how to obtain forecasts.


7.2.1 The Estimators
Local estimation of µ(x) means estimating µ(·) separately for each (m × 1)
vector x = (x1 , x2 , . . . , xm ) of interest. Note that x is scalar if m = 1 and xt is
scalar. The starting point for deriving the local linear estimator is the fact that,
although µ(x) is not observable, it appears in a first-order Taylor expansion of
µ(xt ) taken at x,
                             ∂µ(x)
          µ(xt ) = µ(x) +          (xt − x) + R(xt , x),                           (7.2)
                              ∂x
where R(xt , x) denotes the remainder term. Inserting this expansion into the
model equation (7.1) yields
                           ∂µ(x)
          yt = µ(x)1 +           (xt − x) + R(xt , x) + εt ,
                            ∂x
where we now use the symbol εt for the stochastic error term. Observe that the
right-hand side contains two known terms, the constant one multiplied by the
unknown µ(x) and the known term (xt − x) multiplied by the vector of unknown
first partial derivatives ∂µ(x)
                            ∂x
                                . Thus, were there no remainder term R(xt , x), one
would have a simple OLS regression problem in which the estimated parameters
correspond to the estimated function value µ̂(x) at x and the estimated vector
 
∂µ(x)
  ∂x
       of first partial derivatives also evaluated at x.
    However, whenever the conditional mean function is nonlinear, the remainder
term R(xt , x) may be nonzero at x. Using standard OLS estimation would then
result in biased estimates for which the size of the bias depends on all remainder
terms R(xt , x), t = 1, . . . , T . One possibility to reduce the bias is to use only
those observations xt that are in some sense close to x. More generally, one
246      Rolf Tschernig

downweighs those observations that are not in a local neighborhood of x. If
more data become available, it is possible to decrease the size of the local
neighborhood, where the estimation variance and the bias can decrease. In this
sense, the approximation error of the model can decline with sample size. This
is the main idea underlying nonparametric estimation.
    Technically, the weighing is controlled by a so-called kernel function K (u),
where in the following it is assumed that this function is a symmetric,
                                                                           compactly
supported, nonnegative, univariate probability density so that K (u)du = 1.
Typical examples are the uniform density K (u) = I (|u| ≤ 1/2) or the quartic
kernel K (u) = 1516
                    (1 − u 2 )I (|u| ≤ 1) (see also Chapter 2). Here I (·) denotes the
indicator function. In practice, one can also use the Gaussian density. To adjust
the size of the neighborhood one introduces a bandwidth h such that for a scalar
x the kernel function becomes
                       
          1      xt − x
             K             .
          h          h
Thus, the larger h is chosen, the larger is the neighborhood around x, where
sample observations receive a large weight and the larger may be the estima-
tion bias. Because a larger h implies function estimates will look smoother, the
bandwidth h is sometimes also called a smoothing parameter. Since the obser-
vations in the local neighborhood of x are the most important, this estimation
approach is called local estimation.
   If m > 1 and x = (x1 , . . . , xm ) is a vector, one uses a product kernel
                                               
                          m
                              1         xti − xi
          K h (xt − x) =          K                .
                         i=1
                             hm             h

Here xti denotes the ith component of xt . Instead of using a scalar bandwidth
that imposes the same degree of smoothing in all directions, it is also possible
to use a vector bandwidth that determines the amount of smoothing in each
direction separately. The latter option is further discussed, for example, in Yang
& Tschernig (1999). In Section 7.2.2, we will see that quantities suchas the ker-
nel variance σ K2 = u 2 K (u)du and the kernel constant ||K ||22 := K (u)2 du
influence the asymptotic behavior of the local linear estimator.
    Owing to the introduction of a kernel function, one now has to solve a
weighted least-squares problem
           {ĉ, ĉ1 , . . . , ĉm } =
                                                                                 2
                                       
                                       T                        
                                                                m
              arg       min                          yt − c −         ci (xti − xi ) K h (xt − x),
                    {c,c1 ,...,cm }
                                      t=i m +1                  i=1

which delivers the local linear function estimate µ(x, h) = ĉ at the point x.
The bandwidth h is also included as an argument to indicate the dependence
         Nonparametric Time Series Modeling                                                 247

of the estimation result on the bandwidth. This estimator is described as being
local linear because it is based on the first-order Taylor approximation (7.2).
Since no parameters in the sense of parametric models are estimated, this es-
timation approach is called nonparametric. Note that estimating the function
µ(·) on the complete support of x would require infinitely many estimations.
In practice, however, it is sufficient to estimate µ(·) on a grid or just at specific
values.
   With the matrices
                                                                 
                                              1     ··· 1
          e = (1, 01×m ) , Z(x) =                                   ,
                                         xim +1 − x · · · x T − x

                                                                                      
         W (x, h) = diag {K h (xt − x)/T }t=i
                                          T
                                              m +1
                                                   ,            y = yim +1 , . . . , yT ,
the local linear function estimator can also be written as a generalized least-
squares estimator
                                                     −1
         µ(x, h) = e Z (x)W (x, h)Z(x)                  Z (x)W (x, h)y.                (7.3)
   An even simpler local estimator is the local constant function estimator,
better known as the Nadaraya–Watson estimator, which is derived from a zero-
order Taylor approximation
                                           
                                           T
         µ N W (x, h) = ĉ = arg min                 {yt − c}2 K h (xt − x).
                                    {c}
                                          t=i m +1

The latter can also be written as
                                                       −1
         µ N W (x, h) = ZN W W (x, h)Z N W        ZN W W (x, h)y
                        T
                          t=i +1 K h (x t − x)yt
                      = T m                      ,                                       (7.4)
                           t=i m +1 K h (x t − x)

where Z N W = (1, . . . , 1)1×(T −im ) . The local linear estimator has preferable
asymptotic properties, however (see Section 7.2.2).
   The local constant and local linear estimators are the simplest cases of local
polynomial estimators. Other local polynomial estimators are obtained by using
higher-order Taylor expansions. In Section 7.3.1, a local quadratic estimator is
used to estimate second-order partial derivatives of µ(·).
   To apply the local linear estimator (7.3), one has to decide on a value for the
bandwidth h. If xt is one- or two-dimensional, one may plot the estimated func-
tion on a grid for various values of h. Knowing that increasing the bandwidth
potentially increases the estimation bias, whereas decreasing the bandwidth
lowers the estimation variance, one then may choose a bandwidth that produces
a smooth enough plot. Such a choice, however, is very subjective. A better
248      Rolf Tschernig

method for bandwidth choice, which is based on statistical procedures, is pre-
sented in Section 7.3.1. A well-grounded bandwidth choice is also necessary
for valid asymptotic properties of these estimators.

7.2.2 Asymptotic Properties
We first state the asymptotic distribution for the local linear estimator (7.3) and
then discuss the required assumptions. Let f (x) denote the density of the lag
vector at the point x and tr(A) the trace of a matrix A. Then the asymptotic
normal distribution of the local linear estimator (7.3) is given by
          √                                     d
            T h m µ(x, h) − µ(x) − b(x)h 2 → N (0, v(x)) ,                    (7.5)
where the asymptotic bias b(x) and asymptotic variance v(x) are
                      2         
                σ2     ∂ µ(x)
        b(x) = K tr                ,                                          (7.6)
                 2      ∂ x∂ x 
                  σ 2 (x)||K ||2m
         v(x) =                2
                                  .                                           (7.7)
                        f (x)
From (7.5) it becomes clear that, for the asymptotic normal distribution to exist,
one has to require T h m → ∞ and h → 0 as T → ∞. Otherwise, the asymptotic
distribution would “collapse to a point” or the bias would grow infinitely large.
Further assumptions are required.
    Inspecting the asymptotic bias term (7.6) more closely reveals that the
second-order partial derivatives of µ(x) have to exist. In fact, for (7.5) to hold
this has to be the case in a neighborhood of x. For this reason one has to assume
that µ(·) is twice continuously differentiable on the support of f (x). Because
both the density f (x) and the conditional variance σ 2 (x) enter the asymptotic
variance (7.7), one also has to assume that both are continuous and the latter is
positive on the support of f (x).
    Initially, the asymptotic distribution (7.5) was derived under the assumption
that {yt , xt } is a sample of iid observations. Then xt does not contain lags of yt
and there is no stochastic dependence between observations at different times.
In the current situation, where xt is a vector of lagged yt s, a stochastic depen-
dence clearly exists. Note that autocorrelation measures the linear stochastic
dependence within the yt s. As in the case of linear autoregressive models, where
one has to assume that the autocorrelations decrease fast enough if the distance
between observations increases, for (7.5) to hold one has to guarantee that the
stochastic dependence in general dies out quickly enough. In the present context
it is not sufficient to consider only dependence measured by the first moments
since the NAR process (7.1) is a nonlinear stochastic process, and thus higher
moments of the process yt matter as well. In the literature several measures exist
for quantifying stochastic dependence. Härdle & Yang (1998) showed that the
         Nonparametric Time Series Modeling                                    249

asymptotic behavior of the local linear estimator (7.3) is the same as that en-
countered in the case of iid variables if the stochastic dependence is sufficiently
weak. At this point it is sufficient to state that a stationary linear ARMA( p, q)
process satisfies the required conditions if its driving error process is not com-
pletely ill-behaved [see Doukhan (1994, Theorem 6) and Yang & Tschernig
(2002, Theorem 2) for a precise statement]. For empirical work, it is most im-
portant to transform a given time series to be stationary. Thus, prior to local
linear estimation one has to remove unit roots (see Section 2.7 in Chapter 2 for
unit root testing).
   Let us now discuss some implications of the asymptotic normal distribution
(7.5). Rewriting it in a somewhat sloppy way gives
                                                      
                                              1
          µ(x, h) ≈ N µ(x) + b(x)h 2 , m v(x) ,                               (7.8)
                                            Th
which nicely shows the asymptotic bias-variance trade-off. If h gets larger, the
bias increases but the variance diminishes and vice versa. In Section 7.3.1,
this asymptotic trade-off will be used to obtain an asymptotically optimal band-
width. Inspecting its formula given by (7.19) below shows that its rate of decline
is T −1/(m+4) . Thus, if we denote a positive constant by β, any bandwidth for
which h = βT −1/(m+4) holds has the optimal rate to guarantee a balanced de-
cline of bias and variance. Inserting h = βT −1/(m+4) into (7.5) delivers the
rate of convergence of the local linear estimator with respect to the number of
observations T , that is,
                                                             
                                      d                 1
          T 2/(4+m) {µ(x, h) − µ(x)} → N b(x)β 2 , m v(x) .                  (7.9)
                                                       β
It becomes apparent that the rate of convergence of the local linear estimator
depends on the number m of lags and becomes quite slow if there are many
lags. This is frequently called the “curse of dimensionality” of nonparametric
estimators. Note that the rate of convergence is slower than for parametric
estimators even if m = 1. This is the price one pays in non-parametric estimation
for allowing the model complexity to increase with the number of observations
and thus to let the bias reduce with sample size. Such an increase in model
complexity
√             is in general not possible if one wants to obtain the parametric
   T -rate.
    By inspecting (7.6), one can see that the estimation bias also depends on the
second partial derivatives of the conditional mean function as well as on the
kernel variance σ K2 . The asymptotic variance (7.7) increases with the conditional
variance σ 2 (x) and decreases with the density f (x). The intuition for the latter
is that the larger the density, the more observations are on average close to the
point x and are thus available for local estimation, which in turn reduces the
estimation variance. The bias term b(x) can be estimated using (7.23) in Section
7.3.1. The estimation of v(x) requires estimating the density f (x), for example,
250       Rolf Tschernig

by (7.44) in the appendix to this chapter and the conditional variance σ 2 (x) by
one of the nonparametric estimators presented in Section 7.5.1.
   The asymptotic distribution of the Nadaraya–Watson estimator (7.4) has been
derived under various conditions [see, e.g., the survey of Härdle, Lütkepohl &
Chen (1997)]. One also obtains asymptotic normality, but the asymptotic bias
term b(x) in (7.5) has to be replaced by
                                              
                              2 ∂ f (x) ∂µ(x)
         b NW (x) = b(x) + σ K                   f (x).                    (7.10)
                                 ∂x ∂x
Thus, the asymptotic bias of the Nadaraya–Watson estimator includes a further
term that contains the first partial derivatives of the density f (x) and of the
conditional mean function µ(x). Its bias is therefore not design-adaptive since
the bias depends on the density at x.

7.2.3 Confidence Intervals
From the asymptotic distribution (7.8), one can also derive an asymptotic
(1 − α)-percent confidence interval for µ(x),
                                                                      
                                  v(x)                              v(x)
        µ(x, h) − b(x)h − z α/2
                        2
                                        , µ(x, h) − b(x)h + z α/2
                                                         2
                                                                           ,
                                  Th m                              Th m
where z α/2 denotes the (1 − α/2) quantile of the normal distribution. Note first
that the length as well as the location of the confidence interval depends on
the chosen bandwidth h. Second, the asymptotic bias b(x) and the asymptotic
variance v(x) have to be consistently estimated, for example, by the methods
discussed in Section 7.3.1. As will be seen there, a consistent bias estimate
requires the estimation of second-order partial derivatives. Such estimates can
be prone to a large variance, particularly if m is large and the sample size is
small. Thus, it may make sense to compute confidence intervals without the
bias correction b(x)h 2 as follows:
                                                         
                              v(x)                     v(x)
            µ(x, h) − z α/2        , µ(x, h) + z α/2          .          (7.11)
                              Th m                     Th m
   It should be noted that if the stochastic process (7.1) is homoskedastic, one
has σ (x) = σ and v(x) given by (7.7) facilitates to σ 2 ||K ||2m  2 /f (x). In Section
7.5 we will discuss how to estimate σ (x) and σ . The density f (x) can be
estimated by (7.44) in the appendix to this chapter.
   Often one is not only interested in the confidence interval for the function
value at a single x but for the function itself. If it is sufficient, to consider confi-
dence intervals jointly for a finite number J of grid points {x (1) , x (2) , . . . , x (J ) },
then one can use Bonferroni confidence intervals (see the appendix for their
derivation). In this case, the length of the confidence intervals depends on the
          Nonparametric Time Series Modeling                                           251

number of grid points J . If a confidence set not only for a finite number of points
of the function but for the function itself is needed, one has to estimate confi-
dence bands [see Neumann & Polzehl (1998) for their derivation and estimation
in case of nonlinear autoregressive processes (7.1)].


7.2.4 Plotting the Estimated Function
In general, one is not only interested in the function value µ(x) at one particular
regression point x but in the behavior of the function on important parts of its
domain. In this case, one may compute and plot the function on a grid of points
{x (1) , . . . , x (J ) }. If x is scalar, the J grid points are equidistantly chosen on the
interval [mint xt , maxt xt ].
    For a two-dimensional regressor vector x, J 2 grid points are used with J
equidistant points in direction i covering the interval [mint xti , maxt xti ]. Be-
cause this grid is rectangular, the function µ(·) may also be computed at points
outside the data range. Such estimates exhibit a large estimation variance since
the density f (·) at such points is very small and thus, by (7.7), the asymptotic
estimation variance v(x) is likely to be much larger than within the data range.
Therefore, all function estimates at points outside the data range should be
suppressed from a function plot.
    For an illustration, consider the time series of seasonally adjusted, quarterly
German consumption for the period 1960Q1–1982Q4. In later sections this
example will be picked up again to illustrate other aspects of the nonparamet-
ric modeling procedure. This data set was already analyzed in Section 2.9 of
Chapter 2 using linear models. There it was found that a linear autoregressive
model with lags 2 and 3 describes the first differences of the logged data well.
Using the same lags and using the plug-in bandwidth (7.24) derived in Section
7.3.1, Figure 7.1(a) shows the local linear estimates of µ(·) on the described
grid with J = 30.
    Inspecting the plot suggests that there are a few observations that are some-
what outside the main data range. If this is the case, then such data points can
be expected to have a small density just like points that are completely outside
the data range. One therefore may wish to exclude such points from the plot as
well. Therefore, it may be useful to remove all function estimates from the plot
at points for which the estimated density f (x, h) is in the β-percent quantile of
lowest density values. If the plot is redrawn using β = 0.1, one obtains the plot
in Figure 7.1(b). Note that for the latter plot the data were standardized with
standard deviation 0.0110, and thus the labeling of the axes is useful. Now the
function plot has become easier to evaluate. Overall, the function looks quite
linear although, some curvature is still visible.
    One quick way to explore the statistical relevance of the nonlinearity is to plot
Bonferroni confidence intervals given by (7.11) and (7.43) in the appendix of
this chapter. Since plotting three surfaces into one graph is not very instructive,
252       Rolf Tschernig




(a) All grid points within data range




(b) All grid points for which the estimated density is within the 10%-quantile are removed
and the data are standardized with standard deviation 0.0110
Figure 7.1. Plot of the estimated conditional mean function of the growth rate of the
seasonally adjusted, quarterly German consumption.
         Nonparametric Time Series Modeling                                      253




Figure 7.2. Plot of Bonferroni confidence intervals (CI) with 95% confidence level
around the estimated conditional mean function of the growth rate of the seasonally
adjusted, quarterly German consumption with the third lag set to the estimated mean.
(Dashed lines are based on conditionally heteroskedastic errors, and dotted lines are
based on homoskedastic errors; 10% of the observations with the lowest density are
removed.)


one may plot confidence intervals by letting the grid vary only in direction
i and keeping the other directions fixed. With x3 set to the estimated mean,
                                                          (1)              (J )
the estimated Bonferroni confidence intervals for µ(x2 , x3 ), . . . , µ(x2 , x3 )
of the German consumption are shown in Figure 7.2. The figure contains two
confidence intervals with 95% confidence level. The dashed lines are based on
the estimated conditional volatility σ (x), whereas the dotted lines are obtained
under the assumption of a homoskedastic process. All estimates for which
the density estimate is within the 10%-quantile are removed. Both confidence
intervals do not indicate any significant nonlinearity because one can imagine
replacing the nonlinear function estimates by a straight line without touching
the boundaries of the confidence intervals. Repeating this exercise for other
values of x3 does not lead to different results nor does switching the role of lag
2 and lag 3.
   Keep in mind that this procedure cannot replace a nonlinearity test. It can,
however, help to determine regions where nonlinearities are important. Non-
parametric nonlinearity tests have been developed, for example, by Hjellvik,
Yao & Tjøstheim (1998) or Lee & Ullah (2001). As an alternative one can use
the parametric nonlinearity tests developed by Eitrheim & Teräsvirta (1996)
(see Chapter 6). Another possibility for checking the importance of estimated
nonlinearities is to conduct rolling-over, out-of-sample forecasts. They are de-
scribed in Section 7.4.
254       Rolf Tschernig

   Of course, the function graph cannot be plotted if there are more than two
lags. However, it is then still possible to graph the function if the grid is taken in
two user-specified directions with the value of x in the remaining directions kept
fixed. When interpreting such plots, one has to bear in mind that changing the
conditioning values also changes the plot. Thus, the absence of nonlinearity for
several conditioning values does not rule out nonlinearity in other data regions.
For an example with more than two lags, see Section 7.7.


7.2.5 Forecasting
It is easy to obtain a nonparametric, one-period-ahead forecast for a time series.
One need only estimate µ(x T +1 ) local linearly. By following a procedure similar
to that used to compute a confidence interval for the function estimate, one can
compute a prediction interval. In the confidence          intervals (7.11), one simply
replaces the standard deviation
                                         of estimation    v(x)/(Th m ) by the standard
deviation of prediction σ (x) + v(x)/(Th ).
                                  2                 m

    In practice, one is often interested in h-step ahead forecasts. Such forecasts
can be obtained by setting the first lag i 1 to h. Then it is possible to construct
x T +h = (yT +h−i1 , . . . , yT +h−im ), where the first component is just yT . For a de-
tailed discussion of such h-step-ahead forecasts, see Tschernig & Yang (2000a).
    We now turn to nonparametric methods for the estimation of the bandwidth
h and the relevant lags i 1 , . . . , i m .


7.3 Bandwidth and Lag Selection
The methods for nonparametric bandwidth and lag selection described in the
following are mainly based on Tschernig & Yang (2000b). For lag selection
it is necessary to specify a set of possible lag vectors a priori by choosing
the maximal lag M. Denote the full lag vector containing all lags up to M by
xt,M = (yt−1 , yt−2 , . . . , yt−M ) . The lag selection task is now to eliminate from
the full lag vector xt,M all lags that are redundant.
    For both bandwidth estimation and lag selection, it is first necessary to choose
an optimality criterion. A widely used criterion is the mean-integrated squared
error of prediction, which is commonly known as the final prediction error
(FPE) (see also Chapter 2). Here we state it by using a weight function w(·)
needed for obtaining consistency of the lag selection procedure. One has to
choose a weight function w(·) that is continuous and nonnegative and for which
 f (x M ) > 0 for x M in the support of w(·). The weight function must further
have a compact support with nonempty interior. The simplest example is the
indicator function being 1 on a specified set. To state the FPE for an arbitrary
set of lags, lag indices and other quantities that may differ from the correct ones
are indexed with a “+”. For a given bandwidth h and lag vector i 1+ , . . . , i m++ ,
          Nonparametric Time Series Modeling                                           255

the FPE is given by
                                                                               
            FPE(h, i 1+ , . . . , i m++ ) = E y̆t − µ(x̆t+ , h) w(x̆t,M )
                                                                  2

                                                                             
                             y̆ − µ(x̆ + , h) w(x̆ M ) f ( y̆, x̆ M )d y̆d x̆ M
                                               2
              =

                  × f (y1 , . . . , yT )dy1 · · · dyT .                             (7.12)
Here, the stochastic process { y̆t } is assumed to be independent of the process
{yt } but to have the same stochastic properties. Note that the outer integral
averages over all possible realizations of the estimator µ(x̆ + , h), which vary for
a given x̆ + , and bandwidth h with the sample realizations y1 , . . . , yT .
      Were the FPE(h, i 1+ , . . . , i m++ ) observable for all lag vectors under consid-
eration, i 1+ , . . . , i m++ , m + = 0, 1, . . . , M, then one would clearly select the lag
vector and bandwidth minimizing the FPE across all lag combinations consid-
ered.
      Because the FPE(h, i 1+ , . . . , i m++ ) is not observable, it has to be estimated.
In the literature, mainly two approaches have been suggested for estimating the
unknown FPE(·) or variants thereof, namely, cross validation [Vieu (1994), Yao
& Tong (1994)] or the estimation of an asymptotic expression of the FPE(·)
[Auestad & Tjøstheim (1990), Tjøstheim & Auestad (1994), Tschernig & Yong
(2000)].
      In addition to the previously stated assumptions, one has to assume that
the errors ξt , t ≥ i m + 1 have a finite fourth moment m 4 . This assumption is
needed to guarantee that the variance of estimators of the FPE(·) is bounded.
This assumption also must be made for standard lag selection in linear models.
      Under the stated assumptions, Tschernig & Yang (2000b, Theorem 2.1)
have shown that, for the local linear estimator (7.3) and the correct lag vector
i 1 , . . . , i m , one obtains
            FPE(h, i 1 , . . . , i m ) =
               AFPE(h, i 1 , . . . , i m ) + o h 4 + (T − i m )−1 h −m ,            (7.13)
where the three terms of the asymptotic final prediction error (AFPE)
          AFPE(h, i 1 , . . . , i m ) = A + b(h)B + c(h)C                           (7.14)
are the integrated variance, the integrated variance of estimation, and the inte-
grated squared bias of estimation with the (unknown) constants
               
          A = σ 2 (x)w(x M ) f (x M )d x M = E σ 2 (xt )w(xt,M ) ,        (7.15)
                                                                          
                                                                   w(xt,M )
          B=         σ (x)w(x M ) f (x M )/ f (x)d x M = E σ (xt )
                      2                                              2
                                                                              , (7.16)
                                                                    f (xt )
256      Rolf Tschernig

               2          2
                   ∂ µ(x)
         C=    tr                w(x M ) f (x M )d x M
                   ∂ x∂ x 
                            2          
                    ∂ 2 µ(xt )
          =E    tr                 w(xt,M )                               (7.17)
                    ∂ xt ∂ xt

and
                                  −1 −m
         b(h) = ||K ||2m
                      2 (T − i m ) h    ,   c(h) = σ K4 h 4 /4,           (7.18)
where the last two terms depend on the bandwidth and kernel constants. Note
that one can interpret A also as the FPE of the true function µ(·). Further
note that the integrated variance of estimation and the integrated squared bias
of estimation go to 0 for increasing sample size if h → 0 and T h m → ∞ as
T → ∞ holds.
   Inspecting B more closely reveals why the definition of the FPE (7.12)
includes a weight function. Without a weight function with compact support,
onewould have in the case of a homoskedastic process, σ (x) = σ , an integral
σ 2 d x that is unbounded and thus an infinite B.
   The first-order asymptotic expansion of the FPE given by (7.13) to (7.18)
has to be slightly modified if a lag vector different from the correct one is
chosen. Consider first the case in which all correct lags are included plus some
additional ones and index all corresponding variables with a + as before. The
modified FPE expansion is then obtained by replacing m by m + , i m by i m++ , x
by x + , and h by h + in equations (7.13) to (7.18) [Tschernig & Yang (2000b,
Theorem 3.3)].
   Now consider the case in which not all correct lags are included in the
chosen lag vector and all correct variables are relevant in the range of the
weight function that specifies the range of interest. The latter condition rules
out a situation where, for example, lag 1 enters the function µ(·) only outside
the range of interest. If a relevant lag in the chosen lag vector is left out and
underfitting occurs, then the AFPE(·) of the underfitting and the correct model
differ by a constant independent of the bandwidth and sample size [Tschernig
& Yang (2000b, Theorem 3.4)].
   Next we show how to use (7.14) for bandwidth estimation.


7.3.1 Bandwidth Estimation
From minimizing the AFPE (7.14) with respect to h, that is, by solving the
variance-bias trade-off between b(h)B and c(h)C, one obtains the asymptoti-
cally optimal bandwidth
                                    1/(m+4)
                     m||K ||2m
                             2 B
          h opt =                             .                      (7.19)
                    (T − i m )σ K4 C
          Nonparametric Time Series Modeling                                         257

Note that, in order for the asymptotically optimal bandwidth to be finite, one has
to assume that C defined in (7.17) is positive and finite. This requirement implies
that, in case of local linear estimation, an asymptotically optimal bandwidth
h opt for linear processes that is finite does not exist. This is because a first-order
approximation bias does not exist, and thus a larger bandwidth has no cost.
Clearly, in this case one should take a bandwidth as large as possible.
    It should be noted that h opt is asymptotically optimal on the range where
the weight function w(·) is positive. For this reason it is also called the global
asymptotically optimal bandwidth. Starting from the mean-squared error of
prediction,
                                             
                   ( y̆ − µ(x, h)) f ( y̆|x)d y̆ f (y1 , . . . , yT )dy1 · · · dyT ,
                                  2



which is computed at a given x, one would obtain a local asymptotically optimal
bandwidth, which, by construction, may vary with x.
   If h opt is estimated by using consistent estimators for the unknown constants
B and C defined by (7.16) and (7.17), the resulting bandwidth estimate is
known as a plug-in bandwidth h opt . One way to estimate the expected value B
consistently is given by averaging the weighted squared errors from the local
linear estimates

                        1       T
          B(h B ) =                   {yt − µ(xt , h B )}2 w(xt,M )/ f (xt , h B ), (7.20)
                      T − i m t=im +1

where f (·) is the Gaussian kernel estimator (7.44) of the density f (x). For
estimating h B , one may use Silverman’s rule-of-thumb bandwidth [Silverman
(1986)]
                           1/(m+4)
                       4
         hB = σ                      T −1/(m+4)                           (7.21)
                     m+2
                           1/m
               m
with σ =       i=1 Var(x ti )       denoting the geometric mean of the standard
deviation of the regressors.
   An estimator of C is given by
                                                     2
                       1       T     
                                      m
         C(h C ) =                       µ (xt , h C ) w(xt,M ),
                                           ( j j)
                                                                          (7.22)
                     T − i m t=im +1 j=1

where µ( j j) (·) denotes the second-order direct derivative of the function µ(·)
with respect to xt j . For estimating higher-order derivatives, one can use local
polynomial estimation of appropriate order. For the current problem of esti-
mating second-order direct derivatives it is sufficient to use the direct local
258       Rolf Tschernig

quadratic estimator
          {c0 , c11 , . . . , c1m , c21 , . . . , c2m } = arg min{c0 ,c11 ,...,c1m ,c21 ,...,c2m }
            T
                t=i m +1 {yt − c0 − c11 (x t1 − x 1 ) − · · · − c1m (x tm − x m )                  (7.23)
                                                                           2
                 −c21 (xt1 − x1 )2 − · · · − c2m (xtm − xm )2                  K h (xt − x).
The estimates of the direct second derivatives are then given by µ( j j) (x, h) =
2c2 j , j = 1, . . . , m. Excluding all cross terms does not affect the convergence
rate while keeping the increase in the “parameters” c0 , c1 j , c2 j , j = 1, . . . , m
linear in the number of lags m. This approach is a simplification of the partial
cubic estimator proposed by Yang & Tschernig (1999), who also showed that
the rule-of-thumb bandwidth
                               1/(m+6)
                            4
           h C = 2σ                      T −1/(m+6)
                          m+4
has the optimal rate.
   The plug-in bandwidth h opt is then given by
                                        1/(m+4)
                    m||K ||2m
                            2 B(h B )
         h opt =                                  .                                             (7.24)
                   (T − i m )C(h C )σ K4
   Inserting (7.24) into (7.14) shows that the minimal AFPE for the correct lag
vector is given by
          AFPEopt = A + k(m, ||K ||22 , B, C, σ K )(T − i m )4/(4+m) ,                          (7.25)
where the interested reader can find the specification of k(m, ||K ||22 , B, C, σ K )
in Tschernig & Yang (2000b, Corollary 2.1). This shows how the convergence
rate of the minimal AFPE towards A depends on the number of lags m. The
larger m, the slower the convergence.


7.3.2 Lag Selection
Since the FPE(·)s are not available for lag selection, the AFPE(·)s are used
instead. In addition to the estimation of B and C discussed in Section 7.3.1,
this requires estimating the integrated variance A given by (7.15) by taking the
sample average
                                      
                                      T
          A(h) = (T − i m )−1                  {yt − µ(xt , h)}2 w(xt,M )                       (7.26)
                                    t=i m +1

of the squared estimated residuals of the local linear estimates µ(xt , h). From
Section 7.2.2 it is known that local linear estimates are biased. This carries
over to the estimator A(h). For estimating the AFPE (7.14), the term A is the
         Nonparametric Time Series Modeling                                         259

most important one because it does not vanish with increasing sample size. It
is therefore useful to take its estimation bias into account when replacing A by
A(h) in (7.14). In fact, under the stated assumptions the asymptotic behavior of
A(h) is given by [Tschernig & Yang (2000b, Theorem 3.1)]

         A(h) = AFPE(h) − 2K (0)m (T − i m )−1 h −m B                             (7.27)
                                      −1       −m                      −1/2
                  +o h + (T − i m )
                        4
                                           h        + O p (T − i m )          .

Rearranging (7.27) and computing at h opt immediately delivers an estimator for
the AFPE

         AFPE = A(h opt ) + 2K (0)m (T − i m )−1 h −m
                                                   opt B(h B ).                   (7.28)

In practice, the asymptotically optimal bandwidth h opt is replaced by the plug-in
bandwidth (7.24), and h B is estimated by (7.21). Note that one can interpret
the second term in (7.28) as a penalty term to punish overfitting or choosing
superfluous lags. This penalty term decreases with sample size because h opt is
of order T −1/(m+4) . Under some additional smoothness assumptions that allow
the estimation of the plug-in bandwidth, the minimal AFPE (7.25) remains valid
for (7.28).
   Note that inserting (7.14) into (7.27) reveals that the estimate of the inte-
grated variance A has a bias of order h 4 + (T − i m )−1 h −m . This bias can be
eliminated by estimating the relevant bias terms. If the plug-in bandwidth has
been calculated, this is easily possible since then estimates for B and C are
available. The asymptotically unbiased estimated Aub (h opt ) of the integrated
variance A is given by
                                                                          
          Aub (h opt ) = A(h opt ) − b(h opt ) − 2K (0)m (T − i m )−1 h −m
                                                                        opt B(h B )

                               − c(h opt )C(h C ).                                (7.29)

It is worth pointing out that, in case of a homoskedastic process, one has A =
σ 2 E(u(xt1M )) from (7.15). If w(·) is chosen to be the indicator function and its
support is such that integrating the density over that support delivers almost 1,
A ≈ σ 2 results. In practice, this allows (7.29) to be used to estimate σ 2 if the
process is homoskedastic and the support of the weight function is taken to be
larger than the data sample.
    To select the adequate lag vector, one replaces m by m + in (7.28) and com-
putes it for all possible lag combinations with m + ≤ M and then chooses the
lag vector with the smallest AFPE. Under the stated assumptions and a further
technical condition, Tschernig & Yang (2000b, Theorem 3.2) showed that this
procedure is weakly consistent, that is, the probability of choosing the correct
lag vector, if it is included in the set of lags considered, approaches 1 with
increasing sample size.
260       Rolf Tschernig

    This consistency result may look surprising since the linear FPE is known to
be inconsistent. However, in case of lag vectors that include in addition to the m
correct lags l superfluous lags, the convergence rate of the optimal bandwidth
                   +
becomes (T − i m+l    )−1/(m+l+4) , and thus the rate of the penalty term in (7.28)
                +
turns to (T − i m+l )−4/(m+l+4) , which is slower than that for the correct lag vector.
This implies that models that are too large are ruled out asymptotically. Note
that this feature is intrinsic to the local estimation approach since the number
of lags influences the rate of convergence (see (7.9)).
    We remark that the consistency result breaks down if C = 0, that is, if µ(·) is
a linear function. In this case, overfitting (including superfluous lags in addition
to the correct ones) is more likely. The breakdown of consistency can be avoided
by using the Nadaraya–Watson instead of the local linear estimator because the
former will also be biased in case of linear processes. In this instance the bias
term (7.10) also includes the first partial derivatives of the design density, which
makes the estimation of the plug-in bandwidth more difficult.
    Note that the asymptotic properties of the lag selection method also rely on
the argument that the weight function w(·) is the full lag vector xt,M . In practice,
however, one can choose w(·) to be the indicator function on the range of the
observed data.
    In Tschernig & Yang (2000b) it is also shown that it is asymptotically more
likely to overfit than to underfit (miss some correct lags). To reduce overfitting
and therefore increase correct fitting, they suggest correcting the AFPE and
estimating the corrected asymptotic final prediction error (CAFPE):
          CAFPE = AFPE 1 + m(T − i m )−4/(m+4) .                                   (7.30)
The correction does not affect consistency under the stated assumptions,
whereas additional lags are punished more heavily in finite samples. One
chooses the lag vector with the smallest CAFPE. Both lag selection criteria,
AFPE and CAFPE are available in JMulTi. However, Monte Carlo simulations
conducted in the cited paper clearly suggest using CAFPE in practice since
AFPE is found to be strongly overfitting.
   We note that, for weak consistency it is not necessary to use the same number
of start values and number of observations T − M for all lag vectors. Instead,
one can also use as many observations as possible and use only i m++ start values
for lag vector {i + , . . . , i m++ }. To keep comparability with the linear lag selection
procedures we recommend, however, always using M start values.
   If the number of total lags M and the sample size T are large, then a full
search through all lag combinations may take too long. In this case, one can
do a directed search, as suggested by Tjøstheim & Auestad (1994). Lags are
added as long as they reduce the selection criterion, and one adds the lag
from the remaining ones that delivers the largest reduction. In the light of
the terminology of Section 3.4.5, this procedure may also be called sequential
adding of regressors.
          Nonparametric Time Series Modeling                                       261

   To exploit available sample information as well as possible and to exclude
boundary effects from the estimations, some robustification measures may be
used, which are reported in the appendix to this chapter.


7.3.3 Illustration
Section 7.2.4 explained the use of local linear estimation techniques to estimate
the autoregression function of the growth rate of the seasonally adjusted, quar-
terly German consumption for the period 1960Q2–1982Q4. There we used
the lags obtained in Section 2.9 of Chapter 2 with a linear lag selection proce-
dure. Now we conduct a nonparametric lag selection using the CAFPE criterion
(7.30), doing a full search up to lag M = 8 and always using M start values.
Table 7.1 shows the lag vectors that exhibit a minimal CAFPE for each number
m + = 0, 1, . . . , M of lags. The overall minimal CAFPE is obtained for two lags
containing lags 2 and 3. This result corresponds to the selected lags based on
linear models. The table also shows that the largest reduction in the lag selection
criterion is obtained by selecting lag 2.
    If instead of a full search a directed (or sequential) search is carried out, the
selected lags corresponding up to a total of three lags remain unchanged and
thus also the optimal lags. The single lag 8 is selected if for each lag vector i m++
start values are used. If the total number of lags and the start values are set to
M = 5, lags 1 and 3 are selected. Thus, the number of start values available for
estimating each lag vector can matter – particularly in small samples.
    When conducting nonparametric lag selection, keep in mind that, as shown
in Section 7.3.2, lag selection based on the (C)AFPE criterion and local linear
estimation is not consistent if the underlying data generating process is linear,
that is, if C = 0. In this case, there is a positive probability of choosing additional
lags in addition to the correct ones. To check whether some lags are possibly


Table 7.1. Lag selection for the growth rate of the seasonally adjusted, quarterly
German consumption

No. of selected lags    Selected lag vector      CAFPE (10−3 )      Plug-in bandwidth
0                       —                        0.120              —
1                       2                        0.108              0.0074
2                       2, 3                     0.106              0.011
3                       2, 3, 5                  0.114              0.011
4                       1, 2, 3, 8               0.135              0.0093
5                       1, 2, 4, 7, 8            0.332              0.0098
6                       1, 2, 3, 5, 7, 8         0.782              0.012
7                       1, 2, 3, 5, 6, 7, 8      2.26               0.014
8                       1, 2, 3, 4, 5, 6, 7, 8   6.09               0.016
262       Rolf Tschernig

due to overfitting, compare the result of nonparametric lag selection with the
results for linear lag selection criteria such as the FPE, AIC, HQ, or SC (see
Chapter 2).
   For the current example, the SC criterion also selects lags 2 and 3 if M start
values are used and M is either 5 or 8. However, in case of different start values,
the optimal lag vector contains in addition lag 6. This illustrates that the issue
of start values matters independently of the method chosen.


7.4 Diagnostics
As in parametric time series modeling, one has to check whether the model is
correctly specified in the sense that there is no relevant structure left in the resid-
uals. For testing residuals resulting from local polynomial estimation, there are
no simple tests with known asymptotic distributions as there are for the residuals
of many parametric models. However, one can still use some of these tests as an
explorative device. For example, the Portmanteau test for residual autocorrela-
tion, the LM test for residual autocorrelation in linear AR models also known as
the Godfrey (1988) test, the ARCH–LM test, and the Lomnicki–Jarque–Bera
test for nonnormality may be used. Conducting the Godfrey (1988) test that
explicitly allows for nonlinear autoregression functions (see Section 6.3.3 for
its implementation for parametric nonlinear models) is more difficult within
the nonparametric framework because it additionally requires nonparametric
estimation of the first-order partial derivatives. It is also possible to estimate the
spectrum and the density of the residuals (see Section 2.6 of Chapter 2 for details
on these tests and estimators). One just has to keep in mind that the asymptotic
properties stated there may not hold if the residuals are obtained from local esti-
mation. These diagnostics may nevertheless indicate possible misspecification
owing to neglected autocorrelation or heteroskedasticity. It can also be useful
to plot the autocorrelation function of the residuals.
    If there is some indication of autocorrelation at certain lags, the largest lag
M in the lag search may be increased beyond the lag for which the residual
autocorrelation appears significant and the lag selection redone. If M was al-
ready chosen large enough, one may simply sequentially add the indicated lags
and reestimate the model. Alternatively, lags suggested by linear lag selection
criteria may be added. Such an extended model may not, however, provide bet-
ter overall results because higher-order dependence with respect to the initially
selected lags is more important than weak autocorrelation at larger lags (see
Section 7.7 for an empirical example of this situation).
    A further possibility for checking the adequacy of a chosen lag vector is
to conduct rolling-over, one-step-ahead forecasts. This is done by splitting the
data set in a sample for estimation that contains the first T  values and taking
the remaining T − T  values for out-of-sample forecasting. The first forecast
         Nonparametric Time Series Modeling                                       263

is computed for yT  +1 based on all observations available up to time T  . In
the next step, one forecasts yT  +2 based on the sample {y1 , . . . , yT  +1 }. This
procedure is iterated until T − 1 observations are used and yT is forecasted.
The rolling-over, one-step-ahead prediction error is then computed as follows:

                   1      T
                                         2
         PE =                     yj − yj .                                    (7.31)
                 T − T  j=T  +1

    Three modes are supported in JMulTi for forecasting the y j ’s in (7.31). In
the first mode, all forecasts are computed by using a user-specified lag vector.
In the second mode, a CAFPE-based lag selection is conducted on the basis of
the initial estimation sample up to time T  , and then this selected lag vector is
maintained for all remaining periods. In the third mode, a lag selection is carried
out for each forecast. The latter mode can be computationally very demanding
if the sample size is large, a full search is conducted for each lag selection, or
both.
    Conducting all diagnostics for the residuals of the local linear model fitted
in Section 7.2.4 to the growth rates of German consumption did not reveal
any misspecification. The rolling-over, one-step-ahead forecasts of the last 19
observations delivered a prediction error of 1.780 · 10−4 , where lags 2, 3, and 8
were selected before the first forecast. In comparison, the AIC selected lags 2, 3,
and 6, and the selected linear autoregressive model produced a prediction error
of 1.412 · 10−4 . Thus, the linear model predicts better than the nonparametric
model. This underlines the conjecture of Section 7.2.4 about the linearity of
the data-generating process. It is interesting to note that the prediction error
of the linear autoregressive model is still larger than the variance of the true
values, which is 1.266 · 10−4 . This remains true if the SC or HQ lag selection
criteria are used. The p-values of the ARCH–LM test of the null hypothesis
of homoskedasticity are above 0.65 for four and eight lags. Thus, there is no
evidence for ARCH-type heteroskedasticity.


7.5 Modeling the Conditional Volatility
Since we allow the nonlinear autoregressive process (7.1) to be conditionally
heteroskedastic, computing confidence intervals (7.11) requires estimating the
conditional volatility function σ (x) because the latter enters the asymptotic
variance (7.7) of the local linear estimator of µ(x).
   Estimating the conditional volatility σ (x) is also one of the basic tasks in
modeling financial time series. We therefore discuss how the tools presented
in the previous sections can be modified appropriately for the estimation of
σ (x). Then, we discuss how to select an appropriate bandwidth. Because, in
the present setting it is permissible for the lag vector of σ (·) to be a subvector
264       Rolf Tschernig

of µ(·), we discuss lag selection as well. Finally, we investigate under which
conditions a NAR process is a generalization of an ARCH(q) process.

7.5.1 Estimation
In case of conditionally homoskecastic errors, σ 2 (xt ) = σ 2 . As mentioned in
Section 7.3.2, σ 2 can be estimated by (7.29) and may then be used to compute
confidence intervals under the assumption of homoskedastic errors.
   To derive local estimators of the conditional volatility, assume for the moment
that the conditional mean function µ(·) is known. Defining εt = yt − µ(xt ),
one can rewrite the NAR process (7.1) as εt = σ (xt )ξt . Squaring both sides and
adding and subtracting σ 2 (xt ) yield
          εt2 = σ 2 (xt ) + σ 2 (xt ) ξt2 − 1
             = σ 2 (xt ) + u t ,       t = i m + 1, . . . ,                         (7.32)
where we define u t = σ (xt )
                            2
                                       ξt2 − 1 . It can be shown that
                       2
                       σu if t = s,
        E(u t u s ) =
                       0 otherwise.
Thus, the process {u t } is a white noise process. Note, however, that the variance
of u t only exists if E(σ 4 (xt )) < ∞ and that the fourth moment m 4 of ξt is finite
such that (ξt2 − 1) has bounded variance.
     Because u t in (7.32) is white noise, the only difference between the stochastic
processes (7.32) and (7.1) is that the input variables of the present “conditional
mean function” σ 2 (x) do not include lags of the dependent variable εt2 . One
can nevertheless use the local estimators derived in Section 7.2 if the dependent
variable yt is replaced by the squared residuals εt2 .
     In general, the conditional mean function µ(·) is unknown, and thus the errors
εt , t = i m + 1, . . . , T have to be estimated by εt = yt − µ(xt , h). If µ(xt , h) is
the local linear estimator (7.3), then a local linear estimator of the conditional
variance σ 2 (xt ) is obtained by replacing in (7.3) yt by εt2 . This delivers
                                                       −1
          σ 2 (x, h) = e Z (x)W (x, h)Z(x)                  Z (x)W (x, h)ε 2 ,   (7.33)
                                   
where ε2 = εi2m +1 , . . . , εT2 . The Nadaraya–Watson estimator (7.4) has to be
modified to
                           T
                               t=i +1 K h (x t − x)εt
                                                       2
        σ N W (x, h) = T m
          2
                                                         .                (7.34)
                                t=i m +1 K h (x t − x)

Under the assumptions mentioned before plus some further regularity con-
ditions on the NAR process (7.1) and continuous differentiability of σ 2 (·),
          Nonparametric Time Series Modeling                                       265

Tschernig & Yang (2000a, Theorem 3) derived the asymptotic bias and vari-
ance and the asymptotic normality of the local linear volatility estimator (7.33).
    Note that in finite samples the local linear estimator (7.33) may lead to
negative estimates σ 2 (x) even for a very large bandwidth h. This is especially
likely if x is close to the boundary of the sample data. To see this, imagine that
x is scalar and just at the boundary of the sample. Then almost all deviations
xt − x, t = i m + 1, . . . , T entering Z(x) and W (x, h) are either nonpositive or
nonnegative, and thus almost all sample points are either to the left or to the
right of the vertical axis in a scatter plot of (xt − x) and εt2 . Then the estimated
constant and thus σ 2 (x) may be negative. Such an outcome is extremely unlikely
if x is around the mean of the sample because the (xt − x)’s are scattered evenly
around the vertical axis. Therefore, one should check the sign of σ 2 (x). If it
is negative, use the Nadaraya–Watson estimator (7.34), which is not subject to
this problem.


7.5.2 Bandwidth Choice
We just saw how the local estimators of the conditional mean function need to be
modified for the estimation of the conditional volatility. Similarly, one can adjust
the FPE criterion (7.12) to the stochastic process (7.32) by replacing yt by εt2
and the estimated conditional mean function µ(·) by the estimated conditional
variance σ 2 (·). As in Section 7.3.1, an asymptotically optimal bandwidth for
σ 2 (x, h) can then be derived that can be used to obtain a plug-in bandwidth.
The plug-in bandwidth is obtained by replacing in (7.20), (7.22), and (7.24) yt
by εt2 and µ(·) by σ 2 (·) and the total number of observations T by the number of
residuals Tσ as well as the start values i m by the start values i σ,m σ . The resulting
equations are presented in the appendix of this chapter.
    Note that the local linear estimator (7.33) and the Nadaraya–Watson estima-
tor (7.34) only have the same asymptotically optimal bandwidth if the design
is uniform (µ(·) is constant on its support). In case of homoskedastic errors,
all first- and second-order partial derivatives of σ 2 (·) are zero; thus, the asymp-
totic first-order bias of the Nadaraya–Watson and the local linear estimators is
zero and no asymptotically optimal bandwidths exist because the bias-variance
trade-off then fails. This implies that a plug-in bandwidth was chosen too small,
and the resulting conditional volatility estimates consequently exhibit a vari-
ance that is too large. For the local linear estimator, that effect also occurs if
σ (·) is linear on the support of the weight function.
    Thus, in case of homoskedastic errors, confidence intervals (7.11) based on
σ 2 (xt ) can be misleading. As mentioned before, one should in this case use
(7.29) to estimate σ 2 . Because without testing one does not know in practice
which situation is given, JMulTi computes two confidence intervals. For one of
them, conditional heteroskedasticity is allowed for and (7.33) is used with the
266      Rolf Tschernig

same lag vector as for µ(x); for the other confidence interval homoskedasticity
is assumed and (7.29) is used.


7.5.3 Lag Selection
For obtaining the modified (C)AFPE criteria one applies the same replacements
as before to the (C)AFPE estimators (7.28) and (7.30) as well as to (7.26). The
resulting equations are also shown in the appendix. As before, the lag vector
that exhibits the smallest estimated modified (C)AFPE criterion given by (7.45)
and (7.46) in the appendix is chosen.
    Currently, the asymptotic properties of this lag selection procedure can only
be derived for the special case in which the conditional mean function µ(·) is
known to be a constant. If, in addition, the assumptions required for selecting the
lags of the conditional mean function are adequately modified, then, according
to Tschernig & Yang (2000b), the lag selection for the conditional volatility
function σ (x) using the modified (C)AFPE estimators given by (7.45) and
(7.46) in the appendix is weakly consistent. One important requirement for
such a result is that the variance of u t exist.
    If the lags entering µ(·) are known but not the function itself, we expect that
it will be possible to show that the lag selection is weakly consistent if the set
of lags to be chosen from is completely contained in the set of lags of µ(·).
    The case in which the lags of µ(·) also have to be estimated remains to be
analyzed. Since this case is predominant in practice, we have to conclude that
the properties of local linear lag selection methods for the conditional volatility
function are not yet fully investigated. The difficulty is that the behavior of
the lag selection procedure for σ (·) always depends on the lag selection and
estimation result for µ(·). It is worth noting that this problem also occurs in the
case of parametric methods.
    Two remarks are necessary. First, for bandwidth choice and lag selection
the problem of possibly obtaining negative variance estimates from (7.33) is
ignored because, as was argued in Section 7.5.1, it is a boundary problem and
therefore does not affect too many observations as long as the number of lags
m is not too large.
    Second, if the NAR process (7.1) is homoskedastic, lag selection using the
modified (C)AFPE cannot be consistent because the local linear estimator (7.33)
has no first-order bias and we face the same situation as in the case of a linear
conditional mean function µ(·) (see Section 7.3.2 for details). In such a situa-
tion, one may frequently observe overfitting: some lags are selected although
selecting no lags is correct.
    In practice one can deal with this possibility basically in two ways. The
first solution is to investigate potential heteroskedasticity by the tools just pre-
sented with all the potential problems and use the results as a basis for further
parametric modeling and testing. The second one is to model the conditional
          Nonparametric Time Series Modeling                                           267

volatility only if the ARCH–LM test rejects homoskedastic errors (see Section
7.4). However, as is discussed next, the ARCH–LM test may have only little
power against some types of conditional heteroskedasticity that are allowed for
in an NAR process (7.1).


7.5.4 ARCH Errors
We will first show that the stochastic process (7.32) of the squared residuals can
be seen as a generalization of an ARCH(q) process if µ(·) = 0. For the latter,
the conditional variance is given by

          σt2 = γ0 + γ1 εt−1
                         2
                             + · · · + γq εt−q
                                           2
                                               ,                                     (7.35)

where one has to assume γi > 0, i = 0, . . . , q. For details on ARCH processes,
see Chapter 5. In the special case of µ(·) = 0 one has εt = yt , and thus (7.35)
can be written as

          σ 2 (xt ) = γ0 + γ1 yt−1
                               2
                                   + · · · + γq yt−q
                                                 2
                                                     ,

where xt = (yt−1 , yt−2 , . . . , yt−q ) . In that case, the conditional variance σ 2 (xt )
is a sum of weighted, squared, lagged observations. This implies, for exam-
ple, for an ARCH(2) process that σ 2 (xt ) is in terms of yt−1 and yt−2 a two-
dimensional parabola.
    If µ(yt−1 , yt−2 , . . . , yt−m ) = 0 and (7.35) holds, the conditional variance
σ 2 (·) no longer has a simple form since

        σ 2 (yt−1 , . . . , yt−q−m ) = γ0 + γ1 (yt−1 − µ(yt−2 , . . . , yt−1−m ))2
                                                                                        2
                                     + · · · + γq yt−q − µ(yt−q−1 , . . . , yt−q−m ) ,

which is no longer a straightforward function in terms of the yt−i  ’s. Note further
that σ 2 (·) includes more lags than µ(·) because it consists of all lags from 1 to
m plus those from m + 1 to m + q. This violates the assumption that σ (·) may
contain all lags of µ(·) but no more (see Section 7.1). Thus, the NAR model
(7.1) does not in general include ARCH errors (except if µ(·) = 0).
   It may be, however, that a conditional volatility function σ (xt ) can be ap-
proximated to some extent by an ARCH(∞) model. If a reasonably good ap-
proximation for the underlying conditional volatility function does not exist,
the ARCH–LM test can be expected to have only little power. To see the latter
case, consider the conditionally heteroskedastic AR(1) model
                         √
            yt = αyt−1 + yt−1 ξt , 0 < α < 1,

  which plays an important role in modeling the term structure of interest
                                                                  ∞ rates.
By inverting the AR(1) model, one obtains an MA(∞) model yt = i=0        α i εt−i ,
268      Rolf Tschernig

where, as before, εt = σ (xt )ξt . Replacing yt−1 in the conditional variance func-
tion by its MA(∞) representation delivers
                                            
                                            ∞
         σ 2 (xt ) = σ 2 (yt−1 ) = yt−1 =         α i εt−i−1 ,
                                            i=0

which cannot be captured by an ARCH(∞) model.
   An example of a partial approximation of σ (xt ) by an ARCH(∞) model is
the following. Let the conditionally heteroskedastic AR(1) model
         yt = αyt−1 + σ (yt−1 )ξt       |α| < 1
                                                                   2
have conditional volatility function σ 2 (y) = 1 + 1+y
                                                    y
                                                       2 . Taking the first-order

Taylor approximation of σ (y) with respect to y at y0 = 0 yields
                           2                     2


                           y02         1
         σ 2 (y) ≈ 1 +           +             (y 2 − y02 ) = 1 + y 2 .
                         1 + y02   (1 + y02 )2
By inserting the MA(∞) representation into the Taylor approximation, one
obtains
                                        2
                            
                            ∞
        σ 2 (yt−1 ) ≈ 1 +     α i εt−1−i
                              i=0

                            
                            ∞                     
                   = 1+           α 2i εt−1−i
                                        2
                                              +           α i α j εt−1−i εt−1− j .
                            i=0                   i= j

This approximation contains an ARCH(∞) part with γi = α 2(i−1) , i = 1, 2, . . . .
Therefore, an ARCH–LM test can be expected to have some power in this case.
   In Section 7.4 it was seen that, for the example of the growth rates of the sea-
sonally adjusted, quarterly German consumption, the ARCH–LM test did not
indicate any conditional heteroskedasticity. In light of the previous discussion,
this finding does not rule out the presence of conditional heteroskedasticity.
Nevertheless, we will not investigate this issue further. Instead, we refer the
reader to Section 7.8, which illustrates how to use the presented tools for mod-
eling the conditional volatility function of the returns of the XETRA Dax index.


7.6 Local Linear Seasonal Modeling
Economic time series frequently exhibit a seasonal pattern. Although economic
data are often available in a seasonally adjusted format, using seasonally ad-
justed data should be avoided if possible. The main reason is that seasonal
adjustment procedures, which are used in public agencies, commonly contain
nonlinear transformations. Thus, finding evidence of nonlinearity in a season-
ally adjusted series may be the result of the seasonal adjustment procedure. In
         Nonparametric Time Series Modeling                                       269

this section we therefore discuss several seasonal extensions of the NAR model
(7.1). The presented models and nonparametric modeling procedures were de-
rived in Yang & Tschernig (2002), and the interested reader is referred to this
reference for details.


7.6.1 The Seasonal Nonlinear Autoregressive Model
To represent seasonal processes it is convenient to replace the time index t by t =
s + Sτ , where s = 1, 2, . . . , S denotes the season and τ = 0, 1, . . . represents
a new time index.
   The seasonal nonlinear autoregressive (SNAR) model is given by
          ys+τ S = µs (xs+τ S ) + σ (xs+τ S )ξs+τ S ,                          (7.36)
where xs+τ S denotes, as before, the vector of all correct lagged variables. In
this seasonal extension of the standard nonlinear autoregression model (7.1),
the regression functions µs (·), s = 1, . . . , S may vary with the S seasons. This
is also a nonlinear generalization of the periodic AR (PAR) model
                          
                          p
          ys+τ S = bs +         αis ys+τ S−i + s+τ S                          (7.37)
                          i=1

[see, for example, Lütkepohl (1991, Chapter 12)]. For this reason, one can also
view the SNAR model as a periodic nonlinear autoregression.
    The local estimators for estimating µs (·), s = 1, . . . , S, are readily obtained
by estimating each seasonal function separately using only data of season s. The
local linear and Nadaraya–Watson estimators described in Section 7.2.1 have to
be modified accordingly. The quantities for computing the plug-in bandwidth
and the (C)AFPE estimator described in Sections 7.3.1 and 7.3.2 are now ob-
tained by taking the mean of the quantities computed for each season. These
modifications are more or less straightforward, and we refer the interested reader
to the paper of Yang & Tschernig (2002).
    We note that the computation of the (C)AFPE is facilitated if there is an
equal number of observations for each season. This is done in the following
way. To guarantee that one has at least M ≥ i m starting values for each season,
estimation has to start in τ = i M,S , where i M,S is the smallest integer equal
          ! " than M/S. The largest value of the nonseasonal index τ is given
to or greater
by TS = TS , where [a] truncates the fractional portion of a. Finally, TM,S =
TS − i M,S + 1 denotes the number of observations per season available for
estimation if the largest lag is M.
    Yang & Tschernig (2002) have shown that, under an appropriate extension
of the stated assumptions, nonparametric lag selection based on (C)AFPE is
weakly consistent. Of course, consistency breaks down if µ(·) is a linear function
and the SNAR model (7.36) reduces to a PAR model (7.37). In order to be able
270      Rolf Tschernig

to check lag selection under the assumption of linearity, in JMulTi one can
conduct lag selection for the PAR model using either the linear FPE, AIC, HQ,
or SC.
   Note that for both the SDNAR and the PAR models the number of observa-
tions available for estimating each function is about TS ≈ T /S. The effective
sample size is therefore too small for some macroeconomic applications such
as the German consumption data discussed in Sections 7.2.4, 7.3.3, and 7.4. In
other words, the SNAR model (7.36) provides too much flexibility for 30 years
of quarterly data. This clearly limits the applicability of the SNAR model. We
next present two seasonal models with effective sample size T.

7.6.2 The Seasonal Dummy Nonlinear Autoregressive Model
To increase the effective sample size to T , one has to restrict the seasonal
flexibility in the conditional mean functions. One possible restriction is given by
µs (·) = µ(·) + bs , s = 1, 2, . . . , S, where b1 = 0 is defined for identification.
Then the seasonal variation of the functions between the sth and the first season
is restricted to the constant shifts bs . The resulting process,
         ys+τ S = µ(xs+τ S ) + bs + σ (xs+τ S )ξs+τ S ,                             (7.38)
is a restricted seasonal nonlinear autoregression. In Yang & Tschernig (2002)
this is called a seasonal dummy nonlinear autoregressive model (SDNAR
model) since it is a generalization of the seasonal dummy linear autoregres-
sive model (SDAR model)
                         
                         p
         ys+τ S = bs +         αi ys+τ S−i + s+τ S .                               (7.39)
                         i=1

   If the seasonal parameters bs , s = 2, . . . , S are known, one can subtract them
from the dependent variable and obtain a model in which the conditional mean
and volatility function are independent of any season,
         ys+τ S = µ(xs+τ S ) + σ (xs+τ S )ξs+τ S ,                                  (7.40)
and where
         ys+τ S = ys+τ S − bs ,      τ = i M,S , . . . , TS ,   s = 2, . . . , S.
As in Section 7.5, we have the situation that the dependent variable is different
from the lags in xs+τ S . It is therefore easy to modify the standard local estima-
tors, the standard plug-in bandwidth, and the lag selection criteria presented in
Sections 7.2 and 7.3. In this situation the rate of convergence clearly depends
on the sample size T .
   In practice, the seasonal parameters bs , s = 2, . . . , S have to be estimated.
Yang & Tschernig (2002) have suggested a semiparametric estimator that ex-
hibits a convergence rate faster than that of the local linear estimator for µ(·). It
          Nonparametric Time Series Modeling                                           271

is thus possible to replace the bs s in (7.40) by their estimates b̄s (h) (7.41) and
then continue as if the bs s were known. In the cited paper it is shown that, under
some regularity conditions, this does not affect the asymptotic behavior of the
local linear estimators and lag selectors for µ(·).
     We now briefly show the basic steps underlying the semiparametric estimates
b̄s (h), s = 2, . . . , S. In the first step one ignores the assumption that bs is
constant and allows it to vary with x. A local linear estimator is used to estimate
bs at all observations, which delivers bs (xs+i M,S S , h), . . . , bs (xs+TS S , h). In the
second step, one uses the fact that bs is assumed to be a constant, which makes
it possible to average the preceding estimates as follows:
                       TS
                          τ =i M,S w(x s+τ S,M )bs (x s+τ S , h)
           b̄s (h) =           TS                               , s = 2, . . . , S.  (7.41)
                                   τ =i M,S w(x s+τ S,M )

The averaging implies that the variances of the single estimates are to some
extent smoothed out. This is why the convergence rate of the semiparametric
estimator (7.41) is faster than that of the function estimates [Yang & Tsch-
ernig (2002, Theorem 5)]. In (7.40) the unknown seasonal parameters bs ,
s = 2, . . . , S, can therefore be replaced by their estimates b̄s (h), and one may
then continue as if the bs ’s were known.

7.6.3 Seasonal Shift Nonlinear Autoregressive Model
Another way of restricting the seasonal nonlinear autoregression model (7.36)
is to assume that the seasonal process is additively separable into a seasonal
mean shift δs , s = 1, 2, . . . , S and a nonseasonal, nonlinear autoregression z t ,
that is, ys+τ S = δs + z s+τ S . One may call
          ys+τ S − δs = µ ys+τ S−i1 − δ{s−i1 } , . . . , ys+τ S−im − δ{s−im }       (7.42)
                           +σ ys+τ S−i1 − δ{s−i1 } , . . . , ys+τ S−im − δ{s−im } ξs+τ S
a seasonal shift nonlinear autoregressive model (SHNAR model), where {a} is
defined as
                
                  S              if a modulo S = 0,
         {a} =
                  a modulo S otherwise.
For identifiability, it is assumed that δ1 = 0. This seasonal shift nonlinear autore-
gressive model is another way of generalizing the SDAR model (7.39), where the
constants δ1 , . . . , δ S of the linear model are obtained
                                                    p      up to an additive constant
via the system of linear equations bs = δs − j=1 α j δ{s− j} , s = 1, 2, . . . , S.
    If the seasonal mean shifts δ1 , . . . , δ S were known, one could obtain the
nonseasonal process z s+τ S = ys+τ S − δs , which is a NAR process (7.1) for z t .
It therefore could be analyzed by the standard nonparametric methods presented
in Sections 7.2 and 7.3.
272       Rolf Tschernig

    If the seasonal mean shifts δ1 , . . . , δ S are unknown, they can easily be es-
                                                        −1 TS
timated by taking the seasonal averages δs = TM,S                    (ys+τ S − y1+τ S ),
                                                          √ τ =i M,S
s = 2, . . . , S. Since this parametric estimator has TS convergence that is
faster than the convergence rate of the local linear estimator, one can also
use the standard nonparametric methods even if the seasonal mean shifts have
to be estimated.
    We are now ready to apply the various presented nonparametric estimators
to two different economic time series.


7.7 Example I: Average Weekly Working Hours in the United States
In this section we will illustrate the complete nonparametric modeling proce-
dure for the average weekly hours worked in the United States. The 478 monthly
observations cover the period from 1960M1 to 1999M11 and were seasonally
adjusted and provided by The Conference Board, www.tcb.org. Figure 7.3 dis-
plays the time series of the data. The two largest drops in the average weekly
hours occur in January 1982 and January 1996. Visual inspection and standard
ADF unit root tests suggest taking first differences in order to obtain a stationary
series. The time series of the first differences is also shown in Figure 7.3. A
large drop in the level series turns into a sequence of one large negative spike
followed by a large positive one. Capturing these large changes will be one of
the modeling challenges. On the basis of the (partial) autocorrelations of the
first differences, which are also shown in Figure 7.3, one may consider lags
1 and 2. Note the significance of lag 12 which may result from the seasonal
adjustment procedure.
    Because higher-order dependence cannot be seen from the estimated auto-
correlations, lag selection should be conducted by means of the nonparametric
methods described in Section 7.3. Doing a full search with the CAFPE criterion
(7.30) for a maximum number of eight lags up to lag 8, M = 8, identifies lags
1 and 2 as the relevant ones, as can be seen from Table 7.2. The table shows
the optimal selection of lags for each number of lags as well as the plug-in
bandwidth underlying the function estimates and the resulting CAFPE. For
example, µ(yt−1 , yt−2 ) was estimated with plug-in bandwidth 0.158 and the
resulting CAFPE value is 0.0524. The same lags, 1 and 2, are suggested when
a full lag search is conducted within linear AR models using the FPE, AIC,
HQ, or SC lag selection criteria. These lag selection results are in line with the
autocorrelations estimated for the changes in the average weekly working hours
shown in Figure 7.3.
    In Figure 7.4 the estimated conditional mean function with lags 1 and 2 is
plotted from two different angles. All function estimates outside the data region
and those for which the estimated density of the grid points is within the lower
10% quantile are removed. The graph of the function looks somewhat like a
Figure 7.3. Monthly observations of the average weekly working hours in the United
States, January 1960–November 1999, with first differences (D AWHours), autocorre-
lations, and partial autocorrelations of first differences.
274       Rolf Tschernig

Table 7.2. Lag selection for the conditional mean function of the monthly changes
of U.S. average weekly working hours up to lag 8

No. of selected lags       Selected lag vector      CAFPE          Plug-in bandwidth
0                          —                        0.0731         —
1                          1                        0.0540         0.142
2                          1, 2                     0.0524         0.158
3                          1, 2, 8                  0.0554         0.174
4                          1, 3, 6, 8               0.0772         0.204
5                          1, 2, 4, 7, 8            0.1224         0.207
6                          1, 2, 3, 4, 5, 7         0.2214         0.227
7                          1, 2, 3, 4, 5, 7, 8      0.3937         0.236
8                          1, 2, 3, 4, 5, 6, 7, 8   1.2787         0.274


large armchair, indicating strong nonlinearities in the direction of the first lag. To
confirm this impression, one may investigate a cut through the function surface
in the direction of lag 1. Such a one-dimensional graph can be seen in Figure 7.5,
where lag 2 is fixed at its mean. The dashed lines are Bonferroni 95% confidence
intervals ((7.11) combined with (7.43)) of the function estimates evaluated at the
grid points where conditionally heteroskedastic errors are assumed. The dotted
lines are obtained by assuming homoskedastic errors. Since the confidence
intervals turned out to be very large at several grid points that are close to the
boundary, it is useful to exclude such points from the plot. Thus, only those
estimates for which the density of the grid points is within the larger 70%
quantile are shown. One can clearly see that the monthly changes of the average
weekly working hours are quite small as long as the change in the previous
month is smaller than 0.4 in absolute value. In contrast, a strong downswing in
the previous month (being larger than 0.4 in absolute value) will be followed by
an even stronger upswing. This evidence of nonlinear dynamics is statistically
supported by the fact that it is not possible to fit a straight line in between the
confidence intervals. Note that testing linearity by one of the tests proposed in
the previous chapter leads to a clear rejection of linearity.
    We now turn to diagnostic tests of the estimated residuals. Recall from
Section 7.4 that the asymptotic distribution results of the standard diagnostic
tests are not yet proven to be valid for nonparametrically estimated residuals. To
begin with, there is no evidence for conditional heteroskedasticity. First of all,
the p-value of the ARCH–LM test with four lags is 0.81. Second, a lag search for
the conditional volatility function suggests no lags. However, the residuals are
far from being normally distributed since the p-value of the Lomnicki–Jarque–
Bera test is 0.00. This is due to the very large kurtosis of about 13.5. This value
reflects the large negative outliers in the residuals, which are plotted in Figure
7.6. Note that the large positive spikes that are visible in the original data in
Figure 7.4. Two different views of the estimated conditional mean function of monthly
changes of U.S. average weekly working hours: Lags 1 and 2; estimates for which the
estimated density of the grid points is within the lower 10% quantile are removed.
276      Rolf Tschernig




Figure 7.5. Estimated conditional mean function of monthly changes of U.S. average
weekly working hours: Bonferroni confidence intervals (CI) with 95% confidence level
with the second lag set to the estimated mean; dashed lines are based on conditionally
heteroskedastic errors, and dotted lines are based on homoskedastic errors; 30% of the
observations with the lowest density are removed.

Figure 7.3 are captured by the nonlinear, conditional mean function. There is
a simple reason for this finding. The large downswing occurs first and cannot
be well predicted from past observations whereas the large upswing always
follows in the month after and is thus much easier to predict if one allows for
nonlinear models. This is exactly reflected in the function plots in Figures 7.4
and 7.5.
    The estimated (partial) autocorrelations of the residuals are also plotted in
Figure 7.6. One can see that the autocorrelation for lag 12 is outside the 95%
confidence interval that is given by the dashed lines. This was already the case
for the original data (see Figure 7.3) and seems to cause a rather low p-value
of 0.118 for the Ljung–Box statistic with sixteen lags. The p-value for the
F-statistic of the Godfrey test is even as low as 0.076.
    The relevance of lag 12 may be due to overadjusting in the seasonal ad-
justment procedure. Thus, one may either add lags or try to remove remaining
seasonality with one of the seasonal nonlinear autoregressive models described
in Section 7.6. The latter will be done first using the seasonal shift nonlinear
autoregressive model (7.42). It also seems useful to extend the lag search over
all lags up to lag 15. We will do this but only allow for a maximum of four lags.
Setting the seasonal shift parameter of January to zero, we estimate all other
seasonal shift parameters between 0.02 and 0.19. Note that these estimates are
independent of the lags selected. Thus, average weekly working hours in Jan-
uary are lower than in any other month. However, taking that into account does
not lead to another lag selection. The autocorrelation in the residuals at lag 12
remains large, and the p-values of the autocorrelation tests even fall below the
significance level of 5%.
         Nonparametric Time Series Modeling                                    277




Figure 7.6. Diagnostics for the conditional mean function of the monthly changes of
U.S. average weekly working hours.



   The seasonal dummy nonlinear autoregressive model (7.38) is an alternative
restricted seasonal model but is not available in JMulTi for monthly data.
Finally, there is the seasonal nonlinear autoregressive model (7.36), which is
the most flexible one. Because for each season there are only forty observations,
a nonparametric estimation is not very promising and is therefore not performed
here.
278       Rolf Tschernig




Figure 7.7. Estimated conditional mean function of the monthly changes of U.S. average
weekly working hours with lags 1, 2, and 12; lag 12 is set to the estimated mean; estimates
for which the estimated density of the grid points is within the lower 10% quantile are
removed.


    Alternatively, one may include further lags in the conditional mean function
µ(·) of the nonseasonal model (7.1). Accordingly, we rerun a lag search in the
same setup as for the seasonal models with all lags up to lag 15 and a maximum
of four lags. Doing a full search with CAFPE, which requires some computation
time, delivers lags 1 and 9. A faster directed sequential search leads to the same
lags. The function plot looks similar to the one obtained with lags 1 and 2 shown
in Figure 7.4 and is thus not shown here. Moreover, the diagnostics are similar
as well except that now the p-values of the autocorrelation tests are smaller.
This result clearly shows that nonlinear lag selection also considers stochastic
dependence in higher moments. In fact, nonlinear lag selection may trade off
some linear autocorrelation for some more substantial dependence in higher
moments, as in the present case. The latter may turn out much more important
for forecasting, as will be seen below in this section.
    If it is important to eliminate the remaining autocorrelation, one may add
those lags that are suggested by linear lag selection procedures. Doing a full
search, the FPE and AIC criteria suggest lags 1, 2, 12, and 15, whereas the HQ
and the SC criteria select lags 1, 2, and 12 only. Thus, one may add lag 12 to the
original set of lags 1 and 2. Figure 7.7 displays the function plot in which lags 1
         Nonparametric Time Series Modeling                                      279




Figure 7.8. Autocorrelations and partial autocorrelations of residuals of the monthly
changes of U.S. average weekly working hours. The estimation is based on lags 1, 2,
and 12.



and 2 vary on the grid and lag 12 is kept fixed at its mean. Comparing this graph
with the plot of the two-dimensional function with lags 1 and 2 in Figure 7.4
does not reveal much difference. However, the autocorrelations of the residuals
look somewhat better, as can be seen from Figure 7.8. Also, the p-values of
the diagnostics for remaining autocorrelation are all above 50%. Summarizing
the results up to now, one may say that, with respect to capturing first-order
correlation, the nonparametric, nonseasonal model with lags 1, 2, and 12 has a
slight advantage over the more parsimonious model with lags 1 and 2.
    Another check of the validity of the nonparametric modeling procedure is to
conduct rolling-over, out-of-sample, one-step-ahead forecasts. A nonparametric
lag selection and prediction is conducted for the change in the average weekly
working hours occurring in 1991M12 using data up to 1991M11. In the next
step all data up 1991M12 are used for predicting 1992M1 without reselecting
the lags, however. This is repeated until the prediction of 1999M11, which
covers a period of seven years. Then, the prediction error (7.31) is computed.
The lags are selected with a directed search for four lags out of fifteen. Table
7.3 displays the results for the nonparametric CAFPE procedure and parametric
280         Rolf Tschernig

Table 7.3. Prediction errors for rolling-over, out-of-sample,
one-step-ahead forecasts of the monthly changes of U.S. average
weekly working hours

Criterion                  CAFPE             FPE, AIC, HQ              SC
Lags selected
at 1991M11                 1, 9              1, 2, 12, 15              1, 12
Prediction error           0.0550            0.0615                    0.0615
Note: The prediction period is 1991M12 to 1999M11; four out of fifteen lags can
be selected.


procedures based on linear autoregressive models using the FPE, AIC, HQ, and
SC criteria.
   It can be seen that the linear criteria all include lags 1 and 12 and exhibit
the same prediction error. The nonparametric CAFPE selects lags 1 and 9 for
the smaller sample and exhibits a prediction error that is 10% lower than those
of the linear models. It is worth noting that the smallest prediction error for
the nonparametric procedure is obtained if one restricts the largest lag to be
considered to be 8. In that case, lags 1 and 2 are chosen like for the complete
sample and the prediction error is 0.0495, leading to an almost 20% improve-
ment over linear models. Allowing only lags up to 8 worsens the prediction
error of the linear models compared with those before. Finally, computing the
nonparametric prediction error for lags 1, 2, and 12 produces a prediction error
of 0.0557. In sum, the results from rolling-over forecasts favor the parsimo-
nious nonlinear specification with lags 1 and 2 that was obtained at the very
beginning. They also clearly show the superiority of the more general nonpara-
metric modeling procedure owing to the importance of the underlying nonlinear
dynamics.


7.8 Example II: XETRA Dax Index
To illustrate nonparametric volatility estimation, consider 1,029 daily observa-
tions of the closing values of the XETRA Dax index ranging from 1 January
1999 to 31 January 2003. The data were downloaded from Yahoo. Because the
index is nonstationary, we consider the returns by taking first differences after
taking logarithms. To obtain nice scales on the plots, the returns are multiplied
by 100 and shown in Figure 7.9.
   Before we can estimate the conditional volatility function, we have to identify
the conditional mean function. Figure 7.9 also displays the autocorrelation and
partial autocorrelation function of the returns. Up to lag 20, only lag 19 is
significant and lags 5 and 6 are the smallest lags with almost significant values.
Thus, it is not surprising that a full lag search based on linear autoregressive
         Nonparametric Time Series Modeling                                     281




Figure 7.9. Daily returns (multiplied by 100) of the XETRA Dax index, 1 January 1999
to 31 January 2003 with autocorrelations and partial autocorrelations.

models, the SC criterion, and all lags up to lag 8 suggests using no lags. The
AIC leads to lags 5 and 6 with a value of 1.245. For comparison, the AIC of the
white noise model is 1.254 and is thus only marginally larger. The estimated
parameter values are −0.052 and −0.063, where only the latter is significant
at the 5% level. One can conclude that the autoregressive model has almost
no explanatory power. For later reference we conduct rolling-over, one-step-
ahead forecasts for the last 206 observations. To avoid any use of out-of-sample
information, the lags are reselected using the first 822 observations and the AIC
criterion. Now lag 4 is chosen. It turns out that the prediction variance (7.31)
282       Rolf Tschernig




(a) Lags 2 and 3; estimates for which the estimated density of the grid points is within
the lower 10% quantile are removed




(b) Bonferroni confidence intervals (CI) with 99% confidence level and the third lag set
to the estimated mean: dashed lines are based on conditional heteroskedastic errors, and
dotted lines are based on homoskedastic errors; 40% of the observations with the lowest
density are removed
Figure 7.10. Estimated conditional mean function of daily returns of the XETRA Dax
index.
         Nonparametric Time Series Modeling                                    283

of the one-step-ahead forecasts is 7.89, whereas the variance of the returns to
be predicted is 7.79. Thus, the linear model is not of much use for forecasting
purposes.
    To select the relevant lags of a nonlinear autoregressive model, the CAFPE
criterion (7.30) is applied with a directed search up to lag 8 and a total number
of eight lags. The selected lags are 2 and 3 with a CAFPE value of 3.28,
which is about 7% smaller than the corresponding value of 3.50 for the white
noise model. Figure 7.10(a) displays the conditional mean function where those
estimates were removed for which the estimated density of the grid points is
within the lower 10% quantile. Inspecting the plot shows that the estimated
function is about 0 except in the front corner. Thus, the nonparametric model
seems to allow better capture of extreme events. Figure 7.10(b) displays 99%-
Bonferroni confidence intervals for lag 2 with lag 3 kept fixed at its mean. In
the plot all grid points for which their density is within the 40% lower quantile
are suppressed because confidence intervals become very large in that region.
The plot shows that the zero line is contained within the confidence intervals.
Estimating this function with lag 3 kept fixed at −2 or 2 does not change this
conclusion. Thus, there is no substantial nonlinearity in the main regions of the
data.
    To check the forecasting power of the estimated conditional mean function,
we conduct rolling-over, one-step-ahead predictions using the CAFPE criterion.
On the basis of the first 822 observations, lag 5 is selected in addition to lags
2 and 3. This specification delivers a prediction error of 15.95, which is about
twice as large as the one of the linear autoregressive model analyzed earlier.
This result underlines the previous conclusion that the nonlinearities occur only
in rare events but do not help to improve forecasts on average.
    Performing the diagnostic tests of Section 7.4 shows no remaining autocorre-
lation. However, the ARCH–LM test with 4 lags rejects the null of conditional
homoskedasticity at a significance level of 0.5%, and the Lomnicki–Jarque–
Bera test rejects normality of the residuals at the same significance level. There-
fore, there is a strong need for modeling conditional heteroskeasticity, and we
now turn to this approach.
    In the light of the very weak evidence of a nonzero conditional mean func-
tion, we assume for the following analysis of the conditional volatility that
the conditional mean function is 0. For selecting the lags of the conditional
volatility function, we use the CAFPE criterion as described in Section 7.5. A
directed search is conducted up to lag 8. Lags 4, 5, and 6 are selected according
to the results in Table 7.4. Next we estimate this specification and analyze the
residuals. The latter are plotted in Figure 7.11 and indicate neither remaining
heteroskecasticity nor autocorrelation. The p-value of the ARCH–LM test of
homoskedasticity is now 0.27 with four lags and 0.13 with ten lags. Furthermore,
the normality of the residuals cannot be rejected since the Lomnicki–Jarque–
Bera test has a p-value of 0.90. The relevance of modeling the conditional
284       Rolf Tschernig

Table 7.4. Lag selection for the conditional volatility function of daily
returns of the XETRA Dax index

No. of selected lags   Selected lag vector      CAFPE     Plug-in bandwidth
0                      —                        46.58     —
1                      5                        41.27     0.71
2                      5, 6                     35.61     0.95
3                      4, 5, 6                  32.16     1.19
4                      4, 5, 6, 8               42.25     1.46
5                      4, 5, 6, 7, 8            159.25    2.08
6                      1, 4, 5, 6, 7, 8         454.10    2.57
7                      1, 3, 4, 5, 6, 7, 8      2492.02   3.67
8                      1, 2, 3, 4, 5, 6, 7, 8   4713.01   4.00



volatility can also be seen by comparing the residuals in Figure 7.11 with the
original returns in Figure 7.9.
   In Figure 7.12(a) the estimated conditional volatility function is visualized on
a grid with lag 4 kept fixed at its mean. As before, those grid points for which the
density is within the lower 10% quantile are removed. Recall from Section 7.5.4
that, in the case of µ(·) = 0, the estimated conditional mean function generalizes
ARCH models. In the case of an ARCH(2) process, the graph of σ 2 (xt ) is given
by a two-dimensional parabola. From the plot in Figure 7.12(a) it is difficult to




Figure 7.11. Estimated residuals of nonparametric estimates of the conditional volatility
function for the daily returns of the XETRA Dax index.
          Nonparametric Time Series Modeling                                        285




(a) Lags 4, 5 and 6; lag 4 set to estimated mean; 10% of the observations with the lowest
density are removed




(b) Lag 5; 20% of the observations with the lowest density are removed
Figure 7.12. Estimated conditional volatility function of the daily returns of the XETRA
Dax index.
286       Rolf Tschernig




Figure 7.13. Estimated conditional volatility function of the daily returns of the XETRA
Dax index; lags 4, 5, and 6; lag 4 set to estimated mean; based on residuals resulting from
estimating the conditional mean function with lags 2 and 3; 10% of the observations
with the lowest density are removed.


see if the graph of the estimated function deviates substantially from a parabola.
As an explorative device one may estimate the volatility function for lag 5 only.
The function estimates are displayed in Figure 7.12(b) and reveal asymmetric
behavior. The increase of volatility is steeper for increasing negative returns
than for increasing positive returns. This is what one may expect, although it
should be kept in mind that these estimates are biased owing to omitted lags.
If parametric modeling is intended, a TGARCH model should be superior to
the symmetric ARCH model (see Chapter 5 for a discussion of ARCH-type
models).
   To check the robustness of these results, this analysis may be repeated with
the estimated conditional mean function. One then finds that all CAFPE values
are much smaller and that the lags selected for the conditional volatility are
again lags 4, 5, and 6 and, hence, remain unchanged. Figure 7.13 displays the
estimated function. Comparing it with the plot in Figure 7.12(a) when µ(·) = 0
was assumed does not indicate large differences. To conclude, we find that the
returns of the XETRA Dax index exhibit strong conditional volatility, where
the amount of the volatility differs nonlinearly with respect to the magnitude
and the sign of the past returns.
          Nonparametric Time Series Modeling                                         287

Appendix
Bonferroni
#                confidence intervals.    #    Denote for grid point x ( j) the event
#                             $           #
# µ(x ( j) , h) − µ(x ( j) ) / v(x (mj) ) # < z α /2 by A j . Then the joint confidence
#                                Th #            j

intervals for all grid points with confidence level 1 − α j are defined by
   %
P( Jj=1 A j ) = 1 − α. Using the Bonferroni inequality, we find that this prob-
ability can be approximated by
                       
                 &J           J
             P      Aj ≥          P(A j ) − (J − 1),
              j=1          j=1

which is equivalent to 1 − α ≥ J (1 − α j ) − (J − 1). Solving for 1 − α j deliv-
ers 1 − α j ≤ 1 − αJ . Thus, replacing α in (7.11) by
               α
          αj =                                                            (7.43)
               J
for each grid point guarantees that the overall confidence level is at least the
desired confidence level (1 − α).

Robustification and implementation. The computation of B(h b ) given by
(7.20) requires division by the density estimate f (·). This estimate may be-
come unreliable if data are scarce in the neighborhood of xt . To exploit all
available data for estimating f (x), in JMulTi the kernel estimator
                                           T
                                            +i 1
          f (x, h) = (T − i m + i 1 )−1              K h (xi − x)                (7.44)
                                          i=i m +1

is used, where the vectors xi , i = T + 1, . . . , T + i 1 , are all available
from the observations yt , t = 1, . . . , T . For example, x T +i1 is given by
(yT , . . . , yT +i1 −im )T . This robustification, which was suggested by Tjøstheim
& Auestad (1994), is switched off if the sum stops at T .
   In addition, for computing B(h B ), 5% of those observations whose density
values f (·) are the lowest are screened off.
   In practice it may also happen that the rule-of-thumb bandwidths h B and
h C are chosen too small such that for some x, for example, the inversion in
(7.3) is numerically unreliable. In such cases, these rule-of-thumb bandwidths
are increased until numerical stability is obtained. It was also found that the
Gaussian kernel is numerically more stable than the quartic kernel. For this
reason one should use the Gaussian kernel.

Estimators for bandwidth and lag selection for conditional volatility. The
plug-in bandwidth for (7.33) is computed by
                                                   −1         −1 −4    1/(m+4)
          h σ,opt = m||K ||2m
                           2 Bσ (h B )(Tσ − i σ,m ) C σ (h C ) σ K               ,
288       Rolf Tschernig

where Tσ denotes the number of residuals, i σ,m the number of start values, and
                          
                          T
                                                             2
           Bσ (hB ) =                εt2 − σ 2 (xt , h B )       w(xt,M )/ f (xt , h B ),
                        t=i σ,m +1
                                                                    2
                         1          T      
                                            m
                                                 2 ( j j)
          Cσ (h C ) =                          σ          (xt , h C ) w(xt,M ).
                      Tσ − i σ,m t=iσ,m +1 j=1

The AFPE criterion is computed as
          AFPEσ = Aσ (h σ,opt ) + 2K (0)m (Tσ − i σ,m )−1 h −m
                                                            σ,opt Bσ (h B ),                (7.45)
where
                                            
                                            T
                                                                            2
          Aσ (h) = (Tσ − i σ,m )−1                     εt2 − σ 2 (xt , h)       w(xt,M ).
                                          t=i σ,m +1

The modified CAFPE criterion is given by
          CAFPEσ = AFPEσ 1 + m σ (T − i σ,m σ )−4/(m σ +4) .                                (7.46)
If εt2 is not available, it is replaced by εt2 .
8           The Software JMulTi

Markus Krätzig




8.1 Introduction to JMulTi

8.1.1 Software Concept
This chapter gives a general overview of the software by which the examples
in this book can be reproduced; it is freely available via the Internet.1 The
information given here covers general issues and concepts of JMulTi. Detailed
descriptions on how to use certain methods in the program are left to the help
system installed with the software.
    JMulTi is an interactive JAVA application designed for the specific needs
of time series analysis. It does not compute the results of the statistical calcu-
lations itself but delegates this part to a computational engine via a communi-
cations layer. The range of its own computing functions is limited and is only
meant to support data transformations to provide input for the various statistical
routines.
    Like other software packages, JMulTi contains graphical user interface
(GUI) components that simplify tasks common to empirical analysis – espe-
cially reading in data, transforming variables, creating new variables, editing
data, and saving data sets. Most of its functions are accessible by simple mouse
interaction.
    Originally the software was designed as an easy-to-use GUI for complex
and difficult-to-use econometric procedures written in GAUSS that were not
available in other packages. Because this concept has proved to be quite fruit-
ful, JMulTi has now evolved into a comprehensive modeling environment
for multiple time series analysis. The underlying general functionality has
been bundled in the software framework JStatCom, which is designed as
a ready-made platform for the creation of various statistical applications by
developers.

1   The homepage is http://www.jmulti.de

                                                                              289
290         Markus Krätzig

8.1.2 Operating JMulTi
Much effort has been invested in making the use of JMulTi as intuitive as
possible. Therefore it is not necessary to read this chapter before using the
program. Some options are explained in detail, however. Thus it may be a good
strategy to read this chapter after a first acquaintance with the software.
    JMulTi is a JAVA program and consequently relies on the availability of
an appropriate JAVA Runtime Environment (JRE)2 that needs to be installed
as well. Users new to JAVA programs should be aware that the user interface
looks slightly different from the one of native programs and is sometimes a bit
less responsive. This does not mean that the speed of the statistical calculations
is slower than with other software packages. The difference results from the
way the JAVA GUI components are painted on the screen. The speed of the
calculations is only lowered by the overhead imposed by the communications
interface between JMulTi and the computational engine. This is a tolerable
fixed cost that does not affect the performance of the algorithms.
    In the following sections some conventions for numbers, dates and variable
names, data input, and data handling will be discussed. Section 8.4 describes
how various time series operations can be carried out, and Section 8.6 gives a
very general overview of the underlying software framework. This is especially
meant for developers who consider writing graphical user interfaces for their
algorithms.

8.2 Numbers, Dates, and Variables in JMulTi

8.2.1 Numbers
JMulTi stores numbers as 64-bit, double-precision, floating point values as
defined in IEEE (754–1985). Special values are NaN, Inﬁnity and -Inﬁnity.
NaN stands for Not-a-Number and is used to code missing values in data files.
Infinities are not allowed for data points but occur in the definition of intervals
or for coding special values.
    To input numbers that are used by a procedure, JMulTi provides special
text fields with input-validating capabilities. Usually these text fields display a
reasonable default value. The decimal delimiter is a point. The number displayed
is rounded to the precision required for the respective purpose. Very often the
number of fraction digits is zero, which allows only for integer input. If the
given value cannot be parsed to a number or if it is not in the allowed range, a
descriptive message will pop up and any other action is canceled. It is always
possible to input values coded in exponential notation (e.g., 1.234e-10). The
respective text field formats the input value in a way that makes sense for the
given context.
2   The Sun JRE can be downloaded from http://www.java.sun.com.
         The Software JMulTi                                                    291

Range of numbers. Sometimes it is necessary to input a range defined by two
numbers. JMulTi also provides special text fields for this purpose that make
sure that the given range is valid and within the enclosing interval. Text fields
with this behavior are marked with angular brackets. The two numbers defining
the range must be separated by a comma.


8.2.2 Numbers in Tables
JMulTi often uses tables to display an array of numbers. The tables frequently
have a right mouse pop-up menu for useful tasks on that table. The default
menu for number tables allows the precision and the notation of the numbers
displayed to be changed. If a table is editable, the same rules hold as for number
text fields.
   In certain contexts, such as for the specification of subset restrictions, the
number table renders certain values with special symbols (e.g., ’∗’ or ’---’).
Usually these tables can be edited by just clicking on a cell such that the value
switches to the next valid one and the symbol changes accordingly.


8.2.3 Dates
In JMulTi dates are objects defined by a main period, a frequency, and a sub-
period. They can be specified in various ways with the respective text fields for
date input. All three pieces of information must be retrieved from the input.
The following formats are recognized, where D stands for the main period, S for
the subperiod, and F for the frequency or periodicity:

• D S/F, for example 1960 1/6. This format is always possible and is used
  as default format if no special identifier for the frequency is defined.
• D ’Q’ S, for example 1960 Q 1. This format is used for quarterly data.
• D ’M’ S, for example 1960 M 11. This format is used for monthly data.
• D, for example 1960. This format is used for annual data.
• D [’I’,’II’], for example 1960 II. This format is used for half-yearly
  data.
• D.S, for example 1960.1. This format is just for input convenience and can
  be used when the program already knows the frequency from the context,
  which is often the case.

Date input must conform to the given rules and is validated against a range
defined by two dates. If the input is wrong in any way, the previous value is
restored and a descriptive message is shown.

Range of dates. Sometimes it is necessary to define a time range by specifying
its first and the last date. JMulTi provides special text fields for that purpose as
292      Markus Krätzig

well. Like the ones for number ranges, they are marked with angular brackets
and validated against an enclosing date range. The two dates must be separated
by a comma.


8.2.4 Variable Names
As a general convention throughout the program, variable names can con-
tain letters, numbers, and ’ ’ but must start with a nonnumber. For example,
 invest, invest and i2 would be valid names, whereas 2i, gov exp or
cons+inv would be invalid. This is enforced wherever variable names can
be set within the program but must also be followed when specifying variable
names in a data file. Variable names are case insensitive, meaning that two
variable names differing only in the case of one or more letters are considered
equal.


8.3 Handling Data Sets

8.3.1 Importing Data
JMulTi is meant to be used for empirical data analysis. Therefore the first
step is always to read in a data set that is stored in a file. In case the avail-
able data is in a format that is not directly readable by JMulTi, it should
always be possible to transform the data easily into one of the accessible
formats.
   When the data are read in, JMulTi automatically identifies dummy and trend
variables as deterministic. In general, reading in variables that are either an in-
tercept, a deterministic trend, or seasonal dummy variables is not recommended
because JMulTi offers automatic generation of these variables wherever it is
necessary for a certain procedure.


8.3.2 Excel Format
JMulTi can read in Microsoft® Excel 97 files. Earlier versions are not sup-
ported, whereas the file format did not change with later versions of Excel.
There is an appropriate file filter for ∗.xls files. When the file is opened, a dia-
log asks for some additional information. Only one Excel table can be read in at a
time.
    The Excel file should have the variable names in the first row and the numeric
values starting in one of the next rows. The parser also recognizes cells that
contain formulas and evaluates them. If JMulTi finds no variable names, it cre-
ates defaults from the filename and an index. Other cells with nonnumbers will
be treated as missing values and coded as NaN. Whether the decimal delimiter
is a comma or a point depends on the local settings. A number is recognized if
Excel has stored the content of the cell as a number.
         The Software JMulTi                                                  293

8.3.3 ASCII Format
An ASCII data file example with an optional description looks like this:
/∗seasonally adjusted, West Germany:
ﬁxed investment, disposable income, consumption expen-
ditures ∗/
180 451 415
179 465 421
...
The file should contain the data of each variable in a column. Missing values may
be coded with NaN. It makes no difference whether the numbers are coded with
a decimal comma or a decimal point. The exponential notation (e.g., 1.23e-
4) is recognized as well. When the file is opened, a dialog asks for additional
information. It is possible to add a description enclosed by /∗ ... ∗/ to the
data set somewhere in the file.

8.3.4 JMulTi .dat Format
JMulTi has a file format that is a slight extension of the ASCII format and
allows for easy data recognition without further user interaction. The following
is an example of a .dat file with an optional description:
/∗seasonally adjusted, West Germany:
ﬁxed investment, disposable income, consumption expen-
ditures ∗/
3 1960.1 4
invest income cons
180 451 415
179 465 421
...
where the first number defines the number of variables, the second number the
start date, and the last number the periodicity of the data set. The start date
must be a valid date for the given periodicity. In the example, 1960.1 stands
for the first quarter of 1960 because 4 defines quarterly data. Yearly data has
periodicity 1. The periodicity can be chosen to be any positive integer. It should
be noticed that, for monthly data, January is coded with 1960.01, whereas
1960.1 or 1960.10 stands for October 1960.


8.4 Selecting, Transforming, and Creating Time Series

8.4.1 Time Series Selector
Once a data set has been read in, the single variables can be accessed via the
time series selector. All time series appear in a list and can easily be combined
294      Markus Krätzig

even if they stem from different files. It is not possible, however, to select time
series together for some operation that have a different periodicity. Time series
of the same periodicity must have at least two overlapping observations in a
common time range to be eligible for common operations. Various tasks on
the selected variables can be accessed by a menu that pops up when the user
right clicks over selected variables in the time series selector. The tasks in the
pop-up menu do not take the selected range into account but always operate on
the whole range of the selected time series.
    The time series selector is used to select the set of variables, the order of the
variables, and the time range for the various econometric methods and models.
The respective selection is only valid within its context (e.g., for unit root tests).
The selection made there has no influence on the model selection – for instance
for a VAR model. The selection mechanism is also adjusted to its context, which
means that only one variable can be selected for unit root tests, whereas for VAR
modeling the number of variables is not restricted.
    Sometimes the ordering of the variables is important for a model or for
analysis. The selector uses the order in which the variables have been clicked
on. For multiple selection, it is necessary to keep either the Shift or the Ctrl
button depressed while the mouse is clicked over a series. The selected variables
are displayed in the correct order in the control area of the selector after the
selection has been confirmed.
    The time range of the selection can be adjusted by editing the respective
text field. The valid range is the largest common range of all selected time
series, where NaN missing values have been automatically truncated from the
beginning and the end of each series. The smallest legal range must contain
two observations. Once a range selection is made, this selection is kept as long
as it is valid. The maximum possible range can easily be set via a button. This
mechanism enables the user to keep an edited time range as long as possible
but allows a quick switch back to the maximum range as well.
    In general, all variable names in JMulTi are case insensitive, which means
that there is no distinction between, say, GNP and gnp. However, the variables
in the selector are displayed as they have been read in or named with the case
of the characters unchanged.
    The time series selector displays variables with their names and with a symbol
tagging their property. Within the context of time series analysis the three possi-
ble properties are endogenous, exogenous, and deterministic. Through
these properties variables can be grouped and treated differently by a certain
procedure or model. It is possible to change the property of a variable via the
right mouse menu. The following tasks are available through this pop-up menu
as well:

Delete. All selected time series can be deleted. This operation is also accessible
by pressing the Del key.
         The Software JMulTi                                                    295

Rename. The first selected time series can be renamed. The new name must be
unique among all time series in the list. The rules for variable names described
earlier apply.

Creating dummies. For dummy creation, first a variable needs to be selected as
a reference for the time range and the periodicity. A dialog allows specification
of the date of the impulse or the range of a shift. As already mentioned, seasonal
dummies should usually not be added to the data set explicitly because they can
be created for each specific analysis where they are needed.

Transforming time series. Some common transformations are also accessible
via the transform dialog. New variables are generated with a descriptive suffix. If
logarithm is selected, it is always applied first. The selected original variables
do not change.

Editing time series. The selected time series can be edited as well. Changes
are only stored if the dialog is confirmed with OK. If series with different ranges
are selected, the missing values at the beginning or the end are displayed with
NaN.

Exporting data. It is possible to combine the selected time series with a new
data set that will be saved in the .dat format described earlier. The data set can
then be read in again without further interaction.

8.4.2 Time Series Calculator
The time series calculator is a very flexible tool to create new variables by
combining existing time series with arithmetic operations and functions. It
provides the minilanguage TSCalc that operates with one-dimensional arrays
and scalars. The operation is as follows:

1. First one has to select the variables to be combined in the time series selector.
2. The names appear in the list Available Variables and are put into the
   variable space of the calculator.
3. One can write one or more commands to the command area and execute
   them with Execute or Ctrl+E. Newly created variables appear in the list
   of available variables.
4. Finally, the selected variables in Available Variables can be added to
   the workspace with Add Selected.

The syntax of TSCalc is very easy, and only a few simple rules apply:

• New variables can be defined with
  newvariable = some expression;.
296      Markus Krätzig

• Several commands can be executed at once by separating them with ’;’.
• The content of a variable can be printed out by just writing the variable name
  to the command line.
• The conventions for variable names hold as described in Section 8.2.4.
• All array operations are applied elementwise.
• TSCalc understands exponential notation; for example, 1.234e-3.

   By double clicking on a variable in the list, the name appears in the command
window and can be combined with commands from the calculator. Apart from
basic arithmetic operations, TSCalc provides a range of other functions like
sin, cos, tan, min, max, lagn, log, stdc, meanc, rndn, ones, trend. For
a complete list of possible operators and functions, consult the help system.
In case there are syntax errors, a descriptive message is printed to the output
window. If the selection in the time series selector is changed, the workspace of
the calculator is overwritten. Variables that have not been added to the workspace
are lost.


8.5 Managing Variables in JMulTi
JMulTi uses a sophisticated system to share variables between different com-
ponents. This makes the internal design of the program much clearer, but it also
has the benefit for the user that there is a great deal of transparency over almost
all variables that are used by the system. It is possible to check input parameters
as well as results being read back after a procedure has finished.
    The tool to access the variable space is the Variable Control Frame.
A tree structure allows browsing through the variables by their names. Each
variable can be displayed in a table, and a description is usually available on
what is stored in it and what type and dimension it has. The variables in the tree
always belong to a certain scope that is defined by the location of the variable
in the component hierarchy. For example, a variable stored for the VEC model
is not accessible from the VAR model. This structure is reflected in the tree.
    As a special feature it is possible to save every selected variable to an ASCII
text file to reuse it in another program. This feature can also be used for exporting
output and using it in another program for creating graphics for a publication.
The main idea of this facility is to provide as much flexibility as possible and
to offer a way of overcoming the limitations of JMulTi by using its export
functions.


8.6 Notes for Econometric Software Developers

8.6.1 General Remark
The following short overview should serve as a motivation for interested re-
searchers to use the software described in this chapter not only as a ready-made
            The Software JMulTi                                              297

tool but also as a platform to quickly create new applications for various pur-
poses in econometrics. For example, with the proper tools it would be possible
to create a user interface for a new test or estimation routine in a few hours
without a deep knowledge in object-oriented programming techniques. On the
other hand, the system is flexible enough to serve as a platform for more de-
manding applications as well. The technical details of how to implement this
capability are not described here, but the general idea of the underlying frame-
work is presented. For more information the interested reader is referred to the
homepage3 of the project.

8.6.2 The JStatCom Framework
As mentioned in the introduction, JMulTi is based on a software framework
called JStatCom. A software framework is a set of reusable classes that make
up a reusable design for a class of software [see Johnson & Foote (1988),
Deutsch (1989)]. This means that it already provides a structure as well as key
functionality for applications in a certain problem domain. The designer of an
application can reuse not only classes but the whole design of the framework and
concentrate on specific aspects of his or her implementation [Gamma, Helm,
Johnson & Vlissides (1995)]. The problem domain for JStatCom is time
series analysis, but it could well be extended to statistical modeling in general
or simulation, such as for macroeconomic models.
   JStatCom is a set of JAVA classes together with additional native libraries
necessary to communicate to certain computational engines. It is organized into
several packages as shown in Figure 8.1. The dashed lines indicate dependencies
between packages, and it can easily be seen that the model package contains the
core classes on which all other packages depend. For time series analysis the ts
package defines all relevant functionality. The other packages are largely inde-
pendent of each other. All classes and components within that framework can
be accessed by a well-documented application programming interface (API).
A special feature of JStatCom is that it makes heavy use of the JavaBeans
component architecture as defined by Sun Microsystems (1.01-1997). Compo-
nents can be configured and plugged together in a standardized way, which can
speed up development significantly.

8.6.3 Component Structure
To understand the underlying general design better, Figure 8.2 summarizes
the relationships between JStatCom, JMulTi, the computational engine, and
statistical procedures written for a certain engine. All components together
make a runnable application. The main building blocks of the software are
clearly separated from each other and can be developed independently.

3   The homepage is http://www.jstatcom.com.
  298          Markus Krätzig

com.jstatcom


    engine                             parser                                 ts
    classes for communication           classes for all tasks related         classes for time series,
    with statistical engines,           to parsing sets of strings            dates, date ranges,
    configuration management,           for reading data files,               data selection,
    thread handling,                    the TSCalc language,                  tasks specific to time series
    procedure calls for                 date input, etc.
    engine requests




    component                          model                                  io
    components for input                core classes for data types,          classes for tasks related
    specification, output               data management,                      to reading and writing
    display, special renderers          components for direct                 files, selection of files,
    for numbers, action                 data access, selectors for            saving variables, etc.
    listeners, menus, etc.              various data types




  Figure 8.1. JStatCom JAVA Package Structure.


      The application developer needs to implement the statistical procedures for a
  specific engine, and he or she must create the user interface for the application.
  The first task should be familiar to researchers because it means just using a
  programming language to implement the desired algorithm.
      The task of creating the JAVA application on the other hand is greatly sim-
  plified by the framework design of JStatCom. Many sophisticated classes and
  components are available and can easily be reused. The general functional-
  ity described earlier in this chapter is immediately available if the respective


                                  << Communicate >>
         << Framework >>                              << Executable >>
            JStatCom                                      Engine
         JAVA classes and                             external program or
         native libraries for                         library, e.g., GAUSS,
         general tasks                                Ox, Matlab


                      << Use >>           << Access >>           << Call >>

         << Application >>                               << File >>
             JMulTi                                     Procedures
         specific classes for                         files containing
         multiple time series                         methods to be
         analysis                                     executed by engine


  Figure 8.2. Collaboration of components.
         The Software JMulTi                                                   299

components are used. As a developer, one only needs to think about the special
needs of a certain procedure, which basically means input and output specifi-
cation. Although some programming in JAVA is always needed, most steps can
be done in a standardized way.
   The design splits the complex task of creating an application for time se-
ries analysis into smaller units, which can be solved separately. The problems
that occur in literally every analysis have been solved in the JAVA framework
already. The task of creating the GUI and the task of programming a complex
statistical procedure are almost completely separated and can even be done by
different people. That way it is possible to reuse already written code efficiently
and to enhance its value by integrating it with a graphical user interface.


8.7 Conclusion
JMulTi uses the functionality of JStatCom to implement interesting, new,
and otherwise difficult-to-use methods in time series econometrics. It is freely
available, using free code provided by many authors.
    On the other hand, the development of JStatCom would not at all have
been possible without the experiences gained from creating, using, and extend-
ing JMulTi. The framework is an extract of all general solutions that have been
found to be useful and are not related to a specific model but occur frequently
when implementing new methods. Both pieces of software will, it is hoped, con-
tinue to be improved, maintained, and extended with new features in the future.
It is likely that the software will change much faster than this book; therefore,
users are advised to check the respective websites for the latest developments.
          References




Ahn, S. K. (1988). Distribution of residual autocovariances in multivariate autoregressive
     models with structured parameterization, Biometrika 75: 590–593.
Ahn, S. K. & Reinsel, G. C. (1990). Estimation of partially nonstationary multivariate
     autoregressive models, Journal of the American Statistical Association 85: 813–
     823.
Akaike, H. (1973). Information theory and an extension of the maximum likelihood prin-
     ciple, in B. Petrov & F. Csáki (eds.), 2nd International Symposium on Information
     Theory, Académiai Kiadó, Budapest, pp. 267–281.
Akaike, H. (1974). A new look at the statistical model identification, IEEE Transactions
     on Automatic Control AC-19: 716–723.
Amisano, G. & Giannini, C. (1997). Topics in Structural VAR Econometrics, 2nd ed.,
     Springer-Verlag, Berlin.
Anderson, T. W. (1984). An Introduction to Multivariate Statistical Analysis, John Wiley,
     New York.
Andrews, D. W. K. (1993). Tests for parameter instability and structural change with
     unknown change point, Econometrica 61: 821–856.
Andrews, D. W. K. & Ploberger, W. (1994). Optimal tests when a nuisance parameter is
     present only under the alternative, Econometrica 62: 1383–1414.
Ansley, C. F. & Kohn, R. (1983). Exact likelihood of vector autoregressive-moving
     average process with missing or aggregated data, Biometrika 70: 275–278.
Arellano, C. & Pantula, S. G. (1995). Testing for trend stationarity versus difference
     stationarity, Journal of Time Series Analysis 16: 147–164.
Auestad, B. & Tjøstheim, D. (1990). Identification of nonlinear time series: First order
     characterization and order determination, Biometrika 77: 669–687.
Baba, Y., Engle, R. F., Kraft, D. F. & Kroner, K. F. (1990). Multivariate simultaneous
     generalized ARCH, mimeo, Department of Economics, University of California,
     San Diego.
Bachelier, L. (1900). Theory of speculation, in P. Cootner (ed.), The Random Character
     of Stock Market Prices, MIT Press, Cambridge, Massachusetts, pp. 17–78.
Bacon, D. W. & Watts, D. G. (1971). Estimating the transition between two intersecting
     straight lines, Biometrika 58: 525–534.
Banerjee, A., Dolado, J. J., Galbraith, J. W. & Hendry, D. F. (1993). Co-integration,


                                                                                      301
302       References

     Error-Correction, and the Econometric Analysis of Non-stationary Data, Oxford
     University Press, Oxford.
Bartel, H. & Lütkepohl, H. (1998). Estimating the Kronecker indices of cointegrated
     echelon form VARMA models, Econometrics Journal 1: C76–C99.
Bartlett, M. S. (1950). Periodogram analysis and continuous spectra, Biometrika 37: 1–
     16.
Basu, A. K. & Sen Roy, S. (1987). On asymptotic prediction problems for multivari-
     ate autoregressive models in the unstable nonexplosive case, Calcutta Statistical
     Association Bulletin 36: 29–37.
Bates, D. M. & Watts, D. G. (1988). Nonlinear Regression Analysis and its Applications,
     Wiley, New York.
Beaulieu, J. J. & Miron, J. A. (1993). Seasonal unit roots in aggregate U.S. data, Journal
     of Econometrics 55: 305–328.
Benkwitz, A., Lütkepohl, H. & Neumann, M. (2000). Problems related to bootstrap-
     ping impulse responses of autoregressive processes, Econometric Reviews 19:
     69–103.
Benkwitz, A., Lütkepohl, H. & Wolters, J. (2001). Comparison of bootstrap confidence
     intervals for impulse responses of German monetary systems, Macroeconomic
     Dynamics 5: 81–100.
Bera, A. K. & Higgins, M. L. (1993). ARCH models: Properties, estimation and testing,
     Journal of Economic Surveys 7: 305–366.
Bernanke, B. (1986). Alternative explanations of the money–income correlation,
     Carnegie–Rochester Conference Series on Public Policy, North-Holland, Ams-
     terdam.
Berndt, E. K., Hall, B. H., Hall, R. E. & Hausman, J. A. (1974). Estimation and infer-
     ence in nonlinear structural models, Annals of Economic and Social Measurement
     3/4: 653–665.
Black, F. (1976). Studies in stock price volatility changes, Proceedings of the 1976
     Meeting of the Business and Economics Statistics Section, American Statistical
     Association, pp. 177–181.
Blanchard, O. & Quah, D. (1989). The dynamic effects of aggregate demand and supply
     disturbances, American Economic Review 79: 655–673.
Bollerslev, T. (1986). Generalized autoregressive conditional heteroskedasticity, Journal
     of Econometrics 31: 307–327.
Bollerslev, T. (1987). A conditionally heteroskedastic time series model for speculative
     prices and rates of return, Review of Economics and Statistics 69: 542–547.
Bollerslev, T. (1990). Modelling the coherence in short-run nominal exchange rates:
     A multivariate generalized ARCH model, Review of Economics and Statistics
     72: 498–505.
Bollerslev, T., Chou, R. Y. & Kroner, K. F. (1992). ARCH modelling in finance: A review
     of the theory and empirical evidence, Journal of Econometrics 52: 5–59.
Bollerslev, T., Engle, R. F. & Nelson, D. B. (1994). ARCH models, in R. Engle &
     D. McFadden (eds.), Handbook of Econometrics, Vol. 4, Elsevier Science Publish-
     ers, Amsterdam.
Bollerslev, T., Engle, R. F. & Wooldridge, J. M. (1988). A capital asset pricing model
     with time-varying covariances, Journal of Political Economy 96: 116–131.
          References                                                                 303

Bollerslev, T. & Wooldridge, J. (1992). Quasi maximum likelihood estimation and in-
     ference in dynamic models with time varying covariances, Econometric Reviews
     11: 143–172.
Boswijk, H. P. (1995). Efficient inference on cointegration parameters in structural error
     correction models, Journal of Econometrics 69: 133–158.
Box, G. E. P. & Jenkins, G. M. (1976). Time Series Analysis: Forecasting and Control,
     Holden-Day, San Francisco.
Braun, P. A., Nelson, D. B. & Sunier, A. M. (1995). Good news, bad news, volatility and
     betas, Journal of Finance 50: 1575–1603.
Breitung, J. (2000). Structural Inference in Cointegrated Vector Autoregressive Models,
     Habilitationsschrift, Humboldt-Universität zu Berlin.
Breitung, J. (2001). A convenient representation for structural vector autoregressions,
     Empirical Economics 26: 447–459.
Breusch, T. (1978). Testing for autocorrelation in dynamic linear models, Australian
     Economic Papers 17: 334–355.
Brockwell, P. J. & Davis, R. A. (1987). Time Series: Theory and Methods, Springer-
     Verlag, New York.
Brown, R. L., Durbin, J. & Evans, J. M. (1975). Techniques for testing the constancy
     of regression relationships over time, Journal of the Royal Statistical Society B
     37: 149–192.
Brüggemann, R. & Lütkepohl, H. (2001). Lag selection in subset VAR models with an
     application to a U.S. monetary system, in R. Friedmann, L. Knüppel & H. Lütkepohl
     (eds.), Econometric Studies: A Festschrift in Honour of Joachim Frohn, LIT Verlag,
     Münster, pp. 107–128.
Burridge, P. & Taylor, A. M. R. (2001). On the properties of regression-based tests for
     seasonal unit roots in the presence of higher-order serial correlation, Journal of
     Business & Economic Statistics 19: 374–379.
Campbell, J., Lo, A. & MacKinlay, A. (1997). The Econometrics of Financial Markets,
     Princeton University Press, Princeton, New Jersey.
Candelon, B. & Lütkepohl, H. (2001). On the reliability of Chow-type tests for parameter
     constancy in multivariate dynamic models, Economics Letters 73: 155–160.
Canova, F. & Hansen, B. E. (1995). Are seasonal patterns constant over time? A test for
     seasonal stability, Journal of Business & Economic Statistics 13: 237–252.
Chan, K. S. & Tong, H. (1986). On estimating thresholds in autoregressive models,
     Journal of Time Series Analysis 7: 178–190.
Cheung, Y. W. & Ng, L. K. (1996). A causality in variance test and its application to
     financial market prices, Journal of Econometrics 72: 33–48.
Christiano, L. J., Eichenbaum, M. & Evans, C. (1999). Monetary shocks: What have
     we learned and to what end? in J. Taylor & M. Woodford (eds.), The Handbook of
     Macroeconomics, Amsterdam: Elsevier Science Publishers.
Chu, C.-S. (1995). Detecting parameter shifts in GARCH models, Econometric Reviews
     14: 241–266.
Comte, F. & Lieberman, O. (2003). Asymptotic theory for multivariate GARCH pro-
     cesses, Journal of Multivariate Analysis 84: 61–84.
Cooley, T. F. & LeRoy, S. F. (1985). Atheoretical macroeconometrics: A critique, Journal
     of Monetary Economics 16: 283–308.
304       References

Davidson, J. (2000). Econometric Theory, Blackwell, Oxford.
Davidson, R. & MacKinnon, J. (1993). Estimation and Inference in Econometrics, Ox-
     ford University Press, London.
Deutsch, L. P. (1989). Design reuse and frameworks in the smalltalk-80 system, in T. J.
     Biggerstaff & A. J. Perlis (eds.), Software Reusability, Volume II: Applications and
     Experience, Addison-Wesley, Reading, MA, pp. 57–71.
Dickey, D. A. & Fuller, W. A. (1979). Estimators for autoregressive time series with a
     unit root, Journal of the American Statistical Association 74: 427–431.
Dickey, D. A., Hasza, H. P. & Fuller, W. A. (1984). Testing for unit roots in seasonal
     time series, Journal of the American Statistical Association 79: 355–367.
Ding, Z. & Engle, R. F. (1994). Large scale conditional covariance matrix modeling,
     estimation and testing, mimeo, UCSD.
Dolado, J. J. & Lütkepohl, H. (1996). Making Wald tests work for cointegrated VAR
     systems, Econometric Reviews 15: 369–386.
Doornik, J. A. & Hansen, H. (1994). A practical test of multivariate normality, unpub-
     lished paper, Nuffield College.
Doornik, J. A. & Hendry, D. F. (1994). PcFiml 8.0, Interactive Econometric Modelling
     of Dynamic Systems, Thomson Publishing.
Doornik, J. A. & Hendry, D. F. (1997). Modelling Dynamic Systems Using PcFiml 9.0
     for Windows, International Thomson Business Press, London.
Doornik, J. A., Hendry, D. F. & Nielsen, B. (1998). Inference in cointegrating models:
     UK M1 revisited, Journal of Economic Surveys 12: 533–572.
Doukhan, P. (1994). Mixing. Properties and Examples, Lecture Notes in Statistics,
     Springer-Verlag, New York.
Duan, J.-C. (1995). The GARCH option pricing model, Mathematical Finance 5: 13–32.
Duan, J.-C. (1999). Conditionally fat-tailed distributions and the volatility smile in op-
     tions, Working paper, Hong Kong University of Science and Technology, Depart-
     ment of Finance.
Dufour, J.-M. & Renault, E. (1998). Short run and long run causality in time series:
     Theory, Econometrica 66: 1099–1125.
Edgerton, D. & Shukur, G. (1999). Testing autocorrelation in a system perspective,
     Econometric Reviews 18: 343–386.
Efron, B. & Tibshirani, R. J. (1993). An Introduction to the Bootstrap, Chapman & Hall,
     New York.
Eitrheim, Ø. & Teräsvirta, T. (1996). Testing the adequacy of smooth transition autore-
     gressive models, Journal of Econometrics 74: 59–75.
Engle, R. F. (1982). Autoregressive conditional heteroscedasticity with estimates of the
     variance of United Kingdom inflation, Econometrica 50: 987–1007.
Engle, R. F. (2002). Dynamic conditional correlation: A simple class of multivariate gen-
     eralized autoregressive conditional heteroskedasticity models, Journal of Business
     & Economic Statistics 20: 339–350.
Engle, R. F. & Bollerslev, T. (1986). Modelling the persistence of conditional variances,
     Econometric Reviews 5: 81–87.
Engle, R. F. & Gonzalez-Rivera, G. (1991). Semiparametric ARCH models, Journal of
     Business & Economic Statistics 9: 345–360.
Engle, R. F. & Granger, C. W. J. (1987). Cointegration and error correction: Represen-
     tation, estimation and testing, Econometrica 55: 251–276.
          References                                                                 305

Engle, R. F., Hendry, D. F. & Richard, J.-F. (1983). Exogeneity, Econometrica 51: 277–
      304.
Engle, R. F., Ito, T. & Lin, W. L. (1990). Meteor showers or heat waves? Heteroskedas-
      tic intra-daily volatility in the foreign exchange market, Econometrica 58: 525–
      542.
Engle, R. F. & Kroner, K. F. (1995). Multivariate simultaneous generalized GARCH,
      Econometric Theory 11: 122–150.
Engle, R. F., Lilien, D. M. & Robins, R. P. (1987). Estimating the varying risk premia
      in the term structure: The GARCH-M model, Econometrica 55: 391–407.
Engle, R. F. & Ng, V. K. (1993). Measuring and testing the impact of news on volatility,
      Journal of Finance 48: 1749–1778.
Engle, R. F. & Yoo, B. S. (1987). Forecasting and testing in cointegrated systems, Journal
      of Econometrics 35: 143–159.
Ericsson, N. R., Hendry, D. F. & Mizon, G. E. (1998). Exogeneity, cointegration,
      and economic policy analysis, Journal of Business & Economic Statistics 16:
      370–387.
Escribano, A. & Jordá, O. (1999). Improved testing and specification of smooth transition
      regression models, in P. Rothman (ed.), Nonlinear Time Series Analysis of Economic
      and Financial Data, Kluwer Academic Publishers, Dordrecht, pp. 289–319.
Fair, R. C. & Jaffee, D. M. (1972). Methods of estimation for markets in disequilibrium,
      Econometrica 40: 497–514.
Fama, E. F. (1965). The behaviour of stock market prices, Journal of Business 38: 34–
      105.
Fiorentini, G., Calzolari, G. & Panattoni, L. (1996). Analytic derivatives and the com-
      putation of GARCH estimates, Journal of Applied Econometrics 11: 399–417.
Fiorentini, G., Sentana, E. & Calzolari, G. (2002). Maximum likelihood estimation and
      inference in multivariate conditionally heteroskedastic dynamic regression models
      with student-t innovations, mimeo.
Franses, P. H. (1990). Testing for seasonal unit roots in monthly data, Econometric
      Institute Report 9032A, Erasmus University, Rotterdam.
Franses, P. H. & Hobijn, B. (1997). Critical values for unit root tests in seasonal time
      series, Journal of Applied Statistics 24: 25–46.
Franses, P. H. & van Dijk, D. (2000). Non-Linear Time Series Models in Empirical
      Finance, Cambridge University Press, Cambridge.
Fuller, W. A. (1976). Introduction to Statistical Time Series, John Wiley & Sons, New
      York.
Galı́, J. (1992). How well does the IS-LM model fit postwar U.S. data? Quarterly Journal
      of Economics 107: 709–738.
Galı́, J. (1999). Technology, employment, and the business cycle: Do technology shocks
      explain aggregate fluctuations? American Economic Review 89: 249–271.
Gallant, A. R., Rossi, P. E. & Tauchen, G. (1993). Nonlinear dynamic structures, Econo-
      metrica 61: 871–907.
Gamma, E., Helm, R., Johnson, R. & Vlissides, J. (1995). Design Patterns: Elements of
      Reusable Object-Oriented Software, Addison-Wesley, Reading, MA.
Glosten, L., Jagannathan, R. & Runkle, D. (1993). Relationship between the expected
      value and the volatility of the nominal excess return on stocks, Journal of Finance
      48: 1779–1801.
306       References

Godfrey, L. G. (1978). Testing against general autoregressive and moving average error
     models when the regressors include lagged dependent variables, Econometrica
     46: 1293–1302.
Godfrey, L. G. (1988). Misspecification Tests in Econometrics, Cambridge University
     Press, Cambridge.
Goldfeld, S. M. & Quandt, R. (1972). Nonlinear Methods in Econometrics, North-
     Holland, Amsterdam.
Gonzalo, J. & Pitarakis, J.-Y. (1998). Specification via model selection in vector error
     correction models, Economics Letters 60: 321–328.
Granger, C. W. J. (1966). The typical spectral shape of an economic variable, Econo-
     metrica 34: 150–161.
Granger, C. W. J. (1969). Investigating causal relations by econometric models and
     cross-spectral methods, Econometrica 37: 424–438.
Granger, C. W. J. (1981). Some properties of time series data and their use in econometric
     model specification, Journal of Econometrics 16: 121–130.
Granger, C. W. J. & Teräsvirta, T. (1993). Modelling Nonlinear Economic Relationships,
     Oxford University Press, Oxford.
Haase, K., Lütkepohl, H., Claessen, H., Moryson, M. & Schneider, W. (1992). MulTi: A
     Menu-Driven GAUSS Program for Multiple Time Series Analysis, Universität Kiel,
     Kiel, Germany.
Hafner, C. M. & Herwartz, H. (1998). Structural analysis of portfolio risk using beta
     impulse response functions, Statistica Neerlandica 52: 336–355.
Hafner, C. M. & Herwartz, H. (2001a). Option pricing under linear autoregressive dy-
     namics, heteroskedasticity, and conditional leptokurtosis, Journal of Empirical Fi-
     nance 8: 1–34.
Hafner, C. M. & Herwartz, H. (2001b). Volatility impulse response functions for multi-
     variate GARCH models, Discussion paper 2001/39, CORE.
Hafner, C. M. & Herwartz, H. (2003). Analytical quasi maximum likelihood inference
     in BEKK-GARCH models, mimeo EI 2003-21, Econometric Institute, Erasmus
     University, Rotterdam.
Hafner, C. M. & Herwartz, H. (2004). Causality tests for multivariate GARCH mod-
     els, Working paper, Institute for Statistics and Econometrics, University of Kiel,
     156/2004.
Hafner, C. M. & Rombouts, J. V. K. (2002). Semiparametric multivariate GARCH mod-
     els, Discussion Paper 2002/XX, CORE.
Hagerud, G. E. (1997). A new nonlinear GARCH model, EFI, Stockholm School of
     Economics.
Haggan, V. & Ozaki, T. (1981). Modelling non-linear random vibrations using an
     amplitude-dependent autoregressive time series model, Biometrika 68: 189–196.
Haldrup, N. (1998). An econometric analysis of I(2) variables, Journal of Economic
     Surveys 12: 595–650.
Hall, P. (1992). The Bootstrap and Edgeworth Expansion, Springer-Verlag, New York.
Hamilton, J. D. (1994). Time Series Analysis, Princeton University Press, Princeton, New
     Jersey.
Hannan, E. J. & Deistler, M. (1988). The Statistical Theory of Linear Systems, Wiley,
     New York.
          References                                                                307

Hannan, E. J. & Quinn, B. G. (1979). The determination of the order of an autoregression,
     Journal of the Royal Statistical Society B41: 190–195.
Hannan, E. J. & Rissanen, J. (1982). Recursive estimation of mixed autoregressive-
     moving average order, Biometrika 69: 81–94.
Hansen, B. E. (1996). Inference when a nuisance parameter is not identified under the
     null hypothesis, Econometrica 64: 413–430.
Hansen, B. E. (1997). Approximate asymptotic p values for structural-change tests,
     Journal of Business & Economic Statistics 15: 60–67.
Hansen, B. E. (1999). Testing for linearity, Journal of Economic Surveys 13: 551–
     576.
Hansen, H. & Johansen, S. (1999). Some tests for parameter constancy in cointegrated
     VAR-models, Econometrics Journal 2: 306–333.
Hansen, P. R. (2003). Structural changes in the cointegrated vector autoregressive model,
     Journal of Econometrics 114: 261–295.
Härdle, W., Lütkepohl, H. & Chen, R. (1997). A review of nonparametric time series
     analysis, International Statistical Review 65: 49–72.
Härdle, W., Tsybakov, A. & Yang, L. (1998). Nonparametric vector autoregression,
     Journal of Statistical Planning and Inference 68: 221–245.
Harvey, A. C. (1990). The Econometric Analysis of Time Series, 2nd ed., Philip Allan,
     Hemel, Hempstead.
Hatanaka, M. (1996). Time-Series-Based Econometrics: Unit Roots and Co-Integration,
     Oxford University Press, Oxford.
Hendry, D. F. (1995). Dynamic Econometrics, Oxford University Press, Oxford.
Hentschel, L. (1995). All in the family: Nesting symmetric and asymmetric GARCH
     models, Journal of Financial Economics 39: 71–104.
Herwartz, H. & Lütkepohl, H. (2000). Multivariate volatility analysis of VW stock
     prices, International Journal of Intelligent Systems in Accounting, Finance and
     Management 9: 35–54.
Hjellvik, V., Yao, Q. & Tjøstheim, D. (1998). Linearity testing using local polynomial
     approximation, Journal of Statistical Planning and Inference 68: 295–321.
Hodrick, R. J. & Prescott, E. C. (1997). Postwar U.S. business cycles: An empirical
     investigation, Journal of Money Credit and Banking 29: 1–16.
Hubrich, K., Lütkepohl, H. & Saikkonen, P. (2001). A review of systems cointegration
     tests, Econometric Reviews 20: 247–318.
Hylleberg, S., Engle, R. F., Granger, C. W. J. & Yoo, B. S. (1990). Seasonal integration
     and cointegration, Journal of Econometrics 44: 215–238.
IEEE (754-1985). IEEE standard for binary floating-point arithmetic, ANSI/IEEE Stan-
     dard.
Jacobson, T., Vredin, A. & Warne, A. (1997). Common trends and hysteresis in Scan-
     dinavian unemployment, European Economic Review 41: 1781–1816.
Jarque, C. M. & Bera, A. K. (1987). A test for normality of observations and regression
     residuals, International Statistical Review 55: 163–172.
Jeantheau, T. (1998). Strong consistency of estimators for multivariate ARCH models,
     Econometric Theory 14: 70–86.
Johansen, S. (1988). Statistical analysis of cointegration vectors, Journal of Economic
     Dynamics and Control 12: 231–254.
308       References

Johansen, S. (1991). Estimation and hypothesis testing of cointegration vectors in
     Gaussian vector autoregressive models, Econometrica 59: 1551–1581.
Johansen, S. (1992). Determination of cointegration rank in the presence of a linear
     trend, Oxford Bulletin of Economics and Statistics 54: 383–397.
Johansen, S. (1994). The role of the constant and linear terms in cointegration analysis
     of nonstationary time series, Econometric Reviews 13: 205–231.
Johansen, S. (1995a). Likelihood-based Inference in Cointegrated Vector Autoregressive
     Models, Oxford University Press, Oxford.
Johansen, S. (1995b). A statistical analysis of cointegration for I(2) variables, Econo-
     metric Theory 11: 25–59.
Johansen, S., Mosconi, R. & Nielsen, B. (2000). Cointegration analysis in the pres-
     ence of structural breaks in the deterministic trend, Econometrics Journal 3: 216–
     249.
Johnson, R. E. & Foote, B. (1988). Designing reusable classes, Journal of Object-
     Oriented Programming 1: 22–35.
Johnston, J. (1984). Econometric Methods, 3rd edn., McGraw-Hill, New York.
Jones, R. (1980). Maximum likelihood fitting of ARMA models to time series with
     missing observations, Technometrics 22: 389–395.
Jorion, P. (2001). Value at Risk, McGraw-Hill, New York.
Judge, G. G., Griffiths, W. E., Hill, R. C., Lütkepohl, H. & Lee, T.-C. (1985). The Theory
     and Practice of Econometrics, 2nd ed., John Wiley and Sons, New York.
Kilian, L. (1998). Small-sample confidence intervals for impulse response functions,
     Review of Economics and Statistics 80: 218–230.
King, M., Sentana, E. & Wadhwani, S. (1994). Volatility and links between international
     stock markets, Econometrica 62: 901–923.
King, R. G., Plosser, C. I., Stock, J. H. & Watson, M. W. (1991). Stochastic trends and
     economic fluctuations, American Economic Review 81: 819–840.
Kiviet, J. F. (1986). On the rigor of some mis-specification tests for modelling dynamic
     relationships, Review of Economic Studies 53: 241–261.
Koop, G., Pesaran, M. H. & Potter, S. M. (1996). Impulse response analysis in nonlinear
     multivariate models, Journal of Econometrics 74: 119–147.
Krämer, W., Ploberger, W. & Alt, R. (1988). Testing for structural change in dynamic
     models, Econometrica 56: 1355–1369.
Krämer, W. & Sonnberger, H. (1986). The Linear Regression Model under Test, Physica-
     Verlag, Heidelberg.
Kwiatkowski, D., Phillips, P. C. B., Schmidt, P. & Shin, Y. (1992). Testing the null of
     stationarity against the alternative of a unit root: How sure are we that the economic
     time series have a unit root? Journal of Econometrics 54: 159–178.
Lanne, M., Lütkepohl, H. & Saikkonen, P. (2002). Comparison of unit root tests for time
     series with level shifts, Journal of Time Series Analysis 23: 667–685.
Lanne, M., Lütkepohl, H. & Saikkonen, P. (2003). Test procedures for unit roots in
     time series with level shifts at unknown time, Oxford Bulletin of Economics and
     Statistics 65: 91–115.
Ledoit, O., Santa-Clara, P. & Wolf, M. (2003). Flexible multivariate GARCH model-
     ing with an application to international stock markets, Review of Economics and
     Statistics, 85: 735–747.
          References                                                                  309

Lee, S. W. & Hansen, B. E. (1994). Asymptotic theory for the GARCH(1,1) quasi-
     maximum likelihood estimator, Econometric Theory 10: 29–52.
Lee, T. & Ullah, A. (2001). Nonparametric bootstrap tests for neglected nonlinearity in
     time series regression models, Journal of Nonparametric Statistics 13: 425–451.
Lewis, R. & Reinsel, G. C. (1985). Prediction of multivarate time series by autoregressive
     model fitting, Journal of Multivariate Analysis 16: 393–411.
Leybourne, S. J. & McCabe, D. P. M. (1994). A consistent test for a unit root, Journal
     of Business & Economic Statistics 12: 157–166.
Li, W. K. & Mak, T. K. (1994). On the squared residual autocorrelations in nonlinear
     time series with conditional heteroskedasticity, Journal of Time Series Analysis
     15: 627–636.
Lin, C.-F. & Yang, J. (1999). Testing shifts in financial models with conditional het-
     eroskedasticity: An empirical distribution function approach, mimeo, University of
     Technology, Quantitative Finance Research Group, Sydney.
Lin, W. L. (1997). Impulse response functions for conditional volatility in GARCH
     models, Journal of Business & Economic Statistics 15: 15–25.
Ling, S. & McAleer, M. (2003). Asymptotic theory for a new vector ARMA GARCH
     model, Econometric Theory 19: 280–310.
Lintner, J. (1965). Security prices, risk and maximal gains from diversification, Journal
     of Finance 20: 587–615.
Linton, O. (1993). Adaptive estimation in ARCH models, Econometric Theory 9: 539–
     569.
Ljung, G. M. & Box, G. E. P. (1978). On a measure of lack of fit in time-series models,
     Biometrika 65: 297–303.
Lomnicki, Z. A. (1961). Tests for departure from normality in the case of linear stochastic
     processes, Metrika 4: 37–62.
Lucchetti, R. (2002). Analytical scores for multivariate GARCH models, Computational
     Economics 19: 133–143.
Lumsdaine, R. (1996). Consistency and asymptotic normality of the quasi-maximum
     likelihood estimator in IGARCH(1,1) and covariance stationary GARCH(1,1) mod-
     els, Econometrica 64: 575–596.
Lundbergh, S. & Teräsvirta, T. (2002). Evaluating GARCH models, Journal of Econo-
     metrics 110: 417–435.
Lundbergh, S., Teräsvirta, T. & van Dijk, D. (2003). Time-varying smooth transition
     autoregressive models, Journal of Business & Economic Statistics 21: 104–121.
Lütkepohl, H. (1988). Asymptotic distribution of the moving average coefficients of an
     estimated vector autoregressive process, Econometric Theory 4: 77–85.
Lütkepohl, H. (1991). Introduction to Multiple Time Series Analysis, Springer-Verlag,
     Berlin.
Lütkepohl, H. (1993). Testing for causation between two variables in higher dimensional
     VAR models, in H. Schneeweiss & K. F. Zimmermann (eds.), Studies in Applied
     Econometrics, Physica-Verlag, Heidelberg, pp. 75–91.
Lütkepohl, H. (1996). Testing for nonzero impulse responses in vector autoregressive
     processes, Journal of Statistical Planning and Inference 50: 1–20.
Lütkepohl, H. (2001). Vector autoregressions, in B. H. Baltagi (ed.), A Companion to
     Theoretical Econometrics, Blackwell, Oxford, pp. 678–699.
310       References

Lütkepohl, H. & Breitung, J. (1997). Impulse response analysis of vector autoregressive
     processes, in C. Heij, H. Schumacher, B. Hanzon & C. Praagman (eds.), System
     Dynamics in Economic and Financial Models, Wiley, Chichester.
Lütkepohl, H. & Claessen, H. (1997). Analysis of cointegrated VARMA processes,
     Journal of Econometrics 80: 223–239.
Lütkepohl, H. & Poskitt, D. S. (1991). Estimating orthogonal impulse responses via
     vector autoregressive models, Econometric Theory 7: 487–496.
Lütkepohl, H. & Poskitt, D. S. (1996a). Specification of echelon form VARMA models,
     Journal of Business & Economic Statistics 14: 69–79.
Lütkepohl, H. & Poskitt, D. S. (1996b). Testing for causation using infinite order vector
     autoregressive processes, Econometric Theory 12: 61–87.
Lütkepohl, H. & Poskitt, D. S. (1998). Consistent estimation of the number of cointe-
     gration relations in a vector autoregressive model, in R. Galata & H. Küchenhoff
     (eds.), Econometrics in Theory and Practice. Festschrift for Hans Schneeweiß,
     Physica-Verlag, Heidelberg, pp. 87–100.
Lütkepohl, H. & Reimers, H.-E. (1992). Impulse response analysis of cointegrated sys-
     tems, Journal of Economic Dynamics and Control 16: 53–78.
Lütkepohl, H. & Saikkonen, P. (1997). Impulse response analysis in infinite or-
     der cointegrated vector autoregressive processes, Journal of Econometrics 81:
     127–157.
Lütkepohl, H. & Saikkonen, P. (1999). Order selection in testing for the cointegrating
     rank of a VAR process, in R. F. Engle & H. White (eds.), Cointegration, Causality,
     and Forecasting. A Festschrift in Honour of Clive W. J. Granger, Oxford University
     Press, Oxford, pp. 168–199.
Lütkepohl, H. & Saikkonen, P. (2000). Testing for the cointegrating rank of a VAR
     process with a time trend, Journal of Econometrics 95: 177–198.
Lütkepohl, H., Saikkonen, P. & Trenkler, C. (2001a). Maximum eigenvalue versus trace
     tests for the cointegrating rank of a VAR process, Econometrics Journal 4: 287–
     310.
Lütkepohl, H., Saikkonen, P. & Trenkler, C. (2001b). Testing for the cointegrating rank
     of a VAR process with level shift at unknown time, Discussion Paper 63, SFB 373,
     Humboldt Universität.
Lütkepohl, H., Teräsvirta, T. & Wolters, J. (1999). Investigating stability and linearity of
     a German M1 money demand function, Journal of Applied Econometrics 14: 511–
     525.
Lütkepohl, H. & Wolters, J. (2003). The transmission of German monetary policy in the
     pre-euro period, Macroeconomic Dynamics 7: 711–733.
Luukkonen, R., Saikkonen, P. & Teräsvirta, T. (1988a). Testing linearity against smooth
     transition autoregressive models, Biometrika 75: 491–499.
Luukkonen, R., Saikkonen, P. & Teräsvirta, T. (1988b). Testing linearity in univariate
     time series models, Scandinavian Journal of Statistics 15: 161–175.
Maddala, D. S. (1977). Econometrics, McGraw-Hill, New York.
Maddala, G. S. & Kim, I.-M. (1998). Unit Roots, Cointegration, and Structural Change,
     Cambridge University Press, Cambridge.
McCullough, B. D. & Vinod, H. D. (1999). The numerical reliability of econometric
     software, Journal of Economic Literature 37: 633–655.
          References                                                                    311

McLeod, A. I. & Li, W. K. (1983). Diagnostic checking of ARMA time series models us-
     ing squared residual autocorrelations, Journal of Time Series Analysis 4: 269–273.
Moryson, M. (1998). Testing for Random Walk Coefficients in Regression and State
     Space Models, Physica-Verlag, Heidelberg.
Mosconi, R. & Giannini, C. (1992). Non-causality in cointegrated systems: Representa-
     tion, estimation and testing, Oxford Bulletin of Economics and Statistics 54: 399–
     417.
Nelson, D. B. (1990). Stationarity and persistence in the GARCH(1,1) model, Econo-
     metric Theory 6: 318–334.
Nelson, D. B. (1991). Conditional heteroskedasticity in asset returns: A new approach,
     Econometrica 59: 347–370.
Nelson, D. & Cao, C. Q. (1992). Inequality constraints in univariate GARCH models,
     Journal of Business & Economics Statistics 10: 229–235.
Neumann, M. & Polzehl, J. (1998). Simultaneous bootstrap confidence bands in non-
     parametric regression, Journal of Nonparametric Statistics 9: 307–333.
Newey, W. K. & Steigerwald, D. G. (1997). Asymptotic bias for quasi-maximum-
     likelihood estimators in conditional heteroskedasticity models, Econometrica
     65: 587–599.
Ng, S. & Perron, P. (1995). Unit root tests in ARMA models with data-dependent
     methods for the selection of the truncation lag, Journal of the American Statistical
     Association 90: 268–281.
Öcal, N. & Osborn, D. R. (2000). Business cycle nonlinearities in UK consumption and
     production, Journal of Applied Econometrics 15: 27–43.
Pagan, A. (1995). Three econometric methodologies: An update, in L. Oxley, D. A. R.
     George, C. J. Roberts & S. Sayer (eds.), Surveys in Econometrics, Basil Blackwell,
     Oxford.
Pagan, A. (1996). The econometrics of financial markets, Journal of Empirical Finance
     3: 15–102.
Palm, F. (1996). GARCH models of volatility, in G. Maddala & C. Rao (eds.), Handbook
     of Statistics, Vol. 14, Elsevier, Amsterdam, pp. 209–240.
Pantula, S. G. (1989). Testing for unit roots in time series data, Econometric Theory
     5: 256–271.
Park, J. Y. & Phillips, P. C. B. (1988). Statistical inference in regressions with integrated
     processes: Part 1, Econometric Theory 4: 468–497.
Park, J. Y. & Phillips, P. C. B. (1989). Statistical inference in regressions with integrated
     processes: Part 2, Econometric Theory 5: 95–131.
Parzen, E. (1961). Mathematical considerations in the estimation of spectra, Technomet-
     rics 3: 167–190.
Paulsen, J. (1984). Order determination of multivariate autoregressive time series with
     unit roots, Journal of Time Series Analysis 5: 115–127.
Perron, P. (1989). The great crash, the oil price shock, and the unit root hypothesis,
     Econometrica 57: 1361–1401.
Phillips, P. C. B. (1987). Time series regression with a unit root, Econometrica 55: 277–
     301.
Phillips, P. C. B. (1991). Optimal inference in cointegrated systems, Econometrica
     59: 283–306.
312       References

Phillips, P. C. B. & Durlauf, S. N. (1986). Multiple time series regression with integrated
     processes, Review of Economic Studies 53: 473–495.
Phillips, P. C. B. & Hansen, B. E. (1990). Statistical inference in instrumental variables
     regression with I(1) processes, Review of Economic Studies 57: 99–125.
Phillips, P. C. B. & Loretan, M. (1991). Estimating long-run economic equilibria, Review
     of Economic Studies 58: 407–436.
Phillips, P. C. B. & Perron, P. (1988). Testing for a unit root in time series regression,
     Biometrika 75: 335–346.
Ploberger, W. & Krämer, W. (1992). The CUSUM test with OLS residuals, Econometrica
     60: 271–285.
Ploberger, W., Krämer, W. & Kontrus, K. (1989). A new test for structural stability in
     the linear regression model, Journal of Econometrics 40: 307–318.
Priestley, M. B. (1981). Spectral Analysis and Time Series, Academic Press, London.
Quandt, R. E. (1958). The estimation of parameters of a linear regression system obeying
     two separate regimes, Journal of the American Statistical Association 53: 873–
     880.
Ramsey, J. B. (1969). Tests for specification errors in classical linear least-squares re-
     gression analysis, Journal of the Royal Statistical Society B 31: 350–371.
Rao, C. R. (1973). Linear Statistical Inference and Its Applications, 2nd ed., John Wiley
     and Sons, New York.
Ravn, M. O. & Uhlig, H. (2001). On adjusting the HP-filter for the frequency of obser-
     vations, Working Paper 479, CESifo.
Reimers, H.-E. (1991). Analyse kointegrierter Variablen mittels vektorautoregressiver
     Modelle, Physica-Verlag, Heidelberg.
Reinsel, G. C. (1993). Elements of Multivariate Time Series Analysis, Springer-Verlag,
     New York.
Rissanen, J. (1978). Modeling by shortest data description, Automatica 14: 465–
     471.
Said, S. E. & Dickey, D. A. (1984). Testing for unit roots in autoregressive-moving
     average models of unknown order, Biometrika 71: 599–607.
Saikkonen, P. (1992). Estimation and testing of cointegrated systems by an autoregressive
     approximation, Econometric Theory 8: 1–27.
Saikkonen, P. & Lütkepohl, H. (1996). Infinite order cointegrated vector autoregressive
     processes: Estimation and inference, Econometric Theory 12: 814–844.
Saikkonen, P. & Lütkepohl, H. (1999). Local power of likelihood ratio tests for the
     cointegrating rank of a VAR process, Econometric Theory 15: 50–78.
Saikkonen, P. & Lütkepohl, H. (2000a). Asymptotic inference on nonlinear functions
     of the coefficients of infinite order cointegrated VAR processes, in W. A. Barnett,
     D. F. Hendry, S. Hylleberg, T. Teräsvirta, D. Tjøstheim & A. Würtz (eds.), Nonlin-
     ear Econometric Modeling in Time Series Analysis, Cambridge University Press,
     Cambridge, pp. 165–201.
Saikkonen, P. & Lütkepohl, H. (2000b). Testing for the cointegrating rank of a VAR
     process with an intercept, Econometric Theory 16: 373–406.
Saikkonen, P. & Lütkepohl, H. (2000c). Testing for the cointegrating rank of a VAR
     process with structural shifts, Journal of Business & Economic Statistics 18: 451–
     464.
Saikkonen, P. & Lütkepohl, H. (2000d). Trend adjustment prior to testing for the
          References                                                                   313

     cointegrating rank of a vector autoregressive process, Journal of Time Series Anal-
     ysis 21: 435–456.
Saikkonen, P. & Lütkepohl, H. (2002). Testing for a unit root in a time series with a level
     shift at unknown time, Econometric Theory 18: 313–348.
Saikkonen, P. & Luukkonen, R. (1993a). Point optimal tests for testing the order of
     differencing in ARIMA models, Econometric Theory 9: 343–362.
Saikkonen, P. & Luukkonen, R. (1993b). Testing for a moving average unit root in au-
     toregressive integrated moving average models, Journal of the American Statistical
     Association 88: 596–601.
Saikkonen, P. & Luukkonen, R. (1997). Testing cointegration in infinite order vector
     autoregressive processes, Journal of Econometrics 81: 93–129.
Sargent, T. J. (1978). Estimation of dynamic labor demand schedules under rational
     expectations, Journal of Political Economy 86: 1009–1044.
Schmidt, P. & Phillips, P. C. B. (1992). LM tests for a unit root in the presence of
     deterministic trends, Oxford Bulletin of Economics and Statistics 54: 257–287.
Schwarz, G. (1978). Estimating the dimension of a model, Annals of Statistics 6: 461–
     464.
Schwert, G. W. (1989). Tests for unit roots: A Monte Carlo investigation, Journal of
     Business & Economic Statistics 7: 147–159.
Seber, G. A. F. & Wild, C. J. (1989). Nonlinear Regression, Wiley, New York.
Shapiro, M. & Watson, M. W. (1988). Sources of business cycle fluctuations, NBER
     Macroeconomics Annual 3: 111–156.
Sharpe, W. F. (1964). Capital asset prices: A theory of market equilibrium under condi-
     tions of risk, Journal of Finance 19: 425–442.
Shephard, N. (1996). Statistical aspects of ARCH and stochastic volatility, in D. R. Cox,
     D. V. Hinkley & O. Barndorff-Nielsen (eds.), Time Series Models in Econometrics,
     Finance and Other Fields.Monographs on Statistics and Applied Probability 65,
     Chapman & Hall, pp. 1–67.
Silverman, B. W. (1986). Density Estimation for Statistics and Data Analysis, Chapman
     & Hall, London.
Sims, C. A. (1980). Macroeconomics and reality, Econometrica 48: 1–48.
Sims, C. A. (1981). An autoregressive index model for the U.S. 1948-1975, in J. Kmenta
     & J. B. Ramsey (eds.), Large-Scale Macro-Econometric Models, North-Holland,
     Amsterdam, pp. 283–327.
Sims, C. A. (1986). Are forecasting models usable for policy analysis? Quarterly Review,
     Federal Reserve Bank of Minneapolis 10: 2–16.
Sims, C. A., Stock, J. H. & Watson, M. W. (1990). Inference in linear time series models
     with some unit roots, Econometrica 58: 113–144.
Skalin, J. & Teräsvirta, T. (2002). Modeling asymmetries and moving equilibria in un-
     employment rates, Macroeconomic Dynamics 6: 202–241.
Stock, J. H. (1994). Unit roots, structural breaks and trends, in R. F. Engle & D. L.
     McFadden (eds.), Handbook of Econometrics, Volume IV, Elsevier, Amsterdam,
     pp. 2739–2841.
Sun Microsystems (1.01-1997). Java beans api specification.
Tanaka, K. (1990). Testing for a moving average unit root, Econometric Theory 6: 433–
     444.
Taylor, S. J. (1986). Modelling Financial Time Series, John Wiley & Sons, Chichester.
314       References

Teräsvirta, T. (1994). Specification, estimation, and evaluation of smooth transition
      autoregressive models, Journal of the American Statistical Association 89: 208–
      218.
Teräsvirta, T. (1998). Modeling economic relationships with smooth transition regres-
      sions, in A. Ullah & D. E. Giles (eds.), Handbook of Applied Economic Statistics,
      Dekker, New York, pp. 507–552.
Teräsvirta, T., Strikholm, B. & van Dijk, D. (2003). Changing seasonal patterns in
      quarterly industrial production in Finland and Sweden, in R. Höglund, M. Jäntti
      & G. Rosenqvist (eds.), Statistics, Econometrics and Society. Essays in Honour of
      Leif Nordberg, Statistics Finland, Helsinki, pp. 229–246.
Tjøstheim, D. & Auestad, B. (1994). Nonparametric identification of nonlinear time-
      series: Projections, Journal of the American Statistical Association 89: 1398–1409.
Toda, H. Y. & Phillips, P. C. B. (1993). Vector autoregressions and causality, Economet-
      rica 61: 1367–1393.
Toda, H. Y. & Yamamoto, T. (1995). Statistical inference in vector autoregressions with
      possibly integrated processes, Journal of Econometrics 66: 225–250.
Tong, H. (1990). Non-Linear Time Series. A Dynamical System Approach, Oxford Uni-
      versity Press, Oxford.
Tsay, R. S. (1993). Testing for noninvertible models with applications, Journal of Busi-
      ness & Economic Statistics 11: 225–233.
Tschernig, R. & Yang, L. (2000a). Nonparametric estimation of generalized impulse
      response functions, SFB 373 Discussion Paper 89, 2000, Humboldt-Universität
      Berlin.
Tschernig, R. & Yang, L. (2000b). Nonparametric lag selection for time series, Journal
      of Time Series Analysis 21: 457–487.
Tse, Y. K. (2000). A test for constant correlations in a multivariate GARCH model,
      Journal of Econometrics 98: 107–127.
Tsui, A. K. & Yu, Q. (1999). Constant conditional correlation in a bivariate GARCH
      model: Evidence from the stock market in China, Mathematics and Computers in
      Simulation 48: 503–509.
van Dijk, D. & Franses, P. H. (1999). Modeling multiple regimes in the business cycle,
      Macroeconomic Dynamics 3: 311–340.
van Dijk, D., Strikholm, B. & Teräsvirta, T. (2003). The effects of institutional and tech-
      nological change and business cycle fluctuations on seasonal patterns in quarterly
      industrial production series, Econometrics Journal 6: 79–98.
van Dijk, D., Teräsvirta, T. & Franses, P. H. (2002). Smooth transition autoregressive
      models – A survey of recent developments, Econometric Reviews 21: 1–47.
Vieu, P. (1994). Choice of regressors in nonparametric estimation, Computational Statis-
      tics & Data Analysis 17: 575–594.
Vlaar, P. (1998). On the asymptotic distribution of impulse response functions with long
      run restrictions, DNB Staff reports 22, De Nederlandsche Bank.
Watson, M. W. (1994). Vector autoregressions and cointegration, in R. F. Engle & D. L.
      McFadden (eds.), Handbook of Econometrics, Vol. IV, Elsevier, New York.
Weber, C. E. (1995). Cyclical output, cyclical unemployment, and Okun’s coefficient:
      A new approach, Journal of Applied Econometrics 10: 433–445.
Wold, H. (1960). A generalization of causal chain models, Econometrica 28: 443–463.
          References                                                               315

Yang, L. & Tschernig, R. (1999). Multivariate bandwidth selection for local linear re-
     gression, Journal of the Royal Statistical Society, Series B 61: 793–815.
Yang, L. & Tschernig, R. (2002). Non- and semiparametric identification of seasonal
     nonlinear autoregression models, Econometric Theory 18: 1408–1448.
Yao, Q. & Tong, H. (1994). On subset selection in non-parametric stochastic regression,
     Statistica Sinica 4: 51–70.
Zakoian, J. M. (1994). Threshold heteroskedastic functions, Journal of Economic Dy-
     namics and Control 18: 931–955.
Zellner, A. (1962). An efficient method of estimating seemingly unrelated regressions
     and tests of aggregation bias, Journal of the American Statistical Association
     57: 348–368.



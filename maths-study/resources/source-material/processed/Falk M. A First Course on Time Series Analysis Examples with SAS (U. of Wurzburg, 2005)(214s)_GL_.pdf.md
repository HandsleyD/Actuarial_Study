---
normalized_id: shared-pdf-reference-falk-m-a-first-course-on-time-series-analysis-examples-with-sas-u-of-wurzburg-2005-214s-gl
exam_code: SHARED
material_scope: falk m. a first course on time series analysis examples with sas (u. of wurzburg, 2005)(214s)_gl_.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Falk M. A First Course on Time Series Analysis Examples with SAS (U. of Wurzburg, 2005)(214s)_GL_.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-falk-m-a-first-course-on-time-series-analysis-examples-with-sas-u-of-wurzburg-2005-214s-gl

 A First Course on
Time Series Analysis
   Examples with SAS




     Chair of Statistics
   University of Würzburg
Version: 2005.March.01
Copyright © 2005 Michael Falk.

 Editors                      Michael Falk, Frank Marohn, René Michel, Daniel Hof-
                              mann, Maria Macke
 Programs                     Bernward Tewes, René Michel, Daniel Hofmann




Permission is granted to copy, distribute and/or modify this document under the terms
of the GNU Free Documentation License, Version 1.2 or any later version published by
the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no
Back-Cover Texts. A copy of the license is included in the section entitled ”GNU Free
Documentation License”.




SAS and all other SAS Institute Inc. product or service names are registered trademarks
or trademarks of SAS Institute Inc. in the USA and other countries. Windows is a
trademark, Microsoft is a registered trademark of the Microsoft Corporation.

The authors accept no responsibility for errors in the programs mentioned of their con-
sequences.
Preface

The analysis of real data by means of statistical methods with the aid of a software
package common in industry and administration usually is not an integral part of
mathematics studies, but it will certainly be part of a future professional work.

The practical need for an investigation of time series data is exemplified by the
following plot, which displays the yearly sunspot numbers between 1749 and 1924.
These data are also known as the Wolf or Wölfer (a student of Wolf) Data. For
a discussion of these data and further literature we refer to Wei (1990), Example
5.2.5.




The present book links up elements from time series analysis with a selection of
statistical procedures used in general practice including the statistical software
package SAS (Statistical Analysis System). Consequently this book addresses
students of statistics as well as students of other branches such as economics, de-
mography and engineering, where lectures on statistics belong to their academic
training. But it is also intended for the practician who, beyond the use of statis-
tical tools, is interested in their mathematical background. Numerous problems
illustrate the applicability of the presented statistical procedures, where SAS gives
the solutions. The programs used are explicitly listed and explained. No previous
experience is expected neither in SAS nor in a special computer system so that a
short training period is guaranteed.

This book is meant for a two semester course (lecture, seminar or practical train-
ing) where the first two chapters can be dealt with in the first semester. They
iv                                                                             Preface

provide the principal components of the analysis of a time series in the time do-
main. Chapters 3, 4 and 5 deal with its analysis in the frequency domain and
can be worked through in the second term. In order to understand the math-
ematical background some terms are useful such as convergence in distribution,
stochastic convergence, maximum likelihood estimator as well as a basic knowl-
edge of the test theory, so that work on the book can start after an introductory
lecture on stochastics. Each chapter includes exercises. An exhaustive treatment
is recommended.

Due to the vast field a selection of the subjects was necessary. Chapter 1 contains
elements of an exploratory time series analysis, including the fit of models (logistic,
Mitscherlich, Gompertz curve) to a series of data, linear filters for seasonal and
trend adjustments (difference filters, Census X − 11 Program) and exponential fil-
ters for monitoring a system. Autocovariances and autocorrelations as well as vari-
ance stabilizing techniques (Box–Cox transformations) are introduced. Chapter 2
provides an account of mathematical models of stationary sequences of random
variables (white noise, moving averages, autoregressive processes, ARIMA mod-
els, cointegrated sequences, ARCH- and GARCH-processes, state-space models)
together with their mathematical background (existence of stationary processes,
covariance generating function, inverse and causal filters, stationarity condition,
Yule–Walker equations, partial autocorrelation). The Box–Jenkins program for
the specification of ARMA-models is discussed in detail (AIC, BIC and HQC in-
formation criterion). Gaussian processes and maximum likelihod estimation in
Gaussian models are introduced as well as least squares estimators as a nonpara-
metric alternative. The diagnostic check includes the Box–Ljung test. Many mod-
els of time series can be embedded in state-space models, which are introduced at
the end of Chapter 2. The Kalman filter as a unified prediction technique closes
the analysis of a time series in the time domain. The analysis of a series of data
in the frequency domain starts in Chapter 3 (harmonic waves, Fourier frequencies,
periodogram, Fourier transform and its inverse). The proof of the fact that the
periodogram is the Fourier transform of the empirical autocovariance function is
given. This links the analysis in the time domain with the analysis in the fre-
quency domain. Chapter 4 gives an account of the analysis of the spectrum of
the stationary process (spectral distribution function, spectral density, Herglotz’s
theorem). The effects of a linear filter are studied (transfer and power transfer
function, low pass and high pass filters, filter design) and the spectral densities of
ARMA-processes are computed. Some basic elements of a statistical analysis of a
series of data in the frequency domain are provided in Chapter 5. The problem of
testing for a white noise is dealt with (Fisher’s κ-statistic, Bartlett–Kolmogorov–
Smirnov test) together with the estimation of the spectral density (periodogram,
discrete spectral average estimator, kernel estimator, confidence intervals).

This book is consecutively subdivided in a statistical part and an SAS-specific
part. For better clearness the SAS-specific part, including the diagrams generated
Preface                                                                           v

with SAS, always starts with a computer symbol, representing the beginning of a
session at the computer, and ends with a printer symbol for the end of this session.




This SAS-specific part is again divided in a diagram created with SAS, the pro-
gram, which generated the diagram, and explanations to this program. In order to
achieve a further differentiation between SAS-commands and individual nomen-
clature, SAS-specific commands were written in CAPITAL LETTERS, whereas
individual notations were written in lower-case letters.
Contents


1 Elements of Exploratory Time Series Analysis                                        1

  1.1   The Additive Model for a Time Series . . . . . . . . . . . . . . . .          2

  1.2   Linear Filtering of Time Series . . . . . . . . . . . . . . . . . . . .      16

  1.3   Autocovariances and Autocorrelations . . . . . . . . . . . . . . . .         30

  Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    35


2 Models of Time Series                                                              41

  2.1   Linear Filters and Stochastic Processes . . . . . . . . . . . . . . . .      41

  2.2   Moving Averages and Autoregressive Processes . . . . . . . . . . .           52

  2.3   Specification of ARMA-Models: The Box–Jenkins Program . . . .                85

  2.4   State-Space Models . . . . . . . . . . . . . . . . . . . . . . . . . . .     94

  Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 104


3 The Frequency Domain Approach of a Time Series                                    113

  3.1   Least Squares Approach with Known Frequencies . . . . . . . . . . 114

  3.2   The Periodogram . . . . . . . . . . . . . . . . . . . . . . . . . . . . 120

                                         vii
viii                                                                        CONTENTS

       Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 132


4 The Spectrum of a Stationary Process                                               135

       4.1   Characterizations of Autocovariance Functions . . . . . . . . . . . 136

       4.2   Linear Filters and Frequencies . . . . . . . . . . . . . . . . . . . . . 141

       4.3   Spectral Densities of ARMA-Processes . . . . . . . . . . . . . . . . 149

       Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 153


5 Statistical Analysis in the Frequency Domain                                       159

       5.1   Testing for a White Noise . . . . . . . . . . . . . . . . . . . . . . . 159

       5.2   Estimating Spectral Densities . . . . . . . . . . . . . . . . . . . . . 167

       Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 185


References                                                                           189


Index                                                                                193


SAS-Index                                                                            197


A GNU Free Documentation License                                                     199
Chapter 1

Elements of Exploratory
Time Series Analysis

A time series is a sequence of observations that are arranged according to the
time of their outcome. The annual crop yield of sugar-beets and their price per
ton for example is recorded in agriculture. The newspapers’ business sections re-
port daily stock prices, weekly interest rates, monthly rates of unemployment and
annual turnovers. Meteorology records hourly wind speeds, daily maximum and
minimum temperatures and annual rainfall. Geophysics is continuously observ-
ing the shaking or trembling of the earth in order to predict possibly impending
earthquakes. An electroencephalogram traces brain waves made by an electroen-
cephalograph in order to detect a cerebral disease, an electrocardiogram traces
heart waves. The social sciences survey annual death and birth rates, the number
of accidents in the home and various forms of criminal activities. Parameters in a
manufacturing process are permanently monitored in order to carry out an on-line
inspection in quality assurance.

There are, obviously, numerous reasons to record and to analyze the data of a
time series. Among these is the wish to gain a better understanding of the data
generating mechanism, the prediction of future values or the optimal control of
a system. The characteristic property of a time series is the fact that the data
are not generated independently, their dispersion varies in time, they are often
governed by a trend and they have cyclic components. Statistical procedures that
suppose independent and identically distributed data are, therefore, excluded from
the analysis of time series. This requires proper methods that are summarized
under time series analysis.
2                       Chapter 1. Elements of Exploratory Time Series Analysis

1.1      The Additive Model for a Time Series

The additive model for a given time series y1 , . . . , yn is the assumption that these
data are realizations of random variables Yt that are themselves sums of four
components
                    Yt = Tt + Zt + St + Rt ,          t = 1, . . . , n.           (1.1)
where Tt is a (monotone) function of t, called trend, and Zt reflects some non-
random long term cyclic influence. Think of the famous business cycle usually
consisting of recession, recovery, growth, and decline. St describes some non-
random short term cyclic influence like a seasonal component whereas Rt is a
random variable grasping all the deviations from the ideal non-stochastic model
yt = Tt + Zt + St . The variables Tt and Zt are often summarized as

                                    Gt = Tt + Zt ,                               (1.2)

describing the long term behavior of the time series. We suppose in the following
that the expectation E(Rt ) of the error variable exists and equals zero, reflecting
the assumption that the random deviations above or below the nonrandom model
balance each other on the average. Note that E(Rt ) = 0 can always be achieved
by appropriately modifying one or more of the nonrandom components.
Example 1.1.1. (Unemployed1 Data). The following data yt , t = 1, . . . , 51, are
the monthly numbers of unemployed workers in the building trade in Germany
from July 1975 to September 1979.




                        MONTH           T     UNEMPLYD

                        July            1       60572
                        August          2       52461
                        September       3       47357
                        October         4       48320
                        November        5       60219
                        December        6       84418
                        January         7      119916
                        February        8      124350
                        March           9       87309
                        April          10       57035
                        May            11       39903
                        June           12       34053
                        July           13       29905
1.1 The Additive Model for a Time Series                       3

                     August        14       28068
                     September     15       26634
                     October       16       29259
                     November      17       38942
                     December      18       65036
                     January       19      110728
                     February      20      108931
                     March         21       71517
                     April         22       54428
                     May           23       42911
                     June          24       37123
                     July          25       33044
                     August        26       30755
                     September     27       28742
                     October       28       31968
                     November      29       41427
                     December      30       63685
                     January       31       99189
                     February      32      104240
                     March         33       75304
                     April         34       43622
                     May           35       33990
                     June          36       26819
                     July          37       25291
                     August        38       24538
                     September     39       22685
                     October       40       23945
                     November      41       28245
                     December      42       47017
                     January       43       90920
                     February      44       89340
                     March         45       47792
                     April         46       28448
                     May           47       19139
                     June          48       16728
                     July          49       16523
                     August        50       16622
                     September     51       15499


                  Figure 1.1.1. Listing of Unemployed1 Data.

 ***      Program 1 _1_1   ***;
 TITLE1 ’ Listing ’;
 TITLE2 ’ Unemployed1 Data ’;

DATA data1 ;
4                           Chapter 1. Elements of Exploratory Time Series Analysis

    INFILE ’c :\ data \ unemployed1 . txt ’;
    INPUT month $ t unemplyd ;

 PROC PRINT DATA = data1 NOOBS ;
 RUN ; QUIT ;
                                                                                                       




This program consists of two main parts, a DATA    the variables to be printed out, ’dress up’ of
and a PROC step.                                   the display etc. The SAS internal observation
                                                   number (OBS) is printed by default, NOOBS sup-
The DATA step started with the DATA statement      presses the column of observation numbers on
creates a temporary dataset named data1. The       each line of output. An optional VAR statement
purpose of INFILE is to link the DATA step to a    determines the order (from left to right) in
raw dataset outside the program. The path-         which variables are displayed. If not specified
name of this dataset depends on the operat-        (like here), all variables in the data set will be
ing system; we will use the syntax of MS-DOS,      printed in the order they were defined to SAS.
which is most commonly known. INPUT tells          Entering RUN; at any point of the program tells
SAS how to read the data. Three variables are      SAS that a unit of work (DATA step or PROC)
defined here, where the first one contains char-   ended. SAS then stops reading the program
acter values. This is determined by the $ sign     and begins to execute the unit. The QUIT;
behind the variable name. For each variable        statement at the end terminates the process-
one value per line is read from the source into    ing of SAS.
the computer’s memory.
                                                   A line starting with an asterisk * and ending
The        statement    PROC procedurename         with a semicolon ; is ignored. These comment
DATA=filename; invokes a procedure that is         statements may occur at any point of the pro-
linked to the data from filename. Without          gram except within raw data or another state-
the option DATA=filename the most recently         ment.
created file is used.
                                                   The TITLE statement generates a title. Its
The PRINT procedure lists the data; it comes       printing is actually suppressed here and in the
with numerous options that allow control of        following.




The following plot of the Unemployed1 Data shows a seasonal component and a
downward trend. The period from July 1975 to September 1979 might be too
short to indicate a possibly underlying long term business cycle.
1.1 The Additive Model for a Time Series                                                           5




                         Figure 1.1.2. Plot of Unemployed1 Data.

 ***      Program 1 _1_2   ***;
 TITLE1 ’ Plot ’;
 TITLE2 ’ Unemployed1 Data ’;

DATA data1 ;
INFILE ’c :\ data \ unemployed1 . txt ’;
INPUT month $ t unemplyd ;

 AXIS1 LABEL =( ANGLE =90 ’ unemployed ’);
 AXIS2 LABEL =( ’t ’);
 SYMBOL1 V = DOT C = GREEN I = JOIN H =0.4 W =1;
 PROC GPLOT DATA = data1 ;
      PLOT unemplyd * t / VAXIS = AXIS1 HAXIS = AXIS2 ;
 RUN ; QUIT ;
                                                                                                       

Variables can be plotted by using the GPLOT        axes. ANGLE=90 causes a rotation of the label
procedure, where the graphical output is con-      of 90◦ so that it parallels the (vertical) axis in
trolled by numerous options.                       this example.

The AXIS statements with the LABEL options         The SYMBOL statement defines the manner
control labelling of the vertical and horizontal   in which the data are displayed.  V=DOT
6                          Chapter 1. Elements of Exploratory Time Series Analysis

C=GREEN I=JOIN H=0.4 W=1 tell SAS to plot            of the form PLOT y-variable*x-variable /
green dots of height 0.4 and to join                 options;, where the options here define the
them with a line of width 1.         The             horizontal and the vertical axes.
PLOT statement in the GPLOT procedure is




Models with a Nonlinear Trend

In the additive model Yt = Tt + Rt , where the nonstochastic component is only
the trend Tt reflecting the growth of a system, and assuming E(Rt ) = 0, we have

                                     E(Yt ) = Tt =: f (t).

A common assumption is that the function f depends on several (unknown) para-
meters β1 , . . . , βp , i.e.,

                                   f (t) = f (t; β1 , . . . , βp ).                       (1.3)

However, the type of the function f is known. The parameters β1 , . . . , βp are then
to be estimated from the set of realizations yt of the random variables Yt . A
common approach is a least squares estimate β̂1 , . . . , β̂p satisfying

       X                                 2     X                             2
            yt − f (t; β̂1 , . . . , β̂p ) = min    yt − f (t; β1 , . . . , βp ) ,        (1.4)
                                            β1 ,...,βp
        t                                                t


whose computation, if it exists at all, is a numerical problem. The value ŷt :=
f (t; β̂1 , . . . , β̂p ) can serve as a prediction of a future yt . The observed differences
yt − ŷt are called residuals. They contain information about the goodness of the
fit of our model to the data. In the following we list several popular examples of
trend functions.

The Logistic Function
The function

                                                             β3
            flog (t) := flog (t; β1 , β2 , β3 ) :=                     ,     t ∈ R,       (1.5)
                                                     1 + β2 exp(−β1 t)

with β1 , β2 , β3 ∈ R \ {0} is the widely used logistic function.
1.1 The Additive Model for a Time Series                                                7




     Figure 1.1.3. The logistic function flog with different values of β1 , β2 , β3 .

 ***      Program 1 _1_3  ***;
 TITLE1 ’ Plots of the Logistic Function ’;

DATA data1 ;
 beta3 =1;
 DO beta1 = 0.5 , 1;
   DO beta2 =0.1 , 1;
     DO t = -10 TO 10 BY 0.5;
         s = COMPRESS ( ’( ’ || beta1 || ’,’ || beta2 ||
                          ’,’ || beta3 || ’) ’);
         f_log = beta3 /(1+ beta2 * EXP ( - beta1 * t ));
    OUTPUT ;
   END ; END ; END ;


SYMBOL1 C = GREEN V = NONE I = JOIN L =1;
SYMBOL2 C = GREEN V = NONE I = JOIN L =2;
SYMBOL3 C = GREEN V = NONE I = JOIN L =3;
SYMBOL4 C = GREEN V = NONE I = JOIN L =33;
AXIS1 LABEL =( H =2 ’f ’ H =1 ’log ’ H =2 ’( t ) ’);
AXIS2 LABEL =( ’t ’);
8                           Chapter 1. Elements of Exploratory Time Series Analysis

 LEGEND1 LABEL =( F = CGREEK H =2 ’(b ’ H =1 ’1 ’ H =2 ’,
            b ’ H =1 ’2 ’ H =2 ’,b ’ H =1 ’3 ’ H =2 ’)= ’);
 PROC GPLOT DATA = data1 ;
      PLOT f_log * t = s / VAXIS = AXIS1 HAXIS = AXIS2
          LEGEND = LEGEND1 ;
 RUN ; QUIT ;
                                                                                                       

A function is plotted by computing its val-         The four functions are plotted by the GPLOT
ues at numerous grid points and then joining        procedure by adding =s in the PLOT state-
them. The computation is done in the DATA           ment. This also automatically generates a leg-
step, where the data file data1 is generated. It    end, which is customized by the LEGEND1 state-
contains the values of f log, computed at the       ment. Here the label is modified by using a
grid t = −10, −9.5, . . . , 10 and indexed by the   greek font (F=CGREEK) and generating smaller
vector s of the different choices of parameters.    letters of height 1 for the indices, while assum-
This is done by nested DO loops. The operator       ing a normal height of 2 (H=1 and H=2). The
|| merges two strings and COMPRESS removes          last feature is also used in the axis statement.
the empty space in the string. OUTPUT then          For each value of s SAS takes a new SYMBOL
stores the values of interest of f log, t and s     statement. They generate lines of different line
(and the other variables) in the data set data1.    types (L=1,2, 3, 33).




We obviously have limt→∞ flog (t) = β3 , if β1 > 0. The value β3 often resembles
the maximum impregnation or growth of a system. Note that
                 1       1 + β2 exp(−β1 t)
                       =
              flog (t)           β3
                           1 − exp(−β1 )             1 + β2 exp(−β1 (t − 1))
                       =                 + exp(−β1 )
                                β3                             β3
                           1 − exp(−β1 )                   1
                       =                 + exp(−β1 )
                                β3                   flog (t − 1)
                                     b
                       =a+                  .                                                  (1.6)
                               flog (t − 1)
This means that there is a linear relationship among 1/flog (t). This can serve
as a basis for estimating the parameters β1 , β2 , β3 by an appropriate linear least
squares approach, see Exercises 2 and 3. In the following example we fit the logistic
trend model (1.5) to the population growth of the area of North Rhine-Westphalia
(NRW), which is a federal state of Germany.
Example 1.1.2. (Population1 Data). The following table shows the population
sizes yt in millions of the area of North-Rhine-Westphalia in 5 years steps from
1935 to 1980 as well as their predicted values ŷt , obtained from a least squares
estimation as described in (1.4) for a logistic model.
1.1 The Additive Model for a Time Series                                           9

                 Year    t   Population sizes yt    Predicted values ŷt
                                (in millions)          (in millions)
                 1935    1         11.772                 10.930
                 1940    2         12.059                 11.827
                 1945    3         11.200                 12.709
                 1950    4         12.926                 13.565
                 1955    5         14.442                 14.384
                 1960    6         15.694                 15.158
                 1965    7         16.661                 15.881
                 1970    8         16.914                 16.548
                 1975    9         17.176                 17.158
                 1980   10         17.044                 17.710




                         Table 1.1.1. Population1 Data.




As a prediction of the population size at time t we obtain in the logistic model




                                          β̂3
                         ŷt :=
                                  1 + β̂2 exp(−β̂1 t)
                                           21.5016
                             =
                                  1 + 1.1436 exp(−0.1675 t)




with the estimated saturation size β̂3 = 21.5016. The following plot shows the
data and the fitted logistic curve.
10                    Chapter 1. Elements of Exploratory Time Series Analysis




         Figure 1.1.4. NRW population sizes and fitted logistic function.

 ***      Program 1 _1_4   ***;
 TITLE1 ’ Population sizes and logistic fit ’;
 TITLE2 ’ Population1 Data ’;

DATA data1 ;
INFILE ’c :\ data \ population1 . txt ’;
INPUT year t pop ;

PROC NLIN DATA = data1 OUTEST = estimate ;
      MODEL pop = beta3 /(1+ beta2 * EXP ( - beta1 * t ));
      PARAMETERS beta1 =1 beta2 =1 beta3 =20;
RUN ;

DATA data2 ;
SET estimate ( WHERE =( _TYPE_ = ’ FINAL ’));
DO t1 =0 TO 11 BY 0.2;
  f_log = beta3 /(1+ beta2 * EXP ( - beta1 * t1 ));
  OUTPUT ;
END ;

DATA data3 ;
1.1 The Additive Model for a Time Series                                                         11

       MERGE data1 data2 ;

 AXIS1 LABEL =( ANGLE =90 ’ population in millions ’);
 AXIS2 LABEL =( ’t ’);
 SYMBOL1 V = DOT C = GREEN I = NONE ;
 SYMBOL2 V = NONE C = GREEN I = JOIN W =1;
 PROC GPLOT DATA = data3 ;
      PLOT pop * t =1 f_log * t1 =2 / OVERLAY VAXIS = AXIS1
                     HAXIS = AXIS2 ;
 RUN ; QUIT ;
                                                                                                      

The procedure NLIN fits nonlinear regression        rameter. Using the final estimates of PROC
models by least squares. The OUTEST option          NLIN by the SET statement in combination with
names the data set to contain the parame-           the WHERE data set option, the second data
ter estimates produced by NLIN. The MODEL           step generates the fitted logistic function val-
statement defines the prediction equation by        ues. The options in the GPLOT statement cause
declaring the dependent variable and defining       the data points and the predicted function to
an expression that evaluates predicted values.      be shown in one plot, after they were stored to-
A PARAMETERS statement must follow the PROC         gether in a new data set data3 merging data1
NLIN statement. Each parameter=value ex-            and data2 with the MERGE statement.
pression specifies the starting values of the pa-




The Mitscherlich Function

The Mitscherlich function is typically used for modelling the long term growth of
a system:

               fM (t) := fM (t; β1 , β2 , β3 ) := β1 + β2 exp(β3 t),         t ≥ 0,           (1.7)

where β1 , β2 ∈ R and β3 < 0. Since β3 is negative we have limt→∞ fM (t) = β1 and
thus the parameter β1 is the saturation value of the system. The (initial) value of
the system at the time t = 0 is fM (0) = β1 + β2 .

The Gompertz Curve

A further quite common function for modelling the increase or decrease of a system
is the Gompertz curve

                fG (t) := fG (t; β1 , β2 , β3 ) := exp(β1 + β2 β3t ),       t ≥ 0,            (1.8)

where β1 , β2 ∈ R and β3 ∈ (0, 1).
12                   Chapter 1. Elements of Exploratory Time Series Analysis




           Figure 1.1.5. Gompertz curves with different parameters.

 ***      Program 1 _1_5   ***;
 TITLE1 ’ Gompertz curves ’;

DATA data1 ;
 DO beta1 =1;
   DO beta2 = -1 , 1;
     DO beta3 =0.05 , 0.5;
        DO t =0 TO 4 BY 0.05;
          s = COMPRESS ( ’( ’ || beta1 || ’,’ || beta2 ||
                                      ’,’ || beta3 || ’) ’);
          f_g = EXP ( beta1 + beta2 * beta3 ** t );
     OUTPUT ;
   END ; END ; END ; END ;

SYMBOL1 C = GREEN V = NONE I = JOIN L =1;
SYMBOL2 C = GREEN V = NONE I = JOIN L =2;
SYMBOL3 C = GREEN V = NONE I = JOIN L =3;
SYMBOL4 C = GREEN V = NONE I = JOIN L =33;
AXIS1 LABEL =( H =2 ’f ’ H =1 ’G ’ H =2 ’( t ) ’);
1.1 The Additive Model for a Time Series                                         13

 AXIS2 LABEL =( ’t ’);
 LEGEND1 LABEL =( F = CGREEK H =2 ’(b ’ H =1 ’1 ’ H =2
                      ’,b ’ H =1 ’2 ’ H =2 ’,b ’ H =1 ’3 ’ H =2 ’)= ’);
 PROC GPLOT DATA = data1 ;
       PLOT f_g * t = s / VAXIS = AXIS1
                           HAXIS = AXIS2 LEGEND = LEGEND1 ;
 RUN ; QUIT ;
                                                                       




We obviously have

                 log(fG (t)) = β1 + β2 β3t = β1 + β2 exp(log(β3 )t),

and thus log(fG ) is a Mitscherlich function with parameters β1 , β2 , log(β3 ). The
saturation size obviously is exp(β1 ).

The Allometric Function

The allometric function

                      fa (t) := fa (t; β1 , β2 ) = β2 tβ1 ,   t ≥ 0,           (1.9)

with β1 ∈ R, β2 > 0, is a common trend function in biometry and economics. It can
be viewed as a particular Cobb–Douglas function, which is a popular econometric
model to describe the output produced by a system depending on an input. Since


                     log(fa (t)) = log(β2 ) + β1 log(t),       t > 0,

is a linear function of log(t), with slope β1 and intercept log(β2 ), we can assume
a linear regression model for the logarithmic data log(yt )

                    log(yt ) = log(β2 ) + β1 log(t) + εt ,      t ≥ 1,

where εt are the error variables.

Example 1.1.3. (Income Data). The following table shows the (accumulated)
annual average increases of gross and net incomes in thousands DM (deutsche
mark) in Germany, starting in 1960.
14                      Chapter 1. Elements of Exploratory Time Series Analysis

                      Year      t    Gross income xt       Net income yt
                      1960      0                  0                   0
                      1961      1              0.627               0.486
                      1962      2              1.247               0.973
                      1963      3              1.702               1.323
                      1964      4              2.408               1.867
                      1965      5              3.188               2.568
                      1966      6              3.866               3.022
                      1967      7              4.201               3.259
                      1968      8              4.840               3.663
                      1969      9              5.855               4.321
                      1970     10              7.625               5.482




                               Table 1.1.2. Income Data.



We assume that the increase of the net income yt is an allometric function of the
time t and obtain

                            log(yt ) = log(β2 ) + β1 log(t) + εt .                        (1.10)

The least squares estimates of β1 and log(β2 ) in the above linear regression model
are (see, for example, Theorem 3.2.2 in Falk et al. (2002))

                      P10
                       t=1 (log(t) − log(t))(log(yt ) − log(y))
              β̂1 =           P10                               = 1.019,
                                                      2
                                t=1 (log(t) − log(t))

                       P10                                           P10
where log(t) := 10−1     t=1 log(t) = 1.5104, log(y) := 10
                                                          −1
                                                                           t=1 log(yt ) = 0.7849,
and hence
                        \2 ) = log(y) − β̂1 log(t) = −0.7549
                       log(β

We estimate β2 therefore by

                              β̂2 = exp(−0.7549) = 0.4700.

The predicted value ŷt corresponds to the time t

                                      ŷt = 0.47t1.019 .                                  (1.11)

The following table lists the residuals yt − ŷt by which one can judge the goodness
of fit of the model (1.11).
1.2 Linear Filtering of Time Series                                                 15

                                      t     yt − ŷt
                                      1     0.0159
                                      2     0.0201
                                      3    -0.1176
                                      4    -0.0646
                                      5     0.1430
                                      6     0.1017
                                      7    -0.1583
                                      8    -0.2526
                                      9    -0.0942
                                     10     0.5662


                     Table 1.1.3. Residuals of Income Data.


A popular measure for assessing the fit is the squared multiple correlation coefficient
or R2 -value                               Pn
                                 2                 (yt − ŷt )2
                               R := 1 − Pt=1   n              2
                                                                                 (1.12)
                                               t=1 (yt − ȳ)
                   Pn
where ȳ := n−1 t=1 yt is the average of the observations yt (cf Section 3.3 in
Falk et al. (2002)). In the linear regression model with ŷt based on the least
squares estimates of the parameters,
                                Pn        R2 is necessarily between zero and one with
                     2        1                   2                                   2
the implications R = 1 iff         t=1 (yt − ŷt ) = 0 (see Exercise 4). A value of R
                                                                       2
close to 1 is in favor of the fitted model. The model (1.10) has R equal to .9934,
whereas (1.11) has R2 = .9789. Note, however, that the initial model (1.9) is not
linear and β̂2 is not the least squares estimates, in which case R2 is no longer
necessarily between zero and one and has therefore to be viewed with care as a
crude measure of fit.

The annual average gross income in 1960 was 6148 DM and the corresponding net
income was 5178 DM. The actual average gross and net incomes were therefore
x̃t := xt + 6.148 and ỹt := yt + 5.178 with the estimated model based on the above
predicted values ŷt

                        ỹˆt = ŷt + 5.178 = 0.47t1.019 + 5.178.

Note that the residuals ỹt − ỹˆt = yt − ŷt are not influenced by adding the constant
5.178 to yt . The above models might help judging the average tax payer’s situation
between 1960 and 1970 and to predict his future one. It is apparent from the
residuals in Table 1.1.3 that the net income yt is an almost perfect multiple of
t for t between 1 and 9, whereas the large increase y10 in 1970 seems to be an
outlier. Actually, in 1969 the German government had changed and in 1970 a long
strike in Germany caused an enormous increase in the income of civil servants.
  1 if and only if
16                       Chapter 1. Elements of Exploratory Time Series Analysis

1.2      Linear Filtering of Time Series

In the following we consider the additive model (1.1) and assume that there is no
long term cyclic component. Nevertheless, we allow a trend, in which case the
smooth nonrandom component Gt equals the trend function Tt . Our model is,
therefore, the decomposition

                          Yt = Tt + St + Rt ,       t = 1, 2, . . .                (1.13)

with E(Rt ) = 0. Given realizations yt , t = 1, 2, . . . , n, of this time series, the aim
of this section is the derivation of estimators T̂t , Ŝt of the nonrandom functions Tt
and St and to remove them from the time series by considering yt − T̂t or yt − Ŝt
instead. These series are referred to as the trend or seasonally adjusted time series.
The data yt are decomposed in smooth parts and irregular parts that fluctuate
around zero.

Linear Filters

Let a−r , a−r+1 , . . . , as be arbitrary real numbers, where r, s ≥ 0, r + s + 1 ≤ n.
The linear transformation
                             s
                             X
                    Yt∗ :=          au Yt−u ,   t = s + 1, . . . , n − r,
                             u=−r

is referred to as a linear filter with weights a−r , . . . , as . The Yt are called input
and the Yt∗ are called output.

Obviously, there are less output data than input data, if (r, s) 6= (0, 0). A positive
value s > 0 or r > 0 causes a truncation at the beginning or at the end of the time
series; see Example 1.2.1 below. For convenience, we call the vector of weights
(au ) = (a−r , . . . , as )T a (linear) filter.
                                                   Ps
A filter (au ), whose weights sum up to one,           u=−r au = 1, is called moving
average. The particular cases au = 1/(2s + 1), u = −s, . . . , s, with an odd number
of equal weights, or au = 1/(2s), u = −s + 1, . . . , s − 1, a−s = as = 1/(4s), aiming
at an even number of weights, are simple moving averages of order 2s + 1 and 2s,
respectively.

Filtering a time series aims at smoothing the irregular part of a time series, thus
detecting trends or seasonal components, which might otherwise be covered by
fluctuations. While for example a digital speedometer in a car can provide its
instantaneous velocity, thereby showing considerably large fluctuations, an analog
instrument that comes with a hand and a built-in smoothing filter, reduces these
fluctuations but takes a while to adjust. The latter instrument is much more
1.2 Linear Filtering of Time Series                                                17

comfortable to read and its information, reflecting a trend, is sufficient in most
cases.

To compute the output of a simple moving average of order 2s + 1, the following
obvious equation is useful:
                          ∗                1
                        Yt+1 = Yt∗ +           (Yt+s+1 − Yt−s ).
                                        2s + 1

This filter is a particular example of a low-pass filter, which preserves the slowly
varying trend component of a series but removes from it the rapidly fluctuating or
high frequency component. There is a trade-off between the two requirements that
the irregular fluctuation should be reduced by a filter, thus leading, for example, to
a large choice of s in a simple moving average, and that the long term variation in
the data should not be distorted by oversmoothing, i.e., by a too large choice of s.
If we assume, for example, a time series Yt = Tt + Rt without seasonal component,
a simple moving average of order 2s + 1 leads to
                    s                  s                  s
              1    X             1    X             1    X
   Yt∗ =               Yt−u =             Tt−u +             Rt−u =: Tt∗ + Rt∗ ,
           2s + 1 u=−s        2s + 1 u=−s        2s + 1 u=−s

where by some law of large numbers argument
                                  Rt∗ ∼ E(Rt ) = 0,
if s is large. But Tt∗ might then no longer reflect Tt . A small choice of s, however,
has the effect that Rt∗ is not yet close to its expectation.

Seasonal Adjustment

A simple moving average of a time series Yt = Tt + St + Rt now decomposes as
                                Yt∗ = Tt∗ + St∗ + Rt∗ ,
where St∗ is the pertaining moving average of the seasonal components. Suppose,
moreover, that St is a p-periodic function, i.e.,
                          St = St+p ,       t = 1, . . . , n − p.
Take for instance monthly average temperatures Yt measured at fixed points, in
which case it is reasonable to assume a periodic seasonal component St with period
p = 12 months. A simple moving average of order p then yields a constant value
St∗ = S, t = p, p + 1, . . . , n − p. By adding this constant S to the trend function
Tt and putting Tt0 := Tt + S, we can assume in the following that S = 0. Thus we
obtain for the differences
                              Dt := Yt − Yt∗ ∼ St + Rt
18                       Chapter 1. Elements of Exploratory Time Series Analysis

and, hence, averaging these differences yields
                               nt −1
                            1 X
                     D̄t :=          Dt+jp ∼ St ,       t = 1, . . . , p,
                            nt j=0
                     D̄t := D̄t−p      for t > p,
where nt is the number of periods available for the computation of D̄t . Thus,
                                       p                p
                                    1X               1X
                     Ŝt := D̄t −         D̄j ∼ St −       Sj = St                          (1.14)
                                    p j=1            p j=1

is an estimator of St = St+p = St+2p = . . . satisfying
                               p−1               p−1
                             1X                1X
                                   Ŝt+j = 0 =       St+j .
                             p j=0             p j=0

The differences Yt − Ŝt with a seasonal component close to zero are then the
seasonally adjusted time series.
Example 1.2.1. For the 51 Unemployed1 Data in Example 1.1.1 it is obviously
reasonable to assume a periodic seasonal component with p = 12 months. A simple
moving average of order 12
                                  5
                    1 1         X         1    
            Yt∗ =        Yt−6 +      Yt−u + Yt+6 ,               t = 7, . . . , 45,
                    12 2        u=−5
                                           2

then has a constant seasonal component, which we assume to be zero by adding
this constant to the trend function. The following table contains the values of Dt ,
D̄t and the estimates Ŝt of St .

                        dt (rounded values)

      Month           1976     1977      1978    1979   d¯t (rounded)       ŝt (rounded)
      January        53201    56974     48469   52611           52814               53136
      February       59929    54934     54102   51727           55173               55495
      March          24768    17320     25678   10808           19643               19966
      April          -3848       42     -5429       –           -3079               -2756
      May           -19300   -11680    -14189       –          -15056              -14734
      June          -23455   -17516    -20116       –          -20362              -20040
      July          -26413   -21058    -20605       –          -22692              -22370
      August        -27225   -22670    -20393       –          -23429              -23107
      September     -27358   -24646    -20478       –          -24161              -23839
      October       -23967   -21397    -17440       –          -20935              -20612
      November      -14300   -10846    -11889       –          -12345              -12023
      December       11540    12213      7923       –           10559               10881

               Table 1.2.1. Table of dt , d¯t and of estimates ŝt of the
               seasonal component St in the Unemployed1 Data.
1.2 Linear Filtering of Time Series                                             19

We obtain for these data
                                12
                       ¯     1 X¯             3867
                 ŝt = dt −        dj = d¯t +      = d¯t + 322.25.
                            12 j=1             12


The Census X-11 Program
In the fifties of the 20th century the U.S. Bureau of the Census has developed a
program for seasonal adjustment of economic time series, called the Census X-11
Program. It is based on monthly observations and assumes an additive model

                                Yt = Tt + St + Rt

as in (1.13) with a seasonal component St of period p = 12. We give a brief
summary of this program following Wallis (1974), which results in a moving av-
erage with symmetric weights. The census procedure is discussed in Shiskin and
Eisenpress (1957); a complete description is given by Shiskin, Young and Mus-
grave (1967). A theoretical justification based on stochastic models is provided by
Cleveland and Tiao (1976).

The X-11 Program essentially works as the seasonal adjustment described above,
but it adds iterations and various moving averages. The different steps of this
program are


(1) Compute a simple moving average Yt∗ of order 12 to leave essentially a trend
     Yt∗ ∼ Tt .
(2) The difference
                               Dt := Yt − Yt∗ ∼ St + Rt
     then leaves approximately the seasonal plus irregular component.
(3) Apply a moving average of order 5 to each month separately by computing

              (1)  1  (1)        (1)       (1)    (1)      (1)
                                                                
            D̄t :=    Dt−24 + 2Dt−12 + 3Dt + 2Dt+12 + Dt+24 ∼ St ,
                   9
     which gives an estimate of the seasonal component St . Note that the moving
     average with weights (1, 2, 3, 2, 1)/9 is a simple moving average of length 3
     of simple moving averages of length 3.
           (1)
(4) The D̄t are adjusted to approximately sum up to 0 over any 12-months
     period by putting
               (1)     (1) 1  1 (1)      (1)             (1)  1 (1) 
             Ŝt := D̄t −       D̄t−6 + D̄t−5 + · · · + D̄t+5 + D̄t+6 .
                           12 2                                2
20                        Chapter 1. Elements of Exploratory Time Series Analysis

(5) The differences
                                   (1)                   (1)
                                  Yt         := Yt − Ŝt       ∼ Tt + Rt
        then are the preliminary seasonally adjusted series, quite in the manner as
        before.
                            (1)
(6) The adjusted data Yt are further smoothed by a Henderson moving average
     Yt∗∗ of order 9, 13, or 23.
(7) The differences
                                   (2)
                                  Dt         := Yt − Yt∗∗ ∼ St + Rt
        then leave a second estimate of the sum of the seasonal and irregular com-
        ponents.
(8) A moving average of order 7 is applied to each month separately
                                                     3
                                         (2)                    (2)
                                                     X
                                       D̄t     :=           au Dt−12u ,
                                                     u=−3

        where the weights au come from a simple moving average of order 3 applied
        to a simple moving average of order 5 of the original data, i.e., the vector of
        weights is (1, 2, 3, 3, 3, 2, 1)/15. This gives a second estimate of the seasonal
        component St .
                                                                              (2)
(9) Step (4) is repeated yielding approximately centered estimates Ŝt              of the
     seasonal components.
(10) The differences
                                               (2)               (2)
                                             Yt      := Yt − Ŝt
        then finally give the seasonally adjusted series.

                                                                                       (2)
Depending on the length of the Henderson moving average used in step (6), Yt
is a moving average of length 165, 169 or 179 of the original data. Observe that
this leads to averages at time t of the past and future seven years, roughly, where
seven years is a typical length of business cycles observed in economics (Juglar
cycle)2 .

The U.S. Bureau of Census has recently released an extended version of the X-11
Program called Census X-12-ARIMA. It is implemented in SAS version 8.1 and
higher as PROC X12; we refer to the SAS online documentation for details.

We will see in Example 4.2.4 that linear filters may cause unexpected effects and so,
it is not clear a priori how the seasonal adjustment filter described above behaves.
     2 http://www.drfurfero.com/books/231book/ch05j.html
1.2 Linear Filtering of Time Series                                       21

Moreover, end-corrections are necessary, which cover the important problem of
adjusting current observations. This can be done by some extrapolation.




                                                               (2)
         Figure 1.2.1. Plot of the Unemployed1 Data yt and of yt , sea-
         sonally adjusted by the X-11 procedure.

 ***      Program 1 _2_1   ***;
 TITLE1 ’ Original and X11 seasonal adjusted data ’;
 TITLE2 ’ Unemployed1 Data ’;

DATA data1 ;
INFILE ’c :\ data \ unemployed1 . txt ’;
INPUT month $ t upd ;
date = INTNX ( ’ month ’ , ’01 jul75 ’d , _N_ -1);
FORMAT date yymon .;

PROC X11 DATA = data1 ;
MONTHLY DATE = date ADDITIVE ;
VAR upd ;
OUTPUT OUT = data2 B1 = upd D11 = updx11 ;
22                             Chapter 1. Elements of Exploratory Time Series Analysis

 AXIS1 LABEL =( ANGLE =90 ’ unemployed ’);
 AXIS2 LABEL =( ’ Date ’) ;
 SYMBOL1 V = DOT C = GREEN I = JOIN H =1 W =1;
 SYMBOL2 V = STAR C = GREEN I = JOIN H =1 W =1;
 LEGEND1 LABEL = NONE VALUE =( ’ original ’ ’ adjusted ’);
 PROC GPLOT DATA = data2 ;
   PLOT upd * date =1 updx11 * date =2
        / OVERLAY VAXIS = AXIS1 HAXIS = AXIS2 LEGEND = LEGEND1 ;
 RUN ; QUIT ;
                                                                                                       
In the data, step values for the variables month,    ment selects an algorithm for monthly data,
t and upd are read from an external file, where      DATE defines the date variable and ADDITIVE se-
month is defined as a character variable by the      lects an additive model (default: multiplicative
succeeding $ in the INPUT statement. By means        model). The results for this analysis for the
of the function INTNX, a new variable in a date      variable upd (unemployed) are stored in a data
format is generated containing monthly data          set named data2, containing the original data
starting from the 1st of July 1975. The tem-         in the variable upd and the final results of the
porarily created variable N , which counts the       X–11 Program in updx11.
number of cases, is used to determine the dis-
tance from the starting value. The FORMAT            The last part of this SAS program consists of
statement attributes the format yymon to this        statements for generating the plot. Two AXIS
variable, consisting of four digits for the year     and two SYMBOL statements are used to cus-
and three for the month.                             tomize the graphic containing two plots, the
                                                     original data and the by X11 seasonally ad-
The SAS procedure X11 applies the Census X–          justed data. A LEGEND statement defines the
11 Program to the data. The MONTHLY state-           text that explains the symbols.




Best Local Polynomial Fit

A simple moving average works well for a locally almost linear time series, but it
may have problems to reflect a more twisted shape. This suggests fitting higher
order local polynomials. Consider 2k + 1 consecutive data yt−k , . . . , yt , . . . , yt+k
from a time series. A local polynomial estimator of order p < 2k+1 is the minimizer
β0 , . . . , βp satisfying
                        k
                        X
                               (yt+u − β0 − β1 u − · · · − βp up )2 = min .                   (1.15)
                        u=−k

If we differentiate the left hand side with respect to each βj and set the derivatives
equal to zero, we see that the minimizers satisfy the p + 1 linear equations
                 k
                 X                k
                                  X                          k
                                                             X               k
                                                                             X
            β0          uj + β1          uj+1 + · · · + βp          uj+p =          uj yt+u
                 u=−k             u=−k                       u=−k            u=−k
1.2 Linear Filtering of Time Series                                                     23

for j = 0, . . . , p. These p + 1 equations, which are called normal equations, can be
written in matrix form as


                                      X T Xβ = X T y                                (1.16)
where
                                    (−k)2 . . .     (−k)p
                                                           
                         1 −k
                        1 −k + 1 (−k + 1)2 . . . (−k + 1)p 
                    X = .                                                          (1.17)
                                                           
                                            ..        ..
                         ..
                                                            
                                                .      .    
                                        2               p
                         1   k        k     ...      k
is the design matrix, β = (β0 , . . . , βp )T and y = (yt−k , . . . , yt+k )T . The rank of
X T X equals that of X, since their null spaces coincide (Exercise 11). Thus, the
matrix X T X is invertible iff the columns of X are linearly independent. But this
is an immediate consequence of the fact that a polynomial of degree p has at most
p different roots (Exercise 12). The normal equations (1.16) have, therefore, the
unique solution
                                β = (X T X)−1 X T y.                                 (1.18)
The linear prediction of yt+u , based on u, u2 , . . . , up , is
                                                            p
                                                            X
                           ŷt+u = (1, u, . . . , up )β =         βj uj .
                                                            j=0

Choosing u = 0 we obtain in particular that β0 = ŷt is a predictor of the central
observation yt among yt−k , . . . , yt+k . The local polynomial approach consists now
in replacing yt by the intercept β0 .

Though it seems as if this local polynomial fit requires a great deal of computa-
tional effort by calculating β0 for each yt , it turns out that it is actually a moving
average. First observe that we can write by (1.18)
                                            k
                                            X
                                     β0 =          cu yt+u
                                            u=−k

with some cu ∈ R which do not depend on the values yu of the time series and
hence, (cu ) is a linear filter. Next we show that the cu sum up to 1. Choose to
this end yt+u = 1 for u = −k, . . . , k. Then β0 = 1, β1 = · · · = βp = 0 is an
obvious solution of the minimization problem (1.15). Since this solution is unique,
we obtain
                                            Xk
                                   1 = β0 =     cu
                                                 u=−k

and thus, (cu ) is a moving average. As can be seen in Exercise 13 it actually has
symmetric weights. We summarize our considerations in the following result.
24                       Chapter 1. Elements of Exploratory Time Series Analysis

Theorem 1.2.2. Fitting locally by least squares a polynomial of degree p to 2k +
1 > p consecutive data points yt−k , . . . , yt+k and predicting yt by the resulting
intercept β0 , leads to a moving average (cu ) of order 2k + 1, given by the first row
of the matrix (X T X)−1 X T .

Example 1.2.3. Fitting locally a polynomial of degree 2 to five consecutive data
points leads to the moving average (Exercise 13)

                                      1
                           (cu ) =      (−3, 12, 17, 12, −3)T .
                                     35


An extensive discussion of local polynomial fit is in Kendall and Ord (1993), Sec-
tions 3.2–3.13. For a book-length treatment of local polynomial estimation we
refer to Fan and Gijbels (1996). An outline of various aspects such as the choice of
the degree of the polynomial and further background material is given in Section
5.2 of Simonoff (1996).

Difference Filter

We have already seen that we can remove a periodic seasonal component from a
time series by utilizing an appropriate linear filter. We will next show that also a
polynomial trend function can be removed by a suitable linear filter.

Lemma 1.2.4. For a polynomial f (t) := c0 + c1 t + · · · + cp tp of degree p, the
difference
                        ∆f (t) := f (t) − f (t − 1)
is a polynomial of degree at most p − 1.


Proof. The assertion is an immediate consequence of the binomial expansion
                         p  
                         X  p
            (t − 1)p =             tk (−1)p−k = tp − ptp−1 + · · · + (−1)p .
                               k
                         k=0




The preceding lemma shows that differencing reduces the degree of a polynomial.
Hence,
                  ∆2 f (t) := ∆f (t) − ∆f (t − 1) = ∆(∆f (t))
is a polynomial of degree not greater than p − 2, and

                      ∆q f (t) := ∆(∆q−1 f (t)),        1 ≤ q ≤ p,
1.2 Linear Filtering of Time Series                                                25

is a polynomial of degree at most p−q. The function ∆p f (t) is therefore a constant.
The linear filter



                                       ∆Yt = Yt − Yt−1




with weights a0 = 1, a1 = −1 is the first order difference filter. The recursively
defined filter



                        ∆p Yt = ∆(∆p−1 Yt ),        t = p, . . . , n,




is the difference filter of order p.

The difference filter of second order has, for example, weights a0 = 1, a1 = −2, a2 =
1




               ∆2 Yt = ∆Yt − ∆Yt−1
                     = Yt − Yt−1 − Yt−1 + Yt−2 = Yt − 2Yt−1 + Yt−2 .



                                                   Pp
If a time series Yt has a polynomial trend Tt = k=0 ck tk for some constants ck ,
then the difference filter ∆p Yt of order p removes this trend up to a constant. Time
series in economics often have a trend function that can be removed by a first or
second order difference filter.



Example 1.2.5. (Electricity Data). The following plots show the total annual
output of electricity production in Germany between 1955 and 1979 in millions of
kilowatt-hours as well as their first and second order differences. While the original
data show an increasing trend, the second order differences fluctuate around zero
having no more trend, but there is now an increasing variability visible in the data.
26                     Chapter 1. Elements of Exploratory Time Series Analysis




   Figure 1.2.2. Annual electricity output, first and second order differences

 ***      Program 1 _2_2         ***;
 TITLE1 ’ First and second order differences ’;
 TITLE2 ’ Electricity Data ’;

 DATA data1 ( KEEP = year sum delta1 delta2 );
   INFILE ’c :\ data \ electric . txt ’;
   INPUT year t jan feb mar apr may jun
     jul aug sep oct nov dec ;
1.2 Linear Filtering of Time Series                                                              27

   sum = jan + feb + mar + apr + may + jun +
     jul + aug + sep + oct + nov + dec ;
   delta1 = DIF ( sum );
   delta2 = DIF ( delta1 );


AXIS1 LABEL = NONE ;
SYMBOL1 V = DOT C = GREEN I = JOIN H =0.5 W =1;
GOPTIONS NODISPLAY ;
PROC GPLOT DATA = data1 GOUT = fig ;
  PLOT sum * year      / VAXIS = AXIS1 HAXIS = AXIS2 ;
  PLOT delta1 * year / VAXIS = AXIS1 VREF =0;
  PLOT delta2 * year / VAXIS = AXIS1 VREF =0;
RUN ;

 GOPTIONS DISPLAY ;
 PROC GREPLAY NOFS IGOUT = fig TC = SASHELP . TEMPLT ;
   TEMPLATE = V3 ;
   TREPLAY 1: GPLOT 2: GPLOT1 3: GPLOT2 ;
 RUN ; DELETE _ALL_ ; QUIT ;
                                                                                                      

In the first data step, the raw data are read        subsequent two line mode statements are read
from a file. Because the electric production is      instead. The option IGOUT determines the in-
stored in different variables for each month of      put graphics catalog, while TC=SASHELP.TEMPLT
a year, the sum must be evaluated to get the         causes SAS to take the standard template cata-
annual output. Using the DIF function, the re-       log. The TEMPLATE statement selects a template
sulting variables delta1 and delta2 contain the      from this catalog, which puts three graphics
first and second order differences of the original   one below the other. The TREPLAY statement
annual sums.                                         connects the defined areas and the plots of the
                                                     the graphics catalog. GPLOT, GPLOT1 and GPLOT2
To display the three plots of sum, delta1 and        are the graphical outputs in the chronologi-
delta2 against the variable year within one          cal order of the GPLOT procedure. The DELETE
graphic, they are first plotted using the pro-       statement after RUN deletes all entries in the
cedure GPLOT. Here the option GOUT=fig stores        input graphics catalog.
the plots in a graphics catalog named fig,
while GOPTIONS NODISPLAY causes no output of         Note that SAS by default prints borders, in or-
this procedure. After changing the GOPTIONS          der to separate the different plots. Here these
back to DISPLAY, the procedure GREPLAY is in-        border lines are suppressed by defining WHITE
voked. The option NOFS (no full-screen) sup-         as the border color.
presses the opening of a GREPLAY window. The




For a time series Yt = Tt + St + Rt with a periodic seasonal component St =
28                       Chapter 1. Elements of Exploratory Time Series Analysis

St+p = St+2p = . . . the difference
                                       Yt∗ := Yt − Yt−p
obviously removes the seasonal component. An additional differencing of proper
length can moreover remove a polynomial trend, too. Note that the order of
seasonal and trend adjusting makes no difference.

Exponential Smoother
Let Y0 , . . . , Yn be a time series and let α ∈ [0, 1] be a constant. The linear filter


                         Yt∗ = αYt + (1 − α)Yt−1
                                              ∗
                                                 ,           t ≥ 1,
with Y0∗ = Y0 is called exponential smoother.
Lemma 1.2.6. For an exponential smoother with constant α ∈ [0, 1] we have
                       t−1
                       X
             Yt∗ = α         (1 − α)j Yt−j + (1 − α)t Y0 ,     t = 1, 2, . . . , n.
                       j=0



Proof. The assertion follows from induction. We have for t = 1 by definition
Y1∗ = αY1 + (1 − α)Y0 . If the assertion holds for t, we obtain for t + 1
               ∗
             Yt+1 = αYt+1 + (1 − α)Yt∗
                                    X t−1                             
                  = αYt+1 + (1 − α) α      (1 − α)j Yt−j + (1 − α)t Y0
                                              j=0
                        t
                        X
                   =α         (1 − α)j Yt+1−j + (1 − α)t+1 Y0 .
                        j=0




The parameter α determines the smoothness of the filtered time series. A value
of α close to 1 puts most of the weight on the actual observation Yt , resulting in
a highly fluctuating series Yt∗ . On the other hand, an α close to 0 reduces the
influence of Yt and puts most of the weight to the past observations, yielding a
smooth series Yt∗ . An exponential smoother is typically used for monitoring a
system. Take, for example, a car having an analog speedometer with a hand. It is
more convenient for the driver if the movements of this hand are smoothed, which
can be achieved by α close to zero. But this, on the other hand, has the effect that
an essential alteration of the speed can be read from the speedometer only with a
certain delay.
1.2 Linear Filtering of Time Series                                                     29

Corollary 1.2.7. (i) Suppose that the random variables Y0 , . . . , Yn have common
expectation µ and common variance σ 2 > 0. Then we have for the exponentially
smoothed variables with smoothing parameter α ∈ (0, 1)

                                      t−1
                                      X
                        E(Yt∗ ) = α         (1 − α)j µ + µ(1 − α)t
                                      j=0

                               = µ(1 − (1 − α)t ) + µ(1 − α)t = µ.                  (1.19)

If the Yt are in addition uncorrelated, then
                                             t−1
                                             X
                 E((Yt∗ − µ)2 ) = α2               (1 − α)2j σ 2 + (1 − α)2t σ 2
                                             j=0

                                       1 − (1 − α)2t
                                  = σ 2 α2            + (1 − α)2t σ 2
                                       1 − (1 − α)2
                                         σ2 α
                                  −→t→∞        < σ2 .                               (1.20)
                                         2−α

(ii) Suppose that the random variables Y0 , Y1 , . . . satisfy E(Yt ) = µ for 0 ≤ t ≤
N − 1, and E(Yt ) = λ for t ≥ N . Then we have for t ≥ N

               t−N
               X                        t−1
                                        X
 E(Yt∗ ) = α         (1 − α)j λ + α                (1 − α)j µ + (1 − α)t µ
               j=0                    j=t−N +1
                                                                                       
         = λ(1 − (1 − α)    t−N +1
                                      ) + µ (1 − α)t−N +1 (1 − (1 − α)N −1 ) + (1 − α)t

         −→t→∞ λ.                                                                   (1.21)


The preceding result quantifies the influence of the parameter α on the expectation
and on the variance i.e., the smoothness of the filtered series Yt∗ , where we assume
for the sake of a simple computation of the variance that the Yt are uncorrelated.
If the variables Yt have common expectation µ, then this expectation carries over
to Yt∗ . After a change point N , where the expectation of Yt changes for t ≥ N
from µ to λ 6= µ, the filtered variables Yt∗ are, however, biased. This bias, which
will vanish as t increases, is due to the still inherent influence of past observations
Yt , t < N . The influence of these variables on the current expectation can be
reduced by switching to a larger value of α. The price for the gain in correctness
of the expectation is, however, a higher variability of Yt∗ (see Exercise 16).

An exponential smoother is often also used to make forecasts, explicitly by pre-
dicting Yt+1 through Yt∗ . The forecast error Yt+1 − Yt∗ =: et+1 then satisfies the
           ∗
equation Yt+1 = αet+1 + Yt∗ .
30                         Chapter 1. Elements of Exploratory Time Series Analysis

1.3      Autocovariances and Autocorrelations

Autocovariances and autocorrelations are measures of dependence between vari-
ables in a time series. Suppose that Y1 , . . . , Yn are square integrable random vari-
ables with the property that the covariance Cov(Yt+k , Yt ) = E((Yt+k −E(Yt+k ))(Yt −
E(Yt ))) of observations with lag k does not depend on t. Then


                     γ(k) := Cov(Yk+1 , Y1 ) = Cov(Yk+2 , Y2 ) = . . .


is called autocovariance function and


                                        γ(k)
                              ρ(k) :=        ,      k = 0, 1, . . .
                                        γ(0)


is called autocorrelation function.

Let y1 , . . . , yn be realizations of a time series Y1 , . . . , Yn . The empirical counterpart
of the autocovariance function is


                           n−k                                            n
                         1X                                            1X
               c(k) :=         (yt+k − ȳ)(yt − ȳ)    with bary =           yt
                         n t=1                                         n t=1


and the empirical autocorrelation is defined by

                                          Pn−k
                                c(k)       t=1P(yt+k − ȳ)(yt − ȳ)
                        r(k) :=      =          n            2
                                                                    .
                                c(0)            t=1 (yt − ȳ)



See Exercise 8 (ii) in Chapter 2 for the particular role of the factor 1/n in place of
1/(n−k) in the definition of c(k). The graph of the function r(k), k = 0, 1, . . . , n−1,
is called correlogram. It is based on the assumption of equal expectations and
should, therefore, be used for a trend adjusted series. The following plot is the
correlogram of the first order differences of the Sunspot Data. The description
can be found on page 176. It shows high and decreasing correlations at regular
intervals.
1.3 Autocovariances and Autocorrelations                                   31




         Figure 1.3.1. Correlogram of the first order differences of the
         Sunspot Data.

 ***      Program 1 _3_1  ***;
 TITLE1 ’ Correlogram of first order differences ’;
 TITLE2 ’ Sunspot Data ’;

DATA data1 ;
  INFILE ’c :\ data \ sunspot . txt ’;
  INPUT spot @@ ;
  date =1748+ _N_ ;
  diff1 = DIF ( spot );

PROC ARIMA DATA = data1 ;
  IDENTIFY VAR = diff1 NLAG =49 OUTCOV = corr NOPRINT ;

AXIS1 LABEL =( ’ r ( k ) ’);
AXIS2 LABEL =( ’k ’) ORDER =(0 12 24 36 48) MINOR =( N =11);
SYMBOL1 V = DOT C = GREEN I = JOIN H =0.5 W =1;
PROC GPLOT DATA = corr ;
  PLOT CORR * LAG / VAXIS = AXIS1 HAXIS = AXIS2 VREF =0;
32                           Chapter 1. Elements of Exploratory Time Series Analysis

 RUN ; QUIT ;
                                                                                                        


In the data step, the raw data are read into the     IDENTIFY statement. The option OUTCOV=corr
variable spot. The specification @@ suppresses       causes SAS to create a data set corr containing
the automatic line feed of the INPUT statement       among others the variables LAG and CORR. These
after every entry in each row. The variable date     two are used in the following GPLOT procedure
and the first order differences of the variable of   to obtain a plot of the autocorrelation func-
interest spot are calculated.                        tion. The ORDER option in the AXIS2 statement
                                                     specifies the values to appear on the horizontal
The following procedure ARIMA is a crucial one       axis as well as their order, and the MINOR option
in time series analysis. Here we just need the       determines the number of minor tick marks be-
autocorrelation of delta, which will be cal-         tween two major ticks. VREF=0 generates a hor-
culated up to a lag of 49 (NLAG=49) by the           izontal reference line through the value 0 on the
                                                     vertical axis.




The autocovariance function γ obviously satisfies γ(0) ≥ 0 and, by the Cauchy-
Schwarz inequality

                        |γ(k)| = | E((Yt+k − E(Yt+k ))(Yt − E(Yt )))|
                               ≤ E(|Yt+k − E(Yt+k )||Yt − E(Yt )|)
                                ≤ Var(Yt+k )1/2 Var(Yt )1/2
                                = γ(0) for k ≥ 0.

Thus we obtain for the autocovariance function the inequality

                                        |ρ(k)| ≤ 1 = ρ(0).


Variance Stabilizing Transformation

The scatterplot of the points (t, yt ) sometimes shows a variation of the data yt
depending on their height.

Example 1.3.1. (Airline Data). Figure 1.3.2, which displays monthly totals in
thousands of international airline passengers from January 1949 to December 1960,
exemplifies the above mentioned dependence. These Airline Data are taken from
Box and Jenkins (1976); a discussion can be found in Section 9.2 of Brockwell and
Davis (1991).
1.3 Autocovariances and Autocorrelations                                      33




         Figure 1.3.2. Monthly totals in thousands of international airline
         passengers from January 1949 to December 1960.

 ***     Program 1 _3_2    ***;
  TITLE1 ’ Monthly totals from January 49 to December 60 ’;
  TITLE2 ’ Airline Data ’;

DATA data1 ;
  INFILE ’c :\ data \ airline . txt ’;
  INPUT y ;
  t = _N_ ;


 AXIS1 LABEL = NONE ORDER =(0 12 24 36 48 60 72 84
      96 108 120 132 144) MINOR =( N =5);
 AXIS2 LABEL =( ANGLE =90 ’ total in thousands ’);
 SYMBOL1 V = DOT C = GREEN I = JOIN H =0.2;
 PROC GPLOT DATA = data1 ;
   PLOT y * t / HAXIS = AXIS1 VAXIS = AXIS2 ;
 RUN ; QUIT ;
                                                                                  
34                         Chapter 1. Elements of Exploratory Time Series Analysis

In the first data step, the monthly passenger     The passenger totals are plotted against t with
totals are read into the variable y. To get a     a line joining the data points, which are sym-
time variable t, the temporarily created SAS      bolized by small dots. On the horizontal axis a
variable N is used; it counts the observations.   label is suppressed.




The variation of the data yt obviously increases with their height. The logtrans-
formed data xt = log(yt ), displayed in the following figure, however, show no
dependence of variability from height.




             Figure 1.3.3. Logarithm of Airline Data xt = log(yt ).

 *** Program 1 _3_3    ***;
 TITLE1 ’ Logarithmic transformation ’;
 TITLE2 ’ Airline Data ’;

DATA data1 ;
  INFILE ’c \ data \ airline . txt ’;
  INPUT y ;
Exercises                                                                                  35

   t = _N_ ;
   x = LOG ( y );

 AXIS1 LABEL = NONE ORDER =(0 12 24 36 48 60 72 84
                         96 108 120 132 144) MINOR =( N =5);
 AXIS2 LABEL = NONE ;
 SYMBOL1 V = DOT C = GREEN I = JOIN H =0.2;
 PROC GPLOT DATA = data1 ;
   PLOT x * t / HAXIS = AXIS1 VAXIS = AXIS2 ;
 RUN ; QUIT ;
                                                                                                

The plot of the log-transformed data is done     log-transformation by means of the LOG func-
in the same manner as for the original data in   tion and the suppressed label on the vertical
Program 1 3 2. The only differences are the      axis.




The fact that taking the logarithm of data often reduces their variability, can
be illustrated as follows. Suppose, for example, that the data were generated by
random variables, which are of the form Yt = σt Zt , where σt > 0 is a scale factor
depending on t, and Zt , t ∈ Z, are independent copies of a positive random variable
Z with variance 1. The variance of Yt is in this case σt2 , whereas the variance of
log(Yt ) = log(σt ) + log(Zt ) is a constant, namely the variance of log(Z), if it exists.

A transformation of the data, which reduces the dependence of the variability on
their height, is called variance stabilizing. The logarithm is a particular case of
the general Box–Cox (1964) transformation Tλ of a time series (Yt ), where the
parameter λ ≥ 0 is chosen by the statistician:
                                 ( λ
                                  (Yt − 1)/λ,    Yt ≥ 0, λ > 0
                     Tλ (Yt ) :=
                                  log(Yt ),      Yt > 0, λ = 0.

Note that limλ&0 Tλ (Yt ) = T0 (Yt ) = log(Yt ) if Yt > 0 (Exercise 19). Popular
choices of the parameter λ are 0 and 1/2. A variance stabilizing transformation
of the data, if necessary, usually precedes any further data manipulation such as
trend or seasonal adjustment.



Exercises

1. Plot the Mitscherlich function for different values of β1 , β2 , β3 using PROC GPLOT.
36                           Chapter 1. Elements of Exploratory Time Series Analysis

2. Put in the logistic trend model (1.5) zt := 1/yt ∼ 1/ E(Yt ) = 1/flog (t), t = 1, . . . , n.
Then we have the linear regression model zt = a + bzt−1 + εt , where εt is the error
variable. Compute the least squares estimates â, b̂ of a, b and motivate the estimates
β̂1 := − log(b̂), β̂3 := (1 − exp(−β̂1 ))/â as well as
                                     n + 1                1 X  β̂3
                                                               n          
                        β̂2 := exp                 β̂1 +         log    −1 ,
                                          2                n t=1     yt

proposed by Tintner (1958); see also the next exercise.

3. The estimate β̂2 defined above suffers from the drawback that all observations yt have
to be strictly less than the estimate βˆ3 . Motivate the following substitute of β̂2
                             X
                              n
                                β̂3 − yt                       . X
                                                                   n
                                                                                       
                     β̃2 =                        exp −β̂1 t             exp −2β̂1 t
                              t=1
                                     yt                            t=1

as an estimate of the parameter β2 in the logistic trend model (1.5).

4. Show that in a linear regression model yt = β1 xt + β2 , t = 1, . . . , n, the squared
multiple correlation coefficient R2 based on the least squares estimates β̂1 , β̂2 and ŷt :=
β̂1 xt + β̂2 is necessarily between zero and one with R2 = 1 if and only if ŷt = yt , t =
0, . . . , n (see (1.12)).

5. (Population2 Data) The following table lists total population numbers of North Rhine-
Westphalia between 1961 and 1979. Suppose a logistic trend for these data and compute
the estimators β̂1 , β̂3 using PROC REG. Since some observations exceed β̂3 , use β̃2 from
Exercise 3 and do an ex post-analysis.


                                Year          t      Total Population
                                                        in millions
                                1961      1               15.920
                                1963      2               16.280
                                1965      3               16.661
                                1967      4               16.835
                                1969      5               17.044
                                1971      6               17.091
                                1973      7               17.223
                                1975      8               17.176
                                1977      9               17.052
                                1979      10              17.002


Use PROC NLIN and do an ex post-analysis. Compare these two procedures by their
residual sums of squares.

6. (Income Data) Suppose an allometric trend function for the income data in Example
1.1.3 and do a regression analysis. Plot the data yt versus β̂2 tβ̂1 . To this end compute the
R2 -coefficient. Estimate the parameters also with PROC NLIN and compare the results.
Exercises                                                                                 37

7. (Unemployed2 Data) The following table lists total numbers of unemployed (in thou-
sands) in West Germany between 1950 and 1993. Compare a logistic trend function with
an allometric one. Which one gives the better fit?


                                   Year    Unemployed
                                   1950          1869
                                   1960           271
                                   1970           149
                                   1975          1074
                                   1980           889
                                   1985          2304
                                   1988          2242
                                   1989          2038
                                   1990          1883
                                   1991          1689
                                   1992          1808
                                   1993          2270


8. Give an update equation for a simple moving average of (even) order 2s.

9. (Public Expenditures Data) The following table lists West Germany’s public expen-
ditures (in billion D-Marks) between 1961 and 1990. Compute simple moving averages
of order 3 and 5 to estimate a possible trend. Plot the original data as well as the filtered
ones and compare the curves.


               Year    Public Expenditures      Year    Public Expenditures
               1961           113,4             1976           546,2
               1962           129,6             1977           582,7
               1963           140,4             1978           620,8
               1964           153,2             1979           669,8
               1965           170,2             1980           722,4
               1966           181,6             1981           766,2
               1967           193,6             1982           796,0
               1968           211,1             1983           816,4
               1969           233,3             1984           849,0
               1970           264,1             1985           875,5
               1971           304,3             1986           912,3
               1972           341,0             1987           949,6
               1973           386,5             1988           991,1
               1974           444,8             1989          1018,9
               1975           509,1             1990          1118,1


10. (Unemployed Females Data) Use PROC X11 to analyze the monthly unemployed
females between ages 16 and 19 in the United States from January 1961 to December
1985 (in thousands).
38                          Chapter 1. Elements of Exploratory Time Series Analysis

11. Show that the rank of a matrix A equals the rank of AT A.

12. The p + 1 columns of the design matrix X in (1.17) are linear independent.

13. Let (cu ) be the moving average derived by the best local polynomial fit. Show that

     (i) fitting locally a polynomial of degree 2 to five consecutive data points leads to
                                             1
                                   (cu ) =      (−3, 12, 17, 12, −3)T ,
                                             35
  (ii) the inverse matrix A−1 of an invertible m × m-matrix A = (aij )1≤i,j≤m with the
       property that aij = 0, if i + j is odd, shares this property,
 (iii) (cu ) is symmetric, i.e., c−u = cu .

14. (Unemployed1 Data) Compute a seasonal and trend adjusted time series for the
Unemployed1 Data in the building trade. To this end compute seasonal differences and
first order differences. Compare the results with those of PROC X11.

15. Use the SAS function RANNOR to generate a time series Yt = b0 +b1 t+εt , t = 1, . . . , 100,
where b0 , b1 6= 0 and the εt are independent normal random variables with mean µ and
variance σ12 if t ≤ 69 but variance σ22 6= σ12 if t ≥ 70. Plot the exponentially filtered
variables Yt∗ for different values of the smoothing parameter α ∈ (0, 1) and compare the
results.

16. Compute under the assumptions of Corollary 1.2.7 the variance of an exponentially
filtered variable Yt∗ after a change point t = N with σ 2 := E(Yt − µ)2 for t < N and
τ 2 := E(Yt − λ)2 for t ≥ N . What is the limit for t → ∞?

17. (Bankruptcy Data) The following table lists the percentages to annual bancruptcies
among all US companies between 1867 and 1932:


             1.33   0.94   0.79   0.83       0.61   0.77   0.93    0.97   1.20   1.33
             1.36   1.55   0.95   0.59       0.61   0.83   1.06    1.21   1.16   1.01
             0.97   1.02   1.04   0.98       1.07   0.88   1.28    1.25   1.09   1.31
             1.26   1.10   0.81   0.92       0.90   0.93   0.94    0.92   0.85   0.77
             0.83   1.08   0.87   0.84       0.88   0.99   0.99    1.10   1.32   1.00
             0.80   0.58   0.38   0.49       1.02   1.19   0.94    1.01   1.00   1.01
             1.07   1.08   1.04   1.21       1.33   1.53


Compute and plot the empirical autocovariance function and the empirical autocorrela-
tion function using the SAS procedures PROC ARIMA and PROC GPLOT.

18. Verify that the empirical correlation r(k) at lag k for the trend yt = t, t = 1, . . . , n
is given by
                                  k      k(k2 − 1)
                     r(k) = 1 − 3 + 2              , k = 0, . . . , n.
                                  n      n(n2 − 1)
Exercises                                                                            39

Plot the correlogram for different values of n. This example shows, that the correlogram
has no interpretation for non-stationary processes (see Exercise 17).

19. Show that
                       lim Tλ (Yt ) = T0 (Yt ) = log(Yt ),   Yt > 0
                       λ↓0

for the Box-Cox transformation Tλ .
Chapter 2

Models of Time Series

Each time series Y1 , . . . , Yn can be viewed as a clipping from a sequence of ran-
dom variables . . . , Y−2 , Y−1 , Y0 , Y1 , Y2 , . . . In the following we will introduce several
models for such a stochastic process Yt with index set Z.



2.1       Linear Filters and Stochastic Processes

For mathematical convenience we will consider complex valued random variables
Y , whose
     √      range is the set of complex numbers C = {u + iv : u, v ∈ R}, where
i = −1. Therefore, we can decompose Y as Y = Y(1) + iY(2) , where Y(1) = Re(Y )
is the real part of Y and Y(2) = Im(Y ) is its imaginary part. The random variable
Y is called integrable if the real valued random variables Y(1) , Y(2) both have finite
expectations, and in this case we define the expectation of Y by

                             E(Y ) := E(Y(1) ) + i E(Y(2) ) ∈ C.

This expectation has, up to monotonicity, the usual properties such as E(aY +
bZ) = a E(Y ) + b E(Z) of its real counterpart. Here a and b are complex numbers
and Z is a further integrable complex valued random variable. In addition we
have E(Y ) = E(Ȳ ), where ā = u − iv denotes the conjugate complex number of
a = u + iv. Since |a|2 := u2 + v 2 = aā = āa, we define the variance of Y by

                       Var(Y ) := E((Y − E(Y ))(Y − E(Y ))) ≥ 0.

The complex random variable Y is called square integrable if this number is finite.
To carry the equation Var(X) = Cov(X, X) for a real random variable X over
42                                                Chapter 2.     Models of Time Series

to complex ones, we define the covariance of complex square integrable random
variables Y, Z by

                     Cov(Y, Z) := E((Y − E(Y ))(Z − E(Z))).

Note that the covariance Cov(Y, Z) is no longer symmetric with respect to Y and
Z, as it is for real valued random variables, but it satisfies Cov(Y, Z) = Cov(Z, Y ).

The following lemma implies that the Cauchy–Schwarz inequality carries over to
complex valued random variables.

Lemma 2.1.1. For any integrable complex valued random variable Y = Y(1) +iY(2)
we have
                  | E(Y )| ≤ E(|Y |) ≤ E(|Y(1) |) + E(|Y(2) |).


                                                    iϑ
                                            ) = re , where r = | E(Y )| and
Proof. We write E(Y ) in polar coordinates E(Y
ϑ ∈ [0, 2π). Observe that Re(e−iϑ Y ) = Re (cos(ϑ) − i sin(ϑ))(Y(1) + iY(2) ) =
cos(ϑ)Y(1) +sin(ϑ)Y(2) ≤ (cos2 (ϑ)+sin2 (ϑ))1/2 (Y(1)
                                                   2     2 1/2
                                                      +Y(2) )  = |Y | by the Cauchy–
Schwarz inequality for real numbers. Thus we obtain

                     | E(Y )| = r = E(e−iϑ Y )
                                                
                                  = E Re(e−iϑ Y ) ≤ E(|Y |).

                                                          2      2 1/2
The second inequality of the lemma follows from |Y | = (Y(1) + Y(2) )  ≤ |Y(1) | +
|Y(2) |.


The next result is a consequence of the preceding lemma and the Cauchy–Schwarz
inequality for real valued random variables.

Corollary 2.1.2. For any square integrable complex valued random variable we
have
                | E(Y Z)| ≤ E(|Y ||Z|) ≤ E(|Y |2 )1/2 E(|Z|2 )1/2
and thus,
                        | Cov(Y, Z)| ≤ Var(Y )1/2 Var(Z)1/2 .


Stationary Processes
A stochastic process (Yt )t∈Z of square integrable complex valued random variables
is said to be (weakly) stationary if for any t1 , t2 , k ∈ Z

               E(Yt1 ) = E(Yt1 +k ) and E(Yt1 Y t2 ) = E(Yt1 +k Y t2 +k ).
2.1 Linear Filters and Stochastic Processes                                           43

The random variables of a stationary process (Yt )t∈Z have identical means and
variances. The autocovariance function satisfies moreover for s, t ∈ Z

               γ(t, s) := Cov(Yt , Ys )        = Cov(Yt−s , Y0 ) =: γ(t − s)
                        = Cov(Y0 , Yt−s ) = Cov(Ys−t , Y0 ) = γ(s − t),

and thus, the autocovariance function of a stationary process can be viewed as a
function of a single argument satisfying γ(t) = γ(−t), t ∈ Z.

A stationary process (εt )t∈Z of square integrable and uncorrelated real valued
random variables is called white noise i.e., Cov(εt , εs ) = 0 for t 6= s and there exist
µ ∈ R, σ ≥ 0 such that

                      E(εt ) = µ, E((εt − µ)2 ) = σ 2 ,             t ∈ Z.


In Section 1.2 we defined linear filters of a time series, which were based on a finite
number of real valued weights. In the following we consider linear filters with an
infinite number of complex valued weights.

Suppose that (εt )t∈Z
                    P∞ is a white noise
                                    P and let (a Pt )t∈Z be a sequence of complex
numbers satisfying t=−∞ |at | := t≥0 |at | + t≥1 |a−t | < ∞. Then (at )t∈Z is
said to be an absolutely summable (linear) filter and

                    ∞
                    X                   X                 X
            Yt :=          au εt−u :=         au εt−u +         a−u εt+u ,   t ∈ Z,
                    u=−∞                u≥0               u≥1


is called a general linear process.

Existence of General Linear Processes
                   P∞
We will
     P∞ show that u=−∞ |au εt−u | < ∞ with probability one for t ∈ Z and, thus,
Yt = u=−∞ au εt−u is well defined. Denote by L2 := L2 (Ω, A, P) the set of all
complex valued square integrable random variables, defined on some probability
space (Ω, A, P), and put ||Y ||2 := E(|Y |2 )1/2 , which is the L2 -pseudonorm on L2 .

Lemma 2.1.3. Let Xn , n ∈ N, be a sequence in L2 such that ||Xn+1 −Xn ||2 ≤ 2−n
for each n ∈ N. Then there exists X ∈ L2 such that limn→∞ Xn = X with
probability one.


                     P
Proof. Write Xn =       k≤n (Xk − Xk−1 ), where X0 := 0. By the monotone conver-
44                                                      Chapter 2.     Models of Time Series

gence theorem, the Cauchy–Schwarz inequality and Corollary 2.1.2 we have
         X                  X                     X
       E      |Xk − Xk−1 | =     E(|Xk − Xk−1 |) ≤      ||Xk − Xk−1 ||2
           k≥1                      k≥1                          k≥1
                                                  X
                                                         −k
                               ≤ ||X1 ||2 +             2     < ∞.
                                                  k≥1
                   P
This implies that
              P      k≥1 |Xk − Xk−1 | < ∞ with probability one and hence, the
limit limn→∞ k≤n (Xk − Xk−1 ) = limn→∞ Xn = X exists in C almost surely.
Finally, we check that X ∈ L2 :
             E(|X|2 ) = E( lim |Xn |2 )
                          n→∞
                               X                  2 
                      ≤ E lim           |Xk − Xk−1 |
                              n→∞
                                          k≤n
                                    X                     2 
                       = lim E                  |Xk − Xk−1 |
                           n→∞
                                          k≤n
                                  X
                       = lim              E(|Xk − Xk−1 | |Xj − Xj−1 |)
                           n→∞
                                  k,j≤n
                                     X
                       ≤ lim sup            ||Xk − Xk−1 ||2 ||Xj − Xj−1 ||2
                           n→∞
                                    k,j≤n
                                    X                         2
                       = lim sup            ||Xk − Xk−1 ||2
                           n→∞
                                      k≤n
                           X                    
                       =          ||Xk − Xk−1 ||2 < ∞.
                            k≥1




Theorem 2.1.4. The space (L2 , ||·||2 ) is complete i.e., suppose that Xn ∈ L2 , n ∈
N, has the property that for arbitrary ε > 0 one can find an integer N (ε) ∈ N such
that ||Xn − Xm ||2 < ε if n, m ≥ N (ε). Then there exists a random variable
X ∈ L2 such that limn→∞ ||X − Xn ||2 = 0.


Proof. We can obviously find integers n1 < n2 < . . . such that
                      ||Xn − Xm ||2 ≤ 2−k               if n, m ≥ nk .

By Lemma 2.1.3 there exists a random variable X ∈ L2 such that limk→∞ Xnk =
X with probability one. Fatou’s lemma implies
        ||Xn − X||22 = E(|Xn − X|2 )
                                            
                     = E lim inf |Xn − Xnk |2 ≤ lim inf ||Xn − Xnk ||22 .
                              k→∞                              k→∞
2.1 Linear Filters and Stochastic Processes                                     45

The right-hand side of this inequality becomes arbitrarily small if we choose n
large enough, and thus we have limn→∞ ||Xn − X||22 = 0.



The following result implies in particular that a general linear process is well
defined.

Theorem 2.1.5. Suppose that (Zt )t∈Z is a complex valued stochastic process such
          E(|Zt |) < ∞ and let (at )t∈Z be an absolutely summable filter. Then
that supt P
we
P   have    u∈Z |au Zt−u | < ∞ with probability one for t ∈ Z and, thus, Yt :=
  u∈Z u t−u exists almost surely in C. We have moreover E(|Yt |) < ∞, t ∈ Z,
      a  Z
and

                             Pn
  (i) E(Yt ) = limn→∞          u=−n au E(Zt−u ), t ∈ Z,

                   Pn                  n→∞
 (ii) E(|Yt −       u=−n au Zt−u |)     −→ 0.


If, in addition, supt E(|Zt |2 ) < ∞, then we have E(|Yt |2 ) < ∞, t ∈ Z, and

               Pn                     n→∞
(iii) ||Yt −       u=−n au Zt−u ||2    −→ 0.



Proof. The monotone convergence theorem implies

                   X                         n
                                              X      
               E         |au | |Zt−u | ≤ lim     |au | sup E(|Zt−u |) < ∞
                                          n→∞               t∈Z
                   u∈Z                           u=−n

                      P
  P thus, we have u∈Z |au ||Zt−u | < ∞ with probability
and,                                                Pn one as well as E(|Yt |) ≤
E( u∈Z |au ||Zt−u |) < ∞, t ∈ Z. Put Xn (t) :=        u=−n au Zt−u . Then we
have
  P   |Yt −  X n (t)| → n→∞ 0 almost surely. By the inequality |Yt − Xn (t)| ≤
2 u∈Z |au ||Zt−u |, n ∈ N, the dominated convergence theorem implies (ii) and
therefore (i):

                            n
                            X
               | E(Yt ) −          au E(Zt−u )| = | E(Yt ) − E(Xn (t))|
                            u=−n
                                                ≤ E(|Yt − Xn (t)|) −→n→∞ 0.

Put K := supt E(|Zt |2 ) < ∞. The Cauchy–Schwarz inequality implies for m, n ∈ N
46                                                         Chapter 2.     Models of Time Series

and ε > 0
                                                                     
                                                                  2
                                              n+m
                                              X
     E(|Xn+m (t) − Xn (t)|2 ) = E                    au Zt−u 
                                                             
                                            |u|=n+1

                                        n+m
                                        X        n+m
                                                 X
                              =                             au āw E(Zt−u Z̄t−w )
                                   |u|=n+1 |w|=n+1
                                                            2                      2
                                              n+m
                                              X                               X
                              ≤ K2                    |au | ≤ K 2               |au | < ε
                                             |u|=n+1                       |u|≥n

if n is chosen sufficiently large. Theorem 2.1.4 now implies the existence of a
random variable X(t) ∈ L2 with limn→∞ ||Xn (t) − X(t)||2 = 0. For the proof of
(iii) it remains to show that X(t) = Yt almost surely. Markov’s inequality implies
              P {|Yt − Xn (t)| ≥ ε} ≤ ε−1 E(|Yt − Xn (t)|) −→n→∞ 0
by (ii), and Chebyshev’s inequality yields
            P {|X(t) − Xn (t)| ≥ ε} ≤ ε−2 ||X(t) − Xn (t)||2 −→n→∞ 0
for arbitrary ε > 0. This implies
           P {|Yt − X(t)| ≥ ε} ≤ P {|Yt − Xn (t)| + |Xn (t) − X(t)| ≥ ε}
       ≤ P {|Yt − Xn (t)| ≥ ε/2} + P {|X(t) − Xn (t)| ≥ ε/2} −→n→∞ 0
and thus Yt = X(t) almost surely, which completes the proof of Theorem 2.1.5.
Theorem 2.1.6. Suppose that (Zt )t∈Z is a stationary process with mean µZ :=
E(Z0 ) and autocovariance
                 P        function γZ and let (at ) be an absolutely summable
filter. Then Yt = u au Zt−u , t ∈ Z, is also stationary with
                                           X 
                          µY = E(Y0 ) =          au µZ
                                                       u

and autocovariance function
                                   XX
                        γY (t) =              au āw γZ (t + w − u).
                                    u    w



Proof. Note that
                   E(|Zt |2 ) = E |Zt − µZ + µZ |2
                                                             
                                                              
                            = E (Zt − µZ + µZ )(Zt − µz + µz )
                            = E |Zt − µZ |2 + |µZ |2
                                           

                            = γZ (0) + |µZ |2
2.1 Linear Filters and Stochastic Processes                                                47

and, thus,
                                 sup E(|Zt |2 ) < ∞.
                                 t∈Z

We can, therefore, nowP  apply Theorem 2.1.5. Part (i) of Theorem 2.1.5 immedi-
ately implies E(Yt ) = ( u au )µZ and part (iii) implies for t, s ∈ Z
                                                     n
                                                    X                n
                                                                      X                
       E((Yt − µY )(Ys − µY )) = lim Cov                  au Zt−u ,          aw Zs−w
                                     n→∞
                                                   u=−n               w=−n
                                               n
                                               X   Xn
                                 = lim                   au āw Cov(Zt−u , Zs−w )
                                     n→∞
                                           u=−n w=−n
                                            Xn   Xn
                                 = lim                   au āw γZ (t − s + w − u)
                                     n→∞
                                           u=−n w=−n
                                     XX
                                 =             au āw γZ (t − s + w − u).
                                       u   w

The covariance of Yt and Ys depends, therefore,  P P only on the difference t − s.
Note that  |γZ (t)| ≤ γZ (0)  <   ∞   and  thus,   u   w |au āw γZ (t − s + w − u)| ≤
γZ (0)( u |au |)2 < ∞, i.e., (Yt ) is a stationary process.
       P


The Covariance Generating Function

The covariance generating function of a stationary process with autocovariance
function γ is defined as the double series
                           X            X            X
                  G(z) :=     γ(t)z t =    γ(t)z t +   γ(−t)z −t ,
                           t∈Z             t≥0            t≥1

known as a Laurent series in complex analysis. We assume that there exists a real
number r > 1 such that G(z) is defined for all z ∈ C in the annulus 1/r < |z| < r.
The covariance generating function will help us to compute the autocovariances of
filtered processes.

Since the coefficients of a Laurent series are uniquely determined (see e.g. Chap-
ter V, 1.11 in Conway (1975)), the covariance generating function of a stationary
process is a constant function if and only if this process is a white noise i.e.,
γ(t) = 0 for t 6= 0.
                                       P
Theorem     2.1.7. Suppose that Yt = u au εt−u , t ∈ Z, is a general linear process
with u |au ||z u | < ∞, if r−1 < |z| < r for some r > 1. Put σ 2 := Var(ε0 ). The
     P
process (Yt ) then has the covariance generating function
                          X          X          
               G(z) = σ 2     au z u       āu z −u ,   r−1 < |z| < r.
                            u              u
48                                                                       Chapter 2.        Models of Time Series

Proof. Theorem 2.1.6 implies for t ∈ Z
                                   XX
                  Cov(Yt , Y0 ) =      au āw γε (t + w − u)
                                                       u   w
                                                           X
                                                       2
                                             = σ                au āu−t .
                                                           u

This implies
                          XX
        G(z) = σ 2                    au āu−t z t
                          t       u
                          X                 XX                                     X X                    
                      2
                = σ               |au |2 +                 au āu−t z t +                   au āu−t z t
                              u              t≥1       u                        t≤−1 u
                          X                 X X                                     X X                        
                = σ2              |au |2 +                      au āt z u−t +                   au āt z u−t
                              u                  u t≤u−1                             u t≥u+1
                          XX                                    X                   X           
                = σ   2
                                      au āt z   u−t
                                                       =σ   2
                                                                         au z   u
                                                                                           āt z −t .
                          u       t                                  u                t




Example 2.1.8. Let (εt )t∈Z be a white noise with Var(ε0 ) =:Pσ 2 > 0. The
covariance generating function of the simple moving average Yt = u au εt−u with
a−1 = a0 = a1 = 1/3 and au = 0 elsewhere is then given by

                            σ 2 −1
                 G(z) =        (z + z 0 + z 1 )(z 1 + z 0 + z −1 )
                            9
                            σ 2 −2
                          =    (z + 2z −1 + 3z 0 + 2z 1 + z 2 ),                             z ∈ R.
                            9
Then the autocovariances are just the coefficients in the above series
              σ2                  2σ 2                  σ2
     γ(0) =      , γ(1) = γ(−1) =      , γ(2) = γ(−2) =    , γ(k) = 0 elsewhere.
              3                    9                    9
This explains the name covariance generating function.


The Characteristic Polynomial
Let (au ) be an absolutely summable filter. The Laurent series
                                         X
                               A(z) :=      au z u
                                                               u∈Z



is called characteristic polynomial of (au ). We know from complex analysis that
A(z) exists either for all z in some annulus r < |z| < R or almost nowhere. In the
2.1 Linear Filters and Stochastic Processes                                           49

first case the coefficients au are uniquely determined by the function A(z) (see e.g.
Chapter V, 1.11 in Conway (1975)).

If, for example, (au ) is absolutely summable with au = 0 for u ≥ 1, then A(z)
exists for all complex z such that |z| ≥ 1. If au = 0 for all large |u|, then A(z)
exists for all z 6= 0.

Inverse Filters
Let
P now (au ) and (bu ) be absolutely summable filters and denote by Yt :=
  u au Zt−u , the filtered stationary sequence, where (Zu )u∈Z is a stationary process.
Filtering (Yt )t∈Z by means of (bu ) leads to
            X                XX                    X X
                 bw Yt−w =          bw au Zt−w−u =     (       bw au )Zt−v ,
              w                     w       u                   v   u+w=v
              P
where cv :=       u+w=v bw au , v ∈ Z, is an absolutely summable filter:
                  X             X X                          X        X
                      |cv | ≤                    |bw au | = (  |au |)(  |bw |) < ∞.
                  v             v   u+w=v                   u        w

We call (cv ) the product filter of (au ) and (bu ).
Lemma 2.1.9. Let (au ) and (bu ) be absolutely summable filters with characteristic
polynomials A1 (z) andP  A2 (z), which both exist on some annulus r < |z| < R. The
product filter (cv ) = ( u+w=v bw au ) then has the characteristic polynomial

                                            A(z) = A1 (z)A2 (z).


Proof. By repeating the above arguments we obtain
                         X X            
                  A(z) =            bw au z v = A1 (z) A2 (z).
                                        v       u+w=v




Suppose now that (au ) and (bu ) are absolutely summable filters with characteristic
polynomials A1 (z) and A2 (z), which bothP   exist on some annulus r < z < R, where
they satisfy A1 (z)A2 (z) = 1. Since 1 = v cv z v if c0 = 1 and cv = 0 elsewhere,
the uniquely determined coefficients of the characteristic polynomial of the product
filter of (au ) and (bu ) are given by
                                             (
                                X             1 if v = 0
                                     bw au =
                              u+w=v
                                              0 if v 6= 0.
50                                                     Chapter 2.        Models of Time Series

In this case we obtain for a stationary process (Zt ) that almost surely
                     X                   X
                Yt =     au Zt−u and         bw Yt−w = Zt , t ∈ Z.                          (2.1)
                          u                      w

The filter (bu ) is, therefore, called the inverse filter of (au ).

Causal Filters

An absolutely summable filter (au )u∈Z is called causal if au = 0 for u < 0.
Lemma 2.1.10. Let a ∈ C. The filter (au ) with a0 = 1, a1 = −a and au = 0
elsewhere has an absolutely summable and causal inverse filter (bu )u≥0 if and only
if |a| < 1. In this case we have bu = au , u ≥ 0.


Proof. The characteristic polynomial of (au ) is A1 (z) = 1 − az, z ∈ C. Since
the characteristic polynomial A2 (z) of an inverse filter satisfies A1 (z)A2 (z) = 1 on
some annulus, we have A2 (z) = 1/(1 − az). Observe now that
                              1     X
                                  =   au z u ,         if |z| < 1/|a|.
                           1 − az
                                      u≥0

As a consequence, if |a| < 1, then A2 (z) = u≥0 au z u exists P
                                             P
                                                              for all |z| < 1 and
                           u                                           u
the inverse causal filterP                                      P |a | <u ∞. If
                         (a )u≥0 is absolutely summable, i.e., u≥0
                               u u
|a| ≥ 1, then A2 (z) = u≥0 a z exists for all |z| < 1/|a|, but u≥0 |a| = ∞,
which completes the proof.
Theorem 2.1.11. Let a1 , a2 , . . . , ap ∈ C, ap 6= 0. The filter (au ) with coefficients
a0 = 1, a1 , . . . , ap and au = 0 elsewhere has an absolutely summable and causal
inverse filter if the p roots z1 , . . . , zp ∈ C of A(z) = 1 + a1 z + a2 z 2 + . . . + ap z p = 0
are outside of the unit circle i.e., |zi | > 1 for 1 ≤ i ≤ p.


Proof. We know from the Fundamental Theorem of Algebra that the equation
A(z) = 0 has exactly p roots z1 , . . . , zp ∈ C (see e.g. Chapter IV, 3.5 in Conway
(1975)), which are all different from zero, since A(0) = 1. Hence we can write (see
e.g. Chapter IV, 3.6 in Conway (1975))

                       A(z) = ap (z − z1 ) · · · (z − zp )
                                     z           z         z
                            = c 1−           1−         ··· 1 −    ,
                                     z1             z2          zp

where c := ap (−1)p z1 · · · zp . In case of |zi | > 1 we can write for |z| < |zi |
                                      1      X  1 u
                                           =             zu,
                                   1 − zzi          zi
                                              u≥0
2.1 Linear Filters and Stochastic Processes                                           51

where the coefficients (1/zi )u , u ≥ 0, are absolutely summable. In case of |zi | < 1,
we have for |z| > |zi |

              1         1    1        zi X u −u     X  1 u
                    = −        zi = −     z i z = −          zu,
            1 − zzi     z
                        zi 1 − z      z                z i
                                            u≥0               u≤−1



where the filter with coefficients −(1/zi )u , u ≤ −1, is not a causal one. In case of
|zi | = 1, we have for |z| < 1

                                  1       X  1 u
                                        =          zu,
                                1 − zzi      zi
                                          u≥0



where the coefficients (1/zi )u , u ≥ 0, are not absolutely summable. Since the
coefficients of a Laurent                               the factor 1 − z/zi has an
                       Pseries are uniquely determined, P
inverse 1/(1 − z/zi ) = u≥0 bu z u on some annulus with u≥0 |bu | < ∞ if |zi | > 1.
A small analysis implies that this argument carries over to the product

                            1             1
                                =                
                           A(z)  c 1− z
                                          ··· 1 − z
                                           z1            zp



which has an expansion 1/A(z) = u≥0 bu z u on some annulus with u≥0 |bu | < ∞
                                 P                                P
if each factor has such an expansion, and thus, the proof is complete.



Remark 2.1.12. Note that the roots z1 , . . . , zp of A(z) = 1 + a1 z + . . . + ap z p
are complex valued and thus, the coefficients bu of the inverse causal filter will, in
general, be complex valued as well. The preceding proof shows, however, that if
ap and each zi are real numbers, then the coefficients bu , u ≥ 0, are real as well.

The preceding proof shows, moreover, that a filter (au ) with complex coefficients
a0 , a1 , . . . , ap ∈ C and au = 0 elsewhere has an absolutely summable inverse filter
if no root z ∈ C of the equation A(z) = a0 + a1 z + . . . + ap z p = 0 has length 1 i.e.,
|z| =6 1 for each root. The additional condition |z| > 1 for each root then implies
that the inverse filter is a causal one.

Example 2.1.13. The filter with coefficients a0 = 1, a1 = −0.7 and a2 = 0.1 has
the characteristic polynomial A(z) = 1 − 0.7z + 0.1z 2 = 0.1(z − 2)(z − 5), with
z1 = 2, z2 = 5 being the roots of A(z) = 0. Theorem 2.1.11 implies the existence
of an absolutely summable inverse causal filter, whose coefficients can be obtained
52                                                                 Chapter 2. Models of Time Series

by expanding 1/A(z) as a power series of z:
       1              1           X  1 u X  1 w
            =             =             zu      zw
      A(z)      1− z 1− z               2      5
                       2            5          u≥0                 w≥0
               X X  1 u  1 w
             =                   zv
                u+w=v
                      2     5
                 v≥0
                   v  v−w  w
                 X X  1      1
             =                                       zv
                            2           5
                 v≥0 w=0
                                      v+1
                                        2
                 X  1 v 1 −
                                                                                 !
                                        5                 X 10  1 v+1  1 v+1
             =                                       zv =              −          zv .
                 v≥0
                       2            1 − 52                   3
                                                             v≥0
                                                                 2        5

The preceding expansion implies that bv := (10/3)(2−(v+1) − 5−(v+1) ), v ≥ 0, are
the coefficients of the inverse causal filter.



2.2      Moving Averages and Autoregressive Process-
         es

Let a1 , . . . , aq ∈ R with aq 6= 0 and let (εt )t∈Z be a white noise. The process

                           Yt := εt + a1 εt−1 + · · · + aq εt−q

is said to be a moving average of order q, denoted by MA(q).
                                                      Pq     Put a0 = 1. Theorem
2.1.6 and 2.1.7 imply that a moving average Yt = u=0 au εt−u is a stationary
process with covariance generating function
                                     q
                                    X                      q
                                                          X               
                   G(z) = σ     2
                                              au z   u
                                                                  aw z −w
                                        u=0                 w=0
                                    q X
                                    X q
                           = σ2                  au aw z u−w
                                    u=0 w=0
                                     Xq   X
                           = σ2                           au aw z u−w
                                    v=−q u−w=v

                                     X  q−v
                                     q X                        
                           = σ2                           av+w aw z v ,         z ∈ C,
                                    v=−q       w=0

where σ 2 = Var(ε0 ). The coefficients of this expansion provide the autocovariance
function γ(v) = Cov(Y0 , Yv ), v ∈ Z, which cuts off after lag q.
2.2 Moving Averages and Autoregressive Processes                                      53

                                     Pq
Lemma 2.2.1. Suppose that Yt = u=0 au εt−u , t ∈ Z, is a MA(q)-process. Put
µ := E(ε0 ) and σ 2 := V ar(ε0 ). Then we have

                   Pq
  (i) E(Yt ) = µ    u=0 au ,
                               
                               0
                                                     ,   v > q,
 (ii) γ(v) = Cov(Yv , Y0 ) =          q−v
                               σ 2
                                      P
                                           av+w aw   ,   0 ≤ v ≤ q,
                                      w=0
      γ(−v) = γ(v),
                           Pq
(iii) Var(Y0 ) = γ(0) = σ 2 w=0 a2w ,
                     
                     
                      0                                      ,    v > q,
                     
              γ(v)  q−v            . P
                                          q
                                                 
(iv) ρ(v) =        =                           2
                          P
              γ(0)         a v+w aw      w=0 aw              ,    0 < v ≤ q,
                      w=0
                     
                     
                       1                                      ,    v = 0,
      ρ(−v) = ρ(v).
Example 2.2.2. The MA(1)-process Yt = εt + aεt−1 with a 6= 0 has the autocor-
relation function         
                          
                           1             , v=0
                          
                    ρ(v) = a/(1 + a2 ) , v = ±1
                          
                          
                          
                            0             elsewhere.
Since a/(1 + a2 ) = (1/a)/(1 + (1/a)2 ), the autocorrelation functions of the two
MA(1)-processes with parameters a and 1/a coincide. We have, moreover, |ρ(1)| ≤
1/2 for an arbitrary MA(1)-process and thus, a large value of the empirical au-
tocorrelation function r(1), which exceeds 1/2 essentially, might indicate that an
MA(1)-model for a given data set is not a correct assumption.


Invertible Processes
                                Pq
The MA(q)-process Yt =                                   0 = 1 and aq 6= 0, is said to be
                                     u=0 au εt−u , with aP
                                                           q
invertible if all q roots z1 , . . . , zq ∈ C of A(z) = u=0 au z u = 0 are outside of the
unit circle i.e., if |zi | > 1 for 1 ≤ i ≤ q.

Theorem 2.1.11 and representation (2.1) imply P
                                              that the white noise process (εt ),
                                                 q
pertaining to an invertible MA(q)-process Yt = u=0 au εt−u , can be obtained by
means of an absolutely summable and causal filter (bu )u≥0 via
                                 X
                            εt =   bu Yt−u ,   t ∈ Z,
                                      u≥0
54                                                      Chapter 2. Models of Time Series

with probability one. In particular the MA(1)-process Yt = εt − aεt−1 is invertible
iff |a| < 1, and in this case we have by Lemma 2.1.10 with probability one
                                      X
                               εt =         au Yt−u ,    t ∈ Z.
                                      u≥0




Autoregressive Processes

A real valued stochastic process (Yt ) is said to be an autoregressive process of
order p, denoted by AR(p) if there exist a1 , . . . , ap ∈ R with ap 6= 0, and a white
noise (εt ) such that

                      Yt = a1 Yt−1 + . . . + ap Yt−p + εt ,       t ∈ Z.            (2.2)

The value of an AR(p)-process at time t is, therefore, regressed on its own past p
values plus a random shock.

The Stationarity Condition

While by Theorem 2.1.6 MA(q)-processes are automatically stationary, this is
not true for AR(p)-processes (see Exercise 26). The following result provides a
sufficient condition on the constants a1 , . . . , ap implying the existence of a uniquely
determined stationary solution (Yt ) of (2.2).

Theorem 2.2.3. The AR(p)-equation (2.2) with given constants a1 , . . . , ap and
white noise (εt )t∈Z has a stationary solution (Yt )t∈Z if all p roots of the equation
1 − a1 z − a2 z 2 − . . . − ap z p = 0 are outside of the unit circle. In this case, the
stationary solution is almost surely uniquely determined by
                                      X
                              Yt :=         bu εt−u ,    t ∈ Z,
                                      u≥0


where (bu )u≥0 is the absolutely summable inverse causal filter of c0 = 1, cu =
−au , u = 1, . . . , p and cu = 0 elsewhere.


Proof. The existence of an absolutely
                                 P summable causal filter follows from Theorem
2.1.11. The stationarity of Yt = u≥0 bu εt−u is a consequence of Theorem 2.1.6,
and its uniqueness follows from

                      εt = Yt − a1 Yt−1 − . . . − ap Yt−p ,       t ∈ Z,

and equation (2.1).
2.2 Moving Averages and Autoregressive Processes                                             55

The condition
    Pp        that all roots of the characteristic equation of an AR(p)-process
Yt = u=1 au Yt−u + εt are outside of the unit circle i.e.,

                      1 − a1 z − a2 z 2 − . . . − ap z p 6= 0 for |z| ≤ 1,                 (2.3)

will be referred to in the following as the stationarity condition for an AR(p)-
process.

Note that a stationary solution (Yt ) of (2.1) exists in general if no root zi of the
characteristic equation lies on the unit sphere. If there are solutions in the unit
circle, then the stationary solution is noncausal, i.e., Yt is correlated with future
values of εs , s > t. This is frequently regarded as unnatural.

Example 2.2.4. The AR(1)-process Yt = aYt−1 + εt , t ∈ Z, with a 6= 0 has the
characteristic equation 1 − az = 0 with the obvious solution z1 = 1/a. The process
(Yt ), therefore, satisfies the stationarity condition iff |z1 | > 1 i.e., iff |a| < 1. In this
case we obtain from Lemma 2.1.10 that the absolutely summable inverse causal
filter of a0 = 1, a1 = −a and au = 0 elsewhere is given by bu = au , u ≥ 0, and
thus, with probability one

                                      X                 X
                               Yt =         bu εt−u =         au εt−u .
                                      u≥0               u≥0


Denote by σ 2 the variance of ε0 . From Theorem 2.1.6 we obtain the autocovariance
function of (Yt )

                         XX
               γ(s) =               bu bw Cov(ε0 , εs+w−u )
                          u     w
                         X
                     =         bu bu−s Cov(ε0 , ε0 )
                         u≥0
                                X                       as
                     = σ 2 as         a2(u−s) = σ 2          ,        s = 0, 1, 2, . . .
                                                      1 − a2
                                u≥s


and γ(−s) = γ(s). In particular we obtain γ(0) = σ 2 /(1 − a2 ) and thus, the
autocorrelation function of (Yt ) is given by

                                    ρ(s) = a|s| ,        s ∈ Z.

The autocorrelation function of an AR(1)-process Yt = aYt−1 + εt with |a| < 1
therefore decreases at an exponential rate. Its sign is alternating if a ∈ (−1, 0).
56                                          Chapter 2. Models of Time Series




         Figure 2.2.1. Autocorrelation functions of AR(1)-processes
         Yt = aYt−1 + εt with different values of a.

 *** Program 2 _2_1    ***;
 TITLE1 ’ Autocorrelation functions of AR (1) - processes ;

DATA data1 ;
  DO a = -0.7 , 0.5 , 0.9;
    DO s =0 TO 20;
        rho = a ** s ;
        OUTPUT ;
    END ;
  END ;


SYMBOL1 C = GREEN V = DOT I = JOIN H =0.3 L =1;
SYMBOL2 C = GREEN V = DOT I = JOIN H =0.3 L =2;
SYMBOL3 C = GREEN V = DOT I = JOIN H =0.3 L =33;
AXIS1 LABEL =( ’s ’);
AXIS2 LABEL =( F = CGREEK ’r ’ F = COMPLEX H =1 ’a ’ H =2 ’( s ) ’);
LEGEND1 LABEL =( ’ a = ’) SHAPE = SYMBOL (10 ,0.6);
2.2 Moving Averages and Autoregressive Processes                                         57

 PROC GPLOT DATA = data1 ;
   PLOT rho * s = a / HAXIS = AXIS1 VAXIS = AXIS2
          LEGEND = LEGEND1 VREF =0;
 RUN ; QUIT ;
                                                                                              

The data step evaluates rho for three differ-   assuming this to be the default text font
ent values of a and the range of s from 0       (GOPTION FTEXT=COMPLEX). The SHAPE option
to 20 using two loops. The plot is gener-       SHAPE=SYMBOL(10,0.6) in the LEGEND state-
ated by the procedure GPLOT. The LABEL op-      ment defines width and height of the symbols
tion in the AXIS2 statement uses, in addition   presented in the legend.
to the greek font CGREEK, the font COMPLEX




The following figure illustrates the significance of the stationarity condition |a| < 1
of an AR(1)-process. Realizations Yt = aYt−1 + εt , t = 1, . . . , 10, are displayed
for a = 0.5 and a = 1.5, where ε1 , ε2 , . . . , ε10 are independent standard normal in
each case and Y0 is assumed to be zero. While for a = 0.5 the sample path follows
the constant zero closely, which is the expectation of each Yt , the observations Yt
decrease rapidly in case of a = 1.5.




            Figure 2.2.2. Realizations Yt = 0.5Yt−1 +εt and Yt = 1.5Yt−1 +
            εt , t = 1, . . . , 10, with εt independent standard normal and
            Y0 = 0.
58                                                         Chapter 2. Models of Time Series


 ***    Program 2 _2_2   ***;
 TITLE1 ’ Realizations of AR (1) - processes ;


DATA data1 ;
  DO a =0.5 , 1.5;
    t =0; y =0; OUTPUT ;
    DO t =1 TO 10;
        y = a * y + RANNOR (1);
        OUTPUT ;
    END ;
  END ;


 SYMBOL1 C = GREEN V = DOT I = JOIN H =0.4 L =1;
 SYMBOL2 C = GREEN V = DOT I = JOIN H =0.4 L =2;
 AXIS1 LABEL =( ’t ’) MINOR = NONE ;
 AXIS2 LABEL =( ’Y ’ H =1 ’t ’);
 LEGEND1 LABEL =( ’ a = ’) SHAPE = SYMBOL (10 ,0.6);
 PROC GPLOT DATA = data1 ( WHERE =( t >0));
   PLOT y * t = a / HAXIS = AXIS1 VAXIS = AXIS2 LEGEND = LEGEND1 ;
 RUN ; QUIT ;
                                                                                                        

The data are generated within two loops, the         lated as the sum of a times the actual value
first one over the two values for a. The vari-       of y and the random number and stored in a
able y is initialized with the value 0 correspond-   new observation. The resulting data set has 22
ing to t=0. The realizations for t=1, ..., 10        observations and 3 variables (a, t and y).
are created within the second loop over t and
with the help of the function RANNOR which re-       In the plot created by PROC GPLOT the initial
turns pseudo random numbers distributed as           observations are dropped using the WHERE data
standard normal. The argument 1 is the initial       set option. Only observations fulfilling the con-
seed to produce a stream of random numbers.          dition t>0 are read into the data set used here.
A positive value of this seed always produces        To suppress minor tick marks between the inte-
the same series of random numbers, a negative        gers 0,1, ...,10 the option MINOR in the AXIS1
value generates a different series each time the     statement is set to NONE.
program is submitted. A value of y is calcu-




The Yule–Walker Equations
The Yule–Walker equations entail the recursive computation of the autocorrelation
function ρ of an AR(p)-process satisfying the stationarity condition (2.3).
2.2 Moving Averages and Autoregressive Processes                                    59

                              Pp
Lemma 2.2.5. Let Yt = u=1 au Yt−u + εt be an AR(p)-process, which satisfies
the stationarity condition (2.3). Its autocorrelation function ρ then satisfies for
s = 1, 2, . . . the recursion
                                             p
                                             X
                                    ρ(s) =         au ρ(s − u),                  (2.4)
                                             u=1

known as Yule–Walker equations.


Proof. With µ := E(Y0 ) we have for t ∈ Z

                              p
                              X                               p
                                                               X   
                   Yt − µ =         au (Yt−u − µ) + εt − µ 1 −   au ,              (?)
                              u=1                                 u=1
                                            Pp
and taking expectations of (?) gives µ(1 − u=1 au ) = E(ε0 ) =: ν due to the
stationarity of (Yt ). By multiplying equation (?) with Yt−s − µ for s > 0 and
taking expectations again we obtain

          γ(s) = E((Yt − µ)(Yt−s − µ))
                   p
                   X
               =         au E((Yt−u − µ)(Yt−s − µ)) + E((εt − ν)(Yt−s − µ))
                   u=1
                   Xp
               =         au γ(s − u).
                   u=1

for the autocovariance function γ of (Yt ). The final equation follows from the fact
that Yt−s and εt are uncorrelated
                               Pfor s > 0. This is a consequence of Theorem 2.2.3,
by which almost surely Yt−s = u≥0 buP    εt−s−u with an absolutely summable causal
filter (bu ) and thus, Cov(Yt−s , εt ) = u≥0 bu Cov(εt−s−u , εt ) = 0, see Theorem
2.1.5. Dividing the above equation by γ(0) now yields the assertion.


Since ρ(−s) = ρ(s), equations (2.4) can be represented as
                                                               
           ρ(1)           1       ρ(1)     ρ(2) . . . ρ(p − 1)      a1
         ρ(2)  ρ(1)
                                1       ρ(1)         ρ(p  − 2) a2 
                                                                  
         ρ(3)  ρ(2)
               =               ρ(1)       1          ρ(p − 3) a3 
                                                                    
                                                                                 (2.5)
          ..           ..                       . ..     .
                                                            ..     .
                                                                   .. 
                                                                 
          .             .
           ρ(p)       ρ(p − 1) ρ(p − 2) ρ(p − 3) · · ·      1       ap

This matrix equation offers an estimator of the coefficients a1 , . . . , ap by replac-
ing the autocorrelations ρ(j) by their empirical counterparts r(j), 1 ≤ j ≤ p.
60                                                       Chapter 2. Models of Time Series

Equation (2.5) then formally becomes r = Ra, where r = (r(1), . . . , r(p))T ,
a = (a1 , . . . , ap )T and
                                                         
                             1   r(1)  r(2) · · · r(p − 1)
                           r(1)  1    r(1) · · · r(p − 2)
                     R :=                                .
                                                         
                              ..                      ..
                              .                       .  
                          r(p − 1) r(p − 2) r(p − 3) · · ·          1
If the p × p-matrix R is invertible, we can rewrite the formal equation r = Ra as
R−1 r = a, which motivates the estimator

                                         â := R−1 r                                 (2.6)

of the vector a = (a1 , . . . , ap )T of the coefficients.

The Partial Autocorrelation Coefficients

We have seen that the autocorrelation function ρ(k) of an MA(q)-process vanishes
for k > q, see Lemma 2.2.1. This is not true for an AR(p)-process, whereas
the partial autocorrelation coefficients will share this property. Note that the
correlation matrix
                                    
              P k : = Corr(Yi , Yj )
                                             1≤i,j≤k
                                                                           
                               1         ρ(1)          ρ(2)   . . . ρ(p − 1)
                        
                             ρ(1)        1            ρ(1)         ρ(p − 2)
                                                                            
                       =
                             ρ(2)       ρ(1)           1           ρ(p − 3)
                                                                                    (2.7)
                               ..                            ..        ..  
                                .                                .      .  
                         ρ(p − 1) ρ(p − 2) ρ(p − 3) · · ·               1
is positive semidefinite for any k ≥ 1. If we suppose that P k is positive definite,
then it is invertible, and the equation
                                             
                                  ρ(1)          ak1
                                 ..          .. 
                                 .  = Pk  .                                (2.8)
                                     ρ(k)               akk
has the unique solution
                                                      
                                    ak1             ρ(1)
                             ak :=  ...  = P −1
                                                   .. 
                                               k  . .
                                    

                                       akk                ρ(k)
The number akk is called partial autocorrelation coefficient at lag k, denoted by
α(k), k ≥ 1. Observe that for k ≥ p the vector (a1 , . . . , ap , 0, . . . , 0) ∈ Rk , with
2.2 Moving Averages and Autoregressive Processes                                              61

k − p zeros added to the vector of coefficients (a1 , . . . , ap ), is by the Yule–Walker
equations (2.4) a solution of the equation (2.8). Thus we have α(p) = ap , α(k) = 0
for k > p. Note that the coefficient α(k) also occurs as the coefficient of Yn−k
                                     Pk
in the best linear one-step forecast u=0 cu Yn−u of Yn+1 , see equation (2.17) in
Section 2.3.

If the empirical counterpart Rk of P k is invertible as well, then

                                        âk := R−1
                                                k rk ,


with r k := (r(1), . . . , r(k))T being an obvious estimate of ak . The k-th component


                                         α̂(k) := âkk                                     (2.9)

of âk = (âk1 , . . . , âkk ) is the empirical partial autocorrelation coefficient at lag k. It
can be utilized to estimate the order p of an AR(p)-process, since α̂(p) ≈ α(p) = ap
is different from zero, whereas α̂(k) ≈ α(k) = 0 for k > p should be close to zero.

Example 2.2.6. The Yule–Walker equations (2.4) for an AR(2)-process Yt =
a1 Yt−1 + a2 Yt−2 + εt are for s = 1, 2

                       ρ(1) = a1 + a2 ρ(1),        ρ(2) = a1 ρ(1) + a2

with the solutions

                                    a1                     a21
                         ρ(1) =          ,      ρ(2) =          + a2 .
                                  1 − a2                 1 − a2

and thus, the partial autocorrelation coefficients are

                       α(1) = ρ(1), α(2) = a2 , α(j) = 0,         j ≥ 3.

The recursion (2.4) entails the computation of ρ(s) for an arbitrary s from the two
values ρ(1) and ρ(2).

The following figure displays realizations of the AR(2)-process Yt = 0.6Yt−1 −
0.3Yt−2 + εt for 1 ≤ t ≤ 200, conditional on Y−1 = Y0 = 0. The random shocks
εt are iid standard normal. The corresponding partial autocorrelation function is
shown in Figure 2.2.4.
62                                             Chapter 2. Models of Time Series




        Figure 2.2.3. Realization of the AR(2)-process Yt = 0.6Yt−1 −
        0.3Yt−2 + εt , conditional on Y−1 = Y0 = 0. The εt , 1 ≤ t ≤ 200,
        are iid standard normal.

 ***      Program 2 _2_3  ***;
 TITLE1 ’ Realisation of an AR (2) - process ;

DATA data1 ;
  t = -1; y =0; OUTPUT ;
  t =0; y1 = y ; y =0; OUTPUT ;
  DO t =1 TO 200;
       y2 = y1 ;
       y1 = y ;
       y =0.6* y1 -0.3* y2 + RANNOR (1);
       OUTPUT ;
  END ;

SYMBOL1 C = GREEN V = DOT I = JOIN H =0.3;
AXIS1 LABEL =( ’t ’);
AXIS2 LABEL =( ’Y ’ H =1 ’t ’);
PROC GPLOT DATA = data1 ( WHERE =( t >0));
  PLOT y * t / HAXIS = AXIS1 VAXIS = AXIS2 ;
2.2 Moving Averages and Autoregressive Processes                                            63

 RUN ; QUIT ;
                                                                                                 

The two initial values of y are defined and     the values y2 (for yt−2 ), y1 and y are updated
stored in an observation by the OUTPUT state-   one after the other. The data set used by PROC
ment. The second observation contains an ad-    GPLOT again just contains the observations with
ditional value y1 for yt−1 . Within the loop    t > 0.




           Figure 2.2.4. Empirical partial autocorrelation function of the
           AR(2)-data in Figure 2.2.3.

 ***      Program 2 _2_4   ***;
 TITLE1 ’ Empirical partial autocorrelation function ’;
 TITLE2 ’ of simulated AR (2) - process data ’;
 * Note that this program requires
      data1 generated by program 2 _2_3 ;

PROC ARIMA DATA = data1 ( WHERE =( t >0));
  IDENTIFY VAR = y NLAG =50 OUTCOV = corr NOPRINT ;

SYMBOL1 C = GREEN V = DOT I = JOIN H =0.7;
AXIS1 LABEL =( ’k ’);
AXIS2 LABEL =( ’ a ( k ) ’);
PROC GPLOT DATA = corr ;
  PLOT PARTCORR * LAG / HAXIS = AXIS1 VAXIS = AXIS2 VREF =0;
64                                                       Chapter 2. Models of Time Series

 RUN ; QUIT ;
                                                                                                     

This program requires to be submitted to SAS       Like in Program 1 3 1 the procedure ARIMA
for execution within a joint session with Pro-     with the IDENTIFY statement is used to create a
gram 2 2 3, because it uses the temporary data     data set. Here we are interested in the variable
step data1 generated there. Otherwise you          PARTCORR containing the values of the empir-
have to add the block of statements to this pro-   ical partial autocorrelation function from the
gram concerning the data step.                     simulated AR(2)-process data. This variable is
                                                   plotted against the lag stored in variable LAG.




ARMA-Processes

Moving averages MA(q) and autoregressive AR(p)-processes are special cases of
so called autoregressive moving averages. Let (εt )t∈Z be a white noise, p, q ≥ 0
integers and a0 , . . . , ap , b0 , . . . , bq ∈ R. A real valued stochastic process (Yt )t∈Z
is said to be an autoregressive moving average process of order p, q, denoted by
ARMA(p, q), if it satisfies the equation

      Yt = a1 Yt−1 + a2 Yt−2 + . . . + ap Yt−p + εt + b1 εt−1 + . . . + bq εt−q .          (2.10)

An ARMA(p, 0)-process with p ≥ 1 is obviously an AR(p)-process, whereas an
ARMA(0, q)-process with q ≥ 1 is a moving average MA(q). The polynomials


                                A(z) := 1 − a1 z − . . . − ap z p                          (2.11)

and
                               B(z) := 1 + b1 z + . . . + bq z q ,                         (2.12)

are the characteristic polynomials of the autoregressive part and of the moving
average part of an ARMA(p, q)-process (Yt ), which we can represent in the form

               Yt − a1 Yt−1 − . . . − ap Yt−p = εt + b1 εt−1 + . . . + bq εt−q .

Denote by Zt the right-hand side of the above equation i.e., Zt := εt + b1 εt−1 +
. . . + bq εt−q . This is a MA(q)-process and, therefore, stationary by Theorem 2.1.6.
If all p roots of the equation A(z) = 1 − a1 z − . . . − ap z p = 0 are outside of the
unit circle, then we deduce from Theorem 2.1.11 that the filter c0 = 1, cu = −au ,
u = 1, . . . , p, cu = 0 elsewhere, has an absolutely summable causal inverse filter
(du )u≥0 . Consequently we obtain from the equation Zt = Yt −a1 Yt−1 −. . .−ap Yt−p
2.2 Moving Averages and Autoregressive Processes                                        65

and (2.1) that with b0 = 1, bw = 0 if w > q
               X                 X
        Yt =         du Zt−u =         du (εt−u + b1 εt−1−u + . . . + bq εt−q−u )
               u≥0               u≥0
                                 XX                          X X               
                             =             du bw εt−w−u =                  du bw εt−v
                                 u≥0 w≥0                     v≥0   u+w=v

                                 X      min(v,q)
                                           X                       X
                             =                      bw dv−w εt−v =:   αv εt−v
                                 v≥0      w=0                       v≥0


is the almost surely uniquely determined stationary solution of the ARMA(p, q)-
equation (2.10) for a given white noise (εt ) .

The condition that all p roots of the characteristic equation A(z) = 1 − a1 z −
a2 z 2 − . . . − ap z p = 0 of the ARMA(p, q)-process (Yt ) are outside of the unit circle
will again be referred to in the    P following as the stationarity condition (2.3). In
this case, the process Yt =          v≥0 αv εt−v , t ∈ Z, is the almost surely uniquely
determined stationary solution of the ARMA(p, q)-equation (2.10), which is called
causal.

The MA(q)-process Zt = εt + b1 εt−1 + . . . + bq εt−q is by definition invertible if
all q roots of the polynomial B(z) = 1 + b1 z + . . . + bq z q are outside of the unit
circle. Theorem 2.1.11 and equation (2.1) imply in this case the existence of an
absolutely summable causal filter (gu )u≥0 such that with a0 = −1
                 X                 X
          εt =         gu Zt−u =         gu (Yt−u − a1 Yt−1−u − . . . − ap Yt−p−u )
                 u≥0               u≥0

                      X  min(v,p)
                            X               
               = −                   aw gv−w Yt−v .
                      v≥0   w=0


In this case the ARMA(p, q)-process (Yt ) is said to be invertible.

The Autocovariance Function of an ARMA-Process

In order to deduce the autocovariance function of an ARMA(p, q)-process (Yt ),
which satisfies the stationarity condition (2.3), we compute at first the absolutely
                              Pmin(q,v)
summable
      P coefficients αv = w=0           bw dv−w , v ≥ 0, in the above representation
Yt = v≥0 αv εt−v . The characteristic polynomial D(z) of the absolutely sum-
mable causal filter (du )u≥0 coincides by Lemma 2.1.9 for 0 < |z| < 1 with 1/A(z),
where A(z) is given in (2.11). Thus we obtain with B(z) as given in (2.12) for
0 < |z| < 1
66                                                          Chapter 2. Models of Time Series



       A(z)(B(z)D(z)) = B(z)
                         X  p         X        Xq
                      ⇔ −      au z u      αv z v =   bw z w
                                     u=0              v≥0              w=0
                               X             X                          X
                           ⇔             −           au αv z w        =         bw z w
                               w≥0           u+v=w                        w≥0
                               X            w
                                             X                           X
                           ⇔             −         au αw−u z w        =         bw z w
                               w≥0           u=0                          w≥0
                               
                                α0 = 1
                               
                                        w
                               
                               
                               
                                     X
                               α −       a α                              for 1 ≤ w ≤ p
                                     w              u w−u = bw
                           ⇔                 u=1
                                                                                               (2.13)
                               
                               
                                            Xp

                                αw −
                               
                               
                                                  au αw−u = 0             for w > p.
                                             u=1

Example 2.2.7. For the ARMA(1, 1)-process Yt − aYt−1 = εt + bεt−1 with |a| < 1
we obtain from (2.13)
                α0 = 1, α1 − a = b, αw − aαw−1 = 0.                       w ≥ 2,
This implies α0 = 1, αw = aw−1 (b + a), w ≥ 1, and, hence,
                                          X
                        Yt = εt + (b + a)    aw−1 εt−w .
                                                    w≥1
                                             Pp      Pq
Theorem 2.2.8. Suppose that Yt = u=1 au Yt−u + v=0 bv εt−v , b0 := 1, is an
ARMA(p, q)-process, which satisfies the stationarity condition (2.3). Its autoco-
variance function γ then satisfies the recursion
                     p
                     X                              q
                                                    X
            γ(s) −         au γ(s − u) = σ 2              bv αv−s ,       0 ≤ s ≤ q,
                     u=1                            v=s
                     Xp
            γ(s) −         au γ(s − u) = 0,               s ≥ q + 1,                           (2.14)
                     u=1
                                                                                         P
where αv , v ≥ 0, are the coefficients in the representation Yt =                        v≥0 αv εt−v ,
which we computed in (2.13) and σ 2 is the variance of ε0 .

By the preceding result the autocorrelation function ρ of the ARMA(p, q)-process
(Yt ) satisfies
                             Xp
                      ρ(s) =     au ρ(s − u),    s ≥ q + 1,
                                u=1
2.2 Moving Averages and Autoregressive Processes                                                      67

whichP
     coincides with the autocorrelation function of the stationary AR(p)-process
       p
Xt = u=1 au Xt−u + εt , c.f. Lemma 2.2.5.


Proof of Theorem 2.2.8. Put µ := E(Y0 ) and ν := E(ε0 ). Then we have
                           p
                           X                       q
                                                   X
                Yt − µ =         au (Yt−u − µ) +         bv (εt−v − ν),           t ∈ Z.
                           u=1                     v=0
                 Pp            Pq
                   Ppau Yt−u +Pqv=0 bv εt−v , t ∈ Z. Taking expectations on both
Recall that Yt = u=1
sides we obtain µ = u=1 au µ+ v=0 bv ν, which yields now the equation displayed
above. Multiplying both sides with Yt−s − µ, s ≥ 0, and taking expectations, we
obtain
                               p
                               X                                q
                                                                X
           Cov(Yt−s , Yt ) =         au Cov(Yt−s , Yt−u ) +           bv Cov(Yt−s , εt−v ),
                               u=1                              v=0

which implies
                             p
                             X                     q
                                                   X
                    γ(s) −         au γ(s − u) =         bv Cov(Yt−s , εt−v ).
                             u=1                   v=0
                                         P
From the representation Yt−s =              w≥0 αw εt−s−w and Theorem 2.1.5 we obtain
                                                                  (
                               X                                   0                  if v < s
      Cov(Yt−s , εt−v ) =            αw Cov(εt−s−w , εt−v ) =
                               w≥0                                     σ 2 αv−s       if v ≥ s.

This implies
           p                     q
                                                                ( 2 Pq
           X                     X                               σ   v=s bv αv−s           if s ≤ q
 γ(s) −         au γ(s − u) =          bv Cov(Yt−s , εt−v ) =
          u=1                    v=s                              0                        if s > q,

which is the assertion.
Example 2.2.9. For the ARMA(1, 1)-process Yt − aYt−1 = εt + bεt−1 with |a| < 1
we obtain from Example 2.2.7 and Theorem 2.2.8 with σ 2 = Var(ε0 )

                 γ(0) − aγ(1) = σ 2 (1 + b(b + a)), γ(1) − aγ(0) = σ 2 b,

and thus
                        1 + 2ab + b2                            (1 + ab)(a + b)
                  γ(0) = σ 2         ,            γ(1) = σ 2                    .
                           1 − a2                                   1 − a2
For s ≥ 2 we obtain from (2.14)

                            γ(s) = aγ(s − 1) = · · · = as−1 γ(1).
68                                            Chapter 2. Models of Time Series




        Figure 2.2.5. Autocorrelation functions of ARMA(1, 1)-processes
        with a = 0.8/ − 0.8, b = 0.5/0/ − 0.5 and σ 2 = 1.

 ***      Program 2 _2_5     ***;
 TITLE1 ’ Autocorrelation functions
              of ARMA (1 ,1) - processes ’;

DATA data1 ;
 DO a = -0.8 , 0.8;
   DO b = -0.5 , 0 , 0.5;
       s =0; rho =1;
       q = COMPRESS ( ’( ’ || a || ’,’ || b || ’) ’); OUTPUT ;
       s =1; rho =(1+ a * b )*( a + b )/(1+2* a * b + b * b );
       q = COMPRESS ( ’( ’ || a || ’,’ || b || ’) ’); OUTPUT ;
       DO s =2 TO 10;
            rho = a * rho ;
            q = COMPRESS ( ’( ’ || a || ’,’ || b || ’) ’);
            OUTPUT ;
       END ;
   END ;
 END ;
2.2 Moving Averages and Autoregressive Processes                                                     69



 SYMBOL1 C = RED V = DOT I = JOIN H =0.7 L =1;
 SYMBOL2 C = YELLOW V = DOT I = JOIN H =0.7 L =2;
 SYMBOL3 C = BLUE V = DOT I = JOIN H =0.7 L =33;
 SYMBOL4 C = RED V = DOT I = JOIN H =0.7 L =3;
 SYMBOL5 C = YELLOW V = DOT I = JOIN H =0.7 L =4;
 SYMBOL6 C = BLUE V = DOT I = JOIN H =0.7 L =5;
 AXIS1 LABEL =( F = CGREEK ’r ’ F = COMPLEX ’( k ) ’);
 AXIS2 LABEL =( ’ lag k ’) MINOR = NONE ;
 LEGEND1 LABEL =( ’( a , b )= ’) SHAPE = SYMBOL (10 ,0.8);
 PROC GPLOT DATA = data1 ;
   PLOT rho * s = q / VAXIS = AXIS1 HAXIS = AXIS2 LEGEND = LEGEND1 ;
 RUN ; QUIT ;
                                                                    

In the data step the values of the autocor-           the rest up to s=10 a loop is used for a recursive
relation function belonging to an ARMA(1,1)           computation. For the COMPRESS statement see
process are calculated for two different values       Program 1 1 3.
of a, the coefficient of the AR(1)-part, and
three different values of b, the coefficient of the   The second part of the program uses PROC
M A(1)-part. Pure AR(1)–processes result for          GPLOT to plot the autocorrelation function, us-
the value b=0. For the arguments (lags) s=0           ing known statements and options to customize
and s=1 the computation is done directly, for         the output.




ARIMA-Processes

Suppose that the time series (Yt ) has a polynomial trend of degree d. Then
we can eliminate this trend by considering the process (∆d Yt ), obtained by d
times differencing as described in Section 1.2. If the filtered process (∆d Yd ) is an
ARMA(p, q)-process satisfying the stationarity condition (2.3), the original process
(Yt ) is said to be an autoregressive integrated moving average of order p, d, q,
denoted by ARIMA(p, d, q). In this case constants a1 , . . . , ap , b0 = 1, b1 , . . . , bq ∈ R
exist such that
                                p
                                X                     q
                                                      X
                     ∆d Yt =          au ∆d Yt−u +          bw εt−w ,       t ∈ Z,
                                u=1                   w=0

where (εt ) is a white noise.

Example 2.2.10. An ARIMA(1, 1, 1)-process (Yt ) satisfies

                           ∆Yt = a∆Yt−1 + εt + bεt−1 ,                  t ∈ Z,
70                                                   Chapter 2. Models of Time Series

where |a| < 1, b 6= 0 and (εt ) is a white noise, i.e.,

                Yt − Yt−1 = a(Yt−1 − Yt−2 ) + εt + bεt−1 ,          t ∈ Z.

This implies Yt = (a + 1)Yt−1 − aYt−2 + εt + bεt−1 .

A random walk Xt = Xt−1 + εt is obviously an ARIMA(0, 1, 0)-process.


Consider Yt = St + Rt , t ∈ Z, where the random component (Rt ) is a stationary
process and the seasonal component (St ) is periodic of length s, i.e., St = St+s =
St+2s = . . . for t ∈ Z. Then the process (Yt ) is in general not stationary, but Yt∗ :=
Yt − Yt−s is. If this seasonally adjusted process (Yt∗ ) is an ARMA(p, q)-process
satisfying the stationarity condition (2.3), then the original process (Yt ) is called
a seasonal ARMA(p, q)-process with period length s, denoted by SARMAs (p, q).
One frequently encounters a time series with a trend as well as a periodic seasonal
component. A stochastic process (Yt ) with the property that (∆d (Yt − Yt−s )) is
an ARMA(p, q)-process is, therefore, called a SARIMAs (p, d, q)-process. This is a
quite common assumption in practice.

Cointegration

In the sequel we will frequently use the notation that a time series (Yt ) is I(d),
d = 0, 1, if the sequence of differences (∆d Yt ) of order d is a stationary process.
By the difference ∆0 Yt of order zero we denote the undifferenced process Yt , t ∈ Z.

Suppose that the two time series (Yt ) and (Zt ) satisfy

                     Yt = aWt + εt ,    Zt = W t + δ t ,     t ∈ Z,

for some real number a 6= 0, where (Wt ) is I(1), and (εt ), (δt ) are uncorrelated
white noise processes, i.e., Cov(εt , δs ) = 0, t, s ∈ Z.

Then (Yt ) and (Zt ) are both I(1), but

                        Xt := Yt − aZt = εt − aδt ,        t ∈ Z,

is I(0).

The fact that the combination of two nonstationary series yields a stationary
process arises from a common component (Wt ), which is I(1). More generally,
two I(1) series (Yt ), (Zt ) are said to be cointegrated , if there exist constants
µ, α1 , α2 with α1 , α2 different from 0, such that the process

                          Xt = µ + α1 Yt + α2 Zt ,         t∈Z

is I(0). Without loss of generality, we can choose α1 = 1 in this case.
2.2 Moving Averages and Autoregressive Processes                                   71

Such cointegrated time series are often encountered in macroeconomics (Granger
(1981), Engle and Granger (1987)). Consider, for example, prices for the same
commodity in different parts of a country. Principles of supply and demand, along
with the possibility of arbitrage, means that, while the process may fluctuate more-
or-less randomly, the distance between them will, in equilibrium, be relatively
constant (typically about zero).

The link between cointegration and error correction can vividly be described by the
humorous tale of the drunkard and his dog, c.f. Murray (1994). In the same way
a drunkard seems to follow a random walk an unleashed dog wanders aimlessly.
We can, therefore, model their ways by random walks

                                Yt = Yt−1 + εt and
                                Zt = Zt−1 + δt ,

where the individual single steps (εt ), (δt ) of man and dog are uncorrelated white
noise processes. Random walks are not stationary, since their variances increase,
and so both processes (Yt ) and (Zt ) are not stationary.

And if the dog belongs to the drunkard? We assume the dog to be unleashed and
thus, the distance Yt − Zt between the drunk and his dog is a random variable.
It seems reasonable to assume that these distances form a stationary process, i.e.,
that (Yt ) and (Zt ) are cointegrated with constants α1 = 1 and α2 = −1.

We model the cointegrated walks above more tritely by assuming the existence of
constants c, d ∈ R such that

                      Yt − Yt−1 = εt + c(Yt−1 − Zt−1 ) and
                      Zt − Zt−1 = δt + d(Yt−1 − Zt−1 ).

The additional terms on the right-hand side of these equations are the error cor-
rection terms.

Cointegration requires that both variables in question be I(1), but that a linear
combination of them be I(0). This means that the first step is to figure out if the
series themselves are I(1), typically by using unit root tests. If one or both are not
I(1), cointegration is not an option.

Whether two processes (Yt ) and (Zt ) are cointegrated can be tested by means of
a linear regression approach. This is based on the cointegration regression

                                Yt = β0 + β1 Zt + εt ,

where (εt ) is a stationary process and β0 , β1 ∈ R are the cointegration constants.
72                                                        Chapter 2. Models of Time Series

One can use the ordinary least squares estimates β̂0 , β̂1 of the target parameters
β0 , β1 , which satisfy


             n 
             X                         2                n 
                                                         X                       2
                   Yt − β̂0 − β̂1 Zt        = min              Yt − β0 − β1 Zt        ,
                                             β0 ,β1 ∈R
             t=1                                         t=1



and one checks, whether the estimated residuals


                                 ε̂t = Yt − β̂0 − β̂1 Zt


are generated by a stationary process.

A general strategy for examining cointegrated series can now be summarized as
follows:



 (i) Determine that the two series are I(1).



 (ii) Compute ε̂t = Yt − β̂0 − β̂1 Zt using ordinary least squares.



(iii) Examine ε̂t for stationarity, using



        • the Durbin–Watson test


        • standard unit root tests such as Dickey–Fuller or augmented Dickey–
          Fuller.


Example 2.2.11. (Hog Data) Quenouille’s (1957) Hog Data list the annual hog
supply and hog prices in the U.S. between 1867 and 1948. Do they provide a
typical example of cointegrated series? A discussion can be found in Box and Tiao
(1977).
2.2 Moving Averages and Autoregressive Processes               73




          Figure 2.2.6. Hog Data: hog supply and hog prices.
74                                                         Chapter 2. Models of Time Series


 ***      Program 2 _2_6   ***;
 TITLE1 ’ Hog supply , hog prices and differences ’;
 TITLE2 ’ Hog Data (1867 -1948) ’;


DATA data1 ;
  INFILE ’c :\ data \ hogsuppl . txt ’;
  INPUT supply @@ ;

DATA data2 ;
  INFILE ’c :\ data \ hogprice . txt ’;
  INPUT price @@ ;


DATA data3 ;
  MERGE data1 data2 ;
  year = _N_ +1866;
  diff = supply - price ;


SYMBOL1 V = DOT C = GREEN               I = JOIN     H =0.5    W =1;
AXIS1 LABEL =( ANGLE =90                ’h o g       \ s u     p p l y ’);
AXIS2 LABEL =( ANGLE =90                ’h o g       \ p r     i c e s ’);
AXIS3 LABEL =( ANGLE =90                ’d i f       f e r     e n c e s ’);

GOPTIONS NODISPLAY ;
PROC GPLOT DATA = data3 GOUT = abb ;
  PLOT supply * year / VAXIS = AXIS1 ;
  PLOT price * year / VAXIS = AXIS2 ;
  PLOT diff * year / VAXIS = AXIS3 VREF =0;
RUN ;

 GOPTIONS DISPLAY ;
 PROC GREPLAY NOFS IGOUT = abb TC = SASHELP . TEMPLT ;
   TEMPLATE = V3 ;
   TREPLAY 1: GPLOT 2: GPLOT1 3: GPLOT2 ;
 RUN ; DELETE _ALL_ ; QUIT ;
                                                                                                       

The supply data and the price data read              graphics catalog abb. The horizontal line at the
in from two external files are merged in             zero level is plotted by the option VREF=0. The
data3. Year is an additional variable with val-      plots are put into a common graphic using PROC
ues 1867, 1868, . . . , 1932. By PROC GPLOT hog      GREPLAY and the template V3. Note that the la-
supply, hog prices and their differences diff        bels of the vertical axes are spaced out as SAS
are plotted in three different plots stored in the   sets their characters too close otherwise.
2.2 Moving Averages and Autoregressive Processes                                   75




Hog supply (=: yt ) and hog price (=: zt ) obviously increase in time t and do,
therefore, not seem to be realizations of stationary processes; nevertheless, as they
behave similarly, a linear combination of both might be stationary. In this case,
hog supply and hog price would be cointegrated.

This phenomenon can easily be explained as follows. A high price zt at time t is a
good reason for farmers to breed more hogs, thus leading to a large supply yt+1 in
the next year t + 1. This makes the price zt+1 fall with the effect that farmers will
reduce their supply of hogs in the following year t + 2. However, when hogs are in
short supply, their price zt+2 will rise etc. There is obviously some error correction
mechanism inherent in these two processes, and the observed cointegration helps
us to detect its existence.




The AUTOREG Procedure

Dependent Variable       supply


                 Ordinary Least Squares Estimates

SSE                    338324.258       DFE                        80
MSE                          4229       Root MSE             65.03117
SBC                    924.172704       AIC                919.359266
Regress R-Square           0.3902       Total R-Square         0.3902
Durbin-Watson              0.5839


        Phillips-Ouliaris
       Cointegration Test

Lags             Rho              Tau

   1        -28.9109        -4.0142


                                         Standard                    Approx
Variable          DF      Estimate          Error     t Value      Pr > |t|

Intercept          1      515.7978         26.6398       19.36       <.0001
76                                                  Chapter 2. Models of Time Series

price              1        0.2059            0.0288          7.15         <.0001



          Figure 2.2.7. Phillips–Ouliaris test for cointegration of Hog Data.
          (Using PROC AUTOREG with STATIONARITY=(PHILLIPS) option.)

 ***      Program 2 _2_7   ***;
 TITLE1 ’ Testing for cointegration ’;
 TITLE2 ’ Hog Data (1867 -1948) ’;


 PROC AUTOREG DATA = data3 ;
   MODEL supply = price / STATIONARITY =( PHILLIPS );
 RUN ; QUIT ;
                                                                                                 

The procedure AUTOREG (for autoregressive     STATIONARITY=(PHILLIPS) makes SAS calcu-
models) uses data3 from Program 2 2 6.        late the statistics of the Phillips–Ouliaris test
In the MODEL statement a regression from      for cointegration of order 1.
supply on price is defined and the option




The output of the above program contains some characteristics of the regression,
the Phillips-Ouliaris test statistics and the regression coefficients with their t-
ratios. The Phillips-Ouliaris test statistics need some further explanation.

The hypothesis of the Phillips–Ouliaris cointegration test is no cointegration. Un-
fortunately SAS does not provide the p-value, but only the values of the test
statistics denoted by RHO and TAU. Tables of critical values of these test statistics
can be found in Phillips and Ouliaris (1990). Note that in the original paper the
two test statistics are denoted by Ẑα and Ẑt . The hypothesis is to be rejected if
RHO or TAU are below the critical value for the desired type I level error α. For this
one has to differentiate between the following cases.


 (1) If the estimated cointegrating regression does not contain any intercept, i.e.
     β0 = 0, and none of the explanatory variables has a nonzero trend compo-
     nent, then use the following table for critical values of RHO and TAU. This is
     the so-called standard case.
            α       0.15    0.125      0.1       0.075       0.05     0.025       0.01
           RHO    -10.74   -11.57    -12.54     -13.81     -15.64    -18.88     -22.83
           TAU     -2.26    -2.35     -2.45      -2.58      -2.76     -3.05      -3.39
2.2 Moving Averages and Autoregressive Processes                                          77

 (2) If the estimated cointegrating regression contains an intercept, i.e. β0 6= 0,
     and none of the explanatory variables has a nonzero trend component, then
     use the following table for critical values of RHO and TAU. This case is referred
     to as demeaned.
            α       0.15     0.125        0.1        0.075       0.05    0.025     0.01
           RHO    -14.91    -15.93      -17.04      -18.48     -20.49   -23.81   -28.32
           TAU     -2.86     -2.96       -3.07       -3.20      -3.37    -3.64    -3.96

 (3) If the estimated cointegrating regression contains an intercept, i.e. β0 6= 0,
     and at least one of the explanatory variables has a nonzero trend component,
     then use the following table for critical values of RHO and TAU. This case is
     said to be demeaned and detrended.
            α       0.15     0.125        0.1        0.075       0.05    0.025     0.01
           RHO    -20.79    -21.81      -23.19      -24.75     -27.09   -30.84   -35.42
           TAU     -3.33     -3.42       -3.52       -3.65      -3.80    -4.07    -4.36

In our example with an arbitrary β0 and a visible trend in the investigated time
series, the RHO-value is −28.9109 and the TAU-value −4.0142. Both are smaller
than the critical values of −27.09 and −3.80 in the above table of the demeaned
and detrended case and thus, lead to a rejection of the null hypothesis of no
cointegration at the 5%-level.

For further information on cointegration we refer to Chapter 19 of the time series
book by Hamilton (1994).

ARCH and GARCH-Processes

In particular the monitoring of stock prices gave rise to the idea that the volatility
of a time series (Yt ) might not be a constant but rather a random variable, which
depends on preceding realizations. The following approach to model such a change
in volatility is due to Engle (1982).

We assume the multiplicative model
                                Yt = σt Zt ,          t ∈ Z,
where the Zt are independent and identically distributed random variables with
                       E(Zt ) = 0 and E(Zt2 ) = 1,             t ∈ Z.
The scale σt is supposed to be a function of the past p values of the series:
                                        p
                                        X
                           σt2 = a0 +              2
                                              aj Yt−j ,      t ∈ Z,
                                        j=1
78                                                   Chapter 2. Models of Time Series

where p ∈ {0, 1, . . .} and a0 > 0, aj ≥ 0, 1 ≤ j ≤ p − 1, ap > 0 are constants.

The particular choice p = 0 yields obviously a white noise model for (Yt ). Common
choices for the distribution of Zt are the standard normal distribution or the
(standardized) t-distribution, which in the nonstandardized form has the density
                                               −(m+1)/2
                                            x2
                                      
                        Γ((m + 1)/2)
             fm (x) :=          √       1+                ,    x ∈ R.
                        Γ(m/2) πm           m
The number m ≥ 1 is the degree of freedom of the t-distribution. The scale σt in
the above model is determined by the past observations Yt−1 , . . . , Yt−p , and the
innovation on this scale is then provided by Zt . We assume moreover that the
process (Yt ) is a causal one in the sense that Zt and Ys , s < t, are independent.
Some autoregressive structure is, therefore, inherent in the Pprocess  (Yt ). Condi-
                                                               p      2
tional on Yt−j = yt−j , 1 ≤ j ≤ p, the variance of Yt is a0 + j=1 aj yt−j and, thus,
the conditional variances of the process will generally be different. The process
Yt = σt Zt is, therefore, called an autoregressive and conditional heteroscedastic
process of order p, ARCH (p)-process for short.

If, in addition, the causal process (Yt ) is stationary, then we obviously have
                                E(Yt ) = E(σt ) E(Zt ) = 0
and
                σ 2 := E(Yt2 ) = E(σt2 ) E(Zt2 )
                                       X p                        p
                                                                  X
                                                  2
                               = a0 +      aj E(Yt−j ) = a0 + σ 2   aj ,
                                         j=1                         j=1

which yields
                                               a
                                   σ2 =        P0p        .
                                          1−     j=1 aj

A necessary
         Pp condition for the stationarity of the process (Yt ) is, therefore, the in-
equality j=1 aj < 1. Note, moreover, that the preceding arguments immediately
imply that the Yt and Ys are uncorrelated for different values of s and t, but they
are not independent.

The following lemma is crucial. It embeds the ARCH (p)-processes to a certain
extent into the class of AR(p)-processes, so that our above tools for the analysis
of autoregressive processes can be applied here as well.
Lemma 2.2.12. Let (Yt ) be a stationary and causal ARCH (p)-process with con-
stants a0 , a1 , . . . , ap . If the process of squared random variables (Yt2 ) is a station-
ary one, then it is an AR(p)-process:
                           Yt2 = a1 Yt−1
                                      2                 2
                                         + . . . + ap Yt−p + εt ,
2.2 Moving Averages and Autoregressive Processes                                        79

where (εt ) is a white noise with E(εt ) = a0 , t ∈ Z.


Proof. From the assumption that (Yt ) is an ARCH (p)-process we obtain
                    p
                    X
      εt := Yt2 −              2
                          aj Yt−j = σt2 Zt2 − σt2 + a0 = a0 + σt2 (Zt2 − 1),   t ∈ Z.
                    j=1

This implies E(εt ) = a0 and
            E((εt − a0 )2 ) = E(σt4 ) E((Zt2 − 1)2 )
                                        Xp            
                                                  2
                            = E (a0 +        aj Yt−j )2 E((Zt2 − 1)2 ) =: c,
                                                j=1

independent of t by the stationarity of (Yt2 ). For h ∈ N the causality of (Yt ) finally
implies
          E((εt − a0 )(εt+h − a0 )) = E(σt2 σt+h
                                             2
                                                 (Zt2 − 1)(Zt+h
                                                            2
                                                                − 1))
                                          2 2       2          2
                                    = E(σt σt+h (Zt − 1)) E(Zt+h − 1) = 0
i.e., (εt ) is a white noise with E(εt ) = a0 .


The process (Yt2 ) satisfies,
                     Pp       therefore, the stationarity condition (2.3) if all p roots
of the equation 1 − j=1 aj z j = 0 are outside of the unit circle. Hence, we can
estimate the order p using an estimate as in (2.9) of the partial autocorrelation
function of (Yt2 ). The Yule–Walker equations provide us, for example, with an
estimate of the coefficients a1 , . . . , ap , which then can be utilized to estimate the
expectation a0 of the error εt .

Note that conditional on Yt−1 = yt−1 , . . . , Yt−p = yt−p , the distribution of Yt =
σt Zt is a normal one if the Zt are normally distributed. In this case it is possible
to write down explicitly the joint density of the vector (Yp+1 , . . . , Yn ), conditional
on Y1 = y1 , . . . , Yp = yp (Exercise 36). A numerical maximization of this density
with respect to a0 , a1 , . . . , ap then leads to a maximum likelihood estimate of the
vector of constants; see also Section 2.3.

A generalized ARCH -process, GARCH (p, q) for short (Bollerslev (1986)), adds an
autoregressive structure to the scale σt by assuming the representation
                                          p
                                          X                 q
                                                            X
                             σt2 = a0 +              2
                                                aj Yt−j +             2
                                                                  bk σt−k ,
                                          j=1               k=1

where the constants bk are nonnegative. The set of parameters aj , bk can again
be estimated by conditional maximum likelihood as before if a parametric model
for the distribution of the innovations Zt is assumed.
80                                                Chapter 2. Models of Time Series

Example 2.2.13. (Hongkong Data). The daily Hang Seng closing index was
recorded between July 16th, 1981 and September 30th, 1983, leading to a total
amount of 552 observations pt . The daily log returns are defined as




                             yt := log(pt ) − log(pt−1 ),




where we now have a total of n = 551 observations. The expansion log(1 + ε) ≈ ε
implies that




                                  pt − pt−1  pt − pt−1
                      yt = log 1 +            ≈          ,
                                      pt−1        pt−1




provided that pt−1 and pt are close to each other. In this case we can interpret the
return as the difference of indices on subsequent days, relative to the initial one.




We use an ARCH (3) model for the generation of yt , which seems to be a plausible
choice by the partial autocorrelations plot. If one assumes t-distributed innova-
tions Zt , SAS estimates the distribution’s degrees of freedom and displays the
reciprocal in the TDFI-line, here m = 1/0.1780 = 5.61 degrees of freedom. Fol-
lowing we obtain the estimates a0 = 0.000214, a1 = 0.147593, a2 = 0.278166
and a3 = 0.157807. The SAS output also contains some general regression model
information from an ordinary least squares estimation approach, some specific in-
formation for the (G)ARCH approach and as mentioned above the estimates for
the ARCH model parameters in combination with t ratios and approximated p-
values. The following plots show the returns of the Hang Seng index, their squares,
the pertaining partial autocorrelation function and the parameter estimates.
2.2 Moving Averages and Autoregressive Processes                         81




       Figure 2.2.8. Log returns of Hang Seng index and their squares.
82                                                        Chapter 2. Models of Time Series


 ***      Program 2 _2_8   ***;
 TITLE1 ’ Daily log returns and their squares ’;
 TITLE2 ’ Hongkong Data ’;

DATA data1 ;
  INFILE ’c :\ data \ hongkong . txt ’;
  INPUT p ;
  t = _N_ ;
  y = DIF ( LOG ( p ));
  y2 = y **2;

SYMBOL1 C = RED V = DOT H =0.5 I = JOIN L =1;
AXIS1 LABEL =( ’y ’ H =1 ’t ’) ORDER =( -.12 TO .10 BY .02);
AXIS2 LABEL =( ’ y2 ’ H =1 ’t ’);
GOPTIONS NODISPLAY ;
PROC GPLOT DATA = data1 GOUT = abb ;
  PLOT y * t / VAXIS = AXIS1 ;
  PLOT y2 * t / VAXIS = AXIS2 ;
RUN ;

 GOPTIONS DISPLAY ;
 PROC GREPLAY NOFS IGOUT = abb TC = SASHELP . TEMPLT ;
   TEMPLATE = V2 ;
   TREPLAY 1: GPLOT 2: GPLOT1 ;
 RUN ; DELETE _ALL_ ; QUIT ;
                                                                                                     




In the DATA step the observed values of the         After defining different axis labels, two plots
Hang Seng closing index are read into the vari-     are generated by two PLOT statements in PROC
able p from an external file. The time index        GPLOT, but they are not displayed. By means of
variable t uses the SAS-variable N , and the        PROC GREPLAY the plots are merged vertically in
log transformed and differenced values of the       one graphic.
index are stored in the variable y, their squared
values in y2.
2.2 Moving Averages and Autoregressive Processes                          83




                            Autoreg Procedure

Dependent Variable = Y

                      Ordinary Least Squares Estimates

              SSE          0.265971     DFE              551
              MSE          0.000483     Root MSE    0.021971
              SBC          -2643.82     AIC         -2643.82
              Reg Rsq        0.0000     Total Rsq     0.0000
              Durbin-Watson 1.8540

NOTE: No intercept term is used. R-squares are redefined.


                             GARCH Estimates

              SSE            0.265971     OBS             551
              MSE            0.000483     UVAR       0.000515
              Log L          1706.532     Total Rsq    0.0000
              SBC             -3381.5     AIC        -3403.06
              Normality Test 119.7698     Prob>Chi-Sq 0.0001


   Variable      DF         B Value     Std Error   t Ratio Approx Prob
84                                                      Chapter 2.      Models of Time Series

     ARCH0            1         0.000214          0.000039       5.444          0.0001
     ARCH1            1         0.147593            0.0667       2.213          0.0269
     ARCH2            1         0.278166            0.0846       3.287          0.0010
     ARCH3            1         0.157807            0.0608       2.594          0.0095
     TDFI             1         0.178074            0.0465       3.833          0.0001



             Figure 2.2.9. Partial autocorrelations of squares of log returns of
             Hang Seng index and parameter estimates in the ARCH (3) model
             for stock returns.


 ***      Program 2 _2_9      ***;
 TITLE1 ’ ARCH (3) - model ’;
 TITLE2 ’ Hongkong Data ’;
 * Note that this program needs data1
           generated by program 2 _2_8 ;

PROC ARIMA DATA = data1 ;
  IDENTIFY VAR = y2 NLAG =50 OUTCOV = data2 ;

SYMBOL1 C = RED V = DOT H =0.5 I = JOIN ;
PROC GPLOT DATA = data2 ;
  PLOT partcorr * lag / VREF =0;
RUN ;

 PROC AUTOREG DATA = data1 ;
   MODEL y = / NOINT GARCH =( q =3) DIST = T ;
 RUN ;
                                                                                                     


To identify the order of a possibly underlying     PROC AUTOREG is used to analyze the ARCH(3)
ARCH process for the daily log returns of the      model for the daily log returns. The MODEL
Hang Seng closing index, the empirical par-        statement specifies the dependent variable y.
tial autocorrelations of their squared values,     The option NOINT suppresses an intercept pa-
which are stored in the variable y2 of the data    rameter, GARCH=(q=3) selects the ARCH(3)
set data1 in Program 2 2 8, are calculated by      model and DIST=T determines a t distribution
means of PROC ARIMA and the IDENTIFY state-        for the innovations Zt in the model equation.
ment. The subsequent procedure GPLOT dis-          Note that, in contrast to our notation, SAS uses
plays these partial autocorrelations. A hori-      the letter q for the ARCH model order.
zontal reference line helps to decide whether a
value is substantially different from 0.
2.3 The Box–Jenkins Program                                                              85

2.3      Specification of ARMA-Models: The Box–
         Jenkins Program

The aim of this section is to fit a time series model (Yt )t∈Z to a given set of data
y1 , . . . , yn collected in time t. We suppose that the data y1 , . . . , yn are (possibly)
variance-stabilized as well as trend or seasonally adjusted. We assume that they
were generated by clipping Y1 , . . . , Yn from an ARMA(p, q)-process (Yt )t∈Z , which
we will fit to the data    P in the following. As noted in Section 2.2, we could also
fit the model Yt = v≥0 αv εt−v to the data, where (εt ) is a white noise. But
then we would have to determine infinitely many parameters αv , v ≥ 0. By the
principle of parsimony it seems, however, reasonable to fit only the finite number
of parameters of an ARMA(p, q)-process.

The Box–Jenkins program consists of four steps:


1. Order selection: Choice of the parameters p and q.

2. Estimation of coefficients: The coefficients a1 , . . . , ap and b1 , . . . , bq are es-
     timated.

3. Diagnostic check: The fit of the ARMA(p, q)-model with the estimated co-
     efficients is checked.

4. Forecasting: The prediction of future values of the original process.


The four steps are discussed in the following.

Order Selection

The order q of a moving average MA(q)-process can be estimated by means of the
empirical autocorrelation function r(k) i.e., by the correlogram. Lemma 2.2.1 (iv)
shows that the autocorrelation function ρ(k) vanishes for k ≥ q + 1. This suggests
to choose the order q such that r(q) is clearly different from zero, whereas r(k)
for k ≥ q + 1 is quite close to zero. This, however, is obviously a rather vague
selection rule.

The order p of an AR(p)-process can be estimated in an analogous way using
the empirical partial autocorrelation function α̂(k), k ≥ 1, as defined in (2.9).
Since α̂(p) should be close to the p-th coefficient ap of the AR(p)-process, which
is different from zero, whereas α̂(k) ≈ 0 for k > p, the above rule can be applied
again with r replaced by α̂.
86                                                     Chapter 2.     Models of Time Series

The choice of the orders p and q of an ARMA(p, q)-process is a bit more challenging.
In this case one commonly takes the pair (p, q), minimizing some function, which
                           2
is based on an estimate σ̂p,q of the variance of ε0 . Popular functions are Akaike’s
Information Criterion

                                                2         p+q+1
                            AIC (p, q) := log(σ̂p,q )+2         ,
                                                           n+1
the Bayesian Information Criterion

                                            2        (p + q) log(n + 1)
                        BIC (p, q) := log(σ̂p,q )+
                                                           n+1
and the Hannan-Quinn Criterion

                               2          2(p + q)c log(log(n + 1))
             HQ(p, q) := log(σ̂p,q )+                                   with c > 1.
                                                    n+1
AIC and BIC are discussed in Section 9.3 of Brockwell and Davis (1991) for
Gaussian processes (Yt ), where the joint distribution of an arbitrary vector (Yt1 , . . . , Ytk )
with t1 < . . . < tk is multivariate normal, see below. For the HQ-criterion we refer
                                                                    2
to Hannan and Quinn (1979). Note that the variance estimate σ̂p,q       will in general
become arbitrarily small as p+q increases. The additive terms in the above criteria
serve, therefore, as penalties for large values, thus helping to prevent overfitting
of the data by choosing p and q too large.

Estimation of Coefficients

Suppose we fixed the order p and q of an ARMA(p, q)-process (Yt )t∈Z , with
Y1 , . . . , Yn now modelling the data y1 , . . . , yn . In the next step we will derive
estimators of the constants a1 , . . . , ap , b1 , . . . , bq in the model

          Yt = a1 Yt−1 + . . . + ap Yt−p + εt + b1 εt−1 + . . . + bq εt−q ,     t ∈ Z.


The Gaussian Model: Maximum Likelihood Estimator

We assume first that (Yt ) is a Gaussian process and thus, the joint distribution of
(Y1 , . . . , Yn ) is a n-dimensional normal distribution
                                           Z s1     Z sn
          P {Yi ≤ si , i = 1, . . . , n} =      ...      ϕµ,Σ (x1 , . . . , xn ) dxn . . . dx1
                                           −∞      −∞

for arbitrary s1 , . . . , sn ∈ R. Here

     ϕµ,Σ (x1 , . . . , xn )
                       1          1
                                                               −1                         T
                                                                                            
      =                      exp  −   ((x1 , . . . , xn ) − µ)Σ   ((x1 , . . . , xn ) − µ)
         (2π)n/2 (det Σ)1/2         2
2.3 The Box–Jenkins Program                                                                          87

for arbitrary x1 , . . . , xn ∈ R is the density of the n-dimensional normal distri-
bution with mean vector µ = (µ, . . . , µ)T ∈ Rn and covariance matrix Σ =
(γ(i − j))1≤i,j≤n denoted by N (µ, Σ), where µ = E(Y0 ) and γ is the autoco-
variance function of the stationary process (Yt ).

The number ϕµ,Σ (x1 , . . . , xn ) reflects the probability that the random vector
(Y1 , . . . , Yn ) realizes close to (x1 , . . . , xn ). Precisely, we have for ε ↓ 0
    P {Yi ∈ [xi − ε, xi + ε], i = 1, . . . , n}
        Z x1 +ε     Z xn +ε
     =          ...         ϕµ,Σ (z1 , . . . , zn ) dzn . . . dz1 ≈ 2n εn ϕµ,Σ (x1 , . . . , xn ).
           x1 −ε        xn −ε

The likelihood principle is the fact that a random variable tends to attain its
most likely value and thus, if the vector (Y1 , . . . , Yn ) actually attained the value
(y1 , . . . , yn ), the unknown underlying mean vector µ and covariance matrix Σ
ought to be such that ϕµ,Σ (y1 , . . . , yn ) is maximized. The computation of these
parameters leads to the maximum likelihood estimator of µ and Σ.

We assumeP   that the process (Yt ) satisfies the stationarity condition (2.3), in which
case Yt = v≥0 αv εt−v , t ∈ Z, is invertible, where (εt ) is a white noise and the
coefficients αv depend only on a1 , . . . , ap and b1 , . . . , bq . Consequently we have for
s≥0
                               XX                                          X
        γ(s) = Cov(Y0 , Ys ) =          αv αw Cov(ε−v , εs−w ) = σ 2          αv αs+v .
                                    v≥0 w≥0                                          v≥0

The matrix
                                           Σ0 := σ −2 Σ,
therefore, depends only on a1 , . . . , ap and b1 , . . . , bq . We can write now the density
ϕµ,Σ (x1 , . . . , xn ) as a function of ϑ := (σ 2 , µ, a1 , . . . , ap , b1 , . . . , bq ) ∈ Rp+q+2 and
(x1 , . . . , xn ) ∈ Rn
    p(x1 , . . . , xn |ϑ) := ϕµ,Σ (x1 , . . . , xn )
                                                            1                      
                          = (2πσ 2 )−n/2 (det Σ0 )−1/2 exp − 2 Q(ϑ|x1 , . . . , xn ) ,
                                                            2σ
where
                                                                  −1
            Q(ϑ|x1 , . . . , xn ) := ((x1 , . . . , xn ) − µ)Σ0        ((x1 , . . . , xn ) − µ)T
is a quadratic function. The likelihood function pertaining to the outcome (y1 , . . .,
yn ) is
                         L(ϑ|y1 , . . . , yn ) := p(y1 , . . . , yn |ϑ).
A parameter ϑ̂ maximizing the likelihood function
                           L(ϑ̂|y1 , . . . , yn ) = sup L(ϑ|y1 , . . . , yn ),
                                                     ϑ
88                                                            Chapter 2.         Models of Time Series

is then a maximum likelihood estimator of ϑ.

Due to the strict monotonicity of the logarithm, maximizing the likelihood function
is in general equivalent to the maximization of the loglikelihood function

                            l(ϑ|y1 , . . . , yn ) = log L(ϑ|y1 , . . . , yn ).

The maximum likelihood estimator ϑ̂ therefore satisfies

       l(ϑ̂|y1 , . . . , yn ) = sup l(ϑ|y1 , . . . , yn )
                                 ϑ
                                                                                  !
                             n             1               1
                = sup       − log(2πσ 2 ) − log(det Σ0 ) − 2 Q(ϑ|y1 , . . . , yn ) .
                   ϑ         2             2              2σ

The computation of a maximizer is a numerical and usually computer intensive
problem.

Example 2.3.1. The AR(1)-process Yt = aYt−1 + εt with |a| < 1 has by Example
2.2.4 the autocovariance function
                                                     as
                                  γ(s) = σ 2              ,     s ≥ 0,
                                                   1 − a2

and thus,
                                                              a2     . . . an−1
                                                                               
                                              1        a
                                1            a        1      a            an−2 
                      Σ0 =                                                   ..  .
                                                                               
                                              ..                     ..
                              1 − a2 
                                     
                                               .                         .    . 
                                      an−1 an−2 an−3 . . .                  1

The inverse matrix is
                                                        
                          1   −a      0     0   ...   0
                        −a 1 + a2   −a     0         0 
                                         2
                                                        
                         0   −a   1 + a −a           0 
                  0 −1
                 Σ     = .                              .
                                                        
                                           ..         ..
                         ..                  .        . 
                                                        
                         0   ...          −a 1 + a2 −a 
                          0    0     ···         0   −a 1

                                              −1                −1
Check that the determinant of Σ0       is det(Σ0 ) = 1 − a2 = 1/ det(Σ0 ), see
Exercise 40. If (Yt ) is a Gaussian process, then the likelihood function of ϑ =
(σ 2 , µ, a) is given by
                                                            1                      
     L(ϑ|y1 , . . . , yn ) = (2πσ 2 )−n/2 (1 − a2 )1/2 exp − 2 Q(ϑ|y1 , . . . , yn ) ,
                                                            2σ
2.3 The Box–Jenkins Program                                                                                            89

where

  Q(ϑ|y1 , . . . , yn )
                                        −1
    = ((y1 , . . . , yn ) − µ)Σ0             ((y1 , . . . , yn ) − µ)T
                                                           n−1
                                                           X                              n−1
                                                                                          X
    = (y1 − µ)2 + (yn − µ)2 + (1 + a2 )                          (yi − µ)2 − 2a                  (yi − µ)(yi+1 − µ).
                                                           i=2                             i=1



A Nonparametric Approach: Least Squares

If E(εt ) = 0, then

                     Ŷt = a1 Yt−1 + . . . + ap Yt−p + b1 εt−1 + . . . + bq εt−q

would obviously be a reasonable one-step forecast of the ARMA(p, q)-process

                  Yt = a1 Yt−1 + . . . + ap Yt−p + εt + b1 εt−1 + . . . + bq εt−q ,

based on Yt−1 , . . . , Yt−p and εt−1 , . . . , εt−q . The prediction error is given by the
residual
                                        Yt − Ŷt = εt .
Suppose that ε̂t is an estimator of εt , t ≤ n, which depends on the choice of
constants a1 , . . . , ap , b1 , . . . , bq and satisfies the recursion

                  ε̂t = yt − a1 yt−1 − . . . − ap yt−p − b1 ε̂t−1 − . . . − bq ε̂t−q .

The function

            S 2 (a1 , . . . , ap , b1 , . . . , bq )
                   X n
             =               ε̂2t
                   t=−∞
                    Xn
              =            (yt − a1 yt−1 − . . . − ap yt−p − b1 ε̂t−1 − . . . − bq ε̂t−q )2
                   t=−∞

is the residual sum of squares and the least squares approach suggests to estimate
the underlying set of constants by minimizers a1 , . . . , ap , b1 , . . . , bq of S 2 . Note
that the residuals ε̂t and the constants are nested.

We have no observation yt available for t ≤ 0. But from the assumption E(εt ) = 0
and thus E(Yt ) = 0, it is reasonable to backforecast yt by zero and to put ε̂t := 0
for t ≤ 0, leading to
                                                                                n
                                                                                X
                                   S 2 (a1 , . . . , ap , b1 , . . . , bq ) =         ε̂2t .
                                                                                t=1
90                                                     Chapter 2.    Models of Time Series

The estimated residuals ε̂t can then be computed from the recursion

             ε̂1 = y1
             ε̂2 = y2 − a1 y1 − b1 ε̂1
             ε̂3 = y3 − a1 y2 − a2 y1 − b1 ε̂2 − b2 ε̂1
                 ..
                  .
             ε̂j = yj − a1 yj−1 − . . . − ap yj−p − b1 ε̂j−1 − . . . − bq ε̂j−q ,

where j now runs from max{p, q} to n.

The coefficients a1 , . . . , ap of a pure AR(p)-process can be estimated directly, using
the Yule-Walker equations as described in (2.6).

Diagnostic Check

Suppose that the orders p and q as well as the constants a1 , . . . , ap , b1 , . . . , bq have
been chosen in order to model an ARMA(p, q)-process underlying the data. The
Portmanteau-test of Box and Pierce (1970) checks, whether the estimated residuals
ε̂t , t = 1, . . . , n, behave approximately like realizations from a white noise process.
To this end one considers the pertaining empirical autocorrelation function
                               Pn−k
                                j=1 (ε̂j − ε̄)(ε̂j+k − ε̄)
                    r̂ε (k) :=    Pn               2
                                                           , k = 1, . . . , n − 1,
                                     j=1 (ε̂j − ε̄)
                       Pn
where ε̄ = n−1 j=1 ε̂j , and checks, whether the values r̂ε (k) are sufficiently close
to zero. This decision is based on
                                                K
                                                X
                                   Q(K) := n          r̂ε2 (k),
                                                k=1

which follows asymptotically for n → ∞ a χ2 -distribution with K −p−q degrees of
freedom if (Yt ) is actually an ARMA(p, q)-process (see e.g. Section 9.4 in Brockwell
and Davis (1991)). The parameter K must be chosen such that the sample size
n − k in r̂ε (k) is large enough to give a stable estimate of the autocorrelation
function. The ARMA(p, q)-model is rejected if the p-value 1 − χ2K−p−q (Q(K)) is
too small, since in this case the value Q(K) is unexpectedly large. By χ2K−p−q we
denote the distribution function of the χ2 -distribution with K − p − q degrees of
freedom. To accelerate the convergence to the χ2K−p−q distribution under the null
hypothesis of an ARMA(p, q)-process, one often replaces the Box–Pierce statistic
Q(K) by the Box–Ljung statistic (Ljung and Box (1978))
                        K          1/2        !2            K
          ∗
                       X       n+2                            X    1
        Q (K) := n                       r̂ε (k)   = n(n + 2)          r̂2 (k)
                               n−k                               n−k ε
                       k=1                                          k=1
2.3 The Box–Jenkins Program                                                                         91

with weighted empirical autocorrelations.

Forecasting
We want to determine weights c∗0 , . . . , c∗n−1 ∈ R such that for h ∈ N
                                !2                                                        !2 
                   n−1
                   X                                                            n−1
                                                                                X
   E  Yn+h −            c∗u Yn−u  =           min           E  Yn+h −              cu Yn−u  .
                                            c0 ,...,cn−1 ∈R
                   u=0                                                          u=0

                Pn−1
Then Ŷn+h := u=0 c∗u Yn−u with minimum mean squared error is said to be a
best (linear) h-step forecast of Yn+h , based on Y1 , . . . , Yn . The following result
provides a sufficient condition for the optimality of weights.

Lemma 2.3.2. Let (Yt ) be an arbitrary stochastic process with finite second mo-
ments. If the weights c∗0 , . . . , c∗n−1 have the property that

                                   n−1
                                                    !!
                                   X
                E Yi      Yn+h −         c∗u Yn−u        = 0,           i = 1, . . . , n,      (2.15)
                                   u=0

                Pn−1 ∗
then Ŷn+h :=    u=0 cu Yn−u is a best h-step forecast of Yn+h .


                         Pn−1
Proof. Let Ỹn+h :=       u=0 cu Yn−u be an arbitrary forecast, based on Y1 , . . . , Yn .
Then we have

         E((Yn+h − Ỹn+h )2 )
          = E((Yn+h − Ŷn+h + Ŷn+h − Ỹn+h )2 )
                                            n−1
                                            X
          = E((Yn+h − Ŷn+h )2 ) + 2              (c∗u − cu ) E(Yn−u (Yn+h − Ŷn+h ))
                                            u=0

                    + E((Ŷn+h − Ỹn+h )2 )
          = E((Yn+h − Ŷn+h )2 ) + E((Ŷn+h − Ỹn+h )2 )
          ≥ E((Yn+h − Ŷn+h )2 ).




Suppose that (Yt ) is a stationary process with mean zero and autocorrelation
function ρ. The equations (2.15) are then of Yule-Walker type
                                n−1
                                X
                  ρ(h + s) =          c∗u ρ(s − u),           s = 0, 1, . . . , n − 1,
                                u=0
92                                                      Chapter 2.                    Models of Time Series

or, in matrix language

                                                          c∗0
                                                             
                                    ρ(h)
                                 ρ(h + 1)              c∗1 
                                                 = P n  ..                                        (2.16)
                                                           
                                     ..
                                      .                . 
                           ρ(h + n − 1)                              c∗n−1

with the matrix P n as defined in (2.7). If this matrix is invertible, then

                           c∗0
                                                                          
                                                            ρ(h)
                          ..      −1                       ..
                          .  := P n                                                               (2.17)
                                                                  
                                                               .  
                             c∗n−1                    ρ(h + n − 1)

is the uniquely determined solution of (2.16).

If we put h = 1, then equation (2.17) implies that c∗n−1 equals the partial auto-
correlation coefficient α(n). In this case, α(n) is the coefficient of Y1 in the best
                                 Pn−1
linear one-step forecast Ŷn+1 = u=0 c∗u Yn−u of Yn+1 .

Example 2.3.3. Consider the MA(1)-process Yt = εt + aεt−1 with E(ε0 ) = 0. Its
autocorrelation function is by Example 2.2.2 given by ρ(0) = 1, ρ(1) = a/(1 +
a2 ), ρ(u) = 0 for u ≥ 2. The matrix P n equals therefore
                                       a
                              1                 0       0             ···        0
                                                                                      
                                      1+a2
                          a                     a
                        1+a2              1   1+a2     0                        0  
                                       a                a
                                                                                   
                        0                      1                                0  
                                      1+a2             1+a2
                  Pn =  .                                                          .
                                                                                   
                        ..                            ..                        ..
                                                           .                     . 
                                                                                    
                        0                                                       a 
                                       ...                             1     1+a  2
                                                                      a
                          0             0      ···                   1+a2        1

Check that the matrix P n = (Corr(Yi , Yj ))1≤i,j≤n is positive definite, xT P n x > 0
for any x ∈ Rn unless x = 0 (Exercise 40), and thus, P n is invertible. The best
                                         Pn−1
forecast of Yn+1 is by (2.17), therefore, u=0 c∗u Yn−u with
                                                            a 
                                     c∗0                    1+a2
                                          
                                .. 
                                           
                                        −1 
                                                                0     
                                .  = Pn 
                                                                      
                                                                ..    
                                                                 .
                                c∗n−1
                                                                     
                                                                0

which is a/(1 + a2 ) times the first column of P −1  n . The best forecast of Yn+h for
h ≥ 2 is by (2.17) the constant 0. Note that Yn+h is for h ≥ 2 uncorrelated with
Y1 , . . . , Yn and thus not really predictable by Y1 , . . . , Yn .
2.3 The Box–Jenkins Program                                                                        93

                                       Pp
Theorem 2.3.4. Suppose that Yt = u=1 au Yt−u + εt , t ∈ Z, is a stationary
AR(p)-process, which satisfies the stationarity condition (2.3) and has zero mean
E(Y0 ) = 0. Let n ≥ p. The best one-step forecast is

                     Ŷn+1 = a1 Yn + a2 Yn−1 + . . . + ap Yn+1−p

and the best two-step forecast is

                     Ŷn+2 = a1 Ŷn+1 + a2 Yn + . . . + ap Yn+2−p .

The best h-step forecast for arbitrary h ≥ 2 is recursively given by

          Ŷn+h = a1 Ŷn+h−1 + . . . + ah−1 Ŷn+1 + ah Yn + . . . + ap Yn+h−p .


Proof. Since (Yt ) satisfies the stationarity condition (2.3), it is invertible by The-
orem P2.2.3 i.e., there exists an absolutely summable causal filter (bu )u≥0 such that
Y
Pt =       u≥0 bu εt−u , t ∈ Z, almost surely. This implies in particular E(Yt εt+h ) =
   u≥0 u E(εt−u εt+h ) = 0 for any h ≥ 1, cf. Theorem 2.1.5. Hence we obtain for
        b
i = 1, . . . , n
                           E((Yn+1 − Ŷn+1 )Yi ) = E(εn+1 Yi ) = 0
from which the assertion for h = 1 follows by Lemma 2.3.2. The case of an
arbitrary h ≥ 2 is now a consequence of the recursion

   E((Yn+h − Ŷn+h )Yi )
                                                                                          
                                 min(h−1,p)                   min(h−1,p)
                                      X                           X
             = E εn+h +                      au Yn+h−u −                 au Ŷn+h−u  Yi 
                                      u=1                         u=1

                 min(h−1,p)                              
                    X
             =                au E        Yn+h−u − Ŷn+h−u Yi = 0,             i = 1, . . . , n,
                    u=1

and Lemma 2.3.2.


A repetition of the arguments in the preceding proof implies the following result,
which shows that for an ARMA(p, q)-process the forecast of Yn+h for h > q is
controlled only by the AR-part of the process.
                                     Pp                 Pq
Theorem 2.3.5. Suppose that Yt = u=1 au Yt−u +εt + v=1 bv εt−v , t ∈ Z, is an
ARMA(p, q)-process, which satisfies the stationarity condition (2.3) and has zero
mean, precisely E(ε0 ) = 0. Suppose that n + q − p ≥ 0. The best h-step forecast of
Yn+h for h > q satisfies the recursion
                                             p
                                             X
                                 Ŷn+h =           au Ŷn+h−u .
                                             u=1
94                                                Chapter 2.      Models of Time Series

Example 2.3.6. We illustrate the best forecast of the ARMA(1, 1)-process

                       Yt = 0.4Yt−1 + εt − 0.6εt−1 ,       t ∈ Z,

with E(Yt ) = E(εt ) = 0. First we need the optimal 1-step forecast Ybi for i =
1, . . . , n. These are defined by putting unknown values of Yt with an index t ≤ 0
equal to their expected value, which is zero. We, thus, obtain

         Yb1 := 0,                            ε̂1 := Y1 − Yb1 = Y1 ,
         Yb2 := 0.4Y1 + 0 − 0.6ε̂1
             = −0.2Y1 ,                       ε̂2 := Y2 − Yb2 = Y2 + 0.2Y1 ,
         Yb3 := 0.4Y2 + 0 − 0.6ε̂2
             = 0.4Y2 − 0.6(Y2 + 0.2Y1 )
             = −0.2Y2 − 0.12Y1 ,              ε̂3 := Y3 − Yb3 ,
              ..                                   ..
               .                                    .

until Ybi and ε̂i are defined for i = 1, . . . , n. The actual forecast is then given by

Ybn+1 = 0.4Yn + 0 − 0.6ε̂n = 0.4Yn − 0.6(Yn − Ybn ),
Ybn+2 = 0.4Ybn+1 + 0 + 0,
      ..
       .
Ybn+h = 0.4Ybn+h−1         =          ...            = 0.4h−1 Ybn+1 →h→∞ 0,

where εt with index t ≥ n + 1 is replaced by zero, since it is uncorrelated with Yi ,
i ≤ n.


In practice one replaces the usually unknown coefficients au , bv in the above fore-
casts by their estimated values.



2.4      State-Space Models

In state-space models we have, in general, a nonobservable target process (Xt )
and an observable process (Yt ). They are linked by the assumption that (Yt ) is a
linear function of (Xt ) with an added noise, where the linear function may vary in
time. The aim is the derivation of best linear estimates of Xt , based on (Ys )s≤t .

Many models of time series such as ARMA(p, q)-processes can be embedded in
state-space models if we allow in the following sequences of random vectors Xt ∈
Rk and Yt ∈ Rm .
2.4 State-Space Models                                                              95

A multivariate state-space model is now defined by the state equation
                           Xt+1 = At Xt + Bt εt+1 ∈ Rk ,                        (2.18)
describing the time-dependent behavior of the state Xt ∈ Rk , and the observation
equation
                            Yt = Ct Xt + ηt ∈ Rm .                         (2.19)
We assume that (At ), (Bt ) and (Ct ) are sequences of known matrices, (εt ) and
(ηt ) are uncorrelated sequences of white noises with mean vectors 0 and known
covariance matrices Cov(εt ) = E(εt εTt ) =: Qt , Cov(ηt ) = E(ηt ηtT ) =: Rt .

We suppose further that X0 and εt , ηt , t ≥ 1, are uncorrelated, where two random
vectors W ∈ Rp and V ∈ Rq are said to be uncorrelated if their components are
i.e., if the matrix of their covariances vanishes
                        E((W − E(W )(V − E(V ))T ) = 0.
By E(W ) we denote the vector of the componentwise expectations of W . We say
that a time series (Yt ) has a state-space representation if it satisfies the represen-
tations (2.18) and (2.19).
Example 2.4.1. Let (ηt ) be a white noise in R and put
                                    Yt := µt + ηt
with linear trend µt = a+bt. This simple model can be represented as a state-space
model as follows. Define the state vector Xt as
                                          
                                          µt
                                  Xt :=       ,
                                           1
and put                                             
                                               1 b
                                    A :=
                                               0 1
From the recursion µt+1 = µt + b we then obtain the state equation
                                          
                             µt+1       1 b    µt
                   Xt+1 =           =              = AXt ,
                              1         0 1    1
and with
                                     C := (1, 0)
the observation equation
                                      
                                      µt
                         Yt = (1, 0)     + ηt = CXt + ηt .
                                      1
Note that the state Xt is nonstochastic i.e., Bt = 0. This model is moreover
time-invariant, since the matrices A, B := Bt and C do not depend on t.
96                                                    Chapter 2.       Models of Time Series

Example 2.4.2. An AR(p)-process

                          Yt = a1 Yt−1 + . . . + ap Yt−p + εt

with a white noise (εt ) has a state-space representation with state vector

                            Xt = (Yt , Yt−1 , . . . , Yt−p+1 )T .

If we define the p × p-matrix A by
                                                    
                                 a1 a2 . . . ap−1 ap
                                1 0 ... 0        0
                                                    
                               0 1            0  0
                          A := 
                                                     
                                                     
                                ..    . .     .
                                               .   .
                                                   . 
                               .          .   .   .
                                  0 0 ... 1       0

and the p × 1-matrices B, C T by

                              B := (1, 0, . . . , 0)T =: C T ,

then we have the state equation

                                Xt+1 = AXt + Bεt+1

and the observation equation
                                       Yt = CXt .
Example 2.4.3. For the MA(q)-process

                           Yt = εt + b1 εt−1 + . . . + bq εt−q

we define the non observable state

                         Xt := (εt , εt−1 , . . . , εt−q )T ∈ Rq+1 .

With the (q + 1) × (q + 1)-matrix
                                                       
                                     0 0 0 ...    0 0
                                   1 0 0 . . .   0 0
                                                       
                              A := 0 1 0         0 0  ,
                                   
                                    ..    ..     .. .. 
                                   .         .    . .
                                        0 0 0 ... 1 0

the (q + 1) × 1-matrix
                                   B := (1, 0, . . . , 0)T
and the 1 × (q + 1)-matrix
                                  C := (1, b1 , . . . , bq )
2.4 State-Space Models                                                                   97

we obtain the state equation

                                   Xt+1 = AXt + Bεt+1

and the observation equation
                                           Yt = CXt .
Example 2.4.4. Combining the above results for AR(p) and MA(q)-processes,
we obtain a state-space representation of ARMA(p, q)-processes

             Yt = a1 Yt−1 + . . . + ap Yt−p + εt + b1 εt−1 + . . . + bq εt−q .

In this case the state vector can be chosen as

            Xt := (Yt , Yt−1 , . . . , Yt−p+1 , εt , εt−1 , . . . , εt−q+1 )T ∈ Rp+q .

We define the (p + q) × (p + q)-matrix
                                                                
                       a1 a2 . . . ap−1 ap b1 b2 . . . bq−1 bq
                     1 0             0 0 0      ...        0
                      .. . .            ..                  .. 
                                                                
                     .
                             .           .                   .  
                                                                 
                     0 0             1 0                   0    
                                                                
               A :=  0        . . .   0        . . .      0    ,
                                                                 
                     0                 0    1 0            0    
                                                                
                     0                 0    0 1            0    
                                                                
                     .                   .      .            .
                      ..                 ..       ..         .. 
                                                                 

                           0         ...     0      0    0       ...      1   0

the (p + q) × 1-matrix

                               B := (1, 0, . . . , 0, 1, 0, . . . , 0)T

with the entry 1 at the first and (p + 1)-th position and the 1 × (p + q)-matrix

                                      C := (1, 0, . . . , 0).

Then we have the state equation

                                   Xt+1 = AXt + Bεt+1

and the observation equation
                                           Yt = CXt .


The Kalman-Filter
The key problem in the state-space model (2.18), (2.19) is the estimation of the
nonobservable state Xt . It is possible to derive an estimate of Xt recursively from
98                                                      Chapter 2.   Models of Time Series

an estimate of Xt−1 together with the last observation Yt , known as the Kalman
recursions (Kalman 1960). We obtain in this way a unified prediction technique
for each time series model that has a state-space representation.

We want to compute the best linear prediction


                                X̂ t := D1 Y1 + . . . + Dt Yt                                (2.20)


of Xt , based on Y1 , . . . , Yt i.e., the k × m-matrices D1 , . . . , Dt are such that the
mean squared error is minimized


         E((Xt − X̂ t )T (Xt − X̂ t ))
                       X t                t
                                          X
          = E((Xt −        Dj Yj )T (Xt −   Dj Yj ))
                         j=1                  j=1
                                                  t
                                                  X                       t
                                                                          X
           =            min             E((Xt −         Dj0 Yj )T (Xt −         Dj0 Yj )).   (2.21)
               k×m−matrices D10 ,...,Dt
                                      0
                                                  j=1                     j=1



By repeating the arguments in the proof of Lemma 2.3.2 we will prove the following
result. It states that X̂ t is a best linear prediction of Xt based on Y1 , . . . , Yt if
each component of the vector Xt − X̂ t is orthogonal to each component of the
vectors Ys , 1 ≤ s ≤ t, with respect to the inner product E(XY ) of two random
variable X and Y .

Lemma 2.4.5. If the estimate X̂ t defined in (2.20) satisfies


                         E((Xt − X̂ t )YsT ) = 0,          1 ≤ s ≤ t,                        (2.22)


then it minimizes the mean squared error (2.21).



Note that E((Xt − X̂ t )YsT ) is a k × m-matrix, which is generated by multiplying
each component of Xt − X̂ t ∈ Rk with each component of Ys ∈ Rm .




                   Pt
Proof. Let Xt0 =           0       k
                      j=1 Dj Yj ∈ R be an arbitrary linear combination of Y1 , . . . , Yt .
2.4 State-Space Models                                                                   99

Then we have
     E((Xt − Xt0 )T (Xt − Xt0 ))
                      Xt               T              t
                                                          X               
     = E Xt − X̂ t +       (Dj − Dj0 )Yj      Xt − X̂ t +   (Dj − Dj0 )Yj
                             j=1                                    j=1
                                              t
                                              X
      = E((Xt − X̂ t )T (Xt − X̂ t )) + 2           E((Xt − X̂ t )T (Dj − Dj0 )Yj )
                                              j=1
                               t
                             X                       t
                                                    T X                     
                     +E             (Dj − Dj0 )Yj            (Dj − Dj0 )Yj
                              j=1                      j=1
                        T
      ≥ E((Xt − X̂ t ) (Xt − X̂ t )),
since in the second-to-last line the final term is nonnegative and the second one
vanishes by the property (2.22).


Let now X̂ t−1 be the best linear prediction of Xt−1 based on Y1 , . . . , Yt−1 . Then
                                      X̃ t := At−1 X̂ t−1                             (2.23)
is the best linear prediction of Xt based on Y1 , . . . , Yt−1 , which is easy to see. We
simply replaced εt in the state equation by its expectation 0. Note that εt and Ys
are uncorrelated if s < t i.e., E((Xt − X̃ t )YsT ) = 0 for 1 ≤ s ≤ t − 1.

From this we obtain that
                                         Ỹ t := Ct X̃ t
is the best linear prediction of Yt based on Y1 , . . . , Yt−1 , since E((Yt − Ỹ t )YsT ) =
E((Ct (Xt − X̃ t )+ηt )YsT ) = 0, 1 ≤ s ≤ t−1; note that ηt and Ys are uncorrelated
if s < t.

Define now by
   ∆t := E((Xt − X̂ t )(Xt − X̂ t )T )           ˜ t := E((Xt − X̃ t )(Xt − X̃ t )T ).
                                             and ∆
the covariance matrices of the approximation errors. Then we have
  ˜ t = E((At−1 (Xt−1 − X̂ t−1 ) + Bt−1 εt )(At−1 (Xt−1 − X̂ t−1 ) + Bt−1 εt )T )
  ∆
      = E(At−1 (Xt−1 − X̂ t−1 )(At−1 (Xt−1 − X̂ t−1 ))T )
                 + E((Bt−1 εt )(Bt−1 εt )T )
      = At−1 ∆t−1 ATt−1 + Bt−1 Qt Bt−1
                                    T
                                        ,

since εt and Xt−1 − X̂ t−1 are obviously uncorrelated. In complete analogy one
shows that
                                                     ˜ t CtT + Rt .
                  E((Yt − Ỹ t )(Yt − Ỹ t )T ) = Ct ∆
100                                                Chapter 2.    Models of Time Series

Suppose that we have observed Y1 , . . . , Yt−1 , and that we have predicted Xt by
X̃ t = At−1 X̂ t−1 . Assume that we now also observe Yt . How can we use this
additional information to improve the prediction X̃ t of Xt ? To this end we add a
matrix Kt such that we obtain the best prediction X̂ t based on Y1 , . . . Yt :

                               X̃ t + Kt (Yt − Ỹ t ) = X̂ t                          (2.24)

i.e., we have to choose the matrix Kt according to Lemma 2.4.5 such that Xt − X̂ t
and Ys are uncorrelated for s = 1, . . . , t. In this case, the matrix Kt is called the
Kalman gain.

Lemma 2.4.6. The matrix Kt in (2.24) is a solution of the equation

                                    ˜ t CtT + Rt ) = ∆
                             Kt (Ct ∆                ˜ t CtT .                        (2.25)


Proof. The matrix Kt has to be chosen such that Xt − X̂ t and Ys are uncorrelated
for s = 1, . . . , t, i.e.,

       0 = E((Xt − X̂ t )YsT ) = E((Xt − X̃ t − Kt (Yt − Ỹ t ))YsT ),       s ≤ t.

Note that an arbitrary k × m-matrix Kt satisfies
                                            
          E (Xt − X̃ t − Kt (Yt − Ỹ t ))YsT
           = E((Xt − X̃ t )YsT ) − Kt E((Yt − Ỹ t )YsT ) = 0,        s ≤ t − 1.

In order to fulfill the above condition, the matrix Kt needs to satisfy only

      0 = E((Xt − X̃ t )YtT ) − Kt E((Yt − Ỹ t )YtT )
        = E((Xt − X̃ t )(Yt − Ỹ t )T ) − Kt E((Yt − Ỹ t )(Yt − Ỹ t )T )
        = E((Xt − X̃ t )(Ct (Xt − X̃ t ) + ηt )T ) − Kt E((Yt − Ỹ t )(Yt − Ỹ t )T )
        = E((Xt − X̃ t )(Xt − X̃ t )T )CtT − Kt E((Yt − Ỹ t )(Yt − Ỹ t )T )
          ˜ t CtT − Kt (Ct ∆
        = ∆                ˜ t CtT + Rt ).

But this is the assertion of Lemma 2.4.6. Note that Ỹ t is a linear combination of
Y1 , . . . , Yt−1 and that ηt and Xt − X̃ t as well as ηt and Ys are uncorrelated for
s ≤ t − 1.


                 ˜ t CtT + Rt is invertible, then
If the matrix Ct ∆

                           Kt := ∆           ˜ t CtT + Rt )−1
                                 ˜ t CtT (Ct ∆
2.4 State-Space Models                                                               101

is the uniquely determined Kalman gain. We have, moreover, for a Kalman gain

   ∆t = E((Xt − X̂ t )(Xt − X̂ t )T )
                                                                     
      = E (Xt − X̃ t − Kt (Yt − Ỹ t ))(Xt − X̃ t − Kt (Yt − Ỹ t ))T
          ˜ t + Kt E((Yt − Ỹ t )(Yt − Ỹ t )T )KtT
        = ∆
               − E((Xt − X̃ t )(Yt − Ỹ t )T )KtT − Kt E((Yt − Ỹ t )(Xt − X̃ t )T )
          ˜ t + Kt (Ct ∆
        = ∆              ˜ t CtT + Rt )KtT
               −∆˜ t CtT KtT − Kt Ct ∆ ˜t
          ˜ t − Kt Ct ∆
        = ∆             ˜t

by (2.25) and the arguments in the proof of Lemma 2.4.6.

The recursion in the discrete Kalman filter is done in two steps: From X̂ t−1 and
∆t−1 one computes in the prediction step first

                      X̃ t = At−1 X̂ t−1 ,
                      Ỹ t = Ct X̃ t ,
                      ∆˜ t = At−1 ∆t−1 ATt−1 + Bt−1 Qt Bt−1
                                                        T
                                                            .                     (2.26)

In the updating step one then computes Kt and the updated values X̂ t , ∆t

                         Kt = ∆             ˜ t CtT + Rt )−1 ,
                                ˜ t CtT (Ct ∆
                         X̂ t = X̃ t + Kt (Yt − Ỹ t ),
                         ∆t = ∆ ˜ t − Kt Ct ∆˜ t.                                 (2.27)

An obvious problem is the choice of the initial values X̃ 1 and ∆    ˜ 1 . One frequently
                    ˜
puts X̃ 1 = 0 and ∆1 as the diagonal matrix with constant entries σ 2 > 0. The
number σ 2 reflects the degree of uncertainty about the underlying model. Simula-
tions as well as theoretical results show, however, that the estimates X̂ t are often
                                            ˜ 1 if t is large, see for instance Example
not affected by the initial values X̃ 1 and ∆
2.4.7 below.

If in addition we require that the state-space model (2.18), (2.19) is completely
determined by some parametrization ϑ of the distribution of (Yt ) and (Xt ), then
we can estimate the matrices of the Kalman filter in (2.26) and (2.27) under
suitable conditions by a maximum likelihood estimate of ϑ; see e.g. Section 8.5 of
Brockwell and Davis (2002) or Section 4.5 in Janacek and Swift (1993).

By iterating the 1-step prediction X̃ t = At−1 X̂ t−1 of X̂ t in (2.23) h times, we
obtain the h-step prediction of the Kalman filter

                        X̃ t+h := At+h−1 X̃ t+h−1 ,      h ≥ 1,
102                                               Chapter 2.      Models of Time Series

with the initial value X̃ t+0 := X̂ t . The pertaining h-step prediction of Yt+h is
then
                          Ỹ t+h := Ct+h X̃ t+h ,   h ≥ 1.

2.4.7 Example. Let (ηt ) be a white noise in R with E(ηt ) = 0, E(ηt2 ) = σ 2 > 0
and put for some µ ∈ R
                           Yt := µ + ηt ,   t ∈ Z.
This process can be represented as a state-space model by putting Xt := µ, with
state equation Xt+1 = Xt and observation equation Yt = Xt + ηt i.e., At = 1 = Ct
and Bt = 0. The prediction step (2.26) of the Kalman filter is now given by
                                                   ˜ t = ∆t−1 .
                         X̃t = X̂t−1 , Ỹt = X̃t , ∆

Note that all these values are in R. The h-step predictions X̃t+h , Ỹt+h are, there-
fore, given by X̃t . The update step (2.27) of the Kalman filter is

                              ∆t−1
                    Kt =
                            ∆t−1 + σ 2
                    X̂t = X̂t−1 + Kt (Yt − X̂t−1 )
                                                          σ2
                    ∆t = ∆t−1 − Kt ∆t−1 = ∆t−1                    .
                                                       ∆t−1 + σ 2

Note that ∆t = E((Xt − X̂t )2 ) ≥ 0 and thus,

                                             σ2
                        0 ≤ ∆t = ∆t−1                ≤ ∆t−1
                                          ∆t−1 + σ 2

is a decreasing and bounded sequence. Its limit ∆ := limt→∞ ∆t consequently
exists and satisfies
                                        σ2
                               ∆=∆
                                      ∆ + σ2
i.e., ∆ = 0. This means that the mean squared error E((Xt − X̂t )2 ) = E((µ− X̂t )2 )
vanishes asymptotically, no matter how the initial values X̃1 and ∆   ˜ 1 are chosen.
Further we have limt→∞ Kt = 0, which means that additional observations Yt do
not contribute to X̂t if t is large. Finally, we obtain for the mean squared error of
the h-step prediction Ỹt+h of Yt+h

            E((Yt+h − Ỹt+h )2 ) = E((µ + ηt+h − X̂t )2 )
                                 = E((µ − X̂t )2 ) + E(ηt+h
                                                        2
                                                            ) →t→∞ σ 2 .


Example 2.4.7. The following figure displays the Airline Data from Example
1.3.1 together with 12-step forecasts based on the Kalman filter. The original
2.4 State-Space Models                                                                103

data yt , t = 1, . . . , 144 were log-transformed xt = log(yt ) to stabilize the variance;
first order differences ∆xt = xt − xt−1 were used to eliminate the trend and,
finally, zt = ∆xt − ∆xt−12 were computed to remove the seasonal component of
12 months. The Kalman filter was applied to forecast zt , t = 145, . . . , 156, and
the results were transformed in the reverse order of the preceding steps to predict
the initial values yt , t = 145, . . . , 156.




       Figure 2.4.1. Airline Data and predicted values using the Kalman filter.

 ***      Program 2 _4_1  ***;
 TITLE1 ’ Original and Forecasted Data ’;
 TITLE2 ’ Airline Data ’;

DATA data1 ;
  INFILE ’c :\ data \ airline . txt ’;
  INPUT y ;
  yl = LOG ( y ); t = _N_ ;

PROC STATESPACE DATA = data1 OUT = data2 LEAD =12;
 VAR yl (1 ,12); ID t ;

DATA data3 ;
104                                                     Chapter 2.     Models of Time Series

      SET data2 ; yhat = EXP ( FOR1 );

DATA data4 ( KEEP = t y yhat );
   MERGE data1 data3 ;
   BY t ;

 LEGEND1 LABEL =( ’ ’) VALUE =( ’ original ’ ’ forecast ’);
 SYMBOL1 C = BLACK V = DOT H =0.7 I = JOIN L =1;
 SYMBOL2 C = BLACK V = CIRCLE H =1.5 I = JOIN L =1;
 AXIS1 LABEL =( ANGLE =90 ’ Passengers ’);
 AXIS2 LABEL =( ’ January 1949 to December 1961 ’);
 PROC GPLOT DATA = data4 ;
  PLOT y * t =1 yhat * t =2 / OVERLAY VAXIS = AXIS1
           HAXIS = AXIS2 LEGEND = LEGEND1 ;
 RUN ; QUIT ;
                                                                                                    

In the first data step the Airline Data are read   are stored in the data set data2 with forecasts
into data1. Their logarithm is computed and        of 12 months after the end of the input data.
stored in the variable yl. The variable t con-     This is invoked by LEAD=12.
tains the observation number.
                                                   data3 contains the exponentially trans-
The statement VAR yl(1,12) of the PROC             formed forecasts, thereby inverting the log-
STATESPACE procedure tells SAS to use first or-    transformation in the first data step.
der differences of the initial data to remove
their trend and to adjust them to a seasonal       Finally, the two data sets are merged and dis-
component of 12 months. The data are iden-         played in one plot.
tified by the time index set to t. The results




Exercises

1. Suppose that the complex random variables Y and Z are square integrable. Show
that
                     Cov(aY + b, Z) = a Cov(Y, Z), a, b ∈ C.


2. Give an example of a stochastic process (Yt ) such that for arbitrary t1 , t2 ∈ Z and
k 6= 0
            E(Yt1 ) 6= E(Yt1 +k ) but Cov(Yt1 , Yt2 ) = Cov(Yt1 +k , Yt2 +k ).


3. (i) Let (Xt ), (Yt ) be stationary processes such that Cov(Xt , Ys ) = 0 for t, s ∈ Z. Show
       that for arbitrary a, b ∈ C the linear combinations (aXt + bYt ) yield a stationary
       process.
Exercises                                                                                      105

  (ii) Suppose that the decomposition Zt = Xt + Yt , t ∈ Z holds. Show that stationarity
       of (Zt ) does not necessarily imply stationarity of (Xt ).


4. (i) Show that the process Yt = Xeiat , a ∈ R, is stationary, where X is a complex
       valued random variable with mean zero and finite variance.
  (ii) Show that the random variable Y = beiU has mean zero, where U is a uniformly
       distributed random variable on (0, 2π) and b ∈ C.


5. Let Z1 , Z2 be independent and normal N (µi , σi2 ), i = 1, 2, distributed random variables
and choose λ ∈ R. For which means µ1 , µ2 ∈ R and variances σ12 , σ22 > 0 is the cosinoid
process
                        Yt = Z1 cos(2πλt) + Z2 sin(2πλt), t ∈ Z
stationary?

6. Show that the autocovariance function γ : Z → C of a complex-valued stationary
process (Yt )t∈Z , which is defined by

                        γ(h) = E(Yt+h Ȳt ) − E(Yt+h ) E(Ȳt ),          h ∈ Z,

has the following
               P
                  properties: γ(0) ≥ 0, |γ(h)| ≤ γ(0), γ(h) = γ(−h), i.e., γ is a Hermitian
function, and 1≤r,s≤n zr γ(r − s)z̄s ≥ 0 for z1 , . . . , zn ∈ C, n ∈ N, i.e., γ is a positive
semidefinite function.

7. Suppose
     P
              that Yt , t = 1, . . . , n, is a stationary process with mean µ. Then µ̂n :=
n−1 n  t=1 Yt is an unbiased estimator of µ. Express the mean square error E(µ̂n − µ)2
in terms of the autocovariance function γ and show that E(µ̂n − µ)2 → 0 if γ(n) → 0,
n → ∞.

8. Suppose that (Yt )t∈Z is a stationary process and denote by
                        (       Pn−|k|
                            1
                            n     t=1    (Yt − Ȳ )(Yt+|k| − Ȳ ),   |k| = 0, . . . , n − 1,
              c(k) :=
                         0,                                          |k| ≥ n.

the empirical autocovariance function at lag k, k ∈ Z.

  (i) Show that c(k) is a biased estimator of γ(k) (even if the factor n−1 is replaced by
      (n − k)−1 ) i.e., E(c(k)) 6= γ(k).
  (ii) Show that the k-dimensional empirical covariance matrix
                                         0                                        1
                                          c(0)     c(1)   . . . c(k − 1)
                                      B c(1)       c(0)         c(k − 2)C
                                      B                                 C
                                Ck := B     ..            .         ..  C
                                      @      .              . .      .  A
                                        c(k − 1) c(k − 2) . . .   c(0)

      is positive semidefinite. (If the factor n−1 in the definition of c(j) is replaced
      by (n − j)−1 , j = 1, . . . , k, the resulting covariance matrix may not be positive
106                                                         Chapter 2.        Models of Time Series

      semidefinite.) Hint: Consider k ≥ n and write Ck = n−1 AAT with a suitable
      k × 2k-matrix A. Show further that Cm is positive semidefinite if Ck is positive
      semidefinite for k > m.
 (iii) If c(0) > 0, then Ck is nonsingular, i.e., Ck is positive definite.


9. Suppose that (Yt ) is a stationary process with autocovariance function γY . Express
the autocovariance function of the difference filter of first order ∆Yt = Yt − Yt−1 in terms
of γY . Find it when γY (k) = λ|k| .

10. Let (Yt )t∈Z be a stationary process with mean zero. If its autocovariance function
satisfies γ(τ ) = 0 for some τ > 0, then γ is periodic with length τ , i.e., γ(t + τ ) = γ(t),
t ∈ Z.

11. Let (Yt ) be a stochastic process such that for t ∈ Z

                     P {Yt = 1} = pt = 1 − P {Yt = −1},              0 < pt < 1.

Suppose in addition that (Yt ) is a Markov process, i.e., for any t ∈ Z, k ≥ 1

              P (Yt = y0 |Yt−1 = y1 , . . . , Yt−k = yk ) = P (Yt = y0 |Yt−1 = y1 ).


  (i) Is (Yt )t∈N a stationary process?
  (ii) Compute the autocovariance function in case P (Yt = 1|Yt−1 = 1) = λ and pt =
       1/2.


12. Let (εt )t be a white noise process with independent εt ∼ N (0, 1) and define
                                    (
                                        εt ,                if t is even,
                            ε̃t =                   √
                                        (ε2t−1 − 1)/ 2,     if t is odd.

Show that (ε̃t )t is a white noise process with E(ε̃t ) = 0 and Var(ε̃t ) = 1, where the ε̃t
are neither independent nor identically distributed. Plot the path of (εt )t and (ε̃t )t for
t = 1, . . . , 100 and compare!
                                                              P
13. Let (εt )t∈Z be a white noise. The process Yt = ts=1 εs is said to be a random walk.
Plot the path of a random walk with normal N (µ, σ 2 ) distributed εt for each of the cases
µ < 0, µ = 0 and µ > 0.

14. Let (au ) be absolutely summable filters and let (Zt ) be a stochastic process with
supt∈Z E(Zt2 ) < ∞. Put for t ∈ Z
                                    X                         X
                            Xt =          au Zt−u ,    Yt =       bv Zt−v .
                                    u                         v

Then we have                               XX
                           E(Xt Yt ) =                au bv E(Zt−u Zt−v ).
                                            u    v
Exercises                                                                              107

Hint: Use the general inequality |xy| ≤ (x2 + y 2 )/2.

15. Let Yt = aYt−1 + εt , t ∈ Z be an AR(1)-process with |a| > 1. Compute the
autocorrelation function of this process.
                                                                       P
16. Compute the orders p and the coefficients au of the process Yt = pu=0 au εt−u with
Var(ε0 ) = 1 and autocovariance function γ(1) = 2, γ(2) = 1, γ(3) = −1 and γ(t) = 0 for
t ≥ 4. Is this process invertible?

17. The autocorrelation function ρ of an arbitrary MA(q)-process satisfies

                                       1   X  q
                                                     1
                                   −     ≤     ρ(v) ≤ q.
                                       2   v=1
                                                     2

Give examples of MA(q)-processes, where the lower bound and the upper bound are
attained, i.e., these bounds are sharp.

18. Let (Yt )t∈Z be a stationary stochastic process with E(Yt ) = 0, t ∈ Z, and
                                            8
                                            >
                                            <1         if t = 0
                                 ρ(t) =      ρ(1)      if t = 1
                                            >
                                            :
                                             0         if t > 1,

where |ρ(1)| < 1/2. Then there exists a ∈ (−1, 1) and a white noise (εt )t∈Z such that

                                       Yt = εt + aεt−1 .

Hint: Example 2.2.2.

19. Find two MA(1)-processes with the same autocovariance functions.

20. Suppose that Yt = εt + aεt−1 is a noninvertible MA(1)-process, where |a| > 1. Define
the new process
                                            X
                                            ∞
                                   ε̃t =          (−a)−j Yt−j
                                            j=0

and show that (ε̃t ) is a white noise. Show that Var(ε̃t ) = a2 Var(εt ) and (Yt ) has the
invertible representation
                                    Yt = ε̃t + a−1 ε̃t−1 .

21. Plot the autocorrelation functions of MA(p)-processes for different values of p.

22. Generate and plot AR(3)-processes (Yt ), t = 1, . . . , 500 where the roots of the
characteristic polynomial have the following properties:

  (i) all roots are outside the unit disk,
 (ii) all roots are inside the unit disk,
108                                                     Chapter 2.      Models of Time Series

 (iii) all roots are on the unit circle,
 (iv) two roots are outside, one root inside the unit disk,
  (v) one root is outside, one root is inside the unit disk and one root is on the unit
      circle,
 (vi) all roots are outside the unit disk but close to the unit circle.

23. Show that the AR(2)-process Yt = a1 Yt−1 + a2 Yt−2 + εt for a1 = 1/3 and a2 = 2/9
has the autocorrelation function
                                  16  2 |k|   5  1 |k|
                         ρ(k) =               +    −       ,       k∈Z
                                  21 3          21   3
and for a1 = a2 = 1/12 the autocorrelation function
                                  45  1 |k| 32  1 |k|
                         ρ(k) =              +    −       ,        k ∈ Z.
                                  77 3         77   4


24. Let (εt ) be a white noise with E(ε0 ) = µ, Var(ε0 ) = σ 2 and put

                              Yt = εt − Yt−1 ,     t ∈ N, Y0 = 0.

Show that                                                     √
                           Corr(Ys , Yt ) = (−1)s+t min{s, t}/ st.

25. An AR(2)-process Yt = a1 Yt−1 +a2 Yt−2 +εt satisfies the stationarity condition (2.3),
if the pair (a1 , a2 ) is in the triangle
                     n                                                           o
               ∆ := (α, β) ∈ R2 : −1 < β < 1, α + β < 1 and β − α < 1 .

Hint: Use the fact that necessarily ρ(1) ∈ (−1, 1).


26. (i) Let (Yt ) denote the unique stationary solution of the autoregressive equations

                                      Yt = aYt−1 + εt ,       t ∈ Z,
                                                                            P∞    −j
        with |a| > 1. Then (Yt ) is given by the expression Yt = −           j=1 a   εt+j (see the
        proof of Lemma 2.1.10). Define the new process
                                                        1
                                           ε̃t = Yt −     Yt−1 ,
                                                        a
        and show that (ε̃t ) is a white noise with Var(ε̃t ) = Var(εt )/a2 . These calculations
        show that (Yt ) is the (unique stationary) solution of the causal AR-equations
                                             1
                                      Yt =     Yt−1 + ε̃t ,   t ∈ Z.
                                             a
        Thus, every AR(1)-process with |a| > 1 can be represented as an AR(1)-process
        with |a| < 1 and a new white noise.
Exercises                                                                                   109

     (ii) Show that for |a| = 1 the above autoregressive equations have no stationary
          solutions. A stationary solution exists if the white noise process is degenerated,
          i.e., E(ε2t ) = 0.


27. (i) Consider the process
                                             8
                                             <ε1           for t = 1
                                    Ỹt :=
                                             :aYt−1 + εt   for t > 1,

         i.e., Ỹt , t ≥ 1, equals the AR(1)-process Yt = aYt−1 + εt , conditional on Y0 = 0.
         Compute E(Ỹt ), Var(Ỹt ) and Cov(Yt , Yt+s ). Is there something like asymptotic
         stationarity for t → ∞?
     (ii) Choose a ∈ (−1, 1), a 6= 0, and compute the correlation matrix of Y1 , . . . , Y10 .


28. Use the IML function ARMASIM to simulate the stationary AR(2)-process

                                Yt = −0.3Yt−1 + 0.3Yt−2 + εt .

Estimate the parameters a1 = −0.3 and a2 = 0.3 by means of the Yule–Walker equations
using the SAS procedure PROC ARIMA.

29. Show that the value at lag 2 of the partial autocorrelation function of the MA(1)-
process
                               Yt = εt + aεt−1 , t ∈ Z
is
                                                    a2
                                    α(2) = −                .
                                                1 + a2 + a4

30. (Unemployed1 Data) Plot the empirical autocorrelations and partial autocorrela-
tions of the trend and seasonally adjusted Unemployed1 Data from the building trade,
introduced in Example 1.1.1. Apply the Box–Jenkins program. Is a fit of a pure MA(q)-
or AR(p)-process reasonable?

31. Plot the autocorrelation functions of ARMA(p, q)-processes for different values of
p, q using the IML function ARMACOV. Plot also their empirical counterparts.

32. Compute the autocovariance function of an ARMA(1, 2)-process.

33. Derive the least squares normal equations for an AR(p)-process and compare them
with the Yule–Walker equations.

34. Show that the density of the t-distribution with m degrees of freedom converges to
the density of the standard normal distribution as m tends to infinity. Hint: Apply the
dominated convergence theorem (Lebesgue).

35. Let (Yt )t be a stationary and causal ARCH (1)-process with |a1 | < 1.
110                                                        Chapter 2.       Models of Time Series

                              P∞      j 2 2
   (i) Show that Yt2 = a0                                  2
                                 j=0 a1 Zt Zt−1 · · · · · Zt−j with probability one.

  (ii) Show that E(Yt2 ) = a0 /(1 − a1 ).
 (iii) Evaluate E(Yt4 ) and deduce that E(Z14 )a21 < 1 is a sufficient condition for E(Yt4 ) <
       ∞.

Hint: Theorem 2.1.5.

36. Determine the joint density of Yp+1 , . . . , Yn for an ARCH (p)-process Yt with normal
distributed Zt given that Y1 = y1 , . . . , Yp = yp . Hint: Recall that the joint density fX,Y
of a random vector (X, Y ) can be written in the form fX,Y (x, y) = fY |X (y|x)fX (x),
where fY |X (y|x) := fX,Y (x, y)/fX (x) if fX (x) > 0, and fY |X (y|x) := fY (y), else, is the
(conditional) density of Y given X = x and fX , fY is the (marginal) density of X, Y .

37. Generate an ARCH (1)-process (Yt )t with a0 = 1 and a1 = 0.5. Plot (Yt )t as
well as (Yt2 )t and its partial autocorrelation function. What is the value of the partial
autocorrelation coefficient at lag 1 and lag 2? Use PROC ARIMA to estimate the parameter
of the AR(1)-process (Yt2 )t and apply the Box–Ljung test.

38. (Hong Kong Data) Fit an GARCH (p, q)-model to the daily Hang Seng closing index
of Hong Kong stock prices from July 16, 1981, to September 31, 1983. Consider in
particular the cases p = q = 2 and p = 3, q = 2.

39. (Zurich Data) The daily value of the Zurich stock index was recorded between
January 1st, 1988 and December 31st, 1988. Use a difference filter of first order to
remove a possible trend. Plot the (trend-adjusted) data, their squares, the pertaining
partial autocorrelation function and parameter estimates. Can the squared process be
considered as an AR(1)-process?

                                       −1
40. (i) Show that the matrix Σ0             in Example 2.3.1 has the determinant 1 − a2 .
      (ii) Show that the matrix Pn in Example 2.3.3 has the determinant (1 + a2 + a4 +
           · · · + a2n )/(1 + a2 )n .


41. (Car Data) Apply the Box–Jenkins program to the Car Data.

42. Consider the two state-space models

                                      Xt+1 = At Xt + Bt εt+1
                                         Yt = Ct Xt + ηt

and

                                      X̃t+1 = Ãt X̃t + B̃t ε̃t+1
                                         Ỹt = C̃t X̃t + η̃t ,

where (εTt , ηtT , ε̃Tt , η̃tT )T is a white noise. Derive a state-space representation for (YtT , ỸtT )T .
Exercises                                                                                 111

43. FindP
          the state-space
                          representation of an ARIMA(p, d, q)-process (Yt )t . Hint: Yt =
∆d Yt − dj=1 (−1)j dd Yt−j and consider the state vector Zt := (Xt , Yt−1 )T , where Xt ∈
Rp+q is the state vector of the ARMA(p, q)-process ∆d Yt and Yt−1 := (Yt−d , . . . , Yt−1 )T .

44. Assume that the matrices A and B in the state-space model (2.18) are independent
of t and that all eigenvalues of A are in the interior of the unit circle {z ∈ C : |z| ≤
1}. Show that
            P
               the unique stationary solution of equation (2.18) is given by the infinite
series Xt = ∞        j
               j=0 A Bεt−j+1 . Hint: The condition on the eigenvalues is equivalent to
                                    that there exists some ε > 0 such that (Ir − Az)−1
det(Ir − Az) 6= 0 for |z| ≤ 1. Show P
has the power series representation ∞       j j
                                      j=0 A z in the region |z| < 1 + ε.


45. Apply PROC STATESPACE to the simulated data of the AR(2)-process in Exercise 26.

46. (Gas Data) Apply PROC STATESPACE to the gas data. Can they be stationary?
Compute the one-step predictors and plot them together with the actual data.
Chapter 3

The Frequency Domain
Approach of a Time Series

The preceding sections focussed on the analysis of a time series in the time domain,
mainly by modelling and fitting an ARMA(p, q)-process to stationary sequences
of observations. Another approach towards the modelling and analysis of time
series is via the frequency domain: A series is often the sum of a whole variety of
cyclic components, from which we had already added to our model (1.2) a long
term cyclic one or a short term seasonal one. In the following we show that a
time series can be completely decomposed into cyclic components. Such cyclic
components can be described by their periods and frequencies. The period is the
interval of time required for one cycle to complete. The frequency of a cycle is its
number of occurrences during a fixed time unit; in electronic media, for example,
frequencies are commonly measured in hertz, which is the number of cycles per
second, abbreviated by Hz. The analysis of a time series in the frequency domain
aims at the detection of such cycles and the computation of their frequencies.

Note that in this chapter the results are formulated for any data y1 , . . . , yn , which
need for mathematical reasons not to be generated by a stationary process. Nev-
ertheless it is reasonable to apply the results only to realizations of stationary
processes, since the empirical autocovariance function occurring below has no in-
terpretation for non-stationary processes, see Exercise 18 in Chapter 1.
114                Chapter 3. The Frequency Domain Analysis of a Times Series

3.1     Least Squares Approach with Known Frequen-
        cies

A function f : R −→ R is said to be periodic with period P > 0 if f (t + P ) = f (t)
for any t ∈ R. A smallest period is called a fundamental one. The reciprocal value
λ = 1/P of a fundamental period is the fundamental frequency. An arbitrary
(time) interval of length L consequently shows Lλ cycles of a periodic function f
with fundamental frequency λ. Popular examples of periodic functions are sine
and cosine, which both have the fundamental period P = 2π. Their fundamental
frequency, therefore, is λ = 1/(2π). The predominant family of periodic functions
within time series analysis are the harmonic components


            m(t) := A cos(2πλt) + B sin(2πλt),          A, B ∈ R, λ > 0,


which have period 1/λ and frequency λ. A linear combination of harmonic com-
ponents


                         r
                         X                                    
           g(t) := µ +         Ak cos(2πλk t) + Bk sin(2πλk t) ,   µ ∈ R,
                         k=1



will be named a harmonic wave of length r.


Example 3.1.1. (Star Data). To analyze physical properties of a pulsating star,
the intensity of light emitted by this pulsar was recorded at midnight during 600
consecutive nights. The data are taken from Newton (1988). It turns out that a
harmonic wave of length two fits the data quite well. The following figure displays
the first 160 data yt and the sum of two harmonic components with period 24 and
29, respectively, plus a constant term µ = 17.07 fitted to these data, i.e.,


              ỹt = 17.07 − 1.86 cos(2π(1/24)t) + 6.82 sin(2π(1/24)t)
                          + 6.09 cos(2π(1/29)t) + 8.01 sin(2π(1/29)t).


The derivation of these particular frequencies and coefficients will be the content
of this section and the following ones. For easier access we begin with the case of
known frequencies but unknown constants.
3.1 Least Squares Approach with Known Frequencies                               115




               Figure 3.1.1. Intensity of light emitted by a pulsat-
               ing star and a fitted harmonic wave.

Model: MODEL1
Dependent Variable: LUMEN


                            Analysis of Variance

                           Sum of            Mean
Source          DF        Squares          Square       F Value        Prob>F

Model            4          48400           12100       49297.2        <.0001
Error          595      146.04384         0.24545
C Total        599          48546

    Root MSE          0.49543       R-square        0.9970
    Dep Mean         17.09667       Adj R-sq        0.9970
    C.V.              2.89782

                            Parameter Estimates

                     Parameter       Standard
116                   Chapter 3. The Frequency Domain Analysis of a Times Series

 Variable     DF        Estimate              Error         t Value        Prob > |T|

 Intercept     1        17.06903          0.02023           843.78              <.0001
 sin24         1         6.81736          0.02867           237.81              <.0001
 cos24         1        -1.85779          0.02865           -64.85              <.0001
 sin29         1         8.01416          0.02868           279.47              <.0001
 cos29         1         6.08905          0.02865           212.57              <.0001

 ***      Program 3 _1_1   ***;
 TITLE1 ’ Harmonic wave ’;
 TITLE2 ’ Star Data ’;

DATA data1 ;
  INFILE ’c :\ data \ star . txt ’;
  INPUT lumen @@ ;
  t = _N_ ;
  pi = CONSTANT ( ’ PI ’);
  sin24 = SIN (2* pi * t /24);
  cos24 = COS (2* pi * t /24);
  sin29 = SIN (2* pi * t /29);
  cos29 = COS (2* pi * t /29);

PROC REG DATA = data1 ;
  MODEL lumen = sin24 cos24 sin29 cos29 ;
  OUTPUT OUT = regdat P = predi ;

 SYMBOL1 C = GREEN V = DOT I = NONE H =.4;
 SYMBOL2 C = RED V = NONE I = JOIN ;
 AXIS1 LABEL =( ANGLE =90 ’ lumen ’);
 AXIS2 LABEL =( ’t ’);
 PROC GPLOT DATA = regdat ( OBS =160);
   PLOT lumen * t =1 predi * t =2 / OVERLAY VAXIS = AXIS1
                                            HAXIS = AXIS2 ;
 RUN ; QUIT ;
                                                                                                    

The number π is generated by the SAS func-        on the harmonic components which are on the
tion CONSTANT with the argument ’PI’. It is       right side. A temporary data file named regdat
then stored in the variable pi. This is used      is generated by the OUTPUT statement. It con-
to define the variables cos24, sin24, cos29 and   tains the original variables of the source data
sin29 for the harmonic components. The other      step and the values predicted by the regression
variables here are lumen read from an external    for lumen in the variable predi.
file and t generated by N .
                                                  The last part of the program creates a plot of
The PROC REG statement causes SAS to make a       the observed lumen values and a curve of the
regression from the independent variable lumen    predicted values restricted on the first 160 ob-
defined on the left side of the MODEL statement   servations.
3.1 Least Squares Approach with Known Frequencies                               117




The output of Program 3 1 1 is the standard text output of a regression with an
ANOVA table and parameter estimates. For further information on how to read
the output, we refer to Chapter 3 of Falk et al. (2002).

In a first step we will fit a harmonic component with fixed frequency λ to mean
value adjusted data yt − ȳ, t = 1, . . . , n. To this end, we put with arbitrary A,
B∈R
                            m(t) = Am1 (t) + Bm2 (t),

where
                    m1 (t) := cos(2πλt),        m2 (t) = sin(2πλt).

In order to get a proper fit uniformly over all t, it is reasonable to choose the
constants A and B as minimizers of the residual sum of squares
                                       n
                                       X
                         R(A, B) :=          (yt − ȳ − m(t))2 .
                                       t=1


Taking partial derivatives of the function R with respect to A and B and equating
them to zero, we obtain that the minimizing pair A, B has to satisfy the normal
equations
                                        n
                                        X
                       Ac11 + Bc12 =          (yt − ȳ) cos(2πλt)
                                        t=1
                                        Xn
                       Ac21 + Bc22 =          (yt − ȳ) sin(2πλt),
                                        t=1


where
                                       n
                                       X
                               cij =         mi (t)mj (t).
                                       t=1

If c11 c22 − c12 c21 6= 0, the uniquely determined pair of solutions A, B of these
equations is

                                     c22 C(λ) − c12 S(λ)
                        A = A(λ) = n
                                       c11 c22 − c12 c21
                                     c21 C(λ) − c11 S(λ)
                        B = B(λ) = n                     ,
                                       c12 c21 − c11 c22
118                   Chapter 3. The Frequency Domain Analysis of a Times Series

where
                                        n
                                     1X
                           C(λ) :=         (yt − ȳ) cos(2πλt),
                                     n t=1
                                        n
                                     1X
                           S(λ) :=         (yt − ȳ) sin(2πλt)                     (3.1)
                                     n t=1

are the empirical (cross-) covariances of (yt )1≤t≤n and (cos(2πλt))1≤t≤n and of
(yt )1≤t≤n and (sin(2πλt))1≤t≤n , respectively. As we will see, these cross-covarian-
ces C(λ) and S(λ) are fundamental to the analysis of a time series in the frequency
domain.

The solutions A and B become particularly simple in the case of Fourier frequen-
cies λ = k/n, k = 0, 1, 2, . . . , [n/2], where [x] denotes the greatest integer less
than or equal to x ∈ R. If k 6= 0 and k 6= n/2 in the case of an even sample size n,
then we obtain from (3.2) below that c12 = c21 = 0 and c11 = c22 = n/2 and thus

                               A = 2C(λ), B = 2S(λ).


Harmonic Waves with Fourier Frequencies

Next we will fit harmonic waves to data y1 , . . . , yn , where we restrict ourselves to
Fourier frequencies, which facilitates the computations. The following equations
are crucial. For arbitrary 0 ≤ k, m ≤ [n/2] we have (Exercise 3)
                                   
   X n        k         m      n,
                                           k = m = 0 or n/2,            if n is even
        cos 2π t cos 2π t = n/2, k = m 6= 0 and 6= n/2, if n is even
   t=1
               n           n       
                                     0,     k 6= m
                                   
                                   
    Xn       k        m       0,      k = m = 0 or n/2,            if n is even
         sin 2π t sin 2π t = n/2, k = m 6= 0 and 6= n/2, if n is even
    t=1
               n           n       
                                     0,     k 6= m
                                   

   X n       k        m 
        cos 2π t sin 2π t = 0.                                                      (3.2)
   t=1
               n           n

The above equations imply that the 2[n/2] + 1 vectors in Rn

                      (sin(2π(k/n)t))1≤t≤n ,      k = 1, . . . , [n/2],

and
                      (cos(2π(k/n)t))1≤t≤n ,       k = 0, . . . , [n/2],
                  n
span the space R . Note that by (3.2) in the case of n odd the above 2[n/2]+1 = n
vectors are linearly independent, whereas in the case of an even sample size n the
3.1 Least Squares Approach with Known Frequencies                                           119

vector (sin(2π(k/n)t))1≤t≤n with k = n/2 is the null vector (0, . . . , 0) and the
remaining n vectors are again linearly independent. As a consequence we obtain
that for a given set of data y1 , . . . , yn , there exist in any case uniquely determined
coefficients Ak and Bk , k = 0, . . . , [n/2], with B0 := 0 such that
                 [n/2]                         k 
                 X                 k 
          yt =             Ak cos 2π t + Bk sin 2π t ,                 t = 1, . . . , n.   (3.3)
                                    n             n
                 k=0



Next we determine these coefficients Ak , Bk . They are obviously minimizers of the
residual sum of squares
                            [n/2]                         k  2
                   n
                                                                    !
                 X           X             k 
            R :=       yt −         αk cos 2π t + βk sin 2π t
                  t=1
                                              n               n
                                k=0

with respect to αk , βk . Taking partial derivatives, equating them to zero and
taking into account the linear independence of the above vectors, we obtain that
these minimizers solve the normal equations
        n
        X          k       Xn       k 
            yt cos 2π t = αk     cos2 2π t ,               k = 0, . . . , [n/2]
        t=1
                     n       t=1
                                        n
        n
        X          k       Xn       k 
            yt sin 2π t = βk     sin2 2π t ,               k = 1, . . . , [(n − 1)/2].
        t=1
                     n       t=1
                                        n

The solutions of this system are by (3.2) given by
               P                   
               2 n yt cos 2π k t , k = 1, . . . , [(n − 1)/2]
                 n    t=1
        Ak =                    n 
               1 Pn yt cos 2π k t , k = 0 and k = n/2, if n is even
                 n    t=1          n
                       n
                 2X           k 
         Bk =          yt sin 2π t ,     k = 1, . . . , [(n − 1)/2].                       (3.4)
                 n t=1          n

One can substitute Ak , Bk in R to obtain directly that R = 0 in this case. A
popular equivalent formulation of (3.3) is
                 [n/2]                         k 
         Ã0   X                   k 
    yt =     +             Ak cos 2π t + Bk sin 2π t ,                 t = 1, . . . , n,   (3.5)
          2                         n             n
                  k=1

with Ak , Bk as in (3.4) for k = 1, . . . , [n/2], Bn/2 = 0 for an even n, and
                                                 n
                                              2X
                                Ã0 = 2A0 =         yt = 2ȳ.
                                              n t=1
120                  Chapter 3. The Frequency Domain Analysis of a Time Series

Up to the factor 2, the coefficients Ak , Bk coincide with the empirical covariances
C(k/n) and S(k/n), k = 1, . . . , [(n − 1)/2], defined in (3.1). This follows from the
equations (Exercise 2)
            n
            X       k  X  n      k 
                cos 2π t =     sin 2π t = 0,                k = 1, . . . , [n/2].        (3.6)
            t=1
                      n    t=1
                                     n




3.2      The Periodogram

In the preceding section we exactly fitted a harmonic wave with Fourier frequencies
λk = k/n, k = 0, . . . , [n/2], to a given series y1 , . . . , yn . Example 3.1.1 shows
that a harmonic wave including only two frequencies already fits the Star Data
quite well. There is a general tendency that a time series is governed by different
frequencies λ1 , . . . , λr with r < [n/2], which on their part can be approximated
by Fourier frequencies k1 /n, . . . , kr /n if n is sufficiently large. The question which
frequencies actually govern a time series leads to the intensity of a frequency λ.
This number reflects the influence of the harmonic component with frequency λ
on the series. The intensity of the Fourier frequency λ = k/n, 1 ≤ k ≤ [n/2], is
defined via its residual sum of squares. We have by (3.2), (3.6) and the normal
equations
      n                                                   2
      X                        k 
                                          k 
            yt − ȳ − Ak cos 2π t − Bk sin 2π t
      t=1
                               n             n
                       n
                       X                    n 2
                             (yt − ȳ)2 −     Ak + Bk2 ,
                                                      
                   =                                       k = 1, . . . , [(n − 1)/2],
                       t=1
                                            2

and
                             n                   [n/2]
                             X
                                            2n X
                                                 A2k + Bk2 .
                                                          
                                 (yt − ȳ) =
                             t=1
                                             2
                                                 k=1

The number (n/2)(A2k +Bk2 ) = 2n(C 2 (k/n)+S 2 (k/n)) is therefore the contribution
of the harmonic component
                    Pn         with Fourier frequency k/n, k = 1, . . . , [(n − 1)/2], to
the total variation t=1 (yt − ȳ)2 . It is called the intensity of the frequency k/n.
Further insight is gained from the Fourier analysis in Theorem 3.2.4. For general
frequencies λ ∈ R we define its intensity now by

     I(λ) = n C(λ)2 + S(λ)2
                                

                    n                             n
                                                                            !
             1 X                         2  X                        2
          =            (yt − ȳ) cos(2πλt) +         (yt − ȳ) sin(2πλt)      .    (3.7)
             n     t=1                           t=1
3.2 The Periodogram                                                                121

This function is called the periodogram. The following Theorem implies in particu-
lar that it is sufficient to define the periodogram on the interval [0, 1]. For Fourier
frequencies we obtain from (3.4) and (3.6)

                             n 2
                              A + Bk2 ,
                                     
                  I(k/n) =                    k = 1, . . . , [(n − 1)/2].
                             4 k

Theorem 3.2.1. We have



  (i) I(0) = 0,



 (ii) I is an even function, i.e., I(λ) = I(−λ) for any λ ∈ R,



(iii) I has the period 1.




Proof. Part (i) follows from sin(0) = 0 and cos(0) = 1, while (ii) is a consequence
of cos(−x) = cos(x), sin(−x) = − sin(x), x ∈ R. Part (iii) follows from the fact
that 2π is the fundamental period of sin and cos.




Theorem 3.2.1 implies that the function I(λ) is completely determined by its values
on [0, 0.5]. The periodogram is often defined on the scale [0, 2π] instead of [0, 1]
by putting I ∗ (ω) := 2I(ω/(2π)); this version is, for example, used in SAS. In view
of Theorem 3.2.4 below we prefer I(λ), however.

The following figure displays the periodogram of the Star Data from Example 3.1.1.
It has two obvious peaks at the Fourier frequencies 21/600 = 0.035 ≈ 1/28.57
and 25/600 = 1/24 ≈ 0.04167. This indicates that essentially two cycles with
period 24 and 28 or 29 are inherent in the data. A least squares approach for the
determination of the coefficients Ai , Bi , i = 1, 2 with frequencies 1/24 and 1/29 as
done in Program 3 1 1 then leads to the coefficients in Example 3.1.1.
122                Chapter 3. The Frequency Domain Analysis of a Time Series




      Figure 3.2.1. Periodogram of the Star Data.


--------------------------------------------------------------
                                COS_01

                               34.1933
--------------------------------------------------------------
        PERIOD     COS_01      SIN_01         P        LAMBDA

       28.5714     -0.91071       8.54977       11089.19      0.035000
       24.0000     -0.06291       7.73396        8972.71      0.041667
       30.0000      0.42338      -3.76062        2148.22      0.033333
       27.2727     -0.16333       2.09324         661.25      0.036667
       31.5789      0.20493      -1.52404         354.71      0.031667
       26.0870     -0.05822       1.18946         212.73      0.038333


          Table 3.2.1. Print of the constant Ã0 = 2A0 = 2ȳ and of the
          six Fourier frequencies λ = k/n with largest I(k/n)-values, their
          inverses and the Fourier coefficients pertaining to the Star Data.
3.2 The Periodogram                                                                            123


 ***      Program 3 _2_1                   ***;
 TITLE1 ’ Periodogram ’;
 TITLE2 ’ Star Data ’;

DATA data1 ;
  INFILE ’c :\ data \ star . txt ’;
  INPUT lumen @@ ;

PROC SPECTRA DATA = data1 COEF P OUT = data2 ;
  VAR lumen ;

DATA data3 ;
  SET data2 ( FIRSTOBS =2);
  p = P_01 /2;
  lambda = FREQ /(2* CONSTANT ( ’ PI ’));
  DROP P_01 FREQ ;

SYMBOL1 V = NONE C = GREEN I = JOIN ;
AXIS1 LABEL =( ’ I ( ’ F = CGREEK ’l ) ’);
AXIS2 LABEL =( F = CGREEK ’l ’);
PROC GPLOT DATA = data3 ( OBS =50);
  PLOT p * lambda =1 / VAXIS = AXIS1 HAXIS = AXIS2 ;

PROC SORT DATA = data3 OUT = data4 ;
  BY DESCENDING p ;

 PROC PRINT DATA = data2 ( OBS =1) NOOBS ;
   VAR COS_01 ;
 PROC PRINT DATA = data4 ( OBS =6) NOOBS ;
 RUN ; QUIT ;
                                                                                                      

The first step is to read the star data from        (dividing FREQ by 2π to eliminate an additional
an external file into a data set.          Using    factor 2π) and p (dividing P 01 by 2) are cre-
the SAS procedure SPECTRA with the options          ated and the no more needed ones are dropped.
P (periodogram), COEF (Fourier coefficients),       By means of the data set option FIRSTOBS=2 the
OUT=data2 and the VAR statement specifying          first observation of data2 is excluded from the
the variable of interest, an output data set is     resulting data set.
generated. It contains periodogram data P 01
evaluated at the Fourier frequencies, a FREQ        The following PROC GPLOT just takes the first 50
variable for this frequencies, the pertaining pe-   observations of data3 into account. This means
riod in the variable PERIOD and the variables       a restriction of lambda up to 50/600 = 1/12,
COS 01 and SIN 01 with the coefficients for the     the part with the greatest peaks in the peri-
harmonic waves. Because SAS uses different          odogram.
definitions for the frequencies and the peri-
odogram, here in data3 new variables lambda
                                                    The procedure SORT generates a new data set
124                    Chapter 3. The Frequency Domain Analysis of a Time Series

data4 containing the same observations as the      two PROC PRINT statements at the end make
input data set data3, but they are sorted in de-   SAS print to datasets data2 and data4.
scending order of the periodogram values. The




The first part of the output is the coefficient Ã0 which is equal to two times the
mean of the lumen data. The results for the Fourier frequencies with the six
greatest periodogram values constitute the second part of the output. Note that
the meaning of COS 01 and SIN 01 are slightly different from the definitions of Ak
and Bk in (3.4), because SAS lets the index run from 0 to n − 1 instead of 1 to n.

The Fourier Transform

From Euler’s equation eiz = cos(z) + i sin(z), z ∈ R, we obtain for λ ∈ R
                                                       n
                                                    1X
                     D(λ) := C(λ) − iS(λ) =               (yt − ȳ)e−i2πλt .
                                                    n t=1

The periodogram is a function of D(λ), since I(λ) = n|D(λ)|2 . Unlike the pe-
riodogram, the number D(λ) contains the complete information about C(λ) and
S(λ), since both values can be recovered from the complex number D(λ), being
its real and negative imaginary part. In the following we view the data y1 , . . . , yn
again as a clipping from an infinite series yt , t ∈ Z. Let a := (at )t∈Z be an ab-
solutely summable sequence of real numbers. For such a sequence a the complex
valued function                  X
                        fa (λ) =    at e−i2πλt ,     λ ∈ R,
                                       t∈Z

is said to be its Fourier transform. It links the empirical autocovariance function
to the periodogram as it will turn out in  P Theorem 3.2.3 thatP the latter is the
Fourier transform of the first. Note that t∈Z |at e−i2πλt | = t∈Z |at | < ∞, since
|eix | = 1 for any x ∈ R. The Fourier transform of at = (yt − ȳ)/n, t = 1, . . . , n,
and at = 0 elsewhere is then given by D(λ). The following elementary properties
of the Fourier transform are immediate consequences of the arguments in the proof
of Theorem 3.2.1. In particular we obtain that the Fourier transform is already
determined by its values on [0, 0.5].
Theorem 3.2.2. We have

                 P
  (i) fa (0) =     t∈Z at ,

 (ii) fa (−λ) and fa (λ) are conjugate complex numbers i.e., fa (−λ) = fa (λ),
3.2 The Periodogram                                                       125

 (iii) fa has the period 1.


Autocorrelation Function and Periodogram
Information about cycles that are inherent in given data, can also be deduced
from the empirical autocorrelation function. The following figure displays the
autocorrelation function of the Bankruptcy Data, introduced in Exercise 17 of
Chapter 1.




                   Figure 3.2.2. Autocorrelation function of the
                   Bankruptcy Data.

 ***      Program 3 _2_2   ***
 TITLE1 ’ Correlogram ’;
 TITLE2 ’ Bankruptcy Data ’;

DATA data1 ;
  INFILE ’c :\ data \ bankrupt . txt ’;
  INPUT year bankrupt ;

PROC ARIMA DATA = data1 ;
126                     Chapter 3. The Frequency Domain Analysis of a Time Series

   IDENTIFY VAR = bankrupt NLAG =64 OUTCOV = corr NOPRINT ;

 AXIS1 LABEL =( ’ r ( k ) ’);
 AXIS2 LABEL =( ’k ’);
 SYMBOL1 V = DOT C = GREEN I = JOIN H =0.4 W =1;
 PROC GPLOT DATA = corr ;
   PLOT CORR * LAG / VAXIS = AXIS1 HAXIS = AXIS2 VREF =0;
 RUN ; QUIT ;
                                                                                                  

After reading the data from an external file into   them into a new data set. The correlogram is
a data step, the procedure ARIMA calculates the     generated using PROC GPLOT.
empirical autocorrelation function and stores




The next figure displays the periodogram of the Bankruptcy Data.




        Figure 3.2.3. Periodogram of the Bankruptcy Data.
3.2 The Periodogram                                                                     127


 ***      Program 3 _2_3   ***;
 TITLE1 ’ Periodogram ’;
 TITLE2 ’ Bankruptcy Data ’;

DATA data1 ;
  INFILE ’c :\ data \ bankrupt . txt ’;
  INPUT year bankrupt ;

PROC SPECTRA DATA = data1 P OUT = data2 ;
  VAR bankrupt ;

DATA data3 ;
  SET data2 ( FIRSTOBS =2);
  p = P_01 /2;
  lambda = FREQ /(2* CONSTANT ( ’ PI ’));

 SYMBOL1 V = NONE C = GREEN I = JOIN ;
 AXIS1 LABEL =( ’I ’ F = CGREEK ’( l ) ’) ;
 AXIS2 ORDER =(0 TO 0.5 BY 0.05) LABEL =( F = CGREEK ’l ’);
 PROC GPLOT DATA = data3 ;
   PLOT p * lambda / VAXIS = AXIS1 HAXIS = AXIS2 ;
 RUN ; QUIT ;
                                                                                              


This program again first reads the data        transformations of the periodogram and the
and then starts a spectral analysis by PROC    frequency values generated by PROC SPECTRA
SPECTRA. Due to the reasons mentioned in the   done in data3. The graph results from the
comments to Program 3 2 1 there are some       statements in PROC GPLOT.




The autocorrelation function of the Bankruptcy Data has extreme values at about
multiples of 9 years, which indicates a period of length 9. This is underlined by
the periodogram in Figure 3.2.3, which has a peak at λ = 0.11, corresponding to
a period of 1/0.11 ∼ 9 years as well. As mentioned above, there is actually a close
relationship between the empirical autocovariance function and the periodogram.
The corresponding result for the theoretical autocovariances is given in Chapter 4.

Theorem 3.2.3.  PDenote   by c the empirical autocovariance function of y1P   , . . . , yn ,
                 n−k                                                             n
i.e., c(k) = n−1 j=1 (yj − ȳ)(yj+k − ȳ), k = 0, . . . , n−1, where ȳ := n−1 j=1 yj .
128                    Chapter 3. The Frequency Domain Analysis of a Time Series

Then we have with c(−k) := c(k)
                                              n−1
                                              X
                           I(λ) = c(0) + 2          c(k) cos(2πλk)
                                              k=1
                                        n−1
                                        X
                                  =              c(k)e−i2πλk .
                                      k=−(n−1)



Proof. From the equation cos(x1 ) cos(x2 ) + sin(x1 ) sin(x2 ) = cos(x1 − x2 ) for
x1 , x2 ∈ R we obtain
                            n    n
                         1 XX
             I(λ) =                (ys − ȳ)(yt − ȳ)
                         n s=1 t=1
                                                                   
                        × cos(2πλs) cos(2πλt) + sin(2πλs) sin(2πλt)
                           n   n
                        1 XX
                      =           ast ,
                        n s=1 t=1

where ast := (ys − ȳ)(yt − ȳ) cos(2πλ(s − t)). Since ast = ats and cos(0) = 1 we
have moreover



                   n             n−1 n−k
              1X          2 XX
       I(λ) =       att +        ajj+k
              n t=1       n  j=1 k=1
                 n                      n−1     n−k
                1X               2
                                        X    1X                        
            =           (yt − ȳ) + 2               (yj − ȳ)(yj+k − ȳ) cos(2πλk)
                n t=1                         n j=1
                                        k=1
                          n−1
                          X
            = c(0) + 2          c(k) cos(2πλk).
                          k=1



The complex representation of the periodogram is then obvious:
                n−1
                X                                  n−1
                                                   X
                        c(k)e−i2πλk = c(0) +             c(k) ei2πλk + e−i2πλk
                                                                                 

           k=−(n−1)                                k=1
                                                   n−1
                                                   X
                                        = c(0) +         c(k)2 cos(2πλk) = I(λ).
                                                   k=1
3.2 The Periodogram                                                                   129

Inverse Fourier Transform
The empirical autocovariance function can be recovered from the periodogram,
which is the content of our next result. Since the periodogram is the Fourier
transform of the empirical autocovariance function, this result is a special case of
the inverse Fourier transform in Theorem 3.2.5 below.
Theorem 3.2.4. The periodogram
                                   n−1
                                   X
                      I(λ) =                 c(k)e−i2πλk ,             λ ∈ R,
                               k=−(n−1)

satisfies the inverse formula
                             Z 1
                      c(k) =     I(λ)ei2πλk dλ,                   |k| ≤ n − 1.
                               0


In particular for k = 0 we obtain
                                                Z 1
                                       c(0) =           I(λ) dλ.
                                                    0
                                        Pn
The sample variance c(0) = n−1                     2
                                      j=1 (yj − ȳ) equals, therefore, the area under
                                              R λ2
the curve I(λ), 0 ≤ λ ≤ 1.      The integral λ1 I(λ) dλ can be interpreted as that
portion of the total variance c(0), which is contributed by the harmonic waves with
frequencies λ ∈ [λ1 , λ2 ], where 0 ≤ λ1 < λ2 ≤ 1. The periodogram consequently
shows the distribution of the total variance among the frequencies λ ∈ [0, 1]. A
peak of the periodogram at a frequency λ0 implies, therefore, that a large part of
the total variation c(0) of the data can be explained by the harmonic wave with
that frequency λ0 .

The following result is the inverse formula for general Fourier transforms.
Theorem 3.2.5. ForP an absolutely summable sequence a := (at )t∈Z with Fourier
transform fa (λ) = t∈Z at e−i2πλt , λ ∈ R, we have
                            Z 1
                     at =       fa (λ)ei2πλt dλ,   t ∈ Z.
                                   0


Proof. The dominated convergence theorem implies
              Z 1                   Z 1X           
                  fa (λ)ei2πλt
                               dλ =       as e−i2πλs ei2πλt dλ
                  0                             0       s∈Z
                                             X           Z 1
                                         =          as         ei2πλ(t−s) dλ = at ,
                                             s∈Z          0
130                 Chapter 3. The Frequency Domain Analysis of a Time Series

since                    Z 1                    (
                               i2πλ(t−s)         1, if s = t
                               e           dλ =
                          0                      0, if s 6= t.



The inverse Fourier transformation shows that the complete sequence (at )t∈Z can
be recovered from its Fourier transform. This implies in particular that the Fourier
transforms of absolutely summable sequences are uniquely determined. The analy-
sis of a time series in the frequency domain is, therefore, equivalent to its analysis
in the time domain, which is based on an evaluation of its autocovariance function.

Aliasing

Suppose that we observe a continuous time process (Zt )t∈R only through its values
at k∆, k ∈ Z, where ∆ > 0 is the sampling interval, i.e., we actually observe
(Yk )k∈Z = (Zk∆ )k∈Z . Take, for example, Zt := cos(2π(9/11)t), t ∈ R. The
following figure shows that at k ∈ Z, i.e., ∆ = 1, the observations Zk coincide
with Xk , where Xt := cos(2π(2/11)t), t ∈ R. With the sampling interval ∆ = 1,
the observations Zk with high frequency 9/11 can, therefore, not be distinguished
from the Xk , which have low frequency 2/11.




                  Figure 3.2.4. Aliasing of cos(2π(9/11)k) and
                  cos(2π(2/11)k).
3.2 The Periodogram                                                                            131


 ***      Program 3 _2_4                   ***;
 TITLE1 ’ Aliasing ’;

DATA data1 ;
  DO t =1 TO 14 BY .01;
    y1 = COS (2* CONSTANT ( ’ PI ’)*2/11* t );
    y2 = COS (2* CONSTANT ( ’ PI ’)*9/11* t );
    OUTPUT ;
  END ;

DATA data2 ;
  DO t0 =1 TO 14;
    y0 = COS (2* CONSTANT ( ’ PI ’)*2/11* t0 );
    OUTPUT ;
  END ;

DATA data3 ;
  MERGE data1 data2 ;

 SYMBOL1 V = DOT C = GREEN I = NONE H =.8;
 SYMBOL2 V = NONE C = RED     I = JOIN ;
 AXIS1 LABEL = NONE ;
 AXIS2 LABEL =( ’t ’);
 PROC GPLOT DATA = data3 ;
   PLOT y0 * t0 =1 y1 * t =2 y2 * t =2 / OVERLAY VAXIS = AXIS1
                                          HAXIS = AXIS2 VREF =0;
 RUN ; QUIT ;
                                                                                                      

In the first data step a tight grid for the cosine   After merging the two data sets the two waves
waves with frequencies 2/11 and 9/11 is gen-         are plotted using the JOIN option in the SYMBOL
erated. In the second data step the values of        statement while the values at the observation
the cosine wave with frequency 2/11 are gen-         points are displayed in the same graph by dot
erated just for integer values of t symbolizing      symbols.
the observation points.




This phenomenon that a high frequency component takes on the values of a lower
one, is called aliasing. It is caused by the choice of the sampling interval ∆, which
is 1 in Figure 3.2.4. If a series is not just a constant, then the shortest observable
period is 2∆. The highest observable frequency λ∗ with period 1/λ∗ , therefore,
satisfies 1/λ∗ ≥ 2∆, i.e., λ∗ ≤ 1/(2∆). This frequency 1/(2∆) is known as the
132                    Chapter 3. The Frequency Domain Approach of a Time Series

Nyquist frequency. The sampling interval ∆ should, therefore, be chosen small
enough, so that 1/(2∆) is above the frequencies under study. If, for example, a
process is a harmonic wave with frequencies λ1 , . . . , λp , then ∆ should be chosen
such that λi ≤ 1/(2∆), 1 ≤ i ≤ p, in order to visualize p different frequencies.
For the periodic curves in Figure 3.2.4 this means to choose 9/11 ≤ 1/(2∆) or
∆ ≤ 11/18.

Exercises

1. Let y(t) = A cos(2πλt) + B sin(2πλt) be a harmonic component. Show that y can be
written as y(t) = α cos(2πλt−ϕ), where α is the amplitiude, i.e., the maximum departure
of the wave from zero and ϕ is the phase displacement.

2. Show that
                                            (
                      X
                      n
                                             n,                            λ∈Z
                            cos(2πλt) =
                      t=1
                                             cos(πλ(n + 1)) sin(πλn)
                                                             sin(πλ)
                                                                     ,     λ 6∈ Z
                                            (
                      X
                      n
                                             0,                            λ∈Z
                            sin(2πλt) =
                      t=1
                                             sin(πλ(n + 1)) sin(πλn)
                                                             sin(πλ)
                                                                     ,     λ 6∈ Z.
                  Pn      i2πλt
Hint: Compute        t=1 e      , where eiϕ = cos(ϕ) + i sin(ϕ) is the complex valued expo-
nential function.

3. Verify the equations (3.2). Hint: Exercise 2.

4. Suppose that the time series (yt )t satisfies the additive model with seasonal component
                                 X
                                 s            k  X        k 
                                                           s
                       s(t) =          Ak cos 2π t + Bk sin 2π t .
                                                s             s
                                 k=1                      k=1

Show that s(t) is eliminated by the seasonal differencing ∆s yt = yt − yt−s .

5. Fit a harmonic component with frequency λ to a time series y1 , . . . , yN , where λ ∈ Z
and λ − 0.5 ∈ Z. Compute the least squares estimator and the pertaining residual sum
of squares.

6. Put yt = t, t = 1, . . . , n. Show that
                                          n
                    I(k/n) =                     ,     k = 1, . . . , [(n − 1)/2].
                                   4 sin2 (πk/n)
Hint: Use the equations
                       X
                       n−1
                                              sin(nθ)      n cos((n − 0.5)θ)
                              t sin(θt) =                −
                        t=1
                                            4 sin2 (θ/2)       2 sin(θ/2)
                       X
                       n−1
                                            n sin((n − 0.5)θ)   1 − cos(nθ)
                              t cos(θt) =                     −              .
                       t=1
                                                2 sin(θ/2)      4 sin2 (θ/2)
Exercises                                                                                     133

7. (Unemployed1 Data) Plot the periodogram of the first order differences of the numbers
of unemployed in the building trade as introduced in Example 1.1.1.

8. (Airline Data) Plot the periodogram of the variance stabilized and trend adjusted
Airline Data, introduced in Example 1.3.1. Add a seasonal adjustment and compare the
periodograms.

9. The contribution of the autocovariance c(k), k ≥ 1, to the periodogram can be
illustrated by plotting the functions ± cos(2πλk), λ ∈ [0.5].

  (i) Which conclusion about the intensities of large or small frequencies can be drawn
      from a positive value c(1) > 0 or a negative one c(1) < 0?
  (ii) Which effect has an increase of |c(2)| if all other parameters remain unaltered?
 (iii) What can you say about the effect of an increase of c(k) on the periodogram at
       the values 40, 1/k, 2/k, 3/k, . . . and the intermediate values 1/2k, 3/(2k), 5/(2k)?
       Illustrate the effect at a time series with seasonal component k = 12.

10. Establish a version of the inverse Fourier transform in real terms.

11. Let a = (at )t∈Z and b = (bt )t∈Z be absolute summable sequences.

  (i) Show that for αa + βb := (αat + βbt )t∈Z , α, β ∈ R,

                                    fαa+βb (λ) = αfa (λ) + βfb (λ).

  (ii) For ab := (at bt )t∈Z we have
                                                       Z 1
                         fab (λ) = fa ∗ fb (λ) :=               fa (µ)fb (λ − µ) dµ.
                                                           0
                                  P
 (iii) Show that for a ∗ b := (       s∈Z as bt−s )t∈Z (convolution)

                                          fa∗b (λ) = fa (λ)fb (λ).

12. (Fast Fourier Transform (FFT)) The Fourier transform of a finite sequence a0 ,
a1 , . . . , aN −1 can be represented under suitable conditions as the composition of Fourier
transforms. Put
                                   X
                                   N −1
                      f (s/N ) =          at e−i2πst/N ,       s = 0, . . . , N − 1,
                                    t=0
which is the Fourier transform of length N . Suppose that N = KM with K, M ∈ N.
Show that f can be represented as Fourier transform of length K, computed for a Fourier
transform of length M .
Hint: Each t, s ∈ {0, . . . , N − 1} can uniquely be written as

               t = t0 + t1 K,      t0 ∈ {0, . . . , K − 1},        t1 ∈ {0, . . . , M − 1}
               s = s0 + s1 M,      s0 ∈ {0, . . . , M − 1},        s1 ∈ {0, . . . , K − 1}.
134                    Chapter 3. The Frequency Domain Approach of a Time Series

Sum over t0 and t1 .

13. (Star Data) Suppose that the Star Data are only observed weekly (i.e., keep only
every seventh observation). Is an aliasing effect observable?
Chapter 4

The Spectrum of a
Stationary Process

In this chapter we investigate the spectrum of a real valued stationary process,
which is the Fourier transform of its (theoretical) autocovariance function. Its
empirical counterpart, the periodogram, was investigated in the preceding sections,
cf. Theorem 3.2.3.

Let (Yt )t∈Z be a (real valued) stationary process with absolutely summable auto-
covariance function γ(t), t ∈ Z. Its Fourier transform
                    X                         X
           f (λ) :=    γ(t)e−i2πλt = γ(0) + 2    γ(t) cos(2πλt), λ ∈ R,
                   t∈Z                            t∈N

is called spectral density or spectrum of the process (Yt )t∈Z . By the inverse Fourier
transform in Theorem 3.2.5 we have
                          Z 1                  Z 1
                   γ(t) =     f (λ)ei2πλt dλ =     f (λ) cos(2πλt) dλ.
                          0                       0

For t = 0 we obtain                       Z 1
                                 γ(0) =         f (λ) dλ,
                                           0

which shows that the spectrum is a decomposition of the variance γ(0). In Sec-
tion 4.3 we will in particular compute the spectrum of an ARMA-process. As
a preparatory step we investigate properties of spectra for arbitrary absolutely
summable filters.
136                               Chapter 4. The Spectrum of a Stationary Process

4.1      Characterizations of Autocovariance Func-
         tions

Recall that the autocovariance function γ : Z → R of a stationary process (Yt )t∈Z
is given by
                   γ(h) = E(Yt+h Yt ) − E(Yt+h ) E(Yt ), h ∈ Z,
with the properties
                  γ(0) ≥ 0, |γ(h)| ≤ γ(0), γ(h) = γ(−h),        h ∈ Z.           (4.1)
The following result characterizes an autocovariance function in terms of positive
semidefiniteness.
Theorem 4.1.1. A symmetric function K : Z → R is the autocovariance func-
tion of a stationary process (Yt )t∈Z iff K is a positive semidefinite function, i.e.,
K(−n) = K(n) and               X
                                     xr K(r − s)xs ≥ 0                          (4.2)
                               1≤r,s≤n

for arbitrary n ∈ N and x1 , . . . , xn ∈ R.


Proof. It is easy to see that (4.2) is a necessary condition for K to be the autoco-
variance function of a stationary process, see Exercise 19. It remains to show that
(4.2) is sufficient, i.e., we will construct a stationary process, whose autocovariance
function is K.

We will define a family of finite-dimensional normal distributions, which satisfies
the consistency condition of Kolmogorov’s theorem, cf. Theorem 1.2.1 in Brockwell
and Davies (1991). This result implies the existence of a process (Vt )t∈Z , whose
finite dimensional distributions coincide with the given family.

Define the n × n-matrix
                              K (n) := K(r − s) 1≤r,s≤n ,
                                               

which is positive semidefinite. Consequently there exists an n-dimensional normal
distributed random vector (V1 , . . . , Vn ) with mean vector zero and covariance ma-
trix K (n) . Define now for each n ∈ N and t ∈ Z a distribution function on Rn
by
                 Ft+1,...,t+n (v1 , . . . , vn ) := P {V1 ≤ v1 , . . . , Vn ≤ vn }.
This defines a family of distribution functions indexed by consecutive integers.
Let now t1 < · · · < tm be arbitrary integers. Choose t ∈ Z and n ∈ N such that
ti = t + ni , where 1 ≤ n1 < · · · < nm ≤ n. We define now
                  Ft1 ,...,tm ((vi )1≤i≤m ) := P {Vni ≤ vi , 1 ≤ i ≤ m}.
4.1 Characterizations of Autocovariance Functions                                         137

Note that Ft1 ,...,tm does not depend on the special choice of t and n and thus,
we have defined a family of distribution functions indexed by t1 < · · · < tm
on Rm for each m ∈ N, which obviously satisfies the consistency condition of
Kolmogorov’s theorem. This result implies the existence of a process (Vt )t∈Z , whose
finite dimensional distribution at t1 < · · · < tm has distribution function Ft1 ,...,tm .
This process has, therefore, mean vector zero and covariances E(Vt+h Vt ) = K(h),
h ∈ Z.


Spectral Distribution Function and Spectral Density

The preceding result provides a characterization of an autocovariance function
in terms of positive semidefiniteness. The following characterization of positive
semidefinite
         R 1 functions is known as Herglotz’s
                                   R          theorem. We use in the following the
notation 0 g(λ) dF (λ) in place of (0,1] g(λ) dF (λ).

Theorem 4.1.2. A symmetric function γ : Z → R is positive semidefinite iff it
can be represented as an integral
                      Z 1                        Z 1
             γ(h) =         ei2πλh dF (λ) =            cos(2πλh) dF (λ),        h ∈ Z,   (4.3)
                       0                          0

where F is a real valued measure generating function on [0, 1] with F (0) = 0. The
function F is uniquely determined.


The uniquely determined function F , which is a right-continuous, increasing and
bounded function, is called the spectral distribution function of γ. If F has a
                                                 Rλ
derivative f and, thus, F (λ) = F (λ) − F (0) = 0 f (x) dxPfor 0 ≤ λ ≤ 1, then f is
called the spectral density of γ. Note that the property h≥0 |γ(h)| < ∞ already
implies the existence of a spectral density of γ, cf. Theorem 3.2.5.
                       R1
Recall that γ(0) = 0 dF (λ) = F (1) and thus, the autocorrelation function
ρ(h) = γ(h)/γ(0) has the above integral representation, but with F replaced by
the distribution function F/γ(0).


Proof of Theorem 4.1.2. We establish first the uniqueness of F . Let G be another
measure generating function with G(λ) = 0 for λ ≤ 0 and constant for λ ≥ 1 such
that                 Z          1        Z                 1
               γ(h) =               ei2πλh dF (λ) =            ei2πλh dG(λ),   h ∈ Z.
                            0                          0

Let now ψ be a continuous function on [0, 1]. From calculus we know (cf. Sec-
tion 4.24 in Rudin (1974)) that we can find for arbitrary ε > 0 a trigonometric
138                                    Chapter 4. The Spectrum of a Stationary Process

                      PN             i2πλh
polynomial pε (λ) =         h=−N ah e      , 0 ≤ λ ≤ 1, such that

                                    sup |ψ(λ) − pε (λ)| ≤ ε.
                                   0≤λ≤1

As a consequence we obtain that
                      Z 1                        Z 1
                             ψ(λ) dF (λ) =               pε (λ) dF (λ) + r1 (ε)
                        0                            0
                                                 Z 1
                                             =           pε (λ) dG(λ) + r1 (ε)
                                                     0
                                                 Z 1
                                             =           ψ(λ) dG(λ) + r2 (ε),
                                                     0

where ri (ε) → 0 as ε → 0, i = 1, 2, and, thus,
                             Z 1                         Z 1
                                   ψ(λ) dF (λ) =               ψ(λ) dG(λ).
                              0                           0

Since ψ was an arbitrary continuous function, this in turn together with F (0) =
G(0) = 0 implies F = G.

Suppose now that γ has the representation (4.3). We have for arbitrary xi ∈ R,
i = 1, . . . , n
                X                               Z 1      X
                        xr γ(r − s)xs =                          xr xs ei2πλ(r−s) dF (λ)
              1≤r,s≤n                            0 1≤r,s≤n
                                                Z 1 Xn                     2
                                            =                  xr ei2πλr       dF (λ) ≥ 0,
                                                 0       r=1

i.e. γ is positive semidefinite.

Suppose conversely that γ : Z → R is a positive semidefinite function. This implies
that for 0 ≤ λ ≤ 1 and N ∈ N (Exercise 2)

                                   1     X
                  fN (λ) : =                      e−i2πλr γ(r − s)ei2πλs
                                   N
                                       1≤r,s≤N
                                1 X
                              =     (N − |m|)γ(m)e−i2πλm ≥ 0.
                                N
                                       |m|<N

Put now                                Z λ
                        FN (λ) :=            fN (x) dx,             0 ≤ λ ≤ 1.
                                        0
4.1 Characterizations of Autocovariance Functions                                    139

Then we have for each h ∈ Z
         Z 1                                            Z 1
                               X          |m| 
             ei2πλh dFN (λ) =        1−          γ(m)       ei2πλ(h−m) dλ
          0                                 N            0
                              |m|<N
                              (         
                                 1 − |h|
                                     N γ(h), if |h| < N
                            =                                                      (4.4)
                                0,                 if |h| ≥ N .

Since FN (1) = γ(0) < ∞ for any N ∈ N, we can apply Helly’s selection theorem
(cf. Billingsley (1968), page 226ff) to deduce the existence of a measure generating
function F̃ and a subsequence (FNk )k such that FNk converges weakly to F̃ i.e.,
                      Z 1                        Z 1
                          g(λ) dFNk (λ) −→k→∞        g(λ) dF̃ (λ)
                       0                                  0

for every continuous and bounded function g : [0, 1] → R (cf. Theorem 2.1 in
Billingsley (1968)). Put now F (λ) := F̃ (λ)− F̃ (0). Then F is a measure generating
function with F (0) = 0 and
                         Z 1                Z 1
                             g(λ) dF̃ (λ) =     g(λ) dF (λ).
                               0                     0

If we replace N in (4.4) by Nk and let k tend to infinity, we now obtain represen-
tation (4.3).
Example 4.1.3. A white noise (εt )t∈Z has the autocovariance function
                               (
                                   σ2 , h = 0
                       γ(h) =
                                   0,   h ∈ Z \ {0}.

Since                   Z 1                       (
                                   2 i2πλh         σ2 ,   h=0
                               σ e           dλ =
                           0                       0,     h ∈ Z \ {0},
the process (εt ) has by Theorem 4.1.2 the constant spectral density f (λ) = σ 2 ,
0 ≤ λ ≤ 1. This is the name giving property of the white noise process: As the
white light is characteristically perceived to belong to objects that reflect nearly
all incident energy throughout the visible spectrum, a white noise process weighs
all possible frequencies equally.
Corollary 4.1.4. A symmetric function γ : Z → R is the autocovariance function
of a stationary process (Yt )t∈Z , iff it satisfies one of the following two (equivalent)
conditions:

               R1
  (i) γ(h) = 0 ei2πλh dF (λ), h ∈ Z, where F is a measure generating function on
      [0, 1] with F (0) = 0.
140                                   Chapter 4. The Spectrum of a Stationary Process

        P
 (ii)   1≤r,s≤n xr γ(r − s)xs ≥ 0 for each n ∈ N and x1 , . . . , xn ∈ R.




Proof. Theorem 4.1.2 shows that (i) and (ii) are equivalent. The assertion is then
a consequence of Theorem 4.1.1.
                                                                         P
Corollary 4.1.5. A symmetric function γ : Z → R with                        t∈Z |γ(t)| < ∞ is the
autocovariance function of a stationary process iff
                                     X
                       f (λ) :=            γ(t)e−i2πλt ≥ 0,   λ ∈ [0, 1].
                                     t∈Z


The function f is in this case the spectral density of γ.


Proof. Suppose first that γ is an autocovariance
                                             P function. Since γ is in this case
positive semidefinite by Theorem 4.1.1, and t∈Z |γ(t)| < ∞ by assumption, we
have (Exercise 2)

                             1       X
            0 ≤ fN (λ) : =                   e−i2πλr γ(r − s)ei2πλs
                             N
                                 1≤r,s≤N
                             X              |t| 
                        =             1−           γ(t)e−i2πλt → f (λ)   as N → ∞,
                                             N
                             |t|<N


see Exercise 8. The function f is consequently
                                           R 1 nonnegative.  The inverse Fourier
                                                   i2πλt
transform in Theorem 3.2.5 implies γ(t) = 0 f (λ)e       dλ, t ∈ Z i.e., f is the
spectral density of γ.

Suppose on the other hand that f (λ) = t∈Z γ(t)ei2πλt ≥ 0, 0 ≤ λ ≤ 1. The
                                           P
                                         R1                 R1
inverse Fourier transform implies γ(t) = 0 f (λ)ei2πλt dλ = 0 ei2πλt dF (λ), where
         Rλ
F (λ) = 0 f (x) dx, 0 ≤ λ ≤ 1. Thus we have established representation (4.3),
which implies that γ is positive semidefinite, and, consequently, γ is by Corollary
4.1.4 the autocovariance function of a stationary process.

Example 4.1.6. Choose a number ρ ∈ R. The function
                                       
                                       1, if h = 0
                                       
                                 γ(h) = ρ, if h ∈ {−1, 1}
                                       
                                        0, elsewhere
                                       


is the autocovariance function of a stationary process iff |ρ| ≤ 0.5. This follows
4.2 Linear Filters and Frequencies                                                141

from
                                X
                      f (λ) =         γ(t)ei2πλt
                                t∈Z

                           = γ(0) + γ(1)ei2πλ + γ(−1)e−i2πλ
                           = 1 + 2ρ cos(2πλ) ≥ 0
for λ ∈ [0, 1] iff |ρ| ≤ 0.5. Note that the function γ is the autocorrelation function
of an MA(1)-process, cf. Example 2.2.2.

The spectral distribution function of a stationary process satisfies (Exercise 10)
        F (0.5 + λ) − F (0.5− ) = F (0.5) − F ((0.5 − λ)− ),    0 ≤ λ < 0.5,
           −
where F (x ) := limε↓0 F (x − ε) is the left-hand limit of F at x ∈ (0, 1]. If F has
a derivative f , we obtain from the above symmetry f (0.5 + λ) = f (0.5 − λ) or,
equivalently, f (1 − λ) = f (λ) and, hence,
                      Z 1                      Z 0.5
              γ(h) =      cos(2πλh) dF (λ) = 2       cos(2πλh)f (λ) dλ.
                       0                           0

The autocovariance function of a stationary process is, therefore, determined by
the values f (λ), 0 ≤ λ ≤ 0.5, if the spectral density exists. Recall, moreover, that
the smallest nonconstant period P0 visible through observations evaluated at time
points t = 1, 2, . . . is P0 = 2 i.e., the largest observable frequency is the Nyquist
frequency λ0 = 1/P0 = 0.5, cf. the end of Section 3.2. Hence, the spectral density
f (λ) matters only for λ ∈ [0, 0.5].
Remark 4.1.7. The preceding discussion shows that a function f : [0, 1] → R
is the spectral density of a stationary process iff f satisfies the following three
conditions

  (i) f (λ) ≥ 0,
 (ii) f (λ) = f (1 − λ),
      R1
(iii) 0 f (λ) dλ < ∞.



4.2     Linear Filters and Frequencies

The application of a linear filter to a stationary time series has a quite complex
effect on its autocovariance function, see Theorem 2.1.6. Its effect on the spectral
density, if it exists, turns, however, out to be quite simple. We use in the following
                       Rλ                        R
again the notation 0 g(x) dF (x) in place of (0,λ] g(x) dF (x).
142                                   Chapter 4. The Spectrum of a Stationary Process

Theorem 4.2.1. Let (Zt )t∈Z be a stationary process with spectral distribution
function FZ and let (at )t∈Z be an absolutely
                                         P summable filter with Fourier transform
fa . The linear filtered process Yt := u∈Z au Zt−u , t ∈ Z, then has the spectral
distribution function
                               Z λ
                     FY (λ) :=     |fa (x)|2 dFZ (x), 0 ≤ λ ≤ 1.             (4.5)
                                      0

If in addition (Zt )t∈Z has a spectral density fZ , then
                        fY (λ) := |fa (λ)|2 fZ (λ),         0 ≤ λ ≤ 1,              (4.6)
is the spectral density of (Yt )t∈Z .


Proof. Theorem 2.1.6 yields that (Yt )t∈Z is stationary with autocovariance function
                          XX
                 γY (t) =          au aw γZ (t − u + w), t ∈ Z,
                                u∈Z w∈Z

where γZ is the autocovariance function of (Zt ). Its spectral representation (4.3)
implies
                    XX           Z 1
           γY (t) =        au aw     ei2πλ(t−u+w) dFZ (λ)
                       u∈Z w∈Z            0
                       Z 1X                       X            
                   =                 au e−i2πλu          aw ei2πλw ei2πλt dFZ (λ)
                        0      u∈Z                 w∈Z
                       Z 1
                   =         |fa (λ)|2 ei2πλt dFZ (λ)
                        0
                       Z 1
                   =         ei2πλt dFY (λ).
                        0

Theorem 4.1.2 now implies that FY is the uniquely determined spectral distribu-
tion function of (Yt )t∈Z . The second to last equality yields in addition the spectral
density (4.6).


Transfer Function and Power Transfer Function

Since the spectral density is a measure of intensity of a frequency λ inherent in
a stationary process (see the discussion of the periodogram in Section 3.2), the
effect (4.6) of applying a linear filter (at ) with Fourier transform fa can easily be
interpreted. While the intensity of λ is diminished by the filter (at ) iff |fa (λ)| < 1,
its intensity is amplified iff |fa (λ)| > 1. The Fourier transform fa of (at ) is,
therefore, also called transfer function and the function ga (λ) := |fa (λ)|2 is referred
to as the gain or power transfer function of the filter (at )t∈Z .
4.2 Linear Filters and Frequencies                                          143

Example 4.2.2. The simple moving average of length three
                           (
                             1/3, u ∈ {−1, 0, 1}
                      au =
                             0     elsewhere

has the transfer function
                                        1 2
                             fa (λ) =    + cos(2πλ)
                                        3 3
and the power transfer function
                               
                               1,             λ=0
                      ga (λ) =  sin(3πλ) 2
                               
                                  3 sin(πλ)  , λ ∈ (0, 0.5]

(see Exercise 13 and Theorem 3.2.2). This power transfer function is plotted in
Figure 4.2.1 below. It shows that frequencies λ close to zero i.e., those corre-
sponding to a large period, remain essentially unaltered. Frequencies λ close to
0.5, which correspond to a short period, are, however, damped by the approximate
factor 0.1, when the moving average (au ) is applied to a process. The frequency
λ = 1/3 is completely eliminated, since ga (1/3) = 0.




              Figure 4.2.1. Power transfer function of the simple
              moving average of length three.
144                               Chapter 4. The Spectrum of a Stationary Process


 ***      Program 4 _2_1  ***;
 TITLE1 ’ Power transfer function ’;
 TITLE2 ’ of the simple moving average of length 3 ’;

DATA data1 ;
  DO lambda =.001 TO .5 BY .001;
     g =( SIN (3* CONSTANT ( ’ PI ’)* lambda )/
           (3* SIN ( CONSTANT ( ’ PI ’)* lambda )))**2;
     OUTPUT ;
 END ;

 AXIS1 LABEL =( ’g ’ H =1 ’a ’ H =2 ’( ’ F = CGREEK ’l ) ’);
 AXIS2 LABEL =( F = CGREEK ’l ’);
 SYMBOL1 V = NONE C = GREEN I = JOIN ;
 PROC GPLOT DATA = data1 ;
   PLOT g * lambda / VAXIS = AXIS1 HAXIS = AXIS2 ;
 RUN ; QUIT ;
                                                                                   




Example 4.2.3. The first order difference filter
                                     
                                     1,
                                         u=0
                                 au = −1, u = 1
                                     
                                      0   elsewhere
                                     


has the transfer function
                                  fa (λ) = 1 − e−i2πλ .

Since
                 fa (λ) = e−iπλ eiπλ − e−iπλ = ie−iπλ 2 sin(πλ),
                                            


its power transfer function is

                                  ga (λ) = 4 sin2 (πλ).

The first order difference filter, therefore, damps frequencies close to zero but
amplifies those close to 0.5.
4.2 Linear Filters and Frequencies                                       145




              Figure 4.2.2. Power transfer function of the first order
              difference filter.




Example 4.2.4. The preceding example immediately carries over to the seasonal
difference filter of arbitrary length s ≥ 0 i.e.,
                                   
                                   1,
                                       u=0
                            au(s) = −1, u = s
                                   
                                    0   elsewhere,
                                   

which has the transfer function

                              fa(s) (λ) = 1 − e−i2πλs

and the power transfer function

                              ga(s) (λ) = 4 sin2 (πλs).
146                            Chapter 4. The Spectrum of a Stationary Process




                Figure 4.2.3. Power transfer function of the sea-
                sonal difference filter of order 12.




Since sin2 (x) = 0 iff x = kπ and sin2 (x) = 1 iff x = (2k + 1)π/2, k ∈ Z, the power
transfer function ga(s) (λ) satisfies for k ∈ Z
                                  (
                                   0, iff λ = k/s
                      ga(s) (λ) =
                                   4 iff λ = (2k + 1)/(2s).

This implies, for example, in the case of s = 12 that those frequencies, which
are multiples of 1/12 = 0.0833, are eliminated, whereas the midpoint frequencies
k/12 + 1/24 are amplified. This means that the seasonal difference filter on the
one hand does what we would like it to do, namely to eliminate the frequency
1/12, but on the other hand it generates unwanted side effects by eliminating also
multiples of 1/12 and by amplifying midpoint frequencies. This observation gives
rise to the problem, whether one can construct linear filters that have prescribed
properties.
4.2 Linear Filters and Frequencies                                                  147

Least Squares Based Filter Design
A low pass filter aims at eliminating high frequencies, a high pass filter aims at
eliminating small frequencies and a band pass filter allows only frequencies in a
certain band [λ0 − ∆, λ0 + ∆] to pass through. They consequently should have the
ideal power transfer functions
                                  (
                                   1, λ ∈ [0, λ0 ]
                       glow (λ) =
                                   0, λ ∈ (λ0 , 0.5]
                                  (
                                   0, λ ∈ [0, λ0 )
                      ghigh (λ) =
                                   1, λ ∈ [λ0 , 0.5]
                                  (
                                   1, λ ∈ [λ0 − ∆, λ0 + ∆]
                      gband (λ) =
                                   0 elsewhere,

where λ0 is the cut off frequency in the first two cases and [λ0 − ∆, λ0 + ∆] is the
cut off interval with bandwidth 2∆ > 0 in the final one. Therefore, the question
naturally arises, whether there actually exist filters, which have a prescribed power
transfer function. One possible approach for fitting a linear filter with weights au
to a given transfer function f is offered by utilizing least squares. Since only filters
of finite length matter in applications, one chooses a transfer function
                                                 s
                                                 X
                                  fa (λ) =             au e−i2πλu
                                                 u=r

with fixed integers r, s and fits this function fa to f by minimizing the integrated
squared error                   Z      0.5
                                             |f (λ) − fa (λ)|2 dλ
                                   0

in (au )r≤u≤s ∈ Rs−r+1 . This is achieved for the choice (Exercise 16)
                            Z 0.5               
                 au = 2 Re         f (λ)ei2πλu dλ , u = r, . . . , s,
                                  0

which is formally the real part of the inverse Fourier transform of f .
Example 4.2.5. For the low pass filter with cut off frequency 0 < λ0 < 0.5 and
ideal transfer function
                             f (λ) = 1[0,λ0 ] (λ)
we obtain the weights
                        Z λ0                 (
                                              2λ0 ,                 u=0
               au = 2          cos(2πλu) dλ = 1
                         0                     πu sin(2πλ0 u),      u 6= 0.
148                              Chapter 4. The Spectrum of a Stationary Process




      Figure 4.2.4. Transfer function of least squares fitted low pass filter with
      cut off frequency λ0 = 1/10 and r = −20, s = 20.

 ***      Program 4 _2_4  ***;
 TITLE1 ’ Transfer function ’;
 TITLE2 ’ of least squares fitted low low pass filter ’;

DATA data1 ;
 DO lambda =0 TO .5 BY .001;
   f =2*1/10;
   DO u =1 TO 20;
       f = f +2*1/( CONSTANT ( ’ PI ’)* u )* SIN (2* CONSTANT ( ’ PI ’)*
                      1/10* u )* COS (2* CONSTANT ( ’ PI ’)* lambda * u );
   END ;
   OUTPUT ;
 END ;

AXIS1 LABEL =( ’f ’ H =1 ’a ’ H =2 F = CGREEK ’( l ) ’);
AXIS2 LABEL =( F = CGREEK ’l ’);
SYMBOL1 V = NONE C = GREEN I = JOIN L =1;
PROC GPLOT DATA = data1 ;
  PLOT f * lambda / VAXIS = AXIS1 HAXIS = AXIS2 VREF =0;
4.3 Spectral Densities of ARMA-Processes                                                      149

 RUN ; QUIT ;
                                                                                                     

The programs in Section 4.2 are just made           a small increment. In Program 4 2 4 it is nec-
for the purpose of generating graphics, which       essary to use a second DO loop within the first
demonstrate the shape of power transfer func-       one to calculate the sum used in the definition
tions or, in case of Program 4 2 4, of a transfer   of the transfer function f.
function. They all consist of two parts, a DATA
step and a PROC step.                               Two AXIS statements defining the axis labels
                                                    and a SYMBOL statement precede the procedure
In the DATA step values of the power transfer       PLOT, which generates the plot of g or f versus
function are calculated and stored in a variable    lambda.
g by a DO loop over lambda from 0 to 0.5 with




The transfer function in Figure 4.2.4, which approximates the ideal transfer func-
tion 1[0,0.1] , shows higher oscillations near the cut off point λ0 = 0.1. This is
known as Gibbs’ phenomenon and requires further smoothing of the fitted trans-
fer function if these oscillations are to be damped (cf. Section 6.4 of Bloomfield
(1976)).



4.3       Spectral Densities of ARMA-Processes

Theorem 4.2.1 enables us to compute the spectral density of an ARMA-process.
Theorem 4.3.1. Suppose that

          Yt = a1 Yt−1 + · · · + ap Yt−p + εt + b1 εt−1 + · · · + bq εt−q ,      t ∈ Z,

is a stationary ARMA(p, q)-process, where (εt ) is a white noise with variance σ 2 .
Put

                            A(z) := 1 − a1 z − a2 z 2 − · · · − ap z p ,
                           B(z) := 1 + b1 z + b2 z 2 + · · · + bq z q

and suppose that the process (Yt ) satisfies the stationarity condition (2.3), i.e., the
roots of the equation A(z) = 0 are outside of the unit circle. The process (Yt ) then
has the spectral density
                                −i2πλ 2
                                                     Pq        −i2πλv 2
                          2 |B(e      )|      2 |1 +   v=1 bv e       |
               fY (λ) = σ                 = σ          p                  .        (4.7)
                            |A(e−i2πλ )|2                       −i2πλu
                                                     P
                                                |1 − u=1 au e          |2
150                              Chapter 4. The Spectrum of a Stationary Process

Proof. Since the processP (Yt ) is supposed to satisfy the stationarity condition (2.3)
it is causal, i.e., Yt = v≥0 αv εt−v , t ∈ Z, for some absolutely summable constants
αv , v ≥ 0, see Section 2.2. The white noise process (εt ) has by Example 4.1.3
the spectral density fε (λ) = σ 2 and, thus, (Yt ) has by Theorem 4.2.1 a spectral
density fY . The application of Theorem 4.2.1 to the process

          Xt := Yt − a1 Yt−1 − · · · − ap Yt−p = εt + b1 εt−1 + · · · + bq εt−q

then implies that (Xt ) has the spectral density

                 fX (λ) = |A(e−i2πλ )|2 fY (λ) = |B(e−i2πλ )|2 fε (λ).

Since the roots of A(z) = 0 are assumed to be outside of the unit circle, we have
|A(e−i2πλ )| =
             6 0 and, thus, the assertion of Theorem 4.3.1 follows.


The preceding result with a1 = · · · = ap = 0 implies that an MA(q)-process has
the spectral density
                           fY (λ) = σ 2 |B(e−i2πλ )|2 .
With b1 = · · · = bq = 0, Theorem 4.3.1 implies that a stationary AR(p)-process,
which satisfies the stationarity condition (2.3), has the spectral density

                                                  1
                              fY (λ) = σ 2                 .
                                             |A(e−i2πλ )|2

Example 4.3.2. The stationary ARMA(1, 1)-process

                               Yt = aYt−1 + εt + bεt−1

with |a| < 1 has the spectral density

                                         1 + 2b cos(2πλ) + b2
                          fY (λ) = σ 2                        .
                                         1 − 2a cos(2πλ) + a2

The MA(1)-process, in which case a = 0, has, consequently the spectral density

                         fY (λ) = σ 2 (1 + 2b cos(2πλ) + b2 ),

and the stationary AR(1)-process with |a| < 1, for which b = 0, has the spectral
density
                                             1
                      fY (λ) = σ 2                      .
                                   1 − 2a cos(2πλ) + a2
The following figures display spectral densities of ARMA(1, 1)-processes for various
a and b with σ 2 = 1.
4.3 Spectral Densities of ARMA-Processes                                     151




      Figure 4.3.1. Spectral densities of ARMA(1,1)-processes Yt = aYt−1 +
      εt + bεt−1 with fixed a and various b; σ 2 = 1.

 ***      Program 4 _3_1 ***;
 TITLE1 ’ Spectral densities of ARMA (1 ,1) - processes ’;

DATA data1 ;
 a =.5;
 DO b = -.9 , -.2 , 0 , .2 , .5;
    DO lambda =0 TO .5 BY .005;
       f =(1+2* b * COS (2* CONSTANT ( ’ PI ’)* lambda )+ b * b )
                /(1 -2* a * COS (2* CONSTANT ( ’ PI ’)* lambda )+ a * a );
       OUTPUT ;
    END ;
 END ;

AXIS1 LABEL =( ’f ’ H =1 ’Y ’ H =2 F = CGREEK ’( l ) ’);
AXIS2 LABEL =( F = CGREEK ’l ’);
SYMBOL1 V = NONE C = GREEN I = JOIN L =4;
SYMBOL2 V = NONE C = GREEN I = JOIN L =3;
SYMBOL3 V = NONE C = GREEN I = JOIN L =2;
SYMBOL4 V = NONE C = GREEN I = JOIN L =33;
152                                Chapter 4. The Spectrum of a Stationary Process

 SYMBOL5 V = NONE C = GREEN I = JOIN L =1;
 LEGEND1 LABEL =( ’ a =0.5 , b = ’);
 PROC GPLOT DATA = data1 ;
   PLOT f * lambda = b / VAXIS = AXIS1 HAXIS = AXIS2
                           LEGEND = LEGEND1 ;
 RUN ; QUIT ;
                                                                                                




Like in the preceding section the programs      of the spectral densities of the corresponding
here just generate graphics. In the DATA step   processes. Here SYMBOL statements are neces-
some loops over the varying parameter and       sary and a LABEL statement to distinguish the
over lambda are used to calculate the values    different curves generated by PROC GPLOT.




       Figure 4.3.2. Spectral densities of ARMA(1,1)-processes with parameter
       b fixed and various a.
Exercises                                                                       153




      Figure 4.3.3. Spectral densities of MA(1)-processes Yt = εt + bεt−1 for
      various b.




      Figure 4.3.4. Spectral densities of AR(1)-processes Yt = aYt−1 + εt for
      various a.
154                                        Chapter 4. The Spectrum of a Stationary Process

Exercises

1. Formulate and prove Theorem 4.1.1 for Hermitian functions K and complex-valued
stationary processes. Hint for the sufficiency part (for the necessary part see Exercise 1):
Let K1 be the real part and K2 be the imaginary part of K. Consider the real-valued
2n × 2n-matrices
                                               !
                (n)     1    K1
                               (n)
                                    K2
                                         (n)
                                                         (n)                  
            M         =         (n)  (n)           ,    Kl     = Kl (r − s) 1≤r,s≤n ,   l = 1, 2.
                        2   −K2     K1

Then M (n) is a positive semidefinite matrix (check that z T K z̄ = (x, y)T M (n) (x, y), z =
x+iy, x, y ∈ Rn ). Proceed as in the proof of Theorem 4.1.1: Let (V1 , . . . , Vn , W1 , . . . , Wn )
be a 2n-dimensional normal distributed random vector with mean vector zero and co-
variance matrix M (n) and define for n ∈ N the family of finite dimensional distributions

      Ft+1,...,t+n (v1 , w1 , . . . , vn , wn ) := P {V1 ≤ v1 , W1 ≤ w1 , . . . , Vn ≤ vn , Wn ≤ wn },

t ∈ Z. By Kolmogorov’s theorem there exists a bivariate Gaussian process (Vt , Wt )t∈Z
with mean vector zero and covariances
                                                           1
                               E(Vt+h Vt ) = E(Wt+h Wt ) =   K1 (h)
                                                           2
                                                           1
                              E(Vt+h Wt ) = − E(Wt+h Vt ) = K2 (h).
                                                           2
Conclude by showing that the complex-valued process Yt := Vt − iWt , t ∈ Z, has the
autocovariance function K.

2. Suppose that A is a real positive semidefinite n×n-matrix i.e., xT Ax ≥ 0 for x ∈ Rn .
Show that A is also positive semidefinite for complex numbers i.e., z T Az̄ ≥ 0 for z ∈ Cn .

3. Use (4.3) to show that for 0 < a < 0.5
                                               (
                                                   sin(2πah)
                                                      2πh
                                                             ,       h ∈ Z \ {0}
                                     γ(h) =
                                                   a,                h=0

is the autocovariance function of a stationary process. Compute its spectral density.

4. Compute the autocovariance function of a stationary process with spectral density

                                           0.5 − |λ − 0.5|
                                f (λ) =                    ,           0 ≤ λ ≤ 1.
                                                0.52


5. Suppose that F and G are measure generating functions defined on some interval [a, b]
with F (a) = G(a) = 0 and
                                     Z                         Z
                                         ψ(x) F (dx) =               ψ(x) G(dx)
                                 [a,b]                       [a,b]
Exercises                                                                                               155

for every continuous function ψ : [a, b] → R. Show that F=G. Hint: Approximate the
indicator function 1[a,t] (x), x ∈ [a, b], by continuous functions.

6. Generate a white noise process and plot its periodogram.

7. A real valued stationary process (Yt )t∈Z is supposed to have the spectral density
f (λ) = a + bλ, λ ∈ [0, 0.5]. Which conditions must be satisfied by a and b? Compute the
autocovariance function of (Yt )t∈Z .
                                                        P                                      PN −1
8. (Césaro convergence) Show that limN →∞ N        at = S implies limN →∞                              (1 −
                   PN −1                       Pt=1
                                                 N −1 Ps
                                                                                                  t=1
t/N )at = S. Hint:   t=1 (1 − t/N )at = (1/N )   s=1    t=1 at .


9. Suppose that (Yt )t∈Z and (Zt )t∈Z are stationary processes such that Yr and Zs are
uncorrelated for arbitrary r, s ∈ Z. Denote by FY and FZ the pertaining spectral dis-
tribution functions and put Xt := Yt + Zt , t ∈ Z. Show that the process (Xt ) is also
stationary and compute its spectral distribution function.

10. Let (Yt ) be a real valued stationary process with
                                                   R 1 spectral distribution function F .
Show that for any function g : [−0.5, 0.5] → C with 0 |g(λ − 0.5)|2 dF (λ) < ∞

                          Z1                          Z 1
                               g(λ − 0.5) dF (λ) =          g(0.5 − λ) dF (λ).
                                                        0
                          0

In particular we have

                       F (0.5 + λ) − F (0.5− ) = F (0.5) − F ((0.5 − λ)− ).

Hint: Verify the equality first for g(x) = exp(i2πhx), h ∈ Z, and then use the fact
that, on compact sets, the trigonometric polynomials are uniformly dense in the space of
continuous functions, which in turn form a dense subset in the space of square integrable
functions. Finally, consider the function g(x) = 1[0,ξ] (x), 0 ≤ ξ ≤ 0.5 (cf. the hint in
Exercise 5).

11. Let (Xt ) and (Yt ) be stationary processes with mean zero and absolute summable
covariance functions. If their spectral densities fX and fY satisfy fX (λ) ≤ fY (λ) for
0 ≤ λ ≤ 1, show that

  (i) Γn,Y − Γn,X is a positive semidefinite matrix, where Γn,X and Γn,Y are the covari-
      ance matrices of (X1 , . . . , Xn )T and (Y1 , . . . , Yn )T respectively, and
 (ii) Var(aT (X1 , . . . , Xn )) ≤ Var(aT (Y1 , . . . , Yn )) for all a = (a1 , . . . , an )T ∈ Rn .

12. Compute the gain function of the filter
                                            8
                                            >
                                            <1/4,     u ∈ {−1, 1}
                                     au =    1/2,     u=0
                                            >
                                            :
                                             0        elsewhere.
156                                  Chapter 4. The Spectrum of a Stationary Process

13. The simple moving average
                                       (
                                           1/(2q + 1),       u ≤ |q|
                               au =
                                           0                 elsewhere

has the gain function
                                 8
                                 <1,                              λ=0
                         ga (λ) =  sin((2q+1)πλ) 2
                                 :                   ,            λ ∈ (0, 0.5].
                                          (2q+1) sin(πλ)


Is this filter for large q a low pass filter? Plot its power transfer functions for q = 5/10/20.
Hint: Exercise 2 in Chapter 3.

14. Compute the gain function of the exponential smoothing filter
                                          (
                                               α(1 − α)u ,    u≥0
                                  au =
                                               0,             u < 0,

where 0 < α < 1. Plot this function for various α. What is the effect of α → 0 or α → 1?

15. Let (X )
      P t t∈Z
                be a stationary process, (au )u∈Z an absolutely summable filter and put
Yt := u∈Z aP u Xt−u , t ∈ Z. If (bw )w∈Z is another absolutely summable filter, then the
process Zt = w∈Z bw Yt−w has the spectral distribution function

                                          Zλ
                            FZ (λ) =           |Fa (µ)|2 |Fb (µ)|2 dFX (µ)
                                          0

(cf. Exercise 11(iii) in Chapter 3).

16. Show that the function
                                                   Z0.5
                           D(ar , . . . , as ) =       |f (λ) − fa (λ)|2 dλ
                                                   0

                Ps       −i2πλu
with fa (λ) =    u=r au e       , au ∈ R, is minimized for
                                   Z 0.5                     
                     au := 2 Re                f (λ)ei2πλu dλ ,      u = r, . . . , s.
                                      0

Hint: Put f (λ) = f1 (λ) + if2 (λ) and differentiate with respect to au .

17. Compute in analogy to Example 4.2.5 the transfer functions of the least squares high
pass and band pass filter. Plot these functions. Is Gibbs’ phenomenon observable?

18. An AR(2)-process
                                  Yt = a1 Yt−1 + a2 Yt−2 + εt
Exercises                                                                              157

satisfying the stationarity condition (2.3) (cf. Exercise 23 in Chapter 2) has the spectral
density
                                                  σ2
              fY (λ) =       2    2
                                                                             .
                        1 + a1 + a2 + 2(a1 a2 − a1 ) cos(2πλ) − 2a2 cos(4πλ)
Plot this function for various choices of a1 , a2 .

19. Show that (4.2) is a necessary condition for K to be the autocovariance function of
a stationary process.
Chapter 5

Statistical Analysis in the
Frequency Domain

We will deal in this chapter with the problem of testing for a white noise and
the estimation of the spectral density. The empirical counterpart of the spectral
density, the periodogram, will be basic for both problems, though it will turn out
that it is not a consistent estimate. Consistency requires extra smoothing of the
periodogram via a linear filter.



5.1     Testing for a White Noise

Our initial step in a statistical analysis of a time series in the frequency domain
is to test, whether the data are generated by a white noise (εt )t∈Z . We start with
the model
                     Yt = µ + A cos(2πλt) + B sin(2πλt) + εt ,
where we assume that the εt are independent and normal distributed with mean
zero and variance σ 2 . We will test the nullhypothesis

                                    A=B=0

against the alternative
                                A 6= 0       or   B 6= 0,
                                         2
where the frequency λ, the variance σ > 0 and the intercept µ ∈ R are unknown.
Since the periodogram is used for the detection of highly intensive frequencies
160                     Chapter 5.    Statistical Analysis in the Frequency Domain

inherent in the data, it seems plausible to apply it to the preceding testing problem
as well. Note that (Yt )t∈Z is a stationary process only under the nullhypothesis
A = B = 0.

The Distribution of the Periodogram

In the following we will derive the tests by Fisher and Bartlett–Kolmogorov–
Smirnov for the above testing problem. In a preparatory step we compute the
distribution of the periodogram.

Lemma 5.1.1. Let ε1 , . . . , εn be independent and identically normal distributed
                                                       2
  −1
     Pn variables with mean µ ∈ R and variance σ > 0. Denote by ε̄ :=
random
n     t=1 εt the sample mean of ε1 , . . . , εn and by

                                 n                    
                           k    1X                    k
                       Cε     =       (εt − ε̄) cos 2π t ,
                           n    n t=1                 n
                                 n                    
                           k    1X                    k
                       Sε     =       (εt − ε̄) sin 2π t
                           n    n t=1                 n

the cross covariances with Fourier frequencies k/n, 1 ≤ k ≤ [(n − 1)/2], cf. (3.1).
Then the 2[(n − 1)/2] random variables

                     Cε (k/n), Sε (k/n),    1 ≤ k ≤ [(n − 1)/2],

are independent and identically N (0, σ 2 /(2n))-distributed.


Proof. Note that with m := [(n − 1)/2] we have
                                                                   T
                v := Cε (1/n), Sε (1/n), . . . , Cε (m/n), Sε (m/n)
                   = An−1 (εt − ε̄)1≤t≤n
                   = A(I n − n−1 E n )(εt )1≤t≤n ,

where the 2m × n-matrix A is given by
                                                              
                     cos 2π n1   cos 2π n1 2 . . .      cos 2π n1 n
                                                             
                   sin 2π n1    sin 2π n1 2 . . .      sin 2π n1 n 
                                                                    
                 1       ..                                 ..
                                                                     
            A :=                                                    .
                                                                    
                 n     .                                .     
                  cos 2π m      cos 2π m   2 ...               m
                                                        cos 2π n n 
                                                                    
                           n          n                       
                     sin 2π mn   sin   2π m
                                          n 2   ...     sin 2π mnn
5.1 Testing for a White Noise                                                       161

I n is the n × n-unity matrix and E n is the n × n-matrix with each entry being 1.
The vector v is, therefore, normal distributed with mean vector zero and covariance
matrix

                       σ 2 A(I n − n−1 E n )(I n − n−1 E n )T AT
                        = σ 2 A(I n − n−1 E n )AT
                        = σ 2 AAT
                            σ2
                        =      I n,
                            2n
which is a consequence of (3.6) and the orthogonality properties (3.2); see e.g.
Definition 2.1.2 in Falk et al. (2002).

Corollary 5.1.2. Let ε1 , . . . , εn be as in the preceding lemma and let
                                       n                     o
                      Iε (k/n) = n Cε2 (k/n) + Sε2 (k/n)

be the pertaining periodogram, evaluated at the Fourier frequencies k/n, 1 ≤ k ≤
[(n − 1)/2]. The random variables Iε (k/n)/σ 2 are independent and identically
standard exponential distributed i.e.,
                                        (
                               2          1 − exp(−x), x > 0
                  P {Iε (k/n)/σ ≤ x} =
                                          0,              x ≤ 0.


Proof. Lemma 5.1.1 implies that
                         r                r
                           2n               2n
                              2
                                Cε (k/n),      Sε (k/n)
                            σ               σ2
are independent standard normal random variables and, thus,
                           r            2  r              2
               2Iε (k/n)      2n                  2n
                         =       Cε (k/n) +          Sε (k/n)
                   σ2         σ2                  σ2

is χ2 -distributed with two degrees of freedom. Since this distribution has the
distribution function 1 − exp(−x/2), x ≥ 0, the assertion follows; see e.g. Theorem
2.1.7 in Falk et al. (2002).


Denote by U1:m ≤ U2:m ≤ · · · ≤ Um:m the ordered values pertaining to indepen-
dent and uniformly on (0, 1) distributed random variables U1 , . . . , Um . It is a well
known result in the theory of order statistics that the distribution of the vector
(Uj:m )1≤j≤m coincides with that of ((Z1 + · · · + Zj )/(Z1 + · · · + Zm+1 ))1≤j≤m ,
162                       Chapter 5.    Statistical Analysis in the Frequency Domain

where Z1 , . . . , Zm+1 are independent and identically exponential distributed ran-
dom variables; see, for example, Theorem 1.6.7 in Reiss (1989). The following
result, which will be basic for our further considerations, is, therefore, an immedi-
ate consequence of Corollary 5.1.2; see also Exercise 3. By =D we denote equality
in distribution.
Theorem 5.1.3. Let ε1 , . . . , εn be independent N (µ, σ 2 )-distributed random vari-
ables and denote by
                     Pj
                             Iε (k/n)
               Sj := Pk=1
                      m                , j = 1, . . . , m := [(n − 1)/2],
                      k=1 Iε (k/n)

the cumulated periodogram. Note that Sm = 1. Then we have
                                    
                   S1 , . . . , Sm−1 =D U1:m−1 , . . . , Um−1:m−1 ).
The vector (S1 , . . . , Sm−1 ) has, therefore, the Lebesgue-density
                                    (
                                     (m − 1)!, if 0 < s1 < · · · < sm−1 < 1
           f (s1 , . . . , sm−1 ) =
                                     0           elsewhere.


The following consequence of the preceding result is obvious.
Corollary 5.1.4. The empirical distribution function of S1 , . . . , Sm−1 is distrib-
uted like that of U1 , . . . , Um−1 , i.e.,
                           m−1                       m−1
                       1 X                       1 X
      F̂m−1 (x) :=             1(0,x] (Sj ) =D           1(0,x] (Uj ),     x ∈ [0, 1].
                     m − 1 j=1                 m − 1 j=1

Corollary 5.1.5. Put S0 := 0 and
                                                   max1≤j≤m Iε (j/n)
                 Mm := max (Sj − Sj−1 ) =           Pm               .
                           1≤j≤m                      k=1 Iε (k/n)

The maximum spacing Mm has the distribution function
                            m        
                                   j m
                           X
    Gm (x) := P {Mm ≤ x} =     (−1)      (max{0, 1 − jx})m−1 ,                x > 0.
                           j=0
                                      j


Proof. Put
                            Vj := Sj − Sj−1 ,    j = 1, . . . , m.
By Theorem 5.1.3 the vector (V1 , . . . , Vm ) is distributed like the length of the m
consecutive intervals into which [0, 1] is partitioned by the m − 1 random points
U1 , . . . , Um−1 :
         (V1 , . . . , Vm ) =D (U1:m−1 , U2:m−1 − U1:m−1 , . . . , 1 − Um−1:m−1 ).
5.1 Testing for a White Noise                                                         163

The probability that Mm is less than or equal to x equals the probability that
all spacings Vj are less than or equal to x, and this is provided by the covering
theorem as stated in Theorem 3 in Section I.9 of Feller (1971).


Fisher’s Test
The preceding results suggest to test the hypothesis Yt = εt with εt indepen-
dent and N (µ, σ 2 )-distributed, by testing for the uniform distribution on [0, 1].
Precisely, we will reject this hypothesis if Fisher’s κ-statistic
                                   max1≤j≤m I(j/n)
                          κm :=        Pm          = mMm
                                  (1/m) k=1 I(k/n)
is significantly large, i.e., if one of the values I(j/n) is significantly larger than the
average over all. The hypothesis is, therefore, rejected at error level α if
                           κm > cα     with 1 − Gm (cα ) = α.
This is Fisher’s test for hidden periodicities. Common values are α = 0.01 and
= 0.05. The following table, taken from Fuller (1976), lists several critical values
cα .

                     m      c0.05     c0.01     m     c0.05     c0.01
                     10    4.450     5.358     150   7.832     9.372
                     15    5.019     6.103     200   8.147     9.707
                     20    5.408     6.594     250   8.389     9.960
                     25    5.701     6.955     300   8.584    10.164
                     30    5.935     7.237     350   8.748    10.334
                     40    6.295     7.663     400   8.889    10.480
                     50    6.567     7.977     500   9.123    10.721
                     60    6.785     8.225     600   9.313    10.916
                     70    6.967     8.428     700   9.473    11.079
                     80    7.122     8.601     800   9.612    11.220
                     90    7.258     8.750     900   9.733    11.344
                    100    7.378     8.882    1000   9.842    11.454

       Table 5.1.1. Critical values cα of Fisher’s test for hidden periodicities.


Note that these quantiles can be approximated by corresponding quantiles of a
Gumbel distribution if m is large (Exercise 12).

The Bartlett–Kolmogorov–Smirnov Test
Denote again by Sj the cumulated periodogram as in Theorem 5.1.3. If actually
Yt = εt with εt independent and identically N (µ, σ 2 )-distributed, then we know
164                     Chapter 5.    Statistical Analysis in the Frequency Domain

from Corollary 5.1.4 that the empirical distribution function F̂m−1 of S1 , . . . , Sm−1
behaves stochastically exactly like that of m − 1 independent and uniformly on
(0, 1) distributed random variables. Therefore, with the Kolmogorov–Smirnov
statistic
                           ∆m−1 := sup |F̂m−1 (x) − x|
                                      x∈[0,1]

we can measure the maximum difference between the empirical distribution func-
tion and the theoretical one F (x) = x, x ∈ [0, 1]. The following rule is quite com-
mon. For m > 30 i.e., n > 62, the hypothesis Yt = ε√     t with εt being independent
and N (µ, σ 2 )-distributed is rejected if ∆m−1 > cα / m − 1, where c0.05 = 1.36
and c0.01 = 1.63 are the critical values for the levels α = 0.05 and α = 0.01.

This Bartlett-Kolmogorov-Smirnov test can also be carried out visually by plotting
for x ∈ [0, 1] the sample distribution function F̂m−1 (x) and the band
                                                cα
                                  y =x± √           .
                                                m−1

The hypothesis Yt = εt is rejected if F̂m−1 (x) is for some x ∈ [0, 1] outside of this
confidence band.
Example 5.1.6. (Airline Data). We want to test, whether the variance stabilized,
trend eliminated and seasonally adjusted Airline Data from Example 1.3.1 were
generated from a white noise (εt )t∈Z , where εt are independent and identically
normal distributed. The Fisher test statistic has the value κm = 6.573 and does,
therefore, not reject the hypothesis at the levels α = 0.05 and α = 0.01, where
m = 65. The Bartlett–Kolmogorov–Smirnov   √ test, however, rejects this hypothesis
                                                                           √
at both levels, since ∆64 = 0.2319 > 1.36/ 64 = 0.17 and also ∆64 > 1.63/ 64 =
0.20375.




                              SPECTRA Procedure


         ----- Test for White Noise for variable DLOGNUM -----

         Fisher’s Kappa: M*MAX(P(*))/SUM(P(*))
         Parameters:     M         =        65
                         MAX(P(*)) =     0.028
                         SUM(P(*)) =     0.275
         Test Statistic: Kappa     =    6.5730
5.1 Testing for a White Noise                                                                   165

          Bartlett’s Kolmogorov-Smirnov Statistic:
                     Maximum absolute difference of the standardized
                     partial sums of the periodogram and the CDF of a
                     uniform(0,1) random variable.

          Test Statistic =          0.2319



         Figure 5.1.1. Fisher’s κ and the Bartlett-Kolmogorov-Smirnov test
         with m = 65 for testing a white noise generation of the adjusted Airline
         Data.


 ***      Program 5 _1_1   ***;
 TITLE1 ’ Tests for white noise ’;
 TITLE2 ’ for the trend und seasonal ’;
 TITLE3 ’ adjusted Airline Data ’;

DATA data1 ;
  INFILE ’c :\ data \ airline . txt ’;
  INPUT num @@ ;
  dlognum = DIF12 ( DIF ( LOG ( num )));

 PROC SPECTRA DATA = data1 P WHITETEST OUT = data2 ;
   VAR dlognum ;
 RUN ; QUIT ;
                                                                                                       


In the DATA step the raw data of the airline       whereby the options P and OUT=data2 gener-
passengers are read into the variable num. A       ate a data set containing the periodogram data.
log-transformation, building the fist order dif-   The option WHITETEST causes SAS to carry out
ference for trend elimination and the 12th order   the two tests for a white noise, Fisher’s test and
difference for elimination of a seasonal compo-    the Bartlett-Kolmogorov-Smirnov test. SAS
nent lead to the variable dlognum, which is sup-   only provides the values of the test statistics
posed to be generated by a stationary process.     but no decision. One has to compare these val-
                                                   ues with the critical values from
                                                                                  √ Table 5.1.1 and
Then PROC SPECTRA is applied to this variable,     the approximative ones cα / m − 1.




The following figure visualizes the rejection at both levels by the Bartlett-Kolmogorov-
Smirnov test.
166                    Chapter 5.     Statistical Analysis in the Frequency Domain




      Figure 5.1.2. Bartlett-Kolmogorov-Smirnov test with m = 65 testing for
      a white noise generation of the adjusted Airline Data. Solid line/broken
      line = confidence bands for F̂m−1 (x), x ∈ [0, 1], at levels α = 0.05/0.01.

 ***        Program 5 _1_2  ***;
 TITLE1   ’ Visualisation of the test for white noise ’;
 TITLE2   ’ for the trend und seasonal adjusted ’;
 TITLE3   ’ Airline Data ’;
 * Note   that this program needs data2
            generated by program 5 _1_1 ;

PROC MEANS DATA = data2 ( FIRSTOBS =2) NOPRINT ;
  VAR P_01 ;
  OUTPUT OUT = data3 SUM = psum ;

DATA data4 ;
  SET data2 ( FIRSTOBS =2);
  IF _N_ =1 THEN SET data3 ;
  RETAIN s 0;
  s = s + P_01 / psum ;
  fm = _N_ /( _FREQ_ -1);
  yu_01 = fm +1.63/ SQRT ( _FREQ_ -1);
5.2 Estimating Spectral Densities                                                           167

   yl_01 = fm -1.63/ SQRT ( _FREQ_ -1);
   yu_05 = fm +1.36/ SQRT ( _FREQ_ -1);
   yl_05 = fm -1.36/ SQRT ( _FREQ_ -1);

 SYMBOL1 V = NONE I = STEPJ C = GREEN ;
 SYMBOL2 V = NONE I = JOIN C = RED L =2;
 SYMBOL3 V = NONE I = JOIN C = RED L =1;
 AXIS1 LABEL =( ’x ’) ORDER =(.0 TO 1.0 BY .1);
 AXIS2 LABEL = NONE ;
 PROC GPLOT DATA = data4 ;
   PLOT fm * s =1 yu_01 * fm =2 yl_01 * fm =2 yu_05 * fm =3
          yl_05 * fm =3 / OVERLAY HAXIS = AXIS1 VAXIS = AXIS2 ;
 RUN ; QUIT ;
                                                                                                   
This program uses the data set data2 created     fm contains the values of the empirical distrib-
by Program 5 1 1, where the first observation    ution function calculated by means of the auto-
belonging to the frequency 0 is dropped. PROC    matically generated variable N containing the
MEANS calculates the sum (keyword SUM) of the    number of observation and the variable FREQ ,
SAS periodogram variable P 0 and stores it in    which was created by PROC MEANS and contains
the variable psum of the data set data3. The     the number m. The values of the upper and
NOPRINT option suppresses the printing of the    lower band are stored in the y variables.
output.
                                                 The last part of this program contains SYMBOL
The next DATA step combines every observa-       and AXIS statements and PROC GPLOT to visual-
tion of data2 with this sum by means of the      ize the Bartlett-Kolmogorov-Smirnov statistic.
IF statement. Furthermore a variable s is ini-   The empirical distribution of the cumulated pe-
tialized with the value 0 by the RETAIN state-   riodogram is represented as a step function due
ment and then the portion of each periodogram    to the I=STEPJ option in the SYMBOL1 state-
value from the sum is cumulated. The variable    ment.




5.2      Estimating Spectral Densities

We suppose in the following that (Yt )t∈Z is a stationary real valued process with
mean µ and absolutely summable autocovariance function γ. According to Corol-
lary 4.1.5, the process (Yt ) has the continuous spectral density
                                       X
                               f (λ) =    γ(h)e−i2πλh .
                                          h∈Z

In the preceding section we computed the distribution of the empirical counterpart
of a spectral density, the periodogram, in the particular case, when (Yt ) is a
168                            Chapter 5. Statistical Analysis in the Frequency Domain

Gaussian white noise. In this section we will investigate the limit behavior of the
periodogram for arbitrary independent random variables (Yt ).

Asymptotic Properties of the Periodogram

In order to establish asymptotic properties of the periodogram, its following mod-
ification is quite useful. For Fourier frequencies k/n, 0 ≤ k ≤ [n/2] we put
                           n            2
                  1 X
      In (k/n) =        Yt e−i2π(k/n)t
                  n t=1
                    ( n                      n
                                                              )
                  1 X            k 2  X           k 2
                =          Yt cos 2π t    +     Yt sin 2π t    .                 (5.1)
                  n   t=1
                                       n    t=1
                                                         n

Up to k = 0, this coincides by (3.6) with the definition of the periodogram as given
in (3.7). From Theorem 3.2.3 we obtain the representation
                         (
                           nȲ 2 ,                     k=0
              In (k/n) = P n             −i2π(k/n)h
                                                                               (5.2)
                              |h|<n c(h)e           , k = 1, . . . , [n/2]
                  Pn
with Ȳn := n−1    t=1 Yt and the sample autocovariance function

                                         n−|h|
                                  1 X                       
                           c(h) =       Yt − Ȳn Yt+|h| − Ȳn .
                                  n t=1

By representation (5.1) and the equations (3.6), the value In (k/n) does not change
for k 6= 0 if we replace the sample mean Ȳn in c(h) by the theoretical mean µ.
This leads to the equivalent representation of the periodogram for k 6= 0

               X 1  n−|h|
                      X                                  
  In (k/n) =                         (Yt − µ)(Yt+|h| − µ) e−i2π(k/n)h
                       n       t=1
               |h|<n

               1X
                  n                X 1  n−|h|
                                   n−1    X                            k 
           =         (Yt − µ)2 + 2             (Yt − µ)(Yt+|h| − µ) cos 2π h .
               n t=1                   n t=1                              n
                                          h=1
                                                                                 (5.3)

We define now the periodogram for λ ∈ [0, 0.5] as a piecewise constant function

                                                      k   1    k  1
                   In (λ) = In (k/n)             if     −   <λ≤ +   .            (5.4)
                                                      n 2n     n 2n
The following result shows that the periodogram In (λ) is for λ 6= 0 an asymptoti-
cally unbiased estimator of the spectral density f (λ).
5.2 Estimating Spectral Densities                                                 169

Theorem 5.2.1. Let (Yt )t∈Z be a stationary process with absolutely summable
autocovariance function γ. Then we have with µ = E(Yt )

                    E(In (0)) − nµ2 −→n→∞ f (0),
                           E(In (λ)) −→n→∞ f (λ),                 λ 6= 0.

If µ = 0, then the convergence E(In (λ)) −→n→∞ f (λ) holds uniformly on [0, 0.5].


Proof. By representation (5.2) and the Césaro convergence result (Exercise 8 in
Chapter 4) we have
                                     X n
                                      n X               
                                 1
         E(In (0)) − nµ2 =                     E(Yt Ys ) − nµ2
                                 n   t=1 s=1
                                   n n
                                 1 XX
                             =           Cov(Yt , Ys )
                               n t=1 s=1
                               X         |h|             X
                             =       1−         γ(h) −→n→∞   γ(h) = f (0).
                                           n
                                 |h|<n                             h∈Z



Define now for λ ∈ [0, 0.5] the auxiliary function

                              k            k   1    k  1
                gn (λ) :=       ,     if     −   <λ≤ +   , k ∈ Z.                (5.5)
                              n            n 2n     n 2n
Then we obviously have
                                      In (λ) = In (gn (λ)).                      (5.6)


Choose now λ ∈ (0, 0.5]. Since gn (λ) −→ λ as n → ∞, it follows that gn (λ) > 0
for n large enough. By (5.3) and (5.6) we obtain for such n

                         X 1 n−|h|
                              X                                 
           E(In (λ)) =                     E (Yt − µ)(Yt+|h| − µ) e−i2πgn (λ)h
                        n t=1
                         |h|<n
                                
                      X      |h|
                    =     1−       γ(h)e−i2πgn (λ)h .
                              n
                         |h|<n

      P                             P
Since   h∈Z |γ(h)| < ∞, the series     |h|<n γ(h) exp(−i2πλh) converges to f (λ)
uniformly for 0 ≤ λ ≤ 0.5. Kronecker’s Lemma (Exercise 8) implies moreover
                 X |h|                           X |h|
                             γ(h)e−i2πλh ≤                   |γ(h)| −→n→∞ 0,
                         n                               n
                |h|<n                            |h|<n
170                      Chapter 5. Statistical Analysis in the Frequency Domain

and, thus, the series
                                    X           |h| 
                        fn (λ) :=           1−         γ(h)e−i2πλh
                                                  n
                                    |h|<n


converges to f (λ) uniformly in λ as well. From gn (λ) −→n→∞ λ and the continuity
of f we obtain for λ ∈ (0, 0.5]

   | E(In (λ)) − f (λ)| = |fn (gn (λ)) − f (λ)|
                        ≤ |fn (gn (λ)) − f (gn (λ))| + |f (gn (λ)) − f (λ)| −→n→∞ 0.

Note that |gn (λ) − λ| ≤ 1/(2n). The uniform convergence in case of µ = 0 then
follows from the uniform convergence of gn (λ) to λ and the uniform continuity of
f on the compact interval [0, 0.5].


In the following result we compute the asymptotic distribution of the periodogram
for independent and identically distributed random variables with zero mean,
which are not necessarily Gaussian ones. The Gaussian case was already estab-
lished in Corollary 5.1.2.

Theorem 5.2.2. Let Z1 , . . . , Zn be independent and identically distributed random
variables with mean E(Zt ) = 0 and variance E(Zt2 ) = σ 2 < ∞. Denote by In (λ)
the pertaining periodogram as defined in (5.6).


  (i) The random vector (In (λ1 ), . . . , In (λr )) with 0 < λ1 < · · · < λr < 0.5
      converges in distribution for n → ∞ to the distribution of r independent and
      identically exponential distributed random variables with mean σ 2 .

 (ii) If E(Zt4 ) = ησ 4 < ∞, then we have for k = 0, . . . , [n/2]
                       (
                        2σ 4 + n−1 (η − 3)σ 4 ,       k = 0 or k = n/2, if n even
       Var(In (k/n)) =                                                            (5.7)
                        σ 4 + n−1 (η − 3)σ 4          elsewhere


and
                 Cov(In (j/n), In (k/n)) = n−1 (η − 3)σ 4 ,          j 6= k.      (5.8)


For N (0, σ 2 )-distributed random variables Zt we have η = 3 (Exercise 9) and,
thus, In (k/n) and In (j/n) are for j 6= k uncorrelated. Actually, we established in
Corollary 5.1.2 that they are independent in this case.
5.2 Estimating Spectral Densities                                                    171

Proof. Put for λ ∈ (0, 0.5)
                                            p    n
                                                 X
                 An (λ) := An (gn (λ)) :=    2/n   Zt cos(2πgn (λ)t),
                                                   t=1
                                         p    n
                                              X
                 Bn (λ) := Bn (gn (λ)) := 2/n   Zt sin(2πgn (λ)t),
                                                   t=1

with gn defined in (5.5). Since
                                         1n 2              o
                              In (λ) =     An (λ) + Bn2 (λ) ,
                                         2
it suffices, by repeating the arguments in the proof of Corollary 5.1.2, to show that

                An (λ1 ), Bn (λ1 ), . . . , An (λr ), Bn (λr ) −→D N (0,σ 2 I 2r ),
                                                              

where I 2r denotes the 2r × 2r-unity matrix and −→D convergence in distribution.
Since gn (λ) −→n→∞ λ, we have gn (λ) > 0 for λ ∈ (0, 0.5) if n is large enough.
The independence of Zt together with the definition of gn and the orthogonality
equations in (3.2) imply

                     Var(An (λ)) = Var(An (gn (λ)))
                                         n
                                      2X
                                 = σ2       cos2 (2πgn (λ)t) = σ 2 .
                                      n t=1

For ε > 0 we have
           n
        1X  2                                                   
              E Zt cos2 (2πgn (λ)t)1{|Zt cos(2πgn (λ)t)|>ε√nσ2 }
        n t=1
                 n
               1X  2                                          
           ≤         E Zt 1{|Zt |>ε√nσ2 } = E Z12 1{|Z1 |>ε√nσ2 } −→n→∞ 0
               n t=1

i.e., the triangular array (2/n)1/2 Zt cos(2πgn (λ)t), 1 ≤ t ≤ n, n ∈ N, satisfies the
Lindeberg condition implying An (λ) −→D N (0, σ 2 ); see, for example, Theorem
7.2 in Billingsley (1968). Similarly one shows that Bn (λ) −→D N (0, σ 2 ) as well.
Since the random vector (An (λ1 ), Bn (λ1 ), . . . , An (λr ), Bn (λr )) has by (3.2) the
covariance matrix σ 2 I 2r , its asymptotic joint normality follows easily by applying
the Cramér-Wold device, cf. Theorem 7.7 in Billingsley (1968), and proceeding as
before. This proves part (i) of Theorem 5.2.2.

From the definition of the periodogram in (5.1) we conclude as in the proof of
Theorem 3.2.3
                                  n   n
                               1 XX
                    In (k/n) =           Zs Zt e−i2π(k/n)(s−t)
                               n s=1 t=1
172                       Chapter 5. Statistical Analysis in the Frequency Domain

and, thus, we obtain

          E(In (j/n)In (k/n))
                  n  n   n   n
             1 XXXX
          = 2                  E(Zs Zt Zu Zv )e−i2π(j/n)(s−t) e−i2π(k/n)(u−v) .
             n s=1 t=1 u=1 v=1

We have
                       
                            4
                       ησ , s = t = u = v
                       
      E(Zs Zt Zu Zv ) = σ 4 , s = t 6= u = v, s = u 6= t = v, s = v 6= t = u
                       
                        0     elsewhere
                       

and
                                  
                                  1,
                                                                   s = t, u = v
   −i2π(j/n)(s−t) −i2π(k/n)(u−v)    −i2π((j+k)/n)s  i2π((j+k)/n)t
  e              e               = e               e              , s = u, t = v
                                   −i2π((j−k)/n)s i2π((j−k)/n)t
                                  
                                   e               e              , s = v, t = u.

This implies

  E(In (j/n)In (k/n))
                          n                     n
    ησ 4    σ4 n         X                  2  X                  2     o
  =       + 2 n(n − 1) +     e−i2π((j+k)/n)t +     e−i2π((j−k)/n)t − 2n
      n     n            t=1                   t=1
                                  n                          n
    (η − 3)σ 4     n    1 X i2π((j+k)/n)t 2   1 X i2π((j−k)/n)t 2 o
  =            + σ4 1 + 2    e              + 2    e               .
        n              n t=1                 n t=1
                           Pn
From E(In (k/n)) = n−1              2      2
                             t=1 E(Zt ) = σ we finally obtain

          Cov(In (j/n), In (k/n))
                                 n                   n
            (η − 3)σ 4    σ 4 n X i2π((j+k)/n)t 2   X                 2o
          =            + 2          e             +     ei2π((j−k)/n)t ,
                n         n     t=1                 t=1

from which (5.7) and (5.8) follow by using (3.6)).

Remark
P           5.2.3. Theorem 5.2.2 can be generalized to filtered processes Yt =
    u∈Z au Zt−u , with (Zt )t∈Z as in Theorem 5.2.2. In this case one has to replace
σ 2 , which equals by Example 4.1.3 the constant spectralP density fZ (λ), in (i) by
the spectral density fY (λi ), 1 ≤ i ≤ r. If in addition u∈Z |au ||u|1/2 < ∞, then
we have in (ii) the expansions
                        (
                         2fY2 (k/n) + O(n−1/2 ), k = 0 or k = n/2, if n is even
      Var(In (k/n)) =
                         fY2 (k/n) + O(n−1/2 )   elsewhere,
5.2 Estimating Spectral Densities                                                173

and
                    Cov(In (j/n), In (k/n)) = O(n−1 ),    j 6= k,
where In is the periodogram pertaining to Y1 , . . . , Yn . The above terms O(n−1/2 )
and O(n−1 ) are uniformly bounded in k and j by a constant C. We omit the
highly technical proof and refer to Section 10.3 of Brockwell and Davis (1991).
                                       P
Recall that the class of processes Yt = u∈Z au Zt−u is a fairly rich one, which
contains in particular ARMA-processes, see Section 2.2 and Remark 2.1.12.


Discrete Spectral Average Estimator

The preceding results show that the periodogram is not a consistent estimator of
the spectral density. The law of large numbers together with the above remark
motivates, however, that consistency can be achieved for a smoothed version of
the periodogram such as a simple moving average
                                                
                            X       1        k+j
                                        In         ,
                                 2m + 1       n
                             |j|≤m


which puts equal weights 1/(2m + 1) on adjacent values. Dropping the condition
of equal weights, we define a general linear smoother by the linear filter
                              k    X        k + j 
                          fˆn     :=   ajn In          .                        (5.9)
                               n                 n
                                     |j|≤m


The sequence m = m(n), defining the adjacent points of k/n, has to satisfy

                       m −→n→∞ ∞ and m/n −→n→∞ 0,                             (5.10)

and the weights ajn have the properties


 (a) ajn ≥ 0,

 (b) ajn = a−jn ,
     P
 (c)   |j|≤m ajn = 1,
                                                                              (5.11)
              2
     P
 (d)   |j|≤m ajn −→n→∞ 0.

For the simple moving average we have, for example
                              (
                               1/(2m + 1), |j| ≤ m
                       ajn =
                               0              elsewhere
174                        Chapter 5. Statistical Analysis in the Frequency Domain

and |j|≤m a2jn = 1/(2m + 1) −→n→∞ 0. For λ ∈ [0, 0.5] we put In (0.5 + λ) :=
     P

In (0.5 − λ), which defines the periodogram also on [0.5, 1]. If (k + j)/n is outside
of the interval [0, 1], then In ((k + j)/n) is understood as the periodic extension of
In with period 1. This also applies to the spectral density f . The estimator

                                          fˆn (λ) := fˆn (gn (λ)),

with gn as defined in (5.5), is called the discrete spectral average estimator . The
following result states its consistency for linear processes.
                              P
Theorem 5.2.4. Let Yt = u∈Z bu Zt−u , t ∈ Z, where Zt are iid with E(Zt ) = 0,
E(Zt4 ) < ∞ and u∈Z |bu ||u|1/2 < ∞. Then we have for 0 ≤ µ, λ ≤ 0.5
                  P



  (i) limn→∞ E fˆn (λ) = f (λ),
                      

                                           
                                                2
                                          2f (λ),
                                                         λ = µ = 0 or 0.5
 (ii) limn→∞      P
               Cov fˆn (λ),fˆn (µ)
                             2
                      |j|≤m ajn
                                         = f 2 (λ),
                                           
                                                          0 < λ = µ < 0.5
                                            0,            λ 6= µ.
                                           


Condition (d) in (5.11) on the weights together with (ii) in the preceding result
entails that Var(fˆn (λ)) −→n→∞ 0 for any λ ∈ [0, 0.5]. Together with (i) we,
therefore, obtain that the mean squared error of fˆn (λ) vanishes asymptotically:
                    n             2 o
  MSE(fˆn (λ)) = E fˆn (λ) − f (λ)     = Var(fˆn (λ)) + Bias2 (fˆn (λ)) −→n→∞ 0.


Proof. By the definition of the spectral density estimator in (5.9) we have
                            X       n                             o
    | E(fˆn (λ)) − f (λ)| =      ajn E In (gn (λ) + j/n)) − f (λ)
                               |j|≤m
                                  X           n
                          =                ajn E In (gn (λ) + j/n)) − f (gn (λ) + j/n)
                               |j|≤m
                                                                                          o
                                                                + f (gn (λ) + j/n) − f (λ) ,

where (5.10) together with the uniform convergence of gn (λ) to λ implies

                           max |gn (λ) + j/n − λ| −→n→∞ 0.
                           |j|≤m

Choose ε > 0. The spectral density f of the process (Yt ) is continuous (Exer-
cise 16), and hence we have

                           max |f (gn (λ) + j/n) − f (λ)| < ε/2
                          |j|≤m
5.2 Estimating Spectral Densities                                                 175

if n is sufficiently large. From Theorem 5.2.1 we know that in the case E(Yt ) = 0

                max | E(In (gn (λ) + j/n)) − f (gn (λ) + j/n)| < ε/2
                |j|≤m

if n is large. Condition (c) in (5.11) together with the triangular inequality implies
| E(fˆn (λ)) − f (λ)| < ε for large n. This implies part (i).

From the definition of fˆn we obtain

          Cov(fˆn (λ), fˆn (µ))
             X X                                                         
          =               ajn akn Cov In (gn (λ) + j/n), In (gn (µ) + k/n) .
             |j|≤m |k|≤m

If λ 6= µ and n sufficiently large we have gn (λ) + j/n 6= gn (µ) + k/n for arbitrary
|j|, |k| ≤ m. According to Remark 5.2.3 there exists a universal constant C1 > 0
such that
                                            X X
                 | Cov(fˆn (λ), fˆn (µ))| =          ajn akn O(n−1 )
                                           |j|≤m |k|≤m
                                                       X           2
                                                 −1
                                        ≤ C1 n                ajn
                                                      |j|≤m
                                               2m + 1 X 2
                                        ≤ C1            ajn ,
                                                 n
                                                        |j|≤m

where the final inequality is an application of the Cauchy–Schwarz inequality.
Since m/n −→n→∞ 0, we have established (ii) in the case λ 6= µ. Suppose now
0 < λ = µ < 0.5. Utilizing again Remark 5.2.3 we have
                            X        n                              o
             Var(fˆn (λ)) =      a2jn f 2 (gn (λ) + j/n) + O(n−1/2 )
                             |j|≤m
                                X X
                            +                 ajn akn O(n−1 ) + o(n−1 )
                                |j|≤m |k|≤m

                           =: S1 (λ) + S2 (λ) + o(n−1 ).

Repeating the arguments in the proof of part (i) one shows that
                            X                   X        
                  S1 (λ) =       a2jn f 2 (λ) + o       a2jn .
                                |j|≤m                     |j|≤m

Furthermore, with a suitable constant C2 > 0, we have
                            1 X       2      2m + 1 X 2
              |S2 (λ)| ≤ C2         ajn ≤ C2            ajn .
                            n                     n
                                  |j|≤m                             |j|≤m
176                     Chapter 5. Statistical Analysis in the Frequency Domain

Thus we established the assertion of part (ii) also in the case 0 < λ = µ < 0.5.
The remaining cases λ = µ = 0 and λ = µ = 0.5 are shown in a similar way
(Exercise 17).




The preceding result requires zero mean variables Yt . This might, however, be too
restrictive in practice. Due to (3.6), the periodograms of (Yt )1≤t≤n , (Yt − µ)1≤t≤n
and (Yt − Ȳ )1≤t≤n coincide at Fourier frequencies different from zero. At frequency
λ = 0, however, they will differ in general. To estimate f (0) consistently also in
the case µ = E(Yt ) 6= 0, one puts



                                                m
                                                X
                  fˆn (0) := a0n In (1/n) + 2
                                                                      
                                                      ajn In (1 + j)/n .      (5.12)
                                                j=1




Each time the value In (0) occurs in the moving average (5.9), it is replaced by
fˆn (0). Since the resulting estimator of the spectral density involves only Fourier
frequencies different from zero, we can assume without loss of generality that the
underlying variables Yt have zero mean.



Example 5.2.5. (Sunspot Data). We want to estimate the spectral density under-
lying the Sunspot Data. These data, also known as the Wolf or Wölfer (a student
of Wolf) Data, are the yearly sunspot numbers between 1749 and 1924. For a dis-
cussion of these data and further literature we refer to Wei (1990), Example 6.2.
Figure 5.2.1 shows the pertaining periodogram and Figure 5.2.2 displays the dis-
crete spectral average estimator with weights a0n = a1n = a2n = 3/21, a3n = 2/21
and a4n = 1/21, n = 176. These weights pertain to a simple moving average of
length 3 of a simple moving average of length 7. The smoothed version joins the
two peaks close to the frequency λ = 0.1 visible in the periodogram. The observa-
tion that a periodogram has the tendency to split a peak is known as the leakage
phenomenon.
5.2 Estimating Spectral Densities                                     177




            Figure 5.2.1. Periodogram and discrete spectral average
            estimate for Sunspot Data.
178                        Chapter 5. Statistical Analysis in the Frequency Domain


 ***      Program 5 _2_1  ***;
 TITLE1 ’ Periodogram and spectral density estimate ’;
 TITLE2 ’ Woelfer Sunspot Data ’;

DATA data1 ;
  INFILE ’c :\ data \ sunspot . txt ’;
  INPUT num @@ ;

PROC SPECTRA DATA = data1 P S OUT = data2 ;
  VAR num ;
  WEIGHTS 1 2 3 3 3 2 1;

DATA data3 ;
  SET data2 ( FIRSTOBS =2);
  lambda = FREQ /(2* CONSTANT ( ’ PI ’));
  p = P \ _01 /2;
  s = S \ _01 /2*4* CONSTANT ( ’ PI ’);

 SYMBOL1 I = JOIN C = RED V = NONE L =1;
 AXIS1 LABEL =( F = CGREEK ’l ’) ORDER =(0 TO .5 BY .05);
 AXIS2 LABEL = NONE ;
 PROC GPLOT DATA = data3 ;
   PLOT p * lambda / HAXIS = AXIS1 VAXIS = AXIS2 ;
   PLOT s * lambda / HAXIS = AXIS1 VAXIS = AXIS2 ;
 RUN ; QUIT ;
                                                                                                    

In the DATA step the data of the sunspots are    ment. Note that SAS automatically normalizes
read into the variable num.                      these weights.

Then PROC SPECTRA is applied to this variable,   In following DATA step the slightly different de-
whereby the options P (see Program 5 1 1) and    finition of the periodogram by SAS is being
S generate a data set stored in data2 contain-   adjusted to the definition used here (see Pro-
ing the periodogram data and the estimation      gram 3 2 1). Both plots are then printed with
of the spectral density which SAS computes       PROC GPLOT.
with the weights given in the WEIGHTS state-




A mathematically convenient way to generate weights ajn , which satisfy the con-
ditions (5.11), is the use of a kernel function. Let K : [−1, 1] → [0, ∞) be a sym-
                                                                    R1
metric function i.e., K(−x) = K(x), x ∈ [−1, 1], which satisfies −1 K 2 (x) dx <
∞. Let now m = m(n) −→n→∞ ∞ be an arbitrary sequence of integers with
5.2 Estimating Spectral Densities                                               179

m/n −→n→∞ 0 and put

                               K(j/m)
                     ajn := Pm           ,       −m ≤ j ≤ m.                 (5.13)
                             i=−m K(i/m)

These weights satisfy the conditions (5.11) (Exercise 18).

Take for example K(x) := 1 − |x|, −1 ≤ x ≤ 1. Then we obtain

                                  m − |j|
                          ajn =           ,   −m ≤ j ≤ m.
                                   m2
Example 5.2.6. (i) The truncated kernel is defined by
                                  (
                                    1, |x| ≤ 1
                         KT (x) =
                                    0 elsewhere.


(ii) The Bartlett or triangular kernel is given by
                                    (
                                      1 − |x|, |x| ≤ 1
                          KB (x) :=
                                      0         elsewhere.


(iii) The Blackman–Tukey kernel (1959) is defined by
                            (
                             1 − 2a + 2a cos(x), |x| ≤ 1
                  KBT (x) =
                             0                     elsewhere,

where 0 < a ≤ 1/4. The particular choice a = 1/4 yields the Tukey–Hanning
kernel .

(iv) The Parzen kernel (1957) is given by
                           
                                      2    3
                           1 − 6|x| + 6|x| , |x| < 1/2
                           
                 KP (x) := 2(1 − |x|)3 ,      1/2 ≤ |x| ≤ 1
                           
                             0                elsewhere.
                           

We refer to Andrews (1991) for a discussion of these kernels.

Example 5.2.7. We consider realizations of the MA(1)-process Yt = εt − 0.6εt−1
with εt independent and standard normal for t = 1, . . . , n = 160. Example 4.3.2
implies that the process (Yt ) has the spectral density f (λ) = 1−1.2 cos(2πλ)+0.36.
We estimate f (λ) by means of the Tukey–Hanning kernel.
180                    Chapter 5. Statistical Analysis in the Frequency Domain




      Figure 5.2.2. Discrete spectral average estimator (broken line) with
      Blackman–Tukey kernel with parameters r = 10, a = 1/4 and underly-
      ing spectral density f (λ) = 1 − 1.2 cos(2πλ) + 0.36 (solid line).

 ***      Program 5 _2_2      ***;
 TITLE1 ’ Spectral density and Blackman - Tukey estimator ’;
 TITLE2 ’ of MA (1) - process ’;

DATA data1 ;
  DO t =0 TO 160;
    e = RANNOR (1);
    y =e -.6* LAG ( e );
    OUTPUT ;
  END ;

PROC SPECTRA DATA = data1 ( FIRSTOBS =2) S OUT = data2 ;
  VAR y ;
  WEIGHTS TUKEY 10 0;
RUN ;

DATA data3 ;
  SET data2 ;
5.2 Estimating Spectral Densities                                                            181

   lambda = FREQ /(2* CONSTANT ( ’ PI ’));
   s = S_01 /2*4* CONSTANT ( ’ PI ’);

DATA data4 ;
  DO l =0 TO .5 BY .01;
    f =1 -1.2* COS (2* CONSTANT ( ’ PI ’)* l )+.36;
    OUTPUT ;
  END ;

DATA data5 ;
  MERGE data3 ( KEEP = s lambda ) data4 ;

 AXIS1 LABEL = NONE ;
 AXIS2 LABEL =( F = CGREEK ’l ’) ORDER =(0 TO .5 BY .1);
 SYMBOL1 I = JOIN C = BLUE V = NONE L =1;
 SYMBOL2 I = JOIN C = RED V = NONE L =3;
 PROC GPLOT DATA = data5 ;
   PLOT f * l =1 s * lambda =2
                 / OVERLAY VAXIS = AXIS1 HAXIS = AXIS2 ;
 RUN ; QUIT ;
                                                                                                    



In the first DATA step the realizations of an     a specified bandwidth of m=10. The second
M A(1)-process with the given parameters are      number after the TUKEY option can be used to
created. Thereby the function RANNOR, which       refine the choice of the bandwidth. Since this
generates standard normally distributed data,     is not needed here it is set to 0.
and LAG, which accesses the value of e of the
preceding loop, are used.                         The next DATA step adjusts the different defini-
                                                  tions of the periodogram used here and by SAS
As in Program 5 2 1 PROC SPECTRA computes         (see Program 3 2 1). The following DATA step
the estimator of the spectral density (after      generates the values of the underlying spectral
dropping the first observation) by the option S   density. These are merged with the values of
and stores them in data2. The weights used        the estimated spectral density and then dis-
here come from the Tukey–Hanning kernel with      played by PROC GPLOT.




Confidence Intervals for Spectral Densities
The random variables In ((k + j)/n)/f ((k + j)/n), 0 < k + j < n/2, will by Remark
5.2.3 for large n approximately behave like independent and standard exponential
distributed random variables Xj . This suggests that the distribution of the discrete
182                      Chapter 5. Statistical Analysis in the Frequency Domain

spectral average estimator
                                       X                k + j 
                           fˆ(k/n) =           ajn In
                                                           n
                                       |j|≤m
                                                     P
can be approximated by that of the weighted sum         |j|≤m ajn Xj f ((k + j)/n).
Tukey (1949) showed that the distribution of this weighted sum can in turn be
approximated by that of cY with a suitably chosen c > 0, where Y follows a
gamma distribution with parameters p := ν/2 > 0 and b = 1/2 i.e.,
                                   Z t
                               bp
                 P {Y ≤ t} =           xp−1 exp(−bx) dx, t ≥ 0,
                              Γ(p) 0
              R∞
where Γ(p) := 0 xp−1 exp(−x) dx denotes the gamma function. The parameters
ν and c are determined by the method of moments as follows: ν and c are chosen
such that cY has mean f (k/n) and its variance equals the leading term of the
variance expansion of fˆ(k/n) in Theorem 5.2.4 (Exercise 21):

                         E(cY ) = cν = f (k/n),
                                                           X
                       Var(cY ) = 2c2 ν = f 2 (k/n)               a2jn .
                                                          |j|≤m

The solutions are obviously

                                     f (k/n) X 2
                                c=             ajn
                                         2
                                                |j|≤m


and

                                          2
                               ν=P             2 .
                                        |j|≤m ajn

Note that the gamma distribution with parameters p = ν/2 and b = 1/2 equals
the χ2 -distribution with ν degrees of freedom if ν is an integer. The number ν is,
therefore, called the equivalent degree of freedom. Observe that ν/f (k/n) = 1/c;
the random variable ν fˆ(k/n)/f (k/n) = fˆ(k/n)/c now approximately follows a
χ2 (ν)-distribution with the convention that χ2 (ν) is the gamma distribution with
parameters p = ν/2 and b = 1/2 if ν is not an integer. The interval
                                                      !
                                 ν fˆ(k/n) ν fˆ(k/n)
                                           ,                                (5.14)
                                χ21−α/2 (ν) χ2α/2 (ν)

is a confidence interval for f (k/n) of approximate level 1 − α, α ∈ (0, 1). By
χ2q (ν) we denote the q-quantile of the χ2 (ν)-distribution i.e., P {Y ≤ χ2q (ν)} = q,
5.2 Estimating Spectral Densities                                                            183

0 < q < 1. Taking logarithms in (5.14), we obtain the confidence interval for
log(f (k/n))
                  
  Cν,α (k/n) :=       log(fˆ(k/n)) + log(ν) − log(χ21−α/2 (ν)),
                                                                                      
                                                log(fˆ(k/n)) + log(ν) − log(χ2α/2 (ν)) .

This interval has constant length log(χ21−α/2 (ν)/χ2α/2 (ν)). Note that Cν,α (k/n)
is a level (1 − α)-confidence interval only for log(f (λ)) at a fixed Fourier frequency
λ = k/n, with 0 < k < [n/2], but not simultaneously for λ ∈ (0, 0.5).

Example 5.2.8. In continuation of Example 5.2.7 we want to estimate the spec-
tral density f (λ) = 1 − 1.2 cos(2πλ) + 0.36 of the MA(1)-process Yt = εt − 0.6εt−1
using the discrete spectral average estimator fˆn (λ) with the weights 1, 3, 6, 9, 12,
15, 18, 20, 21, 21, 21, 20, 18, 15, 12, 9, 6, 3, 1, each divided by 231. These weights
are generated by iterating simple moving averages of lengths 3, 7 and 11. Figure
5.2.3 displays the logarithms of the estimates, of the true spectral density and the
pertaining confidence intervals.




     Figure 5.2.3. Logarithms of discrete spectral average estimates (broken line),
     of spectral density f (λ) = 1 − 1.2 cos(2πλ) + 0.36 (solid line) of MA(1)-process
     Yt = εt − 0.6εt−1 , t = 1, . . . , n = 160, and confidence intervals of level 1 − α =
     0.95 for log(f (k/n)).
184                   Chapter 5. Statistical Analysis in the Frequency Domain


 ***      Program 5 _2_3      ***;
 TITLE1 ’ Logarithms of spectral density ,;
 TITLE2 ’ of their estimates and confidence intervals ’;
 TITLE3 ’ of MA (1) - process ’;

DATA data1 ;
  DO t =0 TO 160;
    e = RANNOR (1);
    y =e -.6* LAG ( e );
    OUTPUT ;
  END ;

PROC SPECTRA DATA = data1 ( FIRSTOBS =2) S OUT = data2 ;
  VAR y ; WEIGHTS 1 3 6 9 12 15 18 20 21 21 21
                             20 18 15 12 9 6 3 1;
  RUN ;

DATA data3 ; SET data2 ;
  lambda = FREQ /(2* CONSTANT ( ’ PI ’));
  log_s_01 = LOG ( S_01 /2*4* CONSTANT ( ’ PI ’));
  nu =2/(3763/53361);
  c1 = log_s_01 + LOG ( nu ) - LOG ( CINV (.975 , nu ));
  c2 = log_s_01 + LOG ( nu ) - LOG ( CINV (.025 , nu ));

DATA data4 ;
  DO l =0 TO .5 BY 0.01;
    log_f = LOG ((1 -1.2* COS (2* CONSTANT ( ’ PI ’)* l )+.36));
    OUTPUT ;
  END ;

DATA data5 ;
  MERGE data3 ( KEEP = log_s_01 lambda c1 c2 ) data4 ;

 AXIS1 LABEL = NONE ;
 AXIS2 LABEL =( F = CGREEK ’l ’) ORDER =(0 TO .5 BY .1);
 SYMBOL1 I = JOIN C = BLUE V = NONE L =1;
 SYMBOL2 I = JOIN C = RED V = NONE L =2;
 SYMBOL3 I = JOIN C = GREEN V = NONE L =33;
 PROC GPLOT DATA = data5 ;
   PLOT log_f * l =1 log_s_01 * lambda =2 c1 * lambda =3
         c2 * lambda =3 / OVERLAY VAXIS = AXIS1 HAXIS = AXIS2 ;
 RUN ; QUIT ;
                                                                               
Exercises                                                                                            185

This programm starts identically to Pro-                  tion. The logarithm of the confidence intervals
gram 5 2 2 with the generation of an M A(1)-              is calculated with the help of the function CINV
process and of the computation the spectral               which returns quantiles of a χ2 -distribution
density estimator. Only this time the weights             with ν degrees of freedom.
are directly given to SAS.
                                                          The rest of the program which displays the log-
In the next DATA step the usual adjustment of             arithm of the estimated spectral density, of the
the frequencies is done. This is followed by              underlying density and of the confidence inter-
the computation of ν according to its defini-             vals is analogous to Program 5 2 2.




Exercises

1. For independent random variables X, Y having continuous distribution functions it
follows that P {X = Y } = 0. Hint: Fubini’s theorem.

2. Let X1 , . . . , Xn be iid random variables with values in R and distribution function F .
Denote by X1:n ≤ · · · ≤ Xn:n the pertaining order statistics. Then we have
                                                   !
                                      X
                                      n
                                              n
                  P {Xk:n ≤ t} =                F (t)j (1 − F (t))n−j ,          t ∈ R.
                                              j
                                      j=k

The maximum Xn:n has in particular the distribution function   F n , and the minimum
                                                              P n
X1:n has distribution function 1−(1−F )n . Hint: {Xk:n ≤ t} =    j=1 1(−∞,t] (Xj ) ≥ k .


3. Suppose in addition to the conditions in the preceding exercise that F has a (Lebesgue)
density f . The ordered vector (X1:n , . . . , Xn:n ) then has a density
                                                   Y
                                                   n
                      fn (x1 , . . . , xn ) = n!         f (xj ),   x1 < · · · < xn ,
                                                   j=1


and zero elsewhere. Hint: Denote by Sn the group of permutations of {1, . . . , n} i.e.,
(τ (1), . . . , (τ (n)) with τ ∈ Sn is a permutation of (1, . . . , n). Put for P
                                                                                τ ∈ Sn the set
Bτ := {Xτ (1) < · · · < Xτ (n) }. These sets are disjoint and we have P ( τ ∈Sn Bτ ) = 1
since P {Xj = Xk } = 0 for i 6= j (cf. Exercise 1).


4. (i) Let X and Y be independent, standard normal p     distributed random variables.
       Show that the vector (X, Z)T := (X, ρX + 1 − ρ2 Y )T , −1< ρ < 1, is normal
                                                                     1 ρ
       distributed with mean vector (0, 0) and covariance matrix            , and that X
                                                                     ρ 1
       and Z are independent if and only if they are uncorrelated (i.e., ρ = 0).

   (i) Suppose that X and Y are normal distributed and uncorrelated. Does this imply
       the independence of X and Y ? Hint: Let X N (0, 1)-distributed and define the
186                                Chapter 5. Statistical Analysis in the Frequency Domain

         random variable Y = V X with V independent of X and P {V = −1} = 1/2 =
         P {V = 1}.


5. Generate 100 independent and standard normal random variables εt and plot the
periodogram. Is the hypothesis that the observations were generated by a white noise
rejected at level α = 0.05(0.01)? Visualize the Bartlett-Kolmogorov-Smirnov test by
plotting the empirical distribution function of the cumulated periodograms Sj , 1 ≤ j ≤
48, together with the pertaining bands for α = 0.05 and α = 0.01
                                               cα
                                       y =x± √    ,             x ∈ (0, 1).
                                              m−1


6. Generate the values
                                                   
                                            1
                                 Yt = cos 2π t + εt ,           t = 1, . . . , 300,
                                            6
where εt are independent and standard normal. Plot the data and the periodogram. Is
the hypothesis Yt = εt rejected at level α = 0.01?

7. (Share Data) Test the hypothesis that the share data were generated by independent
and identically normal distributed random variables and plot the periodogramm. Plot
also the original data.

8. (Kronecker’s lemma)
                   P
                         Let (aj )j≥0 be an absolute summable complexed valued filter.
Show that limn→∞ n   j=0 (j/n)|a j | = 0.


9. The normal distribution N (0, σ 2 ) satisfies

         R
  (i)        x2k+1 dN (0, σ 2 )(x) = 0,      k ∈ N ∪ {0}.
         R
  (ii)       x2k dN (0, σ 2 )(x) = 1 · 3 · · · · · (2k − 1)σ 2k ,   k ∈ N.
         R                                 k+1
 (iii)       |x|2k+1 dN (0, σ 2 )(x) = 2√2π k!σ 2k+1 ,       k ∈ N ∪ {0}.


10. Show that a χ2 (ν)-distributed random variable satisfies E(Y ) = ν and Var(Y ) = 2ν.
Hint: Exercise 9.

11. (Slutzky’s lemma) Let X, Xn , n ∈ N, be random variables in R with distribution
functions FX and FXn , respectively. Suppose that Xn converges in distribution to X
(denoted by Xn →D X) i.e., FXn (t) → FX (t) for every continuity point of FX as n → ∞.
Let Yn , n ∈ N, be another sequence of random variables which converges stochastically
to some constant c ∈ R, i.e., limn→∞ P {|Yn − c| > ε} = 0 for arbitrary ε > 0. This
implies

  (i) Xn + Yn →D X + c.
  (ii) Xn Yn →D cX.
Exercises                                                                                    187

 (iii) Xn /Yn →D X/c,      if c 6= 0.

This entails in particular that stochastic convergence implies convergence in distribution.
The reverse implication is not true in general. Give an example.

12. Show that the distribution function Fm of Fisher’s test statistic κm satisfies under
the condition of independent and identically normal observations εt

      Fm (x + ln(m)) = P {κm ≤ x + ln(m)} →m→∞ exp(−e−x ) =: G(x),                  x ∈ R.

The limiting distribution G is known as the Gumbel distribution. Hence we have P {κm >
x} = 1 − Fm (x) ≈ 1 − exp(−m e−x ). Hint: Exercise 2 and Slutzky’s lemma.

13. Which effect has an outlier on the periodogram? Check this for the simple model
(Yt )t,...,n (t0 ∈ {1, . . . , n})      (
                                          εt ,    t 6= t0
                                   Yt =
                                          εt + c, t = t0 ,
where the εt are independent and identically normal N (0, σ 2 )-distributed and c 6= 0 is
an arbitrary constant. Show to this end

              E(IY (k/n)) = E(Iε (k/n)) + c2 /n
            Var(IY (k/n)) = Var(Iε (k/n)) + 2c2 σ 2 /n,   k = 1, . . . , [(n − 1)/2].


14. Suppose that U1 , . . . , Un are uniformly distributed on (0, 1) and let F̂n denote the
pertaining empirical distribution function. Show that
                                           (                                    )
                                                  n       (k − 1) k       o
              sup |F̂n (x) − x| = max          max Uk:n −        , − Uk:n   .
            0≤x≤1                  1≤k≤n                     n    n


15. (Monte Carlo Simulation) For m large we have under the hypothesis
                                  √
                               P { m − 1∆m−1 > cα } ≈ α.
                                                                       √
For different values of m (> 30) generate 1000 times the test statistic m − 1∆m−1 based
on independent random variables and check, how often this statistic exceeds the critical
values c0.05 = 1.36 and c0.01 = 1.63. Hint: Exercise 14.

16. In the situation of Theorem 5.2.4 show that the spectral density f of (Yt )t is con-
tinuous.

17. Complete the proof of Theorem 5.2.4 (ii) for the remaining cases λ = µ = 0 and
λ = µ = 0.5.

18. Verify that the weights (5.13) defined via a kernel function satisfy the conditions
(5.11).
188                               Chapter 5. Statistical Analysis in the Frequency Domain

19. Use the IML function ARMASIM to simulate the process

                            Yt = 0.3Yt−1 + εt − 0.5εt−1 ,       1 ≤ t ≤ 150,

where εt are independent and standard normal. Plot the periodogram and estimates of
the log spectral density together with confidence intervals. Compare the estimates with
the log spectral density of (Yt )t∈Z .

20. Compute the distribution of the periodogram Iε (1/2) for independent and identically
normal N (0, σ 2 )-distributed random variables ε1 , . . . , εn in case of an even sample size n.

21. Suppose that Y follows a gamma distribution with parameters p and b. Calculate
the mean and the variance of Y .

22. Compute the length of the confidence interval Cν,α (k/n) for fixed α (preferably
α = 0.05) but for various ν. For the calculation of ν use the weights generated by the
kernel K(x) = 1 − |x|, −1 ≤ x ≤ 1 (see equation (5.13).

23. Show that for y ∈ R

                          1 X i2πyt 2
                             n−1        X    |t|  i2πyt
                                e     =    1−      e      = Kn (y),
                          n t=0                n
                                              |t|<n


where                                      8
                                           <n,                   y∈Z
                                   Kn (y) = 1  sin(πyn) 2
                                           :                ,    y∈
                                                                  / Z,
                                                n     sin(πy)

is the Fejer kernel of order n. Verify that it has the properties


  (i) Kn (y) ≥ 0,
  (ii) the Fejer kernel is a periodic function of period length one,
 (iii) Kn (y) = Kn (−y),
        R 0.5
 (iv)    −0.5
                 Kn (y) dy = 1,
        Rδ
  (v)    −δ
                Kn (y) dy →n→∞ 1,      δ > 0.


24. (Nile Data) Between 715 and 1284 the river Nile had its lowest annual minimum
levels. These data are among the longest time series in hydrology. Can the trend re-
moved Nile Data be considered as being generated by a white noise, or are these hidden
periodicities? Estimate the spectral density in this case. Use discrete spectral estimators
as well as lag window spectral density estimators. Compare with the spectral density of
an AR(1)-process.
References

Andrews, D.W.K. (1991). Heteroscedasticity and autocorrelation consistent covariance
    matrix estimation. Econometrica 59, 817–858.
Billingsley, P. (1968). Convergence of Probability Measures. John Wiley, New York.
Bloomfield, P. (1976). Fourier Analysis of Time Series: An Introduction. John Wiley,
    New York.
Bollerslev, T. (1986). Generalized autoregressive conditional heteroscedasticity. J. Eco-
     nometrics 31, 307–327.
Box, G.E.P. and Cox, D.R. (1964). An analysis of transformations (with discussion).
    J.R. Stat. Sob. B. 26, 211–252.
Box, G.E.P. and Jenkins, G.M. (1976). Times Series Analysis: Forecasting and Control.
     Rev. ed. Holden–Day, San Francisco.
Box, G.E.P. and Pierce, D.A. (1970). Distribution of residual autocorrelation in autore-
     gressive-integrated moving average time series models. J. Amex. Statist. Assoc.
     65, 1509–1526.
Box, G.E.P. and Tiao, G.C. (1977). A canonical analysis of multiple time series. Bio-
    metrika 64, 355–365.
Brockwell, P.J. and Davis, R.A. (1991). Time Series: Theory and Methods. 2nd ed.
    Springer Series in Statistics, Springer, New York.
Brockwell, P.J. and Davis, R.A. (2002). Introduction to Time Series and Forecasting.
    2nd ed. Springer Texts in Statistics, Springer, New York.
Cleveland, W.P. and Tiao, G.C. (1976). Decomposition of seasonal time series: a model
    for the census X–11 program. J. Amex. Statist. Assoc. 71, 581–587.
Conway, J.B. (1975). Functions of One Complex Variable, 2nd. printing. Springer,
    New York.
Engle, R.F. (1982). Autoregressive conditional heteroscedasticity with estimates of the
    variance of UK inflation. Econometrica 50, 987–1007.
Engle, R.F. and Granger, C.W.J. (1987). Co–integration and error correction: repre-
    sentation, estimation and testing. Econometrica 55, 251–276.
Falk, M., Marohn, F. and Tewes, B. (2002). Foundations of Statistical Analyses and
     Applications with SAS. Birkhäuser, Basel.
Fan, J. and Gijbels, I. (1996). Local Polynominal Modeling and Its Application —
     Theory and Methodologies. Chapman and Hall, New York.
190                                                                          References

Feller, W. (1971). An Introduction to Probability Theory and Its Applications. Vol. II,
     2nd. ed. John Wiley, New York.
Fuller, W.A. (1976). Introduction to Statistical Time Series. John Wiley, New York.
Granger, C.W.J. (1981). Some properties of time series data and their use in econo-
    metric model specification. J. Econometrics 16, 121–130.
Hamilton, J.D. (1994). Time Series Analysis. Princeton University Press, Princeton.
Hannan, E.J. and Quinn, B.G. (1979). The determination of the order of an autore-
    gression. J.R. Statist. Soc. B 41, 190–195.
Janacek, G. and Swift, L. (1993). Time Series. Forecasting, Simulation, Applications.
    Ellis Horwood, New York.
Kalman, R.E. (1960). A new approach to linear filtering. Trans. ASME J. of Basic
    Engineering 82, 35–45.
Kendall, M.G. and Ord, J.K. (1993). Time Series. 3rd ed. Arnold, Sevenoaks.
Ljung, G.M. and Box, G.E.P. (1978). On a measure of lack of fit in time series models.
    Biometrika 65, 297–303.
Murray, M.P. (1994). A drunk and her dog: an illustration of cointegration and error
    correction. The American Statistician 48, 37–39.
Newton, H.J. (1988). Timeslab: A Time Series Analysis Laboratory. Brooks/Cole,
    Pacific Grove.
Parzen, E. (1957). On consistent estimates of the spectrum of the stationary time series.
    Ann. Math. Statist. 28, 329–348.
Phillips, P.C. and Ouliaris, S. (1990). Asymptotic properties of residual based tests for
     cointegration. Econometrica 58, 165–193.
Phillips, P.C. and Perron, P. (1988). Testing for a unit root in time series regression.
     Biometrika 75, 335–346.
Quenouille, M.H. (1957). The Analysis of Multiple Time Series. Griffin, London.
Reiss, R.D. (1989). Approximate Distributions of Order Statistics. With Applications
     to Nonparametric Statistics. Springer Series in Statistics, Springer, New York.
Rudin, W. (1974). Real and Complex Analysis, 2nd. ed. McGraw-Hill, New York.
SAS Institute Inc. (1992). SAS Procedures Guide, Version 6, Third Edition. SAS
    Institute Inc. Cary, N.C.
Shiskin, J. and Eisenpress, H. (1957). Seasonal adjustment by electronic computer
     methods. J. Amer. Statist. Assoc. 52, 415–449.
Shiskin, J., Young, A.H. and Musgrave, J.C. (1967). The X–11 variant of census method
     II seasonal adjustment program. Technical paper no. 15, Bureau of the Census,
     U.S. Dept. of Commerce.
Simonoff, J.S. (1966). Smoothing Methods in Statistics. Springer Series in Statistics,
    Springer, New York.
Tintner, G. (1958). Eine neue Methode für die Schätzung der logistischen Funktion.
    Metrika 1, 154–157.
References                                                                     191

 Tukey, J. (1949). The sampling theory of power spectrum estimates. Proc. Symp. on
     Applications of Autocorrelation Analysis to Physical Problems, NAVEXOS-P-735,
     Office of Naval Research, Washington, 47–67.
 Wallis, K.F. (1974). Seasonal adjustment and relations between variables. J. Amer.
      Statist. Assoc. 69, 18–31.
 Wei, W.W.S. (1990). Time Series Analysis. Unvariate and Multivariate Methods.
     Addison–Wesley, New York.
Index

Autocorrelation                                  Hog, 72, 76
    -function, 30                                Hogprice, 72
Autocovariance                                   Hogsuppl, 72
    -function, 30                                Hongkong, 80
                                                 Income, 13
Bandwidth, 147                                   Nile, 188
Box–Cox Transformation, 35                       Population1, 8
                                                 Population2, 36
Cauchy–Schwarz inequality, 32                    Public Expenditures, 37
Census                                           Share, 186
     U.S. Bureau of the, 19                      Star, 114, 121
     X-11 Program, 19                            Sunspot, iii, 30, 176
     X-12 Program, 20                            Unemployed Females, 37
Cointegration, 70                                Unemployed1, 2, 18, 21, 38
     regression, 71                              Unemployed2, 37
Complex number, 41                               Wolf, see Sunspot Data
Confidence band, 164                             Wölfer, see Sunspot Data
Conjugate complex number, 41                     Zurich, 110
Correlogram, 30                             Difference
Covariance generating function, 47,              seasonal, 28
          48                                Discrete spectral average estimator,
Covering theorem, 163                                  173, 174
Cramér–Wold device, 171                    Distribution
Critical value, 163                              χ2 -, 161, 182
Cycle                                            t-, 78
     Juglar, 20                                  exponential, 161, 162
Césaro convergence, 155                         gamma, 182
                                                 Gumbel, 163
Data                                             uniform, 161
    Airline, 32, 102, 164, 165              Distribution function
    Bankruptcy, 38, 125                          empirical, 162
    Car, 110                                Drunkard’s walk, 71
    Electricity, 25
    Gas, 111                                Equivalent degree of freedom, 182

                                      193
194                                                                 Index

Error correction, 71, 75                   Bayesian, 86
Euler’s equation, 124                      Hannan-Quinn, 86
Exponential Smoother, 28              Innovation, 78
                                      Input, 16
Fatou’s lemma, 44                     Intercept, 13
Filter
     absolutely summable, 43          Kalman
     band pass, 147                       filter, 97, 101
     difference, 25                          h-step prediction, 101
     exponential smoother, 28                prediction step of, 101
     high pass, 147                          updating step of, 101
     inverse, 50                          gain, 100, 101
     linear, 16, 173                      recursions, 98
     low pass, 147                    Kernel
     low-pass, 17                         Bartlett, 179
Fisher’s kappa statistic, 163             Blackman–Tukey, 179, 180
Forecast                                  Fejer, 188
     by an exponential smoother, 29       function, 178
Fourier transform, 124                    Parzen, 179
     inverse, 129                         triangular, 179
Function                                  truncated, 179
     quadratic, 87                        Tukey–Hanning, 179
     allometric, 13                   Kolmogorov’s theorem, 136, 137
     Cobb–Douglas, 13                 Kolmogorov–Smirnov statistic, 164
     logistic, 6                      Kronecker’s lemma, 186
     Mitscherlich, 11
                                      Leakage phenomenon, 176
     positive semidefinite, 136
                                      Least squares, 89
     transfer, 142
                                           estimate, 72
                                           filter design, 147
Gain, see Power transfer function
                                      Likelihood function, 87
Gamma function, 78, 182
                                      Lindeberg condition, 171
Gibb’s phenomenon, 149
                                      Linear process, 174
Gumbel distribution, 187
                                      Log returns, 80
                                      Loglikelihood function, 88
Hang Seng
    closing index, 80                 Maximum impregnation, 8
Helly’s selection theorem, 139        Maximum likelihood estimator, 79, 88
Henderson moving average, 20          Moving average, 173
Herglotz’s theorem, 137
                                      North Rhine-Westphalia, 8
Imaginary part                        Nyquist frequency, 141
     of a complex number, 41
Information criterion                 Observation equation, 95
     Akaike’s, 86                     Order statistics, 161
Index                                                                          195

Output, 16                                      of Phillips–Ouliaris for cointegra-
                                                      tion, 76
Periodogram, 121, 161                           Portmanteau, 90
    cumulated, 162                           Time series
Power transfer function, 142                    seasonally adjusted, 18
Principle of parsimony, 85                   Time Series Analysis, 1
Process
    ARCH (p), 78                             Unit root test, 71
    GARCH (p, q), 79
    autoregressive , 54                      Volatility, 77
    stationary, 42
                                             Weights, 16
    autoregressive moving average, 64
                                             White noise
                                                 spectral density of a, 139
Random walk, 70
Real part                                    X-11 Program, see Census
    of a complex number, 41                  X-12 Program, see Census
Residual sum of squares, 89
                                             Yule–Walker equations, 59
Slope, 13
Slutzky’s lemma, 186
Spectral
    density, 135, 137
       of AR(p)-processes, 150
       of ARMA-processes, 149
       of MA(q)-processes, 150
       of ARMA-processes, 149
    distribution function, 137
Spectrum, 135
State, 95
    equation, 95
State-space
    model, 95
    representation, 95

Test
       augmented Dickey–Fuller, 72
       Bartlett–Kolmogorov–Smirnov, 163
       Bartlett-Kolmogorov-Smirnov, 164
       Box–Ljung, 90
       Box–Pierce, 90
       Dickey–Fuller, 72
       Durbin–Watson, 72
       of Fisher for hidden periodicities,
            163
SAS-Index

Symbols                                   FTEXT, 57
| |, 8
@@, 32                                    G
 FREQ , 167                               GARCH, 84
 N , 22, 34, 82, 116, 167                 GOPTION, 57
                                          GOPTIONS, 27
A                                         GOUT=, 27
ADDITIVE, 22                              GREEK, 8
ANGLE, 5                                  GREEN, 6
AXIS, 5, 22, 32, 57, 58, 149, 167
                                          H
C                                         H=height, 6, 8
C=color, 6
CGREEK, 57                                I
CINV, 185                                 I=display style, 6, 167
COEF, 123                                 IDENTIFY, 32, 64, 84
COMPLEX, 57                               IF, 167
COMPRESS, 8, 69                           IGOUT, 27
CONSTANT, 116                             INPUT, 22, 32
CORR, 32                                  INTNX, 22

D                                         J
DATA, 4, 8, 82                            JOIN, 6, 131
DATE, 22
DELETE, 27                                K
DISPLAY, 27                               Kernel
DIST, 84                                      Tukey–Hanning, 181
DO, 8, 149
DOT, 6                                    L
                                          L=line type, 8
F                                         LABEL, 5, 57, 152
F=font, 8                                 LAG, 32, 64, 181
FIRSTOBS, 123                             LEAD=, 104
FORMAT, 22                                LEGEND, 8, 22, 57
FREQ, 123                                 LOG, 35

                                    197
198                                                                SAS-Index

M                                            STATESPACE, 104
MERGE, 11                                    X11, 22
MINOR, 32, 58
MODEL, 11, 76, 84, 116                   Q
MONTHLY, 22                              QUIT, 4

N                                        R
NDISPLAY, 27                             RANNOR, 58, 181
NLAG=, 32                                RETAIN, 167
NOFS, 27                                 RUN, 4, 27
NOINT, 84
NONE, 58                                 S
NOOBS, 4                                 S (spectral density), 178, 181
NOPRINT, 167                             SHAPE, 57
                                         SORT, 123
O                                        STATIONARITY, 76
OBS, 4                                   STEPJ (display style), 167
ORDER, 32                                SUM, 167
OUT, 123, 165                            SYMBOL, 5, 8, 22, 57, 131, 149, 152,
OUTCOV, 32                                         167
OUTEST, 11
OUTPUT, 8, 63, 116                       T
                                         T, 84
P                                        TC=template catalog, 27
P (periodogram), 123, 165, 178           TEMPLATE, 27
P 0 (periodogram variable), 167          TITLE, 4
PARAMETERS, 11                           TREPLAY, 27
PARTCORR, 64                             TUKEY, 181
PERIOD, 123
PHILLIPS, 76                             V
PI, 116                                  V3 (template), 74
PLOT, 6, 8, 82, 149                      V= display style, 6
PROC, 4                                  VAR, 4, 104, 123
     ARIMA, 32, 64, 84, 126              VREF=display style, 32, 74
     AUTOREG, 76, 84
     GPLOT, 5, 8, 11, 27, 32, 57, 58,    W
         63, 69, 74, 82, 84, 123, 126,   W=width, 6
         127, 152, 167, 178, 181         WEIGHTS, 178
     GREPLAY, 27, 74, 82                 WHERE, 11, 58
     MEANS, 167                          WHITE, 27
     NLIN, 11                            WHITETEST, 165
     PRINT, 4, 124
     REG, 116
     SPECTRA, 123, 127, 165, 178,
         181
Appendix A

GNU Free Documentation
License

                              Version 1.2, November 2002

              Copyright ©2000,2001,2002 Free Software Foundation, Inc.



               59 Temple Place, Suite 330, Boston, MA 02111-1307 USA



Everyone is permitted to copy and distribute verbatim copies of this license document,
                           but changing it is not allowed.



                                     Preamble


The purpose of this License is to make a manual, textbook, or other functional and useful
document ”free” in the sense of freedom: to assure everyone the effective freedom to copy
and redistribute it, with or without modifying it, either commercially or noncommercially.
Secondarily, this License preserves for the author and publisher a way to get credit for
their work, while not being considered responsible for modifications made by others.

This License is a kind of ”copyleft”, which means that derivative works of the document
must themselves be free in the same sense. It complements the GNU General Public
License, which is a copyleft license designed for free software.

                                           199
200                                                   GNU Free Documentation License

We have designed this License in order to use it for manuals for free software, because free
software needs free documentation: a free program should come with manuals providing
the same freedoms that the software does. But this License is not limited to software
manuals; it can be used for any textual work, regardless of subject matter or whether it
is published as a printed book. We recommend this License principally for works whose
purpose is instruction or reference.



      1. APPLICABILITY AND DEFINITIONS

This License applies to any manual or other work, in any medium, that contains a notice
placed by the copyright holder saying it can be distributed under the terms of this License.
Such a notice grants a world-wide, royalty-free license, unlimited in duration, to use that
work under the conditions stated herein. The ”Document”, below, refers to any such
manual or work. Any member of the public is a licensee, and is addressed as ”you”.
You accept the license if you copy, modify or distribute the work in a way requiring
permission under copyright law.

A ”Modified Version” of the Document means any work containing the Document
or a portion of it, either copied verbatim, or with modifications and/or translated into
another language.

A ”Secondary Section” is a named appendix or a front-matter section of the Document
that deals exclusively with the relationship of the publishers or authors of the Document
to the Document’s overall subject (or to related matters) and contains nothing that could
fall directly within that overall subject. (Thus, if the Document is in part a textbook of
mathematics, a Secondary Section may not explain any mathematics.) The relationship
could be a matter of historical connection with the subject or with related matters, or of
legal, commercial, philosophical, ethical or political position regarding them.

The ”Invariant Sections” are certain Secondary Sections whose titles are designated,
as being those of Invariant Sections, in the notice that says that the Document is released
under this License. If a section does not fit the above definition of Secondary then it is
not allowed to be designated as Invariant. The Document may contain zero Invariant
Sections. If the Document does not identify any Invariant Sections then there are none.

The ”Cover Texts” are certain short passages of text that are listed, as Front-Cover
Texts or Back-Cover Texts, in the notice that says that the Document is released under
this License. A Front-Cover Text may be at most 5 words, and a Back-Cover Text may
be at most 25 words.

A ”Transparent” copy of the Document means a machine-readable copy, represented in
a format whose specification is available to the general public, that is suitable for revising
the document straightforwardly with generic text editors or (for images composed of pix-
els) generic paint programs or (for drawings) some widely available drawing editor, and
that is suitable for input to text formatters or for automatic translation to a variety of
GNU Free Documentation License                                                          201

formats suitable for input to text formatters. A copy made in an otherwise Transparent
file format whose markup, or absence of markup, has been arranged to thwart or dis-
courage subsequent modification by readers is not Transparent. An image format is not
Transparent if used for any substantial amount of text. A copy that is not ”Transparent”
is called ”Opaque”.

Examples of suitable formats for Transparent copies include plain ASCII without markup,
Texinfo input format, LaTeX input format, SGML or XML using a publicly available
DTD, and standard-conforming simple HTML, PostScript or PDF designed for human
modification. Examples of transparent image formats include PNG, XCF and JPG.
Opaque formats include proprietary formats that can be read and edited only by propri-
etary word processors, SGML or XML for which the DTD and/or processing tools are
not generally available, and the machine-generated HTML, PostScript or PDF produced
by some word processors for output purposes only.

The ”Title Page” means, for a printed book, the title page itself, plus such following
pages as are needed to hold, legibly, the material this License requires to appear in the
title page. For works in formats which do not have any title page as such, ”Title Page”
means the text near the most prominent appearance of the work’s title, preceding the
beginning of the body of the text.

A section ”Entitled XYZ” means a named subunit of the Document whose title either
is precisely XYZ or contains XYZ in parentheses following text that translates XYZ in
another language. (Here XYZ stands for a specific section name mentioned below, such
as ”Acknowledgements”, ”Dedications”, ”Endorsements”, or ”History”.) To
”Preserve the Title” of such a section when you modify the Document means that it
remains a section ”Entitled XYZ” according to this definition.

The Document may include Warranty Disclaimers next to the notice which states that
this License applies to the Document. These Warranty Disclaimers are considered to be
included by reference in this License, but only as regards disclaiming warranties: any
other implication that these Warranty Disclaimers may have is void and has no effect on
the meaning of this License.


                    2. VERBATIM COPYING

You may copy and distribute the Document in any medium, either commercially or
noncommercially, provided that this License, the copyright notices, and the license notice
saying this License applies to the Document are reproduced in all copies, and that you
add no other conditions whatsoever to those of this License. You may not use technical
measures to obstruct or control the reading or further copying of the copies you make
or distribute. However, you may accept compensation in exchange for copies. If you
distribute a large enough number of copies you must also follow the conditions in section 3.

You may also lend copies, under the same conditions stated above, and you may publicly
display copies.
202                                                  GNU Free Documentation License

                 3. COPYING IN QUANTITY

If you publish printed copies (or copies in media that commonly have printed covers) of
the Document, numbering more than 100, and the Document’s license notice requires
Cover Texts, you must enclose the copies in covers that carry, clearly and legibly, all
these Cover Texts: Front-Cover Texts on the front cover, and Back-Cover Texts on the
back cover. Both covers must also clearly and legibly identify you as the publisher of
these copies. The front cover must present the full title with all words of the title equally
prominent and visible. You may add other material on the covers in addition. Copying
with changes limited to the covers, as long as they preserve the title of the Document
and satisfy these conditions, can be treated as verbatim copying in other respects.

If the required texts for either cover are too voluminous to fit legibly, you should put the
first ones listed (as many as fit reasonably) on the actual cover, and continue the rest
onto adjacent pages.

If you publish or distribute Opaque copies of the Document numbering more than 100,
you must either include a machine-readable Transparent copy along with each Opaque
copy, or state in or with each Opaque copy a computer-network location from which
the general network-using public has access to download using public-standard network
protocols a complete Transparent copy of the Document, free of added material. If you use
the latter option, you must take reasonably prudent steps, when you begin distribution
of Opaque copies in quantity, to ensure that this Transparent copy will remain thus
accessible at the stated location until at least one year after the last time you distribute
an Opaque copy (directly or through your agents or retailers) of that edition to the public.

It is requested, but not required, that you contact the authors of the Document well
before redistributing any large number of copies, to give them a chance to provide you
with an updated version of the Document.


                          4. MODIFICATIONS

You may copy and distribute a Modified Version of the Document under the conditions
of sections 2 and 3 above, provided that you release the Modified Version under precisely
this License, with the Modified Version filling the role of the Document, thus licensing
distribution and modification of the Modified Version to whoever possesses a copy of it.
In addition, you must do these things in the Modified Version:


  A. Use in the Title Page (and on the covers, if any) a title distinct from that of the
     Document, and from those of previous versions (which should, if there were any,
     be listed in the History section of the Document). You may use the same title as
     a previous version if the original publisher of that version gives permission.
  B. List on the Title Page, as authors, one or more persons or entities responsible for
     authorship of the modifications in the Modified Version, together with at least five
GNU Free Documentation License                                                           203

      of the principal authors of the Document (all of its principal authors, if it has fewer
      than five), unless they release you from this requirement.
  C. State on the Title page the name of the publisher of the Modified Version, as the
     publisher.
  D. Preserve all the copyright notices of the Document.
  E. Add an appropriate copyright notice for your modifications adjacent to the other
     copyright notices.
  F. Include, immediately after the copyright notices, a license notice giving the public
     permission to use the Modified Version under the terms of this License, in the form
     shown in the Addendum below.
  G. Preserve in that license notice the full lists of Invariant Sections and required Cover
     Texts given in the Document’s license notice.
  H. Include an unaltered copy of this License.
   I. Preserve the section Entitled ”History”, Preserve its Title, and add to it an item
      stating at least the title, year, new authors, and publisher of the Modified Version as
      given on the Title Page. If there is no section Entitled ”History” in the Document,
      create one stating the title, year, authors, and publisher of the Document as given
      on its Title Page, then add an item describing the Modified Version as stated in
      the previous sentence.
   J. Preserve the network location, if any, given in the Document for public access to
      a Transparent copy of the Document, and likewise the network locations given in
      the Document for previous versions it was based on. These may be placed in the
      ”History” section. You may omit a network location for a work that was published
      at least four years before the Document itself, or if the original publisher of the
      version it refers to gives permission.
  K. For any section Entitled ”Acknowledgements” or ”Dedications”, Preserve the Title
     of the section, and preserve in the section all the substance and tone of each of the
     contributor acknowledgements and/or dedications given therein.
   L. Preserve all the Invariant Sections of the Document, unaltered in their text and
      in their titles. Section numbers or the equivalent are not considered part of the
      section titles.
  M. Delete any section Entitled ”Endorsements”. Such a section may not be included
     in the Modified Version.
  N. Do not retitle any existing section to be Entitled ”Endorsements” or to conflict in
     title with any Invariant Section.
  O. Preserve any Warranty Disclaimers.


If the Modified Version includes new front-matter sections or appendices that qualify as
Secondary Sections and contain no material copied from the Document, you may at your
option designate some or all of these sections as invariant. To do this, add their titles to
the list of Invariant Sections in the Modified Version’s license notice. These titles must
be distinct from any other section titles.
204                                                  GNU Free Documentation License

You may add a section Entitled ”Endorsements”, provided it contains nothing but en-
dorsements of your Modified Version by various parties–for example, statements of peer
review or that the text has been approved by an organization as the authoritative defin-
ition of a standard.

You may add a passage of up to five words as a Front-Cover Text, and a passage of up
to 25 words as a Back-Cover Text, to the end of the list of Cover Texts in the Modified
Version. Only one passage of Front-Cover Text and one of Back-Cover Text may be
added by (or through arrangements made by) any one entity. If the Document already
includes a cover text for the same cover, previously added by you or by arrangement
made by the same entity you are acting on behalf of, you may not add another; but you
may replace the old one, on explicit permission from the previous publisher that added
the old one.

The author(s) and publisher(s) of the Document do not by this License give permission
to use their names for publicity for or to assert or imply endorsement of any Modified
Version.


               5. COMBINING DOCUMENTS

You may combine the Document with other documents released under this License, under
the terms defined in section 4 above for modified versions, provided that you include in
the combination all of the Invariant Sections of all of the original documents, unmodified,
and list them all as Invariant Sections of your combined work in its license notice, and
that you preserve all their Warranty Disclaimers.

The combined work need only contain one copy of this License, and multiple identical
Invariant Sections may be replaced with a single copy. If there are multiple Invariant
Sections with the same name but different contents, make the title of each such section
unique by adding at the end of it, in parentheses, the name of the original author or
publisher of that section if known, or else a unique number. Make the same adjustment
to the section titles in the list of Invariant Sections in the license notice of the combined
work.

In the combination, you must combine any sections Entitled ”History” in the various
original documents, forming one section Entitled ”History”; likewise combine any sections
Entitled ”Acknowledgements”, and any sections Entitled ”Dedications”. You must delete
all sections Entitled ”Endorsements”.


          6. COLLECTIONS OF DOCUMENTS

You may make a collection consisting of the Document and other documents released
under this License, and replace the individual copies of this License in the various docu-
ments with a single copy that is included in the collection, provided that you follow the
rules of this License for verbatim copying of each of the documents in all other respects.
GNU Free Documentation License                                                         205

You may extract a single document from such a collection, and distribute it individually
under this License, provided you insert a copy of this License into the extracted document,
and follow this License in all other respects regarding verbatim copying of that document.


   7. AGGREGATION WITH INDEPENDENT
                WORKS

A compilation of the Document or its derivatives with other separate and independent
documents or works, in or on a volume of a storage or distribution medium, is called an
”aggregate” if the copyright resulting from the compilation is not used to limit the legal
rights of the compilation’s users beyond what the individual works permit. When the
Document is included in an aggregate, this License does not apply to the other works in
the aggregate which are not themselves derivative works of the Document.

If the Cover Text requirement of section 3 is applicable to these copies of the Document,
then if the Document is less than one half of the entire aggregate, the Document’s Cover
Texts may be placed on covers that bracket the Document within the aggregate, or the
electronic equivalent of covers if the Document is in electronic form. Otherwise they
must appear on printed covers that bracket the whole aggregate.


                           8. TRANSLATION

Translation is considered a kind of modification, so you may distribute translations of the
Document under the terms of section 4. Replacing Invariant Sections with translations
requires special permission from their copyright holders, but you may include translations
of some or all Invariant Sections in addition to the original versions of these Invariant
Sections. You may include a translation of this License, and all the license notices in the
Document, and any Warranty Disclaimers, provided that you also include the original
English version of this License and the original versions of those notices and disclaimers.
In case of a disagreement between the translation and the original version of this License
or a notice or disclaimer, the original version will prevail.

If a section in the Document is Entitled ”Acknowledgements”, ”Dedications”, or ”His-
tory”, the requirement (section 4) to Preserve its Title (section 1) will typically require
changing the actual title.


                           9. TERMINATION

You may not copy, modify, sublicense, or distribute the Document except as expressly
provided for under this License. Any other attempt to copy, modify, sublicense or dis-
tribute the Document is void, and will automatically terminate your rights under this
License. However, parties who have received copies, or rights, from you under this License
will not have their licenses terminated so long as such parties remain in full compliance.
206                                                 GNU Free Documentation License

 10. FUTURE REVISIONS OF THIS LICENSE

The Free Software Foundation may publish new, revised versions of the GNU Free Doc-
umentation License from time to time. Such new versions will be similar in spirit to
the present version, but may differ in detail to address new problems or concerns. See
http://www.gnu.org/copyleft/.

Each version of the License is given a distinguishing version number. If the Document
specifies that a particular numbered version of this License ”or any later version” applies
to it, you have the option of following the terms and conditions either of that specified
version or of any later version that has been published (not as a draft) by the Free Soft-
ware Foundation. If the Document does not specify a version number of this License, you
may choose any version ever published (not as a draft) by the Free Software Foundation.


 ADDENDUM: How to use this License for your
             documents

To use this License in a document you have written, include a copy of the License in the
document and put the following copyright and license notices just after the title page:



      Copyright ©YEAR YOUR NAME. Permission is granted to copy, distribute
      and/or modify this document under the terms of the GNU Free Documenta-
      tion License, Version 1.2 or any later version published by the Free Software
      Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-
      Cover Texts. A copy of the license is included in the section entitled ”GNU
      Free Documentation License”.



If you have Invariant Sections, Front-Cover Texts and Back-Cover Texts, replace the
”with...Texts.” line with this:



      with the Invariant Sections being LIST THEIR TITLES, with the Front-
      Cover Texts being LIST, and with the Back-Cover Texts being LIST.



If you have Invariant Sections without Cover Texts, or some other combination of the
three, merge those two alternatives to suit the situation.

If your document contains nontrivial examples of program code, we recommend releasing
these examples in parallel under your choice of free software license, such as the GNU
General Public License, to permit their use in free software.



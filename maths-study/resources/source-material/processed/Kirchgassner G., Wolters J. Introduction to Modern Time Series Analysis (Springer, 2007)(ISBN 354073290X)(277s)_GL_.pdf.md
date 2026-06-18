---
normalized_id: shared-pdf-reference-kirchgassner-g-wolters-j-introduction-to-modern-time-series-analysis-springer-2007-isbn-354073290x-277s-gl
exam_code: SHARED
material_scope: kirchgassner g., wolters j. introduction to modern time series analysis (springer, 2007)(isbn 354073290x)(277s)_gl_.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Kirchgassner G., Wolters J. Introduction to Modern Time Series Analysis (Springer, 2007)(ISBN 354073290X)(277s)_GL_.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-kirchgassner-g-wolters-j-introduction-to-modern-time-series-analysis-springer-2007-isbn-354073290x-277s-gl

Introduction to Modern Time
Series Analysis
Gebhard Kirchgässner · Jürgen Wolters


Introduction
to Modern Time
Series Analysis

With 43 Figures and 17 Tables




123
Professor Dr. Gebhard Kirchgässner
University of St. Gallen
SIAW-HSG
Bodanstrasse 8
CH-9000 St. Gallen
Switzerland
Gebhard.Kirchgaessner@unisg.ch

Professor Dr. Jürgen Wolters
Freie Universität Berlin
Institute for Statistics and Econometrics
Boltzmannstraße 20
14195 Berlin
Germany
wolters@wiwiss.fu-berlin.de




Library of Congress Control Number: 2007932230


ISBN 978-3-540-73290-7 Springer Berlin Heidelberg New York

This work is subject to copyright. All rights are reserved, whether the whole or part of the material
is concerned, specifically the rights of translation, reprinting, reuse of illustrations, recitation,
broadcasting, reproduction on microfilm or in any other way, and storage in data banks. Duplication
of this publication or parts thereof is permitted only under the provisions of the German Copyright
Law of September 9, 1965, in its current version, and permission for use must always be obtained
from Springer. Violations are liable to prosecution under the German Copyright Law.
Springer is a part of Springer Science+Business Media
springer.com
© Springer-Verlag Berlin Heidelberg 2007
The use of general descriptive names, registered names, trademarks, etc. in this publication does
not imply, even in the absence of a specific statement, that such names are exempt from the relevant
protective laws and regulations and therefore free for general use.
Production: LE-TEX Jelonek, Schmidt & Vöckler GbR, Leipzig
Cover-design: WMX Design GmbH, Heidelberg
SPIN 12071654       42/3180YL - 5 4 3 2 1 0     Printed on acid-free paper
Preface




Econometrics has been developing rapidly over the past four decades. This
is not only true for microeconometrics which more or less originated
during this period, but also for time series econometrics where the
cointegration revolution influenced applied work in a substantial manner.
Economists have been using time series for a very long time. Since the
1930s when econometrics became an own subject, researchers have mainly
worked with time series. However, economists as well as econometricians
did not really care about the statistical properties of time series. This
attitude started to change in 1970 with the publication of the textbook Time
Series Analysis, Forecasting and Control by GEORGE E.P. BOX and
GWILYM M. JENKINS. The main impact, however, stems from the work of
CLIVE W.J. GRANGER starting in the 1960s. In 2003 together with ROBERT
W. ENGLE, he received the Nobel Prize in Economics for his work.
   This textbook provides an introduction to these recently developed
methods in time series econometrics. Thus, it is assumed that the reader is
familiar with a basic knowledge of calculus and matrix algebra as well as
of econometrics and statistics at the level of introductory textbooks. The
book aims at advanced Bachelor and especially Master students in
economics and applied econometrics but also at the general audience of
economists using empirical methods to analyse time series. For these
readers, the book is intended to bridge the gap between methods and
applications by also presenting a lot of empirical examples.
   A book discussing an area in rapid development is inevitably incomplete
and reflects the interests and experiences of the authors. We do not
include, for example, the modelling of time-dependent parameters with the
Kalman filter as well as Marcov Switching Models, panel unit roots and
panel cointegration. Moreover, frequency domain methods are not treated
either.
   Earlier versions of the different chapters were used in various lectures
on time series analysis and econometrics at the Freie Universität Berlin,
Germany, and the University of St. Gallen, Switzerland. Thus, the book
has developed over a number of years. During this time span, we also
learned a lot from our students and we do hope that this has improved the
presentation in the book.
VI   Preface

   We would like to thank all those who have helped us in producing this
book and who have critically read parts of it or even the whole manuscript.
It is our pleasure to mention, in particular, MICHAEL-DOMINIK BAUER,
ANNA CISLAK, LARS P. FELD, SONJA LANGE, THOMAS MAAG, ULRICH K.
MÜLLER, GABRIELA SCHMID, THORSTEN UEHLEIN, MARCEL R. SAVIOZ,
and ENZO WEBER. They have all made valuable contributions towards
improving the presentation but, of course, are not responsible for any
remaining deficiencies. Our special thanks go to MANUELA KLOSS-
MÜLLER who edited the text in English. Moreover, we are indebted to Dr.
WERNER A. MÜLLER and MANUELA EBERT from Springer for their kind
collaboration.



St Gallen/Berlin, April 2007




GEBHARD KIRCHGÄSSNER                            JÜRGEN WOLTERS
Contents




    Preface .................................................................................................. V

1 Introduction and Basics........................................................................ 1
  1.1 The Historical Development of Time Series Analysis ................... 2
  1.2 Graphical Representations of Economic Time Series .................... 5
  1.3 Ergodicity and Stationarity ........................................................... 12
  1.4 The Wold Decomposition............................................................. 21
  References ............................................................................................ 22

2 Univariate Stationary Processes ........................................................ 27
  2.1 Autoregressive Processes.............................................................. 27
     2.1.1 First Order Autoregressive Processes.................................... 27
     2.1.2 Second Order Autoregressive Processes ............................... 40
     2.1.3 Higher Order Autoregressive Processes ................................ 49
     2.1.4 The Partial Autocorrelation Function .................................... 52
     2.1.5 Estimating Autoregressive Processes .................................... 56
  2.2 Moving Average Processes........................................................... 57
     2.2.1 First Order Moving Average Processes................................. 58
     2.2.2 Higher Order Moving Average Processes ............................. 64
  2.3 Mixed Processes ........................................................................... 67
     2.3.1 ARMA(1,1) Processes ........................................................... 67
     2.3.2 ARMA(p,q) Processes ........................................................... 73
  2.4 Forecasting.................................................................................... 75
     2.4.1 Forecasts with Minimal Mean Squared Errors ...................... 75
     2.4.2 Forecasts of ARMA(p,q) Processes....................................... 80
     2.4.3 Evaluation of Forecasts ......................................................... 84
  2.5 The Relation between Econometric Models and
       ARMA Processes.......................................................................... 87
  References ............................................................................................ 88

3 Granger Causality............................................................................... 93
  3.1 The Definition of Granger Causality ............................................ 95
  3.2 Characterisations of Causal Relations in Bivariate Models.......... 97
VIII      Contents

       3.2.1 Characterisations of Causal Relations using the
             Autoregressive and Moving Average Representations ......... 97
       3.2.2 Characterising Causal Relations by Using the Residuals
             of the Univariate Processes.................................................... 99
    3.3 Causality Tests............................................................................ 102
       3.3.1 The Direct Granger Procedure............................................. 102
       3.3.2 The Haugh-Pierce Test ........................................................ 106
       3.3.3 The Hsiao Procedure ........................................................... 110
    3.4 Applying Causality Tests in a Multivariate Setting.................... 114
       3.4.1 The Direct Granger Procedure with More Than Two
             Variables ............................................................................. 114
       3.4.2 Interpreting the Results of Bivariate Tests in Systems
             With More Than Two Variables ......................................... 117
    3.5 Concluding Remarks .................................................................. 118
    References .......................................................................................... 120

4 Vector Autoregressive Processes ..................................................... 125
  4.1 Representation of the System ..................................................... 127
  4.2 Granger Causality ....................................................................... 136
  4.3 Impulse Response Analysis ........................................................ 138
  4.4 Variance Decomposition ............................................................ 144
  4.5 Concluding Remarks .................................................................. 149
  References .......................................................................................... 150

5 Nonstationary Processes................................................................... 153
  5.1 Forms of Nonstationarity............................................................ 153
  5.2 Trend Elimination ...................................................................... 159
  5.3 Unit Root Tests........................................................................... 163
     5.3.1 Dickey-Fuller Tests ............................................................. 165
     5.3.2 The Phillips-Perron Test...................................................... 171
     5.3.3 Unit Root Tests and Structural Breaks ................................ 176
     5.3.4 A Test with the Null Hypothesis of Stationarity ................. 178
  5.4 Decomposition of Time Series ................................................... 180
  5.5 Further Developments ................................................................ 187
     5.5.1 Fractional Integration .......................................................... 187
     5.5.2 Seasonal Integration ............................................................ 189
  5.6 Deterministic versus Stochastic Trends in Economic
       Time Series ................................................................................. 191
  References .......................................................................................... 194

6 Cointegration..................................................................................... 199
  6.1 Definition and Properties of Cointegrated Processes ................. 203
                                                                                        Contents         IX

    6.2 Cointegration in Single Equation Models: Representation,
         Estimation and Testing ............................................................... 205
       6.2.1 Bivariate Cointegration ....................................................... 205
       6.2.2 Cointegration with More Than Two Variables.................... 208
       6.2.3 Testing Cointegration in Static Models ............................... 209
       6.2.4 Testing Cointegration in Dynamic Models.......................... 213
    6.3 Cointegration in Vector Autoregressive Models ........................ 218
       6.3.1 The Vector Error Correction Representation....................... 219
       6.3.2 The Johansen Approach....................................................... 222
       6.3.3 Analysis of Vector Error Correction Models....................... 229
    6.4 Cointegration and Economic Theory.......................................... 234
    References .......................................................................................... 235

7 Autoregressive Conditional Heteroskedasticity ............................. 241
  7.1 ARCH Models ............................................................................ 245
     7.1.1 Definition and Representation............................................. 245
     7.1.2 Unconditional Moments ...................................................... 248
     7.1.3 Temporal Aggregation......................................................... 249
  7.2 Generalised ARCH Models ........................................................ 252
     7.2.1 GARCH Models .................................................................. 252
     7.2.2 The GARCH(1,1) process ................................................... 254
     7.2.3 Nonlinear Extensions........................................................... 257
  7.3 Estimation and Testing ............................................................... 259
  7.4 ARCH/GARCH Models as Instruments of Financial
       Market Analysis.......................................................................... 261
  References .......................................................................................... 263

Index of Names and Authors ................................................................ 267

Subject Index.......................................................................................... 271
1 Introduction and Basics




A time series is defined as a set of quantitative observations arranged in
chronological order. We generally assume that time is a discrete variable.
Time series have always been used in the field of econometrics. Already at
the outset, JAN TINBERGEN (1939) constructed the first econometric model
for the United States and thus started the scientific research programme of
empirical econometrics. At that time, however, it was hardly taken into ac-
count that chronologically ordered observations might depend on each
other. The prevailing assumption was that, according to the classical linear
regression model, the residuals of the estimated equations are stochasti-
cally independent from each other. For this reason, procedures were ap-
plied which are also suited for cross section or experimental data without
any time dependence
   DONALD COCHRANE and GUY H. ORCUTT (1949) were the first to no-
tice that this practice might cause problems. They showed that if residuals
of an estimated regression equation are positively autocorrelated, the vari-
ances of the regression parameters are underestimated and, therefore, the
values of the F and t statistics are overestimated. This problem could be
solved at least for the frequent case of first order autocorrelation by trans-
forming the data adequately. Almost at the same time, JAMES DURBIN and
GEOFFREY S. WATSON (1950/51) developed a test procedure which made
it possible to identify first order autocorrelation. The problem seemed to be
solved (more or less), and, until the 1970’s, the issue was hardly ever
raised in the field of empirical econometrics.
   This did not change until GEORGE E.P. BOX and GWILYM M. JENKINS
(1970) published a textbook on time series analysis that received consider-
able attention. First of all, they introduced univariate models for time se-
ries which simply made systematic use of the information included in the
observed values of time series. This offered an easy way to predict the fu-
ture development of this variable. Today, the procedure is known as Box-
Jenkins Analysis and is widely applied. It became even more popular when
CLIVE W.J. GRANGER and PAUL NEWBOLD (1975) showed that simple
forecasts which only considered information given by one single time se-
ries often outperformed the forecasts based on large econometric models
which sometimes consisted of many hundreds of equations.
2   1 Introduction and Basics

   In fact, at that time, many procedures applied in order to analyse rela-
tions between economic variables were not really new. Partly, they had al-
ready been used in other sciences, especially for quite a while in the ex-
perimental natural sciences. Some parts of their theoretical foundations
had also been known for a considerable time. From then on, they have
been used in economics, too, mainly because of two reasons. Up to then,
contrary to the natural sciences there had not been enough economic ob-
servations available to even consider the application of these methods.
Moreover, at the beginning of the 1970’s, electronic computers were ap-
plied which were quite powerful compared to earlier times and which
could manage numerical problems comparatively easy. Since then, the de-
velopment of new statistical procedures and larger, more powerful com-
puters as well as the availability of larger data sets has advanced the appli-
cation of time series methods which help to deal with economic issues.
   Before we discuss modern (parametric) time series procedures in this
chapter, we give a brief historical overview (Section 1.1). In Section 1.2,
we demonstrate how different transformations can show the properties of
time series. In this section, we also show how the lag operator can be used
as a simple but powerful instrument for modelling economic time series.
   Certain conditions have to be fulfilled in order to make statistical infer-
ence based on time series data. It is essential that some properties of the
underlying data generating process, in particular variance and covariances
between elements of these series, are not time dependent, i.e. that the ob-
served time series are stationary. Therefore, the exact definition of station-
arity is given in Section 1.3. which also introduces the autocorrelation
function as an important statistical instrument for describing (time) de-
pendencies between the elements of a time series. Finally, in Section 1.4,
we introduce Wold’s Decomposition, a general representation of a station-
ary time series. Thus, this chapter mainly covers some notions and tools
necessary to understand the later chapters of this textbook.


1.1 The Historical Development of Time Series Analysis

Time series have already played an important role in the early natural sci-
ences. Babylonian astronomy used time series of the relative positions of
stars and planets to predict astronomical events. Observations of the plan-
ets’ movements formed the basis of the laws JOHANNES KEPLER discov-
ered.
   The analysis of time series helps to detect regularities in the observa-
tions of a variable and derive ‘laws’ from them, and/or exploit all informa-
                  1.1 The Historical Development of Time Series Analysis    3

tion included in this variable to better predict future developments. The ba-
sic methodological idea behind these procedures, which were also valid for
the Babylonians, is that it is possible to decompose time series into a finite
number of independent but not directly observable components that de-
velop regularly and can thus be calculated in advance. For this procedure,
it is necessary that there are different independent factors which have an
impact on the variable.
   In the middle of the 19th century, this methodological approach to as-
tronomy was taken up by the economists CHARLES BABBAGE and
WILLIAM STANLEY JEVONS. The decomposition into unobserved compo-
nents that depend on different causal factors, as it is usually employed in
the classical time series analysis, was developed by WARREN M. PERSONS
(1919). He distinguished four different components:
x a long-run development, the trend,
x a cyclical component with periods of more than one year, the business
  cycle,
x a component that contains the ups and downs within a year, the seasonal
  cycle, and
x a component that contains all movements which neither belong to the
  trend nor to the business cycle nor to the seasonal component, the resid-
  ual.
Under the assumption that the different non-observable factors are inde-
pendent, their additive overlaying generates the time series which we can,
however, only observe as a whole. In order to get information about the
data generating process, we have to make assumptions about its unob-
served components. The classical time series analysis assumes that the sys-
tematic components, i.e. trend, business cycle and seasonal cycle, are not
influenced by stochastic disturbances and can thus be represented by de-
terministic functions of time. Stochastic impact is restricted to the residu-
als, which, on the other hand, do not contain any systematic movements. It
is therefore modelled as a series of independent or uncorrelated random
variables with expectation zero and constant variance, i.e. as a pure ran-
dom process.
   However, since the 1970’s, a totally different approach has increasingly
been applied to the statistical analysis of time series. The purely descrip-
tive procedures of classical time series analysis were abandoned and, in-
stead, results and methods of probability theory and mathematical statistics
have been employed. This has led to a different assessment of the role of
stochastic movements with respect to time series. Whereas the classical
4   1 Introduction and Basics

approach regards these movements as residuals without any significance
for the structure of time series, the modern approach assumes that there are
stochastic impacts on all components of a time series. Thus, the ‘law of
movement’ of the whole time series is regarded as a stochastic process,
and the time series to be analysed is just one realisation of the data gener-
ating process. Now the focus is on stochastic terms with partly rather com-
plex dependence structures.
   The first steps in this direction were taken by the Russian statistician
EVGENIJ EVGENIEVICH SLUTZKY and the British statistician GEORGE
UDNY YULE at the beginning of the last century. Both of them showed that
time series with cyclical properties similar to economic (and other) time
series can be generated by constructing weighted or unweighted sums or
differences of pure random processes. E.E. SLUTZKY and G.U. YULE de-
veloped moving average and autoregressive processes as models to repre-
sent time series. HERMAN WOLD (1938) systematised and generalised
these approaches in his doctoral thesis. Their widespread practical usage is
due to GEORGE E.P BOX and GWILYM M. JENKINS (1970), who developed
methods to implement these models empirically. They had abandoned the
idea of different components and assumed that there was a common sto-
chastic model for the whole generation process of time series. Firstly, this
method identifies a specific model on the basis of certain statistical figures.
Secondly, the parameters of this model are estimated. Thirdly, the specifi-
cation of the model is checked by statistical tests. If specification errors
become obvious, the specification has to be changed and the parameters
have to be re-estimated. This procedure is re-iterated until it generates a
model that satisfies the given criteria. This model can finally be used for
forecasts.
   Recently, the idea of decomposing a time series has been taken up
again, particularly for the modelling of seasonal variations. However, con-
trary to the classical approach, it is now assumed that all components of a
time series can be represented by simple stochastic models. The procedure
for the seasonal adjustment of time series used by EUROSTAT is, for ex-
ample, based on such an approach.
   Moreover, since the 1980’s the possible non-stationarity of time series
has increasingly been taken into consideration. Non-stationarity might not
only be caused by deterministic but also by stochastic trends and, further-
more, the non-stationarity of time series is no longer simply eliminated
through the application of filters in order to continue within the framework
of stationary models. Non-stationarity is rather explicitly taken into ac-
count when constructing models, as long as this is possible and seems to
make sense. Accordingly, after this introduction of the basic principles, we
                   1.2 Graphical Representations of Economic Time Series     5

will first deal with models of stationary time series and then turn to the
modelling of non-stationary time series.


1.2 Graphical Representations of Economic Time Series

When investigating (economic) time series, it is generally useful to start
with graphical representations to detect those properties of the series which
can be seen by simply looking at the plot of a time series. In this context, it
is important to consider different transformations of the time series to be
analysed, as, for example, its levels, its changes and its relative changes.
      bn Euro
       600


       500


       400


       300


       200


       100                                                            year
         1960         1970        1980         1990        2000


        Figure 1.1: Real Gross Domestic Product of the Federal Republic
                    of Germany, 1960 – 2004

Figure 1.1 shows the real Gross Domestic Product (GDP) of the Federal
Republic of Germany from the first quarter of 1960 to the fourth quarter of
2004, in prices of 1995. The data stem from the National Accounts of the
Federal Republic of Germany issued by the German Institute of Economic
Research (DIW) in Berlin. This time series increases in the long run, i.e. it
has a positive trend. On the other hand, it shows well-pronounced short-
run movements which take place within one year. These are seasonal
variations. A remarkable shift in the level of the series is due to the Ger-
6   1 Introduction and Basics

man Unification: from the third quarter of 1990 on, the series is based on
data for unified Germany while the earlier data are based on the former
West Germany only.
        bn Euro
          30

          20

          10

           0

         -10

         -20

         -30

         -40                                                         year
                  1965          1970     1975      1980     1985

        Figure 1.2: Changes of the Real Gross Domestic Product (ǻGDP)
                    of the Federal Republic of Germany, 1960 – 1989

When changes from quarter to quarter are analysed, i.e. 'GDPt = GDPt –
GDPt-1, where t is the time index, Figure 1.2 shows that the trend is elimi-
nated by this transformation, while the seasonal variations remain. (Be-
cause of the structural break due to the German Unification, we only con-
sider the West German data from 1960 to 1989.) The resulting values
fluctuate around zero with almost constant amplitude. Moreover, the sea-
sonal component shows a break: up to 1974, the annual minimum is almost
always located in the first quarter, from 1975 onwards in the fourth quar-
ter.
   If the relative changes from quarter to quarter are to be observed, we
take the quarterly growth rates. In percentage points, these are usually cal-
culated as
                                       GDPt  GDPt 1
(1.1)                    qgrt                          100 .
                                         GDPt 1
                    1.2 Graphical Representations of Economic Time Series   7

However, the problem with this representation is that there is an asymme-
try with respect to positive and negative changes: A rise from 100 to 125 is
seen as an increase of 25 percent, whereas a decline from 125 to 100 is
seen as a decrease of ‘only’ 20 percent. This can lead to considerable prob-
lems if average growth rates are calculated for time series with strongly
pronounced fluctuations. In an extreme case this might lead to the calcula-
tion of positive average growth rates in spite of a negative trend. In order
to avoid this, ‘continuous’ growth rates are usually employed today, which
are calculated (again in percentage points) as
(1.1')              qgrt = (ln(GDPt) – ln(GDPt-1)) · 100.
Here, ln() denotes the natural logarithm. In the following, we will always
use this definition. As the approximation ln(1 + x) | x is valid for small
values of x, the differences between (1.1) and (1.1') can generally be ne-
glected for small growth rates.
         percent
          15

          10

           5

           0

          -5

         -10

         -15

         -20                                                         year
                   1965    1970     1975     1980     1985


     Figure 1.3: Growth rates of the Real Gross Domestic Product (qgr)
                 of the Federal Republic of Germany, 1960 – 1989

Figure 1.3 shows that the growth rates, too, reflect a seasonal pattern. In
1975, this pattern is clearly disrupted. However, contrary to Figure 1.2, the
amplitude and thus the relative importance of the seasonal variation has
obviously been declining over time.
8      1 Introduction and Basics


       bn Euro
          20

           15

           10

            5

            0

           -5

          -10                                                          year
                    1965     1970     1975     1980     1985

    Figure 1.4: Annual changes of the Real Gross Domestic Product (ǻ4GDP) of
                the Federal Republic of Germany, 1960 – 1989

If seasonal variations are to be eliminated, changes should be related to the
same quarter of the preceding year and not to the preceding quarter. With
'4GDPt = GDPt – GDPt-4, Figure 1.4 shows the annual changes in the Ger-
man Gross Domestic Product as compared to the same quarter of the pre-
vious year. This series does no longer show any seasonal variations. These
changes are mostly positive; they are only negative during recessions. This
is particularly true for 1967, when Germany faced its first ‘real’ recession
after the Second World War, as well as for the recessions in 1975 and
1981/82 which followed the two oil price shocks.
   The annual growth rates, i.e. the corresponding relative annual changes
(in percent), are, however, more revealing. They are presented in Figure
1.5 and can be calculated as
                    agrt = (ln(GDPt) – ln(GDPt-4)) · 100.
The sixties and seventies are characterised by highly fluctuating growth
rates between -3.5 and just under 10 percent. In the seventies, the big re-
cession of 1975 can clearly be recognised, as well as the recession in the
early eighties. Subsequently, real growth rates were positive, but at a lower
level than before, between zero and just under five percent.
                     1.2 Graphical Representations of Economic Time Series     9


      percent
       10

         8

         6

         4

         2

         0

        -2

        -4                                                              year
                1965        1970     1975      1980     1985


 Figure 1.5: Annual growth rates of Real Gross Domestic Product (agr) of the
             Federal Republic of Germany, 1960 – 1989

A further possibility to eliminate the seasonal variations without eliminat-
ing the trend is given by the following transformation:
                           1
             GDPSt           (GDPt  GDPt 1  GDPt  2  GDPt 3 ) .
                           4
Four consecutive values of the time series are added and, in order to avoid
a shift in the level, divided by 4. Thus we get an (unweighted) moving av-
erage of order four, i.e. with four elements. Figure 1.6 shows the series
GDP and GDPS for the period from 1961 to 2004. The latter indicates the
long-term development, the so-called smooth component of the Gross
Domestic Product around which the actual values fluctuate. The smooth
component clearly indicates four recessions: in the late 1960’s, the mid
1970’s, the early 1980’s and the last one after 1992. It also shows the
structural break caused by German Unification. It is also obvious that this
change in level is partly smoothed and thus ‘averaged away’. This example
clearly shows that different ways of transforming one and the same time
series can reveal the different kinds of information contained in it.
10      1 Introduction and Basics


        bn Euro
          600


          500


          400


          300


          200


          100                                                           year
                        1970         1980         1990           2000

 Figure 1.6: ‚Smooth Component‘ and actual values of the Real Gross Domestic
             Product of the Federal Republic of Germany, 1961 – 2004

We introduce the lag operator L to show the relation between the differ-
ences and the moving average. Let x be a time series. If we apply the lag
operator on this series, all values are delayed by one period, i.e.
(1.2)                               Lxt = xt-1.
If we apply the lag operator to xt-1, we get xt-2 because of relation (1.2), and
we can indicate
                        Lxt-1 = L(Lxt) = L2xt = xt-2 .
By generalising we get
(1.3)                Lkxt = xt-k , k = ..., -1, 0, 1, 2, ... .
For k = 0 we get the identity L0xt = xt. Usually, instead of L0 we just write
‘1’. For k > 0 the series is shifted k periods backwards, and for k < 0 _k_ pe-
riods forward. For example: L-3xt = xt+3. Furthermore, the usual rules for
powers apply. Thus, we can write the following:
                    Lmxt-n = Lm(Lnxt) = Lm+nxt = xt-(m+n) .
The following notation results from using the lag operator for the first dif-
ferences:
                  1.2 Graphical Representations of Economic Time Series      11


(1.4)                    'xt = xt – xt-1 = (l – L)xt .
For fourth differences it holds that
(1.5)                   '4xt = xt – xt-4 = (l – L4)xt ,
while growth rates as compared to the same quarter of the preceding year
can be written as
(1.6)           '4ln(xt) = ln(xt) – ln(xt-4) = (l – L4)ln(xt) .
Finally, the unweighted moving average of order four can be written as
                 1                             1
(1.7)   xst =      (xt + xt-1 + xt-2 + xt-3) =   (1 + L + L2 + L3)xt .
                 4                             4
Quite generally, a lag polynomial of order p can be represented as
                 Dp(L)xt = (1 – D1L – D2L2 – ... – DpLp)xt
                          = xt – D1xt-1 – D2xt-2 – ... – Dpxt-p.
As far as this is possible without any misunderstandings, we usually delete
the suffix p that indicates the order of the lag polynomial.
   Trivially, there can be no delay if we apply the lag operator on a con-
stant į, i.e. it holds that
                     Į(L) į = (1 – D1 – D2 – ... – Dp) į.
Thus, the value of the lag polynomial is the sum of all its coefficients in
this case. We get the same result if we substitute L by L0 = 1:
                                            p
(1.8)                        Į(1) = 1 – ¦ Di .
                                           i 1

Relations (1.4) to (1.7) show the great advantage of the lag operator: trans-
formations can be represented independently from the special time series,
simply by a polynomial in the lag operator. Moreover, the same operations
as with common polynomials (in real or complex variables) can be per-
formed with lag polynomials, especially multiplication and division. For
the multiplication the commutative law holds, i.e.
                           D(L)E(L) = E(L)D(L).
Such polynomials of the lag operator are also called ‘linear filters’. If we
multiply the first difference filter (1.4) with the moving average of fourth
order (1.7) multiplied by four, we get the filter of fourth difference (1.5) be-
cause of
12   1 Introduction and Basics

                      (1 – L)(1 + L + L2 + L3) = (l – L4).
This reveals that, as the long-term component is eliminated by the first dif-
ference filter and the seasonal component by the moving average, both
components are eliminated from a time series by the product of those two
filters, the filter of fourth differences.


1.3 Ergodicity and Stationarity

Formal models for time series are developed on the basis of probability
theory. Let the T-dimensional vector of random variables x1, x2, ..., xT be
given with the corresponding multivariate distribution. This can also be in-
                                                     T
terpreted as a series of random variables ^x t `t 1 , as stochastic process or
as data generating process (DGP), Let us now consider a sample of this
process of length T. Consequently, the real numbers ^x1(1) , x (1)
                                                               2 ,! , x T ` are
                                                                        (1)


just one possible result of the underlying data generating process. Even if
                                                               f
we were able to observe this process infinitely long, ^x (1)
                                                         t `         would be just
                                                               t 1
one realisation of this stochastic process. It is obvious, however, that there
is not just one realisation of such a process, but, in principle, an arbitrary
number of realisations which all have the same statistical properties as they
all result from the same data generating process.
   In the following, a time series is considered as one realisation of the un-
derlying stochastic process. We can also regard the stochastic process as
the entirety of all of its possible realisations. To make the notation as sim-
ple as possible, we will not distinguish between the process itself and its
realisation. This can be taken out of the context.
   Stochastic processes of the dimension T can be completely described by
a T-dimensional distribution function. This is, however, not a practicable
procedure. We rather concentrate on the first and second order moments,
i.e. on the mean (or expected value)
                                E[xi], i = 1, 2, ..., T,
the T variances
                     V[xi] = E[(xi – E[xi])2], i = 1, 2, ..., T,
as well as the T(T-1)/2 covariances
                  Cov[xi,xj] = E[(xi – E[xi])(xj – E[xj])], i < j .
                                          1.3 Ergodicity and Stationarity   13

Quite often, these are denoted as autocovariances because they are covari-
ances between random variables of the same stochastic process. If the sto-
chastic process has a multivariate normal distribution, its distribution func-
tion is fully described by its moments of first and second order. This holds,
however, only in this special case.
   As we usually have only one time series, i.e. just one realisation of the
stochastic process in practical applications, we have to make additional as-
sumptions in order to be able to perform statistical inference. For example,
to be able to estimate the expected value, the variance and the covariances
of the stochastic process {xt}, there should be more than one realisation of
this random variable available for a given point in time t.
   The assumption of ergodicity means that the sample moments which are
calculated on the basis of a time series with a finite number of observations
converge (in some sense) for T o f against the corresponding moments of
the population. This concept is only meaningful, however, if we can as-
sume that, for example, the expectations E[xt] = P and the variances V[xt] =
V2 are constant for all t.
   More precisely, a DGP is said to be mean ergodic if
                                           2
                              ª§ 1 T      · º
                       lim E «¨ ¦ x t  P ¸ »        0
                       T of
                             «¬© T t 1    ¹ »¼

and variance ergodic if
                                              2
                          ª§ 1 T           2·
                                                º
                   lim E «¨ ¦ (x t  P)  V ¸ »
                                       2
                                                         0
                   T of
                         «¬© T t 1          ¹ »¼

These conditions are ‘consistency properties’ for dependent random vari-
ables and cannot be tested. Therefore, they have to be assumed.
   A stochastic process has to be in statistical equilibrium in order to be er-
godic, i.e. it has to be stationary. Two different kinds of stationarity can be
distinguished. If we assume that the common distribution function of the
stochastic process does not change by a shift in time, the process is said to
be strictly stationary. As this concept is difficult to apply in practice, we
only consider weak stationarity or stationarity in the second moments. We
first define stationarity for the corresponding moments of the stochastic
process {xt}:
(i)   Mean Stationarity: A process is mean stationary if E[xt] = Pt = P is
      constant for all t.
14    1 Introduction and Basics

(ii) Variance Stationarity: A process is variance stationary if V[xt] = E[(xt
     – Pt)2] = V2 is constant and finite for all t.
(iii) Covariance Stationarity: A process is covariance stationary if
      Cov[xt,xs] = E[(xt – Pt)(xs – Ps)] = J(|s–t|) is only a function of the
      time distance between the two random variables and does not depend
      on the actual point in time t.
(iv) Weak Stationarity: As variance stationarity immediately results from
     covariance stationarity for s = t, a stochastic process is weakly sta-
     tionary when it is mean and covariance stationary.
Because we only assume this kind of stationarity in the following, we
mostly drop the adjective weak.

Example 1.1
We call the stochastic process {ut} a pure random or a white noise process, if it
has the following properties: E[ut] = 0 and V[ut] = V2 for all t, as well as Cov[ut,us]
= E[utus] = 0 for all t z s. Apparently, this process is weakly stationary. The ran-
dom variables all have mean zero and variance V2 and are uncorrelated with each
other.

Example 1.2
Let the stochastic process {xt} be defined as
                               ­ u1             for           t 1,
(E1.1)                    xt   ®
                               ¯ x t 1  u t   for t         2,3,! ,

where {ut} is a pure random process. This stochastic process, a random walk
without drift, can also be written as
                                                t
(E1.2)                                xt        ¦u
                                                j 1
                                                      j   .

Let us assume that we generate {ut} by flipping a fair coin. We get heads with
probability 0.5 (in this case, our random variable has the value +1) and tails with
probability 0.5 (in this case, our random variable has the value -1). Let us start, for
example, with x0 = 0 for t = 0. Then it is easy to see that all possible realisations
(time series) of this random walk can only take values within the area in Figure
1.7 which is limited by the two bisectors. If each flip results in heads (tails), the
corresponding time series would take the value +1 (-1) for t = 1, the value +2 (-2)
for t = 2, and so on.
                                                        1.3 Ergodicity and Stationarity                   15



                             50
                             40
                             30
                             20
                            10
                             0
                                         20       40         60        80           100
                            -10
                            -20
                            -30
                            -40
                            -50


         Figure 1.7: Example of a random walk where only the steps +1
                     and –1 are possible

Which moments of first and second order does the stochastic process defined in
(E1.1) have? Due to (E1.2) and the properties of a pure random process it holds
that
                              ª t    º       t
                 E >xt @    E «¦ u j »      ¦   E ª¬ u j º¼ 0 ,
                              ¬j 1 ¼        j 1


                                     ª t    º           t
                   V>xt @          V «¦ u j »          ¦ V ª¬u º¼ j             t V 2 , and
                                     ¬j 1 ¼            j 1


                               ª§ t    ·§ s      ·º           t   s
   Cov > x t , x s @        E «¨ ¦ u j ¸ ¨ ¦ u i ¸ »         ¦¦ E ¬ª u u ¼º j   i         min(t,s)V 2 .
                              «¬© j 1 ¹ © i 1 ¹ »¼           j 1 i 1


Thus, the random walk without drift is mean stationary, but neither variance nor
covariance stationary and, consequently, also not weakly stationary. The random
walk without drift is an important element of a category of non-stationary stochas-
tic processes which, as will be shown later, are well suited to describe the devel-
opment of economic time series.

It is impossible to evaluate the dependence of random variables of a sto-
chastic process by using autocovariances as these are not normalised and,
therefore, dependent on the applied measurement units. If the covariances
are normalised with the respective variances, the result is a term which is
independent of the applied measurement unit, the autocorrelation function.
For weakly stationary processes this is given by
16      1 Introduction and Basics


                  E[(x t  P)(x t W  P)]   J ( W)
(1.9) ȡ(Ĳ) =                        2
                                           =        , W = ..., -1, 0, 1, ...,
                      E[(x t  P) ]          J (0)
and has the following properties:
(i)                                  U(0) = 1,
(ii)                                 U(W) = U(-W), and
(iii)                                _U(W)_ d 1, for all W.
Because of (i) and the symmetry (ii) it is sufficient to know the autocorre-
lation function or the autocorrelogram for W = 1, 2, ....
    Due to the ergodicity assumption, mean, variance and autocovariances
of stationary processes can be estimated in the following way:
                                                         1 T
                                           Pˆ             ¦ xt ,
                                                         Tt1
                                                       1 T
                                  Jˆ (0)                ¦ (x t  Pˆ )2 ,
                                                       Tt1
                           1 T W
              Jˆ (W) =       ¦ (x t  Pˆ )(x t W  Pˆ ) , Ĳ = 1, 2, ..., T-1.
                           Tt1
These are consistent estimators of P, J(0) und J(W). The consistent estima-
tor of the autocorrelation function is given by
                    T W

                    ¦ (x  Pˆ )(x
                    t 1
                             t              t W     Pˆ )
                                                                  Jˆ ( W)
(1.10) Uˆ (W) =             T
                                                             =            , W = 1, 2, ..., T-1.
                                                                 Jˆ (0)
                           ¦ (x  Pˆ )
                            t 1
                                    t
                                                2




This estimator is asymptotically unbiased. For white noise processes, its
variance can be approximated by 1/T and it is asymptotically normally dis-
tributed. Due to this, approximate 95 percent confidence intervals of
 r2 / T are often indicated for the estimated autocorrelation coefficients.
    According to M. S. BARTLETT (1946), the variance of autocorrelation
coefficients of stochastic processes in which all autocorrelation coeffi-
cients disappear from the index value k + 1 on, U(W) = 0 for W > k, is ap-
proximately given by
                                               1.3 Ergodicity and Stationarity   17


                                  1§      k
                                                  2·
                   V >Uˆ (W)@ |    ¨1  2¦ Uˆ ( j) ¸ , W > k.
                                  T©     j 1       ¹
In order to evaluate estimated time series models, it is important to know
whether the residuals of the model really have the properties of a pure ran-
dom process, especially whether they are uncorrelated. Thus, the null hy-
pothesis to be tested is
                    H0: U(W) = 0 for W = 1, 2, ..., m, m < T.
The first possibility to check this is to apply the 95 percent confidence lim-
its r2 / T valid under the null hypothesis to every estimated correlation
coefficient. If some Uˆ (W) lie outside these limits, this is evidence against
the null hypothesis.
   To make a global statement, i.e. to test the common hypothesis whether
a given number of m autocorrelation coefficients are null altogether,
GEORGE E. P. BOX and DAVID A. PIERCE (1970) have developed the fol-
lowing test statistic:
                                         m
(1.11)                        Q = T ¦ Uˆ ( j) 2 .
                                         j 1


Under the null hypothesis it is asymptotically Ȥ2 distributed with m degrees
of freedom.
   As – strictly applied – the distribution of this test statistics holds only
asymptotically, G. M. LJUNG and GEORGE E. P. BOX (1978) proposed the
following modification for small samples,
                                                m
                                                    Uˆ ( j) 2
(1.12)                    Q* = T(T + 2) ¦                     ,
                                                j 1 T  j


which is also asymptotically Ȥ2 distributed with m degrees of freedom.
   It should be intuitively clear that the null hypothesis of non-auto-
correlation of the residuals should be rejected if some of the Uˆ ( j) are too
large, i.e. if Q or Q* is too large, or – to be more precise – if they are larger
than the corresponding critical values of the Ȥ2 distribution with m degrees
of freedom for a specified significance level.
   An alternative to these testing procedures is the Lagrange-Multiplier
Test (LM Test) developed by TREVOR S. BREUSCH (1978) and LESLIE G.
GODFREY (1978). Like the Q test the null hypothesis is
                  H0: The residuals are not autocorrelated,
18   1 Introduction and Basics

which is tested against the alternative that the residuals follow an autore-
gressive or a moving average process of order p. The test can be performed
with an auxiliary regression. The estimated residuals are regressed on the
explanatory variables of the main model and on the lagged residuals, up to
order p. The test statistic which is Ȥ2 distributed with p degrees of freedom
is given by T-times the multiple correlation coefficient R2 of the auxiliary
regression, with T being the number of observations. Alternatively, an F
test can be used for testing the combined significance of the lagged residu-
als in the auxiliary regression.
   Compared to the Durbin-Watson test which is used in traditional
econometrics for testing autocorrelation of the residuals of an estimated
model, the Q (Q*) as well as the LM test have two major advantages:
firstly, they can check for autocorrelation of any order, and not only of first
or fourth order. Secondly, the results are also correct if there are lagged
endogenous variables in the regression equation, whereas in such cases the
results of the Durbin-Watson test are biased in favour of the null hypothe-
sis.
   The fact that the residuals are not autocorrelated does not imply that
they are independently and/or normally distributed; absence of autocorre-
lation does only imply stochastic independence if the variables are nor-
mally distributed. It is, however, often assumed that they are normally dis-
tributed, as the usual testing procedures are based on this assumption.
Whether this is actually true depends on the higher moments of the distri-
bution. Especially the third and fourth moments are important,
                         E[(xi – E[xi])i], i = 3, 4.
The third moment is necessary to determine the skewness of the distribu-
tion which can be estimated by
                                       T
                                                        3

                                   1 ¦
                                       x Pˆ    t
                                       t 1
                           Ŝ =                             .
                                   T         Jˆ (0)3

For symmetric distributions (as the normal distribution) the theoretical
value of the skewness is zero. The kurtosis which is based on the forth
moment can be estimated by
                                        T
                                                        4

                                   1 ¦
                                       x Pˆ    t
                                       t 1
                           K̂ =                             .
                                   T         Jˆ (0) 2
                                             1.3 Ergodicity and Stationarity      19

For the normal distribution it holds that K = 3. Values larger than three in-
dicate that the distribution has ‘fat tails’: the density of a distribution in the
centre and at the tails, i.e. outside the usual ± 2ı limits, is higher and in the
areas in between smaller than the density of a normal distribution. This
holds, for example, for the t distribution. Such fat tails are typical for fi-
nancial market data with high periodicity.
   Using the skewness S and the kurtosis K, CARLOS M. JARQUE and ANIL
K. BERA proposed a test for normality. It can be applied directly on the
time series itself (or on its differences). Usually, however, it is applied to
check estimated regression residuals. The test statistic
                                   T m§ ˆ2 1 ˆ     2·
                          JB =         ¨ S  (K  3) ¸
                                     6 ©    4        ¹
is Ȥ2 distributed with 2 degrees of freedom. T is again the sample size, and
m the number of estimated parameters. The hypothesis that the variable is
normally distributed is rejected whenever the values of the test statistic are
larger than the corresponding critical values.


Example 1.3
The price development in efficient markets as, for example, stock prices or ex-
change rates, can often be represented by a random walk. An example is the ex-
change rate between the Swiss Franc and the U.S. Dollar. Monthly data of this se-
ries are shown in Figure 1.8a for the period from January 1980 to December 2003.
Below this, continuous monthly returns corresponding to (1.1') are presented.
They behave like a pure random process. This can be seen from the correlogram:
none of the estimated correlation coefficients which are presented in Figure 1.8c is
significantly different from zero. (The dashed lines in Figure 1.8c represent the
approximate 95 percent confidence limits.) Moreover, neither the Box-Pierce Q*
test nor the Breusch-Godfrey LM test indicate autocorrelation: For m = 2 and m =
12 the test statistics are Q*(2) = 2.349, Q*(12) = 16.856, LM(2) = 2.208, LM(12)
= 18.291. (The critical values of the Ȥ2 distribution at the 10 percent significance
level with 12 degrees of freedom is 18.549, with 2 degrees of freedom 4.605 and
9.210 at the 1 percent level.) On the other hand, the hypothesis of normality has to
be rejected at the 1 percent level since JB = 11.542. The reason for this is the kur-
tosis with a value of 3.804.
20   1 Introduction and Basics


         CHF/USD
           3.5

             3

           2.5

             2

           1.5

             1                                                         Jahr
             1974   1978   1982   1986   1990    1994   1998   2002
                       a) Exchange rate CHF/USD 1974 – 2003
       percent
          0.20

          0.15

          0.10

          0.05

          0.00                                                        Jahr
             1974   1978   1982   1986   1990   1994    1998   2002
         -0.05

         -0.10

         -0.15
                       b) Continuous returns CHF/USD
             Uˆ W
             1
           0.8
           0.6
           0.4
           0.2
             0                                                         W
          -0.2              5            10             15            20
          -0.4
          -0.6
          -0.8
            -1
                       c) Estimated autocorrelations



        Figure 1.8: Exchange rate Swiss Franc US Dollar,
                    monthly data, January 1974 to December 2003
                                                   1.4 The Wold Decomposition       21


1.4 The Wold Decomposition

Before we deal with special models of stationary processes, a general
property of such processes is discussed: the Wold Decomposition. This de-
composition traces back to HERMAN WOLD (1938). It exists for every co-
variance stationary, purely non-deterministic stochastic process: After sub-
tracting the mean function, each of such processes can be represented by a
linear combination of a series of uncorrelated random variables with zero
mean and constant variance.
   Purely non-deterministic means that all additive deterministic compo-
nents of a time series have to be subtracted in advance. By using its own
lagged values, any deterministic component can be perfectly predicted in
advance. This holds, for example, for a constant mean, periodical, poly-
nomial, or exponential series in t. Thus, one can write:
                        f                                         f
(1.13)     xt – ȝt = ¦ \ j u t  j    with ȥ0 = 1 and ¦ \ 2j  f .
                        j 0                                       j 0


There, ut is a pure random process, i.e. it holds that
                                      ­V 2                for           t   s
             E[ut] = 0 and E[ut us] = ®                                         .
                                      ¯0                         otherwise

The quadratic convergence of the series of the \j guarantees the existence
of second moments of the process. There is no need of any distributional
assumption for this decomposition to hold. Especially, there is no need of
the ut to be independent, it is sufficient that they are uncorrelated.
   For the mean we get
                                  ªf              º    f
              E > x t  P t @ = E « ¦ \ j u t  j » = ¦ \ j E ª¬ u t  j º¼ = 0,
                                  ¬j 0            ¼   j 0


i.e., it holds that
                                         E[xt] = Pt.
The variance can be calculated as follows:
           V[xt] = E[(xt – Pt)2] = E [(ut + \1 ut-1 + \2 ut-2 + ...)2] .
Because of E[ut ut-j] = 0 for j z 0, this can be simplified to
              V[x t ]         E[u 2t ]  \12 E[u 2t 1 ]  \ 22 E[u 2t  2 ]  !
22    1 Introduction and Basics

                                   f
                      = V 2 ¦ \ 2j                       J (0) .
                                 j 0


Thus, the variance is finite and not time dependent. Correspondingly, with
Ĳ > 0 we get the time independent autocovariances
     Cov[xt, xt+Ĳ] = E[(xt – ȝt)(xt+ Ĳ – ȝt+ Ĳ)]
                    = E[(ut + ȥ1 ut-1 + … ȥĲ ut-Ĳ + ȥĲ+1 ut-Ĳ-1 + …)
                      · (ut+Ĳ + ȥ1 ut+Ĳ -1 + … ȥĲ ut + ȥĲ+1 ut-1 + …)]
                    = ı2(1·ȥĲ + ȥ1ȥĲ+1 + ȥ2ȥĲ+2 + …)
                             f
                    = V 2 ¦ \ j\ W j = Ȗ(Ĳ) < f,
                             j 0


with \0 = 1. It becomes clear that the autocovariances are only functions of
the time difference, i.e. the distance between two random variables. Thus,
all conditions of covariance stationarity are fulfilled. Because of (1.9) the
autocorrelation function is given by:
                                       f

                                       ¦\ \
                                       j 0
                                                 j       W j

                     U( W)                   f
                                                                , W = 1, 2, ... .
                                             ¦\
                                             j 0
                                                     2
                                                     j



All stationary models discussed in the following chapters can be repre-
sented on the basis of the Wold Decomposition (1.13). However, this rep-
resentation is, above all, interesting for theoretical reasons: in practice, ap-
plications of models with an infinite number of parameters are hardly
useful.


References

An introduction to the history of time series analysis is given by
MARC NERLOVE, DAVID M. GRETHER and JOSÉ L. CARVALHO, Analysis of Eco-
  nomic Time Series: A Synthesis, Academic Press, New York et al. 1979, pp. 1
  – 21.
The first estimated econometric model was presented in
JAN TINBERGEN, Statistical Analysis of Business Cycle Theories, Vol. 1: A Method
    and Its Application to Business Cycle Theory, Vol. 2: Business cycles in the
                                                                    References      23

    United States of America, 1919 – 1932, League of Nations, Economic Intelli-
    gence Service, Geneva 1939.
That autocorrelation of the residuals can cause problems for the statistical esti-
mation and testing of econometric models was first noticed by
DONALD COCHRANE and GUY H. ORCUTT, Application of Least Squares Regres-
   sion to Relationships Containing Autocorrelated Error Terms, Journal of the
   American Statistical Association 44 (1949), pp. 32 – 61.
In this article, one can also find the transformation to eliminate first order autocor-
relation which was named after these two authors. With this transformation and
the testing procedure proposed by
JAMES DURBIN and GEOFFREY S. WATSON, Testing for Serial Correlation in Least
   Squares Regression, I, Biometrika 37 (1950), pp. 409 – 428; II, Biometrika 38
   (1951), pp. 159 – 178,
econometricians believed to cope with these problems.
However, methods of time series analysis had already been applied earlier to in-
vestigate economic time series.
WARREN M. PERSONS, Indices of Business Conditions, Review of Economic Sta-
  tistics 1 (1919), pp. 5 – 107,
was the first to distinguish different components of economic time series. Such
procedures are still applied today. For example, the seasonal adjustment procedure
SEATS, which is used by EUROSTAT and which is described in
AUGUSTIN MARAVALL and VICTOR GOMEZ, The Program SEATS: ‚Signal Extrac-
   tion in ARIMA Time Series‘, Instruction for the User, European University
   Institute, Working Paper ECO 94/28, Florence 1994,
is based on such an approach.
The more recent development of time series analysis has been initiated by the
textbook of
GEORGE E.P. BOX and GWILYM M. JENKINS, Time Series Analysis: Forecasting
   and Control, Holden Day, San Francisco et al. 1970; 2nd enlarged edition
   1976.
This book mainly proposes the time domain for the analysis of time series and
focuses on univariate models. The theoretical basis of this approach is the de-
composition theorem for stationary time series shown by
HERMANN WOLD, A Study in the Analysis of Stationary Time Series, Almquist and
   Wicksell, Stockholm 1938.
An argument in favour of the application of this time series approach is that short-
term predictions thus generated are often considerably better than predictions gen-
erated by the use of large econometric models. This was shown, for example, by
24    1 Introduction and Basics

CLIVE W.J. GRANGER and PAUL NEWBOLD, Economic Forecasting: The Atheist’s
   Viewpoint, in: G.A. RENTON (ed.), Modelling the Economy, Heinemann, Lon-
   don 1975, pp. 131 – 148.
Besides analyses in the time domain there is also the possibility to analyse time se-
ries in the frequency domain. See, for example,
CLIVE W.J. GRANGER and MICHIO HATANAKA, Spectral Analysis of Economic
   Time Series, Princeton University Press, Princeton N.J. 1964.
Extensive surveys on modern methods of time series analysis are given by
JAMES D. HAMILTON, Time Series Analysis, Princeton University Press, Princeton
   N.J. 1994, and
HELMUT LÜTKEPOHL, New Introduction to Multiple Time Series Analysis, Sprin-
   ger, Berlin et al., 2005.
In J.D. HAMILTON’s book one can also find remarks on the relation between er-
godicity and stationarity (pp. 45ff.).
Textbooks focusing on the application of these methods are
WALTER ENDERS, Applied Econometric Time Series, Wiley, New York, 2nd edi-
  tion 2004, as well as
HELMUTH LÜTKEPOHL and MARKUS KRÄTZIG (eds.), Applied Time Series Econo-
   metrics, Cambridge University Press, Cambridge et al. 2004.
For a deeper discussion of stochastic processes see, for example,
ARIS SPANOS, Statistical Foundations of Econometric Modelling, Cambridge Uni-
   versity Press, Cambridge (England) et al. 1986, pp. 130ff., or
EMANUEL PARZEN, Stochastic Processes, Holden-Day, San Francisco 1962.
The test statistic for the variance of single estimated autocorrelation coefficients is
given by
M.S. BARTLETT, On the Theoretical Specification and Sampling Properties of
   Auto-Correlated Time Series, Journal of the Royal Statistical Society (Sup-
   plement) 8 (1946), pp. 24 – 41.
The statistic for testing a given number of autocorrelation coefficients was devel-
oped by
GEORGE E.P. BOX and DAVID A. PIERCE, Distribution of Residual Autocorrela-
   tions in Autoregressive Moving Average Time Series Models, Journal of the
   American Statistical Association 65 (1970), pp. 1509 – 1526,
while the modification for small samples is due to
G.M. LJUNG and GEORGE E.P. BOX, On a Measure of Lack of Fit in Time Series
   Models, Biometrika 65 (1978), pp. 297 – 303.
                                                               References    25

The Lagrange-Multiplier test for residual autocorrelation has been developed by
TREVOR S. BREUSCH, Testing for Autocorrelation in Dynamic Linear Models,
   Australian Economic Papers 17 (1978), pp. 334 – 355, and by
LESLIE G. GODFREY, Testing Against General Autoregressive and Moving Aver-
   age Error Models When Regressors Include Lagged Dependent Variables,
   Econometrica 46 (1978), S. 1293 – 1302.
The test on normal distribution presented above has been developed by
CARLOS M. JARQUE and ANIL K. BERA, Efficient Tests for Normality, Homosce-
   dasticity and Serial Independence of Regression Residuals, Economics Letters
   6 (1980), pp. 255 – 259.
2 Univariate Stationary Processes




As mentioned in the introduction, the publication of the textbook by
GEORGE E.P. BOX and GWILYM M. JENKINS in 1970 opened a new road to
the analysis of economic time series. This chapter presents the Box-
Jenkins Approach, its different models and their basic properties in a rather
elementary and heuristic way. These models have become an indispensa-
ble tool for short-run forecasts. We first present the most important ap-
proaches for statistical modelling of time series. These are autoregressive
(AR) processes (Section 2.1) and moving average (MA) processes (Section
2.2), as well as a combination of both types, the so-called ARMA proc-
esses (Section 2.3). In Section 2.4 we show how this class of models can be
used for predicting the future development of a time series in an optimal
way. Finally, we conclude this chapter with some remarks on the relation
between the univariate time series models described in this chapter and the
simultaneous equations systems of traditional econometrics (Section 2.5).


2.1 Autoregressive Processes

We know autoregressive processes from traditional econometrics: Already
in 1949, DONALD COCHRANE and GUY H. ORCUTT used the first order
autoregressive process for modelling the residuals of a regression equation.
We will start with this process, then treat the second order autoregressive
process and finally show some properties of autoregressive processes of an
arbitrary but finite order.


2.1.1 First Order Autoregressive Processes


Derivation of Wold’s Representation

A first order autoregressive process, an AR(1) process, can be written as
an inhomogeneous stochastic first order difference equation,
(2.1)                      xt = į + Į xt-1 + ut,
28      2 Univariate Stationary Processes

where the inhomogeneous part į + ut consists of a constant term į and a
pure random process ut. Let us assume that for t = t0 the initial value x t 0 is
given. By successive substitution in (2.1) we get
         x t 0 1 = į + Į x t 0 + u t 0 1

         x t 0  2 = į + Į x t 0 1 + u t0  2

                 = į + Į(į + Į x t 0 + u t 0 1 ) + u t 0  2

                 = į + Įį + Į2 x t 0 + Į u t 0 1 + u t0  2

         x t0 3 = į + Į x t0  2 + u t0 3

         x t 0  3 = į + Įį + Į2į + Į3 x t 0 + Į2 u t 0 1 + Į u t 0  2 + u t0  3

                  #
         x t 0 W = (1 + Į + Į2 + … + ĮĲ-1)į + ĮĲ x t 0

                       + ĮĲ-1 u t 0 1 + ĮĲ-2 u t 0  2 + … + Į u t 0 W1 + u t0 W ,

or
                                               1  DW     W1
                      x t 0 W = ĮĲ x t 0 +           G  ¦ D j u t 0 W j .
                                               1 D       j 0


For t = t0 + Ĳ, we get

                                               1  D t  t0     t  t 0 1
(2.2)                 xt = D t  t 0 x t 0 +                G  ¦ D j u t j .
                                                 1 D              j 0


The development and thus the properties of this process are mainly deter-
mined by the assumptions on the initial condition x t 0 .
  The case of a fixed (deterministic) initial condition is given if x0 is as-
sumed to be a fixed (real) number, e.g. for t0 = 0, i.e. no random variable.
Then we can write:
                                               1  Dt     t 1
                          xt = Įt x0 +                G  ¦ D j u t j .
                                               1 D       j 0


This process consists of both a time dependent deterministic part and a
stochastic part. Thus, it can never be mean stationary.
                                             2.1 Autoregressive Processes       29

   We can imagine the case of stochastic initial conditions as (2.1) being
generated along the whole time axis, i.e. -  < t < . If we only observe
realisations for positive values of t, the initial value x0 is a random variable
which is generated by this process. Formally, the process with stochastic
initial conditions results from (2.2) if the solution of the homogeneous dif-
ference equation has disappeared. This is only possible if |Į| < 1. There-
fore, in the following, we restrict D to the interval –1 < D < 1. If lim x t 0 is
                                                                      t 0 of

bounded, (2.2) for t0 ĺ -  converges to
                                           f
                                    G
(2.3)                       xt =         ¦ D j u t j .
                                   1 D   j 0


The time dependent deterministic part has disappeared. According to Sec-
tion 1.4, the AR(1) process (2.1) has the Wold representation (2.3) with
ȥj = Įj and |Į| < 1. This results in the convergence of
                         f            f
                                                   1
                       ¦j 0
                            \ 2j = ¦ D 2 j =
                                     j 0        1  D2
                                                        .

Thus, the process (2.1) is weakly stationary.

The Lag Operator

Equation (2.3) can also be derived from relation (2.1) by using the lag op-
erator defined in Section 1.2:
(2.1')                        (1 – ĮL)xt = į + ut,
If we solve for xt we get
                                      G        1
(2.4)                       xt =          +        ut .
                                   1  DL   1  DL
The expression 1/(1 – ĮL) can formally be expanded to a geometric series,
                   1
                       = 1 + ĮL + Į2L2 + Į3L3 + … .
                1  DL
Thus, we get
         xt = (1 + ĮL + Į2L + …)į + (1 + ĮL + Į2L + …)ut
           = (1 + Į + Į2 + …)į + ut + Į ut-1+ Į2 ut-2 + … ,
and because of |Į| < 1
30   2 Univariate Stationary Processes

                                           f
                                    G
                           xt =          ¦ D j u t j .
                                   1 D   j 0


The first term could have been derived immediately if we substituted the
value ‘1’ for L in the first term of (2.4). (See also relation (1.8)).

Calculation of Moments

Due to representation (2.3), the first and second order moments can be cal-
culated. As E[ut] = 0 holds for all t, we get for the mean
                      ª G       f          º
            E[xt] = E «       ¦ D j ut j »
                      ¬1  D   j 0         ¼
                                f
                         G                              G
            E[xt] =           ¦ D j E ª¬ u t  j º¼ =      = ȝ
                        1 D   j 0                     1 D
i.e. the mean is constant. It is different from zero if and only if į  0. Be-
cause of 1 – Į > 0, the sign of the mean is determined by the sign of G. For
the variance we get
                                                 2
            ª§       G · º
                          2
                                 ª§ f           · º
                         ¸ » = E «¨ ¦ D u t  j ¸ »
                                         j
 V[xt] = E «¨ x t 
           «¬©      1 D ¹ »     «¬© j 0        ¹ »¼
                            ¼
        = E[(ut + Įut-1 + Į2ut-2 + ... )2]
        = E[ u 2t + Į2 u 2t1 + Į4 u 2t 2 + … + 2Įutut-1 + 2Į2utut-2 + … ]
        = ı2(1 + Į2 + Į4 + ...),
because E[ut us] = 0 for t  s and E[ut us] = ı2 for t = s. Applying the sum-
mation formula for the geometric series, and because of |Į| < 1, we get the
constant variance
                                            V2
                               V[xt] =            .
                                          1  D2
The covariances can be calculated as follows:
                              ª§        G · §              G ·º
            Cov [xt,xt-Ĳ] = E «¨ x t       ¸ ¨ x t W        ¸»
                              «¬©      1 D ¹ ©          1  D ¹»
                                                                ¼
                                               2.1 Autoregressive Processes   31

                            = E[(ut + Į ut-1 + ... + ĮĲ ut-Ĳ + ...)
                                 (ut-Ĳ + Į u t-Ĳ-1 + Į2 u t-Ĳ-2 + ...)]

                            = E[(ut + Į ut-1 + ... + ĮĲ-1 ut-Ĳ+1
                              + ĮĲ(ut-Ĳ + Į u t-Ĳ-1 + Į2 u t-Ĳ-2 + ...))
                                 (ut-Ĳ + Į u t-Ĳ-1 + Į2 u t-Ĳ-2 + ...)]
                            = ĮĲ E[(ut-Ĳ + Įut-Ĳ-1 + Į2ut-Ĳ-2 + ... )2] .
Thus, we get
                                                              V2
                 Cov [xt,xt-Ĳ] = DW V[xt-W] = DW                   .
                                                            1  D2
The autocovariances are only a function of the time difference Ĳ and not of
time t, and we can write:
                                     V2
(2.5)               Ȗ(Ĳ) = DW             , Ĳ = 0, 1, 2, ... .
                                   1  D2
Therefore, the AR(1) process with |Į| < 1 and stochastic initial conditions
is weakly stationary.

An Alternative Method for the Calculation of Moments

Under the condition of weak stationarity, i.e. for |Į| < 1 and stochastic ini-
tial conditions, the mean of xt is constant. If we apply the expectation op-
erator on equation (2.1), we get:
            E[xt] = E[į + Į xt-1 + ut] = į + Į E[xt-1] + E[ut] .
Because of E[ut] = 0 and E[xt] = E[xt-1] = ȝ for all t we can write
                                                  G
                            E[xt] = ȝ =               .
                                                 1 D
If we consider the deviations from the mean,
                                  x t = xt – ȝ
and substitute this in relation (2.1), we get:
                      x t + ȝ = į + Į x t 1 + Į ȝ + ut .
From this it follows that
32      2 Univariate Stationary Processes


                     x t = į + ȝ (Į – 1) + Į x t 1 + ut
                                     G
                          = į+           (Į – 1) + Į x t 1 + ut
                                    1 D

(2.6)                               x t = Į x t 1 + ut .
This is the AR(1) process belonging to (2.1) with E[ x t ] = 0.
  If we multiply equation (2.6) with x t W for Ĳ  0 and take expectations
we can write:
(2.7)              E[ x t W x t ] = Į E[ x t W x t 1 ] + E[ x t W ut] .
Because of (2.3) we get
                     x t W = ut-Ĳ + Į ut-Ĳ-1 + Į2 ut-Ĳ-2 + … .
This leads to

                                           ­V 2        for W 0
(2.8)                     E[ x t W ut] = ®                     .
                                           ¯0          for W ! 0
Because of the stationarity assumption and because of the (even) symme-
try of the autocovariances, Ȗ(Ĳ) = Ȗ(-Ĳ), equation (2.7) results in

                 Ĳ = 0:     E[ x 2t ]       = Į E[ x t x t 1 ] + ı2,
or
                            Ȗ(0)             =     Į Ȗ(1)             + ı2,
                 Ĳ = 1:     E[ x t x t 1 ] = Į E[ x 2t1 ],
or
                            Ȗ(1)             = Į Ȗ(0) .
This leads to the variance of the AR(1) process
                                                     V2
                                         Ȗ(0) =           .
                                                   1  D2
For Ĳ  1 (2.7) implies

                            Ȗ(1) = Į Ȗ(0)
                                               2.1 Autoregressive Processes        33

                          Ȗ(2) = Į Ȗ(1) = Į2 Ȗ(0)
                          Ȗ(3) = Į Ȗ(2) = Į3 Ȗ(0)
                                 #

                          Ȗ(Ĳ) = Į Ȗ(Ĳ-1) = ĮĲ Ȗ(0) .
Thus, the covariances can be calculated from the linear homogenous first
order difference equation
                                Ȗ(Ĳ) – Į Ȗ(Ĳ-1) = 0
with the initial value Ȗ(0) = ı2/(1 – Į2).

The Autocorrelogram

Because of ȡ(Ĳ) = Ȗ(Ĳ)/Ȗ(0), the autocorrelation function (the autocorrelo-
gram) of the AR(1) process is
(2.9)                       ȡ(Ĳ) = ĮĲ , Ĳ = 1, 2, ... .
If we use the autocorrelogram for checking whether the residuals of an es-
timated model are white noise and employ the Box-Pierce or Ljung-Box
statistics given in (1.11) and (1.12), the number of degrees of freedom has
to be reduced by the number of the estimated parameters (excluding the
constant term).

Example 2.1

For G = 0 and Į = {0.9, 0.5, -0.9}, Figures 2.1 to 2.3 each present one realisation
of the corresponding AR(1) process with T = 240 observations. To generate these
series, we used realisations of normally distributed pure random processes with
mean zero and variance one. We always dropped the first 60 observations to elimi-
nate the dependence of the initial values.
   The realisation for D = 0.9, presented in Figure 2.1, is relatively smooth. This is
to be expected given the theoretical autocorrelation function because random vari-
ables with a considerable distance between each other still have high positive cor-
relations.
   The development of the realisation in Figure 2.2 with D = 0.5 is much less sys-
tematic. The geometric decrease of the theoretical autocorrelation function is
rather fast. The fourth order autocorrelation coefficient is only 0.0625.
   Contrary to this, the realisation of the AR(1) process with D = -0.9, presented in
Figure 2.3, follows a well pronounced zigzag course with, however, alternating
positive and negative amplitudes. This is consistent with the theoretical autocorrela-
tion function indicating that all random variables with even-numbered distance are
positively correlated and those with odd-numbered distance negatively correlated.
34   2 Univariate Stationary Processes




                     xt
               7.5


                 5


               2.5


                 0                                                          t

               -2.5


                -5


               -7.5                          a) Realisation

                 UW
                1

               0.8

               0.6

               0.4

               0.2

                0
                                    5            10            15      20   W
              -0.2

              -0.4           b) Theoretical autocorrelation function

                 Uˆ W
                1

               0.8

               0.6

               0.4

               0.2

                0
                                    5            10            15      20   W
              -0.2

              -0.4
                               c) Estimated autocorrelation function
                                  with confidence intervals



                          Figure 2.1: AR(1) process with Į = 0.9
                                       2.1 Autoregressive Processes   35



     xt
4



2



0                                                                t


-2



-4
                          a) Realisation

     UW
    1
0.8
0.6
0.4
0.2
    0                                                            W
-0.2                 5            10            15          20
-0.4
-0.6
-0.8
                  b) Theoretical autocorrelation function
 -1


     Uˆ W
    1
0.8
0.6
0.4
0.2
    0                                                            W
-0.2                5            10            15           20
-0.4
-0.6
-0.8
 -1                c) Estimated autocorrelation function
                      with confidence intervals



            Figure 2.2: AR(1) process with Į= 0.5
36   2 Univariate Stationary Processes



                    xt

                5



               2.5



                0                                                             t


              -2.5



                -5                         a) Realisation

                    UW
                    1
              0.8
              0.6
              0.4
              0.2
                0                                                             W
             -0.2                  5            10            15          20
             -0.4
             -0.6
             -0.8
                -1             b) Theoretical autocorrelation function

                Uˆ W
                1
              0.8
              0.6
              0.4
              0.2
                0                                                             W
             -0.2                 5             10            15         20
             -0.4
             -0.6
             -0.8
               -1              c) Estimated autocorrelation function
                                  with confidence intervals



                         Figure 2.3: AR(1) process with Į = -0.9
                                               2.1 Autoregressive Processes        37

It generally holds that the closer the parameter D is to + 1, the smoother the reali-
sations will be. For negative values of D we get zigzag developments which are
the more pronounced the closer D is to - 1. For D = 0 we get a pure random proc-
ess.
   The autocorrelation functions estimated by means of relation (1.10) with the
given realisations are also presented in Figures 2.1 to 2.3. The dotted parallel lines
show approximative 95 percent confidence intervals for the null hypothesis as-
suming that the true process is a pure random process. In all three cases, the esti-
mated functions reflect quite well the typical development of the theoretical auto-
correlations.

Example 2.2
In a paper on the effect of economic development on the electoral chances of the
German political parties during the period of the social-liberal coalition from 1969
to 1982, GEBHARD KIRCHGÄSSNER (1985) investigated (besides other issues) the
time series properties of the popularity series of the parties constructed from
monthly surveys of the Institute of Demoscopy in Allensbach (Germany). For the
period from January 1971 to April 1982, the popularity series of the Christian
Democratic Union (CDU), i.e. the share of voters who answered that they would
vote for this party (or its Bavarian sister party, the CSU) if there were a general
election by the following Sunday, is given in Figure 2.4. The autocorrelation and
the partial autocorrelation function (which is discussed in Section 2.1.4) are also
presented in this figure. While the autocorrelation function goes slowly towards
zero, the partial autocorrelation function breaks off after Ĳ = 1. This argues for an
AR(1) process.
   The model has been estimated with Ordinary Least Squares (OLS), the method
proposed in Section 2.1.5 for the estimation of autoregressive models. Thus, we
get:
             CDUt    = 8.053 + 0.834 CDUt-1 + ût,
                       (3.43) (17.10)
             R 2 = 0.683, SE = 1.586, Q(11) = 12.516 (p = 0.326).
The estimated t values are given in parentheses. The autocorrelogram, which is
also given in Figure 2.4, does not indicate any higher-order process. Moreover,
the Box-Ljung Q Statistic with 12 correlation coefficients (i.e. with 11 degrees of
freedom) gives no reason to reject this model.

Stability Conditions

Along with the stochastic initial value, the condition |Į| < 1, the so-called
stability condition, is crucial for the stationarity of the AR(1) process. We
can also derive the stability condition from the linear homogenous differ-
ence equation, which is given for the process itself by
38   2 Univariate Stationary Processes




              Percent
                56
                54
                52
                50
                48
                46
                44
                42
                40                                                                    year
                      1971       1973      1975      1977     1979      1981

                             a) Popularity of the CDU/CSU, 1971 – 1982
                 Uˆ (W)
                 1
               0.8
               0.6
               0.4
               0.2
                 0                                                                     W
               -0.2                  5              10            15             20
               -0.4
               -0.6
               -0.8           b) Estimated Autocorrelation (__) and partial (·····)
                -1               autocorrelation functions with confidence
                                 intervals
                 Uˆ (W)
                 1
               0.8
               0.6
               0.4
               0.2
                 0                                                                     W
               -0.2                  5             10            15             20
               -0.4
               -0.6
               -0.8               c) Estimated autocorrelation function of the
                -1
                                     residuals of the estimated AR(1)-process
                                     with confidence intervals



            Figure 2.4: Popularity of the CDU/CSU, 1971 – 1982
                                                 2.1 Autoregressive Processes         39

                                      xt – Į xt-1 = 0,
for its autocovariances by
                                    Ȗ(Ĳ) – Į Ȗ(Ĳ-1) = 0
and for the autocorrelations by
                                    ȡ(Ĳ) – Į ȡ(Ĳ-1) = 0.
These difference equations have stable solutions, i.e. lim U(W) = 0, if and
                                                                    Wof

only if their characteristic equation
(2.10)                                 Ȝ – Į = 0
has a solution (root) with an absolute value smaller than one, i.e. if |Į| < 1
holds. We get an equivalent condition if we do not consider the character-
istic equation but the lag polynomial of the corresponding difference equa-
tions,
(2.11)                                1 – Į L = 0.
This implies that the solution has to be larger than one in absolute value.
(Strictly speaking, L, which denotes an operator, has to be substituted by a
variable, which is often denoted by ‘z’. To keep the notation simple, we
use L in both meanings.)

Example 2.3
Let us consider the stochastic process
(E2.1)                                 yt = xt + vt .
In this equation, xt is a stationary AR(1) process, xt = Į xt-1 + ut, with |Į| < 1; vt is
a pure random process with mean zero and constant variance V 2v which is uncorre-
lated with the other pure random process ut with mean zero and constant variance
 V 2u .
     We can interpret the stochastic process yt as an additive decomposition of two
stationary components. Then yt itself is stationary. In the sense of MILTON
FRIEDMAN (1957) we can interpret xt as the permanent (systematic) and vt as the
transitory component.
     What does the correlogram of yt look like? As both xt and vt have zero mean,
E[yt] = 0. Multiplying (E2.1) with yt-Ĳ and taking expectations results in
                           E[yt-Ĳ yt] = E[yt-Ĳ xt] + E[yt-Ĳ vt] .
Due to yt-Ĳ = xt-Ĳ + vt-Ĳ, we get
               E[yt-Ĳ yt] = E[xt-Ĳ xt] + E[vt-Ĳ xt] + E[xt-Ĳ vt] + E[vt-Ĳ vt].
40    2 Univariate Stationary Processes

As ut and vt are uncorrelated, it holds that E[vt-Ĳ xt] = E[xt-Ĳ vt] = 0, and because of
the stationarity of the two processes, we can write
(E2.2)                           Ȗy(Ĳ) = Ȗx(Ĳ) + Ȗv(Ĳ) .
For W = 0 we get the variance of yt as
                                                        V 2u
                         Ȗy(0) = Ȗx(0) + V2v =               + V 2v .
                                                      1  D2
For W > 0, because of Ȗv(Ĳ) = 0 for Ĳ  0, we get from (E2.2)
                                                         V 2u
                              Ȗy(Ĳ) = Ȗx(Ĳ) = D W             .
                                                       1  D2
Thus, we finally get
                                          DW
                       ȡy(Ĳ) =                            , W = 1, 2, ...,
                                 1  (1  D 2 )V2v / V 2u

for the correlogram of yt. The overlay of the systematic component by the transi-
tory component reduces the autocorrelation generated by the systematic compo-
nent. The larger the variance of the transitory component, the stronger is this ef-
fect.


2.1.2 Second Order Autoregressive Processes

Generalising (2.1), the second order autoregressive process (AR(2)) can
be written as
(2.12)                     xt = į + Į1 xt-1 + Į2 xt-2 + ut,
with ut denoting a pure random process with variance ı2 and Į2  0. With
the lag operator L we get
(2.13)                    (1 – Į1 L – Į2 L2) xt = į + ut.
With Į(L) = 1 – Į1 L – Į2 L2 we can write
(2.14)                            Į(L) xt = į + ut.
As for the AR(1) process, we get the Wold representation from (2.14) if
we invert D(L); i.e. under the assumption that D-1(L) exists and has the
property
(2.15)                             D(L) D-1(L) = 1
we can ‘solve’ for xt in (2.14):
(2.16)                      xt = D-1(L) į + D-1(L) ut .
                                                2.1 Autoregressive Processes   41

If we use the series expansion with undetermined coefficients for
                             D-1(L) = ȥ0 + ȥ1L + ȥ2L2 + ...
it has to hold that
               1 = (1 – Į1 L – Į2 L2 )(ȥ0 + ȥ1L + ȥ2L2 + ȥ3L3 + ... )
because of (2.15). This relation is an identity only if the coefficients of Lj,
j = 0, 1, 2, ..., are equal on both the right and the left hand side. We get
           1          \0    \1L      \ 2 L2          \ 3 L3      ...
                            D1\ 0 L  D1\1L2          D1\ 2 L3    ... .
                                        D 2 \ 0 L2    D 2 \1L3    ...
Comparing the coefficients finally leads to
               L0 :                                   ȥ0 = 1
               L1: ȥ1 – Į1 ȥ0 = 0                ȥ1 = Į1.
               L2: ȥ2 – Į1 ȥ1 – Į2 ȥ0 = 0        ȥ2 = D12 + Į2 .

               L3: ȥ3 – Į1 ȥ2 – Į2 ȥ1 = 0        ȥ3 = D13 + 2Į1Į2 .
By applying this so-called method of undetermined coefficients, we get the
values ȥj, j = 2, 3, ..., from the linear homogenous difference equation
                                ȥj – Į1 ȥj-1 – Į2 ȥj-2 = 0
with the initial conditions ȥ0 = 1 and ȥ1 = Į1.
   The stability condition for the AR(2) process requires that, for j ĺ ,
the ȥj converge to zero, i.e. that the characteristic equation of (2.12),
(2.17)                            Ȝ2 – Į1 Ȝ – Į2 = 0,
has only roots with absolute values smaller than one, or that all solutions
of the lag polynomial in (2.13),
(2.18)                           1 – Į1 L – Į2 L2 = 0
are larger than one in modulus. Together with stochastic initial conditions,
this guarantees the stationarity of the process. The stability conditions are
fulfilled if the following parameter restrictions hold for (2.17) and (2.18):
                               1 + (-Į1) + (-Į2) > 0,
                               1 – (-Į1) + (-Į2) > 0,
                               1 – (-Į2) > 0.
42   2 Univariate Stationary Processes

As a constant is not changed by the application of the lag operator, the
number ‘1’ can substitute the lag operator in the corresponding terms.
Thus, due to (2.16), the Wold representation of the AR(2) process is given
by
                                              f
                              G
(2.19)           xt =
                         1  D1  D 2
                                          ¦\u
                                           j 0
                                                     j   t j   , ȥ0 = 1.

Under the assumption of stationarity, the expected value of the stochastic
process can be calculated directly from (2.12) since E[xt] = E[xt-1] = E[xt-2]
= ȝ. We get
                             ȝ = į + Į 1 ȝ + Į2 ȝ
or
                                                   G
(2.20)                   E[xt] = ȝ =                       .
                                              1  D1  D 2
As the stability conditions are fulfilled, 1 – Į1 – Į2 > 0 holds, i.e. the sign
of G also determines the sign of P.
   In order to calculate the second order moments, we can assume – with-
out loss of generality – that ȝ = 0, which is equivalent to G = 0. Multiply-
ing (2.12) with xt-Ĳ, Ĳ  0, and taking expectations leads to
(2.21)     E[xt-Ĳ xt] = Į1 E[xt-Ĳ xt-1] + Į2 E[xt-Ĳ xt-2] + E[xt-Ĳ ut] .
Because of representation (2.19), relation (2.8) holds here as well. This
leads to the following equations
             W 0  : J (0)           D1J (1)  D 2 J (2)  V 2
(2.22)       W 1  : J (1)           D1J (0)  D 2 J (1)       ,
              W 2 : J (2)           D1J (1)        D 2 J (0)
and, more generally, the following difference equation holds for the auto-
covariances Ȗ(Ĳ), Ĳ 2,

(2.23)                  Ȗ(Ĳ) – Į1 Ȗ(Ĳ-1) – Į2 Ȗ(Ĳ-2) = 0.
As the stability conditions hold, the autocovariances which can be recur-
sively calculated with (2.23) are converging to zero for Ĳ ĺ .
   The relations (2.22) result in
                                               1  D2
(2.24)        V[xt] = Ȗ(0) =                              2   2
                                                                  V2
                                    (1  D 2 ) [(1  D 2 )  D1 ]
                                                2.1 Autoregressive Processes    43

for the variance of the AR(2) process, and in
                                              D1
                      Ȗ(1) =                                      V2 ,
                                 (1  D 2 ) [(1  D 2 ) 2  D12 ]
and
                                        D12  D 2  D 22
                      Ȗ(2) =                                      V2 ,
                                 (1  D 2 ) [(1  D 2 ) 2  D12 ]
for the autocovariances of order one and two.
   The autocorrelations can be calculated accordingly. If we divide (2.23)
by the variance Ȗ(0) we get the linear homogenous second order difference
equation,
(2.25)                   ȡ(Ĳ) – Į1 ȡ(Ĳ-1) – Į2 ȡ(Ĳ-2) = 0
with the initial conditions ȡ(0) = 1 and ȡ(1) = Į1/(1 – Į2) for the autocorre-
lation function. Depending on the values of Į1 and Į2, AR(2) processes can
generate quite different developments, and, therefore, these processes can
show considerably different characteristics.

Example 2.4
Let us consider the AR(2) process
(E2.3)                     xt = 1 + 1.5 xt-1 – 0.56 xt-2 + ut
with a variance of ut of 1. Because the characteristic equation
                                 Ȝ2 – 1.5 Ȝ + 0.56 = 0
has the two roots Ȝ1 = 0.8 and Ȝ2 = 0.7, (E2.3) is stationary, given that we have
stochastic initial conditions. The expected value of this process is
                                         1
                           ȝ =                   . = 16.6 .
                                  1  1.5  0.56

The variance of (E2.3) can be calculated from (2.24) as Ȗ(0) = 19.31. A realisation
of this process (with 180 observations) is given in Figure 2.5 in which the (esti-
mated) mean was subtracted. Thus, the realisations fluctuate around zero, and the
process always tends to go back to the mean. This mean-reverting behaviour is a
typical property of stationary processes.
   Due to (2.25) we get
                  ȡ(Ĳ) – 1.5 ȡ(Ĳ-1) + 0.56 ȡ(Ĳ-2) = 0, Ĳ = 2, 3, ...,
                            with ȡ(0) = 1, ȡ(1) = 0.96
44    2 Univariate Stationary Processes

for the autocorrelation function. The general solution of this homogenous differ-
ence equation is
                            ȡ(Ĳ) = C1 (0.8)Ĳ + C2 (0.7)Ĳ ,
where C1 and C2 are two arbitrary constants. Taking into account the two initial
conditions we get
                             ȡ(Ĳ) = 2.6 (0.8)Ĳ – 1.6 (0.7)Ĳ
for the autocorrelation coefficients. This development is also expressed in Figure
2.5. The coefficients are always positive but strictly monotonically decreasing.
Initially, the estimated autocorrelogram using the given realisation is also mono-
tonically decreasing, but, contrary to the theoretical development, the values begin
to fluctuate from the tenth lag onwards. However, except for the coefficient for Ĳ =
16, the estimates are not significantly different from zero; they are all inside the
approximate 95 percent confidence interval indicated by the dotted lines.

The characteristic equations of stable autoregressive processes of second
or higher order can result in conjugate complex roots. In this case, the time
series exhibit dampened oscillations, which are shocked again and again
by the pure random process. The solution of the homogenous part of (2.12)
for conjugate complex roots can be represented by
                        xt = dt (C1 cos (f t) + C2 sin (f t))
with C1 and C2 again being arbitrary constants that can be determined by
using the initial conditions. The dampening factor
                                    d =       D 2

corresponds to the modulus of the two roots, and

                                             § D1 ·
                              f =     arccos ¨       ¸
                                             ¨ 2 D ¸
                                             ©     2 ¹
is the frequency of the oscillation. The period of the cycles is P = 2ʌ/f.
Processes with conjugate complex roots are well-suited to describe busi-
ness cycle fluctuations.

Example 2.5
Consider the AR(2) process
(E2.4)                      xt = 1.4 xt-1 – 0.85 xt-2 + ut,
with a variance of ut of 1. The characteristic equation
                                               2.1 Autoregressive Processes        45

                                Ȝ2 – 1.4 Ȝ + 0.85 = 0
has the two solutions Ȝ1 = 0.7 + 0.6i and Ȝ2 = 0.7- 0.6i. (‘i’ stands for the imagi-
nary unit: i2 = - 1.) The modulus (dampening factor) is d = 0.922. Thus, (E2.4)
with stochastic initial conditions and a mean of zero is stationary. According to
(2.24) the variance is given by Ȗ(0) = 8.433.
   A realisation of this process with 180 observations is given in Figure 2.6. Its
development is cyclical around its zero mean. For the autocorrelation function we
get
                  ȡ(Ĳ) – 1.4 ȡ(Ĳ-1) + 0.85 ȡ(Ĳ-2) = 0, Ĳ = 2, 3, ...,
                               ȡ(0) = 1, ȡ(1) = 0.76,
because of (2.25).
  The general solution is
                ȡ(Ĳ) = 0.922Ĳ (C1 cos (0.709 Ĳ) + C2 sin (0.709 Ĳ)) .
Taking into account the two initial conditions, we get for the autocorrelation coef-
ficients
                  ȡ(Ĳ) = 0.922Ĳ (cos (0.709 Ĳ) + 0.1 sin (0.709 Ĳ)) ,
with a frequency of f = 0.709.
   In case of quarterly data, this corresponds to a period length of about 9 quarters.
Both the theoretical and the estimated autocorrelations in Figure 2.6 show this
kind of dampened periodical behaviour.

Example 2.6
Figure 2.7 shows the development of the three months money market rate in
Frankfurt from the first quarter of 1970 to the last quarter of 1998 as well as the
autocorrelation and the partial autocorrelation functions explained in Section 2.1.4.
Whereas the autocorrelation function tends only slowly towards zero, the partial
autocorrelation function breaks off after two lags. As will be shown below, this
indicates an AR(2) process. For the period from 1970 to 1998, estimation with
OLS results in the following:
            GSRt = 0.577 + 1.407 GSRt-1 – 0.498 GSRt-2 + ût,.
                   (2.82) (17.49)        (-6.16)

            R 2 = 0.910, SE = 0.812, Q(6) = 6.431 (p = 0.377),
with t values being again given in parentheses. On the 0.1 percent level, both es-
timated coefficients of the lagged interest rates are significantly different from
zero. The autocorrelogram of the estimated residuals (given in Figure 2.7c) as
well as the Box-Ljung Q statistic which is calculated with 8 correlation coeffi-
cients (and 6 degrees of freedom) does not indicate any higher order process.
46   2 Univariate Stationary Processes



               xt
             10


              5


              0                                                          t


              -5


            -10
                                    a) Realisation

               UW
              1

            0.8

            0.6

            0.4

            0.2

              0                                                          W
                            5             10            15          20
            -0.2

            -0.4
                          b) Theoretical autocorrelation function

                   Uˆ W
               1

              0.8

              0.6

              0.4

              0.2

               0                                                         W
                            5             10            15          20
             -0.2

             -0.4
                          c) Estimated autocorrelation function
                             with confidence intervals



               Figure 2.5: AR(2) process with Į1 = 1.5, Į2= -0.56.
                                     2.1 Autoregressive Processes   47



   xt

  5



2.5



  0                                                         t


-2.5



 -5
           a) Realisation

  UW
   1
 0.8
 0.6
 0.4
 0.2
   0                                                            W
-0.2           5               10              15      20
-0.4
-0.6
-0.8
  -1       b) Theoretical autocorrelation function


  Uˆ W
   1
 0.8
 0.6
 0.4
 0.2
   0                                                            W
-0.2            5              10              15      20
-0.4
-0.6
-0.8
  -1       c) Estimated autocorrelation function
              with confidence intervals


Figure 2.6: AR(2) process with Į1 = 1.4 and Į2 = -0.85.
48    2 Univariate Stationary Processes




               Percent

                16
                14
                12
                10
                 8
                 6
                 4
                 2
                 0                                                                           year
                 1970         1975        1980       1985       1990       1995

                              a) Three months money market rate in Frankfurt
                                 1970 – 1998
                  Uˆ (W)
                  1
                0.8
                0.6
                0.4
                0.2
                  0                                                                     W
                -0.2                 5            10             15                20
                -0.4
                -0.6
                            b) Estimated autocorrelation (__) and partial
                -0.8
                               autocorrelation (·····) functions with confidence
                 -1            intervals

                  Uˆ (W)
                  1
                0.8
                0.6
                0.4
                0.2
                  0                                                                     W
                -0.2                 5            10             15            20
                -0.4
                -0.6
                -0.8          c) Estimated autocorrelation function of the
                 -1              residuals of the estimated AR(2) process
                                 with confidence intervals



     Figure 2.7: Three months money market rate in Frankfurt, 1970 – 1998.
                                               2.1 Autoregressive Processes      49

The two roots of the process are 0.70 ± 0.06i, i.e. they indicate cycles which are
strongly dampened. The modulus (dampening factor) is d = 0.706; the frequency
f = 0.079 corresponds to a period of 79.7 quarters and therefore of nearly 20 years.
Correspondingly, this oscillation cannot be detected in the estimated autocorrelo-
gram presented in Figure 2.7b.


2.1.3 Higher Order Autoregressive Processes

An AR(p) process can be described by the following stochastic difference
equation,
(2.26)             xt = į + Į1 xt-1 + Į2 xt-2 + ... + Įp xt-p + ut,
with Įp  0, where ut is again a pure random process with zero mean and
variance ı2. Using the lag operator we can also write:
(2.26')           (1 – Į1 L – Į2 L2 – ... – Įp Lp) xt = į + ut.
If we assume stochastic initial conditions, the AR(p) process in (2.26) is
stationary if the stability conditions are satisfied, i.e. if the characteristic
equation
(2.27)                 Ȝp – Į1 Ȝp-1 – Į2 Ȝp-2 – ... – Įp = 0
only has roots with absolute values smaller than one, or if the solutions of
the lag polynomial
(2.28)                 1 – Į1 L – Į2 L2 – ... – Įp Lp = 0
only have roots with absolute values larger than one.
   If the stability conditions are satisfied, we get the Wold representation
of the AR(p) process by the series expansion of the inverse lag polynomial,
                          1
                                          = 1 + ȥ1L + ȥ2L2 + ...
                 1  D1L  ...  D p Lp

as
                                                    f
                                     G
(2.29)               xt =                         ¦ \ ju t  j .
                              1  D1  ...  D p   j 0


Generalising the approach that was used to calculate the coefficients of the
AR(2) process, the series expansion can again be calculated by the method
of undetermined coefficients.
   From (2.29) we get the constant expectation as
50    2 Univariate Stationary Processes


                                            G
                          E[xt] =                       = ȝ.
                                     1  D1  ...  D p

Again, because of the stability condition, we get 1 – Į1 – Į2 – ... – Įp > 0.
   Without loss of generality we can set G = 0, i.e. P = 0, in order to calcu-
late the autocovariances. Because of Ȗ(Ĳ) = E[xt-Ĳ xt], we get according to
(2.26)
(2.30)            Ȗ(Ĳ) = E[xt-Ĳ (Į1 xt-1 + Į2 xt-2 + ... + Įp xt-p + ut)] .
For Ĳ = 0, 1, ... , p, it holds that
          J (0)        D1 J (1)      D 2 J (2)       "  D p J (p)      V2
          J (1)        D1 J (0)      D 2 J (1)       "  D p J (p  1)
(2.31)
          #
          J (p)        D1 J (p  1)  D 2 J (p  2)  "  D p J (0)

because of the symmetry of the autocovariances and because of E[xt-Ĳ ut] =
ı2 for W = 0 and zero for Ĳ > 0.
   This is a linear inhomogeneous equation system for given Įi to derive
the p + 1 unknowns Ȗ(0), Ȗ(1), ..., Ȗ(p). For Ĳ > p we get the linear homoge-
nous difference equation to calculate the autocovariances of order Ĳ > p:
(2.32)                 Ȗ(Ĳ) – Į1 Ȗ(Ĳ-1) – ... – Įp Ȗ(Ĳ-p)      =   0.
If we divide (2.32) by Ȗ(0) we get the corresponding difference equation to
calculate the autocorrelations:
(2.33)                  ȡ(Ĳ) – Į1 ȡ(Ĳ-1) – ... – Įp ȡ(Ĳ-p)     = 0.
The initial conditions ȡ(1), ȡ(2), ..., ȡ(p) can be derived from the so-called
Yule-Walker equations. We get those if we successively insert Ĳ = 1, 2, ...,
p in (2.33), or, if the last p equations in (2.31) are divided by Ȗ(0),

         ȡ(1)      =    Į1         + Į2 ȡ(1)       + Į3 ȡ(2)       + ... + Įp ȡ(p-1)
         ȡ(2)      =    Į1 ȡ(1)    + Į2            + Į3 ȡ(1)       + ... + Įp ȡ(p-2)
(2.34)   #
         ȡ(p)      =    Į1 ȡ(p-1) + Į2 ȡ(p-2) + Į3 ȡ(p-3) + ... + Įp
If we define ȡ' = (ȡ(1), ȡ(2), ..., ȡ(p)), Į' = (Į1, Į2, ..., Įp) and
                                              2.1 Autoregressive Processes   51


                       ª 1         U(1)    U(2)    " U(p  1) º
                       « U(1)       1       U(1)   " U(p  2) »»
               R      «
               pu p   « #                                     »
                      «                                       »
                      «¬U(p  1) U(p  2) U(p  3) "    1 »¼

we can write the Yule-Walker equations (2.34) in matrix form,
(2.35)                             ȡ = RĮ.
If the first p autocorrelation coefficients are given, the coefficients of the
AR(p) process can be calculated according to (2.35) as
(2.36)                            Į = R-1 ȡ .
Equations (2.35) and (2.36) show that there is a one-to-one mapping be-
tween the p coefficients Į and the first p autocorrelation coefficients ȡ of
an AR(p) process. If there is a generating pure random process, it is suffi-
cient to know either Į or ȡ to identify the AR(p) process. Thus, there are
two possibilities to describe the structure of an autoregressive process of
order p: the parametric representation that uses the parameters Į1, Į2, ..., Įp,
and the non-parametric representation with the first p autocorrelation coef-
ficients ȡ(1), ȡ(2), ..., ȡ(p). Both representations contain exactly the same
information. Which representation is used depends on the specific situa-
tion. We usually use the parametric representation to describe finite order
autoregressive processes (with known order).

Example 2.7
Let the fourth order autoregressive process
                         xt = Į4 xt-4 + ut, 0 < Į4 < 1,
be given, where ut is again white noise with zero mean and variance ı2. Applying
(2.31) we get:
                              Ȗ(0) = Į4 Ȗ(4) + ı2,
                              Ȗ(1) = Į4 Ȗ(3),
                              Ȗ(2) = Į4 Ȗ(2),
                              Ȗ(3) = Į4 Ȗ(1),
                              Ȗ(4) = Į4 Ȗ(0).
From these relations we get
52    2 Univariate Stationary Processes


                                        V2
                            Ȗ(0) =             ,
                                      1  D 24

                            Ȗ(1) = Ȗ(2) = Ȗ(3) = 0,
                                          V2
                            Ȗ(4) = Į4            .
                                        1  D 24

As can easily be seen, only the autocovariances with lag Ĳ = 4j, j = 1, 2, ... are dif-
ferent from zero, while all other autocovariances are zero. Thus, for Ĳ > 0 we get
the autocorrelation function

                             ­D j for W 4 j, j 1, 2, ...
                      ȡ(Ĳ) = ® 4                         .
                             ¯0         elsewhere.

Only every fourth autocorrelation coefficient is different from zero; the sequence
of these autocorrelation coefficients decreases monotonically like a geometric se-
ries. Employing such a model for quarterly data, this AR(4) process captures the
correlation between random variables that are distant from each other by a multi-
plicity of four periods, i.e. the structure of the correlations of all variables which
belong to the i-th quarter of a year, i = 1, 2, 3, 4, follows an AR(1) process while
the correlations between variables that belong to different quarters are always
zero. Such an AR(4) process provides a simple possibility of modelling seasonal
effects which typically influence the same quarters of different years. For empiri-
cal applications, it is advisable to first eliminate the deterministic component of a
seasonal variation by employing seasonal dummies and then to model the remain-
ing seasonal effects by such an AR(4) process.


2.1.4 The Partial Autocorrelation Function

Due to the stability conditions, autocorrelation functions of stationary fi-
nite order autoregressive processes are always sequences that converge to
zero but do not break off. This makes it difficult to distinguish between
processes of different orders when using the autocorrelation function. To
cope with this problem, we introduce a new concept, the partial autocorre-
lation function. The partial correlation between two variables is the corre-
lation that remains if the possible impact of all other random variables has
been eliminated. To define the partial autocorrelation coefficient, we use
the new notation,
                 xt = Ik1xt-1 + Ik2xt-2 + … + Ikkxt-k + ut,
where Iki is the coefficient of the variable with lag i if the process has or-
der k. (According to the former notation it holds that Įi = Iki i = 1,2,…,k.)
                                           2.1 Autoregressive Processes            53


The coefficients Ikk are the partial autocorrelation coefficients (of order k),
k = 1,2,… . The partial autocorrelation measures the correlation between xt
and xt-k which remains when the influences of xt-1, xt-2, ..., xt-k+1 on xt and
xt-k have been eliminated.
   Due to the Yule-Walker equations (2.35), we can derive the partial
autocorrelation coefficients Ikk from the autocorrelation coefficients if we
calculate the coefficients Ikk, which belong to xt-k, for k = 1, 2, ... from the
corresponding linear equation systems
 ª 1          U(1)    U(2) " U(k  1) º ªIk1 º             ªU(1) º
 « U(1)                                  « »               «U(2) »
 «             1      U(2) " U(k  2) »» «Ik 2 »           «       » , k = 1, 2, ... .
 « #                                   » «# »              «#      »
 «                                     »« »                «       »
 «¬U(k  1) U(k  2) U(k  3) " 1 »¼ «¬Ikk »¼              «¬U(k) »¼
With Cramer’s rule we get
                        1       U(1)  " U(1)
                       U(1)      1    " U(2)
                        #        #        #
                    U(k  1) U(k  2) " U(k)
(2.37)     Ikk                                  , k = 1, 2, ... .
                      1       U(1)   " U(k  1)
                     U(1)      1     " U(k  2)
                      #        #          #
                   U(k  1) U(k  2) "    1
Thus, if the Data Generation Process (DGP) is an AR(1) process, we get
for the partial autocorrelation function:
                 I11 = ȡ(1)
                          1   U(1)
                         U(1) U(2)         U(2)  U(1) 2
                 I22 =                 =                     = 0,
                          1 U(1)            1  U(1) 2
                         U(1) 1
because of ȡ(2) = ȡ(1)2. Generally, the partial autocorrelation coefficients
Ikk = 0 for k >1 in an AR(1) process.
   If the DGP is an AR(2) process, we get
54    2 Univariate Stationary Processes


                                   U(2)  U(1) 2
           I11 = ȡ(1), I22 =                     , Ikk = 0 for k > 2 .
                                    1  U(1) 2
The same is true for an AR(p) process: all partial autocorrelation coeffi-
cients of order higher than p are zero. Thus, for finite order autoregressive
processes, the partial autocorrelation function provides the possibility of
identifying the order of the process by the order of the last non-zero partial
autocorrelation coefficient. We can estimate the partial autocorrelation co-
efficients consistently by substituting the theoretical values in (2.37) by
their consistent estimates (1.10). For the partial autocorrelation coefficients
which have a theoretical value of zero, i.e. the order of which is larger than
the order of the process, we get asymptotically V[ Îkk ] = 1/T for k > p .

Example 2.8
The AR(1) process of Example 2.1 has the following theoretical partial autocorre-
lation function: I11 = ȡ(1) = Į and zero elsewhere. In this example, D takes on the
values 0.9, 0.5 and -0.9. The estimates of the partial autocorrelation functions for
the realisations in Figures 2.1 and 2.3 are presented in Figure 2.8. It is obvious for
both processes that these are AR(1) processes. The estimated value for the process
with Į = 0.9 is Î11 = 0.91, while all other partial autocorrelation coefficients are
not significantly different from zero. We get Î11 = -0.91 for the process with Į =
-0.9, while all estimated higher order partial autocorrelation coefficients do not
deviate significantly from zero.
   The AR(2) process of Example 2.4 has the following theoretical partial autocor-
relation function: I11 = 0.96, I22 = -0.56 and zero elsewhere. The realisation of this
process, which is given in Figure 2.5, leads to the empirical partial autocorrelation
function in Figure 2.8. It corresponds quite closely to the theoretical function; we
get Î11 = 0.95 and Î22 = -0.60 and all higher order partial autocorrelation coeffi-
cients are not significantly different from zero. The same holds for the AR(2)
process with the theoretical non-zero partial autocorrelations I11 = 0.76 and I22 =
-0.85 given in Example 2.5. We get the estimates Î11 = 0.76 and Î22 = -0.78,
whereas all higher order partial correlation coefficients are not significantly differ-
ent from zero.
                                   2.1 Autoregressive Processes   55



    Ikk
    1
  0.8
  0.6
  0.4
  0.2
    0                                                       k
 -0.2            5            10            15         20
 -0.4
 -0.6
 -0.8
           AR(1) process with D= 0.9
   -1
    Ikk
    1
  0.8
  0.6
  0.4
  0.2
    0                                                       k
 -0.2            5            10             15        20
 -0.4
 -0.6
 -0.8
           AR(1) process with D= -0.9
   -1
    Ikk
    1
  0.8
  0.6
  0.4
  0.2
    0                                                       k
 -0.2            5             10            15        20
 -0.4
 -0.6
 -0.8
           AR(2) process with D1= 1.5, D2= -0.56
   -1
    Ikk
    1
  0.8
  0.6
  0.4
  0.2
    0                                                       k
 -0.2            5             10            15        20
 -0.4
 -0.6
 -0.8
   -1      AR(2) process with D1= 1.4, D2= -0.85



Figure 2.8: Estimated partial autocorrelation functions
56    2 Univariate Stationary Processes

2.1.5 Estimating Autoregressive Processes

Under the assumption of a known order p we have different possibilities to
estimate the parameters:
(i)   If we know the distribution of the white noise process that generates
      the AR(p) process, the parameters can be estimated by using maxi-
      mum likelihood (ML) methods.
(ii) The parameters can also be estimated with the method of moments by
     using the Yule-Walker equations.
(iii) A further possibility is to treat

      (2.26)          xt = į + Į1 xt-1 + Į2 xt-2 + ... + Įp xt-p + ut,
      as a regression equation and apply the ordinary least squares (OLS)
      method for estimation. If (2.26) fulfils the stability conditions, OLS
      provides consistent estimates. Moreover, T (Gˆ  G) as well as
        T (Dˆ i  D i ) , i = 1, 2, ..., p, are asymptotically normally distributed.

If the order of the AR process is unknown, it can be estimated with the
help of information criteria. For this purpose, AR processes with succes-
sively increasing orders p = 1, 2, ..., pmax are estimated. Finally, the order
p* is chosen which minimises the respective criterion. The following crite-
ria are often used:
(i)   The final prediction error which goes back to HIROTUGU AKAIKE
      (1969)
                                     T  m 1 T (p) 2
                          FPE =            ¦ (uˆ t ) .
                                     Tm T t 1

(ii) Closely related to this is the Akaike information criterion (H. AKAIKE
     (1974))
                                      1 T (p) 2      2
                        AIC = ln       ¦
                                      Tt1
                                          (uˆ t )  m .
                                                     T

(iii) Alternatives are the Bayesian criterion of GIDEON SCHWARZ (1978)
                                     1 T (p) 2     ln T
                         SC = ln      ¦ (uˆ t )  m T
                                     Tt1

(iv) as well as the criterion developed by EDWARD J. HANNAN and
     BARRY G. QUINN (1979)
                                            2.2 Moving Average Processes         57


                                  1 T (p) 2     2 ln(ln T)
                      HQ = ln      ¦ (uˆ t )  m T .
                                  Tt1

 û (p)
    t   are the estimated residuals of the AR(p) process, while m is the number
of estimated parameters. If the constant term is estimated, too, m = p + 1
for an AR(p) process. These criteria are always based on the same princi-
ple: They consist of one part, the sum of squared residuals (or its loga-
rithm), which decreases when the number of estimated parameters in-
creases, and of a ‘punishment term’, which increases when the number of
estimated parameters increases. Whereas the first two criteria overestimate
the true order asymptotically, the two other criteria estimate the true order
of the process consistently.

Example 2.9
As in Example 2.6, we take a look at the development of the three months money
market interest rate in Frankfurt am Main. If, for this series, we estimate AR proc-
esses up to the order p = 4, we get the following results (for T = 116):
             p = 0: AIC = 4.8312, HQ = 4.8409, SC = 4.8549;
             p = 1: AIC = 2.7184, HQ = 2.7377, SC = 2.7659;
             p = 2: AIC = 2.4467, HQ = 2.4756, SC = 2.5179;
             p = 3: AIC = 2.4619, HQ = 2.5004, SC = 2.5569;
             p = 4: AIC = 2.4789, HQ = 2.5271, SC = 2.5975.
With all three criteria we get the minimum for p = 2. Thus, the optimal number of
lags is p* = 2, as used in Example 2.6.


2.2 Moving Average Processes

Moving average processes of an infinite order have already occurred when
we presented the Wold decomposition theorem. They are, above all, of
theoretical importance as, in practice, only a finite number of (different)
parameters can be estimated. In the following, we consider finite order
moving average processes. We start with the first order moving average
process and then discuss general properties of finite order moving average
processes.
58      2 Univariate Stationary Processes

2.2.1 First Order Moving Average Processes

The first order moving average process (MA(1)) is given by the following
equation:
(2.38)                           xt = ȝ + ut – ß ut-1 ,
or
(2.38')                           xt – ȝ = (l – ßL)ut ,
with ut again being a pure random process. The Wold representation of an
MA(1) process (as of any finite order MA process) has a finite number of
terms. In this special case, the Wold coefficients are ȥ0 = 1, ȥ1 = -ß and ȥj
= 0 for j  2. Thus, 6 \ 2j is finite for all finite values of ß, i.e. an MA(1)
                          j

process is always stationary.
  Taking expectations of (2.38) leads to
                      E[xt] = ȝ + E[ut] – ß E[ut-1] = ȝ .
The variance can also be calculated directly,
                     V[xt] = E[(xt – ȝ)2]
                               = E[(ut – ß ut-1)2]
                               = E[( u 2t – 2ß ut ut-1 + ß2 u 2t1 )]
                               = (1 + ß2) ı2 = Ȗ(0) .
Therefore, the variance is constant at any point of time.
  For the covariances of the process we get
     E[(xt – ȝ)(xt+Ĳ – ȝ)] = E[(ut – ß ut-1)(ut+Ĳ – ß ut+Ĳ -1)]
                              = E[(utut+Ĳ – ß utut+Ĳ –1 – ß ut-1ut+Ĳ + ß2 ut-1ut+Ĳ -1)] .
The covariances are different from zero only for Ĳ = ± 1, i.e. for adjoining
random variables. In this case
                                     Ȗ(1) = - ß ı2 .
Thus, for an MA(1) process, all autocovariances and therefore all autocorre-
lations with an order higher than one disappear, i.e. Ȗ(Ĳ) = ȡ(Ĳ) = 0 for Ĳ  2.
   The correlogram of an MA(1) process is
                                           E
               ȡ(0) = 1, ȡ(1) =                 ,    ȡ(Ĳ) = 0 for Ĳ  2.
                                         1  E2
                                           2.2 Moving Average Processes        59

If we consider ȡ(1) as a function of ß, ȡ(1) = f(ß), it holds that f(0) = 0 and
f(ß) = - f(-ß), i.e. that f(ß) is point symmetric to the origin, and that |f(ȕ)| 
0.5. f(ȕ) has its maximum at E = -1 and its minimum at E = 1. Thus, an
MA(1) process cannot have a first order autocorrelation above 0.5 or be-
low -0.5.
   If we know the autocorrelation coefficient ȡ(1) = ȡ1, for example, by es-
timation, we can derive (estimate) the corresponding parameter E by using
the equation for the first order autocorrelation coefficient,
                            (1 + ß2) ȡ1 + ß = 0 .
The quadratic equation can also be written as
                                   1
(2.39)                      ß2 +      ß + 1 = 0,
                                   U1
and it has the two solutions
                                    1
                      ß1,2 =             1 r 1  4U12     .
                                   2U1
Thus, the parameters of the MA(1) process can be estimated non-linearly
with the moments method: the theoretical moments are substituted by their
consistent estimates and the resulting equation is used for estimating the
parameters consistently.
   Because of |ȡ1|  0.5, the quadratic equation always results in real roots.
They also have the property that ß1ß2 = 1. This gives us the possibility to
model the same autocorrelation structure with two different parameters,
where one is the inverse of the other.
   In order to get a unique parameterisation, we require a further property
of the MA(1) process. We ask under which conditions the MA(1) process
(2.38) can have an autoregressive representation. By using the lag operator
representation (2.38') we get
                                    P        1
                         ut = –         +        xt .
                                   1 E   1  EL
An expansion of the series 1/(1 – ßL) is only possible for ŇȕŇ < 1 and re-
sults in the following AR() process
                            P
                ut = –          + xt + ß xt-1 + ß2 xt-2 + ...
                           1 E
or
60    2 Univariate Stationary Processes


                                                         P
                  xt + ß xt-1 + ß2 xt-2 + ... =              + ut
                                                        1 E
This representation requires the condition of invertibility (ŇȕŇ < 1). In this
case, we get a unique parameterisation of the MA(1) process. Applying the
lag polynomial in (2.38'), we can formulate the invertibility condition in
the following way: An MA(1) process is invertible if and only if the root
of the lag polynomial
                                   1 – ßL = 0
is larger than one in modulus.

Example 2.10
The following MA(1) process is given:
(E2.5)                    xt = İt – ß İt-1, İt ~ N(0, 22),
with ß = -0.5. For this process we get
                             E[xt] = 0,
                             V[xt] = (1 + 0.52)·4 = 5,
                                            0.5
                             ȡ(1) =                 = 0.4,
                                         1  0.52
                             ȡ(Ĳ) = 0 for Ĳ  2.
Solving the corresponding quadratic equation (2.39) for this value of ȡ(1) leads to
the two roots ß1 = -2.0 and ß2 = -0.5. If we now consider the process
(E2.5a)                   yt = Șt + 2 Șt-1, Șt ~ N(0, 1),
we obtain the following results:
                             E[yt] = 0,
                             V[yt] = (1 + 2.02)·1 = 5,
                                            2.0
                             ȡ(1) =                 = 0.4,
                                         1  2.02
                             ȡ(Ĳ) = 0 for Ĳ  2,
i.e. the variances and the autocorrelogram of the two processes (E2.5) and (E2.5a)
are identical. The only difference between them is that (E2.5) is invertible, be-
cause the invertibility condition ŇȕŇ< 1 holds, whereas (E2.5a) is not invertible.
Thus, given the structure of the correlations, we can choose the one of the two
processes that fulfils the invertibility condition, without imposing any restrictions
on the structure of the process.
                                         2.2 Moving Average Processes    61

With equation (2.37), the partial autocorrelation function of the MA(1)
process can be calculated in the following way:
      I11 = ȡ(1),
                 1 U(1)
                U(1) 0        U(1) 2
      I22 =             =             < 0,
                 1 U(1)     1  U(1) 2
                U(1) 1

                 1     U(1) U(1)
                U(1)    1    0
                 0     U(1) 0         U(1)3
      I33 =                      =             Q 0 for ß P 0,
                 1     U(1) 0      1  2U(1) 2
                U(1)    1 U(1)
                 0     U(1) 1

                 1     U(1) 0 U(1)
                U(1)    1 U(1) 0
                 0     U(1) 1  0
                 0      0 U(1) 0            U(1) 4
      I44 =                        =                          < 0,
                 1     U(1) 0  0     (1  U(1) 2 ) 2  U(1) 2
                U(1)    1 U(1) 0
                 0     U(1) 1 U(1)
                 0      0 U(1) 1
etc.
   If E is positive, ȡ(1) is negative and vice versa. This leads to the two
possible patterns of partial autocorrelation functions, exemplified by ß = ±
0.8:
              E = 0.8, Iii: {-0.49, -0.31, -0.22, -0.17, ... } ,
              E = -0.8, Iii: {0.49, -0.31, 0.22, -0.17, ... } .
Thus, contrary to the AR(1) process, the autocorrelation function of the
MA(1) process breaks off, while the partial autocorrelation function does
not.
62    2 Univariate Stationary Processes

Example 2.11
The time series which are discussed in this book are measured in discrete time,
with intervals of equal length. Exchange rates, for example, are normally quoted at
the end of each trading day. For econometric analyses, however, monthly, quar-
terly, or even annual data are used, rather than these daily values. Usually, aver-
ages or end-of-period data are used for temporal aggregation. Such an aggregation
might result in an MA(1) process, as shown by the following simple example as
well as by the time series of the exchange rate between the Swiss Franc and the
United States Dollar.
   Let x be a time series which follows a random walk,
                                               xt = xt-1 + ut ,
where u is again a pure random process. In the following, we consider the tempo-
ral aggregation over two time periods, i.e. we construct two different aggregated
series from these data, the end-of-period data
(E2.6a)                          yt     = xt
                                        = yt-2 + ut + ut-1,
as well as the temporal averages
                                  1
(E2.6b)              y t    =      (xt + xt-1)
                                  2
                                               1
                             = y t  2 +        ( ut + 2 ut-1 + ut-2) .
                                               2
Thus, the differences over the two periods of the end-of-period data follow an
MA(1) process
                                       ǻ2 yt    = ut + ut-1
                                                = Șt .
However, if we observe this series only every other period, with the autocovari-
ance function

                                          ­2 V2          for k 0
                        E(Șt · Șt – 2k) = ® u
                                          ¯ 0            elsewhere

we get a pure random process. Contrary to this, the differences over the two peri-
ods of the averaged data follow an MA(2) process

                                            1
                            ' 2 y t    =     ( ut + 2 ut-1 + ut-2)
                                            2
                                        = K t .
                                                2.2 Moving Average Processes       63

When observing this series only every other period, we get the autocovariance
function
                                              ­3 2
                                              ° V u for k 0
                                              °2
                                              °1
                      E( K t · K t  2k ) = ® V 2u for k 1 ,
                                              °4
                                              °
                                              ° 0     elsewhere
                                              ¯
and therefore an MA(1) process. The first order autocorrelation coefficient is ȡ =
1/6. Thus, we can describe this process in the following way:
(E2.7)                         ǻ2 y t   = u t – ȕ u t  2

with

               ȕ = – 1  1  4U 2 / 2U            = 2 2  3 | -0.172.

GEORGE C. TIAO (1972) showed that relation (E2.7) is independent of the number
of subperiods m that are included in the average. For m o f we get E o -0.268.

Example 2.12
Example 1.3 as well as Figure 1.8 present the end-of-month data of the Swiss
Franc and the U.S. Dollar over the period from January 1974 to December 2003.
The autocorrelogram of the first differences of this time series indicates that they
follow a pure random process. The tests we applied did not reject this null hy-
pothesis.
   If we use monthly averages instead of end-of-month data, the following MA(1)
process can be estimated for the first difference of the logarithms of this exchange
rate:
                    ǻln(et) = - 0.003 + ût + 0.340 ût-1,
                                 (-1.28)          (6.82)
           R 2 = 0.099, SE = 0.029, Q̂ (11) = 8.656 (p = 0.654),
with the t values again given in parentheses. ln(·) denotes the natural logarithm.
The estimated coefficient of the MA(1) term is highly significantly different from
zero. The Box-Ljung Q statistic indicates that there is no longer any significant
autocorrelation in the residuals. As m § 20 is relatively large (in this context), the
estimated values of the MA(1) term should not be too different from the theoreti-
cal value given by G.C. TIAO (1972). In fact, it does not significantly differ from
this value at the 5 percent level.
64    2 Univariate Stationary Processes

2.2.2 Higher Order Moving Average Processes

In general, the moving average process of order q (MA(q)) can be written
as
(2.40)          xt = ȝ + ut – ß1 ut-1 – ß2 ut-2 – ... – ßq ut-q
with ßq  0 and ut as a pure random process. Using the lag operator we get
(2.40')            xt – ȝ = (1 – ß1L – ß2L2 – ... – ßqLq)ut
                               = ß(L)ut .
From (2.40) we see that we already have a finite order Wold representation
with ȥk = 0 for k > q. Thus, there are no problems of convergence, and
every finite MA(q) process is stationary, no matter what values are used
for ßj, j = 1, 2, ..., q.
   For the expectation of (2.40) we immediately get E[xt] = ȝ. Thus, the
variance can be calculated as:
           V[xt] = E[(xt – ȝ)2]
                  = E[(ut – ß1 ut-1 – ... – ßq ut-q)2]
                  = E[( u 2t + E12 u 2t 1 + ... + Eq2 u 2t  q – 2ß1 utut-1 – ...
                         – 2 ßq-1ßq ut-q+1ut-q)] .
From this we obtain
                    V[xt] = (1 + E12 + E22 + ... + Eq2 ) ı2 .

For the covariances of order W we can write
          Cov[xt, xt+Ĳ] = E[(xt – ȝ)(xt+Ĳ – ȝ)]
                          = E[(ut – ß1 ut-1 – ... – ßq ut-q)
                             (ut+Ĳ – ß1 ut+Ĳ-1 – ... – ßq ut+Ĳ-q)]
                          = E[ut(ut+Ĳ – ß1 ut+Ĳ-1 – ... – ßq ut+Ĳ-q)
                             – ß1 ut-1(ut+Ĳ – ß1 ut+Ĳ-1 – ... – ßq ut+Ĳ-q)
                               #
                               – ßq ut-q(ut+Ĳ – ß1 ut+Ĳ-1 – ... – ßq ut+Ĳ-q)] .
Thus, for Ĳ = 1, 2, ..., q we get
                 Ĳ = 1: Ȗ(1) = (–ȕ1 + ȕ1 ȕ2 + ... + ȕq-1 ȕq)ı2,
                  Ĳ = 2: Ȗ(2) = (–ȕ2 + ȕ1 ȕ3 + ... + ȕq-2 ȕq)ı2,
(2.41)
                     #
                                           2.2 Moving Average Processes       65

                 Ĳ = q: Ȗ(1) = –ȕqı2,
while we have Ȗ(Ĳ) = 0 for Ĳ > q.
   Consequently, all autocovariances and autocorrelations with orders
higher than the order of the process are zero. It is – at least theoretically –
possible to identify the order of an MA(q) process by using the autocorre-
logram.
   It can be seen from (2.41) that there exists a system of non-linear equa-
tions for given (or estimated) second order moments that determines
(makes it possible to estimate) the parameters ß1, ..., ßq. As we have al-
ready seen in the case of the MA(1) process, such non-linear equation sys-
tems have multiple solutions, i.e. there exist different values for ß1, ß2, ...
and ßq that all lead to the same autocorrelation structure. To get a unique
parameterisation, the invertibility condition is again required, i.e. it must
be possible to represent the MA(q) process as a stationary AR() process.
Starting from (2.40'), this implies that the inverse operator ß-1(L) can be
represented as an infinite series in the lag operator, where the sum of the
coefficients has to be bounded. Thus, the representation we get is an
AR() process
                                      P
                          ut = –          + ß-1(L) xt
                                     E(1)
                                             f
                                      P
                              = –         + ¦ c jx t  j ,
                                     E(1)   j 0


where
             1 = (1 – ß1L – ... – ßqLq)( 1 + c1L + c2 L2 + ... ),
and the parameters ci, i = 1, 2, ... are calculated by using again the method
of undetermined coefficients. Such a representation exists if all roots of
                           1 – ß1L – ... – ßqLq = 0
are larger than one in absolute value.

Example 2.13
Let the following MA(2) process
                           xt = ut + 0.6 ut-1 – 0.1 ut-2
be given, with a variance of 1 given for the pure random process u. For the vari-
ance of x we get
                     V[xt] = (1 + 0.36 + 0.01)  1 = 1.37 .
66    2 Univariate Stationary Processes

Corresponding to (2.41) the covariances are
                              J(1) = + 0.6 – 0.06 = 0.54
                              J(2) = – 0.1                      .
                              J(W) = 0 for W > 2
This leads to the autocorrelation coefficients U(1) = 0.39 and U(2) = -0.07. To
check whether the process is invertible, the quadratic equation
                                1 + 0.6 L  0.1 L2 = 0
has to be solved. As the two roots -1.36 and 7.36 are larger than 1 in absolute
value, the invertibility condition is fulfilled, i.e. the MA(2) process can be written
as an AR() process
                       xt = (1 + 0.6 L – 0.1 L2) ut ,
                                       1
                       ut =                     xt
                               1  0.6L  0.1L2
                          = (1 + c1 L + c2 L2 + c3 L3 + }) xt .
The unknowns ci, i = 1, 2, ..., can be determined by comparing the coefficients in
the following way:
                1 = (1 + 0.6 L – 0.1 L2)(1 + c1 L + c2 L2 + c3 L3 + })
                1 = 1 + c1 L +            c2 L2 +        c3 L3 + }
                        + 0.6 L + 0.6 c1 L2 + 0.6 c2 L3 + }
                                       0.1 L2  0.1 c1 L3  }
It holds that
                               c1 + 0.6      = 0  c1 =         0.60,
                     c2 + 0.6 c1 – 0.1       = 0  c2 =             0.46,
                     c3 + 0.6 c2 – 0.1 c1 = 0  c3 = 0.34,
                     c4 + 0.6 c3 – 0.1 c2 = 0  c4 =                0.25,
                                                     #                 .
Thus, we get the following AR(f) representation
           xt – 0.6 xt-1 + 0.46 xt-2 – 0.34 xt-3 + 0.25 xt-4  } = ut .
Similarly to the MA(1) process, the partial autocorrelation function of the MA(q)
process does not break off. As long as the order q is finite, the MA(q) process is
stationary whatever its parameters are. If the order tends towards infinity, how-
ever, for the process to be stationary the series of the coefficients has to converge
just like in the Wold representation.
                                                       2.3 Mixed Processes         67


2.3 Mixed Processes

If we take a look at the two different functions that can be used to identify
autoregressive and moving average processes, we see from Table 2.1 that
the situation in which neither of them breaks off can only arise if there is
an MA() process that can be inverted to an AR() process, i.e. if the
Wold representation of an AR() process corresponds to an MA() proc-
ess. However, as pure AR or MA representations, these processes cannot
be used for empirical modelling because they can only be characterised by
means of infinitely many parameters. After all, according to the principle
of parsimony, the number of estimated parameters should be as small as
possible when applying time series methods.


          Table 2.1: Characteristics of the Autocorrelation and the Partial
                     Autocorrelation Functions of AR and MA Processes

                        autocorrelation function         partial autocorrelation
                                                                 function

    MA(q)                  breaks off with q               does not break off

     AR(p)                does not break off               breaks off with p


In the following, we introduce processes which contain both an autoregres-
sive (AR) term of order p and a moving average (MA) term of order q.
Hence, these mixed processes are denoted as ARMA(p,q) processes. They
enable us to describe processes in which neither the autocorrelation nor the
partial autocorrelation function breaks off after a finite number of lags.
Again, we start with the simplest case, the ARMA(1,1) process, and con-
sider the general case afterwards.


2.3.1 ARMA(1,1) Processes

An ARMA(1,1) process can be written as follows,
(2.42)                    xt = į + Į xt-1 + ut – ß ut-1 ,
or, by using the lag operator
(2.42')                   (1 – ĮL) xt = į + (1 – ßL) ut ,
68   2 Univariate Stationary Processes

where ut is a pure random process. To get the Wold representation of an
ARMA(1,1) process, we solve (2.42') for xt,
                                 G     1  EL
                        xt =         +        ut .
                                1 D   1  DL
It is obvious that Į  ȕ must hold, because otherwise xt would be a pure
random process fluctuating around the mean ȝ = į/(1 – Į). The ȥj, j = 0, 1,
..., can be determined as follows:
         1  EL
                = ȥ0 + ȥ1L + ȥ2L2 + ȥ3L3 + …
         1  DL

          1 – ȕL = (1 – ĮL)( ȥ0 + ȥ1L + ȥ2L2 + ȥ3L3 + …)

          1 – ȕL = ȥ0 + ȥ1L + ȥ2L2 + ȥ3L3 + …
                      – Įȥ0L – Įȥ1L2 – Įȥ2L3 – … .
Comparing the coefficients of the two lag polynomials we get
                 L0: ȥ0 = 1
                 L1: ȥ1 – Įȥ0 = – ß  ȥ1 = Į – ß
                 L2: ȥ2 – Įȥ1 = 0         ȥ2 = Į (Į – ß)
                 L3: ȥ3 – Įȥ2 = 0         ȥ3 = Į2(Į – ß)
                 #
                 Lj: ȥj – Įȥj-1 = 0       ȥj = Įj-1(Į – ß) .
The ȥj, j  2 can be determined from the linear homogenous difference
equation
                                ȥj – Įȥj-1 = 0
with ȥ1 = Į – ß as initial condition. The ȥj converge towards zero if and
only if |Į| < 1. This corresponds to the stability condition of the AR term.
Thus, the ARMA(1,1) process is stationary if, with stochastic initial condi-
tions, it has a stable AR(1) term. The Wold representation is
               G
(2.43) xt =        + ut + (Į – ß) ut-1 + Į (Į – ß) ut-2 + Į2(Į – ß) ut-3 + ... .
              1 D
Thus, the ARMA(1,1) process can be written as an MA() process.
   To invert the MA(1) part, |ß| < 1 must hold. Starting from (2.42') leads
to
                                                      2.3 Mixed Processes        69


                                   G    1  DL
                          ut =         +        xt .
                                  1 E   1  EL
If 1/(1 – ßL) is developed into a geometric series we get
              G
    ut =          + (1 – ĮL)(1 + ßL + ß2L2 + ... ) xt
             1 E
              G
         =        + xt + (ß – Į) xt-1 + ß(ß – Į) xt-2 + ß2(ß – Į) xt-3 + ... .
             1 E
This proves to be an AR() representation. It shows that the combination
of an AR(1) and an MA(1) term leads to a process with both MA() and
AR() representation if the AR term is stable and the MA term invertible.
   We obtain the first and second order moments of the stationary process
in (2.42) as follows:
                     E[xt] = E[į + Į xt-1 + ut – ß ut-1]
                            = į + Į E[xt-1] .
Due to E[xt] = E[xt-1] = ȝ , we get
                                          G
                                 ȝ =          ,
                                         1 D
i.e. the expectation is the same as in an AR(1) process.
   If we set į = 0 without loss of generality, the expectation is zero. The
autocovariance of order W  0 can then be written as
(2.44)             E[xt-Ĳxt] = E[xt-Ĳ(Į xt-1 + ut – ß ut-1)],
which leads to
                    Ȗ(0) = Į Ȗ(1) + E[xtut] – ȕ E[xtut-1]
for W = 0. Due to (2.43), E[xtut] = ı2 and E[xtut-1] = (Į – ß) ı2. Thus, we can
write
(2.45)                Ȗ(0) = Į Ȗ(1) + (1 – ß(Į – ß)) ı2.
(2.44) leads to
                   Ȗ(1) = Į Ȗ(0) + E[xt-1ut] – ȕ E[xt-1ut-1]
for W = 1. Because of (2.43) this can be written as
(2.46)                       Ȗ(1) = Į Ȗ(0) – ß ı2 .
70    2 Univariate Stationary Processes

If we insert (2.46) in (2.45) and solve for Ȗ(0), the resulting variance of the
ARMA(1,1) process is
                                     1  E2  2DE 2
(2.47)                     Ȗ(0) =                ı.
                                         1  D2
Inserting this into (2.46), we get
                                     (D  E)(1  DE) 2
(2.48)                     Ȗ(1) =                    ı
                                         1  D2
for the first order autocovariance. For Ĳ  2, (2.44) results in the autoco-
variances
(2.49)                          Ȗ(Ĳ) = Į Ȗ(Ĳ-1)
and the autocorrelations
(2.50)                         ȡ(Ĳ) = Į ȡ(Ĳ-1) .
This results in the same difference equation as in an AR(1) process but,
however, with the different initial condition
                                     (D  E)(1  DE)
                           ȡ(1) =                    .
                                      1  E2  2DE
The first order autocorrelation coefficient is influenced by the MA term,
while the higher order autocorrelation coefficients develop in the same
way as in an AR(1) process.
   If the process is stable and invertible, i.e. for |Į| < 1 and |ß| < 1, the sign
of ȡ(1) is determined by the sign of (Į – ß) because of (1 + ß2 – 2Įß) > 0
and (1 – Įß) > 0. Moreover, it follows from (2.49) that the autocorrelation
function – as in the AR(1) process – is monotonic for Į > 0 and oscillating
for Į < 0. Due to |Į| < 1 with Ĳ increasing, the autocorrelation function also
decreases in absolute value.
   Thus, the following typical autocorrelation structures are possible:
(i)   Į > 0 and Į > ß: The autocorrelation function is always positive.
(ii) Į > 0 and Į < ß: The autocorrelation function is negative from ȡ(1)
     onwards.
(iii) Į < 0 and Į > ß: The autocorrelation function oscillates; the initial
      condition ȡ(1) is positive.
(iv) Į < 0 and Į < ß: The autocorrelation function oscillates; the initial
     condition ȡ(1) is negative.
                                                      2.3 Mixed Processes   71




              UW
              1
            0.8
            0.6
            0.4
            0.2
              0                                                       W
           -0.2           5           10               15        20
           -0.4
           -0.6
           -0.8                  D E 
             -1
              UW
              1
            0.8
            0.6
            0.4
            0.2
              0                                                       W
           -0.2           5           10              15         20
           -0.4
           -0.6
           -0.8                  D E 
             -1
              UW
              1
            0.8
            0.6
            0.4
            0.2
              0                                                       W
           -0.2           5           10              15         20
           -0.4
           -0.6
           -0.8                  D E 
             -1
              UW
              1
            0.8
            0.6
            0.4
            0.2
              0                                                       W
           -0.2           5           10               15        20
           -0.4
           -0.6
           -0.8                  D E 
             -1



Figure 2.9: Theoretical autocorrelation functions of ARMA(1,1) processes
72    2 Univariate Stationary Processes

Figure 2.9 shows the development of the corresponding autocorrelation
functions up to W = 20 for the parameter values Į, ß  {0.8, 0.5, -0.5, -0.8}
in which, of course, Į  ß must always hold, as otherwise the ARMA(1,1)
process degenerates to a pure random process.
   For the partial autocorrelation function we get
                              (D  E)(1  DE)
         I11 = ȡ(1) =                         ,
                               1  E2  2DE

                     1     U(1)
                   U(1) U(2)   U(2)  U(1) 2   U(1)(D  U(1))
         I22 =               =           2
                                             =                ,
                    1 U(1)      1  U(1)         1  U(1) 2
                   U(1) 1
because of ȡ(2) = Į ȡ(1),
                  1        U(1) U(1)        1     U(1) U(1)
                 U(1)       1 U(2)         U(1)    1      DU(1)
                 U(2)      U(1) U(3)      DU(1) U(1) D 2U(1)
         I33   =                     =
                  1        U(1) U(2)   1  2DU(1)3  U(1) 2 (2  D 2 )
                 U(1)       1   U(1)
                 U(2)      U(1)  1

                         U(1)(D  U(1)) 2
               =                                   , etc.
                   1  2DU(1)3  U(1) 2 (2  D 2 )
Thus, the ARMA(1,1) process is a stationary stochastic process where nei-
ther the autocorrelation nor the partial autocorrelation function breaks off.
   The following example shows how, due to measurement error, an
AR(1)-process becomes an ARMA(1,1) process.

Example 2.14
The ‘true’ variable x t is generated by a stationary AR(1) process,

(E2.8)                            x t = Į x t 1 + ut ,

but it can only be measured with an error vt, i.e. for the observed variable xt it
holds that
(E2.9)                              xt = x t + vt ,
                                                           2.3 Mixed Processes   73

where vt is a pure random process uncorrelated with the random process ut. (The
same model was used in Example 2.3 but with a different interpretation.) If we
transform (E2.8) to
                                                 ut
                                   x t   =
                                              1  DL

and insert it into (E2.9) we get
                          (1 – ĮL) xt = ut + vt – Į vt-1 .
For the combined error term ȗt = ut + vt – Į vt-1 we get
                            Ȗȗ(0) = V 2u + (1 + Į2) V 2v

                            Ȗȗ(1) = - Į V 2v

                            Ȗȗ(Ĳ) = 0 for Ĳ  2,
or
                                  DV2v
                ȡȗ(1) =                         , ȡȗ(Ĳ) = 0 for Ĳ  2.
                          V 2u  (1  D 2 ) V2v

Thus, the observable variable xt follows an ARMA(1,1) process,
                            (1 – Į L) xt = (1 – ß L) Șt ,
where ß can be calculated by means of ȡȗ(1) and Șt is a pure random process. (See
also the corresponding results in Section 2.2.1.)


2.3.2 ARMA(p,q) Processes

The general autoregressive moving average process with AR order p and
MA order q can be written as
(2.51) xt = į + Į1 xt-1 + ... + Įp xt-p + ut – ß1 ut-1 – ... – ßq ut-q ,
with ut being a pure random process and Įp  0 and ßq  0 having to hold.
Using the lag operator, we can write
(2.51')    (1 – Į1L – ... – ĮpLp) xt = į + (1 – ß1L – ... – ßqLq) ut ,
or
(2.51'')                     Į(L) xt = į + ß(L) ut .
As factors that are common in both polynomials can be reduced, Į(L) and
ß(L) cannot have identical roots. The process is stationary if – with sto-
chastic initial conditions – the stability conditions of the AR term are ful-
74     2 Univariate Stationary Processes

filled, i.e. if Į(L) only has roots that are larger than 1 in absolute value.
Then we can derive the Wold representation for which
                     ß(L) = Į(L)(1 + ȥ1L + ȥ2 L2 + ... )
must hold. Again, the ȥj, j = 1, 2, ..., can be calculated by comparing the
coefficients. If, likewise, all roots of ß(L) are larger than 1 in absolute
value, the ARMA(p,q) process is also invertible.
   A stationary and invertible ARMA(p,q) process may either be repre-
sented as an AR() or as an MA() process. Thus, neither its autocorrela-
tion nor its partial autocorrelation function breaks off. In short, it is possi-
ble to generate stationary stochastic processes with infinite AR and MA
orders by using only a finite number of parameters.
   Under the assumption of stationarity, (2.51) directly results in the con-
stant mean
                                                   G
                        E[xt] = ȝ =                         .
                                           1  D1  !  D p

If, without loss of generality, we set į = 0 and thus also ȝ = 0, we get the
following relation for the autocovariances:
     Ȗ(Ĳ) = E[xt-Ĳxt]
           = E[xt-Ĳ(Į1 xt-1 + ... + Įp xt-p + ut – ß1 ut-1 – ... – ßq ut-q)] .
This relation can also be written as
        Ȗ(Ĳ) = Į1 Ȗ(Ĳ-1) + Į2 Ȗ(Ĳ-2) + ... + Įp Ȗ(Ĳ-p)
                   + E[xt-Ĳut] – ß1 E[xt-Ĳut-1] – ... – ßq E[xt-Ĳut-q] .
Due to the Wold representation, the covariances between xt-Ĳ and ut-i, i = 0,
..., q, are zero for Ĳ > q, i.e. the autocovariances for Ĳ > q and Ĳ > p are gen-
erated by the difference equation of an AR(p) process,
     Ȗ(Ĳ) – Į1 Ȗ(Ĳ-1) – Į2 Ȗ(Ĳ-2) – ... – Įp Ȗ(Ĳ-p) = 0 for Ĳ > q  Ĳ > p
whereas the first q autocovariances are also influenced by the MA part.
Normalisation with Ȗ(0) leads to exactly the same results for the autocorre-
lations.
   If the orders p and q are given and the distribution of the white noise
process ut is known, the parameters of an ARMA(p,q) process can be esti-
mated consistently by using maximum likelihood methods. These esti-
mates are also asymptotically efficient. If there is no such programme
available, it is possible to estimate the parameters consistently with least
squares. As every invertible ARMA(p,q) process is equivalent to an AR()
process, first of all an AR(k) process is estimated with k sufficiently larger
                                                           2.4 Forecasting      75

than p. From this, one can get estimates of the non-observable residuals ût.
By employing these residuals, the ARMA(p,q) process can be estimated
with the least squares method,
     xt = į + Į1 xt-1 + ... + Įp xt-p – ß1 ût-1 – ... – ßq ût-q + vt .
This approach can also be used if p and q are unknown. These orders can,
for example, be determined by using the information criteria shown in Sec-
tion 2.1.5.

Example 2.15
Figure 2.10 shows the development of the US three months money market rate
(USR) as well as the estimated autocorrelation and partial autocorrelation function
of this time series for the period from March 1994 to August 2003 (114 observa-
tions). The following ARMA(1,1) model has been estimated for this time series:
            ǻUSRt =      – 0.006 + 0.831 ǻUSRt-1 + ût – 0.457 ût-1,.
                         (-0.73) (10.91)               (-3.57)
            R 2 = 0.351, SE = 0.166, Q(10) = 7.897 (p = 0.639).
The AR(1) as well as the MA(1) terms are different from zero at the 0.1 percent
significance level. The autocorrelogram of the estimated residuals, which is also
given in Figure 2.10, as well as the Box-Ljung Q statistic, which is calculated for
this model with 12 autocorrelation coefficients (i.e. with 10 degrees of freedom),
do not provide any evidence of a higher order process.



2.4 Forecasting

As mentioned in the introduction, in the 1970’s, one of the reasons for the
broad acceptance of time series analysis using the Box-Jenkins approach
was the fact that forecasts with this comparably simple method often
outperformed forecasts generated by large econometric models. In the fol-
lowing, we show how ARMA models can be used for making forecasts
about the future development of time series. In doing so, we assume that
all observations of the time series up to time t are known.


2.4.1 Forecasts with Minimal Mean Squared Errors

We want to solve the problem of making a W-step ahead forecast for xt with
a linear prediction function, given a stationary and/or invertible data gen-
erating process.
76   2 Univariate Stationary Processes



            Percent
               8
               7
               6
               5
               4
               3
               2
               1
               0                                                                        year
                     1994         1996        1998        2000        2002

              UW              a) New York three months money market rate,
                                 1994 – 2003
              1
            0.8
            0.6
            0.4
            0.2
              0                                                                     W
            -0.2                   5             10              15           20
            -0.4
            -0.6
                            b) Estimated autocorrelation (—–) and partial (·····)
            -0.8
                               autocorrelation functions of the first differences
             -1                with confidence intervals
              Uˆ W
              1
            0.8
            0.6
            0.4
            0.2
              0                                                                     W
            -0.2                   5             10              15           20
            -0.4
            -0.6
            -0.8              c) Autocorrelation function of the residuals
             -1                  of the estimated ARMA(1,1)-process
                                 with confidence intervals



 Figure 2.10: Three months money market rate in New York, 1994 – 2003
                                                                             2.4 Forecasting   77


   Let x̂ t(Ĳ) be such a prediction function for xt+Ĳ. Thus, x̂ t(Ĳ) is a random
variable for given t and W. As all stationary ARMA processes have a Wold
representation, we assume the existence of such a representation without
loss of generality. Thus,
                                  f                               f
                    xt = ȝ + ¦ \ j u t  j , ȥ0 = 1,             ¦\      2
                                                                         j       < ,
                                 j 0                              j 0


where ut is a pure random process with the usual properties E[ut] = 0,
                                                    ­V 2   for t s
                                E[utus] =           ®                .
                                                    ¯0     for t z s
Therefore, it also holds that
                                            f
(2.52)                  xt+Ĳ = ȝ + ¦ \ j u t W j , Ĳ = 1, 2, ... .
                                          j 0


For a linear prediction function with the information given up to time t, we
assume the following representation
                                                f
(2.53)                 x̂ t (Ĳ) = ȝ + ¦ TkW u t  k , Ĳ = 1, 2, ... .
                                            k 0


where the TWk , k = 0, 1, 2, ..., are unknown. The forecast error of a W-step
forecast is ft(Ĳ) = xt+Ĳ – x̂ t (Ĳ), Ĳ = 1, 2, ..., . In order to make a good fore-
cast, these errors should be small. The expected quadratic forecast error
E[(xt+Ĳ – x̂ t (Ĳ))2], which should be minimised, is used as the criterion to
determine the unknowns TWk . Taking into account (2.52) and (2.53) we can
write
                                                   2
                 ª§ f                 f           · º
  E [ f (Ĳ)] = E «¨ ¦ \ ju t W j  ¦ Tk u t  k ¸ »
         t
          2                              W

                 «¬© j 0             k 0          ¹ »¼
                                                                                            2
                       ª§                                          f
                                                                                           · º
                   = E «¨ u t W  \1u t W1  !  \ W1u t 1  ¦ (\ W k  TWk )u t  k ¸ » .
                       «¬©                                        k 0                      ¹ »¼

From this it follows that
                                                                             f             2

(2.54)        E [ f t2 (Ĳ)] =     1  \12  !  \ 2W1 V 2  V 2 ¦ \ W k  TkW .
                                                                         k 0
78     2 Univariate Stationary Processes


The variance of the forecast error reaches its minimum if we set TWk = ȥĲ+k
for k = 0, 1, 2, ..., . Thus, we get the optimal linear prediction function for
a W-step ahead forecast from (2.53), as
                                     f
(2.55)            x̂ t (Ĳ) = ȝ + ¦ \ W k u t  k , Ĳ = 1, 2, ... .
                                    k 0

For the conditional expectation of ut+s, given ut, ut-1, …, it holds that
                                          ­u         for s d 0
                  E[ut+s|ut, ut-1, ...] = ® t  s                   .
                                          ¯ 0        for s ! 0
Thus, we get the conditional expectation of xt+Ĳ, because of (2.52), as
                                                    f
                   E[xt+Ĳ|ut, ut-1, ...] = ȝ + ¦ \ W k u t  k .
                                                    k 0

Due to (2.55), the conditional expectation of xt+Ĳ, with all information
available at time t given, is identical to the optimal prediction function.
This leads to the following result: The conditional expectation of xt+Ĳ, with
all information up to time t given, provides the W-step forecast with mini-
mal mean squared prediction error.
   With (2.52) and (2.55) the W-step forecast error can be written as
(2.56) ft(Ĳ) = xt+Ĳ – x̂ t (Ĳ) = ut+Ĳ + ȥ1ut+Ĳ-1 + ȥ2ut+Ĳ-2 + ... + ȥĲ-1ut+1
with
                     E[ft(Ĳ)|ut, ut-1, ...] = E[ft(Ĳ)] = 0 .
From these results we can immediately draw some conclusions:
1. Best linear unbiased predictions (BLUP) of stationary ARMA proc-
   esses are given by the conditional expectation for xt+ Ĳ , Ĳ = 1,2, …

                     x̂ t (Ĳ) = E[xt+Ĳ|xt, xt-1, ...] = Et[xt+Ĳ] .
2. For the one-step forecast errors (Ĳ = 1), ft(1) = ut+1, we get

                         E[ft(1)] = E[ut+1] = 0, and
                                              ­V 2          for t s
                E[ft(1)fs(1)] = E[ut+1us+1] = ®                       .
                                              ¯0            for t z s
     The one-step forecast errors are a pure random process; they are identi-
     cal with the residuals of the data generating process. If the one-step
                                                           2.4 Forecasting     79

   prediction errors were correlated, the prediction could be improved by
   using the information contained in the prediction errors. In such a case,
   however, x̂ t (1) would not be an optimal forecast.

3. For the W-step forecast errors (Ĳ > 1) we get
                ft(Ĳ) = ut+Ĳ + ȥ1ut+Ĳ-1 + ȥ2ut+Ĳ-2 + ... + ȥĲ-1ut+1 ,
   i.e. they follow an MA(W-1) process with E[ft(Ĳ)] = 0 and the variance
   (2.57)            V[ft(Ĳ)] =     1  \12  !  \ 2W1   V2 .

   This variance can be used for constructing confidence intervals for W-
   step forecasts. However, these intervals are too narrow for practical ap-
   plications because they do not take into account the uncertainty in the
   estimation of the parameters ȥi, i = 1, 2, ..., Ĳ-1.
4. It follows from (2.57) that the forecast error variance increases mono-
   tonically with increasing forecast horizon W:
                             V[ft(Ĳ)]  V[ft(Ĳ-1)] .
5. Due to (2.57) we get for the limit
                                                              f
    lim V[ft(Ĳ)] = lim 1  \12  !  \ 2W1 ı2 = ı2 ¦ \ 2j              = V[xt] ,
    Wof               Wof
                                                              j 0


   i.e. the variance of the W-step forecast error is not larger than the vari-
   ance of the underlying process.

6. The following variance decomposition follows from (2.55) and (2.56):
   (2.58)              V[xt+Ĳ] = V[ x̂ t (Ĳ)] + V[ft(Ĳ)] .
7. Furthermore,
                                      f
                               §                      ·
            lim xˆ t (Ĳ) = lim ¨ P  ¦ \ W k u t  k ¸ = ȝ = E[xt] ,
            Wof            Wof
                               ©     k 0              ¹
   i.e. for increasing forecast horizons, the forecasts converge to the (un-
   conditional) mean of the series.
8. The concept of ‘weak’ rational expectations whose information set is
   restricted to the current and past values of a variable exactly corre-
   sponds to the optimal prediction approach used here.
80    2 Univariate Stationary Processes

2.4.2 Forecasts of ARMA(p,q) Processes

The Wold decomposition employed in the previous section has advantages
when it comes to the derivation of theoretical results, but it is not practi-
cally useful for forecasting. Thus, in the following, we will discuss fore-
casts directly using AR, MA, or ARMA representations.

Forecasts with a Stationary AR(1) Process

For this process, it holds that
                             xt = į + Į xt-1 + ut ,
with |Į| < 1. The optimal W-step-forecast is the conditional mean of xt+Ĳ, i.e.
            Et[xt+Ĳ] = Et[į + Į xt+Ĳ-1 + ut+Ĳ] = į + Į Et[xt+Ĳ-1] .
Due to the first conclusion, we get the following first order difference
equation for the prediction function
                          x̂ t (Ĳ) = į + Į x̂ t (Ĳ-1) ,
which can be solved recursively:
     W = 1: x̂ t (1) = į + Į x̂ t (0) = į + Į xt
     W = 2: x̂ t (2) = į + Į x̂ t (1) = į + Į į + Į2 xt

              #
              x̂ t (W) = į(1 + Į + ... + ĮĲ-1) + ĮĲ xt

                          1  DW               G               G
             x̂ t (W) =          į + ĮĲ x t =      + ĮĲ (xt –      ).
                          1 D                1 D            1 D
As ȝ = į/(1 – Į) is the mean of a stationary AR(1) process,
             x̂ t (W) = ȝ + ĮĲ (xt – ȝ) with lim xˆ t (W) = ȝ ,
                                                  Wof


i.e., with increasing forecast horizon W, the predicted values of an AR(1)
process converge geometrically to the unconditional mean P of the proc-
ess. The convergence is monotonic if Į is positive, and oscillating if Į is
negative.
   To calculate the W-step prediction error, the Wold representation, i.e. the
MA() representation of the AR(1) process, can be used,
              xt = ȝ + ut + Į ut-1 + Į2 ut-2 + Į3 ut-3 + ... .
                                                           2.4 Forecasting   81

Due to (2.56) and (2.57) we get the MA(Ĳ-1) process
             ft(Ĳ) = ut+Ĳ + Į ut+Ĳ-1 + Į2 ut+Ĳ-2 + ... + ĮĲ-1 ut+1
for the forecast error with the variance
                                                           1  D2W 2
            V[ft(Ĳ)] =      1  D 2  !  D 2( W1) ı2 =           ı.
                                                           1  D2
With increasing forecast horizons, it follows that
                                           V2
                     lim V[ft(Ĳ)] =               = V[xt] ,
                      Wof                1  D2
i.e. the prediction error variance converges to the variance of the AR(1)
process.

Forecasts with Stationary AR(p) Processes

Starting with the representation
             xt = į + Į1 xt-1 + Į2 xt-2 + ... + Įp xt-p + ut ,
the conditional mean of xt+Ĳ is given by
             Et[xt+Ĳ] = į + Į1 Et[xt+ Ĳ-1] + ... + Įp Et[xt+ Ĳ-p] .
Here,
                                  ­ x̂ (s) for s ! 0
                       Et[xt+s] = ® t                 .
                                  ¯ x t  s for s d 0
Thus, the above difference equation can be solved recursively:
     W = 1: x̂ t (1) = į + Į1 xt + Į2 xt-1 + ...+ Įp xt+1-p

     W = 2: x̂ t (2) = į + Į1 x̂ t (1) + Į2 xt + ... + Įp xt+2-p , etc.


Forecasts with an Invertible MA(1) Process

For this process, it holds that
                             xt = ȝ + ut – ȕ ut-1
with |ß| < 1. The conditional mean of xt+Ĳ is
                   Et[xt+Ĳ] = ȝ + Et[ut+Ĳ] – ȕ Et[ut+Ĳ-1] .
For W = 1, this leads to
82    2 Univariate Stationary Processes


(2.59)                        x̂ t (1) = ȝ – ȕ ut ,
and for W  2, we get
                                   x̂ t (Ĳ) = ȝ ,
i.e. the unconditional mean is the optimal forecast of xt+Ĳ, Ĳ = 2, 3, ..., . For
the W-step prediction errors and their variances we get:
           ft(1) = ut+1,                 V[ft(1)] = ı2
           ft(2) = ut+2 – ß ut+1,        V[ft(2)] = (1 + ß2) ı2

             #                               #
           ft(W) = ut+Ĳ – ß ut+Ĳ-1,      V[ft(W)] = (1 + ß2) ı2 .
To be able to perform the one-step forecasts (2.59), the unobservable vari-
able u has to be expressed as a function of the observable variable x. To do
this, it must be taken into account that for s  t, the one-step forecast errors
can be written as
(2.60)                          us = xs – x̂ s 1 (1).
For t = 0, we get from (2.59)
                                x̂ 0 (1) = ȝ – ß u0
with the non-observable but fixed u0. Taking (2.60) into account, we get
for t = 1
        x̂1 (1) = ȝ – ß u1 = ȝ – ß (x1 – x̂ 0 (1))
                             = ȝ – ß x1 + ß (ȝ – ß u0)
                             = ȝ(1 + ß) – ß x1 – ß2 u0 .
Correspondingly, we get for t = 2
      x̂ 2 (1) = ȝ – ß u2 = ȝ – ß (x2 – x̂1 (1))
                              = ȝ – ß x2 + ß(ȝ(1 + ß) – ß x1 – ß2 u0)
                              = ȝ(1 + ß + ß2) – ß x2 – ß2 x1 – ß3 u0 .
If we continue this procedure we finally arrive at a representation of the
one-step prediction which – except for u0 – consists only of observable
terms,
     x̂ t (1) = ȝ(1 + ß + ... + ßt) – ß xt – ß2 xt-1 – ... – ßt x1 – ßt+1 u0 .
                                                        2.4 Forecasting      83

Due to the invertibility of the MA(1) process, i.e. for |ß| < 1, the impact of
the unknown initial value u0 finally disappears.
   Similarly, it is possible to show that, after q forecast steps, the optimal
forecasts of invertible MA(q) processes, q > 1 are equal to the uncondi-
tional mean of the process and that the variance of the forecast errors is
equal to the variance of the underlying process. The forecasts in observ-
able terms are represented similarly to those of the MA(1) process.

Forecasts with ARMA(p,q) Processes

Forecasts for these processes result from combining the approaches of pure
AR and MA processes. Thus, the one-step ahead forecast for a stationary
and invertible ARMA(1,1) process is given by
                         x̂ t (1) = į + Į xt – ß ut.
Starting with t = 0 and taking (2.60) into account, forecasts are succes-
sively generated. We first get
                         x̂ 0 (1) = į + Į x0 – ß u0,
where x0 and u0 are assumed to be any fixed numbers. For t = 1 we get
         x̂1 (1) = į + Į x1 – ß u1 = į + Į x1 – ß(x1 – x̂ 0 (1))
                = į(1 + ß) + (Į – ß) x1 + ß Į x0 – ß2u0 ,
which finally leads to
(2.61)   x̂ t (1) = į(1 + ß + ... + ßt) + (Į – ß) xt + ß(Į – ß) xt-1 + ...
                     + ßt-1(Į – ß) x1 + ßt Į x0 – ßt+1u0 .
Due to the invertibility condition, i.e. for |ß| < 1, the one-step forecast for
large values of t does no longer depend on the unknown initial values x0
and u0.
   For the W-step forecast, W = 2, 3, ..., we get
                           x̂ t (2) = į + Į x̂ t (1)
                           x̂ t (3) = į + Į x̂ t (2)
                              #
Using (2.61), these forecasts can be calculated recursively.
84    2 Univariate Stationary Processes

2.4.3 Evaluation of Forecasts

Forecasts can be evaluated ex post, i.e. when the realised values are avail-
able. There are many kinds of measures to do this. Quite often, only graphs
and/or scatter diagrams of the predicted values and the corresponding ob-
served values of a time series are plotted. Intuitively, a forecast is ǥgood’ if
the predicted values describe the development of the series in the graphs
relatively well or if the points in the scatter diagram are concentrated
around the bisecting line in the first and/or third quadrant. Such intuitive
arguments are, however, not founded on the above-mentioned considera-
tions on optimal predictions. For example, as (2.59) shows, the optimal
one-step forecast of an MA(1) process is a pure random process. This im-
plies that the graphs compare two quite different processes. Conclusion 6
given above states that the following decomposition holds for the vari-
ances of the data generating processes, the forecasts and the forecast er-
rors,
                      V[xt+Ĳ] = V[ x̂ t (Ĳ)] + V[ft(Ĳ)] .
Thus, it is obvious that predicted and realised values are generally gener-
ated by different processes.
   As a result, a measure for the predictability of stationary processes can
be developed. It is defined as follows,
                               V[xˆ t (W)]           V[f t ( W)]
(2.62)             P(Ĳ)2 =                   = 1 –               ,
                               V[x t W ]            V[x t W ]
with 0  P(Ĳ)2  1. At the same time, P(Ĳ)2 is the correlation coefficient be-
tween the predicted and the realised values of x. The optimal forecast of a
pure random process with mean zero is x̂ t (Ĳ) = 0, i.e. P(Ĳ)2 = 0. Such a
process cannot be predicted. On the other hand, for the one-step forecast of
an MA(1) process, we can write
                               E2 V 2              E2
                P(1)2 =                      =              > 0.
                             (1  E2 )V2         1  E2
However, the decomposition (2.58), theoretically valid for optimal fore-
casts, does not hold for actual (empirical) forecasts, even if they are gener-
ated by using (estimated) ARMA processes. This is due to the fact that
forecast errors are hardly ever totally uncorrelated with the forecasts.
Therefore, the value of P(Ĳ)2 might even become negative for ǥbad’ fore-
casts.
                                                          2.4 Forecasting    85

   JACOB MINCER and VICTOR ZARNOWITZ (1969) made the following
suggestion to check the consistency of forecasts. By using OLS the follow-
ing regression equation is estimated
(2.63)                  xt+Ĳ = a0 + a1 x̂ t (Ĳ) + İt+Ĳ.
It is tested either individually with t tests or commonly with an F test
whether a0 = 0 and a1 = 1. If this is fulfilled, the forecasts are said to be
consistent. However, such a regression produces consistent estimates of
the parameters if and only if x̂ t (Ĳ) and İt+Ĳ are asymptotically uncorrelated.
Moreover, to get consistent estimates of the variances, which is necessary
for the validity of the test results, the residuals have to be pure random
processes. Even under the null hypothesis of optimal forecasts, this only
holds for one-step predictions. Thus, the usual F and t tests can only be
used for Ĳ = 1. For Ĳ > 1, the MA(Ĳ-1) process of the forecast errors has to
be taken into account when the variances are estimated. A procedure for
such situations combines Ordinary Least Squares for the estimation of the
parameters and Generalised Least Squares for the estimation of the vari-
ances, as proposed by BRYAN W. BROWN and SHLOMO MAITAL (1981).
   JINOOK JEONG and GANGADHARRAO S. MADDALA (1991) have pointed
out another problem which is related to these tests. Even rational forecasts
are usually not without errors; they contain measurement errors. This im-
plies, however, that (2.63) cannot be estimated consistently with OLS; an
instrumental variables estimator must be used. An alternative to the esti-
mation of (2.63) is therefore to estimate a univariate MA(Ĳ-1) model for
the forecast errors of a Ĳ-step prediction,
          f̂ t(Ĳ) = a0 + ut + a1 ut-1 + a2 ut-2 + ... + a Ĳ-1 ut-Ĳ+1 ,
and to check the null hypothesis H0: a0 = 0 and whether the estimated re-
siduals ût are white noise.
   On the other hand, simple descriptive measures, which are often em-
ployed to evaluate the performance of forecasts, are based on the average
values of the forecast errors over the forecast horizon. The simple arithme-
tic mean indicates whether the values of the variable are – on average –
over- or underestimated. However, the disadvantage of this measure is that
large over- and underestimates cancel each other out. The mean absolute
error is often used to avoid this effect. Starting the forecasts from a fixed
point of time, t0, and assuming that realisations are available up to t0+m,
we get
                                   m W
                              1
            MAE(Ĳ) =               ¦ f t  j (W) , Ĳ = 1, 2, ... .
                           m 1 W j 0 0
86    2 Univariate Stationary Processes

Every forecast error gets the same weight in this measure. The root mean
square error is often used to give particularly large errors a stronger
weight:
                                            m W
                                       1
             RMSE(Ĳ) =                      ¦
                                    m 1 W j 0
                                                 f t20  j (W) , Ĳ = 1, 2, ... .

These measures are not normalised, i.e. their size depends on the scale of
the data.
   The inequality measure proposed by HENRY THEIL (1961) avoids this
problem by comparing the actual forecasts with so-called naïve forecasts,
i.e. the realised values of the last available observation,
                                      m W

                                      ¦f
                                      j 0
                                              2
                                             t0  j   ( W)
               U(Ĳ) =        m W
                                                                      , Ĳ = 1, 2, ... .
                             ¦ (x
                             j 0
                                       t 0 W j    x t0  j )   2




If U(Ĳ) = 1, the forecast is as good as the naïve forecast, x̂ t (Ĳ) = xt. For
U(Ĳ) < 1 the forecasts perform better than the naïve one. MAE, RMSE und
Theil’s U all become zero if predicted and realised values are identical
over the whole forecast horizon.

Example 2.16
All these measures can also be applied to forecasts which are not generated by
ARMA models, as, for example, the forecasts of the Council of Economic Experts
or the Association of German Research Institutes. Since the end of the 1960’s,
both institutions have published forecasts of the German economic development
for the following year, the institutes usually in October and the Council at the end
of November. HANNS MARTIN HAGEN and GEBHARD KIRCHGÄSSNER (1996) in-
vestigated the annual forecasts for the period from 1970 to 1995 as well as for the
subperiods from 1970 to 1982 and from 1983 to 1995. These periods correspond
to the social-liberal government of SPD and F.D.P. and the conservative-liberal
government of CDU/CSU and F.D.P..
   The results are given in Table 2.2. Besides the criteria given above, the table
also indicates the square of the correlation coefficient between realised and pre-
dicted values (R2), the estimated regression coefficient â1 of the test equation
(2.63) as well as the mean error (ME). According to almost all criteria, the fore-
casts of the Council outperform those of the institutes. This was to be expected, as
the Council’s forecasts are produced slightly later, at a time when more informa-
tion is available. It holds for the forecasts of both institutions that the mean abso-
lute error, the root mean squared error as well as Theil's U are smaller in the sec-
     2.5 The Relation between Econometric Models and ARMA Processes                   87

ond period compared to the first one. This is some evidence that the forecasts
might have improved over time. On the other hand, the correlation coefficient be-
tween predicted and realised values has also become smaller. This indicates a de-
terioration of the forecasts. It has to be taken into account that the variance of the
variable to be predicted was considerably smaller in the second period as com-
pared to the first one. Thus, the smaller errors do not necessarily indicate im-
provements of the forecasts. It is also interesting to note that on average the fore-
cast errors of both institutions were negative in the first and positive in the second
subperiod. They tended to overestimate the development in the period of the so-
cial-liberal coalition and to underestimate it in the period of the conservative-
liberal coalition.


               Table 2.2: Forecasts of the Council of Economic Experts
                          and of the Economic Research Institutes

                   Period        R2       RMSE       MAE       ME        â1       U

                1970 – 1995    0.369      1.838      1.346    -0.250*   1.005*   0.572

  Institutes    1970 – 1982    0.429      2.291      1.654    -0.731    1.193*   0.625
                1983 – 1995    0.399      1.229      1.038    0.231     1.081    0.457

                1970 – 1995    0.502*     1.647*     1.171*   -0.256    1.114    0.512*
 Council of
 Economic       1970 – 1982    0.599*     2.025*     1.477*   -0.723*   1.354    0.552*
  Experts
                1983 – 1995    0.472*     1.150*     0.865*   0.212*    1.036*   0.428*

    ‘*’ denotes the ‘better’ of the two forecasts.




2.5 The Relation between Econometric Models and
    ARMA Processes

The ARMA model-based forecasts discussed in the previous section are
unconditional forecasts. The only information that is used to generate
these forecasts is the information contained in the current and past values
of the time series. There is demand for such forecasts, and – as mentioned
above – one of the reasons for the development and the popularity of the
Box-Jenkins methodology presented in this chapter is that by applying the
above-mentioned approaches, these predictions perform – at least partly –
much better than forecasts generated by large scale econometric models.
Thus, the Box-Jenkins methodology seems to be a (possibly much better)
alternative to the traditional econometric methodology.
88     2 Univariate Stationary Processes

   However, this perspective is rather restricted. On the one hand, condi-
tional rather than unconditional forecasts are required in many cases, e.g.
in order to evaluate the effect of a tax reform on economic growth. Such
forecasts cannot be generated by using (only) univariate models. On the
other hand, and more importantly, the separation of the two approaches is
much less strict than it seems to be at first glance. As ARNOLD ZELLNER
and FRANZ C. PALM (1974) showed, linear dynamic simultaneous equation
systems as used in traditional econometrics can be transformed into
ARMA models. (Inversely, multivariate time series models as discussed in
the next chapters can be transformed into traditional econometric models.)
The univariate ARMA models correspond to the final equations of econo-
metric models in the terminology of JAN TINBERGEN (1940).
   Let us consider a very simple model. An exogenous, weakly stationary
variable x, as defined in (2.64b), has a current and lagged impact on the
dependent variable y, while the error term might be autocorrelated. Thus,
we get the model
(2.64a)                   yt = Ș1(L) xt + Ș2(L) u1,t ,
(2.64b)                       Į(L) xt = ȕ(L) u2,t ,
where Ș1(L) and Ș2(L) are lag polynomials of finite order. If we insert
(2.64b) in (2.64a), we get for y the univariate model
(2.64a')                       Į(L) yt = ȗ(L) vt
with
                 ȗ(L) vt := Ș1(L) ȕ(L) u2,t + Ș2(L) Į(L) u1,t .
As ȗ(L)vt is an MA process of finite order, we get a finite order ARMA
representation for y. It must be pointed out that the univariate representa-
tions of the two variables have the same finite order AR term.


References

Since the time when HERMAN WOLD developed the class of ARMA processes in
his dissertation and GEORGE E.P. BOX and GWILYM M. JENKINS (1970) popular-
ised and further developed this model class in the textbook mentioned above, there
have been quite a lot of textbooks dealing with these models at different technical
levels. An introduction focusing on empirical applications is, for example, to be
found in
                                                                References      89

ROBERT S. PINDYCK and DANIEL L. RUBINFELD, Econometric Models and Eco-
   nomic Forecasts, McGraw-Hill, Boston et al., 4th edition 1998, Chapter 17f.
   (pp. 521 – 578),
PETER J. BROCKWELL and RICHARD A. DAVIS, Introduction to Time Series and
   Forecasting, Springer, New York et al. 1996, as well as
T. C. MILLS, Time Series Techniques for Economists, Cambridge University Press,
    Cambridge (England) 1990. Contrary to this,
PETER J. BROCKWELL and RICHARD A. DAVIS, Time Series: Theory and Methods,
   Springer, New York et al. 1987,
give a rigorous presentation in probability theory. Along with the respective
proofs of the theorems, this textbook shows, however, many empirical examples.
   Autoregressive processes for the residuals of an estimation equation were used
for the first time in econometrics by
DONALD COCHRANE and GUY H. ORCUTT, Application of Least Squares Regres-
  sion to Relationships Containing Autocorrelated Error Terms, Journal of the
  American Statistical Association 44 (1949), pp. 32 – 61.
The different information criteria to detect the order of an autoregressive process
are presented in
HIROTUGU AKAIKE, Fitting Autoregressive Models for Prediction, Annals of the
   Institute of Statistical Mathematics AC-19 (1974), pp. 364 – 385,
HIROTUGU AKAIKE, A New Look at the Statistical Model Identification, IEEE
   Transactions on Automatic Control 21 (1969), pp. 234 – 237,
GIDEON SCHWARZ, Estimating the Dimensions of a Model, Annals of Statistics 6
   (1978), pp. 461 – 464, as well as in
EDWARD J. HANNAN and BARRY G. QUINN, The Determination of the Order of an
   Autoregression, Journal of the Royal Statistical Society B 41 (1979), pp. 190
   – 195.
The effect of temporal aggregation on the first differences of temporal averages
have first been investigated by
HOLBROOK WORKING, Note on the Correlation of First Differences of Averages in
   a Random Chain, Econometrica 28 (1960), S. 916 – 918
and later on, in more detail, by
GEORGE C. TIAO, Asymptotic Behaviour of Temporal Aggregates of Time Series,
   Biometrika 59 (1972), S. 525 – 531.
The approach to check the consistency of predictions was developed by
JACOB MINCER and VICTOR ZARNOWITZ, The Evaluation of Economic Forecasts,
   in: J. MINCER (ed.), Economic Forecasts and Expectations, National Bureau
   of Economic Research, New York 1969.
90    2 Univariate Stationary Processes

The use of MA processes of the forecast errors to estimate the variances of the es-
timated parameters was presented by
BRYAN W. BROWN and SHLOMO MAITAL, What Do Economists Know? An Em-
   pirical Study of Experts’ Expectations, Econometrica 49 (1981), pp. 491 –
   504.
The fact that measurement errors also play a role in rational forecasts and that,
therefore, instrumental variable estimators should be used, was indicated by
JINOOK JEONG and GANGADHARRAO S. MADDALA, Measurement Errors and Tests
    for Rationality, Journal of Business and Economic Statistics 9 (1991), S. 431
    – 439.
These procedures have been applied to the common forecasts of the German eco-
nomic research institutes by
GEBHARD KIRCHGÄSSNER, Testing Weak Rationality of Forecasts with Different
   Time Horizons, Journal of Forecasting 12 (1993), pp. 541 – 558.
Moreover, the forecasts of the German Council of Economic Experts as well as
those of the German research institutes were investigated in
HANNS MARTIN HAGEN and GEBHARD KIRCHGÄSSNER, Interest Rate Based Fore-
   casts of German Economic Growth: A Note, Weltwirtschaftliches Archiv 132
   (1996), S. 763 – 773.
The measure of inequality (Theil’s U) was proposed by
HENRY THEIL, Economic Forecasts and Policy, North-Holland, Amsterdam 1961.
An alternative measure is given in
HENRY THEIL, Applied Economic Forecasting, North-Holland, Amsterdam 1966.
Today, both measures are used in computer programmes. Quite generally, fore-
casts for time series data are discussed in
CLIVE W.J. GRANGER, Forecasting in Business and Economics, Academic Press,
   2nd edition 1989.
The relationship between time series models and econometric equation sys-
tems is analysed in
ARNOLD ZELLNER and FRANZ C. PALM, Time Series Analysis and Simultaneous
   Equation Econometric Models, Journal of Econometrics 2 (1974), pp. 17 –
   54.
See for this also
FRANZ C. PALM, Structural Econometric Modeling and Time Series Analysis: An
   Integrated Approach, in: A. ZELLNER (ed.), Applied Time Series Analysis of
   Economic Data, U.S. Department of Commerce, Economic Research Report
   ER-S, Washington 1983, pp. 199 – 230.
                                                               References   91

The term final equation originates from
JAN TINBERGEN, Econometric Business Cycle Research, Review of Economic
   Studies 7 (1940), pp. 73 – 90.
The permanent income hypothesis as a determinant of consumption expenditure
was developed by
MILTON FRIEDMAN, A Theory of the Consumption Function, Princeton University
   Press, Princeton N.J. 1957.
The example of the estimated popularity function is given in
GEBHARD Kirchgässner, Causality Testing of the Popularity Function: An Empiri-
   cal Investigation for the Federal Republic of Germany, 1971 – 1982, Public
   Choice 45 (1985), pp. 155 – 173.
3 Granger Causality




So far we have only considered single stationary time series. We analysed
their (linear) structure, estimated linear models and performed forecasts
based on these models. However, the world does not consist of independ-
ent stochastic processes. Just the contrary: in accordance with general
equilibrium theory, economists usually assume that everything depends on
everything else. Therefore, the next question that arises is about (causal)
relationships between different time series.
   In principle, we can answer this question in two different ways. Follow-
ing a bottom up strategy, one might first assume that the data generating
processes of the different time series are independent of each other. In a
second step, one might ask whether some specific time series are related to
each other. This statistical approach follows the proposals of CLIVE W.J.
GRANGER (1969) and is today usually employed when causality tests are
performed. The alternative is a top down strategy which assumes that the
generating processes are not independent and which, in a second step, asks
whether some specific time series are generated independently of the other
time series considered. This approach is pursued when using vector auto-
regressive processes. The methodology, which goes back to CHRISTOPHER
A. SIMS (1980), will be described in the next chapter. Both approaches are
employed to investigate the causal relationships which potentially exist be-
tween different time series.
   However, before we ask these questions we should clarify the meaning
of the term causality. Ever since GALILEO GALILEI and DAVID HUME, this
term is closely related to the terms cause and effect. Accordingly, a vari-
able x would be causal to a variable y if x could be interpreted as the cause
of y and/or y as the effect of x. However, where do we get the necessary
information from? In traditional econometrics, when distinguishing en-
dogenous and exogenous (or predetermined) variables, one assumes that
such information is a priori available. Problems arise, however, if there are
simultaneities between the variables, i.e. if it is possible that x is causal to
y and y is causal to x. The usual rank and order conditions for the identifi-
cation of econometric simultaneous equations systems show that the dif-
ferent relations can only be identified (and estimated) if additional infor-
mation is available, for example on different impacts of third variables on
94    3 Granger Causality

the dependent variables. It is impossible to determine the direction of cau-
sality of instantaneous relations between different variables if there is no
such information. In this case, the only possibility is to estimate a reduced
form of the system.
   As far as possible, modern time series analysis abstains from using ex-
ogenous information, so that the way in which the identification problem is
treated in traditional econometrics is ruled out. On the other hand, the idea
of causality is closely related to the idea of succession in time, at the latest
since DAVID HUME who said that cause always precedes effect. Traditional
econometrics shared the same view. However, the time periods represented
by a single observation are too long to assume that a change in one vari-
able might only influence other variables in later time periods, especially
when using annual data. As time series analyses are usually performed
with data of higher frequencies, the situation looks different here. Using
monthly data, we assume in many cases that changes in one variable only
influence other variables in later months. For example, the change in min-
eral oil prices on the international spot markets might only have a delayed
effect on Swiss or German consumer prices for petrol or light heating oil.
Thus, it is reasonable to use succession in time as a criterion to find out
whether or not there exists a causal relation between two series.
   If such a causal relation exists, it should be possible to exploit it when
making forecasts. As seen above, it is often possible to make quite good
forecasts with univariate models. The precondition for this is that the in-
formation contained in the past values of the variable is optimally ex-
ploited. Identification and estimation of ARMA models, for example, are
attempts in this direction. However, if x is causal to y, current and lagged
values of x should contain information that can be used to improve the
forecast of y. This implies that the information is not contained in the cur-
rent and lagged values of y. Otherwise it would be sufficient to consider
only the present and past values of y. Accordingly, the definition of causal-
ity proposed in 1969 by CLIVE W.J. GRANGER looks at this incremental
predictability, i.e. it examines whether the forecasts of the future values of
y can be improved if – besides all other available information – the current
and lagged values of x are also taken into account.
   There is, however, another reason why the lagged values of the corre-
sponding variables are taken into account when it comes to the question of
causality. Even if they are stationary, economic variables often show a
high degree of persistence. This may lead to spurious correlations (regres-
sions) between xt and yt, in case xt has no impact on yt and yt depends on
yt-1 which is not included in the regression equation. CLIVE W. GRANGER
and PAUL NEWBOLD (1974) showed that such spurious regressions can
arise even if highly autocorrelated variables are generated independently
                                   3.1 The Definition of Granger Causality        95

from each other. If past values of both the dependent and the explanatory
variables are included, the risk diminishes as this implies that the times se-
ries are filtered. With respect to the causal relation between (two) time se-
ries, only the innovations of these series do matter. Correspondingly, G.
WILLIAM SCHWERT (1979) also refers to the results of causality tests as
“the message in the innovations”.
   In the following, we present the definition of Granger causality and the
different possibilities of causal events resulting from it (Section 3.1). This
is followed by a characterisation of these causal events within the frame-
work of bivariate autoregressive and moving average models as well as by
using the residuals of the univariate models as developed in the preceding
chapter (Section 3.2). Section 3.3 presents three test procedures to investi-
gate causal relations between time series: the direct GRANGER procedure,
the HAUGH-PIERCE test and the HSIAO procedure. In Section 3.4, we ask
how these procedures can be applied in situations where more than just
two variables are considered. The chapter closes with some remarks on the
relation between the concepts of Granger causality and rational expecta-
tions if applied to the analysis of economic policy (reaction) functions
(Section 3.5).


3.1 The Definition of Granger Causality

In the following, we again assume that we have weakly stationary time se-
ries. Let It be the total information set available at time t. This information
set includes, above all, the two time series x and y. Let x t be the set of all
current and past values of x, i.e. x t := {xt, xt-1, ..., xt-k, ... } and analogously
of y. Let V2(·) be the variance of the corresponding forecast error. For such
a situation, C.W.J. GRANGER (1969) proposed the following definition of
causality between x and y:
(i)   Granger Causality: x is (simply) Granger causal to y if and only if the
      application of an optimal linear prediction function leads to
                         V2 (y t 1 I t )  V 2 (y t 1 I t  x t ),

      i.e. if future values of y can be predicted better, i.e. with a smaller
      forecast error variance, if current and past values of x are used.
(ii) Instantaneous Granger Causality: x is instantaneously Granger causal
     to y if and only if the application of an optimal linear prediction func-
     tion leads to
96      3 Granger Causality


                          V2 (y t 1 {I t , x t 1})  V 2 (y t 1 I t ),

        i.e. if the future value of y, yt+1, can be predicted better, i.e. with a
        smaller forecast error variance, if the future value of x, xt+1, is used in
        addition to the current and past values of x.
(iii) Feedback: There is feedback between x and y if x is causal to y and y
      is causal to x.
Feedback is only defined for the case of simple causal relations. The rea-
son is that the direction of instantaneously causal relations cannot be iden-
tified without additional information or assumptions. Thus, the following
theorem holds:
Theorem 3.1:       x is instantaneously causal to y if and only if y is instanta-
                   neously causal to x.
According to this definition there are eight different, exclusive possibilities
of causal relations between two time series:
(i)      x and y are independent:                                           (x, y)
(ii)     There is only instantaneous causality:                             (x–y)
(iii)    x is causal to y, without instantaneous causality:                 (xoy)
(iv)     y is causal to x, without instantaneous causality:                 (xmy)
(v)      x is causal to y, with instantaneous causality:                    (xy)
(vi)     y is causal to x, with instantaneous causality:                    (xy)
(vii) There is feedback without instantaneous causality: (xly)
(viii) There is feedback with instantaneous causality:                      (xy)
In the definition given above, It includes all information available at time t.
Normally, however, only the current and lagged values of the two time se-
ries x and y are considered:
                      It := {xt, xt-1, ..., xt-k, ..., yt, yt-1, ..., yt-k, ...}.
In many cases, the limitation of the information set does hardly make
sense. Thus, when discussing the test procedures, we must also ask how
these procedures can be applied if (relevant) ‘third variables’ play a role.
            3.2 Characterisations of Causal Relations in Bivariate Models     97


3.2 Characterisations of Causal Relations
    in Bivariate Models

In Chapter 1 we already explained that, according to the Wold decomposi-
tion theorem, any weakly stationary process can be represented as an (infi-
nite) moving average of a white noise process. Correspondingly, each pair
of time series can be represented by a bivariate MA() process. If this
process is invertible, it can also be represented as a bivariate (infinite) AR
process. In the following, starting with the above-mentioned definition of
causality, causal relations between two time series are first of all character-
ised by AR representation and then by MA representation. Finally, accord-
ing to LARRY D. HAUGH (1976) causal relations between two time series
can also be characterised by the residuals of their univariate ARMA mod-
els. These three characterisations, which are the basis of different testing
procedures, are presented in the following.


3.2.1 Characterisations of Causal Relations using the
      Autoregressive and Moving Average Representations

Each bivariate system of invertible weakly stationary processes has the fol-
lowing autoregressive representation (deterministic terms are neglected
without loss of generality):

                  ªy º        ª D11 (L) D12 (L) º ª y t º     ªu t º
(3.1)       A (L) « t »       « D (L) D (L) » « x »           «v » .
                  ¬x t ¼      ¬ 21       22     ¼ ¬ t¼        ¬ t¼
A(L) is a matrix polynomial. Its elements, Dij(L), i, j = 1,2, are one-sided
(infinite) polynomials in the lag operator L. These polynomials are identi-
cal to zero, (Dij(L) { 0), if all their coefficients, which are denoted as Dijk ,
are equal to zero. u and v are white noise residuals which might be con-
temporaneously correlated with each other. In order to normalise the equa-
tions, we set
                              0
                             D11       D 022      1.
As (3.1) is a reduced form, it must hold that
                              0
(3.2)                        D12       D 021      0.
In this system, instantaneous causality exists if and only if u and v are con-
temporaneously correlated because then the forecast errors of y and x can
98      3 Granger Causality

be reduced if the current value of x or y is included in the forecast equation
along with all lagged values of x and y. Then, however, there always exist
                                0
representations with either D12   z 0 and D 021 = 0 or D120
                                                             = 0 and D 021 z 0.
Both representations are observationally equivalent. However, because of
                                                      0
these two representations there is also one with D12    z 0 and D 021 z 0 which
is observationally equivalent to the two other representations.
   In the terminology of traditional econometrics, this implies that the
structural form (3.1) is not identified. It is well known that a specific struc-
tural form of any econometric model can be transformed into another
structural form which is observationally equivalent by pre-multiplying it
with any quadratic regular matrix P whose rank is equal to the number of
endogenous variables. The same happens if we go from one representation
to another. Instantaneous causality therefore results in:
(3.3)                  ((x – y)  (x  y)  ( x  y)  (x  y))
                                            0
                           | Uuv (0) z 0  D12 z 0  D 021 z 0 ,
where ‘|’ denotes equivalence. In the following, we only consider the re-
duced form, i.e. relation (3.2) holds.
  The individual causal events lead to the following representations:
(3.4a)     ((x, y)  (x – y))             |     D12(L) { D21(L) { 0,
(3.4b)    ((x o y)  (x  y))             | (D12(L) { 0)  D21(L) { 0,
(3.4c)     ((x m y)  ( x  y))           |     D12(L) { 0  (D21(L) { 0),
(3.4d)    ((x l y)  (x  y))             | (D12(L) { 0)  (D21(L) { 0).
Thus, a simple causal relation between x and y only exists if all coeffi-
cients of the lag polynomial D21(L) are equal to zero, (D21(L) { 0) and if
there exists at least one non-zero coefficient of the lag polynomial D12(L),
(D12(L) { 0).
   Analogous to (3.1) and (3.4), we can also characterise the different
causal relations by using the moving average representation
              ª yt º             ªu º            ªE11 (L) E12 (L) º ª u t º
(3.5)         «x »          B(L) « t »           «E (L) E (L) » « v » .
              ¬ t¼               ¬ vt ¼          ¬ 21      22     ¼ ¬ t¼
B(L) is also a matrix polynomial, whose elements Eij(L), i,j = 1,2, are one-
sided (infinite) polynomials in the lag operator L. To normalise the system
we set
                                  0
                                 E11          E022      1.
            3.2 Characterisations of Causal Relations in Bivariate Models      99

(3.2) also leads to
                               0
(3.6)                         E12         E021       0.
As B(L) results from the inversion of A(L), the following relations be-
tween the parameters of the MA and the AR representation hold:
(3.7a)                      E11(L) =      D22(L) / į(L),
(3.7b)                      E12(L) = – D12(L) / į(L),
(3.7c)                      E21(L) = – D21(L) / į(L),
(3.7d)                      E22(L) =      D11(L) / į(L),
with
                      į(L) = D11(L) D22(L) – D12(L) D21(L).
This leads to
(3.8a)                     E12(L) { 0 | D12(L) { 0,
(3.8b)                     E21(L) { 0 | D21(L) { 0.
Thus, in analogy to (3.4) the different causal events result in
(3.9a)   ((x, y)  (x – y))           |     E12(L) { E21(L) { 0,
(3.9b)   ((x o y)  (x  y))          | (E12(L) { 0)  E21(L) { 0,
(3.9c)   ((x m y)  ( x  y))         |     E12(L) { 0  (E21(L) { 0),
(3.9d)   ((x l y)  (x  y))          | (E12(L) { 0)  (E21(L) { 0).
The conditions for the different polynomials hold independently of
whether we choose the AR or the MA representation.


3.2.2 Characterising Causal Relations by Using the Residuals
      of the Univariate Processes

As an alternative to (3.1) and (3.5), x and y can also be represented by two
separate univariate ARMA models. In the Wold representation, this leads
to:

            ª yt º            ªa º          ª\11 (L)     0 º ªa t º
(3.10)      «x »        < (L) « t »                                        .
            ¬ t¼              ¬bt ¼
                                            « 0
                                            ¬        \ 22 (L) »¼ «¬ b t »¼
100      3 Granger Causality


Once again, \ii(L), i = 1, 2, are one-sided infinite polynomials in the lag
operator L normalised by
                            0
                          \11        \ 022     1.
The residuals a and b are again white noise, and they might also be con-
temporaneously correlated. We assume that the two MA processes are
again invertible. The following representation shows the relation between
(3.5) and (3.10):
                    ª yt º                            ªu º
(3.11)              «x »         < (L) < (L) 1 B (L) « t » ,
                    ¬ t¼                              ¬ vt ¼
or
        ªy º                    ªu º                  ª K (L) K12 (L) º ª u t º
(3.11a) « t »       < (L) + (L) « t »           < (L) « 11              » « »
        ¬xt ¼                   ¬ vt ¼                ¬ K21 (L) K22 (L) ¼ ¬ v t ¼
with H(L) = <(L)-1 B(L). The different lag polynomials result in
(3.12a)                      K11(L) = E11(L) / \11(L),
(3.12b)                      K12(L) = E12(L) / \11(L),
(3.12c)                      K21(L) = E21(L) / \22(L),
(3.12d)                      K22(L) = E22(L) / \22(L).
This leads to the following relation between the residuals u and v and the
residuals a and b:
       ªa º                  ªy º                       ªu º             ªu º
(3.13) « t »        < (L) 1 « t »        < (L) 1 B(L) « t »      + (L) « t » ,
       ¬bt ¼                 ¬x t ¼                     ¬ vt ¼           ¬ vt ¼
with the following equivalencies because of (3.7) and (3.12):
(3.14a)            D12(L) Ł 0 | E12(L) Ł 0 | K12(L) Ł 0,
(3.14b)            D21(L) Ł 0 | E21(L) Ł 0 | K21(L) Ł 0.
Analogous to (3.4) and (3.9) the different causal events can be expressed
as restrictions on the Kij’s:
(3.15a) ((x, y)  (x – y))            |    K12(L) { K21(L) { 0,
(3.15b) ((x o y)  (x  y))           | (K12(L) { 0)  K21(L) { 0,
(3.15c) ((x m y)  ( x  y))          |    K12(L) { 0  (K21(L) { 0),
             3.2 Characterisations of Causal Relations in Bivariate Models         101


(3.15d) ((x l y)  (x  y))             | (K12(L) { 0)  (K21(L) { 0).
Thus, Kij is subject to the same conditions as Dij and Eij .
  For the crosscorrelation function between the residuals of the univariate
processes, a and b, Uab(k), we get:
                               E[a t  b t  k ]          J ab (k)
(3.16)          Uab (k)                                                    ,
                                    2
                               E[a ]  E[b ]
                                    t
                                               2
                                               t
                                                       J a (0)  J b (0)

with:
(3.17)      Jab(k) = E[at bt-k],
                     = E[(K11(L) ut + K12(L) vt)  (K21(L) ut-k + K22(L) vt-k)],
                     = E[K11(L) ut · K21(L) ut-k] + E[K11(L) ut · K22(L) vt-k]
                     + E[K12(L) vt  K21(L) ut-k] + E[K12(L) vt  K22(L) vt-k].
Without instantaneous causality this is reduced to
         Jab(k) = E [K11(L) ut  K21(L) ut-k] + E[K12(L) vt  K22(L) vt-k]
because of the orthogonality of u and v.
  Thus, if we exclude instantaneous causality, we get:
(i)   x is not causal to y:
      In this case, K12(L) { 0 and ut and at are white noise. Because of nor-
      malisation it holds K11(L) { 1, i.e. at = ut. This leads to
      (3.18a)         Uab(k) = E[ut  K21(L) ut-k] = 0 for k t 0.
(ii) y is not causal to x:
      In this case, K21(L) { 0 and vt and bt are white noise. Because of nor-
      malisation it holds K22(L) { 1, i.e. bt = vt. This leads to
      (3.18b)         Uab(k) = E[K12(L) vt  vt-k] = 0 for k d 0.
(iii) y and x are independent:
      In this case, K12(L) { K21(L) { 0 and ut, vt, at and bt are white noise. It
      follows K11(L) { K22(L) { 1, i.e. at = ut and bt = vt. This leads to
      (3.18c)                           Uab(k) = 0  k.
From the above results we get
(3.19a) (x o y) | ( k, k > 0: Uab(k) z 0)  ( k, k d 0: Uab(k) = 0).
102      3 Granger Causality


(3.19b) (x m y) | ( k, k < 0: Uab(k) z 0)  ( k, k t 0: Uab(k) = 0).
(3.19c) (x l y) | ( k1, k1 < 0: Uab(k1) z 0)  ( k2, k2 > 0: Uab(k2) z 0).
As far as instantaneous causality between x and y can be excluded, the
causal relation may also be characterised by using the crosscorrelation
function between the residuals a and b of the univariate ARMA processes.
If there is instantaneous causality, (3.17) leads to

(3.20)                           Uab(0) z 0.
However, if there is feedback, this condition is neither necessary nor suffi-
cient for the existence of instantaneous causality.


3.3 Causality Tests

All these characterisations can be used for testing causality. In 1972,
CHRISTOPHER A. SIMS was the first to propose a test for simple Granger
causal relations. This test was based on the moving average representation.
However, some problems occurred with this procedure. Therefore, it is
hardly applied today and will not be discussed here. THOMAS J. SARGENT
(1976) proposed a procedure which is directly derived from the Granger
causality definition. It is usually denoted as the direct Granger procedure.
LARRY D. HAUGH and DAVID A. PIERCE (1977) proposed a test which
uses the estimated residuals of the univariate models for x and y. Finally,
CHENG HSIAO (1979) proposed a procedure to identify and estimate
bivariate models which – like the direct Granger procedure – is based on
autoregressive representation and can also be interpreted (at least implic-
itly) as causality tests. We will present these three procedures and illustrate
them by examples.


3.3.1 The Direct Granger Procedure

As mentioned above, this procedure proposed by T.J. SARGENT (1976) is
directly derived from the Granger definition of causality. Similar to the
method of C.W.J. GRANGER (1969), a linear prediction function is em-
ployed. In the following, let x and y be two stationary variables. To test for
simple causality from x to y, it is examined whether the lagged values of x
in the regression of y on lagged values of x and y significantly reduce the
error variance. By using OLS, the following equation is estimated:
                                                       3.3 Causality Tests       103

                              k1                k2
(3.21)       yt       D 0  ¦ D11
                               k
                                  y t  k  ¦ D12
                                               k
                                                  x t  k  u1,t ,
                              k 1              k k0


with k0 = 1. An F test is applied to test the null hypothesis, H0: D112 = D12
                                                                           2

           k2
= … = D12     = 0. By changing x and y in (3.21), it can be tested whether a
simple causal relation from y to x exists. There is a feedback relation if the
null hypothesis is rejected in both directions. To test whether there is in-
stantaneous causality we finally set k0 = 0 in relation (3.21) and perform a t
                                         0
or F test for the null hypothesis H0: D12  = 0. Accordingly, the correspond-
ding null hypothesis can be tested for x. According to Theorem 3.1 given
above, we expect the same result for testing the equation for y and for x.
However, as our data are based on finite samples, we will generally get
different numerical values for the test statistics. However, with k1 = k2, i.e.
if we include the same number of lagged variables for the dependent as
well as for the explanatory variable in both test equations, we get exactly
the same numerical values for the test statistics. The reason for this is that
the t or F statistics are functions of the partial correlation coefficient be-
tween x and y. Its value does not depend on the direction of the regression;
it only depends on the correlation between the two variables and the set of
conditioning variables which are included. If k1 = k2, the same condition-
ing variables are included irrespectively of the dependent variable.
   One problem with this test is that the results are strongly dependent on
the number of lags of the explanatory variable, k2. There is a trade-off: the
more lagged values we include, the better the influence of this variable can
be captured. This argues for a high maximal lag. On the other hand, the
power of this test is the lower the more lagged values are included.
   Two procedures have been developed to solve this problem. In general,
different values of k2 (and possibly also of k1) are used to inspect the sensi-
tivity of the results to the number of lagged variables. One of the different
information criteria presented in Section 2.1.5 can be used alternatively. As
we have included an explanatory variable, the number of estimated pa-
rameters, m, has to be adjusted. If, besides the constant term on the right
hand side, we include k1 lagged values of the dependent and k2 values of
additional variables, it holds that m = k1 + k2 + 1.

Example 3.1
When, in the 1970’s, Granger causality tests were applied for the first time, the fo-
cus of interest was on the relation between money and income. (See, e.g., C.A.
SIMS (1972) as well as E.L. FEIGE and D.K. PEARCE (1979).) The simple causal
relation from the (real) quantity of money to the real gross national product was
104    3 Granger Causality

interpreted as evidence for the monetarist hypothesis of short-run real effects of
monetary policy, whereas the reverse relation was interpreted as evidence for
Keynesian doctrines. If such a relation exists, it can be used for predictive pur-
poses.
   In the 1980’s and 1990’s there was an intensive discussion to what extent the
real economic development can be predicted by the term structure of interest, es-
pecially by using the difference between long-run and short-run interest rates.
Figure 3.1 demonstrates this possibility by presenting the annual growth rates of
the real German GDP and the four quarters lagged interest rate spread for the pe-
riod from 1970 to 1989. The precondition for using this spread as a predictor is a
simple Granger causal relation between this spread and real GDP. The question is
which one is ‘better’ suited to indicate the real effects of monetary policy.
       Percent
         8

         6                            Growth Rate of Real GDP

         4

         2

         0

        -2

        -4                 Interest Rate Spread (t-4)
                                 (GLR - GSR)
        -6                                                             year
         1970 1972 1974 1976 1978 1980 1982 1984 1986 1988

  Figure 3.1: Growth rate of real GDP and the four quarters lagged interest
              rate spread in the Federal Republic of Germany, 1970 – 1989
              (in percent).

In the following, we investigate by using quarterly data whether Granger causal
relations existed in the Federal Republic of Germany for the period from 1965 to
1989 between the quantity of money M1 or the interest rate differential and the
real GDP. (As the German reunification in 1990 is a real structural break we only
use data for the period before.) For the dependent as well as for the explanatory
variable, we always use four or eight lags, respectively. '4ln(GDPr) denotes the
annual growth rate of real GDP, '4ln(M1r) the annual growth rate of the quantity
of money M1, GLR the rate of government bonds (as a long-run interest rate), and
GSR the three months money market rate in Frankfurt (as a short-run interest rate).
                                                              3.3 Causality Tests         105

   The results in Table 3.1 show that there is only a simple causal relation from
money to GDP. The null hypothesis that no such relation exists can be rejected at
the 1 percent significance level by using eight lags and even at the 0.1 percent
level by using four lags. By contrast, the null hypothesis that no reversed causal
relation exists cannot even be rejected at the 10 percent significance level. The
same is true for an instantaneous relation.
   The results for the relation between the interest rate differential and the GDP
are quite different. There is a simple causal relation from the monetary indicator to
GDP, too, but this relation is much less pronounced than the relation between
money and income, and, in addition, there is a simple relation in the reverse direc-
tion. Thus, there exists feedback between these two variables.
   There is, first of all, a very pronounced instantaneous relation between the two
monetary indicators. Besides this, there is a simple relation from the interest rate
differential to money growth, while no relation seems to exist in the reverse direc-
tion. This reflects the fact that the German Bundesbank used the quantity of
money as an intermediate target which it tries to influence. It can, however, only
do this indirectly via (money market) interest rates. (Before 1987, the Bundesbank
had used central bank money as its intermediate target, from then on it used the
quantity of money M3.) It takes some time before money growth has fully ad-
justed to a monetary impulse based on interest rates. This is reflected in the simple
Granger causal relation from interest rate differential to money growth as well as
in the instantaneous relation between these two variables.

      Table 3.1     Test for Granger Causality (I): Direct Granger Procedure
                    1/65 – 4/89, 100 Observations

      y               x          k1      k2       F(ymx)         F(yox)          F(y–x)


 '4ln(GDPr)       '4ln(M1r)       4      4         6.087***        1.918          0.391
                                  8      8         3.561**         1.443          0.001

 '4ln(GDPr)     GLR – GSR         4      4         3.160*          3.835**        0.111
                                  8      8         1.927(*)        2.077*         0.279

 '4ln(M1r)      GLR – GSR         4      4         5.615***        1.489        10.099**
                                  8      8         2.521*          1.178        15.125***


‘(*)’, ‘*’, ‘**’, or ‘***’ denotes that the null hypothesis that no causal relation exists
can be rejected at the 10, 5, 1 or 0.1 percent significance level, respectively.
106      3 Granger Causality

3.3.2 The Haugh-Pierce Test

This procedure which was first proposed by L.D. HAUGH (1976) and later
on by L.D. HAUGH and D.A. PIERCE (1977) is based on the crosscorrela-
tions Uab(k) between the residuals a and b of the univariate ARMA models
for x and y. In a first step, these models have to be estimated. By using the
Box-Pierce Q statistic given in (1.11) (or the Box-Ljung Q statistic given
in (1.12)) it is checked whether the null hypothesis – that the estimated re-
siduals are white noise – cannot be rejected. Then, analogous to the Q sta-
tistic, the following statistic is calculated:
                                       k2
(3.22)                      S = T · ¦ Uˆ ab
                                         2
                                            (k) .
                                      k k1


Under the null hypothesis H0: Uab(k) = 0 for all k with k1 d k d k2, this sta-
tistic is asymptotically F2 disdributed with k2 – k1 + 1 degrees of freedom.
It can be checked for k1 < 0  k2 > 0 whether there is any causal relation at
all. If this hypothesis can be rejected, it can be checked for k1 = 1  k2 t 1
whether there is a simple causal relation from x to y. In the reverse direc-
tion, for k1 d -1  k2 = -1, it can be checked whether there is a simple
causal relation from y to x. Finally, it can be tested by using Uab(0) whether
there exists an instantaneous relation. However, the results of the last test
are questionable as long as the existence of a feedback relation cannot be
excluded.
   But this is not the only problem that might arise with this procedure. G.
WILLIAM SCHWERT (1979) showed that the power of this procedure,
which uses correlations, is smaller than the power of the direct Granger
procedure which uses regressions. Thus, following a remark by EDGAR L.
FEIGE and DOUGLAS K. PEARCE (1979), this test might only be a first step
to analyse causal relations between time series. On the other hand, infor-
mation on the relations between two time series, which is contained in
crosscorrelations, can be useful even if no formal test is applied. This in-
formation offers a deeper insight into causal relations than just looking at
the F and t statistics of the direct Granger procedure.

Example 3.2
To perform the Haugh-Pierce test we estimate univariate models for the three
variables and for the period from the first quarter of 1965 to the last quarter of
1989. The results are presented below; the numbers in parentheses are again the
corresponding t statistics:
                                                                   3.3 Causality Tests        107

 ǻ4ln(GDPr,t) =     0.658 + 0.861 ǻ4ln(GDPr,t-1) – 0.105 ǻ4ln(GDPr,t-4) +
                   (3.09) (12.80)                 (1.63)
                       + û1,t –     0.266 û1,t-8,
                                   (2.58)
R 2 = 0.669, SE = 1.395, AIC = 3.542, SC = 3.646, Q(9) = 5.602 (p = 0.779).
ǻ4ln(M1r,t) = 0.295 + 0.908 ǻ4ln(M1r,t-1) + û2,t – 0.773 û2,t-4 – 0.134 û2,t-5,
              (1.98) (19.44)                      (-13.06)       (-2.25)
R 2 = 0.764, SE = 1.897, AIC = 4.158, SC = 4.261, Q(9) = 10.910 (p = 0.282).
(GLR – GSR)t =          0.291 + 1.039 (GLR – GSR)t-1 – 0.422 (GLR – GSR)t-3
                       (2.81) (15.95)                 (-3.56)
                       + 0.426 (GLR – GSR)t-4 – 0.297(GLR – GSR)t-5 + û3,t,
                         (3.00)                (-3.17)
R 2 = 0.796, SE = 0.771, AIC = 2.368, SC = 2.498, Q(8) = 11.390 (p = 0.181).
In all three cases, the Box-Ljung Q statistic calculated for 12 lags does not indi-
cate any autocorrelation of the estimated residuals.



                                                U ( k )
                                             1.0

                                             0.8

                                             0.6

                                             0.4

                                             0.2



     -12   -10    -8      -6      -4    -2                 2   4     6    8    10    12
                                                                                          k
                                             -0.2

                                             -0.4

                                             -0.6

                                             -0.8

                                             -1.0



     Figure 3.2a: Crosscorrelations between the residuals of the univariate
                  models of GDP and the quantity of money M1.
108         3 Granger Causality



                                           U ( k )
                                        1.0

                                        0.8

                                        0.6

                                        0.4

                                        0.2



      -12     -10   -8   -6   -4   -2                 2   4   6   8   10   12
                                                                                k
                                        -0.2

                                        -0.4

                                        -0.6

                                        -0.8

                                        -1.0



      Figure 3.2b: Crosscorrelations between the residuals of the univariate
                   models of GDP and the interest rate spread

                                           U ( k )
                                        1.0

                                        0.8

                                        0.6

                                        0.4

                                        0.2



      -12     -10   -8   -6   -4   -2                 2   4   6   8   10   12
                                                                                k
                                        -0.2

                                        -0.4

                                        -0.6

                                        -0.8

                                        -1.0



      Figure 3.2c: Crosscorrelations between the residuals of the univariate
                   models of the quantity of money M1 and the interest rate
                   differential
                                                               3.3 Causality Tests           109

The next step was to calculate the crosscorrelation functions presented in Figure
3.2. (The dotted lines are the approximate 95 percent confidence intervals.) It is
quite obvious that this procedure leads to less pronounced (possible) causal rela-
tions. Only in a few cases the estimated crosscorrelation coefficients exceed the 5
percent bounds. In particular, the causal relation between interest rate differential
and GDP cannot be detected.
   The impression received by the graphs is confirmed by the test statistic S, see
equation (3.22). Again we use four or eight lags, respectively. As Table 3.2 shows,
there is a simple causal relation from the quantity of money to GDP and, in addi-
tion, an instantaneous relation which is, however, only significant at the 10 per-
cent level. Moreover, the relations between the two monetary indicators corre-
spond to the results of the direct Granger procedure. On the other hand, the test
does not detect any relation from the interest rate spread to GDP; the only relation
between these two variables is the reverse causation which is significant at the 10
percent level. According to these results, it should be impossible to make better
forecasts on real economic development by using the interest rate as predictor.

          Table 3.2: Test for Granger Causality (II): Haugh-Pierce Test
                     1/65 – 4/89, 100 Observations

      y               x           Û(0)       k       S(ymx)        S(yox)        S(y<=>x)

 '4ln(GDPr)      '4ln(M1r)      0.178(*)      4       16.485**      7.047         26.707**
                                              8       16.558*      11.049         30.782**
 '4ln(GDPr)     GLR – GSR        0.071        4        5.073        8.442(*)      14.653
                                              8        8.902       10.083         19.492
  '4ln(M1r)     GLR – GSR       0.280**       4       12.170*      10.090(*)      30.078***
                                              8       16.450*      11.154         35.421***

  ‘(*)’, ‘*’, ‘**’, or. ‘***’ denotes that the null hypothesis that no causal relation exists
  can be rejected at the 10, 5, 1 or. 0.1 percent significance level, respectively.


However, the results are not untypical for this procedure. Firstly, the appli-
cation of different test procedures might produce different results: one pro-
cedure might detect a causal relation, the other one might not. Reviewing
different papers on the relation between money and income, EDGAR L.
FEIGE and DOUGLAS K. PEARCE (1979), therefore, referred to the “casual
causal relation between money and income”. Secondly, ‘non-results’ are to
be expected in particular if the Haugh-Pierce test is applied. D.A. PIERCE
(1977), for example, was unable to find statistically significant relations
110    3 Granger Causality

between various macroeconomic variables whereas economists are con-
vinced that such relations do exist.


3.3.3 The Hsiao Procedure

The procedure for identifying and estimating bivariate time series models
proposed by CHENG HSIAO (1979) initially corresponds to the application
of the direct Granger procedure. However, the lag lengths are determined
with an information criterion. C. HSIAO proposed the use of the final pre-
diction error. Any other criterion presented in Section 2.1.5 might of
course also be used.
   Again, the precondition is that the two variables are weakly stationary.
The procedure is divided into six steps:
(i)   First, the optimal lag length k1* of the univariate autoregressive proc-
      ess of y is determined.
(ii) In a second step, by fixing k1* , the optimal lag length k *2 of the ex-
     planatory variable x in the equation of y is determined.
(iii) Then k *2 is fixed and the optimal lag length of the dependent variable
      y is again determined: k1* .
(iv) If the value of the information criterion applied in the third step is
     smaller than that of the first step, x has a significant impact on y. Oth-
     erwise, the univariate representation of y is used. Thus, we get a (pre-
     liminary) model of y.
(v) Steps (i) to (iv) are repeated by exchanging the variables x and y
    Thus, we get a (preliminary) model for x.
(vi) The last step is to estimate the two models specified in steps (i) to (v)
     simultaneously to take into account the possible correlation between
     their residuals. Usually, the procedure to estimate seemingly unre-
     lated regressions (SUR) developed by ARNOLD ZELLNER (1962) is
     applied.
The Hsiao procedure only captures the simple causal relations between the
two variables. The possible instantaneous relation is reflected by the corre-
lation between the residuals. However, by making theoretical assumptions
about the direction of the instantaneous relation, it is possible to take into
account the instantaneous relation in the model for y or in the model for x.
                                                               3.3 Causality Tests       111

Example 3.3
As explained above, the first steps of the Hsiao procedure are different from the
usual application of the direct Granger procedure, where the number of lags is
fixed (and might be varied), insofar as an information criterion is used to deter-
mine the optimal lag length. In our example, we used a maximal length of eight
lags for the dependent as well as for the explanatory variable, and we calculated
the values of the Akaike and the Schwarz criterion. In doing so, we did not take
into account a possible instantaneous relation.

            Table 3.3: Optimal Lag Length for the Hsiao Procedure

                                        Akaike Criterion             Schwarz Criterion
            Relation               k1*        k *2     k1*          k1*     k *2     k1*

    '4ln(M1r) o '4ln(GDPr)          4          1           1        1       1        1
    '4ln(GDPr) o '4ln(M1r)          5          3           8        4       0        4
  (GLR – GSR) o '4ln(GDPr)          4          2           1        1       2        1
  '4ln(GDPr) o (GLR – GSR)          5          5           5        5       0        5


Table 3.3 shows quite different results for the two criteria. As expected, the opti-
mal lag length is sometimes smaller when using the Schwarz criterion as com-
pared to the Akaike criterion. In our example, this leads to economic implications.
Both criteria reveal simple causal relations from the quantity of money as well as
the interest rate differential to real GDP. Reverse causation, however, can only be
found with the Akaike criterion. While we find one-sided relations only with the
Schwarz criterion, we get feedback relations with the Akaike criterion.
   The models which were estimated using these lags are given in Table 3.4 for
the relation between money and income and in Table 3.5 for the relation between
the interest rate spread and income. In all cases, the simple causal relation from
the monetary indicator to GDP is significant. This also holds when – using Wald
tests – we check the common null hypotheses that all coefficients as well as the
sum of the coefficients of the interest rate differential in the GDP equations are
(jointly) zero. In all cases, the null hypothesis can be rejected at the 0.1 signifi-
cance level. The reverse causal relations detected by the Akaike criterion are sig-
nificant at the 5 percent level in the money equation and at the one percent level in
the interest rate equation. On the other hand, none of the models detects an instan-
taneous relation: in both cases, the values of the correlation coefficient between
the residuals of the two equations are below any conventional critical value.
112   3 Granger Causality



          Table 3.4: Models Estimated with the Hsiao Procedure
                     1/65 – 4/89, 100 Observations
                                      3.3 Causality Tests   113



Table 3.5: Models Estimated with the Hsiao Procedure
           1/65 – 4/89, 100 Observations
114    3 Granger Causality


3.4 Applying Causality Tests in a Multivariate Setting

Whenever such a test is applied, one can hardly assume that there are no
other variables with an impact on the relation between the two variables
under consideration. The definition of Granger causality given above does
not imply such a limitation despite the fact that the relation between just
two variables is investigated: besides y t and x t , the relevant information
set It can include the values of any other variables z j,t , j = 1, ..., m. To dis-
tinguish between (real) causal and spurious relations, this enlargement of
the relevant information set is crucial.
   However, the above presented test procedures only take into account the
past values of x and y as the relevant information set. In order to apply
these models in a multivariate framework, two questions have to be an-
swered: (i) How can the procedures be generalised so that they can be ap-
plied in a model with more than two variables? (ii) Which conclusions can
be drawn if the procedure considers only two variables, but, nevertheless,
relations to additional variables do exist?


3.4.1 The Direct Granger Procedure with More Than Two
      Variables

As the Haugh-Pierce test uses the crosscorrelation function between the re-
siduals of the univariate ARMA models, it is obvious that only two time
series can be considered. Thus, it is not possible to generalise as to situa-
tions with more than two variables. However, the direct Granger procedure
is a different case. Let z1, ..., zm be additional variables. According to the
definition of Granger causality, the estimation equation (3.21) can be ex-
tended to
                       k1               k2                 m     k j 2

(3.23) yt = Į0 + ¦ D y t  k + ¦ D x t  k
                             k
                             11
                                              k
                                              12       + ¦ ¦ Ekj z j,t  k + ut,
                       k 1              k 1                j 1   k 1


if we test for simple Granger causal relations, with Ekj , k = 1, ..., kj+2, j = 1,
..., m, being the coefficients of the additional variables. It does not matter
whether the additional variables are endogenous or exogenous since only
lagged values are considered. After determining the numbers of lags k1, k2,
k3, ..., (3.23) can be estimated using OLS. As in the bivariate case, it can
be checked via an F test whether the coefficients of the lagged values of x
are jointly significantly different from zero. By interchanging x and y in
                     3.4 Applying Causality Tests in a Multivariate Setting              115

(3.23), it can be tested whether there exists a simple Granger causal rela-
tion from y to x and/or feedback.
   However, problems arise again if there are instantaneous relations. It is,
of course, possible to extend the test equation (3.23) by including the cur-
rent value of x analogous to (3.21) in order to test for instantaneous causal-
ity as per the definition given in Section 3.1. Again, it holds that it is im-
possible to discriminate between whether x is instantaneously causal to y
and/or y is instantaneously causal to x without additional information. It
also holds that if all conditioning variables have the same maximal lag, i.e.
for k1 = k2 = k3 = ... = km+2, the values of the test statistics are identical irre-
spectively of which equation is used to check for instantaneous causality
between x and y. However, as long as the other contemporaneous values of
the additional variables zj are not included, the resulting relations might be
spurious instantaneous relations.

Example 3.4
The results of the direct Granger procedure as well as those of the Hsiao procedure
given above indicate that both monetary indicators are Granger causal to the real
economic development and can therefore be used for predictive purposes. The
question that arises is not only whether one of the indicators is ‘better’, but also
whether forecasts can be improved by the use of both indicators. This can be in-
vestigated by using the trivariate Granger procedure.

          Table 3.6: Test for Granger Causality:
                     Direct Granger Procedure with Three Variables
                     1/65 – 4/89, 100 Observations

     y              x               z          k       F(ymx)       F(yox)        F(y–x)

'4ln(GDPr)      '4ln(M1r)     GLR – GSR        4      2.747*       3.788**       0.573
                                               8      2.866**      2.361*        0.127
'4ln(GDPr)    GLR – GSR        '4ln(M1r)       4      0.260        1.978         0.247
                                               8      1.430        1.817(*)      0.229
 '4ln(M1r)    GLR – GSR       '4ln(GDPr)       4      7.615***     0.417         7.273***
                                               8      3.432**      1.009         8.150***

 ‘(*)’, ‘*’, ‘**’, or ‘***’ denote that the null hypothesis that no causal relation exists
 can be rejected at the 10, 5, 1 or 0.1 percent significance level, respectively.
116    3 Granger Causality

Again, we use four and eight lags. The results are presented in Table 3.6. z de-
notes the respective conditioning (third) variable. The results for M1 and for the
interest rate spread are quite different. While we still find a significant simple
causal relation from the quantity of money to real GDP as well as a reverse rela-
tion, the interest rate differential and real GDP seem to be totally independent as
soon as M1 is considered as a third variable. This indicates that the quantity of
money is sufficient for predictive purposes; the interest rate spread does not con-
tain any information which is not already contained in M1 but which is relevant
for the prediction of real GDP. This is astonishing as once again (as with the
bivariate tests) we find a highly significant simple causal relation from the interest
rate differential to M1.

Analogous to this procedure, third variables can also be considered using
the Hsiao procedure. In this case, first the optimal lag length of the de-
pendent variable y and the conditioning variables z1 to zm must be deter-
mined before the optimal lag length k2* of the variable of interest x is
fixed.

Example 3.5
Applying the trivariate Hsiao procedure, we start with the equation of interest, i.e.
the equation for real GDP. Let us first consider the equations of Table 3.4 with the
lagged quantity of money as explanatory variable. If we add the interest rate dif-
ferential with the Akaike criterion we get the optimal lag length of two compared
to the one lag indicated by the Schwarz criterion. In both cases, however, the val-
ues of the criterion are higher than when this variable is not included. Thus, the in-
terest rate differential, along with real M1, does not significantly contribute to the
explanation of real GDP, and we can stick to the bivariate model of Table 3.4.
   We get the same results if we add the quantity of money as additional variable
to the equations including the lagged interest rate spread in Table 3.5. We get the
optimal lag one by using both criteria. In both cases, however, the value of the cri-
terion is below the value that results without considering this variable. If, once
again, we vary the maximal lag of the interest rate differential we end up with the
equation including M1 as explanatory variable. However, we have just found out
that the interest rate spread does not have a significant impact. Thus, we stick to
the estimated equations of Table 3.4.

A quite different procedure is to apply the definition of Granger causality
not to single variables but to groups of variables: a vector Y of dependent
variables and a vector X of explanatory variables. We can ask for the rela-
tions between these two groups of variables. The next chapter will discuss
this within the framework of vector autoregressive processes.
                  3.4 Applying Causality Tests in a Multivariate Setting   117

3.4.2 Interpreting the Results of Bivariate Tests in Systems
      With More Than Two Variables

To what extent do the results of bivariate tests apply for systems with more
than two variables? Let us first consider instantaneous relations. Such rela-
tions can be detected with the direct Granger procedure as well as with the
Haugh-Pierce test. However, definite evidence whether these relations are
real or only spurious can only be found in a complete model and by using
additional information. Insofar, the results of bivariate tests are only pre-
liminary with respect to instantaneous relations.
   What are the consequences for simple causal relations if third variables
are not considered? G. KIRCHGÄSSNER (1981) shows that it usually im-
plies that an existing simple causal relation appears as a feedback relation.
In the reverse case it holds that if the relation between x and y is only one-
sided in the bivariate model, there are no third variables which are Granger
causal to x and y. Thus, whereas the measured feedback relation might be
spurious and the inclusion of other variables might reduce it to a one sided
relation, the reverse does not hold.
   Which are the effects of spurious correlations on the results of Granger
causality tests if there is no direct causal relation between x and y but if
both depend on a third variable z? C.A. SIMS (1977) showed that rather ex-
treme assumptions are necessary to avoid such a spurious relation as feed-
back relation in the data.
   With respect to non-considered third relevant variables as well as to
spurious correlations as a result of the common dependence on third vari-
ables, the following holds: If it is found that, in a bivariate model, only a
one-sided causal relation from x to y (or from y to x) without feedback ex-
ists, this should also hold when additional variables are included in the
model. On the other hand, spurious feedback might occur due to several
reasons, without the ‘true’ relation being a feedback relation. Thus, the fact
whether feedback exists or not can only be verified within a full model.
   However, it has to be taken into account that spurious feedback relations
arising, for example, from omitted variables or from measurement errors
are, in most cases, rather weakly pronounced compared to the ‘real’ causal
relations. Thus, they might often not be detected with causality tests.
Moreover, as shown above, spurious independence arises quite often when
these test procedures are applied. If, however, the (relatively strongly pro-
nounced) direct causal relations cannot be detected in many cases, it is
even more unlikely that feedback relations which result from measurement
errors or omitted third variables are detected by causality tests. Thus, the
interpretation of detected unidirectional causal relations should also be
treated cautiously. Finally, it should not be ignored that in case a specific
118      3 Granger Causality

null hypothesis is not rejected, this does not imply that the null hypothesis
is true.


3.5 Concluding Remarks

The definition of causality proposed by C.W.J. GRANGER (1969) has been
heavily criticised in the first years after the publication of his paper as it
reduces causality to incremental predictability. ‚Post hoc, ergo propter
hoc?‘ was the question. It is correct that causality implies predictability,
but the reverse is not generally correct. In time series analysis, this concept
of causality is nevertheless widely accepted today.
   Partly, the criticism was definitely exaggerated. Succession in time is a
principal element of the classical causality definition of DAVID HUME, and
exactly this idea was taken up by the definition of C.W.J. GRANGER. Inso-
far, the latter is in the classical tradition. However, even if a ‘true’ causal
relation exists, its structure does not have to coincide with the structure
represented in the data. Even if the true model contains a temporal asym-
metry, the same asymmetry does not have to be reflected in the data. The
technical problem how the data can be measured and actually are measured
plays a crucial role here. Firstly, as explained above, due to the long peri-
ods covered by one observation, simple causal relations may appear to be
instantaneous relations. Of course, this holds especially when annual data
are used. Secondly, when different variables are measured with different
time delay it might even occur that the measured relation is in the reverse
direction of the true one. When x is causal to y, the tests might indicate
that y is causal to x. Finally, different methods of temporal aggregation
might disguise the true relation if, for example, monthly averages are used
for one time series and end of month data for another one.
   If economic policy follows a given (contingent) rule, there will gener-
ally be a feedback relation even if the ‘true’ relation is a unidirectional one.
If the rule is deterministic it might even be the case that only the reverse
causation can be detected. Let x be the economic policy instrument and y
the objective variable, which are connected by the simple linear relation
(3.24)                yt = Į0 + Į1 yt-1 + Į2 xt + ut.
Let u be white noise. The coefficients of this relation are assumed to be
constant and known to the government. It strives for a constant (optimal)
value y*. In this situation, the optimal (deterministic) rule is given by
                                              3.5 Concluding Remarks        119


                               1
(3.25)                 xt =       [y* – Į0 – Į1 yt-1].
                               D2
For the objective variable, it holds that
(3.26)                         yt = y* + ut,
i.e. it follows a white noise process with mean y* and variance V 2u . In this
case, neither past nor current values of x can improve the forecasts of y.
By inserting (3.26) into (3.25) we get
                           1
(3.27)              xt =      [y*(1 – Į1) – Į0 – Į1 ut-1] .
                           D2
As ut-1 is contained in yt-1, but not in xt-1, forecasts of x can be improved
using past values of y (besides past values of x), i.e. there is a simple
Granger causal relation from y to x: the measured causal relation goes into
the opposite direction of the true relation.
   If however, one assumes that the government is not able to steer exactly
the economy as, for example, it does not exactly know the coefficients of
the ‘true’ model, it might, instead of (3.25), follow the stochastic rule
                      1
(3.25')      xt =        [y* – Į0 – Į1 yt-1] + vt, E[vt] = 0,
                      D2
where v is independent of u. In such a situation there is also an instantane-
ous relation between x and y because v, the stochastic part of x, has an im-
pact on y but is independent of the lagged values of y. If, in addition to
that, it is assumed that there is a delay in the effect of x on y, we also get a
simple causal relation from x to y.
   Thus, as soon as the government reacts systematically to past develop-
ments we expect reverse causal relations. However, under realistic as-
sumptions we can also expect that there is a simple Granger causal relation
in the ‘true’ direction. This also holds under the conditions of the New
Classical Macroeconomics if unexpected changes, for example in mone-
tary policy, affect real and/or nominal economic development with some
delay. Insofar, Granger causality tests can be used to investigate the effec-
tiveness of economic policy. On the other hand, we only get distinctive
evidence for the true model if we make additional, sometimes rather re-
strictive assumptions.
   There is also an interesting relation between the efficiency of (financial)
markets and (instantaneous) Granger causality. If the price in an efficient
market really contains all (publicly) available information and can, there-
120    3 Granger Causality

fore, be modelled as a random walk or a martingale, there is no simple
Granger causal relation from any other variable on this price. Only instan-
taneous relations are possible, because any simple causal relation would
indicate that information is available which has not been used efficiently.
Thus, the existence or non-existence of Granger causal relations between
economic variables has substantial implications. But one should not forget
that Granger causality is a statistical concept: given a specific set of in-
formation, it asks for the (incremental) predictability of y using x. The
power of these tests, especially of the Haugh-Pierce test, is often rather
low and spurious independence might occur, sometimes caused by omitted
variables. But, nevertheless, it is not sensible in this context to speak of
mis-specifications as this always presupposes the existence of a ‘true’
model. A concept that allows results only according to a specific informa-
tion set has no room for the idea of a ‘true’ model. As shown above, this
does not preclude that (stochastic) economic models imply Granger causal
relations for the variables included in these models.



References

The definition of Granger causality was presented in
CLIVE W.J. GRANGER, Investigating Causal Relations by Econometric Models and
   Cross-Spectral Methods, Econometrica 37 (1969), pp. 424 – 438.
The Sims test was proposed by
CHRISTOPHER A. SIMS, Money, Income, and Causality, American Economic Re-
   view 62 (1972), pp. 540 – 552.
This was also the first paper to investigate the relation between money and income
by using causality tests. The direct Granger procedure was applied for the first
time in
THOMAS J. SARGENT, A Classical Macroeconomic Model for the United States,
   Journal of Political Economy 84 (1976), pp. 207 – 237.
The Haugh-Pierce test was proposed by
LARRY D. HAUGH, Checking the Independence of Two Covariance Stationary
   Time Series: A Univariate Residual Cross-Correlation Approach, Journal of
   the American Statistical Association 71 (1976), pp. 378 – 385,
and was made popular by
DAVID A. PIERCE and LARRY D. HAUGH, Causality in Temporal Systems: Charac-
   terizations and a Survey, Journal of Econometrics 5 (1977), pp. 265 – 293.
                                                                  References   121

The Hsiao procedure was applied for the first time in
CHENG HSIAO, Autoregressive Modeling of Canadian Money and Income Data,
   Journal of the American Statistical Association 74 (1979), pp. 553 – 560.
To estimate the bivariate models this approach employs the SUR procedure pro-
posed by
ARNOLD ZELLNER, An Efficient Method of Estimating Seemingly Unrelated Re-
   gressions and Tests for Aggregation Bias, Journal of the American Statistical
   Association 57 (1962), pp. 348 – 368.
Possible impacts of third variables on the test results are discussed in
CHRISTOPHER A. SIMS, Exogeneity and Causal Ordering in Macroeconomic Mod-
   els, in: FEDERAL RESERVE BANK OF MINNEAPOLIS (ed.), New Methods in
   Business Cycle Research: Proceedings from a Conference, Minneapolis 1977,
   pp. 23 – 44.
The problems that can arise with the detection of instantaneous relations when ap-
plying the Haugh-Pierce test in situations with feedback relation between the two
variables have first been mentioned by
J. MICHAEL PRICE, Causality in Temporal Systems: A Correction, Journal of
    Econometrics 10 (1979), pp. 253 – 256.
An introduction to the different testing procedures is given in
GEBHARD KIRCHGÄSSNER, Einige neuere statistische Verfahren zur Erfassung
   kausaler Beziehungen zwischen Zeitreihen, Darstellung und Kritik, Vanden-
   hoeck und Ruprecht, Göttingen 1981.
This book also gives a proof of Theorem 3.1. Critical discussions of these proce-
dures are given in
G. WILLIAM SCHWERT, Tests of Causality: The Message in the Innovations, in: K.
    BRUNNER and A.H. MELTZER (eds.), Three Aspects of Policy and Policymak-
    ing: Knowledge, Data, and Institutions, Carnegie-Rochester Conference Se-
    ries on Public Policy, Band 10, North-Holland, Amsterdam 1979, pp. 55 – 96;
ARNOLD ZELLNER, Causality and Econometrics, in: K. BRUNNER and A. H. MELT-
   ZER (eds.), Three Aspects of Policy and Policymaking: Knowledge, Data, and
   Institutions, Carnegie-Rochester Conference Series on Public Policy, Band 10,
   North-Holland, Amsterdam 1979, pp. 9 – 54; as well as in
EDGAR L. FEIGE and DOUGLAS K. PEARCE, The Casual Causal Relationship Be-
   tween Money and Income: Some Caveats for Time Series Analysis, Review of
   Economics and Statistics 61(1979), pp. 521 – 533.
The latter paper especially discusses the different results on the relation between
money and income when different testing procedures are applied.
122     3 Granger Causality

‘Non-results’ quite often occur when these tests are applied on economic time se-
ries, i.e. it is not possible to detect statistically significant relations between vari-
ables where theoretical considerations suggest that there must be causal relations.
Thus, one can assume that spurious independence occurs. This holds especially
when the Haugh-Pierce test is applied as
DAVID A. PIERCE, Relationships – and the Lack Thereof – Between Economic
   Time Series, with Special Reference to Money and Interest Rates, Journal of
   the American Statistical Association 72 (1977), pp. 11 – 26,
shows. Such spurious independence might result from omitting third variables, as
HELMUT LÜTKEPOHL, Non-Causality due to Omitted Variables, Journal of
   Econometrics 19 (1982), pp. 367 – 378,
shows. On the other hand, it was demonstrated by
CLIVE W.J. GRANGER and PAUL NEWBOLD, Spurious Regressions in Economet-
   rics, Journal of Econometrics 2 (1974), pp. 111 – 120,
that the use of (highly autocorrelated) time series in traditional econometrics
might show spurious relations.
  How far the temporal aggregation of variables affects the results of
causality tests was investigated by
GEBHARD KIRCHGÄSSNER and JÜRGEN WOLTERS, Implications of Temporal Ag-
   gregation on the Relation Between Two Time Series, Statistische Hefte/Sta-
   tistical Papers 33 (1992), pp. 1 – 19.
The implications of the results of Granger causality tests for the evaluation of dif-
ferent economic theories and especially for the effectiveness (or ineffectiveness)
of economic policy were discussed in
THOMAS J. SARGENT, The Observational Equivalence of Natural and Unnatural
   Rate Theories of Macroeconomics, Journal of Political Economy 84 (1976),
   pp. 631 – 640, as well as
WILLIAM H. BUITER, Granger Causality and Policy Effectiveness, Economica 51
   (1984), pp. 151 – 162.
It was first shown by
JÖRG W. KRÄMER and ENNO LANGFELD, Die Zinsdifferenz als Frühindikator für
   die westdeutsche Konjunktur, Die Weltwirtschaft, Issue 1/1993, pp. 34 – 43,
that the interest rate spread might be a good predictor for the real economic de-
velopment in the Federal Republic of Germany, see also
FREDERIC S. MISHKIN, What Does the Term Structure Tell Us about Future Infla-
   tion?, Journal of Monetary Economics 20 (1990), pp. 77-95.
                                                                References      123

However,
GEBHARD KIRCHGÄSSNER and MARCEL SAVIOZ, Monetary Policy and Forecasts
   for Real GDP Growth: An Empirical Investigation for the Federal Republic of
   Germany, German Economic Review 2 (2001), pp. 339 – 365,
show that the quantity of money M1 is a better predictor. This also holds for the
time after the German Unification until the end of 1998. (Results are not yet avail-
able for the time since the European Central Bank has been responsible for mone-
tary policy in the Euro-area.)
4 Vector Autoregressive Processes




The previous chapter presented a statistical approach to analyse the rela-
tions between time series: starting with univariate models, we asked for re-
lations that might exist between two time series. Subsequently, the ap-
proach was extended to situations with more than two time series. Such a
procedure where models are developed bottom up to describe relations is
hardly compatible with the economic approach of theorising where – at
least in principle – all relevant variables of a system are treated jointly. For
example, starting out from the general equilibrium theory as the core of
economic theory, all quantities and prices in a market are simultaneously
determined. This implies that, apart from the starting conditions, every-
thing depends on everything, i.e. there are only endogenous variables. For
example, if we consider a single market, supply and demand functions si-
multaneously determine the equilibrium quantity and price.
   In such a system where each variable depends on all the other ones, the
structural form of an econometric model is no longer identifiable. We need
additional information to identify it. In traditional econometrics, it is usu-
ally assumed that such information is available. One might, for example,
plausibly assume that some variables are not included in some equations.
In a market for agricultural products, for example, there should be no (di-
rect) impact of consumer income on the supply nor of the weather on the
demand of such products.
   However, CHRISTOPHER A. SIMS (1980) exemplified that such exclu-
sion restrictions are no longer justified as soon as we assume that individu-
als have rational expectations. For example, the world market prices of
coffee largely depend on the Brazilian production, which is put on the
market in autumn. If a hard frost in spring destroys a significant part of the
Brazilian coffee harvest, supply will be smaller in autumn. This should
lead to higher prices. At first glance, this should have no impact on the
demand function. However, if American consumers know about the frost,
they might try to buy additional (still cheap) coffee in order to stock up.
Thus, the weather in Brazil becomes a determinant of the coffee demand in
the United States; a variable which was thought to be excludable from the
demand function is now included. According to CH. A. SIMS, nearly all ex-
clusion restrictions are incredible.
126    4 Vector Autoregressive Processes

   He developed the approach of Vector Autoregressive Systems (VAR) as
an alternative to the traditional simultaneous equations system approach.
Starting from the autoregressive representation of weakly stationary proc-
esses, all included variables are assumed to be jointly endogenous. Thus,
in a VAR of order p (VAR(p)), each component of the vector X depends
linearly on its own lagged values up to p periods as well as on the lagged
values of all other variables up to order p. Therefore, our starting point is
the reduced form of the econometric model. With such a model we can
find out, for example, whether specific Granger causal relations exist in
this system. In doing so, we follow a top-down approach based on an
econom(etr)ic philosophy contrary to the statistical bottom-up approach of
CLIVE W.J. GRANGER. However, it has to be mentioned that the number of
variables that can jointly be analysed in such a system is quite small; at
least in the usual econometric applications, this is limited by the number of
observations which are available. Nevertheless, vector autoregressive sys-
tems play a crucial role in modern approaches to analyse economic time
series. This holds, for example, for the LSE-Approach which was origi-
nally developed by J. DENNIS SARGAN (1964) at the London School of
Economics (LSE) and today is most prominently represented by DAVID F.
HENDRY.
   This chapter will show the conclusions about the relation between sta-
tionary time series that can be drawn from such a system. Essentially, we
ask how new information that appears at a certain point in time in one
variable is processed in the system and which impact it has over time not
only for this particular variable but also for the other variables of the sys-
tem. In this context, we will introduce two new instruments: the impulse
response function and the variance decomposition. The latter depends on
the possibility shown in Section 2.4 that the variance of a weakly station-
ary variable can be reconstructed as the variance of the forecast error if the
prediction horizon goes to infinity.
   In the following, the autoregressive and the moving average representa-
tions of the system as well as its error correction representation are pre-
sented (Section 4.1). Furthermore, we will see how forecasts can be gener-
ated in such a system. Section 4.2 asks for possible Granger causal
relations between sub-vectors in this system. Section 4.3 presents the im-
pulse response analysis and Section 4.4 the variance decomposition. We
close with some remarks on the status of the economic theory in such a
system (Section 4.5).
                                       4.1 Representation of the System      127


4.1 Representation of the System

We start with the k-dimensional stochastic process X. The reduced form of
the general linear dynamic model of this process, a vector autoregression
of order p, VAR(p), can be described as
(4.1)      Xt = į + A1 Xt-1 + A2 Xt-2 + ... + Ap Xt-p + Ut .
The Ai, i = 1, ..., p, are k-dimensional quadratic matrices, and U represents
the k-dimensional vector of residuals at time t. The vector of constant
terms is denoted as į. This system can compactly be written as
(4.1')                        Ap(L) Xt = į + Ut ,
with
         Ap(L) = Ik – A1L – A2L2 – … – ApLp ,
         E[Ut] = 0, E[Ut Ut'] = Ȉuu, E[Ut Us'] = 0 for t  s,
where, again, we drop the suffix p of the matrix polynomial Ap(L) for ease
of convenience. The residuals U might be contemporaneously correlated
which indicates instantaneous relations between the endogenous variables
in relation (4.1).
   This system is stable if and only if all included variables are weakly sta-
tionary, i.e. if (with stochastic initial conditions) all roots of the character-
istic equation of the lag polynomial are outside the unit circle, i.e.
(4.2)    det(Ik – A1 z – A2 z2 – ... – Ap zp)  0 for |z|  1 .
Under this condition, system (4.1') has the MA representation
(4.3)        Xt   = A-1(L) į + A-1(L) Ut
                   = ȝ + Ut – B1 Ut-1 – B2 Ut-2 – B3 Ut-3 – ...
                   = ȝ + B(L) Ut ,      B0 = Ik ,
with
                        f
         B(L) := I – ¦ B j Lj Ł A-1(L), ȝ = A-1(1) į = B(1) į.
                        j 1


The autocovariance matrices are defined as:
(4.4)                  īX(Ĳ) = E[(Xt – ȝ)(Xt-Ĳ – ȝ)'].
Without loss of generality, we set į = 0 and, therefore, ȝ = 0. Due to (4.1),
it holds that
128      4 Vector Autoregressive Processes

            E[Xt Xt-Ĳ '] =      A1 E[Xt-1 Xt-Ĳ '] + A2 E[Xt-2 Xt-Ĳ '] + ...
                                 + Ap E[Xt-p Xt-Ĳ ']+ E[Ut Xt-Ĳ '] .
This leads to the equations determining the autocovariance matrices for Ĳ  0:
(4.5a) īX(Ĳ) = A1 īX(Ĳ–1) + A2 īX(Ĳ–2) + ... + Ap īX(Ĳ–p),
(4.5b) īX(0) = A1 īX(–1) + A2 īX(–2) + ... + Ap īX(–p) + 6 uu

                   = A1 īX (1)' + A2 īX (2)' + ... + Ap īX (p)' + 6 uu .
The last equation is due to the fact that Ȗij(Ĳ) = Ȗji(–Ĳ) holds for the ij-
element of īX(Ĳ), Ȗij(Ĳ). Thus, īX(Ĳ) = īX (–Ĳ)' .
   The individual correlation coefficients are defined as
                                     J ij ( W)
                   ȡij(Ĳ) =                            , i, j, = 1, 2, ..., k.
                                 J ii (0)  J jj (0)

Thus, we get the autocorrelation matrices as
(4.6)                           RX(Ĳ) = D-1 īX(Ĳ) D-1
with
                      ª1/ J11 (0)    0                      "          0   º
                      «                                                    »
                      «   0       1/ J 22 (0)               "    0         »
             D-1    = «                                                    » .
                      «   #           #                     %     #        »
                      «   0          0                      " 1/ J kk (0) »¼
                      ¬


Example 4.1
Let the following VAR(1) model be given:

                    ª x1,t º      ª 0.6 0.3 º ª x1,t 1 º   ª u1,t º
                    «x »       = «           » «x        » + «u »
                    ¬ 2,t ¼      ¬ 0.3  0.6 ¼ ¬ 2,t 1 ¼    ¬ 2,t ¼
with
                                                 ª1.00 0.70 º
                                Ȉuu = «          »,
                                      ¬0.70 1.49 ¼
or, in the compact representation
(E4.1)                           (I – A1 L) Xt = Ut .
                                              4.1 Representation of the System    129

To check whether the system is stable, the roots of |I – A1z| = 0 have to be calcu-
lated according to (4.2), i.e. we have to solve the system
                                   1  0.6z 0.3z
                                                   = 0.
                                     0.3z 1  0.6z

This results in
                                         10        10
                                  z1 =      , z2 =    ,
                                          9         3
which both are larger than one in modulus. Thus, the system is stable. The MA
representation of (E4.1) is given as
                             I
                Xt =                 Ut = (I + A1 L + A12 L2 + ...) Ut ,
                       I  A1L

or, explicitly written as,

      ª x1,t º ª u1,t º ª 0.6 0.3 º ª u1,t 1 º   ª 0.45 0.36 º ª u1,t  2 º
      «x » = «u » + «              » «u        » + «            » «           »
      ¬ 2,t ¼  ¬ 2,t ¼  ¬ 0.3 0.6 ¼ ¬ 2,t 1 ¼    ¬ 0.36 0.45 ¼ ¬ u 2,t  2 ¼

                     ª 0.378 0.351º ª u1,t 3 º
                   + «             » «           » + ... .
                     ¬ 0.351 0.378¼ ¬ u 2,t  3 ¼
For the variance-covariance matrix we get, because of (4.5),
                                  īx(0) = A1 īx(1)' + Ȉuu ,
                                  īx(1) = A1 īx(0) .
This leads to
(E4.2)                           īx(0) = A1 īx(0) A1' + Ȉuu .
To get the variances Ȗ11(0) and Ȗ22(0) for x1 and x2 as well as their covariance
Ȗ12(0), we have to solve the following linear equation system because of (E4.2):
                   0.64 Ȗ11(0) + 0.36 Ȗ12(0) – 0.09 Ȗ22(0) =       1.00
                   0.18 Ȗ11(0) + 0.55 Ȗ12(0) + 0.18 Ȗ22(0) =       0.70
                  – 0.09 Ȗ11(0) + 0.36 Ȗ12(0) + 0.64 Ȗ22(0) =      1.49
This leads to
                    Ȗ11(0) = 2.17, Ȗ12(0) = -0.37, Ȗ22(0) = 2.84.
Thus, the instantaneous correlation between x1 and x2 is -0.15.
130     4 Vector Autoregressive Processes

VAR(p) models are often used for forecasting. According to the considera-
tions in Section 2.4, the following holds for the autoregressive representa-
tion (4.1):
(4.7) X̂ t (1)      = Et[Xt+1]
                    = į + A1 Xt + A2 Xt-1 + ... + Ap Xt-p+1
        X̂ t (2)    = į + A1 X̂ t (1) + A2 Xt + A3 Xt-1 + ... + Ap Xt-p+2 .
Alternatively, we get
(4.8)              X̂ t (1) = ȝ – B1 Ut – B2 Ut-1 – B3 Ut-2 – ...
for the MA representation (4.3) .
   While the autoregressive representation is mainly relevant to generate
forecasts, the MA representation is used for calculating the corresponding
forecast errors as well as for additional methods to analyse the dynamic
properties of the system.
   As an alternative to the AR and MA representations (4.1') and (4.3),
there is an error correction representation for every stationary VAR of or-
der p:
(4.9)                  A*p 1 (L) ǻXt = į – A(1) Xt-1 + Ut,

with
                       A*p 1 (L) = I – A1* L – ... – A*p 1 Lp-1

and
                                      p
                        A*i =  ¦ A j , i = 1, 2, ..., p–1.
                                  j   i 1


As the vectors ǻXt-i, i = 1, ..., p-1, together with Xt-1, generate the same
vector space as the vectors Xt-i, i = 1, ..., p, the (finite order) autoregressive
representation and the error correction representation are observationally
equivalent. The advantage of the latter is that A(1), the matrix of the long-
run equilibrium relations, can be estimated directly in the framework of a
linear model.

Example 4.2
We start with the general dynamic model of a single equation, but (for reasons of
simplicity) we consider only one explanatory variable which is assumed to be ex-
ogenous:
                                                       4.1 Representation of the System   131

(E4.3)                   Įp(L) yt = į + ȕq(L) xt + ut .
In the long-run equilibrium it holds that
                     yt = yt-1 = ... = yt-p = ... = y ,
                     xt = xt-1 = ... = xt-q = ... = x ,
                                                     ut = 0.
From this we get for the long-run equilibrium:
(E4.4)                     Įp(1) y               = į + ȕq(1) x ,

                                                        G       Eq (1)
                                               y =                     x
                                                      D p (1)   D p (1)

                                                 = ȝ + ȕ x
with
                           ȝ = į/Įp(1), ȕ = ßq(1)/Įp(1).
According to (4.9), if y and x are weakly stationary (or, as discussed in Chapter 6,
nonstationary but cointegrated), the following representation of the general dy-
namic linear model is an alternative to (E4.3). Here, the short- and long-run effects
are separated and can be directly estimated:
(E4.5) D*p 1 (L) (1 – L)yt = į + E*q 1 (L) (1 – L)xt – Ȗ0 yt-1 + Ȗ1 xt-1 + ut

with
                  D*p 1 (L) = 1 – D1* L – ... – D*p 1 Lp-1,
                                        p
                  D*i =  ¦ D j , i = 1, 2, ..., p–1,
                                j       i 1


                  E*q 1 (L) =              E*0 – E1* L – ... – E*q 1 Lq-1,
                                    q
                  E*i =  ¦ E j , j = 1, 2, ..., q–1, E*0 = E0 .
                            j       i 1


                  Ȗ0 = Įp(1), Ȗ1 = ȕq(1).
In equilibrium ǻyt = ǻxt = 0 and ut = 0 hold and, therefore, yt = y as well as xt =
 x for all t. From this it follows that
                         – Ȗ0 y + į + Ȗ1 x = 0

or
132     4 Vector Autoregressive Processes

                              – Įp(1) y + į + ßq(1) x = 0 ,

and again we get (E4.4) as representation of the long-run equilibrium.

Example 4.3
We consider the relation between the German (GER) and the Swiss (SER) three
months money market rates. We use monthly data for the period from January
1975 to November 1998. Preliminary Granger causality tests (the results of which
are not given here) have indicated that, along with an instantaneous relation, there
is a simple causal relation from German to Swiss interest rates: The null hypothe-
sis that there is also a simple relation in the reverse direction can neither be re-
jected by using first differences nor by using levels at any conventional signifi-
cance level. Assuming that the instantaneous causation runs from German to
Swiss interest rates, using levels we get the following equation for the Swiss rates:

       SERt = –           0.121 + 0.717 GERt + 0.994 SERt-1 – 0.080 SERt-2
                        (1.60) (9.10)        (18.68)        (1.57)

                    –     0.636 GERt-1 + ût,
                        (7.66)

       R 2 = 0.965, SE = 0.466, Q(10) = 8.810 (p = 0.550).
(The numbers in parentheses are again the estimated t statistics). If we estimate the
error correction representation directly, we get the following result:

      ǻSERt = –       0.121 + 0.717 ǻGERt + 0.080 ǻSERt-1 – 0.086 SERt-1
                    (1.60) (9.10)         (1.57)          (4.00)

                + 0.081 GERt-1 + ût,
                 (3.66)

Both relations are observationally equivalent. Aside from the multiple correlation
coefficient, all test statistics for the equation as well as the residual error variance
take the same values. On the other hand, as the variance of the dependent variable
is reduced by taking first differences, the R 2 necessarily decreases; its value is
now 0.286.
   Moreover, the linear estimate of the error correction model is equivalent to the
following non-linear estimation:

      ǻSERt =    0.717 ǻGERt + 0.080 ǻSERt-1 – 0.086 (SERt-1 + 1.419
                (9.10)        (1.57)          (4.00)         (1.63)

                –     0.946 GERt-1) + ût,
                    (6.98)
                                         4.1 Representation of the System         133

The estimate shows that during this period Swiss short-run interest rates devel-
oped parallelly with the German rates, but on a level lower by about 1.5 percent-
age points, i.e. the so-called ‘Swiss interest rate bonus’ was about 1.5 percentage
points. As the estimated coefficient of GERt-1 is not significantly different from
one, this relation is consistent with a relative version of uncovered interest parity.

Relation (4.1), the starting point of the entire approach, is the reduced form
of a dynamic linear econometric system where each equation includes the
same explanatory variables. Therefore, the different equations of this sys-
tem can be estimated using OLS. This leads to consistent estimates of the
parameters with the same efficiency as a generalised least squares estima-
tor. However, if there are zero restrictions, the individual equations of the
system are considered as seemingly unrelated and are therefore simultane-
ously estimated as a system. Here, the SUR method is applied to get effi-
cient estimates.
   To estimate the system, the order p, i.e. the maximal lag of the system,
has to be determined. As (4.1) shows, the same maximal lag is used for all
variables. In order to fix p, the information criteria described in Section
2.1.5 can be used again. HELMUT LÜTKEPOHL (1991, pp. 128ff.), for ex-
ample, showed that in the multivariate case with k variables, T observa-
tions, a constant term and a maximal lag of p, these criteria are as follows:
(i)     The final prediction error (FPE):
                                                      k
                             ª T  k p  1º
(4.10a)             FPE(p) = «            » 6 uu
                                              ˆ ˆ (p)
                             ¬ T  k p  1¼
(ii)    The Akaike criterion (AIC):
                                                   2          2
(4.10b)            AIC(p) = ln 6 uu
                                 ˆ ˆ (p)  (k  p k )           .
                                                              T
(iii)   The Hannan-Quinn criterion (HQ):
                                             2            2ln(ln(T))
(4.10c)       HQ(p) = ln 6 uu
                           ˆ ˆ (p)  (k  p k )                      .
                                                              T
(iv)    The Schwarz criterion (SC):
                                                2           ln(T)
(4.10d)          SC(p) = ln 6 uu
                              ˆ ˆ (p)  (k  p k )                .
                                                              T
 6 uu
   ˆ ˆ (p) is the determinant of the variance-covariance matrix of the esti-

mated residuals. Again it holds that the Hannan-Quinn criterion as well as
the Schwarz criterion consistently determine the (finite) order of the true
134     4 Vector Autoregressive Processes

maximal lag, while the final prediction error and the Akaike criterion tend
to overestimate it. This is also reflected in the following relations which,
because of the different punishing terms, hold for these criteria:
(i)                    p̂ (SC)  p̂ (HQ),

(ii)                   p̂ (SC)  p̂ (AIC) for T  8,
(iii)                  p̂ (HQ)  p̂ (AIC) for T  16.


Example 4.4
We use the same quarterly data and the same period from 1965 to 1989 as in Ex-
amples 3.1 to 3.5: the annual growth rate of real GDP (ǻ4ln(GDPr)), the annual
growth rate of the real quantity of money M1 (ǻ4ln(M1r)), and the interest rate dif-
ferential (GLR – GSR). Considering the whole system, we get the following val-
ues for the information criteria:
                      p = 2: AIC = 10.210, SC = 10.757,
                      p = 3: AIC = 10.341, SC = 11.123,
                      p = 4: AIC = 10.409, SC = 11.425.
Thus, according to the Akaike as well as to the Schwarz criterion (and, therefore,
also according to the Hannan-Quinn criterion) we get an optimal lag length of two
periods. This leads to the following estimates:

ª ' 4 ln(GDPr,t ) º    ª0.142 º   ª 0.611 0.078 0.133º ª ' 4 ln(GDPr,t 1 ) º
« ' ln(M1 ) » =        «1.094 » + « 0.183 0.761 0.981» « ' ln(M1 ) »
« 4        r,t    »    «        » «                     » « 4       r,t 1    »
«¬(GLR  GSR) t »¼     «¬0.510 »¼ ¬« 0.015 0.036 0.995»¼ «¬(GLR  GSR) t 1 »¼

                     ª 0.096    0.091 0.205º ª ' 4 ln(GDPr,t  2 ) º   ª û1,t º
                     «                      »  «                   »   « »
                   + « 0.024 0.108 0.438 » « ' 4 ln(M1r,t  2 ) » + « û 2,t » .
                     «¬ 0.077 0.070 0.128»¼ «¬(GLR  GSR) t  2 »¼  « û 3,t »
                                                                       ¬ ¼
For the individual equations we get the following test statistics:
(i)           ǻ4ln(GDPr):      SE = 1.327, AIC = 3.471, SC = 3.654,
                               Q(10) = 16.406 (p = 0.089),

(ii)          ǻ4ln(M1r):       SE = 1.905, AIC = 4.194, SC = 4.376,
                               Q(10) = 20.024 (p = 0.029),

(iii)         GLR – GSR:       SE = 0.786, AIC = 2.422, SC = 2.605,
                               Q(10) = 17.296 (p = 0.068).
                                        4.1 Representation of the System        135

Between the residuals the following correlations exist:
                     Û12 = 0.102, Û13 = 0.045, Û23 = 0.285.

Again, we see the instantaneous relation between the growth rate of real M1 and
the interest rate differential.
   Although the VAR(2) model is the best with respect to information criteria, the
values of the Box-Ljung statistic indicate that the residuals of all three equations
are still autocorrelated. Thus, the dynamics of the system is not fully captured.
However, when specifying vector autoregressive models it is important that the re-
siduals are really white noise. If we estimate a VAR(4) model, we get the follow-
ing values for the test statistics of the different equations:
(i)          ǻ4ln(GDPr):      SE = 1.333, AIC = 3.533, SC = 3.872,
                              Q(8) = 9.340 (p = 0.314),

(ii)         ǻ4ln(M1r):       SE = 1.762, AIC = 4.092, SC = 4.431,
                              Q(8) = 11.390 (p = 0.181),

(iii)        GLR – GSR:       SE = 0.777, AIC = 2.454, SC = 2.793,
                              Q(8) = 9.661 (p = 0.290).

For the instantaneous correlations we get:
                     Û12 = 0.081, Û13 = 0.054, Û23 = 0.280.

The values of these criteria change considerably. The standard error of regression
slightly improves in the M1 equation and hardly changes in the other equations.
The Akaike criterion also improves in the M1 equation, but deteriorates slightly in
the other equation, while the Schwarz criterion always deteriorates. On the other
hand, the values of the Box-Ljung Q statistic improve considerably in all three
equations; now the null hypothesis that there is no autocorrelation left in the re-
siduals can never be rejected. The lowest p value is 0.18. Thus we will use the
VAR(4) model for all further calculations in this chapter.

Contrary to the parsimony principle applied in the univariate analysis, the
VAR(p) models are over-parameterised systems. The individual parame-
ters can hardly be interpreted meaningfully. For this reason, other methods,
like Granger causality tests, impulse response analyses and variance de-
compositions, are employed. These methods are presented in the follow-
ing.
136      4 Vector Autoregressive Processes


4.2 Granger Causality

Now we will consider the Granger causal relations between the two sub-
vectors X1 and X2 of the vector X. X1 has the dimension m and X2 the di-
mension k – m, 0 < m < k. For the MA representation we get
                  ª X1,t º    ª P º ª B (L) B12 (L) º ª U1,t º
(4.11a)      Xt = «       » = « 1 » + « 11             »«        » .
                  ¬ X 2,t ¼   ¬P 2 ¼ ¬ B21 (L) B22 (L) ¼ ¬ U 2,t ¼
The corresponding AR representation is:

                 ª A11 (L) A12 (L) º ª X1,t º ª G1 º ª U1,t º
(4.11b)          « A (L) A (L) » « X » = « G » + « U » .
                 ¬ 21       22     ¼ ¬ 2,t ¼  ¬ 2 ¼ ¬ 2,t ¼
Irrespective of instantaneous causality; the following is true for (4.11):
(i)   X2 is not Granger causal to X1 if and only if B12(L) Ł 0. Analogous to
      Section 3.2.1 it holds that B12(L) Ł 0 is equivalent to A12(L) Ł 0. Thus,
      it also holds that X2 is not Granger causal to X1 if and only if A12(L) Ł
      0 in the corresponding AR representation.
(ii) X1 is not Granger causal to X2 if and only if B21(L) Ł 0. Analogous to
     Section 3.2.1 it holds that B21(L) Ł 0 is equivalent to A21(L) Ł 0. Thus,
     it also holds that X1 is not Granger causal to X2 if and only if A21(L)
     Ł 0 in the corresponding AR representation.
As in the bivariate case instantaneous relations involve some complica-
tions. The variance-covariance matrix of the system (4.1) can be decom-
posed into:
(4.12)                            Ȉuu = P P',
where P is a regular lower triangular matrix. Such a (Choleski) decomposi-
tion exists for each regular variance-covariance matrix. Using this triangu-
lar matrix, the MA representation (4.3) can be transformed in the following
way:
                                         f
(4.13)           Xt =    ȝ + Ut – ¦ B j U t  j
                                     j       1

                                                     f
                 Xt =    ȝ + P P-1 Ut – ¦ B j P P 1 U t  j
                                                 j       1
                                                     4.2 Granger Causality   137

                                           f
                  = ȝ + P Wt – ¦ 4 j Wt  j
                                       j       1


                  = ȝ + Ĭ(L) Wt,
with
                  Ĭj = Bj P, Ĭ0 = P, Wt = P-1 Ut,
                  Ȉww = P-1 Ȉuu P-1' = P-1 P P' P-1'
                       = Ik .
Thus, the following decomposition exists for the subvectors:

                                          0
                   ª X1,t º    ª P1 º ª 411  0 º ª W1,t º
              Xt = «       » = «    » + « 0   0 » «       »
                   ¬ X 2,t ¼   ¬P 2 ¼ ¬ 421 4 22 ¼ ¬ W2,t ¼

                        ª 41 4112 º ª W1,t 1 º
                      + « 111  1 » «           » + ... .
                        ¬ 421 4 22 ¼ ¬ W2,t 1 ¼
W is a vector of innovations whose elements – contrary to the elements of
U – are also instantaneously uncorrelated. Moreover, the variances of these
elements are 1.
   The transformation with matrix P implies an ordering of the variables;
causal directions are assumed for the instantaneous relations. The variable
xi has an impact on the variable xj, j > i, while the instantaneous relation in
the reverse direction is excluded. In terms of traditional econometrics, this
implies that the model is exactly identified and, correspondingly, the pa-
rameters of the structural form can be consistently estimated using OLS.
This method to identify the model is one possibility to proceed from the
reduced to the structural form of a simultaneous system of equations and to
give the innovations an economic interpretation. This structural form is
called structural VAR. Due to the exact identification, the residuals of the
different equations are not crosscorrelated with each other.
   The following holds for this system: There is no instantaneous causality
if and only if 4021 = 0. In this situation Ȉuu is block diagonal, i.e. it holds
that
                                E[U1,t U2,t'] = 0.
The fact that X2 is not causal to X1 and that there is no instantaneous cau-
sality leads to
138    4 Vector Autoregressive Processes


                      4021 = 0  4112 = 412
                                         2
                                            = ... = 0.
Such results depend, of course, on the sequence of the different variables,
i.e. on the kind of causal order assumed for the instantaneous relations.

Example 4.5
If we divide the three variables of the vector of Example 4.4 in the following way:
              X1 = [ǻ4ln(GDPr)], X2' = [ǻ4ln(M1r) GLR – GSR],
we get the following results by using Wald tests:
              (i)   H0: ¬ (X2 ĺ X1): F̂ 2 =      28.272 (p = 0.000),

              (ii) H0: ¬ (X1 ĺ X2): F̂ 2 =       25.992 (p = 0.001),

              (iii) H0: ¬ (X1 – X2):    F̂ 2 =    0.658 (p = 0.720).

Thus, there is feedback but no instantaneous relation between the subvectors.


4.3 Impulse Response Analysis

In the following, we show how, at a specific point of time t0, an impulse
that originates from one equation proceeds through the system: How does
a change in the residuals u i,t 0 or in the innovations w i,t 0 , i = 1, ..., k, influ-
ence the components of the vector X? In system (4.3), the use of the multi-
variate Wold representation instead of the MA representation
           Xt = ȝ + Ȍ0 Ut + Ȍ1 Ut-1 + Ȍ2 Ut-2 + Ȍ3 Ut-3 + ... ,
                       Ȍ0 = I, Ȍi = - Bi, i = 1, 2, ...,
with \ Wji , Ĳ = 0, 1, 2, ..., results in the so-called impulse response se-
quences. They measure the effect of a unit impulse, i.e. of a shock with the
size of one standard deviation of the error term ui of the variable i at time t0
on the variable j in later periods. As Ut are the residuals of the reduced
form, they are in general crosscorrelated and, therefore, have no direct
economic interpretation. Thus, it makes sense not to investigate shocks
with respect to the residuals U but with respect to the innovations W which
are not crosscorrelated. Because of the Choleski decomposition of the
variance-covariance matrix of the residuals U, in accordance with the con-
siderations in Section 4.2, the innovations can be calculated as
                                   Wt = P-1 Ut,
                                                 4.3 Impulse Response Analysis   139

with a lower triangular matrix P. Due to (4.13), the MA representation of
X can – analogously to the Wold decomposition – be written as
(4.14)          Xt = ȝ + ĭ0 Wt + ĭ1 Wt-1 + ĭ2 Wt-2 + ...
with ĭ0 = P and ĭi = -Bi P = Ȍi P, i = 1, 2, ... . Here, I0ji are impact multi-
pliers that measure the immediate impact of a unit shock in variable i on
variable j. The lagged effects are described by the k2 impulse response se-
quences IWji , i,j = 1, ..., k, Ĳ = 1, 2, ..., ; they show how each of the k vari-
ables are influenced by each of the k innovations. The reaction of the vec-
tor X at time t0+m on the innovations at time t0 leads to
                      'X t 0  m = Ȍm U t 0           = ĭm Wt 0 ,

or, if we only consider non crosscorrelated unit shocks,
                                'X t 0  m = ĭm .

If we set m = 1, 2, ..., we can observe (and graphically represent) the time
path. If it is a stationary system, the effect expires over time, i.e. the values
of the impulse response function (at least asymptotically) approach zero.
This implies that after a unique shock the variables return to their mean.
   The cumulative impulse response function describes the effects of a
permanent shock on the system. The cumulative effects of a unit shock up
to period t0+m are given by
                                         m

                                     ¦)
                                     j       0
                                                  j



If, in a stationary system, m tends to infinity, we get

                    ª m    º
(4.15)         lim « ¦ ) j » = ĭ(1) = B(1) P = A(1)-1 P
               m of
                    ¬j 0   ¼
for the long-run effect.

Example 4.6
Again, we consider the model of Example 4.1. To calculate the innovations of this
VAR(1) process, it is assumed that x2 does not have an instantaneous impact on
x1. For the decomposition Ȉuu = P P', we denote the elements of the lower triangu-
lar matrix as:
140         4 Vector Autoregressive Processes


                                           ªp          0 º
                                       P = « 11               .
                                           ¬ p 21     p 22 »¼

Due to (4.12) we get
                                                   2
                              ª1.00 0.70 º   ª p11              p11 p 21 º
                              «0.70 1.49 » = «                   2          »
                              ¬          ¼   ¬ p11 p 21        p 21  p 222 ¼

From this we derive p11 = p22 = 1 and p21 = 0.7. The innovations W can be calcu-
lated as

                          ª w1,t º     u
                                   -1 ª 1,t º ª 1.0 0.0 º ª u1,t º
                          «w » = P «u » = «             » « »,
                          ¬ 2,t ¼     ¬ 2,t ¼ ¬-0.7 1.0 ¼ ¬ u 2,t ¼
or



                    Response of X1 to X1                              Response of X1 to X2
     1.2                                            1.2

     0.8                                            0.8

     0.4                                            0.4

     0.0                                            0.0

     -0.4                                           -0.4
            2   4    6   8 10 12 14 16 18 20               2      4    6   8 10 12 14 16 18 20

                    Response of X2 to X1                              Response of X2 to X2
     1.2                                            1.2
     1.0                                            1.0
     0.8                                            0.8
     0.6                                            0.6
     0.4                                            0.4
     0.2                                            0.2
     0.0                                            0.0
     -0.2                                           -0.2
            2   4    6   8 10 12 14 16 18 20               2      4    6   8 10 12 14 16 18 20


                            Figure 4.1: Impulse response functions
                                                                   4.3 Impulse Response Analysis                       141

                                   w1,t = u1,t,
                                   w2,t = u2,t – 0.7 u1,t.
For the impulse response analysis, we need representation (4.14). This leads to
                           Xt = A1 Xt-1 + Ut,
                                               f
                                   =
                                           i
                                            ¦A U   0
                                                       i
                                                       1    t i



                                   f                                         f
                           =   ¦ A1i P P 1 U t i =
                               i       0
                                                                         ¦) W
                                                                         i       0
                                                                                     i       t i   ,

with
                                       ĭi = A1i P, i = 1, 2, ... .

Thus, we get the following matrices:



           Accumulated Response of X1 to X1                              Accumulated Response of X1 to X2
       3                                                             3
       2                                                             2
       1                                                             1
       0                                                             0
   -1                                                               -1
   -2                                                               -2
   -3                                                               -3
   -4                                                               -4
                 5       10            15              20                                5              10   15   20

           Accumulated Response of X2 to X1                              Accumulated Response of X2 to X2
       6                                                             6
       5                                                             5
       4                                                             4
       3                                                             3
       2                                                             2
       1                                                             1
       0                                                             0
   -1                                                               -1
                 5       10            15              20                                5              10   15   20


                     Figure 4.2: Cumulative impulse response functions
142        4 Vector Autoregressive Processes


                 ª 1.0 0.0 º        ª0.39 -0.30 º        ª 0.20 -0.36 º
            ĭ0 = «         » , ĭ1 = «           » , ĭ2 = «            »,
                 ¬-0.7 1.0 ¼        ¬0.12 0.60 ¼         ¬-0.05 0.45 ¼

                 ª 0.13 -0.35º
            ĭ3 = «           » , ...
                 ¬-0.09 0.38¼
The numerical results as well as the graphical representations of the impulse re-
sponse functions in Figure 4.1 show that an innovation in x1 does not have a per-
manent effect on the system. The impact on the variable itself as well as on x2 is
dying away relatively fast. For the latter, we get a slightly positive impact for the
first period, and, subsequently, very small negative impacts.
   By contrast, a shock in x2 has a longer lasting impact on the variable itself as
well as on x1. As, in order to identify the system, we assumed that P is a lower tri-
angular matrix, i.e. that x2 has no instantaneous impact on x1, the first value in the
impulse response function of x1 on x2 is zero.


       Response of DLGDPR to DLGDPR              Response of DLGDPR to DLM1R              Response of DLGDPR to GLSR
 1.6                                      1.6                                      1.6
 1.2                                      1.2                                      1.2
 0.8                                      0.8                                      0.8
 0.4                                      0.4                                      0.4
 0.0                                      0.0                                      0.0
-0.4                                      -0.4                                     -0.4
-0.8                                      -0.8                                     -0.8
            5      10     15         20              5      10      15        20              5      10     15         20

       Response of DLM1R to DLGDPR               Response of DLM1R to DLM1R               Response of DLM1R to GLSR
  3                                         3                                        3

  2                                         2                                        2

  1                                         1                                        1

  0                                         0                                        0

  -1                                       -1                                       -1

  -2                                       -2                                       -2
            5      10     15         20              5      10      15        20              5      10     15         20

        Response of GLSR to DLGDPR                Response of GLSR to DLM1R                Response of GLSR to GLSR
 1.2                                      1.2                                      1.2

 0.8                                      0.8                                      0.8

 0.4                                      0.4                                      0.4

 0.0                                      0.0                                      0.0

-0.4                                      -0.4                                     -0.4

-0.8                                      -0.8                                     -0.8
            5      10     15         20              5      10      15        20              5      10     15         20



                               Figure 4.3: Impulse response functions
                                                            4.3 Impulse Response Analysis                    143

   The cumulative impulse response functions in Figure 4.2 show that after the
initial effect of the reaction of x2 on x1 the system converges monotonically to its
long-run limiting values (multipliers). Because of (4.15) and (E4.1) we get
                                                ª 2.714 -4.268 º
                      A(1)-1 P = (I – A1)-1 P = «              ».
                                                ¬-0.286 5.714 ¼


      Accummulated Response                 Accummulated Response                   Accummulated Response
      of DLGDPR to DLGDPR                    of DLGDPR to DLM1R                      of DLGDPR to GLSR

  8                                 8                                          8
  6                                 6                                          6
  4                                 4                                          4
  2                                 2                                          2
  0                                 0                                          0
 -2                                -2                                         -2
 -4                                -4                                         -4

        5      10      15     20                5         10     15      20          5       10     15       20

      Accummulated Response                 Accummulated Response                    Accummulated Response
       of DLM1R to DLGDPR                    of DLM1R to DLM1R                         of DLM1R to GLSR

  8                                 8                                           8
  6                                 6                                           6
  4                                 4                                           4
  2                                 2                                           2
  0                                 0                                           0
 -2                                -2                                          -2
 -4                                -4                                          -4

        5      10      15     20                5         10     15      20              5    10     15       20

      Accummulated Response                 Accummulated Response                    Accummulated Response
       of GLSR to DLGDPR                      of GLSR to DLM1R                          of GLSR to GLSR
  8                                 8                                           8
  6                                 6                                           6
  4                                 4                                           4
  2                                 2                                           2
  0                                 0                                           0
 -2                                -2                                          -2
 -4                                -4                                          -4

       5      10       15     20        2   4       6   8 10 12 14 16 18 20              5    10     15       20



                    Figure 4.4: Cumulative impulse response functions


Example 4.7

For the system given in Examples 4.4 and 4.5, ordinary and cumulative impulse
response functions are estimated. We assumed for the instantaneous relations that
the interest rate differential has an impact on the quantity of money as well as on
GDP, while the instantaneous impact of real M1 is restricted to GDP. Thus, we as-
144      4 Vector Autoregressive Processes

sume the following ordering of the variables: (GLR – GSR) ĺ ǻ4ln(M1r) ĺ
ǻ4ln(GDPr).
   The results are presented in Figures 4.3 and 4.4. Furthermore, the analytically
derived 95 percent confidence intervals are indicated. Figure 4.3 shows that in the
short run, the increase of the interest rate differential has a positive impact on real
money as well as – with some delay – on GDP. (GEBHARD KIRCHGÄSSNER and
MARCEL R. SAVIOZ (2001) showed that this effect results from the reduction of
the short-run interest rate and not from an increase of the long-run interest rate.)
Additionally, there is a short-run impact of real M1 on GDP. This impact lasts two
years at the most; after nine quarters the impulse response function is no longer
significantly different from zero. As Figure 4.4 shows, the only long-run impact is
that of the interest rate differential on the two other variables; all other cumulative
impulse response functions are no longer significantly different from zero after
three years at the latest.


4.4 Variance Decomposition

The starting point of the following discussion is the transformed Wold rep-
resentation (4.14)
                                           f
                     Xt = ȝ +          ¦)W
                                       j       0
                                                       j           t j   , Ȉww = I.

Taking conditional expectations, we get
                               W1                                                f
            Et[Xt+Ĳ] = ȝ + ¦ ) j E t [Wt W j ]                           + ¦ ) j Wt W j .
                               j   0                                          j       W


Due to Et[Wt+s] = 0 for s > 0 the terms for j = 0, 1, ..., Ĳ-1 can be omitted,
while the values for j  Ĳ are already realised and therefore observable.
Thus, following the considerations in Section 2.4, we get for the optimal
forecasts
                                                               f
(4.16)                     X̂ t ( W) = ȝ + ¦ ) j Wt W j .
                                                           j       W


For the data generating process we can write
                                                       f
                          Xt+Ĳ = ȝ + ¦ ) j Wt W j .
                                                   j       0


The forecast error is given by
                                                                                  4.4 Variance Decomposition       145


(4.17)                                  Ft(Xt+Ĳ) = Xt+Ĳ – X̂ t ( W)
                                                                     W 1
                                        Ft(Xt+Ĳ) =                   ¦)W
                                                                     j       0
                                                                                   j       t W j   .

With an increasing forecast horizon, i.e. for Ĳ o f, the forecast error con-
verges to the stochastic part of the process.
  The forecast error can be decomposed in the following way: For its j-th
component, j İ {1, ..., k}, it holds that
                                                W 1                                                  W 1
         xj,t+Ĳ – x̂ j,t ( W)           =       ¦I w
                                                i       0
                                                             i
                                                             j1      1,t W i         + ... + ¦ Iijk w k,t Wi
                                                                                                      i   0


                                                    k       ªW  1                               º
                                        =       ¦ «¦ I w                     i
                                                                             jm     m,t W i    »,
                                            m           1   ¬i 0                                 ¼
i.e. we have a summation not only over the different time periods, i = 0, ...,
Ĳ-1, but also over the contributions of the different innovations wm, m = 1,
..., k.
    As Ȉww = I, i.e. because the individual elements of W are not only white
noise and uncorrelated with each other but also have variance of one, it
holds for the variance of the components of this forecast error that
                                                                     2
                                             ª§ k W  1             · º
(4.18)        E[(xj,t+Ĳ – x̂ j,t ( W) ) ] = E ¨ ¦ ¦ I jm w m,t Wi ¸ »
                                             «      2    i

                                             «¬© m 1 i 0            ¹ »¼
                                                                         k        W 1
                                                                                               2
                                                            =        ¦ ¦I
                                                                     m       1 i       0
                                                                                            i
                                                                                            jm       ,

i.e. because of E[wm,t+Ĳ-i wr,t+Ĳ-s] = 0 except for m = r and i = s, all cross
terms are omitted, and because of E[(wm,t+Ĳ-i)2] = 1 only the squares of the
coefficients are left.
   On the other hand, the variance can be decomposed into those parts that
are generated by the impact of the individual innovations wm, m = 1, ..., k,
on the variable j when a forecast over Ĳ periods is performed. In this case,
we get
                                    W 1
                                                   2
                                    ¦I
                                    i   0
                                                i
                                                jm

(4.19)            ZWjm          k        W 1
                                                                  , m = 1, ..., k, Ĳ = 1, 2, ...
                                                            2
                           ¦
                           s        1 i
                                        ¦ Iij s
                                            0
146     4 Vector Autoregressive Processes

for the respective shares.
   With an increasing time horizon, i.e. for W o f, it is not only the vari-
ance of the forecast error but also the variance of the variable itself that can
be decomposed into those fractions that are generated by the different in-
novations wm. As these fractions are, by construction, orthogonal to each
other, they add up to one. Thus, the analysis of the forecast errors leads to
a decomposition of the variances of the system’s variables.

Example 4.8
The variance decomposition of the VAR(1) process described in Examples 4.1 and
4.6 is presented in Table 4.1. Here, the immediate effects in the first period are
presented, the effects after 4, 8, and 20 periods as well as the long-run effects. In
the first period, according to the identifying restriction that there is no instantane-
ous effect from x2 to x1, in the first period the variance of x1 is exclusively gener-
ated by its own innovations. The impact of x2 on x1 increases monotonically and
in the long-run generates about 42 percent of the variance of this variable. Con-
trary to this, the impact of x1 on x2, rather strong with 33 percent in the first pe-
riod, decreases over time, and in the long-run generates only about 20 percent of
the variance of x2. Thus, 80 percent of the variance of x2 are generated by its own
innovations and only 20 percent by those of x1, while only 58 percent of the variance
of x1 are generated by its own innovations, but 42 percent by the innovations of x2.


                         Table 4.1: Variance Decomposition

      Forecast horizon                              x1                     x2

                                  x1             100.000                  0.000
          1 period
                                  x2               32.834                67.166

                                  x1               77.866                22.134
         4 periods
                                  x2               23.089                76.911

                                  x1               65.085                34.915
         8 periods
                                  x2               20.957                79.043

                                  x1               58.527                41.473
        20 periods
                                  x2               19.838                80.162

                                  x1               58.020                41.980
          infinity
                                  x2               19.748                80.252
                                             4.4 Variance Decomposition         147

Example 4.9
The variance decomposition for the vector autoregressive process of Example 4.4
is given in Table 4.2a. First, we again suppose the causal direction (GLR – GSR)
ĺ ǻ4ln(M1r) ĺ ǻ4ln(GDPr). We consider the immediate reaction, i.e. the reaction
in the same quarter in which the innovation occurs, forecast horizons of one, two,
and five years, as well as an infinite forecast horizon in order to capture the de-
composition of the total variance.


                     Table 4.2a: Variance Decomposition
                                 1/65 – 4/89, 100 Observations

  Forecast horizon                    ǻ4ln(GDPr)       ǻ4ln(M1r)      GLR – GSR

                        ǻ4ln(GDPr)        99.231           0.482           0.286
      1 quarter          ǻ4ln(M1r)         0.000         92.202            7.798
                        GLR – GSR          0.000           0.000        100.000

                        ǻ4ln(GDPr)        82.898         12.479            4.621
       1 year            ǻ4ln(M1r)         8.994         41.336          49.670
                        GLR – GSR          9.223           0.487         90.289

                        ǻ4ln(GDPr)        51.948         15.604          32.448
       2 years           ǻ4ln(M1r)        13.896         34.910          51.193
                        GLR – GSR         16.124           8.998         74.878

                        ǻ4ln(GDPr)        48.235         16.049          35.716
       5 years           ǻ4ln(M1r)        14.738         35.244          50.018
                        GLR – GSR         15.719         13.062          71.219

                        ǻ4ln(GDPr)        48.187         16.132          35.681
       infinity          ǻ4ln(M1r)        14.733         35.258          50.009
                        GLR – GSR         15.676         13.079          71.244



In the first quarter, the variances of all variables are mainly driven by their own
innovations. This also holds for the growth rate of real GDP. Again, this indicates
that there is hardly any instantaneous relation between the two monetary variables
on the one hand and the real variable on the other hand. During the first year it is
mainly the quantity of money that has an impact on GDP, while the interest rate
148    4 Vector Autoregressive Processes

spread, which has already had a considerable impact on the quantity of money in
the first year, only fully affects real GDP in the second year. After about two
years, the process of monetary policy influencing real developments is almost
complete. Altogether, about half of the variance of the growth rate of real GDP is
caused by its own innovations, while the other half results from monetary innova-
tions. About two thirds of them are generated by the interest rate differential and
less than one third by the quantity of money. Moreover, there is a clear hierarchy
between the two monetary variables: while the interest rate has a strong impact on
the quantity of money, also in the long run, the reverse impact is quite weak. In
addition, the feedback from real development to monetary variables is also rather
weak.

                     Table 4.2b: Variance Decomposition
                                 1/65 – 4/89, 100 Observations

  Forecast horizon                   ǻ4ln(GDPr)      ǻ4ln(M1r)      GLR – GSR

                       ǻ4ln(GDPr)       99.231          0.667          0.102
      1 quarter        ǻ4ln(M1r)         0.000        100.000          0.000
                       GLR – GSR         0.000          7.798         92.292

                       ǻ4ln(GDPr)       82.898         15.740          1.361
       1 year          ǻ4ln(M1r)         8.994         60.685         30.321
                       GLR – GSR         9.223          7.326         83.450

                       ǻ4ln(GDPr)       51.948         26.995         21.057
       2 years         ǻ4ln(M1r)        13.896         50.669         35.435
                       GLR – GSR        16.124         11.184         72.692

                       ǻ4ln(GDPr)       48.234         25.978         25.787
       5 years         ǻ4ln(M1r)        14.738         50.970         34.292
                       GLR – GSR        15.719         16.065         68.216

                       ǻ4ln(GDPr)       48.187         26.033         25.780
       infinity        ǻ4ln(M1r)        14.733         50.999         34.286
                       GLR – GSR        15.676         16.136         68.188


As we have shown repeatedly, there is a well pronounced instantaneous relation
between the two monetary variables. Insofar, the order of the variables in the sys-
tem has a considerable impact on the results. To show this, we have changed the
                                              4.5 Concluding Remarks       149

order between these two variables in Table 4.2b, i.e. we now suppose the causal
ordering ǻ4ln(M1r) ĺ (GLR – GSR) ĺ ǻ4ln(GDPr). The result is that the two
monetary variables have about the same impact on the variance of real GDP. On
the other hand, the hierarchy between the two monetary variables mentioned
above is hardly influenced by this.


4.5 Concluding Remarks

The concept of vector autoregressive processes which was originally pro-
posed by CHRISTOPHER A. SIMS (1980) has become an indispensable in-
strument of empirical economic research. One reason is that two new
methods of analysis were developed, impulse response analysis and vari-
ance decomposition, which provided new insights into the dynamic rela-
tions between the variables of a system. However, Chapter 6 will show
that this approach is today mainly employed in the analysis of systems
with nonstationary variables.
   The new procedures are mainly based on the MA representation of the
system. First, the AR representation is used, and a finite order AR process
is estimated. However, to analyse the effects, a transition to the MA repre-
sentation is unavoidable. This shows that the MA representation intro-
duced in Chapter 2 is not only an analytical device but also crucial to the
substantive interpretation of the relations between the different variables of
a system.
   Considering vector autoregressions, it becomes obvious that – compared
to traditional econometrics – the significance of the residuals has drasti-
cally changed. In traditional econometrics, they were merely regarded as
unexplained effects ‘disturbing’ the true relationship between the vari-
ables. In vector autoregressions they are the channel through which new
information flows into the system. For this reason they require special con-
sideration. As the variance decomposition shows, all stochastic variables
are finally generated by such innovations. Statistical analysis has to ask at
what time such an innovation first appears in the system and how it ‘moves
along’ the system. All other substantive questions can be traced back to
these questions.
   Finally, there is the same problem as when we discussed the concept of
Granger causality: data analysis alone is not sufficient to make meaningful
statements about the relations between (economic) variables. First, we
need information on which variables are to be jointly investigated in such a
system. When considering vector autoregressions, this question is of spe-
cial relevance as only rather few variables (with a finite number of lags)
can be included, given the large number of parameters to be estimated.
150    4 Vector Autoregressive Processes

   Furthermore, the problem of how to handle instantaneous relations is
more severe than when testing for Granger causality. If such relations ex-
ist, and they nearly always exist, we need external information, i.e. infor-
mation not included in the data, to order the variables. Even if, at first
glance, the VAR approach seems to get along without theoretical consid-
erations, we need considerable theoretical (pre-)information to apply it cor-
rectly to economic data and to be able to interpret it in a meaningful way.
Here, ‘theory-free’ data analysis is as impossible as in other contexts. A
further development taking this into account is the approach of structural
vector autoregressions where identifying restrictions are used to generate
the innovations W and to give intuitive meaning to them.


References

The methodology of vector autoregressive processes was first proposed by
CHRISTOPHER A. SIMS, Macroeconomics and Reality, Econometrica 48 (1980),
   pp. 1 – 48.
Applications can be found, e.g. in
CHRISTOPHER A. SIMS, Comparing Interwar and Postwar Business Cycles: Mone-
   tarism Reconsidered, American Economic Review, Papers and Proceedings,
   70.2 (1981), pp. 250 – 257; or
CHRISTOPHER A. SIMS, Policy Analysis with Econometric Models, Brookings Pa-
   pers on Economic Activity 1/1982, pp. 107 – 164.
The presentation in this chapter is mainly based on
HELMUT LÜTKEPOHL, Introduction to Multiple Time Series Analysis, Springer,
   Berlin 1991, pp. 9 – 75, 118 – 138.
This textbook offers a comprehensive presentation of this concept and its possi-
bilities. It also shows how confidence intervals can be calculated for impulse re-
sponse functions (pp. 97ff.). In addition, it compares different criteria to determine
the optimal lag length of the VAR (pp. 132ff., p. 181). Proficient introductions are
given in
GEORGE G. JUDGE, R.C. HILL, W.E. GRIFFITHS, HELMUT LÜTKEPOHL and T.-C.
   LEE, Introduction to the Theory and Practice of Econometrics, Wiley, New
   York 1988, Chapter 18;
WALTER ENDERS, Applied Econometric Time Series, Wiley, New York, 2nd edi-
  tion 2004, Chapter 5, as well as in
JAMES H. STOCK and MARK W. WATSON, Vector Autoregressions, Journal of
   Economic Perspectives 15/4 (2001), pp. 101 – 115.
                                                              References      151

In this article it is assessed how well VAR models have addressed the four macro-
economic tasks: data description, forecasting, structural inference, and policy
analysis. A short introduction is also given in
DONALD ROBERTSON and MICHAEL WICKENS, VAR Modeling, in: STEVEN G.
   HALL (ed.), Applied Economic Forecasting Techniques, Harvester Wheat-
   sheaf, New York 1994, pp. 29 – 47.
Error correction models were first used in an investigation on wages and prices
in the United Kingdom carried out by
J. DENNIS SARGAN, Wages and Prices in the United Kingdom: A Study in Econo-
    metric Methodology, in: P.E. HART, G. MILLS and J.K. WHITAKER (eds.),
    Econometric Analysis for National Economic Planning, Butterworth, London
    1962, pp. 25 – 54.
This concept became popular by a paper about the consumption function in the
United Kingdom,
JAMES G.H. DAVIDSON, DAVID F. HENDRY, F. SRBA and Y. STEPHEN YEO,
   Econometric Modelling of the Aggregate Time Series Relationship between
   Consumers‘ Expenditure and Income in the United Kingdom, Economic
   Journal 88 (1978), pp. 661 – 692.
The LSE approach, that goes back to J. DENIS SARGAN and DAVID F. HENDRY, is
described and confronted with other approaches in
ADRIAN PAGAN, Three Econometric Methodologies: A Critical Appraisal, Journal
   of Economic Surveys 1 (1987), pp. 3 – 24.
A comprehensive introduction to this approach is presented in a textbook by
DAVID F. HENDRY, Dynamic Econometrics, Oxford University Press, Oxford et al.
   1995.
The difference between statistical and econometric approaches to empirically ana-
lyse economic problems is discussed, for example, in
CLIVE W.J. GRANGER, Comparing the Methodologies Used by Statisticians and
   Economists for Research and Modeling, Journal of Socio-Economics 30
   (2001), pp. 7 – 14.
For the structural VAR see, for example
GIANNI AMISANO and CARLO GIANNINI, Topics in Structural VAR Econometrics,
   Springer, Berlin et al., 2nd edition 1997,
JÖ
 RG BREITUNG, RALF BRÜGGEMANN and HELMUT LÜTKEPOHL, Structural Vector
   Autoregressive Modeling and Impulse Responses, in: H. LÜTKEPOHL and M.
   KRÄTZIG Applied Time Series Econometrics, Cambridge University Press,
   Cambridge 2004, pp. 159 – 196.
5 Nonstationary Processes




So far we have only considered stationary time series. As a matter of fact,
however, most economic time series are trending, like, for example, the
GDP series investigated in Chapter 1. We tried to eliminate the trend by
using first differences or growth rates. These filtered series can be investi-
gated by employing the concepts that were developed for the analysis of
stationary time series.
   There are, however, two basic problems with this procedure. Firstly, if
we employ these transformations, information is lost about the trends
which have been eliminated. However, if there exist relations between the
long-run components of economic time series, this lost information might
be of special interest to economists. Secondly, we exclusively used visual
inspection to determine whether a series is stationary or nonstationary.
This procedure might raise problems whenever the roots of the lag poly-
nomial in the autoregressive part of a possible stationary process are close
to one. In this case, it is appropriate to use test procedures in order to de-
cide by means of statistical criteria whether we will consider the time se-
ries as a realisation of a stationary or a nonstationary process.
   In the following, we first present two different concepts of trending be-
haviour, the concepts of deterministic and of stochastic trends (Section
5.1). Then we discuss the elimination of such trends (Section 5.2). In Sec-
tion 5.3 we present tests for unit roots (stationarity) and in Section 5.4 pos-
sible decompositions of time series in a stationary and a nonstationary
component. In Section 5.5 we present some generalisations before we fi-
nally discuss economic implications of models with either deterministic or
stochastic trends. (Section 5.6).


5.1 Forms of Nonstationarity

Due to the fact that a time series represents only one realisation of a sto-
chastic process, only some special forms of nonstationarity can be handled.
One possibility is that the expectations are time dependent, i.e. that the
mean is determined by a deterministic trend. Such a trend might usually be
154      5 Nonstationary Processes

modelled or at least approximated by a polynomial in t, possibly after hav-
ing performed logarithmic transformations. Such a process is no longer
mean stationary but still covariance stationary. Such trendstationary proc-
esses can be written as
                                       m
(5.1)                          y t = ¦ G j t j + xt ,
                                       j 0


where x is a stationary and invertible ARMA(p,q) process with mean zero.
Thus, we have

(5.2)                         Į(L) xt = ȕ(L) ut .
It is easy to see that
                                       m
                           E[yt] =    ¦G t
                                       j 0
                                             j
                                                 j
                                                     = ȝt

and that
                E[(yt – ȝt)( yt+Ĳ – ȝt+Ĳ)] = E[xt xt+Ĳ] = Ȗx(Ĳ).

        500


        400


        300


        200


        100


          0
                         25             50                  75       100


              Figure 5.1: Linear and quadratic trend, superimposed
                          by a pure random process
                                           5.1 Forms of Nonstationarity   155

Because of the constant variance of the process, its realisations fluctuate
with limited amplitude around the deterministic trend. Refer to Figure 5.1,
where a linear and quadratic trend is superimposed by a pure random proc-
ess. The deviations from the trend are always transitory. If long-run fore-
casts are performed for such a process, these follow the mean function, and
the forecast errors stay finite, no matter how long the forecast horizon
might be. This is essentially a deterministic approach. Despite the fact that
such deterministic trends are quite often used in popular analyses, they are
in most cases no appropriate instrument for long-run forecasts.

      400


      300


      200


      100


         0


     -100
                       25             50                 75        100


                Figure 5.2: Realisations of AR(1) processes
                            Į = 1.03 (------), Į= 0.97 (———)

Another possibility to generate nonstationary processes is to use autore-
gressive processes which violate the stability conditions. If we consider,
for example, an AR(1) process with Į > 1 and the given initial condition
y0,
                         yt = Į yt-1 + ut, Į > 1
we immediately get
                                         t 1
                        y t = y 0 Įt  ¦ D j u t  j .
                                         j 0


Therefore, we get
156     5 Nonstationary Processes

                            E[yt] = y0 Įt = ȝt .
Thus, the mean of this process grows exponentially for Į > 1.
  The variance of this process can be calculated as follows,
                  V[yt] = (1 + Į2 + Į4 + ...+ Į2(t-1)) V 2u ,

                                D 2t  1 2
                          =             Vu ,
                                D2  1
i.e. the variance also grows exponentially with t. Thus, the process is ex-
plosive.
   We get a stationary development for AR(1) processes if –1 < Į < 1, but
explosive solutions if |Į| > 1. The realisations of such processes with Į =
1.03 and Į = 0.97 are shown in Figure 5.2. If Į < -1 the variance increases
in t as for Į > 1, whereas the mean alternates with an explosive amplitude.
   The special case of Į = 1 results in a random walk:
(5.3)                             yt = yt-1 + ut ,
where u is again a pure random process. Adding a constant term leads to a
random walk with drift,
(5.4)                          yt = į + yt-1 + ut .
For a given initial condition y0 we get the representation
                                                  t
(5.5)                      y t = y0 + į t + ¦ u i .
                                                 i 1

All first and second order moments are time dependent. In particular for
0 < Ĳ < t we get
                          E [yt] = y0 + į t = ȝt ,
                          V[yt] = t ı2 = Ȗ(0,t) ,
                    Cov[yt, yt-Ĳ] = (t – Ĳ) ı2 = Ȗ(Ĳ,t) .
Thus, the autocorrelation function is also time dependent:
                               tW             tW              W
               ȡ(Ĳ,t) =                  =             =   1     .
                              t(t  W)          t               t

The autocorrelation coefficients converge to one for given Ĳ and increasing
t. Thus we get a relatively smooth development of the realisations, despite
the fact that the variance increases with t. Moreover, the random walk is
mean stationary for į = 0. The nonstationarity results from the time de-
                                             5.1 Forms of Nonstationarity   157

pendence of the variance and the covariances. Contrary to the situation of
stationary processes which fluctuate around their mean with a limited am-
plitude, the reversion to a fixed value (mean reverting behaviour) rarely
occurs for nonstationary processes. Figure 5.3 shows the behaviour of a
random walk with and without drift. The linear trend generated by the
positive drift parameter can clearly be recognised.

        160

        140

        120

        100

         80

         60

         40

         20

          0
                         25             50             75            100


          Figure 5.3: Random walk with (-----) and without (––––) drift

It results in an obvious generalisation if the pure random process u in (5.3)
or (5.4), respectively, is substituted by a general, weakly stationary AR-
MA(p,q) process, denoted as x:
(5.6)                         yt = į + yt-1 + xt .
Transforming (5.6) by using wt := yt – yt-1 eliminates the nonstationarity, as
wt = į + xt is stationary. Such processes are called difference stationary or
integrated processes, as the original process recurs by inverting the process
of taking differences, i.e. by summation (integration). Thus, the following
definition generally holds:
• A stochastic process y is integrated of order d (I(d)), if it can be trans-
  formed to a stationary (invertible) stochastic process by differencing d
  times, i.e.
                              (1 – L)d yt = į + xt ,
158      5 Nonstationary Processes

      where x is an ARMA(p,q) process. The original process y is then de-
      noted as an ARIMA(p,d,q) process. It contains d roots of 1.0 (unit roots).
Such processes are characterised by stochastic trends. For a linear stochas-
tic trend, the expectation of the change in the process is constant, whereas
for a linear deterministic trend the change in the process itself is constant.
   Let m = 1 and xt = ut in relation (5.1). We thus get the trend-stationary
process
(5.7)                         yt = į 0 + į1 t + ut ,
whereas relation (5.5) holds for the random walk with drift:
                                                  t
                           y t = y0 + į t + ¦ u i .
                                                 i 1

Both processes contain a linear deterministic trend and a stochastic part.
The latter is stationary in relation (5.7), but nonstationary in relation (5.5).
This implies that shocks only have a transitory effect in (5.7) because they
disappear after one period, whereas they have a permanent impact in (5.5).
   Let wt := yt – yt-1 in equation (5.6) and substitute (5.2). We thus have
                                           E(L)
                            wt =     į +        + ut ,
                                           D(L)
or
(5.8)                     Į(L) wt = Į(1) į + ȕ(L) ut,
or
(5.8')                   Į(L)(1 – L) yt = G + ȕ(L) ut.
We thus get an AR part of order p+1 with one root of 1.0, while all other
roots are larger than 1.0 (in modulus). This is an ARIMA(p,1,q) process. If
first differences are not sufficient to get a weakly stationary process, we
have to difference the series d-times. In this case, equation (5.8') can be
generalised to the ARIMA(p,d,q) process
(5.9)                   Į(L)(1 – L)d yt = G + ȕ(L) ut .
as was already done in the definition above.
                                                 5.2 Trend Elimination     159


5.2 Trend Elimination

To transform the nonstationary processes (5.1) and (5.9) into stationary
processes, the deterministic or the stochastic trend have to be eliminated,
respectively. Let us assume that m = 1 in relation (5.1) and d = 1 in rela-
tion (5.9). In this case, we have a linear deterministic or stochastic trend.
According to their definition, the nonstationarity of I(1) processes can be
eliminated by forming first differences. The same procedure might be ap-
plied to models with a linear deterministic trend. Taking first differences
on both sides of relation (5.1) we get (for m = 1)
                          yt – yt-1 = į1 + xt – xt-1 .
Because of (5.2) this can also be written as

                   Į(L) wt = Į(1) į1 + (1 – L)ȕ(L) ut .
We get a stationary ARMA(p,q+1) process for w which, however, is not
invertible because of the unit root in the MA part. Using first differences
does not lead back to the original stationary process x but to a new station-
ary process which exhibits artificial short-run cycles due to over-
differentiation. (In case of a quadratic deterministic trend, we get similar
results by differencing the series twice.)
   In Figure 5.4, the scatter diagrams between the differences of the non-
stationary series and the original white noise processes, which have gener-
ated the trend stationary and difference stationary series, show clear differ-
ences. Whereas differencing the random walk reproduces exactly the
realisation of the white noise process, the first differences of the trend sta-
tionary process do not correspond to the realisations of the generating
white noise process.
   One might also try to eliminate the linear trend by a regression on a time
trend. The scatter diagrams in Figure 5.5 show that this method is appro-
priate for trend stationary processes. The regression residuals largely cor-
respond to the realisations of the generating white noise process. On the
other hand, there is no relation between the regression residuals and the re-
alisations of the white noise process for integrated processes.
   The results in Table 5.1 further clarify this situation. For the realisation
of a trend stationary process with a constant term of 5.0 and a slope coeffi-
cient of 1.0 we get, as expected, estimates of the regression on time which
are quite close to the true parameters. The adjusted coefficient of determi-
nation is high and the Durbin-Watson statistic gives no indication of first
order autocorrelation. Taking the usual t statistic in case of the realisation
of the random walk, we also get a highly significant regression coefficient
160   5 Nonstationary Processes



                                                                 12



            First differences of the model with a linear trend
                                                                  8

                                                                  4

                                                                  0

                                                                  -4

                                                                  -8


                                                                 -12
                                                                       -8   -6   -4    -2     0    2       4   6   8

                                                                                      Original residuals


                                                                  8

                                                                  6
            First differences of the random walk




                                                                  4

                                                                  2

                                                                  0

                                                                  -2

                                                                  -4

                                                                  -6

                                                                  -8
                                                                       -8   -6   -4    -2     0    2       4   6   8

                                                                                      Original residuals


       Figure 5.4: Scatter diagrams of the first differences against the
                   original residuals of nonstationary processes
                                                                                                  5.2 Trend Elimination   161



                                                             8



           Residuals of the model with a time trend
                                                             6

                                                             4

                                                             2

                                                             0

                                                             -2

                                                             -4

                                                             -6

                                                             -8
                                                                  -8   -6   -4    -2     0    2       4   6   8

                                                                                 Original residuals



                                                            16
           Residuals of the model with a stochastic trend




                                                            12

                                                             8

                                                             4

                                                             0

                                                             -4

                                                             -8

                                                            -12

                                                            -16
                                                                  -8   -6   -4    -2     0    2       4   6   8

                                                                                 Original residuals


Figure 5.5: Scatter diagrams of the residuals of regressions on a time trend
            against the original residuals of nonstationary processes
162      5 Nonstationary Processes


                                                                                   120
                                                                                   100
                        Actual and estimated values
                                                                                   80
                                                                                   60
                                                                                   40
                                                                                   20
           8
                                                                                   0
           4

           0

          -4
                                                    Residuals
          -8
                   10    20     30      40     50     60    70       80     90   100

                                     Model with a linear trend


                                                                                       150

                        Actual and estimated values
                                                                                       100
          20


          10                                                                           50


           0
                                                                                       0

         -10
                                                                Residuals

         -20
                   10     20    30       40    50      60       70    80    90   100
                               Model with a random walk with drift

      Figure 5.6     Actual and estimated values and residuals of the models with
                    linear deterministic and stochastic trends
                                                  5.3 Unit Root Tests     163

for the trend variable. Furthermore, we get – for the ‘wrong’ model – an
acceptable value of the coefficient of determination, even if the Durbin-
Watson statistic correctly indicates high first order autocorrelation. This is
also true for the random walk with drift. However, the coefficient of de-
termination and the t statistic of the regression coefficient of the trend
variable are now much higher due to the fact that this process implicitly
contains a linear trend.

                Table 5.1: Results of Linear Trend Elimination
                           (100 Observations)




Figure 5.6 shows the residuals, the actual and the estimated values of re-
gressions of the model with linear trend and the random walk with drift on
a linear trend. It is obvious that the residuals of the model of a random
walk with drift still contain systematic variations which might be wrongly
interpreted as genuine cycles.
   These examples clearly indicate that the analysis of nonstationary time
series requires a serious investigation of the trending behaviour, i.e. of the
causes of the nonstationarity, as an inappropriate trend elimination proce-
dure might generate artificial movements in the resulting time series. There
is a risk that these statistical artefacts are interpreted in terms of econom-
ics.


5.3 Unit Root Tests

As we have seen, it is important to take the kind of nonstationarity into ac-
count, i.e. to ask whether the series contains a deterministic or a stochastic
trend when it comes to transforming nonstationary into stationary time se-
ries. Otherwise, statistical artefacts might appear in the transformed series.
Within the framework of the Box-Jenkins approach, nonstationary behav-
164      5 Nonstationary Processes

iour of time series is covered by ARIMA(p,d,q) models. Time series ana-
lysts have long tried to find the order of differencing, d, leading to a sta-
tionary ARMA process simply by considering the autocorrelation function.
For these purposes, the estimated correlograms of the levels and the suc-
cessive differences are investigated. If the autocorrelation coefficients de-
crease very slowly with increasing order, this is taken as evidence of non-
stationarity. The following rule of thumb can be used for this procedure:
Determine the order of differencing in such a way that the autocorrelation
coefficients approach zero quite rapidly and that the variance of the result-
ing series is smallest compared to variances resulting from other orders of
differencing. Generally, this guarantees that there is no overdifferencing:
overdifferenced series often have a rather pronounced negative first order
autocorrelation coefficient, and the estimated variance of the series is often
increased by the transformation which actually leads to overdifferencing.
   This descriptive procedure can be generalised if not only multiple unit
roots are determined by successive differencing but when, quite generally,
all roots with an absolute value of one are determined in the characteristic
equation or in the lag polynomial of the autoregressive part.
   This approach, which goes back to GEORGE C. TIAO and RUEY S. TSAY
(1983), uses the following model as starting point:
(5.10)                     Ș(L)Į(L)yt = į + ȕ(L)ut ,
where all roots of Ș(L) = 0 are on the unit circle and all roots of Į(L) = 0
and ȕ(L) = 0 are outside the unit circle. If, instead of the true model (5.10),
autoregressive models with increasing order k = 1, 2, ..., pmax are estimated
with ordinary least squares,
(5.11)             yt = a0 + a1 yt-1 + ... + ak yt-k + v (k
                                                         t ,
                                                            )



it can be shown that all roots on the unit circle are consistently estimated.
This is true despite the fact that the residuals of (5.11) will usually be auto-
correlated because of the wrong AR order and/or the missing MA part.
Due to the autocorrelation of the residuals, however, this consistency result
does not hold for the roots of the stable part of the model. But even if the
order of the estimated AR process exceeds the order of the nonstationary
part Ș(L), the number of the roots on the unit circle remains constant. This
stability property can be used to determine all roots which cause nonsta-
tionarity. In order to do so, the roots of the characteristic equation (or the
corresponding lag polynomial) of the AR(k) process in equation (5.11)
(5.12)        Ȝk – â1 Ȝk-1 – … – â k = 0, k = 1, 2, ..., pmax ,
                                                     5.3 Unit Root Tests    165

are successively calculated. This allows us to determine the degree of the
polynomial of the nonstationary autoregressive factor as well as the corre-
sponding transformation which has to be applied in order to eliminate this
factor.


5.3.1 Dickey-Fuller Tests

The procedures described so far neither provide a formal test nor do they
allow to distinguish between trend stationary and difference stationary be-
haviour of a time series. Both demands can principally be satisfied by us-
ing unit root tests. Such tests have first been developed by WAYNE A.
FULLER (1976, pp. 366 ff.) as well as by DAVID A. DICKEY and WAYNE A.
FULLER (1979, 1981).
   If we set m = 1 in relation (5.1) and if we suppose that we have a sta-
tionary AR(1) process in (5.2), we get
                                                  1
(5.13)                   yt = į0 + į1 t +              ut
                                               1  D1L
or
           yt = [(1 – Į1)į0 + Į1 į1] + (1 – Į1)į1 t + Į1 yt-1 + ut .
With Į = (1 – Į1)į0 + Į1 į1, ß = (1 – Į1)į1 and ȡ = Į1, this relation can be
written as
(5.14)                     yt = Į + ß t + ȡ yt-1 + ut .
If the AR(1) process has a unit root, i.e. if Į1 = 1,
(5.15)                         yt = į1 + yt-1 + ut
leads to a random walk with drift, which can be used as the null hypothesis
of a test, while the alternative hypothesis, |Į1| < 1, leads to a trend station-
ary process.
   If we want to distinguish between a stationary AR(1) process with a
mean different from zero and a nonstationary AR(1) process, with į0  0
and į1 = 0 and under the null hypothesis Į1 = 1,
                                yt = yt-1 + ut
leads to a random walk without drift, while the alternative is a stationary
AR(1) process with mean different from zero.
   If we can assume a priori that the mean is zero, i.e. that į0 = 0, the null
hypothesis Į1 = 1 again leads to a random walk without drift, whereas the
alternative is
166      5 Nonstationary Processes

                         yt = ȡ yt-1 + ut with |ȡ| < 1.
These distinctions with respect to the alternative hypotheses are necessary
as in all three cases even the asymptotic distributions under the null hy-
pothesis no longer correspond to the standard distributions. They also de-
pend on other parameters, especially on those of the trend and the mean. If
we start from the general model (5.14), the null hypothesis is ȡ = 1 in all
three cases, i.e. the AR part has a unit root. It can be shown that, under the
null hypothesis, the least squares estimator of ȡ is downward biased and
has a skewed left distribution. Thus, even if the null hypothesis ȡ = 1 is
true, we expect values smaller than one for Û . Correspondingly, the usual t
statistic of Û – 1, which is normally used as test statistic, no longer follows
a t distribution. Critical values for the t tests of all three cases have first
been provided by WAYNE A. FULLER (1976, Table 8.5.2, p. 373). They
were derived by using simulations. Today, slightly more precise critical
values are usually employed which were derived through simulations by
JAMES G. MACKINNON (1991, p. 275). Nowadays, these values are inte-
grated in many computer programs. For a one-sided test against the alter-
native ȡ < 1, a significance level of 5 percent and 100 observations, the
critical values are -1.94 for a zero mean, -2.89 if the mean is different from
zero and -3.46 if a linear trend is included in addition. As all these values
are larger in absolute value than the critical value of the t distribution,
which is -1.65, using this distribution would reject the null hypothesis far
too often. The decision would mistakenly be in favour of a stationary or
trend stationary process despite the fact that the series contains a random
walk with or without drift. If the combined hypotheses Į = ȕ = 0 and ȡ = 1,
or ȕ = 0 and ȡ = 1, respectively, are to be tested, the F tests proposed by
DAVID A. DICKEY and WAYNE A. FULLER (1981) with the critical values
tabulated by these authors (pp. 1062f.) can be used.

Example 5.1

To demonstrate the deviation of the distributions of the estimated parameters Û
and t̂ from the standard distributions, we performed a Monte-Carlo simulation.
We generated 100'000 realisations with T = 200 observations for the model
(E5.1)                            yt = ȡ yt-1 + ut
with ȡ = 1.0. Then, we estimated relation (5.15). The empirical distributions of Û
and t̂ (which are smoothed with a kernel estimator) are given in Figure 5.7. First
of all, we can see that Û is not symmetrically distributed around its true value of
one; the mean of the estimated coefficients is 0.973. Thus, there is a systematic
                                                         5.3 Unit Root Tests     167


        25



        20



        15



        10



         5



         0
          0.85               0.9                 0.95                   1

                 Density of the estimated coefficient compared with a
                 normal distribution with the same variance and P= 1
        0.6

        0.5

        0.4

        0.3

        0.2

        0.1



                 -3.46   -2.88     -1.96 -1.64                      0

                         Density of the Dickey-Fuller t statistic


     Figure 5.7: Density of the estimated autocorrelation coefficient and the
                 t statistic under the null hypothesis of a random walk.

underestimation of the autoregressive parameter. Second, this leads to a strong de-
viation of the estimated t values under the null hypothesis H0: ȡ = 1.0 of the corre-
sponding t distribution; the mean of the distribution of the estimated t statistic is
-1.534 instead of the theoretical value of zero. The area under the density function
left of -1.96, the critical value which is usually employed for this sample size, is
not 2.5 percent but 30.18 percent. For a one-sided test, a significance level of 5
168      5 Nonstationary Processes

percent and the usual critical value of -1.64, the null hypothesis would be rejected
in 35.58 percent of all cases. However, if we use the critical values of J.G.
MACKINNON (1991), which, in this situation, are -2.876 at the 5 percent level and
-3.465 at the 1 percent level, with rejection rates of 4.99 percent and 0.99 percent,
the significance levels are almost exactly realised in our simulations.
In order to use the conventional t value directly, which implies a test of the
estimated parameter against the null hypothesis of zero, relation (5.14) can
be transformed by subtracting yt-1 on both sides:
(5.16)                   ǻyt = Į + ß t + (ȡ – 1)yt-1 + ut .
If the autoregressive process is of order higher than one, i.e. if we have an
AR(p) process with p > 1, the tests can be generalised quite easily, because
an AR(p) process
                  yt = Į1 yt-1 + Į2 yt-2 + ... + Įp yt-p + ut
can immediately be reparameterised as
             yt = ȡ yt-1 + ș1 ǻyt-1 + ș2 ǻyt-2 + ... + șp-1 ǻyt-p+1 + ut
with
                         p                  p
           ȡ = ș0 = ¦ D j , și = – ¦ D j , i = 1, 2, 3, ..., p – 1.
                         j 1              j i 1


If this AR(p) process has a unit root, it holds that 1 – Į1 – Į2 – ... – Įp = 0
or ȡ = 1, respectively. All alternative hypotheses discussed so far can be
applied to this more general situation. In addition, the same asymptotic dis-
tributions hold as in the AR(1) case. This allows us to use the same critical
values. Thus, for the situation with deterministic trend the generalisation of
the test equation (5.16) is
(5.17)      ǻyt = Į + ß t + (ȡ – 1) yt-1 + ș1 ǻyt-1 + ... + șk ǻyt -k + ut
for the Augmented Dickey-Fuller (ADF) test, where k is chosen to ensure
that the residuals follow a pure random process.
   If the data generating process is trend stationary but the unit root test is
mistakenly performed without including a time trend, these tests have, as
PIERRE PERRON (1988) showed, asymptotically disappearing power, i.e.
the null hypothesis of a random walk is not rejected often enough, and is
never rejected in the limiting case. Thus, the quality of a unit root test
largely depends on whether the test is performed within the appropriate
model. If the data suggest that a deterministic trend might exist, one should
start with model (5.17) to perform the tests and use the simplified versions
only if the null hypothesis H0: ß = 0 cannot be rejected and it is, therefore,
                                                         5.3 Unit Root Tests   169

not necessary to include a time trend into the test equation. The analogous
argumentation holds for the constant term.
   Correspondingly, PIERRE PERRON (1988) proposed the following strat-
egy to perform unit root tests: We start with the general model (5.17)
                                                           k
           ǻyt = Į + ß (t – T/2) + (ȡ – 1) yt-1 + ¦ Ti 'y t i + ut,
                                                           i 1

where the trend variable is centred, however, ensuring that it has no effect
on the estimated constant term. (T denotes the sample size.) We can use
the Dickey-Fuller t test with the null hypothesis H0: ȡ = 1 and the alterna-
tive hypothesis that yt is trend stationary. We can also use an F test in order
to test the combined hypothesis H0: (Į, ȕ, ȡ) = (Į, 0, 1). If this hypothesis
is rejected, it might be assumed that a deterministic trend exists. In addi-
tion, we can test this with the null hypothesis H0: ȕ = 0. If both null hy-
potheses cannot be rejected, we can, in a second step, use the model
                                                   k
(5.17')            ǻyt = Į + (ȡ – 1) yt-1 + ¦ Ti 'y t i + ut
                                                   i 1

and again perform a t test for the null hypothesis H0: ȡ = 1, i.e. we test for
a unit root. In this situation, the alternative hypothesis is the existence of a
stationary AR process.
   If, in addition, it has to be tested whether the constant term is zero, we
can again perform an F test with H0: (Į, ȡ) = (0, 1). If this null hypothesis
cannot be rejected, we can use the model
                                             k
(5.17'')             ǻyt = (ȡ – 1) yt-1 + ¦ Ti 'y t i + ut,
                                             i 1

in order to test H0: ȡ = 1.
   Even if the residuals in model (5.14) are generated by an MA or ARMA
process, test equation (5.17) can be used because invertible MA and
ARMA processes can be approximated by higher order autoregressive
processes. However, this might lead to a considerable reduction of the test
power. Thus, with increasing k it is – ceteris paribus – increasingly diffi-
cult to reject the null hypothesis of nonstationarity.
   If the true data generating process is an ARIMA(0,1,1) process, i.e. if
                          (1 – L) yt =    (1 – ß L) ut
with 0 < ß < 1, problems arise if ß is close to (but still smaller than) one.
Then, the unit root in the autoregressive part is nearly outweighed by the
MA part. Using simulations, G. WILLIAM SCHWERT (1987, 1989) showed
170    5 Nonstationary Processes

that in this case the true null hypothesis is rejected far too often. SAÏD E.
SAÏD and DAVID A. DICKEY (1985) proposed a procedure that takes into
account the MA component and thus reduces the bias of the test results
considerably. In all cases, the critical values derived by J.G. MACKINNON
(1991) for the t tests and by D.A. DICKEY and W.A. FULLER (1981, p.
1063) for the F tests can be used.

        14

        12

        10          UER

         8                                  GER/EER


         6

         4

         2
                                                  SER
         0
               1985            1990           1995           2000


      Figure 5.8:      Development of the Swiss, German/European and US
                       Euromarket interest rates. Monthly data,
                      January 1983 – December 2002


Example 5.2
Figure 5.8 shows the Euromarket three months interest rates of the United States
(UER), Switzerland (SER) and ‘Euroland’ (GER/EER). As the Euro has been the
common currency of the member countries of the European Monetary Union only
since January 1, 1999, and as, in the period before, many of these countries
pegged their currencies more or less to the strongest European currency, the Ger-
man Mark, we use the German interest rate for the period up to December 1998.
To test whether these series have a unit root, we performed ADF tests. As these
data do not contain obvious trends - which, by the way, would be surprising in
case of interest rates - we performed the tests with model (5.17'). To determine the
lag length k, we used the Hannan-Quinn criterion.
     The results are given in Table 5.2. It is obvious that the hypothesis of a unit
root cannot be rejected for all three interest rates. In a second step, using model
                                                                  5.3 Unit Root Tests                171

(5.17''), we applied the test on the first differences of these time series to deter-
mine the order of integration. Here, the null hypothesis of nonstationarity can
clearly be rejected. Taking this into account, we assume that the interest rate series
are integrated of order one (I(1)). It follows from this that ARIMA(p,1,q) proc-
esses are appropriate statistical models for such series. The interest rate series
show high persistence and (at best) only very weakly pronounced mean reverting
behaviour.

              Table 5.2: Results of the Augmented Dickey-Fuller Tests
                         1/1983 – 12/2002, 240 Observations

   Variable                   Levels                                       1. Differences
                   k             test statistic                   k                test statistic

                                     -1.194                                                -7.866
     SER           3                                              2
                                     (0.678)                                               (0.000)
                                     -0.957                                               -11.959
  GER/EER          1                                              0
                                     (0.768)                                               (0.000)
                                     -0.995                                               -11.151
     UER           1                                              0
                                     (0.755)                                               (0.000)
 The tests were performed for levels with as well as for first differences without a con-
 stant term. The numbers in parentheses are the p values. The number of lags, k, has been
 determined with the Hannan-Quinn criterion.



5.3.2 The Phillips-Perron Test

An alternative approach to consider autoregressive and/or heteroskedastic
error terms in relation (5.14) goes back to PETER C.B. PHILLIPS and
PIERRE PERRON (1988). Here, unlike in equation (5.17), these effects are
not modelled by adding lagged differences in the parametric part of the
equation. The test statistic for the hypothesis U = 1 is, however, rather ad-
justed by a non-parametric estimate of the variance of the estimated pa-
rameter Û that takes the autocorrelation of the residuals into account.
   To estimate the adjusted variance of the residuals the two authors pro-
pose
                                T                  m                  T
                                               2         §                            ·
(5.18)                2
                    s Tm =     ¦ uˆ  T ¦ ¨© w ¦ uˆ uˆ ¸¹ ,
                               t 1
                                     2
                                     t
                                                   i 1
                                                             im
                                                                  t i 1
                                                                           t   t i



where û are the least squares residuals of equation (5.14). The truncation
parameter m denotes the maximal order up to which the autocovariances
are included. With sample size T, m has to increase to infinity, but not as
fast as T. The wim are weights that do not only ensure the consistency of
172       5 Nonstationary Processes

this variance estimator but also its non-negativity. PIERRE PERRON (1988)
proposed to use the following weights which go back to M.S. BARTLETT
(1948):
                                           i
(5.19)                 wim =      1 –          , i = 1, ..., m.
                                         m  1
Using this adjusted variance, we get the following F Test with the null hy-
pothesis H0: (Į, ȕ, ȡ) = (Į, 0, 1) for the model with time trend and constant
term in equation (5.14):

                        s ˆ     (s 2  s 2 ) ª            T 6 (s Tm
                                                                 2
                                                                     s2 ) º
(5.20)      FTr =         FTr  Tm 2        «T(Uˆ  1)                   »,
                      s Tm        2 s Tm «¬                48 X 'X »¼

where s is the estimated standard error of regression (5.14) and X the ma-
trix of predetermined variables, i.e. the matrix X contains, besides the vec-
tor of ones, the two column vectors yt-1 and t:
                                 X = [1 yt-1 t] .
F̂Tr is the conventional F statistic for the null hypothesis given above. In-
stead of the usual t statistic to test the null hypothesis H0: ȡ = 1 in this
model with trend, the following adjusted test statistic has been proposed:
                                                     2
                       t Tr =    s               (s Tm  s2 ) T3
(5.21)                                  t̂ Tr                      .
                                 s Tm             4s Tm  3 X 'X

Here, t̂ Tr denotes the usual t statistic.
   If the tests in (5.20) and (5.21) cannot reject the corresponding null hy-
potheses, it might be assumed that there is no deterministic trend. In this
case, the stronger null hypothesis H0: (Į, ȕ, ȡ) = (0, 0, 1) can be tested with
the following statistic:

                        s ˆ     (s 2  s 2 ) ª              T 6 (s Tm
                                                                   2
                                                                       s2 ) º
(5.20')      FTr =        FTr  Tm 2        «  T(Uˆ  1)                   »
                      s Tm          3s Tm    «¬              48 X 'X »¼

Under the assumption that there is no deterministic trend in the data, the
test statistic
                                                                    5.3 Unit Root Tests   173


                                      ª                              º
                    s ˆ          2
                            (s  s )  «      2
                                                     T (s Tm  s ) »
                                                      2    2    2
(5.20'') FP   =       FP       Tm
                                 2
                                      « T(Uˆ  1)      T
                                                                     »
                   sTm        2 sTm   «             4 ¦ yt  y »
                                                                  2
                                     «¬                t 1
                                                                    »¼

tests the combined null hypothesis H0: (Į, ȡ) = (0, 1). Here, F̂P is the usual
F statistic for this null hypothesis. If it cannot be rejected, we can check
the null hypothesis H0: ȡ = 1 in the model without deterministic compo-
nents with
                                                          2
                       t U =        s             0.5 (s Tm  s 2 )T
(5.21'')                                  t̂ U 
                                 s Tm                             T
                                                     s Tm       ¦yt 2
                                                                            2
                                                                            t 1




i.e. we check whether the series contains a random walk without drift. If
this hypothesis is rejected, with
                                                          2
                     t P =      s                 0.5 (s Tm  s 2 )T
(5.21')                                  t̂ P 
                                s Tm                        T
                                                                                   2
                                                   s Tm     ¦ y y
                                                            t 1
                                                                        t



the hypothesis of a random walk with drift can be tested. t̂ P and t̂ U are
again the usual t statistics. In all cases, the critical values derived by J.G.
MACKINNON (1991) for the t tests and by D.A. DICKEY and W.A. FULLER
(1981, p. 1063) for the F tests can be used.
   The augmented Dickey-Fuller test, which parametrically models the
autocorrelation of the residuals, has the advantage that we can test whether
the residuals of the estimated test equation are still autocorrelated. This is
not possible with the Phillips-Perron test. On the other hand, the advantage
of this nonparametric approach is that the results are less sensitive to small
changes of the truncation parameter m. (However, as DONALD W. AN-
DREWS (1991) showed, the choice of m is not without problems when it
comes to practical applications. Here, m is often chosen equal to approxi-
mately the fourth root of the sample size.) The power of the ADF test is
reduced by too large a number of lagged differences. On the other hand,
too small a number of lags has the effect that the test is no longer correctly
applicable due to the autocorrelation of the estimated residuals. Firstly, for
the nonparametric tests the number of lags has no impact on the estimated
parameters, and, secondly, if the autocorrelation coefficients tend towards
174      5 Nonstationary Processes

zero they have, at best, a small impact on the estimated variance. The in-
crease of m does not reduce the sample size of the estimated equation.
Thus, one should assume that nonparametric tests are better suited to cope
with the autocorrelation of the residuals. However, this holds only partly.


         16

         14

         12

         10

          8

          6

          4

          2

          0
               0.8          0.85             0.9              0.95             1

                      Density of the estimated coefficient compared with a
                     normal distribution with the same variance and ȝ = 0.95
         0.8

         0.7

         0.6

         0.5

         0.4

         0.3

         0.2

         0.1

          0
                                     -3.46     -2.88

                              Density of the Dickey-Fuller t statistic


      Figure 5.9a: Density of the estimated coefficients and of the t statistics
                   for the null hypothesis of an AR(1) process with ȡ = 0.95.
                                                           5.3 Unit Root Tests   175



      12


      10


       8


       6


       4


       2


       0
            0.7    0.75        0.8        0.85        0.9          0.95      1

                   Density of the estimated coefficient compared with a
                  normal distribution with the same variance and ȝ = 0.90
      0.8

      0.7

      0.6

      0.5

      0.4

      0.3

      0.2

      0.1

        0
                                                   -3.46       -2.88


                           Density of the Dickey-Fuller t statistic


  Figure 5.9b: Density of the estimated coefficients and of the t statistics
               for the null hypothesis of an AR(1) process with ȡ = 0.90.

G. WILLIAM SCHWERT (1987, 1989) showed in a simulation study that,
once the model contains an MA term with negative autocorrelation, the
true null hypothesis is even more often rejected when using the Phillips-
Perron test as compared to the augmented Dickey-Fuller test. Thus, the
176    5 Nonstationary Processes

procedure proposed by SAÏD E. SAÏD and DAVID A. DICKEY (1985), which
considers this problem, should definitely be applied in this case.
   One problem with the ADF test as well as with the Phillips-Perron test
is that their power is rather low if, under the alternative hypothesis, the
first order autocorrelation coefficient is close to one, if, for example, 0.95
 ȡ < 1 holds for an AR(1) process. In such situations, i.e. if the mean re-
verting behaviour is only very weakly pronounced, very large sample sizes
are necessary to reject the null hypothesis. With economic data, however,
such a sample size is rare, at least as long as only monthly, quarterly or
even annual data are available.

Example 5.3
To illustrate the problems with respect to the power of unit root tests, we once
again performed Monte-Carlo simulations. In order to do so, we again generated
100'000 realisations with a sample size of 200 observations for model (E5.1).
However, in this simulation we used the values ȡ = 0.95 and ȡ = 0.90 for the auto-
regressive parameter.
    As Figures 5.9a and 5.9b show, the estimated values are also shifted considera-
bly to the left. The estimated means are 0.928 for ȡ = 0.95 and 0.880 for ȡ = 0.90.
Thus, only 25.1 percent and 32.3 percent of the estimated values are on the right
of the true value for ȡ = 0.95 and for ȡ = 0.90 respectively.
    The density functions of the t statistics indicate the low test power for values of
ȡ close to 1.0. If the test is performed for the null hypothesis ȡ = 1.0 and the true
value is ȡ = 0.95, even by applying the critical values of J.G. MACKINNON (1991),
the null hypothesis can only be rejected in 8.3 percent of all situations using the 1
percent significance level and in 30.5 percent of all situations using the 5 percent
significance level. Thus, the type II error occurs in 91.7 or 69.5 percent of all
situations. However, for ȡ = 0.90 it occurs much less often: when testing at the 1
percent level we falsely accept the null hypothesis in 52.6 percent of all cases and
at the 5 percent level in 14.7 percent of all cases.


5.3.3 Unit Root Tests and Structural Breaks

A further problem arises if (trend) stationary processes have a structural
break. In such situations, the tests described so far are usually unable to re-
ject the null hypothesis of a unit root even if the sample size increases: the
power of the test tends asymptotically towards zero. If we know the date of
the structural break, we can perform unit root tests separately for the time
before and after the structural break. The problem is, however, that the
power of these tests is reduced due to the smaller sample sizes.
   An alternative to this procedure was proposed by PIERRE PERRON (1989,
1994). He assumes that the date of the structural break, t*, is known. A
                                                          5.3 Unit Root Tests   177

typical example for such an assumption is the German Unification. He dis-
tinguishes two models: the first one is formulated in analogy to an additive
outlier (AO model) and represents a sudden break in level or a change in
the slope of the deterministic trend. The second model allows for an outlier
in the innovations (OI model) and assumes a gradual adjustment to the
new situation; the shocks on the trend function (the deterministic compo-
nent of the model) have the same impact on the level of the series as regu-
lar shocks.
   As most economic time series exhibit a trend, PIERRE PERRON uses AO
models showing a coincidence of structural break with deterministic trend.
Thus, in order to eliminate deterministic components, he first of all esti-
mates the following relations with OLS:
(5.22)         yt = Į + ß t + į1 DVt + xt ,
(5.22')        yt = Į + ß t + į1 DVt + į2 DVt (t – t*) + xt ,
(5.22'')       yt = Į + ß t + į2 DVt (t – t*) + xt ,
where the dummy variable DV is zero up to the structural break which
takes place in t* and one afterwards. For the residuals of the equations
(5.22) or (5.22'), x̂ t , he performs the augmented Dickey-Fuller-Test based
on the following regression:
                                           k                 k
(5.23)     'x̂ t = (ȡ – 1) x̂ t 1 + ¦ d i 'DVt i + ¦ Ti 'x̂ t i + ut .
                                           i 0              i 1

JÜRGEN WOLTERS and UWE HASSLER (2006) demonstrate why it is neces-
sary to include lagged ǻDV in (5.23).
   For the residuals of equation (5.22''), PERRON uses the regression
                                                    k
(5.23')            'x̂ t = (ȡ – 1) x̂ t 1 + ¦ Ti 'x̂ t i + ut .
                                                    i 1

For the OI model with a linear trend, however, we get the following test
equation for a structural break in the level of the series

(5.24)        yt = Į + ß t + į1 DVt + į2 ǻDVt + (ȡ – 1) yt-1
                          k
                     +   ¦ T 'y
                          i 1
                                i   t i   + ut .

For the model with a structural break in the level of the series as well as in
its deterministic trend we get
178       5 Nonstationary Processes

(5.24')       yt =   Į + ß t + į1 DVt + į2 ǻDVt + į3 ǻDVt (t – t*)
                                              k
                        + (ȡ – 1) yt-1 +     ¦ T 'y
                                              i 1
                                                    i   t i   + ut .

In the AO as well as in the OI model, the test statistic is the t value of Û – 1.
Critical values which also depend on the date of the structural break are
given in PIERRE PERRON (1989, pp. 1376ff.; 1994, pp. 137ff.).


5.3.4 A Test with the Null Hypothesis of Stationarity

An alternative procedure for testing the stationarity properties of time se-
ries was proposed by DENIS KWIATKOWSKI, PETER C.B. PHILLIPS, PETER
SCHMIDT and YONGCHEOL SHIN (KPSS, 1992). They developed a test
where the null hypothesis is not the existence of a unit root but – quite the
contrary – stationarity. (This test is therefore often called a stationarity test
contrary to the unit root tests discussed so far.)
   Contrary to relation (5.14) where we assume high positive autocorrela-
tion in the time series, the starting point of this KPSS test is the following
model:
(5.25)                          y t = Įt + ß t + u t ,
where now instead of the commonly used constant term, a random walk,

(5.25a)                               Įt = Įt-1 + İt
is allowed.
   The residuals of (5.25a), İ, are assumed to be independently and identi-
cally normally distributed. Under the null hypothesis that y is trend sta-
tionary, the variance of İ is zero, i.e. Įt is a constant. The problem is now
to find a test procedure which can discriminate between a constant term
and a random walk. Such a test is designed for situations in which a ran-
dom walk might possibly be added to a (trend) stationary component. It is
the purpose of the test to detect this random walk.
   The KPSS test tries to discriminate as follows between a purely trend
stationary process and a process with an additive random walk. In a first
step, y is regressed on a constant term and possibly also on a deterministic
trend, i.e. it is adjusted for the mean and for the possible impact of a de-
terministic trend. In a second step, partial sums of the residuals û of these
regressions are considered:
                                                                     5.3 Unit Root Tests   179

                                                    t
                                 St,j =        ¦ û ,
                                                   i 1
                                                              i, j



where j = ȝ, Tr, indicates whether the original series is only adjusted for
the mean or also for a deterministic trend. If y is a stationary process, the
sum of the residuals with zero mean, is integrated of order one. The sum of
the squares of an I(1) process diverges with T2. Therefore, the test statistic
                                      T
                                                          2

                                1    ¦ S           t, j
(5.26)                K̂ j =          t 1
                                                                , j = ȝ, Tr,
                                T2          s u2
has a limiting distribution that does not depend on additional parameters.
Critical values for this statistic, which are again derived with simulations,
are given by D. KWIATKOWSKI, P.C.B. PHILLIPS, P. SCHMIDT and Y. SHIN
(1992, p. 166).
   In this form, the test presupposes that the residuals of the original proc-
ess (5.25) are white noise. As this is usually not the case, the possible
autocorrelation must be taken into account. The authors suggest that in-
stead of s 2u , as with the Phillips-Perron test, the estimator for the variance
                     2
defined in (5.18), s Tm – adjusted for the impact of autocorrelation – should
be employed. Asymptotically, the same critical values as in the model with
white noise residuals are appropriate.

Example 5.4
UWE HASSLER and JÜRGEN WOLTERS (1995) asked whether the inflation rates of
consumer prices (calculated with respect to the previous month) in the United
States, the United Kingdom, France, Germany and Italy are weakly stationary.
They used seasonally adjusted monthly data from January 1969 to September
1992. They employed the ADF test and the Phillips-Perron test, where the null
hypothesis postulates a unit root, as well as the KPSS test, where we assume weak
stationarity under the null hypothesis, and they performed the test for different lag
lengths k and different truncation parameters, m, respectively. All test equations
contain a constant term but no trend variable.
   The results are given in Table 5.3. Irrespective of the number of autocovari-
ances included, the Phillips-Perron test always rejects the null hypothesis of a unit
root at least at the 1 percent significance level. According to these results, the in-
flation rates of all countries are stationary. On the other hand, the KPSS test nearly
always rejects the null hypothesis of stationarity also at the 1 percent level. Thus,
according to these results, the inflation rates exhibit nonstationary behaviour. The
situation is different for the ADF test. The null hypothesis of a unit root is always
rejected for k = 3, but only in three out of five cases for k = 6, and never for k =
180      5 Nonstationary Processes

12, not even at the 10 percent level. In this example, the results of the semi-
parametric tests, the Phillips-Perron and the KPSS tests, are hardly influenced by
the value of m, whereas the results of the ADF test are sensitive to changes of k.
Moreover, the results of the two semi-parametric tests contradict each other.

         Table 5.3: Results of Unit Root and Stationarity Tests for Inflation
                    1/1969 – 9/1992, 285 Observations
              m/k   United States    United Kingdom        France     Germany        Italy
 Phillips-     6        -8.95**           -9.30**         -5.82**    -10.32**      -6.40**
  Perron
              12      -10.20**           -10.54**         -6.84**    -11.65**      -7.39**
  KPSS         6         0.81**            1.02**          1.57**      1.26**       0.94**
              12         0.51*             0.65**          0.91**      0.80**       0.56**
   ADF         3        -4.43**           -4.48**         -2.71(*)    -4.98**      -3.31*
               6        -3.06*            -2.97*          -1.71       -3.49**      -2.24
              12        -1.86             -2.27           -1.29       -1.75        -2.39
‚(*)‘, ,*‘ or ,**‘ denotes that the correspondi ng null hypothesis can be rejected at the 10,
5, or 1 percent significance level, respectively.
Source: U. HASSLER and J. WOLTERS (1995, Tables 3 and 4, p. 39).


As Example 5.4 shows, problems arise whenever different test procedures
produce different, contradictory results and when these results are to be in-
terpreted. One reason for such contradictions might be the fact that the
tests discussed so far can only differentiate between the integer orders of
integration d = 0 and d = 1, which corresponds to the methodology of the
ARIMA(p, d, q) models with d = 0, 1, 2, ..., . One possibility to handle the
problem is to gain more flexibility by abandoning the restriction to integer
orders of integration: d might be treated as a real number. How this is done
within the framework of fractionally integrated ARMA models is dis-
cussed below in Section 5.5.


5.4 Decomposition of Time Series

If one takes into account that nonstationary time series might contain a sta-
tionary component along with the nonstationary one, the decomposition of
the series into two components, a permanent and a transitory one, seems
fairly obvious:
(5.27)                              yt = y pt + y tt ,
                                         5.4 Decomposition of Time Series   181

where yp denotes the permanent (nonstationary) and yt transitory (station-
ary) component. Such a decomposition makes it possible to find a measure
of the persistence of the series, i.e. for the relative importance of changes
in its permanent component compared to changes in the series itself.
   Such a decomposition was proposed, for example, by STEPHEN BEVE-
RIDGE and CHARLES R. NELSON (1981). They showed that every ARIMA
model with d = 1 can be represented as the sum of a random walk, possibly
with drift,
(5.28)                        y pt   = ȝ + y pt1 + vt ,
and a stationary component which is the difference between the process y
itself and its nonstationary component yp.
   Starting point for the decomposition is the general ARIMA(p,1,q)
model. To make things easier, we use the Wold decomposition of ǻy, writ-
ten in the following form:
                            yt = ȝ + ȥ(L) ut + yt-1.
By recursive substitution we get
                  yt = ȝ + ȥ(L) ut + ȝ + ȥ(L) ut-1 + yt-2
                      = 2 ȝ + ȥ(L) (ut + ut-1) + yt-2
                      #
                                           t
                      = t ȝ + ȥ(L) ¦ u i + y0 .
                                          i 1

With the additional assumptions y0 = 0 and ut = 0 for t < 0 it follows that
                                      f    § t 1      ·
                          yt = t ȝ + ¦ \ j ¨ ¦ u t  i ¸ .
                                     j 0   ©i j        ¹
This can be transformed to
                          f
                               § t 1      ·    f
                                                     § j1       ·
              yt = t ȝ + ¦ \ j ¨ ¦ u t  i ¸ – ¦ \ j ¨ ¦ u t  i ¸ .
                         j 0   ©i 0        ¹   j 1   ©i 0        ¹

                                § t 1     ·   f        § f      ·
                  = t ȝ + \ (1) ¨ ¦ u t i ¸ – ¦ u t i ¨ ¦ \ j ¸ .
                                ©i 0       ¹ i0         © j i 1 ¹
Defining
182      5 Nonstationary Processes


                                               § t 1     ·
                         y pt    = t ȝ + \ (1) ¨ ¦ u t i ¸ ,
                                               ©i 0       ¹
leads to the representation given in (5.28). Thus, we get
(5.29)                     y pt = ȝ + y pt1 + ȥ(1) ut ,
where vt = ȥ(1) ut.
                                                    f
(5.30)      y tt = ȟ(L) ut , with ȟi = – ¦ \ j , i = 0, 1, 2, ...
                                                   j i 1


holds for the transitory component y tt = yt – y pt .
  The permanent component yp can also be represented by the observed
values of y. To show this, we start with the representation of an
ARIMA(p,1,q) process,
                 Į(L) ǻyt = į + ȕ(L) ut with ȝ = į/Į(1),
where the roots of Į(L) = 0 and ȕ(L) = 0 are all outside the unit circle.
Solving for u results in
                      D(L)        G     D(L)       D(1)
              ut =         ¨yt –      =      ¨yt –      ȝ.
                      E(L)       E(1)   E(L)       E(1)
Thus, (5.29) leads to
                 ǻ y pt = ȝ + ȥ(1) ut

                                    E(1) ª D(L)        D(1) º
                        = ȝ +            «      'y t       P ,
                                    D(1) ¬ E(L)        E(1) »¼
or
                                           E(1) D(L)
(5.31)                          y pt =              yt ,
                                           D(1) E(L)
respectively, i.e. the permanent component can be represented as a
weighted average of the observed values.
   As a measure of the persistence of the time series, P, we define
                                   V 2v        (\ (1)) 2 V2u
(5.32)                  P =                =                 .
                                   V'2 y            V'2 y
                                            5.4 Decomposition of Time Series    183

The problem with this decomposition, however, is that the residuals of the
stationary and the nonstationary parts are perfectly negatively correlated,
except for the degenerated case ȥ(1) = 0, where the permanent component
is the straight line ȝt. If we assume a different value for the correlation be-
tween these two parts, we get a different decomposition. (An obvious as-
sumption would be that the innovations of the permanent and transitory
parts are uncorrelated.) Thus, depending on the assumption about the cor-
relation between the two innovation series, we can derive rather different
decompositions leading to different values of the persistency measure.
   An alternative measure for the persistence of a time series was proposed
by JOHN H. COCHRANE (1988). He considers the ratio of the variance of
the changes that are accumulated over k periods to the variance of the one
period change,
                                                 2
                          1 E(y t  k  y t 1 )
(5.33)          Vk =                               , k = 1, 2, ..., .
                         k 1 E(y t  y t 1 ) 2
As the changes (of an I(1) process) are stationary by definition, and be-
cause of
                                 E[(y t  j  y t  j1 )(y t  y t 1 )]
                     ȡ(j) =                                                 ,
                                          E[(y t  y t 1 ) 2 ]
we get
                                  k
                                    §     j ·
(5.34)                Vk = 1 + 2 ¦ ¨1      ¸ ȡ(j) .
                                 j 1©   k 1¹

If k tends to infinity, we get
                                                        f
(5.35)                     lim Vk = 1 + 2 ¦ U( j) .
                          k of
                                                       j 1


As ȡ(k) tends towards zero with increasing k in stationary processes, J.H.
COCHRANE (1988) proposed to increase k until Vk approaches its maxi-
mum and to use this k to estimate the persistence of a series.

Example 5.5
The special case of a random walk, yt = yt-1 + ut results in:
                E[(yt+k – yt-1)2] = E[(ǻyt+k + ǻyt+k-1 + ... + ǻyt)2]
                                    = (k + 1) V 2u
184      5 Nonstationary Processes

According to (5.32), we thus get
                                 Vk = 1, k = 1, 2, ... ,
i.e. this measure shows that the random walk does not contain any stationary
(transitory) component besides the stochastic trend.

A different approach to decompose a time series into a permanent compo-
nent yp and a transitory (cyclical) component yt goes back to ROBERT J.
HODRICK and EDWARD C. PRESCOTT (1997). Contrary to the approach of
S. BEVERIDGE and CH.R. NELSON (1981) which is based on an
ARIMA(p,1,q) model, R.J. HODRICK and E.C. PRESCOTT (1997) do not
presume an explicit model for the observed time series. The idea is rather
to model the permanent component yp sufficiently smooth. The sum of
squares of the second differences of yp is taken as a measure of the
smoothness of the time path. On average, the cyclical component, yt = y –
yp should not deviate substantially from zero over the observation period.
To approach these goals, the following objective function is minimised
with respect to yp
                           T                  T 1                                         2

(5.36)    Z( y pt ; Ȝ) =   ¦ (y  y ) + Ȝ ¦ (y
                                 t
                                      p 2
                                      t
                                                     p
                                                     t 1    y pt )  (y pt  y pt 1 )
                           t 1                t 2


The smoothness of yp can be controlled for with the penalty parameter Ȝ.
The larger Ȝ is chosen, the smoother is the time path of yp. For Ȝ ĺ f, yp
follows a linear trend. The values of Ȝ depend on the periodicity of the
data. In practical applications, the following values are often chosen: Ȝ =
100 for annual data, Ȝ = 1'600 for quarterly data, and Ȝ = 14'400 for
monthly data. The result of this minimisation is the so-called Hodrick-
Prescott (HP) filter which provides the permanent or trend component, re-
spectively.

Example 5.6
The permanent component of the annual German inflation rate is to be determined
by using the Beveridge-Nelson approach and the HP filter. We investigate the pe-
riod from the first quarter of 1975 to the last quarter of 1998, as this corresponds
to the period when the German Bundesbank used the quantity of money as its tar-
get. To measure inflation we use the implicit deflator of the gross national product
(PGNP), i.e. IRt = 100 · (ln(PGNPt) – ln(PGNPt-4)). Estimating an ARIMA model
leads to the following result:

(E5.2)        ǻIRt = –        0.308 ǻIRt-4 + ût + 0.275 ût-2,
                            (3.29)               (2.68)
                                        5.4 Decomposition of Time Series         185


              R 2 = 0.145, SE = 0.571, Q(6) = 4.233 (p = 0.645),
where the t values are again indicated in parentheses. Both estimated coefficients
differ significantly from zero at the 1 percent level, and the Box-Ljung Q statistic,
calculated with 8 correlation coefficients (6 degrees of freedom), does not indicate
any remaining autocorrelation of the residuals. For the ARIMA(4, 1, 2) model in
(E5.2) we get:
(E5.3a)                     Į(L) = 1 + 0.308 L4, and
(E5.3b)                     ß(L) = 1 + 0.275 L2.


          7

          6

          5

          4

          3

          2

          1

          0
          1975        1980         1985        1990         1995

 Figure 5.10a:    German Inflation Rate: Actual values (––––), permanent com-
                  ponent according to S. BEVERIDGE and CH.R. NELSON (-------),
                  permanent component according to R.J. HODRICK and E.C.
                  PRESCOTT (– - – - –).

The Wold representation ȥ(L) is derived by a series expansion of ß(L)/Į(L). This
results in
                                            E(L)
                                 ȥ(L) =          ,
                                            D(L)

                                 E(1)   1.275
                        ȥ(1) =        =       = 0.975.
                                 D(1)   1.308
186    5 Nonstationary Processes


Because of the parameters estimated in (E5.2), we get V 2'IR = 1.188 V 2u for the
variance of ǻIR. According to (5.31), the permanent component IRp,BN is
                                1  0.308 L4
              IR p,BN
                 t    = 0.975                IRt , or
                                1  0.275 L2

              IR p,BN
                 t    = – 0.275 IR p,BN
                                   t 2 + 0.975 IRt + 0.300 IRt-4 .

Figure 5.10a shows the observed inflation rate IR, together with the permanent
component IRp,BN which was calculated according to the Beveridge-Nelson ap-
proach. The development of the permanent component is quite similar to the ac-
tual inflation rate. The only difference is that it does not exhibit the extreme am-
plitudes of the original series. Contrary to this, when using the HP filter, the
permanent component of the series, IRp,HP, which is also shown in Figure 5.10a, is
much smoother. It must be taken into account that it was not calculated with Ȝ =
1'600, which is normally used for quarterly data, but with Ȝ = 100, because other-
wise the development would have been too smooth.

        1.6
        1.2
        0.8
        0.4
        0.0
       -0.4
       -0.8
       -1.2
       -1.6
          1975         1980        1985         1990        1995

 Figure 5.10b:    German Inflation Rate: cyclical component according to
                  S. BEVERIDGE and CH.R. NELSON (--------), cyclical component
                  according to R.J. HODRICK and E.C. PRESCOTT (––––).

Figure 5.10b shows the cyclical components IRt,BN and IRt,HP, the differences be-
tween the actual inflation rate and the two estimates of its permanent component.
The values calculated by the HP filter have a much larger amplitude and a consid-
erable less smooth development than the values calculated according to
                                                      5.5 Further Developments        187

S. BEVERIDGE and CH.R. NELSON (1981). Nevertheless, the negative and positive
deviations of both series mostly occur in the same periods. The correlation be-
tween the two cyclical components is 0.638.


5.5 Further Developments

As shown above in Example 5.4, problems arise if tests lead to systemati-
cally contradictory results which cannot be interpreted as being statistical
artefacts. This indicates that the approach used so far to handle nonstation-
arities is not flexible enough. The fractionally integrated models discussed
below are one possibility to cope with this problem and to get more flexi-
ble solutions.
   A further, not yet discussed problem arises whenever fourth differences
(for quarterly data) or twelfth differences (for monthly data) are performed
in order to transform a nonstationary into a stationary time series. This
procedure is often used when annual growth rates are calculated (with
quarterly or monthly data). The problem of seasonal integration which is
presupposed by this procedure shall also be discussed in the following.


5.5.1 Fractional Integration

As mentioned above, the concept of integrated time series should be ex-
tended to that effect that the order of integration, d, is no longer restricted
to be an integer number. It might be any real number. By forming first dif-
ferences, we can always reduce the value of d by one. In the following, we
therefore only consider the interval 0  d  1. In analogy to the definition
of integrated variables given in Section 5.1 the following definition holds:
• A stochastic process y is fractionally integrated of order d, 0 < d < 1, if
  it can be transformed into a weakly stationary invertible process using
  the filter (1 – L)d, i.e.
                                      (1 – L)d yt = į + xt ,
   where x is an ARMA(p,q) process. The transformation (1 – L)d results
   from the binomial series development
                                              d (1  d) 2
   (5.37) (1 – L)d = 1 – dL –                          L    – d (1  d) (2  d) L3 – ...
                                                  2!                  3!
                              f
                                                        j 1 d
                      =   ¦ d L with dj =
                          j       0
                                      j
                                          j

                                                           j
                                                                dj-1, d0 = 1.
188      5 Nonstationary Processes

      The original process y is then denoted as an ARFIMA(p,d,q) process
      (Autoregressive Fractional Integrated Moving Average Process).
The coefficients dj are quadratically sumable for ŇdŇ < 0.5. For this rea-
son, the process is stationary for 0 < d < 0.5, but nonstationary for d  0.5.
Thus, there is a whole range of values of d (0.5  d  1) that generate per-
sistent processes and not only the single value d = 1 (or integer multiples
of it), like with the ARIMA(p,d,q) models. In case of d  0.5, the time se-
ries is said to have a long memory.
   The inverse filter (1 – L)-d is given by the substitution of d by -d in
(5.37),
                                     d (1  d) 2  d (1  d) (2  d) 3
(5.37') (1 – L)-d = 1 + dL +                  L +                  L + ... .
                                         2!               3!
Thus, if we apply the filter (1 – L)-d on the stationary and invertible
ARMA(p,q) process with the representation Į(L) xt = ß(L) ut, we get an
ARFIMA process with
                               yt = (1 – L)-d xt.
If xt = ut, i.e. a pure random process, we get the model of a pure, fraction-
ally integrated noise:
(5.38)               (1 – L)d yt = ut or yt = (1 – L)-d ut .
The series expansion in (5.37) or (5.37'), respectively, indicates that this
process might be represented as a special AR() or MA() process. Rela-
tion (5.38) gives the most parsimonious parameterisation of it, employing
only one single parameter.
   The unit root tests discussed in Sections 5.3.1 and 5.3.2 test the null hy-
pothesis d = 1 against the alternative hypothesis d = 0, while the KPSS test
described in Section 5.3.4 tests the null hypothesis d = 0 against the alter-
native hypothesis d = 1. If the ‘true’ d is between zero and one, both null
hypotheses might be rejected, as was the case in Example 5.4. The reason
for this apparent contradiction between the results of the two tests is that
the modelling approach only allowed for zero and one to be possible or-
ders of integration and was thus too restrictive.

Example 5.7
Due to the contradicting results with respect to the stationarity properties pre-
sented in Example 5.4, UWE HASSLER and JÜRGEN WOLTERS (1995) estimated
ARFIMA models for the inflation rates of these countries. They showed that ac-
cording to (5.38), the monthly inflation rates of all these countries can be mod-
elled as purely fractionally integrated white noise . The values of d vary from d =
                                               5.5 Further Developments         189

0.40 for Germany, d = 0.41 for the United States, d = 0.51 for the United King-
dom, d = 0.54 for France up to d = 0.57 for Italy. The null hypothesis that the or-
der of integration equals 0.5 can in no case be rejected. As fractional processes
with d  0.5 are nonstationary, at least the interest rates of the United Kingdom,
France and Italy show persistent behaviour, even if they are not I(1).


5.5.2 Seasonal Integration

The integrated processes discussed so far exhibit nonstationary behaviour
because there is a unit root in the lag polynomial of the autoregressive part.
This can be eliminated by forming first differences. One might ask
whether there are additional roots on the unit circle which imply nonsta-
tionarity and can be economically interpreted. As shown in Section 1.2, the
application of the filter l – L4 generated developments of quarterly data
which no longer exhibit seasonal variations. The factorisation
     (1 – z4) = (1 – z2) · (1 + z2) = (1 – z) · (1 + z) · (1 – iz) · (1 + iz)
where i2 = -1, immediately shows that l – z4 has four roots on the unit cir-
cle, i.e.
                        z1 = 1, z2 = -1, z3,4 = ± i.
Using the filter 1 – L, the following process can be generated with ut as
white noise
                                (1 – L) yt = ut,
or
                                yt = yt-1 + ut .
This corresponds to a random walk which can be used to model stochastic
trend behaviour. Applying the filter 1 + L, the process

(5.39)                         yt = - yt-1 + ut
can be similarly generated. For large values of t, the correlation between
two adjacent elements of this process approaches -1, i.e. the process exhib-
its regular two-period fluctuations which correspond to fluctuations within
a period of half a year for quarterly data. This also becomes clear if yt-1 is
substituted in (5.39), which leads to
                            yt = yt-2 + ut – ut-1 .
If we only considered every second observation, we would again get a ran-
dom walk.
190      5 Nonstationary Processes

  The roots ± i correspond to the filter 1 + L2, which can generate the
process
(5.40)                        yt = - yt-2 + ut .
Here, all adjacent elements are uncorrelated, while the correlation between
the values of y which are two periods apart from each other converges to
-1 for large values of t. Thus, the process exhibits fluctuations with a
length of four periods, corresponding to seasonal variations in the context
of quarterly data. This also becomes clear if yt-2 in (5.40) is substituted.
This leads to
                            yt = yt-4 + ut – ut-2 .
If we only considered every fourth period, we would again get a random
walk.
   Thus, the processes with roots -1 and ± i capture the nonstationary sea-
sonal fluctuations of quarterly data. To eliminate such fluctuations, the fil-
ter
                  (1 + L) · (1 + L2) = 1 + L + L2 + L3 ,
must be used, i.e. a fourth order moving average eliminates nonstationary
seasonal fluctuations of quarterly data. Because of
                 (1 – L4) = (1 – L) · (1 + L + L2 + L3) ,
forming annual differences also eliminates any stochastic trend, as Figures
1.4 and 1.5 in Chapter 1 already showed.
   In analogy to the ADF test, SVEND HYLLEBERG, ROBERT F. ENGLE,
CLIVE W.J. GRANGER and B.S. YOO (1990) (HEGY) developed a proce-
dure which not only tests for the stochastic trend but also for the different
seasonal roots. In order to perform this test, the quarterly series y has to be
transformed in the following way:
                       y1,t = (1 + L + L2 + L3) yt,
                       y2,t = – (1 – L + L2 – L3) yt,
                       y3,t = – (1 – L2) yt,
                       y4,t = (1 – L4) yt .
y1 is a series which no longer contains any seasonal unit root. y2 is a series
which does not contain a stochastic trend, nor any annual fluctuations,
whereas the stochastic trend as well as the half annual cycle have been
eliminated from y3. Finally, y4 does not have any root on the unit circle.
Disregarding all deterministic terms like the constant term, a time trend or
    5.6 Deterministic versus Stochastic Trends in Economic Time Series      191

seasonal dummies, the following equation is estimated by OLS in order to
perform the HEGY test:
        ș*(L) y4,t = ʌ1 y1,t-1 + ʌ2 y2,t-1 + ʌ3 y3,t-1 + ʌ4 y3,t-2 + ut ,
where the order of the lag polynomial ș*(L) is chosen in a way that the es-
timated residuals û are white noise.
   The null hypothesis that there is no stochastic trend is stated as
                                 H0: ʌ1 = 0,
the null hypothesis that there is no nonstationary semi-annual component
as
                                 H0: ʌ2 = 0
and the null hypothesis that there is no nonstationary annual component as
                              H0: ʌ3 = ʌ4 = 0.
The test statistics are the corresponding t or F values, respectively. As with
the 'usual' unit root test, the classical t and F distributions do not hold for
this test. Depending on which deterministic terms are included, different
critical values are appropriate. The corresponding values for the HEGY
test, derived again with simulations, are provided in S. HYLLEBERG et al.
(1990, Tables 1a and 1b, pp. 226f).


5.6 Deterministic versus Stochastic Trends
    in Economic Time Series

It has hardly ever been disputed that economic time series are trending,
even though procedures for stationary variables have mostly been applied.
As mentioned in Chapter 1, even the classical time series analysis distin-
guished between trend, (business) cycle, seasonal variation and irregular
movements. However, the ‘nature’ of the trend has hardly ever been con-
sidered. Depending on the kind of procedure, either high order moving av-
erages were calculated or linear or polynomial (deterministic) trends esti-
mated and subtracted from the original series. Series transformed in this
way were used for further investigations.
   Whether such a trend is deterministic or stochastic, however, is not only
important for the application of the appropriate statistical procedures but
also has an impact on the economic interpretation. If, for example, the
logarithm of the gross national product follows a linear deterministic trend,
the model not only implies a constant long-run growth rate but also the fact
192   5 Nonstationary Processes

that all deviations from the long-run equilibrium path are only temporary;
all deviations are counter-balanced in the long run. Contrary to this, when
the series follows a stochastic trend, singular changes have permanent con-
sequences: the series has a (long) memory. Even if the long-run growth
rate is fixed, a variable deviating from the growth path it has followed so
far will hardly ever return to the path: from this new initial point, the de-
velopment continues with the same (average) growth rate but along a new
path (with a different level). Thus, these kinds of shocks are called perma-
nent contrary to the transitory shocks in the model with a deterministic
trend.
   Permanent and transitory shocks have a different economic meaning.
Permanent shocks are usually attributed to the supply side, transitory
shocks rather to the demand side of the economy. Correspondingly, unex-
pected changes of the quantity of money are typically interpreted as transi-
tory shocks: They might have real effects in the short run, but they have no
long-run impact at least as long as the classical dichotomy is accepted.
Therefore, monetary policy might be stabilising in the short run, but has
hardly any long-run effect on economic growth, at least as long as inflation
is ‘moderate’. One indication for this is that empirical studies on the rela-
tion between (moderate) inflation and economic growth do not exhibit
conclusive results. Contrary to this, a technology shock is usually seen as
permanent: The development of a new technology which has not been
available so far has a permanent effect on the production possibilities in an
economy and might, therefore, shift the economy to a new growth path
with a higher initial position. Against this background it is understandable
that it has been extensively discussed in the United States whether GNP
has a unit root or not, a question which at first glance seems to be a purely
technical one.
   The distinction between permanent and transitory shocks has, above all,
an impact on business cycle theory. Traditional Keynesian as well as
Monetarist approaches assume that cyclical fluctuations are caused by
transitory shocks. As shown in Chapter 2, given a specific structure of the
economic system (or the time series representing this system), uncorrelated
random shocks can generate cycles with certain frequencies. If the neces-
sary information is available, (anti-cyclical) stabilisation policy can coun-
teract and thus smooth the economic development. Correspondingly, in
their discussion on the possibility of the government to perform an active
stabilisation policy, Monetarists and Keynesians focused on two questions:
(i) Which one is the better instrument, monetary or fiscal policy?(ii) Does
the government (or the central bank, respectively) have the information
necessary to perform a successful stabilisation policy or does it even make
things worse because interventions often take place at the wrong point of
    5.6 Deterministic versus Stochastic Trends in Economic Time Series    193

time?The general possibility of stabilisation policy was not called into
question.
   A quite different stance has been taken by the Real Business Cycle The-
ory which belongs to the New Classical Macroeconomics. It attempts to
interpret business cycles as results of technology shocks. In such a model,
any economic policy that tries to stabilise business cycles is useless in the
first place. Theoretical models with such properties have been developed.
However, the empirical evidence is not very convincing. Even if the exis-
tence of permanent shocks is taken into account, it is sensible to assume
that there are both temporary and permanent shocks on the supply side as
well as on the demand side. The question no longer is whether such im-
pacts exist at all but rather how strong the different impacts (shocks) are in
relation to each other. Recent empirical research goes in this direction.
   This implies, however, that the same model has to allow for transitory as
well as permanent shocks. While the traditional models of a deterministic
trend do not have this possibility, as they only know transitory deviations
of the fixed long-run equilibrium path, models with a stochastic trend usu-
ally also contain a transitory component. It is the purpose of the procedures
discussed in Section 5.4 to differentiate between these two components.
   Finally, it must be mentioned that, given the existence of permanent
shocks, the distinction between trend and cycle is dubious. From an eco-
nomic perspective, this implies that a distinct separation between eco-
nomic growth on the one hand and the development of the business cycle
on the other hand is no longer possible; if the economic system has the ap-
propriate structure, economic growth occurs in cycles. This is a new way
to take up an old idea, which was already developed by JOSEPH A.
SCHUMPETER in his Theory of Economic Development. In this theory,
business cycles are also generated by supply shocks and not by demand
shocks.
   For all this, however, we should take into account that we always use
samples for empirical analysis and that the ‘true’ data generating processes
are different from the ones assumed in our models. For example, we often
assume that the investigated variables are normally distributed. This im-
plies that the occurring values can be both very high and very low, even if
we know that this would be impossible in a concrete situation. Body
heights are a classical example of this. The same is true for the differentia-
tion between stationary and nonstationary variables. If a variable is really
stationary, the estimator for the mean of the coming year might be better
provided by the mean of some past observations with long distances be-
tween each other than by the mean of the last three months. On the other
hand, the assumption of nonstationarity implies that, with increasing time
horizon, the variable will almost certainly exceed any limit. Both assump-
194    5 Nonstationary Processes

tions are, for example, invalid for interest rates. When we investigate sam-
ples, perform tests and finally decide to (preliminarily) regard the variable
as stationary or nonstationary, we assume that the chosen model is the best
available approximation on the unknown data generating process of the
model classes we considered. This might be different in case of a different
time period or a different frequency of data.


References

A useful informal introduction to the econometrics of nonstationary time series is
given by
JAMES H. STOCK and MARK W. WATSON, Variable Trends in Economic Time Se-
   ries, Journal of Economic Perspectives 2, issue 3/1988, pp. 147 – 174.
The procedure to identify the number of unit roots when calculating the solu-
tions of the characteristic equation of an AR model was proposed by
GEORGE C. TIAO and RUEY S. TSAY, Consistency of Least Squares Estimates of
   Autoregressive Parameters in ARIMA Models, Annals of Statistics 11 (1983),
   pp. 856 – 871.
The Dickey-Fuller test goes back to
WAYNE A. FULLER, Introduction to Statistical Time Series, Wiley, New York
  1976, and
DAVID A. DICKEY and WAYNE A. FULLER, Distribution of the Estimators for
   Autoregressive Time Series with a Unit Root, Journal of the American Statis-
   tical Association 74(1979), pp. 427 – 431,
In W.A. FULLER (1976), critical values of the t statistics of unit root tests were
indicated for the first time. Today, the more precise values presented in
JAMES G. MACKINNON, Critical Values for Cointegration Tests, in: R.F. ENGLE
   and C.W.J. GRANGER (eds.), Long-Run Economic Relationships: Reading in
   Cointegration, Oxford University Press, Oxford et al. 1991, pp. 267 – 276,
are usually employed. Critical values of the F statistics are given in
DAVID A. DICKEY and WAYNE A. FULLER, Likelihood Ratio Statistics for Autore-
   gressive Time Series with a Unit Root, Econometrica 49 (1981), pp. 1057 –
   1072.
The Phillips-Perron test is presented in
PETER C.B. PHILLIPS and PIERRE PERRON, Testing for a Unit Root in Time Series
   Regression, Biometrika 75 (1988), pp. 335 – 346, as well as in
                                                               References       195

PIERRE PERRON, Trends and Random Walks in Macroeconomic Time Series: Fur-
    ther Evidence from a New Approach, Journal of Economic Dynamics and
    Control 12 (1988), pp. 297 – 332.
The latter paper provides a good survey of the different test statistics and the
sources of the corresponding critical values. The window used by the Phillips-
Perron test was proposed by
M.S. BARTLETT, Smoothing Periodograms from Time Series with Continuous
   Spectra, Nature 161 (1948), pp. 686 – 687,
The question of how to determine the optimal number of correlation coefficients,
m, used for this estimator, is discussed in
DONALD W. ANDREWS, Heteroskedasticity and Autocorrelation Consistent Co-
   variance Matrix Estimation, Econometrica 59 (1991), pp. 817 – 858.
The testing procedure for unit roots in the presence of structural breaks was first
proposed by
PIERRE PERRON, The Great Crash, The Oil Price Shock, and the Unit Root Hy-
    pothesis, Econometrica 57 (1989), pp. 1361 – 1401.
Some extensions are given in
PIERRE PERRON, Trend, Unit Root and Structural Change in Macroeconomic Time
    Series, in: B.B. RAO (ed.), Cointegration for the Applied Economist, St. Mar-
    tin Press, New York 1994, pp. 113 – 146.
A survey about more recent developments for situations when the date of a struc-
tural break is unknown is given by
BRUCE E. HANSEN, The New Econometrics of Structural Change: Dating Breaks
   in U.S. Labor Productivity, Journal of Economic Perspectives 15 issue
   4/2001, pp. 117 – 128.
The fact that the null hypothesis of a unit root is rejected too often with the
Dickey-Fuller as well as with the Phillips-Perron test if the process contains an
MA part with negative first order autocorrelation was first mentioned in
G. WILLIAM SCHWERT, Effects of Model Specification on Tests for Unit Roots in
   Macroeconomic Data, Journal of Monetary Economics 20 (1987), pp. 73 –
   103, as well as
G. WILLIAM SCHWERT, Tests for Unit Roots: A Monte Carlo Investigation, Jour-
   nal of Business and Economic Statistics 7 (1989), pp. 147 – 159.
A testing procedure which is more appropriate in such a situation is given by
SAÏD E. SAÏD and David A. DICKEY, Hypothesis Testing in ARIMA(p,1,q) Mod-
    els, Journal of the American Statistical Association 80 (1985), pp. 369 – 374.
The test that applies the stationarity of a time series as null hypothesis was de-
veloped by
196    5 Nonstationary Processes

DENIS KWIATKOWSKI, PETER C.B. PHILLIPS, PETER SCHMIDT and YONGCHEOL
   SHIN, Testing the Null Hypothesis of Stationarity Against the Alternative of a
   Unit Root, Journal of Econometrics 54 (1992), pp. 159 – 178.
The different philosophies behind the tests with nonstationarity or stationarity as
the null hypothesis are discussed by
ULRICH K. MÜLLER, Size and Power of Tests for Stationarity in Highly Autocorre-
   lated Time Series, Journal of Econometrics 128 (2005), pp. 195 – 213.
The different results of unit root and stationarity tests applied to inflation rates of
different countries are given in
UWE HASSLER and JÜRGEN WOLTERS, Long Memory in Inflation Rates: Interna-
  tional Evidence, Journal of Business and Economic Statistics 13 (1995), pp.
  37 – 45.
A survey of the different test procedures is given in
JAMES H. STOCK, Unit Roots, Structural Breaks and Trends, in: R.F. ENGLE and
   D.L. MCFADDEN (eds.), Handbook of Econometrics, Volume IV, Elsevier,
   Amsterdam et al. 1994, pp. 2739 – 2841.
PETER C. B. PHILLIPS and ZHIJIE XIAO, A Primer on Unit Root Testing, Journal of
   Economic Surveys 12 (1998), pp. 423 – 470, and in
JÜRGEN WOLTERS and UWE HASSLER, Unit Root Testing, Allgemeines Sta-
   tistisches Archiv 90 (2006), pp. 43-58; reprinted in: O. HÜBLER and J. FROHN
   (eds.), Modern Econometric Analysis, Springer, Berlin 2006, pp. 41 – 56.
An important paper introducing the application of unit root tests to many eco-
nomic time series of the United States for the first time is
CHARLES R. NELSON and CHARLES I. PLOSSER, Trends and Random Walks in
   Macroeconomic Time Series: Some Evidence and Implications, Journal of
   Monetary Economics 10 (1982), pp. 139 – 162.
An application to German real interest rates is presented in
GEBHARD KIRCHGÄSSNER and JÜRGEN WOLTERS, Are Real Interest Rates Stable?,
   An International Comparison, in: H. SCHNEEWEISS and K.F. ZIMMERMANN
   (eds.), Studies in Applied Econometrics, Physica, Heidelberg 1993, pp. 214 –
   238.
Theoretical considerations about what happens when trend eliminations are
‘wrongly’ performed are to be found in
K. HUNG CHAN, JACK C. HAYYA and J.-KEITH ORD, A Note on Trend Removal
    Methods: The Case of Polynomial Regression versus Variate Differencing,
    Econometrica 45 (1977), pp. 737 – 744,
CHARLES R. NELSON and HEEJOON KANG, Spurious Periodicity in Inappropriately
   Detrended Time Series, Econometrica 49 (1981), pp. 741 – 751, as well as in
                                                              References      197

CHARLES R. NELSON and HEEJOON KANG, Pitfalls in the Use of Time as an Ex-
   planatory Variable in Regression, Journal of Business and Economic Statistics
   2 (1984), pp. 73 – 82.
The first procedure for a decomposition of a time series into its nonstationary
and its stationary component and a measure for the persistence of a time series
was proposed by
STEPHEN BEVERIDGE and CHARLES R. NELSON, A New Approach to the Decom-
   position of Economic Time Series into Permanent and Transitory Components
   with Particular Attention to Measurement of the Business Cycle, Journal of
   Monetary Economics 7 (1981), pp. 151 – 174,
Alternative procedures for the decomposition were proposed by
ANDREW C. HARVEY, Forecasting, Structural Time Series Models, and the Kal-
   man Filter, Cambridge University Press, Cambridge (England) et al. 1989,
   and
ROBERT J. HODRICK and EDWARD C. PRESCOTT, Post-War U.S. Business Cycles:
   A descriptive Empirical Investigation, Journal of Money, Credit and Banking
   29 (1997), S. 1 – 16.
An alternative measure for the persistence comes from
JOHN H. COCHRANE, How Big is the Random Walk in GNP?, Journal of Political
   Economy 96 (1988), pp. 893 – 920.
An introduction into the theory and estimation of fractionally integrated models
is to be found in the paper by U. HASSLER and J. WOLTERS (1995) mentioned
above but also in
CLIVE W.J. GRANGER and ROSELYNE JOYEUX, An Introduction to Long-Memory
   Time Series Models and Fractional Differencing, Journal of Time Series
   Analysis 1 (1980), pp. 15 – 29; or
RICHARD T. BAILLIE, Long Memory Processes and Fractional Integration in Eco-
   nomics, Journal of Econometrics 73 (1996), pp. 5 – 59.
The concept of seasonal integration of time series has been developed by
SVEND HYLLEBERG, ROBERT F. ENGLE, CLIVE W.J. GRANGER and BYUNG S. YOO,
   Seasonal Integration and Cointegration, Journal of Econometrics 44 (1990),
   pp. 215 – 238; reprinted in: S. HYLLEBERG (ed.), Modelling Seasonality, Ox-
   ford University Press, Oxford et al. 1992, pp. 425 – 466.
In this volume edited by S. HYLLEBERG, there are further papers about the econo-
metric handling of time series with seasonal variations.
   For the discussion of stochastic versus deterministic trends and their implica-
tion for macroeconomic theorizing as well as for econometric work, see the
above-mentioned paper by J.H. STOCK and M.W. WATSON (1988). It was of spe-
198    5 Nonstationary Processes

cial interest whether the gross national product has a unit root, i.e. whether per-
manent shocks have an impact on its development. See for this
JAMES H. STOCK and MARK W. WATSON, Does GNP Have a Unit Root?, Econom-
   ics Letters 22 (1986), pp. 147 – 151,
PIERRE PERRON and PETER C.B. PHILLIPS, Does GNP Have a Unit Root?, A Re-
    Evaluation, Economics Letters 23 (1987), pp. 139 – 145, or
GLENN D. RUDEBUSCH, Trends and Random Walks in Macroeconomic Time Se-
   ries: A Re-Examination, International Economic Review 33 (1992), pp. 661 –
   680.
The theory of real business cycles, which goes back to
FINN E. KYDLAND and EDWARD PRESCOTT, Time to Build and Aggregate Fluctua-
    tions, Econometrica 50 (1982), pp. 1345 – 1370,
is surveyed in
GEORGE W. STADLER, Real Business Cycles, Journal of Economic Literature 32
   (1994), S. 1750 – 1783.
An empirical test of Real Business Cycle Theory but, however, without conclusive
results, is given in
MARK WATSON, Measures of Fit for Calibrated Models, Journal of Political
  Economy 101 (1993), pp. 1011 – 1041.
A more recent paper in this area that investigates the business cycles of five Euro-
pean countries and the United States is
PETER R. HARTLEY and JOSEPH A. WHITT, Macroeconomic Fluctuations: Demand
   or Supply, Permanent or Temporary, European Economic Review 47 (2003),
   pp. 61 – 94.
A supply side theory of the business cycle is already included in
JOSEPH A. SCHUMPETER, Theorie der wirtschaftlichen Entwicklung: eine Untersu-
    chung über Unternehmergewinn, Kapital, Kredit, Zins und den Konjunktur-
    zyklus, Duncker und Humblot, Berlin 1912; English translation: The Theory of
    Economic Development, Harvard University Press, Cambridge (Mass.) 1934.
A survey of papers on the relation between inflation and economic growth is
given in
JONATHAN TEMPLE, Inflation and Growth: Stories Short and Tall, Journal of Eco-
   nomic Surveys 14 (2000), pp. 395 – 426.
6 Cointegration




In the preceding chapter, we used stochastic trends to model nonstationary
behaviour of time series, i.e. the variance of the data generating process in-
creases over time, the series exhibits persistent behaviour and its first dif-
ference is stationary. For many economic time series, such a data generat-
ing process is a sufficient approximation, so that in the following we only
consider processes which are integrated of order one (I(1)).
   For a long time, econometricians have not taken into account that eco-
nomic time series might be integrated. They applied traditional statistical
procedures developed for the investigation of stationary stochastic series.
CLIVE W.J. GRANGER and PAUL NEWBOLD (1974) showed that this might
lead to severe problems. In a simulation study they regressed two inde-
pendently generated random walks on each other. They observed that the
least-squares regression parameters do not converge towards zero but to-
wards random variables with a non-degenerated distribution. Testing these
parameters by employing the critical values of the usual t distribution, the
null hypothesis of a zero coefficient is (wrongly) rejected much too often.
Furthermore, the coefficient of determination does not converge towards
the theoretically correct value of zero but towards a non-degenerated dis-
tribution. The estimated residuals show I(1) behaviour as expected for
theoretical reasons. This implies that the Durbin-Watson statistic of the re-
siduals converges towards zero.

Example 6.1
We performed Monte Carlo simulations to illustrate the problem of spurious re-
gressions. First, we generated 100'000 replications with a sample size of T = 200
observations for two independent random walks x and y. Then we estimated the
following equation:
                               yt = a + b xt + vt
using ordinary least squares. As both series are independently generated, the slope
coefficient as well as the R2 should be zero. In this case, v follows a random walk,
i.e. the first order autocorrelation coefficient is one and the value of the Durbin-
Watson statistic zero. Figure 6.1 shows the density functions of the t statistic of
 b̂ , R2 and the Durbin-Watson statistic (smoothed by a kernel estimator).
200   6 Cointegration



       0 .0 5


       0 .0 4


       0 .0 3


       0 .0 2


       0 .0 1


           0
                -6 0   -4 0           -2 0            0            20                 40          60


                                      Density of the t statistic
            5
         4 .5
            4
         3 .5
            3
         2 .5
            2
         1 .5
            1
         0 .5
            0
                  0      0 .2                0 .4          0 .6                0 .8          1
                                         Density of the R2
          10
            9
            8
            7
            6
            5
            4
            3
            2
            1
            0
                  0            0 .1                 0 .2                0 .3               0 .4
                              Density of the Durbin-Watson statistic



          Figure 6.1: Densities of the estimated t values, R2's, and
                      the Durbin-Watson statistic
                                                          6 Cointegration       201


   The test statistic t̂ has a symmetric density function, which, however, has a
much larger variance than the standard normal distribution. The vertical dashed
lines show the critical values of the normal distribution for the 2.5 and 97.5 per-
centiles, ± 1.96. If the classical distribution theory would be used (wrongly), a
significant result would not only arise in 5 percent but in 83.32 percent of all
cases. The correct values for the 2.5 and 97.5 percentiles are ± 21.06, indicated by
solid lines.
   The density function of R2 shows that values greater than 0.2 (0.5) have a prob-
ability of 46.13 (16.13) percent despite the fact that the true R2 should be zero.
The classical F distribution for the null hypothesis H0: R2 = 0, applied with 200
observations, leads to a critical value of 0.019 at the 5 percent level. Thus, when
using this wrong distribution, almost all estimates would be accepted as being sig-
nificant.
   In these simulations, the estimated values of the Durbin-Watson statistic are be-
tween zero and 0.4. The probability that a value greater than 0.2 occurs is 4.62
percent. This almost corresponds to the figures given by ROBERT F. ENGLE and
BYUNG SAM YOO (1987, Table 4); they report a critical value of 0.20 at the five
percent significance level for a sample size of 200 observations. Thus, contrary to
the t and F tests, the Durbin-Watson test provides the expected results.

To avoid such spurious relations, time series analysts advised against the
use of the original series but recommended that they should be transformed
to that effect that they can be considered as realisations of weakly station-
ary processes. GEORGE E.P. BOX and GWILYM M. JENKINS (1970, pp.
378f.), for example, recommended that, in order to estimate the dynamic
relations between time series, one had to difference the series until their
correlograms no longer indicated nonstationarity, and that after these trans-
formations the cross-correlation functions should be used to identify the
relation. This is one possible reason for the spurious independence results
of Granger causality tests mentioned in Chapter 3.

Example 6.2
The following example illustrates how differencing leads to an underestimation of
the true relation between I(1) variables. Given the following relations:
(E6.1)                           yt = wt + uy,t ,
(E6.2)                           xt = wt + ux,t ,
(E6.3)                           wt = wt-1 + uw,t ,
where ui, i = {x, y, w} are three pure random processes and uw is independently
generated from ux and uy. Thus, y and x are I(1) processes; they contain a common
stochastic trend.
202    6 Cointegration

   To eliminate this trend, first differences are performed. The following regres-
sion is estimated to capture the relation between the two variables:
                                  ǻyt = a ǻxt + vt, t = 1, …, T.
The least squares estimator gives the following result:
                  T                                    T

                 ¦ 'x 'y
                 t 1
                          t           t                ¦ (u
                                                       t 1
                                                              w,t       'u x,t ) (u w,t  'u y,t )
          â =      T
                                                =                  T

                 ¦ ('x )
                  t 1
                              t
                                  2
                                                                 ¦ (u
                                                                   t 1
                                                                           w,t    'u x,t ) 2

                  T                       T                         T                            T

                 ¦u
                 t 1
                        2
                        w,t    ¦ u w,t 'u x,t  ¦ u w,t 'u y,t  ¦ 'u x,t 'u y,t
                                      t 1                          t 1                           t 1
             =                          T                    T                           T
                                                                                                       .
                                      ¦u  t 1
                                                2
                                                w ,t    2¦ u w,t 'u x,t  ¦ 'u 2x,t
                                                             t 1                       t 1


Thus, the probability limit of â is
                                                                   V 2u w  2V u x u y
                                              plim â =                                       .
                                                                    V 2u w  2V2u x

Contrary to the true one to one relation between the levels of x and y, the estima-
tion in differences leads to a slope parameter which is smaller than one if ux and uy
are uncorrelated. The larger the variance V2u x is compared to the variance V 2u w the
smaller is this estimate. This holds even more if ux and uy are negatively corre-
lated. If their correlation is positive, both under- or overestimations might occur.

This example reveals two problems. Firstly, estimated regression coeffi-
cients may not be significantly different from zero, although the respective
relation exists. Secondly, estimated regression coefficients might be biased
downwards because of errors-in-variables, even if they are statistically
significant. To evade the Skylla of spurious independence as well as the
Charybdis of spurious regressions, i.e. to render the type I and type II er-
rors as unlikely as possible, C.W.J. GRANGER and P. NEWBOLD (1974, p.
118) recommended to estimate the relations in the levels as well as in first
differences, in order to be better able to (economically) interpret the re-
sults.
   To solve this problem, it is necessary to develop statistical procedures
which are suited for capturing relations between nonstationary variables
correctly. This solution is provided by the theory of cointegrated relations
developed in the 1980s. The idea goes back to CLIVE W.J. GRANGER
(1981, 1986) and was popularised in papers by ROBERT F. ENGLE and
CLIVE W.J. GRANGER (1987), JAMES H. STOCK (1987) as well as SØREN
                 6.1 Definition and Properties of Cointegrated Processes   203

JOHANSEN (1988). Today, these procedures have become standard instru-
ments for every time series econometrician. There are two main reasons
for the rapid dissemination of this approach: First, the estimated cointe-
grating relations are closely connected to economic equilibrium relations.
Second, in many applications it is sufficient to use ordinary least squares to
get consistent estimates. Thus, traditional programme packages can be
used further on.
   A quite simple approach to avoid the spurious regression problem with
I(1) variables is to include lagged values of the dependent and independent
variables into the regression since, in this case, parameter values exist for
which the residuals are I(0). Applying OLS results in consistent estimates
of all parameters. (See J.D. HAMILTON (1994, pp. 561ff.).)
   In the following, we define cointegrated processes and present their
properties (Section 6.1). Section 6.2 shows how single equation models
with integrated variables can be estimated and how cointegration tests can
be performed. The handling of systems of such equations using vector
autoregressions as discussed in Chapter 4 is described in Section 6.3. Sec-
tion 6.4. discusses the significance of these procedures for the analysis of
long-run economic (equilibrium) relations.


6.1 Definition and Properties of Cointegrated Processes

Quite generally, cointegration might be characterised by two or more I(1)
variables indicating a common long-run development, i.e. they do not drift
away from each other except for transitory fluctuations. This defines a sta-
tistical equilibrium which, in empirical applications, can often be inter-
preted as a long-run economic relation.
   R.F. ENGLE and C.W.J. GRANGER (1987) defined cointegration as fol-
lows:
x   The elements of a k-dimensional vector Y are cointegrated of order (d,
    c), Y ~ CI(d, c), if all elements of Y are integrated of order d, I(d), and
    if there exists at least one non-trivial linear combination z of these
    variables, which is I(d-c), where d  c > 0 holds, i.e. iff
                               ȕ' Yt = zt ~ I(d-c).
    The vector ß is denoted as cointegration vector. The cointegration rank
    r is equal to the number of linearly independent cointegration vectors.
    The cointegration vectors are the columns of the cointegration matrix
    B, with
204      6 Cointegration

                                    B' Yt = Zt .
If all variables are I(1), it holds that 0  r < k. For r = 0, the elements of the
vector Y are not cointegrated. Correspondingly, the appropriate model is a
system of first differences.
   Important properties of cointegrated relations were summarised in the
Granger Representation Theorem, presented by R.F. ENGLE and C.W.J.
GRANGER (1987, pp. 255f.). The most important part of this theorem is:
x     If the kx1 vector Y is cointegrated of order CI(1, 1) with cointegration
      rank r, besides the AR representation
                                  A(L) Yt = Ut,
      with Ut being white noise, there also exists an error correction repre-
      sentation (as discussed in Section 4.1)
                        A*(L) (1 – L)Yt = – ī Zt-1 + Ut ,
      with
                                  A(1) = ī · B',
      ī and B being kxr matrices of rank r, 0 < r < k, and
                                    Zt = B' Yt
      being an rx1 vector of I(0) variables.
In addition to this theorem, the following two lemmata hold:
Lemma 1:        If xt and yt are I(1) and cointegrated, xt and yt+Ĳ are also coin-
                tegrated for any Ĳ.
Lemma 2:        If x and y are I(1) and cointegrated, x is Granger causal to y
                and/or y is Granger causal to x.
Lemma 1 holds because
                    yt+Ĳ = yt + ǻyt+1 + + … + ǻyt+Ĳ ,
implying that yt+Ĳ differs from yt only by a stationary term, which does not
change the cointegration relation. Lemma 2 holds because an error correc-
tion representation exists for at least one of any two cointegrated variables,
and error correction representations always imply Granger causal relations.
However, the reverse – Granger causality between integrated variables im-
plies cointegration – does not hold.
                          6.2 Cointegration in Single Equation Models    205


6.2 Cointegration in Single Equation Models:
    Representation, Estimation and Testing

In the following, we start with the most simple case, a bivariate model, i.e.
a simple regression relation between two I(1) variables. Then we extend
the analysis to a multivariate (single equation) regression model.


6.2.1 Bivariate Cointegration

Let x and y be two I(1) processes. In general, any linear combination of
these two variables will again be an I(1) process. However, if there exists a
parameter b so that the linear combination
(6.1)                       yt – b xt = zt + a
is stationary, then x and y are cointegrated. The I(0) process z has an ex-
pectation of zero. The parameter a defines the level of the corresponding
equilibrium relation which is given by
(6.2)                          y = a + bx.
The vector ȕ' = [1 -b] is the cointegration vector. It is unique only because
of its normalisation, as Į·ȕ' with Į  0 also leads to a stationary linear
combination of y and x. The stationary process z describes the deviations
from the equilibrium, the equilibrium error. Because of the finite variance
of z, the deviations of the equilibrium are bounded; the system is always
returning to its equilibrium path. Thus, relation (6.2) is an attractor.
   Cointegration of x and y implies that both variables follow a common
stochastic trend which can be modelled as a random walk,
(6.3a)                       wt = wt-1 + ut ,
where u is again a white noise process. Thus, the two cointegrated I(1)
processes can, for example, be represented as
(6.3b)               yt = b wt + y t with y t ~ I(0)
and
(6.3c)               xt = wt + x t with x t ~ I(0).
The linear combination
(6.3d)                 yt – b xt = y t – b x t   = zt
206    6 Cointegration

is stationary, as a linear combination of stationary processes is again sta-
tionary. Thus, (6.3d) is a cointegrating relation.
   According to the Granger representation theorem, there exists an error
correction representation for any cointegrating relation. In the bivariate
case its reduced form can be written as:
                                            nx              ny

(6.4a) ǻyt = a0 – Ȗy(yt-1 – b xt-1) + ¦ a xj 'x t  j + ¦ a yj 'y t  j + uy,t ,
                                            j 1             j 1

                                            kx              ky

(6.4b) ǻxt = b0 + Ȗx(yt-1 – b xt-1) + ¦ b xj'x t  j + ¦ b yj 'y t  j + ux,t ,
                                            j 1             j 1


with ux and uy as pure random processes. If x and y are cointegrated, at
least one Ȗi, i = x, y, has to be different from zero. It is obvious that, in this
case, a relation exists between the levels of the variables. A model esti-
mated only in first differences would be misspecified because the term yt-1
– b xt-1 is missing. The representation (6.4) has the advantage that it only
contains stationary variables although the underlying relation is between
nonstationary (I(1)) variables. Thus, if the variables are cointegrated and
the cointegration vector in (6.4) is known, the traditional statistical proce-
dures can be applied for estimating and testing. The parameterisation in
system (6.4) provides a separation of the short-run adjustment processes
modelled by the lagged differences of the variables from the adjustment to
the long-run equilibrium because the system also reacts to the deviations
from the equilibrium relation which are lagged by one period.
   In case of b > 0, system (6.4) is stable whenever 0  Ȗy < 2 and also 0 
Ȗx < 2 hold, and if at least one of the two parameters is different from zero.
This implies that – ceteris paribus – a positive deviation from the long-run
equilibrium leads to a reduction of y and an increase of x and, therefore, to
a reduction of the initial equilibrium error: the system tends towards its at-
tractor (6.2). If the initial equilibrium error is negative, a corresponding ad-
justment process is initiated. If one of the two adjustment coefficients is
zero, i.e. if Ȗx = 0, the adjustment is only possible via changes in y. The
development of the I(1) variable x is independent of the equilibrium error,
it is – so to speak – the stochastic trend driving the system. In this situa-
tion, x is called weakly exogenous. If Ȗx > 0 and Ȗy is negative, or if Ȗy > 0
and Ȗx is negative, the system might also be stable. According to S.
JOHANSEN (1995, p. 54), however, this depends on the other parameters of
the system.
   Thus, in a bivariate system with two I(1) variables, only the following
two situations can occur:
                              6.2 Cointegration in Single Equation Models          207

(i)    The two variables are not cointegrated, i.e. Ȗx = Ȗy = 0. Then the sys-
       tem contains two stochastic trends.
(ii) The two variables are cointegrated, i.e. at least one Ȗi, i = x, y, is posi-
     tive. Then the system contains one cointegrating relation and one
     common stochastic trend. It follows from Lemma 2 that at least one
     simple Granger-causal relation between x and y exists.


Example 6.3
Let the ARIMA(1,1,0) process
(E6.4)                   (1 – ĮL)ǻxt = ut with |Į| < 1,
be given, and the relation
(E6.5a)                       yt = b xt + zt, b  0,
with
(E6.5b)                          zt = ȡ zt-1 + vt ,
where ut and vt are white noise. Because of the definition of cointegration, it is ob-
vious that x and y are cointegrated for |ȡ| < 1. However, if ȡ = 1, there is no coin-
tegration. In this case, the development of y is determined by two stochastic
trends.
   To derive the error correction model corresponding to (E6.4) and (E6.5a,b), we
first insert (E6.5b) in (E6.4a). This leads to
                        yt = ȡ yt-1 + b xt – ȡ b xt-1 + vt .
Subtracting yt-1 on both sides of this equation and adding as well as subtracting the
term b xt-1 on the right hand side, we get the structural form of the error correction
representation,
               ǻyt = –(1 – ȡ) yt-1 + b (1 – ȡ) xt-1 + b ǻxt + vt .
By taking (E6.4) into account, the reduced form of the error correction model is
given by
(E6.6a)                        ǻxt = Į ǻxt-1 + ux,t ,
(E6.6b)         ǻyt = –(1 – ȡ) (yt-1 – b xt-1) + b Į ǻxt-1 + uy,t ,
where ux,t = ut and uy,t = vt + but.
   The error correction equation of x, (E6.6a), does not contain the equilibrium er-
ror y – b x. Thus, x is weakly exogenous and drives the whole system. If there is
cointegration, i.e. for -1 < ȡ < 1, it holds that 0 < Ȗy < 2 for the adjustment parame-
ter Ȗy = (1 í ȡ). Thus, the system is stable; y is adjusting to the long-run equilib-
rium. For ȡ = 1, i.e. if there is no cointegration, (E6.6b) no longer contains the er-
ror-correction term. The system contains two stochastic trends. In any case, the
208    6 Cointegration

error correction model only contains stationary variables, the differences of I(1)
variables and the stationary equilibrium error.


6.2.2 Cointegration with More Than Two Variables

If there are only two I(1) variables after normalisation, there are either only
one (unique) cointegrating relation and one common stochastic trend or
two stochastic trends. The situation is much more complicated if there are
more than two I(1) variables which are cointegrated.
   Let us consider the situation of three I(1) variables, yi, i = 1, 2, 3. Then
two independent cointegrating relations could exist, as, for example, by as-
suming zero expectations for all variables:
                         y1,t = b2 y2,t + z1,t, b2  0,
                         y2,t = b3 y3,t + z2,t, b3  0.
In this case, E1' = [1 -b2 0] and E'2 = [0 1 -b3] are linearly independent.
   However, linear combinations of ȕ1 and ȕ2 provide cointegration vectors
which include all three I(1) variables, Y' = [y1 y2 y3],
                                         ª       J          º
          ȕȖ = Ȗ ȕ1 + (1 – Ȗ) ȕ2       = «1  J (1  b 2 ) »» , 0  Ȗ  1.
                                         «
                                         «¬ (1  J )b3 »¼

ßȖ are again cointegrating vectors. This follows from
           E'J Yt = Ȗ y1,t + (1 – Ȗ (1 + b2)) y2,t – (1 – Ȗ) b3 y3,t

                   = Ȗ (y1,t – b2 y2,t) + (1 – Ȗ) (y2,t – b3 y3,t)
                   = Ȗ z1,t + (1 – Ȗ) z2,t = zȖ,t ,
where zȖ as a linear combination of the two I(0) processes z1 and z2 is also
stationary. For Ȗ = 1, we get the cointegration vector ß1, and for Ȗ = 0 the
cointegration vector ß2. These two vectors form the basis of the cointegra-
tion space with dimension two, r = 2, because there are only two linearly
independent cointegration vectors. However, as there exists an infinite
number of bases for this space, the representation of the equilibrium rela-
tions is not unique. Thus, we again face the well known identification
problem of traditional econometrics; only additional a priory restrictions
(which are not contained in the data) can lead to a unique representation.
   With k = 3 I(1) variables and r = k – 1 = 2 cointegrating relations, the
system contains just one stochastic trend; otherwise the supposed pairwise
                            6.2 Cointegration in Single Equation Models         209

cointegration between y1 and y2, y2 and y3, as well as y1 and y3 would be
impossible.
   On the other hand, if a system of three I(1) variables contains two sto-
chastic trends, there can only be one cointegrating relation, and the corre-
sponding cointegration vector is again unique after normalisation, e.g. for
ȕ' = [1 b 2  b 3 ]. Then the long-run equilibrium relation is

                           y1,t = b 2 y2,t + b 3 y3,t .
According to the definition in Section 6.1, a vector with k integrated vari-
ables of order one, I(1), is cointegrated of rank r, 0 < r < k, if there exist
exactly r linearly independent cointegration vectors ȕi  0, i = 1, 2, …, r.
Combining the cointegration vectors as columns of the cointegration ma-
trix B,
                                B = [ȕ1 ȕ2 … ȕr]
indicates the deviations of the r statistical equilibria Z' = [z1 z2 … zr] as
(6.5)                            B' Yt = Zt .
In case of I(1) variables, the system contains k – r common stochastic
trends. The cointegration rank r must always be smaller than the number of
I(1) variables k, because otherwise the cointegration matrix B would be
invertible and Yt = B'-1Zt would be a linear combination of stationary proc-
esses. This contradicts the assumption that all k variables are I(1). If r = k –
1, we get the special case of only one common stochastic trend in the sys-
tem. Therefore, pairwise cointegrating relations exist between all compo-
nents of Y.


6.2.3 Testing Cointegration in Static Models

In order to handle cointegrating relations in single equation models cor-
rectly, it has to be presupposed that there exists at most one cointegrating
relation between k I(1) variables which comprehends all variables. In this
case, unit root tests can be used to test for cointegration by applying them
to the residuals of an estimated (static) equilibrium relation. If y1 is taken
to be the dependent variable and if there exists no cointegration relation
between y2, …, yk, the test equation is given by
                                          k
(6.6)                    y1,t = a + ¦ b j y j,t + zt
                                         j 2
210        6 Cointegration

for the k I(1) variables, where (in the case of cointegration) z is again the
equilibrium error. The parameters b2, b3, …, bk can be estimated consis-
tently with the least squares approach. This method minimises the residual
variance. If the estimated parameters differ from the true cointegration pa-
rameters, the residual process is nonstationary, i.e. its variance is increas-
ing with increasing sample size T. On the other hand, the residual process
is stationary for the cointegrating parameters and, therefore, has a finite
variance. Apparently, this is the minimum.

                Table 6.1: Critical Values of the Dickey-Fuller Test on
                           Cointegration in the Static Model

                                                      k
       Į               1                   2                    3                      4

                                         Model with constant term

      0.10           -2.57               -3.05                -3.45                   -3.81

      0.05           -2.86               -3.34                -3.74                   -4.10

      0.01           -3.43               -3.90                -4.30                   -4.65

                                 Model with constant term and time trend

      0.10           -3.13               -3.50                -3.83                   -4.15

      0.05           -3.41               -3.78                -4.12                   -4.43

      0.01           -3.96               -4.33                -4.67                   -4.97

  The values for k = 1 are the critical values of the Dickey-Fuller unit root test.
  Source: U. HASSLER (2004, Table 1, p. 111).


Following this logic, R.F. ENGLE and C.W.J. GRANGER (1987) proposed a
testing procedure for the null hypothesis that there is no cointegrating rela-
tion and, therefore, the residual process is nonstationary, H0: zt ~ I(1),
against the alternative of cointegration, i.e. that this process is stationary,
H1: zt ~ I(0). It requires two steps to perform this test. Firstly, relation (6.6)
is estimated with OLS. Secondly, the augmented Dickey-Fuller test, as
presented in Section 5.3.1, is applied to the estimated residuals. As OLS
residuals have a zero mean by construction, the version without determi-
nistic terms, (5.17''), is used. However, the critical values are different be-
cause the test is applied to a ‘generated’ and not to an observed time series.
                            6.2 Cointegration in Single Equation Models        211

They depend on the number of I(1) variables k but also on the determinis-
tic components of the equilibrium relation, i.e. on whether a constant term
and/or a deterministic time trend is included in model (6.6).
   Table 6.1 shows some asymptotic critical values derived through simu-
lations by JAMES G. MACKINNON (1991). The null hypothesis of no coin-
tegration is rejected for too small values of the test statistic. The values for
k = 1 are those of the augmented Dickey-Fuller unit root test. Following
the considerations in UWE HASSLER (2004), the critical values for the
model with a constant term are valid if and only if the regressors in (6.6)
only contain a unit root but no linear trend. If, on the other hand, the data
generation process of at least one (single) regressor in (6.6) also contains a
linear trend, the correct critical values are those in the lower part of Table
6.1 for the case k-1. However, these values are hardly different from those
of the model without a trend.
   The test is correct if and only if the explanatory variables, y2, y3, …, yk,
themselves are not cointegrated and the unique cointegration relation in-
cludes y1. In practical applications, it is recommended to start with small
models in relation (6.6) and to add additional variables only as long as the
null hypothesis of no cointegration cannot be rejected. Due to the invari-
ance property of cointegration, i.e. that two or more variables do not
change their cointegration property if further I(1) variables are added, the
specific-to-general approach is appropriate in this framework.
   In the case of cointegration, the parameter estimates bˆ 2 , bˆ 3 ,!, bˆ k , in
equation (6.6) are super consistent, i.e. they converge with a rate of T to-
wards their true values, and therefore their convergence is faster than the
one of parameters estimated in regressions with stationary variables, which
converge with a rate of T . Contrary to the stationary case, simultaneity
of the variables or errors in variables do not inhibit this consistency result.
However, the estimates are biased for finite samples. ANINDYA BANERJEE,
JUAN J. DOLADO, DAVID F. HENDRY and GREGOR W. SMITH (1986)
showed that 1 – R2 is a measure of the bias. The reason for this is that in
the case of cointegration R2 tends towards one with increasing sample size,
because the variances of the nonstationary regressors, which increase with
the sample size, dominate the finite variance of the stationary error term.

Example 6.4
The situation of a simple regression can be used to demonstrate the bias. Let y and
x be cointegrated I(1) variables, i.e. the relation
(E6.7a)                       yt = a + b xt + zt,
212    6 Cointegration

holds and zt is stationary. As explained above, this relation can be estimated super-
consistently with OLS. The same holds for the reverse regression

(E6.7b)                          xt = ã + b yt + vt .
The product of the two regression coefficients estimated with OLS leads to:

                                  ˆ    n x]) 2
                                      (Cov[y,
                            b̂  b =                 = R2  1.
                                       ˆ  V[x]
                                       V[y] ˆ

                                                               ˆ
If the variables are cointegrated, R2 tends towards one, i.e. b tends towards b̂ 1 .
                     2
To the extent that R is smaller than one for finite samples, the product of the two
estimated coefficients is systematically underestimated.

Moreover, standard inference procedures are not possible as, in general,
the t statistics do not have asymptotically normal distributions. However,
following PENTI SAIKKONEN (1991) as well as JAMES H. STOCK and
MARC W. WATSON (1993), a simple correction can be applied to the test
equation (6.6) ensuring that the estimation is still super consistent and that
the estimated t statistics are, nevertheless, asymptotically normally distrib-
uted: Additional lagged and future differences of the regressors are in-
cluded to ensure that the I(1) regressors are uncorrelated with the residuals:
                        k               k1                               k1
(6.7) y1,t = a + ¦ b j y j,t +
                        j 2
                                       ¦ S 'y
                                       j k2
                                               2, j   2,t  j   + … +   ¦ S 'y
                                                                        j k2
                                                                                k, j   k,t  j



                 + z t .
Information criteria might be used to determine the maximal lag and lead
k1 and k2. The t statistics of bˆ 2 , bˆ 3 , ! , bˆ k converge towards a normal dis-
tribution with the corresponding true parameters as expectations and the
variance Ȧ2/V[ z t ], with
                                                 f
                      Ȧ2 = V[ z t ] + 2 ¦ Cov > z t z t W @ .
                                                W 1

This long-run variance can be estimated according to (5.18).

Example 6.5
Figure 6.2 shows the logarithm of the real quantity of money M1 in per capita
terms, m, the logarithm of the real per capita Gross National Product (GNP), y,
and the long-run interest rate, r, for the Federal Republic of Germany. We use
quarterly data from the first quarter of 1960 to the last quarter of 1989, i.e. for the
                               6.2 Cointegration in Single Equation Models          213

period before the German Unification. Unit root tests clearly indicate that all three
time series are I(1). The Engle-Granger approach is used to investigate whether
cointegration relations exist between these variables. However, this approach can
only be applied if there exists just one cointegrating relation. Thus, we start by
checking whether the time series are pairwise cointegrated. The null hypothesis of
no cointegration can never be rejected in all three possible cases.
   In the next step we regress the quantity of money, m, on GNP, y, and the inter-
est rate, r. We chose m as the dependent variable as we are interested in a long-run
money demand function. When estimating this relation with OLS, we include sea-
sonal dummies along with the constant term because m as well as y exhibit strong
seasonal variations. To ensure that the constant term really captures the level ef-
fect, we use centred seasonal dummies si, i = 1, 2, 3, which take on the value 0.75
for the i-th quarter and -0.25 elsewhere. Thus, we have an annual mean of zero.
The estimated relation (with the standard errors in parentheses) is:

(E6.8)    mt =  1.370  1.113 y t  3.059 rt  0.036 s1,t  0.036 s 2,t
               ( 0.124) ( 0.016)    ( 0.260) ( 0.010)       ( 0.010)

                   0.018 s3,t + ẑ t ,
                   ( 0.010)

          R2 = 0.987, SE = 0.038, T = 116.
The Dickey-Fuller unit root test for the estimated residuals ẑ provides the follow-
ing test equation:

                               ǻ ẑ t =  0.240 zˆ t 1 + ût .
                                        (3.66)
The estimated test statistic is -3.66. m and y contain a linear trend as we can see
from Figure 6.2. Due to economic reasons, (E6.8) does not include a trend. There-
fore we have to take the critical values for k = 2 from the lower part of Table 6.1.
These critical values are -3.50 at the 10 percent and -3.78 at the 5 percent signifi-
cance level. Thus, the null hypothesis can (only) be rejected at the 10 percent
level. Economically, the estimated parameters are meaningful and can be inter-
preted in the sense of a long-run money demand function. The estimated income
elasticity of the money demand function is close to one and the interest rate elas-
ticity is negative; at an interest rate level of 5 percent, for example, it has the value
of -0.15 (= - 3.059 · 0.05).


6.2.4 Testing Cointegration in Dynamic Models

Despite the super consistency of the estimates, the static approach has the
disadvantage that with a finite number of observations the estimated coin-
tegration parameters might be seriously biased. This bias is only slightly
reduced with an increasing number of observations. One possible reason
214   6 Cointegration



           ln(M t )
           6.4

           6.0

           5.6

           5.2

           4.8                                                   year
                      1965    1970     1975    1980       1985

           a) Logarithm of the per capita real quantity of money M1
           ln(Yt )

           6.8

           6.4

           6.0

           5.6

           5.2                                                   year
                      1965    1970     1975    1980       1985

                       b) Logarithm of the per capita real GNP
           percent
           12

           10

            8

            6

            4                                                    year
                      1965    1970    1975     1980       1985

                              c) Long-run interest rate


      Figure 6.2: Data for the Federal Republic of Germany, 1961 í 1989
                                6.2 Cointegration in Single Equation Models    215

for the bias are highly autocorrelated residuals due to the fact that the dy-
namic is neglected in relation (6.6). It is explicitly captured in the error
correction equations. Because of the Granger representation theorem men-
tioned above, a cointegration test can also be performed in the uncondi-
tional error correction equation of y1,
                                             k          k1
(6.8)       ǻy1,t = a0 – Ȗ1 y1,t-1 + ¦ T j y j,t 1 + ¦ a1j 'y1,t  j + …
                                            j 2         j 1
                          kk
                       + ¦ a kj 'y k,t  j + u1,t,
                          j 1


or
                            §            k T       · k1
                                             j
(6.8')      ǻy1,t = a0 – Ȗ1 ¨ y1,t 1  ¦ y j,t 1 ¸ + ¦ a1j 'y1,t  j + …
                            ©           j 2 J1     ¹ j1
                          kk
                       + ¦ a kj 'y k,t  j + u1,t ,
                          j 1


respectively. With
                                      Tj
(6.9)                      bj =            , j = 2, …, k,
                                      J1
the expression in parentheses in (6.8') can be written as
(6.10)            y1,t-1 – b2 y2,t-1 – … – bk yk,t-1 = zt-1 .
If all yi, i = 1, …, k, are I(1), the first differences of these variables are sta-
tionary. Thus, equations (6.8) or (6.8') are only balanced, i.e. the stationary
variable ǻy1 is explained by stationary variables, if (6.10) is a stationary
linear combination which reflects deviations from the long-run equilibrium
or, if this is not the case, it does not contribute to the explanation of ǻy1,
i.e. if Ȗ1 = 0. Thus, for the cointegration test in the error correction frame-
work we get the null hypothesis
             H0: (y1, y2, ..., yk) are not cointegrated, i.e. Ȗ1 = 0,
against the alternative
                 H1: the variables are cointegrated, i.e. Ȗ1 > 0.
If there is cointegration, the adjustment parameter has to be positive, Ȗ1 >
0, as the model would otherwise not be stable; there would be no adjust-
ment towards the equilibrium. The test is performed in such a way that
equation (6.8) is estimated by using ordinary least squares and the lag
216    6 Cointegration

lengths k1, ... kk are chosen so that the estimated residuals û do not exhibit
significant autocorrelation.
   The test statistic is the t value of Ĵ 1. The null hypothesis that there is no
cointegration is rejected if these values are too small. The corresponding
critical values are given in ANINDYA BANERJEE, JUAN J. DOLADO and
RICARDO MESTRE (1998, Table 1, pp. 276f.). Again, these values depend
on whether relation (6.8) is estimated with or without a constant term or a
trend and, of course, on the number of I(1) variables included in the test
equation. Selected asymptotically valid critical values are given in Table
6.2.

               Table 6.2:   Critical Values of the Cointegration Test
                            in the Error Correction Model

                                                   k
         Į
                             2                     3                       4

                                        Model with constant term

        0.10                -2.89                -3.19                  -3.42

        0.05                -3.19                -3.48                  -3.74

        0.01                -3.78                -4.06                  -4.46

                                 Model with constant term and time trend

        0.10                -3.39                -3.62                  -3.82

        0.05                -3.69                -3.91                  -4.12

        0.01                -4.27                -4.51                  -4.72

  Source: U. HASSLER (2004, Table 4, p. 112).



UWE HASSLER (2000) showed that in the case that relation (6.8) contains
only a constant term, the critical values are only correct if the I(1) regres-
sors do not contain a deterministic trend. If at least one of the k I(1) vari-
ables contains a deterministic trend, we get the correct critical values from
the lower part of Table 6.2 (for the model with constant term and trend),
now choosing the critical values for the case k – 1. If (6.8) contains only
two I(1) variables, the appropriate critical values are those of unit root tests
                            6.2 Cointegration in Single Equation Models        217

when the test equation includes a deterministic trend, i.e. the critical values
for the model with constant term and trend for k = 1 are given in Table 6.1.
   When these tests are applied in empirical research, it is not clear from
the outset which equations of the multivariate error correction model con-
tain the error correction term. Thus, the described test procedure must also
be applied with the dependent variables y2, y3, ..., yk.
   In relation (6.8) the instantaneous changes of y2, y3, ..., yk might also be
included if the adjustment parameters in the corresponding equations are
zero, i.e. that Ȗ2 = Ȗ3 = ... = Ȗk = 0. This means that y2, y3, ..., yk are weakly
exogenous for the estimation of the parameters in the long-run relation. In
a Monte Carlo study, UWE HASSLER and JÜRGEN WOLTERS (2006)
showed that using the conditional error correction equation, i.e. including
the instantaneous changes of ǻy2, ǻy3, …, ǻyk in equation (6.8), results in
a more powerful cointegration test than without these variables. The gen-
eral finding is that in any case, the conditional error correction regression
outperforms the unconditional one.
   If there is cointegration, equation (6.10) provides an estimation of the
cointegrating vector if the theoretical values in (6.9) are substituted by
their least squares estimates. This is the non-linear cointegration estimator
going back to JAMES H. STOCK (1987) which is also super consistent. The
representation (6.8') gives the corresponding error correction equation.

Example 6.6
Now we use the data of Example 6.5 to test for cointegration in the error correc-
tion model (6.8). This approach avoids the possible bias in the Engle-Granger pro-
cedure since the short-run dynamic is not neglected. It serves as a starting point
for the estimation of a complete money demand function. To capture the strong
seasonal movements in m and y, the maximal lag for the changes in the explana-
tory variables is four. Centred seasonal dummies are also included. Eliminating
the variable with the lowest t value successively leads to the following parsimoni-
ous model (with t values in parentheses):

(E6.9)   ǻmt =  0.145  0.166 mt-1 + 0.183 yt-1  0.382 rt-1
               (1.96) (3.90)       (3.81)      (4.48)


                   0.195 ǻmt-1 + 0.160 ǻmt-2 + 0.279 ǻmt-4  0.259 ǻyt-1
                  (2.42)         (2.05)        (3.64)      (2.72)


                   0.508 ǻyt-2  0.323 ǻyt-3  0.191 ǻyt-4  1.215 ǻrt-1
                  (5.92)       (3.80)       (2.12)       (3.91)
218    6 Cointegration


                    0.042 s1,t  0.001 s2,t     0.037 s3,t + ût ,
                   (2.55)      (0.10)         (2.25)

                  R2 = 0.937, SE = 0.013, T = 115, JB = 10.38 (p = 0.01),
                  LM(1) = 0.116 (p = 0.734), LM(2) = 1.683 (p = 0.191),
                  LM(4) = 1.050 (p = 0.836), LM(8) = 0.963 (p = 0.470).
The Jarque-Bera test (JB) rejects the null hypothesis of normality of the residuals
at the 1 percent level. On the other hand, the residuals do not show deviations
from white noise according to the Lagrange Multiplier tests (LM(n)) that test
autocorrelation up to order n. This means that the specification in (E6.9) captures
the short- and long-run dynamics of the variables in a reasonable way.
   There exists a cointegrating relation between m, y, and r if the estimated coeffi-
cient of mt-1 is significantly negative. In this case, where m and y contain determi-
nistic trends, as can be seen from Figure 6.2, and no trend term is included in
(E6.9), the correct critical value is found in the lower part of Table 6.2 for the case
k = 2. Thus, the critical value with a 5 percent significance level is –3.69. Since
the estimated t value is –3.90, the null hypothesis of no cointegration can be re-
jected at the 5 percent level. Equation (E6.9) is balanced. According to (6.8') and
(6.9), this leads to the following long-run money demand equation:
(E6.10)                      m = 1.104 y – 5.023 r .
Comparing this result with the static long-run money demand function in (E6.8),
we see that the income elasticity is about the same but that we get a stronger inter-
est rate effect. Assuming an interest rate of 5 percent, the long-run interest rate
elasticity is -0.25, contrary to -0.15 in the static approach.


6.3 Cointegration in Vector Autoregressive Models

Assuming that the k variables, y1, y2, …, yk, collected in the vector Y, are
integrated of order one, the following cases are possible: Either there is no
cointegration at all or there exist one or two up to k – 1 linear independent
cointegration vectors. In this case we cannot use single equation proce-
dures which allow at most for one cointegration relation. We no longer get
unique relations as seen in Section 6.2.2. If we have more than two I(1)
variables we must at first estimate the cointegration rank r, i.e. the number
of linearly independent cointegration vectors. This can be done with a pro-
cedure developed by SØREN JOHANSEN (1988).
                    6.3 Cointegration in Vector Autoregressive Models    219

6.3.1 The Vector Error Correction Representation

Starting point of this approach is an adequate statistical description of the
linear relations between the k nonstationary variables. The usual way is the
modelling as a vector autoregressive process of finite order p. We can use
the techniques for stationary processes presented in Chapter 4. Therefore,
we have
                                p
(6.11)                Yt =     ¦A Y
                                j 1
                                      j     t j     + Dt + Ut ,

where U denotes a normally distributed k-dimensional white noise process,
D represents the deterministic terms, and Aj, j = 1, 2, …, p, are kxk-
dimensional parameter matrices. The reparametrisation as a vector error
correction model as described in Sections 4.1 and 6.1 leads to
                                          p 1
(6.12)        ǻYt = – Ȇ Yt-1 + ¦ A*j 'Yt  j + Dt + Ut ,
                                          j 1


  with
                      p                                         p
   Ȇ = A(1) = I – ¦ A j       und A*j =  ¦ A i , j = 1, 2, …, p–1.
                      j 1                                   i j1


The matrix 3 represents the long-run relations between the variables.
   Since all components of Yt are I(1) variables, each component of ǻYt,…,
ǻYt-p+1 is stationary and each component of Yt-1 is also integrated of order
one. This makes relation (6.12) unbalanced as long as Ȇ has a full rank of
k. In this case the inverse matrix Ȇ-1 exists and we could solve equation
(6.12) for Yt-1 as a linear combination of stationary variables. However,
this would be a contradiction. Therefore, Ȇ must have a reduced rank of r
< k. Then, the following decomposition exists:
(6.13)                        3                   * B' ,
                             (kxk )              (kxr) (rxk )


where all matrices have rank r. B'Yt-1 are r stationary linear combinations
which guarantee that the equations of system (6.12) are balanced. The col-
umns of B contain the r linearly independent cointegration vectors and the
matrix * contains the so-called loading coefficients which measure the
contributions of the r long-run relations in the different equations of the
system. The adjustment processes to the equilibria can be derived from
these coefficients.
220    6 Cointegration


   If there is no cointegration, i.e. if r = 0, 3 is the zero matrix and (6.12) is
a VAR of order p-1 in ǻY. This system possesses k unit roots, i.e. k sto-
chastic trends. If r = k – 1, the system contains exactly one common sto-
chastic trend and all the variables of the system are pairwise cointegrated.
As a general rule, the system (6.12) contains k – r common stochastic
trends and r linearly independent cointegration vectors for a cointegration
rank r with 0 < r < k.

Example 6.7
Let the following three-dimensional VAR(3) without deterministic terms be given:

                 ª 1.3 0    0.8 º    ª 0.7 0   0.2 º
            Yt = «0.2 0.4 0 » Yt-1 + « 0.1 0.3 0 »» Yt-2
                 «               »   «
                 «¬ 0  0.3 1.2 »¼   «¬ 0   0.6 0.2 »¼

                      ª 0.5 0   0.3 º
                    + « 0.1 0.3 0 »» Yt-3 + Ut,
                      «
                      «¬ 0   0   0.2 ¼»

with
                    E[ui,t uj,t-k] = 0 for i  j and k  0,
                                     ­0 for k z 0
                    E[ui,t ui,t-k] = ® 2          , i = 1, 2, 3.
                                     ¯ Vi for k 0
Using (6.12) we find the error correction representation:

                  ª 0.9 0    0.3 º        ª 1.2 0    0.5 º
         ǻYt = – «« 0    0    0 »» Yt-1 + «« 0.2 0.6 0 »» ǻYt-1
                  «¬ 0  0.3 0.2 »¼        «¬ 0  0.6 0.4 »¼

                     ª 0.5 0    0.3 º
                   + « 0.1 0.3 0 »» ǻYt-2 + Ut.
                     «
                     «¬ 0   0   0.2 »¼

The matrix Ȇ contains the long-run equilibrium relations
                                ª 0.9 0    0.3 º
                           Ȇ = «« 0    0    0 »» .
                                «¬ 0  0.3 0.2 »¼
                      6.3 Cointegration in Vector Autoregressive Models          221

Since the rank of Ȇ is two, we have two cointegrating relations and one common
stochastic trend. Thus, any two variables are pairwise cointegrated. Normalising
the first cointegration vector on y1 and the second one on y3, we find the following
decomposition of the 3x3 matrix Ȇ in the 3x2 loading matrix * and the 2x3 coin-
tegration matrix B':
               ª 0.9 0 º                          ª 0.9 0    0.3 º
                            ª1 0          13 º   «
               «0
               «     0 »» «                   » = «0     0    0 »» .
                              0  32      1¼
               «¬ 0  0.2 »¼ ¬                     «¬ 0  0.3 0.2 »¼

Thus, the two long-run relations are
                                         1
(E6.11a)                        y1,t –     y3,t = z1,t,
                                         3
                                         3
(E6.11b)                        y3,t –     y2,t = z2,t.
                                         2
Substituting (E6.11b) into (E6.11a) transforms the first equilibrium relation into
                               1               1
                      y1,t –     y2,t = z1,t +   z2,t = z 1,t .
                               2               3
This leads to the following decomposition
               ª 0.9 0.3 º       1
                                               ª 0.9 0    0.3 º
               «0     0    » ª1  2       0º   «           0 »» .
               «             «
                           » 0 3          » = «0     0
                                          1¼
               «¬ 0   0.2 »¼ ¬    2
                                               «¬ 0  0.3 0.2 »¼


This example shows that the decomposition in (6.13) is not unique, as we
get
(6.14)                                        
                       ɉ = īB' = īH-1HB' = * B'
for any regular rxr matrix H.
   This is the reason why we can only estimate the cointegration rank r.
We are confronted with the usual identification problem for structural
econometric systems. The cointegration vectors describing the economic
long-run equilibria can only be estimated if meaningful economic restric-
tions are imposed.
222      6 Cointegration

6.3.2 The Johansen Approach

The approach proposed by SØREN JOHANSEN (1988) is a maximum likeli-
hood estimation of (6.12) that considers restriction (6.13). Assuming first
of all that the system (6.11) does not contain deterministic terms, we can
write
(6.15)     ǻYt + īǺ'Yt-1 = A1* 'Yt 1 + ... + A*p 1'Yt  p 1 + Ut .

We get the maximum likelihood estimation of A*j , j = 1, ..., p-1, by apply-
ing ordinary least squares on (6.15) if * and B are given. Eliminating the
influence of the short-run dynamics on ǻYt and Yt-1 by regressing ǻYt
(Yt-1) on the lagged differences, we get the residuals R0t (R1t) for which
(6.16)                        R0t = – īǺ'R1,t + Û t
holds. Here, R0 is a vector of stationary and R1 a vector of nonstationary
processes. The idea of the Johansen approach is to find those linear combi-
nations Ǻ'R1 which show the highest correlations with R0. The optimal
values of * and the variance-covariance matrix 6 of U can be derived for
known B by ordinary least squares estimation of (6.16). We get
(6.17)                      *ˆ (%) = – S01B(B'S11B)-1
and
(6.18)               6ˆ (B) = S00 – S01B(B'S11B)-1 B'S10
with
                                 T
(6.19)              Sij = T-1 ¦ R i,t R 'j,t   for i, j = 0, 1.
                                 t 1

It can be shown that the likelihood function concentrated with (6.17) and
(6.18) is proportional to | 6ˆ (B) | T / 2 . Therefore, the optimal values of B re-
sult from minimising the determinant
                           ŇS00 – S01B(B'S11B)-1 B'S10Ň
with respect to B. SØREN JOHANSEN (1995, pp. 91f.) showed that this is
equivalent to the solution of the following eigenvalue problem
                                         1
(6.20)                      ŇȜS11 – S10 S00 S01Ň = 0
with the eigenvalues Ȝi and the corresponding k-dimensional eigenvectors
Ȟi, i = 1, 2, ..., k, for which
                     6.3 Cointegration in Vector Autoregressive Models     223

                                            1
                           Ȝi S11 Ȟi = S10 S00 S01 Ȟi.
Using the arbitrary normalisation
                           ª Q1' º
                           « »
                           « # » S11[Ȟ1 ... Ȟk] = Ik ,
                           «Q 'k »
                           ¬ ¼
with Ik being the k-dimensional identity matrix, leads to a unique solution.
1  Ô1  ...  Ô k  0 holds for the ordered estimated eigenvalues. It can be
shown that for k I(1) variables with cointegration rank r exactly r eigen-
values are positive and the remaining k – r eigenvalues are asymptotically
zero. The cointegrating vectors are estimated by the corresponding eigen-
vectors and combined in the kxr matrix
                              B̂ = [ Q̂1 ... Q̂ r ].
The number of significantly positive eigenvalues determines the rank r of
the cointegration space. This leads to two different likelihood ratio test
procedures:
(i)   The so-called trace test has the null hypothesis
                H0: There are at most r positive eigenvalues
      against the alternative hypothesis that there are more than r positive
      eigenvalues. The test statistic is given by
                                           k
      (6.21)             Tr(r) = – T ¦ ln(1 Oˆ i ) .
                                         i r 1

(ii) The so-called Ȝmax test analyses whether there are r or r + 1 cointegrat-
     ing vectors. The null hypothesis is
                H0: There are exactly r positive eigenvalues
      against the alternative hypothesis that there are exactly r + 1 positive
      eigenvalues. The corresponding test statistic is given by
      (6.22)           Ȝmax(r, r+1) = – T ln(1 Oˆ r 1 ) .
The series of tests starts with r = 0 and is performed until the first time the
null hypothesis cannot be rejected. The cointegration rank is given by the
corresponding value of r. The null hypothesis is rejected for too large val-
ues of the test statistic. Since the test statistics do not follow standard as-
ymptotic distributions, the critical values are generated by simulations. The
224      6 Cointegration

critical values depend on the included deterministic terms in the VAR(p)
of relation (6.11) and the specification of the deterministics in the long-run
relations of the corresponding error-correction model. To present the pos-
sible situations, we substitute (6.13) into (6.12) and generalise the resulting
vector error correction model to
                                                         p 1
(6.23)     ǻYt = – ī B*' Yt*1 + c + d t + ¦ A*j 'Yt  j + Ut ,
                                                         j 1


with

                      ªE11 " E1k            c1       d 1 º
                      «                                     »
                B*' = « # % #                #         # » = [B' c d ]
                      «E " E                c r      d r »¼
                      ¬ r1    rk


and

                                       ª y1,t 1 º
                                       « # »
                                       «          »             ª Yt 1 º
                             Y  *
                                       « y k,t 1 »             « 1 ».
                               t 1
                                       «          »             «       »
                                       « 1 »                    «¬ t  1»¼
                                       «¬ t  1 »¼

If we use seasonally unadjusted data, centred seasonal dummies should
also be included as regressors in (6.23).
   The following five parameterisations of the deterministic terms in (6.23)
are possible:
(i)    The levels Y do not contain deterministic trends and the cointegrating
       relations do not contain constant terms:
                           ī B*' Yt*1 – c – d t = ī B' Yt-1 .
(ii) The levels Y do not contain deterministic trends but the cointegrating
     relations contain constant terms:
                    ī B*' Yt*1 – c – d t = ī (B' Yt-1 + c ).
(iii) The levels Y contain linear deterministic trends and the cointegrating
      relations contain constant terms:
                ī B*' Yt*1 – c – d t = ī (B' Yt-1 + c ) + īAȝ .
                     6.3 Cointegration in Vector Autoregressive Models    225

     In this case (and the following cases), the decomposition of the con-
     stants is arbitrary. S. JOHANSEN (1995) chooses the orthogonal com-
     plement matrix īA of ī with ī'īA = 0 and [ī # īA] invertible for the
     decomposition.
(iv) The levels Y and the cointegrating relations contain linear determinis-
     tic trends:
          ī B*' Yt*1 – c – d t = ī (B' Yt-1 + c + d (t-1)) + īAȝ .
(v) The levels Y contain quadratic deterministic trends and the cointe-
    grating relations contain linear deterministic trends:
         ī B*' Yt*1 – c – d t = ī (B' Yt-1 + c + d (t-1)) + īA(ȝ + į t).
By using simulations, critical values for these five situations were derived
by MICHAEL OSTERWALD LENUM (1992) and S. JOHANSEN (1995, Tables
15.1 to 15.5, pp 214ff.).
   Because of (6.14), the cointegration vectors are not identified. They are
simply stationary linear combinations which do not necessarily have mean-
ingful economic interpretations. They might, however, represent linear
combinations of economic equilibrium conditions. Thus, the question is
how to test linear restrictions in the r cointegrating vectors. S. JOHANSEN
(1988) developed a method to test restrictions on B which have the follow-
ing form
(6.24)                        H0: B = G ĭ,
where G is a given kxs matrix with full rank s, s < k, and ĭ is an sxr ma-
trix of free parameters. Estimating the vector error correction model under
the restriction (6.24) with the Johansen approach results in r positive ei-
genvalues O1* > O*2 > ... > O*r . A likelihood ratio test compares the unre-
stricted with the restricted model, both with cointegration rank r. The cor-
responding likelihood ratio statistic is given by
                                     r
                                          (1  O*i )
(6.25)                   LR = T ¦ ln                 .
                                    i 1   (1  Oˆ )
                                                 i

It is asymptotically Ȥ2 distributed with r·(k – s) degrees of freedom.
    Restrictions can also be formulated with respect to the adjustment pa-
rameters. The property of weak exogeneity is of special interest:
•   A variable is weakly exogenous with respect to the cointegration pa-
    rameters if and only if no cointegrating relation is included in the equa-
226      6 Cointegration

      tion of this variable, i.e. if the corresponding row of the matrix ī con-
      tains only zeros.

Example 6.8
From January 1986 to December 1998, the German Bundesbank published
monthly money market rates with times of maturity of one month, r1, three
months, r3, and six months, r6. Figure 6.3 shows the three months money market
rates. (The development of the two other interest rates is quite similar.) Theoreti-
cally, the relation between these interest rates can be described by the expectation
hypothesis of the term structure. Its linearised version is:
                                       1 m 1
(E6.12)                       rm,t =     ¦ E t [r1,t i ] + ĳm .
                                       mi 0
rm, m = 1, 3, 6, denote nominal interest rates with a horizon of m months, ĳm a risk
premium, and Et[·] the conditional expectation, given all information up to time t.
Because of
                    r1,t+i = r1,t + ǻr1,t+1 + ǻr1,t+2 + … + ǻr1,t+i ,
(E6.12) can be written as
                                       1 m 1 m  i
(E6.12')               rm,t = r1,t +     ¦
                                       mi1 m
                                                    E t ['r1,t  i ] + ĳm .

Performing unit root tests for the interest rates r1, r3 and r6, the null hypothesis of
nonstationarity cannot be rejected for the levels of these variables, but it can be re-
jected for their first differences. Thus, the interest rates should be treated as I(1)
variables. Because of (E6.12') it is obvious that
                               rm,t – r1,t ~ I(0), m = 3, 6
for the interest rates spreads.
   Therefore, any other difference between the interest rates is also stationary.
Consequently, the three interest rates should contain one stochastic trend and gen-
erate two cointegrating relations. Possible linearly independent cointegration vec-
tors are
                             E1' = [1 0 -1], E'2 = [0 1 -1] .

Other representations are also possible, like, for example,

           E 1' = E'2 – E1' = [-1 1 0], E '2 = – E 1' – E1' = – E'2 = [0 -1 1] .

We use monthly data from January 1987 until December 1998 for the empirical
analysis. First we estimate a VAR in the levels of the variables. Following the in-
formation criteria given from (4.10a) to (4.10d), we get different orders for the
VAR. The Final Prediction Error (as well as the Akaike criterion) suggests a
                      6.3 Cointegration in Vector Autoregressive Models           227

maximum lag of three months, the maximum lag suggested by the Hannan-Quinn
criterion is two months and that of the Schwarz criterion one month. Therefore, an
additionally necessary criterion is that the estimated residuals do not exhibit sig-
nificant autocorrelation. According to the Lagrange-Multiplier test, we only get
satisfactory results for a maximum lag of three months. Thus, in the following, we
assume that the order of the VAR is three.


        percent
          10

           9

           8

           7

           6

           5

           4

           3                                                                 year
               1987    1989      1991      1993      1995      1997

         Figure 6.3: German three months money market rate in Frankfurt

For the parameterisation of the corresponding second order vector error correction
models (VECM(2)), we assume that the variables do not contain a linear determi-
nistic trend. Thus, the constant terms are elements of the cointegrating relations.
The results of the trace and the Ȝmax tests are given in Table 6.3. As expected ,there
are two cointegrating relations; both are significant at the 1 percent level. Thus, it
is one stochastic trend that drives the whole system. Assuming pairwise cointegra-
tion, we get, for example, the following long-run relations:

                         r1,t = 0.241 + 1.017 r6,t + ẑ 1,t,
                                (0.118) (0.019)

                         r3,t = 0.150 + 1.017 r6,t + ẑ 2,t.
                                (0.065) (0.010)

(The standard errors are given in parentheses.) The estimated coefficients of r6,t
are not significantly different from one. It follows from this that – according to our
228     6 Cointegration

theoretical considerations, the interest rate spreads z16 = r1 – r6 and z36 = r3 – r6 are
stationary. This implies that z13 = r1 – r3 is also stationary. If the null hypothesis is
accepted then the mean adjusted spreads are given by
(E6.13a)                    SP31 = r3 – r1 – 0.0087 ,
(E6.13b)                    SP63 = r6 – r3 – 0.0042 .
The negative constant terms indicate that the term structure is on average (or in
equilibrium) ‘normal’, i.e. the long-run rates are higher than the short-run ones.


                Table 6.3: Results of the Johansen Cointegration Test


                                          Critical Value           Critical Value
Hypothesis Eigenvalue        Trace Test                  Ȝmax Test
                                           (1 Percent)              (1 Percent)

      r=0        0.217          63.51             41.07       35.14         26.81

      r1        0.170          28.38             24.60       26.89         20.20

      r2        0.010          1.49              12.97       1.49          12.97

In the following, we estimate a parsimoniously parameterised vector error correc-
tion model. We start with a VECM(2) where the deviations of the equilibrium
(which is represented by the mean-adjusted spreads) are predetermined. Using the
Zellner approach to estimate seemingly unrelated regressions, we successively
eliminate the least significant variables. This leads to the following system of
equations, where the estimated t statistics are given in parentheses:

(E6.14a)      ǻr1,t =      0.648 SP31t-1  0.082 ǻr1,t-1 + û1,t,
                         (10.84)         (1.92)

              R2 = 0.239, SE = 0.229, LM(2) = 0.38 (p = 0.69),
              LM(4) = 0.38 (p = 0.82), LM(8) = 1.33 (p = 0.24).

(E6.14b)      ǻr3,t =     0.256 SP63t-1 + 0.140 ǻr3,t-1 + û3,t,
                         (6.83)           (2.78)

              R2 = 0.141, SE = 0.228, LM(2) = 0.30 (p = 0.74),
              LM(4) = 0.17 (p = 0.95), LM(8) = 0.84 (p = 0.56).

(E6.14c)      ǻr6,t =     0.250 ǻr6,t-1 + û6,t,
                         (4.41)

              R2 = 0.113, SE = 0.235, LM(2) = 0.94 (p = 0.39),
              LM(4) = 0.59 (p = 0.67), LM(8) = 1.34 (p = 0.23).
                      6.3 Cointegration in Vector Autoregressive Models          229

The estimated residuals of this system do not exhibit significant autocorrelation.
As the equation for ǻr6 does not contain a cointegration vector, the six months rate
is the weakly exogenous variable which drives the whole system. The system is
stable. This can be illustrated in the following way: Assume the three months rate
is out of equilibrium; it is, for example, larger than the six months rate. This im-
plies a reduction of r3 from equation (E6.14b) in direction to the equilibrium and
an increase of r1 in equation (E6.14a) and thus also a return to the equilibrium. If
r3 is smaller than r6, a reverse process which also converges to the equilibrium will
be established.



6.3.3 Analysis of Vector Error Correction Models

In the following, we discuss several concepts which are important for the
interpretation of error correction models, like, for example, the concept of
weak exogeneity or the implementation of Granger causality tests. In any
case, a vector error correction model can be transformed into the corre-
sponding vector autoregressive model. This allows to calculate the impulse
response functions and to decompose the variances.
   Taking the cointegration restriction (6.13) into account and neglecting
the deterministic terms, the reduced form of an error correction model
(6.12) can be written as
                                         p 1
(6.26a) ǻYt = – ī B'Yt-1 + ¦ A*j 'Yt  j + Ut, Ut ~ N (0, Ȉ).
                                         j 1


The necessary and sufficient condition for Y not to be integrated of order 2
is that
                                                       p 1
                                             §             ·
                          C              * 'A ¨ I k  ¦ A*j ¸ BA
                                              ©       j 1   ¹
has full rank with īA and BA being the orthogonal complements of ī and B.
In this case, we can solve (6.26a) by deriving its moving average represen-
tation
                                     t
(6.26b)               Yt = C ¦ Ui + C*(L)Ut + y*0
                                 i       1

              -1 *c and y* denote the initial values. C*(L) is an infinite-
where C = BA C     A      0

order polynomial in the lag operator with coefficient matrices C*j that go
to zero with j going to infinity. C has the rank k – r if (6.26a) has cointe-
230      6 Cointegration

gration rank r. Therefore, equation (6.26b) indicates the stochastic trend
representation of Y with k – r common trends.
   In the following, we will derive the conditional error correction repre-
sentation by partitioning the vector Y in (6.26a) into two subvectors X and
Z, i.e. Y' = [X', Z']. This leads to
                                               *
                                       p 1 ª A º
            ª 'X t º   ª* x º                  xj      ª U x,t º
(6.27)      « 'Z » = – « * » B' Yt-1 + ¦ « * » ǻYt–j + « U » ,
            ¬ t¼       ¬ z¼            j 1 « Azj »     ¬ z,t ¼
                                            ¬     ¼
with vectors and matrices having the appropriate dimensions and the vari-
ance-covariance matrix
                            ª6     6 xz º
                    Ȉ = « xx            » , 6 zx = 6 'xz .
                            ¬ 6 zx 6 zz ¼
If Z is interpreted as a vector of conditioning variables, even the current
changes of Z, i.e. ǻZt, can be applied as explanatory variables for ǻX. Fol-
lowing SØREN JOHANSEN (1992) or H. PETER BOSWIJK (1995), the equiva-
lent transformation of (6.27) leads to
                                                 p 1
(6.28a)     ǻXt = A*0 ǻZt – īxʜz B' Yt-1 + ¦ A*x_z j 'Yt  j + Uxʜz,t ,
                                                  j 1


                                      p 1
(6.28b)     ǻZt = – īz B' Yt-1 + ¦ A*z j 'Yt  j + Uz,t .
                                      j 1


Here, it holds that
                       1
          A*0   6 xz 6 zz , īxʜz = īx – A*0 īz , A*x_z j    A*x j  A*0 A*z j ,

          j = 1, 2, …, p-1, Uxʜz,t = Ux,t – A*0 Uz,t .
In its systematic part, representation (6.28a) contains the contemporaneous
correlation between ǻX and ǻZ. If Ȉxz = 0, then X and Z are block recur-
sive and (6.28a, b) is identical with (6.27).
   If either (6.27) or (6.28a,b) is the true data generating process, the coin-
tegrating matrix B can be estimated efficiently by using the Johansen ap-
proach or performing a simultaneous estimation of (6.28a,b). However, the
question of whether the cointegration vectors estimated in this way have an
economic interpretation as long-run equilibrium relations remains open
because of (6.14).
   S. JOHANSEN (1992), H. P. BOSWIJK (1995) and NEIL R. ERICSSON
(1995) showed that it is possible to estimate B efficiently from (6.28a)
                         6.3 Cointegration in Vector Autoregressive Models    231

without using (6.28b), (i) if Z is weakly exogenous, i.e. īz = 0, (ii) if none
of the cointegrating relations of (6.28b) is also part of (6.28a), or (iii) if the
system is block recursive, i.e. if Ȉxz = 0 holds.
   If one of these conditions is fulfilled and if the sub-vector X contains
only one single variable, the conditional error correction equation (6.28a)
is a structural equation and the long-run relation has a structural interpreta-
tion. However, if the subvector X contains more than one single variable,
the conditional error correction equations (6.28a) – in general – no longer
have a structural interpretation because possible instantaneous relations be-
tween the endogenous variables are not covered. Thus, the cointegration
vectors may no longer represent structural relations.
   If, on the other hand, Z is weakly exogenous, (6.28a) can be used to de-
rive a structural error correction model by multiplying it with a regular
and correspondingly normalised matrix ī0, which, in addition, contains the
identifying restrictions:
                                                  p 1
                 * ǻZt – * B' Yt-1 +
(6.29) ī0 ǻXt = A 0         x _z       ¦ A *x_z j 'Yt  j + U x_z,t ,
                                                   j 1


with
    *
    A                                      * = ī0 A* , j = 1, 2, …, p-1,
             * 0 A*0 , * x_z = ī0 īxʜz , A
      0                                     x _z j  x _z j


    
    U x _z,t = ī0 U x _z,t .


The efficient estimation of B in (6.29) generates structural long-run rela-
tions. Only the estimation of structural error correction models leads to
long-run relations with a structural interpretation, as these relations are ex-
actly determined by the identifying restrictions. Every other situation leads
to cointegrating vectors for which we cannot normally expect a direct eco-
nomic interpretation. Usually, however, linear combinations of the cointe-
grating vectors can be interpreted as economic long-run equilibrium rela-
tions.
   If there is only one endogenous variable in (6.28a) and if all explanatory
variables are weakly exogenous, the parameters of the long-run relation
can be estimated efficiently by using OLS, and the usual test statistics can
be applied. If, on the other hand, the explanatory variables are not weakly
exogenous and if we have identified cointegrating relations, OLS can still
be applied to get super consistent estimates. However, the asymptotic effi-
ciency is lost and the usual test statistics are no longer applicable.
   The concept of Granger causality in the VAR framework has been dis-
cussed in Chapter 4. If vector error correction models are transformed into
232     6 Cointegration

VAR models, the considerations in Section 4.2 hold. On the other hand,
tests for Granger causality can also be performed using error correction
models. CLIVE W.J. GRANGER and JIN-LUNG LIN (1995) showed that the
advantage of this procedure is that it allows to differentiate between long-
run and short-run causal relations.

Example 6.9
Let the following error correction model with two cointegrated I(1) variables be
given,
        ǻy1, t = – Ȗ1 (y1,t-1 – ȕ y2, t-1) + a11 ǻy1, t-1 + a12 ǻy2, t-1 + u1, t ,
        ǻy2, t =     Ȗ2 (y1,t-1 – ȕ y2, t-1) + a21 ǻy1, t-1 + a22 ǻy2, t-1 + u2, t .
Here,
                                  zt = y1, t – ȕ y2, t
represents the long-run relation. The variable y2 is not Granger causal to y1 if its
lagged values are not included in the equation for y1. Thus, there is no causal rela-
tion from y2 to y1 if Ȗ1 = 0 and a12 = 0 holds. There exists only ‘short-run’ causality
if Ȗ1 = 0 but a12  0, and only ‘long-run’ causality if Ȗ1  0 but a12 = 0. Similar con-
siderations hold for the question of whether y1 is Granger causal to y2.
    Cointegration always implies the existence of a Granger causal relation. Thus,
if cointegration exists, at least one Ȗi, i = 1,2, is different from zero. Apparently,
the opposite relation does not hold.

When testing for Granger causality, problems can arise when it is open
whether the nonstationary variables are cointegrated or not. For this situa-
tion HIRO Y. TODA and TAKU YAMAMOTO (1995) (and in a similar way
also JUAN J. DOLADO and HELMUT LÜTKEPOHL (1996)) propose the fol-
lowing procedure: Starting point is a VAR in levels. Using the usual crite-
ria described in Chapter 4, its optimal lag length p is determined. Then, a
VAR of order p+d is estimated, where d is the (assumed) maximum degree
of integration of the variables. Using this VAR, Wald tests for simple
Granger causality are performed, and only the first p coefficients are em-
ployed to perform the test. The disadvantage of this procedure is that,
compared with the error correction representation, the estimates of the
VAR are less efficient due to the additionally included lagged variables. It
avoids, however, misspecifications that might invalidate the test results.
   At a first glance, everything said about forecasts with vector autoregres-
sive processes in Section 4.1 holds for the use of cointegrated systems for
forecasting, as every error correction model can be transformed into a
VAR in levels. Here, it also holds that
                     6.3 Cointegration in Vector Autoregressive Models     233


                    Ŷt (h) = Et[Yt+h] , h = 1, 2, … .
Moreover, it is also possible to calculate impulse response functions and
decompose variances in cointegrated systems. Because of the unit roots,
these statistics converge – if at all – considerably more slowly than in sta-
tionary models. The error correction representation which is possible for
systems of stationary or cointegrated variables interprets the possible pa-
rameters in a more informative way but does not change anything with re-
spect to the relations between the variables. Thus, their explicit considera-
tion does neither lead to different forecasts nor to different impulse-
response functions or different variance decompositions compared to those
of the VAR in levels.
   This is different if there are restrictions in the deterministic part of the
model. Then, the use of error correction models should lead to better fore-
casts. This was already presented by ROBERT F. ENGLE and BYUNG SAM
YOO (1987). However, this is not necessarily the case, as, for example,
PETER F. CHRISTOFFERSEN and FRANCIS X. DIEBOLD (1998) or MICHAEL
P. CLEMENTS and DAVID F. HENDRY (2001) showed. The reason for this is
that, in the long-run, even very small deviations in the constant term of the
cointegrating relation might produce large deviations of the predicted from
the realised values. A possible alternative to forecasts with error correction
models are, therefore, forecasts with a VAR in first differences. As the first
differences eliminate the long-run relations, the implied long-run forecasts
for the levels are more or less the status quo.
   Thus, the question arises what is to be predicted. The (unconditional)
long-run development of variables with stochastic trend (without strong
drift) cannot be predicted. This still holds when employing error correction
models. On the other hand, the knowledge of the long-run equilibrium re-
lations given by the error correction representation is necessary for condi-
tional long-run forecasts. Short- to medium-term forecasts can be per-
formed with models in first differences as well as with error correction
models. Using the development of German money market interest rates,
UWE HASSLER and JÜRGEN WOLTERS (2001) showed that (in this case)
forecasts with an error correction model, with a constant term only in the
cointegration relation, were superior to forecasts based on a VAR in first
differences. It is, however, impossible to say how far this result can be
generalised. Quite generally, models without restrictions on the constant
term seem to produce inferior forecasts for variables without trend than al-
ternative approaches restricting constant terms to zero.
234    6 Cointegration


6.4 Cointegration and Economic Theory

Macroeconomic theory is mainly based on long-run equilibrium relations,
like the quantity equation, purchasing power parity, or uncovered interest
rate parity. Economic theory rarely tells us anything about short-run dy-
namics. Although these relations hardly ever hold exactly in reality, some
of them are part of nearly all usual models. They play a role as, for exam-
ple, purchasing power parity and uncovered interest rate parity in monetary
international economics. It is usually argued that we only observe short-
run deviations from the equilibrium, which is compatible with the long-run
validity of these relations.
   The error correction models introduced in Chapter 4 allow for a repre-
sentation which differentiates between long-run equilibrium relations and
short-run adjustment processes. Nevertheless, if the variables are station-
ary, the short-run dynamic has to be correctly specified in order to estimate
the long-run relations consistently. Given that economic theory does
mostly not consider short-run dynamics, these adjustment processes are
usually modelled ad hoc, using statistical criteria.
   If variables are nonstationary but cointegrated, it is possible that the pa-
rameters of long-run relations are estimated (super) consistently without
considering the short-run dynamics. Taking the short-run dynamics into
account improves the efficiency of the estimates (and the power of the cor-
responding tests) but does not change the consistency properties. Thus, a
misspecification of the short-run dynamics (or the omission of stationary
variables) does not lead to inconsistent estimates of the equilibrium rela-
tions between the nonstationary variables. The same holds for simultaneity
problems and for errors in the (explanatory) variables. Contrary to esti-
mates with stationary variables, these problems do not lead to inconsistent
estimates.
   All these aspects facilitate the empirical examination of economic theo-
ries. In order to estimate long-run equilibrium relations consistently, we no
longer need the complete and fully specified model. It is sufficient to know
which (nonstationary) variables are elements of these relations. It is even
possible to estimate a model with OLS. Thus, the propagation of cointegra-
tion analysis also leads to a kind of renaissance of OLS estimations.
   However, if tests are to be performed for the estimated relations, the
price for these more ‘simple’ estimation procedures becomes easily obvi-
ous: Most test statistics do not follow their usual distributions, there are
even massive deviations in some cases. This also holds asymptotically.
Moreover, in most cases the exact distributions for finite samples are un-
                                                               References   235

known. Thus, we have to resort to simulated critical values, as presented in
many papers, or generate them by bootstrapping.
   This does not mitigate the fact that the development of cointegration
analysis has brought time series econometrics back closer to economic
theory. In the 1970s, the expansion of the Box-Jenkins analysis had gener-
ated a large gap between these two. The results mentioned in Chapter 2
demonstrated that univariate models without (economic) theoretical under-
pinning led to better forecasts of the future development of economic vari-
ables. This seemed to justify the gap. These procedures did, of course, not
allow for conditional forecasts, which are as important for economic policy
as pure predictions. For conditional forecasts we need (empirically sup-
ported) knowledge about the basic long-run equilibrium relations. Such in-
formation can be generated much better and more precisely by using coin-
tegration analysis rather than by employing traditional econometric
methods. Thus, time series analysis and empirical investigations performed
by its methods have again become much more relevant for economic pol-
icy advice than it seemed to be the case in the 1970s.


References

The idea of cointegration goes back to
CLIVE W.J. GRANGER, Some Properties of Time Series Data and their Use in
   Econometric Model Specification, Journal of Econometrics 16 (1981), pp.
   121 – 130, as well as
CLIVE W.J. GRANGER, Developments in the Study of Co-integrated Economic
   Variables, Oxford Bulletin of Economics and Statistics 48 (1986), pp. 213 –
   228.
The first basic methodological paper about cointegration was
ROBERT F. ENGLE and CLIVE W.J. GRANGER, Co-Integration and Error Correction:
   Representation, Estimation, and Testing, Econometrica 55 (1987), pp. 251 –
   276.
This was one of the essential papers for which C.W.J. GRANGER received the No-
bel Prize. This and the following papers,
JAMES H. STOCK, Asymptotic Properties of Least-Squares Estimators of Co-
   integrating Vectors, Econometrica 55 (1987), pp. 1035 – 1056, and
SØREN JOHANSEN, Statistical Analysis of Cointegration Vectors, Journal of Eco-
   nomic Dynamics and Control 12 (1988), pp. 231 – 254
led to the large dissemination of this approach.
236    6 Cointegration

   An introduction to estimation and testing of cointegration in single equations is
given by
UWE HASSLER, Leitfaden zum Testen und Schätzen von Kointegration in W.
  GAAB, U. HEILEMANN and J. WOLTERS (eds), Arbeiten mit ökonometrischen
  Modellen, Physica-Verlag, Heidelberg 2004, pp. 88 – 155.
Special textbooks covering the econometric handling of cointegrated processes are
ANINDYA BANERJEE, JUAN J. DOLADO, JOHN W. GALBRAITH and DAVID F.
   HENDRY, Co-Integration, Error Correction, and the Econometric Analysis of
   Non-Stationary Data, Oxford University Press, Oxford 1993; or
SØREN JOHANSEN, Likelihood-based Inference in Cointegrated Vector Autore-
   gressive Models, Oxford University Press, Oxford 1995.
The problem of spurious regressions was first tackled in a simulation study by
CLIVE W.J. GRANGER and PAUL NEWBOLD, Spurious Regressions in Economet-
   rics, Journal of Econometrics 2 (1974), pp. 111 – 120.
The corresponding asymptotic distribution theory is presented in
PETER C.B. PHILLIPS, Understanding Spurious Regressions in Econometrics,
   Journal of Econometrics 33 (1986), pp. 311 – 340.
Critical values of residual based tests for cointegration in single equation mod-
els are given by
ROBERT F. ENGLE and BYUNG SAM YOO, Forecasting and Testing in Cointegrated
   Systems, Journal of Econometrics 35 (1987), pp. 143 – 159;
JAMES G. MACKINNON, Critical Values for Co-Integration Tests, in: R.F. ENGLE
   and C.W.J: GRANGER (eds.), Long-Run Economic Relationships, Oxford Uni-
   versity Press, Oxford 1991, pp. 267 – 276.
A simple correction procedure which leads to asymptotically standard normal dis-
tributed t values in static regression equations is derived by
PENTI SAIKKONEN, Asymptotically Efficient Estimation of Cointegration Regres-
   sions, Econometric Theory 7 (1991), pp. 1 – 21, and
JAMES H. STOCK and MARK W. WATSON, A Simple Estimator of Cointegrating
   Vectors in Higher Order Integrated Systems, Econometrica 61 (1993), pp. 783
   – 820.
Problems which might arise by neglecting the dynamic structure when using the
Engle-Granger approach are shown by
ANINDYA BANERJEE, JUAN J. DOLADO, DAVID F. HENDRY and GREGOR W. SMITH,
   Exploring Equilibrium Relationships in Econometrics Through Static Models:
   Some Monte Carlo Evidence, Oxford Bulletin of Economics and Statistics 48
   (1986), pp. 253 – 277,
                                                              References        237

Critical values for tests of cointegration in error correction models are given
in
ANINDYA BANERJEE, JUAN J. DOLADO and RICARDO MESTRE, Error-Correction
   Mechanism Tests for Cointegration in a Single-Equation Framework, Journal
   of Time Series Analysis 19 (1998), pp. 267 – 283.
The critical values which are appropriate when the variables also include linear
time trends is discussed in
UWE HASSLER, Cointegration Testing in Single Error-Correction Equations in the
  Presence of Linear Time Trends, Oxford Bulletin of Economics and Statistics
  62 (2000), pp. 621 – 632.
Further test procedures for testing in single error correction equations are pre-
sented in
UWE HASSLER and JÜRGEN WOLTERS, Autoregressive Distributed Lag Models and
  Cointegration, Allgemeines Statistisches Archiv 90 (2006), pp. 59 – 74; re-
  printed in: O. HÜBLER and J. FROHN (eds), Modern Econometric Analysis,
  Springer, Berlin 2006, pp. 57 – 72.
Critical values for trace and Ȝmax tests proposed by S. JOHANSEN are given by
MICHAEL OSTERWALD-LENUM, A Note on Quintiles of the Asymptotic Distribu-
   tion of the Maximum Likelihood Cointegration Rank Test Statistics, Oxford
   Bulletin of Economics and Statistics, 54 (1992), pp. 461 – 471.
Tests for hypotheses about the cointegration matrix have been developed by
SØREN JOHANSEN and KATARINA JUSELIUS, Maximum Likelihood Estimation and
   Inference on Cointegration – with Applications to the Demand for Money,
   Oxford Bulletin of Economics and Statistics, 52 (1990), pp. 169 – 210.
Compared to the Johansen approach, an alternative handling of the determinis-
tic components in error correction models is proposed by
HELMUT LÜTKEPOHL and PENTI SAIKKONEN, Testing for the Cointegration Rank
   of a VAR Process with a Time Trend, Journal of Econometrics 95 (2000), pp.
   177 – 198, and
PENTI SAIKKONEN and HELMUT LÜTKEPOHL, Trend Adjustment Prior to Testing
   for the Cointegration Rank of a Vector Autoregressive Process, Journal of
   Time Series Analysis 21 (2000), pp. 435 – 456.
This approach can be extended to modelling deterministic structural breaks in
the data. See for this
PENTI SAIKKONEN and HELMUT LÜTKEPOHL, Testing for the Cointegration Rank
   of a VAR Process with Structural Shifts, Journal of Business and Economic
   Statistics 18 (2000), pp. 451 – 464.
238    6 Cointegration

Tests for cointegration in the Engle-Granger framework in the presence of struc-
tural breaks are presented in
UWE HASSLER, Dickey-Fuller Cointegration Test in the Presence of Regime Shifts
  at Known Time, Allgemeines Statistisches Archiv 86 (2002), pp. 263 – 276.
For the analysis of structural vector error correction models see
SØREN JOHANSEN, Cointegration in Partial Systems and the Efficiency of Single-
   Equation Analysis, Journal of Econometrics 52 (1992), pp. 389 – 402,
H. PETER BOSWIJK, Efficient Inference on Cointegration Parameters in Structural
    Error Correction Models, Journal of Econometrics 69 (1995), pp. 133 – 158,
    as well as
NEIL R. ERICSSON, Conditional and Structural Error Correction Models, Journal of
   Econometrics 65 (1995), pp. 159 – 171.
For the concept of weak exogeneity see, for example,
NEIL R. ERICSSON, Cointegration, Exogeneity, and Policy Analysis: An Overview,
   Journal of Policy Modeling 14 (1992), pp. 251 – 280, as well as
NEIL R. ERICSSON, DAVID F. HENDRY and GRAHAM E. MIZON, Exogeneity, Coin-
   tegration, and Economic Policy Analysis, Journal of Business and Economic
   Statistics 16 (1998), pp. 370 – 387.
These papers also discuss the relation between Granger causality and exogeneity.
   The problem of how vector error correction models with exogenous I(1) vari-
ables and restrictions with respect to the short-run dynamics can efficiently be es-
timated is discussed in
M. HASHEM PESARAN, YONGCHEOL SHIN and RICHARD J. SMITH, Structural
   Analysis of Vector Error Correction Models with Exogenous I(1)-Variables,
   Journal of Econometrics 97 (2000), pp. 293 – 343.
They also give the corresponding critical values of the tests for cointegration.
    The problem of Granger causality in the situation of cointegrated variables
is, for example, discussed in
CLIVE W.J. GRANGER and JIN-LUNG LIN, Causality in the Long Run, Econometric
   Theory 11 (1995), pp. 530 – 536.
Testing strategies for situations in which the question remains open whether a
cointegrating relation exists or not are presented in
HIRO Y. TODA and TAKU YAMAMOTO, Statistical Inference in Vector Autoregres-
   sions with Possibly Integrated Processes, Journal of Econometrics 66 (1995),
   pp. 259 – 285, as well as in
JUAN J. DOLADO and HELMUT LÜTKEPOHL, Making Wald Tests Work for Cointe-
   grated VAR Systems, Econometric Reviews 15 (1996), pp. 369 – 386.
                                                                References     239

For this, see also
HIROSHI YAMADA and HIRO Y. TODA, Inference in Possibly Integrated Vector Auto-
   regressive Models: Some Finite Sample Evidence, Journal of Econometrics 86
   (1998), pp. 55 – 95.
The possibilities and properties of predictions using error correction models are
discussed in
PETER F. CHRISTOFFERSEN and FRANCIS X. DIEBOLD, Cointegration and Long-
   Horizon Forecasting, Journal of Business and Economic Statistics 16 (1998),
   pp. 450 – 458,
MICHAEL P. CLEMENTS and DAVID F. HENDRY, Forecasting with Difference-
   Stationary and Trend-Stationary Models, Econometrics Journal 4 (2001), pp.
   S1 – S19,
UWE HASSLER and JÜRGEN WOLTERS, Forecasting Money Market Rates in the
  Unified Germany, in: R. FRIEDMANN, L. KNÜPPEL and H. LÜTKEPOHL (eds.),
  Econometric Studies: A Festschrift in Honour of Joachim Frohn, Lit Verlag,
  Münster et al. 2001, pp. 185 – 201, as well as in
DAVID F. HENDRY and MICHAEL P. CLEMENTS, Economic Forecasting: Some Les-
   sons from Recent Research, Economic Modelling 20 (2003), pp. 301 – 329.
Research on the German money memand is done by
JÜRGEN WOLTERS, TIMO TERÄSVIRTA and HELMUT LÜTKEPOHL, Modelling the
   Demand for M3 in the Unified Germany, Review of Economics and Statistics
   80 (1998), pp. 399 – 409,
HELMUT LÜTKEPOHL, TIMO TERÄSVIRTA and JÜRGEN WOLTERS, Investigating
   Stability and Linearity of a German M1 Money Demand Function, Journal of
   Applied Econometrics 14 (1999), pp. 511 – 525.
HELMUT LÜTKEPOHL and JÜRGEN WOLTERS, The Transmission of German Mone-
   tary Policy in the Pre-Euro Period, Macroeconomic Dynamics 7 (2003), pp.
   711 – 733.
The term structure of interest rates in the German money market is investigated by
JÜRGEN WOLTERS and UWE HASSLER, Die Zinsstruktur am deutschen Interban-
   ken-Geldmarkt: Eine empirische Analyse für das vereinigte Deutschland, ifo
   Studien 44 (1998), pp. 141 – 160.
7 Autoregressive Conditional Heteroskedasticity




All models discussed so far use the conditional expectation to describe the
mean development of one or more time series. The optimal forecast, in the
sense that the variance of the forecast errors will be minimised, is given by
the conditional mean of the underlying model. Here, it is assumed that the
residuals are not only uncorrelated but also homoskedastic, i.e. that the un-
explained fluctuations have no dependencies in the second moments.
However, BENOIT MANDELBROT (1963) already showed that financial
market data have more outliers than would be compatible with the (usually
assumed) normal distribution and that there are ‘volatility clusters’: small
(large) shocks are again followed by small (large) shocks. This may lead to
‘leptokurtic distributions‘, which – as compared to a normal distribution –
exhibit more mass at the centre and at the tails of the distribution. This re-
sults in ‘excess kurtosis’, i.e. the values of the kurtosis are above three.

Example 7.1
As an example, we take the German Stock Market Index (DAX). We use daily ob-
servations from 2 January 1996 to 19 May 1999, i.e. we have 842 observations.
Figure 7.1a shows the time series, Figure 7.1b the continuous returns, i.e. the first
differences of the logarithms of this series. ‘Clusters’ appear. While the develop-
ment of the series is relatively quiet at the beginning, i.e. the amplitude is small;
more pronounced fluctuations can be observed in the second half of the observa-
tion period. This leads to the excess kurtosis which can be seen in Figure 7.1c:
The kurtosis of the returns is 6.633, i.e. far above the value of 3.0, which would be
expected if the variable were normally distributed. Thus, we get a value of
456.051 (p = 0.000) for the Jarque-Bera statistic. The null hypothesis of normal
distribution has to be rejected at any conventional significance level.
   The correlogram of the returns indicates second order autocorrelation. If we es-
timate an AR(2) model (with the modulus of t values in parentheses) for this series
we get:

              ¨ln(DAXt) = 0.001 – 0.090 ¨ln(DAXt-2) + Ĥ t ,
                         ( 2.07) ( 2.62)

              R 2 = 0.007, SE = 0.015, Q(9) = 5.947 (p = 0.745).
242   7 Autoregressive Conditional Heteroskedasticity


         7000
                                                      22 July 1998
         6000

         5000                       31 July 1997

         4000
                                                         8 October 1998
         3000                         28 October 1997

         2000
       2 January 1996                                                  19 May 1999

                         a) German Stock Market Index: Data
         .08

         .04

         .00

         -.04

         -.08

        -.12
        2 January 1996                                                19 May 1999

                b) German Stock Market Index: Continuous returns
          150


          100



           50


            0
                 -0.075    -0.050   -0.025    0.000     0.025        0.050

      c) German Stock Market Index: Histogram of the continuous returns


  Figure 7.1: German Stock Market Index, 2 January 1996 until 19 May 1999,
              842 observations
                                  7 Autoregressive Conditional Heteroskedasticity                     243


             Uˆ (W)

           0.8


           0.4


           0.0

                                                                                              W
                 0        2       4       6       8       10    12    14    16    18    20


                          d) Estimated autocorrelations of the residuals
                 Uˆ (W)

            0.8


            0.4


            0.0

                                                                                                  W
                     0        2       4       6       8    10    12    14    16    18    20


                     e) Estimated autocorrelations of the squared residuals


     Figure 7.1: German Stock Market Index, 2 January 1996 until 19 May
                 1999, 842 observations (continued)

Figure 7.1d indicates that the residuals of this model no longer exhibit any signifi-
cant autocorrelation. On the other hand, Figure 7.1e shows highly significant
autocorrelation between the squares of these residuals. This indicates dependency
in the second moments of the residuals, which contradicts the assumption of a
constant, time-invariant variance. Thus, İ is not pure white noise.

In order to capture such problems by extending the models, we first pre-
sent the conditional and unconditional means and variances of an AR(1)
process. As shown in Section 2.1.1, for the process (2.1)
244     7 Autoregressive Conditional Heteroskedasticity

                           xt = į + Į xt-1 + ut, with |Į| < 1,
holds
                                     G                            V2
                        E[xt] =               and V[xt] =              .
                                    1 D                        1  D2
Contrary to this, the conditional mean
                        E[xt | xt-1, … ] = Et-1[xt] = į + Į xt-1
is not constant but depends on the observation of the previous period.
However, for the conditional variance it holds that
                   V[xt | xt-1, … ] = E[(xt – Et-1[xt])2 | xt-1, …]
                                          = E[ u 2t | xt-1, …] = ı2 .
It is constant, just like the unconditional variance. Thus, phenomena like
volatility clusters cannot be described by this model. We need different
distributional assumptions to allow for ‘fat tails’, i.e. for values of the kur-
tosis above three.

              .5
                                                      Modified t-distribution

              .4


              .3


              .2
                                                                 Standard
                                                              normal distribution
              .1


              .0
                   -5     -4   -3    -2      -1   0      1     2     3      4       5



 Figure 7.2: Density functions of a transformed t distribution with 5 degrees of
             freedom, variance one and a standard normal distribution
                                                   7.1 ARCH Models        245

One possibility is to leave the normal distribution and to use, for example,
a t distribution. Figure 7.2 shows a t distribution with five degrees of free-
dom which is transformed so that it has a variance of one, i.e. the same
variance as the standard normal distribution. Its kurtosis is nine. It can
clearly be seen that the sides are steeper compared to the normal distribu-
tion also presented in Figure 7.2. (In ‘stable distributions’, the density
functions are shaped similarly to the t distribution.)
   On the other hand, in his paper on inflation in Great Britain, ROBERT F.
ENGLE (1982) retained the normal distribution assumption but allowed the
conditional variance of the residuals to vary linearly with the lagged
squared residuals. This leads to models with autoregressive conditional
heteroskedastic residuals, the ARCH models. The residuals of these mod-
els are also leptokurtic. The idea behind this approach is that the same
models which are used to represent the conditional mean of a variable, i.e.
AR, MA or ARMA models, can be applied to the squared residuals of
equations. Section 7.1 will present these ARCH models. Generalisations
will be discussed in Section 7.2, and problems of estimation and testing in
Section 7.3. We will conclude this chapter with examples of the applica-
tion of ARCH/GARCH models in financial market analysis (Section 7.4).


7.1 ARCH Models

In the following, we will first discuss dependencies of the squared residu-
als by using autoregressive models. The main properties of such models
will be presented. In addition, we will show that it largely depends on the
frequency of data collection whether autoregressive conditional heteroske-
dasticity occurs.


7.1.1 Definition and Representation

Let us assume that the variable y can be explained in a linear model with
the predetermined variables X and the parameter vector ȕ,
(7.1)                        yt = X 't ȕ + İt .
Along with truly exogenous deterministic and stochastic variables, the vec-
tor X might also contain lagged endogenous variables. The error term İ has
zero mean, E[İt] = 0, and a constant unconditional variance, E[H 2t ] = ı2. It
also holds that İ is not autocorrelated whereas İ2 is allowed to be autocor-
246     7 Autoregressive Conditional Heteroskedasticity

related. It is assumed that this autocorrelation can be captured by an AR(q)
process,
(7.2)      H 2t = Į0 + Į1 H 2t1 + Į2 H 2t 2 + … + Įq H 2tq + Ȟt ,

were Ȟt is white noise. The information set It contains all information
which is available at time t (as in Chapter 3), thus It-1 = {yt-1, yt-2, …, Xt-1,
Xt-2, …}. If the parameter vector ȕ is known, this information set also con-
tains all residuals up to time t – 1 because of İt-i = yt-i – X 't i ȕ, i = 1, 2, … .

  The conditional variance of İt , h 2t can be written as

(7.3)                  h 2t := V[İt | It-1] = E[ H 2t | It-1] .
Because of (7.2) we get the ARCH(q) model
                                                   q
(7.4)                         h 2t = Į0 + ¦ D i H 2t i
                                                 i 1

with Į0 > 0 and Įi  0 for i = 1, …, q – 1, as well as Įq > 0. These condi-
tions ensure that the conditional variance is always positive.
   If a large shock occurs in equation (7.1), i.e. if there is a large positive
or negative value of İ, this leads, according to relation (7.4), to a series of
large values for the conditional variance, as the latter is a monotonically
increasing function of lagged squared realised values of İ. If the occurring
shock is only small, further small shocks are assumed to occur in the near
future. The higher the value of q, the more extended are the volatility clus-
ters.
   ARCH effects can, for example, result from random coefficients, as
shown by ANIL K. BERA and MATTHEW L. HIGGINS (1963). Let İ be a
time dependent autoregressive process of order q (in contrast to the as-
sumption above),
                                      q
                             İt =    ¦I H
                                      i 1
                                            it   t i   + ut ,

with
        ut a (0, Į0), Iit = Ii + Șit, Și a (0, Įi), i = 1, 2, …, q,
        Cov[Șit, Șjt] = 0 for i  j, Cov[Șit, ut+j] = 0 for all i and j.
Then the conditional variance of the residuals leads to
           E[ H 2t | It-1] = Į0 + Į1 H 2t1 + Į2 H 2t 2 + … + Įq H 2t q ,
                                                             7.1 ARCH Models   247

i.e. the residuals do not follow an AR(q) but an ARCH(q) process.

Example 7.2
Assume that the residuals follow the AR(1) process with random coefficient
                                    İt = It İt-1 + ut ,
with
                           It a (I, Į1) and ut a (0, Į0),
where It and ut are independently generated. Then the conditional mean of the re-
siduals results in
                                    E[İt _ It-1] = I İt-1,
and their conditional variance in
                             E[H 2t _ I t 1 ] = Į0 + Į1 H 2t1 ,

i.e. the residuals do not only follow an AR(1) but also an ARCH(1) process. This
allows, for example, to model time dependent risk premia.

Large values of q demand models with many parameters, which contra-
dicts the parsimony principle of univariate time series analysis. Therefore,
R.F. ENGLE (1982) proposed the following model with distributed lags
where only two parameters have to be estimated:
                                                   q
(7.5)                      h 2t = Į0 + Į1 ¦ w i H 2t i
                                                  i 1

with
                               2(q  1  i)
                      wi =                  , i = 1, 2, …, q .
                                q (q  1)
These weights decrease linearly and sum up to one.
   For estimating and testing, assumptions on the conditional distribution
of İ have to be made. Following R.F. ENGLE (1982), it is often assumed
that the residuals follow a conditional normal distribution,
(7.6)                         İt | It-1 ~ N(0, h 2t ) .
The assumption of a conditional univariate normal distribution implies that
neither the joint nor the marginal distributions are normal. It is, however,
possible to approximate leptokurtic distributions.
248     7 Autoregressive Conditional Heteroskedasticity

7.1.2 Unconditional Moments

In the following we use a special version of the law of iterated expecta-
tions
(7.7)                         E[Z] = E[E[Z | I]],
where Z is a random variable and I the relevant information as a set of
conditioning random variables.
   Due to (7.6), it holds that E[İt | It-1] = 0. Thus, because of (7.7) E[İt] = 0
also holds. Due to (7.7) and (7.3), we get
                     ı2 = E[ H 2t ] = E[E[ H 2t | It-1]] = E[ h 2t ]
for the unconditional variance of the residuals.
   Because of (7.4) we get
                                          q                             q
             ı2 = E[ h 2t ] = Į0 + ¦ Di E[H 2t i ] = Į0 + ı2 ¦ Di .
                                          i 1                           i 1

This leads to
                                                     q
                                   D0
(7.8)                 ı2 =          q
                                              , if   ¦D < 1 .
                                                            i
                               1  ¦ Di              i 1

                                    i 1

If this condition is violated, this process does not possess a finite variance.
   For the kurtosis of an ARCH(1) process, R.F. ENGLE (1982) derived the
following expression
                                   E[H 4t ]                1  D12
(7.9)                 K[İt] =                    = 3                .
                                  (E[H 2t ]) 2             1  3D12

Thus, the kurtosis only exists if 3 D12 < 1. It is larger than three, i.e. than its
value in case of a normal distribution. We get this value if Į1 tends towards
zero. Compared to a normal distribution with the same variance, the
ARCH(1) process has more mass in the centre of the distribution and fatter
tails. As shown above, these are the properties often exhibited by financial
market data if they are measured in short time distances.
   For the autocovariances, we get
                      E[İt İt-Ĳ] = E[E[İt İt-Ĳ | It-1]]
                                  = E[İt-Ĳ E[İt | It-1]] = 0
for Ĳ  1.
                                                                  7.1 ARCH Models                 249

   As the ARCH(q) process has zero mean and is not autocorrelated, it is
weakly stationary if its variance is finite, i.e. if the above shown condition
that the sum of the Įi, i = 1, …, q, is smaller than one is fulfilled.
   The fact that İ is not autocorrelated does, of course, not imply that it is
distributed independently. After all, the autocorrelation of İ2 is modelled in
relation (7.2). This prevents higher moments from disappearing.

Example 7.3
For the time series of the German Stock Market Index used in Example 7.1 we can
estimate the following model:

    ¨ln(DAXt) = 0.0013 – 0.072 ¨ln(DAXt-2) + Ĥ t ,
               ( 3.37)  (  1.97)


    ĥ 2t   =     2.52 105 + 0.163 Hˆ 2t1 + 0.149 Hˆ 2t 2 + 0.107 Hˆ 2t 3 + 0.063 Hˆ 2t 4
                ( 3.96)        (3.79)          (3.29)           (2.11)           (1.72)


                  + 0.120 Hˆ 2t 5 + 0.139 Hˆ 2t 6 + 0.139 Hˆ 2t 7 + 0.085 Hˆ 2t8 ,
                    (2.54)           (2.85)           (2.62)           (2.20)

    R 2 = -0.004, SE = 0.015, Q(9) = 5.794 (p = 0.760), JB = 65.652.
Looking at the t values given in parentheses, we can conclude that, with one-sided
tests, all estimated parameters prove to be positive significant at least at the 5 per-
cent level. Thus, they satisfy the conditions for a non-negative variance. The sum
of the ARCH coefficients is 0.965 (< 1). Therefore, the unconditional variance ex-
ists and has a value of 2.33 · 10-5. The value of the Jarque-Bera statistic indicates
that the null hypothesis of a normal distribution can still be rejected at any conven-
tional significance level, but now it is much smaller than before. The reason for
this is that the kurtosis is now only 3.806 compared with the kurtosis 6.633 of the
data themselves. Thus, the kurtosis of the estimated residuals, standardised with
 ĥ t , comes quite close to the one of a normal distribution. In addition, the squared
standardised residuals do no longer exhibit significant autocorrelation. (The estima-
tion of such models is discussed in Section 7.3.)


7.1.3 Temporal Aggregation

In the following, we will derive the behaviour of the conditional variance
of an ARCH(q) process if the series can only be observed over time inter-
vals that are larger than the frequency of the data generating process. For
example, only monthly, quarterly or annual data might be available instead
of daily observations. We consider the case of temporal aggregation where
250      7 Autoregressive Conditional Heteroskedasticity

only every m-th observation is taken into account. This is, for example, the
case if, instead of (available) daily data, only end-of-month or end-of-
quarter data are used for interest rate or exchange rate data.
  We consider an ARCH(1) process with Į1 = Į. By repeated substitution
with q = 1 in relation (7.2), we get:
         H 2t   = Į0 + Į H 2t1 + Ȟt ,

                = Į0 + Į (Į0 + Į H 2t 2 + Ȟt-1) + Ȟt ,

                = Į0 (1 + Į) + Į2 H 2t 2 + Ȟt + Į Ȟt-1 ,

                = Į0 (1 + Į) + Į2 (Į0 + Į H 2t3 + Ȟt-2) + Ȟt + Į Ȟt-1 ,

                = Į0 (1 + Į + Į2) + Į3 H 2t3 + Ȟt + Į Ȟt-1 + Į2 Ȟt-2,
                = …,
and, finally, for arbitrary m,
                                     m 1                     m 1
(7.10)                H 2t = Į0 ¦ D j + Įm H 2t m + ¦ D j Q t  j .
                                      j 0                     j 0


The conditional variance in the original relation leads to

                             h 2t   = E[ H 2t | It-1] = Į0 + Į H 2t1
for t = 1, 2, …, T.
   If only every second value is observed, i.e. the information set changes
to It-(2) = { yt-2, yt-4, …, Xt-2, Xt-4, …} for t = 2, 4, …, T, and due to (7.10)
we get
                   h 2t(2)     = E[ H 2t | It-(2)] = Į0 (1 + Į) + Į2 H 2t 2

for the conditional variance and m = 2.
   In the general situation when only every m-th value is observed, we get,
according to relation (7.10):
                                                        1  Dm
(7.11)           h 2t(m)     = E[ H 2t | It-(m)] = Į0          + Įm H 2t m
                                                         1 D
for t = m, 2m, 3m, …, T.
   The conditional variance of the temporally aggregated data again fol-
lows an ARCH(1) process. Due to 0 < Į < 1, however, the ARCH effect
                                                            7.1 ARCH Models   251

becomes the weaker the longer the observational intervals. If m increases
above all limits we get
                                                  D0
                              lim h 2t(m) =           .
                              m of               1 D
Here, the temporally aggregated process has a constant conditional vari-
ance. Because of (7.8) it coincides with the unconditional variance of the
ARCH(1) process. This effect was detected by FRANCIS X. DIEBOLD
(1988, pp. 12ff.) when modelling temporally aggregated exchange rates. If,
in addition, the distributional assumption (7.6) holds, not only the condi-
tional distribution is normal but also the unconditional one, i.e. the fat tails
disappear.

Example 7.4
Let the following ARCH(1) model be given:
                      h 2t = 0.1 + 0.5 H 2t1 , t = 1, 2, …, T.

This process has the unconditional variance of
                                       0.1
                              ı2 =           = 0.2
                                     1  0.5

and the kurtosis of
                                       1  0.25
                            K = 3               = 9.
                                       1  0.75

If we observe only every second value, i.e. for t = 2, 4, …, the conditional vari-
ance changes to
                                                      2
                            h 2t(2) = 0.15 + 0.25 H t  2

because of (7.11).
    The unconditional variance of the temporally aggregated process is still 0.2,
while the kurtosis is reduced to 3.4615. Thus, ARCH effects can hardly be no-
ticed. If we aggregate once again and consider only every fourth observation, i.e.
if t = 4, 8, …, we get the following process:
                                                          2
                         h 2t(4) = 0.1875 + 0.0625 H t  4 .

The variance is still 0.2, but the kurtosis has become 3.0237. Thus, the ARCH ef-
fect has disappeared almost completely.
252    7 Autoregressive Conditional Heteroskedasticity

Example 7.5
We consider the exchange rate between the Swiss Franc and the U.S. Dollar, as
used in Example 1.3 of Chapter 1. For the period from January 1980 to December
2003, we get the kurtosis of 3.095 for the end-of-month data shown in Figure 1.8.
The value of the Jarque-Bera statistic is 0.870 (p = 0.647). Thus, the null hy-
pothesis of a normal distribution cannot be rejected at any conventional signifi-
cance level. If we use daily data for the same period, we have 5913 observations
and the value of the Jarque-Bera statistic is 1408.207. This extremely high value is
almost exclusively determined by the kurtosis of 5.351, as the value of the skew-
ness of -0.216 is hardly different from the value of -0.126 which is based on
monthly data.


7.2 Generalised ARCH Models

Modelling the dependencies between the squared residuals by ARMA-
models, we get parsimonious parameterisations. These approaches can be
extended to represent asymmetric effects, i.e. to allow for different impacts
of positive and negative shocks.


7.2.1 GARCH Models

If the maximum lag in ARCH(q) models becomes too large, problems with
the non-negativity constraints might occur if the estimates are not re-
stricted appropriately. To get more parsimoniously parameterised models
in which such problems occur less frequently but which are nevertheless
capable of dealing with long-lasting volatility clusters, the approach of re-
lation (7.5) was applied. Its disadvantage is, however, that possible dynam-
ics of ARCH processes are captured only restrictively, i.e. with given,
linearly declining weights.
   Independently of each other, TIM BOLLERSLEV (1986) and STEPHEN J.
TAYLOR (1986) developed a more flexible generalisation of the ARCH ap-
proach, the Generalised Autoregressive Conditional Heteroskedasticity
(GARCH) model which is more flexible than the approach (7.5). They ad-
ditionally included p lagged values of the conditional variance into relation
(7.4). This leads to a GARCH(p,q) process:
(7.12) h 2t = Į0 + Į1 H 2t1 + … + Įq H 2t q + ȕ1 h 2t1 + … + ȕp h 2t p .

Sufficient conditions for the non-negativity of the conditional variance of
this process are Į0 > 0, Įi  0, i = 1, …, q – 1, Įq > 0, ȕi  0, i = 1, …, p – 1,
ȕp > 0.
                                              7.2 Generalised ARCH Models      253

  Using the lag polynomials
          Į(L) := Į1 L    + … + Įq Lq, ȕ(L) := ȕ1 L + … + ȕp Lp ,
(7.12) can be written as
(7.13)                   h 2t = Į0 + Į(L) H 2t + ȕ(L) h 2t ,
or, if all roots of 1 – ȕ(L) are outside the unit circle, as
                                          D0      D(L) 2
(7.13')                   h 2t =               +        Ht .
                                       1 E(1)   1E(L)
If the rational function of the lag operator is expanded into a series as, for
example, in Section 2.1.2, we get the ARCH( f ) process
                                                 f
(7.14)                       h 2t = D*0 + ¦ Gi H 2t i ,
                                                i 1


with D*0 > 0 and įi  0, i = 1, 2, …, . Thus, GARCH(p,q) models allow the
parsimonious parameterisation for conditional variances in the same way
as ARMA(p,q) models for conditional means.
   The non-negativity conditions of the įi are sufficient for the conditional
variances to be strictly positive. Thus, they are less restrictive than the
conditions placed on Įi and ȕi for equation (7.12).
   In the following way we can show that H 2t really follows an ARMA
process: Due to (7.2) and (7.3), Ȟt = H 2t – h 2t and

                      E[Ȟt | It-1] = E[ H 2t – h 2t | It-1] = 0 .
Thus, Ȟ has zero mean and is uncorrelated. It satisfies the conditions of
white noise. If we insert (7.12) into H 2t = h 2t + Ȟt we get

             H 2t = Į0 + Į1 H 2t1       + … + Įq H 2t q
                     + ȕ1 ( H 2t1 – Ȟt-1) + … + ȕp ( H 2t q – Ȟt-p) + Ȟt .

It follows that
                                   n                           p
(7.15)          H 2t = Į0 + ¦ (D i  Ei ) H 2t i + Ȟt – ¦ Ei Q t i ,
                                i 1                         i 1

with n = max(p, q). Relation (7.15) shows that the structure of dependence
of the squared residuals of a GARCH(p,q) process is given for İ2 by an
ARMA(n,p) process.
254      7 Autoregressive Conditional Heteroskedasticity

  The considerations to calculate the unconditional variance and the auto-
correlation function of İ for a GARCH process are the same as for the
ARCH process in Section 7.1.2. Thus, the residuals are uncorrelated. Ac-
cording to (7.13), we get
                                                        D0
(7.16)                V[İt] = E[ H 2t ] =
                                                  1  D(1)  E(1)
for the variance.
   Thus, it is necessary for the existence of the variance of a GARCH(p,q)
process that
                                        q               p
                    Į(1) + ȕ(1) =       ¦ D + ¦ E < 1.
                                        i 1
                                              i
                                                       i 1
                                                             i



Together with the non-negativity constraints given above this condition is
also sufficient. If the above condition holds, the GARCH(p,q) process is
weakly stationary.


7.2.2 The GARCH(1,1) Process

For the empirical modelling of financial market data, a GARCH(1,1)
model is often sufficient. It is given by
(7.17)                  h 2t = Į0 + Į H 2t1 + ȕ h 2t1 ,
with Į0 > 0, Į > 0 and ȕ > 0. Due to (7.15), the squared residuals follow the
ARMA(1,1) process
(7.18)              H 2t = Į0 + (Į + ȕ) H 2t1 + Ȟt – ȕ Ȟt-1 ,
which is stable for 0 < Į + ȕ < 1. Then, the unconditional variance also ex-
ists:
                                              D0
(7.19)                        V[İt] =                .
                                            1 D  E
According to JÜRGEN FRANKE, WOLFGANG HÄRDLE and CHRISTIAN
HAFNER (2004, p. 221), the kurtosis also exists if 3Į2 + 2Įȕ + ȕ2 < 1:
                                              6 D2
(7.20)               K[İt] = 3 +                          .
                                      1  E2  2DE  3D 2
It is always above three, the value of the normal distribution, since Į > 0
holds. Thus, the GARCH(1,1) process can be used to model distributions
                                              7.2 Generalised ARCH Models     255

with fat tails. If Į tends towards zero, the heteroskedasticity disappears and
the value of the kurtosis tends towards three. It depends more strongly on Į
than on ȕ. Correspondingly, in order to reach high values of the kurtosis,
high values of Į are always more effective than high values of ȕ.
   By transforming (7.17), we can show that the GARCH(1,1) model is
really able to represent long-lasting effects:
                          (1 – ȕL) h 2t = Į0 + Į H 2t1 ,
                                      D0      D
                           h 2t =         +        H 2t1 ,
                                     1 E   1  EL
                                              f
                                     D0
(7.21)                    h 2t =         + D ¦ E j1 H 2t j .
                                    1 E     j 1


Due to Į > 0, ȕ > 0 and Į + ȕ < 1, the GARCH(1,1) process is transformed
into an ARCH(d) process with geometrically declining weights. The lar-
ger ȕ, the longer is the effect of the shocks. Even if Į + ȕ = 1, i.e. if we
have an Integrated GARCH process (IGARCH), representation (7.21) is
still valid for the conditional variance whereas the unconditional variance
does not exist in this case.
   To forecast the conditional variances of a GARCH(1,1) process, we use
the ARMA(1,1) representation in (7.18). Following the considerations in
Section 2.4.1, we get the optimal forecasts for the period t + Ĳ with Ĳ > 0 as
                               h 2tW | t = E[ H 2tW | It] .

(7.18) results in
                  H 2tW = Į0 + (Į + ȕ) H 2tW1 + Ȟt+Ĳ – ȕ Ȟt+Ĳ-1 .
Thus, for the one step ahead forecast we get
              h 2t1 | t = E[ H 2t1 | It] = Į0 + (Į + ȕ) H 2t – ȕ Ȟt

                                          = Į0 + Į H 2t + ȕ h 2t .
For Ĳ = 2 we get
              h 2t 2 | t = E[ H 2t 2 | It] = Į0 + (Į + ȕ) E[ H 2t1 | It]

and, therefore,
                          h 2t 2 | t = Į0 + (Į + ȕ) h 2t1 | t .
256     7 Autoregressive Conditional Heteroskedasticity

Iteration leads to
                                           1  (D  E) W1
                     h 2tW | t = Į0                       + (Į + ȕ)Ĳ-1 h 2t1 | t .
                                             1 D  E
If the forecast horizon grows above all limits, if Į + ȕ < 1 and when taking
(7.19) into account, we have
                                                      D0
                                lim h 2tW | t =                   = V[İt].
                                 Wof                1 D  E
Thus, the conditional variance of İ converges towards its unconditional
variance. This is no longer true for an IGARCH process. In this case we
have Į + ȕ = 1, implying that the conditional variance grows linearly with
the forecast horizon. The conditional variance for period t, which defines
the information set for the forecasts, has a permanent influence.

Example 7.6
If we apply an AR(2) process for the mean and a GARCH(1,1) process for the
conditional variance of the DAX returns used in Examples 7.1 and 7.3, the AR(2)
parameter is no longer significantly different from zero even at the 10 percent sig-
nificance level. Thus, the correspondingly reduced model is

                       ¨ln(DAXt) = 0.0012 + Ĥ t ,
                                  ( 3.27)

                       ĥ 2t     =     3.69 106 + 0.164 Hˆ 2t1 + 0.829 hˆ 2t1 ,
                                     ( 3.22)       ( 6.23)         ( 33.34)

      R 2 = -0.004, SE = 0.015, Q(10) = 5.686 (p = 0.841), JB = 75.307,
with t values given in parentheses.
   The simple as well as the partial autocorrelations of the squared residuals are no
longer significantly different from zero.
   Because of Į + ȕ = 0.993 the unconditional variance is 0.00056. The high per-
sistence that was already apparent in Example 7.3, where a pure ARCH process
was applied, becomes obvious again if the estimated GARCH(1,1) model is, ac-
cording to (7.21), transformed into an ARCH representation:

             ĥ 2t    = 0.0000215 + 0.164 Hˆ 2t1 + 0.136 Hˆ 2t 2 + 0.113 Hˆ 2t 3

                               + 0.093 Hˆ 2t 4 + 0.077 Hˆ 2t 5 + 0.064 Hˆ 2t 6 + … .

The significant value of the Jarque-Bera statistic is caused by the still existing ex-
cess kurtosis. Although the kurtosis has been reduced drastically, it is still 3.953.
                                                   7.2 Generalised ARCH Models   257

7.2.3 Nonlinear Extensions

A problem arises especially when estimating higher order ARCH models
without restrictions: the estimated coefficients violate the non-negativity
constraints. To avoid this problem, JOHN GEWEKE (1986) suggested to use
a multiplicative approach for the conditional variance:
                                                                      2D
                        h 2t = eDo  H 2t D11  H 2t D22  ...  H t  qq .

This expression is always positive, regardless of whether the parameters
are positive or negative. By taking logarithms, we get the estimating equa-
tion
(7.22)       ln( h 2t ) = Į0 + Į1 ln( H 2t1 ) + … + Įq ln( H 2t q ) .

All models discussed so far have the disadvantage that positive and nega-
tive shocks exert the same impact on the conditional variance as the signs
disappear due to squaring. On the other hand, it is well known that the re-
action of volatility of share prices is different if the shocks are negative,
i.e. if they result from bad news, than if they are positive, i.e. if they result
from good news. This leverage effect leads to higher volatility as a result
of negative shocks as compared to positive ones. In the following, two ex-
tensions of the symmetric GARCH(1,1) model are presented which are ca-
pable to treat such asymmetric effects.
   The Threshold ARCH model (TARCH), developed by LAWRENCE R.
GLOSTEN, RAVI JAGANNATHAN and DAVID E. RUNKLE (1993) assumes
different GARCH models for positive and negative shocks. Thus, the
TARCH(1,1) model can be written as
(7.23)          h 2t = Į0 + Į H 2t1 + Ȗ H 2t1 d t 1 + ȕ h 2t1 ,
with
                                   ­1 if H t  0
                              dt = ®             .
                                   ¯0 otherwise
If Ȗ > 0, a leverage effect is observed as the impulse Į + Ȗ of negative
shocks is larger than the impulse Į of positive shocks.
   By presenting an Exponential GARCH model (EGARCH), DANIEL B.
NELSON (1991) not only captures asymmetries but also ensures that the
conditional variance is always positive. The EGARCH(1,1) model can be
written as
258      7 Autoregressive Conditional Heteroskedasticity


                                          H t 1     H
(7.24)             ln( h 2t ) = Į0 + Į           + Ȗ t 1 + ȕ ln( h 2t1 ) .
                                          h t 1    h t 1
Here, the standardised residuals İ/h are used. The ARCH effect is pro-
duced by the absolute value of the standardised residuals and not by their
squares. The asymmetry is also captured by the standardised residuals. For
Ȗ  0 we find an ARCH effect of Į + Ȗ for positive residuals and one of Į –
Ȗ for negative residuals. If a leverage effect exists, we expect Ȗ to be nega-
tive.

Example 7.7
To investigate whether the leverage effect plays a role for the DAX returns, the
data of Example 7.1 are taken to estimate a TARCH(1,1) as well as an
EGARCH(1,1) model. The results of the TARCH model are:

         ¨ln(DAXt) = 0.0011 + Ĥ t ,
                    ( 2.89)

         ĥ 2t   = 3.75 106 + 0.146 Hˆ 2t1 + 0.032 Hˆ 2t1 d t 1 + 0.830 hˆ 2t1 ,
                  ( 3.20)      ( 4.34)         ( 0.85)                ( 33.30)

   R 2 = -0.005, SE = 0.015, Q(10) = 5.911 (p = 0.823), JB = 74.492,
where t values are given in parentheses. For the EGARCH model we get:

      ¨ln(DAXt) = 0.0009 + Ĥ t ,
                 ( 2.46)
                                        Hˆ                      Hˆ
      ln( ĥ 2t ) =     0.501 + 0.281 t 1         –     0.059 t 1       0.968 ln(hˆ 2t1 ) ,
                      ( 5.78)   (7.00) ĥ t 1         (2.99) ĥ t 1   ( 120.55)

   R 2 = -0.005, SE = 0.015, Q(10) = 5.147 (p = 0.881), JB = 75.000,
with t values given in parentheses.
   The main difference between these two approaches is that the leverage effect is
significant in the EGARCH but not in the TGARCH model. In the former, the
short-run reaction to positive shocks is 0.222 and 0.340 on negative shocks. This
difference is highly significant. In both models, the remaining deviation from a
normal distribution of the residuals is again due to the existing excess kurtosis:
The estimated kurtosis is 3.953 in the TARCH and 3.931 in the EGARCH model.

Usually, it is assumed that higher returns of a financial asset imply a
higher risk. Therefore, mean and variance tend to go into the same direc-
tion. If we assume the risk premium to be time-dependent, this can be rep-
resented by applying the ARCH-in-mean (ARCH-M) approach developed
                                              7.3 Estimation and Testing   259

by ROBERT F. ENGLE, DAVID M. LILIEN and RASSEL P. ROBINS (1987).
Relation (7.1) is extended to
(7.25)                    yt = X 't ȕ + į h 2t + İt ,
with
                             İt | It-1 ~ N(0, h 2t ),

where the variance h 2t might be generated by an ARCH or GARCH proc-
ess. As this variance is part of model (7.25), the residuals of the original
model (7.1), ȗ,
                      ȗt = yt – X 't ȕ = į h 2t + İt ,
are now autocorrelated.


7.3 Estimation and Testing

We consider model (7.1)
                              yt = X 't ȕ + İt ,
and allow for a time-dependent conditional variance of İt, i.e. we assume
(7.26)                       İt | It-1 ~ f(0, h 2t ),

where f is a distribution function and the conditional variance h 2t possibly
follows a (G)ARCH process.
   If the residuals in (7.1) are independent, as is assumed in the classical
model, autocorrelation appears neither in the estimated residuals nor in
their squares.
   Usually, a model for the mean is regarded as appropriate if the estimated
residuals do not exhibit significant autocorrelation and if the null hypothe-
sis of normally distributed residuals cannot be rejected. If the Jarque-Bera
test (described in Section 1.3) indicates that the normality assumption has
to be rejected because the value of the kurtosis is larger than three, this can
be seen as evidence for the existence of (G)ARCH effects. If such effects
exist, the simple as well as the partial autocorrelation functions of the
squared residuals should have values significantly different from zero.
This can be checked by applying the Q and Q* statistics described in Sec-
tion 1.3 on the squared residuals. Under the null hypothesis of no autocor-
relation these statistics are asymptotically Ȥ2 distributed, and the number of
260    7 Autoregressive Conditional Heteroskedasticity

degrees of freedom is (as in the linear case) equal to the considered num-
ber of autocorrelation coefficients (of the squared residuals) minus the
number of estimated parameters in the equation for the mean.
   It can also be checked by using Lagrange Multiplier tests whether auto-
regressive conditional heteroskedasticity exists. The squared residuals are
in an auxiliary regression regressed on a constant and their own lagged
values up to order q,
               Ĥ 2t = Į0 + Į1 Hˆ 2t1   + … + Įq Hˆ 2t q + Ȟt .

The test statistic is T · R2, i.e. the product of the number of observations, T,
and the multiple correlation coefficient of the auxiliary regression, R2. Un-
der the null hypothesis of homoskedasticity this statistic is Ȥ2distributed
with q degrees of freedom. Alternatively, an F statistic can be performed
for the combined null hypothesis H0: Į1 = Į2 = ... = Įq = 0.
   In these tests, it is possible to employ the OLS residuals of equation
(7.1), as they are consistently estimated despite the existence of (G)ARCH
effects. These estimates are, however, not efficient. If such effects exist,
relations (7.1) and (7.2) (or other (G)ARCH specifications) are therefore
usually estimated simultaneously using maximum likelihood methods. For
the conditional distribution in (7.26) a normal distribution is mostly sup-
posed, i.e. it is assumed that the standardised residuals İ/h follow a stan-
dard normal distribution. This does, of course, not imply that the uncondi-
tional distribution is normal, too, because h2 is also a random variable
under this assumption. The above ARCH(1) and GARCH(1,1) models ex-
emplified that the tails of the unconditional distribution are typically fatter
than those of the normal distribution.
   Normally, when estimating such processes, the stationarity conditions
are not imposed as this would be numerically too complex. To avoid the
risk of these conditions being violated, one should choose rather small val-
ues of p and q. The standard programme systems employ two procedures
with respect to the non-negativity constraints. The first one is to use no re-
strictions at all. If negative values of Įi or ȕi are estimated, it has to be
checked whether all composite parameters įi in (7.14) are positive. The al-
ternative is to impose the sufficient conditions directly on the Įi and ȕi.
This often leads to corner solutions which do not necessarily represent the
maximum of the likelihood function.
   Even if the assumption of the normal distribution of standardised re-
siduals does not hold, the maximum likelihood estimator is still providing
consistent results despite the misspecification of the likelihood function, if
at least the first two moments are specified correctly. However, these quasi
maximum likelihood estimates demand corrections for the consistent esti-
7.4 ARCH/GARCH Models as Instruments of Financial Market Analysis        261

mation of the standard errors. Such a procedure is to be found, for exam-
ple, in JAMES D. HAMILTON (1994, p. 663).
   For (7.26), TIM BOLLERSLEV (1987) assumes a conditional t distribution
with a small number of degrees of freedom. As shown above, for a finite
number of degrees of freedom the t distribution has fatter tails than the
normal distribution. With an increasing number of degrees of freedom,
however, it converges to the latter. (From 100 degrees of freedom on, there
is practically no longer any difference from the normal distribution.) This
provides the possibility to check whether a conditional normal distribution
is appropriate.


7.4 ARCH/GARCH Models as Instruments of Financial
    Market Analysis

To evaluate the risk of different portfolio strategies is one of the basic
tasks of financial market analysis. As mentioned in the introduction of this
chapter, when modelling asset returns, it has long been known that the re-
siduals of the estimated models are not homoskedastic but that their vari-
ances partly show strong variations over time. A possibility to reflect this
in the models is provided by the ARCH and GARCH approaches.
   The estimated conditional standard deviations of the residuals can, for
example, be used to construct more precise intervals for the forecasts of
asset returns. Point forecasts of returns modelled according to equation
(7.1) are the same regardless of whether the residuals follow a (G)ARCH
process or not. In both cases, the conditional expectation given all informa-
tion up to period t is an optimal forecast (compare Section 2.4).
   If the residuals are homoskedastic, the forecast error variance only de-
pends on the length of the forecast horizon but not on the elements of the
information set It. In case of heteroskedastic residuals, we use, according
to (2.57), the information set dependent conditional variances for the con-
struction of forecast error variances. These conditional variances can be
derived from the ARMA representation (7.15) of the squared residuals
which are assumed to follow a GARCH process.
   Moreover, estimates of conditional variances to capture volatilities are,
for example, necessary for the following approaches:
x The approach of FISCHER BLACK and MYRON S. SCHOLES (1973) is of-
  ten employed to evaluate options. Besides the basic price, the expiry
  date, the share price and the riskless interest rate, an estimate of the
  volatility is necessary. All of these quantities can usually be observed
  directly except for the last one.
262    7 Autoregressive Conditional Heteroskedasticity


x The Value at Risk (VaR) has recently been applied to capture market
  risks. It is defined as the maximum loss to be expected over a fixed time
  horizon (holding period) with a specified confidence level. Typically, a
  normal distribution is assumed to calculate a VaR for holding periods of
  one day or ten days and confidence levels of 95 or 99 percent. This im-
  plies that the probability that losses are larger than calculated by the
  VaR is five or one percent.
     Statistically, the VaR is an Į-quantile of the left edge of a distribution
  for the change of the value of a portfolio. To calculate this quantile, be-
  sides other quantities, the conditional standard deviation of the portfolio
  returns, which cannot be observed directly, is necessary .
A variety of models exists for estimation VaR (see especially PHILLIPPE
JORION (2001)). Here, we will focus on approaches which estimate volatil-
ities by time series methods.
   Traditionally, ‘historical volatilities’, i.e. the standard deviations of the
last n price changes, are used to estimate this conditional heteroskedastic-
ity. If ǻx is the price change of an asset, for this approach it holds that

                 1 n 1                    2                     1 n 1
       V̂ t =      ¦
                 ni0
                        'x t i  'x ( t )     with 'x ( t ) =     ¦ 'x t i .
                                                                 ni0
To give current observations a higher weight, exponentially weighted
moving averages are used.
   The ARCH/GARCH approach provides an alternative. ROBERT F.
ENGLE (2001) shows, for example, how a GARCH(1,1) model can be used
to calculate the VaR.
   Two different other applications have already been mentioned. Firstly,
the ARCH approach can be used to model time-dependent risk premia.
Secondly, the ARCH-M model allows to represent the possibility that as-
sets with higher expected returns imply higher risk. At least risk neutral
and risk avers investors will only buy assets with higher risk if they can
expect a higher return.
   In many practical applications, the ARCH/GARCH approaches have to
be generalised to take multivariate situations into account. The dynamics
of a k-dimensional vector of residuals, which are temporarily uncorrelated
but conditionally heteroskedastic, are to be represented. Then, the condi-
tional covariances have to be modelled in addition to the conditional vari-
ances. To limit the number of parameters to be estimated, additional a pri-
ori restrictions are necessary. Some of the most popular specifications are,
for example, discussed in ANIL K. BERA and MATTHEW L. HIGGINS
(1993).
                                                               References   263


References

The first to mention that changes of speculative markets are not normally dis-
tributed was
BENOIT MANDELBROT, The Variation of Certain Speculative Prices, Journal of
   Business 36 (1963), pp. 394 – 419.
In this context, he discussed Pareto distributions. The ARCH model was devel-
oped by
ROBERT F. ENGLE, Autoregressive Conditional Heteroskedasticity With Estimates
   of the Variance of U.K. Inflation, Econometrica 50 (1982), pp. 987 – 1008.
In 2003, R.F. ENGLE received the Nobel prize for this important paper.
   The GARCH model was introduced by
TIM BOLLERSLEV, Generalized Autoregressive Conditional Heteroskedasticity,
   Journal of Econometrics 31 (1986), pp. 307 – 327, and
STEPHEN J. TAYLOR, Modelling Financial Time Series, John Wiley, Chichester
   (U.K.) 1986,
independently of each other. The IGARCH approach was discussed by
ROBERT F. ENGLE and TIM BOLLERSLEV, Modelling the persistence of Conditional
   Variances, Econometric Reviews 5 (1986), pp. 1 – 87.
The TARCH model was developed by
LAWRENCE R.GLOSTEN, RAVI JAGANNATHAN and DAVID E. RUNKLE, On the Re-
   lation between the Expected Value and the Volatility of the Nominal Excess
   Return of Stocks, Journal of Finance 48 (1993), pp. 1779 – 1801,
while the EGARCH model goes back to
DANIEL B. NELSON, Conditional Heteroskedasticity in Asset Returns: A New Ap-
   proach, Econometrica 59 (1991), pp. 347 – 370,
and the ARCH-M model to
ROBERT F. ENGLE, DAVID M. LILIEN and RASSEL P. ROBINS, Estimating Time
   Varying Risk Premia in the Term Structure: The ARCH-M Model, Economet-
   rica 55 (1987), pp. 391 – 407.
The multiplicative model which guarantees the non-negativity of the estimated
conditional variances was proposed by
JOHN GEWEKE, Modelling the Persistence of Conditional Variances: Comment,
   Econometric Reviews 5 (1986), pp. 57 – 61.
Surveys are, for example, given by
264    7 Autoregressive Conditional Heteroskedasticity

ANIL K. BERA and MATTHEW L. HIGGINS, ARCH Models: Properties, Estimation
   and Testing, Journal of Economic Surveys 7 (1993), pp. 305 – 366, and
TIM BOLLERSLEV, ROBERT F. ENGLE and DANIEL B. NELSON, ARCH Models, in:
   R.F. ENGLE and D.L. MCFADDEN (eds.), Handbook of Econometrics, volume
   IV, Elsevier, Amsterdam et al. 1994, S. 2959 – 3038,
as well as, for example, in the textbook of
JAMES D. HAMILTON, Time Series Analysis, Princeton University Press, Princeton
   1994.
The t distribution to model leptokurtic behaviour was proposed by
TIM BOLLERSLEV, A Conditionally Heteroskedastic Time Series Model for Specu-
    lative Prices and Rates of Return, Review of Economics and Statistics 69
    (1987), pp. 542 – 547.
The effects of temporal aggregation are discussed in
FRANCIS X. DIEBOLD, Empirical Modeling of Exchange Rate Dynamics, Springer,
   New York et al. 1988, as well as in
FEIKE C. DROST and THEO E. NIJMAN, Temporal Aggregation of GARCH Proc-
    esses, Econometrica 61 (1993), pp. 909 – 927.
Multivariate GARCH models are discussed in
ROBERT F. ENGLE and KENNETH F. KRONER, Multivariate Simultaneous General-
   ized GARCH, Econometric Theory 11 (1995), pp. 122 – 150,
CHRIS BROOKS, SIMON P. BURKE and GITA PERSAND, Multivariate GARCH Mod-
   els: Software Choice and Estimation Issues, Journal of Applied Econometrics
   18 (2003), pp. 725 – 734, and
LUC BAUWENS, SÉBASTIEN LAURENT and JEROEN V.K. ROMBOUTS, Multivariate
   GARCH Models: A Survey, Journal of Applied Econometrics 21 (2006), pp.
   79 – 109.
The modern analysis of option prices was founded by
FISCHER BLACK and MYRON S. SCHOLES, The Pricing of Options and Corporate
    Liabilities, Journal of Political Economy 81 (1973), pp. 637 – 659.
The Value at Risk was discussed extensively by
PHILIPPE JORION, Value at Risk: The New Benchmark for Managing Financial
    Risk, McGraw Hill Trade, 2nd edition 2001.
How the value at risk of an asset can be calculated using a GARCH(1,1) model is
described in
ROBERT F. ENGLE, GARCH 101: The Use of ARCH/GARCH Models in Applied
   Econometrics, Journal of Economic Perspectives 15 (2001), pp. 157 – 168.
                                                             References   265

See for this also
JAMES CHONG, Value at Risk from Econometric Models and Implied from Cur-
   rency Options, Journal of Forecasting 23 (2004), pp. 603 – 620.
Generally, for the econometric analysis of financial market data see
ADRIAN PAGAN, The Econometrics of Financial Markets, Journal of Empirical
   Finance 3 (1996), pp. 15 – 102,
TIM BOLLERSLEV, RAY Y. CHOU and KENNETH F. KRONER, ARCH Modelling in
   Finance: A Review of the Theory and Empirical Evidence, Journal of Econo-
   metrics 52 (1992), pp. 5 – 59,
TERENCE C. MILLS, The Econometric Modelling of Financial Time Series, Cam-
   bridge University Press, Cambridge (U.K.), 2nd edition 1999, or
JÜRGEN FRANKE, WOLFGANG HÄRDLE and CHRISTIAN HAFNER, Einführung in die
   Statistik der Finanzmärkte, Springer, Berlin et al., 2nd edition 2004.
Index of Names and Authors




A                                     Clements, Michael P. 233, 239
                                      Cochrane, Donald 1, 23,27, 89
Akaike, Hirotugu 56, 89
                                      Cochrane, John H. 183, 197
Amisano, Gianni 151
Andrews, Donald W. 173, 195
                                      D
B                                     Davidson, James E.H. 151
                                      Davis, Richard A. 89
Babbage, Charles 3
                                      Dickey, David A. 165-66, 170,
Baillie, Richard T. 197
                                        173, 176, 194-95
Banerjee, Anindya 211, 216, 236-
                                      Diebold, Francis X. 233, 239, 251,
  37
                                        264
Bartlett, M.S. 16, 24, 172, 195
                                      Dolado, Juan J. 211, 216, 232,
Bauwens, Luc 264
                                        235-36, 238
Bera, Anil K. 19, 25, 246, 262, 264
                                      Drost, Feike C. 264
Beveridge, Stephen 181, 184-87,
                                      Durbin, James 1, 23
  197
Black, Fischer 261, 264
                                      E
Bollerslev, Tim 252, 261, 263-65
Boswijk, H. Peter 230, 238            Enders, Walter 24, 150
Box, George E.P. 1, 4, 17, 23-24,     Engle, Robert F. 190, 194, 196-97,
  27, 88, 201                            201-04, 210, 233, 235-36, 245,
Breitung, Jörg 151                       247-48, 259, 262-64
Breusch, Trevor S. 17, 25             Ericsson, Neil R. 230, 238
Brooks, Chris 264
Brown, Bryan W. 85, 90                F
Brockwell, Peter J. 89
Brüggemann, Ralf 151                  Feige, Edgar L. 103, 106, 109, 121
Buiter, Willem H. 122                 Franke, Jürgen 254, 265
Burke, Simon P. 264                   Friedman, Milton 39, 91
                                      Friedmann, Ralph 239
                                      Fuller, Wayne A. 165-66, 170,
C
                                         173, 194
Carvalho, José L. 22
Chan, K. Hung 196                     G
Chong, James 265
Chou, Ray Y. 265                      Galbraith, John W. 236
Christoffersen, Peter F. 233, 239     Galilei, Galileo 93
                                      Geweke, John 257, 263
268   Index of Names and Authors

Giannini, Carlo 151                   Jorion, Philippe 262, 264
Glosten, Lawrence R. 257, 263         Joyeux, Roselyne 197
Godfrey, Leslie G. 17, 25             Judge, George G. 150
Gomez, Victor 23                      Juselius, Katarina 237
Granger, Clive W.J. 1, 24, 90, 93-
  95, 102, 118, 120, 122, 126, 151,   K
  190, 194, 197, 199, 202-04, 210,
  232, 235-36, 238                    Kang, Heejoon 196-97
Grether, David M. 22                  Kepler, Johannes 3
Griffiths, W.E. 150                   Kirchgässner, Gebhard 37, 86, 90-
                                        91, 117, 121-23, 144, 196
                                      Krämer, Jörg W. 122
H
                                      Krätzig, Markus 24, 151
Hafner, Christian 254, 265            Kroner, Kenneth F. 264-65
Hagen, Hanns Martin 86, 90            Kwiatkowski, Denis 178-79, 196
Hamilton, James D. 24, 203, 261,      Kydland, Finn E. 198
  264
Hannan, Edward J. 56, 89              L
Hansen, Bruce E. 195
Härdle, Wolfgang 254, 265             Langfeld, Enno 122
Hartley, Peter R. 198                 Laurent, Sébastien 264
Harvey, Andrew C. 197                 Lee, T.-C. 150
Hassler, Uwe 177, 179-80, 188,        Lilien, David M. 259, 263
  196-97, 211, 216-17, 233, 236-      Lin, Jin-Lung 232, 238
  39                                  Ljung, G.M. 17, 24
Hatanaka, Michio 24                   Lütkepohl, Helmut 24, 122, 133,
Haugh, Larry D. 97, 102, 106, 120        150-51, 232, 237-39
Hayya, Jack C. 196
Hendry, David F. 126, 151, 211,       M
  233, 236, 238-39                    MacKinnon, James G. 166, 168,
Higgins, Matthew L. 246, 262, 264       170, 173, 176, 194, 211, 236
Hill, R.C. 150                        Maddala, Gangadharrao S. 85, 90
Hodrick, Robert J. 184-86, 197        Maital, Shlomo 85, 90
Hsiao, Cheng 102, 110, 121            Mandelbrot, Benoit 241, 263
Hume, David 93-94, 118                Maravall, Augustin 23
Hylleberg, Svend 190-91, 197          Mestre, Ricardo 216, 237
                                      Mills, Terence C. 89, 265
J                                     Mincer, Jacob 85, 89
Jagannathan, Ravi 257, 263            Mishkin, Frederic S. 122
Jarque, Carlos M. 19, 25              Mizon, Graham E. 238
Jenkins, Gwilym M. 1, 4, 23, 27,      Müller, Ulrich K. 196
   88, 201
Jeong, Jinook 85, 90                  N
Jevons, William Stanley 3             Nelson, Charles R. 181, 184-87,
Johansen, Søren 203, 206, 218,          196-97
   222, 225, 230, 235-38              Nelson, Daniel B. 257, 263-64
                                     Index of Names and Authors    269

Nerlove, Marc 22                     S
Newbold, Paul 1, 24, 94, 122, 199,
                                     Saïd, Saïd E. 170, 176, 195
  202, 236
                                     Saikkonen, Penti 212, 236-37
Nijman, Theo E. 264
                                     Sargan, J. Dennis 126, 151
                                     Sargent, Thomas J. 102, 120, 122
O
                                     Savioz, Marcel R. 123, 144
Orcutt, Guy H. 1, 23, 27, 89         Schmidt, Peter 178-79, 196
Ord, J.-Keith 196                    Scholes, Myron S. 261, 264
Osterwald-Lenum, Michael 225,        Schumpeter, Joseph A. 193, 198
  237                                Schwarz, Gideon 56, 89
                                     Schwert, G. William 95, 106, 121,
P                                       169, 175, 195
                                     Shin, Yongcheol 178-79, 196, 238
Pagan, Adrian 151, 265               Sims, Christopher A. 93, 102-03,
Palm, Franz C. 88, 90                   117, 120-21, 125, 149-50
Parzen, Emanuel 24                   Slutzky, Evgenij Evgenievich 4
Pearce, Douglas K. 103, 106, 109,    Smith, Gregor W. 211, 236
   121                               Smith, Richard J. 238
Perron, Pierre 168-69, 171-72,       Spanos, Aris 24
   176-78, 194-95, 198               Srba, Frank 151
Persand, Gita 264                    Stadler, George W. 198
Persons, Warren M. 3, 23             Stock, James H. 150, 194, 196-98,
Pesaran, M. Hashem 238                  202, 212, 217, 235-36
Phillips, Peter C.B. 171, 178-79,
   194, 196, 198, 236
                                     T
Pierce, David A. 17, 24, 84, 102,
   106, 109, 120, 122                Taylor, Stephen J. 252, 263
Pindyck, Robert S. 89                Temple, Jonathan 198
Plosser, Charles I. 196              Teräsvirta, Timo 239
Prescott, Edward C. 184, 186, 197-   Theil, Henry 86, 90
   98                                Tiao, George C. 63, 89, 164, 194
Price, J. Michael 121                Tinbergen, Jan 1, 22, 88, 91
                                     Toda, Hiro Y. 232, 238-39
Q                                    Tsay, Ruey S. 164, 194
Quinn, Barry G. 56, 89
                                     W
R                                    Watson, Geoffrey S. 1, 23
                                     Watson, Mark W. 150, 194, 197-
Robertson, Donald 151                  98, 212, 236
Robins, Rassel P. 259, 263           Whitt, Joseph A. 198
Rombouts, Jeroen V.K. 264            Wickens, Michael 151
Rubinfeld, Daniel 89                 Wold, Herman 4, 21, 23, 88
Rudebusch, Glenn D. 198              Wolters, Jürgen 122, 177, 179-80,
Runkle, David E. 257, 263              188, 196-97, 217, 233, 236-37,
                                       239
270   Index of Names and Authors

Working, Holbrook 89               Yoo, Byung Sam 190, 197, 201,
                                     233, 236
X                                  Yule, George Udny 4
Xiao, Zhijie 196
                                   Z
Y                                  Zarnowitz, Victor 85, 89
                                   Zellner, Arnold 88, 90, 110, 121
Yamada, Hiroshi 239
Yamamoto, Taku 232, 238
Yeo, Stephen 151
Subject Index




A                                      Cochrane measure of persistence
                                         183, 197
ARCH models 241-65
                                       Cointegration 131, 199-239
  ARCH-M 258, 262-63
                                         cointegration rank 203-04, 209,
  EGARCH 257-58, 263
                                            218-19, 223, 225, 237
  GARCH 245, 252-65
                                         cointegration test 194, 203, 209-
  IGARCH 255-56, 263
                                            18, 237-38
  TARCH 257-58, 263
                                         cointegration vector 203, 205-06,
ARFIMA process 188
                                            208-09, 218-20, 225, 230-31,
ARIMA process 158, 164, 169,
                                            235
  180-82, 184-85, 188, 194-95, 207
                                         definition 203-04
Autocorrelogram 16, 33, 65
                                         Engle-Granger test 209-12, 236-
Autocorrelation 1-2, 15-16, 22-24,
                                            37
  33, 39, 43, 50-51, 58-61, 65, 67,
                                         Johansen approach 218, 222-30,
  70-72, 74, 128, 156, 159, 163-64,
                                            235-37
  167, 171, 173-76, 178-79, 195,
                                         Ȝmax test 223
  199, 216, 246, 249, 254, 259-60
                                         trace test 223
  estimation 16
                                       Consistency, consistent estimation
  partial autocorrelation 52-54, 61,
                                         13, 16, 54, 56-57, 59, 74, 85, 89,
     67, 72, 74, 259
                                         133, 137, 164, 171, 194-95, 203,
Autocovariance 13, 15-16, 22, 31-
                                         210, 234, 260
  32, 39, 42-43, 50, 65, 69-70, 74,
                                         super consistency 211-13, 217,
  171, 248
                                            231, 234
Autocovariance matrix 127
                                       Crosscorrelation 101-02, 106-09,
                                         114
B
Bartlett window 195                    D
Beveridge-Nelson decomposition
                                       Deterministic 3-4, 21, 28-29, 97,
  181, 197
                                         153, 155, 158-59, 162-63, 168-
Box-Jenkins approach 1, 75, 163,
                                         69, 172-73, 177-79, 190-93, 197,
  235
                                         210-11, 216-218, 222, 224-25,
Breusch-Godfrey test 17, 25
                                         229, 233, 237
                                       Deterministic rule 118
C                                      Durbin-Watson statistic 1, 18, 159,
Choleski decomposition 136, 138          163, 199
272    Subject Index

E                                        and policy rules 118-19
                                         and rational expectations 95,
Equation, system of 137
                                         definition 95-96
  reduced form 94, 97-98, 126-27,
                                         direct Granger procedure 102-05,
     133, 138, 206, 229
                                            114-15
  structural form 98, 125, 137
                                         feedback 96, 102-03, 106, 115,
Equilibrium error 205-06, 210
                                            117-18, 121, 138, 148
Ergodicity 12-13, 16, 24
                                         Haugh-Pierce test 95, 102, 106-
Error correction 126, 130-32, 151,
                                            10, 114, 117, 120-22
  204, 206, 215-17, 219, 224-25,
                                         Hsiao procedure 95, 102, 110-13,
  229-39
                                            116, 121
  conditional error correction 217,
                                         instantaneous causality 94-98,
     230-31
                                            101-03, 106, 110, 115, 117-21,
  structural error correction 231,
                                            127, 136-38, 150, 231
     238
                                         in VAR models 136-38
  vector error correction 218-33,
                                         in vector error correction models
     238
                                            229, 231-32
Exogeneity, weak 206, 217, 225,
                                         with cointegrated variables 204,
  229, 231, 238
                                            207
Expectation 3, 13, 31-32, 39, 42,
                                       Granger representation theorem
  49, 58, 64, 69, 78-79, 89-90, 95,
                                         204, 206, 215
  125, 144, 153, 158, 205, 208,
  212, 241, 248, 261
                                       H
  conditional expectation 78, 144,
     241, 261                          Hodrick-Prescott filter 184, 197
  rational expectations 79, 95, 125
                                       I
F
                                       Identification 89, 93-94, 137, 208,
Forecast 75-87                            221
  forecast function (see prediction    Information criteria 56, 75, 89, 103,
     function)                            110-11, 133, 212
Forecast error 77-79, 81-86, 90, 95,      Akaike criterion 56, 89, 133-34
  126, 130, 144-46, 155, 241, 261         final prediction error 56, 110,
  forecast error variance 78-79, 83,         133-34
     95-96, 126, 146, 201, 241            Hannan-Quinn criterion 56-57,
  mean absolute forecast error 85            89, 133
  mean squared forecast error 75-         Schwarz criterion 56, 89, 133
     79                                Innovations 95, 121, 137-40, 145-
  root mean squared forecast error        46, 149-50, 177, 183
     86                                Integration 157-59, 179-80, 187-91,
                                          197
G                                         definition 157-58
                                          fractional integration 180, 187-
Granger causality 93-123, 126, 135-
                                             89, 197
  38, 149-50, 201, 204, 207, 229,
  231-32, 238
                                                       Subject Index    273

Invertibility 60, 65, 69-70, 74-75,        prediction function 75, 77
   81, 83, 97, 100, 154, 157, 159,
   169, 187-88, 209, 225               Q
                                       Q statistic 17, 106
J
Jarque-Bera test 19, 25, 259           R
                                       Random walk 14-15, 120, 156-60,
K
                                         162-63, 165-68, 173, 178, 181,
Kurtosis 18-19, 241, 244-45, 248,        189-90, 195-98
  254-55, 259                          Real business cycle 193, 198
                                       Residuals, standardized 258, 260
L
                                       S
Lag operator 2, 10-11, 29, 40, 42,
  49, 59, 64-65, 67, 73, 97-98, 100,   Seemingly unrelated regressions
  229, 253                                (SUR) 110, 121, 133
Lagrange multiplier test 17, 25, 260   Skewness 18-19
Least squares estimation 23, 56, 74-   Stability condition 37, 41-42, 49-
  75, 85, 89, 133, 164, 166, 171,         50, 52, 56, 68, 73, 155
  194, 199, 202, 210, 215, 217         Stable distribution 245
  generalised least sqares 85, 133     Stationarity
Leptokurtosis 241, 245, 247, 264          covariance stationarity 14, 21-22,
Leverage effect 257-58                       120, 154
LSE approach 126, 151                     definition 13-14
                                          difference stationarity 157, 159,
M                                            165, 239
                                          mean stationarity 13, 28, 154,
Maximum likelihood estimation 56,
                                             156
 74, 222, 237, 260
                                          stationarity test 178, 196
 quasi maximum likelihood
                                          trend stationarity 158-59, 165-
    estimation 260
                                             66, 168-69, 176, 178, 239
Method of undetermined coeffi-
                                          variance stationarity 14
 cients 41, 49, 65
                                          weak stationarity 13-15, 29, 31,
                                             88, 95, 97, 110, 117, 126-28,
N                                            131, 157-58, 187, 201, 206,
Nonparametric approach 173-74                249, 254
Normal distribution 13, 18-19, 25,     Structural break 6, 9, 176-78, 195-
  167, 174-75, 201, 212, 236, 241,        96, 237-38
  244-45, 247-48, 254, 260-02
                                       T
P                                      t distribution 19, 166, 199, 244-45,
Popularity function 91                    261, 264
Popularity series 37-38                Temporal aggregation 62, 89, 118,
Prediction (see forecast)                 122, 249-51, 264
274    Subject Index

Term structure of interest rates 104,   Volatility 241, 244, 246, 252, 257,
  226, 228, 239                           261
Theil’s U 86, 90
Trend elimination 159-63, 196           W
                                        White noise 14, 16, 33, 56, 74, 85,
U
                                         97, 100-01, 106, 118-19, 145,
Unit root test 163-80, 188, 191,         159, 179, 189, 191, 204-05, 219,
  194, 196, 209-11, 216                  246, 253
  Dickey-Fuller test 165-71, 173-       Wold decomposition 2, 21-23, 27,
      75, 177, 210-11                    29, 40, 42, 49, 57-58, 64, 67-68,
  HEGY test 190-91                       74, 77, 80, 97, 99, 138-39, 144,
  Phillips-Perron test 171-76, 179,      181
      194-95
                                        Y
V
                                        Yule-Walker equations 50-51, 53,
Value at risk 262, 264-65                 56



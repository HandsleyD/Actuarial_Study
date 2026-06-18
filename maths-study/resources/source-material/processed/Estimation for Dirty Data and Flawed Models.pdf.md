---
normalized_id: shared-pdf-reference-estimation-for-dirty-data-and-flawed-models
exam_code: SHARED
material_scope: estimation for dirty data and flawed models.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Estimation for Dirty Data and Flawed Models.PDF
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-estimation-for-dirty-data-and-flawed-models

Chupter I I


ESTIMATION FOR DIRTY DATA AND FLAWED MODELS
WILLIAM       S. KRASKER*

Hurvard University

EDWIN       KUH    and ROY E. WELSCH*

Mussuchusefts Institute of Technology




Contents

 1. Introduction                                                                                         652
 2. Sources of model failure                                                                             658
 3. Regression diagnostics                                                                               660
 4. Bounded-influence    regression                                                                      664
 5. Aspects of robust inference                                                                          673
 6. Historical background                                                                                676
 7. Bounded-influence    estimates for a hedonic               price index                               678
     7.1,     The model                                                                                  681
     7.2.     Partial plots                                                                              681
 8. Bounded-influence    estimation with endogenous                 explanatory       variables          691
 9. Resistant time-series estimation                                                                     693
10. Directions for further research                                                                      695
References                                                                                               696




  *This research was supported,   in part,   by the National    Science Foundation,    U.S. Department    of
Energy, and I.B.M.


Handbook o/ Econometrics, Volume I, Edited by Z. Griliches and M.D. Intriligaior
0 North- Hollund Publishing Company, I983
652                                                                  W. S. Krasker et al.


1.    Introduction

We are concerned with the econometric implications of the sensitivity to data of
coefficient estimates, policy analyses, and forecasts in the context of a regression
model. In contrast to the emphasis in standard treatments of the linear model
paradigm described subsequently, we are interested in data, how they are gener-
ated, and particular data configurations in the context of a specified regression
model. The focus of this chapter is on resistant estimation procedures and
methods for evaluating the impact of particular data elements on regression
estimates. While terminology is not yet firmly fixed in this rapidly evolving area,
resistant estimation here is presumed to include classical robust estimation for
location [Andrews et al. (1972)] or regression [Huber (1977)] and bounded-
influence regression [Krasker and Welsch (1982a)]. “Classical robust” estimation
reduces the effect of outliers in error space. Bounded-influence regression, in
addition, limits the permissible impact of outliers in explanatory-variable space.
   The time-honored point of departure in econometrics is the ordinary least
squares (OLS) estimator b = ( XTX) - ‘XTy for the linear regression model y = Xp
 + E, where y is the response variable data vector, X is the explanatory variable
data matrix, p are coefficients to be estimated, and E conditional on X ‘is a
random vector with E( e&r) = 2 = a21 and E(E) = 0. The widespread appeal of
this model lies in its simplicity, its low computational cost, and the BLUE (Best
Linear Unbiased Estimator) property shown by the Gauss-Markov                theorem.
When E is normally distributed, there is the added theoretical imprimatur of
maximum likelihood and attendant full efficiency. Also, for fixed X, exact small
sample tests of significance are possible.
   More elaborate estimators are needed when the simple assumptions that
motivate OLS are considered invalid. Thus, generalized least squares (GLS)
replaces OLS when JS * 0’1 leading to the Aitkin estimator,                       b =
( XT2 ~ ‘X) _ ‘XTT ‘y, when the errors are heteroscedastic or autocorrelated.
GLS estimates are BLUE for known 2 and have desirable asymptotic properties
when 2 has been consistently estimated.
   When the explanatory variables cannot be viewed as fixed, the choice of
estimator depends on the sources of random behavior and whatever further
assumptious the econometrician considers tenable. Random behavior in the
explanatory variables includes observational errors, endogenous variables that are
part of a simultaneous-equation        system, variance-component     models, lagged
endogenous variables, stochastic regressors with some joint distribution, and
stochastic parameter variation. Failure to recognize these statistical attributes can
lead to one or more of the following shortcomings: inefficiency, finite sample
bias, inconsistency, and incorrect tests of significance. Generally speaking, correct
estimation procedures differ from OLS/GLS when these circumstances prevail
Ch. II: Dirty Duta and Flawed Models                                              653


and estimators are tailored to whatever specific stochastic conditions are deemed
the most important.
   This perspective can be extended to encompass estimators that avoid undue
reliance on small segments of the data when there are large but isolated &par-
tures from the maintained statistical hypotheses. Thus, reliable estimation some-
times calls for explicit consideration of the X matrix so as to limit the permissible
influence of any one of its rows. At the same time, one would also like protection
against occasional large E. A class of resistant estimators that restricts unusually
influential components of X and E, called bounded-influence estimators, offers
protection against several types of common specification problems and requires
less restrictive assumptions about stochastic properties than those customarily
required in the more complex regression structures enumerated above.
   Robust regression has appeared in econometrics literature since the mid-1950s,
mainly in the guise of Least Absolute Residuals, an estimator that minimizes the
sum of the absolute values rather than the square of errors. According to a fine
survey by Lester D. Taylor (1974): “LAR has the same illustrious progenitors as
least squares (Gauss and Laplace). . . but has historically never attracted much
attention.” Even though coefficient computations became practical through linear
programming, as initially pointed out by Charnes, Cooper and Ferguson (1955)
Karst (1958), Wagner (1959), and W. Fisher (1961), distribution theory has
remained a problem, although a recent paper by Koenker and Basset (1978)
provides asymptotic theory.
   Two empirical studies suggest that in some cases LAR (or variants) may
outperform OLS. Again, quoting Taylor: “What Meyer and Glauber (1964) did
was first to estimate their investment models by LAR as well as least squares and
then test the equations on post-sample data by using them to forecast the 9 (and
sometimes 11) observations subsequent to the period of fit. They found that, with
very few exceptions, the equations estimated by LAR outperformed the ones
estimated by least squares even on criteria (such as the sum of squared forecast
errors) with respect to which least squares is ordinarily thought to be optimal (p.
171).” Another study by Fair (1974) used approximations to LAR and adapta-
tions of other robust estimators in a fifteen-equation macro model. His compari-
sons had an outcome similar to that of Meyer and Glauber: LAR outperformed
OLS in post-sample forecasts.
   While these isolated instances of empirical research are suggestive of potentially
attractive results, resistant estimation (in its LAR garb or any other) has remained
peripheral to mainstream econometric work because of computational costs as
well as the absence of widely available code designed for this purpose, and the
lack of convincing theoretical support. These deficiencies, along with more intense
concerns about other econometric issues and widespread acceptance of OLS, help
to explain the relative neglect of resistant regression.
654                                                                   W. S. Krasker et al.


   Resistant estimators offer protection against certain fairly general model failures
while preserving high efficiency in well-behaved situations. This approach differs
from the more standard econometric approach where an alternative estimator is
devised to cope with specific departures from a more standard specification.
   There is an inevitable gap between a model and reality; it is one thing to write
down a model and another to believe it. Three model/data problems are of
immediate concern.’ First, there may be “local errors”, such as round-off errors
or groupings of observations. Second, there may be “gross errors” in the data, e.g.
incorrectly recorded numbers, keypunch errors, or observations made on the
wrong quantity. Finally, the model itself is typically thought to be only an
approximation. In regression, for example, the linearity of the model and the
normality of the disturbance distribution are both good approximations, at best.
   Local errors occur in virtually all data sets, if for no other reason than the fact
that we work with only finitely many significant digits. However, local errors do
not ordinarily cause serious problems for the classical regression procedures, so
we will not be too concerned with them.
   Gross errors occur more often in some types of data sets than in others. A
time-series model using National Income Accounts data and a moderate number
of observations is unlikely to contain data with gross errors (provided the
numbers which are actually read into the computer are carefully checked).
However, consider a large cross section for which the data were obtained by
sending questionnaires to individuals. Some respondants will misinterpret certain
questions, while others will deliberately give incorrect information. Further errors
may result from the process of transcribing the information from the question-
naires to other forms; and then there are the inevitable keypunch errors. Even if
the data collectors are careful, some fraction of the numbers which are ultimately
fed into the computer will be erroneous.
   The third category- the approximate nature of the model itself-is also a
serious problem. Least squares can be very inefficient when the disturbance
distribution is heavy tailed. Moreover, although the linear specification is often
adequate over most of the range of the explanatory variables, it can readily fail
for extreme values of the explanatory variables; unfortunately, the extreme values
are typically the points which have the most influence on the least squares
coefficient estimates.
   Gross errors - even if they are a very small fraction of the data - can have an
arbitrarily large effect on the distribution of least squares coefficient estimates.
Similarly, a failure of the linear specification- even if it affects only the few
observations which lie in extreme regions of the X space - can cause OLS to give a
misleading picture of the pattern set by the bulk of the data.


  ‘The discussion   which follows goes back to Hampel   (1968).
Ch. 1 I: Dirty Data and Flawed Models                                              655

   While general considerations about data appear in Chapter 27 by Griliches we
need to examine in more detail those circumstances in which statistical properties
of the data - in isolation or in relation to the model - counsel the use of resistant
estimators. These will often be used as a check on the sensitivity of OLS or GLS
estimates simply by noting if the estimates or predictions are sharply different.
Sometimes they will be chosen as the preferred alternative to OLS or GLS.
   The common practice in applied econometrics of putting a dummy variable
into a regression equation to account for large residuals that are associated with
unusual events, requires a closer look. The inclusion of a single dummy variable
with zeros everywhere except in one period forces that period’s residual to zero
and is equivalent to deleting that particular row of data. The resulting distribution
of residuals will then appear to be much better behaved. [See Belsley, Kuh and
Welsch (1980, pp. 68-69).] Should dummy variables be used to downweight
observations in this manner? Dummy variables are often an appealing way to
increase estimation precision when there are strong prior reasons for their
inclusion, such as strikes, natural disasters, or regular seasonal variation. Even
then, dummy variables are often inadequate. When a strike occurs in a particular
quarter, anticipations will influence earlier periods and unwinding the effects of
the strike will influence subsequent periods. As an interesting alternative to OLS,
one might wish to consider an algorithm that downweights observations smoothly
according to reasonable resistant statistical criteria instead of introducing discrete
dummy variables after the fact, which has the harsher effect of setting the row
weight to zero.
   Model-builders using macroeconomic time series are often plagued by occa-
sional unusual events, leading them to decrease the weights to be attached to
these data much in the spirit of resistant estimation. Even when there are good
data and theory that correspond reasonably well to the process being modeled,
there are episodic model failures. Since it is impractical to model reality in its full
complexity, steps should be taken to prevent such model failures from con-
taminating the estimates obtainable from the “good” data. Some of these break-
downs are obvious, while others are not. At least some protection can be obtained
through diagnostic tests. Where the aberrant behavior is random and transitory,
estimators that restrict the influence of these episodes should be seriously consid-
ered. We do not view resistant estimation as a panacea: some types of model
failure require different diagnostic tests and different estimators.
   Other types of model difficulties are sometimes associated with cross sections,
quite apart from the sample survey problems mentioned earlier. Cross-sectional
data are often generated by different processes than those which generate time
series. This hardly startling proposition is a belief widely shared by other
econometricians, as evidenced by the proliferation of variance-components mod-
els which structure panel data error processes precisely with this distinction in
mind. (See Chapter 22 by Chamberlain on panel data.)
656                                                                                    W. S. Krasker et al.


   To some extent these differences reflect the aggregation properties of the
observational unit rather than different (i.e. intertemporal versus cross-sectional)
behavior. Time series often are aggregates, while cross sections or panel data often
are not. There is a tendency for aggregation to smooth out large random
variations which are so apparent in disaggregated data. However, time series of
speculative price changes for stock market shares, grains, and non-ferrous metals
are often modeled as heavy-tailed Pareto-Levy distributions which are poorly
behaved by our earlier definition. These constitute a significant exception, and
there are doubtless other exceptions to what we believe, nevertheless, is a useful
generalization.
   Cross-sectional individual observations reflect numerous socio-demographic,
spatial, and economic effects, some of which can reasonably be viewed as random
additive errors and others as outlying observations among the explanatory
variables; many of these are intertemporally constant, or nearly so. Such particu-
larly large cross-sectional effects have four principal consequences in economet-
rics. One already mentioned is the burst of interest during the last twenty years in
variance-component models. A second effect is the natural proclivity in empirical
research to include a great many (relative to time series) subsidiary explanatory
variables, i.e. socio-demographic and spatial variables of only minor economic
interest. Their inclusion is designed to explain diverse behavior as much as
possible, in the hope of improving estimation accuracy and precision. Third, the
relative amount of explained variation measured by R2 is characteristically lower
in cross sections than in time series despite the many explanatory variables
included. Fourth, anomalous observations are likely to appear in cross sections
more often than in time series.
   Thus, with individual or slightly aggregated observations, resistant estimation
appears especially promising as an alternative estimator and diagnostic tool since
ideosyncratic individual behavior - i.e. behavior explained poorly by the regres-
sion model or a normal error process - pervades cross-section data.
   A strong trend exists for exploiting the information in large data sets based on
sample surveys of individuals, firms, establishments, or small geographic units
such as census tracts or countries. Often these are pooled time series and cross
sections. A volume of more than 700 pages, containing 25 articles, was devoted to
this subject alone [Annales de I’Insee (1978)].2 Research based on social security
records by Peter Diamond, Richard Anderson and Yves Balcer (1976) has
689,377 observations. This major evolution in the type of data used in economet-
rics is a consequence of several factors, not the least of which has been enormous
reductions in computational costs.

  *It includes empirical    studies on investment     by M. Atkinson       and J. Mairesse with about
2300 observations     and R. Eisner with 4800 observations;         economic    returns to schooling    by
G. Chamberlain    with 2700 observations as well as an article on a similar topic by Z. Griliches, B. Hall
and J. Hausman with 5000 observations.
Ch. I I: Diq   Data und Flawed Models                                              651


    Since survey data are notoriously prone to various kinds of mistakes, such as
response or keypunch errors, it is essential to limit their effects on estimation.
Some gross errors can be spotted by examining outliers in each particular data
series, but it is often impossible to spot multivariate outliers. The isolated point in
Figure 1.1 would not be observed by searches of this type. Thus, observational
errors compound the effects of sporadic model failures in ways that are not
overcome by large sample sizes (law of large numbers). Resistant estimation is a
major innovation with the potential for reducing the impact of observational error
on regression estimates.
   To drive home the point that the likelihood of a slightly incorrect model
and/or some bad data force us to change the way we look at those extremely
large cross-section data sets, consider this example: via questionnaires, we obtain
a sample from a certain population of individuals to estimate the mean value of
some characteristic of that population, which is distributed with mean p and
standard deviation u. However, there are “bad” observations occurring with
probability E in the sample due, for example, to keypunch errors, or forms sent to
inappropriate people. The bad points are distributed with mean p + 8 and
standard deviation ka. The mean squared error for the sample mean x,, is
(( 1 - E+ ek*)+ O*e(1 - e)}u*/n. Without loss of generality, suppose u = 1. Then if
0 = 1, k = 2, and E= 0.05 (which are not at all unreasonable), the mean squared
error is 0.0025 + 1.20/n. Obviously there is very little payoff to taking a sample
larger than 1000 observations. Effort would be better spent improving the data.
    Since bounded-influence estimators are designed to limit the influence that any
small segment of the data can have on the estimated coefficients, it is not
surprising that these estimators also contain diagnostic information (much as a
first-order autoregressive coefficient is both part of the standard GLS transforma-
tion and also contains diagnostic/test information). Thus, the GLS compensation
for heteroscedasticity, when computed by weighted least squares (WLS), has a
parallel to an algorithm used in bounded-influence estimation (hereafter often




                                        Figure I. 1
658                                                                    W. S. Krasker et al.

referred to as BIF) that gives weights to the rows of the data matrix: large error
variances are downweighted in WLS while highly influential observations are
downweigbted in bounded-influence estimation. Hence, small weights in BIF
point to influential data. Although computational complexity and costs are higher
for BIF, they are decidely manageable.
   Section 2 considers in more detail some model failures that can arise in
practice. Section 3 describes recent developments in methods for the detection of
influential data in regression. Section 4 is a sketch of the Krasker-Welsch BIF
estimator. Section 5 raises several issues about inference in the resistant case.
Section 6 considers some of the main theoretical foundations of robust and
BIF estimation. Section 7 presents an example of BIF applied to the Harrison-
Rubinfeld large cross-section hedonic price index. Section 8 gives some recent
results on instrumental-variables bounded-influence estimation, and Section 9
discusses resistant estimation for time-series models.




2.    Sources of model failure

In this section we discuss the ways in which the classical assumptions of the linear
regression model are often violated. Our goal is to determine what types of data
points must be downweighted in order to provide protection against model
failures. Specifically, under what conditions should we downweight observations
which have large residuals, “extreme” X rows, or both.
   As we mentioned above, there are two categories of model failures that are
potentially serious. The first consists of “gross errors”, e.g. keypunch errors,
incorrectly recorded numbers, or inherently low precision numbers. The second
derives from the fact that the model itself is only an approximation. Typically an
econometrician begins with a response (dependent) variable together with a list of
explanatory (independent) variables with the full realization that there are in
truth many more explanatory variables that might have been listed. Moreover, the
true functional form is unknown, as is the true joint distribution of the dis-
turbances.
   A reasonable, conventional approach is to hypothesize a relatively simple
model, which uses only a few of the enormous number of potential explanatory
variables. The functional form is also chosen for simplicity; typically it is linear in
the explanatory variables (or in simple functions of the explanatory variables).
Finally, one assumes that the disturbances are i.i.d., or else that their joint
distribution is described by some easily parameterized form of autocorrelation.
All of these assumptions are subject to errors, sometimes very large ones.
   We have described this procedure in detail in order to establish the proposition
that there is no such thing as a perfectly specified econometric model. Proponents of
robust estimation often recommend their robust estimators for “cases in which
Ch. 11: Diry Datu und Flawed Models                                                 659


gross errors are possible”, or “cases in which the model is not known exactly”.
With regard to gross errors the qualification is meaningful, since one can find
data sets which are error-free. However, to point out that robust procedures are
not needed when the model is known exactly is misleading because it suggests
that an exactly known model is actually a possibility.
   If the model is not really correct, what are we trying to estimate? It seems that
this question has a sensible answer only if the model is a fairly good approxima-
tion, i.e. if the substantial majority of the observations are well described (in a
stochastic sense) by the model. In this case, one can at least find coefficients such
that the implied model describes the bulk of the data fairly well. The observations
which do not fit that general pattern should then show up with large residuals. If
the model does not provide a good description of the bulk of the data for any
choice of coefficients, then it is not clear that the coefficient estimates can have
any meaningful interpretation at all; and there is no reason to believe that
bounded-influence estimators will be more useful than any other estimator,
including ordinary least squares.
   The hard questions always arise after one has found a fit for the bulk of the
data, and located the outliers. To gain some insight, consider a data configuration
which arises often enough in practice (Figure 2.1). Most of the data in Figure 2.1
lie in a rectangular area to the left; however, some of the observations lie in the
circled region to the right. Line A represents the least-squares regression line,
whereas line B would be obtained from a bounded-influence estimator, which
restricts the influence of the circled points.
   The fit given by line B at least allows us to see that the bulk of the data are well
described by an upward-sloping regression line, although a small fraction of the
observations, associated with large values of x, deviate substantially from this
pattern. Line A, on the other hand, is totally misleading. The behavior of the bulk
of the data is misrepresented and, worse yet, the circled outliers do not have large
residuals and so might go unnoticed.




                                       Figure 2. I
660                                                                  W. S. Krasker et al.


   What happens as the number of observations in the circle grows large?
Eventually, even the bounded-influence fit will pass near the circle. Indeed, an
estimator which fits the “bulk” of the sample can hardly ignore the circled
observations if they are a majority of the data. In this case there is no linear
model which reasonably describes the vast majority of the observations, so that
bounded-influence estimation would not help.
   With the information provided by fit B, what should we do? There is no unique
answer, for it depends on the purpose of the estimation. If our goal is merely to
describe the bulk of the data, we might simply use the coefficients from the
bounded-influence regression. If we were trying to forecast y conditional upon an
x near the center of the rectangle, we would again probably want to use the
bounded-influence fit.
   If we want to forecast y conditional on an x near the circled points, the
situation is entirely different. The circled points really provide all the data-based
information we have in this case, and we would have to rely on them heavily. In
practice, one would try to supplement these data with other sources of informa-
tion.
   Related to the last point is a well recognized circumstance among applied
econometricians, namely that sometimes a small, influential subset of data
contain most of the crucial information in a given sample. Thus, only since 1974
have relative energy prices shown large variability. If the post-1974 data have a
different pattern from the pre-1974 data (most of the available observations) we
might still prefer to rely on the post-1974 information. While this is a dramatic,
identifiable (potential) change in regression regime where covariance analysis is
appropriate, many less readily identifiable situations can arise in which a minority
of the data contain the most useful information. Bounded-influence regression is
one potentially effective way to identify these circumstances.
   In short, one never simply throws away outliers. Often they are the most
important observations in the sample. The reason for bounded-influence estima-
tion is partly that we want to be sure of detecting outliers, to determine how they
deviate from the general pattern. By trying to fit all the data well, under the
assumption that the model is exactly correct, least squares frequently hides the
true nature of the data.


3.    Regression diagnostics

While realistic combinations of data, models, and estimators counsel that estima-
tors restricting the permissible influence of any small segment of data be given
serious consideration, it is also useful to describe a complementary approach
designed to detect influential observations through regression diagnostics. While
weights obtained from bounded-influence estimation have very important di-
Ch. 1I: Dirty Data and Flawed Models                                                                    661


                                                 Table 3.1
                                                 Notation

   Population   regression                                     Estimated regression
   Y=XB+&                                                      v=Xb+eandC=Xb

   y: n x 1 column vector for response variable                same
   X: n x p matrix of explanatory variables                    same
   p: p X 1 column vector of regression parameters             b: estimate of p
   E: n X 1 column vector of errors                            e: residual vector: y - j
   0 * : error variance                                        s*: estimated error variance

   Additional notation
   x,: i th row of X matrix                                    b(i): estimate of p when i th row
                                                                      of X and y have been deleted
   X,: j th column of X matrix                                 s*(i): estimated error variance when
   X(i): X matrix with i th row deleted                                i th row of X and y have been
                                                                       deleted




agnostic content, alternative diagnostics that are more closely related to tradi-
tional least-squares estimation provide valuable information and are easier to
understand.
   An influential observation is one that has an unusually large impact on
regression outputs, such as the estimated coefficients, their standard errors,
forecasts, etc. More generally, influential data are outside the pattern set by the
majority of the data in the context of a model such as linear regression and an
estimator (ordinary least squares, for instance). Influential points originate from
various causes and appropriate remedies vary accordingly (including, but not
restricted to, bounded-influence estimation). Diagnostics can assist in locating
errors, allowing the user to report legitimate extreme data that greatly influence
the estimated model, assessing model failures, and possibly direct research toward
more reliable specifications.3
    Two basic statistical measures, individually and in combination, characterize
influential data: first, points in explanatory-variable (X)-space far removed from
 the majority of the X-data, and scaled residuals which are, of course, more
 familiar diagnostic fare. We now turn to influential X-data, or leverage points. As
described above, an influential observation may originate from leverage, large
 regression residuals, or a combination of the two. A notational summary is given
by Table 3.1. We note that b = ( X=X) - ‘XTy for OLS and call H = X(X=X) - ‘XT
 the hat matrix with elements hik = xi( X=X)-‘x;f. Then 9 = Xb = Hy which is
how the hat matrix gets its name. We can also describe the predicted values as
ji = cl=, hi, y,. Using the above results the last expression can be rewritten as



  3 This section is a condensed   summary   of material   in chapter   2 of Belsley, Kuh and Welsch (1980).
662                                                                   W. S. Krasker et al.


I’, = C ktihik~k + hiiyi. Thus, the impact of y, on gi is controlled by the corre-
 sponding diagonal element hii( = hi).
    There is also a direct distance interpretation of hi. Let X be the X-matrix
centered by column means K, so that 6, = (xi - Z)( XTX)- ‘(xi - _QT. It is
 apparent that large 6, are relatively far removed from the center of the data
measured in the (X=X) coordinate system. For simple bivariate regression




so that a large hat matrix diagonal corresponds in the most transparent fashion to
a point removed from the center of the data.
   Since H is a projection matrix, it has the following properties:
 (i)   0 <hi<1
(ii)   Chi = p.
Thus a perfectly balanced X-matrix - one with equal leverage for all
observations-is    one for which hi = p/n. As further elaborated in Belsley, Kuh
and Welsch (1980), when hi exceeds 2 p/n (and certainly when it exceeds 3 p/n),
we are inclined to consider that row of data as potentially influential.
   Relatively large residuals have long been viewed as indicators of regression
difficulties. Since for spherically distributed errors the least-squares error variance
for the ith observation is a2( 1 - hi), we will scale residuals by 62(1 - hi). Instead
of using s (the sample standard deviation) estimated from all the data to estimate
u, we prefer to use s(i) (the sample standard deviation excluding the i th row) so
that the denominator is stochastically independent of the numerator. We thus
obtain the studentized residual:

                                                                                   (3.1)


This has the t-distribution when E is normally distributed and, interestingly, 1 - hi
provides a link between the regular OLS residual, ei, and the predicted residual:

       y, - xib(i)   =   A?-
                         l-h;                                                      (3.2)

Furthermore, the standardized predicted residual is just the studentized residual
(3.1). Since the least-squares estimator works to reduce large observed residuals,
especially at leverage points, residuals (however scaled) need to be augmented by
leverage information.
Ch. I I: Dirty Data and Flawed Models                                              663

  One can observe the influence of an individual data row on regression estimates
by comparing OLS quantities based on the full data set with estimates obtained
when one row of data at a time has been deleted. The two basic elements, hat
matrix diagonals and studentized residuals, reappear in these regression quantities
which more directly reflect influential data. We will restrict ourselves here to two
such row deletion measures: the predicted response variable, or fitted values, and
coefficients. Thus, for fitted values jJi = xi& we have

       Xib-Xib(i)=xi(b-b(i))=~.                           I




We measure this difference relative to the standard error of the fit here estimated
by s(i)fi, giving a measure we have designated

       DFFITS_
                 1 s(i)&[l-hi
                 =

                           I ei*
                      hiei/(l-    ‘i)     =          ‘i       “*   *
                                                                                 (3.3)

It is evident that the ith data point:
(i)    will have no influence even if 1e: 1 is large provided hi is small, reinforcing
       our belief that residuals alone are an inadequate diagnostic, and
(ii)   that substantial leverage points can be a major source of influence on the fit
       even when 1e: 1 is small.
  A second direct measure of influence is the vector of estimated regression
coefficients when the ith row has been deleted:

                                        ( xTx)-‘x:eei
       DFBETAi       = b - b(i)   =
                                              l-hi             .


This can be scaled by s( i)diag /( XTX) -’ yielding an expression called
DFBETAS.     The expression for DFBETA closely resembles Hampel’s definition of
the influence function as described subsequently in Section 4. It is clear from
inspection that DFBETA and the corresponding influence (4.7) are unbounded
for OLS. We observe once again that (conditional on X) the absence (presence) of
a data row makes a more substantial difference when 1e? I is large and/or hi is
large.
   There is another way of viewing the influence of the ith data row that is based
on fitted values and hi. If we definejji(i) = x,b(i), then it can be shown that pi for
the full data set is the following weighted average of gi( i) and y,:

                                                                                 (3.5)
664                                                                   W. S. Krasker et al.

When leverage is substantial for the ith row, the predicted quantity depends
heavily on the ith observation. In the example of Section 7, the largest hat matrix
diagonal in a sample of 506 observations is 0.29, so that one-fifth of 1 percent of
the data has a weight of nearly l/3 in determining that particular predicted value.
Such imbalance is by no means uncommon in our experience.
   When several data points in X-space form a relatively tight cluster that is
distant from the bulk of the remaining data, the single row deletion methods
described here might not work well, since influential subsets could have their
effects masked by the presence of nearby points. Then various multiple subset
deletion procedures (which can, however, become uncomfortably expensive for
large data sets) described in Belsley, Kuh and Welsch (1980) may be used instead.
We have also found that partial regression leverage plots (a scatter diagram of
residuals from y regressed on all but the jth column of X plotted against
the residuals of column Xi regressed on all but the jth column of X, its OLS
slope is just b,) contain much highly useful qualitative information about the
“masking” problem alluded to here. However, when we turn to bounded-
influence regression, we find that the weights provide an alternative and valid
source of information about subset influences. This fact enhances the diagnostic
appeal of BIF.


4.    Bounded-influence regression

In this section we sketch the main ideas behind the Krasker-Welsch bounded-
influence estimator. More details may be found in Krasker and Welsch (1982a).
   The notation which we will find most useful for our treatment of bounded-
influence estimation is
      y, = xip + u;,           i=l ,*.*, n.                                        (44
For the “central model” we will suppose that the conditional distribution of ui,
given xi, is N(0, a2). For reasons which were discussed in detail in earlier sections,
one expects small violations of this and all the other assumptions of the model.
Our aim is to present an estimator which is not too sensitive to those violations.
   To study asymptotic properties such as consistency and asymptotic normality
of estimators for /3, one usually assumes

      plim iXTX=           Q                                                       (4.2)
      n+m
or, equivalently,

       plim 1 t         xTxi = Q,                                                  (4.3)
      rl’cc   n   ;=1
Ch. 11: Dirty Data and Flawed Models                                              665

where Q is non-singular. This will hold provided E(xTx) exists and is non-singu-
lar, where the expectation is over the marginal distribution of x.
   When these assumptions hold, the OLS estimator b has many desirable
properties. In particular, b is asymptotically efficient, with


        &(b-+)+N(O,a*Q-‘)                                                       (4.4)

in distribution.
   As we have seen, least squares is quite sensitive to certain violations of the
assumptions. Though formal, less sensitive alternatives have not been widely used
in applied work, econometricians often do attempt to protect themselves against
model or data failures. For example, a common practice in applied work is to:
         run an OLS regression,
G$       examine the observations with large residuals to determine whether they
         should be treated separately from the bulk of the data, and
(iii)    run another OLS regression with observations deleted, or dummy variables
         added, etc.
   In Section 3 we learned that this practice is not fully satisfactory, since
influential observations do not always have large least-squares residuals. Con-
versely, a large residual does not necessarily imply an influential observation. If
we replace the word “residuals” in (ii) by “1DFFITSI”, the three-step procedure
is much improved; and one might ask whether there is any real payoff to using a
more formal procedure. The answer is that the simple procedure of examining
those observations with large 1DFFITS 1 is not too bad in small samples, but one
can do considerably better in large samples. We can explain this as follows: for
any reasonable estimator, the variability goes to zero as the sample size goes to
infinity. On the other hand, a process which generates gross errors will often
generate them as a certain proportion of the data, so that the bias caused by gross
errors will not go to zero as the sample size increases. In these circumstances, bias
will often dominate variability in large samples. If the concern is with mean
squared error, one must therefore focus more on limiting bias as the sample size
increases. In small samples it suffices to examine only highly influential observa-
tions, since gross errors which are not too influential will cause only a small bias
relative to the variability. In large samples, where the variability is very small, we
must be suspicious of even moderately influential observations, since even a small
bias will be a large part of the mean squared error. If one used the informal
three-step procedure outlined above, these considerations would lead us to delete
a larger and larger fraction of the data as the sample size increased. As stated in
the introduction, it is better to have a formal procedure which smoothly down-
weights observations according to how influential they are.
666                                                                  W. S. Krasker et al.


    We will now introduce two concepts, the influence function Q and the sensitiv-
 ity y, which are applicable to an arbitrary estimator b. Essentially, the influence
 fi(yi, xi) of an observation (y,, xi) approximates its effect (suitably normalized)
 on the estimator B, and y is the maximum possible influence of a single
 observation. Our formal definition of influence is based on what is called the
 “gross error model”.
    Consider a process which, with probability 1 - E, generates a “good” data point
( y,, xi) from the hypothesized joint distribution. However, with probability E, the
process breaks down and generates an observation identically equal to some fixed
( y,,, x0) [a (p + 1)-vector which might have nothing to do with the hypothesized
joint distribution]. That is, with probability E, the process generates a “gross
error”
  1      which is always equal to (yO, x0). Under these circumstances the estimator
/3 will have an asymptotic bias, which we can denote by C(E, y,,, x0). We are
interested mainly in how C(E, y,, x,,) varies as a function of (yO, x0) for small
levels of contamination, E. Therefore, we define


      O(y,, x0) = lim
                        C(h Yo, x0)
                            E                                                     (4.5)
                  EL0

Note that C(E, yO, x,,) is approximately &(ya, x0) when E is small, so that
&(y,,, x0) approximates the bias caused by e-contamination at (yo, x0). ti is
called the influence function of the estimator B. If D is a bounded function, B is
called a bounded-influence estimator.
   For the least-squares estimator b, one can show that the influence function for
b is


                                                                                 (4.6)

where Q was defined in (4.2). Note that b is not a bounded-influence estimator.
   The next thing we will do is define the estimator’s sensitivity, which we want to
think of as the maximum possible influence (suitably normalized) of a single
observation in a large sample. The most natural definition (and the one intro-
duced by Hampel) is

      maxllQ(h411,                                                               (4.7)
      Y.X

where I].II is the Euclidean norm. The problem with this definition is that it
depends on the units of measurement of the explanatory variables. If we change
the units in which the explanatory variables are measured, we trivially, but
necessarily, redefine the parameters; and the new influence function will generally
not have the same maximum as the original one.
Ch. I I: Dirty Data and Flawed Models                                                 661

   Actually, we want more than invariance to the units of measurement. When we
work with dummy variables, for example, there are always many equivalent
formulations. We can obtain one from another by taking linear combinations of
the dummy variables. The list of explanatory variables changes, but the p-dimen-
sional subspace spanned by the explanatory variables stays the same. This
suggests that the definition of an estimator’s sensitivity should depend only on the
p-dimensional subspace spanned by the explanatory variables and not on the
particular choice of explanatory variables which appears in the regression.
   We can gain some insight into a more reasonable definition of sensitivity by
considering the change in the fitted values 9 = Xb. The effect on p of a gross error
(y, x) will be approximately XQ(y, x). The norm of this quantity is


                                x)y.
      IIX~(Y~411= (Q(Y,X)‘X’XQ(Y,                                                   (4.8)

When /? is invariant (so that 9 depends only on the subspace spanned by the p
explanatory variables), expression (4.8) will also be invariant.
   While (4.8) provides invariance, it only considers the effects of the gross error
(y, x) on the fitted value x/?. If we are interested in estimating what would
happen for new observations on the explanatory variables x* we would want to
consider the effect of the gross error on the estimated value, x * b.
   We will be concerned when the effect of the gross error, x,0(2( y, x), is large
relative to the standard error (x,Vx T*) ‘1’ of x* B, where V denotes the asymp-
totic covariance matrix of B and L?(y, x) is its influence function. These consider-
ations lead us to consider


                                                                                    (4.9)

as our measure of sensitivity for the particular explanatory variable observations,
x*. However, we often do not know in advance what x* will be, so we consider
the worst possible case and use


      max max Ix*O(y’ x)I = max{OT(y x)v-ifi(y,               x)}t’* E y          (4.10)
      .Y,X x* (X*Vxr*)“*    .Y,x     ’


as our definition of sensitivity. This definition of sensitivity is also invariant to the
coordinate system.
   An estimator B is called a bounded-influence estimator if its influence function,
s2, is a bounded function; or, equivalently, if its sensitivity, y, is finite. The
668                                                                  W. S. Krasker et al.

bounded-influence property is obviously desirable when gross errors or other
departures from the assumptions of the model are possible. In this section we will
study weighted least-squares (WLS) estimators with the bounded-influence prop-
erty.
   Though OLS is usually expressed in matrix notation:

      b = (X=X)-‘xTy,                                                           (4.11)

it is more convenient for our purposes to use an earlier notation, the “normal
equations”:


      0=   5 (y; - x;b)xT.                                                      (4.12)
           i=l

A WLS estimator b is an estimator of the form


      o= k wi’(yi-xi@x’.                                                        (4.13)
           i=l



(This could be expressed in matrix form as b = ( XTWX) - ‘XTWY, where W is a
diagonal matrix.) The weight wi will depend on y,, xi, and B and will also depend
on the estimated scale B (see Section 6). The w; = w(y,, xi, 8) will usually be equal
to one, although certain observations may have to be downweighted if the
estimator is to have the bounded-influence property.
   One can .show that under general conditions the influence function of a
weighted least squares estimator is

      Sl(y,x)=w(y,x,P)(y-xp)B-‘x=                                               (4.14)

for a certain p x p matrix B, and the estimator’s asymptotic covariance matrix
will be




        =dB-’         Ew(y,xJ?)   ~(z_IQTE~~=~](B-~)~
                  [

        =o~B-‘A(B-‘)~,                                                          (4.15)


where the expectation is over the joint distribution of (y, x) and A is defined as
Ch. 1 I: Dirty Data and Flawed Models                                            669

the p x p matrix in the square brackets. It follows that




                                  Y ,“P   lx~   - lxT)1/2_
        = maxw(y,      x,P)                                                  (4.16)
           Y.X                I           I


   This is a good point at which to recapitulate. First of all, we adopted a
definition of sensitivity which essentially reflects the maximum possible influence,
on linear combinations of the estimator fi, of a single observation. Since ordinary
least squares has infinite sensitivity, we considered the more general class of
weighted least-squares (WLS) estimators. We then derived an expression for the
sensitivity of an arbitrary WLS estimator, which has a nice interpretation. We see
that, apart from the weights, the influence of ( y, x) has two components. The first
is the normalized residual (y - x&/a. The second is the quadratic expression
XA- ‘xT, which should be thought of as the square of a robust measure of the
distance of x from the origin.
   Suppose that we desire an estimator whose sensitivity y is < a, where a is some
positive number. One reasonable way to choose from among the various candi-
date estimators would be to find that estimator which is “as close as possible” to
least squares, subject to the constraint y 6 a. By this we mean that we will
downweight an observation only if its influence would otherwise exceed the
maximum allowable influence. An observation whose influence is below the
maximum will be given a weight of one, as would all the observations under least
squares. In this way we might hope to preserve much of the “central-model”
efficiency of OLS, while at the same time protecting ourselves against gross
errors. Formally, suppose we require y G a for a > 0. If, for a given observation
(y,, xi), we have



     Iy I
       y.-xg
                  {xiA-‘XT}“2 <a,                                            (4.17)


then we want w( y,, xi, B) = 1. Otherwise, we will downweight this observation just
enough so that its influence equals the maximum allowable influence, i.e. we set
W(Yl,xi) b) so that


                                                                             (4.18)
670                                                                                        W. S. Krusker et al.

The weight function must therefore satisfy

                                                               a
      W(Yi,x;,~)=min                    1,                                                            (4.19)
                                                 y- - x.B
                                    i            ”        {xiA~‘Xr}“2          1.
                                             I             1

   Recall that under our “central model”, the conditional distribution of (y -
~/!!)/a, given x, is N(O,l). Let 17denote a random variable whose distribution,
given x, is N(0, 1). Plugging (4.19) into the expression for A, we find




        = Ex[ E,,.min{            v2, -$--p)]xTx


        = E,r                                                                                         (4.20)


where

      r(t) = EV,,min{q2, t2}.                                                                         (4.21)

One can show that the matrix A satisfying (4.20) will exist only if a > fi.                             This
suggests the following estimator for /3. Choose a > fi. Find A to satisfy


      A=$,
         ,=, i (xiA-:xy
                      xTx;;                            1                                              (4.22)


then find b* to satisfy

            n
                                                       a
      O=Cmin            1,                                                 (y, - X$*)X:.              (4.23)
          i=l                    Yi -o:ib*         lXi~    - Ix;}l/2
                    i                                                  1
                             I                     I

One can show that b*, which is called the Krasker - We&h estimator, has the
following properties.
(1)   b* is consistent           and asymptotically                normal when the assumptions       of the
      model hold.
Ch. II: Dirfy Data and Flawed Models                                            611

(2)   The sensitivity y of b* equals a.
(3)   Among all weighted least-squares estimators for p with sensitivity G a, b*
      satisfies a necessary condition for minimizing asymptotic variance (in the
      strong sense that its asymptotic covariance matrix differs from all others by
      a non-negative definite matrix).
   To fully define this estimator we need to specify a. We know that a > fi,
providing a lower bound. Clearly when a = co, the bounded-influence estimator
reduces to least squares. In practice we want to choose the bound a so that the
efficiency of BIF would not be too much lower than the least-squares efficiency if
we had data ideal for the use of least squares. This usually means that X is taken
as given and the error structure is normal. The relative efficiency then would be
obtained by comparing the asymptotic variances a*( XTX) -’ and a2V(a) where
V(u)=K’a2B-‘(u)A(u)B_‘(a).
   There is no canonical way to compare two matrices. The trace, determinant, or
largest eigenvalue could be used. For example, the relative efficiency could be
defined as


                 det[ e’( XTX)-‘1      “’
      e(u) =                                                                (4.24)
                    det[a2V(u)]

and then a found so that e(u) equals, say, 0.95. This means we would be paying
about a 5 percent insurance premium by using BIF in ideal situations for
least-squares estimation. In return, we obtain protection in non-ideal situations.
   The computations involved in obtaining a for a given relative efficiency are
complex. Two approximations are available. The first assumes that the X data
comes from a spherically symmetric distribution which implies that asymptoti-
cally both the OLS covariance matrix and V(u) will be diagonal, say a( u)Z. Then
we need only compare a21 to u2a(a)Z which means the relative efficiency is just
e(u) = ar- ‘(a). This is much easier to work with than (4.25) but makes unrealistic
assumptions about the distribution of X.
   The simplest approach is to examine the estimator in the location case, Then
 V(u) and XTX are scalars. It is then possible to compute the relative efficiencies
because the BIF estimator reduces to a simple form. When the a value for
location is found, say UL, we then approximate the bound, a, for higher dimen-
sions by using a = aLfi. Further details may be found in Krasker and Welsch
(1982a) and Peters, Samarov and Welsch (1982).
   We would now like to show briefly how the concepts of bounded-influence
relate to the regression diagnostics of Section 3. Full details may be found in
Welsch (1982). Consider again the “gross error model” introduced above. Assume
that our “good” data are (xk, yk), k * i, and the suspected bad observation is
672                                                               W. S. Krasker ei al.


Cxiv Yi)* Thenwe can show that the potential influence [what would happen if we
decided to use (x,, y,)] of the ith observation on b(i) is

       L?(x,,y,,b(i))=(n--l)[XT(i)X(i)]-’x?(yi-x$(i))                        (4.25)

                            =(Fz-l)(X=X)-‘x~(yi-xiZ?)/(l-hi)2.               (4.26)

Note the presence of the predicted residual (3.2) in (4.25).
  The analog to V in (4.16) turns out to be

       V(i) = (n-        l)s2(i)[XT(i)X(i)]-‘.                               (4.27)

Therefore, the norm for our measure of sensitivity (4.11) is




which, after some matrix algebra, is just


        (n_l)       hi      (YieXibti))'
                                                                             (4.28)
                  l-h;            s2(i)


or


                    h.        (Y~-x$)~
        (n-l)--                                                              (4.29)
                  lmhi      S2(i)(l-hi)2


Comparing this to (3.3), we obtain that (4.29) is equivalent to

       (n - l)“2]DFFZTSi],‘(l              - hi)“2.                          (4.30)

     To bound the influence, we require that

       max(n - l)“2]DZ’FZTSi]/(l-                 hi)“2   < a,
         i



which clearly implies that

       (n - l)“2]DFFzTSi]          <a.
Ch. 11: Dirty Data and Flawed Models                                              613

The simple choice of a for BIF discussed above was urfi.       For location,

                     n’/*    e.
     DFFITS,     = -        L
                   n-1      s(i)’


and we might consider (n - l)‘/*) DFFITS,l     large if it exceeded 2. Hence, aL
around 2 is good for diagnostic purposes.
   Clearly (4.30) could have been chosen as our basic diagnostic tool. However,
DFFITS has a natural interpretation in the context of least squares and therefore
we feel it is easier to understand and to use.



5.   Aspects of robust inference

When we estimate the coefficient vector p in the linear model yi = xip + ui, it is
usually because we want to draw inferences about some aspect of the conditional
distribution of y given x. In forecasting, for example, we need a probability
distribution for the response variable, conditional on a particular x. Alternatively,
we might want to know how the conditional expectation of the response variable
varies with x.
   In this section we analyze the problems that are created for inference by the
fact that the linear model will never be exactly correct. To be sure, failures of
linearity that occur for extreme values of the x-vector will always show up in a
bounded-influence regression. However, gradual curvature over the entire range
of X is much more difficult to detect. Moreover, departures from linearity in
extreme regions of the x-space are sometimes very difficult to distinguish from
aberrant data. Unfortunately, there are applications in which the distinction can
be important.
   To illustrate this point, consider the data plotted in Figure 5.1, and suppose
that we are trying to predict y, conditional upon x = 4. Obviously, the outlier is
crucial. If these were known to be good data from a linear model, then the outlier
would be allowed to have a large effect on the prediction. On the other hand, if
the outliers were known to be erroneous or inapplicable for some reason, one
would base inferences about ( y 1x = 4) on the remaining nine observations. The
prediction for y would be substantially higher in the latter case; or, more
precisely, the probability distribution would be centered at a larger value.
   There is a third possibility: namely that the true regression line is slightly
curved. With the data in Figure 5.1 even a small amount of curvature would make
the outlier consistent with the rest of the sample. Were such curvature permitted,
one would obtain a prediction for (ylx = 4) lying between the two just men-
tioned.
674                                                                          W. S. Krasker et al.




                6




                                      -----   OLS
                                      -       OLS with quadratic term
                                      --      OLS with outlier deleted




                         I     2       3       4         5         6     x


                                      Figure 5.1



  With data as simple as those in Figure 5.1, one could do a satisfactory job by
computing three different fits and weighting them subjectively. The resulting
probability distribution for y would be trimodal. However, this approach will not
work with larger, multivariate regression problems. It seems that one has to use a
model that builds-in the possibilities of bad data and curvature. As an illustration
we will describe an approach proposed by Krasker (198 1). Suppose that there are
bad data occurring with probability E, and that the good data are generated by a
process satisfying




with (ui/u[xi, 8, a) - N(0, 1).
  For a bad (yi, xi) observation, suppose that (y,lx,) has a density h(yzlxi, CX)for
some parameter (Y. In order to apply this approach one has to make specific
Ch. II: Dirty Data and Flawed Models                                               615

choices for R and h. Krasker proposed a uniform distribution for h:

     h(ylx,a)    = a     for ally.

Strictly speaking this is only a probability distribution when limited to an interval
of length ~/CL The practical implication is that the parameter (Yought to be small
enough for all the yi to lie in an interval of length I l/a. The uniform
distribution reflects the notion that a gross error “could be anywhere”.
   For R, Krasker used




This makes sense provided yj * 0 for all j. However.

             exP{Y,xj)-1
     lim
     Y,- 0
                             = xi,                                               (5.0
                   vi

so that one can extend the definition of R even to y = 0. Eq. (5.1) shows that
when y is small, R(x, p, y) is nearly linear in x.
  Given x and the parameters, the density for y is the mixture




where cpis the density for N(0,1). The likelihood function is




The likelihood function will often be multimodal, for essentially the same reason
that the subjective weighting of three fits for the data in figure 5.1 would lead to a
trimodal probability distribution for y. Consequently, maximum likelihood is not
adequate; one has to work with the entire likelihood function. Krasker’s approach
is Bayesian. Given a prior p(/3, y, u, E,a) for the parameters, one can find the
posterior marginal distribution for any quantity of interest [such as some pi or
R( x, & y)] by numerical integration.
   In most problems the priors on /3 and u would be relatively diffuse. However,
the prior information on the other parameters is sometimes crucial. This is
particularly true for y, which in a sense represents the amount of curvature in the
regression surface. If, as is usually the case, the variables were transformed
beforehand in order to make a linear model plausible, then one would choose a
prior under which y is near zero with high probability.
616                                                                   W. S. Krasker et al.

6.    Historical background

In this section we provide a brief overview of the history and structure of
bounded-influence estimation. For more background on classical robust estima-
tion see Huber (1981) and Barnett and Lewis (1978, ch. 4). Koenker (1982)
provides a good survey of robust procedures.
   Huber (1973) proposed a form of robust regression based on a direct generali-
zation of his work on the robust estimation of location parameters. His approach
was to define

               t2/2           ItI < c,
      PCW =                                                                        (6.1)
              i cltl - c2/2   ItI 2 c,

and then minimize


                                                                                   (6.2)

with respect to fi and u. (The constant d is used to make the scale estimate
consistent.) The influence function is

      52(y,x)=IC/,[(y-xp)/ulB-‘xT,                                                 (6.3)

where q,(t) = pL( t) and B is a certain p x p matrix. Even though + .( 0) limits the
effect of large residuals, the influence of ( y, x) can be arbitrarily large because xT
multiplies $,(a). This form of robust regression should be used with caution if
there is a potential for outlying observations in the x data. Huber, and especially
Hampel (1973), also stress this point.
   Many other criterion functions like (6.1) can be considered [Holland and
Welsch (1977)]. Those that have non-monotone $J(.) functions are of special
interest in regression because these functions are often zero for large residuals and
hence remain zero when multiplied by xT. However, they will not be bounded-
influence estimators in all regions of the x-space and, because of the possibility of
multiple solutions to (6.Q need a bounded-influence start to be effective.
   Mallows (1973, 1975) proposed a way to construct bounded-influence estima-
tors by, in essence, modifying (6.2) to read


      do + t, u+;)P,[(Y,      - x,P)/u]                                            (6.4)


for certain weights u(xi) which may depend on the entire X-matrix and not just
Ch. II: Dirty Data and Flawed Models                                              677


xi. The influence function

      WY,4 = ~wd(Y                       - xwJl~-‘xT,                            (6.5)
where the B-matrix is not the same as in (6.3). If u is appropriately chosen, then D
will be bounded. Some optimality results for this form are contained in Maronna,
Bustos and Yohai (1979).
   There is one problem that is immediately apparent. Outlying points in the
X-space increase the efficiency of most estimation procedures. Any downweight-
ing in X-space that does not include some consideration of how the y-values at
these outlying observations fit the pattern set by the bulk of the data cannot be
efficient.
   In 1975, Schweppe [Handschin et al. (1975)] proposed essentially the form


      da    +    ,$,   ao2(xi>Pc[(Yi         -xi~n)/av(xi)l~                    (6.6)
with o(xi) = (1 - hi)‘12 and hi = xi( X’X)- ‘XT.Again, (6.6) can provide bounded
influence but with the additional property that if (y - xp)/uu(x)        is small, the
effect of o(x) will be cancelled out. This has the potential to help overcome some
of the efficiency problems outlined for the Mallows approach. Hill (1977)
compared, via Monte Carlo, the Mallows and Schweppe forms along with several
others and found that these two dominate, with the Schweppe form having an
advantage.
   Welsch (1977) tried a more direct approach to overcoming these efficiency
problems. If the ith observation is an outlier in X-space (perhaps indicated by a
large value of h,), but (yi, xi) is consistent with the fit obtained from the rest of
the data, DFFITS, [see (3.3)] would not be unduly large. Thus, Welsch proposed
solving

       i        w,(_&- x#)x;=           0,
      i=l

where wi = w(DFFITSi)                  and w( .) is a weight function such as



This is just one iteratively-reweighted least-squares step of (6.6) with o(xi) = (l-
/z,)//z~/~. Hinkley (1977), motivated by the jackknife, has proposed a similar class
of estimators.
   Without some additional criteria there is no way to choose among these
approaches. A natural criterion, suggested by Hampel (1968), is to minimize the
asymptotic variance subject to a bound on the influence function.
678                                                                                           W. S. Krasker et al.

   In the single parameter case this problem was solved by Hampel (1968). The
multiparameter case was first considered in 1976 in several talks at Bell Laborato-
ries by Hampel [see Hampel (1978) for further discussion] and at about the same
time by Krasker during his doctoral research at M.I.T. [Krasker (1978, 1980)].
   Krasker examined the very general class of estimators


      O=        2 +(_YiYxjYPn)
               i=l
                                                                                                             (6.8)

for some function +: R X RJ’X RJ’+ RJ’and showed that the estimator defined by

      o=        2     +c(I(Yi-Xi&)B-‘XTI)      (v,_x,p               )xT
                                                                                                            (6.9)
               ;=,        I(yi-x;&)B-‘XTI            ’        ’*           I’

with the side condition

      B    _    -    a,+c(lb - x@B-‘XTI)        (v       _   xp)x’

                    afi      lb - xkw-‘xTI
                                                                           3




minimizes the trace of the asymptotic covariance matrix when a bound is placed
on y.
  In Section 4 we restricted attention to estimators of the form


      O= f: w(Yi,xi,Pn)(Yi-xiPn)xT,                                                                        (6.10)
               i=l


where & is the estimate of p and the weight function w is non-negative, bounded,
and continuous.


7.    Bounded-influence estimates for a hedonic price index

Our example is drawn from a study by Harrison and Rubinfeld (1978), in which a
hedonic price index for housing is estimated for use in a subsequent calculation of
the marginal-willingness-to-pay for clean air.4 Hedonic price indexes were intro-
duced into recent econometrics literature by Griliches (1968). In essence, a
hedonic price index is obtained from the fitted values in a regression where price
is the response variable and the explanatory variables represent its qualitative

   4Section 4.4 of Belsley, Kuh and Welsch (1980) provides           a description   of the Harrison-Rubinfeld
problem as well as detailed regression diagnostics for it.
Ch. I1 : Dirty Data and Flawed Models                                                             679

                                                     Table 7.1
                                        Definition    of model variables

            Symbol                                          Definition

            LMV               logarithm of the median value of owner-occupied        homes
            CRIM              per capita crime rate by town
            ZN                proportion of a town’s residential land zoned for lots
                              greater than 25 000 square feet
            IND US            proportion of nonretail business acres per town
            CHAS              Charles River dummy variable with value 1 if tract
                              bounds on the Charles River
            NOXSQ             nitrogen oxide concentration    (parts per hundred million)
                              squared
            RM                average number of rooms squared
            AGE               proportion of owner-occupied      units built prior to 1940
            DIS               logarithm of the weighted distances to five employ-
                              ment centers in the Boston region
             RAD              logarithm of index of accessibility to radial highways
             TAX              full-value property-tax  rate (per $10 000)
             PTRA TIO         pupil-teacher   ratio by town
             B                ( Bk - 0.63) 2 where Bk is the proportion of blacks in the
                              population
             LSTAT            logarithm of the proportion of the population that is
                              lower status




                                                     Table 7.2
                               OLS estimates:         Housing-price      equation

                                         Coefficient                   Standard
           Variable                       estimate                       error      t-statistic

           INTERCEPT                   9.758                          0.150            65.23
           CRIM                     -0.0119                           0.00124         - 9.53
           ZN                          7.94x 10-5                     5.06 x 1O-4       0.16
           INDUS                       2.36 x 1O-4                    2.36x 1O-3        0.10
           CHAS                        0.0914                         0.0332             2.75
           NOXSQ                    - 0.00639                         0.00113         - 5.64
           RM                          0.00633                        0.00131            4.82
           AGE                         8.86 x 10-S                    5.26 x 1O-4        0.17
           DIS                      -0.191                            0.0334          - 5.73
           RAD                         0.0957                         0.0191             5.00
           TAX                      -4.20~    1O-4                    1.23 X 10m4     - 3.42
           PTRA TIO                 -0.0311                           0.00501         -6.21
           B                           0.364                          0.103              3.53
           LSTAT                    -0.371                            0.0250         - 14.83
               R2 = 0.806               SER = 0.182
680                                                                                                               W. S. Krasker et al.

                                   NQRMAL          PRORARILITY           PLOT   OF KKU.?42_RSTUDENT
        5.0




        2.5




       -2.5
                            :.
                  .   . .


       -5.
         -3.00              -2.00             -I     .00          0.00            I .00         2.00          3.00            4.00

                                                                                                       INVERSE-NORMAL..
                 ROBUST          EQUATION          IS:     Y=0.859406X+0.019109

              Figure 7.1.         Normal     probability plot for studentized residuals             from OLS estimates;
                                                        housing-price equation.



determinants. Harrison and Rubinfeld are principally interested in examining the
impact of air pollution (as measured by the square of nitrogen oxide concentra-
tion, NOXSQ) on the price of owner-occupied homes. Thus, their hedonic price
equation includes NOXSQ and thirteen other explanatory variables as indicators
of qualities that affect the price of houses.
   The basic data are a sample of 506 observations on census tracts in the Boston
Standard Metropolitan Statistical Area (SMSA) in 19705 and the variables used
are defined in Table 7.1. This study includes many socio-demographic variables at
a relatively disaggregated level in common with many other current cross-section
studies.
   Table 7.2 reports least-squares estimates of eq. (7.1). The normal probability
plot of studentized residuals in Figure 7.1 provides an instructive first diagnostic
step. Substantial departures from normality are clearly evident, since large
residuals are disproportionately present. Thus, at least for these observations, the
potential exists for strongly influential observations.

   5The original       data       together   with a list of the census            tracts   appear   in Belsley,     Kuh and Welsch
(1980).
Ch. 1 I: Dirty Data and Flawed Models                                                                                                                       681


7.1.       The model

The hedonic housing-price model used by Harrison and Rubinfeld is

         LMV=P,+P,CRIM+P,ZN+P,INDUS+P,CHAS+P,NOXSQ
                       +&RM+&AGE                                   +P,DIS+P,,RAD+P,,TAX+P,,PTRATIO
                       +&B+&,LSTAT+E.                                                                                                                 (7.1)

A brief description of each variable is given in Table 7.1. Further details may be
found in Harrison and Rubinfeld (1978).


7.2.       Partial plots

Two partial-regression leverage plots (see the end of Section 3 for their descrip-
tion) reveal helpful information of both positive and negative import. Figure 7.2
for NOXSQ, a variable of major concern, reveals a scatter which is not obviously


                                          SCATTER                FLOT        Of     YRES_NOXSCi                    VS XRES_NOXSO
          ! .00
    i
    E
    s
    k
    0                                                 . .
    x 0.40
    S                                           ,..
                                                                   . .’ .             ’                .
                                            .         *
                                                          *.                                  ..  .        .


    a
                                                            :’

                                                                        ,’     _.         .




        -0.20
                             .        .                           .:.
                                                                  . *        “‘:”                     ..
                                                                                . .
                                                                                      .       .




           -2.00                 -t       .00                           0.00                                   I .00            2.00                 3.00

3                                                                                                                               XRES_NOXSO           XI0
                   REGRESSION         EQUATION                   IS:         Y=-63.8161                        X-7.324914E-09

          Figure 7.2.    Partial-regression                 leverage plot for bs (NOXSQ),                              SE = 0.00113; housing-price
                                                                      equation.
682                                                                                         W. S. Krasker et al.

                                  SCATTER   PLOT    Of’ YRES_CRIM      VS XRES_CRIM
           1 .,00
  i
  E
  S

  E
  R
  ;        0.25




      -0.50




      -I     .25 __
             .-20.                0.               -20.              40.              60.                 80.

                                                                                              XRES_CRIM
                    REGRESSION   EQUATION   IS:    Y=-~.BII~BBX-~.~Q~I&BE-B~

            Figure 7.3. Partial-regression leverage plot for b, (GRIM), SE = 0.00124; housing-price
                                                    equation.


dominated by extreme points. GRIM, shown in Figure 7.3 is another story. Three
points near the center of Boston- 381 (Charlestown), 406 (South Boston), and 419
(Roxbury) - dominate this partial plot in terms of leverage.6 Further investigation
with deletion diagnostics, and then bounded-influence        estimation, is clearly
worthwhile. The willingness to pay for clean air function, IV, mentioned in the
first paragraph of this section, includes terms in both the predicted response
variable and NOXSQ: 4 = ejl( - 2b6NOXi). We therefore ought to pay espe-
cially close attention to DFFITS and DFBETAS.
   Table 7.3 contains row-deletion diagnostic information on 30 census tracts that
exceeded stringent cutoffs for any of the following measures: hat-matrix diago-
nals, studentized residuals, DFFITS, or the DFBETAS for the two explanatory
variables NOXSQ and CRIM.7 NOXSQ is of special interest because its presence
along with 9 (in this instance LMV) in the equation serves an important purpose

   6The remaining plots, which were omitted to conserve space, do not portray strikingly influential
observations comparable to that for CRIM.
   7The cutoffs are more severe than those in Belsley, Kuh and Welsch (1980) since our objective here
is to locate the most extreme influential points to compare them with related diagnostic information
from bounded-influence estimation.
Ch. 1 I: Dirty Data and Flawed Models                                                                        683

                                                      Table 7.3
   Hat-matrix   diagonals,   studentized   residuals, DFFITS, and DFBETAS   for selected census tracts:
                                             housing-price   equation”

                                                                                  DFBETAS
  Census
   tract             hi             RSTUDENT            DFFITS          NOXSQ                CRIM

  149             0.0485                 1.773            0.4006          0.2609*           -0.0144
  151             0.0456                 0.980            0.2142          0.1612*              0.0026
  153             0.0737              - 1.312          -0.3701         -0.2013*             - 0.0028
  156             0.0840:             - 0.427          -0.1292         - 0.0650                0.0007
  215             0.0579                 2.910*           0.7214*      - 0.0776             - 0.075 1
  359             0.0520                 1.250            0.2930          0.1364:           - 0.0056
  365             0.089 I*            - 2.747*         -0.8590*        - 0.1780*               0.0649
  366             0.0773                 1.960            0.5671*         0.0549            - 0.0875
  368             0.0607                 2.764*           0.7026*      -0.1952:             - 0.0468
  369             0.0982*                2.663*           0.8791*      -0.1256              -0.1105
  372             0.0242                 4.512*           0.7110*      - 0.2709*            -0.1293
  373             0.0532                 4.160*           0.9856*      -0.1751*             -0.1264
  381             0.2949*                2.559*           1.6551*         0.0975               1.5914*
  386             0.0183              - 2.564*         - 0.3499           0.0113            - 0.0567
  398             0.0125              - 3.212*         -0.3617         - 0.0025                0.0928
  399             0.0458              -3.301*          - 0.7235*       -0.0168              - 0.5774s
  400             0.0213              - 3.936*         - 0.5808;          0.0132               0.1176
  401             0.0225              - 3.954*         -0.5995:        - 0.0242             - 0.3424*
  402             0.0141              - 3.988*            0.4766       - 0.0204             - 0.0636
  406             0.1533*                2.141         -0.9112*        - 0.0552             - 0.8699*
  410             0.0252                 3.162*           0.5079*      - 0.2685*            - 0.0308
  411             0.1116*                1.688            0.5983*      -0.1278                 0.4130*
  413             0.0477                 3.520*           0.7878:      -0.3782*             - 0.0060
  414             0.0307                 1.947            0.3470       -0.1554*                0.1783*
  417             0.0387              - 2.852*         - 0.5724*          0.0473              0.1098
  419             0.1843*                2.316            1.1009*         0.0352               1.0041*
  427             0.0410              - 1.956          -0.4012            0.1416*             0.0582
  490             0.0514              - 3.534*         - 0.8225:          0.2957*             0.1797*
  491             0.0527              -2.019           - 0.4763           0.1760*             0.1107
  506             0.0357              - 3.070*         - 0.5906:       -0.1193              - 0.0547

    Yitarred values       which exceed cutoff values: h, = 3(p/n)      = 0.083;     RSTUDENT        = 2.5;
  DFFITS = 3(fi)           = 0.50; DFBETAS = 3/h=    0.133.




of the authors, while CRIM is affected by some quite exceptional leverage points.
The most influential point is clearly census tract 381 with a large hat-matrix
diagonal and studentized residual. Its deletion alone causes 3 to shift by 1.66
standard deviations according to DFFITS.
   Furthermore, the explanatory variables show severe imbalance in several ins-
tances. Since p/n = 0.0275 in the perfectly balanced case, the largest hi of 0.2949
is more than ten times greater. Some other hi are also severely out of balance. An
excessive (relative to the normal distribution) number of large studentized residu-
als, first observed in the normal probability plot, are also apparent. This is a
684                                                                                     W. S. Krasker et al.

                                                   Table 7.4
                    Distributions    of diagnostic information from bounded-influence
                          estimation of hedonic price index - centered and scaled
                                robust distance based on A-matrix for X data

                                         99 percent   EM           95 percent   EM

                         13-14                   0                          1
                         12-13                   0                          0
                         11-12                    I                         0
                         IO-11                   0                          1
                          9- 10                  0                          1
                          8-9                    0                         0
                          7-8                    2                         0
                          6-7                    0                          1
                          5-6                     1                        0
                          4-5                    0                          1
                          3-4                    4                         6
                          2-3                   18                        16
                          1-2                  129                       128
                          O-1                  351                       351




situation where bounded-influence regression seems a natural alternative to least
squares- initially as a diagnostic procedure and perhaps later to provide better
regression estimates.
   Two sets of bounded-influence estimates are presented next, for approximately
99 and 95 percent efficiency at the normal.’ In the latter case, the limited
influence allowed a given row of data would “cost” 5 percent efficiency if the
normal error model prevails and leverage points correspond to completely valid
elements of the model. The sensitivity bounds were a,,, = 12.0 and CZ,,~~  = 8.0,
respectively. The 95 percent efficient model (hereafter 95 percent EM) will
downweight a larger number of observations more heavily than the 99 percent
EM, but if there are only a few very large influential points, even the less
stringent .99 percent EM estimates will differ substantially from the OLS esti-
mates.
   We first examine the diagnostic content of the bounded-influence estimates.
Table 7.4 describes the frequency distribution of robust distances. These are
centered by the median distance and divided by 1.48 times the median absolute
deviation from the median,’ since the robust distances alone ‘have no direct

   *The TROLL program BIFMOD, written by Stephen Peters and Alexander Samarov, took a total
of 19.5 CPU seconds on an IBM 370/168           for the more computer-intensive      95 percent efficiency
model, at a cost well under $10. This total breaks down as follows: 1.9 CPU seconds for program
loading and the OLS Initial start; 10.4 CPU seconds for 10 iterations          to estimate the A-matrix;
7.2 CPU seconds for 54 iterations to estimate coefficients, scale, asymptotic covariance matrix and, of
course, the weights. More details on the program and methods for computing efficiency may be found
in Peters, Samarov and Welsch (198 1).
   9Tbe 1.48 insures a consistent scale estimate for Gaussian data.
Ch. 1 I: Dir(v Dnta and Flawed   Models                                                          685


interpretation. Restricting comment to the 95 percent EM case we note that 479
observations, or 95 percent of the observations in all, are less than two robust
standard errors from the median distance. Five observations are greatly distant
from the median value of the robust distance; all of these correspond to large
hat-matrix diagonals in the regression diagnostics with the exception of 415 which
has a hat matrix diagonal of 0.067.
   Table 7.5 presents individual diagnostic information for those observations
with a final BIF weight less than one. Comment will be limited to the 95 percent
EM and to a brief comparison with the regression diagnostics. First, the rank
orderings of the largest hat-matrix diagonals and standardized robust distances
are similar, but 415, 405, and 428 are now brought to our attention more
forcefully. Second, while the two most influential bounded-influence observations
(nos. 381 and 419) are also most influential according to DFFITS and the rank
orderings are roughly alike, there are a few striking differences. The third most
influential for BIF (no. 411) ranks 14th according to DFFITS and the third
largest for DFFITS (no. 406) ranks 28th for BIF. Note that 406 has the third
largest robust distance. From the structure of the bounded influence algorithm,
the residuals associated with the BIF estimates must be extremely small for
downweighting to be small in the presence of large leverage. It also appears that
observations 370 and 415 were missed by the single row deletion diagnostics. This
is especially true for 415 which does not appear in the first 100 rank ordered
DFFITS.”
   Regression coefficients for the bounded-influence estimates, their estimated
standard errors, and t statistics (for the null hypothesis Ha: p = 0) appear in
Table 7.6. The standard errors come from an asymptotic distribution, analogous
to the way one finds standard errors for two-stage least squares or any non-linear
estimator, or even for OLS when the disturbances are not exactly normal. Since
the convergence to the asymptotic distribution can be slow when there are
high-leverage X-rows, one must interpret these standard errors with some care. Of
course, this comment applies also to OLS.
   With a perfect model (including normal disturbances) one would expect the
bounded-influence standard errors to exceed those of OLS, because bounded-
influence will downweight some of the high-leverage observations which give OLS
its central-model efficiency. However, bounded-influence can be more efficient
than OLS if the disturbance distribution is heavy-tailed. We note that all
coefficients change monotonically in the progression from least to most severe
bounding of influence, i.e. from OLS to 99 percent EM to 95 percent EM. There
is no certainty that monotonicity holds more generally. The coefficient of the key



   “Multiple    deletion methods   however, did turn up no. 415 as a potentially  masked point [see
Belsley, Kuh and Welsch (198d, p. 242)] th us confirming our expectation  that BIF diagnostics offer
effective alternatives to multiple deletion procedures.
686                                                                                          W. S. Krusker et al.

                                                       Table 1.5
                            Bounded-influence       diagnostic information about the
                              most influential     data tows: hedonic price index

                     99 percent   EM                                         95 percent   EM

         Standardized                                           Standardized
        robust distance              Final Weiahts             robust distance               Final Weights
      Index         Value         Index        “Value        Index          Value         Index        Value

      381           11.14         381            0.231        381           13.68          381        0.086
      419            7.98         419            0.301        419           10.07         419         0.103
      406            7.10         313            0.489        406            9.02         411         0.165
      411            5.01         411            0.51 I       411            6.28         369         0.208
      369            3.68         369            0.517        415            4.42         373         0.228
      365            3.30         365            0.558        369            3.73         365         0.252
      415            3.26         413            0.579        405            3.57         368         0.254
      156            3.12         490            0.591        428            3.36         413         0.264
      343            2.99         368            0.618        365            3.33         490         0.298
      366            2.90         399            0.670         156           3.30         366         0.307
      163            2.84         312            0.673        399            3.13         399         0.317
      153            2.72         215            0.736        163            2.91         372         0.334
      371            2.70         401            0.771        366            2.97         401         0.360
      284            2.49         366            0.111        153            2.94         370         0.397
      405            2.41         400            0.836        343            2.89         414         0.399
      428            2.47         406            0.853        371            2.84         415         0.403
      164            2.46         506            0.856        143            2.65         400         0.433
      162            2.45         417            0.865        164            2.51         215         0.437
      143            2.44         410            0.940        284            2.56         417         0.440
      157            2.42         370            0.978        370            2.56         506         0.464
      370            2.39         491            0.989        157            2.55         410         0.48 I
                                                              155            2.51         491         0.488
                                                              162            2.45         402         0.520
                                                              368            2.30         420         0.536
                                                              161            2.06         371         0.548
                                                              127            2.05         408         0.599
                                                              124            2.00         467         0.635
                                                              160            I .99        406         0.638
                                                              373            1.94         375         0.661
                                                              146            1.90         416         0.661
                                                              258            1.89            8        0.673
                                                              215            1.89         343         0.696
                                                              147            1.88         398         0.725
                                                              359            1.87         386         0.742
                                                              148            1.82         149         0.748
                                                              121            1.82         428         0.750
                                                              123            1.81         367         0.786
                                                              145            1.80         153         0.804
                                                              125            1.80         421         0.829
                                                              126            1.78         404         0.880
                                                              319            1.77         182         0.896
                                                              152            1.77         359         0.903
                                                              122            1.76         412         0.923
                                                              358            1.75         388         0.957
                                                                        Table 1.6
                                                      Hedonic    price index regression      estimates

             Estimated    coefficients                                                       Coefficient   standard   errors and t-statistics

                                                                                                                          Bounded-influence

                         Bounded-influence                                             OLS                   99 percent    EM           95 percent   EM
                                                                  RHS
    OLS           99 percent   EM        95 percent   EM        variable       SE(b)            f-stat       SE(b)          r-stat      SE(b)        t-stat

-0.0119            -0.0143                -0.0158               CRIM        1.24~ lO-3   -9.53             4.33X 10m3       -3.31     4.34~ 10m3     -3.65
   7.94x 10-5         7.52 x lO-5         -2.39~    lo-*        ZN          5.06x 10m4      0.16           3.63 x 10m4         0.21   3.26x 10m4     -0.07
   2.36 x 10m4        3.98 x 1om4            7.25 x 10m4        INDUS       2.36 x 10m3     0.10           1.68~ 10m3          0.24   1.50x 10m3        0.48
   0.09 14           0.0863                  0.0768             CHAS        0.0332          2.75           0.0301              2.87   0.025 I           3.06
-6.39x     lo-’    -5.86x    10m3         -4.84X 10-3           NOXSQ       1.13 x 10-3  -5.64             1.18~ 10m3       -4.97     1.04~10~~      -4.67
   6.33 x 10m3        7.87 x 10-j            0.0110             RM          1.31 x 10-3    4.82            2.22x lO-3          3.55   1.67x IO-’        6.57
   8.86 x 10m5     - 1.26~ 10m4           -6.84~    1O-4        AGE         5.26x 1O-4     0.17            5.87X 1om4       -0.22     4.53x10-”      -1.51
-0.191             -0.182                 -0.165                DIS         0.0334       - 5.73            0.0381           -4.78     0.0316         - 5.21
   0.0957             0.0922                 0.0785             RAD         0.0191          5.00           0.0187              4.93   0.0152            5.15
-4.20~     10m4    -3.76~10~~             -3.25~10~~            TAX         1.23 x 10m4 ~3.42              1.14~10-~        -3.30     9.56~10~’      -3.40
- 0.03 11          - 0.0305               - 0.0290              PTRATIO     5.01 xIO-~   ~6.21             3.76X 10m3       -8.10     3.22~10~~      -9.01
   0.364              0.423                  0.532              B           0.103           3.53           0.146               2.90   0.127             4.18
-0.371             ~ 0.341                ~ 0.284               LSTAT       0.0250      - 14.83            0.0422             -8.09   0.03 19        -8.91
   9.76               9.71                   9.64               CONST       0.150         65.23            0.156             62.35    0.132           73.18
688                                                                                                   W. S. Krusker et al.


variable NOXSQ follows the sequence - 63.9; - 58.6; -48.4-differences           that
are large enough to cause big ohanges in the hedonic price calculations. However,
since the fitted value also enters the willingness-to-pay function and other
coefficients change, possibly in offsetting ways, a more detailed analysis would be
needed to assess how much the bounded-influence calculations would ultimately
affect the Harrison-Rubinfeld    analysis.


                                                Table 1.7
       A. Difference    between OLS and bounded-influence                  scaled by average of OLS
                          and bounded-influence    coefficient           standard errors

                                               bOLS-     b99                         boLs_     b95
               RHS
            variable”                t(SE(b)     o~s+SE(bhJ                 fC=Xb)     oLs+SE(bh)

           *GRIM                                  0.88                                  1.42
             ZN                                   0.01                                  0.25
            INDUS                                 0.08                                  0.25
             CHAS                                 0.16                                  0.50
           * NOXSQ                                0.46                                  1.43
           *RM                                    0.87                                  3.12
           *AGE                                   0.39                                  1.58
             DIS                                  0.21                                  0.81
           *RAD                                   0.19                                  1.00
             TAX                                  0.37                                  0.87
             PTRA TIO                             0.15                                  0.52
           *B                                     0.48                                  I .46
           *LSTAT                                 0.89                                  3.05
             CONST                                0.32                                  0.86


       B. Percentage    difference    between      OLS and bounded-influence          estimates

                                               bOLS-     4,                          b OLS-     be
              RHS
            variablea                             booLs                                 boLs

           +CRIM                                  21%                                   33%
            ZN                                     5                                   130
            INDUS                                 69                                   201
            CHAS                                   6                                    16
           *NOXSQ                                  8                                    24
           *RM                                    24                                    14
            AGE                                  242                                   872
            DIS                                    5                                    14
           *RAD                                    4                                    18
            TAX                                   IO                                    23
            PTRA TIO                               2                                     I
           ‘B                                     16                                    46
           *LSTAT                                  8                                    23
            CONST                                  0

          aValues are starred when magnitude                   exceeds    1 for OLS-95           percent   EM
       differences, as explained in the text.
Ch. 1 I: Dirty Data and Flawed Models                                                          689

   OLS and BIF estimates are compared in two ways in Table 7.7. First, Part A of
Table 7.7 has their differences scaled by the average of the OLS and BIF
coefficient standard errors. Percent differences, measured as the coefficient dif-
ference divided by the OLS coefficient, are shown in Part B of Table 7.7. Seven
coefficients, including that for NOXSQ, change by one or more standard devia-
tions using the 95 percent EM results; these changes have been starred. Two
coefficients for the 95 percent EM model differ by more than three standard
deviations. Next, the percent differences in Part B of Table 7.7 show that BIF
estimation makes a large quantitative (as well as statistical) difference in the
estimates, including those coefficients with the statistically most significant dif-
ferences between them.
   We noted above that j? is an important part of the willingness-to-pay analysis
based on the hedonic price index. More generally, the investigator is interested in
comparing ex-post predictions among different procedures. As a first step we look
at an index plot in Figure 7.4 of the point-by-point predicted value ratio, i.e. the ji
for OLS divided by $i for the BIF 95 percent EM after conversion from
logarithms into original units of dollar per dwelling unit. There are sizable
numbers of large relative differences: the combined impact of coefficient changes




          I .2

     $iors/FiaIr




          0.8
                 B        100           200          300           400       500         $00


                                         CensusTract Observation Index

       Figure 7.4. Ratio of OLS j, to BIF j,: Census Tract Index for hedonic price equation.
690                                                                                    W. S. Krasker et al.


sometimes does make a big difference to the predicted outcome. We also not that
the largest differences occur when the BIF prediction is smaller than the OLS
prediction which shows up in ratios well above unity; a number of predictions
differ by more than 25 percent. Large differences are concentrated in the vicinity
of Census Tracts 350-450. This points toward geographic concentration of large
OLS-BIF differences, a fact on which we elaborate next in a related context.
   A primary objective of bounding influence, we recall, is to limit bias, which
tends to dominate variance in large samples. Upon noting that differences
between OLS and BIF predictions are sometimes uncomfortably large, we ought
to look for indications of systematic divergences between OLS and BIF estimates
indicative of potential bias. This is readily achieved in the present instance by the
scatter diagram in Figure 7.5 of BIF pi against OLS gi in logarithms that were
used in the estimating equations. If the scatter is approximately uniformly
distributed around a 45” line, bias can be treated as unimportant for practical
purposes.
   It is striking to observe in Figure 7.5 that the eight largest divergences all lie
below the 45” line. It is furthermore clear that all but one of the most extreme
points are below the average value of the response variable. Both effects are
strongly suggestive of distortions or systematic differences indicative of potential
bias in the OLS estimates. All the extreme points are in the center city, Boston.




      e
          2                          9                           I0                              11
      Figure 7.5.   Scatter diagram of BIF j, versus OLSji: hedonic price equation.(     Note: Both
                                  magnitudes are in natural logarithms.)
Ch. II: Dirty Data and Flawed Models                                                             691


Observations     366, 368, and 369 are in Back Bay; Census Tract 381 is in
Charlestown; 406 is in South Boston, 411 is in South Bay; 415 and 419 are in
Roxbury. The close geographical proximity of these tracts is consistent with the
hypothesis that different specifications hold for inner and outer city areas.”
   We must emphasize that downweighted observations are not necessarily wrong,
although some of them might be. Moreover, it is only under certain stringent
assumptions that one could say that BIF is “better” than OLS. From the analysis
done so far one can conclude only that certain observations seem to depart from
the stochastic pattern of the bulk of the sample; moreover, those observations
seem to be concentrated in the central city. Whether one should modify the
model, or analyze the cen’ter-city observations separately, or simply assume that
the anomalies are sampling error, is a question that cannot be decided by
estimators alone. However, we feel it is highly advantageous to have an alterna-
tive fit that at least reveals the anomalies and the impact on estimated coefficients
when their influence has been diminished.
   How one chooses to treat influential observations, including the benign neglect
of OLS, makes a sizable difference in this particular instance. Since many data
sets that econometricians now prefer have related characteristics, this issue needs
to be confronted.



8.   Bounded-influence      estimation    with endogenous      explanatory    variables

So far we have dealt solely with cases in which, under the assumptions of the
“central model”, the conditional distribution of yi given xi is iV(x,j3, u2). In other
words, we have assumed that there is a linear regression function whose parame-
ters we wish to estimate. Quite commonly in economics, however, one can assume
only that the conditional distribution of y, - xip, given the values of the exoge-
nous variables, is N(0, a2). These assumptions are identical only if all the
explanatory variables are exogenous, which is generally not true in simultaneous-
equations models.
   The most widely used estimator in simultaneous-equations models is two-stage
least-squares (2SLS), which is a particular example of the instrumental variables
(IV) approach which we will develop below. As we will see, 2SLS (or any IV
estimator, for that matter) shares with ordinary least squares a very high sensitiv-
ity to failures of the underlying assumptions; and so we would like to have
available a bounded-influence        estimator for /3. It turns out that the
Krasker-Welsch estimator extends naturally, within the IV framework, to models
with endogenous explanatory variables.
   “The regression diagnostics in Belsley, Kuh and Welsch (1980, pp. 239 and 243) also pointed   out
systematic geographic concentrations  of influential data.
692                                                                  W. S. Krasker et al.

   We will suppose that we have an n X p matrix Z, whose columns are called
instruments, and which (under the central model) satisfies the property mentioned
above that the distribution of y, - xi/3, given zi, is N(0, a2). The ordinary
instrumental variables (IV) estimator for p is then defined by

      b = (Z=X)-‘Z’y,                                                             (8.1)
which can also be written as


      0=   2 (yi-xib)z;.                                                          (8.2)
           i=l

   2SLS is a special case of IV in which the instruments are formed by projecting
the explanatory variables onto the space spanned by the model’s exogenous
variables. Let M be the n x p’ matrix (p’ 2 p) of all the exogenous variables in
the model, and define Z = M(MTM)- ‘MTX. The 2SLS estimate is

      b ZSLS =   (z=z)-‘z=r,                                                      (8.3)

which one can show is identical to the IV estimate in eq. (8.1) since
M(MTM)-‘MT is a projection matrix [see Theil(l971, p. 459)].
  The influence function for the IV estimator turns out to be


                                                                                  (8.4)

where

      Q = Ez=x.                                                                   (8.5)

It is interesting to compare this influence function with the least-squares influence
function in eq. (4.6). There, we noticed that the influence was a product of the
disturbance y - xp and a term Q- ‘x’ which depended only on x and represented
the “leverage” of that row of the X-matrix. For IV, the influence of a particular
observation still depends on the disturbance. However, x now has no “indepen-
dent” effect, but rather affects b only through the disturbance. The “leverage”
term depends on z, not x (though some of the columns of X are also columns of
Z). Even if the X-matrix were highly unbalanced, so that certain observations
would have considerable least-squares leverage, it is possible for Z to be relatively
balanced. This could happen, for example, if a “Wald Instrument” (consisting
entirely of zeros and ones) were used as a column of Z.
Ch. 11: DirtyDataand FlawedModels                                                693

   A logical way to construct a bounded-influence estimator for p is to restrict
attention to “weighted instrumental variables” (WIV) estimators of the form




The weights wi will depend on y,, xi, zi, B, and 8. One can show that the influence
function is

     ~(Y,x,z)=w(Y,x,z,P,.)(Y-x~)B-‘z=                                          (8.7)
for a certain non-singular p x p matrix B. The same argument which justified the
Krasker-Welsch estimator can be used to suggest the following WIV estimator b*
for p. Choose a > fi. Find A to satisfy




Finally, find b* to satisfy

           n
                                             a
     O=Cmin            1,                                  ( yi - xib*)z;T.    (8.9)
          i=l                   y, - xib*
                   i                 6       {ZiA-~zT}“2
                            I               I

This estimator will have sensitivity equal to a, and analogous to the
Krasker-Welsch estimator presented earlier, is in a sense as close to IV as
possible subject to the constraint that the sensitivity be I a.
   This bounded-influence weighted IV estimator provides the same powerful
diagnostic information as the ordinary Krasker-Welsch           estimator. However,
many of its properties are not as well understood. We conjecture that it has
maximum efficiency among all WIV estimators with the same sensitivity, though
we have no proof as yet. Moreover, the process of approximating the distribution
of b* presents even more difficulties in the IV context than in ordinary regression.
Further details may be found in Krasker and Welsch (1982b). An example of
2SLS regression diagnostics is contained in Kuh and Welsch (1980).


9.   Resistant time-series estimation

In the previous sections we have said little about any special structure that might
be present in the explanatory variable matrix, X. In particular, what are the
694                                                                   W. S. Krasker et al.


consequences of having lagged endogenous and exogenous variables? Formally,
the methods described above can be applied and useful diagnostic information
obtained. However, potentially far more useful diagnostic information could be
obtained if the time-series structure of the data were utilized.
   Research on resistant estimation in the time-series context has lagged behind
studies in resistant location and regression estimation; understandably so in view
of the increased difficulties imposed by dependency between the data points. In
the face of such complications, it seems imperative to study resistant time-series
methods by first specifying simple outlier-generating models and focusing on
single time series.
   Martin (1979), generalizing the earlier work of Fox (1972), introduced two
kinds of outliers for linear time-series models: innovations outliers (IO) and
additive outliers (AO). Roughly speaking, IO correspond to problems with the
error distribution, E, and additive outliers to the gross errors discussed in previous
sections.
   The observational model considered by Martin (1980b) is of the following
general form:

      z,=p++y,+~,,        t=1,2 ,.*., n,                                           (9.1)

where p is a location parameter, yt is a zero-mean stationary ARMA ( p, 4) model:




and E*has a symmetric distribution.
   The IO model is obtained when S, = 0 and the Emare assumed to have a
heavy-tailed non-Gaussian distribution. The A0 model results when E, are
Gaussian, i3,independent of x,, and prob(6, = 0) = 1 - 6 with 6 positive and not
too large. The problem of robust model selection for p-order autoregressive
models was considered in Martin (1980a).
   For autoregressive IO and A0 models, Martin and Jong (1976), Denby and
Martin (1979), and Martin (1980a) have shown that:
(a)   The efficiency of the LS estimates in IO models decreases dramatically at
      “near-Gaussian” heavy-tailed distributions;
(b)   Huber-type estimates (see Section 6) of the autoregressive parameters over-
      come the efficiency problem for finite variance IO models;
(c)   both LS and Huber estimates lack resistance toward A0 situations: and
(d)   the time-series analog of the Mallows estimator (see Section 6) is resistant to
      both IO and A0 situations.
Time-series analogs of the Krasker-Welsch estimator would also be resistant but
no detailed comparisons have been made with the Mallows estimator. Thus, the
Ch. I I: Dirty Data and Flawed Models                                            695

bounded-influence approach is a good way to proceed for autoregressive models
as well as regular regression models.
   General ARMA models with additive outliers have been studied by Martin
(1980b) and Martin, Samarov and Vandaele (1980). The later paper makes use of
approximate conditional mean filters, a generalization of the Kalman filter. The
method is, in fact, a special case of the following process [Huber (1980)].
(1)   “Clean” the data by pulling outliers toward their fitted values (in the time
      series case by using a generalized Kalman filter).
(2)   Apply LS to this adjusted data.
(3)   Iterate (1) and (2) until convergence.
This method is most easily illustrated by using simple linear regression ( yi = a: +
px, + Ed)and the weights given in (4.19).
   Assume that we have a fit (3) to the data, i.e. a tentative regression line, an
estimate of scale 8, and an estimate of A [from (4.22)]. Then we “clean the data”
by forming adjusted data,




                          (
                                             a
      jj,,=~T~i+       min 1,                               (Yi - 9ii)T        (9.2)
                                , Yi - .fi
                                  7        I(xiA-yy2
                   i                                   11

and use LS on yi(i.e. &,, = (X=X)- ‘X’f) to get the next tentative regression
line.
    Kleiner, Martin and Thompson (1979) treat the problem of robust estimation
of power spectrum density. A robust method for dealing with seasonality in
fitting ARMA models is presented in the robust seasonal adjustment procedure
SABL (Seasonal Adjustment Bell Laboratories) due to Cleveland, Dunn and
Terpening (1978a, 1978b).


10.   Directions for further research

Economists often confront data and models (structural and stochastic) that are
plagued by imperfections that can disproportionately influence estimates. Recent
developments have led to model- and data-dependent weights for weighted least
squares that bound the maximum permissible influence any row of data is
allowed.
   These iterative estimators have diagnostic content and, like other recently
devised regression diagnostics, can be used to highlight data peculiarities and/or
possible model failure. In addition, they can provide alternative estimates and
predictions. The residuals from a bounded-influence fit are often more useful for
696                                                                                 W. S. Krasker et al.


assessing problems than the residuals from a least-squares fit. Bounded-influence
procedures represent a significant advance over arbitrary use of dummy variables
and,“or judgmental elimination of data.
   There are many interesting areas for further research. Bounded-influence
estimators now exist for linear single equation models and linear instrumental
variables models. Extensions to non-linear models, including logit and probit,
remain to be fully worked out.
   It is possible to consider bounding the influence of small departures from
independent errors or small departures from a specified dependent error model.
Work on resistant time-series estimation for full-scale econometric models is in its
infancy. Extensions to more complex stochastic situations- variance component
models for instance-would also be interesting.
   The theoretical foundations for bounded influence are recent. We have focused
on estimators that have a strong link to maximum likelihood (with a constraint to
bound the influence) but other approaches- quantile estimation, pth power, and
non-parametric regression- have their advocates. We feel that a new area of
inquiry has been opened with basic assumptions that correspond more closely to
the data and model properties encountered in the social sciences.



References

Andrews, D. F., P. J. Bickel, F. R. Hampel, P. J. Huber, W. H. Rogers and J. W. Tukey (1972) Robust
  Estimates of L.ocation. Princeton University Press.
Annales de I’Insk,   The Econometrics of Panel Data (1978) Special Issue, Issue 30-3 1, April-Sept.
  Pa&
Atkinson, Margaret and Jacques Mairesse (1978), “Length of life equipment in French manufacturing
  industries”, Annales de I’lnske, 30-31, 23-48.
Bamett, V. and T. Lewis (1978) Outliers in Statistical Data. New York: John Wiley & Sons.
Belsley, David A., Edwin Kuh and Roy E. Welsch (1980) Regression Diagnostics: Identifying
  Influential Data and Sources of Collinearity. New York: John Wiley & Sons.
Chamberlain, Gary (1978) “Omitted Variable Bias in Panel Data: Estimating the Returns to
  Schooling”, Annales de I’lnsee, 30-31,49-82.
Chames, A., W. W. Cooper and R. 0. Ferguson (1955) “Optimal Estimation of Executive Compensa-
  tion by Linear Programming”, Management Science, 1, 138- 151.
Cleveland, W. S., D. M. Dunn and I. J. Terpenning (1978a) “A Resistant Seasonal Adjustment
  Procedure with Graphical Methods for Interpretation and Diagnosis”, in: A. Zellner (ed.), Seasonal
  Analysis of Economic Time Series. U.S. Dept. of Commerce, Bureau of the Census.
Cleveland, W. S., D. M. Dunn and I. J. Terpenning (1978b) “The SABL Seasonal Adjustment
  Package-Statistical and Graphical Procedures”, available from Computing Inf. Library, Bell
  Laboratories, Murray Hill, N. J.
Denby, L. and R. D. Martin (1979) “Robust Estimation of the First-Order Autoregressive Parameter”,
  Journal of the American       Statistical Association,   74, 140- 146.
Diamond, Peter, Richard Anderson and Yves Balcer (1976) “A Model of Lifetime Earnings Patterns”,
  in; Report of the Consultant Panel on Social Security to the Congressional Research Service, Appendix
  B, pp. 81-119.
Eisner, Robert (1978) “Cross Section and Time Series Estimates of Investment Functions”, Annales de
  I’lnsee,   30-31,   99-129.
Ch. I I: Dirty Data and Flawed Models                                                              697

Fair, Ray C. (1974) “On the Robust Estimation of Econometric Models”, Annals of Economic and
  Social Measurement,     3.
Fisher, W. D. (1961) “A Note on Curve Fitting with Minimum Deviations by Linear Programming,”
  Journal of the American      Statistical Association.   56, 359-361.
Fox, A. J. (1972) “Outliers in Time Series”, Journal of the Royal Statistical Society, B 34, 350-363.
Griliches, Z. (1968) “Hedonic Price Indexes for Automobiles: An Econometric Analysis of Quality
  Change”, in: A. Zellner (ed.), Readings in Economics and Statistics. Little Brown.
Griliches, Zvi, Bronwyn H. Hall and Jerry A. Hausman (1978) “Missing Data and Self-Selection in
  Large Panels”, Annales de I’hske, 30-3 1, 137- 176.
Hampel, F. R. (1968) “Contributions to the Theory of Robust Estimation”, Ph.D. thesis, Berkeley.
Hampel, F. R. (1973) “Robust Estimation: A Condensed Partial Survey”, Zeitschrtft fur Wahrschein-
  lichkeitstheorie und Verw. Gebeite, 27, 81- 104.
Hampel, F. R. (1974), “The Influence Curve and Its Role in Robust Estimation”, Journal of the
  American   Statistical Association,   69, 383-393.
Hampel, F. R., (1978) “Optimally Bounding the Gross-Error-Sensitivity and the Influence of Position
  in Factor Space”, in: 1978 Proceedings of the Statistical Computing Section. ASA, Washington, D.C.
  pp. 59-64.
Handschin, E., J. Kohlas, A. Fiechter and F. Schweppe (1975) “Bad Data Analysis for Power System
  State Estimation”, IEEE Transactions on Power Apparatus and Systems, PAS-94, 2, 239-337.
Harrison, D. and D. L. Rubinfeld (1978) “Hedonic Prices and the Demand for Clean Air”, Journal of
  Environmental Economics and Management, 5, 81-102.
Hill, R. W. (1977) “Robust Regression when there are Outliers in the Carriers”, unpublished Ph.D.
  dissertation, Department of Statistics, Harvard University.
Hinkley, David V. (1977) “On Jackknifing in Unbalanced Situations”, Technometrics, 19, 285-292.
Holland, P. W. and R. E. Welsch (1977) “Robust Regression Using Iteratively Reweighted Least-
  Squares”, Communications in Statistics, A6, 813-827.-
Huber, P. J. (1973) “Robust Regression: Asymptotics, Conjectures and Monte Carlo”, Annals of
  Statistics, 1, 799-82 I.
Huber, Peter J. (1977) Robust Statistical Procedures. Philadelphia: SIAM.
Huber. P. J. (1981) Robust Statistics. New York: John Wilev & Sons.
Karst, 0. J. (1958) “Linear Curve Fitting Using Least Deviations” , Journal of the American Statistical
  Association, 53, 118-132.
Kleiner, R., R. D. Martin and D. J. Thomson (1979) “Robust Estimation of Power Spectra with
  Discussion”, Journal of the Royal Statistical Society, B 41,
Koenker, Roger and Gilbert Basset, Jr. (1978) “Regression Quantiles”, Econometrica, 46, 33-50.
Koenker, R. ( 1982) ‘IRobust Methods in Econometrics”, Econometric Reviews (to appear).
Krasker, William S. and Roy E. Welsch (1982a) “Efficient Bounded-Influence Regression Estimation”,
  Journal of the American      Statistical Association,   17, 595-604.
Krasker, William S. and Roy E. Welsch (1982b) “Resistant Estimation for Simultaneous-Equations
  Models Using Weighted Instrumental Variables”, Unpublished manuscript, MIT Center for Com-
  putational Research in Economics and Management Science, Cambridge, MA.
Krasker, W. S. (1978) “Applications of Robust Estimation to Econometric Problems”, unpublished
  Ph.D. thesis, Department of Economics, M.I.T.
Krasker, W. S. (1980) “Estimation in Linear Regression Models with Disparate Data Points”,
  Econometrica   48, 1333-1346.
Krasker. W. ( 1981) “Robust Regression Inference”, Unpublished manuscript, Graduate School of
  Business, Harvard University, Cambridge, MA.         _
Kuh. Edwin and Rov E. Welsch (1980). “Econometric Models and Their Assessment for Policv: Some
  New Diagnostics’Applied to ;he Translog Energy Demand in Manufacturing”, in: S. Ga& (ed.),
  Proceedings of the Workshop on Validation and Assessment Issues of Energy Models. Washington,
  D.C.: National Bureau of Standards, pp. 445-475.
Mallows, C. L. (1973) “Influence Functions”, talk at NBER Conference on Robust Regression,
  Cambridge, MA.
Mallows, C. L. (1975) “On Some Topics in Robustness”, unpublished memorandum, Bell Telephone
  Laboratories, Murray Hill, New Jersey.
Marazzi (1980) “Robust Linear Regression Programs in ROBETH”, Research Report No. 23,
698                                                                                                 W. S. Krasker et ul.

   Fachgruppe     fiir Statistik, ETH, Zurich.
Maronna,      R. A. (1976) “Robust         M-estimators      of Multivariate     Location    and Scatter”, Annuls of
   Statistics 4, 51-67.
Maronna, R. A. and V. .I. Yohai (I 980) “Asymptotic             Behavior of General M-estimates for Regression
   and Scale with Random Carriers”, Zeitschrift /ia Wahrscheinlichkeitstheorie,                 58, 7-20.
Maronna,      R. A., V. J. Yohai and 0. Bustos (1979) “Bias- and Efficiency-Robustness                       of General
   M-estimators      for Regression     with Random       Carriers”,    in: T. Gasser and M. Rosenblatt             (eds.),
  Smoothing Techniques for Curve Estimation, Lecture Notes in Mathematics                        no. 757. New York:
   Springer Verlag, pp. 91-I 16.
Martin, R. D. (1979) “Robust Estimation for Time Series Autoregressions”,                    in: R. L. Launer and G.
  Wilkinson (eds.), Robustness in Statistics. New York: Academic Press.
Martin, R. D. (1980a) “Robust            Estimation    of Autoregressive      Models”, in: Brillinger et al. (eds.),
   Directions in Time Series, Institute of Mathematical           Statistics Publication.
Martin, R. D. (1980b) “Robust Methods for Time Series “, in: Proceedings of Nottingham Internutional
   Time Series Meeting. Amsterdam:           North-Holland,     Publishing Co.
Martin, R. D. and J. Jong (1976) “Asymptotic              properties of robust generalized M-estimates             for the
   first order autoregressive     parameter”,    Bell Labs., Tech. Memo, Murray Hill, NJ.
Martin, R. D., A. Samarov and W. Vandaele (1981), “Robust Methods for ARIMA Models”, M.I.T.
   Center for Computational         Research in Economics and Management               Science Technical Report no.
   29, Cambridge, Mass.
McFadden,       Daniel and Jeff Dubbin (1980) “An Econometric                   Analysis of Residential        Electrical
  Appliance      Holdings and Consumption”,           Department       of Economics,      Massachusetts     Institute of
  Technology.
Meyer, J. R. and R. R. Glauber (1964) Investment Decisions, Economic Forecasting and Public Policy.
   Harvard Business School Press, Cambridge, Mass
Peters, Stephen C., Alexander Samarov and Roy E. Welsch (1982) “TROLL                          PROGRAM:         BIF and
   BIFMOD”,       MIT Center for Computational              Research in Economics         and Management         Science,
   Technical Report no. 30, Cambridge, MA.
Taylor, Lester D. (1974) “Estimation          by Minimizing the Sum of Absolute Errors”, in Paul Zarembka
   (ed.), Frontiers in Econometrics. New York: Academic Press, ch. 6.
Theil, H. (1971) Principles of Econometrics. New York: John Wiley & Sons, p. 459.
Wagner, H. M. (1959) “Linear Programming                 Techniques       for Regression Analysis”, Journal of the
   American Statistical Association 56, 206-2 12.
Welsch, R. E. (1977) “Regression           Sensitivity Analysis and Bounded-Influence            Estimation”,     Talk at
   NBER Conference          on Criteria for Evaluation        of Econometric      Models, University      of Michigan.
   Appears in .I. Kmenta and J. Ramsey _. (1980) Evaluation of Econometric Models. New York:
   Academic Press, pp. 153-167.
Welsch, R. E. (1982) “Influence Functions and Regression Diagnostics”,                   in: R. Launer and A. Siegel
   (eds.), Modern Data Analysis. New York: Academic Press, pp. 149-169.



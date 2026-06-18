---
normalized_id: shared-pdf-reference-arch-models
exam_code: SHARED
material_scope: arch models.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/ARCH Models.PDF
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-arch-models

Chapter 49


ARCH MODELS”

TIM BOLLERSLEV

Northwestern University and N.B.E.R.


ROBERT       F. ENGLE

University of California, San Diego and N.B.E.R.


DANIEL       B. NELSON

University of Chicago and N.B.E.R.




Contents

Abstract                                                                                             2961
 1. Introduction                                                                                     2961
      1.1.    Definitions                                                                             2961
      1.2.    Empirical     regularities   of asset returns                                           2963
      1.3.    Univariate      parametric    models                                                    2967
      1.4.    ARCH     in mean models                                                                 2912
      1.5.    Nonparametric        and semiparametric         methods                                 2912
 2.   Inference      procedures                                                                     2974
      2.1.    Testing for ARCH                                                                        2914
      2.2.    Maximum         likelihood   methods                                                    2971
      2.3.    Quasi-maximum          likelihood   methods                                             2983
      2.4.    Specification     checks                                                                2984



   “The authors would like to thank Torben G. Andersen, Patrick Billingsley, William A. Brock, Eric
Ghysels, Lars P. Hansen, Andrew Harvey, Blake LeBaron, and Theo Nijman for helpful comments.
Financial support from the National Science Foundation        under grants SES-9022807 (Bollerslev), SES-
9122056 (Engle), and SES-9110131 and SES-9310683 (Nelson), and from the Center for Research in
Security Prices (Nelson), is gratefully acknowledged.   Inquiries regarding the data for the stock market
empirical application    should be addressed    to Professor G. William Schwert, Graduate         School of
Management,    University of Rochester, Rochester, NY 14627, USA. The GAUSSTM code used in the
stock market empirical example is available from Inter-University      Consortium  for Political and Social
Research (ICPSR), P.O. Box 1248, Ann Arbor, MI 48106, USA, telephone (313)763-5010.                   Order
“Class 5” under this article’s name.


Handbook ofEconometrics, Volume IV, Edited by R.F. Engle and D.L. McFadden
0 1994 Elseuier Science B.V. All rights reserved
                                                                                T. Bollersku    et al.


3.    Stationary         and ergodic properties                                                2989
      3.1.   Strict stationarity                                                               2989

      3.2.   Persistence                                                                       2990

4.    Continuous            time methods                                                       2992
      4.1.   ARCH       models as approximations             to diffusions                     2994

      4.2.   Diffusions      as approximations       to ARCH           models                  2996

      4.3,   ARCH        models as filters and forecasters                                     2991

5.    Aggregation           and forecasting                                                    2999
      5.1.   Temporal       aggregation                                                        2999

      5.2.   Forecast      error distributions                                                 3001

6.    Multivariate           specifications                                                    3002
      6.1.   Vector ARCH           and diagonal     ARCH                                       3003

      6.2.   Factor      ARCH                                                                  3005

      6.3.   Constant       conditional   correlations                                         3007

      6.4.   Bivariate      EGARCH                                                             3008

      6.5.   Stationarity      and co-persistence                                              3009

 7.   Model selection                                                                          3010
 8.   Alternative measures                for volatility                                       3012
 9.   Empirical examples                                                                       3014
      9.1.   U.S. Dollar/Deutschmark              exchange     rates                           3014

      9.2.   U.S. stock prices                                                                 3017

10. Conclusion                                                                                 3030
References                                                                                     3031
Ch. 49: ARCH    Models                                                                    2961




Abstract

This chapter evaluates the most important theoretical developments         in ARCH type
modeling of time-varying    conditional   variances. The coverage include the specifica-
tion of univariate parametric ARCH models, general inference procedures, condi-
tions for stationarity   and ergodicity, continuous      time methods, aggregation      and
forecasting of ARCH models, multivariate          conditional   covariance  formulations,
and the use of model selection criteria in an ARCH context. Additionally,                the
chapter contains a discussion of the empirical regularities pertaining to the temporal
variation  in financial market volatility. Motivated        in part by recent results on
optimal filtering, a new conditional    variance model for better characterizing      stock
return volatility is also presented.


1.     Introduction

Until a decade ago the focus of most macroeconometric              and financial time series
modeling centered on the conditional           first moments, with any temporal depen-
dencies in the higher order moments treated as a nuisance. The increased importance
played by risk and uncertainty considerations        in modern economic theory, however,
has necessitated the development         of new econometric     time series techniques that
allow for the modeling        of time varying variances and covariances.             Given the
apparent lack of any structural dynamic economic theory explaining the variation
in higher order moments, particularly         instrumental   in this development      has been
the autoregressive    conditional   heteroskedastic    (ARCH) class of models introduced
by Engle (1982). Parallel to the success of standard linear time series models, arising
from the use of the conditional        versus the unconditional      mean, the key insight
offered by the ARCH model lies in the distinction between the conditional and the
unconditional second order moments. While the unconditional               covariance matrix
for the variables of interest may be time invariant, the conditional            variances and
covariances often depend non-trivially on the past states of the world. Understanding
the exact nature of this temporal dependence is crucially important for many issues
in macroeconomics      and finance, such as irreversible investments, option pricing, the
term structure of interest rates, and general dynamic asset pricing relationships.
Also, from the perspective of econometric inference, the loss in asymptotic efficiency
from neglected heteroskedasticity        may be arbitrarily    large and, when evaluating
economic forecasts, a much more accurate estimate of the forecast error uncertainty
is generally available by conditioning       on the current information     set.


1.I.    Dejinitions

Let {E,(O)} denote a discrete time stochastic process with conditional   mean and
variance functions parametrized  by the finite dimensional vector OE 0 s R”, where
2962                                                                   T. Bolfersleu et al.


8, denotes the true value. For notational simplicity we shall initially assume that
s,(O)is a scalar, with the obvious extensions to a multivariate framework treated in
Section 6. Also, let E,_ r(.) denote the mathematical expectation, conditional on the
past, of the process, along with any other information available at time t - 1.
   The {E,(@,)}process is then defined to follow an ARCH model if the conditional
mean equals zero,

       ~1-1MRJ))= 0               t= 1,2,...,                                        (1.1)

but the conditional variance.

       44J = Var,- lWo)) = L l(~:(&))                    t= 1,2,...,                 (1.2)

depends non-trivially on the sigma-field generated by the past observations; i.e.
{~t-l(~O)r~,-2(e0),...}.Wh en obvious from the context, the explicit dependence on
the parameters, 8, will be suppressed for notational convenience. Also, in the
multivariate case the corresponding time varying conditional covariance matrix will
be denoted by f2,.
   In much of the subsequent discussion we shall focus directly on the {st} process,
but the same ideas extend directly to the situation in which {st} corresponds to the
innovations from some more elaborate econometric model. In particular, let {yl(O,)}
denote the stochastic process of interest with cohditional mean

       PtwM= 4 - l(YJ             t=l2 ) )....                                      (1.3)

Note, by the timing convention both ~~(0,) and a:(O,) are measurable with respect
to the time t - 1 information set. Define the {s,(e,)} process by

       de,) = Y, - au               t= 1,2,....                                     (1.4)

The conditional variance for (ct} then equals the conditional variance for the {y,}
process. Since very few economic and financial time series have a constant conditional
mean of zero, most of the empirical applications of the ARCH methodology actually
fall within this framework.
   Returning to the definitions in equations (1.1) and (1.2), it follows that the
standardized process,

       2,(e,)   s E,(e,)a:(e,)-   1’2      t= 1,2,...,                              (1.5)

will have conditional mean zero, and a time invariant conditional variance of unity.
This observation forms the basis for most of the inference procedures that underlie
the applications of ARCH type models.
   If the conditional distribution for z, is furthermore assumed to be time invariant
Ch. 49: ARCH Models                                                                            2963


with a finite fourth moment,             it follows by Jensen’s inequality   that

         E(&;) = E(zf’)E(a;) 2 E(z;)E(af)2 = E(zp)E(q2,

where the equality holds true for a constant conditional             variance only. Given a
normal distribution     for the standardized    innovations   in equation (1.5), the uncondi-
tional distribution    for E, is therefore leptokurtic.
    The setup in equations (1.1) through (1.4) is extremely general and does not lend
itself directly to empirical implementation       without first imposing further restrictions
on the temporal dependencies            in the conditional   mean and variance functions.
Below we shall discuss some of the most practical and popular such ARCH formula-
tions for the conditional        variance. While the first empirical applications         of the
ARCH class of models were concerned with modeling inflationary               uncertainty,    the
methodology      has subsequently      found especially wide use in capturing the temporal
dependencies      in asset returns. For a recent survey of this extensive empirical
literature we refer to Bollerslev et al. (1992).



1.2.      Empirical regularities        of asset returns

Even in the univariate case, the array of functional forms permitted by equation (1.2)
is vast, and infinitely larger than can be accommodated     by any parametric family
of ARCH models. Clearly, to have any hope of selecting an appropriate            ARCH
model, we must have a good idea of what empirical regularities the model should
capture. Thus, a brief discussion of some of the important        regularities for asset
returns volatility follows.

1.2.1.     Thick tails

Asset returns tend to be leptokurtic. The documentation      of this empirical regularity
by Mandelbrot    (1963), Fama (1965) and others led to a large literature on modeling
stock returns as i.i.d. draws from thick-tailed  distributions;     see, e.g. Mandelbrot
(1963), Fama (1963,1965), Clark (1973) and Blattberg and Gonedes (1974).

1.2.2.     Volatility    clustering

As Mandelbrot           (1963) wrote,

  . . . large changes tend to be followed by large changes,              of either sign, and small
  changes tend to be followed by small changes..

This volatility clustering phenomenon    is immediately  apparent when asset returns
are plotted through time. To illustrate, Figure 1 plots the daily capital gains on the
Standard 90 composite stock index from 1928-1952 combined with Standard and
                              Daily Standard   and Poor’s Capital   Gains




         2
         ’ 1920 1930          1940      1950       1960       1970          1980   1990   2000

                                                 Figure 1



Poor’s 500 index from 1953-1990. The returns are expressed in percent, and are
continuously    compounded.        It is clear from visual inspection of the figure, and any
reasonable statistical test, that the returns are not i.i.d. through time. For example,
volatility was clearly higher during the 1930’s than during the 1960’s, as confirmed
by the estimation results reported in French et al. (1987).
    A similar message is contained           in Figure 2, which plots the daily percentage
Deutschmark/U.S.       Dollar exchange rate appreciation.         Distinct periods of exchange
market turbulence       and tranquility      are immediately    evident. We shall return to a
formal analysis of both of these two time series in Section 9 below.
   Volatility clustering and thick tailed returns are intimately related. As noted in
Section 1.1 above, if the unconditional         kurtosis of a, is finite, E(E~)/[E($)]~ 3 E(z:),
where the last inequality        is strict unless ot is constant. Excess kurtosis in E, can
therefore arise from randomness             in ol, from excess kurtosis in the conditional
distribution  of sI, i.e., in zl, or from both.

1.2.3.   Leverage   eflects

The so-called “leverage effect,” first noted by Black (1976), refers to the tendency
for changes in stock prices to be negatively      correlated   with changes in stock
volatility. Fixed costs such as financial and operating leverage provide a partial
explanation for this phenomenon.    A firm with debt and equity outstanding  typically
                                                                                        2965
Ch. 49: ARCH   Models


                               Dally U.S. Dollar-Deutschmark   Appreciation




                 “p
                      1960   1962    1964      1966     1988   1990       1992   1994

                                                 Figure 2


becomes more highly leveraged when the value of the firm falls. This raises equity
returns volatility if the returns on the firm as a whole are constant. Black (1976),
however, argued that the response of stock volatility to the direction of returns is
too large to be explained by leverage alone. This conclusion    is also supported by
the empirical work of Christie (1982) and Schwert (1989b).

1.2.4.   Non-trading periods

Information   that accumulates when financial markets are closed is reflected in prices
after the markets reopen. If, for example, information       accumulates    at a constant
rate over calendar time, then the variance of returns over the period from the Friday
close to the Monday close should be three times the variance from the Monday
close to the Tuesday close. Fama (1965) and French and Roll (1986) have found,
however, that information     accumulates   more slowly when the markets are closed
than when they are open. Variances are higher following weekends and holidays
than on other days, but not nearly by as much as would be expected if the news
arrival rate were constant. For instance, using data on daily returns across all NYSE
and AMEX stocks from 1963-1982, French and Roll (1986) find that volatility is
70 times higher per hour on average when the market is open than when it is closed.
Baillie and Bollerslev (1989) report qualitatively  similar results for foreign exchange
rates.

1.2.5.   Forecastable events

Not surprisingly, forecastable releases of important information are associated with
high ex ante volatility. For example, Cornell (1978) and Pate11 and Wolfson (1979,
2966                                                                      T Bollersleu et al.


1981) show that individual        firms’ stock returns volatility is high around earnings
announcements.      Similarly, Harvey and Huang (1991,1992) find that fixed income
and foreign exchange volatility is higher during periods of heavy trading by central
banks or when macroeconomic            news is being released.
   There are also important predictable changes in volatility across the trading day.
For example, volatility is typically much higher at the open and close of stock and
foreign exchange trading than during the middle of the day. This pattern has been
documented by Harris (1986), Gerity and Mulherin (1992) and Baillie and Bollerslev
(1991) among others. The increase in volatility at the open at least partly reflects
information    accumulated     while the market was closed. The volatility surge at the
close is less easily interpreted.


1.2.6.   Volatility   and serial correlation


LeBaron (1992) finds a strong inverse relation between volatility and serial corre-
lation for U.S. stock indices. This finding appears remarkably     robust to the choice
of sample period, market index, measurement       interval and volatility measure. Kim
(1989) documents a similar relationship    in foreign exchange rate data.


1.2.7.   Co-movements      in volatilities


Black (1976) observed      that

  . . . there is a lot of commonality in volatility changes across stocks: a 1% market
  volatility change typically implies a 1% volatility change for each stock. Well,
  perhaps the high volatility stocks are somewhat more sensitive to market volatility
  changes than the low volatility stocks. In general it seems fair to say that when
  stock volatilities change, they all tend to change in the same direction.

    Diebold and Nerlove (1989) and Harvey et al. (1992) also argue for the existence
of a few common factors explaining exchange rate volatility movements. Engle et al.
(1990b) show that U.S. bond volatility changes are closely linked across maturities.
This commonality      of volatility changes holds not only across assets within a market,
but also across different markets. For example, Schwert (1989a) finds that U.S. stock
and bond volatilities move together, while Engle and Susmel (1993) and Hamao
et al. (1990) discover close links between volatility changes across international
stock markets. The importance        of international linkages has been further explored
by King et al. (1994), Engle et al. (1990a), and Lin et al. (1994).
    That volatilities move together should be encouraging        to model builders, since
it indicates that a few common factors may explain much of the temporal variation
in the conditional    variances and covariances of asset returns. This forms the basis
for the factor ARCH models discussed in Section 6.2 below.
Ch. 49: ARCH Models                                                                      2961


I .2.8.     Macroeconomic      variables and volatility

Since stock values are closely tied to the health of the economy, it is natural to
expect that measures of macroeconomic        uncertainty such as the conditional variances
of industrial   production,   interest rates, money growth, etc. should help explain
changes in stock market volatility. Schwert (1989a, b) finds that although stock
volatility rises sharply during recessions and financial crises and drops during
expansions, the relation between macroeconomic           uncertainty  and stock volatility
is surprisingly   weak. Glosten et al. (1993), on the other hand, uncover a strong
positive relationship    between stock return volatility and interest rates.


1.3.      Univariate parametric      models

1.3.1.      GARCH

Numerous parametric specifications for the time varying conditional      variance have
been proposed in the literature. In the linear ARCH(q) model originally introduced
by Engle (1982), the conditional  variance is postulated to be a linear function of the
past q squared innovations,

          o;=w+       1     CLiE~_i-W+C((L)E:_l,                                         (1.6)
                    i=l,q



where L denotes the lag or backshift operator, L’y, = Y,_~. Of course, for this model
to be well defined and the conditional   variance to be positive, almost surely the
parameters must satisfy w > 0 and c(~ 3 0,. . . , a, > 0.
   Defining v, = E: - a:, the ARCH(q) model in (1.6) may be re-written as

          Ef = w + C((L)&f_1 + v,.                                                       (1.7)

Since E, _ I (v,) = 0, the model corresponds directly to an AR(q) model for the squared
innovations,     E:. The process is covariance stationary if and only if the sum of the
positive autoregressive     parameters is less than one, in which case the unconditional
variance equals Var(s,) = a2 = o/( 1 - U1 - ... - Uq).
   Even though the E,)Sare serially uncorrelated,         they are clearly not independent
through time. In accordance with the stylized facts for asset returns discussed above,
there is a tendency for large (small) absolute values of the process to be followed by
other large (small) values of unpredictable       sign. Also, as noted above, if the distri-
bution for the standardized       innovations    in equation (1.5) is assumed to be time
invariant, the unconditional     distribution for E, will have fatter tails than the distribu-
tion for z,. For instance, for the ARCH(l)            model with conditionally       normally
distributed errors, E(sp)/E($)’ = 3( 1 - a:)/( 1 - 34) if 3c(T < 1, and E(.$)/E(E:)~ = co
otherwise: both of which exceed the normal value of three.
2968                                                                                                T Bollersleu et al.


   Alternatively the ARCH(q) model                              may also be represented        as a time varying
parameter MA(q) model for a,,

       E, = 0 +       cc(J!&   lE,_   1,                                                                         (1.8)

where {i,} denotes a scalar i.i.d. stochastic process with mean zero and variance
one. Time varying parameter        models have a long history in econometrics        and
statistics. The appeal of the observational   equivalent formulation    in equation (1.6)
stems from the explicit focus on the time varying conditional   variance of the process.
For discussion of this interpretation    of ARCH models, see, e.g., Tsay (1987), Bera
et al. (1993) and Bera and Lee (1993).
   In empirical applications    of ARCH(q) models a long lag length and a large
number of parameters are often called for. To circumvent this problem Bollerslev
(1986) proposed the generalized ARCH, or GARCH(p, q), model,


       ~: = 0     +      C C(iEf_i
                                + C                   ~jjb:_j    ~   W +   a(L)&:_
                                                                                 1   +   B(L)a:_
                                                                                               1.
                                                                                                                 (1.9)
                       i=l,q               j=   1.~




For the conditional      variance in the GARCH(p, q) model to be well defined all the
coefficients in the corresponding      infinite order linear ARCH model must be positive.
Provided that a(L) and /J(L) have no common roots and that the roots of the
polynomial     /I(x) = 1 lie outside the unit circle, this positivity constraint   is satisfied
if and only if all the coefficients in the infinite power series expansion for a(~)/( 1 - /i(x))
are non-negative.      Necessary and sufficient conditions for this are given in Nelson
and Cao (1992). For the simple GARCH(l,               1) model almost sure positivity of 0:
requires that w 3 0, c(i B 0 and /I1 > 0.
    Rearranging     the GARCH(p, q) model as in equation (1.7), it follows that

       a; = 0 + [a(L) + B(L)l&:_
                               1- P(L)v,-1+ v,,                                                                (1.10)

which defines an ARMA[max(p,q),p]           model for E:. By standard       arguments,   the
model is covariance stationary if and only if all the roots of a(x) + b(x) = 1 lie outside
the unit circle; see Bollerslev (1986) for a formal proof. In many applications         with
high frequency financial data the estimate for CI(1) + /I( 1) turns out to be very close
 to unity. This provides an empirical motivation for the so-called integrated GARCH
(p, q), or IGARCH(p,q),     model introduced    by Engle and Bollerslev (1986). In the
 IGARCH class of models the autoregressive         polynomial     in equation (1.10) has a
unit root, and consequently     a shock to the conditional    variance is persistent in the
sense that it remains important for future forecasts of all horizons. Further discussion
of stationarity conditions and issues of persistence are contained in Section 3 below.
   Just as an ARMA model often leads to a more parsimonious              representation    of
the temporal dependencies in the conditional mean than an AR model, the GARCH
(p, q) formulation in equation (1.9) provides a similar added flexibility over the linear
2910


non-linear    ARCH (NARCH)          models:

       O:=O   +     C ClilE,-ilY + 1          BjOf-j.                                          (1.13)
                  i=l,q             j=l,P

If (1.13) is modified     further by setting

                                                                                               (1.14)
                  i=l,q                     j=l,p



for some non-zero K, the innovations    in c$ will depend on the size as well as the
sign of lagged residuals, thereby allowing for the leverage effect in stock return
volatility. The formulation  in equation (1.14) with y = 2 is also a special case of
Sentana’s (1991) quadratic ARCH (QARCH) model, in which 0: is modeled as a
quadratic   form in the lagged residuals. A simple version of this model termed
asymmetric ARCH, or AARCH, was also proposed by Engle (1990). In the first
order case the AARCH model becomes

       a:=o+tlE:_l+sE,-l+P~:_l,                                                                (1.15)

where a negative value of 6 means that positive returns increase               volatility   less than
negative returns.
   Another route for introducing asymmetric effects is to set

       0: = W +     C [a+T(E,_i    > 0)1&,_il’ + Ui-I(&t-i d o)lE~~ilyl    +     C Bjaf-jT     (l.16)
                  i=l,q                                                        j= 1.p

where I(.) denotes the indicator         function.   For example the threshold       ARCH
(TARCH) model of Zakoian (1990) corresponds                   to equation (1.16) with y = 1.
Glosten, Jagannathan       and Runkle (1993) estimate a version of equation (1.16) with
y = 2. This so-called GJR model allows a quadratic response of volatility to news
with different coefficients for good and bad news, but maintains the assertion that
the minimum volatility will result when there is no news.’
    Two additional    classes of models have recently been proposed. These models
have a somewhat different intellectual heritage but imply particular forms of con-
ditional heteroskedasticity.   The first is the unobserved components structural ARCH
(STARCH) model of Harvey et al. (1992). These are state space models or factor
models in which the innovation       is composed of several sources of error where each
of the error sources has heteroskedastic         specifications   of the ARCH form. Since
the error components       cannot be separately observed given the past observations,
the independent    variables in the variance equations are not measurable with respect


   ’ In a comparison study for daily Japanese TOPIX data, Engle and Ng (1993) found that the EGARCH
and the GJR formulation were superior to the AARCH model (1.15) which simply shifted the intercept.
Ch. 49: ARCH    Models                                                                                      2971


to  the available information set, which complicates inference procedures2 Following
earlier work by Diebold and Nerlove (1989), Harvey et al. (1992) propose an
estimation strategy based on the Kalman filter.
   To illustrate the issues, consider the factor structure

     Yr = Bft + &*,                                                                                       (1.17)

where JJ, is an n x 1 vector of asset returns, f, is a scalar factor with time invariant
factor loadings, B, and E, is an n x 1 vector of idiosyncratic      returns. If the factor
follows an ARCH( 1) process,

                                                                                                          (1.18)

then new estimation     problems arise since f,_ I is not observed, and c;,~ is not a
conditional  variance. The Kalman filter gives both E, _ l(f, _ 1) and V, _ l(f, _ 1), so
the proposal by Harvey et al. (1992) is to let the conditional  variance of the factor,
which is the state variable in the Kalman filter, be given by




    Another important class of models is the switching ARCH, or SWARCH, model
 proposed independently     by Cai (1994) and Hamilton and Susmel(l992).       This class
 of models postulates that there are several different ARCH models and that the
 economy switches from one to another following a Markov chain. In this model
 there can be an extremely high volatility process which is responsible for events
 such as the stock market crash in October 1987. Since this could happen at any
 time but with very low probability,   the behavior of risk averse agents will take this
 into account. The SWARCH model must again be estimated using Kalman filter
 techniques.
    The richness of the family of parametric ARCH models is both a blessing and a
curse. It certainly complicates the search for the “true” model, and leaves quite a
bit of arbitrariness  in the model selection stage. On the other hand, the flexibility
of the ARCH class of models means that in the analysis of structural economic
models with time varying volatility, there is a good chance that an appropriate
parametric ARCH model can be formulated that will make the analysis tractable.
For example, Campbell and Hentschell (1992) seek to explain the drop in stock
prices associated with an increase in volatility within the context of an economic
model. In their model, exogenous rises in stock volatility increase discount rates,
lowering stock prices. Using an EGARCH model would have made their formal
analysis intractable,   but based on a QARCH formulation           the derivations    are
straightforward.
   ‘These models sometimes   are also called stochastic   volatility   models; see Andersen   (1992a) for a more
formal definition.
2972                                                                                       T. Bollerslev et al.


1.4.   ARCH in mean models

Many theories in finance call for an explicit tradeoff between the expected returns
and the variance, or the covariance among the returns. For instance, in Merton’s
(1973) intertemporal       CAPM model, the expected excess return on the market
portfolio is linear in its conditional variance under the assumption of a representative
agent with log utility. In more general settings, the conditional         covariance with an
appropriately     defined benchmark     portfolio often serves to price the assets. For
example, according to the traditional capital asset pricing model (CAPM) the excess
returns on all risky assets are proportional     to the non-diversifiable     risk as measured
by the covariances with the market portfolio. Of course, this implies that the expected
excess return on the market portfolio is simply proportional           to its own conditional
variance as in the univariate Merton (1973) model.
   The ARCH in mean, or ARCH-M,              model introduced by Engle et al. (1987) was
designed to capture such relationships.        In the ARCH-M          model the conditional
mean is an explicit function of the conditional       variance,

                                                                                                       (1.19)

where the derivative of the g(., .) function with respect to the first element is non-zero.
The multivariate extension of the ARCH-M model, allowing for the explicit influence
of conditional   covariance terms in the conditional       mean equations, was first consi-
dered by Bollerslev et al. (1988) in the context of a multivariate      CAPM model. The
exact formulation of such multivariate ARCH models is discussed further in Section 6
below.
   The most commonly employed univariate specifications of the ARCH-M                model
postulate a linear relationship     in 0, or af; e.g. g[o:(@, 19]= p + ha:. For 6 # 0 the
risk premium will be time-varying,        and could change sign if p < 0 < 6. Note that
any time variation in CJ(will result in serial correlation in the {yt} process.3
   Because of the explicit dependence of the conditional         mean on the conditional
variance and/or covariance, several unique problems arise in the estimation             and
testing of ARCH-M         models. We shall return to a discussion of these issues in
Section 2.2 below.



1.5.   Nonparametric and semiparametric methods

A natural response to the overwhelming      variety of parametric univariate   ARCH
models, is to consider and estimate nonparametric   models. One of the first attempts
at this problem was by Pagan and Schwert (1990) who used a collection of standard


   3The exact form of this serial dependence   has been formally   analyzed   for some simple models in Hong
(1991).
Ch. 49: ARCH Models                                                                            2913


nonparametric    estimation methods, including kernels, Fourier series and least squares
regressions, to fit models for the relation between yf and past yt’s, and then compare
the fits with several parametric formulations.    Effectively, these models estimate the
function f(.) in

     y:=f(y,~1,y,-2,...,Yr-p,e)+rl,.                                                         (1.20)

 Several problems immediately             arise in estimating     f(.), however. Because of the
 problems of high dimensionality,           the parameter p must generally be chosen rather
 small, so that only a little temporal smoothing can actually be achieved directly
 from (1.20). Secondly, if only squares of the past y,‘s are used the asymmetric terms
 may not be discovered. Thirdly, minimizing the distance between y: and f, = f(y, _ 1,
 y,_ 2,. . , Y,-~, 6) is most effective if qt is homoskedastic,         however, in this case it is
 highly heteroskedastic.       In fact, if f, were the precise conditional      heteroskedasticity,
 then y:f, ’ and v,f, ‘, would be homoskedastic.                Thus, qt has conditional    variance
f:, so that the heteroskedasticity             is actually more severe than in y,. Not only
does parameter estimation become inefficient, but the use of a simple R2 measure
 as a model selection criterion is inappropriate.           An R2 criterion penalizes generalized
least squares or maximum likelihood estimators, and corresponds to a loss function
 which does not even penalize zero or negative predicted variances. This issue will
be discussed in more detail in Section 7. Indeed, the conclusion from the empirical
analysis for U.S. stock returns conducted in Pagan and Schwert (1990) was that
there was in-sample evidence that the nonparametric                 models could outperform the
GARCH and EGARCH models, but that out-of-sample                          the performance    deterio-
rated. When a proportional           loss function was used the superiority of the nonpara-
metric models also disappeared in-sample.
    Any nonparametric        estimation method must be sensitive to the above mentioned
issues. Gourieroux       and Monfort (1992) introduce a qualitative              threshold ARCH,
or QTARCH, model, which has conditional                   variance that is constant over various
multivariate      observation     intervals. For example, divide the space of y, into J
intervals and let Ij(Y,) be 1 if y, is in thejth interval. The QTARCH model is then
written as

                                                                                            (1.21)


where u, is taken to be i.i.d. The mij parameters    govern the mean and the bij
parameters govern the variance of the {y,} process. As the sample size grows, J can
be increased and the bins made smaller to approximate     any process.
   In their most successful application,  Gourieroux    and Monfort (1992) add a
GARCH term resulting in the G-QTARCH(l)          model, with a conditional variance
given by

     of = o + Boa:- 1 +                1   PjIj(Yl-   *I                                    (1.22)
                                  j=l,J
2914                                                                        T. Bollersleu
                                                                                        et al.



Interestingly, the estimates using four years of daily returns on the French stock
index (CAC) showed strong evidence of the leverage effect.
   In the same spirit, Engle and Ng (1993) propose and estimate a partially nonpara-
metric, or PNP, model, which uses linear splines to estimate the shape of the
response to the most recent news. The name of the model reflects the fact that the
long memory component is treated as parametric while the relationship between
the news and the volatility is treated nonparametrically.
   The semi-nonparametric series expansion developed in a sequence of papers by
Gallant and Tauchen (1989) and Gallant et al. (1991,1992,1993) has also been
employed in characterizing the temporal dependencies in the second order moments
of asset returns. A formal description of this innovative nonparametric procedure
is beyond the scope of the present chapter, however.


2.     Inference procedures

2.1.       Testing for ARCH

2.1 .I.     Serial correlation   and Lagrange   multiplier tests

The original Lagrange multiplier (LM) test for ARCH proposed by Engle (1982) is
very simple to compute, and relatively easy to derive. Under the null hypothesis it
is assumed that the model is a standard dynamic regression model which can be
written as

          Y, = XtP+ 57                                                                 (2.1)

where x, is a set of weakly exogenous and lagged dependent variables and E, is a
Gaussian white noise process,



where I, denotes the available information set. Because the null is so easily estimated,
the Lagrange multiplier test is a natural choice. The alternative hype thesis is that
the errors are ARCH(q), as in equation (1.6). A straightforward derivation of the
Lagrange multiplier test as in Engle (1984) leads to the TR’ test statistic, where the
RZ is computed from the regression of ETon a constant and sf_          r,. . , E:_~. Under
the null hypothesis that there is no ARCH, the test statistic is asymptotically
distributed as a chi-square distribution with q degrees of freedom.
   The intuition behind this test is very clear. If the data are homoskedastic, then
the variance cannot be predicted and variations in E: will be purely random.
However, if ARCH effects are present, large values of E: will be predicted by large
values of the past squared residuals.
Ch. 49: ARCH Models                                                                         2915


   While this is a simple and widely used statistic, there are several points which
should be made. First and most obvious, if the model in (2.1) is misspecified by
omission of a relevant regressor or failure to account for some non-linearity          or serial
correlation, it is quite likely that the ARCH test will reject as these errors may induce
serial correlation in the squared errors. Thus, one cannot simply assume that ARCH
effects are necessarily present when the ARCH test rejects. Second, there are several
other asymptotically      equivalent forms of the test, including the standard F-test from
the above regression. Another version of the test simply omits the constant but
subtracts the estimate of the unconditional      variance, g2, from the dependent variable,
and then uses one half the explained sum of squares as a test statistic. It is also quite
common to use asymptotically         equivalent portmanteau      tests, such as the Ljung and
Box (1978) statistic, for E:.
   As described above, the parameters          of the ARCH(q) model must be positive.
Hence, the ARCH test could be formulated as a one tailed test. When q = 1 this is
simple to do, but for higher values of q, the procedures are not as clear. Demos and
Sentana (1991) has suggested a one sided ARCH test which is presumably                    more
powerful than the simple TR* test described above. Similarly, since we find that the
GARCH(l,       1) is often a superior model and is surely more parsimoniously             para-
metrized, one would like a test which is more powerful for this alternative.                The
Lagrange multiplier principle unfortunately          does not deliver such a test because,
for models close to the null, tlr and PI cannot be separately identified. In fact, the
LM test for GARCH( 1,1) is just the same as the LM test for ARCH( 1); see Lee and
King (1993) which proposes a locally most powerful test for ARCH and GARCH.
   Of course, Wald type tests for GARCH may also be computed. These too are
non-standard,      however. The t-statistic on cur in the GARCH(l,          1) model will not
have a t-distribution     under the null hypothesis since there is no time-varying        input
and /?r will be unidentified. Finally, likelihood ratio test statistics may be examined,
although again they have an uncertain distribution under the null. Practical experience,
however, suggests that the latter is a very powerful approach to testing for GARCH
effects. We shall return to a more detailed discussion of these tests in Section 2.2.2
below.

2.1.2.   BDS test.for ARCH

The tests for ARCH discussed above are tests for volatility clustering rather than
general conditional heteroskedasticity,   or general non-linear dependence. One widely
used test for general departures from i.i.d. observations     is the BDS test introduced
by Brock, Dechert and Scheinkman         (1987). We will consider only the univariate
version of the test; the multivariate   extension is made in Baek and Brock (1992).
The BDS test has inspired quite a large literature and several applications           have
appeared in the finance area; see, e.g. Scheinkman and LeBaron (1989), Hsieh (1991)
and Brock et al. (1991).
   To set up the test, let {x,},=r,r denote a scalar sequence which under the null
2976                                                                                             T. Bollersleu et al.


hypothesis is assumed to be i.i.d. through time. Define the m-histories of the x,
process as the vectors (xi,.. .,x,,,), (x2 ,. ..,x,+J,(xj,..      .,x,+~),. . .,(x,_,,.   . .,XTel),
(Xvm+lr...,   xT).  Clearly,  there     are   T-m       +   1 such    m-histories,    and  therefore
(T - m + l)(T - m)/2 distinct pairs of m-histories.               Next, define the correlation
integral as the fraction of the distinct pairs of m-histories lying within a distance
c in the sup norm; i.e.

   C,,,,,(c) = [(T-m         + l)(T - m)/2]-’           c      1   I(maxj=,,,_,         Ix,-j-      x,_jJ cc).
                                                      f=rn,s s=m,T
                                                                                                               (2.3)

Under weak dependence         conditions,   C,,, (c) converges almost surely to a limit
C,(c). By the basic properties        of order-statistics,   C,(c) = C,(C)~ when {xt} is
i.i.d. The BDS test is based on the difference, [C,,,(c) - C1,T(c)m]. Intuitively,
C,,,(c) > C,,,(c)” means that when x,-~ and x,_~ are “close” forj = 1 to m - 1, i.e.
IllZlXj,~,,_~ 1x,_ j - x,_ jI< c, then x, and x, are more likely than average to be
close, also. In other words, nearest-neighbor        methods work in predicting the {x,)
series, which is inconsistent   with the i.i.d. assumption.4
    Brock et al. (1987) show that for fixed m and c, T”‘[C,,,(c)-             C,,T(~)m] is
asymptotically   normal with mean zero and variance V(m, c) given by

V(m,c)=4[K(c)“‘+2                c      K(c)“~jC,(c)2~+(m-1)2C,(c)2m-m2K(c)C,(c)2m~2],
                            j=l,m-1


                                                                                                               (2.4)

where K(c) = E{ [F(x, + c) - F(x, - c)]“}, and F(.) is the cumulative                              distribution
function of x,. The BDS test is then computed as

       T1’2CC,,r(c)     -   CI,TWY~(T, m,c),                                                                   (2.5)

where e(T, m, c) denotes a consistent estimator of V(m, c), details of which are given
by Brock et al. (1987,199l). For fixed m > 2 and c > 0, the BDS statistic in equation
(2.5) is asymptotically    standard normal.
   The BDS test has power against many, though not all, departures from i.i.d. In
particular, as documented by Brock et al. (1991) and Hsieh (1991), the power against
ARCH alternatives       is close to Engle’s (1982) test. For other conditionally hetero-
skedastic alternatives,     the power of the BDS test may be superior. To illustrate,
consider the following example from Brock et al. (1991), where 0: is deterministically


   “C,,,(c) < C,,r(c)m indicates the reverse of nearest-neighbors     predictability.    It is important   not to
push the nearest-neighbors    analogy too far, however. For example, suppose {x,} is an ARCH process
with a constant conditional     mean of 0. In this case, the conditional    mean of x, is always 0, and the
nearest-neighbors     analogy breaks down for minimum mean-squared-error              forecasting   of x,. It still
holds for forecasting, say, the probability  that X, lies in some interval.
Ch. 49: ARCH Models                                                                         2971


determined      by the tent map,

       O;+l = 1 - 210: - 0.5).                                                             (2.6)

with (ri~(O,l). The model is clearly heteroskedastic,          but does not exhibit volatility
clustering, since the empirical serial correlations         of {cJ:} approach zero in large
samples for almost all values of 0:.
   In order to actually implement the kDS test a choice has to be made regarding
the values of m and c. The Monte Carlo experiments of Brock et al. (199 1) suggest
that c should be between t and 2 standard deviations of the data, and that T/m
should be greater than 200 with m no greater than 5. For the asymptotic distribution
to be a good approximation       to the finite-sample behavior of the BDS test a sample
size of at least 500 observations     is required.
   Since the BDS test is a test for i.i.d., it requires some adaptation           in testing for
ARCH errors in the presence of time-varying            conditional    means. One of the most
convenient    properties of the BDS test is that unlike many other diagnostic tests,
including the portmanteau      statistic, its distribution     is unchanged when applied to
residuals from a linear model. If, for example, the null hypothesis is a stationary,
invertible, ARMA model with i.i.d. errors and the alternative hypothesis is the same
ARMA model but with ARCH errors, the standard BDS test remains valid when
applied to the fitted residuals from the homoskedastic               ARMA model. A similar
invariance property holds for residuals from a wide variety of non-linear regression
models, but as discussed in Section 2.4.2 below, this does not carry over to the
standardized    residuals from a fitted ARCH model. Of course, the BDS test may
reject due to misspecification    of the conditional     mean rather than ARCH effects in
the errors. The same is true, however, of the simple TR’ Lagrange multiplier test
for ARCH, which has power against a wide variety of non-linear               alternatives.


2.2.      Maximum likelihood     methods

2.2.1.     Estimation

The procedure most often used in estimating              8, in ARCH models involves the
maximization       of a likelihood function constructed      under the auxiliary assumption
of an i.i.d. distribution     for the standardized  innovations     in equation (1.5). In parti-
cular, let f(z,; q) denote the density function for z,(0) = E,(~)/o,(@ with mean zero,
variance one, and nuisance parameters ~EH c Rk. Also, let {yr, yr- 1,. . , y,} refer
to the sample realizations          from an ARCH model as defined by equations             (1.1)
through (1.4), and II/’ = (0’, tj) the combined (m + k) x 1 parameter            vector to be
estimated for the conditional         mean, variance and density functions.
   The log likelihood function for the tth observation          is then given by

         UY,; $) = ln {fCz,(&   ~11- 0.5 lnCflf(@l       t= 1,2,....                       (2.7)
2978                                                                                             T. Bollerslev et al.


The second term on the right hand side is a Jacobian that arises in the transformation
from the standardized  innovations,    z,(0), to the observables, Y,(Q).~ By a standard
prediction error decomposition     argument, the log likelihood function for the full
sample equals the sum of the conditional      log likelihoods in equation (2.7X6

        ~,(Y,,Y,-l,...,          Yli $) =    c UY*i II/).                                                     (2.8)

The maximum likelihood estimator (MLE) for the true parameters I& = (f&, &), say
tjT, is found by the maximization     of equation (2.8).
   Assuming the conditional     density and the mean and variance functions to be
differentiable for all $E 0 x H = Y, $, therefore solves

        ST(YYT,YT-l,...,Yl;~)-               1      S,(y,;ti)=O,                                              (2.9)
                                            1=1,T

where s,(y,; II/) = V&y,; II/) is the score vector for the tth observation.                      In particular,
for the conditional   mean and variance parameters,

        v,u~,;       b4= mm ~3- lfw4;                  w,~m - 0.54~               lb~:m                     (2.10)

where f’(z,(e); r) denotes           the derivative       of the density    function     with respect to the
first element, and

       v,z,(e) = - v,p,(eg(e)-              1’2- o.5&,(e)a:(e)-3’2v,afo.                                    (2.11)

In practice, the actual solution to the set of m + k non-linear equations in (2.9) will
have to proceed by numerical techniques. Engle (1982) and Bollerslev (1986) provide
a discussion of some of the alternative iterative procedures that have been successfully
employed in the estimation of ARCH models.
   Of course, the actual implementation         of the maximum       likelihood  procedure
requires an explicit assumption     regarding the conditional    density in equation (2.7).
By far the most commonly employed distribution          in the literature is the normal,

       f[z,(e)]       = (24 - ij2 exp [ - o.sz,(e)q.                                                        (2.12)

Since the normal distribution is uniquely determined by its first two moments, only
the conditional  mean and variance parameters       enter the likelihood function in

   51n the multivariate context, l,(y,: I(/)= ln{f[er(H)~t(8)~“2;~]}       - 0.5 ln(].R,(B)I), where 1.1denotes the
determinant.
   ‘In most empirical applications       the likelihood     function is conditioned        on a number of initial
observations   and nuisance parameters       in order to start up the recursions for the conditional           mean
and variance functions. Subject to proper stationarity            conditions    this practice does not alter the
asymptotic distribution   of the resulting MLE.
Ch. 49: ARCH      Models                                                                          2919


equation (2.8); i.e. $ = 0. If the conditional mean and variance functions are both
differentiable for all 8~0, it follows that the score vector in equation (2.10) takes
the simple form,

     s&; 0) = V,/~~(fI)c,(0)c~f(Q)- 1’2 + OSV,~;(t7)a:(fI-          “2[~t(tI)2a;(8))1    - 11. (2.13)

   From the discussion in Section 2.1 the ARCH model with conditionally        normal
errors results in a leptokurtic  unconditional  distribution.  However, the degree of
leptokurtosis  induced by the time-varying     conditional    variance often does not
capture all of the leptokurtosis   present in high frequency speculative prices. To
circumvent this problem Bollerslev (1987) suggested using a standardized       t-distri-
bution with v > 2 degrees of freedom,

    f[z,@);q]       =[7r(r/ - 2)]-“2I-[o.5(n     + l)]r(o.s~)-‘[l       +z,(e)(~-2)-‘]-‘“+“‘2,
                                                                                                 (2.14)

where I-(.) denotes the gamma function. The r-distribution         is symmetric around
zero, and converges to the normal distribution       for 9 + co. However, for 4 < q < co
the conditional   kurtosis equals 3(~ - 2)/(9 - 4), which exceeds the normal value of
three.
    Several other conditional   distributions  have been employed in the literature to
fully capture the degree of tail fatness in speculative prices. The density function for
the generalized error distribution     (GED) used in Nelson (1991) is given by

     f[z,(@;?j]     = P/-‘2-t    1+1i~)T(~-‘)-‘exp[-0.51z,(8)~-‘)”],                             (2.15)

where

     2 = [2(-2/“)~(~-‘)~(3~-l)-l]l/2                                                             (2.16)

For the tail-thickness    parameter    r] = 2 the density equals the standard     normal
density in equation (2.10). For r] < 2 the distribution       has thicker tails than the
normal, while q > 2 results in a distribution    with thinner tails than the normal.
   Both of these candidates for the conditional       density impose the restriction     of
symmetry. From an economic point of view the hypothesis of symmetry is of interest
since risk averse agents will induce correlation      between shocks to the mean and
shocks to the variance as developed more fully by Campbell and Hentschel(l992).
   Engle and Gonzalez-Rivera      (1991) propose to estimate the conditional      density
nonparametrically.     The procedure they develop first estimates the parameters         of
the model using the Gaussian likelihood. The density of the residuals standardized
by their estimated conditional    standard deviations is then estimated using a linear
spline with smoothness priors. The estimated density is then taken to be the true
density and the new likelihood function is maximized. The use of the linear spline
2980                                                                                    T. Bollersfeu et al.


simplifies the estimation in that the derivatives with respect to the conditional
density are easy to compute and store, which would not be the case for kernels or
many other methods. In a Monte Carlo study, this approach improved the efficiency
beyond the quasi MLE, particularly when the density was highly non-normal and
skewed.

2.2.2.    Testing

The primary appeal of the maximum likelihood technique stems from the well-
known optimality conditions of the resulting estimators under ideal conditions.
Crowder (1976) gives one set of sufficient regularity conditions for the MLE in
models with dependent observations to be consistent and asymptotically normally
distributed. Verification of these regularity conditions has proven extremely difficult
for the general ARCH class of models, and a formal proof is only available for a
few special cases, including the GARCH (1,1) model in Lumsdaine (1992a) and Lee
and Hansen (1993).’ The common practice in empirical studies has been to proceed
under the assumption that the necessary regularity conditions are satisfied.
   In particular, if the conditional density is correctly specified and the true parameter
vector IC/,Eint( Y), then a central limit theorem argument yields that

       T1’%b- $0) + NO, A, ‘),                                                                      (2.17)

where + denotes convergence in distribution. Again, the technical difficulties in
verifying (2.17) are formidable. The asymptotic covariance matrix for the MLE is
equal to the inverse of the information matrix evaluated at the true parameter vector
* 03

       Ao= - T-l         c    ECV,s,(y,;   11/o)l.                                                  (2.18)


The inverse of this matrix is less than the asymptotic covariance matrix for all other
estimators by a positive definite matrix. In practice, a consistent estimate for A, is
available by evaluating the corresponding sa_mple analogue at GT; i.e. replace
E[V,s,(y,; I++~)]in equation (2.18) with V&y,; I&=).Furthermore, as shown below,
the terms with second derivatives typically have expected value equal to zero and
therefore do not need to be calculated.
   Under the assumption of a correctly specified conditional density, the information
matrix equality implies that A, = B,, where B, denotes the expected value of the


   ‘As discussed in Section 3 below, the condition        that E(ln(a,zf +/II)] < 0 in Lunsdaine (1992a)
ensures that the GARCH(l,l)       model is strictly stationary  and ergodic. Note also, that by Jensen’s
inequality E(ln(cc,zf + PI)] <In E(a,z: + 8,) = In@, + j?,), so the parameter region covers the interest-
ing IGARCH(I,l)     case in which a, + b, = 1.
Ch.49:ARCH Models                                                                                  2981


outer product     of the gradients    evaluated     at the true parameters,

     Bo = T- l 1 ECs,(Yt;tio)s,(Y,; $o)'l.                                                       (2.19)
                   1=1,T



The outer product of the sample gradients evaluated at 6, therefore provides
an alternative     covariance    matrix estimator;        that is, replace the summand          in
equation (2.19) by the sample analogues s,(y,; Gr-)st(y,; $,)‘. Since analytical deriva-
tives in ARCH models often involve very complicated                recursive expressions, it is
common in empirical applications          to make use of numerical derivatives to approxi-
mate their analytical counterparts.        The estimator defined from equation (2.19) has
the computational     advantage that only first order derivatives are needed, as numerical
second order derivatives are likely to be unstable.8
    In many applications     of ARCH models the parameter vector may be partitioned
as 8’ = (Pi, PZ) where d1 and o2 operate a sequential cut on 0, x 0, = 0, such that
8i parametrizes the conditional mean and 8, parametrizes the conditional variance
function for y,. Thus, VQ~(~) = 0, and although V,,c~f(@ # 0 for all &@, it is
possible to show that, under fairly general symmetrical distributional            assumptions
regarding z, and for particular functional forms of the ARCH conditional               variance,
the information     matrix for 0’ = (Pi, &) becomes block diagonal. Engle (1982) gives
conditions and provides a formal proof for the linear ARCH(q) model in equation (1.6)
under the assumption of conditional          normality. As a result, asymptotically     efficient
estimates for 8,, may be calculated on the basis of a consistent estimate for Bol,
and vice versa. In particular,        for the linear regression model with covariance
stationary    ARCH disturbances,         the regression coefficients may be consistently
estimated by OLS, and asymptotically           efficient estimates for the ARCH parameters
in the conditional    variance calculated on the basis of the OLS regression residuals.
The loss in asymptotic efficiency for the OLS coefficient estimates may be arbitrarily
large, however. Also, the conventional         OLS standard errors are generally inappro-
priate, and should be modified to take account of the heteroskedasticity            as in White
(1980). In particular, as noted by Milhoj (1985), Diebold (1987), Bollerslev (1988)
and Stambaugh (1993) when testing for serial correlation in the mean in the presence
of ARCH effects, the conventional        Bartlett standard error for the estimated autocor-
relations, given by the inverse of the square root of the sample size, may severely
underestimate    the true standard error.
   There are several important cases in which block-diagonality             does not hold. For
example, block-diagonality       typically fails for functional forms, such as EGARCH,
in which 0: is an asymmetric          function of lagged residuals. Another important
exception is the ARCH-M           class of models discussed in Section 1.4. Consistent

   ‘In the Berndt, Hall, Hall and Hausman (1974) (BHHH) algorithm, often used in the maximization     of
the likelihood function, the covariance matrix from the auxiliary OLS regression in the last iteration
provides an estimate of B,. In a small scale Monte Carlo experiment Bollerslev and Wooldridge (1992)
found that this estimator performed reasonably    well under ideal conditions.
2982


estimation of the parameters in ARCH-M        models generally requires that both the
conditional   mean and variance functions be correctly specified and estimated simul-
taneously.   A formal analysis of these issues is contained      in Engle et al. (1987),
Pagan and Hong (1991) Pagan and Sabau (1987a, 1987b) and Pagan and Ullah
(1988).
    Standard hypothesis testing procedures concerning the true parameter vector are
directly available from equation (2.17). To illustrate, let the null hypothesis        of
interest be stated as T($,,) = 0, where I: 0 x H + R’ is differentiable  on int( Y) and
1-c m + k. If +,,Eint( Y) and rank [V&$,)]    = I, the Wald statistic takes the familiar
form




where C, denotes a consistent estimator of the covariance matrix for the parameter
estimates under the alternative.   If the null hypothesis is true and the regularity
conditions are satisfied, the Wald statistic is asymptotically chi-square distributed
with (m + k) - 1 degrees of freedom.
   Similarly, let $,, denote the MLE under the null hypothesis. The conventional
likelihood ratio (LR) statistic,




should then be the realization of a chi-square distribution     with (m + k) - I degrees of
freedom if the null hypothesis is true and $,Eint( Y).
   As discussed already in Section 2.1 above, when testing hypotheses about the
parameters in the conditional       variance of estimated ARCH models, non-negativity
constraints must often be imposed, so that GO is on the boundary of the admissible
parameter space. As a result the two-sided critical value from the standard asymptotic
chi-square distribution    will lead to a conservative test; recent discussions of general
issues related to testing inequality constraints are given in Gourieroux        et al. (1982),
Kodde and Palm (1986) and Wolak (1991).
   Another complication        that often arises when testing in ARCH models, also
alluded to in Section 2.1 above, concerns the lack of identification     of certain param-
eters under the null hypothesis. This in turn leads to a singularity of the information
matrix under the null and a breakdown of standard testipg procedures. For instance,
as previously noted in the GARCH(l,          1) model, /I1 and o are not jointly identified
under the null hypothesis that c(~ = 0. Similarly, in the ARCH-M             model, ~~(0) =
p + &$ with p # 0, the parameter S is only identified if the conditional          variance is
time-varying.   Thus, a standard joint test for ARCH effects and 6 = 0 is not feasible.
Of course, such identification     problems are not unique to the ARCH class of models,
and a general discussion is beyond the scope of the present chapter; for a more
detailed analysis along these lines we refer the reader to Davies (1977) Watson and
Engle (1985) and Andrews and Ploberger (1992, 1993).
Ch. 49: ARCH Models                                                                                    2983


   The finite sample evidence on the performance             of ARCH MLE estimators and
test statistics is still fairly limited: examples include Engle et al. (1985) Bollerslev
and Wooldridge         (1992), Lumsdaine       (1992b) and Baillie et al. (1993). For the
GARCH(l,       1) model with conditional        normal errors, the available Monte Carlo
evidence suggests that the estimate for cur + 6, is downward biased and skewed to
the right in small samples. This bias in oi, + fii comes from a downward bias in pi,
while oi, is upward biased. Consistent           with the theoretical results in Lumsdaine
(1992a) there appears to be no discontinuity          in the finite sample distribution  of the
estimators at the IGARCH(l,          1) boundary; i.e. c1i + fii = 1. Reliable inference from
the LM, Wald and LR test statistics generally does require moderately large sample
sizes of at least two hundred or more observations,            however.


2.3.    Quasi-maximum         likelihood   methods

The assumption        of conditional  normality    for the standardized     innovations    are
difficult to justify in many empirical applications.        This has motivated      the use of
alternative parametric distributional      assumptions    such as the densities in equation
(2.14) or (2.15). Alternatively, the MLE based on the normal density in equation (2.12)
may be given a quasi-maximum         likelihood interpretation.
   If the conditional   mean and variance functions are correctly specified, the normal
quasi-score in equation (2.13) evaluated at the true parameters            B0 will have the
martingale difference property,

       E,(V,~L,(Bo)&,(e,)o,2(eg)       + 0.5V,a:(B,)(r:(8,)~‘CE,(B0)2a:(e,)-’                - l]} = 0.
                                                                                                     (2.20)

Since equation      (2.20) holds for any value of the true parameters,             the QMLE
obtained    by maximizing        the conditional      normal   likelihood   function    defined
by equations      (2.7), (2.8) and (2.12), say gr,oMLE, is Fisher-consistent;           that is,
ECS,(Yr,Y,-I,...,      Y,; e)] = 0 for any 0~ 0. Under appropriate regularity conditions
this is sufficient to establish consistency         and asymptotic     normality    of $r,oMLE.
Wooldridge      (1994) provides a formal discussion.         Furthermore,    following Weiss
(1984, 1986) the asymptotic distribution         for the QMLE takes the form

       T1’2&oMLE - 0,) + N(0, A, r&4,                   ‘).                                          (2.21)

Under appropriate,      and difficult to verify, regularity conditions, the A, and B,
matrices are consistently estimated by the sample counterparts from equations (2.18)
and (2.19), respectively.
   Provided that the first two conditional    moments are correctly specified, it follows
from equation (2.13) that

       E,[V,s,(y,;   e,)]   = - v,~,(e)v,~,(e)‘a:(e)-         l - ~v,a:(e)v,a:(e),a:(e)-‘.           (2.22)
2984                                                                              T. Bollersleu et al.


As pointed out by Bollerslev and Wooldridge (1992) a convenient          estimate of the
information    matrix, A,, involving only first derivatives is therefore available by
replacing the right hand side of equation (2.18) with the sample realizations       from
equation (2.22).
   The finite sample distribution    of the QMLE and the Wald statistics based on the
robust covariance matrix estimator constructed       from equations (2.18), (2.19) and
(2.22) has been investigated     by Bollerslev and Wooldridge   (1992). For symmetric
departures from conditional       normality, the QMLE is generally close to the exact
MLE. However, as noted by Engle and Gonzales-Rivera          (1991), for non-symmetric
conditional   distributions  both the asymptotic   and the finite sample loss in effi-
ciency may be quite large, and semiparametric      density estimation, as discussed in
Section 1.5, may be preferred.



2.4.     Specijcation    checks

2.4.1.    Lagrange      multiplier diagnostic    tests

After a model is selected and estimated, it is generally desirable to test whether it
adequately represents the data. A useful array of tests can readily be constructed
from calculating Lagrange multiplier tests against particular parametric alternatives.
Since almost any moment condition can be formulated as the score against some
alternative,  these tests may also be interpreted      as conditional   moment tests; see
Newey (1985) and Tauchen (1985). Whenever one computes a collection of test
statistics, the question of the appropriate       size of the full procedure arises. It is
generally impossible to control precisely the size of a procedure when there are
many correlated       test statistics and conventional    econometric   practice does not
require this. When these tests are viewed as diagnostic tests, they are simply aids in
the model building process and may well be part of a sequential testing procedure
anyway. In this section, we will show how to develop tests against a variety of
interesting alternatives to any particular model. We focus on the simplest and most
useful case.
   Suppose we have estimated a parametric model with the assumption              that each
observation    is conditionally     normal with mean zero and variance gf = of(O). Then
the score can be written as a special case of (2.13),

       s&8)     = V,ln0:(8)[&:(B)o:(8)-’        - 11.                                         (2.23)

In order to conserve       space, equation      (2.23) may be written   more compactly      as

       se,= %,U,,                                                                             (2.24)

where x0, denotes       the k x 1 vector of derivatives    of the logarithm   of the conditional
Ch. 49: ARCH    Models                                                                 2985


variance equation with respect to the parameters 8, and u, = &:(&r:(G)- ’ - 1 defines
the generalized residuals. From the first order conditions in equation (2.9), the MLE
for 8, gT, solves

       1     A$*=      1     &ii,    = 0.                                            (2.25)
     1=1,T          *= l,T



   Suppose that the additional   set of r parameters, represented by the r x 1 vector
y, have been implicitly set to zero during estimation. We wish to test whether this
restriction is supported by the data. That is, the null hypothesis may be expressed
as y0 = 0, where 0: = a:(e, y). Also, suppose that the score with respect to y has the
same form as in equation (2.24),

     sYf = x,,u,.                                                                    (2.26)

   Under fairly general regularity conditions, the scores themselves when evaluated
at the true parameter under the null hypothesis, 8,, will satisfy a martingale central
limit theorem. Therefore,

     T1’*S&)        + N(0, V),                                                       (2.27)

where V = A, denotes the covariance matrix of the scores. The conventional   form of
the Lagrange multiplier test, as in Breusch and Pagan (1979) or Engle (1984) is then
given by

                                                                                     (2.28)
                    f=l,T               t=l,T



where tj = (Q, y), represent estimates evaluated under the null hypothesis, and ?
denotes a consistent estimate of I/. As discussed in Section 2.2, a convenient estimate
of the information   matrix is given by the outer product of the scores,

     iiT = T- ’ c            $,&                                                     (2.29)
                    t=l,T



so that the test statistic can be computed in terms of a regression. Specifically, let
the T x 1 vector of ones be denoted z, and the T x (k + r) matrix of scores evaluated
under the null hypothesis be denoted by 9 = {iV1, s*w2,. . , iwT}. Then a simple form
of the LM test is obtained from

     tlT = L?($‘$)-$5               = TR*,                                           (2.30)

where the R* is the uncentered fraction of variance explained by the regression of
a vector of ones on all the scores. The test statistic in equation (2.30) is often referred
2986                                                                          T. Bollersleu et al.


to as the outer product of the gradient, or OPG, version of the test. It is very easy
to compute. In particular, using the BHHH estimation algorithm, the test statistic
is simply obtained by one step of the BHHH algorithm from the maximum achieved
under the null hypothesis.
    Studies of this version of the LM test, such as MacKinnon       and White (1985) and
Bollerslev and Wooldridge (1992), often find that it has size distortions and is not
very powerful as it does not utilize the structure of the problem under the null
hypothesis to obtain the best estimate of the information        matrix. Of course the R2
in (2.30) will be overstated if the likelihood function has not been fully maximized
under the null so that (2.25) is not satisfied. One might recommend             a first step
correction by BHHH to be certain that this is achieved.
    An alternative estimate of I/ corresponding       to equation (2.19) is available from
taking expectations     of S’S. In the simplified notation of this section,


       E(S’S) =    c E(uf x,x;, = E(uf) 1 E(x,xJ,                                         (2.3 1)
                  1=1,T                   f= l,T



where it is assumed that the conditional      expectation    E, _ ,(u:) is time invariant. Of
course, this will be true if the standardized    innovations     s,(B)o:(8)- ‘I2 has a distri-
bution which does not depend upon time or past information,             as typically assumed
in estimation. Consequently,    an alternative consistent estimator of V is given by

       ?r = (T-‘iYa)(T-‘X’X),                                                             (2.32)

where u’ = {ui,. .,u,}, X’ = {x1,.    , xT}, and xi = {xkt, Xl*}. Since Z’S= u’X, the
Lagrange multiplier    test based on the estimator in equation (2.32) may also be
computed from an auxiliary regression,
               ^ _ _
       &r = ti’X(X’X)-‘X ^I u* = TR’.                                                     (2.33)

 Here the regression is of the percentage difference between the squared residuals
and the estimated conditional       variance regressed on the gradient of the logarithm
of the conditional    variance with respect to all the parameters including those set to
zero under the null hypothesis. This test statistic is similar to one step of a Gauss-
Newton iteration from an estimate under the null. It is called the Hessian estimate
by Bollerslev and Wooldridge (1992) because it can also be derived by setting com-
ponents of the Hessian equal to their expected value, assuming only that the first
two moments are correctly specified, as discussed in Section 2.3. This version of the
test has considerable    intuitive appeal as it checks for remaining conditional   hetero-
skedasticity in u, as a function of x,. It also performed better than the OPG test in
the simulations    reported by Bollerslev and Wooldridge          (1992). This is also the
version of the test used by Engle and Ng (1993) to compare various model specifi-
cations. As noted by Engle and Ng (1993), the likelihood must be fully maximized
Ch. 49: ARCH   Models                                                                 2987


under the null if the test is to have the correct size. An approach to dealing with
this issue would be to first regress li, on & and then form the test on the basis
of the residuals from this regression. The RZ of this regression should be zero if the
likelihood is maximized, so this is merely a numerical procedure to purge the test
statistic of contributions from loose convergence criteria.
   Both of these procedures develop the asymptotic        distribution  under the null
hypothesis that the model is correctly specified including the normality assumption.
Recently, Wooldridge (1990) and Bollerslev and Wooldridge (1992) have developed
robust LM tests which have the same limiting distribution     under any null specifying
that the first two conditional     moments are correct. This follows in the line of
conditional   moment tests for GMM or QMLE as in Newey (1985) Tauchen (1985)
and White (1987,1994).
   To derive these tests, consider the Taylor series expansions of the scores around
the true parameter values, s,(0) and s,(0,),

                                      as
     7%,(&J = Tl’%),(&)+ Tl’2 2 (& - fy,),                                          (2.34)
                              ae

     T”*s,(e,) = T%,(&) + T”*         f$&e,
                                         - e,),
where the derivatives of the scores are evaluated at 8,. The derivatives in equations
(2.34) and (2.35) are simply the H,, and H,, elements of the Fessian, respectively.
The distribution   of the score with respect to y evaluated at 8, is readily obtained
from the left hand side of equation (2.34). In particular substituting   in (2.35), and
using (2.26) to give the limiting distribution of the scores,


      T%,(B,) + N(0, W),                                                             (2.36)

where

      W = Vyy- H,,H,‘V,,      - Vy/yeHo;lHey+ H,,H,’     VooH,‘Hor.                  (2.37)


Notice first, that if the scores are the derivatives of the true likelihood, then the
information    matrix equality will hold, and therefore H = V asymptotically.       In this
case we get the conventional      LM test described in (2.28) and computed generally
either as (2.30) or (2.33). If the normality assumption    underlying   the likelihood is
false so that the estimates are viewed as quasi-maximum      likelihood estimators, then
the expressions in equations (2.36) and (2.37) are needed.
   AS pointed out by Wooldridge (1990), any score which has the additional property
that H,, converges in probability    to zero can be tested simply as a limiting normal
with covariance matrix Vyu,or as a TR* type test from a regression of a vector of ones
2988                                                                           T. Elollersleu et al.


on &. By proper redefinition of the score, such a test can always be constructed.              To
illustrate, suppose that syf = xylu,, s,, = x0+, and au,/atI = - xBr. Also define

       s;t = (Xyr- x;$G,                                                                    (2.38)

where


                                                                                            (2.39)


The statistic based on s,: in equation (2.38) then tests only the part of x,, which is
orthogonal to the scores used to estimate the model under the null hypothesis. This
strategy generalizes to more complicated     settings as discussed by Bollerslev and
Wooldridge (1992).

2.4.2.    BDS specijication   tests

 As discussed in Section 2.1.2, the asymptotic distribution of the BDS test is unaffected
 by passing the data through a linear, e.g. ARMA, filter. Since an ARCH model
typically assumes that the standardized          residuals z, = a,~,~ are i.i.d., it seems
reasonable to use the BDS test as a specification          test by applying it to the fitted
 standardized   residuals from an ARCH model. Fortunately,           the BDS test applied to
the standardized      residuals has considerable     power to detect misspecification         in
ARCH models. Unfortunately,           the asymptotic distribution      of the test is strongly
affected by the fitting of the ARCH model. As documented               by Brock et al. (1991)
and Hsieh (1991), BDS tests on the standardized        residuals from fitted ARCH models
reject much too infrequently.       In light of the filtering properties of misspecified
ARCH models, discussed in Section 4 below, this may not be too surprising.
    The asymptotic distribution     of the BDS test for ARCH residuals has not yet been
derived. One commonly          employed procedure to get around this problem is to
simply simulate the critical values of the test statistic; i.e. in each replication generate
data by Monte Carlo methods from the specific ARCH model, then estimate the
ARCH model and compute the BDS test for the standardized                      residuals. This
approach is obviously very demanding computationally.
    Brock and Potter (1992) suggest another possibility for the case in which the condi-
tional mean of the observed data is known. Applying the BDS test to the logarithm
of the squared known residuals, i.e. In($) = ln(zF) + ln(o:), separates ln($) into an
i.i.d. component,    ln(z:), and a component      which can be estimated by non-linear
regression methods. Under the null of a correctly specified ARCH model, ln(zf) =
In($) - ln(a:) is i.i.d. and, subject to the regularity conditions of Brock and Potter
(1992) or Brock et al. (1991), the asymptotic distribution       of the BDS test is the same
whether applied to ln(z:) or to the fitted values In@,!) = In($) - ln(s:). While the-
assumption of a known conditional mean is obviously unrealistic in some applications,
Ch. 49: ARCH     Models                                                                                2989


it may be a reasonable approximation  for high frequency financial time series, where
the noise component    tends to swamp the conditional   mean component.



3.     Stationary and ergodic properties

3.1.    Strict stationarity


In evaluating   the stationarity of ARCH models, it is convenient     to recursively
substitute for the lagged E,‘Sand 0:‘s. For completeness, consider the multivariate
case where

       Ef = R cr12Zr,      2, - i.i.d.,        E(Z,) = 0, X r,    -q-&q     = 1, x n                  (3.1)

and

        n,=n(t,z,_,,z,_,             ,... ).                                                           (3.2)

Using the ergodicity criterion from Corollary                     1.4.2 in Krengel(1985),   it follows that
strict stationarityof {st}t, _ 4),dois equivalent                to the condition

        fl,=wk,,z,-,,...),                                                                             (3.3)

withR(.;,...)          measurable,      and

        Trace(f2,Ri)       < co      a.s.                                                              (3.4)

Equation (3.3) eliminates direct dependence of {a,} on t, while (3.4) ensures that
random shocks to {a,} die out rapidly enough to keep (a,} from exploding
asymptotically.
    In the univariate EGARCH(p, q) model, for example, equation (3.2) is obtained
by exponentiating        both sides of the definition      in equation      (1.11). Since In($)
is written in ARMA(p,q)            form, it is easy to see that if (1 + Cj=l,qcljxj) and
(1 -xi=     i,J&x’) have no common roots, equations (3.3) and (3.4) are equivalent to
all the roots of (1 - Ci=i,,jixi)          lying outside the unit circle. Similarly, in the
bivariate EGARCH model defined in Section 6.4 below, ln(ai,,), In(&)                       and p,,,
all follow ARMA processes giving rise to ARMA stationarity                 conditions.
    One sufficient      condition      for (3.4) is moment        boundedness;         i.e. clearly
E[Trace(f2,0~)P]      finite for some p > 0 implies Trace(R$:)          < CE a.s. For example,
Bollerslev (1986) shows that in the univariate             GARCH(p, q) model defined by
equation (1.9) E(af) is finite and (et} is covariance          stationary,     when xi= i,,fii +
Cj=   l,qaj < 1. This is a sufficient,  but not a necessary condition for strict stationarity,
however. Because ARCH processes are thick tailed, the conditions                   for “weak” or
2990


covariance    stationarity      arc often more stringent     than the conditions      for “strict”
stationarity.
   For instance,      in the univariate     GARCH(1, 1) model, (3.2) takes the form



              [
       c: = w 1 +        c
                      k=l,m
                                n
                              i=l.k
                                      (/I1 + cZ1z:-i)
                                                        1.                                    (3.5)


Nelson (1990b) shows that when w > O,o: < cc a.s., and {E,, of} is strictly stationary
if and only if E[ln(fii + crizf)] < 0. An easy application of Jensen’s inequality shows
that this is a much weaker requirement than c1r + /I, < 1, the necessary and sufficient
condition for (.st} to be covariance stationary.          For example, the simple ARCH(l)
model with z, N N(0, 1) and a1 = 3 and /?i = 0, is strictly but not weakly stationary.
    To grasp the intuition       behind this seemingly paradoxical          result, consider the
terms in the summation           in (3.5); i.e. ni= l,k(j31 + a,~:_~). Taking logarithms,         it
follows directly      that Ci= I,k ln(/Ii + u,z:_~) is a random             walk with drift. If
E[ln(Pi + u,z:_~)] > 0, the drift is positive and the random walk diverges to co a.s.
as k + co. If, on the other hand, E[ln(/Ii + u,z:_~)] < 0, the drift is negative and the
random walk diverges to - cc a.s. as k + 00, in which case ni= l,k(/?l + u,z:_~) tends
to zero at an exponential       rate in k a.s. as k -+ co. This, in turn, implies that the sum
in equation (3.5) converges a.s., establishing          (3.4). Measurability      in (3.3) follows
easily using Theorems 3.19 and 3.20 in Royden (1968).
    This result for the univariate GARCH(l,         1) model generalizes fairly easily to other
closely related ARCH models. For example, in the multivariate diagonal GARCH( 1,l)
model, discussed in Section 6.1 below, the diagonal elements of 0, follow univariate
GARCH( 1,l) processes. If each of these processes is stationary, the CauchyySchwartz
inequality ensures that all of the elements in R, are bounded a.s. The case of the
constant conditional      correlation multivariate      GARCH(l,      1) model in Section 6.3 is
similar. The same method can also be used in a number of other univariate cases
as well. For instance, when p = q = 1, the stationarity            condition for the model in
equation (1.16) is E[ln(cr:I(z,      > O)Iz,Iy + cr;I(z, <O)lz,l’)] < 0.
    Establishing   stationarity    becomes much more difficult when we complicate the
models even slightly. The extension to the higher order univariate                  GARCH(p,q)
model has recently been carried out by Bougerol and Picard (1992) with methods
which may be more generally applicable. There exists a large mathematics literature
on conditions for stationarity       and ergodicity for Markov chains; see, e.g. Numme-
lin and Tuominen (1982) and Tweedie (1983a). These conditions can sometimes be
verified for ARCH models, although much work remains establishing useful station-
arity criteria even for many commonly-used             models.


3.2.    Persistence

The notion of “persistence” of a shock to volatility within the ARCH class of models
is considerably more complicated than the corresponding       concept of persistence in
Ch.49:ARCH Models                                                                           2991

the mean for linear models. This is because even strictly stationary ARCH models
frequently do not possess finite moments.
   Suppose that {CT:}is strictly stationary and ergodic. Let F(o:) denote the uncondi-
tional cumulative distribution        function (cdf) for c:, and let F,(a:) denote the cdf of
c: given information       at time s < t. Then for any s, F,(a:) - F(a:) converges to 0 at
all continuity      points as t + co; i.e. time s information     drops out of the forecast
distribution     as t + co. Therefore, one perfectly reasonable definition of “persistence”
would be to say that shocks fail to persist when {o,‘} is stationary and ergodic.
    It is equally natural, however, to define persistence of shocks in terms of forecast
moments; i.e. to choose some q > 0 and to say that shocks to CJ: fail to persist if and
only if for every s, E,(afq) converges, as t + 00, to a finite limit independent        of time
s information.     Such a definition of persistence may be particularly appropriate when
an economic theory makes a forecast moment, as opposed to a forecast distribution,
the object of interest.
   Unfortunately,       whether or not shocks to {of} “persist” depends very much on
which definition is adopted. The conditional moment &(a:“) may diverge to infinity
for some q, but converge to a well-behaved limit independent             of initial conditions
for other q, even when the {o:} process is stationary and ergodic.
   Consider, for example, the GARCH( 1,1) model, in which




The expectation     of @: as of time s, is given by


                                                                                           (3.7)


 It is easy to see that E,(o:) converges to the unconditional       variance of w/(1 - c(r - pi)
 ast+coifandonlyifa,          +fli < l.IntheIGARCHmodelwitho>Oandcr,                   +pl = 1,
it follows that &(a:) -+ co a.s. as t -+ co. Nevertheless, as discussed in the previous
 section, IGARCH models are strictly stationary and ergodic. In fact, as shown by
 Nelson (1990b) in the IGARCH(l,             1) model E,(o:“) converges to a finite limit
 independent     of time s information       as t + cc whenever q < 1. This ambiguity          of
 “persistence” holds more generally. When the support of z, is unbounded              it follows
 from Nelson (1990b) that in any stationary and ergodic GARCH(l,              1) model, E,(azV)
diverges for all sufficiently large q, and converges for all sufficiently small q. For
many other ARCH models, moment convergence may be most easily established
with the methods used in Tweedie (1983b).
    While the relevant criterion for persistence may be dictated by economic theory,
in practice tractability     may also play an important       role. For example, E,(a:), and
its multivariate     extension discussed in Section 6.5 below, can often be evaluated
even when strict stationarity       is difficult to establish, or when &(a:“) for q # 1 is
intractable.
2992                                                                                      T. Bollerslev et al.


   Even so, in many applications,    simple moment convergence criterion have not
been successfully developed. This includes quite simple cases, such as the univariate
GARCH(p, q) model when p > 1 or q > 1. The same is true for multivariate       models,
in which co-persistence    is an issue. In such cases, the choice of 4 = 1 may be
impossible to avoid. Nevertheless, it is important to recognize that apparent persis-
tence of shocks may be driven by thick-tailed distributions    rather than by inherent
non-stationarity.


4.     Continuous time methods

ARCH models are systems of non-linear stochastic difference equations. This makes
their probabilistic    and statistical properties, such as stationarity,   moment finiteness,
consistency and asymptotic normality of MLE, more difficult than is the case with
linear models. One way to simplify the analysis of ARCH models is to approximate
the stochastic      difference equations     with more tractable       stochastic differential
equations. On the other hand, for certain purposes, notably in the computation                 of
point forecasts and maximum likelihood estimates, ARCH models are more conve-
nient than the stochastic differential equation models of time-varying               volatility
common in the finance literature; see, e.g. Wiggins (1987), Hull and White (1987)
Gennotte and Marsh (1991), Heston (1991) and Andersen (1992a).
   Suppose that the process {X,} is governed by the stochastic integral equation




where {Wl> is an N x 1 standard          Brownian    motion, and ,u(.) and 0’12(.) are
continuous     functions from RN into RN and the space of N x N real matrices
respectively. The starting value, X,, may be fixed or random. Following Karatzas
and Shreve (1988) and Ethier and Kurtz (1986), if equation (4.1) has a unique
weak-sense solution, the distribution     of the (X,} process is then completely deter-
mined by the following four characteristics:9
     (i) the cumulative distribution   function, F(x,), of the starting point X,;
    (ii) the drift p(x);
   (iii) the conditional covariance matrix 0(x) = Q(x)“~[Q(x)“~]‘;‘~
   (iv) the continuity, with probability    one, of {X,} as a function of time.
   Our interest here is either in approximating       (4.1) by an ARCH model or visa
versa. To that end, consider a sequence of first-order Markov processes {,,X,}, whose

   ‘Formally, we consider {X,} and the approximating      discrete time processes {,,X,} as random variables
in DR”[O, co), the space of right continuous   functions with finite left limits, equipped with the Skorohod
topology. D&O, cc) is a complete, separable metric space [see, e.g. Chapter 3 in Ethier and Kurtz
(1986)J
   roQ(x)l/z ISa matrix square root of L?(x), though it need not be the symmetric square root since
we require only that ~(~)‘~‘[L?(x)‘~‘]’    = a(x), not f2(~)‘~*f2(x)‘~’ = Q(x).
Ch. 49: ARCH       Models                                                                                  2993


sample paths are random step functions with jumps at times h, 2h, 3h,. . . . For each
h > 0, and each non-negative       integer k, define the drift and covariance functions by
/&)---lECbX,‘+i         - ,X,)/,X,    = x], and Q,(x) 3 h-’ Cov[(J,Xk+, - ,,Xk)l,,XL=x],
respectively. Also, let F&,x,) denote the cumulative distribution          function for ,,XO.
Since (i)-(iv) completely characterize the distribution        of the {X,} process, it seems
intuitive that weak convergence         of {,,Xt} to {X,} can be achieved by “matching”
these properties in the limit as hJ0. Stroock and Varadhan (1979) showed that this
is indeed the case.

Theorem 4.1. [Stroock and Varadhan (1979)]

Let the stochastic integral equation (4.1) have a unique weak-sense solution. Then
{,,Xr} converges weakly to {X,} for hJ0 if
     (i’) F,,(.) -+ F(.) as hJ0 at all continuity points of F(.),
    (ii’) p,,(x) -p(x) uniformly on every bounded x set as hJ0,
   (iii’) Q,(x) + n(x) uniformly on every bounded x set as h10,
   (iv’) for some 6 > 0, h-‘E[ Il,,Xk+l - hXk I/’ +’ lhXk = x] + 0 uniformly on every
          bounded x set as h10.”

    This result, along with various extensions, is fundamental     in all of the continuous
record asymptotics discussed below.
    Deriving the theory of continuous     time approximation     for ARCH models in its
full generality is well beyond the scope of this chapter. Instead, we shall simply
illustrate the use of these methods by explicit reference to a diffusion model frequently
applied in the options pricing literature; see e.g. Wiggins (1987). The model considers
an asset price, Y,, and its instantaneous    returns volatility, ot. The continuous      time
process for the joint evolution of (Y,, a,} with fixed starting values, (Y,, a,), is given
by

      dY,=pY,dt+            Y,a,dW,,,                                                                     (4.2)

and

      d [ln($)]      = - B[ln(a,2) - al dt + ICIcl Wz,t,                                                  (4.3)

where ,u, $,fi and c( denote the parameters    of the process, and WI,, and W,., are
driftless Brownian motions independent     of (Y,, ci) that satisfy



         1
      Ld”:-’ 2.1
                    CdW,,, d W,,,] = ;
                                           [
                                                  ;
                                                      1dt.                                                (4.4)


    I1 We define the matrix norm, 11’     I),by 11A ((= [Trace(AA’)]“‘.  It is easy to see why (i’)-(iii’) match
(i)-(iii) in the limit as h JO. That (iv’) leads to (iv) follows from HGlder’s inequality; see Theorem 2.2 in
Nelson (1990a)     for a formal proof.
2994                                                                                            77 Bollersleu et al.


Of course in practice, the price process is only observable at discrete time intervals.
However, the continuous    time model in equations (4.2)-(4.4) provides a very conve-
nient framework for analyzing issues related to theoretical asset pricing, in general,
and option pricing, in particular.     Also, by Ito’s lemma equation      (4.2) may be
equivalently written as


       dyt=        p-2        dt+a,dW,,,,
               (          >
where y, = ln( Y,). For many purposes            this is a more tractable       differential      equation.


4.1.     ARCH       models as approximations          to diffusions

Suppose that an economic model specifies a diffusion model such as equation (4. l),
where some of the state variables, including Q(x,), are unobservable.          Is it possible
to formulate an ARCH data generation process that is similar to the true process,
in the sense that the distribution    of the sample paths generated by the ARCH model
and the diffusion model in equation (4.1) becomes “close” for increasingly               finer
discretizations?
   Specifically, consider tlie diffusion model given by equations (4.2)-(4.4). Strategies
for approximating     diffusions such as this are well known. For example, Melino and
Turnbull (1990) use a standard Euler approximation          in defining (y,, gt),12


                                                                                                              p.9


             = ln(af)- hP[ln(cf)- a] + h1’2$z2,t+h,
       ln(af+h)                                                                                               (4.6)

for t = h, 2h, 3h,. . . . Here (yO, a,) is taken to be fixed, and (Zl,t, Z,,,) is assumed                   to be
i.i.d. bivariate normal with mean vector (0,O) and


                                                                                                              (4.7)


Convergence      of this set of stochastic difference equations     to the diffusion in
equations (4.2)-(4.4) as h 10 may be verified using Theorem 4.1. In particular, (i’)
holds trivially, since (y,,, CJ,,)are constants. To check conditions (ii’) and (iii’), note
that


       h-‘E,
                                                 (P
                                                  -m)1
                                              - /3[ln(a:)     - LY]
                                                                                                              (4.8)

  “See    Pardoux    and Talay (1985) for a general   discussion   of the Euler approximation       technique.
Ch. 49: ARCH Models                                                                                           2995


and

      h-‘Var,                                                                                                 (4.9)


which matches the drift and diffusion matrix of (4.2))(4.4). Condition (iv’) is nearly
trivially satisfied, since Zr,, and Z2,, are normally distributed          with arbitrary finite
moments. The final step of verifying that the limit diffusion has a unique weak-sense
solution    is often the most difficult and least intuitive            part of the proof for
convergence.      Nelson (1990a) summarizes          several sets of sufficient conditions,
however, and formally shows that the process defined by (4.5)-(4.7) satisfies these
conditions.
    While conditionally     heteroskedastic, the model defined by the stochastic difference
equations (4.5)-(4.7) is not an ARCH model. In particular, for p # 1 G: is not simply
a function of the discretely observed sample path of {yt} combined with a startup
value cri. More technically,        while the conditional      variance (y,,,, - y,)given the
a-algebra generated by {y,,of},,< r $ f e q uals ho:, it is not, in general, the conditional
variance of ( yt + h - y,) given the smaller a-algebra generated by { yr}O,h,Zh...htt,hland
ci. Unfortunately,     this latter conditional variance is not available in closed form.13
    To create an ARCH approximation            to the diffusion in (4.2)-(4.4) simply replace
(4.6) by

      ln(a:+,,)= lnbf) - MWf)                 - aI+ h”2g(Z,,t+J,                                            (4.10)

where g(.) is measurable          with E[Ig(Zl,t+,,)12+6] < 00 for some 6 > 0, and



                                                                                                            (4.11)


As an ARCH model, the discretization        defined by (4.5), (4.10) and (4.11) inherits
the convenient properties usually associated with ARCH models, such as the easily
computed likelihoods and inference procedures discussed in Section 2 above. As
such, it is a far more tractable approximation     to (4.2))(4.4) than the discretization
defined by equations (4.5)-(4.7).
   To complete the formulation       of the ARCH approximation,          an explicit g(.)
function is needed. Since E((Z,,,I)=(2/~)“2,E(Z1,t~Zl,t~)=0           and Var(lZl,ll)=
1 - (2/7t), one possible formulation   would be


                                                                                                            (4.12)


    13Jacquier et al. (1994) have recently   proposed   a computationally   tractable   algorithm   for computing
this conditional  variance.
2996                                                                       T Bollersleo et al.


This corresponds directly to the EGARCH model in equation (1.11). Alternatively,

                                           2       l/2
                                     1-P
       dZl*J       =   PtiZ,,, + $
                                     ( >
                                     7                   v:,,   - 1)                  (4.13)


also satisfies equation (4.11).This latter specification turns out to be the asymptotically
optimal filter for h JO, as discussed in Nelson and Foster (199 1,1994) and Section 4.3
below.


4.2.     Difusions as approximations to ARCH models

Now consider the question of how to best approximate a discrete time ARCH
model with a continuous time diffusion. This can yield important insights into the
workings of a particular ARCH model. For example, the stationary distribution
of 0,” in the AR(l) version of the EGARCH model given by equaton (1.11) is
intractable. However, the sequence of EGARCH models defined by equations (4.5)
and (4.10)-(4.12) converges weakly to the diffusion process in (4.2)-(4.4). When
/I > 0, the stationary distribution of ln(a:) is N(cr,11/‘/2/I).Nelson (1990a) shows
that this is also the limit of the stationary distribution of In(a:) in the sequence
of EGARCH models (4.5) and (4.10)-(4.12) as h JO. Similarly, the continuous limit
may result in convenient approximations for forecast moments of the (~,,a:)
process.
   Different ARCH models will generally result in different limit diffusions. To
illustrate, suppose that the data are generated by a simple martingale model with
a GARCH(l, 1) error structure as in equation (1.9). In the present notation, the
process takes the form,

       Ltt+h   =   Y, + %k+t, = Yt + &,+h                                             (4.14)

and

       a:+,
         = wh + (1 - tlh - ah”‘)a’ + h1j2ae2   f                 t+h,                (4.15)

where given time t information, E,+~is N(0, a;), and (x,, a,,) is assumed to be fixed.
Note that using the notation for the GARCH(p,q) model in equation (1.9)
a, + fil = 1 - Bh, so for increasing sampling frequencies, i.e., as hJ0, the parameters
of the process approach the IGARCH(l, 1) boundary as discussed in Section 3.
Following Nelson (1990a)


                                                                                     (4.16)
Ch. 49: ARCH Models                                                                                    2991


and


                                                                                                     (4.17)


Thus, from Theorem           4.1 the limit diffusion      is given by

       dx,=a*dW,,,                                                                                   (4.18)

and

                                                                                                     (4.19)

where WI,, and W,,, are independent           standard Brownian motions.
    The diffusion defined by equations (4.18) and (4.19) is quite different from the
EGARCH limit in equations (4.2)-(4.4). For example, if d/2a2 > - 1, the stationary
distribution of c: in (4.19) is an inverted gamma, so as h 10 and t + co, the normalized
increments    h-‘12(y,+h - y,) are conditionally      normally   distributed  but uncondi-
tionally Student’s t. In particular,      in the IGARCH case corresponding        to 0 = 0,
as hJ0 and t + co, h-‘iZ(y,+h - y,) approaches a Student’s t distribution         with two
degrees of freedom. In the EGARCH case, however, h - I/‘( y, +,, - y,) is conditionally
normal but is unconditionally      a normal-lognormal      mixture. When 0: is stationary,
the GARCH formulation          in (1.9) therefore gives rise to unconditionally    thicker-
tailed residuals than the EGARCH model in equation (1.11).



4.3.    ARCH models as jilters and forecasters

Suppose that discretely sampled observations          are only available for a subset of
the state variables in (4.1), and that interest centers on estimating the unobservable
state variable(s), Q(x,). Doing this optimally       via a non-linear     Kalman     filter is
computationally    burdensome;     see, e.g. Kitagawa (1987).14 Alternatively,      the data
might be passed through a discrete time ARCH model, and the resulting conditional
variances from the ARCH model viewed as estimates for 0(x,). Nelson (1992)
shows that under fairly mild regularity conditions,        a wide variety of misspecified
ARCH models consistently extract conditional         variances from high frequency time
series. The regularity conditions     require that the conditional     distribution    of the
observable series is not too thick tailed, and that the conditional     covariance matrix
moves smoothly over time. Intuitively, the GARCH filter defined by equation (1.9)
   “‘An approximate     linear Kalman filter for a discretized version of(4.1) has been employed by Harvey
et al. (1994). The exact non-linear filter for a discretized version of (4.1) has been developed by Jacquier
et al. (1994). Danielson and Richard (1993) and Shephard (1993) also calculate the exact likelihood by
computer intensive methods.
2998                                                                                           T. Bollerslev et al.


estimates the conditional    variance by averaging squared residuals over some time
window, resulting in a nonparametric     estimate for the conditional variance at each
point in time. Many other ARCH models can be similarly interpreted.
   While many different ARCH models may serve as consistent filters for the same
diffusion process, efficiency issues may also be relevant in the design of an ARCH
model. To illustrate, suppose that the Y, process is observable at time intervals of
length h, but that g: is not observed. Let 8: denote some initial estimate of the
conditional  variance at time 0, with subsequent estimates generated by the recursion

       ln(@+,) = ln(8f) + hK(8:) + h”‘g[8f,                 h-“2(Y,+h     -   Y,)l.                        (4.20)

The set of admissible g(.;) functions is restricted by the requirement           that E,{g[af,
h-“2(Yt+h - y,)]} be close to zero for small values of h.i5 Define the normalized
estimation error from this filter extraction as qt = h-‘14[ln(8:)        - ln(of)].
    Nelson and Foster (1994) derive a diffusion approximation           for qt when the data
have been generated by the diffusion in equations (4.2)-(4.4) and the time interval
shrinks to zero. In particular, they show that qt is approximately normally distributed,
and that by choosing the g(., .) function to minimize the asymptotic                variance of
q,, the drift term for ln(a:)     in the ARCH model, K(.), does not appear in the
resulting minimized asymptotic variance for the measurement               error. The effect is
second order in comparison      to that of the g(., .) term, and creates only an asympto-
tically negligible bias in qt. However, for rc(r~f)s - fi[ln(a:) - a], the leading term
of this asymptotic    bias also disappears. It is easy to verify that the conditions          of
Theorem 4.1 are satisfied for the ARCH model defined by equation (4.20) with
~(a’) = - j3[ln(a2) - a] and the variance minimizing g(., .). Thus, as a data generation
process this ARCH model converges weakly to the diffusion in (4.2)-(4.4). In the
diffusion limit the first _two conditional      moments       completely     characterize    the
process, and the optimal ARCH filter matches these moments.
    The above result on the optimal choice of an ARCH filter may easily be extended
to other diffusions and more general data generating             processes. For example,
suppose that the true data generation process is given by the stochastic difference
equation analogue of (4.2)-(4.4),


       Yt+Jl=Yt+h
                         ( 41
                           P-y          +51,t,                                                             (4.21)


       ln(af+,) = In($)          - hp[ln(af)    - a] + h1/252,f,                                           (4.22)

where (rl,tgt- ‘, t,,,) is i.i.d. and m d ependent oft, h and y,, with conditional density
f(lr .f, t2 .rJor) with mean (O,O), bounded 2 + 6 absolute moments, Var,({,,,) = a:,

    “Formally,    the function   must satisfy that h-‘/4E,{g[uf,   h-1’2(y,+, - y,)] } + 0uniformly   on bounded
(y,, uC) sets as hJ0.
Ch. 49: ARCH     Models                                                                       2999


and Var,(t,,,) = II/‘. This model can be shown to converge weakly to (4.2)-(4.4) as
h10. The asymptotically         optimal filter for the model given by equations (4.21) and
(4.22) has been derived in Nelson and Foster (1994). This optimal ARCH filter
when (4.21) and (4.22) are the data generation           process is not necessarily the same
as the optimal filter for (4.2)-(4.4). The increments in a diffusion such as (4.2))(4.4)
are approximately        conditionally    normal over very short time intervals, whereas
the innovations     (rl,l, c2,J in (4.21) and (4.22) may be non-normal.          This affects the
properties of the ARCH filter. Consider estimating a variance based on i.i.d. draws
from some distribution         with mean zero. If the distribution       is normal, averaging
squared residuals is an asymptotically         efficient method of estimating the variance.
Least squares, however, can be very inefficient if the distribution             is thicker tailed
than the normal. This theory of robust scale estimation,               discussed in Davidian
and Carroll (1987) and Huber (1977) carries over to the ARCH case. For example,
estimating 0: by squaring a distributed           lag of absolute residuals, as proposed by
Taylor (1986) and Schwert (1989a, b), will be more efficient than estimating 0: with a
distributed lag of squared residuals if the conditional distribution         of the innovations
is sufficiently thicker tailed than the normal.
   One property of optimally designed ARCH filters concerns their resemblance to
the true data generating process. In particular, if the data were generated by the
asymptotically    optimal ARCH filter, the functional form for the second conditional
moment of the state variables would be the same as in the true data generating
process. If the conditional         first moments also match, the second order bias is
similarly eliminated.      Nelson and Foster (1991) show that ARCH models which
match these first two conditional          moments also have the desirable property that
the forecasts generated by the possibly misspecified ARCH model approach the
forecasts from the true model as hJ0. Thus, even when ARCH models are mis-
specified, they may consistently estimate the conditional          variances. Unfortunately,
the behavior of ARCH filters with estimated as opposed to known parameters,
and the properties of the parameter estimates themselves, are not yet well understood.



5.      Aggregation    and forecasting

5. I.    Temporal     aggregation

The continuous     record asymptotics discussed in the preceding section summarizes
the approximate       relationships     between continuous        time stochastic    differential
equations and discrete time ARCH models defined at increasingly higher sampling
frequencies. While the approximating           stochastic differential equations may result
in more manageable          theoretical   considerations,     the relationship    between high
frequency ARCH stochastic difference equations and the implied stochastic process
for less frequently     sampled, or temporally          aggregated,    data is often of direct
importance for empirical work. For instance, when deciding on the most appropriate
3ooo                                                                       T. Bollersleu et al.


sampling interval for inference purposes more efficient parameter estimates for the
low frequency process may be available from the model estimates obtained with
high frequency data. Conversely, in some instances the high frequency process
may be of primary interest, while only low frequency data is available. The
non-linearities in ARCH models severely complicate a formal analysis of temporal
aggregation. In contrast to the linear ARIMA class of models for conditional
means, most parametric ARCH models are only closed under temporal aggregation
subject to specific qualifications.
   Following Drost and Nijman (1993) we say that (E,} is a weak GARCH(p, q)
process if E, is serially uncorrelated with unconditional mean zero, and c:, as
defined in equation (1.9), corresponds to the best linear projection of E: on the
space spanned by {1, E,_ 1, E,_ 2,. . . , tzf_1, E:_*, . . . }. More specifically,

       E(Ef- c$,= E[ (Ef- fJf)E,_i] = E[ (Ef - a;)&;_i] = 0       i= 1,2,... .          (5.1)

 This definition of a weak GARCH(p, q) model obviously encompasses the conven-
 tional GARCH(p,q) model in which U: is equal to the conditional expectation of
 E: based on the full information set at time t - 1 as a special case. Whereas the
 conventional GARCH(p, q) class of models is not closed under temporal aggregation,
 Drost and Nijman (1993) show that temporal aggregation of ARIMA models with
 weak GARCH(p, q) errors lead to another ARIMA model with weak GARCH(p’, q’)
 errors. The orders of this temporally aggregated model and the model parameters
 depend on the original model characteristics.
    To illustrate, suppose that {Ed)follows a weak GARCH(l, 1)model with parameters
 0,~~ and B1. Let {Ed”‘}denote the discrete time temporally aggregated process
defined at t, t + m, t + 2m,. . . . For a stock variable E?) is obtained by sampling E,
every mth period. For a flow variable elm)E E,+ E,_ 1 + . . . + E,_ m+ 1. In both cases, it
 is possible to show that the temporally aggregated process, {E:“‘}, is also weak
GARCH(l, 1) with parameters W(~)= w[l - (~1~+ /?J”]/(l - a1 - pl) and u\“” =
(~1~+ BJ” - Pi”), where D\“’ is a complicated function of the parameters for the
 original process. Thus, a?’ + Birn)= (al + /?l)m, and conditional heteroskedasticity
disappears as the sampling frequency decreases, provided that CQ+ B1 < 1. Moreover,
for flow variables the conditional kurtosis of the standardized residuals, $“)[ajm)]-‘,
converges to the normal value of three for less frequently sampled observations.
This convergence to asymptotic normality for decreasing sampling frequencies of
temporally aggregated covariance stationary GARCH(p, q) flow variables has
been shown previously by Diebold (1988), using a standard central limit theorem
type argument.
    These results highlight the fact that the assumption of i.i.d. innovations invoked
in maximum likelihood estimation of GARCH models is necessarily specific to
the particular sampling frequency employed in the estimation. If E,O; l is assumed
i.i.d., the distribution of .$“‘[ajm’]- 1 will generally not be time invariant. Following
the discussion in Section 2.3, the estimation by maximum likelihood methods could
Ch. 49: ARCH Models                                                                                               3001


be given a quasi-maximum      likelihood type interpretation,   however. Issues pertaining
to the efficiency of the resulting estimators remain unresolved.
   The extension of the aggregation      results for the GARCH(p,q)       model to other
parametric     specifications  is in principle   straightforward.    The cross sectional
aggregation of multivariate     GARCH processes, which may be particularly relevant
in the formation of portfolios, have been addressed in Nijman and Sentana (1993).



5.2.    Forecast error distributions

 One of the primary objectives of econometric              time series model building is often
 the construction    of out-of-sample     predictions. In conventional       econometric models
 with time invariant      innovation     variances, the prediction      error uncertainty       is an
 increasing function of the prediction horizon, and does not depend on the origin
 of the forecast. In the presence of ARCH errors, however, the forecast accuracy
 will depend non-trivially      on the current information        set. The proper construction
 of forecast error intervals and post-sample structural stability tests, therefore, both
 require the evaluation      of future conditional      error variances.16
    A detailed analysis of the forecast moments for various GARCH models is
 available in Engle and Bollerslev (1986) and Baillie and Bollerslev (1992). Although
 both of these studies develop expressions for the second and higher moments of
 the forecast error distributions,         this is generally     not enough for the proper
construction     of confidence intervals, since the forecast error distributions              will be
leptokurtic and time-varying.
    A possible solution to this problem is suggested by Baillie and Bollerslev (1992),
who argue for the use of the Cornish-Fisher            asymptotic expansion to take account
of the higher order dependencies in the construction           of the prediction error intervals.
The implementation          of this expansion      requires the evaluation        of higher order
conditional     moments of E,+,,’ which can be quite complicated.              Interestingly,    in a
small scale Monte Carlo experiment, Baillie and Bollerslev (1992) find that under
the assumption of conditional normality for ~~a;‘, the ninety-five percent confidence
interval for multi-step predictions from the GARCH(l,              1) model, constructed under
the erroneous assumption          of conditional    normality of E~+~[E(~:+,)] -I” for s > 1,
has a coverage probability          quite close to ninety-five       percent. The one percent
fractile is typically underestimated         by falsely assuming conditional          normality    of
the multi-step leptokurtic prediction errors, however.
    Most of the above mentioned           results are specialized to the GARCH class of
models, although extensions to allow for asymmetric or leverage terms and multi-
variate formulations       in principle would be straightforward.         Analogous results on
forecasting ln(a:) for EGARCH models are easily obtained. Closed form expressions


   ’ bAlso, as discussed earlier, the forecasts   of the future conditional   variances   are often of direct interest
in applications    with financial data.
3002                                                                         T. Bollerslev et al.


for the moments of the forecast error distribution           for the EGARCH        model are
not available, however.
   As discussed in Section 4.3, an alternative        approximation     to the forecast error
distribution  may be based upon the diffusion limit of the ARCH model. If the
sampling frequency is “high” so that the discrete time ARCH model is a “close”
approximation      to the continuous      time diffusion limit, the distribution       of the
forecasts should be “good” approximations           too; see Nelson and Foster (1991). In
particular, if the unconditional    distribution     of the diffusion limit can be derived,
this would provide an approximation             to the distribution     of the long horizon
forecasts from a strictly stationary     model.
   Of course, the characteristics    of the prediction error distribution        may also be
analyzed through the use of numerical methods. In particular, let fJ.s,+J              denote
the density function for E~+~conditional        on information     up through time t. Under
the assumption of a time invariant conditional density function for the standardized
innovations,   f(~,g, ‘), the prediction     error density for E~+~ is then given by the
convolution


_f&t+J=

Evaluation
               ss
                ... f(&t+,~~~t’,)f(&,+,-l~~+ls-l)...f(&,+,~t+1l)dE,+,-ld&,+,-2.

              of this multi-step   prediction   error density may proceed directly by
numerical   integration.   This is illustrated  within a Bayesian context by Geweke
(1989a, b), who shows how the use of importance sampling and antithetic variables
can be employed in accelerating the convergence of the Monte Carlo integration.
In accordance     with the results in Baillie and Bollerslev (1992) Geweke (1989a)
finds that for conditional     normally distributed   one-step-ahead prediction errors,
the shorter the forecast horizon s, and the more tranquil the periods before the
origin of the forecast, the closer to normality is the prediction error distribution
for E,+,.


6.     Multivariate   specifications

Financial   market volatility moves together over time across assets and markets.
Recognizing this commonality       through a multivariate   modeling framework leads
to obvious gains in efficiency. Several interesting issues in the structural analysis
of asset pricing theories and the linkage of different financial markets also call for
an explicit multivariate      ARCH approach       in order to capture the temporal
dependencies    in the conditional   variances and covariances.
   In keeping with the notation of the previous sections, the N x 1 vector stochastic
process {E,} is defined to follow a multivariate    ARCH process if E,_ i(s,) = 0, but
the N x N conditional     covariance matrix,

       E,- (q~:)= n,,
           1                                                                               (6.1)
Ch. 49: ARCH Models                                                                               3003


depends non-trivially     on the past of the process. From a theoretical perspective,
inference in multivariate     ARCH models poses no added conceptual difficulties in
comparison to the procedures for the univariate case outlined in Section 2 above.
   To illustrate, consider the log likelihood function for {Q, Q_ 1,. . . , cl} obtained
under the assumption      of conditional multivariate normality,

       LT(~T,~T-l,...,~I;ICI)=      -0S[TNln(27r)+          C (lnI~tI+~~~,~‘~,)l.                (6.2)
                                                           1=1,T
This function corresponds         directly to the conditional        likelihood function for the
 univariate ARCH model defined by equations (2.7), (2.8) and (2.12), and maximum
likelihood, or quasi-maximum           likelihood, procedures may proceed as discussed in
 Section 2. Of course, the actual implementation               of a multivariate     ARCH model
necessarily     requires some assumptions            regarding    the format of the temporal
dependencies      in the conditional      covariance matrix sequence, {Q}.
    Several key issues must be faced in choosing a parametrization                  for Q. Firstly,
the sheer number of potential parameters in a geneal formulation                 is overwhelming.
All useful specifications must necessarily restrict the dimensionality            of the parameter
space, and it is critical to determine            whether they impose important             untested
characteristics     on the conditional        variance process. A second consideration               is
whether such restrictions        impose the required positive semi-definiteness               of the
conditional     covariance   matrix estimators.         Thirdly, it is important      to recognize
whether Granger causality in variance as in Granger et al. (1986) is allowed by
the chosen parametrization;          that is, does the past information           on one variable
predict the conditional variance of another. A fourth issue is whether the correlations
or regression coefficients are time-varying              and, if so, do they have the same
persistence properties as the variances? A fifth issue worth considering                 is whether
there are linear combinations         of the variables, or portfolios, with less persistence
than individual series, or assets. Closely related is the question of whether there exist
simple statistics which are sufficient to forecast the entire covariance matrix. Finally,
it is natural to ask whether there are multivariate               asymmetric     effects, and if so
how these may influence both the variances and covariances. Below we shall briefly
review some of the parametrizations            that have been applied in the literature, and
comment on their appropriateness           for answering each of the questions posed above.




6.1.    Vector ARCH and diagonal ARCH

Let vech(.) denote the vector-half  operator, which stacks the lower triangular
elements of an N x N matrix as an [N(N + I)/21 x 1 vector. Since the conditional
covariance matrix is symmetric, vech(Q) contains all the unique elements in Q.
Following Kraft and Engle (1982) and Bollerslev et al. (1988), a natural multivariate
extension of the univariate GARCH(p,q)     model defined in equation (1.9) is then
3004                                                                              T.Bollerslev et al.

given by

       vech(L?J = W+        C Aivech(&,_i&:_i) + 1           Bjvech(Q_j)
                           i= 1.9                    j=l,p


                = W+ A(L)vech(s,_ i&r)           + B(L)vech@~_,),                              (6.3)

where W is an [N(N + 1)/2] x 1 vector, and the Ai and Bj matrices are of dimension
[N(N + 1)/2] x [N(N + 1)/2]. This general formulation is termed the vet represen-
tation by Engle and Kroner (1993). It allows each of the elements in {Q} to depend
on all of the most recent q past cross products of the E,‘Sand all of the most recent p
lagged conditional variances and covariances, resulting in a total of [N(N + 1)/2].
 [l + (p + q)N(N + 1)/2] parameters. Even for low dimensions of N and small values
of p and q the number of parameters is very large; e.g. for N = 5 and p = q = 1
the unrestricted version of (6.3) contains 465 parameters. This allows plenty of
flexibility to answer most, but not all, of the questions above.” However, this
large number of parameters is clearly unmanageable, and conditions to ensure
that the conditional covariance matrices are positive definite a.s. for all t are
difficult to impose and verify; Engle and Kroner (1993) provides one set of sufficient
conditions discussed below.
    In practice, some simplifying assumptions will therefore have to be imposed. In
the diagonal GARCH(p, q) model, originally suggested by Bollerslev et al. (1988),
the Ai and Bj matrices are all taken to be diagonal. Thus, the (i,j)th element in
{Q} only depends on the corresponding past (i, j)th elements in {E&>and {Q}. This
restriction reduces the number of parameters to [N(N + 1)/2](1 + p + q). These
restrictions are intuitively reasonable, and can be interpreted in terms of a filtering
estimate of each variance and covariance. However, this model clearly does not
allow for causality in variance, co-persistence in variance, as discussed in Section 6.5
below, or asymmetries.
    Necessary and sufficient conditions on the parameters to ensure that the
conditional covariance matrices in the diagonal GARCH(p, q) model are positive
definite a.s. are most easily derived by expressing the model in terms of Hadamard
products. In particular, define the symmetric N x N matrices A* and BT implicitly
by Ai = diag[vech($)] i = 1,. . . , q, Bj = diag[vech(BT)] j = 1,. . . , p, and WE vech( W*).
The diagonal model may then be written as

       R,=w*+        c A;~(E,_~E;_~)+ c ByQ12-j,                                               (6.4)
                   i=l,q                     j=l,P



where 0 denotes the Hadamard               product. la It follows now by the algebra of

   “Note,  that even with this number of parameters, asymmetric terms are excluded by the focus on
squared residuals.
   “The Hadamard     product of two N x N matrices A and B is defined by {AOBJij = {A}ij{B}ij; see,
e.g. Amemiya (1985).
Ch. 49: ARCH Models                                                                       3005


Hadamard       products, that Lit is positive definite as. for all t provided that W* is
positive definite, and the AT and Bf matrices are positive semi-definite           for all
i= 1,..., q and j= l,..., p; see Attanasio (1991) and Marcus and Mint (1964) for
a formal proof. These conditions are easy to impose and verify through a Cholesky
decomposition       for the parameter matrices in equation (6.4). Even simpler versions
of this model which let either A* or Bf be rank one matrices, or even simply a
scalar times a matrix of ones, may be useful in some applications.
    In the alternative representation’of    the multivariate GARCH(p, q) model termed
by Engle and Kroner (1993) the Baba, Engle, Kraft and Kroner, or BEKK, represen-
tation, the conditional      covariance matrix is parametrized    as


                                                                                         (6.5)
                   k=l,Xi=l,q                     k=l,Kj=l,p



wherek’,A,,i=l,...,     q,k=l,..,,     K,andBjkj=l        ,..., p,k=l,...,  KareallNxN
matrices. This formulation        has the advantage      over the general specification     in
equation (6.3) that Q is guaranteed       to be positive definite a.s. for all t. The model
in equation (6.5) still involves a total of [l + (p + q)K]N’ parameters.           By taking
vech((l,) we can express any model of the form (6.5) in terms of (6.3). Thus any
vet model in (6.3) whose parameters          can be expressed as (6.5) must be positive
definite. However, in empirical applications,      the structure of the Aik and Bjk matrices
must be further simplified as this model is also overparametrized.           A choice made
by McCurdy and Stengos (1992) is to set K =p= q = 1 and make A, and B,
diagonal. This leads to the simple positive definite version of the diagonal vet model

       a,= w*+c(lcr;o(E,_lE:_l)+DIB;O,Rt_l,                                              (6.6)
where A, = diag[a,]         and B, = diag[j?,].



6.2.    Factor ARCH

The Factor ARCH model can be thought of as an alternative simple parametriza-
tion of (6.5). Part of the appeal of this parametrization  in applications with asset
returns stems from its derivation     in terms of a factor type model. Specifically,
suppose that the N x 1 vector of returns y, has a factor structure with K factors
given by the K x 1 vector &, and time invariant factor loadings given by the N x K
matrix B:

       Y, = B5, + E,.                                                                    (6.7)

Assume that the idiosyncratic     shocks, E,, have constant       conditional covariances
Y’, and that the factors, 5,, have conditional   covariance      matrix A,. Also, suppose
3006                                                                   T. Bollersleu et al.


that E, and 5, are uncorrelated, or that they have constant        correlations.     The
conditional covariance matrix of y, then equals

       v,_1(y,)= n, = Y + BA,B’.                                                    (6.8)

If A, is diagonal with elements IZkf,or if the off-diagonal elements are constant and
combined into Y, the model may therefore be written as

       0, = Y+     c BkP;nk*Y                                                       (6.9)
                 k=l,K



where flk denotes the kth column in B. Thus, there are K statistics which determine
the full covariance matrix. Forecasts of the variances and covariances or of any
portfolio of assets, will be based only on the forecasts of these K statistics. This
model was first proposed in Engle (1987), and implemented empirically by Engle
et al. (1990b) and Ng et al. (1992) for treasury bills and stocks, respectively.
   Diebold and Nerlove (1989) suggested a closely related latent factor model,

                                                                                    (6.9’)
                 k=l,K



in which the factor variances, S& were not functions of the past information set.
An estimation approach based upon an approximate Kalman filter was used
by Diebold and Nerlove (1989). More recently King et al. (1994) have estimated
a similar latent factor model using theoretical developments in Harvey et al. (1994).
   An immediate implication of (6.8) and (6.9) is that, if K < N, there are some
portfolios with constant variance. Indeed a useful way to determine K is to find
how many assets are required to form such portfolios. Engle and Kozicki (1993)
present this as an application of a test for common features. This test is applied
by Engle and Susmel(1993) to determine whether there is evidence that international
equity markets have common volatility components. Only for a limited number
of pairs of the countries analyzed can a one factor model not be rejected.
   A second implication of the formulation in (6.8) is that there exist factor-
representing portfolios with portfolio weights that are orthogonal to all but one
set of factor loadings. In particular, consider the portfolio rkt = 4;y,, where +;Bj
equals 1 ifj = k and zero otherwise. The conditional variance of rkt is then given by

                                                                                   (6.10)

where $k = 4; Y$,. Thus, the portfolios rkl have exactly the same time variation
as the factors, which is why they are called factor-representing portfolios.
   In order to estimate this model, the dependence of the Akr’s upon the past
information set must also be parametrized. The simplest assumption is that there
is a set of factor-representing portfolios with univariate GARCH( 1,l) representa-
Ch. 49: ARCH Models                                                                        3007


tions. Thus,

                                                                                         (6.11)


and, therefore,


                             k=l,K                        k=l,K




so that the factor ARCH model is a special case of the BEKK parametrization.
Clearly, more general factor ARCH models would allow the factor representing
portfolios to depend upon a broader information         set than the simple univariate
assumption     underlying    (6.11).
   Estimation    of the factor ARCH model by full maximum           likelihood    together
with several variations       has been considered  by Lin (1992). However, it is often
convenient    to assume that the factor-representing    portfolios are known a priori.
For example, Engle et al. (1990b) assumed the existence of two such portfolios:
one an equally weighted treasury bill portfolio and one the Standard and Poor’s
500 composite stock portfolio. A simple two step estimation           procedure is then
available, by first estimating the univariate models for each of the factor-representing
portfolios. Taking the variance estimates from this first stage as given, the factor
loadings may then be consistently estimated up to a sign, by noticing that each of
the individual assets has a variance process which is linear in the factor variances,
where the coefficients equal the squares of the factor loadings. While this is surely
an inefficient estimator, it has the advantage that it allows estimation for arbitrarily
large matrices using simple univariate procedures.



6.3.       Constant          conditional   correlations

In the constant conditional correlations model of Bollerslev (1990), the time-varying
conditional    covariances        are parametrized     to be proportional     to the product of
the corresponding     conditional       standard deviations. This assumption greatly simpli-
fies the computational         burden in estimation,     and conditions    for 0, to be positive
definite a.s. for all t are also easy to impose.
   More explicitly, let D, denote the N x N diagonal matrix with the conditional
variances along the diagonal; i.e. {Dt}ii = {Q},, and {Dt}ij = 0 for i #j, i, j = 1,. . , N.
Also, let c denote the matrix of conditional            correlations; i.e. {&jij = {Q}ij[ {Q}ii.
{QJ,]-“‘,     i, j = 1,. . . , N. The constant conditional correlation model then assumes
that r, = I- is time-invariant,         so that the temporal variation in {a,} is determined
solely by the time-varying          conditional  variances,

       0       =   DwrDl/z
           I         f         f     .                                                   (6.13)
3008                                                                                         T. Bollerslev   et al.



If the conditional    variances along the diagonal in the D, matrices are all positive,
and the conditional        correlation    matrix r is positive definite, the sequence of
conditional    covariance matrices {Qj is guaranteed          to be positive definite a.s. for
all t. Furthermore,      the inverse of Q is simply given by L2, ’ = DfF”2r - 1Dle”2.
Thus, when calculating         the likelihood function in equation (6.2) or some other
multivariate     objective    function    involving  0,’    t = 1,. . ., T, only one matrix
inversion    is required for each evaluation.         This is especially relevant from a
computational      point of view when numerical derivatives are being used. Also, by
a standard multivariate       SURE analogy, r may be concentrated           out of the normal
likelihood function by (D,- li2e,)(D,- 1/2Q’r simplifying estimation even further.
   Of course, the validity of the assumption         of constant conditional      correlations
remains an empirical question.”          However, this particular formulation      has already
been successfully applied by a number of authors, including Baillie and Bollerslev
(1990), Bekaert and Hodrick (1993), Bollerslev (1990), Kroner and Sultan (1991),
Kroner and Claessens (1991) and Schwert and Seguin (1990).


6.4.       Bivariate    EGARCH

A bivariate version of the EGARCH model in equation (1.11) has been introduced
by Braun et al. (1992) in order to model any “leverage effects,” as discussed in
Section 1.2.3, in conditional betas. Specifically, let E,,( and sP,[ denote the residuals
for a market index and a second portfolio or asset. The model is then given by

       6%t = ~m.tGl,t                                                                                    (6.14)

and

       &
           P.1=   Bp,tEm,t+ flp.tZp,v                                                                    (6.15)

where {z,,~, z~,~} is assumed to be i.i.d with mean (0,O) and identity covariance
matrix. The conditional      variance of the market index, a:,,, is modeled by a
univariate EGARCH model,

       Wi,,) = CL + 4,Jn(~8fJ- %J + R,,z,,~-                1 +   Y,( Iz,,~- 1 I - E Iz,,, - 1 I).       (6.16)

The conditional          beta of sp,t with respect to E,,~, /?p,f, is modeled         as

       BP,,   =   4 + UP,,, - 1 - Al) + 11Z,,t - 1ZP,l- 1 + G&t -          1 +   J.3Zp.t
                                                                                      - 1.               (6.17)

The coefficients        j.2 and 1,, allow for “leverage     effects” in BP,,. The non-market,                  or

   19A formal moment based test for the assumption        of constant   conditional    correlations    has been
developed by Bera and Roh (1991).
Ch. 49: ARCH Models                                                                                 3009


idiosyncratic,   variance of the second portfolio, gi,*, is parametrized as a modified
univariate     EGARCH     model, to allow for both market and idiosyncratic       news
effects.




Braun et al. (1992) find that this model provides a good description                   of the returns
for a number of industry and size-sorted portfolios.



6.5.    Stationarity   and co-persistence

Stationarity    and moment convergence criteria for various univariate specifications
were discussed in Section 3 above. Corresponding       convergence criteria for multi-
variate ARCH models are generally complex, and explicit results are only available
for a few special cases.
   Specifically, consider the multivariate vet GARCH(l, 1) model defined in equation
(6.3). Analogous to the expression for the univariate GARCH(1, 1) model in equation
(3.10) the minimum mean square error forecast for vech(Q) as of time s < t takes
the form


       E,(vech(Q,))    = W
                                                       1 + (A, + ~,)‘~“vech(QJ,                  (6.19)


where (A 1 + II,)’ is equal to the identity matrix by definition. Let VA V- ’ denote
the Jordan decomposition of the matrix A, + B,, so that (A, + Br)‘-’ = VAt-sV-1.20
Thus, E,(vech(Q)) converges to the unconditional        covariance matrix of the process,
 W(Z - A, - B,)-‘, for t + cc a.s. if and only if the norm of the largest eigenvalue
of A, + B, is strictly less than one. Similarly, by expressing the vector GARCH(p, q)
model in companion first order form, it follows that the forecast moments converge,
and that the process is covariance stationary if and only if the norm of the largest
root of the characteristic     equation II - A(x- ‘) - B(x- ‘)I = 0 is strictly less than
one. A formal proof is given in Bollerslev and Engle (1993). This corresponds
directly to the condition for the univariate GARCH(p, q) model in equation (1.9)
where the persistence of a shock to the optimal forecast of the future conditional
variances    is determined    by the largest root of the characteristic        polynomial
c((x-I) + /I(x- ‘) = I. The conditions   for strict stationarity  and ergodicity for the
multivariate    GARCH(p,q)      model have not yet been established.

   “‘If the eigenvalues for A, + B, are all distinct, A equals the diagonal matrix of eigenvalues, and V
the corresponding     matrix of right eigenvectors. If some of the eigenvalues coincide, A takes the more
general Jordan canonical form; see Anderson (1971) for further discussion.
3010                                                                       T. Bollerslev et al.


   Results for other multivariate formulations are scarce, although in some instances
the appropriate conditions may be established by reference to the univariate results
in Section 3. For instance, for the constant conditional correlations model in
equation (6.13), the persistence of a shock to E,(Q), and conditions for the model
to be covariance stationary are simply determined by the properties of each of the
N univariate conditional variance processes; i.e., E,( {Q}ii) i = 1,. . , N. Similarly,
for the factor ARCH model in equation (6.9), stationarity of the model depends
directly on the properties of the univariate conditional variance processes for the
factor-representing porifolios; i.e. {Akf}k = 1,. . . , K.
   The empirical estimates for univariate and multivariate ARCH models often
indicate a high degree of persistence in the forecast moments for the conditional
variances; i.e. &(a:) or JY,({Q},),~)   i = 1,. . . , N, for t + co. At the same time, the
commonality in volatility movements suggest that this persistence may be common
across different series. More formally, Bollerslev and Engle (1993) define the
multivariate ARCH process to be co-persistent in variance if at least one element
in E,(Q) is non-convergent a.s. for increasing forecast horizons t-s, yet there
exists a non-trivial linear combination of the process, y’s,, such that for every forecast
origin s, the forecasts of the corresponding future conditional variances, E,(y’Qy),
converge to a finite limit independent of time s information. Exact conditions for
this to occur within the context of the multivariate GARCH(p, q) model in equation
(6.3) are presented in Bollerslev and Engle (1993). These results parallel the
conditions for co-integration in the mean as developed by Engle and Granger
(1987). Of course, as discussed in Section 3 above, for non-linear models different
notions of convergence may give rise to different classifications in terms of the
persistence of shocks. The focus on forecast second moments corresponds directly
to the mean-variance trade-off relationship often stipulated by economic theory.
   To further illustrate this notion of co-persistence, consider the K-factor
GARCH(p,q) model defined in equation (6.12). If some of the factor-representing
portfolios have persistent variance processes, then individual assets with non-zero
factor loadings on such factors will have persistence in variance, also. However,
there may be portfolios which have zero factor loadings on these factors. Such
portfolios will not have persistence in variance, and hence the assets are co-
persistent. This will generally be true if there are more assets than there are
persistent factors. From a portfolio selection point of view such portfolios might
be desirable as having only transitory fluctuations in variance. Engle and Lee
(1993) explicitly test for such an effect between large individual stocks and a market
index, but fail to find any evidence of co-persistence.


7.     Model selection

Even in linear statistical models, the problem of selecting an appropriate model is
non-trivial, to say the least. The usual model selection difficulties are further compli-
Ch. 49: ARCH       Models                                                                             3011


cated in ARCH models by the uncountable         infinity of functional forms allowed by
equation (1.2) and the choice of an appropriate        loss function.
   Standard model selection criteria such as the Akaike (1973) and the Schwartz
(1978) criterion have been widely used in the ARCH literature, though their statistical
properties in the ARCH context are unknown. This is particularly              true when the
validity of the distributional  assumptions   underlying the likelihood is in doubt.
   Most model selection problems focus on estimation of means and evaluate loss
functions for alternative models using either in-sample criteria, possibly corrected
for fitting by some form of cross-validation,    or out-of-sample     evaluation. The loss
function of choice is typically mean squared error.
   When the same strategy is applied to variance estimation,           the choice of mean
squared error is much less clear. A loss function such as

      L, =     1 (Ef- CJf)’                                                                          (7.1)
             1=1.T



will penalize conditional   variance estimates which are different from the realized
squared residuals in a fully symmetrical fashion. However, this loss function does
not penalize the method for negative or zero variance estimates which are clearly
counterfactual.  By this criterion, least squares regressions of squared residuals on
past information  will have the smallest in-sample loss.
   More natural alternatives may be the percentage squared errors,

      L, =     1      (Ef - cTf,‘cr-“,                                                               (7.2)
             2=1.T

the percentage       absolute errors, or the loss function     implicit in the Gaussian       likelihood

      L, =     C      [ln(a:)   + $a,‘].                                                             (7.3)
             1=1,T



A simple alternative        which exaggerates     the interest in predicting      when residuals      are
close to zero is2’

      L, =     C [ln(sfa;2)]2.                                                                       (7.4)
             f= l.T

   The most natural loss function, however, may be one based upon the goals of the
particular application. West et al. (1993) developed such a criterion from the portfolio
decisions of a risk averse investor. In an expected utility comparison    based on the

   “Pagan    and Schwert (1990) used the loss functions L, and L, to compare alternative      parametric
and nonparametric     estimators  with in-sample and out-of-sample   data sets. As discussed in Section
1.5, the L, in-sample comparisons    favored the nonparametric  models, whereas the out-of-sample    tests
and the loss function L, in both cases favored the parametric models.
3012                                                                                   T Bollerslev   et al.

forecast of the return volatility, ARCH models turn out to fare very well. In a related
context, Engle et al. (1993) assumed that the objective was to price options, and
developed a loss function from the profitability of a particular trading strategy. They
again found that the ARCH variance forecasts were the most profitable.



8.     Alternative measures for voiatility

Several alternative procedures for measuring the temporal variation in second order
moments of time series data have been employed in the literature prior to the
development     of the ARCH methodology.        This is especially true in the analysis of
high frequency financial data, where volatility clustering has a long history as a
salient empirical regularity.
    One commonly employed technique for characterizing the variation in conditional
second order moments of asset returns entails the formation             of low frequency
sample variance estimates based on a time series of high frequency observations.
For instance, monthly sample variances are often calculated as the sum of the
squared daily returns within the month”;           examples include Merton (1980) and
Poterba and Summers (1986). Of course, if the conditional          variances of the daily
returns differ within the month, the resulting monthly variance estimates will
generally be inefficient; see French et al. (1987) and Chou (1988). However, even if
the daily returns are uncorrelated     and the variance does not change over the course
of the month, this procedure tends to produce both inefficient and biased monthly
estimates; see Foster and Nelson (1992).
   A related estimator for the variability may be calculated from the inter-period
highs and lows. Data on high and low prices within a day is readily available for
many financial assets. Intuitively, the higher the variance, the higher the inter-period
range. Of course, the exact relationship     between the high-low distribution     and the
variance is necessarily dependent on the underlying distribution      of the price process.
Using the theory of range statistics, Parkinson         (1980) showed that a high-low
estimator for the variance of a continuous      time random walk is more efficient than
the conventional     sample variance based on the same number of end-of-interval
observations.   Of course, the random walk model assumes that the variance remain
constant within the sample period. Formal extensions of this idea to models with
stochastic volatility are difficult; see also Wiggins (1991), who discusses many of the
practical problems, such as sensitivity to data recording errors, involved in applying
high-low estimators.
   Actively traded options currently exist for a wide variety of financial instruments.
A call option gives the holder the right to buy an underlying           security at a pre-


   “Since many high frequency asset prices exhibit low but significant first order serial correlation,
two times the first order autocovariance is often added to the daily variance in order to adjust for this
serial dependence.
Ch. 49: ARCH Models                                                                             3013


 specified price within a given time period. A put option gives the right to sell a
 security at a pre-specified price. Assuming that the price of the underlying security
 follows    a continuous      time random walk, Black and Scholes (1973) derived an
 arbitrage based pricing formula for the price of a call option. Since the only
 unknown      quantity in this formula is the constant instantaneous            variance of the
 underlying asset price over the life of the option, the option pricing formula may be
 inverted to infer the conditional      variance, or volatility, implicit in the actual market
 price of the option. This technique is widely used in practice. However, if the
 conditional    variance of the asset is changing through time, the exact arbitrage
 argument underlying         the Black-Scholes      formula breaks down. This is consistent
 with the evidence in Day and Lewis (1992) for stock index options which indicate
 that a simple GARCH(l,           1) model estimated for the conditional        variance of the
 underlying index return provides statistically significant information           in addition to
 the implied volatility estimates from the Black-Scholes            formula. Along these lines
 Engle and Mustafa (1992) find that during normal market conditions the coefficients
 in the implied GARCH(l,           1) model which minimize the pricing error for a risk
 neutral stock option closely resemble the coefficients obtained using more conven-
 tional maximum likelihood estimation methods. 23 As mentioned in Section 4 above,
 much recent research has been directed towards the development                   of theoretical
 option pricing formulas in the presence of stochastic volatility; see, for instance,
 Amin and Ng (1993), Heston (1991), Hull and White (1987), Melino and Turnbull
 (1990), Scott (1987) and Wiggins (1987). While closed form solutions                   are only
 available for a few special cases, it is generally true that the higher the variance of
 the underlying      security, the more valuable the option. Much further research is
needed to better understand           the practical relevance and quality of the implied
volatility estimates from these new theoretical models, however.
     Finance theory suggests a close relationship         between the volume of trading and
the volatility; see Karpoff (1987) for a survey of some of the earlier contributions            to
this literature. In particular, according to the mixtures of distributions           hypothesis,
associated with Clark (1973) and Tauchen and Pitts (1983) the evolution of returns
and trading volume are both determined               by the same latent mixing variable that
reflects the amount of new information          that arrives at the market. If the news arrival
process is serially dependent, volatility and trading volume will be jointly serially
correlated. Time series data on trading volume should therefore be useful in inferring
the behavior of the second order moments of returns. This idea has been pursued
by a number of empirical studies, including Andersen (1992b), Gallant et al. (1992)
and Lamoureux and Lastrapes (1990). While the hypothesis that contemporaneous
trading volume is positively correlated with financial market volatility is supported


  ‘aMore specifically, Engle and Mustafa (1992) estimate the parameters for the implied GARCH(1, 1)
model by minimizing     the risk neutral option pricing error defined by the discounted  value of the
maximum of zero and the simulated future price of the underlying asset from the GARCH(1,l)     model
minus the exercise price of the option.
3014                                                                     T. Bollerslev et al.


in the data, the result that a single latent variable jointly determines both has been
formally rejected by Lamoureux and Lastrapes (1994).
   In a related context, modern market micro structure theories also suggest a close
relationship between the behavior of price volatility and the distribution of the
bid-ask spread though time. Only limited evidence is currently available on the
usefulness of such a relationship for the construction of variance estimates for the
returr?; see, e.g. Bollerslev and Domowitz (1993), Bollerslev and Melvin (1994) and
Brock and Kleidon (1992).
   The use of the cross sectional variance from survey data to estimate the variance
of the underlying time series has been advocated by a number of researchers. Zamowitz
and Lambros (1987) discuss a number of these studies with macroeconomic variables.
Of course, the validity of the dispersion across forecasts as a proxy for the variance
will depend on the theoretical connection between the degree of heterogeneity and
uncertainty; see Pagan et al. (1983). Along these lines it is worth noting that Rich
et al. (1992) only find a weak correlation between the dispersion across the forecasts
for inflation and an ARCH based estimate for the conditional variance of inflation.
The availability of survey data is also likely to limit the practical relevance of this
approach in many applications.
   In a related context, a number of authors have argued for the use of relative prices
or returns across different goods or assets as a way of quantifying inflationary
uncertainty or overall market volatility. Obviously, the validity of such cross
sectional based measures again hinges on very stringent conditions about the
structure of the market; see Pagan et al. (1983).
   While all of the variance estimates discussed above may give some idea about
the temporal dependencies in second order moments, any subsequent model estimates
should be carefully interpreted. Analogously to the problems that arise in the use
of generated regressors in the mean, as discussed by Pagan (1984,1986) and Murphy
and Topel(1985), the conventional standard errors for the coefficient estimates in
a second stage model that involves a proxy for the variance will have to be adjusted
to reflect the approximation error uncertainty. Also, if the conditional mean depends
non-trivially on the conditional variance, as in the ARCH-M model discussed
in Section 1.4, any two step procedure will generally result in inconsistent parameter
estimates; for further analysis along these lines we refer to Pagan and Ullah (1988).


9.     Empirical examples

9.1.    U.S. DollarlDeutschmark exchange rates

As noted in Section 1.2, ARCH models have found particularly wide use in the
modeling of high frequency speculative prices. In this section we illustrate the
empirical quasi-maximum likelihood estimation of a simple GARCH(l, 1) model
for a time series of daily exchange rates. Our discussion will be brief. A more detailed
and thorough discussion of the empirical specification, estimation and diagnostic
Ch. 49: ARCH Models                                                                                   3015


testing of ARCH models is given in the next section, which analyzes the time series
characteristics   of more than one hundred years of daily U.S. stock returns.
    The present data set consists of daily observations      on the U.S. Dollar/Deutsch-
mark exchange rate over the January 2,198l through July 9,1992 period, for a total
of 3006 observations.24      A broad consensus has emerged that nominal exchange
rates over the free float period are best described as non-stationary,           or I(l), type
processes; see, e.g. Baillie and Bollerslev (1989). We shall therefore concentrate          on
modeling the nominal percentage returns; i.e. yr = lOO[ln(s,) - In@_ r)], where s,
denotes the spot Deutschmark/U.S.          Dollar exchange rate at day t. This is the time
series plotted in Figure 2 in Section 1.2 above. As noted in that section, the daily
returns are clearly not homoskedastic, but are characterized by periods of tranquility
followed by periods of more turbulent exchange rate movements. At the same time,
there appears to be little or no own serial dependence in the levels of the returns.
These visual observations     are also borne out by more formal tests for serial correla-
tion. For instance, the Ljung and Box (1978) portmanteau            test for up to twentieth
order serial correlation in y, equals 19.1, whereas the same test statistic for twentieth
order serial correlation    in the squared returns, y:, equals 151.9. Under the null of
i.i.d. returns, both test statistics should asymptotically     be the realization of a chi-
square distribution     with twenty degrees of freedom. Note that in the presence of
ARCH, the portmanteau         test for serial correlation in y, will tend to over-reject.
    As discussed above, numerous parametric and nonparametric             formulations    have
been proposed for modeling the volatility clustering phenomenon.             For the sake of
brevity, we shall here concentrate          on the results for the particularly        simple
MA( I)-GARCH(        1,1) model,


       Yt = PO + 01&t-1+ Et,
                                                                                                      (9.1)
      a:=oo+o,W,--o,(a,                +Br)W,-,      +a&_,       +&a:_,,

where W, denotes a weekend dummy equal to one following a closure of the market.
The MA(l) term is included to take account of the weak serial dependence in the
mean. Following Baillie and Bollerslev (1989), the weekend dummy is entered in
the conditional    variance to allow for an impulse effect.
   The quasi-maximum         likelihood   estimates (QMLE) for this model, obtained
by the numerical       maximization     of the normal likelihood   function   defined by
equations (2.7), (2.8) and (2.12), are contained in Table 1. The first column in the
table shows that the c1r and /?r coefficients are both highly significant           at the
conventional    five percent level. The sum of the estimated GARCH parameters also
indicates a fairly strong degree of persistence in the conditional   variance process.25


   Z4The rates were calculated from the ECU cross rates obtained through Datastream.
   25Reparametrizing    the conditional variance in terms of (a1 +/I,) and x1, the r-test statistic for the
null hypothesis    that LX,+ PI = 1 equals 3.784, thus formally rejecting the IGARCH(1, 1) model at
standard significance levels.
3016                                                                                    T. Bollerslev et al.


                                                  Table 1
                                Quasi-maximum       likelihood   estimatesa

                                   Jan. 2, 1982                  Jan. 2, 1982          Oct. 7, 1986
Coefficient                        July 9, 1992                  Oct. 6, 1986          July 9, 1992

                                                                     0.014              - 0.017
                                                                    (0.018)               (0.016)

                                                                    ::::::j               ;::::I;{

Q,                                   - 0.056                       - 0.058                 0.055
                                       (0.014)                      (0.030)               (0.027)
                                                                    CO.0271               CO.0271
                                       \“,::::j                     {0.027)               {0.027}

%                                       0.028                        0.024                 0.035
                                       (0.005)                      (0.009)               (0.011)
                                                                                          [O.Ol 11
                                       i::Ej                        \u,:::j               (0.010)

ml                                      0.243                        0.197                 0.281
                                       (0.045)                      (0.087)               (0.087)
                                       co.03 l]                     CO.0621
                                       {0.022)                      (0.046)               ~::Z:j

x1                                      0.068                        0.076                 0.063
                                       (0.009)                      (0.022)               (0.017)

                                       i::::i                       ;:::::;               ;:::::jl

PI                                      0.880                        0.885                 0.861
                                       (0.015)                      (0.028)               (0.033)
                                       co.01 21                                           10.03 11
                                       (0.010)                                            {0.030)

   “Robust standard errors based on equation (2.21) are reported in parentheses,   (.). Standard errors
calculated from the Hessian in equation (2.18) are reported in [.I. Standard errors from on the outer
product of the sample gradients in (2.19) are given in { ‘}.



Consistent with the stylized facts discussed in Section 1.2.4, the conditional      variance
is also significantly higher following non-trading    periods.
   The second and third columns of Table 1 report the results with the same model
estimated for the first and second half of the sample respectively; i.e. January 2, 1981
through October 6, 1986 and October 7,1986 through July 9,1992. The parameter
estimates are remarkably     similar across the two sub-periods2’j
   In summary, the simple model in equation (9.1) does a remarkably            good job of
capturing    the own temporal dependencies      in the volatility of the exchange rate
series. For instance, the highly significant portmanteau     test for serial correlation in


   26Even though the assumption  of conditional  normality is violated empirically, it is interesting to
note that the sum of the maximized normal quasi log likelihoods       for the two sub-samples       equals
_ 1727.750 - 1597.166 = - 3324.916, compared    to - 3328.984 for the model estimated over the full
sample.
Ch. 49: ARCH   Models                                                                        3017

the squares of the raw series, y:, drops to only 21.687 for the squared standardized
residuals, E^,B;2. We defer our discussion of other residual based diagnostics to the
empirical example in the next section.
 _ While the GARCH(l,      1) model is able to track the own temporal dependencies,
the assumption of conditionally    normally distributed innovations    is clearly violated
by the data. The sample skewness and kurtosis for .$8,- ’ equal - 0.071 and 4.892,
respectively. Under the null of i.i.d. normally distributed standardized     residuals, the
sample skewness should be the realization of a normal distribution        with a mean of
0 and a variance    of 6/m         = 0.109, while the sample kurtosis        is asymptotically
normally distributed with a mean of 3 and a variance of 24/,,/%%          = 0.438.
   The standard errors for the quasi-maximum        likelihood estimates reported in (.)
in Table 1 are based on the asymptotic covariance matrix estimator discussed in
Section 2.3. These estimates are robust to the presence of conditional excess kurtosis.
The standard errors reported in [.I and {.} are calculated from the Hessian and
the outer product of the gradients as in equations (2.18) and (2.19), respectively. For
some of the conditional      variance parameters, the non-robust    standard errors are
less than one half of their robust counterparts. This compares to the findings reported
in Bollerslev and Wooldridge (1992), and highlights the importance of appropriately
accounting for any conditional non-normality      when conducting inference in ARCH
type models based on a normal quasi-likelihood        function.



9.2.   U.S. stock prices

We next turn to modeling heteroskedasticity        in U.S. stock index returns data.
Drawing on the optimal filtering results of Nelson and Foster (1991,1994) sum-
marized in Section 4, as a guidance in model selection, new very rich parametriza-
tions are introduced.
   From 1885 on, the Dow Jones corporation        has published various stock indices
daily. In 1928, the Standard Statistics company began publishing daily a wider index
of 90 utility, industrial  and railroad stocks. In 1953, the Standard 90 index was
replaced by an even broader index, the Standard and Poor’s 500 composite. The
properties of these indices are considered in some detail in Schwert (1990).27 The
Dow data has one substantial       chronological break, from July 30, 1914, through
December 11, 1914, when the financial markets were closed following the outbreak
of the First World War. The first data set we analyze is the Dow data from its
inception on February 16, 1885 until the market closure in 1914. The second data
set is the Dow data from the December 1914 market reopening until January 3,
1928. The third data set is the Standard 90 capital gains series beginning in January
4, 1928 and extending to the end of May 1952. The Standard 90 index data is

  “G William Schwert kindly provided the data. Schwert’s indices differ from ours aft& 1962, when
he use, the CRSP value weighted market index. We continue to use the S&P 500 through 1990.
3018                                                                                  T. Bollerslev et al.


available through the end of 1956, but we end at the earlier date because that is
when the New York Stock Exchange ended its Saturday trading session, which
presumably shifted volatility to other days of the week. The final data set is the S&P
500 index beginning in January 1953 and continuing      through the end of 1990.

9.2.1.          Model specification

Our basic capital           gains series, rl, is derived from the price index data, P,, as

         I, z lOOln[P,/P,_,].                                                                      (9.2)

Thus, I, corresponds             to the continuously compounded     capital gain on the index
measured in percent.             Any ARCH formulation    for rt may be compactly written as




and

         E, =    Z,‘C,,   z, - i.i.d.,   E[z,] = 0,   E[zf]    = 1,                                (9.4)

where &- 1, g:) and crt denote the conditional    mean and the conditional   standard
deviation, respectively.
   In the estimation     reported below we parametrized  the functional  form for the
conditional   mean by




This is very close to the specification in LeBaron (1992). The pI coefficient allows
for first order autocorrelation.    The u2 term denotes the sample mean of rf, which
is essentially equal to the unconditional      sample variance of rt. As noted by LeBaron
(1992), serial correlation     seems to be a decreasing function of the conditional
variance, which may be captured by equation (9.5) through p2 > 0. The parameter
pL3is an ARCH-M       term.
   We assume that the conditional        distribution  of E, given crt is generalized t; see,
e.g. McDonald     and Newey (1988). The density for the generalized t-distribution
takes the form


       .fCw- l; v, $1 = ~~                                                                         (9.6)
                                2a,h.$1i”B(l,q,   I+!+[:+     le,l”/($b”a:)]ti+ liq

where B(l/q, II/) 3 T(l/q)T($)T(l/q     + $) denotes the beta function, b = [r($)r(l/q)/
03k)UlCI    - 2h)l 1’23    and   $q > 2, r] > 0 and $ > 0. The scale factor b makes
Var(E,a, ‘) = I.
Ch. 49: ARCH Models                                                                           3019


   One advantage of this specification is that it nests both the Student’s t and the
GED distributions       discussed in Section 2.2 above. In particular,       the Student’s t-
distribution   sets YI= 2 and $ = + times the degrees of freedom. The GED is obtained
for Ic/= co. Nelson (1989,199l) fit EGARCH models to U.S. Stock index returns
assuming a GED conditional           distribution, and found that there were many more
large standardized     residuals z, = s,gZ- l than would be expected if the returns were
actually conditionally      GED with the estimated q. The GED has only one “shape”
parameter q, which is apparently insufficient to fit both the central part and the tails
of the conditional distribution.     The generalized t-distribution  has two shape param-
eters, and may therefore be more successful in parametrically        fitting the conditional
distribution.
   The conditional      variance function, o:, is parametrized      using a variant of the
EGARCH formulation           in equation (1.1 I),

     ln((g)
              t
                  =   w       +   (l+ cQL
                                        +_+cI,L4)g(z
                                                  _1 a’                                  )
                                                                                             (9.7)
                          f       (I-~..._pJP)                                  ’   ’ f 1’

where the deterministic                     component         is given by

     0, = w0 + ln[l                  + w1 IV, + 02St + o&J.                                  (9.8)

As noted in Section 1.2, trading and non-trading        periods contribute   differently to
volatility. To also allow for differences between weekend and holiday non-trading
periods W, gives the number of weekend non-trading           days between trading days t
and t - 1, while H,denotes the number of holidays. Prior to May 1952, the NYSE
was open for a short trading session on Saturday. Since Saturday may have been a
“slow” news day and the Saturday trading session was short, we would expect low
average volatility on Saturdays.      The S, dummy variable equals one if trading
day t is a Saturday and zero otherwise.
   Our specification     of the news impact function, g(., .), is a generalization        of
EGARCH inspired by the optimal filtering results of Nelson and Foster (1994). In
the EGARCH model in equation (1.11) ln(cr:+ 1) is homoskedastic            conditional   on
a:, and the partial correlation    between z, and ln(af+ i) is constant conditional      on
0:. These assumptions      may well be too restrictive, and the optimal filtering results
indicate the importance of correctly specifying these moments. Our specification of
g(z,, 0:) therefore allows both moments to vary with the level of 0:.
   Several recent papers, including Engle and Ng (1993), have suggested that GARCH,
EGARCH and similar formulations         may make 0: or ln(a:) too sensitive to outliers.
The optimal filtering results discussed in Section 4 lead to the same conclusion
when E, is drawn from a conditionally     heavy tailed distribution.  The final form that
we assume for g(., .) was also motivated by this observation:


     g(zt, of) = CT- 2eo-
                                            OlZ,
                                            ___     +   g,-   2YO       ““1”+!&].            (9.9)
                                      1 +   4lztI                   [   1 + Y*lZ,lP
3020                                                                              T Bollersleu   et al.



The y0 and t?,, parameters allow both the conditional        variance of ln(aF+ i) and its
conditional   correlation with z, to vary with the level of 0:. If 0, < O,ln(a:+ i) and Z,
are negatively correlated: the “leverage effect”. The EGARCH           model constrains
8, = y0 = 0, so that the conditional     correlation  is constant, as is the conditional
variance of ln(af). The p, y2, and 8, parameters give the model flexibility in how
much weight to assign to the tail observations.      For example, if yZ and e2 are both
positive, the model downweights large 1z, 1’s.The second term on the right hand side
of equation (9.9) was motivated by the optimal filtering results in Nelson and Foster
(1994), designed to make the ARCH model serve as a robust filter.
   The orders of the ARMA model for ln(a:), p and q, remain to be determined.
Table 2 gives the maximized values of the log likelihoods from (2.7), (2.8) and (9.6)
for ARMA models of order up to ARMA(3,5). For three of the four data sets, the
information criterion of Schwartz (1978) selects an ARMA(2,l) model, the exception
being the Dow data for 1914-1928, for which an AR(l) is selected. For linear time
series models, the Schwartz criterion has been shown to consistently         estimate the
order of an ARMA model. As noted in Section 7, it is not known whether this result
carries over to the ARCH class of models. However, guided by the results in Table 2,

                                              Table 2
                              Log likelihood values for fitted models.”

                          Dow                  Dow               Standard 90          S&P 500
Fitted model            188551914            1914-1928            1928-1952          1953-1990

White Noise           - 10036.188          -4397.693            -11110.120         - 10717.199
MA(l)                  -9926.781           -4272.639            - 10973.417        - 10658.775
MA(2)                  -9848.319           -4241.686            - 10834.937        - 10596.849
MA(3)                  -9779.491           -4233.371            - 10765.259        - 10529.688
MA(4)                  -9750.417           -4214.821            - 10740.999        - 10463.534
MA(5)                  -9718.642           -4198.672            - 10634.429        - 10433.631
AR(l)                  -9554.352           -4164.093sc          - 10275.294        - 10091.450
ARMA(l, 1)             -9553.891           -4164.081            - 10269.771        - 10076.775
ARMA(l,2)              -9553.590           -4160.671            - 10265.464        - 10071.040
ARMA(l,3)              -9552.148           -4159.413            - 10253.027        - 10070.587
ARMA(l,4)              -9543.855           -4158.836            - 10250.446        - 10064.695
ARMA(l,S)              - 9540.485          -4158.179            - 10242.833        - 10060.336
AR(2)                  -9553.939           -4164.086            - 10271.732        - 10083.442
ARMA(2,l)              - 9529.904sc        -4159.OllA’C         - 10237.527sc      - 10052.322sc
ARMA(2,2)              - 9529.642          -4158.428            - 10235.724        - 10049.237
ARMA(2,3)              -9526.865           -4157.731            - 10234.556        - 10049.129
ARMA(2,4)              -9525.683           -4157.569            - 10234.429        - 10047.962
ARMA(2,5)              -9525.560           -4155.071            - 10230.418        - 10046.343
AR(3)                  -9553.787           -4159.227            - 10270.685        - 10075.441
ARtiA(3,l)             -9529.410           -4158.608            - 10237.462        - 10049.833
ARMA(3.2)              - 9526.089          -4158.230            -10228.701A’=      - 10049.044
ARMA(3; 3)             - 9524.644A’c       -4157.730            - 10228.263        - 10042.710
ARMA(3,4)              - 9524.497          -4156.823            - 10227.982        - 10042.284
ARMA(3,5)              -9523.375           -4154.906            - 10227.958        - 10040.547A’C

  “The AIC and SC indicators denote the models selected by the information criteria of Akaike (1973)
and Schwartz (1978), respectively.
                                                    Table 3
                                        Maximum   likelihood   estimates?

                              Dow                    Dow                    Standard 90             S&P 500
                           1885-1914              1914-1928                  1928-1952             1953-1990
 Coefficient              ARMA(2,l)                 AR(l)                   ARMA(2,l)             ARMA(2,l)

                           - 0.6682               - 0.6228                   - 1.2704              - 0.7899
                             (0.1251)               (0.0703)                  (2.5894)               (0.2628)
                              0.2013                 0.3059                     0.1011                0.1286
                             (0.0520)               (0.0904)                   (0.0518)              (0.0295)
                           -0.4416                -0.5557                    -0.6534                     *
                             (0.0270)               (0.0328)                   (0.0211)
                              0.5099                 0.3106                     0.6609                0.1988
                             (0.1554)               (0.1776)                   (0.1702)              (0.1160)
                              3.6032                 2.5316                     4.0436                3.5437
                             (0.8019)               (0.5840)                   (0.9362)              (0.7557)
                              2.2198                 2.4314                     1.7809                2.1844
                             (0.1338)               (0.2041)                   (0.1143)              (0.1215)
                              0.0280                 0.0642                    0.0725                 0.0259
                             (0.0112)               (0.0222)                  (0.1139)               (0.0113)
                           - 0.0885               - 0.0920                   -0.0914                  0.0717
                             (0.0270)               (0.0418)                   (0.0243)              (0.0260)
                              0.2206                0.3710                     0.2990                 0.2163
                             (0.0571)              (0.0828)                   (0.0387)               (0.0532)
                             0.0006                 0.0316                     0.0285.               0.0050
                            (0.0209)               (0.0442)                   (0.0102)              (0.0213)
                           -0.1058                  0.0232                   - 0.0508                0.1117
                             (0.0905)              (0.1824)                    (0.0687)             (0.0908)
                             0.1122                 0.0448                     0.1356                0.0658
                            (0.0256)               (0.0478)                   (0.0327)              (0.0157)
                             0.0245                 0.0356                     0.0168                0.0312
                            (0.0178)               (0.0316)                   (0.0236)              (0.0080)
                             2.1663                 3.2408                     1.6881                2.2477
                            (0.3 119)              (1.5642)                   (0.3755)              (0.3312)
                           - 0.6097               -0.5675                   -0.1959                -0.1970
                             (0.0758)               (0.1232)                  (0.0948)               (0.1820)
                          -0.1509                 -0.3925                    -0.1177               -0.1857
                            (0.0258)                (0.1403)                   (0.027 1)             (0.0287)
                             0.0361                 0.3735                   -0.0055                 0.2286
                            (0.0828)               (0.3787)                    (0.0844)             (0.1241)
                             0.9942                 0.9093                     0.9994                0.9979
                            (0.0033)               (0.0172)                   (0.0009)              (0.0011)
                             0.8759                                            0.8303                0.8945
                            (0.0225)                                          (0.0282)              (0.0258)
                           -0.9658                                          -0.9511                - 0.9695
                            (0.0148)                                          (0.0124)              (0.0010)

  “Standard errors are reported in parentheses. The parameters indicated          by a I were not estimated.    The
ARcoefficientsaredecomposedas(1-A,L)(1-A,L)~(1-~,L-~,L2),where~A,~>,(A,~.
3022                                                                                                    T. Bollerslev et al.


                                                    Table 4
                                              Wald hypothesis      tests.

                                                   Dow                Dow                 Standard 90        S&P 500
                                                1885-1914          1914-1928               1928-1952        1953-1990
Test                                           ARMA(2,l)              AR(l)               ARMA(2,l)        ARMAI’Z, 1)

y* = f& = y0 = e0 = p - 1 = 0: x;                  97.3825          63.4545                10.1816           51.8152
                                                    (O.cQOO)        (O.O@-w                (0.0703)          (O.OOw
WI = wg: xi                                          3.3867          0.0006                 9.8593            0.3235
                                                    (0.0657)        (0.9812)               (0.0017)          (0.5695)
0, = y0 = 0: x;                                     67.4221         21.3146                 4.4853            2.2024
                                                    (O.OOOQ         (0.0000)               (0.1062)          (0.3325)
0, = Yo:x:                                          17.2288          7.4328                 1.7718            1.7844
                                                    (O.oooo)        (0.0064)               (0.1832)          (0.1816)
rl = P: x:                                           0.0247          0.2684                 0.0554            0.0312
                                                    (0.8751)        (0.6044)               (0.8139)          (0.8598)
yz = b-3+-‘:      x;                                14.0804         10.0329                14.1293           14.6436
                                                    (0.0002)        (0.0015)               (0.0002)          (0.0001)
q=p,yz=b-“$-‘:x;                                    18.4200         10.4813                22.5829           16.9047
                                                    (0.0001)        (0.0053)               (0.0000)          (0.0002)


                                                         Table 5
                                     Conditional      moment specification       tests.

                                                       Dow             Dow                Standard 90         S&P 500
Orthogonality                                       1885-1914       1914-1928              1928-1952         1953-1990
Condition                                          ARMA(2,l)          AR(l)               ARMA(2,l)         ARMA(2,l)

 (1) &Cz,l= 0                                       -0.0147         - 0.0243               -0.0275           -0.0110
                                                      (0.0208)       (0.03 19)               (0.0223)          (0.0202)

 (2) mz:1 = 1                                         0.0007           o.wO7                  0.0083           0.0183
                                                     (0.0382)         (0.0613)               (0.0503)         (0.0469)

 (3) J%CZr~I~Al
            =0                                     -0.0823          -0.1122                -0.1072           -0.0658
                                                     (0.0365)         (0.0564)               (0.0414)          (0.0410)

 (4) &CS(Z,, ~,)I = 0                                 0.0007           0.0013                 0.0036           0.0003
                                                     (0.0046)         (0.0080)               (0.0051)         (0.0035)
 (5) E,C(zf - l)(zf_,    - 1)l = 0                  - 0.0050        -0.0507                 -0.0105            0.1152
                                                      (0.0714)        (0.0695)               (0.0698)         (0.0930)
 (6) &C(z: - ‘)(z:_~ - 1)1= 0                      -0.0047             0.0399              -0.0358          - 0.0627
                                                     (0.0471)         (0.0606)               (0.0815)         (0.0458)
 (7) Mz:        - ‘)(2:_3 - 111= 0                    0.0037        -0.0365                  0.0373         -0.0171
                                                     (0.0385)         (0.0521)              (0.0583)          (0.0611)
 (8) E,C(z: - ‘)(z:_~ - III= 0                        0.0950        - 0.0658               -0.0018          -0.0312
                                                     (0.0562)        (0.0403)                (0.0543)         (0.0426)
 (9) mz:       - m:_ 5- 111= 0                        0.0165          0.0195                 0.0710            0.0261
                                                     (0.0548)        (0.0486)               (0.0565)          (0.073 1)
(10) wz:       - ‘)(z:-6 - 111= 0                  - 0.0039           0.0343                 0.0046         -0.0557
                                                     (0.0309)        (0.0602)               (0.0439)          (0.0392)
Ch. 49: ARCH Models                                                                                             3023


                                                    Table 5 (continued)

                                                        Dow              Dow        Standard 90     S&P 500
Orthogonality                                        1885-1914        1914-1928      1928-1952     1953-1990
Condition                                           ARMA(2,l)           AR(l)       ARMA(2.1)     ARMA(2,l)

(11) E,[(zf-l)z,_,l=O                                -0.0338           -0.0364       -0.0253       - 0.0203
                                                      (0.0290)           (0.0414)      (0.0367)      (0.0413)
(12) E,[(zf - l)z,_J         = 0                       0.0069          -0.0275       - 0.0434      -0.0378
                                                      (0.025 1)          (0.0395)     (0.03 15)      (0.0278)
(13) E,[(zf - l)z,_J         = 0                       0.0110            0.0290        0.0075        0.0292
                                                      (0.0262)          (0.0352)      (0.0306)      (0.0357)
(14) E,[(zf - l)z,_,]        =o                      - 0.0296            0.0530      -0.0103      -0.0137
                                                      (0.0275)          (0.0340)       (0.0292)     (0.0238)
(15) E,[(z; - 1)z,_51 = 0                            - 0.0094            0.0567        0.0153        0.0064
                                                      (0.0240)          (0.0342)      (0.0287)      (0.0238)
(16) E,[(zf - l)z,_,]        =0                        0.028 1           0.0038      -0.0170         0.0417
                                                      (0.0216)          (0.0350)       (0.0253)     (0.0326)
(17) E,[z;z,_       ,] = 0                             0.0265            0.0127        0.0383        0.0188
                                                      (0.0236)          (0.0346)      (0.0243)      (0.0226)
(18) E,[z;z,_J        = 0                              0.0133         -0.0176        - 0.0445     - 0.0434
                                                      (0.0157)          (0.0283)      (0.0174)      (0.0158)
(19) E,[Z,.Z,_J       =o                               0.0406            0.0012        0.0019        0.0140
                                                      (0.0158)          (0.0262)      (0.0175)      (0.0152)
(20) E,[z;zr-‘J       = 0                              0.0580            0.0056        0.02 11       0.0169
                                                      (0.0161)          (0.0253)      (0.0172)      (0.0153)
(21) E,[z;z,_J        = 0                              0.0516           0.0164         0.0250        0.0121
                                                      (0.0163)         (0.025 1)      (0.0174)      (0.0158)
(22) E,[z,.z,_6]      = 0                           - 0.0027            0.008 1      - 0.0040     -0.0211
                                                     (0.0158)          (0.0261)       (0.0172)      (0.0150)
(1)-(16):x:,                                         39.1111           45.1608        31.7033      25.1116
                                                     (0.0010)          (O.Ocm)        (0.011)      (0.0679)
(1)-(22): x:,                                        94.0156           52.1272       67.1231       63.6383
                                                      (O.OOw           (0.0003)      (0.0000)      (O.OOw
                                                                  -


Table 3 reports the maximum likelihood estimates (MLE) for the models selected by
the Schwartz criterion. Various Wald and conditional  moment specification tests
are given in Tables 4 and 5.

9.2.2.         Persistence        of shocks   to tiolatility

As in Nelson (1989,1991), the ARMA(2,l) models selected for three of the four data
sets can be decomposed into the product of two AR(l) components,            one of which
has very long-lived shocks, with an AR root very close to one, the other of which
exhibits short-lived shocks, with an AR root very far from one; i.e. (1 - /I1 L - /3J*) =
3024




            -4
            solid     -3
                    nonparametric    -2         -1          0     1           2     3   4

            dashed,    parametric                      ‘Z
            short   dashes.     standard     normal




                           E,,titnnted     Densities   Standard   90,   1928~~95’




       0

       0
           -4
           solid,     -3
                    nonparametric   -2         -1       0         1          2      3   4

           dashed:    parametric                        Z
           short   dashes:     standard     normal
Ch. 49: ARCH Models                                                                                                     3025



                                   Estimated            Densities           Dow      1914~        1928




           solid.  nonparametric
           dashed.    parametric                                      z
           short   dashes.     standard         normal




                             Estimated           Densltles            S&P     500.        1953-          1990




             4       -3             -2             -1                 0               1              2          3   4
           solid.  nonparametric
           dashed:     parometrlc                                     z
           short   dashes:      standard         normal


                             Figure      3.    Conditional          Distribution      of Returns
3026                                                                                   T. Bollersfeu et al.


(1 - A,,!,)(1 -A,,!,),   where IAll 2 lA,j. When the estimated AR roots are real, a
useful gauge of the persistence of shocks in an AR(l) model is the estimated “half
life”; that is the value of n for which A” = +. For the Dow 1885-1914, the Standard
90 and the S&P 500 the estimated half lives of the long-lived components          are about
 119 days, 4; years and 329 days respectively. The corresponding      estimated half lives
of the short-lived components      are only 5.2, 3.7 and 6.2 days, respectively.28*29

9.2.3.   Conditional     mean of returns

The estimated pi terms strongly support the results of LeBaron (1992) of a negative
relationship between the conditional       variance and the conditional   serial correlation
in returns. In particular, p2 is significantly positive in each data set, both statistically
and economically.      For example, for the Standard 90 data, the fitted conditional      first
order correlation     in returns is 0.17 when 0; is at the 10th percentile of its fitted
sample values, but equals - 0.07 when CJ: is at the 90th percentile. The implied
variation in returns serial correlation is similar in the other data sets. The relatively
simple specification of ~(r, _ 1, CT:)remains inadequate, however, as can be seen from
the conditional moment tests reported in Table 5. The 17th through 22nd conditions
test for serial correlation in the fitted z,‘s at lags one through six. In each data set,
significant serial correlation is found at the higher lags.

9.2.4.   Conditional     distribution   of returns

Figure 3 plots the fitted generalized t density of the z,‘s against both a standard
normal and a nonparametric       density estimate constructed from the fitted z,‘s using
a Gaussian kernel with the bandwidth selection method of Silverman (1986, pp. 45-
48). The parametric     and nonparametric          densities appear quite close, with the
exception of the Dow 1914-1928 data, which exhibits strong negative skewness in
2,. Further aspects of the fitted conditional     distribution are checked in the first three
conditional moment specification tests reported in Table 5. These three orthogonality
conditions   test that the standardized       residuals 1, E E*,8,-l have mean zero, unit
variance, and no skewness.30 In the first three data sets the 1, series exhibit statistically
significant, though not overwhelmingly         so, negative skewness.

   “This is consistent with recent work by Ding et al. (1993), in which the empirical autocorrelations
of absolute returns from several financial data sets are found to exhibit rapid decay at short lags but
much slower decay at longer lags. This is also the motivation     behind the permanent/transitory   com-
ponents ARCH model introduced by Engle and Lee (1992,1993), and the fractionally integrated ARCH
models recently proposed by Baillie et al. (1993).
   29Volatility in the Dow 1914-1928 data shows much less persistence. The half life asociated with
the AR(l) model selected by the Schwartz (1978) criterion is only about 7.3 days. For the ARMA(2,l)
model selected by the AIC for this data set, the half lives associated with the two AR roots are only
24 and 3.3 days, respectively.
   30More precisely, the third orthogonality  condition tests that E,[z;lz,l] = 0 rather than E,[z:] = 0.
We use this test because it requires only the existence of a fourth conditional     moment for Z, rather
than a sixth conditional   moment.
Ch. 49:   ARCH   Models                                                                                         3027


                                                         Table 6
                                             Frequency     of tail eventsa

               Dow                         Dow                       Standard 90                 S&P 500
           1885-1914                   1914-1928                      1928-1952                 1953-1990
          ARMA(2,l)                       AR(l)                      ARMA(2,l)                 ARMA(2,l)
N     Expected      Actual        Expected      Actual           Expected      Actual      Expected      Actual

 2    421.16            405         180.92          177            369.89         363        458.85          432
 3     63.71             74          31.11           33             76.51          81         72.60           57
 4     11.54             12           6.99           10             18.76          23         13.83           14
 5      2.61              4           2.01            3              5.47           4          3.27            6
 6      0.72              2           0.70            1              1.86            1         0.94            5
 7      0.23               1          0.28            0              0.71            1         0.31            3
 8 9.56 x 10m6            0           0.13            0              0.30           1          0.12            2
 9 3.89 x lo-’            0           0.06            0              0.14           0          0.05            2
10 1.73 x lo-’            0           0.03            0              0.07           0          0.02            2
11 8.25 x lo-*            0           0.01            0              0.04           0          0.01             1

   “The table reports     the expected   and the actual      number    of observations   exceeding    N conditional
standard deviations.


   The original motivation      for adopting the generalized t-distribution      was that the
two shape parameters q and $ would allow the model to fit both the tails and the
central  part of the conditional distribution.     Table 6 gives the expected and the actual
number of z,‘s in each data set exceeding N standard deviations. In the S&P 500
data, the number of outliers is still too large. In the other data sets, the tail fit seems
adequate.
   As noted above, the generalized t-distribution          nests both the Student’s t (r] = 2)
and the GED ($ = co). Interestingly,        in only two of the data sets does a t-test for the
null hypothesis that r~= 2 reject at standard levels, and then only marginally. Thus,
the improved fit appears to come from the t component                 rather than the GED
component     of the generalized t-distribution.     In total, the generalized r-distribution
is a marked improvement          over the GED, though perhaps not over the usual
Student’s r-distribution.     Nevertheless,    the generalized t is not entirely adequate,
as it does not account for the fairly small skewness in the fitted z,‘s, and also appears
to have insufficiently thick tails for the S&P 500 data.

9.2.5.    News impact function

In line with the results for the EGARCH model reported in Nelson (1989,1991), the
“leverage effect” term 8, in the g(., .) function is significantly negative in each of the
data sets, while the “magnitude effect” term y1 is always positive, and significantly so
except in the Dow 1914-1928 data. There are important differences, however. The
EGARCH       parameter    restrictions that p = 1, y0 = y2 = 8, = 8, = 0 are decisively
rejected in three of the four data sets. The estimated g(zt, C-J:)functions are plotted
in Figure 4, from which the differences with the piecewise linear EGARCH g(z,)
formulation   are apparent.
3028


                                                       g(z).                 Dow        1885-1914




                                                                                                                                                    I


                                           \       1
                                                       \
                                               \            \
                                                                \
                                                           \\
                                                                         \
                                                                    \\
                                                                              \

                                                                                  ‘d’



       IL
               -Y         -/         -5            -3                        -1        0       1        2       3       4       5       6       7           8       9    10
        solId        median      o
        dashed          low    CT                                                      Z
        short        dashes       high     u




                                          g(r): Standard                               90.         1928-1952




                                                   -3                        -1    0       1        2       3       4       5       6       7           8       9       10

       short        dashes.     high      CT                                       L
3030                                                                                  T. l3oller.&?v et al.


    To better understand       why the standard EGARCH           model is rejected, consider
more closely the differences between the specification            of the g(z,,a:) function in
equation (9.9) and the EGARCH formulation            in equation (1.11). Firstly, the param-
eters y0 and 8, allow the conditional variance of ln(cf) and the conditional correlation
between ln(a:) and I, to change as functions of CJ:. Secondly, the parameters p, y2,
and 0, give the model an added flexibility in how much weight to assign to large
versus small values of z,.
    As reported in Table 4, the EGARCH assumption              that y0 = 8, = 0 is decisively
rejected in the Dow 1885-1914 and 1914-1928 data sets, but not for either the
Standard 90 or the S&P 500 data sets. For none of the four data sets is the estimated
value of y0 significantly different from 0 at conventional       levels. The estimated value
of 8, is always negative, however, and very significantly so in the first two data sets,
indicating that the “leverage effect” is more important         in periods of high volatility
than in periods of low volatility.
    The intuition that the influence of large outliers should be limited by setting 0, > 0
and y2 > 0 receives mixed support from the data. The estimated values of y2 and
three of the estimated 0,‘s are positive, but only the estimate of yZ for the S&P 500
data is significantly     positive at standard levels. We also note that if the data is
generated by a stochastic volatility model, as opposed to an ARCH model, with
conditionally    generalized t-distributed    errors, the asymptotically      optimal ARCH
filter would set q = p and y2 = I,- lb-“. The results in Table 4 indicate that the q = p
restriction is not rejected, but that y2 = II/-’ b-” is not supported by the data. The
estimated values of y2 are “too low” relative to the asymptotically          optimal filter for
the stochastic volatility model.



10.    Conclusion

This chapter has focused on a wide range of theoretical properties of ARCH models.
It has also presented some new important empirical results, but has not attempted
to survey the literature on applications,      a recent survey of which can be found in
Bollerslev et al. (1992).3’ Three of the most active lines of inquiry are prominently
surveyed here, however. The first concerns the general parametrizations      of univariate
discrete time models of time-varying       heteroskedasticity. From the original ARCH
model, the literature has focused upon GARCH, EGARCH, IGARCH, ARCH-M,
AGARCH, NGARCH, QARCH, QTARCH, STARCH, SWARCH and many other
formulations   with particular distinctive properties. Not only has this literature been
surveyed here, but it has been expanded by the analysis of variations in the EGARCH
model. Second, we have explored the relations between the discrete time models
and the very popular continuous        time diffusion processes that are widely used in


   a’ Other recent surveys of the ARCH methodology   are given in Bera and Higgins   (1993) and Nijman
and Palm (1993).
Ch. 49: ARCH      Models                                                                                          3031


finance. Very useful approximation    theorems have been developed, which hold with
increasing accuracy when the length of the sampling interval diminishes. The third
area of important investigation concerns the analysis of multivariate ARCH processes.
This problem is more complex than the specification of univariate models because
of the interest in simultaneously   modeling a large number of variables, or assets,
without having to estimate an intractable      large number of parameters.   Several
multivariate   formulations    have been proposed,    but no clear winners have yet
emerged, either from a theoretical or an empirical point of view.


References

Akaike, H. (1973) “Information         Theory and an Extension of the Maximum Likelihood Principle”, in:
   B.N. Petrov and F. Csriki, eds., Second International Symposium on Information Theory. Akadtmiai
   Kiad6: Budapest.
Amemiya, T. (1985) Advanced Econometrics. Harvard University Press: Cambridge, MA.
Amin, K.I. and V.K. Ng (1993) “Equilibrium             Option Valuation with Systematic Stochastic Volatility”,
   Journal ofFinance, 48, 881C910.
Andersen, T.G. (1992a) Volatility, unpublished              manuscript,   J.L. Kellogg Graduate       School of Man-
   agement, Northwestern         University.
Andersen, T.G. (1992b) Return Volatility and Trading Volume in Financial Markets: An Information
   Flow Interpretation      of Stochastic Volatility, unpublished manuscript,          J.L. Kellogg Graduate School
   of Management,      Northwestern       University.
Anderson, T.W. (1971) The Statistical Analysis of Time Series. John Wiley and Sons: New York, NY.
Andrews, D.W.K. and W. Ploberger (1992) Optimal Tests when a Nuisance Parameter Is Present only
   under the Alternative, unpublished         manuscript,    Department     of Economics, Yale University.
Andrews, D.W.K. and W. Ploberger (1993) Admissibility of the Likelihood Ratio Test when a Nuisance
   Parameter Is Present only under the Alternative, unpublished manuscript, Department                   of Economics,
   Yale University.
Attanasio, 0. (1991) “Risk, Time-Varying           Second Moments and Market Efficiency”, Review ofEconomic
   Studies, 58,479-494.
Baek, E.G. and W.A. Brock (1992) “A Nonparametric                  Test for Independence      of a Multivariate    Time
   Series”, Statistica Sinica, 2, 137-156.
Baillie, R.T. and T. Bollerslev (1989) “The Message in Daily Exchange Rates: A Conditional                     Variance
   Tale”, Journal of Business and Economic Statistics, 7, 297-305.
Baillie, R.T. and T. Bollerslev (1990) “A Multivariate          Generalized ARCH Approach to Modeling Risk
   Premia in Forward Foreign Exchange Rate Markets”, Journal of International Money and Finance,
   9,309%324.
Baillie, R.T. and T. Bollerslev (1991) “Intra Day and Inter Day Volatility in Foreign Exchange Rates”,
   Review of Economic Studies, 58, 565-585.
Baillie, R.T. and T. Bollerslev (1992) “Prediction in Dynamic Models with Time Demndent Conditional
  Variances”, Journal ofEconometrics, 52, 91-113. _
Baillie, R.T., T. Bollerslev and H.O. Mikkelsen (1993), Fractionally              Integrated   Autoregressive   Condi-
  tional Heteroskedasticity,       unpublished      manuscript,  J.L. Kellogg Graduate       School of Management,
  Northwestern       University.
Bekaert, G. and R.J. Hodrick (1993) “On Biases in the Measurement                         of Foreign Exchange       Risk
  Premiums”, Journal oflnternational           Money and Finance. 12. 115-138.
Bera, A.K. and M.L. Higgins (1993) “ARCH Models: Properties, Estimation and Testing”, Journal of
  Economic Surveys, 7,305-366.
Bera, A.K. and S. Lee (1992) “Information               Matrix Test, Parameter        Heterogeneity    and ARCH: A
  Synthesis”, Review of Economic Studies, 60, 229-240.
Bera, A.K. and J-S. Roh (1991) A Moment Test of the Constancy of the Correlation                     Coefficient in the
  Bivariate GARCH Model, unpublished manuscript,                 Department     of Economics, University of Illinois,
  Urbana-Champaign.
3032                                                                                                  T. Bollerslev et al.


Bera, A.K., M.L. Higgins and S. Lee (1993) “Interaction                  Between Autocorrelation        and Conditional
   Heteroskedaslicity:     A Random Coefficients Approach”, Journal             of   Businessand Economic Statistics,
   10, 133-142.
Berndt E.R., B.H. Hall, R.E. Hall, and J.A. Haussman (197’4) “Estimation                   and Inference in Nonlinear
   Structural Models”, Annals ofEconomic and Social Measurement, 4, 653-665.
Black. F. (1976) “Studies of Stock Price Volatility Changes”, Proceedingsfrom the American Statistical
   Associaiion, business and Economic Statistics Section, 177-181.
Black. F. and M. Scholes (1973) “The Pricing of Ontions and Corporate
                                                    I      .
                                                                                       Liabilities”, Journal ofpolitical
   Ecdnomy, 81,637-659.‘            ’
Blattberg, R.C. and N.J. Gonedes (1974) “A Comparison                    of the Stable and Student Distribution          of
   Statistical Models for Stock Prices”, Journal ofBusiness, 47,24+280.
Bollerslev, T. (1986) “Generalized         Autoregressive       Conditional     Heteroskedasticity”,     Journal of Eco-
   nometrics, 31, 307-327.
Bollerslev, T. (1987) “A Conditional          Heteroskedastic       Time Series Model for Speculative          Prices and
  *Rates of Return”, Review of Economics and Statistics, 69, 542-547.
Bollerslev, T. (1988) “On the Correlation            Structure for the Generalized         Autoregressive    Conditional
    Heteroskedastic     Process”, Journal of Time Series Analysis, 9, 121-131.
Bollerslev, T. (1990) “Modelling the Coherence in Short-Run Nominal Exchange Rates: A Multivariate
   Generalized ARCH Approach”, Review of Economics and Statistics, 72,498-505.
Bollerslev, T. and I. Domowitz (1993) “Trading Patterns and the Behavior of Prices in the Interbank
   Foreign Exchange Market,” Journal of Finance, 48, 1421-1443.
Bollerslev, T. and R.F. Engle (1993) “Common                Persistence in Conditional       Variances”, Econometrica,
   61,166-187.
Bollerslev, T. and M. Melvin (1994) “Bid-Ask Spreads in the Foreign Exchange Market: An Empirical
   Analysis”, Journal of International Economics, forthcoming.
Bollerslev, T. and J.M. Wooldridge          (1992) “Quasi Maximum Likelihood Estimation and Inference in
   Dynamic Models with Time Varying Covariances”,                  Econometric Reviews, 11, 143-172.
Bollerslev, T., R.F. Engle and J.M. Wooldridge (1988) “A Capital Asset Pricing Mode1 with Time Varying
   Covariances”,     Journal of Political Economy, 96, 116-131.
Bollerslev, T., R.Y. Chou and K.F. Kroner (1992) “ARCH Modeling in Finance: A Review of the Theory
   and Empirical Evidence”, Journal of Econometrics, 52, S-59.
Bougerol, P. and N. Picard (1992) “Stationarity               of GARCH Processes and of Some Non-Negative
   Time Series”, Journal of Econometrics, 52, 115-128.
Box, G.E.P., and G.M. Jenkins (1976) Time Series Analysis: Forecasting and Control. Holden Day: San
    Francisco, CA. Second Edition.
Braun, P.A., D.B. Nelson and A.M. Sunier (1992) Good News, Bad News, Volatility, and Betas,
   unpublished      manuscript,  Graduate      School of Business, University of Chicago.
Breusch, T. and A.R. Pagan (1979) “A Simple Test for Heteroskedasticity                       and Random Coefficient
   Variation”, Econometrica, 47, 1287-1294.
Brock, W.A. and A. Kleidon (1992) “Periodic Market Closure and Trading Volume: A Model of Intra
   Day Bids and Asks”, Journal of Economic Dynamics and Control, 16, 451-489.
Brock, W.A., and S.M. Potter (1992), Nonlinear                Time Series and Macroeconometrics,             unpublished
   manuscript,     Department    of Economics, University of Wisconsin, Madison.
Brock, W.A., W.D. Dechert and J.A. Scheinkman                     (1987) A Test for independence           Based on the
   Correlation Dimension, unpublished manuscript, Department                  of Economics, University of Wisconsin,
   Madison.
Brock, W.A., D.A. Hsieh and B. LeBaron (1991). Nonlinear Dynamics, Chaos and Instability: Statistical
    Theory and Economic Eoidence. MIT Press: Cambridge,                   MA.
Cai, J. (1994) “A Markov Model of Unconditional                     Variance in ARCH”, Journal of Business and
   Economic Statistics, forthcoming.
Campbell, J.Y. and L. Hentschel(l992)           “No News is Good News: An Asymmetric Model of Changing
   Volatility in Stock Returns”, Journal of Financial Economics, 3 1, 28 l-3 18.
Chou, R.Y. (1988) “Volatility         Persistence    and Stock Valuations:         Some Empirical        Evidence Using
   GARCH”, Journal of Applied Econometrics, 3, 279-294.
Christie, A.A. (1982) ‘Thd-Stochastic           Behavior of Common           Stock Variances: Value, Leverage and
   Interest Rate Effects”, Journaf of Financial Economics, 10,407-432.
Clark, P.K. (1973) “A Subordinated            Stochastic    Process Model with Finite Variance for Speculative
   Prices”, Econometrica, 41, 135-l 56.
Ch. 49: ARCH Models                                                                                                  3033


Cornell, B. (1978) “Using the Options Pricing Model to Measure the Uncertainty                      Producing    Effect of
  Major Announcements”,        Financial Management, 7, 54-59.
Crowder, M.J. (1976) “Maximum           Likelihood      Estimation     with Dependent       Observations”,     Journal of
  the Royal Statistical Society, 38, 45-53.
Danielson, J. and J.-F. Richard (1993) “Accelerated Gaussian Importance                  Sampler with Application        to
  Dynamic Latent Variable Models”, Journal              ofAppliedEconometrics, 8, S153-S173.
Davidian, M. and R.J. Carroll (1987) “Variance Function Estimation”, Journal ofthe American Statistical
  Association, 82, 1079-1091.
Davies. R.B. (1977) “Hypothesis       Testing when a Nuisance Parameter               is Present only under the Null
   Hypothesis”,   Biometkz, 64, 247-254:
Dav. T.E. and CM. Lewis (1992) “Stock Market Volatility and the Information                     Content of Stock Index
   Options”, Journal of Ecdnomkrics, 52, 267-288.                   .
Demos, A. and E. Sentana (1991) Testing for GARCH Effects: A One-Sided Approach,                             unpublished
   manuscript,   London School of Economics.
Diebold, F.X. (1987) “Testing for Serial Correlation            in the Presence of ARCH”, Proceedings from the
   American Statistical Association, Business and Economic Statistics Section, 323-328.
Diebold, F.X. (1988) Empirical Modeling ofExchange Rate Dynamics. Springer Verlag: New York, NY.
Diebold, F.X. and M. Nerlove (1989) “The Dynamics                   of Exchange Rate Volatility: A Multivariate
   Latent Factor ARCH Model”, Journal of Applied Econometrics, 4, l-21.
Ding, Z., R.F. Engle, and C.W.J. Granger (1993) “Long Memory Properties of Stock Market Returns
   and a New Model”, Journal of Empirical Finance, 1, 83-106.
Drost, F.C. and T.E. Nijman (1993) “Temporal Aggregation                 of GARCH Processes”, Econometrica, 61,
  909-927.
Engle, R.F. (1982) “Autoregressive        Conditional     Heteroskedasticity      with Estimates of the Variance of
   U.K. Inflation”, Econometrica, 50,987TlOO8.
Engle, R.F. (1984) “Wald, Likelihood          Ratio, and Lagrange          Multiplier Tests in Econometrics”,           in:
  Z. Griliches     and M.D. Intriligator,       eds., Handbook of Econometrics, Vol. II. North-Holland:
  Amsterdam.
Engle, R.F. (1987) Multivariate           GARCH        with Factor       Structures - Cointegration         in Variance,
   unpublished    manuscript,   Department      of Economics, UCSD.
Engle, R.F. (1990) “Discussion:      Stock Market Volatility and the Crash of 87”, Review of Financial
  Studies, 3, 103-106.
Engle, R.F. and T. Bollerslev (1986) “Modelling the Persistence of Conditional                 Variances”, Econometric
   Reviews, 5, l-50, 81-87.
Engle, R.F. and G. Gonzalez-Rivera         (1991) “Semiparametric         ARCH Models”, Journal of Business and
  Economic Statistics, 9, 345-359.
Engle, R.F. and C.W.J. Granger (1987) “Cointegration            and Error Correction: Representation,         Estimation
  and Testing”, Econometrica, 55, 251-276.
Engle, R.F. and S. Kozicki (1993) “Testing for Common Features”, Journal of Business and Economic
  Statistics, 11, 369-379.
Engle, R.F. and K.F. Kroner (1993) Multivariate                 Simultaneous      Generalized     ARCH, unpublished
  manuscript,    Department    of Economics, UCSD.
Engle, R.F. and G.G.J. Lee (1992) A Permanent              and Transitory      Component       Model of Stock Return
  VolBtility, unpublished     manuscript,    Department      of Economics, UCSD.
Engle, R.F. and G.G.J. Lee (1993) Long Run Volatility Forecasting                    for Individual Stocks in a One
  Factor Model, unpublished       manuscript,      Department       of Economics, UCSD.
Engle, R.F. and C. Mustafa         (1992) “Implied ARCH Models from Options                         Prices”, Journal of
  Econometrics, 52, 289-311.
Engle, R.F. and V.K. Ng (1993) “Measuring             and Testing the Impact of News on Volatility”, Journal
  of Finance, 48, 1749-1778.
Engle R.F. and R. Susmel (1993) “Common               Volatility in International        Equity Markets”, Journal of
  Business and Economic Statistics, 11, 167-176.
Engle, R.F., D.F. Hendry and D. Trumble (1985) “Small Sample Properties of ARCH Estimators and
  Tests”, Canadian Journal of Economics, 18, 66-93.
Engle, R.F., D.M. Lilien and R.P. Robins (1987) “Estimating               Time Varying Risk Premia in the Term
  Structure: The ARCH-M Model”, Econometrica, 55, 391-407.
Engle, RF., T. Ito and W-L. Lin (1990a) “Meteor Showers or Heat Waves? Heteroskedastic                               Intra
  Daily Volatility in the Foreign Exchange Market”, Econometrica, 58, 525-542.
3034                                                                                                T. Bollersleu et al.


Engle, R.F., V. Ng and M. Rothschild (1990b) “Asset Pricing with a Factor ARCH Covariance Structure:
   Empirical Estimates for Treasury Bills”, Journal of Econometrics, 45, 213-238.
En&, R.F., C-H. Hong, A. Kane, and J. Noh (1993) “Arbitrage Valuation of Variance Forecasts with
   Simulated Options”, in: D.M. Chance and R.R. Trippi, eds., Advances in Futures and Options Research.
  JAI Press: Greenwich, Connecticut.
Ethier, S.N. and T.G. Kurtz (1986) Markov processes: Characterization and Convergence. John Wiley:
   New York, NY.
Fama, E.F. (1963) “Mandelbrot         and the Stable Paretian Distribution”,      Journal ofBusiness, 36,420&429.
Fama. E.F. (1965) “The Behavior of Stock Market Prices”, Journal                 of Business,38, 34b105.
Foste;, D.P.‘and ‘D.B. Nelson (1992) Rolling Regressions, unpublished                 manuscript,      Graduate    School
   of Business, University of Chicago.
French, K.R. and R. Roll (1986) “Stock Return Variances: The Arrival of Information                    and the Reaction
   of Traders”, Journal of Financial Economics, 17, 5-26.
French, K.R., G.W. Schwert and R.F. Stambaugh                 (1987) “Expected Stock Returns and Volatility”,
   Journal of Financial Economics, 19, 3-30.
Gallant, A.R. and G. Tauchen (1989) “Semi Non-Parametric                Estimation of Conditionally         Constrained
   Heterogeneous       Processes: Asset Pricing Applications”,       Econometrica, 57, 1091L1120.
Gallant, A.R., D.A. Hsieh and G. Tauchen (1991) “On Fitting a Recalcitrant                 Series: The Pound/Dollar
   Exchange Rate 1974&83”, in: W.A. Barnett, J. Powell and G. Tauchen, eds., Nonparametric and
   Semiparametric Methods in Econometrics and Statistics. Cambridge                 University Press: Cambridge.
Gallant, A.R., P.E. Rossi and G. Tauchen (1992) “Stock Prices and Volume”, Review of Financial
   Studies, 5, 199-242.
Gallant, A.R., P.E. Rossi and G. Tauchen (1993) “Nonlinear                Dynamic Structures”,        Econometrica, 61,
   871-907.
Gennotte,     G. and T.A. Marsh (1991) Variations           in Economic      Uncertainty     and Risk Premiums on
   Capital Assets, unpublished manuscript, Department            of Finance, University ofcalifornia,        Berkeley.
Gerity, M.S. and J.H. Mulherin (1992) “Trading Halts and Market Activity: An Analysis of Volume
   at the Open and the Close”, Journal of Finance, 47, 1765-1784.
Geweke, J. (1989a) “Exact Predictive Densities in Linear Models with ARCH Disturbances”,                         Journal
   of Econometrics, 44, 307-325.
Geweke, J. (1989b) “Bayesian Inference in Econometric                 Models Using Monte Carlo Integration”,
   Econometrica, 57, 1317-1339.
Glosten, L.R., R. Jagannathan        and D. Runkle (1993) “On the Relation between the Expected Value and
   the Volatility of the Nominal Excess Return on Stocks”, Journal of Finance, 48, 1779-1801.
Gourieroux,      C. and A. Monfort (1992) “Qualitative     Threshold ARCH Models”, Journal of Econometrics,
   52,159-199.
Gourieroux,      C., A. Holly and A. Monfort (1982) “Likelihood         Ratio Test, Wald Test and Kuhn-Tucker
   Test in Linear Models with Inequality          Constraints     on Regression Parameters”,          Econometrica, 50,
   63-80.
Granger, C.W.J., R.F. Engle, and R.P. Robins (1986) “Wholesale and Retail Prices: Bivariate Time-Series
   Modelling with Forecastable         Error Variances”, in: D. Belsley and E. Kuh, eds., Model Reliability.
   MIT Press: Massachusetts.         pp 1-17.
Hamao, Y., R.W. Masulis and V.K. Ng (1990) “Correlations                  in Price Changes and Volatility Across
   International     Stock Markets”, Review of Financial Studies, 3, 281-307.
Hamilton, J.D. and R. Susmel (1992), Autoregressive             Conditional    Heteroskedasticity       and Changes in
   Regime, unpublished        manuscript,   Department    of Economics, UCSD.
Harris, L. (1986) “A Transaction          Data Study of Weekly and Intradaily           Patterns in Stock Returns”,
  Journal of Financial Economics, 16, 99-117.
Harvey, CR. and R.D. Huang (1991) “Volatility in the Foreign Currency Futures Market”, Review of
   Financial Studies, 4, 543-569.
Harvey, CR. and R.D. Huang (1992) Information               Trading and Fixed Income Volatility, unpublished
  manuscript,      Department     of Finance, Duke University.
Harvey, A.C., E. Ruiz and E. Sentana (1992) “Unobserved                    Component      Time Series Models with
  ARCH Disturbances”,          Journal of Econometrics, 52, 129-158.
Harvey, A.C., E. Ruiz and N. Shephard (1994) “Multivariate               Stochastic Volatility Models”, Review of
  Economic Studies, forthcoming.
Heston, S.L. (1991) A Closed Form Solution for Options with Stochastic                        Volatility,   unpublished
  manuscript,      Department    of Finance, Yale University.
Ch. 49: ARCH Models                                                                                                 3035


Higgins, M.L. and A.K. Bera (1992) “A Class of Nonlinear                 ARCH Models”, International Economic
   Review, 33, 137-158.
Hong, P.Y. (1991) “The Autocorrelation            Structure for the GARCH-M             Process”, Economics Letters,
   37, 129-132.
Hsieh, D.A. (1991) “Chaos and Nonlinear            Dynamics: Applications       to Financial Markets”, Journal of
   Finance, 46, 1839-1878.
Huber, P.J. (1977). Robust Statistical Procedures. SIAM: Bristol, United Kingdom.
Hull, J. and A. White (1987) “The Pricing of Options on Assets with Stochastic Volatilities”. Journal
   qf Finance, 42,281-300.
Jacquier, E., N.G. Polson and P.E. Rossi (1994) “Bayesian Analysis of Stochastic Volatility Models”,
   Journal of Business and Economic Statistics, forthcoming.
Karatzas, I. and S.E. Shreve (1988) Brownian Motion and Stochastic Calculus. Springer-Verlag:                        New
   York, NY.
Karpoff, J.M. (1987) “The Relation Between Price Changes and Trading Volume: A Survey”, Journal
   of Financial and Quantitatioe Analysis, 22, 109-126.
Kim, C.M. (1989) Nonlinear Dependence of Exchange Rate Changes, unpublished                         Ph.D. dissertation,
   Graduate School of Business, University of Chicago.
Kine. M.. E. Sentana and S. Wadhwani (1994) “Volatility and Links Between National Stock Markets”,
   E&oketrica,       forthcoming.                    ’
Kitagawa,    G. (1987) “Non-Gaussian         State Space Modelling of Nonstationary             Time Series”, Journal
   of the American Statistical Association, 82, 1032-1063.
Kodde, D.A. and F.C. Palm (1986) “Wald Criterion for Jointly Testing Equality and Inequality Restric-
   tions”, Econometrica, 54, 1243-1248.
Kraft, D.F. and R.F. Engle (1982) Autoregressive              Conditional    Heteroskedasticity      in Multiple Time
   Series, unpublished manuscript,       Department      of Economics, UCSD.
Krengel, U.11985). Ergodic Theme&Walter                de Gruyter: Berlin, Germany.
Kroner. K.F. and S. Claessens (1991) “ODtimal Dvnamic Hedging Portfolios and the Currency Com-
   position of External Debt”, Jburnal ofjnternatidnal Money &d-Finance, 10, 131-148.                            _
Kroner, K.F. and J. Sultan (1991) “Exchange Rate Volatility and Time Varying Hedge Ratios”, in:
   S.G. Rhee and R.P. Chang, eds., Pacific-Basin Capital Markets Research, Vol. II. North-Holland:
   Amsterdam.
Lamoureux, C.G. and W.D. Lastrapes (1990) “Heteroskedasticity                in Stock Return Data: Volume versus
   GARCH Effects”, Journal ofFinance, 45,221-229.
Lamoureux,      C.G. and W.D. Lastrapes (1994) “Endogenous             Trading Volume and Momentum              in Stock
   Return Volatility”, Journal ofBusiness and Economic Statistics, forthcoming.
LeBaron, B. (1992) “Some Relations Between Volatility and Serial Correlation in Stock Market Returns”,
   Journal of Business, 65, 199-220.
Lee, J.H.H. and M.L. King (1993) “A Locally Most Mean Powerful Based Score Test for ARCH and
   GARCH Regression Disturbances”,            Journal of Business and Economic Statistics, 7, 259-279.
Lee, S.W. and B.E. Hansen (1993) Asymptotic Theory for the GARCH(l,                  1) Quasi-Maximum        Likelihood
   Estimator, unpublished       manuscript,   Department      of Economics, University of Rochester.
Lin, W.L. (1992) “Alternative Estimators for Factor GARCH Models ~ A Monte Carlo Comparison”,
   Journal if Applied Econometrics, 7,259-279.
Lin. W.L.. R.F. Enele and T. Ito (1994) “Do Bulls and Bears Move Across Borders? International
   Transmission      of ?&ock Returns &d Volatility as the World Turns”, Review of Financial Studies,
   forthcoming.
Ljung, G.M. and G.E.P. Box (1978) “On a Measure of Lag of Fit in Time Series Models”, Biometrika,
   61,297-303.
Lumsdaine,      R.L. (1992a) Asymptotic        Properties    of the Quasi:Maximum           Likelihood    Estimator     in
   GARCH(1, 1) and IGARCH(l.1)               Models, unpublished        manuscript,      Department     of Economics,
   Princeton University.
Lumsdaine,      R.L. (1992b) Finite Sample Properties              of the Maximum          Likelihood     Estimator     in
   GARCH(1, 1) and IGARCH(l,             1) Models: A Monte Carlo Investigation,            unpublished     manuscript,
   Department      of Economics, Princeton University.
MacKinnon,       J.G. and H. White (1985) “Some Heteroskedasticity                  Consistent     Covariance     Matrix
   Estimators with Improved Finite Sample Properties”, Journal of Econometrics, 29, 305-325.
Mandelbrot,      B. (1963) “The Variation         of Certain     Speculative    Prices”, Journal of Business, 36,
   394-419.
3036                                                                                                   T. Bollerslev et al.


Marcus, M. and H. Mint (1964) A Survey ofMatrix Theory and Matrix Inequalities. Prindle, Weber
  and Schmidt: Boston, MA.
McCurdy,      T.H. and T. Stengos (1992) “A Comparison                     of Risk Premium        Forecasts     Implied by
   Parametric     and Nonparametric          Conditional      Mean Estimators”,          Journal   of Econometrics, 52,
   225-244.
McDonald,      J.B. and W.K. Newey (1988) “Partially Adaptive Estimation of Regression Models via the
   Generalized     I Distribution”,   Econometric Theory, 4, 4288457.
M&no, A. and S. Turnbull (1990) “Pricing Foreign Currency                        Options with Stochastic         Volatility”,
   Journal ofEconometrics, 45, 2399266.
Merton, R.C. (1973) “An Intertemporal            Capital Asset Pricing Model”, Econometrica, 42, 8677887.
Merton, R.C. (1980) “On Estimating              the Expected Return on the Market”, Journal of Financial
   Economics, 41, 867-887.
Milhoj, A. (1985) “The Moment Structure of ARCH Processes”, Scandinavian Journal of Statistics,
   12,281-292.
Murphy, K. and R. Topel(1985) “Estimation              and Inference in Two-Step Econometric            Models”, Journal
   of Business and Economic Statistics, 3, 370-379.
Nelson, D.B. (1989) “Modeling           Stock Market Volatility Changes”,              Proceedings from the American
   Statistical Association, Business and Economic Statistics Section, 93398.
Nelson, D.B. (1990a) “ARCH Models as Diffusion Approximations”,                    Journal of Econometrics, 45,7-38.
Nelson, D.B. (1990b) “Stationarity         and Persistence in the GARCH(1, 1) Model”, Econometric Theory,
   6, 3188334.
Nelson, D.B. (1991) “Conditional        Heteroskedasticity      in Asset Returns: A New Approach”, Econometrica,
   59, 3477370.
Nelson, D.B. (1992) “Filtering and Forecasting             with Misspecified ARCH Models I: Getting the Right
   Variance with the Wrong Model”, Journal of Econometrics, 52, 61-90.
Nelson, D.B. and C.Q. Cao (1992) “Inequality Constraints                 in the Univariate GARCH Model”, Journal
   of Business and Economic Statistics, 10, 2299235.
Nelson, D.B. and D.P. Foster (1991) Filtering and Forecasting                   with Misspecified ARCH Models II:
   Making the Right Forecast with the Wrong Model, unpublished                       manuscript,     Graduate     School of
   Business, University of Chicago.
Nelson, D.B. and D.P. Foster (1994) “Asymptotic                 Filtering Theory for Univariate         ARCH Models”,
   Econometrica, 62, 1-41.
Newey, W.K. (1985) “Maximum              Likelihood     Specification     Testing and Conditional        Moment Tests”,
   Econometrica, 53, 104771070.
Ng, V., R.F. Engle and M. Rothschild (1992) “A Multi-Dynamic                       Factor Model for Stock Returns”,
  Journal of Econometrics, 52,245-265.
Nijman, T.E. and F.C. Palm (1993) “GARCH Modelling of Volatility: An Introduction                           to Theory and
  Applications”,     in: A.J. de Zeeuw, ed., Advanced Lectures in Quantitative Economics. Academic Press:
   London.
Nijman, T.E. and E. Sentana (1993) Marginalization             and Contemporaneous          Aggregation in Multivariate
   GARCH Processes, unpublished            manuscript,     Center for Economic Research, Tilburg University.
Nummelin, E. and P. Tuominen (1982) “Geometric                    Ergodicity of Harris Recurrent Markov Chains
   with Applications      to Renewal Theory,” Stochastic Processes and Their Applications, 12, 187-202.
Pagan, A.R. (1984) “Econometric           Issues in the Analysis of Regressions with Generated                 Regressors”,
   international Economic Review, 25, 221-247.
Pagan, A.R. (1986) “Two Stage and Related Estimators                   and their Applications”,      Review of Economic
  Studies, 53, 517-538.
Pagan, A.R. and Y.S. Hong (1991) “Nonparametric                     Estimation    and the Risk Premium”,           in: W.A.
   Barnett, J. Powell and G. Tauchen, eds., Nonparametric and Semiparametric Methods in Econometrics
  and Statistics. Cambridge University Press: Cambridge.
Pagan, A.R. and H.C.L. Sabau (1987a), On the Inconsistency                   of the MLE in Certain Heteroskedastic
  Regression Models, unpublished           manuscript,    University of Rochester.
Pagan, A.R. and H.C.L. Sabau (1987b) Consistency                   Tests for Heteroskedasticity       and Risk Models,
  unpublished      manuscript,    Department     of Economics, University of Rochester.
Pagan, A.R. and G.W. Schwert (1990) “Alternative               Models for Conditional         Stock Volatility”, Journal
  of Econometrics, 45, 2677290.
Pagan, AR. and A. Ullah (1988) “The Econometric                  Analysis of Models with Risk Terms”, Journal of
  Applied Econometrics, 3, 877 105.
Ch. 49: ARCH Models                                                                                                3037


Pagan, A.R., A.D. Hall and P.K. Trivedi (1983) “Assessing the Variability                     of Inflation”, Review (d
   Economic Studies, 50, 585-596.
Pardoux, E. and D. Talay (1985) “Discretization          and Simulation of Stochastic Differential Equations”,
   Acta Applicandae Mathematics, 3, 23-47.
Parkinson, M. (1980) “The Extreme Value Method for Estimating the Variance of the Rate of Return”,
   Journal of Business, 53, 61-65.
Patell, J.M. and M.A. Wolfson (1979) “Anticipated               Information     Releases Retlected in Call Option
    Prices”, Journal of Accounting and Economics, 1, 117-140.
Patell, J.M. and M.A. Wolfson (1981) “The Ex-Ante and Ex-Post Price Effects of Quarterly                         Earnings
   Announcement       Reflected in Option and Stock Price”, Journal ofAccounting Research, 19, 434-458.
Poterba, J. and L. Summers (1986) “The Persistence of Volatility and Stock Market Fluctuations”,
   American Economic Review, 76,1142Z 115 1.
Rich, R.W., J.E. Raymond,          and J.S. Butler (1992) “The Relationship            between Forecast Dispersion
   and Forecast      Uncertainty:     Evidence from a Survey Data-ARCH                  Model”, Journal of Applied
   Econometrics, 7, 131-148.
Royden, H.L. (1968) Real Analysis. Macmillan Publishing Co.: New York, NY.
Scheinkman, J., and B. LeBaron (1989) “Nonlinear            Dynamics and Stock Returns”, Journal of Business,
   62, 31 I-337.
Schwarz, G. (1978) “Estimating         the Dimension of a Model”, Annals of Statistics, 6, 461-464.
Schwert, G.W. (1989a) “Why Does Stock Market Volatility Change Over Time”, Journal of Finance,
   44,1115-1153.
Schwert, G.W. (1989b) “Business Cycles, Financial Crises, and Stock Volatility”, Carnegie-Rochester
   Conference Series on Public Policy, 39, 83-126.
Schwert, G.W. (1990) “Indexes of U.S. Stock Prices from 1802 to 1987”, Journal ofBusiness, 63,399-426.
Schwert, G.W. and P.J. Seguin (1990) “Heteroskedasticity              in Stock Returns”, Journal of Finance, 45,
    1129-l 155.
Scott, L.O. (1987) “Option Pricing when the Variance Changes Randomly: Theory, Estimation                              and
   an Application”,     Journal of Financial and Quantitatice Analysis, 22, 419-438.
Sentana,     E. (1991) Quadratic       ARCH Models: A Potential             Re-Interpretation      of ARCH Models,
   unpublished     manuscript,    London School of Economics.
Shephard, N. (1993) “Fitting Nonlinear Time Series Models with Applications                     to Stochastic Variance
   Models”, Journal of AppliedEconomics, 8, S135-S152.
Silverman, B.W. (1986) Density Estimationfor Statistics and Data            Analysis. Chapman and Hall: London,
   United Kingdom.
Stambaugh,      R.F. (1993) Estimating Conditional      Expectations     When Volatility Fluctuates, unpublished
   manuscript,    The Wharton School, University of Pennsylvania.
Stroock, D.W. and S.R.S. Varadhan             (1979) Multidimensional       D$jksion Processes. Springer-Verlag:
   Berlin, Germany.
Tauchen, G. (1985) “Diagnostic         Testing and Evaluation of Maximum Likelihood Models”, Journal of
   Econometrics, 30, 415-443.
Tauchen, G. and M. Pitts (1983) “The Price VariabilityyVolume               Relationship     on Speculative Markets”,
   Econometrica, 51, 485-505.
Taylor, S. (1986) Modeling Financial Time Series. Wiley and Sons: New York, NY.
Tsay, R.S. (1987) “Conditional      Heteroskedastic    Time Series Models”, Journal of the American Statistical
   Association, 82, 590-604.
Tweedie, R.L. (1983a) “Criteria for Rates of Convergence                of Markov Chains, with Application               to
   Queuing and Storage Theory”, in: J.F.C. Kingman and G.E.H. Reuter, eds., Probability, Statistics, and
   Analysis, London Mathematical Society Lecture Note Series No. 79. Cambridge                        University    Press:
   Cambridge.
Tweedie, R.L. (1983b) “The Existence of Moments                   for Stationary      Markov      Chains”, Journal of
   Applied Probability, 20, 191-196.
Watson, M.W. and R.F. Englc (1985) “Testing for Regression Coeflicient Stability with a Stationary
   AR(l) Alternative”,     Review of Economics      and Statistics, 67, 341-346.
Weiss, A.A. (1984) “AR MA Models with ARCH Errors”, Journal of Time SeriesJinalysis,                     5, 129- 143.
Weiss, A.A. (1986) “Asymptotic          Theory for ARCH Models: Estimation                and Testing”, Econometric
   Theory, 2, 107-131.
West, K.D., H.J. Edison and D. Cho (1993) “A Utility Based Comparison                 of Some Models for Exchange
   Rate Volatility”, Journal of International Economics, 35, 23-45.
3038                                                                                               T. Bollersleu et al.


White, H. (1980) “A Heteroskedastic-Consistent          Covariance      Matrix and a Direct Test for Hetero-
  skedasticity”,     Econometrica, 48,421~448.
White, H, (1987) “Specification     Testing in Dynamic Models”, in: T.F. Bewley, ed., Advances in hono-
  metrics: Fifth World Congress, Vol. 1. Cambridge University Press: Cambridge.
White, H. (1994) Estimation. inference and Specification Analysis, forthcoming.
Wiggins, J.B. (1987) “Option Values under Stochastic           Volatility: Theory and Empirical Estimates”,
  Journal of Financial Economics, 19, 351-372.
Wiggins, J.B. (1991) “Empirical Tests of the Bias and Efficiency of the Extreme-Value           Variance Estimator
  for Common Stocks”, Journal of Business, 64, 417-432.
Wolak, F.A. (1991) “The Local Nature of Hypothesis               Tests Involving       Inequality    Constraints     in
  Nonlinear Models”, Econometrica, 59, 981-995.
Wooldridge,       J.M. (1990) “A Unified Approach       to Robust Regression         Based Specification       Tests”,
   Econometric Theory, 6, 17743.
Wooldridge,      J.M. (1994) “Estimation   and Inference for Dependent        Processes”, in: R.F. Engle and D.
   McFadden, eds., Handbook ofEconometrics, Vol. IV. North-Holland:               Amsterdam,      Chapter 45.
Zakoian, J.-M. (1990) Threshold Heteroskedastic        Models, unpublished       manuscript,     CREST, INSEE.
Zarnowitz, V. and L.A. Lambros (1987) “Consensus and Uncertainty              in Economic Prediction”, Journal
  of Political Economy, 95, 591-621.



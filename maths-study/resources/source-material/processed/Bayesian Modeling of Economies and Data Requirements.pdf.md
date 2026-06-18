---
normalized_id: shared-pdf-reference-bayesian-modeling-of-economies-and-data-requirements
exam_code: SHARED
material_scope: bayesian modeling of economies and data requirements.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Bayesian Modeling of Economies and Data Requirements.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-bayesian-modeling-of-economies-and-data-requirements

Macroeconomic Dynamics, 5, 2001, 673–700. Printed in the United States of America.
DOI: 10.1017.S1365100500000304

HONORARY LECTURE
BAYESIAN MODELING OF
ECONOMIES AND DATA
REQUIREMENTS

ARNOLD ZELLNER AND BIN CHEN
University of Chicago


Marshallian demand, supply, and entry models are employed for major sectors of an
economy that can be combined with factor market models for money, labor, capital, and
bonds to provide a Marshallian macroeconomic model (MMM). Sectoral models are used
to produce sectoral output forecasts, which are summed to provide forecasts of annual
growth rates of U.S. real GDP. These disaggregative forecasts are compared to forecasts
derived from models implemented with aggregate data. The empirical evidence indicates
that it pays to disaggregate, particularly when employing Bayesian shrinkage forecasting
procedures. Further, some considerations bearing on alternative model-building strategies
are presented using the MMM as an example and describing its general properties. Last,
data requirements for implementing MMMs are discussed.
Keywords: Marshallian Macroeconomic Model; Sectoral Disaggregation; Sectoral
          Forecasting; Bayesian Modeling


1. INTRODUCTION
For many years, theoretical and empirical workers have tried to model national
economies in order to (a) understand how they operate, (b) forecast future out-
comes, and (c) evaluate alternative economic policies. Although much progress
has been made in the decades since Tinbergen’s pioneering work, no generally
accepted model has yet appeared. On the theoretical side, there are monetary,
neo-monetary, Keynesian, neo-Keynesian, real-business-cycle, generalized real-
business-cycle, and other theoretical models; see Belongia and Garfinkel (1992)
for an excellent review of many of these models and Min (1992) for a descrip-
tion of a generalized real-business-cycle model. Some empirical testing of alter-
native models has appeared in the literature. However, Fair (1992) and Zellner
(1992), in invited contributions to a St. Louis Federal Reserve Bank conference on
Research was financed by the National Science Foundation, the H.G.B. Alexander Endowment Fund, Graduate School
of Business, University of Chicago, and the CDC Investment Management Corp. This paper was presented as an
invited keynote address at the June 2000 meeting of the international Institute of Forecasters and in the International
Journal of Forecasting, Lisbon, Portugal. Address correspondence to: Arnold Zellner, Graduate School of Business,
University of Chicago, 1101 East 58th Street, Chicago, IL 60637, USA; e-mail: arnold.zellner@gsb.uchicago.edu;
http://gsb.uchicago.edu/fac/arnold.zellner.


°
c 2001 Cambridge University Press         1365-1005/01 $9.50                                                     673
674     ARNOLD ZELLNER AND BIN CHEN

alternative macroeconomic models, concluded that there is a great need for addi-
tional empirical testing of alternative macroeconomic models and production of
improved models.
   Over the years many structural econometric and empirical statistical models
have been constructed and used. These include large structural econometric mod-
els, for example, the Tinbergen, Klein, Brookings–SSRC, Federal Reserve–MIT–
PENN, OECD, and Project Link. Although progress has been made, there does
not yet appear to be a structural model that performs satisfactorily in point and
turning-point forecasting. Indeed, the forecasting performance of some of these
models is not as good as that of simple benchmark models for example, ran-
dom walk, autoregressive, Box–Jenkins univariate ARIMA, and autoregressive
leading-indicator (ARLI) models [see, e.g., Cooper (1972), Garcia-Ferrer et al.
(1987), Hong (1989), and Nelson and Plosser (1982)]. Further, some have im-
plemented vector autoregressive (VAR) and Bayesian VAR models in efforts to
obtain improved forecasts [see, e.g., Litterman (1986) and McNees (1986)]. How-
ever, these VAR’s generally have not been successful in point and turning-point
forecasting performance, as noted by Zarnowitz (1986) and McNees (1986). See
also the simulation experiments performed by Adelman and Adelman (1959) and
Zellner and Peck (1973), which revealed some rather unusual properties of two
large-scale econometric models.
   Given the need for improved models, in Garcia-Ferrer et al. (1987) an empiri-
cal implementation of the structural econometric time-series analysis (SEMTSA)
approach of Zellner and Palm (1974, 1975), Palm (1976, 1977, 1983) and Zellner
(1979, 1994) was reported. In line with the SEMTSA general approach, rela-
tively simple forecasting equations, autoregressive leading-indicator (ARLI) mod-
els were formulated and tested in forecasting output growth rates for nine indus-
trialized countries with some success. In later work, the sample of countries was
expanded to 18 and the forecast period extended to include more out-of-sample
growth rates of real GDP to be forecast; see Min and Zellner (1993). Building on
work of Wecker (1979) and Kling (1987), a Bayesian decision theoretic procedure
for forecasting turning points that yielded correct forecasts in about 70% of 211
turning point episodes was formulated and applied; see Zellner and Min (1999),
Zellner et al. (1999), and the references cited in these papers. Further, the ARLI
models were shown to be compatible with certain aggregate supply and demand,
Hicksian “IS-LM,” and generalized real-business-cycle models by Hong (1989),
Min (1992), and Zellner (1999).
   In a continuing effort to improve our models, in the present paper, we use a
relatively simple Marshallian model in Section 2 that features demand, supply,
and entry equations for each sector of an economy [see Veloce and Zellner (1985)
for a derivation of this model and an application of it in the analysis of data for a
Canadian industry]. The model is solved to produce a sectoral relation that can be
employed to forecast sectoral output. These sectoral output forecasts are summed to
produce forecasts of total output that are compared to forecasts derived from models
implemented with aggregate data. Some possible advantages of disaggregation
have been discussed by Orcutt et al. (1961), Espasa and Matea (1990), Espasa
                                 BAYESIAN MODELING OF ECONOMIES                675

(1994), and de Alba and Zellner (1991), among others. Actual comparisons of
such forecasts for U.S. annual real GDP growth rates, 1980–1997, are reported
in Section 4 after statistical estimation and forecasting techniques, employed to
implement the MMM, are presented in Section 3. In Section 4, the data used
in our empirical forecasting work are described, and forecasting results using
the MMM and other models with and without disaggregation are reported. Also,
MMM models’ forecast performance is compared to that of various benchmark
and ARLI models. In Section 5, some comments on data requirements, a summary
of conclusions, and remarks on future research are presented.


2. MARSHALLIAN MACROECONOMIC MODEL
In the MMM, we have three basic, rather well-known equations, described and
applied by Veloce and Zellner (1985): (i) demand for output, (ii) supply of output,
and (iii) entry equations encountered in Marshall’s famous economic analyses of
the behavior of industries. Although many macro models have included demand
and supply equations, they have not included an entry equation. For example, in
some models there is just a representative firm, and one wonders what happens
when the representative firm shuts down. In our MMM model, supply depends on
the number of firms in operation and thus an equation governing the number of
firms in operations—an entry equation—is introduced.
   We use two variants of the MMM model: an aggregate, reduced-form vari-
ant and a disaggregated structural equation variant. In the aggregate variant, we
adopt a “one-sector” view of an economy whereas in the disaggregated variant,
we adopt a multisectoral view of an economy. With the multisectoral view, many
assumed structures are possible, from the multisectoral view of traditional Leonti-
eff input–output analysis to the simple view that we employ, namely, an economy
in which each sector sells in a final-product market. Herein, we do not take up the
interesting problem of classifying economies by the nature of their sectoral inter-
relations, but we do show that, by adopting our sectoral view, we are able to im-
prove forecasts of aggregate output growth rates because disaggregation provides
more observations to estimate relationships and permits use of sectoral-specific
variables to help improve forecasts. Of course, if the disaggregated relations are
misspecified and/or the disaggregated data are faulty, then there may be no advan-
tages and perhaps some disadvantages in using disagregated data, as is evident.
Also, there are some circumstances when data are good and relations are well
formulated but disaggregation does not lead to improved forecasts. However, the
issue cannot be completely settled theoretically and hence our current empirical
work.
   As explained by Veloce and Zellner (1985), the equations for a sector that we
use are a demand equation for output, an industry supply equation for output, and
a firm entry equation. Although we could elaborate the system in many ways,
we proceed to determine how well this simplest system peforms empirically—
our “Model T” that can be improved in many different ways in the future. When
these three equations are solved for the implied equation for the sectoral output
676     ARNOLD ZELLNER AND BIN CHEN

growth rate [see Veloce and Zellner (1985) for details], the result is the following
differential equation for total industrial sales, denoted by S = S(t):
                        (1/S) d S/dt = a(1 − S/F) + g,                           (1)
where a and F are positive parameters and g is a linear function of the growth
rates of the wage rate, the price of capital, and of demand shifters such as real
income and real money balances. If g = 0 or g = c, a positive constant, then (1) is
the differential equation with a logistic curve solution that is employed in many
sciences, including economics. Also note that (1) incorporates both the rate of
change of S and the level of S, a “cointegration” effect. Also see Veloce and Zellner
(1985, p. 463), for analysis of (1) when g = g(t), a special form of Bernouilli’s
differential equation and its solution.
   In our empirical work, we use the discrete approximations to equation (1) shown
in Table 1 and denoted by MMM(DA)I-IV. In these equations, the rate of growth
of S, real output, is related to lagged levels of S, lagged rates of change of real
stock prices, S R, and real money, m, and current rates of change of real wage rates,
W , and real GDP, Y . The variables m and Y are “demand shifters,” W is the price
of labor, and S R is related to the price of capital. As noted in the literature and
in our past work, the rates of change of m and S R are effective leading-indicator
variables in a forecasting context and their use has led to improved forecasts in
our past work; see references cited above for empirical evidence.
   Under Sectoral forecast equations in Table 1 are three benchmark models that
are used to produce sectoral one-year-ahead forecasts of the rates of change of
output for each of our 11 sectors. The first is an AR(3) that has been used in many
earlier studies as a benchmark model. The second is an AR(3) that incorporates
lagged leading-indicator variables and current values of W and Y but no lagged
level variables. The third “Distributed Lag” model is like the second except for the
inclusion of lagged rates of change of W and of Y .
   At the top of Table 1, under Reduced-form equations, are equations for the rate of
change of Y , annual real GDP. The first is a benchmark AR(3) model. The second
is an AR(3) with lagged leading-indicator variables that is denoted by AR(3)LI.
The third model, denoted MMM(A), is the same as the AR(3)LI model except for
the inclusion of two lagged Y variables, where Y = real GDP and t = a time trend.
   For our aggregate analyses, we use the reduced-form equations in Table 1 to
produce one-year-ahead forecasts of the rate of change of real GDP, Y , which
we refer to as “aggregate forecasts.” These are means of diffuse prior Bayesian
predictive densities for each model that are simple one-year-ahead least-squares
forecasts. As explained later, the MMM(A) reduced-form equations for the rates
of change of Y and of W are employed in the estimation of the sectoral forecasting
equations and in computing one-year-ahead forecasts of sectoral output growth
rates. These sectoral growth-rate forecasts are transformed into forecasts of levels,
added across the sectors and converted into a forecast of the rate of change of real
GDP, Y . Root-mean-squared errors (RMSE’s) and mean absolute errors (MAE’s)
are computed for each forecasting procedure and are shown in Table 2 and 3 below.
TABLE 1. Forecasting equations

Model              Reduced-form equations

                                                        Real U.S. GDP

AR(3)(A):         (1 − L) log Yt = α0 + α1 (1 − L) log Yt−1 + α2 (1 − L) log Yt−2 + α3 (1 − L) log Yt−3 + u t
AR(3)LI(A):       (1 − L) log Yt = α0 + α1 (1 − L) log Yt−1 + α2 (1 − L) log Yt−2 + α3 (1 − L) log Yt−3 + β1 (1 − L) log S Rt−1
                     + β2 (1 − L) log m t−1 + u t
MMM(A):           (1 − L) log Yt = α0 + α1 (1 − L) log Yt−1 + α2 (1 − L) log Yt−2 + α3 (1 − L) log Yt−3 + α4 Yt−1 + α5 Yt−2 + α6 t
                     + β1 (1 − L) log S Rt−1 + β2 (1 − L) log m t−1 + u t

                                                        Real Wage

AR(3) (A):        (1 − L) log Wt = α0 + α1 (1 − L) log Wt−1 + α2 (1 − L) log Wt−2 + α3 (1 − L) log Wt−3 + u t
AR(3)LI(A):       (1 − L) log Wt = α0 + α1 (1 − L) log Wt−1 + α2 (1 − L) log Wt−2 + α3 (1 − L) log Wt−3 + β1 (1 − L) log S Rt−1
                     + β2 (1 − L) log m t−1 + u t
MMM(A):           (1 − L) log Wt = α0 + α1 (1 − L) log Wt−1 + α2 (1 − L) log Wt−2 + α3 (1 − L) log Wt−3 + γ1 Wt−1 + γ2 Wt−2 + γ3 t
                     + β1 (1 − L) log S Rt−1 + β2 (1 − L) log m t−1 + u t

Model              Sectoral forecast equations

AR(3)(DA):       (1 − L) log St = α0 + α1 (1 − L) log St−1 + α2 (1 − L) log St−2 + α3 (1 − L) log St−3 + u t
AR(3)LI(DA):     (1 − L) log St = α0 + α1 (1 − L) log St−1 + α2 (1 − L) log St−2 + α3 (1 − L) log St−3 + β1 (1 − L) log S Rt−1
                    + β2 (1 − L) log m t−1 + β3 (1 − L) log Wt + β4 (1 − L) log Yt + u t
Distrib.Lag(DA): (1 − L) log St = α0 + α1 (1 − L) log St−1 + β1 (1 − L) log S Rt−1 + β2 (1 − L) log m t−1 + β3 (1 − L) log Wt
                    + β4 (1 − L) log Yt + β5 (1 − L) log Wt−1 + β6 (1 − L) log Yt−1 + u t
MMM(DA)I:         (1 − L) log St = α0 + α1 St−1 + β1 (1 − L) log S Rt−1 + β2 (1 − L) log m t−1 + β3 (1 − L) log Wt
                     + β4 (1 − L) log Yt + u t
MMM(DA)II:        (1 − L) log St = α0 + α1 St−1 + α2 St−2 + β1 (1 − L) log S Rt−1 + β2 (1 − L) log m t−1 + β3 (1 − L) log Wt
                                                                                                                                         BAYESIAN MODELING OF ECONOMIES




                     + β4 (1 − L) log Yt + u t
MMM(DA)III:       (1 − L) log St = α0 + α1 St−1 + α2 St−2 + α3 St−3 + β1 (1 − L) log S Rt−1 + β2 (1 − L) log m t−1 + β3 (1 − L) log Wt
                     + β4 (1 − L) log Yt + u t
                                                       2
                                                                                                                                         677




MMM(DA)IV:        (1 − L) log St = α0 + α1 St−1 + α2 St−1 + β1 (1 − L) log S Rt−1 + β2 (1 − L) log m t−1 + β3 (1 − L) log Wt
                     + β4 (1 − L) log Yt + u t
678        ARNOLD ZELLNER AND BIN CHEN

3. ESTIMATION AND FORECASTING METHODS
3.1. Notation and Equations
In what follows, we use the following notation: For each sector, we have
     1. Endogenous or Random Current Exogenous Variables:

               y1t = (1 − L) log St ,     y2t = (1 − L) log Wt ,      y3t = (1 − L) log Yt ,

        where St = sectoral real output, Wt = national real wage rate, and Yt = real GDP.
     2. Predetermined Variables:

                  x01t = [1, St−1 , St−2 , St−3 , (1 − L) log S Rt−1 , (1 − L) log m t−1 ],

        where S Rt = real stock price and m t = real money.
     We use these variables to form the following structural equation for each sector:

                 y1t = y2t γ21 + y3t γ31 + x1t0 β1 + u 1t           t = 1, 2,.., T

or
                                  y1 = Y1 γ 1 + X 1 β 1 + u1 ,                                  (2)
where the vectors y1 and u1 are Tx1, Y1 is Tx2 and X 1 is Tx5 and (δ 1 )0 = (γ10 , β10 )
is a vector of structural parameters.
   The MMM unrestricted reduced-form equations, shown in Table 1, are denoted
by
                                         y1 = X π1 + v1                                        (3a)
and
                                        Y1 = X 51 + V1 ,                                       (3b)
where X = (X 1 , X 0 ) with X 0 containing predetermined variables in the system
that are not included in equation (2).
   By substituting from (3b) in (2), we obtain the following well-known restricted
reduced-form equation for y1 :

                                  y1 = X 51 γ1 + X 1 β1 + v1                                   (4a)

                                     = Z̄ δ1 + v1 ,                                            (4b)

where Z̄ = (X 51 , X 1 ), which is assumed to be of full column rank. Further, if we
consider the regression of v1 on V1 ,

                         v1 = V1 η1 + e1 = (Y1 − X 51 )η1 + e1 ,                                (5)

we can substitute for v1 in (4a) to obtain

                      y1 = X 51 γ 1 + X 1 β 1 + (Y1 − X 51 )η 1 + e1                            (6)
                                   BAYESIAN MODELING OF ECONOMIES                 679

In (6), for given 51 , we have a regression of y1 on X 51 , X 1 , and Y1 − X 51 . Given
that e1 is uncorrelated with the the elements of V1 , the system (3b) and (6) is a
nonlinear SUR system with an error covariance matrix restriction. Earlier, Pagan
(1979) recognized a connection between the model in (2) and (3b) and the SUR
model, given the “triangularity” of the system, and reported an iterative compu-
tational procedure for obtaining maximum likelihood estimates of the structural
coefficients. In our case, we use (3b) and (6) as a basis for producing a convenient
algorithm for computing posterior and predictive densities.
   Note further that if γ1 = η1 , equation (6) becomes

                             y1 = Y1 γ 1 + X 1 β 1 + e1 ,                          (7)
the same as (2) except for the error term. It is possible to view (7) as a regression
with Y1 containing observations on stochastic independent variables, given that
the elements of e1 and V1 are uncorrelated. The above restriction, however, may
not hold in general. Another interpretation that permits (7) to be viewed as a
regression with stochastic input variables is that the variables y2t and y3t are
stochastic exogenous variables vis à vis the sectoral model. In such a situation,
equation (2) can be treated as a regression equation with stochastic independent
variables. However, we are not sure that this exogeneity assumption is valid and
thus will use not only least-squares techniques to estimate (2) but also special
simultaneous-equation techniques.


3.2. Estimation Techniques
The sampling-theory estimation techniques that we employ in estimating the pa-
rameters of (2) are the well-known ordinary least-squares (OLS) and two-stage
least-squares (2SLS) methods. As shown by Zellner (1998), in very small samples,
but not in large samples, the OLS method produces an optimal Bayesian estimate
relative to a generalized quadratic “precision of estimation” loss function when dif-
fuse priors are employed. Also, the 2SLS estimate has been interpreted as a condi-
tional Bayesian posterior mean using (4) conditional on 51 = 5̂1 = (X 0 X )−1 X 0 Y1 ,
a normal likelihood function, and diffuse priors for the other parameters of (4).
A similar conditional result is obtained without the normality assumption using
the assumptions of the Bayesian method of moments (BMOM) approach; see, for
example, Zellner (1997a,b, 1998). Since the “plug in” assumption 51 = 5̂1 does
not allow appropriately for the uncertainty regarding 51 ’s value, the 2SLS estimate
will not be optimal in small samples; see, for example, Monte Carlo experiments
reported by Park (1982), Tsurumi (1990), and Gao and Lahiri (1999). However,
since OLS and 2SLS are widely employed methods, we use them in our analyses
of the models for individual sectors.
   In the Bayesian approach, we decided to use the “extended minimum expected
loss” (EMELO) optimal estimate put forward by Zellner (1986, 1998), which has
performed well in Monte Carlo experiments by Tsurumi (1990) and Gao and Lahiri
680       ARNOLD ZELLNER AND BIN CHEN

(1999). It is the estimate that minimizes the posterior expectation of the following
extended or balanced loss function:

 L(δ 1 , δ̂ 1 ) = w(y1 − Z̄ δ̂ 1 )0 (y1 − Z̄ δ̂ 1 ) + (1 − w)(δ 1 − δ̂ 1 )0 Z̄ 0 Z̄ (δ 1 − δ̂ 1 )
              = w(y1 − Z̄ δ̂ 1 )0 (y1 − Z̄ δ̂ 1 ) + (1 − w)(X π 1 − Z̄ δ̂ 1 )0 (X π 1 − Z̄ δ̂ 1 ),
                                                                                                (8)

where w has a given value in the closed interval 0 to 1, δ̂ 1 is some estimate of δ 1 ,
and in going from the first line of (8) to the second, the identifying restrictions,
multiplied on the left by X , namely X π 1 = Z̄ δ1 , have been employed.
   Relative to equation (4), the first term on the right side of (8) reflects goodness
of fit and the second reflects precision of estimation or, from the second line of
(8), the extent to which the identifying restrictions are satisfied when an estimate
of δ 1 is employed. When the posterior expectation of the loss function in (8) is
minimized with respect to δ̂ 1 , the minimizing value is
                      ∗
                     δ̂ 1 = (E Z̄ 0 Z̄ )−1 [wE Z̄ 0 y1 + (1 − w)E Z̄ 0 X π 1 ].                     (9)

On evaluation of the moments on the right-hand side of (9), we have an explicit
value for the optimal estimate. For example, with the assumption that, for the
unrestricted reduced-form system in (3), the rows of (v1 , V1 ) are i.i.d. N (0, Ä),
where Ä is a pds (positive definite symmetric) covariance matrix, combining a
standard diffuse prior for the reduced-form parameters with the normal likelihood
function yields a marginal matrix t density for the reduced-form coefficients. Thus,
the moments needed to evaluate (9) are readily available [see Zellner (1986) for
details] and, surprisingly, the result is in the form of the double-K-class estimate,
             " # " 0                                   #−1 "                     #
         ∗     γ̂ 1     Y1 Y1 − K 1 V̂10 V̂1 Y10 X 1         (Y1 − K 2 V̂1 )0 y1
      δ̂ 1 =        =                                                              , (10)
              β̂ 1      X 10 Y1               X 10 X 1            X 10 y1

with
                          V̂1 = Y1 − X 5̂1 ,        5̂1 = (X 0 X )−1 X 0 Y1
and

 K 1 = 1 − k/(T − k − m − 2)               and     K 2 = K 1 + wk/(T − k − m − 2). (11)

K-class and double-K-class estimates are discussed in most econometrics texts
[see, e.g., Judge et al. (1987)] and the choice of optimal values for the K ’s has been
the subject of much sampling-theory research. The Bayesian approach provides
optimal values of these parameters quite directly on use of goodness of fit, precision
of estimation, or balanced loss functions.
   When the form of the likelihood function is unknown and thus a traditional
Bayesian analysis is impossible, we used the BMOM approach [Zellner (1998)]
to obtain a postdata maxent density for the elements of 5 = (51 π1 ) that was
                                    BAYESIAN MODELING OF ECONOMIES                   681

used to evaluate the expectation of the balanced loss function in (8), and we
derived an optimal value of δ̂1 that is also in the form of a double-K-class estimate,
shown in (10), but with slightly different values of the K parameters, namely,
K 1 = 1 − k/(T − k) and K 2 = K 1 + wk/(T − k). In our calculations based on the
extended MELO estimate, we used the BMOM K values and w = 0.75, the value
used by Tsurumi (1990) in his Monte Carlo experiments.
   SUR estimates for the system were computed by assuming that the y2 and y3
variables in (2) are stochastic exogenous variables for each sector and treating the
11 sectoral equations as a set of seemingly unrelated regression equations. We
estimated the parameters by “feasible” generalized least squares. The parameter
estimates so obtained are means of conditional posterior densities in traditional
Bayesian and BMOM approaches.
   Complete shrinkage estimation utilized the assumption that all sectors’ param-
eter vectors are the same. Under this assumption and the assumption that y2 and y3
are stochastic exogenous variables, estimates of the restricted parameter vector
were obtained by least squares that are also posterior means in Bayesian and
BMOM approaches.
   Exact posterior densities for the structural parameters in (6) can be calculated
readily in the Bayesian approach by using diffuse priors for the parameters of (6),
given 51 , that is, a uniform prior on elements of δ 1 , β 1 , η 1 , and log σe , where σe
is the standard deviation of each element of e1 . Further, the usual diffuse priors
are employed for 51 and Ä1 , a marginal uniform prior on the elements of the
reduced-form matrix 51 in (3) and a diffuse prior on Ä1 , the covariance matrix
for the independent, zero-mean, normal rows of V1 . With use of these priors, the
usual normal likelihood function for the system, and Bayes’ theorem, we obtain
the following joint posterior density for the parameters, where D denotes the given
data [see Zellner et al. (1994) and Currie (1996)]:

         f (γ 1 , β 1 , η 1 | σe , 51 , D)g(σe | 51 , D)h(51 | Ä1 , D) j (Ä1 | D),   (12)
                     MVN                     IG           MVN             IW

where MVN denotes a multivariate normal density, IG is an inverted gamma den-
sity, and IW is an inverted Wishart density. A similar factorization of the joint
BMOM postdata density is available; see Zellner (1997a,b).
   Given equation (12), we can draw from the IW density and insert the drawn
values in h and make a draw from it. Then, the 51 value so drawn is inserted in g
and a draw made from it. Then drawn values of σe and 51 are inserted in f , and a
draw of the structural coefficients in f is made. This direct Monte Carlo procedure
can be repeated many times to yield moments, fractiles, and marginal densities for
all parameters appearing in (12). Also, a similar approach, described in Section 3.3
can be employed to compute predictive densities. Some of these calculations have
been performed using sectoral models and data that will be reported in a future
paper.
682     ARNOLD ZELLNER AND BIN CHEN

3.3. Forecasting Techniques
For one-year-ahead forecasts of the rates of growth of real GDP using the aggregate
models in Table 1, we employed least-squares forecasts that are means of Bayesian
predictive densities when diffuse priors and the usual normal likelihood functions
are employed. Predictive means are optimal in terms of providing minimal expected
loss vis à vis squared-error predictive loss functions. Further, since these predictive
densities are symmetric, the predictive mean is equal to the predictive median that
is optimal relative to an absolute error predictive loss function.
   One-year-ahead forecasts for the sectoral models in Table 1 were made using
one-year-ahead MMM(A) reduced-form forecasts of the y2T +1 and y3T +1 variables
on the right-hand side of equation (2) and using the parameter estimates provided
by the methods described earlier. That is, the one-year-ahead forecast is given by

                     ŷ1T +1 = ŷ2T +1 γ̂21 + ŷ3T +1 γ̂31 + x01T +1β̂ 1 .         (13)

The η shrinkage technique, derived and utilized by Zellner and Hong (1989),
involves shrinking a sector’s forecast toward the mean of all 11 sectors’ forecasts
by averaging a sector’s forecast with the mean of all sectors’ forecasts as follows:

                           ŷ1T +1 = η ŷ1T +1 + (1 − η)ȳT +1 ,

where ŷ1T +1 is the sector forecast, ȳT +1 is the mean of all the sectors’ forecasts,
and η is assigned a value in the closed interval 0 to 1.
  Gamma shrinkage, discussed and applied by Zellner and Hong (1989), involves
assuming that the individual sector’s coefficient vectors are distributed about a
mean, say θ, and then using an average of an estimate of the sector’s coefficient
vector with an estimate of the mean θ of the parameter vectors. That is,

                              δ̂ η = (δ̂ 1 + γ θ̂)/(1 + γ θ̂)                      (14)

with 0 < γ < ∞. This coefficient estimate can be employed to produce one-year-
ahead forecasts using the structural equations for each sector and MMM(A)
reduced-form forecasts of the endogenous variables (1 − L) log WT +1 and (1 − L)
log YT +1 . Various values of η and γ are employed in forecasting sectoral growth
rates that are used to construct an aggregate forecast of the growth rate of re-
al GDP.
   We also can compute a predictive density for a sector’s one-year-ahead growth
rate as follows: From (6), we can form the conditional density

                  q(y1T +1 | 51 , γ 1 , β 1 , η 1 , σe , y2T +1 , y3T +1 , D),

which will be in a normal form, given error-term normality. Thus, each draw from
(12) and a draw from the predictive density for (y2T +1 , y3T +1 ) can be inserted in
q and and a value of y1T +1 drawn from q. Repeating the process will produce a
sample of draws from q from which the complete predictive density, its moments,
and so on, can be computed. Two such predictive densities, one for the durables
                                  BAYESIAN MODELING OF ECONOMIES                 683

sector and the other for the services sector, are presented below. The densities
are slightly skewed to the left and rather spread out. However, the means that are
optimal relative to squared-error loss are not too far from the actual values being
forecasted. Also, these densities are valuable in making probability statements
about future outcomes, including turning-point forecasts.
   We now turn to consider plots of the data and reports of forecasting results.


4. DISCUSSION OF DATA AND FORECASTING RESULTS
In Figure 1A are shown plots of the real rates of growth of GDP, M1, currency, stock
prices, and wage rates, 1949–1997. Peaks and troughs in the plots occur roughly
at about 4-to 6-year intervals. Note the sharp declines in real GDP growth rates in
1974 and 1982 and a less severe drop in 1991. The money and stock-price growth-
rate variables tend to lead the real GDP growth-rate variable, as observed in the
earlier work of many. The two money growth-rate variables show similar patterns
before the 1990’s, but during the 1990’s their behavior is somewhat different,
perhaps because of a change in policy that permitted interest to be paid on demand
deposits. In our forecasting results, we find that use of the currency variable yields
somewhat better results than use of the M1 variable.
   Figure 1B presents a plot of the output growth rates for 11 sectors of the U.S.
economy. It is seen that, except for the agriculture and mining sectors, the sectoral
output growth rates tend to move together over the business cycle, whereas the
agricultural and mining sectors show extreme variation. In contrast, the other
sectors have much smaller interquartile ranges and fewer outlying growth rates.
See also the boxplots for the sectoral growth rates in Figure 1C.
   In Figure 2A are shown the one-year-ahead, aggregate forecasts plotted as solid
lines and the actually observed rates of growth plotted as circles. In the first panel
of Figure 2A, labeled AR(3), an aggregate AR(3) model for the real GDP growth
rates (see Table 1) was employed with data 1949–79 to generate one-year-ahead
forecasts year by year, 1980–1997, with estimates being updated each year. The
plot shows dramatically the failure of the AR(3) model to forecast turning points
successfully. Very large errors occurred in 1982 and 1991. Use of the AR(3)LI
model (see Table 1) that incorporates two lagged leading-indicator variables, the
real rates of growth of currency and of stock prices, produced the forecasts shown
by the solid lines in the second panel of Figure 2A. There are improvements in
forecasts for 1982 and 1984 vis à vis use of the AR(3) model. However, there is
still a large error in the 1991 forecast. Use of the MMM(A) model (see Table 1)
that incorporates two lagged level GDP variables and a linear time trend in the
AR(3)LI model produced the forecasts shown in the third panel of Figure 2A. Here,
there are improvements, as compared to the use of the AR(3) model in most years,
especially 1982, 1990, and 1991. Also, use of the MMM(A) model led to improved
forecasts as compared to those provided by the AR(3)LI, especially in the 1990’s.
   In Figure 2B are shown the disaggregated, one-year-ahead forecasts, plotted as
solid lines, and the observed real GDP growth-rate data, plotted as circles. Here, for
                                           684
                                           ARNOLD ZELLNER AND BIN CHEN




FIGURE 1A. Real growth rates, 1949–1997.
                                   BAYESIAN MODELING OF ECONOMIES                685




                   FIGURE 1B. U.S. sectoral real output growth rates.


each year, the 11 sectoral forecasts are employed to generate a forecast of the growth
rate of aggregate real GDP using annually updated estimates of relations. Even
though the sectoral AR(3) forecasts were employed, there is little improvement as
compared with the aggregate AR(3) forecasts, shown in Figure 2A. The AR(3)LI
and distributed-lag (DL) models were used to generate forecasts for each of the
11 sectors and these were employed to calculate a forecast of the annual growth
rates of real GDP, with results shown in the second panel of the first column of
Figure 2B. The forecast performance of the DL model is seen to be better than
that of the AR(3) model and about the same as that of the AR(3)LI model. With
use of disaggregation and of the MMM(DA) models I–IV (see Table 1 for their
definitions) that include lagged level variables, the forecasting results shown in
Figure 2B were obtained. The MMM(DA) models outperformed the AR(3) model
by a wide margin and the disaggregated DL and AR(3)LI models by smaller
margins. Also, from a comparison of Figures 2A and 2B, the MMM(DA) models
performed better than all of the aggregate models.
   With respect to the four MMM(DA) models, it appears that MMM(DA)III has a
slight edge over the other three MMM(DA) models. It caught the 1982 downturn
and subsequent upturn rather well and its performance in later years, particularly
the 1990’s, is slightly better than that of the alternative models considered in
Figures 2A and 2B. However, it missed the 1991 trough growth rate.
   When the lagged rate of growth of real M1 is used as a leading-indicator variable,
rather than the lagged rate of growth of real currency, the results in Figures 3A
and 3B were obtained. The results in Figure 3A are similar to those in Figure 2A
                                                 686
                                                 ARNOLD ZELLNER AND BIN CHEN




FIGURE 1C. Real output growth rates by sector.
                                                                              BAYESIAN MODELING OF ECONOMIES
                                                                              687




FIGURE 2A. Aggregate GDP growth-rate forecasts using the currency variable.
                                                                                                       688
                                                                                                       ARNOLD ZELLNER AND BIN CHEN




FIGURE 2B. Disaggregated GDP growth-rate forecasts using the currency variable (complete shrinkage).
                                                                        BAYESIAN MODELING OF ECONOMIES
                                                                        689




FIGURE 3A. Aggregate GDP growth-rate forecasts using the M1 variable.
                                                                                                 690
                                                                                                 ARNOLD ZELLNER AND BIN CHEN




FIGURE 3B. Disaggregated GDP growth-rate forecasts using the M1 variable (complete shrinkage).
                                    BAYESIAN MODELING OF ECONOMIES               691

in that both the AR(3)LI and MMM(A) models’ forecasting performance was
much better than that of the AR(3) model. Use of the M1 variable rather than the
currency variable led to a slight deterioration of the forecasting performance of the
MMM(A). To a lesser degree, the same conclusion holds for the AR(3)LI model’s
performance. In Figure 3B, the use of the M1 variable produced results similar to
those reported in Figure 2B. Note, however, that use of M1 and the models other
than the AR(3) led to better forecasts of the low 1991 real GDP growth rate and
slightly worse forecasts of the low 1982 growth rate.
   Shown in Tables 2 A and 2B are the RMSE’s and MAE’s associated with various
models’ one-year-ahead forecasts of annual real GDP growth rates, 1980–1997,
using data from 1952–1979 to estimate models, which were then reestimated year
by year in the forecast period. Currency was used as the money variable. From
Table 2A, it is seen that the MMM(A) model has an RMSE of 1.72 and an MAE
of 1.48, lower than those associated with the AR(3) and AR(3)LI models. For the
rates of change of the real wage rate, the AR(3) model’s RMSE of 1.43 and MAE
of 0.98 are somewhat smaller than those of the MMM(A) and AR(3)LI models.
These results indicate that the MMM(A) model for the growth rate of the real wage
needs improvement, perhaps by inclusion of demographic and other variables.
   As regards the disaggregated forecasts for the rate of growth of real GDP, shown
in Table 2B, it is seen that all of the disaggregated forecasts have smaller RMSE’s
and MAE’s than those for the aggregate and disaggregated AR(3) model. For
example, the disaggregated AR(3) model has RMSE = 2.26 and MAE = 1.65,
whereas the disaggregated AR(3)LI, Distributed Lag, and MMM(DA) models
have RMSE’s ranging from 1.40 to 1.98 and MAE’s ranging from 1.17 to 1.62. As
regards just the MMM(DA) models shown in Table 2B, their associated RMSE’s
and MAE’s ranged from 1.40 to 1.92 and 1.17 to 1.62, respectively. The lowest
RMSE and MAE are encountered for the MMM(DA) III model fitted using the
SUR approach, namely RMSE = 1.40 and MAE = 1.17. However, quite a few
other MMM(DA) models had RMSE’s in the 1.4–1.5 range and MAE’s in the
1.2–1.4 range.

TABLE 2A. Forecast RMSE’s and MAEs for aggregate models using currency as
money variable (percentage points), 1952–1997 ⇒ 1980–1997
Error                 AR(3)(A)                   AR(3)LI(A)                MMM(A)

                                Real income Yt (Real GDP)

RMSE                     2.32                           2.61                  1.72
MAE                      1.71                           2.19                  1.48

                                    Real wage rate Wt

RMSE                     1.43                           1.71                  1.49
MAE                      0.98                           1.10                  1.11
692     ARNOLD ZELLNER AND BIN CHEN

TABLE 2B. Forecast RMSE’s and MAE’s for disaggregated models using currency
as money variable (percentage points),∗ 1952–1979 ⇒ 1980–1997
                                                                  MMM(DA)
                                      Distrib.
Error   AR(3)(DA)    AR(3)LI(DA)     Lag(DA)           I          II   III    IV

                                       OLS

RMSE      2.26            1.62         1.61           1.61    1.52     1.47   1.80
MAE       1.65            1.32         1.35           1.31    1.28     1.25   1.47

                                  Extended MELO

RMSE      2.26            1.58         1.62           1.55    1.55     1.50   1.80
MAE       1.65            1.23         1.34           1.26    1.31     1.26   1.46

                                       2SLS

RMSE      2.26            1.60         1.63           1.59    1.49     1.48   1.78
MAE       1.65            1.31         1.38           1.29    1.25     1.24   1.45

                                       SUR

RMSE      2.21            1.70         1.66           1.68    1.61     1.40   1.92
MAE       1.52            1.41         1.36           1.39    1.38     1.17   1.60

                                 Complete Shrinkage

RMSE      2.11            1.73         1.82           1.76    1.57     1.59   1.70
MAE       1.45            1.57         1.60           1.46    1.37     1.38   1.43

                    γ -Shrinkage, γ = 0 (same as OLS), γ = 0.25

RMSE      2.21            1.62         1.61           1.61    1.49     1.46   1.74
MAE       1.59            1.36         1.38           1.34    1.26     1.25   1.41

                                      γ = 0.5

RMSE      2.18            1.62         1.63           1.62    1.49     1.46   1.71
MAE       1.56            1.39         1.42           1.36    1.27     1.27   1.38

                                       γ =1

RMSE      2.15            1.64         1.66           1.64    1.49     1.48   1.69
MAE       1.52            1.44         1.46           1.38    1.29     1.29   1.39

                                       γ =2

RMSE      2.13            1.66         1.70           1.67    1.51     1.50   1.68
MAE       1.49            1.48         1.51           1.41    1.32     1.32   1.40

                                       γ= 5

RMSE      2.11            1.69         1.75           1.71    1.53     1.54   1.68
MAE       1.47            1.52         1.56           1.44    1.34     1.35   1.41
                                              BAYESIAN MODELING OF ECONOMIES                           693

TABLE 2B. (Continued.)
                                                                                 MMM(DA)
                                    Distrib.
Error        AR(3)(DA) AR(3)LI(DA) Lag(DA)                          I            II          III        IV

                                  γ = 106 (same as complete shrinkage)

                              η-Shrinkage, η = 0 (same as OLS), η = 0.25

RMSE             2.26             1.66            1.62            1.59         1.49          1.44      1.77
MAE              1.63             1.36            1.40            1.34         1.25          1.24      1.48

                                                    η = 0.5

RMSE             2.28             1.73            1.70            1.60         1.48          1.42      1.76
MAE              1.63             1.43            1.50            1.37         1.23          1.23      1.52

                                                    η = 0.75

RMSE             2.33             1.82            1.82            1.62         1.48          1.42      1.79
MAE              1.68             1.55            1.64            1.41         1.21          1.23      1.57

                                                     η=1

RMSE             2.40             1.93            1.98            1.65         1.49          1.44      1.83
MAE              1.76             1.67            1.79            1.44         1.22          1.25      1.62
∗
    Using MMM(A) reduced-form equations to forecast real income and real wage growth rate.



TABLE 3A. Forecast RMSE’s and MAE’s for aggregate models using M1 as the
money variable (percentage points), 1952–1979 ⇒ 1980–1997
                               AR(3)(A)                        AR(3)LI(A)                           MMM(A)

                                         Real income Yt (Real GDP)

RMSE                              2.32                              2.57                             2.23
MAE                               1.71                              1.98                             1.90

                                              Real wage rate Wt

RMSE                              1.43                              1.73                             1.66
MAE                               0.98                              1.07                             1.29



   In Tables 3A and 3B, results similar to those presented in Tables 2A and 2B are
shown for models incorporating a lagged rate of change of real M1 rather than the
real currency variable. In general the use of the M1 variable resulted in a generally
small deterioration in forecasting precision for all the models. However, again,
disaggregation led to improved forecasting precision for the AR(3)LI and MMM
models in all cases. Use of the MMM(DA)III model generally led to slightly
lower RMSE’s and MAE’s than other MMM(DA) models. The lowest RMSE
694     ARNOLD ZELLNER AND BIN CHEN

TABLE 3B. Forecast RMSE’s and MAE’s for disaggregated models using M1 as
the money variable∗ (percentage points), 1952–1979 ⇒ 1980–1997
                                                              MMM(DA)
                                       Distrib.
Error   AR(3)(DA)    AR(3)LI(DA)      Lag(DA)          I      II    III    IV

                                       OLS

RMSE      2.26            2.03          2.01          2.04   1.96   1.89   2.17
MAE       1.65            1.77          1.74          1.78   1.76   1.67   1.88

                                  Extended MELO

RMSE      2.26            1.97          2.07          1.95   2.00   1.93   2.14
MAE       1.65            1.74          1.81          1.73   1.83   1.76   1.89

                                       2SLS

RMSE      2.26            2.06          2.06          1.99   1.91   1.89   2.12
MAE       1.65            1.78          1.76          1.75   1.73   1.69   1.85

                                       SUR

RMSE      2.21            2.21          2.07          2.14   2.01   2.00   2.30
MAE       1.52            1.87          1.74          1.87   1.79   1.75   1.96

                                 Complete Shrinkage

RMSE      2.11            2.21          2.34          2.05   1.94   1.93   1.89
MAE       1.45            1.81          2.02          1.70   1.55   1.56   1.63

                    γ -Shrinkage, γ = 0 (same as OLS), γ = 0.25

RMSE      2.21            2.04          2.02          2.01   1.91   1.85   2.06
MAE       1.59            1.75          1.67          1.74   1.68   1.60   1.78

                                      γ = 0.5

RMSE      2.18            2.06          2.04          1.99   1.89   1.84   2.01
MAE       1.56            1.73          1.65          1.71   1.62   1.55   1.71

                                       γ =1

RMSE      2.15            2.08          2.09          1.99   1.88   1.84   1.95
MAE       1.52            1.74          1.71          1.69   1.56   1.52   1.66

                                       γ =2

RMSE      2.13            2.12          2.16          2.00   1.88   1.85   1.91
MAE       1.49            1.75          1.80          1.69   1.53   1.53   1.65

                                       γ =5

RMSE      2.11            2.16          2.24          2.02   1.90   1.89   1.89
MAE       1.47            1.76          1.91          1.69   1.53   1.54   1.64
                                              BAYESIAN MODELING OF ECONOMIES                        695

TABLE 3B. (Continued.)
                                                                                   MMM(DA)
                                                     Distrib.
Error         AR(3)(DA)        AR(3)LI(DA)          Lag(DA)            I           II        III    IV

                                 γ = 106 (same as complete shrinkage)

                             η-Shrinkage, η = 0 (same as OLS), η = 0.25

RMSE              2.26               2.04              2.03          2.00        1.93        1.85   2.13
MAE               1.63               1.73              1.70          1.72        1.70        1.60   1.82

                                                    η = 0.5

RMSE              2.28               2.07              2.15          1.99        1.92        1.84   2.13
MAE               1.63               1.71              1.82          1.66        1.63        1.52   1.79

                                                   η = 0.75

RMSE              2.33               2.14              2.33          2.00        1.92        1.86   2.16
MAE               1.68               1.74              2.00          1.64        1.61        1.53   1.78

                                                     η=1

RMSE              2.40               2.23              2.57          2.03        1.95        1.89   2.22
MAE               1.76               1.82              2.19          1.70        1.65        1.61   1.86
∗
    Using MMM(A) reduced-form equations to forecast real income and real wage rate growth.


and MAE, namely, 1.84 and 1.52, respectively, are associated with the use of
MMM(DA)III and η shrinkage with a value of η = 0.50, which can be compared to
the aggregate MMM(A) model’s RMSE of 2.23 and MAE of 1.90 and the aggregate
AR(3)LI model’s RMSE of 2.32 and MAE of 1.98. The RMSE and MAE for the
aggregate AR(3) benchmark model are 2.32 and 1.71, respectively. Clearly, use of
disaggregation has led to improved forecasting performance again—about a 20%
reduction in both RMSE and MAE.
   In Tables 2 and 3, use of alternative methods of estimation, OLS, Extended
MELO, and 2SLS did not have much influence on the precision of forecasts. It
may be that for the present model, the rates of change of real income and of the
real wage rate are stochastic exogenous or independent variables in the sector
models and thus endogeneity is not a problem. However, these two variables must
be forecast in order to forecast sectoral-output growth rates and thus there is a
need for the reduced-form equations shown in Table 1, whether these variables are
stochastic exogenous or endogenous variables.
   For the MMM(DA)III model, diffuse prior, predictive densities for the sectoral-
output growth rates for the Services and Durables sectors were calculated for 1980
and are shown in Figure 4. From the BMOM predictive density, 1,000 draws are
plotted using the methods described in Section 3. The Services predictive den-
sity has a mean equal to 3.14 percentage points and a standard deviation equal
to 2.05 percentage points. The actual growth rate for the Services sector output
696   ARNOLD ZELLNER AND BIN CHEN




      FIGURE 4. Posterior predictive densities for services and durables, 1980.
                                              BAYESIAN MODELING OF ECONOMIES                                  697

in 1980 is 3.57 percentage points. For the Durables sector, the 1980 predictive
mean is 6.31 percentage points, with a standard deviation of 8.06. The actual 1980
growth rate for this sector is 7.33. Both predictive densities appear to be slightly
skewed to the left and rather spread out. Use of informative priors will result in
reduced dispersion. As is well known, such densities can be employed in making
probability statements about possible outcomes, for example, a downturn in the
growth rate and in implementing a decision-theoretic approach for making optimal
turning-point forecasts. Also, these predictive densities and the predictive densi-
ties for other models can be used to form Bayes’ factors for model comparison
and/or model combination. That these predictive densities can be computed rel-
atively easily using the “direct” Monte Carlo approach described in Section 3 is
fortunate.
   Last, in Table 4, we present some MAE’s of forecast for various types of forecasts
of one-year-ahead growth rates of real GDP for the United States compiled by
Zarnowitz (1986). For several different periods and forecasting units, the averages
of their MAE’s associated with annual forecasts of the growth rate of real GNP in
1972 dollars are given in Table 4.
   Many of the MAE’s in Table 4 are of magnitude comparable to those associated
with the MMM(DA) annual one-year-ahead, reproducible forecasts for the period
1980–1997 shown in Table 2B. Some forecasters use informal judgment along
with models and data to produce forecasts. Adding “outside” information through
the use of informative prior distributions may improve the precision of MMM(DA)
forecasts. See Zellner et al. (1999) for some examples of the use of judgmental
information in forecasting turning points in output growth rates. Also, averaging
forecasts from different sources may improve forecast precision, as many have
pointed out. Note that the MAE’s labeled (b) and (d) in Table 4 are such averages.
On the other hand, on-line forecasters have problems associated with the use of
preliminary estimates of economic variables that we do not have in our forecasting
experiments using revised data throughout. The results of some on-line forecasting
experiments would be of great value in assessing the importance of the “preliminary
data” problem.

TABLE 4. MAE’s for annual forecasts of growth rates of real GNP made by
various forecasters (percentage points)

Period                                                  MAE                                              Average

1953–1967                                 1.3(e), 1.0(d)                                                    1.2
1962–1976                                 1.1(a), 1.4(d)                                                    1.2
1969–1976                                 1.2(a), 1.0(b), 1.6(d), 0.9(c)                                    1.2
1977–1984                                 1.2(a), 1.0(b), 1.0(d), 1.0(c)                                    1.0

Source: Zarnowitz (1986, Table 1, p. 23). The forecasts are those of (a) the Council of Economic Advisers,
(b) ASA&NBER Surveys, (c) Wharton Newsletter, University of Pennsylvania, (d) University of Michigan, and
(e) an average of forecasts from the following sources: Fortune Magazine, Harris Bank, IBM, NICB, National
Securities and Research Corp., University of Missouri, Prudential Insurance Co., and University of California at Los
Angeles.
698     ARNOLD ZELLNER AND BIN CHEN

5. SUMMARY AND CONCLUSIONS
In the present research, we found that several disaggregated MMM forecasting
equations performed the best in our forecasting experiments. Given the theo-
retical appeal of the Marshallian sector models, it is indeed satisfying that they
yielded forecasts of the growth rates of aggregate real GDP, 1980–1997, that were
quite a bit better than those yielded by several aggregate benchmark models and
competitive with other forecasting models and techniques. Shrinkage techniques
and use of currency as the money variable in our models led to improved forecasts.
However, the performance of various of our sector models, particularly those for
the agricultural and mining sectors, has to be improved. In addition, factor market
models for labor, capital, money, and bonds, as well as other equations, are in the
process of being formulated to complete our MMM.
   Bayesian and certain non-Bayesian point forecasts performed about equally well
for our disaggregated MMM models. However, the Bayesian approach provides
exact finite sample posterior densities for parameters and predictive densities.
The latter are very useful for forecasting turning points and making probabilistic
statements about various future outcomes. The “direct” Monte Carlo numerical
procedure for computing finite sample Bayesian posterior densities for parameters
and predictive densities for simultaneous-equation models appears convenient and
useful.
   We recognize that writing a single structural equation in restricted reduced form
and allowing for error-term effects in the equation, along with other unrestricted
reduced-form equations, yields a nonlinear SUR system with an important restric-
tion on the error-term covariance matrix. This form for the system is very useful
in terms of understanding it, analyzing it, and computing posterior and predictive
densities.
   Although much can be said on the topic of data improvement, here we remark
only that better data on the numbers of firms and plants in operation within sectors,
sectoral stock price and wage rate indices, weather variables, and quality corrected
output price data would be very useful and may lead to improved forecasts. Futher,
having monthly or quarterly data for individual sectors would be useful in dealing
with temporal aggregation problems. However, seasonality must be treated care-
fully. Mechanical seasonal adjustment procedures may not be the best alternative.
Improvement of preliminary estimates of variables is another important issue in
on-line forecasting. Preliminary estimates of variables that are contaminated with
large errors obviously can lead to poor forecasts.
   Last, with better data for sectors of a number of economies and reasonably
formulated MMMs, past work on use of Bayesian shrinkage forecasting and com-
bining techniques can be extended to produce improved point and turning-point
forecasts for many countries.
                                          BAYESIAN MODELING OF ECONOMIES                            699

REFERENCES
Adelman, I. & F. Adelman (1959) The dynamic properties of the Klein–Goldberger model. Economet-
  rica 27, 569–625.
Belongia, M. & M. Garfinkel (eds.) (1992) The Business Cycle: Theories and Evidence. Proceedings
  of the 16th Annual Economic Policy Conference of the Federal Reserve Bank of St. Louis. Boston:
  Kluwer Academic.
Cooper, R. (1972) The predictive performance of quarterly econometric models of the United States.
  In B. Hickman (ed.), Econometric Models of Cyclical Behavior, vol. 2, pp. 813–936. New York:
  Columbia University Press.
Currie, J. (1996) The Geographic Extent of the Market: Theory and Application to the U.S. Petroleum
  Markets. Ph.D. Dissertation. University of Chicago.
de Alba, E. & A. Zellner (1991) Aggregation, Disaggregation, Predictive Precision and Modeling.
  Manuscript, H.G.B. Alexander Research Foundation, University of Chicago.
Espasa, A. (1994) Comment on Zellner (1994). Journal of Forecasting 13, 234–235.
Espasa, A. and Matea, M.L. (1990) Underlying Inflation in the Spanish Economy: Estimation and
  Methodology. Bank of Spain working paper.
Fair, R.C. (1992) How might the debate be resolved. In M. Belongia & M. Garfinkel (eds.), The Business
  Cycle: Theories and Evidence, Proceedings of the 16th Annual Economic Policy Conference of the
  Federal Reserve Bank of St. Louis, pp. 133–147. Boston: Kluwer Academic.
Gao, C. & K. Lahiri (1999) A Comparison of Some Recent Bayesian and Non-Bayesian Procedures for
  Limited Information Simultaneous Equations Models. Paper presented at the American Statistical
  Association’s meeting, Baltimore, Maryland.
Garcia-Ferrer, A., R. Highfield, F. Palm, & A. Zellner (1987) Macroeconomic forecasting using pooled
  international data. Journal of Business and Economic Statistics 5, 55–67.
Hong, C. (1989) Forecasting Real Output Growth Rates and Cyclical Properties of Models: A Bayesian
  Approach. Ph.D. Dissertation, University of Chicago.
Judge, G., W. Griffiths, R. Hill, H. Lütkepohl, & T. Lee (1987) The Theory and Practice of Econometrics.
  New York: Wiley.
Kling, J. (1987) Predicting the turning points of business and economic time series. Journal of Business
  60, 201–238.
Litterman, R. (1986) Forecasting with Bayesian vector autoregressions: Five years of experience.
  Journal of Business and Economic Statistics 4, 25–38.
McNees, S. (1986) Forecasting accuracy of alternative techniques: A comparison of U.S. macroeco-
  nomic forecasts. Journal of Business and Economic Statistics 4, 5–23.
Min, C. (1992) Economic Analysis and Forecasting of International Growth Rates Using Bayesian
  Techniques. Ph.D. Dissertation, University of Chicago.
Min, C. & A. Zellner (1993) Bayesian and non-Bayesian methods for combining models and forecasts
  with applications to forecasting international growth rates. Journal of Econometrics 56, 89–118.
Nelson, C. & C. Plosser (1982) Trends and random walks in macroeconomic time series. Journal of
  Monetary Economics 10, 139–162.
Orcutt, G., M. Greenberger, J. Korbel, & A. Rivlin (1961) Microanalysis of Socioeconomic Systems.
  New York: Harper.
Pagan, A. (1979) Some Consequences of Viewing LIML as an Iterated Aitken Estimator. Working
  paper 18, Australian National University.
Palm, F. (1976) Testing the dynamic specification of an econometric model with an application to
  Belgian data. European Economic Review 8, 269–289.
Palm, F. (1977) On univariate time series methods and simultaneous equation econometric models.
  Journal of Econometrics 5, 379–388.
Palm, F. (1983) Structural econometric modeling and time series analysis: An integrated approach. In
  A. Zellner (ed.), Applied Time Series Analysis of Economic Data, pp. 199–233. Washington, DC:
  Bureau of the Census, U.S. Department of Commerce.
700        ARNOLD ZELLNER AND BIN CHEN

Park, S. (1982) Some sampling properties of minimum expected loss (MELO) estimators of structural
  coefficients. Journal of Econometrics 18, 295–311.
Tsurumi, H. (1990) Comparing Bayesian and non-Bayesian limited information estimators. In S.
  Geisser, S. Hodges, J. Press, & A. Zellner (eds.), Bayesian and Likelihood Methods in Statistics and
  Econometrics: Essays in Honor of George A. Barnard, pp. 179–202. Amsterdam: North-Holland.
Veloce, W. & A. Zellner (1985) Entry and empirical demand and supply analysis for competitive
  industries. Journal of Econometrics 30, 459–471.
Wecker, W.E. (1979) Predicting the turning points of business and economic time series. Journal of
  Business 52, 35–50.
Zarnowitz, V. (1986) The record and improvability of economic forecasting. Economic Forecasts 3,
  22–31.
Zellner, A. (1979) Statistical analysis of econometric models. Journal of the American Statistical
  Association 74, 628–651.
Zellner, A. (1986) Further results on Bayesian minimum expected loss (MELO) estimates and posterior
  distributions for structural coefficients. In D. Slottje (ed.), Advances in Econometrics, vol. 5, pp. 171–
  182. Greenwich, CT: JAI Press.
Zellner, A. (1992) Comment on Ray C. Fair’s thoughts on “How Might the Debate Be Resolved?” In
  M. Belongia & M. Garfinkel (eds.), The Business Cycle: Theories and Evidence, Proceedings of the
  16th Annual Economic Policy Conference of the Federal Reserve Bank of St. Louis, pp. 148–157.
  Boston: Kluwer Academic.
Zellner, A. (1994) Time series analysis, forecasting and econometric modeling: The structural econo-
  metric modeling, time series analysis approach. Journal of Forecasting 13, 215–233.
Zellner, A. (1997a) Bayesian Analysis in Econometrics and Statistics: The Zellner View and Papers.
  Cheltenham: Edward Elgar.
Zellner, A. (1997b) The Bayesian Method of Moments (BMOM): Theory and applications. In T. Fomby
  & R. Hill (eds.), Advances in Econometrics, vol. 12, pp. 85–105. Greenwich, CT: JAI Press.
Zellner, A. (1998) The finite sample properties of simultaneous equations’ estimates and estimators:
  Bayesian and non-Bayesian approaches. L. Klein (ed.), Annals Issue of Journal of Econometrics 83,
  185–212.
Zellner, A. (1999) Bayesian and Non-Bayesian Approaches to Scientific Modeling and Inference in
  Economics and Econometrics. Paper presented at the Ajou University Research Conference in honor
  of Tong Hun Lee, South Korea. Published in Korea Journal of Money and Finance 5, 11–56.
Zellner, A. & C. Hong (1989) Forecasting international growth rates using Bayesian shrinkage and
  other procedures. Journal of Econometrics 40, 183–202.
Zellner, A. & C. Min (1999) Forecasting turning points in countries’ growth rates: A response to Milton
  Friedman. Journal of Econometrics 40, 183–202.
Zellner, A. & F. Palm (1974) Time series analysis and simultaneous equation econometric models.
  Journal of Econometrics 2, 17–54.
Zellner, A. & F. Palm (1975) Time series analysis of structural monetary models of the U.S. economy.
  Sankya, Series C, 37 12–56.
Zellner, A. & S. Peck (1973) Simulation experiments with a quarterly macroeconometric model of
  the U.S. economy. In Power, A. & R. Williams (eds.), Econometric Studies of Macro and Monetary
  Relations, pp. 149–168. Amsterdam: North-Holland; reprinted in A. Zellner (1987) Basic Issues in
  Econometrics. Chicago: University of Chicago Press.
Zellner, A., J. Tobias, & H. Ryu (1999) Bayesian method of moments analysis of time series models
  with an application to forecasting turning points in output growth rates. Estadistica, pp. 3–63, 49–51,
  152–157, with discussion.
Zellner, A., C. Min, D. Dallaire & J. Currie (1994) Bayesian Analysis of Simultaneous Equation, Asset
  Pricing and Related Models Using Markov Chain Monte Carlo Techniques. Manuscript, H.G.B.
  Alexander Research Foundation, University of Chicago.



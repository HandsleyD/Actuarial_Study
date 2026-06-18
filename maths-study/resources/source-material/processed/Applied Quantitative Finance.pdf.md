---
normalized_id: shared-pdf-reference-applied-quantitative-finance
exam_code: SHARED
material_scope: applied quantitative finance.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Applied Quantitative Finance.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-applied-quantitative-finance

Applied Quantitative Finance




                 Wolfgang Härdle
                 Torsten Kleinow
                  Gerhard Stahl
                   In cooperation with
   Gökhan Aydınlı, Oliver Jim Blaskowitz, Song Xi Chen,
     Matthias Fengler, Jürgen Franke, Christoph Frisch,
     Helmut Herwartz, Harriet Holzberger, Steffi Höse,
Stefan Huschens, Kim Huynh, Stefan R. Jaschke, Yuze Jiang
     Pierre Kervella, Rüdiger Kiesel, Germar Knöchlein,
        Sven Knoth, Jens Lüssem, Danilo Mercurio,
         Marlene Müller, Jörn Rank, Peter Schmidt,
     Rainer Schulz, Jürgen Schumacher, Thomas Siegl,
          Robert Wania, Axel Werwatz, Jun Zheng

                       June 20, 2002
Contents


Preface                                                                            xv

Contributors                                                                       xix

Frequently Used Notation                                                           xxi



I    Value at Risk                                                                  1

1 Approximating Value at Risk in Conditional Gaussian Models                        3
Stefan R. Jaschke and Yuze Jiang
    1.1   Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    3
          1.1.1   The Practical Need . . . . . . . . . . . . . . . . . . . . .      3
          1.1.2   Statistical Modeling for VaR . . . . . . . . . . . . . . .        4
          1.1.3   VaR Approximations . . . . . . . . . . . . . . . . . . . .        6
          1.1.4   Pros and Cons of Delta-Gamma Approximations . . . .               7
    1.2   General Properties of Delta-Gamma-Normal Models . . . . . .               8
    1.3   Cornish-Fisher Approximations . . . . . . . . . . . . . . . . . .        12
          1.3.1   Derivation . . . . . . . . . . . . . . . . . . . . . . . . . .   12
          1.3.2   Properties . . . . . . . . . . . . . . . . . . . . . . . . . .   15
    1.4   Fourier Inversion . . . . . . . . . . . . . . . . . . . . . . . . . .    16
iv                                                                            Contents


           1.4.1   Error Analysis . . . . . . . . . . . . . . . . . . . . . . .      16
           1.4.2   Tail Behavior . . . . . . . . . . . . . . . . . . . . . . . .     20
           1.4.3   Inversion of the cdf minus the Gaussian Approximation             21
     1.5   Variance Reduction Techniques in Monte-Carlo Simulation . . .             24
           1.5.1   Monte-Carlo Sampling Method . . . . . . . . . . . . . .           24
           1.5.2   Partial Monte-Carlo with Importance Sampling . . . . .            28
           1.5.3   XploRe Examples . . . . . . . . . . . . . . . . . . . . .         30

2 Applications of Copulas for the Calculation of Value-at-Risk                       35
Jörn Rank and Thomas Siegl
     2.1   Copulas . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     36
           2.1.1   Definition . . . . . . . . . . . . . . . . . . . . . . . . . .    36
           2.1.2   Sklar’s Theorem . . . . . . . . . . . . . . . . . . . . . .       37
           2.1.3   Examples of Copulas . . . . . . . . . . . . . . . . . . . .       37
           2.1.4   Further Important Properties of Copulas         . . . . . . . .   39
     2.2   Computing Value-at-Risk with Copulas . . . . . . . . . . . . .            40
           2.2.1   Selecting the Marginal Distributions . . . . . . . . . . .        40
           2.2.2   Selecting a Copula . . . . . . . . . . . . . . . . . . . . .      41
           2.2.3   Estimating the Copula Parameters . . . . . . . . . . . .          41
           2.2.4   Generating Scenarios - Monte Carlo Value-at-Risk . . .            43
     2.3   Examples . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .      45
     2.4   Results . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   47

3 Quantification of Spread Risk by Means of Historical Simulation                    51
Christoph Frisch and Germar Knöchlein
     3.1   Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    51
     3.2   Risk Categories – a Definition of Terms . . . . . . . . . . . . .         51
Contents                                                                          v


   3.3   Descriptive Statistics of Yield Spread Time Series . . . . . . . .      53
         3.3.1   Data Analysis with XploRe . . . . . . . . . . . . . . . .       54
         3.3.2   Discussion of Results . . . . . . . . . . . . . . . . . . . .   58
   3.4   Historical Simulation and Value at Risk . . . . . . . . . . . . .       63
         3.4.1   Risk Factor: Full Yield . . . . . . . . . . . . . . . . . . .   64
         3.4.2   Risk Factor: Benchmark . . . . . . . . . . . . . . . . . .      67
         3.4.3   Risk Factor: Spread over Benchmark Yield . . . . . . .          68
         3.4.4   Conservative Approach . . . . . . . . . . . . . . . . . .       69
         3.4.5   Simultaneous Simulation . . . . . . . . . . . . . . . . . .     69
   3.5   Mark-to-Model Backtesting . . . . . . . . . . . . . . . . . . . .       70
   3.6   VaR Estimation and Backtesting with XploRe . . . . . . . . . .          70
   3.7   P-P Plots . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   73
   3.8   Q-Q Plots . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   74
   3.9   Discussion of Simulation Results . . . . . . . . . . . . . . . . .      75
         3.9.1   Risk Factor: Full Yield . . . . . . . . . . . . . . . . . . .   77
         3.9.2   Risk Factor: Benchmark . . . . . . . . . . . . . . . . . .      78
         3.9.3   Risk Factor: Spread over Benchmark Yield . . . . . . .          78
         3.9.4   Conservative Approach . . . . . . . . . . . . . . . . . .       79
         3.9.5   Simultaneous Simulation . . . . . . . . . . . . . . . . . .     80
   3.10 XploRe for Internal Risk Models . . . . . . . . . . . . . . . . .        81



II Credit Risk                                                                   85

4 Rating Migrations                                                              87
Steffi Höse, Stefan Huschens and Robert Wania
   4.1   Rating Transition Probabilities . . . . . . . . . . . . . . . . . .     88
         4.1.1   From Credit Events to Migration Counts . . . . . . . .          88
vi                                                                            Contents


           4.1.2   Estimating Rating Transition Probabilities . . . . . . .           89
           4.1.3   Dependent Migrations . . . . . . . . . . . . . . . . . . .         90
           4.1.4   Computation and Quantlets . . . . . . . . . . . . . . . .          93
     4.2   Analyzing the Time-Stability of Transition Probabilities . . . .           94
           4.2.1   Aggregation over Periods . . . . . . . . . . . . . . . . .         94
           4.2.2   Are the Transition Probabilities Stationary? . . . . . . .         95
           4.2.3   Computation and Quantlets . . . . . . . . . . . . . . . .          97
           4.2.4   Examples with Graphical Presentation . . . . . . . . . .           98
     4.3   Multi-Period Transitions . . . . . . . . . . . . . . . . . . . . . .      101
           4.3.1   Time Homogeneous Markov Chain . . . . . . . . . . . .             101
           4.3.2   Bootstrapping Markov Chains         . . . . . . . . . . . . . .   102
           4.3.3   Computation and Quantlets . . . . . . . . . . . . . . . .         104
           4.3.4   Rating Transitions of German Bank Borrowers . . . . .             106
           4.3.5   Portfolio Migration . . . . . . . . . . . . . . . . . . . . .     106

5 Sensitivity analysis of credit portfolio models                                    111
Rüdiger Kiesel and Torsten Kleinow
     5.1   Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    111
     5.2   Construction of portfolio credit risk models . . . . . . . . . . .        113
     5.3   Dependence modelling . . . . . . . . . . . . . . . . . . . . . . .        114
           5.3.1   Factor modelling . . . . . . . . . . . . . . . . . . . . . .      115
           5.3.2   Copula modelling . . . . . . . . . . . . . . . . . . . . . .      117
     5.4   Simulations . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     119
           5.4.1   Random sample generation . . . . . . . . . . . . . . . .          119
           5.4.2   Portfolio results . . . . . . . . . . . . . . . . . . . . . . .   120
Contents                                                                            vii


III Implied Volatility                                                             125

6 The Analysis of Implied Volatilities                                             127
Matthias R. Fengler, Wolfgang Härdle and Peter Schmidt
   6.1   Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    128
   6.2   The Implied Volatility Surface . . . . . . . . . . . . . . . . . . .      129
         6.2.1   Calculating the Implied Volatility . . . . . . . . . . . . .      129
         6.2.2   Surface smoothing . . . . . . . . . . . . . . . . . . . . .       131
   6.3   Dynamic Analysis . . . . . . . . . . . . . . . . . . . . . . . . .        134
         6.3.1   Data description . . . . . . . . . . . . . . . . . . . . . .      134
         6.3.2   PCA of ATM Implied Volatilities . . . . . . . . . . . . .         136
         6.3.3   Common PCA of the Implied Volatility Surface . . . . .            137

7 How Precise Are Price Distributions Predicted by IBT?                            145
Wolfgang Härdle and Jun Zheng
   7.1   Implied Binomial Trees      . . . . . . . . . . . . . . . . . . . . . .   146
         7.1.1   The Derman and Kani (D & K) algorithm . . . . . . . .             147
         7.1.2   Compensation . . . . . . . . . . . . . . . . . . . . . . .        151
         7.1.3   Barle and Cakici (B & C) algorithm . . . . . . . . . . .          153
   7.2   A Simulation and a Comparison of the SPDs . . . . . . . . . .             154
         7.2.1   Simulation using Derman and Kani algorithm . . . . . .            154
         7.2.2   Simulation using Barle and Cakici algorithm . . . . . .           156
         7.2.3   Comparison with Monte-Carlo Simulation . . . . . . . .            158
   7.3   Example – Analysis of DAX data . . . . . . . . . . . . . . . . .          162

8 Estimating State-Price Densities with Nonparametric Regression                   171
Kim Huynh, Pierre Kervella and Jun Zheng
   8.1   Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    171
viii                                                                            Contents


       8.2   Extracting the SPD using Call-Options         . . . . . . . . . . . . .   173
             8.2.1   Black-Scholes SPD . . . . . . . . . . . . . . . . . . . . .       175
       8.3   Semiparametric estimation of the SPD . . . . . . . . . . . . . .          176
             8.3.1   Estimating the call pricing function . . . . . . . . . . .        176
             8.3.2   Further dimension reduction . . . . . . . . . . . . . . .         177
             8.3.3   Local Polynomial Estimation . . . . . . . . . . . . . . .         181
       8.4   An Example: Application to DAX data . . . . . . . . . . . . .             183
             8.4.1   Data . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    183
             8.4.2   SPD, delta and gamma . . . . . . . . . . . . . . . . . .          185
             8.4.3   Bootstrap confidence bands . . . . . . . . . . . . . . . .        187
             8.4.4   Comparison to Implied Binomial Trees . . . . . . . . . .          190

9 Trading on Deviations of Implied and Historical Densities                            197
Oliver Jim Blaskowitz and Peter Schmidt
       9.1   Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    197
       9.2   Estimation of the Option Implied SPD . . . . . . . . . . . . . .          198
             9.2.1   Application to DAX Data . . . . . . . . . . . . . . . . .         198
       9.3   Estimation of the Historical SPD . . . . . . . . . . . . . . . . .        200
             9.3.1   The Estimation Method . . . . . . . . . . . . . . . . . .         201
             9.3.2   Application to DAX Data . . . . . . . . . . . . . . . . .         202
       9.4   Comparison of Implied and Historical SPD . . . . . . . . . . .            205
       9.5   Skewness Trades . . . . . . . . . . . . . . . . . . . . . . . . . .       207
             9.5.1   Performance     . . . . . . . . . . . . . . . . . . . . . . . .   210
       9.6   Kurtosis Trades . . . . . . . . . . . . . . . . . . . . . . . . . . .     212
             9.6.1   Performance     . . . . . . . . . . . . . . . . . . . . . . . .   214
       9.7   A Word of Caution . . . . . . . . . . . . . . . . . . . . . . . . .       216
Contents                                                                          ix


IV Econometrics                                                                  219

10 Multivariate Volatility Models                                                221
Matthias R. Fengler and Helmut Herwartz
   10.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   221
        10.1.1 Model specifications . . . . . . . . . . . . . . . . . . . .      222
        10.1.2 Estimation of the BEKK-model . . . . . . . . . . . . . .          224
   10.2 An empirical illustration . . . . . . . . . . . . . . . . . . . . . .    225
        10.2.1 Data description . . . . . . . . . . . . . . . . . . . . . .      225
        10.2.2 Estimating bivariate GARCH . . . . . . . . . . . . . . .          226
        10.2.3 Estimating the (co)variance processes . . . . . . . . . .         229
   10.3 Forecasting exchange rate densities . . . . . . . . . . . . . . . .      232

11 Statistical Process Control                                                   237
Sven Knoth
   11.1 Control Charts . . . . . . . . . . . . . . . . . . . . . . . . . . .     238
   11.2 Chart characteristics . . . . . . . . . . . . . . . . . . . . . . . .    243
        11.2.1 Average Run Length and Critical Values . . . . . . . . .          247
        11.2.2 Average Delay . . . . . . . . . . . . . . . . . . . . . . .       248
        11.2.3 Probability Mass and Cumulative Distribution Function             248
   11.3 Comparison with existing methods . . . . . . . . . . . . . . . .         251
        11.3.1 Two-sided EWMA and Lucas/Saccucci . . . . . . . . .               251
        11.3.2 Two-sided CUSUM and Crosier . . . . . . . . . . . . . .           251
   11.4 Real data example – monitoring CAPM . . . . . . . . . . . . .            253

12 An Empirical Likelihood Goodness-of-Fit Test for Diffusions                   259
Song Xi Chen, Wolfgang Härdle and Torsten Kleinow
   12.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   259
x                                                                          Contents


    12.2 Discrete Time Approximation of a Diffusion . . . . . . . . . . .         260
    12.3 Hypothesis Testing . . . . . . . . . . . . . . . . . . . . . . . . .     261
    12.4 Kernel Estimator . . . . . . . . . . . . . . . . . . . . . . . . . .     263
    12.5 The Empirical Likelihood concept . . . . . . . . . . . . . . . . .       264
         12.5.1 Introduction into Empirical Likelihood . . . . . . . . . .        264
         12.5.2 Empirical Likelihood for Time Series Data . . . . . . . .         265
    12.6 Goodness-of-Fit Statistic . . . . . . . . . . . . . . . . . . . . . .    268
    12.7 Goodness-of-Fit test . . . . . . . . . . . . . . . . . . . . . . . .     272
    12.8 Application . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    274
    12.9 Simulation Study and Illustration . . . . . . . . . . . . . . . . .      276
    12.10Appendix . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     279

13 A simple state space model of house prices                                     283
Rainer Schulz and Axel Werwatz
    13.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   283
    13.2 A Statistical Model of House Prices . . . . . . . . . . . . . . . .      284
         13.2.1 The Price Function . . . . . . . . . . . . . . . . . . . . .      284
         13.2.2 State Space Form . . . . . . . . . . . . . . . . . . . . . .      285
    13.3 Estimation with Kalman Filter Techniques         . . . . . . . . . . .   286
         13.3.1 Kalman Filtering given all parameters . . . . . . . . . .         286
         13.3.2 Filtering and state smoothing . . . . . . . . . . . . . . .       287
         13.3.3 Maximum likelihood estimation of the parameters . . .             288
         13.3.4 Diagnostic checking . . . . . . . . . . . . . . . . . . . .       289
    13.4 The Data . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     289
    13.5 Estimating and filtering in XploRe . . . . . . . . . . . . . . . .       293
         13.5.1 Overview . . . . . . . . . . . . . . . . . . . . . . . . . .      293
         13.5.2 Setting the system matrices . . . . . . . . . . . . . . . .       293
Contents                                                                          xi


        13.5.3 Kalman filter and maximized log likelihood . . . . . . .          295
        13.5.4 Diagnostic checking with standardized residuals . . . . .         298
        13.5.5 Calculating the Kalman smoother . . . . . . . . . . . .           300
   13.6 Appendix . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     302
        13.6.1 Procedure equivalence . . . . . . . . . . . . . . . . . . .       302
        13.6.2 Smoothed constant state variables . . . . . . . . . . . .         304

14 Long Memory Effects Trading Strategy                                          309
Oliver Jim Blaskowitz and Peter Schmidt
   14.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   309
   14.2 Hurst and Rescaled Range Analysis . . . . . . . . . . . . . . . .        310
   14.3 Stationary Long Memory Processes . . . . . . . . . . . . . . . .         312
        14.3.1 Fractional Brownian Motion and Noise . . . . . . . . . .          313
   14.4 Data Analysis . . . . . . . . . . . . . . . . . . . . . . . . . . . .    315
   14.5 Trading the Negative Persistence . . . . . . . . . . . . . . . . .       318

15 Locally time homogeneous time series modeling                                 323
Danilo Mercurio
   15.1 Intervals of homogeneity . . . . . . . . . . . . . . . . . . . . . .     323
        15.1.1 The adaptive estimator . . . . . . . . . . . . . . . . . .        326
        15.1.2 A small simulation study . . . . . . . . . . . . . . . . .        327
   15.2 Estimating the coefficients of an exchange rate basket . . . . .         329
        15.2.1 The Thai Baht basket . . . . . . . . . . . . . . . . . . .        331
        15.2.2 Estimation results . . . . . . . . . . . . . . . . . . . . .      335
   15.3 Estimating the volatility of financial time series . . . . . . . . .     338
        15.3.1 The standard approach . . . . . . . . . . . . . . . . . .         339
        15.3.2 The locally time homogeneous approach . . . . . . . . .           340
xii                                                                          Contents


           15.3.3 Modeling volatility via power transformation . . . . . .          340
           15.3.4 Adaptive estimation under local time-homogeneity . . .            341
      15.4 Technical appendix . . . . . . . . . . . . . . . . . . . . . . . . .     344

16 Simulation based Option Pricing                                                  349
Jens Lüssem and Jürgen Schumacher
      16.1 Simulation techniques for option pricing . . . . . . . . . . . . .       349
           16.1.1 Introduction to simulation techniques . . . . . . . . . .         349
           16.1.2 Pricing path independent European options on one un-
                  derlying . . . . . . . . . . . . . . . . . . . . . . . . . . .    350
           16.1.3 Pricing path dependent European options on one under-
                  lying . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   354
           16.1.4 Pricing options on multiple underlyings . . . . . . . . .         355
      16.2 Quasi Monte Carlo (QMC) techniques for option pricing . . . .            356
           16.2.1 Introduction to Quasi Monte Carlo techniques . . . . .            356
           16.2.2 Error bounds . . . . . . . . . . . . . . . . . . . . . . . .      356
           16.2.3 Construction of the Halton sequence . . . . . . . . . . .         357
           16.2.4 Experimental results . . . . . . . . . . . . . . . . . . . .      359
      16.3 Pricing options with simulation techniques - a guideline . . . .         361
           16.3.1 Construction of the payoff function . . . . . . . . . . . .       362
           16.3.2 Integration of the payoff function in the simulation frame-
                  work . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    362
           16.3.3 Restrictions for the payoff functions . . . . . . . . . . .       365

17 Nonparametric Estimators of GARCH Processes                                      367
Jürgen Franke, Harriet Holzberger and Marlene Müller
      17.1 Deconvolution density and regression estimates . . . . . . . . .         369
      17.2 Nonparametric ARMA Estimates . . . . . . . . . . . . . . . . .           370
Contents                                                                         xiii


   17.3 Nonparametric GARCH Estimates . . . . . . . . . . . . . . . .            379

18 Net Based Spreadsheets in Quantitative Finance                                385
Gökhan Aydınlı
   18.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   385
   18.2 Client/Server based Statistical Computing . . . . . . . . . . . .        386
   18.3 Why Spreadsheets? . . . . . . . . . . . . . . . . . . . . . . . . .      387
   18.4 Using MD*ReX . . . . . . . . . . . . . . . . . . . . . . . . . . .       388
   18.5 Applications . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   390
        18.5.1 Value at Risk Calculations with Copulas . . . . . . . . .         391
        18.5.2 Implied Volatility Measures . . . . . . . . . . . . . . . .       393

Index                                                                            398
Preface

This book is designed for students and researchers who want to develop pro-
fessional skill in modern quantitative applications in finance. The Center for
Applied Statistics and Economics (CASE) course at Humboldt-Universität zu
Berlin that forms the basis for this book is offered to interested students who
have had some experience with probability, statistics and software applications
but have not had advanced courses in mathematical finance. Although the
course assumes only a modest background it moves quickly between different
fields of applications and in the end, the reader can expect to have theoretical
and computational tools that are deep enough and rich enough to be relied on
throughout future professional careers.
The text is readable for the graduate student in financial engineering as well as
for the inexperienced newcomer to quantitative finance who wants to get a grip
on modern statistical tools in financial data analysis. The experienced reader
with a bright knowledge of mathematical finance will probably skip some sec-
tions but will hopefully enjoy the various computational tools of the presented
techniques. A graduate student might think that some of the econometric
techniques are well known. The mathematics of risk management and volatil-
ity dynamics will certainly introduce him into the rich realm of quantitative
financial data analysis.
The computer inexperienced user of this e-book is softly introduced into the
interactive book concept and will certainly enjoy the various practical exam-
ples. The e-book is designed as an interactive document: a stream of text and
information with various hints and links to additional tools and features. Our
e-book design offers also a complete PDF and HTML file with links to world
wide computing servers. The reader of this book may therefore without down-
load or purchase of software use all the presented examples and methods via
the enclosed license code number with a local XploRe Quantlet Server (XQS).
Such XQ Servers may also be installed in a department or addressed freely on
the web, click to www.xplore-stat.de and www.quantlet.com.
xvi                                                                       Preface


”Applied Quantitative Finance” consists of four main parts: Value at Risk,
Credit Risk, Implied Volatility and Econometrics. In the first part Jaschke and
Jiang treat the Approximation of the Value at Risk in conditional Gaussian
Models and Rank and Siegl show how the VaR can be calculated using copulas.
The second part starts with an analysis of rating migration probabilities by
Höse, Huschens and Wania. Frisch and Knöchlein quantify the risk of yield
spread changes via historical simulations. This part is completed by an anal-
ysis of the sensitivity of risk measures to changes in the dependency structure
between single positions of a portfolio by Kiesel and Kleinow.
The third part is devoted to the analysis of implied volatilities and their dynam-
ics. Fengler, Härdle and Schmidt start with an analysis of the implied volatility
surface and show how common PCA can be applied to model the dynamics of
the surface. In the next two chapters the authors estimate the risk neutral
state price density from observed option prices and the corresponding implied
volatilities. While Härdle and Zheng apply implied binomial trees to estimate
the SPD, the method by Huynh, Kervella and Zheng is based on a local poly-
nomial estimation of the implied volatility and its derivatives. Blaskowitz and
Schmidt use the proposed methods to develop trading strategies based on the
comparison of the historical SPD and the one implied by option prices.
Recently developed econometric methods are presented in the last part of the
book. Fengler and Herwartz introduce a multivariate volatility model and ap-
ply it to exchange rates. Methods used to monitor sequentially observed data
are treated by Knoth. Chen, Härdle and Kleinow apply the empirical likeli-
hood concept to develop a test about a parametric diffusion model. Schulz
and Werwatz estimate a state space model of Berlin house prices that can be
used to construct a time series of the price of a standard house. The influ-
ence of long memory effects on financial time series is analyzed by Blaskowitz
and Schmidt. Mercurio propose a methodology to identify time intervals of
homogeneity for time series. The pricing of exotic options via a simulation
approach is introduced by Lüssem and Schumacher The chapter by Franke,
Holzberger and Müller is devoted to a nonparametric estimation approach of
GARCH models. The book closes with a chapter of Aydınlı, who introduces
a technology to connect standard software with the XploRe server in order to
have access to quantlets developed in this book.
We gratefully acknowledge the support of Deutsche Forschungsgemeinschaft,
SFB 373 Quantifikation und Simulation Ökonomischer Prozesse. A book of this
kind would not have been possible without the help of many friends, colleagues
and students. For the technical production of the e-book platform we would
Preface                                                                  xvii


like to thank Jörg Feuerhake, Zdeněk Hlávka, Sigbert Klinke, Heiko Lehmann
and Rodrigo Witzel.
W. Härdle, T. Kleinow and G. Stahl
Berlin and Bonn, June 2002
Contributors

Gökhan Aydınlı Humboldt-Universität zu Berlin, CASE, Center for Applied
     Statistics and Economics
Oliver Jim Blaskowitz Humboldt-Universität zu Berlin, CASE, Center for Ap-
     plied Statistics and Economics
Song Xi Chen The National University of Singapore, Dept. of Statistics and
     Applied Probability
Matthias R. Fengler Humboldt-Universität zu Berlin, CASE, Center for Ap-
    plied Statistics and Economics
Jürgen Franke Universität Kaiserslautern
Christoph Frisch Landesbank Rheinland-Pfalz, Risikoüberwachung
Wolfgang Härdle Humboldt-Universität zu Berlin, CASE, Center for Applied
     Statistics and Economics
Helmut Herwartz Humboldt-Universität zu Berlin, CASE, Center for Applied
    Statistics and Economics
Harriet Holzberger IKB Deutsche Industriebank AG
Steffi Höse Technische Universität Dresden

Stefan Huschens Technische Universität Dresden
Kim Huynh Queen’s Economics Department, Queen’s University
Stefan R. Jaschke Weierstrass Institute for Applied Analysis and Stochastics
Yuze Jiang Queen’s School of Business, Queen’s University
xx                                                              Contributors


Pierre Kervella Humboldt-Universität zu Berlin, CASE, Center for Applied
      Statistics and Economics
Rüdiger Kiesel London School of Economics, Department of Statistics
Torsten Kleinow Humboldt-Universität zu Berlin, CASE, Center for Applied
     Statistics and Economics
Germar Knöchlein Landesbank Rheinland-Pfalz, Risikoüberwachung
Sven Knoth European University Viadrina Frankfurt (Oder)
Jens Lüssem Landesbank Kiel
Danilo Mercurio Humboldt-Universität zu Berlin, CASE, Center for Applied
     Statistics and Economics
Marlene Müller Humboldt-Universität zu Berlin, CASE, Center for Applied
     Statistics and Economics
Jörn Rank Andersen, Financial and Commodity Risk Consulting
Peter Schmidt Humboldt-Universität zu Berlin, CASE, Center for Applied
     Statistics and Economics
Rainer Schulz Humboldt-Universität zu Berlin, CASE, Center for Applied Statis-
     tics and Economics
Jürgen Schumacher University of Bonn, Department of Computer Science
Thomas Siegl BHF Bank
Robert Wania Technische Universität Dresden
Axel Werwatz Humboldt-Universität zu Berlin, CASE, Center for Applied
     Statistics and Economics
Jun Zheng Department of Probability and Statistics, School of Mathematical
     Sciences, Peking University, 100871, Beijing, P.R. China
Frequently Used Notation

 def
x = . . . x is defined as ...
R real numbers
  def
R = R ∪ {∞, ∞}
A> transpose of matrix A
X ∼ D the random variable X has distribution D
E[X] expected value of random variable X
Var(X) variance of random variable X
Std(X) standard deviation of random variable X
Cov(X, Y ) covariance of two random variables X and Y
N(µ, Σ) normal distribution with expectation µ and covariance matrix Σ, a
similar notation is used if Σ is the correlation matrix
cdf denotes the cumulative distribution function
pdf denotes the probability density function
P[A] or P(A) probability of a set A
1 indicator function
             def
(F ◦ G)(x) = F {G(x)} for functions F and G
αn = O(βn ) iff αβnn −→ constant, as n −→ ∞
αn = O(βn ) iff αβnn −→ 0, as n −→ ∞
Ft is the information set generated by all information available at time t

Let An and Bn be sequences of random variables.
An = Op (Bn ) iff ∀ε > 0 ∃M, ∃N such that P[|An /Bn | > M ] < ε, ∀n > N .
An = Op (Bn ) iff ∀ε > 0 : limn→∞ P[|An /Bn | > ε] = 0.
    Part I

Value at Risk
1 Approximating Value at Risk in
  Conditional Gaussian Models
                                               Stefan R. Jaschke and Yuze Jiang




1.1     Introduction

1.1.1    The Practical Need

Financial institutions are facing the important task of estimating and control-
ling their exposure to market risk, which is caused by changes in prices of
equities, commodities, exchange rates and interest rates. A new chapter of risk
management was opened when the Basel Committee on Banking Supervision
proposed that banks may use internal models for estimating their market risk
(Basel Committee on Banking Supervision, 1995). Its implementation into na-
tional laws around 1998 allowed banks to not only compete in the innovation
of financial products but also in the innovation of risk management methodol-
ogy. Measurement of market risk has focused on a metric called Value at Risk
(VaR). VaR quantifies the maximal amount that may be lost in a portfolio over
a given period of time, at a certain confidence level. Statistically speaking, the
VaR of a portfolio is the quantile of the distribution of that portfolio’s loss over
a specified time interval, at a given probability level.

The implementation of a firm-wide risk management system is a tremendous
job. The biggest challenge for many institutions is to implement interfaces to
all the different front-office systems, back-office systems and databases (poten-
tially running on different operating systems and being distributed all over the
world), in order to get the portfolio positions and historical market data into a
centralized risk management framework. This is a software engineering prob-
lem. The second challenge is to use the computed VaR numbers to actually
4             1   Approximating Value at Risk in Conditional Gaussian Models


control risk and to build an atmosphere where the risk management system
is accepted by all participants. This is an organizational and social problem.
The methodological question how risk should be modeled and approximated
is – in terms of the cost of implementation – a smaller one. In terms of im-
portance, however, it is a crucial question. A non-adequate VaR-methodology
can jeopardize all the other efforts to build a risk management system. See
(Jorion, 2000) for more on the general aspects of risk management in financial
institutions.


1.1.2      Statistical Modeling for VaR

VaR methodologies can be classified in terms of statistical modeling decisions
and approximation decisions. Once the statistical model and the estimation
procedure is specified, it is a purely numerical problem to compute or approx-
imate the Value at Risk. The modeling decisions are:

    1. Which risk factors to include. This mainly depends on a banks’ business
       (portfolio). But it may also depend on the availability of historical data.
       If data for a certain contract is not available or the quality is not sufficient,
       a related risk factor with better historical data may be used. For smaller
       stock portfolios it is customary to include each stock itself as a risk factor.
       For larger stock portfolios, only country or sector indexes are taken as
       the risk factors (Longerstaey, 1996). Bonds and interest rate derivatives
       are commonly assumed to depend on a fixed set of interest rates at key
       maturities. The value of options is usually assumed to depend on implied
       volatility (at certain key strikes and maturities) as well as on everything
       the underlying depends on.
    2. How to model security prices as functions of risk factors, which is usually
       called “the mapping”. If Xti denotes the log return of stock i over the
       time interval [t − 1, t], i.e., Xti = log(Sti ) − log(St−1
                                                              i
                                                                  ), then the change in
       the value of a portfolio containing one stock i is
                                                    i
                                   ∆Sti = St−1
                                           i
                                               (eXt − 1),

       where Sti denotes the price of stock i at time t. Bonds are first decomposed
       into a portfolio of zero bonds. Zero bonds are assumed to depend on
       the two key interest rates with the closest maturities. How to do the
       interpolation is actually not as trivial as it may seem, as demonstrated
1.1   Introduction                                                              5


      by Mina and Ulmer (1999). Similar issues arise in the interpolation of
      implied volatilities.
  3. What stochastic properties to assume for the dynamics of the risk factors
     Xt . The basic benchmark model for stocks is to assume that logarith-
     mic stock returns are joint normal (cross-sectionally) and independent in
     time. Similar assumptions for other risk factors are that changes in the
     logarithm of zero-bond yields, changes in log exchange rates, and changes
     in the logarithm of implied volatilities are all independent in time and
     joint normally distributed.
  4. How to estimate the model parameters from the historical data. The usual
     statistical approach is to define the model and then look for estimators
     that have certain optimality criteria. In the basic benchmark model the
     minimal-variance unbiased estimator of the covariance matrix Σ of risk
     factors Xt is the “rectangular moving average”
                                          T
                                     1 X
                            Σ̂ =             (Xt − µ)(Xt − µ)>
                                   T − 1 t=1

              def
      (with µ = E[Xt ]). An alternative route is to first specify an estimator
      and then look for a model in which that estimator has certain optimality
      properties. The exponential moving average
                                      T
                                      X −1
                     Σ̂T = (eλ − 1)          e−λ(T −t) (Xt − µ)(Xt − µ)>
                                      t=−∞

      can be interpreted as an efficient estimator of the conditional covariance
      matrix ΣT of the vector of risk factors XT , given the information up to
      time T − 1 in a very specific GARCH model.

While there is a plethora of analyses of alternative statistical models for market
risks (see Barry Schachter’s Gloriamundi web site), mainly two classes of models
for market risk have been used in practice:

  1. iid-models, i.e., the risk factors Xt are assumed to be independent in time,
     but the distribution of Xt is not necessarily Gaussian. Apart from some
     less common models involving hyperbolic distributions (Breckling, Eber-
     lein and Kokic, 2000), most approaches either estimate the distribution
6            1   Approximating Value at Risk in Conditional Gaussian Models


      of Xt completely non-parametrically and run under the name “histori-
      cal simulation”, or they estimate the tail using generalized Pareto dis-
      tributions (Embrechts, Klüppelberg and Mikosch, 1997, “extreme value
      theory”).
    2. conditional Gaussian models, i.e., the risk factors Xt are assumed to be
       joint normal, conditional on the information up to time t − 1.

Both model classes can account for unconditional “fat tails”.


1.1.3     VaR Approximations

In this paper we consider certain approximations of VaR in the conditional
Gaussian class of models. We assume that the conditional expectation of Xt ,
µt , is zero and its conditional covariance matrix Σt is estimated and given at
time t − 1. The change in the portfolio value over the time interval [t − 1, t] is
then
                                        n
                                        X
                            ∆Vt (Xt ) =    wi ∆Sti (Xt ),
                                       i=1
where the wi are the portfolio weights and ∆Sti is the function that “maps” the
risk factor vector Xt to a change in the value of the i-th security value over the
time interval [t − 1, t], given all the information at time t − 1. These functions
are usually nonlinear, even for stocks (see above). In the following, we will
drop the time index and denote by ∆V the change in the portfolio’s value over
the next time interval and by X the corresponding vector of risk factors.
The only general method to compute quantiles of the distribution of ∆V is
Monte Carlo simulation. From discussion with practitioners “full valuation
Monte Carlo” appears to be practically infeasible for portfolios with securi-
ties whose mapping functions are first, extremely costly to compute – like for
certain path-dependent options whose valuation itself relies on Monte-Carlo
simulation – and second, computed inside complex closed-source front-office
systems, which cannot be easily substituted or adapted in their accuracy/speed
trade-offs. Quadratic approximations to the portfolio’s value as a function of
the risk factors
                                            1
                        ∆V (X) ≈ ∆> X + X > ΓX,                           (1.1)
                                            2
have become the industry standard since its use in RiskMetrics (Longerstaey,
1996). (∆ and Γ are the aggregated first and second derivatives of the indi-
vidual mapping functions ∆S i w.r.t. the risk factors X. The first version of
1.1   Introduction                                                               7


RiskMetrics in 1994 considered only the first derivative of the value function,
the “delta”. Without loss of generality, we assume that the constant term in
the Taylor expansion (1.1), the “theta”, is zero.)


1.1.4    Pros and Cons of Delta-Gamma Approximations

Both assumptions of the Delta-Gamma-Normal approach – Gaussian innova-
tions and a reasonably good quadratic approximation of the value function V
– have been questioned. Simple examples of portfolios with options can be
constructed to show that quadratic approximations to the value function can
lead to very large errors in the computation of VaR (Britton-Jones and Schae-
fer, 1999). The Taylor-approximation (1.1) holds only locally and is question-
able from the outset for the purpose of modeling extreme events. Moreover,
the conditional Gaussian framework does not allow to model joint extremal
events, as described by Embrechts, McNeil and Straumann (1999). The Gaus-
sian dependence structure, the copula, assigns too small probabilities to joint
extremal events compared to some empirical observations.
Despite these valid critiques of the Delta-Gamma-Normal model, there are good
reasons for banks to implement it alongside other models. (1) The statistical
assumption of conditional Gaussian risk factors can explain a wide range of
“stylized facts” about asset returns like unconditional fat tails and autocor-
relation in realized volatility. Parsimonious multivariate conditional Gaussian
models for dimensions like 500-2000 are challenging enough to be the subject of
ongoing statistical research, Engle (2000). (2) First and second derivatives of
financial products w.r.t. underlying market variables (= deltas and gammas)
and other “sensitivities” are widely implemented in front office systems and
routinely used by traders. Derivatives w.r.t. possibly different risk factors used
by central risk management are easily computed by applying the chain rule
of differentiation. So it is tempting to stay in the framework and language of
the trading desks and express portfolio value changes in terms of deltas and
gammas. (3) For many actual portfolios the delta-gamma approximation may
serve as a good control-variate within variance-reduced Monte-Carlo methods,
if it is not a sufficiently good approximation itself. Finally (4), is it extremely
risky for a senior risk manager to ignore delta-gamma models if his friendly
consultant tells him that 99% of the competitors have it implemented.
Several methods have been proposed to compute a quantile of the distribution
defined by the model (1.1), among them Monte Carlo simulation (Pritsker,
1996), Johnson transformations (Zangari, 1996a; Longerstaey, 1996), Cornish-
8            1   Approximating Value at Risk in Conditional Gaussian Models


Fisher expansions (Zangari, 1996b; Fallon, 1996), the Solomon-Stephens ap-
proximation (Britton-Jones and Schaefer, 1999), moment-based approxima-
tions motivated by the theory of estimating functions (Li, 1999), saddle-point
approximations (Rogers and Zane, 1999), and Fourier-inversion (Rouvinez,
1997; Albanese, Jackson and Wiberg, 2000). Pichler and Selitsch (1999) com-
pare five different VaR-methods: Johnson transformations, Delta-Normal, and
Cornish-Fisher-approximations up to the second, fourth and sixth moment.
The sixth-order Cornish-Fisher-approximation compares well against the other
techniques and is the final recommendation. Mina and Ulmer (1999) also com-
pare Johnson transformations, Fourier inversion, Cornish-Fisher approxima-
tions, and partial Monte Carlo. (If the true value function ∆V (X) in Monte
Carlo simulation is used, this is called “full Monte Carlo”. If its quadratic ap-
proximation is used, this is called “partial Monte Carlo”.) Johnson transforma-
tions are concluded to be “not a robust choice”. Cornish-Fisher is “extremely
fast” compared to partial Monte Carlo and Fourier inversion, but not as robust,
as it gives “unacceptable results” in one of the four sample portfolios.
The main three methods used in practice seem to be Cornish-Fisher expansions,
Fourier inversion, and partial Monte Carlo, whose implementation in XploRe
will be presented in this paper. What makes the Normal-Delta-Gamma model
especially tractable is that the characteristic function of the probability distri-
bution, i.e. the Fourier transform of the probability density, of the quadratic
form (1.1) is known analytically. Such general properties are presented in sec-
tion 1.2. Sections 1.3, 1.4, and 1.5 discuss the Cornish-Fisher, Fourier inversion,
and partial Monte Carlo techniques, respectively.


1.2     General Properties of Delta-Gamma-Normal
        Models
The change in the portfolio value, ∆V , can be expressed as a sum of indepen-
dent random variables that are quadratic functions of standard normal random
variables Yi by means of the solution of the generalized eigenvalue problem

                                    CC > = Σ,
                                   C > ΓC = Λ.
1.2    General Properties of Delta-Gamma-Normal Models                          9


This implies
                              m
                              X           1
                      ∆V =       (δi Yi + λi Yi2 )                           (1.2)
                             i=1
                                          2
                              m
                                 (                 2     )
                                                      δi2
                                         
                             X      1      δi
                           =          λi      + Yi −
                             i=1
                                    2      λi         2λi

with X = CY , δ = C > ∆ and Λ = diag(λ1 , . . . , λm ). Packages like LAPACK
(Anderson, Bai, Bischof, Blackford, Demmel, Dongarra, Croz, Greenbaum,
Hammarling, McKenney and Sorensen, 1999) contain routines directly for the
generalized eigenvalue problem. Otherwise C and Λ can be computed in two
steps:

   1. Compute some matrix B with BB > = Σ. If Σ is positive definite, the
      fastest method is Cholesky decomposition. Otherwise an eigenvalue de-
      composition can be used.
   2. Solve the (standard) symmetric eigenvalue problem for the matrix B > ΓB:
                                     Q> B > ΓBQ = Λ
                                    def
       with Q−1 = Q> and set C = BQ.

The decomposition is implemented in the quantlet

      npar= VaRDGdecomp(par)
           uses a generalized eigen value decomposition to do a suitable co-
           ordinate change. par is a list containing Delta, Gamma, Sigma on
           input. npar is the same list, containing additionally B, delta,
           and lambda on output.


The characteristic function of a non-central χ21 variate ((Z + a)2 , with standard
normal Z) is known analytically:
                                                    2 
                     it(Z+a)2            −1/2          a it
                  Ee          = (1 − 2it)     exp             .
                                                     1 − 2it
This implies the characteristic function for ∆V
                         Y        1             1
               Eeit∆V =      √             exp{− δj2 t2 /(1 − iλj t)},       (1.3)
                          j
                               1 −  iλ j t      2
10          1   Approximating Value at Risk in Conditional Gaussian Models


which can be re-expressed in terms of Γ and B
                                     1
 Eeit∆V = det(I − itB > ΓB)−1/2 exp{− t2 ∆> B(I − itB > ΓB)−1 B > ∆}, (1.4)
                                     2
or in terms of Γ and Σ
                                      1
      Eeit∆V = det(I − itΓΣ)−1/2 exp{− t2 ∆> Σ(I − itΓΣ)−1 ∆}.             (1.5)
                                      2

Numerical Fourier-inversion of (1.3) can be used to compute an approximation
to the cumulative distribution function (cdf) F of ∆V . (The α-quantile is
computed by root-finding in F (x) = α.) The cost of the Fourier-inversion is
O(N log N ), the cost of the function evaluations is O(mN ), and the cost of the
eigenvalue decomposition is O(m3 ). The cost of the eigenvalue decomposition
dominates the other two terms for accuracies of one or two decimal digits and
the usual number of risk factors of more than a hundred. Instead of a full
spectral decomposition, one can also just reduce B > ΓB to tridiagonal form
B > ΓB = QT Q> . (T is tridiagonal and Q is orthogonal.) Then the evaluation
of the characteristic function in (1.4) involves the solution of a linear system
with the matrix I −itT , which costs only O(m) operations. An alternative route
is to reduce ΓΣ to Hessenberg form ΓΣ = QHQ> or do a Schur decomposition
ΓΣ = QRQ> . (H is Hessenberg and Q is orthogonal. Since ΓΣ has the same
eigenvalues as B > ΓB and they are all real, R is actually triangular instead of
quasi-triangular in the general case, Anderson et al. (1999). The evaluation of
(1.5) becomes O(m2 ), since it involves the solution of a linear system with the
matrix I − itH or I − itR, respectively. Reduction to tridiagonal, Hessenberg,
or Schur form is also O(m3 ), so the asymptotics in the number of risk factors
m remain the same in all cases. The critical N , above which the complete
spectral decomposition + fast evaluation via (1.3) is faster than the reduction
to tridiagonal or Hessenberg form + slower evaluation via (1.4) or (1.5) remains
to be determined empirically for given m on a specific machine.
The computation of the cumulant generating function and the characteristic
function from the diagonalized form is implemented in the following quantlets:
1.2    General Properties of Delta-Gamma-Normal Models                        11



      z= VaRcgfDG(t,par)
           Computes the cumulant generating function (cgf) for the class of
           quadratic forms of Gaussian vectors.
      z= VaRcharfDG(t,par)
           Computes the characteristic function for the class of quadratic
           forms of Gaussian vectors.

      t is the complex argument and par the parameter list generated by
      VaRDGdecomp.
The advantage of the Cornish-Fisher approximation is that it is based on the
cumulants, which can be computed without any matrix decomposition:
                 1X                               1
            κ1 =     λi                          = tr(ΓΣ),
                 2 i                              2
                 1X                               1
            κr =     {(r − 1)!λri + r!δi2 λr−2
                                           i   } = (r − 1)! tr((ΓΣ)r )
                 2 i                              2
                                                   1
                                                  + r!∆> Σ(ΓΣ)r−2 ∆
                                                   2
(r ≥ 2). Although the cost of computing the cumulants needed for the Cornish-
Fisher approximation is also O(m3 ), this method can be faster than the eigen-
value decomposition for small orders of approximation and relatively small
numbers of risk factors.
The computation of all cumulants up to a certain order directly from ΓΣ is im-
plemented in the quantlet VaRcumulantsDG, while the computation of a single
cumulant from the diagonal decomposition is provided by VaRcumulantDG:

      vec= VaRcumulantsDG(n,par)
           Computes the first n cumulants for the class of quadratic forms
           of Gaussian vectors. The list par contains at least Gamma and
           Sigma.

      z= VaRcumulantDG(n,par)
           Computes the n-th cumulant for the class of quadratic forms of
           Gaussian vectors. The parameter list par is to be generated with
           VaRDGdecomp.
12          1   Approximating Value at Risk in Conditional Gaussian Models


Partial Monte-Carlo (or partial Quasi-Monte-Carlo) costs O(m2 ) operations
per sample. (If Γ is sparse, it may cost even less.) The number of samples
needed is a function of the desired accuracy. It is clear from the asymptotic
costs of the three methods that partial Monte Carlo will be preferable for
sufficiently large m.
While Fourier-inversion and Partial Monte-Carlo can in principal achieve any
desired accuracy, the Cornish-Fisher approximations provide only a limited
accuracy, as shown in the next section.


1.3     Cornish-Fisher Approximations

1.3.1    Derivation

The Cornish-Fisher expansion can be derived in two steps. Let Φ denote some
base distribution and φ its density function. The generalized Cornish-Fisher
expansion (Hill and Davis, 1968) aims to approximate an α-quantile of F in
terms of the α-quantile of Φ, i.e., the concatenated function F −1 ◦ Φ. The key
to a series expansion of F −1 ◦Φ in terms of derivatives of F and Φ is Lagrange’s
inversion theorem. It states that if a function s 7→ t is implicitly defined by
                                    t = c + s · h(t)                        (1.6)
and h is analytic in c, then an analytic function f (t) can be developed into a
power series in a neighborhood of s = 0 (t = c):
                                          ∞
                                          X sr
                     f (t) = f (c) +               Dr−1 [f 0 · hr ](c),     (1.7)
                                          r=1
                                              r!

where D denotes the differentation operator. For a given probability c = α,
f = Φ−1 , and h = (Φ − F ) ◦ Φ−1 this yields
                            ∞
                            X             sr r−1
      Φ−1 (t) = Φ−1 (α) +         (−1)r      D [((F − Φ)r /φ) ◦ Φ−1 ](α).   (1.8)
                            r=1
                                          r!

Setting s = 1 in (1.6) implies Φ−1 (t) = F −1 (α) and with the notations x =
F −1 (α), z = Φ−1 (α) (1.8) becomes the formal expansion
                     ∞
                     X             1 r−1
             x=z+          (−1)r      D [((F − Φ)r /φ) ◦ Φ−1 ](Φ(z)).
                     r=1
                                   r!
1.3   Cornish-Fisher Approximations                                             13


With a = (F − Φ)/φ this can be written as
                                  ∞
                                  X                1
                          x=z+          (−1)r         D(r−1) [ar ](z)         (1.9)
                                  r=1
                                                   r!
                   0          0                0
with D(r) = (D+ φφ )(D+2 φφ ) . . . (D+r φφ ) and D(0) being the identity operator.
(1.9) is the generalized Cornish-Fisher expansion. The second step is to choose a
specific base distribution Φ and a series expansion for a. The classical Cornish-
Fisher expansion is recovered if Φ is the standard normal distribution, a is
(formally) expanded into the Gram-Charlier series, and the terms are re-ordered
as described below.
The idea of the Gram-Charlier series is to develop the ratio of the moment
generating function of the considered random variable (M (t) = Eet∆V ) and
                                                                       2
the moment generating function of the standard normal distribution (et /2 )
into a power series at 0:
                                                    ∞
                                    −t2 /2
                                                    X
                              M (t)e           =          ck tk .           (1.10)
                                                    k=0

(ck are the Gram-Charlier coefficients. They can be derived from the moments
by multiplying the power series for the two terms on the left hand side.) Com-
ponentwise Fourier inversion yields the corresponding series for the probability
density
                                  X∞
                          f (x) =     ck (−1)k φ(k) (x)                   (1.11)
                                    k=0
and for the cumulative distribution function (cdf)
                                        ∞
                                        X
                       F (x) = Φ(x) −         ck (−1)k−1 φ(k−1) (x).        (1.12)
                                        k=1

(φ und Φ are now the standard normal density and cdf. The derivatives of
the standard normal density are (−1)k φ(k) (x) = φ(x)Hk (x), where the Her-
mite polynomials Hk form an orthogonal basis in the Hilbert space L2 (R, φ)
of the square integrable functions on R w.r.t. the weight function φ. The
Gram-Charlier coefficients can thus be interpreted as the Fourier coefficients
of the function
             P∞ f (x)/φ(x) in the Hilbert space L2 (R, φ) with the basis {Hk }
f (x)/φ(x) = k=0 ck Hk (x).) Plugging (1.12) into (1.9) gives the formal Cornish-
Fisher expansion, which is re-grouped as motivated by the central limit theo-
rem.
14           1   Approximating Value at Risk in Conditional Gaussian Models


Assume that ∆V is already normalized (κ1 = 0, κ2 = 1) and consider the
normalized
         Psum of independent random variables ∆Vi with the distribution F ,
           n
Sn = √1n i=1 ∆Vi . The moment generating function of the random variable
Sn is
                                           ∞
                            √        2     X
              Mn (t) = M (t/ n)n = et /2 (   ck tk n−k/2 )n .
                                                 k=0

Multiplying out the last term shows that the k-th Gram-Charlier coefficient
ck (n) of Sn is a polynomial expression in n−1/2 , involving the coefficients ci up
to i = k. If the terms in the formal Cornish-Fisher expansion
                       ∞
                                         "    ∞
                                                              !r #
                              r 1
                      X                       X
              x=z+        (−1) D(r−1)       −      ck (n)Hk−1      (z)       (1.13)
                      r=1
                                r!
                                                k=1

are sorted and grouped with respect to powers of n−1/2 , the classical Cornish-
Fisher series
                                   X∞
                          x=z+         n−k/2 ξk (z)                      (1.14)
                                       k=1

results. (The Cornish-Fisher approximation for ∆V results from setting n = 1
in the re-grouped series (1.14).)
It is a relatively tedious process to express the adjustment terms ξk correpond-
ing to a certain power n−k/2 in the Cornish-Fisher expansion (1.14) directly
in terms of the cumulants κr , see (Hill and Davis, 1968). Lee developed a
recurrence formula for the k-th adjustment term ξk in the Cornish-Fisher ex-
pansion, which is implemented in the algorithm AS269 (Lee and Lin, 1992; Lee
and Lin, 1993). (We write the recurrence formula here, because it is incorrect
in (Lee and Lin, 1992).)
                           k−1
                           X   j
  ξk (H) = ak H ∗(k+1) −         (ξk−j (H) − ξk−j ) ∗ (ξj − aj H ∗(j+1) ) ∗ H, (1.15)
                           j=1
                               k

            κk+2
with ak = (k+2)! . ξk (H) is a formal polynomial expression in H with the usual
algebraic relations between the summation “+” and the “multiplication” “∗”.
Once ξk (H) is multiplied out in ∗-powers of H, each H ∗k is to be interpreted
as the Hermite polynomial Hk and then the whole term becomes a polynomial
in z with the “normal” multiplication “·”. ξk denotes the scalar that results
when the “normal” polynomial ξk (H) is evaluated at the fixed quantile z, while
ξk (H) denotes the expression in the (+, ∗)-algebra.
1.3    Cornish-Fisher Approximations                                        15


This formula is implemented by the quantlet

      q = CornishFisher (z, n, cum)
           Cornish-Fisher expansion for arbitrary orders for the standard
           normal quantile z, order of approximation n, and the vector of
           cumulants cum.

The following example prints the Cornish-Fisher approximation for increasing
orders for z=2.3 and cum=1:N:
                                                              XFGcofi.xpl



Contents of r

[1,]            2   4.2527
[2,]            3   5.3252
[3,]            4   5.0684
[4,]            5   5.2169
[5,]            6   5.1299
[6,]            7   5.1415
[7,]            8    5.255


1.3.2      Properties

The qualitative properties of the Cornish-Fisher expansion are:

  + If Fm is a sequence of distributions converging to the standard normal dis-
    tribution Φ, the Edgeworth- and Cornish-Fisher approximations present
    better approximations (asymptotically for m → ∞) than the normal ap-
    proximation itself.
  − The approximated functions F̃ and F̃ −1 ◦Φ are not necessarily monotone.
  − F̃ has the “wrong tail behavior”, i.e., the Cornish-Fisher approximation
    for α-quantiles becomes less and less reliable for α → 0 (or α → 1).
  − The Edgeworth- and Cornish-Fisher approximations do not necessarily
    improve (converge) for a fixed F and increasing order of approximation,
    k.
16            1   Approximating Value at Risk in Conditional Gaussian Models


For more on the qualitative properties of the Cornish-Fisher approximation
see (Jaschke, 2001). It contains also an empirical analysis of the error of the
Cornish-Fisher approximation to the 99%-VaR in real-world examples as well
as its worst-case error on a certain class of one- and two-dimensional delta-
gamma-normal models:

     + The error for the 99%-VaR on the real-world examples - which turned
       out to be remarkably close to normal - was about 10−6 σ, which is more
       than sufficient. (The error was normalized with respect to the portfolio’s
       standard deviation, σ.)
     − The (lower bound on the) worst-case error for the one- and two-dimensional
       problems was about 1.0σ, which corresponds to a relative error of up to
       100%.

In summary, the Cornish-Fisher expansion can be a quick approximation with
sufficient accuracy in many practical situations, but it should not be used
unchecked because of its bad worst-case behavior.


1.4       Fourier Inversion

1.4.1      Error Types in Approximating the Quantile through
           Fourier Inversion

Let
R ∞ fitxdenote a continuous, absolutely integrable function and φ(t) =
 −∞
    e f (x)dx its Fourier transform. Then, the inversion formula
                                          Z ∞
                                      1
                             f (x) =             e−itx φ(t)dt              (1.16)
                                     2π    −∞

holds.
The key to an error analysis of trapezoidal, equidistant approximations to the
integral (1.16)
                                         ∞
                                def ∆t
                                         X
                  f˜(x, ∆t , t) =               φ(t + k∆t )e−i(t+k∆t )x    (1.17)
                                    2π
                                         k=−∞
1.4   Fourier Inversion                                                              17


is the Poisson summation formula
                                    ∞
                                   X          2π
                  f˜(x, ∆t , t) =      f (x +     j)e2πitj/∆t ,                   (1.18)
                                  j=−∞
                                              ∆ t


see (Abate and Whitt, 1992, p.22). If f (x) is approximated by f˜(x, ∆t , 0), the
residual                                X         2π
                       ea (x, ∆t , 0) =    f (x +    j)                    (1.19)
                                                  ∆t
                                                  j6=0

is called the aliasing error, since different “pieces” of f are aliased into the
window (−π/∆t , π/∆t ). Another suitable choice is t = ∆t /2:
                                               ∞
                                               X               2π
                       f˜(x, ∆t , ∆t /2) =            f (x +      j)(−1)j .       (1.20)
                                             j=−∞
                                                               ∆t

If f is nonnegative, f˜(x, ∆t , 0) ≥ f (x). If f (x) is decreasing in |x| for |x| >
π/∆t , then f˜(x, ∆t , ∆t /2) ≤ f (x) holds for |x| < π/∆t . The aliasing error
can be controlled by letting ∆t tend to 0. It decreases only slowly when f has
“heavy tails”, or equivalently, when φ has non-smooth features.
It is practical to first decide on ∆t to control the aliasing error and then decide
on the cut-off in the sum (1.17):
                ˜                 ∆t   X
               f˜(x, T, ∆t , t) =             φ(t + k∆t )e−i(t+k∆t )x .      (1.21)
                                  2π
                                         |t+k∆t |≤T

                       def ˜
Call et (x, T, ∆t , t) = f˜(x, T, ∆t , t) − f˜(x, ∆t , t) the truncation error.
For practical purposes, the truncation error et (x, T, ∆t , t) essentially depends
only on (x, T ) and the decision on how to choose T and ∆t can be decoupled.
et (x, T, ∆t , t) converges to
                                             ZT
                                   def 1
                         et (x, T ) =             e−itx φ(t)dt − f (x)            (1.22)
                                      2π
                                             −T
                            Rπ                            def
for ∆t ↓ 0. Using 2π      1
                             −π
                                  e−itx dt = sin(πx)
                                                πx   = sinc(x) and the convolution
theorem, one gets
                π/∆
                 Z x                     Z ∞
           1
                       e−itx φ(t)dt =          f (y∆x ) sinc(x/∆x − y)dy,         (1.23)
          2π                              −∞
               −π/∆x
18           1   Approximating Value at Risk in Conditional Gaussian Models


which provides an explicit expression for the truncation error et (x, T ) in terms
of f . It decreases only slowly with T ↑ ∞ (∆x ↓ 0) if f does not have infinitely
many derivatives, or equivalently, φ has “power tails”. The following lemma
leads to the asymptotics of the truncation error in this case.
                                             R∞
LEMMA 1.1 If limt→∞ α(t) = 1, ν > 0, and T α(t)t−ν eit dt exists and is
finite for some T , then
                  Z ∞              (
                            −ν itx
                                      1
                                        T −ν+1 if x = 0
                       α(t)t e dt ∼ ν−1
                                     i −ν ixT
                                                                 (1.24)
                    T                xT   e     if x 6= 0

for T → ∞.

PROOF:
Under the given conditions, both the left and the right hand side converge to 0,
so l’Hospital’s rule is applicable to the ratio of the left and right hand sides. 


THEOREM 1.1 If the asymptotic behavior of a Fourier transform φ of a
function f can be described as

                         φ(t) = w|t|−ν eib sign(t)+ix∗ t α(t)                (1.25)

with limt→∞ α(t) = 1, then the truncation error (1.22)
                              Z ∞               
                           1             −itx
             et (x, T ) = − <       φ(t)e     dt
                           π     T


where < denotes the real part, has the asymptotic behavior

                     wT −ν+1
                     (
                     π(1−ν) cos(b)                              if x = x∗
                 ∼      wT −ν
                                                                             (1.26)
                     − π(x∗ −x)
                                cos(b + π2 + (x∗ − x)T )        if x 6= x∗
                                      RT
for T → ∞ at all points x where 2π  1
                                       −T
                                          φ(t)e−itx converges to f (x). (If in the
first case cos(b) = 0, this shall mean that limT →∞ et (x; T )T ν−1 = 0.)
1.4   Fourier Inversion                                                         19


PROOF:
The previous lemma is applicable for all points x where the Fourier inversion
integral converges. 

The theorem completely characterizes the truncation error for those cases,
where f has a “critical point of non-smoothness” and has a higher degree of
smoothness everywhere else. The truncation error decreases one power faster
away from the critical point than at the critical point. Its amplitude is inversely
proportional to the distance from the critical point.
Let F̃ be a (continuous) approximation to a (differentiable) cdf F with f =
F 0 > 0. Denote by  ≥ |F̃ (x) − F (x)| a known error-bound for the cdf. Any
solution q̃(x) to F̃ (q̃(x)) = F (x) may be considered an approximation to the
true F (x)-quantile x. Call eq (x) = q̃(x) − x the quantile error. Obviously, the
quantile error can be bounded by
                                                
                             |eq (x)| ≤                 ,                   (1.27)
                                          inf y∈U f (y)

where U is a suitable neighborhood of x. Given a sequence of approximations
F̃ with supx |F̃ (x) − F (x)| =  → 0,

                                  F (x) − F̃ (x)
                       eq (x) ∼                        ( → 0)              (1.28)
                                      f (x)

holds.
FFT-based Fourier inversion yields approximations for the cdf F on equidistant
∆x -spaced grids. Depending on the smoothness of F , linear or higher-order
interpolations may be used. Any monotone interpolation of {F (x0 + ∆x j)}j
yields a quantile approximation whose interpolation error can be bounded by
∆x . This bound can be improved if an upper bound on the density f in a
suitable neighborhood of the true quantile is known.
20             1   Approximating Value at Risk in Conditional Gaussian Models


1.4.2    Tail Behavior
                                                      2 2
If λj = 0 for some j, then |φ(t)| = O(e−δj t /2 ). In the following, we assume
that |λi | > 0 for all i. The norm of φ(t) has the form
                             m
                                                        δ 2 t2 /2
                            Y                                    
                   |φ(t)| =     (1 + λ2i t2 )−1/4 exp − i 2 2 ,          (1.29)
                            i=1
                                                       1 + λi t
                   |φ(t)| ∼ w∗ |t|−m/2            |t| → ∞                     (1.30)

with
                               m                            
                         def
                               Y                  1
                      w∗ =         |λi |−1/2 exp − (δi /λi )2 .               (1.31)
                               i=1
                                                  2
The arg has the form
                                     m
                                     X 1              1        λi t
               arg φ(t) = θt +        arctan(λi t) − δi2 t2             ,     (1.32)
                               i=1
                                   2                   2     1 + λ2i t2
                                m 
                                                    δi2 t
                                                           
                               X    π
               arg φ(t) ∼ θt +         sign(λi t) −       )                   (1.33)
                               i=1
                                    4               2λi

(for |t| → ∞). This motivates the following approximation for φ:
                      def               π
                φ̃(t) = w∗ |t|−m/2 exp i m∗ sign(t) + ix∗ t                   (1.34)
                                         4
with
                              m
                        def
                              X
                    m∗ =             sign(λi ),                               (1.35)
                               i=1
                                        m
                        def          1 X δi2
                     x∗ = θ −                 .                               (1.36)
                                     2 i=1 λi
x∗ is the location and w∗ the “weight” of the singularity. The multivariate
delta-gamma-distribution is C ∞ except at x∗ , where the highest continuous
derivative of the cdf is of order [(m − 1)/2].
Note that
         def
                              Y                          1 δj2
     α(t) = φ(t)/φ̃(t) =        (1 − (iλj t)−1 )−1/2 exp{ 2 (1 − iλj t)−1 }   (1.37)
                              j
                                                         2 λj

and α meets the assumptions of theorem 1.1.
1.4   Fourier Inversion                                                       21


1.4.3     Inversion of the cdf minus the Gaussian Approximation

Assume that F is a cdf with mean µ and standard deviation σ, then
                              Z ∞
                            1          i              2 2
      F (x) − Φ(x; µ, σ) =        e−ixt (φ(t) − eiµt−σ t /2 ) dt          (1.38)
                           2π −∞       t
holds, where Φ(.; µ, σ) is the normal cdf with mean µ and standard deviation
             2 2
σ and eiµt−σ t /2 its characteristic function. (Integrating the inversion formula
(1.16) w.r.t. x and applying Fubini’s theorem leads to (1.38).) Applying the
Fourier inversion to F (x) − Φ(x; µ, σ) instead of F (x) solves the (numerical)
problem that ti φ(t) has a pole at 0. Alternative distributions with known
Fourier transform may be chosen if they better approximate the distribution
F under consideration.
The moments of the delta-gamma-distribution can be derived from (1.3) and
(1.5):
                       X       1              1
                  µ=      (θi + λi ) = θ> 11 + tr(ΓΣ)
                        i
                               2              2
and                         X       1               1
                     σ2 =     (δi2 + λ2i ) = ∆> Σ∆ + tr((ΓΣ)2 ).
                            i
                                    2               2

         def                    2 2
Let ψ(t) = ti (φ(t)−eiµt−σ t /2 ). Since ψ(−t) = ψ(t), the truncated sum (1.21)
can for t = ∆t /2 and T = (K − 21 )∆t be written as
                                         K−1
                                                                             !
      ˜                             ∆t   X         1       −i((k+ 12 )∆t )xj
     F̃ (xj ; T, ∆t , t) − Φ(xj ) =    <     ψ((k + )∆t )e                     ,
                                    π              2
                                            k=0

which can comfortably be computed by a FFT with modulus N ≥ K:
                                 K−1
                   ∆t      ∆t    X         1
                      < e−i 2 xj     ψ((k + )∆t )e−ik∆t x0 e−2πikj/N ,
                                                                    
               =                                                          (1.39)
                   π                       2
                                      k=0

with ∆x ∆t = 2π
             N and the last N − K components of the input vector to the
FFT are padded with zeros.
The aliasing error of the approximation (1.20) applied to F − N is
                            X       2π            2π
                                                        
       ea (x, ∆t , ∆t /2) =   F (x +    j) − Φ(x +    j) (−1)j .          (1.40)
                                     ∆t            ∆t
                             j6=0
22          1   Approximating Value at Risk in Conditional Gaussian Models

                          √       √
The cases (λ, δ, θ) = (± 2, 0, ∓ 2/2) are the ones with the fattest tails and
are thus candidates for the worst case for (1.40), asymptotically for ∆t → 0. In
these cases, (1.40) is eventually an alternating sequence of decreasing absolute
value and thus
                                                r
                                                   2 − 1 √2π/∆t
                 F (−π/∆t ) + 1 − F (π/∆t ) ≤         e 2                 (1.41)
                                                   πe
is an asymptotic bound for the aliasing error.
The truncation error (1.22) applied to F − N is
                               Z ∞                          
                            1         i              2 2
                                        φ(t) − eiµt−σ t /2 dt .
                                                          
              et (x; T ) = − <                                            (1.42)
                            π     T   t

The Gaussian part plays no role asymptotically for T → ∞ and Theorem 1.1
applies with ν = m/2 + 1.
The quantile error for a given parameter ϑ is

                                 eϑ (q(ϑ); ∆t ) + eϑt (q(ϑ); T )
                 q̃(ϑ) − q(ϑ) ∼ − a                              ,        (1.43)
                                           f ϑ (q(ϑ))

asymptotically for T → ∞ and ∆t → 0. (q(ϑ) denotes the true 1%-quantile
for the triplet ϑ = (θ, ∆, Γ).) The problem is now to find the right trade-off
between “aliasing error” and “truncation error”, i.e., to choose ∆t optimally
for a given K.
Empirical
   √       √observation of the one- and two-factor cases shows that (λ, δ, θ) =
(− 2, 0, 2/2) √ has√the smallest density (≈ 0.008) at the 1%-quantile. Since
(λ, δ, θ) = (− 2, 0, 2/2) is the case with the maximal “aliasing error” as well,
it is the only candidate for the worst case of the ratio of the “aliasing error”
over the density (at the 1%-quantile).
The question which ϑ is the worst case for the ratio of the “truncation error”
over the density (at the 1%-quantile)
                                    √ is not
                                          √ as clear-cut. Empirical observation
shows that the case (λ, δ, θ) = (− 2, 0, 2/2) is also the worst case for this
ratio over a range of parameters in one- and two-factor problems. This leads to
the following heuristic to choose ∆t for a given K (T = (K − 0.5)∆t ). Choose
∆t such as to minimize
                   √     √the sum of the aliasing and truncation errors for the
case (λ, δ, θ) = (− 2, 0, 2/2), as approximated by the bounds (1.41) and
                                                       w
                      lim sup |et (x, T )|T 3/2 =                         (1.44)
                       T →∞                         π|x∗ − x|
1.4    Fourier Inversion                                                        23

                         √
with w = 2−1/4 , x∗ = 2/2, and the 1%-quantile x ≈ −3.98. (Note that this
is suitable only for intermediate K, leading to accuracies of 1 to 4 digits in the
quantile. For higher K, other cases become the worst case for the ratio of the
truncation error over the density at the quantile.)
Since F − N has a kink in the case m = 1, λ 6= 0, higher-order interpolations
are futile in non-adaptive methods and ∆x = N2π ∆t is a suitable upper bound
for the interpolation error. By experimentation, N ≈ 4K suffices to keep the
interpolation error comparatively small.
K = 26 evaluations of φ (N = 28 ) suffice to ensure an accuracy of 1 digit in the
approximation of the 1%-quantile over a sample of one- and two-factor cases.
K = 29 function evaluations are needed for two digits accuracy. The XploRe
implementation of the Fourier inversion is split up as follows:

      z= VaRcharfDGF2(t,par)
                                        def              2 2
           implements the function ψ(t) = ti (φ(t)−eiµt−σ t /2 ) for the com-
           plex argument t and the parameter list par.
      z= VaRcorrfDGF2(x,par)
           implements the correction term Φ(x, µ, σ 2 ) for the argument x
           and the parameter list par.
      vec= gFourierInversion(N,K,dt,t0,x0,charf,par)
           implements a generic Fourier inversion like in (1.39). charf is a
           string naming the function to be substituted for ψ in (1.39). par
           is the parameter list passed to charf.

gFourierInversion can be applied to VaRcharfDG, giving the density, or to
VaRcharfDGF2, giving the cdf minus the Gaussian approximation. The three
auxiliary functions are used by
24            1   Approximating Value at Risk in Conditional Gaussian Models



     l= VaRcdfDG(par,N,K,dt)
          to approximate the cumulative distribution function (cdf) of the
          distribution from the class of quadratic forms of Gaussian vectors
          with parameter list par. The output is a list of two vectors x and
          y, containing the cdf-approximation on a grid given by x.
     q= cdf2quant(a,l)
          approximates the a-quantile from the list l, as returned from
          VaRcdfDG.
     q= VaRqDG(a,par,N,K,dt)
          calls VaRcdfDG and cdf2quant to approximate an a-quantile for
          the distribution of the class of quadratic forms of Gaussian vectors
          that is defined by the parameter list par.


The following example plots the 1%-quantile for a one-parametric family of the
class of quadratic forms of one- and two-dimensional Gaussian vectors:
                                                                 XFGqDGtest.xpl




1.5      Variance Reduction Techniques in
         Monte-Carlo Simulation

1.5.1     Monte-Carlo Sampling Method

The partial Monte-Carlo method is a Monte-Carlo simulation that is performed
by generating underlying prices given the statistical model and then valuing
them using the simple delta-gamma approximation. We denote X as a vector
of risk factors, ∆V as the change in portfolio value resulting from X, L as
−∆V , α as a confidence level and l as a loss threshold.
We also let

     • ∆ = first order derivative with regard to risk factors

     • Γ = second order derivative with regard to risk factors
1.5    Variance Reduction Techniques in Monte-Carlo Simulation                   25


      • ΣX = covariance matrix of risk factors

Equation 1.1 defines the class of Delta-Gamma normal methods. The detailed
procedures to implement the partial Monte-Carlo method are as follows

  1. Generate N scenarios by simulating risk factors X1 , ..., XN according to
     ΣX ;
  2. Revalue the portfolio and determine the loss in the portfolio values L1 , ..., LN
     using the simple delta-gamma approximation;
  3. Calculate the fraction of scenarios in which losses exceed l:
                                         N
                                         X
                                  N −1         1(Li > l),                     (1.45)
                                         i=1

        where 1(Li > l) = 1 if Li > l and 0 otherwise.

The partial Monte-Carlo method is flexible and easy to implement. It provides
the accurate estimation of the VaR when the loss function is approximately
quadratic. However, one drawback is that for a large number of risk factors,
it requires a large number of replications and takes a long computational time.
According to Boyle, Broadie and  √ Glasserman (1998), the convergence rate of
the Monte-Carlo estimate is 1/ N . Different variance reduction techniques
have been developed to increase the precision and speed up the process. In
the next section, we will give a brief overview of different types of variance
reduction techniques, Boyle et al. (1998).

  1. Antithetic Method
        We assume Wi = f (zi ), where zi ∈ Rm are independent samples from the
        standard normal distribution. In our case, the function f is defined as
                                                m
                                                X           1
                    f (zi ) = I(Li > l) = I[−       (δi zi + λi zi2 ) > l].   (1.46)
                                                i=1
                                                            2

        Based on N replications, an unbiased estimator of the µ = E(W ) is given
        by
                                     N            N
                                  1 X          1 X
                             µ̂ =       Wi =        f (zi ).              (1.47)
                                  N i=1       N i=1
26            1   Approximating Value at Risk in Conditional Gaussian Models


       In this context, the method of antithetic variates is based on the obser-
       vation that if zi has a standard normal distribution, then so does −zi .
       Similarly, each
                                           N
                                        1 X
                                   µ̃ =       f (−zi )                    (1.48)
                                        N i=1

       is also an unbiased estimator of µ. Therefore,
                                                µ̂ + µ̃
                                       µ̂AV =                                  (1.49)
                                                   2

       is an unbiased estimator of µ as well.
       The intuition behind the antithetic method is that the random inputs
       obtained from the collection of antithetic pairs (zi , −zi ) are more regularly
       distributed than a collection of 2N independent samples. In particular,
       the sample mean over the antithetic pairs always equals the population
       mean of 0, whereas the mean over finitely many independent samples is
       almost surely different from 0.
     2. Control Variates
       The basic idea of control variates is to replace the evaluation of an un-
       known expectation with the evaluation of the difference between the un-
       known quantity and another expectation whose value is known.    PN The
       standard Monte-Carlo estimate of µ = E[Wi ] = E[f (zi )] is N1 i=1 Wi .
       Suppose we know µ̃ = E[g(zi )]. The method of control variates uses the
       known error
                                        N
                                     1 X
                                            W̃i − µ̃                       (1.50)
                                    N i=1
       to reduce the unknown error
                                          N
                                      1 X
                                            Wi − µ.                            (1.51)
                                      N i=1

       The controlled estimator has the form
                                 N             N
                              1 X           1 X
                                    Wi − β(       W̃i − µ̃).                   (1.52)
                              N i=1         N i=1

       Since the term in parentheses has expectation zero, equation (1.52) pro-
       vides an unbiased estimator of µ as long as β is independent. In practice,
1.5   Variance Reduction Techniques in Monte-Carlo Simulation                     27


      if the function g(zi ) provides a close approximation of f (zi ), we usually
      set β = 1 to simplify the calculation.
  3. Moment Matching Method
      Let zi , i = 1, ..., n, denote an independent standard normal random vec-
      tor used to drive a simulation. The sample moments will not exactly
      match those of the standard normal. The idea of moment matching is to
      transform the zi to match a finite number of the moments of the underly-
      ing population. For example, the first and second moment of the normal
      random number can be matched by defining
                                             σz
                           z˜i = (zi − z̃)      + µz , i = 1, .....n          (1.53)
                                             sz
      where z̃ is the sample mean of the zi , σz is the population standard devi-
      ation, sz is the sample standard deviation of zi , and µz is the population
      mean.
      The moment matching method can be extended to match covariance and
      higher moments as well.
  4. Stratified Sampling
      Like many variance reduction techniques, stratified sampling seeks to
      make the inputs to simulation more regular than the random inputs. In
      stratified sampling, rather than drawing zi randomly and independent
      from a given distribution, the method ensures that fixed fractions of the
      samples fall within specified ranges. For example, we want to generate
      N m-dimensional normal random vectors for simulation input. The em-
      pirical distribution of an independent sample (z1 , . . . , zN ) will look only
      roughly like the true normal density; the rare events - which are im-
      portant for calculating the VaR - will inevitably be underrepresented.
      Stratified sampling can be used to ensure that exactly one observation
      zik lies between the (i − 1)/N and i/N quantiles (i = 1, ..., N ) of the k-th
      marginal distribution for each of the m components. One way to imple-
      ment that is to generate N m independent uniform random numbers uki
      on [0, 1] (k = 1, . . . , m, i = 1, . . . , N ) and set

                        z̃ik = Φ−1 [(i + uki − 1)/N ], i = 1, ...., N         (1.54)

      where Φ−1 is the inverse of the standard normal cdf. (In order to achieve
      satisfactory sampling results, we need a good numerical procedure to cal-
      culate Φ−1 .) An alternative is to apply the stratification only to the most
28           1   Approximating Value at Risk in Conditional Gaussian Models


       important components (directions), usually associated to the eigenvalues
       of largest absolute value.
     5. Latin Hypercube Sampling
       The Latin Hypercube Sampling method was first introduced by McKay,
       Beckman and Conover (1979). In the Latin Hypercube Sampling method,
       the range of probable values for each component uki is divided into N seg-
       ments of equal probability. Thus, the m-dimensional space, consisting of
       k parameters, is partitioned into N m cells, each having equal probability.
       For example, for the case of dimension m = 2 and N = 10 segments, the
       parameter space is divided into 10 × 10 cells. The next step is to choose
       10 cells from the 10 × 10 cells. First, the uniform random numbers are
       generated to calculate the cell number. The cell number indicates the
       segment number the sample belongs to, with respect to each of the pa-
       rameters. For example, a cell number (1,8) indicates that the sample
       lies in the segment 1 with respect to first parameter, segment 10 with
       respect to second parameter. At each successive step, a random sample
       is generated, and is accepted only if it does not agree with any previous
       sample on any of the segment numbers.
     6. Importance sampling
       The technique builds on the observation that an expectation under one
       probability measure can be expressed as an expectation under another
       through the use of a likelihood ratio. The intuition behind the method is
       to generate more samples from the region that is more important to the
       practical problem at hand. In next the section, we will give a detailed
       description of calculating VaR by the partial Monte-Carlo method with
       importance sampling.


1.5.2     Partial Monte-Carlo with Importance Sampling

In the basic partial Monte-Carlo method, the problem of sampling changes in
market risk factors Xi is transformed into a problem of sampling the vector z of
underlying standard normal random variables. In importance sampling, we will
change the distribution of z from N(0, I) to N(µ, Σ). The key steps proposed
by Glasserman, Heidelberger and Shahabuddin (2000) are to calculate

                         P (L > l) = Eµ,Σ [θ(z)I(L > l)]                   (1.55)
1.5   Variance Reduction Techniques in Monte-Carlo Simulation                           29


Expectation is taken with z sampled from N(µ, Σ) rather than its original
distribution N(0, I). To correct for this change of distribution, we weight the
loss indictor I(L > l) by the likelihood ratio
                                     >   −1
                                 1
                                              µ − 12 [z > (I−Σ−1 )z−2µ> Σ−1 z]
               θ(z) = |Σ|1/2 e− 2 µ Σ          e                                 ,   (1.56)

which is simply the ratio of N[0, I] and N[µ, Σ] densities evaluated at z.
The next task is to choose µ and Σ so that the Monte-Carlo estimator will have
minimum variance. The key to reducing the variance is making the likelihood
ratio small when L > l. Equivalently, µ and Σ should be chosen in the way
to make L > l more likely under N(µ, Σ) than under N(0, I). The steps of the
algorithm are following:

  1. Decomposition Process
      We follow the decomposition steps described in the section 1.2 and find
      the cumulant generating function of L given by
                                  m
                                 X   1 (ωδi )2
                        κ(ω) =        [        − log(1 − ωλi )]                      (1.57)
                                 i=1
                                     2 1 − ωλi

  2. Transform N(0, I) to N(µ, Σ)
      If we take the first derivative of κ(ω) with respect to ω, we will get:
                              d
                                κ(ω) = Eµ(ω),Σ(ω) [L] = l                            (1.58)
                             dω
      where Σ(ω) = (I − ωΛ)−1 and µ(ω) = ωΣ(ω)δ. Since our objective is
      to estimate P (L > l), we will choose ω to be the solution of equation
      (1.58). The loss exceeding scenarios (L > l), which were previously rare
      under N(0, I), are typical under N(µ, Σ), since the expected value of the
      approximate value L is now l. According to Glasserman et al. (2000), the
      effectiveness of this importance sampling procedure is not very sensitive
      to the choice of ω.
      After we get N(µ(ω), Σ(ω)), we can follow the same steps in the basic
      partial Monte-Carlo simulation to calculate the VaR. The only difference
      is that the fraction of scenarios in which losses exceed l is calculated by:
                             N
                         1 X
                               [exp(−ωLi + κ(ω))I(Li > l)]                           (1.59)
                         N i=1
30           1    Approximating Value at Risk in Conditional Gaussian Models


       An important feature of this method is that it can be easily added to an
       existing implementation of partial Monte-Carlo simulation. The impor-
       tance sampling algorithm differs only in how it generates scenarios and
       in how it weights scenarios as in equation (1.59).


1.5.3     XploRe Examples

     VaRMC = VaRestMC (VaRdelta, VaRgamma, VaRcovmatrix,
          smethod, opt)
          Partial Monte-Carlo method to calculate VaR based on Delta-
          Gamma Approximation.

The function VaRestMC uses the different types of variance reduction to calcu-
late the VaR by the partial Monte-Carlo simulation. We employ the variance
reduction techniques of moment matching, Latin Hypercube Sampling and im-
portance sampling. The output is the estimated VaR. In order to test the
efficiency of different Monte-Carlo sampling methods, we collect data from the
MD*BASE and construct a portfolio consisting of three German stocks (Bayer,
Deutsche Bank, Deutsche Telekom) and corresponding 156 options on these un-
derlying stocks with maturity ranging from 18 to 211 days on May 29, 1999.
The total portfolio value is 62,476 EUR. The covariance matrix for the stocks
is provided as well. Using the Black-Scholes model, we also construct the ag-
gregate delta and aggregate gamma as the input to the Quantlet. By choosing
the importance sampling method, 0.01 confidence level, 1 days forecast horizon
and 1,000 times of simulation, the result of the estimation is as follows.
                                                                XFGVaRMC.xpl



Contents of VaRMC

[1,]     771.73

It tells us that we expect the loss to exceed 771.73 EUR or 1.24% of portfolio
value with less than 1% probability in 1 day. However, the key question of
the empirical example is that how much variance reduction is achieved by the
different sampling methods. We run each of the four sampling methods 1,000
1.5    Variance Reduction Techniques in Monte-Carlo Simulation                31


times and estimated the standard error of the estimated VaR for each sampling
method. The table (1.1) summarizes the results.

                            Estimated VaR Standard Error Variance Reduction
      Plain-Vanilla                 735.75         36.96                0%
      Moment Matching               734.92         36.23             1.96%
      Latin Hypercube               757.83         21.32            42.31%
      Importance Sampling           761.75          5.66            84.68%

      Table 1.1. Variance Reduction of Estimated VaR for German Stock
      Option Portfolio

As we see from the table (1.1), the standard error of the importance sampling
is 84.68% less than those of plain-vanilla sampling and it demonstrates that
approximately 42 times more scenarios would have to be generated using the
plain-vanilla method to achieve the same precision obtained by importance
sampling based on Delta-Gamma approximation. These results clearly indicate
the great potential speed-up of estimation of the VaR by using the importance
sampling method. This is why we set the importance sampling as the default
sampling method in the function VaRestMC. However, the Latin Hypercube
sampling method also achieved 42.31% of variance reduction. One advantage
of the Latin Hypercube sampling method is that the decomposition process is
not necessary. Especially when the number of risk factors (m) is large, the
decomposition (O(m3 )) dominates the sampling (O(m)) and summation O(1)
in terms of computational time. In this case, Latin Hypercube sampling may
offer the better performance in terms of precision for a given computational
time.




Bibliography
Abate, J. and Whitt, W. (1992). The Fourier-series method for inverting trans-
    forms of probability distributions, Queuing Systems Theory and Applica-
    tions 10: 5–88.
Albanese, C., Jackson, K. and Wiberg, P. (2000). Fast convolution method for
    VaR and VaR gradients, http://www.math-point.com/fconv.ps.
Anderson, E., Bai, Z., Bischof, C., Blackford, S., Demmel, J., Dongarra,
    J., Croz, J. D., Greenbaum, A., Hammarling, S., McKenney, A. and
32          1   Approximating Value at Risk in Conditional Gaussian Models


     Sorensen, D. (1999). LAPACK Users’ Guide, third edn, SIAM. http:
     //www.netlib.org/lapack/lug/.
Basel Committee on Banking Supervision (1995). An internal model-based ap-
    proach to market risk capital requirements, http://www.bis.org/publ/
    bcbsc224.pdf.
Boyle, P., Broadie, M. and Glasserman, P. (1998). Monte Carlo methods for
    security pricing, Journal of Economic Dynamics and Control 3: 1267–
    1321.
Breckling, J., Eberlein, E. and Kokic, P. (2000). A tailored suit for risk man-
    agement: Hyperbolic model, in J. Franke, W. Härdle and G. Stahl (eds),
    Measuring Risk in Complex Stochastic Systems, Vol. 147 of Lecture Notes
    in Statistics, Springer, New York, chapter 12, pp. 198–202.
Britton-Jones, M. and Schaefer, S. (1999). Non-linear Value-at-Risk, European
     Finance Review 2: 161–187.
Embrechts, P., Klüppelberg, C. and Mikosch, T. (1997). Modelling extremal
   events, Springer-Verlag, Berlin.
Embrechts, P., McNeil, A. and Straumann, D. (1999). Correlation and depen-
   dence in risk management: Properties and pitfalls, http://www.math.
   ethz.ch/~strauman/preprints/pitfalls.ps.
Engle, R. (2000). Dynamic conditional correlation - a simple class of multivari-
    ate GARCH models, http://weber.ucsd.edu/~mbacci/engle/.
Fallon, W. (1996). Calculating Value at Risk, http://wrdsenet.wharton.
     upenn.edu/fic/wfic/papers/96/9649.pdf. Wharton Financial Institu-
     tions Center Working Paper 96-49.
Glasserman, P., Heidelberger, P. and Shahabuddin, P. (2000). Efficient monte
    carlo methods for value at risk, http://www.research.ibm.com/people/
    b/berger/papers/RC21723.pdf. IBM Research Paper RC21723.
Hill, G. W. and Davis, A. W. (1968). Generalized asymptotic expansions of
      Cornish-Fisher type, Ann. Math. Statist. 39: 1264–1273.
Jaschke, S. (2001). The Cornish-Fisher-expansion in the context of delta-
     gamma-normal approximations, http://www.jaschke-net.de/papers/
     CoFi.pdf. Discussion Paper 54, Sonderforschungsbereich 373, Humboldt-
     Universität zu Berlin.
1.5   Variance Reduction Techniques in Monte-Carlo Simulation              33


Jorion, P. (2000). Value at Risk: The New Benchmark for Managing Financial
     Risk, McGraw-Hill, New York.
Lee, Y. S. and Lin, T. K. (1992). Higher-order Cornish Fisher expansion,
     Applied Statistics 41: 233–240.
Lee, Y. S. and Lin, T. K. (1993). Correction to algorithm AS269 : Higher-order
     Cornish Fisher expansion, Applied Statistics 42: 268–269.
Li, D. (1999). Value at Risk based on the volatility, skewness and kurtosis,
     http://www.riskmetrics.com/research/working/var4mm.pdf. Risk-
     Metrics Group.
Longerstaey, J. (1996). RiskMetrics technical document, Technical Report
    fourth edition, J.P.Morgan. originally from http://www.jpmorgan.com/
    RiskManagement/RiskMetrics/, now http://www.riskmetrics.com.
McKay, M. D., Beckman, R. J. and Conover, W. J. (1979). A comparison
   of three methods for selecting values of input variables in the analysis of
   output from a computer code, Technometrics 21(2): 239–245.
Mina, J. and Ulmer, A. (1999).       Delta-gamma four ways, http://www.
    riskmetrics.com.
Pichler, S. and Selitsch, K. (1999). A comparison of analytical VaR method-
     ologies for portfolios that include options, http://www.tuwien.ac.at/
     E330/Research/paper-var.pdf. Working Paper TU Wien.
Pritsker, M. (1996). Evaluating Value at Risk methodologies: Accuracy versus
     computational time, http://wrdsenet.wharton.upenn.edu/fic/wfic/
     papers/96/9648.pdf. Wharton Financial Institutions Center Working
     Paper 96-48.
Rogers, L. and Zane, O. (1999). Saddle-point approximations to option prices,
    Annals of Applied Probability 9(2): 493–503. http://www.bath.ac.uk/
    ~maslcgr/papers/.
Rouvinez, C. (1997). Going greek with VaR, Risk 10(2): 57–65.
Zangari, P. (1996a). How accurate is the delta-gamma methodology?, Risk-
    Metrics Monitor 1996(third quarter): 12–29.
Zangari, P. (1996b). A VaR methodology for portfolios that include options,
    RiskMetrics Monitor 1996(first quarter): 4–12.
2 Applications of Copulas for the
  Calculation of Value-at-Risk
                                                      Jörn Rank and Thomas Siegl


We will focus on the computation of the Value-at-Risk (VaR) from the perspec-
tive of the dependency structure between the risk factors. Apart from historical
simulation, most VaR methods assume a multivariate normal distribution of
the risk factors. Therefore, the dependence structure between different risk
factors is defined by the correlation between those factors. It is shown in Em-
brechts, McNeil and Straumann (1999) that the concept of correlation entails
several pitfalls. The authors therefore propose the use of copulas to quantify
dependence.
For a good overview of copula techniques we refer to Nelsen (1999). Copulas
can be used to describe the dependence between two or more random variables
with arbitrary marginal distributions. In rough terms, a copula is a function
C : [0, 1]n → [0, 1] with certain special properties. The joint multidimensional
cumulative distribution can be written as
       P(X1 ≤ x1 , . . . , Xn ≤ xn )   = C (P(X1 ≤ x1 ), . . . , P(Xn ≤ xn ))
                                       = C (F1 (x1 ), . . . , Fn (xn )) ,
where F1 , . . . , Fn denote the cumulative distribution functions of the n random
variables X1 , . . . , Xn . In general, a copula C depends on one or more cop-
ula parameters p1 , . . . , pk that determine the dependence between the random
variables X1 , . . . , Xn . In this sense, the correlation ρ(Xi , Xj ) can be seen as a
parameter of the so-called Gaussian copula.
Here we demonstrate the process of deriving the VaR of a portfolio using the
copula method with XploRe, beginning with the estimation of the selection
of the copula itself, estimation of the copula parameters and the computation
of the VaR. Backtesting of the results is performed to show the validity and
relative quality of the results. We will focus on the case of a portfolio containing
36                2   Applications of Copulas for the Calculation of Value-at-Risk


two market risk factors only, the FX rates USD/EUR and GBP/EUR. Copulas
in more dimensions exist, but the selection of suitable n-dimensional copulas
is still quite limited. While the case of two risk factors is still important for
applications, e.g. spread trading, it is also the case that can be best described.
As we want to concentrate our attention on the modelling of the dependency
structure, rather than on the modelling of the marginal distributions, we re-
strict our analysis to normal marginal densities. On the basis of our backtesting
results, we find that the copula method produces more accurate results than
“correlation dependence”.


2.1        Copulas
In this section we summarize the basic results without proof that are necessary
to understand the concept of copulas. Then, we present the most important
properties of copulas that are needed for applications in finance. In doing so,
we will follow the notation used in Nelsen (1999).


2.1.1       Definition

DEFINITION 2.1 A 2-dimensional copula is a function C : [0, 1]2 → [0, 1]
with the following properties:

     1. For every u ∈ [0, 1]
                                      C(0, u) = C(u, 0) = 0 .                           (2.1)
     2. For every u ∈ [0, 1]
                                C(u, 1) = u     and    C(1, u) = u .                    (2.2)

     3. For every (u1 , u2 ), (v1 , v2 ) ∈ [0, 1] × [0, 1] with u1 ≤ v1 and u2 ≤ v2 :
                      C(v1 , v2 ) − C(v1 , u2 ) − C(u1 , v2 ) + C(u1 , u2 ) ≥ 0 .       (2.3)

A function that fulfills property 1 is also said to be grounded. Property 3 is
the two-dimensional analogue of a nondecreasing one-dimensional function. A
function with this feature is therefore called 2-increasing.
The usage of the name ”copula” for the function C is explained by the following
theorem.
2.1   Copulas                                                                          37


2.1.2     Sklar’s Theorem

The distribution function of a random variable R is a function F that assigns
all r ∈ R a probability F (r) = P(R ≤ r). In addition, the joint distribution
function of two random variables R1 , R2 is a function H that assigns all r1 , r2 ∈
R a probability H(r1 , r2 ) = P(R1 ≤ r1 , R2 ≤ r2 ).

THEOREM 2.1 (Sklar’s theorem) Let H be a joint distribution function
with margins F1 and F2 . Then there exists a copula C with
                          H(x1 , x2 ) = C(F1 (x1 ), F2 (x2 ))                        (2.4)
for every x1 , x2 ∈ R. If F1 and F2 are continuous, then C is unique. Otherwise,
C is uniquely determined on Range F1 × Range F2 . On the other hand, if C is
a copula and F1 and F2 are distribution functions, then the function H defined
by (2.4) is a joint distribution function with margins F1 and F2 .

It is shown in Nelsen (1999) that H has margins F1 and F2 that are given by
        def                              def
F1 (x1 ) = H(x1 , +∞) and F2 (x2 ) = H(+∞, x2 ), respectively. Furthermore,
F1 and F2 themselves are distribution functions. With Sklar’s Theorem, the
use of the name “copula” becomes obvious. It was chosen by Sklar (1996)
to describe “a function that links a multidimensional distribution to its one-
dimensional margins” and appeared in mathematical literature for the first
time in Sklar (1959).


2.1.3     Examples of Copulas

Product Copula The structure of independence is especially important for
applications.

DEFINITION 2.2 Two random variables R1 and R2 are independent if and
only if the product of their distribution functions F1 and F2 equals their joint
distribution function H,
                H(r1 , r2 ) = F1 (r1 ) · F2 (r2 )      for all      r1 , r 2 ∈ R .   (2.5)

Thus, we obtain the independence copula C = Π by
                                                       n
                                                       Y
                               Π(u1 , . . . , un ) =         ui ,
                                                       i=1
38             2     Applications of Copulas for the Calculation of Value-at-Risk


which becomes obvious from the following theorem:

THEOREM 2.2 Let R1 and R2 be random variables with continuous distri-
bution functions F1 and F2 and joint distribution function H. Then R1 and
R2 are independent if and only if CR1 R2 = Π.

From Sklar’s Theorem we know that there exists a unique copula C with
             P(R1 ≤ r1 , R2 ≤ r2 ) = H(r1 , r2 ) = C(F1 (r1 ), F2 (r2 )) .       (2.6)
Independence can be seen using Equation (2.4) for the joint distribution func-
tion H and the definition of Π,
                H(r1 , r2 ) = C(F1 (r1 ), F2 (r2 )) = F1 (r1 ) · F2 (r2 ) .      (2.7)


Gaussian Copula The second important copula that we want to investigate
is the Gaussian or normal copula,
                                 Z Φ−1
                                    1 (u)
                                          Z Φ−1
                                             2 (v)
                Gauss        def
              Cρ      (u, v) =                     fρ (r1 , r2 )dr2 dr1 , (2.8)
                                    −∞        −∞

see Embrechts, McNeil and Straumann (1999). In (2.8), fρ denotes the bivariate
normal density function with correlation ρ for n = 2. The functions Φ1 , Φ2
in (2.8) refer to the corresponding one-dimensional, cumulated normal density
functions of the margins.
In the case of vanishing correlation, ρ = 0, the Gaussian copula becomes
                              Z Φ1−1 (u)             Z Φ−1
                                                        2 (v)
             Gauss
           C0      (u, v) =              f1 (r1 )dr1          f2 (r2 )dr2
                                    −∞                    −∞
                              = uv                                               (2.9)
                              = Π(u, v)      if ρ = 0 .
Result (2.9) is a direct consequence of Theorem 2.2.
As Φ1 (r1 ), Φ2 (r2 ) ∈ [0, 1], one can replace u, v in (2.8) by Φ1 (r1 ), Φ2 (r2 ). If
one considers r1 , r2 in a probabilistic sense, i.e. r1 and r2 being values of two
random variables R1 and R2 , one obtains from (2.8)
                   CρGauss (Φ1 (r1 ), Φ2 (r2 )) = P(R1 ≤ r1 , R2 ≤ r2 ) .       (2.10)

In other words: CρGauss (Φ1 (r1 ), Φ2 (r2 )) is the binormal cumulated probability
function.
2.1   Copulas                                                                39


Gumbel-Hougaard Copula Next, we consider the Gumbel-Hougaard family of
copulas, see Hutchinson (1990). A discussion in Nelsen (1999) shows that Cθ
is suited to describe bivariate extreme value distributions. It is given by the
function                        n                      1/θ o
                          def
                Cθ (u, v) = exp − (− ln u)θ + (− ln v)θ        .          (2.11)
The parameter θ may take all values in the interval [1, ∞).
For θ = 1, expression (2.11) reduces to the product copula, i.e. C1 (u, v) =
Π(u, v) = u v. For θ → ∞ one finds for the Gumbel-Hougaard copula
                                θ→∞                def
                      Cθ (u, v) −→ min(u, v) = M (u, v).
It can be shown that M is also a copula. Furthermore, for any given copula C
one has C(u, v) ≤ M (u, v), and M is called the Fréchet-Hoeffding upper bound.
                                          def
The two-dimensional function W (u, v) = max(u+v−1, 0) defines a copula with
W (u, v) ≤ C(u, v) for any other copula C. W is called the Fréchet-Hoeffding
lower bound.


2.1.4    Further Important Properties of Copulas

In this section we focus on the properties of copulas. The theorem we will
present next establishes the continuity of copulas via a Lipschitz condition on
[0, 1] × [0, 1]:

THEOREM 2.3 Let C be a copula. Then for every u1 , u2 , v1 , v2 ∈ [0, 1]:
                |C(u2 , v2 ) − C(u1 , v1 )| ≤ |u2 − u1 | + |v2 − v1 | .   (2.12)

From (2.12) it follows that every copula C is uniformly continuous on its do-
main. A further important property of copulas concerns the partial derivatives
of a copula with respect to its variables:

THEOREM 2.4 Let C be a copula. For every u ∈ [0, 1], the partial derivative
∂ C/∂ v exists for almost every v ∈ [0, 1]. For such u and v one has
                                    ∂
                               0≤      C(u, v) ≤ 1 .                      (2.13)
                                    ∂v
The analogous statement is true for the partial derivative ∂ C/∂ u.
                                             def                             def
In addition, the functions u → Cv (u) = ∂ C(u, v)/∂ v and v → Cu (v) =
∂ C(u, v)/∂ u are defined and nondecreasing almost everywhere on [0,1].
40             2     Applications of Copulas for the Calculation of Value-at-Risk


To give an example of this theorem, we consider the partial derivative of the
Gumbel-Hougaard copula (2.11) with respect to u,

                     ∂                  n                        1/θ o
        Cθ,u (v) =      Cθ (u, v) = exp − (− ln u)θ + (− ln v)θ          ×
                     ∂u
                                                           − θ−1 (− ln u)θ−1
                                     (− ln u)θ + (− ln v)θ
                                                              θ
                                                                              . (2.14)
                                                                       u
Note that for u ∈ (0, 1) and for all θ ∈ R where θ > 1, Cθ,u is a strictly
                                                             −1
increasing function of v. Therefore the inverse function Cθ,u   is well defined.
                                           −1
However, as one might guess from (2.14), Cθ,u can not be calculated analytically
so that some kind of numerical algorithm has to be used for this task. As Cθ
is symmetric in u and v, the partial derivative of Cθ with respect to v shows
an identical behaviour for the same set of parameters.
We will end this section with a statement on the behaviour of copulas under
strictly monotone transformations of random variables.

THEOREM 2.5 Let R1 and R2 be random variables with continuous distri-
bution functions and with copula CR1 R2 . If α1 and α2 are strictly increasing
functions on Range R1 and Range R2 , then Cα1 (R1 ) α2 (R2 ) = CR1 R2 . In other
words: CR1 R2 is invariant under strictly increasing transformations of R1 and
R2 .


2.2      Computing Value-at-Risk with Copulas
Now that we have given the most important properties of copulas, we turn to
the practical question of how to compute the Value-at-Risk of a portfolio using
copulas. The following steps need to be performed:


2.2.1     Selecting the Marginal Distributions

The copula method works with any given marginal distribution, i.e. it does
not restrict the choice of margins. However, we will use normal margins for
simplicity and in order to allow a comparison with standard VaR methods.
2.2    Computing Value-at-Risk with Copulas                                          41


2.2.2      Selecting a Copula

A wide variety of copulas exists, mainly for the two dimensional case (Nelsen
(1999)). In our numerical tests, we will use some of the copulas presented
in Table 4.1 of Nelsen (1999) in our experiments for comparison which are
implemented in the function


      C = VaRcopula(uv,theta,0,copula)
           returns Cθ (u, v) for copula copula with parameter θ = theta. uv
           is a n × 2 vector of coordinates, where the copula is calculated.

For easy reference the implemented copulas are given in Table 2.1.


2.2.3      Estimating the Copula Parameters

After selecting a copula we fit the copula to a time series
                                                            (t)
                    s = s(1) , . . . , s(T ) with s(t) = (s1 , . . . , s(t)
                                                                        n )

for t ∈ 1, . . . , T . For simplicity we assume that the s(t) are realizations of i.i.d.
random variables S (t) . The first step will be to determine the parameters of
the marginal distributions. In the numerical example we will use the normal
distribution N(0, σi2 ), and estimate the volatility σi using an equally weighted
                                 1
                                     PT      (t) 2               (t)        (t) (t−1)
volatility estimator σ̂i2 = T −1       t=2 (ri ) of the returns ri = log(si /si        )
for simplicity. The marginal distributions of the risk factors are then log-
normal. The remaining task is to estimate the copula parameters. In the
XploRe VaR quantlib this is done by the function


      res = VaRfitcopula(history,copula,method)
           fits the copula to the history using fitting function method.
           The result res is a list containing the estimates of the copula
           parameter together with there standard deviations.



Least Square Fit The main idea of the least square fit is that the cumulative
                       (C)
distribution function Fθ (x) defined by the copula C should fit the sample
42            2   Applications of Copulas for the Calculation of Value-at-Risk


     #    Cθ (u,v) =                                        θ∈
                  −θ      −θ    −1/θ
     1    max [u + v − 1]              ,0                     [−1, ∞)\{0}
                                                  
     2    max 1 − [(1 − u)θ + (1 − v)θ − 1]1/θ , 0            [1, ∞)
               uv
     3    1−θ(1−u)(1−v)                                       [−1, 1)
                          θ            θ 1/θ
                                               
     4    exp −[(− ln u) + (− ln v) ]                         [1, ∞)
                         −θu       −θv
                                          
     5    − θ1 ln 1 + (e −1)(e −θ
                              e −1
                                       −1)
                                                              (−∞, ∞)\{0}
               h                                      i1/θ
     6    1 − (1 − u) + (1 − v)θ − (1 − u)θ (1 − v)θ )
                       θ
                                                              [1, ∞)
                h                            i
     7    max θuv + (1 − θ)(u + v − 1), 0                     (0, 1]
                h 2                        i
     8    max θ2θ−(θ−1)
                    uv−(1−u)(1−v)
                          2 (1−u)(1−v) , 0                    (0, 1]
     9    uv exp(−θ ln u ln v)                                (0, 1]
               h                     i1/θ
     10   uv/ 1 + (1 − uθ )(1 − v θ )                         (0, 1]
                 h                        i1/θ 
     11   max uθ v θ − 2(1 − uθ )(1 − v θ )     ,0            (0, 1/2]
                 h                       i1/θ −1
     12      1 + (u−1 − 1)θ + (v −1 − 1)θ                     [1, ∞)
                     h                           i1/θ 
     13   exp 1 − (1 − ln u)θ + (1 − ln v)θ − 1               (0, ∞)
                 h                           i1/θ −θ
     14      1 + (u−1/θ − 1)θ + (v −1/θ − 1)θ                 [1, ∞)
                 n      h                        i1/θ oθ 
     15   max 1 − (1 − u1/θ )θ + (1 − v 1/θ )θ           ,0   [1, ∞)
           1
                   √        
     16                 2                                     [0, ∞)
           2 S +      S + 4θ
                                           
          ,→ S = u + v − 1 − θ u1 + v1 − 1
                                                 1
                                                θ θ
     21   1 − 1 − max(S(u) + S(v) − 1, 0)                     [1, ∞)
                        h           i1/θ
          ,→ S(u) = 1 − (1 − u)θ

            Table 2.1. Copulas implemented in the VaR quantlib.

                                 PT      (t)             (t)
distribution function S(x) = T1 t=1 1(s1 ≤ x1 , . . . , sn ≤ xn ) as close as
possible in the mean square sense. The function 1(A) is the indicator function
of the event A. In order to solve the least square problem on a computer, a
                                  (C)
discretization of the support of Fθ is needed, for which the sample set s(t)
2.2   Computing Value-at-Risk with Copulas                                      43


seems to be well suited. The copula parameter estimators are therefore the
solution of the following minimization problem:
                T                                   2
                X      (c)                       1
          min         Fθ (s(t) ) − S(s(t) ) +             subject to θ ∈ DC .
                t=1
                                                2T

using the Newton method on the first derivative (method = 1). The addition of
 1                                          1
2T avoids problems that result from the T jumps at the sample points. While
this method is inherently numerically stable, it will produce unsatisfactory
results when applied to risk management problems, because the minimization
will fit the copula best where there are the most datapoints, and not necessarily
at the extreme ends of the distribution. While this can be somewhat rectified
by weighting schemes, the maximum likelihood method does this directly.


Maximum Likelihood The likelihood function of a probability density func-
      (C)                                                        QT      (C)
tion fθ (x) evaluated for a time series s is given by l(θ) = t=1 fθ (st ).
The maximum likelihood method states that the copula parameters at which l
reaches its maximum are good estimators of the “real” copula parameters. In-
stead of the likelihood function, it is customary to maximize the log-likelihood
function
                           T                
                                     (C)
                          X
                     max      log fθ (x(t) ) s.t. θ ∈ DC .
                           t=1

Maximization can be performed on the copula function itself by the Newton
method on the first derivative (method=2) or by an interval search (method=3).
The true maximum likelihood method is implemented in method=4 using an
interval search. Depending on the given copula it may not be possible to
                                           (C)
maximize the likelihood function (i.e. if fθ (s(t) )) = 0 for some t and all θ. In
this case the least square fit may be used as a fallback.


2.2.4    Generating Scenarios - Monte Carlo Value-at-Risk

Assume now that the copula C has been selected. For risk management pur-
poses, we are interested in the Value-at-Risk of a position. While analytical
methods for the computation of the Value-at-Risk exist for the multivariate
normal distribution (i.e. for the Gaussian copula), we will in general have
to use numerical simulations for the computation of the VaR. To that end,
we need to generate pairs of random variables (X1 , X2 ) ∼ F (C) , which form
44             2   Applications of Copulas for the Calculation of Value-at-Risk


scenarios of possible changes of the risk factor. The Monte Carlo method gen-
erates a number N of such scenarios, and evaluates the present value change of
a portfolio under each scenario. The sample α−quantile is then the one period
Value-at-Risk with confidence α.
Our first task is to generate pairs (u, v) of observations of U (0, 1) distributed
random variables U and V whose joint distribution function is C(u, v). To
reach this goal we use the method of conditional distributions. Let cu denote
the conditional distribution function for the random variable V at a given value
u of U ,
                                  def
                           cu (v) = P(V ≤ v, U = u) .                        (2.15)
From (2.6) we have

                      C(u + ∆u, v) − C(u, v)   ∂
       cu (v) = lim                          =    C(u, v) = Cu (v) ,        (2.16)
               ∆u→0           ∆u               ∂u
where Cu is the partial derivative of the copula. From Theorem 2.4 we know
that cu (v) is nondecreasing and exists for almost all v ∈ [0, 1].
For the sake of simplicity, we assume from now on that cu is strictly increasing
and exists for all v ∈ [0, 1]. If these conditions are not fulfilled, one has to
replace the term “inverse” in the remaining part of this section by “quasi-
inverse”, see Nelsen (1999).
With result (2.16) at hand we can now use the method of variable transforma-
tion to generate the desired pair (u, v) of pseudo random numbers (PRN). The
algorithm consists of the following two steps:

     • Generate two independent uniform PRNs u, w ∈ [0, 1]. u is already the
       first number we are looking for.
     • Compute the inverse function of cu . In general, it will depend on the
       parameters of the copula and on u, which can be seen, in this context,
       as an additional parameter of cu . Set v = c−1
                                                   u (w) to obtain the second
       PRN.

It may happen that the inverse function cannot be calculated analytically. In
this case one has to use a numerical algorithm to determine v. This situation
occurs for example when Gumbel-Hougaard copulas are used.
2.3    Examples                                                                 45



      v = VaRcopula(uv,theta,-1,copula)
           returns inverse v = c−1
                                u such that res = cu (u, v) for copula copula
           with parameter θ = theta. uv is a n × 2 vector of coordinates,
           where the copula is calculated.


Finally we determine x1 = Φ−1                 −1
                             1 (u) and x2 = Φ2 (v) to obtain one pair (x1 , x2 )
of random variables with the desired copula dependence structure. For a Monte
Carlo simulation, this procedure is performed N times to yield a sample X =
(x(1) , . . . , x(N ) ).


      X = VaRsimcopula(N, sigma 1, sigma 2, theta, copula)
           returns a sample of size N for the copula copula with parameter
           θ = theta and normal distributions with standard deviations
           σ1 = sigma 1, σ2 = sigma 2.

If we assume a linear position a with holdings a1 , . . . , aP
                                                             n in each of the risk
                                                              n
factors, the change in portfolio value is approximately i=1 ai · xi . Using a
first order approximation, this yields a sample Value-at-Risk with confidence
level α.


      VaR = VaRestMCcopula(history,a,copula,opt)
           fits the copula copula to the history history and returns the
           N-sample Monte Carlo Value-at-Risk with confidence level α =
           alpha for position a. N and alpha are contained in list opt.



2.3       Examples
In this section we show possible applications for the Gumbel-Hougaard copula,
i.e. for copula = 4. First we try to visualize C4 (u, v) in Figure 2.1.
                                                                XFGaccvar1.xpl
46            2   Applications of Copulas for the Calculation of Value-at-Risk




                                 (0.0,0.0,1.0)
                                                       C(u,v)
                                   0.8


                                                       v
                                                                 u
                                  0.5




                                 0.2

             (0.0,1.0,0.0)
                   0.8
                     0.5
                           0.2

                       (0.0,0.0,0.0)             0.2       0.5   0.8   (1.0,0.0,0.0)



                           Figure 2.1. Plot of C4 (u, v) for θ = 3



In the next Figure 2.2 we show an example of copula sampling for fixed pa-
rameters σ1 = 1, σ2 = 1, θ = 3 for copulas numbered 4, 5, 6, and 12, see Table
2.1.

                                                                               XFGaccvar2.xpl


In order to investigate the connection between the Gaussian and Copula based
dependency structure we plot θ against correlation ρ in Figure 2.3. We assume
that tmin and tmax hold the minimum respectively maximum possible θ val-
ues. Those can also be obtained by tmin=VaRcopula(0,0,0,8,copula) and
tmax=VaRcopula(0,0,0,9,copula). Care has to be taken that the values are
finite, so we have set the maximum absolute θ bound to 10.
                                                                               XFGaccvar3.xpl
2.4   Results                                                                                       47



                                  Copula4                                      Copula5




                                                           2
          0  2
         v




                                                          v
                                                          0
             -2




                                                           -2

                       -4    -2           0       2                  -2            0         2
                                     u                                            u
                                  Copula6                                  Copula12
                                                           3
                                                           2
             2




                                                           1
             0




                                                           0
         v




                                                          v
                                                           -1
             -2




                                                           -2
                                                           -3




                  -3    -2   -1       0       1   2   3         -3   -2   -1       0     1   2
                                     u                                            u


          Figure 2.2. 10000-sample output for σ1 = 1, σ2 = 1, θ = 3



2.4     Results
To judge the effectiveness of a Value-at-Risk model, it is common to use back-
testing. A simple approach is to compare the predicted and empirical number
of outliers, where the actual loss exceeds the VaR. We implement this test in
a two risk factor model using real life time series, the FX rates USD/EUR
and GBP/EUR, respectively their DEM counterparts before the introduction
of the Euro. Our backtesting investigation is based on a time series ranging
from 2 Jan. 1991 until 9 Mar. 2000 and simple linear portfolios i = 1, . . . , 4:

                       Value(ai , t)[EU R] = ai,1 × USDt − ai,2 × GBPt .                         (2.17)
48            2      Applications of Copulas for the Calculation of Value-at-Risk




                                1
                  Correlation
                                0.5
                                0




                                      2   4           6   8   10
                                              theta


              Figure 2.3. Plot of θ against correlation ρ for C4 .



The Value-at-Risk is computed with confidence level 1−αi (α1 = 0.1, α2 = 0.05,
and α3 = 0.01) based on a time series for the statistical estimators of length
T = 250 business days. The actual next day value change of the portfolio is
compared to the VaR estimate. If the portfolio loss exceeds the VaR estimate,
an outlier has occurred. This procedure is repeated for each day in the time
series.
The prediction error as the absolute difference of the relative number of out-
liers α̂ to the predicted number α is averaged over different portfolios and con-
fidence levels. The average over the portfolios (a1 = (−3, −2) a2 = (+3, −2)
a3 = (−3, +2) a4 = (+3, +2)) uses equal weights, while the average over the
confidence levels i emphasizes the tails by a weighting scheme wi (w1 = 1,
w2 = 5, w3 = 10). Based on the result, an overall error and a relative ranking
of the different methods is obtained (see Table 2.2).
As benchmark methods for Value-at-Risk we use the variance-covariance (vcv)
method and historical simulation (his), for details see Deutsch and Eller (1999).
The variance covariance method is an analytical method which uses a multi-
variate normal distribution. The historical simulation method not only includes
2.4    Results                                                                                     49


the empirical copula, but also empirical marginal distributions. For the cop-
ula VaR methods, the margins are assumed to be normal, the only difference
between the copula VaR’s is due to different dependence structures (see Table
2.1). Mainly as a consequence of non-normal margins, the historical simulation
has the best backtest results. However, even assuming normal margins, certain
copulas (5, 12–14) give better backtest results than the traditional variance-
covariance method.
                                                Copula as in Table 2.1
α= a= his vcv 1          2    3    4    5    6    7    8    9 10 11 12 13 14 15 16 21
.10 a1 .103 .084 .111 .074 .100 .086 .080 .086 .129 .101 .128 .129 .249 .090 .087 .084 .073 .104 .080
.05 a1 .053 .045 .066 .037 .059 .041 .044 .040 .079 .062 .076 .079 .171 .052 .051 .046 .038 .061 .041
.01 a1 .015 .019 .027 .013 .027 .017 .020 .016 .032 .027 .033 .034 .075 .020 .022 .018 .015 .027 .018
.10 a2 .092 .078 .066 .064 .057 .076 .086 .062 .031 .049 .031 .031 .011 .086 .080 .092 .085 .065 .070
.05 a2 .052 .044 .045 .023 .033 .041 .049 .031 .012 .024 .012 .013 .003 .051 .046 .054 .049 .039 .032
.01 a2 .010 .011 .016 .002 .007 .008 .009 .006 .002 .002 .002 .002 .001 .015 .010 .018 .025 .011 .005
.10 a3 .099 .086 .126 .086 .064 .088 .096 .073 .032 .054 .033 .031 .016 .094 .086 .105 .133 .070 .086
.05 a3 .045 .048 .093 .047 .032 .052 .050 .040 .017 .026 .017 .016 .009 .049 .047 .058 .101 .034 .050
.01 a3 .009 .018 .069 .018 .012 .018 .016 .012 .007 .009 .006 .006 .002 .018 .015 .018 .073 .013 .020
.10 a4 .103 .090 .174 .147 .094 .095 .086 .103 .127 .094 .129 .127 .257 .085 .085 .085 .136 .088 .111
.05 a4 .052 .058 .139 .131 .056 .060 .058 .071 .084 .068 .084 .085 .228 .053 .054 .051 .114 .053 .098
.01 a4 .011 .020 .098 .108 .017 .025 .025 .035 .042 .056 .041 .042 .176 .016 .017 .016 .087 .015 .071
.10 Avg .014 .062 .145 .123 .085 .055 .052 .082 .193 .104 .194 .194 .478 .045 .061 .045 .110 .082 .075
.05 Avg .011 .021 .154 .124 .051 .030 .016 .060 .134 .080 .132 .136 .387 .006 .012 .017 .127 .041 .075
.01 Avg .007 .029 .169 .117 .028 .031 .032 .036 .065 .071 .065 .067 .249 .029 .025 .029 .160 .026 .083
Avg Avg .009 .028 .163 .120 .039 .032 .028 .047 .095 .076 .094 .096 .306 .022 .023 .026 .147 .034 .080
Rank      1    6 18 16 9           7    5 10 14 11 13 15 19 2                   3    4 17 8 12


      Table 2.2. Relative number of backtest outliers α̂ for the VaR with
      confidence 1 − α, weighted average error |α̂ − α| and error ranking.
        XFGaccvar4.xpl




Bibliography
H.-P. Deutsch, R. Eller (1999). Derivatives and Internal Models. Macmillan
      Press.
T. P. Hutchinson, C. D. Lai (1990). Continuous Bivariate Distributions, Em-
      phasising Applications. Rumsby Scientific Publishing, Adelaide.
P. Embrechts, A. McNeil, D. Straumann (1999).Correlation: Pitfalls and Al-
     ternatives. RISK, May, pages 69-71.
P. Embrechts, A. McNeil, D. Straumann (1999).Correlation and Dependence
     in Risk Management: Properties and Pitfalls. Preprint ETH Zürich.
50            2   Applications of Copulas for the Calculation of Value-at-Risk


R. B. Nelsen (1999). An Introduction to Copulas. Springer, New York.
A. Sklar (1959). Fonctions de répartition à n dimensions et leurs marges. Publ.
      Inst. Statist. Univ. Paris 8, pages 229-231.
A. Sklar (1996). Random Variables, Distribution Functions, and Copulas – a
      Personal Look Backward and Forward published in Distributions with
      Fixed Marginals and Related Topics, edited by L. Rüschendorf, B.
      Schweizer, and M.D. Taylor, Institute of Mathematical Statistics, Hay-
      ward, CA, pages 1-14.
3 Quantification of Spread Risk by
  Means of Historical Simulation
                                        Christoph Frisch and Germar Knöchlein




3.1     Introduction
Modeling spread risk for interest rate products, i.e., changes of the yield differ-
ence between a yield curve characterizing a class of equally risky assets and a
riskless benchmark curve, is a challenge for any financial institution seeking to
estimate the amount of economic capital utilized by trading and treasury activ-
ities. With the help of standard tools this contribution investigates some of the
characteristic features of yield spread time series available from commercial
data providers. From the properties of these time series it becomes obvious
that the application of the parametric variance-covariance-approach for esti-
mating idiosyncratic interest rate risk should be called into question. Instead
we apply the non-parametric technique of historical simulation to synthetic
zero-bonds of different riskiness, in order to quantify general market risk and
spread risk of the bond. The quality of value-at-risk predictions is checked by a
backtesting procedure based on a mark-to-model profit/loss calculation for the
zero-bond market values. From the backtesting results we derive conclusions
for the implementation of internal risk models within financial institutions.


3.2     Risk Categories – a Definition of Terms
For the analysis of obligor-specific and market-sector-specific influence on bond
price risk we make use of the following subdivision of “price risk”, Gaumert
(1999), Bundesaufsichtsamt für das Kreditwesen (2001).
52          3 Quantification of Spread Risk by Means of Historical Simulation


     1. General market risk: This risk category comprises price changes of a
        financial instrument, which are caused by changes of the general mar-
        ket situation. General market conditions in the interest rate sector are
        characterized by the shape and the moves of benchmark yield curves,
        which are usually constructed from several benchmark instruments. The
        benchmark instruments are chosen in such a way so that they allow for a
        representative view on present market conditions in a particular market
        sector.
     2. Residual risk: Residual risk characterizes the fact that the actual price
        of a given financial instrument can change in a way different from the
        changes of the market benchmark (however, abrupt changes which are
        caused by events in the sphere of the obligor are excluded from this risk
        category). These price changes cannot be accounted for by the volatility
        of the market benchmark. Residual risk is contained in the day-to-day
        price variation of a given instrument relative to the market benchmark
        and, thus, can be observed continuously in time. Residual risk is also
        called idiosyncratic risk.
     3. Event risk: Abrupt price changes of a given financial instrument relative
        to the benchmark, which significantly exceed the continuously observable
        price changes due to the latter two risk categories, are called event risk.
        Such price jumps are usually caused by events in the sphere of the obligor.
        They are observed infrequently and irregularly.

Residual risk and event risk form the two components of so-called specific price
risk or specific risk — a term used in documents on banking regulation, Bank for
International Settlements (1998a), Bank for International Settlements (1998b)
— and characterize the contribution of the individual risk of a given financial
instrument to its overall risk.
The distinction between general market risk and residual risk is not unique but
depends on the choice of the benchmark curve, which is used in the analysis
of general market risk: The market for interest rate products in a given cur-
rency has a substructure (market-sectors), which is reflected by product-specific
(swaps, bonds, etc.), industry-specific (bank, financial institution, retail com-
pany, etc.) and rating-specific (AAA, AA, A, BBB, etc.) yield curves. For the
most liquid markets (USD, EUR, JPY), data for these sub-markets is available
from commercial data providers like Bloomberg. Moreover, there are addi-
tional influencing factors like collateral, financial restrictions etc., which give
3.3   Descriptive Statistics of Yield Spread Time Series                      53


rise to further variants of the yield curves mentioned above. Presently, however,
hardly any standardized data on these factors is available from data providers.
The larger the universe of benchmark curves a bank uses for modeling its
interest risk, the smaller is the residual risk. A bank, which e.g. only uses
product-specific yield curves but neglects the influence of industry- and rating-
specific effects in modelling its general market risk, can expect specific price
risk to be significantly larger than in a bank which includes these influences
in modeling general market risk. The difference is due to the consideration of
product-, industry- and rating-specific spreads over the benchmark curve for
(almost) riskless government bonds. This leads to the question, whether the
risk of a spread change, the spread risk, should be interpreted as part of the
general market risk or as part of the specific risk. The uncertainty is due to
the fact that it is hard to define what a market-sector is. The definition of
benchmark curves for the analysis of general market risk depends, however,
critically on the market sectors identified.
We will not further pursue this question in the following but will instead inves-
tigate some properties of this spread risk and draw conclusions for modeling
spread risk within internal risk models. We restrict ourselves to the continuous
changes of the yield curves and the spreads, respectively, and do not discuss
event risk. In this contribution different methods for the quantification of the
risk of a fictive USD zero bond are analyzed. Our investigation is based on
time series of daily market yields of US treasury bonds and US bonds (banks
and industry) of different credit quality (rating) and time to maturity.


3.3      Descriptive Statistics of Yield Spread Time
         Series
Before we start modeling the interest rate and spread risk we will investigate
some of the descriptive statistics of the spread time series. Our investigations
are based on commercially available yield curve histories. The Bloomberg
dataset we use in this investigation consists of daily yield data for US trea-
sury bonds as well as for bonds issued by banks and financial institutions with
ratings AAA, AA+/AA, A+, A, A− (we use the Standard & Poor‘s naming
convention) and for corporate/industry bonds with ratings AAA, AA, AA−,
A+, A, A−, BBB+, BBB, BBB−, BB+, BB, BB−, B+, B, B−. The data we
use for the industry sector covers the time interval from March 09 1992 to June
08 2000 and corresponds to 2147 observations. The data for banks/financial
54         3 Quantification of Spread Risk by Means of Historical Simulation


institutions covers the interval from March 09 1992 to September 14 1999 and
corresponds to 1955 observations. We use yields for 3 and 6 month (3M, 6M)
as well as 1, 2, 3, 4, 5, 7, and 10 year maturities (1Y, 2Y, 3Y, 4Y, 5Y, 7Y, 10Y).
Each yield curve is based on information on the prices of a set of representative
bonds with different maturities. The yield curve, of course, depends on the
choice of bonds. Yields are option-adjusted but not corrected for coupon pay-
ments. The yields for the chosen maturities are constructed by Bloomberg’s
interpolation algorithm for yield curves. We use the USD treasury curve as a
benchmark for riskless rates and calculate yield spreads relative to the bench-
mark curve for the different rating categories and the two industries. We correct
the data history for obvious flaws using complementary information from other
data sources. Some parts of our analysis in this section can be compared with
the results given in Kiesel, Perraudin and Taylor (1999).


3.3.1     Data Analysis with XploRe

We store the time series of the different yield curves in individual files. The file
names, the corresponding industries and ratings and the names of the matrices
used in the XploRe code are listed in Table 3.2. Each file contains data for
the maturities 3M to 10Y in columns 4 to 12. XploRe creates matrices from
the data listed in column 4 of Table 3.2 and produces summary statistics for
the different yield curves. As example files the data sets for US treasury and
industry bonds with rating AAA are provided. The output of the summarize
command for the INAAA curve is given in Table 3.1.
Contents of summ

         Minimum     Maximum        Mean      Median   Std.Error
----------------------------------------------------------------
3M          3.13        6.93      5.0952        5.44     0.95896
6M          3.28        7.16      5.2646        5.58     0.98476
1Y          3.59        7.79      5.5148        5.75     0.95457
2Y          4.03        8.05      5.8175        5.95     0.86897
3Y           4.4        8.14      6.0431         6.1     0.79523
4Y          4.65        8.21      6.2141        6.23     0.74613
5Y          4.61        8.26      6.3466        6.36     0.72282
7Y          4.75         8.3      6.5246        6.52     0.69877
10Y         4.87        8.36      6.6962         6.7     0.69854

     Table 3.1.     Output          of   summarize       for   the   INAAA   curve.
       XFGsummary.xpl

The long term means are of particular interest. Therefore, we summarize them
in Table 3.3. In order to get an impression of the development of the treasury
3.3   Descriptive Statistics of Yield Spread Time Series                     55


          Industry       Rating      File Name         Matrix Name
          Government     riskless    USTF              USTF
          Industry       AAA         INAAA             INAAA
          Industry       AA          INAA2.DAT         INAA2
          Industry       AA-         INAA3.DAT         INAA3
          Industry       A+          INA1.DAT          INA1
          Industry       A           INA2.DAT          INA2
          Industry       A-          INA3.DAT          INA3
          Industry       BBB+        INBBB1.DAT        INBBB1
          Industry       BBB         INBBB2.DAT        INBBB2
          Industry       BBB-        INBBB3.DAT        INBBB3
          Industry       BB+         INBB1.DAT         INBB1
          Industry       BB          INBB2.DAT         INBB2
          Industry       BB-         INBB3.DAT         INBB3
          Industry       B+          INB1.DAT          INB1
          Industry       B           INB2.DAT          INB2
          Industry       B-          INB3.DAT          INB3
          Bank           AAA         BNAAA.DAT         BNAAA
          Bank           AA+/AA      BNAA12.DAT        BNAA12
          Bank           A+          BNA1.DAT          BNA1
          Bank           A           BNA2.DAT          BNA2
          Bank           A-          BNA3.DAT          BNA3

                           Table 3.2. Data variables

yields in time, we plot the time series for the USTF 3M, 1Y, 2Y, 5Y, and 10Y
yields. The results are displayed in Figure 3.1,      XFGtreasury.xpl. The
averaged yields within the observation period are displayed in Figure 3.2 for
USTF, INAAA, INBBB2, INBB2 and INB2, XFGyields.xpl.
In the next step we calculate spreads relative to the treasury curve by sub-
tracting the treasury curve from the rating-specific yield curves and store them
to variables SINAAA, SINAA2, etc. For illustrative purposes we display time
series of the 1Y, 2Y, 3Y, 5Y, 7Y, and 10Y spreads for the curves INAAA, INA2,
INBBB2, INBB2, INB2 in Figure 3.3, XFGseries.xpl.
We run the summary statistics to obtain information on the mean spreads.
Our results, which can also be obtained with the mean command, are collected
in Table 3.4, XFGmeans.xpl.
56        3 Quantification of Spread Risk by Means of Historical Simulation


     Curve     3M     6M      1Y     2Y     3Y     4Y      5Y      7Y     10Y
     USTF      4.73   4.92   5.16   5.50   5.71   5.89    6.00    6.19    6.33
     INAAA     5.10   5.26   5.51   5.82   6.04   6.21    6.35    6.52    6.70
     INAA2     5.19   5.37   5.59   5.87   6.08   6.26    6.39    6.59    6.76
     INAA3     5.25      -   5.64   5.92   6.13   6.30    6.43    6.63    6.81
     INA1      5.32   5.50   5.71   5.99   6.20   6.38    6.51    6.73    6.90
     INA2      5.37   5.55   5.76   6.03   6.27   6.47    6.61    6.83    7.00
     INA3         -      -   5.84   6.12   6.34   6.54    6.69    6.91    7.09
     INBBB1    5.54   5.73   5.94   6.21   6.44   6.63    6.78    7.02    7.19
     INBBB2    5.65   5.83   6.03   6.31   6.54   6.72    6.86    7.10    7.27
     INBBB3    5.83   5.98   6.19   6.45   6.69   6.88    7.03    7.29    7.52
     INBB1     6.33   6.48   6.67   6.92   7.13   7.29    7.44    7.71    7.97
     INBB2     6.56   6.74   6.95   7.24   7.50   7.74    7.97    8.34    8.69
     INBB3     6.98   7.17   7.41   7.71   7.99   8.23    8.46    8.79    9.06
     INB1      7.32   7.53   7.79   8.09   8.35   8.61    8.82    9.13    9.39
     INB2      7.80   7.96   8.21   8.54   8.83   9.12    9.37    9.68    9.96
     INB3      8.47   8.69   8.97   9.33   9.60   9.89   10.13   10.45   10.74
     BNAAA     5.05   5.22   5.45   5.76   5.99   6.20    6.36    6.60    6.79
     BNAA12    5.14   5.30   5.52   5.83   6.06   6.27    6.45    6.68    6.87
     BNA1      5.22   5.41   5.63   5.94   6.19   6.39    6.55    6.80    7.00
     BNA2      5.28   5.47   5.68   5.99   6.24   6.45    6.61    6.88    7.07
     BNA3      5.36   5.54   5.76   6.07   6.32   6.52    6.68    6.94    7.13

          Table 3.3. Long term mean for different USD yield curves


Now we calculate the 1-day spread changes from the observed yields and store
them to variables DASIN01AAA, etc. We run the descriptive routine to cal-
culate the first four moments of the distribution of absolute spread changes.
Volatility as well as skewness and kurtosis for selected curves are displayed in
Tables 3.5, 3.6 and 3.7.

                                                                 XFGchange.xpl


For the variable DASIN01AAA[,12] (the 10 year AAA spreads) we demonstrate
the output of the descriptive command in Table 3.8.
Finally we calculate 1-day relative spread changes and run the descriptive
command. The results for the estimates of volatility, skewness and kurtosis are
summarized in Tables 3.9, 3.10 and 3.11.                     XFGrelchange.xpl
3.3   Descriptive Statistics of Yield Spread Time Series                                                    57


                                               US Treasury Yields (3M, 1Y, 2Y, 5Y, 10Y)
                             8
                             7
                             6
        Yield in %

                             5
                             4
                             3




                                  0             500                1000                1500          2000
                                                                   Day

                                 Figure 3.1. US Treasury Yields.                     XFGtreasury.xpl


                                              Yields for Different Risk Levels
                             8
        Average Yield in %

                             7
                             6
                             5




                                                                  5                                  10
                                                         Time to Maturity in Years

                                      Figure 3.2. Averaged Yields.                   XFGyields.xpl
58                            3 Quantification of Spread Risk by Means of Historical Simulation


                           1Y-Spread (AAA, A2, BBB2, BB2, B2)                              3Y-Spread (AAA, A2, BBB2, BB2, B2)                              7Y-Spread (AAA, A2, BBB2, BB2, B2)




                                                                                   5
                   5




                                                                                                                                                   5
                                                                                   4
                   4




                                                                                                                                                   4
                                                                                   3
                   3
     Spread in %




                                                                     Spread in %




                                                                                                                                     Spread in %

                                                                                                                                                   3
                   2




                                                                                   2




                                                                                                                                                   2
                   1




                                                                                   1




                                                                                                                                                   1
                   0




                                                                                   0




                                                                                                                                                   0
                       0      5         10          15          20                     0      5         10         15           20                     0       5         10         15           20
                                         Day*E2                                                          Day*E2                                                           Day*E2

                           2Y-Spread (AAA, A2, BBB2, BB2, B2)                              5Y-Spread (AAA, A2, BBB2, BB2, B2)                              10Y-Spread (AAA, A2, BBB2, BB2, B2)




                                                                                                                                                   6
                                                                                   5




                                                                                                                                                   5
                   4




                                                                                   4




                                                                                                                                                   4
                   3
     Spread in %




                                                                     Spread in %




                                                                                                                                     Spread in %
                                                                                   3




                                                                                                                                                   3
                   2




                                                                                   2




                                                                                                                                                   2
                   1




                                                                                   1




                                                                                                                                                   1
                   0




                                                                                                                                                   0
                       0      5         10          15          20                 0   0      5         10         15           20                     0       5         10         15           20
                                         Day*E2                                                          Day*E2                                                           Day*E2




                                             Figure 3.3. Credit Spreads.                                                        XFGseries.xpl



3.3.2                      Discussion of Results

Time Development of Yields and Spreads: The time development of US trea-
sury yields displayed in Figure 3.1 indicates that the yield curve was steeper
at the beginning of the observation period and flattened in the second half.
However, an inverse shape of the yield curve occurred hardly ever. The long
term average of the US treasury yield curve, the lowest curve in Figure 3.2,
also has an upward sloping shape.
The time development of the spreads over US treasury yields displayed in Fig-
ure 3.3 is different for different credit qualities. While there is a large variation
of spreads for the speculative grades, the variation in the investment grade sec-
tor is much smaller. A remarkable feature is the significant spread increase for
all credit qualities in the last quarter of the observation period which coincides
with the emerging market crises in the late 90s. The term structure of the long
term averages of the rating-specific yield curves is also normal. The spreads
over the benchmark curve increase with decreasing credit quality.
Mean Spread: The term structure of the long term averages of the rating-
specific yield curves, which is displayed in Figure 3.3, is normal (see also Ta-
ble 3.4). The spreads over the benchmark curve increase with decreasing credit
quality. For long maturities the mean spreads are larger than for intermediate
maturities as expected. However, for short maturities the mean spreads are
3.3   Descriptive Statistics of Yield Spread Time Series                         59


        Curve      3M     6M     1Y    2Y     3Y    4Y    5Y     7Y    10Y
        INAAA       36     35     35    31     33    31    35     33     37
        INAA2       45     45     43    37     37    36    40     39     44
        INAA3       52      -     48    42     42    40    44     44     49
        INA1        58     58     55    49     49    49    52     53     57
        INA2        63     63     60    53     56    57    62     64     68
        INA3         -      -     68    62     63    64    69     72     76
        INBBB1      81     82     78    71     72    74    79     83     86
        INBBB2      91     91     87    80     82    82    87     90     94
        INBBB3     110    106    103    95     98    98   104    110    119
        INBB1      160    156    151   142    141   140   145    151    164
        INBB2      183    182    179   173    179   185   197    215    236
        INBB3      225    225    225   221    228   233   247    259    273
        INB1       259    261    263   259    264   271   282    294    306
        INB2       306    304    305   304    311   322   336    348    363
        INB3       373    377    380   382    389   400   413    425    441
        BNAAA       41     39     38    33     35    35    41     43     47
        BNAA12      50     47     45    40     42    42    49     52     56
        BNA1        57     59     57    52     54    54    59     64     68
        BNA2        64     65     62    57     59    60    65     71     75
        BNA3        72     72     70    65     67    67    72     76     81

                  Table 3.4. Mean spread in basis points p.a.


larger compared with intermediate maturities.
Volatility: The results for the volatility for absolute 1-day spread changes in
basis points p.a. are listed in Table 3.5. From short to intermediate maturities
the volatilities decrease. For long maturities a slight volatility increase can be
observed compared to intermediate maturities. For equal maturities volatility
is constant over the investment grade ratings, while for worse credit qualities a
significant increase in absolute volatility can be observed. Volatility for relative
spread changes is much larger for short maturities than for intermediate and
long maturities. As in the case of absolute spread changes, a slight volatility
increase exists for the transition from intermediate to long maturities. Since
absolute spreads increase more strongly with decreasing credit quality than
absolute spread volatility, relative spread volatility decreases with decreasing
credit quality (see Table 3.9).
Skewness: The results for absolute 1-day changes (see Table 3.6) are all close to
zero, which indicates that the distribution of changes is almost symmetric. The
corresponding distribution of relative changes should have a positive skewness,
60        3 Quantification of Spread Risk by Means of Historical Simulation


       Curve       3M       6M       1Y      2Y       3Y      4Y    5Y    7Y      10Y
       INAAA        4.1      3.5     3.3     2.3      2.4     2.2   2.1   2.2      2.5
       INAA2        4.0      3.5     3.3     2.3      2.4     2.2   2.2   2.2      2.5
       INAA3        4.0        -     3.3     2.2      2.3     2.2   2.2   2.2      2.5
       INA1         4.0      3.7     3.3     2.3      2.4     2.2   2.2   2.2      2.6
       INA2         4.1      3.7     3.3     2.4      2.4     2.1   2.2   2.3      2.5
       INA3           -        -     3.4     2.4      2.4     2.2   2.2   2.3      2.6
       INBBB1       4.2      3.6     3.2     2.3      2.3     2.2   2.1   2.3      2.6
       INBBB2       4.0      3.5     3.4     2.3      2.4     2.1   2.2   2.3      2.6
       INBBB3       4.2      3.6     3.5     2.4      2.5     2.2   2.3   2.5      2.9
       INBB1        4.8      4.4     4.1     3.3      3.3     3.1   3.1   3.9      3.4
       INBB2        4.9      4.6     4.5     3.8      3.8     3.8   3.7   4.3      4.0
       INBB3        5.5      5.1     4.9     4.3      4.4     4.2   4.1   4.7      4.3
       INB1         6.0      5.2     4.9     4.5      4.5     4.4   4.4   4.9      4.6
       INB2         5.6      5.2     5.2     4.8      4.9     4.8   4.8   5.3      4.9
       INB3         5.8      6.1     6.4     5.1      5.2     5.1   5.1   5.7      5.3
       BNAAA        3.9      3.5     3.3     2.5      2.5     2.3   2.2   2.3      2.6
       BNAA12       5.4      3.6     3.3     2.4      2.3     2.2   2.1   2.3      2.6
       BNA1         4.1      3.7     3.2     2.1      2.2     2.1   2.0   2.2      2.6
       BNA2         3.8      3.5     3.1     2.3      2.2     2.0   2.1   2.2      2.5
       BNA3         3.8      3.5     3.2     2.2      2.2     2.1   2.1   2.2      2.5

     Table 3.5. volatility for absolute spread changes in basis points p.a.

          Curve      3M       6M       1Y      2Y       3Y      4Y     5Y       10Y
          INAAA       0.1      0.0    -0.1      0.6     0.5      0.0   -0.5       0.6
          INAA2       0.0     -0.2     0.0      0.4     0.5     -0.1   -0.2       0.3
          INA2        0.0     -0.3     0.1      0.2     0.4      0.1   -0.1       0.4
          INBBB2      0.2      0.0     0.2      1.0     1.1      0.5    0.5       0.9
          INBB2      -0.2     -0.5    -0.4     -0.3     0.3      0.5    0.4      -0.3

       Table 3.6. Skewness for absolute 1-day spread changes (in σ 3 ).


which is indeed the conclusion from the results in Table 3.10.
Kurtosis: The absolute 1-day changes lead to a kurtosis, which is significantly
larger than 3 (see Table 3.6). Thus, the distribution of absolute changes is
leptokurtic. There is no significant dependence on credit quality or maturity.
The distribution of relative 1-day changes is also leptokurtic (see Table 3.10).
The deviation from normality increases with decreasing credit quality and de-
creasing maturity.
3.3   Descriptive Statistics of Yield Spread Time Series                               61


             Curve       3M     6M         1Y     2Y      3Y     4Y     5Y    10Y
             INAAA       12.7    6.0       8.1   10.1    16.8    9.1   11.2   12.8
             INAA2       10.5    6.4       7.8   10.1    15.8    7.8    9.5   10.0
             INA2        13.5    8.5       9.2   12.3    18.2    8.2    9.4    9.8
             INBBB2      13.7    7.0       9.9   14.5    21.8   10.5   13.9   14.7
             INBB2       11.2   13.0      11.0   15.8    12.3   13.2   11.0   11.3

                Table 3.7. Kurtosis for absolute spread changes (in σ 4 ).
=========================================================
 Variable 10Y
=========================================================

 Mean            0.000354147
 Std.Error         0.0253712    Variance         0.000643697

 Minimum               -0.18    Maximum                  0.2
 Range                  0.38

 Lowest cases                   Highest cases
       1284:           -0.18           1246:            0.14
       1572:           -0.14           1283:            0.14
       1241:           -0.13           2110:            0.19
       1857:           -0.11           1062:            0.19
        598:            -0.1           2056:             0.2

 Median                    0
 25% Quartile          -0.01    75% Quartile            0.01

 Skewness           0.609321    Kurtosis             9.83974

 Observations                    2146
 Distinct observations             75

 Total number of {-Inf,Inf,NaN}    0
=========================================================
       Table 3.8. Output of descriptive for the 10 years AAA spread.



We visualize symmetry and leptokursis of the distribution of absolute spread
changes for the INAAA 10Y data in Figure 3.4, where we plot the empirical dis-
tribution of absolute spreads around the mean spread in an averaged shifted
histogram and the normal distribution with the variance estimated from his-
torical data.

                                                                              XFGdist.xpl
62        3 Quantification of Spread Risk by Means of Historical Simulation


       Curve       3M     6M      1Y      2Y      3Y      4Y      5Y      7Y    10Y
       INAAA       36.0   19.2   15.5     8.9     8.4     8.0     6.4     7.8   10.4
       INAA2       23.5   13.1   11.2     7.2     7.4     6.4     5.8     6.2    7.6
       INAA3       13.4      -    9.0     5.8     6.2     5.3     5.0     5.8    6.4
       INA1        13.9    9.2    7.7     5.7     5.6     4.7     4.5     4.6    5.7
       INA2        11.5    8.1    7.1     5.1     4.9     4.3     4.0     4.0    4.5
       INA3           -      -    6.4     4.6     4.3     3.8     3.5     3.5    4.1
       INBBB1       8.1    6.0    5.4     3.9     3.7     3.3     3.0     3.2    3.8
       INBBB2       7.0    5.3    5.0     3.3     3.3     2.9     2.8     2.9    3.3
       INBBB3       5.7    4.7    4.4     3.2     3.0     2.7     2.5     2.6    2.9
       INBB1        4.3    3.8    3.4     2.5     2.4     2.2     2.1     2.5    2.2
       INBB2        3.7    3.3    3.0     2.2     2.1     2.0     1.8     2.0    1.7
       INBB3        3.2    2.8    2.5     2.0     1.9     1.8     1.6     1.8    1.5
       INB1         3.0    2.4    2.1     1.7     1.7     1.6     1.5     1.6    1.5
       INB2         2.3    2.1    1.9     1.6     1.6     1.5     1.4     1.5    1.3
       INB3         1.8    2.2    2.3     1.3     1.3     1.2     1.2     1.3    1.1
       BNAAA       37.0   36.6   16.9     9.8     9.0     8.2     6.1     5.9    6.5
       BNAA12      22.8    9.7    8.3     7.0     6.3     5.8     4.6     4.8    5.5
       BNA1        36.6   10.1    7.9     5.6     4.8     4.4     3.8     3.9    4.4
       BNA2        17.8    8.0    6.6     4.5     4.1     3.6     3.4     3.3    3.7
       BNA3         9.9    6.9    5.6     3.7     3.6     3.3     3.1     3.1    3.4

             Table 3.9. Volatility for relative spread changes in %

           Curve      3M     6M     1Y      2Y      3Y      4Y      5Y      10Y
           INAAA       2.3    4.6   4.3     2.2     2.3     2.1     0.6       4.6
           INAA2       5.4    2.6   3.7     1.6     2.0     0.6     0.8       1.8
           INA2        7.6    1.5   1.2     0.9     1.6     0.8     0.9       0.8
           INBBB2      5.5    0.7   0.8     0.8     1.4     0.8     0.7       0.8
           INBB2       0.8    0.4   0.6     0.3     0.4     0.5     0.3      -0.2

           Table 3.10. Skewness for relative spread changes (in σ 3 ).


We note that by construction the area below both curves is normalized to
one. We calculate the 1%, 10%, 90% and 99% quantiles of the spread distribu-
tion with the quantile command. Those quantiles are popular in market risk
management. For the data used to generate Figure 3.4 the results are 0.30%,
0.35%, 0.40%, and 0.45%, respectively. The corresponding quantiles of the
plotted normal distribution are 0.31%, 0.34%, 0.41%, 0.43%. The differences
are less obvious than the difference in the shape of the distributions. However,
in a portfolio with different financial instruments, which is exposed to different
3.4                  Historical Simulation and Value at Risk                                            63


                           Curve      3M       6M        1Y       2Y       3Y     4Y       5Y    10Y
                           INAAA     200.7     54.1     60.1     27.8     28.3   33.9     16.8   69.3
                           INAA2     185.3     29.5     60.5     22.1     27.4   11.0     17.5   23.0
                           INA2      131.1     22.1     18.0     13.9     26.5   16.4     18.5   13.9
                           INBBB2    107.1     13.9     16.9     12.0     20.0   14.0     16.6   16.7
                           INBB2      16.3     11.9     12.9     12.4     11.0   10.1     10.2   12.0

                             Table 3.11. Kurtosis for relative spread changes (in σ 4 ).

                                        Historical vs. Normal Distribution
                      30
  Density Function

                      20
                      10
                      0




                           0.2               0.3                   0.4              0.5
                                                      Absolute Spread Change
              Figure 3.4. Historical distribution and estimated normal distribution.
                XFGdist.xpl



risk factors with different correlations, the difference in the shape of the distri-
bution can play an important role. That is why a simple variance-covariance
approach, J.P. Morgan (1996) and Kiesel et al. (1999), seems not adequate to
capture spread risk.


3.4                        Historical Simulation and Value at Risk
We investigate the behavior of a fictive zero-bond of a given credit quality
with principal 1 USD, which matures after T years. In all simulations t = 0
denotes the beginning and t = T the end of the lifetime of the zero-bond. The
starting point of the simulation is denoted by t0 , the end by t1 . The observation
64         3 Quantification of Spread Risk by Means of Historical Simulation


period, i.e., the time window investigated, consists of N ≥ 1 trading days and
the holding period of h ≥ 1 trading days. The confidence level for the VaR is
α ∈ [0, 1]. At each point in time 0 ≤ t ≤ t1 the risky yields Ri (t) (full yield
curve) and the riskless treasury yields Bi (t) (benchmark curve) for any time to
maturity 0 < T1 < · · · < Tn are contained in our data set for 1 ≤ i ≤ n, where
n is the number of different maturities. The corresponding spreads are defined
by Si (t) = Ri (t) − Bi (t) for 1 ≤ i ≤ n.
In the following subsections 3.4.1 to 3.4.5 we specify different variants of the
historical simulation method which we use for estimating the distribution of
losses from the zero-bond position. The estimate for the distribution of losses
can then be used to calculate the quantile-based risk measure Value-at-Risk.
The variants differ in the choice of risk factors, i.e., in our case the compo-
nents of the historical yield time series. In Section 3.6 we describe how the
VaR estimation is carried out with XploRe commands provided that the loss
distribution has been estimated by means of one of the methods introduced
and can be used as an input variable.


3.4.1     Risk Factor: Full Yield

1. Basic Historical Simulation:
We consider a historical simulation, where the risk factors are given by the
full yield curve, Ri (t) for i = 1, . . . , n. The yield R(t, T − t) at time t0 ≤
t ≤ t1 for the remaining time to maturity T − t is determined by means of
linear interpolation from the adjacent values Ri (t) = R(t, Ti ) and Ri+1 (t) =
R(t, Ti+1 ) with Ti ≤ T − t < Ti+1 (for reasons of simplicity we do not consider
remaining times to maturity T − t < T1 and T − t > Tn ):

                        [Ti+1 − (T − t)]Ri (t) + [(T − t) − Ti ]Ri+1 (t)
        R(t, T − t) =                                                    .   (3.1)
                                         Ti+1 − Ti

The present value of the bond P V (t) at time t can be obtained by discounting,
                                    1
                P V (t) =                T −t ,        t 0 ≤ t ≤ t1 .      (3.2)
                           1 + R(t, T − t)
In the historical simulation the relative risk factor changes
                                                  
       (k)      Ri t − k/N − Ri t − (k + h)/N
     ∆i (t) =                                       , 0 ≤ k ≤ N − 1,        (3.3)
                        Ri t − (k + h)/N
3.4   Historical Simulation and Value at Risk                                      65


are calculated for t0 ≤ t ≤ t1 and each 1 ≤ i ≤ n. Thus, for each scenario k we
obtain a new fictive yield curve at time t + h, which can be determined from
the observed yields and the risk factor changes,
                 (k)                    (k)  
                Ri (t + h) = Ri (t) 1 + ∆i (t) ,            1 ≤ i ≤ n,           (3.4)

by means of linear interpolation. This procedure implies that the distribution of
risk factor changes is stationary between t−(N −1+h)/N and t. Each scenario
corresponds to a drawing from an identical and independent distribution, which
can be related to an i.i.d. random variable εi (t) with variance one via

                                   ∆i (t) = σi εi (t).                           (3.5)

This assumption implies homoscedasticity of the volatility of the risk factors,
i.e., a constant volatility level within the observation period. If this were not the
case, different drawings would originate from different underlying distributions.
Consequently, a sequence of historically observed risk factor changes could not
be used for estimating the future loss distribution.
In analogy to (3.1) for time t + h and remaining time to maturity T − t one
obtains
                                                  (k)                    (k)
                              [Ti+1 − (T − t)]Ri (t) + [(T − t) − Ti ]Ri+1 (t)
      R(k) (t + h, T − t) =
                                                Ti+1 − Ti

for the yield. With (3.2) we obtain a new fictive present value at time t + h:
                                               1
                  P V (k) (t + h) =                     T −t .                 (3.6)
                                          (k)
                                     1 + R (t + h, T − t)

In this equation we neglected the effect of the shortening of the time to maturity
in the transition from t to t + h on the present value. Such an approximation
should be refined for financial instruments whose time to maturity/time to
expiration is of the order of h, which is not relevant for the constellations
investigated in the following.
Now the fictive present value P V (k) (t + h) is compared with the present value
for unchanged yield R(t + h, T − t) = R(t, T − t) for each scenario k (here the
remaining time to maturity is not changed, either).
                                                   1
                    P V (t + h) =                           T −t
                                                                    .            (3.7)
                                      1 + R(t + h, T − t)
66        3 Quantification of Spread Risk by Means of Historical Simulation


The loss occurring is

       L(k) (t + h) = P V (t + h) − P V (k) (t + h)      0 ≤ k ≤ N − 1,       (3.8)

i.e., losses in the economic sense are positive while profits are negative. The
VaR is the loss which is not exceeded with a probability α and is estimated as
the [(1 − α)N + 1]-th-largest value in the set

                         {L(k) (t + h) | 0 ≤ k ≤ N − 1}.

This is the (1 − α)-quantile of the corresponding empirical distribution.
2. Mean Adjustment:
A refined historical simulation includes an adjustment for the average of those
relative changes in the observation period which are used for generating the
scenarios according to (3.3). If for fixed 1 ≤ i ≤ n the average of relative
            (k)
changes ∆i (t) is different from 0, a trend is projected from the past to the
future in the generation of fictive yields in (3.4). Thus the relative changes are
                                                             (k)           (k)
corrected for the mean by replacing the relative change ∆i (t) with ∆i (t) −
∆i (t) for 1 ≤ i ≤ n in (3.4):
                                             N −1
                                           1 X (k)
                             ∆i (t) =         ∆i (t),                         (3.9)
                                           N
                                             k=0

This mean correction is presented in Hull (1998).
3. Volatility Updating:
An important variant of historical simulation uses volatility updating Hull
(1998). At each point in time t the exponentially weighted volatility of rel-
ative historical changes is estimated for t0 ≤ t ≤ t1 by
                                   N −1
                                   X          (k)   2
               σi2 (t) = (1 − γ)          γ k ∆i (t) ,    1 ≤ i ≤ n.         (3.10)
                                   k=0

The parameter γ ∈ [0, 1] is a decay factor, which must be calibrated to generate
a best fit to empirical data. The recursion formula
                                            (0)   2
        σi2 (t) = (1 − γ)σi2 (t − 1/N ) + γ ∆i (t) ,    1 ≤ i ≤ n,        (3.11)

is valid for t0 ≤ t ≤ t1 . The idea of volatility updating consists in adjusting the
historical risk factor changes to the present volatility level. This is achieved by
3.4   Historical Simulation and Value at Risk                                          67


a renormalization of the relative risk factor changes from (3.3) with the corre-
sponding estimation of volatility for the observation day and a multiplication
with the estimate for the volatility valid at time t. Thus, we calculate the
quantity

                                         (k)
              (k)                       ∆i (t)
             δi (t) = σi (t) ·                       ,         0 ≤ k ≤ N − 1.   (3.12)
                                 σi (t − (k + h)/N )

In a situation, where risk factor volatility is heteroscedastic and, thus, the
process of risk factor changes is not stationary, volatility updating cures this
violation of the assumptions made in basic historical simulation, because the
process of re-scaled risk factor changes ∆i (t)/σi (t)) is stationary. For each k
these renormalized relative changes are used in analogy to (3.4) for the deter-
mination of fictive scenarios:

                 (k)                    (k)
                Ri (t + h) = Ri (t) 1 + δi (t) ,                1 ≤ i ≤ n,      (3.13)

The other considerations concerning the VaR calculation in historical simula-
tion remain unchanged.

4. Volatility Updating and Mean Adjustment:
Within the volatility updating framework, we can also apply a correction for
the average change according to 3.4.1(2). For this purpose, we calculate the
average
                                        N −1
                                      1 X (k)
                            δ i (t) =        δi (t),                  (3.14)
                                      N
                                               k=0
                                                         (k)                     (k)
and use the adjusted relative risk factor change δi (t) − δ i (t) instead of δi (t)
in (3.13).


3.4.2     Risk Factor: Benchmark

In this subsection the risk factors are relative changes of the benchmark curve
instead of the full yield curve. This restriction is adequate for quantifying
general market risk, when there is no need to include spread risk. The risk
factors are the yields Bi (t) for i = 1, . . . , n. The yield B(t, T − t) at time t for
68          3 Quantification of Spread Risk by Means of Historical Simulation


remaining time to maturity T − t is calculated similarly to (3.1) from adjacent
values by linear interpolation,

                       {Ti+1 − (T − t)}Bi (t) + {(T − t) − Ti }Bi+1 (t)
       B(t, T − t) =                                                    .         (3.15)
                                        Ti+1 − Ti

The generation of scenarios and the interpolation of the fictive benchmark curve
is carried out in analogy to the procedure for the full yield curve. We use
                                                
       (k)      Bi t − k/N − Bi t − (k + h)/N
     ∆i (t) =                                     , 0 ≤ k ≤ N − 1,       (3.16)
                        Bi t − (k + h)/N

and
                   (k)                    (k)  
                  Bi (t + h) = Bi (t) 1 + ∆i (t) ,         1 ≤ i ≤ n.             (3.17)

Linear interpolation yields
                                                 (k)                        (k)
                               {Ti+1 − (T − t)}Bi (t) + {(T − t) − Ti }Bi+1 (t)
      B (k) (t + h, T − t) =                                                    .
                                                 Ti+1 − Ti

In the determination of the fictive full yield we now assume that the spread
remains unchanged within the holding period. Thus, for the k-th scenario we
obtain the representation

                R(k) (t + h, T − t) = B (k) (t + h, T − t) + S(t, T − t),         (3.18)

which is used for the calculation of a new fictive present value and the corre-
sponding loss. With this choice of risk factors we can introduce an adjustment
for the average relative changes or/and volatility updating in complete analogy
to the four variants described in the preceding subsection.


3.4.3      Risk Factor: Spread over Benchmark Yield

When we take the view that risk is only caused by spread changes but not
by changes of the benchmark curve, we investigate the behavior of the spread
risk factors Si (t) for i = 1, . . . , n. The spread S(t, T − t) at time t for time to
maturity T − t is again obtained by linear interpolation. We now use
                                                     
        (k)      Si t − k/N − Si t − (k + h)/N
      ∆i (t) =                                         , 0 ≤ k ≤ N − 1,         (3.19)
                          Si t − (k + h)/N
3.4   Historical Simulation and Value at Risk                                           69


and
                  (k)                    (k)
                 Si (t + h) = Si (t) 1 + ∆i (t) ,           1 ≤ i ≤ n.               (3.20)
Here, linear interpolation yields
                                                 (k)                           (k)
                               {Ti+1 − (T − t)}Si (t) + {(T − t) − Ti }Si+1 (t)
      S (k) (t + h, T − t) =                                                    .
                                                 Ti+1 − Ti

Thus, in the determination of the fictive full yield the benchmark curve is
considered deterministic and the spread stochastic. This constellation is the
opposite of the constellation in the preceding subsection. For the k-th scenario
one obtains

               R(k) (t + h, T − t) = B(t, T − t) + S (k) (t + h, T − t).             (3.21)

In this context we can also work with adjustment for average relative spread
changes and volatility updating.


3.4.4      Conservative Approach

In the conservative approach we assume full correlation between risk from the
benchmark curve and risk from the spread changes. In this worst case scenario
we add (ordered) losses, which are calculated as in the two preceding sections
from each scenario. From this loss distribution the VaR is determined.


3.4.5      Simultaneous Simulation

Finally, we consider simultaneous relative changes of the benchmark curve and
the spreads. For this purpose (3.18) and (3.21) are replaced with

              R(k) (t + h, T − t) = B (k) (t + h, T − t) + S (k) (t, T − t),         (3.22)

where, again, corrections for average risk factor changes or/and volatility up-
dating can be added. We note that the use of relative risk factor changes
is the reason for different results of the variants in subsection 3.4.1 and this
subsection.
70        3 Quantification of Spread Risk by Means of Historical Simulation


3.5     Mark-to-Model Backtesting
A backtesting procedure compares the VaR prediction with the observed loss.
In a mark-to-model backtesting the observed loss is determined by calculation
of the present value before and after consideration of the actually observed risk
factor changes. For t0 ≤ t ≤ t1 the present value at time t+h is calculated with
the yield R(t + h, T − t), which is obtained from observed data for Ri (t + h)
by linear interpolation, according to
                                              1
                      P V (t) =                          T −t
                                                                 .        (3.23)
                                    1 + R(t + h, T − t)

This corresponds to a loss L(t) = P V (t) − P V (t + h), where, again, the short-
ening of the time to maturity is not taken into account.
The different frameworks for the VaR estimation can easily be integrated into
the backtesting procedure. When we, e.g., only consider changes of the bench-
mark curve, R(t+h, T −t) in (3.23) is replaced with B(t+h, T −t)+S(t, T −t).
On an average (1 − α) · 100 per cent of the observed losses in a given time in-
terval should exceed the corresponding VaR (outliers). Thus, the percentage of
observed losses is a measure for the predictive power of historical simulation.


3.6     VaR Estimation and Backtesting with XploRe
In this section we explain, how a VaR can be calculated and a backtesting can
be implemented with the help of XploRe routines. We present numerical results
for the different yield curves. The VaR estimation is carried out with the help
of the VaRest command. The VaRest command calculates a VaR for historical
simulation, if one specifies the method parameter as ”EDF” (empirical distri-
bution function). However, one has to be careful when specifying the sequence
of asset returns which are used as input for the estimation procedure. If one
calculates zero-bond returns from relative risk factor changes (interest rates or
spreads) the complete empirical distribution of the profits and losses must be
estimated anew for each day from the N relative risk factor changes, because
the profit/loss observations are not identical with the risk factor changes.
For each day the N profit/loss observations generated with one of the methods
described in subsections 3.4.1 to 3.4.5 are stored to a new row in an array PL.
The actual profit and loss data from a mark-to-model calculation for holding
3.6    VaR Estimation and Backtesting with XploRe                                     71


period h are stored to a one-column-vector MMPL. It is not possible to use a
continuous sequence of profit/loss data with overlapping time windows for the
VaR estimation. Instead the VaRest command must be called separately for
each day. The consequence is that the data the VaRest command operates
on consists of a row of N + 1 numbers: N profit/loss values contained in the
vector (PL[t,])’, which has one column and N rows followed by the actual
mark-to-model profit or loss MMPL[t,1] within holding period h in the last row.
The procedure is implemented in the quantlet XFGpl which can be downloaded
from quantlet download page of this book.


                                   VaR timeplot
                       15
                       10
                       5
         returns*E-2

                       0
                       -5
                       -10




                             5          10                 15
                                         time*E2


      Figure 3.5.     VaR        time    plot      basic   historical   simulation.
        XFGtimeseries.xpl


The result is displayed for the INAAA curve in Figures. 3.5 (basic historical
simulation) and 3.6 (historical simulation with volatility updating). The time
plots allow for a quick detection of violations of the VaR prediction. A striking
feature in the basic historical simulation with the full yield curve as risk fac-
tor is the platform-shaped VaR prediction, while with volatility updating the
VaR prediction decays exponentially after the occurrence of peak events in the
market data. This is a consequence of the exponentially weighted historical
72                    3 Quantification of Spread Risk by Means of Historical Simulation



                                           VaR timeplot




                      15
                      10
                      5
        returns*E-2

                      0
                      -5
                      -10
                      -15




                                5             10             15
                                               time*E2


     Figure 3.6. VaR time plot historical simulation with volatility updating.
       XFGtimeseries2.xpl



volatility in the scenarios. The peak VaR values are much larger for volatility
updating than for the basic historical simulation.
In order to find out, which framework for VaR estimation has the best predictive
power, we count the number of violations of the VaR prediction and divide it
by the number of actually observed losses. We use the 99% quantile, for which
we would expect an violation rate of 1% for an optimal VaR estimator. The
history used for the drawings of the scenarios consists of N = 250 days, and the
holding period is h = 1 day. For the volatility updating we use a decay factor of
γ = 0.94, J.P. Morgan (1996). For the simulation we assume that the synthetic
zero-bond has a remaining time to maturity of 10 years at the beginning of
the simulations. For the calculation of the first scenario of a basic historical
simulation N + h − 1 observations are required. A historical simulation with
volatility updating requires 2(N + h − 1) observations preceding the trading
day the first scenario refers to. In order to allow for a comparison between
different methods for the VaR calculation, the beginning of the simulations
is t0 = [2(N + h − 1)/N ]. With these simulation parameters we obtain 1646
3.7   P-P Plots                                                                 73


observations for a zero-bond in the industry sector and 1454 observations for a
zero-bond in the banking sector.
In Tables 3.12 to 3.14 we list the percentage of violations for all yield curves
and the four variants of historical simulation V1 to V4 (V1 = Basic Historical
Simulation; V2 = Basic Historical Simulation with Mean Adjustment; V3 =
Historical Simulation with Mean Adjustment; V4 = Historical Simulation with
Volatility Updating and Mean Adjustment). In the last row we display the
average of the violations of all curves. Table 3.12 contains the results for the
simulation with relative changes of the full yield curves and of the yield spreads
over the benchmark curve as risk factors. In Table 3.13 the risk factors are
changes of the benchmark curves. The violations in the conservative approach
and in the simultaneous simulation of relative spread and benchmark changes
are listed in Table 3.14.

                                                                      XFGexc.xpl




3.7     P-P Plots
The evaluation of the predictive power across all possible confidence levels
α ∈ [0, 1] can be carried out with the help of a transformation of the empirical
distribution {L(k) | 0 ≤ k ≤ N − 1}. If F is the true distribution function
of the loss L within the holding period h, then the random quantity F (L) is
(approximately)
                uniformly distributed on [0, 1]. Therefore we check the values
Fe L(t) for t0 ≤ t ≤ t1 , where Fe is the empirical distribution. If the prediction
quality of the model is adequate, these values should not differ significantly from
a sample with size 250 (t1 − t0 + 1) from a uniform distribution on [0, 1].
The P-P plot of the transformed distribution against the uniform distribution
(which represents the distribution function of the transformed empirical distri-
bution) should therefore be located as closely to the main diagonal as possible.
The mean squared deviation from the uniform distribution (MSD) summed
over all quantile levels can serve as an indicator of the predictive power of a
quantile-based risk measure like VaR. The XFGpp.xpl quantlet creates a P-P
plot and calculates the MSD indicator.
74        3 Quantification of Spread Risk by Means of Historical Simulation


                          Full yield                   Spread curve
      Curve        V1     V2      V3     V4     V1       V2     V3     V4
      INAAA       1,34   1,34    1,09   1,28   1,34     1,34   1,34   1,34
      INAA2       1,34   1,22    1,22   1,22   1,46     1,52   1,22   1,22
      INAA3       1,15   1,22    1,15   1,15   1,09     1,09   0,85   0,91
      INA1        1,09   1,09    1,46   1,52   1,40     1,46   1,03   1,09
      INA2        1,28   1,28    1,28   1,28   1,15     1,15   0,91   0,91
      INA3        1,22   1,22    1,15   1,22   1,15     1,22   1,09   1,15
      INBBB1      1,28   1,22    1,09   1,15   1,46     1,46   1,40   1,40
      INBBB2      1,09   1,15    0,91   0,91   1,28     1,28   0,91   0,91
      INBBB3      1,15   1,15    1,09   1,09   1,34     1,34   1,46   1,52
      INBB1       1,34   1,28    1,03   1,03   1,28     1,28   0,97   0,97
      INBB2       1,22   1,22    1,22   1,34   1,22     1,22   1,09   1,09
      INBB3       1,34   1,28    1,28   1,22   1,09     1,28   1,09   1,09
      INB1        1,40   1,40    1,34   1,34   1,52     1,46   1,09   1,03
      INB2        1,52   1,46    1,28   1,28   1,34     1,40   1,15   1,15
      INB3        1,40   1,40    1,15   1,15   1,46     1,34   1,09   1,15
      BNAAA       1,24   1,38    1,10   1,10   0,89     0,89   1,03   1,31
      BNAA1/2     1,38   1,24    1,31   1,31   1,03     1,10   1,38   1,38
      BNA1        1,03   1,03    1,10   1,17   1,03     1,10   1,24   1,24
      BNA2        1,24   1,31    1,24   1,17   0,76     0,83   1,03   1,03
      BNA3        1,31   1,24    1,17   1,10   1,03     1,10   1,24   1,17
      Average     1,27   1,25 1,18      1,20   1,22    1,24 1,13      1,15

          Table 3.12. Violations full yield and spread curve (in %)

                   Curve                         V1      V2     V3      V4
      INAAA, INAA2, INAA3, INA1, INA2,          1,52    1,28   1,22    1,15
      INA3, INBBB1, INBBB2, INBBB3,
      INBB1, INBB2, INBB3, INB1, INB2,
      INB3
      BNAAA, BNAA1/2, BNA1, BNA2, BNA3         1,72    1,44    1,17   1,10
      Average                                  1,57    1,32    1,20   1,14

                Table 3.13. Violations benchmark curve (in %)


3.8     Q-Q Plots
With a quantile plot (Q-Q plot) it is possible to visualize whether an ordered
sample is distributed according to a given distribution function. If, e.g., a
sample is normally distributed, the plot of the empirical quantiles vs. the
3.9    Discussion of Simulation Results                                         75


                      conservative approach        simultaneous simulation
        Curve       V1      V2      V3     V4     V1      V2     V3      V4
        INAAA      0,24    0,24    0,30   0,30   1,22    1,28   0,97    1,03
        INAA2      0,24    0,30    0,36   0,30   1,22    1,28   1,03    1,15
        INAA3      0,43    0,36    0,30   0,30   1,22    1,15   1,09    1,09
        INA1       0,36    0,43    0,55   0,55   1,03    1,03   1,03    1,09
        INA2       0,49    0,43    0,49   0,49   1,34    1,28   0,97    0,97
        INA3       0,30    0,36    0,30   0,30   1,22    1,15   1,09    1,09
        INBBB1     0,43    0,49    0,36   0,36   1,09    1,09   1,03    1,03
        INBBB2     0,49    0,49    0,30   0,30   1,03    1,03   0,85    0,79
        INBBB3     0,30    0,30    0,36   0,36   1,15    1,22   1,03    1,03
        INBB1      0,36    0,30    0,43   0,43   1,34    1,34   1,03    0,97
        INBB2      0,43    0,36    0,43   0,43   1,40    1,34   1,15    1,09
        INBB3      0,30    0,30    0,36   0,36   1,15    1,15   0,91    0,91
        INB1       0,43    0,43    0,43   0,43   1,34    1,34   0,91    0,97
        INB2       0,30    0,30    0,30   0,30   1,34    1,34   0,97    1,03
        INB3       0,30    0,30    0,36   0,30   1,46    1,40   1,22    1,22
        BNAAA      0,62    0,62    0,48   0,48   1,31    1,31   1,10    1,03
        BNAA1/2    0,55    0,55    0,55   0,48   1,24    1,31   1,10    1,17
        BNA1       0,62    0,62    0,55   0,55   0,96    1,03   1,10    1,17
        BNA2       0,55    0,62    0,69   0,69   0,89    1,96   1,03    1,03
        BNA3       0,55    0,55    0,28   0,28   1,38    1,31   1,03    1,10
        Average    0,41 0,42 0,41 0,40           1,22 1,22 1,03 1,05

      Table 3.14. Violations in the conservative approach and simultaneous
      simulation(in %)


quantiles of a normal distribution should result in an approximately linear
plot. Q-Q plots vs. a normal distribution can be generated with the following
command:

                   VaRqqplot(matrix(N,1)|MMPL,VaR,opt)


3.9       Discussion of Simulation Results
In Figure 3.7 the P-P plots for the historical simulation with the full yield curve
(INAAA) as risk factor are displayed for the different variants of the simulation.
From the P-P plots it is apparent that mean adjustment significantly improves
the predictive power in particular for intermediate confidence levels (i.e., for
small risk factor changes).
76                                      3 Quantification of Spread Risk by Means of Historical Simulation



                                               Basic Simulation                                                          Mean Adjustment




                              1




                                                                                                     1
     Empirical Distribution




                                                                            Empirical Distribution
                              0.5




                                                                                                     0.5
                              0




                                                                                                     0
                                    0                    0.5            1                                  0                       0.5                 1
                                                 Uniform Distribution                                                      Uniform Distribution

                                              Volatility Updating                                              Volatility Updating & Mean Adjustment
                              1




                                                                                                     1
     Empirical Distribution




                                                                            Empirical Distribution
                              0.5




                                                                                                     0.5
                              0




                                                                                                     0




                                    0                    0.5            1                                  0                       0.5                 1
                                                 Uniform Distribution                                                      Uniform Distribution




                                    Figure 3.7. P-P Plots variants of the simulation.                                              XFGpp.xpl



Figure 3.8 displays the P-P plots for the same data set and the basic historical
simulation with different choices of risk factors. A striking feature is the poor
predictive power for a model with the spread as risk factor. Moreover, the
over-estimation of the risk in the conservative approach is clearly reflected by
a sine-shaped function, which is superposed on the ideal diagonal function.
In Figs. 3.9 and 3.10 we show the Q-Q plots for basic historic simulation and
volatility updating using the INAAA data set and the full yield curve as risk
factors. A striking feature of all Q-Q plots is the deviation from linearity (and,
thus, normality) for extreme quantiles. This observation corresponds to the
leptokurtic distributions of time series of market data changes (e.g. spread
changes as discussed in section 3.3.2).
3.9                            Discussion of Simulation Results                                                                                 77



                                                Benchmark Curve                                                      Spread Curve
                               1




                                                                                                      1
      Empirical Distribution




                                                                             Empirical Distribution
                               0.5




                                                                                                      0.5
                               0




                                                                                                      0
                                     0                    0.5            1                                  0                0.5            1
                                                  Uniform Distribution                                               Uniform Distribution

                                              Conservative Approach                                             Simultaneous Simulation
                               1




                                                                                                      1
      Empirical Distribution




                                                                             Empirical Distribution
                               0.5




                                                                                                      0.5
                               0




                                                                                                      0




                                     0                    0.5            1                                  0                0.5            1
                                                  Uniform Distribution                                               Uniform Distribution




                                         Figure 3.8. P-P Plots choice of risk factors.                                XFGpp.xpl



3.9.1                                    Risk Factor: Full Yield

The results in Table 3.12 indicate a small under-estimation of the actually
observed losses. While volatility updating leads to a reduction of violations,
this effect is not clearly recognizable for the mean adjustment. The positive
results for volatility updating are also reflected in the corresponding mean
squared deviations in Table 3.15. Compared with the basic simulation, the
model quality can be improved. There is also a positive effect of the mean
adjustment.
78                          3 Quantification of Spread Risk by Means of Historical Simulation




                                                  VaR reliability plot


                       4
                       2
     L/VaR quantiles

                       0
                       -2
                       -4




                            -4               -2                0            2            4
                                                        normal quantiles


                                 Figure 3.9. Q-Q Plot for basic historical simulation.



3.9.2                   Risk Factor: Benchmark

The results for the number of violations in Table 3.13 and the mean squared
deviations in Table 3.16 are comparable to the analysis, where risk factors are
changes of the full yield. Since the same relative changes are applied for all
yield curves, the results are the same for all yield curves. Again, the application
of volatility updating improves the predictive power and mean adjustment also
has a positive effect.


3.9.3                   Risk Factor: Spread over Benchmark Yield

The number of violations (see Table 3.12) is comparable to the latter two
variants. Volatility updating leads to better results, while the effect of mean
3.9       Discussion of Simulation Results                                             79




                                                VaR reliability plot
                        4
                        2
      L/VaR quantiles

                        0
                        -2
                        -4




                             -4            -2               0            2         4
                                                     normal quantiles


                                  Figure 3.10. Q-Q plot for volatility updating.



adjustment is only marginal. However, the mean squared deviations (see Ta-
ble 3.15) in the P-P plots are significantly larger than in the case, where the
risk factors are contained in the benchmark curve. This can be traced back to a
partly poor predictive power for intermediate confidence levels (see Figure 3.8).
Mean adjustment leads to larger errors in the P-P plots.


3.9.4                    Conservative Approach

From Table 3.14 the conclusion can be drawn, that the conservative approach
significantly over-estimates the risk for all credit qualities. Table 3.17 indicates
the poor predictive power of the conservative approach over the full range of
confidence levels.
80        3 Quantification of Spread Risk by Means of Historical Simulation

                          full yield                     spread curve
     Curve        V1     V2        V3     V4      V1       V2      V3      V4
     INAAA       0,87   0,28      0,50   0,14    8,13    22,19    8,14   16,15
     INAA2       0,45   0,36      0,32   0,16    6,96    21,41    7,25   15,62
     INAA3       0,54   0,41      0,43   0,23    7,91    21,98    7,97   15,89
     INA1        0,71   0,27      0,41   0,13    7,90    15,32    8,10    8,39
     INA2        0,50   0,39      0,42   0,17    9,16    15,15    9,51    6,19
     INA3        0,81   0,24      0,58   0,24    9,53    12,96    9,61    7,09
     INBBB1      0,71   0,29      0,54   0,13    9,59    15,71    9,65   11,13
     INBBB2      0,33   0,34      0,26   0,12   11,82    14,58 11,59     10,72
     INBBB3      0,35   0,59      0,40   0,34    7,52    11,49    7,78    6,32
     INBB1       0,31   0,95      0,26   0,28    4,14     4,57    3,90    1,61
     INBB2       0,52   0,49      0,36   0,19    6,03     3,63    5,89    2,12
     INBB3       0,53   0,41      0,36   0,17    3,11     3,65    3,09    1,67
     INB1        0,51   0,29      0,38   0,15    3,59     1,92    2,85    1,16
     INB2        0,51   0,48      0,31   0,22    4,29     2,31    3,41    1,42
     INB3        0,72   0,38      0,32   0,16    3,70     2,10    2,99    3,02
     BNAAA       0,59   0,19      0,48   0,56   10,13    17,64    9,74   11,10
     BNAA1/2     0,54   0,21      0,45   0,46    5,43    13,40    5,73    7,50
     BNA1        0,31   0,12      0,29   0,25    8,65    17,19    8,09    8,21
     BNA2        0,65   0,19      0,57   0,59    6,52    12,52    6,95    6,45
     BNA3        0,31   0,19      0,32   0,29    6,62     9,62    6,59    3,80
     Average     0,54   0,35 0,40        0,25   7,04    11,97    6,94    7,28

     Table 3.15.    MSD P-P Plot for the full yield and the spread
     curve(×10 000)


The mean squared deviations are the worst of all approaches. Volatility updat-
ing and/or mean adjustment does not lead to any significant improvements.


3.9.5    Simultaneous Simulation

From Tables 3.14 and 3.17 it is apparent that simultaneous simulation leads to
much better results than the model with risk factors from the full yield curve,
when volatility updating is included. Again, the effect of mean adjustment
does not in general lead to a significant improvement. These results lead to
the conclusion that general market risk and spread risk should be modeled
independently, i.e., that the yield curve of an instrument exposed to credit
risk should be modeled with two risk factors: benchmark changes and spread
changes.
3.10   XploRe for Internal Risk Models                                         81


                      Curve                        V1     V2     V3      V4
       INAAA, INAA2, INAA3                        0,49   0,23   0,26    0,12
       INA1                                       0,48   0,23   0,26    0,12
       INA2, INA3, INBBB1, INBBB2, INBBB3,        0,49   0,23   0,26    0,12
       INBB1, INBB2
       INBB3                                     0,47    0,23   0,25   0,12
       INB1                                      0,49    0,23   0,26   0,12
       INB2                                      0,47    0,23   0,25   0,12
       INB3                                      0,48    0,23   0,26   0,12
       BNAAA, BNAA1/2                            0,42    0,18   0,25   0,33
       BNA1                                      0,41    0,18   0,23   0,33
       BNA2                                      0,42    0,18   0,25   0,33
       BNA3                                      0,41    0,18   0,24   0,33
       Average                                   0,47    0,22   0,25   0,17

            Table 3.16. MSD P-P-Plot benchmark curve (×10 000)


3.10       XploRe for Internal Risk Models
In this contribution it is demonstrated that XploRe can be used as a tool in
the analysis of time series of market data and empirical loss distributions. The
focus of this contribution is on the analysis of spread risk. Yield spreads are
an indicator of an obligor’s credit risk. The distributions of spread changes are
leptokurtic with typical fat tails, which makes the application of conventional
variance-covariance risk models problematic. That is why in this contribution
we prefer the analysis of spread risk by means of historical simulation. Since
it is not a priori clear, how spread risk should be integrated in a risk model
for interest rate products and how it can be separated from general market
risk, we investigate several possibilities, which include modelling the full yield
curve (i.e., consideration of only one risk factor category, which covers both
benchmark and spread risk) as well as separately modelling spread risk and
benchmark risk. The aggregation of both risk categories is carried out in a
conservative way (addition of the risk measure for both risk categories) as well
as coherently (simultaneous simulation of spread and benchmark risk). More-
over, in addition to the basic historical simulation method we add additional
features like mean adjustment and volatility updating. Risk is quantified by
means of a quantile-based risk measure in this contribution - the VaR. We
demonstrate the differences between the different methods by calculating the
VaR for a fictive zero-bond.
82        3 Quantification of Spread Risk by Means of Historical Simulation


                      conservative approach           simultaneous simulation
     Curve         V1       V2       V3       V4     V1      V2     V3      V4
     INAAA       14,94    14,56    14,00    13,88   1,52    0,64   0,75    0,40
     INAA2       13,65    13,51    14,29    14,31   0,79    0,38   0,40    0,23
     INAA3       14,34    13,99    13,66    13,44   0,79    0,32   0,49    0,27
     INA1        15,39    15,60    15,60    15,60   0,95    0,40   0,52    0,29
     INA2        13,95    14,20    14,32    14,10   0,71    0,55   0,50    0,39
     INA3        14,73    14,95    14,45    14,53   0,94    0,30   0,59    0,35
     INBBB1      13,94    14,59    14,05    14,10   1,00    0,33   0,43    0,17
     INBBB2      13,74    13,91    13,67    13,73   0,64    0,52   0,45    0,29
     INBBB3      13,68    14,24    14,10    14,09   0,36    0,78   0,31    0,31
     INBB1       19,19    20,68    18,93    19,40   0,73    1,37   0,52    0,70
     INBB2       13,21    14,17    14,79    15,15   0,30    0,82   0,35    0,51
     INBB3       15,19    16,47    15,40    15,67   0,55    0,65   0,15    0,21
     INB1        15,47    15,64    15,29    15,51   0,53    0,44   0,19    0,26
     INB2        14,47    14,93    15,46    15,77   0,24    0,55   0,24    0,24
     INB3        14,78    14,67    16,77    17,03   0,38    0,44   0,27    0,22
     BNAAA       14,80    15,30    16,30    16,64   1,13    0,33   0,99    0,96
     BNAA1/2     13,06    13,45    14,97    15,43   0,73    0,16   0,57    0,50
     BNA1        11,95    11,83    12,84    13,08   0,52    0,26   0,44    0,41
     BNA2        13,04    12,58    14,31    14,56   0,78    0,13   0,51    0,58
     BNA3        12,99    12,70    15,19    15,42   0,34    0,18   0,58    0,70
     Average    14,33 14,60 14,92 15,07             0,70 0,48 0,46 0,40

     Table 3.17. MSD P-P Plot for the conservative approach and the si-
     multaneous simulation(×10 000)


The numerical results indicate, that the conservative approach over-estimates
the risk of our fictive position, while the simulation results for the full yield as
single risk factor are quite convincing. The best result, however, is delivered
by a combination of simultaneous simulation of spread and benchmark risk
and volatility updating, which compensates for non-stationarity in the risk
factor time series. The conclusion from this contribution for model-builders
in the banking community is, that it should be checked, whether the full yield
curve or the simultaneous simulation with volatility updating yield satisfactory
results for the portfolio considered.
3.10   XploRe for Internal Risk Models                                      83


Bibliography
Bank for International Settlements (1998a). Amendment to the Capital Accord
    to incorporate market risks, www.bis.org. (January 1996, updated to April
    1998).

Bank for International Settlements (1998b). Overview of the Amendment to
    the Capital Accord to incorporate market risk, www.bis.org. (January
    1996, updated to April 1998).
Bundesaufsichtsamt für das Kreditwesen (2001). Grundsatz I/Modellierung des
    besonderen Kursrisikos, Rundschreiben 1/2001, www.bakred.de.
Gaumert, U. (1999).    Zur Diskussion um die Modellierung besonderer
   Kursrisiken in VaR-Modellen, Handbuch Bankenaufsicht und Interne
   Risikosteuerungsmodelle, Schäffer-Poeschel.
Hull, J. C. (1998). Integrating Volatility Updating into the Historical Simula-
     tion Method for Value at Risk, Journal of Risk .
J.P. Morgan (1996). RiskMetrics, Technical report, J.P. Morgan, New York.
Kiesel, R., Perraudin, W. and Taylor, A. (1999). The Structure of Credit Risk.
    Working Paper, London School of Economics.
  Part II

Credit Risk
4 Rating Migrations
                                Steffi Höse, Stefan Huschens and Robert Wania


The bond rating is one of the most important indicators of a corporation’s
credit quality and therefore its default probability. It was first developed by
Moody’s in 1914 and by Poor’s Corporation in 1922 and it is generally assigned
by external agencies to publicly traded debts. Apart from the external ratings
by independent rating agencies, there are internal ratings by banks and other
financial institutions, Basel Committee on Banking Supervision (2001). Exter-
nal rating data by agencies are available for many years, in contrast to internal
ratings. Their short history in most cases does not exceed 5–10 years. Both
types of ratings are usually recorded on an ordinal scale and labeled alphabeti-
cally or numerically. For the construction of a rating system see Crouhy, Galai,
and Mark (2001).
A change in a rating reflects the assessment that the company’s credit quality
has improved (upgrade) or deteriorated (downgrade). Analyzing these rating
migrations including default is one of the preliminaries for credit risk models
in order to measure future credit loss. In such models, the matrix of rating
transition probabilities, the so called transition matrix, plays a crucial role. It
allows to calculate the joint distribution of future ratings for borrowers that
compose a portfolio, Gupton, Finger, and Bhatia (1997). An element of a
transition matrix gives the probability that an obligor with a certain initial
rating migrates to another rating by the risk horizon. For the econometric
analysis of transition data see Lancaster (1990).
In a study by Jarrow, Lando, and Turnbull (1997) rating transitions were mod-
eled as a time-homogeneous Markov chain, so future rating changes are not
affected by the rating history (Markov property). The probability of chang-
ing from one rating to another is constant over time (homogeneous), which
is assumed solely for simplicity of estimation. Empirical evidence indicates
that transition probabilities are time-varying. Nickell, Perraudin, and Varotto
(2000) show that different transition matrices are identified across various fac-
88                                                                     4    Rating Migrations


tors such as the obligor’s domicile and industry and the stage of business cycle.
Rating migrations are reviewed from a statistical point of view throughout this
chapter using XploRe. The way from the observed data to the estimated one-
year transition probabilities is shown and estimates for the standard deviations
of the transition rates are given. In further extension, dependent rating migra-
tions are discussed. In particular, the modeling by a threshold normal model
is presented.
Time stability of transition matrices is one of the major issues for credit risk
estimation. Therefore, a chi-square test of homogeneity for the estimated rating
transition probabilities is applied. The test is illustrated by an example and
is compared to a simpler approach using standard errors. Further, assuming
time stability, multi-period rating transitions are discussed. An estimator for
multi-period transition matrices is given and its distribution is approximated
by bootstrapping. Finally, the change of the composition of a credit portfolio
caused by rating migrations is considered. The expected composition and its
variance is calculated for independent migrations.


4.1     Rating Transition Probabilities
In this section, the way from raw data to estimated rating transition prob-
abilities is described. First, migration events of the same kind are counted.
The resulting migration counts are transformed into migration rates, which are
used as estimates for the unknown transition probabilities. These estimates are
complemented with estimated standard errors for two cases, for independence
and for a special correlation structure.


4.1.1    From Credit Events to Migration Counts

We assume that credits or credit obligors are rated in d categories ranging from
1, the best rating category, to the category d containing defaulted credits. The
raw data consist of a collection of migration events. The n observed migration
events form a n × 2 matrix with rows

             (ei1 , ei2 ) ∈ {1, . . . , d − 1} × {1, . . . , d},   i = 1, . . . , n.

Thereby, ei1 characterizes the rating of i-th credit at the beginning and ei2 the
rating at the end of the risk horizon, which is usually one year. Subsequently,
4.1   Rating Transition Probabilities                                                 89


migration events of the same kind are aggregated in a (d − 1) × d matrix C of
migration counts, where the generic element
                                     n
                               def
                                     X
                           cjk =           1{(ei1 , ei2 ) = (j, k)}
                                     i=1

is the number of migration events from j to k. Clearly, their total sum is
                                      d−1 X
                                      X   d
                                                 cjk = n.
                                      j=1 k=1



4.1.2     Estimating Rating Transition Probabilities

We assume that each observation ei2 is a realization of a random variable ẽi2
with conditional probability distribution
                                                            d
                                                            X
                      pjk = P(ẽi2 = k|ẽi1 = j),                 pjk = 1,
                                                            k=1

where pjk is the probability that a credit migrates from an initial rating j to
rating k. These probabilities are the so called rating transition (or migration)
probabilities. Note that the indicator variable 1{ẽi2 = k} conditional on ẽi1 = j
is a Bernoulli distributed random variable with success parameter pjk ,

                          1{ẽi2 = k} | ẽi1 = j ∼ Ber(pjk ).                      (4.1)

In order to estimate these rating transition probabilities we define the number
of migrations starting from rating j as
                                   d
                             def
                                   X
                          nj =           cjk ,   j = 1, . . . , d − 1              (4.2)
                                   k=1

and assume nj > 0 for j = 1, . . . , d − 1. Thus, (n1 , . . . , nd−1 ) is the composition
of the portfolio at the beginning of the period and
                                                           
                               d−1
                               X                    d−1
                                                    X
                                     cj1 , . . . ,     cjd                        (4.3)
                                     j=1           j=1
90                                                              4   Rating Migrations


is the composition of the portfolio at the end of the period, where the last
element is the number of defaulted credits. The observed migration rate from
j to k,
                                      def cjk
                                 p̂jk =       ,                         (4.4)
                                          nj
is the natural estimate of the unknown transition probability pjk .
If the migration events are independent, i. e., the variables ẽ12 , . . . , ẽn2 are
stochastically independent, cjk is the observed value of the binomially dis-
tributed random variable
                              c̃jk ∼ B(nj , pjk ),
and therefore the standard deviation of p̂jk is
                                  s
                                    pjk (1 − pjk )
                           σjk =                   ,
                                           nj

which may be estimated by
                                       s
                                           p̂jk (1 − p̂jk )
                              σ̂jk =                        .                   (4.5)
                                                  nj

The estimated standard errors must be carefully interpreted, because they are
based on the assumption of independence.


4.1.3     Dependent Migrations

The case of dependent rating migrations raises new problems. In this context,
c̃jk is distributed as sum of nj correlated Bernoulli variables, see (4.1), indicat-
ing for each credit with initial rating j a migration to k by 1. If these Bernoulli
                                                                                  2
variables are pairwise correlated with correlation ρjk , then the variance σjk
of the unbiased estimator p̂jk for pjk is (Huschens and Locarek-Junge, 2000,
p. 44)
                     2    pjk (1 − pjk ) nj − 1
                   σjk  =               +       ρjk pjk (1 − pjk ).
                                nj          nj
The limit
                                 2
                            lim σjk = ρjk pjk (1 − pjk )
                           nj →∞

shows that the sequence p̂jk does not obey a law of large numbers for ρjk > 0.
Generally, the failing of convergence in quadratic mean does not imply the
4.1   Rating Transition Probabilities                                              91


failing of convergence in probability. But in this case all moments of higher
order exist since the random variable p̂jk is bounded and so the convergence
in probability implies the convergence in quadratic mean. For ρjk = 0 the law
of large numbers holds. Negative correlations can only be obtained for finite
nj . The lower boundary for the correlation is given by ρjk ≥ − nj1−1 , which
converges to zero when the number of credits nj grows to infinity.
The law of large numbers fails also if the correlations are different with ei-
ther a common positive lower bound, or non vanishing positive average cor-
relation or constant correlation blocks with positive correlations in each block
(Finger, 1998, p. 5). This failing of the law of large numbers may not sur-
prise a time series statistician, who is familiar with mixing conditions to ensure
mean ergodicity of stochastic processes (Davidson, 1994, chapter 14). In sta-
tistical words, in the case of non-zero correlation the relative frequency is not
a consistent estimator of the Bernoulli parameter.
The parameters ρjk may be modeled in consistent way in the framework of a
threshold normal model with a single parameter ρ (Basel Committee on Bank-
ing Supervision, 2001; Gupton et al., 1997; Kim, 1999). This model speci-
fies a special dependence structure based on a standard multinormal distri-
bution for a vector (R1 , . . . , Rn ) with equicorrelation matrix (Mardia, Kent,
and Bibby, 1979, p. 461), where Ri (i = 1, . . . , n) is the standardized asset
return and n is the number of obligors. The parameter ρ > 0 may be inter-
preted as a mean asset return correlation. In this model each pair of variables
(X, Y ) = (Ri , Ri0 ) with i, i0 = 1, . . . , n and i 6= i0 is bivariate normally dis-
tributed with density function
                                                  2
                                                    x − 2ρxy + y 2
                                                                     
                                    1
               ϕ(x, y; ρ) =                  exp −                     .
                                                        2(1 − ρ2 )
                                  p
                             2π 1 − ρ2
The probability P[(X, Y ) ∈ (a, b)2 ] is given by
                                  Z bZ b
                    β(a, b; ρ) =            ϕ(x, y; ρ) dx dy.                   (4.6)
                                      a   a
Thresholds for rating j are derived from pj1 , . . . , pj,d−1 by
         def           def                def                          def
      zj0 = −∞, zj1 = Φ−1 (pj1 ), zj2 = Φ−1 (pj1 + pj2 ), . . . , zjd = +∞,
where Φ is the distribution function of the standardized normal distribution
and Φ−1 it’s inverse. Each credit in category j is characterized by a normally
distributed variable Z which determines the migration events by
                pjk = P(Z ∈ (zj,k−1 , zjk )) = Φ(zjk ) − Φ(zj,k−1 ).
92                                                                    4   Rating Migrations


The simultaneous transition probabilities of two credits i and i0 from category
j to k are given by

          pjj:kk = P(ẽi2 = ẽi0 2 = k|ẽi1 = ẽi0 1 = j) = β(zj,k−1 , zjk ; ρ),

i.e., the probability of simultaneous default is

                                pjj:dd = β(zj,d−1 , zjd ; ρ).

For a detailed example see Saunders (1999, pp. 122-125). In the special case of
independence we have pjj:kk = p2jk . Defining a migration from j to k as suc-
cess we obtain correlated Bernoulli variables with common success parameter
pjk , with probability pjj:kk of a simultaneous success, and with the migration
correlation
                                      pjj:kk − p2jk
                               ρjk =                 .
                                      pjk (1 − pjk )
Note that ρjk = 0 if ρ = 0.
Given ρ ≥ 0 we can estimate the migration correlation ρjk ≥ 0 by the restricted
Maximum-Likelihood estimator
                              (                                 )
                                  β(ẑj,k−1 , ẑjk ; ρ) − p̂2jk
                   ρ̂jk = max 0;                                          (4.7)
                                        p̂jk (1 − p̂jk )

with                                                          !
                                                k
                                                X
                                           −1
                                 ẑjk = Φ              p̂ji       .                   (4.8)
                                                 i=1

The estimate
                          s
                              p̂jk (1 − p̂jk ) nj − 1
                 σ̂jk =                       +       ρ̂jk p̂jk (1 − p̂jk )           (4.9)
                                     nj          nj

of the standard deviation
                      s
                         pjk (1 − pjk ) nj − 1
                σjk =                  +       ρjk pjk (1 − pjk )
                               nj         nj

is used. The estimator in (4.9) generalizes (4.5), which results in the special
case ρ = 0.
4.1    Rating Transition Probabilities                                        93


4.1.4      Computation and Quantlets

      counts = VaRRatMigCount (d, e)
           computes migration counts from migration events

The quantlet VaRRatMigCount can be used to compute migration counts from
migration events, where d is the number of categories including default and e
is the n × 2 data matrix containing n migration events. The result is assigned
to the variable counts, which is the (d − 1) × d matrix of migration counts.
                                                                XFGRatMig1.xpl


      b = VaRRatMigRate (c, rho, s)
           computes migration rates and related estimated standard errors

The quantlet VaRRatMigRate computes migration rates and related estimated
standard errors for m periods from an input matrix of migration counts and
a given correlation parameter. Here, c is a (d − 1) × d × m array of m-period
migration counts and rho is a non-negative correlation parameter as used in
(4.6). For rho = 0 the independent case is computed.
The calculation uses stochastic integration in order to determine the probability
β from (4.6). The accuracy of the applied Monte Carlo procedure is controlled
by the input parameter s. For s > 0 the sample size is at least n ≥ (2s)−2 .
This guarantees that the user-specified value s is an upper bound for the stan-
dard deviation of the Monte Carlo estimator for β. Note that with increasing
accuracy (i. e. decreasing s) the computational effort increases proportional to
n.
The result is assigned to the variable b, which is a list containing:

      • b.nstart
        the (d − 1) × 1 × m array of portfolio weights before migration
      • b.nend
        the d × 1 × m array portfolio weights after migration
      • b.etp
        the (d − 1) × d × m array of estimated transition probabilities
94                                                              4   Rating Migrations


     • b.etv
       the (d − 1) × (d − 1) × m array of estimated threshold values
     • b.emc
       the (d − 1) × d × m array of estimated migration correlations
     • b.esd
       the (d − 1) × d × m array of estimated standard deviations

The matrices b.nstart and b.nend have components given by (4.2) and (4.3).
The matrices b.etp, b.emc, and b.esd contain the p̂jk , ρ̂jk , and σ̂jk from
(4.4), (4.7), and (4.9) for j = 1, . . . , d − 1 and k = 1, . . . , d. The estimates ρ̂jk
are given only for p̂jk > 0. The matrix b.etv contains the ẑjk from (4.8) for
j, k = 1, . . . , d − 1. Note that zj0 = −∞ and zjd = +∞.
                                                                     XFGRatMig2.xpl



4.2      Analyzing the Time-Stability of Transition
         Probabilities

4.2.1     Aggregation over Periods

We assume that migration data are given for m periods. This data consist in m
matrices of migration counts C(t) for t = 1, . . . , m each of type (d − 1) × d. The
generic element cjk (t) of the matrix C(t) is the number of migrations from j to
k in period t. These matrices may be computed from m data sets of migration
events.
An obvious question in this context is whether the transition probabilities can
be assumed to be constant in time or not. A first approach to analyze the
time-stability of transition probabilities is to compare the estimated transition
probabilities per period for m periods with estimates from pooled data.
The aggregated migration counts from m periods are
                                             m
                                       def
                                             X
                                   c+
                                    jk =           cjk (t)                        (4.10)
                                             t=1
4.2    Analyzing the Time-Stability of Transition Probabilities                             95


which are combined in the matrix
                                                     m
                                               def
                                                     X
                                        C+ =                C(t)
                                                      t=1

of type (d − 1) × d. The migration rates computed per period
                                       def cjk (t)
                               p̂jk (t) =             ,     t = 1, . . . , m             (4.11)
                                             nj (t)
with
                                                      d
                                               def
                                                      X
                                       nj (t) =             cjk (t)
                                                      k=1
have to be compared with the migration rates from the pooled data. Based on
the aggregated migration counts the estimated transition probabilities

                                                   def    c+
                                                           jk
                                             p̂+
                                               jk =                                      (4.12)
                                                          nj +
with
                               d             m
                         def
                               X             X
                    n+
                     j =             c+
                                      jk =         nj (t),       j = 1, . . . , d − 1
                               k=1           t=1
can be computed.


4.2.2     Are the Transition Probabilities Stationary?

Under the assumption of independence for the migration events the vector
of migration counts (cj1 (t), . . . cjd (t)) starting from j is in each period t a
realization from a multinomial distributed random vector
                (c̃j1 (t), . . . , c̃jd (t)) ∼ Mult(nj (t); pj1 (t), . . . , pjd (t)),
where pjk (t) denotes the transition probability from j to k in period t. For
fixed j ∈ {1, . . . , d − 1} the hypothesis of homogeneity
 H0 : pj1 (1) = . . . = pj1 (m), pj2 (1) = . . . = pj2 (m), . . . , pjd (1) = . . . = pjd (m)
may be tested with the statistic
                                         h                       i2
                                     d X
                                     X m   c̃jk (t) − nj (t)p̂+
                                                              jk
                           Xj2 =                                               .         (4.13)
                                     k=1 t=1
                                                           nj (t)p̂+
                                                                   jk
96                                                                     4   Rating Migrations


This statistic is asymptotically χ2 -distributed with (d−1)(m−1) degrees of free-
dom under H0 . H0 is rejected with approximative level α if the statistic com-
puted from the data is greater than the (1 − α)-quantile of the χ2 -distribution
with (d − 1)(m − 1) degrees of freedom.
The combined hypothesis of homogeneity
  H0 : pjk (t) = pjk (m),     t = 1, . . . , m − 1,      j = 1, . . . , d − 1,    k = 1, . . . , d
means that the matrix of transition probabilities is constant over time. There-
fore, the combined null hypothesis may equivalently be formulated as
                          H0 : P(1) = P(2) = . . . = P(m),
where P(t) denotes the transition matrix at t with generic element pjk (t). This
hypothesis may be tested using the statistic
                                               d−1
                                               X
                                     X2 =            Xj2 ,                                   (4.14)
                                               j=1

which is under H0 asymptotically χ2 -distributed with (d−1)2 (m−1) degrees of
freedom. The combined null hypothesis is rejected with approximative level α if
the computed statistic is greater than the (1−α)-quantile of the χ2 -distribution
with (d − 1)2 (m − 1) degrees of freedom (Bishop, Fienberg, and Holland, 1975,
p. 265).
This approach creates two problems. Firstly, the two tests are based on the as-
sumption of independence. Secondly, the test statistics are only asymptotically
χ2 -distributed. This means that sufficiently large sample sizes are required. A
rule of thumb given in the literature is nj (t)p̂+
                                                 jk ≥ 5 for all j and k which is
hardly fulfilled in the context of credit migrations.
The two χ2 -statistics in (4.13) and (4.14) are of the Pearson type. Two other
frequently used and asymptotically equivalent statistics are the corresponding
χ2 -statistics of the Neyman type
                              h                       i2
                       d X
                       X  m     c̃jk (t) − nj (t)p̂+
                                                   jk
                                                                d−1
                                                                X
                 Yj2 =                                   , Y2 =     Yj2
                         t=1
                                         c̃jk (t)               j=1
                     k=1

          2
and the χ -statistics
                        d X
                          m
                                           "           #                d−1
                        X                    c̃jk (t)                   X
              G2j = 2           c̃jk (t) ln              ,       G2 =         G2j ,
                        k=1 t=1
                                            nj (t)p̂+
                                                    jk                  j=1
4.2    Analyzing the Time-Stability of Transition Probabilities                      97


which results from Wilks log-likelihood ratio.
Considering the strong assumptions on which these test procedures are based
on, one may prefer a simpler approach complementing the point estimates
p̂jk (t) by estimated standard errors
                                     s
                                       p̂jk (t)(1 − p̂jk (t))
                          σ̂jk (t) =
                                               nj (t)

for each period t ∈ {1, . . . , m}. For correlated migrations the estimated stan-
dard deviation is computed analogously to (4.9). This may graphically be
visualized by showing

                  p̂+
                    jk ,   p̂jk (t),   p̂jk (t) ± 2σ̂jk (t),   t = 1, . . . , m   (4.15)

simultaneously for j = 1, . . . , d − 1 and k = 1, . . . , d.


4.2.3      Computation and Quantlets

The quantlet      XFGRatMig3.xpl computes aggregated migration counts,
estimated transition probabilities and χ2 -statistics.    The call is out =
XFGRatMig3(c, rho, s), where c is a (d − 1) × d × m array of counts for
m periods and rho is a non-negative correlation parameter. For rho = 0 the
independent case is computed, compare Section 4.1.4. The last input parameter
s controls the accuracy of the computation, see Section 4.1.4.
The result is assigned to the variable out, which is a list containing:

      • out.cagg
        the (d − 1) × d matrix with aggregated counts
      • out.etpagg
        the (d − 1) × d matrix with estimated aggregated transition probabilities
      • out.esdagg
        the (d − 1) × d matrix with estimated aggregated standard deviations
      • out.etp
        the (d−1)×d×m array with estimated transition probabilities per period
      • out.esd
        the (d − 1) × d × m array with estimated standard deviations per period
98                                                            4   Rating Migrations


     • out.chi
       the 3 × d matrix with χ2 -statistics, degrees of freedom and p-values

The matrices out.cagg, out.etpagg and out.etp have components given by
(4.10), (4.12) and (4.11). The elements of out.esdagg and out.esd result
by replacing p̂jk in (4.9) by p̂+
                                jk or p̂jk (t), respectively. The matrix out.chi
contains in the first row the statistics from (4.13) for j = 1, . . . , d − 1 and
(4.14). The second and third row gives the corresponding degrees of freedom
and p-values.
The quantlet     XFGRatMig4.xpl (XFGRatMig4(etp, esd, etpagg)) graphs
migration rates per period with estimated standard deviations and migration
rates from pooled data. The inputs are:

     • etp
       the (d−1)×d×m array with estimated transition probabilities per period
     • esd
       the (d − 1) × d × m array with estimated standard deviations per period
     • etpagg
       the (d − 1) × d matrix with estimated aggregated transition probabilities

The output consists of (d − 1)d graphics for j = 1, . . . , d − 1 and k = 1, . . . , d.
Each graphic shows t = 1, . . . , m at the x-axis versus the four variables from
(4.15) at the y-axis.


4.2.4     Examples with Graphical Presentation

The following examples are based on transition matrices given by Nickell et al.
(2000, pp. 208, 213). The data set covers long-term bonds rated by Moody’s
in the period 1970–1997. Instead of the original matrices of type 8 × 9 we
use condensed matrices of type 3 × 4 by combining the original data in the
d = 4 basic rating categories A, B, C, and D, where D stands for the category
of defaulted credits.
The aggregated data for the full period from 1970 to 1997 are
                                                                   
       21726    790      0     0              0.965 0.035     0     0
C =  639 21484 139 421  , P̂ =  0.028 0.947 0.006 0.019  ,
           0     44 307       82                  0 0.102 0.709 0.189
4.2   Analyzing the Time-Stability of Transition Probabilities                    99


where C is the matrix of migration counts and P̂ is the corresponding matrix
of estimated transition probabilities. These matrices may be compared with
corresponding matrices for three alternative states of the business cycles:
                                                                              
          7434     277    0      0                 0.964   0.036       0       0
 C(1) =  273     7306   62    187  ,   P̂(1) =  0.035   0.933   0.008   0.024  ,
             0      15   94     33                     0   0.106   0.662   0.232

for the through of the business cycle,
                                                                              
          7125     305    0      0                 0.959   0.041       0       0
 C(2) =  177     6626   35    147  ,   P̂(2) =  0.025   0.949   0.005   0.021  ,
             0      15   92     24                     0   0.115   0.702   0.183

for the normal phase of the business cycle, and
                                                                              
          7167     208     0     0                 0.972   0.028       0       0
 C(3) =  189     7552    42    87  ,   P̂(3) =  0.024   0.960   0.005   0.011  ,
             0      14   121    25                     0   0.088   0.756   0.156

 for the peak of the business cycle. The three categories depend on whether
real GDP growth in the country was in the upper, middle or lower third of the
growth rates recorded in the sample period (Nickell et al., 2000, Sec. 2.4).
In the following we use these matrices for illustrative purposes as if data from
m = 3 periods are given. Figure 4.1 gives a graphical presentation for d = 4
rating categories and m = 3 periods.
In order to illustrate the testing procedures presented in Section 4.2.2 in
the following the hypothesis is tested that the data from the three periods
came from the same theoretical transition probabilities. Clearly, from the
construction of the three periods we may expect, that the test rejects the null
hypothesis. The three χ2 -statistics with 6 = 3(3 − 1) degrees of freedom for
testing the equality of the rows of the transition matrices have p-values 0.994,
> 0.9999, and 0.303. Thus, the null hypothesis must be clearly rejected for
the first two rows at any usual level of confidence while the test for the last
row suffers from the limited sample size. Nevertheless, the χ2 -statistic for the
simultaneous test of the equality of the transition matrices has 18 = 32 · (3 − 1)
degrees of freedom and a p-value > 0.9999. Consequently, the null hypothesis
must be rejected at any usual level of confidence.
                                                                   XFGRatMig3.xpl

A second example is given by comparing the matrix P̂ based on the whole data
with the matrix P̂(2) based on the data of the normal phase of the business
100                                                                                                                                                         4                        Rating Migrations




                                                                      25




                                                                                                                       1




                                                                                                                                                                              1
                    25




                                                                      20




                                                                                                                       0.5




                                                                                                                                                                              0.5
                    20
      0.95+Y*E-2




                                                         0.02+Y*E-2
                                                                      15




                                                                                                         Y




                                                                                                                                                                Y
                                                                                                                       0




                                                                                                                                                                              0
                    15




                                                                      10




                                                                                                                       -0.5




                                                                                                                                                                              -0.5
                    10




                                                                      5




                                                                                                                       -1




                                                                                                                                                                              -1
                    5




                           1   1.5      2      2.5   3                     1   1.5      2      2.5   3                        1   1.5      2      2.5   3                            1   1.5      2      2.5   3
                                     Periods                                         Periods                                            Periods                                                Periods
                    25




                                                                                                                       8
                                                                      4




                                                                                                                                                                              20
                    20




                                                                                                                       6
                                                                      3
      0.015+Y*E-2




                                                                                                         0.002+Y*E-2




                                                                                                                                                                0.005+Y*E-2
                                                         0.92+Y*E-2




                                                                                                                                                                              15
                    15




                                                                                                                       4
                                                                      2




                                                                                                                                                                              10
                    10




                                                                                                                       2
                                                                      1




                                                                                                                                                                              5
                    5




                           1   1.5      2      2.5   3                     1   1.5      2      2.5   3                        1   1.5      2      2.5   3                            1   1.5      2      2.5   3
                                     Periods                                         Periods                                            Periods                                                Periods
                    1




                                                                                                                                                                              25
                                                                                                                       25
                                                                      15
                    0.5




                                                                                                                                                                              20
                                                                                                                       20
                                                                                                         0.55+Y*E-2




                                                                                                                                                                0.05+Y*E-2
                                                         Y*E-2
      Y




                                                                                                                                                                              15
                    0




                                                                                                                       15
                                                                      10




                                                                                                                       10
                    -0.5




                                                                                                                                                                              10
                                                                                                                       5
                                                                      5




                                                                                                                                                                              5
                    -1




                           1   1.5      2      2.5   3                     1   1.5      2      2.5   3                        1   1.5      2      2.5   3                            1   1.5      2      2.5   3
                                     Periods                                         Periods                                            Periods                                                Periods




                                                     Figure 4.1. Example for                                                      XFGRatMig4.xpl



cycle. In this case a test possibly may not indicate that differences between
P and P(2) are significant. Indeed, the χ2 -statistics for testing the equality
of the rows of the transition matrices with 3 degrees of freedom have p-values
0.85, 0.82, and 0.02. The statistic of the simultaneous test with 9 degrees of
freedom has a p-value of 0.69.
4.3   Multi-Period Transitions                                                  101


4.3     Multi-Period Transitions
In the multi-period case, transitions in credit ratings are also characterized by
rating transition matrices. The m-period transition matrix is labeled P(m) .
                      (m)
Its generic element pjk gives the rating transition probability from rating
j to k over the m ≥ 1 periods. For the sake of simplicity the one-period
transition matrix P(1) is shortly denoted by P in the following. This transition
matrix is considered to be of type d × d. The last row contains (0, 0, . . . , 0, 1)
expressing the absorbing default state. Multi-period transition matrices can be
constructed from one-period transition matrices under the assumption of the
Markov property.


4.3.1    Time Homogeneous Markov Chain

Let {X(t)}t≥0 be a discrete-time stochastic process with countable state space.
It is called a first-order Markov chain if

  P [(X(t + 1) = x(t + 1)|X(t) = x(t), . . . , X(0) = x(0)]
                                = P [X(t + 1) = x(t + 1)|X(t) = x(t)]        (4.16)

whenever both sides are well-defined. Further, the process is called a homoge-
neous first-order Markov chain if the right-hand side of (4.16) is independent
of t (Brémaud, 1999).
Transferred to rating transitions, homogeneity and the Markov property imply
constant one-period transition matrices P independent of the time t, i. e. P
obeys time-stability. Then the one-period d × d transition matrix P contains
the non-negative rating transition probabilities

                        pjk = P(X(t + 1) = k|X(t) = j).

They fulfill the conditions
                                       d
                                       X
                                             pjk = 1
                                       k=1

and
                        (pd1 , pd2 , . . . , pdd ) = (0, . . . , 0, 1).
The latter reflects the absorbing boundary of the transition matrix P.
102                                                                         4     Rating Migrations


The two-period transition matrix is then calculated by ordinary matrix mul-
tiplication, P(2) = PP. Qualitatively, the composition of the portfolio after
one period undergoes the same transitions again. Extended for m periods this
reads as
                          P(m) = P(m−1) P = Pm
with non-negative elements
                                             d
                                  (m)           (m−1)
                                             X
                                pjk =          pji    pik .
                                             i=1

The recursive scheme can also be applied for non-homogeneous transitions, i.e.
for one-period transition matrices being not equal, which is the general case.


4.3.2    Bootstrapping Markov Chains

The one-period transition matrix P is unknown and must be estimated. The
estimator P̂ is associated with estimation errors which consequently influence
the estimated multi-period transition matrices. The traditional approach to
quantify this influence turns out to be tedious since it is difficult to obtain
the distribution of (P̂ − P), which could characterize the estimation errors.
                                             (m)
Furthermore, the distribution of (P̂               − P(m) ), with
                                            (m) def    m
                                       P̂       = P̂ ,                                       (4.17)

has to be discussed in order to address the sensitivity of the estimated tran-
sition matrix in the multi-period case. It might be more promising to apply
resampling methods like the bootstrap combined with Monte Carlo sampling.
For a representative review of resampling techniques see Efron and Tibshirani
(1993) and Shao and Tu (1995), for bootstrapping Markov chains see Athreya
and Fuh (1992) and Härdle, Horowitz, and Kreiss (2001).
Assuming a homogeneous first-order Markov chain {X(t)}t≥0 , the rating tran-
sitions are generated from the unknown transition matrix P. In the spirit of
the bootstrap method, the unknown transition matrix P is substituted by the
estimated transition matrix P̂, containing transition rates. This then allows to
draw a bootstrap sample from the multinomial distribution assuming indepen-
dent rating migrations,

                    (c̃∗j1 , . . . , c̃∗jd ) ∼ Mult(nj ; p̂j1 , . . . , p̂jd ),              (4.18)
4.3    Multi-Period Transitions                                                                103


for all initial rating categories j = 1, . . . , d − 1. Here, c̃∗jk denotes the bootstrap
random variable of migration counts from j to k in one period and p̂jk is the
estimated one-period transition probability (transition rate) from j to k.
Then the bootstrap sample {c∗jk }j=1,...,d−1,k=1,...,d is used to estimate a boot-
                                ∗
strap transition matrix P̂ with generic elements p̂∗jk according

                                                        c∗jk
                                              p̂∗jk =        .                             (4.19)
                                                        nj

Obviously, defaulted credits can not upgrade. Therefore, the bootstrap is not
                                          ∗
necessary for obtaining the last row of P̂ , which is (p̂∗d1 , . . . , p̂∗dd ) = (0, . . . , 0, 1).
Then matrix multiplication gives the m-period transition matrix estimated
from the bootstrap sample,
                                              ∗(m)          ∗m
                                         P̂          = P̂        ,
                        ∗(m)
with generic elements p̂jk .
                                                        ∗(m)
We can now access the distribution of P̂                         by Monte Carlo sampling, e. g. B
                                ∗(m)
samples are drawn and labeled P̂b     for b = 1, . . . , B. Then the distribution of
  ∗(m)                               (m)
P̂     estimates the distribution of P̂ . This is justified since the consistency
of this bootstrap estimator has been proven by Basawa, Green, McCormick,
                                                                                        ∗(m)
and Taylor (1990). In orderto characterize the distribution of P̂  , the 
                         ∗(m)                                           (m)
standard deviation Std p̂jk   which is the bootstrap estimator of Std p̂jk ,
is estimated by
                             v
                         u           B h                        i2
               d p̂∗(m) = t 1
                                                      
                                             ∗(m)           ∗(m)
                             u       X
               Std   jk                   p̂ jk,b − Ê   p̂ jk         (4.20)
                               B−1
                                                     b=1

with
                                                    B
                                      
                                         ∗(m)
                                                 1 X ∗(m)
                                    Ê p̂jk     =     p̂jk,b
                                                  B
                                                           b=1
                                                                     ∗(m)
for all j = 1, . . . , d − 1 and k = 1, . . . , d. Here, p̂jk,b is the generic element of
                                                     ∗(m)
the b-th m-period bootstrap sample P̂b . So (4.20) estimates
                                                             the unknown
                                                         (m)
standard deviation of the m-period transition rate Std p̂jk   using B Monte
Carlo samples.
104                                                                 4   Rating Migrations


4.3.3      Computation and Quantlets

For time homogeneity, the m-period rating transition matrices are obtained
by the quantlet XFGRatMig5.xpl (q = XFGRatMig5(p, m)). It computes all
t = 1, 2, . . . , m multi-period transition matrices given the one-period d×d matrix
p. Note that the output q is a d × d × m array, which can be directly visualized
by XFGRatMig6.xpl (XFGRatMig6(q)) returning a graphical output. To vi-
sualize t-period transition matrices each with d2 elements for t = 1, . . . , m, we
plot d2 aggregated values
                                  k
                                     (t)
                                  X
                         j−1+       pjl ,     j, k = 1, . . . , d                  (4.21)
                                  l=1

for all t = 1, . . . , m periods simultaneously.
A typical example is shown in Figure 4.2 for the one-year transition matrix
given in Nickell et al. (2000, p. 208), which uses Moody’s unsecured bond
ratings between 31/12/1970 and 31/12/1997. According (4.21), aggregated
values are plotted for t = 1, . . . , 10. Thereby, the transition matrix is condensed
for simplicity to 4 × 4 with only 4 basic rating categories, see the example in
Section 4.2.4. Again, the last category stands for defaulted credits. Estimation
errors are neglected in Figure 4.2.

      out = VaRRatMigRateM (counts, m, B)
           bootstraps m-period transition probabilities

Bootstrapping is performed by the quantlet VaRRatMigRateM. It takes as input
counts, the (d − 1) × d matrix of migration counts, from which the bootstrap
sample is generated. Further, m denotes the number of periods and B the
number of generated bootstrap samples. The result is assigned to the variable
out, which is a list of the following output:

   • out.btm
     the (d−1)×d×B array of bootstrapped m-period transition probabilities
   • out.etm
     the (d − 1) × d matrix of m-period transition rates
   • out.stm
     the (d − 1) × d matrix of estimated standard deviations of the m-period
     transition rates
4.3             Multi-Period Transitions                                            105
                4.5
                4
                3.5
                3
 Aggregations
                2.5
                2
                1.5
                1
                0.5
                0




                         2             4            6            8             10
                                              Periods
                          Figure 4.2. Example for XFGRatMig6.xpl:
                      Aggregated values of multi-period transition matrices.



The components of the matrices out.btm are calculated according (4.18) and
(4.19). The matrices out.etm and out.stm have components given by (4.17)
and (4.20).
106                                                          4    Rating Migrations


                                         To k
        From j     1      2      3       4    5        6         Default    nj
           1      0.51   0.40   0.09    0.00 0.00     0.00        0.00      35
           2      0.08   0.62   0.19    0.08 0.02     0.01        0.00     103
           3      0.00   0.08   0.69    0.17 0.06     0.00        0.00     226
           4      0.01   0.01   0.10    0.64 0.21     0.03        0.00     222
           5      0.00   0.01   0.02    0.19 0.66     0.12        0.00     137
           6      0.00   0.00   0.00    0.02 0.16     0.70        0.12      58
        Default   0.00   0.00   0.00    0.00 0.00     0.00        1.00       0

      Table 4.1. German rating transition matrix (d = 7) and the number of
      migrations starting from rating j = 1, . . . , d


4.3.4      Rating Transitions of German Bank Borrowers

In the following the bootstrapping is illustrated in an example. As estimator
P̂ we use the 7 × 7 rating transition matrix of small and medium-sized German
bank borrowers from Machauer and Weber (1998, p. 1375), shown in Table 4.1.
The data cover the period from January 1992 to December 1996.
With the quantlet VaRRatMigRateM the m-period transition probabilities are
                (m)
estimated by p̂jk and the bootstrap estimators of their standard deviations
are calculated. This calculations are done for 1, 5 and 10 periods and B = 1000
Monte Carlo steps. A part of the resulting output is summarized in Table
4.2, only default probabilities are considered. Note that the probabilities in
Table 4.1 are rounded and the following computations are based on integer
migration counts cjk ≈ nj pjk .
                                                                    XFGRatMig7.xpl



4.3.5      Portfolio Migration

Based on the techniques presented in the last sections we can now tackle the
problem of portfolio migration, i. e. we can assess the distribution of n(t) credits
over the d rating categories and its evolution over periods t ∈ {1, . . . m}. Here,
a stationary transition matrix P is assumed. The randomly changing number
of credits in category j at time t is labeled by ñj (t) and allows to define non-
4.3    Multi-Period Transitions                                                           107


                                                                                    
  From j
               (1)
              p̂jd   d p̂∗(1)
                     Std
                                        (5)
                                       p̂jd        d p̂∗(5)
                                                   Std
                                                                        (10)
                                                                       p̂jd    d p̂∗(10)
                                                                               Std
                           jd                            jd                          jd


       1      0.00      0.000         0.004           0.003            0.037      0.015
       2      0.00      0.000         0.011           0.007            0.057      0.022
       3      0.00      0.000         0.012           0.005            0.070      0.025
       4      0.00      0.000         0.038           0.015            0.122      0.041
       5      0.00      0.000         0.079           0.031            0.181      0.061
       6      0.12      0.042         0.354           0.106            0.465      0.123

      Table 4.2. Estimated m-period default probabilities and the bootstrap
      estimator of their standard deviations for m = 1, 5, 10 periods


negative portfolio weights

                                 def ñj (t)
                         w̃j (t) =             ,   j = 1, . . . , d,
                                      n(t)

which are also random variables. They can be related to migration counts
c̃jk (t) of period t by
                                            d
                                       1 X
                        w̃k (t + 1) =          c̃jk (t)            (4.22)
                                      n(t) j=1

counting all migrations going from any category to the rating category k. Given
the weights w̃j (t) = wj (t) at t, the migration counts c̃jk (t) are binomially
distributed
                   c̃jk (t)|w̃j (t) = wj (t) ∼ B (n(t) wj (t), pjk ) .    (4.23)
The non-negative weights are aggregated in a row vector

                             w̃(t) = (w̃1 (t), . . . , w̃d (t))

and sum up to one
                                     d
                                     X
                                           wj (t) = 1.
                                     j=1

In the case of independent rating migrations, the expected portfolio weights at
t + 1 given the weights at t result from (4.22) and (4.23) as

                        E[w̃(t + 1)|w̃(t) = w(t)] = w(t)P
108                                                         4   Rating Migrations


and the conditional covariance matrix V [w̃(t + 1)|w̃(t) = w(t)] has elements
                          Pd
                        1
                     n(t) j=1 wj (t)pjk (1 − pjk )
                                                          k=l
                def
            vkl =                                     for                (4.24)
                     − 1 Pd w (t)p p
                    
                                                           k 6
                                                             =  l.
                         n(t)  j=1 j     jk jl



For m periods the multi-period transition matrix P(m) = Pm has to be used,
see Section 4.3.1. Hence, (4.22) and (4.23) are modified to
                                               d
                                          1 X (m)
                         w̃k (t + m) =           c̃ (t)
                                         n(t) j=1 jk

and                                                             
                   (m)                                       (m)
                 c̃jk (t)|w̃j (t) = wj (t) ∼ B n(t) wj (t), pjk .
       (m)
Here, cjk (t) denotes the number of credits migrating from j to k over m
periods starting in t. The conditional mean of the portfolio weights is now
given by
                     E[w̃(t + m)|w̃(t) = w(t)] = w(t)P(m)
and the elements of the conditional covariance matrix V [w̃(t + m)|w̃(t) = w(t)]
                                              (m)     (m)
result by replacing pjk and pjl in (4.24) by pjk and pjl .




Bibliography
Athreya, K. B. and Fuh, C. D. (1992). Bootstrapping Markov chains, in
    R. LePage and L. Billard (eds), Exploring the Limits of Bootstrap, Wi-
    ley, New York, pp. 49–64.
Basawa, I. V., Green, T. A., McCormick, W. P., and Taylor, R. L. (1990).
    Asymptotic bootstrap validity for finite Markov chains, Communications
    in Statistics A 19: 1493–1510.
Basel Committee on Banking Supervision (2001). The Internal Ratings-Based
    Approach. Consultative Document.
Bishop, Y. M. M., Fienberg, S. E., and Holland, P. W. (1975). Discrete Multi-
    variate Analysis: Theory and Practice, MIT Press, Cambridge.
4.3   Multi-Period Transitions                                             109


Brémaud, P. (1999). Markov Chains: Gibbs Fields, Monte Carlo Simulation,
     and Queues, Springer, New York.
Crouhy, M., Galai, D., and Mark, R. (2001). Prototype risk rating system,
    Journal of Banking & Finance 25: 47–95.
Davidson, J. (1994). Stochastic Limit Theory, Oxford University Press, Oxford.
Efron, B. and Tibshirani, R. J. (1993). An Introduction to the Bootstrap,
    Chapman & Hall, New York.
Finger, C. C. (1998). Extended ”constant correlations” in CreditManager 2.0,
    CreditMetrics Monitor pp. 5–8. 3rd Quarter.
Gupton, G. M., Finger, C. C., and Bhatia, M. (1997). CreditMetrics - Technical
    Document, J.P. Morgan.
Härdle, W., Horowitz, J., and Kreiss, J. P. (2001). Bootstrap Methods for
     Time Series, SFB Discussion Paper, 59.
Huschens, S. and Locarek-Junge, H. (2000). Konzeptionelle und statistische
    Grundlagen der portfolioorientierten Kreditrisikomessung, in A. Oehler
    (ed.), Kreditrisikomanagement - Portfoliomodelle und Derivate, Schäffer-
    Poeschel Verlag, Stuttgart, pp. 25–50.
Jarrow, R. A., Lando, D., and Turnbull, S. M. (1997). A Markov model for
     the term structure of credit risk spreads, The Review of Financial Studies
     10(2): 481–523.
Kim, J. (1999). Conditioning the transition matrix, Risk: Credit Risk Special
    Report, October: 37–40.
Lancaster, T. (1990). The Econometric Analysis of Transition Data, Cambridge
    University Press.
Machauer, A. and Weber, M. (1998). Bank behavior based on internal credit
    ratings of borrowers, Journal of Banking & Finance 22: 1355–1383.
Mardia, K. V., Kent, J. T., and Bibby, J. M. (1979). Multivariate Analysis,
    Academic Press, London.
Nickell, P., Perraudin, W., and Varotto, S. (2000). Stability of rating transi-
    tions, Journal of Banking & Finance 24: 203–227.
110                                                   4   Rating Migrations


Saunders, A. (1999). Credit Risk Measurement: New Approaches to Value at
    Risk and Other Paradigms, Wiley, New York.
Shao, J. and Tu, D. (1995). The Jackknife and Bootstrap, Springer, New York.
5 Sensitivity analysis of credit
  portfolio models
                                           Rüdiger Kiesel and Torsten Kleinow


To assess the riskiness of credit-risky portfolios is one of the most challenging
tasks in contemporary finance. The decision by the Basel Committee for Bank-
ing Supervision to allow sophisticated banks to use their own internal credit
portfolio risk models has further highlighted the importance of a critical eval-
uation of such models. A crucial input for a model of credit-risky portfolios
is the dependence structure of the underlying obligors. We study two widely
used approaches, namely a factor structure and the direct specification of a
copula, within the framework of a default-based credit risk model. Using the
powerful simulation tools of XploRe we generate portfolio default distributions
and study the sensitivity of commonly used risk measures with respect to the
approach in modelling the dependence structure of the portfolio.


5.1     Introduction
Understanding the principal components of portfolio credit risk and their in-
teraction is of considerable importance. Investment banks use risk-adjusted
capital ratios such as risk-adjusted return on capital (RAROC) to allocate eco-
nomic capital and measure performance of business units and trading desks.
The current attempt by the Basel Committee for Banking Supervision in its
Basel II proposals to develop an appropriate framework for a global financial
regulation system emphasizes the need for an accurate understanding of credit
risk; see BIS (2001). Thus bankers, regulators and academics have put con-
siderable effort into attempts to study and model the contribution of various
ingredients of credit risk to overall credit portfolio risk. A key development
has been the introduction of credit portfolio models to obtain portfolio loss
distributions either analytically or by simulation. These models can roughly
112                            5   Sensitivity analysis of credit portfolio models


be classified as based on credit rating systems, on Merton’s contingent claim
approach or on actuarial techniques; see Crouhy, Galai and Mark (2001) for
exact description and discussion of the various models.
However, each model contains parameters that effect the risk measures pro-
duced, but which, because of a lack of suitable data, must be set on a judge-
mental basis. There are several empirical studies investigating these effects:
Gordy (2000) and Koyluoglu and Hickmann (1998) show that parametrisation
of various models can be harmonized, but use only default-driven versions (a
related study with more emphasis on the mathematical side of the models is
Frey and McNeil (2001)). Crouhy, Galai and Mark (2000) compare models
on benchmark portfolio and find that the highest VaR estimate is 50 per cent
larger than the lowest. Finally, Nickell, Perraudin and Varotto (1998) find that
models yield too many exceptions by analyzing VaRs for portfolios over rolling
twelve-month periods.
Despite these shortcomings credit risk portfolio models are regarded as valu-
able tools to measure the relative riskiness of credit risky portfolios – not least
since measures such as e.g. the spread over default-free interest rate or default
probabilities calculated from long runs of historical data suffer from other in-
trinsic drawbacks – and are established as benchmark tools in measuring credit
risk.
The calculation of risk capital based on the internal rating approach, currently
favored by the Basel Supervisors Committee, can be subsumed within the class
of ratings-based models. To implement such an approach an accurate under-
standing of various relevant portfolio characteristics within such a model is
required and, in particular, the sensitivity of the risk measures to changes in
input parameters needs to be evaluated. However, few studies have attempted
to investigate aspects of portfolio risk based on rating-based credit risk models
thoroughly. In Carey (1998) the default experience and loss distribution for
privately placed US bonds is discussed. VaRs for portfolios of public bonds,
using a bootstrap-like approach, are calculated in Carey (2000). While these
two papers utilize a ”default-mode” (abstracting from changes in portfolio value
due to changes in credit standing), Kiesel, Perraudin and Taylor (1999) employ
a ”mark-to-market” model and stress the importance of stochastic changes in
credit spreads associated with market values – an aspect also highlighted in
Hirtle, Levonian, Saidenberg, Walter and Wright (2001).
The aim of this chapter is to contribute to the understanding of the performance
of rating-based credit portfolio models. Our emphasis is on comparing the
effect of the different approaches to modelling the dependence structure of
5.2   Construction of portfolio credit risk models                           113


the individual obligors within a credit-risky portfolio. We use a default-mode
model (which can easily be extended) to investigate the effect of changing
dependence structure within the portfolio. We start in Section 5.2 by reviewing
the construction of a rating-based credit portfolio risk model. In Section 5.3 we
discuss approaches to modelling dependence within the portfolio. In Section
5.4 we comment on the implementation in XploRe and present results from our
simulations.


5.2      Construction of portfolio credit risk models
To construct a credit risk model we have to consider individual risk elements
such as

 (1i) Default Probability: the probability that the obligor or counterparty will
      default on its contractual obligations to repay its debt,
 (2i) Recovery Rates: the extent to which the face value of an obligation can
      be recovered once the obligor has defaulted,
 (3i) Credit Migration: the extent to which the credit quality of the obligor or
      counterparty improves or deteriorates;

and portfolio risk elements

(1p) Default and Credit Quality Correlation: the degree to which the default
     or credit quality of one obligor is related to the default or credit quality
     of another,
(2p) Risk Contribution and Credit Concentration: the extent to which an indi-
     vidual instrument or the presence of an obligor in the portfolio contributes
     to the totality of risk in the overall portfolio.

From the above building blocks a rating-based credit risk model is generated
by

(1m) the definition of the possible states for each obligor’s credit quality, and
     a description of how likely obligors are to be in any of these states at the
     horizon date, i.e. specification of rating classes and of the corresponding
     matrix of transition probabilities (relating to (1i) and (3i)).
114                            5    Sensitivity analysis of credit portfolio models


(2m) quantifying the interaction and correlation between credit migrations of
     different obligors (relating to (1p)).
(3m) the re-evaluation of exposures in all possible credit states, which in case of
     default corresponds to (2i) above; however, for non-default states a mark-
     to-market or mark-to-model (for individual assets) procedure is required.

During this study we will focus on the effects of default dependence modelling.
Furthermore, we assume that on default we are faced with a zero recovery rate.
Thus, only aspects (1i) and (1p) are of importance in our context and only
two rating classes – default and non-default – are needed. A general discussion
of further aspects can be found in any of the books Caouette, Altman and
Narayanan (1998), Ong (1999), Jorion (2000) and Crouhy et al. (2001). For
practical purposes we emphasize the importance of a proper mark-to-market
methodology (as pointed out in Kiesel et al. (1999)). However, to study the
effects of dependence modelling more precisely, we feel a simple portfolio risk
model is sufficient.
As the basis for comparison we use Value at Risk (VaR) – the loss which will
be exceeded on some given fractions of occasions (the confidence level) if a
portfolio is held for a particular time (the holding period).


5.3      Dependence modelling
To formalize the ratings-based approach, we characterize each exposure j ∈
{1, . . . , n} by a four-dimensional stochastic vector

                              (Sj , kj , lj , π(j, kj , lj )),

where for obligor j

  (1) Sj is the driving stochastic process for defaults and rating migrations,
  (2) kj , lj represent the initial and end-of-period rating category,
  (3) π(.) represents the credit loss (end-of-period exposure value).

In this context Sj (which is, with reference to the Merton model, often in-
terpreted as a proxy of the obligor’s underlying equity) is used to obtain the
end-of-period state of the obligor. If we assume N rating classes, we obtain
5.3    Dependence modelling                                                        115


cut-off points −∞ = zk,0 , zk,1 , zk,2 , . . . , zk,N −1 , zk,N = ∞ using the matrix of
transition probabilities together with a distributional assumption on Sj . Then,
obligor j changes from rating k to rating l if the variable Sj falls in the range
[zk,l−1 , zkl ]. Our default-mode framework implies two rating classes, default
resp. no-default, labeled as 1 resp. 0 (and thus only a single cut-off point
obtained from the probability of default). Furthermore, interpreting π(•) as
the individual loss function, π(j, 0, 0) = 0 (no default) and according to our
zero recovery assumption π(j, 0, 1) = 1. To illustrate the methodology we plot
in Figure 5.1 two simulated drivers S1 and S2 together with the corresponding
cut-off points z1,1 and z2,1 .




        1.64

        1.30


        0.96


        0.62



                       50.00      100.00     150.00      200.00      250.00

      Figure 5.1. Two simulated driver Sj and the corresponding cut-off
      points for default. XFGSCP01.xpl



5.3.1     Factor modelling

In a typical credit portfolio model dependencies of individual obligors are mod-
elled via dependencies of the underlying latent variables S = (S1 , . . . , Sn )> . In
the typical portfolio analysis the vector S is embedded in a factor model, which
allows for easy analysis of correlation, the typical measure of dependence. One
assumes that the underlying variables Sj are driven by a vector of common
116                             5     Sensitivity analysis of credit portfolio models


factors. Typically, this vector is assumed to be normally distributed (see e.g.
JP Morgan (1997)). Thus, with Z ∼ N(0, Σ) a p-dimensional normal vec-
tor and  = (1 , . . . , n )> independent normally distributed random variables,
independent also from Z, we define
                             p
                             X
                      Sj =          aji Zi + σj j , j = 1, . . . n.            (5.1)
                             i=1

Here aji describes the exposure of obligor j to factor i, i.e. the so-called factor
loading, and σj is the volatility of the idiosyncratic risk contribution. In such
a framework one can easily interfere default correlation from the correlation of
the underlying drivers Sj . To do so, we define default indicators

                                   Yj = 1(Sj ≤ Dj ),

where Dj is the cut-off point for default of obligor j. The individual default
probabilities are
                       πj = P(Yj = 1) = P(Sj ≤ Dj ),
and the joint default probability is

                πij = P(Yi = 1, Yj = 1) = P(Si ≤ Di , Sj ≤ Dj ).

If we denote by ρij = Corr(Si , Sj ) the correlation of the underlying latent
variables and by ρD
                  ij = Corr(Yi , Yj ) the default correlation of obligors i and j,
then we obtain for the default correlation the simple formula
                                     πij − πi πj
                         ρD
                          ij = p                         .                      (5.2)
                                πi πj (1 − πi )(1 − πj )

Under the assumption that (Si , Sj ) are bivariate normal, we obtain for the joint
default probability
                                Z Di Z Dj
                        πij =                 ϕ(u, v; ρij )dudv,
                                 −∞      −∞

where ϕ(u, v; ρ) is bivariate normal density with correlation coefficient ρ. Thus,
asset (factor) correlation influences default correlation by entering in joint de-
fault probability. Within the Gaussian framework we can easily evaluate the
above quantities, see (5.1). We see, that under our modelling assumption de-
fault correlation is of an order of magnitude smaller than asset correlation
(which is also supported by empirical evidence).
5.3   Dependence modelling                                                  117


                    Asset correlation       Default correlation

                             0.1                   0.0094
                             0.2                   0.0241
                             0.3                   0.0461

         Table 5.1. Effect of asset correlation on default correlation

5.3.2    Copula modelling

As an alternative approach to the factor assumption, we can model each of the
underlying variables independently and subsequently use a copula to generate
the dependence structure. (For basic facts on copulae we refer the reader to
Chapter 2 and the references given there.)
So, suppose we have specified the individual distributions Fj of the variables
Sj and a copula C for the dependence structure. Then, for any subgroup of
obligors {j1 , . . . , jm }, we have for the joint default probability

                        P (Yj1 = 1, . . . , Yjm = 1)

                   =    P (Sj1 ≤ Dj1 , . . . , Sjm ≤ Djm )

                   = Cj1 ,...,jm {Fj1 (Dj1 ), . . . , Fjm (Djm )} ,

where we denote by Cj1 ,...,jm the m-dimensional margin of C. In particular,
the joint default probability of two obligors is now

                          πij = Ci,j {Fi (Di ), Fj (Dj )} .

To study the effect of different copulae on default correlation, we use the fol-
lowing examples of copulae (further details on these copulae can be found in
Embrechts, Lindskog and McNeil (2001)).

  1. Gaussian copula:
                        Gauss
                       CR     (u) = ΦnR (Φ−1 (u1 ), . . . , Φ−1 (un )).

      Here ΦnR denotes the joint distribution function of the n-variate normal
      with linear correlation matrix R, and Φ−1 the inverse of the distribution
      function of the univariate standard normal.
118                            5   Sensitivity analysis of credit portfolio models


  2. t-copula:
                         t
                        Cν,R (u) = tnν,R (t−1                −1
                                           ν (u1 ), . . . , tν (un )),
      where tnν,R denotes the distribution function of an n-variate t-distributed
      random vector with parameter ν > 2 and linear correlation matrix R.
      Furthermore, tν is the univariate t-distribution function with parameter
      ν.
  3. Gumbel copula:
                               n                                          o
             CθGumbel (u) = exp −[(− log u1 )θ + . . . + (− log un )θ ]1/θ ,

      where θ ∈ [1, ∞). This class of copulae is a sub-class of the class of
      Archimedean copulae. Furthermore, Gumbel copulae have applications
      in multivariate extreme-value theory.

In Table 5.2 joint default probabilities of two obligors are reported using three
types of obligors with individual default probabilities roughly corresponding
to rating classes A,B,C. We assume that underlying variables S are univariate
normally distributed and model the joint dependence structure using the above
copulae.

        Copula                          Default probability
                    class A (×10−6 )     class B (×10−4 ) class C (×10−4 )

       Gaussian                  6.89                    3.38             52.45
          t
         C10                    46.55                    7.88             71.03
         C4t                   134.80                   15.35             97.96
      Gumbel, C2                57.20                   14.84            144.56
      Gumbel, C4               270.60                   41.84            283.67

                 Table 5.2. Copulae and default probabilities

The computation shows that t and Gumbel copulae have higher joint default
probabilities than the Gaussian copula (with obvious implication for default
correlation, see equation (5.2)). To explain the reason for this we need the
concept of tail dependence:

DEFINITION 5.1 Let X and Y be continuous random variables with distri-
bution functions F and G. The coefficient of upper tail dependence of X and
Y is
                   lim P[Y > G−1 (u)|X > F −1 (u)] = λU                (5.3)
                    u→1
5.4     Simulations                                                             119


provided that the limit λU ∈ [0, 1] exists. If λU ∈ (0, 1], X and Y are said to
be asymptotically dependent in the upper tail; if λU = 0, X and Y are said to
be asymptotically independent in the upper tail.

For continuous distributions F and G one can replace (5.3) by a version involv-
ing the bivariate copula directly:

                                    1 − 2u + C(u, u)
                                lim                  = λU .                   (5.4)
                                u→1      1−u
Lower tail dependence, which is more relevant to our current purpose, is defined
in a similar way. Indeed, if

                                               C(u, u)
                                         lim           = λL                   (5.5)
                                         u→0     u
exists, then C exhibits lower tail dependence if λL ∈ (0, 1], and lower tail
independence if λL = 0.
It can be shown that random variables linked by Gaussian copulae have no
tail-dependence, while the use of tν and the Gumbel copulae results in tail-
dependence. In fact, in case of the tν copula, we have increasing tail dependence
with decreasing parameter ν, while for the Gumbel family tail dependence
increases with increasing parameter θ.


5.4        Simulations
The purpose here is to generate portfolios with given marginals (normal) and
the above copulae. We focus on the Gaussian and t-copula case.


5.4.1        Random sample generation

For the generation of an n-variate Normal with linear correlation matrix R,
(x1 , . . . , xn )> ∼ N(0, R), we apply the quantlet gennorm. To obtain realizations
from a Gaussian copula we simply have to transform the marginals:

      • Set ui = Φ(xi ), i = 1, . . . , n.
      • (u1 , . . . , un )> ∼ CR
                               Gauss
                                     .
120                                 5   Sensitivity analysis of credit portfolio models

                                               t
To generate random variates from the t-copula Cν,R we recall that if the random
vector X admits the stochastic representation
                               r
                                 ν
                    X =µ+          Y (in distribution),                     (5.6)
                                 Z

with µ ∈ Rn , Z ∼ χ2ν and Y ∼ N(0, Σ), where Z and Y are independent, then
                                                         ν
X is tν distributed with mean µ and covariance matrix ν−2   Σ. Here we assume
as above, that ν > 2. While the stochastic representation (5.6) is still valid, the
interpretation of the parameters has to change for ν ≤ 2. Thus, the following
algorithm can be used (this is Algorithm 5.2 in Embrechts et al. (2001)):

   • Simulate x = (x1 , . . . , xn )> ∼ N(0, R) using gennorm.
   • Simulate a random variate z from χ2ν independent of y1 , . . . , yn .
   • Set x = νz .
             p

   • Set ui = tν (xi ), i = 1, . . . , n.
   • (u1 , . . . , un )> ∼ Cν,R
                            t
                                .

Having obtained the t-copula Cν,Rt
                                    , we only need to replace the ui with Φ−1 (ui )
in order to have a multivariate distribution with t-copula and normal marginals.
The implementation of these algorithms in XploRe is very straightforward. In-
deed, using the quantlet normal we can generate normally distributed random
variables. Naturally all the distribution functions needed are also implemented,
cdfn, cdft etc.


5.4.2     Portfolio results

We simulate standard portfolios of size 500 with all obligors belonging to one
rating class. We use three rating classes, named A,B,C with default prob-
abilities 0.005, 0.05, 0.15 roughly corresponding to default probabilities from
standard rating classes, Ong (1999), p. 77.
For our first simulation exercise we assume that the underlying variables Sj
are normally distributed within a single factor framework, i.e. p = 1 in (5.1).
The factor loadings aj1 in (5.1) are constant and chosen so that the correlation
for the underlying latent variables Sj is ρ = 0.2, which is a standard baseline
5.4    Simulations                                                               121


value for credit portfolio simulations, Kiesel et al. (1999). To generate different
degrees of tail correlation, we link the individual assets together using a Gaus-
sian, a t10 and a t4 -copula as implemented in VaRcredN and VaRcredTcop.


      out = VaRcredN (d, p, rho, opt)
           simulates the default distribution for a portfolio of d homogeneous
           obligors assuming a Gaussian copula.
      out = VaRcredTcop (d, p, rho, df, opt)
           simulates the default distribution for a portfolio of d homogeneous
           obligors assuming a t-copula with df degrees of freedom.

The default driver Sj are normal for all obligors j in both quantlets. p de-
notes the default probability πj of an individual obligor and rho is the asset
correlation ρ. opt is an optional list parameter consisting of opt.alpha, the
significance level for VaR estimation and opt.nsimu, the number of simula-
tions. Both quantlets return a list containing the mean, the variance and the
opt.alpha-quantile of the portfolio default distribution.

                                                  VaR

                     Portfolio   Copula   α = 0.95    α = 0.99
                     A           Normal          10         22
                                    t10          14         49
                                     t4          10         71
                     B           Normal          77        119
                                    t10          95        178
                                     t4         121        219
                     C           Normal         182        240
                                    t10         198        268
                                     t4         223        306

             Table 5.3. Effect of different copulae   XFGSCP02.xpl

The most striking observation from Table 5.3 is the effect tail-dependence has
on the high quantiles of highly-rated portfolios: the 99%-quantile for the t4 -
copula is more than 3-times larger than the corresponding quantile for the
Gaussian copula. The same effect can be observed for lower rated portfolios
122                             5   Sensitivity analysis of credit portfolio models


although not quite with a similar magnitude.
To assess the effects of increased correlation within parts of the portfolio, we
change the factor loading within parts of our portfolio. We assume a second
factor, i.e. p = 2 in (5.1), for a sub-portfolio of 100 obligors increasing the
correlation of the latent variables Sj within the sub-portfolio to 0.5. In the
simulation below, the quantlets VaRcredN2 and VaRcredTcop2 are used.


      out = VaRcredN2 (d1, d2, p, rho1, rho2, opt)
           simulates the default distribution for a portfolio consisting of two
           homogeneous subportfolios using a Gaussian copula.
      out = VaRcredTcop2 (d1, d2, p, rho1, rho2, df, opt)
           simulates the default distribution for a portfolio consisting of two
           homogeneous subportfolios using a t-copula with df degrees of
           freedom.

The number of obligors in the first (second) subportfolio is d1 (d2). rho1
(rho2) is the asset correlation generated by the first (second) factor. The other
parameters correspond to the parameters in VaRcredN and VaRcredTcop.
Such a correlation cluster might be generated by a sector or regional exposure
for a real portfolio. Again, degrees of tail correlation are generated by using
a Gaussian, a t10 and a t4 -copula. As expected the results in Table 5.4 show
a slight increase in the quantiles due to the increased correlation within the
portfolio. However, comparing the two tables we see that the sensitivity of the
portfolio loss quantiles is far higher with regard to the underlying copula – and
its corresponding tail dependence – than to the correlation within the portfolio.
Our simulation results indicate that the degree of tail dependence of the un-
derlying copula plays a major role as a credit risk characteristicum. Thus,
while analysis of the driving factors for the underlying variables (obligor eq-
uity, macroeconomic variables, ..) remains an important aspect in modelling
credit risky portfolio, the copula linking the underlying variables together is of
crucial importance especially for portfolios of highly rated obligors.
5.4   Simulations                                                         123


                                                 VaR

                    Portfolio   Copula   α = 0.95     α = 0.99
                    A           Normal          10         61
                                   t10           9         61
                                    t4           5         60
                    B           Normal         161        318
                                   t10         157        344
                                    t4         176        360
                    C           Normal         338        421
                                   t10         342        426
                                    t4         350        432

           Table 5.4. Effect of correlation cluster    XFGSCP03.xpl


Bibliography
BIS (2001). Overview of the new Basel capital accord, Technical report, Basel
    Committee on Banking Supervision.
Caouette, J., Altman, E. and Narayanan, P. (1998). Managing Credit Risk, The
    Next Great Financial Challenge, Wiley Frontiers in Finance, Vol. Wiley
    Frontiers in Finance, Wiley & Sons, Inc, New York.
Carey, M. (1998). Credit risk in private debt portfolios, Journal of Finance
    53(4): 1363–1387.
Carey, M. (2000). Dimensions of credit risk and their relationship to economic
    capital requirements. Preprint, Federal Reserve Board.
Crouhy, M., Galai, D. and Mark, R. (2000). A comparative analysis of current
    credit risk models, Journal of Banking and Finance 24(1-2): 59–117.
Crouhy, M., Galai, D. and Mark, R. (2001). Risk management, McGraw Hill.
Embrechts, P., Lindskog, F. and McNeil, A. (2001). Modelling dependence
   with copulas and applications to risk management. Working paper, ETH
   Zürich.
Frey, R. and McNeil, A. (2001). Modelling dependent defaults. Working paper,
     ETH Zürich.
124                          5   Sensitivity analysis of credit portfolio models


Gordy, M. (2000). A comparative anatomy of credit risk models, Journal of
    Banking and Finance 24: 119–149.
Hirtle, B., Levonian, M., Saidenberg, M., Walter, S. and Wright, D. (2001). Us-
     ing credit risk models for regulartory capital: Issues and options, FRBNY
     Economic Policy Review 6(2): 1–18.
Jorion, P. (2000). Value at Risk, 2nd. edn, McGraw-Hill, New York.
JP Morgan (1997). Creditmetrics-Technical Document, JP Morgan, New York.
Kiesel, R., Perraudin, W. and Taylor, A. (1999). The structure of credit risk.
    Preprint, Birkbeck College.
Koyluoglu, H. and Hickmann, A. (1998). A generalized framework for credit
    portfolio models. Working Paper, Oliver, Wyman & Company.
Nickell, P., Perraudin, W. and Varotto, S. (1998). Ratings-versus equity-based
    credit risk models: An empirical investigation. unpublished Bank of Eng-
    land mimeo.
Ong, M. (1999). Internal Credit Risk Models. Capital Allocation and Perfor-
    mance Measurement, Risk Books, London.
     Part III

Implied Volatility
6 The Analysis of Implied
  Volatilities
                     Matthias R. Fengler, Wolfgang Härdle and Peter Schmidt


The analysis of volatility in financial markets has become a first rank issue in
modern financial theory and practice: Whether in risk management, portfolio
hedging, or option pricing, we need to have a precise notion of the market’s
expectation of volatility. Much research has been done on the analysis of real-
ized historic volatilities, Roll (1977) and references therein. However, since it
seems unsettling to draw conclusions from past to expected market behavior,
the focus shifted to implied volatilities, Dumas, Fleming and Whaley (1998).
To derive implied volatilities the Black and Scholes (BS) formula is solved for
the constant volatility parameter σ using observed option prices. This is a more
natural approach as the option value is decisively determined by the market’s
assessment of current and future volatility. Hence implied volatility may be
used as an indicator for market expectations over the remaining lifetime of the
option.
It is well known that the volatilities implied by observed market prices exhibit
a pattern that is far different from the flat constant one used in the BS formula.
Instead of finding a constant volatility across strikes, implied volatility appears
to be non flat, a stylized fact which has been called ”smile”effect. In this
chapter we illustrate how implied volatilites can be analyzed. We focus first
on a static and visual investigation of implied volatilities, then we concentrate
on a dynamic analysis with two variants of principal components and interpret
the results in the context of risk management.
128                                       6   The Analysis of Implied Volatilities


6.1     Introduction
Implied volatilities are the focus of interest both in volatility trading and in
risk management. As common practice traders directly trade the so called
”vega”, i.e. the sensitivity of their portfolios with respect to volatility changes.
In order to establish vega trades market professionals use delta-gamma neutral
hedging strategies which are insensitive to changes in the underlying and to time
decay, Taleb (1997). To accomplish this, traders depend on reliable estimates
of implied volatilities and - most importantly - their dynamics.
One of the key issues in option risk management is the measurement of the
inherent volatility risk, the so called ”vega” exposure. Analytically, the ”vega”
is the first derivative of the BS formula with respect to the volatility parameter
σ, and can be interpreted as a sensitivity of the option value with respect to
changes in (implied) volatility. When considering portfolios composed out of
a large number of different options, a reduction of the risk factor space can
be very useful for assessing the riskiness of the current position. Härdle and
Schmidt (2002) outline a procedure for using principal components analysis
(PCA) to determine the maximum loss of option portfolios bearing vega expo-
sure. They decompose the term structure of DAX implied volatilities ”at the
money” (ATM) into orthogonal factors. The maximum loss, which is defined
directly in the risk factor space, is then modeled by the first two factors.
Our study on DAX options is organized as follows: First, we show how to de-
rive and to estimate implied volatilities and the implied volatility surface. A
data decription follows. In section 6.3.2, we perfom a standard PCA on the co-
variance matrix of VDAX returns to identify the dominant factor components
driving term structure movements of ATM DAX options. Section 6.3.3 intro-
duces a common principal components approach that enables us to model not
only ATM term structure movements of implied volatilities but the dynamics
of the ”smile” as well.
6.2    The Implied Volatility Surface                                         129


6.2       The Implied Volatility Surface

6.2.1      Calculating the Implied Volatility

The BS formula for the price Ct of a European call at time t is given by

                         Ct   = St Φ(d1 ) − Ke−rτ Φ(d2 ),                    (6.1)
                                ln(St /K) + (r + 12 σ 2 )τ
                         d1   =             √              ,                 (6.2)
                                           σ τ
                                       √
                         d2   = d1 − σ τ ,                                   (6.3)

where Φ denotes the cumulative distribution function of a standard normal
random variable. r denotes the risk-free interest rate, S the price of the under-
lying, τ = T − t the time to maturity and K the strike price. For ATM options
the equality K = St holds.
The only parameter in the Black and Scholes formula that cannot be observed
directly is the actual volatility of the underlying price process. However, we may
study the volatility which is implied by option prices observed in the markets,
the so called implied volatility: implied volatility is defined as the parameter
σ̂ that yields the actually observed market price of a particular option when
substituted into the BS formula. The implied volatility of a European put with
the same strike and maturity can be deduced from the ”put-call parity”

                              Ct − Pt = St − Ke−rτ .

XploRe offers a fast and convenient numerical way to invert the BS formula in
order to recover σ̂ from the market prices of Ct or Pt .



      y = ImplVola(x{, IVmethod})
           calculates implied volatilities.



As numerical procedures both a bisectional method and a Newton-Raphson
algorithm are available. They are selected by the option IVmethod, which can
either be the bisection method IVmethod="bisect" or the default Newton-
Raphson. Within arbitrage bounds on the other input parameters there exists
130                                      6   The Analysis of Implied Volatilities


a unique solution, since the BS formula is globally concave in σ. The input
vector x contains the data in an n×6 dimensional matrix, where the first column
contains the underlying asset prices S, the second the strikes K, the third the
interest rates r [on a yearly basis], the fourth maturities τ [in scale of years],
the fifth the observed option prices Ct and Pt . The sixth column contains the
type of the option, where 0 abbreviates a put and 1 a call. For example, the
command ImplVola(100~120~0.05~0.5~1.94~1) yields the implied volatility
of a European call at strike K = 120 with maturity τ of half a year, where
the interest rate is assumed to be r = 5%, the price of the underlying asset
S = 100 and the option price Ct = 1.94: the result is σ̂ = 24.94%. One may
verify this result by using XploRe:



      opc = BlackScholes(S, K, r, sigma, tau, task)




which calculates European option prices according to the Black and Scholes
model, when no dividend is assumed. The first 5 input parameters follow the
notation in this paper, and task specifies whether one desires to know a call
price, task=1, or a put price, task=0. Indeed, for σ = 24.94% we reproduce
the assumed option call price of Ct = 1.94.                         XFGiv00.xpl

Now we present a more complex example using option data from the German
and Swiss Futures Exchange (EUREX). The data set volsurfdata2 contains
the full set of option prices (settlement prices) as observed on January 4th,
1999. The first column contains the settlement price S of the DAX, the second
the strike price K of the option, the third the interest rate r, the fourth time
to maturity τ , the fifth the option prices Ct or Pt and the last column finally
the type of option, either 0, i.e. a put, or 1, i.e. a call. Hence the data set is
already in the form as required by the quantlet ImplVola. We may therefore
use the following code to calculate the implied volatilities:

library ("finance")
x=read("volsurfdata2.dat")      ; read the data
x=paf(x,x[,4]>0.14&&x[,4]<0.22) ; select 2 months maturity
y=ImplVola(x,"bisect")          ; calculate ImplVola
sort(x[,2]~y)                   ; sort data according to strikes
6.2      The Implied Volatility Surface                                         131



                                              Volatility Smile
                            0.5
       Implied Volatility
                            0.45
                            0.4
                            0.35
                            0.3




                               3000    4000           5000        6000   7000
                                                  Strike Prices
      Figure 6.1. Implied volatility ”smile” as observed on January 4th, 1999
                                                                    XFGiv01.xpl



In Figure 6.1 we display the output for the strike dimension. The deviation from
the BS model is clearly visible: implied volatilities form a convex ”smile” in
strikes. One finds a curved shape also across different maturities. In combina-
tion with the strike dimension this yields a surface with pronounced curvature
(Figure 6.2). The discontinuity of the ATM position is related to tax effects
exerting different influences on puts and calls, Hafner and Wallmeier (2001).
In our case this effect is not so important, since we smooth the observations
and calculate the returns of the implied volatility time series before applying
the PCA.


6.2.2                        Surface smoothing

Calculation of implied volatilities at different strikes and maturities yields a
surface. The quantlet volsurf estimates the implied volatility surface on a
specified grid using a bi-dimensional kernel smoothing procedure. A Nadaraya-
Watson estimator with a quartic kernel is employed, Aı̈t-Sahalia, and Lo (1998),
Aı̈t-Sahalia and Lo (2000), Härdle (1990), Härdle, Müller, Sperlich, and Wer-
watz (2002).
132                                      6   The Analysis of Implied Volatilities


More technically, given a partition of explanatory variables (x1 , x2 ) = (K, τ ),
i.e. of strikes and maturities, the two-dimensional Nadaraya-Watson kernel
estimator is                    Pn        x1 −x1i  x2 −x2i
                                  i=1 K1 ( h1 )K2 ( h2 )σ̂i
                  σ̂(x1 , x2 ) = Pn        x1 −x1i  x2 −x2i ,               (6.4)
                                   i=1 K1 ( h1 )K2 ( h2 )

where σ̂i is the volatility implied by the observed option prices Cti or Pti . K1
and K2 are univariate kernel functions, and h1 and h2 are bandwidths. The
order 2 quartic kernel is given by
                                   15       2
                        Ki (u) =      1 − u2 1(|u| ≤ 1).
                                   16



The basic structure of volsurf is given by



      {IVsurf, IVpoints} = volsurf(x, stepwidth, firstXF,
           lastXF, firstMat, lastMat, metric, bandwidth, p,
           {IVmethod})




As input parameters we first have the n × 6 matrix x which has been explained
in section 6.2.1. The remaining parameters concern the surface: stepwidth
is a 2 × 1 vector determining the stepwidth in the grid of the surface; the first
entry relates to the strike dimension, the second to the dimension across time
to maturity.     firstXF, lastXF, firstMat, lastMat are scalar constants
giving the lowest limit and the highest limit in the strike dimension, and the
lowest and the highest limit of time to maturity in the volatility surface. The
option metric gives the choice whether to compute the surface in a moneyness
or in a strike metric. Setting metric = 0 will generate a surface computed
in a moneyness metric K/F , i.e. strike divided by the (implied) forward price
of the underlying, where the forward price is computed by Ft = St erτ . If
metric = 1, the surface is computed in the original strike dimension in terms
of K. bandwidth is a 2 × 1 vector determining the width of the bins for the
kernel estimator. p determines whether for computation a simple Nadaraya-
Watson estimator, p = 0, or a local polynomial regression, p 6= 0, is used.
The last and optional parameter IVmethod has the same meaning as in the
6.2   The Implied Volatility Surface                                          133


ImplVola quantlet. It tells XploRe which method to use for calculating the
implied volatilities, default again is Newton-Raphson.
The output are two variables.       IVsurf is an N × 3 matrix containing the
coordinates of the points computed for the implied volatility surface, where
the first column contains the values of the strike dimension, the second those
of time to maturity, the third estimated implied volatilities. N is the number of
grid points. IVpoints is a M × 3 matrix containing the coordinates of the M
options used to estimate the surface. As before, the first column contains the
values for the strike dimension, the second the maturity, the third the implied
volatilities.
Before presenting an example we briefly introduce a graphical tool for display-
ing the volatility surface. The following quantlet plots the implied surface:



      volsurfplot(IVsurf, IVpoints, {AdjustToSurface})




As input parameters we have the output of volsurf, i.e. the volatility sur-
face IVsurf, and the original observations IVpoints. An optional parame-
ter AdjustToSurface determines whether the surface plot is shown based on
the surface data given in IVsurf, or on the basis of the original observations
IVpoints. This option might be useful in a situation where one has estimated a
smaller part of the surface than would be possible given the data. By default,
or AdjustToSurface = 1, the graph is adjusted according to the estimated
surface.
                                                                 XFGiv02.xpl


   XFGiv02.xpl computes an implied volatility surface with the Nadaraya-
Watson estimator and displays it (Figure 6.2). The parameters are determined
in order to suit the example best, then volsurfplot is used to create the
graphic. The output matrix IVsurf contains now all surface values on a grid
at the given stepwidth. Doing this for a sequential number of dates produces
a time series {σ̂t } of implied volatility surfaces. Empirical evidence shows that
this surface changes its shape and characteristics as time goes on. This is what
we analyze in the subsequent sections.
134                                                 6    The Analysis of Implied Volatilities



                                    Volatility Surface




      (3500.0,0.0,0.5)

           0.4



            0.4

                                             0.7   (3500.0,1.0,0.3)
                 0.3
                                  0.5
                         0.2


            (3500.0,0.0,0.3)
                        4357.5
                                 5215.0
                                          6072.5
                                            (6930.0,0.0,0.3)

      Figure 6.2. Implied volatility surface as observed on January 4th, 1999
                                                                    XFGiv02.xpl



6.3        Dynamic Analysis

6.3.1        Data description

Options on the DAX are the most actively traded contracts at the derivatives
exchange EUREX. Contracts of various strikes and maturities constitute a
liquid market at any specific time. This liquidity yields a rich basket of implied
volatilities for many pairs (K, τ ). One subject of our research concerning the
6.3    Dynamic Analysis                                                                   135


dynamics of term structure movements is implied volatility as measured by the
German VDAX subindices available from Deutsche Börse AG (http://deutsche-
boerse.com/)
These indices, representing different option maturities, measure volatility im-
plied in ATM European calls and puts. The VDAX calculations are based on
the BS formula. For a detailed discussion on VDAX calculations we refer to
Redelberger (1994). Term structures for ATM DAX options can be derived
from VDAX subindices for any given trading day since 18 March 1996. On
that day, EUREX started trading in long term options. Shapes of the term
structure on subsequent trading days are shown in Figure 6.3.
If we compare the volatility structure of 27 October 1997 (blue line) with that
of 28 October 1997 (green line), we easily recognize an overnight upward shift
in the levels of implied volatilities. Moreover, it displays an inversion as short
term volatilities are higher than long term ones. Only a couple of weeks later,
on 17 November (cyan line) and 20 November (red line), the term structure
had normalized at lower levels and showed its typical shape again. Evidently,
during the market tumble in fall 1997, the ATM term structure shifted and
changed its shape considerably over time.


                                                 Term structure
                       0.45
                       0.4
      Percentage [%]
                       0.35
                       0.3
                       0.25




                              1       2      3       4        5    6      7       8
                                                      Subindex
                                  Figure 6.3. Term Structure of VDAX Subindices
                                                                                  XFGiv03.xpl
136                                         6   The Analysis of Implied Volatilities


As an option approaches its expiry date T , time to maturity τ = T − t is
declining with each trading day. Hence, in order to analyze the dynamic struc-
ture of implied volatility surfaces, we need to calibrate τ as time t passes. To
accomplish this calibration we linearly interpolate between neighboring VDAX
subindices. For example, to recover the implied volatility σ̂ at a fixed τ , we use
the subindices at τ− and τ+ where τ− ≤ τ ≤ τ+ , i.e. we compute σ̂t (τ ) with
fixed maturities of τ ∈ {30, 60, 90, 180, 270, 360, 540, 720} calendar days by
                                                                      
                                         τ − τ−                  τ − τ−
               σ̂t (τ ) = σ̂t (τ− ) 1 −            + σ̂t (τ+ )                 (6.5)
                                        τ+ − τ −                τ + − τ−

Proceeding this way we obtain 8 time series of fixed maturity. Each time series
is a weighted average of two neighboring maturities and contains n = 440 data
points of implied volatilities.


6.3.2    PCA of ATM Implied Volatilities

The data set for the analysis of variations of implied volatilities is a collection
of term structures as given in Figure 6.3. In order to identify common factors
we use Principal Components Analysis (PCA). Changes in the term structure
can be decomposed by PCA into a set of orthogonal factors.
Define Xc = (xtj ) as the T × J matrix of centered first differences of ATM
implied volatilities for subindex j = 1, ..., J in time t = 1, ..., T , where in our
case J = 8 and T = 440. The sample covariance matrix S = T −1 Xc> Xc can be
decomposed by the spectral decomposition into

                                     S = ΓΛΓ> ,                                (6.6)

where Γ is the 8 × 8 matrix of eigenvectors and Λ the 8 × 8 diagonal matrix
of eigenvalues λj of S. Time series of principal components are obtained by
Y = Xc Γ.
A measure of how well the PCs explain variation of the underlying data is given
by the relative proportion ζl of the sum of the first l eigenvalues to the overall
sum of eigenvalues:

                     Pl        Pl
                      j=1 λj    j=1 V ar(yj )
                ζl = P8      = P8                         for      l<8         (6.7)
                      j=1 λj    j=1 V ar(yj )
6.3   Dynamic Analysis                                                        137


The quantlet XFGiv04.xpl uses the VDAX data to estimate the proportion
of variance ζl explained by the first l PCs.
                                                         XFGiv04.xpl


As the result shows the first PC captures around 70% of the total data vari-
ability. The second PC captures an additional 13%. The third PC explains a
considerably smaller amount of total variation. Thus, the two dominant PCs
together explain around 83% of the total variance in implied ATM volatilities
for DAX options. Taking only the first two factors, i.e. those capturing around
83% in the data, the time series of implied ATM volatilities can therefore be
represented by a factor model of reduced dimension:

                           xtj = γj1 yt1 + γj2 yt2 + t ,                    (6.8)

where γjk denotes the jkth element of Γ = (γjk ), ytk is taken from the matrix
of principal components Y , and t denotes white noise. The γj are in fact
the sensitivities of the implied volatility time series to shocks on the principal
components. As is evident from Figure 6.4, a shock on the first factor tends
to affect all maturities in a similar manner, causing a non-parallel shift of the
term structure. A shock in the second factor has a strong negative impact on
the front maturity but a positive impact on the longer ones, thus causing a
change of curvature in the term structure of implied volatilities.


6.3.3    Common PCA of the Implied Volatility Surface

Implied volatilities calculated for different strikes and maturities constitute a
surface. The principle component analysis as outlined above, does not take this
structure into account, since only one slice of the surface, the term structure of
ATM options are used. In this section we present a technique that allows us to
analyze several slices of the surface simultaneously. Since options naturally fall
into maturity groups, one could analyze several slices of the surface taken at
different maturities. What we propose to do is a principal component analysis
of these different groups. Enlarging the basis of analysis will lead to a better
understanding of the dynamics of the surface. Moreover, from a statistical
point of view, estimating PCs simultaneously in different groups will result in
a joint dimension reducing transformation. This multi-group PCA, the so called
common principle components analysis (CPCA), yields the joint eigenstructure
across groups.
138                                                       6     The Analysis of Implied Volatilities



                                              Factor Loadings


                       1
                       0.5
      Percentage [%]
                       0
                       -0.5




                                    2                4                  6              8
                                                      Subindex
                              Figure 6.4. Factor Loadings of First and Second PC
                                                                                      XFGiv05.xpl



In addition to traditional PCA, the basic assumption of CPCA is that the
space spanned by the eigenvectors is identical across several groups, whereas
variances associated with the components are allowed to vary. This approach
permits us to analyze a p variate random vector in k groups, say k maturities
of implied volatilities jointly, Fengler, Härdle and Villa (2001).
More formally, the hypothesis of common principle components can be stated
in the following way, Flury (1988):

                                        HCP C : Ψi = ΓΛi Γ> ,       i = 1, ..., k

where the Ψi are positive definite p × p population covariance matrices,
Γ = (γ1 , ..., γp ) is an orthogonal p × p transformation matrix and Λi =
diag(λi1 , ..., λip ) is the matrix of eigenvalues. Moreover, assume that all λi
are distinct.

Let S be the (unbiased) sample covariance matrix of an underlying p-variate
6.3    Dynamic Analysis                                                                      139


normal distribution Np (µ, Ψ) with sample size n. Then the distribution of nS
is Wishart, Muirhead (1982), p. 86, with n − 1 degrees of freedom:

                                      nS ∼ Wp (Ψ, n − 1)

The density of the Wishart distribution is given by

                                          1           n − 1  p(n−1)
                                                                  2
                  f (S)     =         n−1    (n−1)/2
                                  Γp ( 2 )|Ψ|            2
                                      n  n−1           o
                                  exp tr −       Ψ−1 S |S|(n−p−2)/2 ,                       (6.9)
                                              2
where
                                                   p
                                                  Y    n   1       o
                          Γp (x) = π p(p−1)/4         Γ x − (i − 1)
                                                  i=1
                                                           2
is the multivariate gamma function, Muirhead (1982). Hence for given Wishart
matrices Si with sample size ni the likelihood function can be written as


                              k      n  1                 o
                                                                   − 1 (n −1)
                              Y
      L (Ψ1 , ..., Ψk ) = C       exp tr − (ni − 1)Ψ−1
                                                    i  S i    |Ψi | 2 i                    (6.10)
                              i=1
                                          2

where C is a constant not depending on the parameters Ψi . Maximizing the
likelihood is equivalent to minimizing the function
                                       k
                                       X             n                       o
                 g(Ψ1 , ..., Ψk ) =          (ni − 1) ln |Ψi | + tr(Ψ−1
                                                                     i  S i ) .
                                       i=1


Assuming that HCP C holds, i.e. in replacing Ψi by ΓΛi Γ> , one gets after some
manipulations

                                                        p
                                       k
                                                                                   !
                                       X                X              γj> Si γj
               g(Γ, Λ1 , ..., Λk ) =         (ni − 1)         ln λij +                 .
                                       i=1              j=1
                                                                          λij



As we know from section 6.3.2, the vectors γj in Γ need to be orthogonal.
We achieve orthogonality of the vectors γj via the Lagrange method, i.e. we
140                                               6   The Analysis of Implied Volatilities


impose the p constraints γj> γj = 1 using the Lagrange multiplyers µj , and the
remaining p(p − 1)/2 constraints γh> γj = 0 for (h 6= j) using the multiplyer
µhj . This yields

                                            p
                                            X                           p
                                                                        X
          g ∗ (Γ, Λ1 , ..., Λk ) = g(·) −         µj (γj> γj − 1) − 2         µhj γh> γj .
                                            j=1                         h<j



Taking partial derivatives with respect to all λim and γm , it can be shown
(Flury, 1988) that the solution of the CPC model is given by the generalized
system of characteristic equations


         k
                                     !
    >
         X            λim − λij
   γm        (ni − 1)           Si       γj = 0,          m, j = 1, ..., p,      m 6= j.     (6.11)
         i=1
                       λim λij



This has to be solved using
                          >
                   λim = γm Sγm ,            i = 1, ..., k,    m = 1, ..., p

under the constraints                       (
                                >            0          m 6= j
                               γm γj =                         .
                                             1          m=j

Flury (1988) proves existence and uniqueness of the maximum of the likelihood
function, and Flury and Gautschi (1988) provide a numerical algorithm, which
has been implemented in the quantlet CPC.

CPC-Analysis
A number of quantlets are designed for an analysis of covariance matrices,
amongst them the CPC quantlet:



      {B, betaerror, lambda, lambdaerror, psi} = CPC(A,N)
           estimates a common principle components model.
6.3   Dynamic Analysis                                                       141


As input variables we need a p × p × k array A, produced from k p × p co-
variance matrices, and a k × 1 vector of weights N. Weights are the number of
observations in each of the k groups.
The quantlet produces the p × p common transformation matrix B, and the
p × p matrix of asymptotic standard errors betaerror. Next, eigenvalues
lambda and corresponding standard errors lamdbaerror are given in a vector
array of 1 × p × k. Estimated population covariances psi are also provided. As
an example we provide the data sets volsurf01, volsurf02 and volsurf03
that have been used in Fengler, Härdle and Villa (2001) to estimate common
principle components for the implied volatility surfaces of the DAX 1999. The
data has been generated by smoothing a surface day by day as spelled out
in section 6.2.2 on a specified grid. Next, the estimated grid points have been
grouped into maturities of τ = 1, τ = 2 and τ = 3 months and transformed into
a vector of time series of the ”smile”, i.e. each element of the vector belongs
to a distinct moneyness ranging from 0.85 to 1.10.
                                                                  XFGiv06.xpl


We plot the first three eigenvectors in a parallel coordinate plot in Figure 6.5.
The basic structure of the first three eigenvectors is not altered. We find a
shift, a slope and a twist structure. This structure is common to all maturity
groups, i.e. when exploiting PCA as a dimension reducing tool, the same
transformation applies to each group! However, from comparing the size of
eigenvalues among groups, i.e. ZZ.lambda, we find that variability is dropping
across groups as we move from the front contracts to long term contracts.
Before drawing conclusions we should convince ourselves that the CPC model
is truly a good description of the data. This can be done by using a likelihood
ratio test. The likelihood ratio statistic for comparing a restricted (the CPC)
model against the unrestricted model (the model where all covariances are
treated separately) is given by

                                                     L(Ψ
                                                       b 1 , ..., Ψ
                                                                  b k)
                      T(n1 ,n2 ,...,nk ) = −2 ln                       .
                                                     L(S1 , ..., Sk )

Inserting from the likelihood function we find that this is equivalent to
                                              k
                                              X                detΨ
                                                                  bi
                       T(n1 ,n2 ,...,nk ) =         (ni − 1)         ,
                                              i=1
                                                               detSi
142                                       6   The Analysis of Implied Volatilities



      Common Coordinate Plot: First three Eigenvectors


           0.5
       Y
           0
           -0.5




                  1     2          3            4          5          6
                                Index of Eigenvectors
      Figure 6.5. Factor loadings of the first (blue), the second (green), and
      the third PC (red)
                                                                     XFGiv06.xpl



which is χ2 distributed as min(ni ) tends to infinity with
           n1              o n1                  o 1
          k p(p − 1) + 1 −        p(p − 1) + kp = (k − 1)p(p − 1)
             2                  2                     2
degrees of freedom. In the quantlet       XFGiv06.xpl this test is included.

                                                                     XFGiv06.xpl


The calculations yield T(n1 ,n2 ,...,nk ) = 31.836, which corresponds to the p-value
p = 0.37512 for the χ2 (30) distribution. Hence we cannot reject the CPC
model against the unrelated model, where PCA is applied to each maturity
separately.
Using the methods in section 6.3.2, we can estimate the amount of variability ζl
explained by the first l principle components: again a few number of factors, up
to three at the most, is capable of capturing a large amount of total variability
present in the data. Since the model now captures variability both in strike
and maturity dimension, this can be a suitable starting point for a simplified
6.3   Dynamic Analysis                                                    143


VaR calculation for delta-gamma neutral option portfolios using Monte Carlo
methods, and is hence a valuable insight for risk management.




Bibliography
Aı̈t-Sahalia, Y. and Lo, A. W. (1998). Nonparametric Estimation of State-Price
      Densities Implicit in Financial Assets, Journal of Finance Vol. LIII, 2,
      pp. 499–547.
Aı̈t-Sahalia, Y. and Lo, A. W. (2000). Nonparametric Risk management and
      implied risk aversion, Journal of Econometrics 94, pp. 9–51.
Dumas, B., Fleming, J. and Whaley, R. E. (1998). Implied Volatility Functions:
   Empirical Tests, Journal of Finance Vol. LIII, 6, pp. 2059–2106.
Fengler, M. R., Härdle, W. and Villa, Chr. (2001). The Dynamics of Implied
    Volatilities: A Common Principal Components Approach, SfB 373 Discus-
    sion Paper No. 2001/38, HU Berlin.
Flury, B. (1988). Common Principle Components Analysis and Related Multi-
     variate Models, Wiley Series in Probability and Mathematical Statistics,
     John Wiley & Sons, New York.
Flury, B. and Gautschi, W. (1986). An Algorithm for simultaneous orthogonal
     transformation of several positive definite symmetric matrices to nearly
     diagonal form SIAM Journal on Scientific and Statistical Computing,7,
     pp. 169–184.
Härdle, W.(1990). Applied Nonparametric Regression, Econometric Society
     Monographs 19, Cambridge University Press.
Härdle, W., Müller, M., Sperlich, S. and Werwartz, A. (2002). Non- and
     Semiparametric Modelling, Springer, e-book http://www.xplore-stat.de
Härdle, W. and Schmidt, P. (2002). Common Factors Governing VDAX Move-
     ments and the Maximum Loss, Financial Markets and Portfolio Manage-
     ment, forthcoming.
Hafner, R. and Wallmeier, M. (2001). The Dynamics of DAX Implied Volatil-
    ities, International Quarterly Journal of Finance,1, 1, pp. 1–27.
144                                     6   The Analysis of Implied Volatilities


Muirhead, R. J. (1982). Aspects of Multivariate Statistics, Wiley Series in
    Probability and Mathematical Statistics, John Wiley & Sons, New York.
Redelberger, T. (1994). Grundlagen und Konstruktion des VDAX-Volatilitäts-
    index der Deutsche Börse AG, Deutsche Börse AG, Frankfurt am Main.
Roll, R. (1977). A Critique of the Asset Pricing Theory’s Tests: Part I, Journal
     of Financial Economics,4, pp. 129–176.
Taleb, N. (1997). Dynamic Hedging: Managing Vanilla and Exotic Options,
    John Wiley & Sons, New York.

Villa, C. and Sylla, A. (2000). Measuring implied surface risk using PCA
     in Franke, J., Härdle, W. and Stahl, G.: Measuring Risk in Complex
     Stochastic Systems, LNS 147, Springer Verlag, New York, pp. 131–147.
7 How Precise Are Price
  Distributions Predicted by
  Implied Binomial Trees?
                                               Wolfgang Härdle and Jun Zheng


In recent years, especially after the 1987 market crash, it became clear that
the prices of the underlying asset do not exactly follow the Geometric Brow-
nian Motion (GBM) model of Black and Scholes. The GBM model with con-
stant volatility leads to a log-normal price distribution at any expiration date:
All options on the underlying must have the same Black-Scholes (BS) implied
volatility, and the Cox-Ross-Rubinstein (CRR) binomial tree makes use of this
fact via the construction of constant transition probability from one node to
the corresponding node at the next level in the tree. In contrast, the implied bi-
nomial tree (IBT) method simply constructs a numerical procedure consistent
with the volatility smile. The empirical fact that the market implied volatil-
ities decrease with the strike level, and increase with the time to maturity of
options is better reflected by this construction. The algorithm of the IBT is a
data adaptive modification of the CRR method.
An implied tree should satisfy the following principles:

   • It must correctly reproduce the volatility smile.
   • negative node transition probabilities are not allowed.
   • The branching process must be risk neutral (forward price of the asset
     equals to the conditional expected value of it) at each step .

The last two conditions also eliminate arbitrage opportunities.
The basic purpose of the IBT is its use in hedging and calculations of implied
probability distributions (or state price density (SPD)) and volatility surfaces.
146                 7   How Precise Are Price Distributions Predicted by IBT?


Besides these practical issues, the IBT may evaluate the future stock price dis-
tributions according to the BS implied volatility surfaces which are calculated
from currently observed daily market option prices.
We describe the construction of the IBT and analyze the precision of the pre-
dicted implied price distributions. In Section 7.1, a detailed outline of the IBT
algorithm for a liquid European-style option is given. We follow first the Der-
man and Kani (1994) algorithm, discuss its possible shortcomings, and then
present the Barle and Cakici (1998) construction. This method is character-
ized by a normalization of the central nodes according to the forward price.
Next, we study the properties of the IBT via Monte-Carlo simulations and
comparison with simulated conditional density from a diffusion process with a
non-constant volatility. In Section 7.3, we apply the IBT to a DAX index data
set containing the underlying asset price, strike price, interest rate, time to
maturity, and call or put option price from the MD*BASE database (included
in XploRe), and compare SPD estimated by historical index price data with
those predicted by the IBT. Conclusions and discussions on practical issues are
presented in the last section.


7.1     Implied Binomial Trees
A well known model for financial option pricing is a GBM with constant volatil-
ity, it has a log-normal price distribution with density,
                                          n                      o2 
                                                  ST          σ2
                                1            ln   St  −  (r − 2  )τ
     p(St , ST , r, τ, σ) =   √      exp −                            , (7.1)
                                                                      
                                  2                      2
                                                      2σ τ
                            ST 2πσ τ

at any option expiration T , where St is the stock price at time t, r is the riskless
interest rate, τ = T −t is time to maturity, and σ the volatility. The model also
has the characteristic that all options on the underlying must have the same
BS implied volatility.
However, the market implied volatilities of stock index options often show ”the
volatility smile”, which decreases with the strike level, and increases with the
time to maturity τ . There are various proposed extensions of this GBM model
to account for ”the volatility smile”. One approach is to incorporate a stochas-
tic volatility factor, Hull and White (1987); another allows for discontinuous
jumps in the stock price, Merton (1976). However, these extensions cause sev-
eral practical difficulties. For example, they violate the risk-neutral condition.
7.1   Implied Binomial Trees                                                   147


The IBT technique proposed by Rubinstein (1994), Derman and Kani (1994),
Dupire (1994), and Barle and Cakici (1998) account for this phenomenon.
These papers assume the stock prices in the future are generated by a modified
random walk where the underlying asset has a variable volatility that depends
on both stock price and time. Since the implied binomial trees allow for non-
constant volatility σ = σ(St , t), they are in fact modifications of the original
Cox, Ross and Rubinstein (1979) binomial trees. The IBT construction uses
the observable market option prices in order to estimate the implied distribu-
tion. It is therefore nonparametric in nature. Alternative approaches may be
based on the kernel method, Aı̈t-Sahalia, and Lo (1998), nonparametric con-
strained least squares, Härdle and Yatchew (2001), and curve-fitting methods,
Jackwerth and Rubinstein (1996).
The CRR binomial tree is the discrete implementation of the GBM process
                               dSt
                                   = µdt + σdZt ,                             (7.2)
                                St
where Zt is a standard Wiener process, and µ and σ are constants. Similarly,
the IBT can be viewed as a discretization of the following model in which the
generalized volatility parameter is allowed to be a function of time and the
underlying price,
                           dSt
                               = µt dt + σ(St , t)dZt ,                 (7.3)
                            St
where σ(St , t) is the instantaneous local volatility function. The aim of the
IBT is to construct a discrete approximation of the model on the basis of the
observed option prices yielding the variable volatility σ(St , t). In addition, the
IBT may reflect a non-constant drift µt .


7.1.1    The Derman and Kani (D & K) algorithm

In the implied binomial tree framework, stock prices, transition probabilities,
and Arrow-Debreu prices (discounted risk-neutral probabilities, see Chapter 8)
at each node are calculated iteratively level by level.
Suppose we want to build an IBT on the time interval [0, T ] with equally spaced
levels, 4t apart. At t = 0, S0 = S, is the current price of the underlying, and
there are n nodes at the nth level of the tree. Let sn,i be the stock price of
the ith node at the nth level, s1,1 = S and Fn,i = er4t sn,i the forward price
at level n + 1 of sn,i at level n, and pn,i the transition probability of making
148                7      How Precise Are Price Distributions Predicted by IBT?

                         
                                                                        
                                                         
                                             
                                                                
                                                                                      
                                                                   
                                                         
                                      
                                                                       
                                                                                    
                                                                                       
                                                                                          
                             
                                                                           "
                                                                       
                                                         
                                               
                                                           !    
                                                                                         
                                                                                          
                                                                                             
                                                                                         $
                                                                                         
                                                                    #  
                                                         
                         #               #     
                                              #                         
                                                                                 #
                                                         
                                             
                                                                                 


                         % &' %                                                     ()
                         *,+ -             .                                      /   . 
                                                                      0 .

            Figure 7.1. Construction of an implied binomial tree



a transition from node (n, i) to node (n + 1, i + 1). Figure 7.1 illustrates the
construction of an IBT.
We assume the forward price Fn,i satisfies the risk-neutral condition:

                       Fn,i = pn,i sn+1,i+1 + (1 − pn,i )sn+1,i .                                   (7.4)

Thus the transition probability can be obtained from the following equation:
                                                    Fn,i − sn+1,i
                                     pn,i =                         .                               (7.5)
                                                  sn+1,i+1 − sn+1,i

The Arrow-Debreu price λn,i , is the price of an option that pays 1 unit payoff
in one and only one state i at nth level, and otherwise pays 0. In general,
7.1   Implied Binomial Trees                                                  149


Arrow-Debreu prices can be obtained by the iterative formula, where λ1,1 = 1
as a definition.
    
    λn+1,1 =
                 e−r4t {(1 − pn,1 )λn,1 } ,
      λn+1,i+1 = e−r4t {λn,i pn,i + λn,i+1 (1 − pn,i+1 )} , 2 ≤ i ≤ n,  (7.6)
      λn+1,n+1 = e−r4t {λn,n pn,n } .
    
    


We give an example to illustrate the calculation of Arrow-Debreu prices in a
CRR Binomial tree. Suppose that the current value of the underlying S = 100,
time to maturity T = 2 years, 4t = 1 year, constant volatility σ = 10%, and
riskless interest rate r = 0.03, and τ = T . The Arrow-Debreu price tree can be
calculated from the stock price tree:

stock price
                         122.15
             110.52
  100.00                   100.00
               90.48
                           81.88


Arrow-Debreu price

                    0.37
           0.61
  1.00              0.44
           0.36
                    0.13

For example, using the CRR method, s2,1 = s1,1 e−σ 4t = 100 × e−0.1 = 90.48,
and s2,2 = s1,1 eσ 4t = 110.52, the transition probability p1,1 = 0.61 is obtained
by the formula (7.5), then according to the formula (7.6), λ2,1 = e−r 4t (1 −
p1,1 ) = 0.36. At the third level, calculate the stock prices according to the
corresponding nodes at the second level, For example, s3,1 = s2,1 · e−σ 4t =
122.15, s3,2 = s1,1 = 100.
150                   7   How Precise Are Price Distributions Predicted by IBT?


Option prices in the Black-Scholes framework are given by:
                            Z +∞
                        −rτ
        C(K, τ ) = e              max(ST − K, 0) p(St , ST , r, τ )dST ,           (7.7)
                             0
                            Z +∞
        P (K, τ ) = e−rτ          max(K − ST , 0) p(St , ST , r, τ )dST ,          (7.8)
                                 0

where C(K, τ ) and P (K, τ ) are call option price and put option price respec-
tively, and K is the strike price. In the IBT, option prices are calculated
analogously for τ = n4t,
                                      n+1
                                      X
                   C(K, n4t)    =            λn+1,i max(sn+1,i − K, 0),            (7.9)
                                       i=1
                                      n+1
                                      X
                   P (K, n4t)   =            λn+1,i max(K − sn+1,i , 0).          (7.10)
                                       i=1

Using the risk-neutral condition (7.4) and the discrete option price calculation
from (7.9) or (7.10), one obtains the iteration formulae for constructing the
IBT.
There are (2n + 1) parameters which define the transition from the nth to
the (n + 1)th level of the tree, i.e., (n + 1) stock prices of the nodes at the
(n + 1)th level, and n transition probabilities. Suppose (2n − 1) parameters
corresponding to the nth level are known, the sn+1,i and pn,i corresponding to
the (n + 1)th level can be calculated depending on the following principles:
We always start from the center nodes in one level, if n is even, define sn+1,i =
s1,1 = S, for i = n/2 + 1, and if n is odd, start from the two central nodes
sn+1,i and sn+1,i+1 for i = (n + 1)/2, and suppose sn+1,i = s2n,i /sn+1,i+1 =
S 2 /sn+1,i+1 , which adjusts the logarithmic spacing between sn,i and sn+1,i+1
to be the same as that between sn,i and sn+1,i . This principle yields the
calculation formula of sn+1,i+1 , see Derman and Kani (1994),

                   S{er4t C(S, n4t) + λn,i S − ρu }
      sn+1,i+1 =                                             for i = (n + 1)/2.   (7.11)
                   λn,i Fn,i − er4t C(S, n4t) + ρu

Here ρu denotes the following summation term
                                     n
                                     X
                             ρu =            λn,j (Fn,j − sn,i ),                 (7.12)
                                     j=i+1
7.1     Implied Binomial Trees                                                           151


C(K, τ ) is the interpolated value for a call struck today at strike price K and
time to maturity τ . In the D & K construction, the interpolated option price
entering (7.11) is based on a CRR binomial tree with constant parameters
σ = σimp (K, τ ), where the BS implied volatility σimp (K, τ ) can be calculated
from the known market option prices. Calculating interpolated option prices
by the CRR method has a drawback, it is computational intensive.
Once we have the initial nodes’ stock prices, according to the relationships
among the different parameters, we can continue to calculate those at higher
nodes (n + 1, j), j = i + 2, . . . n + 1 and transition probabilities one by one
using the formula:

                    sn,i {er4t C(sn,i , n4t) − ρu } − λn,i sn,i (Fn,i − sn+1,i )
      sn+1,i+1 =                                                                 ,     (7.13)
                         {er4t C(sn,i , n4t) − ρu } − λn,i (Fn,i − sn+1,i )

where the definition of ρu is the same as (7.12).

Similarly, we are able to continue to calculate the parameters at lower nodes
(n + 1, j), j = i − 1, . . . , 1 according to the following recursion:

                 sn,i+1 {er4t P (sn,i , n4t) − ρl } − λn,i sn,i (Fn,i − sn+1,i+1 )
      sn+1,i =                                                                     ,   (7.14)
                      {er4t P (sn,i , n4t) − ρl } + λn,i (Fn,i − sn+1,i+1 )
                           Pi−1
where ρl denotes the sum     j=1 λn,j (sn,i − Fn,j ), and P (K, τ ) is similar to
C(K, τ ), again these option prices are obtained by the CRR binomial tree
generated from market options prices.


7.1.2       Compensation

In order to avoid arbitrage, the transition probability pn,i at any node should
lie between 0 and 1, it makes therefore sense to limit the estimated stock prices

                                 Fn,i < sn+1,i+1 < Fn,i+1 .                            (7.15)
If the stock price at any node does not satisfy the above inequality, we redefine
it by assuming that the difference of the logarithm of the stock prices between
this node and its adjacent node is equal to the corresponding two nodes at the
previous level, i.e.,

                         log(sn+1,i+1 /sn+1,i ) = log(sn,i /sn,i−1 ).
152                    7    How Precise Are Price Distributions Predicted by IBT?


Sometimes, the obtained price still does not satisfy inequality (7.15), then we
choose the average of Fn,i and Fn,i+1 as a proxy for sn+1,i+1 .
In fact, the product of the Arrow-Debreu prices λn,i at the nth level with the
influence of interest rate er(n−1)4 t can be considered as a discrete estimation
of the implied distribution, the SPD, p(ST , St , r, τ ) at τ = (n − 1)4 t. In the
case of the GBM model with constant volatility, this density is corresponding
to (7.1).
After the construction of an IBT, we know all stock prices, transition proba-
bilities, and Arrow-Debreu prices at any node in the tree. We are thus able
to calculate the implied local volatility σloc (sn,i , m4t) (which describes the
structure of the second moment of the underlying process) at any level m as a
discrete estimation of the following conditional variance at s = sn,i , τ = m4t.
Under the risk-neutral assumption
         2
        σloc (s, τ )    = Var(log St+τ |St = s)
                          Z
                        =   (log St+τ − E log St+τ )2 p(St+τ |St = s) dSt+τ
                          Z
                        =   (log St+τ − E log St+τ )2 p(St , St+τ r, τ ) dSt+τ . (7.16)


In the IBT construction, the discrete estimation can be calculated as:
                                                       sn+1,i+1
                                 q
               σloc (sn,i , 4t) = pn,i (1 − pn,i ) log          .
                                                        sn+1,i

Analogously, we can calculate the implied local volatility at different times. In
general, if we have calculated the transition probabilities pj , j = 1, . . . , m from
the node (n, i) to the nodes (n + m, i + j), j = i, . . . , m, then with
                                                         m
                                                         X
  mean = E(log(S(n+m−1)4t )|S(n−1)4t = sn,i ) =                pj log(sn+m,i+j ),
                                                         j=1
                                           v
                                           um
                                           uX
                                                                         2
                       σloc (sn,i , m4t) = t  pj (log(sn+m,i+j ) − mean)) . (7.17)
                                            j=1


Notice that the instantaneous volatility function used in (7.3) is different from
the BS implied volatility function defined in (7.16), but in the GBM they are
identical.
7.1   Implied Binomial Trees                                                        153


If we choose 4t small enough, we obtain the estimated SPD at fixed time to
maturity, and the distribution of implied local volatility σloc (s, τ ). Notice that
the BS implied volatility σimp (K, τ ) (which assumes Black-Scholes model is
established (at least locally)) and implied local volatility σloc (s, τ ) is different,
they have different parameters, and describe different characteristics of the
second moment.


7.1.3     Barle and Cakici (B & C) algorithm

Barle and Cakici (1998) proposed an improvement of the Derman and Kani
construction. The major modification is the choice of the stock price of the
central nodes in the tree: their algorithm takes the riskless interest rate into
account. If (n + 1) is odd, then sn+1,i = s1,1 er n4t = Ser n4t for i = n/2 + 1,
if (n + 1) is even, then start from the two central nodes sn+1,i and sn+1,i+1
                                              2
for i = (n + 1)/2, and suppose sn+1,i = Fn,i     /sn+1,i+1 . Thus sn+1,i can be
calculated as:


                 λn,i Fn,i − {er4t C(Fn,i , n4t) − ρu }
 sn+1,i = Fn,i                                               for i = (n + 1)/2, (7.18)
                 λn,i Fn,i + {er4t C(Fn,i , n4t) − ρu }

where C(K, τ ) is defined as in the Derman and Kani algorithm, and the ρu is
                                   n
                                   X
                            ρu =           λn,j (Fn,j − Fn,i ).                   (7.19)
                                   j=i+1


After stock prices of the initial nodes are obtained, then continue to calculate
those at higher nodes (n + 1, j), j = i + 2, . . . n + 1 and transition probabilities
one by one using the following recursion:


               sn+1,i {er4t C(Fn,i , n4t) − ρu } − λn,i Fn,i (Fn,i − sn+1,i )
  sn+1,i+1 =                                                                  ,   (7.20)
                    {er4t C(Fn,i , n4t) − ρu } − λn,i (Fn,i − sn+1,i )

where ρu is as in (7.19), pn,i is defined as in (7.5).

Similarly, continue to calculate the parameters iteratively at lower nodes (n +
154                    7     How Precise Are Price Distributions Predicted by IBT?


1, j), j = i − 1, . . . 1.

             λn,i Fn,i (sn+1,i+1 − Fn,i ) − sn+1,i+1 {er4t P (Fn,i , n4t) − ρl }
 sn+1,i =                                                                        , (7.21)
                    λn,i (sn+1,i+1 − Fn,i ) − {er4t P (Fn,i , n4t) − ρl }
                              Pi−1
where ρl denotes the sum j=1 λn,j (Fn,i − Fn,j ). Notice that in (7.13) and
(7.14), C(K, τ ) and P (K, τ ) denote the Black-Scholes call and put option prices,
this construction makes the calculation faster than the interpolation technique
based on the CRR method.
The balancing inequality (7.15) and a redefinition are still used in the Barle
and Cakici algorithm for avoiding arbitrage: the algorithm uses the average of
Fn,i and Fn,i+1 as the re-estimation of sn+1,i+1 .


7.2       A Simulation and a Comparison of the SPDs
The example used here to show the procedure of generating the IBT, is taken
from Derman and Kani (1994). Assume that the current value of the stock is
S = 100, the annually compounded riskless interest rate is r = 3% per year
for all time expirations, the stock has zero dividend. The annual BS implied
volatility of an at-the-money call is assumed to be σ = 10%, and the BS
implied volatility increases (decreases) linearly by 0.5 percentage points with
every 10 point drop (rise) in the strike. From the assumptions, we see that
σimp (K, τ ) = 0.15 − 0.0005 K.
In order to investigate the precision of the SPD estimation obtained from the
IBT, we give a simulation example assuming that the stock price process is
generated by the stochastic differential equation model (7.3), with an instan-
taneous local volatility function σ(St , t) = 0.15 − 0.0005 St , µt = r = 0.03. We
may then easily compare the SPD estimations obtained from the two different
methods.


7.2.1      Simulation using Derman and Kani algorithm

With the XploRe quantlet XFGIBT01.xpl, using the assumption on the BS
implied volatility surface, we obtain the following one year stock price implied
binomial tree, transition probability tree, and Arrow-Debreu price tree.
7.2   A Simulation and a Comparison of the SPDs                            155



                                                                XFGIBT01.xpl



Derman and Kani one year (four step) implied binomial tree

stock price
                                               119.91
                                     115.06
                        110.04                 110.06
             105.13                   105.13
  100.00                   100.00              100.00
              95.12                   95.12
                           89.93                   89.92
                                      85.22
                                                   80.01

transition probability
                             0.60
                    0.58
           0.59               0.59
  0.56              0.56
           0.59               0.59
                    0.54
                             0.59

Arrow-Debreu price
                                           0.111
                                0.187
                      0.327                0.312
            0.559                  0.405
  1.000               0.480                0.343
            0.434                  0.305
                      0.178                0.172
                                0.080
                                           0.033


This IBT is corresponding to τ = 1 year, and 4t = 0.25 year, which shows the
stock prices, and the elements at the jth column are corresponding to the stock
156                 7   How Precise Are Price Distributions Predicted by IBT?


prices of the nodes at the (j − 1)th level in the tree. The second one, its (n, j)
element is corresponding to the transition probability from the node (n, j) to
the nodes (n + 1, j + 1). The third tree contains the Arrow-Debreu prices of
the nodes. Using the stock prices together with Arrow-Debreu prices of the
nodes at the final level, a discrete approximation of the implied distribution
can be obtained. Notice that by the definition of the Arrow-Debreu price, the
risk neutral probability corresponding to each node should be calculated as the
product of the Arrow-Debreu price and the factor erτ .
If we choose small enough time steps, we obtain the estimation of the implied
price distribution and the implied local volatility surface σloc (s, τ ). We still use
the same assumption on the BS implied volatility surface as above here, which
means σimp (K, τ ) = 0.15 − 0.0005 K, and assume S0 = 100, r = 0.03, T = 5
year.

                                                                      XFGIBT02.xpl



Two figures are generated by running the quantlet XFGIBT02.xpl, Figure 7.2
shows the plot of the SPD estimation resulting from fitting an implied five-year
tree with 20 levels. The implied local volatilities σloc (s, τ ) in the implied tree at
different time to maturity and stock price levels is shown in Figure 7.3, which
obviously decreases with the stock price and increases with time to maturity
as expected.


7.2.2     Simulation using Barle and Cakici algorithm

The Barle and Cakici algorithm can be applied in analogy to Derman and
Kani’s. The XploRe quantlets used here are similar to those presented in
Section 7.2.1, one has to replace the quantlet IBTdk by IBTdc. The following
figure displays the one-year (four step) stock price tree, transition probability
tree, and Arrow-Debreu tree. Figure 7.4 presents the plot of the estimated SPD
by fitting a five year implied binomial tree with 20 levels to the volatility smile
using Barle and Cakici algorithm, and Figure 7.5, shows the characteristics of
the implied local volatility surface of the generated IBT, decreases with the
stock price, and increases with time.
7.2    A Simulation and a Comparison of the SPDs                                                             157


                                0.15          Estimated Implied Distribution
              probability*0.1
                                0.1
                                0.05
                                0




                                                50                    100             150
                                                                   stock price

           Figure 7.2. SPD estimation by the Derman and Kani IBT.


                                                            Implied Local Volatility Surface




                                  5.50
                                             4.25
                                         




                                                                                                            0.23
                                                     3.00                                                   0.16
                                                            1.75                                            0.08


                                                                          50.00   75.00     100.00 125.00



      Figure 7.3. Implied local volatility surface estimation by the Derman
      and Kani IBT.


Barle and Cakici one year implied binomial tree

stock price
158                 7   How Precise Are Price Distributions Predicted by IBT?


                                                123.85
                                       117.02
                         112.23                 112.93
             104.84                    107.03
  100.00                   101.51               103.05
               96.83                    97.73
                           90.53                   93.08
                                        87.60
                                                   82.00


transition probability
                             0.46
                    0.61
           0.38                 0.48
  0.49              0.49
           0.64                 0.54
                    0.36
                             0.57


Arrow-Debreu price
                                           0.050
                                  0.111
                        0.185               0.240
            0.486                  0.373
  1.000                 0.619              0.394
            0.506                  0.378
                        0.181               0.237
                                  0.116
                                           0.050




7.2.3     Comparison with Monte-Carlo Simulation

We now compare the SPD estimation at the fifth year obtained by the two IBT
methods with the estimated density function of the Monte-Carlo simulation
of St , t = 5 generated from the model (7.3), where σ(St , t) = 0.15 − 0.0005 St ,
7.2    A Simulation and a Comparison of the SPDs                                                     159


                                0.15       Estimated Implied Distribution
              probability*0.1
                                0.1
                                0.05
                                0




                                           50              100             150
                                                            stock price

           Figure 7.4. SPD estimation by the Barle and Cakici IBT.




                                       Implied Local Volatility Surface


                                  5.50
                                          4.25                                                     0.24
                                                 3.00                                              0.16
                                                        1.75                                       0.08

                                                                   50.00   75.00   100.00 125.00




      Figure 7.5.                      Implied local volatility surface by the Barle and Cakici
      IBT.


µt = r = 0.03. We use the Milstein scheme, Kloeden, Platen and Schurz (1994)
to perform the discrete time approximation in (7.3). It has strong convergence
rate δ 1 . We have set the time step with δ = 1/1000 here.
160                                   7   How Precise Are Price Distributions Predicted by IBT?


In order to construct the IBT, we calculate the option prices corresponding
to each node at the implied tree according to their definition by Monte-Carlo
simulation.

                                             XFGIBT03.xpl        XFGIBTcdk.xpl   XFGIBTcbc.xpl


                               0.15
                                          Estimated State Price Density
             probability*0.1
                               0.1
                               0.05
                               0




                                 50            100             150        200
                                                      stock price
      Figure 7.6. SPD estimation by Monte-Carlo simulation, and its 95%
      confidence band, the B & C IBT, from the D & K IBT (thin), level
      =20, T = 5 year, 4t = 0.25 year.


Here we use the quantlets      XFGIBTcdk.xpl and       XFGIBTcbc.xpl. These
two are used to construct the IBT directly from the option price function,
not starting from the BS implied volatility surface as in quantlets IBTdk and
IBTbc. In the data file ”IBTmcsimulation20.dat”, there are 1000 Monte-Carlo
simulation samples for each St in the diffusion model (7.3), for t = i/4 year,
i = 1, ...20, from which we calculate the simulated values of the option prices
according to its theoretical definition and estimate the density of St , T = 5
year as the SPD estimation at the fifth year.
From the estimated distribution shown in the Figures 7.2.3, we observe their
deviation from the log-normal characteristics according to their skewness and
kurtosis. The SPD estimation obtained from the two IBT methods coincides
with the estimation obtained from the Monte-Carlo simulation well, the differ-
ence between the estimations obtained from the two IBTs is not very large.
On the other hand, we can also estimate the implied local volatility surface
from the implied binomial tree, and compare it with the one obtained by the
7.2    A Simulation and a Comparison of the SPDs                                  161


simulation. Compare Figure 7.7 and Figure 7.8 with Figure 7.9, and notice that
in the first two figures, some edge values cannot be obtained directly from the
five-year IBT. However, the three implied local volatility surface plots all actu-
ally coincide with the volatility smile characteristic, the implied local volatility
of the out-the-money options decreases with the increasing stock price, and
increase with time.

                                      Implied Local Volatility Surface




                 5.50
                        4.25                                                    0.22
                               3.00                                             0.14
                                      1.75                                      0.07


                                               50.00   75.00   100.00 125.00



      Figure 7.7. Implied local volatility surface of the simulated model,
      calculated from D& K IBT.


We use the data file ”IBTmcsimulation50.dat” to obtain an estimated BS
implied volatility surface. There are 1000 Monte-Carlo simulation samples for
each St in the diffusion model (7.3), for t = i/10 year in it, i = 1, ...50, because
we can calculate the BS implied volatility corresponding to different strike
prices and time to maturities after we have the estimated option prices corre-
sponding to these strike price and time to maturity levels. Figure 7.10 shows
that the BS implied volatility surface of our example reflects the characteris-
tics that the BS implied volatility decrease with the strike price. But this BS
implied volatility surface does not change with time a lot, which is probably
due to our assumption about the local instantaneous volatility function, which
only changes with the stock price.
                                                                         XFGIBT04.xpl
162                 7    How Precise Are Price Distributions Predicted by IBT?


                                      Implied Local Volatility Surface




                 5.50
                        4.25                                                   0.20
                               3.00                                            0.13
                                      1.75                                     0.07


                                               50.00   75.00   100.00 125.00



      Figure 7.8. Implied local volatility surface of the simulated model,
      calculated from B& C IBT.




7.3       Example – Analysis of DAX data
We now use the IBT to forecast the future price distribution of the real stock
market data. We use DAX index option prices data at January 4, 1999, which
are included in MD*BASE, a database located at CASE (Center for Applied
Statistics and Economics) at Humboldt-Universität zu Berlin, and provide some
dataset for demonstration purposes. In the following program, we estimate the
BS implied volatility surface first, while the quantlet volsurf, Fengler, Härdle
and Villa (2001), is used to obtain this estimation from the market option
prices, then construct the IBT using Derman and Kani method and calculate
the interpolated option prices using CRR binomial tree method. Fitting the
function of option prices directly from the market option prices is hardly ever
attempted since the function approaches a value of zero for very high strike
prices and option prices are bounded by non-arbitrage conditions.
7.3    Example – Analysis of DAX data                                              163


                                       Implied Local Volatility Surface




                  5.00
                         3.88                                                    0.28
                                2.75                                             0.20
                                       1.62                                      0.13

                                                50.00   75.00   100.00 125.00



      Figure 7.9. Implied local volatility surface of the simulated model,
      calculated from Monte-Carlo simulation.



                                                                          XFGIBT05.xpl



Figure 7.11 shows the price distribution estimation obtained by the Barle and
Cakici IBT, for τ = 0.5 year. Obviously, the estimated SPD by the Derman
and Kani IBT can be obtained similarly. In order to check the precision of
the estimated price distribution obtained by the IBT method, we compare it
to use DAX daily prices between January 1, 1997, and January 4. 1999. The
historical time series density estimation method described in Aı̈t-Sahalia, Wang
and Yared (2000) is used here. Notice that Risk-neutrality implies two kinds
of SPD should be equal, historical time series SPD is in fact the conditional
density function of the diffusion process. We obtain the historical time series
SPD estimation by the following procedure:

  1. Collect stock prices time series
164                        7     How Precise Are Price Distributions Predicted by IBT?


                                        Implied Volatility Surface




                                                               76.00           strike
                                                                       92.72
                                                                               109.44
                                                                                        126.16
                                                                                                 142.88
                                                                                                          159.60
             0.13

             0.11

             0.08
      vola
             0.05

             0.03
                                                        5.12
                                                 4.14
                                          3.15
             0.00                2.16
                        1.18
                 0.19          maturity




      Figure 7.10. BS implied volatility surface estimation by Monte-Carlo
      simulation.


  2. Assume this time series is a sample path of the diffusion process
                                             dSt
                                                 = µt dt + σ(St , t)dZt ,
                                              St
       where dZt is a Wiener process with mean zero and variance equal to dt.
  3. Estimate diffusion function σ(·, ·) in the diffusion process model using
     nonparametric method from stock prices time series
  4. Make Monte-Carlo simulation for the diffusion process with drift function
     is interest rate and estimated diffusion function
7.3   Example – Analysis of DAX data                                           165


                                   Estimated Implied Distribution
                            0.03
                            0.03
          probability*E-2
                            0.02
                            0.01
                            0.01
                            0
                            0




                                           5000                 10000
                                                  stock price

      Figure 7.11. The estimated stock price distribution, τ = 0.5 year.



  5. Estimate conditional density function g = p(ST |St , µ̂, σ̂) from Monte-
     Carlo simulated process

From Figure 7.12 we conclude that the SPD estimated by the Derman and Kani
IBT and the one obtained by Barle and Cakici IBT can be used to forecast fu-
ture SPD. The SPD estimated by different methods sometimes have deviations
on skewness and kurtosis. In fact the detection of the difference between the
historical time series SPD estimation and the SPD recovered from daily option
prices may be used as trading rules, see Table 7.1 and Chapter 9. In Table 7.1,
SPD estimated from daily option prices data set is expressed by f and the time
series SPD is g. A far out of the money (OTM) call/put is defined as one whose
exercise price is 10% higher (lower) than the future price. While a near OTM
call/put is defined as one whose exercise price is 5% higher (lower) but 10%
lower(higher)than the future price. When skew(f ) < skew(g), agents appar-
ently assign a lower probability to high outcomes of the underlying than would
be justified by the time series SPD (see Figure 7.13). Since for call options
only the right ‘tail’ of the support determines the theoretical price the latter is
smaller than the price implied by diffusion process using the time series SPD.
That is we buy calls. The same reason applies to put options.
166                                                          7    How Precise Are Price Distributions Predicted by IBT?


                                                                 State Price Density Estimation




                                0.05 0.1 0.15 0.2 0.25 0.3
              probability*E-3
                                0




                                                                        5000                 10000
                                                                               stock price

      Figure 7.12. SPD estimation by three methods, by historical estima-
      tion, and its 95% confidence band (dashed), by B & C IBT, and by D
      & K IBT (thin), τ = 0.5 year.

      Trading Rules to exploit SPD differences
      Skewness       (S1) skew(f )< skew(g)                                                  sell OTM put,
                                                                                             buy OTM call
      Trade                                                  (S2)     skew(f ) > skew(g)     buy OTM put
                                                                                             sell OTM call
      Kurtosis                                               (K1)      kurt(f )> kurt(g)     sell far OTM and ATM
                                                                                             buy near OTM options
      Trade                                                  (K2)     kurt(f ) < kurt(g)     buy far OTM and ATM,
                                                                                             sell near OTM options

                                Table 7.1. Trading Rules to exploit SPD differences.


From the simulations and real data example, we find that the implied binomial
tree is an easy way to assess the future stock prices, capture the term structure
of the underlying asset, and replicate the volatility smile. But the algorithms
still have some deficiencies. When the time step is chosen too small, negative
transition probabilities are encountered more and more often. The modification
of these values loses the information about the smile at the corresponding
nodes. The Barle and Cakici algorithm is a better choice when the interest
rate is high.Figure 7.15 shows the deviation of the two methods under the
7.3   Example – Analysis of DAX data                                                                                  167


                                                          Skewness Trade
                                                              g
                           0.4




                                                                               f=SPD
         probability*0.1
                           0.3
                           0.2




                                             sell put
                           0.1




                                                                                                 




                                                                                                     buy call
                           0




                                 1               2                3        4                 5         6          7
                                                                      stock price
                                 Figure 7.13. Skewness Trade, skew(f )< skew(g).


                                                              Kurtosis Trade
                           0.5




                                                                         f
                           0.4




                                                                         g
         probability*0.1
                           0.3
                           0.2
                           0.1




                                      sell                                                                 sell

                                                        buy             sell           buy
                           0




                                 -1              0            1            2                 3        4           5
                                                                      stock price
                                 Figure 7.14. Kurtosis Trade, kurt(f )> kurt(g).



situation that r = 0.2. When the interest rate is a little higher, Barle and
Cakici algorithm still can be used to construct the IBT while Derman and
Kani’s cannot work any more. The times of the negative probabilities appear
are fewer than Derman and Kani construction (see Jackwerth (1999)).
168                                7   How Precise Are Price Distributions Predicted by IBT?


                                       Estimated State Price Density




                             0.3
           probability*0.1
                             0.2
                             0.1
                             0




                                       100      120                 140   160
                                                      stock price
      Figure 7.15. SPD estimation by Monte-Carlo simulation, and its 95%
      confidence band (dashed), the B & C IBT, from the D & K IBT (thin),
      level =20, τ = 1 year, r = 0.20.



Besides its basic purpose of pricing derivatives in consistency with the market
prices, IBT is useful for other kinds of analysis, such as hedging and calculating
of implied probability distributions and volatility surfaces. It estimate the
future price distribution according to the historical data. On the practical
application aspect, the reliability of the approach depends critically on the
quality of the estimation of the dynamics of the underlying price process, such
as BS implied volatility surface obtained from the market option prices.
The IBT can be used to produce recombining and arbitrage-free binomial trees
to describe stochastic processes with variable volatility. However, some serious
limitations such as negative probabilities, even though most of them appeared
at the edge of the trees. Overriding them causes loss of the information about
the smile at the corresponding nodes. These defects are a consequence of the
requirement that a continuous diffusion is approximated by a binomial process.
Relaxation of this requirement, using multinomial trees or varinomial trees is
possible.
7.3   Example – Analysis of DAX data                                        169


Bibliography
Aı̈t-Sahalia, Y. and Lo, A. (1998). Nonparametric Estimation of State-Price
      Densities Implicit in Financial Asset Prices, Journal of Finance, 53: 499–
      547.

Aı̈t-Sahalia, Y. , Wang, Y. and Yared, F.(2001). Do Option Markets Correctly
      Price the Probabilities of Movement of the Underlying Asset? Journal of
      Econometrics, 102: 67–110.
Barle, S. and Cakici, N. (1998). How to Grow a Smiling Tree The Journal of
     Financial Engineering, 7: 127–146.
Bingham, N.H. and Kiesel, R. (1998). Risk-neutral Valuation: Pricing and
    Hedging of Financial Derivatives, Springer Verlag, London.

Cox, J., Ross, S. and Rubinstein, M. (1979). Option Pricing: A simplified
    Approach, Jouranl of Financial Economics 7: 229–263.
Derman, E. and Kani, I. (1994). The Volatility Smile and Its Implied Tree
    http://www.gs.com/qs/
Derman, E. and Kani, I. (1998). Stochastic Implied Trees: Arbitrage Pric-
    ing with Stochastic Term and Strike Structure of Volatility, International
    Journal of Theroetical and Applied Finance 1: 7–22.
Dupire, B. (1994). Pricing with a Smile, Risk 7: 18–20.
Fengler, M. R., Härdle, W. and Villa, Chr. (2001). The Dynamics of Implied
    Volatilities: A Common Principal Components Approach, Discussion pa-
    per 38, Sonderforschungsbereich 373, Humboldt-Universität zu Berlin.
Härdle, W., Hlávka, Z. and Klinke, S. (2000). XploRe Application Guide,
     Springer Verlag, Heidelberg.
Härdle,W. and Yatchew, A. (2001). Dynamic Nonparametric State price Den-
     sity Estimation using Constrained least Squares and the Bootstrap, Dis-
     cussion paper 1, Sonderforschungsbereich 373, Humboldt-Universität zu
     Berlin.
Hull, J. and White, A. (1987). The Pricing of Options on Assets with Stochastic
     Volatility, Journal of Finance 42: 281–300.
170               7   How Precise Are Price Distributions Predicted by IBT?


Jackwerth, J. (1999). Optional-Implied Risk-Neutral Distributions and Implied
    Binomial Trees: A Literature Review, Journal of Finance 51: 1611–1631.
Jackwerth, J. and Rubinstein, M. (1996). Recovering Probability Distributions
    from Option Prices, Journal of Finance 51: 1611–1631.
Kloeden, P., Platen, E. and Schurz, H. (1994). Numerical Solution of SDE
    Through Computer Experiments, Springer Verlag, Heidelberg.
Merton, R. (1976). Option Pricing When Underlying Stock Returns are Dis-
    continuous, Journal of Financial Economics January-March: 125–144.

Rubinstein, M. (1994). Implied Binomial Trees. Journal of Finance 49: 771–
    818.
8 Estimating State-Price Densities
  with Nonparametric Regression
                                   Kim Huynh, Pierre Kervella and Jun Zheng




8.1     Introduction
Derivative markets offer a rich source of information to extract the market’s
expectations of the future price of an asset. Using option prices, one may derive
the whole risk-neutral probability distribution of the underlying asset price at
the maturity date of the options. Once this distribution also called State-Price
Density (SPD) is estimated, it may serve for pricing new, complex or illiquid
derivative securities.
There exist numerous methods to recover the SPD empirically. They can be
separated in two classes:

   • methods using option prices as identifying conditions
   • methods using the second derivative of the call pricing function with
     respect to K

The first class includes methods which consist in estimating the parameters of a
mixture of log-normal densities to match the observed option prices, Melick and
Thomas (1997). Another popular approach in this class is the implied binomial
trees method, see Rubinstein (1994), Derman and Kani (1994) and Chapter 7.
Another technique is based on learning networks suggested by Hutchinson, Lo
and Poggio (1994), a nonparametric approach using artificial neural networks,
radial basis functions, and projection pursuits.
The second class of methods is based on the result of Breeden and Litzen-
berger (1978). This methodology is based on European options with identical
172       8   Estimating State-Price Densities with Nonparametric Regression


time to maturity, it may therefore be applied to fewer cases than some of the
techniques in the first class. Moreover, it also assumes a continuum of strike
prices on R+ which can not be found on any stock exchange. Indeed, the
strike prices are always discretely spaced on a finite range around the actual
underlying price. Hence, to handle this problem an interpolation of the call
pricing function inside the range and extrapolation outside may be performed.
In the following, a semiparametric technique using nonparametric regression of
the implied volatility surface will be introduced to provide this interpolation
task. A new approach using constrained least squares has been suggested by
Yatchew and Härdle (2002) but will not be explored here.
The concept of Arrow-Debreu securities is the building block for the analysis of
economic equilibrium under uncertainty. Rubinstein (1976) and Lucas (1978)
used this concept as a basis to construct dynamic general equilibrium models
in order to determine the price of assets in an economy. The central idea of this
methodology is that the price of a financial security is equal to the expected
net present value of its future payoffs under the risk-neutral probability density
function (PDF). The net present value is calculated using the risk-free interest
rate, while the expectation is taken with respect to the weighted-marginal-rate-
of-substitution PDF of the payoffs. The latter term is known as the state-price
density (SPD), risk-neutral PDF, or equivalent martingale measure. The price
of a security at time t (Pt ) with a single liquidation date T and payoff Z(ST )
is then:
                                                   Z ∞
             Pt = e−rt,τ τ E∗t [Z(ST )] = e−rt,τ τ     Z(ST )ft∗ (ST )dST    (8.1)
                                               −∞

where E∗t is the conditional expectation given the information set in t under the
equivalent martingale probability, ST is the state variable, rt,τ is the risk-free
rate at time t with time to maturity τ , and ft∗ (ST ) is the SPD at time t for
date T payoffs.
Rubinstein (1985) shows that if one has two of the three following pieces of
information:

   • representative agent’s preferences
   • asset price dynamics or its data-generating process
   • SPD

then one can recover the third. Since the agent’s preferences and the true data-
8.2    Extracting the SPD using Call-Options                                   173


generating process are unknown, a no-arbitrage approach is used to recover the
SPD.


8.2       Extracting the SPD using Call-Options
Breeden and Litzenberger (1978) show that one can replicate Arrow-Debreu
prices using the concept of butterfly spread on European call options. This
spread entails selling two call options at exercise price K, buying one call option
at K − = K − ∆K and another at K + = K + ∆K, where ∆K is the stepsize
between the adjacent call strikes. These four options constitute a butterfly
spread centered on K. If the terminal underlying asset value ST is equal to K
                           1
then the payoff Z(·) of ∆K    of such butterfly spreads is defined as:


                                                    u1 − u2
      Z(ST , K; ∆K) = P (ST −τ , τ, K; ∆K)|τ =0 =                  =1         (8.2)
                                                     ∆K ST =K,τ =0

where

                u1 = C(ST −τ , τ, K + ∆K) − C(ST −τ , τ, K),
                u2 = C(ST −τ , τ, K) − C(ST −τ , τ, K − ∆K).

C(S, τ, K) denotes the price of a European call with an actual underlying price
S, a time to maturity τ and a strike price K. Here, P (ST −τ , τ, K; ∆K) is the
                                        1
corresponding price of this security ( ∆K ∗ butterf ly spread(K; ∆K)) at time
T − τ.
As ∆K tends to zero, this security becomes an Arrow-Debreu security paying 1
if ST = K and zero in other states. As it is assumed that ST has a continuous
distribution function on R+ , the probability of any given level of ST is zero
and thus, in this case, the price of an Arrow-Debreu security is zero. However,
                                                                   1
dividing one more time by ∆K, one obtains the price of ( (∆K)        2 ∗ butterf ly

spread(K; ∆K)) and as ∆K tends to 0 this price tends to f (ST )e−rt,τ for
                                                                   ∗

ST = K. Indeed,
                                       
                      P (St , τ, K; ∆K)
              lim                              = f ∗ (ST )e−rt,τ .            (8.3)
             ∆K→0             ∆K          K=ST
174       8   Estimating State-Price Densities with Nonparametric Regression


This can be proved by setting the payoff Z1 of this new security
                                                                  
                 1
  Z1 (ST ) =         (∆K   − |S T − K|)1(S T ∈  [K − ∆K,  K +  ∆K])
               (∆K)2

in (8.1) and letting ∆K tend to 0. Indeed, one should remark that:
                      Z K+∆K
            ∀(∆K) :          (∆K − |ST − K|)dST = (∆K)2 .
                       K−∆K


If one can construct these financial instruments on a continuum of states (strike
prices) then at infinitely small ∆K a complete state pricing function can be
defined.
Moreover, as ∆K tends to zero, this price will tend to the second derivative of
the call pricing function with respect to the strike price evaluated at K:
                                          
                         P (St , τ, K; ∆K)                  u1 − u2
                   lim                        =     lim
                 ∆K→0            ∆K                ∆K→0 (∆K)2

                                                   ∂ 2 Ct (·)
                                              =               .            (8.4)
                                                     ∂K 2

Equating (8.3) and (8.4) across all states yields:
                      ∂ 2 Ct (·)
                                  = e−rt,τ τ ft∗ (ST )
                        ∂K 2 K=ST

where rt,τ denotes the risk-free interest rate at time t with time to maturity τ
and ft∗ (·) denotes the risk-neutral PDF or the SPD in t. Therefore, the SPD
is defined as:
                                              ∂ 2 Ct (·)
                          ft∗ (ST ) = ert,τ τ             .                (8.5)
                                                ∂K 2 K=ST
This method constitutes a no-arbitrage approach to recover the SPD. No as-
sumption on the underlying asset dynamics are required. Preferences are not
restricted since the no-arbitrage method only assumes risk-neutrality with re-
spect to the underlying asset. The only requirements for this method are
that markets are perfect (i.e. no sales restrictions, transactions costs or taxes
and that agents are able to borrow at the risk-free interest rate) and that
C(·) is twice differentiable. The same result can be obtained by differentiat-
ing (8.1) twice with respect to K after setting for Z the call payoff function
Z(ST ) = (ST − K)+ .
8.2   Extracting the SPD using Call-Options                                      175


8.2.1    Black-Scholes SPD

The Black-Scholes call option pricing formula is due to Black and Scholes (1973)
and Merton (1973). In this model there are no assumptions regarding prefer-
ences, rather it relies on no-arbitrage conditions and assumes that the evolution
of the underlying asset price St follows a geometric Brownian motion defined
through
                               dSt
                                   = µdt + σdWt .                               (8.6)
                                St

Here µ denotes the drift and σ the volatility assumed to be constant.
The analytical formula for the price in t of a call option with a terminal date
T = t + τ , a strike price K, an underlying price St , a risk-free rate rt,τ , a
continuous dividend yield δt,τ , and a volatility σ, is:
                                             Z ∞
                                       −rt,τ                    ∗
   CBS (St , K, τ, rt,τ , δt,τ ; σ) = e          max(ST − K, 0)fBS,t (ST )dST
                                              0
                                  = St e−δt,τ τ Φ(d1 ) − Ke−rt,τ τ Φ(d2 )
where Φ(·) is the standard normal cumulative distribution function and
                           log(St /K) + (rt,τ − δt,τ + 21 σ 2 )τ
                    d1   =                 √                     ,
                                         σ τ
                                  √
                    d2   = d1 − σ τ .

As a consequence of the assumptions on the underlying asset price process the
Black-Scholes SPD is a log-normal density with mean (rt,τ − δt,τ − 12 σ 2 )τ and
variance σ 2 τ for log(ST /St ):

   ∗                    ∂ 2 Ct
  fBS,t (ST )   = ert,τ τ
                        ∂K 2 K=ST
                                     [log(ST /St ) − (rt,τ − δt,τ − 12 σ 2 )τ ]2
                                                                                
                        1
                =     √        exp −                                              .
                    ST 2πσ 2 τ                        2σ 2 τ
The risk measures Delta (∆) and Gamma (Γ) are defined as:
                                   def ∂CBS
                              ∆BS =         = Φ(d1 )
                                       ∂St
                                     2
                                def ∂ CBS    Φ(d1 )
                            ΓBS =          =     √
                                     ∂St2    St σ τ
176        8   Estimating State-Price Densities with Nonparametric Regression


The Black-Scholes SPD can be calculated in XploRe using the following quant-
let:

      bsspd = spdbs(K,s,r,div,sigma,tau)
           estimates the Black-Scholes SPD

The arguments are the strike prices (K), underlying price (s), risk-free interest
rate (r), dividend yields (div), implied volatility of the option (sigma), and
the time to maturity (tau). The output consist of the Black-Scholes SPD
(bsspd.fbs), ∆ (bsspd.delta), and the Γ (bsspd.gamma) of the call options.
Please note that spdbs can be applied to put options by using the Put-Call
parity.
However, it is widely known that the Black-Scholes call option formula is not
valid empirically. For more details, please refer to Chapter 6. Since the Black-
Scholes model contains empirical irregularities, its SPD will not be consistent
with the data. Consequently, some other techniques for estimating the SPD
without any assumptions on the underlying diffusion process have been devel-
oped in the last years.


8.3      Semiparametric estimation of the SPD

8.3.1     Estimating the call pricing function

The use of nonparametric regression to recover the SPD was first investigated
by Aı̈t-Sahalia and Lo (1998). They propose to use the Nadaraya-Watson esti-
mator to estimate the historical call prices Ct (·) as a function of the following
state variables (St , K, τ, rt,τ , δt,τ )> . Kernel regressions are advocated because
there is no need to specify a functional form and the only required assumption
is that the function is smooth and differentiable, Härdle (1990). When the re-
gressor dimension is 5, the estimator is inaccurate in practice. Hence, there is
a need to reduce the dimension or equivalently the number of regressors. One
method is to appeal to no-arbitrage arguments and collapse St , rt,τ and δt,τ
into the forward price Ft = St e(rt,τ −δt,τ )τ in order to express the call pricing
function as:


                  C(St , K, τ, rt,τ , δt,τ ) = C(Ft,τ , K, τ, rt,τ ).          (8.7)
8.3   Semiparametric estimation of the SPD                                                  177


An alternative specification assumes that the call option function is homoge-
neous of degree one in St and K (as in the Black-Scholes formula) so that:


                   C(St , K, τ, rt,τ , δt,τ ) = KC(St /K, τ, rt,τ , δt,τ ).                (8.8)

Combining the assumptions of (8.7) and (8.8) the call pricing function can be
further reduced to a function of three variables ( FK
                                                    t,τ
                                                        , τ, rt,τ ).
Another approach is to use a semiparametric specification based on the Black-
Scholes implied volatility. Here, the implied volatility σ is modelled as a non-
parametric function, σ(Ft,τ , K, τ ):

                C(St , K, τ, rt,τ , δt,τ ) = CBS (Ft,τ , K, τ, rt,τ ; σ(Ft,τ , K, τ )).    (8.9)

Empirically the implied volatility function mostly depends on two parameters:
the time to maturity τ and the moneyness M = K/Ft,τ . Almost equivalently,
one can set M = S̃t /K where S̃t = St − D and D is the present value of
the dividends to be paid before the expiration. Actually, in the case of a
dividend         , we have D = St (1 − e−δt ). If the dividends are discrete, then
       Pyield δt−r
D=         Dti e t,τi where ti is the dividend payment date of the ith dividend
      ti ≤t+τ
and τi is its maturity.
Therefore, the dimension of the implied volatility function can be reduced to
σ(K/Ft,τ , τ ). In this case the call option function is:

         C(St , K, τ, rt,τ , δt,τ ) = CBS (Ft,τ , K, τ, rt,τ ; σ(K/Ft,τ , τ )).           (8.10)

                                                                   ˆ t = ∂ Ĉt (·) ,
Once a smooth estimate of σ̂(·) is obtained, estimates of Ĉt (·), ∆
                                                                         ∂St
     ∂ 2 Ĉt (·) ˆ∗
                               2
                       rt,τ τ ∂ Ĉt (·)
Γ̂t = ∂S 2 , and ft = e        ∂K 2       can be calculated.
           t




8.3.2      Further dimension reduction

The previous section proposed a semiparametric estimator of the call pricing
function and the necessary steps to recover the SPD. In this section the di-
mension is reduced further using the suggestion of Rookley (1997). Rookley
178       8   Estimating State-Price Densities with Nonparametric Regression


uses intraday data for one maturity and estimates an implied volatility surface
where the dimension are the intraday time and the moneyness of the options.
Here, a slightly different method is used which relies on all settlement prices
of options of one trading day for different maturities to estimate the implied
volatility surface σ(K/Ft,τ , τ ). In the second step, these estimates are used for
a given time to maturity which may not necessarily correspond to the maturity
of a series of options. This method allows one to compare the SPD at different
dates because of the fixed maturity provided by the first step. This is interesting
if one wants to study the dynamics and the stability of these densities.
Fixing the maturity also allows us to eliminate τ from the specification of the
implied volatility function. In the following part, for convenience, the definition
of the moneyness is M = S̃t /K and we denote by σ the implied volatility. The
notation ∂f (x∂x
              1 ,...,xn )
                  i
                          denotes the partial derivative of f with respect to xi and
df (x)
 dx the total derivative of f with respect to x.

Moreover, we use the following rescaled call option function:
                                                 Cit
                                      cit   =         ,
                                                 S̃t
                                                 S̃t
                                     Mit    =        .
                                                 Ki

where Cit is the price of the ith option at time t and Ki is its strike price.
The rescaled call option function can be expressed as:

                                                      e−rτ Φ(d2 )
                 cit    = c(Mit ; σ(Mit )) = Φ(d1 ) −             ,
                                                         Mit
                          log(Mit ) + rt + 12 σ(Mit )2 τ
                                      
                 d1     =                   √             ,
                                     σ(Mit ) τ
                                       √
                 d2     = d1 − σ(Mit ) τ .

The standard risk measures are then the following partial derivatives (for no-
tational convenience subscripts are dropped):
                             ∂C   ∂C                      ∂c
                       ∆=       =      = c(M, σ(M )) + S̃      ,
                             ∂S   ∂ S̃                    ∂ S̃

                            ∂∆   ∂2C    ∂2C        ∂c        ∂2c
                       Γ=      =      =        = 2      + S̃        .
                            ∂S   ∂S 2   ∂ S̃ 2     ∂ S̃      ∂ S̃ 2
8.3   Semiparametric estimation of the SPD                                         179


where
                               ∂c                dc ∂M       dc 1
                                          =               =       ,
                              ∂ S̃              dM ∂ S̃     dM K
                                                        2
                             ∂2c                 d2 c   1
                                          =          2
                                                            .
                             ∂ S̃ 2             dM      K

The SPD is then the second derivative of the call option function with respect
to the strike price:
                                        ∂2C           ∂2c
                          f ∗ (·) = erτ    2
                                             = erτ S̃      .            (8.13)
                                        ∂K            ∂K 2
The conversion is needed because c(·) is being estimated not C(·). The analyt-
ical expression of (8.13) depends on:
                                                              2
                           ∂2c                 d2 c
                                                      
                                                          M              dc M
                                      =                            +2
                           ∂K 2               dM 2        K             dM K 2

                        dc
The functional form of dM  is:

                   dc            dd1        Φ0 (d2 ) dd2        Φ(d2 )
                      = Φ0 (d1 )     − e−rτ              + e−rτ        ,         (8.14)
                  dM             dM          M dM                M2
        2
       d c
while dM  2 is:


                                                     2 
              d2 c
                                    2         
                              0     d d1         dd1
                       =    Φ (d1 )       − d1
             dM 2                   dM 2         dM
                             −rτ 0
                                          2                         2 
                            e   Φ (d2 ) d d2      2 dd2           dd2
                       −                       −          − d 2
                                M         dM 2    M dM            dM
                              −rτ
                            2e     Φ(d2 )
                       −                                                         (8.15)
                                M3
180       8   Estimating State-Price Densities with Nonparametric Regression


The quantities in (8.14) and (8.15) are a function of the following first deriva-
tives:
                       dd1           ∂d1    ∂d1 ∂σ
                              =           +         ,
                       dM            ∂M     ∂σ ∂M
                       dd2           ∂d2    ∂d2 ∂σ
                              =           +         ,
                       dM            ∂M     ∂σ ∂M
                       ∂d1           ∂d2       1
                              =           =     √ ,
                       ∂M            ∂M     Mσ τ
                                                      √
                       ∂d1             log(M ) + rτ     τ
                              =      −      √       +     ,
                       ∂σ                 σ2 τ         2
                                                      √
                       ∂d2             log(M ) + rτ     τ
                              =      −      √       −     .
                       ∂σ                 σ2 τ         2

For the remainder of this chapter, we define:

                                V     = σ(M ),
                                        ∂σ(M )
                               V0     =         ,
                                          ∂M
                                        ∂ 2 σ(M )
                              V 00    =           .                       (8.16)
                                          ∂M 2

The quantities in (8.14) and (8.15) also depend on the following second deriva-
tive functions:
                                                  √
         d2 d1                        V0
                                                                      
                          1     1              00     τ    log(M ) + rτ
                =    −     √       +       + V           −      √
         dM 2          Mσ τ M          σ             2        σ2 τ
                                                       
                            log(M ) + rτ          1
                + V 0 2V 0       3
                                   √       −        √ ,                   (8.17)
                                σ τ          M σ2 τ


                                                √
         d2 d2                       V0
                                                                    
                        1       1            00     τ    log(M ) + rτ
                 = −     √        +       −V           +      √
         dM 2        Mσ τ M          σ             2        σ2 τ
                                                     
                            log(M ) + rτ        1
                 + V 0 2V 0       √       −       √ .                     (8.18)
                                σ3 τ        M σ2 τ

Local polynomial estimation is used to estimate the implied volatility smile and
its first two derivatives in (8.16). A brief explanation will be described now.
8.3     Semiparametric estimation of the SPD                                             181


8.3.3       Local Polynomial Estimation

Consider the following data generating process for the implied volatilities:

                               σ = g(M, τ ) + σ ∗ (M, τ )ε,

where E(ε) = 0, Var(ε) = 1. M, τ and ε are independent and σ ∗ (m0 , τ0 ) is
the conditional variance of σ given M = m0 , τ = τ0 . Assuming that all third
derivatives of g exist, one may perform a Taylor expansion for the function g
in a neighborhood of (m0 , τ0 ):


                                    ∂g                    1 ∂2g
      g(m, τ ) ≈ g(m0 , τ0 )    +             (m − m0 ) +               (m − m0 )2
                                    ∂M m0 ,τ0             2 ∂M 2 m0 ,τ0
                                    ∂g                    1 ∂2g
                                +             (τ − τ0 ) +               (τ − τ0 )2
                                    ∂τ m0 ,τ0             2 ∂τ 2 m0 ,τ0
                                    1 ∂2g
                                +                  (m − m0 )(τ − τ0 ).               (8.19)
                                    2 ∂M ∂τ m0 ,τ0

This expansion suggests an approximation by local polynomial fitting, Fan
and Gijbels (1996). Hence, to estimate the implied volatility at the target
point (m0 , τ0 ) from observations σj (j = 1, . . . , n), we minimize the following
expression:
                 h
  Pn
     j=1   σ j −    β0 + β1 (Mj − m0 ) + β2 (Mj − m0 )2 + β3 (τj − τ0 )
                                             i2                              (8.20)
  +β4 (τj − τ0 )2 + β5 (Mj − m0 )(τj − τ0 )      KhM ,hτ (Mj − m0 , τj − τ0 )

where n is the number of observations (options), hM and hτ are the bandwidth
controlling the neighborhood in each directions and KhM ,hτ is the resulting
kernel function weighting all observation points. This kernel function may be
a product of two univariate kernel functions.
For convenience use the following matrix definitions:
             M1 − m0     (M1 − m0 )2      τ1 − τ0   (τ1 − τ0 )2   (M1 − m0 )(τ1 − τ0 )
                                                                                      
      1
    1       M2 − m0     (M2 − m0 )2      τ2 − τ0   (τ2 − τ0 )2   (M2 − m0 )(τ2 − τ0 ) 
X = .                                                                                 ,
                                                                                      
                ..            ..             ..          ..               ..
     ..         .             .              .           .                .           
      1      Mn − m0     (Mn − m0 )2      τn − τ0   (τn − τ0 )2   (Mn − m0 )(τn − τ0 )
182        8   Estimating State-Price Densities with Nonparametric Regression



                                                                          
        σ1                                                              β0
   σ =  ...  ,   W = diag{KhM ,hτ (Mj − m0 , τj − τ0 )}    and   β =  ...  .
                                                                      

        σn                                                              β5


Hence, the weighted least squares problem (8.20) can be written as
                                        >
                         min (σ − Xβ) W (σ − Xβ) .                                 (8.21)
                           β

and the solution is given by
                                            −1
                           β̂ = X > W X           X > W σ.                         (8.22)

A nice feature of the local polynomial method is that it provides the estimated
implied volatility and its first two derivatives in one step. Indeed, one has from
(8.19) and (8.20):

                                 ∂g
                                 d
                                                  = βˆ1 ,
                                 ∂M m0 ,τ0
                                 2g
                                ∂d
                                                  = 2βˆ2 .
                                ∂M 2 m0 ,τ0

One of the concerns regarding this estimation method is the dependence on the
bandwidth which governs how much weight the kernel function should place
on an observed point for the estimation at a target point. Moreover, as the
call options are not always symmetrically and equally distributed around the
ATM point, the choice of the bandwidth is a key issue, especially for estimation
at the border of the implied volatility surface. The bandwidth can be chosen
global or locally dependent on (M, τ ). There are methods providing ”optimal”
bandwidths which rely on plug-in rules or on data-based selectors.
In the case of the volatility surface, it is vital to determine one bandwidth for the
maturity and one for the moneyness directions. An algorithm called Empirical-
Bias Bandwidth Selector (EBBS) for finding local bandwidths is suggested by
Ruppert (1997) and Ruppert, Wand, Holst and Hössler (1997). The basic idea
of this method is to minimize the estimate of the local mean square error at
each target point, without relying on asymptotic result. The variance and the
bias term are in this algorithm estimated empirically.
8.4    An Example: Application to DAX data                                    183


Using the local polynomial estimations, the empirical SPD can be calculated
with the following quantlet:

      lpspd = spdbl(m,sigma,sigma1,sigma2,s,r,tau)
           estimates the semi-parametric SPD.

The arguments for this quantlet are the moneyness (m), V (sigma), V 0 (sigma1),
V 00 (sigma2), underlying price (s) corrected for future dividends, risk-free in-
terest rate (r), and the time to maturity (tau). The output consist of the local
polynomial SPD (lpspd.fstar), ∆ (lpspd.delta), and the Γ (lpspd.gamma)
of the call-options.


8.4      An Example: Application to DAX data
This section describes how to estimate the Black-Scholes and local polynomial
SPD using options data on the German DAX index.


8.4.1     Data

The dataset was taken from the financial database MD*BASE located at CASE
(Center for Applied Statistics and Economics) at Humboldt-Universität zu
Berlin. Since MD*BASE is a proprietary database, only a limited dataset
is provided for demonstration purposes.
This database is filled with options and futures data provided by Eurex. Daily
series of 1, 3, 6 and 12 months DM-LIBOR rates taken from the T homson
F inancial Datastream serve as riskless interest rates. The DAX 30 futures
and options settlement data of January 1997 (21 trading days) were used in this
study. Daily settlement prices for each option contract are extracted along with
contract type, maturity and strike. For the futures, the daily settlement prices,
maturities and volumes are the relevant information. To compute the interest
rates corresponding to the option maturities a linear interpolation between the
available rates was used.
The DAX is a performance index which means that dividends are reinvested.
However, assuming no dividend yields when inverting the Black-Scholes for-
mula results in different volatilities for pairs of puts and calls contrary to the
184       8   Estimating State-Price Densities with Nonparametric Regression


no-arbitrage assumption contained in the Put-Call parity. This remark can
be explained by the fact that until January 2002 domestic investors have an
advantage as they may receive a portion or all of the dividend taxes back de-
pending on their tax status. Dividend tax means here the corporate income
tax for distributed gains from the gross dividend.
Since the dividends are rebated to domestic investors the DAX should fall by
an amount contained between 0 and these dividend taxes. Indeed, the value of
this fall depends on the level of these taxes which may be equal to zero and on
the weights of domestic and foreign investors trading the DAX. These dividend
taxes have the same effects as ordinary dividends and should therefore be used
for computing the implied volatilities and the future price implicit in the Black
Scholes formula.
Hafner and Wallmeier (2001) suggest a method in order to get around this
problem which consists in computing dividends implied by the Put-Call parity.
Indeed, combining the futures pricing formula

                          Ft,τF = St ert,τF τF − Dt,τf

and the Put-Call parity

                    Ct − Pt = St − Dt,τO − Ke−rt,τo τo

we obtain:

              Ct − Pt = Ft,τF e−rt,τF + Dt,τF ,τO − Ke−rt,τO τO           (8.23)

where τO is the maturity of the options, τF is the maturity of the nearest
forward whose volume is positive and Dt,τF ,τO = Dt,τF − Dt,τO is the difference
between the present values of the dividends.
Using (8.23), implied dividends were computed for each pair of put and call
with the same strike. Theoretically, for a given time to maturity there must
be only one value for these implied dividends. For each maturity the average
of these implied dividends was used to compute the corrected price. Using this
method implied volatilities are more reliable as the systematic “gap” between
put and call volatilities disappears. The only uncertainty at this stage is due
to the interpolated rates for the maturity τO .
The dataset consists of one file XFGData9701 with 11 columns.
8.4   An Example: Application to DAX data                                     185


         1    Day
         2    Month
         3    Year
         4    Type of option (1 for calls, 0 for puts)
         5    Time to maturity (in calendar days)
         6    Strike prices
         7    Option prices
         8    Corrected spot price (implied dividends taken into account)
         9    Risk-free interest rate
        10    Implied volatility
        11    Non-corrected spot price

The data can be read into XploRe by loading the quantlib finance and then
issuing the following command:

data=read("XFGData9701.dat")

Next extract all call options on January 3, 1997 with the paf command:

data=paf(data,(data[,1]==3)&&(data[,4]==1))


8.4.2        SPD, delta and gamma

This section provides an example using XploRe to calculate the semiparametric
SPD using DAX index options data. It is assumed that the quantlib finance
has been loaded.
  XFGSPDonematurity.xpl plots the SPD of the series of options closest to
maturity. This first example only uses smoothing method in one dimension.
   XFGSPDoneday.xpl calculates and plots the local polynomial SPD for Jan-
uary 10, 1997 for different times to maturity (τ = 0.125, 0.25, 0.375). After
loading the data, the implied volatility is estimated using the volsurf quantlet,
while the first and second derivatives are estimated using lpderxest quantlet.
In this example the grid size is 0.01. The bandwidth is chosen arbitrarily at 0.15
and 0.125 for the moneyness and maturity directions respectively. The criteria
used is a visual inspection of the first and second derivatives to ensure that
they are continuous and smooth. Next the quantlet spdbl is used to calculate
the SPD which is finally displayed in Figure 8.1.
186                  8                   Estimating State-Price Densities with Nonparametric Regression


This figure shows the expected effect of time to maturity on the SPD, which
is a loss of kurtosis. The x-axis represents the terminal prices ST . The local
polynomial SPD displays a negative skew compared to a theoretical Black-
Scholes SPD. The major reason for the difference is the measure of implied
volatility. Using the local polynomial estimators one captures the effect of the
“volatility smile” and its effects on the higher moments such as skewness and
kurtosis. This result is similar to what Aı̈t-Sahalia and Lo (1998) and Rookley
(1997) found in their study.


                                              Semi-parametric SPD: 10-01-1997
                         5 10 15 20 25
       Density*E-4

                         0




                                               2500                  3000              3500
                                                         Stock price at expiry
      Figure 8.1. Local Polynomial SPD for τ = 0.125 (blue,filled), τ = 0.25
      (black,dashed) and τ = 0.375 (red,dotted).
                                                                                    XFGSPDoneday.xpl



Figure 8.2 and Figure 8.3 show Delta and Gamma for the full range of strikes
and for three different maturities. This method allows the user to get in one
step both greeks in one estimation for all strikes and maturities.
A natural question that may arise is how do the SPDs evolve over time. In
this section an illustrative example is used to show the dynamics of the SPD
over the month of January 1997.       XFGSPDonemonth.xpl estimates and plots
the SPD for each trading day in January 1997. The x-axis is the moneyness,
y-axis is the trading day, and the z-axis is the SPD. Figure 8.4 shows the local
polynomial SPD for the three first weeks of January, 1997.
8.4    An Example: Application to DAX data                                        187


                                     Semi-parametric Delta: 10-01-1997
                    1
                    0.5
       Delta

                    0




                                      2500               3000            3500
                                                 Strike prices
      Figure 8.2. Local Polynomial Delta for τ = 0.125 (blue,filled), τ = 0.25
      (black,dashed) and τ = 0.375 (red,dotted).


                                    Semi-parametric Gamma: 10-01-1997
                    5 10 15 20 25
       Gamma*E-4

                    0




                                      2500               3000            3500
                                                 Strike prices
      Figure 8.3. Local Polynomial Gamma for τ = 0.125 (blue,filled), τ =
      0.25 (black,dashed) and τ = 0.375 (red,dotted).
                                                                     XFGSPDoneday.xpl



8.4.3              Bootstrap confidence bands

Rookley’s method serves to estimate the SPD, where V , V 0 and V 00 from (8.16)
are computed via local polynomials. The method is now applied to estimate
a SPD whose maturity is equal to the maturity of a series of options. In this
case, the nonparametric regression is a univariate one.
188        8   Estimating State-Price Densities with Nonparametric Regression


                          Local-Polynomial SPD: 01-1997, tau=0.250




                                                                              5.97
                  24
                   23
                    22                                                        4.48
                     21
                      20
                       17
                        16
                                                                              3.00
                         15
                          14
                           13                                                 1.51
                            10
                              9
                               8
                                7
                                 6                                     1.20
                                                      1.00      1.10
                                               0.90




      Figure 8.4. Three weeks State-Price Densities on a moneyness scale.
                                                         XFGSPDonemonth.xpl



With a polynomial of order p = 2 and a bandwidth h = n−1/9 , it can be
                                                          

shown that                                      
                        E|fˆn∗ − f ∗ |2 = O n−4/9 ,

because
                                                          
                                E|V̂n − V |2      = O n−8/9 ,
                                      0   0
                                                          
                               E|V̂n − V |2       = O n−4/9 ,
                                     00   00
                                                          
                             E|V̂n − V |2         = O n−4/9 .
8.4   An Example: Application to DAX data                                   189


This result can be obtained using some theorems related to local polynomial
estimation, for example in Fan and Gijbels (1996), if some boundary conditions
are satisfied.
An asymptotic approximation of fˆn∗ is complicated by the fact that fˆn∗ is a
non linear function of V , V 0 and V 00 . Analytical confidence intervals can be
obtained using delta methods proposed by Aı̈t-Sahalia (1996). However, an
alternative method is to use the bootstrap to construct confidence bands. The
idea for estimating the bootstrap bands is to approximate the distribution of

                              sup |fˆ∗ (k) − f ∗ (k)|.
                               k


The following procedure illustrates how to construct bootstrap confidence
bands for local polynomial SPD estimation.

  1. Collect daily option prices from MD*BASE, only choose those options
     with the same expiration date, for example, those with time to maturity
     49 days on Jan 3, 1997.
  2. Use the local polynomial estimation method to obtain the empirical SPD.
     Notice that when τ is fixed the forward price F is also fixed. So that the
     implied volatility function σ(K/F ) can be considered as a fixed design
     situation, where K is the strike price.
  3. Obtain the confidence band using the wild bootstrap method. The wild
     bootstrap method entails:
        • Suppose that the regression model for the implied volatility function
          σ(K/F ) is:             
                                    Ki
                          Yi = σ        + εi , i = 1, · · · , n.
                                    F
        • Choose a bandwidth g which is larger than the optimal h in or-
          der to have oversmoothing. Estimate the implied volatility function
          σ(K/F ) nonparametrically and then calculate the residual errors:
                                                
                                                Ki
                                ε̃i = Yi − σ̂h      .
                                                F

        • Replicate B times the series of the {ε̃i } with wild bootstrap ob-
          taining {ε∗,j
                    i } for j = 1, · · · , B, Härdle (1990), and build B new
190       8   Estimating State-Price Densities with Nonparametric Regression


           bootstrapped samples:
                                                         
                                                     Ki
                                   Yi∗,j = σ̂g                + ε∗,j
                                                                 i .
                                                     F

        • Estimate the SPD f ∗,j using bootstrap samples, Rookley’s method
          and the bandwidth h, and build the statistics

                                 Tf∗ = sup |f ∗,j (z) − fˆ∗ (z)|.
                                         z


        • Form the (1 − α) bands [fˆ∗ (z) − tf ∗ ,1−α , fˆ∗ (z) + tf ∗ ,1−α ],
          where tf ∗ ,1−α denotes the empirical (1 − α)-quantile of Tf∗ .

Two SPDs (Jan 3 and Jan 31, 1997) whose times to maturity are 49 days
were estimated and are plotted in Figure (8.5). The bootstrap confidence
band corresponding to the first SPD (Jan 3) is also visible on the chart. In
Figure (8.6), the SPDs are displayed on a moneyness metric. It seems that the
differences between the SPDs can be eliminated by switching to the moneyness
metric. Indeed, as can be extracted from Figure 8.6, both SPDs lie within
the 95 percent confidence bands. The number of bootstrap samples is set to
B = 100. The local polynomial estimation was done on standardized data, h
is then set to 0.75 for both plots and g is equal to 1.1 times h. Notice that
greater values of g are tried and the conclusion is that the confidence bands
are stable to an increase of g.


8.4.4    Comparison to Implied Binomial Trees

In Chapter 7, the Implied Binomial Trees (IBT) are discussed. This method is a
close approach to estimate the SPD. It also recovers the SPD nonparametrically
from market option prices and uses the Black Scholes formula to establish the
relationship between the option prices and implied volatilities as in Rookely’s
method. In Chapter 7, the Black Scholes formula is only used for Barle and
Cakici IBT procedure, but the CRR binomial tree method used by Derman
and Kani (1994) has no large difference with it in nature. However, IBT and
nonparametric regression methods have some differences caused by different
modelling strategies.
The IBT method might be less data-intensive than the nonparametric regres-
sion method. By construction, it only requires one cross section of prices. In the
8.4    An Example: Application to DAX data                                                      191



                                          SPDs and bootstrap CB, tau= 49 days
                       10 15 20 25 30
         density*E-4
                       5
                       0




                                        2400      2600            2800             3000
                                                  Stock price at expiry S(T)


                   Figure 8.5. SPD estimation and bootstrap confidence band.
                                                                       XFGSPDcb.xpl




                                          SPDs and bootstrap CB, tau= 49 days
                       8
                       6
         density
                       4
                       2
                       0




                                          0.8            0.9                   1          1.1
                                                         S(T)/F(t,T)

      Figure 8.6. SPD estimation and bootstrap confidence band (moneyness
      metric).
                                                               XFGSPDcb2.xpl



earlier application with DAX data, option prices are used with different times
to maturity for one day to estimate the implied volatility surface first in order
192             8       Estimating State-Price Densities with Nonparametric Regression




                          SPD estimations: 19970103, tau= 77 days



                        0.2
                        0.15
          density*E-2

                        0.1
                        0.05
                        0




                               2000      2500                 3000   3500
                                                stock price

      Figure 8.7. Comparison of different SPD estimations, by Rookley’s
      method (blue) and IBT (black, thin).
                                                                       XFGSPDcom.xpl



to construct the tree using the relation formula between option prices and risk-
neutral probabilities. The precision of the SPD estimation using IBT is heavily
affected by the quality of the implied volatility surface and the choice of the
levels of the implied tree. Furthermore, from the IBT method only risk-neutral
probabilities are obtained. They can be considered as a discrete estimation of
the SPD. However, the IBT method is not only useful for estimating SPD, but
also for giving a discrete approximation of the underlying process.
The greatest difference between IBTs and nonparametric regression is the re-
quirement of smoothness. The precision of Rookley’s SPD estimation is highly
dependent on the selected bandwidth. Even if very limited option prices are
given, a part of the SPD estimation still can be obtained using nonparametric
regression, while the IBT construction has to be given up if no further struc-
ture is invoked on the volatility surface. Rookley’s method has on first sight
no obvious difference with Aı̈t-Sahalia’s method theoretically, Aı̈t-Sahalia and
Lo (1998). But investigating the convergence rate of the SPD estimation using
Aı̈t-Sahalia’s method allows one to conduct statistical inference such as test of
the stability of the SPD and tests of risk neutrality.
8.4   An Example: Application to DAX data                                      193


The quantlet XFGSPDcom.xpl shows a comparison of the SPD estimates by
IBT and Rookley’s methods. The differences between these two SPD estimates
may be due to the selection of the bandwidths in Rookley’s method, the choice
of steps in the construction of the IBT and the use of DAX implied dividends
in Rookley’s method. Figure 8.7 shows the implied binomial trees and the local
polynomial SPDs for January, 3 1997.
Both densities seems to be quiet different. Indeed, the IBTs SPD shows a fatter
left tail than the Rookley’s one and the Rookley’s SPD shows a larger kurtosis.
To test which of both densities is more reliable, a cross-validation procedure is
performed. The idea of this test is to compare the theoretical prices based on
(8.1) with those observed on the market. However, as the whole tails are not
available for the Rookley’s SPD, the test is done on butterfly spreads defined in
Section 8.2 since their prices should not be influenced by the tails of the SPDs.
For cross-validation, we remove the three calls used to calculate the observed
butterfly prices from the sample before estimating the SPD. Moreover, since
the largest difference between both SPDs is observed at the ATM point (see
Figure 8.7), the test is applied only to the two butterfly spreads whose centers
surround the ATM point. The width 2∆K of the butterfly spread is set to 200.
This procedure is done for the 21 days of January 1997. Figure 8.8 displays
the results in term of relative pricing error E:
                                Pobserved − PSP D
                           E=
                                    Pobserved
where Pobserved is the observed price of the butterfly spread and PSP D is the
price computed using the SPD estimate and (8.1). It seems that both SPDs
have a too small kurtosis since the observed prices of butterfly spreads are
larger than those of both SPDs in most of the cases. However, Rookley’s SPD
is in mean nearer to the observed price than the IBT’s one.




Bibliography
Aı̈t-Sahalia, Y. (1996). The Delta method for Nonparametric Kernel Function-
      als, mimeo.
Aı̈t-Sahalia, Y. and Lo, A. W. (1998). Nonparametric estimation of state-price
      densities implicit in financial asset prices, Journal of Finance 53: 499–547.
194                  8          Estimating State-Price Densities with Nonparametric Regression




                                          Pricing errors for butterfly spread




                                20
           Pricing error in %

                                10
                                0
                                -20 -10




                                          5     10     15          20   25      30
                                                            Date




                                          Pricing errors for butterfly spread
                                20
           Pricing error in %

                                10
                                0
                                -10




                                          5     10     15          20   25      30
                                                            Date

      Figure 8.8. The upper graph display the relative pricing errors for the
      butterfly spread centered on the nearest strike on the left side of the
      ATM point. The second graph corresponds to the butterfly spread
      centered on the nearest strike on the right side of the ATM point. The
      black lines represent the IBT’s pricing errors and the blue the Rookley’s
      errors.


Arrow, K. (1964). The role of securities in the optimal allocation of risk bearing,
    Review of Economic Studies 31: 91–96.
Bahra, B. (1997). Implied risk-neutral probability density functions from option
8.4   An Example: Application to DAX data                                   195


      prices: theory and application. Bank of England Working Paper 66.
Black, F. and Scholes, M. (1973). The pricing of options and corporate liabili-
    ties, Journal of Political Economy 81: 637–654.
Breeden, D. and Litzenberger, R. H. (1978). Prices of state-contingent claims
    implicit in option prices, Journal of Business 51: 621–651.
Debreu, G. (1959). Theory of Value, John Wiley and Sons, New York.
Derman, E. and Kani, I. (1994). Riding on the smile, Risk 7: 32–39.
Fan, J. and Gijbels, I. (1996). Local Polynomial Modelling and Its Apllications,
     Chapman and Hall, New York. Vol. 66 of Monographs on Statistics and
     Applied Probability.
Hafner, R. and Wallmeier, M. (2001). The dynamics of DAX implied volatili-
    ties, Quarterly International Journal of Finance 1: 1–27.
Härdle, W. (1990). Applied Nonparametric Regression, Cambridge University
     Press, New York.

Härdle, W., Hlávka, Z. and Klinke, S. (2000). XploRe Application Guide,
     Springer-Verlag, Berlin.
Hutchinson, J., Lo, A. and Poggio, A. (1994). A nonparametric approach to the
    pricing and hedging of derivative securities via learning networks, Journal
    of Finance 49: 851–889.
Lucas, R. E. (1978). Asset prices in an exchange economy, Econometrica
    46(1429-1446).
Melick, W. and Thomas, C. (1997). Recovering an Asset’s Implied PDF from
    Option Prices: An application to Crude Oil During the Gulf Crisis, Jour-
    nal of Financial and Quantitative Analysis 32: 91–115.
Merton, R. B. (1973). Rational theory of option pricing, Bell Journal of Eco-
    nomics and Management Science 4: 141–183.
Rookley, C. (1997). Fully exploiting the information content of intra-day option
    quotes: Applications in option pricing and risk management. mimeo.
Rubinstein, M. (1976). The valuation of uncertain income streams and the
    pricing of options, Bell Journal of Economics 7(407-425).
196      8   Estimating State-Price Densities with Nonparametric Regression


Rubinstein, M. (1985). Nonparametric tests of alternative option pricing mod-
    els using all reported trades and quotes on the 30 most active cboe op-
    tion classes from august 23, 1976 to august 31, 1978, Journal of Finance
    40: 455–480.
Rubinstein, M. (1994). Implied binomial trees, Journal of Finance 49: 771–818.
Ruppert, D. (1997). Empirical-bias bandwidths for local polynomial nonpara-
   metric regression and density estimation, Journal of the American Statis-
   tical Association 92: 1049–1062.
Ruppert, D., Wand, M. P., Holst, U. and Hössler, O. (1997). Local polynomial
   variance-function estimation, Technometrics 39: 262–273.
Yatchew, A. and Härdle, W. (2002). Dynamic nonparametric state price density
    estimation using constrained least squares and the bootstrap. Journal of
    Econometrics, forthcoming.
9 Trading on Deviations of Implied
  and Historical Densities
                                      Oliver Jim Blaskowitz and Peter Schmidt




9.1     Introduction
In recent years a number of methods have been developed to infer implied
state price densities (SPD) from cross sectional option prices, Chapter 7 and
8. Instead of comparing this density to a historical density extracted from the
observed time series of the underlying asset prices, i.e. a risk neutral density to
an actual density, Ait–Sahalia, Wang and Yared (2000) propose to compare two
risk neutral densities, one obtained from cross sectional S&P 500 option data
and the other from the S&P 500 index time series. Furthermore, they propose
trading strategies designed to exploit differences in skewness and kurtosis of
both densities. The goal of this article is to apply the procedure to the german
DAX index. While the option implied SPD is estimated by means of the Barle
and Cakici, Barle and Cakici (1998), implied binomial tree version, the time
series density is inferred from the time series of the DAX index by applying a
method used by Ait–Sahalia, Wang and Yared (2000). Based on the comparison
of both SPDs the performance of skewness and kurtosis trades is investigated.
We use options data included in MD*BASE. This is a database located at
CASE (Center for Applied Statistics and Economics) of Humboldt–Universität
zu Berlin. The time period is limited to data of the period between 01/01/97
and 12/31/99 for which MD*BASE contains daily closing prices of the DAX
index, EUREX DAX option settlement prices and annual interest rates which
are adjusted to the time to maturity of the above mentioned EUREX DAX
options.
While Section 9.2 applies the Barle and Cakici implied binomial tree algorithm
198              9   Trading on Deviations of Implied and Historical Densities


which estimates the option implied SPD using a two week cross section of DAX
index options, Section 9.3 explains and applies the method to estimate DAX
time series SPD from 3 months of historical index prices. Following, in Section
9.4 we compare the conditional skewness and kurtosis of both densities. Section
9.5 and 9.6 complete the chapter with the investigation of 4 trading strategies
and Section 9.7 completes with some critical remarks.


9.2     Estimation of the Option Implied SPD
Barle–Cakici’s modification of Derman–Kani’s Implied Binomial Tree (IBT)
yields a proxy for the option implied SPD, f ∗ , see Chapter 7. XploRe provides
quantlets computing Derman–Kani’s and Barle–Cakici’s IBT’s. Since the latter
proved to be slightly more robust than the former, Jackwerth (1999), we decide
to use Barle–Cakici’s IBT to compute the option implied SPD. In the following
subsection, we follow closely the notation used in Chapter 7. That is, N denotes
the number of evenly spaced time steps of length ∆t in which the tree is divided
into (so we have N + 1 levels). Fn,i = er∆t sn,i is the forward price of the
underlying, sn,i , at node i at, level n. Each level n corresponds to time tn =
n∆t.


9.2.1    Application to DAX Data

Using the DAX index data from MD*BASE, we estimate the 3 month option
implied IBT SPD f ∗ by means of the XploRe quantlets IBTbc and volsurf and
a two week cross section of DAX index option prices for 30 periods beginning
in April 1997 and ending in September 1999. We measure time to maturity
(TTM) in days and annualize it using the factor 360, giving the annualized
time to maturity τ = TTM/360. For each period, we assume a flat yield curve.
We extract from MD*BASE the maturity consistent interest rate.
We describe the procedure in more detail for the first period. First of all, we
estimate the implied volatility surface given the two week cross section of DAX
option data and utilizing the XploRe quantlet volsurf which computes the 3
dimensional implied volatility surface (implied volatility over time to maturity
and moneyness) using a kernel smoothing procedure. Friday, April 18, 1997
is the 3rd Friday of April 1997. On Monday, April 21, 1997, we estimate the
volatility surface, using two weeks of option data from Monday, April 7, 1997,
to Friday, April 18, 1997. Following, we start the IBT computation using the
9.2    Estimation of the Option Implied SPD                                          199


DAX price of this Monday, April 21, 1997. The volatility surface is estimated
for the moneyness interval [0.8, 1.2] and the time to maturity interval [0.0, 1.0].
Following, the XploRe quantlet IBTbc takes the volatility surface as input and
computes the IBT using Barle and Cakici’s method. Note that the observed
smile enters the IBT via the analytical Black–Scholes pricing formula for a call
C(Fn,i , tn+1 ) and for a put P (Fn,i , tn+1 ) which are functions of St1 = s1,1 ,
K = Fn,i , r, tn+1 and σimpl (Fn,i , tn+1 ). We note, it may happen that at the
edge of the tree option prices, with associated strike prices Fn,i and node prices
sn+1,i+1 , have to be computed for which the moneyness ratio sn+1,i+1 /Fn,i is
outside the intverall [0.8, 1.2] on which the volatility surface has been estimated.
In these cases, we use the volatility at the edge of the surface. Note, as well,
that the mean of the IBT SPD is equal to the futures price by construction of
the IBT.
Finally, we transform the SPD over sN +1,i into a SPD over log–returns uN +1,i =
ln(sN +1,i /s1,1 ) as follows:
                                                                             
                                  sN +1,i          x
      P(sN +1,i = x)   =   P ln    s1,1     = ln   s1,1        =   P uN +1,i = u

where u = ln(x/s1,1 ). That is, sN +1,i has the same probability as uN +1,i . See
Figure 9.1 for the SPD computed with parameters N = 10 time steps and
interest rate r = 3.23.
A crucial aspect using binomial trees is the choice of the number of time steps
N in which the time interval [t, T ] is divided. In general one can state, the more
time steps are used the better is the discrete approximation of the continuous
diffusion process and of the SPD. Unfortunately, the bigger N , the more node
prices sn,i possibly have to be overridden in the IBT framework. Thereby we are
effectively losing the information about the smile at the corresponding nodes.
Therefore, we computed IBT’s for different numbers of time steps. We found
no hint for convergence of the variables of interest, skewness and kurtosis. Since
both variables seemed to fluctuate around a mean, we compute IBT’s with time
steps 10, 20, . . . , 100 and consider the average of these ten values for skewness
and kurtosis as the option implied SPD skewness and kurtosis.
Applying this procedure for all 30 periods, beginning in April 1997 and ending
in September 1999, we calculate the time series of skewness and kurtosis of the
3 month implied SPD f ∗ shown in Figures 9.3 and 9.4. We see that the implied
SPD is clearly negatively skewed for all periods but one. In September 1999 it
is slightly positively skewed. The pattern is similar for the kurtosis of f ∗ which
is leptokurtic in all but one period. In October 1998 the density is platykurtic.
200                        9   Trading on Deviations of Implied and Historical Densities


                                                IBT SPD



          0.2
          0.15
  SPD

          0.1
          0.05
          0




                    -0.3           -0.2      -0.1               0   0.1    0.2
                                                    LogReturn
        Figure 9.1. Option implied SPD estimated on April 21, 1997, by an
        IBT with N = 10 time steps, S0 = 3328.41, r = 3.23 and τ = 88/360.



9.3              Estimation of the Historical SPD
While the previous section was dedicated to finding a proxy for f ∗ used by
investors to price options, this section approximates the historical underlyings’
density g ∗ for date t = T using all the information available at date t = 0. Of
course, if the process governing the underlying asset dynamics were common
knowledge and if agents had perfect foresight, then by no arbitrage arguments
both SPDs should be equal. Following Ait–Sahalia, Wang and Yared (2000),
the density extracted from the observed underlyings’ data is not comparable to
the density implied by observed option data without assumptions on investor’s
preferences. As in Härdle and Tsybakov (1995), they apply an estimation
method which uses the observed asset prices to infer indirectly the time series
SPD. First, we will explain the estimation method for the underlyings’ SPD.
Second, we apply it to DAX data.
9.3   Estimation of the Historical SPD                                           201


9.3.1     The Estimation Method

Assuming the underlying S to follow an Îto diffusion process driven by a Brow-
nian motion W :

                           dSt   = µ(St )dt + σ(St )dWt .                       (9.1)

Ait–Sahalia, Wang and Yared (2000) rely on Girsanov’s characterization of the
change of measure from the actual density to the SPD. It says the diffusion
function of the asset’s dynamics is identical under both the risk neutral and
the actual measure and only the drift function needs to be adjusted, leading to
the risk neutral asset dynamics:

                    dSt∗    =    (rt,τ − δt,τ )St∗ dt + σ(St∗ )dWt∗ .           (9.2)

Let gt (St , ST , τ, rt,τ , δt,τ ) denote the conditional density of ST given St gen-
erated by the dynamics defined in equation (9.1) and gt∗ (St , ST , τ, rt,τ , δt,τ )
denote the conditional density generated by equation (9.2) then f ∗ can only be
compared to the risk neutral density g ∗ and not to g.
A crucial feature of this method is that the diffusion functions are identical
under both the actual and the risk neutral dynamics (which follows from Gir-
sanov’s theorem). Therefore, it is not necessary to observe the risk neutral path
of the DAX index {St∗ }. The function σ(•) is estimated using N ∗ observed
index values {St } and applying Florens–Zmirou’s (1993) (FZ) nonparametric
version of the minimum contrast estimators:
                        PN ∗ −1
                          i=1    KF Z ( ShiF−S
                                             Z
                                               )N ∗ {S(i+1)/N ∗ − Si/N ∗ }2
          σ̂F Z (S) =                 PN ∗            Si −S
                                                                            , (9.3)
                                           i=1 KF Z ( hF Z )

where KF Z (•) is a kernel function and hF Z is a bandwidth parameter such
that:

             (N ∗ hF Z )−1 ln(N ∗ )   →     0    and     N ∗ h4F Z      →   0

as N ∗ → ∞. Without imposing restrictions on the drift function σ̂F Z is an
unbiased estimator of σ in the model specified in equation (9.2). Since the DAX
index is a performance index (δt,τ = 0), the risk neutral drift rate of equation
(9.2) is equal to rt,τ .
Once σ(•) is estimated, the time series SPD g ∗ can be computed by Monte
Carlo integration. Applying the Milstein scheme (Kloeden, Platen and Schurz
202              9    Trading on Deviations of Implied and Historical Densities


(1994)), we simulate M = 10, 000 paths of the diffusion process:
                          dSt∗    = rt,τ St∗ dt + σ̂F Z (St∗ )dWt∗                      (9.4)
for a time period of 3 months, starting value St=0 equal to the DAX index value
at the beginning of the period, collect the endpoints at T of these simulated
paths {ST,m : m = 1, . . . , M } and annualize the index log–returns. Then
g ∗ is obtained by means of a nonparametric kernel density estimation of the
continuously compounded log–returns u:
                                              M       u − u
                                        1    X          m
                     pˆt ∗ (u) =                 KM C                                   (9.5)
                                      M hM C m=1        hM C

where um is the log–return at the end of the mth path and KM C (•) is a kernel
function and hM C is a bandwidth parameter. The equation:
                                                             R log(S/St )
         P(ST ≤ S)        =       P(u ≤ log(S/St ))    =      −∞
                                                                            p∗t (u)du

with u = ln(ST /St ) relates this density estimator to the SPD g ∗ :

                                                           p∗
                                                            t (log(S/St ))
                gt∗ (S)       =      ∂
                                    ∂S P(ST ≤ S)      =           S        .
                                                              √
This method results in a nonparametric estimator ĝ ∗ which is N ∗ –consistent
as M → ∞ even though σ̂F Z converges at a slower rate (Ait–Sahalia, Wang
and Yared (2000)).
In the absence of arbitrage, the futures price is the expected future value of the
spot price under the risk neutral measure. Therefore the time series distribu-
tion is translated such that its mean matches the implied future price. Then the
bandwidth hM C is chosen to best match the variance of the IBT implied distri-
bution. In order to avoid over– or undersmoothing of g ∗ , hM C is constrained
to be within 0.5 to 5 times the optimal bandwidth implied by Silverman’s rule
of thumb. This procedure allows us to focus the density comparison on the
skewness and kurtosis of the two densities.


9.3.2    Application to DAX Data

Using the DAX index data from MD*BASE we estimate the diffusion function
σ 2 (•) from equation (9.2) by means of past index prices and simulate (forward)
M = 10, 000 paths to obtain the time series density, g ∗ .
9.3          Estimation of the Historical SPD                                            203


                                           Time Series Density
              3
              2
  Density

              1




                  -0.3        -0.2      -0.1         0           0.1    0.2        0.3
                                                 LogReturns
            Figure 9.2. Mean and variance adjusted estimated time series density
            on Friday, April 18, 1997. Simulated with M = 10, 000 paths, S0 =
            3328.41, r = 3.23 and τ = 88/360.



To be more precise, we explain the methodology for the first period in more
detail. First, note that Friday, April 18, 1997, is the 3rd Friday of April 1997.
Thus, on Monday, April 21, 1997, we use 3 months of DAX index prices from
Monday, January 20, 1997, to Friday, April 18, 1997, to estimate σ 2 . Following,
on the same Monday, we start the 3 months ‘forward’ Monte Carlo simulation.
The bandwidth hF Z is determined by Cross Validation applying the XploRe
quantlet regxbwcrit which determines the optimal bandwidth from a range
of bandwidths by using the resubstitution estimator with the penalty function
’Generalized Cross Validation’.
Knowing the diffusion function it is now possible to Monte Carlo simulate the
index evolution. The Milstein scheme applied to equation (9.2) is given by:
             Si/N ∗∗     = S(i−1)/N ∗∗ + rS(i−1)/N ∗∗ ∆t + σ(S(i−1)/N ∗∗ )∆Wi/N ∗∗ +
                           1                ∂σ                                    
                             σ(S(i−1)/N ∗∗ ) (S(i−1)/N ∗∗ ) (∆W(i−1)/N ∗∗ )2 − ∆t ,
                           2                ∂S
where we set the drift equal to r which is extracted from MD*BASE and
corresponds to the time to maturity used in the simulation and N ∗∗ is the
204              9   Trading on Deviations of Implied and Historical Densities


number of days to maturity. The first derivative of σ(. ) is approximated by:

          ∂σ                      σ(S(i−1)/N ∗∗ ) − σ(S(i−1)/N ∗∗ − ∆S)
             (S(i−1)/N ∗∗ )   =                                         ,
          ∂S                                        ∆S
where ∆S is 1/2 of the width of the bingrid on which the diffusion function is
estimated. Finally the estimated diffusion function is linearly extrapolated at
both ends of the bingrid to accommodate potential outliers.
With these ingredients we start the simulation with index value S0 = 3328.41
(Monday, April 21, 1997) and time to maturity τ = 88/360 and r = 3.23. The
expiration date is Friday, July 18, 1997. From these simulated index values
we calculate annualized log–returns which we take as input of the nonpara-
metric density estimation (see equation (9.5)). The XploRe quantlet denxest
accomplishes the estimation of the time series density by means of the Gaussian
kernel function:
                                      1        1 
                        K(u) = √ exp − u2 .
                                      2π          2
The bandwidth hM C is computed by the XploRe quantlet denrot which applies
Silverman’s rule of thumb.
First of all, we calculate the optimum bandwidth hM C given the vector of
10, 000 simulated index values. Then we search the bandwidth h’M C which
implies a variance of g ∗ to be closest to the variance of f ∗ (but to be still
within 0.5 to 5 times hM C ). We stop the search if var(g ∗ ) is within a range
of 5% of var(f ∗ ). Following, we translate g ∗ such that its mean matches the
futures price F. Finally, we transform this density over DAX index values ST
into a density g ∗ ’ over log–returns uT . Since
                                                         
                                     ST              x
                                          
          P(ST < x)      =    P ln   St       < ln   St        =   P(uT < u)

where x = St eu , we have


                P(ST ∈ [x, x + ∆x])       = P(uT ∈ [u, u + ∆u])

and

                      P(ST ∈ [x, x + ∆x]) ≈ g ∗ (x)∆x
                      P(uT ∈ [u, u + ∆u]) ≈ g ∗ ’(u)∆u.
9.4   Comparison of Implied and Historical SPD                                  205


Therefore, we have as well (see Härdle and Simar (2002) for density transfor-
mation techniques)

                              g ∗ (St eu )∆(St eu )
               g ∗ ’(u)   ≈            ∆u             ≈   g ∗ (St eu )St eu .

To simplify notations, we will denote both densities g ∗ . Figure 9.2 displays the
resulting time series density over log–returns on Friday, April 18, 1997. Pro-
ceeding in the same way for all 30 periods beginning in April 1997 and ending
in September 1999, we obtain the time series of the 3 month ‘forward’ skewness
and kurtosis values of g ∗ shown in Figures 9.3 and 9.4. The figures reveal that
the time series distribution is systematically slightly negatively skewed. Skew-
ness is very close to zero. As far as kurtosis is concerned we can extract from
Figure 9.4 that it is systematically smaller than but nevertheless very close to
3. Additionally, all time series density plots looked like the one shown in Figure
9.2.


9.4     Comparison of Implied and Historical SPD
At this point it is time to compare implied and historical SPDs. Since by
construction, expectation and variance are adjusted, we focus the comparison
on skewness and kurtosis. Starting with skewness, we can extract from Figure
9.3 that except for one period the IBT implied SPD is systematically more
negatively skewed than the time series SPD, a fact that is quite similar to what
Ait–Sahalia, Wang and Yared (2000) already found for the S&P 500. The 3
month IBT implied SPD for Friday, September 17, 1999 is slightly positively
skewed. It may be due to the fact that in the months preceeding June 1999,
the month in which the 3 month implied SPD was estimated, the DAX index
stayed within a quite narrow horizontal range of index values after a substantial
downturn in the 3rd quarter of 1998 (see Figure 9.11) and agents therefore
possibly believed index prices lower than the average would be more realistic
to appear. However, this is the only case where skew(f ∗ )>skew(g ∗ ).
206                     9   Trading on Deviations of Implied and Historical Densities


                            Skewness Comparison: TS=thin; IBT=thick
             07/18/97           04/17/98             03/19/99         12/17/99
      0.0                                                                        Time



      -0.5



      -1.0



      -1.5

      Skewness


         Figure 9.3. Comparison of Skewness time series for 30 periods.


                            Kurtosis Comparison: TS=thin; IBT=thick
       Kurtosis

      6.0



      4.0



      2.0



      0.0                                                                        Time
             07/18/97           04/17/98             03/19/99         12/17/99


         Figure 9.4. Comparison of Kurtosis time series for 30 periods.
9.5   Skewness Trades                                                        207


The kurtosis time series reveals a similar pattern as the skewness time series.
The IBT SPD has except for one period systematically more kurtosis than the
time series SPD. Again this feature is in line with what Ait–Sahalia, Wang
and Yared (2000) found for the S&P 500. The 3 month IBT implied SPD for
Friday, October 16, 1998 has a slightly smaller kurtosis than the time series
SPD. That is, investors assigned less probability mass to high and low index
prices. Note that the implied SPD was estimated in July 1998 after a period
of 8 months of booming asset prices (see Figure 9.11). It is comprehensible
in such an environment that high index prices seemed less realistic to appear.
Since the appearance of low index prices seemed to be unrealistic as well, agents
obviously expected the DAX move rather sideways.


9.5     Skewness Trades
In the previous section we learned that the implied and the time series SPD’s
reveal differences in skewness and kurtosis. In the following two sections, we
investigate how to profit from this knowledge. In general, we are interested in
what option to buy or to sell at the day at which both densities were estimated.
We consider exclusively European call or put options.
According to Ait–Sahalia, Wang and Yared (2000), all strategies are designed
such that we do not change the resulting portfolio until maturity, i.e. we keep
all options until they expire. We use the following terms for moneyness which
we define as K/(St e(T −t)r ):

                            Moneyness(FOTM Put)         <   0.90
               0.90     ≤   Moneyness(NOTM Put)         <   0.95
               0.95     ≤    Moneyness(ATM Put)         <   1.00
               1.00     ≤   Moneyness(ATM Call)         <   1.05
               1.05     ≤   Moneyness(NOTM Call)        <   1.10
               1.10     ≤   Moneyness(FOTM Call)

                 Table 9.1. Definitions of moneyness regions.

where FOTM, NOTM, ATM stand for far out–of–the–money, near out–of–the–
money and at–the–money respectively.
A skewness trading strategy is supposed to exploit differences in skewness of
two distributions by buying options in the range of strike prices where they
208               9   Trading on Deviations of Implied and Historical Densities


are underpriced and selling options in the range of strike prices where they
are overpriced. More specifically, if the implied SPD f ∗ is less skewed (for
example more negatively skewed) than the time series SPD g ∗ , i.e. skew(f ∗ ) <
skew(g ∗ ), we sell the whole range of strikes of OTM puts and buy the whole
range of strikes of OTM calls (S1 trade). Conversely, if the implied SPD is
more skewed, i.e. skew(f ∗ ) > skew(g ∗ ), we initiate the S2 trade by buying the
whole range of strikes of OTM puts and selling the whole range of strikes of
OTM calls. In both cases we keep the options until expiration.
Skewness s is a measure of asymmetry of a probability distribution. While for a
distribution symmetric around its mean s = 0, for an asymmetric distribution
s > 0 indicates more weight to the left of the mean. Recalling from option
pricing theory the pricing equation for a European call option, Franke, Härdle
and Hafner (2001):
                                        Z ∞
       C(St , K, r, T − t) = e−r(T −t)      max(ST − K, 0)f ∗ (ST )dST , (9.6)
                                           0

where f ∗ is the implied SPD, we see that when the two SPD’s are such that
skew(f ∗ ) < skew(g ∗ ), agents apparently assign a lower probability to high
outcomes of the underlying than would be justified by the time series density,
see Figure 7.13. Since for call options only the right ‘tail’ of the support
determines the theoretical price, the latter is smaller than the price implied by
equation (9.6) using the time series density. That is, we buy underpriced calls.
The same reasoning applies to European put options. Looking at the pricing
equation for such an option:
                                         Z ∞
       P (St , K, r, T − t) = e−r(T −t)       max(K − ST , 0)f ∗ (ST )dST , (9.7)
                                           0

we conclude that prices implied by this pricing equation using f ∗ are higher
than the prices using the time series density. That is, we sell puts.
Since we hold all options until expiration and due to the fact that options for
all strikes are not always available in markets we are going to investigate the
payoff profile at expiration of this strategy for two compositions of the portfolio.
To get an idea about the exposure at maturity let us begin with a simplified
portfolio consisting of one short position in a put option with moneyness of
0.95 and one long position in a call option with moneyness of 1.05. To further
simplify, we assume that the future price F is equal to 100 EUR. Thus, the
portfolio has a payoff which is increasing in ST , the price of the underlying at
maturity. For ST < 95 EUR the payoff is negative and for ST > 105 EUR it is
positive.
9.5    Skewness Trades                                                         209


However, in the application we encounter portfolios containing several
long/short calls/puts with increasing/decreasing strikes as indicated in Table
9.2.

                              Payoff of S1 Trade : OTM
        50
        0
        -50




              85    90        95         100        105     110       115
                                      Underlying
      Figure 9.5. S1 trade payoff at maturity of portfolio detailed in Table
      9.2.


Figure 9.5 shows the payoff of a portfolio of 10 short puts with strikes ranging
from 86 EUR to 95 EUR and of 10 long calls striking at 105 EUR to 114 EUR,
the future price is still assumed to be 100 EUR. The payoff is still increasing
in ST but it is concave in the left tail and convex in the right tail. This is due
to the fact that our portfolio contains, for example, at ST = 106 EUR two call
options which are in the money instead of only one compared to the portfolio
considered above. These options generate a payoff which is twice as much. At
ST = 107 EUR the payoff is influenced by three ITM calls procuring a payoff
which is three times higher as in the situation before etc. In a similar way we
can explain the slower increase in the left tail. Just to sum up, we can state
that this trading rule has a favorable payoff profile in a bull market where the
underlying is increasing. But in bear markets it possibly generates negative
cash flows. Buying (selling) two or more calls (puts) at the same strike would
change the payoff profile in a similar way leading to a faster increase (slower
decrease) with every call (put) bought (sold).
The S2 strategy payoff behaves in the opposite way. The same reasoning can
be applied to explain its payoff profile. In contradiction to the S1 trade the S2
trade is favorable in a falling market.
210              9    Trading on Deviations of Implied and Historical Densities


                                      S1         OTM–S1
                                   Moneyness     Moneyness

                      short put       0.95      0.86 − 0.95
                       long call      1.05      1.05 − 1.14

                     Table 9.2. Portfolios of skewness trades.

9.5.1    Performance

Given the skewness values for the implied SPD and the time series SPD we
now have a look on the performance of the skewness trades. Performance is
measured in net EUR cash flows which is the sum of the cash flows generated
at initiation in t = 0 and at expiration in t = T . We ignore any interest rate
between these two dates. Using EUREX settlement prices of 3 month DAX put
and calls we initiated the S1 strategy at the Monday immediately following the
3rd Friday of each month, beginning in April 1997 and ending in September
1999. January, February, March 1997 drop out due to the time series density
estimation for the 3rd Friday of April 1997. October, November and December
1999 drop out since we look 3 months forward. The cash flow at initiation stems
from the inflow generated by the written options and the outflow generated by
the bought options and hypothetical 5% transaction costs on prices of bought
and sold options. Since all options are kept in the portfolio until maturity (time
to expiration is approximately 3 months, more precisely τ = TTM/360) the
cash flow in t = T is composed of the sum of the inner values of the options in
the portfolio.
Figure 9.6 shows the EUR cash flows at initiation, at expiration and the re-
sulting net cash flow for each portfolio. The sum of all cash flows, the total net
cash flow, is strongly positive (9855.50 EUR). Note that the net cash flow (blue
bar) is always positive except for the portfolios initiated in June 1998 and in
September 1998 where we incur heavy losses compared to the gains in the other
periods. In other words, this strategy would have procured 28 times moder-
ate gains and two times large negative cash flows. As Figure 9.5 suggests this
strategy is exposed to a directional risk, a feature that appears in December
1997 and June 1998 where large payoffs at expiration (positive and negative)
occur. Indeed, the period of November and December 1997 was a turning point
of the DAX and the beginning of an 8 month bull market, explaining the large
payoff in March 1998 of the portfolio initiated in December 1997. The same
9.5    Skewness Trades                                                              211


                                      Performance S1
 CashFlow in EUR

      5000


      2500

         0                                                                  Time


  -2500


  -5000

             07/97 10/97 01/98 04/98 07/98 10/98 01/99 04/99 07/99 10/99

      Figure 9.6. Performance of S1 trade with 5% transaction costs. The
      first (red), second (magenta) and the third bar (blue) show for each
      period the cash flow in t = 0, in t = T and the net cash flow respectively.
      Cash flows are measured in EUR. XFGSpdTradeSkew.xpl



arguing explains the large negative payoff of the portfolio set up in June 1998
expiring in September 1998 (refer to Figure 9.11). Another point to note is
that there is a zero cash flow at expiration in 24 periods. Periods with a zero
cash flow at initiation and at expiration are due to the fact that there was not
set up any portfolio (there was no OTM option in the database).
Since there is only one period (June 1999), when the implied SPD is more
skewed than the time series SPD a comparison of the S1 trade with knowledge
of the latter SPD’s and without this knowledge is not useful. A comparison
of the skewness measures would have filtered out exactly one positive net cash
flow, more precisely the cash flow generated by a portfolio set up in June
1999. But to what extend this may be significant is uncertain. For the same
reason the S2 trade has no great informational content. Applied to real data
it would have procured a negative total net cash flow. Actually, only in June
1999 a portfolio would have been set up. While the S1 trade performance was
independent of the knowledge of the implied and the time series SPD’s the
S2 trade performance changed significantly as it was applied in each period
212              9   Trading on Deviations of Implied and Historical Densities


(without knowing both SPD’s). The cash flow profile seemed to be the inverse
of Figure 9.6 indicating that should there be an options mispricing it would
probably be in the sense that the implied SPD is more negatively skewed than
the time series SPD.


9.6     Kurtosis Trades
A kurtosis trading strategy is supposed to exploit differences in kurtosis of two
distributions by buying options in the range of strike prices where they are
underpriced and selling options in the range of strike prices where they are
overpriced. More specifically, if the implied SPD f ∗ has more kurtosis than
the time series SPD g ∗ , i.e. kurt(f ∗ ) > kurt(g ∗ ), we sell the whole range of
strikes of FOTM puts, buy the whole range of strikes of NOTM puts, sell the
whole range of strikes of ATM puts and calls, buy the whole range of strikes
of NOTM calls and sell the whole range of strikes of FOTM calls (K1 trade).
Conversely, if the implied SPD has less kurtosis than the time series density g ∗ ,
i.e. kurt(f ∗ ) < kurt(g ∗ ), we initiate the K2 trade by buying the whole range of
strikes of FOTM puts, selling the whole range of strikes of NOTM puts, buying
the whole range of strikes of ATM puts and calls, selling the whole range of
strikes of NOTM calls and buying the whole range of strikes of FOTM calls.
In both cases we keep the options until expiration.
Kurtosis κ measures the fatness of the tails of a distribution. For a normal
distribution we have κ = 3. A distribution with κ > 3 is said to be leptokurtic
and has fatter tails than the normal distribution. In general, the bigger κ is,
the fatter the tails are. Again we consider the option pricing formulae (9.6)
and (9.7) and reason as above using the probability mass to determine the
moneyness regions where we buy or sell options. Look at Figure 7.14 for a
situation in which the implied density has more kurtosis than the time series
density triggering a K1 trade.
To form an idea of the K1 strategy’s exposure at maturity we start once again
with a simplified portfolio containing two short puts with moneyness 0.90 and
1.00, one long put with moneyness 1.00, two short calls with moneyness 1.00
and 1.10 and one long call with moneyness 1.05. Figure 9.7 reveals that this
portfolio inevitably leads to a negative payoff at maturity regardless the move-
ment of the underlying.
Should we be able to buy the whole range of strikes as the K1 trading rule
suggests, the portfolio is given in Table 9.3, FOTM–NOTM–ATM–K1, we get
9.6    Kurtosis Trades                                                           213


                                    Payoff of K1 Trade
        0
        -5
        -10




              85    90         95           100          105   110        115
                                         Underlying
      Figure 9.7. Kurtosis trade 1 payoff at maturity of portfolio detailed in
      Table 9.3.


a payoff profile (Figure 9.8) which is quite similar to the one from Figure 9.7.
In fact, the payoff function looks like the ‘smooth’ version of Figure 9.7.

                         Payoff of K1 Trade : FOTM-NOTM-ATM
        0
        -10
        -20
        -30
        -40




              85    90         95           100          105   110        115
                                         Underlying
      Figure 9.8. K1 trade payoff at maturity of portfolio detailed in Table
      9.3.


Changing the number of long puts and calls in the NOTM regions can produce
a positive payoff. Setting up the portfolio given in Table 9.3, NOTM–K1,
results in a payoff function shown in Figure 9.9. It is quite intuitive that the
more long positions the portfolio contains the more positive the payoff will be.
Conversely, if we added to that portfolio FOTM short puts and calls the payoff
would decrease in the FOTM regions.
As a conclusion we can state that the payoff function can have quite different
shapes depending heavily on the specific options in the portfolio. If it is possible
to implement the K1 trading rule as proposed the payoff is negative. But it may
214                  9        Trading on Deviations of Implied and Historical Densities


                                      Payoff of K1 Trade : NOTM




        20
        15
        10
        5
        0
        -5




             85          90           95         100        105       110       115
                                              Underlying
      Figure 9.9. K1 trade payoff at maturity of portfolio detailed in Table
      9.3.


happen that the payoff function is positive in case that more NOTM options
(long positions) are available than FOTM or ATM (short positions) options.

                            K1             FOTM–NOTM–ATM–K1             NOTM–K1
                         Moneyness             Moneyness                Moneyness

        short put              0.90               0.86 − 0.90              0.90
         long put              0.95               0.91 − 0.95           0.91 − 0.95
        short put              1.00               0.96 − 1.00              1.00
        short call             1.00               1.00 − 1.04              1.00
         long call             1.05               1.05 − 1.09           1.05 − 1.09
        short call             1.10               1.10 − 1.14              1.10

                          Table 9.3. Portfolios of kurtosis trades.


9.6.1         Performance

To investigate the performance of the kurtosis trades, K1 and K2, we proceed in
the same way as for the skewness trade. The total net EUR cash flow of the K1
trade, applied when kurt(f ∗ ) > kurt(g ∗ ), is strongly positive (10, 915.77 EUR).
As the payoff profiles from figures 9.7 and 9.8 already suggested, all portfolios
generate negative cash flows at expiration (see magenta bar in Figure 9.10). In
contrast to that, the cash flow at initiation in t = 0 is always positive. Given
the positive total net cash flow, we can state that the K1 trade earns its profit in
t = 0. Looking at the DAX evolution shown in Figure 9.11, we understand why
9.6    Kurtosis Trades                                                              215


                                     Performance K1
 CashFlow in EUR
   5000


      2500


         0                                                                  Time


  -2500


  -5000
             07/97 10/97 01/98 04/98 07/98 10/98 01/99 04/99 07/99 10/99

      Figure 9.10. Performance of K1 trade with 5% transaction costs. The
      first (red), second (magenta) and the third bar (blue) show for each
      period the cash flow in t = 0, in t = T and the net cash flow respectively.
      Cash flows are measured in EUR. XFGSpdTradeKurt.xpl



the payoff of the portfolios set up in the months of April 1997, May 1997 and in
the months from November 1997 to June 1998 is relatively more negative than
for the portfolios of June 1997 to October 1997 and November 1998 to June
1999. The reason is that the DAX is moving up or down for the former months
and stays within an almost horizontal range of quotes for the latter months
(see the payoff profile depicted in Figure 9.8). In July 1998 no portfolio was
set up since kurt(f ∗ ) < kurt(g ∗ ).
What would have happened if we had implemented the K1 trade without know-
ing both SPD’s? Again, the answer to this question can only be indicated due
to the rare occurences of periods in which kurt(f ∗ ) < kurt(g ∗ ). Contrarily to
the S1 trade, the density comparison would have filtered out a strongly nega-
tive net cash flow that would have been generated by a portfolio set up in July
1998. But the significance of this feature is again uncertain.
About the K2 trade can only be said that without a SPD comparison it would
have procured heavy losses. The K2 trade applied as proposed can not be
216               9   Trading on Deviations of Implied and Historical Densities


evaluated completely since there was only one period in which kurt(f ∗ ) <
kurt(g ∗ ).

                                   DAX 1997-1999
            DAX
         7000
         6500
         6000
         5500
         5000
         4500
         4000
         3500
         3000                                                                Time
             1/974/97 7/97 10/97 1/98 4/98 7/98 10/98 1/99 4/99 7/99 10/99


      Figure 9.11. Evolution of DAX from January 1997 to December 1999




9.7      A Word of Caution
Interpreting the implied SPD as the SPD used by investors to price options, the
historical density as the ‘real’ underlyings’ SPD and assuming that no agent but
one know the underlyings’ SPD one should expect this agent to make higher
profits than all others due to its superior knowledge. That is why, exploiting
deviations of implied and historical density appears to be very promising at a
first glance. Of course, if all market agents knew the underlyings’ SPD, both
f ∗ would be equal to g ∗ . In view of the high net cash flows generated by both
skewness and kurtosis trades of type 1, it seems that not all agents are aware
of discrepancies in the third and fourth moment of both densities. However,
the strategies seem to be exposed to a substantial directional risk. Even if the
dataset contained bearish and bullish market phases, both trades have to be
tested on more extensive data. Considering the current political and economic
9.7   A Word of Caution                                                       217


developments, it is not clear how these trades will perform being exposed to
‘peso risks’. Given that profits stem from highly positive cash flows at portfolio
initiation, i.e. profits result from possibly mispriced options, who knows how
the pricing behavior of agents changes, how do agents assign probabilities to
future values of the underlying?
We measured performance in net EUR cash flows. This approach does not
take risk into account as, for example the Sharpe ratio which is a measure of
the risk adjusted return of an investment. But to compute a return an initial
investment has to be done. However, in the simulation above, some portfolios
generated positive payoffs both at initiation and at maturity. It is a challenge
for future research to find a way how to adjust for risk in such situations.
The SPD comparison yielded the same result for each period but one. The
implied SPD f ∗ was in all but one period more negatively skewed than the time
series SPD g ∗ . While g ∗ was in all periods platykurtic, f ∗ was in all but one
period leptokurtic. In this period the kurtosis of g ∗ was slightly greater than
that of f ∗ . Therefore, there was no alternating use of type 1 and type 2 trades.
But in more turbulent market environments such an approach might prove
useful. The procedure could be extended and fine tuned by applying a density
distance measure as in Ait–Sahalia, Wang and Yared (2000) to give a signal
when to set up a portfolio either of type 1 of type 2. Furthermore, it is tempting
to modify the time series density estimation method such that the monte carlo
paths be simulated drawing random numbers not from a normal distribution
but from the distribution of the residuals resulting from the nonparametric
estimation of σF Z (•), Härdle and Yatchew (2001).




Bibliography
Ait–Sahalia, Y., Wang, Y. and Yared, F. (2001). Do Option Markets correctly
    Price the Probabilities of Movement of the Underlying Asset?, Journal of
    Econometrics 102: 67–110.
Barle, S. and Cakici, N., (1998). How to Grow a Smiling Tree, The Journal of
     Financial Engineering 7: 127–146.
Black, F. and Scholes, M., (1998). The Pricing of Options and Corporate
    Liabilities, Journal of Political Economy 81: 637–659.
218             9   Trading on Deviations of Implied and Historical Densities


Blaskowitz, O. (2001). Trading on Deviations of Implied and Historical Density,
    Diploma Thesis, Humboldt–Universität zu Berlin.
Breeden, D. and Litzenberger, R., (1978). Prices of State Contingent Claims
    Implicit in Option Prices, Journal of Business, 9, 4: 621–651.
Cox, J., Ross, S. and Rubinstein, M. (1979). Option Pricing: A simplified
    Approach, Journal of Financial Economics 7: 229–263.
Derman, E. and Kani, I. (1994). The Volatility Smile and Its Implied Tree,
    http://www.gs.com/qs/
Dupire, B. (1994). Pricing with a Smile, Risk 7: 18–20.
Florens–Zmirou, D. (1993). On Estimating the Diffusion Coefficient from Dis-
     crete Observations, Journal of Applied Probability 30: 790–804.
Franke, J., Härdle, W. and Hafner, C. (2001). Einführung in die Statistik der
    Finanzmärkte, Springer Verlag, Heidelberg.
Härdle, W. and Simar, L. (2002). Applied Multivariate Statistical Analysis,
     Springer Verlag, Heidelberg.
Härdle, W. and Tsybakov, A., (1995). Local Polynomial Estimators of the
     Volatility Function in Nonparametric Autoregression, Sonderforschungs-
     bereich 373 Discussion Paper, Humboldt–Universität zu Berlin.
Härdle, W. and Yatchew, A. (2001). Dynamic Nonparametric State Price
     Density Estimation using Constrained Least Squares and the Bootstrap,
     Sonderforschungsbereich 373 Discussion Paper, Humboldt–Universität zu
     Berlin.
Härdle, W. and Zheng, J. (2001). How Precise Are Price Distributions Predicted
     by Implied Binomial Trees?, Sonderforschungsbereich 373 Discussion Pa-
     per, Humboldt–Universität zu Berlin.
Jackwerth, J.C. (1999). Option Implied Risk Neutral Distributions and Im-
    plied Binomial Trees: A Literatur Review, The Journal of Derivatives
    Winter: 66–82.
Kloeden, P., Platen, E. and Schurz, H. (1994). Numerical Solution of SDE
    Through Computer Experiments, Springer Verlag, Heidelberg.
Rubinstein, M. (1994). Implied Binomial Trees, Journal of Finance 49: 771–
    818.
   Part IV

Econometrics
10 Multivariate Volatility Models
                                    Matthias R. Fengler and Helmut Herwartz


Multivariate volatility models are widely used in Finance to capture both
volatility clustering and contemporaneous correlation of asset return vectors.
Here we focus on multivariate GARCH models. In this common model class
it is assumed that the covariance of the error distribution follows a time de-
pendent process conditional on information which is generated by the history
of the process. To provide a particular example, we consider a system of ex-
change rates of two currencies measured against the US Dollar (USD), namely
the Deutsche Mark (DEM) and the British Pound Sterling (GBP). For this
process we compare the dynamic properties of the bivariate model with uni-
variate GARCH specifications where cross sectional dependencies are ignored.
Moreover, we illustrate the scope of the bivariate model by ex-ante forecasts of
bivariate exchange rate densities.


10.1      Introduction
Volatility clustering, i.e. positive correlation of price variations observed on
speculative markets, motivated the introduction of autoregressive conditionally
heteroskedastic (ARCH) processes by Engle (1982) and its popular generaliza-
tions by Bollerslev (1986) (Generalized ARCH, GARCH) and Nelson (1991)
(exponential GARCH, EGARCH). Being univariate in nature, however, such
models neglect a further stylized fact of empirical price variations, namely con-
temporaneous cross correlation e.g. over a set of assets, stock market indices,
or exchange rates.
Cross section relationships are often implied by economic theory. Interest rate
parities, for instance, provide a close relation between domestic and foreign
bond rates. Assuming absence of arbitrage, the so-called triangular equation
formalizes the equality of an exchange rate between two currencies on the one
222                                               10   Multivariate Volatility Models


hand and an implied rate constructed via exchange rates measured towards a
third currency. Furthermore, stock prices of firms acting on the same market
often show similar patterns in the sequel of news that are important for the
entire market (Hafner and Herwartz, 1998). Similarly, analyzing global volatil-
ity transmission Engle, Ito and Lin (1990) and Hamao, Masulis and Ng (1990)
found evidence in favor of volatility spillovers between the world’s major trad-
ing areas occurring in the sequel of floor trading hours. From this point of view,
when modeling time varying volatilities, a multivariate model appears to be a
natural framework to take cross sectional information into account. Moreover,
the covariance between financial assets is of essential importance in finance.
Effectively, many problems in financial practice like portfolio optimization,
hedging strategies, or Value-at-Risk evaluation require multivariate volatility
measures (Bollerslev et al., 1988; Cecchetti, Cumby and Figlewski, 1988).


10.1.1      Model specifications

Let εt = (ε1t , ε2t , . . . , εN t )> denote an N -dimensional error process, which is
either directly observed or estimated from a multivariate regression model. The
process εt follows a multivariate GARCH process if it has the representation
                                            1/2
                                     εt = Σt ξt ,                                (10.1)

where Σt is measurable with respect to information generated up to time t − 1,
denoted by the filtration Ft−1 . By assumption the N components of ξt follow a
multivariate Gaussian distribution with mean zero and covariance matrix equal
to the identity matrix.
The conditional covariance matrix, Σt = E[εt ε>          t |Ft−1 ], has typical elements
σij with σii , i = 1, . . . , N, denoting conditional variances and off-diagonal ele-
ments σij , i, j = 1, . . . , N, i 6= j, denoting conditional covariances. To make the
specification in (10.1) feasible a parametric description relating Σt to Ft−1 is
necessary. In a multivariate setting, however, dependencies of the second order
moments in Σt on Ft−1 become easily computationally intractable for practical
purposes.
Let vech(A) denote the half-vectorization operator stacking the elements of a
quadratic (N × N )-matrix A from the main diagonal downwards in a 21 N (N +
1) dimensional column vector. Within the so-called vec-representation of the
10.1   Introduction                                                                   223


GARCH(p, q) model Σt is specified as follows:
                           q
                           X                              p
                                                          X
        vech(Σt ) = c +          Ãi vech(εt−i ε>
                                                t−i ) +         G̃i vech(Σt−i ).    (10.2)
                           i=1                            i=1

In (10.2) the matrices Ãi and G̃i each contain {N (N + 1)/2}2 elements. Deter-
ministic covariance components are collected in c, a column vector of dimension
N (N + 1)/2. We consider in the following the case p = q = 1 since in applied
work the GARCH(1,1) model has turned out to be particularly useful to de-
scribe a wide variety of financial market data (Bollerslev, Engle and Nelson,
1994).
On the one hand the vec–model in (10.2) allows for a very general dynamic
structure of the multivariate volatility process. On the other hand this specifi-
cation suffers from high dimensionality of the relevant parameter space, which
makes it almost intractable for empirical work. In addition, it might be cumber-
some in applied work to restrict the admissible parameter space such that the
implied matrices Σt , t = 1, . . . , T , are positive definite. These issues motivated
a considerable variety of competing multivariate GARCH specifications.
Prominent proposals reducing the dimensionality of (10.2) are the constant
correlation model (Bollerslev, 1990) and the diagonal model (Bollerslev et al.,
1988). Specifying diagonal elements of Σt both of these approaches assume the
absence of cross equation dynamics, i.e. the only dynamics are

                  σii,t = cii + ai ε2i,t−1 + gi σii,t−1 , i = 1, . . . , N.         (10.3)

To determine off-diagonal elements of Σt Bollerslev (1990) proposes a constant
contemporaneous correlation,
                                 √
                      σij,t = ρij σii σjj , i, j = 1, . . . , N,        (10.4)

whereas Bollerslev et al. (1988) introduce an ARMA-type dynamic structure
as in (10.3) for σij,t as well, i.e.

             σij,t = cij + aij εi,t−1 εj,t−1 + gij σij,t−1 , i, j = 1, . . . , N.   (10.5)

For the bivariate case (N = 2) with p = q = 1 the constant correlation model
contains only 7 parameters compared to 21 parameters encountered in the full
model (10.2). The diagonal model is specified with 9 parameters. The price
that both models pay for parsimonity is in ruling out cross equation dynamics as
allowed in the general vec-model. Positive definiteness of Σt is easily guaranteed
224                                                10     Multivariate Volatility Models


for the constant correlation model (|ρij | < 1), whereas the diagonal model
requires more complicated restrictions to provide positive definite covariance
matrices.
The so-called BEKK-model (named after Baba, Engle, Kraft and Kroner, 1990)
provides a richer dynamic structure compared to both restricted processes men-
tioned before. Defining N × N matrices Aik and Gik and an upper triangular
matrix C0 the BEKK–model reads in a general version as follows:
                         X q
                         K X                               p
                                                         K X
                                                         X
         Σt = C0> C0 +             A>        >
                                    ik εt−i εt−i Aik +             G>
                                                                    ik Σt−i Gik .   (10.6)
                         k=1 i=1                         k=1 i=1

If K = q = p = 1 and N = 2, the model in (10.6) contains 11 parameters and
implies the following dynamic model for typical elements of Σt :
 σ11,t    = c11 + a211 ε21,t−1 + 2a11 a21 ε1,t−1 ε2,t−1 + a221 ε22,t−1
                2                                   2
          +    g11 σ11,t−1 + 2g11 g21 σ21,t−1 + g21   σ22,t−1 ,
 σ21,t    =    c21 + a11 a22 ε1,t−1 + (a21 a12 + a11 a22 )ε1,t−1 ε2,t−1 + a21 a22 ε22,t−1
                                2

          +    g11 g22 σ11,t−1 + (g21 g12 + g11 g22 )σ12,t−1 + g21 g22 σ22,t−1 ,
 σ22,t    =    c22 + a212 ε21,t−1 + 2a12 a22 ε1,t−1 ε2,t−1 + a222 ε22,t−1
             2                                2
          + g12 σ11,t−1 + 2g12 g22 σ21,t−1 + g22 σ22,t−1 .
Compared to the diagonal model the BEKK–specification economizes on the
number of parameters by restricting the vec–model within and across equa-
tions. Since Aik and Gik are not required to be diagonal, the BEKK-model
is convenient to allow for cross dynamics of conditional covariances. The pa-
rameter K governs to which extent the general representation in (10.2) can be
approximated by a BEKK-type model. In the following we assume K = 1.
Note that in the bivariate case with K = p = q = 1 the BEKK-model contains
11 parameters. If K = 1 the matrices A11 and −A11 , imply the same condi-
tional covariances. Thus, for uniqueness of the BEKK-representation a11 > 0
and g11 > 0 is assumed. Note that the right hand side of (10.6) involves only
quadratic terms and, hence, given convenient initial conditions, Σt is positive
definite under the weak (sufficient) condition that at least one of the matrices
C0 or Gik has full rank (Engle and Kroner, 1995).


10.1.2        Estimation of the BEKK-model

As in the univariate case the parameters of a multivariate GARCH model are
estimated by maximum likelihood (ML) optimizing numerically the Gaussian
10.2   An empirical illustration                                             225


log-likelihood function.
With f denoting the multivariate normal density, the contribution of a single
observation, lt , to the log-likelihood of a sample is given as:

                 lt   =  ln{f (εt |Ft−1 )}
                           N              1        1
                     = − ln(2π) − ln(|Σt |) − ε>      Σ−1 εt .
                            2             2        2 t t
                                      PT
Maximizing the log-likelihood, l = t=1 lt , requires nonlinear maximization
methods. Involving only first order derivatives the algorithm introduced by
Berndt, Hall, Hall, and Hausman (1974) is easily implemented and particularly
useful for the estimation of multivariate GARCH processes.
If the actual error distribution differs from the multivariate normal, maximizing
the Gaussian log-likelihood has become popular as Quasi ML (QML) estima-
tion. In the multivariate framework, results for the asymptotic properties of
the (Q)ML-estimator have been derived recently. Jeantheau (1998) proves the
QML-estimator to be consistent under the main assumption that the consid-
ered multivariate process is strictly stationary and ergodic. Further assuming
finiteness of moments of εt up to order eight, Comte and Lieberman (2000)
derive asymptotic normality of the QML-estimator. The asymptotic distribu-
tion of the rescaled QML-estimator is analogous to the univariate case and
discussed in Bollerslev and Wooldridge (1992).


10.2      An empirical illustration

10.2.1     Data description

We analyze daily quotes of two European currencies measured against the USD,
namely the DEM and the GBP. The sample period is December 31, 1979 to
April 1, 1994, covering T = 3720 observations. Note that a subperiod of our
sample has already been investigated by Bollerslev and Engle (1993) discussing
common features of volatility processes.
The data is provided in fx. The first column contains DEM/USD and
the second GBP/USD. In XploRe a preliminary statistical analysis is easily
done by the summarize command. Before inspecting the summary statis-
tics, we load the data, Rt , and take log differences, εt = ln(Rt ) − ln(Rt−1 ).
   XFGmvol01.xpl produces the following table:
226                                          10   Multivariate Volatility Models


[2,] "           Minimum     Maximum     Mean    Median Std.Error"
[3,] "-----------------------------------------------------------"
[4,] "DEM/USD -0.040125     0.031874 -4.7184e-06    0   0.0070936"
[5,] "GBP/USD -0.046682     0.038665 0.00011003     0   0.0069721"

                                                                  XFGmvol01.xpl


Evidently, the empirical means of both processes are very close to zero (-4.72e-
06 and 1.10e-04, respectively). Also minimum, maximum and standard errors
are of similar size. First differences of the respective log exchange rates are
shown in Figure 10.1. As is apparent from Figure 10.1, variations of exchange
rate returns exhibit an autoregressive pattern: Large returns in foreign ex-
change markets are followed by large returns of either sign. This is most obvious
in periods of excessive returns. Note that these volatility clusters tend to coin-
cide in both series. It is precisely this observation that justifies a multivariate
GARCH specification.


10.2.2      Estimating bivariate GARCH

      {coeff, likest} = bigarch(theta,et)
           estimates a bivariate GARCH model

The quantlet bigarch provides a fast algorithm to estimate the BEKK repre-
sentation of a bivariate GARCH(1,1) model. QML-estimation is implemented
by means of the BHHH-algorithm which minimizes the negative Gaussian log-
likelihood function. The algorithm employs analytical first order derivatives of
the log-likelihood function (Lütkepohl, 1996) with respect to the 11-dimensional
vector of parameters containing the elements of C0 , A11 and G11 as given in
(10.6).
10.2         An empirical illustration                                             227




                                            DEM/USD
                 0.04
                 0.02
       Returns
                 0
                 -0.02
                 -0.04




                    1980      1982   1984    1986      1988   1990   1992   1994
                                                    Time

                                            GBP/USD
                 0.04
                 0.02
       Returns
                 0
                 -0.02
                 -0.04




                    1980      1982   1984    1986      1988   1990   1992   1994
                                                    Time
                           Figure 10.1. Foreign exchange rate data: returns.
                                                                          XFGmvol01.xpl
228                                         10   Multivariate Volatility Models


The standard call is

  {coeff, likest}=bigarch(theta, et),

where as input parameters we have initial values theta for the iteration algo-
rithm and the data set, e.g. financial returns, stored in et. The estimation
output is the vector coeff containing the stacked elements of the parameter
matrices C0 , A11 and G11 in (10.6) after numerical optimization of the Gaussian
log-likelihood function. Being an iterative procedure the algorithm requires to
determine suitable initial parameters theta. For the diagonal elements of the
matrices A11 and G11 values around 0.3 and 0.9 appear reasonable, since in uni-
variate GARCH(1,1) models parameter estimates for a1 and g1 in (10.3) often
take values around 0.32 = 0.09 and 0.81 = 0.92 . There is no clear guidance how
to determine initial values for off diagonal elements of A11 or G11 . Therefore
it might be reasonable to try alternative initializations of these parameters.
Given an initialization of A11 and G11 the starting values for the elements in
C0 are immediately determined by the algorithm assuming the unconditional
covariance of εt to exist, Engle and Kroner (1995).
Given our example under investigation the bivariate GARCH estimation yields
as output:

Contents of coeff

[ 1,] 0.0011516
[ 2,] 0.00031009
[ 3,] 0.00075685
[ 4,] 0.28185
[ 5,] -0.057194
[ 6,] -0.050449
[ 7,] 0.29344
[ 8,] 0.93878
[ 9,] 0.025117
[10,] 0.027503
[11,] 0.9391

Contents of likest

[1,]   -28599

                                                                XFGmvol02.xpl
10.2   An empirical illustration                                            229


The last number is the obtained minimum of the negative log-likelihood func-
tion. The vector coeff given first contains as first three elements the parame-
ters of the upper triangular matrix C0 , the following four belong to the ARCH
(A11 ) and the last four to the GARCH parameters (G11 ), i.e. for our model

                 Σt = C0> C0 + A>        >          >
                                11 εt−1 εt−1 A11 + G11 Σt−1 G11           (10.7)
stated again for convenience, we find the matrices C0 , A, G to be:

                                                
                                   −3  1.15 .31
                           C0 = 10                 ,
                                         0    .76
                                                        
                         .282 −.050               .939 .028
                A11 =                   , G11 =              .            (10.8)
                        −.057    .293             .025 .939


10.2.3     Estimating the (co)variance processes

The (co)variance is obtained by sequentially calculating the difference equation
(10.7) where we use the estimator for the unconditional covariance matrix as
                      >
initial value (Σ0 = E T E ). Here, the T × 2 vector E contains log-differences
of our foreign exchange rate data. Estimating the covariance process is also
accomplished in the quantlet     XFGmvol02.xpl and additionally provided in
sigmaprocess.
We display the estimated variance and covariance processes in Figure 10.2. The
upper and the lower panel of Figure 10.2 show the variances of the DEM/USD
and GBP/USD returns respectively, whereas in the middle panel we see the co-
variance process. Except for a very short period in the beginning of our sample
the covariance is positive and of non-negligible size throughout. This is evi-
dence for cross sectional dependencies in currency markets which we mentioned
earlier to motivate multivariate GARCH models.
Instead of estimating the realized path of variances as shown above,
we could also use the estimated parameters to simulate volatility paths
( XFGmvol03.xpl).
230                                                 10    Multivariate Volatility Models




                                         DEM/USD
                15
      Sigma11
                10
                5




                    1980   1982   1984   1986      1988     1990    1992    1994
                                                Time

                                         Covariance
                5 10 15
      Sigma12
                0




                    1980   1982   1984   1986      1988     1990    1992    1994
                                                Time

                                         GBP/USD
                20 30
      Sigma22
                10
                0




                    1980   1982   1984   1986      1988     1990    1992    1994
                                                Time
           Figure 10.2. Estimated variance and covariance processes, 105 Σ̂t .
                                                                 XFGmvol02.xpl
10.2      An empirical illustration                                       231


                                     DEM/USD - Simulation
                 10 15 20
       Sigma11
                 5




                               0   500     1000   1500   2000   2500    3000
                                                  Time

                                              Covariance
                 10 15
       Sigma12
                 5
                 0




                               0   500     1000   1500   2000   2500    3000
                                                  Time

                                         GBP/USD - Simulation
                 10 20 30 40
       Sigma22
                 0




                               0   500     1000
                                         1500        2000   2500      3000
                                         Time
   Figure 10.3. Simulated variance and covariance processes, both bivari-
   ate (blue) and univariate case (green), 105 Σ̂t .
                                                                XFGmvol03.xpl
232                                         10   Multivariate Volatility Models


For this at each point in time an observation εt is drawn from a multivariate
normal distribution with variance Σt . Given these observations, Σt is updated
according to (10.7). Then, a new residual is drawn with covariance Σt+1 . We
apply this procedure for T = 3000. The results, displayed in the upper three
panels of Figure 10.3, show a similar pattern as the original process given in
Figure 10.2. For the lower two panels we generate two variance processes from
the same residuals ξt . In this case, however, we set off-diagonal parameters in
A11 and G11 to zero to illustrate how the unrestricted BEKK model incorpo-
rates cross equation dynamics. As can be seen, both approaches are convenient
to capture volatility clustering. Depending on the particular state of the sys-
tem, spillover effects operating through conditional covariances, however, have
a considerable impact on the magnitude of conditional volatility.


10.3      Forecasting exchange rate densities
The preceding section illustrated how the GARCH model may be employed
effectively to describe empirical price variations of foreign exchange rates. For
practical purposes, as for instance scenario analysis, VaR estimation (Chap-
ter 1), option pricing (Chapter 16), one is often interested in the future joint
density of a set of asset prices. Continuing the comparison of the univariate
and bivariate approach to model volatility dynamics of exchange rates it is
thus natural to investigate the properties of these specifications in terms of
forecasting performance.
We implement an iterative forecasting scheme along the following lines: Given
the estimated univariate and bivariate volatility models and the corresponding
information sets Ft−1 , t = 1, . . . , T − 5 (Figure 10.2), we employ the identi-
fied data generating processes to simulate one-week-ahead forecasts of both
exchange rates. To get a reliable estimate of the future density we set the
number of simulations to 50000 for each initial scenario. This procedure yields
two bivariate samples of future exchange rates, one simulated under bivariate,
the other one simulated under univariate GARCH assumptions.
A review on the current state of evaluating competing density forecasts is of-
fered by Tay and Wallis (1990). Adopting a Bayesian perspective the common
approach is to compare the expected loss of actions evaluated under alterna-
tive density forecasts. In our pure time series framework, however, a particular
action is hardly available for forecast density comparisons. Alternatively one
could concentrate on statistics directly derived from the simulated densities,
10.3   Forecasting exchange rate densities                                     233


                     Time window J       Success ratio SRJ
                     1980    1981              0.744
                     1982    1983              0.757
                     1984    1985              0.793
                     1986    1987              0.788
                     1988    1989              0.806
                     1990    1991              0.807
                     1992   1994/4             0.856

    Table 10.1. Time varying frequencies of the bivariate GARCH model
    outperforming the univariate one in terms of one-week-ahead forecasts
    (success ratio)


such as first and second order moments or even quantiles. Due to the mul-
tivariate nature of the time series under consideration it is a nontrivial issue
to rank alternative density forecasts in terms of these statistics. Therefore,
we regard a particular volatility model to be superior to another if it provides
a higher simulated density estimate of the actual bivariate future exchange
rate. This is accomplished by evaluating both densities at the actually realized
exchange rate obtained from a bivariate kernel estimation. Since the latter
comparison might suffer from different unconditional variances under univari-
ate and multivariate volatility, the two simulated densities were rescaled to
have identical variance. Performing the latter forecasting exercises iteratively
over 3714 time points we can test if the bivariate volatility model outperforms
the univariate one.
To formalize the latter ideas we define a success ratio SRJ as
                           1 X ˆ
                  SRJ =       1{fbiv (Rt+5 ) > fˆuni (Rt+5 )},              (10.9)
                          |J|
                              t∈J

where J denotes a time window containing |J| observations and 1 an indica-
tor function. fˆbiv (Rt+5 ) and fˆuni (Rt+5 ) are the estimated densities of future
exchange rates, which are simulated by the bivariate and univariate GARCH
processes, respectively, and which are evaluated at the actual exchange rate
levels Rt+5 . The simulations are performed in XFGmvol04.xpl.
Our results show that the bivariate model indeed outperforms the univariate
one when both likelihoods are compared under the actual realizations of the
exchange rate process. In 81.6% of all cases across the sample period, SRJ =
0.816, J = {t : t = 1, ..., T −5}, the bivariate model provides a better forecast.
234                                           10   Multivariate Volatility Models



                   Covariance and success ratio
       1.5
       1
       0.5
       0




         1980     1982      1984     1986      1988     1990     1992     1994
                                           Time
      Figure 10.4. Estimated covariance process from the bivariate GARCH
      model (104 σ̂12 , blue) and success ratio over overlapping time intervals
      with window length 80 days (red).



This is highly significant. In Table 10.1 we show that the overall superiority of
the bivariate volatility approach is confirmed when considering subsamples of
two-years length. A-priori one may expect the bivariate model to outperform
the univariate one the larger (in absolute value) the covariance between both
return processes is. To verify this argument we display in Figure 10.4 the
empirical covariance estimates from Figure 10.2 jointly with the success ratio
evaluated over overlapping time intervals of length |J| = 80.
As is apparent from Figure 10.4 there is a close co-movement between the
success ratio and the general trend of the covariance process, which confirms
our expectations: the forecasting power of the bivariate GARCH model is
10.3   Forecasting exchange rate densities                                  235


particularly strong in periods where the DEM/USD and GBP/USD exchange
rate returns exhibit a high covariance. For completeness it is worthwhile to
mention that similar results are obtained if the window width is varied over
reasonable choices of |J| ranging from 40 to 150.
With respect to financial practice and research we take our results as strong
support for a multivariate approach towards asset price modeling. Whenever
contemporaneous correlation across markets matters, the system approach of-
fers essential advantages. To name a few areas of interest multivariate volatil-
ity models are supposed to yield useful insights for risk management, scenario
analysis and option pricing.




Bibliography
Baba, Y., Engle, R.F., Kraft, D.F., and Kroner, K.F. (1990). Multivariate Si-
    multaneous Generalized ARCH, mimeo, Department of Economics, Uni-
    versity of California, San Diego.
Berndt, E.K., Hall B.H., Hall, R.E., and Hausman, J.A. (1974). Estimation
    and Inference in Nonlinear Structural Models, Annals of Economic and
    Social Measurement 3/4: 653–665.
Bollerslev, T. (1986). Generalized Autoregressive Conditional Heteroscedastic-
     ity, Journal of Econometrics 31: 307-327.
Bollerslev, T. (1990). Modeling the Coherence in Short-Run Nominal Exchange
     Rates: A Multivariate Generalized ARCH Approach, Review of Economics
     and Statistics 72: 498–505.
Bollerslev, T. and Engle, R.F. (1993). Common Persistence in Conditional
     Variances, Econometrica 61: 167–186.
Bollerslev, T., Engle, R.F. and Nelson, D.B. (1994). GARCH Models, in: En-
     gle, R.F., and McFadden, D.L. (eds.) Handbook of Econometrics, Vol. 4,
     Elsevier, Amsterdam, 2961–3038.
Bollerslev, T., Engle, R.F. and Wooldridge, J.M. (1988). A Capital Asset Pric-
     ing Model with Time-Varying Covariances, Journal of Political Economy
     96: 116–131.
236                                        10   Multivariate Volatility Models


Bollerslev, T. and Wooldridge, J.M. (1992). Quasi–Maximum Likelihood Esti-
     mation and Inference in Dynamic Models with Time–Varying Covariances,
     Econometric Reviews, 11: 143–172.
Cecchetti, S.G., Cumby, R.E. and Figlewski, S. (1988). Estimation of the Op-
    timal Futures Hedge, Review of Economics and Statistics 70: 623-630.
Comte, F. and Lieberman, O. (2000). Asymptotic Theory for Multivariate
   GARCH Processes, Manuscript, Universities Paris 6 and Paris 7.
Engle, R.F. (1982). Autoregressive Conditional Heteroscedasticity with Esti-
    mates of the Variance of UK Inflation. Econometrica 50: 987-1008.
Engle, R.F., Ito, T. and Lin, W.L. (1990). Meteor Showers or Heat Waves?
    Heteroskedastic Intra-Daily Volatility in the Foreign Exchange Market,
    Econometrica 58: 525–542.
Engle, R.F. and Kroner, K.F. (1995). Multivariate Simultaneous Generalized
    ARCH, Econometric Theory 11: 122–150.
Hafner, C.M. and Herwartz, H. (1998). Structural Analysis of Portfolio Risk
    using Beta Impulse Response Functions, Statistica Neerlandica 52: 336-
    355.
Hamao, Y., Masulis, R.W. and Ng, V.K. (1990). Correlations in Price Changes
   and Volatility across International Stock Markets, Review of Financial
   Studies 3: 281–307.
Jeantheau, T. (1998). Strong Consistency of Estimators for Multivariate ARCH
    Models, Econometric Theory 14: 70-86.
Lütkepohl, H. (1996). Handbook of Matrices, Wiley, Chichester.
Nelson, D.B. (1991). Conditional Heteroskedasticity in Asset Returns: A New
    Approach, Econometrica 59: 347–370.
Tay, A. and Wallis, K. (2000). Density forecasting: A Survey, Journal of Fore-
     casting 19: 235–254.
11 Statistical Process Control
                                                                      Sven Knoth


Statistical Process Control (SPC) is the misleading title of the area of statistics
which is concerned with the statistical monitoring of sequentially observed data.
Together with the theory of sampling plans, capability analysis and similar
topics it forms the field of Statistical Quality Control. SPC started in the
1930s with the pioneering work of Shewhart (1931). Then, SPC became very
popular with the introduction of new quality policies in the industries of Japan
and of the USA. Nowadays, SPC methods are considered not only in industrial
statistics. In finance, medicine, environmental statistics, and in other fields of
applications practitioners and statisticians use and investigate SPC methods.
A SPC scheme – in industry mostly called control chart – is a sequential scheme
for detecting the so called change point in the sequence of observed data. Here,
we consider the most simple case. All observations X1 , X2 , . . . are independent,
normally distributed with known variance σ 2 . Up to an unknown time point
m − 1 the expectation of the Xi is equal to µ0 , starting with the change point
m the expectation is switched to µ1 6= µ0 . While both expectation values
are known, the change point m is unknown. Now, based on the sequentially
observed data the SPC scheme has to detect whether a change occurred.
SPC schemes can be described by a stopping time L – known as run length –
which is adapted to the sequence of sigma algebras Fn = F(X1 , X2 , . . . , Xn ).
The performance or power of these schemes is usually measured by the Average
Run Length (ARL), the expectation of L. The ARL denotes the average num-
ber of observations until the SPC scheme signals. We distinguish false alarms
– the scheme signals before m, i. e. before the change actually took place – and
right ones. A suitable scheme provides large ARLs for m = ∞ and small ARLs
for m = 1. In case of 1 < m < ∞ one has to consider further performance
measures. In the case of the oldest schemes – the Shewhart charts – the typical
inference characteristics like the error probabilities were firstly used.
238                                                  11 Statistical Process Control


The chapter is organized as follows. In Section 11.1 the charts in consider-
ation are introduced and their graphical representation is demonstrated. In
the Section 11.2 the most popular chart characteristics are described. First,
the characteristics as the ARL and the Average Delay (AD) are defined. These
performance measures are used for the setup of the applied SPC scheme. Then,
the three subsections of Section 11.2 are concerned with the usage of the SPC
routines for determination of the ARL, the AD, and the probability mass func-
tion (PMF) of the run length. In Section 11.3 some results of two papers are
reproduced with the corresponding XploRe quantlets.


11.1       Control Charts
Recall that the data X1 , X2 , . . . follow the change point model
               (
                  Xt ∼ N (µ0 , σ 2 )          , t = 1, 2, . . . , m − 1
                                                                          .   (11.1)
                    Xt ∼ N (µ1 6= µ0 , σ 2 ) , t = m, m + 1, . . .
The observations are independent and the time point m is unknown. The
control chart (the SPC scheme) corresponds to a stopping time L. Here we
consider three different schemes – the Shewhart chart, EWMA and CUSUM
schemes. There are one- and two-sided versions. The related stopping times in
the one-sided upper versions are:

   1. The Shewhart chart introduced by Shewhart (1931)
                                                            
                   Shewhart                     Xt − µ0
                 L          = inf t ∈ IN : Zt =         > c1                  (11.2)
                                                   σ
      with the design parameter c1 called critical value.
   2. The EWMA scheme (exponentially weighted moving average) initially
      presented by Roberts (1959)
                          n                  p         o
             LEWMA = inf t ∈ IN : ZtEWMA > c2 λ/(2 − λ) ,       (11.3)
              Z0EWMA = z0 = 0 ,
                                                  Xt − µ0
              ZtEWMA = (1 − λ) Zt−1
                                EWMA
                                     +λ                   , t = 1, 2, . . .   (11.4)
                                                     σ
      with the smoothing value λ and the critical value c2 . The smaller λ the
      faster EWMA detects small µ1 − µ0 > 0.
11.1    Control Charts                                                       239


  3. The CUSUM scheme (cumulative sum) introduced by Page (1954)

        LCUSUM = inf t ∈ IN : ZtCUSUM > c3 ,
                    
                                                                 (11.5)
           Z0CUSUM = z0 = 0 ,
                                                
             CUSUM            CUSUM   Xt − µ0
           Zt      = max 0, Zt−1    +         − k , t = 1, 2, . . .       (11.6)
                                         σ

       with the reference value k and the critical value c3 (known as decision
       interval). For fastest detection of µ1 − µ0 CUSUM has to be set up with
       k = (µ1 + µ0 )/(2 σ).

The above notation uses normalized data. Thus, it is not important whether
Xt is a single observation or a sample statistic as the empirical mean.
Remark, that for using one-sided lower schemes one has to apply the upper
schemes to the data multiplied with -1. A slight modification of one-sided
Shewhart and EWMA charts leads to their two-sided versions. One has to
replace in the comparison of chart statistic and threshold the original statistic
Zt and ZtEWMA by their absolute value. The two-sided versions of these schemes
are more popular than the one-sided ones. For two-sided CUSUM schemes we
consider a combination of two one-sided schemes, Lucas (1976) or Lucas and
Crosier (1982), and a scheme based on Crosier (1986). Note, that in some
recent papers the same concept of combination of two one-sided schemes is
used for EWMA charts.
Recall, that Shewhart charts are a special case of EWMA schemes (λ = 1).
Therefore, we distinguish 5 SPC schemes – ewma1, ewma2, cusum1, cusum2
(two one-sided schemes), and cusumC (Crosier’s scheme). For the two-sided
EWMA charts the following quantlets are provided in the XploRe quantlib
spc.

                 SPC quantlets for two-sided EWMA scheme
       spcewma2     – produces chart figure
       spcewma2arl – returns ARL
       spcewma2c    – returns critical value c2
       spcewma2ad – returns AD (steady-state ARL)
       spcewma2pmf – returns probability mass and distribution function
                      of the run-length for single time points
       spcewma2pmfm – the same up to a given time point
240                                                    11 Statistical Process Control


By replacing ewma2 by one of the remaining four scheme titles the related
characteristics can be computed.
The quantlets spcewma1,...,spccusumC generate the chart figure. Here, we ap-
ply the 5 charts to artificial data. 100 pseudo random values from a normal
distribution are generated. The first 80 values have expectation 0, the next 20
values have expectation 1, i. e. model (11.1) with µ0 = 0, µ1 = 1, and m = 81.
We start with the two-sided EWMA scheme and set λ = 0.1, i. e. the chart is


                         Two-sided EWMA chart
                           lambda = 0.10, in-control ARL = 300         94
        1
        0.5
  Z_t

        0
        -0.5




               0                           50                               100
                                            t

                   Figure 11.1. Two-sided EWMA chart               XFGewma2fig.xpl



very sensitive to small changes. The critical value c2 (see (11.3)) is computed
to provide an in-control ARL of 300 (see Section 11.2). Thus, the scheme leads
in average after 300 observations to a false alarm.
In Figure 11.1 the graph of ZtEWMA is plotted against time t = 1, 2, . . . , 100.
Further, the design parameter λ, the in-control ARL, and the time of alarm (if
there is one) are printed. One can see, that the above EWMA scheme detects
the change point m = 81 at time point 94, i. e. the delay is equal to 14. The
related average values, i. e. ARL and Average Delay (AD), for µ1 = 1 are 9.33
and 9.13, respectively. Thus, the scheme needs here about 5 observations more
than average.
11.1    Control Charts                                                                         241


In the same way the remaining four SPC schemes can be plotted. Remark,
that in case of ewma1 one further parameter has to be set. In order to obtain
a suitable figure and an appropriate scheme the EWMA statistic ZtEWMA (see
(11.4)) is reflected at a pre-specified border zreflect ≤ 0 (= µ0 ), i. e.

                   ZtEWMA = max{zreflect, ZtEWMA } , t = 1, 2, . . .

for an upper EWMA scheme. Otherwise, the statistic is unbounded, which
leads to schemes with poor worst case performance. Further, the methods


                               One-sided EWMA chart
        1




                          lambda = 0.10, in-control ARL = 300, zreflect = -4.0      93
        0.5
  Z_t

        0
        -0.5




               0                                  50                                     100
                                                   t

                      Figure 11.2. One-sided EWMA chart                          XFGewma1fig.xpl



used in Section 11.2 for computing the chart characteristics use bounded con-
tinuation regions of the chart. If zreflect is small enough, then the ARL and
the AD (which are not worst case criterions) of the reflected scheme are the
same as of the unbounded scheme. Applying the quantlet XFGewma1fig.xpl
with zreflect= −4 p    leads to Figure 11.2. Thereby, zreflect has the same
normalization factor λ/(2 − λ) like the critical value c2 (see 2.). The corre-
sponding normalized border is printed as dotted line (see Figure 11.2). The
chart signals one observation earlier than the two-sided version in Figure 11.1.
The related ARL and AD values for µ1 = 1 are now 7.88 and 7.87, respectively.
In Figure 11.3 the three different CUSUM charts with k = 0.5 are presented.
They signal at the time points 87, 88, and 88 for cusum1, cusum2, and cusumC,
242                                                                  11 Statistical Process Control


respectively. For the considered dataset the CUSUM charts are faster be-

                                 One-sided CUSUM chart
                                    k = 0.50, in-control ARL = 300          87




                    10
              Z_t

                    5
                    0




                         0                       50                              100
                                                  t
                                                                                 XFGcusum1fig.xpl

                                Two-sided CUSUM chart
                                    k = 0.50, in-control ARL = 300          88
                    10
                    5
              Z_t

                    0
                    -5




                         0                       50                              100
                                                  t
                                                                                 XFGcusum2fig.xpl

                             Crosier’s two-sided CUSUM chart
                                    k = 0.50, in-control ARL = 300          88
                    10
                    5
              Z_t

                    0




                         0                       50                              100
                                                  t
                                                                                 XFGcusumCfig.xpl

      Figure 11.3. CUSUM charts: one-sided, two-sided, Crosier’s two-sided
11.2   Chart characteristics                                                  243


cause of their better worst case performance. The observations right before
the change point at m = 81 are smaller than average. Therefore, the EWMA
charts need more time to react to the increased average. The related average
values of the run length, i. e. ARL and AD, are 8.17 and 7.52, 9.52 and 8.82,
9.03 and 8.79 for cusum1, cusum2, and cusumC, respectively.


11.2      Chart characteristics
Consider the change point model (11.1). For fixed m denote Pm (·) and Em (·)
the corresponding probability measure and expectation, respectively. Hereby,
m = ∞ stands for the case of no change, i. e. the so called in-control case. Then
the Average Run Length (ARL) (expectation of the run length L) is defined
as                             (
                                 E∞ (L) , µ = µ0
                        Lµ =                          .                     (11.7)
                                 E1 (L) , µ 6= µ0
Thus, the ARL denotes the average number of observations until signal for a
sequence with constant expectation. µ = µ0 or m = ∞ stands for no change,
µ 6= µ0 and m = 1 mark, that just at the first time point (or earlier) a change
takes place from µ0 to µ. Therefore, the ARL evaluates only the special sce-
nario of m = 1 of the SPC scheme. Other measures, which take into account
that usually 1 < m < ∞, were introduced by Lorden (1971) and Pollak and
Siegmund (1975), Pollak and Siegmund (1975). Here, we use a performance
measure which was firstly proposed by Roberts (1959). The so called (condi-
tional) Average Delay (AD, also known as steady-state ARL) is defined as
                        Dµ     =   lim Dµ(m) ,                             (11.8)
                                   m→∞

                      Dµ(m)
                                                   
                               = Em L − m + 1|L ≥ m ,
where µ is the value of µ1 in (11.1), i. e. the expectation after the change.
While Lµ measures the delay for the case m = 1, Dµ determines the delay for
a SPC scheme which ran a long time without signal. Usually, the convergence
                                                                  (m)
in (11.8) is very fast. For quite small m the difference between Dµ and Dµ is
very small already. Lµ and Dµ are average values for the random variable L.
Unfortunately, L is characterized by a large standard deviation. Therefore, one
might be interested in the whole distribution of L. Again, we restrict on the
special cases m = 1 and m = ∞. We consider the probability mass function
Pµ (L = n) (PMF) and the cumulative distribution function Pµ (L ≤ n) (CDF).
Based on the CDF, one is able to compute quantiles of the run length L.
244                                                 11 Statistical Process Control


For normally distributed random variables it is not possible to derive exact
solutions for the above characteristics. There are a couple of approximation
techniques. Besides very rough approximations based on the Wald approxi-
mation known from sequential analysis, Wiener process approximations and
similar methods, three main methods can be distinguished:

   1. Markov chain approach due to Brook and Evans (1972): Replacement of
      the continuous statistic Zt by a discrete one
   2. Quadrature of integral equations which are derived for the ARL, Vance
      (1986) and Crowder (1986) and for some eigenfunctions which lead to the
      AD
   3. Waldmann (1986) approach: Iterative computation of P (L = n) by us-
      ing quadrature and exploiting of monotone bounds for the considered
      characteristics

Here we use the first approach, which has the advantage, that all considered
characteristics can be presented in a straightforward way. Next, the Markov
chain approach is briefly described. Roughly speaking, the continuous statistic
Zt is approximated by a discrete Markov chain Mt . The transition Zt−1 =
x → Zt = y is approximated by the transition Mt−1 = i w → Mt = j w with
x ∈ [i w − w/2, i w + w/2] and y ∈ [j w − w/2, j w + w/2]. That is, given an
integer r the continuation region of the scheme [−c, c], [zreflect, c], or [0, c]
is separated into 2 r + 1 or r + 1 intervals of the kind [i w − w/2, i w + w/2]
(one exception is [0, w/2] as the first subinterval of [0, c]). Then, the transition
kernel f of Zt is approximated by the discrete kernel of Mt , i. e.
                 f (x, y) ≈ P (i w → [j w − w/2, j w + w/2])/w
for all x ∈ [i w − w/2, i w + w/2] and y ∈ [j w − w/2, j w + w/2]. Eventually,
we obtain a Markov chain {Mt } with 2 r + 1 or r + 1 transient states and one
absorbing state. The last one corresponds to the alarm (signal) of the scheme.
Denote by Q = (qij ) the matrix of transition probabilities of the Markov chain
{Mt } on the transient states, 1 a vector of ones, and L = (Li ) the ARL vector.
Li stands for the ARL of a SPC scheme which starts in point i w (corresponds
to z0 ). In the case of a one-sided CUSUM scheme with z0 = 0 3 [0, w/2]
the value L0 approximates the original ARL. By using L we generalize the
original schemes to schemes with possibly different starting values z0 . Now,
the following linear equation system is valid, Brook and Evans (1972):
                                  (I − Q) L = 1 ,                            (11.9)
11.2   Chart characteristics                                                 245


where I denotes the identity matrix. By solving this equation system we get
the ARL vector L and an approximation of the ARL of the considered SPC
scheme. Remark that the larger r the better is the approximation. In the days
of Brook and Evans (1972) the maximal matrix dimension r+1 (they considered
cusum1) was 15 because of the restrictions of the available computing facilities.
Nowadays, one can use dimensions larger than some hundreds. By looking
at different r one can find a suitable value. The quantlet       XFGrarl.xpl
demonstrates this effect for the Brook and Evans (1972) example. 9 different
values of r from 5 to 500 are used to approximate the in-control ARL of a
one-sided CUSUM chart with k = 0.5 and c3 = 3 (variance σ 2 = 1). We get

r    5      10     20     30     40     50    100    200    500
L0 113.47 116.63 117.36 117.49 117.54 117.56 117.59 117.59 117.60

                                                                   XFGrarl.xpl


The true value is 117.59570 (obtainable via a very large r or by using the
quadrature methods with a suitable large number of abscissas). The computa-
tion of the average delay (AD) requires more extensive calculations. For details
see, e. g., Knoth (1998) on CUSUM for Erlang distributed data. Here we apply
the Markov chain approach again, Crosier (1986). Given one of the considered
schemes and normally distributed data, the matrix Q is primitive, i. e. there
exists a power of Q which is positive. Then Q has one single eigenvalue which
is larger in magnitude than the remaining eigenvalues. Denote this eigenvalue
by %. The corresponding left eigenvector ψ is strictly positive, i. e.

                               ψQ = %ψ , ψ > 0.                          (11.10)

It can be shown, Knoth (1998), that the conditional density f (·|L ≥ m) of
both the continuous statistic Zt and the Markov chain Mt tends for m →
∞ to the normalized left eigenfunction and eigenvector, respectively, which
correspond to the dominant eigenvalue %. Therefore, the approximation of
D = lim Em (L − m + 1|L ≥ m) can be constructed by
       m→∞

                               D = (ψ T L)/(ψ T 1) .

Note, that the left eigenvector ψ is computed for the in-control mean µ0 , while
the ARL vector L is computed for a specific out-of-control mean or µ0 again.
If we replace in the above quantlet (   XFGrarl.xpl) the phrase arl by ad, then
246                                                 11 Statistical Process Control


we obtain the following output which demonstrates the effect of the parameter
r again.

r    5      10     20     30     40     50    100    200    500
D0 110.87 114.00 114.72 114.85 114.90 114.92 114.94 114.95 114.95

                                                                      XFGrad.xpl


Fortunately, for smaller values of r than in the ARL case we get good accuracy
already. Note, that in case of cusum2 the value r has to be smaller (less than 30)
than for the other charts, since it is based on the computation of the dominant
eigenvalue of a very large matrix. The approximation in case of combination of
two one-sided schemes needs a twodimensional approximating Markov chain.
For the ARL only exists a more suitable approach. As, e. g., Lucas and Crosier
(1982) shown it is possible to use the following relation between the ARLs of the
one- and the two-sided schemes. Here, the two-sided scheme is a combination
of two symmetric one-sided schemes which both start at z0 = 0. Therefore,
we get a very simple formula for the ARL L of the two-sided scheme and the
ARLs Lupper and Llower of the upper and lower one-sided CUSUM scheme

                                  Lupper · Llower
                             L=                   .                        (11.11)
                                  Lupper + Llower

Eventually, we consider the distribution function of the run length L itself.
By using the Markov chain approach and denoting with pni the approximated
probability of (L > n) for a SPC scheme started in i w, such that pn = (pni ),
we obtain
                            pn = pn−1 Q = p0 Qn .                    (11.12)
The vector p0 is initialized with p0i = 1 for the starting point z0 ∈ [i w −
w/2, i w + w/2] and p0j = 0 otherwise. For large n we can replace the above
equation by
                                 pni ≈ gi %n .                       (11.13)
The constant gi is defined as

                                gi = φi /(φT ψ) ,

where φ denotes the right eigenvector of Q, i. e. Q φ = % φ. Based on (11.12)
and (11.13) the probability mass and the cumulative distribution function of
11.2   Chart characteristics                                                247


the run length L can be approximated. (11.12) is used up to a certain n. If the
difference between (11.12) and (11.13) is smaller than 10−9 , then exclusively
(11.13) is exploited. Remark, that the same is valid as for the AD. For the
two-sided CUSUM scheme (cusum2) the parameter r has to be small (≤ 30).


11.2.1     Average Run Length and Critical Values

The spc quantlib provides the quantlets spcewma1arl,...,spccusumCarl for
computing the ARL of the corresponding SPC scheme. All routines need the
actual value of µ as a scalar or as a vector of several µ, two scheme param-
eters, and the integer r (see the beginning of the section). The XploRe ex-
ample     XFGarl.xpl demonstrates all ...arl routines for k = 0.5, λ = 0.1,
zreflect= −4, r = 50, c = 3, in-control and out-of-control means µ0 = 0 and
µ1 = 1, respectively. The next table summarizes the ARL results

         chart    ewma1        ewma2    cusum1     cusum2      cusumC
          L0      1694.0       838.30    117.56     58.780      76.748
          L1      11.386       11.386    6.4044     6.4036      6.4716

                                                                   XFGarl.xpl
Remember that the ARL of the two-sided CUSUM (cusum2) scheme is based on
the one-sided one, i. e. 58.78 = 117.56/2 and 6.4036 = (6.4044·49716)/(6.4044+
49716) with 49716 = L−1 .
For the setup of the SPC scheme it is usual to give the design parameter λ and
k for EWMA and CUSUM, respectively, and a value ξ for the in-control ARL.
Then, the critical value c (c2 or c3 ) is the solution of the equation Lµ0 (c) =
ξ. Here, the regula falsi is used with an accuracy of |Lµ0 (c) − ξ| < 0.001.
The quantlet XFGc.xpl demonstrates the computation of the critical values
for SPC schemes with in-control ARLs of ξ = 300, reference value k = 0.5
(CUSUM), smoothing parameter λ = 0.1 (EWMA), zreflect= −4, and the
Markov chain parameter r = 50.

         chart    ewma1        ewma2    cusum1     cusum2      cusumC
           c      2.3081       2.6203    3.8929     4.5695      4.288

                                                                      XFGc.xpl
248                                               11 Statistical Process Control


The parameter r = 50 guarantees fast computation and suitable accuracy.
Depending on the power of the computer one can try values of r up to 1000 or
larger (see XFGrarl.xpl in the beginning of the section).


11.2.2     Average Delay

The usage of the routines for computing the Average Delay (AD) is similar
to the ARL routines. Replace only the code arl by ad. Be aware that the
computing time is larger than in case of the ARL, because of the computation
of the dominant eigenvalue. It would be better to choose smaller r, especially in
the case of the two-sided CUSUM. Unfortunately, there is no relation between
the one- and two-sided schemes as for the ARL in (11.11). Therefore, the library
computes the AD for the two-sided CUSUM based on a twodimensional Markov
chain with dimension (r + 1)2 × (r + 1)2 . Thus with values of r larger than 30,
the computing time becomes quite large. Here the results follow for the above
quantlet XFGrarl.xpl with ad instead of arl and r = 30 for spccusum2ad:


         chart    ewma1      ewma2      cusum1       cusum2     cusumC
          D0      1685.8     829.83      114.92       56.047     74.495
          D1      11.204     11.168      5.8533       5.8346     6.2858


                                                                     XFGad.xpl




11.2.3     Probability Mass and Cumulative Distribution
           Function

The computation of the probability mass function (PMF) and of the cumulative
distribution function (CDF) is implemented in two different types of routines.
The first one with the syntax spcchartpmf returns the values of the PMF
P (L = n) and CDF P (L ≤ n) at given single points of n, where chart has
to be replaced by ewma1, ..., cusumC. The second one written as spcchartpmfm
computes the whole vectors of the PMF and        of the CDF up to a given point
n, i. e. P (L = 1), P (L = 2), . . . , P (L = n) and the similar one of the CDF.
Note, that the same is valid as for the Average Delay (AD). In case of the
two-sided CUSUM scheme the computations are based on a twodimensional
11.2    Chart characteristics                                                  249


Markov chain. A value of parameter r less than 30 would be computing time
friendly.
With the quantlet XFGpmf1.xpl the 5 different schemes (r = 50, for cusum2
r = 25) are compared according their in-control PMF and CDF (µ = µ0 = 0) at
the positions n in {1, 10, 20, 30, 50, 100, 200, 300}. Remark, that the in-control
ARL of all schemes is chosen as 300.


          chart      ewma1      ewma2       cusum1      cusum2      cusumC
        P (L = 1)    6 · 10−8   2 · 10−9    6 · 10−6    4 · 10−7    2 · 10−6
       P (L = 10)    0.00318    0.00272     0.00321     0.00307     0.00320
       P (L = 20)    0.00332    0.00324     0.00321     0.00325     0.00322
       P (L = 30)    0.00315    0.00316     0.00310     0.00314     0.00311
       P (L = 50)    0.00292    0.00296     0.00290     0.00294     0.00290
       P (L = 100)   0.00246    0.00249     0.00245     0.00248     0.00245
       P (L = 200)   0.00175    0.00177     0.00175     0.00176     0.00175
       P (L = 300)   0.00125    0.00126     0.00124     0.00125     0.00125
        P (L = 1)    6 · 10−8   2 · 10−9    6 · 10−6    4 · 10−7    2 · 10−6
       P (L ≤ 10)    0.01663    0.01233     0.02012     0.01675     0.01958
       P (L ≤ 20)    0.05005    0.04372     0.05254     0.04916     0.05202
       P (L ≤ 30)    0.08228    0.07576     0.08407     0.08109     0.08358
       P (L ≤ 50)    0.14269    0.13683     0.14402     0.14179     0.14360
       P (L ≤ 100)   0.27642    0.27242     0.27728     0.27658     0.27700
       P (L ≤ 200)   0.48452    0.48306     0.48480     0.48597     0.48470
       P (L ≤ 300)   0.63277    0.63272     0.63272     0.63476     0.63273


                                                                    XFGpmf1.xpl


A more appropriate, graphical representation provides the quantlet
 XFGpmf2.xpl. Figure 11.4 shows the corresponding graphs.
250                                                 11 Statistical Process Control



                            run length cdf - in control

                15
  P(L<=n)*E-2
                10
                5
                0




                      0    10       20         30           40         50
                                         n


                          run length cdf - out of control
                1
  P(L<=n)
                0.5




                                             ewma2
                                             cusumC
                0




                      0    10       20         30           40         50
                                         n
          Figure 11.4. CDF for two-sided EWMA and Crosier’s CUSUM for
          µ = 0 (in control) and µ = 1 (out of control)
                                                                     XFGpmf2.xpl
11.3   Comparison with existing methods                                      251


11.3      Comparison with existing methods

11.3.1       Two-sided EWMA and Lucas/Saccucci

Here, we compare the ARL and AD computations of Lucas and Saccucci (1990)
with XploRe results. In their paper they use as in-control ARL ξ = 500. Then
for, e. g., λ = 0.5 and λ = 0.1 the critical values are 3.071 and 2.814, respec-
tively. By using XploRe the related values are 3.0712 and 2.8144, respectively.
It is known, that the smaller λ the worse the accuracy of the Markov chain
approach. Therefore, r is set greater for λ = 0.1 (r = 200) than for λ = 0.5
(r = 50). Table 11.1 shows some results of Lucas and Saccucci (1990) on
ARLs and ADs. Their results are based on the Markov chain approach as
well. However, they used some smaller matrix dimension and fitted a regres-
sion model on r (see Subsection 11.3.2). The corresponding XploRe results

  µ      0     0.25     0.5    0.75     1     1.5    2      3        4      5
                                      λ = 0.5
 Lµ      500   255      88.8   35.9    17.5 6.53    3.63   1.93     1.34   1.07
 Dµ      499   254      88.4   35.7    17.3 6.44    3.58   1.91     1.36   1.10
                                      λ = 0.1
 Lµ      500   106      31.3   15.9    10.3 6.09    4.36   2.87     2.19   1.94
 Dµ      492   104      30.6   15.5    10.1 5.99    4.31   2.85     2.20   1.83

    Table 11.1. ARL and AD values from Table 3 of Lucas and Saccucci
    (1990)

by using the quantlet     XFGlucsac.xpl coincide with the values of Lucas and
Saccucci (1990).

                                                                  XFGlucsac.xpl




11.3.2       Two-sided CUSUM and Crosier

Crosier (1986) derived a new two-sided CUSUM scheme and compared it with
the established combination of two one-sided schemes. Recall Table 3 of Crosier
(1986), where the ARLs of the new and the old scheme were presented. The
reference value k is equal to 0.5. First, we compare the critical values. By
252                                             11 Statistical Process Control


  µ      0    0.25   0.5   0.75    1     1.5   2       2.5     3      4      5
                            old scheme, h = 4
 Lµ     168   74.2   26.6 13.3 8.38 4.74 3.34         2.62   2.19   1.71   1.31
                          new scheme, h = 3.73
 Lµ     168   70.7   25.1 12.5 7.92 4.49 3.17         2.49   2.09   1.60   1.22
                            old scheme, h = 5
 Lµ     465   139    38.0 17.0 10.4 5.75 4.01         3.11   2.57   2.01   1.69
                         new scheme, h = 4.713
 Lµ     465   132    35.9 16.2 9.87 5.47 3.82         2.97   2.46   1.94   1.59

               Table 11.2. ARLs from Table 3 of Crosier (1986)


using XploRe ( XFGcrosc.xpl) with r = 100 one gets c = 4.0021 (4), 3.7304
(3.73), 4.9997 (5), 4.7133 (4.713), respectively – the original values of Crosier
are written in parentheses. By comparing the results of Table 11.2 with the
results obtainable by the quantlet     XFGcrosarl.xpl (r = 100) it turns out,
that again the ARL values coincide with one exception only, namely L1.5 = 4.75
for the old scheme with h = 4.

                                                               XFGcrosarl.xpl


Further, we want to compare the results for the Average Delay (AD), which is
called Steady-State ARL in Crosier (1986). In Table 5 of Crosier we find the
related results. A slight modification of the above quantlet XFGcrosarl.xpl

  µ      0    0.25   0.5   0.75    1     1.5   2      2.5     3      4      5
                            old scheme, h = 4
  Lµ    163   71.6   25.2 12.3 7.68 4.31 3.03         2.38   2.00   1.55   1.22
                         new scheme, h = 3.73
  Lµ    164   69.0   24.3 12.1 7.69 4.39 3.12         2.46   2.07   1.60   1.29
                            old scheme, h = 5
  Lµ    459   136    36.4 16.0 9.62 5.28 3.68         2.86   2.38   1.86   1.53
                         new scheme, h = 4.713
  Lµ    460   130    35.1 15.8 9.62 5.36 3.77         2.95   2.45   1.91   1.57

      Table 11.3. ADs (steady-state ARLs) from Table 5 of Crosier (1986)
11.4    Real data example – monitoring CAPM                                 253


allows to compute the ADs. Remember, that the computation of the AD for
the two-sided CUSUM scheme is based on a twodimensional Markov chain.
Therefore the parameter r is set to 25 for the scheme called old scheme by
Crosier. The results are summarized in Table 11.4.

  µ      0     0.25   0.5   0.75    1     1.5   2     2.5     3      4      5
                             old scheme, h = 4
 Lµ     163    71.6   25.2 12.4 7.72 4.33 3.05        2.39   2.01   1.55   1.22
                           new scheme, h = 3.73
 Lµ     165    69.1   24.4 12.2 7.70 4.40 3.12        2.47   2.07   1.60   1.29
                             old scheme, h = 5
 Lµ     455    136    36.4 16.0 9.65 5.30 3.69        2.87   2.38   1.86   1.54
                          new scheme, h = 4.713
 Lµ     460    130    35.1 15.8 9.63 5.37 3.77        2.95   2.45   1.91   1.57

      Table 11.4. ADs (steady-state ARLs) computed by XploRe, different
      values to Table 11.3 are printed as italics         XFGcrosad.xpl


While the ARL values in the paper and computed by XploRe coincide, those
for the AD differ slightly. The most prominent deviation (459 vs. 455) one
observes for the old scheme with h = 5. One further in-control ARL difference
one notices for the new scheme with h = 3.73. All other differences are small.
There are different sources for the deviations:
                                      T           T
  1. Crosier computed D(32) = (p32 L)/(p32 1) and not the actual limit D
     (see 11.8, 11.10, and 11.12).
  2. Crosier used ARL(r) = ARL∞ + B/r2 + C/r4 and fitted this model
     for r = 8, 9, 10, 12, 15. Then, ARL∞ is used as final approximation. In
     order to get the above D(32) one needs the whole vector L, such that this
     approach might be more sensitive to approximation errors than in the
     single ARL case.


11.4          Real data example – monitoring CAPM
There are different ways of applying SPC to financial data. Here, we use a
twosided EWMA chart for monitoring the Deutsche Bank (DBK) share. More
254                                             11 Statistical Process Control


precisely, a capital asset pricing model (CAPM) is fitted for DBK and the DAX
which is used as proxy of the efficient market portfolio. That is, denoting with
rDAX,t and rDBK,t the log returns of the DAX and the DBK, respectively, one
assumes that the following regression model is valid:

                           rDBK,t = α + β rDAX,t + εt                   (11.14)

Usually, the parameters of the model are estimated by the ordinary least
squares method. The parameter β is a very popular measure in applied fi-
nance, Elton and Gruber (1991). In order to construct a real portfolio, the
β coefficient is frequently taken into account. Research has therefore concen-
trated on the appropriate estimation of constant and time changing β. In the
context of SPC it is therefore useful to construct monitoring rules which signal
changes in β. Contrary to standard SPC application in industry there is no
obvious state of the process which one can call ”in-control”, i. e. there is no
target process. Therefore, pre-run time series of both quotes (DBK, DAX)
are exploited for building the in-control state. The daily quotes and log re-
turns, respectively, from january, 6th, 1995 to march, 18th, 1997 (about 450
observations) are used for fitting (11.14):

  A N O V A                       SS      df     MSS       F-test   P-value
  _________________________________________________________________________
  Regression                     0.025     1     0.025     445.686   0.0000
  Residuals                      0.025   448     0.000
  Total Variation                0.050   449     0.000

  Multiple R       = 0.70619
  R^2              = 0.49871
  Adjusted R^2     = 0.49759
  Standard Error   = 0.00746

  PARAMETERS         Beta         SE         StandB        t-test   P-value
  ________________________________________________________________________
  b[ 0,]=         -0.0003       0.0004      -0.0000        -0.789   0.4307
  b[ 1,]=          0.8838       0.0419       0.7062        21.111   0.0000


With b[1,] = β = 0.8838 a typical value has been obtained. The R2 =
0.49871 is not very large. However, the simple linear regression is considered
in the sequel. The (empirical) residuals of the above model are correlated (see
Figure 11.5). The SPC application should therefore be performed with the
(standardized) residuals of an AR(1) fit to the regression residuals. For an
application of the XploRe quantlet armacls (quantlib times) the regression
residuals were standardized. By using the conditional least squares method an
11.4   Real data example – monitoring CAPM                                    255


                        Sample partial autocorrelation function (pacf)
                        20
                        15
                        10
             pacf*E-2
                        5
                        0
                        -5
                        -10




                                  5         10            15    20
                                                 lag
    Figure 11.5. Partial autocorrelation function of CAPM regression resid-
    uals


estimate of %̂ = 0.20103 for the AR(1) model

                                       εt = % εt−1 + ηt                   (11.15)

has been obtained. Eventually, by plugging in the estimates of α, β and %,
and standardizing with the sample standard deviation of the pre-run residuals
series (see (11.15)) one gets a series of uncorrelated data with expectation 0 and
variance 1, i. e. our in-control state. If the fitted model (CAPM with AR(1)
noise) remains valid after the pre-run, the related standardized residuals behave
like in the in-control state. Now, the application of SPC, more precisely of a
twosided EWMA chart, allows to monitor the series in order to get signals, if
the original model was changed. Changes in α or β in (11.14) or in % in (11.15)
or in the residual variance of both models lead to shifts or scale changes in the
empirical residuals series. Hence, the probability of an alarm signaled by the
EWMA chart increases (with one exception only – decreased variances). In
this way a possible user of SPC in finance is able to monitor an estimated and
presumed CAPM.
256                                                               11 Statistical Process Control


In our example we use the parameter λ = 0.2 and an in-control ARL of 500,
such that the critical value is equal to c = 2.9623 (the Markov chain parameter
r was set to 100). Remark, that the computation of c is based on the normality
assumption, which is seldom fulfilled for financial data. In our example the
hypothesis of normality is rejected as well with a very small p value (Jarque-
Bera test with quantlet jarber). The estimates of skewness 0.136805 and
kurtosis 6.64844 contradict normality too. The fat tails of the distribution are
a typical pattern of financial data. Usually, the fat tails lead to a higher false
alarm rate. However, it would be much more complicated to fit an appropriate
distribution to the residuals and use these results for the ”correct” critical
value.
The Figures 11.6 and 11.7 present the EWMA graphs of the pre-run and the
monitoring period (from march, 19th, 1997 to april, 16th, 1999). In the pre-run

                                    Twosided EWMA chart
                         76       lambda = 0.20, in-control ARL = 499
              1
              0.5
        Z_t
              0
              -0.5
              -1




                     0        1              2                          3      4
                                                  t*E2

      Figure 11.6. Twosided EWMA chart of the standardized CAPM-AR(1)
      residuals for the pre-run period (06/01/95 - 03/18/97)


period the EWMA chart signals 4 times. The first 3 alarms seem to be outliers,
while the last points on a longer change. Nevertheless, the chart performs quite
typical for the pre-run period. The first signal in the monitoring period was
obtained at the 64th observation (i. e. 06/24/97). Then, we observe more
frequently signals than in the pre-run period, the changes are more persistent
and so one has to assume, that the pre-run model is no longer valid. A new
CAPM has therefore to be fitted and, if necessary, the considered portfolio has
to be reweighted. Naturally, a new pre-run can be used for the new monitoring
11.4   Real data example – monitoring CAPM                                          257


                                 Twosided EWMA chart
                      64       lambda = 0.20, in-control ARL = 499
             2
             1
       Z_t
             0
             -1
             -2




                  0        1       2                    3            4      5
                                               t*E2

   Figure 11.7. Twosided EWMA chart of the standardized CAPM-AR(1)
   residuals for the monitoring period (03/19/97 - 04/16/99)



period.
                                                                         XFGcapmar1.xpl




Bibliography
Brook, D. and Evans, D. A. (1972). An approach to the probability distribution
    of cusum run length, Biometrika 59: 539–548.
Crosier, R. B. (1986). A new two-sided cumulative quality control scheme,
    Technometrics 28: 187–194.
Crowder, S. V. (1986). A simple method for studying run-length distributions
    of exponentially weighted moving average charts, Technometrics 29: 401–
    407.
Elton, EJ. and Gruber, MJ. (1991). Modern portfolio theory and investment
    analysis, Wiley, 4. edition.
Knoth, S. (1998). Quasi-stationarity of CUSUM schemes for Erlang distribu-
    tions, Metrika 48: 31–48.
258                                             11 Statistical Process Control


Lorden, G. (1971). Procedures for reacting to a change in distribution, Annals
    of Mathematical Statistics 42: 1897–1908.
Lucas, J. M. (1976). The design and use of V-mask control schemes, Journal
    of Quality Technology 8: 1–12.
Lucas, J. M. and Crosier, R. B. (1982). Fast initial response for cusum quality-
    control schemes: Give your cusum a headstart, Technometrics 24: 199–
    205.
Lucas, J. M. and Saccucci, M. S. (1990). Exponentially weighted moving aver-
    age control schemes: properties and enhancements, Technometrics 32: 1–
    12.
Page, E. S. (1954). Continuous inspection schemes, Biometrika 41: 100–115.
Pollak, M. and Siegmund, D. (1975). Approximations to the expected sample
     size of certain sequential tests, Annals of Statistics 3: 1267–1282.
Pollak, M. and Siegmund, D. (1985). A diffusion process and its applications to
     detection a change in the drift of brownian motion, Biometrika 72: 267–
     280.
Roberts, S. W. (1959). Control-charts-tests based on geometric moving aver-
    ages, Technometrics 1: 239–250.
Shewhart, W. A. (1931). Economic Control of Quality of Manufactured Product,
    D. van Nostrand Company, Inc., Toronto, Canada.
Vance, L. (1986). ARL of cumulative sum control chart for controlling normal
    mean, Journal of Quality Technology 18: 189–193.
Waldmann, K.-H. (1986). Bounds to the distribution of the run length in
    general quality–control schemes, Statistische Hefte 27: 37–56.
12 An Empirical Likelihood
   Goodness-of-Fit Test for
   Diffusions
                        Song Xi Chen, Wolfgang Härdle and Torsten Kleinow


The analysis and prediction of diffusion processes plays a fundamental role
in the statistical analysis of financial markets. The techniques applied rely
on the actual model assumed for the drift and diffusion coefficient functions.
Mismodelling these coefficients might result in biased prediction and incorrect
parameter specification. We show in this chapter how the empirical likelihood
technique, Owen (1988) and Owen (1990), may be used to construct test pro-
cedures for the Goodness-of-Fit of a diffusion model. The technique is based
on comparison with kernel smoothing estimators. The Goodness-of-Fit test
proposed is based on the asymptotics of the empirical likelihood, which has
two attractive features. One is its automatic consideration of the variation as-
sociated with the nonparametric fit due to the empirical likelihood’s ability to
studentize internally. The other one is that the asymptotic distributions of the
test statistic are free of unknown parameters which avoids secondary plug-in
estimation.


12.1      Introduction
Let us assume a strictly stationary one-dimensional diffusion Z solving the
stochastic differential equation (SDE)

                   dZ(t) = m{Z(t)}dt + v{Z(t)}dW (t)                      (12.1)

where the driving process W = {W (t), t ∈ [0, ∞)} in (12.1) is a standard
Wiener process. In a mathematical finance setting, Z might be the price process
260           12   An Empirical Likelihood Goodness-of-Fit Test for Diffusions


of a stock, a stock market index or any other observable process. For the rest
of the chapter the drift m : R 7→ R, and the diffusion coefficient v : R 7→ [0, ∞)
in (12.1) are assumed to be sufficiently smooth, so that a unique solution of
(12.1) exists.
In applications we are mostly interested in the stationary solutions of (12.1).
For the existence of a stationary solution, the drift and the diffusion coefficient
must satisfy some conditions, Bibby and Sørensen (1995). The most important
condition is that the stationary forward Kolmogorov equation
                                         0
                       (1/2) v 2 (z)p(z) − m(z)p(z) = 0
                             

has a solution p(z) which is a probability density. If the initial value Z(0) is
distributed in accordance with p0 , and if it is independent of the Wiener process
W (t) in (12.1), then (12.1) defines a stationary process. The above condition
holds for the Ornstein-Uhlenbeck process with a normal stationary distribution,
and for the Cox-Ingersoll-Ross process with a Γ-distribution. For the statistical
analysis we assume that Z is observed at discrete times ti = i∆, i = 1, 2, . . . , n,
with a time step size ∆ > 0. From these observations we get a time series Z ∆
with certain dynamics specified in Section 12.2.
The aim of this chapter is to test a parametric model for the drift function m
against a nonparametric alternative, i.e.

                              H0 (m) : m(z) = mθ (z)                          (12.2)

where θ is an unknown parameter. The test statistic we apply is based on
the empirical likelihood. This concept was introduced by Chen, Härdle and
Kleinow (2001) for time series. To apply it in our situation we start with the
discretization of the diffusion process Z.


12.2      Discrete Time Approximation of a Diffusion
Let us assume that the diffusion process Z is observed at discrete times ti =
i∆, i = 1, 2, . . . , n, with a time step size ∆ > 0. Here we suppose that ∆ is
small or, more precisely, will tend to zero asymptotically. Under rather weak
assumptions, see Kloeden and Platen (1999), on the functions m and v 2 , it can
be shown that the Euler approximation
                            Z t                  Z t
       ∆            ∆
                                   ∆
                                                     v Z ∆ (tis ) dW (s)
                                                      
     Z (t) = Z (0) +            m Z (tis ) ds +                          (12.3)
                          0                       0
12.3   Hypothesis Testing                                                             261


with tis = max{ti , ti ≤ s}, converges in a mean square sense to Z as ∆ → 0,
i.e.,
                  lim E( sup |Z ∆ (t) − Z(t)|2 ) = 0, T > 0.           (12.4)
                     ∆→0         0≤t≤T


From now on, we assume that a discrete time approximation Z ∆ exists in the
form of (12.3), and that the property (12.4) holds. For the purposes of this
chapter, ∆ will always be considered small enough that one can substitute Z
by Z ∆ in our interpretation of the observed data. The increments of the Euler
approximation and so the observed data will have the form
   Z ∆ (ti+1 ) − Z ∆ (ti ) = m Z ∆ (ti ) ∆ + v Z ∆ (ti ) W (ti+1 ) − W (ti ) (12.5)
                                                      

for i = 0, 1, . . . .. The observations {Z ∆ (ti )}, i = 0, 1, . . . n form a time series.
As long as the step size ∆ is small enough the concrete choice of ∆ does not
matter since all the relevant information about the model is contained in the
drift m and diffusion coefficient v.
For the following we introduce the notation
            def                          def
       Xi   =     Z ∆ (ti ) ,       X = (X1 , . . . , Xn )
            def                                  def
       εi   =     W (ti+1 ) − W (ti ) ,
                                     ε = (ε1 , . . . , εn )
            def                                             def
       Yi   =     Xi+1 − Xi = m Xi ∆ + v Xi εi ,            Y = (Y1 , . . . , Yn )(12.6)

We can now apply the empirical likelihood Goodness-of-Fit test for stationary
time series developed by Chen et al. (2001).


12.3        Hypothesis Testing
Suppose (X, Y ) is defined as in (12.6) and let m(x) = E(Y |X = x) be the
conditional mean function, f be the density of the design points X, and σ 2 (x) =
Var(Y |X = x) be the conditional variance function of Y given X = x ∈ S, a
closed interval S ⊂ R. Suppose that {mθ |θ ∈ Θ} is a parametric model for the
mean function m and that θ̂ is an estimator of θ under this parametric model.
The interest is to test the null hypothesis:
                           H0 : m(x) = mθ (x)          for all x ∈ S
against a series of local smooth nonparametric alternatives:
                                H1 : m(x) = mθ (x) + cn ∆n (x),
262          12   An Empirical Likelihood Goodness-of-Fit Test for Diffusions


where cn is a non-random sequence tending to zero as n → ∞ and ∆n (x) is a
sequence of bounded functions.
The problem of testing against a nonparametric alternative is not new for an
independent and identically distributed setting, Härdle and Mammen (1993)
and Hart (1997). In a time series context the testing procedure has only been
considered by Kreiß, Neumann and Yao (1998) as far as we are aware. Also
theoretical results on kernel estimators for time series appeared only very re-
cently, Bosq (1998). This is surprising given the interests in time series for
financial engineering.
We require a few assumptions to establish the results in this chapter. These
assumptions are the following:

(i) The kernel K is Lipschitz continuous in [−1, 1], that is |K(t1 ) − K(t2 )| ≤
    C||t1 − t2 || where || · || is the Euclidean norm, and h = O{n−1/5 };
(ii) f , m and σ 2 have continuous derivatives up to the second order in S.

(iii) θ̂ is a parametric estimator of θ within the family of the parametric
      model, and
                        sup |mθ̂ (x) − mθ (x)| = Op (n−1/2 ).
                         x∈S

(iv) ∆n (x), the local shift in the alternative H1 , is uniformly bounded with
     respect to x and n, and cn = n−1/2 h−1/4 which is the order of the differ-
     ence between H0 and H1 .
(v) The process {(Xi , Yi )} is strictly stationary and α-mixing, i.e.
                       def
                  α(k) =         sup         |P(AB) − P(A)P(B)| ≤ aρk
                                       ∞
                             A∈F1i ,B∈Fi+k


      for some a > 0 and ρ ∈ [0, 1). Here Fkl denotes the σ-algebra of events
      generated by {(Xi , Yi ), k ≤ i ≤ l} for l ≥ k. For an introduction into
      α-mixing processes, see Bosq (1998) or Billingsley (1999). As shown by
      Genon-Catalot, Jeantheau and Larédo (2000) this assumption is fulfilled
      if Zt is an α-mixing process.
(vi) E{exp(a0 |Y1 − m(X1 )|)} < ∞ for some a0 > 0; The conditional density
     of X given Y and the joint conditional density of (X1 , Xl ) given (Y1 , Yl )
     are bounded for all l > 1.
12.4   Kernel Estimator                                                     263


Assumptions (i) and (ii) are standard in nonparametric curve estimation and
are satisfied for example for bandwidths selected by cross validation, whereas
(iii) and (iv) are common in nonparametric Goodness-of-Fit tests. Assumption
(v) means the data are weakly dependent. It is satisfied for a wide class of
diffusion processes.


12.4      Kernel Estimator
To develop a test about H0 we first introduce a nonparametric kernel estimator
for m. For an introduction into kernel estimation see Härdle (1990), Wand and
Jones (1995) and (Härdle, Müller, Sperlich and Werwatz, 2000). Without loss
of generality we assume that we are only interested in m(x) for x ∈ [0, 1] and
that f (x) ≥ C1 ∀x ∈ [0, 1] with a positive constant C1 . If in a particular
problem the data are supported by another closed interval, this problem can
be transformed by rescaling into an equivalent problem with data support [0, 1].
Let K be a bounded probability density function with a compact support on
[−1, 1] that satisfies the moment conditions:
                       Z               Z
                          uK(u)du = 0,    u2 K(u)du = σK
                                                       2



       2
where σK   is a positive constant. Let h be a positive smoothing bandwidth
which will be used to smooth (X, Y ).
The nonparametric estimator considered is the Nadaraya-Watson (NW) esti-
mator                         Pn
                                    Yi Kh (x − Xi )
                       m̂(x) = Pi=1
                                  n                              (12.7)
                                  i=1 Kh (x − Xi )

with Kh (u) = h−1 K(h−1 u). This estimator is calculated in XploRe by the
quantlets regest or regxest.
The parameter estimation of θ depends on the √ null hypothesis. We assume
here, that the parameter θ is estimated by a n-consistent estimator. Let
                                 P
                                   Kh (x − Xi )mθ̂ (Xi )
                      m̃θ̂ (x) = Pn
                                     i=1 Kh (x − Xi )

be the smoothed parametric model. The test statistic we are going to consider
is based on the difference between m̃θ̂ and m̂, rather than directly between m̂
264           12   An Empirical Likelihood Goodness-of-Fit Test for Diffusions


and mθ̂ , in order to avoid the issue of bias associated with the nonparametric
fit.
The local linear estimator can be used to replace the NW estimator in estimat-
ing m. However, as we compare m̂ with m̃θ̂ in formulating the Goodness-of-Fit
test, the possible bias associated with the NW estimator is not an issue here.
In addition, the NW estimator has a simpler analytic form.


12.5      The Empirical Likelihood concept

12.5.1     Introduction into Empirical Likelihood

Let us now as in Owen (1988) and Owen (1990) introduce the empirical likeli-
hood (EL) concept. Suppose a sample (U1 , . . . , Un ) of independent identically
distributed random variables in R1 according to a probability law with un-
known distribution function F and unknown density f . For an observation
(u1 , . . . , un ) of (U1 , . . . , Un ) the likelihood function is given by
                                            n
                                            Y
                                 L̄(f ) =         f (ui )                       (12.8)
                                            i=1

The empirical density calculated from the observations (u1 , . . . , un ) is
                                            n
                                   def   1X
                            fn (u) =           1{ui = u}                        (12.9)
                                         n i=1

where 1 denotes the indicator function. It is easy to see that fn maximizes
L̄(f ) in the class of all probability density functions.
The objective of the empirical likelihood concept is the construction of tests and
confidence intervals for a parameter θ = θ(F ) of the distribution of Ui . To keep
things simple we illustrate the empirical likelihood method for the expectation
E[Ui ]. The null hypothesis is E[Ui ] = θ. We can test this assumption based on
the empirical likelihood ratio
                                         def L̄{f (θ)}
                                R(F ) =                                        (12.10)
                                                L̄(fn )
where f (θ) maximizes L̄(f ) subject to
                                 Z
                                    Ui dF = θ.                                 (12.11)
12.5   The Empirical Likelihood concept                                           265


On a heuristic level we can reject the null hypothesis “under the true distribu-
tion F , U has expectation θ” if the ratio R(F ) is small relative to 1, i.e. the
test rejects if R(F ) < r for a certain level r ∈ (0, 1). More precisely, Owen
(1990) proves the following

THEOREM 12.1 Let (U1 , . . . , Un ) be iid one-dimensional random variables
with expectation θ and variance σ 2 . For a positive r < 1 let
                           Z                              
                    Cr,n =     Ui dF F  Fn , R(F ) ≥ r

be the set of all possible expectations of U with respect to distributions F dom-
inated by Fn (F  Fn ). Then it follows
                     lim P[θ ∈ Cr,n ] = P[χ2 ≤ −2 log r]                   (12.12)
                    n→∞

where χ2 is a χ2 -distributed random variable with one degree of freedom.

From Theorem 12.1 it follows directly
         h                                           i
    lim P − 2 log          max        R(F ) ≤ r EUi = θ = P[χ2 ≤ r]
   n→∞
                             R
                      {F |F Fn , Ui dF =θ}

This result suggests therefore to use the log-EL ratio
                                                                               
                                                                      L̄{f (θ)}
 −2 log          max         R(F  )  =  −2  log        max
                                                 {F |F Fn , Ui dF =θ} L̄(fn )
                   R                                    R
          {F |F Fn , Ui dF =θ}

as the basic element of a test about a parametric hypothesis for the drift func-
tion of a diffusion process.


12.5.2     Empirical Likelihood for Time Series Data

We will now expand the results in Section 12.5.1 to the case of time series data.
For an arbitrary x ∈ [0, 1] and any function µ we have
                                                        
               x − Xi
       E K               {Yi − µ(x)} E[Yi |Xi = x] = µ(x) = 0.            (12.13)
                  h
Let pi (x) be nonnegative numbers representing a density for
                             
                       x − Xi
                   K            {Yi − µ(x)}    i = 1, . . . , n
                          h
266               12     An Empirical Likelihood Goodness-of-Fit Test for Diffusions


The empirical likelihood for µ(x) is
                                                               n
                                                    def
                                                               Y
                                      L{µ(x)} = max                  pi (x)                         (12.14)
                                                               i=1
           Pn                      Pn                                  x−Xi
                                                                              
subject to   i=1 pi (x) = 1 and     i=1 pi (x)K                          h        {Yi − µ(x)} = 0. The
second condition reflects (12.13).
We find the maximum by introducing Lagrange multipliers and maximizing the
Lagrangian function
                         n
                         X
L(p, λ1 , λ2 )    =            log pi (x)
                         i=1
                                n                                                     ( n               )
                                X                   x − Xi                               X
                         −λ1          pi (x)K                     {Yi − µ(x)} − λ2             pi (x) − 1
                                i=1
                                                       h                                 i=1

The partial derivatives are
                                                         
 ∂L(p, λ1 , λ2 )      1                         x − Xi
                 =        − λ1 K                              {Yi − µ(x)} − λ2           ∀i = 1, . . . , n .
   ∂pi (x)         pi (x)                          h
With λ = λ1 /λ2 we obtain as a solution to (12.14) the optimal weights
                                                      −1
                    −1              x − Xi
         pi (x) = n     1 + λ(x)K            {Yi − µ(x)}               (12.15)
                                       h
where λ(x) is the root of
                           n           x−Xi
                                                     
                           X           K h   {Yi − µ(x)}
                                           x−Xi
                                                             = 0.                                  (12.16)
                           i=1
                               1 + λ(x)K     h    {Yi − µ(x)}

Note, that λ2 = n follows from
                 n                    n                           
                 X                    X                   x − Xi
                        pi (x) + λ          pi (x)K                    {Yi − µ(x)} = 1 .
                  i=1                 i=1
                                                             h

The maximum empirical likelihood is achieved at pi (x) = n−1 corresponding
to the nonparametric curve estimate µ(x) = m̂(x). For a parameter estimate θ̂
we get the maximum empirical likelihood for the smoothed parametric model
L{m̃θ̂ (x)}. The log-EL ratio is

                               def            L{m̃θ̂ (x)}
                 `{m̃θ̂ (x)} = −2 log                     = −2 log[L{m̃θ̂ (x)}nn ].
                                              L{m̂(x)}
12.5   The Empirical Likelihood concept                                                  267


To study properties of the empirical likelihood based test statistic we need to
evaluate `{m̃θ̂ (x)} at an arbitrary x first, which requires the following lemma
on λ(x) that is proved in Chen et al. (2001).

LEMMA 12.1 Under the assumptions (i)-(vi),

                           sup |λ(x)| = Op {(nh)−1/2 log(n)}.
                          x∈[0,1]


Let γ(x) be a random process with x ∈ [0, 1]. Throughout this chapter we use
the notation γ(x) = Õp (δn ) ( Õp (δn )) to denote the facts that supx∈[0,1] |γ(x)| =
Op (δn ) (Op (δn )) for a sequence δn .
                                                            j
                        Pn
Let Ūj (x) = (nh)−1 i=1 K x−X
                                         
                                     h
                                       i
                                           {Y i − m̃ θ̂ (x)}    for j = 1, 2, . . .. An appli-
cation of the power series expansion of 1/(1 − •) applied to (12.16) and Lemma
12.1 yields
 n                              X∞                                       
X        x − Xi                               j j   x − Xi                  j
    K             {Yi − m̃θ̂ (x)}      (−λ(x)) K             {Yi − m̃θ̂ (x)} = 0.
i=1
            h                      j=0
                                                       h

Inverting the above expansion, we have

                    λ(x) = Ū2−1 (x)Ū1 (x) + Õp {(nh)−1 log2 (n)}.                 (12.17)

From (12.15), Lemma 12.1 and the Taylor expansion of log(1 + •) we get

        `{m̃θ̂ (x)} = −2 log[L{m̃θ̂ (x)}nn ]
                         n                         
                        X                    x − Xi
                    = 2     log[1 + λ(x)K             {Yj − m̃θ̂ (x)}]
                        i=1
                                                h
                      =       2nhλ(x)Ū1 − nhλ2 (x)Ū2 + Õp {(nh)−1/2 log3 (n)}
                                                                                     (12.18)

Inserting (12.17) in (12.18) yields

          `{m̃θ̂ (x)} = nhŪ2−1 (x)Ū12 (x) + Õp {(nh)−1/2 log3 (n)}.               (12.19)

For any x ∈ [0, 1], let
                      Z 1                              Z 1
                           2
        v(x; h) = h       Kh (x − y)dy and b(x; h) = h     Kh (x − y)dy
                          0                                      0
268               12   An Empirical Likelihood Goodness-of-Fit Test for Diffusions


be the variance and the bias coefficient functions associated with the NW esti-
mator, respectively, see Wand and Jones (1995). Let
                        SI,h = {x ∈ [0, 1]| min (|x − 1|, |x|) > h}.
For h → 0, SI,h converges to the set of interior points in [0, 1]. If x ∈ SI,h , we
             def R
have v(x; h) = K 2 (x)dx and b(x; h) = 1. Define
                                               v(x; h)σ 2 (x)
                                  V (x; h) =                  .
                                               f (x)b2 (x; h)
Clearly, V (x; h)/(nh) is the asymptotic variance of m̂(x) when nh → ∞ which
is one of the conditions we assumed.
It was shown by Chen et al. (2001), that
                         n
                         X
      Ū1 (x)    = n−1         Kh (x − Xi ){Yi − m̃θ̂ (x)}
                         i=1
                         Xn
                 = n−1         Kh (x − Xi ){Yi − mθ (Xi )} + Õp (n−1/2 )
                         i=1

                 = fˆ(x){m̂(x) − m̃θ (x)} + Õp (n−1/2 )
                 = f (x)b(x; h){m̂(x) − m̃θ (x)} + Õp {n−1/2 + (nh)−1 log2 (n)}.
In the same paper it is shown, that condition (iii) entails supx∈[0,1] |Ū2 (x) −
f (x)v(x; h)σ 2 (x)| = Op (h). These and (12.19) mean that
         `{m̃θ̂ (x)} = (nh)Ū2−1 Ū12 + Õp {(nh)−1/2 log3 (n)}
                       = V −1 (x; h){m̂(x) − m̃θ (x)}2 + Õ{(nh)−1 h log2 (n)}(12.20)
Therefore, `{m̃θ̂ (x)} is asymptotically equivalent to a studentized L2 distance
between m̃θ̂ (x) and m̂(x). It is this property that leads us to use `{m̃θ̂ (x)} as
the basic building block in the construction of a global test statistic for distinc-
tion between m̃θ̂ and m̂ in the next section. The use of the empirical likelihood
as a distance measure and its comparison with other distance measures have
been discussed in Owen (1991) and Baggerly (1998).


12.6            Goodness-of-Fit Statistic
To extend the empirical likelihood ratio statistic to a global measure of
Goodness-of-Fit, we choose kn -equally spaced lattice points t1 , t2 , · · · , tkn in
12.6   Goodness-of-Fit Statistic                                                 269


[0, 1] where t1 = 0, tkn = 1 and ti ≤ tj for 1 ≤ i < j ≤ kn . We let kn → ∞
and kn /n → 0 as n → ∞. This essentially divides [0, 1] into kn small bins of
size (kn )−1 . A simple choice is to let kn = [1/(2h)] where [a] is the largest
integer less than a. This choice as justified later ensures asymptotic indepen-
dence among `{m̃θ̂ (tj )} at different tj s. Bins of different size can be adopted to
suit situations where there are areas of low design density. This corresponds to
the use of different bandwidth values in adaptive kernel smoothing. The main
results of this chapter is not affected by un-equal bins. For the purpose of easy
presentation, we will treat bins of equal size.
As `{m̃θ̂ (tj )} measures the Goodness-of-Fit at a fixed tj , an empirical likelihood
based statistic that measures the global Goodness-of-Fit is defined as
                                           kn
                                     def
                                           X
                            `n (m̃θ̂ ) =         `{m̃θ̂ (tj )}.
                                           j=1

The following theorem was proven by Chen et al. (2001).

THEOREM 12.2 Under the assumptions (i) - (vi),

                          {m̂(x) − m̃θ (x)}2
                        Z
 kn−1 `n (m̃θ̂ ) = (nh)                      dx + Op {kn−1 log2 (n) + h log2 (n)}
                                V (x)
                                                                             (12.21)
             def
where V (x) = limh→0 V (x, h).

Härdle and Mammen (1993) proposed the L2 distance
                            Z
                 Tn = nh1/2 {m̂(x) − m̃θ̂ (x)}2 π(x)dx

as a measure of Goodness-of-Fit where π(x) is a given weight function.
Theorem 12.2 indicates that the leading term of kn−1 `n (m̃θ̂ ) is h1/2 Tn with
π(x) = V −1 (x). The differences between the two test statistics are (a) the
empirical likelihood test statistic automatically studentizes via its internal al-
gorithm conducted at the background, so that there is no need to explicitly
estimate V (x); (b) the empirical likelihood statistic is able to capture other
features such as skewness and kurtosis exhibited in the data without using the
bootstrap resampling which involves more technical details when data are de-
pendent. If we choose kn = [1/(2h)] as prescribed, then the remainder term in
(12.21) becomes Op {h log2 (n)}.
270          12      An Empirical Likelihood Goodness-of-Fit Test for Diffusions


We will now discuss the asymptotic distribution of the test statistic `n (m̃θ̂ ).
Theorem 12.3 was proven by Chen et al. (2001).

THEOREM 12.3 Suppose assumptions (i) - (vi), then
                                  Z 1
                   −1           L
                  kn `n (m̃θ̂ ) →     N 2 (s)ds
                                                   0

where N is a Gaussian process on [0, 1] with mean
                                              p
                      E{N (s)} = h1/4 ∆n (s)/ V (s)
and covariance
                                             s
                                                                        (2)
                                                 f (s)σ 2 (s)      W0 (s, t)
        Ω(s, t) = Cov{N (s), N (t)} =
                                                 f (t)σ 2 (t)
                                                              q
                                                                  (2)         (2)
                                                               W0 (s, s)W0 (t, t)
where
                           Z 1
               (2)
            W0 (s, t) =          h−1 K{(s − y)/h}K{(t − y)/h}dy.                    (12.22)
                            0


As K is a compact kernel on [−1, 1], when both s and t are in SI (the interior
part of [0, 1]), we get from (12.22) with u = (s − y)/h
                                  Z hs
                     (2)
                  W0 (s, t) =          K(u)K{u − (s − t)/h}du
                                       s−1
                                       h
                                     Z ∞
                                 =       K(u)K{u − (s − t)/h}du
                                       −∞
                                              
                                           s−t
                                 = K (2)                                            (12.23)
                                            h
where K (2) is the convolution of K. The compactness of K also means that
  (2)
W0 (s, t) = 0 if |s − t| > 2h which implies Ω(s, t) = 0 if |s − t| > 2h. Hence
N (s) and N (t) are independent if |s − t| > 2h. As
                           f (s)σ 2 (s) = f (s)σ 2 (t) + O(h)
when |s − t| ≤ 2h, we get
                                             (2)
                                        W0 (s, t)
                      Ω(s, t) = q                             + O(h),               (12.24)
                                       (2)             (2)
                                     W0 (s, s)W0 (t, t)
12.6   Goodness-of-Fit Statistic                                                                    271


So, the leading order of the covariance function is free of σ 2 and f , i.e. Ω(s, t)
is completely known.
Let
                                                                 h1/4 ∆n (s)
                                     N0 (s) = N (s) −             p          .                   (12.25)
                                                                     V (s)
Then N0 (s) is a normal process with zero mean and covariance Ω. The bound-
                      (2)                           R1
edness of K implies W0 being bounded, and hence 0 Ω(t, t)dt < ∞. We will
                                          R1                              def
now study the expectation and variance of 0 N 2 (s)ds. Let T = T1 +T2 +T3 =
R1 2
 0
   N (s)ds where
                        Z 1
                T1 =        N02 (s)ds,
                                      0
                                                Z 1
                T2          =       2h1/4             V −1/2 (s)∆n (s)N0 (s)ds     and
                                              0
                                            Z 1
                T3          = h1/2                  V −1 (s)∆2n (s)ds.
                                                0

From some basic results on stochastic integrals, Lemma 12.2 and (12.24) fol-
lows,
             Z 1
   E(T1 ) =      Ω(s, s)ds = 1 and
                    0
Var(T1 )   = E[T12 ] − 1                                                                         (12.26)
             Z 1Z 1
                      E N02 (s)N02 (t) dsdt − 1
                                     
           =                                                                                     (12.27)
                    0       0
                    Z 1Z 1
           =    2                   Ω2 (s, t)dsdt
                        0       0
                    Z 1Z 1
                                          (2)                  (2)        (2)
           =    2                   {W0 (s, t)}2 {W0 (s, s)W0 (t, t)}−1 dsdt {1 + O(h2 )}
                        0       0

From (12.23) and the fact that the size of the region [0, 1] \ SI,h is O(h), we
have
              Z 1Z 1
                         (2)          (2)        (2)
                     {W0 (s, t)}2 {W0 (s, s)W0 (t, t)}−1 dsdt
                    0       0
                                           Z 1Z 1
            = {K (2) (0)}−2                               [K (2) {(s − t)/h}]2 dsdt {1 + O(1)}
                                            0         0
            = hK (4) (0){K                (2)
                                                (0)}−2 + O(h).
272           12     An Empirical Likelihood Goodness-of-Fit Test for Diffusions


Therefore,
                     Var(T1 ) = 2hK (4) (0){K (2) (0)}−2 + O(h2 ).
It is obvious that E(T2 ) = 0 and
                           Z Z
       Var(T2 ) = 4h   1/2
                                V −1/2 (s)∆n (s)Ω(s, t)V −1/2 (t)∆n (t)dsdt.

As ∆n and V −1 are bounded in [0, 1], there exists a constant C1 such that
                                       Z Z
                    Var(T2 ) ≤ C1 h1/2       Ω(s, t)dsdt.

Furthermore we know from the discussion above,
        Z Z                       Z Z                  (2)
                                                  W0 (s, t)
              Ω(s, t)dsdt    =          q                             dsdt + O(h)
                                                 (2)         (2)
                                            W0 (s, s)W0 (t, t)
                                  Z Z t+2h         (2)
                                                 W0 (s, t)
                             =                             dsdt + O(h)
                                      t−2h       K (2) (0)
                                      1
                             ≤ 4            C 0 h + C100 h
                                   K (2) (0) 1

with other constants C 0 1 and C100 , and thus, there exists a constant C2 , such
that
                                                3
                               Var(T2 ) ≤ C2 h 2 .

As T3 is non-random, we have
                                            Z 1
                     E(T )   =   1 + h1/2         V −1 (s)∆2n (s)ds    and          (12.28)
                                             0
                   Var{T } = 2hK (4) (0){K (2) (0)}−2 + O(h)                        (12.29)

(12.28) and (12.29) together with Theorem 12.3 give the asymptotic expecta-
tion and variance of the test statistic kn−1 `n (m̃θ̂ ).


12.7      Goodness-of-Fit test
We now turn our interest to the derivationR 1of the asymptotic distribution of
                                                                 Pkn
kn `n (m̃θ̂ ). We do this by discretizing 0 N (s)ds as (kn )−1 j=1
 −1                                             2
                                                                       N 2 (tj )
12.7   Goodness-of-Fit test                                                     273


where {tj }kj=1
             n
                are the mid-points of the original bins in formulating `n (m̃θ̂ ).
If we choose kn = [(2h)−1 ] such that |tj+1 − tj | ≥
                                                   p2h for all j, then {N (tj )}
are independent and each N (tj ) ∼ N(h1/4 ∆n (tj )/ V (tj ), 1). This means that
under the alternative H1
                              kn
                              X
                                    N 2 (tj ) ∼ χ2kn (γkn ),
                              j=1


a non-central χ2 randomPvariable with kn degree of freedom and the non-central
                         kn
component γkn = h1/4 { j=1   ∆2n (tj )/V (tj )}1/2 . Under H0 ,

                                kn
                                X
                                       N 2 (tj ) ∼ χ2kn
                                j=1


is χ2 -distributed with kn degrees of freedom. This leads to a χ2 test with
significance level α which rejects H0 if `n (m̃θ̂ ) > χ2kn ,α where χ2kn ,α is the
(1 − α)-quantile of χ2kn . The asymptotic power of the χ2 test is P{χ2kn (γkn ) >
χ2kn ,α }, which is sensitive to alternative hypotheses differing from H0 in all
directions.
                                                              Pkn
We may also establish the asymptotic normality of (kn )−1 i=1       N 2 (tj ) by ap-
plying the central limit theorem for a triangular array, which together with
(12.28) and (12.29) means that
                                 Z                                           
       −1           L         1/2     2     −1          (4)       (2)     −2
      kn `n (m̃θ̂ ) → N 1 + h       ∆n (s)V (s)ds, 2hK (0){K (0)}               .

A test for H0 with an asymptotic significance level α is to reject H0 if
                                                      q
                kn−1 `n (m̃θ̂ ) > 1 + zα {K (2) (0)}−1 2hK (4) (0)       (12.30)

where P(Z > zα ) = α and Z ∼ N(0, 1). The asymptotic power of this test is

                             K (2) (0) ∆2n (s)V −1 (s)ds
                                     R                  
                  1 − Φ zα −          p                   .         (12.31)
                                        2K (4) (0)

We see from the above that the binning based on the bandwidth value h pro-
vides a key role in the derivation of the asymptotic distributions. However, the
binning discretizes the null hypothesis and unavoidably leads to some loss of
274          12   An Empirical Likelihood Goodness-of-Fit Test for Diffusions


power as shown in the simulation reported in the next section. From the point
of view of retaining power, we would like to have the size of the bins smaller
than that prescribed by the smoothing bandwidth in order to increase the res-
olution of the discretized null hypothesis to the original H0 . However, this will
create dependence between the empirical likelihood evaluated at neighbouring
bins and make the above asymptotic
                                 R1     distributions invalid. One possibility is
to evaluate the distribution of 0 N02 (s)ds by using the approach of Wood and
Chan (1994) by simulating the normal process N 2 (s) under H0 . However, this
is not our focus here and hence is not considered in this chapter.


12.8      Application
Figure 12.1 shows the daily closing value of the S&P 500 share index from
the 31st December 1976 to the 31st December 1997, which covers 5479 trading
days. In the upper panel, the index series shows a trend of exponential form
which is estimated using the method given in Härdle, Kleinow, Korostelev,
Logeay and Platen (2001). The lower panel is the residual series after removing
the exponential trend. In mathematical finance one assumes often a specific
dynamic form of this residual series, Platen (2000). More precisely, Härdle
et al. (2001) assume the following model for an index process S(t)
                                           Z t        
                      S(t) = S(0)X(t) exp       η(s)ds                   (12.32)
                                               0

with a diffusion component X(t) solving the stochastic differential equation

                   dX(t) = a{1 − X(t)}dt + σX 1/2 (t)dW (t)               (12.33)

where W (t) is a Brownian motion and α and σ are parameters. Discretizing
this series with a sampling interval ∆ leads to the observations (Xi , Yi ) with
Yi = X(i+1)∆ − Xi∆ and Xi = Xi∆ , which will be α-mixing and fulfill all the
other conditions assumed in Section 12.3.
We now apply the empirical likelihood test procedure on the S&P 500 data
presented in Figure 12.1 to test the parametric mean function m(x) = a(1 − x)
given in the Cox-Ingersoll-Ross diffusion model (12.33). The process X is
restored from the observed residuals by the approach introduced in Härdle
et al. (2001). The parametric estimate for a is â = 0.00968 by using methods
based on the marginal distribution and the autocorrelation structure of X.
For details about the procedure see Härdle et al. (2001). The cross validation
12.8   Application                                                           275




  805.79



  622.40


  439.00


  255.61




       03.01.1977    01.01.1982   01.01.1987    01.01.1992    01.01.1997

  0.2154

  0.1129

  0.0104

 -0.0920


       03.01.1977    01.01.1982   01.01.1987    01.01.1992    01.01.1997



    Figure 12.1. The S&P 500 Data. The upper plot shows the S&P 500
    together with the exponential trend. The lower plot shows the residual
    process X.


is used to find the bandwidth h. However, the score function is monotonic
decreasing for h < 0.15 and then become a flat line for h ∈ [0.15, 0.8]. This
may be caused by the different intensity level of the design points. Further
investigation shows that a h-value larger (smaller) than 0.06 (0.02) produces an
oversmoothed (undersmoothed) curve estimate. Therefore, the test is carried
out for a set of h values ranging from 0.02 to 0.06. The P-values of the test as
a function of h are plotted in Figure 12.2.
276                12   An Empirical Likelihood Goodness-of-Fit Test for Diffusions




            0.8
            0.6
  P-value
            0.4
            0.2




                           0.03           0.04            0.05              0.06
                                         Bandwidth h

                     Figure 12.2. The p-values of the S&P 500 Data


The P-values indicate that there is insufficient evidence to reject the diffusion
model.


12.9              Simulation Study and Illustration
We investigate our testing procedure in two simulation studies. In our first
simulation we consider the time series model
                                        2
                     Yi = 2Yi−1 /(1 + Yi−1 ) + cn sin(Yi−1 ) + σ(Yi−1 )ηi

where {ηi } are independent and identically distributed uniform random vari-
ables in [−1, 1], ηi is independent of Xi = Yi−1 for each i, and σ(x) =
exp(−x2 /4). Note that the mean and the variance functions are both bounded
which ensures the series is asymptotically stationary. To realize the station-
arity, we pre-run the series 100 times with an initial value Y−100 = 0. The
empirical likelihood test statistic is calculated via the elmtest quantlet.
12.9                          Simulation Study and Illustration                                                                277



                        {el,p,kn,h2} = elmtest(x,y,model{,kernel{,h{,theta}}})
                             calculates the empirical likelihood test statistic

The first and the second parameter are the vectors of observations of X and
Y . The third parameter model is the name of a quantlet that implements the
parametric model for the null hypothesis. The optimal parameter kernel is
the name of the kernel K that is used to calculate the test statistic and h is the
bandwidth used to calculate Ū1 and Ū2 in (12.18). theta is directly forwarded
to the parametric model.
                                                                 XFGelsim1.xpl


For the simulation study the sample sizes considered for each trajectory are
n = 500 and 1000 and cn , the degree of difference between H0 and H1 , takes
value of 0, 0.03 and 0.06. As the simulation shows that the two empirical
likelihood tests have very similar power performance, we will report the results
for the test based on the χ2 distribution only. To gauge the effect of the
smoothing bandwidth h on the power, ten levels of h are used for each simulated
sample to formulate the test statistic.

                                        n = 500                                                      n = 1000
                                                                                         0.6




                                                                                                                   cn = 0.06
                                                                                         0.5




                                                    cn = 0.06
                        0.3
 power of the EL test




                                                                  power of the EL test
                                                                                         0.4
                                                                                         0.3
                        0.2




                                                                                         0.2




                                                    cn = 0.03                                                      cn = 0.03
                        0.1




                                                                                         0.1




                                                    cn = 0.00                                                      cn = 0.00

                               0.2     0.4        0.6       0.8                                0.2       0.4         0.6
                                      bandwidth h                                                    bandwidth h

                        Figure 12.3. Power of the empirical likelihood test. The dotted lines
                        indicate the 5% level
278             12   An Empirical Likelihood Goodness-of-Fit Test for Diffusions


Figure 12.3 presents the power of the empirical likelihood test based on 5000
simulation with a nominal 5% level of significance. We notice that when cn = 0
the simulated significance level of the test is very close to the nominal level for
large range of h values which is especially the case for the larger sample size
n = 1000. When cn increases, for each fixed h the power increases as the
distance between the null and the alternative hypotheses becomes larger. For
each fixed cn , there is a general trend of decreasing power when h increases.
This is due to the discretization of H0 by binning as discussed at the end of the
previous section. We also notice that the power curves for cn = 0.06 are a little
erratic although they maintain the same trend as in the case of cn = 0.03. This
may be due to the fact that when the difference between H0 and H1 is large, the
difference between the nonparametric and the parametric fits becomes larger
and the test procedure becomes more sensitive to the bandwidths.
In our second simulation study we consider an Ornstein-Uhlenbeck process Z
fluctuating about 0 that satisfies the stochastic differential equation
                             dZ(t) = aZ(t)dt + σdW (t)
where W is a standard Brownian Motion. The speed of adjustment parameter
a has to be negative to ensure stationarity. To apply the empirical likelihood
test we construct the time series X and Y as in Section 12.2, i.e.
           Xi    = Z ∆ (ti ) ,  X = (X1 , . . . , Xn )
           εi    = W (ti+1 ) − W (ti ) ,  ε = (ε1 , . . . , εn )
           Yi    = Xi+1 − Xi = aXi ∆ + σεi ,           Y = (Y1 , . . . , Yn )   (12.34)
It is well known that the transition probability of an Ornstein-Uhlenbeck pro-
cess is normal with conditional mean
                     E[Zt+∆ |Zt = x] = E[Xi+1 |Xi = x] = xea∆
and conditional variance
                                                          γ2
                                                             e−2β∆ − 1 .
                                                                      
          Var(Zt+∆ |Zt = x) = Var(Xi+1 |Xi = x) =
                                                         −2β
To simulate the process we use the simou quantlet.

      x = simou(n,a,s,delta)
           simulates a discretely observed path of an Ornstein-Uhlenbeck
           process via its transition probability law.
12.10   Appendix                                                            279


The number of observations is given by n+1/, a is the speed of adjustment
parameter a, s is the diffusion coefficient σ and delta is the time difference ∆
between two observations.
The proposed simulation procedure and the Goodness-of-Fit test are illustrated
in XFGelsim2.xpl.
                                                             XFGelsim2.xpl
.


12.10       Appendix
LEMMA 12.2 Let X, Y be standard normal random variables with covariance
Cov(X, Y ) = ρ, i.e.
                                   
                      X       0    1 ρ
                         ∼N     ,           .                   (12.37)
                      Y       0    ρ 1

Then we have:
                              Cov(X 2 , Y 2 ) = 2ρ2

PROOF:
                                            def      p
Define Z ∼ N(0, 1) independent of X and X 0 = ρX + 1 − ρ2 Z. Then we
get:                                      
                        X          0    1 ρ
                            ∼ N      ,             .
                       X0          0    ρ 1
                                                      2
                     Cov(X 2 , Y 2 ) = Cov(X 2 , X 0 ) = 2ρ2

    




Bibliography
Baggerly, K. A. (1998). Empirical likelihood as a goodness-of-fit measure,
    Biometrika 85: 535–547.
280          12   An Empirical Likelihood Goodness-of-Fit Test for Diffusions


Bibby, B. M. and Sørensen, M. (1995). Martingale estimation functions for
    discretely observed diffusion processes, Bernoulli 1(1/2): 17 – 40.
Billingsley, P. (1999). Convergence of Probability Measures, Wiley, New York.
Bosq, D. (1998). Nonparametric Statistics for Stochastic Processes, Vol. 110 of
    Lecture Notes in Statistics, Springer-Verlag, Heidelberg.
Chen, S. X., Härdle, W. and Kleinow, T. (2001). An empirical likelihood
    goodness-of-fit test for time series, Discussion paper 1, Sonderforschungs-
    bereich 373, Humboldt-Universität zu Berlin.
Genon-Catalot, V., Jeantheau, T. and Larédo, C. (2000). Stochastic volatility
    models as hidden markov models and statistical applications, Bernoulli
    6(6).
Härdle, W. (1990). Applied Nonparametric Regression, number 19 in Econo-
     metric Society Monographs, Cambridge University Press.
Härdle, W., Kleinow, T., Korostelev, A., Logeay, C. and Platen, E. (2001).
     Semiparametric diffusion estimation and application to a stock market
     index, Discussion Paper 24, Sonderforschungsbereich 373, Humboldt-
     Universität zu Berlin.
Härdle, W. and Mammen, E. (1993). Comparing nonparametric versus para-
     metric regression fits, Ann. Statist. 21: 1926–1947.
Härdle, W., Müller, M., Sperlich, S. and Werwatz, A. (2000). Non- and semi-
     parametric modelling, XploRe e-book, www.xplore-stat.de.
Hart, J. D. (1997). Nonparametric smoothing and lack-of-fit tests., Springer,
    New York.
Kloeden, P. E. and Platen, E. (1999). Numerical Solution of Stochastic Differ-
    ential Equations, Vol. 23 of Applications of Mathematics, Springer Verlag
    Berlin Heidelberg.
Kreiß, J.-P., Neumann, M. and Yao, Q. (1998). Bootstrap tests for simple
    structures in nonparametric time series regression. Discussion paper, Son-
    derforschungsbereich 373.
Owen, A. (1988). Empirical likelihood ratio confidence intervals for a single
   functional, Biometrika 75: 237–249.
12.10   Appendix                                                           281


Owen, A. (1990). Empirical likelihood ratio confidence regions, Ann. Statist.
   18: 90–120.
Owen, A. (1991). Empirical likelihood for linear model, Ann. Statist. 19: 1725–
   1747.
Platen, E. (2000). Risk premia and financial modelling without measure trans-
     formation. University of Technology Sydney, School of Finance & and
     Economics and Department of Mathematical Sciences.
Wand, M. and Jones, M. (1995). Kernel Smoothing, number 60 in Monographs
   in Statistics and Applied Probability, Chapman & Hall.
Wood, A. T. A. and Chan, G. (1994). Simulation of stationary gaussian process
   in [0, 1]d , J. Comp. Graph. Stat. 3: 409–432.
13 A simple state space model of
   house prices
                                               Rainer Schulz and Axel Werwatz




13.1      Introduction
For most people, purchasing a house is a major decision. Once purchased,
the house will by far be the most important asset in the buyer’s portfolio.
The development of its price will have a major impact on the buyer’s wealth
over the life cycle. It will, for instance, affect her ability to obtain credit
from commercial banks and therefore influence her consumption and savings
decisions and opportunities. The behavior of house prices is therefore of central
interest for (potential) house buyers, sellers, developers of new houses, banks,
policy makers or, in short, the general public.
An important property of houses is that they are different from each other.
Hence, while houses in the same market (i.e., the same city, district or neigh-
borhood) will share some common movements in their price there will at all
times be idiosyncratic differences due to differences in maintenance, design or
furnishing. Thus, the average or median price will depend not only on the
general tendency of the market, but also on the composition of the sample. To
calculate a price index for real estate, one has to control explicitly for idiosyn-
cratic differences. The hedonic approach is a popular method for estimating
the impact of the characteristics of heterogenous goods on their prices.
The statistical model used in this chapter tries to infer the common component
in the movement of prices of 1502 single-family homes sold in a district of Berlin,
Germany, between January 1980 and December 1999. It combines hedonic
regression with Kalman filtering. The Kalman filter is the standard statistical
tool for filtering out an unobservable, common component from idiosyncratic,
284                             13   A simple state space model of house prices


noisy observations. We will interpret the common price component as an index
of house prices in the respective district of Berlin. We assume that the index
follows an autoregressive process. Given this assumption, the model is writable
in state space form.
The remainder of this chapter is organized as follows. In the next section we
propose a statistical model of house prices and discuss its interpretation and
estimation. Section 13.4 introduces the data, while Section 13.5 describes the
quantlets used to estimate the statistical model. In this section we present also
the estimation results for our data. The final section gives a summary.


13.2      A Statistical Model of House Prices

13.2.1     The Price Function

The standard approach for constructing a model of the prices of heterogeneous
assets is hedonic regression (Bailey, Muth and Nourse, 1963; Hill, Knight and
Sirmans, 1997; Shiller, 1993). A hedonic model starts with the assumption
that on the average the observed price is given by some function f (It , Xn,t , β).
Here, It is a common price component that “drives” the prices of all houses, the
vector Xn,t comprises the characteristics of house n and the vector β contains
all coefficients of the functional form.
Most studies assume a log-log functional form and that It is just the constant
of the regression for every period (Clapp and Giaccotto, 1998; Cho, 1996). In
that case
                            pn,t = It + x>
                                         n,t β + εn,t .                 (13.1)
Here, pn,t denotes the log of the transaction price. The vector xn,t contains the
transformed characteristics of house n that is sold in period t. The idiosyncratic
influences εn,t are white noise with variance σε2 .
Following Schwann (1998), we put some structure on the behavior of the com-
mon price component over time by assuming that the common price compo-
nent follows an autoregressive moving average (ARMA) process. For our data
it turns out that the following AR(2) process

                           It = φ1 It−1 + φ2 It−2 + νt                      (13.2)

with I0 = 0 suffices. This autoregressive specification reflects that the market
for owner-occupied houses reacts sluggish to changing conditions and that any
13.2   A Statistical Model of House Prices                                   285


price index will thus exhibit some autocorrelation. This time-series-based way
of modelling the behavior of It is more parsimonious than the conventional
hedonic regressions (which need to include a seperate dummy variable for each
time period) and makes forecasting straightforward.


13.2.2     State Space Form

We can rewrite our model (13.1) and (13.2) in State Space Form (SSF)
(Gourieroux and Monfort, 1997). In general, the SSF is given as:
                             αt = ct + Tt αt−1 + εst                     (13.3a)


                              yt = dt + Zt αt + εm
                                                 t                       (13.3b)

                          εst ∼ (0, Rt ) , εm
                                            t ∼ (0, Ht ) .               (13.3c)
The notation partially follows Harvey (1989; 1993). The first equation is the
state equation and the second is the measurement equation. The characteristic
structure of state space models relates a series of unobserved values αt to a
set of observations yt . The unobserved values αt represent the behavior of the
system over time (Durbin and Koopman, 2001).
The unobservable state vector αt has the dimension K ⩾ 1, Tt is a square
matrix with dimension K × K, the vector of the observable variables yt has the
dimension Nt × 1. Here, Nt denotes the number of observations yt,n in period
t ⩽ T . If the number of observations varies through periods, we denote
                                   def
                               N =         max Nt .
                                         t=1,··· ,T

The matrix Zt contains constant parameters and other exogenous observable
variables. Finally, the vectors ct and dt contain some constants. The system
matrices ct , Tt , Rt , dt , Zt , and Ht may contain unknown parameters that have
to be estimated from the data.
In our model—that is (13.1) and (13.2)—, the common price component It and
the quality coefficients β are unobservable. However, whereas these coefficients
are constant through time, the price component evolves according to (13.2).
The parameters φ1 , φ2 , and σν2 of this process are unknown.
The observed log prices are the entries in yt of the measurement equation
and the characteristics are entries in Zt . In our data base we observe three
286                             13   A simple state space model of house prices


characteristics per object. Furthermore, we include the constant β0 . We can
put (13.1) and (13.2) into SSF by setting
                                                       
                 It             φ1 1 0 0 0 0               νt
             φ2 It−1         φ2 0 0 0 0 0             0
                                                       
              β0              0 0 1 0 0 0 s  0 
       αt = 
                       , Tt =  0 0 0 1 0 0 , εt =  0 
                                                                 (13.4a)
              β1                                       
              β2              0 0 0 0 1 0             0
                 β3              0 0 0 0 0 1                0

                                 1 0 x>
                                                            
                
                 p1,t
                       
                                          1,t            ε1,t
          yt =  . . .  , Zt =  ... ...  ..  , εm =  ..               (13.4b)
                                
                                            .  t       . 
                pNt ,t                    >
                                 1 0 xNt ,t             εNt ,t
For our model, both ct and dt are zero vectors. The transition matrices Tt are
non time-varying. The variance matrices of the state equation Rt are identical
for all t and equal to a 6 × 6 matrix, where the first element is σν2 and all other
elements are zeros. Ht is a Nt × Nt diagonal matrix with σε2 on the diagonal.
The variance σε2 is also an unknown parameter.
The first two elements of the state equation just resemble the process of the
common price component given in (13.2). However, we should mention that
there are other ways to put an AR(2) process into a SSF (see Harvey, 1993, p.
84). The remaining elements of the state equation are the implicit prices β of
the hedonic price equation (13.1). Multiplying the state vector αt with row n
of the matrix Zt gives It + x>
                             t,n β. This is just the functional relation (13.1) for
the log price without noise. The noise terms of (13.1) are collected in the SSF
in the vector εm                     m        s
                t . We assume that εt and εt are uncorrelated. This is required
for identification (Schwann, 1998, p. 274).


13.3      Estimation with Kalman Filter Techniques

13.3.1     Kalman Filtering given all parameters
                                                           def
Given the above SSF and all unknown parameters ψ = (φ1 , φ2 , σν2 , σε2 ), we
can use Kalman filter techniques to estimate the unknown coefficients β and
the process of It . The Kalman filter technique is an algorithm for estimating
the unobservable state vectors by calculating its expectation conditional on
13.3   Estimation with Kalman Filter Techniques                               287


information up to s ⩽ T . In the ongoing, we use the following general notation:
                                      def
                                 at|s = E[αt |Fs ]                        (13.5a)
denotes the filtered state vector and
                          def
                      Pt|s = E[(αt − at|s )(αt − at|s )> |Fs ]            (13.5b)
denotes the covariance matrix of the estimation error and Fs is a shorthand
for the information available at time s.
Generally, the estimators delivered by Kalman filtering techniques have min-
imum mean-squared error among all linear estimators (Shumway and Stof-
fer, 2000, Chapter 4.2). If the initial state vector, the noise εm and εs are
multivariate Gaussian, then the Kalman filter delivers the optimal estimator
among all estimators, linear and nonlinear (Hamilton, 1994, Chapter 13).
The Kalman filter techniques can handle missing observations in the measure-
ment equation (13.3b). For periods with less than N observations, one has to
adjust the measurement equations. One can do this by just deleting all elements
of the measurement matrices dt , Zt , Ht for which the corresponding entry in
yt is a missing value. The quantlets in XploRe use this procedure. Another
way to take missing values into account is proposed by Shumway and Stoffer
(1982; 2000): replace all missing values with zeros and adjust the other mea-
surement matrices accordingly. We show in Appendix 13.6.1 that both methods
deliver the same results. For periods with no observations the Kalman filter
techniques recursively calculate an estimate given recent information (Durbin
and Koopman, 2001).


13.3.2     Filtering and state smoothing

The Kalman filter is an algorithm for sequently updating our knowledge of the
system given a new observation yt . It calculates one step predictions conditional
on s = t. Using our general expressions, we have
                                   at = E[αt |Ft ]
and
                        Pt = E[(αt − at )(αt − at )> |Ft ] .
Here we use the standard simplified notation at and Pt for at|t and Pt|t . As a
by-product of the filter, the recursions calculate also
                                at|t−1 = E[αt |Ft−1 ]
288                              13   A simple state space model of house prices


and
                 Pt|t−1 = E[(αt − at|t−1 )(αt − at|t−1 )> |Ft−1 ] .
We give the filter recursions in detail in Subsection 13.5.3.
The Kalman smoother is an algorithm to predict the state vector αt given the
whole information up to T . Thus we have with our general notation s = T and

                                  at|T = E[αt |FT ]
the corresponding covariance matrix

                     Pt|T = E[(αt − at|T )(αt − at|T )> |FT ] .

We see that the filter makes one step predictions given the information up
to t ∈ {1, . . . , T } whereas the smoother is backward looking. We give the
smoother recursions in detail in Subsection 13.5.5.


13.3.3     Maximum likelihood estimation of the parameters

Given the system matrices ct , Tt , Rt , dt , Zt , and Ht , Kalman filtering tech-
niques are the right tool to estimate the elements of the state vector. However,
in our model some of these system matrices contain unknown parameters ψ.
These parameters have to be estimated by maximum likelihood.
Given a multivariate Gaussian error distribution, the value of the log likelihood
function l(ψ) for a general SSF is up to an additive constant equal to:
                               T                T
                            1X               1 X > −1
                        −         ln |Ft | −      v F vt .                 (13.9)
                            2 t=1            2 t=1 t t

Here,
                                def
                              vt = yt − dt − Zt at|t−1                    (13.10)
are the innovations of the filtering procedure and at|t−1 is the conditional
expectation of αt given information up to t − 1. As we have already mentioned,
these expressions are a by-product of the filter recursions. The matrix Ft
is the covariance matrix of the innovations at time t and also a by-product
of the Kalman filter. The above log likelihood is known as the prediction
error decomposition form (Harvey, 1989). Periods with no observations do not
contribute to the log likelihood function.
13.4   The Data                                                             289


Starting with some initial value, one can use numerical maximization methods
to obtain an estimate of the parameter vector ψ. Under certain regularity con-
ditions, the maximum likelihood estimator ψ̃ is consistent and asymptotically
normal. One can use the information matrix to calculate standard errors of ψ̃
(Hamilton, 1994).


13.3.4    Diagnostic checking

After fitting a SSF, one should check the appropriateness of the results by
looking at the standardized residuals
                                         −1/2
                                 vtst = Ft      vt .                    (13.11)
If all parameters of the SSF were known, vtst would follow a multivariate stan-
dardized normal distribution (Harvey, 1989, see also (13.9)). We know that Ft
is a symmetric matrix and that it should be positive definite (recall that it is
just the covariance matrix of the innovations vt ). So
                              −1/2           −1/2
                            Ft       = Ct Λt        Ct> ,               (13.12)
where the diagonal matrix Λt contains all eigenvalues of Ft and Ct is the ma-
trix of corresponding normalized eigenvectors (Greene, 2000, p.43). The stan-
dardized residuals should be distributed normally with constant variance, and
should show no serial correlation. It is a signal for a misspecified model when
the residuals do not possess these properties. To check the properties, one
can use standard test procedures. For example, a Q-Q plot indicates if the
quantiles of the residuals deviate from the corresponding theoretical quantiles
of a normal distribution. This plot can be used to detect non-normality. The
Jarque-Bera test for normality can also be used for testing non-normality of
the residuals (Bera and Jarque, 1982). This test is implemented in XploRe as
jarber.
In the empirical part, we combine Kalman filter techniques and maximum
likelihood to estimate the unknown parameters and coefficients of the SSF for
the house prices in a district of Berlin.


13.4      The Data
The data set is provided by the Gutachterausschuß für Grundstückswerte in
Berlin, an expert commission for Berlin’s real estate market. The commission
290                              13    A simple state space model of house prices


collects information on all real estate transactions in Berlin in a data base called
Automatisierte Kaufpreissammlung.
Here, we use data for 1502 sales of detached single-family houses in a district
of Berlin for the years 1980 to 1999, stored in MD*BASE. Besides the price,
we observe the size of the lot, the floor space, and the age of the house. The
data set XFGhouseprice contains the log price observations for all 80 quarters.
There are at most N = 43 observations in any quarter. The following lines of
XploRe code

  Y = read("XFGhouseprice.dat")
  Y[1:20,41:44]

can be used to take a look at the entries of XFGhouseprice. Every column
gives the observations for one quarter. Thus, in columns 41 to 44 we find the
observations for all quarters of 1990. If less than 43 transactions are observed
in a quarter the remaining entries are filled with the missing value code NaN.
Only in the first quarter of the year 1983 we observe 43 transactions.
The corresponding data set XFGhousequality contains the observed charac-
teristics of all houses sold. They are ordered in the following way: each column
contains all observations for a given quarter. Remember that for every house
we observe log size of the lot, log size of the floor space and age. The first
three rows of a column refer to the first house in t, the next three to the second
house and so on.
Let us look at the characteristics of the first two observations in 1990:1. Just
type the following lines in the XploRe input window

X = read("XFGhousequality.dat")
X[1:6,41]’

After compiling, you get the output

[1,]     6.1048     4.7707    53      6.5596   5.1475   13

The size of the lot for the second house is about 706 square meters (just take
the antilog). The size of the floor space is 172 square meters and the age is 13
years.
13.4   The Data                                                              291


The following table shows summary statistics of our Berlin house price data.

       "========================================================="
       " Summary statistics for the Berlin house price data       "
       "========================================================="
       " Sample for 80 quarters with 1502 observations            "
       "                                                          "
       "     Observations per period                              "
       "     ----------------------------------------------------"
       "        Minimum = 4      Average = 18.77    Maximum = 43 "
       "                                                          "
       "     Transaction prices (in thousand DM)                  "
       "     ----------------------------------------------------"
       "        Minimum = 100.00        Average   = 508.46        "
       "        Maximum = 1750.01       Std. Dev. = 197.92        "
       "                                                          "
       "     Size of the lot (in square meters)                   "
       "     ----------------------------------------------------"
       "        Minimum = 168.00        Average   = 626.18        "
       "        Maximum = 2940.00       Std. Dev. = 241.64        "
       "                                                          "
       "     Size of the floor space (in square meters)           "
       "     ----------------------------------------------------"
       "        Minimum = 46.00         Average   = 144.76        "
       "        Maximum = 635.00        Std. Dev. = 48.72         "
       "                                                          "
       "     Age of the building (in years)                       "
       "     ----------------------------------------------------"
       "        Minimum =   0           Average   = 28.59         "
       "        Maximum = 193           Std. Dev. = 21.58         "
       "========================================================="
                                                        XFGsssm1.xpl


Not surprisingly for detached houses there are large differences in the size of
the lot. Some houses were new in the period of the sale while one was 193
years old. That is a good example for the potential bias of the average price
per quarter as a price index. If we do not control explicitly for depreciation we
might obtain a low price level simply because the houses sold in a quarter were
old.
292                              13   A simple state space model of house prices


Nevertheless, the average price per quarter can give an indication of the price
level. Figure 13.1 shows the average price per quarter along with confidence
intervals at the 90% level. Instead of the average price, we could also calculate
an average adjusted price, where the most important characteristic is used for
the adjustment. Such adjustment is attained by dividing the price of every
house by—for example—the respective size of the lot. However, even in that
case we would control only for one of the observed characteristics. In our model
we will control for all of the observed characteristics.




      1100.00



       900.00



       700.00



       500.00



       300.00


            1980:1      1985:1           1990:1        1995:1         1999:4


      Figure 13.1. Average price per quarter, units are Deutsche Mark (1
      DM ≈ 0.511 EURO). Confidence intervals are calculated for the 90%
      level.
                                                               XFGsssm2.xpl
13.5   Estimating and filtering in XploRe                                   293


13.5      Estimating and filtering in XploRe

13.5.1     Overview

The procedure for Kalman filtering in XploRe is as follows: first, one has
to set up the system matrices using gkalarray. The quantlet adjusts the
measurement matrices for missing observations.
After the set up of the system matrices, we calculate the Kalman filter with
gkalfilter. This quantlet also calculates the value of the log likelihood
function given in equation (13.9). That value will be used to estimate the
unknown parameters of the system matrices with numerical maximization
(Hamilton, 1994, Chapter 5). The first and second derivatives of the log like-
lihood function will also be calculated numerically. To estimate the unknown
state vectors—given the estimated parameters—we use the Kalman smoother
gkalsmoother. For diagnostic checking, we use the standardized residuals
(13.11). The quantlet gkalresiduals calculates these residuals.


13.5.2     Setting the system matrices

    gkalarrayOut = gkalarray(Y,M,IM,XM)
         sets the system matrices for a time varying SSF

The Kalman filter quantlets need as arguments arrays consisting of the system
matrices. The quantlet gkalarray sets these arrays in a user-friendly way. The
routine is especially convenient if one works with time varying system matrices.
In our SSF (13.4), only the system matrix Zt is time varying. As one can see
immediately from the general SSF (13.3), possibly every system matrix can be
time varying.
The quantlet uses a three step procedure to set up the system matrices.

  1. To define a system matrix all constant entries must be set to their re-
     spective values and all time varying entries must be set to an arbitrary
     number (for example to 0).
  2. One must define an index matrix for every system matrix. An entry is
     set to 0 when its corresponding element in the system matrix is constant
     and to some positive integer when it is not constant.
294                                   13   A simple state space model of house prices


  3. In addition, for every time varying system matrix, one also has to specify
     a data matrix that contains the time varying entries.

gkalarray uses the following notation: Y denotes the matrix of all observations
[y1 , . . . , yT ], M denotes the system matrix, IM denotes the corresponding index
matrix and XM the data matrix.
If all entries of a system matrix are constant over time, then the parameters
have already been put directly into the system matrix. In this case, one should
set the index and the data matrix to 0.
For every time varying system matrix, only constant parameters—if there are
any—have already been specified with the system matrix. The time-varying
coefficients have to be specified in the index and the data matrix.
In our example, only the matrices Zt are time varying. We have
                                         
                      1 0 1 0 0 0
            Z =  ... ... ... ... ... ... 
                def                      

                            1 0      1 0    0 0
                                                                            
                            0 0      0      1             2             3
                           0 0      0      4             5            6
                     def
            IZ       =
                                                                
                            .. ..   ..     ..            ..           ..
                           . .       .      .             .            .
                            0 0      0 (3N + 1) (3N + 2) (3N + 3)
                     def
            XZ       =     XFGhousequality

The system matrix Zt has the dimension (N × 6). The non-zero entries in the
index matrix IZ prescribe the rows of XFGhousequality, which contain the
time varying elements.
The output of the quantlet is an array that stacks the system matrices one
after the other. For example, the first two rows of the system matrix Z41 are

[1,]             1             0           1     6.1048        4.7707            53
[2,]             1             0           1     6.5596        5.1475            13
                                                                             XFGsssm3.xpl
It is easy to check that the entries in the last three columns are just the char-
acteristics of the first two houses that were sold in 1990:1 (see p. 290).
13.5    Estimating and filtering in XploRe                                  295


13.5.3      Kalman filter and maximized log likelihood

       {gkalfilOut,loglike} = gkalfilter(Y,mu,Sig,ca,Ta,Ra,
                                             da,Za,Ha,l)
           Kalman filters a time-varying SSF

We assume that the initial state vector at t = 0 has mean µ and covariance
matrix Σ. Recall, that Rt and Ht denote the covariance matrix of the state noise
and—respectively—of the measurement noise. The general filter recursions are
as follows:
Start at t = 1: use the initial guess for µ and Σ to calculate

                              a1|0   = c1 + T1 µ
                              P1|0   = T1 ΣT1> + R1
                               F1    = Z1 P1|0 Z1> + H1

and


                    a1   = a1|0 + P1|0 Z1> F1−1 (y1 − Z1 a1|0 − d1 )
                    P1   = P1|0 − P1|0 Z1> F1−1 Z1 P1|0

Step at t ⩽ T : using at−1 and Pt−1 from the previous step, calculate

                            at|t−1   = ct + Tt at−1
                            Pt|t−1   = Tt Pt−1 Tt> + Rt
                                Ft   = Zt Pt|t−1 Zt> + Ht

and

               at    = at|t−1 + Pt|t−1 Zt> Ft−1 (yt − Zt at|t−1 − dt )
               Pt    = Pt|t−1 − Pt|t−1 Zt> Ft−1 Zt Pt|t−1

The implementation for our model is as follows: The arguments of gkalfilter
are the data matrix Y, the starting values mu (µ), Sig (Σ) and the array for
every system matrix (see section 13.5.2). The output is a T + 1 dimensional
296                              13   A simple state space model of house prices


array of [at Pt ] matrices. If one chooses l = 1 the value of the log likelihood
function (13.9) is calculated.
Once again, the T + 1 matrices are stacked “behind each other”, with the t = 0
matrix at the front and the t = T matrix at the end of the array. The first
entry is [µ Σ].
How can we provide initial values for the filtering procedure? If the state
matrices are non time-varying and the transition matrix T satisfies some sta-
bility condition, we should set the initial values to the unconditional mean and
variance of the state vector. Σ is given implicitly by

                         vec(Σ) = (I − T ⊗ T )−1 vec(R) .

Here, vec denotes the vec-operator that places the columns of a matrix below
each other and ⊗ denotes the Kronecker product. Our model is time-invariant.
But does our transition matrix fulfill the stability condition? The necessary and
sufficient condition for stability is that the characteristic roots of the transition
matrix T should have modulus less than one (Harvey, 1989, p. 114). It is easy
to check that the characteristic roots λj of our transition matrix (13.4a) are
given as                                   p
                                      φ1 ± φ21 + 4φ2
                             λ1,2 =                    .
                                             2
For example, if φ1 and φ2 are both positive, then φ1 + φ2 < 1 guarantees real
characteristic roots that are smaller than one (Baumol, 1959, p. 221). However,
when the AR(2) process of the common price component It has a unit root,
the stability conditions are not fulfilled. If we inspect Figure 13.1, a unit root
seems quite plausible. Thus we can not use this method to derive the initial
values.
If we have some preliminary estimates of µ, along with preliminary measures of
uncertainty—that is a estimate of Σ—we can use these preliminary estimates
as initial values. A standard way to derive such preliminary estimates is to
use OLS. If we have no information at all, we must take diffuse priors about
the initial conditions. A method adopted by Koopman, Shephard and Doornik
(1999) is setting µ = 0 and Σ = κI where κ is an large number. The large
variances on the diagonal of Σ reflect our uncertainty about the true µ.
We will use the second approach for providing some preliminary estimates as
initial values. Given the hedonic equation (13.1), we use OLS to estimate It ,
          2
β, and σm    by regressing log prices on lot size, floor space, age and quarterly
time dummies. The estimated coefficients of lot size, floor space and age are
13.5   Estimating and filtering in XploRe                                      297


                         coefficient                 t-statistic     p-value
            log lot size     0.2675                       15.10       0.0000
        log floor space      0.4671                       23.94       0.0000
                    age     -0.0061                      -20.84       0.0000

                             Regression diagnostics
                     R2         0.9997 Number of observations           1502
                         2
                     R          0.9997 F-statistic                  64021.67
                     σ̂ε2       0.4688 Prob(F-statistic)              0.0000

                   Table 13.1. Results for hedonic regression


reported in Table 13.1. They are highly significant and reasonable in sign and
magnitude. Whereas lot size and floor space increase the price on average, age
has the opposite effect. According to (13.1), the common price component It
is a time-varying constant term and is therefore estimated by the coefficients
of the quarterly time dummies, denoted by {Iˆt }80   t=1 . As suggested by (13.2),
these estimates are regressed on their lagged values to obtain estimates of the
unknown parameters φ1 , φ2 , and σs2 . Table 13.2 presents the results for an
AR(2) for the Iˆt series. The residuals of this regression behave like white noise.

                      coefficient                  t-statistic p-value
            constant      0.5056                       1.3350 0.1859
                 ˆ
                It−1      0.4643                       4.4548 0.0000
                Iˆt−2     0.4823                       4.6813 0.0000

                         Regression diagnostics
                  R2        0.8780 Number of observations             78
                    2
                  R           0.8747 F-statistic                   269.81
                  σ̂ν2        0.0063 Prob(F-statistic)             0.0000

        Table 13.2. Time series regression for the quarterly dummies
298                               13     A simple state space model of house prices


We should remark that
                                       φ̂1 + φ̂2 ≈ 1
and thus the process of the common price component seems to have a unit
root.
Given our initial values we maximize the log likelihood (13.9) numerically with
                                 def
respect to the elements of ψ ∗ = (φ1 , φ2 , log(σν2 ), log(σε2 )). Note that ψ ∗ differs
from ψ by using the logarithm of the variances σν2 and σε2 . This transformation is
known to improve the numerical stability of the maximization algorithm, which
employs nmBFGS of XploRe’s nummath library. Standard errors are computed
from inverting the Hessian matrix provided by nmhessian. The output of the
maximum likelihood estimation procedure is summarized in Table 13.3, where
we report the estimates of σν2 and σε2 obtained by retransforming the estimates
of log(σν2 ) and log(σε2 )).

                              estimate std error t-value p-value
                ψ̂1 = φ̂1         0.783    0.501    1.56    0.12
                ψ̂2 = φ̂2         0.223    0.504    0.44    0.66
                        2
                ψ̂1 = σ̂ν       0.0016     0.012    1.36    0.17
                        2
                ψ̂2 = σ̂ε         0.048    0.002    26.7       0
                average log likelihood   0.9965

      Table 13.3. Maximum likelihood estimates of the elements of ψ
        XFGsssm4.xpl

Note that the maximum likelihood estimates of the AR coefficients φ1 and φ2
approximately sum to 1, again pointing towards a unit root process for the
common price component.


13.5.4      Diagnostic checking with standardized residuals

      {V,Vs} = gkalresiduals(Y,Ta,Ra,da,Za,Ha,gkalfilOut)
          calculates innovations and standardized residuals

The quantlet gkalresiduals checks internally for the positive definiteness of
Ft . An error message will be displayed when Ft is not positive definite. In such
a case, the standardized residuals are not calculated.
13.5       Estimating and filtering in XploRe                              299


The output of the quantlet are two N × T matrices V and Vs. V contains the
innovations (13.10) and Vs contains the standardized residuals (13.11).
The Q-Q plot of the standardized residuals in Figure 13.2 shows deviations
from normality at both tails of the distribution.



                           Q-Q Plot of the standardized residuals
             0
       Y

             -5




                     -5                          0
                                             X


   Figure 13.2. Deviations of the dotted line from the straight line are
   evidence for a nonnormal error distribution
                                                             XFGsssm5.xpl


This is evidence, that the true error distribution might be a unimodal dis-
tribution with heavier tails than the normal, such as the t-distribution. In
this case the projections calculated by the Kalman filter no longer provide the
conditional expectations of the state vector but rather its best linear predic-
tion. Moreover the estimates of ψ calculated from the likelihood (13.9) can be
interpreted as pseudo-likelihood estimates.
300                               13   A simple state space model of house prices


13.5.5     Calculating the Kalman smoother

      gkalsmoothOut = gkalsmoother(Y,Ta,Ra,gkalfilOut)
          provides Kalman smoothing of a time-varying SSF

The Kalman filter is a convenient tool for calculating the conditional expecta-
tions and covariances of our SSF (13.4). We have used the innovations of this
filtering technique and its covariance matrix for calculating the log likelihood.
However, for estimating the unknown state vectors, we should use in every step
the whole sample information up to period T . For this task, we use the Kalman
smoother.
The quantlet gkalsmoother needs as argument the output of gkalfilter. The
output of the smoother is an array with [at|T Pt|T ] matrices. This array of
dimension T + 1 starts with the t = 0 matrix and ends with the matrix for
t = T . For the smoother recursions, one needs at , Pt and Pt|t−1 for t = 1 . . . T .
Then the calculation procedure is as follows:
Start at t = T :
                                   aT |T   = aT
                                   PT |T   = PT
Step at t < T :
                                       −1
                      Pt∗         >
                            = Pt Tt+1 Pt+1|t
                     at|T   = at + Pt∗ (at+1|T − Tt+1 at )
                     Pt|T   = Pt + Pt∗ (Pt+1|T − Pt+1|t )Pt∗>

The next program calculates the smoothed state vectors for our SSF form,
given the estimated parameters ψ̃. The smoothed series of the common price
component is given in Figure 13.3. The confidence intervals are calculated
using the variance of the first element of the state vector.
Comparison with the average prices given in Figure 13.1 reveals that the com-
mon price component is less volatile than the simple average. Furthermore,
a table for the estimated hedonic coefficients—that is β—is generated, Table
13.4.
Recall that these coefficients are just the last three entries in the state vector αt .
According to our state space model, the variances for these state variables are
13.5   Estimating and filtering in XploRe                                        301



                        Price of a ‘standard house’ from 1980 to 2000


        0.80


        0.60


        0.40


        0.20


        0.00


       -0.20



               1980:1       1985:1          1990:1          1995:1      1999:4



   Figure 13.3. Smoothed common price component. Confidence intervals
   are calculated for the 90% level.
                                                          XFGsssm6.xpl


[1,] "==========================================="
[2,] " Estimated hedonic coefficients            "
[3,] "==========================================="
[4,] " Variable        coeff. t-Stat. p-value "
[5,] " ----------------------------------------- "
[6,] " log lot size    0.2664   21.59    0.0000    "
[7,] " log floor area 0.4690    34.33    0.0000    "
[8,] " age            -0.0061 -29.43     0.0000    "
[9,] "==========================================="

       Table 13.4. Estimated hedonic coefficients β.          XFGsssm6.xpl


zero. Thus, it is not surprising that the Kalman smoother produces constant
estimates through time for these coefficients. In the Appendix 13.6.2 we give
a formal proof of this intuitive result.
302                              13   A simple state space model of house prices


The estimated coefficient of log lot size implies that, as expected, the size of the
lot has an positive influence on the price. The estimated relative price increase
for an one percent increase in the lot size is about 0.27%. The estimated effect
of an increase in the floor space is even larger. Here, a one percent increase in
the floor space lets the price soar by about 0.48%. Finally, note that the price
of a houses is estimated to decrease with age.


13.6      Appendix

13.6.1     Procedure equivalence

We show that our treatment of missing values delivers the same results as the
procedure proposed by Shumway and Stoffer (1982; 2000). For this task, let us
assume that the (N × 1) vector of observations t

                  yt> = y1,t . y3,t . y5,t . . . yN,t
                                                        

has missing values. Here, observations 2 and 4 are missing. Thus, we have only
Nt < N observations. For Kalman filtering in XploRe, all missing values in yt
and the corresponding rows and columns in the measurement matrices dt , Zt ,
and Ht , are deleted. Thus, the adjusted vector of observations is
                                                       
                      yt,1 = y1,t y3,t y5,t . . . yN,t

where the subscript 1 indicates that this is the vector of observations used in the
XploRe routines. The procedure of Shumway and Stoffer instead rearranges the
vectors in such a way that the first Nt entries are the observations—and thus
given by yt,1 —and the last (N − Nt ) entries are the missing values. However,
all missing values must be replaced with zeros.
For our proof, we use the following generalized formulation of the measurement
equation                                       m
                       yt,1      d       Z           ε
                             = t,1 + t,1 αt + t,1
                       yt,2      dt,2    Zt,2        εmt,2

and                          m                        
                             ε       Ht,11       Ht,12
                         cov t,1   =                         .
                             εmt,2   Ht,12       Ht,22
yt,1 contains the observations and yt,2 the missing values. The procedure of
Shumway and Stoffer employs the generalized formulation given above and sets
13.6   Appendix                                                                    303


yt,2 = 0, dt,2 = 0, Zt,2 = 0, and Ht,12 = 0 (Shumway and Stoffer, 2000, p. 330).
We should remark that the dimensions of these matrices also depend on t via
(N −Nt ). However, keep notation simple we do not make this time dependency
explicit. It is important to mention that matrices with subscript 1 and 11 are
equivalent to the adjusted matrices of XploRe’s filtering routines.
First, we show by induction that both procedures deliver the same results for
the Kalman filter. Once this equivalence is established, we can conclude that
the smoother also delivers identical results.
PROOF:
Given µ and Σ, the terms a1|0 and P1|0 are the same for both procedures. This
follows from the simple fact that the first two steps of the Kalman filter do not
depend on the vector of observations (see Subsection 13.5.3).
Now, given at|t−1 and Pt|t−1 , we have to show that also the filter recursions

 at = at|t−1 + Pt|t−1 Zt> Ft−1 vt ,     Pt = Pt|t−1 − Pt|t−1 Zt> Ft−1 Zt Pt|t−1 (13.13)

deliver the same results. Using ss to label the results of the Shumway and
Stoffer procedure, we obtain by using
                                             
                                     def Zt,1
                               Zt,ss =
                                          0

that
                                         >
                                                                   
                            Zt,1 Pt|t−1 Zt,1     0    Ht,11    0
                 Ft,ss =                            +                     .
                                   0             0     0      Ht,22
The inverse is given by (Sydsæter, Strøm and Berck, 2000, 19.49)
                                     −1        
                             −1      F      0
                            Ft,ss = t,1     −1                                 (13.14)
                                       0  Ht,22

where Ft,1 is just the covariance matrix of the innovations of XploRe’s proce-
dure. With (13.14) we obtain that
                             >    −1
                                         > −1       
                           Zt,ss Ft,ss = Zt,1 Ft,1 0

and accordingly for the innovations
                                                 
                                                 vt,1
                                      vt,ss =         .
                                                  0
304                             13    A simple state space model of house prices


We obtain immediately
                          >     −1            >    −1
                         Zt,ss Ft,ss vt,ss = Zt,1 Ft,1 vt,1 .

Plugging this expression into (13.13)—taking into account that at|t−1 and
Pt|t−1 are identical—delivers

                       at,ss = at,1    and Pt,ss = Pt,1 .

This completes the first part of our proof.
The Kalman smoother recursions use only system matrices that are the same
for both procedures. In addition to the system matrices, the output of the
filter is used as an input, see Subsection 13.5.5. But we have already shown
that the filter output is identical. Thus the results of the smoother are the
same for both procedures as well. 



13.6.2     Smoothed constant state variables

We want to show that the Kalman smoother produces constant estimates
through time for all state variables that are constant by definition. To proof
this result, we use some of the smoother recursions given in Subsection 13.5.5.
First of all, we rearrange the state vector such that the last k ⩽ K variables
are constant. This allows the following partition of the transition matrix
                                                   
                                    T11,t+1 T12,t+1
                           Tt+1 =                                       (13.15)
                                       0        I

with the k×k identity matrix I. Furthermore, we define with the same partition
                                                        
                          def              P̃     P̃12,t
                                     >
                      P̃t = Tt+1 Pt Tt+1 = 11,t
                                           P̃12,t P̃22,t

The filter recursion for the covariance matrix are given as
                                           >
                         Pt+1|t = Tt+1 Pt Tt+1 + Rt+1

where the upper left part of Rt+1 contains the covariance matrix of the dis-
turbances for the stochastic state variables. We see immediately that only the
upper left part of Pt+1|T is different from P̃t .
13.6   Appendix                                                                          305


Our goal is to show that for the recursions of the smoother holds
                                                
                              ∗    M11,t M12,t
                           Pt =                    ,                                  (13.16)
                                     0       I

where both M s stand for some complicated matrices. With this result at hand,
we obtain immediately
                            akt|T = akt+1|T = akT                     (13.17)
for all t, where akt|T contains the last k elements of the smoothed state at|T .
Furthermore, it is possible to show with the same result that the lower right
partition of Pt|T is equal to the lower right partition of PT for all t. This lower
right partition is just the covariance matrix of akt|T . Just write the smoother
recursion
                                     >
                    Pt|T = Pt (I − Tt+1 Pt∗> ) + Pt∗ Pt+1|T Pt∗> .
Then check with (13.15) and (13.16) that the lower-right partition of the first
matrix on the right hand side is a k×k matrix of zeros. The lower-right partition
of the second matrix is given by the the lower-right partition of Pt+1|T .
PROOF:
Now we derive (13.16): We assume that the inverse of Tt+1 and T11,t+1 exist.
The inverses for our model exist because we assume that φ2 6= 0. For the
partitioned transition matrix (Sydsæter, Strøm and Berck, 2000, 19.48) we
derive                       −1         −1
                                                      
                       −1    T       −T11,t+1 T12,t+1
                     Tt+1 = 11,t+1                      .           (13.18)
                                0           I
Now, it is easy to see that
                                         −1       −1
                                  Pt∗ = Tt+1 P̃t Pt+1|t .                             (13.19)

We have (Sydsæter, Strøm and Berck, 2000, 19.49)
                                                               −1                
        −1                ∆t                     −∆t P̃12,t P̃22,t
       Pt+1|t =      −1                   −1       −1                      −1         (13.20)
                  −P̃22,t P̃12,t ∆t     P̃22,t + P̃22,t P̃12,t ∆t P̃12,t P̃22,t

with ∆t as a known function of the partial matrices. If we multiply this matrix
with the lower partition of P̃t we obtain immediately [0 I]. With this result
and (13.18) we derive (13.16). 
306                           13   A simple state space model of house prices


Bibliography
Bailey, M. J., Muth, R. F. and Nourse, H.O. (1963). A regression method for
     real estate price index construction, Journal of the American Statistical
     Association 58: 933–942.

Baumol, W. (1959). Economic Dynamics, 2nd ed., Macmillan, New York.
Bera, A. K. and Jarque, C. M. (1982). Model Specification Tests: a Simulta-
    neous Approach, Journal of Econometrics 20: 59–82.
Cho, M. (1996). House price dynamics: a survey of theoretical and empirical
    issues, Journal of Housing Research 7:2: 145–172.
Clapp, J. M. and Giaccotto, C. (1998). Price indices based on the hedonic
    repeat-sales method: application to the housing market, Journal of Real
    Estate Finance and Economics 16:1: 5–26.
Durbin, J. and Koopman, J. S. (2001). Time Series Analysis by State Space
    Methods, Oxford University Press, Oxford.
Engle, R. F. and M. W. Watson (1981). A One-Factor Multivariate Time Series
    Model of Metropolitan Wage Rates, Journal of the American Statistical
    Association 76: 774–781.
Gourieroux, C. and Monfort, A. (1997). Time Series and Dynamic Models,
    Cambridge University Press, Cambridge.
Greene, W. H. (2000). Econometric Analysis. Fourth Edition, Prentice Hall,
    Upper Saddle River, New Jersey.
Hamilton, J. D. (1994). Time Series Analysis, Princeton University Press,
   Princeton, New Jersey.

Harvey, A. C. (1989). Forecasting, Structural Time Series Models and the
    Kalman Filter, Cambridge University Press, Cambridge.
Harvey, A. C. (1993). Time Series Models, 2. edn, Harvester Wheatsheaf, New
    York.
Hill, R. C., Knight, J. R. and Sirmans, C. F. (1997). Estimating Capital Asset
      Price Indexes, Review of Economics and Statistics 79: 226–233.
13.6   Appendix                                                             307


Koopman, S. J., Shepard, N. and Doornik, J. A. (1999). Statistical Algorithms
    for Models in State Space Using SsfPack 2.2, Econometrics Journal 2: 107–
    160.
Peña, D., Tiao, G. C. and Tsay, R. S. (2001). A Course in Time Series Analysis,
     Wiley, New York.
Schwann, G. M. (1998). A real estate price index for thin markets, Journal of
    Real Estate Finance and Economics 16:3: 269–287.
Shiller, R. J. (1993). Macro Markets. Creating Institutions for Managing Soci-
     ety’s Largest Economic Risks, Clarendon Press, Oxford.
Shumway, R. H. and Stoffer, D. S. (1982). An approach to time series smoothing
    and forecasting using the EM algorithm, Journal of Time Series Analysis
    3: 253–264.
Shumway, R. H. and Stoffer, D. S. (2000). Time Series Analysis and Its Ap-
    plications, Springer, New York, Berlin.
Sydsæter, K., Strøm, A. and Berck, P. (2000). Economists’ Mathematical Man-
    ual, 3. edn, Springer, New York, Berlin.
14 Long Memory Effects Trading
   Strategy
                                       Oliver Jim Blaskowitz and Peter Schmidt




14.1      Introduction
Long range dependence is widespread in nature and has been extensively doc-
umented in economics and finance, as well as in hydrology, meteorology, and
geophysics by authors such as Heyman, Tabatabai and Lakshman (1991), Hurst
(1951), Jones and Briffa (1992), Leland, Taqqu, Willinger and Wilson (1993)
and Peters (1994). It has a long history in economics and finance, and has
remained a topic of active research in the study of financial time series, Beran
(1994).
Historical records of financial data typically exhibit distinct nonperiodical cycli-
cal patterns that are indicative of the presence of significant power at low fre-
quencies (i.e. long range dependencies). However, the statistical investigations
that have been performed to test for the presence of long range dependence in
economic time series representing returns of common stocks have often become
sources of major controversies. Asset returns exhibiting long range dependen-
cies are inconsistent with the efficient market hypothesis, and cause havoc on
stochastic analysis techniques that have formed the basis of a broad part of
modern finance theory and its applications, Lo (1991). In this chapter, we
examine the methods used in Hurst analysis, present a process exhibiting long
memory features, and give market evidence by applying Hurst’s R/S analysis
and finally sketch a trading strategy for German voting and non–voting stocks.
310                                   14 Long Memory Effects Trading Strategy


14.2       Hurst and Rescaled Range Analysis
Hurst (1900–1978) was an English hydrologist, who worked in the early 20th
century on the Nile River Dam project. When designing a dam, the yearly
changes in water level are of particular concern in order to adapt the dam’s
storage capacity according to the natural environment. Studying an Egyptian
847–year record of the Nile River’s overflows, Hurst observed that flood occur-
rences could be characterized as persistent, i.e. heavier floods were accompanied
by above average flood occurrences, while below average occurrences were fol-
lowed by minor floods. In the process of this findings he developed the Rescaled
Range (R/S) Analysis.
We observe a stochastic process Yt at time points t ∈ I = {0, . . . , N }. Let n
be an integer that is small relative to N , and let A denote the integer part of
N/n. Divide the ‘interval’ I into A consecutive ‘subintervals’, each of length
n and with overlapping endpoints. In every subinterval correct the original
datum Yt for location, using the mean slope of the process in the subinterval,
obtaining Yt − (t/n) (Yan − Y(a−1)n ) for all t with (a − 1)n ≤ t ≤ an and for all
a = 1, . . . , A. Over the a’th subinterval Ia = {(a − 1)n, (a − 1)n + 1, . . . , an},
for 1 ≤ a ≤ A, construct the smallest box (with sides parallel to the coordinate
axes) such that the box contains all the fluctuations of Yt −(t/n) (Yan −Y(a−1)n )
that occur within Ia . Then, the height of the box equals
                                                               
                                               t
                   Ra =         max       Yt − (Yan − Y(a−1)n )
                            (a−1)n≤t≤an        n
                                                               
                                               t
                        −       min       Yt − (Yan − Y(a−1)n )
                            (a−1)n≤t≤an        n
Figure 14.1 illustrates the procedure. Let Sa denote the empirical standard
error of the n variables Yt − Yt−1 , for (a − 1)n + 1 ≤ t ≤ an. If the process
Y is stationary then Sa varies little with a; in other cases, dividing Ra by
Sa corrects for the main effects of scale inhomogeneity in both spatial and
temporal domains.
The total area of the boxes, corrected for scale, is proportional in n to
                              R              A
                                          −1
                                               X Ra
                                      := A                .                     (2.1)
                                S n            a=1
                                                     Sa

The slope Ĥ of the regression of log(R/S)n on log n, for k values of n, may be
taken as an estimator of the Hurst constant H describing long-range depen-
dence of the process Y , Beran (1994) and Peters (1994).
14.2   Hurst and Rescaled Range Analysis                                       311


                              X(t)-(t/n){X(an)-X((a-1)n)}
           8
           7.5
           7




                 0     500        1000            1500      2000   2500
                                         time t

       Figure 14.1. The construction of the boxes in the R/S analysis.



If the process Y is stationary then correction for scale is not strictly necessary,
and we may take each Sa to be the constant 1. In that case the R–S statistic
Ĥ is a version of the box-counting estimator that is widely used in physical
science applications, Carter, Cawley and Mauldin (1988), Sullivan and Hunt
(1988) and Hunt (1990). The box-counting estimator is related to the capacity
definition of fractal dimension, Barnsley (1988) p. 172ff, and the R–S estimator
may be interpreted in the same way. Statistical properties of the box-counting
estimator have been discussed by Hall and Wood (1993).
A more detailed analysis, exploiting dependence among the errors in the regres-
sion of log(R/S)n on log n, may be undertaken in place of R–S analysis. See
Kent and Wood (1997) for a version of this approach in the case where scale
correction is unnecessary. However, as Kent and Wood show, the advantages
of the approach tend to be asymptotic in character, and sample sizes may need
to be extremely large before real improvements are obtained.
Hurst used the coefficient H as an index for the persistence of the time series
considered. For 0.5 < H < 1, it is positively persistent and characterized
by ‘long memory’ effects, as described in the next section. A rather informal
interpretation of H used by practitioners is this: H may be interpreted as
the chance of movements with the same sign, Peters (1994). For H > 0.5,
it is more likely that an upward movement is followed by a movement of the
same (positive) sign, and a downward movement is more likely to be followed
312                                14 Long Memory Effects Trading Strategy


by another downward movement. For H < 0.5, a downward movement is
more likely to be reversed by an upward movement thus implying the reverting
behavior.


14.3      Stationary Long Memory Processes
A stationary process X has the long memory property, if for its autocorrelation
function ρ(k) = Cov(Xi , Xi+k )/Var(X1 ) holds:
                               ∞
                               X
                                     ρ(k) = ∞ .                            (14.1)
                              k=−∞

That is, the autocorrelations decay to zero so slowly that their sum does not
converge, Beran (1994).
With respect to (14.1), note that the classical expression for the variance of the
                   def    Pn
sample mean, X̄ = n−1 i=1 Xi , for independent and identically distributed
X1 , . . . , Xn ,
                                    σ2
                        Var(X̄) =      with σ 2 = Var(Xi )                  (14.2)
                                    n
is not valid anymore. If correlations are neither zero and nor so small to be
negligible, the variance of X̄ is equal to
                                           n−1
                                                             !
                                 σ2        X          
                                                     k
                  Var(X̄) =           1+2        1−      ρ(k) .             (14.3)
                                  n                  n
                                           k=1

Thus, for long memory processes the variance of the sample mean converges to
zero at a slower rate than n−1 , Beran (1994). Note that long memory implies
positive long range correlations. It is essential to understand that long range
dependence is characterized by slowly decaying correlations, although nothing
is said about the size of a particular correlation at lag k. Due to the slow
decay it is sometimes
                   √ difficult to detect non zero but very small correlations by
looking at the ±2/ n–confidence band. Beran (1994) gives an example
                                                                  √       where
the correct correlations are slowly decaying but within the ±2/ n–band. So
even if estimated correctly we would consider them as non significant.
Note that (14.1) holds in particular if the autocorrelation ρ(k) is approximately
c|k|−α with a constant c and a parameter α ∈ (0, 1). If we know the autocor-
14.3   Stationary Long Memory Processes                                     313


relations we also know the spectral density f (λ), defined as
                                         ∞
                                      σ2 X
                          f (λ)   =        ρ(k)eikλ .                     (14.4)
                                      2π
                                        k=−∞

The structure of the autocorrelation then implies, that the spectral density is
approximately of the form cf |k|α−1 with a constant cf as λ → 0. Thus the
spectral density has a pole at 0.
To connect the long memory property with the Hurst coefficient, we introduce
self similar processes. A stochastic process Yt is called self similar with self
similarity parameter H, if for any positive stretching factor c, the rescaled
process c−H Yct has the same distribution as the original process Yt . If the
increments Xt = Yt − Yt−1 are stationary, there autocorrelation function is
given by
                         1
                            |k + 1|2H − 2|k|2H + |k − 1|2H ,
                                                           
                  ρ(k) =
                         2
Beran (1994). From a Taylor expansion of ρ it follows

                           ρ(k)
                                      → 1 for k → ∞ .
                      H(2H − 1)k 2H−2

This means, that for H > 0.5, the autocorrelation function ρ(k) is approxi-
mately H(2H − 1)k −α with α = 2 − 2H ∈ (0, 1) and thus Xt has the long
memory property.


14.3.1     Fractional Brownian Motion and Noise

In this section, we introduce a particular self similar process with station-
ary increments, namely the fractional Brownian motion (FBM) and fractional
Gaussian noise (FGN), Mandelbrot and van Ness (1968), Beran (1994).

DEFINITION 14.1 Let BH (t) be a stochastic process with continuous sam-
ple paths and such that

   • BH (t) is Gaussian
   • BH (0) = 0
   • E {BH (t) − BH (s)} = 0
314                                14 Long Memory Effects Trading Strategy

                               2
   • Cov {BH (t), BH (s)} = σ2 |t|2H − |t − s|2H + |s|2H
                                                           


for any H ∈ (0, 1) and σ 2 a variance scaling parameter. Then BH (t) is called
fractional Brownian motion.

Essentially, this definition is the same as for standard Brownian motion besides
that the covariance structure is different. For H = 0.5, definition 14.1 contains
standard Brownian motion as a special case but in general (H 6= 0.5), incre-
ments BH (t) − BH (s) are not independent anymore. The stochastic process
resulting by computing first differences of FBM is called FGN with parameter
H. The covariance at lag k of FGN follows from definition 14.1:

       γ(k)   =   Cov {BH (t) − BH (t − 1), BH (t + k) − BH (t + k − 1)}
                  σ2
                      |k + 1|2H − 2|k|2H + |k − 1|2H
                                                     
              =                                                          (14.5)
                   2

For 0.5 < H < 1 the process has long range dependence, and for 0 < H < 0.5
the process has short range dependence.
Figures 14.2 and 14.3 show two simulated paths of N = 1000 observations of
FGN with parameter H = 0.8 and H = 0.2 using an algorithm proposed by
Davies and Harte (1987). For H = 0.2, the FBM path is much more jagged
and the range of the y–axis is about ten times smaller than for H = 0.8 which
is due to the reverting behavior of the time series.
The estimated autocorrelation√function (ACF) for the path simulated with
H = 0.8 along with the ±2/ N –confidence band is shown in Figure 14.4.
For comparison the ACF used to simulate the process given by (14.5) is su-
perimposed (dashed line). The slow decay of correlations can be seen clearly.

Applying R/S analysis we can retrieve the Hurst coefficient used to simulate
the process. Figure 14.5 displays the estimated regression line and the data
points used in the regression. We simulate the process with H = 0.8 and the
R/S statistic yields Ĥ = 0.83.
Finally, we mention that fractional Brownian motion is not the only stationary
process revealing properties of systems with long memory. Fractional ARIMA
processes are an alternative to FBM, Beran (1994). As well, there are non
stationary processes with infinite second moments that can be used to model
long range dependence, Samrodnitsky and Taqqu (1994).
14.4   Data Analysis                                                       315


                         Sim. FGN with N=1000, H=0.80
            -2 0 2




                     0    250         500         750        1000
                                       t

                         Sim. FBM with N=1000, H=0.80
            200
            0




                     0    250         500         750        1000
                                       t
   Figure 14.2. Simulated FGN with H = 0.8, N = 1000 and path of
   corresponding FBM.


                         Sim. FGN with N=1000, H=0.20
            4
            0
            -4




                     0    250         500         750        1000
                                       t

                         Sim. FBM with N=1000, H=0.20
            -5 0 5




                     0    250         500         750        1000
                                       t
   Figure 14.3. Simulated FGN with H = 0.2, N = 1000 and path of
   corresponding FBM. XFGSimFBM.xpl



14.4      Data Analysis
A set of four pairs of voting and non–voting German stocks will be subject to
our empirical analysis. More precisely, our data sample retrieved from the data
information service Thompson Financial Datastream, consists of 7290 daily
316                                                                       14 Long Memory Effects Trading Strategy


                                                True (dashed) & Est. ACF of Sim. FGN: N=1000, H=0.80



         1
         0.5
  ACF

         0




                        0                                  20                   40               60       80
                                                                               lag k
        Figure 14.4. Estimated and true ACF of FGN simulated with H = 0.8,
        N = 1000.     XFGSimFBM.xpl


                                                  HurstPlot: FGN(N=1000, H=0.80), est. H=0.83
                        2 2.5 3 3.5 4 4.5
          log[E(R/S)]




                                            3        3.5        4          4.5         5   5.5        6
                                                                            log(k)
        Figure 14.5.   Hurst regression and estimated Hurst coefficient
        (Ĥ = 0.83) of FBM simulated with H = 0.8, N = 1000.
           XFGSimFBMHurst.xpl



closing prices of stocks of WMF, Dyckerhoff, KSB and RWE from January 01,
1973, to December 12, 2000.
Figure 14.6 shows the performance of WMF stocks in our data period. The
plot indicates an intimate relationship of both assets. Since the performance
of both kinds of stocks are influenced by the same economic underlyings, their
relative value should be stable over time. If this holds, the log–difference Xt of
the pairs of voting (Stv ) and non–voting stocks (Stnv ),
                                                                    def
                                                                Xt = log Stv − log Stnv                    (14.6)
14.4   Data Analysis                                                           317


should exhibit a reverting behavior and therefore an R/S analysis should yield
estimates of the Hurst coefficient smaller than 0.5. In order to reduce the num-
ber of plots we show only the plot of WMF stocks. One may start the quantlet
   XFGStocksPlots.xpl to see the time series for the other companies as well.
First, we perform R/S analysis on both individual stocks and the voting/non–
voting log–differences. In a second step, a trading strategy is applied to all four
voting/non–voting log–differences.

              Time Series of Voting(dashed) and Non Voting WMF Stocks
         EUR
        35



        25



        15



         5

             1973         1980                  1990                2000
                                       Time


    Figure 14.6. Time series of voting and non–voting WMF stocks.
      XFGStocksPlots.xpl


Table 14.1 gives the R/S statistic of each individual stock and of the log–
difference process of voting and non–voting stocks. While Ĥ is close to 0.5
for each time series taken separately, we find for the log differences a Hurst
coefficient indicating negative persistence, i.e. H < 0.5.

                           WMF       Dyck.      KSB      RWE
                          nv     v  nv     v  nv     v  nv     v
               Stock     0.51 0.53 0.57 0.52 0.53 0.51 0.50 0.51
             Differences    0.33      0.37      0.33      0.41

    Table 14.1. Estimated Hurst coefficients of each stock and of log–
    differences.
318                                 14 Long Memory Effects Trading Strategy


To test for the significance of the estimated Hurst coefficients we need to know
the finite sample distribution of the R/S statistic. Usually, if the probabilistic
behavior of a test statistic is unknown, it is approximated by its asymptotic
distribution when the number of observations is large. Unfortunately, as, for
example, Lo (1991) shows, such an asymptotic approximation is inaccurate in
the case of the R/S statistic. This problem may be solved by means of bootstrap
and simulation methods. A semiparametric bootstrap approach to hypothesis
testing for the Hurst coefficient has been introduced by Hall, Härdle, Kleinow
and Schmidt (2000), In the spirit of this chapter we use Brownian motion
(H = 0.5) to simulate under the null hypothesis. Under the null hypothesis
the log–difference process follows a standard Brownian motion and by Monte
Carlo simulation we compute 99%, 95% and 90% confidence intervals of the
R/S statistic. The results are given in Table 14.2. While the estimated Hurst
coefficients for each individual stock are at least contained in the 99% confidence
interval, we consider the R/S statistic for voting/non–voting log differences as
significant.

              N Mean         90%            95%            99%
             7289 0.543 [0.510, 0.576] [0.504, 0.582] [0.491, 0.595]

      Table 14.2. Simulated confidence intervals for R/S statistic for Brown-
      ian motion.



14.5        Trading the Negative Persistence
The data analysis conducted so far indicates a negative persistence (H < 0.5)
of the log differences of pairs of voting and non–voting stocks of a company. It
should be possible to take advantage of this knowledge. If we found a profitable
trading strategy, we would interpret this result as a further indication for the
reverting behavior of voting/non–voting log–differences.
The average relationship between voting and non–voting stocks in the sample
period may be expressed in the following way,
                     log(voting) = β log(non-voting) + ε
where β may be estimated by linear regression. If the log–differences of voting
and non–voting stocks are reverting as the R/S analysis indicates, negative
differences, Xt < 0, are often followed by positive differences and vice versa.
In terms of the Hurst coefficient interpretation, given a negative difference, a
14.5   Trading the Negative Persistence                                        319


positive difference has a higher chance to appear in the future than a negative
one and vice versa, implying voting stocks probably to become relatively more
expensive than their non–voting counterparts. Thus, we go long the voting and
short the non–voting stock. In case of the inverse situation, we carry out the
inverse trade (short voting and long non–voting). When initiating a trade we
take a cash neutral position. That is, we go long one share of the voting and
sell short m shares of the non–voting stock to obtain a zero cash flow from this
action.
But how to know that a ‘turning point’ is reached? What is a signal for the
reverse? Naturally, one could think, the longer a negative difference persisted,
the more likely the difference is going to be positive. In our simulation, we cal-
culate the maximum and minimum difference of the preceding M trading days
(for example M = 50, 100, 150). If the current difference is more negative than
the minimum over the last M trading days, we proceed from the assumption
that a reverse is to come and that the difference is going to be positive, thereby
triggering a long voting and short non–voting position. A difference greater
than the M day maximum releases the opposite position.
When we take a new position, we compute the cash flow from closing the old
one. Finally, we calculate the total cash flow, i.e. we sum up all cash flows
without taking interests into account. To account for transaction costs, we
compute the total net cash flow. For each share bought or sold, we calculate a
hypothetical percentage, say 0.5%, of the share price and subtract the sum of
all costs incurred from the total cash flow. In order to compare the total net
cash flows of our four pairs of stocks which have different levels of stock prices,
we normalize them by taking WMF stocks as a numeraire.
In Table 14.3 we show the total net cash flows and in Table 14.4 the number
of trade reverses are given. It is clear that for increasing transaction costs the
performance deteriorates, a feature common for all 4 pairs of stocks. Moreover,
it is quite obvious that the number of trade reverses decreases with the number
of days used to compute the signal. An interesting point to note is that for
RWE, which is in the German DAX30, the total net cash flow is worse in all
situations. A possible explanation would be that since the Hurst coefficient
is the highest, the log–differences contain less ‘reversion’. Thus, the strategy
designed to exploit the reverting behavior should perform rather poorly. WMF
and KSB have a smaller Hurst coefficient than RWE and the strategy performs
320                                14 Long Memory Effects Trading Strategy


better than for RWE. Furthermore, the payoff pattern is very similar in all
situations. Dyckerhoff with a Hurst coefficient of H = 0.37 exhibits a payoff
structure that rather resembles the one of WMF/KSB.

         Transaction M       WMF Dyckerhoff     KSB     RWE
            Costs           H = 0.33 H = 0.37 H = 0.33 H = 0.41
             0.00    50      133.16   197.54   138.68   39.93
                     100     104.44   122.91   118.85   20.67
                     150     71.09     62.73   56.78     8.80
            0.005    50      116.92   176.49   122.32   21.50
                     100      94.87   111.82   109.26   12.16
                     150      64.78    57.25   51.86     2.90
             0.01    50      100.69   155.43   105.96    3.07
                     100      85.30   100.73    99.68    3.65
                     150      58.48    51.77   49.97    −3.01

      Table 14.3. Performance of Long Memory Strategies (TotalNetCash-
      Flow in EUR). XFGLongMemTrade.xpl

                    M      WMF Dyckerhoff KSB RWE
                     50     120   141     132 145
                    100     68    69       69  59
                    150     47    35       41  42

            Table 14.4. Number of Reverses of Long Memory Trades

Regarding the interpretation of the trading strategy, one has to be aware that
neither the cash flows are adjusted for risk nor did we account for interest rate
effects although the analysis spread over a period of time of about 26 years.




Bibliography
Barnsley, M. (1988). Fractals everywhere., Boston, MA etc.: Academic Press,
    Inc.
Beran, J. (1994). Statistics for Long Memory Processes, Chapman and Hall,
    New York.
14.5   Trading the Negative Persistence                                        321


Carter, P., Cawley, R. and Mauldin, R. (1988). Mathematics of dimension mea-
    surements of graphs of functions, in D. Weitz, L. Sander and B. Mandel-
    brot (eds), Proc. Symb. Fractal Aspects of Materials, Disordered Systems,
    pp. 183–186.
Davies, R. B. and Harte, D. S. (1987). Test for Hurst Effect, Biometrica 74: 95–
    102.
Hall, P., Härdle, W., Kleinow, T. and Schmidt, P. (2000). Semiparametric
     bootstrap approach to hypothesis tests and confidence intervals for the
     hurst coefficient, Statistical Inference for stochastic Processes 3.
Hall, P. and Wood, A. (1993). On the performance of box-counting estimators
     of fractal dimension., Biometrika 80(1): 246–252.
Heyman, D., Tabatabai, A. and Lakshman, T.V. (1993). Statistical analysis
   and simulation of video teleconferencing in ATM networks, IEEE Trans.
   Circuits. Syst. Video Technol., 2, 49–59.
Hunt, F. (1990). Error analysis and convergence of capacity dimension algo-
    rithms., SIAM J. Appl. Math. 50(1): 307–321.
Hurst, H. E. (1951). Long Term Storage Capacity of Reservoirs, Trans. Am.
    Soc. Civil Engineers 116, 770–799.
Jones, P.D. and Briffa, K.R. (1992). Global surface air temperature variations
    during the twentieth century: Part 1, spatial, temporal and seasonals
    details, The Holocene 2, 165–179.
Kent, J. T. and Wood, A. T. (1997). Estimating the fractal dimension of a
    locally self-similar Gaussian process by using increments., J. R. Stat. Soc.,
    Ser. B 59(3): 679–699.
Leland, W.E., Taqqu, M.S., Willinger, W. and Wilson, D.V. (1993). Ethernet
    traffic is self–similar: Stochastic modelling of packet traffic data, preprint,
    Bellcore, Morristown.
Lo, A.W. (1991). Long-term memory in stock market prices, Econometrica,
    59, 1279–1313.
Mandelbrot, B.B. and van Ness, J.W. (1968). Fractional Brownian Motion,
   fractional Noises and Applications, SIAM Rev.10, 4, 422–437.
Peters, E.E. (1994). Fractal Market Analysis: Applying Chaos Theory to In-
    vestment and Economics, John Wiley & Sons, New York.
322                              14 Long Memory Effects Trading Strategy


Samrodnitsky, G. and Taqqu, M.S. (1994). Stable non-Gaussian Random Pro-
    cesses: Stochastic Models with infinite variance, Chapman and Hall, New
    York.
Sullivan, F. and Hunt, F. (1988). How to estimate capacity dimension, Nuclear
     Physics B (Proc. Suppl.) pp. 125–128.
15 Locally time homogeneous time
   series modeling
                                                                 Danilo Mercurio




15.1      Intervals of homogeneity
An adaptive estimation algorithm for time series is presented in this chapter.
The basic idea is the following: given a time series and a linear model, we
select on-line the largest sample of the most recent observations, such that
the model is not rejected. Assume for example that the data can be well
fitted by a regression, an autoregression or even by a constant in an unknown
interval. The main problem is then to detect the time interval where the model
approximately holds. We call such an interval: interval of time homogeneity.
This approach appears to be suitable in financial econometrics, where an on-
line analysis of large data sets, like e.g. in backtesting, has to be performed. In
this case, as soon as a new observation becomes available, the model is checked,
the sample size is optimally adapted and a revised forecast is produced.
In the remainder of the chapter we briefly present the theoretical foundations
of the proposed algorithm which are due to Liptser and Spokoiny (1999) and
we describe its implementation. Then, we provide two applications to financial
data. In the first one we estimate the possibly time varying coefficients of an
exchange rate basket, while in the second one the volatility of an exchange rate
time series is fitted to a locally constant model. The main references can be
found in Härdle, Herwartz and Spokoiny (2001), Mercurio and Spokoiny (2000),
Härdle, Spokoiny and Teyssière (2000) and Mercurio and Torricelli (2001).
Let us consider the following linear regression equation:

                        Yt = Xt> θ + σεt ,   t = 1, . . . , T               (15.1)
324                        15   Locally time homogeneous time series modeling


where Yt is real valued, Xt = (X1,t . . . Xp,t )> and θ = (θ1 . . . θp )> are Rp
valued
PT     and εt is a standard normally distributed random variable. If the matrix
          >
   t=1 t Xt is nonsingular with inverse W , then the least squares estimator of
      X
θ is:
                                       XT
                               θb = W      Xt Yt .                         (15.2)
                                        t=1

Define wkk as the k-th element on the diagonal of W and let λ be a positive
scalar. For nonrandom regressors,the following exponential probability bound
is easy to prove:
                                  √           λ2
                P(|θbk − θk | > λσ wkk ) ≤ 2e− 2 ,    k = 1, . . . , p.      (15.3)
                                               2
Indeed, the estimation error θbk − θk is N(0, wkk σ 2 ) distributed, therefore:
                                            !
                           λ(θbk − θk ) λ2
           1 = E exp           √       −
                            σ wkk         2
                                            !
                           λ(θbk − θk ) λ2                       √
               ≥ E exp         √       −       1(θbk − θk > λσ wkk )
                            σ wkk         2
                       2
                        λ                      √
               ≥ exp          P(θbk − θk > λσ wkk ).
                         2

The result in (15.3) follows from the symmetry of the normal distribution.
Equation (15.3) has been generalized by Liptser and Spokoiny (1999) to the
case of nonrandom regressors. More precisely, they allow the Xt to be only con-
ditionally independent of εt , and they include lagged values of Yt as regressors.
In this case the bound reads roughly as follows:
                          √                                 λ2
        P(|θbk − θk | > λσ wkk ; W is nonsingular ) ≤ P(λ)e− 2 .             (15.4)

Where P(λ) is a polynomial in λ. It must be noticed that (15.4) is not as sharp
as (15.3), furthermore, because of the randomness of W , (15.4) holds only on
the set where W is nonsingular, nevertheless this set has in many cases a large
probability. For example when Yt follows an ergodic autoregressive process and
the number of observations is at least moderately large. More technical details
are given in Section 15.4.
We now describe how the bound (15.4) can be used in order to estimate the
coefficients θ in the regression equation (15.1) when the regressors are (possi-
bly) stochastic and the coefficients are not constant, but follow a jump process.
15.1   Intervals of homogeneity                                              325




           θi,t 6




                                                                    -
                                               τ −m                τ
                                     time
           Figure 15.1. Example of a locally homogeneous process.



The procedure that we describe does not require an explicit expression of the
law of the process θt , but it only assumes that θt is constant on some unknown
time interval I = [τ − m, τ ], τ − m > 0, τ, m ∈ N. This interval is referred
as an interval of time homogeneity and a model which is constant only on some
time interval is called locally time homogeneous.
Let us now define some notation. The expression θbτ will describe the (filtering)
estimator of the process (θt )t∈N at time τ ; that is to say, the estimator which
uses only observations up to time τ . For example if θ is constant, the recursive
estimator of the form:
                                 τ
                                          !−1 τ
                                X               X
                                        >
                        θτ =
                        b          Xs X s           Xs Ys ,
                               s=1            s=1

represents the best linear estimator for θ. But, if the coefficients are not con-
stant and follow a jump process, like in the picture above a recursive estimator
cannot provide good results. Ideally, only the observations in the interval
I = [τ − m, τ ] should be used for the estimation of θτ . Actually, an estima-
tor of θτ using the observation of a subinterval J ⊂ I would be less efficient,
while an estimator using the observation of a larger interval K ⊃ I would be
biased. The main objective is therefore to estimate the largest interval of time
homogeneity. We refer to this estimator as Ib = [τ − m,b τ ]. On this interval Ib
326                       15   Locally time homogeneous time series modeling


we estimate θτ with ordinary least squares (OLS):
                                          −1
                                 X             X
                    θbτ = θbb = 
                           I        Xs Xs>       Xs Ys .                 (15.5)
                                  s∈Ib           s∈Ib

In order to determine Ib we use the idea of pointwise adaptive estimation de-
scribed in Lepski (1990), Lepski and Spokoiny (1997) and Spokoiny (1998).
The idea of the method can be explained as follows.
Suppose that I is an interval-candidate, that is, we expect time-homogeneity in
I and hence in every subinterval J ⊂ I. This implies that the mean values of the
θbI and θbJ nearly coincide. Furthermore, we know on the basis of equation (15.4)
that the events
                                √                             √
              |θbi,I − θτ | ≤ µσ wii,I and |θbi,J − θτ | ≤ λσ wii,J

occur with high probability for some sufficiently large constants λ and µ. The
adaptive estimation procedure therefore roughly corresponds to a family of
tests to check whether θbI does not differ significantly from θbJ . The latter is
done on the basis of the triangle inequality and of equation (15.4) which assigns
a large probability to the event
                                           √          √
                      |θbi,I − θbi,J | ≤ µσ wii,I + λσ wii,J

under the assumption of homogeneity within I, provided that µ and λ are
sufficiently large. Therefore, if there exists an interval J ⊂ I such that the
hypothesis θbi,I = θbi,J cannot be accepted, we reject the hypothesis of time
homogeneity for the interval I. Finally, our adaptive estimator corresponds to
the largest interval I such that the hypothesis of homogeneity is not rejected
for I itself and all smaller intervals.


15.1.1     The adaptive estimator

Now we present a formal description. Suppose that a family I of interval
candidates I is fixed. Each of them is of the form I = [τ − m, τ ], so that the
set I is ordered due to m. With every such interval we associate an estimate
θb of the parameter θi,τ and the corresponding conditional standard deviation
√i,I
  wii,I . Next, for every interval I from I, we suppose to be given a set J (I)
of testing subintervals J. For every J ∈ J (I), we construct the corresponding
                                                            √
estimate θbi,J from the observations for t ∈ J and compute wii,J . Now, with
15.1   Intervals of homogeneity                                                    327


two constants µ and λ, define the adaptive choice of the interval of homogeneity
by the following iterative procedure:

   • Initialization: Select the smallest interval in I
   • Iteration: Select the next interval I in I and calculate the corresponding
                                                            √
     estimate θbi,I and the conditional standard deviation wii,I σ
   • Testing homogeneity: Reject I, if there exists one J ∈ J (I), and i =
     1, . . . , p such that
                                               √          √
                          |θbi,I − θbi,J | > µσ wii,I + λσ wii,J .              (15.6)

   • Loop: If I is not rejected, then continue with the iteration step by choos-
     ing a larger interval. Otherwise, set Ib = “the latest non rejected I”.

The adaptive estimator θbτ of θτ is defined by applying the selected interval I:
                                                                              b

                             θbi,τ = θbi,Ib for i = 1, . . . , p.

As for the variance estimation, note that the previously described procedure re-
quires the knowledge of the variance σ 2 of the errors. In practical applications,
σ 2 is typically unknown and has to be estimated from the data. The regression
representation (15.1) and local time homogeneity suggests to apply a residual-
based estimator. Given an interval I = [τ − m, τ ], we construct the parameter
estimate θbI . Next the pseudo-residuals εbt are defined as εbt = Yt −Xt> θbI . Finally
the variance estimator is defined by averaging the squared pseudo-residuals:
                                             1 X 2
                                    b2 =
                                    σ           εbt .
                                            |I|
                                                 t∈I



15.1.2     A small simulation study

The performance of the adaptive estimator is evaluated with data from the
following process:

                       Yt = θ1,t + θ2,t X2,t + θ3,t X3,t + σεt .

The length of the sample is 300. The regressors X2 and X3 are two independent
random walks. The regressor coefficients are constant in the first half of the
328                           15   Locally time homogeneous time series modeling


              1 ≤ t ≤ 150                     151 ≤ t ≤ 300

                               large jump medium jump small jump

              θ1,t = 1        θ1,t = .85      θ1,t = .99         θ1,t = .9995

              θ2,t = .006     θ2,t = .0015 θ2,t = .004           θ2,t = .0055

              θ3,t = .025     θ3,t = .04      θ3,t = .028        θ3,t = .0255

                            Table 15.1. Simulated models.

sample, then they make a jump after which they continue being constant until
the end of the sample. We simulate three models with jumps of different
magnitude. The values of the simulated models are presented in Table 15.1.
                                                                  −2
The error term εt is a standard Gaussianp white noise, and σ = 10 . Note that
                                     −2
the average value of σ|εt | equals 10    2/π ≈ 0.008, therefore the small jump
of magnitude 0.0005 is clearly not visible by eye. For each of the three models
above 100 realizations of the white noise εt are generated and the adaptive
estimation is performed.
In order to implement the procedure we need two parameters: µ and λ, and two
sets of intervals: I and J (I). As far as the latter are concerned the simplest
proposal is to use a regular grid G = {tk } with tk = m0 k for some integer
m0 and with τ = tk∗ belonging to the grid. We next consider the intervals
Ik = [tk , tk∗ [= [tk , τ [ for all tk < tk∗ = τ . Every interval Ik contains exactly
k ∗ − k smaller intervals J 0 = [tk0 , tk∗ [. So that for every interval Ik = [tk , tk∗ [
and k 0 : k < k 0 < k ∗ we define the set J (Ik ) of testing subintervals J 0 by
taking all smaller intervals with right end point tk∗ : J 0 = [tk0 , tk∗ [ and all
smaller intervals with left end point tk :J 0 = [tk , tk0 [:

              J (Ik ) = {J = [tk0 , tk∗ [ or J = [tk , tk0 [: k < k 0 < k ∗ }.

The testing interval sets I and J (I) are therefore identified by the parameter
m0 : the grid step.
We are now left with the choice of three parameters: λ, µ and m0 . These
parameters act as the smoothing parameters in the classical nonparametric
estimation. The value of m0 determines the number of points at which the
time homogeneity is tested and it defines the minimal delay after which a jump
15.2   Estimating the coefficients of an exchange rate basket                  329


can be discovered. Simulation results have shown that small changes of m0
do not essentially affect the results of the estimation and, depending on the
number of parameters to be estimated, it can be set between 10 and 50.
The choice of λ and µ is more critical because these parameters determine the
acceptance or the rejection of the interval of time homogeneity as it can be
seen from equation (15.6). Large values of λ and µ reduce the sensitivity of
the algorithm and may delay the detection of the change point, while small
values make the procedure more sensitive to small changes in the values of the
estimated parameters and may increase the probability of a type-I error.
For the simulation, we set: m0 = 30, λ = 2 and µ = 4, while a rule for the
selection of λ and µ for real application will be discussed in the next section.
Figure 15.2 shows the results of the simulation. The true value of the coefficients
is plotted (θ1,t : first row, θ2,t : second row, θ3,t : third row) along with the
median, the maximum and the minimum of the estimates from all realizations
for each model at each time point. The simulation results are very satisfactory.
The change point is quickly detected, almost within the minimal delay of 30
periods for all three models, so that the adaptive estimation procedure show a
good performance even for the small jump model.


15.2      Estimating the coefficients of an exchange
          rate basket
In this section we compare the adaptive estimator with standard procedures
which have been designed to cope with time varying regressor coefficients. A
simple solution to this problem consists in applying a window estimator, i.e.
an estimator which only uses the most recent k observations:
                              t
                                        !−1 t
                             X                X
                     θbt =       Xs X >  s        Xs Ys ,              (15.7)
                             s=t−k              s=t−k

where the value of k is specified by the practitioner. Another, more refined
technique, consists in describing the coefficients θ as an unobserved stochastic
process: (θt )t∈N , see Elliot, Aggoun and Moore (1995). Apart from the cases
when there is some knowledge about the data generating process of θt , the
most common specification is as a multivariate random walk:

                        θt = θt−1 + ζt       ζt ∼ N(0, Σ).                  (15.8)
330                                   15    Locally time homogeneous time series modeling



              LARGE JUMP                        MEDIUM JUMP                          SMALL JUMP




       50   100   150   200   250   300    50   100   150   200   250   300   50   100   150   200   250   300
                   ALPHA_1                             ALPHA_1                            ALPHA_1




       50   100   150   200   250   300    50   100   150   200   250   300   50   100   150   200   250   300
                   ALPHA_2                             ALPHA_2                            ALPHA_2




       50   100   150   200   250   300    50   100   150   200   250   300   50   100   150   200   250   300
                   ALPHA_3                             ALPHA_3                            ALPHA_3



      Figure 15.2. On-line estimates of the regression coefficients with jumps
      of different magnitude. Median (thick dotted line), maximum and min-
      imum (thin dotted line) among all estimates.



In this context, equations (15.8) and (15.1) can be regarded as a state space
model, where equation (15.8) is the state equation (the signal) and equation
(15.1) is the measurement equation and it plays the role of a noisy observation
of θt . A Kalman filter algorithm can be used for the estimation, see Cooley
and Prescott (1973). The Kalman filter algorithm requires the initialization of
15.2   Estimating the coefficients of an exchange rate basket                  331


two variables: θb0|0 and P0|0 = Cov(θb0|0 ) and its recursions read as follows, see
Chui and Chen (1998):
                 
                    P0|0   = Cov(θb0|0 )
                            = Pt−1|t−1 + Σσ 2
                 
                 
                 
                    Pt|t−1
                                      X (X > P        X + σ 2 )−1
                 
                  G
                     t      = P   t|t−1   t   t   t|t−1   t
                
                 Pt|t      = (I − Gt Xt> )Pt|t−1
                  θb        = θbt−1|t−1
                
                
                 t|t−1
                
                
                  θbt|t     = θbt|t−1 + Gt (Yt − Xt> θbt|t−1 ).

The question of the initialization of the Kalman filter will be discussed in
the next section together with the Thai Baht basket example. In the notation
above, the index t|t−1 denotes the estimate performed using all the observation
before time t (forecasting estimate), while t|t refers to the estimate performed
using all the observations up to time t (filtering estimate). The four estimators
described above: the adaptive, the recursive, the window and the Kalman filter
Estimator are now applied to the data set of the Thai Baht basket. For deeper
analysis of these data see Christoffersen and Giorgianni (2000) and Mercurio
and Torricelli (2001).


15.2.1     The Thai Baht basket

An exchange rate basket is a form of pegged exchange rate regime and it takes
place whenever the domestic currency can be expressed as a linear combination
of foreign currencies. A currency basket can be therefore expressed in the form
of equation (15.1), where: X1,t is set constantly equal to one and is taken as
numeraire, Yt represents the home currency exchange rate with respect to the
numeraire, and Xj,t is the amount of currency 1 per unit of currency j, i.e.
the cross currency exchange rate. The above relationship usually holds only on
the average, because the central bank cannot control the exchange rate exactly,
therefore the error term εt is added.
Because modern capital mobility enables the investors to exploit the interest
rate differentials which may arise between the domestic and the foreign cur-
rencies, a pegged exchange rate regime can become an incentive to speculation
and eventually lead to destabilization of the exchange rate, in spite of the fact
that its purpose is to reduce exchange rate fluctuations, see Eichengreen, Mas-
son, Savastano and Sharma (1999). Indeed, it appears that one of the causes
which have led to the Asian crisis of 1997 can be searched in short term capital
investments.
332                          15   Locally time homogeneous time series modeling


From 1985 until its suspension on July 2, 1997 (following a speculative attack)
the Bath was pegged to a basket of currencies consisting of Thailand’s main
trading partners. In order to gain greater discretion in setting monetary pol-
icy, the Bank of Thailand neither disclosed the currencies in the basket nor the
weights. Unofficially, it was known that the currencies composing the basket
were: US Dollar, Japanese Yen and German Mark. The fact that the public
was not aware of the values of the basket weights, also enabled the monetary
authorities to secretly adjust their values in order to react to changes in eco-
nomic fundamentals and/or speculative pressures. Therefore one could express
the USD/THB exchange rate in the following way:

  YU SD/T HB,t = θU SD,t + θDEM,t XU SD/DEM,t + θJP Y,t XU SD/JP Y,t + σεt .

This exchange rate policy had provided Thailand with a good stability of the
exchange rate as it can be seen in Figure 15.3. During the same period, though,
the interest rates had maintained constantly higher than the ones of the coun-
tries composing the basket, as it is shown in Figure 15.4.
This facts suggest the implementation of a speculative strategy, which con-
sists in borrowing from the countries with a lower interest rate and lending
to the ones with an higher interest rate. A formal description of the problem
can be made relying on a mean-variance hedging approach, see Musiela and
Rutkowski (1997). The optimal investment strategy ξ1∗ , . . . , ξp∗ is obtained by
the minimization of the quadratic cost function below:
                                               2  
                       
                                  Xp                
                                                     
                     E Yt+h −         ξj Xj,t+h  Ft .
                                                    
                                  j=1               

The solution is:
                        ξj∗ = E(θj,t+h |Ft )       for j = 1, . . . , p.
It can be seen that, when the interest rates in Thailand (r0 ) are sufficiently
high with respect to the foreign interest rates (rj , j = 1, . . . , p) the following
inequality holds
                                      p
                                      X
                   (1 + r0 )−1 Yt <         (1 + rj )−1 E(θj,t+h |Ft )Xj,t .   (15.9)
                                      j=1

This means that an investment in Thailand is cheaper than an investment
with the same expected revenue in the countries composing the basket. In the
15.2   Estimating the coefficients of an exchange rate basket              333


                                   DEM/USD
              1.7
              1.6
          Y
              1.5
              1.4




                 1992   1993    1994          1995   1996    1997
                                          X


                                       JPY/USD
              130
              120
              110
          Y
              100
              90
              80




                 1992   1993    1994          1995   1996    1997
                                          X


                                       THB/USD
              26
              25.5
          Y
              25
              24.5




                 1992   1993    1994          1995   1996    1997
                                          X

          Figure 15.3. Exchange rate time series.       XFGbasket.xpl



empirical analysis we find out that the relationship (15.9) is fulfilled during
the whole period under investigation for any of the four methods that we use
to estimate the basket weights. Therefore it is possible to construct a mean
334                                   15   Locally time homogeneous time series modeling


                                           1 month interest rates




                   10
           Y*E-2
                   5
                   0




                        1992   1993          1994        1995       1996   1997
                                                     X



                                           3 month interest rates
                   3
                   2
           Y*E-2
                   1
                   0




                        1992   1993          1994        1995       1996   1997
                                                     X

      Figure 15.4. Interest rates time series: German (thick dotted line),
      Japanese (thin dotted line), American (thick straight line), Thai (thin
      straight line). XFGbasket.xpl



self-financing strategy which produces a positive expected payoff:

   • at time t
          – borrow the portfolio (1+rj )−1 E(θj,t+h |Ft )Xj,t from the countries
                                P
            composing the basket,
          – lend (1 + r0 )−1 Yt to Thailand,
          – invest the difference (1 + rj )−1 E(θj,t+h |Ft )Xj,t − (1 + r0 )−1 Yt in
                                   P
            the numeraire currency at the risk-free rate r1 ,
   • at time t + h
          – withdraw the amount Yt+h from Thailand,
15.2   Estimating the coefficients of an exchange rate basket                         335

                                    P
         – pay back the loan of          E(θj,t+h |Ft )Xj,t+h ,
         – keep the difference.

The expression for the profit and for its expected value are:
                           p
                           X
       Πt+h    = Yt+h −          E(θj,t+h |Ft )Xj,t+h
                           j=1
                                                                                     
                                  p
                                  X
                   +(1 + r1 )          (1 + rj )−1 E(θj,t+h |Ft )Xj,t − (1 + r0 )−1 Yt 
                                  j=1
                                                                              
                              Xp
E(Πt+h |Ft )   =   (1 + r1 )  (1 + rj )−1 E(θj,t+h |Ft )Xj,t − (1 + r0 )−1 Yt  .
                              j=1



15.2.2     Estimation results

For the implementation of the investment strategy described above one needs
the estimate of the, possibly time-varying, basket weights. The precision of
the estimation has a direct impact on the economic result of the investment.
Therefore, we compare four different estimators of the basket weights: the
adaptive, the recursive, the window and the Kalman filter estimator using
economic criteria for a one month and for a three month investment horizon.
In particular we compute the average expected profit and the average realized
profit.
The adaptive estimation procedure requires three parameters: m, λ and µ. The
choice of m0 does not influence the results very much and it can be reasonably
set to 30. This value represents the minimal amount of data which are used
for the estimation, and in the case of a structural break, the minimal delay
before having the chance of detecting the change point. The selection of λ and
µ is more critical. These two values determine the sensitivity of the algorithm.
Small values would imply a fast reaction to changes in the regressor coefficients,
but but they would also lead to the selection of intervals of homogeneity which
are possibly too small. Large values would imply a slower reaction and con-
sequently the selection of intervals which can be too large. To overcome this
problem we suggest the following approach.
The main idea is that small changes in the values of λ and µ should not affect
the estimation results. Therefore we restrict our attention on a set S of possible
336                                15      Locally time homogeneous time series modeling


                                              USD weight




                          8
            0.028+Y*E-2
                          6
                          4
                          2




                            1994    1995               1996         1997
                                                  X

                                              DEM weight
                          6
                          4
            Y*E-2
                          2
                          0




                            1994    1995               1996         1997
                                                  X

                                              JPY weight
                          0.7
                          0.6
                          0.5
            Y
                          0.4
                          0.3
                          0.2




                            1994    1995               1996         1997
                                                  X
      Figure 15.5. Estimated exchange rate basket weights: adaptive
      (straight line), recursive (thine dotted line), window (thick dotted line).



pairs (λ, µ). In the present context we chose all the even number between 2
and 8:
                       S = {(λ, µ)| λ, µ ∈ {2, 4, 6, 8}}
15.2   Estimating the coefficients of an exchange rate basket                  337


Then we compare the 16 pairs with the following criterion at each time t:
                                                                     2
                                    t−1
                                    X              d
                                                   X
             (λ∗ , µ∗ ) = arg min          Ys −         θbj,s|s−h Xj,s  .
                         (λ,µ)∈S s=t−200           j=1


Finally, we estimate the value of θbt+h|t with the selected pair (λ∗ , µ∗ ). The
appeal of the above selection criterion consists of the fact that it leads to the
choice of the pair (λ, µ) which has provided the least quadratic hedging costs
over the past trading periods. Notice that in general we have different results
depending on the length of the forecasting horizon: here one and three month.
Figure 15.5 shows the results for the three month horizon. It is interesting to
see that the adaptive estimate tends to coincide with the recursive estimate
during the first half of the sample, more or less, while during the second half
of the sample it tends to follow the rolling estimate.
We remark that the problem of selecting free parameters is not specific to the
adaptive estimator. The window estimator requires the choice of the length
of the window: k, while the Kalman filter needs the specification of the data
generating process of θt and the determination of Σ and σ. In this application
k is set equal to 250, Σ and σ are estimated recursively from the data using the
OLS, while θb0|0 and P0|0 are initialized using the first 350 observations which
are then discarded. We remark that this choice is consistent with the one of
Christoffersen and Giorgianni (2000).
Table 15.2 shows the result of the simulated investment. The investments are
normalized such that at each trading day we take a short position of 100 USD
in the optimal portfolio of the hard currencies. The result refers to the period
April 9 1993 to February 12 1997 for the one month horizon investment and
June 7 1993 to February 12 1997 for the three month horizon investment. Notice
first that the average realized profits are positive and, as far as the three month
investment horizon is concerned, they are significantly larger than zero among
all methods. This provides a clear evidence for the fact that arbitrage profits
were possible with in the framework of the Thai Bath basket for the period
under study. The comparison of the estimator also show the importance of
properly accounting for the time variability of the parameters. The recursive
estimator shows modest result as far as the realized profits are concerned and
the largest bias between expected the realized profit. On one side, the bias is
reduced by the window estimator and by the Kalman filter, but on the other
side these two methods provide a worse performance as far as the realized profit
are concerned. Finally, the adaptive estimator appears to be the best one, its
338                       15     Locally time homogeneous time series modeling


      ONE MONTH HORIZON                Recursive Window          KF      Adaptive

      Average Expected Profits            .772           .565   .505       .553

      Average Realized Profit             .403           .401   .389       .420

      Standard errors                    (.305)      (.305)     (.330)    (.333)

      THREE MONTH HORIZON              Recursive Window          KF      Adaptive

      Average Expected Profits           1.627       1.467      1.375     1.455

      Average Realized Profit            1.166       1.141      1.147     1.182

      Standard errors                    (.464)      (.513)     (.475)    (.438)

                Table 15.2. Summary statistics of the profits.


bias is much smaller than the one of the recursive estimator and it delivers the
largest realized profits for both investment horizons.


15.3       Estimating the volatility of financial time
           series
The locally time homogeneous approach appears to be also appropriate for the
estimation of the volatility of financial time series. In order to provide some
motivation we first describe the stylized facts of financial time series. Let St
define the price process of a financial asset such as stocks or exchange rates,
then the returns are defined as follows:

                                Rt = ln St − ln St−1 .

Stylized facts of financial asset returns are: a leptokurtic density, variance
clustering and highly persistent autocorrelation of square and absolute returns
(see Figure 15.6). Further details and examples on this topic can be found in
Taylor (1986) and in Franke, Härdle and Hafner (2001).
15.3   Estimating the volatility of financial time series                      339



                                              returns
                5
                0
        Y*E-2
                -5




                     0     50      100          150        200    250    300
                                                 X

                           ACF of the absolute returns
                15
                10
        Y*E-2
                5
                0




                 0          10           20           30         40      50
                                                 X
                     Figure 15.6. JPY/USD returns            XFGretacf.xpl



15.3.1          The standard approach

The returns of financial time series are usually modeled by the following equa-
tion:
                                   Rt = σ t εt
Where σt is a strictly positive process, which describes the dynamics of the vari-
ance of Rt , and ξt has a standard normal distribution: ξt ∼ N (0, 1). Standard
parametric models of the volatility are of (G)ARCH type:

                                 σt2 = ω + αRt−1
                                             2       2
                                                 + βσt−1 ,
340                        15   Locally time homogeneous time series modeling


like in Engle (1995) and Bollerslev (1995), and of stochastic volatility type:

                          ln σt2 = θ0 + θ1 ln σt−1
                                               2
                                                   + νt ,

as described by Harvey, Ruiz and Shephard (1995). These models have been
expanded in order to incorporate other characteristics of the financial return
time series: TARCH, EGARCH and QARCH explicitly assume an asymmet-
ric reaction of the volatility process to the sign of the observed returns, while
IGARCH and FIGARCH model the long memory structure of the autocorre-
lations of the square returns.


15.3.2     The locally time homogeneous approach

A common feature to all the models which have been cited in the previous
section is that they completely describe the volatility process by a finite set of
parameters. The availability of very large samples of financial data has given
the possibility of constructing models which display quite complicated param-
eterizations in order to explain all the observed stylized facts. Obviously those
models rely on the assumption that the parametric structure of the process
remains constant through the whole sample. This is a nontrivial and possi-
bly dangerous assumption in particular as far as forecasting is concerned as
pointed out in Clements and Hendry (1998). Furthermore checking for param-
eter instability becomes quite difficult if the model is nonlinear, and/or the
number of parameters is large. Whereby those characteristics of the returns
which are often explained by the long memory and (fractal) integrated nature
of the volatility process, could also depend on the parameters being time vary-
ing. We want to suggest an alternative approach which relies on a locally time
homogeneous parameterization, i.e. we assume that the volatility σ follows a
jump process and is constant over some unknown interval of time homogeneity.
The adaptive algorithm, which has been presented in the previous sections,
also applies in this case; its aim consists in the data-driven estimation of the
interval of time homogeneity, after which the estimate of the volatility can be
simply obtained by local averaging.


15.3.3     Modeling volatility via power transformation

Let St be an observed asset process in discrete time, t = 1, 2, . . . , τ and Rt
are the corresponding returns: Rt = log(St /St−1 ) . We model this process via
15.3   Estimating the volatility of financial time series                    341


the conditional heteroscedasticity assumption

                                 Rt = σt εt ,                            (15.10)

where εt , t ≥ 1 , is a sequence of independent standard Gaussian random
variables and σt is the volatility process which is in general a predictable
random process, that is, σt is measurable with respect to Ft−1 with Ft−1 =
σ(R1 , . . . , Rt−1 ) .
The model equation (15.10) links the volatility σt with the observations Rt
via the multiplicative errors εt . In order to apply the theory presented in
Section 15.1 we need a regression like model with additive errors. For this
reason we consider the power transformation, which leads to a regression with
additive noise and so that the noise is close to a Gaussian one, see Carroll and
Ruppert (1988). Due to (15.10) the random variable Rt is conditionally on
Ft−1 Gaussian and it holds

                            E Rt2 |Ft−1 = σt2 .
                                        


Similarly, for every γ > 0 ,
                          γ
                 E Rt |Ft−1 = σtγ E (|ξ|γ |Ft−1 ) = Cγ σtγ ,
                                

              γ              2                    2
          E Rt − Cγ σtγ |Ft−1 = σt2γ E (|ξ|γ − Cγ ) = σt2γ Dγ2

where ξ denotes a standard Gaussian r.v., Cγ = E|ξ|γ and Dγ2 = Var|ξ|γ .
Therefore, the process |Rt |γ allows for the representation

                         |Rt |γ = Cγ σtγ + Dγ σtγ ζt ,                   (15.11)

where ζt is equal (|ξ|γ − Cγ ) /Dγ . A suitable choice of the value of γ provides
that the distribution of
                                (|ξ|γ − Cγ ) /Dγ
is close to the normal. In particular the value of γ = 0.5 appears to be almost
optimal, see Figure 15.7.


15.3.4     Adaptive estimation under local time-homogeneity

The assumption of local time homogeneity means that the function σt is
constant within an interval I = [τ − m, τ ] , and the process Rt follows the
342                                15      Locally time homogeneous time series modeling



                   Normal and powertransformed densities



             1
         Y
             0.5
             0




                   -1                 0                        1                    2
                                                         X
      Figure 15.7. Normal and power transformed densities for γ = 0.5.
        XFGpowtrans.xpl



regression-like equation (15.11) with the constant trend θI = Cγ σIγ which can
be estimated by averaging over this interval I :
                                             1      X
                                      θbI =                  |Rt |γ .                     (15.12)
                                            |I|
                                                    t∈I

By (15.11)

                Cγ      X             Dγ X γ       1 X      sγ X
          θbI =               σtγ +       σt ζt =      θt +      θt ζt                    (15.13)
                |I|                   |I|         |I|       |I|
                        t∈I                 t∈I                     t∈I             t∈I

with sγ = Dγ /Cγ so that

                                                                         1 X
                                                  EθbI        =     E        θt ,         (15.14)
                                                                        |I|
                                                                           t∈I
                                                   !2
                               s2γ    X                              s2γ X 2
                                  2
                                    E   θt ζt                 =          E θt .           (15.15)
                              |I|                                   |I|2
                                        t∈I                                 t∈I

Define also
                                                   s2γ X 2
                                          vI2 =         θt .
                                                  |I|2
                                                         t∈I
15.3   Estimating the volatility of financial time series                   343


In view of (15.15) this value is called the conditional variance of θbI . Under
local homogeneity it holds θt is constantly equal to θI for t ∈ I , and hence,

                            EθbI   = θI
                                                   s2γ θI2
                             vI2   =   Var θbI =           .
                                                    |I|


A probability bound analogous to the one in Section 15.1 holds also in this
case. Let the volatility coefficient σt satisfy the condition b ≤ σt2 ≤ bB with
some constants b > 0, B > 1 . Then there exists aγ > 0 such that it holds for
every λ ≥ 0

                                   √                       λ2
                                                           
        P |θbI − θτ | > λvI ≤ 4 eλ(1 + log B) exp −             .        (15.16)
                                                          2aγ

The proof of the statement above and some related theoretical results can be
found in Mercurio and Spokoiny (2000).
For practical application one has to substitute the unknown conditional stan-
dard deviation with its estimate: vbI = sγ θbI |I|−1/2 . Under the assumption of
time homogeneity within an interval I = [τ − m, τ ] equation (15.16) allows
to bound |θbI − θbJ | by λb vI + µbvJ for any J ⊂ I, provided that λ and µ
are sufficiently large. Therefore we can apply the same algorithm described in
Section 15.1 in order to estimate the largest interval of time homogeneity and
the related value of θbτ . Here, as in the previous section, we are faced with
the choice of three tuning parameters: m0 , λ, and µ. Simulation studies and
repeated trying on real data by Mercurio and Spokoiny (2000) have shown that
the choice of m0 is not particularly critical and it can be selected between 10
and 50 without affecting the overall results of the procedure.
As described in Section 15.2.2, the choice of λ and µ is more delicate. The
influence of λ and µ is similar to the one of the smoothing parameters in
the nonparametric regression. The likelihood of rejecting a time homogeneous
interval decreases with increasing λ and/or µ. This is clear from equation
(15.6). Therefore if λ and µ are too large this would make the algorithm too
conservative, increasing the bias of the estimator, while too small values of
λ and µ would lead to a frequent rejection and to a high variability of the
estimate. Once again, a way of choosing the optimal values of λ and µ can be
made through the minimization of the squared forecast error. One has to define
a finite set S of the admissible pair of λ and µ. Then for each pair belonging
344                         15   Locally time homogeneous time series modeling

                                                    (λ,µ)
to S one can compute the corresponding estimate: θbt      and then select the
optimal pair and the corresponding estimate by the following criterion:
                                      T                       2
                                                       (λ,µ)
                                      X
                     (λ,
                      b µb) = min           |Rt |γ − θbt            .
                              λ,µ∈S
                                      t=0

Figure 15.8 shows the result of the on-line estimation of the locally time homo-
geneous volatility model for the JPY/USD exchange rate. The bottom plot, in
particular, shows the estimated length of the interval of time homogeneity: m,b
at each time point.


15.4       Technical appendix
In this section we give the precise conditions under which the bound (15.4)
holds. Define:                 X
                     VI = σ −2     Xt Xt>    WI = VI−1 ,
                                  t∈I

furthermore let wij,I denote the√elements of WI . For some positive constants
b > 0, B > 1, ρ < 1, r ≥ 1, λ > 2 and for i = 1 . . . p consider the random set
were the following conditions are fulfilled:
                                             −1                    
                         
                                      b ≤ wjj,I    ≤ bB            
                                                                    
                         
                                                                   
                                                                    
                         
                                                                   
                                                                    
               Ai,I =               sup       ||V I µ|| w
                                                       2 jj,I ≤ r
                             {µ∈RK :||µ||=1}                       
                         
                                                                   
                                                                    
                         
                                                                   
                                                                    
                             |wji,I /wjj,I | ≤ ρ ∀ i = 1, . . . , p
                                                                   

Let (Y1 , X1 ) . . . (Yτ , Xτ ) obey (15.1), where the regressors are possibly stochas-
tic, then it holds holds for the estimate θbI :
                      √             
  P |θbi,I − θi,τ | > λ wii,I ; Ai,I
                                p
           ≤ 4e ln(4B)(1 + 2ρ r(d − 1)λ)p−1 λ exp(−λ2 /2),              i = 1, . . . , p.

A proof of this statement can be found in Liptser and Spokoiny (1999). For
a further generalization, where the hypothesis of local time homogeneity holds
only approximatively, see Härdle et al. (2000).
15.4   Technical appendix                                                     345


                                         YEN/DM returns
                         10
                         5
          Y*E-2
                         0
                         -5
                         -10




                               0   5           10          15    20
                                                    X*E3


                                             Volatility
                         10
          0.0002+Y*E-4
                         8
                         6
                         4
                         2




                               0   5           10          15    20
                                                    X*E3


                                       Interval of homogeneity
                         10
          Y*E2
                         5




                               0   5           10          15    20
                                                    X*E3
    Figure 15.8. From the top: returns, estimated locally time homoge-
    neous volatility and estimated length of the interval of time homogene-
    ity.  XFGlochom.xpl



Bibliography
Bollerslev, T. (1995). Generalised autoregressive conditional heteroskedasticity,
     in Engle (1995).
346                       15   Locally time homogeneous time series modeling


Carroll, R. and Ruppert, D. (1988). Transformation and Weighting in Regres-
    sion, Chapman and Hall, New York.
Christoffersen, P. and Giorgianni, L. (2000). Interest rate in currency basket:
    Forecasting weights and measuring risk, Journal of Business and Eco-
    nomic Statistics 18: 321–335.
Chui, C. and Chen, G. (1998). Kalman Filtering, Information Sciences, third
    edn, Springer-Verlag, Berlin.
Clements, M. P. and Hendry, D. F. (1998). Forecastng Economic Time Series,
    Cambridge University Press, Cambridge.

Cooley, T. F. and Prescott, E. C. (1973). An adaptive regression model, Inter-
    national Economic Review 14: 364–371.
Eichengreen, B., Masson, P., Savastano, M. and Sharma, S. (1999). Transition
    Strategies and Nominal Anchors on the Road to Greater Exchange Rate
    Flexibility, number 213 in Essays in International Finance, Princeton Uni-
    versity Press.
Elliot, R. J., Aggoun, L. and Moore, J. B. (1995). Hidden Markov Models,
     Springer-Verlag, Berlin.
Engle, R. F. (ed.) (1995). ARCH, selected readings, Oxford University Press,
    Oxford.
Franke, J., Härdle, W. and Hafner, C. (2001). Einführung in die Statistik der
    Finanzmärkte, Springer, Berlin.

Härdle, W., Herwartz, H. and Spokoiny, V. (2001). Time inhomogeous multiple
     volatility modelling. Discussion Paper 7, Sonderforschungsbereich 373,
     Humboldt-Universität zu Berlin. To appear in Financial Econometrics.
Härdle, W., Spokoiny, V. and Teyssière, G. (2000). Adaptive estimation for
     a time inhomogeneouse stochastic volatility model. Discussion Paper 6,
     Sonderforschungsbereich 373, Humboldt-Universität zu Berlin.

Harvey, A., Ruiz, E. and Shephard, N. (1995). Multivariate stochastic variance
    models, in Engle (1995).
Lepski, O. (1990). One problem of adaptive estimation in gaussian white noise,
    Theory Probab. Appl. 35: 459–470.
15.4   Technical appendix                                                   347


Lepski, O. and Spokoiny, V. (1997). Optimal pointwise adaptive methods in
    nonparametric estimation, Annals of Statistics 25: 2512–2546.
Liptser, R. and Spokoiny, V. (1999). Deviation probability bound for mar-
     tingales with applications to statistical estimation, Stat. & Prob. Letter
     46: 347–357.
Mercurio, D. and Spokoiny, V. (2000).        Statistical inference for time-
    inhomogeneous volatility models. Discussion Paper 583, Weierstrass In-
    stitute for Applied Analysis and Stochastic, Berlin.
Mercurio, D. and Torricelli, C. (2001). Estimation and arbitrage opportunities
    for exchange rate baskets. Discussion Paper 37, Sonderforschungsbereich
    373, Humboldt-Universität zu Berlin.
Musiela, M. and Rutkowski, M. (1997). Martingale Methods in Financial Mod-
    elling, number 36 in Application of Mathemathics. Stochastic Modelling
    and Applied Probability, Springer, New York.
Spokoiny, V. (1998). Estimation of a function with discontinuities via lo-
    cal polynomial fit with an adaptive window choice, Annals of Statistics
    26: 1356–1378.
Taylor, S. J. (1986). Modelling Financial Time Series, Wiley, Chichester.
16 Simulation based Option Pricing
                                        Jens Lüssem and Jürgen Schumacher




16.1     Simulation techniques for option pricing
We introduce Monte Carlo techniques and Quasi Monte Carlo techniques for
option pricing. First, we give an idea how to use simulation techniques to
determine option prices, then - using the developed basic methods - we give
examples how to price more complex i.e. exotic options even on more than one
underlying. Finally we present a short guideline how to price exotic options
with the proposed techniques.
First, we take a look at a European put on one underlying stock, a pricing
problem which can be solved analytically e.g. by using the Black-Scholes for-
mula. We start with this problem not only because it has become a kind of
”standard problem” but also to have the possibility to compare the results of
our approximation with an analytical solution. At the same time we look at
the time-complexity of the used simulation technique. Next, we show how to
price path dependent options with Monte Carlo methods. Afterwards, we show
how to price a stock option on several underlyings. This implies that we have
to solve a multi-dimensional simulation problem.


16.1.1    Introduction to simulation techniques

The idea behind randomized algorithms is that a random sample from a pop-
ulation (of input variables) is representative for the whole population. As a
consequence, a randomized algorithm can be interpreted as a probability dis-
tribution on a set of deterministic algorithms.
We will see that there are three main advantages to randomized algorithms:
1. Performance: For many problems, it can be shown that randomized algo-
350                                                 16   Simulation based Option Pricing


rithms run faster than the best known deterministic algorithm. 2. Simplicity:
Randomized algorithms are easier to describe and implement than comparable
deterministic algorithms. 3. Flexibility: Randomized algorithms can be easily
adapted.
In general one distinguishes two types of randomized algorithms. Las Vegas
algorithms are randomized algorithms that always give correct results with
only the variation from one run to another being its running time. Monte
Carlo algorithms are randomized algorithms that may produce an incorrect
solution for which one can bound the probability of occurrence. The quality of
the solution can be seen as a random variable.
Within this chapter, we focus on Monte Carlo algorithms calculating the value
of the following integral       Z
                                                  f (x)dx                            (16.1)
                                         [0,1]d

by evaluation of f (x) for independent uniform distributed random vectors
X1 , X2 , . . . , Xn , Xi ∈ [0, 1]d .
The arithmetic mean of the values f (Xi ) can be seen as a guess for the expected
value of the random variable f (Xi ) and therefore can be interpreted as an
approximation for the value of the integral. According to the strong law of
large numbers the estimator for the expected value (the arithmetic mean of
the random function values) is converging to the expected value (the value of
the integral) with an increasing sample size. The probability that the absolute
error of the approximation result exceeds a fixed positive value  is limited and
decreases to zero with an increasing sample size if the variance of f is finite.


16.1.2      Pricing path independent European options on one
            underlying

For the case of a European option on one underlying we have to approximate
the following integral via Monte Carlo simulation:

                                          Z ∞
         er(T −t) E [CT (ST )|St ]   =            CT (ST )g(ST |St , r, σ, T − t)dST (16.2)
                                            0
                                          Z
                                     =              CT {f (x, St , r, σ, T − t)}dx   (16.3)
                                            [0,1)
16.1   Simulation techniques for option pricing                                       351


Where
                                      n                              2
                                                                                  o
                                                                       )(T −t)))2
                                   exp − (log ST −(log S2σt −(r−0.5σ
                                                            2 (T −t)
         g(ST |St , r, σ, T − t) =            p
                                                     2
                                                2πσ (T − t)ST

is the risk neutral density function of the Black Scholes model with parameters:

ST      :   price of the underlying at maturity
St      :   price of the underlying at time t
r       :   risk free interest rate
σ       :   volatility of log returns of the underlying
T −t    :   time to maturity

                                             1                √
   ST = f (x, St , r, σ, T − t) = St exp{(r − σ 2 )(T − t) + σ T − tF −1 (x)}
                                             2
transforms the uniform distributed values x in g(ST |St , r, σ, T − t) distributed
underlying values ST . F −1 (x) is the inverse of the cumulative normal distri-
bution function and CT (y) is the payoff function of the option.
The Monte Carlo simulation calculates the value of the integral in the following
way:

  1. n independent random underlying values ST1 . . . STn are generated by com-
     puting f (x, St , r, σ, T −t) for a set of uniformly distributed pseudo random
     numbers X1 , . . . , Xn .
  2. the option payoff CT (STi ) is calculated for each STi .
  3. the value of the integral in (16.3) is then approximated by the arithmetic
     mean of the option payoffs:
                                                 n
                                              1X
                                       C̄ =         CT (STi )
                                              n i=1

We will now derive an estimate of the approximation error of the arithmetic
mean. We assume that ST1 . . . STn are independent random underlying samples
of the g(ST |St , r, σ, T − t) density. Using this assumption we can conclude that
C̄ is a random variable with expected value

                               E[C̄]    = er(T −t) Ct (St )
352                                            16    Simulation based Option Pricing


Additionally we have to assume that the variance of the option payoffs CT (ST )
is given by:
                   Z
                                                                          2
  Var [CT (ST )] =     CT (ST )2 g(ST |St , r, σ, T − t)dST − E [CT (ST )] (16.4)
                       [0,∞]

exists. Then we get:
                           n
                         1 X                 1
                              Var CT (STi ) = Var [CT (ST )]
                                        
                Var C̄ = 2                                                    (16.5)
                        n i=1                n

because of the independence of ST1 , . . . , STn .
The expected value of the random variable C̄ equals the value of the inte-
gral er(T −t) Ct (St ) and its variance converges to zero with increasing n. The
probability that the approximation error is greater than a fixed positive value
decreases to 0 with an increasing number n. A first estimation of the error is
given by the Chebychev inequality for C̄,

                                                     1
                                                     Var [CT (ST )]
                    P |C̄ − er(T −t) Ct (St )| ≥ a ≤ n
                                                            a2
The bound given by this equation is rather imprecise since we do not make any
assumptions on the distribution of the random variable. Only the expected
value and the variance are used in the previous equation. According to the
central limit theorem the distribution of C̄ converges to a normal distribution
for n → ∞. It follows that the difference between the approximation and the
integral, C̄ − er(T −t) Ct (St ) is approximately normally distributed with mean 0
and standard deviation
                                        r
                                          Var [CT (ST )]
                                  σC̄ =                                      (16.7)
                                                n
for large n. According to Boyle (1977) a value of n > 1000 is sufficiently large
in order to use the normal distribution for error estimation purposes.

We get the following equation if we assume that C̄ − er(T −t) Ct (St ) is normal
distributed:

                                                 Z 
                                                            u2
                                                               
                                            1
        P       C̄ − er(T −t) Ct (St ) ≤  = √       exp −        du          (16.8)
                                               2π −       2σC̄
16.1   Simulation techniques for option pricing                                           353


If we choose k as a multiple of the standard deviation σC̄ of C̄, then we get:

                                                                                       !
           
                    r(T −t)
                                                           C̄ − er(T −t) Ct (St )
       P       C̄ − e         Ct (St ) ≤ kσC̄         = P                           ≤k
                                                                    σC̄
                                                             Z k       2
                                                          1                u
                                                      = √        exp −           du
                                                          2π −k            2
                                                      = p                               (16.9)

                                                                          √
Given a fixed probability level p, the error converges to zero with O(1/ n).
The error interval holds for k = 1, 2, 3 with the respective probabilities p =
0.682, 0.955, 0.997
The confidence intervals for a given probability level depend on the standard
deviation of the payoff function CT (ST ):
                                   p
                            σCT = Var [CT (ST )] .                     (16.10)

In general, this standard deviation cannot be calculated with analytical meth-
ods. Therefore one calculates the empirical standard deviation σ̄ and uses it
as a proxy for the error bounds:
                            v
                            u        n
                            u 1 X                     2
                       σ̄ = t            CT (STi ) − C̄ .              (16.11)
                              n−1
                                                k=1


Figure 16.1 shows the evolution of the absolute error of the price for a European
call option calculated by Monte Carlo methods compared with √         the analytic
solution. One can observe that the error tends to zero with O (1/ n).
We would like to give some of the main properties of algorithms using Monte
Carlo techniques.
            √      First from (16.9) it follows that the error bound tends to zero
with O (1/ n) for a fixed probability level p. Second,
                                                     √      the probability that a
fixed error bound holds converges to 1 with O (1/ n), Mavin H. Kalos (1986).
Since these results hold independent of the dimension of the problem, which
affects only the variance of the payoff function with respect to the Black-Scholes
risk neutral density, the Monte Carlo method is especially well suited for the
evaluation of option prices in multidimensional settings. Competing pricing
methods e.g finite differences have exponential growing computational costs in
354                                                                           16   Simulation based Option Pricing



                                                                Errors in MC Simulation




                        0.03 0.06 0.09 0.12 0.15
       absolute error




                                               0                      500000                        1000000
                                                                  number of iterations
      Figure 16.1. Absolute error of a European Call option price calculated
      by Monte Carlo simulations vs. n−1/2



the dimension of the problem. Another advantage of the Monte Carlo pricing
method is the error estimate given by the empirical standard deviation which
can be computed with a small additional effort.
The two most important drawbacks of the Monte Carlo simulation, mentioned
in literature are its small convergence speed compared to other techniques for
options on few underlyings and the difficulties occurring for options with early
exercise possibilities. For example, American options giving the investor the
possibility to exercise the option at any time before and at maturity, are difficult
to price. To evaluate an American option means to find an optimal exercise
strategy which leads - using only basic Monte Carlo techniques - to a recursive
algorithm with exponential time-complexity. But more advanced techniques
using importance sampling methods show that Monte Carlo simulations can
be applied to evaluate American contracts, Broadie (2000).


16.1.3                                             Pricing path dependent European options on one
                                                   underlying

There are two categories of options. Path-independent options are options
whose payoff depends only on the underlying prices at maturity. Path-
16.1   Simulation techniques for option pricing                                 355


dependent options are options whose payoff depends on underlying price out-
comes St1 , . . ., Stm at several time points t1 ≤ . . . ≤ tm within the lifetime of
the respective option.
Within the group of path-dependent options one can distinguish options with
a payoff function depending on a continuously defined path variable and op-
tions with a payoff function depending on a fixed number of underlying values.
The price of an option with many - usually equally spaced - exercise dates is
often approximated by the price of an option with a continuously defined path
variable and vice versa.
Examples for path-dependent options are barrier options, lookback options,
and Asian options. The latter have a payoff function which is linked to the
average value of the underlying on a specific set of dates during the life of
the option. One distinguishes two basic forms of Asian options: options on
the geometric mean (for which the price can be calculated with standard tech-
niques) and options on the arithmetic mean (for which the price can not be
determined using standard approaches). Asian options are frequently used in
commodity markets. The volatility of the underlying prices of the commodities
is usually very high so that prices for vanilla options are more expensive than
for comparable Asian-style options.


16.1.4     Pricing options on multiple underlyings

In this section we show how to extend the Monte Carlo simulation technique
to higher dimensions. The problem is not only that one has to deal with higher
dimensional integrals, but also that one has to incorporate the underlying cor-
relation structure between the considered securities. In our framework we need
the covariance matrix of the log returns on an annual basis.
In general, a basket option is an option on several underlyings (a basket of
underlyings). Basket options can be European-, American or even Asian-style
options. Normally, the average of the underlying prices is taken to calculate
the price of the basket option, but sometimes other functions are used.
The advantage of the usage of basket options instead of a series of one dimen-
sional options is that the correlation between securities is taken into account.
This may lead to better portfolio hedges. We will look at a basket option on
five underlyings where the underlying price of the best security in the basket
is taken to calculate the option price.
356                                             16    Simulation based Option Pricing


16.2      Quasi Monte Carlo (QMC) techniques for
          option pricing

16.2.1    Introduction to Quasi Monte Carlo techniques

QMC methods can be considered as an alternative to Monte Carlo simulation.
Instead of (pseudo) random numbers, Quasi Monte Carlo algorithms use the
elements of low discrepancy sequences to simulate underlying values.
The discrepancy of a set of points P ⊂ [0, 1]s measures how evenly these points
are distributed in the unit cube. The general measure of discrepancy is given
by:

                                            A(B; P )
                      Dn (B; P ) := sup              − λs (B)                   (16.12)
                                        B∈B   n
where A(B; P ) is the number of points in P belonging to B, λs (B) is the
Lebesgue measure of the set B, B is a family of Lebesgue measurable subsets
of [0, 1]s , and n is the number of elements in P .
The discrepancy of a set is the largest difference between the number of points
             Qs the measure of the subset. If we define B to be the family J of
in a subset and
subintervals i=1 [0, ui ), then we get a special measure, the star-discrepancy:

                                 Dn∗ (P ) := Dn (J ; P )                        (16.13)


16.2.2    Error bounds

For the star-discrepancy measure and reasonable assumption on the nature of
the function that has to be integrated an upper bound on the error is given by
the following theorem:

THEOREM 16.1 (Koksma-Hlawka) If the function f is of finite variation
V (f ) in the sense of Hardy and Krause, then the following equation holds for
all sets of points {x1 , . . . , xn } ⊂ I s = [0, 1]s
                  n              Z
               1X
                     f (xi ) −         f (u)du ≤ V (f )Dn∗ (x1 , . . . , xn )   (16.14)
               n i=1              Is
16.2   Quasi Monte Carlo (QMC) techniques for option pricing                 357


A proof is given in Niederreiter (1992).

This means that the error is bounded from above by the product of the
variation V (f ), which in our case is model and payoff dependent and the star-
discrepancy of the sequence. The bound cannot be used for an automatic error
estimation since the variation and the star-discrepancy cannot be computed
easily. It has been shown though that sequences exist with a star-discrepancy
of the order O(n−1 (ln n)s ). All sequences with this asymptotic upper bound
are called low-discrepancy sequences Niederreiter (1992). One particular
low-discrepancy sequence is the Halton sequence.



16.2.3     Construction of the Halton sequence

We start with the construction of the one-dimensional Halton sequence within
the interval [0, 1]. An element of this sequence is calculated by using the fol-
lowing equation:
                                    X∞
                              xi =      nk,i p−k−1                      (16.15)
                                           k=0
with i > 0, p = 2 and nk,i determined by the following equation:
                         ∞
                         X
                    i=         nk,i pk ;    0 ≤ nk,i < p; nk,i ∈ N       (16.16)
                         k=0

Note that with the above equation nk,i is a function of i and takes values only
in {0; 1}. To illustrate the algorithm we calculate the first three points.

 i = 1: n0,1 = 1, nk,1 = 0 for every k > 0
 i = 2: n1,2 = 1, nk,2 = 0 for every k 6= 1
 i = 3: n0,3 = n1,3 = 1, nk,3 = 0 for every k > 1

Therefore we get the sequence 1/2, 1/4, 3/4, 1/8, 5/8, .... The extension of this
construction scheme to higher dimensions is straightforward. For every dimen-
sion j = 1, . . . , d we define xji by
                                        ∞
                                        X
                                xji =         nk,i (j)p−k−1
                                                       j                 (16.17)
                                        k=0
358                                               16   Simulation based Option Pricing


with pj is the jth smallest prime number and nk,i (j) is calculated as follows:
                ∞
                X
           i=         nk,i (j)pkj ;   0 ≤ nk,i (j) < pj ; nk,i (j) ∈ N ∀j      (16.18)
                k=0

By using p1 = 2, p2 = 3 we get the following two-dimensional Halton sequence:
(1/2; 1/3), (1/4; 2/3), .... In contrast to grid discretization schemes like i/n i =
1, ..., n low-discrepancy sequences fill the integration space in an incremental
way avoiding the exponential growth of grid points of conventional schemes.
XploRe provides quantlets to generate pseudo random numbers and low dis-
crepancy sequences. For the generation of the pseudo random numbers we use


      erg = randomnumbers (seqnum,d,n)
           generates n pseudo random vectors of dimension d

where seqnum is the number of the random generator according to Table 16.1,
d is the dimension of the random vector and n the number of vectors generated.

           0   Park and Miller with Bays-Durham shuffle
           1   L’Ecuyer with Bays-Durham shuffle
           2   Knuth
           3   generator from G. Marsaglia et al. Marsaglia (1993)
           4   random number generator of your system
           5   generator from ACM TOMS 17:98-111
           6   multiply with carry gen. (Marsaglia) Marsaglia (1993)
           Table 16.1. Random generator that can be used in XploRe


The generation of low discrepancy sequences is provided by


      erg = lowdiscrepancy (seqnum,d,n)
           generates the first n low discrepancy sequence vectors of dimen-
           sion d

where seqnum is the number of the low discrepancy sequence according to Table
16.2.
16.2              Quasi Monte Carlo (QMC) techniques for option pricing                                359


                                         0      Halton sequence
                                         1      Sobol sequence
                                         2      Faure sequence
                                         3      Niederreiter sequence
          Table 16.2.       Low-discrepancy sequences available in XploRe,
          (Niederreiter, 1992) .



16.2.4                Experimental results

Figure 16.2 shows that two dimensional Halton points are much more equally
spaced than pseudo random points. This leads to a smaller error at least for
“smooth” functions.

                     First 1000 random points                           First 1000 Halton points
                                                                1
      1
dimension 2




                                                          dimension 2
    0.5




                                                              0.5
      0




                                                                0




              0                0.5                  1               0             0.5              1
                           dimension 1                                        dimension 1
          Figure 16.2.     1000 two-dimensional pseudo random points
          vs.        1000 Halton points       XFGSOPRandomNumbers.xpl,
             XFGSOPLowDiscrepancy.xpl



The positive effect of using more evenly spread points for the simulation task
is shown in Figure 16.3. The points of a low-discrepancy sequence are designed
in order to fill the space evenly without any restrictions on the independence
of sequence points where as the pseudo random points are designed to show no
statistically significant deviation from the independence assumption. Because
of the construction of the low discrepancy sequences one cannot calculate an
360                                                       16   Simulation based Option Pricing


                                     Errors in QMC vs. MC Simulation




                           -5
      log absolute error
                           -10




                                 0               500000                         1000000
                                            number of iterations
      Figure 16.3. Absolute error of a random sequence and the Halton
      sequence for a put option


empirical standard deviation of the estimator like for Monte Carlo methods
and derive an error approximation for the estimation. One possible way out
of this dilemma is the randomization of the low-discrepancy sequences using
pseudo random numbers i.e. to shift the original quasi random numbers with
pseudo random numbers Tuffin (1996). If x1 , . . . , xn are scalar elements of a
low-discrepancy sequence X then we can define a new low discrepancy sequence

                                                      
                                                          xi +          xi +  <= 1
  W () = {y1 , . . . , yn }         with      yi =                                       (16.19)
                                                          (xi + ) − 1   otherwise

for a uniformly distributed value . Then we can calculate an empirical stan-
dard deviation of the price estimates for different sequences W () for indepen-
dent values  which can be used as a measure for the error. Experiments with
payoff functions for European options show that this randomization technique
reduces the convergence rate proportionally.
The advantage of the Quasi Monte Carlo simulation compared to the Monte
Carlo simulation vanishes if the dimension increases. Especially the compo-
nents with a high index number of the first elements in low-discrepancy se-
quences are not evenly distributed Niederreiter (1992). Figure 16.4 shows that
the 49th and 50th component of the first 1000 Halton points are not evenly
distributed. But the result for the first 10000 points of the sequence shows that
the points become more evenly spread if the number of points increases.
16.3               Pricing options with simulation techniques - a guideline                             361


                      First 1000 Halton Points                          First 10000 Halton Points
      1




                                                           1
dimension 50




                                                     dimension 50
    0.5




                                                         0.5
      0




                                                           0



               0                0.5              1                  0             0.5               1
                            dimension 49                                      dimension 49
           Figure 16.4. The first 1000 and 10000 Halton points of dimension 49
           and 50 XFGSOPLowDiscrepancy.xpl



However by using the Brownian Bridge path construction method we can limit
the effect of the high dimensional components on a simulated underlying path
and the corresponding path variable for the most common path dependent
options, Morokoff (1996). This method start with an empty path with known
start value and calculates at each step the underlying value for a time point
with maximum time distance to all other time points with known underlying
value until the whole path is computed. Experimental results show that we
can still get a faster convergence of the QMC simulation for options up to 50
time points if we apply this path construction method.


16.3                  Pricing options with simulation techniques -
                      a guideline
In this section we would like to give a short guideline how to price exotic
options with Monte Carlo and Quasi Monte Carlo simulation techniques
within the framework described above. Furthermore we give some indications
about the limits of these techniques.
362                                            16   Simulation based Option Pricing


16.3.1     Construction of the payoff function

As a first step we have to define the payoff function corresponding to our
option product. Within the methods defined in the quantlib finance we have
to consider three different cases.

One underlying + path independent
In this case the payoff function is called by the pricing routine with the sim-
ulated underlying value at maturity as the single argument. It calculates the
corresponding payoff and returns this value. We have defined the payoff func-
tion for a put option with strike price 100 as an example for a one dimensional
payoff function.

Several underlying + path independent
For options whose payoff depends on the underlying values of several assets at
maturity, we have to define a payoff function on the vector of the underlying
values at maturity. An example for such an option is an exchange option that
permits to swap a defined share with the best performing share in a basket. Its
payoff function is given by:

       CT ((ST1 , . . . , ST5 )) = max{0, αi (STi − K i ) + 55 − ST3 |i = 1, .., 5}


One underlying + path dependent
The third category of option types that are captured are path dependent op-
tions on one underlying. The payoff function of these options depends on the
underlying values at several fixed time points during the lifetime of the option.
Payoff functions for these contracts are called with a vector of underlying val-
ues whose ith element is the underlying value at the time ti which has to be
specified in the model.


16.3.2     Integration of the payoff function in the simulation
           framework

After defining the payoff function in XploRe we can start to calculate a price
estimate with the help of the appropriate simulation routine. In the one di-
mensional case we just have to call
16.3   Pricing options with simulation techniques - a guideline              363



    erg = BlackScholesPathIndependent1D (s0,r,vola,dt,opt,
                                                              itr,gen)
         MC estimation of the option price for a path independent option.
    erg = BlackScholesPathIndependent1DQMC (s0,r,vola,dt,opt,
                                                         itr,gen)
         QMC estimation of the option price for a path independent
         option.

to get a price estimate and for the Monte Carlo case an empirical standard
deviation with respect to a start price of s0, a continuous risk free interest
rate of r, a volatility vola, a time to maturity of dt years, the payoff function
opt, sample size itr and the random/low-discrepancy generator with number
gen. Table 16.1 shows the random number generators and table 16.2 the low-
discrepancy generators that can be used. An application of these routines for
a Put option can be found in XFGSOP1DPut.xpl.
Pricing path-dependent options is only slightly more complicated. Here we
have to define the vector of time points for which underlying prices have to
be generated. This vector replaces the time to maturity used to price path
independent options. Then we can apply one of the following methods to
compute a price estimate for the path dependent option


    erg = BlackScholesPathDependent1D (s0,r,vola,times,opt,
                                                      itr,gen)
         MC estimation of the option price for path-dependent options.
    erg = BlackScholesPathDependent1DQMC (s0,r,vola,times,opt,
                                                        itr,gen)
         QMC estimation of the option price for path-dependent options,
         with:

with respect to the start price s0, the continuous risk free interest rate r, the
volatility vola, the time scheme times, the payoff function opt, sample size
itr and the random/low-discrepancy generator with number gen, as given in
Tables 16.1 and 16.2. Using the above quantlets, we calculate the price of an
Asian call option in XFGSOP1DAsian.xpl.
364                                       16   Simulation based Option Pricing


In the case of multidimensional options we have to define a start price vector
and a covariance matrix instead of a single underlying price and volatility value.
Then we can call one of the multi-dimensional simulation routines:


      erg = BlackScholesPathIndependentMD (s0,r,vola,dt,opt
                                                          ,itr,gen)
           MC estimation of the option price in the multidimensional Black
           Scholes model

      erg = BlackScholesPathIndependentMDQMC (s0,r,vola,dt,opt
                                                        ,itr,gen)
           QMC estimation of the option price in the multidimensional
           Black Scholes model

with respect to the m dimensional start price vector s0, the continuous risk free
interest rate r, the m×m covariance matrix vola, the time to maturity dt, the
payoff function opt, the number of iterations itr and the generator number
gen according to the generators in Tables 16.1 and 16.2. Both quantlets are
illustrated in XFGSOPMD.xpl.
If in addition a dividend is paid during the time to maturity, we can use the
following two quantlets to calculate the option prices.


      erg = BlackScholesPathIndependentMDDiv (s0,r,div,vola
                                                  ,dt,opt,itr,gen)
           MC estimation of the option price in the multidimensional Black
           Scholes model
      erg = BlackScholesPathIndependentMDDivQMC (s0,r,div,vola
                                                 ,dt,opt,itr,gen)
           QMC estimation of the option price in the multidimensional
           Black Scholes model

The additional argument div is a m dimensional vector of the continuously paid
dividends. An application of these functions for our basket option is provided
in XFGSOPMDDiv.xpl.
16.3   Pricing options with simulation techniques - a guideline              365


16.3.3     Restrictions for the payoff functions

Monte Carlo based option pricing methods are not applicable for all types of
payoff functions. There is one theoretical, and some practical limitations for
the method. Let us look at the theoretical limitation first.
In the derivation of the probabilistic error bounds we have to assume the ex-
istence of the payoff variance with respect to the risk neutral distribution. It
follows that we are no longer able to derive the presented error bounds if this
variance does not exist. However for most payoff functions occurring in practice
and the Black Scholes model the difference between the payoff samples and the
price can be bounded from above by a polynomial function in the difference
between the underlying estimate and the start price for which the integral with
respect to the risk neutral density exists. Consequently the variance of these
payoff functions must be finite.
Much more important than the theoretical limitations are the practical limi-
tations. In the first place Monte Carlo simulation relies on the quality of the
pseudo random number generator used to generate the uniformly distributed
samples. All generators used are widely tested, but it can’t be guaranteed
that the samples generated for a specific price estimation exhibit all assumed
statistical properties. It is also important to know that all generators produce
the same samples in a fixed length cycle. For example if we use the random
number generator from Park and Miller with Bays-Durham shuffle, we will get
the same samples after ≈ 108 method invocations.
Another possible error source is the transformation function which converts the
uniformly distributed random numbers in normally distributed number. The
approximation to the inverse of the normal distribution used in our case has a
maximum absolute error of 10−15 which is sufficiently good.
The most problematic cases for Monte Carlo based option pricing are options
for which the probability of an occurrence of a strictly positive payoff is very
small. Then we will get either price and variance estimates based on a few
positive samples if we hit the payoff region or we get a zero payoff and variance
if this improbable event does not occur. However in both cases we will get a
very high relative error. More accurate results may be calculated by applying
importance sampling to these options.
366                                    16   Simulation based Option Pricing


Bibliography
Bauer, H. (1991). Wahrscheinlichkeitstheorie, W. de Gruyter.
Bosch, K. (1993). Elementare Einführung in die Wahrscheinlichkeitsrechnung,
    Vieweg.
Boyle, P. P. (1977). Options: A monte carlo approach, Journal of Financial
    Economics 4: 323–338.
Broadie, M., Glasserman, P., and Ha,Z. (2000 ) Pricing American Options by
    Simulation Using a Stochastic Mesh with Optimized Weights, Probabilistic
    Constrained Optimization: Methodology and Applications, S. Uryasev ed.,
    Kluwer.
Marsaglia, George (1993 ) Monkey tests for random number generators, Com-
    puters & Mathematics with Applications 9: 1-10.
Niederreiter, H. (1992). Random number generation and Quasi Monte Carlo
    methods, 1 edn, Capital City Press, Monpellier Vermont.
Joy, C.,Boyle, P., and Tan, K. S. (1996). Quasi monte carlo methods in nu-
     merical finance, Management Science 42(6): 926–936.

Tuffin, Bruno (1996). On the use of low discrepancy sequences in Monte Carlo
     Methods, Technical Report IRISA - Institut de Recherche en Informatique
     et Systemes Aleatoires 1060.
Morokoff, William J.,andCaflish, Russel E. (1996 ) Quasi-monte carlo simula-
    tion of random walks in finance, In Monte Carlo and Quasi-Monte Carlo
    methods, 340-352, University of Salzburg, Springer.
Malvin H. Kalos (1986) Monte Carlo Methods, Wiley
17 Nonparametric Estimators of
   GARCH Processes
                        Jürgen Franke, Harriet Holzberger and Marlene Müller


The generalized ARCH or GARCH model (Bollerslev, 1986) is quite popular
as a basis for analyzing the risk of financial investments. Examples are the
estimation of value-at-risk (VaR) or the expected shortfall from a time series
of log returns. In practice, a GARCH process of order (1,1) often provides a
reasonable description of the data. In the following, we restrict ourselves to
that case.
We call {εt } a (strong) GARCH (1,1) process if
                          εt    = σt Zt
                          σt2   = ω + α ε2t−1 + β σt−1
                                                   2
                                                                           (17.1)
with independent identically distributed innovations Zt having mean 0 and
variance 1. A special case is the integrated GARCH model of order (1,1) or
IGARCH(1,1) model where α + β = 1 and, frequently, ω = 0 is assumed, i.e.
                          σt2 = α ε2t−1 + (1 − α) σt−1
                                                   2
                                                       .
This model forms the basis for the J.P. Morgan RiskMetrics VaR analysis using
exponential moving averages (Franke, Härdle and Hafner, 2001, Chapter 15).
The general GARCH(1,1) process has finite variance σ 2 = ω/(1 − α − β) if α +
β < 1, and it is strictly stationary if E{log(α Zt2 + β)} < 0. See Franke, Härdle
and Hafner (2001, Chapter 12) for these and further properties of GARCH
processes.
In spite of its popularity, the GARCH model has one drawback: Its sym-
metric dependence on past returns does not allow for including the leverage
effect into the model, i.e. the frequently made observation that large negative
returns of stock prices have a greater impact on volatility than large posi-
tive returns. Therefore, various parametric modifications like the exponential
368                       17    Nonparametric Estimators of GARCH Processes


GARCH (EGARCH) or the threshold GARCH (TGARCH) model have been
proposed to account for possible asymmetric dependence of volatility on re-
turns. The TGARCH model, for example, introduces an additional term into
the volatility equation allowing for an increased effect of negative εt−1 on σt2 :
        εt = σt Zt ,   σt2 = ω + α ε2t−1 + α− ε2t−1 · 1(εt−1 < 0) + β σt−1
                                                                       2
                                                                           .
To develop an exploratory tool which allows to study the nonlinear depen-
dence of squared volatility σt2 on past returns and volatilities we introduce a
nonparametric GARCH(1,1) model
                               εt    = σt Zt
                               σt2               2
                                     = g(εt−1 , σt−1 )                         (17.2)
where the innovations Zt are chosen as above. We consider a nonparametric
estimator for the function g based on a particular form of local smoothing.
Such an estimate may be used to decide if a particular parametric nonlinear
GARCH model like the TGARCH is appropriate.
We remark that the volatility function g cannot be estimated by common kernel
or local polynomial smoothers as the volatilities σt are not observed directly.
Bühlmann and McNeil (1999) have considered an iterative algorithm. First,
they fit a common parametric GARCH(1,1) model to the data from which they
get sample volatilities σ
                        bt to replace the unobservable true volatilities. Then,
they use a common bivariate kernel estimate to estimate g from εt and σ     bt2 .
Using this preliminary estimate for g they obtain new sample volatilities which
are used for a further kernel estimate of g. This procedure is iterated several
times until the estimate stabilizes.
Alternatively, one could try to fit a nonparametric ARCH model of high order
to the data to get some first approximations σ bt2 to σt2 and then use a local
linear estimate based on the approximate relation
                                bt2 ≈ g(εt−1 , σ
                                σ                2
                                               bt−1 ).
However, a complete nonparametric approach is not feasible as high-order non-
parametric ARCH models based on σt2 = g(εt−1 , . . . , εt−p ) cannot be reliably
estimated by local smoothers due to the sparseness of the data in high dimen-
sions. Therefore, one would have to employ restrictions like additivity to the
ARCH model, i.e. σt2 = g1 (εt−1 ) + . . . + gp (εt−p ), or even use a parametric
ARCH model σt2 = ω + α1 ε2t−1 + . . . + αp ε2t−p . The alternative we consider here
is a direct approach to estimating g based on deconvolution kernel estimates
which does not require prior estimates σ bt2 .
17.1   Deconvolution density and regression estimates                            369


17.1      Deconvolution density and regression
          estimates
Deconvolution kernel estimates have been described and extensively discussed
in the context of estimating a probability density from independent and identi-
cally distributed data (Carroll and Hall, 1988; Stefansky and Carroll, 1990). To
explain the basic idea behind this type of estimates we consider the deconvo-
lution problem first. Let ξ1 , . . . , ξN be independent and identically distributed
real random variables with density pξ (x) which we want to estimate. We do
not, however, observe the ξk directly but only with additive errors η1 , . . . , ηN .
Let us assume that the ηk as well are independent and identically distributed
with density pη (x) and independent of the ξk . Hence, the available data are

                         Xk = ξk + ηk ,      k = 1, . . . , N.

To be able to identify the distribution of the ξk from the errors ηk at all, we
have to assume that pη (x) is known. The density of the observations Xk is just
the convolution of pξ with pη :

                              px (x) = pξ (x) ? pη (x) .

We can therefore try to estimate px (x) by a common kernel estimate and ex-
tract an estimate for pξ (x) out of it. This kind of deconvolution operation is
preferably performed in the frequency domain, i.e. after applying a Fourier
transform. As the subsequent inverse Fourier transform includes already a
smoothing part we can start with the empirical distribution of X1 , . . . , XN in-
stead of a smoothed version of it. In detail, we calculate the Fourier transform
or characteristic function of the empirical law of X1 , . . . , XN , i.e. the sample
characteristic function
                                          N
                                       1 X iωXk
                             φbx (ω) =        e     .
                                       N
                                             k=1
Let                                          Z ∞
                      φη (ω) = E(eiωηk ) =         eiωu pη (u) du
                                              −∞

denote the (known) characteristic function of the ηk . Furthermore, let K be
a common kernel function, i.e. a nonnegative
                                           R continuous function which is
symmetric around 0 and integrates up to 1: K(u) du = 1, and let
                                   Z
                         φK (ω) = eiωu K(u) du
370                      17    Nonparametric Estimators of GARCH Processes


be its Fourier transform. Then, the deconvolution kernel density estimate of
pξ (x) is defined as
                                   Z ∞
                               1                             φbx (ω)
                  pbh (x) =              e−iωx φK (ωh)               dω .
                              2π    −∞                       φη (ω)

The name of this estimate is explained by the fact that it may be written
equivalently as a kernel density estimate
                                           N                    
                                     1 X h             x − Xk
                        pbh (x) =       K
                                    Nh                    h
                                          k=1

with deconvolution kernel
                                         Z ∞
                                    1                   φK (ω)
                     K h (u) =                 e−iωu            dω
                                   2π    −∞            φη (ω/h)

depending explicitly on the smoothing parameter h. Based on this kernel esti-
mate for probability densities, Fan and Truong (1993) considered the analogous
deconvolution kernel regression estimate defined as
                                    N                   
                            1 X h               x − Xk
                 m
                 b h (x) =     K                             Yk / pbh (x).
                           Nh                      h
                                   k=1

This Nadaraya-Watson-type estimate is consistent for the regression function
m(x) in an errors-in-variables regression model

              Yk = m(ξk ) + Wk ,         Xk = ξk + ηk ,        k = 1, . . . , N,

where W1 , . . . , WN are independent identically distributed zero-mean random
variables independent of the Xk , ξk , ηk which are chosen as above. The Xk , Yk
are observed, and the probability density of the ηk has to be known.


17.2      Nonparametric ARMA Estimates
GARCH processes are closely related to ARMA processes. If we square a
GARCH(1,1) process {εt } given by (17.1) then we get an ARMA(1,1) process

                     ε2t = ω + (α + β) ε2t−1 − β ζt−1 + ζt ,
17.2   Nonparametric ARMA Estimates                                          371


where ζt = σt2 (Zt2 − 1) is white noise, i.e. a sequence of pairwise uncorrelated
random variables, with mean 0. Therefore, we study as an intermediate step
towards GARCH processes the nonparametric estimation for ARMA models
which is more closely related to the errors-in-variables regression of Fan and
Truong (1993). A linear ARMA(1,1) model with non-vanishing mean ω is given
by
                          Xt+1 = ω + a Xt + b et + et+1

with zero-mean white noise et . We consider the nonparametric generalization
of this model
                          Xt+1 = f (Xt , et ) + et+1                  (17.3)
for some unknown function f (x, u) which is monotone in the second argument
u. Assume we have a sample X1 , . . . , XN +1 observed from (17.3). If f does
not depend on the second argument, (17.3) reduces to a nonparametric autore-
gression of order 1
                            Xt+1 = f (Xt ) + et+1
and the autoregression function f (x) may be estimated by common kernel es-
timates or local polynomials. There exists extensive literature about that type
of estimation problem, and we refer to the review paper of Härdle, Lütkepohl
and Chen (1997). In the general case of (17.3) we again have the problem of
estimating a function of (partially) non-observable variables. As f depends also
on the observable time series Xt , the basic idea of constructing a nonparamet-
ric estimate of f (x, u) is to combine a common kernel smoothing in the first
variable x with a deconvolution kernel smoothing in the second variable u. To
define the estimate we have to introduce some notation and assumptions.
We assume that the innovationsR v et have a known probability density pe with
distribution function Pe (v) = −∞ pe (u) du and with Fourier transform φe (ω) 6=
0 for all ω and

               |φe (ω)| ≥ c · |ω|β0 exp(−|ω|β /γ) for |ω| −→ ∞

for some constants c, β, γ > 0, β0 . The nonlinear ARMA process (17.3) has
to be stationary and strongly mixing with exponentially decaying mixing co-
efficients. Let p(x) denote the density of the stationary marginal density of
Xt .
The smoothing kernel K x in x-direction is a common kernel function with
compact support [−1, +1] satisfying 0 ≤ K x (u) ≤ K x (0) for all u. The kernel
K which is used in the deconvolution part has a Fourier transform φK (ω)
372                       17     Nonparametric Estimators of GARCH Processes


which is symmetric around 0, has compact support [−1, +1] and satisfies some
smoothness conditions (Holzberger, 2001). We have chosen a kernel with the
following Fourier transform:

      φK (u) = 1 − u2                                                  for |u| ≤ 0.5
      φK (u) = 0.75 − (|u| − 0.5) − (|u| − 0.5)2
               −220 (|u| − 0.5)4 + 1136 (|u| − 0.5)5
               −1968 (|u| − 0.5)6 + 1152 (|u| − 0.5)7                  for 0.5 ≤ |u| ≤ 1.

For convenience, we use the smoothing kernel K x to be proportional to that
function: K x (u) ∝ φK (u). The kernel K x is hence an Epanechnikov kernel
with modified boundaries.
Let b = C/N 1/5 be the bandwidth for smoothing in x-direction, and let h =
A/ log(N ) be the smoothing parameter for deconvolution in u-direction where
A > π/2 and C > 0 are some constants. Then,
                                          N +1            
                                    1     X         x − Xt
                     pbb (x) =                 Kx
                                 (N + 1)b t=1          b

is a common Rosenblatt–Parzen density estimate for the stationary density
p(x).
Let q(u) denote the stationary density of the random variable f (Xt , et ), and
let q(u|x) be its conditional density given Xt = x. An estimate of the latter is
given by
                         N                                             
                      1 X h           u − Xt+1           x       x − Xt
       qbb,h (u|x) =          K                      K                        / pbb (x)   (17.4)
                     N hb t=1             h                         b

where the deconvolution kernel K h is
                                 Z ∞
                               1             φK (ω)
                    K h (u) =         e−iωu          dω .
                              2π −∞         φe (ω/h)

In (17.4) we use a deconvolution smoothing in the direction of the second
argument of f (x, u) using only pairs of observations (Xt , Xt+1 ) for which |x −
Xt | ≤ b, i.e. Xt ≈ x. By integration, we get the conditional distribution
function of f (Xt , et ) given Xt = x
                                                   Z v
               Q(v|x) = P(f (x, et ) ≤ v|Xt = x) =      q(u|x) du
                                                                  −∞
17.2   Nonparametric ARMA Estimates                                                373


and its estimate
                                Z v                     Z aN
                Q
                b b,h (v|x) =          qbb,h (u|x)du            qbb,h (u|x) du
                                 −aN                      −aN

for some aN ∼ N 1/6 for N → ∞. Due to technical reasons we have to cut off
the density estimate in regions where it is still unreliable for given N . The
particular choice of denominator guarantees that Q  b b,h (aN |x) = 1 in practice,
since Q(v|x) is a cumulative distribution function.
To estimate the unconditional density q(u) of f (Xt , et ) = Xt+1 − et+1 , we use
a standard deconvolution density estimate with smoothing parameter h∗ =
A∗ / log(N )
                                     N                 
                                1 X            u − Xt
                    qbh∗ (u) =          K h∗               .
                               N h∗ t=1          h∗

RLet
  v
     pe (u|x) be the conditional density of et given Xt = x, and let Pe (v|x) =
  −∞ e
      p (u|x) du be the corresponding conditional distribution function. An es-
timate of it is given as
                       Z v                        Z aN
        Pbe,h∗ (v|x) =     qbh∗ (x − u) pe (u)du        qbh∗ (x − u) pe (u) du
                       −aN                                −aN

where again we truncate at aN ∼ N 1/6 .
To obtain the ARMA function f , we can now compare Q(v|x) and Pe (v|x).
In practice this means to relate Q
                                 b b,h (v|x) and Pbe,h∗ (v|x). The nonparametric
estimate for the ARMA function f (x, v) depending on smoothing parameters
b, h and h∗ is hence given by
                                           b −1 (Pbe,h∗ (v|x) |x)
                         fbb,h,h∗ (x, v) = Q b,h

if f (x, v) is increasing in the second argument, and
                                        b −1 (1 − Pbe,h∗ (v|x) |x)
                      fbb,h,h∗ (x, v) = Q b,h


if f (x, v) is a decreasing function of v for any x. Q       b −1 (·|x) denotes the in-
                                                               b,h
verse of the function Q    b b,h (·|x) for fixed x. Holzberger (2001) has shown that
fbb,h,h∗ (x, v) is a consistent estimate for f (x, v) under suitable assumptions and
has given upper bounds on the rates of bias and variance of the estimate. We
remark that the assumption of monotonicity on f is not a strong restriction.
In the application to GARCH processes which we have in mind it seems to be
374                                17    Nonparametric Estimators of GARCH Processes


intuitively reasonable that the volatility of today is an increasing function of
the volatility of yesterday which translates into an ARMA function f which is
decreasing in the second argument.
Let us illustrate the steps for estimating a nonparametric ARMA process. First
we generate time series data and plot Xt+1 versus Xt .

    library("times")
    n=1000
    x=genarma(0.7,0.7,normal(n))
                                                                                    XFGnpg01.xpl
The result is shown in Figure 17.1. The scatterplot in the right panel of Fig-
ure 17.1 defines the region where we can estimate the function f (x, v).

                 ARMA(1,1) Time Series                             ARMA(1,1) Scatterplot
        5




                                                         5
        0




                                                         0
 X(t)




                                                  X(t)
        -5




                                                         -5




             0              5                10               -5               0           5
                          t*E2                                             X(t+1)

                                 Figure 17.1. ARMA(1,1) process.


To compare the deconvolution density estimate with the density of f (Xt , et )
we use now our own routine (myarma) for generating ARMA(1,1) data from a
known function (f):

    proc(f)=f(x,e,c)
      f=c[1]+c[2]*x+c[3]*e
    endp
17.2   Nonparametric ARMA Estimates                                       375


  proc(x,f)=myarma(n,c)
    x=matrix(n+1)-1
    f=x
    e=normal(n+1)
    t=1
    while (t<n+1)
      t=t+1
      f[t]=f(x[t-1],e[t-1],c)
      x[t]=f[t]+e[t]
    endo
    x=x[2:(n+1)]
    f=f[2:(n+1)]
  endp

  n=1000
  {x,f}=myarma(n,0|0.7|0.7)

  h=0.4
  library("smoother")
  dh=dcdenest(x,h)             // deconvolution estimate
  fh=denest(f,3*h)             // kernel estimate
                                                               XFGnpg02.xpl


Figure 17.2 shows both density estimates. Note that the smoothing parameter
(bandwidth h) is different for both estimates since different kernel functions
are used.




   f = nparmaest (x {,h {,g {,N {,R } } } } )
        estimates a nonparametric ARMA process




The function nparmaest computes the function f (x, v) for an ARMA process
according to the algorithm described above. Let us first consider an ARMA(1,1)
376                              17     Nonparametric Estimators of GARCH Processes


                                   Deconvolution Density




                         20
                         15
              q(u)*E-2
                         10
                         5
                         0




                                   -5            0          5
                                                u
      Figure 17.2. Deconvolution density estimate (solid) and kernel den-
      sity estimate (dashed) of the known mean function of an ARMA(1,1)
      process.



with f (x, v) = 0.3 + 0.6x + 1.6v, i.e.

                              Xt = 0.3 + 0.6Xt−1 + 1.6et−1 + et .

Hence, we use myarma with c=0.3|0.6|1.6 and call the estimation routine by

  f=nparmaest(x)
                                                                      XFGnpg03.xpl
The optional parameters N and R are set to 50 and 250, respectively. N con-
tains the grid sizes used for x and v. R is an additional grid size for internal
computations. The resulting function is therefore computed on a grid of size
N × N. For comparison, we also calculate the true function on the same grid.
Figure 17.3 shows the resulting graphs. The bandwidths h (corresponding to
h∗ ) for the one-dimensional deconvolution kernel estimator qb and g for the
17.2   Nonparametric ARMA Estimates                                     377


two-dimensional (corresponding to h and b) are chosen according to the rates
derived in Holzberger (2001).


                                   Linear ARMA(1,1)




                                  10.5




                                   0.7



               4.7
                                  -9.1
                     0.2

                           -4.3
                                                                4.7
                                                   0.2
                                          -4.3




   Figure 17.3. Nonparametric estimation of a (linear) ARMA process.
   True vs. estimated function and data.


As a second example consider an ARMA(1,1) with a truly nonlinear function
f (x, v) = −2.8 + 8F (6v), i.e.
                              Xt = −2.8 + 8F (6 et−1 ) + et ,
where F denotes the sigmoid function F (u) = (1 + e−u )−1 In contrast to
the previous example, this function is obviously not dependent on the first
argument. The code above has to be modified by using

  proc(f)=f(x,e,c)
378                                 17     Nonparametric Estimators of GARCH Processes


    f=c[2]/(1+exp(-c[3]*e))+c[1]
  endp
  c=-2.8|8|6
                                                                         XFGnpg04.xpl
The resulting graphs for this nonlinear function are shown in Figure 17.4. The
estimated surface varies obviously only in the second dimension and follows
the s-shaped underlying true function. However, the used sample size and
the internal grid sizes of the estimation procedure do only allow for a rather
imprecise reconstruction of the tails of the surface.


                               Nonlinear ARMA(1,1)




                                     4.2




                                     0.8



                 4.2
                                    -2.5
                       0.2

                             -3.9
                                                                4.2
                                                        0.2
                                                 -3.9




      Figure 17.4. Nonparametric estimation of a (nonlinear) ARMA process.
      True vs. estimated function and data.
17.3   Nonparametric GARCH Estimates                                                    379


17.3      Nonparametric GARCH Estimates
In the following, we consider nonparametric GARCH(1,1) models which depend
symmetrically on the last observation:

                               εt    = σt Zt ,                                        (17.5)
                               σt2   = g(ε2t−1 , σt−1
                                                  2
                                                      ).

Here, g denotes a smooth unknown function and the innovations Zt are chosen
as in as in Section 17.2. This model covers the usual parametric GARCH(1,1)
process (17.1) but does not allow for representing a leverage effect like the
TGARCH(1,1) process. We show now how to transform (17.5) into an ARMA
model. First, we define

                            Xt = log(ε2t ), et = log(Zt2 ).

By (17.5), we have now

                     Xt+1    =    log(ε2t+1 ) = log σt+12
                                                            + et+1
                                          2    2
                             =    log g(εt , σt ) + et+1
                             =    log g1 (log(ε2t ), log(σt2 )) + et+1
                             =    log g1 (Xt , Xt − et ) + et+1
                             =    f (Xt , et ) + et+1

with
                g1 (x, u) = g(ex , eu ),   f (x, v) = log g1 (x, x − v).
Now, we can estimate the ARMA function f (x, v) from the logarithmic squared
data Xt = log(ε2t ) as in Section 17.3 using the nonparametric ARMA estimate
fbb,h,h∗ (x, v) of (17.5). Reverting the transformations, we get

        gb1 (x, u) = exp{fbb,h,h∗ (x, x − u)}, gbb,h,h∗ (y, z) = gb1 (log y, log z)

or, combining both equations,
                                n                          o
           gbb,h,h∗ (y, z) = exp fbb,h,h∗ (log y, log(y/z)) ,        y, z > 0,

as an estimate of the symmetric GARCH function g(y, z).
We have to be aware, of course, that the density pe used in the deconvolution
part of estimating f (x, v) is the probability density of the et = log Zt2 , i.e. if
380                         17   Nonparametric Estimators of GARCH Processes


pz (z) denotes the density of Zt ,
                            1 n u/2                            o
                 pe (u) =      e pz (eu/2 ) + e−u/2 pz (e−u/2 ) .
                            2
If εt is a common parametric GARCH(1,1) process of form (17.1), then g(y, z) =
ω + αy + βz, and the corresponding ARMA function is f (x, v) = log(ω + αex +
βex−v ). This is a decreasing function in v which seems to be a reasonable
assumption in the general case too corresponding to the assumption that the
present volatility is an increasing function of past volatilities.
As an example, we simulate a GARCH process from

  proc(f)=gf(x,e,c)
    f=c[1]+c[2]*x+c[3]*e
  endp

  proc(e,s2)=mygarch(n,c)
    e=zeros(n+1)
    f=e
    s2=e
    z=normal(n+1)
    t=1
    while (t<n+1)
      t=t+1
      s2[t]=gf(e[t-1]^2,s2[t-1]^2,c)
      e[t]=sqrt(s2[t]).*z[t]
    endo
    e=e[2:(n+1)]
    s2=s2[2:(n+1)]
  endp




      f = npgarchest (x {,h {,g {,N {,R } } } } )
           estimates a nonparametric GARCH process
17.3     Nonparametric GARCH Estimates                                                   381


The function npgarchest computes the functions f (x, v) and g(y, z) for
a GARCH process using the techniques described above.      Consider a
GARCH(1,1) with
                     g(y, z) = 0.01 + 0.6 y + 0.2 z.
Hence, we use

  n=1000
  c=0.01|0.6|0.2
  {e,s2}=mygarch(n,c)

and call the estimation routine by

  g=npgarchest(e)
                                                                                XFGnpg05.xpl
Figure 17.5 shows the resulting graph for the estimator of f (x, v) together with
the true function (decreasing in v) and the data (Xt+1 versus Xt ). As in the
ARMA case, the estimated function shows the underlying structure only for a
part of the range of the true function.
Finally, we remark how the the general case of nonparametric GARCH models
could be estimated. Consider
                                    εt    = σt Zt                                      (17.6)
                                    σt2               2
                                          = g(εt−1 , σt−1 )
where σt2 may depend asymmetrically on εt−1 . We write
                     g(x, z) = g + (x2 , z) 1(x ≥ 0) + g − (x2 , z) 1(x < 0).

As g + , g − depend only on the squared arguments we can estimate them as
before. Again, consider Xt = log(ε2t ), et = log(Zt2 ). Let N+ be the number of
all t ≤ N with εt ≥ 0, and N− = N − N+ . Then, we set
                             N
                        1 X x x − Xt
       pb+
         b (x)   =              K (       )1(εt ≥ 0)
                       N+ b t=1       b
                              N                            
   +                     1 X h u − Xt+1                x − Xt
                                                  Kx            1(εt ≥ 0) pb+
                                                                         
 qbb,h (u|x)     =               K                                          b (x)
                       N+ hb t=1          h                b
                              N              
                         1 X           u − Xt
   qbh+∗ (u)     =               Kh∗            1(εt ≥ 0).
                       N+ h∗ t=1         h∗
382                                    17     Nonparametric Estimators of GARCH Processes



                         Nonparametric GARCH(1,1)




                                        8.1




                                        2.3



                 -4.2
                                       -3.5
                        -7.8

                               -11.4
                                                                   -4.2
                                                           -7.8
                                                   -11.4




      Figure 17.5. Nonparametric estimation of f (x, v) for a (linear) GARCH
      process. True vs. estimated function, data Xt = log(ε2t ).


b + (v|x), Pb+ ∗ (v|x) are defined as in Section 17.2 with qb+ , pb+ replacing qbb,h
Q b,h         e,h                                                  b,h b
and pbb , and, using both estimates of conditional distribution functions we get
                                      +
an ARMA function estimate fbb,h,h        ∗ (x, v). Reversing the transformation from

GARCH to ARMA, we get as the estimate of g + (x2 , z)
                                         n                           o
                   +         2              +            2       2
                 gbb,h,h ∗ (x , z) = exp  fbb,h,h ∗ log x , log(x /z)   .

The estimate for g − (x2 , z) is analogously defined
                                      n                           o
                −         2              −            2       2
              gbb,h,h ∗ (x , z) = exp  fbb,h,h ∗ log x , log(x /z)   .
17.3   Nonparametric GARCH Estimates                                       383

                              −
where, in the derivation of fbb,h,h ∗ , N+ and 1(εt ≥ 0) are replaced by N− and

1(εt < 0).




Bibliography
Bollerslev, T.P. (1986). Generalized autoregressive conditional heteroscedas-
     ticity, Journal of Econometrics 31: 307-327.
Bühlmann, P. and McNeil, A.J. (1999). Nonparametric GARCH-models,
     Manuscript, ETH Zürich, http://www.math.ethz.ch/∼mcneil.
Carroll, R.J. and Hall, P. (1988). Optimal rates of convergence for deconvolut-
    ing a density, J. Amer. Statist. Assoc. 83: 1184-1186.

Fan, J. and Truong, Y.K. (1993). Nonparametric regression with errors-in-
    variables, Ann. Statist. 19: 1257-1272.
Franke, J., Härdle, W. and Hafner, Ch. (2001). Statistik der Finanzmärkte,
    Springer, ebook: http://www.quantlet.de.
Härdle, W., Lütkepohl, H. and Chen, R. (1997). A review of nonparametric
     time series analysis, International Statistical Review 65: 49-72.
Holzberger, H. (2001). Nonparametric Estimation of Nonlinear ARMA and
    GARCH-processes, PhD Thesis, University of Kaiserslautern.
J.P. Morgan. RiskMetrics, http://www.jpmorgan.com.
Stefansky, L.A. and Carroll, R.J. (1990). Deconvoluting kernel density estima-
     tors, Statistics 21: 169-184.
18 Net Based Spreadsheets in
   Quantitative Finance
                                                                Gökhan Aydınlı




18.1      Introduction
Modern risk management requires accurate, fast and flexible computing envi-
ronments. To meet this demand a vast number of software packages evolved
over the last decade, accompanying a huge variety of programming languages,
interfaces, configuration and output possibilities. One solution especially de-
signed for large scale explorative data analysis is XploRe, a procedural program-
ming environment, equipped with a modern client/server architecture (Härdle
et al. (1999) and Härdle et al. (2000)).
As far as flexibility in the sense of openness and accuracy is concerned XploRe
has a lot to offer a risk analyst may wish. On the contrary its matrix oriented
programming language (Fickel, 2001) might be seen as a drawback in respect
to other computational approaches. In terms of learning curve effects and total
cost of ownership an alternative solution seems desirable.
This chapter will present and demonstrate the net based spreadsheet solution
MD*ReX designed for modern statistical and econometric analysis. We concen-
trate on examples of Value-at-risk (VaR) with copulas and means of quantifying
implied volatilities presented in Chapter 2 and 6. All results will be shown in
Microsoft Excel.
Recent research work suggests that the rationale for spreadsheet based sta-
tistical computing is manifold. Ours is to bring state-of-the-art quantitative
methods to the fingertips of spreadsheet users. Throughout this chapter we
will give a short introduction into our underlying technology, briefly explain
386                       18   Net Based Spreadsheets in Quantitative Finance


the usage of the aforementioned spreadsheet solution and provide applications
of this tool.


18.2      Client/Server based Statistical Computing
While the power of computing equipment increased exponentially, statistical
algorithms yielded higher efficiency in terms of computing time and accuracy.
Meanwhile the development of high capacity network architectures had an-
other positive impact on this trend, especially the establishment of the world
wide web. Consequently a vast number of researchers and programmers in
computational statistics as well as institutions like commercial banks, insurers
and corporations spent much effort to utilize this evolution for their field of
research. An outcome has been the technological philosophy of client/server
based statistical computing: meaning a decentralized combination of methods,
users and providers of statistical knowledge.
Our understanding of client/server based statistical computing is such that
there exists a formal relationship between user, provider and vendor of statis-
tical methodology. An easy to grasp example is a telephone call. The caller (in
our case the user demanding statistical methods and/or advice) calls (connects
via TCP/IP enabled networks) someone (a high-performance server/vendor of
statistical information and methods) who serves his call (the requested cal-
culation is done/information is displayed in a HTML browser, etc.). This
client/server understanding is an approach to gain scalability of computational
tasks, resource shifting of processing power and decentralization of methods.
There are numerous ways of implementing client/server based statistics, among
others Common Gateway Interfaces (CGI), JavaScript, Java Applets and Plug-
Ins are the most commonly used techniques. The technology behind the XploRe
client/server architecture is thoroughly explained in Kleinow and Lehmann
(2002). While that solution is applet based the spreadsheet client presented
here has an Add-in character. The MD*ReX-Client is a software tool, nested
within an spreadsheet application. In both cases the communication technique
relies on the protocol stack MD*CRYPT. For the spreadsheet solution the
Java based MD*CRYPT has to be modified. As Microsoft does not support
any Java natively for its Office suite, MD*CRYPT has been implemented as
a dynamic link library to utilize its interface for Office applications like Excel.
The technical aspects and the design philosophy of the MD*ReX-Client are
discussed in detail in Aydınlı et al. (2002).
18.3   Why Spreadsheets?                                                    387


18.3      Why Spreadsheets?
Since their first appearance in the late 1970s spreadsheets gained a remarkable
popularity in business as well as research and education. They are the most
common software managers, researchers and traders utilize for data analysis,
quantitative modelling and decision support.
Przasnyski and Seal (1996) find that most of the time series modeling done in
the business world is accomplished using spreadsheets. Further research work
suggests that those users have become so proficient with spreadsheets that they
are reluctant to adopt other software solutions. Not even a higher suitability
for specific applications is appealing then (Chan and Storey, 1996). An analysis
of XploRe download profiles conducted in a data mining framework confirmed
our perception of the statistical software market. A stunning majority of users
are using Excel for statistical analysis (Sofyan and Werwatz, 2001).
A major difference between a spreadsheet application and statistical program-
ming languages is the interaction model. This ”direct manipulation interaction
model” enables statistical computations e.g. by drag and drop (Neuwirth and
Baier, 2001). In the cell based framework of spreadsheets the direct aspect of
interaction means, that manipulations in one cell immediately effect the con-
tent of another cell. Of course this is only the case if the regarding cells are
interconnected with appropriate cell functions and references. Especially in
business applications the immediate visibility of numerical changes when cell
values are modified, is an appreciated feature for decision making based on
different scenarios.
Our approach is based on the philosophy to bring two ideals together: On
the one hand an accurate and reliable statistical engine (which is represented
by the XploRe Quantlet Server, XQS ) and on the other a user friendly and
intuitive Graphical User Interface like Excel. The numerical impreciseness of
Excel has been discussed exhaustively in the literature. As a starting point the
reader is referred to e.g. McCullough and Wilson (1999). The development of
MD*ReX is guided by the principles of usability and flexibility. Hence we try
to offer different modes of usage for varying user groups: a dialogue based and
more ”Windows” like appearance for the novice user of statistical software and
a ”raw” mode where the spreadsheet application merely functions as a data
import wizard and scratch-pad for the advanced user.
388                      18   Net Based Spreadsheets in Quantitative Finance


18.4      Using MD*ReX
We will demonstrate the usage of MD*ReX in the context of quantitative fi-
nancial modeling. In order to use MD*ReX a working installation of Excel 9.x
is required. Furthermore the installation routine will setup a Java runtime en-
vironment and if needed a Virtual Java Machine. For more information please
refer to http://md-rex.com/.
After successfully installing the client it can be used in two ways: for an on-
demand usage MD*ReX can be accessed via the Start → Programs shortcut
in Windows or if a permanent usage in Excel is requested, the Add-in can be
installed from the Extras → Add-in Manager dialogue in Excel. The rex.xla
file is located under

%Systemroot%\%Program Files%\MDTech\ReX\ReX.

In the latter case the client is available every time Excel is started. Anyway
the client can be accessed via the Excel menu bar (Figure 18.1) and exposes
its full functionality after clicking on the ReX menu item.




                   Figure 18.1. Excel and MD*ReX menus


In order to work with MD*ReX the user first has to connect herself to a running
XploRe Quantlet Server. This can either be a local server, which by default is
triggered if MD*ReX is started via the Programs shortcut, or any other XQS
somewhere on the Internet. Evidently for the latter option a connection to the
Internet is required. The Connect dialogue offers some pre-configured XQS’.
After the connection has been successfully established the user can start right
away to work with MD*ReX.
In contrast to XploRe, the user has the option to perform statistical analysis by
using implemented dialogues e.g. the Time Series dialogue in Figure 18.3. Via
18.4   Using MD*ReX                                                          389


this dialogue a researcher is able to conduct standard time series analysis tech-
niques as well as e.g. more refined nonlinear approaches like ARCH tests based
on neural networks. These interfaces encapsulate XploRe code while using the
standard Excel GUI elements hence undue learning overhead is minimized. Al-
ternatively one can directly write XploRe commands into the spreadsheet cells
and then let these run either via the menu button or with the context menu,
by right clicking the highlighted cell range (Figure 18.2). Furthermore it is
now much easier to get data to the XploRe Quantlet Server. Simply marking
an appropriate data range within Excel and clicking the Put button is enough
to transfer any kind of numerical data to the server. We will show this in the
next section. A further virtue of using a spreadsheet application is the com-
monly built-in database connectivity. Excel for example allows for various data
retrieval mechanisms via the Open Database Connectivity (ODBC) standard,
which is supported by most of the database systems available nowadays.




                       Figure 18.2. ReX Context Menu
390                      18   Net Based Spreadsheets in Quantitative Finance


18.5      Applications
In the following paragraph we want to show how MD*ReX might be used in
order to analyze the VaR using copulas as described in Chapter 2 of this book.
Subsequently we will demonstrate the analysis of implied volatility shown in
Chapter 6. All examples are taken out of this book and have been accordingly
modified. The aim is to make the reader aware of the need of this modification
and give an idea how this client may be used for other fields of statistical
research as well.




                 Figure 18.3. MD*ReX Time Series Dialogue


We have willingly omitted the demonstration of dialogues and menu bars as
it is pretty straightforward to develop these kind of interfaces on your own.
Some knowledge of the macro language Visual Basic for Applications (VBA)
integrated into Excel and an understanding of the XploRe Quantlets is sufficient
18.5   Applications                                                         391


to create custom dialogues and menus for this client. Thus no further knowledge
of the XploRe Quantlet syntax is required. An example is the aforementioned
Time Series dialogue, Figure 18.3.


18.5.1     Value at Risk Calculations with Copulas

The quantification of the VaR of a portfolio of financial instruments has become
a constituent part of risk management. Simplified the VaR is a quantile of the
probability distribution of the value-loss of a portfolio (Chapter 2). Aggregat-
ing individual risk positions is one major concern for risk analysts. The µ − σ
approach of portfolio management measures risk in terms of the variance, im-
plying a ”Gaussian world” (Bouyé et al., 2001). Traditional VaR methods are
hence based on the normality assumption for the distribution of financial re-
turns. Though empirical evidence suggests high probability of extreme returns
(”Fat tails”) and more mass around the center of the distribution (leptokurto-
sis), violating the principles of the Gaussian world (Rachev, 2001).
In conjunction with the methodology of VaR these problems seem to be
tractable with copulas. In a multivariate model setup a copula function is
used to couple joint distributions to their marginal distributions. The copula
approach has two major issues, substituting the dependency structure, i.e. the
correlations and substituting the marginal distribution assumption, i.e. relax-
ation of the Gaussian distribution assumption. With MD*ReX the user is now
enabled to conduct copula based VaR calculation with Excel, making use of
Excel’s powerful graphical capabilities and its intuitive interface.
The steps necessary are as follows:

  1. Get the according Quantlets into Excel,
  2. run them from there,
  3. obtain the result,
  4. create a plot of the result.

The first step is rather trivial: copy and paste the example Quantlet
  XFGrexcopula1.xpl from any text editor or browser into an Excel work-
sheet.
Next mark the range containing the Quantlet and apply the Run command.
Then switch to any empty cell of the worksheet and click Get to receive the
392                       18   Net Based Spreadsheets in Quantitative Finance


numerical output rexcuv. Generating a tree-dimensional Excel graph from this
output one obtains an illustration as displayed in Figure 18.4. The according
Quantlets are XFGrexcopula1.xpl, XFGrexcopula2.xpl,
  XFGrexcopula3.xpl and        XFGrexcopula4.xpl. They literally work the
same way as the XFGaccvar1.xpl Quantlet.




      Figure 18.4. Copulas: C4 (u, v) for θ = 2 and N = 30 (upper left),
      C5 (u, v) for θ = 3 and N = 21 (upper right), C6 (u, v) for θ = 4 and
      N = 30 (lower left), C7 (u, v) for θ = 5 and N = 30 (lower right)


Of course the steps 1-4 could easily be wrapped into a VBA macro with suitable
dialogues. This is exactly what we refer to as the change from the raw mode
of MD*ReX into the ”Windows” like embedded mode. Embedded here means
that XploRe commands (quantlets) are integrated into the macro language of
Excel.
The Monte Carlo simulations are obtained correspondingly and are depicted in
Figure 18.5. The according Quantlet is XFGrexmccopula.xpl. This Quant-
let again is functioning analogous to    XFGaccvar2.xpl. The graphical out-
put then is constructed along same lines: paste the corresponding results z11
through z22 in cell areas and let Excel draw a scatter-plot.
18.5   Applications                                                        393




   Figure 18.5. Monte Carlo Simulations for N = 10000 and σ1 = 1,
   σ2 = 1, θ = 3



18.5.2     Implied Volatility Measures

A basic risk measure in finance is volatility, which can be applied to a single
asset or a bunch of financial assets (i.e. a portfolio). Whereas the historic
volatility simply measures past price movements the implied volatility repre-
sents a market perception of uncertainty. Implied volatility is a contempora-
neous risk measure which is obtained by reversely solving an option pricing
model as the Black-Scholes model for the volatility. The implied volatility can
only be quantified if there are options traded which have the asset or assets
as an underlying (for example a stock index). The examples here are again
taken out of Chapter 6. The underlying data are VolaSurf02011997.xls,
VolaSurf03011997.xls and volsurfdata2. The data has been kindly pro-
vided by MD*BASE. volsurfdata2 ships with any distribution of XploRe. In
our case the reader has the choice of either importing the data into Excel via
the data import utility or simply running the command
data=read("volsurfdata2.dat"). For the other two data sets utilizing the
Put button is the easiest way to transfer the data to an XQS. Any of these
alternatives have the same effect, whereas the former is a good example of how
the MD*ReX client exploits the various data retrieval methods of Excel.
The Quantlet XFGReXiv.xpl returns the data matrix for the implied volatil-
ity surfaces shown in Figure 18.6 through 18.8. Evidently the Quantlet has to
394                      18   Net Based Spreadsheets in Quantitative Finance




              Figure 18.6. DAX30 Implied Volatility, 02.01.1997



be modified for the appropriate data set. In contrast to the above examples
where Quantlets could be adopted without any further modification, in this
case we need some redesign of the XploRe code. This is achieved with suitable
reshape operations of the output matrices. The graphical output is then ob-
tained by arranging the two output vectors x2 and y2 and the output matrix
z1.
The advantage of measuring implied volatilities is obviously an expressive vi-
sualization. Especially the well known volatility smile and the corresponding
time structure can be excellently illustrated in a movable cubic space. Further-
more this approach will enable real-time calculation of implied volatilities in
future applications. Excel can be used as a data retrieval front end for real-
time market data providers as Datastream or Bloomberg. It is imaginable then
to analyze tick-data which are fed online into such an spreadsheet system to
evaluate contemporaneous volatility surfaces.
18.5   Applications                                                        395




              Figure 18.7. DAX30 Implied Volatility, 03.01.1997



Bibliography
Aydınlı, G., Härdle, W., Kleinow, T. and Sofyan, H.(2002). ReX: Link-
    ing XploRe to Excel, forthcoming Computational Statistics Special Issue,
    Springer Verlag, Heidelberg.
Bouyé, E., Durrleman, V., Nikeghbali, A., Riboulet, G. and Roncalli, T.(2000).
396                      18   Net Based Spreadsheets in Quantitative Finance




                    Figure 18.8. DAX30 Implied Volatility



      Copulas for Finance, A Reading Guide and some Applications, unpub-
      lished manuscript, Financial Econometrics Research Centre, City Univer-
      sity Business School, London, 2000.
Chan, Y.E. and Storey, V.C. (1996). The use of spreadsheets in organizations:
    determinants and consequences, Information & Management, Vol. 31,
18.5    Applications                                                       397


       pp. 119-134.
Fickel, N. (2001). Book Review: XploRe - Learning Guide, Allgemeines Statis-
     tisches Archiv, Vol. 85/1, p. 93.
Härdle, W., Klinke, S. and Müller, M. (1999). XploRe Learning Guide, Springer
     Verlag, Heidelberg.
Härdle, W., Hlavka, Z. and Klinke, S. (2000). XploRe Application Guide,
     Springer Verlag, Heidelberg.
Kleinow, T. and Lehmann, H. (2002). Client/Server based Statistical Com-
     puting, forthcoming in Computational Statistics Special Issue, Springer
     Verlag, Heidelberg.
McCullough, B.D. and Wilson, B. (1999). On the Accuracy of Statistical Pro-
   cedures in Microsoft Excel, Computational Statistics & Data Analysis,
   Vol. 31, p. 27-37.
Neuwirth, E. and Baier, T. (2001). Embedding R in Standard Software, and the
    other way round, DSC 2001 Proceedings of the 2nd International Work-
    shop on Distributed Statistical Computing.
Przasnyski, L.L. and Seal, K.C. (1996). Spreadsheets and OR/MS models: an
    end-user perspective, Interfaces, Vol. 26, pp. 92-104.
Rachev,   S. (2001).      Company Overview,     Bravo Consulting,
    http://www.bravo-group.com/inside/bravo-consulting
    company-overview.pdf.
Ragsdale, C.T. and Plane, D.R. (2000). On modeling time series data using
    spreadsheets, The International Journal of Management Science, Vol. 28,
    pp. 215-221.
Sofyan, H. and Werwatz, A. (2001). Analysing XploRe Download Profiles with
     Intelligent Miner, Computational Statistics, Vol. 16, pp. 465-479.
Index

bigarch, 226                         IBTbc, 160, 198, 199
BlackScholesPathDependent1DQMC,      IBTdc, 156
         363                         IBTdk, 156, 160
BlackScholesPathDependent1D,         ImplVola, 129, 130, 133
         363                         jarber, 289
BlackScholesPathIndependent1DQMC,    list, 121
         363                         lowdiscrepancy, 358
BlackScholesPathIndependent1D,       lpderxest, 185
         363                         mean, 55
BlackScholesPathIndependentMDDivQMC, nmBFGS, 298
         364                         nmhessian, 298
BlackScholesPathIndependentMDDiv,    normal, 120
         364                         nparmaest, 375
BlackScholesPathIndependentMDQMC,    npgarchest, 380, 381
         364                         paf, 185
BlackScholesPathIndependentMD,       quantile, 62
         364                         randomnumbers, 358
BlackScholes, 130                    regest, 263
cdf2quant, 24                        regxbwcrit, 203
cdfn, 120                            regxest, 263
cdft, 120                            simou, 278
CornishFisher, 15                    spccusum2ad, 248
CPC, 140                             spccusumCarl, 247
denrot, 204                          spccusumC, 240
denxest, 204                         spcewma1arl, 247
descriptive, 56, 61                  spcewma1, 240
elmtest, 276, 277                    spcewma2ad, 239
gennorm, 119, 120                    spcewma2arl, 239
gFourierInversion, 23                spcewma2c, 239
gkalarray, 293, 294                  spcewma2pmfm, 239
gkalfilter, 293, 295, 300            spcewma2pmf, 239
gkalresiduals, 293, 298              spcewma2, 239
gkalsmoother, 293, 300               spdbl, 183, 185
Index                                                               399


spdbs, 176                               XFGData9701, 184
summarize, 54, 225                       XFGhouseprice, 290
VaRcdfDG, 24                             XFGhousequality, 290, 294
VaRcgfDG, 11                             fx, 225
VaRcharfDGF2, 23                         sigmaprocess, 229
VaRcharfDG, 11, 23                       volsurf01, 141
VaRcopula, 41, 45, 46                    volsurf02, 141
VaRcorrfDGF2, 23                         volsurf03, 141
VaRcredN2, 122                           volsurfdata2, 130, 393
VaRcredN, 121, 122                  discrepancy, 356
VaRcredTcop2, 122
VaRcredTcop, 121, 122               EGARCH, 368
VaRcumulantDG, 11                   Empirical Likelihood, 259
VaRcumulantsDG, 11                  equicorrelation, 91
VaRDGdecomp, 9, 11
VaRestMCcopula, 45                  finance library, 185, 362
VaRestMC, 30, 31                    fx data, 225
VaRest, 70, 71
                                    GARCH model, 367
VaRfitcopula, 41
                                       exponential, 368
VaRqDG, 24
                                       integrated, 367
VaRqqplot, 75
                                       threshold, 368
VaRRatMigCount, 93
                                    GARCH process
VaRRatMigRateM, 104, 106
                                       nonparametric estimates,
VaRRatMigRate, 93
                                            → NPGARCH
VaRsimcopula, 45
volsurfplot, 133                    Halton, sequence, 357
volsurf, 131–133, 162, 185, 198     HiSim, 51
Asian option, 355                   IBT, 145
BiGARCH, 221                        Idiosyncratic Bond Risk,
Brownian bridge, 361                         → HiSim
                                    IGARCH, 367
Copula, 35                          Implied Binomial Trees,
credit portfolio model, 111                  → IBT
                                    implied volatilities, 127
data sets                           INAAA data, 54, 55, 61, 71, 75, 76
    INAAA, 54, 55, 61, 71, 75, 76
    MMPL, 71                        Koksma-Hlawka theorem, 356
    PL, 70
    USTF, 55                        library
400                                                                    Index


      VaR, 41, 42                       PL data, 70
      finance, 185, 362                 portfolio
      nummath, 298                          composition, 89
      spc, 239, 247                         migration, 106
                                            weights, 107
Markov chain, 87, 101
    bootstrapping, 102                  Quasi Monte Carlo simulation, 356
mcopt, 349
migration                               randomized algorithm, 349
    correlation, 90, 92                 rating, 87
    counts, 89                               migrations, 87
    events, 88                                 dependence, 90
    probability,                               independence, 90
         → transition probability            transition probability,
    rates, 90                                     → transition probability
MMPL data, 71                           risk horizon, 88
model                                   risk neutral model, 351
    Implied Binomial Trees,             RiskMetrics, 367
         → IBT
    multivariate volatility,            sigmaprocess data, 229
         → BiGARCH                      SPC, 237
    State-Price Densities,              spc library, 239, 247
         → XFGSPD                       spreadsheet, 385
    VaR,                                star-discrepancy, 356
         → XFGVAR                       State-Price Densities,
Monte Carlo option pricing,                       → XFGSPD
         → option pricing               statistical process control,
multi-period transitions, 101                     → SPC
Multivariate Volatility Models,
                                        TGARCH, 368
         → BiGARCH
                                        threshold normal model, 91
nonparametric      estimates       of   time homogeneity, 323
        GARCH processes,                transition matrix, 87
        → NPGARCH                       transition probability, 87, 89
NPGARCH, 367                                 chi-square test, 95
nummath library, 298                         estimator, 90
                                             simultaneous, 92
option pricing                               standard deviation, 90, 92
     Monte Carlo option pricing,             test of homogeneity, 95
         → mcopt                             time-stability, 94
Index                            401


USTF data, 55

Value at Risk,
           → XFGVAR
Value-at-Risk, 35
value-at-risk, 367
VaR, 367
VaR library, 41, 42
volatility, 323
volsurf01 data, 141
volsurf02 data, 141
volsurf03 data, 141
volsurfdata2 data, 130, 393

XFGData9701 data, 184
XFGhouseprice data, 290
XFGhousequality data, 290, 294
XFGSPD, 171
XFGVAR, 3



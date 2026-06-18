---
normalized_id: shared-pdf-reference-stochastic-calculus-and-finance-steven-shreve
exam_code: SHARED
material_scope: stochastic calculus and finance - steven shreve.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Stochastic Calculus and Finance - Steven Shreve.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-stochastic-calculus-and-finance-steven-shreve

Steven Shreve: Stochastic Calculus and Finance

    P RASAD C HALASANI                  S OMESH J HA
  Carnegie Mellon University      Carnegie Mellon University
       chal@cs.cmu.edu                sjha@cs.cmu.edu


              c Copyright; Steven E. Shreve, 1996

                        July 25, 1997
Contents

1 Introduction to Probability Theory                                                               11
   1.1   The Binomial Asset Pricing Model . . . . . . . . . . . . . . . . . . . . . . . . . .      11
   1.2   Finite Probability Spaces . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   16
   1.3   Lebesgue Measure and the Lebesgue Integral . . . . . . . . . . . . . . . . . . . .        22
   1.4   General Probability Spaces . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    30
   1.5   Independence . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    40
         1.5.1   Independence of sets . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    40
         1.5.2   Independence of  -algebras . . . . . . . . . . . . . . . . . . . . . . . . .     41
         1.5.3   Independence of random variables . . . . . . . . . . . . . . . . . . . . . .      42
         1.5.4   Correlation and independence . . . . . . . . . . . . . . . . . . . . . . . .      44
         1.5.5   Independence and conditional expectation. . . . . . . . . . . . . . . . . .       45
         1.5.6   Law of Large Numbers . . . . . . . . . . . . . . . . . . . . . . . . . . . .      46
         1.5.7   Central Limit Theorem . . . . . . . . . . . . . . . . . . . . . . . . . . . .     47

2 Conditional Expectation                                                                          49
   2.1   A Binomial Model for Stock Price Dynamics . . . . . . . . . . . . . . . . . . . .         49
   2.2   Information . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   50
   2.3   Conditional Expectation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     52
         2.3.1   An example . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    52
         2.3.2   Definition of Conditional Expectation . . . . . . . . . . . . . . . . . . . .     53
         2.3.3   Further discussion of Partial Averaging . . . . . . . . . . . . . . . . . . .     54
         2.3.4   Properties of Conditional Expectation . . . . . . . . . . . . . . . . . . . .     55
         2.3.5   Examples from the Binomial Model . . . . . . . . . . . . . . . . . . . . .        57
   2.4   Martingales . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   58

                                                 1
2

3 Arbitrage Pricing                                                                                  59
    3.1   Binomial Pricing . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     59
    3.2   General one-step APT . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     60
    3.3   Risk-Neutral Probability Measure . . . . . . . . . . . . . . . . . . . . . . . . . .       61
          3.3.1   Portfolio Process . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    62
          3.3.2   Self-financing Value of a Portfolio Process  . . . . . . . . . . . . . . . .      62
    3.4   Simple European Derivative Securities . . . . . . . . . . . . . . . . . . . . . . . .      63
    3.5   The Binomial Model is Complete . . . . . . . . . . . . . . . . . . . . . . . . . . .       64

4 The Markov Property                                                                                67
    4.1   Binomial Model Pricing and Hedging . . . . . . . . . . . . . . . . . . . . . . . .         67
    4.2   Computational Issues . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     69
    4.3   Markov Processes . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     70
          4.3.1   Different ways to write the Markov property . . . . . . . . . . . . . . . .        70
    4.4   Showing that a process is Markov . . . . . . . . . . . . . . . . . . . . . . . . . .       73
    4.5   Application to Exotic Options . . . . . . . . . . . . . . . . . . . . . . . . . . . .      74

5 Stopping Times and American Options                                                                77
    5.1   American Pricing . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     77
    5.2   Value of Portfolio Hedging an American Option . . . . . . . . . . . . . . . . . . .        79
    5.3   Information up to a Stopping Time . . . . . . . . . . . . . . . . . . . . . . . . . .      81

6 Properties of American Derivative Securities                                                       85
    6.1   The properties . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   85
    6.2   Proofs of the Properties . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   86
    6.3   Compound European Derivative Securities . . . . . . . . . . . . . . . . . . . . . .        88
    6.4   Optimal Exercise of American Derivative Security . . . . . . . . . . . . . . . . . .       89

7 Jensen’s Inequality                                                                                91
    7.1   Jensen’s Inequality for Conditional Expectations . . . . . . . . . . . . . . . . . . .     91
    7.2   Optimal Exercise of an American Call . . . . . . . . . . . . . . . . . . . . . . . .       92
    7.3   Stopped Martingales . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .      94

8 Random Walks                                                                                       97
    8.1   First Passage Time . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     97
                                                                                                   3

   8.2    is almost surely finite . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 97
   8.3   The moment generating function for  . . . . . . . . . . . . . . . . . . . . . . . . 99
   8.4   Expectation of  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 100
   8.5   The Strong Markov Property . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 101
   8.6   General First Passage Times . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 101
   8.7   Example: Perpetual American Put . . . . . . . . . . . . . . . . . . . . . . . . . . 102
   8.8   Difference Equation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 106
   8.9   Distribution of First Passage Times . . . . . . . . . . . . . . . . . . . . . . . . . . 107
   8.10 The Reflection Principle . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 109

9 Pricing in terms of Market Probabilities: The Radon-Nikodym Theorem.                           111
   9.1   Radon-Nikodym Theorem . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 111
   9.2   Radon-Nikodym Martingales . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 112
   9.3   The State Price Density Process . . . . . . . . . . . . . . . . . . . . . . . . . . . 113
   9.4   Stochastic Volatility Binomial Model . . . . . . . . . . . . . . . . . . . . . . . . . 116
   9.5   Another Applicaton of the Radon-Nikodym Theorem . . . . . . . . . . . . . . . . 118

10 Capital Asset Pricing                                                                         119
   10.1 An Optimization Problem . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 119

11 General Random Variables                                                                      123
   11.1 Law of a Random Variable . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 123
   11.2 Density of a Random Variable . . . . . . . . . . . . . . . . . . . . . . . . . . . . 123
   11.3 Expectation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 124
   11.4 Two random variables . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 125
   11.5 Marginal Density . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 126
   11.6 Conditional Expectation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 126
   11.7 Conditional Density . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 127
   11.8 Multivariate Normal Distribution . . . . . . . . . . . . . . . . . . . . . . . . . . . 129
   11.9 Bivariate normal distribution . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 130
   11.10MGF of jointly normal random variables . . . . . . . . . . . . . . . . . . . . . . . 130

12 Semi-Continuous Models                                                                        131
   12.1 Discrete-time Brownian Motion . . . . . . . . . . . . . . . . . . . . . . . . . . . 131
4

    12.2 The Stock Price Process . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 132
    12.3 Remainder of the Market . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 133
    12.4 Risk-Neutral Measure . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 133
    12.5 Risk-Neutral Pricing . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 134
    12.6 Arbitrage . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 134
    12.7 Stalking the Risk-Neutral Measure . . . . . . . . . . . . . . . . . . . . . . . . . . 135
    12.8 Pricing a European Call . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 138

13 Brownian Motion                                                                                 139
    13.1 Symmetric Random Walk . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 139
    13.2 The Law of Large Numbers . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 139
    13.3 Central Limit Theorem . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 140
    13.4 Brownian Motion as a Limit of Random Walks . . . . . . . . . . . . . . . . . . . 141
    13.5 Brownian Motion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 142
    13.6 Covariance of Brownian Motion . . . . . . . . . . . . . . . . . . . . . . . . . . . 143
    13.7 Finite-Dimensional Distributions of Brownian Motion . . . . . . . . . . . . . . . . 144
    13.8 Filtration generated by a Brownian Motion . . . . . . . . . . . . . . . . . . . . . . 144
    13.9 Martingale Property . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 145
    13.10The Limit of a Binomial Model . . . . . . . . . . . . . . . . . . . . . . . . . . . . 145
    13.11Starting at Points Other Than 0 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 147
    13.12Markov Property for Brownian Motion . . . . . . . . . . . . . . . . . . . . . . . . 147
    13.13Transition Density . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 149
    13.14First Passage Time . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 149

14 The Itô Integral                                                                               153
    14.1 Brownian Motion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 153
    14.2 First Variation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 153
    14.3 Quadratic Variation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 155
    14.4 Quadratic Variation as Absolute Volatility . . . . . . . . . . . . . . . . . . . . . . 157
    14.5 Construction of the Itô Integral . . . . . . . . . . . . . . . . . . . . . . . . . . . . 158
    14.6 Itô integral of an elementary integrand . . . . . . . . . . . . . . . . . . . . . . . . 158
    14.7 Properties of the Itô integral of an elementary process . . . . . . . . . . . . . . . . 159
    14.8 Itô integral of a general integrand . . . . . . . . . . . . . . . . . . . . . . . . . . . 162
                                                                                                   5

   14.9 Properties of the (general) Itô integral . . . . . . . . . . . . . . . . . . . . . . . . 163
   14.10Quadratic variation of an Itô integral . . . . . . . . . . . . . . . . . . . . . . . . . 165

15 Itô’s Formula                                                                                167
   15.1 Itô’s formula for one Brownian motion . . . . . . . . . . . . . . . . . . . . . . . . 167
   15.2 Derivation of Itô’s formula . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 168
   15.3 Geometric Brownian motion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 169
   15.4 Quadratic variation of geometric Brownian motion . . . . . . . . . . . . . . . . . 170
   15.5 Volatility of Geometric Brownian motion . . . . . . . . . . . . . . . . . . . . . . 170
   15.6 First derivation of the Black-Scholes formula . . . . . . . . . . . . . . . . . . . . 170
   15.7 Mean and variance of the Cox-Ingersoll-Ross process . . . . . . . . . . . . . . . . 172
   15.8 Multidimensional Brownian Motion . . . . . . . . . . . . . . . . . . . . . . . . . 173
   15.9 Cross-variations of Brownian motions . . . . . . . . . . . . . . . . . . . . . . . . 174
   15.10Multi-dimensional Itô formula . . . . . . . . . . . . . . . . . . . . . . . . . . . . 175

16 Markov processes and the Kolmogorov equations                                                 177
   16.1 Stochastic Differential Equations . . . . . . . . . . . . . . . . . . . . . . . . . . . 177
   16.2 Markov Property . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 178
   16.3 Transition density . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 179
   16.4 The Kolmogorov Backward Equation . . . . . . . . . . . . . . . . . . . . . . . . 180
   16.5 Connection between stochastic calculus and KBE . . . . . . . . . . . . . . . . . . 181
   16.6 Black-Scholes . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 183
   16.7 Black-Scholes with price-dependent volatility . . . . . . . . . . . . . . . . . . . . 186

17 Girsanov’s theorem and the risk-neutral measure                                               189
   17.1 Conditional expectations under If
                                        P . . . . . . . . . . . . . . . . . . . . . . . . . . 191
   17.2 Risk-neutral measure . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 193

18 Martingale Representation Theorem                                                             197
   18.1 Martingale Representation Theorem . . . . . . . . . . . . . . . . . . . . . . . . . 197
   18.2 A hedging application . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 197
   18.3 d-dimensional Girsanov Theorem . . . . . . . . . . . . . . . . . . . . . . . . . . 199
   18.4 d-dimensional Martingale Representation Theorem . . . . . . . . . . . . . . . . . 200
   18.5 Multi-dimensional market model . . . . . . . . . . . . . . . . . . . . . . . . . . . 200
6

19 A two-dimensional market model                                                                 203
    19.1 Hedging when ,1 <  < 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 204
    19.2 Hedging when  = 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 205

20 Pricing Exotic Options                                                                         209
    20.1 Reflection principle for Brownian motion . . . . . . . . . . . . . . . . . . . . . . 209
    20.2 Up and out European call. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 212
    20.3 A practical issue . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 218

21 Asian Options                                                                                  219
    21.1 Feynman-Kac Theorem . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 220
    21.2 Constructing the hedge . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 220
    21.3 Partial average payoff Asian option . . . . . . . . . . . . . . . . . . . . . . . . . . 221

22 Summary of Arbitrage Pricing Theory                                                            223
    22.1 Binomial model, Hedging Portfolio . . . . . . . . . . . . . . . . . . . . . . . . . 223
    22.2 Setting up the continuous model . . . . . . . . . . . . . . . . . . . . . . . . . . . 225
    22.3 Risk-neutral pricing and hedging . . . . . . . . . . . . . . . . . . . . . . . . . . . 227
    22.4 Implementation of risk-neutral pricing and hedging . . . . . . . . . . . . . . . . . 229

23 Recognizing a Brownian Motion                                                                  233
    23.1 Identifying volatility and correlation . . . . . . . . . . . . . . . . . . . . . . . . . 235
    23.2 Reversing the process . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 236

24 An outside barrier option                                                                      239
    24.1 Computing the option value . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 242
    24.2 The PDE for the outside barrier option . . . . . . . . . . . . . . . . . . . . . . . . 243
    24.3 The hedge . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 245

25 American Options                                                                               247
    25.1 Preview of perpetual American put . . . . . . . . . . . . . . . . . . . . . . . . . . 247
    25.2 First passage times for Brownian motion: first method . . . . . . . . . . . . . . . . 247
    25.3 Drift adjustment . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 249
    25.4 Drift-adjusted Laplace transform . . . . . . . . . . . . . . . . . . . . . . . . . . . 250
    25.5 First passage times: Second method . . . . . . . . . . . . . . . . . . . . . . . . . 251
                                                                                                   7

   25.6 Perpetual American put . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 252
   25.7 Value of the perpetual American put . . . . . . . . . . . . . . . . . . . . . . . . . 256
   25.8 Hedging the put . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 257
   25.9 Perpetual American contingent claim . . . . . . . . . . . . . . . . . . . . . . . . . 259
   25.10Perpetual American call . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 259
   25.11Put with expiration . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 260
   25.12American contingent claim with expiration . . . . . . . . . . . . . . . . . . . . . 261

26 Options on dividend-paying stocks                                                             263
   26.1 American option with convex payoff function . . . . . . . . . . . . . . . . . . . . 263
   26.2 Dividend paying stock . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 264
   26.3 Hedging at time t1    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 266

27 Bonds, forward contracts and futures                                                          267
   27.1 Forward contracts . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 269
   27.2 Hedging a forward contract . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 269
   27.3 Future contracts . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 270
   27.4 Cash flow from a future contract . . . . . . . . . . . . . . . . . . . . . . . . . . . 272
   27.5 Forward-future spread . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 272
   27.6 Backwardation and contango . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 273

28 Term-structure models                                                                         275
   28.1 Computing arbitrage-free bond prices: first method . . . . . . . . . . . . . . . . . 276
   28.2 Some interest-rate dependent assets . . . . . . . . . . . . . . . . . . . . . . . . . 276
   28.3 Terminology . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 277
   28.4 Forward rate agreement . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 277
   28.5 Recovering the interest r(t) from the forward rate . . . . . . . . . . . . . . . . . . 278
   28.6 Computing arbitrage-free bond prices: Heath-Jarrow-Morton method . . . . . . . . 279
   28.7 Checking for absence of arbitrage . . . . . . . . . . . . . . . . . . . . . . . . . . 280
   28.8 Implementation of the Heath-Jarrow-Morton model . . . . . . . . . . . . . . . . . 281

29 Gaussian processes                                                                            285
   29.1 An example: Brownian Motion . . . . . . . . . . . . . . . . . . . . . . . . . . . . 286

30 Hull and White model                                                                          293
8

    30.1 Fiddling with the formulas . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 295
    30.2 Dynamics of the bond price . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 296
    30.3 Calibration of the Hull & White model . . . . . . . . . . . . . . . . . . . . . . . . 297
    30.4 Option on a bond . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 299

31 Cox-Ingersoll-Ross model                                                                      303
    31.1 Equilibrium distribution of r(t) . . . . . . . . . . . . . . . . . . . . . . . . . . . . 306
    31.2 Kolmogorov forward equation . . . . . . . . . . . . . . . . . . . . . . . . . . . . 306
    31.3 Cox-Ingersoll-Ross equilibrium density . . . . . . . . . . . . . . . . . . . . . . . 309
    31.4 Bond prices in the CIR model . . . . . . . . . . . . . . . . . . . . . . . . . . . . 310
    31.5 Option on a bond . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 313
    31.6 Deterministic time change of CIR model . . . . . . . . . . . . . . . . . . . . . . . 313
    31.7 Calibration . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 315
    31.8 Tracking down '0(0) in the time change of the CIR model . . . . . . . . . . . . . 316

32 A two-factor model (Duffie & Kan)                                                             319
    32.1 Non-negativity of Y . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 320
    32.2 Zero-coupon bond prices . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 321
    32.3 Calibration . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 323

33 Change of numéraire                                                                          325
    33.1 Bond price as numéraire . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 327
    33.2 Stock price as numéraire . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 328
    33.3 Merton option pricing formula . . . . . . . . . . . . . . . . . . . . . . . . . . . . 329

34 Brace-Gatarek-Musiela model                                                                   335
    34.1 Review of HJM under risk-neutral IP . . . . . . . . . . . . . . . . . . . . . . . . . 335
    34.2 Brace-Gatarek-Musiela model . . . . . . . . . . . . . . . . . . . . . . . . . . . . 336
    34.3 LIBOR . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 337
    34.4 Forward LIBOR . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 338
    34.5 The dynamics of L(t;  ) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 338
    34.6 Implementation of BGM . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 340
    34.7 Bond prices . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 342
    34.8 Forward LIBOR under more forward measure . . . . . . . . . . . . . . . . . . . . 343
                                                                                                9

34.9 Pricing an interest rate caplet . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 343
34.10Pricing an interest rate cap . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 345
34.11Calibration of BGM . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 345
34.12Long rates . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 346
34.13Pricing a swap . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 346
10
Chapter 1

Introduction to Probability Theory

1.1 The Binomial Asset Pricing Model

The binomial asset pricing model provides a powerful tool to understand arbitrage pricing theory
and probability theory. In this course, we shall use it for both these purposes.
In the binomial asset pricing model, we model stock prices in discrete time, assuming that at each
step, the stock price will change to one of two possible values. Let us begin with an initial positive
stock price S0. There are two positive numbers, d and u, with


                                             0 < d < u;                                          (1.1)


such that at the next period, the stock price will be either dS0 or uS0. Typically, we take d and u
to satisfy 0 < d < 1 < u, so change of the stock price from S0 to dS0 represents a downward
movement, and change of the stock price from S0 to uS0 represents an upward movement. It is
common to also have d = u1 , and this will be the case in many of our examples. However, strictly
speaking, for what we are about to do we need to assume only (1.1) and (1.2) below.
Of course, stock price movements are much more complicated than indicated by the binomial asset
pricing model. We consider this simple model for three reasons. First of all, within this model the
concept of arbitrage pricing and its relation to risk-neutral pricing is clearly illuminated. Secondly,
the model is used in practice because with a sufficient number of steps, it provides a good, compu-
tationally tractable approximation to continuous-time models. Thirdly, within the binomial model
we can develop the theory of conditional expectations and martingales which lies at the heart of
continuous-time models.
With this third motivation in mind, we develop notation for the binomial model which is a bit
different from that normally found in practice. Let us imagine that we are tossing a coin, and when
we get a “Head,” the stock price moves up, but when we get a “Tail,” the price moves down. We
denote the price at time 1 by S1 (H ) = uS0 if the toss results in head (H), and by S1 (T ) = dS0 if it

                                                  11
12

                                                                  S2 (HH) = 16



                                            S (H) = 8
                                             1

                                                                  S2 (HT) = 4

                              S =4
                               0                                  S2 (TH) = 4

                                             S1 (T) = 2




                                                                  S2 (TT) = 1


                Figure 1.1: Binomial tree of stock prices with S0 = 4, u = 1=d = 2.


results in tail (T). After the second toss, the price will be one of:

                    S2 (HH ) = uS1(H ) = u2 S0; S2 (HT ) = dS1(H ) = duS0;
                    S2 (TH ) = uS1 (T ) = udS0; S2 (TT ) = dS1(T ) = d2S0 :

After three tosses, there are eight possible coin sequences, although not all of them result in different
stock prices at time 3.
For the moment, let us assume that the third toss is the last one and denote by

                     = fHHH; HHT; HTH; HTT; THH; THT; TTH; TTT g
the set of all possible outcomes of the three tosses. The set of all possible outcomes of a ran-
dom experiment is called the sample space for the experiment, and the elements ! of are called
sample points. In this case, each sample point ! is a sequence of length three. We denote the k-th
component of ! by !k . For example, when ! = HTH , we have !1 = H , !2 = T and !3 = H .
The stock price Sk at time k depends on the coin tosses. To emphasize this, we often write Sk (! ).
Actually, this notation does not quite tell the whole story, for while S3 depends on all of ! , S2
depends on only the first two components of ! , S1 depends on only the first component of ! , and
S0 does not depend on ! at all. Sometimes we will use notation such S2(!1 ; !2) just to record more
explicitly how S2 depends on ! = (!1; !2; !3 ).

Example 1.1 Set S0 = 4, u = 2 and d = 21 . We have then the binomial “tree” of possible stock
prices shown in Fig. 1.1. Each sample point ! = (!1; !2 ; !3) represents a path through the tree.
Thus, we can think of the sample space as either the set of all possible outcomes from three coin
tosses or as the set of all possible paths through the tree.

To complete our binomial asset pricing model, we introduce a money market with interest rate r;
$1 invested in the money market becomes $(1 + r) in the next period. We take r to be the interest
CHAPTER 1. Introduction to Probability Theory                                                         13

rate for both borrowing and lending. (This is not as ridiculous as it first seems, because in a many
applications of the model, an agent is either borrowing or lending (not both) and knows in advance
which she will be doing; in such an application, she should take r to be the rate of interest for her
activity.) We assume that

                                              d < 1 + r < u:                                        (1.2)

The model would not make sense if we did not have this condition. For example, if 1 + r  u, then
the rate of return on the money market is always at least as great as and sometimes greater than the
return on the stock, and no one would invest in the stock. The inequality d  1 + r cannot happen
unless either r is negative (which never happens, except maybe once upon a time in Switzerland) or
d  1. In the latter case, the stock does not really go “down” if we get a tail; it just goes up less
than if we had gotten a head. One should borrow money at interest rate r and invest in the stock,
since even in the worst case, the stock price rises at least as fast as the debt used to buy it.
With the stock as the underlying asset, let us consider a European call option with strike price
K > 0 and expiration time 1. This option confers the right to buy the stock at time 1 for K dollars,
and so is worth S1 , K at time 1 if S1 , K is positive and is otherwise worth zero. We denote by

                          V1(!) = (S1(! ) , K )+ = maxfS1(! ) , K; 0g
the value (payoff) of this option at expiration. Of course, V1(! ) actually depends only on !1 , and
we can and do sometimes write V1 (!1) rather than V1(! ). Our first task is to compute the arbitrage
price of this option at time zero.
Suppose at time zero you sell the call for V0 dollars, where V0 is still to be determined. You now
have an obligation to pay off (uS0 , K )+ if !1 = H and to pay off (dS0 , K )+ if !1 = T . At
the time you sell the option, you don’t yet know which value !1 will take. You hedge your short
position in the option by buying 0 shares of stock, where 0 is still to be determined. You can use
the proceeds V0 of the sale of the option for this purpose, and then borrow if necessary at interest
rate r to complete the purchase. If V0 is more than necessary to buy the 0 shares of stock, you
invest the residual money at interest rate r. In either case, you will have V0 , 0S0 dollars invested
in the money market, where this quantity might be negative. You will also own 0 shares of stock.
If the stock goes up, the value of your portfolio (excluding the short position in the option) is

                                     0 S1(H ) + (1 + r)(V0 , 0 S0 );
and you need to have V1(H ). Thus, you want to choose V0 and 0 so that

                            V1(H ) = 0S1 (H ) + (1 + r)(V0 , 0 S0):                               (1.3)

If the stock goes down, the value of your portfolio is

                                     0 S1 (T ) + (1 + r)(V0 , 0 S0);
and you need to have V1(T ). Thus, you want to choose V0 and 0 to also have

                             V1(T ) = 0S1 (T ) + (1 + r)(V0 , 0S0 ):                              (1.4)
14

These are two equations in two unknowns, and we solve them below
Subtracting (1.4) from (1.3), we obtain

                             V1 (H ) , V1(T ) = 0 (S1(H ) , S1 (T ));                           (1.5)

so that

                                      0 = SV1((H ) , V1(T )
                                               1H ) , S (T ) :
                                                          1
                                                                                                 (1.6)

This is a discrete-time version of the famous “delta-hedging” formula for derivative securities, ac-
cording to which the number of shares of an underlying asset a hedge should hold is the derivative
(in the sense of calculus) of the value of the derivative security with respect to the price of the
underlying asset. This formula is so pervasive the when a practitioner says “delta”, she means the
derivative (in the sense of calculus) just described. Note, however, that my definition of 0 is the
number of shares of stock one holds at time zero, and (1.6) is a consequence of this definition, not
the definition of 0 itself. Depending on how uncertainty enters the model, there can be cases
in which the number of shares of stock a hedge should hold is not the (calculus) derivative of the
derivative security with respect to the price of the underlying asset.
To complete the solution of (1.3) and (1.4), we substitute (1.6) into either (1.3) or (1.4) and solve
for V0 . After some simplification, this leads to the formula

                               1  1 + r , d     u , (1 + r )  
                        V0 = 1 + r u , d V1(H ) + u , d V1 (T ) :                                (1.7)

This is the arbitrage price for the European call option with payoff V1 at time 1. To simplify this
formula, we define

                           p~ = 1 +u ,r ,d d ; q~ = u ,u(1, +d r) = 1 , p~;                    (1.8)

so that (1.7) becomes

                                  V0 = 1 +1 r [~pV1(H ) + q~V1(T )]:                             (1.9)

Because we have taken d < u, both p~ and q~ are defined,i.e., the denominator in (1.8) is not zero.
Because of (1.2), both p~ and q~ are in the interval (0; 1), and because they sum to 1, we can regard
them as probabilities of H and T , respectively. They are the risk-neutral probabilites. They ap-
peared when we solved the two equations (1.3) and (1.4), and have nothing to do with the actual
probabilities of getting H or T on the coin tosses. In fact, at this point, they are nothing more than
a convenient tool for writing (1.7) as (1.9).
We now consider a European call which pays off K dollars at time 2. At expiration, the payoff of
                  
this option is V2 = (S2 , K )+ , where V2 and S2 depend on !1 and !2 , the first and second coin
tosses. We want to determine the arbitrage price for this option at time zero. Suppose an agent sells
the option at time zero for V0 dollars, where V0 is still to be determined. She then buys 0 shares
CHAPTER 1. Introduction to Probability Theory                                                      15

of stock, investing V0 , 0S0 dollars in the money market to finance this. At time 1, the agent has
a portfolio (excluding the short position in the option) valued at

                                X1 = 0S1 + (1 + r)(V0 , 0 S0):                              (1.10)

Although we do not indicate it in the notation, S1 and therefore X1 depend on !1 , the outcome of
the first coin toss. Thus, there are really two equations implicit in (1.10):

                          X1(H ) = 0S1 (H ) + (1 + r)(V0 , 0 S0);
                          X1(T ) = 0S1 (T ) + (1 + r)(V0 , 0S0):
After the first coin toss, the agent has X1 dollars and can readjust her hedge. Suppose she decides to
now hold 1 shares of stock, where 1 is allowed to depend on !1 because the agent knows what
value !1 has taken. She invests the remainder of her wealth, X1 , 1S1 in the money market. In
the next period, her wealth will be given by the right-hand side of the following equation, and she
wants it to be V2. Therefore, she wants to have

                                V2 = 1 S2 + (1 + r)(X1 , 1 S1):                              (1.11)

Although we do not indicate it in the notation, S2 and V2 depend on !1 and !2 , the outcomes of the
first two coin tosses. Considering all four possible outcomes, we can write (1.11) as four equations:

              V2(HH ) = 1(H )S2(HH ) + (1 + r)(X1(H ) , 1(H )S1(H ));
              V2(HT ) = 1(H )S2(HT ) + (1 + r)(X1(H ) , 1(H )S1(H ));
              V2(TH ) = 1(T )S2(TH ) + (1 + r)(X1(T ) , 1(T )S1(T ));
               V2(TT ) = 1(T )S2(TT ) + (1 + r)(X1(T ) , 1 (T )S1(T )):
We now have six equations, the two represented by (1.10) and the four represented by (1.11), in the
six unknowns V0 , 0 , 1(H ), 1 (T ), X1 (H ), and X1 (T ).
To solve these equations, and thereby determine the arbitrage price V0 at time zero of the option and
the hedging portfolio 0 , 1(H ) and 1 (T ), we begin with the last two

                V2(TH ) = 1(T )S2(TH ) + (1 + r)(X1(T ) , 1(T )S1(T ));
                V2(TT ) = 1(T )S2(TT ) + (1 + r)(X1(T ) , 1 (T )S1(T )):
Subtracting one of these from the other and solving for 1(T ), we obtain the “delta-hedging for-
mula”

                                   1(T ) = SV2 ((TH ) , V2(TT ) ;
                                               2  TH ) , S (TT )
                                                           2
                                                                                               (1.12)

and substituting this into either equation, we can solve for

                              X1 (T ) = 1 +1 r [~pV2(TH ) + q~V2 (TT )]:                       (1.13)
16

Equation (1.13), gives the value the hedging portfolio should have at time 1 if the stock goes down
between times 0 and 1. We define this quantity to be the arbitrage value of the option at time 1 if
!1 = T , and we denote it by V1(T ). We have just shown that
                                    V1(T ) = 1 +1 r [~pV2 (TH ) + q~V2(TT )]:                                 (1.14)

The hedger should choose her portfolio so that her wealth X1 (T ) if !1 = T agrees with V1(T )
defined by (1.14). This formula is analgous to formula (1.9), but postponed by one step. The first
two equations implicit in (1.11) lead in a similar way to the formulas

                                         1 (H ) = V2 (HH ) , V2(HT )
                                                   S2(HH ) , S2(HT )                                           (1.15)

and X1(H ) = V1(H ), where V1(H ) is the value of the option at time 1 if !1 = H , defined by

                                   V1(H ) = 1 +1 r [~pV2(HH ) + q~V2(HT )]:                                   (1.16)

This is again analgous to formula (1.9), postponed by one step. Finally, we plug the values X1(H ) =
V1(H ) and X1(T ) = V1(T ) into the two equations implicit in (1.10). The solution of these equa-
tions for 0 and V0 is the same as the solution of (1.3) and (1.4), and results again in (1.6) and
(1.9).
The pattern emerging here persists, regardless of the number of periods. If Vk denotes the value at
time k of a derivative security, and this depends on the first k coin tosses !1 ; : : :; !k , then at time
k , 1, after the first k , 1 tosses !1 ; : : :; !k,1 are known, the portfolio to hedge a short position
should hold k,1 (!1 ; : : :; !k,1) shares of stock, where

                                                                           H ) , Vk (!1; : : :; !k,1 ; T ) ;
                k,1 (!1; : : :; !k,1 ) = SVk ((!!1 ;; :: :: :;:; !!k,1 ;; H
                                                 k 1             k,1         ) , S (! ; : : :; ! ; T )
                                                                                 k 1            k,1
                                                                                                               (1.17)

and the value at time k , 1 of the derivative security, when the first k , 1 coin tosses result in the
outcomes !1 ; : : :; !k,1 , is given by

            Vk,1(!1; : : :; !k,1) = 1 +1 r [~pVk (!1; : : :; !k,1 ; H ) + q~Vk (!1; : : :; !k,1; T )]
                                                                                                               (1.18)


1.2 Finite Probability Spaces

Let      be a set with finitely many elements. An example to keep in mind is

                        = fHHH; HHT; HTH; HTT; THH; THT; TTH; TTT g                                             (2.1)

of all possible outcomes of three coin tosses. Let F be the set of all subsets of . Some sets in F
are ;, fHHH; HHT; HTH; HTT g, fTTT g, and itself. How many sets are there in F ?
CHAPTER 1. Introduction to Probability Theory                                                           17

Definition 1.1 A probability measure IP is a function mapping F into [0; 1] with the following
properties:

(i) IP (   ) = 1,
(ii) If A1 ; A2; : : : is a sequence of disjoint sets in F , then
                                                1 ! X
                                                [   1
                                          IP          Ak =          IP (Ak ):
                                                k=1           k=1
Probability measures have the following interpretation. Let A be a subset of F . Imagine that is
the set of all possible outcomes of some random experiment. There is a certain probability, between
0 and 1, that when that experiment is performed, the outcome will lie in the set A. We think of
IP (A) as this probability.
Example 1.2 Suppose a coin has probability 13 for H and 23 for T . For the individual elements of
  in (2.1), define
                                       3                                       2  
                     IP fHHH g = 13 ;                        IP fHHT g = 31 23 ;
                                 2                                     2
                     IP fHTH g = 13 23 ;                     IP fHTT g = 13 23 ;
                                  2                                    2
                     IP fTHH g = 13 13 ;                     IP fTHT g = 13 23 ;
                                  2                                  3
                     IP fTTH g = 13 23 ;                     IP fTTT g = 23 :
For A 2 F , we define
                                                       X
                                           IP (A) =         IP f!g:                                   (2.2)
                                                      !2A
For example,
                                                    1 3       1 2  2   1  2 2 1
           IP fHHH; HHT; HTH; HTT g = 3                     +2      3      +
                                                                           3       3   = ; 3   3
which is another way of saying that the probability of H on the first toss is 13 .

As in the above example, it is generally the case that we specify a probability measure on only some
of the subsets of and then use property (ii) of Definition 1.1 to determine IP (A) for the remaining
sets A 2 F . In the above example, we specified the probability measure only for the sets containing
a single element, and then used Definition 1.1(ii) in the form (2.2) (see Problem 1.4(ii)) to determine
IP for all the other sets in F .
Definition 1.2 Let be a nonempty set. A  -algebra is a collection G of subsets of                 with the
following three properties:

(i) ; 2 G ,
18

(ii) If A 2 G , then its complement Ac 2 G ,

(iii) If A1; A2; A3; : : : is a sequence of sets in G , then [1
                                                              k=1 Ak is also in G .
Here are some important  -algebras of subsets of the set        in Example 1.2:
                    (      )
          F0 =       ;;        ;
                    (                                                                     )
          F1 =       ;; ; fHHH; HHT; HTH; HTT g; fTHH; THT; TTH; TTT g ;
                    (
          F2 =       ;; ; fHHH; HHT g; fHTH; HTT g; fTHH; THT g; fTTH; TTT g;
                                                                  )
                          and all sets which can be built by taking unions of these   ;
          F3 = F = The set of all subsets of :
To simplify notation a bit, let us define

                        AH = fHHH; HHT; HTH; HTT g = fH on the first tossg;
                        AT = fTHH; THT; TTH; TTT g = fT on the first tossg;
so that
                                          F1 = f;; ; AH; AT g;
and let us define

                          AHH = fHHH; HHT g = fHH on the first two tossesg;
                          AHT = fHTH; HTT g = fHT on the first two tossesg;
                          ATH = fTHH; THT g = fTH on the first two tossesg;
                          ATT = fTTH; TTT g = fTT on the first two tossesg;
so that

            F2 = f;; ; AHH; AHT ; ATH ; ATT ;
                   AH ; AT ; AHH [ ATH ; AHH [ ATT ; AHT [ ATH ; AHT [ ATT ;
                   AcHH ; AcHT ; AcTH ; AcTT g:
We interpret  -algebras as a record of information. Suppose the coin is tossed three times, and you
are not told the outcome, but you are told, for every set in F1 whether or not the outcome is in that
set. For example, you would be told that the outcome is not in ; and is in . Moreover, you might
be told that the outcome is not in AH but is in AT . In effect, you have been told that the first toss
was a T , and nothing more. The  -algebra F1 is said to contain the “information of the first toss”,
which is usually called the “information up to time 1”. Similarly, F2 contains the “information of
CHAPTER 1. Introduction to Probability Theory                                                          19

the first two tosses,” which is the “information up to time 2.” The  -algebra F3 = F contains “full
information” about the outcome of all three tosses. The so-called “trivial”  -algebra F0 contains no
information. Knowing whether the outcome ! of the three tosses is in ; (it is not) and whether it is
in (it is) tells you nothing about !

Definition 1.3 Let be a nonempty finite set. A filtration is a sequence of  -algebras F0 ; F1; F2; : : :; Fn
such that each  -algebra in the sequence contains all the sets contained by the previous  -algebra.

Definition 1.4 Let be a nonempty finite set and let F be the  -algebra of all subsets of            . A
random variable is a function mapping into IR.

Example 1.3 Let be given by (2.1) and consider the binomial asset pricing Example 1.1, where
S0 = 4, u = 2 and d = 21 . Then S0, S1 , S2 and S3 are all random variables. For example,
S2(HHT ) = u2 S0 = 16. The “random variable” S0 is really not random, since S0(!) = 4 for all
! 2 . Nonetheless, it is a function mapping into IR, and thus technically a random variable,
albeit a degenerate one.

A random variable maps into IR, and we can look at the preimage under the random variable of
sets in IR. Consider, for example, the random variable S2 of Example 1.1. We have

                        S2(HHH ) = S2(HHT ) = 16;
                        S2(HTH ) = S2 (HTT ) = S2 (THH ) = S2 (THT ) = 4;
                        S2(TTH ) = S2(TTT ) = 1:
Let us consider the interval [4; 27]. The preimage under S2 of this interval is defined to be

                    f! 2 ; S2(!) 2 [4; 27]g = f! 2 ; 4  S2  27g = AcTT :
The complete list of subsets of    we can get as preimages of sets in IR is:

                                    ;; ; AHH; AHT [ ATH ; ATT ;
and sets which can be built by taking unions of these. This collection of sets is a  -algebra, called
the  -algebra generated by the random variable S2, and is denoted by  (S2). The information
content of this  -algebra is exactly the information learned by observing S2 . More specifically,
suppose the coin is tossed three times and you do not know the outcome ! , but someone is willing
to tell you, for each set in  (S2), whether ! is in the set. You might be told, for example, that ! is
not in AHH , is in AHT [ ATH , and is not in ATT . Then you know that in the first two tosses, there
was a head and a tail, and you know nothing more. This information is the same you would have
gotten by being told that the value of S2(! ) is 4.
Note that F2 defined earlier contains all the sets which are in  (S2), and even more. This means
that the information in the first two tosses is greater than the information in S2 . In particular, if you
see the first two tosses, you can distinguish AHT from ATH , but you cannot make this distinction
from knowing the value of S2 alone.
20

Definition 1.5 Let be a nonemtpy finite set and let F be the  -algebra of all subsets of . Let X
be a random variable on ( ; F ). The  -algebra  (X ) generated by X is defined to be the collection
of all sets of the form f! 2 ; X (! ) 2 Ag, where A is a subset of IR. Let G be a sub- -algebra of
F . We say that X is G -measurable if every set in (X ) is also in G .
Note: We normally write simply fX 2 Ag rather than f! 2           ; X (! ) 2 Ag.
Definition 1.6 Let be a nonempty, finite set, let F be the  -algebra of all subsets of , let IP be
a probabilty measure on ( ; F ), and let X be a random variable on . Given any set A  IR, we
define the induced measure of A to be

                                      LX (A) = IP fX 2 Ag:
In other words, the induced measure of a set A tells us the probability that X takes a value in A. In
the case of S2 above with the probability measure of Example 1.2, some sets in IR and their induced
measures are:

                            LS (;) = IP (;) = 0;
                                2

                            LS (IR) = IP ( ) = 1;
                                2

                            LS [0; 1) = IP ( ) = 1;
                                2
                                                                   2
                            LS [0; 3] = IP fS2 = 1g = IP (ATT ) = 23 :
                                2


                                                         2
In fact, the induced measure of S2 places a mass of size 13 = 19 at the number 16, a mass of size
4
                                        2 2 4
9 at the number 4, and a mass of size 3       = 9 at the number 1. A common way to record this
information is to give the cumulative distribution function FS (x) of S2 , defined by
                                                              2

                                                 8
                                                 >
                                                 > 0; if x < 1;
                                                 <
                         FS (x) = IP (S2  x) = > 98 ;; ifif 14 
                                                    4              x < 4;
                                                 : 19; if 16xx:< 16;
                                                                                                (2.3)
                                                 >
                            2




By the distribution of a random variable X , we mean any of the several ways of characterizing
LX . If X is discrete, as in the case of S2 above, we can either tell where the masses are and how
large they are, or tell what the cumulative distribution function is. (Later we will consider random
variables X which have densities, in which case the induced measure of a set A  IR is the integral
of the density over the set A.)

Important Note. In order to work through the concept of a risk-neutral measure, we set up the
definitions to make a clear distinction between random variables and their distributions.
A random variable is a mapping from to IR, nothing more. It has an existence quite apart from
discussion of probabilities. For example, in the discussion above, S2 (TTH ) = S2(TTT ) = 1,
regardless of whether the probability for H is 13 or 12 .
CHAPTER 1. Introduction to Probability Theory                                                              21

The distribution of a random variable is a measure LX on IR, i.e., a way of assigning probabilities
to sets in IR. It depends on the random variable X and the probability measure IP we use in . If we
set the probability of H to be 13 , then LS2 assigns mass 19 to the number 16. If we set the probability
of H to be 12 , then LS2 assigns mass 14 to the number 16. The distribution of S2 has changed, but
the random variable has not. It is still defined by

                         S2(HHH ) = S2(HHT ) = 16;
                         S2(HTH ) = S2 (HTT ) = S2 (THH ) = S2 (THT ) = 4;
                         S2(TTH ) = S2(TTT ) = 1:
Thus, a random variable can have more than one distribution (a “market” or “objective” distribution,
and a “risk-neutral” distribution).
In a similar vein, two different random variables can have the same distribution. Suppose in the
binomial model of Example 1.1, the probability of H and the probability of T is 12 . Consider a
European call with strike price 14 expiring at time 2. The payoff of the call at time 2 is the random
variable (S2 , 14)+, which takes the value 2 if ! = HHH or ! = HHT , and takes the value 0 in
every other case. The probability the payoff is 2 is 14 , and the probability it is zero is 34 . Consider also
a European put with strike price 3 expiring at time 2. The payoff of the put at time 2 is (3 , S2)+ ,
which takes the value 2 if ! = TTH or ! = TTT . Like the payoff of the call, the payoff of the
put is 2 with probability 14 and 0 with probability 34 . The payoffs of the call and the put are different
random variables having the same distribution.

Definition 1.7 Let be a nonempty, finite set, let F be the  -algebra of all subsets of , let IP be
a probabilty measure on ( ; F ), and let X be a random variable on . The expected value of X is
defined to be
                                                  X
                                        IEX =         X (!)IP f!g:                                     (2.4)
                                                  !2
Notice that the expected value in (2.4) is defined to be a sum over the sample space . Since              is a
finite set, X can take only finitely many values, which we label x1; : : :; xn . We can partition        into
the subsets fX1 = x1 g; : : :; fXn = xn g, and then rewrite (2.4) as
                                             X
                                IEX =            X (!)IP f! g
                                             !2
                                             Xn        X
                                        =                      X (!)IP f! g
                                             k=1 !2fXk =xk g
                                             Xn         X
                                        =        xk           IP f!g
                                             k=1 !2fXk =xk g
                                             Xn
                                        =        xk IP fXk = xk g
                                             k=1
                                             Xn
                                        =        xk LX fxk g:
                                             k=1
22

Thus, although the expected value is defined as a sum over the sample space         , we can also write it
as a sum over IR.
To make the above set of equations absolutely clear, we consider S2 with the distribution given by
(2.3). The definition of IES2 is

                       IES2 = S2(HHH )IP fHHH g + S2(HHT )IP fHHT g
                                +S2 (HTH )IP fHTH g + S2(HTT )IP fHTT g
                                +S2 (THH )IP fTHH g + S2(THT )IP fTHT g
                                +S2 (TTH )IP fTTH g + S2 (TTT )IP fTTT g
                            = 16  IP (AHH ) + 4  IP (AHT [ ATH ) + 1  IP (ATT )
                            = 16  IP fS2 = 16g + 4  IP fS2 = 4g + 1  IP fS2 = 1g
                             = 16  LS f16g + 4  LS f4g + 1  LS f1g
                                         2             2               2


                             = 16  19 + 4  49 + 4  49
                             = 48 :
                                9
Definition 1.8 Let be a nonempty, finite set, let F be the  -algebra of all subsets of , let IP be a
probabilty measure on ( ; F ), and let X be a random variable on . The variance of X is defined
to be the expected value of (X , IEX )2, i.e.,
                                              X (X (! ) , IEX )2IP f! g:
                                    Var(X ) =                                                       (2.5)
                                               !2

One again, we can rewrite (2.5) as a sum over IR rather than over . Indeed, if X takes the values
x1 ; : : :; xn, then
                               X
                               n                                 X
                                                                 n
                 Var(X ) =          (xk , IEX )2IP fX = xk g =       (xk , IEX )2LX (xk ):
                              k=1                                k=1

1.3 Lebesgue Measure and the Lebesgue Integral

In this section, we consider the set of real numbers IR, which is uncountably infinite. We define the
Lebesgue measure of intervals in IR to be their length. This definition and the properties of measure
determine the Lebesgue measure of many, but not all, subsets of IR. The collection of subsets of
IR we consider, and for which Lebesgue measure is defined, is the collection of Borel sets defined
below.
We use Lebesgue measure to construct the Lebesgue integral, a generalization of the Riemann
integral. We need this integral because, unlike the Riemann integral, it can be defined on abstract
spaces, such as the space of infinite sequences of coin tosses or the space of paths of Brownian
motion. This section concerns the Lebesgue integral on the space IR only; the generalization to
other spaces will be given later.
CHAPTER 1. Introduction to Probability Theory                                                      23

Definition 1.9 The Borel  -algebra, denoted B(IR), is the smallest  -algebra containing all open
intervals in IR. The sets in B(IR) are called Borel sets.

Every set which can be written down and just about every set imaginable is in B(IR). The following
discussion of this fact uses the  -algebra properties developed in Problem 1.3.
By definition, every open interval (a; b) is in B(IR), where a and b are real numbers. Since B(IR) is
a  -algebra, every union of open intervals is also in B(IR). For example, for every real number a,
the open half-line
                                                  [
                                                  1
                                       (a; 1) =         (a; a + n)
                                                  n=1
is a Borel set, as is
                                                   [
                                                   1
                                      (,1; a) =         (a , n; a):
                                                  n=1
For real numbers a and b, the union

                                          (,1; a) [ (b; 1)
is Borel. Since B(IR) is a  -algebra, every complement of a Borel set is Borel, so B(IR) contains
                                                                    c
                                   [a; b] = (,1; a) [ (b; 1) :
This shows that every closed interval is Borel. In addition, the closed half-lines

                                                  [
                                                  1
                                       [a; 1) =         [a; a + n]
                                                  n=1

                                                   [
and
                                                   1
                                      (,1; a] =          [a , n; a]
                                                   n=1
are Borel. Half-open and half-closed intervals are also Borel, since they can be written as intersec-
tions of open half-lines and closed half-lines. For example,

                                      (a; b] = (,1; b] \ (a; 1):
Every set which contains only one real number is Borel. Indeed, if a is a real number, then
                                            1 
                                            \       1   1 
                                   fag =          a, ;a+ :
                                                         n       n
                                           n=1
This means that every set containing finitely many real numbers is Borel; if A = fa1; a2; : : :; an g,
then
                                                  [n
                                            A=          fak g:
                                                  k=1
24

In fact, every set containing countably infinitely many numbers is Borel; if A = fa1; a2; : : : g, then
                                                      [n
                                              A=           fak g:
                                                     k=1
This means that the set of rational numbers is Borel, as is its complement, the set of irrational
numbers.
There are, however, sets which are not Borel. We have just seen that any non-Borel set must have
uncountably many points.

Example 1.4 (The Cantor set.) This example gives a hint of how complicated a Borel set can be.
We use it later when we discuss the sample space for an infinite sequence of coin tosses.
Consider the unit interval [0; 1], and remove the middle half, i.e., remove the open interval
                                                    
                                              A1 = 14 ; 43 :
The remaining set                              1 3 
                                          C1 = 0; 4 [ 4 ; 1
has two pieces. From each of these pieces, remove the middle half, i.e., remove the open set
                                         1 3  [  13 15 
                                   A2 = 16 ; 16      ; :
                                                    16 16
The remaining set             1  [  3 1  [  3 13  [  15 
                          C = 0;
                              2      16 ;         ;
                                                16 4          ;1 :
                                                               4 16 16
has four pieces. Continue this process, so at stage k, the set Ck has 2k pieces, and each piece has
length 41k . The Cantor set
                                                    \   1
                                                C = C        k
                                                       k=1
is defined to be the set of points not removed at any stage of this nonterminating process.
Note that the length of A1 , the first set removed, is 12 . The “length” of A2 , the second set removed,
is 18 + 18 = 41 . The “length” of the next set removed is 4  321 = 1 , and in general, the length of the
                                                                     8
                       , k
k-th set removed is 2 . Thus, the total length removed is
                                                X
                                                1 1
                                                       k = 1;
                                                k=1 2
and so the Cantor set, the set of points not removed, has zero “length.”
Despite the fact that the Cantor set has no “length,” there are lots of points in this set. In particular,
none of the endpoints of the pieces of the sets C1; C2; : : : is ever removed. Thus, the points

                                  0; 14 ; 43 ; 1; 16
                                                   1 ; 3 ; 13 ; 15 ; 1 ; : : :
                                                       16 16 16 64
are all in C . This is a countably infinite set of points. We shall see eventually that the Cantor set
has uncountably many points.                                                                        
CHAPTER 1. Introduction to Probability Theory                                                     25

Definition 1.10 Let B(IR) be the  -algebra of Borel subsets of IR. A measure on (IR; B(IR)) is a
function  mapping B into [0; 1] with the following properties:

(i) (;) = 0,

(ii) If A1 ; A2; : : : is a sequence of disjoint sets in B(IR), then

                                                 [
                                                 1        ! X
                                                            1
                                                     Ak =              (Ak ):
                                                k=1               k=1

Lebesgue measure is defined to be the measure on (IR; B(IR)) which assigns the measure of each
interval to be its length. Following Williams’s book, we denote Lebesgue measure by 0 .

A measure has all the properties of a probability measure given in Problem 1.4, except that the total
measure of the space is not necessarily 1 (in fact, 0 (IR) = 1), one no longer has the equation

                                              (Ac ) = 1 , (A)
in Problem 1.4(iii), and property (v) in Problem 1.4 needs to be modified to say:

(v) If A1 ; A2; : : : is a sequence of sets in B(IR) with A1  A2     and (A1 ) < 1, then

                                                \
                                                1         !
                                                    Ak = nlim
                                                            !1 (An ):
                                               k=1

To see that the additional requirment (A1 ) < 1 is needed in (v), consider

                             A1 = [1; 1); A2 = [2; 1); A3 = [3; 1); : : ::
Then \1
      k=1 Ak = ;, so 0 (\k=1 Ak ) = 0, but limn!1 0 (An ) = 1.
                          1
We specify that the Lebesgue measure of each interval is its length, and that determines the Lebesgue
measure of all other Borel sets. For example, the Lebesgue measure of the Cantor set in Example
1.4 must be zero, because of the “length” computation given at the end of that example.
The Lebesgue measure of a set containing only one point must be zero. In fact, since
                                                             
                                        fag  a , n1 ; a + n1
for every positive integer n, we must have

                                                   1    1  2
                                0  0 fag  0 a , ; a + = :
                                                              n          n        n
Letting n ! 1, we obtain
                                                 0 fag = 0:
26

The Lebesgue measure of a set containing countably many points must also be zero. Indeed, if
A = fa1; a2; : : : g, then
                                                   X
                                                   1                       X
                                                                           1
                                      0 (A) =            0 fak g =              0 = 0:
                                                   k=1                     k=1
The Lebesgue measure of a set containing uncountably many points can be either zero, positive and
finite, or infinite. We may not compute the Lebesgue measure of an uncountable set by adding up
the Lebesgue measure of its individual members, because there is no way to add up uncountably
many numbers. The integral was invented to get around this problem.
In order to think about Lebesgue integrals, we must first consider the functions to be integrated.

Definition 1.11 Let f be a function from IR to IR. We say that f is Borel-measurable if the set
fx 2 IR; f (x) 2 Ag is in B(IR) whenever A 2 B(IR). In the language of Section 2, we want the
 -algebra generated by f to be contained in B(IR).
Definition 3.4 is purely technical and has nothing to do with keeping track of information. It is
difficult to conceive of a function which is not Borel-measurable, and we shall pretend such func-
tions don’t exist. Hencefore, “function mapping IR to IR” will mean “Borel-measurable function
mapping IR to IR” and “subset of IR” will mean “Borel subset of IR”.

Definition 1.12 An indicator function g from IR to IR is a function which takes only the values 0
and 1. We call
                                       A = fx 2 IR; g (x) = 1g
the set indicated by g . We define the Lebesgue integral of g to be
                                               Z
                                                        g d0 = 0 (A):
                                                   IR
A simple function h from IR to IR is a linear combination of indicators, i.e., a function of the form
                                                               X
                                                               n
                                               h(x) =                ck gk (x);
                                                              k=1
where each gk is of the form                              (
                                           gk (x) =            1; if x 2 Ak ;
                                                               0; if x 2= Ak ;
and each ck is a real number. We define the Lebesgue integral of h to be
                            Z                  X
                                               n Z                            X
                                                                              n
                                    h d0 =         ck            gk d0 =         ck 0(Ak ):
                                R              k=1            IR              k=1
Let f be a nonnegative function defined on IR, possibly taking the value 1 at some points. We
define the Lebesgue integral of f to be
          Z                     Z                                                                
                 f d0 = sup            h d0; h is simple and h(x)  f (x) for every x 2 IR :
            IR                      IR
CHAPTER 1. Introduction to Probability Theory                                                          27

It is possible that this integral is infinite. If it is finite, we say that f is integrable.
Finally, let f be a function defined on IR, possibly taking the value 1 at some points and the value
,1 at other points. We define the positive and negative parts of f to be
                       f + (x) = maxff (x); 0g; f ,(x) = maxf,f (x); 0g;
respectively, and we define the Lebesgue integral of f to be
                                 Z                  Z                        Z
                                        f d0 =             f + d0 , ,            f , d0;
                                   IR                   IR                     IR
                                                                                     R             R
                          side is not of the form 1 , 1. If both IR f + d0 and IR f , d0 are finite
                 R
provided the right-hand
(or equivalently, IR jf j d0 < 1, since jf j = f + + f , ), we say that f is integrable.
Let f be a function defined on IR, possibly taking the value 1 at some points and the value ,1 at
other points. Let A be a subset of IR. We define
                                              Z                   Z
                                                   f d0 =             lIAf d0 ;
                                               A                   IR
where                                                        (
                                           lIA (x) =            1; if x 2 A;
                                                                 0; if x 2= A;
is the indicator function of A.

The Lebesgue integralRjust defined is related to the Riemann integral in Rone very important way: if
the Riemann integral ab f (x)dx is defined, then the Lebesgue integral [a;b] f d0 agrees with the
Riemann integral. The Lebesgue integral has two important advantages over the Riemann integral.
The first is that the Lebesgue integral is defined for more functions, as we show in the following
examples.
                                                                                               
Example 1.5 Let Q be the set of rational numbers in [0; 1], and consider f = lIQ . Being a countable
set, Q has Lebesgue measure zero, and so the Lebesgue integral of f over [0; 1] is
                                                    Z
                                                              f d0 = 0:
                                                     [0;1]
                                          R
To compute the Riemann integral 01 f (x)dx, we choose partition points 0 = x0 < x1 <    <
xn = 1 and divide the interval [0; 1] into subintervals [x0; x1]; [x1; x2]; : : :; [xn,1 ; xn]. In each
subinterval [xk,1 ; xk ] there is a rational point qk , where f (qk ) = 1, and there is also an irrational
point rk , where f (rk ) = 0. We approximate the Riemann integral from above by the upper sum
                           X
                           n                                      X
                                                                  n
                                 f (qk )(xk , xk,1 ) =                   1  (xk , xk,1 ) = 1;
                           k=1                                    k=1
and we also approximate it from below by the lower sum
                           X
                           n                                      X
                                                                  n
                                 f (rk )(xk , xk,1 ) =                   0  (xk , xk,1 ) = 0:
                           k=1                                    k=1
28

No matter how fine we take the partition of [0; 1], the upper sum is always 1 and the lower sum is
always 0. Since these two do not converge to a common value as the partition becomes finer, the
Riemann integral is not defined.                                                                 
Example 1.6 Consider the function
                                                           (
                                                f (x) =        1; if x = 0;
                                                                0; if x 6= 0:
This is not a simple function because simple function cannot take the value 1. Every simple
function which lies between 0 and f is of the form
                                                            (
                                                h(x) =            y; if x = 0;
                                                                   0; if x 6= 0;
for some y 2 [0; 1), and thus has Lebesgue integral
                                                Z
                                                       h d0 = y0 f0g = 0:
                                                  IR
It follows that
         Z                   Z                                                                           
               f d0 = sup             h d0; h is simple and h(x)  f (x) for every x 2 IR = 0:
          IR                      IR
                                                  R
                                        1 f (x) dx, which for this function f is the same as the
                 R
Now consider the Riemann integral ,1
Riemann integral ,11 f (x) dx. When we partition [,1; 1] into subintervals, one of these will contain
                                                                         R
the point 0, and when we compute the upper approximating sum for ,11 f (x) dx, this point will
contribute 1 times the length of the subinterval containing it. Thus the upper approximating sum is
1. On the other hand, the lower approximating sum is 0, and again the Riemann integral does not
exist.                                                                                              
The Lebesgue integral has all linearity and comparison properties one would expect of an integral.
In particular, for any two functions f and g and any real constant c,
                              Z                                     Z                     Z
                                       (f + g ) d0 =                     f d0 +               g d0 ;
                                  IR Z                                Z
                                                                     IR                    IR
                                                cf d0 = c                    f d0;
                                           IR                            IR
and whenever f (x)  g (x) for all x 2 IR, we have
                                                 Z                   Z
                                                         f d0               gd d0:
                                                    IR                  IR
Finally, if A and B are disjoint sets, then
                                       Z                       Z                  Z
                                                 f d0 =            f d0 +               f d0:
                                        A[B                     A                     B
CHAPTER 1. Introduction to Probability Theory                                                       29

There are three convergence theorems satisfied by the Lebesgue integral. In each of these the sit-
uation is that there is a sequence of functions fn ; n = 1; 2; : : : converging pointwise to a limiting
function f . Pointwise convergence just means that

                                  !1 fn (x) = f (x) for every x 2 IR:
                                nlim
There are no such theorems for the Riemann integral, because the Riemann integral of the limit-
ing function f is too often not defined. Before we state the theorems, we given two examples of
pointwise convergence which arise in probability theory.

Example 1.7 Consider a sequence of normal densities, each with variance 1 and the n-th having
mean n:
                                        1 , (x,n)2
                                         fn (x) = p e                2   :
                                                   2
These converge pointwise to the function

                                       f (x) = 0 for every x 2 IR:
        R f d = 1 for every n, so lim              R               R                                
We have   IR n    0                           n!1 IR fn d0 = 1, but IR f d0 = 0.
Example 1.8 Consider a sequence of normal densities, each with mean 0 and the n-th having vari-
ance n1 :
                                            r
                                   fn (x) = n e, x2n :
                                                       2


                                                      2
These converge pointwise to the function
                                                  (
                                        1; if x = 0;
                                       f (x) =
                                        0; if x 6= 0:
              R f d = 1 for every n, so lim R f d = 1, but R f d = 0. The
We have again    IR n    0                             n!1 IR n                 0   IR   0
function f is not the Dirac delta; the Lebesgue integral of this function was already seen in Example
1.6 to be zero.                                                                                     
Theorem 3.1 (Fatou’s Lemma) Let fn ; n = 1; 2; : : : be a sequence of nonnegative functions con-
verging pointwise to a function f . Then
                                   Z                       Z
                                         f d0  lim
                                                  n!1inf             fn d0 :
                                    IR                          IR
           R
If limn!1 IR fn d0 is defined, then Fatou’s Lemma has the simpler conclusion
                                    Z                      Z
                                            f d0  nlim
                                                      !1            fn d0 :
                                       IR                      IR
This is the case in Examples 1.7 and 1.8, where
                                                  Z
                                              !1 IR fn d0 = 1;
                                            nlim
30

       R
while IR f d0 = 0. We could modify        either Example 1.7 or 1.8 Rby setting gn = fn if n is even,
                                   R
but gn = 2Rfn if n is odd. Now IR gn d0 = 1 if n is even, but IR gn d0 = 2 if n is odd. The
sequence f IR gn d0 g1 n=1 has two cluster points, 1 and 2. R By definition, the smaller one, 1, is
lim inf n!1 IR gn d0 and the larger one, 2, is lim sup n!1 IR gn d0 . Fatou’s Lemma guarantees
that even the smaller cluster point will be greater than or equal to the integral of the limiting function.
The key assumption in Fatou’s Lemma is that all the functions take only nonnegative values. Fatou’s
Lemma does not assume much but it is is not very satisfying because it does not conclude that
                                     Z                      Z
                                             f d0 = nlim
                                                       !1            fn d0 :
                                        IR                      IR
There are two sets of assumptions which permit this stronger conclusion.

Theorem 3.2 (Monotone Convergence Theorem) Let fn ; n = 1; 2; : : : be a sequence of functions
converging pointwise to a function f . Assume that

                         0  f1 (x)  f2 (x)  f3 (x)     for every x 2 IR:
Then                                 Z                      Z
                                             f d0 = nlim
                                                       !1            fn d0 ;
                                        IR                      IR
where both sides are allowed to be 1.

Theorem 3.3 (Dominated Convergence Theorem) Let fn ; n = 1; 2; : : : be a sequence of functions,
                                                        R
which may take either positive or negative values, converging     pointwise to a function f . Assume
that there is a nonnegative integrable function g (i.e., IR g d0 < 1) such that

                             jfn(x)j  g(x) for every x 2 IR for every n:
Then                                 Z                Z
                                             f d0 = nlim
                                                       !1            fn d0 ;
                                        IR                      IR
and both sides will be finite.


1.4 General Probability Spaces

Definition 1.13 A probability space (         ; F ; IP ) consists of three objects:
(i)    , a nonempty set, called the sample space, which contains all possible outcomes of some
        random experiment;

(ii) F , a  -algebra of subsets of ;

(iii) IP , a probability measure on ( ; F ), i.e., a function which assigns to each set A 2 F a number
        IP (A) 2 [0; 1], which represents the probability that the outcome of the random experiment
        lies in the set A.
CHAPTER 1. Introduction to Probability Theory                                                           31

Remark 1.1 We recall from Homework Problem 1.4 that a probability measure IP has the following
properties:

(a) IP (;) = 0.
(b) (Countable additivity) If A1 ; A2; : : : is a sequence of disjoint sets in F , then
                                                1 ! X
                                                [   1
                                          IP         Ak =            IP (Ak ):
                                               k=1             k=1
(c) (Finite additivity) If n is a positive integer and A1 ; : : :; An are disjoint sets in F , then
                                IP (A1 [    [ An ) = IP (A1 ) +    + IP (An ):
(d) If A and B are sets in F and A  B , then
                                         IP (B ) = IP (A) + IP (B n A):
      In particular,
                                                IP (B )  IP (A):
(d) (Continuity from below.) If A1 ; A2; : : : is a sequence of sets in F with A1  A2     , then
                                               1 !
                                               [
                                         IP          Ak = nlim
                                                            !1 IP (An ):
                                               k=1
(d) (Continuity from above.) If A1 ; A2; : : : is a sequence of sets in F with A1  A2     , then
                                               1 !
                                               \
                                         IP          Ak = nlim
                                                            !1 IP (An ):
                                               k=1
We have already seen some examples of finite probability spaces. We repeat these and give some
examples of infinite probability spaces as well.

Example 1.9 Finite coin toss space.
Toss a coin n times, so that is the set of all sequences of H and T which have n components.
We will use this space quite a bit, and so give it a name: n . Let F be the collection of all subsets
of n . Suppose the probability of H on each toss is p, a number between zero and one. Then the
                      
probability of T is q = 1 , p. For each ! = (!1 ; !2; : : :; !n ) in n , we define

                            IP f!g = pNumber of H in !  qNumber of T in ! :
For each A 2 F , we define
                                                       X
                                          IP (A) =          IP f!g:                                  (4.1)
                                                       !2A
We can define IP (A) this way because A has only finitely many elements, and so only finitely many
terms appear in the sum on the right-hand side of (4.1).                                         
32

Example 1.10 Infinite coin toss space.
Toss a coin repeatedly without stopping, so that is the set of all nonterminating sequences of H
and T . We call this space 1 . This is an uncountably infinite space, and we need to exercise some
care in the construction of the  -algebra we will use here.
For each positive integer n, we define Fn to be the  -algebra determined by the first n tosses. For
example, F2 contains four basic sets,

                    AHH = f! = (!1; !2 ; !3; : : : ); !1 = H; !2 = H g
                        = The set of all sequences which begin with HH;
                    AHT = f! = (!1; !2 ; !3; : : : ); !1 = H; !2 = T g
                        = The set of all sequences which begin with HT;
                    ATH = f! = (!1; !2 ; !3; : : : ); !1 = T; !2 = H g
                        = The set of all sequences which begin with TH;
                    ATT = f! = (!1; !2 ; !3; : : : ); !1 = T; !2 = T g
                        = The set of all sequences which begin with TT:
Because F2 is a  -algebra, we must also put into it the sets ;,    , and all unions of the four basic
sets.
In the  -algebra F , we put every set in every  -algebra Fn , where n ranges over the positive
integers. We also put in every other set which is required to make F be a  -algebra. For example,
the set containing the single sequence

                              fHHHHH   g = fH on every tossg
is not in any of the Fn  -algebras, because it depends on all the components of the sequence and
not just the first n components. However, for each positive integer n, the set

                                       fH on the first n tossesg
is in Fn and hence in F . Therefore,
                                                \
                                                1
                         fH on every tossg =        fH on the first n tossesg
                                                n=1
is also in F .
We next construct the probability measure IP on ( 1 ; F ) which corresponds to probability p 2
[0; 1] for H and probability q = 1 , p for T . Let A 2 F be given. If there is a positive integer n
such that A 2 Fn , then the description of A depends on only the first n tosses, and it is clear how to
define IP (A). For example, suppose A = AHH [ ATH , where these sets were defined earlier. Then
A is in F2. We set IP (AHH ) = p2 and IP (ATH ) = qp, and then we have
                      IP (A) = IP (AHH [ ATH ) = p2 + qp = (p + q )p = p:
In other words, the probability of a H on the second toss is p.
CHAPTER 1. Introduction to Probability Theory                                                        33

Let us now consider a set A 2 F for which there is no positive integer n such that A 2 F . Such
is the case for the set fH on every tossg. To determine the probability of these sets, we write them
in terms of sets which are in Fn for positive integers n, and then use the properties of probability
measures listed in Remark 1.1. For example,

                      fH on the first tossg  fH on the first two tossesg
                                             fH on the first three tossesg
                                              ;
and
                         \
                         1
                               fH on the first n tossesg = fH on every tossg:
                         n=1
According to Remark 1.1(d) (continuity from above),

               IP fH on every tossg = nlim
                                        !1 IP fH on the first n tossesg = nlim
                                                                                n
                                                                            !1 p :
If p = 1, then IP fH on every tossg = 1; otherwise, IP fH on every tossg = 0.
A similar argument shows that if 0 < p < 1 so that 0 < q < 1, then every set in 1 which contains
only one element (nonterminating sequence of H and T ) has probability zero, and hence very set
which contains countably many elements also has probabiliy zero. We are in a case very similar to
Lebesgue measure: every point has measure zero, but sets can have positive measure. Of course,
the only sets which can have positive probabilty in 1 are those which contain uncountably many
elements.
In the infinite coin toss space, we define a sequence of random variables Y1 ; Y2; : : : by
                                                  (
                                      Yk (!) =       1 if !k = H;
                                                      0 if !k = T;
and we also define the random variable
                                                      X
                                                      n Y (! )
                                                         k
                                          X (! ) =          2k
                                                                 :
                                                      k=1
Since each Yk is either zero or one, X takes values in the interval [0; 1]. Indeed, X (TTTT    ) = 0,
X (HHHH    ) = 1 and the other values of X lie in between. We define a “dyadic rational
number” to be a number of the form 2mk , where k and m are integers. For example, 34 is a dyadic
rational. Every dyadic rational in (0,1) corresponds to two sequences ! 2 1 . For example,

                       X (HHTTTTT    ) = X (HTHHHHH    ) = 43 :
The numbers in (0,1) which are not dyadic rationals correspond to a single ! 2       1 ; these numbers
have a unique binary expansion.
34

Whenever we place a probability measure IP on ( ; F ), we have a corresponding induced measure
LX on [0; 1]. For example, if we set p = q = 12 in the construction of this example, then we have
                                1
                           LX 0; 2 = IP fFirst toss is T g = 21 ;
                             1 
                           LX 2 ; 1 = IP fFirst toss is H g = 21 ;
                              1
                           LX 0; 4 = IP fFirst two tosses are TT g = 14 ;
                             1 1
                           LX 4 ; 2 = IP fFirst two tosses are TH g = 14 ;
                             1 3
                           LX 2 ; 4 = IP fFirst two tosses are HT g = 14 ;
                             3 
                           LX 4 ; 1 = IP fFirst two tosses are HH g = 14 :
Continuing this process, we can verify that for any positive integers k and m satisfying

                                       0  m2,k 1 < 2mk  1;
we have                                    m , 1 m         1
                                      LX     2k ; 2k = 2k :
In other words, the LX -measure of all intervals in [0; 1] whose endpoints are dyadic rationals is the
same as the Lebesgue measure of these intervals. The only way this can be is for LX to be Lebesgue
measure.
It is interesing to consider what LX would look like if we take a value of p other than 12 when we
construct the probability measure IP on .
We conclude this example with another look at the Cantor set of Example 3.2. Let pairs be the
subset of in which every even-numbered toss is the same as the odd-numbered toss immediately
preceding it. For example, HHTTTTHH is the beginning of a sequence in pairs , but HT is not.
Consider now the set of real numbers

                                    C 0 = fX (!); ! 2 pairs g:
The numbers between ( 41 ; 12 ) can be written as X (! ), but the sequence ! must begin with either
TH or HT . Therefore, none of these numbers is in C 0. Similarly, the numbers between ( 161 ; 163 )
can be written as X (! ), but the sequence ! must begin with TTTH or TTHT , so none of these
numbers is in C 0. Continuing this process, we see that C 0 will not contain any of the numbers which
were removed in the construction of the Cantor set C in Example 3.2. In other words, C 0  C .
With a bit more work, one can convince onself that in fact C 0 = C , i.e., by requiring consecutive
coin tosses to be paired, we are removing exactly those points in [0; 1] which were removed in the
Cantor set construction of Example 3.2.                                                             
CHAPTER 1. Introduction to Probability Theory                                                         35

In addition to tossing a coin, another common random experiment is to pick a number, perhaps
using a random number generator. Here are some probability spaces which correspond to different
ways of picking a number at random.

Example 1.11
Suppose we choose a number from IR in such a way that we are sure to get either 1, 4 or 16.
Furthermore, we construct the experiment so that the probability of getting 1 is 49 , the probability of
getting 4 is 49 and the probability of getting 16 is 19 . We describe this random experiment by taking
  to be IR, F to be B(IR), and setting up the probability measure so that

                               IP f1g = 94 ; IP f4g = 49 ; IP f16g = 19 :
This determines IP (A) for every set A 2 B(IR). For example, the probability of the interval (0; 5]
is 89 , because this interval contains the numbers 1 and 4, but not the number 16.
The probability measure described in this example is LS2 , the measure induced by the stock price
S2 , when the initial stock price S0 = 4 and the probability of H is 13 . This distribution was discussed
immediately following Definition 2.8.                                                                   
Example 1.12 Uniform distribution on [0; 1].
Let = [0; 1] and let F = B([0; 1]), the collection of all Borel subsets containined in [0; 1]. For
each Borel set A  [0; 1], we define IP (A) = 0 (A) to be the Lebesgue measure of the set. Because
0[0; 1] = 1, this gives us a probability measure.
This probability space corresponds to the random experiment of choosing a number from [0; 1] so
that every number is “equally likely” to be chosen. Since there are infinitely mean numbers in [0; 1],
this requires that every number have probabilty zero of being chosen. Nonetheless, we can speak of
the probability that the number chosen lies in a particular set, and if the set has uncountably many
points, then this probability can be positive.                                                      
I know of no way to design a physical experiment which corresponds to choosing a number at
random from [0; 1] so that each number is equally likely to be chosen, just as I know of no way to
toss a coin infinitely many times. Nonetheless, both Examples 1.10 and 1.12 provide probability
spaces which are often useful approximations to reality.

Example 1.13 Standard normal distribution.
Define the standard normal density

                                                              x2
                                         '(x) = p1 e 2 :
                                                     ,
                                                  2
Let   = IR, F = B(IR) and for every Borel set A  IR, define
                                                      Z
                                          IP (A) =        ' d0:                                  (4.2)
                                                       A
36

If A in (4.2) is an interval [a; b], then we can write (4.2) as the less mysterious Riemann integral:

                                                      Z b 1 , x2
                                       IP [a; b] =      p e 2 dx:
                                                       a   2
This corresponds to choosing a point at random on the real line, and every single point has probabil-
ity zero of being chosen, but if a set A is given, then the probability the point is in that set is given
by (4.2).                                                                                               
The construction of the integral in a general probability space follows the same steps as the con-
struction of Lebesgue integral. We repeat this construction below.

Definition 1.14 Let ( ; F ; IP ) be a probability space, and let X be a random variable on this space,
i.e., a mapping from to IR, possibly also taking the values 1.

      If X is an indicator, i.e,
                                                             (
                                      X (! ) = lIA (!) =           1 if ! 2 A;
                                                                   0 if ! 2 Ac ;
       for some set A 2 F , we define           Z
                                                      X dIP = IP (A):
      If X is a simple function, i.e,
                                                           X
                                                           n
                                               X (! ) =          ck lIAk (!);
                                                           k=1
       where each ck is a real number and each Ak is a set in F , we define
                               Z               X
                                               n Z                        X
                                                                          n
                                    X dIP =          ck   lIAk dIP =           ck IP (Ak ):
                                               k=1                        k=1
      If X is nonnegative but otherwise general, we define
                 Z
                     X dIP
                    
                              Z                                                               
                    =   sup         Y dIP ; Y is simple and Y (! )  X (!) for every ! 2           :
       In fact, we can always construct a sequence of simple functions Yn ; n = 1; 2; : : : such that

                             0  Y1 (! )  Y2 (! )  Y3 (! )  : : : for every ! 2 ;
       and Y (! ) = limn!1 Yn (! ) for every ! 2            . With this sequence, we can define
                                           Z                       Z
                                               X dIP = nlim
                                                          !1           Yn dIP:
CHAPTER 1. Introduction to Probability Theory                                                     37

    If X is integrable, i.e,           Z                                Z
                                             X + dIP < 1;                    X , dIP < 1;
      where
                       X +(!) = maxfX (!); 0g; X ,(!) = maxf,X (!); 0g;
      then we define                Z                  Z                           Z
                                            X dIP =         X + dIP , ,               X , dIP:
If A is a set in F and X is a random variable, we define
                                            Z                   Z
                                                 X dIP =           lIA  X dIP:
                                             A
The expectation of a random variable X is defined to be
                                                             Z
                                                    IEX =          X dIP:
The above integral has all the linearity and comparison properties one would expect. In particular,
if X and Y are random variables and c is a real constant, then
                           Z                                    Z                  Z
                                (X + Y ) dIP =                          X dIP +        Y dIP;
                                    Z                               Z
                                            cX dIP = c X dP;
If X (! )  Y (! ) for every ! 2        , then
                                                Z                   Z
                                                    X dIP               Y dIP:
In fact, we don’t need to have X (! )  Y (! ) for every ! 2 in order to reach this conclusion; it is
enough if the set of ! for which X (! )  Y (! ) has probability one. When a condition holds with
probability one, we say it holds almost surely. Finally, if A and B are disjoint subsets of and X
is a random variable, then
                                Z                       Z                     Z
                                            X dIP =             X dIP +            X dIP:
                                   A[B                      A                  B
We restate the Lebesgue integral convergence theorem in this more general context. We acknowl-
edge in these statements that conditions don’t need to hold for every ! ; almost surely is enough.

Theorem 4.4 (Fatou’s Lemma) Let Xn ; n = 1; 2; : : : be a sequence of almost surely nonnegative
random variables converging almost surely to a random variable X . Then
                                        Z                                Z
                                             X dIP  lim
                                                      n!1inf                 Xn dIP;
or equivalently,
                                                 IEX  lim
                                                        n!1inf IEXn :
38

Theorem 4.5 (Monotone Convergence Theorem) Let Xn ; n = 1; 2; : : : be a sequence of random
variables converging almost surely to a random variable X . Assume that

                             0  X1  X2  X3     almost surely:
Then                               Z                                Z
                                          X dIP = nlim
                                                    !1 Xn dIP;
or equivalently,
                                           IEX = nlim
                                                   !1 IEXn :
Theorem 4.6 (Dominated Convergence Theorem) Let Xn ; n = 1; 2; : : : be a sequence of random
variables, converging almost surely to a random variable X . Assume that there exists a random
variable Y such that
                              jXnj  Y almost surely for every n:
Then                               Z                             Z
                                       X dIP = nlim
                                                 !1                     Xn dIP;
or equivalently,
                                           IEX = nlim
                                                   !1 IEXn :
In Example 1.13, we constructed a probability measure on (IR; B(IR)) by integrating  R the standard
normal density. In fact, whenever ' is a nonnegative function defined on R satisfying IR ' d0 = 1,
we call ' a density and we can define an associated probability measure by
                                          Z
                              IP (A) =           ' d0 for every A 2 B(IR):                     (4.3)
                                              A
We shall often have a situation in which two measure are related by an equation like (4.3). In fact,
the market measure and the risk-neutral measures in financial markets are related this way. We say
that ' in (4.3) is the Radon-Nikodym derivative of dIP with respect to 0 , and we write
                                                        dIP :
                                                    ' = d                                       (4.4)
                                                                 0
The probability measure IP weights different parts of the real line according to the density '. Now
suppose f is a function on (R; B(IR); IP ). Definition 1.14 gives us a value for the abstract integral
                                                    Z
                                                            f dIP:
                                                       IR
We can also evaluate                               Z
                                                         f' d0;
                                                    IR
which is an integral with respec to Lebesgue measure over the real line. We want to show that
                                       Z                     Z
                                               f dIP =               f' d0;                     (4.5)
                                          IR                   IR
CHAPTER 1. Introduction to Probability Theory                                                     39

                                                                               dIP for ' in (4.5) and
an equation which is suggested by the notation introduced in (4.4) (substitute d
“cancel” the d0 ). We include a proof of this because it allows us to illustrate the concept of the
                                                                                  0


standard machine explained in Williams’s book in Section 5.12, page 5.
The standard machine argument proceeds in four steps.

Step 1. Assume that f is an indicator function, i.e., f (x) = lIA (x) for some Borel set A  IR. In
      that case, (4.5) becomes                       Z
                                              IP (A) = ' d0:
                                                         A
      This is true because it is the definition of IP (A).

Step 2. Now that we know that (4.5) holds when f is an indicator function, assume that f is a
      simple function, i.e., a linear combination of indicator functions. In other words,
                                                             X
                                                             n
                                               f (x) =            ck hk (x);
                                                          k=1
      where each ck is a real number and each hk is an indicator function. Then
                                  Z                       Z "X
                                                             n                 #
                                           f dIP =                 ck hk dIP
                                      IR                    IR k=1
                                                          Xn    Z
                                                    =         ck hk dIP
                                                          k=1     IR
                                                          Xn    Z
                                                    =         ck hk ' d0
                                                          k=1 " IR #
                                                          Z X   n
                                                    =              ck hk ' d0
                                                            IR k=1
                                                          Z
                                                    =             f' d0:
                                                             IR
Step 3. Now that we know that (4.5) holds when f is a simple function, we consider a general
      nonnegative function f . We can always construct a sequence of nonnegative simple functions
      fn; n = 1; 2; : : : such that
                          0  f1 (x)  f2 (x)  f3 (x)  : : : for every x 2 IR;
      and f (x) = limn!1 fn (x) for every x 2 IR. We have already proved that
                                  Z                   Z
                                           fn dIP =          fn ' d0 for every n:
                                      IR                IR
      We let n ! 1 and use the Monotone Convergence Theorem on both sides of this equality to
      get                           Z          Z
                                                   f dIP =             f' d0:
                                              IR                  IR
40

Step 4. In the last step, we consider an integrable function f , which can take both positive and
      negative values. By integrable, we mean that
                                      Z                           Z
                                            f + dIP < 1;                   f , dIP < 1:
                                       IR                             IR
        ¿From Step 3, we have
                                            Z                      Z
                                                  f + dIP =                f + ' d0;
                                            ZIR                    ZIR
                                                  f , dIP =                f , ' d0:
                                             IR                       IR
        Subtracting these two equations, we obtain the desired result:
                                Z                      Z                     Z
                                      f dIP =                  f + dIP ,               f , dIP
                                 IR                    ZIR                       IRZ
                                                   =           f + ' d0 ,               f , ' d0
                                                       ZIR                          IR
                                                   =           f' d0:
                                                           R

1.5 Independence

In this section, we define and discuss the notion of independence in a general probability space
( ; F ; IP ), although most of the examples we give will be for coin toss space.

1.5.1    Independence of sets

Definition 1.15 We say that two sets A 2 F and B 2 F are independent if
                                          IP (A \ B) = IP (A)IP (B):
Suppose a random experiment is conducted, and ! is the outcome. The probability that ! 2 A is
IP (A). Suppose you are not told !, but you are told that ! 2 B . Conditional on this information,
the probability that ! 2 A is
                                                           (A \ B ) :
                                            IP (AjB) = IP IP (B )
The sets A and B are independent if and only if this conditional probability is the uncondidtional
probability IP (A), i.e., knowing that ! 2 B does not change the probability you assign to A. This
discussion is symmetric with respect to A and B ; if A and B are independent and you know that
! 2 A, the conditional probability you assign to B is still the unconditional probability IP (B ).
Whether two sets are independent depends on the probability measure IP . For example, suppose we
toss a coin twice, with probability p for H and probability q = 1 , p for T on each toss. To avoid
trivialities, we assume that 0 < p < 1. Then
                    IP fHH g = p2 ; IP fHT g = IP fTH g = pq; IP fTT g = q 2:                        (5.1)
CHAPTER 1. Introduction to Probability Theory                                                          41

Let A = fHH; HT g and B = fHT; TH g. In words, A is the set “H on the first toss” and B is the
set “one H and one T .” Then A \ B = fHT g. We compute

                                           IP (A) = p2 + pq = p;
                                           IP (B ) = 2pq;
                                           IP (A)IP (B ) = 2p2q;
                                           IP (A \ B) = pq:
These sets are independent if and only if 2p2 q = pq , which is the case if and only if p = 21 .
If p = 21 , then IP (B ), the probability of one head and one tail, is 12 . If you are told that the coin
tosses resulted in a head on the first toss, the probability of B , which is now the probability of a T
on the second toss, is still 12 .
Suppose however that p = 0:01. By far the most likely outcome of the two coin tosses is TT , and
the probability of one head and one tail is quite small; in fact, IP (B ) = 0:0198. However, if you
are told that the first toss resulted in H , it becomes very likely that the two tosses result in one head
and one tail. In fact, conditioned on getting a H on the first toss, the probability of one H and one
T is the probability of a T on the second toss, which is 0:99.

1.5.2   Independence of  -algebras

Definition 1.16 Let G and H be sub- -algebras of F . We say that G and H are independent if every
set in G is independent of every set in H, i.e,

                        IP (A \ B) = IP (A)IP (B) for every A 2 H; B 2 G :
Example 1.14 Toss a coin twice, and let IP be given by (5.1). Let G = F1 be the  -algebra
determined by the first toss: G contains the sets

                                    ;; ; fHH; HT g; fTH; TT g:
Let H be the  -albegra determined by the second toss: H contains the sets

                                    ;; ; fHH; TH g; fHT; TT g:
These two  -algebras are independent. For example, if we choose the set fHH; HT g from G and
the set fHH; TH g from H, then we have

                       IP fHH; HT gIP fHH; TH g =(p2 + pq )(p2 + pq ) = p2 ;
                       IP fHH; HT g\ fHH; TH g = IP fHH g = p2 :
No matter which set we choose in G and which set we choose in H, we will find that the product of
the probabilties is the probability of the intersection.
42

Example 1.14 illustrates the general principle that when the probability for a sequence of tosses is
defined to be the product of the probabilities for the individual tosses of the sequence, then every
set depending on a particular toss will be independent of every set depending on a different toss.
We say that the different tosses are independent when we construct probabilities this way. It is also
possible to construct probabilities such that the different tosses are not independent, as shown by
the following example.

Example 1.15 Define IP for the individual elements of      = fHH; HT; TH; TT g to be
                  IP fHH g = 91 ; IP fHT g = 29 ; IP fTH g = 13 ; IP fTT g = 31 ;
and for every set A  , define IP (A) to be the sum of the probabilities of the elements in A. Then
IP ( ) = 1, so IP is a probability measure. Note that the sets fH on first tossg = fHH; HT g and
fH on second tossg = fHH; TH g have probabilities IP fHH; HT g = 13 and IP fHH; TH g =
4                                           4
9 , so the product of the probabilities is 27 . On the other hand, the intersection of fHH; HT g
and fHH; TH g contains the single element fHH g, which has probability 19 . These sets are not
independent.


1.5.3   Independence of random variables

Definition 1.17 We say that two random variables X and Y are independent if the  -algebras they
generate  (X ) and  (Y ) are independent.

In the probability space of three independent coin tosses, the price S2 of the stock at time 2 is
independent of SS32 . This is because S2 depends on only the first two coin tosses, whereas SS32 is
either u or d, depending on whether the third coin toss is H or T .
Definition 1.17 says that for independent random variables X and Y , every set defined in terms of
X is independent of every set defined in terms of Y . In the case of S2 and SS32 just considered, for ex-
                                                         n        o
ample, the sets fS2 = udS0g = fHTH; HTT g and SS32 = u                = fHHH; HTH; THH; TTH g
are indepedent sets.
Suppose X and Y are independent random variables. We defined earlier the measure induced by X
on IR to be
                                  LX (A) = IP fX 2 Ag; A  IR:
Similarly, the measure induced by Y is

                                  LY (B) = IP fY 2 Bg; B  IR:
Now the pair (X; Y ) takes values in the plane IR2 , and we can define the measure induced by the
pair
                              LX;Y (C ) = IP f(X; Y ) 2 C g; C  IR2:
The set C in this last equation is a subset of the plane IR2 . In particular, C could be a “rectangle”,
i.e, a set of the form A  B , where A  IR and B  IR. In this case,
                            f(X; Y ) 2 A  Bg = fX 2 Ag \ fY 2 Bg;
CHAPTER 1. Introduction to Probability Theory                                                          43

and X and Y are independent if and only if
                                                               
                           LX;Y (A  B) = IP fX 2 Ag \ fY 2 Bg
                                        = IP fX 2 AgIP fY 2 B g                                     (5.2)
                                        = LX (A)LY (B ):
In other words, for independent random variables X and Y , the joint distribution represented by the
measure LX;Y factors into the product of the marginal distributions represented by the measures
LX and LY .
A joint density for (X; Y ) is a nonnegative function fX;Y (x; y ) such that
                                                   Z Z
                              LX;Y (A  B) =               fX;Y (x; y ) dx dy:
                                                     A B
Not every pair of random variables (X; Y ) has a joint density, but if a pair does, then the random
variables X and Y have marginal densities defined by
                                Z1                               Z1
                     fX (x) =         fX;Y (x;  ) d; fY (y )          fX;Y (; y ) d:
                                 ,1                                ,1
These have the properties
                                               Z
                                LX (A) =             fX (x) dx; A  IR;
                                               ZA
                                 LY (B) =            fY (y ) dy; B  IR:
                                                 B
Suppose X and Y have a joint density. Then X and Y are independent variables if and only if
the joint density is the product of the marginal densities. This follows from the fact that (5.2) is
equivalent to independence of X and Y . Take A = (,1; x] and B = (,1; y ], write (5.1) in terms
of densities, and differentiate with respect to both x and y .

Theorem 5.7 Suppose X and Y are independent random variables. Let g and h be functions from
IR to IR. Then g(X ) and h(Y ) are also independent random variables.
P ROOF : Let us denote W = g (X ) and Z = h(Y ). We must consider sets in  (W ) and  (Z ). But
a typical set in  (W ) is of the form

                               f!; W (!) 2 Ag = f! : g(X (!)) 2 Ag;
which is defined in terms of the random variable X . Therefore, this set is in  (X ). (In general,
we have that every set in  (W ) is also in  (X ), which means that X contains at least as much
information as W . In fact, X can contain strictly more information than W , which means that  (X )
will contain all the sets in  (W ) and others besides; this is the case, for example, if W = X 2.)
In the same way that we just argued that every set in  (W ) is also in  (X ), we can show that
every set in  (Z ) is also in  (Y ). Since every set in  (X ) is independent of every set in  (Y ), we
conclude that every set in  (W ) is independent of every set in  (Z ).                                 
44

Definition 1.18 Let X1; X2; : : : be a sequence of random variables. We say that these random
variables are independent if for every sequence of sets A1 2  (X1); A2 2  (X2); : : : and for every
positive integer n,
                       IP (A1 \ A2 \    An) = IP (A1 )IP (A2 )    IP (An ):

1.5.4   Correlation and independence

Theorem 5.8 If two random variables X and Y are independent, and if g and h are functions from
IR to IR, then
                                IE [g(X )h(Y )] = IEg (X )  IEh(Y );
provided all the expectations are defined.

P ROOF : Let g (x) = lIA (x) and h(y ) = lIB (y ) be indicator functions. Then the equation we are
trying to prove becomes
                                                 
                      IP fX 2 Ag \ fY 2 Bg = IP fX 2 AgIP fY 2 Bg;
which is true because X and Y are independent. Now use the standard machine to get the result for
general functions g and h.                                                                      
The variance of a random variable X is defined to be
                                              
                                     Var(X ) = IE [X , IEX ]2:

The covariance of two random variables X and Y is defined to be
                                                  h
                                          IE (X , IEX )(Y , IEY )          i
                            Cov(X; Y )   =
                                         = IE [XY ] , IEX  IEY:
According to Theorem 5.8, for independent random variables, the covariance is zero. If X and Y
both have positive variances, we define their correlation coefficient

                                   (X; Y ) = p Cov(X; Y ) :
                                                Var(X )Var(Y )

For independent random variables, the correlation coefficient is zero.
Unfortunately, two random variables can have zero correlation and still not be independent. Con-
sider the following example.

Example 1.16 Let X be a standard normal random variable, let Z be independent of X and have
the distribution IP fZ = 1g = IP fZ = ,1g = 0. Define Y = XZ . We show that Y is also a
standard normal random variable, X and Y are uncorrelated, but X and Y are not independent.
The last claim is easy to see. If X and Y were independent, so would be X 2 and Y 2 , but in fact,
X 2 = Y 2 almost surely.
CHAPTER 1. Introduction to Probability Theory                                                   45

We next check that Y is standard normal. For y 2 IR, we have

             IP fY  yg = IP fY  y and Z = 1g + IP fY  y and Z = ,1g
                        = IP fX  y and Z = 1g + IP f,X  y and Z = ,1g
                        = IP fX  y gIP fZ = 1g + IP f,X  y gIP fZ = ,1g
                        = 12 IP fX  y g + 12 IP f,X  y g:
Since X is standard normal, IP fX  y g = IP fX  ,y g, and we have IP fY  y g = IP fX  y g,
which shows that Y is also standard normal.
Being standard normal, both X and Y have expected value zero. Therefore,

                  Cov(X; Y ) = IE [XY ] = IE [X 2Z ] = IEX 2  IEZ = 1  0 = 0:

Where in IR2 does the measure LX;Y put its mass, i.e., what is the distribution of (X; Y )?

We conclude this section with the observation that for independent random variables, the variance
of their sum is the sum of their variances. Indeed, if X and Y are independent and Z = X + Y ,
then
                            h
                       IE (Z , IEZ )2    i
            Var(Z )   =
                                                  i
                      = IE X + Y , IEX , IEY )2
                          h                                                  i
                      = IE (X , IEX )2 + 2(X , IEX )(Y , IEY ) + (Y , IEY )2
                      = Var(X ) + 2IE [X , IEX ]IE [Y , IEY ] + Var(Y )
                      = Var(X ) + Var(Y ):
This argument extends to any finite number of random variables. If we are given independent
random variables X1; X2; : : :; Xn , then

               Var(X1 + X2 +    + Xn ) = Var(X1) + Var(X2) +    + Var(Xn ):             (5.3)


1.5.5   Independence and conditional expectation.

We now return to property (k) for conditional expectations, presented in the lecture dated October
19, 1995. The property as stated there is taken from Williams’s book, page 88; we shall need only
the second assertion of the property:

(k) If a random variable X is independent of a  -algebra H, then

                                              IE [X jH] = IEX:
The point of this statement is that if X is independent of H, then the best estimate of X based on
the information in H is IEX , the same as the best estimate of X based on no information.
46

To show this equality, we observe first that IEX is H-measurable, since it is not random. We must
also check the partial averaging property
                             Z                      Z
                                    IEX dIP =             X dIP for every A 2 H:
                                A                    A
If X is an indicator of some set B , which by assumption must be independent of H, then the partial
averaging equation we must check is
                                        Z                       Z
                                              IP (B) dIP =              lIB dIP:
                                          A                         A
The left-hand side of this equation is IP (A)IP (B ), and the right hand side is
                            Z                       Z
                                    lIAlIB dIP =          lIA\B dIP = IP (A \ B):
The partial averaging equation holds because A and B are independent. The partial averaging
equation for general X independent of H follows by the standard machine.


1.5.6   Law of Large Numbers

There are two fundamental theorems about sequences of independent random variables. Here is the
first one.

Theorem 5.9 (Law of Large Numbers) Let X1 ; X2; : : : be a sequence of independent, identically
distributed random variables, each with expected value  and variance  2. Define the sequence of
averages
                          Yn = X1 + X2 +n    + Xn ; n = 1; 2; : : ::
Then Yn converges to  almost surely as n ! 1.

We are not going to give the proof of this theorem, but here is an argument which makes it plausible.
We will use this argument later when developing stochastic calculus. The argument proceeds in two
steps. We first check that IEYn =  for every n. We next check that Var(Yn ) ! 0 as n ! 0. In
other words, the random variables Yn are increasingly tightly distributed around  as n ! 1.
For the first step, we simply compute

               IEYn = n1 [IEX1 + IEX2 +    + IEXn] = n1 [| +  +{z   + }] = :
                                                                                   n times
For the second step, we first recall from (5.3) that the variance of the sum of independent random
variables is the sum of their variances. Therefore,
                                              X
                                              n            Xk  X
                                                                 n 2                2
                                                                                     :
                            Var(Yn ) =                              =              =
                                              k=1
                                                    Var
                                                            n            k=1   n 2   n
As n ! 1, we have Var(Yn ) ! 0.
CHAPTER 1. Introduction to Probability Theory                                                     47

1.5.7   Central Limit Theorem

The Law of Large Numbers is a bit boring because the limit is nonrandom. This is because the
denominator in the definition of Yn is so large that the variance of Yn converges to zero. If we want
                                     p
to prevent this, we should divide by n rather than n. In particular, if we again have a sequence of
independent, identically distributed random variables, each with expected value  and variance  2 ,
but now we set
                         Zn = (X1 , ) + (X2 ,pn) +    + (Xn , ) ;
then each Zn has expected value zero and
                                      X
                                      n            Xk ,   X
                                                             n 2
                         Var(Zn ) =         Var      pn = n = 2:
                                      k=1                    k=1
As n ! 1, the distributions of all the random variables Zn have the same degree of tightness, as
measured by their variance, around their expected value 0. The Central Limit Theorem asserts that
as n ! 1, the distribution of Zn approaches that of a normal random variable with mean (expected
value) zero and variance  2. In other words, for every set A  IR,

                              lim IP f Z   2 Ag =  p1 Z e, x dx:    2

                                         n                         2 2
                             n!1                   2 A
48
Chapter 2

Conditional Expectation

Please see Hull’s book (Section 9.6.)


2.1 A Binomial Model for Stock Price Dynamics

Stock prices are assumed to follow this simple binomial model: The initial stock price during the
period under study is denoted S0. At each time step, the stock price either goes up by a factor of u
or down by a factor of d. It will be useful to visualize tossing a coin at each time step, and say that

     the stock price moves up by a factor of u if the coin comes out heads (H ), and
     down by a factor of d if it comes out tails (T ).
Note that we are not specifying the probability of heads here.
Consider a sequence of 3 tosses of the coin (See Fig. 2.1) The collection of all possible outcomes
(i.e. sequences of tosses of length 3) is

                 = fHHH; HHT; HTH; HTT; THH; THH; THT; TTH; TTT g:
A typical sequence of will be denoted ! , and ! k will denote the kth element in the sequence ! .
We write Sk (! ) to denote the stock price at “time” k (i.e. after k tosses) under the outcome !. Note
that Sk (! ) depends only on ! 1 ; !2; : : : ; !k . Thus in the 3-coin-toss example we write for instance,

                                 S1 (!) =4 S1(!1 ; !2; !3) =4 S1(! 1);
                               S2 (!) =4 S2(! 1 ; !2; !3) =4 S2(! 1; !2):
Each Sk is a random variable defined on the set . More precisely, let F = P ( ). Then F is a
 -algebra and ( ; F ) is a measurable space. Each Sk is an F -measurable function !IR, that is,
Sk,1 is a function B!F where B is the Borel -algebra on IR. We will see later that Sk is in fact
                                                   49
50

                                                                                            3
                                                                      ω = Η      S3 (HHH) = u S0
                                                                       3
                                                            2
                                                  S2 (HH) =u S0


                                         ω =Η
                                          2                          ω = Τ        S3 (HHT) = u2 d S0
                                                                      3
                                                                                              2
                          S1 (H) = uS0                                            S3 (HTH) = u d S0
                                                                                              2
                                                                                  S3 (THH) = u d S0
                                         ω =Τ
                                          2
                            ω1= Η                                       ω = Η
                                                                         3
                                                   S2 (HT) = ud S0
                   S0
                                                   S2 (TH) = ud S        ω = Τ
                                                                0
                           ω =Τ                                           3
                            1                                                                2
                                         ω2 = Η                                  S3 (HTT) = d u S0
                                                                                              2
                        S1 (T) = dS0                                             S3 (THT) = d u S0
                                                                                              2
                                                                                 S3 (TTH) = d u S0
                                         ω2 = Τ                      ω = Η
                                                                      3

                                                  S2 (TT) = d 2S0
                                                                     ω3 = Τ      S3 (TTT) = d 3 S0


                              Figure 2.1: A three coin period binomial model.

measurable under a sub--algebra of F . Recall that the Borel -algebra B is the -algebra generated
                                                                                I that belong to B.
by the open intervals of IR. In this course we will always deal with subsets of R
For any random variable X defined on a sample space                    and any y 2 IR, we will use the notation:

                               fX  yg =4 f! 2 ; X (!)  yg:
The sets fX < y g; fX  y g; fX = y g; etc, are defined similarly. Similarly for any subset B of IR,
we define
                                       fX 2 Bg =4 f! 2 ; X (!) 2 Bg:
Assumption 2.1 u > d > 0.


2.2 Information

Definition 2.1 (Sets determined by the first k tosses.) We say that a set A  is determined by
the first k coin tosses if, knowing only the outcome of the first k tosses, we can decide whether the
outcome of all tosses is in A. In general we denote the collection of sets determined by the first k
tosses by F k . It is easy to check that F k is a  -algebra.

Note that the random variable Sk is F k -measurable, for each k = 1; 2; : : : ; n.

Example 2.1 In the 3 coin-toss example, the collection F 1 of sets determined by the first toss consists of:
CHAPTER 2. Conditional Expectation                                                                   51

         4
   1. AH = fHHH; HHT; HTH; HT T g,
         4
   2. AT = fTHH; THT; TTH; TTT g,
   3. ,
   4. .

The collection F 2 of sets determined by the first two tosses consists of:
           4
   1. AHH = fHHH; HHT g,
           4
   2. AHT = fHTH; HTT g,
           4
   3. AT H = fTHH; THT g,
           4
   4. A = fTTH; TTT g,
         TT
   5. The complements of the above sets,
   6. Any union of the above sets (including the complements),
   7.  and .




Definition 2.2 (Information carried by a random variable.) Let X be a random variable !IR.
We say that a set A  is determined by the random variable X if, knowing only the value X (!)
of the random variable, we can decide whether or not ! 2 A. Another way of saying this is that for
every y 2 IR, either X ,1(y )  A or X ,1 (y ) \ A = . The collection of susbets of determined
by X is a -algebra, which we call the -algebra generated by X , and denote by (X ).

If the random variable X takes finitely many different values, then (X ) is generated by the collec-
tion of sets
                                           fX ,1(X (!))j! 2 g;
these sets are called the atoms of the  -algebra  (X ).
In general, if X is a random variable     !IR, then (X ) is given by
                                       (X ) = fX ,1(B); B 2 Bg:
Example 2.2 (Sets determined by S2 ) The -algebra generated by S2 consists of the following sets:

   1. AHH = fHHH; HHT g = f! 2 ; S2 (!) = u2S0 g,
   2. AT T = fTTH; TTT g = fS2 = d2S0 g;
   3. AHT [ AT H = fS2 = udS0g;
   4. Complements of the above sets,
   5. Any union of the above sets,
   6.  = fS2 (!) 2 g,
   7.   = fS2 (!) 2 IRg.
52

2.3 Conditional Expectation

In order to talk about conditional expectation, we need to introduce a probability measure on our
coin-toss sample space . Let us define

       p 2 (0; 1) is the probability of H ,
       q =4 (1 , p) is the probability of T ,
       the coin tosses are independent, so that, e.g., IP (HHT ) = p2q; etc.
       IP (A) =4 P!2A IP (!), 8A  .
Definition 2.3 (Expectation.)
                                                    X
                                       IEX =4           X (!)IP (! ):
                                                 !2
If A       then                                    (
                                       IA (!) = 4       1 if ! 2 A
                                                        0 if ! 62 A
and                                         Z                X
                             IE (IA X ) =        XdIP =            X (!)IP (! ):
                                             A               !2A
We can think of IE (IA X ) as a partial average of X over the set A.


2.3.1     An example

Let us estimate S1, given S2. Denote the estimate by IE (S1jS2). From elementary probability,
IE (S1jS2) is a random variable Y whose value at ! is defined by
                                     Y (!) = IE (S1jS2 = y );
where y = S2 (!). Properties of IE (S1jS2):

       IE (S1jS2) should depend on !, i.e., it is a random variable.
       If the value of S2 is known, then the value of IE (S1jS2) should also be known. In particular,
           – If ! = HHH or ! = HHT , then S2 (! ) = u2 S0. If we know that S2(! ) = u2 S0 , then
             even without knowing ! , we know that S1 (! ) = uS0. We define

                              IE (S1jS2)(HHH ) = IE (S1jS2)(HHT ) = uS0:
           – If ! = TTT or ! = TTH , then S2(! ) = d2S0 . If we know that S2(! ) = d2S0 , then
             even without knowing ! , we know that S1 (! ) = dS0. We define

                               IE (S1jS2)(TTT ) = IE (S1jS2 )(TTH ) = dS0:
CHAPTER 2. Conditional Expectation                                                                  53

         – If ! 2 A = fHTH; HTT; THH; THT g, then S2 (! ) = udS0 . If we know S2 (! ) =
           udS0, then we do not know whether S1 = uS0 or S1 = dS0. We then take a weighted
           average:
                                      IP (A) = p2 q + pq2 + p2 q + pq 2 = 2pq:
            Furthermore,
                              Z
                                   S1 dIP = p2 quS0 + pq2uS0 + p2qdS0 + pq 2dS0
                               A
                                          = pq (u + d)S0
            For ! 2 A we define
                                                         R S dIP
                                     IE (S1jS2)(!) = AIP (1A) = 12 (u + d)S0:
            Then                             Z                      Z
                                                  IE (S1jS2)dIP =           S1dIP:
                                              A                         A

In conclusion, we can write
                                       IE (S1jS2)(!) = g (S2(! ));
where                                8
                                     >
                                     < uS0                  if x = u2 S0
                              g(x) = > 21 (u + d)S0         if x = udS0
                                     : dS0                  if x = d2 S0
In other words, IE (S1jS2) is random only through dependence on S2 . We also write

                                        IE (S1jS2 = x) = g (x);
where g is the function defined above.
The random variable IE (S1jS2) has two fundamental properties:

    IE (S1jS2) is (S2)-measurable.
    For every set A 2 (S2), Z                                Z
                                             IE (S1jS2)dIP =        S1dIP:
                                         A                      A

2.3.2   Definition of Conditional Expectation

Please see Williams, p.83.
Let ( ; F ; IP ) be a probability space, and let G be a sub--algebra of F . Let X be a random variable
on ( ; F ; IP ). Then IE (X jG) is defined to be any random variable Y that satisfies:

(a) Y is G -measurable,
54

(b) For every set A 2 G , we have the “partial averaging property”
                                             Z              Z
                                                  Y dIP =           XdIP:
                                              A                 A

Existence. There is always a random variable Y satisfying the above properties (provided that
IE jX j < 1), i.e., conditional expectations always exist.
Uniqueness. There can be more than one random variable Y satisfying the above properties, but if
Y 0 is another one, then Y = Y 0 almost surely, i.e., IP f! 2 ; Y (!) = Y 0 (!)g = 1:
Notation 2.1 For random variables X; Y , it is standard notation to write

                                        IE (X jY ) =4 IE (X j(Y )):
Here are some useful ways to think about IE (X jG):

      A random experiment is performed, i.e., an element ! of        is selected. The value of ! is
        partially but not fully revealed to us, and thus we cannot compute the exact value of X (!).
        Based on what we know about ! , we compute an estimate of X (!). Because this estimate
        depends on the partial information we have about ! , it depends on !, i.e., IE [X jY ](!) is a
        function of ! , although the dependence on ! is often not shown explicitly.
      If the -algebra G contains finitely many sets, there will be a “smallest” set A in G containing
       ! , which is the intersection of all sets in G containing !. The way ! is partially revealed to us
       is that we are told it is in A, but not told which element of A it is. We then define IE [X jY ](!)
        to be the average (with respect to IP ) value of X over this set A. Thus, for all ! in this set A,
        IE [X jY ](!) will be the same.

2.3.3     Further discussion of Partial Averaging

The partial averaging property is
                                 Z                     Z
                                      IE (X jG)dIP =        XdIP; 8A 2 G :                          (3.1)
                                  A                     A
We can rewrite this as

                                      IE [IA:IE (X jG)] = IE [IA :X ]:                              (3.2)

Note that IA is a G -measurable random variable. In fact the following holds:

Lemma 3.10 If V is any G -measurable random variable, then provided IE jV:IE (X jG)j < 1,

                                       IE [V:IE (X jG)] = IE [V:X ]:                                (3.3)
CHAPTER 2. Conditional Expectation                                                                   55

Proof: To see this, first use (3.2) and linearity of expectations to prove (3.3) when V is a simple
G -measurable random variable, i.e., V is of the form V = Pnk=1 ck IAK , where each Ak is in G and
each ck is constant. Next consider the case that V is a nonnegative G -measurable random variable,
but is not necessarily simple. Such a V can be written as the limit of an increasing sequence
of simple random variables Vn ; we write (3.3) for each Vn and then pass to the limit, using the
Monotone Convergence Theorem (See Williams), to obtain (3.3) for V . Finally, the general G -
measurable random variable V can be written as the difference of two nonnegative random-variables
V = V + , V , , and since (3.3) holds for V + and V , it must hold for V as well. Williams calls
this argument the “standard machine” (p. 56).

Based on this lemma, we can replace the second condition in the definition of a conditional expec-
tation (Section 2.3.2) by:

(b’) For every G -measurable random-variable V , we have

                                         IE [V:IE (X jG)] = IE [V:X ]:                             (3.4)


2.3.4    Properties of Conditional Expectation

Please see Willams p. 88. Proof sketches of some of the properties are provided below.

(a) IE (IE (X jG)) = IE (X ):
      Proof: Just take A in the partial averaging property to be .
        The conditional expectation of X is thus an unbiased estimator of the random variable X .

(b) If X is G -measurable, then
                                                IE (X jG) = X:
        Proof: The partial averaging property holds trivially when Y is replaced by X . And since X
        is G -measurable, X satisfies the requirement (a) of a conditional expectation as well.
        If the information content of G is sufficient to determine X , then the best estimate of X based
        on G is X itself.

(c) (Linearity)
                            IE (a1X1 + a2 X2jG ) = a1IE (X1jG) + a2IE (X2jG ):
(d) (Positivity) If X  0 almost surely, then

                                                IE (X jG)  0:
        Proof: Take A = f! 2 ; RIE (X jG)(! ) < 0g. This
                                                       R set is in G since IE (X jG) is G -measurable.
        Partial averaging implies A IE (X jG)dIP = A XdIP . The right-hand side is greater than
        or equal to zero, and the left-hand side is strictly negative, unless IP (A) = 0. Therefore,
        IP (A) = 0.
56

(h) (Jensen’s Inequality) If  : R!R is convex and IE j(X )j < 1, then

                                       IE ((X )jG)  (IE (X jG)):
      Recall the usual Jensen’s Inequality: IE(X )  (IE (X )):

(i) (Tower Property) If H is a sub--algebra of G , then

                                       IE (IE (X jG)jH) = IE (X jH):
      H is a sub--algebra of G means that G contains more information than H. If we estimate X
      based on the information in G , and then estimate the estimator based on the smaller amount
      of information in H, then we get the same result as if we had estimated X directly based on
      the information in H.

(j) (Taking out what is known) If Z is G -measurable, then

                                       IE (ZX jG) = Z:IE (X jG):
      When conditioning on G , the G -measurable random variable Z acts like a constant.
      Proof: Let Z be a G -measurable random variable. A random variable Y is IE (ZX jG) if and
      only if

       (a) Y is G -measurable;
           R           R
       (b) A Y dIP = A ZXdIP; 8A 2 G .

      Take Y = Z:IE (X jG). Then Y satisfies (a) (a product of G -measurable random variables is
      G-measurable). Y also satisfies property (b), as we can check below:
                            Z
                                 Y dIP = IE (IA:Y )
                             A
                                       = IE [IAZIE (X jG)]
                                       = ZIE [IAZ:X ] ((b’) with V = IA Z
                                       =      ZXdIP:
                                             A

(k) (Role of Independence) If H is independent of  ((X ); G), then

                                       IE (X j(G ; H)) = IE (X jG):
      In particular, if X is independent of H, then

                                           IE (X jH) = IE (X ):
      If H is independent of X and G , then nothing is gained by including the information content
      of H in the estimation of X .
CHAPTER 2. Conditional Expectation                                                             57

2.3.5   Examples from the Binomial Model

Recall that F 1 = f; AH ; AT ;   g. Notice that IE (S2jF 1) must be constant on AH and AT .
Now since IE (S2jF 1 ) must satisfy the partial averaging property,
                                  Z                           Z
                                           IE (S2jF 1)dIP =         S2dIP;
                                   AH                          AH
                                  Z                           Z
                                           IE (S2jF 1)dIP =         S2dIP:
                                      AT                       AT
We compute
                       Z
                             IE (S2jF 1 )dIP = IP (AH ):IE (S2jF 1)(!)
                        AH
                                             = pIE (S2jF 1)(! ); 8! 2 AH :
On the other hand,                Z
                                           S2 dIP = p2u2 S0 + pqudS0:
                                      AH
Therefore,
                            IE (S2jF 1 )(!) = pu2 S0 + qudS0; 8! 2 AH :
We can also write

                           IE (S2jF 1)(! ) = pu2 S0 + qudS0
                                           = (pu + qd)uS0
                                           = (pu + qd)S1(!); 8! 2 AH
Similarly,
                            IE (S2jF 1 )(!) = (pu + qd)S1(!); 8! 2 AT :
Thus in both cases we have

                             IE (S2jF 1 )(!) = (pu + qd)S1(!); 8! 2 :
A similar argument one time step later shows that

                                  IE (S3jF 2)(!) = (pu + qd)S2(!):
We leave the verification of this equality as an exercise. We can verify the Tower Property, for
instance, from the previous equations we have

                    IE [IE (S3jF 2)jF 1] = IE [(pu + qd)S2jF 2]
                                         = (pu + qd)IE (S2jF 1) (linearity)
                                         = (pu + qd)2S1:
This final expression is IE (S3jF 1).
58

2.4 Martingales

The ingredients are:

      A probability space ( ; F ; IP ).
      A sequence of -algebras F 0; F 1; : : : ; F n , with the property that F 0  F 1  : : :  F n 
       F . Such a sequence of -algebras is called a filtration.
      A sequence of random variables M0; M1; : : : ; Mn. This is called a stochastic process.
Conditions for a martingale:

     1. Each Mk is F k -measurable. If you know the information in F k , then you know the value of
        Mk . We say that the process fMk g is adapted to the filtration fF k g.
     2. For each k, IE (Mk+1 jF k ) = Mk . Martingales tend to go neither up nor down.

A supermartingale tends to go down, i.e. the second condition above is replaced by IE (Mk+1 jF k ) 
Mk ; a submartingale tends to go up, i.e. IE (Mk+1jF k )  Mk .
Example 2.3 (Example from the binomial model.) For k = 1; 2 we already showed that

                                        IE(Sk+1 jF k ) = (pu + qd)Sk :
For k = 0, we set F 0 = f; g, the “trivial -algebra”. This -algebra contains no information, and any
F 0 -measurable random variable must be constant (nonrandom). Therefore, by definition, IE(S1 jF 0 ) is that
constant which satisfies the averaging property
                                        Z                        Z
                                             IE(S1 jF 0 )dIP =       S1 dIP:
The right hand side is IES1 = (pu + qd)S0 , and so we have

                                            IE(S1 jF 0) = (pu + qd)S0 :
In conclusion,

      If (pu + qd) = 1 then fSk ; F k ; k = 0; 1; 2; 3g is a martingale.
      If (pu + qd)  1 then fSk ; F k ; k = 0; 1; 2; 3g is a submartingale.
      If (pu + qd)  1 then fSk ; F k ; k = 0; 1; 2; 3g is a supermartingale.
Chapter 3

Arbitrage Pricing

3.1 Binomial Pricing

Return to the binomial pricing model
Please see:


     Cox, Ross and Rubinstein, J. Financial Economics, 7(1979), 229–263, and
     Cox and Rubinstein (1985), Options Markets, Prentice-Hall.

Example 3.1 (Pricing a Call Option) Suppose u = 2; d = 0:5; r = 25%(interest rate), S0 = 50. (In this
and all examples, the interest rate quoted is per unit time, and the stock prices S0 ; S1; : : : are indexed by the
same time periods). We know that
                                                   100       if !1 = H
                                       S1 (!) =     25        if !1 = T

Find the value at time zero of a call option to buy one share of stock at time 1 for $50 (i.e. the strike price is
$50).
The value of the call at time 1 is
                                                               50   if !1 = H
                              V1(!) = (S1 (!) , 50)+ =          0    if !1 = T

Suppose the option sells for $20 at time 0. Let us construct a portfolio:

   1. Sell 3 options for $20 each. Cash outlay is ,$60:
   2. Buy 2 shares of stock for $50 each. Cash outlay is $100.
   3. Borrow $40. Cash outlay is ,$40:

                                                         59
60

This portfolio thus requires no initial investment. For this portfolio, the cash outlay at time 1 is:

                                                         !1 = H          !1 = T
                                  Pay off option            $150             $0
                                  Sell stock              ,$200            ,$50
                                  Pay off debt               $50            $50
                                                     ,,,,, ,,,,,
                                                               $0         $0
The arbitrage pricing theory (APT) value of the option at time 0 is V0 = 20.


Assumptions underlying APT:

      Unlimited short selling of stock.
      Unlimited borrowing.
      No transaction costs.
      Agent is a “small investor”, i.e., his/her trading does not move the market.
Important Observation: The APT value of the option does not depend on the probabilities of H
and T .


3.2 General one-step APT

Suppose a derivative security pays off the amount V1 at time 1, where V1 is an F 1 -measurable
random variable. (This measurability condition is important; this is why it does not make sense
to use some stock unrelated to the derivative security in valuing it, at least in the straightforward
method described below).

      Sell the security for V0 at time 0. (V0 is to be determined later).
      Buy 0 shares of stock at time 0. (0 is also to be determined later)
      Invest V0 , 0S0 in the money market, at risk-free interest rate r. (V0 , 0S0 might be
       negative).
      Then wealth at time 1 is
                                   X1 =4 0 S1 + (1 + r)(V0 , 0S0)
                                      = (1 + r)V0 + 0 (S1 , (1 + r)S0):

      We want to choose V0 and 0 so that
                                                       X1 = V1
       regardless of whether the stock goes up or down.
CHAPTER 3. Arbitrage Pricing                                                                     61

The last condition above can be expressed by two equations (which is fortunate since there are two
unknowns):

                          (1 + r)V0 + 0(S1 (H ) , (1 + r)S0) = V1 (H )                        (2.1)

                           (1 + r)V0 + 0 (S1(T ) , (1 + r)S0) = V1 (T )                       (2.2)

Note that this is where we use the fact that the derivative security value Vk is a function of Sk ,
i.e., when Sk is known for a given ! , Vk is known (and therefore non-random) at that ! as well.
Subtracting the second equation above from the first gives

                                       0 = SV1((H ) , V1(T ) :
                                                 H ) , S (T )
                                                 1          1
                                                                                               (2.3)

Plug the formula (2.3) for 0 into (2.1):

                (1 + r)V0 = V1 (H ) , 0 (S1(H ) , (1 + r)S0)
                          = V1 (H ) , V1((Hu ),,d)VS1(T ) (u , 1 , r)S0
                                                     0
                          =    1   [(u , d)V (H ) , (V (H ) , V (T ))(u , 1 , r)]
                             u,d               1         1       1

                           = 1 +u ,r ,d d V1(H ) + u , 1,r
                                                     u , d V1(T ):

We have already assumed u > d > 0. We now also assume d  1 + r  u (otherwise there would
be an arbitrage opportunity). Define

                                 p~ =4 1 +u ,r ,d d ; q~ =4 u ,u ,1 ,d r :
Then p~ > 0 and q~ > 0. Since p~ + q~ = 1, we have 0 < p~ < 1 and q~ = 1 , p~. Thus, p~; q~ are like
probabilities. We will return to this later. Thus the price of the call at time 0 is given by

                                  V0 = 1 +1 r [~pV1(H ) + q~V1(T )]:                           (2.4)


3.3 Risk-Neutral Probability Measure

Let be the set of possible outcomes from n coin tosses. Construct a probability measure If
                                                                                         P on
by the formula
                         P (!1; !2 ; : : : ; !n) =4 p~#fj ;! j =H gq~#fj;!j =T g
                        If
 P is called the risk-neutral probability measure. We denote by If
If                                                               E the expectation under If
                                                                                          P . Equa-
tion 2.4 says                                         1        
                                        V0 = If
                                              E       1 + r V1 :
62

Theorem 3.11 Under If
                    P , the discounted stock price process f(1+ r),k Sk ; F k gnk=0 is a martingale.
Proof:

                     If
                      E [(1 + r),(k+1) Sk+1 jF k ]
                       = (1 + r),(k+1)(~pu + q~d)Sk
                                                                     
                       = (1 + r),(k+1) u(1u+,r d, d) + d(uu,,1 d, r) Sk
                       = (1 + r),(k+1) u + ur , udu ,
                                                    + du , d , dr S
                                                      d             k

                       = (1 + r),(k+1) (u , d)(1 + r) Sk
                                               u,d
                                   ,
                       = (1 + r) Sk :k



3.3.1    Portfolio Process

The portfolio process is  = (0 ; 1; : : : ; n,1), where

      k is the number of shares of stock held between times k and k + 1.
      Each k is F k -measurable. (No insider trading).

3.3.2    Self-financing Value of a Portfolio Process      
      Start with nonrandom initial wealth X0, which need not be 0.
      Define recursively
                            Xk+1 = k Sk+1 + (1 + r)(Xk , k Sk )                              (3.1)
                                 = (1 + r)Xk + k (Sk+1 , (1 + r)Sk ):                         (3.2)


      Then each Xk is F k -measurable.
Theorem 3.12 Under If
                    P , the discounted self-financing portfolio process value f(1 + r),k Xk ; F k gnk=0
is a martingale.

Proof: We have
                                                                                       
         (1 + r),(k+1)Xk+1 = (1 + r),k Xk + k (1 + r),(k+1) Sk+1 , (1 + r),k Sk :
CHAPTER 3. Arbitrage Pricing                                                                            63

Therefore,
              If
               E [(1 + r),(k+1) Xk+1 jF k ]
                = If  E [(1 + r),k Xk jF k ]
                       +IfE [(1 + r),(k+1)k Sk+1jF k ]
                       ,IfE [(1 + r),k k Sk jF k ]
                = (1 + r),k Xk (requirement (b) of conditional exp.)
                       +k If E[(1 + r),(k+1)Sk+1jF k ] (taking out what is known)
                       ,(1 + r),k k Sk (property (b))
                = (1 + r),k Xk (Theorem 3.11)



3.4 Simple European Derivative Securities

Definition 3.1 () A simple European derivative security with expiration time m is an F m -measurable
random variable Vm . (Here, m is less than or equal to n, the number of periods/coin-tosses in the
model).

Definition 3.2 () A simple European derivative security Vm is said to be hedgeable if there exists
a constant X0 and a portfolio process  = (0; : : : ; m,1 ) such that the self-financing value
process X0; X1; : : : ; Xm given by (3.2) satisfies
                                       Xm(!) = Vm(!); 8! 2 :
In this case, for k = 0; 1; : : : ; m, we call Xk the APT value at time k of Vm .

Theorem 4.13 (Corollary to Theorem 3.12) If a simple European security Vm is hedgeable, then
for each k = 0; 1; : : : ; m, the APT value at time k of Vm is

                                Vk =4 (1 + r)k If
                                                E [(1 + r),m Vm jF k ]:                              (4.1)

Proof: We first observe that if fMk ;       F k ; k = 0; 1; : : : ; mg is a martingale, i.e., satisfies the
martingale property
                                         If
                                          E [Mk+1 jF k ] = Mk
for each k = 0; 1; : : : ; m , 1, then we also have
                              If
                               E [Mm jF k ] = Mk ; k = 0; 1; : : : ; m , 1:                          (4.2)
When k = m , 1, the equation (4.2) follows directly from the martingale property. For k = m , 2,
we use the tower property to write
                           If
                            E [MmjF m,2 ] = If
                                             E [If
                                                 E[MmjF m,1 ]jF m,2 ]
                                             f
                                          = IE [Mm,1 jF m,2 ]
                                          = Mm,2 :
64

We can continue by induction to obtain (4.2).
If the simple European security Vm is hedgeable, then there is a portfolio process whose self-
financing value process X0; X1; : : : ; Xm satisfies Xm = Vm . By definition, Xk is the APT value
at time k of Vm . Theorem 3.12 says that

                               X0; (1 + r),1 X1; : : : ; (1 + r),m Xm
is a martingale, and so for each k,

                  (1 + r),k Xk = If E[(1 + r),m XmjF k ] = If  E [(1 + r),mVm jF k ]:
Therefore,
                                    Xk = (1 + r)k If
                                                   E [(1 + r),mVm jF k ]:



3.5 The Binomial Model is Complete

Can a simple European derivative security always be hedged? It depends on the model. If the answer
is “yes”, the model is said to be complete. If the answer is “no”, the model is called incomplete.

Theorem 5.14 The binomial model is complete. In particular, let Vm be a simple European deriva-
tive security, and set

                  Vk (!1 ; : : : ; !k ) = (1 + r)k If
                                                    E [(1 + r),mVmjF k ](!1; : : : ; !k );                    (5.1)


                                                                         H ) , Vk+1 (!1; : : : ; !k ; T ) :
                k (!1 ; : : : ; !k ) = SVk+1 ((!!1;; :: :: :: ;; !!k ;; H
                                             k+1 1               k         ) , S (! ; : : : ; ! ; T )
                                                                              k+1 1               k
                                                                                                              (5.2)

Starting with initial wealth V0 = IfE[(1 + r),m Vm], the self-financing value of the portfolio process
0 ; 1; : : : ; m,1 is the process V0 ; V1; : : : ; Vm.
Proof: Let V0 ; : : : ; Vm,1 and 0 ; : : : ; m,1 be defined by (5.1) and (5.2). Set X0 = V0 and
define the self-financing value of the portfolio process 0 ; : : : ; m,1 by the recursive formula 3.2:

                                Xk+1 = k Sk+1 + (1 + r)(Xk , k Sk ):
We need to show that

                                      Xk = Vk ; 8k 2 f0; 1; : : : ; mg:                                       (5.3)

We proceed by induction. For k = 0, (5.3) holds by definition of X0. Assume that (5.3) holds for
some value of k, i.e., for each fixed (!1 ; : : : ; !k ), we have

                                    Xk (!1 ; : : : ; !k ) = Vk(!1 ; : : : ; !k ):
CHAPTER 3. Arbitrage Pricing                                                                                65

We need to show that

                            Xk+1 (!1; : : : ; !k ; H ) = Vk+1(!1; : : : ; !k ; H );
                            Xk+1 (!1 ; : : : ; !k ; T ) = Vk+1(!1; : : : ; !k ; T ):
We prove the first equality; the second can be shown similarly. Note first that

                 If
                  E [(1 + r),(k+1)Vk+1jF k ] = If
                                                E [If
                                                    E[(1 + r),m VmjF k+1 ]jF k ]
                                             = If
                                                E [(1 + r),m VmjF k ]
                                             = (1 + r),k Vk
In other words, f(1 + r),k Vk gnk=0 is a martingale under If
                                                           P . In particular,
         Vk (!1 ; : : : ; !k ) = If
                                  E [(1 + r),1 Vk+1 jF k ](!1; : : : ; !k )
                               = 1 +1 r (~pVk+1 (!1 ; : : : ; !k ; H ) + q~Vk+1 (!1 ; : : : ; !k ; T )) :
Since (!1; : : : ; !k ) will be fixed for the rest of the proof, we simplify notation by suppressing these
symbols. For example, we write the last equation as

                                 Vk = 1 +1 r (~pVk+1 (H ) + q~Vk+1(T )) :
We compute

               Xk+1 (H )
                = k Sk+1 (H ) + (1 + r)(Xk , k Sk )
                = k (Sk+1 (H ) , (1 + r)Sk ) + (1 + r)Vk
                          H ) , Vk+1(T ) (S (H ) , (1 + r)S )
                = SVk+1 ((H                  k+1                 k
                      k+1 ) , Sk+1 (T )
                      +~pVk+1 (H ) + q~Vk+1 (T )
                = Vk+1uS (H ) , Vk+1 (T ) (uS , (1 + r)S )
                                              k            k
                           k , dSk
                      +~pVk+1 (H ) + q~Vk+1(T )       
                = (Vk+1 (H ) , Vk+1 (T )) u , 1 , r + p~Vk+1 (H ) + q~Vk+1 (T )
                                                u,d
                = (Vk+1 (H ) , Vk+1 (T )) q~ + p~Vk+1 (H ) + q~Vk+1 (T )
                = Vk+1 (H ):
66
Chapter 4

The Markov Property

4.1 Binomial Model Pricing and Hedging

Recall that Vm is the given simple European derivative security, and the value and portfolio pro-
cesses are given by:

                      Vk = (1 + r)k If    E [(1 + r),m Vm jF k ]; k = 0; 1; : : : ; m , 1:
   k (!1 ; : : : ; !k ) = SVk+1 ((!!1;; :: :: :: ;; !!k ;; H ) , Vk+1(!1 ; : : : ; !k ; T ) ; k = 0; 1; : : : ; m , 1:
                             k+1 1                     k ) , Sk+1 (!1 ; : : : ; !k ; T )
                                                            H
                                                                              r,d
Example 4.1 (Lookback Option) u = 2; d = 0:5; r = 0:25; S0 = 4; p~ = 1+      u,d = 0:5; q~ = 1 , p~ = 0:5:
Consider a simple European derivative security with expiration 2, with payoff given by (See Fig. 4.1):

                                               V2 = 0max (S , 5)+ :
                                                     k2 k
Notice that
                        V2 (HH) = 11; V2 (HT) = 3 6= V2 (TH) = 0; V2 (TT ) = 0:
The payoff is thus “path dependent”. Working backward in time, we have:

                 V1 (H) = 1 +1 r [~pV2 (HH) + q~V2 (HT)] = 45 [0:5  11 + 0:5  3] = 5:60;

                                       V1 (T) = 45 [0:5  0 + 0:5  0] = 0;
                                      V0 = 54 [0:5  5:60 + 0:5  0] = 2:24:
Using these values, we can now compute:

                                          0 = SV1(H) , V1 (T) = 0:93;
                                                  (H) , S (T)
                                                    1           1



                                     1(H) = SV2 (HH) , V2 (HT)
                                                 (HH) , S (HT) = 0:67;
                                                   2                2


                                                           67
68

                                                                   S2 (HH) = 16



                                              S (H) = 8
                                               1

                                                                   S2 (HT) = 4

                               S =4
                                0                                  S2 (TH) = 4

                                              S1 (T) = 2




                                                                   S2 (TT) = 1


                       Figure 4.1: Stock price underlying the lookback option.


                                      1(T) = SV2 (TH) , V2 (TT ) = 0:
                                                 2(TH) , S (TT )
                                                           2

Working forward in time, we can check that

                X1 (H) = 0S1 (H) + (1 + r)(X0 , 0S0 ) = 5:59; V1 (H) = 5:60;
                 X1 (T) = 0S1 (T ) + (1 + r)(X0 , 0S0 ) = 0:01; V1 (T) = 0;
       X1 (HH) = 1(H)S1 (HH) + (1 + r)(X1 (H) , 1(H)S1 (H)) = 11:01; V1 (HH) = 11;
etc.



Example 4.2 (European Call) Let u = 2; d = 12 ; r = 14 ; S0 = 4; p~ = q~ = 12 , and consider a European call
with expiration time 2 and payoff function

                                              V2 = (S2 , 5)+ :
Note that
                           V2 (HH) = 11; V2 (HT) = V2 (TH) = 0; V2 (TT) = 0;
                                        V1 (H) = 45 [ 21 :11 + 12 :0] = 4:40
                                           V1(T) = 45 [ 21 :0 + 12 :0] = 0
                                      V0 = 45 [ 21  4:40 + 12  0] = 1:76:
Define vk (x) to be the value of the call at time k when Sk = x. Then

                                                v2 (x) = (x , 5)+
                                       v1(x) = 45 [ 12 v2 (2x) + 12 v2 (x=2)];
                                       v0(x) = 45 [ 12 v1 (2x) + 12 v1 (x=2)]:
CHAPTER 4. The Markov Property                                                                              69

In particular,
                                    v2(16) = 11; v2 (4) = 0; v2 (1) = 0;
                                       v1(8) = 45 [ 21 :11 + 12 :0] = 4:40;

                                         v1(2) = 45 [ 12 :0 + 21 :0] = 0;

                                     v0 = 45 [ 21  4:40 + 12  0] = 1:76:
Let k (x) be the number of shares in the hedging portfolio at time k when Sk = x. Then

                                k (x) = vk+1 (2x)     , vk+1 (x=2) ; k = 0; 1:
                                                   2x , x=2



4.2 Computational Issues

For a model with n periods (coin tosses),              has 2n elements. For period k, we must solve 2k
equations of the form

             Vk (!1 ; : : : ; !k ) = 1 +1 r [~pVk+1(!1; : : : ; !k ; H ) + q~Vk+1 (!1; : : : ; !k ; T )]:
For example, a three-month option has 66 trading days. If each day is taken to be one period, then
n = 66 and 266  7  1019.
There are three possible ways to deal with this problem:

   1. Simulation. We have, for example, that

                                                 V0 = (1 + r),n If
                                                                 EVn;
       and so we could compute V0 by simulation. More specifically, we could simulate n coin
       tosses ! = (!1; : : : ; !n ) under the risk-neutral probability measure. We could store the
       value of Vn (! ). We could repeat this several times and take the average value of Vn as an
       approximation to If
                         EVn.
   2. Approximate a many-period model by a continuous-time model. Then we can use calculus
      and partial differential equations. We’ll get to that.
   3. Look for Markov structure. Example 4.2 has this. In period 2, the option in Example 4.2 has
      three possible values v2 (16); v2(4); v2(1), rather than four possible values V2(HH ); V2(HT ); V2(TH ); V2(TT ).
      If there were 66 periods, then in period 66 there would be 67 possible stock price values (since
      the final price depends only on the number of up-ticks of the stock price – i.e., heads – so far)
      and hence only 67 possible option values, rather than 266  7  1019.
70

4.3 Markov Processes

Technical condition always present: We consider only functions on IR and subsets of IR which are
                                                      I that are in B and functions g : IR!IR such
Borel-measurable, i.e., we only consider subsets A of R
that g ,1 is a function B!B.

Definition 4.1 () Let ( ; F ; P) be a probability space. Let fF k gnk=0 be a filtration under F . Let
fXk gnk=0 be a stochastic process on ( ; F ; P). This process is said to be Markov if:
      The stochastic process fXk g is adapted to the filtration fF k g, and
      (The Markov Property). For each k = 0; 1; : : : ; n , 1, the distribution of Xk+1 conditioned
       on F k is the same as the distribution of Xk+1 conditioned on Xk .


4.3.1     Different ways to write the Markov property
                                                          4
(a) (Agreement of distributions). For every A 2 B = B(IR), we have

                                 IP (Xk+1 2 AjF k ) = IE [IA(Xk+1)jF k ]
                                                    = IE [IA(Xk+1 )jXk ]
                                                    = IP [Xk+1 2 AjXk ]:
(b) (Agreement of expectations of all functions). For every (Borel-measurable) function h : IR!IR
      for which IE jh(Xk+1 )j < 1, we have

                                     IE [h(Xk+1)jF k ] = IE [h(Xk+1)jXk]:
(c) (Agreement of Laplace transforms.) For every u 2 IR for which IEeuXk+1 < 1, we have
                                                                         
                                    IE euXk+1 F k = IE euXk+1 Xk :
        (If we fix u and define h(x) = eux , then the equations in (b) and (c) are the same. However in
        (b) we have a condition which holds for every function h, and in (c) we assume this condition
        only for functions h of the form h(x) = eux . A main result in the theory of Laplace transforms
        is that if the equation holds for every h of this special form, then it holds for every h, i.e., (c)
        implies (b).)

(d) (Agreement of characteristic functions) For every u 2 IR, we have
                                       h              i       h              i
                                    IE eiuXk+1 jF k = IE eiuXk+1 jXk ;
        where i =
                    p,1. (Since jeiuxj = j cos x +sin xj  1 we don’t need to assume that IE jeiuxj <
        1.)
CHAPTER 4. The Markov Property                                                                     71

Remark 4.1 In every case of the Markov properties where IE [: : : jXk ] appears, we could just as
well write g (Xk ) for some function g . For example, form (a) of the Markov property can be restated
as:

      For every A 2 B, we have

                                     IP (Xk+1 2 AjF k ) = g (Xk);
      where g is a function that depends on the set A.

Conditions (a)-(d) are equivalent. The Markov property as stated in (a)-(d) involves the process at
a “current” time k and one future time k + 1. Conditions (a)-(d) are also equivalent to conditions
involving the process at time k and multiple future times. We write these apparently stronger but
actually equivalent conditions below.
Consequences of the Markov property. Let j be a positive integer.

(A) For every Ak+1  IR; : : : ; Ak+j  IR,

        IP [Xk+1 2 Ak+1 ; : : : ; Xk+j 2 Ak+j jF k ] = IP [Xk+1 2 Ak+1; : : : ; Xk+j 2 Ak+j jXk ]:

(A’) For every A 2 IRj ,

                   IP [(Xk+1 ; : : : ; Xk+j ) 2 AjF k ] = IP [(Xk+1 ; : : : ; Xk+j ) 2 AjXk ]:

(B) For every function h : IRj !IR for which IE jh(Xk+1; : : : ; Xk+j )j < 1, we have

                      IE [h(Xk+1; : : : ; Xk+j )jF k ] = IE [h(Xk+1; : : : ; Xk+j )jXk ]:

(C) For every u = (uk+1 ; : : : ; uk+j ) 2 IRj for which IE jeuk+1 Xk+1 +:::+uk+j Xk+j j < 1, we have

                   IE [euk Xk +:::+uk j Xk j jF k ] = IE [euk Xk +:::+uk j Xk j jXk ]:
                           +1   +1       +    +                 +1     +1      +       +




(D) For every u = (uk+1 ; : : : ; uk+j ) 2 IRj we have

                 IE [ei(uk Xk +:::+uk j Xk j )jF k ] = IE [ei(uk Xk +:::+uk j Xk j )jXk ]:
                           +1   +1      +    +                    +1    +1         +       +




Once again, every expression of the form IE (: : : jXk ) can also be written as g (Xk ), where the
function g depends on the random variable represented by : : : in this expression.
Remark. All these Markov properties have analogues for vector-valued processes.
72

Proof that (b) =) (A). (with j = 2 in (A)) Assume (b). Then (a) also holds (take h = IA ).
Consider

                        IP [Xk+1 2 Ak+1 ; Xk+2 2 Ak+2 jF k ]
                           = IE [IAk+1 (Xk+1 )IAk+2 (Xk+2 )jF k ]
                                   (Definition of conditional probability)
                           = IE [IE [IAk+1 (Xk+1 )IAk+2 (Xk+2 )jF k+1 ]jF k ]
                                   (Tower property)
                           = IE [IAk+1 (Xk+1 ):IE [IAk+2 (Xk+2)jF k+1 ]jF k ]
                                   (Taking out what is known)
                           = IE [IAk+1 (Xk+1 ):IE [IAk+2 (Xk+2)jXk+1 ]jF k ]
                                   (Markov property, form (a).)
                           = IE [IAk+1 (Xk+1 ):g (Xk+1)jF k ]
                                   (Remark 4.1)
                           = IE [IAk+1 (Xk+1 ):g (Xk+1)jXk ]
                                   (Markov property, form (b).)


Now take conditional expectation on both sides of the above equation, conditioned on  (Xk ), and
use the tower property on the left, to obtain

              IP [Xk+1 2 Ak+1 ; Xk+2 2 Ak+2 jXk ] = IE [IAk+1 (Xk+1):g (Xk+1)jXk ]:                     (3.1)

Since both
                                  IP [Xk+1 2 Ak+1; Xk+2 2 Ak+2 jF k ]
and
                                  IP [Xk+1 2 Ak+1; Xk+2 2 Ak+2 jXk ]
are equal to the RHS of (3.1)), they are equal to each other, and this is property (A) with j = 2.

Example 4.3 It is intuitively clear that the stock price process in the binomial model is a Markov process.
We will formally prove this later. If we want to estimate the distribution of Sk+1 based on the information in
F k , the only relevant piece of information is the value of Sk . For example,
                                  e k+1jF k ] = (~pu + q~d)Sk = (1 + r)Sk
                                 IE[S                                                                    (3.2)

is a function of Sk . Note however that form (b) of the Markov property is stronger then (3.2); the Markov
property requires that for any function h,
                                                  e k+1)jF k]
                                                 IE[h(S
is a function of Sk . Equation (3.2) is the case of h(x) = x.
Consider a model with 66 periods and a simple European derivative security whose payoff at time 66 is

                                        V66 = 31 (S64 + S65 + S66 ):
CHAPTER 4. The Markov Property                                                                          73

The value of this security at time 50 is
                                                 e + r),66V66jF 50]
                                 V50 = (1 + r)50IE[(1
                                                  e 66jS50];
                                     = (1 + r),16IE[V
because the stock price process is Markov. (We are using form (B) of the Markov property here). In other
words, the F50-measurable random variable V50 can be written as

                                  V50(!1 ; : : : ; !50) = g(S50 (! 1; : : : ; !50))
for some function g, which we can determine with a bit of work.



4.4 Showing that a process is Markov

Definition 4.2 (Independence) Let ( ; F ; P) be a probability space, and let G and H be sub--
algebras of F . We say that G and H are independent if for every A 2 G and B 2 H, we have

                                           IP (A \ B) = IP (A)IP (B):
We say that a random variable X is independent of a  -algebra G if (X ), the  -algebra generated
by X , is independent of G .

Example 4.4 Consider the two-period binomial model. Recall that F 1 is the -algebra of sets determined
by the first toss, i.e., F 1 contains the four sets

                                AH =4 fHH; HT g; AT =4 fTH; TT g; ; :
Let H be the -algebra of sets determined by the second toss, i.e., H contains the four sets

                                    fHH; T H g; fHT; T T g; ; :
Then F 1 and H are independent. For example, if we take A = fHH; HT g from F 1 and B = fHH; T H g
from H, then IP(A \ B) = IP(HH) = p2 and

                           IP(A)IP(B) = (p2 + pq)(p2 + pq) = p2 (p + q)2 = p2:
Note that F 1 and S2 are not independent (unless p = 1 or p = 0). For example, one of the sets in (S2 ) is
f!; S2 (!) = u2S0 g = fHH g. If we take A = fHH; HT g from F 1 and B = fHH g from (S2 ), then
IP(A \ B) = IP(HH) = p2 , but
                               IP(A)IP(B) = (p2 + pq)p2 = p3(p + q) = p3 :


The following lemma will be very useful in showing that a process is Markov:

Lemma 4.15 (Independence Lemma) Let X and Y be random variables on a probability space
( ; F ; P). Let G be a sub--algebra of F . Assume
74

      X is independent of G ;
      Y is G -measurable.
Let f (x; y ) be a function of two variables, and define

                                             g (y ) =4 IEf (X; y):
Then
                                          IE [f (X; Y )jG] = g (Y ):
Remark. In this lemma and the following discussion, capital letters denote random variables and
lower case letters denote nonrandom variables.

Example 4.5 (Showing the stock price process is Markov) Consider an n-period binomial model. Fix a
                      4 Sk+1 and G =
                                   4 F . Then X = u if !
time k and define X =     Sk               k                   k+1 = H and X = d if !k+1 = T . Since X
                                                                     4
depends only on the (k + 1)st toss, X is independent of G . Define Y = Sk , so that Y is G -measurable. Let h
                                4
be any function and set f(x; y) = h(xy). Then
                                 4 IEf(X; y) = IEh(Xy) = ph(uy) + qh(dy):
                            g(y) =
The Independence Lemma asserts that
                                                             S           
                                IE[h(Sk+1 )jF k ] = IE[h         k+1
                                                                    jF k ]
                                                                 Sk :Sk
                                                  = IE[f(X; Y )jG ]
                                                  = g(Y )
                                                  = ph(uSk ) + qh(dSk ):
This shows the stock price is Markov. Indeed, if we condition both sides of the above equation on (Sk ) and
use the tower property on the left and the fact that the right hand side is (Sk )-measurable, we obtain
                                 IE[h(Sk+1 )jSk ] = ph(uSk ) + qh(dSk ):
Thus IE[h(Sk+1 )jF k ] and IE[h(Sk+1 )jXk ] are equal and form (b) of the Markov property is proved.
Not only have we shown that the stock price process is Markov, but we have also obtained a formula for
IE[h(Sk+1 )jF k ] as a function of Sk . This is a special case of Remark 4.1.



4.5 Application to Exotic Options

Consider an n-period binomial model. Define the running maximum of the stock price to be

                                               Mk =4 1max  S:
                                                      j k j
Consider a simple European derivative security with payoff at time n of vn (Sn ; Mn ).
Examples:
CHAPTER 4. The Markov Property                                                                   75

    vn(Sn; Mn) = (Mn , K )+ (Lookback option);
    vn(Sn; Mn) = IMnB (Sn , K )+ (Knock-in Barrier option).
Lemma 5.16 The two-dimensional process f(Sk ; Mk )gnk=0 is Markov. (Here we are working under
the risk-neutral measure IP, although that does not matter).

Proof: Fix k. We have
                                          Mk+1 = Mk _ Sk+1;
                                                                4 Sk+1
where _ indicates the maximum of two quantities. Let Z =           Sk , so
                                   If
                                    P (Z = u) = p~; If
                                                     P (Z = d) = q~;
and Z is independent of F k . Let h(x; y ) be a function of two variables. We have

                             h(Sk+1 ; Mk+1) = h(Sk+1 ; Mk _ Sk+1 )
                                            = h(ZSk ; Mk _ (ZSk )):
Define

                        g(x; y) =4 If
                                    Eh(Zx; y _ (Zx))
                                = p~h(ux; y _ (ux)) + q~h(dx; y _ (dx)):
The Independence Lemma implies

         If
          E[h(Sk+1 ; Mk+1 )jF k ] = g(Sk; Mk ) = p~h(uSk ; Mk _ (uSk )) + q~h(dSk; Mk );
the second equality being a consequence of the fact that Mk ^ dSk = Mk . Since the RHS is a
function of (Sk ; Mk ), we have proved the Markov property (form (b)) for this two-dimensional
process.

Continuing with the exotic option of the previous Lemma... Let Vk denote the value of the derivative
security at time k. Since (1 + r),k Vk is a martingale under If
                                                              P , we have
                             Vk = 1 +1 r If
                                          E [Vk+1jF k ]; k = 0; 1; : : : ; n , 1:
At the final time, we have
                                            Vn = vn (Sn; Mn):
Stepping back one step, we can compute

             Vn,1 = 1 +1 r If
                            E [vn (Sn; Mn)jF n,1 ]
                  = 1 +1 r [~pvn (uSn,1 ; uSn,1 _ Mn,1 ) + q~vn (dSn,1 ; Mn,1)] :
76

This leads us to define

                          vn,1 (x; y ) =4 1 +1 r [~pvn (ux; ux _ y ) + q~vn(dx; y)]
so that
                                      Vn,1 = vn,1 (Sn,1; Mn,1):
The general algorithm is
                                                                                 
                      vk (x; y) = 1 +1 r p~vk+1 (ux; ux _ y ) + q~vk+1 (dx; y ) ;
and the value of the option at time k is vk (Sk ; Mk ). Since this is a simple European option, the
hedging portfolio is given by the usual formula, which in this case is

                           k = vk+1 (uSk ; (uSk )(u_,Mdk))S, vk+1 (dSk ; Mk )
                                                              k
Chapter 5

Stopping Times and American Options

5.1 American Pricing

Let us first review the European pricing formula in a Markov model. Consider the Binomial
model with n periods. Let Vn = g (Sn ) be the payoff of a derivative security. Define by backward
recursion:

                            vn (x) = g (x)
                            vk (x) = 1 +1 r [~pvk+1 (ux) + q~vk+1(dx)]:
Then vk (Sk ) is the value of the option at time k, and the hedging portfolio is given by

                     k = vk+1 (uS(uk ),,d)vSk+1 (dSk ) ; k = 0; 1; 2; : : : ; n , 1:
                                              k

Now consider an American option. Again a function g is specified. In any period k, the holder
of the derivative security can “exercise” and receive payment g (Sk ). Thus, the hedging portfolio
should create a wealth process which satisfies

                                  Xk  g (Sk); 8k; almost surely.
This is because the value of the derivative security at time k is at least g (Sk ), and the wealth process
value at that time must equal the value of the derivative security.
American algorithm.


                    vn (x) = g (x)                                       
                                     1
                    vk (x) = max 1 + r (~pvk+1 (ux) + q~vk+1 (dx)); g (x)
Then vk (Sk ) is the value of the option at time k.

                                                   77
78

                                                               S2 (HH) = 16 v2 (16) = 0



                                         S (H) = 8
                                          1

                                                               S2 (HT) = 4
                                                                             v (4) = 1
                           S =4                                               2
                            0                                  S2 (TH) = 4

                                          S1 (T) = 2




                                                               S2 (TT) = 1   v (1) = 4
                                                                              2


        Figure 5.1: Stock price and final value of an American put option with strike price 5.


Example 5.1 See Fig. 5.1. S0 = 4; u = 2; d = 12 ; r = 14 ; p~ = q~ = 12 ; n = 2. Set v2 (x) = g(x) = (5 , x)+ .
Then
                                              4 
                                                          
                           v (8) = max 5 :0 + :1 ; (5 , 8)
                            1
                                                       1   1            +

                                      2 
                                                       2   2


                                  = max 5 ; 0
                                  = 0:40                           
                                                       
                           v1 (2) = max 45 12 :1 + 12 :4 ; (5 , 2)+
                                  = maxf2; 3g
                                  = 3:00                                 
                                           4                   
                           v0 (4) = max 5 2 :(0:4) + 2 :(3:0) ; (5 , 4)
                                               1         1              +



                                  = maxf1:36; 1g
                                  = 1:36
Let us now construct the hedging portfolio for this option. Begin with initial wealth X0 = 1:36. Compute
0 as follows:
                                0:40 =     v1 (S1 (H))
                                     =     S1 (H)0 + (1 + r)(X0 , 0S0 )
                                     =     80 + 54 (1:36 , 40)
                                     =     30 + 1:70 =) 0 = ,0:43
                                3:00 =     v1 (S1 (T ))
                                     =     S1 (T)0 + (1 + r)(X0 , 0S0 )
                                     =     20 + 54 (1:36 , 40)
                                     =     ,30 + 1:70 =) 0 = ,0:43
CHAPTER 5. Stopping Times and American Options                                                        79

Using 0 = ,0:43 results in

                       X1 (H) = v1(S1 (H)) = 0:40; X1 (T ) = v1 (S1 (T )) = 3:00
Now let us compute 1 (Recall that S1 (T) = 2):

                       1 = v2 (4)
                         = S2 (TH)1(T) + (1 + r)(X1 (T ) , 1(T)S1 (T))
                         = 41(T) + 45 (3 , 21(T))
                         = 1:51(T) + 3:75 =) 1(T ) = ,1:83
                       4 = v2 (1)
                         = S2 (TT )1(T) + (1 + r)(X1 (T) , 1 (T )S1 (T))
                         = 1(T ) + 54 (3 , 21(T))
                         = ,1:51(T) + 3:75 =) 1(T) = ,0:16
We get different answers for 1(T )! If we had X1 (T) = 2, the value of the European put, we would have

                                1 = 1:51(T ) + 2:5 =) 1 (T) = ,1;
                               4 = ,1:51(T) + 2:5 =) 1(T ) = ,1;



5.2 Value of Portfolio Hedging an American Option

                    Xk+1 = k Sk+1 + (1 + r)(Xk , Ck , k Sk )
                         = (1 + r)Xk + k (Sk+1 , (1 + r)Sk ) , (1 + r)Ck
Here, Ck is the amount “consumed” at time k.

    The discounted value of the portfolio is a supermartingale.
    The value satisfies Xk  g(Sk); k = 0; 1; : : : ; n.
    The value process is the smallest process with these properties.
When do you consume? If

                       If
                        E((1 + r),(k+1) vk+1 (Sk+1 )jF k ] < (1 + r),k vk (Sk );
or, equivalently,
                                  E( 1 +1 r vk+1(Sk+1)jF k ] < vk (Sk )
                                 If
80

and the holder of the American option does not exercise, then the seller of the option can consume
to close the gap. By doing this, he can ensure that Xk = vk (Sk ) for all k, where vk is the value
defined by the American algorithm in Section 5.1.
In the previous example, v1 (S1(T )) = 3; v2(S2(TH )) = 1 and v2(S2 (TT )) = 4. Therefore,
                                                               h              i
                              E [ 1 +1 r v2(S2 )jF 1 ](T ) = 45 12 :1 + 21 :4
                             If
                                                            4  5
                                                          = 5 2
                                                          = 2;
                                              v1 (S1(T )) = 3;
so there is a gap of size 1. If the owner of the option does not exercise it at time one in the state
! 1 = T , then the seller can consume 1 at time 1. Thereafter, he uses the usual hedging portfolio
                                     k = vk+1 (uS(uk ),,d)vSk+1 (dSk )
                                                              k
In the example, we have v1 (S1(T )) = g (S1(T )). It is optimal for the owner of the American option
to exercise whenever its value vk (Sk ) agrees with its intrinsic value g (Sk ).

Definition 5.1 (Stopping Time) Let ( ; F ; P) be a probability space and let fF k gnk=0 be a filtra-
tion. A stopping time is a random variable  : !f0; 1; 2; : : : ; ng [ f1g with the property that:

                           f! 2 ;  (!) = kg 2 F k ; 8k = 0; 1; : : : ; n; 1:
Example 5.2 Consider the binomial model with n = 2; S0 = 4; u = 2; d = 12 ; r = 14 , so p~ = q~ = 12 . Let
v0 ; v1; v2 be the value functions defined for the American put with strike price 5. Define
                                  (!) = minfk; vk(Sk ) = (5 , Sk )+ g:
The stopping time  corresponds to “stopping the first time the value of the option agrees with its intrinsic
value”. It is an optimal exercise time. We note that
                                                1     if ! 2 AT
                                       (!) =     2    if ! 2 AH

We verify that  is indeed a stopping time:

                                      f!; (!) = 0g =  2 F 0
                                      f!; (!) = 1g = AT 2 F 1
                                      f!; (!) = 2g = AH 2 F 2


Example 5.3 (A random time which is not a stopping time) In the same binomial model as in the previous
example, define
                                     (!) = minfk; Sk (!) = m2 (!)g;
CHAPTER 5. Stopping Times and American Options                                                          81

           4
where m2 = min0j 2 Sj . In other words,  stops when the stock price reaches its minimum value. This
random variable is given by                   8
                                              <0 if ! 2 AH ;
                                   (!) = 1 if ! = TH;
                                              :2 if ! = TT
We verify that  is not a stopping time:

                                     f!; (!) = 0g = AH 62 F 0
                                     f!; (!) = 1g = fTH g 62 F 1
                                     f!; (!) = 2g = fTT g 2 F 2



5.3 Information up to a Stopping Time

Definition 5.2 Let  be a stopping time. We say that a set A              is determined by time  provided
that
                                  A \ f!;  (!) = kg 2 F k ; 8k:
The collection of sets determined by  is a -algebra, which we denote by F  .

Example 5.4 In the binomial model considered earlier, let

                                      = minfk; vk (Sk ) = (5 , Sk )+ g;
i.e.,                                           1     if ! 2 AT
                                       (!) =     2    if ! 2 AH
The set fHT g is determined by time  , but the set fTH g is not. Indeed,

                                 fHT g \ f!; (!) = 0g =  2 F 0
                                 fHT g \ f!; (!) = 1g =  2 F 1
                                 fHT g \ f!; (!) = 2g = fHT g 2 F 2
but
                                  fTH g \ f!; (!) = 1g = fTH g 62 F 1 :
The atoms of F  are
                                     fHT g; fHH g; AT = fTH; TT g:


Notation 5.1 (Value of Stochastic Process at a Stopping Time) If ( ; F ; P) is a probability space,
fF k gnk=0 is a filtration under F , fXk gnk=0 is a stochastic process adapted to this filtration, and  is
a stopping time with respect to the same filtration, then X is an F  -measurable random variable
whose value at ! is given by
                                           X (!) =4 X (!) (!):
82

Theorem 3.17 (Optional Sampling) Suppose that fYk ; F k g1     k=0 (or fYk ; F k gk=0 ) is a submartin-
                                                                                  n
gale. Let  and  be bounded stopping times, i.e., there is a nonrandom number n such that

                                           n;   n; almost surely.
If    almost surely, then
                                           Y  IE (Y jF  ):
Taking expectations, we obtain IEY  IEY , and in particular, Y0 = IEY0  IEY . If fYk ; F k g1
                                                                                                 k=0
is a supermartingale, then    implies Y  IE (Y jF  ).
If fYk ; F k g1
              k=0 is a martingale, then    implies Y = IE (YjF  ).

Example 5.5 In the example 5.4 considered earlier, we define (!) = 2 for all ! 2 . Under the risk-neutral
probability measure, the discounted stock price process ( 54 ),k Sk is a martingale. We compute
                                                    "            #
                                              IEe           4 2S F :
                                                            5 2 
The atoms of F  are fHH g; fHT g; and AT . Therefore,
                                  "               #              4
                             IEe 54 S2 F  (HH) =
                                     2                                 2


                                                                     5 S2 (HH);
                                 " 2    #                         4 2
                                   4
                              IEe 5 S2 F  (HT) =                    5 S2 (HT );
and for ! 2 AT ,
                          "             #                               
                    IEe     4 2 S F (!) = 1 4 2 S (TH) + 1 4 2 S (TT )
                            5 2           2
                                              5 2              2
                                                                 5 2
                                        = 12  2:56 + 12  0:64
                                        = 1:60
In every case we have gotten (see Fig. 5.2)
                                       "              #
                                 IEe     4 2 S F (!) =  4  (! ) S (!):
                                                                     (! )
                                         5 2            5
CHAPTER 5. Stopping Times and American Options                                  83




                                                      (16/25) S (HH) = 10.24
                                                               2



                               (4/5) S (H) = 6.40
                                      1

                                                      (16/25) S2 (HT) = 2.56
                    S =4
                     0                                (16/25) S2 (TH) = 2.56


                               (4/5) S (T) = 1.60
                                      1


                                                       (16/25) S2 (TT) = 0.64


                  Figure 5.2: Illustrating the optional sampling theorem.
84
Chapter 6

Properties of American Derivative
Securities

6.1 The properties

Definition 6.1 An American derivative security is a sequence of non-negative random variables
fGk gnk=0 such that each Gk is F k -measurable. The owner of an American derivative security can
exercise at any time k, and if he does, he receives the payment Gk .

(a) The value Vk of the security at time k is
                                                      kf
                                              (1 + r) IE [(1 + r) G jF k ];
                                       Vk = max                   ,

      where the maximum is over all stopping times  satisfying   k almost surely.

(b) The discounted value process f(1 + r),k Vk gnk=0 is the smallest supermartingale which satisfies

                                              Vk  Gk ; 8k; almost surely.
(c) Any stopping time  which satisfies

                                                   V0 = If
                                                         E [(1 + r), G ]
      is an optimal exercise time. In particular

                                                    =4 minfk; Vk = Gk g
      is an optimal exercise time.

(d) The hedging portfolio is given by

        k (!1 ; : : : ; !k ) = SVk+1 ((!!1;; :: :: :: ;; !!k ;; H ) , Vk+1 (!1 ; : : : ; !k ; T ) ; k = 0; 1; : : : ; n , 1:
                                    k+1 1               k        H ) , S (! ; : : : ; ! ; T )
                                                                     k+1 1               k

                                                            85
86

(e) Suppose for some k and ! , we have Vk (!) = Gk (!). Then the owner of the derivative security
      should exercise it. If he does not, then the seller of the security can immediately consume

                                      Vk (!) , 1 +1 r If
                                                       E[Vk+1jF k ](!)
      and still maintain the hedge.


6.2 Proofs of the Properties

Let fGk gnk=0 be a sequence of non-negative random variables such that each Gk is F k -measurable.
Define Tk to be the set of all stopping times  satisfying k    n almost surely. Define also

                             Vk =4 (1 + r)k max
                                             2T
                                                 If
                                                  E [(1 + r), G jF k ] :
                                                 k

Lemma 2.18 Vk  Gk for every k.

Proof: Take  2 Tk to be the constant k.


Lemma 2.19 The process f(1 + r),k Vk gnk=0 is a supermartingale.

Proof: Let   attain the maximum in the definition of Vk+1 , i.e.,
                                                     h                       i
                         (1 + r),(k+1) Vk+1 = If
                                               E (1 + r),  G  jF k+1 :
Because   is also in Tk , we have
                                                         h                           i
               If
                E[(1 + r),(k+1)Vk+1jF k ] = If
                                             E If E [(1 + r),  G  jF k+1 ]jF k
                                          = If
                                             E [(1 + r),  G  jF k ]
                                           max
                                              2Tk
                                                   If
                                                    E [(1 + r), G jF k ]
                                          = (1 + r),k Vk :


Lemma 2.20 If fYk gnk=0 is another process satisfying

                                 Yk  Gk ; k = 0; 1; : : : ; n; a.s.,
and f(1 + r),k Yk gnk=0 is a supermartingale, then

                                  Yk  Vk ; k = 0; 1; : : : ; n; a.s.
CHAPTER 6. Properties of American Derivative Securities                                                       87

Proof: The optional sampling theorem for the supermartingale f(1 + r),k Yk gnk=0 implies

                             If
                              E[(1 + r), Y jF k ]  (1 + r),k Yk ; 8 2 Tk :
Therefore,
                               Vk = (1 + r)k max
                                              2T
                                                  If
                                                   E [(1 + r), G jF k ]
                                                             k
                                          (1 + r)k max
                                                     2Tk
                                                          If
                                                           E [(1 + r), Y jF k ]
                                          (1 + r),k (1 + r)k Yk
                                      =    Yk :


Lemma 2.21 Define

                 Ck = Vk , 1 +1 r If
                                   E [Vk+1 jF k ]
                               n                                            o
                    = (1 + r)k (1 + r),k Vk , If  E[(1 + r),(k+1) Vk+1jF k ] :

Since f(1 + r),k Vk gnk=0 is a supermartingale, Ck must be non-negative almost surely. Define
                                                                         H ) , Vk+1 (!1; : : : ; !k ; T ) :
                k (!1 ; : : : ; !k ) = SVk+1 ((!!1;; :: :: :: ;; !!k ;; H
                                             k+1 1               k         ) , S (! ; : : : ; ! ; T )
                                                                              k+1 1               k
Set X0 = V0 and define recursively
                            Xk+1 = k Sk+1 + (1 + r)(Xk , Ck , k Sk ):
Then
                                                   Xk = Vk 8k:
Proof:   We proceed by induction on k. The induction hypothesis is that Xk = Vk for some
k 2 f0; 1; : : : ; n , 1g, i.e., for each fixed (!1; : : : ; !k ) we have
                                     Xk (!1 ; : : : ; !k ) = Vk(!1 ; : : : ; !k ):
We need to show that
                            Xk+1 (!1; : : : ; !k ; H ) = Vk+1(!1; : : : ; !k ; H );
                            Xk+1 (!1 ; : : : ; !k ; T ) = Vk+1(!1; : : : ; !k ; T ):
We prove the first equality; the proof of the second is similar. Note first that
                  Vk (!1 ; : : : ; !k ) , Ck (!1; : : : ; !k )
                    = 1 If         E[V jF ](! ; : : : ; !k)
                          1 + r k+1 k 1
                    = 1 +1 r (~pVk+1 (!1; : : : ; !k ; H ) + q~Vk+1 (!1 ; : : : ; !k ; T )) :
88

Since (!1 ; : : : ; !k ) will be fixed for the rest of the proof, we will suppress these symbols. For
example, the last equation can be written simply as

                              Vk , Ck = 1 +1 r (~pVk+1 (H ) + q~Vk+1(T )) :
We compute
                 Xk+1 (H ) = k Sk+1(H ) + (1 + r)(Xk , Ck , k Sk )
                           = SVk+1 ((H ) , Vk+1 (T ) (S (H ) , (1 + r)S )
                                                       k+1                k
                               k+1 H ) , Sk+1 (T )
                               +(1 + r)(Vk , Ck )
                           = k+1 ((H
                             V         ) , Vk+1 (T ) (uS , (1 + r)S )
                                     u , d)Sk           k           k
                               +~pVk+1 (H ) + q~Vk+1 (T )
                           = (Vk+1 (H ) , Vk+1 (T ))~q + p~Vk+1(H ) + q~Vk+1 (T )
                           = Vk+1 (H ):

6.3 Compound European Derivative Securities

In order to derive the optimal stopping time for an American derivative security, it will be useful to
study compound European derivative securities, which are also interesting in their own right.
A compound European derivative security consists of n + 1 different simple European derivative
securities (with the same underlying stock) expiring at times 0; 1; : : : ; n; the security that expires
at time j has payoff Cj . Thus a compound European derivative security is specified by the process
fCj gnj=0 , where each Cj is F j -measurable, i.e., the process fCj gnj=0 is adapted to the filtration
fF k gnk=0.
Hedging a short position (one payment). Here is how we can hedge a short position in the j ’th
European derivative security. The value of European derivative security j at time k is given by

                          Vk(j) = (1 + r)k If
                                            E [(1 + r),j Cj jF k ]; k = 0; : : : ; j;
and the hedging portfolio for that security is given by
                                j ) (! ; : : : ; ! ; H ) , V (j ) (! ; : : : ; ! ; T )
                             Vk(+1                k                             k
      k (!1 ; : : : ; !k ) = (j ) 1
        ( j )                                               k+1 1
                                                            ( j )                       ; k = 0; : : : ; j , 1:
                             Sk+1 (!1 ; : : : ; !k ; H ) , Sk+1 (!1; : : : ; !k ; T )
                               (j )                                  (j )          (j )
Thus, starting with wealth V0 , and using the portfolio (0 ; : : : ; j ,1 ), we can ensure that at
time j we have wealth Cj .

                                   P (j)
Hedging a short position (all payments). Superpose the hedges for the individual payments. In
other words, start with wealth V0 = nj=0 V0 . At each time k 2 f0; 1; : : : ; n , 1g, first make the
payment Ck and then use the portfolio
                                k = k (k+1) + k (k+2) + : : : + k (n)
CHAPTER 6. Properties of American Derivative Securities                                            89

corresponding to all future payments. At the final time n, after making the final payment Cn , we
will have exactly zero wealth.
Suppose you own a compound European derivative securityfCj gnj=0 . Compute
                                                2n             3
                                   X
                                   n             X
                               V0 = V0(j ) = If
                                              E 4 (1 + r),j Cj 5
                                     j =0             j =0
                                     ,1 . You can borrow V0 and consume it immediately. This leaves
and the hedging portfolio is fk gnk=0
you with wealth X0 = ,V0 . In each period k, receive the payment Ck and then use the portfolio
,k . At the final time n, after receiving the last payment Cn, your wealth will reach zero, i.e., you
will no longer have a debt.


6.4 Optimal Exercise of American Derivative Security

In this section we derive the optimal exercise time for the owner of an American derivative security.
Let fGk gnk=0 be an American derivative security. Let  be the stopping time the owner plans to
use. (We assume that each Gk is non-negative, so we may assume without loss of generality that the
owner stops at expiration – time n– if not before). Using the stopping time  , in period j the owner
will receive the payment
                                            Cj = If =jg Gj :
In other words, once he chooses a stopping time, the owner has effectively converted the American
derivative security into a compound European derivative security, whose value is
                                           2n             3
                                            X
                               V0( ) = If
                                         E 4 (1 + r),j Cj 5
                                           2j=0                   3
                                            Xn
                                      = If
                                         E 4 (1 + r),j If =j gGj 5
                                               j =0
                                      = If
                                         E [(1 + r), G ]:
The owner of the American derivative security can borrow this amount of money immediately, if
he chooses, and invest in the market so as to exaclty pay off his debt as the payments fCj gnj=0 are
received. Thus, his optimal behavior is to use a stopping time  which maximizes V0 .
                                                                                      ( )

Lemma 4.22 V0
                ( ) is maximized by the stopping time

                                         = minfk; Vk = Gk g:
Proof: Recall the definition

                               V0 =4 max
                                      2T
                                          If
                                           E [(1 + r), G ] = max V ( )
                                                                2T 0
                                        0                         0
90
                                                                h               i
Let  0 be a stopping time which maximizes V0 , i.e., V0 = If
                                             ( )                           0
                                                            E (1 + r), G 0 : Because f(1 + r),k Vk gnk=0
is a supermartingale, we have from the optional sampling theorem and the inequality Vk  Gk , the
following:
                                                h                   i
                                 V0  IfE (1 + r), 0 V 0 jF 0
                                         h                 i
                                    = IfE (1 + r), 0 V 0
                                         h                  i
                                     IfE (1 + r), 0 G 0
                                    = V0:
Therefore,                        h                 i       h               i
                         V0 = If
                               E (1 + r), 0 V 0 = If
                                                     E (1 + r), 0 G 0 ;
and
                                         V 0 = G 0 ; a.s.
We have just shown that if  0 attains the maximum in the formula

                                   V0 = max
                                         2T
                                             If
                                              E [(1 + r), G ] ;                              (4.1)
                                            0


then
                                         V 0 = G 0 ; a.s.
But we have defined
                                        = minfk; Vk = Gk g;
and so we must have     0  n almost surely. The optional sampling theorem implies

                          (1 + r),  G  = (1 +
                                                h r ) ,  V 
                                                                         i
                                            IfE (1 + r), 0 V 0 jF  
                                                h                        i
                                           = IfE (1 + r), 0 G 0 jF   :
Taking expectations on both sides, we obtain
                           h                i           h               i
                        If
                         E (1 + r),  G   If
                                               E (1 + r), 0 G 0 = V0 :
It follows that   also attains the maximum in (4.1), and is therefore an optimal exercise time for
the American derivative security.
Chapter 7

Jensen’s Inequality

7.1 Jensen’s Inequality for Conditional Expectations

Lemma 1.23 If ' : IR!IR is convex and IE j'(X )j < 1, then

                                   IE ['(X )jG]  '(IE [X jG]):
For instance, if G = f;   g; '(x) = x2:
                                           IEX 2  (IEX )2:
Proof: Since ' is convex we can express it as follows (See Fig. 7.1):

                                     '(x) = max
                                            h'
                                                h(x):
                                                h is linear

Now let h(x) = ax + b lie below '. Then,

                                 IE ['(X )jG]  IE [aX + bjG]
                                              = aIE [X jG] + b
                                              = h(IE [X jG])
This implies

                              IE ['(X )jG]         max
                                                    h'
                                                        h(IE [X jG])
                                                  h is linear
                                             = '(IE [X jG]):



                                                  91
92




                                                        ϕ




             Figure 7.1: Expressing a convex function as a max over linear functions.

Theorem 1.24 If fYk gnk=0 is a martingale and  is convex then f'(Yk )gnk=0 is a submartingale.

Proof:
                               IE ['(Yk+1)jF k ]  '(IE [Yk+1 jF k ])
                                                 = '(Yk ):



7.2 Optimal Exercise of an American Call

This follows from Jensen’s inequality.

Corollary 2.25 Given a convex function g : [0; 1)!IR where g (0) = 0. For instance, g (x) =
(x , K )+ is the payoff function for an American call. Assume that r  0. Consider the American
derivative security with payoff g (Sk ) in period k. The value of this security is the same as the value
of the simple European derivative security with final payoff g (Sn), i.e.,
                         If
                          E [(1 + r),n g (Sn)] = max    f           ,
                                                      IE [(1 + r) g (S )] ;
where the LHS is the European value and the RHS is the American value. In particular  = n is an
optimal exercise time.

Proof: Because g is convex, for all  2 [0; 1] we have (see Fig. 7.2):
                                 g(x) = g (x + (1 , ):0)
                                        g(x) + (1 , ):g(0)
                                       = g (x):
CHAPTER 7. Jensen’s Inequality                                                                   93




                                                                     (x,g(x))
                                 ( λ x, λ g(x))




                                                                 x

                                 ( λ x, g( λ x))
                                   Figure 7.2: Proof of Cor. 2.25

Therefore,                                     
                                 g 1 +1 r Sk+1  1 +1 r g (Sk+1)
and
               h                           i                                       
             If                                        E 1 +1 r g (Sk+1)jF k
              E (1 + r),(k+1) g(Sk+1)jF k = (1 + r),k If
                                                                           
                                                (1 + r),k IfE g 1 +1 r Sk+1 jF k
                                                                             
                                                (1 + r),k g IfE 1 Sk+1jF k
                                                                       1+r
                                               = (1 + r),k g (Sk );
So f(1 + r),k g (Sk )gnk=0 is a submartingale. Let  be a stopping time satisfying 0    n. The
optional sampling theorem implies
                           (1 + r), g (S )  If
                                                E [(1 + r),n g (Sn)jF  ] :
Taking expectations, we obtain
                                                                               
                     If
                      E [(1 + r), g(S )]  If
                                              E IfE [(1 + r),n g (Sn)jF  ]
                                           = If
                                              E [(1 + r),ng (Sn)] :
Therefore, the value of the American derivative security is
                            f                     f
                          IE [(1 + r) g (S )]  IE [(1 + r) g (Sn )] ;
                        max           ,                     ,n
and this last expression is the value of the European derivative security. Of course, the LHS cannot
be strictly less than the RHS above, since stopping at time n is always allowed, and we conclude
that
                            f         ,          f          ,n
                          IE [(1 + r) g (S )] = IE [(1 + r) g (Sn )] :
                        max
94

                                                                          S2 (HH) = 16



                                               S (H) = 8
                                                1

                                                                          S2 (HT) = 4

                               S =4
                                0                                         S2 (TH) = 4

                                                S1 (T) = 2




                                                                          S2 (TT) = 1


                            Figure 7.3: A three period binomial model.




7.3 Stopped Martingales

Let fYk gnk=0 be a stochastic process and let  be a stopping time. We denote by fYk^ gnk=0 the
stopped process
                                        Yk^ (!)(!); k = 0; 1; : : : ; n:
Example 7.1 (Stopped Process) Figure 7.3 shows our familiar 3-period binomial example.
Define                                            1         if !1 = T;
                                         (!) =        2     if !1 = H:
Then                                   8 S (HH) = 16
                                       >
                                       <           2                 if ! = HH;
                          S ^ ! (!) = > SS (HT)  =4
                                                   2                 if ! = HT;
                                       : S (T) = 22
                                            (T) =                    if ! = TH;
                           2    (   )
                                                   1
                                                   1                 if ! = TT:



Theorem 3.26 A stopped martingale (or submartingale, or supermartingale) is still a martingale
(or submartingale, or supermartingale respectively).

Proof: Let fYk gnk=0 be a martingale, and  be a stopping time. Choose some k 2 f0; 1; : : : ; ng.
The set f  kg is in F k , so the set f  k + 1g = f  kgc is also in F k . We compute
                      h                  i             h                                 i
                   IE Y(k+1)^ jF k = IE If kgY + If k+1gYk+1 jF k
                                    = If kgY + If k+1gIE [Yk+1 jF k ]
                                    = If kgY + If k+1gYk
                                    = Yk^ :
CHAPTER 7. Jensen’s Inequality   95
96
Chapter 8

Random Walks

8.1 First Passage Time

Toss a coin infinitely many times. Then the sample space is the set of all infinite sequences
! = (!1; !2; : : : ) of H and T . Assume the tosses are independent, and on each toss, the probability
of H is 12 , as is the probability of T . Define
                                             (
                                                  1        if ! j = H;
                                  Yj (!) =        ,1       if ! j = T;

                                   M0 = 0;
                                              X
                                              k
                                   Mk =               Yj ; k = 1; 2; : : :
                                              j =1
The process fMk g1
                 k=0 is a symmetric random walk (see Fig. 8.1) Its analogue in continuous time is
Brownian motion.
Define
                                    = minfk  0; Mk = 1g:
If Mk never gets to 1 (e.g., ! = (TTTT : : : )), then  = 1. The random variable  is called the
first passage time to 1. It is the first time the number of heads exceeds by one the number of tails.


8.2  is almost surely finite

It is shown in a Homework Problem that fMk g1
                                            k=0 and fNk gk=0 where
                                                         1
                                          (            ,                   !)
                            Nk = exp Mk , k log e +2 e
                                                     2 k
                                 =    eMk        e + e,
                                                      97
98


                         Mk


                                                                        k




                              Figure 8.1: The random walk process Mk


                       eθ+ e−θ                                                       2
                         2                                                      eθ+ e−θ

                   1                                                            1

                                    θ                                                            θ

                              Figure 8.2: Illustrating two functions of 


are martingales. (Take Mk = ,Sk in part (i) of the Homework Problem and take  = , in part
(v).) Since N0 = 1 and a stopped martingale is a martingale, we have
                                               "              k^         #
                          1 = IENk^ = IE e  M k ^      2
                                                      e + e,                                 (2.1)


for every fixed  2 IR (See Fig. 8.2 for an illustration of the various functions involved). We want
to let k!1 in (2.1), but we have to worry a bit that for some sequences ! 2 ,  (! ) = 1.
We consider fixed  > 0, so                      2  < 1:
                                              e + e,
As k!1,                                        (         
                                2 k^ ! e +2e,              if  < 1;
                             e + e,     0                     if  = 1
Furthermore, Mk^  1, because we stop this martingale when it reaches 1, so

                                          0  eMk^  e
CHAPTER 8. Random Walks                                                                        99

and                                                       2 k^  e :
                               0  eMk^
                                                       e + e,
In addition,
                                                         (          
                                       2 k ^ =
                                                                         
                                                            e        2       if  < 1;
                  lim eMk^
                 k!1               e + e,
                                                                 e +e,
                                                            0                if  = 1:

                                    "                             #
                                                           2 k^ = 1
Recall Equation (2.1):
                                IE eMk^              e + e,
Letting k!1, and using the Bounded Convergence Theorem, we obtain
                                             2  I    
                               IE e       e + e, f<1g = 1:                               (2.2)

For all  2 (0; 1], we have                    
                                0  e e +2 e, If<1g  e;
so we can let #0 in (2.2), using the Bounded Convergence Theorem again, to conclude
                                               h            i
                                          IE If < 1g = 1;
i.e.,
                                            IP f < 1g = 1:
We know there are paths of the symmetric random walk fMk g1    k=0 which never reach level 1. We
have just shown that these paths collectively have no probability. (In our infinite sample space ,
each path individually has zero probability). We therefore do not need the indicator If < 1g in
(2.2), and we rewrite that equation as
                                                 2   = e, :
                                     IE        e + e,                                      (2.3)


8.3 The moment generating function for 

Let     2 (0; 1) be given. We want to find  > 0 so that
                                               2 
                                               = e + e, :
Solution:
                                            e + e, , 2 = 0
                                          (e, )2 , 2e, + = 0
100
                                                 p 2
                                          ,
                                         e = 1   1, :

We want  > 0, so we must have e, < 1. Now 0 <            < 1, so
                               0 < (1 , )2 < (1 , ) < 1 , 2 ;
                                                      p
                                          1 , < 1 , 2;
                                             p
                                          1, 1, 2 < ;
                                             p
                                           1, 1, 2 < 1
We take the negative square root:                p 2
                                          ,
                                         e = 1 ,  1, :
Recall Equation (2.3):                     2   = e, ;  > 0:
                               IE        e + e,
With   2 (0; 1) and  > 0 related by
                                              p 2
                                      ,
                                     e = 1 ,  1, ;
                                                         2 ;
                                             =        e + e,
this becomes
                                              p
                               IE  = 1 ,        1 , 2 ; 0 < < 1:                  (3.1)

We have computed the moment generating function for the first passage time to 1.


8.4 Expectation of 

Recall that                                  p
                              IE  = 1 ,         1 , 2 ; 0 < < 1;
so
                                d IE  = IE (  ,1)
                               d                   p 2!
                                       = dd    1 ,   1,
                                                       p
                                            = 1 ,2 p 1 , 2 :
                                                          2
                                                    1,
CHAPTER 8. Random Walks                                                                              101

Using the Monotone Convergence Theorem, we can let           "1 in the equation
                                                    p 2
                                           ,   1 ,
                                     IE ( ) = 2 p 1 , 2 ;
                                              1
                                                     1,
to obtain
                                                 IE = 1:
Thus in summary:
                                         =4 minfk; Mk = 1g;
                                           IP f < 1g = 1;
                                                 IE = 1:

8.5 The Strong Markov Property

The random walk process fMk g1
                             k=0 is a Markov process, i.e.,
                             IE [ random variable depending only on Mk+1 ; Mk+2; : : : j F k ]
                                   = IE [ same random variable jMk ] :

In discrete time, this Markov property implies the Strong Markov property:

                            IE [ random variable depending only on M +1 ; M +2; : : : j F  ]
                                  = IE [ same random variable j M ] :

for any almost surely finite stopping time  .


8.6 General First Passage Times

Define
                             m =4 minfk  0; Mk = mg; m = 1; 2; : : :
Then 2 , 1 is the number of periods between the first arrival at level 1 and the first arrival at level
2. The distribution of 2 , 1 is the same as the distribution of 1 (see Fig. 8.3), i.e.,
                                                   p
                               IE 2 ,1 = 1 ,      1 , 2 ; 2 (0; 1):
102


                         Mk


                                                                                      k

                                                         τ1                       τ2

                                                             τ 2 − τ1

                              Figure 8.3: General first passage times.

For   2 (0; 1),
                        IE [  jF  ] = IE
                                                , jF 
                              2
                                   1
                                                         1
                                                             2       1
                                                                              1

                                         =   IE [
                                                1   , jF  ]
                                                             2    1
                                                                          1

                                                    (taking out what is known)
                                         =     1 IE [ 2 ,1 jM ]
                                                                          1

                                                    (strong Markov property)
                                         =     1 IE [ 2 ,1 ]
                                                (M = 1; not random
                                                     p 2! )
                                                         1


                                         =      1, 1,
                                                1               :
Take expectations of both sides to get
                                                                      p           !
                               IE  = IE  : 1 , 1 ,
                                                     2
                                    2                1


                                                         p                !
                                         =     1, 1, 2 2

In general,                                    p                  !
                            IE m =       1 , 1 , 2 m ; 2 (0; 1):


8.7 Example: Perpetual American Put

Consider the binomial model, with u = 2; d = 12 ; r = 14 , and payoff function (5 , Sk )+ . The risk
neutral probabilities are p~ = 12 , q~ = 12 , and thus

                                             Sk = S0 uMk ;
CHAPTER 8. Random Walks                                                                            103

where Mk is a symmetric random walk under the risk-neutral measure, denoted by If
                                                                                P . Suppose
S0 = 4. Here are some possible exercise rules:
Rule 0: Stop immediately. 0 = 0; V (0 ) = 1.

Rule 1: Stop as soon as stock price falls to 2, i.e., at time

                                           ,1 =4 minfk; Mk = ,1g:
Rule 2: Stop as soon as stock price falls to 1, i.e., at time

                                           ,2 =4 minfk; Mk = ,2g:
Because the random walk is symmetric under If  P , ,m has the same distribution under If
                                                                                        P as the
stopping time m in the previous section. This observation leads to the following computations of
value. Value of Rule 1:

                             V (, ) = If
                                                
                                        E (1 + r),, (5 , S, )+
                                                                                            
                                                 h         i
                                  1                                     1
                                                                                        1

                                     = (5 , 2)+IE ( 54 ),                      1

                                                    q
                                               1 , 1 , ( 45 )2
                                       = 3:                4
                                                           5
                                       = 23 :
Value of Rule 2:
                                                                            h           i
                                  V (, ) = (5 , 1)+If
                                       2              E ( 45 ),                    2



                                          = 4:( 12 )2
                                          = 1:
This suggests that the optimal rule is Rule 1, i.e., stop (exercise the put) as soon as the stock price
falls to 2, and the value of the put is 32 if S0 = 4.
Suppose instead we start with S0 = 8, and stop the first time the price falls to 2. This requires 2
down steps, so the value of this rule with this initial stock price is
                                             h       i
                                           E ( 54 ), = 3:( 12 )2 = 34 :
                                 (5 , 2)+ If            2




In general, if S0 = 2j for some j  1, and we stop when the stock price falls to 2, then j , 1 down
steps will be required and the value of the option is
                                              h                     i
                                (5 , 2)+ If
                                          E ( 54 ), j, = 3:( 12 )j,1 :
                                                       (       1)



We define
                                  v(2j ) =4 3:( 12 )j,1 ; j = 1; 2; 3; : : :
104

If S0 = 2j for some j  1, then the initial price is at or below 2. In this case, we exercise
immediately, and the value of the put is

                                      v(2j ) =4 5 , 2j ; j = 1; 0; ,1; ,2; : : :
Proposed exercise rule: Exercise the put whenever the stock price is at or below 2. The value of
this rule is given by v (2j ) as we just defined it. Since the put is perpetual, the initial time is no
different from any other time. This leads us to make the following:

Conjecture 1 The value of the perpetual put at time k is v (Sk ).

How do we recognize the value of an American derivative security when we see it?
There are three parts to the proof of the conjecture. We must show:

(a) v (Sk )  (5 , Sk )+ 8k;
      n4k           o1
(b)    ( 5 ) v (Sk ) k=0 is a supermartingale,
(c) fv (Sk )g1
             k=0 is the smallest process with properties (a) and (b).
Note: To simplify matters, we shall only consider initial stock prices of the form S0 = 2j , so Sk is
always of the form 2j , with a possibly different j .
Proof: (a). Just check that

                                  v(2j ) =4 3:( 21 )j,1  (5 , 2j )+ for j  1;
                                    v(2j ) =4 5 , 2j  (5 , 2j )+ for j  1:
This is straightforward.

Proof: (b). We must show that
                                                         h                 i
                                    v(Sk )  If   E 45 v (Sk+1 )jF k
                                             = 45 : 12 v (2Sk ) + 45 : 12 v ( 12 Sk ):
By assumption, Sk = 2j for some j . We must show that
                                       v(2j )  52 v (2j +1) + 25 v (2j ,1 ):
If j  2, then v (2j ) = 3:( 12 )j ,1 and
                                        2 v (2j +1 ) + 2 v (2j ,1)
                                        5               5
                                           = 25 :3:( 21 )j + 25 :3:( 12 )j ,2
                                                    1 
                                           = 3: 52 : 4 + 25 ( 12 )j ,2
                                           = 3: 12 :( 12 )j ,2
                                           = v (2j ):
CHAPTER 8. Random Walks                                                                             105

If j = 1, then v (2j ) = v (2) = 3 and
                                           2 v (2j +1 ) + 2 v (2j ,1)
                                           5              5
                                              = 52 v (4) + 25 v (1)
                                              = 25 :3: 21 + 25 :4
                                              = 3=5 + 8=5
                                              = 2 15 < v (2) = 3
There is a gap of size 45 .
If j  0, then v (2j ) = 5 , 2j and
                                  2 v (2j +1 ) + 2 v (2j ,1)
                                  5              5
                                     = 25 (5 , 2j +1 ) + 52 (5 , 2j ,1 )
                                     = 4 , 25 (4 + 1)2j ,1
                                     = 4 , 2j < v (2j ) = 5 , 2j :
There is a gap of size 1. This concludes the proof of (b).

Proof: (c). Suppose fYk gnk=0 is some other process satisfying:

(a’) Yk  (5 , Sk )+ 8k;

(b’) f( 54 )k Yk g1
                  k=0 is a supermartingale.
We must show that

                                              Yk  v (Sk ) 8k:                                     (7.1)

Actually, since the put is perpetual, every time k is like every other time, so it will suffice to show

                                                Y0  v(S0);                                        (7.2)

provided we let S0 in (7.2) be any number of the form 2j . With appropriate (but messy) conditioning
on F k , the proof we give of (7.2) can be modified to prove (7.1).
For j  1,
                                      v(2j ) = 5 , 2j = (5 , 2j )+;
so if S0 = 2j for some j  1, then (a’) implies

                                         Y0  (5 , 2j )+ = v (S0):
Suppose now that S0 = 2j for some j  2, i.e., S0  4. Let

                                       = minfk; Sk = 2g
                                        = minfk; Mk = j , 1g:
106

Then

                                   v(S0) = v (2j ) = 3:( 12 )j,1
                                              h                  i
                                         = IE ( 45 ) (5 , S )+ :

Because f( 45 )k Yk g1
                     k=0 is a supermartingale
                                  h         i      h                 i
                         Y0  IE ( 45 ) Y  IE ( 45 ) (5 , S )+ = v (S0):


Comment on the proof of (c): If the candidate value process is the actual value of a particular
exercise rule, then (c) will be automatically satisfied. In this case, we constructed v so that v (Sk ) is
the value of the put at time k if the stock price at time k is Sk and if we exercise the put the first time
(k, or later) that the stock price is 2 or less. In such a situation, we need only verify properties (a)
and (b).


8.8 Difference Equation

If we imagine stock prices which can fall at any point in (0; 1), not just at points of the form 2j for
integers j , then we can imagine the function v (x), defined for all x > 0, which gives the value of
the perpetual American put when the stock price is x. This function should satisfy the conditions:

(a) v (x)  (K , x)+ ; 8x,

(b) v (x)  1+ r pv (ux) + q~v (dx)] ; 8x;
             1 [~

(c) At each x, either (a) or (b) holds with equality.

In the example we worked out, we have
                                                                         6
                                  For j  1 : v (2j ) = 3:( 21 )j ,1 = j ;
                                                                      2
                                      For j  1 : v (2j ) = 5 , 2j :
This suggests the formula                   (6
                                   v(x) =       x;     x  3;
                                                5 , x; 0 < x  3:
We then have (see Fig. 8.4):

(a) v (x)  (5 , x)+ ; 8x;
               h                  i
(b) v (x)  54 12 v (2x) + 12 v ( x2 ) for every x except for 2 < x < 4.
CHAPTER 8. Random Walks                                                                       107




                          v(x)
                    5

                                 (3,2)



                                      5            x
                                   Figure 8.4: Graph of v (x).


Check of condition (c):


    If 0 < x  3, then (a) holds with equality.
    If x  6, then (b) holds with equality:
                                             x                    6
                            4 1 v (2x) + 1 v ( ) = 4 1 6 + 1 12      = x:
                            5 2          2 2       5 2 2x 2 x


    If 3 < x < 4 or 4 < x < 6, then both (a) and (b) are strict. This is an artifact of the
      discreteness of the binomial model. This artifact will disappear in the continuous model, in
      which an analogue of (a) or (b) holds with equality at every point.



8.9 Distribution of First Passage Times

Let fMk g1
         k=0 be a symetric random walk under a probability measure IP , with M0 = 0. Defining

                                    = minfk  0; Mk = 1g;

we recall that
                                           p
                              IE  = 1 , 1 , ; 0 < < 1:
                                             2


We will use this moment generating function to obtain the distribution of  . We first obtain the
Taylor series expasion of IE  as follows:
108



                                      p
                    f (x) = 1 , 1 , x; f (0) = 0
                                        1
                   f 0(x) = 21 (1 , x), 2 ; f 0 (0) = 21
                   f 00(x) = 14 (1 , x), 2 ; f 00(0) = 14
                                         3

                   f 000(x) = 38 (1 , x), ; f 000(0) = 38
                                                 5
                                                 2


                            :::
                  f (x) = 1  3  : :2:j (2j , 3) (1 , x),
                    (j )                                    j,
                                                               ;
                                                                       (2       1)
                                                                            2



                  f (j)(0) = 1  3  : : :  (2j , 3)
                                              2j
                            = 1  3  : :2: j (2j , 3) : 2  42j ,:1:(j: ,(21)!j , 2)
                               2j,1 (2j , 2)!
                            = 21        (j , 1)!

The Taylor series expansion of f (x) is given by
                                          p
                        f (x) = 1 , 1 , x
                                X1 1
                                        (j )  j
                              =    j ! f (0)x
                                    j =0
                                    X1  2j ,1 (2j , 2)!
                               =         1
                                         2      j !( j , 1)! xj
                                    j =1
                                         1  2j ,1 1                           !
                               =    x +X     1                     2j , 2 xj :
                                     2 j =2 2          (j , 1)         j
So we have
                                          p
                                = 1, 1,
                                           2
                        IE 
                                = 1 f ( 2)
                                    X1  2j ,1 1            !
                                = +                   2 j , 2  :
                                  2 j =2 2     (j , 1) j
But also,
                                          X
                                          1
                                            2j ,1
                                IE  =               IP f = 2j , 1g:
                                          j =1
CHAPTER 8. Random Walks                                                                   109




                               Figure 8.5: Reflection principle.




                               Figure 8.6: Example with j = 2.


Therefore,


                    IP f = 1g =     1;
                                  1 2j,1 1 2j , 2!
                                     2
               IP f = 2j , 1g = 2        (j , 1) j ; j = 2; 3; : : :


8.10 The Reflection Principle

To count how many paths reach level 1 by time 2j , 1, count all those for which M2j ,1 = 1 and
double count all those for which M2j ,1  3. (See Figures 8.5, 8.6.)
110

In other words,

         IP f  2j , 1g = IP fM2j,1 = 1g + 2IP fM2j,1  3g
                         = IP fM2j ,1 = 1g + IP fM2j ,1  3g + IP fM2j ,1  ,3g
                         = 1 , IP fM2j ,1 = ,1g:
For j  2,

             IP f = 2j , 1g = IP f  2j , 1g , IP f  2j , 3g
                             = [1 , IP fM2j ,1 = ,1g] , [1 , IP fM2j ,3 = ,1g]
                             = IP fM2j ,3 = ,1g , IP fM2j ,1 = ,1g
                                2j,3 (2j , 3)!                1 2j,1 (2j , 1)!
                             = 12        (j , 1)!(j , 2)! 2 ,            j !(j , 1)!
                                1 2j,1 (2j , 3)!
                             = 2         j !(j , 1)! [4j (j , 1) , (2j , 1)(2j , 2)]
                                2j,1 (2j , 3)!
                             = 12        j !(j , 1)! [2j (2j , 2) , (2j , 1)(2j , 2)]
                                2j,1 (2j , 2)!
                             = 12        j !(j , 1)!
                                1 2j,1 1 2j , 2!
                             = 2
                                         (j , 1) j
                                                             :
Chapter 9

Pricing in terms of Market Probabilities:
The Radon-Nikodym Theorem.

9.1 Radon-Nikodym Theorem

Theorem 1.27 (Radon-Nikodym) Let IP and If       P be two probability measures on a space ( ; F ).
Assume that for every A 2 F satisfying IP (A) = 0, we also have If   P (A) = 0. Then we say that
If
 P is absolutely continuous with respect to IP. Under this assumption, there is a nonegative random
variable Z such that
                                               Z
                                    If
                                     P (A) =           ZdIP; 8A 2 F ;                              (1.1)
                                                   A
and Z is called the Radon-Nikodym derivative of If
                                                 P with respect to IP.
Remark 9.1 Equation (1.1) implies the apparently stronger condition
                                             If
                                              EX = IE [XZ ]
for every random variable X for which IE jXZ j < 1.

Remark 9.2 If If  P is absolutely continuous with respect to PI , and IP is absolutely continuous with
respect to IP , we say that IP and If
           f                        P are equivalent. IP and If
                                                              P are equivalent if and only if
                           IP (A) = 0 exactly when If   P (A) = 0; 8A 2 F :
If IP and If
           P are equivalent and Z is the Radon-Nikodym derivative of If      P w.r.t. PI , then Z1 is the
Radon-Nikodym derivative of IP w.r.t. If  P , i.e.,
                                          If
                                           EX = IE [XZ ] 8X;                                        (1.2)


                                             E [Y: Z1 ] 8Y:
                                      IEY = If                                                     (1.3)

(Let X and Y be related by the equation Y = XZ to see that (1.2) and (1.3) are the same.)

                                                       111
112

Example 9.1 (Radon-Nikodym Theorem) Let = fHH; HT; T H; T T g, the set of coin toss sequences
                                                                                  e
of length 2. Let P correspond to probability 13 for H and 23 for T , and let IP correspond to probability 12 for
                           e
H and for T . Then Z(!) = IP ! , so(   )
                                IP (! )
         1
         2


                        Z(HH) = 94 ; Z(HT) = 98 ; Z(TH) = 89 ; Z(TT) = 16
                                                                       9:



9.2 Radon-Nikodym Martingales

Let be the set of all sequences of n coin tosses. Let P
                                                      I be the market probability measure and let
If
 P be the risk-neutral probability measure. Assume
                                       IP (!) > 0; If
                                                    P (!) > 0; 8! 2 ;
        I and If
so that P      P are equivalent. The Radon-Nikodym derivative of If
                                                                  P with respect to IP is
                                                           f
                                                  Z (!) = IIPP ((!!)) :
Define the P
           I -martingale
                                       Zk =4 IE [Z jF k ]; k = 0; 1; : : : ; n:
We can check that Zk is indeed a martingale:
                                 IE [Zk+1jF k ] = IE [IE [Z jF k+1 ]jF k ]
                                                = IE [Z jF k ]
                                                = Zk :
Lemma 2.28 If X is F k -measurable, then If
                                          EX = IE [XZk ].
Proof:
                                           If
                                            EX = IE [XZ ]
                                               = IE [IE [XZ jF k ]]
                                               = IE [X:IE [Z jF k ]]
                                               = IE [XZk ]:

Note that Lemma 2.28 implies that if X is F k -measurable, then for any A 2 F k ,
                                            If
                                             E [IA X ] = IE [Zk IA X ];
or equivalently,                            Z               Z
                                                  XdIf
                                                     P=           XZk dIP:
                                              A               A
CHAPTER 9. Pricing in terms of Market Probabilities                                                113

                                                                        Z2 (HH) = 9/4

                                                                1/3

                                              Z (H) = 3/2
                                               1
                                      1/3                       2/3
                                                                        Z2 (HT) = 9/8

                               Z =1
                                0                                       Z2 (TH) = 9/8
                                      2/3                       1/3
                                              Z1 (T) = 3/4


                                                                2/3

                                                                        Z2 (TT) = 9/16



Figure 9.1: Showing the Zk values in the 2-period binomial model example. The probabilities shown
are for IP, not If
                 P.

Lemma 2.29 If X is F k -measurable and 0  j  k, then

                                       E [X jF j ] = Z1 IE [XZk jF j ]:
                                      If
                                                            j

Proof: Note first that Z1 IE [XZk jF j ] is F j -measurable. So for any A 2 F j , we have
                         j
                Z 1                       Z
                      IE [ XZ  jF
                              k j ] d f
                                      I
                                      P =     IE [XZk jF j ]dIP
                 A Zj
                                                                                  (Lemma 2.28)
                                          Z A
                                             =            XZk dIP       (Partial averaging)
                                                  ZA
                                             =            XdIf
                                                             P        (Lemma 2.28)
                                                      A


Example 9.2 (Radon-Nikodym Theorem, continued) We show in Fig. 9.1 the values of the martingale Zk .
We always have Z0 = 1, since
                                                  Z
                                 Z0 = IEZ =                       e ) = 1:
                                                          ZdIP = IP(



9.3 The State Price Density Process

In order to express the value of a derivative security in terms of the market probabilities, it will be
useful to introduce the following state price density process:

                                 k = (1 + r),k Zk ; k = 0; : : : ; n:
114

We then have the following pricing formulas: For a Simple European derivative security with
payoff Ck at time k,
                                       h                  i
                          V0 = If
                                E (1 + r),k Ck
                                   h              i
                             = IE (1 + r),k Zk Ck                 (Lemma 2.28)
                             = IE [k Ck ]:
More generally for 0  j  k,
                                           h                  i
                   Vj = (1 + r)j IfE (1 + r),k Ck jF j
                      = (1 +   r)j IE h(1 + r),k Z C jF i
                            Zj                    k k j                (Lemma 2.29)

                      = 1 IE [k Ck jF j ]
                              j
Remark 9.3 fj Vj gkj=0 is a martingale under IP, as we can check below:

                           IE [j+1Vj+1jF j ] = IE [IE [kCk jF j +1]jF j ]
                                              = IE [k Ck jF j ]
                                              = j Vj :
Now for an American derivative security fGk gnk=0 :

                                  V0 = sup If
                                            E [(1 + r), G ]
                                        2T        0

                                     = sup IE [(1 + r), Z G ]
                                        2T        0

                                     = sup IE [ G ]:
                                                2T0
More generally for 0  j  n,

                         Vj = (1 + r)j sup If
                                            E [(1 + r), G jF j ]
                                                 2Tj
                              = (1 + r)j sup Z1 IE [(1 + r), Z G jF j ]
                                                 2Tj j
                              = 1 sup IE [ G jF j ]:
                                    j  2Tj
Remark 9.4 Note that

(a) fj Vj gnj=0 is a supermartingale under IP,

(b) j Vj  j Gj 8j;
CHAPTER 9. Pricing in terms of Market Probabilities                                                       115

                                                                          ζ (ΗΗ) = 1.44
                                                                           2
                                                                         S2 (HH) = 16
                                                                   1/3
                                                    ζ (Η) = 1.20
                                                     1
                                                    S (H) = 8
                                                     1
                                                                         ζ (ΗΤ) = 0.72
                                             1/3                   2/3    2
                                                                         S2 (HT) = 4

                                    S =4
                                     0        2/3                        S2 (TH) = 4
                                                                   1/3
                                    ζ0 = 1.00
                                                                         ζ (ΤΗ) = 0.72
                                                    S1 (T) = 2            2

                                                    ζ (Τ) = 0.6
                                                     1
                                                                   2/3
                                                                         ζ (ΤΤ) = 0.36
                                                                          2
                                                                         S2 (TT) = 1



      Figure 9.2: Showing the state price values k . The probabilities shown are for IP, not If
                                                                                               P.

(c) fj Vj gnj=0 is the smallest process having properties (a) and (b).

We interpret k by observing that k (! )IP (! ) is the value at time zero of a contract which pays $1
at time k if ! occurs.

Example 9.3 (Radon-NikodymTheorem, continued) We illustrate the use of the valuation formulas for
European and American derivative securities in terms of market probabilities. Recall that p = 31 , q = 23 . The
state price values k are shown in Fig. 9.2.
For a European Call with strike price 5, expiration time 2, we have

                          V2 (HH) = 11; 2(HH)V2 (HH) = 1:44  11 = 15:84:
                                  V2 (HT ) = V2(TH) = V2 (TT ) = 0:
                                      V0 = 13  13  15:84 = 1:76:
                           2 (HH)             1:44
                           1 (HH) V2(HH) = 1:20  11 = 1:20  11 = 13:20
                                      V1 (H) = 13  13:20 = 4:40
Compare with the risk-neutral pricing formulas:

                            V1(H) = 25 V1 (HH) + 25 V1(HT) = 25  11 = 4:40;
                                  V1 (T ) = 52 V1 (TH) + 25 V1 (TT ) = 0;
                               V0 = 25 V1 (H) + 52 V1 (T) = 25  4:40 = 1:76:
Now consider an American put with strike price 5 and expiration time 2. Fig. 9.3 shows the values of
k (5 , Sk )+ . We compute the value of the put under various stopping times  :
(0) Stop immediately: value is 1.
(1) If (HH) = (HT) = 2; (TH) = (TT ) = 1, the value is
                                            1  2  0:72 + 2  1:80 = 1:36:
                                            3 3            3
116

                                                                            (5 - S2(HH))+= 0
                                                                            ζ2(HH) (5 - S2(HH))+= 0
                                                                    1/3
                                                 (5 - S (H))+ = 0
                                                       1
                                           ζ1(H) (5 - S (H))+ = 0
                                                       1
                                                                            (5 - S2(HT))+= 1
                                                                            ζ2(HT) (5 - S2(HT))+= 0.72
                                         1/3                        2/3
                       (5-S 0)+=1                                           (5 - S (TH))+= 1
                                                                                  2
                        ζ0 (5-S 0)+=1     2/3                       1/3     ζ (TH) (5 - S (TH))+= 0.72
                                                                             2           2

                                              (5 - S1(T))+ = 3
                                        ζ1(T) (5 - S1(T))+ = 1.80
                                                                    2/3                 +
                                                                            (5 - S2(TT)) = 4
                                                                                               +
                                                                            ζ2(TT) (5 - S2(TT)) = 1.44


Figure 9.3: Showing the values k (5 , Sk )+ for an American put. The probabilities shown are for
IP, not If
         P.
(2) If we stop at time 2, the value is
                                1  2  0:72 + 2  1  0:72 + 2  2  1:44 = 0:96
                                3 3            3
                                                   3          3   3


We see that (1) is optimal stopping rule.



9.4 Stochastic Volatility Binomial Model

Let be the set of sequences of n tosses, and let 0 < dk < 1+ rk < uk , where for each k, dk ; uk ; rk
are F k -measurable. Also let

                                 p~k = 1 +u r,k ,d dk ; q~k = uk u, (1, +d rk) :
                                                k       k                   k       k
Let If
     P be the risk-neutral probability measure:
                                                    IfP f!1 = H g = p~0 ;
                                                     If
                                                      P f!1 = T g = q~0 ;
and for 2  k  n,
                                    IfP [!k+1 = H jF k ] = p~k ;
                                     If
                                      P [!k+1 = T jF k ] = q~k :
Let IP be the market probability measure, and assume IP f! g > 0 8! 2                                 . Then IP and If
                                                                                                                     P are
equivalent. Define
                                                        If
                                                         P (!) 8! 2 ;
                                                Z (!) = IP (! )
CHAPTER 9. Pricing in terms of Market Probabilities                                         117

                                Zk = IE [Z jF k ]; k = 0; 1; : : : ; n:
We define the money market price process as follows:

                                                M0 = 1;
                             Mk = (1 + rk,1)Mk,1 ; k = 1; : : : ; n:
Note that Mk is Fk,1 -measurable.
We then define the state price process to be

                                    k = M1 Zk ; k = 0; : : : ; n:
                                           k
                                          ,1 . The self-financing value process (wealth process)
As before the portfolio process is fk gnk=0
consists of X0, the non-random initial wealth, and

                 Xk+1 = k Sk+1 + (1 + rk )(Xk , k Sk ); k = 0; : : : ; n , 1:
Then the following processes are martingales under If
                                                    P:
                              1       n                    1       n
                                Mk Sk k=0         and
                                                               Mk Xk k=0 ;
and the following processes are martingales under IP:

                                 fk Sk gnk=0     and        fk Xk gnk=0:
We thus have the following pricing formulas:

Simple European derivative security with payoff Ck at time k:
                                                  C 
                                                f
                                        Vj = Mj IE k F j        Mk
                                                = 1 IE [k Ck jF j ]
                                                      j

American derivative security fGk gnk=0 :
                                                   G 
                                                 f
                                     Vj = Mj sup IE  F j
                                                      2Tj M
                                            = 1 sup IE [ G jF j ] :
                                                   j  2Tj

The usual hedging portfolio formulas still work.
118

9.5 Another Applicaton of the Radon-Nikodym Theorem

Let ( ; F ; Q) be a probability
                        R X dQspace.    Let G be a sub--algebra of F , and let X be a non-negative
random variable with              = 1. We construct the conditional expectation (under Q) of X
given G . On G , define two probability measures

                                       IP (A) = Q(A) 8A 2 G ;
                                                 Z
                                     If
                                      P (A) =            XdQ 8A 2 G :
                                                     A
Whenever Y is a G -measurable random variable, we have
                                        Z                     Z
                                            Y dIP =               Y dQ;
        1
if Y = A for some A 2 G , this is just the definition of IP , and the rest follows from the “standard
machine”. If A 2 G and IP (A) = 0, then Q(A) = 0, so If   P (A) = 0. In other words, the measure IfP
                                                     f
is absolutely continuous with respect to the measure IP . The Radon-Nikodym theorem implies that
there exists a G -measurable random variable Z such that
                                                 Z
                                     If
                                      P (A) =4           Z dIP 8A 2 G ;
                                                     A
i.e.,                            Z                   Z
                                       X dQ =                Z dIP 8A 2 G :
                                   A                     A
This shows that Z has the “partial averaging” property, and since Z is G -measurable, it is the con-
ditional expectation (under the probability measure Q) of X given G . The existence of conditional
expectations is a consequence of the Radon-Nikodym theorem.
Chapter 10

Capital Asset Pricing

10.1 An Optimization Problem

Consider an agent who has initial wealth X0 and wants to invest in the stock and money markets so
as to maximize
                                             IE log Xn:
Remark 10.1 Regardless of the portfolio used by the agent, fk Xk g1
                                                                   k=0 is a martingale under IP, so
                       IEnXn = X0                                         (BC )
Here, (BC) stands for “Budget Constraint”.

Remark 10.2 If  is any random variable satisfying (BC), i.e.,

                                             IEn = X0 ;
then there is a portfolio which starts with initial wealth X0 and produces Xn =  at time n. To see
this, just regard  as a simple European derivative security paying off at time n. Then X0 is its value
at time 0, and starting from this value, there is a hedging portfolio which produces Xn =  .

Remarks 10.1 and 10.2 show that the optimal Xn for the capital asset pricing problem can be
obtained by solving the following
Constrained Optimization Problem:
Find a random variable  which solves:

                                         Maximize  IE log 
                                      Subject to IEn  = X0:
Equivalently, we wish to                        X
                                  Maximize          (log  (! )) IP (! )
                                               !2
                                                 119
120
                                              X
                              Subject to           n(!)(!)IP (!) , X0 = 0:
                                    !2
           n
There are 2 sequences ! in . Call them ! 1 ; !2 ; : : : ; !2n . Adopt the notation

                             x1 = (!1 ); x2 = (!2); : : : ; x2n = (!2n ):
We can thus restate the problem as:

                                                      X
                                                      2n
                                      Maximize              (log xk )IP (! k )
                                                      k=1
                                             X
                                             2n
                              Subject to           n (!k )xk IP (! k ) , Xo = 0:
                                             k=1
In order to solve this problem we use:

Theorem 1.30 (Lagrange Multiplier) If (x1; : : : ; xm) solve the problem

                                            Maxmize    f (x1 ; : : : ; xm)
                                      Subject to     g (x1; : : : ; xm) = 0;
then there is a number  such that
                       @ f (x; : : : ; x ) =  @ g (x; : : : ; x ); k = 1; : : : ; m;
                      @xk 1              m      @xk 1              m                                      (1.1)

and

                                             g (x1; : : : ; xm) = 0:                                    (1.2)

For our problem, (1.1) and (1.2) become
       1                                                    n                                   (1:10 )
       xk IP (! k ) = n (!k )IP (!k ); k = 1; : : : ; 2 ;
                X
                2n
                      n (!k )xk IP (!k ) = X0 :                                     (1:20 )
                k=1
Equation (1.1’) implies
                                               xk =  1(! ) :
                                                          n k
Plugging this into (1.2’) we get

                                   1X
                                    2   n
                                                       1
                                    IP (! k ) = X0 =)  = X0:
                                      k=1
CHAPTER 10. Capital Asset Pricing                                            121

Therefore,
                                   xk =  X(!0 ) ; k = 1; : : : ; 2n:
                                           n k
Thus we have shown that if   solves the problem

                                    Maximize         IE log 
                                    Subject to       IE ( n ) = X0;       (1.3)

then

                                                 = X 0 :                 (1.4)
                                                        n
Theorem 1.31 If   is given by (1.4), then   solves the problem (1.3).

Proof: Fix Z > 0 and define
                                        f (x) = log x , xZ:
We maximize f over x > 0:

                                f 0 (x) = x1 , Z = 0 () x = Z1 ;

                                   f 00(x) = , x12 < 0; 8x 2 IR:
The function f is maximized at x = Z1 , i.e.,

                       log x , xZ  f (x ) = log Z1 , 1; 8x > 0; 8Z > 0:   (1.5)

Let  be any random variable satisfying

                                            IE (n ) = X0
and let
                                                 = X 0 :
                                                        n
From (1.5) we have                                
                                log  ,  Xn  log X 0 , 1:
                                                 0            n
Taking expectations, we have

                               IE log  , X1 IE (n )  IE log  , 1;
                                            0
and so
                                        IE log   IE log  :
122

In summary, capital asset pricing works as follows: Consider an agent who has initial wealth X0
and wants to invest in the stock and money market so as to maximize

                                                     IE log Xn:
The optimal Xn is Xn = X
                        , i.e.,
                         0
                               n
                                                    n Xn = X0:
Since fk Xk gnk=0 is a martingale under IP, we have

                               k Xk = IE [nXn jF k ] = X0; k = 0; : : : ; n;
so
                                                     Xk = X 0 ;
                                                                k
and the optimal portfolio is given by

                                                                          ) , k+1 (!1 ; : : : ; !k ;T )
                                                        X0                             X0
                k (!1 ; : : : ; !k ) = S k+1(!(!1; ;: :: :: :; ;!!k; ;H                                :
                                         k+1 1                     k H ) , Sk+1 (!1; : : : ; !k ; T )
Chapter 11

General Random Variables

11.1 Law of a Random Variable

Thus far we have considered only random variables whose domain and range are discrete. We now
consider a general random variable X : !IR defined on the probability space ( ; F ; P). Recall
that:

    F is a -algebra of subsets of .
    IP is a probability measure on F , i.e., IP (A) is defined for every A 2 F .
A function X : !IR is a random variable if and only if for every B 2 B(IR) (the -algebra of
Borel subsets of R
                 I ), the set

                          fX 2 Bg =4 X ,1(B) =4 f!; X (!) 2 Bg 2 F ;
i.e., X :   !IR is a random variable if and only if X ,1 is a function from B(IR) to F (See Fig.
11.1)
Thus any random variable X induces a measure X on the measurable space (IR; B(IR)) defined
by                                            
                             X (B) = IP X ,1(B) 8B 2 B(IR);
where the probabiliy on the right is defined since X ,1(B ) 2 F . X is often called the Law of X –
in Williams’ book this is denoted by LX .


11.2 Density of a Random Variable

The density of X (if it exists) is a function fX : IR![0; 1) such that
                                         Z
                              X (B) =           fX (x) dx 8B 2 B (IR):
                                             B
                                                    123
124


                                                       X




                                                                                               R


                                                                             B
         {X ε B}                 Ω
                   Figure 11.1: Illustrating a real-valued random variable X .

We then write
                                      dX (x) = fX (x)dx;
where the integral is with respect to the Lebesgue measure on IR. fX is the Radon-Nikodym deriva-
tive of X with respect to the Lebesgue measure. Thus X has a density if and only if X is
absolutely continuous with respect to Lebesgue measure, which means that whenever B 2 B(IR)
has Lebesgue measure zero, then
                                        IP fX 2 Bg = 0:

11.3 Expectation

Theorem 3.32 (Expectation of a function of X ) Let h : IR!IR be given. Then
                                             Z
                                IEh(X ) =4            h(X (!)) dIP (! )
                                             Z
                                         =            h(x) dX (x)
                                             ZIR
                                         =            h(x)fX (x) dx:
                                                 IR
                            1
Proof: (Sketch). If h(x) = B (x) for some B  IR, then these equations are

                                 IE 1B (X ) =4 P fX 2 B g
                                            = Z X (B )
                                            =      fX (x) dx;
                                                       B

which are true by definition. Now use the “standard machine” to get the equations for general h.
CHAPTER 11. General Random Variables                                                        125

                                                           (X,Y)



                                                                                        C
                                                                     y

                 { (X,Y)ε C}                Ω

                                                                                    x

                       Figure 11.2: Two real-valued random variables X; Y .


11.4 Two random variables

Let X; Y be two random variables !IR defined on the space ( ; F ; P). Then X; Y induce a
measure on B(IR2 ) (see Fig. 11.2) called the joint law of (X; Y ), defined by


                           X;Y (C ) =4 IP f(X; Y ) 2 C g 8C 2 B(IR2 ):

The joint density of (X; Y ) is a function

                                            fX;Y : IR2 ![0; 1)
that satisfies
                                       ZZ
                         X;Y (C ) =         fX;Y (x; y) dxdy 8C 2 B(IR2 ):
                                       C

fX;Y is the Radon-Nikodym derivative of X;Y with respect to the Lebesgue measure (area) on IR2.
We compute the expectation of a function of X; Y in a manner analogous to the univariate case:
                                                Z
                           IEk(X; Y ) =4                k(X (!); Y (!)) dIP (!)
                                                ZZ
                                            =           k(x; y ) dX;Y (x; y )
                                                IR
                                                 ZZ 2


                                            =           k(x; y )fX;Y (x; y ) dxdy
                                                IR  2
126

11.5 Marginal Density

Suppose (X; Y ) has joint density fX;Y . Let B  IR be given. Then

                                    Y (B) = IP fY 2 Bg
                                           = IP f(X; Y ) 2 IR  B g
                                           = Z X;YZ (IR  B )
                                           =           fX;Y (x; y ) dxdy
                                                      ZB IR
                                              =               fY (y ) dy;
                                                          B
where                                                 Z
                                         fY (y ) =4            fX;Y (x; y) dx:
                                                          IR
Therefore, fY (y ) is the (marginal) density for Y .


11.6 Conditional Expectation
                                                                                                     4
Suppose (X; Y ) has joint density fX;Y . Let h : IR!IR be given. Recall that IE [h(X )jY ] =
IE [h(X )j(Y )] depends on ! through Y , i.e., there is a function g (y ) (g depending on h) such that
                                        IE [h(X )jY ](!) = g (Y (!)):
How do we determine g ?
We can characterize g using partial averaging: Recall that A 2 (Y )()A = fY 2 B g for some
B 2 B(IR). Then the following are equivalent characterizations of g :
                               Z                      Z
                                    g (Y ) dIP =              h(X ) dIP 8A 2 (Y );              (6.1)
                                A                        A

                        Z                            Z
                            1B (Y )g(Y ) dIP =                1B (Y )h(X ) dIP 8B 2 B(IR);       (6.2)


               Z                               ZZ
                       1B (y)g(y)Y (dy) =               1B (y)h(x) dX;Y (x; y) 8B 2 B(IR);     (6.3)
                IR
                                               IR2

                   Z                        Z Z
                         g(y)fY (y) dy =                 h(x)fX;Y (x; y) dxdy 8B 2 B (IR):       (6.4)
                     B                       B IR
CHAPTER 11. General Random Variables                                                                           127

11.7 Conditional Density

A function fX jY (xjy ) : IR2 ![0; 1) is called a conditional density for X given Y provided that for
any function h : IR!IR:
                                                Z
                                     g (y ) =            h(x)fX jY (xjy ) dx:                                 (7.1)
                                                    IR
(Here g is the function satisfying
                                          IE [h(X )jY ] = g (Y );
and g depends on h, but fX jY does not.)

Theorem 7.33 If (X; Y ) has a joint density fX;Y , then

                                       fX jY (xjy ) = fX;Y (x; y ) :
                                                        f (y )                                                (7.2)
                                                                      Y

Proof: Just verify that g defined by (7.1) satisfies (6.4): For B 2 B(IR);
               Z Z                                                     Z Z
                         h(x)fX jY (xjy) dx fY (y ) dy =                         h(x)fX;Y (x; y ) dxdy:
                B | IR         {z          }                              B IR
                              g(y)
Notation 11.1 Let g be the function satisfying

                                          IE [h(X )jY ] = g (Y ):
The function g is often written as

                                        g(y ) = IE [h(X )jY = y];
and (7.1) becomes                                          Z
                               IE [h(X )jY = y ] =                  h(x)fX jY (xjy ) dx:
                                                               IR
In conclusion, to determine IE [h(X )jY ] (a function of ! ), first compute
                                                Z
                                     g (y ) =            h(x)fX jY (xjy ) dx;
                                                    IR
and then replace the dummy variable y by the random variable Y :

                                      IE [h(X )jY ](!) = g (Y (!)):
Example 11.1 (Jointly normal random variables) Given parameters:  1 > 0; 2 > 0; ,1 <  < 1. Let
(X; Y ) have the joint density
                                  1                 1
                                                          x2 , 2 x y + y2
                                                                                                   
              fX;Y (x; y) =       p
                            212 1 , 2
                                          exp , 2(1 , 2 ) 12    1 2 22                               :
128

The exponent is
                                           x                                  
                                  1
                           , 2(1 , 2 ) 2 , 2 x y + y 2
                                                2         2


                                          1
                                             " 1 2 2 2 2                  #
                                        1        x     y
                             = , 2(1 , 2 )  ,   + 2 (1 ,  )y        2

                                                  1     2
                                                           
                                                                   2


                             = , 2(1 ,1 2 ) 12 x ,             1 y
                                                              2        2

                                                      2
                                                        1
                                                          y     ,    2 :
                                                                   2 2
                                               1


We can compute the Marginal density of Y as follows
                                                Z1 ,                                              2

                                                                  ,2)12 x , 2 y                               ,1 y
                                                                              1
                                  1
                                                                                                                          2
                                                                   1
            fY (y) =              p                     e   2(1
                                                                                                        dx:e 2           2
                                                                                                                          2
                       21 2 1 , 2 ,1
                         1   Z1 u             ,1 y           2

                                  e, 2 du:e 2 
                                            2

                     = 2                                   2
                                                             2
                           2 ,1
                                                            
                        using the substitution u = p 1     x ,  y , du = p1,dx               1
                                                    1,               2
                                                                               1               2                              2
                                                                                                                                  1



                     = p1 e
                              ,       1 y
                                      2 2
                                          2
                                          2
                                            :
                        2 2
Thus Y is normal with mean 0 and variance 22 .
Conditional density. From the expressions

                                                    1
                                                                                       ,            
                                                                 , 2(1,1 2 ) 12 x, 21 y 2 , 12 y 2
                                                                                                                  2

                      fX;Y (x; y) =                 p      e                       1                    e         2   ;
                                      212        1 , 2

                                           fY (y) = p 1 e, 2  ;
                                                           1 y
                                                                                   2
                                                                                   2
                                                                                   2
                                                     2 2
we have

                       fX jY (xjy) = fX;Y      (x; y)
                                            fY (y)
                                                                           2
                                     = p     1    p   1      ,
                                                           e 2(1, ) 
                                                                  1    1
                                                                           x,  y
                                                                                      :2   2
                                                                                           1                2
                                                                                                             1


                                            2 1 1 ,   2


In the x-variable, fX jY (xjy) is a normal density with mean  y and variance (1 ,  )1 . Therefore,
                                                                           1          2  2

                                                 Z1
                                                                           2



                                IE[X jY = y] =        xfX jY (xjy) dx = 2 y;
                                                                            1

                                                  ,1
                                      "       2                       #
                                         
                                 IE X ,  y Y = y
                                             1

                                           2
                                     Z 1  1 2
                                   =        x ,  y fX jY (xjy) dx
                                      ,1          2

                                   = (1 ,  )1 :
                                           2   2
CHAPTER 11. General Random Variables                                                                    129

From the above two formulas we have the formulas

                                                IE[X jY ] = 
                                                              Y;
                                                               1
                                                                                                        (7.3)
                                                                      2


                                       "                        #
                                          X , 
                                                     2
                                  IE           2
                                                 1
                                                   Y   Y = (1 , 2 ) 21:                               (7.4)


Taking expectations in (7.3) and (7.4) yields

                                             IEX = 
                                                     IEY = 0;
                                                      1
                                                                                                        (7.5)
                                                              2


                                        "                #
                                            X , 
                                                       2
                                   IE            2
                                                   1
                                                     Y   = (1 , 2 ) 21:                               (7.6)


Based on Y , the best estimator of X is 2 Y . This estimator is unbiased (has expected error zero) and the
                                            1


expected square error is (1 ,  ) 1. No other estimator based on Y can have a smaller expected square error
                               2   2

(Homework problem 2.1).



11.8 Multivariate Normal Distribution

Please see Oksendal Appendix A.
    X                                                                                 x
Let denote the column vector of random variables (X1; X2; : : : ; Xn )T , and the corresponding
column vector of values (x1 ; x2; : : : ; xn )T .     X
                                                  has a multivariate normal distribution if and only if
the random variables have the joint density
                                p
                        fX(x) = (2det A exp n, 1 (X , )T:A:(X , )o :
                                  )n=2        2

Here,
                        4                            4
                      =  (1 ; : : : ; n )T = IE X = (IEX1; : : : ; IEXn)T ;
and A is an n  n nonsingular matrix. A,1 is the covariance matrix
                                                  h                        i
                                    A,1 = IE (X , ):(X , )T ;
i.e. the (i; j )th element of A,1 is IE (Xi , i )(Xj , j ). The random variables in     X are independent
if and only if A,1 is diagonal, i.e.,

                                        A,1 = diag(21 ; 22; : : : ; 2n );
where  2j = IE (Xj , j )2 is the variance of Xj .
130

11.9 Bivariate normal distribution

Take n = 2 in the above definitions, and let

                                      =4 IE (X1 , 1)(X2 , 2) :
                                                            1 2
Thus,                                            "                         #
                                     A,1 =             21 1 2 ;
                                                     1 2 22
                                  2                                          3
                                                1             ,   (1 , ) 5
                                A=4         (1,2 )                                ;
                                             2                                  2
                                                                   1 2
                                         , 1 2 (1 ,2)               1
                                             1

                                                                  22 (1,2 )
                                      p
                                          det A =             p1           ;
                                                       12 1 , 2
and we have the formula from Example 11.1, adjusted to account for the possibly non-zero expec-
tations:
                                            (                     "                                   #)
fX ;X (x1; x2) =       1p      exp ,     1     (x1 , 1 )2 , 2(x1 , 1 )(x2 , 2 ) + (x2 , 2 )2          :
  1     2
                 212 1 , 2       2(1 , 2)     21               1 2                22

11.10 MGF of jointly normal random variables

Let   u= (u1; u2; : : : ; un )T denote a column vector with components in IR, and let have a    X
multivariate normal distribution with covariance matrix A,1 and mean vector . Then the moment
generating function is given by
                        Z1          Z1
            IEeu :X =                    eu :XfX1; X2; : : : ; Xn (x1; x2; : : : ; xn) dx1 : : :dxn
               T                           T
                              :::
                          ,1n       ,1                o
                    = exp       1 uT A,1 u + uT          :
                                2
If any n random variables X1 ; X2; : : : ; Xn have this moment generating function, then they are
jointly normal, and we can read out the means and covariances. The random variables are jointly
                                                              u
normal and independent if and only if for any real column vector = (u1 ; : : : ; un )T
                                      8n      9       8n                      9
                                      < X     =       < X                     =
                   IEeuT :X =4 IE exp : uj Xj ; = exp : [ 12 2j u2j + uj j ]; :
                                        j =1            j =1
Chapter 12

Semi-Continuous Models

12.1 Discrete-time Brownian Motion

Let fYj gnj=1 be a collection of independent, standard normal random variables defined on ( ; F ; P),
where PI is the market measure. As before we denote the column vector (Y1 ; : : : ; Yn )T by . We      Y
                                        u
therefore have for any real colum vector = (u1 ; : : : ; un )T ,
                                          8n      9       8n 9
                              T           < X     =       <X =
                          IEeu Y = IE exp : uj Yj ; = exp : 12 u2j ; :
                                            j =1           j =1
Define the discrete-time Brownian motion (See Fig. 12.1):
                                      B0 = 0;
                                                X
                                                k
                                     Bk =              Yj ; k = 1; : : : ; n:
                                                j =1
If we know Y1 ; Y2; : : : ; Yk , then we know B1 ; B2; : : : ; Bk . Conversely, if we know B1 ; B2; : : : ; Bk ,
then we know Y1 = B1 ; Y2 = B2 , B1 ; : : : ; Yk = Bk , Bk,1 . Define the filtration
                  F 0 = f; g;
                  F k = (Y1; Y2; : : : ; Yk ) = (B1; B2; : : : ; Bk ); k = 1; : : : ; n:
Theorem 1.34 fBk gnk=0 is a martingale (under IP).

Proof:
                                 IE [Bk+1 jF k ] = IE [Yk+1 + Bk jF k ]
                                                 = IEYk+1 + Bk
                                                 = Bk :


                                                       131
132

                     B
                      k
                                                 Y2
                                   Y1                                       Y4
                                                           Y3

                    0           1               2          3            4
                                            k



                           Figure 12.1: Discrete-time Brownian motion.


Theorem 1.35 fBk gnk=0 is a Markov process.

Proof: Note that
                            IE [h(Bk+1 )jF k ] = IE [h(Yk+1 + Bk )jF k ]:
Use the Independence Lemma. Define
                                             1  Z1             1
                     g(b) = IEh(Yk+1 + b) = p       h(y + b)e, 2 y dy:           2

                                              2 ,1
Then
                                   IE [h(Yk+1 + Bk )jF k ] = g (Bk );
which is a function of Bk alone.


12.2 The Stock Price Process

Given parameters:

     2 IR, the mean rate of return.
     > 0, the volatility.
    S0 > 0, the initial stock price.
The stock price process is then given by
                                        n                   o
                        Sk = S0 exp Bk + ( , 12 2 )k ; k = 0; : : : ; n:
Note that                                       n                       o
                             Sk+1 = Sk exp Yk+1 + ( , 21 2 ) ;
CHAPTER 12. Semi-Continuous Models                                                             133

                                                                     1
                           IE [Sk+1jF k ] = Sk IE [eYk+1 jF k ]:e, 2      2


                                                 1       1
                                          = Sk e 2  e, 2 
                                                         2       2



                                          = e Sk :
Thus
                                    IE [ Sk +1 jF k ]          Sk+1 
                             = log        Sk         = log IE S F k ;
                                                                  k
and                         Sk+1                                     
                                                      k+1 + ( , 21  )
                        var log     = var Y                         2      = 2:
                                  Sk

12.3 Remainder of the Market

The other processes in the market are defined as follows.
Money market process:
                                      Mk = erk ; k = 0; 1; : : : ; n:
Portfolio process:

       0; 1; : : : ; n,1;
       Each k is F k -measurable.
Wealth process:

       X0 given, nonrandom.
      
                                 Xk+1 = k Sk+1 + er (Xk , k Sk )
                                      = k (Sk+1 , er Sk ) + er Xk
       Each Xk is F k -measurable.
Discounted wealth process:

                               Xk+1
                                               
                                         Sk+1 Sk
                                                                
                                                     Xk
                               Mk+1 = k Mk+1 , Mk + Mk :

12.4 Risk-Neutral Measure

n o 12.1 Let IfP be a probability measure on (
Definition
 Sk n is a martingale under If               f
                                                     ; F ), equivalent to the market measure IP. If
 Mk k=0                      P , we say that IP is a risk-neutral measure.
134
                                                                                     n Xk on
Theorem 4.36 If If
                 P is a risk-neutral measure, then every discounted wealth process     Mk k=0 is
a martingale under If
                    P , regardless of the portfolio process used to generate it.
Proof:

                      X             S                     
                    f              f             S
                    IE Mk+1 F k = IE k Mk+1 , Mk + Mk F k
                         k +1              k +1    k      X k
                                       S               
                                       f               S
                                 = k IE Mk+1 F k , Mk + M
                                           k +1         k     Xk
                                                               k
                                          Xk :
                                        = M k




12.5 Risk-Neutral Pricing

Let Vn be the payoff at time n, and say it is F n -measurable. Note that Vn may be path-dependent.
Hedging a short position:

    Sell the simple European derivative security Vn.
    Receive X0 at time 0.
    Construct a portfolio process 0; : : : ; n,1 which starts with X0 and ends with Xn = Vn.
    If there is a risk-neutral measure IfP , then
                                           X0 = If  Xn = If
                                                   EM     EMVn :
                                                      n         n
Remark 12.1 Hedging in this “semi-continuous” model is usually not possible because there are
not enough trading dates. This difficulty will disappear when we go to the fully continuous model.


12.6 Arbitrage

Definition 12.2 An arbitrage is a portfolio which starts with X0 = 0 and ends with Xn satisfying

                                   IP (Xn  0) = 1; IP (Xn > 0) > 0:
(IP here is the market measure).

Theorem 6.37 (Fundamental Theorem of Asset Pricing: Easy part) If there is a risk-neutral mea-
sure, then there is no arbitrage.
CHAPTER 12. Semi-Continuous Models                                                             135

Proof: Let If                        on let X0 = 0, and let Xnfbe the final wealth corresponding
             P be a risk-neutralnmeasure,
                                  Xk      is a martingale under IP ,
to any portfolio process. Since
                                   Mk k=0
                                       If
                                        EMXn = If
                                                E MX = 0:
                                                     0
                                                                                              (6.1)
                                           n         0



Suppose IP (Xn  0) = 1. We have

       IP (Xn  0) = 1 =) IP (Xn < 0) = 0 =) If
                                              P (Xn < 0) = 0 =) If
                                                                 P (Xn  0) = 1:
                                                                                              (6.2)

(6.1) and (6.2) imply If
                       P (Xn = 0) = 1. We have
                   If
                    P (Xn = 0) = 1 =) If
                                       P (Xn > 0) = 0 =) IP (Xn > 0) = 0:
This is not an arbitrage.



12.7 Stalking the Risk-Neutral Measure

Recall that

    Y1; Y2; : : : ; Yn are independent, standard normal random variables on some probability space
     ( ; F ; P).
                      n                    o
    Sk = S0 exp Bk + ( , 12 2)k .
   
                                             n                                  o
                          Sk+1 = S0 exp  (Bk + Yk+1 ) + ( , 12  2)(k + 1)
                                             n                   o
                                 = Sk exp Yk+1 + ( , 12  2) :

                            Sk+1 = Sk : exp nYk+1 + ( , r , 1  2)o ;
Therefore,

                            Mk+1 Mk                           2

                              
                   Sk+1 F k = Sk :IE [exp fYk+1 gjF k ] : expf , r , 1  2g
               IE M  k+1              Mk                                       2
                                 = M  Sk : expf 1 2 g: expf , r , 1  2g
                                        k        2                   2
                                            S
                                 = e,r : Mkk :
If  = r, the market measure is risk neutral. If  6= r, we must seek further.
136



                         Sk+1 = Sk : exp nYk+1 + ( , r , 1  2 )o
                         Mk+1   Mk                         2
                                Sk : exp (Yk+1 + ,r ) , 1 2 o
                              = M
                                         n
                                  k                      2
                                         n             o
                                Sk : exp Y~k+1 , 1  2 ;
                              = M k               2
where
                                       Y~k+1 = Yk+1 + , r :
The quantity , r
               is denoted  and is called the market price of risk.
We want a probability measure If
                               P under which Y~1 ; : : : ; Y~n are independent, standard normal ran-
dom variables. Then we would have
                      S              h                i
                    f
                    IE M F k = M
                         k +1   Sk :If
                                     E expf Y~k+1 gjF k : expf, 21  2g
                         k+1                 k
                                      Sk : expf 1 2 g: expf, 1  2g
                                    = M k       2             2
                                      Sk :
                                    = M k
Cameron-Martin-Girsanov’s Idea: Define the random variable
                                          2n                3
                                           X
                                  Z = exp 4 (,Yj , 21  2 )5 :
                                                 j =1

Properties of Z :

    Z  0.
   
                                         8n       9              
                                         <X       =         n
                            IEZ = IE exp : (,Yj ); : exp , 2  2

                                       n j=1
                                                      
                                = exp  2 : exp , n  2 = 1:
                                        2          2
Define                                         Z
                                  If
                                   P (A) =           Z dIP 8A 2 F :
                                                 A
Then If
      P (A)  0 for all A 2 F and
                                        If
                                         P ( ) = IEZ = 1:
In other words, If
                 P is a probability measure.
CHAPTER 12. Semi-Continuous Models                                                         137

We show that If
              P is a risk-neutral measure. For this, it suffices to show that

                                 Y~ 1 = Y1 + ; : : : ; Y~n = Yn + 

are independent, standard normal under If
                                        P.
Verification:


    Y1; Y2; : : : ; Yn : Independent, standard normal under IP, and
                                           2n       3         2n 3
                                            X                   X
                                   IE exp 4 uj Yj 5 = exp 4 12 u2j 5 :
                                           j =1                  j =1


    Y~ = Y1 + ; : : : ; Y~n = Yn + :
    Z > 0 almost surely.
              h                     i
    Z = exp Pnj=1(,Yj , 12 2) ;
                                                  Z
                                      If
                                       P (A) =           Z dIP 8A 2 F ;
                                                    A

     If
      EX = IE (XZ ) for every random variable X .
    Compute the moment generating function of (Y~1; : : : ; Y~n ) under IfP :
                       2n       3          2n                                      3
                        X                   X                 X n
                If
                 E exp 4 uj Y~j 5 = IE exp 4 uj (Yj + ) + (,Yj , 12  2)5
                        j =1
                                           2j=1           3   j =1
                                                                    2n                 3
                                            Xn                       X
                                  = IE exp 4 (uj ,  )Yj 5 : exp 4 (uj  , 12  2 )5
                                        2 n j=1        3 2 nj=1                     3
                                         X                        X
                                  = exp 4 12 (uj ,  )25 : exp 4 (uj  , 21  2 )5
                                        2j=1
                                          n 
                                                                  j =1
                                                                                       3
                                         X                                           
                                  = exp 4 ( 12 u2j , uj  + 12 2 ) + (uj  , 12  2) 5
                                        2j=1     3
                                         Xn
                                  = exp 4 12 u2j 5 :
                                                  j =1
138

12.8 Pricing a European Call

Stock price at time n is
                                n                 o
                   Sn = S0 exp Bn + ( , 12  2)n
                                8 n                   9
                                < X                   =
                       = S0 exp : Yj + ( , 12  2 )n;
                                8 j=1                                      9
                                < X n                                      =
                       = S0 exp : (Yj + , r ) , ( , r)n + ( , 12  2)n;
                                8 j=1                  9
                                < X n                  =
                       = S0 exp : Y~j + (r , 12  2 )n; :
                                  j =1
Payoff at time n is (Sn , K )+ . Price at time zero is
                                2       0       8                     9      1+3
      If     , K )+ = IfE 4e,rn @S exp < X
       E (Sn M
                                          n                   =
                                            ~j + (r , 21  2)n , K A 5
                                            Y
               n
                                  0    :            j =1      ;
                               Z1              n               o     +
                                        S0 exp b + (r , 12 2 )n , K : p 1 e, n db
                                     ,rn                                           b 2
                           =        e                                              2 2
                               ,1                                             2n
                                    P
                               since j =1 Yj is normal with mean 0, variance n, under If
                                      n   ~                                            P.
This is the Black-Scholes price. It does not depend on .
Chapter 13

Brownian Motion

13.1 Symmetric Random Walk

Toss a fair coin infinitely many times. Define

                                               (
                                   Xj (!) = 1                if   ! j = H;
                                                   ,1        if   ! j = T:

Set


                                        M0 = 0
                                               X
                                               k
                                        Mk =          Xj ;        k  1:
                                               j =1



13.2 The Law of Large Numbers

We will use the method of moment generating functions to derive the Law of Large Numbers:



Theorem 2.38 (Law of Large Numbers:)


                               1 M !0                                 k!1:
                               k    k       almost surely, as


                                                      139
140

Proof:
                                        u 
                    'k (u) = IE exp k Mk
                                     8k     9
                                     <X u =
                            = IE exp : k Xj ;               (Def. of    M k :)
                                      j =1
                              Yk         u 
                            =     IE exp k Xj               (Independence of the Xj ’s)
                             j =1
                              u             u k
                            = 21 e k + 12 e, k ;
which implies,
                                         u         u   
                 log 'k (u) = k log 21 e k + 12 e, k
Let x = k1 . Then
                                                                
                                          log 12 eux + 12 e,ux
                 lim log 'k (u) = xlim
                 k!1                !0                  x
                                        u eux , u e,ux
                                 = xlim 2         2
                                     !0 12 eux + 12 e,ux               (L’Hôpital’s Rule)

                                 = 0:
Therefore,

                     lim ' (u) = e0 = 1;
                    k!1 k
which is the m.g.f. for the constant 0.



13.3 Central Limit Theorem

We use the method of moment generating functions to prove the Central Limit Theorem.
Theorem 3.39 (Central Limit Theorem)

                              p1 Mk ! Standard normal, as k!1:
                                k
Proof:
                                                          
                                    'k (u) = IE exp pu Mk
                                              1 pu 1k , pu k
                                           = 2e k + 2e k ;
CHAPTER 13. Brownian Motion                                                                            141

so that,

                                                            u         u    
                                 log 'k (u) = k log 12 e pk + 21 e, pk :

Let x = p1k . Then

                                                      
                                log 21 eux + 12 e,ux
      lim log 'k (u) = xlim
     k!1                 !0               x2
                                  u eux , u e,ux
                            !0 2x  12 eux + 12 e,ux 
                        = xlim    2         2                                   (L’Hôpital’s Rule)

                                     1                     u eux , u e,ux
                                                    2              2
                            !0 2 e + 21 e,ux : xlim
                        = xlim 1  ux             !0              2x
                                  u eux , u e,ux
                        = xlim    2        2
                            !0          2x
                                  u2 eux , u2 e,ux
                        = xlim     2         2
                            !0            2                                                           (L’Hôpital’s Rule)
                        = 12 u2 :

Therefore,

                  1 2
 lim ' (u) = e 2 u ;
k!1 k

which is the m.g.f. for a standard normal random variable.




13.4 Brownian Motion as a Limit of Random Walks

Let n be a positive integer. If t  0 is of the form nk , then set


                                    B (n) (t) = p1n Mtn = p1n Mk :

If t  0 is not of the form nk , then define B (n) (t) by linear interpolation (See Fig. 13.1).
Here are some properties of B (100)(t):
142




                               k/n                                      (k+1)/n
                         Figure 13.1: Linear Interpolation to define B (n) (t).



         Properties of   B (100)(1) :
                                        1    X
                                             100
                           B(100)(1) = 10           Xj              (Approximately normal)
                                          j =1
                                         1X
                         IEB (100)(1) = 10
                                          100
                                                    IEXj = 0:
                                           j =1

                    var(B (100)(1)) = 100 1 X100
                                                     var(Xj ) = 1
                                              j =1
         Properties of   B (100)(2) :
                                        1    X
                                             200
                           B(100)(2) = 10           Xj              (Approximately normal)
                                             j =1
                       IEB (100)(2) = 0:
                    var(B (100)(2)) = 2:
Also note that:

    B(100)(1) and B(100)(2) , B(100)(1) are independent.
    B(100)(t) is a continuous function of t.
To get Brownian motion, let n!1 in B (n) (t); t  0.


13.5 Brownian Motion

(Please refer to Oksendal, Chapter 2.)
CHAPTER 13. Brownian Motion                                                                  143



                                                                           B(t) = B(t,ω)


  ω                                                                                                 t


(Ω, F,P)
                          Figure 13.2: Continuous-time Brownian Motion.

A random variable B (t) (see Fig. 13.2) is called a Brownian Motion if it satisfies the following
properties:

   1. B (0) = 0,
   2. B (t) is a continuous function of t;
   3. B has independent, normally distributed increments: If
                                       0 = t0 < t1 < t2 < : : : < tn
      and
             Y1 = B(t1 ) , B (t0 ); Y2 = B(t2 ) , B(t1 ); : : : Yn = B(tn ) , B(tn,1 );
      then
          Y1; Y2; : : : ; Yn are independent,
          IEYj = 0 8j;
          var(Yj ) = tj , tj,1 8j:

13.6 Covariance of Brownian Motion

Let 0  s  t be given. Then B (s) and B (t) , B (s) are independent, so B (s) and B (t) =
(B (t) , B (s)) + B (s) are jointly normal. Moreover,
                               IEB (s) = 0; var(B(s)) = s;
                                IEB(t) = 0; var(B(t)) = t;
                         IEB(s)B (t) = IEB(s)[(B(t) , B(s)) + B(s)]
                                       | (s)(B{z(t) , B(s))} + IEB
                                     = IEB                         2
                                                               | {z(s)}
                                                    0                  s
                                       = s:
144

Thus for any s  0, t  0 (not necessarily s  t), we have

                                                     IEB(s)B(t) = s ^ t:

13.7 Finite-Dimensional Distributions of Brownian Motion

Let
                                                   0 < t1 < t2 < : : : < tn
be given. Then
                                                (B (t1 ); B (t2); : : : ; B (tn ))
is jointly normal with covariance matrix
                        2                                                                                                  3
                               IEB 2 (t1 ) IEB(t1)B(t2 ) : : : IEB(t1 )B (tn )
                        6 (t2 )B(t1) IEB2(t2) : : : IEB(t2 )B(tn )77
                  C = 664:IEB: : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : :75
                          IEB(tn)B (t1 ) IEB (tn )B(t2 ) : : : IEB 2 (tn )
                        2                                   3
                          t1 t1 : : : t1
                        6                                   7
                    = 664t: 1: : : t:2: : ::::::: : : t:2:775
                             t1 t2 : : : tn

13.8 Filtration generated by a Brownian Motion

                                                              fF (t)gt0
Required properties:

     For each t, B(t) is F (t)-measurable,
     For each t and for t < t1 < t2 <    < tn , the Brownian motion increments
                       B (t1) , B (t); B(t2 ) , B(t1 ); : : :; B(tn ) , B(tn,1 )
       are independent of F (t).

Here is one way to construct F (t). First fix t. Let s 2 [0; t] and C 2 B(IR) be given. Put the set

                                 fB(s) 2 C g = f! : B(s; !) 2 C g
in F (t). Do this for all possible numbers s 2 [0; t] and C 2 B(IR). Then put in every other set
required by the -algebra properties.
This F (t) contains exactly the information learned by observing the Brownian motion upto time t.
fF (t)gt0 is called the filtration generated by the Brownian motion.
CHAPTER 13. Brownian Motion                                                                 145

13.9 Martingale Property

Theorem 9.40 Brownian motion is a martingale.

Proof: Let 0  s  t be given. Then

                       IE [B(t)jF (s)] = IE [(B(t) , B(s)) + B(s)jF (s)]
                                       = IE [B (t) , B (s)] + B (s)
                                       = B (s):


Theorem 9.41 Let  2 IR be given. Then
                                            n                 o
                                 Z (t) = exp ,B(t) , 12 2 t
is a martingale.

Proof: Let 0  s  t be given. Then
                                                                                       
        IE [Z (t)jF (s)] = IE expf,(B(t) , B(s) + B(s)) , 12 2 ((t , s) + s)g F (s)
                                                                             
                      = IE Z (s) expf,(B (t) , B (s)) , 12 2 (t , s)g F (s)
                                h                                        i
                      = Z (s)IE expf,(B (t) , B (s)) , 12 2 (t , s)g
                                  n                                           o
                      = Z (s) exp 12 (,)2 var(B (t) , B (s)) , 12 2 (t , s)
                      = Z (s):



13.10 The Limit of a Binomial Model

Consider the n’th Binomial model with the following parameters:

    un = 1 + pn : “Up” factor. ( > 0).
    dn = 1 , pn : “Down” factor.
    r = 0.                p
    p~n = u1n,,ddnn = 2==pnn = 12 .
    q~n = 12 .
146

Let ]k (H ) denote the number of H in the first k tosses, and let ]k (T ) denote the number of T in the
first k tosses. Then
                                     ]k (H ) + ]k (T ) = k;
                                     ]k (H ) , ]k (T ) = Mk ;
which implies,

                                              ]k (H ) = 12 (k + Mk )
                                               ]k (T ) = 12 (k , Mk ):
                                                    (n) = 1. Let t = k for some k, and let
In the n’th model, take n steps per unit time. Set S0                  n
                                          
                                           2
                                             1 (nt+Mnt ) 
                                                               2  1 (nt,Mnt )
                      S (n)(t) = 1 + pn                     1 , pn               :
Under If
       P , the price process S (n) is a martingale.
Theorem 10.42 As n!1, the distribution of S (n) (t) converges to the distribution of
                                         expfB (t) , 12  2 tg;
where B is a Brownian motion. Note that the correction , 12 2 t is necessary in order to have a
martingale.

Proof: Recall that from the Taylor series we have
                                    log(1 + x) = x , 12 x2 + O(x3);
so
              log S (n)(t) = 21 (nt + Mnt ) log(1 + p ) + 12 (nt , Mnt ) log(1 , p )
                                                      n                               n
                                              
                          = nt 12 log(1 + p ) + 12 log(1 , p )   
                                               n                 n      
                            + Mnt 12 log(1 + p ) , 12 log(1 , p )
                                                   
                                                    n                  n        !
                                          1  2          1  2
                          = nt 2 pn , 4 n , 2 pn , 4 n + O(n )
                                  1                  1                   ,3 = 2

                                                    2                2                !
                                               1             1
                            + Mnt 12 pn , 4 n + 12 pn + 4 n + O(n )           ,3 = 2

                                              1
                          = , 12 2 t + O(n, 2 )
                                  1  1                       1
                            +  pn Mnt + n Mnt O(n, 2 )
                                 | {z } | {z }
                                   !Bt    !0
As n!1, the distribution of log S (n) (t) approaches the distribution of B (t) , 21  2t.
CHAPTER 13. Brownian Motion                                                                                    147



                                                                               B(t) = B(t,ω)

                                                          x
             ω                                                                                             t


         (Ω, F, Px)
                      Figure 13.3: Continuous-time Brownian Motion, starting at x 6= 0.

13.11 Starting at Points Other Than 0

(The remaining sections in this chapter were taught Dec 7.)
For a Brownian motion B (t) that starts at 0, we have:
                                             IP (B(0) = 0) = 1:
For a Brownian motion B (t) that starts at x, denote the corresponding probability measure by IP x
(See Fig. 13.3), and for such a Brownian motion we have:
                                            IP x (B(0) = x) = 1:
Note that:

    If x 6= 0, then IP x puts all its probability on a completely different set from IP.
    The distribution of B(t) under IP x is the same as the distribution of x + B(t) under IP.

13.12 Markov Property for Brownian Motion

We prove that

Theorem 12.43 Brownian motion has the Markov property.

Proof:
Let s  0;       t  0 be given (See Fig. 13.4).
                                         2                                                             3
                                       6                                                             7
             IE h(B (s + t)) F (s) = IE 64h( B
                                             | (s + t{z) , B(s)} +              B
                                                                                | {z(s)}       ) F (s)75
                                                   Independent of   F (s)   F (s)-measurable
148




                   B(s)

                                                 s                                s+t


                                           restart
                       Figure 13.4: Markov Property of Brownian Motion.


Use the Independence Lemma. Define

                       g(x) = IE [h( B (s + t) , B(s) + x )]
                                     2                                                      3
                                     6
                               = IE 64h( x +                   B (t)
                                                                                            7
                                                                                          )75
                                                               |{z}
                                               same distribution as B (s + t)   , B (s)
                               = IE xh(B (t)):
Then
                                                        
                           IE h (B(s + t) ) F (s) = g (B(s))
                                                  = E B (s)h(B (t)):


In fact Brownian motion has the strong Markov property.

Example 13.1 (Strong Markov Property) See Fig. 13.5. Fix x > 0 and define

                                     = min ft  0; B(t) = xg :
Then we have:
                                                    
                         IE h( B( + t) ) F () = g(B()) = IE x h(B(t)):
CHAPTER 13. Brownian Motion                                                                     149




                           x

                                                 τ                           τ+t

                                             restart
                       Figure 13.5: Strong Markov Property of Brownian Motion.


13.13 Transition Density

Let p(t; x; y ) be the probability that the Brownian motion changes value from x to y in time t, and
let  be defined as in the previous section.

                                       p(t; x; y) = p 1 e,
                                                                (y,x)2
                                                                  2t
                                                     2t
                                                        Z1
                               g(x) = IE xh(B(t)) =          h(y )p(t; x; y) dy:
                                                       ,1
                                                              Z1
                  IE h(B (s + t)) F (s) = g (B(s)) =                 h(y )p(t; B (s); y ) dy:
                                                               ,1
                                             Z1
                  IE h(B ( + t)) F ( ) =            h(y )p(t; x; y ) dy:
                                                 ,1

13.14 First Passage Time

Fix x > 0. Define
                                     = min ft  0; B (t) = xg :
Fix  > 0. Then                          n                               o
                                     exp B (t ^  ) , 12 2 (t ^  )
is a martingale, and
                                        n                              o
                                 IE exp B (t ^  ) , 12 2 (t ^  ) = 1:
150

We have
                                                     8
                                   n 12           o <e, 21       2
                                                                           if  < 1;
                            lim exp , 2  (t ^  ) = :
                           t!1
                                                                                          (14.1)
                                                          0                if  = 1;
                               0  expfB (t ^  ) , 12 2 (t ^  )g  ex :
Let t!1 in (14.1), using the Bounded Convergence Theorem, to get
                                       h                               i
                                   IE expfx , 12 2  g1f<1g = 1:
                    1
Let #0 to get IE f<1g = 1, so

                                               IP f < 1g = 1;
                                           IE expf, 12 2  g = e,x :                    (14.2)

Let    = 21 2 . We have the m.g.f.:
                                                       p
                                       IEe,  = e,x 2 ;                > 0:               (14.3)

Differentiation of (14.3) w.r.t.   yields

                                    ,IE e,   = , px2 e,x 2 :
                                                            p


Letting   #0, we obtain
                                                  IE = 1:                                (14.4)

Conclusion. Brownian motion reaches level x with probability 1. The expected time to reach level
x is infinite.
We use the Reflection Principle below (see Fig. 13.6).



                 IP f  t; B (t) < xg = IP fB (t) > xg
                            IP f  tg = IP f  t; B (t) < xg + IP f  t; B (t) > xg
                                       = IP fB (t) > xg + IP fB (t) > xg
                                       = 2IP fB (t) > xg
                                                  Z y 1
                                           = p2     e, t dy
                                                            2
                                                           2
                                              2t x
CHAPTER 13. Brownian Motion                                                                151


                                                                          shadow path


               x

                                      τ                              t

                                                                         Brownian motion
                       Figure 13.6: Reflection Principle in Brownian Motion.


Using the substitution z = pyt ;   dz = pdyt we get
                                                  Z1
                           IP f  tg = p2               e, z dz:
                                                              2
                                                              2
                                             2 px
                                                    t
Density:
                                        @ IP f  tg = p x e, x t ;
                               f (t) = @t
                                                                               2
                                                                               2
                                                        2t3
which follows from the fact that if
                                                        Zb
                                          F (t) =            g (z ) dz;
                                                    a(t)
then
                                          @F = , @a g (a(t)):
                                          @t     @t
Laplace transform formula:
                                            Z1                             p
                                IEe,  =         e, tf (t)dt = e,x 2 :
                                            0
152
Chapter 14

The Itô Integral

The following chapters deal with Stochastic Differential Equations in Finance. References:

   1. B. Oksendal, Stochastic Differential Equations, Springer-Verlag,1995
   2. J. Hull, Options, Futures and other Derivative Securities, Prentice Hall, 1993.



14.1 Brownian Motion

(See Fig. 13.3.) ( ; F ; P) is given, always in the background, even when not explicitly mentioned.
Brownian motion, B (t; ! ) : [0; 1)  !IR, has the following properties:

   1. B (0) = 0; Technically, IP f! ; B (0; !) = 0g = 1,
   2. B (t) is a continuous function of t,
   3. If 0 = t0  t1  : : :  tn , then the increments

                                 B (t1) , B(t0 ); : : : ; B(tn ) , B(tn,1 )
      are independent,normal, and

                                    IE [B (tk+1 ) , B(tk )] = 0;
                                   IE [B (tk+1 ) , B(tk )]2 = tk+1 , tk :

14.2 First Variation

Quadratic variation is a measure of volatility. First we will consider first variation, FV (f ), of a
function f (t).

                                                 153
154


                           f(t)


                                                     t2
                                                                                        t
                                  t                                        T
                                   1


                                   Figure 14.1: Example function f (t).


For the function pictured in Fig. 14.1, the first variation over the interval [0; T ] is given by:

                  FV[0;T ](f ) = [f (t1) , f (0)] , [f (t2) , f (t1 )] + [f (T ) , f (t2 )]
                                   Zt  1      Zt2        ZT
                               = f (t) dt + (,f (t)) dt + f 0(t) dt:
                                   0              0
                                0             t1         t2
                                ZT
                               = jf 0(t)j dt:
                                   0
Thus, first variation measures the total amount of up and down motion of the path.
The general definition of first variation is as follows:

Definition 14.1 (First Variation) Let  = ft0 ; t1 ; : : : ; tn g be a partition of [0; T ], i.e.,

                                           0 = t0  t1  : : :  tn = T:
The mesh of the partition is defined to be

                                           jjjj = k=0max     (t , t ):
                                                      ;:::;n,1 k+1 k
We then define
                                                          nX
                                                           ,1
                              FV[0;T ](f ) = jjlim
                                                 jj!0
                                                                jf (tk+1) , f (tk )j:
                                                          k=0
Suppose f is differentiable. Then the Mean Value Theorem implies that in each subinterval [tk ; tk+1 ],
there is a point tk such that

                                  f (tk+1 ) , f (tk ) = f 0 (tk )(tk+1 , tk ):
CHAPTER 14. The Itô Integral                                                                        155

Then
                           nX
                            ,1                               nX
                                                              ,1
                                 jf (tk+1) , f (tk )j =            jf 0(tk )j(tk+1 , tk );
                           k=0                               k=0
and
                                                         nX
                                                          ,1
                             FV[0;T ](f ) = jjlim
                                                jj!0
                                                               jf 0(tk )j(tk+1 , tk )
                                                         k=0
                                               ZT
                                            = jf 0 (t)j dt:
                                               0

14.3 Quadratic Variation

Definition 14.2 (Quadratic Variation) The quadratic variation of a function f on an interval [0; T ]
is
                                                       nX
                                                        ,1
                                 hf i(T ) = jjlim
                                                jj!0
                                                             jf (tk+1 ) , f (tk )j2:
                                                       k=0
Remark 14.1 (Quadratic Variation of Differentiable Functions) If f is differentiable, then hf i(T ) =
0, because
              nX
               ,1                             nX
                                               ,1
                    jf (tk+1) , f (tk )j2 =         jf 0(tk )j2(tk+1 , tk )2
              k=0                             k=0
                                                      nX
                                                       ,1
                                            jjjj:         jf 0(tk )j2(tk+1 , tk )
                                                      k=0
and
                                                                           nX
                                                                            ,1
                                  hf i(T )  jjlim
                                                 jj!0
                                                      jjjj: jjlim
                                                                 jj!0 k=0
                                                                          jf 0(tk )j2(tk+1 , tk )
                                                           ZT
                                           = lim jjjj jf 0(t)j2 dt
                                             jjjj!0
                                                            0
                                           = 0:
Theorem 3.44

                                                   hBi(T ) = T;
or more precisely,
                                    IP f! 2 ; hB(:; !)i(T ) = T g = 1:
In particular, the paths of Brownian motion are not differentiable.
156

Proof: (Outline) Let  = ft0 ; t1; : : : ; tn g be a partition of [0; T ]. To simplify notation, set Dk =
B(tk+1 ) , B (tk ). Define the sample quadratic variation
                                                             nX
                                                              ,1
                                                    Q =           Dk2 :
                                                             k=0
Then
                                                     nX
                                                      ,1
                                       Q , T =            [Dk2 , (tk+1 , tk )]:
                                                     k=0
We want to show that
                                                  lim (Q , T ) = 0:
                                                jjjj!0 
Consider an individual summand

                        Dk2 , (tk+1 , tk ) = [B(tk+1 ) , B (tk )]2 , (tk+1 , tk ):
This has expectation 0, so
                                                      nX
                                                       ,1
                              IE (Q , T ) = IE              [Dk2 , (tk+1 , tk )] = 0:
                                                       k=0
For j 6= k, the terms
                                   Dj2 , (tj+1 , tj ) and Dk2 , (tk+1 , tk )
are independent, so
                            nX
                             ,1
       var(Q , T ) =              var[Dk2 , (tk+1 , tk )]
                             k=0
                            nX,1
                        =          IE [Dk4 , 2(tk+1 , tk )Dk2 + (tk+1 , tk )2]
                             k=0
                            nX,1
                        =          [3(tk+1 , tk )2 , 2(tk+1 , tk )2 + (tk+1 , tk )2 ]
                            k=0
                              (if X is normal with mean 0 and variance  2, then IE (X 4) = 3 4)
                             nX
                              ,1
                        =2          (tk+1 , tk )2
                             k=0
                                      nX
                                       ,1
                         2jjjj            (tk+1 , tk )
                                      k=0
                        = 2jjjj T:
Thus we have

                                               IE (Q , T ) = 0;
                                              var(Q , T )  2jjjj:T:
CHAPTER 14. The Itô Integral                                                                   157

As jjjj!0, var(Q , T )!0, so

                                            lim (Q , T ) = 0:
                                          jjjj!0 


Remark 14.2 (Differential Representation) We know that

                           IE [(B(tk+1 ) , B(tk ))2 , (tk+1 , tk )] = 0:
We showed above that

                    var[(B (tk+1 ) , B (tk ))2 , (tk+1 , tk )] = 2(tk+1 , tk )2 :
When (tk+1 , tk ) is small, (tk+1 , tk )2 is very small, and we have the approximate equation

                                  (B (tk+1 ) , B (tk ))2 ' tk+1 , tk ;
which we can write informally as
                                           dB(t) dB(t) = dt:

14.4 Quadratic Variation as Absolute Volatility

On any time interval [T1; T2], we can sample the Brownian motion at times

                                   T1 = t0  t1  : : :  tn = T2
and compute the squared sample absolute volatility

                                      1     nX
                                             ,1
                                  T2 , T1 k=0(B(tk+1 ) , B(tk )) :
                                                                   2


This is approximately equal to
                             1      [hB i(T2) , hB i(T1 )] = T2 , T1 = 1:
                         T2 , T1                               T2 , T1
As we increase the number of sample points, this approximation becomes exact. In other words,
Brownian motion has absolute volatility 1.
Furthermore, consider the equation
                                                  ZT
                                 hBi(T ) = T = 1 dt;           8T  0:
                                                  0
This says that quadratic variation for Brownian motion accumulates at rate 1 at all times along
almost every path.
158

14.5 Construction of the Itô Integral

The integrator is Brownian motion B (t); t  0, with associated filtration F (t); t  0, and the
following properties:

   1. s  t=) every set in F (s) is also in F (t),
   2. B (t) is F (t)-measurable, 8t,
   3. For t  t1  : : :  tn , the increments B (t1 ) , B (t); B (t2 ) , B (t1 ); : : : ; B (tn ) , B (tn,1 )
      are independent of F (t).

The integrand is  (t); t  0, where

   1.  (t) is F (t)-measurable 8t (i.e.,  is adapted)
   2.  is square-integrable:
                                                    ZT
                                              IE  2(t) dt < 1;               8T:
                                                    0
We want to define the Itô Integral:

                                                Zt
                                      I (t) =           (u) dB (u);       t  0:
                                                0
Remark 14.3 (Integral w.r.t. a differentiable function) If f (t) is a differentiable function, then

                                      Zt                      Zt
we can define

                                           (u) df (u) =            (u)f 0(u) du:
                                                               0
                                      0
This won’t work when the integrator is Brownian motion, because the paths of Brownian motion
are not differentiable.


14.6 Itô integral of an elementary integrand

Let  = ft0 ; t1; : : : ; tn g be a partition of [0; T ], i.e.,

                                           0 = t0  t1  : : :  tn = T:
Assume that  (t) is constant on each subinterval [tk ; tk+1 ] (see Fig. 14.2). We call such a  an
elementary process.
The functions B (t) and  (tk ) can be interpreted as follows:

     Think of B(t) as the price per unit share of an asset at time t.
CHAPTER 14. The Itô Integral                                                                        159


                                    δ( t ) = δ( t 1 )
                                                                    δ( t )= δ( t 3 )
                 δ( t ) = δ( t )
                              0



                0=t0            t1                 t2                t3              t4 = T

                                                  δ( t ) = δ( t 2 )

                                Figure 14.2: An elementary function  .


     Think of t0; t1; : : : ; tn as the trading dates for the asset.
     Think of (tk ) as the number of shares of the asset acquired at trading date tk and held until
      trading date tk+1 .

Then the Itô integral I (t) can be interpreted as the gain from trading at time t; this gain is given by:
          8
          >
          > (t0 )[B(t) , B    | ({zt0)} ];                                          0  t  t1
          <                   =B (0)=0
  I (t) = >
          >  ( t )[ B ( t ) , B(t )] + (t )[B(t) , B(t )];                         t tt
          :(t00)[B(t11) , B(t00)] + (t11)[B(t2) , B(1t1 )] + (t2)[B(t) , B(t2)]; t12  t  t23:
In general, if tk  t  tk+1 ,

                                kX
                                 ,1
                       I (t) =  (tj )[B (tj +1 ) , B(tj )] + (tk )[B(t) , B(tk )]:
                             j =0


14.7 Properties of the Itô integral of an elementary process

Adaptedness For each t; I (t) is F (t)-measurable.

Linearity If
                                       Zt                                 Zt
                             I (t) = (u) dB(u);                J (t) =        (u) dB (u)
                                       0                                  0
      then                                             Zt
                                     I (t)  J (t) =        ( (u)  (u)) dB (u)
                                                        0
160

                                               s                                  t
                                       t            t l+1   .....         t           t
                                           l                                  k           k+1

                              Figure 14.3: Showing s and t in different partitions.


        and
                                                                Zt
                                                     cI (t) =        c(u)dB (u):
                                                                0

Martingale I (t) is a martingale.


We prove the martingale property for the elementary process case.

Theorem 7.45 (Martingale Property)

                    kX
                     ,1
          I (t) =           (tj )[B (tj +1 ) , B(tj )] +  (tk )[B (t) , B(tk )];              tk  t  tk+1
                    j =0

is a martingale.

Proof: Let 0  s  t be given. We treat the more difficult case that s and t are in different
subintervals, i.e., there are partition points t` and tk such that s 2 [t` ; t`+1 ] and t 2 [tk ; tk+1 ] (See
Fig. 14.3).
Write

                              `X
                               ,1
                   I (t) =           (tj )[B(tj+1 ) , B (tj )] +  (t` )[B (t`+1 ) , B(t` )]
                              j =0
                                       kX
                                        ,1
                                +              (tj )[B(tj +1 ) , B (tj )] +  (tk )[B(t) , B(tk )]
                                      j =`+1

We compute conditional expectations:
                 2`,1                              3 `,1
                  X                                    X
              IE 4 (tj )(B (tj+1 ) , B(tj )) F (s)5 =  (tj )(B(tj +1 ) , B(tj )):
                  j =0
                                                   j=0
                  IE (t`)(B(t`+1 ) , B(t` )) F (s) = (t` ) (IE [B(t`+1 )jF (s)] , B(t` ))
                                                     =  (t` )[B (s) , B (t` )]
CHAPTER 14. The Itô Integral                                                                             161

These first two terms add up to I (s). We show that the third and fourth terms are zero.
   2 k,1                                   3 k,1                                                           
   4   X                                   5      X
IE          (tj )(B(tj+1 ) , B(tj )) F (s) =         IE IE  (tj )(B(tj+1 ) , B(tj )) F (tj ) F (s)
     j =`+1                                    j =`+1
                                                          2                                                  3
                                                 kX
                                                  ,1
                                             =        IE 64(tj ) (|IE [B (tj +1)jF{z(tj )] , B(tj ))} F (s)75
                                               j =`+1                              =0
                                                   2                                             3
                                          
           IE (tk )(B(t) , B(tk )) F (s) = IE 64(tk ) (|IE [B(t)jF ({ztk )] , B (tk ))} F (s)75
                                                                                        =0


Theorem 7.46 (Itô Isometry)
                                                                  Zt
                                           IEI 2(t) = IE                 2(u) du:
                                                                    0
Proof: To simplify notation, assume t = tk , so
                                                  X
                                                  k
                                    I (t) =
                                                  j =0           | (tj+1){z, B(tj )}]
                                                          (tj )[B
                                                                           Dj
Each Dj has expectation 0, and different Dj are independent.
                                   0k         12
                                    X
                         I 2 (t) = @ (tj )Dj A
                                   j =0
                                X k             X
                               =  2(tj )Dj2 + 2  (ti ) (tj )DiDj :
                                j =0            i<j
Since the cross terms have expectation zero,
                                   X
                                   k
                      IEI 2(t) =          IE [ 2(tj )Dj2]
                                   j =0
                                   X k                                                     
                               =          IE 2(tj )IE (B(tj+1 ) , B (tj ))2 F (tj )
                                   j =0
                                   X k
                               =          IE 2(tj )(tj +1 , tj )
                                   j =0
                                      k tZj
                                      X           +1

                               = IE                     2 (u) du
                                      j =0 tj
                                      Zt
                               = IE         2  (u) du
                                          0
162

                                                                         path of δ
                                         path of δ
                                                          4




                                  t1               t2               t3           t4 = T
                0=t0

      Figure 14.4: Approximating a general process by an elementary process 4 , over [0; T ].




14.8 Itô integral of a general integrand

Fix T > 0. Let  be a process (not necessarily an elementary process) such that

    (t) is F (t)-measurable, 8t 2 [0; T ],
    IE R0T 2(t) dt < 1:
Theorem 8.47 There is a sequence of elementary processes fn g1
                                                              n=1 such that
                                           ZT
                                   !1 IE
                                  nlim          jn(t) , (t)j2 dt = 0:
                                            0

Proof: Fig. 14.4 shows the main idea.



In the last section we have defined
                                                   ZT
                                       In (T ) =        n (t) dB (t)
                                                   0
for every n. We now define
                             ZT                            ZT
                                   (t) dB(t) = nlim
                                                 !1               n(t) dB(t):
                              0                               0
CHAPTER 14. The Itô Integral                                                                                         163

The only difficulty with this approach is that we need to make sure the above limit exists. Suppose
n and m are large positive integers. Then
                                             ZT                                        !2
             var(In (T ) , Im (T )) = IE                 [n (t) , m (t)] dB (t)
                                             0
                                           ZT
                   (Itô Isometry:) = IE             [n (t) , m (t)]2 dt
                                             0
                                           ZT
                                   = IE              [ jn (t) ,  (t)j + j (t) , m (t)j ]2 dt
                                             0
                                             ZT                                         ZT
       ((a + b)2  2a2 + 2b2 :)  2IE                    jn(t) , (t)j2 dt + 2IE               jm(t) , (t)j2 dt;
                                                 0                                          0
which is small. This guarantees that the sequence fIn (T )g1
                                                           n=1 has a limit.

14.9 Properties of the (general) Itô integral

                                                          Zt
                                          I (t) =              (u) dB (u):
                                                           0
Here  is any adapted, square-integrable process.

Adaptedness. For each t, I (t) is F (t)-measurable.

Linearity. If
                                     Zt                                           Zt
                             I (t) = (u) dB(u);                        J (t) =        (u) dB (u)
                                     0                                            0
      then                                                     Zt
                                   I (t)  J (t) =                  ( (u)  (u)) dB (u)
                                                               0
      and                                                      Zt
                                             cI (t) =                c(u)dB (u):
                                                                0
Martingale. I (t) is a martingale.

Continuity. I (t) is a continuous function of the upper limit of integration t.
                               R
Itô Isometry. IEI 2(t) = IE 0t  2 (u) du.

Example 14.1 () Consider the Itô integral
                                                 ZT
                                                          B(u) dB(u):
                                                     0

We approximate the integrand as shown in Fig. 14.5
164




                                            T/4              2T/4                   3T/4             T



                 Figure 14.5: Approximating the integrand B (u) with 4 , over [0; T ].



                                            8
                                            >
                                            > B(0) = 0 if 0  u < T=n;
                                            <B(T=n)    if T=n  u < 2T=n;
                                   n (u) = >: : :
                                            :  n, T 
                                            >
                                              B ( T1)      n, T
                                                                  if
                                                                         (
                                                                              n
                                                                               1)
                                                                                      u < T:
By definition,
                 ZT                               X  kT   (k + 1)T 
                                                  n,1                                             
                          B(u) dB(u) = nlim
                                        !1            B n                B           n        , B kT
                                                                                                   n :
                  0                               k=0

To simplify notation, we denote                              
                                                     Bk =4 B kT
                                                              n ;
so
                                    ZT                             X
                                                                   n,1
                                         B(u) dB(u) = nlim
                                                       !1                 Bk (Bk+1 , Bk ):
                                     0                             k=0
We compute

                          X
                          n,1                        X
                                                     n,1               X
                                                                       n,1                    X
                                                                                              n,1
                      1
                      2
                                (Bk+1 , Bk )2 = 12         Bk2+1 ,           Bk Bk+1 + 12           Bk2
                          k=0                        k=0               k=0                    k=0
                                                              X
                                                              n,1              X
                                                                               n,1                   X
                                                                                                     n,1
                                              = 12 Bn2 + 12            Bj2 ,         Bk Bk+1 + 21          Bk2
                                                              j =0             k=0                   k=0
                                                            X
                                                            n,1              X
                                                                             n,1
                                              = 12 Bn2 +          Bk2 ,             Bk Bk+1
                                                            k=0              k=0
                                                            X
                                                            n,1
                                              = 12 Bn2 ,          Bk (Bk+1 , Bk ):
                                                            k=0
CHAPTER 14. The Itô Integral                                                                                       165

Therefore,
                           X
                           n,1                                             X
                                                                           n,1
                                 Bk (Bk+1 , Bk ) = 12 Bn2 , 12                  (Bk+1 , Bk )2 ;
                           k=0                                             k=0
or equivalently

       X  kT   (k + 1)T 
       n,1                                         kT                              X   (k + 1)T  k 
                                                                                      n,1                   2
           B n        B          n           ,B n             = B (T) ,
                                                                   1
                                                                   2
                                                                       2          1
                                                                                  2
                                                                                            B     n     T       :
       k=0                                                                            k=0

Let n!1 and use the definition of quadratic variation to get
                                      ZT
                                              B(u) dB(u) = 12 B 2 (T) , 12 T:
                                         0




Remark 14.4 (Reason for the 12 T term) If f is differentiable with f (0) = 0, then
                                     ZT                           ZT
                                             f (u) df (u) =            f (u)f 0 (u) du
                                     0                             0
                                                                            T
                                                           = 12 f 2 (u)
                                                                            0
                                                           = 12 f 2 (T ):
In contrast, for Brownian motion, we have
                                     ZT
                                             B (u)dB (u) = 12 B 2(T ) , 21 T:
                                      0
The extra term 12 T comes from the nonzero quadratic variation of Brownian motion. It has to be
there, because         Z    T
                      IE        B (u) dB (u) = 0                  (Itô integral is a martingale)
                           0
but
                                                  IE 12 B 2 (T ) = 21 T:

14.10 Quadratic variation of an Itô integral

Theorem 10.48 (Quadratic variation of Itô integral) Let
                                                         Zt
                                               I (t) =        (u) dB (u):
                                                         0
Then                                                         Zt
                                               hI i(t) =           2(u) du:
                                                              0
166

This holds even if  is not an elementary process. The quadratic variation formula says that at each
time u, the instantaneous absolute volatility of I is  2 (u). This is the absolute volatility of the
Brownian motion scaled by the size of the position (i.e.  (t)) in the Brownian motion. Informally,
we can write the quadratic variation formula in differential form as follows:

                                         dI (t) dI (t) =  2(t) dt:
Compare this with
                                           dB(t) dB(t) = dt:
Proof: (For an elementary process  ). Let  = ft0 ; t1; : : : ; tn g be the partition for  , i.e.,  (t) =
 (tk ) for tk  t  tk+1 . To simplify notation, assume t = tn . We have
                                              nX
                                               ,1
                                  hI i(t) =         [hI i(tk+1 ) , hI i(tk )] :
                                              k=0
Let us compute hI i(tk+1) , hI i(tk ). Let  = fs0; s1 ; : : : ; sm g be a partition

                                   tk = s0  s1  : : :  sm = tk+1 :
Then
                                                        sZj+1
                             I (sj+1 ) , I (sj ) =              (tk ) dB(u)
                                                        sj
                                                  =  (tk ) [B (sj +1 ) , B (sj )] ;
so
                                                    mX
                                                     ,1
                       hI i(tk+1) , hI i(tk) =               [I (sj +1 ) , I (sj )]2
                                                    j =0
                                                                 mX
                                                                  ,1
                                               =  2 (tk )             [B (sj +1 ) , B (sj )]2
                                                      j =0
                                              jjjj!0 2(tk )(tk+1 , tk ):
                                              ,,,,,!
It follows that
                                                  nX
                                                   ,1
                                    hI i(t) =           2(tk )(tk+1 , tk )
                                                   k=0
                                                  nX,1 tZk+1
                                              =                  2 (u) du
                                                  k=0 tk
                                                                Zt
                                           ,jj,,,,,
                                               jj!!
                                                   0
                                                                 0
                                                                      2(u) du:
Chapter 15

Itô’s Formula

15.1 Itô’s formula for one Brownian motion

We want a rule to “differentiate” expressions of the form f (B (t)), where f (x) is a differentiable
function. If B (t) were also differentiable, then the ordinary chain rule would give

                                        d f (B(t)) = f 0 (B(t))B0 (t);
                                        dt
which could be written in differential notation as

                                        df (B(t)) = f 0 (B(t))B0 (t) dt
                                                  = f 0 (B (t))dB (t)

However, B (t) is not differentiable, and in particular has nonzero quadratic variation, so the correct
formula has an extra term, namely,

                       df (B(t)) = f 0(B(t)) dB(t) + 12 f 00 (B(t)) |{z}
                                                                     dt :
                                                                           dB (t) dB (t)
This is Itô’s formula in differential form. Integrating this, we obtain Itô’s formula in integral form:
                                             Zt                            Zt
                 f (B(t)) , f| (B{z(0))} =        f 0 (B (u)) dB(u) + 21        f 00 (B (u)) du:
                                              0                             0
                                f (0)

Remark 15.1 (Differential vs. Integral Forms) The mathematically meaningful form of Itô’s for-
mula is Itô’s formula in integral form:

                                             Zt                            Zt
                 f (B(t)) , f (B (0)) =           f 0 (B(u)) dB (u) + 1          00
                                                                      2 0 f (B (u)) du:
                                              0
                                                      167
168

This is because we have solid definitions for both integrals appearing on the right-hand side. The
first,
                                              Zt
                                                    f 0(B(u)) dB (u)
                                                0
is an Itô integral, defined in the previous chapter. The second,
                                                Zt
                                                        f 00 (B (u)) du;
                                                    0
is a Riemann integral, the type used in freshman calculus.
For paper and pencil computations, the more convenient form of Itô’s rule is Itô’s formula in differ-
ential form:
                           df (B (t)) = f 0 (B(t)) dB(t) + 21 f 00 (B(t)) dt:
There is an intuitive meaning but no solid definition for the terms df (B (t)); dB (t) and dt appearing
in this formula. This formula becomes mathematically respectable only after we integrate it.



15.2 Derivation of Itô’s formula

Consider f (x) = 12 x2 , so that
                                           f 0 (x) = x; f 00 (x) = 1:
 Let xk ; xk+1 be numbers. Taylor’s formula implies

                 f (xk+1 ) , f (xk ) = (xk+1 , xk )f 0(xk ) + 12 (xk+1 , xk )2f 00 (xk ):
In this case, Taylor’s formula to second order is exact because f is a quadratic function.
In the general case, the above equation is only approximate, and the error is of the order of (xk+1 ,
xk )3. The total error will have limit zero in the last step of the following argument.
Fix T > 0 and let  = ft0 ; t1; : : : ; tn g be a partition of [0; T ]. Using Taylor’s formula, we write:

           f (B(T )) , f (B(0))
            = 12 B 2 (T ) , 21 B 2 (0)
                nX
                 ,1
            =         [f (B (tk+1 )) , f (B (tk ))]
                k=0
                nX
                 ,1                                                nX
                                                                    ,1
            =         [B (tk+1 ) , B (tk )] f 0 (B (tk )) + 12           [B (tk+1 ) , B (tk )]2 f 00(B (tk ))
                k=0                                                k=0
                nX
                 ,1                                          nX
                                                              ,1
            =         B(tk ) [B(tk+1 ) , B(tk )] + 12              [B (tk+1 ) , B (tk )]2 :
                k=0                                          k=0
CHAPTER 15. Itô’s Formula                                                                169

We let jjjj!0 to obtain
                                          ZT
                f (B(T )) , f (B(0)) =               B(u) dB (u) + 12 h|B{z
                                                                         i(T })
                                             0
                                                                 T
                                          ZT                      ZT
                                        = f 0 (B (u)) dB (u) + 12 f| 00(B{z(u))} du:
                                         0                         0
                                                                         1
This is Itô’s formula in integral form for the special case
                                                 f (x) = 12 x2 :

15.3 Geometric Brownian motion

                                                      n                      o
Definition 15.1 (Geometric Brownian Motion) Geometric Brownian motion is
                               S (t) = S (0) exp B(t) +  , 12  2 t ;
where  and  > 0 are constant.


                                                 n                      o
Define
                        f (t; x) = S (0) exp x +  , 21  2 t ;
so

                           S (t) = f (t; B (t)):
Then
                                                
                               ft =  , 12  2 f; fx = f; fxx =  2f:
According to Itô’s formula,

                         dS (t) = df (t; B(t))
                                = ft dt + fx dB + 21 fxx dBdB
                                                         | {z }
                                                        dt
                                 = ( , 2  )f dt + f dB + 21 2 f dt
                                        1  2
                                 = S (t)dt + S (t) dB (t)
Thus, Geometric Brownian motion in differential form is

                         dS (t) = S (t)dt + S (t) dB (t);
and Geometric Brownian motion in integral form is
                                             Zt                      Zt
                           S (t) = S (0) +           S (u) du +          S (u) dB(u):
                                                 0                   0
170

15.4 Quadratic variation of geometric Brownian motion

In the integral form of Geometric Brownian motion,
                                            Zt                    Zt
                          S (t) = S (0) +        S (u) du +            S (u) dB(u);
                                            0                       0
the Riemann integral
                                                    Zt
                                         F (t) =            S (u) du
                                                        0
is differentiable with F 0 (t) = S (t). This term has zero quadratic variation. The Itô integral
                                                  Zt
                                       G(t) =           S (u) dB (u)
                                                    0
is not differentiable. It has quadratic variation
                                                    Zt
                                       hGi(t) =             2 S 2(u) du:
                                                        0
Thus the quadratic variation of S is given by the quadratic variation of G. In differential notation,
we write
                       dS (t) dS (t) = (S (t)dt + S (t)dB(t))2 =  2S 2(t) dt

15.5 Volatility of Geometric Brownian motion

Fix 0  T1  T2 . Let  = ft0 ; : : : ; tn g be a partition of [T1; T2]. The squared absolute sample
volatility of S on [T1; T2] is

                         1    nX
                               ,1
                                                     2      1   ZT2
                     T2 , T1 k=0 [S (tk+1) , S (tk )] ' T2 , T1  S (u) du
                                                                    2 2
                                                                T1
                                                       '  S (T1)
                                                          2 2

As T2 # T1 , the above approximation becomes exact. In other words, the instantaneous relative
volatility of S is 2 . This is usually called simply the volatility of S .


15.6 First derivation of the Black-Scholes formula

Wealth of an investor. An investor begins with nonrandom initial wealth X0 and at each time t,
holds (t) shares of stock. Stock is modelled by a geometric Brownian motion:

                                    dS (t) = S (t)dt + S (t)dB(t):
CHAPTER 15. Itô’s Formula                                                                           171

(t) can be random, but must be adapted. The investor finances his investing by borrowing or
lending at interest rate r.
Let X (t) denote the wealth of the investor at time t. Then
                dX (t) = (t)dS (t) + r [X (t) , (t)S (t)] dt
                       = (t) [S (t)dt + S (t)dB (t)] + r [X (t) , (t)S (t)] dt
                       = rX (t)dt + (t)S (t) (| {z, r)} dt + (t)S (t)dB(t):
                                                   Risk premium

Value of an option. Consider an European option which pays g (S (T )) at time T . Let v (t; x) denote
the value of this option at time t if the stock price is S (t) = x. In other words, the value of the
option at each time t 2 [0; T ] is
                                               v (t; S (t)):
The differential of this value is
                       dv (t; S (t)) = vt dt + vx dS + 12 vxxdS dS
                                     = vt dt + vx [S dt + S dB ] + 12 vxx 2 S 2 dt
                                       h                           i
                                     = vt + Svx + 21  2 S 2vxx dt + SvxdB
A hedging portfolio starts with some initial wealth X0 and invests so that the wealth X (t) at each
time tracks v (t; S (t)). We saw above that
                               dX (t) = [rX + ( , r)S ] dt + S dB:
To ensure that X (t) = v (t; S (t)) for all t, we equate coefficients in their differentials. Equating the
dB coefficients, we obtain the -hedging rule:
                                             (t) = vx (t; S (t)):
Equating the dt coefficients, we obtain:
                              vt + Svx + 12  2 S 2vxx = rX + ( , r)S:
But we have set  = vx , and we are seeking to cause X to agree with v . Making these substitutions,
we obtain
                            vt + Svx + 21  2S 2vxx = rv + vx ( , r)S;
(where v = v (t; S (t)) and S = S (t)) which simplifies to
                                    vt + rSvx + 12 2 S 2vxx = rv:
In conclusion, we should let v be the solution to the Black-Scholes partial differential equation
                         vt(t; x) + rxvx (t; x) + 21  2 x2vxx(t; x) = rv (t; x)
satisfying the terminal condition
                                            v(T; x) = g (x):
If an investor starts with X0 = v (0; S (0)) and uses the hedge (t) = vx (t; S (t)), then he will have
X (t) = v(t; S (t)) for all t, and in particular, X (T ) = g (S (T )).
172

15.7 Mean and variance of the Cox-Ingersoll-Ross process

The Cox-Ingersoll-Ross model for interest rates is
                                                                   q
                                dr(t) = a(b , cr(t))dt +  r(t) dB (t);
where a; b; c;  and r(0) are positive constants. In integral form, this equation is
                                         Zt                            Z tq
                       r(t) = r(0) + a (b , cr(u)) du +                   r(u) dB(u):
                                     0                         0
We apply Itô’s formula to compute dr (t). This is df (r(t)), where f (x) = x2 . We obtain
                                     2

      dr2(t) = df (r(t))
             = f 0 (r(t)) dr(t) + 21 f 00(r(t)) dr(t) dr(t)
                                             q                                        q        2
             = 2r(t) a(b , cr(t)) dt +  r(t) dB (t) + a(b , cr(t)) dt +  r(t) dB (t)
             = 2abr(t) dt , 2acr2(t) dt + 2r (t) dB (t) + 2 r(t) dt
                                                    3
                                                    2


             = (2ab + 2 )r(t) dt , 2acr2(t) dt + 2r (t) dB (t)
                                                               3
                                                               2



The mean of r(t). The integral form of the CIR equation is
                                         Zt                            Z tq
                       r(t) = r(0) + a (b , cr(u)) du +                   r(u) dB(u):
                                          0                            0
Taking expectations and remembering that the expectation of an Itô integral is zero, we obtain
                                                        Zt
                                 IEr(t) = r(0) + a (b , cIEr(u)) du:
                                                         0
Differentiation yields
                               d
                               dt IEr(t) = a(b , cIEr(t)) = ab , acIEr(t);
which implies that
                          d heactIEr(t)i = eact acIEr(t) + d IEr(t) = eactab:
                          dt                                dt
Integration yields                                      Zt
                            eact IEr(t) , r(0) = ab          eacu du = cb (eact , 1):
                                                        0
We solve for IEr(t):                                            
                                    IEr(t) = bc + e,act r(0) , bc :
If r(0) = cb , then IEr(t) = bc for every t. If r(0) 6= cb , then r(t) exhibits mean reversion:

                                               lim IEr ( t ) = b:
                                              t!1                  c
CHAPTER 15. Itô’s Formula                                                                         173

Variance of r(t). The integral form of the equation derived earlier for dr2(t) is
                                     Zt                   Zt                   Zt
       r2 (t) = r2(0) + (2ab + 2)        r(u) du , 2ac        r2(u) du + 2        r (u) dB(u):
                                                                                     3
                                                                                     2
                                      0                    0                    0
Taking expectations, we obtain
                                                 Zt                     Zt
               IEr2(t) = r2(0) + (2ab +  2)          IEr(u) du , 2ac        IEr2(u) du:
                                                  0                     0
Differentiation yields
                            d IEr2(t) = (2ab +  2)IEr(t) , 2acIEr2(t);
                            dt
which implies that
                       d e2actIEr2(t) = e2act 2acIEr2(t) + d IEr2(t)
                       dt                                     dt
                                          2 act       2
                                       = e (2ab +  )IEr(t):
Using the formula already derived for IEr(t) and integrating the last equation, after considerable
algebra we obtain
                                                                  !
              IEr2(t) = b
                              2
                                + b2 + r(0) , b        2 + 2b e,act
                           2ac2 c2             c        ac c
                                            
                                           b 2 2                 2b       
                                 + r(0) ,              ,                       ,2act
                                                                 ac 2c , r(0) e :
                                                         2 act
                                             c     ac e        +
             var r(t) = IEr2(t) , (IEr(t))2
                           b 2         b  2       2b    
                         = 2ac2 + r(0) , c ac e + ac 2c , r(0) e,2act :
                                                ,act


15.8 Multidimensional Brownian Motion

Definition 15.2 (d-dimensional Brownian Motion) A d-dimensional Brownian Motion is a pro-
cess
                                    B (t) = (B1 (t); : : : ; Bd (t))
with the following properties:

    Each Bk (t) is a one-dimensional Brownian motion;
    If i 6= j , then the processes Bi(t) and Bj (t) are independent.
Associated with a d-dimensional Brownian motion, we have a filtration fF (t)g such that

    For each t, the random vector B(t) is F (t)-measurable;
    For each t  t1  : : :  tn , the vector increments
                                  B(t1 ) , B(t); : : : ; B(tn) , B(tn,1 )
     are independent of F (t).
174

15.9 Cross-variations of Brownian motions

Because each component Bi is a one-dimensional Brownian motion, we have the informal equation

                                                dBi(t) dBi (t) = dt:
However, we have:

Theorem 9.49 If i 6= j ,
                                                 dBi(t) dBj (t) = 0
Proof: Let  = ft0 ; : : : ; tn g be a partition of [0; T ]. For i 6= j , define the sample cross variation
of Bi and Bj on [0; T ] to be
                                   nX
                                    ,1
                            C =          [Bi (tk+1 ) , Bi (tk )] [Bj (tk+1 ) , Bj (tk )] :
                                   k=0
The increments appearing on the right-hand side of the above equation are all independent of one
another and all have mean zero. Therefore,

                                                     IEC = 0:
   We compute var(C). First note that
            ,1
           nX                          2                         2
  C2 =           Bi (tk+1 ) , Bi(tk ) Bj (tk+1) , Bj (tk )
           k=0
           nX
            ,1
      +2         [Bi (t`+1 ) , Bi (t` )][Bj (t`+1 ) , Bj (t` )] : [Bi (tk+1 ) , Bi (tk )] [Bj (tk+1 ) , Bj (tk )]
           `<k
All the increments appearing in the sum of cross terms are independent of one another and have
mean zero. Therefore,

                     var(C ) = IEC2
                                       nX
                                        ,1
                                = IE         [Bi (tk+1 ) , Bi (tk )]2 [Bj (tk+1 ) , Bj (tk )]2 :
                                       k=0
But [Bi (tk+1 ) , Bi (tk )]2 and [Bj (tk+1 ) , Bj (tk )]2 are independent of one another, and each has
expectation (tk+1 , tk ). It follows that
                                    nX
                                     ,1                           nX
                                                                   ,1
                      var(C ) =          (tk+1 , tk )2  jjjj         (tk+1 , tk ) = jjjj:T:
                                    k=0                           k=0
As jjjj!0, we have var(C )!0, so C converges to the constant IEC = 0.
CHAPTER 15. Itô’s Formula                                                                                175

15.10 Multi-dimensional Itô formula

To keep the notation as simple as possible, we write the Itô formula for two processes driven by a
two-dimensional Brownian motion. The formula generalizes to any number of processes driven by
a Brownian motion of any number (not necessarily the same number) of dimensions.
Let X and Y be processes of the form
                                     Zt                  Zt                       Zt
                   X (t) = X (0) +            (u) du +         11(u) dB1(u) +          12 (u) dB2(u);
                                     Z0   t              Z0t                      Z0t
                   Y (t) = Y (0) +            (u) du +         21 (u) dB1(u) +         22 (u) dB2(u):
                                      0                   0                        0
Such processes, consisting of a nonrandom initial condition, plus a Riemann integral, plus one or
more Itô integrals, are called semimartingales. The integrands (u); (u); and ij (u) can be any
adapted processes. The adaptedness of the integrands guarantees that X and Y are also adapted. In
differential notation, we write
                              dX = dt + 11 dB1 + 12 dB2 ;
                              dY = dt + 21 dB1 + 22 dB2:
Given these two semimartingales X and Y , the quadratic and cross variations are:


                    dX dX = ( dt + 11 dB1 + 12 dB2)2;
                             2 dB dB +2  dB dB + 2 dB dB
                          = 11 | 1{z 1} 11 12 | 1{z 2} 12 | 2{z 2}
                                     dt                0                                dt
                               2     2   2
                           = (11 + 12 ) dt;
                     dY dY = ( dt + 21 dB1 + 22 dB2 )2
                               2 +  2 )2 dt;
                           = (21    22
                     dX dY = ( dt + 11 dB1 + 12 dB2)(                 dt + 21 dB1 + 22 dB2 )
                           = (1121 + 1222 ) dt
Let f (t; x; y ) be a function of three variables, and let X (t) and Y (t) be semimartingales. Then we
have the corresponding Itô formula:
  df (t; x; y) = ft dt + fx dX + fy dY + 21 [fxx dX dX + 2fxy dX dY + fyy dY dY ] :
In integral form, with X and Y as decribed earlier and with all the variables filled in, this equation
is
     f (t; X (t); Y (t)) , f (0; X (0); Y (0))
         Zt
      = [ft + fx + fy + 12 (11       2 +  2 )f + (  +   )f + 1 ( 2 +  2 )f ] du
                                             12 xx   11 21 12 22 xy 2 21     22 yy
         0Z                                      Zt
               t
       +           [11 fx + 21 fy ] dB1 +           [12 fx + 22 fy ] dB2 ;
              0                                   0
where f = f (u; X (u); Y (u), for i; j 2 f1; 2g, ij = ij (u), and Bi = Bi (u).
176
Chapter 16

Markov processes and the Kolmogorov
equations

16.1 Stochastic Differential Equations

Consider the stochastic differential equation:

                                  dX (t) = a(t; X (t)) dt + (t; X (t)) dB(t):                    (SDE)

Here a(t; x) and  (t; x) are given functions, usually assumed to be continuous in (t; x) and Lips-
chitz continuous in x,i.e., there is a constant L such that

                      ja(t; x) , a(t; y)j  Ljx , yj;          j(t; x) , (t; y)j  Ljx , yj
for all t; x; y .
Let (t0 ; x) be given. A solution to (SDE) with the initial condition (t0; x) is a process fX (t)gtt0
satisfying

                    X (t0) = x;
                                      Zt                       Zt
                     X (t) = X (t0) + a(s; X (s)) ds + (s; X (s)) dB(s);                t  t0
                                      t0                       t0
The solution process fX (t)gtt0 will be adapted to the filtration fF (t)gt0 generated by the Brow-
nian motion. If you know the path of the Brownian motion up to time t, then you can evaluate
X (t).
Example 16.1 (Drifted Brownian motion) Let a be a constant and  = 1, so

                                             dX(t) = a dt + dB(t):
If (t0 ; x) is given and we start with the initial condition
                                                    X(t0 ) = x;
                                                        177
178

then
                           X(t) = x + a(t , t0) + (B(t) , B(t0 ));             t  t0:
To compute the differential w.r.t. t, treat t0 and B(t0 ) as constants:

                                              dX(t) = a dt + dB(t):



Example 16.2 (Geometric Brownian motion) Let r and  be constants. Consider

                                       dX(t) = rX(t) dt + X(t) dB(t):
Given the initial condition
                                                   X(t0 ) = x;
the solution is
                                          
                         X(t) = x exp (B(t) , B(t0 )) + (r , 12 2 )(t , t0) :
Again, to compute the differential w.r.t. t, treat t0 and B(t0 ) as constants:

                        dX(t) = (r , 12 2)X(t) dt + X(t) dB(t) + 12 2 X(t) dt
                              = rX(t) dt + X(t) dB(t):




16.2 Markov Property

Let 0  t0 < t1 be given and let h(y ) be a function. Denote by

                                                 IE t ;x h(X (t1))
                                                    0




the expectation of h(X (t1)), given that X (t0) = x. Now let  2 IR be given, and start with initial
condition
                                                   X (0) = :
We have the Markov property
                                                       
                              IE 0; h(X (t1)) F (t0)       = IE t ;X (t ) h(X (t1)):
                                                                  0    0




In other words, if you observe the path of the driving Brownian motion from time 0 to time t0 , and
based on this information, you want to estimate h(X (t1)), the only relevant information is the value
of X (t0). You imagine starting the (SDE ) at time t0 at value X (t0), and compute the expected
value of h(X (t1)).
CHAPTER 16. Markov processes and the Kolmogorov equations                                               179

16.3 Transition density

Denote by
                                             p(t0 ; t1; x; y)
the density (in the y variable) of X (t1), conditioned on X (t0) = x. In other words,
                                                      Z
                                IE t ;xh(X (t1)) =
                                   0
                                                               h(y )p(t0; t1; x; y ) dy:
                                                          IR
The Markov property says that for 0  t0  t1 and for every  ,
                                                     Z
                      IE 0; h(X (t1)) F (t0 ) =                    h(y )p(t0; t1; X (t0); y ) dy:
                                                               IR
Example 16.3 (Drifted Brownian motion) Consider the SDE

                                               dX(t) = a dt + dB(t):
Conditioned on X(t0 ) = x, the random variable X(t1 ) is normal with mean x + a(t1 , t0 ) and variance
(t1 , t0 ), i.e.,                                         (y , (x + a(t1 , t0)))2 
                    p(t0; t1; x; y) = p    1        exp ,                                :
                                       2(t1 , t0)                 2(t1 , t0 )
Note that p depends on t0 and t1 only through their difference t1 , t0 . This is always the case when a(t; x)
and (t; x) don’t depend on t.


Example 16.4 (Geometric Brownian motion) Recall that the solution to the SDE

                                        dX(t) = rX(t) dt + X(t) dB(t);
with initial condition X(t0 ) = x, is Geometric Brownian motion:
                                           
                       X(t1 ) = x exp (B(t1 ) , B(t0 )) + (r , 21 2 )(t1 , t0) :
The random variable B(t1 ) , B(t0 ) has density
                                                                            
                    IP fB(t1 ) , B(t0 ) 2 dbg = p 1          exp , 2(t b, t ) db;
                                                                        2

                                                 2(t1 , t0)          1    0


and we are making the change of variable
                                                 
                                       y = x exp b + (r , 12  2)(t1 , t0 )
or equivalently,
                                             h                              i
                                       b = 1 log xy , (r , 12  2)(t1 , t0) :
The derivative is
                                 dy = y;          or equivalently,
                                                                                   dy :
                                                                              db = y
                                 db
180

Therefore,
           p(t0 ; t1; x; y) dy = IP fX(t1 ) 2 dyg
                                                                   h                               i2
                               = p 1              exp , 2(t ,1 t )2 log xy , (r , 12 2 )(t1 , t0 ) dy:
                                  y 2(t1 , t0)           1    0

Using the transition density and a fair amount of calculus, one can compute the expected payoff from a
European call:
                                                  Z1
                        IE t;x (X(T )   , K) =
                                            +
                                                       (y , K)+ p(t; T; x; y) dy
                                                   0
                                                                         h x                               i
                                                = e (T ,t) xN p 1
                                                   r                       log K + r(T , t) + 21  2(T , t)
                                                              1 T , ht x                                i
                                                     , KN p              log K + r(T , t) , 12 2 (T , t)
                                                              T ,t
where
                                                   Z 1               Z1 1
                                         N() = p1     e, 2 x dx = p1     e, 2 x dx:
                                                                  2                         2

                                                 2 ,1              2 ,
Therefore,
                                           
IE   0;
            e,r(T ,t) (X(T ) , K)+ F (t) = e,r(T ,t) IE t;X (t) (X(T) , K)+
                                                        1          X(t)                        
                                                = X(t)N p           log   + r(T , t) +  (T , t)1   2
                                                             T , t K                         2
                                                                                                                      
                                                    , e,r(T ,t) K N     1
                                                                        p      X(t)
                                                                                  log K + r(T , t) ,  (T , t)
                                                                                                          1   2
                                                                        T ,t                             2




16.4 The Kolmogorov Backward Equation

Consider
                                     dX (t) = a(t; X (t)) dt + (t; X (t)) dB(t);
and let p(t0; t1 ; x; y ) be the transition density. Then the Kolmogorov Backward Equation is:
                                                                                        2
               , @t@ p(t0; t1; x; y) = a(t0; x) @x
                                                @ p(t ; t ; x; y) + 1  2(t ; x) @ p(t ; t ; x; y ):
                                                     0 1            2      0 @x2 0 1
                    0                                                                                         (KBE)
The variables t0 and x in (KBE ) are called the backward variables.
In the case that a and  are functions of x alone, p(t0; t1 ; x; y ) depends on t0 and t1 only through
their difference  = t1 , t0 . We then write p( ; x; y ) rather than p(t0 ; t1; x; y ), and (KBE )
becomes
                           @ p( ; x; y) = a(x) @ p( ; x; y ) + 1  2(x) @ 2 p( ; x; y ):
                           @                  @x                2       @x2                               (KBE’)
CHAPTER 16. Markov processes and the Kolmogorov equations                                    181

Example 16.5 (Drifted Brownian motion)

                      dX(t) = a dt + dB(t)
                                  1         (y , (x + a))2 
                  p(; x; y) = p exp ,                 2         :
                                 2                               
                   @ p = p = @ p 1 exp , (y , x , a)2
                           
                  @             @ 2
                                      @ (y , x , a)2  21             (y , x , a)2 
                                 , @                       p     exp    ,
                                1 a(y , x , a) (y , x , a)  2
                                                 2           2
                             = , 2 +                    +      2 2      p:
                   @ p = p = y , x , a p:
                           x
                  @x                 
                @ 2 p = p =  @ y , x , a  p + y , x , a p
                          xx                                          x
               @x2               @x                         
                             = , 1 p + (y , x ,2 a) p:
                                                      2




Therefore,
                                                                    
               apx + 21 pxx = a(y , x , a) , 21 + (y , x2,2 a) p
                                                                   2




                           = p :
This is the Kolmogorov backward equation.

Example 16.6 (Geometric Brownian motion)

                                       dX(t) = rX(t) dt + X(t) dB(t):
                                           1
                                                        1 h y             i2
                        p(; x; y) = p exp , 22 log x , (r , 2  ) :1 2
                                       y 2
It is true but very tedious to verify that p satisfies the KBE

                                              p = rxpx + 21 2x2 pxx:



16.5 Connection between stochastic calculus and KBE

Consider

                              dX (t) = a(X (t)) dt +  (X (t)) dB(t):                       (5.1)

Let h(y ) be a function, and define

                                      v (t; x) = IE t;xh(X (T ));
182

where 0  t  T . Then
                                              Z
                                 v(t; x) = h(y ) p(T , t; x; y ) dy;
                                                   Z
                                 vt(t; x) = , h(y ) p (T , t; x; y ) dy;
                                              Z
                                vx(t; x) = h(y ) px(T , t; x; y) dy;
                                              Z
                               vxx(t; x) = h(y ) pxx(T , t; x; y ) dy:
Therefore, the Kolmogorov backward equation implies

     vt(t; x) +Za(x)vx(t; x) + 12 2 (x)vxx(t; x) =
                      h                                                                      i
                 h(y ) ,p (T , t; x; y ) + a(x)px(T , t; x; y ) + 12  2(x)pxx(T , t; x; y ) dy = 0
Let (0;  ) be an initial condition for the SDE (5.1). We simplify notation by writing IE rather than
IE 0;.
Theorem 5.50 Starting at X (0) =  , the process v (t; X (t)) satisfies the martingale property:
                                              
                       IE v (t; X (t)) F (s) = v (s; X (s));            0  s  t  T:

Proof: According to the Markov property,
                                       
                    IE h(X (T )) F (t) = IE t;X (t)h(X (T )) = v (t; X (t));
so
                                                                              
                    IE [v (t; X (t))jF(s)] = IE IE h(X (T )) F (t) F (s)
                                                                   
                                            = IE h(X (T )) F (s)
                                            = IE s;X (s)h(X (T ))       (Markov property)
                                            = v (s; X (s)):


Itô’s formula implies

     dv(t; X (t)) = vt dt + vxdX + 12 vxx dX dX
                  = vt dt + avx dt + vx dB + 21 2 vxx dt:
CHAPTER 16. Markov processes and the Kolmogorov equations                                            183

In integral form, we have

   v (t; X (t)) = v(0; X (0))
                       Z th                                                            i
                    + vt (u; X (u)) + a(X (u))vx(u; X (u)) + 12 2 (X (u))vxx(u; X (u)) du
                         Z0t
                     +         (X (u))vx(u; X (u)) dB (u):
                          0
                                                          R        h                  i
We know that v (t; X (t)) is a martingale, so the integral 0t vt + avx + 12  2 vxx       du must be zero
for all t. This implies that the integrand is zero; hence

                                           vt + avx + 12  2 vxx = 0:
Thus by two different arguments, one based on the Kolmogorov backward equation, and the other
based on Itô’s formula, we have come to the same conclusion.

Theorem 5.51 (Feynman-Kac) Define

                                 v(t; x) = IE t;xh(X (T ));        0  t  T;
where
                                  dX (t) = a(X (t)) dt +  (X (t)) dB(t):
Then

                               vt(t; x) + a(x)vx(t; x) + 12 2 (x)vxx(t; x) = 0                     (FK)

and
                                                v (T; x) = h(x):
The Black-Scholes equation is a special case of this theorem, as we show in the next section.

Remark 16.1 (Derivation of KBE) We plunked down the Kolmogorov backward equation with-
out any justification. In fact, one can use Itô’s formula to prove the Feynman-Kac Theorem, and use
the Feynman-Kac Theorem to derive the Kolmogorov backward equation.


16.6 Black-Scholes

Consider the SDE
                                       dS (t) = rS (t) dt + S (t) dB (t):
With initial condition
                                                   S (t) = x;
the solution is
                                   n                                         o
                  S (u) = x exp (B (u) , B(t)) + (r , 12 2 )(u , t) ;           u  t:
184

Define

                   v(t; x) = IE t;xh(S (T ))
                                         n                                   o
                           = IEh x exp (B (T ) , B (t)) + (r , 12  2)(T , t) ;
where h is a function to be specified later.
Recall the Independence Lemma: If G is a  -field, X is G -measurable, and Y is independent of G ,
then
                           
            IE h(X; Y ) G = (X );
where

                          (x) = IEh(x; Y ):
With geometric Brownian motion, for 0  t  T , we have
                                            n                   o
                         S (t) = S (0) exp B(t) + (r , 12  2)t ;
                                          n                        o
                        S (T ) = S (0) exp B(T ) + (r , 12  2 )T
                                                n                                        o
                               = S|{z} (t) exp  (B (T ) , B (t)) + (r , 21  2 )(T , t)
                                 F (t)-measurable
                                                    |               {z                   }
                                                            independent of   F (t)
We thus have

                        S (T ) = XY;
where

                           X = S (t)
                                    n                                   o
                           Y = exp (B(T ) , B(t)) + (r , 12 2 )(T , t) :
Now

                     IEh(xY ) = v(t; x):
The independence lemma implies
                           
         IE h(S (T )) F (t) = IE [h(XY )jF (t)]
                            = v (t; X )
                            = v (t; S (t)):
CHAPTER 16. Markov processes and the Kolmogorov equations                                             185

We have shown that
                                                              
                          v(t; S (t)) = IE h(S (T )) F (t) ;           0  t  T:
Note that the random variable h(S (T )) whose conditional expectation is being computed does not
depend on t. Because of this, the tower property implies that v (t; S (t)); 0  t  T , is a martingale:
For 0  s  t  T ,
                                                                               
                      IE v (t; S (t)) F (s) = IE IE h(S (T )) F (t) F (s)
                                                                      
                                                   = IE h(S (T )) F (s)
                                                   = v (s; S (s)):
This is a special case of Theorem 5.51.
Because v (t; S (t)) is a martingale, the sum of the dt terms in dv (t; S (t)) must be 0. By Itô’s
formula,
                             h                                                            i
            dv (t; S (t)) = vt(t; S (t)) dt + rS (t)vx(t; S (t)) + 21 2 S 2(t)vxx(t; S (t)) dt
                          + S (t)vx(t; S (t)) dB (t):
This leads us to the equation

                vt(t; x) + rxvx(t; x) + 12  2x2vxx(t; x) = 0;            0  t < T; x  0:
This is a special case of Theorem 5.51 (Feynman-Kac).
Along with the above partial differential equation, we have the terminal condition

                                 v(T; x) = h(x); x  0:
Furthermore, if S (t) = 0 for some t 2 [0; T ], then also S (T ) = 0. This gives us the boundary
condition
                                       v(t; 0) = h(0);        0  t  T:
Finally, we shall eventually see that the value at time t of a contingent claim paying h(S (T )) is

                                 u(t; x) = e,r(T ,t) IE t;xh(S (T ))
                                         = e,r(T ,t) v (t; x)
at time t if S (t) = x. Therefore,

                               v(t; x) = er(T ,t)u(t; x);
                              vt(t; x) = ,rer(T ,t)u(t; x) + er(T ,t)ut(t; x);
                              vx(t; x) = er(T ,t)ux(t; x);
                             vxx(t; x) = er(T ,t)uxx(t; x):
186

Plugging these formulas into the partial differential equation for v and cancelling the er(T ,t) ap-
pearing in every term, we obtain the Black-Scholes partial differential equation:

        ,ru(t; x) + ut(t; x) + rxux(t; x) + 12 2x2uxx(t; x) = 0;             0  t < T; x  0:
                                                                                                  (BS)

Compare this with the earlier derivation of the Black-Scholes PDE in Section 15.6.
In terms of the transition density
                                               (      y                        2            )
       p(t; T ; x; y ) = p   1                 1
                                     exp , 2(T , t)2 log x , (r , 2  )(T , t)
                                                                   1  2
                        y 2(T , t)
for geometric Brownian motion (See Example 16.4), we have the “stochastic representation”


                              u(t; x) = e,r(T ,t)IE t;xh(S (T ))
                                                  Z1                                              (SR)

                                      = e,r(T ,t)      h(y )p(t; T ; x; y) dy:
                                                   0
In the case of a call,
                                            h(y ) = (y , K )+
and
                                 x                            
  u(t; x) = x N
                    T ,t
                         p1   log K + r(T , t) + 2  (T , t)
                                                     1 2
                                                   1  x                                       
                              ,e  , r ( T , t ) KN p        log K + r(T , t) , 2  (T , t)
                                                                                    1   2
                                                    T ,t
Even if h(y ) is some other function (e.g., h(y ) = (K , y )+ , a put), u(t; x) is still given by and
satisfies the Black-Scholes PDE (BS) derived above.


16.7 Black-Scholes with price-dependent volatility

                                  dS (t) = rS (t) dt + (S (t)) dB(t);
                                 v(t; x) = e,r(T ,t) IE t;x(S (T ) , K )+ :
The Feynman-Kac Theorem now implies that

        ,rv(t; x) + vt(t; x) + rxvx(t; x) + 12 2(x)vxx(t; x) = 0;             0  t < T; x > 0:
v also satisfies the terminal condition
                                    v(T; x) = (x , K )+;         x  0;
CHAPTER 16. Markov processes and the Kolmogorov equations                                    187

and the boundary condition
                                  v(t; 0) = 0;      0  t  T:
An example of such a process is the following from J.C. Cox, Notes on options pricing I: Constant
elasticity of variance diffusions, Working Paper, Stanford University, 1975:

                               dS (t) = rS (t) dt + S  (t) dB(t);
where 0   < 1. The “volatility” S ,1(t) decreases with increasing stock price. The corre-
sponding Black-Scholes equation is

                  ,rv + vt + rxvx + 12 2x2 vxx = 0;      0  t < T x > 0;
                                           v (t; 0) = 0; 0  t  T
                                          v (T; x) = (x , K )+ ; x  0:
188
Chapter 17

Girsanov’s theorem and the risk-neutral
measure

(Please see Oksendal, 4th ed., pp 145–151.)

Theorem 0.52 (Girsanov, One-dimensional) Let B (t); 0  t  T , be a Brownian motion on
a probability space ( ; F ; P). Let F (t); 0  t  T , be the accompanying filtration, and let
(t); 0  t  T , be a process adapted to this filtration. For 0  t  T , define
                                  Zt
                       Be (t) =        (u) du + B(t);
                                  0
                                   Zt               Zt      
                       Z (t) = exp , (u) dB (u) , 2  (u) du ;
                                                   1    2
                                            0                             0
and define a new probability measure by
                                            Z
                               If
                                P (A) =             Z (T ) dIP;          8A 2 F :
                                                A
Under If
       P , the process Be (t); 0  t  T , is a Brownian motion.
Caveat: This theorem requires a technical condition on the size of . If
                                            ( ZT                     )
                                   IE exp       1
                                                2 0      2 (u) du       < 1;
everything is OK.
We make the following remarks:

Z (t) is a matingale. In fact,
                dZ (t) = ,(t)Z (t) dB(t) + 21 2 (t)Z (t) dB(t) dB(t) , 12 2 (t)Z (t) dt
                       = ,(t)Z (t) dB (t):

                                                        189
190

If
 P is a probability measure. Since Z (0) = 1, we have IEZ (t) = 1 for every t  0. In particular
                                         Z
                               If
                                P ( ) = Z (T ) dIP = IEZ (T ) = 1;
      so If
          P is a probability measure.
If
 E in terms of IE . Let If
                         E denote expectation under If P . If X is a random variable, then
                                             If
                                              EZ = IE [Z (T )X ] :
       To see this, consider first the case X = 1A , where A 2 F . We have
                                        Z              Z
                     If
                      EX = IfP (A) = Z (T ) dIP = Z (T )1A dIP = IE [Z (T )X ] :
                                        A
      Now use Williams’ “standard machine”.
If
 P and IP . The intuition behind the formulaZ
                                   If
                                    P (A) = Z (T ) dIP           8A 2 F
                                                 A
      is that we want to have
                                            If
                                             P (!) = Z (T; !)IP (!);
      but since IP (! ) = 0 and If
                                 P (!) = 0, this doesn’t really tell us anything useful about If
                                                                                               P . Thus,
      we consider subsets of , rather than individual elements of .
                e (T ). If  is constant, then
Distribution of B
                                                     n                 o
                                     Z (T ) = exp ,B (T ) , 12 2 T
                                     Be (T ) = T + B(T ):
    Under IP , B (T ) is normal with mean 0 and variance T , so Be (T ) is normal with mean T and
    variance T :                                           ( ~
                                                  1          ( b ,  T ) 2)
                           IP (Be (T ) 2 d~b) = p exp , 2T                   d~b:
                                                  2T
Removal of Drift from B  e (T ). The change of measure from IP to IfP removes the drift from Be (T ).
      To see this, we compute
                    If
                     EBe (T ) = IE [Z (T )(T + B (T ))]
                                   h n                   o              i
                              = IE exp ,B (T ) , 21 2 T (T + B (T ))
                                   Z1                                       2    (       )
                           = p1        (T + b) expf,b , 21 2 T g exp , 2bT db
                                2T ,1
                                   Z1              (              2)
                           =p   1                     (
                                       (T + b) exp , 2Tb + T  )    db
                                2T ,1
                                   Z1       ( 2)
              (y = T + b) = p  1      y exp , y2 dy (Substitute y = T + b)
                                2T ,1
                           = 0:
CHAPTER 17. Girsanov’s theorem and the risk-neutral measure                                     191

      We can also see that If
                            E Be (T ) = 0 by arguing directly from the density formula
                       ne          o           ~        (           )
                    IP B (t) 2 db = p 1 exp , (b ,2TT ) d~b:
                                                        2
                                  ~
                                     2T
Because

                               Z (T ) = expf,B (T ) , 21 2 T g
                                      = expf,(Be (T ) , T ) , 12 2 T g
                                      = expf,Be (T ) + 12 2 T g;
we have
                      n             o       n               o   n            o
                   If
                    P Be (T ) 2 d~b = IP Be (T ) 2 d~b exp ,~b + 21 2 T
                                                  ( ~                       )
                                    =p  1             ( b , T ) 2
                                             exp , 2T , b + 2  T d~b:
                                                                   ~    1 2
                                        2T
                                                  ( ~2 )
                                    =p  1    exp , 2bT d~b:
                                        2T
      Under If
             P , Be (T ) is normal with mean zero and variance T . Under IP , Be (T ) is normal with
      mean T and variance T .

Means change, variances don’t. When we use the Girsanov Theorem to change the probability
    measure, means change but variances do not. Martingales may be destroyed or created.
    Volatilities, quadratic variations and cross variations are unaffected. Check:

                              dBe dBe = ((t) dt + dB(t))2 = dB:dB = dt:

17.1 Conditional expectations under If
                                     P

Lemma 1.53 Let 0  t  T . If X is F (t)-measurable, then

                                         If
                                          EX = IE [X:Z (t)]:
Proof:

                          If
                           EX = IE [X:Z (T )] = IE [ IE [X:Z (T )jF (t)] ]
                              = IE [X IE [Z (T )jF (t)] ]
                              = IE [X:Z (t)]
because Z (t); 0  t  T , is a martingale under IP .
192

Lemma 1.54 (Baye’s Rule) If X is F (t)-measurable and 0  s  t  T , then

                                E [X jF (s)] = Z (1s) IE [XZ (t)jF (s)]:
                               If                                                              (1.1)


Proof: It is clear that Z 1(s) IE [XZ (t)jF (s)] is F (s)-measurable. We check the partial averaging
property. For A 2 F (s), we have
      Z    1 IE [XZ (t)jF (s)] dIf        1                      
                                      f
                                 P = IE 1A Z (s) IE [XZ (t)jF(s)]
       A Z (s)
                                   = IE [1A IE [XZ (t)jF (s)]]    (Lemma 1.53)
                                   = IE [IE [1A XZ (t)jF (s)]]    (Taking in what is known)
                                   = IE [1A XZ (t)]
                                   = If
                                     ZE [1AX ] (Lemma 1.53 again)
                                   = X dIf    P:
                                         A


Although we have proved Lemmas 1.53 and 1.54, we have not proved Girsanov’s Theorem. We
will not prove it completely, but here is the beginning of the proof.

Lemma 1.55 Using the notation of Girsanov’s Theorem, we have the martingale property
                           If
                            E [Be (t)jF (s)] = Be (s);       0  s  t  T:
                           e (t)Z (t) is a martingale under IP . Recall
Proof: We first check that B

                                     dBe (t) = (t) dt + dB(t);
                                     dZ (t) = ,(t)Z (t) dB(t):
Therefore,
                               e ) = Be dZ + Z dBe + dBe dZ
                             d(BZ
                                        e dB + Z dt + Z dB , Z dt
                                   = ,BZ
                                         e + Z ) dB:
                                   = (,BZ
Next we use Bayes’ Rule. For 0  s  t  T ,

                      E[Be (t)jF (s)] = Z 1(s) IE [Be (t)Z (t)jF (s)]
                     If
                                      = Z 1(s) Be (s)Z (s)
                                      = Be (s):
CHAPTER 17. Girsanov’s theorem and the risk-neutral measure                                    193

Definition 17.1 (Equivalent measures) Two measures on the same probability space which have
the same measure-zero sets are said to be equivalent.


The probability measures IP and If
                                 P of the Girsanov Theorem are equivalent. Recall that If
                                                                                        P is
defined by
                                             Z
                                     f
                                     IP (A) = Z (T ) dIP;                  A 2 F:
                    R
If IP (A) = 0, then A Z (T ) dIP = 0: Because Z (T ) > 0 for every ! , we can invert the definition
of If
    P to obtain
                                                   Z     1
                                    IP (A) =                    f
                                                             dIP ;          A 2 F:
                                                    A Z (T )

If If
                   R
    P (A) = 0, then A Z (1T ) dIP = 0:


17.2 Risk-neutral measure

As usual we are given the Brownian motion: B (t); 0  t  T , with filtration F (t); 0  t  T ,
defined on a probability space ( ; F ; P). We can then define the following.
Stock price:
                                  dS (t) = (t)S (t) dt + (t)S (t) dB(t):
The processes (t) and  (t) are adapted to the filtration. The stock price model is completely
general, subject only to the condition that the paths of the process are continuous.
Interest rate: r(t); 0  t  T . The process r(t) is adapted.
Wealth of an agent, starting with X (0) = x. We can write the wealth process differential in
several ways:

            dX (t) =        | t){zdS (t})
                            (                     + r| (t)[X (t) ,{z(t)S (t)] dt}
                        Capital gains from Stock             Interest earnings

                   = r(t)X (t) dt + (t)[dS (t) , rS (t) dt]
                                                , r(t))} S (t) dt + (t)(t)S (t) dB(t)
                   = r(t)X (t) dt + (t) |((t) {z
                                                   2   Risk premium
                                                                             3
                                                  66 (t) , r(t)             77
                   = r(t)X (t) dt + (t)(t)S (t) 66             dt + dB (t)77
                                                   4 | {z(t) }               5
                                                                 Market price of risk= (t)
194

Discounted processes:
                         Rt                             R t r(u) du
                      d e,   r(u) du
                                0          S (t) = e,         0         [,r(t)S (t) dt + dS (t)]
                        Rt                              R t r(u) du
                     d e,   r(u) du
                               0           X (t) = e,         0         [,r(t)X (t) dt + dX (t)]
                                                                Rt                  
                                                      = (t)d e, r(u) du S (t) :
                                                                        0




Notation:
                                           Rt                        1 = e, R t r(u) du ;
                                    (t) = e r(u) du ;
                                                                    (t) 1  r(t)
                                              0                                0




                              d (t) = r(t) (t) dt;                 d (t) = , (t) dt:
The discounted formulas are
                            S (t) 1 [,r(t)S (t) dt + dS (t)]
                       d  (t)    =  (t)
                                 = 1(t) [((t) , r(t))S (t) dt + (t)S (t) dB (t)]
                                 = 1(t)  (t)S (t) [(t) dt + dB (t)] ;
                        X (t)              S (t) 
                      d (t) = (t) d (t)
                                 = ((tt)) (t)S (t) [(t) dt + dB (t)]:

Changing the measure. Define
                                                         Zt
                                              Be (t) =            (u) du + B(t):
                                                          0
Then
                                            S (t)  1  (t)S (t) dBe (t);
                                       d           =
                                         X((tt))  ((tt))
                                       d (t) = (t) (t)S (t) dBe (t):

Under If
       P , S ((tt)) and X((tt)) are martingales.
Definition 17.2 (Risk-neutral measure) A risk-neutral measure (sometimes called a martingale
measure) is any probability measure, equivalent to the market measure IP , which makes all dis-
counted asset prices martingales.
CHAPTER 17. Girsanov’s theorem and the risk-neutral measure                                      195

For the market model considered here,
                                           Z
                                If
                                 P (A) =           Z (T ) dIP;   A 2 F;
                                               A
where                                Zt                         Zt          
                        Z (t) = exp ,          (u) dB(u) , 12        2(u) du ;
                                           0                 0
is the unique risk-neutral measure. Note that because (t) = (t), r(t)
                                                                  (t) ; we must assume that (t) 6=
0.
Risk-neutral valuation. Consider a contingent claim paying an F (T )-measurable random variable
V at time T .
Example 17.1

                            V = (S(T) , K)+ ;      European call
                            V = (K , S(T)) ; +
                                                   European put
                                    Z                 !+
                            V= T  1     T
                                          S(u) du , K ; Asian call
                                      0

                            V = 0max
                                 tT
                                       S(t);     Look back




If there is a hedging portfolio, i.e., a process (t); 0  t  T , whose corresponding wealth process
satisfies X (T ) = V , then                             
                                          X (0) = If E (VT ) :
This is because X((tt)) is a martingale under If
                                               P , so
                                  X (0)     X (T )     V 
                                         f            f
                           X (0) = (0) = IE (T ) = IE (T ) :
196
Chapter 18

Martingale Representation Theorem

18.1 Martingale Representation Theorem

See Oksendal, 4th ed., Theorem 4.11, p.50.

Theorem 1.56 Let B (t); 0  t  T; be a Brownian motion on ( ; F ; P). Let F (t); 0  t  T , be
the filtration generated by this Brownian motion. Let X (t); 0  t  T , be a martingale (under IP )
relative to this filtration. Then there is an adapted process  (t); 0  t  T , such that
                                           Zt
                         X (t) = X (0) +         (u) dB(u);      0  t  T:
                                            0
In particular, the paths of X are continuous.

Remark 18.1 We already know that if X (t) is a process satisfying

                                        dX (t) = (t) dB (t);
then X (t) is a martingale. Now we see that if X (t) is a martingale adapted to the filtration generated
by the Brownian motion B (t), i.e, the Brownian motion is the only source of randomness in X , then

                                        dX (t) = (t) dB(t)
for some  (t).


18.2 A hedging application

Homework Problem 4.5. In the context of Girsanov’s Theorem, suppse that F (t); 0  t  T; is
the filtration generated by the Brownian motion B (under IP ). Suppose that Y is a If
                                                                                    P -martingale.
Then there is an adapted process (t); 0  t  T , such that
                                           Zt
                         Y (t) = Y (0) +         (u) dBe (u);     0  t  T:
                                            0
                                                  197
198



                     dS (t) = (t)S (t) dt + (t)S (t) dB(t);
                                   Z t         
                         (t) = exp       r(u) du ;
                                      0
                       (t) = (t),(t)r(t) ;
                               Zt
                      Be (t) = (u) du + B(t);
                                0     Zt                          Zt           
                      Z (t) = exp ,           (u) dB (u) , 12          2 (u) du ;
                               Z          0                        0
                    If
                     P (A) =        Z (T ) dIP;        8A 2 F :
                                A
Then
                  S (t)  S (t)
                d (t) = (t)  (t) dBe (t):
Let (t); 0  t  T; be a portfolio process. The corresponding wealth process X (t) satisfies
                  
                d X((tt)) = (t)(t) S((tt)) dBe (t);
i.e.,

                     X (t) = X (0) + Z t (u)(u) S (u) dBe (u);                0  t  T:
                      (t)             0            (u)
Let V be an F (T )-measurable random variable, representing the payoff of a contingent claim at
time T . We want to choose X (0) and (t); 0  t  T , so that

                                                  X (T ) = V:
Define the If
            P -martingale
                                                  
                                      E (VT ) F (t) ;
                             Y (t) = If                            0  t  T:
According to Homework Problem 4.5, there is an adapted process              (t); 0  t  T , such that
                                              Zt
                         Y (t) = Y (0) +            (u) dBe (u);        0  t  T:
                                              0
                         hV i
Set X (0) = Y (0) = If
                     E      (T ) and choose (u) so that

                                       (u)(u) S (u) = (u):
                                                 (u)
CHAPTER 18. Martingale Representation Theorem                                               199

With this choice of (u); 0  u  T , we have
                       X (t) = Y (t) = If  V            
                        (t)             E   (T ) F ( t )   ;        0  t  T:
In particular,

                      X (T ) = If  V             V
                       (T )     E   (T ) F ( T )  = (T ) ;
so

                       X (T ) = V:
The Martingale Representation Theorem guarantees the existence of a hedging portfolio, although
it does not tell us how to compute it. It also justifies the risk-neutral pricing formula
                                    V         
                                 f
                  X (t) = (t)IE (T ) F (t)
                             ( t)    Z (T )       
                        = Z (t) IE (T ) V F (t)
                                                
                        =  (1t) IE  (T )V F (t) ;      0  t  T;

where

                    (t) = Z((tt))
                                  Zt                   Zt                        
                        = exp ,          (u) dB(u) ,        (r(u) + 12 2 (u)) du
                                     0                  0

18.3 d-dimensional Girsanov Theorem

Theorem 3.57 (d-dimensional Girsanov)        B(t) = (B1(t); : : : ; Bd(t)); 0  t  T , a d-
     dimensional Brownian motion on ( ; F ; P);
    F (t); 0  t  T; the accompanying filtration, perhaps larger than the one generated by B;
    (t) = (1(t); : : : ; d(t)); 0  t  T , d-dimensional adapted process.
For 0  t  T; define
                                Z
                     eBj (t) = t j (u) du + Bj (t); j = 1; : : : ; d;
                                  0  Z                       Zt            
                                            t
                       Z (t) = exp , (u): dB (u) , 2 jj(u)jj du ;
                                                            1           2
                                Z         0                    0
                    If
                     P (A) = Z (T ) dIP:
                                A
200

Then, under If
             P , the process
                       Be (t) = (Be1 (t); : : : ; Bed (t));           0  t  T;
is a d-dimensional Brownian motion.


18.4 d-dimensional Martingale Representation Theorem

Theorem 4.58        B(t) = (B1(t); : : : ; Bd(t)); 0  t  T; a d-dimensional Brownian motion
     on ( ; F ; P);
     F (t); 0  t  T; the filtration generated by the Brownian motion B.
If X (t); 0  t  T , is a martingale (under IP ) relative to F (t); 0  t  T , then there is a
d-dimensional adpated process (t) = (1(t); : : : ; d(t)), such that
                                               Zt
                         X (t) = X (0) +                (u): dB (u);         0  t  T:
                                                0
Corollary 4.59 If we have a d-dimensional adapted process (t) = (1 (t); : : : ; d (t)); then we can
        e Z and IfP as in Girsanov’s Theorem. If Y (t); 0  t  T , is a martingale under IfP relative
define B;
to F (t); 0  t  T , then there is a d-dimensional adpated process (t) = ( 1(t); : : : ; d(t)) such
that                                       Z        t
                          Y (t) = Y (0) +                (u): dBe (u);        0  t  T:
                                                0

18.5 Multi-dimensional market model

Let B (t) = (B1(t); : : : ; Bd (t)); 0  t  T , be a d-dimensional Brownian motion on some
( ; F ; P), and let F (t); 0  t  T , be the filtration generated by B . Then we can define the
following:



Stocks

                                                              X
                                                              d
                    dSi (t) = i (t)Si(t) dt + Si (t)                ij (t) dBj (t);   i = 1; : : : ; m
                                                              j =1
Accumulation factor
                                     Z t                
                        (t) = exp           r(u) du :
                                        0
Here, i (t); ij (t) and r(t) are adpated processes.
CHAPTER 18. Martingale Representation Theorem                                                    201

Discounted stock prices

                                                                       X d
                   d Si((tt)) = (|i (t){z, r(t))} Si((tt)) dt + Si((tt))  ij (t) dBj (t)
                                    Risk Premium
                                                                         j =1
                               ? S i ( t) X d
                               = (t)  ij (t) [|j (t) +{zdBj (t)]}                             (5.1)
                                          j =1
                                                      dBej (t)

For 5.1 to be satisfied, we need to choose 1 (t); : : : ; d (t), so that

            X
            d
                   ij (t)j (t) = i (t) , r(t);     i = 1; : : : ; m:                      (MPR)
            j =1

Market price of risk. The market price of risk is an adapted process (t) = (1 (t); : : : ; d (t))
satisfying the system of equations (MPR) above. There are three cases to consider:

Case I: (Unique Solution). For Lebesgue-almost every t and IP -almost every ! , (MPR) has a
     unique solution (t). Using (t) in the d-dimensional Girsanov Theorem, we define a unique
     risk-neutral probability measure If
                                       P . Under If
                                                  P , every discounted stock price is a martingale.
     Consequently, the discounted wealth process corresponding to any portfolio process is a If P-
     martingale, and this implies that the market admits no arbitrage. Finally, the Martingale
     Representation Theorem can be used to show that every contingent claim can be hedged; the
     market is said to be complete.

Case II: (No solution.) If (MPR) has no solution, then there is no risk-neutral probability measure
     and the market admits arbitrage.

Case III: (Multiple solutions). If (MPR) has multiple solutions, then there are multiple risk-neutral
     probability measures. The market admits no arbitrage, but there are contingent claims which
     cannot be hedged; the market is said to be incomplete.

Theorem 5.60 (Fundamental Theorem of Asset Pricing) Part I. (Harrison and Pliska, Martin-
gales and Stochastic integrals in the theory of continuous trading, Stochastic Proc. and Applications
11 (1981), pp 215-260.):
If a market has a risk-neutral probability measure, then it admits no arbitrage.
Part II. (Harrison and Pliska, A stochastic calculus model of continuous trading: complete markets,
Stochastic Proc. and Applications 15 (1983), pp 313-316):
The risk-neutral measure is unique if and only if every contingent claim can be hedged.
202
Chapter 19

A two-dimensional market model

Let B (t) = (B1 (t); B2(t)); 0  t  T; be a two-dimensional Brownian motion on (   ; F ; P). Let
F (t); 0  t  T; be the filtration generated by B.
In what follows, all processes can depend on t and ! , but are adapted to F (t); 0  t  T . To
simplify notation, we omit the arguments whenever there is no ambiguity.
Stocks:
                           dS1 = S1 [1 dt + 1 dB1] ;
                                                      q          
                           dS2 = S2 2 dt + 2 dB1 + 1 ,  2 dB2 :
                                                           2

We assume  1 > 0;  2 > 0; ,1    1: Note that

                       dS1 dS2 = S1221 dB1 dB1 = 21 S12 dt;
                       dS2 dS2 = S22222 dB1 dB1 + S22(1 , 2)22 dB2 dB2
                               = 22 S22 dt;
                       dS1 dS2 = S11S2 2 dB1 dB1 = 12 S1S2 dt:
In other words,

    dSS has instantaneous variance 21,
          1
           1


    dSS has instantaneous variance 22,
          2
           2


    dSS and dSS have instantaneous covariance 12.
          1
           1
                  2
                   2



Accumulation factor:                                 Z t      
                                         (t) = exp          r du :
                                                       0
The market price of risk equations are
                                                1 1 = 1 , r
                                            q                                            (MPR)
                                 21 + 1 , 2 2 2 = 2 , r
                                                 203
204

The solution to these equations is

                                           1 = 1, r ;
                                                    1
                                           2 = 1 2 , r ) p
                                                 (       , 2(1 , r) ;
                                                      1 2 1 , 2
provided ,1 <  < 1.
Suppose ,1 <  < 1. Then (MPR) has a unique solution (1 ; 2); we define
                                          Zt                 Zt                 Zt                 
                 Z (t) = exp ,                    1 dB1 ,         2 dB2 , 12        (12 + 22 ) du ;
                            Z                 0               0                  0
                If
                 P (A) =                Z (T ) dIP;       8A 2 F :
                             A
If
 P is the unique risk-neutral measure. Define
                            Zt
                Be1 (t) =               1 du + B1 (t);
                            Z0      t
                Be2 (t) =               2 du + B2 (t):
                                0
Then
                                    h                     i
                  dS1 = S1 r dt + 1 dBe1 ;
                                                             q                  
                  dS2 = S2 r dt +  2 dBe1 + 1 , 22 dBe2 :
We have changed the mean rates of return of the stock prices, but not the variances and covariances.


19.1 Hedging when ,1 <  < 1


                 XdX = 1 1 dS1 + 2 dS2 + r(X , 1S1 , 2S2) dt
              d        = (dX , rX dt)
                       = 1 1(dS1 , rS1 dt) + 1 2 (dS2 , rS2 dt)
                         1               1                 q         
                                    e                   e
                       =  S  dB +  S  dB + 1 ,   dB :
                                         1 1 1        1       2 2 2 e   2   1                   2    2

Let V be F (T )-measurable. Define the If
                                        P -martingale
                                                             
                                                 E (VT ) F (t) ;
                                        Y (t) = If                          0  t  T:
CHAPTER 19. A two-dimensional market model                                         205

The Martingale Representation Corollary implies
                                                 Zt              Zt
                              Y (t) = Y (0) +         1 dBe1 +        2 dBe2:
                                                  0              0
We have
                             X   1           1         
                           d     = 1 S1 1 + 2 S2 2 dBe1
                                              q
                                      + 1 2S2 1 , 2 2 dBe2 ;
                              dY = 1 dBe1 + 2 dBe2 :
We solve the equations
                                   1  S  + 1  S  =
                                         1 1 1        2 2    2        1
                                                  q
                                           1  S 1 , 2  =
                                              2 2        2  2

for the hedging portfolio (1; 2). With this choice of (1 ; 2) and setting

                                                        E (VT ) ;
                                       X (0) = Y (0) = If
we have X (t) = Y (t); 0  t  T; and in particular,

                                               X (T ) = V:
Every F (T )-measurable random variable can be hedged; the market is complete.


19.2 Hedging when  = 1

The case  = ,1 is analogous. Assume that  = 1. Then

                                       dS1 = S1 [1 dt + 1 dB1 ]
                                       dS2 = S2 [2 dt + 2 dB1 ]
The stocks are perfectly correlated.
The market price of risk equations are

                                             11 = 1 , r
                                             21 = 2 , r
                                                                                 (MPR)

The process 2 is free. There are two cases:
206

         1 ,r
Case I:  1
              6= 2 ,2 r : There is no solution to (MPR), and consequently, there is no risk-neutral
      measure. This market admits arbitrage. Indeed
                X  1
              d     = 1(dS1 , rS1 dt) + 1 2 (dS2 , rS2 dt)
                       = 1 1S1 [(1 , r) dt + 1 dB1] + 1 2S2 [(2 , r) dt + 2 dB1]
               1 ,r
      Suppose  1
                    > 2 ,2 r : Set
                                         1 =  1S ; 2 = ,  1S :
                                               1 1                   2 2
      Then
                             X  1  1 , r          1  , r
                                                           2
                                                                         
                          d      =          dt + dB1 ,        dt + dB1
                                         1                  2
                                 = 1 1 , r , 2 , r dt
                                    | 1 {z 2 }
                                              Positive


          1 ,r
Case II:  1
               = 2 ,2 r : The market price of risk equations
                                                11 = 1 , r
                                                21 = 2 , r

                                           1 = 1, r = 2, r ;
      have the solution

                                                     1           2
      2 is free; there are infinitely many risk-neutral measures. Let If
                                                                        P be one of them.
      Hedging:
                X  1
              d     = 1S1 [(1 , r) dt + 1 dB1] + 1 2S2 [(2 , r) dt + 2 dB1]
                       = 1 1S1  1[1 dt + dB1 ] + 1 2 S2 2 [1 dt + dB1 ]
                         1             1         
                       =  S  +  S  dBe :
                                 1 1 1        2 2 2        1

                  e2 does not appear.
      Notice that B
      Let V be an F (T )-measurable random variable. If V depends on B2 , then it can probably not
      be hedged. For example, if
                                           V = h(S1 (T ); S2(T ));
      and 1 or 2 depend on B2 , then there is trouble.
CHAPTER 19. A two-dimensional market model                                     207

     More precisely, we define the If
                                    P -martingale
                                                  
                                      E (VT ) F (t) ;
                             Y (t) = If                        0  t  T:

We can write
                                               Zt              Zt
                             Y (t) = Y (0) +        1 dBe1 +        2 dBe2 ;
                                               0               0
so

                               dY = 1 dBe1 + 2 dBe2 :
        
To get d X to match dY , we must have

                                 2 = 0:
208
Chapter 20

Pricing Exotic Options

20.1 Reflection principle for Brownian motion

Without drift.
Define
                                      M (T ) = 0max
                                                tT
                                                     B (t):

Then we have:

         IP fM (T ) > m; B(T ) < bg
                                      = IP fB (T ) > 2m , bg
                                                Z1       ( 2)
                                      =p   1          exp , 2xT dx; m > 0; b < m
                                           2T 2m,b

So the joint density is

                                        2             Z1      (     ) ! 2
   IP fM (T ) 2 dm; B (T ) 2 dbg = , @m@ @b p 1             exp , x dx dm db
                                                                      2T
                                                 2T 2m,b
                                                      (               2 )!
                                      @
                                 = , @m p      1          (2
                                                   exp , 2T  m  , b )      dm db;
                                              2T
                                                  (             2)
                                   2(2
                                 = p   m , b )        (2
                                               exp , 2T  m , b )    dm db; m > 0; b < m:
                                    T 2T

With drift. Let
                                       Be (t) = t + B(t);
                                              209
210




      2m-b                                           shadow path



          m


         b

                                                   Brownian motion
      Figure 20.1: Reflection Principle for Brownian motion without drift




                      m

                                           m=b


                                           (B(T), M(T)) lies in here


                                                    b


                Figure 20.2: Possible values of B (T ); M (T ).
CHAPTER 20. Pricing Exotic Options                                                                   211

where B (t); 0  t  T , is a Brownian motion (without drift) on (        ; F ; P). Define
                               Z (T ) = expf,B (T ) , 12 2 T g
                                      = expf,(B (T ) + T ) + 21 2 T g
                                      = expf,Be (t) + 12 2 T g;
                                        Z
                              If
                               P (A) = Z (T ) dIP; 8A 2 F :
                                            A
   f(T ) = max0tT Be (T ):
SetM


Under If
       P ; Be is a Brownian motion (without drift), so

  f   f            e        ~   2(2 m
                                    ~ , ~b) ( (2m~ , ~b)2 )
                ~ B (T ) 2 dbg = p
  IP fM (T ) 2 dm;                         exp , 2T         dm~ d~b; m~ > 0; ~b < m:
                                                                                  ~
                                             T 2T
      ~ ~b) be a function of two variables. Then
Let h(m;

                                   f         e
   IEh(M                  E h(M (ZT()T; B) (T ))
       f(T ); Be (T )) = If
                               h                                           i
                         = If   f(T ); Be (T )) expfBe (T ) , 21 2T g
                            E h(M
                             m~Z=1 ~bZ=m~
                         =                    ~ ~b) expf~b , 12 2 T g If
                                            h(m;                            f(T ) 2 dm;
                                                                         P fM        ~ Be (T ) 2 d~bg:
                             m~ =0 ~b=,1

But also,

                             m~Z=1 ~bZ=m~
       f(T ); Be (T )) =
   IEh(M                                                f(T ) 2 dm;
                                              ~ ~b) IP fM
                                            h(m;                 ~ Be (T ) 2 d~bg:
                             m~ =0 ~b=,1

Since h is arbitrary, we conclude that

                                                                                                  (MPR)


                f(T ) 2 dm;
            IP fM          ~ Be (T ) 2 d~bg
             = expf~b , 12 2 T g If  f(T ) 2 dm;
                                    P fM         ~ Be (T ) 2 d~bg
                                 (             )
                   ~ , ~b) exp , (2m
             = 2(2pm                   ~ , ~b)2 : expf~b , 1 2 T gdm
                                                                     ~ d~b; m
                                                                            ~ > 0; ~b < m:
                                                                                        ~
                T 2T                   2T                  2
212

20.2 Up and out European call.

Let 0 < K < L be given. The payoff at time T is
                                     (S (T ) , K )+ 1fS  (T )<Lg;
where
                                       S (T ) = 0max
                                                  tT
                                                       S (t):
To simplify notation, assume that IP is already the risk-neutral measure, so the value at time zero of
the option is
                          h                          i
  v (0; S (0)) = e,rT IE (S (T ) , K )+1fS(T )<Lg :
Because IP is the risk-neutral measure,

        dS (t) = rS (t) dt + S (t) dB (t)
         S (t) = S0 expfB (t) + (r , 12  2 )tg
                       8 2                   39
                       >
                       >                       >
                       < 66         r     77>
                                               =
              = S0 exp > 64B (t) +  , 2 t75>
                       >
                       :           | {z } >    ;
                                       
              = S0 expf Be (t)g;
where
              r 
            = ,2 ;
         Be (t) = t + B (t):
Consequently,
                           f(t)g;
         S (t) = S0 expf M
where,
         f(t) = max Be (u):
         M      0ut
We compute,
                          h                          i
  v (0; S (0)) = e,rT IE (S (T ) , K )+1fS(T )<Lg
                                                   +                  
              = e,rT IE              e
                         S (0) expfB (T )g , K 1fS(0)expfMe (T )g < Lg
                       "                                                               #
              = e,rT IE S (0) expf Be (T )g , K 1         1    K ; Me (T )< 1 log L 
                                                    Be(T )> log
                                                           | {zS (0)}       | {zS (0)}
                                                                     b
                                                                     ~                   m~
CHAPTER 20. Pricing Exotic Options                                                               213

                                      ~
                                      M(T)
                                  y                     x=y
                                  ~
                                  m
                                                     (B(T), M(T)) lies in here

                                                              x
                                             ~                ~
                                             b                B(T)


                                                             e (T ); Mf(T ).
                             Figure 20.3: Possible values of B


We consider only the case
                             S (0)  K < L; so 0  ~b < m:     ~
The other case, K < S (0)  L leads to ~b < 0  m
                                                ~ and the analysis is similar.
             R m
               ~ R m
                   ~
We compute ~b x : : :dy dx:
                      Z m~ Z m~                                      (                          )
v (0; S (0)) = e,rT             ( S (0)   expf x g ,  K ) 2(2py , x) exp , (2y , x)2 + x , 1 2 T dy dx
                     ~b x                                   T 2T(                     2T       2
                       Z m~                                                                     )
           = ,e,rT ~ (S (0) expfxg , K ) p 1 exp , (2y , x) + x , 21 2 T
                                                                                      2           y=m~
                                                                                2T
                                                                                                       dx
                        b                                  2T                                    y=x
                   Z m~                                       " ( 2                           )
           =e , rT        (S (0) expfxg , K ) p         1                 x
                                                                 exp , + x , 2  T       1 2
                     ~b                                 2T                2T
                               (                                     )#
                      , exp , (2m~2,T x) + x , 12 2 T dx
                                                 2


                1                    Z m~ (              x 2                    )
           = p e S (0) ~ exp x , 2T + x , 2  T dx
                        , rT                                             1  2
               2T                    b
                                    Z          ( 2                         )
                   1                    m~
             , p e K ~ exp , 2T + x , 2  T dx
                           , rT                     x              1  2
                  2T                 b
                   1                     Z m~ (             (2 m
                                                               ~   , x ) 2                  )
             , p e S (0) ~ exp x , 2T + x , 2  T dx
                           , rT                                                     1   2
                  2T                      b
                                    Z          (                                   )
                   1                    m~
             + p e K ~ exp , 2T + x , 2  T dx:
                           , rT                     (2 m
                                                       ~ ,   x ) 2
                                                                              1 2
                  2T                 b

The standard method for all these integrals is to complete the square in the exponent and then
recognize a cumulative normal distribution. We carry out the details for the first integral and just
214

give the result for the other three. The exponent in the first integrand is
                                      2
                               x , 2xT + x , 12 2 T
                               = , 21T (x , T , T )2 + 12  2T + T
                                    1   rT T 2
                               = , 2T x ,  , 2 + rT:
In the first integral we make the change of variable
                                                           p             p
                             y = (x , rT= , T=2)= T; dy = dx= T;
to obtain
                                         (                     )
              e,prT S (0) Z m~ exp x , x2 + x , 1 2 T dx
                  2T ~b                      2T          2
                               Z m~        (         rT T 2)
                     1
              = p S (0) ~ exp , 2T x ,  , 2    1                    dx
                    2T          b
                                         p     p
                                 pmT , r T ,  T
                                         Z
                                     ~

                                                           2
                                                   expf, y2 g dy
                                                     2

              = p 1 S (0):
                    2T                p      p
                                pbT , r T ,  T
                                 ~

                        "                 p      2
                                                    p !          ~b rpT  pT !#
                               m
                               ~        r   T
              = S (0) N p ,  , 2 , N p ,  , 2     T                          :
                                 T                                 T
Putting all four integrals together, we have
                         "                   p           p !~             p   p !#
      v (0; S (0)) = S (0) N pm~ , r T ,  2 T , N pb , r T ,  2 T
                                " T           p       p ! T ~             p     p !#
                     , e K N pT ,  + 2 , N pT ,  + 2 T
                         , rT         m
                                      ~     r   T      T         b     r   T 
                              "            p        p !              ~b) rpT  pT !#
                                    m
                                    ~    r   T      T
                     , S (0) N pT +  + 2 , N pT +  + 2     (2 m
                                                                ~  ,
                                        r    m~ rpT pT !
                     + exp ,rT + 2m   ~ ,2           N p +  , 2 ,
                                                      !   T
                                   ~    p         p     
                       N (2m~p, b) + r T ,  2 T ;
                                 T
where
                                 ~b = 1 log K ; m~ = 1 log L :
                                       S (0)         S (0)
CHAPTER 20. Pricing Exotic Options                                                                215


                                 v(t,L) = 0
               L


                                                                  v(T,x) = (x - K)+



                                 v(t,0) = 0                       T
                             Figure 20.4: Initial and boundary conditions.

If we let L!1 we obtain the classical Black-Scholes formula
                                      "           ~b     p            p !#
                   v(0; S (0)) = S (0) 1 , N p , r  T ,  2 T
                                          "      T
                                                     ~b rpT pT !#
                                 ,e K 1,N p ,  + 2
                                     , rT
                                                       T
                                                               p        p !
                               = S (0)N p log K +  + 2 T
                                            1      S (0)     r   T    
                                           T
                                                                    p       p !
                                 , e KN p log K +  , 2 T :
                                     , rT      1         S (0)    r  T    
                                               T
If we replace T by T , t and replace S (0) by x in the formula for v (0; S (0)), we obtain a formula
for v (t; x), the value of the option at the time t if S (t) = x. We have actually derived the formula
under the assumption x  K  L, but a similar albeit longer formula can also be derived for
K < x  L. We consider the function
                         h                                    i
         v(t; x) = IE t;x e,r(T ,t)(S (T ) , K )+ 1fS (T )<Lg ; 0  t  T; 0  x  L:
This function satisfies the terminal condition

                                 v(T; x) = (x , K )+ ; 0  x < L
and the boundary conditions

                                      v(t; 0) = 0; 0  t  T;
                                      v(t; L) = 0; 0  t  T:
We show that v satisfies the Black-Scholes equation

                     ,rv + vt + rxvx + 21 2x2vxx; 0  t < T; 0  x  L:
216

Let S (0) > 0 be given and define the stopping time

                                        = minft  0; S (t) = Lg:
Theorem 2.61 The process

                                 e,r(t^ )v (t ^ ; S (t ^  )); 0  t  T;
is a martingale.

Proof: First note that
                                  S (T ) < L ()  > T:
Let ! 2 be given, and choose t 2 [0; T ]. If  (!)  t, then
                                                                     
                         IE e,rT (S (T ) , K )+1fS (T )<Lg F (t) (!) = 0:
But when  (!)  t, we have

                         v(t ^  (!); S (t ^  (!); !)) = v (t ^  (!); L) = 0;
so we may write
                                               
   IE e,rT (S (T ) , K )+ 1fS (T )<Lg F (t) (!) = e,r(t^ (!))v (t ^  (!); S (t ^  (!); !)) :
On the other hand, if  (!) > t, then the Markov property implies
                                                                             
                             IE e,rT (S (T ) , K )+ 1fS (T )<Lg F (t) (! )
                                            h                                  i
                              = IE t;S (t;!) e,rT (S (T ) , K )+ 1fS  (T )<Lg
                              = e,rt v (t; S (t; !))
                              = e,r(t^ (!))v (t ^ ; S (t ^  (!); !)) :
In both cases, we have
                                                                                                 
             e,r(t^ )v(t ^ ; S (t ^  )) = IE e,rT (S (T ) , K )+ 1fS (T )<Lg F (t) :
Suppose 0  u  t  T . Then
                                                              
                    IE e,r(t^ )v(t ^ ; S (t ^  )) F (u)
                                                                                           
                     = IE IE e,rT (S (T ) , K )+ 1fS  (T )<Lg F (t)                  F (u)
                                                                         
                     = IE e,rT (S (T ) , K )+ 1fS  (T )<Lg F (u)
                     = e,r(u^ )v (u ^ ; S (u ^  )) :
CHAPTER 20. Pricing Exotic Options                                                                       217




For 0  t  T , we compute the differential
                             
          d e,rt v(t; S (t)) = e,rt(,rv + vt + rSvx + 21  2 S 2vxx ) dt + e,rt Svx dB:
Integrate from 0 to t ^  :

  e,r(t^ )v (t ^ ; S (t ^  )) = v(0; S (0))
                              Z t^
                           +        e,ru (,rv + vt + rSvx + 12  2 S 2vxx ) du
                                   0                                       Z t^
                                                             +                     e,ru Svx dB:
                                                                           |0         {z       }
                                                                 A stopped martingale is still a martingale

Because e,r(t^ )v (t ^ ; S (t ^  )) is also a martingale, the Riemann integral
                              Z t^
                                        e,ru (,rv + vt + rSvx + 21 2 S 2vxx ) du
                               0
is a martingale. Therefore,

,rv(u; S (u))+ vt(u; S (u)) + rS (u)vx(u; S (u))+ 12 2S 2(u)vxx(u; S (u)) = 0; 0  u  t ^ :
The PDE
                   ,rv + vt + rxvx + 21 2x2vxx = 0; 0  t  T; 0  x  L;
then follows.
The Hedge                                 
                 d e,rtv (t; S (t)) = e,rt S (t)vx(t; S (t)) dB(t); 0  t  :
Let X (t) be the wealth process corresponding to some portfolio (t). Then

                                       d(e,rtX (t)) = e,rt (t)S (t) dB(t):
We should take
                                                X (0) = v (0; S (0))
and
                                       (t) = vx (t; S (t)); 0  t  T ^ :
Then

                     X (T ^  ) = v(T ^ ; S (T ^  ))
                                  (
                                =
                                    v(T; S (T )) = (S (T ) , K )+               if  > T
                                    v(; L) = 0                                 if   T .
218


                                          v(T, x)



                               0               K           L           x




                                          v(t, x)



                               0               K           L           x


                                       Figure 20.5: Practial issue.

20.3 A practical issue

For t < T but t near T , v (t; x) has the form shown in the bottom part of Fig. 20.5.
In particular, the hedging portfolio
                                           (t) = vx (t; S (t))
can become very negative near the knockout boundary. The hedger is in an unstable situation. He
should take a large short position in the stock. If the stock does not cross the barrier L, he covers
this short position with funds from the money market, pays off the option, and is left with zero. If
the stock moves across the barrier, he is now in a region of (t) = vx(t; S (t)) near zero. He should
cover his short position with the money market. This is more expensive than before, because the
stock price has risen, and consequently he is left with no money. However, the option has “knocked
out”, so no money is needed to pay it off.
Because a large short position is being taken, a small error in hedging can create a significant effect.
Here is a possible resolution.
Rather than using the boundary condition

                                       v(t; L) = 0; 0  t  T;
solve the PDE with the boundary condition

                             v(t; L) + Lvx (t; L) = 0; 0  t  T;
where    is a “tolerance parameter”, say 1%. At the boundary, Lvx (t; L) is the dollar size of the
short position. The new boundary condition guarantees:

   1. Lvx (t; L) remains bounded;
   2. The value of the portfolio is always sufficient to cover a hedging error of       times the dollar
      size of the short position.
Chapter 21

Asian Options

Stock:
                                    dS (t) = rS (t) dt + S (t) dB (t):
Payoff:
                                                   ZT                !
                                           V =h              S (t) dt
                                                       0
Value of the payoff at time zero:
                                               "              ZT         !#
                               X (0) = IE e,rT h                   S (t) dt :
                                                               0

Introduce an auxiliary process Y (t) by specifying

                                             dY (t) = S (t) dt:
With the initial conditions
                                           S (t) = x; Y (t) = y;
we have the solutions
                                       n                                        o
                     S (T ) = x exp  (B(T ) , B (t)) + (r , 21 2 )(T , t) ;
                                     ZT
                     Y (T ) = y +          S (u) du:
                                       t

Define the undiscounted expected payoff

                    u(t; x; y) = IE t;x;y h(Y (T )); 0  t  T; x  0; y 2 IR:
                                                       219
220

21.1 Feynman-Kac Theorem

The function u satisfies the PDE
                ut + rxux + 12 2x2 uxx + xuy = 0; 0  t  T; x  0; y 2 IR;
the terminal condition
                                u(T; x; y ) = h(y ); x  0; y 2 IR;
and the boundary condition
                              u(t; 0; y) = h(y ); 0  t  T; y 2 IR:
One can solve this equation. Then
                                                      Zt                
                                       v t; S (t);              S (u) du
                                                           0
is the option value at time t, where
                                   v(t; x; y ) = e,r(T ,t) u(t; x; y ):
The PDE for v is
                             ,rv + vt + rxvx + 12 2x2vxx + xvy = 0;                           (1.1)
                                         v (T; x; y ) = h(y );
                                     v(t; 0; y) = e,r(T ,t)h(y ):
One can solve this equation rather than the equation for u.


21.2 Constructing the hedge

Start with the stock price S (0). The differential of the value X (t) of a portfolio (t) is
                            dX =  dS + r(X , S ) dt
                               = S (r dt +  dB ) + rX dt , rS dt
                               = S dB + rX dt:
We want to have
                                                 Zt                 
                          X (t) = v t; S (t);           S (u) du ;
                                                   0
so that
                                                    ZT                   !
                         X (T ) = v T; S (0);                  S (u) du ;
                                                       0
                                           ZT              !
                                 =h             S (u) du :
                                           0
CHAPTER 21. Asian Options                                                                          221

The differential of the value of the option is
                   Zt           
     dv t; S (t);     S (u) du = vtdt + vx dS + vy S dt + 12 vxx dS dS
                    0
                               = (vt + rSvx + Svy + 12 2 S 2vxx ) dt + Svx dB
                               = rv (t; S (t)) dt + vx (t; S (t))  S (t) dB (t): (From Eq. 1.1)
Compare this with

                         dX (t) = rX (t) dt + (t)  S (t) dB(t):
Take (t) = vx (t; S (t)): If X (0) = v (0; S (0); 0), then
                                                   Zt              
                              X (t) = v t; S (t);        S (u) du ; 0  t  T;
                                                     0
because both these processes satisfy the same stochastic differential equation, starting from the same
initial condition.


21.3 Partial average payoff Asian option

Now suppose the payoff is
                                                     ZT             !
                                            V =h             S (t) dt ;
                                                         
where 0 <  < T . We compute
                                  v(; x; y ) = IE ;x;y e,r(T , )h(Y (T ))
just as before. For 0  t   , we compute next the value of a derivative security which pays off
                                                 v (; S ( ); 0)
at time  . This value is
                                   w(t; x) = IE t;xe,r( ,t) v (; S ( ); 0):
The function w satisfies the Black-Scholes PDE
                     ,rw + wt + rxwx + 12 2x2wxx = 0; 0  t  ; x  0;
with terminal condition
                                       w(; x) = v (; x; 0); x  0;
and boundary condition
                                  w(t; 0) = e,r(T ,t)h(0); 0  t  T:
The hedge is given by
                                   8
                                   <w (t; S (t));                         0  t  ;
                            (t) = : x          R          
                                    vx t; S (t); t S (u) du ;             < t  T:
222

Remark 21.1 While no closed-form for the Asian option price is known, the Laplace transform (in
the variable 4 (T , t)) has been computed. See H. Geman and M. Yor, Bessel processes, Asian
               2


options, and perpetuities, Math. Finance 3 (1993), 349–375.
Chapter 22

Summary of Arbitrage Pricing Theory

A simple European derivative security makes a random payment at a time fixed in advance. The
value at time t of such a security is the amount of wealth needed at time t in order to replicate the
security by trading in the market. The hedging portfolio is a specification of how to do this trading.




22.1 Binomial model, Hedging Portfolio

Let be the set of all possible sequences of n coin-tosses. We have no probabilities at this point.
Let r  0; u > r + 1; d = 1=u be given. (See Fig. 2.1)
Evolution of the value of a portfolio:


                             Xk+1 = k Sk+1 + (1 + r)(Xk , k Sk ):

Given a simple European derivative security V (! 1; ! 2), we want to start with a nonrandom X0 and
use a portfolio processes

                                         0 ; 1(H ); 1 (T )

so that

                     X2 (!1 ; !2 ) = V (!1 ; !2 ) 8! 1; !2 :    (four equations)


There are four unknowns: X0; 0; 1(H ); 1(T ). Solving the equations, we obtain:

                                                 223
224


                                 2                                                       3
                                 6                                u , (1 + r) X (! ; T )77 ;
              X1 (!1 ) = 1 +1 r 64 1 +u ,r ,d d X   ( !   ; H ) +
                                                | {z } u , d | 2 {z1 }5
                                                  2     1
                                                 V (! ;H )                     V (! ;T )
                            1       1 +  r , d
                                                        1

                                                             u  , (1 + r )        1


                  X0 = 1 + r u , d X1(H ) + u , d X1(T ) ;
              1 (!1 ) = XS2 ((!!1 ;; H ) , X2(! 1 ; T ) ;
                            2 1 H ) , S2 (!1 ; T )
                  0 = S1 ((H
                         X        ) , X1(T ) :
                            1 H ) , S1 (T )
The probabilities of the stock price paths are irrelevant, because we have a hedge which works on
every path. From a practical point of view, what matters is that the paths in the model include all
the possibilities. We want to find a description of the paths in the model. They all have the property
                                                               Sk+1 2
                               (log Sk+1 , log Sk )2 =         log  Sk
                                                            = ( log u)2
                                                            = (log u)2 :
Let  = log u > 0. Then
                                  nX
                                   ,1
                                        (log Sk+1 , log Sk )2 =  2 n:
                                  k=0
The paths of log Sk accumulate quadratic variation at rate 2 per unit time.
If we change u, then we change  , and the pricing and hedging formulas on the previous page will
give different results.
We reiterate that the probabilities are only introduced as an aid to understanding and computation.
Recall:
                             Xk+1 = k Sk+1 + (1 + r)(Xk , k Sk ):
Define
                                              k = (1 + r)k :
Then
                                 Xk+1 =  Sk+1 + Xk ,  Sk ;
                                              k                      k
                                   k+1            k+1          k             k

                                 Xk+1 , Xk =   Sk+1 , Sk  :
i.e.,
                                                     k
                                   k+1       k                k+1        k
In continuous time, we will have the analogous equation
                                                                  
                                   d X((tt)) = (t) d S((tt)) :
CHAPTER 22. Summary of Arbitrage Pricing Theory                                                225

If we introduce a probability measure If P under which Skk is a martingale, then Xkk will also be a
martingale, regardless of the portfolio used. Indeed,
                                                       
                       E Xk+1 F k = If
                      If             E Xk + k Sk+1 , Sk F k
                           k+1            k   k+1     k Sk 
                                     X
                                   = +  If
                                       k     E   Sk +1 F , :
                                                       k                      k
                                                k          |         k+1 {z        k   }
                                                                         =0
Suppose we want to have X2 = V , where V is some F 2 -measurable random variable. Then we
must have
                          1 X = X1 = If   X2        V 
                                      E       F   = f
                                                    I
                                                    E     F1 ;
                         1+r 1    1         2
                                           
                                                1
                                                      2
                                        E X1 = If
                             X0 = X0 = If         E V :
                                            0              1             2

                                              P under which Skk is a martingale, we denote p~ =
To find the risk-neutral probability measure If
If
 P f! k = H g, q~ = If
                     P f!k = T g, and compute
                                          
                               E Sk+1 F = p~u Sk + q~d Sk
                              If                k
                                      k+1                      k+1           k+1
                                                    = 1 +1 r [~pu + q~d] Sk :
                                                                          k
We need to choose p~ and q~ so that

                                            p~u + q~d = 1 + r;
                                                p~ + q~ = 1:
The solution of these equations is

                                p~ = 1 +u ,r ,d d ; q~ = u ,u(1, +d r) :

22.2 Setting up the continuous model

Now the stock price S (t); 0  t  T , is a continuous function of t. We would like to hedge
along every possible path of S (t), but that is impossible. Using the binomial model as a guide, we
choose  > 0 and try to hedge along every path S (t) for which the quadratic variation of log S (t)
accumulates at rate 2 per unit time. These are the paths with volatility  2.
To generate these paths, we use Brownian motion, rather than coin-tossing. To introduce Brownian
motion, we need a probability measure. However, the only thing about this probability measure
which ultimately matters is the set of paths to which it assigns probability zero.
226

Let B (t); 0  t  T , be a Brownian motion defined on a probability space (            ; F ; P). For any
 2 IR, the paths of
                                              t + B(t)
accumulate quadratic variation at rate  2 per unit time. We want to define

                                   S (t) = S (0) expft + B(t)g;
so that the paths of
                                  log S (t) = log S (0) + t + B (t)
accumulate quadratic variation at rate  2 per unit time. Surprisingly, the choice of  in this definition
is irrelevant. Roughly, the reason for this is the following: Choose ! 1 2 . Then, for 1 2 IR,

                                    1t + B(t; !1); 0  t  T;
is a continuous function of t. If we replace 1 by 2, then 2 t + B (t; ! 1 ) is a different function.
However, there is an ! 2 2 such that

                         1t + B (t; !1 ) = 2t + B(t; !2); 0  t  T:
In other words, regardless of whether we use 1 or 2 in the definition of S (t), we will see the same
paths. The mathematically precise statement is the following:

      If a set of stock price paths has a positive probability when S (t) is defined by

                                   S (t) = S (0) expf1t + B(t)g;
      then this set of paths has positive probability when S (t) is defined by

                                   S (t) = S (0) expf2t + B(t)g:
      Since we are interested in hedging along every path, except possibly for a set of paths
      which has probability zero, the choice of  is irrelevant.

The most convenient choice of  is
                                              = r , 21 2 ;
so
                               S (t) = S (0) expfrt + B(t) , 12 2 tg;
and
                               e,rt S (t) = S (0) expfB(t) , 12  2tg
is a martingale under IP . With this choice of ,

                                  dS (t) = rS (t) dt + S (t) dB (t)
CHAPTER 22. Summary of Arbitrage Pricing Theory                                                227

and IP is the risk-neutral measure. If a different choice of  is made, we have
                                 S (t) = S (0) expft + B(t)g;
                                dS (t) = (| +{z12  2 )} S (t) dt + S (t) dB(t):
                                                   
                                                             h              i
                                          = rS (t) dt +  , r dt + dB (t) :
                                                             |      {z          }
                                                                   dBe(t)
Be has the same paths as B. We can change to the risk-neutral measure If  P , under which Be is a
Brownian motion, and then proceed as if  had been chosen to be equal to r , 21  2 .


22.3 Risk-neutral pricing and hedging

Let If
     P denote the risk-neutral measure. Then
                              dS (t) = rS (t) dt + S (t) dBe (t);
      e is a Brownian motion under IfP . Set
where B
                                             (t) = ert :
Then                                             S (t)   S (t) dBe (t);
                                            d      (t) =   (t)
so S ((tt)) is a martingale under If
                                   P.
Evolution of the value of a portfolio:
                                dX (t) = (t)dS (t) + r(X (t) , (t)S (t)) dt;                (3.1)

which is equivalent to
                               X (t)                  S (t) 
                          d      (t) = (t)d (t)                                              (3.2)

                                     = (t) S((tt)) dBe (t):
Regardless of the portfolio used, X((tt)) is a martingale under If
                                                                 P.
Now suppose V is a given F (T )-measurable random variable, the payoff of a simple European
derivative security. We want to find the portfolio process (T ); 0  t  T , and initial portfolio
value X (0) so that X (T ) = V . Because X((tt)) must be a martingale, we must have

                                  X (t) = If  V            
                                   (t)     E   (T ) F ( t )   ; 0  t  T:                    (3.3)

This is the risk-neutral pricing formula. We have the following sequence:
228

   1. V is given,
   2. Define X (t); 0  t  T , by (3.3) (not by (3.1) or (3.2), because we do not yet have (t)).
   3. Construct (t) so that (3.2) (or equivalently, (3.1)) is satisfied by the X (t); 0  t  T ,
      defined in step 2.

To carry out step 3, we first use the tower property to show that X((tt)) defined by (3.3) is a martingale
under If
       P . We next use the corollary to the Martingale Representation Theorem (Homework Problem
4.5) to show that
                                            X (t) 
                                       d                 e
                                              (t) = (t) dB (t)                                      (3.4)

for some proecss . Comparing (3.4), which we know, and (3.2), which we want, we decide to
define

                                            (t) = (t) (t) :
                                                   S (t)                                           (3.5)

Then (3.4) implies (3.2), which implies (3.1), which implies that X (t); 0  t  T , is the value of
the portfolio process (t); 0  t  T .
From (3.3), the definition of X , we see that the hedging portfolio must begin with value
                                                       V 
                                                   f
                                           X (0) = IE       ;
                                                         (T )
and it will end with value
                                                          
                          X (T ) = (T )If E (VT ) F (T ) = (T ) (VT ) = V:
Remark 22.1 Although we have taken r and  to be constant, the risk-neutral pricing formula is
still “valid” when r and  are processes adapted to the filtration generated by B . If they depend on
either Be or on S , they are adapted to the filtration generated by B. The “validity” of the risk-neutral
pricing formula means:

   1. If you start with                                   V 
                                                      f
                                              X (0) = IE       ;
                                                            (T )
      then there is a hedging portfolio (t); 0  t  T , such that X (T ) = V ;
   2. At each time t, the value X (t) of the hedging portfolio in 1 satisfies
                                           X (t) = If  V   
                                            (t) E (T ) F (t) :
Remark 22.2 In general, when there are multiple assets and/or multiple Brownian motions, the
risk-neutral pricing formula is valid provided there is a unique risk-neutral measure. A probability
measure is said to be risk-neutral provided
CHAPTER 22. Summary of Arbitrage Pricing Theory                                                   229

     it has the same probability-zero sets as the original measure;
     it makes all the discounted asset prices be martingales.
To see if the risk-neutral measure is unique, compute the differential of all discounted asset prices
and check if there is more than one way to define B e so that all these differentials have only dBe
terms.


22.4 Implementation of risk-neutral pricing and hedging

To get a computable result from the general risk-neutral pricing formula

                                          X (t) = If  V           
                                           (t)     E   (T ) F ( t )  ;
one uses the Markov property. We need to identify some state variables, the stock price and possibly
other variables, so that                                      
                                                    E (VT ) F (t)
                                        X (t) = (t)If
is a function of these variables.

Example 22.1 Assume r and  are constant, and V = h(S(T)). We can take the stock price to be the state
variable. Define                                          h                     i
                                      v(t; x) = IEe t;x e,r(T ,t) h(S(T)) :
Then
                                                                       
                                      X(t) = ert IEe e,rT h(S(T)) F (t)
                                            = v(t; S(t));
                                                      e
and X((tt)) = e,rt v(t; S(t)) is a martingale under IP .


Example 22.2 Assume r and  are constant.
                                                      ZT                    !
                                            V =h               S(u) du :
                                                           0



Take S(t) and Y (t) =
                        R t S(u) du to be the state variables. Define
                          0
                                                        h                 i
                                  v(t; x; y) = IEe t;x;y e,r T ,t h(Y (T)) ;
                                                                    (   )



where                                                          ZT
                                           Y (T) = y +              S(u) du:
                                                               t
230


                                                                      
Then

                                     X(t) = ert IEe e,rT h(S(T)) F (t)
                                           = v(t; S(t); Y (t))
and
                                         X(t) = e,rt v(t; S(t); Y (t))
                                          (t)
                       e
is a martingale under IP .

Example 22.3 (Homework problem 4.2)
                                                                            e
                              dS(t) = r(t; Y (t)) S(t)dt + (t; Y (t))S(t) dB(t);
                                                                        e
                                 dY (t) = (t; Y (t)) dt + (t; Y (t)) dB(t);
                                                 V = h(S(T)):
Take S(t) and Y (t) to be the state variables. Define
                                             2                          3
                                             66 ( Z           )         77
                                       t;x;y 6        T                  7
                       v(t; x; y) = IEe 66exp , r(u; Y (u)) du h(S(T ))77 :
                                              64|   t
                                                        {z    }          75
                                                             (t)
                                                             (T )


Then
                                                             
                             X(t) = (t)IEe h(S(T  ))
                                              (T ) F (t)
                                        " ( ZT                       )                  #
                                  = IEe exp ,            r(u; Y (u)) du h(S(T)) F (t)
                                                   t
                                  = v(t; S(t); Y (t));
and

                             X(t) = exp , Z t r(u; Y (u)) du v(t; S(t); Y (t))
                              (t)           0

                       e
is a martingale under IP .


In every case, we get an expression involving v to be a martingale. We take the differential and
set the dt term to zero. This gives us a partial differential equation for v , and this equation must
hold wherever the state processes can be. The dB    e term in the differential of the equation is the
differential of a martingale, and since the martingale is
                                  X (t) = X (0) + Z t (u) S (u) dBe (u)
                                   (t)             0         (u)
we can solve for (t). This is the argument which uses (3.4) to obtain (3.5).
CHAPTER 22. Summary of Arbitrage Pricing Theory                                                          231

Example 22.4 (Continuation of Example 22.3)

                             X(t) = exp , Z t r(u; Y (u)) du v(t; S(t); Y (t))
                              (t) |         0
                                                {z           }
                                                   1= (t)


                       e
is a martingale under IP . We have
                X(t)  1 
              d (t) = (t) ,r(t; Y (t))v(t; S(t); Y (t)) dt
                                   + vt dt + vx dS + vy dY
                                                                                
                                   + vxx dS dS + vxy dS dY + vyy dY dY
                                       1                           1



                             1 
                                       2                           2


                        = (t) (,rv + vt + rSvx + vy + 12 2 S 2 vxx +  Svxy + 21 2 vyy ) dt
                                                            
                                   + (Svx + vy ) dBe
The partial differential equation satisfied by v is

                       ,rv + vt + rxvx + vy + 12 2x2 vxx +  xvxy + 12 2 vyy = 0
where it should be noted that v = v(t; x; y), and all other variables are functions of (t; y). We have
                                        X(t) 1
                                   d                               e
                                     (t) = (t) [Svx + vy ] dB(t);
where  = (t; Y (t)), = (t; Y (t)), v = v(t; S(t); Y (t)), and S = S(t). We want to choose (t) so that
(see (3.2))                             X(t)                   S(t) dB(t):
                                   d           = (t)(t; Y (t))       e
                                           (t)                    (t)
Therefore, we should take (t) to be

                        (t) = vx (t; S(t); Y (t)) + (t;(t; Y (t))
                                                          Y (t)) S(t) vy (t; S(t); Y (t)):
232
Chapter 23

Recognizing a Brownian Motion

Theorem 0.62 (Levy) Let B (t); 0  t  T; be a process on (                    ; F ; P), adapted to a filtration
F (t); 0  t  T , such that:
     1. the paths of B (t) are continuous,
     2. B is a martingale,
     3. hB i(t) = t; 0  t  T , (i.e., informally dB (t) dB (t) = dt).

Then B is a Brownian motion.

Proof: (Idea) Let 0  s < t  T be given. We need to show that B (t) , B (s) is normal, with
mean zero and variance t , s, and B (t) , B (s) is independent of F (s). We shall show that the
conditional moment generating function of B (t) , B (s) is
                                                                 12
                                  IE e u( B ( t ), B ( s )) F (s) = e 2 u (t,s):
Since the moment generating function characterizes the distribution, this shows that B (t) , B (s)
is normal with mean 0 and variance t , s, and conditioning on F (s) does not affect this, i.e.,
B (t) , B(s) is independent of F (s).
We compute (this uses the continuity condition (1) of the theorem)

                           deuB(t) = ueuB(t)dB(t) + 12 u2 euB(t)dB (t) dB (t);
so
                                                   Zt                              Zt
                             euB (t) = euB (s) +        ueuB(v) dB(v ) + 12 u2          euB(v)      dv:
                                                                                                    |{z}
                                                    s                              s             uses cond. 3


                                                        233
234

      R
Now 0t ueuB (v)dB (v ) is a martingale (by condition 2), and so

                                          Z t                            
                                     IE          ueuB(v) dB(v ) F (s)
                                            s                                 Z t                          
                                            Zs
                                     =,                 ueuB(v) dB(v ) + IE          ueuB (v)dB(v ) F (s)
                                                0                               0
                                     = 0:
It follows that
                                                             Zt                     
                  IE euB(t) F (s) = euB (s) + 21 u2                 IE euB(v) F (s) dv:
                                                                s

We define
                                                                   
                              '(v) = IE euB(v) F (s) ;

so that

                              '(s) = euB(s)
and
                                                               Zt
                             '(t) = euB(s) + 21 u2 '(v ) dv;
                                                  s
                              0      1  2
                             ' (t) = 2 u '(t);
                                        1
                             '(t) = ke 2 u t :      2




Plugging in s, we get

                                             1 2                         1 2
                            euB (s) = ke 2 u s =)k = euB(s), 2 u s :
Therefore,
                                                               1 2
                  IE euB(t) F (s) = '(t) = euB(s)+ 2 u (t,s) ;
                                         1 2
          IE eu(B(t),B(s)) F (s) = e 2 u (t,s):
CHAPTER 23. Recognizing a Brownian Motion                                             235

23.1 Identifying volatility and correlation

Let B1 and B2 be independent Brownian motions and
                              dS1 = r dt +  dB +  dB ;
                               S1           11 1   12 2
                              dS2 = r dt +  dB +  dB ;
                               S            21 1   22 2
                                2
Define
                                       q
                                1 =  211 + 212 ;
                                     q
                                2 =  221 + 222 ;
                                  = 1121 + 1222 :
                                                    1 2
Define processes W1 and W2 by

                             dW1 = 11 dB1 + 12 dB2
                                             1
                             dW2 = 21 1  22 dB2 :
                                      dB   +
                                             2
Then W1 and W2 have continuous paths, are martingales, and

                        dW1 dW1 = 12 (11dB1 + 12 dB2 )2
                                           1
                                    = 1 (2 dB dB +  2 dB dB )
                                      21      11     1   1   12   2   2
                                    = dt;
and similarly

                        dW2 dW2 = dt:
Therefore, W1 and W2 are Brownian motions. The stock prices have the representation
                                    dS1 = r dt +  dW ;
                                     S1           1  1
                                    dS2 = r dt +  dW :
                                     S            2  2
                                       2
The Brownian motions W1 and W2 are correlated. Indeed,

                  dW1 dW2 =  1 (11dB1 + 12 dB2 )(21dB1 + 22dB2)
                                 1 2
                            =  1 (11 21 + 12 22 ) dt
                                1 2
                            =  dt:
236

23.2 Reversing the process

Suppose we are given that
                                        dS1 = r dt +  dW ;
                                         S1           1 1
                                        dS2 = r dt +  dW ;
                                         S            2 2
                                         2
where W1 and W2 are Brownian motions with correlation coefficient . We want to find
                                               "            #
                                           =  11  12
                                                 21 22
so that
                                    "        #"           #
                         0 =  11    12 11  21
                                    
                                " 21 2 22 2 12 22                          #
                                     11
                               =   + +  12       11  21 +  12  22
                                  11 21      12 22        221 + 222
                                " 2                #
                                   1
                               =        1  2
                                   1 2      22
A simple (but not unique) solution is (see Chapter 19)

                                     11 =  1; 12 = 0;
                                                  q
                                21 = 2 ;  22 = 1 , 2 2 :
This corresponds to

                          1 dW1 = 1dB1 =)dB1 = dW1;
                                             q
                          2 dW2 = 2 dB1 + 1 , 2 2 dB2
                                 =) dB2 = dWp2 ,  dW 1 ; ( 6= 1)
                                               1,  2
If  = 1, then there is no B2 and dW2 =  dB1 =  dW1:
Continuing in the case  6= 1, we have

                 dB1 dB1 = dW1 dW1 = dt;
                                                                   
                 dB2 dB2 = 1 ,1 2 dW2 dW2 , 2 dW1 dW2 + 2dW2 dW2
                                                         
                            = 1 ,1 2 dt , 22 dt + 2 dt
                            = dt;
CHAPTER 23. Recognizing a Brownian Motion                                            237

so both B1 and B2 are Brownian motions. Furthermore,

                      dB1 dB2 = p 1       (dW1 dW2 , dW1 dW1 )
                                   1 , 2
                                = p 1 2 ( dt ,  dt) = 0:
                                   1,
We can now apply an Extension of Levy’s Theorem that says that Brownian motions with zero
cross-variation are independent, to conclude that B1 ; B2 are independent Brownians.
238
Chapter 24

An outside barrier option

Barrier process:
                                  dY (t) =  dt +  dB (t):
                                  Y (t)            1 1

Stock process:
                      dS (t) =  dt +  dB (t) + q1 , 2  dB (t);
                       S (t)            2 1                2 2

where  1 > 0; 2 > 0; ,1 <  < 1, and B1 and B2 are independent Brownian motions on some
( ; F ; P). The option pays off:
                                   (S (T ) , K )+ 1fY  (T )<Lg
at time T , where
                               0 < S (0) < K; 0 < Y (0) < L;

                                       Y  (T ) = 0max
                                                   tT
                                                        Y (t):

Remark 24.1 The option payoff depends on both the Y and S processes. In order to hedge it, we
will need the money market and two other assets, which we take to be Y and S . The risk-neutral
measure must make the discounted value of every traded asset be a martingale, which in this case
means the discounted Y and S processes.


We want to find 1 and 2 and define

                          dBe1 = 1 dt + dB1; dBe2 = 2 dt + dB2 ;
                                                239
240

so that
                            dY = r dt +  dBe
                            Y            1 1
                               = r dt + 1 1 dt + 1 dB1 ;
                            dS = r dt +  dBe + q1 , 2  dBe
                             S             2 1              2 2
                                                       q
                                = r dt + 2 1 dt + 1 , 2  2 2 dt
                                               q
                                  + 2 dB1 + 1 , 2 2 dB2 :
We must have

                                     = r +  1 1 ;
                                                     q
                                                                                                (0.1)
                                     = r + 21 + 1 , 2 2 2:                               (0.2)

We solve to get

                                1 = , r ;
                                          1
                                2 = p r , 
                                        ,         2 1 :
                                           1 ,  2
                                                 2

We shall see that the formulas for 1 and 2 do not matter. What matters is that (0.1) and (0.2)
uniquely determine 1 and 2 . This implies the existence and uniqueness of the risk-neutral measure.
We define
                                     n                                      o
                      Z (T ) = exp ,1 B1(T ) , 2B2 (T ) , 21 (12 + 22 )T ;
                               Z
                     If
                      P (A) = Z (T ) dIP; 8A 2 F :
                                A
Under If
       P , Be1 and Be2 are independent Brownian motions (Girsanov’s Theorem). If
                                                                               P is the unique
risk-neutral measure.

Remark 24.2 Under both IP and If
                               P , Y has volatility  1, S has volatility 2 and
                                        dY dS =   dt;
                                         YS       1 2

i.e., the correlation between dY     dS
                               Y and S is .
The value of the option at time zero is
                                             h                               i
                     v(0; S (0); Y (0)) = If
                                           E e,rT (S (T ) , K )+ 1fY  (T )<Lg :
We need to work out a density which permits us to compute the right-hand side.
CHAPTER 24. An outside barrier option                                                              241

Recall that the barrier process is
                                   dY = r dt +  dBe ;
                                   Y            1 1

so
                                                  n                        o
                               Y (t) = Y (0) exp rt + 1 Be1 (t) , 21  21 t :
Set

                                   b = r=1 , 1=2;
                              Bb (t) = bt + Be1 (t);
                             c(T ) = max Bb (t):
                             M          0tT
Then

                              Y (t) = Y (0) expf1Bb (t)g;
                            Y (T ) = Y (0) expf1Mc(T )g:
                     b (T ) and M
The joint density of B          c(T ), appearing in Chapter 20, is
                      If
                       P fBb (T ) 2 d^b; M
                                         c(T ) 2 dm^ g
                           2(2 m
                               ^  , ^b) ( (2m    ^  ,  ^b)2 b^ 1 b2 ) ^
                       = p             exp , 2T +  b , 2  T db dm;    ^
                            T 2T
                         m^ > 0; ^b < m:^
The stock process.
         dS = r dt +  dBe + q1 , 2  dBe ;
         S             2 1             2 2

so
                                                            q
       S (T ) = S (0) expfrT + 2 Be1 (T ) , 21 222 T + 1 , 2 2Be2(T ) , 21 (1 , 2)22 T g
                                                         q
              = S (0) expfrT , 12 22 T + 2 Be1 (T ) + 1 , 2 2 Be2 (T )g
From the above paragraph we have

      Be1 (T ) = ,bT + Bb (T );
so
                                                            q
                                   b                    b
       S (T ) = S (0) expfrT + 2 B (T ) , 2 2 T , 2T + 1 , 2 2Be2 (T )g
                                            1  2
242

24.1 Computing the option value

                          h                                   i
v (0; S (0); Y (0)) = If
                       E e,rT (S (T ) , K )+ 1fY  (T )<Lg
                                                                                   q                       +
                   = e,rT If
                           E S (0) exp (r , 21  22 , 2 b)T + 2 Bb (T ) + 1 , 2 2 Be2(T ) , K
                                                
                    :1fY (0)exp[ Mb (T )]<Lg
                                   1



                              b (T ); M
We know the joint density of (B       c(T )). The density of Be2(T ) is
                                                   ( ~2 )
                          IP fB2 (T ) 2 dbg = p exp , 2bT d~b; ~b 2 IR:
                          f   e          ~     1
                                                    2T
Furthermore, the pair of random variables (B   b (T ); Mc(T )) is independent of Be (T ) because Be1 and
eB2 are independent under IfP . Therefore, the joint density of the random vector (2Be2(T ); Bb (T ); M
                                                                                                      c(T ))
is

 If
  P fBe2 (T ) 2 d~b; Bb (T ) 2 d^b; M
                                    c(T ) 2 dm;
                                             ^ g = If
                                                    P fBe2 (T ) 2 d~bg:If
                                                                        P fBb (T ) 2 d^b; M
                                                                                          c(T ) 2 dm^ g
The option value at time zero is

  v (0; S (0); Y (0))
                      L
              log
             1
              1  Z Y Zm^ Z1 
                    (0)                                            q           +
   =e  , rT                                             b        ^           ~
                             S (0) exp (r , 2  2 , 2 )T + 2b + 1 ,  2 b , K
                                            1   2                         2
                  0 ( ,1),1
                      ~b2
    : p 1 exp , 2T
        2T
      2(2 m
          ^  , ^b) ( (2m^ , ^b)2 b^ 1 b2 )
    : p           exp ,
                              2T
                                     + b , 2  T
       T 2T
    :d~b d^b dm:
              ^
The answer depends on T; S (0) and Y (0). It also depends on 1 ; 2 ; ; r; K and L. It does not
depend on ; ; 1; nor 2 . The parameter b appearing in the answer is b = r , 2 :
                                                                                  1
                                                                                          1



Remark 24.3 If we had not regarded Y as a traded asset, then we would not have tried to set its
mean return equal to r. We would have had only one equation (see Eqs (0.1),(0.2))
                                                          q
                                        = r + 21 + 1 , 2 22                                  (1.1)

to determine 1 and 2 . The nonuniqueness of the solution alerts us that some options cannot be
hedged. Indeed, any option whose payoff depends on Y cannot be hedged when we are allowed to
trade only in the stock.
CHAPTER 24. An outside barrier option                                                             243

If we have an option whose payoff depends only on S , then Y is superfluous. Returning to the
original equation for S ,
                             dS =  dt +  dB + q1 , 2  dB ;
                              S            2 1            2 2

we should set                                         q
                               dW =  dB1 + 1 , 2dB2 ;
so W is a Brownian motion under IP (Levy’s theorem), and
                                    dS =  dt +  dW:
                                     S              2

Now we have only Brownian motion, there will be only one , namely,

                                         = , r ;
                                                 2
         f =  dt + dW; we have
so with dW
                                    dS = r dt +  dW
                                     S             2 f;

and we are on our way.


24.2 The PDE for the outside barrier option

Returning to the case of the option with payoff

                                     (S (T ) , K )+ 1fY  (T )<Lg;
we obtain a formula for
                                              h                                         i
                 v(t; x; y) = e,r(T ,t)If
                                        E t;x;y (S (T ) , K )+1fmaxtuT Y (u) < Lg ;
by replacing T , S (0) and Y (0) by T , t, x and y respectively in the formula for v (0; S (0); Y (0)).
Now start at time 0 at S (0) and Y (0). Using the Markov property, we can show that the stochastic
process
                                         e,rt v (t; S (t); Y (t))
is a martingale under If
                       P . We compute
        h                      i
      d e,rtv(t; S (t); Y (t))
                                                                                    
       = e,rt      ,rv + vt + rSvx + rY vy + 21 22S 2vxx + 12SY vxy + 12 21Y 2vyy dt
                            q                                  
                       e                      e
            + 2 Svx dB1 + 1 ,   2Svx dB2 +  1Y vy dB1
                                   2                         e
244

                             y
                                          v(t, x, L) = 0, x >= 0
                      L




                                                                            x
                                  v(t, 0, 0) = 0

        Figure 24.1: Boundary conditions for barrier option. Note that t 2 [0; T ] is fixed.




Setting the dt term equal to 0, we obtain the PDE




  , rv + vt + rxvx + ryvy + 12 22x2vxx
                                   + 1 2 xyvxy + 12 21 y 2 vyy = 0;
                                                                   0  t < T; x  0; 0  y  L:


The terminal condition is




                            v(T; x; y) = (x , K )+; x  0; 0  y < L;


and the boundary conditions are




                                        v(t; 0; 0) = 0; 0  t  T;
                                 v (t; x; L) = 0; 0  t  T; x  0:
CHAPTER 24. An outside barrier option                                                                245




 x=0                                                y=0
 ,rv + vt + ryvy + 12 21y2vyy = 0                  ,rv + vt + rxvx + 12 22x2vxx = 0
 This is the usual Black-Scholes formula            This is the usual Black-Scholes formula
 in y .                                             in x.

 The boundary conditions are                        The boundary condition is
 v (t; 0; L) = 0; v (t; 0; 0) = 0;                  v (t; 0; 0) = e,r(T ,t)(0 , K )+ = 0;
 the terminal condition is                          the terminal condition is
 v (T; 0; y) = (0 , K )+ = 0; y  0:                v (T; x; 0) = (x , K )+ ; x  0:
 On the x = 0 boundary, the option value            On the y = 0 boundary, the barrier is ir-
 is v (t; 0; y ) = 0; 0  y  L:                    relevant, and the option value is given by
                                                    the usual Black-Scholes formula for a Eu-
                                                    ropean call.


24.3 The hedge

After setting the dt term to 0, we have the equation
                     h                         i
                   d e,rtv(t; S (t); Y (t))
                                                   q                                 
                   = e,rt 2Svx dBe1 + 1 , 2 2 Svx dBe2 +  1 Y vy dBe1 ;
                                                                e1; Be2; S; Y are functions of t. Note
where vx = vx (t; S (t); Y (t)), vy = vy (t; S (t); Y (t)), and B
that
                          h          i
                         d e,rtS (t) = e,rt [,rS (t) dt + dS (t)]
                                                                    q                           
                                         = e,rt 2S (t) dBe1 (t) + 1 , 2  2S (t) dBe2 (t) :
                          h          i
                      d e,rtY (t) = e,rt [,rY (t) dt + dY (t)]
                                  = e,rt  1Y (t) dBe1 (t):
Therefore,
             h                       i
          d e,rtv (t; S (t); Y (t)) = vx d[e,rtS ] + vy d[e,rtY ]:
Let 2 (t) denote the number of shares of stock held at time t, and let 1(t) denote the number of
“shares” of the barrier process Y . The value X (t) of the portfolio has the differential

                              dX = 2dS + 1 dY + r[X , 2S , 1Y ] dt:
246

This is equivalent to

                        d[e,rtX (t)] = 2 (t)d[e,rtS (t)] + 1(t)d[e,rtY (t)]:
To get X (t) = v (t; S (t); Y (t)) for all t, we must have

                                       X (0) = v (0; S (0); Y (0))
and
                                      2 (t) = vx (t; S (t); Y (t));
                                      1 (t) = vy (t; S (t); Y (t)):
Chapter 25

American Options

This and the following chapters form part of the course Stochastic Differential Equations for Fi-
nance II.


25.1 Preview of perpetual American put


                                        dS = rS dt + S dB
Intrinsic value at time t : (K , S (t))+ :
Let L 2 [0; K ] be given. Suppose we exercise the first time the stock price is L or lower. We define

                                 L = minft  0; S (t)  Lg;
                             vL (x) = IEe,rL (K , S (L ))+
                                      (
                                    =
                                        K,x                  if x  L,
                                        (K , L)IEe  , r L   if x > L:

The plan is to comute vL (x) and then maximize over L to find the optimal exercise price. We need
to know the distribution of L .


25.2 First passage times for Brownian motion: first method

(Based on the reflection principle)
Let B be a Brownian motion under IP , let x > 0 be given, and define

                                       = minft  0; B(t) = xg:
 is called the first passage time to x. We compute the distribution of  .
                                                 247
248




                           Intrinsic value
                          K




                                                        K         Stock price       x

                      Figure 25.1: Intrinsic value of perpetual American put


Define
                                                   M (t) = 0max
                                                            ut
                                                                 B(u):
From the first section of Chapter 20 we have
                                                              (                 )
      IP fM (t) 2 dm; B (t) 2 dbg = 2(2pm , b) exp , (2m2,t b) dm db; m > 0; b < m:
                                                              2
                                      t 2t
Therefore,

                                  Z 1 Z m 2(2m , b) ( (2m , b)2 )
                 IP fM (t)  xg =            p      exp , 2t            db dm
                                   x ,1 t 2t
                                  Z1 2         (              )
                                =     p exp , 2t  (2 m , b ) 2 b=m
                                                                     dm
                                   x    2t                     b=,1
                                  Z1 2         ( 2)
                                =     p exp , m2t dm:
                                        2t    x

                                   m in the integral to get
We make the change of variable z = p t
                                              Z1            2  (      )
                                             = p p2 exp , z dz:
                                              x= t 2      2

Now

                            t()M (t)  x;
CHAPTER 25. American Options                                                                  249

so
                                    @ IP f  tg dt
                     IP f 2 dtg = @t
                                    @ IP fM (t)  xg dt
                                 = @t
                                   " Z1               ( 2) #
                                 = @t p p exp , z2 dz dt
                                     @          2
                                          x= t 2
                                               ( 2)  
                                 = , p exp , x2t : @t
                                       2                @ px dt
                                        2                  t
                                               ( 2)
                                 = px exp , x dt:
                                   t 2t           2t
We also have the Laplace transform formula
                                     Z1
                         IEe,  =         e, t IP f 2 dtg
                                      0p
                                  = e,x 2 ;        > 0: (See Homework)
Reference: Karatzas and Shreve, Brownian Motion and Stochastic Calculus, pp 95-96.


25.3 Drift adjustment

Reference: Karatzas/Shreve, Brownian motion and Stochastic Calculus, pp 196–197.
For 0  t < 1, define
                                  Be (t) = t + B (t);
                                  Z (t) = expf,B (t) , 12 2 tg;
                                         = expf,Be (t) + 12 2 tg;
Define

                                      ~ = minft  0; Be (t) = xg:
We fix a finite time T and change the probability measure “only up to T ”. More specifically, with
T fixed, define                         Z
                               If
                                P (A) =       Z (T ) dP; A 2 F (T ):
                                          A
Under If
       P , the process Be (t); 0  t  T , is a (nondrifted) Brownian motion, so
                 If
                  P f~ 2 dtg = IP f 2 dtg
                                            ( 2)
                              = p exp , x dt; 0 < t  T:
                                   x
                                 t 2t        2t
250

For 0 < t  T we have
                                     h     i
                   IP f~  tg = IE 1f~tg
                                                   
                                  E 1f~tg Z (1T )
                               = If
                                     h                                i
                               = If
                                  E 1f~tg expfBe (T ) , 12 2 T g
                                                                                
                               = If
                                  E 1f~tgIf
                                            E expfBe (T ) , 12 2 T g F (~ ^ t)
                                     h                                         i
                               = If
                                  E 1f~tg expfBe (~ ^ t) , 21 2 (~ ^ t)g
                                     h                           i
                               = If
                                  E 1f~tg expfx , 12 2 ~g
                                 Zt
                               = expfx , 12 2 sgIf    P f~ 2 dsg
                                   0
                                 Zt x             (                    2)
                               =       p exp x , 2  s , 2s ds
                                                           1  2      x
                                   0 s 2s
                                 Zt x             (                 )
                               =       p exp , 2s     ( x ,  s ) 2
                                                                      ds:
                                   0  s 2s
Therefore,
                                              (              )
                  IP f~ 2 dtg = px exp , (x ,2tt) dt; 0 < t  T:
                                                   2
                                 t 2t
Since T is arbitrary, this must in fact be the correct formula for all t > 0.



25.4 Drift-adjusted Laplace transform

Recall the Laplace transform formula for

                                        = minft  0; B (t) = xg
for nondrifted Brownian motion:
                         Z1 x     (        2)       p
             IEe,  =                    x
                             p exp , t , 2t dt = e,x 2 ;                        > 0; x > 0:
                          0 t 2t

For
                                  ~ = minft  0; t + B (t) = xg;
CHAPTER 25. American Options                                                                   251

the Laplace transform is
                                Z1 x        (                 )
                       IEe, ~ =                 (
                                     p exp , t , 2tx , t ) 2
                                                                  dt
                                 0 t 2t
                                Z1 x        (      2                 )
                              =                  x
                                     p exp , t , 2t + x , 2  t dt
                                                                1  2
                                 0 t 2t
                                    Z1 x      (                    2)
                              =e x    p exp ,( + 2  )t , 2t dt
                                                     1  2        x
                                      t 2t
                                      0
                                        p
                              =e x , x   2 +2 ;    > 0; x > 0;
where in the last step we have used the formula for IEe,  with      replaced by   + 12 2 .
If ~(!) < 1, then
                                            lim e, ~(! ) = 1;
                                               #0
if ~(! ) = 1, then e, ~(!) = 0 for every      > 0, so
                                            lim e, ~(! ) = 0:
                                               #0
Therefore,
                                         lim e, ~(! ) = 1~<1 :
                                          #0
Letting   #0 and using the Monotone Convergence Theorem in the Laplace transform formula
                                                         p
                                        IEe, ~ = ex,x 2 + ;   2




we obtain                                              p2
                                   IP f~ < 1g = ex,x  = ex,xjj :
If   0, then
                                            IP f~ < 1g = 1:
If  < 0, then
                                        IP f~ < 1g = e2x < 1:
(Recall that x > 0).


25.5 First passage times: Second method

(Based on martingales)
Let  > 0 be given. Then
                                      Y (t) = expfB(t) , 21  2tg
252

is a martingale, so Y (t ^  ) is also a martingale. We have
                            1 = Y (0 ^  )
                              = IEY (t ^  )
                              = IE expfB (t ^  ) , 21 2 (t ^  )g:
                                 lim1 IE expfB (t ^  ) , 12 2 (t ^  )g:
                              = t!
We want to take the limit inside the expectation. Since
                            0  expfB (t ^  ) , 12  2 (t ^  )g  ex ;
this is justified by the Bounded Convergence Theorem. Therefore,
                                    lim1 expfB (t ^  ) , 12 2 (t ^  )g:
                            1 = IE t!
There are two possibilities. For those ! for which  (! ) < 1,
                                                                        1 2
                         lim expfB (t ^  ) , 12 2 (t ^  )g = ex, 2   :
                        t!1
For those ! for which  (! ) = 1,
                lim expfB (t ^  ) , 12  2 (t ^  )g  t!
               t!1
                                                          lim1 expfx , 21  2tg = 0:
Therefore,
                                    lim1 expfB (t ^  ) , 21  2(t ^  )g
                            1 = IE t!
                                        1            
                              = IE e x, 2   1<1
                                               2



                                         1 2
                              = IEex, 2   ;
                            1 2
where we understand ex, 2   to be zero if  = 1.
                      p
Let   = 21  2 , so  = 2 . We have again derived the Laplace transform formula
                                  p
                              e,x 2 = IEe,  ; > 0; x > 0;
for the first passage time for nondrifted Brownian motion.


25.6 Perpetual American put

                              dS = rS dt + S dB
                            S (0) = x
                            S (t) = x expf(r , 12  2 )t + B(t)g
                                          8 2               39
                                          >
                                          >                   >
                                          < 66 r         77>
                                                              =
                                  = x exp > 64 , t + B (t)75> :
                                          : |  {z 2 }
                                          >
                                                      
                                                              >
                                                              ;
CHAPTER 25. American Options                                                  253

Intrinsic value of the put at time t: (K , S (t))+.
Let L 2 [0; K ] be given. Define for x  L,

                      L = minft  0; S (t) = Lg
                         = minft  0; t + B (t) = 1 log Lx g
                         = minft  0; ,t , B (t) = 1 log Lx g

Define

                      vL = (K , L)IEe,rL
                                                             p        
                         = (K , L) exp ,  log Lx , 1 log Lx 2r + 2
                                    x ,  ,  p2r+
                                                  1    2

                         = (K , L) L                   :
We compute the exponent
                                                           s
                                                          r         2
                        1 p             r         1
                   ,  ,  2r +  = , 2 + 2 ,  2r +  , =2
                                 2            1
                                                     s
                                   = , r2 + 12 , 1 2r + r 2 , r +  2 =4
                                                            2

                                                     s
                                   = , 2 + 12 ,  r 2 + r +  2=4
                                         r         1    2

                                                     s          2
                                         r
                                   = , 2 + 2 ,  r + =2
                                              1    1
                                         r         1 r        
                                   = , 2 + 2 ,   + =2
                                              1

                                   = , 2r2 :
Therefore,
                              8
                              <(K , x);                    0  x  L;
                     vL (x) = :
                                (K , L) L
                                          , x  , 2 r= 
                                                       2
                                                         ; x  L:
                  , ,2r= ; are all of the form Cx,2r= .
The curves (K , L) x
                                2                               2
                       L
We want to choose the largest possible constant. The constant is

                                       C = (K , L)L2r= ;   2
254




      value
                      K-x
      K
                                                            σ2
                                          (K - L) (x/L)-2r/



                              K         Stock price             x
              Figure 25.2: Value of perpetual American put
              value




                                                     -2r/ σ 2
                                             C3 x

                                                    -2r/ σ 2
                                            C2 x
                                                   -2r/ σ 2
                                           C1 x

                                      Stock price      x

                            Figure 25.3: Curves.
CHAPTER 25. American Options                                                                 255

and
                                         @C = ,L r + 2r (K , L)L r ,1
                                                        2
                                                            2
                                                                                  2
                                                                                      2
                                         @L           2
                                                 r                    
                                            = L  ,1 + 2r2 (K , L) L1
                                                   2
                                                       2


                                                 r                    
                                            = L  , 1 + 2r2 + 2r2 K L :
                                                   2
                                                       2




We solve
                         2r  2r K
                     , 1+     +  2 =02 L
to get

                                           L = 22rK
                                                  + 2r :
Since 0 < 2r < 2 + 2r; we have
                                              0 < L < K:
Solution to the perpetual American put pricing problem (see Fig. 25.4):
                              8
                              <
                       v(x) = :(K , x); , x ,2r=                     0  x  L ;
                                (K , L ) L         ;                   x  L;
                                                                2




where
                                           L = 22rK
                                                   + 2r :
Note that                  (
                v0(x) =     ,1;                                               0  x < L ;
                            , 2r (K , L)(L)2r= x,2r= ,1;
                                 2
                                                           2        2
                                                                              x > L:
We have

                           lim v 0(x) = ,2 r2 (K , L) 1
                           x#L                           L
                                           r            2 rK  2 + 2r
                                      = ,2  2 K ,  2 + 2r 2rK
                                            r     2 + 2r , 2r ! 2 + 2r
                                      = ,2  2       2 + 2r        2r
                                      = ,1
                                      = lim v 0 (x):
                                        x"L
256




                   value
                                 K-x
                  K
                                                                       -2r/ σ   2
                                                      (K - L* )(x/L* )



                                L*       K         Stock price       x
                           Figure 25.4: Solution to perpetual American put.

25.7 Value of the perpetual American put

Set
                                  = 2r2 ; L =  22rK
                                                    + 2r = + 1 K:
If 0  x < L, then v (x) = K , x. If L  x < 1, then
                               v(x) = (|K , L{z)(L) } x,                          (7.1)

                                           h ,Cr                   i
                                     = IE e (K , L )+ 1
                                         x
                                                             f<1g ;                (7.2)

where

                               S (0) = x                                            (7.3)
                                    = minft  0; S (t) = L g:                     (7.4)
If 0  x < L, then
            ,rv(x) + rxv0(x) + 12 2x2v00(x) = ,r(K , x) + rx(,1) = ,rK:
If L  x < 1, then
                    ,rv(x) + rxv0(x) + 12 2x2v00(x)
                    = C [,rx, , rx x, ,1 , 12 2 x2 (, , 1)x, ,2 ]
                    = Cx, [,r , r , 21  2 (, , 1)]
                                                2r 
                                   ,
                    = C (, , 1)x r , 2  2  1 2
                                                  
                       = 0:
In other words, v solves the linear complementarity problem: (See Fig. 25.5).
CHAPTER 25. American Options                                                                        257




   6

K@                         v
       @@
           @@
              @@
                                              -x
         L         K
                                   Figure 25.5: Linear complementarity


       For all x 2 IR, x 6= L ,

                                               rv , rxv 0 , 21 2 x2v 00  0;                 (a)
                                                                     v  (K , x)+ ;           (b)
                    One of the inequalities (a) or (b) is an equality.                        (c)

The half-line [0; 1) is divided into two regions:

                                   C = fx; v(x) > (K , x)+ g;
                                   S = fx; rv , rxv0 , 12 2x2v00 > 0g;
and L is the boundary between them. If the stock price is in C , the owner of the put should not
exercise (should “continue”). If the stock price is in S or at L , the owner of the put should exercise
(should “stop”).


25.8 Hedging the put

Let S (0) be given. Sell the put at time zero for v (S (0)). Invest the money, holding (t) shares of
stock and consuming at rate C (t) at time t. The value X (t) of this portfolio is governed by

                     dX (t) = (t) dS (t) + r(X (t) , (t)S (t)) dt , C (t) dt;
or equivalently,

              d(e,rtX (t)) = ,e,rt C (t) dt + e,rt (t)S (t) dB(t):
258

The discounted value of the put satisfies
                                  h                                                    i
          d e,rtv(S (t)) = e,rt ,rv (S (t)) + rS (t)v 0(S (t)) + 12  2 S 2(t)v 00 (S (t)) dt
                           + e,rt S (t)v 0(S (t)) dB (t)
                         = ,rKe,rt 1fS (t)<L g dt + e,rt S (t)v 0(S (t)) dB (t):
We should set

                       C (t) = rK 1fS (t)<Lg ;
                       (t) = v 0(S (t)):
Remark 25.1 If S (t) < L , then

                       v(S (t)) = K , S (t); (t) = v 0(S (t)) = ,1:
To hedge the put when S (t) < L , short one share of stock and hold K in the money market. As
long as the owner does not exercise, you can consume the interest from the money market position,
i.e.,
                                        C (t) = rK 1fS(t)<L g:
Properties of e,rt v (S (t)):

   1. e,rt v (S (t)) is a supermartingale (see its differential above).

   2. e,rt v (S (t))  e,rt (K , S (t))+ ,      0  t < 1;
   3. e,rt v (S (t)) is the smallest process with properties 1 and 2.

Explanation of property 3. Let Y be a supermartingale satisfying

                                Y (t)  e,rt (K , S (t))+; 0  t < 1:                             (8.1)

Then property 3 says that

                                 Y (t)  e,rt v (S (t)); 0  t < 1:                                (8.2)

We use (8.1) to prove (8.2) for t = 0, i.e.,

                                           Y (0)  v (S (0)):                                      (8.3)

If t is not zero, we can take t to be the initial time and S (t) to be the initial stock price, and then
adapt the argument below to prove property (8.2).
Proof of (8.3), assuming Y is a supermartingale satisfying (8.1):
Case I: S (0)  L : We have

                                          (K , S (0))+ = v(S (0)):
                                  Y (0) |{z}
                                        (8:1)
CHAPTER 25. American Options                                                        259

Case II: S (0) > L: For T > 0, we have

              Y (0)  IEY ( ^ T ) (Stopped supermartingale is a supermartingale)
                        h                i
                     IE Y ( ^ T )1f<1g : (Since Y  0)
Now let T !1 to get
                                 h                        i
                        !h1 IE Y ( ^ Ti )1f<1g
              Y (0)  Tlim
                     IE Y ( )1f<1g (Fatou’s Lemma)
                           2                             3
                      IE 64e,r (K , S| {z( )})+1f<1g75    (by 8.1)
                                           L
                     = v (S (0)): (See eq. 7.2)

25.9 Perpetual American contingent claim

Intinsic value: h(S (t)).
Value of the American contingent claim:

                                     v(x) = sup
                                                                  
                                                IE x e,r h(S ( )) ;
                                             
where the supremum is over all stopping times.
Optimal exercise rule: Any stopping time  which attains the supremum.
Characterization of v :

   1. e,rt v (S (t)) is a supermartingale;

   2. e,rt v (S (t))  e,rt h(S (t));    0 < t < 1;
   3. e,rt v (S (t)) is the smallest process with properties 1 and 2.


25.10 Perpetual American call

                                                  
                                v(x) = sup IE x e,r (S ( ) , K )+
                                                                         
                                             
Theorem 10.63

                                           v (x) = x 8x  0:
260

Proof: For every t,
                                                     h                  i
                                      v(x)  IE x e,rt (S (t) , K )+
                                                 h                 i
                                            IE x e,rt(S (t) , K )
                                                 h          i
                                           = IE x e,rt S (t) , e,rt K
                                           = x , e,rt K:
Let t!1 to get v (x)  x.
Now start with S (0) = x and define

                                              Y (t) = e,rt S (t):
Then:

   1. Y is a supermartingale (in fact, Y is a martingale);
   2. Y (t)  e,rt (S (t) , K )+ ;      0  t < 1.
Therefore, Y (0)  v (S (0)), i.e.,
                                                     x  v (x):


Remark 25.2 No matter what  we choose,
                                                                 
                    IE x e,r (S ( ) , K )+ < IE x e,r S ( )  x = v (x):
There is no optimal exercise time.


25.11 Put with expiration

Expiration time: T > 0.
Intrinsic value: (K , S (t))+.
Value of the put:

                            v(t; x) = (value of the put at time t if S (t) = x)
                                    = sup IE xe,r( ,t) (K , S ( ))+:
                                          t T
                                          | {z }
                                        :stopping time

See Fig. 25.6. It can be shown that v; vt; vx are continuous across the boundary, while vxx has a
jump.
Let S (0) be given. Then
     CHAPTER 25. American Options                                                                  261



  x
     6
                v>K,x                                               v (T; x) = 0; x  K
                ,rv + vt + rxvx + 12 2x2vxx = 0

                                                                K


L              v=K,x                                               v (T; x) = K , x; 0  x  K
                vt = 0; vx = ,1; vxx = 0
                ,rv + vt + rxvx + 12 2x2vxx = ,rK
                                                                    -t
                                                            T
                                    Figure 25.6: Value of put with expiration


         1. e,rt v (t; S (t)); 0  t  T; is a supermartingale;

         2. e,rt v (t; S (t))  e,rt (K , S (t))+;    0  t  T;
         3. e,rt v (t; S (t)) is the smallest process with properties 1 and 2.


     25.12 American contingent claim with expiration

     Expiration time: T > 0.
     Intrinsic value: h(S (t)).
     Value of the contingent claim:

                                      v(t; x) = sup IE xe,r( ,t)h(S ( )):
                                                 t T
     Then


                                                           rv , vt , rxvx , 12  2 x2vxx  0;      (a)
                                                                                       v  h(x);   (b)
                At every point (t; x) 2 [0; T ]  [0; 1), either (a) or (b) is an equality.        (c)

     Characterization of v : Let S (0) be given. Then
262

   1. e,rt v (t; S (t)); 0  t  T; is a supermartingale;

   2. e,rt v (t; S (t))  e,rt h(S (t));

   3. e,rt v (t; S (t)) is the smallest process with properties 1 and 2.

The optimal exercise time is

                                 = minft  0; v (t; S (t)) = h(S (t))g
If  (!) = 1, then there is no optimal exercise time along the particular path ! .
Chapter 26

Options on dividend-paying stocks

26.1 American option with convex payoff function

Theorem 1.64 Consider the stock price process

                            dS (t) = r(t)S (t) dt + (t)S (t) dB(t);
where r and  are processes and r(t)  0; 0  t  T; a.s. This stock pays no dividends.
Let h(x) be a convex function of x  0, and assume h(0) = 0. (E.g., h(x) = (x , K )+ ). An
American contingent claim paying h(S (t)) if exercised at time t does not need to be exercised
before expiration, i.e., waiting until expiration to decide whether to exercise entails no loss of value.

Proof: For 0         1 and x  0, we have
                                  h( x) = h((1 , )0 + x)
                                           (1 , )h(0) + h(x)
                                          = h(x):
Let T be the time of expiration of the contingent claim. For 0  t  T ,
                                               ( ZT             )
                                     ( t)
                             0  (T ) = exp , r(u) du  1
                                                      t
and S (T )  0, so
                                      (t)           (t) h(S (T )):
                                 h     (T ) S ( T )  (T )                                           (*)


Consider a European contingent claim paying h(S (T )) at time T . The value of this claim at time
t 2 [0; T ] is                                                   
                               X (t) = (t) IE (1T ) h(S (T )) F (t) :

                                                  263
264

                                            6                                                                                                                                                       .
                                                                                                                                                                                                 ...
                                                                                                                                                                                            ...
                                                                                                                                                                                            ...
                                                                                                                                                                                     ......
                                                                                                                                              
                                                                                                                                                                       ..  .r
                                                                                                                                                                    .... ...

                                                                                                                                                                 .... ...... (x; h(x))
                                                                                                                                                         ....
                                                                                                                                                               .
                        h(x) .... .... .... .... .... .... .... .... .... .... .... .... .... ..... ..... ..... ..... ..... ..... ......r ............. .......
                                                                                                    
                                                                                                                                                                           .




                                                  
                                                                                                                                                         ..
                       h( x) .... .... .... .... .... .... .... .... .... .... .... .... .... ..... ..... ...........................................r... h
                                                                                                                                                    . ...
                                                                                                                                                   ..                      ...
                                                                                                                                                                             ..


                                                 
                                                                                                                                                                              .
                                                                                                                                                                              ..



                                              
                                                                                                                                                                               ..

                                                                                         .. ... . .. . . .                                          ...                         ...
                                                                                       ..
                                            
                                                                         .
                                                                         . . .....
                                                                              .     ..                                                                .
                                                                                                                                                      .                           ...


                                                                                                                                                                       -
                                                  . .... .... ... .....                                                                               .
                                                                                                                                                      ..                            .
                                                                                                                                                                                    ..
                            ..............  .. ...                                                                                                     .
                                                                                                                                                       .
                                                                                                                                                       .                             ..


                                                                                                                                                                 x


                                                   Figure 26.1: Convex payoff function


Therefore,

                  X (t) = 1 IE  (t) h(S (T )) F (t)
                   (t)    (t)       (T )
                                                    
                         (1t) IE h ((Tt)) S (T ) F (t) (by (*))
                           1               S (T ) 
                         (t) h (t) IE (T ) F (t) (Jensen’s inequality)
                                            
                        = 1 h (t) S (t) ( S is a martingale)
                          (t)            (t)
                           = (1t) h(S (t)):

This shows that the value X (t) of the European contingent claim dominates the intrinsic value
h(S (t)) of the American claim. In fact, except in degenerate cases, the inequality
                                                           X (t)  h(S (t)); 0  t  T;
is strict, i.e., the American claim should not be exercised prior to expiration.



26.2 Dividend paying stock

Let r and  be constant, let  be a “dividend coefficient” satisfying

                                                                                         0 <  < 1:
CHAPTER 26. Options on dividend paying stocks                                                     265

Let T > 0 be an expiration time, and let t1 2 (0; T ) be the time of dividend payment. The stock
price is given by
              (
     S (t) = S (0) expf(r , 2  )t +1B2 (t)g;                                    0  t  t1 ;
                               1 2
              (1 ,  )S (t1) expf(r , 2  )(t , t1 ) +  (B (t) , B (t1 ))g; t1 < t  T:
Consider an American call on this stock. At times t 2 (t1 ; T ), it is not optimal to exercise, so the
value of the call is given by the usual Black-Scholes formula

           v(t; x) = xN (d+(T , t; x)) , Ke,r(T ,t) N (d,(T , t; x)); t1 < t  T;
where
                                                 x                   
                      d (T , t; x) = p 1    log K + (T , t)(r   =2) :
                                                                  2
                                       T ,t
At time t1 , immediately after payment of the dividend, the value of the call is

                                        v (t1 ; (1 , )S (t1)):
At time t1 , immediately before payment of the dividend, the value of the call is

                                              w(t1 ; S (t1));
where                                         
                           w(t1 ; x) = max (x , K )+ ; v (t1; (1 , )x :
Theorem 2.65 For 0  t  t1 , the value of the American call is w(t; S (t)), where
                                                  h                        i
                              w(t; x) = IE t;x e,r(t ,t) w(t1 ; S (t1)) :
                                                          1



This function satisfies the usual Black-Scholes equation

                   ,rw + wt + rxwx + 12 2x2wxx = 0; 0  t  t1; x  0;
(where w = w(t; x)) with terminal condition
                                       
                       w(t1; x) = max (x , K )+; v (t1 ; (1 ,  )x) ; x  0;
and boundary condition
                                     w(t; 0) = 0; 0  t  T:
The hedging portfolio is               (
                                           wx(t; S (t));        0  t  t1 ;
                              (t) =
                                           vx(t; S (t));        t1 < t  T:
Proof: We only need to show that an American contingent claim with payoff w(t1; S (t1)) at time
t1 need not be exercised before time t1 . According to Theorem 1.64, it suffices to prove
   1. w(t1; 0) = 0,
266

   2. w(t1; x) is convex in x.

Since v (t1 ; 0) = 0, we have immediately that
                                           
                         w(t1; 0) = max (0 , K )+ ; v(t1; (1 , )0) = 0:
To prove that w(t1; x) is convex in x, we need to show that v (t1; (1 ,  )x) is convex is x. Obviously,
(x , K )+ is convex in x, and the maximum of two convex functions is convex. The proof of the
convexity of v (t1; (1 ,  )x) in x is left as a homework problem.



26.3 Hedging at time t1

Let x = S (t1).
Case I: v (t1; (1 ,  )x)  (x , K )+ .
The option need not be exercised at time t1 (should not be exercised if the inequality is strict). We
have

                           w(t1 ; x) = v(t1; (1 , )x);
                  (t1) = wx (t1 ; x) = (1 ,  )vx (t1 ; (1 ,  )x) = (1 ,  )(t1+);
where
                                          (t1 +) = lim (t)
                                                       t#t1
is the number of shares of stock held by the hedge immediately after payment of the dividend. The
post-dividend position can be achieved by reinvesting in stock the dividends received on the stock
held in the hedge. Indeed,

 (t1 +) = 1 (t1) = (t1) +  (t1)
           1,                           1,
                     ( t 1 ) S (
         = (t1 ) + (1 ,  )S (t ) t 1 )
                                   1
                                                                 dividends received
          = # of shares held when dividend is paid + price per share when dividend is reinvested

Case II: v (t1; (1 ,  )x) < (x , K )+ .
The owner of the option should exercise before the dividend payment at time t1 and receive (x , K ).
The hedge has been constructed so the seller of the option has x , K before the dividend payment
at time t1 . If the option is not exercised, its value drops from x , K to v (t1; (1 ,  )x), and the seller
of the option can pocket the difference and continue the hedge.
Chapter 27

Bonds, forward contracts and futures

Let fW (t); F (t); 0  t  T g be a Brownian motion (Wiener process) on some (         ; F ; P). Con-
sider an asset, which we call a stock, whose price satisfies


                             dS (t) = r(t)S (t) dt + (t)S (t) dW (t):

Here, r and  are adapted processes, and we have already switched to the risk-neutral measure,
which we call IP . Assume that every martingale under IP can be represented as an integral with
respect to W .
Define the accumulation factor

                                                  Z t           
                                     (t) = exp           r(u) du :
                                                    0

A zero-coupon bond, maturing at time T , pays 1 at time T and nothing before time T . According
to the risk-neutral pricing formula, its value at time t 2 [0; T ] is

                                                            
                          B (t; T ) = (t) IE (1T ) F (t)
                                         (t)       
                                    = IE (T ) F (t)
                                        " (         ZT           )       #
                                   = IE exp ,             r(u) du F (t) :
                                                     t


Given B (t; T ) dollars at time t, one can construct a portfolio of investment in the stock and money

                                                  267
268

market so that the portfolio value at time T is 1 almost surely. Indeed, for some process ,
                                                
             B(t; T ) = (t) IE (1T ) F (t)
                            |    {z        }
                            martingale
                                  1     Zt              
                      = (t) IE (T ) +         (u) dW (u)
                                            0
                                        Zt         
                      = (t) B (0; T ) +              (u) dW (u) ;
                                              0 Z                         
                                                      t
            dB (t; T ) = r(t) (t) B (0; T ) +      (u) dW (u) dt + (t) (t) dW (t)
                                               0
                       = r(t)B (t; T ) dt + (t) (t) dW (t):
The value of a portfolio satisfies

                          dX (t) = (t) dS (t) + r(t)[X (t) , (t)S (t)]dt
                                 = r(t)X (t) dt + (t)(t)S (t) dW (t):
                                                                                                    (*)

We set
                                            (t) =  ((tt))S((tt)) :
If, at any time t, X (t) = B (t; T ) and we use the portfolio (u); t  u  T , then we will have

                                          X (T ) = B(T; T ) = 1:
If r(t) is nonrandom for all t, then
                                                    ( ZT      )
                                     B (t; T ) = exp , r(u) du ;
                                                             t
                                dB (t; T ) = r(t)B (t; T ) dt;
i.e., = 0. Then  given above is zero. If, at time t, you are given B (t; T ) dollars and you always
invest only in the money market, then at time T you will have
                                                    (Z T               )
                                     B(t; T ) exp          r(u) du = 1:
                                                      t

If r(t) is random for all t, then is not zero. One generally has three different instruments: the
stock, the money market, and the zero coupon bond. Any two of them are sufficient for hedging,
and the two which are most convenient can depend on the instrument being hedged.
CHAPTER 27. Bonds, forward contracts and futures                                                     269

27.1 Forward contracts

We continue with the set-up for zero-coupon bonds. The T -forward price of the stock at time
t 2 [0; T ] is the F (t)-measurable price, agreed upon at time t, for purchase of a share of stock at
time T , chosen so the forward contract has value zero at time t. In other words,
                            1                            
                        IE (T ) (S (T ) , F (t)) F (t) = 0; 0  t  T:
We solve for F (t):
                                       1                          
                             0 = IE         (S (T ) , F (t)) F (t)
                                       (T )
                                                                    
                               = IE S (T ) F (t) , F (t) IE (t) F (t)
                                       (T )              (t)      (T )
                               = S (t) , F (t) B (t; T ):
                                   (t)      (t)
This implies that

                         F (t) = BS(t;(tT) ) :
Remark 27.1 (Value vs. Forward price) The T -forward price F (t) is not the value at time t of
the forward contract. The value of the contract at time t is zero. F (t) is the price agreed upon at
time t which will be paid for the stock at time T .


27.2 Hedging a forward contract

Enter a forward contract at time 0, i.e., agree to pay F (0) = BS(0(0)
                                                                    ;T ) for a share of stock at time T .
At time zero, this contract has value 0. At later times, however, it does not. In fact, its value at time
t 2 [0; T ] is
                                          1                           
                      V (t) = (t) IE (T ) (S (T ) , F (0)) F (t)
                                                                         
                            = (t) IE S((TT )) F (t) , F (0) IE ((Tt)) F (t)
                            = (t) S((tt)) , F (0)B (t; T )
                            = S (t) , F (0)B (t; T ):
This suggests the following hedge of a short position in the forward contract. At time 0, short F (0)
T -maturity zero-coupon bonds. This generates income
                              F (0)B (0; T ) = BS(0(0)
                                                    ; T ) B(0; T ) = S (0):
270

Buy one share of stock. This portfolio requires no initial investment. Maintain this position until
time T , when the portfolio is worth

                                 S (T ) , F (0)B (T; T ) = S (T ) , F (0):
Deliver the share of stock and receive payment F (0).
A short position in the forward could also be hedged using the stock and money market, but the
implementation of this hedge would require a term-structure model.


27.3 Future contracts

Future contracts are designed to remove the risk of default inherent in forward contracts. Through
the device of marking to market, the value of the future contract is maintained at zero at all times.
Thus, either party can close out his/her position at any time.
Let us first consider the situation with discrete trading dates

                                       0 = t0 < t1 < : : : < tn = T:
On each [tj ; tj +1 ), r is constant, so
                                                   Z tk                
                                   (tk+1 ) = exp                 r(u) du
                                                            +1


                                                 8 0k                 9
                                                 <X                   =
                                           = exp : r(tj )(tj +1 , tj );
                                                  j =0

is F (tk )-measurable.
Enter a future contract at time tk , taking the long position, when the future price is (tk ). At time
tk+1 , when the future price is (tk+1 ), you receive a payment (tk+1 ) , (tk ). (If the price has
fallen, you make the payment ,((tk+1 ) , (tk )). ) The mechanism for receiving and making
these payments is the margin account held by the broker.
By time T = tn , you have received the sequence of payments

                    (tk+1 ) , (tk ); (tk+2 ) , (tk+1 ); : : : ; (tn ) , (tn,1 )
at times tk+1 ; tk+2 ; : : : ; tn . The value at time t = t0 of this sequence is
                                    2n,1                                          3
                                      X       1
                             (t) IE 4      ( t          ((tj +1 ) , (tj )) F (t)5 :
                                      j =k     j +1 )

Because it costs nothing to enter the future contract at time t, this expression must be zero almost
surely.
CHAPTER 27. Bonds, forward contracts and futures                                                     271

The continuous-time version of this condition is
                                     "Z T                                #
                            (t) IE                   1 d(u) F (t) = 0; 0  t  T:
                                             t       (u)
Note that (tj +1 ) appearing in the discrete-time version is F (tj )-measurable, as it should be when
approximating a stochastic integral.

Definition 27.1 The T -future price of the stock is any F (t)-adapted stochastic process

                                                         f(t); 0  t  T g ;
satisfying

                                                                   (T ) = S (T ) a.s., and
                                  "Z T                               #
                                                                                                     (a)

                             IE                  1 d(u) F (t) = 0; 0  t  T:
                                     t           (u)                                                 (b)

Theorem 3.66 The unique process satisfying (a) and (b) is
                                                                        
                                     (t) = IE S (T ) F (t) ; 0  t  T:

R t 1 dWe
Proof:    first show that (b) holds if and only if  is a martingale. If  is a martingale, then
 0 (u) (u) is also a martingale, so
                  "Z T                               #
             IE          1 d(u) F (t) = IE Z t 1 d(u) F (t) , Z t 1 d(u)
                    t    (u)                  0 (u)                0 (u)
                                       = 0:
On the other hand, if (b) holds, then the martingale
                                             "Z T                            #
                          M (t) = IE                      1 d(u) F (t)
                                                 0        (u)
satisfies
                                     Zt 1                             "Z T                       #
                          M (t) =                                                1 d(u) F (t)
                                       (u) d(u) + IE t
                                         0                                       (u)
                                    Zt 1
                                  =        d(u); 0  t  T:
                                     0 (u)
this implies

                         dM (t) = (1t) d(t);
                          d(t) = (t) dM (t);
272

and so  is a martingale (its differential has no dt term).
Now define                                                    
                                     (t) = IE S (T ) F (t) ; 0  t  T:
Clearly (a) is satisfied. By the tower property,  is a martingale, so (b) is also satisfied. Indeed, this
 is the only martingale satisfying (a).

27.4 Cash flow from a future contract

With a forward contract, entered at time 0, the buyer agrees to pay F (0) for an asset valued at S (T ).
The only payment is at time T .
With a future contract, entered at time 0, the buyer receives a cash flow (which may at times be
negative) between times 0 and T . If he still holds the contract at time T , then he pays S (T ) at time
T for an asset valued at S (T ). The cash flow received between times 0 and T sums to
                              ZT
                                      d(u) = (T ) , (0) = S (T ) , (0):
                                 0
Thus, if the future contract holder takes delivery at time T , he has paid a total of

                                        ((0) , S (T )) + S (T ) = (0)
for an asset valued at S (T ).


27.5 Forward-future spread
                                          
Future price: (t) = IE    S (T ) F (t) .
Forward price:
                                 F (t) = BS(t;(tT) ) =               S (t)      :
                                                                        (T ) F (t)
                                                             (t)IE       1

Forward-future spread:

                 (0) , F (0) = IE [S (T )] , Sh (0)1 i
                                             (T )      IE
                                    1       1                  S (T ) 
                                 =  1  IE (T ) IE (S (T )) , IE (T ) :
                                      IE   (T )
If (1T ) and S (T ) are uncorrelated,
                                                      (0) = F (0):
CHAPTER 27. Bonds, forward contracts and futures                                                   273

If (1T ) and S (T ) are positively correlated, then

                                             (0)  F (0):
This is the case that a rise in stock price tends to occur with a fall in the interest rate. The owner
of the future tends to receive income when the stock price rises, but invests it at a declining interest
rate. If the stock price falls, the owner usually must make payments on the future contract. He
withdraws from the money market to do this just as the interest rate rises. In short, the long position
in the future is hurt by positive correlation between (1T ) and S (T ). The buyer of the future is
compensated by a reduction of the future price below the forward price.


27.6 Backwardation and contango

Suppose
                                  dS (t) = S (t) dt + S (t) dW (t):
                f (t) = t + W (t),
Define  = ,r ; W

                               Z (T ) = expf,W (T ) , 12 2 T g
                                        Z
                              f
                              IP (A) = Z (T ) dIP; 8A 2 F (T ):
                                         A
     f is a Brownian motion under IfP , and
Then W

                                                           f (t):
                              dS (t) = rS (t) dt + S (t) dW
We have

                                  (t) = ert
                                S (t) = S (0) expf( , 21  2)t + W (t)g
                                                                     f (t)g
                                      = S (0) expf(r , 12  2 )t +  W
Because (1T ) = e,rT is nonrandom, S (T ) and (1T ) are uncorrelated under If
                                                                            P . Therefore,
                                   (t) = If
                                           E [S (T ) F (t)]
                                         = F (t)
                                         = BS(t;(tT) ) = er(T ,t)S (t):
The expected future spot price of the stock under IP is
                                                 h     n                      oi
                         IES (T ) = S (0)eT IE exp , 12  2T + W (T )
                                  = eT S (0):
274

The future price at time 0 is
                                        (0) = erT S (0):
If  > r, then (0) < IES (T ): This situation is called normal backwardation (see Hull). If  < r,
then (0) > IES (T ). This is called contango.
Chapter 28

Term-structure models

Throughout this discussion, fW (t); 0  t  T g is a Brownian motion on some probability space
( ; F ; P), and fF (t); 0  t  T  g is the filtration generated by W .
Suppose we are given an adapted interest rate process fr(t); 0  t  T  g. We define the accumu-
lation factor                         Z          t 
                                  (t) = exp           r(u) du ; 0  t  T :
                                                 0
In a term-structure model, we take the zero-coupon bonds (“zeroes”) of various maturities to be the
primitive assets. We assume these bonds are default-free and pay $1 at maturity. For 0  t  T 
T  , let
              B(t; T ) = price at time t of the zero-coupon bond paying $1 at time T .
Theorem 0.67 (Fundamental Theorem of Asset Pricing) A term structure model is free of arbi-
trage if and only if there is a probability measure If  P on (a risk-neutral measure) with the same
probability-zero sets as IP (i.e., equivalent to IP ), such that for each T 2 (0; T ], the process

                                           B(t; T ) ; 0  t  T;
                                             (t)
is a martingale under If
                       P.
Remark 28.1 We shall always have

              dB (t; T ) = (t; T )B(t; T ) dt + (t; T )B (t; T ) dW (t); 0  t  T;
for some functions (t; T ) and (t; T ). Therefore
                   B(t; T )                     1         1 dB (t; T )
              d        (t)       = B (t; T ) d    (t)   +     (t)
                                                     B   t; T
                                 = [(t; T ) , r(t)] (t) dt + (t; T ) B (t;(tT) ) dW (t);
                                                       (      )

                                                        275
276

so IP is a risk-neutral measure if and only if (t; T ), the mean rate of return of B (t; T ) under IP , is
the interest rate r(t). If the mean rate of return of B (t; T ) under IP is not r(t) at each time t and for
each maturity T , we should change to a measure If    P under which the mean rate of return is r(t). If
such a measure does not exist, then the model admits an arbitrage by trading in zero-coupon bonds.


28.1 Computing arbitrage-free bond prices: first method

Begin with a stochastic differential equation (SDE)

                             dX (t) = a(t; X (t)) dt + b(t; X (t)) dW (t):
The solution X (t) is the factor. If we want to have n-factors, we let W be an n-dimensional
Brownian motion and let X be an n-dimensional process. We let the interest rate r(t) be a function
of X (t). In the usual one-factor models, we take r(t) to be X (t) (e.g., Cox-Ingersoll-Ross, Hull-
White).
Now that we have an interest rate process fr(t); 0  t  T g, we define the zero-coupon bond
prices to be
                                       1               
                 B (t; T ) = (t) IE (T ) F (t)
                              " (             ZT               )        #
                          = IE exp ,               r(u) du F (t) ; 0  t  T  T  :
                                              t
We showed in Chapter 27 that

                            dB (t; T ) = r(t)B(t; T ) dt + (t) (t) dW (t)
for some process . Since B (t; T ) has mean rate of return r(t) under IP , IP is a risk-neutral measure
and there is no arbitrage.


28.2 Some interest-rate dependent assets

Coupon-paying bond: Payments P1 ; P2; : : : ; Pn at times T1 ; T2; : : : ; Tn. Price at time t is
                                                    X
                                                              Pk B (t; Tk ):
                                                  fk:t<Tk g

Call option on a zero-coupon bond: Bond matures at time T . Option expires at time T1 < T .
      Price at time t is
                                     1                                        
                                     (T ) (B (T1 ; T ) , K ) F (t) ; 0  t  T1:
                           (t) IE                           +
                                          1
CHAPTER 28. Term-structure models                                                                 277

28.3 Terminology

Definition 28.1 (Term-structure model) Any mathematical model which determines, at least the-
oretically, the stochastic processes

                                           B(t; T ); 0  t  T;
for all T 2 (0; T ].

Definition 28.2 (Yield to maturity) For 0  t  T  T  , the yield to maturity Y (t; T ) is the
F (t)-measurable random-variable satisfying
                                 B(t; T ) exp f(T , t)Y (t; T )g = 1;
or equivalently,
                                   Y (t; T ) = , T 1, t log B(t; T ):
Determining
                                     B (t; T ); 0  t  T  T ;
is equivalent to determining
                                     Y (t; T ); 0  t  T  T :

28.4 Forward rate agreement

Let 0  t  T < T +   T  be given. Suppose you want to borrow $1 at time T with repayment
(plus interest) at time T + , at an interest rate agreed upon at time t. To synthesize a forward-rate
agreement to do this, at time t buy a T -maturity zero and short BB(t;T(t;T ) (T + )-maturity zeroes.
                                                                          +)
The value of this portfolio at time t is

                               B(t; T ) , B(Bt;(Tt; T+)) B(t; T + ) = 0:
At time T , you receive $1 from the T -maturity zero. At time T + , you pay $ BB(t;T  (t;T ) . The
                                                                                          +)
effective interest rate on the dollar you receive at time T is R(t; T; T + ) given by
                                B (t; T ) = expf R(t; T; T + )g;
                               B(t; T + )
or equivalently,
                        R(t; T; T + ) = , log B (t; T + ) , log B (t; T ) :
The forward rate is
                                                            @ log B(t; T ):
                        f (t; T ) = lim R(t; T; T + ) = , @T                                   (4.1)
                                     #0
278

This is the instantaneous interest rate, agreed upon at time t, for money borrowed at time T .
Integrating the above equation, we obtain
                              ZT                       ZT @
                                    f (t; u) du = ,        @u log B(t; u) du
                               t                           t
                                                                     u=T
                                                   = , log B (t; u)
                                                                     u=t
                                                   = , log B (t; T );
so
                                                        ( ZT          )
                                          B(t; T ) = exp , f (t; u) du :
                                                                   t
You can agree at time t to receive interest rate f (t; u) at each time u 2 [t; T ]. If you invest $ B (t; T )
at time t and receive interest rate f (t; u) at each time u between t and T , this will grow to
                                                    (Z T                   )
                                    B(t; T ) exp               f (t; u) du = 1
                                                       t
at time T .


28.5 Recovering the interest r (t) from the forward rate

                                               "
                                              ( ZT         )     #
                            B (t; T ) = IE exp , r(u) du F (t) ;
                                                  t
                                          "         (            )     #
                         @ B(t; T ) = IE ,r(T ) exp , Z T r(u) du F (t) ;
                        @T                             t
                     @                             
                    @T B (t; T ) = IE ,r(t) F (t) = ,r(t):
                                   T =t
On the other hand,
                                           ( ZT              )
                            B (t; T ) = exp , f (t; u) du ;
                                                  t
                                                     (                 )
                          @ B(t; T ) = ,f (t; T ) exp , Z T f (t; u) du ;
                         @T                                            t
                   @
                  @T B (t; T ) T =t = ,f (t; t):
Conclusion: r(t) = f (t; t).
CHAPTER 28. Term-structure models                                                                       279

28.6 Computing arbitrage-free bond prices: Heath-Jarrow-Morton
     method

For each T 2 (0; T ], let the forward rate be given by
                                        Zt                        Zt
              f (t; T ) = f (0; T ) +          (u; T ) du +               (u; T ) dW (u); 0  t  T:
                                          0                           0
Here f (u; T ); 0  u  T g and f(u; T ); 0  u  T g are adapted processes.
In other words,
                                df (t; T ) = (t; T ) dt + (t; T ) dW (t):
Recall that                                     ( ZT          )
                                  B(t; T ) = exp , f (t; u) du :
                                                                  t
Now
        ( ZT          )                 ZT
       d , f (t; u) du = f (t; t) dt , df (t; u) du
           t                              t
                                     ZT
                        = r(t) dt , [ (t; u) dt +  (t; u) dW (t)] du
                                     "tZ T           #     "Z T           #
                        = r(t) dt ,         (t; u) du dt ,      (t; u) du dW (t)
                                        t                    t
                                     | {z           }     | {z          }
                                                                  (t;T )                  (t;T )
                                 = r(t) dt ,               (t; T ) dt ,  (t; T ) dW (t):
Let
                                  g(x) = ex; g 0(x) = ex; g 00(x) = ex:
Then
                                              ZT                  !
                      B (t; T ) = g ,                 f (t; u) du ;
                                              t
and
                                              ZT                      !
                    dB (t; T ) = dg ,                  f (t; u) du
                                               t
                                              ZT                   !
                               = g0       ,           f (t; u) du (r dt ,  dt ,  dW )
                                               t
                                                          ZT                 !
                                        + 21 g 00     ,        f (t; u) du ( )2 dt
                                                           t
                                                  h                                       i
                               = B (t; T ) r(t) ,  (t; T ) + 12 ( (t; T ))2 dt
                                   , (t; T )B(t; T ) dW (t):
280

28.7 Checking for absence of arbitrage

IP is a risk-neutral measure if and only if
                             (t; T ) = 1 ( (t; T ))2 ; 0  t  T  T  ;
                                        2
i.e.,
                    ZT                           ZT             !2
                            (t; u) du = 21            (t; u) du ; 0  t  T  T :             (7.1)
                      t                           t
Differentiating this w.r.t. T , we obtain
                                                 ZT
                          (t; T ) = (t; T )          (t; u) du; 0  t  T  T :              (7.2)
                                                  t
Not only does (7.1) imply (7.2), (7.2) also implies (7.1). This will be a homework problem.
Suppose (7.1) does not hold. Then IP is not a risk-neutral measure, but there might still be a risk-
neutral measure. Let f(t); 0  t  T g be an adapted process, and define
                            Zt
                 f (t) =
                 W               (u) du + W (t);
                             0     Zt                            Zt              
                  Z (t) = exp ,               (u) dW (u) , 21         2 (u) du ;
                            Z             0                       0
                 If
                  P (A) =        Z (T  ) dIP     8A 2 F (T ):
                             A
Then
                                      h                                       i
             dB (t; T ) = B(t; T ) r(t) ,  (t; T ) + 12 ( (t; T ))2 dt
                                , (ht; T )B(t; T ) dW (t)                               i
                          = B (t; T ) r(t) ,  (t; T ) + 12 ( (t; T ))2 +  (t; T )(t) dt
                                , (t; T )B(t; T ) dWf (t); 0  t  T:
In order for B (t; T ) to have mean rate of return r(t) under If    P , we must have
                        (t; T ) = 1 ( (t; T ))2 +  (t; T )(t); 0  t  T  T :
                                   2                                                            (7.3)
Differentiation w.r.t. T yields the equivalent condition
                      (t; T ) =  (t; T )(t; T ) + (t; T )(t); 0  t  T  T  :            (7.4)

Theorem 7.68 (Heath-Jarrow-Morton) For each T 2 (0; T ], let (u; T ); 0  u  T; and
 (u; T ); 0  u  T , be adapted processes, and assume  (u; T ) > 0 for all u and T . Let
f (0; T ); 0  t  T , be a deterministic function, and define
                                                 Zt                   Zt
                     f (t; T ) = f (0; T ) +           (u; T ) du +         (u; T ) dW (u):
                                                  0                    0
CHAPTER 28. Term-structure models                                                                  281

Then f (t; T ); 0  t  T  T  is a family of forward rate processes for a term-structure model
without arbitrage if and only if there is an adapted process (t); 0  t  T , satisfying (7.3), or
equivalently, satisfying (7.4).

Remark 28.2 Under IP , the zero-coupon bond with maturity T has mean rate of return

                                     r(t) ,  (t; T ) + 12 ((t; T ))2
and volatility  (t; T ). The excess mean rate of return, above the interest rate, is

                                        , (t; T ) + 21 ((t; T ))2;
and when normalized by the volatility, this becomes the market price of risk

                                        , (t; T ) + 21 ((t; T ))2 :
                                                  (t; T )
The no-arbitrage condition is that this market price of risk at time t does not depend on the maturity
T of the bond. We can then set
                                           " (t; T ) + 1 ( (t; T ))2 #
                                 (t) = , ,             2                 ;
                                                        (t; T )
and (7.3) is satisfied.
(The remainder of this chapter was taught Mar 21)
Suppose the market price of risk does not depend on the maturity T , so we can solve (7.3) for .
Plugging this into the stochastic differential equation for B (t; T ), we obtain for every maturity T :

                                                                            f (t):
                          dB (t; T ) = r(t)B(t; T ) dt , (t; T )B(t; T ) dW
Because (7.4) is equivalent to (7.3), we may plug (7.4) into the stochastic differential equation for
f (t; T ) to obtain, for every maturity T :
                   df (t; T ) = [(t; T )(t; T ) + (t; T )(t)] dt + (t; T ) dW (t)
                                                                    f (t):
                              =  (t; T ) (t; T ) dt +  (t; T ) dW

28.8 Implementation of the Heath-Jarrow-Morton model

Choose

                                       (t; T ); 0  t  T  T ;
                                           (t); 0  t  T  :
282

These may be stochastic processes, but are usually taken to be deterministic functions. Define

                          (t; T ) = (t; T )(t; T ) + (t; T )(t);
                                    Zt
                          f (t) =
                          W              (u) du + W (t);
                                     0
                                     Zt               Zt      
                         Z (t) = exp , (u) dW (u) , 2  (u) du ;
                                                     1     2
                                 Z     0                 0
                       If
                        P (A) = Z (T ) dIP 8A 2 F (T ):
                                  A
Let f (0; T ); 0  T  T ; be determined by the market; recall from equation (4.1):
                                            @ log B(0; T ); 0  T  T  :
                             f (0; T ) = , @T
Then f (t; T ) for 0  t  T is determined by the equation
                                                                           f (t);
                            df (t; T ) = (t; T ) (t; T ) dt + (t; T ) dW                      (8.1)

this determines the interest rate process

                                      r(t) = f (t; t); 0  t  T  ;                              (8.2)

and then the zero-coupon bond prices are determined by the initial conditions B (0; T ); 0  T 
T , gotten from the market, combined with the stochastic differential equation
                                                                        f (t):
                      dB (t; T ) = r(t)B(t; T ) dt , (t; T )B(t; T ) dW                         (8.3)

Because all pricing of interest rate dependent assets will be done under the risk-neutral measure IfP,
under which Wf is a Brownian motion, we have written (8.1) and (8.3) in terms of W       f rather than
W . Written this way, it is apparent that neither (t) nor (t; T ) will enter subsequent computations.
The only process which matters is  (t; T ); 0  t  T  T  , and the process
                                           ZT
                             (t; T ) =        (t; u) du; 0  t  T  T  ;                     (8.4)
                                            t
obtained from (t; T ).
From (8.3) we see that   (t; T ) is the volatility at time t of the zero coupon bond maturing at time
T . Equation (8.4) implies
                                   (T; T ) = 0; 0  T  T  :                                  (8.5)

This is because B (T; T ) = 1 and so as t approaches T (from below), the volatility in B (t; T ) must
vanish.
In conclusion, to implement the HJM model, it suffices to have the initial market data B (0; T ); 0 
T  T  ; and the volatilities
                                          (t; T ); 0  t  T  T  :
CHAPTER 28. Term-structure models                                                              283

We require that   (t; T ) be differentiable in T and satisfy (8.5). We can then define

                                                    @  (t; T );
                                        (t; T ) = @T
and (8.4) will be satisfied because
                                                               ZT @
                        (t; T ) =  (t; T ) ,  (t; t) =           
                                                                   @u  (t; u) du:
                                                               t

We then let Wf be a Brownian motion under a probability measure IfP , and we let B(t; T ); 0  t 
T  T , be given by (8.3), where r(t) is given by (8.2) and f (t; T ) by (8.1). In (8.1) we use the
         
initial conditions
                                          @ log B(0; T ); 0  T  T  :
                           f (0; T ) = , @T
Remark 28.3 It is customary in the literature to write W rather than Wf and IP rather than IfP ,
so that IP is the symbol used for the risk-neutral measure and no reference is ever made to the
market measure. The only parameter which must be estimated from the market is the bond volatility
 (t; T ), and volatility is unaffected by the change of measure.
284
Chapter 29

Gaussian processes

Definition 29.1 (Gaussian Process) A Gaussian process X (t), t  0, is a stochastic process with
the property that for every set of times 0  t1  t2  : : :  tn , the set of random variables
                                           X (t1); X (t2); : : : ; X (tn)
is jointly normally distributed.

Remark 29.1 If X is a Gaussian process, then its distribution is determined by its mean function
                                                 m(t) = IEX (t)
and its covariance function
                           (s; t) = IE [(X (s) , m(s))  (X (t) , m(t))]:
Indeed, the joint density of X (t1); : : : ; X (tn) is
          IP fX (t1) 2 dx1; : : : ; X (tn) 2 dxn g
                      1p             n 1                                       o
           =                    exp    ,   2 ( x , m ( t ))  ,1  (x , m(t))T dx1 : : : dxn ;
              (2 )n=2 det 
where  is the covariance matrix
                                     2                                                   3
                                       (t1; t1) (t1; t2 ) : : : (t1; tn )
                                     6                                                   7
                                = 664 (t:2:;:t1) (t:2:;:t2 ) :: :: :: (t:2:; :tn ) 775
                                       (tn ; t1) (tn; t2 ) : : : (tn; tn)
x is the row vector [x1; x2; : : : ; xn], t is the row vector [t1; t2; : : : ; tn], and m(t) = [m(t1); m(t2); : : : ; m(tn)].
The moment generating function is
                               (X
                                n                )           n                               o
                      IE exp          uk X (tk ) = exp u  m(t)T + 21 u    uT ;
                                k=1
where   u = [u1; u2; : : : ; un].
                                                         285
286

29.1 An example: Brownian Motion

Brownian motion W is a Gaussian process with m(t) = 0 and (s; t) = s ^ t. Indeed, if 0  s  t,
then
                                                          h                                i
                 (s; t) = IE [W (s)W (t)] = IE W (s) (W (t) , W (s)) + W 2 (s)
                         = IEW (s):IE (W (t) , W (s)) + IEW 2 (s)
                         = IEW 2(s)
                         = s ^ t:
To prove that a process is Gaussian, one must show that X (t1); : : : ; X (tn) has either a density or a
moment generating function of the appropriate form. We shall use the m.g.f., and shall cheat a bit
by considering only two times, which we usually call s and t. We will want to show that
                                                 (                                    "     # " #)
       IE exp fu1X (s) + u2X (t)g = exp           u1 m1 + u2m2 + 12 [u1 u2 ] 11         12 u1
                                                                                          22 u2     :
                                                                               21

Theorem 1.69 (Integral w.r.t. a Brownian) Let W (t) be a Brownian motion and  (t) a nonran-
dom function. Then                        Z               t
                                        X (t) =                  (u) dW (u)
                                                         0
is a Gaussian process with m(t) = 0 and
                                                         Z s^t
                                       (s; t) =                     2(u) du:
                                                             0
Proof: (Sketch.) We have
                                                 dX =  dW:
Therefore,

                deuX (s) = ueuX (s)(s) dW (s) + 21 u2 euX (s) 2(s) ds;
                                      Zs                              Zs
                 euX (s) = euX (0) + u euX (v) (v ) dW (v ) + 21 u2 euX (v) 2 (v ) dv;
                                       | 0               {z                   }   0
                                       Zs         Martingale

               IEeuX (s) = 1 + 12 u2        2(v )IEeuX (v) dv;
                                       0
             d IEeuX (s) = 1 u2 2(s)IEeuX (s);
             ds              2
                                          Zs             
                IEe uX (s ) =e uX (0)     1
                                      exp 2 u 2  2
                                                 (v ) dv                                                (1.1)
                                      Zs            0           
                         = exp 12 u2           2(v ) dv :
                                           0
This shows that X (s) is normal with mean 0 and variance 0s  2(v ) dv .
                                                                          R
CHAPTER 29. Gaussian processes                                                                                                    287

Now let 0  s < t be given. Just as before,
                                deuX (t) = ueuX (t) (t) dW (t) + 12 u2euX (t) 2 (t) dt:
Integrate from s to t to get
                                                 Zt                                  Zt
                  euX (t) = euX (s) + u               (v )e uX ( v ) dW (v ) + 2 u 2 (v )euX (v) dv:
                                                                                1  2
                                                    s                                 s
Take IE [: : : jF (s)] conditional expectations and use the martingale property
      Z t                                                Z t                                        Zs
 IE          (v)euX (v) dW (v) F (s) = IE                          (v )euX (v) dW (v ) F (s) ,                  (v )euX (v) dW (v)
         s                                                     0                                            0
                                                 =0
to get
                                                                       Zt                                    
                        IE euX (t) F (s) = euX (s) + 12 u2                    2 (v )IE euX (v) F (s) dv
                                                                          s
               d IE euX (t) F (s) = 1 u2  2(t)IE euX (t) F (s) ; t  s:
               dt                       2
The solution to this ordinary differential equation with initial time s is
                                                     Zt     
                        IE e uX (t ) F (s) = e exp 2 u  (v) dv ;
                                              uX (s )  1 2   2                                            t  s:                 (1.2)
                                                           s
We now compute the m.g.f. for (X (s); X (t)), where 0  s  t:
                                                                                  
         IE eu1 X (s)+u2X (t) F (s) = eu1 X (s)IE eu2X (t) F (s)
                                            (1.2) (u1 +u2 )X (s)
                                                                                     Zt          
                                             = e                       exp        1 u2  2 (v ) dv ;
                                                                                  2 2 s
                   h u X (s)+u X (t)i                                                     
                 IE e   1          2
                                            = IE          IE eu1 X (s)+u2 X (t) F (s)
                                                      n                  o                  Zt                   
                                            = IE e(u +u )X (s) : exp 12 u22
                                                             1     2
                                                                                                     2 (v ) dv
                                                                             Zs           Zt    s     
                                             = exp
                                            (1.1)    1 (u1 + u2 )2        2 (v ) dv + 1 u2  2(v ) dv
                                                     2                                 2 2 s
                                                                     Z0 s                   Zt         
                                                   1    2                    2           1 2
                                            = exp 2 (u1 + 2u1u2 )  (v ) dv + 2 u2  (v ) dv    2
                                                 (           "R s 2 0R s 2# " #)              0
                                            = exp 12 [u1 u2 ] R0s  2 R0t 2 uu1 :
                                                               0           0         2
This shows that (X (s); X (t)) is jointly normal with IEX (s) = IEX (t) = 0,
                                             Zs                                          Zt
                            IEX 2(s) =              2 (v ) dv;          IEX 2(t) =              2(v ) dv;
                                              0                         Zs                   0
                                             IE [X (s)X (t)] =                 2(v ) dv:
                                                                          0
288




Remark 29.2 The hard part of the above argument, and the reason we use moment generating
functions, is to prove the normality. The computation of means and variances does not require the
use of moment generating functions. Indeed,
                                                  Zt
                                        X (t) =        (u) dW (u)
                                                  0
is a martingale and X (0) = 0, so
                                    m(t) = IEX (t) = 0 8t  0:
For fixed s  0,                                       Zs
                                        IEX 2(s) =             2(v ) dv
                                                           0
by the Itô isometry. For 0  s  t,
                                                                                
                IE [X (s)(X (t) , X (s))] = IE IE X (s)(X (t) , X (s)) F (s)
                                                 2                              3
                                                 66                        77
                                           = IE 64X (s) IE X (t) F (s) , X (s) 75
                                                       |          {z          }
                                                                           0
                                           = 0:
Therefore,

                           IE [X (s)X (t)] = IE [X (s)(X (t) , X (s)) + X 2(s)]
                                                         Zs
                                           = IEX 2(s) =  2 (v ) dv:
                                                                  0
If  were a stochastic proess, the Itô isometry says
                                                      Zs
                                       IEX 2(s) = IE 2(v) dv
                                                       0
and the same argument used above shows that for 0  s  t,
                                                       Zs
                         IE [X (s)X (t)] = IEX (s) = IE2(v ) dv:
                                               2
                                                        0
However, when  is stochastic, X is not necessarily a Gaussian process, so its distribution is not
determined from its mean and covariance functions.

Remark 29.3 When  is nonrandom,
                                                  Zt
                                        X (t) =        (u) dW (u)
                                                  0
is also Markov. We proved this before, but note again that the Markov property follows immediately
from (1.2). The equation (1.2) says that conditioned on F (s), the
                                                                 R distribution of X (t) depends only
                                                                   t
on X (s); in fact, X (t) is normal with mean X (s) and variance s  2(v ) dv .
CHAPTER 29. Gaussian processes                                                                          289

                             z                                       z




                                                                                       z
                                                z




                                                                                   v=
                                           y=
                            s                                        s

                                                        y                                   v
                                                t
                                                                             (b)
                                   (a)

                                            z




                                                                 z
                                                            y=
                                            s
                                            v
                                                                         y
                                                                 t
                                                       (c)


       Figure 29.1: Range of values of y; z; v for the integrals in the proof of Theorem 1.70.



Theorem 1.70 Let W (t) be a Brownian motion, and let  (t) and h(t) be nonrandom functions.
Define

                                  Zt                                         Zt
                      X (t) =            (u) dW (u); Y (t) =                      h(u)X (u) du:
                                   0                                          0


Then Y is a Gaussian process with mean function mY (t) = 0 and covariance function


                                   Z s^t              Z s               Z t                  
                     Y (s; t) =            2 (v )          h(y ) dy                   h(y ) dy dv:   (1.3)
                                       0                v                          v



Proof: (Partial) Computation of Y (s; t): Let 0  s  t be given. It is shown in a homework
problem that (Y (s); Y (t)) is a jointly normal pair of random variables. Here we observe that


                                                         Zt
                          mY (t) = IEY (t) =                     h(u) IEX (u) du = 0;
                                                             0


and we verify that (1.3) holds.
290

We have

          Y (s; t) = IE [Y (s)Y (t)]
                         Z s               Zt            
                    = IE      h(y)X (y ) dy: h(z)X (z) dz
                           Z s0 Z t                           0
                  = IE                h(y)h(z)X (y )X (z) dy dz
                      Z s Z0 t 0
                  =              h(y )h(z )IE [X (y )X (z)] dy dz
                      Z0s Z0t                 Z y^z
                  =              h(y )h(z )                2(v ) dv dy dz
                      Z0s Z0t                 Z0     z                      
                  =              h(y )h(z )                2(v ) dv              dy dz
                       0 Zz                          0 Z                           
                                sZ s                               y
                        +              h(y )h(z)                        2(v ) dv       dz dy   (See Fig. 29.1(a))
                              0 y                                 0
                      Zs           Z t                   Z z                         
                  =        h(z )          h(y ) dy                           2 (v) dv dz
                       0     Zs        z Z                            Z
                                                                       0                    
                                                s                          y
                        +          h(y)             h(z ) dz                      2(v) dv dy
                                            y
                      Z s Z 0z                  Z t                         0
                  =              h(z )2(v )                  h(y ) dy dv dz
                       0 Z0                           z Z                          
                                sZ y                                   s
                        +               h(y ) 2(v )                       h(z ) dz dv dy
                    Z s Z 0s 0            Z t y 
                  =           h(z) 2(v )      h(y ) dy dz dv
                     0 Zv Z                 z Z             
                             s s                   s
                      +           h(y ) 2(v )       h(z) dz dy dv (See Fig. 29.1(b))
                    Z s 0 vZ s Z t              y
                                                           
                         2
                  =  (v )                h(y )h(z) dy dz dv
                     0 Z          v Zz Z                       
                             s            s s
                      +  (v )  2              h(y )h(z) dz dy dv
                           0             v y
                    Zs          Z s Z t                   
                  =  2 (v )              h(y )h(z) dy dz dv (See Fig. 29.1(c))
                    Z0s         Zvs v Z t                   
                  =  2 (v )          h(y ) dy         h(z ) dz dv
                    Z0s         Zvs           Zvt           
                  =  2 (v )          h(y ) dy         h(y ) dy dv
                     0            v                  v



                                                          R
Remark 29.4 Unlike the process X (t) = 0t  (u) dW (u), the process Y (t) = 0t X (u) du is
                                                                                                              R
CHAPTER 29. Gaussian processes                                                                 291

neither Markov nor a martingale. For 0  s < t,
                                    Zs                        Z t                        
               IE [Y (t)jF (s)] =        h(u)X (u) du + IE           h(u)X (u) du F (s)
                                    0                            s
                                            Zt
                              = Y (s) +           h(u)IE [X (u) F (s)] du
                                              s
                                            Zt
                              = Y (s) +           h(u)X (s) du
                                              s     Zt
                              = Y (s) + X (s)            h(u) du;
                                                     s
where we have used the fact that X is a martingale. The conditional expectation IE [Y (t)jF (s)] is
not equal to Y (s), nor is it a function of Y (s) alone.
292
Chapter 30

Hull and White model

Consider
                         dr(t) = ( (t) , (t)r(t)) dt + (t) dW (t);
where (t), (t) and  (t) are nonrandom functions of t.
We can solve the stochastic differential equation. Set
                                                      Zt
                                         K (t) =               (u) du:
                                                      0
Then
                                                                                 
                          d eK (t)r(t) = eK(t) (t)r(t) dt + dr(t)
                                       = eK (t) ( (t) dt +  (t) dW (t)) :
Integrating, we get
                                        Zt                            Zt
                  eK (t)r(t) = r(0) +           eK (u) (u) du +              eK (u) (u) dW (u);
                                          0                            0
so                                      Zt                Zt             
               r(t) = e , K (t )   r(0) + e K (u )            K ( u)
                                                   (u) du + e  (u) dW (u) :
                                            0                            0
From Theorem 1.69 in Chapter 29, we see that r(t) is a Gaussian process with mean function
                                                              Zt                    
                           mr (t) = e,K(t) r(0) +                   eK(u) (u) du                   (0.1)
                                                                0
and covariance function
                                                            Z s^t
                           r (s; t) = e, K ( s ) , K ( t )       e2K(u)2 (u) du:                 (0.2)
                                                           0
The process r(t) is also Markov.

                                                      293
294

                      R
We want to study 0T r(t) dt. To do this, we define
                                           Zt                                                   ZT
                      X (t) =                   eK (u) (u) dW (u); Y (T ) =                         e,K (t)X (t) dt:
                                            0                                                    0
Then
                                                                       Zt                           
                                   r(t) = e,K (t) r(0) +                      eK (u) (u) du + e,K (t)X (t);
                                                                         0             
                    ZT                          ZT                      Zt
                           r(t) dt =                  e , K ( t ) r(0) + e K (u ) (u) du dt + Y (T ):
                    0                             0                            0
                                                                  R
According to Theorem 1.70 in Chapter 29, 0T r(t) dt is normal. Its mean is
                               ZT                      ZT                             Zt                     
                          IE               r(t) dt =          e,K (t) r(0) +                eK(u) (u) du dt;                              (0.3)
                                   0                      0                             0
and its variance is
                                   ZT                 !
                      var                   r(t) dt = IEY 2 (T )
                                       0
                                                              ZT                            ZT                !2
                                                          =           e2K (v) 2(v )             e,K (y) dy        dv:
                                                              0                             v

The price at time 0 of a zero-coupon bond paying $1 at time T is
                        ( ZT       )
      B (0; T ) = IE exp , r(t) dt
                           0
                      (       ZT                    ZT          !)
                = exp (,1)IE r(t) dt + 2 (,1) var
                                        1    2          r(t) dt
                               0                      0
                          ZT            ZTZ t
                = exp ,r(0) e,K (t) dt ,       e,K (t)+K (u) (u) du dt
                             0            0 0
                        ZT           ZT           !2 
                        + 12                e2K (v)2 (v )              e,K (y) dy          dv
                                       0                          v
               = expf,r(0)C (0; T ) , A(0; T )g;
where
                    ZT
      C (0; T ) =          e,K (t) dt;
                    0
                    Z TZt                                                          ZT                      ZT                  !2
       A(0; T ) =                  e,K (t)+K (u) (u) du dt , 12                         e2K (v)  2(v )           e,K (y) dy        dv:
                    0          0                                                   0                         v
CHAPTER 30. Hull and White model                                                             295


                             t




                                                               t
                                                           =
                                                      u
                            T

                                                                                u
                           Figure 30.1: Range of values of u; t for the integral.


30.1 Fiddling with the formulas

Note that (see Fig 30.1)
                ZTZ t
                           e,K (t)+K (u) (u) du dt
                  0
                      Z 0T Z T
                 =               e,K (t)+K (u) (u) dt du
                      Z0T u               ZT               !
 (y = t; v = u) =          eK(v) (v )          e,K(y) dy       dv:
                       0                   v

Therefore,

                  Z T2          ZT           !                    ZT           !23
        A(0; T ) = 4eK (v) (v )    e,K (y) dy , 12 e2K (v) 2(v )    e,K (y) dy 5 dv;
                   0             v                                 v
                  ZT
        C (0; T ) = e,K(y) dy;
                     0
        B (0; T ) = exp f,r(0)C (0; T ) , A(0; T )g :
Consider the price at time t 2 [0; T ] of the zero-coupon bond:
                                               "
                                               ( ZT      )     #
                             B (t; T ) = IE exp , r(u) du F (t) :
                                                           t
Because r is a Markov process, this should be random only through a dependence on r(t). In fact,

                                 B(t; T ) = exp f,r(t)C (t; T ) , A(t; T )g ;
296

where
                Z T2         ZT           !                    ZT           !23
      A(t; T ) = 4eK (v) (v)    e,K (y) dy , 12 e2K (v)2 (v )    e,K (y) dy 5 dv;
                 t            v                                 v
                    ZT
      C (t; T ) = eK(t)       e,K (y) dy:
                          t
The reason for these changes                                   R the initial time to be t rather than
                             R is the following. We are now taking
zero, so it is plausible that 0T : : : dv should be replaced by tT : : : dv: Recall that
                                                       Zv
                                            K (v ) =        (u) du;
                                                       0
and this should be replaced by
                                                            Zv
                                      K (v ) , K (t) =           (u) du:
                                                            t
Similarly, K (y ) should be replaced by K (y ) , K (t). Making these replacements in A(0; T ), we
see that the K (t) terms cancel. In C (0; T ), however, the K (t) term does not cancel.


30.2 Dynamics of the bond price

Let Ct(t; T ) and At (t; T ) denote the partial derivatives with respect to t. From the formula

  B (t; T ) = exp f,r(t)C (t; T ) , A(t; T )g ;
we have
                      h                                                                                i
dB (t; T ) = B (t; T ) ,C (t; T ) dr(t) , 21 C 2 (t; T ) dr(t) dr(t) , r(t)Ct(t; T ) dt , At (t; T ) dt
                      
           = B (t; T ) , C (t; T ) ( (t) , (t)r(t)) dt
                      , C (t; T )(t) dW (t) , 12 C 2(t;T )2(t) dt
                      , r(t)Ct(t; T ) dt , At(t; T ) dt :
Because we have used the risk-neutral pricing formula
                                              "( ZT      )     #
                              B(t; T ) = IE exp , r(u) du F (t)
                                                  t
to obtain the bond price, its differential must be of the form

                               dB (t; T ) = r(t)B(t; T ) dt + (: : : ) dW (t):
CHAPTER 30. Hull and White model                                                                  297

Therefore, we must have

          ,C (t; T ) ( (t) , (t)r(t)) , 12 C 2(t; T )2(t) , r(t)Ct(t; T ) , At(t; T ) = r(t):
We leave the verification of this equation to the homework. After this verification, we have the
formula
                      dB (t; T ) = r(t)B (t; T ) dt , (t)C (t; T )B(t; T ) dW (t):
In particular, the volatility of the bond price is  (t)C (t; T ).



30.3 Calibration of the Hull & White model

Recall:

          dr(t) = ( (t) , (t)r(t)) dt + (t) dB (t);
                  Zt
          K (t) =      (u) du;
                  ZT2                                                          !23
                   0
                               ZT           !                     ZT
        A(t; T ) = 4eK (v) (v)    e,K (y) dy , 12 e2K (v) 2 (v )    e,K (y) dy 5 dv;
                   t            v                                  v
                     ZT
     C (t; T ) = eK(t) e,K(y) dy;
                       t
     B (t; T ) = exp f,r(t)C (t; T ) , A(t; T )g :
Suppose we obtain B (0; T ) for all T 2 [0; T ] from market data (with some interpolation). Can we
determine the functions (t), (t), and  (t) for all t 2 [0; T ]? Not quite. Here is what we can do.
We take the following input data for the calibration:

   1. B (0; T ); 0  T  T  ;

   2. r(0);

   3.     (0);
   4. (t); 0  t  T  (usually assumed to be constant);

   5. (0)C (0; T ); 0  T  T , i.e., the volatility at time zero of bonds of all maturities.

Step 1. From 4 and 5 we solve for
                                                    ZT
                                      C (0; T ) =        e,K (y) dy:
                                                     0
298

We can then compute
                            @ C (0; T ) = e,K (T )
                           @T
                           =) K (T ) = , log @T   @ C (0; T );
                              @ K (T ) = @ Z T (u) du = (T ):
                             @T           @T 0
We now have (T ) for all T 2 [0; T ].
Step 2. From the formula
                            B (0; T ) = expf,r(0)C (0; T ) , A(0; T )g;
we can solve for A(0; T ) for all T 2 [0; T ]. Recall that
                Z T2         ZT           !                    ZT           !23
      A(0; T ) = 4eK (v) (v)    e,K (y) dy , 21 e2K (v)2 (v )    e,K (y) dy 5 dv:
                  0                  v                                    v
We can use this formula to determine     (T ); 0  T  T  as follows:
                                              "                                                       !#
                          @ A(0; T ) = Z T eK(v) (v)e,K (T ) , e2K(v)2 (v )e,K (T ) Z T e,K(y) dy dv;
                         @T              0                                               v
                                       Z   "                                 Z          !#
                          @ A(0; T ) = T eK(v) (v) , e2K(v) 2 (v ) T e,K (y) dy dv;
                 eK (T ) @T
                                         0                                     v
               
             @ K (T ) @                              Z  T
            @T e @T A(0; T ) = e
                                        K (T ) (T ) ,      e2K (v)  2(v ) e,K (T ) dv;
             @          @                              Z0 T
     eK(T ) @T eK (T ) @T A(0; T ) = e2K (T ) (T ) , e2K(v)2 (v ) dv;
                                                         0
 @ eK(T ) @ eK (T ) @ A(0; T ) = 0(T )e2K (T ) + 2 (T ) (T )e2K(T ) , e2K (T )2(T ); 0  T  T  :
@T        @T         @T
This gives us an ordinary differential equation for , i.e.,
                 0 (t)e2K (t) + 2 (t) (t)e2K (t) , e2K (t) 2(t) = known function of t:

From assumption 4 and step 1, we know all the coefficients in this equation. From assumption 3,
we have the initial condition (0). We can solve the equation numerically to determine the function
 (t); 0  t  T  .
Remark 30.1 The derivation of the ordinary differential equation for (t) requires three differ-
entiations. Differentiation is an unstable procedure, i.e., functions which are close can have very
different derivatives. Consider, for example,
                                         f (x) = 0 8x 2 IR;
                                         g (x) = sin(1000 x) 8x 2 IR:
                                                     100
CHAPTER 30. Hull and White model                                                                                     299

Then
                                                         1 8x 2 IR;
                                       jf (x) , g(x)j  100
but because

                                                g 0(x) = 10 cos(1000x);
we have

                                      jf 0(x) , g0(x)j = 10
for many values of x.

Assumption 5 for the calibration was that we know the volatility at time zero of bonds of all maturi-
ties. These volatilities can be implied by the prices of options on bonds. We consider now how the
model prices options.


30.4 Option on a bond

Consider a European call option on a zero-coupon bond with strike price K and expiration time T1 .
The bond matures at time T2 > T1. The price of the option at time 0 is
               R T1                            
                , r(u) du
               IE e     0
                                              +
                                       (B (T1 ; T2) , K )
                       R T r(u) du
               = IEe,              (expf,r(T1)C (T1; T2) , A(T1; T2)g , K )+ :
                                1
                            0

                 Z1Z1                                                +
             =               e,x expf,yC (T1; T2) , A(T1; T2)g , K f (x; y ) dx dy;
                  ,1 ,1
                                        R                 
where f (x; y ) is the joint density of 0T r(u) du; r(T1) .
                                                    1


                                                                   R
We observed at the beginning of this Chapter (equation (0.3)) that 0T r(u) du is normal with      1

                     "Z T            # ZT
              4
          1 = IE                   r(u) du =           IEr(u) du
                                1                   1


                            0                   0
                                                ZT                                          Zv                  
                                                         r(0)e,K (v) + e,K (v)                    eK(u) (u) du dv;
                                                    1
                                            =
                       "Z T               # Z0T                           ZT
                                                                                              0
                                                                                                      !2
          2 =4 var                 r(u) du =           e2K(v)2(v )                    e,K(y) dy          dv:
                                1                   1                               1

           1                0                   0                           v
We also observed (equation (0.1)) that r(T1) is normal with
                                                                                        ZT
                         2 =4 IEr(T1) = r(0)e,K (T ) + e,K(T )                               eK (u) (u) du;
                                                                                          1
                                                             1                  1

                                                                                   0
                                                            ZT
                      22 =4 var (r(T1)) = e,2K (T1)                 e 2K (u )  2
                                                                                (u) du:
                                                                 1


                                                             0
300
           R T               
In fact,     0  r(u) du; r(T ) is jointly normal, and the covariance is
                 1
                                1



                                        "Z T                                              #
                         12 = IE                  (r(u) , IEr(u)) du: (r(T1) , IEr(T1))
                                                 1


                                             0
                                    ZT
                                             IE [(r(u) , IEr(u)) (r(T1) , IEr(T1))] du
                                         1
                               =
                                    0
                                    ZT
                                             r (u; T1) du;
                                         1
                               =
                                    0



where r (u; T1) is defined in Equation 0.2.
The option on the bond has price at time zero of




   Z1Z1                                                              +
                     e,x expf,yC (T1; T2) , A(T1; T2)g , K
      ,1 ,1                                                    (           "                  #)
                                                                 2            y2
                              2  1p1 , 2 exp , 2(1 ,1 2) x2 + 2xy  +                      dx dy: (4.1)
                                  1 2                            1     1  2 22




The price of the option at time t 2 [0; T1] is



       RT                                                 
  IE e, t r(u) du (B(T1; T2) , K )+ F (t)
                 1


                               RT                                                                     
                         = IE e, t r(u) du (expf,r(T1)C (T1; T2) , A(T1; T2)g , K )+ F (t)
                                     1
                                                                                                           (4.2)




Because of the Markov property, this is random only                      on r(t). To compute
                                                    R T1through a dependence
this option price, we need the joint distribution of t r(u) du; r(T1) conditioned on r(t). This
CHAPTER 30. Hull and White model                                                                           301

pair of random variables has a jointly normal conditional distribution, and
                                     "Z T                         #
                      1 (t) = IE                r(u) du F (t)
                                             1


                                         t
                                ZT                                                Zv                
                                          r(t)e,K(v)+K (t) + e,K (v)                    eK(u) (u) du dv;
                                     1
                            =
                                 t2                                                 t 3
                                          ZT                              !2
                      21 (t) = IE 4                 r(u) du , 1 (t)          F (t)5
                                                 1


                                             t
                                ZT                           ZT                   !2
                                         e2K (v) 2(v )               e,K (y) dy          dv;
                                     1                            1
                            =
                                 t                            v
                                                       
                      2 (t) = IE r(T1) r(t)
                                                                              ZT
                            = r(t)e,K (T )+K (t) + e,K (T )                         eK (u) (u) du;
                                                                                1
                                                  1                       1

                                                                t
                      2 (t) = IE (r(T1) , 2 (t)) F (t)
                       2                                2
                                             Z T1
                             =e , 2 K ( T 1)
                                                  e2K (u) 2 (u) du;
                                  " Z T1      t                 !                     #
            (t)1 (t)2 (t) = IE             r(u) du , 1 (t) (r(T1) , 2 (t)) F (t)
                                         t
                               Z T1                    Zu
                             =       e,K (u),K(T1 ) e2K (v) 2(v ) dv du:
                                t                        t
The variances and covariances are not random. The means are random through a dependence on
r(t).
Advantages of the Hull & White model:

   1. Leads to closed-form pricing formulas.
   2. Allows calibration to fit initial yield curve exactly.

Short-comings of the Hull & White model:

   1. One-factor, so only allows parallel shifts of the yield curve, i.e.,
                                B (t; T ) = exp f,r(t)C (t; T ) , A(t; T )g ;
      so bond prices of all maturities are perfectly correlated.
   2. Interest rate is normally distributed, and hence can take negative values. Consequently, the
      bond price                              " (                 )
                                                                  ZT      #
                                B (t; T ) = IE exp ,                       r(u) du F (t)
                                                                      t
      can exceed 1.
302
Chapter 31

Cox-Ingersoll-Ross model

In the Hull & White model, r(t) is a Gaussian process. Since, for each t, r(t) is normally distributed,
there is a positive probability that r(t) < 0. The Cox-Ingersoll-Ross model is the simplest one which
avoids negative interest rates.
We begin with a d-dimensional Brownian motion (W1 ; W2; : : : ; Wd). Let          > 0 and  > 0 be
constants. For j = 1; : : : ; d, let Xj (0) 2 IR be given so that

                                 X12(0) + X22(0) + : : : + Xd2(0)  0;
and let Xj be the solution to the stochastic differential equation

                               dXj (t) = , 12 Xj (t) dt + 12  dWj (t):
Xj is called the Orstein-Uhlenbeck process. It always has a drift toward the origin. The solution to
this stochastic differential equation is
                                       1                  Zt 1             
                          Xj (t) = e, 2 t Xj (0) + 12          e 2 u dWj (u) :
                                                            0
This solution is a Gaussian process with mean function
                                                       1
                                           mj (t) = e, 2 t Xj (0)
                                                 1 (s+t) Z s^t u
and covariance function
                                          1  2 ,
                                (s; t) = 4  e 2             e du:
                                                          0
Define
                             r(t) =4 X12(t) + X22(t) + : : : + Xd2(t):
If d = 1, we have r(t) = X12(t) and for each t, IP fr(t) > 0g = 1, but (see Fig. 31.1)
                                                                                 
              IP There are infinitely many values of t > 0 for which r(t) = 0 = 1

                                                    303
304

                                                2
                                      r(t) = X 1 (t)




                                                                                              t
                                                                x2
                                                                               ( X1 (t), X2 (t) )



                                                                                   x
                                                                                       1




                                           Figure 31.1: r(t) can be zero.


If d  2, (see Fig. 31.1)

                  IP fThere is at least one value of t > 0 for which r(t) = 0g = 0:
Let f (x1; x2; : : : ; xd) = x21 + x22 + : : : + x2d . Then
                                                                     (
                                                                              if i = j;
                                      fxi = 2xi ; fxi xj = 2
                                                                         0    if i 6= j:

Itô’s formula implies

                                X
                                d                       X
                                                        d
                    dr(t) =           fxi dXi + 12             fxi xi dXi dXi
                                i=1                      i=1
                                Xd                                             X
                                                                                 d 1
                            =         2Xi , 12 Xi dt + 12  dWi(t) +                 2              dWi dWi
                                i=1                                                        i=1 4
                                                       X
                                                       d                  2
                            = , r(t) dt +                    Xi dWi + d4 dt
                                                       !i=1
                                                         q X      d X (t)
                            =    d 2   , r ( t ) dt +   r ( t )   pri (t) dWi(t):
                                      4                                      i=1

Define

                            d Z t X (u)
                            X
                    W (t) =       pi dWi(u):
                                i=1 0           r(u)
CHAPTER 31. Cox-Ingersoll-Ross model                                                         305

Then W is a martingale,

                           X
                           d X
                       dW = pri dWi ;
                               i=1
                               X
                               d X2
                                  i
                   dW dW =             dt = dt;
                               i=1 r
so W is a Brownian motion. We have

                                 2           ! q
                      dr(t) = d4 , r(t) dt +  r(t) dW (t):

The Cox-Ingersoll-Ross (CIR) process is given by
                                                               q
                                dr(t) = ( , r(t)) dt +  r(t) dW (t);
We define
                                              d = 4 2 > 0:
If d happens to be an integer, then we have the representation

                                                     X
                                                     d
                                                       2
                                            r(t) =         Xi (t);
                                                     i=1
but we do not require d to be an integer. If d < 2 (i.e.,       < 12  2), then
                  IP fThere are infinitely many values of t > 0 for which r(t) = 0g = 1:
This is not a good parameter choice.
If d  2 (i.e.,      12 2), then
                    IP fThere is at least one value of t > 0 for which r(t) = 0g = 0:
                                                                            4 2 is a positive
With the CIR process, one can derive formulas under the assumption that d = 
integer, and they are still correct even when d is not an integer.
For example, here is the distribution of r(t) for fixed t > 0. Let r(0)  0 be given. Take
                                                                                  q
                      X1(0) = 0; X2(0) = 0; : : : ; Xd,1 (0) = 0; Xd(0) = r(0):
For i = 1; 2; : : : ; d , 1, Xi (t) is normal with mean zero and variance
                                                     2
                                         (t; t) = 4 (1 , e, t ):
306

Xd (t) is normal with mean                                                          q
                                                                            1
                                            md(t) = e, 2 t r(0)
and variance (t; t). Then

                                   dX
                                    ,1              2           !
           r(t) =        (t; t)          pX i ( t)                                                          X  2
                                   i=1 {z   (t; t)
                                                                                +                            | d{z(t)}            (0.1)
                         |                                          }               Normal squared and independent of the other
                    Chi-square with d   ,1= 
                                            4       ,22 degrees of                 term
                    freedom

Thus r(t) has a non-central chi-square distribution.


31.1 Equilibrium distribution of r (t)

As t!1, md (t)!0. We have

                                                       X
                                                       d           !2
                                        r(t) = (t; t)   pX i (t )    :
                                                                    i=1             (t; t)
As t!1, we have (t; t) =                                                  
                            4 , and so the limiting distribution of r(t) is 4 times a chi-square
                                    2                                                                                    2


         4 degrees of freedom. The chi-square density with 4 degrees of freedom is
with d =  2                                                 2
                                                       ,
                             f (y) = 2 = 1  2  y  e,y=2 :
                                                                                     2           2
                                                                                             2

                                    2      ,                   2
                                                                            2



We make the change of variable r =  y . The limiting density for r(t) is
                                                2
                                            4

                                             1    4 r  e,  r
                                                                                                     ,2
                              p(r) = 4 :
                                                                                                 2
                                                                                                         2      2
                                                                                                                    2
                                    2 22 = , 2    2     2
                                                                        2

                                                   ,
                                   = 2 2  12  r  e,  r :
                                                    2
                                                        2                       2        2           2
                                                                                     2                   2

                                            ,                          2



We computed the mean and variance of r(t) in Section 15.7.


31.2 Kolmogorov forward equation

Consider a Markov process governed by the stochastic differential equation

                                 dX (t) = b(X (t)) dt + (X (t)) dW (t):
CHAPTER 31. Cox-Ingersoll-Ross model                                                               307




                             h



      0                                                  -y

                                   Figure 31.2: The function h(y )


Because we are going to apply the following analysis to the case X (t) = r(t), we assume that
X (t)  0 for all t.
We start at X (0) = x  0 at time 0. Then X (t) is random with density p(0; t; x; y ) (in the y
variable). Since 0 and x will not change during the following, we omit them and write p(t; y ) rather
than p(0; t; x; y ). We have
                                                     Z1
                                  IEh(X (t)) =            h(y )p(t; y ) dy
                                                     0

for any function h.
The Kolmogorov forward equation (KFE) is a partial differential equation in the “forward” variables
t and y . We derive it below.
Let h(y ) be a smooth function of y  0 which vanishes near y = 0 and for all large values of y (see
Fig. 31.2). Itô’s formula implies

                              h                                              i
                dh(X (t)) = h0(X (t))b(X (t)) + 21 h00(X (t))2 (X (t)) dt + h0 (X (t))(X (t)) dW (t);

so

                                           Z th                                             i
                  h(X (t)) = h(X (0)) +          h0 (X (s))b(X (s)) + 12 h00 (X (s))2 (X (s)) ds +
                                     Zt     0
                                          h0 (X (s))(X (s)) dW (s);
                                      0         Z th                                              i
               IEh(X (t)) = h(X (0)) + IE            h0 (X (s))b(X (s)) dt + 12 h00(X (s))2 (X (s)) ds;
                                                 0
308

or equivalently,
           Z1                                             Z tZ 1
                h(y)p(t; y ) dy = h(X (0)) +                       h0 (y )b(y )p(s; y ) dy ds +
            0                                       Zt 1  Z0 0
                                                  1      00    2
                                                  2 0 0 h (y ) (y )p(s; y ) dy ds:

Differentiate with respect to t to get
          Z1                        Z1                                           Z1
                h(y)pt(t; y) dy =               h0(y )b(y )p(t; y ) dy + 12                h00(y )2 (y )p(t; y ) dy:
           0                            0                                          0
Integration by parts yields
  Z1                                                         y=1         Z1            @ (b(y)p(t; y )) dy;
           h0(y )b(y)p(t; y ) dy = h(y)b(y)p(t; y )                  ,           h(y ) @y
     0                                                       y=0 }       0
                                    |                {z
                                                     =0
Z1                                                               y=1         Z1            @  2(y )p(t; y ) dy
         h00(y)2(y)p(t; y ) dy = h0(y)2 (y )p(t; y )                   ,         h0 (y ) @y
 0                                                               y=0 }       0
                                    |                {z
                                                     =0
                                                   @  2                  y=1 Z 1                    @ 2  2(y )p(t; y ) dy:
                                = ,h(y ) @y  (y )p(t; y )                             +        h(y ) @y 2
                                                                             y=0 }          0
                                    |                       {z
                                                           =0

Therefore,
          Z1                                Z1          @ (b(y)p(t; y )) dy + 1 Z 1 h(y ) @ 2 2(y )p(t; y ) dy;
                h(y)pt(t; y) dy = ,               h(y ) @y                    2          @y 2
           0                                0                                                   0
or equivalently,
                 Z1         "                                                                           #
                                      @ (b(y )p(t; y )) , 1 @ 2 2(y )p(t; y ) dy = 0:
                     h(y) pt(t; y ) + @y
                   0                                      2 @y 2

This last equation holds for every function h of the form in Figure 31.2. It implies that

                                     @ ((b(y )p(t; y )) , 1 @ 2 2(y )p(t; y ) = 0:
                         pt(t; y ) + @y                   2 @y 2                                                         (KFE)

If there were a place where (KFE) did not hold, then we could take h(y ) > 0 at that and nearby
points, but take h to be zero elsewhere, and we would obtain
                                Z1 "      @ (bp) , 1 @ 2 (2 p) dy 6= 0:
                                                                                       #
                                   h pt + @y       2 @y 2
                                 0
CHAPTER 31. Cox-Ingersoll-Ross model                                                           309

If the process X (t) has an equilibrium density, it will be

                                                 p(y ) = t!
                                                          lim1 p(t; y ):
In order for this limit to exist, we must have

                                                       lim1 pt (t; y ):
                                                  0 = t!
Letting t!1 in (KFE), we obtain the equilibrium Kolmogorov forward equation

                                      @ (b(y)p(y)) , 1 @ 2  2(y )p(y ) = 0:
                                      @y             2 @y 2

When an equilibrium density exists, it is the unique solution to this equation satisfying

                                                 p(y )  0 8y  0;
                                                  Z1
                                                       p(y ) dy = 1:
                                                   0

31.3 Cox-Ingersoll-Ross equilibrium density

We computed this to be
                   ,
         p(r) = Cr  e,  r ;
                    2           2    2
                            2            2




where
                2 
                                     12  :
                            2

           C = 2
                                2


                                    ,       2



We compute


        p0(r) = 2 ,2  : p(rr) , 22 p(r)
                                2

                                     
             = 22       ,   1  2 , r p(r);
                 r  2                                                     
        p00(r) = , 22r2 , 21 2 , r p(r) + 22 r (, )p(r) + 22r , 12  2 , r p0 (r)
                                                                   
               = 22r , 1r ( , 12  2 , r) , + 22r ( , 12  2 , r)2 p(r)
We want to verify the equilibrium Kolmogorov forward equation for the CIR process:

                                     @ (( , r)p(r)) , 1 @ 2 (2 rp(r)) = 0:
                                     @r               2 @r2                                 (EKFE)
310

Now
          @ (( , r)p(r)) = , p(r) + ( , r)p0(r);
          @r
              @ 2 (2 rp(r)) = @ (2 p(r) + 2 rp0(r))
              @r2              @r
                             = 22 p0(r) +  2rp00(r):
The LHS of (EKFE) becomes

                                , p(r)+ ( , r)p0(r) , 2p0(r) , 12 2rp00(r)
                                = p(r) , + ( , r , 2 ) 22 r ( , 12 2 , r)
                                          1                         2          
                                        + ( , 2  , r) + ,  2r ( , 2  , r)
                                                  1 2                    1 2 2
                                       r
                                = p(r) ( , 12 2 , r) 22 ( , 12  2 , r)
                                                      r
                                                2
                                        , 1  2 ( , 1 2 , r)
                                             2    2r        2
                                                                                        
                                          + r1 ( , 12  2 , r) , 22 r ( , 21  2 , r)2
                                = 0;
as expected.


31.4 Bond prices in the CIR model

The interest rate process r(t) is given by
                                                              q
                                dr(t) = ( , r(t)) dt +  r(t) dW (t);
where r(0) is given. The bond price process is
                                            "    ( ZT      )     #
                               B (t; T ) = IE exp , r(u) du F (t) :
                                                         t
Because              Zt                    " ( ZT        )     #
                 exp , r(u) du B (t; T ) = IE exp , r(u) du F (t) ;
                           0                                          0
the tower property implies that this is a martingale. The Markov property implies that B (t; T ) is
random only through a dependence on r(t). Thus, there is a function B (r; t; T ) of the three dummy
variables r; t; T such that the process B (t; T ) is the function B (r; t; T ) evaluated at r(t); t; T , i.e.,

                                         B(t; T ) = B(r(t); t; T ):
CHAPTER 31. Cox-Ingersoll-Ross model                                                            311
               n Rt        o
Because exp     , 0 r(u) du B(r(t); t; T ) is a martingale, its differential has no dt term. We com-
pute

                      Zt                               
               d exp ,        r(u) du B (r(t); t; T )
                     Z0t     
               = exp , r(u) du ,r(t)B (r(t); t; T ) dt + Br (r(t); t; T ) dr(t) +
                       0                                        
                         1 Brr (r(t); t; T ) dr(t) dr(t) + Bt (r(t); t; T ) dt :
                         2

The expression in [: : : ] equals

               = ,rB dt + Br ( , r) dt + Br  r dW
                                                      p
                      + 12 Brr 2 r dt + Bt dt:
Setting the dt term to zero, we obtain the partial differential equation

   , rB(r; t; T ) + Bt (r; t; T ) + ( , r)Br (r; t; T ) + 21 2rBrr (r; t; T ) = 0;
                                                                            0  t < T; r  0: (4.1)
The terminal condition is
                                        B(r; T; T ) = 1; r  0:
Surprisingly, this equation has a closed form solution. Using the Hull & White model as a guide,
we look for a solution of the form

                                     B (r; t; T ) = e,rC (t;T ),A(t;T );
where C (T; T ) = 0; A(T; T ) = 0. Then we have

                                      Bt = (,rCt , At )B;
                                      Br = ,CB; Brr = C 2B;
and the partial differential equation becomes

                       0 = ,rB + (,rCt , At )B , ( , r)CB + 21 2 rC 2B
                         = rB (,1 , Ct + C + 12 2 C 2 ) , B (At + C )
We first solve the ordinary differential equation

                    ,1 , Ct(t; T ) + C (t; T ) + 12 2C 2(t; T ) = 0; C (T; T ) = 0;
and then set                                        ZT
                                      A(t; T ) =          C (u; T ) du;
                                                      t
312

so A(T; T ) = 0 and
                                              At (t; T ) = , C (t; T ):
It is tedious but straightforward to check that the solutions are given by

                 C (t; T ) =           sinh( (T , t))           ;
                             cosh( (T , t)) + 12 sinh( (T , t))
                                     2                1                    3
                              2                     e 2 (T ,t)
                 A(t; T ) = , 2 log 4                                     5;
                                        cosh( (T , t)) + 21 sinh( (T , t))
where                     q
                                              sinh u = e ,2 e ; cosh u = e +2 e :
                                                           u    ,u           u   ,u
                   = 12       2 + 2 2 ;

Thus in the CIR model, we have
                              " ( ZT      )     #
                          IE exp , r(u) du F (t) = B(r(t); t; T );
                                              t
where
                  B(r; t; T ) = exp f,rC (t; T ) , A(t; T )g ; 0  t < T; r  0;
and C (t; T ) and A(t; T ) are given by the formulas above. Because the coefficients in
                                                                  q
                              dr(t) = ( , r(t)) dt +  r(t) dW (t)
do not depend on t, the function B (r; t; T ) depends on t and T only through their difference  =
T , t. Similarly, C (t; T ) and A(t; T ) are functions of  = T , t. We write B(r;  ) instead of
B (r; t; T ), and we have
                        B (r;  ) = exp f,rC ( ) , A( )g ;   0; r  0;
where

                          C ( ) = cosh( sinh(      )
                                             ) + 2 sinh(  ) ;
                                                  1
                                            2               1           3
                          A( ) = , 22 log 4             e 2
                                                                         5;
                                                cosh(  ) + 12 sinh(  )
                                          q
                                   = 21       2 + 2 2 :

We have                                               ( ZT      )
                                  B(r(0); T ) = IE exp , r(u) du :
                                                                 0
Now r(u) > 0 for each u, almost surely, so B (r(0); T ) is strictly decreasing in T . Moreover,

                                                  B(r(0); 0) = 1;
CHAPTER 31. Cox-Ingersoll-Ross model                                                               313
                                                            Z1                
                           lim B (r(0); T ) = IE exp ,
                          T !1
                                                                      r(u) du = 0:
                                                                 0
But also,
                               B(r(0); T ) = exp f,r(0)C (T ) , A(T )g ;
so

                                          r(0)C (0) + A(0) = 0;
                                       lim [r(0)C (T ) + A(T )] = 1;
                                      T !1
and

                                             r(0)C (T ) + A(T )
is strictly inreasing in T .


31.5 Option on a bond

The value at time t of an option on a bond in the CIR model is
                                  " ( ZT      )                      #
                                                  1
                                                               +
                 v(t; r(t)) = IE exp , r(u) du (B(T1; T2) , K ) F (t) ;
                                       t

                  n R time ofothe option, T2 is the maturity time of the bond, and 0  t  T1 
where T1 is the expiration
T2. As usual, exp , 0t r(u) du v(t; r(t)) is a martingale, and this leads to the partial differential
equation
                   ,rv + vt + ( , r)vr + 12 2rvrr = 0; 0  t < T1; r  0:
(where v = v (t; r).) The terminal condition is

                               v(T1; r) = (B(r; T1; T2) , K )+ ; r  0:
Other European derivative securities on the bond are priced using the same partial differential equa-
tion with the terminal condition appropriate for the particular security.


31.6 Deterministic time change of CIR model

Process time scale: In this time scale, the interest rate r(t) is given by the constant coefficient CIR
equation                                                   q
                               dr(t) = ( , r(t)) dt +  r(t) dW (t):
Real time scale: In this time scale, the interest rate r^(t^) is given by a time-dependent CIR equation
                                                                      q
                          dr^(t^) = (^(t^) , ^(t^)^r(t^)) dt^ + ^ (t^) r^(t^) dW^ (t^):
                  t : Process time
314               6
                                                                                 t = '(t^)
                                                       .
                                                       ..
                                                        ..
                                                         .
                                                         ..
                                                          ...
                                                            .
                                                            ..
                                                             ..
                                                              ..
                                                               ..
                                                                ..
                                                                 .
                                                                 ..
                         ..                                       ..
                          ...                                      ...
                            ..                                       ...
                             ...                                       ...
                               ...                                       ...


                                                                                           - t^ : Real time
                                 ..                                        ..
                                  .                                         .


                                                    -
                                  ..                                        ..



                         A                pe-
                         riod of high inter-
                         est rate volatility



                                               Figure 31.3: Time change function.


There is a strictly increasing time change function t = '(t^) which relates the two time scales (See
Fig. 31.3).
Let B   ^ (^r; ^t; T^) denote the price at real time t^ of a bond with maturity T^ when the interest rate at time
^t is r^. We want to set things up so

                                          B^ (^r; ^t; T^) = B (r; t; T ) = e,rC (t;T ),A(t;T );
where t = '(t^); T = '(T^), and C (t; T ) and A(t; T ) are as defined previously.
We need to determine the relationship between r^ and r. We have

                                                                  ( ZT         )
                                          B(r(0); 0; T ) = IE exp , r(t) dt ;
                                                                  ( Z0T^       )
                                          B(^r(0); 0; T^) = IE exp , r^(t^) dt^ :
                                                                                             0

With T = '(T^), make the change of variable t = '(t^), dt = '0(t^) dt^ in the first integral to get

                                                              ( Z T^               )
                                                                          0
                                       B(r(0); 0; T ) = IE exp , r('(t^))' (t^) dt^ ;
                                                                                       0

                    r(0); 0; T^) if we set
and this will be B (^


                                                       r^(t^) = r('(t^)) '0(t^):
CHAPTER 31. Cox-Ingersoll-Ross model                                                                315

31.7 Calibration

                                                ^
                                                                !
                   B^ (^r(t^); ^t; T^) = B r^0(t^) ; '(t^); '(T^)
                                            (' (t)             ^        ^))                   )
                                       = exp ,r^(t^)  C  ( ' ( t) ; ' (T                 ^
                                                                            , A('(t^); '(T ))
                                                             '0 (t^)
                                            n                                o
                                       = exp ,r^(t^)C^ (t^; T^) , A^(t^; T^) ;
where

                                             ^      ^
                         C^ (t^; T^) = C ('(t)0 ;^'(T ))
                                           ' (t)
                         A^(t^; T^) = A('(t^); '(T^))
                 t and T^ only through T^ , t^, since, in the real time scale, the model coefficients
do not depend on ^
are time dependent.
                          ^ (^r(0); 0; T^ ) for all T^ 2 [0; T^ ]. We calibrate by writing the equation
Suppose we know r^(0) and B
                                                    n                               o
                          B^ (^r(0); 0; T^) = exp ,r^(0)C^ (0; T^) , A^(0; T^) ;
or equivalently,

                   , log B^ (^r(0); 0; T^) = 'r^0(0)             ^                ^
                                                  (0) C ('(0); '(T )) + A('(0); '(T )):
Take ; and  so the equilibrium distribution of r(t) seems reasonable. These values determine
the functions C; A. Take '0(0) = 1 (we justify this in the next section). For each T^, solve the
equation for '(T^):

                        , log B^ (^r(0); 0; T^) = r^(0)C (0; '(T^)) + A(0; '(T^)):                   (*)

The right-hand side of this equation is increasing in the '(T^) variable, starting at 0 at time 0 and
having limit 1 at 1, i.e.,

                                      r^(0)C (0; 0) + A(0; 0) = 0;
                                   lim [^r(0)C (0; T ) + A(0; T )] = 1:
                                  T !1
Since 0  , log B ^ (^r(0); 0; T^) < 1; (*) has a unique solution for each T^. For T^ = 0, this solution
is '(0) = 0. If T1 < T^2, then
                ^
                              , log B^ (r(0); 0; T^1) < , log B^ (r(0); 0; T^2);
so '(T^1) < '(T^2). Thus ' is a strictly increasing time-change-function with the right properties.
316

31.8 Tracking down '0 (0) in the time change of the CIR model

Result for general term structure models:
                                       @ log B(0; T )
                                    , @T                            = r(0):
                                                           T =0
Justification:
                                                       ( ZT           )
                                     B(0; T ) = IE exp , r(u) du :
                                                            0
                                                             ( ZT       )
                               , log B(0; T ) = , log IE exp , r(u) du
                                                                0
                                                           R T     
                                                          , r(u) du
                              @ log B (0; T ) = IE r(T )eR
                           , @T
                                                                        0


                                                           T
                                                   IEe, r(u) du     0

                         @ log B(0; T ) = r(0):
                      , @T
                                       T =0
In the real time scale associated with the calibration of CIR by time change, we write the bond price
as
                                               B^ (^r(0); 0; T^);
thereby indicating explicitly the initial interest rate. The above says that

                                 , @^ log B^ (^r(0); 0; T^) ^ = r^(0):
                                    @T                         T =0
The calibration of CIR by time change requires that we find a strictly increasing function ' with
'(0) = 0 such that
                 , log B^ (^r(0); 0; T^) = '01(0) r^(0)C ('(T^)) + A('(T^)); T^  0;                 (cal)

where B^ (^r(0); 0; T^), determined by market data, is strictly increasing in T^, starts at 1 when T^ = 0,
and goes to zero as T^!1. Therefore, , log B   ^ (^r(0); 0; T^) is as shown in Fig. 31.4.
Consider the function
                                            r^(0)C (T ) + A(T );
Here C (T ) and A(T ) are given by

                         C (T ) =          sinh( T )         ;
                                   cosh( T ) + 12 sinh( T )
                                           2             1 T          3
                         A(T ) = , 22 log 4 cosh( T ) e+ 1 sinh( T ) 5 ;
                                                         2
                                                           2
                                       q
                                = 12       2 + 22 :
 CHAPTER 31. Cox-Ingersoll-Ross model                                                                                                                          317

                                 6, log B^ (^r(0); 0; T^)
                                                                                                                                        Goes to 1


                                                                                                                  Strictly increasing




                                                                                                                                     - T^


                                                                          Figure 31.4: Bond price in CIR model

                                 6
                                                                                                                                        r^(0)C (T ) + A(T )

, log B^ (^r(0); 0; T^)   .... .... ..... ..... ..... ..... ..... ..... .... .... .... .
                                                                                       ..
                                                                                        ...
                                                                                          ...
                                                                                            ...
                                                                                              ..
                                                                                               .
                                                                                               ..
                                                                                                ...


                                                                                                                                     -T
                                                                                                  ..
                                                                                                   ..
                                                                                                    ..
                                                                                                     ..


                                                                                        '(T^)

                                                                                                          Figure 31.5: Calibration

 The function r^(0)C (T ) + A(T ) is zero at T = 0, is strictly increasing in T , and goes to 1 as
 T !1. This is because the interest rate is positive in the CIR model (see last paragraph of Section
 31.4).
 To solve (cal), let us first consider the related equation

                                           , log B^ (^r(0); 0; T^) = r^(0)C ('(T^)) + A('(T^)):                                                               (cal’)

 Fix T^ and define '(T^) to be the unique T for which (see Fig. 31.5)

                              , log B^ (^r(0); 0; T^) = r^(0)C (T ) + A(T )
 If T^ = 0, then '(T^) = 0. If T^1 < T^2, then '(T^1) < '(T^2). As T^!1, '(T^)!1. We have thus
 defined a time-change function ' which has all the right properties, except it satisfies (cal’) rather
 than (cal).
318

We conclude by showing that '0(0) = 1 so ' also satisfies (cal). From (cal’) we compute

                                    r^(0) = , @^ log B^ (^r(0); 0; T^) ^
                                               @T                      T =0
                                          = r^(0)C 0('(0))'0(0) + A0('(0))'0(0)
                                          = r^(0)C 0(0)'0(0) + A0(0)'0(0):
We show in a moment that C 0 (0) = 1, A0(0) = 0, so we have

                                                    r^(0) = r^(0)'0(0):
Note that r^(0) is the initial interest rate, observed in the market, and is striclty positive. Dividing by
r^(0), we obtain
                                                       '0 (0) = 1:
Computation of C 0(0):

                                       1                                                    
         C 0 ( ) =                                 2   cosh(  )   cosh(  ) + 1 sinh(  )
                                                                                  2
                            cosh(  ) + 12 sinh(  )
                                               2                             
                                 , sinh(  )        sinh(  ) + 12   cosh(  )
                            h                            i
         C 0(0) = 12 ( + 0) , 0(0 + 12 ) = 1:

Computation of A0 (0):
                        "                                    #
                                cosh(  ) + 12 sinh(  )
      A0 ( ) = , 22                    e =2
                                          1                                             
                                                     2   e =2 cosh(  ) + 1 sinh(  )
                                                                              2
                               cosh(  ) + 12 sinh(  ) 2
                                                      
                     , e =2 2 sinh(  ) + 21 cosh(  ) ;
                                                       
      A0(0) = , 22 + 0 ( +1 0)2 2 ( + 0) , (0 + 21 )
                       " 2          #
                2    1
            = , 2  2 2 , 2  1   2

            = 0:
Chapter 32

A two-factor model (Duffie & Kan)

Let us define:


                               X1 (t) = Interest rate at time t
                   X2(t) = Yield at time t on a bond maturing at time t + 0

Let X1(0) > 0, X2 (0) > 0 be given, and let X1(t) and X2(t) be given by the coupled stochastic
differential equations

                                              q
dX1(t) = (a11X1(t) + a12X2(t) + b1) dt +  1 1 X1(t) + 2 X2(t) + dW1(t);             (SDE1)
                                            q                               q
dX2(t) = (a21X1(t) + a22X2(t) + b2) dt +  2 1 X1(t) + 2 X2(t) + ( dW1(t) + 1 , 2 dW2 (t));
                                                                                                 (SDE2)

where W1 and W2 are independent Brownian motions. To simplify notation, we define


                              Y (t) =4 1X1(t) + 2X2 (t) + ;
                                               q
                             W3(t) =4 W1(t) + 1 , 2W2 (t):

Then W3 is a Brownian motion with


                                    dW1(t) dW3(t) =  dt;

and


             dX1 dX1 = 21Y dt; dX2 dX2 = 22 Y dt; dX1 dX2 = 1 2Y dt:
                                             319
320

32.1 Non-negativity of Y


            dY = 1 dX1 + 2 dX2
               = ( 1a11X1 + 1a12 X2 + 1b1) dt + ( 2a21 X1 + 2a22 X2 + 2 b2) dt
                          p                                     q
                        + Y ( 1 1 dW1 + 22 dW1 + 2 1 , 22 dW2)
               = [( 1a11 + 2 a21)X1 + ( 1a12 + 2a22)X2 ] dt + ( 1 b1 + 2 b2) dt
                                                             1q
                        + ( 12 21 + 2 1 21  2 + 22 22 ) 2 Y (t) dW4(t)
where
                                                p
          W4(t) = ( 11 +q 2222 )W1(t) + 2 1 , 2 22 W2 (t)
                                                   2

                            1 1 + 2 1 21 2 + 2 2

is a Brownian motion. We shall choose the parameters so that:

          Assumption 1: For some ,         1 a11 + 2a21 =      1;       1 a12 + 2a22 =   2:

Then

        dY = [    1X1 +      2X2 + ] dt + ( 1b1 + 2b2 , ) dt
                                                           1p
                      + ( 12 21 + 2 1 21  2 + 22 22 ) 2 Y dW4
                                                                               1p
           =     Y dt + ( 1b1 + 2 b2 , ) dt + ( 12 21 + 2 1 2 12 + 22 22) 2 Y dW4:
From our discussion of the CIR process, we recall that Y will stay strictly positive provided that:

                      Assumption 2:    Y (0) = 1X1 (0) + 2X2(0) + > 0;
and
               Assumption 3:     1b1 + 2 b2 ,       12 ( 1221 + 2 1 212 + 2222):
Under Assumptions 1,2, and 3,

                               Y (t) > 0; 0  t < 1; almost surely,
and (SDE1) and (SDE2) make sense. These can be rewritten as
                                                                    q
                  dX1(t) = (a11X1 (t) + a12X2 (t) + b1) dt +  1 Y (t) dW1(t);                (SDE1’)
                                                                q
                  dX2(t) = (a21X1 (t) + a22X2 (t) + b2) dt +  2 Y (t) dW3(t):                (SDE2’)
CHAPTER 32. A two-factor model (Duffie & Kan)                                                    321

32.2 Zero-coupon bond prices

The value at time t  T of a zero-coupon bond paying $1 at time T is
                                             "( ZT       )     #
                             B(t; T ) = IE exp , X1(u) du F (t) :
                                                          t
Since the pair (X1; X2) of processes is Markov, this is random only through a dependence on
X1(t); X2(t). Since the coefficients in (SDE1) and (SDE2) do not depend on time, the bond price
depends on t and T only through their difference  = T , t. Thus, there is a function B (x1 ; x2;  )
of the dummy variables x1; x2 and  , so that
                                                     "
                                                  ( ZT       )     #
                   B(X1(t); X2(t); T , t) = IE exp , X1(u) du F (t) :
                                                                       t
The usual tower property argument shows that
                                 Zt       
                             exp , X1(u) du B (X1(t); X2(t); T , t)
                                         0
is a martingale. We compute its stochastic differential and set the dt term equal to zero.
      Zt                             
d exp , X1(u) du B(X1(t); X2(t); T , t)
       Z0t      
 = exp , X1(u) du ,X1 B dt + Bx dX1 + Bx dX2 , B dt
                                                                                 
                                                 1                 2
              0
                  + 12 Bx1 x1 dX1 dX1 + Bx1 x2 dX1 dX2 + 21 Bx2 x2 dX2 dX2
         Zt               
= exp ,           X1(u) du       ,X1B + (a11X1 + a12X2 + b1)Bx + (a21X1 + a22X2 + b2)Bx , B
                                                               
                                                                            1                     2
              0
                      + 12 21 Y Bx x + 1 2 Y Bx x + 12 22 Y Bx x dt
                                                                       
                                   1 1                   1 2               2 2

                             p                   p
                      +  1 Y Bx dW1 +  2 Y Bx dW3
                                    1                          2



The partial differential equation for B (x1 ; x2;  ) is

  , x1B , B +(a11x1 + a12x2 + b1)Bx +(a21x1 + a22x2 + b2)Bx + 21 21( 1x1 + 2x2 + )Bx x
                                             1                               2                   1 1

                   + 1  2( 1x1 + 2x2 + )Bx x + 21  22 ( 1x1 + 2x2 + )Bx x = 0: (PDE)
                                                         1 2                         2 2



We seek a solution of the form

                       B(x1 ; x2;  ) = exp f,x1 C1 ( ) , x2C2 ( ) , A( )g ;
valid for all   0 and all x1 ; x2 satisfying

                                           1x1 + 2 x2 + > 0:                                     (*)
322

We must have
                           B(x1 ; x2; 0) = 1; 8x1 ; x2 satisfying (*);
because  = 0 corresponds to t = T . This implies the initial conditions
                                   C1(0) = C2(0) = A(0) = 0:                                         (IC)
We want to find C1( ); C2( ); A( ) for  > 0. We have
                                                                     
                  B (x1; x2;  ) = ,x1C10 ( ) , x2C20 ( ) , A0 ( ) B (x1; x2;  );
                 Bx (x1; x2;  ) = ,C1( )B (x1; x2;  );
                     1

                 Bx (x1; x2;  ) = ,C2( )B (x1; x2;  );
                     2

               Bx x (x1; x2;  ) = C12( )B(x1 ; x2;  );
                   1 1

               Bx x (x1; x2;  ) = C1( )C2( )B(x1; x2;  );
                   1 2

               Bx x (x1; x2;  ) = C22( )B(x1 ; x2;  ):
                   2 2

(PDE) becomes
                         
      0 = B (x1 ; x2;  ) ,x1 + x1C10 ( ) + x2 C20 ( ) + A0 ( ) , (a11x1 + a12 x2 + b1)C1( )
                  , (a21x1 + a22x2 + b2)C2( )
                  + 12  21 ( 1x1 + 2 x2 + )C12( ) + 1  2( 1x1 + 2x2 + )C1( )C2( )
                                                   
                     1    2                   2
                  + 2  2 ( 1x1 + 2 x2 + )C2 ( )
                            
        = x1 B (x1 ; x2;  ) , 1 + C10 ( ) , a11C1( ) , a21C2 ( )
                                                                                            
                         + 12  21 1C12 ( ) +  1 2 1C1( )C2( ) + 21  22 1C22 ( )
                                        
                  + x2 B (x1 ; x2;  ) C20 ( ) , a12C1( ) , a22C2 ( )
                                                                                            
                         + 12  21 2C12 ( ) +  1 2 2C1( )C2( ) + 21  22 2C22 ( )
                                    
                  + B (x1 ; x2;  ) A0( ) , b1 C1( ) , b2C2( )
                                                                                        
                         + 12  21 C12( ) + 1  2 C1 ( )C2( ) + 21  22 C22 ( )
We get three equations:
  C10 ( ) = 1 + a11C1 ( ) + a21C2( ) , 12 21 1C12 ( ) , 1 2 1C1 ( )C2( ) , 12 22 1C22 ( );
                                                                                                         (1)
  C1(0) = 0;
  C20 ( ) = a12C1( ) + a22 C2( ) , 21  21 2C12 ( ) , 12 2C1( )C2( ) , 12  22 2C22 ( );       (2)
  C2(0) = 0;
  A0( ) = b1C1( ) + b2C2 ( ) , 21 21 C12 ( ) , 1 2 C1( )C2( ) , 12 22 C22( );                (3)
   A(0) = 0;
CHAPTER 32. A two-factor model (Duffie & Kan)                                                    323

We first solve (1) and (2) simultaneously numerically, and then integrate (3) to obtain the function
A( ).

32.3 Calibration

Let 0 > 0 be given. The value at time t of a bond maturing at time t + 0 is

               B(X1(t); X2(t); 0) = expf,X1 (t)C1(0) , X2 (t)C2(0) , A(0 )g
and the yield is

            , 1 log B(X1(t); X2(t); 0) = 1 [X1(t)C1(0) + X2(t)C2(0) + A(0)] :
               0                                0

But we have set up the model so that X2(t) is the yield at time t of a bond maturing at time t + 0 .
Thus
                        X2(t) = 1 [X1(t)C1(0 ) + X2(t)C2(0) + A(0)] :
                                   0
This equation must hold for every value of X1(t) and X2 (t), which implies that

                               C1 (0) = 0; C2 (0) = 0; A( ) = 0:
We must choose the parameters

                           a11; a12; b1; a21 ; a22; b2;   1 ; 2;   ;  1 ; ; 2 ;
so that these three equations are satisfied.
324
Chapter 33

Change of numéraire

Consider a Brownian motion driven market model with time horizon T . For now, we will have
one asset, which we call a “stock” even though in applications it will usually be an interest rate
dependent claim. The price of the stock is modeled by

                               dS (t) = r(t) S (t) dt +  (t)S (t) dW (t);                     (0.1)

where the interest rate process r(t) and the volatility process  (t) are adapted to some filtration
fF (t); 0  t  T g. W is a Brownian motion relative to this filtration, but fF (t); 0  t  T g
may be larger than the filtration generated by W .
This is not a geometric Brownian motion model. We are particularly interested in the case that the
interest rate is stochastic, given by a term structure model we have not yet specified.
We shall work only under the risk-neutral measure, which is reflected by the fact that the mean rate
of return for the stock is r(t).
We define the accumulation factor
                                                    Z t          
                                        (t) = exp          r(u) du ;
                                                       0

so that the discounted stock price S ((tt)) is a martingale. Indeed,
                                       
                                     d S((tt)) = S((tt))  (t) dW (t):
The zero-coupon bond prices are given by
                                                       "  ( ZT      )      #
                                        B (t; T ) = IE exp , r(u) du F (t)
                                                       (t) t 
                                                  = IE (T ) F (t) ;

                                                    325
326

so

                  B(t; T ) = IE  1 F (t)
                    (t)           (T )
is also a martingale (tower property).
The T -forward price F (t; T ) of the stock is the price set at time t for delivery of one share of stock
at time T with payment at time T . The value of the forward contract at time t is zero, so
                                        (t)                             
                              0 = IE         (S (T ) , F (t; T )) F (t)
                                           (T )
                                                                          
                                = (t)IE S (T ) Ft , F (t; T )IE (t) F (t)
                                             (T )                       (T )
                                = (t) S (t) , F (t; T )B (t; T )
                                         (t)
                                = S (t) , F (t; T )B (t; T )
Therefore,


                      F (t; T ) = BS(t;(tT) ) :

Definition 33.1 (Numéraire) Any asset in the model whose price is always strictly positive can be
taken as the numéraire. We then denominate all other assets in units of this numéraire.

Example 33.1 (Money market as numéraire) The money market could be the numéraire. At time t, the
              S (t)                                                       B(t;T )
stock is worth (t) units of money market and the T -maturity bond is worth (t) units of money market.



Example 33.2 (Bond as numéraire) The T -maturity bond could be the numéraire. At time t  T , the stock
is worth F(t; T ) units of T -maturity bond and the T -maturity bond is worth 1 unit.


We will say that a probability measure IPN is risk-neutral for the numéraire N if every asset price,
divided by N , is a martingale under IPN . The original probability measure IP is risk-neutral for the
numéraire (Example 33.1).

Theorem 0.71 Let N be a numéraire, i.e., the price process for some asset whose price is always
strictly positive. Then IPN defined by
                                                  Z N (T )
                           IPN (A) = N1(0)             (T )
                                                               dIP; 8A 2 F (T );
                                                   A
is risk-neutral for N .
CHAPTER 33. Change of numéraire                                                                    327

Note: IP and IPN are equivalent, i.e., have the same probability zero sets, and
                                           Z    (T  ) dIP ; 8A 2 F (T ):
                         IP (A) = N (0)                   N
                                             A N (T )
Proof: Because N is the price process for some asset, N= is a martingale under IP . Therefore,
                                              1     Z N (T )
                                   IPN ( ) = N (0)        (T ) dIP
                                                        
                                           = N1(0) :IE N((TT))
                                           = N1(0) N(0)
                                                      (0)

                                             = 1;
and we see that IPN is a probability measure.
Let Y be an asset price. Under IP , Y= is a martingale. We must show that under IPN , Y=N is
a martingale. For this, we need to recall how to combine conditional expectations with change of
measure (Lemma 1.54). If 0  t  T  T  and X is F (T )-measurable, then
                                     N (0) (t)  N (T )            
                          IEN X F (t) = N (t) IE N (0) (T ) X F (t)
                                                                 
                                      = N((tt)) IE N((TT)) X F (t) :

Therefore,
                         Y (T )          (t)  N (T ) Y (T )                   
                     IEN N  (T ) F ( t )  = N (t)  IE        (T ) N (T ) F ( t )
                                          = N((tt)) Y ((tt))
                                          =NY (t) ;
                                              (t)
which is the martingale property for Y=N under IPN .



33.1 Bond price as numéraire

Fix T 2 (0; T ] and let B (t; T ) be the numéraire. The risk-neutral measure for this numéraire is
                                                 Z B(T; T )
                          IPT (A) = B(01; T )   (T ) dIP
                                                 ZA
                                   = 1         1 dIP 8A 2 F (T ):
                                    B(0; T ) A (T )
328

Because this bond is not defined after time T , we change the measure only “up to time T ”, i.e.,
using B (01;T ) B ((T;T )
                     T ) and only for A 2 F (T ).
IPT is called the T -forward measure. Denominated in units of T -maturity bond, the value of the
stock is
                                   F (t; T ) = BS(t;(tT) ) ; 0  t  T:
This is a martingale under IPT , and so has a differential of the form

                        dF (t; T ) = F (t; T )F (t; T ) dWT (t); 0  t  T;                    (1.1)

i.e., a differential without a dt term. The process fWT ; 0  t  T g is a Brownian motion under
IPT . We may assume without loss of generality that  F (t; T )  0.
We write F (t) rather than F (t; T ) from now on.



33.2 Stock price as numéraire

Let S (t) be the numéraire. In terms of this numéraire, the stock price is identically 1. The risk-
neutral measure under this numéraire is

                                      1      Z S (T )
                                                                       
                          IPS (A) = S (0)
                                              A   (T  ) dIP; 8A 2 F (T ):
Denominated in shares of stock, the value of the T -maturity bond is

                                             B(t; T ) = 1 :
                                              S (t) F (t)
This is a martingale under IPS , and so has a differential of the form
                                                          
                              d F 1(t) = (t; T ) F 1(t) dWS (t);                                (2.1)


where fWS (t); 0  t  T  g is a Brownian motion under IPS . We may assume without loss of
generality that (t; T )  0.


Theorem 2.72 The volatility (t; T ) in (2.1) is equal to the volatility F (t; T ) in (1.1). In other
words, (2.1) can be rewritten as
                                                           
                              d F 1(t) =  F (t; T ) F 1(t) dWS (t);                           (2.1’)
CHAPTER 33. Change of numéraire                                                                 329

Proof: Let g (x) = 1=x, so g 0(x) = ,1=x2 ; g 00 (x) = 2=x3. Then

                  
          d F 1(t) = dg (F (t))
                   = g 0(F (t)) dF (t) + 21 g 00 (F (t)) dF (t) dF (t)
                   = , F 21(t)  F (t; T )F (t; T ) dWT (t) + F 31(t) 2F (t; T )F 2(t; T ) dt
                                h                                    i
                       = F 1(t) ,F (t; T ) dWT (t) + 2F (t; T ) dt
                                     
                       =  F (t; T ) F 1(t) [,dWT (t) + F (t; T ) dt]:

Under IPT ; ,WT is a Brownian motion. Under this measure, F 1(t) has volatility F (t; T ) and mean
rate of return 2F (t; T ). The change of measure from IPT to IPS makes F 1(t) a martingale, i.e., it
changes the mean return to zero, but the change of measure does not affect the volatility. Therefore,
  (t; T ) in (2.1) must be  F (t; T ) and WS must be
                                                      Zt
                               WS (t) = ,WT (t) +          F (u; T ) du:
                                                       0




33.3 Merton option pricing formula

The price at time zero of a European call is

                    1                      
       V (0) = IE (T )     (S (T ) , K )+
                   S (T )                      1              
             = IE          1
                     (T ) fS (T )>K g
                                          , KIE (T ) 1fS(T )>Kg
                     Z                S (T ) dIP , KB (0; T ) Z                   1
             = S (0)                                                                       dIP
                       fS (T )>K g S (0)  ( T )                fS (T )>K g B (0 ; T ) (T )
             = S (0)IPS fS (T ) > K g , KB (0; T )IPT fS (T ) > K g
             = S (0)IPS fF (T ) > K g , KB (0; T )IPT fF (T ) > K g
                                         
             = S (0)IPS 1 < 1 , KB (0; T )IPT fF (T ) > K g:
                            F (T ) K
330

This is a completely general formula which permits computation as soon as we specify F (t; T ). If
we assume that  F (t; T ) is a constant  F , we have the following:

                          1 = B (0; T ) exp n W (T ) , 1  2 T o ;
                                              F S        2 F
                 1 F (1T) S (0)                               S (0)  
             IPS F (T ) < K = IPS F WS (T ) , 2  F T < log KB (0; T )
                                                1  2
                                                             (0) + 1  pT 
                            = IPS WpS (T ) < 1p log KBS(0       ; T) 2 F
                                               T       F T
                                 = N (1);
where

                              1 =      1p log     S (0) + 1  2 T  :
                                      F T         KB (0; T ) 2 F
Similarly,

                                                  n                        o
                          F (T ) = BS(0(0)    exp    F W T ( T ) ,  1 2 T ;
                                                                     2  F
                                       ; T )                                     ; T )
              IPT fF (T ) > K g = IPT  F WT (T ) , 12  2F T > log KBS(0       (0)
                                        WT (T )          1           KB  (0 ; T )           
                                 = IPT      p      >      p        log                 1  2
                                                                                    + 2 F T
                                        ,WTT (T ) F 1T  S (0)           S (0)               
                                 = IPT        p < p log KB(0; T ) , 2 F T               1  2
                                                T        F T
                                 = N (2);
where

                              2 =      1p log S (0) , 1  2 T  :
                                      F T     KB (0; T ) 2 F
If r is constant, then B (0; T ) = e,rT ,

                               1 =  1p log S (0) + (r + 1  2 )T  ;
                                   F T  K               2 F
                                     1       S (0)                 
                               2 = p log K + (r , 2  F )T ;
                                                          1   2
                                      F T
and we have the usual Black-Scholes formula. When r is not constant, we still have the explicit
formula
                                V (0) = S (0)N (1) , KB (0; T )N (2):
CHAPTER 33. Change of numéraire                                                                    331

As this formula suggests, if  F is constant, then for 0  t  T , the value of a European call expiring
at time T is
                            V (t) = S (t)N (1(t)) , KB (t; T )N (2(t));
where
                                            F (t)                 
                          1(t) =      p1   log
                                  F T , t  K 2 F
                                                        +  (T , t) ;
                                                         1 2

                                     1          F ( t )            
                          2(t) = p         log K , 2  F (T , t) :
                                                         1 2
                                  F T , t
This formula also suggests a hedge: at each time t, hold N (1(t)) shares of stock and short
KN (2(t)) bonds.
We want to verify that this hedge is self-financing. Suppose we begin with $ V (0) and at each time
t hold N (1(t)) shares of stock. We short bonds as necessary to finance this. Will the position in
the bond always be ,KN (2(t))? If so, the value of the portfolio will always be
                            S (t)N (1(t)) , KB (t; T )N (2(t)) = V (t);
and we will have a hedge.
Mathematically, this question takes the following form. Let
                                        (t) = N (1(t)):
At time t, hold (t) shares of stock. If X (t) is the value of the portfolio at time t, then X (t) ,
(t)S (t) will be invested in the bond, so the number of bonds owned is X B(t)(,t;T() t) S (t) and the
portfolio value evolves according to

                        dX (t) = (t) dS (t) + X (Bt)(t;,T() t) S (t) dB(t; T ):                  (3.1)

The value of the option evolves according to
   dV (t) = N (1(t)) dS (t) + S (t) dN (1(t)) + dS (t) dN (1(t))
                , KN (2(t)) dB(t; T ) , K dB(t; T ) dN (2(t)) , KB(t; T ) dN (2(t)): (3.2)
If X (0) = V (0), will X (t) = V (t) for 0  t  T ?
Formulas (3.1) and (3.2) are difficult to compare, so we simplify them by a change of numéraire.
This change is justified by the following theorem.

Theorem 3.73 Changes of numéraire affect portfolio values in the way you would expect.

Proof: Suppose we have a model with k assets with prices S1 ; S2; : : : ; Sk . At each time t, hold
i (t) shares of asset i, i = 1; 2; : : : ; k , 1, and invest the remaining wealth in asset k. Begin with
a nonrandom initial wealth X (0), and let X (t) be the value of the portfolio at time t. The number
of shares of asset k held at time t is
                                                                     
                                        X (t) , Pki=1
                                                   ,1 i (t)Si (t)
                               k (t) =                            ;
                                                 Sk (t)
332

and X evolves according to the equation
                                        kX
                                         ,1                             kX
                                                                         ,1           !
                               dX =           i dSi + X ,                    i Si dS
                                                                                     S
                                                                                       k
                                        i=1                             i=1               k
                                        Xk
                                   =          i dSi:
                                        i=1
Note that
                                                          X
                                                          k
                                          Xk (t) =                i (t)Si (t);
                                                 i=1
and we only get to specify 1; : : : ; k,1, not k , in advance.
Let N be a numéraire, and define

                                  X (t) ; Sc(t) = Si (t) ; i = 1; 2; : : : ; k:
                         Xb (t) = N (t)     i     N (t)
Then
                                                                     
                dXb = N1 dX + X d N1 + dX d N1
                         Xk       Xk           X  k           !
                    = N1 i dSi +     i Si d N1 + i dSi d N1
                         i=1      i=1              i=1
                      Xk                         
                    =  1 dS + S d 1 + dS d 1
                               i   N      i         i         N           i       N
                        i=1
                        Xk
                    =         i dc
                                  Si:
                        i=1
Now
                                               
                       X , Pki=1
                              ,1 i Si
                k =         Sk
                                             
                       X=N , Pki=1,1 i Si =N
                   =          Sk =N
                     bX , Pki=1
                             ,1 i c
                                   Si :
                   =       c
                           Sk
Therefore,

                     X
                     k             kX
                                    ,1   ! c
                          Si + Xb , iSci dc
                dXb = i dc                Sk
                        i=1                             i=1             Sk
CHAPTER 33. Change of numéraire                                                                       333

This is the formula for the evolution of a portfolio which holds i shares of asset i, i = 1; 2; : : : ; k ,
1, and all assets and the portfolio are denominated in units of N .
We return to the European call hedging problem (comparison of (3.1) and (3.2)), but we now use
the zero-coupon bond as numéraire. We still hold (t) = N (1(t)) shares of stock at each time t.
In terms of the new numéraire, the asset values are
                                                  S (t) = F (t);
                                       Stock:
                                                 B(t; T )
                                                 B(t; T ) = 1:
                                       Bond:
                                                 B(t; T )
The portfolio value evolves according to

                     dXb (t) = (t) dF (t) + (Xb (t) , (t)) d(1)
                                                              1 = (t) dF (t):                       (3.1’)

In the new numéraire, the option value formula

                             V (t) = N (1(t))S (t) , KB (t; T )N (2(t))
becomes
                          Vb (t) = BV(t;(tT) ) = N (1(t))F (t) , KN (2(t));
and

          dVb = N (1(t)) dF (t) + F (t) dN (1(t)) + dN (1(t)) dF (t) , K dN (2(t)):
                                                                                                     (3.2’)

To show that the hedge works, we must show that

                     F (t) dN (1(t)) + dN (1(t)) dF (t) , K dN (2(t)) = 0:
This is a homework problem.
334
Chapter 34

Brace-Gatarek-Musiela model

34.1 Review of HJM under risk-neutral IP

                     f (t; T ) = Forward rate at time t for borrowing at time T:
                    df (t; T ) = (t; T )(t; T ) dt +  (t; T ) dW (t);
where                                                    ZT
                                        (t; T ) =             (t; u) du
                                                            t
The interest rate is r(t) = f (t; t). The bond prices
                                              "
                                              ( ZT          )  #
                            B (t; T ) = IE exp , r(u) du F (t)
                                           ( ZT t         )
                                      = exp , f (t; u) du
                                                        t
satisfy
               dB (t; T ) = r(t) B(t; T ) dt ,                  |  ({zt; T })         B(t; T ) dW (t):
                                                      volatility of T -maturity bond.
To implement HJM, you specify a function
                                            (t; T ); 0  t  T:
A simple choice we would like to use is
                                              (t; T ) = f (t; T )
where  > 0 is the constant “volatility of the forward rate”. This is not possible because it leads to
                                   ZT
                   (t; T ) =         f (t; u) du;
                                   t
                                               ZT                     !
                  df (t; T ) = 2 f (t; T )           f (t; u) du dt + f (t; T ) dW (t);
                                                  t

                                                        335
336

and Heath, Jarrow and Morton show that solutions to this equation explode before T .
The problem with the above equation is that the dt term grows like the square of the forward rate.
To see what problem this causes, consider the similar deterministic ordinary differential equation

                                           f 0 (t) = f 2(t);
where f (0) = c > 0. We have
                                  f 0(t) = 1;
                                  f 2(t)
                             , dtd f (1t) = 1;
                            1       1      Zt
                        , f (t) + f (0) = 1 du = t
                                            0
                                    1           1 = t , 1=c = ct , 1 ;
                                , f (t) = t , f (0)              c
                                              c
                                   f (t) = 1 , ct :
This solution explodes at t = 1=c.


34.2 Brace-Gatarek-Musiela model

New variables:

                                        Current time t
                                     Time to maturity  = T , t:

Forward rates:

                          r(t;  ) = f (t; t +  ); r(t; 0) = f (t; t) = r(t);               (2.1)
                       @ r(t;  ) = @ f (t; t +  )
                       @            @T                                                      (2.2)

Bond prices:

                                     D(t;  ) = B(t; t +  )                                 (2.3)
                                               Z t+              
                                         = exp ,      f (t; v ) dv
                                               Zt                  
                 (u = v , t; du = dv ) : = exp , f (t; t + u) du
                                               Z0             
                                         = exp , r(t; u) du
                                                           0
                                @ D(t;  ) = @ B(t; t +  ) = ,r(t;  )D(t;  ):
                                @           @T                                              (2.4)
CHAPTER 34. Brace-Gatarek-Musiela model                                                              337

We will now write  (t;  ) =  (t; T , t) rather than  (t; T ). In this notation, the HJM model is

                                df (t; T ) = (t;  ) (t;  ) dt +  (t;  ) dW (t);              (2.5)
                               dB (t; T ) = r(t)B(t; T ) dt ,  (t;  )B (t; T ) dW (t);           (2.6)

where
                                              Z
                                (t;  ) =          (t; u) du;                                    (2.7)
                                                0
                          @ (t;  ) = (t;  ):
                          @                                                                        (2.8)


We now derive the differentials of r(t;  ) and D(t;  ), analogous to (2.5) and (2.6) We have


        dr(t;  ) =                df                                  @ f (t; t +  ) dt
                                   | (t;{zt +  )}                  + @T
                      differential applies only to first argument
                 (2.5),(2.2)                                        @ r(t;  ) dt
                      =  (t;  ) (t;  ) dt +  (t;  ) dW (t) + @
                               h                              i
                    @ r(t;  ) + 1 ( (t;  ))2 dt + (t;  ) dW (t):
                  = @
                 (2.8)
                                 2                                                                  (2.9)


Also,


        dD(t;  ) =                dB                                  @ B(t; t +  ) dt
                                   | (t;{zt +  )}                  + @T
                      differential applies only to first argument

                     = r(t) B (t; t +  ) dt ,  (t;  )B (t; t +  ) dW (t) , r(t;  )D(t;  ) dt
                 (2.6),(2.4)


                  = [r(t; 0) , r(t;  )] D(t;  ) dt ,  (t;  )D(t;  ) dW (t):
                 (2.1)
                                                                                                    (2.10)



34.3 LIBOR

Fix  > 0 (say,  = 14 year). $ D(t;  ) invested at time t in a (t +  )-maturity bond grows to $ 1 at
time t +  . L(t; 0) is defined to be the corresponding rate of simple interest:

                                              D(t;  )(1 + L(t; 0)) = 1;
                                                               Z@          (                )
                                1 + L(t; 0) = D(1t;  ) = exp    r(t; u) du ;
                                                                0
                                                      nR          o
                                                exp 0@ r(t; u) du , 1
                                      L(t; 0) =                        :
338

34.4 Forward LIBOR

 > 0 is still fixed. At time t, agree to invest $ DD(t;(t;+)) at time t +  , with payback of $1 at time
t +  +  . Can do this at time t by shorting DD(t;(t;+)) bonds maturing at time t +  and going long
one bond maturing at time t +  +  . The value of this portfolio at time t is

                              , DD (t;  +  ) D(t;  ) + D(t;  +  ) = 0:
                                     (t;  )
The forward LIBOR L(t;  ) is defined to be the simple (forward) interest rate for this investment:
                      D(t;  + ) (1 + L(t;  )) = 1;
                        D(t;  )                                      R  r(t; u) dug
                                         D  ( t; 
                     1 + L(t;  ) = D(t;  +  ) =)        exp   f,
                                                                n R 0+             o
                                                          exp , 0 r(t; u) du
                                                              (Z  +                )
                                                      = exp             r(t; u) du ;
                                                            nR  +     o
                                                         exp  r(t; u) du , 1
                                            L(t;  ) =                                   :           (4.1)

Connection with forward rates:

                  (                   )                              (Z  +               )
          @ exp Z  + r(t; u) du               = r(t;  +  ) exp               r(t; u) du
          @                             =0                                                 =0
                                                = r(t;  );
so
                                                                        nR                    o
                                                                 exp  + r(t; u) du , 1
                                  f (t; t +  ) = r(t;  ) = lim                    
                                                       nR  +#0            o
                                                   exp        r(t; u) du , 1
                                      L(t;  ) =                             ;  > 0 fixed:
                                                                                                      (4.2)
r(t;  ) is the continuously compounded rate. L(t;  ) is the simple rate over a period of duration .
We cannot have a log-normal model for r(t;  ) because solutions explode as we saw in Section 34.1.
For fixed positive  , we can have a log-normal model for L(t;  ).


34.5 The dynamics of L(t;  )

We want to choose  (t;  ); t  0;   0, appearing in (2.5) so that
                             dL(t;  ) = (: : : ) dt + L(t;  ) (t;  ) dW (t)
CHAPTER 34. Brace-Gatarek-Musiela model                                                                           339

for some (t;  ); t  0;   0. This is the BGM model, and is a subclass of HJM models,
corresponding to particular choices of (t;  ).
Recall (2.9):

                                 @ hr(t; u) + 1 ( (t; u))2i dt + (t; u) dW (t):
                     dr(t;  ) = @u           2


Therefore,


    Z  +            ! Z  +
d            r(t; u) du =          dr(t; u) du                                                                          (5.1)
                             
                             Z  + @ h                           i                 Z  +
                                                1          2
                         =
                             h    @u r(t; u) + 2 ( (t; u)) du dt +                 
                                                                                              (t; u) du dW (t)
                                                                                                   i
                         = r(t;  +  ) , r(t;  ) + 21 ( (t;  +  ))2 , 12 ( (t;  ))2 dt
                                  + [ (t;  +  ) ,   (t;  )] dW (t)

and


                                   2 nR  +                o 3
                                     exp      r ( t; u ) du  , 15
                dL(t;  ) (4=:1) d 4       
                                                
                                      (Z  +            ) Z  +
                               1
                         =  exp            r(t; u) du d               r(t; u) du
                                                             
                                               (   Z  +             )        Z  +                  !2
                                           1
                                       + 2 exp           r(t; u) du       d             r(t; u) du
                                                                               
                         (4.1), (5.1) 1
                             =        [1 + L(t;  )]                                                                (5.2)

                                    [r(t;  + ) , r(t; ) + 21 ((t;  + ))2 , 12 ((t;  ))2] dt
                                              + [ (t;  +  ) ,  (t;  )] dW (t)
                                                                                      
                                              + 12 [  (t;  +  ) ,  (t;  )]2 dt
                                             
                         = 1 [1 + L(t;  )] [r(t;  +  ) , r(t;  )] dt
                                              +  (t;  +  )[ (t;  +  ) ,  (t;  )] dt
                                                                                        
                         =                                             
                                                 +[ (t;  +  ) ,  (t;  )] dW (t) :
340

But
                             2 nR  +               o 3
             @ L(t;  ) = @ 4 exp     r ( t; u ) du  , 15
             @           @             
                             (Z  +           )
                        = exp             r(t; u) du :[r(t;  +  ) , r(t; )]
                                    
                        = 1 [1 + L(t;  )][r(t;  +  ) , r(t;  )]:

Therefore,

                          @ L(t;  ) dt + 1 [1 + L(t;  )][ (t;  +  ) ,  (t;  )]:[ (t;  + ) dt + dW (t)]:
              dL(t;  ) = @              
Take   (t;  ) to be given by
                       (t;  )L(t;  ) = 1 [1 + L(t;  )][ (t;  +  ) ,  (t;  )]:           (5.3)

Then
                       @ L(t;  ) + (t;  )L(t;  )(t;  +  )] dt + (t;  )L(t;  ) dW (t):
         dL(t;  ) = [ @
                                                                                                    (5.4)

Note that (5.3) is equivalent to

                                (t;  + ) =  (t;  ) + L1 (+t;L
                                                                     ) (t;  ) :
                                                                       (t;  )                     (5.3’)

Plugging this into (5.4) yields
               "                                                                    #
              @ L(t;  ) + (t;  )L(t;  )(t;  ) + L2(t;  ) 2(t;  ) dt
  dL(t;  ) = @                                        1 + L(t;  )
                                                                   + (t;  )L(t;  ) dW (t): (5.4’)

34.6 Implementation of BGM

Obtain the initial forward LIBOR curve

                                              L(0;  );   0;
from market data. Choose a forward LIBOR volatility function (usually nonrandom)

                                            (t;  ); t  0;   0:
CHAPTER 34. Brace-Gatarek-Musiela model                                                                 341

Because LIBOR gives no rate information on time periods smaller than  , we must also choose a
partial bond volatility function

                                       (t;  ); t  0; 0   < 
for maturities less than  from the current time variable t.
With these functions, we can for each  2 [0;  ) solve (5.4’) to obtain

                                      L(t;  ); t  0; 0   < :
Plugging the solution into (5.3’), we obtain  (t;  ) for    < 2 . We then solve (5.4’) to obtain

                                     L(t;  ); t  0;    < 2;
and we continue recursively.

Remark 34.1 BGM is a special case of HJM with HJM’s   (t;  ) generated recursively by (5.3’).
In BGM, (t;  ) is usually taken to be nonrandom; the resulting  (t;  ) is random.

Remark 34.2 (5.4) (equivalently, (5.4’)) is a stochastic partial differential equation because of the
 @
@ L(t;  ) term. This is not as terrible as it first appears. Returning to the HJM variables t and T ,
set
                                         K (t; T ) = L(t; T , t):
Then
                                                         @ L(t; T , t) dt
                             dK (t; T ) = dL(t; T , t) , @
and (5.4) and (5.4’) become

       dK (t; T ) = (t; T , t)K (t; T ) [ (t; T , t +  ) dt + dW (t)]
                                                             K ( t; T ) ( t; T , t )            
                                           
                  = (t; T , t)K (t; T )  (t; T , t) dt +                              dt + dW (t) :
                                                                 1 + K (t; T )                        (6.1)

Remark 34.3 From (5.3) we have

                         (t;  )L(t;  ) = [1 + L(t;  )]  (t;  + ) ,  (t;  ) :
                                                                               

If we let  #0, then
                                               @  (t;  +  )
                              (t;  )L(t;  )! @                       =  (t;  );
                                                                  =0
and so
                                   (t; T , t)K (t; T )! (t; T , t):
We saw before (eq. 4.2) that as  #0,

                                     L(t;  )!r(t;  ) = f (t; t +  );
342

so
                                              K (t; T )!f (t; T ):
Therefore, the limit as  #0 of (6.1) is given by equation (2.5):

                          df (t; T ) = (t; T , t) [ (t; T , t) dt + dW (t)] :

Remark 34.4 Although the dt term in (6.1) has the term
                                                                  2 (t;T ,t)K 2 (t;T ) involving K 2 , solutions
                                                                      1+K (t;T )
to this equation do not explode because

                              2(t; T , t)K 2 (t; T )   2(t; T , t)K 2(t; T )
                                 1 + K (t; T )                K (t; T )
                                                       (t; T , t)K (t; T ):
                                                         2



34.7 Bond prices
                  nR t          o
Let   (t) = exp     0 r(u) du : From (2.6) we have
                              B(t; T ) 
                         d          (t)     = 1(t) [,r(t)B (t; T ) dt + dB (t; T )]
                                            = , B (t; T )  (t; T , t) dW (t):
                                                    (t)
The solution B (t;T )
                (t) to this stochastic differential equation is given by

            B (t; T ) = exp , Z t (u; T , u) dW (u) , 1 Z t( (u; T , u))2 du :
           (t)B (0; T )         0                        2 0

This is a martingale, and we can use it to switch to the forward measure

                                          1      Z 1
                             IPT (A) = B (0; T )          dIP
                                                  A (T )
                                       Z B(T; T )
                                     =                   dIP 8A 2 F (T ):
                                        A (T )B (0; T )
Girsanov’s Theorem implies that
                                               Zt
                         WT (t) = W (t) +            (u; T , u) du; 0  t  T;
                                                0
is a Brownian motion under IPT .
CHAPTER 34. Brace-Gatarek-Musiela model                                                                      343

34.8 Forward LIBOR under more forward measure

From (6.1) we have

       dK (t; T ) = (t; T , t)K (t; T ) [ (t; T , t +  ) dt + dW (t)]
                  = (t; T , t)K (t; T ) dWT + (t);
so
                                     Z t                                    Zt                 
         K (t; T ) = K (0; T ) exp          (u; T , u) dWT + (u) , 12            2(u; T , u) du
                                       0                               0
and
                                     (Z T                                    ZT                     )
        K (T; T ) = K (0; T ) exp               (u; T , u) dWT + (u) , 21         2(u; T , u) du
                                       0                                   0
                                    (Z T                                     ZT                    )        (8.1)

                  = K (t; T ) exp               (u; T , u) dWT + (u) , 12         2(u; T , u) du       :
                                       t                                      t
We assume that     is nonrandom. Then
                             ZT                                   ZT
                   X (t) =        (u; T , u) dWT + (u) , 12             2(u; T , u) du                     (8.2)
                              t                                     t
is normal with variance                           ZT
                                      2(t) =           2(u; T , u) du
                                                    t
and mean , 12 2(t).


34.9 Pricing an interest rate caplet

Consider a floating rate interest payment settled in arrears. At time T +  , the floating rate interest
payment due is L(T; 0) = K (T; T ); the LIBOR at time T . A caplet protects its owner by
requiring him to pay only the cap c if K (T; T ) > c. Thus, the value of the caplet at time T + 
is  (K (T; T ) , c)+ . We determine its value at times 0  t  T +  .
Case I: T  t  T +  .
                                                                                  
                          CT + (t) = IE (T(+t) )  (K (T; T ) , c)+ F (t)                                 (9.1)
                                                             (t)          
                                    =  (K (T; T ) , c) IE (T +  ) F (t)
                                                       +

                                    =  (K (T; T ) , c)+ B (t; T +  ):
344

Case II: 0  t  T .
Recall that
                Z
 IPT + (A) =        Z (T +  ) dIP; 8A 2 F (T +  );
                 A
where

        Z (t) = (Bt)(Bt;(0T; + ) :
                             T + )
We have
                                                           
  CT + (t) = IE (T (+t) ) (K (T; T ) , c)+ F (t)
                                               2                                             3
                               ( t) B (0 ; T +  ) 66 B(T + ; T + )                        77
             = B (t; T +  ) B (t; T +  ) IE 6 (T +  )B (0; T +  ) (K (T; T ) , c) F (t)77
                                                    6                                 +
                             |         {z        } 4|      {z         }                       5
                                        1                           Z (T +)
                                      Z t
                                        ( )
                                                                    
             = B (t; T +  )IET + (K (T; T ) , c)+ F (t)
From (8.1) and (8.2) we have

                                K (T; T ) = K (t; T ) expfX (t)g;
                                                          R
where X (t) is normal under IPT + with variance 2(t) = tT 2(u; T , u) du and mean , 21 2(t).
Furthermore, X (t) is independent of F (t).

                                                                                     
                CT + (t) = B(t; T +  )IET +       (K (t; T ) expfX (t)g , c)+ F (t) :

Set
                                  h                             i
                     g(y) = IET + (y expfX (t)g , c)+
                                                                      
                          = y N 1 log y + 12 (t) , c N 1 log y , 12 (t) :
                                   (t) c                (t) c
Then

                CT + (t) =  B(t; T +  ) g (K (t; T )); 0  t  T , :                    (9.2)

In the case of constant , we have                       p
                                              (t) =      T , t;
and (9.2) is called the Black caplet formula.
CHAPTER 34. Brace-Gatarek-Musiela model                                                                                        345

34.10 Pricing an interest rate cap

Let
                                        T0 = 0; T1 = ; T2 = 2; : : : ; Tn = n:
A cap is a series of payments

                             (K (Tk; Tk) , c)+                at time Tk+1 ; k = 0; 1; : : : ; n , 1:

The value at time t of the cap is the value of all remaining caplets, i.e.,
                                                                      X
                                                        C (t) =               CTk (t):
                                                                     k:tTk

34.11 Calibration of BGM

The interest rate caplet c on L(0; T ) at time T +  has time-zero value

                                          CT + (0) = B (0; T + ) g (K (0; T ));
where g (defined in the last section) depends on
                                                        ZT
                                                                2(u; T , u) du:
                                                           0
Let us suppose            is a deterministic function of its second argument, i.e.,

                                                               (t;  ) = ( ):
Then g depends on
                                           ZT                                 ZT
                                                       2(T , u) du =                   2(v ) dv:
                                             0                                 0
                                                                               R
If we know the caplet price CT + (0), we can “back out” the squared volatility 0T 2(v ) dv . If we
know caplet prices
                                           CT + (0); CT + (0); : : : ; CTn+ (0);
                                                 0               1


where T0 < T1 < : : : < Tn , we can “back out”
  ZT                       ZT                         ZT                      ZT
          0
              2(v ) dv;           1
                                      2(v ) dv =           1
                                                               2(v ) dv ,          0
                                                                                       2(v ) dv;
      0                      T0                        0                       0
                                                                                                           Z Tn
                                                                                                   ::: ;           2(v ) dv: (11.1)
                                                                                                            Tn,1
In this case, we may assume that                     is constant on each of the intervals

                                           (0; T0); (T0; T1); : : : ; (Tn,1 ; Tn);
346

and choose these constants to make the above integrals have the values implied by the caplet prices.
If we know caplet prices CT + (0) for
                                                                   R
                                       all T  0, we can “back out” 0T 2(v ) dv and then differen-
tiate to discover 2( ) and ( ) =
                                    p   2( ) for all   0.
To implement BGM, we need both           ( );   0, and
                                       (t;  ); t  0; 0   < :
Now  (t;  ) is the volatility at time t of a zero coupon bond maturing at time t +  (see (2.6)).
Since  is small (say 14 year), and 0   <  , it is reasonable to set

                                    (t;  ) = 0; t  0; 0   < :
We can now solve (or simulate) to get

                                         L(t;  ); t  0;   0;
or equivalently,
                                         K (t; T ); t  0; T  0;
using the recursive procedure outlined at the start of Section 34.6.


34.12 Long rates

The long rate is determined by long maturity bond prices. Let n be a large fixed positive integer, so
that n is 20 or 30 years. Then
                                                    (Z n               )
                                 1                          r(t; u) du
                             D(t; n) = exp           0
                                              Y
                                              n           (Z k                )
                                          =         exp              r(t; u) du
                                              k=1           (k,1)
                                              Yn
                                          =       [1 + L(t; (k , 1) )];
                                              k=1
where the last equality follows from (4.1). The long rate is

                        1 log        1     1         X
                                                     n
                        n               =
                                D(t; n ) n               log[1 + L(t; (k , 1) )]:
                                                     k=1

34.13 Pricing a swap

Let T0  0 be given, and set

                        T1 = T0 + ; T2 = T0 + 2; : : : ; Tn = T0 + n:
CHAPTER 34. Brace-Gatarek-Musiela model                                                            347

The swap is the series of payments
                             (L(Tk; 0) , c) at time Tk+1; k = 0; 1; : : : ; n , 1:
For 0  t  T0, the value of the swap is
                                         nX
                                          ,1                                                 
                                             IE (T(t) ) (L(Tk ; 0) , c) F (t) :
                                         k=0      k+1
Now
     1 + L(Tk ; 0) = B (T ;1T                   ;
                                 k       k+1)
so
                       1                1               
            L(T ; 0) =
                k          B(Tk ; Tk+1) , 1 :
We compute
                                                                      
                     IE (T(t) )  (L(Tk; 0) , c) F (t)
                           k+1(t)         1            
                      = IE (T ) B (T ; T ) , 1 , c F (t)
                             2 k+1              k k+1                  3
                             66          ( t )         (Tk )         77
                        = IE 6 (T )B (T ; T ) IE (T ) F (Tk ) F (t)77 , (1 + c)B (t; Tk+1)
                              6
                              4 k k k+1 |                   k+1
                                                              {z     }  5
                                                         B (Tk ;Tk )
                              (t)                                            +1


                        = IE (T ) F (t) , (1 + c)B (t; Tk+1)
                                    k+1
                        = B (t; Tk ) , (1 + c)B (t; Tk+1):
The value of the swap at time t is
nX
 ,1       (t)                       
      IE       (L(T ; 0) , c) F (t)
              (Tk+1 )        k
k=0
   nX
    ,1
=          [B (t; Tk ) , (1 + c)B (t; Tk+1)]
     k=0
= B (t; T0) , (1 + c)B (t; T1) + B (t; T1) , (1 + c)B (t; T2) + : : : + B (t; Tn,1 ) , (1 + c)B (t; Tn )
= B (t; T0) , cB (t; T1) , cB (t; T2) , : : : , cB (t; Tn ) , B (t; Tn ):
The forward swap rate wT (t) at time t for maturity T0 is the value of c which makes the time-t
                                     0
value of the swap equal to zero:

                                         wT (t) =  [B (Bt;(Tt; T) 0+) ,: : B: +(t;BT(nt;)T )] :
                                                                                          n
                                             0
                                                                   1
In contrast to the cap formula, which depends on the term structure model and requires estimation
of , the swap formula is generic.



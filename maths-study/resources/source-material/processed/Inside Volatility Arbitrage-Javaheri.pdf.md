---
normalized_id: shared-pdf-reference-inside-volatility-arbitrage-javaheri
exam_code: SHARED
material_scope: inside volatility arbitrage-javaheri.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Inside Volatility Arbitrage-Javaheri.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-inside-volatility-arbitrage-javaheri

Inside Volatility
      Arbitrage
Founded in 1807, John Wiley & Sons is the oldest independent publish-
ing company in the United States. With ofﬁces in North America, Europe,
Australia, and Asia, Wiley is globally committed to developing and market-
ing print and electronic products and services for our customers’ professional
and personal knowledge and understanding.
     The Wiley Finance series contains books written speciﬁcally for ﬁnance
and investment professionals as well as sophisticated individual investors
and their ﬁnancial advisors. Book topics range from portfolio management to
e-commerce, risk management, ﬁnancial engineering, valuation and ﬁnancial
instrument analysis, as well as much more.
     For a list of available titles, visit our Web site at www.WileyFinance.com.
Inside Volatility
      Arbitrage
   The Secrets of Skewness



   ALIREZA JAVAHERI




            John Wiley & Sons, Inc.
Copyright © 2005 by Alireza Javaheri. All rights reserved
Published by John Wiley & Sons, Inc., Hoboken, New Jersey
Published simultaneously in Canada
No part of this publication may be reproduced, stored in a retrieval system, or
transmitted in any form or by any means, electronic, mechanical, photocopying,
recording, scanning, or otherwise, except as permitted under Section 107
or 108 of the 1976 United States Copyright Act, without either the prior written
permission of the Publisher, or authorization through payment of the appropriate
per-copy fee to the Copyright Clearance Center, 222 Rosewood Drive,
Danvers, MA 01923, (978) 750-8400, fax (978) 750-4470, or on the web at
www.copyright.com. Requests to the Publisher for permission should be addressed
to the Permissions Department, John Wiley & Sons, Inc., 111 River Street,
Hoboken, NJ 07030, (201) 748-6011, fax (201) 748-6008, or online at
http://www.wiley.com/go/permissions.
Limit of Liability/Disclaimer of Warranty: While the publisher and the author have
used their best efforts in preparing this book, they make no representations or
warranties with respect to the accuracy or completeness of the contents of this book
and speciﬁcally disclaim any implied warranties of merchantability or ﬁtness for a
particular purpose. No warranty may be created or extended by sales
representatives or written sales materials. The advice and strategies contained
herein may not be suitable for your situation. You should consult with a
professional where appropriate. Neither the publisher nor the author shall be liable
for any loss of proﬁt or any other commercial damages, including but not limited to
special, incidental, consequential, or other damages.
For general information about our other products and services, please contact our
Customer Care Department within the United States at (800) 762-2974, outside the
United States at (317) 572-3993 or fax (317) 572-4002.
Wiley also publishes its books in a variety of electronic formats. Some content that
appears in print may not be available in electronic books. For more information
about Wiley products, visit our web site at www.wiley.com.

Library of Congress Cataloging-in-Publication Data
Javaheri, Alireza.
  Inside volatility arbitrage : the secrets of skewness / Alireza Javaheri.
        p. cm.
  Includes bibliographical references and index.
  ISBN 0-471-73387-3 (cloth)
1. Stocks–Proces–Mathematical models. 2. Stochastic processes. I.
Title.
  HG4636.J38 2005
  332.63’222’0151922–dc22                                               2005004696

Printed in the United States of America
10   9   8   7   6   5   4   3   2   1
                                                     Contents

  Illustrations                                               ix
  Acknowledgments                                            xv
  Introduction                                              xvii
     Summary                                                xvii
     Contributions and Further Research                    xxiii
     Data and Programs                                     xxiv

CHAPTER 1
  The Volatility Problem                                        1
     Introduction                                             1
     The Stock Market                                         2
       The Stock Price Process                                2
       Historic Volatility                                    3
     The Derivatives Market                                   4
       The Black-Scholes Approach                             5
       The Cox-Ross-Rubinstein Approach                       6
     Jump Diffusion and Level-Dependent Volatility            7
       Jump Diffusion                                         8
       Level-Dependent Volatility                            10
     Local Volatility                                        14
       The Dupire Approach                                   14
       The Derman-Kani Approach                              17
       Stability Issues                                      18
       Calibration Frequency                                 19
     Stochastic Volatility                                   20
       Stochastic Volatility Processes                       20
       GARCH and Diffusion Limits                            21
     The Pricing PDE Under Stochastic Volatility             24
       The Market Price of Volatility Risk                   25
       The Two-Factor PDE                                    26
     The Generalized Fourier Transform                       27
       The Transform Technique                               27
       Special Cases                                         28
     The Mixing Solution                                     30
       The Romano-Touzi Approach                             30


                                                                v
vi                                                      CONTENTS


       A One-Factor Monte Carlo Technique                    32
     The Long-Term Asymptotic Case                           34
       The Deterministic Case                                34
       The Stochastic Case                                   35
       A Series Expansion on Volatility-of-Volatility        37
     Pure-Jump Models                                        40
       Variance Gamma                                        40
       Variance Gamma with Stochastic Arrival                43
       Variance Gamma with Gamma Arrival Rate                45

CHAPTER 2
  The Inference Problem                                      46
     Introduction                                            46
     Using Option Prices                                     49
       Direction Set (Powell) Method                         49
       Numeric Tests                                         50
       The Distribution of the Errors                        50
     Using Stock Prices                                      54
       The Likelihood Function                               54
       Filtering                                             57
       The Simple and Extended Kalman Filters                59
       The Unscented Kalman Filter                           62
       Kushner’s Nonlinear Filter                            65
       Parameter Learning                                    67
       Parameter Estimation via MLE                          81
       Diagnostics                                           95
       Particle Filtering                                    98
       Comparing Heston with Other Models                   120
       The Performance of the Inference Tools               127
       The Bayesian Approach                                144
       Using the Characteristic Function                    157
       Introducing Jumps                                    158
       Pure Jump Models                                     168
     Recapitulation                                         184
       Model Identiﬁcation                                  185
       Convergence Issues and Solutions                     185

CHAPTER 3
  The Consistency Problem                                   187
     Introduction                                           187
     The Consistency Test                                   189
       The Setting                                          190
Contents                                                      vii

        The Cross-Sectional Results                          190
        Robustness Issues for the Cross-Sectional Method     190
        Time-Series Results                                  193
        Financial Interpretation                             194
      The Peso Theory                                        197
        Background                                           197
        Numeric Results                                      199
      Trading Strategies                                     199
        Skewness Trades                                      200
        Kurtosis Trades                                      200
        Directional Risks                                    200
        An Exact Replication                                 202
        The Mirror Trades                                    203
        An Example of the Skewness Trade                     203
        Multiple Trades                                      208
        High Volatility-of-Volatility and High Correlation   209
      Non-Gaussian Case                                      213
        VGSA                                                 215
      A Word of Caution                                      218
      Foreign Exchange, Fixed Income, and Other Markets      219
        Foreign Exchange                                     219
        Fixed Income                                         220
   References                                                224
   Index                                                     236
                                           Illustrations

 Figures
 1.1   The SPX Historic Rolling Volatility from 2000/01/03 to
       2001/12/31.                                                 4
 1.2   The SPX Volatility Smile on February 12, 2002 with
       Index = $1107.50, 1 Month and 7 Months to Maturity.         8
 1.3   The CEV Model for SPX on February 12, 2002 with
       Index = $1107.50, 1 Month to Maturity.                     11
 1.4   The BCG Model for SPX on February 12, 2002 with
       Index = $1107.50, 1 Month to Maturity.                     12
 1.5   The GARCH Monte Carlo Simulation with the Square-
       Root Model for SPX on February 12, 2002 with
       Index = $1107.50, 1 Month to Maturity.                     24
 1.6   The SPX implied surface as of 03/09/2004.                  31
 1.7   Mixing Monte Carlo Simulation with the Square-Root
       Model for SPX on February 12, 2002 with Index =
       $1107.50, 1 Month and 7 Months to Maturity.                33
 1.8   Comparing the Volatility-of-Volatility Series Expansion
       with the Monte Carlo Mixing Model.                         38
 1.9   Comparing the Volatility-of-Volatility Series Expansion
       with the Monte Carlo Mixing Model.                         39
1.10   Comparing the Volatility-of-Volatility Series Expansion
       with the Monte Carlo Mixing Model.                         39
1.11   The Gamma Cumulative Distribution Function P (a x) for
       Various Values of the Parameter a.                         42
1.12   The Modiﬁed Bessel Function of Second Kind for a Given
       Parameter.                                                 42
1.13   The Modiﬁed Bessel Function of Second Kind as a Function
       of the Parameter.                                          43
 2.1   The S&P500 Volatility Surface as of 05/21/2002 with
       Index = 1079.88.                                           51
 2.2   Mixing Monte Carlo Simulation with the Square-Root
       Model for SPX on 05/21/2002 with Index = $1079.88,
       Maturity 08/17/2002 Powell (direction set) optimization
       method was used for least-square calibration.              51


                                                                   ix
x                                                          ILLUSTRATIONS


     2.3   Mixing Monte Carlo Simulation with the Square-Root
           Model for SPX on 05/21/2002 with Index = $1079.88,
           Maturity 09/21/2002.                                        52
     2.4   Mixing Monte Carlo Simulation with the Square-Root
           Model for SPX on 05/21/2002 with Index = $1079.88,
           Maturity 12/21/2002.                                        52
     2.5   Mixing Monte Carlo Simulation with the Square-Root
           Model for SPX on 05/21/2002 with Index = $1079.88,
           Maturity 03/22/2003.                                        53
     2.6   A Simple Example for the Joint Filter.                      69
     2.7   The EKF Estimation (Example 1) for the Drift Parameter ω. 71
     2.8   The EKF Estimation (Example 1) for the Drift Parameter θ. 72
     2.9   The EKF Estimation (Example 1) for the Volatility-
           of-Volatility Parameter ξ.                                  72
    2.10   The EKF Estimation (Example 1) for the Correlation
           Parameter ρ.                                                73
    2.11   Joint EKF Estimation for the Parameter ω.                   78
    2.12   Joint EKF Estimation for the Parameter θ.                   79
    2.13   Joint EKF Estimation for the Parameter ξ.                   79
    2.14   Joint EKF Estimation for the Parameter ρ.                   80
    2.15   Joint EKF Estimation for the Parameter ω Applied to the
           Heston Model as Well as to a Modiﬁed Model Where the
           Noise Is Reduced by a Factor 252.                           81
    2.16   The SPX Historic Data (1996–2001) is Filtered via EKF
           and UKF.                                                    84
    2.17   The EKF and UKF Absolute Filtering Errors for the Same
           Time Series.                                                85
    2.18   Histogram for Filtered Data via EKF versus the Normal
           Distribution.                                               86
    2.19   Variograms for Filtered Data via EKF and UKF.               97
    2.20   Variograms for Filtered Data via EKF and UKF.               98
    2.21   Filtering Errors: Extended Kalman Filter and Extended Par-
           ticle Filter Are Applied to the One-Dimensional Heston
           Model.                                                     115
    2.22   Filtering Errors: All Filters Are Applied to the One-
           Dimensional Heston Model.                                  116
    2.23   Filters Are Applied to the One-Dimensional Heston Model. 117
    2.24   The EKF and GHF Are Applied to the One-Dimensional
           Heston Model.                                              118
    2.25   The EPF Without and with the Metropolis-Hastings Step
           Is Applied to the One-Dimensional Heston Model.            120
Illustrations                                                                       xi

     2.26       Comparison of EKF Filtering Errors for Heston, GARCH,
                and 3/2 Models.                                                    123
     2.27       Comparison of UKF Filtering Errors for Heston, GARCH,
                and 3/2 Models.                                                    123
     2.28       Comparison of EPF Filtering Errors for Heston, GARCH,
                and 3/2 Models.                                                    124
     2.29       Comparison of UPF Filtering Errors for Heston, GARCH,
                and 3/2 Models.                                                    124
     2.30       Comparison of Filtering Errors for the Heston Model.               125
     2.31       Comparison of Filtering Errors for the GARCH Model.                125
     2.32       Comparison of Filtering Errors for the 3/2 Model.                  126
     2.33       Simulated Stock Price Path via Heston Using  ∗ .                  128
     2.34       f (ω) = L(ω θ̂ ξ̂ ρ̂) Has a Good Slope Around ω̂ = 0.10.        129
     2.35       f (θ) = L(ω̂ θ ξ̂ ρ̂) Has a Good Slope Around θ̂ = 10.0.        130
     2.36       f (ξ) = L(ω̂ θ̂ ξ ρ̂) Is Flat Around ξ̂ = 0.03.                 130
     2.37       f (ρ) = L(ω̂ θ̂ ξ̂ρ) Is Flat and Irregular Around ρ̂ = −0.50.   131
     2.38       f (ξ) = L(ω̂ θ̂ ξ ρ̂) via EKF for N = 5000 Points.              132
     2.39       f (ξ) = L(ω̂ θ̂ ξ ρ̂) via EKF for N = 50 000 Points.           134
     2.40       f (ξ) = L(ω̂ θ̂ ξ ρ̂) via EKF for N = 100 000 Points.          134
     2.41       f (ξ) = L(ω̂ θ̂ ξ ρ̂) via EKF for N = 500 000 Points.          135
     2.42       Density for ω̂ Estimated from 500 Paths of Length 5000 via
                EKF.                                                               142
     2.43       Density for θ̂ Estimated from 500 Paths of Length 5000 via
                EKF.                                                               142
     2.44       Density for ξ̂ Estimated from 500 Paths of Length 5000 via
                EKF.                                                               143
     2.45       Density for ρ̂ Estimated from 500 Paths of Length 5000 via
                EKF.                                                               143
     2.46       Gibbs Sampler for µ in N (µ σ) .                                  147
     2.47       Gibbs Sampler for σ in N(µ σ).                                    148
     2.48       Metropolis-Hastings Algorithm for µ in N (µ σ).                   151
     2.49       Metropolis-Hastings Algorithm for σ in N (µ σ).                   152
     2.50       Plots of the Incomplete Beta Function.                             152
     2.51       Comparison of EPF Results for Heston and Heston+Jumps
                Models. The presence of jumps can be seen in the residuals.        166
     2.52       Comparison of EPF Results for Simulated and Estimated
                Jump-Diffusion Time Series.                                        167
     2.53       The Simulated Arrival Rates via  = (κ = 0 η = 0
                λ = 0 σ = 0.2 θ = 0.02 ν = 0.005) and  = (κ = 0.13
                η = 0 λ = 0.40 σ = 0.2 θ = 0.02 ν = 0.005) Are Quite
                Different; compare with Figure 2.54.                               177
     2.54       However, the Simulated Log Stock Prices are Close.                 177
xii                                                             ILLUSTRATIONS


      2.55   The Observation Errors for the VGSA Model with a
             Generic Particle Filter.                                       179
      2.56   The Observation Errors for the VGSA model and an
             Extended Particle ﬁlter.                                       180
      2.57   The VGSA Residuals Histogram.                                  180
      2.58   The VGSA Residuals Variogram.                                  181
      2.59   Simulation of VGG-based Log Stock Prices with Two
             Different Parameter Sets  = (µa = 10.0, νa = 0.01,
             ν = 0.05, σ = 0.2 θ = 0.002) and  = (9.17 0.19 0.012,
             0.21 0.0019).                                                 183
       3.1   Implied Volatilities of Close to ATM Puts and Calls as of
             01/02/2002.                                                    191
       3.2   The Observations Have Little Sensitivity to the Volatility
             Parameters.                                                    194
       3.3   The state Has a Great Deal of Sensitivity to the Volatility
             Parameters.                                                    195
       3.4   The Observations Have a Great Deal of Sensitivity to the
             Drift Parameters.                                              195
       3.5   The State Has a Great Deal of Sensitivity to the Drift Par-
             ameters.                                                       196
       3.6   Comparing SPX Cross-Sectional and Time-Series Volatility
             Smiles (with Historic ξ and ρ) as of January 2, 2002.          197
       3.7   A Generic Example of a Skewness Strategy to Take Advan-
             tage of the Undervaluation of the Skew by Options.             201
       3.8   A Generic Example of a Kurtosis Strategy to Take Advan-
             tage of the Overvaluation of the Kurtosis by Options.          202
       3.9   Historic Spot Level Movements During the Trade Period.         205
      3.10   Hedging PnL Generated During the Trade Period.                 205
      3.11   Cumulative Hedging PnL Generated During the Trade
             Period.                                                        206
      3.12   A Strong Option-Implied Skew: Comparing MMM (3M
             Co) Cross-Sectional and Time-Series Volatility Smiles as of
             March 28, 2003.                                                207
      3.13   A Weak Option-Implied Skew: Comparing CMI (Cummins
             Inc) Cross-Sectional and Time-Series Volatility Smiles as of
             March 28, 2003.                                                207
      3.14   GW (Grey Wolf Inc.) Historic Prices (03/31/2002–
             03/31/2003) Show a High Volatility-of-Volatility But a
             Weak Stock-Volatility Correlation.                             210
      3.15   The Historic GW (Grey Wolf Inc.) Skew Is Low and Not in
             Agreement with the Options Prices.                             210
Illustrations                                                                xiii

     3.16       MSFT (Microsoft) Historic Prices (03/31/2002–
                03/31/2003) Show a High Volatility-of-Volatility and
                a Strong Negative Stock-Volatility Correlation.              211
     3.17       The Historic MSFT (Microsoft) Skew Is High and in Agree-
                ment with the Options Prices.                                211
     3.18       NDX (Nasdaq) Historic Prices (03/31/2002–03/31/2003)
                Show a High Volatility-of-Volatility and a Strong Negative
                Stock-Volatility Correlation.                                212
     3.19       The Historic NDX (Nasdaq) Skew Is High and in Agree-
                ment with the Options Prices.                                213
     3.20       Arrival Rates for Simulated SPX Prices Using  = (κ =
                0.0000 η = 0.0000 λ = 0.000000 σ = 0.117200 θ =
                0.0056 ν = 0.002) and  = (κ = 79.499687 η = 3.557702
                λ = 0.000000 σ = 0.049656 θ = 0.006801 ν = 0.008660
                µ = 0.030699).                                               216
     3.21       Gamma Times for Simulated SPX Prices Using  = (κ =
                0.0000 η = 0.0000 λ = 0.000000 σ = 0.117200 θ =
                0.0056 ν = 0.002) and  = (κ = 79.499687 η =
                3.557702 λ = 0.000000 σ = 0.049656 θ = 0.006801
                ν = 0.008660 µ = 0.030699).                                 217
     3.22       Log Stock Prices for Simulated SPX Prices Using  = (κ =
                0.0000 η = 0.0000 λ = 0.000000 σ = 0.117200 θ =
                0.0056 ν = 0.002) and  = (κ = 79.499687 η =
                3.557702 λ = 0.000000 σ = 0.049656 θ = 0.006801
                ν = 0.008660 µ = 0.030699).                                 218
     3.23       A Time Series of the Euro Index from January 2000 to
                January 2005.                                                222

     Tables
       1.1      SPX Implied Surface as of 03/09/2004. T is the maturity
                and M = K/S the inverse of the moneyness.                    30
       1.2      Heston Prices Fitted to the 2004/03/09 Surface.              30
       2.1      The Estimation is Performed for SPX on t = 05/21/2002
                with Index = $1079.88 for Different Maturities T.             53
       2.2      The True Parameter Set  ∗ Used for Data Simulation.         127
       2.3      The Initial Parameter Set 0 Used for the Optimization
                Process.                                                     127
       2.4      The Optimal Parameter Set . ˆ                               128
       2.5      The Optimal EKF Parameters ξ̂ and ρ̂ Given a Sample
                Size N .                                                     132
       2.6      The True Parameter Set  ∗ Used for Data Generation.         133
xiv                                                         ILLUSTRATIONS


       2.7   The Initial Parameter Set 0 Used for the Optimization
             Process.                                                  133
       2.8   The Optimal EKF Parameter Set ˆ Given a Sample Size N . 133
       2.9   The Optimal EKF Parameter Set ˆ via the HRS Approxi-
             mation Given a Sample Size N .                            136
      2.10   The Optimal PF Parameter Set ˆ Given a Sample Size N . 137
      2.11   Real and Optimal Parameter Sets Obtained via NGARCH
             MLE.                                                      138
      2.12   Real and Optimal Parameter Sets Obtained via NGARCH
             MLE as well as EKF.                                       139
      2.13   The Optimal Parameter Set ˆ for 5 000 000 Data Points. 139
      2.14   Mean and (Standard Deviation) for the Estimation of
             Each Parameter via EKF Over P = 500 Paths of Lengths
             N = 5000 and N = 50 000.                                 141
      2.15   MPE and RMSE for the VGSA Model Under a Generic PF
             as well as the EPF.                                       179
       3.1   Average Optimal Heston Parameter Set (Under the Risk-
             Neutral Distribution) Obtained via LSE Applied to One-
             Year SPX Options in January 2002.                         191
       3.2   Average Optimal Heston Parameter Set (Under the Statis-
             tical Distribution) Obtained via Filtered MLE Applied to
             SPX Between January 1992 and January 2004.                193
       3.3   VGSA Statistical Parameters Estimated via PF.             218
       3.4   VGSA Risk-Neutral Arrival-Rate Parameters Estimated
             from Carr et al. [48].                                    219
       3.5   The Volatility and Correlation Parameters for the Cross-
             Sectional and Time-Series Approaches.                     220
                                      Acknowledgments


T Ihiswould
       book is based upon my Ph.D. dissertation at École des Mines de Paris.
            like to thank my advisor, Alain Galli, for his guidance and help.
Many thanks go to Margaret Armstrong and Delphine Lautier and the entire
CERNA team for their support.
    A special thank-you goes to Yves Rouchaleau for helping make all this
possible in the ﬁrst place.
    I would like to sincerely thank other committee members, Marco
Avellaneda, Lane Hughston, Piotr Karasinski, and Bernard Lapeyre, for their
comments and time.
    I am grateful to Farshid Asl, Peter Carr, Raphael Douady, Robert Engle,
Stephen Figlewski, Espen Haug, Ali Hirsa, Michael Johannes, Simon Julier,
Alan Lewis, Dilip Madan, Vlad Piterbarg, Youssef Randjiou, David Wong,
and the participants at ICBI 2003 and 2004 for all the interesting discussions
and idea exchanges.
    I am particularly indebted to Paul Wilmott for encouraging me to speak
with Wiley about converting my dissertation into this book.
    Finally, I would like to thank my wife, Firoozeh, and my daughters,
Neda and Ariana, for their patience and support.




                                                                           xv
                                                      Introduction

SUMMARY
This book focuses on developing methodologies for estimating stochastic
volatility (SV) parameters from the stock-price time series under a classical
framework. The text contains three chapters structured as follows.
     In Chapter 1, we shall introduce and discuss the concept of various
parametric SV models. This chapter represents a brief survey of the existing
literature on the subject of nondeterministic volatility.
     We start with the concept of log-normal distribution and historic volatil-
ity. We then introduce the Black-Scholes [38] framework. We also mention
alternative interpretations as suggested by Cox and Rubinstein [66]. We
state how these models are unable to explain the negative skewness and the
leptokurticity commonly observed in the stock markets. Also, the famous
implied-volatility smile would not exist under these assumptions.
     At this point we consider the notion of level-dependent volatility as
advanced by researchers, such as Cox and Ross [64] and [65], as well as
Bensoussan, Crouhy, and Galai [33]. Either an artiﬁcial expression of the
instantaneous variance will be used, as is the case for constant elasticity
variance (CEV) models, or an implicit expression will be deduced from a
ﬁrm model, similar to Merton’s [189], for instance.
     We also bring up the subject of Poisson jumps [190] in the distributions
providing a negative skewness and larger kurtosis. These jump-diffusion
models offer a link between the volatility smile and credit phenomena.
     We then discuss the idea of local volatility [36] and its link to the instant-
aneous unobservable volatility. Work by researchers such as Dupire [89] and
by Derman and Kani [74] will be cited. We also describe the limitations of this
idea owing to an ill-poised inversion phenomenon, as revealed by Avellaneda
[16] and others.
     Unlike nonparametric local volatility models, parametric stochastic
volatility (SV) models [140] deﬁne a speciﬁc stochastic differential equa-
tion for the unobservable instantaneous variance. We therefore introduce the
notion of two-factor stochastic volatility and its link to one-factor general-
ized autoregressive conditionally heteroskedastic (GARCH) processes [40].
The SV model class is the one we focus upon. Studies by scholars, such as



                                                                                 xvii
xviii                                                            INTRODUCTION


Engle [94], Nelson [194], and Heston [134], are discussed at this juncture.
We brieﬂy mention related works on stochastic implied volatility by Schon-
bucher [213], as well as uncertain volatility by Avellaneda [17].
     Having introduced SV, we then discuss the two-factor partial differential
equations (PDE) and the incompleteness of the markets when only cash and
the underlying asset are used for hedging.
     We then examine option pricing techniques, such as inversion of the
Fourier transform and mixing Monte Carlo, as well as a few asymptotic
pricing techniques, as explained, for instance, by Lewis [177].
     At this point we tackle the subject of pure-jump models, such as Madan’s
variance gamma [182] or its variants VG with stochastic arrivals (VGSA)
[48]. The latter adds to the traditional VG a way to introduce the volatil-
ity clustering (persistence) phenomenon. We mention the distribution of
the stock market as well as various option-pricing techniques under these
models. The inversion of the characteristic function is clearly the method of
choice for option pricing in this context.
     In Chapter 2, we tackle the notion of inference (or parameter estimation)
for parametric SV models. We ﬁrst brieﬂy analyze cross-sectional inference
and then focus upon time-series inference.
     We start with a concise description of cross-sectional estimation of SV
parameters in a risk-neutral framework. A least-square estimation (LSE)
algorithm is discussed. The direction-set optimization algorithm [204] is
introduced at this point. The fact that this optimization algorithm does not
use the gradient of the input function is important because we shall later
deal with functions that contain jumps and are not necessarily differentiable
everywhere.
     We then discuss the parameter inference from a time series of the under-
lying asset in the real world. We do this in a classical (non-Bayesian) [240]
framework, and in particular we will estimate the parameters via a maxi-
mization of likelihood estimation (MLE) [127] methodology. We explain the
idea of MLE, its link to the Kullback-Leibler [100] distance, as well as
the calculation of the likelihood function for a two-factor SV model.
     We see that unlike GARCH models, SV models do not admit an analytic
(integrated) likelihood function. This is why we need to introduce the concept
of ﬁltering [129].
     The idea behind ﬁltering is to obtain the best possible estimation of
a hidden state given all the available information up to that point. This
estimation is done in an iterative manner in two stages: The ﬁrst step is a time
update in which the prior distribution of the hidden state at a given point in
time is determined from all the past information via a Chapman-Kolmogorov
equation. The second step would then involve a measurement update where
this prior distribution is used together with the conditional likelihood of
Introduction                                                               xix

the newest observation in order to compute the posterior distribution of the
hidden state. The Bayes rule is used for this purpose. Once the posterior
distribution is determined, it can be exploited for the optimal estimation of
the hidden state.
     We start with the Gaussian case where the ﬁrst two moments characterize
the entire distribution. For the Gaussian-linear case, the optimal Kalman ﬁl-
ter (KF) [129] is introduced. Its nonlinear extension, the extended KF (EKF),
is described next. A more suitable version of KF for strongly nonlinear cases,
the unscented KF (UKF) [166], is also analyzed. In particular, we see how
this ﬁlter is related to Kushner’s nonlinear ﬁlter (NLF) [173] and [174].
     The unscented KF uses a ﬁrst-order Taylor approximation on the non-
linear transition and observation functions, in order to bring us back into
a simple KF framework. On the other hand, UKF uses the true nonlinear
functions without any approximation. It, however, supposes that the Gaus-
sianity of the distribution is preserved through these functions. The UKF
determines the ﬁrst two moments via integrals that are computed upon a few
appropriately chosen “sigma points.” The NLF does the same exact thing
via a Gauss-Hermite quadrature. However, NLF often introduces an extra
centering step, which will avoid poor performance owing to an insufﬁcient
intersection between the prior distribution and the conditional likelihood.
     As we observe, in addition to their use in the MLE approach, the ﬁlters
can be applied to a direct estimation of the parameters via a joint ﬁlter (JF)
[133]. The JF would simply involve the estimation of the parameters together
with the hidden state via a dimension augmentation. In other words, one
would treat the parameters as hidden states. After choosing initial conditions
and applying the ﬁlter to an observation data set, one would then disregard a
number of initial points and take the average upon the remaining estimations.
This initial rejected period is known as the “burn-in” period.
     We test various representations or state space models of the stochastic
volatility models, such as Heston’s [134]. The concept of observability [205]
is introduced in this context. We see that the parameter estimation is not
always accurate given a limited amount of daily data.
     Before a closer analysis of the performance of these estimation methods,
we introduce simulation-based particle ﬁlters (PF) [79] and [122], which can
be applied to non-Gaussian distributions. In a PF algorithm, the importance
sampling technique is applied to the distribution. Points are simulated via a
chosen proposal distribution, and the resulting weights proportional to the
conditional likelihood are computed. Because the variance of these weights
tends to increase over time and cause the algorithm to diverge, the simulated
points go through a variance reduction technique commonly referred to as
resampling [14]. During this stage, points with too small a weight are dis-
regarded and points with large weights are reiterated. This technique could
xx                                                               INTRODUCTION


cause a sample impoverishment, which can be corrected via a Metropolis-
Hastings accept/reject test. Work by researchers such as Doucet [79] and
Smith and Gordon [122] are cited and used in this context.
     Needless to say, the choice of the proposal distribution could be funda-
mental in the success of the PF algorithm. The most natural choice would be
to take a proposal distribution equal to the prior distribution of the hidden
state. Even if this makes the computations simpler, the danger would be a
nonalignment between the prior and the conditional likelihood as we pre-
viously mentioned. To avoid this, other proposal distributions taking into
account the observation should be considered. The extended PF (EPF) and
the unscented PF (UPF) [229] precisely do this by adding an extra Gaussian
ﬁltering step to the process. Other techniques, such as auxiliary PF (APF),
have been developed by Pitt and Shephard [203].
     Interestingly, we will see that PF brings only marginal improvement to
the traditional KF’s when applied to daily data. However, for a larger time
step where the nonlinearity is stronger, the PF does help more.
     At this point, we also compare the Heston model with other SV models,
such as the “3/2” model [177] using real market data, and we see that the
latter performs better than the former. This is in line with the ﬁndings of
Engle and Ishida [95]. We can therefore apply our inference tools to perform
model identiﬁcation.
     Various diagnostics [129] are used to judge the performance of the esti-
mation tools. Mean price errors (MPE) and root mean square errors (RMSE)
are calculated from the residual errors. The same residuals could be submit-
ted to a Box-Ljung test, which will allow us to see whether they still contain
auto correlation. Other tests, such as the chi-square normality test as well as
plots of histograms and variograms [110], are performed.
     Most importantly, for the inference process, we back-test the tools upon
artiﬁcially simulated data, and we observe that although they give the correct
answer asymptotically, the results remain inaccurate for a smaller amount of
data points. It is reassuring to know that these observations are in agreement
with work by other researchers, such as Bagchi [19].
     Here, we attempt to ﬁnd an explanation for this mediocre performance.
One possible interpretation comes from the fact that in the SV problem,
the parameters affect the noise of the observation and not its drift. This is
doubly true of volatility-of-volatility and stock-volatility correlation, which
affect the noise of the noise. We should, however, note that the product of
these two parameters enters in the equations at the same level as the drift
of the instantaneous variance, and it is precisely this product that appears in
the skewness of the distribution.
     Indeed, the instantaneous volatility is observable only at the second order
of a Taylor (or Ito) expansion of the logarithm of the asset price. This also
Introduction                                                               xxi

explains why one-factor GARCH models do not have this problem. In their
context, the instantaneous volatility is perfectly known as a function of pre-
vious data points. The problem therefore seems to be a low signal-to-noise
ratio (SNR). We could improve our estimation by considering additional
data points. Using a high frequency (several quotes a day) for the data does
help in this context. However, one needs to obtain clean and reliable data
ﬁrst.
     Furthermore, we can see why a large time step (e.g., yearly) makes the
inference process more robust by improving the observation quality. Still,
using a large time step brings up other issues, such as stronger nonlinearity
as well as fewer available data points, not to mention the inapplicability of
the Girsanov theorem.
     We analyze the sampling distributions of these parameters over many
simulations and see how unbiased and efﬁcient the estimators are. Not sur-
prisingly, the inefﬁciency remains signiﬁcant for a limited amount of data.
     One needs to question the performance of the actual optimization algo-
rithm as well. It is known that the greater the number of the parameters we
are dealing with, the ﬂatter the likelihood function and therefore the more
difﬁcult to ﬁnd a global optimum. Nevertheless, it is important to remember
that the SNR and therefore the performance of the inference tool depend on
the actual value of the parameters. Indeed, it is quite possible that the real
parameters are such that the inference results are accurate.
     We then apply our PF to a jump-diffusion model (such as the Bates
[28] model), and we see that the estimation of the jump parameters is more
robust than the estimation of the diffusion parameters. This reconﬁrms that
the estimation of parameters affecting the drift of the observation is more
reliable.
     We ﬁnally apply the PF to non-Gaussian models such as VGSA [48],
and we observe results similar to those for the diffusion-based models. Once
again the VG parameters directly affecting the observation are easier to
estimate, whereas the arrival rate parameters affecting the noise are more
difﬁcult to recover.
     Although as mentioned we use a classical approach, we brieﬂy dis-
cuss Bayesian methods [34], such as Markov Chain Monte Carlo (MCMC)
[163]—including the Gibbs Sampler [55] and the Metropolis-Hastings (MH)
[58] algorithm. Bayesian methods consider the parameters not as ﬁxed num-
bers, but as random variables having a prior distribution. One then updates
these distributions from the observations similarly to what is done in the
measurement update step of a ﬁlter. Sometimes the prior and posterior dis-
tributions of the parameters belong to the same family and are referred to as
conjugates. The parameters are ﬁnally estimated via an averaging procedure
similar to the one employed in the JF. Whether the Bayesian methods are
xxii                                                              INTRODUCTION


actually better or worse than the classical ones has been a subject of long
philosophical debate [240] and remains for the reader to decide.
     Other methodologies that differ from ours are the nonparametric (NP)
and the semi-nonparametric (SNP). These methods are based on kernel inter-
polation procedures and have the obvious advantage of being less restrictive.
However, parametric models, such as the ones used by us, offer the possi-
bility of comparing and interpreting parameters such as drift and volatility
of the instantaneous variance explicitly. Researchers, such as Gallant and
Tauchen [109] and Aït-Sahalia [6], use NP/SNP approaches.
     Finally, in Chapter 3, we apply the aforementioned parametric inference
methodologies to a few assets and will question the consistency of informa-
tion contained in the options markets on the one hand, and in the stock
market on the other hand.
     We see that there seems to be an excess negative skewness and kurtosis in
the former. This is in contradiction with the Girsanov theorem for a Heston
model and could mean either that the model is misspeciﬁed or that there is
a proﬁtable transaction to be made. Another explanation could come from
the peso theory [12] (or crash-o-phobia [155]), where an expectation of a
so-far absent crash exists in the options markets.
     Adding a jump component to the distributions helps to reconcile
the volatility-of-volatility and correlation parameters; however, it remains
insufﬁcient. This is in agreement with statements made by Bakshi, Cao, and
Chen [20].
     It is important to realize that, ideally, one should compare the infor-
mation embedded in the options and the evolution of the underlying asset
during the life of these options. Indeed, ordinary put or call options are for-
ward (and not backward) looking. However, given the limited amount of
available daily data through this period, we make the assumption that the
dynamics of the underlying asset do not change before and during the exist-
ence of the options. We therefore use time series that start long before the
commencement of these contracts.
     This assumption allows us to consider a skewness trade [6], in which
we would exploit such discrepancies by buying out-of-the-money (OTM)
call options and selling OTM put options. We see that the results are not
necessarily conclusive. Indeed, even if the trade often generates proﬁts, occa-
sional sudden jumps cause large losses. This transaction is therefore similar
to “selling insurance.”
     We also apply the same idea to the VGSA model in which despite the
non-Gaussian features, the volatility of the arrival rate is supposed to be the
same under the real and risk-neutral worlds.
     Let us be clear on the fact that this chapter does not constitute a thorough
empirical study of stock versus options markets. It rather presents a set of
Introduction                                                               xxiii

examples of application for our previously constructed inference tools. There
clearly could be many other applications, such as model identiﬁcation as
discussed in the second chapter.
     Yet another application of the separate estimations of the statistical and
risk-neutral distributions is the determination of optimal positions in deriva-
tives securities, as discussed by Carr and Madan [52]. Indeed, the expected
utility function to be maximized needs the real-world distribution, whereas
the initial wealth constraint exploits the risk-neutral distribution. This can
be seen via a self-ﬁnancing portfolio argument similar to the one used by
Black and Scholes [38].
     Finally, we should remember that in all of the foregoing, we are assuming
that the asset and options dynamics follow a known and ﬁxed model, such as
Heston or VGSA. This is clearly a simpliﬁcation of reality. The true markets
follow an unknown and, perhaps more importantly, constantly changing
model. The best we can do is to use the information hitherto available and
hope that the future behavior of the assets is not too different from that of
the past. Needless to say, as time passes by and new information becomes
available, we need to update our models and parameter values. This could
be done within either a Bayesian or classical framework.
     Also, we apply the same procedures to other asset classes, such as foreign
exchange and ﬁxed income. It is noteworthy that although most of the text
is centered on equities, almost no change whatsoever is necessary in order
to apply the methodologies to these asset classes, which shows again how
ﬂexible the tools are.
     In the Bibliography, many but not all relevant articles and books are
cited. Only some of them are directly referred to in the text.


CONTRIBUTIONS AND FURTHER RESEARCH
The contribution of the book is in presenting a general and systematic way
to calibrate any parametric SV model (diffusion based or not) to a time
series under a classical (non-Bayesian) framework. Although the concept
of ﬁltering has been used for estimating volatility processes before [130],
to my knowledge, this has always been for speciﬁc cases and was never
generalized. The use of particle ﬁltering allows us to do this in a ﬂexible and
simple manner. We also study the convergence properties of our tools and
show their limitations.
     Whether the results of these calibrations are consistent with the infor-
mation contained in the options markets is a fundamental question. The
applications of this test are numerous, among which the skewness trade is
only one example.
xxiv                                                            INTRODUCTION


    What else can be done?—a comparative study between our approach
and Bayesian approaches on the one hand, and nonparametric approaches
on the other hand. Work by researchers such as Johannes, Polson, and Aït-
Sahalia would be extremely valuable in this context.


DATA AND PROGRAMS
This book centers on time-series methodologies and exploits either artiﬁcially
generated inputs or real market data. When real market data is utilized, the
source is generally Bloomberg. However, most of the data could be obtained
from other public sources available on the Internet.
     All numeric computations are performed via routines implemented in
the C++ programming language. Some algorithms, such as the direction-set
optimization algorithm are taken from Numerical Recipes in C [204]. No
statistical packages, such as S-Plus or R, have been used.
     The actual C++ code for some of the crucial routines (such as EKF or
UPF) is provided in this text.
                                                            CHAPTER         1
                                 The Volatility Problem

    Suppose we use the standard deviation of possible future returns
    on a stock as a measure of its volatility. Is it reasonable to take
    that volatility as a constant over time? I think not.
                                                          — Fischer Black




INTRODUCTION
It is widely accepted today that an assumption of a constant volatility fails
to explain the existence of the volatility smile as well as the leptokurtic
character (fat tails) of the stock distribution. The above Fischer Black quote,
made shortly after the famous constant-volatility Black-Scholes model was
developed, proves the point.
      In this chapter, we will start by describing the concept of Brownian
motion for the stock price return as well as the concept of historic volatility.
We will then discuss the derivatives market and the ideas of hedging and
risk neutrality. We will brieﬂy describe the Black-Scholes partial derivatives
equation (PDE) in this section. Next, we will talk about jumps and level
dependent volatility models. We will ﬁrst mention the jump diffusion process
and introduce the concept of leverage. We will then refer to two popular level
dependent approaches: the constant elasticity variance (CEV) model and the
Bensoussan-Crouhy-Galai (BCG) model. At this point, we will mention local
volatility models developed in the recent past by Dupire and Derman-Kani,
and we will discuss their stability.
      Following this, we will tackle the subject of stochastic volatility, where
we will mention a few popular models, such as the square-root model and
the general autoregressive conditional heteroskedasticity (GARCH) model.
We will then talk about the pricing PDE under stochastic volatility and the




                                                                              1
2                                                     INSIDE VOLATILITY ARBITRAGE


risk-neutral version of it. For this we will need to introduce the concept of
market price of risk.
     The generalized Fourier transform is the subject of the following section.
This technique was used by Alan Lewis extensively for solving stochastic
volatility problems. Next, we will discuss the mixing solution, both in cor-
related and uncorrelated cases. We will mention its link to the fundamental
transform and its usefulness for Monte Carlo–based methods. We will then
describe the long-term asymptotic case, where we get closed-form approxi-
mations for many popular methods, such as the square-root model. Lastly,
we will talk about pure-jump models, such as variance gamma and variance
gamma with stochastic arrival.


THE STOCK MARKET

The Stock Price Process
The relationship between the stock market and the mathematical concept
of Brownian motion goes back to Bachelier [18]. A Brownian motion cor-
responds to a process, the increments of which are independent stationary
normal random variables. Given that a Brownian motion can take negative
values, it cannot be used for the stock price. Instead, Samuelson [211] sug-
gested using this process to represent the return of the stock price, which
will make the stock price a geometric (or exponential) Brownian motion.
     In other words, the stock price S follows a log-normal process1
                              dSt = µSt dt + σSt dBt                           (1.1)
where dBt is a Brownian motion process, µ the instantaneous expected total
return of the stock (possibly adjusted by a dividend yield), and σ the instant-
aneous standard deviation of stock price returns, called the volatility in ﬁnan-
cial markets.
     Using Ito’s lemma,2 we also have
                                           
                                        1 2
                       d ln(St ) = µ − σ dt + σdBt                          (1.2)
                                        2
    The stock return µ could easily become time dependent without changing
any of our arguments. For simplicity, we will often refer to it as µ even if we
mean µt . This remark holds for other quantities, such as rt , the interest-rate,
or qt , the dividend yield.
    Equation (1.1) represents a continuous process. We can either take this
as an approximation of the real discrete tick-by-tick stock movements or

1 For an introduction to stochastic processes, see Karatzas [167] or Oksendal [197].
2 See, for example, Hull [146].
The Volatility Problem                                                        3

consider it the real unobservable dynamics of the stock price, in which case
the discrete prices constitute a sample from this continuous ideal process.
Either way, the use of a continuous equation makes the pricing of ﬁnancial
instruments more analytically tractable.
     The discrete equivalent of (1.2) is
                                            
                                         1 2        √
                 ln St+t = ln St + µ − σ t + σ tBt                  (1.3)
                                         2
where (Bt ) is a sequence of independent normal random variables with zero
mean and variance of 1.

Historic Volatility
This suggests a ﬁrst simple way to estimate the volatility, σ, namely the his-
toric volatility. Considering S1  ... SN as a sequence of known historic daily
stock close prices, calling Rn = ln(Sn+1 /Sn ) the stock price return between
                       −1
two days and R̄ = N1 N   n=0 Rn the mean return, the historic volatility would
be the annualized standard deviation of the returns, namely
                                
                                
                                 252 N      −1
                        σhist =                 (Rn − R̄)2                (1.4)
                                     N − 1 n=0

    Because we work with annualized quantities, and we are using daily
stock closing prices, we needed the factor 252, supposing that there are
approximately 252 business days in a year.3
    Note that N, the number of observations, can be more or less than one
year; therefore when talking about a historic volatility, it is important to
know what time horizon we are considering. We can indeed have three-
month historic volatility or three-year historic volatility. Needless to say,
taking too few prices would give an inaccurate estimation. Similarly, the
begin and end date of the observations matter. It is preferable to take the
end date as close as possible to today so that we include recent observations.
    An alternative was suggested by Parkinson [200] in which instead of
daily closing prices we use the high and the low prices of the stock on that
                    high
day, and Rn = ln(Sn /Snlow). The volatility would then be
                               
                                               N −1
                                252       1 
                  σparkinson =                     (Rn − R̄)2
                                  N − 1 4 ln(2) n=0

     This second moment estimation derived by Parkinson is based upon the
fact that the range Rn of the asset follows a Feller distribution.

3 Clearly the observation frequency does not have to be daily.
4                                                                            INSIDE VOLATILITY ARBITRAGE

                                            Historic Volatility
                      0.24
                                                              Historic Volatility
                      0.23
Historic Volatility




                      0.22

                      0.21

                      0.2

                      0.19

                      0.18
                             0   50   100 150   200 250 300 350 400                 450 500
                                                      Days

FIGURE 1.1 The SPX Historic Rolling Volatility from 01/03/2000 to 12/31/2001.
As we can see, the volatility is clearly nonconstant.


    Plotting, for instance, the one-year rolling4 historic volatility (1.4) of the
S&P 500 Stock Index, it is easily seen that this quantity is not constant over
time (Figure 1.1). This observation was made as early as the 1960s by many
ﬁnancial mathematicians and followers of the chaos theory. We therefore
need time-varying volatility models.
    One natural extension of the constant volatility approach is to make σt
a deterministic function of time. This is equivalent to giving the volatility a
term structure, by analogy with interest rates.




THE DERIVATIVES MARKET
Until now, we have mentioned the stock price movements independently
from the derivatives market, but we now are going to include the ﬁnancial
derivatives (especially options) prices as well. These instruments became very
popular and as liquid as the stocks themselves after Black and Scholes intro-
duced their risk-neutral pricing formula in [38].



4 By rolling we mean that the one-year interval slides within the total observation

period.
The Volatility Problem                                                         5

The Black-Scholes Approach
The Black-Scholes approach makes a number of reasonable assumptions
about markets being frictionless and uses the log-normal model for the
stock price movements. It also supposes a constant or deterministically time-
dependent stock drift and volatility. Under these conditions, they prove that
it is possible to hedge a position in a contingent claim dynamically by taking
an offsetting position in the underlying stock and hence become immune to
the stock movements. This risk neutrality is possible because, as they show,
we can replicate the ﬁnancial derivative (for instance, an option) by taking
positions in cash and the underlying security. This condition of the possibility
of replication is called market completeness.
      In this situation, everything happens as if we were replacing the stock
drift µt with the risk-free rate of interest rt in (1.1) or rt − qt if there is a
dividend-yield qt . The contingent claim f (S t) having a payoff G(ST ) will
satisfy the famous Black-Scholes equation
                                ∂f            ∂f  1      ∂ 2f
                         rf =      + (r − q)S    + σ2 S 2 2                (1.5)
                                ∂t            ∂S  2      ∂S
                                      ∂f
Indeed the hedged portfolio  = f − ∂S   S is immune to the stock random
movements and, according to Ito’s lemma, veriﬁes
                                                 
                               ∂f    1 2 2 ∂ 2f
                      d =        + σ S             dt
                               ∂t    2       ∂S 2

which must also be equal to rdt or else there would be possibility of Risk-
less arbitrage.5
     Note that this equation is closely related to the Feynman-Kac equation
satisﬁed by F (S t) = Et (h(ST )) for any function h under the risk-neutral
measure; F (S t) must be a Martingale6 under this measure and therefore
must be driftless, which implies dF = σS ∂F ∂S
                                               dBt and

                                ∂F            ∂F  1      ∂ 2F
                         0=        + (r − q)S    + σ2 S 2 2
                                ∂t            ∂S  2      ∂S
This would indeed be a different way to reach the same Black-Scholes equa-
tion, by using f (S t) = exp(−rt)F (S t) , as was done, for instance, in Shreve
[218].
    Let us insist again on the fact that the real drift of the stock price does
not appear in the preceding equation, which makes the volatility σt the only

5 For a detailed discussion, see Hull [146].
6 For an explanation, see Shreve [218] or Karatzas [167].
6                                                      INSIDE VOLATILITY ARBITRAGE


unobservable quantity. As we said, the volatility could be a deterministic
function of time without changing the foregoing argument, in which case all
                                          t
we need to do is to replace σ2 with 1t 0 σ2s ds, and keep everything else the
same.
     For calls and puts, where the payoffs G(ST ) are respectively MAX(0 ST −
K) and MAX(0 K − ST ) and where K is the strike price and T the maturity
of the option, the Black-Scholes partial derivatives equation is solvable and
gives the celebrated Black-Scholes formulae

                 callt = St e−q(T −t)(d1 ) − Ke−r(T −t)(d2 )               (1.6)

and
               putt = −St e−q(T −t)(−d1 ) + Ke−r(T −t)(−d2 )               (1.7)
where
                                           x
                                  1               u2
                          (x) = √              e− 2 du
                                  2π      −∞

is the cumulative standard normal function and

                 √                             ln SKt + r − q − 12 σ2 (T − t)
      d1 = d2 + σ T − t      and      d2 =                √
                                                         σ T −t

Note that using the well-known symmetry property for normal distributions
(−x) = 1 − (x) in the above formulae, we could reach the put-call parity
relationship
                    callt − putt = St e−q(T −t) − Ke−r(T −t)         (1.8)
which we can also rearrange as

                    St e−q(T −t) − callt = Ke−r(T −t) − putt

The left-hand side of this last equation is called a covered call and is
equivalent to a short position in a put combined with a bond.


The Cox-Ross-Rubinstein Approach
Later, Cox, Ross, and Rubinstein [66] developed a simpliﬁed approach using
the binomial law to reach the same pricing formulae. The approach com-
monly referred to as the binomial tree uses a tree of recombining spot prices,
in which at a given time step n we have n + 1 possible S[n][j ] spot prices,
with 0 ≤ j ≤ n. Calling p the upward transition probability and 1 − p
the downward transition probability, S the stock price today, and Su = uS
The Volatility Problem                                                                 7

and Sd = dS upper and lower possible future spot prices, we can write the
expectation equation7

                         E[S] = puS + (1 − p)dS = ert S

which immediately gives us
                                           a−d
                                      p=
                                           u−d
with a = exp(rt).
    We can also write the variance equation

              V ar[S] = pu2 S 2 + (1 − p)d 2 S 2 − e2rt S 2 ≈ σ2 S 2 t

which after choosing
                 √      a centering condition,
                                        √      such as ud = 1, will provide us
with u = exp σ t and d = exp −σ t . Using the values for u, d, and p
we can build the tree, and using the ﬁnal payoff we can calculate the option
price by backward induction.8 We can also build this tree by applying an
explicit ﬁnite difference scheme to the PDE (1.5), as was done in Wilmott
[238]. An important advantage of the tree method is that it can be applied
to American options (with early exercise) as well.
     It is possible to deduce the implied volatility of call and put options by
solving a reverse Black-Scholes equation, that is, ﬁnd the volatility that would
equate the Black-Scholes price to the market price of the option. This is a
good way to see how derivatives markets perceive the underlying volatility.
It is easy to see that if we change the maturity and strike prices of options
(and keep everything else ﬁxed) the implied volatility will not be constant. It
will have a linear skew and a convex form as the strike price changes. This
famous “smile” cannot be explained by simple time dependence, hence the
necessity of introducing new models (Figure 1.2).9


JUMP DIFFUSION AND LEVEL-DEPENDENT VOLATILITY
In addition to the volatility smile observable from the implied volatilities of
the options, there is evidence that the assumption of a pure normal distribu-
tion (also called pure diffusion) for the stock return is not accurate. Indeed
“fat tails” have been observed away from the mean of the stock return. This

7 The expectation equation is written under the risk-neutral probability.
8 For an in-depth discussion on binomial trees, see Cox [67].
9 It is interesting to note that this smile phenomenon was practically nonexistent

prior to the 1987 stock-market crash. Many researchers therefore believe that the
markets have learnt to factor-in a crash possibility, which creates the volatility smile.
8                                                                INSIDE VOLATILITY ARBITRAGE

                                       Volatility Smile

                     0.32
                                 Implied Volatility 1 month to Maturity
                      0.3
                                Implied Volatility 7 months to Maturity
                     0.28
Implied Volatility




                     0.26

                     0.24

                     0.22

                      0.2

                     0.18

                     0.16
                        950   1000          1050            1100          1150
                                         Strike Price

FIGURE 1.2 The SPX Volatility Smile on February 12, 2002 with Index = $1107.50,
1 Month and 7 Months to Maturity. The negative skewness is clearly visible. Note
how the smile becomes ﬂatter as time to maturity increases.


phenomenon is called leptokurticity and could be explained in many differ-
ent ways.



Jump Diffusion
Some try to explain the smile and the leptokurticity by changing the under-
lying stock distribution from a diffusion process to a jump-diffusion process.
A jump diffusion is not a level-dependent volatility process; however, we
are mentioning it in this section to demonstrate the importance of the lever-
age effect. Merton [190] was ﬁrst to actually introduce jumps in the stock
distribution. Kou [172] recently used the same idea to explain both the exist-
ence of fat tails and the volatility smile.
     The stock price will follow a modiﬁed stochastic process under this
assumption. If we add to the Brownian motion, dBt ; a Poisson (jump) pro-
cess10 dq with an intensity11 λ, and then calling k = E(Y − 1) with Y − 1

10 See, for instance, Karatzas [167].
11 The intensity could be interpreted as the mean number of jumps per time unit.
The Volatility Problem                                                        9

the random variable percentage change in the stock price, we will have
                          dSt = (µ − λk)St dt + σSt dBt + St dq            (1.9)
or equivalently,
                                                   
                                             σ2
                         St = S0 exp    µ−      − λk t + σBt Yn
                                             2
                          
where Y0 = 1 and Yn = nj=1 Yj, with Yj ’s independently identically distri-
buted random variables and n a Poisson random variable with a parameter λt.
     It is worth noting that for the special case where the jump corresponds
to total ruin or default, we have k = −1, which will give us
                          dSt = (µ + λ)St dt + σSt dBt + St dq            (1.10)
and                                         
                                          σ2
                   St = S0 exp µ + λ −         t + σBt Yn
                                          2
Given that in this case E(Y ) = E(Y 2 ) = e−λt, it is fairly easy to see that in
                                  n          n
the risk-neutral world
                                       E(St ) = S0 ert
exactly as in the pure diffusion case, but
                                             2
                   V ar(St ) = S02 e2rt e(σ +λ)t − 1 ≈ S02 σ2 + λ t       (1.11)
unlike the pure diffusion case, where V ar(St ) ≈ S02 σ2 t.

Proof: Indeed
                                 2 
                                  σ
   E(St ) = S0 exp((r + λ)t) exp − t E[exp(σBt )]E(Yn )
                                  2
                                 2      2 
                                  σ       σ
          = S0 exp((r + λ)t) exp − t exp     t exp(−λt) = S0 exp(rt)
                                  2        2
and
          E(St2 ) = S02 exp(2(r + λ)t) exp −σ2 t E[exp(2σBt )]E(Yn2 )
                                                            
                                                       (2σ)2
                  = S02 exp(2(r + λ)t) exp −σ2 t exp           exp(−λt)
                                                         2
                  = S02 exp((2r + λ)t) exp σ2 t
and as usual
                               V ar(St ) = E St2 − E2 (St )
(QED)
10                                                     INSIDE VOLATILITY ARBITRAGE


Link to Credit Spread Note that for a zero-coupon risky bond Z with no recov-
ery, a credit spread C and a face value X paid at time t we have
                 Z = e−(r+C)t X = e−λt (e−rt X) + (1 − e−λt )(0)
consequently λ = C and using (1.11) we can write
                                   σ̃2 (C) = σ2 + C
where σ is the ﬁxed (pure diffusion) volatility and σ̃ is the modiﬁed jump dif-
fusion volatility. The preceding equation relates the volatility and leverage,
a concept we will see later in level-dependent models as well.
    Also, we could see that everything happens as if we were using the Black-
Scholes pricing equation but with a modiﬁed “interest rate,” which is r + C.
                                        ∂f
Indeed the hedged portfolio  = f − ∂S     S now satisﬁes
                                                   
                                  ∂f   1 2 2 ∂ 2f
                        d =         + σ S            dt
                                  ∂t   2       ∂S 2
under the no-default case, which occurs with a probability of e−λdt ≈ 1 − λdt
and
                                 d = −
under the default case, which occurs with a probability of 1 − e−λdt ≈ λdt.
   We therefore have
                                                   
                              ∂f    1 2 2 ∂ 2f
                   E(d) =       + σ S         − λ dt
                              ∂t    2     ∂S 2
and using a diversiﬁcation argument we can always say that E(d) = rdt
which provides us with
                                 ∂f            ∂f  1      ∂ 2f
                 (r + λ)f =         + (r + λ)S    + σ2 S 2 2               (1.12)
                                 ∂t            ∂S  2      ∂S
which again is the Black-Scholes PDE with a “risky rate.”
     A generalization of the jump diffusion process would be the use of the
Levy process. A Levy process is a stochastic process with independent and
stationary increments. Both the Brownian motion and the Poisson process
are included in this category. For a description, see Matacz [186].


Level-Dependent Volatility
Many assume that the smile and the fat tails are due to the level dependence
of the volatility. The idea would be to make σt level dependent or a function
of the spot itself; we would therefore have
                             dSt = µt St dt + σ(S t)St dBt                (1.13)
The Volatility Problem                                                       11

Note that to be exact, a level-dependent volatility is a function of the spot
price alone. When the volatility is a function of the spot price and time, it is
referred to as local volatility, which we shall discuss further.

The Constant Elasticity Variance Approach One of the very ﬁrst attempts to use
this approach was the constant elasticity variance (CEV) method realized
by Cox [64] and [65] (Figure 1.3). In this method we would suppose an
equation of the type
                                                γ
                                    σ(S t) = CSt                       (1.14)
where C and γ are parameters to be calibrated either from the stock price
returns themselves or from the option prices and their implied volatilities.
The CEV method was recently analyzed by Jones [165] in a paper in which
he uses two γ exponents.
     This level-depending volatility represents an important feature that is
observed in options markets as well as in the underlying prices: the negative
correlation between the stock price and the volatility, also called the leverage
effect.

The Bensoussan-Crouhy-Galai Approach Bensoussan, Crouhy, and Galai (BCG)
[33] try to ﬁnd the level dependence of the volatility in a manner that differs
from that of Cox and Ross (Figure 1.4). Indeed in the CEV model, Cox and


                             CEV Model
             160

             140                              Market
                                              Model
             120

             100
Call Price




             80

             60

             40

             20

              0
               950   1000      1050         1100          1150
                            Strike Price
FIGURE 1.3 The CEV Model for SPX on February 12, 2002 with Index = $1107.50,
1 Month to Maturity. The smile is ﬁtted well, but the model assumes a perfect
(negative) correlation between the stock and the volatility.
12                                                                INSIDE VOLATILITY ARBITRAGE


Ross ﬁrst suppose that σ(S t) has a certain exponential form and only then
try to calibrate the model parameters to the market. Alternatively, BCG try
to deduce the functional form of σ(S t) by using a ﬁrm structure model.
     The idea of ﬁrm structure is not new and goes back to Merton [189],
when he considers that the ﬁrm assets follow a log-normal process

                                       dV = µV V dt + σV V dBt                        (1.15)

where µV and σV are the asset’s return and volatility. One important point
is that σV is considered constant. Merton then argues that the equity S of
the ﬁrm could be considered a call option on the assets of the ﬁrm with a
strike price K equal to the face value of the ﬁrm liabilities and an expiration
T equal to the average liability maturity.
     Using Ito’s lemma, it is fairly easy to see that

                        dS = µSdt + σ(S t)SdBt                                       (1.16)
                                                            
                               ∂S        ∂S     1      ∂ 2S              ∂S
                           =      + µV V     + σ2V V 2         dt + σV V    dBt
                               ∂t        ∂V     2      ∂V  2             ∂V

which immediately provides us with
                                                         V ∂S
                                          σ(S t) = σV                                (1.17)
                                                         S ∂V
which is an implicit functional form for σ(S t).


                                        BCG Model
             160

             140                                         Market
                                                         Model
             120

             100
Call Price




             80

             60

             40

             20

              0
                  950          1000        1050           1100          1150
                                        Strike Price
FIGURE 1.4 The BCG Model for SPX on February 12, 2002 with Index = $1107.50,
1 Month to Maturity. The smile is ﬁtted well.
The Volatility Problem                                                               13

    Next, BCG eliminate the asset term in the preceding functional form and
end up with a nonlinear PDE

                         ∂σ 1 2 2 ∂ 2 σ            ∂σ
                            + σ S       + r + σ2 S    =0                          (1.18)
                         ∂t  2    ∂S  2            ∂S
This PDE gives the dependence of σ on S and t.

Proof: A quick sketch of the proof is as follows: With S being a contingent
claim on V , we have the risk-neutral Black-Scholes PDE

                          ∂S      ∂S  1        ∂ 2S
                             + rV    + σ2V V 2      = rS
                          ∂t      ∂V  2        ∂V 2
           ∂S                                            2             2     3
and using ∂V  = 1/ ∂V
                   ∂S
                      as well as ∂S
                                 ∂t
                                        ∂S ∂V
                                    = − ∂V ∂t
                                                  ∂ S
                                              and ∂V       ∂ V    ∂V
                                                     2 = − ∂S 2 / ∂S             we have
the reciprocal Black-Scholes equation

                          ∂V      ∂V  1      ∂ 2V
                             + rS    + σ2 S 2 2 = rV
                          ∂t      ∂S  2      ∂S
                                       ∂V     ∂            ∂V     ∂
Now posing (S
            t) = ln V(S t), we have ∂t = V ∂t as well as ∂S = V ∂S
      2           ∂2
and ∂∂SV2 = V     ∂S 2
                       + ( ∂
                           ∂S
                              )2   , and we will have the new PDE
                                                                    2 
                     ∂      ∂  1                  ∂ 2         ∂
                  r=    + rS    + σ2 S 2                 +
                     ∂t      ∂S  2                  ∂S 2         ∂S

and the equation                                   
                                               ∂
                                    σ = σV / S
                                               ∂S

This last identity implies that ∂ = σV as well as ∂ 2  = −σV (σ+S ∂∂Sσ ) , and
                                ∂S   Sσ            ∂S 2       S 2 σ2
therefore the PDE becomes
                                                         
                     ∂             1 2                 ∂σ
                r=       + rσV /σ +   σ − σV σ + S
                     ∂t             2 V                 ∂S
                                                  ∂2
taking the derivative with respect to S and using ∂S∂t = − SσσV2 ∂∂tσ we get the
ﬁnal PDE
                    ∂σ 1 2 2 ∂ 2 σ               ∂σ
                       + σ S         + r + σ2 S      =0
                    ∂t    2     ∂S 2             ∂S
as previously stated. (QED)
     We therefore have an implicit functional form for σ(S t), and, just as
for the CEV case, we need to calibrate the parameters to the market data.
14                                                           INSIDE VOLATILITY ARBITRAGE

LOCAL VOLATILITY
In the early 1990s, Dupire [89], as well as Derman and Kani [74], developed
a concept called local volatility, in which the volatility smile was retrieved
from the option prices.



The Dupire Approach
The Breeden & Litzenberger Identity This approach uses the options prices to get
the implied distribution for the underlying stock. To do this we can write
                                                 +∞
  V (S0  K T ) = call(S0  K T ) = e−rT            (S − K)+ p(S0  S T )dS            (1.19)
                                             0

where S0 is the stock price at time t = 0 and K the strike price of the call, and
p(S0  S T ) is the unknown transition density for the stock price. As usual,
x + = MAX(x 0)
     Using Equation (1.19) and differentiating with respect to K twice, we
get the Breeden and Litzenberger [44] implied distribution

                                                      ∂ 2V
                             p(S0  K T ) = erT                                          (1.20)
                                                      ∂K 2

Proof: The proof is straightforward if we write
                             +∞                                    +∞
      erT V (S0  K T ) =        Sp(S0  S T )dS − K                  p(S0  S T )dS
                             K                                 K

and take the ﬁrst derivative
                                                                +∞
            ∂V
      erT      = −Kp(S0  K T ) + Kp(S0  K T ) −                     p(S0  S T )dS
            ∂K                                                 K

and the second derivative in the same manner. (QED)

The Dupire Identity Now, according to the Fokker-Planck (or forward
Kolmogorov) equation12 for this density, we have

                       ∂p   1 ∂ 2 (σ2 (S t)S 2 p)    ∂(Sp)
                          =                        −r
                       ∂T   2          ∂S 2            ∂S

12 See, for example, Wilmott [237] for an explanation on Fokker-Planck equation.
The Volatility Problem                                                    15

and therefore after a little rearrangement have

                             ∂V  1       ∂ 2V      ∂V
                                = σ2 K 2      − rK
                             ∂T  2       ∂K 2      ∂K

which provides us with the local volatility formula
                                              ∂V        ∂V
                                                   + rK ∂K
                               σ2 (K T ) = ∂T                        (1.21)
                                               1 2 ∂2V
                                               2
                                                 K ∂K 2

Proof: For a quick proof of the above let us use the zero interest rates case
(the general case could be done similarly). We would then have

                                                    ∂ 2V
                                  p(S0  K T ) =
                                                    ∂K 2

as well as Fokker-Planck

                               ∂p   1 ∂ 2 (σ2 (S t)S 2 p)
                                  =
                               ∂T   2          ∂S 2

Now
                             +∞
                  ∂V                      ∂p
                     =            (ST − K)+   dST
                  ∂T       0              ∂T
                             +∞
                                          1 ∂ 2 σ2 (S T )S 2 p
                         =      (ST − K)+                       dST
                           0              2         ∂S 2

and integrating by parts twice and using the fact that

                              ∂ 2 (ST − K)+
                                            = δ(ST − K)
                                    ∂K 2

with δ(.), the Dirac function, we will have

             ∂V  1                             1              ∂ 2V
                = σ2 (K T )K 2 p(S0  K T ) = K 2 σ2 (K T ) 2
             ∂T  2                             2              ∂K

as stated. (QED)
     It is also possible to use the implied volatility, σBS , from the Black-
Scholes formula (1.6) and express the foregoing local volatility in terms of
σBS instead of V. For a detailed discussion, we could refer to Wilmott [237].
16                                                         INSIDE VOLATILITY ARBITRAGE


Local Volatility vs. Instantaneous Volatility Clearly, the local volatility is related
to the instantaneous variance vt , as Gatheral [113] shows; the relationship
could be written as
                              σ2 (K T ) = E[vT |ST = K]                        (1.22)
that is, local variance is the risk-neutral expectation of the instantaneous
variance conditional on the ﬁnal stock price being equal to the strike price.13

Proof: Let us show the above identity for the case of zero interest rates.14
As mentioned, we have
                                                   ∂V
                                                   ∂T
                                 σ2 (K T ) =
                                                1 2 ∂2V
                                                2
                                                  K ∂K 2

On the other hand, using the call payoff V (S0  K t = T ) = E[(ST − K)+ ]
we have
                             ∂V
                                 = E[H (ST − K)]
                            ∂K
with H (.), the heaviside function and
                                 ∂ 2V
                                      = E[δ(ST − K)]
                                 ∂K 2
with δ(.), the Dirac function.
    Therefore the Ito lemma at t = T would provide
                                         1
             d(ST − K)+ = H (ST − K)dST + vT ST2 δ(ST − K)dT
                                         2
Using the fact that the forward price (here with zero interest rates, the stock
price) is a Martingale under the risk-neutral measure
                                              1                  
                dV = dE[(ST − K)+ ] =           E vT ST2 δ(ST − K) dT
                                              2
Now we have

              E[vT ST2 δ(ST − K)] = E[vT |ST = K]K 2 E[δ(ST − K)]
                                                     ∂ 2V
                                  = E[vT |ST = K]K 2
                                                     ∂K 2

13 Note that this is independent from the process for v , meaning that any stochastic
                                                           t
volatility model satisﬁes this property, which is an attractive feature of local volatility
models.
14 For the case of nonzero rates, we need to work with the forward price instead of

the stock price.
The Volatility Problem                                                          17

Putting all this together
                           ∂V  1 ∂ 2V
                              = K2    E[vT |ST = K]
                           ∂T  2 ∂K 2
and by the preceding expression of σ2 (K T ), we will have
                             σ2 (K T ) = E[vT |ST = K]
as claimed. (QED)




The Derman-Kani Approach
The Derman-Kani technique is very similar to the above approach, except
that it uses the binomial (or trinomial) tree framework instead of the continu-
ous one. Using the binomial tree notations, their upward transition prob-
ability pi from the spot si at time tn to the upper node Si+1 at the following
time-step tn+1 , is obtained from the usual
                                             Fi − S i
                                     pi =                                    (1.23)
                                            Si+1 − Si
where Fi is the stock forward price known from the market and Si the lower
spot at the step tn+1 .
    In addition, we have for a call expiring at time step tn+1
                            n
                                                         
     C(K tn+1 ) = e−rt           λj pj + λj +1 1 − pj +1 MAX(Sj +1 − K 0)
                            j =1

where λj ’s are the known Arrow-Debreu prices corresponding to the dis-
counted probability of getting to the point sj at time tn from S0 , the initial
stock price. These probabilities could easily be derived iteratively.
    This allows us after some calculation to obtain Si+1 as a function of si
and Si , namely
                         Si [ert C(si  K tn+1 ) − ] − λi si (Fi − Si )
                Si+1 =
                            [ert C(si  K tn+1 ) − ] − λi (Fi − Si )
                                      
where the term  represents the sum nj= i+1 λj (Fj − si ). This means that
after choosing the usual centering condition for the binomial tree
                                       si2 = Si Si+1
we have all the elements to build the tree and deduce the implied distribution
from the Arrow-Debreu prices.
18                                                          INSIDE VOLATILITY ARBITRAGE


Stability Issues
The local volatility models are very elegant and theoretically sound; how-
ever, they present in practice many stability issues. They are ill-posed inver-
sion problems and are extremely sensitive to the input data.15 This might
introduce arbitrage opportunities and in some cases negative probabilities
or variances. Derman and Kani suggest overwriting techniques to avoid such
problems.
    Andersen [13] tries to improve this issue by using an implicit ﬁnite dif-
ference method; however, he recognizes that the negative variance problem
could still happen.
    One way to make the results smoother is to use a constrained optimiza-
tion. In other words, when trying to ﬁt theoretical results Ctheo to the market
prices Cmrkt, instead of minimizing
                              N
                                                             2
                                      Ctheo Kj − Cmrkt Kj
                               j =1


we could minimize
                                    N
                             ∂σ                                  2
                         λ      +      Ctheo Kj − Cmrkt Kj
                             ∂t   j =1


where λ is a constraint parameter, which could also be interpreted as a
Lagrange multiplier. However, this is an artiﬁcial way to smoothen the results
and the real issue remains that, once again, we have an inversion problem that
is inherently unstable. Furthermore, local volatility models imply that future
implied volatility smiles will be ﬂat relative to today’s, which is another lim-
itation.16 As we will see in the following section, stochastic volatility models
offer more time-homogeneous volatility smiles.
     An alternative approach suggested in [16] would be to choose a prior
risk-neutral distribution for the asset (based on a subjective view) and then
minimize the relative entropy distance between the desired surface and this
prior distribution. This approach uses the Kullback-Leibler distance (which
we will discuss in the context of maximum likelihood estimation [MLE])
and performs the minimization via dynamic programming [35] on a tree.


15 See Tavella [226] or Avellaneda [16].
16 See Gatheral [114].
The Volatility Problem                                                      19

Calibration Frequency
One of the most attractive features of local-vol models is their ability to
match plain-vanilla puts and calls exactly. This will avoid arbitrage situ-
ations, or worse, market manipulations by traders to create “phantom”
proﬁts. As explained in Hull [147], these arbitrage-free models were devel-
oped by researchers with a single calibration (SC) methodology assumption.
However, in practice, traders use them with a continual recalibration (CR)
strategy. Indeed if they used the SC version of the model, signiﬁcant errors
would be introduced from one week to the following as shown by Dumas
et al. [88]. However, once this CR version is used, there is no guarantee
that the no-arbitrage property of the original SC model is preserved. Indeed
the Dupire equation determines the marginal stock distribution at different
points in time, but not the joint distribution of these stock prices. There-
fore a path-dependent option could very well be mispriced, and the more
path-dependent this option, the greater the mispricing.
     Hull [147] takes the example of a bet option, a compound option, and a
barrier option. The bet option depends on the distribution of the stock at one
point in time and therefore is correctly priced with a continually recalibrated
local vol model. The compound option has some path dependency, and hence
a certain amount of mispricing compared with a stochastic volatility (SV)
model. Finally, the barrier option has a strong degree of path dependency
and will introduce large errors. Note that this is due to the discrete nature
of the data. Indeed, the maturities we have are limited. If we had all possible
maturities in a continuous way, the joint distribution would be determined
completely. Also, when interpolating in time, it is customary to interpolate
upon the true variance tσ2t rather than the volatility σt given the equation
                    T2 σ2 (T2 ) = T1 σ2 (T1 ) + (T2 − T1 )σ2 (T1  T2 )
Interpolating upon the true variance will provide smoother results as shown
by Jackel [152].

Proof: Indeed, calling for 0 ≤ T1 ≤ T2 , the spot return variances
                                  V ar(0 T2 ) = T2 σ2 (T2 )
                                  V ar(0 T1 ) = T1 σ2 (T1 )
for a Brownian motion, we have independent increments and therefore a
forward variance V ar(T1  T2 ) such that
                         V ar(0 T1 ) + V ar(T1  T2 ) = V ar(0 T2 )
which demonstrates the point. (QED)
20                                                         INSIDE VOLATILITY ARBITRAGE

STOCHASTIC VOLATILITY
Unlike nonparametric local volatility models, parametric stochastic volatility
(SV) models deﬁne a speciﬁc stochastic differential equation for the unobserv-
able instantaneous variance. As we shall see, the previously deﬁned CEV
model could be considered a special case of these models.



Stochastic Volatility Processes
The idea would be to use a different stochastic process for σ altogether. Mak-
ing the volatility a deterministic function of the spot is a special “degenerate”
two-factor, a natural generalization of which would precisely be to have two
stochastic processes with an imperfect correlation.17
     Several different stochastic processes have been suggested for the volatil-
ity. A popular one is the Ornstein-Uhlenbeck (OU) process:

                              dσt = −ασt dt + βdZt                             (1.24)

where α and β are two parameters, remembering the stock equation

                             dSt = µt St dt + σt St dBt

there is a (usually negative) correlation ρ between dZt and dBt , which can
in turn be time or level dependent. Heston [134] and Stein [223] were
among those who suggested the use of this process. Using Ito’s lemma, we
can see that the stock-return variance vt = σ2t satisﬁes a square-root or Cox-
Ingersoll-Ross (CIR) process
                                                √
                        dvt = (ω − θvt )dt + ξ vt dZt                   (1.25)

with ω = β2 , θ = 2α, and ξ = 2β.
    Note that the OU process has a closed-form solution
                                                 t
                         σt = σ0 e−αt + β            e−α(t−s)dZs
                                             0

17 Note that here the instantaneous volatility is stochastic. Recent work by research-

ers such as Schonbucher supposes a stochastic implied-volatility process, which
is a completely different approach. See, for instance, [213]. On the other hand,
Avellaneda et al. [17] use the concept of uncertain volatility for pricing and hedging
derivative securities. They make the volatility switch between two extreme values
based on the convexity of the derivative contract and obtain a nonlinear Black-
Scholes-Barenblatt equation, which they solve on a grid.
The Volatility Problem                                                        21

                                               β 2
which means that σt follows in law  σ0 e−αt  2α 1−e−2αt , with  again the
normal distribution. This was discussed in Fouque [104] and Shreve [218].
    Heston and Nandi [137] show that this process corresponds to a special
case of the general auto regressive conditional heteroskedasticity (GARCH)
model, which we will discuss next. Another popular process is the GARCH
(1,1) process, where we would have

                           dvt = (ω − θvt )dt + ξvt dZt                   (1.26)


GARCH and Diffusion Limits
The most elementary GARCH process, called GARCH(1,1), was developed
originally in the ﬁeld of econometrics by Engle [94] and Bollerslev [40] in a
discrete framework. The stock discrete equation (1.3) could be rewritten by
taking t = 1 and vn = σ2n as
                                           
                                       1         √
                 ln Sn+1 = ln Sn + µ − vn+1 + vn+1Bn+1                (1.27)
                                       2

calling the mean adjusted return
                                       
                             Sn        1    √
                  un = ln         − µ − vn = vn B n                       (1.28)
                            Sn−1       2

the variance process in GARCH(1,1) is supposed to be

                   vn+1 = ω0 + βvn + αu2n = ω0 + βvn + αvn Bn2            (1.29)

where α and β are weight parameters and ω0 is a parameter related to the
long-term variance.18
    Nelson [194] shows that as the time interval length decreases and
becomes inﬁnitesimal, Equation (1.29) becomes precisely the previously cited
Equation (1.26). To be more accurate, there is a weak convergence of the dis-
crete GARCH process to the continuous diffusion limit.19 For a GARCH(1,1)
continuous diffusion, the correlation between dZt and dBt is zero.

18 It is worth mentioning that as explained in [100], a GARCH(1,1) model could be

rewritten as an autoregressive moving average model of ﬁrst order, ARMA(1,1), and
therefore an auto regressive model of inﬁnite order, AR(+∞). GARCH is therefore
a parsimonious model that can ﬁt the data with only a few parameters. Fitting the
same data with an ARCH or AR model would require a much larger number of
parameters. This feature makes the GARCH model very attractive.
19 For an explanation on weak convergence, see, for example, Varadhan [230].
22                                                   INSIDE VOLATILITY ARBITRAGE


      It might appear surprising that even if the GARCH(1,1) process has
only one source of randomness, namely Bn , the continuous version has two
independent Brownian motions. This is understandable if we consider Bn a
standard normal random variable and An = Bn2 −1 another random variable.
It is fairly easy to see that An and Bn are uncorrelated even if An is a function
of Bn . As we go toward the continuous version, we can use Donsker’s the-
orem,20 by letting the time interval t → 0, to prove that we end up with two
uncorrelated and therefore independent Brownian motions. This is a limi-
tation of the GARCH(1,1) model–hence the introduction of the nonlinear
asymmetric GARCH (NGARCH) model.
      Duan [83] attempts to explain the volatility smile by using the NGARCH
process expressed by
                                                    √ 2
                         vn+1 = ω0 + βvn + α un − c vn                     (1.30)
where c is a parameter to be determined.
     The NGARCH process was ﬁrst introduced by Engle [97]. The continu-
ous counterpart of NGARCH is the same equation (1.26), except unlike the
equation resulting from GARCH(1,1) there is a nonzero correlation between
the stock process and the volatility process. This correlation is created pre-
cisely because of the parameter c that was introduced, and is once again
called the leverage effect. The parameter c is sometimes referred to as the
leverage parameter.
     We can ﬁnd the following relationships between the discrete process and
the continuous diffusion limit parameters by letting the time interval become
inﬁnitesimal
                                ω0
                           ω= 2
                                dt
                                1 − α 1 + c2 − β
                            θ=
                                       dt
                                    κ − 1 + 4c2
                            ξ=α
                                        dt
and the correlation between dBt and dZt
                                       −2c
                             ρ= √
                                     κ − 1 + 4c2
where κ represents the Pearson kurtosis21 of the mean adjusted returns (un ).
As we can see, the sign of the correlation ρ is determined by the parameter c.

20 For a discussion on Donsker’s theorem, similar to the central limit theorem, see,

for instance, Whitt [235].
21 The kurtosis corresponds to the fourth moment. The Pearson kurtosis for a normal

distribution is equal to 3.
The Volatility Problem                                                       23

Proof: A quick proof of the convergence to diffusion limit could be outlined
as follows. Let us assume that c = 0 for simplicity; we therefore are dealing
with the GARCH(1,1) case. As we saw

                             vn+1 = ω0 + βvn + αvn Bn2

therefore

                vn+1 − vn = ω0 + βvn − vn + αvn − αvn + αvn Bn2

or
                 vn+1 − vn = ω0 − (1 − α − β)vn + αvn (Bn2 − 1)
Now, allowing
          √      the time-step t to become variable and posing Zn =
(Bn2 − 1)/ κ − 1
                                                 √
                 vn+t − vn = ωt 2 − θtvn + ξvn tZn

and annualizing vn by posing vt = vn /t, we shall have
                                                  √
                  vt+t − vt = ωt − θtvt + ξvt tZn

and as t → 0, we get

                            dvt = (ω − θvt )dt + ξvt dZt

as claimed. (QED)
     Note that the discrete GARCH version of the square-root process (1.25 )
is
                                                √
                      vn+1 = ω0 + βvn + α(Bn − c vn)2                 (1.31)
as Heston and Nandi show22 in [137] (Figure 1.5).
    Also, note that having a diffusion process dvt = b(vt )dt + a(vt )dZt we
can apply an Euler approximation23 to discretize
                                              √ and obtain a Monte Carlo
process, such as vn+1 − vn = b(vn )t + a(vn ) tZn. It is important to note
that if we use a GARCH process and go to the continuous diffusion limit, and
then apply an Euler approximation, we will not necessarily ﬁnd the original
GARCH process again. Indeed, there are many different ways to discretize
the continuous diffusion limit and the GARCH process corresponds to one
special way. In particular, if we use (1.31) and allow t → 0 to get to the
continuous diffusion limit, we shall obtain (1.25). As we will see later in

22 For a detailed discussion on the convergence of different GARCH models toward

their diffusion limits, also see Duan [85].
23 See, for instance, Jones [165].
24                                                  INSIDE VOLATILITY ARBITRAGE

                     Square-Root Model via GARCH
             160
                                              Market
             140
                                              Model
             120

             100
Call Price




             80

             60

             40

             20

              0
               950   1000       1050         1100         1150
                              Strike Price
FIGURE 1.5 The GARCH Monte Carlo Simulation with the Square-Root Model for
SPX on February 12, 2002 with Index = $1107.50, 1 Month to Maturity. The Powell
optimization method was used for least-square calibration.

the section on mixing solutions, we can then apply a discretization to this
process and obtain a Monte Carlo simulation
                                             √ √
                 vn+1 = vn + (ω − θvn )t + ξ vn tZn
which is again different from (1.31) but obviously has to be consistent in
terms of pricing. However, we should know which method we are working
with from the very beginning to perform our calibration on the correspond-
ing speciﬁc process.
     Corradi [61] explains this in the following manner: The discrete GARCH
model could converge either toward a two-factor continuous limit if one
chooses the Nelson parameterization, or could very well converge to a one-
factor diffusion limit if one chooses another parameterization. Furthermore,
an appropriate Euler discretization of the one-factor continuous model will
provide a GARCH discrete process, while as previously mentioned the dis-
cretization of the two-factor diffusion model provides a two-factor discrete
process. This distinction is fundamental and could explain why GARCH and
SV behave differently in terms of parameter estimation.


THE PRICING PDE UNDER STOCHASTIC VOLATILITY
A very important issue to underline here is that, because of the unhedgeable
second source of randomness, the concept of market completeness is lost.
The Volatility Problem                                                      25

We can no longer have a straightforward risk-neutral pricing. This is where
the market price of risk will come into consideration.


The Market Price of Volatility Risk
Indeed, taking a more general form for the variance process

                            dvt = b(vt )dt + a(vt )dZt                  (1.32)

as we previously said, using the Black-Scholes risk-neutrality argument,
Equation (1.1) could be replaced with

                          dSt = (rt − qt )St dt + σt St dBt             (1.33)

This is equivalent to changing the probability measure from the real one
to the risk-neutral one.24 We therefore need to use (1.33) together with the
risk-adjusted volatility process

                            dvt = b̃(vt )dt + a(vt )dZt                 (1.34)

where
                              b̃(vt ) = b(vt ) − λa(vt )

with λ the market price of volatility risk. This quantity is closely related to
the market price of risk for the stock λe = (µ − r)/σ. Indeed, as Hobson
[140] and Lewis [177] both show, we have
                                       
                           λ = ρλe + 1 − ρ2 λ∗                           (1.35)

where λ∗ is the market price of risk associated with dBt − ρdZt , which can
also be regarded as the market price of risk for the hedged portfolio.
     The passage from Equation (1.32) to Equation (1.34) and the introduc-
tion of the market price of volatility risk could also be explained by the
Girsanov theorem, as was done for instance in Fouque [104].
     It is important to underline the difference between the real and the risk-
neutral measures here. If we use historic stock prices together with the real
stock-return drift µ to estimate the process parameters, we will obtain the
real volatility drift b(v). An alternative method would be to estimate b̃(v) by
using current option prices and performing a least-square estimation. These
calibration methods will be discussed in detail in the following chapters.

24 See Hull [146] or Shreve [218] for more detail.
26                                                    INSIDE VOLATILITY ARBITRAGE


    The risk-neutral version for a discrete NGARCH model would also
involve the market price of risk and instead of the usual
                                            
                                       1          √
               ln Sn+1 = ln Sn + µ − vn+1 + vn+1Bn+1
                                       2
                  vn+1 = ω0 + βvn + αvn (Bn − c)2

we would have                             
                                      1      √
                 ln Sn+1 = ln Sn + r − vn+1 + vn+1B̃ n+1                  (1.36)
                                      2
                                                            2
                    vn+1 = ω0 + βvn + αvn B̃ n − c − λe

where B̃ n = Bn + λe , which could be regarded as the discrete version of
the Girsanov theorem. Note that the market price of risk for the stock λe is
not separable from the leverage parameter c in the above formulation. Duan
shows in [84] and [86] that risk-neutral GARCH system (1.36) will indeed
converge toward the continuous risk-neutral GARCH
                                          √
                         dSt = St rdt + St vt dBt
                           dvt = (ω − θ̃vt )dt + ξvt dZt

as we expected.


The Two-Factor PDE
From here, writing a two-factor PDE for a derivative security f becomes a
simple application of the two-dimensional Ito’s lemma. The PDE will be25
                       ∂f            ∂f  1    ∂ 2f       ∂f
                rf =      + (r − q)S    + vS 2 2 + b̃(v)
                       ∂t            ∂S  2    ∂S         ∂v
                          1 2 ∂ 2f         √ ∂ 2f
                         + a (v) 2 + ρa(v) vS                             (1.37)
                          2      ∂v              ∂S∂v
     Therefore, it is possible, after calibration, to apply a ﬁnite difference
method26 to the above PDE to price the derivative f (S t v). An alterna-
tive would be to use directly the stochastic processes for dSt and dvt and
apply a two-factor Monte Carlo simulation. Later in the chapter we will
also mention other possible methods, such as the mixing solution or asymp-
totic approximations.

25 For a proof of the derivation see Wilmott [237] or Lewis [177].
26 See, for instance, Tavella [227] or Wilmott [237] for a discussion on ﬁnite
difference methods.
The Volatility Problem                                                        27

     Other possible approaches for incomplete markets and stochastic volatil-
ity assumption include super-replication and local risk minimization.27 The
super-replication strategy is the cheapest self-ﬁnancing strategy with a termi-
nal value no less than the payoff of the derivative contract. This technique
was primarily developed by El-Karoui and Quenez in [91]. Local risk mini-
mization involves a partial hedging of the risk. The risk is reduced to an
“intrinsic component” by taking an offsetting position in the underlying
security as usual. This method was developed by Follmer and Sondermann
in [102].



THE GENERALIZED FOURIER TRANSFORM

The Transform Technique
One useful technique to apply to the PDE (1.37) is the generalized Fourier
transform.28 First, we can use the variable x = ln S in which case, using Ito’s
lemma, Equation (1.37) could be rewritten as
                     
     ∂f             1 ∂f     1 ∂ 2f         ∂f   1       ∂ 2f        √ ∂ 2f
rf =     + r −q − v        + v 2 + b̃(v) + a 2 (v) 2 +ρa(v) v
      ∂t            2 ∂x 2 ∂x               ∂v 2         ∂v             ∂x∂v
                                                                           (1.38)
Calling
                                            +∞
                          fˆ (k v t) =         eikxf (x v t)dx         (1.39)
                                           −∞

where k is a complex number,29 fˆ will be deﬁned in a complex strip where
the imaginary part of k is between two real numbers α and β. Once fˆ is
suitably deﬁned, meaning that ki = I(k) (the imaginary part of k) is within
the appropriate strip, we can write the inverse Fourier transform
                                            iki +∞
                                      1
                     f (x v t) =                   e−ikxfˆ (k v t)dk   (1.40)
                                     2π    iki −∞

where we are integrating for a ﬁxed ki parallel to the real axis.
    Each derivative satisfying (1.37) or equivalently (1.38) has a known
payoff G(ST ) at maturity. For instance, as we said before, a call option has
a payoff MAX(0 ST − K) where K is the call strike price. It is easy to see

27 For a discussion on both these techniques, see Frey [107].
28 See Lewis [177] for a detailed discussion on this technique.
29 As usual we note i =
                          √
                           −1.
28                                                        INSIDE VOLATILITY ARBITRAGE


that for ki > 1 the Fourier transform of a call option exists and the payoff
transform is
                                     K ik+1
                                  − 2                                 (1.41)
                                    k − ik

Proof: Indeed, we can write
       +∞                           +∞
            eikx(ex − K)+ dx =                eikx(ex − K)dx
      −∞                           ln K
                                                     
                                      K ik+1     K ik
                              =0−             −K
                                      ik + 1     ik
                                                     
                                             1      1               1
                              = −K ik+1         −       = −K ik+1 2
                                          ik + 1 ik              k − ik
as stated. (QED)
     The same could be applied to a put option or other derivative securities.
In particular, a covered call (stock minus call) having a payoff MI N (ST  K)
will have a transform for 0 < ki < 1 equal to
                                           K ik+1
                                                                              (1.42)
                                          k 2 − ik
Applying the transform to the PDE (1.38) and introducing τ = T − t and
                        ĥ(k v τ) = e(r+ik(r−q))τfˆ (k v τ)               (1.43)

and posing30 c(k) = 12 (k 2 − ik), we get the new PDE equation

        ∂ ĥ  1       ∂ 2 ĥ                  √ ∂ ĥ
             = a 2 (v) 2 + (b̃(v) − ikρ(v)a(v) v)    − c(k)v ĥ               (1.44)
        ∂τ    2       ∂v                          ∂v
     Lewis calls the fundamental transform a function Ĥ(k v τ) satisfying
the PDE (1.44) and satisfying the initial condition Ĥ(k v τ = 0) = 1. If we
know this fundamental transform, we can then multiply it by the derivative
security’s payoff transform and then divide it by e(r+ik(r−q))τ and apply the
inverse Fourier technique by keeping ki in an appropriate strip and ﬁnally
get the derivative as a function of x = ln S.


Special Cases
There are cases where the fundamental transform is known. The case of a
constant (or deterministic) volatility is the most elementary one. Indeed,

30 We are following Lewis [177] notations.
The Volatility Problem                                                                 29

using (1.44) together with dvt = 0, we can easily ﬁnd

                                 Ĥ(k v τ) = e−c(k)vτ

which is analytic in k over the entire complex plane. Using the call payoff
transform (1.41), we can rederive the Black-Scholes equation. The same
can be done if we have a deterministic volatility dvt = b(vt )dt by using the
function Y (v t) where dY = b(Y )dt.
     The square-root model (1.25) is another important case where Ĥ(k v τ)
is known and analytic. We have for this process
                                                √
                          dvt = (ω − θvt )dt + ξ vt dZt

or under the risk-neutral measure
                                            √
                     dvt = (ω − θ̃vt )dt + ξ vt dZt
                     
with θ̃ = (1 − γ)ρξ + θ2 − γ(1 − γ)ξ2 , where γ ≤ 1 represents the risk-
aversion factor.
    For the fundamental transform, we get

                         Ĥ(k v τ) = exp [f1 (t) + f2 (t)v]                       (1.45)

with
                         1 2            2              2
                    t=     ξτ    ω̃ =       ω   c̃ =        c(k)        and
                         2              ξ
                                        2
                                                       ξ2
                                                                  
                                                     1 − hetd
                            f1 (t) = tg − ln                           ω̃
                                                      1−h
                                         1 − etd
                            f2 (t) =             g
                                        1 − hetd

where
                    
                                     1              θ̄ + d
               d=    θ̄2 + 4c̃   g=    (θ̄ + d) h =                           and
                                     2              θ̄ − d
                                            
                    2
               θ¯ = 2    (1 − γ + ik)ρξ + θ2 − γ(1 − γ)ξ2
                   ξ

    The above transform has a cumbersome expression, but it can be seen
that it is analytic in k and therefore always exists. For a proof of the foregoing
refer to Lewis [177].
30                                                         INSIDE VOLATILITY ARBITRAGE


TABLE 1.1 SPX Implied Surface as of 03/09/2004. T is the maturity and M = K/S
the inverse of the moneyness

T/M     0.70    0.80    0.85    0.90    0.95    1.00    1.05    1.10    1.15    1.20    1.30

1.000   24.61   21.29   19.73   18.21   16.81   15.51   14.43   13.61   13.12   12.94   13.23
2.000   21.94   18.73   18.68   17.65   16.69   15.79   14.98   14.26   13.67   13.22   12.75
3.000   20.16   18.69   17.96   17.28   16.61   15.97   15.39   14.86   14.38   13.96   13.30
4.000   19.64   18.48   17.87   17.33   16.78   16.26   15.78   15.33   14.92   14.53   13.93
5.000   18.89   18.12   17.70   17.29   16.88   16.50   16.13   15.77   15.42   15.11   14.54
6.000   18.46   17.90   17.56   17.23   16.90   16.57   16.25   15.94   15.64   15.35   14.83
7.000   18.32   17.86   17.59   17.30   17.00   16.71   16.43   16.15   15.88   15.62   15.15
8.000   17.73   17.54   17.37   17.17   16.95   16.72   16.50   16.27   16.04   15.82   15.40


     The inversion of the Fourier transform for the square-root (Heston)
model is a very popular and powerful approach. It is appealing because of
its robustness and speed. The following example is based on SPX options as
of 03/09/2004 expiring in 1 to 8 years from the calibration date (Tables 1.1
and 1.2).
     As we shall see further, the optimal Heston parameter set to ﬁt this
surface could be found via a least-square estimation approach and for the
index at S = $1156.86 we ﬁnd the optimal parameters v̂0 = 0.1940 and
           ˆ = (ω̂ θ̂ ξ̂ ρ̂) = (0.052042332 1.8408 0.4710 −0.4677)
           



THE MIXING SOLUTION

The Romano-Touzi Approach
The idea of mixing solutions was probably presented for the ﬁrst time by
Hull and White [149] for a zero correlation case. Later, Romano and Touzi

TABLE 1.2 Heston Prices Fitted to the 03/09/2004 Surface
T/M     0.70    0.80    0.85    0.90     0.95    1.00    1.05    1.10    1.15    1.20    1.30

1.000   30.67   21.44   17.09   13.01    9.33    6.18    3.72    2.03    1.03    0.50    0.13
2.000   31.60   22.98   18.98   15.25   11.87    8.89    6.37    4.35    2.83    1.78    0.66
3.000   32.31   24.18   20.44   16.98   13.82   11.00    8.55    6.47    4.77    3.43    1.66
4.000   33.21   25.48   21.93   18.66   15.63   12.91   10.50    8.39    6.61    5.10    2.93
5.000   33.87   26.54   23.20   20.09   17.22   14.63   12.30   10.21    8.39    6.82    4.36
6.000   34.56   27.55   24.34   21.36   18.60   16.08   13.79   11.73    9.89    8.26    5.64
7.000   35.35   28.61   25.52   22.64   19.96   17.49   15.24   13.19   11.35    9.70    6.97
8.000   35.77   29.34   26.39   23.64   21.07   18.69   16.51   14.51   12.68   11.04    8.24
The Volatility Problem                                                       31

    25.00

    20.00

    15.00
j
    10.00

     5.00

     0.00
            70%
                  85%

                        95%

                              105%

                                     115%

                                              130%
                        K/S

FIGURE 1.6 The SPX implied surface as of 03/09/2004. We can observe the negative
skewness as well as the ﬂattening of the slope with maturity.

[209] generalized this approach for a correlated case. The basic idea is to
separate the random processes of the stock and the volatility, integrate the
stock process conditionally upon a given volatility, and ﬁnally end up with
a one-factor problem. Let us be reminded of the two processes we had:

                                     dSt = (rt − qt )St dt + σt St dBt

and
                                            dvt = b̃(vt )dt + a(vt )dZt
under a risk-neutral measure.
    Given a correlation ρt between dBt and dZt, we can introduce the
Brownian motion dWt independent of dZt and write the usual Cholesky31
factorization:                      
                                      dBt = ρt dZt +         1 − ρ2t dWt

We can then introduce the same Xt = ln St and write the new system of
equations:
                                              
                                   1
       dXt = (r − q)dt + dYt − 1 − ρt σt dt + 1 − ρ2t σt dWt
                                      2 2
                                                                (1.46)
                                   2
                 1
       dYt = − ρ2t σ2t dt + ρt σt dZt
                 2
       dvt = b̃t dt + at dZt

where, once again, the two Brownian motions are independent.

31 See, for example, Press [204].
32                                                             INSIDE VOLATILITY ARBITRAGE


    It is now possible to integrate the stock process for a given volatility and
end up with an expectation on the volatility process only. We can think of
(1.46) as the limit of a discrete process, while the time step t → 0.
    For a derivative security f (S0  v0  T ) with a payoff32 G(ST ), using the
bivariate normal density for two uncorrelated variables, we can write

f (S0  v0  T ) = e−rT E0 [G(ST )]                                                (1.47)
                                ∞         ∞             T
                                                         −t
                                                                      1 2         dZt dWt
              = e−rT lim            ...        G(ST )         exp −    Z + Wt2
                      t→0 −∞             −∞            t=0
                                                                      2 t           2π

    If we know how to integrate the above over dWt for a given volatility and
we know the result f ∗ (S v T ) (for instance, for a European call option, we
know the Black-Scholes formula (1.6), there are many other cases where we
have closed-form solutions), then we can introduce the auxiliary variables33
                                                                      
                                       1 T 2 2             T
           S eff = S0 eYT = S0 exp −          ρt σt dt +     ρt σt dZt   (1.48)
                                       2 0               0
and
                             1 T
                    v eff =          1 − ρ2t σ2t dt                      (1.49)
                             T 0

and as Romano and Touzi prove in [209], we will have

                        f (S0  v0  T ) = E0 [f ∗ (S eff v eff T )]             (1.50)

where this last expectation is being taken on dZt only. Note that in the zero
                                                                eff
 eff
               discussed by Hull and White [149] we have S = S0 and
correlation case
            1 T 2
v = vT = T 0 σt dt, which makes the expression (1.50) a natural weighted
average.



A One-Factor Monte Carlo Technique
As Lewis suggests, this will enable us to run a single-factor Monte Carlo
simulation on the dZt and apply the known closed form for each simulated
path. The method does suppose, however, that the payoff G(ST ) does not
depend on the volatility. Indeed, going back to (1.46) we can do a simulation
on Yt and vt using the random sequence of (Zt ); then,after one path is
generated, we can calculate S eff = S0 exp(YT ) and v eff = T1 Tt=0
                                                                  −t
                                                                     (1−ρ2t )vt t

32 The payoff should not depend on the volatility process.
33 Again, all notations are taken from Lewis [177].
The Volatility Problem                                                            33

                                Volatility Smile

             200
             180                  Market 1 Month to Maturity
                                                     Model
             160
                                 Market 7 Months to Maturity
             140                                     Model

             120
Call Price




             100
              80
              60
              40
              20
               0
               950       1000        1050          1100         1150
                                  Strike Price

FIGURE 1.7 Mixing Monte Carlo Simulation with the Square-Root Model for SPX
on February 12, 2002 with Index = $1107.50, 1 month and 7 months to Maturity.
The Powell optimization method was used for least-square calibration. As we can
see, both maturities are ﬁtted fairly well.


and then apply the known closed form (e.g. Black-Scholes for a call or put)
with S eff and v eff. Repeating this procedure for a large number of times and
averaging over the paths, as we usually do in Monte-Carlo methods, we will
have f (S0  v0  T ). This will give us a way to calibrate the model parameters
to the market data. For instance, using the square-root model
                                                   √
                            dvt = (ω − θvt )dt + ξ vt dZt
we can estimate ω, θ, ξ, and ρ from the market prices via a least-square
estimation applied to theoretical prices obtained from the preceding Monte
Carlo method (Figure 1.7). We can either use a single calibration and sup-
pose we have time-independent parameters or perform one calibration per
maturity. The single calibration method is known to provide a bad ﬁt, hence
the idea of adding jumps to the stochastic volatility process as described by
Matytsin [187]. However, this method will introduce new parameters for
calibration.34


34 Eraker et al. [98] claim that a model containing jumps in the return and the

volatility process will ﬁt the options and the underlying data well, and will have no
misspeciﬁcation left.
34                                                        INSIDE VOLATILITY ARBITRAGE

THE LONG-TERM ASYMPTOTIC CASE
In this section we will discuss the case in which the contract time to maturity
is very large, t → ∞. We will focus on the special case of a square-root
process because this is the model we will use in many cases.


The Deterministic Case
We shall start with the case of deterministic volatility and use that for the
more general case of the stochastic volatility.
   We know that under the square-root model the variance follows
                                                √
                       dvt = (ω − θvt )dt + ξ vt dZt

As an approximation, we can drop the stochastic term and obtain
                                 dvt
                                     = ω − θvt
                                 dt
which is an ordinary differential equation providing us immediately with
                                            
                                ω         ω −θt
                          vt = + v −           e                    (1.51)
                                θ          θ

where v is the initial variance for t = 0.
    Using the results from the fundamental transform for a covered call
option and put-call parity, we have for 0 < ki < 1
                                               iki +∞           Ĥ(k v τ)
                                          1
      call(S v τ) = Se−qτ − Ke−rτ                     e−ikX               dk   (1.52)
                                         2π   iki −∞             k 2 − ik
                                Se−q τ
where τ = T − t and X = ln Ke      −r τ represent the adjusted moneyness of the

option. For the special “at-the-money”35 case, where X = 0, we have
                                                                  
                                             iki +∞ Ĥ(k v τ)
                            −rτ          1
         call(S v τ) = Ke       1−                            dk      (1.53)
                                        2π iki −∞ k 2 − ik

As we previously said for a deterministic volatility case, we know the fun-
damental transform

                         Ĥ(k v τ) = exp[−c(k)U (v τ)]

35 This is different from the usual deﬁnition of at-the-money calls, where S = K .

This vocabulary is borrowed from Alan Lewis.
The Volatility Problem                                                       35
                      τ
    With U (v τ) = 0 v(t)dt and as before c(k) = 12 (k 2 − ik), which in the
special case of the square-root model (1.51), will provide us with
                                                     
                               ω          ω    1 − e−θτ
                     U (v τ) = τ + v −
                               θ          θ        θ

This shows once again that Ĥ(k) is analytic in k over the entire complex
plane.
    Now if we let τ → ∞, we can write the approximation
                           iki +∞                               
  call(S v τ)        1                    ω          1       ω      dk
                ≈ 1 −             exp −c(k)   τ − c(k)     v −
     Ke−rτ            2π iki −∞             θ          θ       θ   k 2 − ik
                                                                       (1.54)
We can either calculate the above integral exactly using the Black-Scholes
theory, or take the minimum where c (k0 ) = 0, meaning k0 = 2i , and perform
a Taylor approximation parallel to the real axis around the point k = kr + 2i ,
which will give us
                                                      ∞             
 call(S v τ)       2       ω            1        ω                2 ω
               ≈ 1 − exp − τ exp −             v−          exp −kr τ dkr
    Ke−rτ            π      8θ            8θ       θ    −∞            2θ
the integral being a Gaussian we will get the result
                                                         
      call(S v τ)         8θ         1        ω         ω
                    ≈1−        exp −        v−       exp − τ             (1.55)
         Ke−rτ             πωτ         8θ       θ         8θ
which ﬁnishes our deterministic approximation case.

The Stochastic Case
For the stochastic volatility case, Lewis uses the same Taylor expansion. He
notices that for the deterministic case we had

             Ĥ(k v τ) = exp [−c(k)U (v τ)] ≈ exp[−λ(k)τ]u(k v)

for τ → ∞, where
                                               ω
                                 λ(k) = c(k)
                                               θ
and                                               
                                            1    ω
                         u(k v) = exp −c(k) v −
                                            θ    θ
    If we suppose that this identity holds for the stochastic volatility case as
well, we can use the PDE (1.44) and interpret the result as an eigenvalue-
eigenfunction identity with the eigenvalue λ(k) and the eigenfunction u(k v).
36                                                    INSIDE VOLATILITY ARBITRAGE


This assumption is reasonable because the ﬁrst Taylor approximation term
for the stochastic process is deterministic. Indeed, introducing the operator
                   1       d 2u                  √  du
            (u) = − a 2 (v) 2 − b̃(v) − ikρ(v)a(v) v     + c(k)vu
                   2       dv                         dv
we have
                                     (u) = λ(k)u                          (1.56)
     Now the idea would be to perform a Taylor expansion around the min-
imum k0 where λ (k0 ) = 0. Lewis shows that such k0 is always situated on
the imaginary axis. This property is referred to as the “ridge” property.
     The Taylor expansion along the real axis could be written as
                                                   1
                      λ(k) = λ(k0 + kr ) ≈ λ(k0 ) + kr2 λ (k0 )
                                                   2
Note that we are dealing with a minimum, and therefore λ (k0 ) > 0. Using
the above second-order approximation for λ(k), we get
                call(S v τ)    u(k0  v)   1
                      −rτ
                              ≈1− 2                   exp[−λ(k0 )τ]
                   Ke            k0 − ik0 2πλ (k0 )τ

We can then move from the special “at-the-money” case to the general case by
                     Se−q τ
reintroducing X = ln Ke −r τ , and we will ﬁnally obtain



      call(S v τ)       u(k0  v)   1
                    ≈ eX − 2                   exp[−λ(k0 )τ − ik0 X]     (1.57)
         Ke−rτ            k0 − ik0 2πλ (k0 )τ

which completes our determination of the asymptotic closed form in the
general case.
    For the special case of the square-root model, taking the risk-neutral
case γ = 1, we have36
                             
                         ω
      λ(k) = −ωg ∗ (k) = 2     (θ + ikρξ)2 + (k 2 − ik)ξ2 − (θ + ikρξ)
                         ξ

which also allows us to calculate λ (k). Also

                               u(k v) = exp[g ∗ (k)v]

36 We
       can go back to the general case γ            ≤   1 by replacing θ with
    θ2 − γ(1 − γ)ξ2 + (1 − γ)ρξ because this transformation is independent from
k altogether.
The Volatility Problem                                                       37

where we use the notations from (1.45) and we pose

                                     g∗ = g − d

     The k0 such that λ (k0 ) = 0 is
                                                        
                       i       1 ρ       1
              k0 =               −    θ−    4θ + ξ − 4ρθξ
                                              2   2
                    1 − ρ2 2        ξ    2

which together with (1.57) provides us with the result for call(S v τ) in the
asymptotic case under the square-root stochastic volatility model.
    Note that for ξ → 0 and ρ → 0, we ﬁnd again the deterministic result
k0 → 2i .



A Series Expansion on Volatility-of-Volatility
Another asymptotic approach for the stochastic volatility model suggested
by Lewis [177] is a Taylor expansion on the volatility-of-volatility. There are
two possibilities for this: We can perform the expansion either for the option
price or for the implied volatility directly. In what follows, we consider the
former approach. Once again, we use the fundamental transform H (k V  τ)
with H (k V  0) = 1 and
          ∂H  1       ∂ 2H                   √ ∂H
             = a 2 (v) 2 + b̃(v) − ikρ(v)a(v) v    − c(k)vH
          ∂τ  2       ∂v                        ∂v
and c(k) = 12 (k 2 − ik). We then pose a(v) = ξη(v) and expand H (k V  τ)on
powers of ξ and ﬁnally apply the inverse Fourier transform to obtain an
expansion on the call price.
With our usual notations τ = T − t, X = ln( KS ) + (r − q)τ and Z(V ) = V τ,
the series will be
                                        ∂cBS (S v τ)
C(S V  τ) = cBS (S v τ) + ξτ−1 J1 R̃11
                                             ∂V
                                             1            ∂cBS (S v τ)
                  +ξ τ J3 R̃20 + τ J4 R̃12 + τ−2 J12 R̃22
                    2 −2          −1
                                                                         + O(ξ3 )
                                             2                 ∂V

where v(V  τ) is the deterministic variance
                                                      
                               ω           ω    1 − e−θτ
                     v(V  τ) = + V −
                               θ           θ       θτ

and R̃pq = Rpq (X v(V  τ) τ) with Rpq given polynomials of (X Z) of degree
four at most, and Jn ’s known functions of (V  τ).
38                                                                   INSIDE VOLATILITY ARBITRAGE


     The explicit expressions for all these functions are given in the third
chapter of the Lewis book [177].
     The obvious advantages of this approach are its speed and stability.
The issue of lack of time homogeneity of the parameters  = (ω θ ξ ρ)
could be addressed by performing one calibration per time interval. In this
case, for each time interval [tn  tn+1 ] we will have one set of parameters
n = (ωn  θn  ξn  ρn ) and depending on what maturity T we are dealing
with, we will use one or the other parameter set.
     We compare the values obtained from this series-based approach with
those from a mixing Monte Carlo method in Figure 1.8. We are taking
the example that Heston studied in [134]. The graph shows the difference
C(S V  τ) − cBS (S V  τ) for a ﬁxed K = $100 and τ = 0.50 year. The other
inputs are ω = 0.02, θ = 2.00, ξ = 0.10, ρ = −0.50, V = 0.01, and r = q = 0.
As we can see, the true value of the call is lower than the Black-Scholes value
for the out-of-the-money (OTM) region. The higher ξ and |ρ| are, the larger
this difference will be.
In Figures 1.9 and 1.10, we reset the correlation ρ to zero to have a symmet-
ric distribution, but we use a volatility-of-volatility of ξ = 0.10 and ξ = 0.20
respectively. As discussed, the parameter ξ is the one creating the leptokur-




                             Heston Prices via Mixing and Vol-of-Vol Series
                    0.15

                     0.1
Price Difference




                    0.05

                      0

                   –0.05

                    –0.1                                         Mixing
                                                       Vol-of-Vol Series
                   –0.15
                        70    80        90       100       110       120      130
                                             Stock (USD)

FIGURE 1.8 Comparing the Volatility-of-Volatility Series Expansion with the Monte
Carlo Mixing Model. The graph shows the price difference C(S V  τ) − cBS (S V  τ).
We are taking ξ = 0.10 and ρ = −0.50. This example was used in the original Heston
paper.
The Volatility Problem                                                                39

                               Heston Prices via Mixing and Vol-of-Vol Series
                     0.015
                      0.01

                     0.005
 Price Difference




                           0

                    –0.005
                     –0.01
                    –0.015
                    –0.02
                                                                      Mixing
                    –0.025
                                                            Vol-of-Vol Series
                     –0.03
                          70      80        90       100       110       120    130
                                                 Stock (USD)
FIGURE 1.9 Comparing the Volatility-of-Volatility Series Expansion with the Monte
Carlo Mixing Model. The graph shows the price difference C(S V  τ) − cBS (S V  τ).
We are taking ξ = 0.10 and ρ = 0. This example was used in the original Heston
paper.




                               Heston Prices via Mixing and Vol-of-Vol Series
                     0.06
                     0.04
                     0.02
Price Difference




                        0
                    –0.02
                    –0.04
                    –0.06
                    –0.08
                    –0.1                                             Mixing
                                                           Vol-of-Vol Series
                    –0.12
                         70      80        90       100        110      120     130
                                                 Stock (USD)

FIGURE 1.10 Comparing the Volatility-of-Volatility Series Expansion with the
Monte Carlo Mixing Model. The graph shows the price difference C(S V  τ)
−cBS (S V  τ). We are taking ξ = 0.20 and ρ = 0. This example was used in the orig-
inal Heston paper.
40                                                     INSIDE VOLATILITY ARBITRAGE


ticity phenomenon. A higher volatility-of-volatility causes higher valuation
for far-from-the-money options.37
     Unfortunately, the foregoing series approximation becomes poor as soon
as the volatility-of-volatility becomes larger than 0.40 and the maturity
becomes of the order of 1 year. This case is not unusual at all and there-
fore makes the use of this method limited. This is why the method of choice
remains the inversion of the Fourier transform, as previously described.


PURE-JUMP MODELS

Variance Gamma
An alternative point of view is to drop the diffusion assumption altogether
and replace it with a pure-jump process. Note that this is different from
the jump-diffusion process previously discussed. Madan et al. suggested the
following framework, called variance-gamma (VG) in [182]. We would have
the log-normal-like stock process
                      d ln St = (µS + ω)dt + X(dt; σ ν θ)
where as before µS is the real-world statistical drift of the stock log return
and ω = ν1 ln(1 − θν − σ2 ν/2).
    As for X(dt; σ ν θ), it has the following meaning:
                       X(dt; σ ν θ) = B(γ(dt 1 ν); θ σ)
where B(dt; θ σ) would be a Brownian motion with drift θ and volatility σ.
In other words                           √
                    B(dt; θ σ) = θdt + σ dtN (0 1)
and N(0 1) is a standard Gaussian realization.
    The time interval at which the Brownian motion is considered is not dt
but γ(dt 1 ν) which is a random realization following a gamma distribution
with a mean 1 and variance rate ν. The corresponding probability density
function is
                                           dt      τ
                                         τ ν −1 e− ν
                             fν (dt τ) = dt
                                         ν ν ( dtν
                                                   )
where (x) is the usual gamma function.
   Note that the stock log-return density could actually be integrated for the
VG model, and the density of ln (St /S0 ) is known and could be implemented

37 Also note that the gap between the closed-form series and the Monte Carlo model

increases with ξ. Indeed, the accuracy of the expansion decreases as ξ becomes larger.
The Volatility Problem                                                                                  41

via Kα (x), the modiﬁed Bessel function of the second kind. Indeed, calling
z = ln(Sk/Sk−1) and h = tk−tk−1 and posing xh = z−µS h− νh ln(1−θν−σ2 ν/2)
we have

                                               2hν − 14                                             
          2 exp(θxh /σ2 )           xh2                                         1
  p(z|h) = h √                                               Kh−1                    x 2
                                                                                       h (2σ 2 /ν + θ2 )
          ν ν 2πσ ( νh )        2σ2 /ν + θ2                       ν    2        σ2

Moreover, as Madan et al. show, the option valuation under VG is fairly
straightforward and admits an analytically tractable closed form that can be
implemented via the above modiﬁed Bessel function of second kind and a
degenerate hypergeometric function. All details are available in [182].



Remark on the Gamma Distribution The gamma cumulative distribution function
(CDF) could be deﬁned as
                                                       x
                                          1
                          P (a x) =                       e−t t a−1 dt
                                          (a)      0


Note that with our notations

                           Fν (h x) = F (h x µ = 1 ν)

with
                                    1         µ  µν2 h          x        µt    µ2 h
                F (h x µ ν) =                                      e− ν t ν −1 dt
                                   ( µνh )
                                      2
                                               ν              0


In other words
                                                                      
                                             µ2 h µx
                          F (h x µ ν) = P     
                                              ν    ν

The behavior of this CDF is displayed in Figure 1.11 for different values of
the parameter a > 0 and for 0 < x < +∞.
    Using the inverse of this CDF, we can have a simulated data set for the
gamma law:
                             x (i) = Fν−1 (h U (i) [0 1])

with 1 ≤ i ≤ Nsims and U (i) [0 1] a uniform random realization between zero
and one.
42                                                                             INSIDE VOLATILITY ARBITRAGE


                                The Gamma Cumulative Distribution Function
                    1


                   0.8


                   0.6
P (a,x )




                   0.4

                                                                       a = 10
                   0.2                                                 a=3
                                                                       a=1
                                                                       a = 0.5
                    0
                     0         200    400    600   800     1000     1200       1400    1600
                                                   100x

FIGURE 1.11 The Gamma Cumulative Distribution Function P (a x) for Various
Values of the Parameter a. The implementation is based on code available in Numer-
ical Recipes in C [204].

                                 Modified Bessel Function of Second Kind
                   3.5
                                                                K (x, nu = 0.1)
                     3

                   2.5
 K (x, nu = 0.1)




                     2

                   1.5

                     1

                   0.5

                     0
                         0.1    0.2    0.3   0.4   0.5    0.6    0.7     0.8     0.9    1
                                                    x
FIGURE 1.12 The Modiﬁed Bessel Function of Second Kind for a Given Parameter.
The implementation is based on code available in Numerical Recipes in C [204].



Stochastic Volatility vs. Time-Changed processes As mentioned in [23], this alter-
native formulation leading to time-changed processes is closely related to
the previously discussed stochastic volatility approach in the following way.
The Volatility Problem                                                                   43

                                   Modified Bessel Function of Second Kind
                  0.95
                                                           K(x = 0.5, nu)
                 0.945

                  0.94
K(x = 0.5, nu)




                 0.935

                  0.93

                 0.925

                  0.92
                         0            0.05           0.1             0.15    0.2
                                                     nu
FIGURE 1.13 The Modiﬁed Bessel Function of Second Kind as a Function of the
Parameter. The implementation is based on code available in Numerical Recipes in
C [204].


Taking the foregoing VG stochastic differential equation
                                                
         d ln St = (µS + ω)dt + θγ(dt 1 ν) + σ γ(dt 1 ν)N (0 1)

one could consider σ2 γ(t 1 ν) as the integrated variance and deﬁne vt (ν),
the instantaneous variance, as

                                              σ2 γ(dt 1 ν) = vt (ν)dt

in which case, we would have
                                                                      
                             d ln St = (µS + ω)dt + (θ/σ2 )vt (ν)dt + vt (ν)dtN (0 1)
                                                                    
                                     = (µS + ω + (θ/σ2 )vt (ν))dt + vt (ν)dZt

where dZt is a Brownian motion. This last expression is a traditional stochas-
tic volatility equation.


Variance Gamma with Stochastic Arrival
An extension of the VG model would be a variance gamma model with
stochastic arrival (VGSA), which would include the volatility clustering effect.
This phenomenon (also represented by GARCH) means that a high (low)
volatility will be followed by a series of high (low) volatilities. In this
44                                                     INSIDE VOLATILITY ARBITRAGE


approach, we replace the dt in the previously deﬁned fν (dt τ) with yt dt,
where yt follows a square-root (CIR) process
                                            √
                      dyt = κ(η − yt )dt + λ yt dWt
where the Brownian motion dWt is independent from other processes in
the model. This is therefore a VG process in which the arrival time itself
is stochastic. The mean reversion of the square-root process will cause the
volatility persistence effect that is empirically observed. Note that (not count-
ing µS ) the new model parameter set is  = (κ η λ ν θ σ).

Option Pricing under VGSA The option pricing could be carried out via a Monte
Carlo simulation algorithm under the risk-neutral measure, where, as before,
µS is replaced with r − q. We ﬁrst would simulate the path of yt by writing
                                                √     √
                   yk = yk−1 + κ(η − yk−1)t + λ yk−1 tZk
then calculate
                                        N
                                         −1
                                 YT =          ykt
                                        k=0

and ﬁnally apply one-step simulations
                            T ∗ = Fν−1 (YT  U[0 1])

and38                                                   √
                 ln ST = ln S0 + (r − q + ω)T + θT ∗ + σ T ∗Bk
Note that we have two normal random variables Bk, Zk as well as a gamma-
distributed random variable T ∗, and that they are all uncorrelated. Once the
stock price ST is properly simulated, we can calculate the option price as
usual.

The Characteristic Function As previously discussed, another way to tackle the
option-pricing issue would be to use the characteristic functions. For VG,
the characteristic function is
                                                          µν2 t
                                                  1
                      (u t) = E[eiuX(t)] =
                                               1 − i µν u

Therefore the log-characteristic function could be written as
                        ψ(u t) = ln((u t)) = tψ(u 1)

38 This means that T in VG is replaced with Y
                                               T . The rest remains identical.
The Volatility Problem                                                                45

In other words
                         E[eiuX(t)] = (u t) = exp(tψ(u 1))
Using which, the VGSA characteristic function becomes
                        
            E eiuX(Y (t)) = E[exp(Y (t)ψ(u 1))] = φ(−iψ(u 1))

with φ() the CIR characteristic function, namely
                  φ(ut ) = E[exp(iuYt )] = A(t u) exp(B(t u)y0 )
where
                                              exp(κ2 ηt/λ2 )
                   A(t u) =                                                  2κη
                             [cosh(γt/2) + κ/γ sinh(γt/2)] λ2
                                   2iu
                   B(t u) =
                             κ + γ coth(γt/2)
and                                       
                                   γ=         κ2 − 2λ2 iu
This allows us to determine the VGSA characteristic function, which we can
use to calculate options prices via numeric Fourier inversion as described in
[48] and [51].



Variance Gamma with Gamma Arrival Rate
For the variance gamma with gamma arrival rate (VGG), as before, the stock
process under the risk-neutral framework is
                    d ln St = (r − q + ω)dt + X(h(dt); σ ν θ)
with ω = ν1 ln(1 − θν − σ2 ν/2) and
                     X(h(dt); σ ν θ) = B(γ(h(dt) 1 ν); θ σ)
and the general gamma cumulative distribution function for γ(h µ ν) is

                                      1         µ  µν2 h       x     µt   µ2 h
                F (µ ν; h x) =                                     e− ν t ν −1 dt
                                      µ2 h       ν           0
                                       ν

and here h(dt) = dYt with Yt is also gamma-distributed
                                   dYt = γ(dt µa  νa )
The parameter set is therefore  = (µa  νa  ν θ σ).
                                                             CHAPTER         2
                                The Inference Problem

     In applying option pricing models, one always encounters the
     difﬁculty that the spot volatility and the structural parameters are
     unobservable.
                       — Gurdip Bakshi, Charles Cao, and Zhiwu Chen




INTRODUCTION
Regardless of which speciﬁc model we are using, it seems that we cannot
avoid the issue of calibration. There are two possible sets of data that we
can use for estimating the model parameters: options prices and historic
stock prices.1
     Using options prices via a least-square estimator (LSE) has the obvious
advantage of guaranteeing that we will match the used option market prices
within a certain tolerance. However, the availability of option data is typi-
cally limited, which would force us to use interpolation and extrapolation
methods. These data manipulation approaches might deteriorate the qual-
ity and the smoothness of our inputs. More importantly, matching a set of
plain-vanilla option prices does not necessarily mean that we would obtain
the correct price for an exotic derivative.
     Using stock prices has the disadvantage of offering no guarantee of
matching option prices. However, supposing that the model is right, we do
have a great quantity of data input for calibration, which is a powerful
argument in favor of this approach.
     It is important, however, to note that in using historic stock prices we
are assuming that our time step t is small enough that we are almost in

1 Recently some researchers have also tried to use historic option prices. See, for

instance, Elliott [93] or Van der Merwe [229].



46
The Inference Problem                                                             47

a continuous setting. Further, we are assuming the validity of the Girsanov
theorem, which is applicable to a diffusion-based model. This also means we
are implicitly assuming that the market price of volatility risk is stable and
so are the risk-neutral volatility-drift parameters.
     More accurately, having for instance a real-world model
                                                            p
                           dvt = (ω − θvt )dt + ξvt dZt

with p = 0.5 corresponding to the Heston model, we know that the risk-
neutral volatility-drift parameter is
                                                      p−1
                                 θ(r) = θ + λξvt

     As a result, supposing that θ(r) is a stable (or even constant) parameter
is equivalent to supposing that λ the market-price-of-volatility-risk2 veriﬁes
                                                1−p
                                     λ = φvt

with φ a constant coefﬁcient. The implication of this assumption for a model
with a real-world parameter set  = (ω θ ξ ρ) and a risk-neutral counter-
part  (r) = (ω(r)  θ(r)  ξ(r)  ρ(r) ) is

                                     ξ = ξ(r)
                                     ρ = ρ(r)
                                    ω = ω(r)
                                     θ = θ(r) − φ

    Let us insist on the fact that the above assumption3 is valid only for
a diffusion-based model. For some non-Gaussian pure-jump models, such
as VGG, we lose the comparability between the statistical and the risk-
neutral parameters. We could instead use the stock-price time series to deter-
mine the statistical density p(z) on the one hand, use the options prices to
determine the risk-neutral density q(z) on the other, and calculate the ratio

2 Note that many call the market-price-of-volatility-risk the quantity λξv p.
                                                                           t
3 Also as stated by Bakshi, Cao, and Chen [20]: When the risk-aversion coefﬁcient of

the representative agent is bounded within a reasonable range, the parameters of the
true distributions will not differ signiﬁcantly from their risk-neutral counterparts.
The direct implication
               √         of this is θ ≈ θ(r). More importantly, for daily data we
have t = o( t) and therefore using either the real-world asset drift µS or the
dividend-adjusted risk-free rate r − q would not make a difference in parameter
estimation. Some [10] even ignore the stock drift term altogether.
48                                                 INSIDE VOLATILITY ARBITRAGE


r(z) = p(z)/q(z) corresponding to the Radon-Nikodym derivative of the
two measures for this model.
    The central question of this chapter is therefore the inference of the
parameters embedded in a stochastic volatility model. The logical subdivi-
sions of the problem are summarized as follows.

 1. Cross-Sectional vs. Time Series: The former uses options prices at a given
    point in time, and the latter a series of the underlying prices for a given
    period. As mentioned earlier, the former provides an estimation of the
    parameters in the risk-neutral universe and the latter estimation takes
    place in the statistical universe.
 2. Classical vs. Bayesian: Using time series, one could suppose that there
    exists an unknown but ﬁxed set of parameters and try to estimate them
    as closely as possible. This is a classical (frequentist) approach. Alterna-
    tively, one could use a Bayesian approach, in which the parameters are
    supposed to be random variables and have their prior distributions that
    one can update via the observations.
 3. Learning vs. Likelihood Maximization: Under the classical hypothe-
    sis, one could try to estimate the instantaneous variance together with
    the ﬁxed parameters, which corresponds to a learning process. A more
    robust way would be to estimate the likelihood function and maximize
    it over all the possible values of the parameters.
 4. Gaussian vs. Non-Gaussian: In any of the preceding approaches, the
    stochastic volatility (SV) model could be diffusion based or not. As
    we will see further, this will affect the actual estimation methodology.
    Among the Gaussian SV models we consider are Heston, GARCH, and
    3/2. Among the Non-Gaussian ones are Bates, VGSA, and VGG.
 5. State-Space Representation: For each of the above approaches and for
    each SV model, we have a number of ways of choosing a state and
    represent the instantaneous variance as well as the spot price. Needless
    to say, a more parsimonious and lower-dimension state is preferable.
 6. Diagnostics and Sampling Distribution: Once the inference process is
    ﬁnished, one has to verify its accuracy via various tests. Quantities such
    as MPE, RMSE, Box-Ljung, or χ2 numbers correspond to some of the
    possible diagnostics. Observing the sampling distribution over various
    paths is another way of checking the validity of the inference methodol-
    ogy.

    Finally, it is worth noting that our entire approach is based on parametric
stochastic volatility models. This model class is more restrictive than the non-
or semiparametric; however, it has the advantage of offering the possibility
of a direct interpretation of the resulting parameters.
The Inference Problem                                                           49

USING OPTION PRICES
Using a set of current vanilla option prices, we can perform an LSE and assess
the risk-neutral model parameters. Taking a set of J strike prices Kj ’s with
their corresponding option prices Cmkt(Kj ) for a given maturity, we would
try to minimize
                         J
                             (Cmodel(Kj ) − Cmkt(Kj ))2
                            j =1

                        4
    The minimization could, for example, be done via the direction set
(Powell) method, the conjugate gradient (Fletcher-Reeves-Polak-Ribiere)
method, or the Levenberg-Marquardt (LM) method. We will now brieﬂy
describe the Powell optimization algorithm.


Direction Set (Powell) Method
The optimization method we will use later is the direction set (Powell)
method and does not require any gradient or Hessian computation.5 This is a
quadratically convergent method producing mutually conjugate directions.
    Most multi dimensional optimization algorithms require a one-dimen-
sional line minimization routine that does the following: Given as input the
vectors P and n and the function f, ﬁnd the scalar λ that minimizes f(P+λn),
and then replace P with P+λn and n with λn. The idea would be to take a set
of directions that are as noninterfering as possible in order to avoid spoil-
ing one minimization with the subsequent one. This way an interminable
cycling through the set of directions will not occur. This is why we seek con-
jugate directions. Calling the function to be minimized f(x), with x a vector
of dimension N, we can write the second-order Taylor expansion around a
particular point P
                                                 1
                        f (x) ≈ f (P) + ∇f (P)x + xHx
                                                 2
                2
where Hij = ∂x∂i ∂x
                 f
                    j
                      is the Hessian matrix of the function at point P. We there-
fore have for the variation of the gradient δ(∇f ) = Hδx, and, in order to

4 Some consider that this minimization will give more importance to the ATM

options, and they try therefore to correct by introducing weights into the summa-
tion. There are also entropy-based techniques as discussed in [16] applied to local
volatility models, which are different from our parametric models.
5 This is an important feature when the function to be optimized contains disconti-

nuities.
50                                                   INSIDE VOLATILITY ARBITRAGE


have a noninterfering new direction, we choose v such that the motion along
v remains perpendicular to our previous direction u
                                 uδ(∇f ) = uHv = 0
    In this case, the directions u and v are said to be conjugate.
    Powell suggests a quadratically convergent method that produces a set
of N mutually conjugate directions. The following description is taken from
Press [204], where the corresponding source code could be found as well.

 1. Initialize the set of directions ui to the basis vectors for i = 1 ... N
 2. Save the starting point as P0
 3. Move Pi−1 to the minimum along direction ui and call it Pi
 4. Set ui to ui + 1 for i = 1 ... N − 1 and set uN to PN − P0
 5. Move PN to the minimum along uN and call this point P0 , and go back
    to Step 2

     For a quadratic form, k iterations of this algorithm will produce a set of
directions whose last k members are mutually conjugate. The idea is to repeat
the steps until the function stops decreasing. However, this procedure tends
to produce directions that are linearly dependent and therefore provides us
with the minimum only over a sub space —hence—the idea of discarding the
direction along which f makes the largest decrease. This seems paradoxical;
we are dropping our best direction in the new iteration. However, this is the
best chance of avoiding a buildup of linear dependence.
     In what follows we apply the Powell algorithm to SPX options valued
via the mixing Monte Carlo method.


Numeric Tests
We apply the Powell algorithm to SPX options valued via the mixing Monte
Carlo method. The optimization is performed across close-to-the-money
strike prices as of t0 = 05/21/2002 with the index S0 = 1079.88 and
maturities T = 08/17/2002, T = 09/21/2002, T = 12/21/2002, and T =
03/22/2003 (Figures 2.1 through 2.5).
     As we see in Table 2.1, the estimated parameters are fairly stable for
different maturities and therefore the stochastic volatility model seems to be
fairly time homogeneous.


The Distribution of the Errors
Because the parameter set  contains only a few elements and we can have
many options prices, it is clear that the matching of the model and market
The Inference Problem                                                                       51

Implied Volatility
                                                     Volatility Surface
 0.4
0.35
 0.3
0.25
 0.2
0.15
 0.1

                                                                                      0.9
                                                                                0.8
                                                                          0.7
             700 800                                                0.6
                     900                                        0.5
                           1000 1100                        0.4
                                       1200
                                            1300 1400 0.20.3 Time to Maturity
                           Strike Price
                                                    1500

FIGURE 2.1 The S&P 500 Volatility Surface as of 05/21/2002 with Index =
$1079.88. The surface will be used for ﬁtting via the direction set (Powell) opti-
mization algorithm applied to a square-root model implemented with a one-factor
Monte Carlo mixing method.




                                     Volatility Smile Fitting
             300

                                                     Market 08/17/2002
             250                                     Model 08/17/2002

             200
Call Price




             150


             100


              50


               0
               800   850   900   950 1000 1050 1100 1150 1200 1250 1300
                                          Strike Price

FIGURE 2.2 Mixing Monte Carlo Simulation with the Square-Root Model for SPX
on 05/21/2002 with Index = $1079.88, Maturity 08/17/2002. Powell (direction set)
optimization method was used for least-square calibration. Optimal parameters ω̂ =
0.081575, θ̂ = 3.308023, ξ̂ = 0.268151, ρ̂ = −0.999999.
52                                                                    INSIDE VOLATILITY ARBITRAGE


                                   Volatility Smile Fitting

             350
                                                   Market 09/21/2002
             300                                   Model 09/21/2002

             250
Call Price




             200

             150

             100

              50

               0
               700    800    900       1000      1100         1200     1300    1400
                                        Strike Price

FIGURE 2.3 Mixing Monte Carlo Simulation with the Square-Root Model for SPX
on 05/21/2002 with Index = $1079.88, Maturity 09/21/2002. Powell (direction set)
optimization method was used for least-square calibration. Optimal parameters ω̂ =
0.108359, θ̂ = 3.798900, ξ̂ = 0.242820, ρ̂ = −0.999830.

                                   Volatility Smile Fitting

             400

             350                                   Market 12/21/2002
                                                   Model 12/21/2002
             300

             250
Call Price




             200

             150

             100

              50

               0
                700   800   900    1000     1100    1200       1300     1400   1500
                                         Strike Price

FIGURE 2.4 Mixing Monte Carlo Simulation with the Square-Root Model for SPX
on 05/21/2002 with Index = $1079.88, Maturity 12/21/2002. Powell (direction
set) optimization method was used for least-square calibration. Optimal parameters
ω̂ = 0.126519, θ̂ = 3.473910, ξ̂ = 0.222532, ρ̂ = −0.999991.
The Inference Problem                                                                    53

                                   Volatility Smile Fitting

             400

             350                                      Market 03/22/2003
                                                      Model 03/22/2003
             300

             250
Call Price




             200

             150

             100

              50

               0
                700   800    900   1000        1100    1200        1300   1400    1500
                                        Strike Price

FIGURE 2.5 Mixing Monte-Carlo Simulation with the Square-Root Model for SPX
on 05/21/2002 with Index = $1079.88, Maturity 03/22/2003. Powell (direction set)
optimization method was used for least-square calibration. Optimal parameters ω̂ =
0.138687, θ̂ = 3.497779, ξ̂ = 0.180010, ρ̂ = −1.000000.


prices is not perfect. Thus, we observe the distribution of the errors
                                                                  
                                    ˆ exp − 1 ϒ 2 + ϒN (j ) (0 1)
            Cmkt(Kj ) = Cmodel(Kj  )
                                             2

with 1 ≤ j ≤ J and ϒ the error standard deviation and ˆ the optimal
parameter set. As usual, N (0 1) is the standard normal distribution. Note
that our previously discussed LSE approach is not exactly equivalent to
the maximization of a likelihood function based on the above distribution


TABLE 2.1 The Estimation is Performed for SPX on t = 05/21/2002 with Index
= $1079.88 for Different Maturities T.

              T             ω̂            θ̂                  ξ̂             ρ̂

08172002              0.081575      3.308023            0.268151          −0.999999
09212002              0.108359      3.798900            0.242820          −0.999830
12212002              0.126519      3.473910            0.222532          −0.999991
03222003              0.138687      3.497779            0.180010          −1.000000
54                                                            INSIDE VOLATILITY ARBITRAGE


because the latter would correspond to the minimization of the sum of the
squared log returns.
    A good bias test would be to check for the predictability of the errors.
For this, one could run a regression of the error
                                                       ˆ
                          ej = Cmkt(Kj ) − Cmodel(Kj  )
on a few factors corresponding, for instance, to moneyness or maturity. A low
R 2 for the regression would prove that the model errors are not predictable
and there is no major bias. For a detailed study, see [182] for instance.


USING STOCK PRICES

The Likelihood Function
If, as in the previous section, we use European options with a given maturity
T and with different strike prices, then we will be estimating
                                     q(ST |S0 ; )
which corresponds to the risk-neutral density, given a known current stock
price S0 and given a constant parameter set . As discussed, least-squares
estimation (LSE) is used to ﬁnd the best guess for the unknown ideal param-
eter set. Alternatively, if we use a time series of stock prices (St )0≤t≤T , we
would be dealing with the joint probability
                                 p(S1  ... ST |S0 ; )
which we can rewrite as
                                             T
                                             
                 p(S1  ... ST |S0 ; ) =         p(St |St−1 ... S0 ; )
                                             t=1

      It is this joint probability that is commonly referred to as the likelihood
function L0:T (). Maximizing the likelihood over the parameter set  would
provide us with the best parameter set for the statistical density p(ST |S0 ; ).
Note that we are using a classical (frequentist) approach, in which we
assume that the parameters are unknown but are ﬁxed over [0 T ]. In other
words, we would be dealing with the same parameter set for any of the
p(St |St−1 ... S0 ; ) with 1 ≤ t ≤ T.
      It is often convenient to work with the log of the likelihood function
since this will produce a sum
                                    T
                                    
                    ln L0:T () =          ln p(St |St−1 ... S0 ; )
                                     t=1
The Inference Problem                                                           55

The Justiﬁcation for the MLE As explained, for instance, in [100], one justiﬁ-
cation of the maximization of the (log) likelihood function comes from the
Kullback-Leibler (KL) distance. The KL distance is deﬁned as6
                                
                                                         
                    d(p ∗  p) = p ∗(x) ln p∗(x) − ln p(x) dx

where p∗(x) is the ideal density, and p(x) is the density under estimation. We
can write                                             
                         d(p ∗  p) = E∗ ln p∗(x)/p(x)
Note that using the Jensen (log convexity) inequality
                                                               
          d(p ∗  p) = −E∗ ln p(x)/p ∗ (x) ≥ − ln E∗(p(x)/p ∗(x))

so                                   
                        ∗
                   d(p  p) ≥ − ln        p∗(x)p(x)/p ∗(x)dx = 0

and d(p p∗ ) = 0 if and only if p = p∗ , which conﬁrms that d(. .) is a distance.
Now minimizing d(p p∗ ) over p() would be equivalent to minimizing the
term                              
                               − p∗ (x) ln p(x)dx

since the rest of the expression depends on p∗() only. This latter expression
could be written in the discrete framework, having T observations S1  ... ST
as
                                   T
                                 −    ln p(St )
                                         t=1

because the observations are by assumption distributed according to the ideal
p∗(). This justiﬁes our maximizing
                                         T
                                         
                                               p(St )
                                         t=1

    Note that in a pure parameter estimation, this would be the MLE
approach. However, the minimization of the KL distance is more general
and can allow for model identiﬁcation.
    Maximum likelihood estimation has many desirable asymptotic attri-
butes as explained, for example, in [127]. Indeed, ML estimators are consist-
ent and converge to the right parameter set as the number of observations

6 Hereafter when the bounds are not speciﬁed, the integral is taken on the entire

space of the integrand argument.
56                                                       INSIDE VOLATILITY ARBITRAGE


increases. They actually reach the lower bound for the error, referred to
as the Cramer-Rao bound, which corresponds to the inverse of the Fisher
information matrix.
    Calling the ﬁrst derivative of the log likelihood the score function
                                       ∂ ln L0:T ()
                              h() =
                                            ∂
it is known that MLE could be interpreted as a special case of the general
method of moments (GMM), where the moment g() such that

                                   E[g()] = 0

is simply taken to be the above score function. Indeed we would then have
                            
                              ∂ ln L0:T ()
                 E[h()] =                  L0:T ()dz0:T = 0
                                   ∂

which means that             
                                 ∂L0:T ()
                                           dz0:T = 0
                                   ∂
as previously discussed in the MLE.
     Note that taking the derivative of the above with respect to the parameter
set (using one-dimensional notations for simplicity)
                       
                            ∂
                               (h()L0:T ()) dz0:T = 0
                           ∂

which will give us
                                               ∂L0:T ()
         ∂ 2 ln L0:T ()                           ∂      ∂L0:T ()
                         L0:T ()dz0:T = −                   dz0:T
               ∂ 2                       L0:T ()     ∂
                                         
                                            ∂ ln L0:T () 2
                                     =−                     L0:T ()dz0:T
                                                 ∂

meaning that
                                                                      2
                          ∂ 2 ln L0:T ()              ∂ ln L0:T ()
              J = −E                      =E
                                ∂ 2                        ∂

which is referred to as the information matrix identity. As previously stated,
asymptotically we have for the optimal parameter set ˆ and the ideal  ∗
                                                 
                             ˆ −  ∗ ∼ N 0 J −1
The Inference Problem                                                         57

Likelihood Evaluation and Filtering For GARCH models, the likelihood is known
under an integrated form. Indeed, calling ut the mean-adjusted stock return,
vt the variance, and (Bt ) a Gaussian sequence, we have for any GARCH
model
                                    ut = h(vt  Bt )
and
                              vt = f (vt−1 ut−1; )
where f () and h() are two deterministic functions. This will allow us to
directly determine and optimize7
                                         T
                                                          u2t
                          L1:T () ∝ −         ln(vt ) +
                                         t=1
                                                           vt

    This is possible because GARCH models have one source of randomness
and there is a time shift between the variance and the spot equations.
    Unlike GARCH, most stochastic volatility models have two (imperfectly
correlated) sources of randomness (Bt ) and (Zt ) and have equations of the
form
                                ut = h(vt  Bt )

                                  vt = f (vt−1 Zt ; )
which means that the likelihood function is not directly known under an
integrated form, and we need ﬁltering techniques for its estimation and
optimization.
     Another justiﬁcation for ﬁltering is its application to parameter learning.
As we shall see, in this approach we use the joint distribution of the hidden
state and the parameters. In order to obtain the optimal value of the hidden
state vt given all the observations z1:t , we need to use a ﬁlter.


Filtering
The idea here is to use the ﬁltering theory for the estimation of stochastic
volatility model parameters. What we are trying to do is to ﬁnd the prob-
ability density function (pdf) corresponding to a state xk at time step k given
all the observations z1:k up to that time. Looking for the pdf p(xk|z1:k), we
can proceed in two stages.

7 We generally drop constant terms in the likelihood function because they do not

affect the optimal arguments, hence the notation L1:T () ∝ ....
58                                                       INSIDE VOLATILITY ARBITRAGE


 1. First we can write the time update iteration by applying the Chapman-
    Kolmogorov equation8
                             
              p(xk|z1:k−1) = p(xk|xk−1 z1:k−1)p(xk−1|z1:k−1)dxk−1
                             
                           = p(xk|xk−1)p(xk−1|z1:k−1)dxk−1

    by using the Markov property.
 2. Following this, for the measurement update we use the Bayes rule
                                            p(zk|xk)p(xk|z1:k−1)
                             p(xk|z1:k) =
                                                p(zk|z1:k−1)
     where the denominator p(zk|z1:k−1) could be written as
                                  
                   p(zk|z1:k−1) = p(zk|xk)p(xk|z1:k−1)dxk

     and corresponds to the likelihood function for the time-step k.


Proof:    Indeed we have
                           p(z1:k|xk)p(xk)
              p(xk|z1:k) =
                               p(z1:k)
                           p(zk z1:k−1|xk)p(xk)
                         =
                               p(zk z1:k−1)
                           p(zk|z1:k−1 xk)p(z1:k−1|xk)p(xk)
                         =
                                  p(zk|z1:k−1)p(z1:k−1)
                           p(zk|z1:k−1 xk)p(xk|z1:k−1)p(z1:k−1)p(xk)
                         =
                                    p(zk|z1:k−1)p(z1:k−1)p(xk)
                           p(zk|xk)p(xk|z1:k−1)
                         =
                               p(zk|z1:k−1)
(QED)
    Note that we use the fact that at time step k the value of z1:k is perfectly
known.
    The Kalman Filter (detailed below) is a special case where the distribu-
tions are normal and could be written as
                              p(xk|zk−1) = N (x̂k− Pk− )
                                p(xk|zk) = N (x̂k Pk)


8 See Shreve [218], for instance.
The Inference Problem                                                       59

     In the special Gaussian case, each distribution could be entirely charac-
terized via its ﬁrst two moments. However, it is important to remember that
the Kalman ﬁlter (KF) is optimal in the Gaussian linear case. In the nonlinear
case, it will always be suboptimal.

Interpretation of the Kalman Gain The basic idea behind the KF is the following
observation. Having x a normally distributed random variable with a mean
mx and variance Sxx, having z a normally distributed random variable with
a mean mz and variance Szz , as well as Szx = Sxz the covariance between x
and z, the conditional distribution of x|z is also normal with

                             mx|z = mx + K(z − mz )

with
                                            −1
                                    K = SxzSzz
    Interpreting x as the hidden-state and z as the observation, the above
matrix K would correspond to the Kalman ﬁlter in the linear case. We also
have
                             Sx|z = Sxx − KSxz
    An alternative interpretation of the Kalman ﬁlter could be based on
linear regression. Indeed, if we knew the time-series of (zk) and (xk), then
the regression could be written as

                                xk = βzk + α + k

with β the slope, α the intercept, and ( k) the residuals. It is known that
under a least-square regression, we have
                                            −1
                                    β = SxzSzz

which again is the expression for the Kalman gain.
   We now will describe various nonlinear extensions of the Kalman ﬁlter.


The Simple and Extended Kalman Filters
The ﬁrst algorithms we choose here are the simple and extended Kalman
ﬁlters,9 owing to their well-known ﬂexibility and ease of implementation.
The simple or traditional Kalman ﬁlter (KF) applies to linear Gaussian cases,
whereas the extended KF (EKF) could be used for nonlinear Gaussian cases
via a ﬁrst-order linearization. We shall therefore describe EKF and consider

9 For a description see, for instance, Welch [233] or Harvey [129].
60                                                         INSIDE VOLATILITY ARBITRAGE


the simple KF as a special case. In order to clarify the notations, let us brieﬂy
rewrite the EKF equations. Given a dynamic process xk following a possibly
nonlinear transition equation

                                   xk = f (xk−1 wk)                             (2.1)

we suppose we have a measurement zk via a possibly nonlinear observation
equation
                            zk = h(xk uk)                          (2.2)
 where wk and uk are two mutually uncorrelated sequences of temporally
uncorrelated normal random variables with zero means and covariance
matrices Qk, Rk, respectively.10 Moreover, wk is uncorrelated with xk−1 and
uk uncorrelated with xk.
    We deﬁne the linear a priori process estimate as

                                         x̂−
                                           k = E[xk]                             (2.3)

which is the estimation at time step k − 1 prior to measurement. Similarly,
we deﬁne the linear a posteriori estimate

                                     x̂k = E[xk|zk]                              (2.4)

which is the estimation at time step k after the measurement.
    We also have the corresponding estimation errors e−             −
                                                         k = xk − x̂k and
ek = xk − x̂k and the estimate error covariances
                                                       t
                                     P−      − −
                                      k = E[ek ek ]                              (2.5)

                                     Pk = E[eketk]                               (2.6)
where the superscript t corresponds to the transpose operator.
    We now deﬁne the Jacobian matrices of f with respect to the system
process and the system noise as Ak and Wk respectively. Similarly, we deﬁne
the gradient matrices of h with respect to the system process and the meas-
urement noise as Hk and Uk respectively. More accurately, for every row i
and column j we have

              Aij = ∂fi /∂xj (x̂k−1 0)           Wij = ∂fi /∂wj (x̂k−1 0)

              Hij = ∂hi /∂xj (x̂−
                                k  0)             Uij = ∂hi /∂uj (x̂−
                                                                     k  0)


10 Some prefer to write x
                           k = f (xk−1 wk−1). Needless to say, the two notations are
equivalent.
The Inference Problem                                                         61

      We therefore have the following time update equations

                                  x̂−
                                    k = f (x̂k−1 0)                       (2.7)

and
                          P−          t          t
                           k = AkPk−1Ak + WkQk−1Wk                         (2.8)

   We deﬁne the Kalman gain as the matrix Kk used in the measurement
update equations
                    x̂k = x̂−               −
                            k + Kk(zk − h(x̂k  0))             (2.9)

and
                                Pk = (I − KkHk)P−
                                                k                         (2.10)

where I represents the identity matrix.
     The optimal Kalman gain corresponds to the mean of the conditional
distribution of xk upon the observation zk or, equivalently, the matrix that
would minimize the mean square error Pk within the class of linear estima-
tors. This optimal gain is

                        Kk = P−  t    − t         t −1
                              k Hk(HkPk Hk + UkRkUk)                      (2.11)

The foregoing equations complete the Kalman ﬁlter algorithm.

Another Interpretation of the Kalman Gain Note that an easy way to observe that
Kk minimizes the a posteriori error covariance Pk is to consider the one-
dimensional linear case

           x̂k = x̂k− + Kk(zk − Hkx̂k−) = x̂k− + Kk(zk − Hkxk + Hkek− )

so
                        ek = xk − x̂k = ek− − Kk(uk + Hkek− )

Therefore

            Pk = E(ek2 ) = Pk− + Kk2 (Rk + Hk2 Pk− + 0) − 2KkHkPk−

and taking the derivative with respect to Kk and setting it to zero, we get

                                          Pk− Hk
                                Kk =
                                       Hk2 Pk− + Rk

which is the one-dimensional expression for the linear Kalman gain.
62                                                   INSIDE VOLATILITY ARBITRAGE


Residuals, Mean Price Error (MPE) and Root Mean Square Error (RMSE) In what
follows we shall call the estimated observations ẑk− . For the simple and
extended Kalman ﬁlters, we have

                                 ẑk− = h(x̂k− 0)

The residuals are the observation errors, deﬁned as

                                  z̃k = zk − ẑk−

Needless to say, the smaller these residuals, the higher the quality of the ﬁlter.
Therefore, to measure the performance, we deﬁne the mean price error (MPE)
and root mean square error (RMSE) as the mean and standard deviation of
the residuals
                                      N
                                  1 
                       MP E =            z̃k
                                  N k=1
                              
                                  N
                              1 
                       RMSE =        (z̃k − MP E)2
                                N k=1



The Unscented Kalman Filter
Recently, Julier and Uhlmann [166] proposed a new extension of the Kalman
ﬁlter to nonlinear systems, one that is completely different from the EKF.
They argue that EKF could be difﬁcult to implement and, more importantly,
difﬁcult to tune and that it would be reliable only for systems that are al-
most linear within the update intervals. The new method, called the un-
scented Kalman ﬁlter (UKF), will calculate the mean to a higher order of
accuracy than the EKF and the covariance to the same order of accuracy.
Unlike the EKF, this method does not require any Jacobian calculation since
it does not approximate the nonlinear functions of the process and the ob-
servation. Therefore, it uses the true nonlinear models but approximates the
distribution of the state random variable xk by applying an unscented trans-
formation to it. As we will see in the following, we construct a set of sigma
points that capture the mean and covariance of the original distribution and,
when propagated through the true nonlinear system, capture the posterior
mean and covariance accurately to the third order.
     Similarly to the EKF, we start with an initial choice for the state vector
x̂0 = E[x0 ] and its covariance matrix P0 = E[(x0 − x̂0 )(x0 − x̂0 )t ]. We then
concatenate the space vector with the system noise and the observation
The Inference Problem                                                           63

noise11 and create an augmented state vector for each step k greater than
one                                      
                                     xk−1
                           xak−1 =  wk−1 
                                     uk−1
and therefore                                     
                                             x̂k−1
                                   x̂ak−1 =  0 
                                               0
and
                                                                  
                    Pk−1        Pxw(k − 1|k − 1)         0
      Pak−1 = Pxw(k − 1|k − 1) Pww(k − 1|k − 1)         0         
                      0                0         Puu (k − 1|k − 1)

for each iteration k. The augmented state will therefore have a dimension
na = nx + nw + nu .
    We then need to calculate the corresponding sigma points through the
unscented transformation:

                                   χak−1(0) = x̂ak−1

For i = 1 ... na
                                                              
                        χak−1(i) = x̂ak−1 +        (na + λ)Pak−1
                                                                 i

and for i = na + 1 ... 2na
                                                           
                     χak−1(i) = x̂ak−1 −        (na + λ)Pak−1
                                                               i−na

where the above subscripts i and i − na correspond to the i th and i − nth
                                                                        a
columns of the square-root matrix.12 This prepares us for the time update
and the measurement update equations, similarly to the EKF.
    The time update equations are

                           χk|k−1(i) = f (χxk−1(i) χw
                                                     k−1(i))


11 This space augmentation will not be necessary if we have additive noises as in

xk = f (xk−1) + wk−1 and zk = h(xk) + uk.
12 The square-root matrix is calculated via singular value decomposition (SVD) and

Cholesky factorization [204]. In case Pak−1 is not positive-deﬁnite, one could, for
example, use a truncation procedure.
64                                                           INSIDE VOLATILITY ARBITRAGE


for i = 0 ... 2na + 1 and
                                          
                                          2na
                                  x̂−
                                    k =         Wi(m)χk|k−1(i)
                                          i=0

and
                          
                          2na
                P−
                 k =            Wi(c) (χk|k−1(i) − x̂−                 − t
                                                     k )(χk|k−1(i) − x̂k )
                          i=0

where the superscripts x and w respectively correspond to the state and
system-noise portions of the augmented state.
    The Wi(m) and Wi(c) weights are deﬁned as
                                                      λ
                                      W0(m) =
                                                   na + λ
and
                                          λ
                           W0(c) =            + (1 − α2 + β)
                                       na + λ
and for i = 1 ... 2na
                                                         1
                                 Wi(m) = Wi(c) =
                                                     2(na + λ)
     The scaling parameters α, β, κ and λ = α2 (na + κ) − na will be chosen
for tuning.
     We also deﬁne within the time update equations
                           Zk|k−1(i) = h(χk|k−1(i) χuk−1(i))

and
                                          
                                          2na
                                  ẑ−
                                    k =         Wi(m)Zk|k−1(i)
                                          i=0

where the superscript u corresponds to the observation-noise portion of the
augmented state.
   As for the measurement update equations, we have
                           
                           2na
               P zk zk =         Wi(c) (Zk|k−1(i) − ẑ−                 − t
                                                      k )(Zk|k−1(i) − ẑk )
                           i=0

and
                           
                           2na
               P xk zk =         Wi(c) (χk|k−1(i) − x̂−                 − t
                                                      k )(Zk|k−1(i) − ẑk )
                           i=0
The Inference Problem                                                             65

which gives us the Kalman gain
                                  Kk = Pxkzk P−1
                                              zk z k

and we get as before
                             x̂k = x̂−             −
                                     k + Kk(zk − ẑk )

where again zk is the observation at time (iteration) k. Also, we have
                              Pk = P−                 t
                                    k − K k P zk zk K k

which completes the measurement update equations.


Kushner’s Nonlinear Filter
It would be instructive to compare this algorithm to the nonlinear ﬁlter-
ing algorithm based on an approximation of the conditional distribution by
Kushner et al. [174]. In this approach, the authors suggest using a Gaussian
quadrature in order to calculate the integral at the measurement update (or
the time update) step.13 As the Kushner paper indicates, having an
N -dimensional normal random variable X = N (m P), with m and P the
corresponding mean and covariance, for a polynomial G of degree 2M − 1,
we can write14
                               
                        1                     (y − m)t P−1 (y − m)
       E[G(X)] =        N    1
                                 G(y) exp −                         dy
                  (2π) 2 |P| 2                          2

which is equal to
                              M
                                           M
                                                                  √ 
                 E[G(X)] =            ...           wi1 ...wiN G m + Pζ
                              i1 =1         iN =1

where ζt = (ζi1  ... ζiN ) is the vector of the Gauss-Hermite roots of order
M and wi1  ... wiN are the corresponding weights. Note that even if both
Kushner’s NLF and UKF use Gaussian qadratures, UKF only uses 2N + 1
sigma points, whereas NLF needs M N points for the integral computation.
    Kushner and Budhiraja suggest using this technique primarily for the
measurement update (ﬁltering) step. They claim that provided this step is
properly implemented, the time update (prediction) step can be carried out
via a linearization similar to the EKF.

13 The analogy between Kushner’s nonlinear ﬁlter and the unscented Kalman ﬁlter,

has already been studied in Ito & Xiong [151].
14 A description of the Gaussian quadrature can be found in Press et al. [204].
66                                                                               INSIDE VOLATILITY ARBITRAGE


Details of the Kushner algorithm Let us use the same notations as for the UKF
algorithm. We therefore have the augmented state xak−1 and its covariance
Pak−1 as before. Here, for a quadrature order of M on an N -dimensional
variable, the sigma points are deﬁned for j = 1 ... N and ij = 1 ... M as
                                                   
                    χak−1(i1  ... iN ) = x̂ak−1 + Pak−1ζ(i1  ... iN )

where the square root here corresponds to the Cholesky factorization, and
again ζ(i1  . . .  iN )[j ] = ζij for each j between 1 and the dimension N and
each ij between 1 and the quadrature order M. Similarly to the UKF, we
have the time update equations
                                                                                  
               χk|k−1(i1  ... iN ) = f χxk−1(i1  ... iN ) χw
                                                                k−1(i1  ... iN )

but now
                                        M
                                                     M
                                                      
                              x̂−
                                k =             ...           wi1 ...wiN χk|k−1(i1  ... iN )
                                        i1 =1         iN =1

and
          M
                       M
                        
  P−
   k =            ...           wi1 ...wiN (χk|k−1(i1  ... iN ) − x̂−                             − t
                                                                      k )(χk|k−1(i1  ... iN ) − x̂k )
          i1 =1         iN =1


      Again, we have
                                                                                     
                Zk|k−1(i1  ... iN ) = h χk|k−1(i1  ... iN ) χuk−1(i1  ... iN )

and
                                        M
                                                     M
                                                      
                               ẑ−
                                 k =            ...           wi1 ...wiN Zk|k−1(i1  ... iN )
                                        i1 =1         iN =1

      Therefore, the measurement update equations will be
              M
                           M
                            
 P z k zk =           ...           wi1 ...wiN (Zk|k−1(i1  ... iN ) − ẑ−                             − t
                                                                          k )(Zk|k−1(i1  ... iN ) − ẑk )
              i1 =1         iN =1


and
              M
                           M
                            
 P xk zk =            ...           wi1 ...wiN (χk|k−1(i1  ... iN ) − x̂−                             − t
                                                                          k )(Zk|k−1(i1  ... iN ) − ẑk )
              i1 =1         iN =1
The Inference Problem                                                           67

which gives us the Kalman gain

                                Kk = Pxkzk P−1
                                            zk z k


and we get as before
                             x̂k = x̂−             −
                                     k + Kk(zk − ẑk )

where again zk is the observation at time (iteration) k.
   Also, we have
                           Pk = P−                  t
                                  k − K k P zk zk K k

which completes the measurement update equations.
     When N = 1 and λ = 2, the numeric integration in the UKF will corres-
pond to a Gauss-Hermite quadrature of order M = 3. However, in the UKF
we can tune the ﬁlter and reduce the higher term errors via the previously
mentioned parameters α and β.
     Note that when h(x u) is strongly nonlinear, the Gauss Hermite integra-
tion is not efﬁcient for evaluating the moments of the measurement update
equation, since the term p(zk|xk) contains the exponent zk − h(xk uk). The
iterative methods based on the idea of importance sampling proposed in
[174] correct this problem at the price of a strong increase in computation
time. As suggested in [151], one way to avoid this integration would be to
make the additional hypothesis that xk h(xk uk)|z1:k−1 is Gaussian.


Parameter Learning
One important issue to realize is that the Kalman ﬁlter can be used either for
state estimation (ﬁltering) or for parameter estimation (machine learning).
When we have both state estimation and parameter estimation, we are deal-
ing with a dual estimation or a joint estimation. The latter case is the one
concerning us because we are estimating the state volatility as well as the
model parameters. As explained in Haykin’s book [133], in a dual ﬁlter we
separate the state vector from the parameters and we apply two intertwined
ﬁlters to them. By contrast, in a joint ﬁlter, we concatenate the state vector
and the parameters and apply one ﬁlter to this augmented state. Note that
in the dual ﬁlter we need to compute recurrent derivatives with respect to
parameters, whereas in a joint ﬁlter no such step is needed.
     It is possible to interpret the joint ﬁlter in the following way. In a regular
ﬁlter, that is, ﬁltering of the state xk for a ﬁxed set of parameters 0 , we are
maximizing the conditional density

                                 p(x1:k|z1:k 0 )
68                                                      INSIDE VOLATILITY ARBITRAGE


and as we said, to do that we write
                                        p(z1:k|x1:k 0 )p(x1:k|0 )
                  p(x1:k|z1:k 0 ) =
                                                p(z1:k|0 )
so we maximize the above with respect to the state xk for a given set of
parameters. This means that the optimal state x̂1:k for a given parameter set
is given by
                     x̂1:k = argmax[p(z1:k x1:k|0 )]
     As we will see, in an MLE approach we use this optimal state ﬁltering
for each iteration of the likelihood maximization over the parameter set .
     In a joint ﬁlter, we are directly optimizing the joint conditional density
                                  p(x1:k |z1:k)
which we can also write as
                                     p(z1:k|x1:k )p(x1:k|)p()
                 p(x1:k |z1:k) =
                                                  p(z1:k)
given that the denominator is functionally independent of x1:k and , and
given that p() contains no prior information,15 the maximization will be
upon
                    p(z1:k|x1:k )p(x1:k|) = p(z1:k x1:k|)
    That is to say, in a joint ﬁlter, the optimal state x̂1:k and parameter set ˆ
are found by writing
                               ˆ = argmax [p(z1:k x1:k|)]
                      (x̂1:k  )

      In what follows, we apply the joint EKF methodology to a few examples.

An Illustration Before using this technique for the stochastic volatility model,
let us take a simple example
                             ξk = ξk−1 + π + 0.10wk
and
                                zk = ξk + 0.10uk
where π ≈ 3.14159 and wk, uk are independent Gaussian random variables.
The linear state-space system could be written as
                                                  
                          ξ      1 1                  wk
                   xk = k =             xk−1 + 0.10
                         πk      0 1                  0

15 Again, we are in a frequentist framework, not Bayesian.
The Inference Problem                                                         69

                          Joint Filter
3.4

3.2

 3

2.8

2.6

2.4

2.2

 2                                                 pi[k]
                                                   pi
1.8
      0    2       4     6        8      10     12         14
                         Observations

FIGURE 2.6 A Simple Example for the Joint Filter. The convergence toward the con-
stant parameter π happens after a few iterations.


and
                             zk = (1 0) xk + 0.10uk
We choose the initial values ξ0 = z0 = 0 and π0 = 1.0. We also take Q
= 0.1I2 and R = 0.10 . Applying the Kalman ﬁlter to an artiﬁcially generated
data set, we plot the resulting πk in Figure 2.6. As we can see, the parameter
converges very quickly to its true value.
     Even if we associated a noise of 0.10 to the constant parameter π, we can
see that for 5000 observations, taking the mean of the ﬁltered state between
observations 20 and 5000 we get
                                π̂ = 3.141390488
which is very close to the value 3.14159 used in data generation process.

Joint Filtering Examples After going through this simple example, we now
apply the JF technique to our stochastic volatility problem. We shall study a
few examples in order to ﬁnd the best state-space representation.
     Example 1 Our ﬁrst example would be the square-root stochastic volatil-
ity model
                               
                                      1            √     √
              ln Sk = ln Sk−1 + µS − vk−1 t + vk−1 tBk−1
                                      2
                                               √      √
                  vk = vk−1 + (ω − θvk−1)t + ξ vk−1 tZk−1
70                                                       INSIDE VOLATILITY ARBITRAGE


    To simplify we suppose that the value of µS is known. We can now deﬁne
the state variable16                        
                                       ln Sk
                                      vk 
                                            
                                      ω 
                              xk =         
                                             
                                      θ 
                                      ξ 
                                         ρ
and the system noise                      
                                             Bk
                                   wk =
                                             Zk
with its covariance matrix
                                         
                                          1   ρ
                                  Qk =
                                          ρ   1
and therefore
                                                         √    √      
                              ln Sk−1 + (µS − 12 vk−1)t + vk−1
                                                              √ tBk−1
                             vk−1 + (ω − θvk−1)t + ξ√vk−1 tZk−1 
                                                                     
                                                    ω                
      xk = f (xk−1 wk−1) = 
                            
                                                                      
                                                                      
                                                    θ                
                                                    ξ                
                                                     ρ
and therefore the Jacobian Ak is
                                                                     
                       1 − 12 t         0           0          0   0
                     0 1 − θt          t       −vk−1t       0   0
                                                                     
                     0      0           1           0          0   0
                Ak = 
                     0
                                                                      
                            0           0           1          0   0
                     0      0           0           0          1   0
                       0     0           0           0          0   1
and                        √     √                             
                             vk−1 t                 0√
                                              √
                               0             ξ vk−1 t 
                                                        
                               0                 0     
                      Wk = 
                           
                                                        
                                                        
                               0                 0     
                               0                 0     
                                0                 0

16 In reality we should write the estimation parameters ω , θ , ξ , and ρ . However,
                                                            k   k   k     k
we drop the indexes for simplifying the notations.
The Inference Problem                                                        71

                          Extended Kalman Filter
         4

        3.5                                  Historic Parameter

         3

        2.5
Omega




         2

        1.5

         1

        0.5

         0
              0   200   400     600       800       1000    1200   1400
                                      Days

FIGURE 2.7 The EKF Estimation (Example 1) for the Drift Parameter ω. The SPX
index daily close prices were used over ﬁve years from 10/01/1996 to 09/28/2001.
The convergence is fairly good.




having the measurement zk = ln Sk we can write

                                                            
                              Hk = 1     0     0   0   0   0


and Uk = 0.
     We could, however, introduce a measurement noise R corresponding to
the intraday stock price movements and the bid-ask spread, in which case we
would have zk = ln Sk + R k, where k represents a sequence of uncorrelated
standard normal random variables. This means that Rk = R and Uk = 1. We
can then tune the value of R in order to get more stable results (Figures 2.7
through 2.10).
     Example 2 The same exact methodology could be used in the GARCH
framework. We deﬁne the state variable xtk = (ln Sk vk ω0  α β c) and take
for observation the logarithm of the actual stock price Sk. The system could
be written as


                                 xk = f (xk−1 wk−1)
72                                                                  INSIDE VOLATILITY ARBITRAGE

                                   Extended Kalman Filter
        14

        12                                           Historic Parameter

        10

        8
Theta




        6

        4

        2

        0
             0       200     400        600      800        1000    1200    1400
                                              Days

FIGURE 2.8 The EKF Estimation (Example 1) for the Drift Parameter θ. The SPX
index daily close prices were used over ﬁve years from 10/01/1996 to 09/28/2001.
The convergence is fairly good.



                                    Extended Kalman Filter
        0.18

        0.16                                         Historic Parameter

        0.14

        0.12

         0.1
XI




        0.08

        0.06

        0.04

        0.02

         0
                 0     200    400        600    800          1000    1200   1400
                                            Days

FIGURE 2.9 The EKF Estimation (Example 1) for the Volatility-of-Volatility Param-
eter ξ. The SPX index daily close prices were used over ﬁve years from 10/01/1996
to 09/28/2001. The convergence is rather poor. We shall explain this via the concept
of observability.
The Inference Problem                                                            73

                                   Extended Kalman Filter
        0.1

      0.05                                      Historic Parameter

         0

      –0.05
Rho




      –0.1

      –0.15

      –0.2

      –0.25
              0    200       400       600      800    1000     1200   1400
                                             Days

FIGURE 2.10 The EKF Estimation (Example 1) for the correlation parameter ρ.
The SPX index daily close prices were used over ﬁve years from 10/01/1996 to
09/28/2001. The convergence is rather poor. We shall explain this via the concept of
observability.



with wk = Bk a one-dimensional source of noise with a variance Qk = 1 and

                                                      √         
                                 ln Sk−1 + µS − 12 vk−1 + vk−1Bk−1
                                                          √
                                ω0 + βvk−1 + α(Bk−1 − c vk−1)2 
                                                                  
                                                 ω0               
              f (xk−1 wk−1) = 
                               
                                                                   
                                                                   
                                                  α               
                                                  β               
                                                   c


and the Jacobian

                                                                   
                         1  − 12              0    0     0      0
                       0 β + αc2             1 c2 vk−1 vk−1 2αcvk−1
                                                                   
                       0    0                1    0     0      0 
                  Ak = 
                       0
                                                                    
                            0                0    1     0      0  
                       0    0                0    0     1      0 
                        0    0                0    0     0      1
74                                                     INSIDE VOLATILITY ARBITRAGE


and                                  
                                     √       
                                      vk−1
                                       √
                                  −2αc vk−1 
                                            
                                      0     
                                  
                             Wk =           
                                       0     
                                            
                                      0     
                                       0
      The observation zk will be
                                zk = h(xk) = ln(Sk)
exactly as in the previous example. The rest of the algorithm would therefore
be identical to the one included in Example 1.
    Example 3 In Examples 1 and 2, we included all the variables in the
system process and we observed part of the system. It is also possible to
separate the measurement and the system variables as follows.
    Taking a general discrete stochastic volatility process as17
                                  
                                        1           √ √
                ln Sk = ln Sk−1 + µS − vk t + vk tBk
                                        2
                                                     √
                     vk = vk−1 + b(vk−1)t + a(vk−1) tZk
with Bk and Zk two Normal random sequences with a mean of zero and
variance one, with a correlation equal to ρ.
                  √
    Posing yk= vkZk and performing the usual Cholesky factorization
Bk = ρZk + 1 − ρ2 Xk, where Zk and Xk are uncorrelated, we can now
take the case of a square-root process and write
                                       
                                        vk
                                      yk
                                       
                                      ω
                                 xk = 
                                      θ
                                           
                                       
                                      ξ
                                        ρ
and xk = f (xk−1 Zk) with
                                                 √    √     
                          vk−1 + (ω − θvk−1)t + ξ vk−1 tZk
                                              √    √    1 
                                                          2 
                     vk−1 + (ω − θvk−1)t + ξ vk−1 tZk Zk 
                                                            
     f (xk−1 Zk) = 
                                       ω + QZk              
                                                             
                                       θ + QZk              
                                                            
                                       ξ + QZk              
                                        ρ + QZk

17 Note that the indexing here is slightly different from the previous examples.
The Inference Problem                                                      75

which provides us with the Jacobian
                                                             
                      1 − θt 0 t          −vk−1t     0   0
                     0         0 0            0        0   0
                                                             
                     0         0 1            0        0   0
               Ak = 
                     0
                                                              
                               0 0            1        0   0
                     0         0 0            0        1   0
                          0     0 0            0        0   1

and                                       √
                                   √                 
                                   ξ vk−1 t
                             (v                    1 
                              k−1 + (ω − θvk−1)t) 2 
                                       Q             
                        Wk = 
                             
                                                      
                                                      
                                       Q             
                                       Q             
                                        Q
      The measurement equation is
                                          
                 Sk          1       √             √ √
      zk = ln        = µS − vk t + ρ tyk + 1 − ρ2 vk tXk
                Sk−1         2

and therefore                      √                  
                   Hk = − 12 t ρ t 0 0 0 0
                                √ √
with uk = Xk and Uk = 1 − ρ2 vk t, which completes our set of equa-
tions. Again we could tune the system noise Q in order to obtain more stable
results.

Observability From the preceding tests, it seems that the EKF provides us with
a nonrobust calibration methodology. Indeed the results are very sensitive
to the choice of system noise Q and observation noise R. We chose for this
case Q = 10−3 and R ≈ 0.
     This brings to attention the issue of observability. A nonlinear system
with a state vector xk of dimension n is observable if
                                             
                                         H
                                     HA 
                                             
                               O=   HA 
                                            2 
                                     ... 
                                      HAn−1

has a full rank of n. For an explanation, refer to Reif et al. [205].
76                                                     INSIDE VOLATILITY ARBITRAGE


    It is fairly easy to see that among the foregoing examples, the ﬁrst and
third (corresponding to the stochastic volatility formulation) have for the
observation matrix O a rank of four and therefore are not observable. This
explains why they do not converge well and are so sensitive to the tuning
parameters Q and R. This means that the choices of the state variables for
Examples 1 and 3 were rather poor. One reason is that in our state-space
choice, we considered
                                 zk = h(vk−1 ...)
and
                         xk = (... vk ...) = f (xk−1 ...)
which implies that
                                      ∂h
                                          =0
                                      ∂vk
We shall see how to correct this in the next section by choosing a more
appropriate state-space representation.

The One-Dimensional State within the Joint Filter Considering the state equation
                                          √      √
      vk = vk−1 + (ω − θvk−1)t + ξ vk−1 tZk−1
                              
                                       1            √     √
            − ρξ ln Sk−1 + µS − vk−1 t + vk−1 tBk−1 − ln Sk
                                       2

posing for every k
                                      1
                           Z̃k =             (Zk − ρBk)
                                     1 − ρ2
we will have as expected Z̃k uncorrelated with Bk. Therefore, considering
the augmented state                  
                                      vk
                                    ω
                                     
                               xk = 
                                    θ
                                         
                                    ξ
                                       ρ
we will have the state transition equation

f (xk−1 Z̃k−1)
                                                                √    √       
                                                      Sk
     vk−1 + [(ω − ρξµS ) − θ − 12 ρξ vk−1]t + ρξ ln Sk−1   + ξ 1 − ρ2 vk−1 t Z̃k−1
                                                                                  
                                            ω                                     
                                                                                  
 =                                          θ                                     
                                                                                  
                                            ξ                                     
                                              ρ
The Inference Problem                                                                                 77

and the measurement equation would be
                                 
                                      1       √ √
           zk = ln Sk+1 = ln Sk + µS − vk t + vk tBk
                                      2

The corresponding EKF Jacobians for this system are
                                                                                         
                                                Sk                                Sk
      1 − θ − 12 ρξ t   t   −vk−1t   ρ ln   Sk−1       − µS − 12 vk−1 t ξ ln Sk−1  − µS − 12 vk−1 t
                                                                                                        
                                                                                                        
            0           1       0                          0                             0              
                                                                                                        
Ak = 
            0           0       1                          0                             0              
                                                                                                         
                                                                                                        
            0           0       0                          1                             0              
                                                                                                        
             0           0       0                          0                             1

                                            √    √ 
                                      ξ 1 − ρ2 vk−1 t
                                             0        
                                                      
                               Wk = 
                                             0        
                                                       
                                             0        
                                              0
                                     1               
                               Hk = − 2 t 0 0 0 0
                                          √ √
                                     Uk = vk t
It is easy to check that this system is observable since the observation matrix
Ok is of full rank. This shows that our state-space choice is better than the
previous ones.
      The UKF would be implemented in a fashion similar to that of the tran-
sition and observation equations above. Again, for the UKF, we would not
need to compute any Jacobians.
      An important issue to consider is that of tuning. We could add extra
noise to the observation and hence lower the weight associated with the
observations. In which case, after choosing a tuning parameter R, we would
write                               √ √           
                               Uk =     vk t R
and
                                        UkUtk = vkt + R 2
The choice of the initial conditions and the tuning parameters could make
the algorithm fail or succeed. It therefore seems that there is little robustness
in this procedure.
     We consider the example of 5000 data points artiﬁcially produced via a
Heston stochastic volatility process with a parameter set

                   ∗ = (ω = 0.10 θ = 10.0 ξ = 0.03 ρ = −0.50)
78                                                     INSIDE VOLATILITY ARBITRAGE

                              Joint EKF
0.9


0.8


0.7


0.6


0.5


0.4
                                                omega

0.3
      0          500       1000          1500   2000         2500
                                  Days

FIGURE 2.11 Joint EKF Estimation for the Parameter ω. Prices were simulated with
 ∗ = (0.10 10.0 0.03 −0.50). The convergence remains mediocre. We shall explain
this in the following section.


with a given µS = 0.025 . We then choose a tuning parameter R = 0.10 and
take a reasonable guess for the initial conditions
                 0 = (ω0 = 0.15 θ0 = 10.0 ξ0 = 0.02 ρ0 = −0.51)
and apply the joint ﬁlter. The results are displayed in Figures 2.11 to 2.14.
As we can see, the convergence for ω and θ is better than it was for the two
others. We shall see later why this is.
    Allowing a burn-in period of 1000 points, we can calculate the mean
(and the standard deviation) of the generated parameters, after the simula-
tion 1000.

Joint Filters and Time Interval One difﬁculty with the application of the joint
ﬁlter (JF) to the stochastic volatility problem is the following: Unless we are
dealing with a longer time interval, such as t = 1, the observation error
√ √
  vk tBk is too large compared with the sensitivity of the ﬁlter with respect
to the state through −0.5vkt. Indeed, for a t = 1/252 we have18
                                           √
                                  t = o( t)

18 Hereafter x
             h = o(yh ) means xh /yh → 0 as h → 0, or, more intuitively, xh is much
smaller than yh for a tiny h.
The Inference Problem                                                            79

                                 Joint EKF
10.005

    10                                             theta

 9.995

  9.99

 9.985

  9.98

 9.975

  9.97

 9.965
            0    500       1000           1500    2000       2500
                                   Days

FIGURE 2.12 Joint EKF Estimation for the Parameter θ. Prices were simulated with
 ∗ = (0.10 10.0 0.03 −0.50) . The convergence remains mediocre. We shall explain
this in the following section.

                              Joint EKF
0.09
0.08                                                 xi
0.07
0.06
0.05
0.04
0.03
0.02
0.01
   0
-0.01
        0       500       1000          1500     2000       2500
                                 Days

FIGURE 2.13 Joint EKF Estimation for the Parameter ξ. Prices were simulated with
 ∗ = (0.10 10.0 0.03 −0.50) . The convergence remains mediocre. We shall explain
this in the following section.

A simple Monte Carlo test will allow us to verify this. We simulate
a Heston model and another model in which we multiply both Brownian
80                                                   INSIDE VOLATILITY ARBITRAGE

                                Joint EKF
–0.494

–0.495

–0.496

–0.497

–0.498

–0.499

  –0.5

–0.501                                               rho

–0.502
         0       500        1000          1500    2000        2500
                                   Days

FIGURE 2.14 Joint EKF Estimation for the Parameter ρ. Prices were simulated with
 ∗ = (0.10 10.0 0.03 −0.50) . The convergence remains mediocre. We shall explain
this in the following section.




motions by a factor t. This will make the errors smaller by a factor of 252 for
the daily case. We call this model the modiﬁed model. After generating 5000
data points with a parameter set (ω∗ = 0.10 θ∗ = 10.0 ξ∗ = 0.03 ρ∗ = −0.50)
and a drift µS = 0.025, we suppose we know all parameters except ω.
    We then apply the JKF to ﬁnd the estimate ω̂. We can observe in
Figure 2.15 that the ﬁlter diverges when applied to the Heston model but
converges fast when applied to the modiﬁed model. However, in reality we
have no control over the observation error, which is precisely the volatility!
In a way, this brings up a more fundamental issue regarding the stochastic
volatility estimation problem: By deﬁnition, volatility represents the noise of
the stock process. If we had taken the spot price Sk as the observation and
the variance vk as the state, we would have


                                               √ √
                   Sk = Sk−1 + Sk−1µS t + Sk−1 vk tBk



we would then have an observation function gradient H = 0 and the system
would be unobservable! It is precisely because we use a Taylor second-order
The Inference Problem                                                        81

 0.5

 0.4

 0.3

 0.2

 0.1

   0

–0.1

–0.2

–0.3                                              0.10
                                         JKF / Heston
–0.4                                 JKF / Modified SV
–0.5
       0           50          100            150          200

FIGURE 2.15 Joint EKF Estimation for the Parameter ω Applied to the Heston Model
as Well as to a Modiﬁed Model Where the Noise is Reduced by a Factor 252. As
we can see, the convergence for the modiﬁed model is improved dramatically. This
justiﬁes our comments on large observation error.


expansion
                                           1
                            ln(1 + R) ≈ R − R 2
                                           2
that we obtain access to vk through the observation function. However, the
error remains dominant as the ﬁrst order of the expansion.
    Some [130] have tried
                  
                          Sk
                ln ln2 (      ) ≈ ln(vk) + ln(t) + ln(Bk2 )
                         Sk−1

and
                                           π
                        ln(Bk2 ) ∼ −1.27 + √ N (0 1)
                                            2
but the latter approximation may or may not be valid depending on the
problem under study.


Parameter Estimation via MLE
As previously stated, one of the principal methods of estimation under the
classical framework is the maximization of the likelihood. Indeed this
estimation method has many desirable asymptotic properties. Therefore,
82                                                        INSIDE VOLATILITY ARBITRAGE


instead of using the ﬁlters alone, we could separate the parameter set
 = (ω θ ξ ρ) from the state vector (ln Sk vk) and use the Kalman ﬁlter
for state ﬁltering within each MLE iteration19 and estimate the parameters
iteratively.

An Illustration   Let us ﬁrst consider the case of the previous illustration

                              ξk = ξk−1 + π + 0.10wk

and
                                  zk = ξk + 0.10uk
where π ≈ 3.14159 and wk, uk are independent Gaussian random variables.
Here we take
                                xk = ξk
and
                                    A k = Hk = 1
                                   Wk = Uk = 0.1
The maximization of the Gaussian likelihood with respect to the parameter
π is equivalent to minimizing
                                      N
                                                      z̃k2
                             L1:N =         ln(Fk) +
                                      k=1
                                                       Fk

with residuals
                              z̃k = zk − ẑk− = zk − x̂k−
and
                         Fk = Pzkzk = HkPk− Hkt + UkRkUkt
   Note that we used scalar notations here, and in vectorial notations we
would have
                            N
                                                     
                    L1:N =       ln(|Fk|) + z̃tkF−1
                                                 k z̃k
                                  k=1

where |Fk| is the determinant of Fk. We use the scalar notations for simplicity
and also because in the stochastic volatility problem we usually deal with
one-dimensional observations (namely, the stock price).

19 To be more accurate, since the noise process is conditionally Gaussian, we are

dealing with a quasi-maximum-likelihood (QML) Estimation. More detail can be
found, for instance, in Gourieroux [124].
The Inference Problem                                                     83

    The minimization via a direction set (Powell) method over 500 artiﬁcially
generated observation points will provide

                                    π̂ = 3.145953

very quickly.

Stochastic Volatility Examples    For Example 1, the system state vector now
becomes                                  
                                           ln Sk
                                    xk =
                                            vk
which means the dimension of our state is now two, and
                                                    √   √
                           ln Sk−1 + µS − 12 vk−1 t + vk−1
                                                          √ tBk−1
   xk = f (xk−1 wk−1) =                              √
                             vk−1 + (ω − θvk−1)t + ξ vk−1 tZk−1

The system noise is still                   
                                             Bk
                                     wk =
                                             Zk
and the corresponding covariance matrix is
                                  
                                    1 ρ
                             Qk =
                                    ρ 1

We have the measurement zk = ln Sk, and therefore we can write
                                        
                            Hk = 1 0

Now for a given set of parameters (ω θ ξ ρ) we can ﬁlter this system with
the EKF (or the UKF) using
                                
                                 1 − 12 t
                           Ak =
                                  0 1 − θt

and                              √     √
                                   vk−1 t            0√
                        Wk =                       √
                                      0           ξ vk−1 t
Note that the observation matrix is
                                  
                                    1              0
                           Ok =
                                    1           − 12 t

which is of full rank. Our system is therefore observable.
84                                                            INSIDE VOLATILITY ARBITRAGE

                  6.705

                    6.7                                  Market
                                                         EKF
                  6.695                                  UKF
Log Stock Price




                   6.69

                  6.685

                   6.68

                  6.675

                   6.67

                  6.665

                   6.66
                      100   105          110            115             120
                                        Days

FIGURE 2.16 The SPX Historic Data (1996–2001) is Filtered via EKF and UKF. The
results are very close, however, the estimated parameters     ˆ = (ω̂ θ̂ ξ̂ ρ̂) differ.
Indeed we ﬁnd (ω̂ = 0.073028 θ̂ = 1.644488 ξ̂ = 0.190461 ρ̂ = −1.000000) for
the EKF and (ω̂ = 0.540715 θ̂ = 13.013577 ξ̂ = 0.437523 ρ̂ = −1.000000) for
the UKF. This might be due to the relative insensitivity of the ﬁlters to the parameter
set  or the non-uniqueness of the optimal parameter set. We shall explain this low
sensitivity in more detail.


   After ﬁltering for this set of parameters, we calculate the sum to be
minimized
                                                N
                                                                z̃k2
                              φ(ω θ ξ ρ) =         ln(Fk) +
                                                k=1
                                                                 Fk

with
                                      z̃k = zk − h(x̂−
                                                     k  0)

and
                                  Fk = HkP−  t        t
                                          k Hk + UkRkUk

The minimization could once again be done via a direction set (Powell)
method, as described previously. This will avoid a calculation of the gra-
dient ∇φ.
    It is interesting to observe (cf. Figures 2.16 and 2.17) that the results
of the EKF and UKF are very close and the ﬁlter errors are comparable.
The Inference Problem                                                                    85

               0.0001
               9e-05                                  EKF
                                                      UKF
               8e-05
               7e-05
Filter Error




               6e-05
               5e-05
               4e-05
               3e-05
               2e-05
               1e-05
                   0
                   500   550        600            650           700
                                    Days

FIGURE 2.17 EKF and UKF Absolute Filtering-Errors for the Same Time-Series. As
we can see, there is no clear superiority of one algorithm over the other.


However, the estimated parameter set  = (ω θ ξ ρ) can have a different
set of values depending on which ﬁlter is actually used.20
     This leads us to the question, how sensitive are these ﬁlters to ? In
order to answer, we can run an estimation for EKF and use the estimated
parameters in UKF and observe how good a ﬁt we obtain. The results show
that this sensitivity is fairly low. Again, this might be due to the relative
insensitivity of the ﬁlters to the parameter set  or the non-uniqueness of
the optimal parameter set. As we will see, the answer to this question also
depends on the sample size.

Optimization Constraints for the Square Root Model    In terms of the optimization
constraints, in addition to the usual

                                        ω≥0                                          (2.12)

                                         θ≥0
                                         ξ≥0
                                     −1 ≤ ρ ≤ 1

                                                                            
20 Note, however, that the values of the resulting long-term volatilities       ω are rather
                                                                                θ
close.
86                                                 INSIDE VOLATILITY ARBITRAGE


we need to make sure that the value of the variance remains positive; that is,
                                         √ √
                  vk + (ω − θvk)t + ξ vk tZk ≥ 0

for any vk ≥ 0 and any Gaussian random value Zk. For a Gaussian random
variable Zk and any positive real number Z ∗ , we can write Zk ≥ −Z ∗ with a
probability P ∗ . For instance if Z ∗ = 4 then P ∗ = 0.999968. Therefore, ﬁxing
a choice of Z ∗ , it is almost always enough for us to have
                                             √ √
                       vk + (ω − θvk)t − ξ vk tZ ∗ ≥ 0

for any vk ≥ 0.                                            √ √
     Considering the function f (x) = x + (ω − θx)t − ξ x tZ ∗ , it is
fairly easy to see that f (0) = ωt ≥ 0 by assumption, and for x very large
f (x) ≈ (1 − θt)x, which is positive if
                                            1
                                       θ≤                               (2.13)
                                            t
This is most of the time realized for a small t such as ours.
    Now f (x) being a continuous function and having positive values at
zero and inﬁnity, it would be sufﬁcient to make sure that its one minimum
on [0 +∞] is also positive. A simple derivative computation shows that
        ξ2 t (Z ∗ )2
xmin = 4(1−θt)     2 and therefore the positivity is realized if
                                                                  21


                                  2 
                             ξ≤       ω(1 − θt)                        (2.14)
                                  Z∗
which completes our set of constraints.

An Alternative Implementation We could also perform the same estimation, but
based on our previous third example. Again we have
                                  
                                         1         √ √
                 ln Sk = ln Sk−1 + µS − vk t + vk tBk
                                         2
                                                 √    √
                    vk = vk−1 + (ω − θvk−1)t + ξ vk−1 tZk

with Bk and Zk two normal random sequences with a mean of zero, a variance
of one, and a correlation equal to ρ. However, since for a Kalman ﬁlter the
process noise and the measurement noise must be uncorrelated, we introduce
                                      √
                                y k = vk Zk

21 Naturally we suppose that t > 0.
The Inference Problem                                                      87
                                                                 
and performing the usual Cholesky factorization Bk = ρZk +        1 − ρ 2 Xk ,
where Zk and Xk are uncorrelated, we can write
                                   
                                     v
                               xk = k
                                     yk

and xk = f (xk−1 Zk) with
                                                 √    √        
                          vk−1 + (ω − θvk−1)t + ξ vk−1 tZk
       f (xk−1 Zk) =                           √    √      1
                       (vk−1 + (ω − θvk−1)t + ξ vk−1 tZk) 2 Zk

which provides us with the Jacobian
                                
                                  1 − θt          0
                          Ak =
                                     0             0

and                                            √           
                                          √
                                         ξ vk−1 t
                        Wk =                              1
                                   (vk−1 + (ω − θvk−1)t) 2
The measurement equation is
                                             
                             1         √             √ √
  zk = ln Sk = ln Sk−1 + µS − vk t + ρ tyk + 1 − ρ2 vk tXk
                             2

and therefore                              √    
                          Hk = − 12 t ρ t
                                  √ √
with uk = Xk and Uk = 1 − ρ2 vk t which completes our set of equa-
tions. Note that the observation matrix is
                                               √
                                   − 12 t     ρ t
                     Ok =
                             − 12 t (1 − θt)   0

which is of full rank. Our system is therefore observable.

The One-Dimensional State Finally, a simpler way of writing the state-space
system, which will be our method of choice hereafter, would be to subtract
from both sides of the state equation xk = f (xk−1 wk−1) a multiple of the
quantity h(xk−1 uk−1) − zk−1, which is equal to zero. This would allow us to
eliminate the correlation between the system and the measurement noises.
    In fact, if the system equation is
                              
                                     1            √     √
            ln Sk = ln Sk−1 + µS − vk−1 t + vk−1 tBk−1
                                     2
88                                                    INSIDE VOLATILITY ARBITRAGE

                                           √    √
              vk = vk−1 + (ω − θvk−1)t + ξ vk−1 tZk−1
writing
                                   √    √
      vk = vk−1 + (ω − θvk−1)t + ξ vk−1 tZk−1
                         
                                1         √     √
           − ρξ ln Sk−1 + µS − vk−1 t + vk−1 tBk−1 − ln Sk
                                2

posing for every k
                                    1
                         Z̃k =               (Zk − ρBk)
                                   1 − ρ2
we will have as expected Z̃k uncorrelated with Bk and
                                            
                                                  1
           xk = vk = vk−1 + (ω − ρξµS ) − θ − ρξ vk−1 t
                                                  2
                                                                         (2.15)
                            Sk             √     √
                 + ρξ ln        + ξ 1 − ρ2 vk−1 t Z̃k−1
                           Sk−1

and the measurement equation would be
                                 
                                      1       √ √
           zk = ln Sk+1 = ln Sk + µS − vk t + vk tBk                     (2.16)
                                      2

With this system everything becomes one-dimensional and the computations
become much faster both for the EKF and UKF.
    For the EKF we will have
                                  
                                        1
                          Ak = 1 − θ − ρξ t
                                        2

and                                      √
                                     √
                        Wk = ξ 1 − ρ2 vk−1 t
as well as
                                      1
                                Hk = − t
                                      2
and
                                        √ √
                               Uk =      vk t
Again, for the MLE we will try to minimize
                                       N
                                                         z̃k2
                     φ(ω θ ξ ρ) =           ln(Fk) +
                                        k=1
                                                          Fk
The Inference Problem                                                     89

with residuals
                             z̃k = zk − h(x̂−
                                            k  0)

and
                           Fk = HkP−  t         t
                                   k Hk + U k U k

The same time update and measurement update will be used with the UKF.
The ML estimator can be used as usual.
     The following is a C++ routine for the implementation of the EKF applied
to the Heston model:

// log_stock_prices are the log of stock prices
// muS is the real-world stock drift
// n_stock_prices is the number of the above stock prices
// (omega, theta, xi, rho) are the Heston parameters
// u[] is the set of means of observation errors
// v[] is the set of variances of observation errors
// estimates[] are the estimated observations from the filter

void estimate_extended_kalman_parameters_1_dim(
double *log_stock_prices,
double muS,
int n_stock_prices,
double omega,
double theta,
double xi,
double rho,
double *u,
double *v,
double *estimates)
{
  int i1;
  double x, x1, W, H, A;
  double P, P1, z, U, K;
  double delt=1.0/252.0;
  double eps=0.00001;

  x = 0.04;
  P=0.01;
  u[0]=u[n_stock_prices-1]=0.0;
  v[0]=v[n_stock_prices-1]=1.0;
  estimates[0]=estimates[1]=log_stock_prices[0]+eps;

  for (i1=1;i1<n_stock_prices-1;i1++)
  {
    if (x<0) x=0.00001;
90                                              INSIDE VOLATILITY ARBITRAGE



        x1 = x + ( omega-rho*xi*muS - (theta-0.5*rho*xi) * x) * delt +
          rho*xi* (log_stock_prices[i1]-log_stock_prices[i1-1]);
        A = 1.0-(theta-0.5*rho*xi)*delt;
        W = xi*sqrt((1-rho*rho) * x * delt);
        P1 = W*W + A*P*A;

        if (x1<0) x1=0.00001;

        H = -0.5*delt;
        U = sqrt(x1*delt);
        K = P1*H/( H*P1*H + U*U);
        z = log_stock_prices[i1+1];
        x = x1 + K * (z - (log_stock_prices[i1] + (muS-0.5*x1)*delt));

        u[i1] = z - (log_stock_prices[i1] + (muS-0.5*x1)*delt);
        v[i1] = H*P1*H + U*U;
        estimates[i1+1] = log_stock_prices[i1] + (muS-0.5*x1)*delt;

        P=(1.0-K*H)*P1;
    }
}

// Having u[] and v[] we can evaluate the (minus log) Likelihood as
// the sum of      log(v[i1])+u[i1]*u[i1]/v[i1]
// and minimize the sum in order to obtain the optimal parameters
// the minimization could be done for instance via the direction set
routine
// available in the Numerical Recipes in C



And what follows next is the same routine for the unscented ﬁlter.



void estimate_unscented_kalman_parameters_1_dim(
double *log_stock_prices,
double muS,
int n_stock_prices,
double omega,
double theta, double xi,
double rho,
double *u,
double *v,
double *estimates)
The Inference Problem                                             91

{
    int     i1,i2, i3, t1;
    int     ret;
    int     na=3;
    double x, xa[3];
    double X[7], Xa[3][7];
    double Wm[7], Wc[7], Z[7];
    double x1;
    double prod, prod1;
    double P, P1;
    double **Pa, **proda;
    double z, U, Pzz, K;
    double delt=1.0/252.0;
    double a=0.001 , b=0.0, k=0.0, lambda;
    double eps=0.00001;

    lambda = a*a*(na +k)-na;

    proda= new double * [na];
    Pa =   new double * [na];
    for (i1=0;i1<na;i1++)
    {
      Pa[i1]= new double [na];
      proda[i1]= new double [na];
    }

    xa[1]=xa[2]=0.0;
    x= 0.04;
    u[0]=u[n_stock_prices-1]=0.0;
    v[0]=v[n_stock_prices-1]=1.0;
    estimates[0]=estimates[1]=log_stock_prices[0]+eps;
    xa[0]=x;

    Pa[0][0]= Pa[1][1]= Pa[2][2] = 1.0;
    Pa[1][0]= Pa[0][1]= Pa[1][2]=Pa[2][1]= Pa[0][2]=Pa[2][0]=0;

    for (i1=0;i1<na;i1++)
    {
      for (i2=0;i2<na;i2++)
      {
        proda[i1][i2]=0.0;
      }
    }

    Wm[0]=lambda/(na+lambda);
92                                       INSIDE VOLATILITY ARBITRAGE


 Wc[0]=lambda/(na+lambda) + (1-a*a+b);
 for (i3=1;i3<(2*na+1);i3++)
 {
   Wm[i3]=Wc[i3]=1/(2*(na+lambda));
 }

 for (t1=1;t1<n_stock_prices-1;t1++)
 {

     for (i1=0;i1<na;i1++)
     {
       Xa[i1][0]= xa[i1];
     }

     for (i1=0;i1<na;i1++)
     {
       for (i2=0;i2<na;i2++)
       {
     if (i1==i2)
     {
       if (Pa[i1][i2] < 1.0e-10)
         Pa[i1][i2]= 1.0e-10;
     }
     else
     {
       if (Pa[i1][i2] < 1.0e-10)
         Pa[i1][i2]= 0.0;
     }
         }
       }

     ret = sqrt_matrix(Pa,proda,na);

     for (i3=1;i3<(1+na);i3++)
     {
       for (i1=0;i1<na;i1++)
       {
       Xa[i1][i3]= xa[i1] + sqrt(na+lambda) * proda[i1][i3-1];
       }
     }
     for (i3=(1+na);i3<(2*na+1);i3++)
     {
       for (i1=0;i1<na;i1++)
       {
       Xa[i1][i3]= xa[i1] - sqrt(na+lambda) * proda[i1][i3-na-1];
The Inference Problem                                          93

         }
     }

     for (i3=0;i3<(2*na+1);i3++)
     {
       if (Xa[0][i3]<0) Xa[0][i3]=0.0001;
       X[i3]= Xa[0][i3] + (omega-muS*rho*xi    -
         (theta-0.5*rho*xi) *Xa[0][i3])*delt +
     rho*xi* (log_stock_prices[t1]-log_stock_prices[t1-1]) +
     xi*sqrt((1-rho*rho)*delt*Xa[0][i3])*Xa[1][i3];
     }


     x1 = 0;
     for (i3=0;i3<(2*na+1);i3++)
     {
       x1 += Wm[i3]*X[i3];
     }

     P1=0.0;
     for (i3=0;i3<(2*na+1);i3++)
     {
       P1 += Wc[i3]*(X[i3]-x1)*(X[i3]-x1);
     }

     z=0;
     for (i3=0;i3<(2*na+1);i3++)
     {
       if (X[i3]<0) X[i3]=0.00001;
       Z[i3] = log_stock_prices[t1] + (muS-0.5*X[i3])*delt +
              sqrt(X[i3]*delt)*Xa[2][i3];
       z += Wm[i3]*Z[i3];
     }

     Pzz=0;
     for (i3=0;i3<(2*na+1);i3++)
     {
       Pzz += Wc[i3]*(Z[i3]-z)*(Z[i3]-z);
     }

     prod=0.0;
     for (i3=0;i3<(2*na+1);i3++)
     {
       prod += Wc[i3]*(X[i3]-x1)* (Z[i3]-z);
     }
94                                                 INSIDE VOLATILITY ARBITRAGE



        K= prod/Pzz;

         u[t1] = log_stock_prices[t1+1] - z;
         v[t1] = Pzz;
         estimates[t1+1] = z;


        x = x1 + K*(log_stock_prices[t1+1] - z);
        P = P1 - K*K * Pzz;

        xa[0]=x;
        Pa[0][0] = P;

        if (x<0) x=0.0001;

        Pa[1][0]= Pa[0][1]= Pa[1][2]=Pa[2][1]= Pa[0][2]=Pa[2][0]=0;
    }


    for (i1=0;i1<na;i1++)
    {
      delete [] Pa[i1];
      delete [] proda[i1];
    }
    delete [] Pa;
    delete [] proda;


}

// the routine sqrt_matrix() can be constructed via the Cholesly
decomposition
// also available as choldc() in the Numerical Recipes in C



Other stochastic volatility models It is easy to generalize the above state-space
model to other stochastic volatility approaches. Indeed we could replace the
Heston equation with
                                                      p
                                                         √
                   vk = vk−1 + (ω − θvk−1)t + ξvk−1 tZk

where p = 1/2 would naturally correspond to the Heston model, p = 1 to
the GARCH diffusion-limit model, and p = 3/2 to the 32 model described in
[177]. This idea will be developed further in the chapter.
The Inference Problem                                                       95

Diagnostics
After having estimated the parameter set , we should test for model mis-
speciﬁcation. Two important questions are

 1. Do the normalized residuals (zk − ẑ−k )/Fk follow a standard normal
    N (0 1) law?
 2. Do these residuals have zero auto correlation?

Chi-Square Test The ﬁrst question could be answered by performing a chi-
square test. We take a number NB of intervals or “bins” bounded by the
points x0  x1  ... xJ . We then count the number of observations Nj within
each bin [xj  xj +1 ] for j between zero and NB − 1. We then compare these
numbers with the theoretical numbers implied by the normal distribution
nj = [(xj +1 ) − (xj )]N with  the cumulative normal function and N the
total number of observations. The sum
                               NB −1
                                (Nj − nj )2

                               j =0
                                         nj

asymptotically follows a χ2ν law with degrees of freedom ν equal to NB − 1.

Box-Ljung Test The second question could be answered with a Box-Ljung test.
We should ﬁrst calculate a number of autocorrelations
                                N −k
                                i=1 (z̃i − z̃)(z̃i+k − z̃)
                                           ¯           ¯
                        rk =         N
                                     i=1 (z̃i − z̃)
                                                 ¯ 2

 for k between one and a prespeciﬁed integer K. Once again, z̃i = zi − ẑi− and
¯z̃ corresponds to their mean. We then consider the sum
                                        K
                                            rk2
                            N (N + 2)
                                        k=1
                                            N −k

which asymptotically follows a χ2ν law with degrees of freedom ν equal to
K − p where p = 4 is the numbers of parameters we estimated.

Test Results In the previously studied SPX examples, we had N = 1256. For
the normality test, we choose NB = 21 and for the Box-Ljung test we take
K = 24; in both cases, we will have to compare the outputs to the crit-
ical threshold χ220 , which for a conﬁdence of 0.95 is around 31.5. For the
96                                                          INSIDE VOLATILITY ARBITRAGE

                              Histograms
0.06
                                                    EKF
0.05                                              Normal


0.04

0.03

0.02

0.01

     0
     –10    –8   –6    –4   –2    0    2      4     6        8   10
                            Centered Data

FIGURE 2.18 Histogram for Filtered Data via EKF versus the Normal Distribution.
The residuals are fairly normal.


(one-dimensional) EKF, we obtain 27.738862 for the normality test and
0.007889 for the Box-Ljung test. For the (one-dimensional) UKF, we
obtain 22.657545 for the normality test and again 0.016053 for the
Box-Ljung test. This means that there is very little autocorrelation in our
system noise. Also, it seems reasonable to model the noise as approximately
normally distributed. The chi-square test proves that the normality assump-
tion is plausible and the Kalman ﬁlter can be used. A visual conﬁrmation of
this could be achieved by plotting the corresponding histograms. As we can
see in Figure 2.18, there are no excessively “fat tails”; however, the central
value at zero is higher than the normal distribution.

Variogram Similarly to Fouque et al. [104], we can use a variogram to
visualize the volatility behavior of the model. As Galli [110] mentions, the
main reasons to use variograms instead of covariance or correlograms are
that variograms do not need to estimate the mean, and they are interpretable
under wider conditions than are covariances or correlograms.
     The expression for the variogram of a process It is

                                                      h N
                   1                            1 i
           γI (h) = E[(I (t + h) − I (t))2 ] ≈          (I (t + hi ) − I (t))2
                   2                           2Nhi t=0

where Nhi is the total number of points such that I (t + hi ) exists.
The Inference Problem                                                         97

                          Variograms

1.25
                                                      EKF
 1.2                                                  UKF

1.15

 1.1

1.05

   1

0.95

 0.9
         10         20       30           40          50    60
                                  Days

FIGURE 2.19 Variograms for Filtered Data via EKF and UKF. The input corresponds
to a sequence of independent Gaussian random variables. As we can see, the vari-
ograms are close to one.


    For instance, for a sequence of independent Gaussian random variables,
we should have
              1                 1                                1 1
   γI (h) =     E[I 2 (t + h)] + E[I 2 (t)] − E[I (t)I (t + h)] = + − 0 = 1
              2                 2                                2 2
In our case, the process It could be deﬁned, for instance, as
                                          zt − ẑt−
                                   It =     √
                                              Ft

which should correspond to a sequence of independent Gaussian random
variables.
     As we can see in Figure 2.19, the variogram is consistent with the Gaus-
sian assumption, which reconﬁrms what we observed from the histograms.
Another way of expressing the same idea is to build a Brownian motion from
the foregoing sequence. Calling the independent Gaussian random variables
(Bk), we can write
                                           n
                                    √ 
                               In = t       Bk
                                               k=0

and plot the variogram for the Brownian Motion In .
98                                                       INSIDE VOLATILITY ARBITRAGE

                             Variograms

2.5


 2


1.5


  1


0.5                                                x/2
                                                  EKF
                                                  UKF
  0
      0   5    10    15    20    25     30   35   40      45   50
                                Days

FIGURE 2.20 Variograms for Filtered Data via EKF and UKF. The input corresponds
to a Brownian motion. As we can see, the variograms are close to x/2.



For a Brownian motion, it is easy to see that the variogram should be linear

                                     1          1       1
                          γI (h) =     (t + h) + t − t = h
                                     2          2       2

This could indeed be seen in Figure 2.20.



Particle Filtering
A different approach to ﬁltering and parameter estimation has recently
become popular [79], [122], [171]. In this approach, we use Monte Carlo
simulations instead of Gaussian approximations for (xk|zk), as the Kalman
or Kushner ﬁlters do. This will precisely allow us to deal with fundamentally
non-Gaussian situations.22


22 An existing (but less effective) alternative to the particle ﬁltering method is the

grid-based approximation, such as the one suggested by Kitagawa [170], [108]. The
main advantage of the particle ﬁlter is that it will make the grid focus adaptively on
the state-space regions with higher relevance.
The Inference Problem                                                        99

Underlying Theory The idea is based on the Importance Sampling technique:
We can calculate an expected value
                                
                   E[f (x0:k)] = f (x0:k)p(x0:k|z1:k)dx0:k         (2.17)

by using a known and simple proposal distribution q().
    More precisely, it is possible to write
                           
                                      p(x0:k|z1:k)
             E[f (x0:k)] = f (x0:k)                q(x0:k|z1:k)dx0:k
                                      q(x0:k|z1:k)
which could be also written as
                           
                                     wk(x0:k)
              E[f (x0:k)] = f (x0:k)          q(x0:k|z1:k)dx0:k           (2.18)
                                     p(z1:k)
with
                                         p(z1:k|x0:k)p(x0:k)
                            wk(x0:k) =
                                            q(x0:k|z1:k)
deﬁned as the ﬁltering non-normalized weight as step k.
Proof:
                          p(x0:k|z1:k)   p(z1:k|x0:k)p(x0:k)
                                       =
                          q(x0:k|z1:k) p(z1:k)q(x0:k|z1:k)
                                         wk(x0:k)
                                       =
                                          p(z1:k)
(QED)
   We therefore have
                         Eq [wk(x0:k)f (x0:k)]
         E[f (x0:k)] =                         = Eq [w̃k(x0:k)f (x0:k)]   (2.19)
                             Eq [wk(x0:k)]

with
                                              wk(x0:k)
                              w̃k(x0:k) =
                                            Eq [wk(x0:k)]
deﬁned as the ﬁltering normalized weight as step k.
Proof: We write
                                  
                             1
            E[f (x0:k)] =            f (x0:k)wk(x0:k)q(x0:k|z1:k)dx0:k
                          p(z1:k)
                          !
                            f (x0:k)wk(x0:k)q(x0:k|z1:k)dx0:k
                        =!
                            p(z1:k|x0:k)p(x0:k) q(x 0:k |z1:k )
                                                q(x |z )
                                                                dx0:k
                                                     0:k 1:k
100                                                         INSIDE VOLATILITY ARBITRAGE

                          !
                              f (x0:k)wk(x0:k)q(x0:k|z1:k)dx0:k
                      =         !
                                  wk(x0:k)q(x0:k|z1:k)dx0:k
which is the ratio of the expectations, as earlier stated. (QED)
    Using Monte-Carlo sampling from the distribution q(x0:k|z1:k) we can
write in the discrete framework:
                                     Nsims
                                                          
                                                  (i)     (i)
                    E[f (x0:k)] ≈            w̃k x0:k  f x0:k                    (2.20)
                                      i=1


with again                                              
                                                     (i)
                                               wk x0:k
                               (i)
                          w̃k(x0:k )=                          
                                             Nsims         (j )
                                             j =1 wk x0:k

Now supposing that our proposal distribution q() satisﬁes the Markov prop-
erty, it can be shown that wk veriﬁes the recursive identity
                                                        
                                 p zk|xk(i) p xk(i) |xk−1
                                                       (i)

                    wk(i) = wk−1
                             (i)
                                                                  (2.21)
                                   q xk(i) |x0:k−1
                                             (i)
                                                   z1:k

which completes the sequential importance sampling algorithm.
Proof: The Markov property just mentioned could be written as

                q(x0:k|z1:k) = q(xk|x0:k−1 z1:k)q(x0:k−1|z1:k−1)                (2.22)

We also assume that the state (xk) is a Markov process, meaning

                           p(xk|x0:k−1) = p(xk|xk−1)

and the observations (zk) are conditionally independent given the states, so
that
                           p(zk|x0:k) = p(zk|xk)
Finally we use the fact that at time-step k, all previous observations are
perfectly known, and

                           p(zk|xk z1:k−1) = p(zk|xk)

Therefore
                              p(z1:k|x0:k)p(x0:k)
               wk(xk) =
                                 q(x0:k|z1:k)
The Inference Problem                                                       101

                              p(zk|xk)p(z1:k−1|x0:k−1)p(xk|xk−1)p(x0:k−1)
                         =
                                    q(xk|x0:k−1 z1:k)q(x0:k−1|z1:k−1)
(QED)
    It is important to note that what the foregoing means is that the state xk
cannot depend on future observations; that is, we are dealing with ﬁltering
and not smoothing.
Resampling One major problem with this algorithm is that the variance of
the weights increases randomly over time. In order to solve this, we need to
use a resampling algorithm, which would map our unequally weighted xk’s
to a new set of equally weighted sample points. Various methods have been
suggested for this. See, for instance, Arulampalam [14], [171]. The basic
idea is to compare the cumulative distribution function (CDF) created from
the normalized weights with a CDF constructed from a uniformly simulated
number U[0 1]. We would then eliminate the indices having too small a
weight and repeat those having a sufﬁciently large weight.
     More accurately, at a given time step k, for 1 ≤ j ≤ Nsims , if
                                                      i
                                                      
                          1
                                (U[0 1] + j − 1) ≥          w̃k(l)
                        Nsims                          l=1

then increment and “skip” i; otherwise, take xk(i) and set its weight to Nsims
                                                                           1
                                                                               .
     Note that the resampling algorithm could create a situation where the
resulting sample has many repeated points. This is known as sample impov-
erishment and could lead to an extreme case in which all points collapse to
a unique particle after a few iterations. This phenomenon is more likely if
the process noise is small. One possible solution to this problem is to add a
Markov chain Monte Carlo (MCMC) step after the resampling. As will be
described further, a Metropolis-Hastings (MH) sampling algorithm would
be suitable.
     Needless to say, the choice of the proposal distribution is crucial. Many
suggest using
                         q(xk|x0:k−1 z1:k) = p(xk|xk−1)
since it will give us a simple weight identity
                                wk(i) = wk−1
                                         (i)
                                             p(zk|xk(i) )

Based on this type of choice, hereafter we shall simplify and write
                        q(xk|x0:k−1 z1:k) = q(xk|xk−1 z1:k)
without any change to our arguments. However, this choice of the proposal
distribution does not take into account our most recent observation zk at
all and therefore could become inefﬁcient. Hence aries the idea of using a
102                                                 INSIDE VOLATILITY ARBITRAGE


Gaussian approximation for the proposal and, in particular, an approxima-
tion based on the Kalman ﬁlter, in order to incorporate the observations. We
therefore will have
                       q(xk|xk−1 z1:k) = N (x̂k Pk)                  (2.23)
using the same notations as in the section on the Kalman ﬁlter. Such ﬁlters are
sometimes referred to as the extended particle ﬁlter (EPF) or the unscented
particle ﬁlter (UPF). This is similar to the iterative gentering algorithm in
Kushner’s NLF.
    From here, in order to estimate the parameter set  we can either use
dual/Joint ﬁlter, or use an ML estimator. Note that since the particle ﬁlter
does not necessarily assume Gaussian noise, the likelihood function to be
maximized has a more general form than the one used in previous sections.
Given the likelihood at step k
                                    
                lk = p(zk|z1:k−1) = p(zk|xk)p(xk|z1:k−1)dxk

the total likelihood is the product of the lk’s and therefore the log likelihood
to be maximized is
                                          N
                                          
                              ln(L1:N ) =     ln(lk)                       (2.24)
                                             k=1

Now lk could be written as
                 
                            p(xk|z1:k−1)
            lk = p(zk|xk)                  q(xk|xk−1 z1:k)dxk
                           q(xk|xk−1 z1:k)
and given that by construction the xk(i) ’s are distributed according to q(), we
can write the Monte Carlo approximation
                                                       
                          Nsims p z |x (i) p x (i) |x (i)
                                   k k           k   k−1
                     lk ≈                                               (2.25)
                                          (i) (i)
                           i=1     q xk |xk−1 z1:k

which we already computed for the sequential importance sampling weight
update.
    As we shall see in the next paragraph, it is also possible to interpret the
step k likelihood, as a quantity related to the total weight
                                    Nsims
                                    
                                            wk(i)
                                    i=1

Finally, we could interpret the particle ﬁlter as follows. We are using a Monte
Carlo simulation
         !         (via an importance sampling technique) to calculate the
integral f (xk)p(xk|z1:k)dxk. This is exactly what other ﬁltering techniques
The Inference Problem                                                             103

try to do. The Kushner nonlinear ﬁlter (NLF) tries to calculate the integral
via a Gaussian quadrature. Indeed, NLF uses Hermite polynomials because
it treats the distributions as normal.23
Implementation Given the above theory, the algorithm for an extended or
unscented particle ﬁlter could be implemented in the following way:

 1. For time step k = 0, choose x0 and P0 > 0.
    For i such that 1 ≤ i ≤ Nsims , take
                                          
                              x0(i) = x0 + P0 Z (i)

    where Z (i) is a standard Gaussian simulated number. Also take P0(i) = P0
    and
                                           1
                                  w0(i) =
                                          Nsims
    While 1 ≤ k ≤ N
 2. For each simulation index i

                                    x̂k(i) = KF(xk−1
                                                 (i)
                                                     )

    with Pk(i) the associated a posteriori error covariance matrix. (KF could
    be either the EKF or the UKF.)
 3. For each i between 1 and Nsims
                                                
                               x̃k(i) = x̂k(i) + Pk(i) Z (i)

    where again Z (i) is a standard Gaussian simulated number.
 4. Calculate the associated weights for each i

                                          p(zk|x̃k(i))p(x̃k(i)|xk−1
                                                                (i)
                                                                    )
                           wk(i) = wk−1
                                    (i)
                                              q(x̃k(i)|xk−1
                                                        (i)
                                                             z1:k)

    with q() the normal density with mean x̂k(i) and variance Pk(i) .
 5. Normalize the weights

                                                  wk(i)
                                   w̃k(i) =     Nsims (i)
                                                i=1 wk

 6. Resample the points x̃k(i) and get xk(i) and reset wk(i) = w̃k(i) = Nsims
                                                                          1
                                                                              .
 7. Increment k; go back to Step 2 and Stop at the end of the While loop.


23 Other ﬁlters cited, for instance, in [79] use the more general Legendre polynomials.
104                                                           INSIDE VOLATILITY ARBITRAGE


      From Step 4 we have
                                                                 
                               Nsims p
                                         zk|x̃k(i) p x̃k(i)|xk−1
                                                                (i)

                      l̄ k =                                   
                               i=1        q x̃k(i)|xk−1
                                                     (i)
                                                          z1:k

where l̄ k is a Monte Carlo proxy for the likelihood lk at the step k. As we
saw in the previous section, by minimizing
                                             N
                                             
                                         −         ln(l̄ k)
                                             k=1

using, for instance, the direction set algorithm, we will be maximizing the
likelihood function and hence we will be obtaining the optimal parameter
     ˆ
set .
    Given the resetting of wk(i) to a constant Nsims
                                                 1
                                                     during the resampling step,
we can also replace l̄k with
                                              Nsims
                                              
                                      l˜k =           wk(i)
                                               i=1

which will provide us with an interpretation of the likelihood as the total
weight.
An Illustration Let us consider once again the case of the previous illustration
                               ξk = ξk−1 + π + 0.10wk

and
                                     zk = ξk + 0.10uk
where π ≈ 3.14159 and wk, uk are independent Gaussian random variables.
We apply the same Kalman ﬁlter and then apply the previous algorithm to
the system. Calling
                                          
                                   1         (x − m)2
                    n(x m s) = √     exp −
                                   2πs          2s2
the normal density with mean m and standard deviation s, we will have
                                                       
             q x̃k |xk−1 z1:k = n x̃k(i) m = x̂k(i) s = Pk(i)
                  (i) (i)



as well as                                               
                   p zk|x̃k(i) = n zk m = x̃k(i) s = 0.10
The Inference Problem                                                          105

and                                                                     
                        p x̃k(i)|xk−1
                                  (i)
                                        = n x̃k(i) m = xk−1
                                                         (i)
                                                             + π s = 0.10

Taking 100 particles and 500 observation points, the EPF converges very
quickly to π̂ = 3.148200 . Alternatively, the simple PF (with no Kalman com-
ponent) would converge to π̂ = 3.140266.
    Note that this example is Gaussian and linear, and therefore the particle
ﬁltering is not an improvement over the Kalman ﬁlter! Indeed the Kalman
ﬁlter is optimal for Gaussian linear cases.
Application to the Heston Model We could now apply the above particle ﬁltering
algorithm to our one-dimensional state, where xk = vk and zk = ln Sk+1 as
before. Calling
                                              
                                       1         (x − m)2
                        n(x m s) = √     exp −
                                       2πs          2s2

the normal density with mean m and standard deviation s, we will have
                                                       
             q x̃k |xk−1 z1:k = n x̃k(i) m = x̂k(i) s = Pk(i)
                  (i) (i)



as well as
                                                            √
                                                   1 (i)
       p    zk|x̃k(i)       = n zk m = zk−1 + µS − x̃k t s = x̃k(i) t
                                                   2

and                                        
                             p x̃k(i)|xk−1
                                       (i)
                                              =
                                 
                                           1
n x̃k(i) m = xk−1
               (i)
                   + (ω − ρξµS ) − θ − ρξ xk−1  (i)
                                                    t + ρξ(zk−1 − zk−2) s
                                           2
with                                            
                                                 (i)
                                                      √
                                    s = ξ 1 − ρ2 xk−1  t

which provides us with the densities we need for the ﬁlter implementation.
   The estimation of the observable state zk is
                                                     Nsims
                                                 1    
                                       ẑk− =                ẑk(i)
                                                Nsims i=1

with ẑk(i) the estimation of zk from KF(xk−1
                                          (i)
                                              ).
    Following is a C++ routine for the EPF applied to the Heston model;
1000 particles are being used.
106                                     INSIDE VOLATILITY ARBITRAGE


// log_stock_prices are the log of stock prices
// muS is the real-world stock drift
// n_stock_prices is the number of the above stock
prices
// (omega, theta, xi, rho) are the Heston parameters
// ll is the value of (negative log) Likelihood
function
// estimates[] are the estimated observations from the
filter

// The function ran2() is from Numerical Recipes in C
// and generates uniform random variables
// The function Normal_inverse() can be found from
many sources
// and is the inverse of the Normal CDF
// Normal_inverse(ran2(.)) generates a set of Normal
random variables

void estimate_particle_extended_kalman_parameters_1_dim(
double *log_stock_prices,
double muS,
int n_stock_prices,
double omega,
double theta,
double xi,
double rho,
double *ll,
double *estimates)
{
  int     i1, i2, i3;
  double H, A, x0, P0, z;
  int     M=1000;
  double x[1000], xx[1000], x1[1000], x2[1000];
  double P[1000], P1[1000], U[1000], K[1000], W[1000];
  double w[1000], u[1000], c[1000];
  double q, pz, px, s, m, l;
  double delt=1.0/252.0, x1_sum;
  long    idum=-1;

  A = 1.0-(theta-0.5*rho*xi)*delt;
  H = -0.5*delt;

  x0 = 0.04;
  P0 = 0.000001;
  for (i2=0; i2<M; i2++)
The Inference Problem                                       107

  {
   x[i2] = x0 + sqrt(P0)* Normal_inverse(ran2(&idum));
   P[i2] = P0;
  }

  *ll=0.0;
  for (i1=1;i1<n_stock_prices-1;i1++)
  {
    l = 0.0;
    x1_sum=0.0;
    for (i2=0; i2<M; i2++)
    {
      /* EKF for the proposal distribution */
      if (x[i2]<0) x[i2]=0.00001;
      x1[i2] = x[i2] + ( omega-rho*xi*muS - (theta-
        0.5*rho*xi) * x[i2]) * delt + rho*xi*
        (log_stock_prices[i1]-log_stock_prices[i1-1]);
      W[i2] = xi*sqrt((1-rho*rho) * x[i2] * delt);
      P1[i2] = W[i2]*W[i2] + A*P[i2]*A;
      if (x1[i2]<0) x1[i2]=0.00001;
      U[i2] = sqrt(x1[i2]*delt);
      K[i2] = P1[i2]*H/( H*P1[i2]*H + U[i2]*U[i2]);
      z = log_stock_prices[i1+1];
      x2[i2] = x1[i2] + K[i2] * (z - (log_stock_prices[i1]
      + (muS-0.5*x1[i2])*delt));
      x1_sum+= x1[i2];
      P[i2]=(1.0-K[i2]*H)*P1[i2];
      /* sample */
      xx[i2] = x2[i2]+sqrt(P[i2])*Normal_inverse(ran2(&idum));
      if (xx[i2]<0) xx[i2]=0.00001;
      /* calculate weights */
      m = x2[i2];
      s = sqrt(P[i2]);
      q = 0.39894228/s * exp( - 0.5* (xx[i2] - m)*
          (xx[i2] - m)/(s*s) );
      m = log_stock_prices[i1] + (muS-0.5*xx[i2])*delt;
      s = sqrt(xx[i2]*delt);
      pz = 0.39894228/s * exp( - 0.5* (z - m)*(z - m)/(s*s) );
      m = x[i2] + ( omega-rho*xi*muS - (theta-0.5*
           rho*xi) * x[i2]) * delt + rho*xi*
          (log_stock_prices[i1]-log_stock_prices[i1-1]);
      s = xi*sqrt((1-rho*rho) * x[i2] * delt);
      px = 0.39894228/s * exp( - 0.5* (xx[i2] - m)*
          (xx[i2] - m)/(s*s) );
108                                                 INSIDE VOLATILITY ARBITRAGE


          w[i2] = pz * px / MAX(q, 1.0e-10);
          l += w[i2];
        }
        *ll += log(l);
        estimates[i1+1]= log_stock_prices[i1] +
                          (muS-0.5*x1_sum/M)*delt;
        /* normalize weights */
        for (i2=0; i2<M; i2++)
          w[i2] /= l;
        /* resample and reset weights */
        c[0]=0;
        for (i2=1; i2<M; i2++)
          c[i2] = c[i2-1] + w[i2];
        i2=0;
        u[0] = 1.0/M * ran2(&idum);
        for (i3=0; i3<M; i3++)
        {
          u[i3] = u[0] + 1.0/M *i3;
          while (u[i3] > c[i2])
        i2++;
          x[i3] = xx[i2];
          w[i3] = 1.0/M;
        }
    }

    *ll *= -1.0;

}

// *ll is the value of (negative log) Likelihood
function
// we can minimize it to obtain the optimal
parameter-set

        Next is the same routine for the unscented ﬁlter.

void estimate_particle_unscented_kalman_parameters_1_dim(
double *log_stock_prices,
double muS,
int n_stock_prices,
double omega,
double theta,
double xi,
The Inference Problem                               109

double rho,

double *ll,
double *estimates)
{
  int      i1, i2, i3, i4;
  int      na=3;
  double   x0, P0;
  double   Wm[7], Wc[7];
  int      M=1000;
  double   x[1000], xx[1000], x1[1000], x2[1000],
           zz[1000], Z[1000][7];
  double   X[1000][7], Xa[1000][3][7];
  double   xa[1000][3], prod[1000];
  double   P[1000], P1[1000], U[1000], K[1000],
           W[1000], Pzz[1000];
  double   w[1000], u[1000], c[1000];
  double   ***Pa, ***proda;
  double   q, pz, px, s, m, l, z;
  double   delt=1.0/252.0;
  long     idum=-1;
  int      ret;
  double   a=0.001 , b=0.0, k=0.0, lambda;

  proda= new double ** [M];
  Pa =   new double ** [M];
  for (i2=0;i2<M;i2++)
  {
    Pa[i2]= new double * [na];
    proda[i2]= new double * [na];
    for (i1=0;i1<na;i1++)
    {
      Pa[i2][i1]= new double [na];
      proda[i2][i1]= new double [na];
    }
  }

  for (i2=0;i2<M;i2++)
  {
    for (i1=0;i1<na;i1++)
    {
      for (i3=0;i3<na;i3++)
      {
    proda[i2][i1][i3]=0.0;
110                                      INSIDE VOLATILITY ARBITRAGE




          }
      }
 }

 lambda = a*a*(na +k)-na;
 Wm[0]=lambda/(na+lambda);
 Wc[0]=lambda/(na+lambda) + (1-a*a+b);
 for (i3=1;i3<(2*na+1);i3++)
 {
   Wm[i3]=Wc[i3]=1/(2*(na+lambda));
 }

 x0 = 0.04;
 P0 = 0.000001;
 for (i2=0; i2<M; i2++)
 {
   x[i2] = x0 + sqrt(P0)* Normal_inverse(ran2(&idum));
   P[i2] = P0;

      xa[i2][0]=x[i2];
      xa[i2][1]=xa[i2][2]=0.0;

   Pa[i2][0][0]= P[i2];
   Pa[i2][1][1]= Pa[i2][2][2] = 1.0;
   Pa[i2][1][0]= Pa[i2][0][1]= Pa[i2][1][2] =
   Pa[i2][2][1] =
 Pa[i2][0][2] = Pa[i2][2][0] = 0.0;
 }


 *ll=0.0;
 for (i1=1;i1<n_stock_prices-1;i1++)
 {
   l = 0.0;
   estimates[i1+1]=0.0;
   for (i2=0; i2<M; i2++)
   {
     /* UKF for the proposal distribution */
     for (i3=0;i3<na;i3++)
     {
   Xa[i2][i3][0]= xa[i2][i3];
     }
The Inference Problem                                   111



       for (i3=0;i3<na;i3++)
       {
     for (i4=0;i4<na;i4++)
       {
       if (i3==i4)
       {
         if (Pa[i2][i3][i4] < 1.0e-10)
           Pa[i2][i3][i4]= 1.0e-10;
       }
       else
       {
         if (Pa[i2][i3][i4] < 1.0e-10)
           Pa[i2][i3][i4] = 0.0;
       }
     }
           }

       ret = sqrt_matrix(Pa[i2],proda[i2],na);

       for (i3=1;i3<(1+na);i3++)
       {
     for (i4=0;i4<na;i4++)
         {
       Xa[i2][i4][i3]= xa[i2][i4] + sqrt(na+lambda) *
                       proda[i2][i4][i3-1];
     }
       }
       for (i3=(1+na);i3<(2*na+1);i3++)
       {
     for (i4=0;i4<na;i4++)
       {
       Xa[i2][i4][i3]= xa[i2][i4] - sqrt(na+lambda) *
                       proda[i2][i4][i3-na-1];
     }
       }

      for (i3=0;i3<(2*na+1);i3++)
      {
    if (Xa[i2][0][i3]<0) Xa[i2][0][i3]=0.0001;
    X[i2][i3]= Xa[i2][0][i3] + (omega-muS*rho*xi    -
(theta-0.5*rho*xi) *Xa[i2][0][i3])*delt +
    rho*xi* (log_stock_prices[i1]-
112                                       INSIDE VOLATILITY ARBITRAGE




      log_stock_prices[i1-1]) +
      xi*sqrt((1-rho*rho)*delt*Xa[i2][0][i3])*
      Xa[i2][1][i3];
        }

        x1[i2] = 0;
        for (i3=0;i3<(2*na+1);i3++)
        {
        x1[i2] += Wm[i3]*X[i2][i3];
        }

        P1[i2]=0.0;
        for (i3=0;i3<(2*na+1);i3++)
        {
        P1[i2] += Wc[i3]*(X[i2][i3]-x1[i2])*(X[i2][i3]-
        x1[i2]);
        }

      zz[i2]=0;
      for (i3=0;i3<(2*na+1);i3++)
      {
    if (X[i2][i3]<0) X[i2][i3]=0.00001;
    Z[i2][i3] = log_stock_prices[i1] +
(muS-0.5*X[i2][i3])*delt + sqrt(X[i2][i3]*delt)*Xa[i2][2][i3];
      zz[i2] += Wm[i3]*Z[i2][i3];
      }

      Pzz[i2]=0;
      for (i3=0;i3<(2*na+1);i3++)
        {
        Pzz[i2] += Wc[i3]*(Z[i2][i3]-zz[i2])*(Z[i2][i3]-
        zz[i2]);
        }

        prod[i2]=0.0;
        for (i3=0;i3<(2*na+1);i3++)
        {
        prod[i2] += Wc[i3]*(X[i2][i3]-x1[i2])* (Z[i2][i3]-
        zz[i2]);
        }


        K[i2]= prod[i2]/Pzz[i2];
The Inference Problem                                     113



       z = log_stock_prices[i1+1];
       estimates[i1+1] += zz[i2]/M;


       x2[i2] = x1[i2] + K[i2]*(z - zz[i2]);
       P[i2] = P1[i2] - K[i2]*K[i2] * Pzz[i2];


       xa[i2][0]=x2[i2];
       Pa[i2][0][0] = P[i2];


       if (x2[i2]<0) x2[i2]=0.0001;

       Pa[i2][1][0]= Pa[i2][0][1]= Pa[i2][1][2]
       =Pa[i2][2][1]= Pa[i2][0][2]=Pa[i2][2][0]=[0];
       /* sample */
       xx[i2] = x2[i2] + sqrt(P[i2])*
       Normal_inverse(ran2(&idum));
       if (xx[i2]<0) xx[i2]=0.00001;
       /* calculate weights */
       m = x2[i2];
       s = sqrt(P[i2]);
       q = 0.39894228/s * exp( - 0.5* (xx[i2] - m)*
       (xx[i2] - m)/(s*s) );
       m= log_stock_prices[i1] + (muS-0.5*xx[i2])*delt;
       s= sqrt(xx[i2]*delt);
       pz= 0.39894228/s * exp( - 0.5* (z - m)*
       (z - m)/(s*s) );
       m= x[i2] + ( omega-rho*xi*muS -
       (theta-0.5*rho*xi) * x[i2]) * delt +
             rho*xi* (log_stock_prices[i1]-
             log_stock_prices[i1-1]);
       s= xi*sqrt((1-rho*rho) * x[i2] * delt);
       px= 0.39894228/s * exp( - 0.5* (xx[i2] - m)*
       (xx[i2] - m)/(s*s) );

      w[i2]= MAX(pz, 1.0e-10) *
MAX(px, 1.0e-10) / MAX(q, 1.0e-10);
l += w[i2];
    }
    *ll += log(l);
    /* normalize weights */
114                                           INSIDE VOLATILITY ARBITRAGE




        for (i2=0; i2<M; i2++)
          w[i2] /= l;
        /* resample and reset weights */
        c[0]=0;
        for (i2=1; i2<M; i2++)
          c[i2] = c[i2-1] + w[i2];
          i2=0;
          u[0] = 1.0/M * ran2(&idum);
        for (i3=0; i3<M; i3++)
        {
          u[i3] = u[0] + 1.0/M *i3;
          while (u[i3] > c[i2])
        i2++;
          x[i3]= xx[i2];
          w[i3]=1.0/M;
        }
    }

    *ll *= -1.0;

    for (i2=0;i2<M;i2++)
    {
      for (i1=0;i1<na;i1++)
      {
        delete [] Pa[i2][i1];
        delete [] proda[i2][i1];
      }
    }
    for (i2=0;i2<M;i2++)
    {
      delete [] Pa[i2];
      delete [] proda[i2];
    }
    delete [] Pa;
    delete [] proda;




}


Test Results The results from an extended particle ﬁlter (EPF) are shown
in Figure 2.21. The ﬁlter was constructed with the one-dimensional Heston
The Inference Problem                                                        115

                                    EKF and EPF Errors
        5.5e-05
                                                            EKF
         5e-05                                              EPF
        4.5e-05
         4e-05
Error




        3.5e-05
         3e-05
        2.5e-05
         2e-05
        1.5e-05
         1e-05
                  0           500         1000           1500     2000
                                          Days

FIGURE 2.21 Filtering Errors: Extended Kalman Filter and Extended Particle Filter
Are Applied to the One-Dimensional Heston Model. The PF has better performance.


model and was applied to a simulated time series of 5000 points with

                                 ∗ = (0.40 10.0 0.01 −0.50)

As we can see in the ﬁgure, no clear superiority of the EPF is detected. The
optimal parameters found via EPF are

                      ˆ EP F = (0.020331 0.499987 0.040000 0.050026)

which could not be considered as an improvement over

                      ˆ EKF = (0.065886 1.711686 0.180884 0.147660)

    Again the long-term-variances ω are close to 0.04 for all cases, which is
                                    θ
consistent with what we had observed.
    The next natural step would be to implement and test the unscented
particle ﬁlter (UPF), in which everything is done similarly to the EPF except
for the choice of the proposal distribution. The use of the UPF has been
strongly recommended by Wan and Van der Merwe in [231] and [133]. The
authors claim that the ﬁltering error from the UPF is considerably smaller
than that from EKF, UKF, or EPF. As we can see in Figure 2.22, it is true that
the ﬁltering error resulting from UPF is considerably lower than the error
generated from the other ﬁlters. However, the optimal parameter set

                      ˆ U P F = (0.020132 0.500031 0.040000 0.050004)
116                                                      INSIDE VOLATILITY ARBITRAGE

                                     Filter Errors
        5.5e-05

         5e-05

        4.5e-05

         4e-05
Error




        3.5e-05

         3e-05

        2.5e-05
                   EKF
         2e-05     UKF
                   EPF
        1.5e-05    UPF
         1e-05
                  400    600   800   1000 1200 1400 1600 1800 2000
                                            Days

FIGURE 2.22 Filtering Errors: All Filters Are Applied to the One-Dimensional Hes-
ton Model. The PF’s have better performance.


obtained via UPF is again very different from the original parameter set  ∗
used in the data generation. We shall analyze the reasons behind this poor
inference result more closely in the following sections.


Error Size One possibility is that our time series has too small an error for
the ﬁlters to make a signiﬁcant difference. We thus study another case, where
t = 1 year. Let us take 200 points generated with the parameter set

                                ∗ = (0.02 0.5 0.05 −0.5)

We obtain
                           ˆ EKF = (0.036 0.093 0.036 −1.00)

and
                           ˆ U KF = (0.033 0.086 0.033 −0.98)

which shows that UKF results are very close to EKF ones. Using the particle
ﬁlters, we get
                   ˆ EP F = (0.019 0.5 0.03 −0.58)
The Inference Problem                                                            117

                                Filter Errors
        0.016                                                        EKF
                                                                     UKF
        0.014                                                        EPF
                                                                     UPF
        0.012

         0.01
Error




        0.008

        0.006

        0.004

        0.002

            0
                20   40   60   80    100   120   140   160   180
                                    Days

FIGURE 2.23 Filters Are Applied to the One-Dimensional Heston Model. The time
series has a larger time-step t = 1.0. Naturally, the errors are larger than the case
where t = 1/252.


which is considerably closer to the original set  ∗ . Therefore EPF did bring
an improvement over the traditional nonlinear ﬁlters and seems to be simpler
and more robust24 than its competitors.
     As for the ﬁltering errors, it can be seen in Figure 2.23 that the EPF errors
are smaller than (although comparable to) those produced by EKF and UKF,
which is consistent with the particle ﬁltering theory.
     As for UPF, we obtain

                ˆ U P F = (0.019480 0.489375 0.047030 −0.229242)

which is very close to the EPF result. As we can see, the UPF errors are even
smaller than those generated by EPF. In addition to the ﬁlters just discussed,
it would be interesting to test a Gauss-Hermite ﬁlter (GHF) [151]. We obtain

                ˆ GH F = (0.020398 0.524215 0.069661 −1.000000)

which is closer to the real parameter set  ∗ compared with EKF or UKF
results. However, the ﬁltering error is more variable than that of its competi-
tors, as can be seen in Figure 2.24. Note, however, that this would mean that

24 This is because for a larger time step the nonlinearity and non-Gaussianity have a

stronger impact.
118                                                       INSIDE VOLATILITY ARBITRAGE

                                  Filter Errors
         0.03
                                                          EKF
        0.025                                             GHF


         0.02
Error




        0.015


         0.01


        0.005


           0
                20    40   60    80    100    120   140   160   180
                                       Days

FIGURE 2.24 The EKF and GHF Are Applied to the One-Dimensional Heston
Model. The time series has a larger time step t = 1.0. Naturally, the errors are
larger than the case where t = 1/252.


we would have access to 200 years of historic data, which is clearly unreal-
istic.25 This issue will be revisited in the following sections. Also, here we
generated the data via a discrete equation with t = 1. Thus there was no
discretization error from a continuous equation. We cannot apply the same
method to data coming from a continuous process.
     As a measure of performance, we can compute the mean price error
(MPE) as well as the root mean square error (RMSE) for each ﬁlter. These
correspond respectively to the mean and the standard deviation of the plotted
errors. For the MPEs, we obtain


                MPE             RMSE

EKF         0.007484269    0.003422215
UKF         0.007660269    0.003733748
GKF         0.009129157    0.005816919
EPF         0.007620208    0.002269224
UPF         0.007076066    0.001359393


25 What is more, the Girsanov theorem would not be valid and (ξ ρ) would have no

reason to be the same under the risk-neutral and real measures.
The Inference Problem                                                                       119

     This shows us again that the particle ﬁlters outperform the other ones.
Again, let us remember that given 200 points with t = 1 and a true param-
eter set
                         ∗ = (0.02 0.5 0.05 −0.5)
we obtained


            ω̂         θ̂         ξ̂         ρ̂
EKF      0.036      0.093      0.036      −1.00
UKF      0.033      0.086      0.033      −0.98
GKF      0.020      0.524      0.070      −1.00
EPF      0.019      0.500      0.033      −0.58
UPF      0.019      0.489      0.047      −0.22




The MH Enhancement As mentioned earlier, the resampling algorithm helps
with the issue of degeneracy, which means that it will reduce the variance
of the weights. However, it might introduce a sample impoverishment phe-
nomenon, in which all particles will have a tendency to collapse to one. The
Metropolis-Hastings (MH) algorithm could be a solution to this problem
                                                                             (i)
and is implemented as follows. After resampling, Step 6, we obtain a set x̃˜ 1:k .

6-a. Reapply the Kalman ﬁlter (extended or unscented) to this set in order
     to obtain                                  
                             xk∗(i) = KF x̃˜ k−1
                                             (i)


6-b. Choose between xk∗(i) and x̃˜ k(i) as follows. Deﬁne
                                                                                       
                          p(zk|xk∗(i) )p(xk∗(i) |xk−1    (i)
                                                             )q(x̃˜ k(i) |xk−1
                                                                            (i)
                                                                                  z1:k)
            α = min 1
                           p(zk|x̃˜ k(i) )p(x̃˜ k(i) |xk−1
                                                       (i)
                                                            )q(xk∗(i) |xk−1(i)
                                                                                 z1:k)

      then sample v from U[0 1] and choose xk∗(i) if α > v and choose x̃˜ k(i) if
      α ≤ v.

    The result is then xk(i) , and we go to Step 7 as before.
    Note that α could be interpreted as the ratio of the non-normalized
weights for the two particles we are choosing from. Indeed
                                                           
                                 (i)          w(xk∗(i) )
                        α = αk = min 1
                                               w(x̃˜ k(i) )
120                                                      INSIDE VOLATILITY ARBITRAGE

                                 Filter Errors
        0.014
                 EPF
        0.012    EPF-MH

         0.01

        0.008
Error




        0.006

        0.004

        0.002

           0
                20   40   60    80   100    120   140   160   180
                                     Days

FIGURE 2.25 The EPF Without and with the Metropolis-Hastings Step is Applied to
the One-Dimensional Heston Model. The time series has a time step t = 1.0. The
improvement is hardly visible.


Applied to the same time series as in the previous paragraphs, the EPF with
the MH modiﬁcation will provide

                     ˆ EP F −MH = (0.019 0.499 0.040 −0.358)

and
                               MP EEP F −MH = 0.007753
                            RMSEEP F −MH = 0.001927
compared with the previous EPF

                                MP EEP F = 0.00762

                               RMSEEP F = 0.002269
As we can see from these results and Figure 2.25, there is only a marginal
improvement from the introduction of the MH step in the ﬁltering process.
This is in line with the ﬁndings in the literature, such as in [231].


Comparing Heston with other Models
We can now apply our inference tools to real market data in order to see
which model matches the true dynamics of the assets more closely, and there-
fore perform model identiﬁcation.
The Inference Problem                                                    121

The Models It is easy to generalize the Heston state-space model to other
stochastic volatility approaches. Indeed we could replace the Heston state
equation with
                                               p
                                                  √
                vk = vk−1 + (ω − θvk−1)t + ξvk−1 tZk−1            (2.26)

where p = 1/2 would naturally correspond to the Heston (square root)
model, p = 1 to the GARCH diffusion-limit model, and p = 3/2 to the 3/2
model. These models have all been described and analyzed in [177]. The new
state transition equation would therefore become
                                       
                                 p− 1       1     p− 1
        vk = vk−1 + ω − ρξµS vk−12 − θ − ρξvk−12 vk−1 t
                                            2
                                                                   (2.27)
                   p− 12     Sk                p
                                                  √
              + ρξvk−1 ln          + ξ 1 − ρ2 vk−1 t Z̃k−1
                            Sk−1

where the same choice of state space xk = vk is made.
   For the EKF, we will have
                                                
                             1     p− 3      1        1      p− 1
       Ak = 1 − ρξµS p −          vk−12 + θ − ρξ p +        vk−12 t
                             2               2        2
                                  
                    1       p− 32      Sk
            + p−       ρξvk−1 ln
                    2                Sk−1

and                                        √
                                         p
                          Wk = ξ 1 − ρ2 vk−1 t
as well as
                                      1
                                Hk = − t
                                      2
and
                                      √ √
                               Uk =    vk t
    The same time update and measurement update equations could be used
with the UKF or Kushner’s NLF.
    We could also apply the particle ﬁltering algorithm to our problem. Using
the same notations as before and calling
                                            
                                   1            (x − m)2
                   n(x m s) = √       exp −
                                   2πs             2s2

the normal density with mean m and standard deviation s, we will have
                                                             
             q(x̃k(i)|xk−1
                       (i)
                            z1:k) = n x̃k(i) m = x̂k(i) s = Pk(i)
122                                                         INSIDE VOLATILITY ARBITRAGE


as well as
                                                             √
                                               1
        p(zk|x̃k(i)) = n    zk m = zk−1 + µS − x̃k(i) t s = x̃k(i) t
                                               2

and                                                        p √ 
             p x̃k(i)|xk−1
                       (i)
                             = n x̃k(i) mx  s = ξ 1 − ρ2 xk−1
                                                            (i)
                                                                    t

with
                                    p− 1     1  (i) p− 12
            (i)                  (i)     2                                 (i)
      mx = xk−1 + ω − ρξµS xk−1            − θ − ρξ xk−1                  xk−1 t
                                                2
                     p− 1
                  (i)     2
           + ρξ xk−1        (zk−1 − zk−2)

and as before we have
                                                                
                                        p zk|x̃k(i) p x̃k(i)|xk−1
                                                               (i)
                                    (i)
                           wk(i) = wk−1                        
                                           q x̃k(i)|xk−1
                                                     (i)
                                                          z1:k

which provides us with what we need for the ﬁlter implementation.

The Results The preceding ﬁlters were applied to ﬁve years of S&P 500 time
series (1996 to 2001 ), and the ﬁltering errors were considered for the Heston,
the GARCH, and the 3/2 models. Daily index closing prices were used for
this purpose, and the time interval was set to t = 1/252 (see the following
table; Figures 2.26 through 2.32).


Filter and Model               MPE          RMSE

  EKF-Heston          3.58207e-05        1.83223e-05
 EKF-GARCH            2.78438e-05        1.42428e-05
   EKF-3/2            2.63227e-05        1.74760e-05
 UKF-Heston           3.00000e-05        1.91280e-05
 UKF-GARCH            2.99275e-05        2.58131e-05
   UKF-3/2            2.82279e-05        1.55777e-05
  EPF-Heston          2.70104e-05        1.34534e-05
 EPF-GARCH            2.48733e-05        4.99337e-06
   EPF-3/2            2.26462e-05        2.58645e-06
 UPF-Heston           2.04000e-05        2.74818e-06
 UPF-GARCH            2.63036e-05        8.44030e-07
   UPF -3/2           1.73857e-05        4.09918e-06
The Inference Problem                                                           123

                           EKF Errors for Various SV Models
         7e-05
                                                           Heston
         6e-05                                             GARCH
                                                           3/2
         5e-05

         4e-05
Errors




         3e-05

         2e-05

         1e-05

            0
                 0       200       400      600      800      1000     1200
                                           Days

FIGURE 2.26 Comparison of EKF Filtering Errors for Heston, GARCH, and 3/2
Models. The latter seems to perform better.

                                UKF Errors for Various SV Models

         0.00012

                                                              Heston
          0.0001                                             GARCH
                                                                 3/2
           8e-05
Errors




           6e-05


           4e-05


           2e-05


                 0
                     0    200        400      600      800      1000     1200
                                             Days

FIGURE 2.27 Comparison of UKF Filtering Errors for Heston, GARCH, and 3/2
Models. The latter seems to perform better.


    Two immediate observations can be made: On one hand, particle ﬁlters
have a better performance than do the Gaussian, which reconﬁrms what one
would anticipate. On the other hand, for most of the ﬁlters, the 3/2 model
seems to outperform the Heston model, which is in line with the ﬁndings
of Engle & Ishida [95]. Again, this shows that the ﬁltering process could be
124                                                            INSIDE VOLATILITY ARBITRAGE

                                EPF Errors for Various SV Models
         5.5e-05
          5e-05                                            Heston
                                                          GARCH
         4.5e-05                                              3/2
          4e-05
         3.5e-05
Errors




          3e-05
         2.5e-05
          2e-05
         1.5e-05
          1e-05
          5e-06
                   0      200        400      600      800     1000        1200
                                             Days

FIGURE 2.28 Comparison of EPF Filtering Errors for Heston, GARCH, and 3/2
Models. The latter seems to perform better.

                                 UPF Errors for Various SV Models
         2.8e-05

         2.6e-05

         2.4e-05

         2.2e-05
Errors




          2e-05

         1.8e-05

         1.6e-05
                        Heston
                       GARCH
         1.4e-05           3/2
         1.2e-05
                   0      200        400       600      800         1000    1200
                                              Days

FIGURE 2.29 Comparison of UPF Filtering Errors for Heston, GARCH, and 3/2
Models. The latter seems to perform better.

used not only for parameter estimation but also for model identiﬁcation. This
suggests further ﬁltering on other existing models, such as jump diffusion
[190]. Clearly, because of the non-Gaussianity of jump-based models, the
particle ﬁltering technique will need to be applied to them.
The Inference Problem                                                      125

                       Heston Model Errors for Various Filters
         7e-05
                                                           EKF
         6e-05                                             UKF
                                                           EPF
         5e-05                                             UPF

         4e-05
Errors




         3e-05

         2e-05

         1e-05

            0
                 200         400       600        800       1000    1200
                                          Days

FIGURE 2.30 Comparison of Filtering Errors for the Heston Model. PFs seem to
perform better.

                        GARCH Model Errors for Various Filters
         8e-05

         7e-05                                              EKF
                                                            UKF
         6e-05                                              EPF
                                                            UPF
         5e-05
Errors




         4e-05

         3e-05

         2e-05

         1e-05

            0
                 200          400       600        800       1000   1200
                                          Days

FIGURE 2.31 Comparison of Filtering Errors for the GARCH Model. PFs seem to
perform better.



Parameter Learning Revisited We tried a joint ﬁlter (JF) via the Kalman ﬁlter
where the parameters were given a prior distribution. We can now apply
the particle ﬁltering techniques to this framework as in [176] and [224]: We
simulate xk(i) at time step k from the prior p(xk|xk−1
                                                   (i)
                                                       ), and we also simulate
126                                                                 INSIDE VOLATILITY ARBITRAGE

                       3/2 Model Errors for Various Filters
         7e-05
                                                               EKF
         6e-05                                                 UKF
                                                               EPF
         5e-05                                                 UPF

         4e-05
Errors




         3e-05

         2e-05

         1e-05

            0
                 200      400          600            800       1000       1200
                                         Days

FIGURE 2.32 Comparison of Filtering Errors for the 3/2 Model. PFs seem to perform
better.


each parameter ψ(i) from its prior q(ψ) = N (mψ  sψ ) where these mean and
standard deviations are to be determined.
We then update the priors by incorporating the observation zk
                                                          
                 p xk(i) |zk ∝ p zk|xk(i)  ψ(i) p xk(i) |xk−1
                                                           (i)


and similarly
                       p(ψ(i) |zk) ∝ p(zk|xk(i)  ψ(i) )p(ψ(i) |xk−1
                                                                 (i)
                                                                     )
and we obtain the posterior distributions. Calling
                                               
                               p zk|xk(i)  ψ(i) wk−1 (i)
                     (i)
                   wk =                              
                              Nsims         (i)   (i)     (i)
                              i=1 p zk|xk  ψ            wk−1

We now have the posteriors of xk and ψ, and we can simulate them for the
following step via a Metropolis-Hastings (MH) accept/reject technique with
the proposal distribution q(ψ mψ  sψ ) with
                                               Nsims
                                                
                                    mψ =               wk(i) ψ(i)
                                                i=1

and
                                       Nsims
                                                             2
                                sψ =           wk(i) ψ(i) − mψ
                                       i=1
The Inference Problem                                                           127

TABLE 2.2 The True Parameter Set  ∗ Used for Data Simulation

∗    ω∗ = 0.10     θ∗ = 10.0    ξ∗ = 0.03     ρ∗ = −0.50


TABLE 2.3 The Initial Parameter Set 0 Used for the Optimization Process

0    ω0 = 0.15    θ0 = 15.0    ξ0 = 0.02    ρ0 = −0.50


The MH step will consist of the following. We accept the simulation point
  (i)                                     (i)
ψ̃ from q() with a probability α(ψ(i)  ψ̃ ), where ∀i between 1 and Nsims
we have                                                  
                                                (i)             (i)
                                       p   ψ̃     |z k  /q ψ̃
                     (i)
                 (i)
            α ψ  ψ̃       = min 1.0  (i)   (i)  
                                          p ψ |zk /q ψ

In practice, we simulate a uniform random variable u and accept the sim-
                (i)
ulated point ψ̃ if α > u, and reject it (and keep ψ(i) ) otherwise. We keep
simulating alternatively the state variable and each parameter by incorpo-
rating the observations at each step and wait for the parameters to converge
to their ideal mean.
     It is important to note that this joint ﬁltering differs from the usual
MCMC techniques, such as in [156] and [92], where we update the particles
by incorporating all observations at each simulation step.


The Performance of the Inference Tools
We have applied various Gaussian and particle-based ﬁlters to daily historic
data. None of the methodologies performed very well at that frequency.26
We now try to analyze the reasons.
     A known weakness of optimization algorithms is the following. The
higher the number of parameters, the worse the performance of the algo-
rithm. This means that a one-parameter optimization should perform best.
To test this, we simulate 5000 points27 via the Heston model with a param-
eter set  ∗ as shown in the following (also see Figure 2.33).

26 Note that in this section we are not checking the validity of the assumption that

the real stock market follows a Heston (or another) process. We assume we know
the process exactly and try to recover the embedded parameters.
27 We made the 5000 daily simulations directly from the discretized SDE with a

t = 1/252 . We also tried simulating 5 000 000 points with t = 1/252 000
and sampling 5000 daily points from there. Although the second method is more
128                                                     INSIDE VOLATILITY ARBITRAGE

                      Simulated Prices via Heston
200

180

160

140

120

100

 80

 60
                                               Stock Price
 40
      0   500 1000 1500 2000 2500 3000 3500 4000 4500 5000

FIGURE 2.33 Simulated Stock-Price Path via Heston Using  ∗ . This is an artiﬁcial
time series following the Heston model.



    We use a drift of µS = 0.025 and a time step t = 1/252 as before. In
order to get the best performance, we ﬁx all parameters except one. For
instance, to obtain ω̂ we ﬁx θ = 10.0 ξ = 0.03 ρ = −0.50 µS = 0.025 ; we
choose a reasonable initial point ω0 and then optimize upon ω only. We
choose an initial parameter set 0 as will be shown. The results are displayed
in Table 2.4.
                                         
TABLE 2.4 The Optimal Parameter Set .
                                     ˆ The estimation is performed individually
for each parameter on the artiﬁcially generated time series. Particle ﬁlters use 1000
simulations.

Filter       ω̂            θ̂            ξ̂            ρ̂
EKF       0.098212    10.188843     0.052324        −0.873571
UKF       0.107281    10.089381     0.000001        +0.598434
EPF       0.098287    10.130531     0.044437        −0.827729
UPF       0.100581    10.221816     0.051902        −0.487695



correct, the difference in results was small, which means that the Euler discretization
is sufﬁciently accurate at the daily level. This is in agreement with results found by
Elerian [92].
The Inference Problem                                                            129

                                Log Likelihood

–46000

–47000                                           Log likelihood
                                                     Optimum
–48000

–49000

–50000

–51000

–52000

–53000
         0      0.2       0.4       0.6          0.8        1     1.2
                                   Omega

FIGURE 2.34 f (ω) = L(ω θ̂ ξ̂ ρ̂) Has a Good Slope Around ω̂ = 0.10.


     It is interesting to note that the estimation of the volatility-drift parame-
ters (ω θ) could be done fairly well via EKF.28 This makes sense because the
dependence on these parameters is linear.
     The estimation of volatility and correlation parameters (ξ ρ) is not as
straightforward. This could be seen by plotting the likelihood L() as a
function of ω, θ, ξ, and ρ separately. We ﬁx three parameters to their optimal
values and plot L() as a function of the last one. We observe in Figures 2.34
through 2.37 that the likelihood function is fairly easy to optimize for (ω θ).
However, the function is very ﬂat around the optimal ξ and ρ. Therein lies
the difﬁculty of ﬁnding the optimums!

Sample Size It seems therefore that the estimation is inefﬁcient for the
parameter ξ no matter which ﬁlter we use. The issue is that of inefﬁciency
(large error variance) for this given sample size. This is indeed one of the
shortcomings of maximum likelihood estimators (MLE). For a given sample
size, they can very well be inefﬁcient and even have a bias.29 The choice
of the ﬁlter will not solve this problem. However, under minimal regularity

28 A joint estimation of (ω θ) based on the same data set with known (ξ ρ) provides

(ω̂ = 0.117889 θ̂ = 11.996760).
29 A known and simple example for the bias of MLEs is that of estimating the

variance of a Gaussian sequence of a ﬁnite size (x1  ... xN ). The ML estimate
                            N
for the mean is µ̂N = N  1
                            k=1 xk, and the ML estimate for the variance is
130                                                          INSIDE VOLATILITY ARBITRAGE

                                 Log Likelihood

–52100

–52200                                            log-likelihood
                                                        optimum
–52300

–52400

–52500

–52600

–52700

–52800
         4        6         8         10           12         14     16
                                     Theta

FIGURE 2.35 f (θ) = L(ω̂ θ ξ̂ ρ̂) Has a Good Slope Around θ̂ = 10.0.

                                 Log Likelihood

–52100

–52200

–52300

–52400

–52500

–52600

                                             Log likelihood
–52700
                                               Optimum

–52800
         0       0.2       0.4        0.6          0.8        1      1.2
                                       Xi

FIGURE 2.36 f (ξ) = L(ω̂ θ̂ ξ ρ̂) Is Flat Around ξ̂ = 0.03.



            N
            k=1(xk − µ̂N ) . The latter ML estimation is biased, and the correct
v̂N = N 1                 2
                                    N
                                    k=1(xk − µ̂N ) . However, it is clear that as
                              1
estimation would be v̂ˆ N = N−1                   2

N → +∞ we have v̂N ≈ v̂ˆ N and the bias gradually disappears.
The Inference Problem                                                                131

                              Log Likelihood
–52750

                                               log-likelihood
–52755                                              optimum

–52760


–52765


–52770


–52775


–52780
      –1     –0.8    –0.6   –0.4   –0.2    0        0.2     0.4   0.6
                                   Rho

FIGURE 2.37 f (ρ) = L(ω̂ θ̂ ξ̂ ρ) Is Flat and Irregular Around ρ̂ = −0.50.

conditions, MLEs are consistent and therefore asymptotically converge to
the correct optimum. This means that the sample size is key. To test this, we
can choose larger samples of N = 50 000 , N = 100 000 , and N = 500 000
points and rerun the simplest ﬁlter, namely, the EKF. As expected, the opti-
mum of the likelihood function becomes closer and closer to ξ∗ . This can be
seen in Figures 2.38 to 2.41 as well as in Table 2.5. The same exact observa-
tions could be made for the correlation parameter ρ, and the results are also
displayed in Table 2.5. The likelihood graphs are omitted in the interest of
brevity.
    As for the drift parameters ω and θ, the convergence was good even for
N = 5000, as previously observed. Unfortunately, in reality we have limited
historic data. Even at a daily frequency, 50 000 points would correspond to
200 years!
    One possibility would be to use intra-day data; however, that assumes
that the behavior of the stock price is the same intra-day (which is reasonable
considering we started with a continuous SDE). Moreover, clean intra-day
data is usually not readily available and needs preprocessing.
                                                                    Therefore,
having p parameters in the optimal parameter set ˆ N = ˆ N [j ]            for
                                                                            1≤j ≤p
a sample size N, we have for each parameter [j ]
                        "                               #
        lim ˆ N [j ] | [k] =  ∗ [k]; 1 ≤ k ≤ p; k = j =  ∗ [j ] (2.28)
         N→+∞

What is more, this is true for any valid initial value 0 [j ], which means the
MLE is robust.
132                                                         INSIDE VOLATILITY ARBITRAGE

                                    Log Likelihood
 –45694

–45694.5

 –45695

–45695.5

 –45696

–45696.5

 –45697

–45697.5                                       Log likelihood
  –45698
        0.02 0.03     0.04   0.05    0.06   0.07     0.08     0.09   0.1
                                      Xi

FIGURE 2.38 f (ξ) = L(ω̂ θ̂ ξ ρ̂) via EKF for N = 5000 Points. The true value is
ξ∗ = 0.03.
TABLE 2.5 The Optimal EKF Parameters ξ̂ and ρ̂ Given a Sample Size N. The true
parameters are ξ∗ = 0.03 and ρ∗ = −0.50. The initial values were ξ0 = 0.02 and
ρ0 = −0.40.
   N           ξ̂            ρ̂
 5000      0.052324     −0.873571
50 000    0.036463     −0.608088
100 000   0.033400     −0.556868
500 000   0.031922     −0.532142



Joint Estimation of the Parameters Let us now assume that we do not know
any of the parameters; we choose an initial set 0 and test the consistency
of the MLE. We shall apply the EKF to the data and take the same true
parameter set  ∗ as in the previous section. We assume that µS = 0.025 is
known; otherwise, it could be estimated together with the model parameters.
     As previously mentioned, the likelihood function becomes ﬂat and there-
fore harder to maximize under a higher number of parameters. The
convergence of the estimator will therefore be slower. Despite this, we can
observe in Table 2.8 the asymptotic convergence of the estimator even under
the joint estimation of all parameters. We have now

                                     lim ˆ N =  ∗                              (2.29)
                                    N →+∞
The Inference Problem                                                      133

TABLE 2.6 The True Parameter Set  ∗ Used for Data Generation

∗       ω∗ = 0.10        θ∗ = 10.0   ξ∗ = 0.03   ρ∗ = -0.50


TABLE 2.7 The Initial Parameter Set 0 Used for the Optimization Process

0    ω0 = 0.15       θ0 = 15.0       ξ0 = 0.02   ρ0 = -0.40

                                                       
TABLE 2.8 The Optimal EKF Parameter Set ˆ Given a Sample Size N. The four
parameters are estimated jointly.

     N               ω̂               θ̂          ξ̂           ρ̂
    5000       0.150854         15.294576     0.266175     −0.128835
  50 000      0.126387         12.748852     0.020521     −1.000000
 100 000      0.136023         13.700906     0.044353     −0.439961
 500 000      0.100097         10.030336     0.061688     −0.257305
1 000 000    0.105264         10.548642     0.043818     −0.356234
2 000 000    0.103183         10.334876     0.039767     −0.374677
4 000 000    0.105292         10.538019     0.043288     −0.347562
5 000 000    0.101097         10.118951     0.028588     −0.514346



which corresponds to the generalization of (2.28) in the previous section.
     We ran other ﬁlters (UKF, EPF, UPF) on the same data set and observed
only marginal improvement. The results are omitted in the interest of brevity.
It therefore seems that the fundamental issue is related to the slow conver-
gence of the MLEs regardless of the ﬁltering method.
     A√related issue previously mentioned is the size of the observation error
Uk ∝ t, which is large compared with the observation function Hk ∝ t
for daily observations.

Error Size Revisited As previously mentioned, this underlines the more fun-
damental problem for the SV estimation: By deﬁnition, volatility represents
the noise of the stock process. Indeed if we had taken the spot price Sk as
the observation and the variance vk as the state, we would have
                                             √ √
                     Sk+1 = Sk + SkµS t + Sk vk tBk

we would then have an observation function gradient H = 0 and the system
would be unobservable! It is precisely because we use a Taylor second-order
134                                                       INSIDE VOLATILITY ARBITRAGE

                                  Log Likelihood

–457100
–457101                                        Log likelihood
–457102
–457103
–457104
–457105
–457106
–457107
–457108
–457109
–457110
      0.02       0.025     0.03       0.035        0.04   0.045   0.05
                                        Xi

FIGURE 2.39 f (ξ) = L(ω̂ θ̂ ξ ρ̂) via EKF for N = 50 000 Points. The true value is
ξ∗ = 0.03.




                                  Log Likelihood
–914104

–914106

–914108

–914110

–914112

–914114

–914116
                                               Log likelihood
–914118
       0.02     0.025     0.03        0.035        0.04   0.045   0.05
                                        Xi

FIGURE 2.40 f (ξ) = L(ω̂ θ̂ ξ ρ̂) via EKF for N = 100 000 Points. The true value
is ξ∗ = 0.03.
The Inference Problem                                                           135

                                  Log Likelihood

–4.56811e+06
–4.56812e+06
–4.56812e+06
–4.56812e+06
–4.56813e+06
–4.56814e+06
–4.56814e+06
–4.56814e+06
–4.56815e+06
–4.56816e+06                                  Log likelihood

–4.56816e+06
           0.02     0.025     0.03    0.035    0.04     0.045    0.05
                                        Xi

FIGURE 2.41 f (ξ) = L(ω̂ θ̂ ξ ρ̂) via EKF for N = 500 000 Points. The true value
is ξ∗ = 0.03.


expansion
                                            1
                            ln(1 + x) ≈ x − x 2
                                            2
that we obtain access to vk through the observation function. However, in
                             
                     Sk+1            1         √ √
                ln          = µS − vk t + vk tBk
                      Sk             2
                                                               30
the error remains dominant as the ﬁrst order of the expansion.
                                                        √         Harvey,
Ruiz, and Shephard [130] use the approximation t = o( t) and take
                     
                         Sk+1                            
             zk = ln ln2          ≈ ln(vk) + ln(t) + ln Bk2
                          Sk

  Note that under this form EKF would blow up because zk− = h(vk 0) =
−∞. They therefore use the fact that E[ln(Bk2 )] = −1.27 and stdev[ln(Bk2 )] =

30 Note that this is different from a variance Swap where we work with the expected

values. The approximation is perfectly valid if for the return R = S/S we write
                                                 1
                             E[ln(1 + R) − R] ≈ − v
                                                 2
but again, the approximation breaks if we work for one sample path.
136                                                       INSIDE VOLATILITY ARBITRAGE

                                                 
TABLE 2.9 The Optimal EKF Parameter Set ˆ via the HRS Approximation Given
a Sample Size N . The four parameters are estimated jointly.

   N            ω̂            θ̂            ξ̂              ρ̂
 5000       0.722746     71.753861      0.044602        −1.000000
50 000     0.234110     23.575193      0.028056        −1.000000
100 000    0.150512     15.186113      0.017748        −1.000000
500 000    0.109738     11.020391      0.027140        −0.531481


  √
π/ 2 and consider the Gaussian approximation
                                     π
                     ln Bk2 ∼ −1.27 + √ N (0 1)
                                        2
which may or may not be valid. We call this approximation Harvey-Ruiz-
Shephard (HRS) and apply it to the same case as in the previous paragraphs.
As can be seen in Table 2.9, the approximation seems to be valid for our
example. Note that UKF would not have this problem because we would
work with the real nonlinear function z = h(x u). However, we would still
deal with logs of very small quantities, which could be numerically unstable.
    Another way of tackling the same equation would be via a particle ﬁlter,
where
                            
                        Sk+1       1         1
                    
           zk = ln ln            ≈ ln(vk) + ln(t) + ln(|Bk|)
                          Sk         2         2
and as stated in [10] the density of ln(|Bk|) is
                                   f (x) = 2ex n(ex )
with n() the normal density.31
Testing the same data set provides Table 2.10, which does not seem to
improve upon the KF.
    It is important to note that even if we took the example of the Heston
model, the same issues are true for any stochastic volatility model of type
                                                p
                                                    √
                vk = vk−1 + (ω − θvk−1) t + ξvk−1 tZk−1

31 It is easy to see that if X is a standard normal variable, then the CDF of ln(|X|) is
                                                               
            F (x) = P (ln(|X|) ≤ x) = P |X| ≤ ex = P −ex ≤ X ≤ ex
therefore                               
                       F (x) = N ex − N −ex = 2N(ex ) − 1
and the density is determined by taking the derivative with respect to x as usual.
The Inference Problem                                                       137
                                               
TABLE 2.10 The Optimal PF Parameter Set ˆ Given a Sample Size N. The four
parameters are estimated jointly.

 N         ω̂            θ̂            ξ̂             ρ̂
5000   0.147212     14.999999       0.070407       -0.555263


including the GARCH diffusion and the 3/2 models. As previously men-
tioned, even if the transition equation is different here, the observation equa-
tion remains the same. Applying the EKF, we have the transition matrix and
noise
                                                    
                                1     p− 32      1          1    p− 1
        Ak = 1 − ρξµS p −            vk−1 + θ − ρξ p +          vk−12 t
                                2                2          2
                                     
                       1       p− 32       Sk
              + p−         ρξvk−1 ln
                       2                Sk−1
                                             p
                                                 √
                            Wk = ξ 1 − ρ2 vk−1 t
However, we still have the observation matrix and noise
                                          1
                                    Hk = − t
                                          2
and
                                 √ √
                            Uk = vk t
                               √ 
and the same problem of t = o   t still exists at observation level for
any value of p.
     Another point that should be mentioned is that even if ξ and ρ are sep-
arately harder to estimate than ω and θ, the product ρξ appears in the equa-
tions at the same level. Indeed, as we just saw, in Ak only the product ρξ is
available. However, at the noise level Wk, we can distinguish the two param-
eters ρ and ξ. For instance, in our previous EKF joint estimation table, we
had for 50 000 points ξ̂ ≈ 0.020521 , ρ̂ ≈ −1.0000 and again, the individual
estimations of ξ and ρ remained far from their true values. However, we
have ξ̂ρ̂ ≈ −0.020521, which is much closer to ξ∗ ρ∗ = −0.015. Interestingly,
the product ρξ is what we need to determine the skewness of the distribu-
tion.32 However, we do need to determine ξ alone to obtain the distribution
kurtosis.
     It is also worth noting that in a GARCH framework, we do not have
this problem of poor observability for the discrete case. In fact, at each

32 This remark will be addressed in the following chapter.
138                                                    INSIDE VOLATILITY ARBITRAGE


TABLE 2.11 Real and Optimal Parameter Sets Obtained via NGARCH MLE. The
5000 points were generated via the one-factor NGARCH with daily parameters.

            ω            α          β         c

∗    0.00000176      0.0626     0.89760     0.00
ˆ    0.00000200      0.0530     0.89437     0.05



point in time, vk is known exactly as a function of previous observations.
Only later, we go to the two-factor diffusion limit, as Nelson [194] does.
However, we have to bear in mind that this GARCH diffusion limit is a
very special case of the stochastic volatility problem, since it misses the sec-
ond source of randomness in the discrete case. As Corradi [61] explains, a
discrete GARCH model may very well converge toward a one-factor dif-
fusion process without stochastic volatility. Interestingly, when discretizing
the one-factor continuous process, we can recover GARCH, whereas when
discretizing the two-factor continuous process we will not obtain GARCH
but the two-factor discrete process we have been working with.
    This explains why GARCH MLE (without ﬁltering) can recover param-
eters used in a simulated time series of length 5000 created via a one-factor
GARCH process, whereas it cannot recover the diffusion-limit parameters
from a time series created via a two-factor stochastic volatility process as
accurately.33 One can see this in Tables 2.11 and 2.12.
    This also explains why estimating ω and θ alone works so much better
with 5000 points. After all, if we had ξ = 0 and therefore a deterministic

33 Needless to say, whether the equations are written via yearly (stochastic volatility

convention) or daily (GARCH convention) parameters will not change√the nature of
the problem. It would be tempting to try to get around the t = o( t) problem
by rewriting the equations via daily parameters µdS = µS t and vkd = tvk as well
as ωd = t 2 ω, θd = t θ and ξd = t ξ with ρ remaining unchanged. Dropping the
superscript d for simplifying the notations, we shall have
                                              1     √
                        ln Sk+1 = ln Sk + µS − vk + vkBk
                                              2
                                                  √
                           vk+1 = vk + ω − θvk + ξ vkZk
which seems to have eliminated the difﬁculty. However, now we have
                                          √
                                  vk = o( vk)
which was not the case with yearly variances, and the same poor observability
problem arises again! We therefore see that the heart of the difﬁculty is a low
signal-to-noise ratio (SNR) for the problem at hand.
The Inference Problem                                                         139

TABLE 2.12 Real and Optimal Parameter Sets Obtained via NGARCH MLE as well
as EKF. The 5000 points were generated via the two-factor GARCH diffusion limit
with annual parameters.

                 ω         θ             ξρ
     ∗      0.100000     10.00        −0.015
ˆ
 GARCH      0.063504      6.84        −0.019
  ˆ EKF     0.148000     14.48        −0.023



instantaneous variance, we would have no observability problem to talk
about. Indeed, vt would be exactly known at each time step, as is the case in
a GARCH framework.
     Finally, we can now see better why the estimation worked fairly well
   √ with 200 points if t = 1 year—simply because we do not have t =
even
o( t) and the observability is much more accurate. Nevertheless, with such
a large t, other problems, such as strong nonlinearity and the nonapplica-
bility of the Grisanov theorem arise. Not to mention the fact that 200 points
would correspond to 200 years of data!

High-Frequency Data Given that the results seem to converge for a large num-
ber of data points, one idea would be to use a higher sampling frequency.
If instead of using daily data we sample every ﬁve seconds, then with a
ten-year range we will have 10 × 252 × 6.5 × 60 × 60 ÷ 5 = 11 793 600 data
points, which is very sufﬁcient for our MLEs. For testing the use of high-
frequency data, we can generate via Monte Carlo 5 000 000 points with a
t = 1/252 000 , which corresponds to 20 years. We obtain the results in
Table 2.13. Both rows have reasonable results. It is, however, notable that
the EKF/HRS method seems to perform better than the plain EKF.
     It may seem a little surprising that for the same time period [0 T ] div-
iding t by 1000 and multiplying N by 1000 helps us. Why don’t the

                                              
TABLE 2.13 The Optimal Parameter Set ˆ for 5 000 000 Data Points. The sam-
pling is performed 1000 times a day and therefore the data set corresponds to 5000
business days. The four parameters are estimated jointly.

                     ω̂           θ̂              ξ̂         ρ̂

  EKF         0.090280     9.019962           0.042984   −0.283236
EKF/HRS       0.092372     9.224421           0.030951   −0.507763
140                                                       INSIDE VOLATILITY ARBITRAGE


two operations cancel one another? Observing the negative of log-likelihood
function in an EKF framework
                                          N
                                                          z̃k2
                      φ(ω θ ξ ρ) =           ln(Fk) +
                                          k=1
                                                           Fk

with
                                  z̃k = zk − h(x̂−
                                                 k  0)
and
                                Fk = HkP−  t         t
                                        k Hk + U k U k
We can see that considering ﬁrst-order terms, dividing t by 1000, or equiva-
lently multiplying it by = 1/1000 , will cause the transition
                                                           √ matrix Ak to be
unchanged, the transition noise Wk to be multiplied by         , the observation
matrix
   √    H k to be multiplied by , and the observation  noise U k to be multiplied
by     . Furthermore, Ak being unchanged will cause P−       and   Pk to remain
                                                           √
                                                           k
unchanged as well. Therefore, z̃k will be multiplied by       , the term Fk will
be multiplied by , and the fraction used in the log-likelihood sum will remain
the same. This causes the sum φ(ω θ ξ ρ) to be higher by a factor 1/ , which
shows that higher frequency does allow us to obtain a higher likelihood
function and therefore better convergence. This is in agreement with what
we observed in the above test.

The Frequency of the Observations Note that the ideal stochastic differential
equations are supposed to be continuous; however, we only have discrete
observations obtained via an Euler scheme. This introduces a discretization
error that may become important as the time interval t becomes larger.
As mentioned in [92], [164], and [201], the solution would be to ﬁll the
missing data via additional simulations in time: For the observation time
step 1 ≤ k ≤ N, the simulation 1 ≤ i ≤ Nsims , and the additional time step
1 ≤ j ≤ M , we would have the particles
                                               $        $
          (i)      (i)             (i)   t         (i)    t (i)
        x̃ j = x̃ j −1 + ω − θx̃ j −1        + ξ x̃ j −1      Z
          k+ M     k+ M           k+ M   M         k+ M    M k+ Mj
and the observation
                                                    
                         M                         M
                                   1            t             t
           zk+1 = zk +          µS − x̃k+ j        +      x̃k+ j    Bk
                         j =1
                                    2    M       M    j =1
                                                               M M



where each Z (i) j has a correlation ρ with Bk. Naturally, the innovations Zl
              k+ M
are mutually uncorrelated. However, as discussed in [164], the discretization
error is small when t = 1/252, which is the case we are dealing with.
The Inference Problem                                                        141

TABLE 2.14 Mean and (Standard Deviation) for the Estimation of Each Parameter
via EKF Over P = 500 Paths of Lengths N = 5000 and N = 50 000 . The true values
are (ω∗ = 0.10 θ∗ = 10 ξ∗ = 0.03 ρ∗ = −0.50) .

                        ω̂              θ̂                   ξ̂         ρ̂

N = 5000     0.11933899 11.92271488 0.056092146 −0.34321724
            (0.098995729) (9.673829518) (0.049741887) (0.297433861)
N = 50 000 0.102554592 10.26233092      0.04383931 −0.351998284
            (0.027020734) (2.706564396) (0.013004526) (0.074998408)



Sampling Distribution Even if in practice we deal with one historic path, we
should determine the distribution of the optimal parameter set as follows.
We simulate P = 500 paths of length N = 5000 and estimate for each path
j the optimal set ˆ (j ). We then can estimate

                                            P −1
                                  ˆ¯ = 1
                                             ˆ (j )
                                       P j =0

as well as the variance
                                      P
                                       −1
                                ˆ = 1
                             V ()                    ˆ¯ 2
                                           (ˆ (j ) − )
                                    P j =0

     In this way we will know how the estimator performs on average and
how far we could be from this average. The distribution of the parameter set
around its mean is referred to as the sampling distribution [168]. As we can
see in Table 2.14, the average-estimated parameter set is closer to the true set
than the one-path-estimated set we were considering in the previous section.
However, the corresponding standard deviation is quite high and we could
very well get poor results as previously seen.
     From Figures 2.42 to 2.45, we can see that for this data length N and
this sample size P the parameters ω and θ are determined via EKF in a
fairly unbiased way. However, the estimator is not efﬁcient and has a large
standard deviation. As for ξ and ρ, we have both bias and inefﬁciency. This is
not surprising given the results of the previous paragraphs. We obtained good
results for (ω θ) when estimated alone, and not so good results for (ξ ρ). As
mentioned, classical ﬁltering theory works well when the parameters affect
the drift of the observation and not the noise. This causes a slow convergence
problem for all our parameters. But this is doubly true for (ξ ρ) since they
142                                                       INSIDE VOLATILITY ARBITRAGE



                                Omega

140
                                                     Density
120                                                Histogram

100

 80

 60

 40

 20

  0
      0      0.05       0.1       0.15       0.2        0.25      0.3

FIGURE 2.42 Density for ω̂ Estimated from 500 Paths of Length 5000 via EKF. The
true value is ω∗ = 0.10. The sampling distribution is fairly unbiased, but is inefﬁcient.




                                 Theta
140

                                                     Density
120                                                Histogram

100

 80

 60

 40

 20

  0
      0        5         10        15        20          25       30

FIGURE 2.43 Density for θ̂ Estimated from 500 Paths of Length 5000 via EKF. The
true value is θ∗ = 10 . The sampling distribution is fairly unbiased, but is inefﬁcient.
The Inference Problem                                                             143


                                 Xi
80

70                                                Density
                                               Histogram
60

50

40

30

20

10

 0
     0   0.02    0.04   0.06    0.08    0.1     0.12   0.14    0.16

FIGURE 2.44 Density for ξ̂ Estimated from 500 Paths of Length 5000 via EKF. The
true value is ξ∗ = 0.03 . The sampling distribution is inefﬁcient and even has a bias.




                                 Rho
250
                                                Density
                                               Histogram
200


150


100


 50


  0
   –1    –0.8    –0.6    –0.4   –0.2      0      0.2    0.4    0.6

FIGURE 2.45 Density for ρ̂ Estimated from 500 Paths of Length 5000 via EKF. The
true value is ρ∗ = −0.50 . The sampling distribution is inefﬁcient and even has a bias.
144                                              INSIDE VOLATILITY ARBITRAGE


affect the “noise of the noise.” As previously observed, the bias and inefﬁ-
ciency will disappear as N → +∞, as is the case for any MLE estimator.
The biases and the standard deviations are smaller for N = 50 000 than for
N = 5000 as we can see in Table 2.14.


The Bayesian Approach
Even if our method of choice is the classical one, it is worth going over the
Bayesian philosophy and methodologies, which have some similarities but
also some fundamental differences compared with our point of view. The
MLE methodology is a classical (frequentist) approach, in which we assume
that there is a set of unknown but ﬁxed parameters. Alternatively, in the
Bayesian approach the parameters are considered as random variables with
a given prior distribution. We then use the observations (the likelihood) to
update these distributions and obtain the posterior distributions.
     It would seem that in order to be as objective as possible and to use the
observations as much as possible, one should use priors that are noninfor-
mative. However, this sometimes creates degeneracy issues and one should
choose a different prior for this reason.
     Markov Chain Monte Carlos (MCMC) include the Gibbs sampler as
well as the Metropolis-Hastings (MH) algorithm. The theoretical justiﬁca-
tion is provided by the Hammersley-Clifford theorem and the ergodic aver-
aging theorem. Details can for instance, be found in [34] or [163].
     Brieﬂy, the Hammersley-Clifford theorem states that having a param-
eter set , a state x, and an observation z, we can obtain the joint distri-
bution p( x|z) from p(|x z) and p(x| z), under some mild regularity
conditions. Therefore by applying the theorem iteratively, we can break a
complicated multidimensional estimation problem into many simple one-
dimensional problems. Creating a Markov Chain  (i) via a Monte Carlo
process, the ergodic averaging theorem states that the time average of a par-
ameter will converge toward its posterior mean.

The Gibbs Sampler The Gibbs sampler consists of iterative simulations from
the posterior distributions. Having a parameter set

                                = (j )1≤j ≤J

a hidden state
                               x = (xk)1≤k≤N
and an observation set
                               z = (zk)1≤k≤N
The Inference Problem                                                          145

     We proceed as follows: Initialize the state vector and the parameter set
to x (0) and  (0) , and choose the prior distribution p(ψ). For each simulation
index i between 1 and Nsims , do:
1. Simulate x (i) as
                               x (i) ∼ p(x|z  (i−1) )
2. Simulate each parameter from its posterior conditional on partially
updated parameters: For each j between 1 and J

               j(i) ∼ p(ψ|z x 0(i)  ... j(i)    (i−1)        (i−1)
                                                 −1  j +1  ... J     )

with
                    p(ψ|z x ...) ∝ p(z|x ψ ...)p(x|ψ)p(ψ)
3. Go back to Step 1 and stop after i reaches Nsims .
4. Calculate the posterior mean for each parameter after allowing a “burn-
in" period
                                            Nsims
                                    1        (i)
                         ˆ j =                   
                                Nsims − i0 i=i +1 j
                                                    0

     with, for instance, i0 = Nsims /10.
     It is important to note that in some cases, the prior and the posterior
distributions are the same and only differ in parameters. In this case the
priors are referred to as conjugate priors.
     The justiﬁcation is available for instance in [55] and can be summed up
as follows: Having two random variables (X Y ), we can write
                                       
                              E[X] = xp(x)dx

but                                                     
           p(x) =       p(x|y)p(y)dy =           p(x|y)       p(y|ξ)p(ξ)dξdy

therefore, we have                      
                              p(x) =        p(ξ)h(x ξ)dξ

with                                    
                           h(x ξ) =        p(x|y)p(y|ξ)dy

which shows that p(x) is a stationary solution for the foregoing integral
equation, and h(x ξ) corresponds to the limit transition density.
146                                                     INSIDE VOLATILITY ARBITRAGE


    Similarly, it is possible to show that for a sequence (xk) generated from
a Gibbs Sampler, we have
                                
                   P (xk|x0 ) = P (xk−1|x0 )P (xk xk−1)dxk−1

It is therefore possible to see that as k → +∞ we have

                               P (xk|x0 ) → p(xk)

and
                           P (xk|xk−1) → h(xk xk−1)
which are the stationary marginal and transition densities.

A Simple Illustration For a simple illustration, consider a sequence of normally
distributed data points z with an unknown mean µ and an unknown variance
1/λ. The parameter λ is often referred to as the precision of the distribution.
One possible way to proceed is to choose uniform (noninformative) priors
p(µ) and p(λ) ∝ 1/λ and use the known results [34]

                              p(µ|z σ) = N (Z̄ σ)

with N (m s) the normal distribution with mean m and standard deviation s
and
                                        N
                                     1 
                                Z̄ =       zk
                                     N k=1

as well as                                    
                                                  N S
                            p(λ|z µ) = G          
                                                  2 2
with G(a A) the previously described gamma distribution34 and
                                     N
                                     
                                S=         (zk − µ)2
                                     k=1

and again                                 √
                                    σ = 1/ λ
We therefore know both posterior distributions and can simulate from them
iteratively and perform Gibbs sampling as described above.

34 Note that G(a A) = P(a Ax) to use our previous notations.
The Inference Problem                                                       147

                  Gibbs Sampler for the Normal Mean
10.6
                                                      mu
10.4

10.2

10

 9.8

 9.6

 9.4

 9.2
       0   1000 2000 3000 4000 5000 6000 7000 8000 9000 10000
                             Simulation

FIGURE 2.46 Gibbs Sampler for µ in N(µ σ). The true value is µ∗ = 10.0.

    For testing this, we generated a time series of 1000 Gaussian points with
a mean of µ∗ = 10 and a standard deviation of σ∗ = 5. We applied the Gibbs
sampler via Nsims = 10 000 simulations and considered the average between
the 1000th and 10 000th simulations. We chose initial values µ0 = 7.0 and
σ0 = 3.0 and obtained
                                µ̂ = 9.943416
                                   σ̂ = 4.816300
We ploted the simulations from the posteriors in Figures 2.46 and 2.47.

The Metropolis-Hastings Algorithm The Gibbs sampler is fast and simple when
the posterior distributions are known and easy to sample from. However, in
practice, and in particular for our stochastic volatility problem, this often is
not the case. We assume for simplicity that we do know the posteriors for
the parameters and therefore can use the Gibbs sampler for them; however,
we cannot do the same for the latent state.
      In this case, the Metropolis-Hastings (MH) algorithm approach can be
used for x as follows: Initialize the state vector and the parameter set to
x (0) and  (0) and choose the prior distribution p(ψ). Also choose a proposal
distribution q(x|z ) for the state. For each simulation index between 1 and
Nsims do:

1-a. Simulate from the proposal distribution
                                    x (i) ∼ q(x|z )
148                                                            INSIDE VOLATILITY ARBITRAGE

               Gibbs Sampler for the Normal Standard Deviation
5.8
                                                       Sigma
5.6

5.4

5.2

5

4.8

4.6

4.4
        0    1000 2000 3000 4000 5000 6000 7000 8000 9000 10000
                               Simulation

FIGURE 2.47 Gibbs Sampler for σ in N(µ σ). The true value is σ∗ = 5.0.


1-b. Compare with a randomly generated uniform random variable u the
     ratio
                        
                             p(x (i) |z )/q(x (i) |z )
                α = min 1
                           p(x (i−1) |z )/q(x (i−1) |z )

       and accept x (i) if α > u; otherwise, reject it and set x (i) = x (i−1) .
    2. Simulate  (i) via a Gibbs sampler.
    3. Go back to Step 1-a and continue until i reaches Nsims .
    4. Calculate the posterior mean for each parameter after allowing a
       “burn-in” period

                                                       Nsims
                                                1       
                                   ˆ j =                       j(i)
                                            Nsims − i0 i=i +1
                                                         0


            with, for instance, i0 = Nsims /10.

        Two special cases are worth being mentioned.

    ■ First, if we simulate from the posterior, the MH ratio becomes 1.0 and
      every simulation will be accepted. This is therefore a Gibbs sampler.
    ■ Second, if we simulate from the prior, the MH ratio becomes the like-
      lihood ratio, which makes the computation simpler. We shall use this
      second case extensively in our stochastic volatility inferences.
The Inference Problem                                                        149

     The justiﬁcation for the MH algorithm is available, for instance, in [58]
or [120]. The idea is to ﬁnd the transition probability from x to y P (x y) such
that for a given target density π we would have the invariant distribution
property                            
                          π(dy) = P (x dy)π(x)dx

It is possible to express the transition probability P (x dy) as
                                            
               P (x dy) = p(x y)dy + 1 − p(x z)dz δx (dy)

with δx () the Dirac function. The ﬁrst term corresponds to the passage prob-
ability from x to a point in dy and the second term to the probability of
staying at x.
     Now, if the function p(x y) satisﬁes the reversibility condition
                          π(x)p(x y) = π(y)p(y x)
then we can see that π() is the invariant distribution as described previously.
Indeed then calling the rejection probability
                                       
                            r(x) = 1 − p(x z)dz

we have
                                   
          P (x A)π(x)dx =         p(x y)dy + r(x)δx (A) π(x)dx
                                         A
                                                      
                          =        p(x y)π(x)dx dy + r(x)π(x)dx
                            A                         A
                          =        p(y x)π(y)dx dy + r(x)π(x)dx
                            A                           A

                          = (1 − r(y))π(y)dy + r(x)π(x)dx
                            A                      A

                          =    π(y)dy
                                 A

which proves that π(x) is the invariant distribution for the transition prob-
ability P(x y).
     However, in practice, the reversibility condition is hardly ever satisﬁed,
and therefore we need to construct an MH density that would indeed be
reversible. Taking any proposal density q(x y), we would simply write
                                           
                                               π(y)/q(x y)
                 pMH (x y) = q(x y)min 1
                                               π(x)/q(y x)
150                                                    INSIDE VOLATILITY ARBITRAGE


     Then pMH (x y) would be reversible and hence admit π(x) as its invariant
distribution.
Proof: To see why, let us consider the case where π    (y)/q(xy)
                                                      π(x)/q(yx) > 1, which
means its inverse is smaller than 1. We would then have
                                              π(x)/q(y x)
 pMH (x y)π(x) = q(x y)π(x) = q(y x)                    π(y) = pMH (y x)π(y)
                                              π(y)/q(x y)

(QED)
    One more point we need to explain is the “blocking” technique. Hav-
ing two random variables X1 , X2 , the product of the conditional transition
densities, admits the joint distribution π(X1 X2) for invariant distribution.
This is why we can alternate between parameters and hidden states.
    Thus
      
           P1 (x1  dy1 |x2 )P2 (x2  dy2 |y1 )π(x1  x2 )dx1 dx2
                                    
          = P2 (x2  dy2 |y1 )          P1 (x1  dy1 |x2 )π1|2 (x1 |x2 )dx1 π2 (x2 )dx2
             
          = P2 (x2  dy2 |y1 )π1|2 (dy1 |x2 )π2 (x2 )dx2
             
          = P2 (x2  dy2 |y1 )π2|1 (x2 |y1 )π1 (dy1 )dx2
                       
          = π1 (dy1 ) P2 (x2  dy2 |y1 )π2|1 (x2 |y1 )dx2

          = π1 (dy1 )π2|1 (dy2 |y1 ) = π(dy1  dy2 )

which proves that π(x1  x2 ) is the invariant distribution for this product tran-
sition probability.

Illustration We use the same example as for the Gibbs sampler, only this time
we simulate from the priors and use the likelihood ratio to accept or reject
the simulations. We choose the priors

                                  µ ∼ N (7.0 3.0)

and
                                           1
                               σ∼ √
                                       G(1/9.0 1.0)
We obtain after M = 10 000 simulations

                                   µ̂ = 9.989504
The Inference Problem                                                      151

                  MH Sampler for the Normal Mean

13
                                                      mu
12

11

10

 9

 8

 7

 6
     0   1000 2000 3000 4000 5000 6000 7000 8000 9000 10000
                            Simulation

FIGURE 2.48 Metropolis-Hastings Algorithm for µ in N(µ σ). The true value is
µ∗ = 10.0.


and
                                  σ̂ = 4.797105
Naturally, the evaluation of the Markov Chain is different from that of the
Gibbs sampler. This can be seen in Figures 2.48 and 2.49.

A Few Distributions Here are a few distributions commonly used in MCMC
algorithms.
    The student cumulative distribution function
                                       
                                           ν     ν 1
                      F (x ν) = 1 − I           
                                         ν+x 2 2
                                              2


with I (x a b) the incomplete beta function (IBF)
                                              B(x a b)
                            I (x a b) =
                                              B(1 a b)
where                                   x
                        B(x a b) =         t a−1 (1 − t)b−1dt
                                         0

with a b two strictly positive parameters. A few plots of the IBF are provided
in Figure 2.50.
152                                                                  INSIDE VOLATILITY ARBITRAGE


                     MH Sampler for the Normal Standard Deviation
9

                                                                 Sigma
8


7


6


5


4


3
    0        1000 2000 3000 4000 5000 6000 7000 8000 9000 10000
                                        Simulation

FIGURE 2.49 Metropolis-Hastings Algorithm for σ in N(µ σ). The true value is
σ∗ = 5.0.

                                   Incomplete Beta Function
            1
                                                      (0.5, 5.0)
                                                      (0.5, 0.5)
           0.8                                        (5.0, 0.5)


           0.6
I(x,a,b)




           0.4


           0.2


            0
                 0    0.1   0.2   0.3    0.4   0.5   0.6   0.7     0.8   0.9   1
                                                x

FIGURE 2.50 Plots of the Incomplete Beta Function. Implementation is based on
code from Numerical Recipes in C.


    The inverse-gamma (IG) cumulative distribution function I G(a x) could
be deﬁned from that of the previously deﬁned gamma distribution P (a x)
                                        x
                                   1
                      P (a x) =           e−t t a−1 dt
                                 (a) 0
The Inference Problem                                                    153

     By deﬁnition, if the random variable X is gamma-distributed, Y = 1/X
will be IG-distributed and therefore
                                                       
                                             1              1
           I G(a x) = P (Y ≤ x) = P X ≥         = 1 − P a
                                             x              x
As for the densities, they are related by
                                                 
                                             1       1
                               fI G (a x) = 2 fG a
                                            x        x

Regression Analysis We have the following useful results as described in [34]
and [163] using some of the previous distributions. Considering a univariate
regression
                                Y = βX +
where                                           
                                       ∼ N 0 σ2
We suppose we know the priors
                                    p(β) = N (a A)
where a corresponds to the mean and A to the variance.
                             
                           p σ2 = I G(b B)
with the density
                                                         B
                                                   B be− x
                               fI G (x b B) =
                                                  (b)x b+1
Then we have for the β posterior:
                                      
            p β|Y  X σ2 ∝ p Y |X β σ2 p(β) ∝ N (a ∗  A∗ )
with
                                        −1         
                         ∗     1  1                     a  Xt Y
                        a =      + Xt X                   + 2
                               A 2                      A   σ
                             
                               1  X t X −1
                        A∗ =     + 2
                               A   σ
As for the σ2 posterior we have
              p(σ2 |Y  X β) ∝ p(Y |X β σ2 )p(σ2 ) ∝ I G(b∗  B ∗ )
with
                                      b∗ = T + b
and
                             B ∗ = (Y − βX)t (Y − βX) + B
154                                                        INSIDE VOLATILITY ARBITRAGE


Application to Gaussian SV Models (Heston) Various MCMC approaches have
been suggested for the SV problem. Jacquier, Polson, and Rossi [156] were
ﬁrst to a apply a hybrid of the Gibbs sampler and the MH algorithm to a log-
SV model. Kim, Shephard, and Chib [169] used a slightly different approach
for the same model.
     Here, we describe the method employed by Forbes, Martin, and Wright
(FMW) [103]. Using their notations
                                                √
                         dvt = κ(θ − vt )dt + σv vt dZt

Obviously our (ω θ ξ ρ) could easily be obtained as (κθ κ σv  ρ) . The
algorithm becomes as follows.
    Initialize v (0) = (vk(0) )1≤k≤N and choose constant and therefore non
informative priors for the parameter set35

                                       = (κ θ σv  ρ)

 1. We simulate the state vt from the Heston prior; we have for any time
    step k between 1 and N and simulation i
                                                  
                         (i)
                vk(i) = vk−1          (i)
                             + κ(θ − vk−1           (i)
                                          )t + σv vk−1 tZk−1

      As previously mentioned, the MH ratio is therefore the likelihood ratio:
                                 
                                       p(ln S|v (i)  )
                        α = min 1.0
                                      p(ln S|v (i−1)  )

      where
                       N
                                                                                        
                                       1                      1
      p(ln S|v ) ∝                           exp −                    (ln Sk − µk)2
                       k=1       (1 − ρ )tvk−1
                                       2              2(1 − ρ 2 )v
                                                                   k−1t

      with
                     
                          1          ρ
       µk = ln Sk−1 + µS − vk−1 t +    (vk − [θκt + (1 − κt)vk−1])
                          2          σv

    Any negative variance would be rejected in the MH step.
 2. The Heston equation
                                                
                vk = vk−1 + κ(θ − vk−1)t + σv vk−1tZk−1

35 As before, we assume for simplicity that µ
                                                 S is known. Adding it to the parameter
set would be easy.
The Inference Problem                                                       155

    could be rewritten
                        vk − (1 − κt)vt−1      κt
                             √             = θ√       + σv Zk−1
                               vt−1t          vt−1t
    which is a linear regression

                                       yk = θxk + ek

    with
                                       vk − (1 − κt)vt−1
                                yk =        √
                                              vt−1t
                                               κt
                                       xk = √
                                              vt−1t
    and
                                       ek ∼ N (0 σv )
    Hence, taking constant priors, we have

                                  θ|κ σv  v ∼ N(θ̄ σθ )

    with
                                                 N
                                                 k=1 xkyk
                                       θ̄ =       N
                                                  k=1 xk
                                                       2


    and                                      
                                              N
                                             
                                    σθ = σv /   xk2
                                                     k=1

    What is more
                                 σ2v |κ v ∼ I G(N − 1 sv2 )
    with
                                           N
                                           
                                   sv2 =         (yk − θ̄xk)2
                                           k=1

    It is also possible to show that
                                                       N           − 12
                                                       
                             p(κ|v) ∝ St (κ̄ σκ )            xk2
                                                        k=1

    where St (m s) corresponds to Student’s law of mean m and standard
    deviation s. The expressions for these mean and standard deviations
    could be found in [103].
156                                                           INSIDE VOLATILITY ARBITRAGE


      We can therefore simulate from the priors, except we have an adjustment
                      − 1
               N          2
      factor       x
               k=1 k
                     2
                            to multiply the prior by. The MH ratio will therefore
      be
                                                                                            
                                                                        N  (i) 2 − 2
                                                                                      1
                                p(ln S|v κ(i)  θ(i)  σ(i)
                                                         v  ρ)         k=1 xk
           α = min 1.0                                            
                                                                                              
                                                                          N  (i−1) 2 − 2
                                                                                          1
                           p(ln S|v κ(i−1)  θ(i−1)  σv(i−1)  ρ)       k=1 xk


 3. As for the correlation paramater ρ, we choose a normal proposal distri-
    bution and use a constant prior again. Therefore
                                                                          
                          p ln S|v κ θ σv  ρ(i) /q ρ(i) |v κ θ σv  S
         α = min 1.0                                                      
                         p ln S|v κ θ σv  ρ(i−1) /q ρ(i) |v κ θ σv  S

      with q() the normal distribution with mean
                                               N
                                               k=1 xkyk
                                                N
                                                k=1 xk
                                                     2



      and variance
                                                t
                                                N
                                                k=1 xk
                                                     2


      with

                            vk − κθt − (1 − κt)vk−1
                       xk =              √
                                      σv vk−1
                                                         
                            ln Sk − ln Sk−1 − µS − 12 vk−1 t
                       yk =
                                            vk−1

     Note that for any of the foregoing parameters if we simulate one that
does not satisfy the usual constraints θ ≥ 0, κ ≥ 0, σv ≥ 0, σv ≤ 2κθ, and
−1 ≤ ρ ≤ 1, then we simply do not accept them during the MH accept/reject
step. Also note that we update (κ θ σv ) in a “block” instead of updating
them one by one. This technique is used by many since it makes the algorithm
faster.
     For the actual results, the reader could refer to Forbes et al. [103]. The
authors test their Bayesian estimator against simulated data, and observe
inefﬁciency. This is in agreement with our observations when applying MLE
techniques to simulated data.
The Inference Problem                                                        157

Using the Characteristic Function
In a recent article [31], the use of the characteristic function has been sug-
gested for the purpose of ﬁltering. In this approach, however, we have to limit
ourselves to the case where F (U  V  xt ) = E[exp(U zt+1 + V xt+1)|xt ] has a
known form. One natural form would be the afﬁne process, where

   F (U  V  xt ) = E[exp(U zt+1 + V xt+1)|xt ] = exp{C(U  V ) + D(U  V )xt }

After choosing the initial conditions, the time update equation
                                  
               p(zt+1 xt+1|t) = p(zt+1 xt+1|xt )p(xt |t)dxt

becomes in terms of the characteristic function
               Fzx|t (U  V ) = Et [E (exp(U zt+1 + V xt+1)|xt )]
                              = E[exp{C(U  V ) + D(U  V )xt }|z1:t ]
                              = exp[C(U  V )]Gt|t [D(U  V )]

where Gt|s (U ) = E[exp(U xt )|z1:s ] is the moment-generating function of xt
conditional on the observations up to time s.
   The Measurement Update equation
                                             p(zt+1 xt+1|t)
                           p(xt+1|t + 1) =
                                               p(zt+1|t)

becomes in terms of the characteristic function
                           ! +∞
                                Fzx|t (iU  V ) exp (−iU zt+1)dU
            Gt+1|t+1(V ) = !−∞
                             +∞
                             −∞ Fzx|t (iU  0) exp (−iU zt+1)dU

This remarkably gives us a one-step induction expression
                      ! +∞
                           exp[C(iU  V ) − iU zt+1]Gt|t [D(iU  V )]dU
       Gt+1|t+1(V ) = !−∞+∞
                        −∞ exp[C(iU  0) − iU zt+1]Gt|t [D(iU  0)]dU

which allows us to determine the a posteriori estimate and errors

                                     x̂t = Gt|t (0)

and                                                           2
                        Pt = V art (xt ) = Gt|t (0) − Gt|t (0)

at each iteration.
158                                                      INSIDE VOLATILITY ARBITRAGE


      In this framework, the likelihood function could be written as
                                             T
                                              −1
                                    L1:T =          lt
                                             t=0


with                   +∞
                  1
            lt =             exp[C(iU  0) − iU zt+1]Gt|t [D(iU  0)]dU
                 2π   −∞

which is equivalent to
            
           1 +∞ "                                           #
     lt =         R exp[C(iU  0) − iU zt+1]Gt|t [D(iU  0)] dU               (2.30)
           π 0

where R{} corresponds to the real part of a complex number. In order to be
able to calculate the integral, we need to know the value of Gt|t (x) at each
point. For this, Bates [31] suggests making an assumption on the distribution
of the hidden state. For a gamma distribution, we have a moment-generating
function of the form
                              Gt|t (x) = (1 − κx)−vt
The integral (2.30) can be evaluated numerically; however, when dealing with
“outliers” the density of the observation takes near-zero values, which makes
the integration difﬁcult. Bates suggests scaling transformations equivalent to
the importance sampling technique used in particle ﬁltering.
      Independently from this, Dragulescu and Yakovenko, [81] and [219],
derived a semianalytic expression for the likelihood under the Heston model,
by using Fourier inversion. Note that a particle ﬁlter calculates this very
integral via Monte Carlo simulations.
      It is worth noting that the main advantage of our particle ﬁltering
approach is its complete generality. Indeed the Bates method would work
only for model classes that have an exponentially afﬁne Fourier transform.
It is true that the Heston model falls in this category; however, a VGG (vari-
ance gamma with gamma-distributed arrival rate) process would not, and
therefore could only be analyzed through a simulation-based methodology.


Introducing Jumps
The Model As in Bates [28], let us introduce a jump process (independent
from Brownian motion) with a given intensity λ and a ﬁxed36 fractional jump

36 We could make j a Gaussian random variable without changing the methodology.
The Inference Problem                                                        159

size 0 ≤ j < 1 . The number of jumps between t and t + dt will therefore be
dNt . Needless to say, if either the intensity λ = 0 or the jump size j = 0,
then we are back to the pure diffusion case.
     The new stochastic differential equation for the stock price in the risk-
neutral framework will be
                                         √
                  dSt = (µS + λj )St dt + vt St dBt − St j dNt
and applying Ito’s lemma for semi-Martingales
                    
                          1             √
         d ln St = µS − vt + λj dt + vt dBt + ln(1 − j )dNt
                          2
which we can rewrite in the discrete version as
                         
                                 1              √ √
        ln Sk+1 = ln Sk + µS − vk + λj t + vt tBk + µk
                                 2
with µ0 = 0 and
                  µk = δ0 (0)e−λt + δ0 (ln(1 − j )) (1 − e−λt )

where δ0 () corresponds to the Dirac delta function.37
Also
                               √     √
vk = vk−1 + (ω − θvk−1)t + ξ vk−1 tZk−1
                    
                                1            √      √
     − ρξ ln Sk−1 + µS + λj − vk−1 t + vk−1 tBk−1 + µk−1 − ln Sk
                                2
which completes our set of equations.
   It is important to note that the new parameter set is
                               = (ω θ ξ ρ λ j )
which effectively gives us two additional degrees of freedom.38

37 This means that −∞ < µ
                              k ≤ 0 for every k. Note that we are assuming that we
can have at most one jump within [t t + t], which means that t is small enough.
This is completely different from pure-jump models, such as variance gamma.
38 A related idea was developed by Hamilton [126] as well as Chourdakis [59]

and Deng [72]. Chourdakis uses the characteristic function for the jump-diffusion
process. Doucet [80] suggests the use of particle ﬁltering for the jump process.
Maheu and McCurdy [184] use a fully integrated GARCH likelihood with Poisson
jumps. Aït-Sahalia [3] uses moments to separate the diffusion parameters from the
jumps. Johannes, Polson, and Stroud [164] use the particle ﬁltering technique as
well, however, in a Bayesian MCMC framework. Finally, Honoré [142] shows that
an MLE approach always works for a constant jump size.
160                                                                   INSIDE VOLATILITY ARBITRAGE


The Generic Particle Filter Since µk is following a Poisson process, we have to
use a non-Gaussian ﬁlter. The use of a generic particle ﬁlter (GPF) is therefore
natural. In a generic particle ﬁlter, the proposal distribution q(xk) is simply
set equal to p(xk|xk−1). The state xk could be chosen as
                                         
                                            µk
                                   xk =
                                            vk

and the transition equation becomes
                                                                                                      
                                       δ0 (0)e−λt + δ0 (ln(1 − j )) (1 − e−λt ) 
xk =                                                                                    √    √         
          vk−1 + [(ω − ρξ(µS + λj ) − (θ − 12 ρξ)vk−1]t + ρξ[ln( SS ) − µk−1] + ξ 1 − ρ2 vk−1 t Z̃k−1
                                                                 k
                                                                k−1




It becomes therefore possible to implement a particle ﬁlter as follows.

 1. Choose v0 and P0 > 0 and set µ0 = 0, so for i in 1 ... Nsims
                                  
                          x0(i) =       √0
                                    v0 + P0 Z (i)

    Then for each k with 1 ≤ k ≤ N do
 2. Write the new x̃k(i) = (µ̃(i)   (i) t
                              k  ṽk ) as the result of simulations
                                                          
           (i)               (i)                                  1  (i)
         ṽk ∼ N m = vk−1 + ω − ρξ(µS + λj ) − θ − ρξ vk−1
                                                                  2
                                            
                                               Sk
                            ×t + ρξ ln              − µ(i)
                                                          k−1  s
                                              Sk−1
                        
                           (i) √
    with s = ξ 1 − ρ2 vk−1        t and

                                                  µ̃(i)
                                                    k =0

      if U[0 1] ≤ e−λt and
                                             µ̃(i)
                                               k = ln(1 − j )

    otherwise.
 3. Deﬁne the weights
                                         wk(i) = wk−1
                                                  (i)
                                                      p(zk|x̃k(i))
      with
                                                                                    
                                                1
           p(zk|x̃k(i)) = n zk zk−1 + µS + λj − ṽk(i)                  t + µ̃(i)
                                                                                k     ṽk(i) t
                                                2
The Inference Problem                                                        161

 4. Normalize the weights
                                                    wk(i)
                                   w̃k(i) =       Nsims (i)
                                                  i=1 wk

 5. Resample the points x̃k(i) and get xk(i) and reset wk(i) = w̃k(i) = 1/Nsims .
    This completes the generic particle ﬁltering algorithm.
    Note that there is no Kalman ﬁltering here and therefore
                                                    Nsims
                                              1         
                                  ẑk− =                    ẑk(i)
                                           Nsims i=1

    with ẑk(i) the estimation of zk from xk−1
                                           (i)

                                   
                       (i)                     1 (i)
                     ẑk = zk−1 + µS + λj − vk−1     t + µ(i)
                                                           k−1
                                               2
    and the estimation error is zk − ẑk− as before.
    The likelihood maximization is not different from the EPF or UPF. We
    need to maximize                   N            
                                N        sims
                                                 (i)
                                    ln          wk
                                    k=1           i=1

    where wk(i) ’s are deﬁned at Step 3.



Extended/Unscented Particle Filters Using the same model, we can take advan-
tage of the independence of vk and µk and apply the (nonlinear) Gaussian
Kalman ﬁlter to the former. In this case, the Steps 2 and 3 should be replaced
with:
                               t
2-a. Write x̂k(i) = µ̂(i)   (i)
                      k  v̂k      with

                                     v̂k(i) = KF(vk−1
                                                  (i)
                                                      )

     with Pk(i) the associated a posteriori error covariance matrix, KF the
     extended or unscented Kalman ﬁlter, and
                                          µ̂(i)  (i)
                                            k = µk−1

2-b. Now take the simulations
                                                           
                                  ṽk(i) ∼ N v̂k(i)  Pk(i)
162                                                      INSIDE VOLATILITY ARBITRAGE


      and
                                          µ̃(i)
                                            k =0

      if U[0 1] ≤ e−λt and
                                     µ̃(i)
                                       k = ln(1 − j )

    otherwise.
 3. Deﬁne the weights
                                           (i)  (i) (i) 
                           (i)  (i) p zk|x̃k p x̃k |xk−1
                          wk = wk−1                        
                                       q x̃k(i)|xk−1
                                                 (i)
                                                      z1:k

      with
                                                                
                                                1
        p zk|x̃k(i) = n zk zk−1 + µS + λj − ṽk(i) t + µ̃(i)k      ṽk(i) t
                                                2
                                                                       
                                                      √
       p x̃k |xk−1 = n ṽk(i)  m s = ξ 1 − ρ2 vk−1
           (i) (i)                                (i)
                                                        t p µ̃(i)
                                                                k   |µ(i)
                                                                      k−1


      with
                                                          
           (i)                           1    (i)             Sk
      m = vk−1 +   ω − ρξ(µS + λj ) − θ − ρξ vk−1 t+ρξ ln        −ρξµ(i)
                                                                      k−1
                                         2                   Sk−1

      and                                                               
                q x̃k(i)|xk−1
                          (i)
                               z1:k = n ṽk(i)  v̂k(i)  Pk(i) p µ̃(i) (i)
                                                                     k |µk−1

                                                 
Note that as for the GPF, the terms p µ̃(i)
                                        k   |µ(i)
                                              k−1 cancel out and need not be
evaluated.
     The rest of the algorithm remains the same. This way we will not lose
the information contained in the Kalman gain for the Gaussian dimension.
     The following is the C++ code for the application of EPF to the Bates
model.

// log_stock_prices are the log of stock prices
// muS is the real-world stock drift
// n_stock_prices is the number of the above stock prices
// (omega, theta, xi, rho, lambda, j) are the Bates
parameters
// ll is the value of (negative log) Likelihood function
// estimates[] are the estimated observations from the
filter
The Inference Problem                                     163

// The function ran2() is from Numerical Recipes in C
// and generates uniform random variables
// The function Normal_inverse() can be found from
many sources
// and is the inverse of the Normal CDF
// Normal_inverse(ran2(.)) generates a set of Normal
random variables

void estimate_particle_jump_diffusion_parameters_1_dim(
double *log_stock_prices,
double muS, int n_stock_prices,
double omega,
double theta,
double xi,
double rho,
double lambda,
double j,
double *ll,
double *estimates)
{
  int     i1, i2, i3;
  double H, A, x0, P0, z;
  int     M=1000;
  double x[1000], xx[1000], x1[1000], x2[1000];
  double mu[1000], mm[1000], m1[1000], m2[1000];
  double P[1000], P1[1000], U[1000], K[1000], W[1000];
  double w[1000], u[1000], c[1000];
  double q, pz, px, s, m, l;
  double delt=1.0/252.0, x1_sum, m1_sum;
  long    idum=-1;
  int     i1_prev=0;
  double u_t=0.0;
  int     *jump;

 jump= new int [n_stock_prices];
 for (i1=0; i1<n_stock_prices; i1++)
   jump[i1]=0;

 A = 1.0-(theta-0.5*rho*xi)*delt;
 H = -0.5*delt;

 x0 = 0.04;
 P0 = 0.000001;
 for (i2=0; i2<M; i2++)
 {
164                                      INSIDE VOLATILITY ARBITRAGE


  x[i2] = x0 + sqrt(P0)* Normal_inverse(ran2(&idum));
  mu[i2]=0;
  P[i2] = P0;
 }

 *ll=0.0;
 for (i1=1;i1<n_stock_prices-1;i1++)
 {
   l = 0.0;
   x1_sum=0.0;
   m1_sum=0.0;
   for (i2=0; i2<M; i2++)
   {
     /* EKF for the proposal distribution */
     if (x[i2]<0) x[i2]=0.00001;
     x1[i2] = x[i2] + ( omega-rho*xi*(muS+lambda*j) -
(theta-0.5*rho*xi) * x[i2]) * delt +
   rho*xi* (log_stock_prices[i1]-
     log_stock_prices[i1-1]) - rho*xi*mu[i2];
     m1[i2]=mu[i2];
     W[i2] = xi*sqrt((1-rho*rho) * x[i2] * delt);
     P1[i2] = W[i2]*W[i2] + A*P[i2]*A;
     if (x1[i2]<0) x1[i2]=0.00001;
     U[i2] = sqrt(x1[i2]*delt);
     K[i2] = P1[i2]*H/( H*P1[i2]*H + U[i2]*U[i2]);
     z = log_stock_prices[i1+1];
     x2[i2] = x1[i2] + K[i2] *
   (z - (log_stock_prices[i1] +
     (muS+lambda*j-0.5*x1[i2])*delt + m1[i2]));
     m2[i2]= m1[i2];
     x1_sum+= x1[i2];
     m1_sum+= m1[i2];
     P[i2]=(1.0-K[i2]*H)*P1[i2];
     /* sample */
     xx[i2] = x2[i2] + sqrt(P[i2])*
     Normal_inverse(ran2(&idum));
     if (xx[i2]<0) xx[i2]=0.00001;

        if (ran2(&idum) < exp(-lambda*delt))
      mm[i2]=0.0;
        else
      mm[i2]=log(1.0-j);

        /* calculate weights */
        m = x2[i2];
The Inference Problem                                   165

       s = sqrt(P[i2]);
       q = 0.39894228/s * exp( - 0.5* (xx[i2] - m)*
       (xx[i2] - m)/(s*s) );
       m= log_stock_prices[i1] +
       (muS+lambda*j-0.5*xx[i2])*delt + mm[i2];
       s= sqrt(xx[i2]*delt);
       pz= 0.39894228/s *
       exp( - 0.5* (z - m)*(z - m)/(s*s) );
       m= x[i2] + ( omega-rho*xi*(muS+lambda*j) -
       (theta-0.5*rho*xi) * x[i2]) * delt +
     rho*xi* (log_stock_prices[i1]-
       log_stock_prices[i1-1]) -rho*xi*mu[i2];
       s= xi*sqrt((1-rho*rho) * x[i2] * delt);
       px= 0.39894228/s *
       exp( - 0.5* (xx[i2] - m)*(xx[i2] - m)/(s*s) );

       w[i2]= pz * px / MAX(q, 1.0e-10);
       l += w[i2];
     }
     *ll += log(l);
     estimates[i1+1]= log_stock_prices[i1] +
     (muS+lambda*j-0.5*x1_sum/M)*delt+m1_sum/M;
     /* normalize weights */
     for (i2=0; i2<M; i2++)
       w[i2] /= l;
     /* resample and reset weights */
     c[0]=0;
     for (i2=1; i2<M; i2++)
       c[i2] = c[i2-1] + w[i2];
     i2=0;
     u[0] = 1.0/M * ran2(&idum);
     for (i3=0; i3<M; i3++)
     {
       u[i3] = u[0] + 1.0/M *i3;
       while (u[i3] > c[i2])
     i2++;
       x[i3]= xx[i2];
       mu[i3]=mm[i2];
       w[i3]=1.0/M;
     }
 }

 *ll *= -1.0;

 delete [] jump;
166                                                   INSIDE VOLATILITY ARBITRAGE


}

// *ll corresponds to the (negative log) Likelihood
// which we will need to minimize to obtain optimal
parameters

The Srivastava Approach Srivastava [222] suggests the following approach for
simulating the jump component. Instead of allowing a jump at each time
interval [tk tk + t] with a probability 1 − e−λt as we do now, we can ﬂag
the time steps such that
                                      
                                  1        1
                          tk−1 < ln              ≤ tk
                                 λ      U[0 1]

where U[0 1] is a uniform random variable between zero and one, and then
perform a jump of size | ln(1 − j )| on these steps for all paths. We therefore
would ﬁrst initialize tp = 0 and loop through k’s between 1 and N , and if

                        e−λ(tk−tp ) ≤ U[0 1] < e−λ(tk−1−tp )
we ﬂag this k and set tp = tk and resimulate U[0 1] . In the particle ﬁlter, we
would set for all indices i’s

                                 µ̃(i)
                                   k = ln(1 − j )

for the ﬂagged k’s, and we would set µ̃(i) k = 0 for other indices.
     It is important to note that in this approach the simulation for the jump
component is completely “orthogonal” to the diffusion SIS part. Indeed the
index i in the foregoing is irrelevant for the entity µ̃(i)
                                                        k . This means that in
the KF step, the weight calculation and the resampling are independent of
the Jump component altogether.

Numeric results   As a check, we simulate a time series with the parameter set

          ∗ = (ω∗ = 0 θ∗ = 0 ξ∗ = 0 ρ∗ = 0 λ∗ = 2.52 j ∗ = 0.20)

which corresponds to a jump frequency of λt = 0.01 and a jump size of
20 percent. We generated N = 245 points and used M = 1000 particles.
    The estimated set via the above EPF is

       ˆ = (ω̂ = 0.23 θ̂ = 1.5 ξ̂ = 0.34 ρ̂ = 0.21 λ̂ = 2.65 jˆ = 0.20)

As we see, the diffusion parameters are not close to the original ones, but this
is probably due to the small t, as previously discussed. The jump parameters
are close to the original ones, which means that the ﬁlter is valid for the jump
The Inference Problem                                                                 167

                        Extended Particle Filter for Heston and Heston+Jumps Models
                  0.0006
                                       EPF Heston
                  0.0005         EPF Heston+Jumps


                  0.0004
Errors




                  0.0003

                  0.0002

                  0.0001

                        0
                            0           50      100          150     200       250
                                                      Days

FIGURE 2.51 Comparison of EPF Results for Heston and Heston+Jumps Models.
The presence of jumps can be seen in the residuals.

                                 Simulated versus Estimated Time Series
                  7.1
                                      Original Time Series
                   7        Estimated Time Series via EPF

                  6.9
Log Stock Price




                  6.8

                  6.7

                  6.6

                  6.5

                  6.4
                        0         100        200          300      400        500
                                                   Days

FIGURE 2.52 Comparison of EPF Results for Simulated and Estimated Jump-
Diffusion Time Series. The ﬁltered data matches the real data fairly well.


component. Note that despite the difference in the diffusion parameters, the
estimated and original time series are rather close for a new simulation, as
can be seen in Figures 2.51 and 2.52. This reconﬁrms our previous remark:
When the parameters affect the drift of the observation (as opposed to its
noise), their estimation is far more accurate and requires fewer data points.
168                                                         INSIDE VOLATILITY ARBITRAGE


The Optimization Algorithm It is important to realize that the likelihood function
here (owing to the jumps) is not differentiable everywhere, and, therefore,
gradient-based maximization methods could not be applied. The optimiza-
tion could, however, still be carried out via the direction set algorithm as
previously described. Note that as mentioned in [164] so far there has been
no formal proof on the convergence of the discretized jump diffusion equa-
tions toward the continuous ones; however, empirical evidence makes the
convergence assumption plausible.


Pure Jump Models
The variance gamma with stochastic arrival (VGSA) and the variance gamma
with gamma arrival (VGG) models were deﬁned in Chapter 1. These models
are non-Gaussian, and we could apply the particle ﬁltering technique to
them. We are not dealing with diffusion models, and therefore we do not
have the Girsanov theorem. We are estimating the parameter set

                               = (µS  θ σ ν ...)

In order to make the back-testing simpler, we suppose that we know the
stock drift and try to estimate the other parameters. However, as mentioned
earlier, for a high-frequency data set we have
                                        √ 
                                t = o     t

and the drift term has a negligible impact.

VG The variance gamma model has the advantage of offering an integrated
density, which allows us to calculate the exact likelihood. Calling z =
ln(Sk/Sk−1) and h = tk − tk−1 and posing xh = z − µS h − νh ln(1 − θν − σ2 ν/2),
we have
                                            h   1                    
         2 exp θxh /σ2         xh2            2ν − 4                 1                   
 p(z|h) = h √       h                                Kh−1              xh2 2σ2 /ν + θ2
         ν ν 2πσ ν       2σ2 /ν + θ2                   ν    2       σ2

and the likelihood is
                                     N
                                     
                            L1:N =         p(zk|zk−1 h)
                                     k=1

The implementation of this estimation procedure is straightforward and has
already been done in [182].
The Inference Problem                                                        169

     One could also back-test the estimation procedure in the following way:
First choose a parameter set (θ σ ν) as well as a drift µS and a time-step
t. Then simulate via Monte Carlo a gamma-distributed random variable
as well as a Gaussian one. Deduce an artiﬁcial stock-price time series, apply
the MLE procedure to it, and try to recover the original parameter set.
     Using t = 1/252, µ∗S = 0.05, and

                                   θ∗      =          0.02

                                   σ∗      =          0.2

                                   ν∗      =          0.005

We simulated 500 data points, applied the MLE, and found an optimal par-
ameter set ˆ = (0.018 0.22 0.006), which is close to the original set.

VGSA Using the same notations as in the previous chapter, the Euler dis-
cretized VGSA process could be written via the auxiliary variable
                                            √     √
             yk = yk−1 + κ(η − yk−1)t + λ yk−1 tWk−1

and the state
                              xk = Fν−1 (ykt U[0 1])
as well as the observation zk = ln Sk+1
                                                     √
                     zk = zk−1 + (µS + ω)t + θxk + σ xkBk

with ω = ν1 ln(1 − θν − σ2 ν/2).

The Filtering Algorithm   The PF algorithm could therefore be written as follows.
                                    (j )
 1. Initialize the arrival-rate y0 , the state x0(i) , and the weight w0(i) for j
    between 1 and Msims , and i between 1 and Nsims

                                    While 1 ≤ k ≤ N

 2. Simulate the arrival-rate yk for j between 1 and Msims
                                                  √
           (j )   (j )           (j )         (j )              
          yk = yk−1 + κ η − yk−1 t + λ yk−1 tN −1 U (j ) [0 1]
                                               (j )
3-a. Simulate the state xk for each yk and for i between 1 and Nsims
                                                      
                          (i|j )      (j )
                        x̃k = Fν−1 yk t U (i) [0 1]
170                                                            INSIDE VOLATILITY ARBITRAGE


3-b. Compute the unconditional state
                                                                    Msims
                                                                1            (i|j )
                 x̃k(i) =       x̃k(i)(yk)p(yk|yk−1)dyk ≈                  x̃
                                                               Msims j =1 k

 4. Calculate the associated weights for each i
                                                     
                                      (i)
                             wk(i) = wk−1 p zk|x̃k(i)

      with                                   
                                   p zk|x̃k(i) = n(zk m s)
                                                         (i)
                      with mean m = zk−1 +(µS +ω)t +θx̃k and standard
      the normal density
    deviation s = σ x̃k(i)
 5. Normalize the weights

                                                   wk(i)
                                      w̃k(i) =   Nsims (i)
                                                 i=1 wk

 6. Resample the points x̃k(i) and get xk(i) and reset wk(i) = w̃k(i) = 1/Nsims .
 7. Increment k, go back to Step 2, and Stop at the end of the While loop.

Parameter Estimation    As usual, the log likelihood to be maximized is
                                       N
                                             N           
                                              sims
                                                      (i)
                          ln(L1:N ) =     ln         wk
                                           k=1       i=1

The maximization takes place over the parameter set  = (κ η λ ν θ σ).
Again, in reality the stock drift µS should be estimated together with the
other parameters; however, with a view to simplifying, we suppose we know
µS in our back-testing procedures.

A More Efﬁcient Algorithm We could take advantage of the fact that VG pro-
vides an integrated density of stock return. Calling z = ln(Sk/Sk−1) and
h = tk − tk−1, and posing xh = z − µS h − νh ln(1 − θν − σ2 ν/2), we have
                                               h   1                    
         2 exp θxh /σ2       xh2                 2ν − 4                 1                   
 p(z|h) = h √                                             Kh−1              xh2 2σ2 /ν + θ2
         ν ν 2πσ( νh ) 2σ2 /ν + θ
                                   2                       ν    2       σ2

As we can see, the dependence on the gamma distribution is “integrated out”
in the above.
The Inference Problem                                                                          171

      For VGSA, for a given arrival rate dt ∗ = yt dt, we have a VG distribution
and
                   d ln St = (µS + ω)dt + B(γ(dt ∗  1 ν); θ σ)
and the corresponding integrated density becomes
                                                    h∗ 1                       
             2 exp θxh /σ2          xh2                2ν − 4                  1                   
        ∗
p(z|h h ) = h∗ √        h∗                                   K   h∗ 1           xh2 2σ2 /ν + θ2
                               2σ2 /ν + θ2                          ν −2       σ2
            ν ν 2πσ ν
                                                                                            (2.31)

      Indeed, as described in [182] for VG, we have
                                  +∞
                       p(z|h) =        p(z|g h)p(g|h)dg
                                   0

with p(z|g h) a normal density and p(g|h) a gamma density. More accurately
                                                                        
                1            1                h                       2
p(z|g h) = √       exp − 2        z − µS h − ln 1 − θν − σ2 ν/2 − θg
             σ 2πg         2σ g               ν

and
                                            h
                                           g ν −1 exp(− νg )
                            p(g|h) =              h
                                                ν ν ( νh )
    Now, for VGSA we simply have a different arrival rate h∗ for the gamma
process and therefore
                                  +∞
                   p(z|h h∗ ) =      p(z|g h)p(g|h∗ )dg
                                       0

which demonstrates the point. This gives us the idea of using the arrival rate
as the state, and we use the following algorithm.

 1. Initialize the state x0(i) and the weight w0(i) for i between 1 and Nsims

                                  While 1 ≤ k ≤ N

 2. Simulate the state xk for i between 1 and Nsims
                                                 √
                                 (i)                                   
          x̃k(i) = xk−1
                    (i)
                        + κ η − xk−1           (i)
                                       t + λ xk−1   tN −1 U (i) [0 1]

 3. Calculate the associated weights for each i
                                                     
                                      (i)
                             wk(i) = wk−1 p zk|x̃k(i)
172                                                         INSIDE VOLATILITY ARBITRAGE


    with p(zk|x̃k(i)) as deﬁned in (2.31), where h will be set to t and h∗ to
    the simulated state x̃k(i) times t
 4. Normalize the weights
                                                    wk(i)
                                    w̃k(i) =       Nsims (i)
                                                   i=1 wk

 5. Resample the points x̃k(i) and get xk(i) and reset wk(i) = w̃k(i) = 1/Nsims .
 6. Increment k, go back to Step 2 and Stop at the end of the While loop.

     The advantage of this method is that there is one simulation process
instead of two, and we “skip” the gamma distribution altogether. However,
the dependence of the observation zk on xk is highly nonlinear, which makes
the convergence more difﬁcult.
An Extended/Unscented Particle Filter Finally, a natural idea would be to use a
proposal distribution q(x) for the state, taking into account the observation
information. In order to be able to use a Kalman-based proposal distribution
(EPF or UPF), we need a Gaussian approximation. Note that given the strong
non-Gaussianity of the equations, we absolutely need the particle ﬁltering
aspect. The Gaussian approximation for the observation equation would
be39                                                      
                                        
             zk = zk−1 + µS + ω + θxk t + θ2 ν + σ2 xktBk
which is of the form zk = h(xk Bk) and allows us to use the Kalman ﬁltering
algorithm. We therefore replace Steps 2 and 3 of the previous algorithm with
the following.

2-a. Apply an extended/unscented Kalman ﬁlter for i between 1 and Nsims
                   (i)
     to the state xk−1 and obtain
                                                
                                x̂k(i) = KF xk−1
                                             (i)


     as well as the associated covariance Pk(i) .
2-b. Simulate the state for i between 1 and Nsims
                                                                
                        x̃k(i) = x̂k(i) + Pk(i) N −1 U (i) [0 1]
3. Calculate the associated weights for each i
                                                            
                                   p zk|x̃k(i) p x̃k(i)|xk−1
                                                           (i)

                      wk(i) = wk−1
                               (i)
                                                          
                                      q x̃k(i)|xk−1
                                                (i)
                                                     z1:k
                                                              
39 We are using the fact that for X(t) = B     γ(t 1 ν); θ σ we have a mean θt and a
variance (θ2 ν + σ2 )t as stated in [182].
The Inference Problem                                                          173
                  
   with p zk|x̃k(i) as deﬁned in (2.31), where h will be set to t and h∗ to
                                                           
   the simulated state x̃k(i) times t, where p x̃k(i)|xk−1
                                                        (i)
                                                              is the normal density
                                                                      
                 (i)              (i)                                      (i) √
   with mean xk−1    + κ η − xk−1       t and standard deviation λ xk−1         t,
                                 
                     (i) (i)                                                 (i)
   and where q x̃k |xk−1 z1:k is the normal density with mean x̂k and
                         
   standard deviation Pk(i) .

    The rest of the algorithm is exactly the same as the previous one.
    What follows is a C++ routine for the EPF applied to VGSA.

// log_stock_prices are the log of stock prices
// muS is the real-world stock drift
// n_stock_prices is the number of the above stock prices
// (kappa,eta,lambda,sigma,theta,nu) are the VGSA parameters
// ll is the value of (negative log) Likelihood function
// estimates[] are the estimated observations from the filter
// errors are the observation errors

// The function ran2() is from Numerical Recipes in C
// and generates uniform random variables
// The function Normal_inverse() can be found from
many sources
// and is the inverse of the Normal CDF
// Normal_inverse(ran2(.)) generates a set of Normal
random variables

// The Bessel and Gamma functions bessik() and gammln()
// are also available in Numerical Recipes in C




void estimate_particle_extended_VGSA_parameters_bessel(
double *log_stock_prices,
double mu,
int n_stock_prices,
double kappa,
double eta,
double lambda,
double sigma,
double theta,
double nu,
double *ll,
double *estimates,
174                                      INSIDE VOLATILITY ARBITRAGE


double *errors)
{
  int      i1, i2, i3;
  double   y0, z, omega;
  int      M=1000;
  double   x[1000], xx[1000], X;
  double   w[1000], u[1000], c[1000];
  double   pz, px, q, s, m, l, x1_sum;
  long     idum=-1;
  double   delt=1.0/252.0;
  double   eps=1.0e-30;
  double   Ka,Ia,Kp,Ip, Kx,Knu;

  double   H, A, x0, P0;
  double   P[1000], P1[1000], U[1000], K[1000], W[1000];
  double   x1[1000], x2[1000];

  /* initialize */
  omega=log(1.0-theta*nu- sigma*sigma*nu/2.0)/nu;
  x0 = 1.0;
  P0 = 0.000001;
  for (i2=0; i2<M; i2++)
  {
    x[i2] = x0 + sqrt(P0)* Normal_Inverse(ran2(&idum));
    P[i2] = P0;
  }
  A = 1.0-kappa*delt;
  H = theta*delt;
  /* time loop */
  *ll=0.0;
  for (i1=1;i1<n_stock_prices-1;i1++)
  {
    z = log_stock_prices[i1+1]-log_stock_prices[i1];
    X= z - mu*delt - delt/nu*log(1.0-theta*nu-
  sigma*sigma*nu/2.0);
    l = 0.0;
    x1_sum=0.0;
    for (i2=0; i2<M; i2++)
    {
      /* EKF for the proposal distribution */
      x1[i2] = x[i2] + kappa*(eta - x[i2])*delt;
      W[i2] = lambda*sqrt(x[i2] * delt);
      P1[i2] = W[i2]*W[i2] + A*P[i2]*A;
      x1[i2]=MAX(x1[i2],eps);
The Inference Problem                                  175

      U[i2] = sqrt(theta*theta*nu+sigma*sigma)*
sqrt(x1[i2]*delt);
      K[i2] = P1[i2]*H/( H*P1[i2]*H + U[i2]*U[i2]);
      x2[i2] = x1[i2] + K[i2] *
      (z - (mu+omega+theta*x1[i2])*delt);
      x1_sum+= x1[i2];
      P[i2]=(1.0-K[i2]*H)*P1[i2];
      /* sample */
      xx[i2] = x2[i2] + sqrt(P[i2])*
      Normal_Inverse(ran2(&idum));
      xx[i2]=MAX(xx[i2],eps);
      /* calculate weights */
      m = x2[i2];
      s = sqrt(P[i2]);
      q = 0.39894228/s * exp( - 0.5* (xx[i2] - m)*
      (xx[i2] - m)/(s*s) );
      m = x[i2] + kappa*(eta - x[i2])*delt;
      s = lambda*sqrt(x[i2] * delt);
      px = 0.39894228/s * exp( - 0.5* (xx[i2] - m)*
      (xx[i2] - m)/(s*s) );
      Kx = MAX(eps, 1.0/(sigma*sigma)*
      sqrt(X*X*(2*sigma*sigma/nu+theta*theta)));
      Knu = MAX(eps, (xx[i2]*delt/nu-0.5));
      bessik(Kx , Knu , &Ia, &Ka, &Kp, &Ip);
      pz=2.0*exp(theta*X/(sigma*sigma)) /
    (pow(nu,xx[i2]*delt/nu)*sigma*
    exp(gammln(xx[i2]*delt/nu))) *0.39894228*
    pow(X*X/(2*sigma*sigma/nu+theta*theta),
    0.5*xx[i2]*delt/nu-0.25) * Ka;

         w[i2]= pz * px / MAX(q, eps);
        l += w[i2];
    }
    *ll += log(l);
    /* estimates[i1+1] for z[i1] => error term */
    estimates[i1+1]= log_stock_prices[i1+1]-
(log_stock_prices[i1] + (mu+omega+theta*x1_sum/M)*
delt);
    errors[i1]     = (theta*theta*nu + sigma*sigma)*
    x1_sum/M*delt;
    /* normalize weights */
    for (i2=0; i2<M; i2++)
       w[i2] /= l;
    /* resample and reset weights */
    c[0]=0;
176                                                  INSIDE VOLATILITY ARBITRAGE


        for (i2=1; i2<M; i2++)
          c[i2] = c[i2-1] + w[i2];
        i2=0;
        u[0] = 1.0/M * ran2(&idum);
        for (i3=0; i3<M; i3++)
        {
          u[i3] = u[0] + 1.0/M *i3;
          while (u[i3] > c[i2])
        i2++;
          x[i3]= xx[i2];
          w[i3]=1.0/M;
        }
    }

    *ll *= -1.0;

}

// *ll represents the (negative log) Likelihood



Numeric Results We performed the same kind of back-testing procedure as
for the VG model, using either of the foregoing particle ﬁlters applied to an
artiﬁcially generated stock-price time series. We chose t = 1/252 , µ∗S = 0,
y0 = 1 and

          ∗ = (κ∗ = 0 η∗ = 0 λ∗ = 0 ν∗ = 0.005 θ∗ = 0.02 σ∗ = 0.2)

after applying the importance sampling/resampling PF via the modiﬁed Bessel
function, we found

                   ˆ = (0.13 0.001 0.37 0.0048 0.018 0.21)

which seems to indicate that the estimation process for (ν θ σ) works well,
whereas the one for (κ η λ) does not. However, if we simulate two sets
of spot-price times series with these different parameter sets, we will see
that the generated paths are very similar. See Figures 2.53 and 2.54. This
also conﬁrms our previous remarks about the estimation of the parameters
affecting the noise.
     We performed a second test with a more realistic choice of parameters,
with once again t = 1/252 , Nsims = 100 , and 500 data points correspond-
ing to two years. The real values were

     ∗ = (κ∗ = 2.10 η∗ = 5.70 λ∗ = 2.00 ν∗ = 0.05 θ∗ = −0.40 σ∗ = 0.20)
The Inference Problem                                                       177

                          Simulated Arrival Rates

1.2
1.1
  1
0.9
0.8
0.7
0.6
0.5
0.4
               y
0.3        y-bis
0.2
      0     50     100   150   200   250   300      350   400   450   500

FIGURE 2.53 The Simulated Arrival Rates via  = (κ = 0 η = 0 λ = 0
σ = 0.2 θ = 0.02 ν = 0.005) and  = (κ = 0.13 η = 0 λ = 0.40 σ = 0.2,
θ = 0.02 ν = 0.005) Are Quite Different; compare with Figure 2.54.




                          Simulated Log Stock Prices

 4.9

4.85                                                          lnS
                                                          lnS-bis
 4.8

4.75
 4.7

4.65

 4.6

4.55

 4.5
4.45
       0     50    100   150   200   250   300      350   400   450   500

FIGURE 2.54 However, the Simulated Log Stock Prices are Close. (Compare with
Figure 2.53.)
178                                                        INSIDE VOLATILITY ARBITRAGE


Note that θ has a negative value that corresponds to the negative skewness
of the distribution. We choose a fairly reasonable initial set
  0 = (κ0 = 2.00 η0 = 6.00 λ0 = 1.50 ν0 = 0.03 θ0 = −0.30 σ0 = 0.30)
and
                                   µ0 = µ∗ = 0.05
We ﬁnd the optimal parameter set
      ˆ = (κ̂ = 4.25 η̂ = 7.89 λ̂ = 3.25 ν̂ = 0.047 θ̂ = −0.40 σ̂ = 0.19)
and
                                    µ̂ = µ∗ = 0.05
     Again we see that the estimations for the three VG parameters (ν θ σ)
are much more accurate than those corresponding to the arrival process
(κ η λ)—and this despite our choosing the initial arrival parameters close
to the real ones. As previously stated, the time series of spot prices has little
sensitivity to the arrival-rate parameters and a higher degree of sensitivity to
the gamma process parameters. Again, this shows that estimation method-
ologies such as MLE work much better when applied to parameters that
affect the drift of an observation, and not its noise.

Diagnostics As for diagnostics, we need to estimate the observation error
associated with the algorithm. We deﬁne once again
                                                     
                      ẑk(i) = zk−1 + µS + ω + θx̃k(i) t
                                         Nsims
                                   1      
                         ẑk− =                  ẑk(i)
                                  Nsims i=1

or
                                                               Nsims
                                                           1    
                  ẑk− = zk−1 + (µS + ω)t + θt                       x̃k(i)
                                                          Nsims i=1
and the error term
                                       ek = zk − ẑk−
The variance associated with this error is
                                                Nsims
                                          1 
                         sk = θ 2 ν + σ 2             x̃ (i)t
                                           Nsims i=1 k

and
                                        ẽk = ek/sk
would represent the normalized error.
The Inference Problem                                                     179

                      VGSA Observation Errors with GPF
 0.025
   0.02
 0.015
   0.01
 0.005
      0
–0.005
 –0.01
–0.015
 –0.02                                                MPE
–0.025
          0     100       200    300      400   500      600   700

FIGURE 2.55 The Observation Errors for the VGSA Model with a Generic Particle
Filter.


TABLE 2.15 MPE and RMSE for the VGSA Model Under a Generic PF as well as
the EPF.

              MPE               RMSE

 PF       -0.000350241      0.005867065
EPF        -4.74747e-07     0.005869782




MPE/RMSE In order to measure the performance, once again we use the mean
price error (MPE) and the root mean-squared error (RMSE). As an example,
we use the S&P 500 data between 1992 and 1994 (as used in [182]). For the
generic particle ﬁlter (GPF) and the extended particle ﬁlter (EPF), we ﬁnd
the results in Table 2.15.
     As we can see, the use of the extended Kalman ﬁlter as the proposal
distribution brings some improvement. Also see Figures 2.55 and 2.56.


Chi-Square Test The residuals are normal; a χ220 test provides us with a value
of 10.397699, which is below the threshold value of 31.5 for a conﬁdence
of 0.95. This means that the non-Gaussianity was “ﬁltered out” of the time
series successfully. This could also be observed in the corresponding his-
togram in Figure 2.57.
180                                                             INSIDE VOLATILITY ARBITRAGE




                        VGSA Observation Errors with EPF

 0.025
  0.02
 0.015
   0.01
 0.005
       0
–0.005
 –0.01
–0.015
 –0.02                                                         MPE
–0.025
      0           100     200        300   400       500        600    700

FIGURE 2.56 The Observation Errors for the VGSA Model and an Extended Particle
Filter.




                    Histogram for the VGSA Residuals
0.07
                                                    VGSA
0.06                                             normal(x)

0.05

0.04

0.03

0.02

0.01

   0
       –10   –8    –6    –4     –2     0   2     4         6     8    10

FIGURE 2.57 The VGSA Residuals Histogram. The residuals are fairly normal.
The Inference Problem                                                        181

                          Variogram for the VGSA Residuals

1.15
                                                     Variogram
 1.1                                                        1.0


1.05


   1


0.95


 0.9


0.85
       0      5      10      15    20   25    30    35       40   45   50

FIGURE 2.58 The VGSA Residuals Variogram. The variogram is close to 1 as
expected.


Auto-Correlation Having p = 7 parameters and taking K = 27, we shall have
K − p = 20 , so we will compare the output of the Box-Ljung test to the χ220
threshold, which, as previously mentioned, for a conﬁdence of 0.95 is around
31.5. We ﬁnd a value of 0.001138, which deﬁnitely passes the test. This shows
that the residuals are indeed uncorrelated.


Variogram The variogram still indicates that we have independent and iden-
tically distributed random variables. Calling

                     1                 1  2  1  2
              γh =     E (ẽk+h − ẽk)2 = E ẽk+h + E ẽk − E[ẽk+hẽk]
                     2                   2         2

we should obtain 12 + 12 −0 = 1, which is indeed the case as seen in Figure 2.58.


VGG        The observation is zk = ln Sk+1
                                                           √
                           zk = zk−1 + (µS + ω)t + θxk + σ xkBk

with ω = ν1 ln(1 − θν − σ2 ν/2), and the hidden state is

                                           xk = Yk(t)
182                                                           INSIDE VOLATILITY ARBITRAGE


We could take advantage of the fact that VG provides an integrated density
of stock return [182]. Calling z = ln(Sk/Sk−1) and h = tk − tk−1 and posing
                                           h
                       ξh = z − µS h −       ln(1 − θν − σ2 ν/2)
                                           ν
we have
                                    h −1
                                       2ν 4        
         2 exp θξh /σ2        ξ2h                  1                  
 p(z|h) = h √       h                      Kh−1      ξ2h 2σ2 /ν + θ2
         ν ν 2πσ ν       2σ /ν + θ
                            2       2         ν 2  σ 2


where Kα (x) corresponds to the modiﬁed Bessel function of second kind. As
we can see, the dependence on the gamma distribution is “integrated out.”
For the VGG for a given arrival rate dt ∗ = dYt we have a VG distribution
and
                 d ln St = (µ + ω)dt + B(γ(dt ∗  1 ν); θ σ)
and the corresponding integrated density becomes
                                                   h∗ − 1                      
                                                     2ν
              2 exp(θξ /σ2 )             ξ2h              4
                                                                             1                    
p(z|h h∗ ) = h∗ √ h ∗                                        K h∗ − 1            ξ2h 2σ2 /ν + θ2
             ν ν 2πσ( hν )          2σ2 /ν + θ2                 ν   2       σ 2

                                                                        (2.32)
hence the idea of using the arrival rate as the state and using the following
algorithm.

 1. Initialize the state x0(i) and the weight w0(i) for i between 1 and Nsims

                                      While 1 ≤ k ≤ N

 2. Simulate the state xk for i between 1 and Nsims
                                                                
                        x̃k(i) = F −1 µa  νa ; t U (i) [0 1]

    where as before F represents the gamma CDF.
 3. Calculate the associated weights for each i

                                   wk(i) = wk−1
                                            (i)
                                                p(zk|x̃k(i))

    with p(zk|x̃k(i)) as deﬁned in (2.32) where h will be set to t and h∗ to
    x̃k(i)
 4. Normalize the weights

                                                 wk(i)
                                     w̃k(i) =   Nsims (i)
                                                i=1 wk
The Inference Problem                                                         183

 5. Resample the points x̃k(i) and get xk(i) and reset wk(i) = w̃k(i) = 1/Nsims .
 6. Increment k, go back to Step 2 and Stop at the end of the While loop.

As for VGSA, numeric tests were carried out in the following way. After
choosing a time step t = 1/252, µS = 0 and a parameter set

            = (µa = 10.0 νa = 0.01 ν = 0.05 σ = 0.2 θ = 0.002)

an artiﬁcial time series of N = 500 spot prices was generated. The preceding
ﬁltering algorithm was then applied to this time series and the resulting
likelihood was maximized. The optimal parameter set was

                         ˆ = (9.17 0.19 0.012 0.21 0.0019)

     It therefore seems that the parameters ν and νa are not recovered prop-
erly. Hence we ask, how sensitive are the observable spot prices to these
variables? Simulating two time series with the two different parameter sets,
we can see in Figure 2.59 that the results could be very close. This once again
brings up the issue of inference reliability. Not having enough data points,
we can get parameter sets that are quite different from the real ones and that
could generate similar time series. This is consistent with what we have seen
for diffusion-based processes.


                        Simulated Log Stock Prices

 7

6.5


 6


5.5


 5


4.5                                                     lnS
                                                     lnS-bis
 4
      0   50   100   150     200   250   300   350   400   450    500

FIGURE 2.59 Simulation of VGG-based Log Stock Prices with Two Different
Parameter Sets  = (µa = 10.0 νa = 0.01 ν = 0.05 σ = 0.2 θ = 0.002) and  =
(9.17 0.19 0.012 0.21 0.0019). The observed time series remain close.
184                                                     INSIDE VOLATILITY ARBITRAGE


A Bayesian Approach for VGSA An approach similar to the one in the paragraph
on the Bayesian approach for Heston could be used here, because the latent
state follows the same square-root SDE. The only thing that changes is the
likelihood function. Instead of having a conditionally log normal observa-
tion, we have a conditionally VG observation. Furthermore, we do know the
density of the VG distribution under a closed form as previously mentioned.
     Indeed as previously mentioned, we have the state (the arrival rate)
                                                √
                         dyt = κ(θ − yt )dt + σy yt dWt
and the observation
                   d ln St = (µS + ω)dt + B(γ(dt ∗  1 ν); θ σ)
and the corresponding conditional likelihood becomes
                                                              h∗ 1
                             2 exp θxh /σ2            xh2        2ν − 4
            p(ln Sk|yk ) = h∗ √          ∗
                            ν ν 2πσ( hν ) 2σ2 /ν + θ
                                                            2
                                        
                                        1
                            × K h∗ − 1        xh2 (2σ2 /ν + θ2 )
                                 ν 2    σ2
with Kα (x) the modiﬁed Bessel function and
                                        h                 
              xh = ln(Sk/Sk−1) − µS h − ln 1 − θν − σ2 ν/2
                                        ν
               h = t
and
                                    h∗ = ykt
Finally, integrating over time, we have
                                         N
                                         
                        p(ln S|y ) =         p(ln Sk|yk )
                                         k=1

Note that in the classical VGSA model there is no correlation between the sys-
tem noise and the observation noise. This means that the likelihood function
will not depend on the parameters κ, θ, σy , and therefore the MH update step
becomes almost a Gibbs sampler (except for the adjustment factor N    k=1 xk ).
                                                                            2



RECAPITULATION
We tested three categories of models: the Heston/GARCH category where
a pure diffusion assumption was used, the Bates category where Poisson
jumps were added to the stock SDE, and the VG category where a gamma
distribution was applied to the time dimension.
The Inference Problem                                                       185

Model Identiﬁcation
We saw from the table in Section 2.3.10 that in the pure diffusion category,
a power of 3/2 outperformed the Heston model (power of 1/2). As stated,
this is in line with the ﬁndings of Engle & Ishida [95].
     Needless to say, adding Poisson jumps (Bates model) will reduce the
MPE/RMSE of the ﬁlters; however, it will also cause the number of param-
eters to increase. A simple comparison between the residual errors is there-
fore not fair. In other words, given the fundamental differences between the
categories, we need to judge their appropriateness not by comparing the
residuals, but by using ﬁnancial arguments such as, should the stock process
contain jumps or not? Once a category is chosen, then we can compare the
performance of models belonging to a given category.
     Note that a number of likelihood-based tools exist, such as the Akaike
information criterion [100], which will take into the account the number of
parameters when assessing the goodness of ﬁt for a model. These tools would
therefore allow us to compare models belonging to different categories (e.g,
Heston vs. VGSA). However, these criteria remain valid only asymptotically.
As we saw, this often requires a large number of data points, which may or
may not be readily available.


Convergence Issues and Solutions
No matter which category we choose, it seems that the same convergence
issues exist. For all the foregoing models, we can see that a parameter affect-
ing the drift of the observation is much easier to estimate than one affecting
the noise of the observation. For the pure diffusion category, we saw that
all four parameters ω, θ, ξ, and ρ were difﬁcult to estimate (in some cases)
and that the two latter parameters, which affect the noise of the noise, were
even harder to estimate properly. For the Bates model, we saw that the jump
parameters λ, j were much more straightforward to estimate than the afore-
mentioned four diffusion parameters. For the VGSA models, we saw that the
VG parameters θ, ν, and σ (which once again, affect the observation drift)
are much easier to infer than the arrival-rate parameters κ, η, and λ.
     All this was explained via 
                                the poor observability at a daily frequency level
                                  √ 
owing to the fact that t = o      t . We tested the validity of this statement
by artiﬁcially reducing the observation noise and saw the convergence rate
increase dramatically.
    As stated, a possible solution would be to employ more observation
points via the use of high-frequency data. We saw that the increase in the
number of observations and the decrease in t (after a certain level) do not
cancel, and a higher frequency would indeed cause the likelihood function
186                                              INSIDE VOLATILITY ARBITRAGE


to have a higher value and provide a better estimation of the parameters. In
any case, because we do not know in advance how good the inference results
will be and whether we are in the asymptotic area or not, it is always a good
idea to perform a simulation test and determine the sampling distribution of
each parameter.
     In the next chapter, we shall apply these inference tools to a speciﬁc
question: are the implied distributions from the stock and options markets
consistent?
                                                                CHAPTER         3
                            The Consistency Problem

    Whether cross-sectional option prices are consistent with the
    time-series properties of the underlying asset returns is probably
    the most fundamental of tests.
                                                       — David S. Bates




INTRODUCTION
In the previous chapter, we discussed two approaches for stochastic volatility
parameter estimation: the cross-sectional one, in which we use a number
of options prices for given strike prices (and possibly maturities), and the
time-series approach, in which we use the stock prices over a certain period
of time. One natural question1 would therefore be the following: Will the
theoretically invariant portion of the parameter sets obtained by the two
methods be the same?
     More accurately, supposing we are at time t = 0 and we use J options
with strikes K1  ... KJ and with maturity T , we have
                                  
                                    J
                                         
            ˆ options = argmin            Cmodel(t = 0 S0  Kj  T  )
                                  
                                    j =1
                                                         
                                                      2 
                          − Cmkt(t = 0 S0  Kj  T )                     (3.1)
                                                         

These options could include calls or puts. Alternatively, during the period
[0 T ] we can observe (Sk)0≤k≤N corresponding to the time points t0  ... tN

1 Aït-Sahalia [6], Bakshi et al. [20], and Dumas et al. [88] have already asked a

similar question; however, they use a different approach for the time-series treatment.



                                                                                  187
188                                                   INSIDE VOLATILITY ARBITRAGE


with t0 = 0 and tN = T, and then apply one of the previously discussed ﬁlters
and estimate the parameter set via the maximum likelihood method.

                      ˆ stocks = argmax{L(S0  ... SN  )}                   (3.2)

Now the question is how different these estimations for (ξ ρ) are and why.
     As we saw in the previous chapter, the size of the time interval t and the
time-series length are to be questioned: Indeed t has to be small enough for
us to be able to apply the Girsanov theorem. However, we saw that for a very
small t, the ﬁltering errors are so little that the MLE will not necessarily
converge to the right parameter set. On the other hand, we would need
the time series to be as long as possible, which requires a high observation
frequency.
     This brings up a more fundamental question. The current ﬁnancial eco-
nometrics literature seems to make inference-based conclusions using a lim-
ited amount of daily data. As we saw in Chapter 2, the time-series infer-
ence results are not necessarily reliable unless the number of observations
is sufﬁciently large. This is the central question of this chapter: Are the im-
plied parameters from the options markets and the assets time series indeed
inconsistent?
     Many practical issues need to be questioned: How many strikes should
we be using in the cross-sectional analysis and which ones? Should we use
only OTM puts and calls for liquidity reasons? Many use a penalty function
p() in the cross-sectional optimization in order to get reasonable results. Do
we need such a function here? In the cross-sectional method, what value for
v0 are we using? Should we estimate this value together with the other four
parameters? If so, should this estimated v̂0 be used in the time series?
     If the results are substantially different for the parameters ξ and ρ (as-
suming the validity of the Girsanov theorem), can this test be used as an
argument against the validity of the Heston stochastic volatility model? Or
would it mean that the options markets do not predict the stock movements
as they should? And if so, does this mean that there is a proﬁtable trading
strategy to take? That is, are options systematically mispriced?
     If the Heston model is judged to be incorrect, what is the correct
model—GARCH or 3/2? Is the diffusion assumption itself to be questioned?
Do we need to introduce jumps?2

2 Note that an alternative method not involving any optimization would be a method

of matching of moments. Indeed the Heston parameters ω θ ξ ρ are analytically
related to the ﬁrst four moments of the time series (mean, variance, skew, kurtosis).
The calculation of the moments from the time series is fairly easy. The calcula-
tion of the moments from the options would require the use of the Carr-Madan
[50] replication strategy using all available strike prices. However, because the
The Consistency Problem                                                        189

     Another way to approach the question is to reason in the following man-
ner. If the information contained in the options markets is indeed
inconsistent with the one embedded in the assets time series, there should be
a regularly and conclusively proﬁtable trade strategy. For instance, a higher
volatility-of-volatility and more negative correlation in the options market
should indicate the possibility of a proﬁtable skewness trade (to be explained
later) in absence of crashes. We could therefore use the proﬁt/loss of this trade
as an empirical measure of the inconsistency of the information.
     If (and only if!) there exists a regular and deﬁnite proﬁt generated from
this strategy, we can conclude that there is inconsistency. It is important to
note that this empirical measure is model free.
     In our empirical analysis, unless stated otherwise, we shall use S&P 500
calls and puts. There are two main reasons for this. First, these are the most
liquid european options available on the CBOE. They expire on the third
Friday of each contract month at the open. Second, abundant research has
already been carried out on these options. Aït-Sahalia [6]; Bakshi, Cao, and
Chen [20]; Bates [30]; Dumas, Fleming, and Whaley [88] and many others
have all carried out their empirical analysis on S&P 500 options.
     The data quality is obviously dependent on the degree of liquidity.
Another issue we need to take into account is that of synchronization
between the spot close price and the option close price. Even if the tim-
ing of these two closings is off by a few minutes, the accuracy of the implied
volatility can be affected. Bates [32] speciﬁcally mentions this issue.
     Let us be clear on the fact that this chapter does not constitute a thorough
empirical study of the stock versus the options markets. It rather presents
a set of examples of application of our inference tools constructed in the
previous chapter. There clearly could be many other applications for these
tools. As discussed in Chapter 2, model identiﬁcation is another instance.


THE CONSISTENCY TEST

In this section we shall compare the values of (ξ ρ) in the results ˆ options
to ˆ stocks obtained via MLE. The time period [0 T ] is ﬁxed, and the time
interval t for the stock is daily, as in Chapter 2.


information contained in the ﬁrst four moments is less complete than the informa-
tion contained in the density, the optimization method is more accurate. It might
seem that by avoiding the numeric optimization involved in our method we would
gain precision; however, given that the equations linking the ﬁrst four moments and
the four parameters are nonlinear, we would need to solve them numerically, which
would be similar to an optimization.
190                                                    INSIDE VOLATILITY ARBITRAGE


The Setting
The test is based on SPX options as of 01/02/2002 expiring in approximately
1 year from the calibration date. The daily time series is taken during a period
of 12 years corresponding to approximately 3000 points. The start of the
period is 10 years before the calibration date and the end of the period is
1 year after the expiration of the options. Ideally we should only use the
asset prices between the calibration date and the expiration to see whether
the options predict the asset movements consistently. However, this would
provide us with too few observation points.
     In what follows we will be considering one example of comparison
between cross-sectional and time-series implied parameters. Many other sim-
ilar examples were examined. They are not reported here because they do
not change the conclusions. The original contribution of our approach is
presenting a systematic way to evaluate time-series embedded parameters.
We shall do this via the methodologies detailed in Chapter 2.


The Cross-Sectional Results
We consider one-year options as of January 2, 2002, for close-to-the-money
options. The calibration is done via LSE Monte Carlo mixing as well as
the Fourier inversion applied to the Heston model. We ﬁx the instanta-
neous variance v0 at 0.04, and we take the index level at S0 = $1154.67. As
usual we take the appropriate interest-rate rT and dividend-yield3 qT , where
T represents the options’ maturity. The dividend yield could, for instance,
be the one implied from the forward contracts FT calculated as
                            qT = rT − 1/T ln(FT /S0 )
We use various strike-price sets (Kj ) and determine the average optimal
one-year parameters. Needless to say, the results are obtained under the
risk-neutral measure. We obtain the risk-neutral implied parameter set in
Table 3.1. which represents a rather √ high negative skewness and a high
kurtosis.4 The long-term volatility is ω/θ ≈ 0.17. Needless to say, these
parameter values vary everyday, but usually remain in the same range.

Robustness Issues for the Cross-Sectional Method

 1. For the cross-sectional analysis, we have used a mixing Monte Carlo
    method. The Monte Carlo time steps of this method were spaced weekly.

3 No discrete dividends were considered.
4 We drop the “hat” notations for optimal parameters in this chapter for simpliﬁction.

For example, instead of ω̂ we simply write ω.
The Consistency Problem                                                                 191

TABLE 3.1 Average Optimal Heston Parameter Set (Under the Risk-Neutral Dis-
tribution) Obtained via LSE Applied to One-Year SPX Options in January 2002.
Various strike-price sets were used.

              ω                    θ                  ξ                  ρ
0.03620                        1.1612              0.4202              −0.6735



              Therefore, one natural question is how sensitive to this choice the results
              are. In order to verify this, we reran the simulations with daily Monte
              Carlo time steps and obtained

                               ˆ options−daily = (ω = 0.036846 θ = 1.169709
                                              ξ = 0.42112 ρ = −0.67458)

     which is close to the original set. We also checked the results with the
     volatility-of-volatility series method, as well as the Fourier inversion
     method, and obtained comparable parameters.
  2. For our cross-sectional calibration, we used call bid prices. It is well
     known that calls and put prices are not always consistent. Indeed, as
     can be seen in Figure 3.1 the Put and Call implied-volatilities are slightly


                                       SPX Put and Call Implied Vols
                  0.24

              0.235                                               Call Bid
                                                                  Call Ask
                  0.23                                             Put Bid
                                                                  Put Ask
              0.225                                               Average
Implied Vol




                  0.22

              0.215

                  0.21

              0.205

                   0.2
                     1040   1060   1080    1100   1120     1140   1160   1180    1200
                                                  Strike

FIGURE 3.1 Implied Volatilities of Close to ATM Puts and Calls as of 01/02/2002.
Maturity is 2002/12/21 and index at 1154.67 USD’s. The bid–ask spread can clearly
be observed.
192                                                    INSIDE VOLATILITY ARBITRAGE


      different, which seems to be a violation of put-call parity.5 However, this
      difference is not large enough (the put and call bid–ask spreads actually
      overlap), and a proﬁtable arbitrage cannot take place simply based upon
      this difference. This is why we consider the midpoint between puts and
      calls to be bids and asks.
      Our implied volatility is therefore
                       1
             σimp =       σimp (CallBid ) + σimp (CallAsk) + σimp (P utBid )
                       4               
                       +σimp (P utAsk)

      Using these “mid” implied volatilities as opposed to the original call bids
      we obtain a parameter set

                      ˆ options−mid−call−put = (ω = 0.043184
                   θ = 1.173119 ξ = 0.40258 ρ = −0.64593)
 3. If we do include v0 in the set of parameters  = (ω θ ξ ρ v0 ) , then we
    obtain

       ˆ options−mid−call−put = (ω = 0.043224 θ = 1.144957 ξ = 0.482009
                                            √
                            ρ = −0.661427 v0 = 0.224659)
                                            √
    It is possible to see that the optimal v̂0 is around 0.20, which corres-
    ponds to our initial choice.
 4. As already mentioned, further-from-the-money options are less reliable
    in terms of pricing and liquidity. However, disregarding them decreases
    the cross-sectional sensitivity to the volatility-of-volatility parameter.
       Adding to the previous close-to-the-money strikes, additional further-
    from-the-money ones, we ﬁnd
              ˆ options = (ω = 0.035896 θ = 1.149324 ξ = 0.386453
                                       √
                      ρ = −0.659319 v0 = 0.221988)
    Again, the drift parameters are stable, and so is v0 . The question is, how
    are the volatility parameters affected? Interestingly, we do not observe a
    great difference from what we had with the previous sets. We therefore
    have a good degree of robustness. In any case, we use various sets of
    strike prices and take an average over the optimal parameter sets.
 5. One issue to consider in the cross-sectional method is how the risk-
    neutral implied distribution or, in our case the parameter set  evolves
    over time. Needless to say, if the model was perfectly correct these par-
    ameters would never change; however, as we know, this is never the case.

5 This is most probably due to the illiquidity of ITM options, as explained in [192].
The Consistency Problem                                                    193

    The question therefore becomes, how time-homogeneous are these par-
    ameters? Considering the same maturity 12/21/2002 but at a date closer
    to this maturity, we use close-to-the-money strikes. More accurately, we
    stand at 09/03/2002, take the spot at $878.02, and use the yield curve as
    of 09/03/2002.
         The strikes are
                 Kset = {775.00 800.00 825.00 850.00 875.00
                        900.00 925.00 950.00 975.00}
    The optimization via Monte Carlo mixing provides
            ˆ options = (ω = 0.0501244 θ = 1.189817 ξ = 0.547149
                                        √
                         ρ = −0.661552 v0 = 0.265441)
    which is not too far from the other parameter sets.


Time-Series Results
As mentioned, the ﬁrst idea is to choose a period corresponding to the life of
the options considered in the previous section. In fact, we would like to see
whether the options are predicting the underlying asset dynamics correctly
during their life. However, this provides us with one year of daily data, or
252 points, which as we know from the previous chapter is highly insufﬁcient
for time-series estimators. In order to obtain more reliable results, we use
various ﬁlters (EKF, EPF, etc.) and take the average optimal parameter set. For
a period of 12 years ending on January 2004 (which includes the options’
life) and applying the ﬁlters studied in Chapter 2, we obtain the average
results given in Table 3.2.
     The results in Table 3.2 show a lower (ξ ρ) and therefore a lower
implied skewness and kurtosis—lower than the ones obtained from the
options markets.

Robustness Issues for the Time-Series Method Given the above results, it would
be instructive to test the sensitivity of the observations to the drift param-
eters (ω θ) on the one hand, and to the volatility parameters (ξ ρ) on the

TABLE 3.2 Average Optimal Heston Parameter Set (Under the Statistical Distribu-
tion) Obtained via Filtered MLE Applied to SPX between January 1992 and January
2004. Various ﬁlters were used in the MLE.

   ω                  θ             ξ                ρ
0.018620         0.523947       0.096389         −0.132527
194                                                                        INSIDE VOLATILITY ARBITRAGE

                               Sensitivity of Observations to Volatility Parameters

                  6.95

                   6.9

                  6.85

                   6.8
Log Stock Price




                  6.75

                   6.7

                  6.65

                   6.6
                             Cross-Sectional Parameters
                  6.55         Time-Series Parameters
                   6.5
                         0          50          100          150          200         250
                                                      Days

FIGURE 3.2 The Observations Have Little Sensitivity to the Volatility Param-
                               √
eters. One-year simulation with v0 = 0.20, ω = 0.04, θ = 0.5. Cross-sectional uses
ξ = 0.036 and ρ = 0.50, whereas time series uses ξ = 0.09 and ρ = −0.80. This is
consistent with what we had seen previously.


other.6 The point is that even if the state vk itself is greatly affected by these
volatility parameters, the impact of these parameters on the observations is
small. However, the impact of the drift parameters is quite large. This could
explain why the cross-sectional and time-series volatility-of-volatility param-
eters are not close. This point can be observed in the simulations represented
in Figures 3.2 through 3.5. Note that this issue is related to the discussion in
Chapter 2 on the sampling distribution. As previously stated, ξ and ρ have a
lesser effect on the observations because they affect the “noise of the noise.”


Financial Interpretation
The current ﬁnancial econometrics consensus is the following: No matter
which case we consider, the cross-sectional parameters ξ and ρ are always
greater (in absolute value) than the time-series ones. This means that the
skewness and the kurtosis implied from options are stronger than those
implied from the time series. As we will see in the following paragraphs, this
could suggest a trade to take advantage of this inconsistency, supposing that

6 Note that we could not have done this separation in a nonparametric model, such

as in [6].
The Consistency Problem                                                                 195

                              Sensitivity of the State to Volatility Parameters

                  0.065
                                                 Cross-Sectional Parameters
                                                    Time-Series Parameters
                   0.06


                  0.055
 Variance




                   0.05


                  0.045


                   0.04

                  0.035
                          0       50          100          150          200       250
                                                    Days

FIGURE 3.3 The State Has a Great Deal of Sensitivity to the Volatility Param-
                               √
eters. One-year simulation with v0 = 0.20, ω = 0.04, θ = 0.5. Cross-sectional uses
ξ = 0.036 and ρ = 0.50, whereas time series uses ξ = 0.09 and ρ = −0.80.



                              Sensitivity of Observations to Drift Parameters
                  7.35
                   7.3
                  7.25
                   7.2
Log Stock Price




                  7.15
                   7.1
                  7.05
                    7
                  6.95
                                               Cross-Sectional Parameters
                   6.9                            Time-Series Parameters
                  6.85
                         0       50           100          150          200       250
                                                    Days

FIGURE 3.4 The Observations Have a Great Deal of Sensitivity to the Drift Param-
                               √
eters. One-year simulation with v0 = 0.20, ξ = 0.036, ρ = 0.50. Cross-sectional uses
ω = 0.04 and θ = 0.50 whereas time series uses ω = 0.08 and θ = 5.0.
196                                                                  INSIDE VOLATILITY ARBITRAGE

                       Sensitivity of the State to Drift Parameters
           0.07


           0.06


           0.05
Variance




           0.04


           0.03
                                         Cross-Sectional Parameters
                                            Time-Series Parameters
           0.02


           0.01
                  0     50           100             150            200            250
                                             Days

FIGURE 3.5 The State Has a Great Deal of Sensitivity to the Drift Parameters. One-
                    √
year simulation with v0 = 0.20, ξ = 0.036, ρ = 0.50. Cross-sectional uses ω = 0.04
and θ = 0.50, whereas time series uses ω = 0.08 and θ = 5.0.



the options are misjudging the spot movements. We can observe the above
statement graphically by plotting the SPX volatility smile from the options
market prices on the one hand, and from the time-series implied parameters
on the other. Note that we need no calibration for the options because we
are using the usual Black-Scholes implied volatility. Figure 3.6 shows the
difference between the two slopes. Again, the options curve has a stronger
(negative) slope, which is consistent with a stronger negative product ξρ.
     As explained in [69], the higher moments of the stock-price return can
be calculated from the stochastic-volatility model parameters. Indeed, for a
given parameter set  = (ω θ ξ ρ) , we have
                                                                                    
                                                                                 
                      3ξρe θ
                                     ω              θT                    θT     θT
                                  θ 2 − 2e + θT + θT e − v0 1 + θT − e 
                          1 T
                          2
skewness =              √                                                           
                          θ                                                 3     
                                        ω                                      2
                                          [(1 − θT + θT eθT ) + v0 (eθT − 1)]
                                        θ

and
                                                            ω
                                                                               
                                                                 A1 − v0 A2
                         kurtosis = 3 1 + ξ              2   θ
                                                                    B
The Consistency Problem                                                                   197

              Options Implied versus Historic Volatility Smile for SPX as of 01/02/2002

              0.235

                                                                Options
               0.23                                             Historic

              0.225
Implied Vol




               0.22


              0.215


               0.21


              0.205
                  1040    1060   1080    1100    1120   1140    1160    1180   1200
                                             Strike (USD)

FIGURE 3.6 Comparing SPX Cross-Sectional and Time-Series Volatility Smiles (with
Historic ξ and ρ) as of January 2, 2002. The spot is at $1154.67.


with y = θT and
                                            
        A1 = 1 + 4ey − 5e2y + 4yey + 2ye2y + 4ρ2
               y                                 
               6e − 6e2y + 4yey + 2ye2y + y 2 ey
                                                            
        A2 = 2 1 − e2y + 2yey + 8ρ2 2ey − 2e2y + 2yey + y 2 ey
                  ω                           2
         B = 2θ       1 − ey + yey + v0 (ey − 1)
                   θ

Without entering into the details of the calculations, we can see that for given
ω and θ, higher (ξ |ρ|) correspond to higher skewness and kurtosis. As we
said in the previous chapter, the skewness depends on ω, θ and the product
ξρ, which has a more reliable estimation than the separate values of ξ and ρ.
This makes the estimation of the skewness more trustworthy.

THE PESO THEORY

Background
As [6] mentions, one possibility regarding the cross-sectional versus time-
series observed differences is the following. As we know, the time series
corresponds to one realization of the stock-return stochastic process. Now
198                                                 INSIDE VOLATILITY ARBITRAGE


supposing that the true stock stochastic differential equation (SDE) contains
jumps, there is a possibility that the historic path we are observing does
not contain any of these jumps.7 This is referred to as the peso theory. As
mentioned in [12], this term goes back to Milton Friedman in his analysis of
Mexican peso during the early 1970s. The Mexican interest rates remained
signiﬁcantly above the U.S. interest rates, although the peso was pegged at
0.08 dollar per peso. Friedman argued that the interest rates reﬂected an
expectation about a future devaluation of the peso. In August 1976, the
peso was devaluated by 37.5% to a new rate of 0.05 dollar per peso, thus
validating the previous interest rate differential.
     This assumption seems reasonable because, as we saw in the previous
tests, the cross-sectional method usually provides higher volatility param-
eters (ξ ρ) and therefore higher skewness (in absolute value) and kurtosis.
Introducing a jump component in the options pricing model should lower
these optimal parameters.
     Note that in [3], Aït-Sahalia tries to ﬁnd out whether the discrete obser-
vations of S&P 500 come from a diffusion, or from a distribution containing
jumps. He derives a criterion for continuity of the paths

                     ∂2
                         ln (p(t y = Xt+t |x = Xt )) > 0
                    ∂x∂y

for every t > 0 and given (x y). Based on the implied cross-sectional dis-
tribution, he ﬁnds that S&P 500 options do consider jumps in the paths.
    Using the jump diffusion model, as we did in Chapter 2
                                   
                           1                √
           d ln St = µS − vt + λj dt + vt dBt + ln(1 − j )dNt
                           2
                                    √
              dvt = (ω − θvt )dt + ξ vt dZt

we may very well see no difference introduced from the parameters (λ j ) for
the time series and we can even disregard them. However, this does not mean
that the stock process does not contain jumps but rather that this speciﬁc
path happens to contain none.
     The options, by contrast, always include the possibility of jumps in their
pricing. Adding (λ j ) will affect the resulting (ξ ρ) from the cross-sectional
method.


7 Jackwerth and Rubinstein [155] refer to this phenomena as crash-o-phobia.
The Consistency Problem                                                           199

Numeric Results
We use the same options and time series as in the previous section.√As shown
in Merton’s paper [190], we have for a given volatility path σ = v
                       +∞
                                         (λ(1 − j )T )n
              Call =         e−λ(1−j )T                  CBS (S K T  σ rn )
                       n=0
                                               n!

with
                                      n
                                        ln(1 − j )
                              rn = r + λj +
                                      T
We then take the expectation upon the volatility stochastic process as we
usually do in a mixing algorithm.8
    We ﬁnd for the parameter set ˆ = (ω θ ξ ρ λ j ) the values
                                √
       ˆ options = (ω θ ξ ρ v0  λ j ) = (0.032648 1.165598 0.360646
                    −0.585302 0.218333 0.008982 0.913772)

instead of the previous pure-diffusion parameter set

       ˆ options−mid−call−put = (ω = 0.043224 θ = 1.144957 ξ = 0.482009
                                            √
                            ρ = −0.661427 v0 = 0.224659)

As we see even with the addition of jump parameters (λ j ), the cross-sectional
volatility parameters (ξ ρ) remain signiﬁcantly above the time-series param-
eters. This is in agreement with the ﬁndings of Bakshi, Cao, and Chen [20].
We have a small λ and a j close to one. This means that options are expecting
a large but infrequent jump; that is, they are factoring in the possibility of a
crash.


TRADING STRATEGIES
Supposing that the model we are dealing with is correct, and if the options
are mistaken in evaluating the stock distribution during their lifetime, there
should be an arbitrage opportunity to take advantage of. The ninth chapter
of the Härdle et al. book [128] has a description of these strategies. Note that
both these strategies are European and cannot be changed9 until maturity.

8 Note that an alternative method would be to use a Fourier inversion of the known

characteristic function, as Lewis does in [178] or [180].
9 As we will see further, we could unwind the deal prior to expiration. However, we

would then be subject to the movements of options prices.
200                                               INSIDE VOLATILITY ARBITRAGE


    At this point we should reiterate that the proﬁt and loss of this trade
could be used as an empirical and model-free measure of how consistent or
inconsistent the information embedded in the options is with the one in the
underlying stocks.


Skewness Trades
To capture an undervalued third moment, we can buy OTM calls and sell
OTM puts. Note that Aït-Sahalia [6] says that the options are overly skewed,
which means that the options skew is larger in absolute value. However, given
the negative sign of the skew, the cross-sectional skew is actually lower than
the one implied by the time series, hence the described strategy.
    Note that in order to be immune to parallel shifts of the volatility curve,
we should make the trade as vega-neutral as possible. The correspondence
between the call and the put is usually not one-to-one. Therefore, calling V
the vega, ’s the hedge ratios for C the call and P the put option, then the
hedged portfolio  will be
                                                             
                               VC                      VC
             = C(St  KC ) −     P (St  KP ) − C −     P S t
                               VP                      VP

and the positions in the options should be dynamically adjusted in theory.
However, that would cause too much transaction cost and exposure to the
bid-ask spread.
     As we shall see in the paragraph on “exact replication,” more-elaborate
strategies are available to better exploit the third-moment differences.


Kurtosis Trades
To capture an overvalued fourth moment, we need to use the “fat tails”
of the distribution. For this we can, for instance, sell ATM and far OTM
options, and buy close OTM options.


Directional Risks
Despite the delta-hedging, the skewness trade applied to an undervalued
third moment has an exposure to the direction of the markets. A bullish
market is favorable to it, and a bearish one unfavorable. The kurtosis trade
applied to an overvalued fourth moment generates a proﬁt if the market
stays at one point and moves sideways but loses money if there are large
movements.
The Consistency Problem                                                    201

                          Skewness Trading Strategy Pay-Off

          15

                                                         Pay-Off
          10


            5
Pay-Off




            0


           –5


          –10
                70   80         90       100       110        120   130
                                     Stock Price

FIGURE 3.7 A Generic Example of a Skewness Strategy to Take Advantage of the
Undervaluation of the Skew by Options. This strategy could be improved upon by
trading additional OTM puts and calls.


     This exposure to market conditions is consistent with the peso theory.
The skewness and kurtosis trading strategies above are proﬁtable given the
options’ implied moments, unless the options were actually right in factor-
ing in a large and sudden downward movement. This also makes sense be-
cause the way the options were priced changed only after the crash of 1987.
Prior to that, the volatility negative skew was practically absent altogether.
Figures 3.7 and 3.8 show generic examples of the strategies described above.
     Note that as the skew formula in [69] shows, the volatility-of-volatility
ξ affects the skew as much as the correlation ρ does. This explains why
sudden upward movements can hurt us as well. If the overall correlation
is negative but there are large movements in both directions, we will have
large third (in absolute value) and fourth moments, which would make the
options expectations correct. In fact, as we will see in the following example,
a large upward movement can make us lose on our hedge account.
     As many, such as [32] and [128], have mentioned, it is possible to
interpret this trade as an insurance selling strategy. The trade will gener-
ate moderate and consistent proﬁts if no crash happens. But if the crash does
happen we could suffer a large loss.

Skewness vs. Kurtosis The skewness trade seems to be a simpler one and has
a better chance to be realized. Indeed, in order to have a large negative skew,
202                                                           INSIDE VOLATILITY ARBITRAGE

                          Kurtosis Trading Strategy Pay-Off
            4
            2                                            Pay-Off
            0
           –2
           –4
Pay-Off




           –6
           –8
          –10
          –12
          –14
          –16
             70    80         90           100    110          120     130
                                    Stock Price

FIGURE 3.8 A Generic Example of a Kurtosis Strategy to Take Advantage of the
Overvaluation of the Kurtosis by Options. This strategy could be improved upon by
trading additional puts and calls.

we need a large volatility-of-volatility ξ (as we do for the kurtosis trade)
and a large negative correlation ρ. In other words, if for a given stock time
series we have a large volatility-of-volatility but a weak correlation, we will
not have a kurtosis trade opportunity but we will have a skewness trade
opportunity. The historic skew will be small and the historic kurtosis high.
Graphically, we could have the following interpretation. For these assets, the
historic distribution does have fat tails, but remains symmetric, whereas the
implied distribution has a fatter left tail. This is why we have a skewness trade
opportunity, even if we do not have a kurtosis trade opportunity. Finally, as
we previously mentioned, the estimation of the skewness from a time series
is more reliable because it depends only on the product of the volatility-
of-volatility and the correlation.

An Exact Replication
These trading strategies can be reﬁned using a Carr-Madan replication. As
explained in [50], we have for any payoff function f () the following identity
                                    F
                                          
         E[f (ST )] = f (F ) + erT       f (K)P (S0  K t = 0 T )dK
                                +∞ 0
                            rT        
                        +e          f (K)C(S0  K t = 0 T )dK
                                       F
                  rT
with F = S0 e          the forward price.
The Consistency Problem                                                          203

    In order to get the Das [69] skew and kurtosis calculations, we need to
take for the nth moment

                             f (ST ) = (ZT − E(ZT ))n

with
                                  ZT = ln(ST /S0 )

However, this trade will clearly have a much higher transaction cost than
the one described in the previous paragraph.


The Mirror Trades
Should we see the opposite conditions in the market, that is, having the skew
(in absolute value) or kurtosis undervalued by the options given a historic
path, we could obviously put on the mirror trades. The inverse of the peso
theory would be as follows. The stock in question has already had a crash and
the options are supposing there probably will not be another one in the near
future. Setting up the overvalued kurtosis trade in the previous paragraph,
we picked up a premium and made an immediate proﬁt and hoped that there
would not be a sudden movement. Here we start by losing money and hope
a crash will happen within the life of the option so that we can generate
a proﬁt. Because jumps and crashes are rare by nature, this trade does not
seem very attractive. Moreover, if there was a recent crash, the possibility of
another one is indeed reduced and we should believe the options prediction.
However, these mirror trades could be considered as buying insurance and
therefore as a protection against a possible crash.


An Example of the Skewness Trade
The algorithm is as follows. For a given date t0 we have S0 and choose the
closest maturity to T = t0 + 0.25 in order to have a three-month trade, we
then take the call and put strikes KC and KP as the closest ones to 1.10S0
and 0.90S0 , respectively.
    The original cost is therefore

         options(0) = CallAsk(S0  KC  t0  T ) − P utBid (S0  KP  t0  T )

Note that we buy a call at the offer price and sell the put at the market bid
price. At maturity, the position is worth

           options(T ) = MAX(0 ST − KC ) − MAX(0 KP − ST )
204                                                           INSIDE VOLATILITY ARBITRAGE


During the trade, we have a delta-hedging cash ﬂow of
                                       T −1
                                       
                         hedge = −            (St  t T )(St+1 − St )
                                        t=0

with
(St  t T ) = Call (St  KC  t T  σimp (t0  KC ))−P ut (St  KP t T  σimp (t0  KP ))
where the implied volatilities used in the hedge ratios are using the mid prices
(between bid and ask prices). The interest-rate cash ﬂow is
                                      T −1
                                      
                        interest =           (St  t T )(ert t − 1)St
                                       t=0

Our ﬁnal proﬁt or loss (PnL) is therefore
              P nL = options(T ) − options(0) + hedge + interest
If the options’ implied skew is indeed higher than justiﬁed by the stock move-
ments, then this trade should be proﬁtable. However, in case of a sudden large
movement, this will not be true anymore.
     We consider the case of the S&P 500 between 04/04/2002 and
06/22/2002. At that point in time, S0 = $1126.34, which means we can take
KC = $1250 and KP = $1050. We also have CallAsk(t0  K = 1250) = $3.20
and P utBid (t0  K = 1050) = $14.20, as well as the mid implied volatilities
of σimp (KC ) = 0.154 and σimp (KP ) = 0.214.
     As can be seen in Figures 3.9 and 3.10, the sudden spot movements
generate most of the loss (for instance, around day 50). We have at the end
of the trade
                                        ST = $989.14
                                     hedge = $50.39
                                   interest = $1.32
Therefore, the ﬁnal PnL (in dollars) is
    P nL = [0 − (1050 − 989.14)] + (14.20 − 3.20) + 50.39 + 1.32 = 1.85
As we can see, we hardly generated a proﬁt, given the “jumps” occurring in
the middle of the trade.
    Note that we generated a proﬁt in the beginning by selling an OTM
put that was more expensive than the OTM call we bought. We lost a large
amount because the spot ended below the put strike. However, we compen-
sated that via the hedge.
The Consistency Problem                                                       205

                             SPX Movements During the Trade

             1140

             1120                                       SPX Price

             1100

             1080
Spot Price




             1060

             1040

             1020

             1000

              980
                    0   10       20       30       40          50        60
                                         Days

FIGURE 3.9 Historic Spot Level Movements During the Trade Period.
                              Hedge PnL During the Trade

              30
                                                        Delta PnL
              20                                        Zero PnL


              10
Delta PnL




               0


             –10


             –20


             –30
                   0    10        20          30        40          50
                                       Days

FIGURE 3.10 Hedging PnL Generated During the Trade Period. As we can see, losses
occur upon jumps.

The Options Bid–Ask Spread It is important to know where we are buying the
call and selling the put on the start date. Are we buying the call at the offer
price and selling the put at the bid price? If so, we can lose the bid–ask spread,
as compared to the case in which we would buy and sell both options at the
206                                                    INSIDE VOLATILITY ARBITRAGE

                      Cumulative Hedge PnL

 60
                                  Cumulative Delta PnL
 50

 40

 30

 20

 10

  0

–10
      0     10        20       30       40        50         60
                              Days

FIGURE 3.11 Cumulative Hedging PnL Generated During the Trade Period. This
positive PnL will be offset by the option premiums and payoffs.

mid market. This spread averages approximately $1 for 10% OTM SPX
options.

Early Termination We also should consider an early unwinding of the trade.
Indeed as we get closer to maturity, our hedge-ratio might be close to one,
which will make our hedge account extremely sensitive to adverse stock
movements. In order to have a smoother PnL, we can buy back the put and
sell the call at a date (e.g. one month) prior to maturity. Again, it is important
to know whether we are unwinding the trade by selling the call at the bid
and buying back the put at the offer. If so, we will have suffered from the
bid–ask spread twice: once on the start date and once on the unwinding
(termination) date.
      This is not just a small detail, indeed having the right execution (at mid-
market) can change the average sign of the PnL altogether. Furthermore,
regardless of the bid–ask spread, we are subject to the movements of the
options prices. By contrast, if we hold the positions until expiration, we will
have a pure strategy between the original options prices and the spot price
movements.

Implied Volatility Term Structure Yet another issue to take into account is that,
in our back-testing, we used ﬁxed implied volatilities in order to calcu-
late the hedge ratios during the life of the trade. In reality, the implied
The Consistency Problem                                                             207

        Options Implied versus Historic Volatility Smile for MMM as of 03/28/2003
               0.31

                                                             Options
                0.3
                                                             Historic

               0.29
 Implied Vol




               0.28

               0.27

               0.26

               0.25

               0.24
                  120          125           130           135             140
                                        Strike (USD)

FIGURE 3.12 A Strong Option-Implied Skew: Comparing MMM (3M Co) Cross-
Sectional and Time-Series Volatility Smiles as of March 28, 2003. The spot is at
$131.66.


     Options Implied versus Historic Volatility Smile for CUM as of 03/28/2003
               0.45
                                                          Options
               0.44                                       Historic

               0.43
Implied Vol




               0.42

               0.41

               0.4

               0.39

               0.38
                  22.5    23         23.5         24        24.5         25
                                       Strike (USD)

FIGURE 3.13 A Weak Option-Implied Skew: Comparing CMI (Cummins Inc) Cross-
Sectional and Time-Series Volatility Smiles as of March 28, 2003. The spot is at
$24.59.
208                                                             INSIDE VOLATILITY ARBITRAGE


volatilities change every day even if we assume a sticky strike regime, in
which the stock price will not affect the implied volatility level. Even if our
strikes are ﬁxed, the time-to-maturities of the options decreases, and this
will make the implied volatilities vary. For S&P 500 the term structure of
implied volatility is upward-sloping, which means that theoretically all
implied volatilities should come down from their original levels at the
unwinding date.

Which Hedge Ratio should we use? In the hedging of our skew portfolio, which
 should we apply? In other words, we ask which implied volatility should
we use in the usual

                          e−q(T −t)N (d1 (St  K t T  σimp ))

If we believe that the volatility predicted by the options is wrong and the
historic levels are correct, we should then use
                                                                        
                imp              −1
               σstocks(K T ) = CBS   Cmodel(S0  t0  K T  ˆ stocks)

where
                       ˆ stocks = (ω̂opts  θ̂opts  ξ̂stocks  ρ̂stocks)
Note that this might give us a mismatch in terms of mark-to-market with the
existing option levels in the market. However, if the time series is actually
correct, the skew should eventually collapse before the options mature.10
We should note, however, that using the options’ implied volatilities makes
better practical sense because those are the ones at which the options are
actually traded.

Multiple Trades
The next natural step would be to repeat the previous trade in order to see
whether the trade would be statistically proﬁtable. We use SPX puts and calls
between 01/02/2002 and 02/01/2003 on the expiration month such that the

10 Bates [29] suggests the use of an adjusted delta as

                                                   K ∂σ
                                    ≈ BS −        V
                                                   S ∂K
where V represents the option vega. However, as he points out, this is the hedge ratio
as perceived by the options market and this perception could very well be wrong.
After all, this is what we are trying to take advantage of: the mispricing of the skew
by the options, supposing that the historic time series has the same dynamics as the
future spot movements.
The Consistency Problem                                                         209

original life of the trade is around three months. We systematically unwind
the trades around 20 business days to expiration. Once again, we buy 10%
OTM calls and we sell 10% OTM puts.
     We cover in this manner forty different cases. We calculate the PnL’s as
previously described and take their average.

     The results are mixed: If we put the trade on and unwind at the bid and
     ask levels, we will actually suffer a loss. However, if we can execute at
     the mid, then we will generate a proﬁt.

    This shows a lack of decisive proof on an inconsistency between the
options and stock markets.11 Indeed we have used the PnL of this trade as a
measure of discrepancy.12


High Volatility-of-Volatility and High Correlation
As previously discussed, many stocks do have a high historic volatility-of-
volatility ξ; however, given a weak (or even positive) spot-volatility correl-
ation ρ, the historic skew is still very low. This is especially true of “penny”
stocks. Indeed, when these stocks increase in price, in some sense they “come
back to life” and therefore become more volatile. This means that the his-
toric skew is actually positive, which seems to indicate an even stronger
case for a skewness trade. However, given that we are dealing with penny
stocks, the possibility of a crash for these stocks is high, and that is precisely
what causes the negative option–implied skew! The stock GW (Grey Wolf
Inc.) in Figure 3.14 is a good example for this case. This presents a trading
opportunity as shown in Figure 3.15. By contrast, there are cases, such as
MSFT (Microsoft), where we do have a strong historic negative correlation as
well as a high volatility-of-volatility. As the stock price goes down, the asset
becomes riskier and therefore more volatile. We can see this in Figure 3.16.
This justiﬁes the option-implied skew observable in Figure 3.17 and means
that there is no trade opportunity. The safest trade therefore seems to be an


11 Note that this trade generates a regular and stable proﬁt and sudden large losses.

This is in agreement with the interpretation of selling insurance and collecting the
premiums. It is very proﬁtable until there is a “disaster.”
12 There is a case where a skew trade should be considered. Even if we have an

inefﬁcient estimate of ξ and ρ, we do have their sampling distributions, as seen in
Chapter 2. If, for instance, the average estimate of ξ is 0.03, supposing the lowest
and highest estimates are respectively −0.20 and 0.20, and if ξopt = 0.40, then there
is an inconsistency in a conclusive manner. We would then have our cross-sectional
volatility-of-volatility far superior to its highest possible time-series estimate.
210                                                                 INSIDE VOLATILITY ARBITRAGE

                                Historic Spot Prices for GW
              5.5
                                                              Spot
              5

              4.5
Spot Price




              4

              3.5

              3

              2.5
                    0      50         100           150       200         250
                                             Days

FIGURE 3.14 GW (Grey Wolf Inc.) Historic Prices (03/31/2002–03/31/2003) Show
a High Volatility-of-Volatility But a Weak Stock-Volatility Correlation. The resulting
negative skew is low.




      Options Implied versus Historic Volatility Smile for GW as of 03/31/2003
         0.8
                                                           Options
       0.75                                                Historic
                  0.7

              0.65
Implied Vol




                  0.6

              0.55

                  0.5

              0.45

                  0.4
                     2.5    3          3.5           4        4.5           5
                                         Strike (USD)

FIGURE 3.15 The Historic GW (Grey Wolf Inc.) Skew Is Low and Not in Agreement
with the Options Prices. There is a skew trading opportunity here.
The Consistency Problem                                                                211

                                 Historic Spot Prices for MSFT

              31
              30                                                 Spot
              29
              28
Spot Price




              27
              26
              25
              24
              23
              22
              21
                   0       50          100          150          200         250
                                             Days

FIGURE 3.16 MSFT (Microsoft) Historic Prices (03/31/2002–03/31/2003) Show a
High Volatility-of-Volatility and a Strong Negative Stock-Volatility Correlation. The
resulting negative skew is high.




          Options Implied versus Historic Volatility Smile for MSFT as of 03/31/2003

              0.45
                                                              Options
              0.44                                            Historic

              0.43
Implied Vol




              0.42

              0.41

               0.4

              0.39

              0.38
                  20        22           24         26           28          30
                                          Strike (USD)

FIGURE 3.17 The Historic MSFT (Microsoft) Skew Is High and in Agreement with
the Options Prices. There is no skew trading opportunity here.
212                                                           INSIDE VOLATILITY ARBITRAGE

                               Historic Spot Prices for NDX
             1500
                                                              Spot
             1400

             1300
Spot Price




             1200

             1100

             1000

              900

              800
                    0   50           100          150         200        250
                                           Days

FIGURE 3.18 NDX (Nasdaq) Historic Prices (03/31/2002–03/31/2003) Show a High
Volatility-of-Volatility and a Strong Negative Stock-Volatility Correlation. The result-
ing negative skew is high.

index skewness trade, given that the likelihood of a crash is lower thanks to
the diversiﬁcation effect.
     Note that the strong negative historic skew is not limited to individual
stocks. Taking the case of the NDX index in Figures 3.18 and 3.19, we can
see that there is no trading opportunity available and the historic skewness
is in line with the one implied by the options prices.
     Therefore we have two possible reasons13 why a skewness trade oppor-
tunity may exist.

  1. Weak historic volatility-of-volatility (e.g., SPX [S&P 500])
  2. Weak Historic Correlation (e.g., GW [Grey Wolf Inc.])

If neither of the above is veriﬁed (e.g., NDX [Nasdaq] or MSFT [Microsoft]),
there is no skew trading opportunity.
     The graphical interpretation seen in Figures 3.12 through 3.19 is based
on the comparison of the observable options-implied skew
                         imp                −1
                        σoptions (K T ) = CBS (Cmkt(S0  t0  K T ))
and the skew implied from historic stock-price movements
                                                                     
              imp             −1
            σstocks(K T ) = CBS   Cmodel(S0  t0  K T  ˆ stocks)

13 These tests were performed around the end of March 2003.
The Consistency Problem                                                                   213

              Options Implied versus Historic Volatility Smile for NDX as of 03/31/2003

                0.4


               0.38
Implied Vol




               0.36


               0.34


              0.32
                                                                  Options
                                                                  Historic
                0.3
                  960    980    1000 1020 1040 1060 1080 1100 1120 1140
                                          Strike (USD)

FIGURE 3.19 The Historic NDX (Nasdaq) Skew is High and in Agreement with the
Options Prices. There is no skew trading opportunity here.



where CBS corresponds the usual Black-Scholes pricing function.
      Again we use the option-implied volatility-drift parameters ω̂options ,
θ̂options in ˆ stocks. The only assumption here would be that of diffusion
in the processes. Then, according to the Girsanov theorem, the volatility-
of-volatility and the correlation should be the same for the continuous stat-
istical and risk-neutral processes.


NON-GAUSSIAN CASE
As previously discussed, once we start dealing with some of the pure-jump
models, such as VGG, we will no longer have the Girsanov theorem and
cannot compare the parameters directly. However, no matter what the arrival
process is, we still have the VG parameters (σ ν θ) as in

                                  d ln St = (µS + ω)dt + X(dt; σ ν θ)

where, as before, µS is the real-world statistical drift of the stock log-return
and ω = ν1 ln(1 − θν − σ2 ν/2). As for X(dt; σ ν θ), it has the following
meaning
                                   X(dt; σ ν θ) = B(γ(dt 1 ν); θ σ)
214                                                INSIDE VOLATILITY ARBITRAGE


where B(dt; θ σ) would be a Brownian motion with drift θ and volatility σ.
In other words                            √
                     B(dt; θ σ) = θdt + σ dtN (0 1)
where N(0 1) is a standard Gaussian realization.
    Further, we know what the centralized third and fourth moments (skew-
ness and kurtosis) are
                              
    skewness = 2θ3 ν2 + 3σ2 θν t
                                                                    
     kurtosis = 3σ4 ν + 12σ2 θ2 ν2 + 6θ4 ν3 t + 3σ4 + 6σ2 θ2 ν + 3θ4 ν2 t 2

We therefore can always compare the skewness and kurtosis implied from
time series with those implied from options. However, a mismatch between
the two does not indicate an arbitrage opportunity because once again we
are comparing them under two different measures. Having said this, the
determination of the statistical density p() and the risk-neutral density q()
is still useful in the sense that it could allow us to determine the optimal
position we would take in the derivatives market given a utility function, as
described in [52] and [53].
     Indeed, having an increasing concave utility function U (), the idea is
to ﬁnd the optimal payoff φ(S), maximizing the expected utility at a given
horizon T , and among all possible payoffs f (S)
                                    +∞
                     φ = argmax         U [f (ST )]p(ST )dST
                                     0

In addition to this, we have the initial budget W0 , which imposes a constraint:
The discounted risk-neutral expected value of the payoff cannot be greater
than this initial budget.
                                 +∞
                     exp(−rT )         f (ST )q(ST )dST ≤ W0
                                0

This can be seen by using a “self-ﬁnancing” portfolio argument, as was done
by Black and Scholes. Using the two foregoing equations, we can write the
Lagrangian
            +∞                                     +∞
                         
   L(f ) =       U f (ST ) p(ST )dST − λ exp(−rT )       f (ST )q(ST )dST
            0                                            0

where λ is the Lagrange multiplier. We then can differentiate with respect to
the payoff f () and obtain the optimal payoff satisfying
                                     p(S) 
                          exp(rT )        U [φ(S)] = λ
                                     q(S)
The Consistency Problem                                                    215

or equivalently                                           
                                 −1                q(S)
                      φ(S) = (U )       λ exp(−rT )
                                                    p(S)
and the constant λ could be determined by a normalization, such as
                    +∞                           
                            −1               q(S)
         exp(−rT )      (U )      λ exp(−rT )        q(ST )dST = W0
                    0                         p(S)

This would provide us with the optimal payoff function that we would need
to choose in the derivatives market, and therefore motivates the estimation
of the statistical and risk-neutral densities p and q even for the non-Gaussian
case.


VGSA
Unlike VGG and many other pure-jump models, VGSA has a condition-
ally Gaussian arrival rate. This means that the volatility of the arrival-rate
λ should remain the same under the statistical and risk-neutral measures.
We therefore do have an approach that is analogous to the diffusion-based
models for VGSA.

VGSA vs. VG In their original paper [182], Carr, Madan, and Chang found
comparable results for the VG model applied to the S&P 500 for the period
1992–1994. As previously discussed, the VG model has an integrated dens-
ity, and therefore the MLE could be performed without any ﬁltering. The
statistical (historical) parameters are

                    (σ = 0.117200 θ = 0.0056 ν = 0.002)

And their risk-neutral parameters are

                    (σ = 0.1213 θ = −0.1436 ν = 0.1686)

Again we can see that the historical estimate for θ is close to zero, whereas
the risk-neutral one is signiﬁcantly negative. This negative θ is what creates
the negative skewness observed in cross-sectional estimations.
    We can try to reproduce the foregoing parameters with the VGSA model.
The resulting time-series parameter set is

         (κ = 79.499687 η = 3.557702 λ = 0.000000)
         (σ = 0.049656 θ = 0.006801 ν = 0.008660 µ = 0.030699)
216                                                      INSIDE VOLATILITY ARBITRAGE

                       Simulated Arrival Rates
 4

3.5

 3

2.5

 2

                                                        y
1.5
                                                    y-bis

 1

0.5
      0   50   100   150   200   250   300   350   400      450   500

FIGURE 3.20 Arrival Rates for Simulated SPX Prices Using  = (κ = 0.0000
η = 0.0000 λ = 0.000000 σ = 0.117200 θ = 0.0056 ν = 0.002) and  = (κ =
79.499687, η = 3.557702 λ = 0.000000 σ = 0.049656 θ = 0.006801, ν =
0.008660, µ = 0.030699). We can see that they are quite different.


Although the results seem to be very different, upon simulation we can see
that even if the resulting arrival rates and gamma variables are different, the
log stock prices are close. This can be seen in Figures 3.20, 3.21, and 3.22.
    An alternative would be to use the EPF algorithm with the VGSA model
over the same period, in which case we would obtain

           (κ = 190.409721 η = 3.459288 λ = 5.430759)
           (σ = 0.050243 θ = 0.002366 ν = 0.007945 µ = 0.032576)

Once again the most unstable parameters are (κ η λ), or the ones corre-
sponding to the arrival rate. We have seen this many times; the estimation
of the parameters affecting the noise is less reliable. This is in agreement
with what we had observed in Chapter 2 and shows the limitations of these
inference tools.

Cross-Sectional vs. Time-Series VGSA Applying the particle ﬁltering algorithm
described in Chapter 2 to S&P 500, we ﬁnd for 2001–2003 period the stati-
stical parameter set

                 (κ = 55.01778 η = 3.721583 λ = 8.666717
                  σ = 0.118637 θ = 0.060053 ν = 0.00103)
The Consistency Problem                                                    217

                        Simulated Gamma Times

0.07
                                                        G
0.06                                                 G-bis

0.05

0.04

0.03

0.02

0.01

   0
       0    50   100   150   200   250   300   350   400     450   500

FIGURE 3.21 Gamma Times for Simulated SPX Prices Using  = (κ = 0.0000 ,
η = 0.0000 λ = 0.000000 σ = 0.117200 θ = 0.0056 ν = 0.002) and  = (κ =
79.499687 η = 3.557702 λ = 0.000000 σ = 0.049656 θ = 0.006801 ν =
0.008660, µ = 0.030699).


                                    µS = −0.2910
and for the 1995–1999 period

            (κ = 1.151952 η = 5.418226 λ = 2.840461 σ = 0.055811
                          θ = 0.008626 ν = 0.006021)
                                 µS = 0.249051

A typical cross-sectional risk-neutral parameter set

           (κ = 2.72 η = 2.18 λ = 5.68 σ = 0.21 θ = −0.41 ν = 0.06)

As we can see, the implied skew and kurtosis are stronger for the cross-
sectional method compared with the statistical one. This is consistent with
results observed with other diffusion-based models.
     We perform more recent parameter estimations corresponding to
06/10/1999–06/10/2003 and 09/10/1999–09/10/2003 (via PF based on 1000
particles) for S&P 500. The results are reported in Table 3.3. As we can see,
the algorithm for the estimation of the statistical parameters seems fairly
stable provided that the initial parameters are chosen sufﬁciently close to the
optimal ones.
218                                                       INSIDE VOLATILITY ARBITRAGE

                      Simulated Log Stock Prices
   5

4.95

 4.9

4.85

 4.8

4.75

 4.7

4.65                                                   lnS
                                                    lnS-bis
 4.6
       0   50   100   150   200   250   300   350   400       450   500

FIGURE 3.22 Log Stock Prices for Simulated SPX Prices Using  = (κ = 0.0000 ,
η = 0.0000 λ = 0.000000 σ = 0.117200 θ = 0.0056 ν = 0.002) and  = (κ =
79.499687 η = 3.557702 λ = 0.000000 σ = 0.049656 θ = 0.006801 ν = 0.008660,
µ = 0.030699). Unlike arrival rates, the spot prices are hard to distinguish. This is
consistent with our previous observations.

TABLE 3.3 VGSA Statistical Parameters Estimated via PF. The stock drifts µS are
−0.009999 and −0.010000 respectively.

       period         κ           η           λ           σ               θ   ν

990910-030910 5.131967 6.499669 4.360002 0.087000 −0.024862 0.002000
990610-030610 6.514068 6.500001 4.360000 0.085000 −0.025000 0.001800



     The cross-sectional results could be computed in the same way as for
diffusion-based models. Quoting the results of Carr et al. [48], we have
Table 3.4. As shown, for some periods the risk-neutral implied λ is much
larger than the statistical one. This implies the possibility of a skewness trade,
as previously discussed.
     It therefore seems that, depending on the period, the statistical and risk-
neutral parameters λ may or may not be consistent.


A WORD OF CAUTION
Accuracy issues of the inference tools aside, there are practical considerations
we need to bear in mind. We are applying basic models, such as Heston or
The Consistency Problem                                                  219


TABLE 3.4 VGSA Risk-Neutral Arrival-Rate Parameters Estimated from
Carr et al. [48]

 period             κ        η            λ

Mar 2000           4.08    15.99        16.52
Jun 2000           7.24    32.15        24.81
Sep 2000           0.25     0.00         3.76
Dec 2000           2.18     5.71         5.67



VGSA, to a complex and constantly changing market. The true dynamics of
the stock and option markets are unknown, and, even if the above models
approximate them fairly well, there is no guarantee that there will not be a
mutation in future dynamics. The best we can do is to use the information
hitherto available and hope that the future behavior of the assets is not too
different from the past.
     Needless to say, as time passes by and new information becomes avail-
able, we need to update our models and parameter values. This could be
done within either a Bayesian or classical framework. Therefore, detecting
an inconsistency between the stock and option markets does not allow us
to make a riskless proﬁt, because we simply do not know what the future
is reserving for us. Once again, the skewness transaction described in this
chapter is more similar to selling insurance than to an arbitrage.


FOREIGN EXCHANGE, FIXED INCOME, AND OTHER MARKETS

Foreign Exchange
It is important to note that everything discussed in this book can be applied
to time series from other asset classes. A popular asset class to which the
Heston and Bates models are often applied is the foreign exchange (FX).
Bates [27] applies his jump diffusion model to the USD/deutsche Mark (now
euro) exchange rate.
      Calling Xt the FX rate process, for a Heston model, we would have
under the real-world measure P

                                 
                              1          √
             d ln Xt = µX − vt dt + vt dBt
                              2
                                       √                   
                 dvt = (ω − θvt )dt + ξ vt ρdBt + 1 − ρ2 dZt
220                                               INSIDE VOLATILITY ARBITRAGE


TABLE 3.5 The Volatility and Correlation Parameters for the Cross-Sectional and
Time-Series Approaches.

Method                   ξ              ρ
Cross-Sectional         0.45          −0.05
Time-Series             0.11          −0.09




with < dBt  dZt >= 0. We could therefore apply any of the previously used
ﬁlters to the discretization of the above SDE and obtain the optimal param-
eters via MLE.
    Under the risk-neutral measure Q, the FX drift is the difference between
the domestic and the foreign interest rates rD and rF . Therefore, we would
have
                                      
                                    1       √
         d ln Xt = rD (t) − rF (t) − vt dt + vt dBt(r)
                                    2
                                      √                       
             dvt = (ω − θ vt )dt + ξ vt ρdBt(r) + 1 − ρ2 dZt(r)
                     (r)   (r)




with < dBt(r)  dZt(r) >= 0. Note that the usual Heston closed-form option-
pricing expression is valid for the FX process.
     As previously discussed, according to the Girsanov theorem, (ξ ρ) should
be the same under the two measures. It is well known that compared with
equities, FX options markets have a much lower correlation ρ and have a
more symmetric smile. A skewness trade would therefore be more difﬁcult
to carry out in this market, but a kurtosis trade taking advantage of the high
volatility-of-volatility ξ embedded in the options markets could be appropri-
ate (Table 3.5).
     Similarly to what we did for the equities, we estimate the model par-
ameters from the three-month EUR/USD options cross-sectionally via a least-
squares method on January 2004. And we estimate the time-series par-
ameters (January 2000 to January 2005) via our second chapter ﬁlters. As
before, adding jumps to the Heston model will help lower the cross-sectional
volatility-of-volatility, but it remains insufﬁcient to reconcile them.



Fixed Income
The Time Series The same principles could be applied to the interest-rate
models with stochastic volatility. Using, for instance, a generalization of the
The Consistency Problem                                                        221

extended-Vasicek [146] short-rate model14 , we would have under P
                                     √
             drt = a[µ(t) − rt ]dt + vt dBt
                                    √                    
             dvt = (ω − θvt )dt + ξ vt ρdBt + 1 − ρ2 dZt

with < dBt  dZt >= 0. The difference between this ﬁrst SDE and the corres-
ponding ones in FX or equities is that the short-rate process is not directly
observable. What is observable is the bond yield, which has a closed-form
expression as a function of rt . In an extended Vasicek model, for a given path
of vt the price of a forward starting zero-coupon bond is

                            P (t T ) = A(t T )e−B(tT )r(t)

with
                                            1 − e−a(T −t)
                               B(t T ) =
                                                 a

                          P (0 T )            ∂ ln P (0 t)
        ln A(t T ) = ln            − B(t T )
                           P (0 t)                 ∂t
                                               2  t             
                          1            ∂B(0 t)             ∂B(0 u) 2
                        −     B(t T )                   1/            vu du
                          2              ∂t         0         ∂u

and the bond yield is
                                              ln P (t T )
                               R(t T ) = −
                                                 T −t
From the foregoing expressions we can fairly easily deduce that at a given
time t, the short rate simply becomes
                                                 ∂ ln P
                           r(t) = R(t t) = −           (t t)
                                                   ∂t
Therefore, we can observe the current short rate as the (negative) initial slope
of the yield curve, and we are back to the same framework as for equities
and FX processes.

The Cross Section  For the option pricing under Q we would have
                                        √
            drt = a (r) µ(r) (t) − rt dt + vt dBt(r)
                                         √                         
            dvt = (ω(r) − θ(r) vt )dt + ξ vt ρdBt(r) + 1 − ρ2 dZt(r)

14 In what follows we consider the speed of mean reversion a ﬁxed. One could

estimate it via a global calibration, for instance.
222                                                            INSIDE VOLATILITY ARBITRAGE

                   Euro Index Time-Series 2000–2005
140
          Euro Index
130


120


110


100


 90


 80
      0      200        400       600     800      1000    1200      1400
                                     Days

FIGURE 3.23 A Time Series of the Euro Index from January 2000 to January 2005.


with < dBt(r)  dZt(r) >= 0. Naturally because of the randomness of the volatil-
ity, we would lose the closed-form expressions for the options on bonds (or
caps or swaptions). However, we can still value them via a two-factor Monte
Carlo algorithm. Indeed, we have for an option with maturity U on a zero-
coupon bond with maturity T > U
                            T            + 
          c = E0       exp(−     rt dt) − 1
                                    U
                    +∞  +∞                T             +
              =                     exp(−         rt dt) − 1     q(rU  vU )drU dvU
                    0         0              U

where q(r v) represents the joint density of the short rate and its volatility.
    Once again, the Girsanov theorem would require the same (ξ ρ) par-
ameters under the real-world and risk-neutral measures. A more negative
correlation in the cross-sectional options market would therefore favor a
skewness trade, and a higher volatility-of-volatility, a kurtosis trade.
    One noticeable point is that, for a given level of option maturity U ,
we can have many bond maturities. It is known that a swaption can be
modeled and priced as an option on a coupon bond.15 However, there may
be many swap tenors for the same option expiration, which introduces an

15 See [146] for instance.
The Consistency Problem                                                  223

extra dimension. But nothing stops us from using many tenors and option
maturities at once for a cross-sectional calibration.
    The choice of the time-series period is still to be questioned. Do we
consider the period beginning at our cross-sectional date, or do we consider
a start date before this date? The latter would provide us with more data
points; however, these points would be historic. As we saw, we probably
would need the longer time series in order to have more reliable estimations.
                                                     References

 [1] Ackerberg D. A. (2000) “Importance Sampling and the Method of Simulated
     Moments” Department of Economics, Boston University and NBER.
 [2] Aihara S., Bagchi A. (2000) “Estimation of Stochastic Volatility in the Hull-
     White Model” Applied Mathematical Finance, 7.
 [3] Aït-Sahalia Y. (2001) “Telling from Discrete Data Whether the Under-
     lying Continuous-Time Model Is a Diffusion” Journal of Finance, Vol. 57,
     No. 5.
 [4] Aït-Sahalia Y. (2002) “Maximum Likelihood Estimation of Discretely Sam-
     pled Diffusions: A Closed-Form Approximation Approach” Econometrica,
     Vol. 70, No. 1.
 [5] Aït-Sahalia Y. (2003) “Disentangling Volatility from Jumps” Working Paper,
     Princeton University.
 [6] Aït-Sahalia Y., Wang Y., Yared F. (2001) “Do Option Markets Correctly Price
     the Probabilities of Movement of the Underlying Asset?” Journal of Econo-
     metrics, 101.
 [7] Alexander C. (1999) “A Primer on the Orthogonal GARCH Model” ISMA
     Center, University of Reading.
 [8] Alexander C. (2000) “Principles of Skew” RISK.
 [9] Alexander C. (2001) “Market Models: A Guide to Financial Data Analysis”
     John Wiley & Sons, Ltd.
[10] Alizadeh S., Brandt M. W., Diebold F. X. (2002) “Range-Based Estimation of
     Stochastic Volatility Models” Journal of Finance, Vol. 57, No. 3.
[11] Amin K. I., Ng V. (1993) “Option Valuation with Systematic Stochastic
     Volatility” Journal of Finance, Vol. 48, Issue 3.
[12] Andersen A. B. (2000) “Quantifying the Peso Problem Bias: A Switching
     Regime Approach” Department of Finance, The Aarhus Schools of Business,
     Denmark.
[13] Andersen L. B. G., Brotherton-Ratcliffe R. (1997) “The Equity Option Volatil-
     ity Smile: An Implicit Finite Difference Approach” Journal of Computational
     Finance, Vol. 1(2).
[14] Arulampalam S., Maskell S., Gordon N., Clapp T. (2002) “A Tutorial on Par-
     ticle Filters for On-line Non-linear/ Non-Gaussian Bayesian Tracking” IEEE
     Transactions on Signal Processing, Vol. 50. No. 2.
[15] Avellaneda M. (2002) “Empirical Aspects of Dispersion Trading in U.S. Equity
     Markets” Slides from Presentation at Le Petit Dejeuner de la Finance, Paris.
[16] Avellaneda M., Friedman C., Holmes R., Samperi D. (1997) “Calibrating
     Volatility Surfaces via Relative-Entropy Minimization” Applied Mathematical
     Finance, 4(1).



224
References                                                                      225

 [17] Avellaneda M., Levy A., Paras A. (1995) “Pricing and Hedging Deriva-
      tive Securities in Markets with Uncertain Volatilities” Applied Mathematical
      Finance, 2.
 [18] Bachelier L. (1900) “Théorie de la Spéculation” Annales Scientiﬁques de
      l’École Normale Supérieure, Troisième Série, 17.
 [19] Bagchi A. (2004) “Volatility Estimation under Heston’s Framework” Super-
      visor, University of Twente Working Paper.
 [20] Bakshi G., Cao C., Chen Z. (1997) “Empirical Performance of Alternative
      Option Pricing Models” Journal of Finance, Vol. 52, Issue 5.
 [21] Balland P. (2002) “Deterministic Implied Volatility Models” Quantitative
      Finance, Vol. 2.
 [22] Barle S., Cakici N. (1995) “Growing a Smiling Tree” RISK Magazine, Vol. 8,
      No. 10.
 [23] Barndorff-Nielsen O. E., Nicolato E., Shephard N. (2002) “Some Recent
      Developments in Stochastic Volatility Modeling” Quantitative Finance, 2.
 [24] Barndorff-Nielsen O. E., Shephard N. (2001) “Non-Gaussian Ornstein-
      Uhlenbeck-based Models and Some of Their Uses in Financial Economics”
      Royal Statistical Society, 63, Part 2.
 [25] Barndorff-Nielsen O. E., Shephard N. (2002) “Econometric Analysis of Real-
      ized Volatility and Its Use in Estimating Stochastic Volatility Models” Journal
      of the Royal Statistical Society, Series B, Vol. 64.
 [26] Bates D. S. (1991) “The Crash of 87: Was It Expected? The Evidence from
      Options Markets” Journal of Finance, Vol. 46, Issue 3.
 [27] Bates D. S. (1996) “Jumps and Stochastic Volatility: Exchange Rate Processes
      Implicit in Deutsche Mark Options” Review of Financial Studies, 9.
 [28] Bates D. S. (1998) “Pricing Options Under Jump Diffusion Processes” The
      Wharton School, University of Pennsylvania.
 [29] Bates D. S. (1998) “Hedging the Smirk” University of Iowa & NBER.
 [30] Bates D. S. (2000) “Post-87 Crash Fears in the S&P 500 Futures Option Mar-
      ket” Journal of Econometrics, 94.
 [31] Bates D. S. (2002) “Maximum Likelihood Estimation of Latent Afﬁne Pro-
      cesses” University of Iowa & NBER.
 [32] Bates D. S. (2002) “Empirical Option Pricing: A Retrospection” Forthcoming
      in Journal of Econometrics.
 [33] Bensoussan A., Crouhy M. and Galai D. (1995) “Stochastic Equity Volatility
      Related to the Leverage Effect I: Equity Volatility Behavior” Applied Mathe-
      matical Finance, 1.
 [34] Bernardo J., Smith A. F. M. (2001) “Bayesian Theory” John Wiley and Sons.
 [35] Bertsekas D. P. (2000) “Dynamic Programming and Optimal Control” (2nd
      Edition, Vols. 1 and 2), Athena Scientiﬁc.
 [36] Blacher G. (1998) “Local Volatility” RISK Conference Presentation.
 [37] Black F. (1976) “Studies in Stock Price Volatility Changes” Proceedings of
      the 1976 Meeting of the Business and Economics Statistics Section, American
      Statistical Association.
 [38] Black F., Scholes M. (1973) “The Pricing of Options and Corporate Liabilities”
      Journal of Political Economy, 81.
226                                                                     REFERENCES


[39] Blinnikov S., Moessner R. (1998) “Expansion for Nearly Gaussian Distribu-
     tions” Astronomy and Astrophysics Supplement Series, 130.
[40] Bollerslev T. (1986) “Generalized Autoregressive Conditional Heteroskedas-
     ticity” Journal of Econometrics, 31.
[41] Bouchaud J. P., Perelló J., Masoliver J. (2003) “Multiple Time-Scales in Volatil-
     ity and Leverage Correlations: A Stochastic Volatility Model” Working Paper,
     Centre d’Etudes de Saclay and Universitat de Barcelona.
[42] Bouchouev I. (1998) “Derivatives Valuation for General Diffusion Processes”
     The International Association of Financial Engineers (IAFE) Conferences.
[43] Brandt M. W., Santa-Clara P. (2002) “Simulated Likelihood Estimation of
     Diffusions with an Application to Exchange Rate Dynamics in Incomplete
     Markets” Journal of Financial Economics, 63.
[44] Breeden D. T., Litzenberger R. H. (1978) “Prices of State-Contingent Claims
     Implicit in Option Prices” Journal of Business, Vol. 51, No. 4.
[45] Brockhaus O., Long D. (2000) “Volatility Swaps Made Simple” RISK, January
     2000.
[46] Buraschi A., Jackwerth A. C. (2001) “The Price of a Smile: Hedging and
     Spanning in Option Markets” Review of Financial Studies, 14.
[47] Carr P., Geman H., Madan D., Yor M. (2002) “The Fine Structure of Asset
     Returns” Journal of Business, Vol. 75, No. 2.
[48] Carr P., Geman H., Madan D., Yor M. (2003) “Stochastic Volatility for Lévy
     Processes” Mathematical Finance, Vol. 13, No. 3.
[49] Carr P., Lewis K. (2002) “Corridor Variance Swaps” Research Papers,
     Courant Institute of Mathematical Sciences, New York University.
[50] Carr P., Madan D. (1998) “Toward a Theory of Volatility Trading” Research
     Papers, Courant Institute of Mathematical Sciences, New York University.
[51] Carr P., Madan D. (1998) “Option Valuation Using the Fast Fourier Trans-
     form” Morgan Stanley and University of Maryland.
[52] Carr P., Madan D. (2001) “Optimal Positioning in Derivative Securities”
     Quantitative Finance, Vol. 1.
[53] Carr P., Madan D. (2001) “Optimal Investment in Derivative Securities”
     Finance and Stochastics, Vol. 5.
[54] Carr P., Wu L. (2003) “Time-Changed Lévy Processes and Option Pricing”
     Journal of Financial Economics.
[55] Casella G., George E. I. (1992) “Explaining the Gibbs Sampler” The American
     Statistician, Vol. 46, No. 3.
[56] Chernov M., Ghysels E. (2000) “A Study Toward a Uniﬁed Approach to the
     Joint Estimation of Objective and Risk-Neutral Measures for the Purpose of
     Option Valuation” Journal of Financial Economics, 56.
[57] Chib S., Nadari F., Shephard N. (1998) “Markov Chain Monte-Carlo
     Methods for Generalized Stochastic Volatility Models” Washington Univer-
     sity and The University of Oxford.
[58] Chib S., Greenberg E. (1995) “Understanding the Metropolis-Hastings Algo-
     rithm” The American Statistician, Vol. 49, No. 4.
[59] Chourdakis K. M. (2001) “Volatility Persistence, Regime Switches and Option
     Pricing” Department of Economics, University of London.
References                                                                      227

 [60] Chriss N. A. (1997) “Black Scholes and Beyond: Option Pricing Models”
      Irwin/McGraw Hill.
 [61] Corradi V. (2000) “Reconsidering the Continuous Time Limit of the
      GARCH(1,1) Process” Journal of Econometrics, 96.
 [62] Corrado C. J., Su T. (1997) “Implied Volatility Skews and Stock Index Skew-
      ness and Kurtosis Implied by S&P 500 Index Option Prices” University of
      Missouri at Columbia, University of Miami at Coral-Gables.
 [63] Corrado C. J., Su T. (1997) “Implied Volatility Skews and Stock Return Skew-
      ness and Kurtosis Implied by Stock Option Prices” The European Journal of
      Finance, 3.
 [64] Cox J. C. (1996) “The Constant Elasticity of Variance Option Pricing Model”
      Journal of Portfolio Management, Special Issue.
 [65] Cox J. C., Ross S. (1976) “The Valuation of Options for Alternative Stochastic
      Processes” Journal of Financial Economics, 3.
 [66] Cox J. C., Ross S., Rubinstein M. (1979) “Option Pricing: A Simpliﬁed Ap-
      proach” Journal of Financial Economics, 7.
 [67] Cox J. C., Rubinstein M. (1985) “Options Markets” Prentice Hall.
 [68] Crosbie P. J. (1999) “Modeling Default Risk” KMV Working Papers.
 [69] Das S. R., Sundaram R. K. (1997) “Taming the Skew: Higher-Order Moments
      in Modeling Asset-Price Processes in Finance” National Bureau of Economic
      Research.
 [70] Demeterﬁ K., Derman E., Kamal M., Zou J. (1999) “More than You Ever
      Wanted to Know About Volatility Swaps” Goldman Sachs Quantitative Strat-
      egy Papers.
 [71] Dempster M. A. H., Gotsis G. Ch. (1998) “On the Martingale Problem for
      Jumping Diffusions” University of Cambridge and Hellenic Capital Market
      Commission.
 [72] Deng S. (2000) “Stochastic Models for Energy Commodity Prices and Their
      Applications: Mean-Reversion with Jumps and Spikes” Industrial and Sys-
      tems Engineering, Georgia Institute of Technology.
 [73] Derman E. (1999) “Regimes of Volatility: Some Observations on the Varia-
      tions of S&P 500 Implied Volatilities” Goldman Sachs Quantitative Strategy
      Papers.
 [74] Derman E., Kani I. (1994) “Riding on a Smile” RISK Magazine, 7.
 [75] Derman E., Kani I. (1994) “The Volatility Smile and Its Implied Tree” Gold-
      man Sachs Quantitative Strategy Papers.
 [76] Derman E., Kani I. (1998) “Stochastic Implied Trees: Arbitrage Pricing with
      Stochastic Term and Strike Structure of Volatility” International Journal of
      Theoretical and Applied Finance, 1.
 [77] Derman E., Kani I., Chriss N. (1996) “Implied Trinomial Trees of the Volatility
      Smile” Goldman Sachs Quantitative Strategy Papers.
 [78] Derman E., Kani I., Zou J. (1995) “The Local Volatility Surface: Unlocking
      the Information in Index Option Prices” Goldman Sachs Quantitative Strategy
      Papers.
 [79] Doucet A., De Freitas N., Gordon N. (2001) “Sequential Monte-Carlo
      Methods in Practice” Springer-Verlag.
228                                                                  REFERENCES


 [80] Doucet A., Gordon N., Krishnamurthy V. (2001) “Particle Filters for State
      Estimation of Jump Markov Linear Systems” IEEE Transactions on Signal
      Processing, Vol. 49, No. 3.
 [81] Dragulescu A. A., Yakovenko V. M. (2002) “Probability Distribution of Re-
      turns in the Heston Model with Stochastic Volatility” Department of Physics,
      University of Maryland.
 [82] Duan J. C. (1995) “The GARCH Option Pricing Model” Mathematical
      Finance, 5.
 [83] Duan J. C. (1996) “Cracking the Smile” RISK Magazine, 9.
 [84] Duan J. C. (1996) “A Uniﬁed Theory of Option Pricing Under Stochastic
      Volatility: From GARCH to Diffusion” Hong Kong University of Science and
      Technology.
 [85] Duan J. C. (1997) “Augmented GARCH(p,q) Process and Its Diffusion Limit”
      Journal of Econometrics, 79.
 [86] Duan J. C. (2001) “Risk Premium and Pricing of Derivatives in Complete
      Markets” Rotman School of Management, University of Toronto.
 [87] Dufresne Daniel (2001) “The Integrated Square-Root Process” Center for
      Actuarial Studies, The University of Melbourne.
 [88] Dumas B., Fleming J., Whaley R. E. (1998) “Implied Volatility Functions:
      Empirical Tests” Journal of Finance, Vol. 53, Issue 6.
 [89] Dupire B. (1994) “Pricing with a Smile” RISK Magazine, 7.
 [90] Durrett R. (1996) “Stochastic Calculus: A Practical Introduction” CRC Press,
      Boca Raton, Florida.
 [91] El-Karoui N., Quenez M. C. (1995) “Dynamic Programming and Pricing of
      Contingent Claims in Incomplete Markets” SIAM Journal of Control and
      Optimization, 33(1).
 [92] Elerian O., Chib S., Shephard N. (2001) “Likelihood Inference for Discretely
      Observed Nonlinear Diffusions” Econometrica.
 [93] Elliott R. J., Lahaie C. H., Madan D. (1997) “Filtering Derivative Secur-
      ity Valuations from Market Prices” University of Alberta, University of
      Maryland.
 [94] Engle R. F. (1982) “Autoregressive Conditional Heteroskedasticity with Esti-
      mates of the Variance of United Kingdom Inﬂation” Econometrica, Vol. 50,
      No. 4.
 [95] Engle R. F., Ishida I. (2002) “The Square-Root, the Afﬁne, and the CEV
      GARCH Models” Working Paper, New York University and University of
      California, San Diego.
 [96] Engle R. F., Mezrich J. (1995) “Grappling with GARCH” RISK Magazine, 9.
 [97] Engle R. F., Ng V. (1993) “Measuring and Testing the Impact of News on
      Volatility” Journal of Finance, Vol. 48, Issue 5.
 [98] Eraker B., Johannes M., Polson N. (2003) “The Impact of Jumps in Equity
      Index Volatility and Returns” Journal of Finance, 58.
 [99] Fama E. (1965) “The Behavior of Stock Market Prices” Journal of
      Business, 38.
[100] Fan J., Yao Q. (2003) “Nonlinear Time Series: Nonparametric and Parametric
      Methods” Springer.
References                                                                    229

[101] Fleming J., Kirby C. (2003) “A Closer Look at the Relation Between GARCH
      and Stochastic Autoregressive Volatility” Journal of Financial Econometrics,
      Vol. 1, December.
[102] Follmer H., Sondermann D. (1986) “Hedging of Non-Redundant Contingent-
      Claims” Contributions to Mathematical Economics, North-Holland.
[103] Forbes C. S., Martin G. M., Wright J. (2002) “Bayesian Estimation of a
      Stochastic Volatility Model Using Option and Spot Prices” Department of
      Econometrics and Business Statistics, Monash University, Australia.
[104] Fouque J. P., Papanicolaou G., Sircar K. (2000) “Derivatives in Financial
      Markets with Stochastic Volatility” Cambridge University Press.
[105] Fouque J. P., Papanicolaou G., Sircar K. (2000) “Mean Reverting Stochastic
      Volatility” International Journal of Theoretical and Applied Finance, 3(1).
[106] Fouque J. P., Tullie T. A. (2002) “Variance Reduction for Monte-Carlo
      Simulation in a Stochastic Volatility Environment” Quantitative Finance, 2.
[107] Frey R. (1997) “Derivative Asset Analysis in Models with Level-Dependent
      and Stochastic Volatility” Department of Mathematics, ETH Zurich.
[108] Fridman M., Harris L. (1998) “A Maximum Likelihood Approach for Non-
      Gaussian Stochastic Volatility Models” Journal of Business and Economic
      Statistics.
[109] Gallant A. R., Tauchen G. (2001) “Efﬁcient Method of Moments” University
      of North Carolina and Duke University.
[110] Galli A. (2000) “Variograms and Cross-Variograms” Ecole des Mines de
      Paris, Working Paper.
[111] Galli A., Lautier D. (2001) “Un Modèle de Structure par Terme des
      Prix des Matières Premières avec Comportement Asymétrique du Ren-
      dement d’Opportunité” École des Mines de Paris & CEREG, Université
      Paris IX.
[112] Garcia R., Ghyseles E., Renault E. (2002) “The Econometrics of Option
      Pricing” Université de Montreal and University of North Carolina.
[113] Gatheral J. G. (2001) “Stochastic Volatility and Local Volatility” Courant
      Institute of Mathematical Sciences, New York University.
[114] Gatheral J. G. (2001) “Fitting the Volatility Skew” Courant Institute of
      Mathematical Sciences, New York University.
[115] Gatheral J. G. (2001) “Asymptotics and Dynamics of the Volatility Skew”
      Courant Institute of Mathematical Sciences, New York University.
[116] Gatheral J. G. (2001) “Volatility and Variance Swaps” Courant Institute of
      Mathematical Sciences, New York University.
[117] Geman H., El-Karoui N., Rochet J. C. (1995) “Changes of Numeraire,
      Changes of Probability Measure and Option Pricing” Journal of Applied
      Probability, 32(2).
[118] Geman H., Madan D., Yor M. (2001) “Stochastic Volatility, Jumps and
      Hidden Time Changes” Finance and Stochastics.
[119] Geske R. (1979) “The Valuation of Compound Options” Journal of Financial
      Economics, 7.
[120] Gilks W. R., Richardson S., Spiegelhalter D. J. (1995) “Markov Chain Monte
      Carlo in Practice” Chapman & Hall/ CRC.
230                                                                  REFERENCES


[121] Gondzio J., Kouwenberg R., Vorst T. (2003) “Hedging Options Under
      Transaction Costs and Stochastic Volatility” Journal of Economic Dynamics
      and Control, 27.
[122] Gordon N. J., Salmond D. J. Smith A. F. M. (1993) “Novel Approach to
      Nonlinear/Non-Gaussian Bayesian State Estimation” IEE Proceedings-F,
      Vol. 140, No. 2.
[123] Gourieroux C., A. Monfort, Renault E. (1993) “Indirect Inference” Journal
      of Applied Econometrics, 8.
[124] Gourieroux C., Jasiak J. (2001) “Financial Econometrics” Princeton
      University Press.
[125] Grabbe J. O. (1983) “The Pricing of Put and Call Options on Foreign
      Exchange” Journal of International Money and Finance, December.
[126] Hamilton J. D. (1989) “A New Approach to the Econometric Analysis of
      Non-stationary Time Series and the Business Cycle” Econometrica, Vol. 57,
      No. 2.
[127] Hamilton J. D. (1994) “Time Series Analysis” Princeton University Press.
[128] Härdle W., Kleinow T., Stahl G. (2002) “Applied Quantitative Finance”
      Springer-Verlag.
[129] Harvey A. C. (1989) “Forecasting, Structural Time Series Models, and the
      Kalman Filter” Cambridge University Press.
[130] Harvey A. C., Ruiz E., Shephard Neil (1994) “Multivariate Stochastic
      Variance Models” Review of Economic Studies, Vol. 61, Issue 2.
[131] Harvey C. R., Whaley R. E. (1991) “S&P 100 Index Option Volatility”
      Journal of Finance, Vol. 46, Issue 4.
[132] Haug E. G. (1997) “The Complete Guide to Option Pricing Formulas”
      McGraw-Hill, New York.
[133] Haykin S. (2001) “Kalman Filtering and Neural Networks” Wiley Inter-
      Science.
[134] Heston S. (1993) “A Closed-Form Solution for Options with Stochastic
      Volatility with Applications to Bond and Currency Options” Review of
      Financial Studies, 6.
[135] Heston S. (2000) “Derivatives on Volatility: Some Simple Solutions Based on
      Observables” Federal Reserve Bank of Atlanta, Working Paper.
[136] Heston S., Christoffersen P., Jacobs K. (2004) “Option Valuation with
      Conditional Skewness” University of Maryland and McGill University.
[137] Heston S., Nandi S. (1997) “A Closed Form GARCH Option Pricing Model”
      Federal Reserve Bank of Atlanta, Working Paper 97-9.
[138] Hipp C., Taksar M. (2000) “Hedging in Incomplete Markets and Optimal
      Control” University of Karlsruhe and SUNY at Stony-Brook.
[139] Hirsa A., Javaheri A. (2003) “A Particle Filtering Algorithm for the VGSA
      Model” Working Paper, Morgan Stanley and RBC Capital Markets.
[140] Hobson D. G. (1996) “Stochastic Volatility” School of Mathematical Sciences,
      University of Bath.
[141] Hobson D. G., Rogers L. C. G. (1998) “Complete Models with Stochastic
      Volatility” Mathematical Finance, 8.
References                                                                        231

[142] Honoré P. (1998) “Pitfalls in Estimating Jump-Diffusion Models” Department
      of Finance, The Aarhus School of Business, Denmark.
[143] Howison S. D., Rafailidis A., Rasmussen H. O. (2000) “A Note on the
      Pricing and Hedging of Volatility Derivatives” The University of Oxford,
      Kings College London.
[144] Hughston L. P. (2004) “International Models for Interest Rates and Foreign
      Exchange: A General Framework for the Uniﬁcation of Interest Rate Dynam-
      ics and Stochastic Volatility” Global Derivatives and Risk Management, May
      2004.
[145] Hughston L. P., Rafailidis A. (2004) “A Chaotic Approach to Interest Rate
      Modeling” Finance and Stochastic.
[146] Hull J. (1999) “Options, Futures, and Other Derivative Securities” Englewood
      Cliffs, 4th Edition.
[147] Hull J., Suo W. (2002) “A Methodology for Assessing Model Risk and its
      Application to the Implied Volatility Function Model”Journal of Financial
      and Quantitative Analysis.
[148] Hull J., Suo W. (2002) “Modeling the Volatility Surface” University of
      Toronto and Queen’s University.
[149] Hull J., White A. (1987) “The Pricing of Options on Assets with Stochastic
      Volatility” Journal of Finance, Vol. 42, Issue 2.
[150] Hull J., White A. (1988) “An Analysis of the Bias in Option Pricing Caused
      by a Stochastic Volatility” Advances in Futures and Options Research, 3.
[151] Ito K., Xiong K. (1999) “Gaussian Filters for Nonlinear Filtering Prob-
      lems” Center for Research in Scientiﬁc Computation, North Carolina State
      University.
[152] Jackel P. (2002) “Monte-Carlo Methods in Finance” Wiley Series in Finance.
[153] Jackson N., Suli E., Howison S. (1998) “Computation of Deterministic
      Volatility Surfaces” Journal of Computational Finance Vol. 2(2).
[154] Jackwerth J. C. (2000) “Option-Implied Risk-Neutral Distributions and
      Implied Binomial Trees: A Literature Review” Journal of Derivatives, 7.
[155] Jackwerth J. C., Rubinstein M. (1996) “Recovering Probability Distributions
      from Option Prices” Journal of Finance, Vol. 51, Issue 5.
[156] Jacquier E., Polson N. G., Rossi P. E. (1994) “Bayesian Analysis of Stochastic
      Volatility Models” Journal of Business and Economic Statistics, Vol. 12,
      No, 4.
[157] Jarrow R., Rudd A. (1982) “Approximate Option Valuation for Arbitrary
      Stochastic Processes” Journal of Financial Economics, 10.
[158] Javaheri A., Wilmott P., Haug E. G. (2002) “GARCH and Volatility Swaps”
      Wilmott, January 2002.
[159] Javaheri A., Lautier D., Galli A. (2003) “Filtering in Finance” Wilmott, Issue 5.
[160] Javaheri A. (2004) “Inference and Stochastic Volatility” Wilmott, Issue 11.
[161] Jex M., Henderson R., Wang D. (1999) “Pricing Exotics Under the Smile”
      RISK Magazine.
[162] Jiang G. J., Van der Sluis P. J. (2000) “Index Option Pricing with Stochastic
      Volatility and Stochastic Interest Rates” Center for Economic Research.
232                                                                     REFERENCES


[163] Johannes M., Polson N. (2002) “MCMC Methods for Financial Econo-
      metrics” The Handbook of Financial Econometrics.
[164] Johannes M., Polson N., Stroud J. (2002) “Nonlinear Filtering of Stochastic
      Differential Equations with Jumps” Working Paper, Columbia University,
      University of Chicago and University of Pennsylvania.
[165] Jones C. S. (2001) “The Dynamics of Stochastic Volatility: Evidence from
      Underlying and Options Markets” Simon School of Business, University of
      Rochester.
[166] Julier S. J., Uhlmann J. K. (1997) “A New Extension of the Kalman Filter
      to Nonlinear Systems” The University of Oxford, The Robotics Research
      Group.
[167] Karatzas I., Shreve S. (1991) “Brownian Motion and Stochastic Calculus”
      Springer-Verlag, 2nd Edition.
[168] Kennedy P. (1998) “A Guide to Econometrics” MIT Press, 4th Edition.
[169] Kim S., Shephard N., Chib S. (1998) “Stochastic Volatility: Likelihood
      Inference and Comparison with ARCH Models” Review of Economic
      Studies, Vol. 65.
[170] Kitagawa G. (1987) “Non-Gaussian State Space Modeling of Non-Stationary
      Time Series” Journal of American Statistical Association, 82.
[171] Kitagawa G. (1996) “Monte-Carlo Filter and Smoother for Non-Gaussian
      Nonlinear Sate Space Models” Journal of Computational and Graphical
      Statistics, Vol. 5, No. 1.
[172] Kou S. (2000) “A Jump Diffusion Model for Option Pricing with Three
      Properties: Leptokurtic Feature, Volatility Smile, and Analytical Tractability”
      Econometric Society World Congress 2000 Contributed Papers.
[173] Kushner H. J. (1967) “Approximations to Optimal Nonlinear Filters” IEEE
      Transactions on Automatic Control, Vol. 12.
[174] Kushner H. J., Budhiraja A. S. (2000) “A Nonlinear Filtering Algorithm Based
      on an Approximation of the Conditional Distribution” IEEE Transactions
      on Automatic Control, Vol. 45. No. 3.
[175] Lagnado R., Osher S. (1997) “A Technique for Calibrating Derivative
      Security Pricing Model: Numerical Solution of an Inverse Problem” Journal
      of Computational Finance, Vol. 1(1).
[176] Lee D. S., Chia N. K. K (2002) “A Particle Algorithm for Sequential Bayesian
      Parameter Estimation and Model Selection” IEEE Transactions on Signal
      Processing, Vol. 50, No. 2.
[177] Lewis A. L. (2000) “Option Valuation under Stochastic Volatility” Finance
      Press.
[178] Lewis A. L. (2001) “A Simple Option Formula for General Jump-Diffusion
      and Other Exponential Levy Processes” OptionCity.net Publications.
[179] Lewis A. L. (2002) “The Mixing Approach to Stochastic Volatility and Jump
      Models” Wilmott, March 2002.
[180] Lewis A. L. (2002) “Fear of Jumps” Wilmott, Issue 2.
[181] Li Y. (2000) “A New Algorithm for Constructing Implied Binomial Trees:
      Does the Implied Model Fit Any Volatility Smile?” Journal of Computational
      Finance, Vol. 4(2).
References                                                                     233

[182] Madan D., Carr P., Chang E. C. (1998) “The Variance-Gamma Process and
      Option Pricing” European Finance Review, Vol. 2, No. 1.
[183] Maes K. (2001) “Panel Data Estimating Continuous-Time Arbitrage-
      Free Afﬁne Term-Structure Models with the Kalman Filter” International
      Economics, Leuven University.
[184] Maheu J. M., McCurdy T. H. (2003) “News Arrival, Jump Dynamics, and
      Volatility Components for Individual Stock Returns” University of Toronto.
[185] Markowiz H. M. (1990) “Mean-Variance Analysis in Portfolio Choice and
      Capital Markets” Basil Blackwell.
[186] Matacz A. (1997) “Financial Modeling and Option Theory with the Truncated
      Levy Process” School of Mathematics and Statistics, University of Sidney.
[187] Matytsin A. (1999) “Modeling Volatility and Volatility Derivatives”
      Columbia Practitioners Conference on the Mathematics of Finance.
[188] Merton R. C. (1973) “The Theory of Rational Option Pricing” Bell Journal
      of Economics and Management, 7.
[189] Merton R. C. (1974) “On the Pricing of Corporate Debt: The Risk Structure
      of Interest Rates” Journal of Finance, Vol. 29, Issue 2.
[190] Merton R. C. (1976) “Option Pricing When the Underlying Stock Returns
      Are Discontinuous” Journal of Financial Economics.
[191] Meyer R., Fournier D. A., Berg A. (2003) “Stochastic Volatility: Bayesian
      Computation Using Automatic Differentiation and the Extended Kalman
      Filter” Econometrics Journal, Vol. 6.
[192] Muzzioli S., Torricelli C. (2001) “Implied Trees in Illiquid Markets: A
      Choquet Pricing Approach” Universita degli Studi di Modena e Reggio
      Emilia, Dipartimento di Economia Politica.
[193] Neftci S. N. (1996) “An Introduction to the Mathematics of Financial
      Derivatives” Academic Press, San Diego, CA.
[194] Nelson D. B. (1990) “ARCH Models as Diffusion Approximations” Journal
      of Econometrics, 45.
[195] Nelson D. B. (1990) “Conditional Heteroskedasticity and Asset Returns: A
      New Approach” Econometrica, 59.
[196] Nelson D. B., Foster D. P. (1994) “Asymptotic Filtering Theory for Univariate
      ARCH Models” Econometrica, Vol. 62, Issue 1.
[197] Oksendal B. (1998) “Stochastic Differential Equations: An Introduction with
      Applications” Springer-Verlag New York, 5th Edition.
[198] Pan G. (2001) “Equity to Credit Pricing” RISK November 2001.
[199] Pan J. (2002) “The Jump Risk-Primia Implicit in Options: Evidence from an
      Integrated Time-Series Study” Journal of Financial Economics, 63.
[200] Parkinson M. (1980) “The Extreme Value Method for Estimating the
      Variance of the Rate of Return” Journal of Business, 53.
[201] Pedersen A. R. (1995) “A New Approach to Maximum Likelihood Estima-
      tion for Stochastic Differential Equations Based on Discrete Observations”
      Scandinavian Journal of Statistics, 22.
[202] Pham H. (2001) “Smooth Solutions to Optimal Investment Models with
      Stochastic Volatilities and Portfolio Constraints” CNRS and Université
      Paris 7.
234                                                                   REFERENCES


[203] Pitt M. K., Shephard N. (1999) “Filtering via Simulation: Auxiliary Particle
      Filters” Journal of the American Statistical Association, 94.
[204] Press W. H., Teukolsky S. A., Vetterling W. T., Flannery B. P. (1997) “Numer-
      ical Recipes in C: The Art of Scientiﬁc Computing” Cambridge University
      Press, 2nd Edition.
[205] Reif K., Gunther S., Yaz A. (1999) “Stochastic Stability of the Discrete-Time
      Extended Kalman Filter” IEEE Transactions on Automatic Control.
[206] Renault E., Touzi N. (1996) “Option Hedging and Implied Volatilities in a
      Stochastic Volatility Model” Mathematical Finance, 6.
[207] Ribiero C., Webber N. (2002) “Valuing Path-Dependent Options in the
      Variance-Gamma Model by Monte-Carlo with a Gamma Bridge” Working
      Paper, University of Warwick and City University of London.
[208] Ritchken P., Trevor R. (1997) “Pricing Options under Generalized GARCH
      and Stochastic Volatility Processes” CMBF Papers, Macquarie University, 19.
[209] Romano M., Touzi N. (1997) “Contingent Claims and Market Completeness
      in a Stochastic Volatility Model” Mathematical Finance, 7.
[210] Rubinstein M. (1983) “Displaced Diffusion Option Pricing” Journal of
      Finance, Vol. 38, Issue 1.
[211] Samuelson P. A. (1965) “Rational Theory of Warrant Pricing” Industrial
      Management Review, 6, 2.
[212] Sandmann G., Koopman S. J. (1998) “Estimation of Stochastic Volatility
      Models via Monte-Carlo Maximum Likelihood” Journal of Econometrics, 87.
[213] Schonbucher P. J. (1998) “A Market Model for Stochastic Implied Volatility”
      Department of Statistics, Bonn University.
[214] Scott L. O. (1987) “Option Pricing when the Variance Changes Randomly:
      Theory, Estimation, and Application” Journal of Financial and Quantitative
      Analysis, Dec.
[215] Scott L. O. (1997) “Pricing Stock Options in a Jump-Diffusion Model with
      Stochastic Volatility and Interest Rates: Applications of Fourier Inversion
      Methods” Mathematical Finance, 7.
[216] Shimko D. (1993) “Bounds on Probability” RISK, 6.
[217] Shimko D., Tejima N., Van Deventer D. R. (1993) “The Pricing of Risky Debt
      when Interest Rates are Stochastic” Journal of Fixed Income, September 1993.
[218] Shreve S., Chalasani P., Jha S. (1997) “Stochastic Calculus and Finance”
      Carnegie Mellon University.
[219] Silva A. C., Yakovenko V. M. (2002) “Comparison Between the Probability
      Distribution of Returns in the Heston Model and Empirical Data for Stock
      Indices” Department of Physics, University of Maryland.
[220] Sin C. A. (1998) “Complications with Stochastic Volatility Models” Advances
      in Applied Probability, 30.
[221] Smith A. F. M., Gelfand A. E. (1992) “Bayesian Statistics Without Tears: A
      Sampling-Resampling Perspective” The American Statistician, Vol. 46, No. 2.
[222] Srivastava A., Grenander U., Jensen G. R., Miller M. I. (2002) “Jump-
      Diffusion Markov Processes on Orthogonal Groups for Object Recognition”
      Journal of Statistical Planning and Inference, Special Issue.
References                                                                   235

[223] Stein E. M., Stein J. (1991) “Stock Price Distributions with Stochastic
      Volatility: An Analytic Approach” Review of Financial Studies, 4.
[224] Storvik G. (2002) “Particle Filters in State Space Models with Presence of
      Unknown Static Parameters” IEEE Transactions on Signal Processing, 50.
[225] Taleb N. (1996) “Dynamic Hedging: Managing Vanilla and Exotic Options”
      John Wiley & Sons, Ltd.
[226] Tavella D., Klopfer W. (2001) “Implying Local Volatility” Wilmott, August
      2001.
[227] Tavella D., Randall C. (2000) “Pricing Financial Instruments: The Finite
      Difference Method” John Wiley & Sons, Ltd.
[228] Toft K. B., Prucyk B. (1997) “Options on Leveraged Equity: Theory and
      Empirical Tests” Journal of Finance Vol. 52, Issue 3.
[229] Van der Merwe R., Doucet A., de Freitas N., Wan E. (2000) “The Unscented
      Particle Filter” Oregon Graduate Institute, Cambridge University, and UC
      Berkeley.
[230] Varadhan S. R. S. (2000) “Probability Theory” Courant Institute of
      Mathematical Sciences, New York University.
[231] Wan E. A., Van der Merwe R. (2000) “The Unscented Kalman Filter for
      Nonlinear Estimation” Oregon Graduate Institute of Science and Technology.
[232] Wan E. A., Van der Merwe R., Nelson A. (2000) “Dual Estimation and
      the Unscented Transformation” Oregon Graduate Institute of Science and
      Technology.
[233] Welch G., Bishop G. (2002) “An Introduction to the Kalman Filter” Depart-
      ment of Computer Science, University of North Carolina at Chapel Hill.
[234] Wells C. (1996) “The Kalman Filter in Finance (Advanced Studies in The-
      oretical and Applied Econometrics), Vol. 32” Kluwer Academic Publishers.
[235] Whitt W. (2001) “Stochastic Process Limits: An Introduction to Stochastic
      Process Limits and Their Application to Queues” AT&T Labs Research,
      Springer.
[236] Wiggins J. B. (1987) “Option Values under Stochastic Volatility” Journal of
      Financial Economics, 19.
[237] Wilmott P. (2000) “Paul Wilmott on Quantitative Finance” John Wiley &
      Sons, Ltd.
[238] Wilmott P., Dewynne J., Howison S. (1993) “Option Pricing: Mathematical
      Pricing and Computations” Oxford Financial Press.
[239] Wilmott P., Rasmussen H. O. (2002) “Asymptotic Analysis of Stochastic
      Volatility Models” Wilmott Associates.
[240] Zellner A. (2000) “Bayesian and Non-Bayesian Approaches to Scientiﬁc Mod-
      eling and Inference in Economics and Econometrics” University of Chicago.
[241] Zhang L., Mykland P. A., Aït-Sahalia Y. (2003) “A Tale of Two Time-Scales:
      Determining Integrated Volatility with Noisy High-Frequency Data” Working
      Paper. Carnegie Melon University, University of Chicago, and Princeton
      University.
[242] Zhou C. (1997) “A Jump-Diffusion Approach to Modeling Credit Risk and
      Valuing Defaultable Securities” Federal Reserve Board, Washington, DC.
                                                       Index


3/2 models, 122, 188               EPF application, 162–165
                                  Bayesian approach, 48, 144–156
Ackerberg, D.A., 224               example, 146–147
Aihara, S., 224                   Bensoussan, A., 225
Ait-Sahalia, Y., 159, 187–189,    Bensoussan-Crouhy-Galai (BCG)
    198, 200, 224, 235             approach, 11–13
Alexander, C., 224                 model, 1
Alizadeh, S., 224                 Berg, A., 233
Amin, K.I., 224                   Bernardo, J., 225
Andersen, A.B., 224               Bertsekas, D.P., 225
Andersen, L.B., 224               Bessel function, 184
Arbitrage opportunity, 214        Bias test, 54
Arrival rate, 171, 182            Bid-ask spread, 71, 206
Arrow-Debreu prices, 17           Binomial tree, usage, 6, 17
Arulampalam, S., 224              Bishop, G., 235
Asset term, elimination, 13       Blacher, G., 225
Augmented state, 76               Black, F., 225
 vector, 63                       Black-Scholes approach, 5–6
Auto-correlation, usage, 181      Black-Scholes equation
Auto-regressive moving average     rederiving, 29
    model, 21                     Black-Scholes formula, usage, 15
Avellaneda, M., 20, 224, 225      Black-Scholes implied
                                      volatility, 196
Bachelier, L., 2, 225             Black-Scholes PDE, 1
Back-testing procedures, 170      Black-Scholes pricing
Bagchi, A., 224, 225                  function, 213
Bakshi, G., 47, 187, 189,         Black-Scholes risk-neutral pricing
    199, 225                          formula, 4
Balland, P., 225                  Black-Scholes risk-neutrality
Barle, S., 225                        argument, usage, 25
Barndorff-Nielsen, O.E., 225      Blocking technique, 150
Bates, D.S., 158, 189, 208, 225   Bollerslev, T., 226
Bates model, 185                  Bouchaud, J.P., 226


236
Index                                                            237

Bouchouev, I., 226                  Close-to-the-money strike prices,
Box-Ljung test, 48, 95–96               optimization, 50
Brandt, M.W., 224, 226              Close-to-the-money strikes, 192
Breeden, D.T., 14, 226              Conjugate directions, 49
Breeden-Litzenberger identity, 14   Conjugate priors, 145
Brockhaus, O., 226                  Consistency problem, 187
Brotherton-Ratcliffe, R., 224        introduction, 187–189
Brownian motion, 22, 40, 43
                                    Consistency test, 189–197
 construction, 97
                                     cross-sectional results, 190–193
 independence, 44, 158
 process, 2                            robustness issues, 190–193
 spot return variances, 19           setting, 190
Budhiraja, A.S., 232                Constant elasticity variance
Buraschi, A., 226                       (CEV), 1
Burn-in period, 76                   approach, 11
                                    Constant volatility approach,
Cakici, N., 225                         extension, 4
Calibration frequency, 19           Constraint parameter, 18
Cao, C., 47, 189, 199, 225          Continual recalibration
Carr, P., 215, 226, 232                 (CR) strategy, 19
Carr-Madan replication,             Continuous ideal process,
   202–203                              sample, 3
Chalasani, P., 234                  Continuous SDE, 131
Chang, E.C., 215, 232               Convergence issues/solutions,
Chapman-Kolmogorov equation,            185–186
   application, 58                  Corradi, V., 24, 227
Characteristic function, usage,     Corrado, C.J., 227
   157–158                          Correlation parameter, 156
Chen, Z., 47, 189, 199, 225
                                    Covariance matrix, 70, 83, 161
Chernov, M., 226
                                    Covered call option, transform
Chia, N.K.K., 232
                                        results, 34
Chib, S., 226, 228, 232
Chi-square test, 95                 Cox, J.C., 7, 11, 227
 usage, 179–181                     Cox-Ross-Rubinstein
Cholesky factorization, usage,          approach, 6–7
   31, 66, 74, 87                   Cramer-Rao bound, 56
Chourdakis, K.M., 159, 226          Credit spread, link, 10
Chriss, N.A., 227                   Cross-sectional VGSA,
Christoffersen, P., 230                 time-series VGSA (contrast),
CIR process, usage, 44                  216–218
Clapp, T., 224                      Crouhy, M., 225
238                                        INSIDE VOLATILITY ARBITRAGE


Cumulative distribution function     El-Karoui, N., 27, 228, 229
  (CDF), 41, 45, 101                 Elliott, R.J., 228
                                     Engle, R.F., 21, 123, 228
                                     Entropy distance, 18
Das, S.R., 203, 227                  Eraker, B., 228
De Freitas, N., 227, 235             Ergodic averaging theorem, 144
Delta hedging, 200, 204              Errors, distribution, 50–54
Demeterﬁ, K., 227                    Euler approximation, usage, 23
Dempster, M.A.H., 227
                                     Euler scheme, 140
Deng, S., 159, 227
                                     EUR/USD options, 220
Derivative security, payoff
                                     Extended Kalman ﬁlter (EKF),
    inclusion, 32
                                         59–62, 88, 161–162
Derivatives market, 4–7
                                      application, 132, 172–173
Derman, E., 14, 227
                                      convergence, 105
Derman-Kani approach, 17
                                      estimation, 85, 139
Deterministic volatility, example,
                                      framework, log-likelihood
    34–35
                                         function, 140
Dewynne, J., 235
                                      implementation, 89–94
Diagnostics, 95–98
                                      Jacobians, 77
Diebold, F.X., 224
                                      observability, 75–76
Diffusion limits, 21–24
                                     Extended particle ﬁlter (EPF),
Diffusion-based model, 47
                                         102, 161–166, 172–176, 179
Direction set method (Powell
    method), 49–50, 83–84
Directional risks, 200–202           Fama, E., 228
Discrete GARCH, 23–24                Fan, J., 228
Discrete NGARCH, risk-neutral        Feller distribution, 3–4
    version, 26                      Feynmann-Kac equation, 6
Diversiﬁcation argument,             Filter errors, 84
    usage, 10                        Filtering, 57–59
Doucet, A., 227, 235                   errors, 115, 117
Dragulescu, A.A., 158, 228             normalized/non-normalized
Duan, J.C., 228                          weights, 99
Dufresne, Daniel, 228                Financial interpretation,
Dumas, B., 187, 189, 228                 194–197
Dupire, B., 14, 228                  Firm structure model, usage, 12
Dupire approach, 14–17               Fisher information matrix, 56
Dupire identity, 14–15               Fixed fractional jump size,
Durrett, R., 228                         158–159
                                     Fixed income, 219–223
Early termination, 206               Flannery, B.P., 233
Elerian, O., 228                     Fleming, J., 189, 228
Index                                                         239

Fletcher-Reeves-Polak-Ribiere      Gaussian random variables,
    method, 49                        97, 104
Fokker-Planck equation, 14–15      Gaussian realization, 40, 214
Follmer, H., 228                   Gaussian SV models, MCMC
Forbes, C.S., 229                     application, 154–156
Foreign exchange (FX), 219–220     Gelfand, A.E., 234
  rate process, 219                Geman, H., 226, 229
Forward Kolmogorov equation,       Generalized autoregressive
    14–15                             conditional
Foster, D.P., 233                     heteroskedasticity (GARCH),
Fouque, J.P., 21, 96, 229             1, 21–24
Fourier transform, inversion, 30    diffusion, 137
Fournier, D.A., 233                 diffusion-limit model, 94, 121
Frey, R., 229                       MLE, 138
Fridman, M., 229                    process, weak convergence, 21
                                   Generalized Fourier transform,
Friedman, C., 224
                                      2, 27–30
Friedman, Milton, 198
                                   Generic particle ﬁlter,
Further-from-the-money
                                      160–161, 179
    options, 192
                                   George, E.I., 226
Future spot prices, 7
                                   Geske, R., 229
                                   Ghyseles, E., 226, 229
Galai, D., 225                     Gibbs sampler, 144–150, 154
Gallant, A.R., 229                 Gilks, W.R., 229
Galli, A., 96, 229, 231            Girsanov theorem, 25–26, 188,
Gamma. See Variance gamma             213, 220
 distribution, 41–42, 158, 172     Gondzio, J., 229
   dependence, 170                 Gordon, N., 224, 227
 variables, 216                    Gordon, N.J., 229
                                   Gotsis, G.Ch., 227
Gamma-distributed random
                                   Gourieroux, C., 229, 230
   variable, 44
                                   Grabbe, J.O., 230
Garcia, R., 229
                                   Greenberg, E., 226
Gatheral, J.G., 16, 229
                                   Grenander, U., 234
Gauss-Hermite quadrature of
                                   Gunther, S., 233
   order, 67
Gauss-Hermite roots of order, 65
Gaussian approximation, 136        Hamilton, J.D., 159, 230
Gaussian cases, 59                 Hammersley-Clifford
Gaussian likelihood,                  theorem, 144
   maximization, 82                Härdle, W., 199, 230
Gaussian quadrature, 65            Harris, L., 229
240                                        INSIDE VOLATILITY ARBITRAGE


Harvey, A.C., 135, 230               Induction expression, 157
Harvey-Ruiz-Shephard (HRS)           Inference problem, 46
   method, 136, 139                  Inference tools
Haug, E.G., 230, 231                   accuracy issues, 218–219
Haykin, S., 67, 230                    error size, 133–139
Heaviside function, 16                 high-frequency data, 139–140
Hedge ratio usage, selection, 208      observations, frequency,
Hedged portfolio, 6                      140–141
Henderson, R., 231                     parameters, joint estimation,
Hermite polynomials, usage, 103          132–133
Hessian matrix, 39                     performance, 127–144
Heston, S., 21, 230                    sample size, 129–132
Heston state-space model, 47           sampling distribution, 141–144
 comparison, 120–127                 Information matrix identity, 56
 EPF, application, 105–114           Insurance selling strategy, 201
 equation, 154–156                   Inverse Fourier transform, 27
 particle ﬁltering, application,     Inverse gamma (IG) CDF,
   105–114                               152–153
 results, 122–125
                                     Ishida, I., 123, 228
High correlation, 209–213
                                     Ito, K., 231
High volatility-of-volatility,
                                     Ito’s lemma, usage, 2, 6, 26
   209–213
High-frequency data, 185–186
Hipp, C., 230                        Jackel, P., 19, 231
Hirsa, A., 230                       Jackson, N., 231
Historic correlation, 212            Jackwerth, A.C., 226
Historic volatility, 3–4             Jackwerth, J.C., 198, 231
Hobson, D.G., 230                    Jacobian calculation, 62, 70,
Holmes, R., 224                          73–74, 87
Honoré, P., 230                      Jacobian matrices, deﬁning,
Howison, S.D., 230, 231, 235             60–61
Hughston, L.P., 230, 231             Jacobs, K., 230
Hull, J., 2, 6, 19, 30, 231          Jacquier, E., 231
                                     Jarrow, R., 231
Ill-posed inversion problems, 18     Jasiak, J., 230
Implied volatility term structure,   Javaheri, A., 230, 231
     206–208                         Jensen, G.R., 234
Importance sampling technique,       Jex, M., 231
     99–100                          Jha, S., 234
Incomplete beta function             Jiang, G.J., 231
     (IBF), 151                      Johannes, M., 159, 228, 231
Index                                                           241

Joint ﬁlter (JF), 68               Kullback-Leibler distance, 18, 55
  time interval, interaction,      Kurtosis, trades/trading,
    78–81                             200–203, 222
  usage, 125                       Kushner, H.J., 65, 232
Joint ﬁltering (JF), example,      Kushner algorithm, details,
    69–75                             66–67
Jones, C.S., 231                   Kushner ﬁlters, 98
Julier, S.J., 231                  Kushner’s nonlinear ﬁlter, 65–67
Jump-based models,
    non-Gaussianity, 124
Jumps                              Lagnado, R., 232
  component, orthogonality,        Lagrange multiplier, 18, 214
    167                            Lahaie, C.H., 228
  diffusion, 7–10                  Lautier, D., 229, 231
    model, usage, 198              Least-square estimation (LSE)
  introduction, 158–168                approach, 30, 53, 54
  model, 158–160                   Least-square estimator (LSE),
  numeric results, 167                 46, 49
  parameters, 167                  Lee, D.S., 232
  simulation, Srivastava           Leptokurticity, 8
    approach,                      Level-dependent volatility, 7,
    166–167                            10–13
                                   Levenberg-Marquardt (LM)
                                       method, 49
Kalman ﬁlter (KF)                  Leverage
 reapplication, 119                 effect, 8, 22
 usage, 58–59, 86–87, 96, 102       parameter, 22, 26
Kalman gain, interpretation, 59,   Levy, A., 225
    61, 67                         Levy process, 10
Kamal, M., 227                     Lewis, Alan L., 2, 28–29, 34–38,
Kani, I., 14, 227                      232
Karatzas, I., 2, 6, 231            Lewis, K., 226
Kennedy, P., 232                   Li, Y., 232
Kim, S., 232                       Liability maturity, 12
Kirby, C., 228                     Likelihood
Kitagawa, G., 232                   evaluation, 57
Kleinow, T., 230                    ﬁltering, 57
Klopfer, W., 234                    function, 54–57, 129, 132
Koopman, S.J., 234                  maximization, 81, 161
Kou, S., 8, 232                    Line minimization routine, 49
Kouwenberg, R., 229                Linear a posteriori estimate, 60
Krishnamurthy, V., 227             Linear state-space system, 68–69
242                                   INSIDE VOLATILITY ARBITRAGE


Litzenberger, R.H., 14, 226     Mean price error (MPE), 62, 118
Local risk minimization, 27      reduction, 185
Local volatility, 14–19          usage, 179
 instantaneous volatility,      Mean-adjusted stock returns, 57
    contrast, 16–17             Measurement
 stability issues, 18            equation, 87–88
Log-normal process, 2            noise, uncorrelation, 86–87
                                 update equations, 61, 64, 66
Long, D., 226
                                Merton, R.C., 8, 199, 233
Long-term asymptotic example,
                                Metropolis-Hastings (MH)
    34–40
                                   accept/reject
                                   technique, 126–127, 156
Madan, D., 40–41, 215, 226,     Metropolis-Hastings (MH)
    228–229, 232                   algorithm, 144, 147–150
Maes, K., 232                    enhancement, 119–120
Maheu, J.M., 159, 232            example, 150–151
                                Metropolis-Hastings (MH)
Market completeness, 5
                                   density, 149
Markov chain, creation, 144
                                Metropolis-Hastings (MH)
Markov chain Monte Carlo           modiﬁcation, 120
    (MCMC), 144                 Metropolis-Hastings (MH)
 algorithms, distributions         sampling algorithm, 101
    (usage), 151–153            Meyer, R., 233
 approaches, 154                Mezrich, J., 228
 step, addition, 101            MH. See Metropolis-Hastings
Markov process, 100             Miller, M.I., 234
Markov property, usage, 58      Mirror trades, 203
Markowitz, H.M., 232            Mixing solutions, 30–33
Martin, G.M., 229               Models, identiﬁcation,
Martingale, 16                     120–121, 185
Maskell, S., 224                Modiﬁed model, 80
Masoliver, J., 226              Monfort, A., 229
                                Monte Carlo algorithm, 222
Matacz, A., 232
                                Monte Carlo
Matytsin, A., 232
                                   approximation, 102
Maximum likelihood estimate     Monte Carlo method, usage, 50
    (MLE), 18, 68, 88–89        Monte Carlo mixing, 193
 iteration, 82                  Monte Carlo process,
 justiﬁcation, 55–56               obtaining, 23
 shortcomings, 129–131          Monte Carlo sampling,
McCurdy, T.H., 159, 232            usage, 100
Index                                                            243

Monte Carlo simulation, 32–33,      One-dimensional state, 87–94
  98, 169                            joint ﬁlter, inclusion, 76–78
Monte Carlo time steps, 190         One-factor diffusion process, 138
Monte Carlo-based models, 2         One-factor Monte Carlo
Multiple trades, 208–209               technique, 32–33
Muzzioli, S., 233                   Optimization algorithm, 168
Mykland, P.A., 235
                                     weakness, 127–128
                                    Option prices, usage, 49–54
Nadari, F., 226                     Option pricing, cross section,
Nandi, S., 21, 230                     221–223
Neftci, S.N., 233                   Options
Nelson, D.B., 233                    bid-ask spread, 205–206
Ng, V., 224, 228                     maturity, 6
Nicolato, E., 225                    time-to-maturities,
No-default case, 10                    decrease, 208
Noise
                                    Ornstein-Uhlenbeck (OU)
 drift, 167
                                       process, 20
 one-dimensional source, 73
                                    Osher, S., 232
Non-Gaussian case, 213–218
                                    Out-of-the-money (OTM)
Non-Gaussian ﬁlters, 160
Non-Gaussian pure jump               options, 200
   model, 47                         puts/calls, usage, 188, 209
Non-Gaussianity, 179                 region, Black-Scholes value, 38
Nonlinear asymmetric GARCH
   (NGARCH), 22
Nonlinear ﬁlter (NLF), 65,          Pan, G., 233
   103, 121                         Pan, J., 233
Nonlinear Gaussian KF, 161          Papanicolaou, G., 229
Nonlinear PDE, 13                   Parameter estimation, 217. See
Nonlinear transition equation, 60       also Pure jump models
Numeric tests, 50, 183               MLE usage, 81–94
                                       example, 82–83
                                       implementation, alternate,
Observation
                                        86–87
 error, 178–179
 matrix, 83–84, 87                  Parameter learning, 67–81,
 noise, 75                              125–127
Oksendal, B., 2, 233                 example, 68–69
One-dimensional EKF/UKF, 96         Parametric SV, 20
One-dimensional Heston model,       Paras, A., 225
   114–115                          Parkinson, M., 3, 233
244                                       INSIDE VOLATILITY ARBITRAGE


Partial differential equation       Pure jump models, 40–45,
     (PDE). See                        168–184, 215
     Black-Scholes PDE;              algorithms, usage, 170–172
     Nonlinear                       diagnostics, 178–179
     PDE; Two-factor PDE             ﬁltering algorithm, usage,
  pricing, stochastic volatility       169–170
     (impact), 24–27                 numeric results, 176–178
  risk-neutral version, 2            parameter estimation, 170
Particle ﬁlter (PF)
  algorithm, writing, 169–170
  implementation, 160               Quenez, M.C., 27, 228
Particle ﬁltering, 98–120
  algorithm, application,           Rafailidis, A., 230, 231
     121–122                        Randall, C., 234
  application. See Heston           Rasmussen, H.O., 230
     space-state model              Regression analysis, 153
  error size, 116–119               Reif, K., 233
  example, 104–105                  Rejection probability, 149
  implementation, 103–104           Renault, E., 229, 233
  resampling, 101–103               Resampling algorithm, 101
  test results, 114–116             Residuals, 62
  theory, 99–101, 117               Reverse Black-Scholes equation,
Pearson kurtosis, 22                    solving, 7
Pedersen, A.R., 233                 Reversibility condition, 149–150
Penny stocks, skew, 209             Ribiero, C., 233
Perelló, J., 226                    Richardson, S., 229
Peso theory, 197–199                Ridge property, 36
  background, 197–198               Risk, market price, 25
  numeric results, 199              Riskless arbitrage, 6
Pham, H., 233                       Risk-neutral GARCH system, 26
Phantom proﬁts, creation, 19        Risk-neutral implied
Pitt, M.K., 233                         parameter, 190
Poisson jumps, 159                  Risk-neutral parameters, 215
Poisson process, 8–9                Risk-neutral pricing formula. See
Poisson random variable, 9              Black-Scholes risk-neutral
Polson, N.G., 159, 228, 231             pricing formula
Powell algorithm, application, 50   Ritchken, P., 234
Press, W.H., 31, 50, 233            Robustness, issues. See
Prucyk, B., 234                         Consistency test; Time-series
Pure diffusion, 7–9                     method
  parameter, 199                    Rochet, J.C., 229
Index                                                            245

Rogers, L.C.G., 230                  trades, 189, 200
Romano, M., 32, 234                    example, 203–208
Romano-Touzi approach, 30–32       Smith, A.F.M., 225, 229, 234
Root mean square error (RMSE),     Sondermann, D., 228
   62, 118                         Spiegelhalter, D.J., 229
 reduction, 185                    Spot prices, observation, 183
 usage, 179                        Spread. See Options bid-ask
Ross, S., 227                          spread
Rossi, P.E., 231                   Square root model, optimization
Rubinstein, M., 198, 227,              constraints, 85–86
   231, 234                        Square root SDE, 184
Rudd, A., 231                      Square root SV model, 37, 69–70
Ruiz, E., 135, 230                 Srivastava, A., 166, 234
                                   Srivastava approach. See Jumps
                                   Stability issues. See Local
Salmond, D.J., 229                     volatility
Samperi, D., 224                   Stahl, G., 230
Sample impoverishment, 119         Standard & Poor’s (S&P), 208
Samuelson, P. A., 2, 234             options, 189, 198
Sandmann, G., 234                    S&P 500, 204, 216–218
Santa-Clara, P., 226                 Stock Index, 4
Scholes, M., 225                   Stein, E.M., 234
Schonbucher, P.J., 234             Stein, J., 234
Scott, L.O., 234                   Stochastic differential equation
Self-ﬁnancing portfolio                (SDE), 197–198, 221
    argument, usage, 214–215       Stochastic volatility (SV), 20–24
Sequential importance                behavior, 24
    sampling, 100                    example, 35–37, 83–85
Shephard, N., 135, 225, 226,         formulation, 76
    228, 232, 233                    impact. See Partial differential
Shimko, D., 234                        equation
Shreve, S., 6, 21, 231, 234          problem, 78–79
Signal-to-noise ratio (SNR), 138     processes, 20–21
Silva, A.C., 234                     time-changed processes,
Simple Kalman ﬁlter, 59–62             contrast, 42–43
Sin, C.A., 234                     Stochastic volatility (SV) models,
Single calibration (SC)                94, 136
    methodology                      embedded parameters,
    assumption, 19                     inference (problem), 48
Sircar, K., 229                      Heston state-space model,
Skewness                               comparison, 121–122
  kurtosis, contrast, 201–202        parameters, 196
246                                     INSIDE VOLATILITY ARBITRAGE


Stock forward price, 17           Toft, K.B., 234
Stock log return density, 40      Torricelli, C., 233
Stock market, 2–4                 Touzi, N., 32, 233, 234
Stock prices                      Trading strategies, 199–213
  movement, log-normal             replication, 202–203
    model, 5                      Transform. See Generalized
  process, 2–3                        Fourier transform
  stochastic differential
                                   special cases, 28–30
    equation, 159
                                   technique, 27–28
  time series, 176
  usage, 54                       Transition noise, 140
Stock process, noise              Trevor, R., 234
    (representation), 133–135     Trinomial tree, usage, 17
Storvik, G., 234                  Tullie, T.A., 229
Strike prices, 6, 187             Two-factor Monte Carlo
Stroud, J., 159, 231                  simulation,
Student’s law of mean, 155            application, 26
Su, T., 227                       Two-factor PDE, 26–27
Suli, E., 231
Sundaram, R.K., 227
Suo, W., 231                      Uhlmann, J.K., 231
Super-replication, 27             Uncertain volatility, concept, 20
SV. See Stochastic volatility     Univariate regression, 153
                                  Unscented Kalman ﬁlter (UKF),
                                     62–65, 88, 161–162
Taksar, M., 230                    algorithm, 66
Taleb, N., 234
                                   application, 172–173
Tauchen, G., 229
                                   implementation, 77
Tavella, D., 234
Taylor approximation, usage,      Unscented particle ﬁlter (UPF),
    35–36                            102, 161–166
Taylor expansion, usage, 36
Teukolsky, S.A., 233              Van der Merwe, R., 115, 235
Time series, 116, 220–221
                                  Van der Sluis, P.J., 231
 usage, 48
                                  Varadhan, S.R.S., 235
Time update equations, 61–65
                                  Variance equation, writing, 7
Time-independent parameters, 33
Time-series implied               Variance gamma (VG), 40–43
    parameters, 190                characteristic function, 44–45
Time-series method, robustness     model, 168–169
    issues, 193–194                parameters, 178
Time-series results, 193–194       usage, 182
Index                                                               247

Variance gamma with gamma               parameter, 192, 194
    arrival rate (VGG), 45,             series expansion, 37–40
    158, 166                            series method, 191
 usage, 181–183                        Vorst, T., 229
Variance gamma with stochastic
    arrival (VGSA), 43–45,             Wan, E.A., 115, 235
    169, 215                           Wang, D., 231
 Bayesian approach, 184                Webber, N., 233
 EPF application, 173–176              Weights, 160–162
 model, 168                             calculation, 171–172, 182
 option pricing, 44                     normalization, 170
 VG, contrast, 215–216                 Welch, G., 235
Variograms, 96–98                      Wells, C., 235
 usage, 181                            Whaley, R.E., 189, 228
Vetterling, W.T., 233                  White, A., 30, 231
Volatility. See Historic volatility;   Whitt, W., 235
    Level-dependent volatility;        Wiggins, J.B., 235
    Local volatility;                  Wilmott, P., 7, 231, 235
    Stochastic volatility              Wright, J., 229
 clustering effect, 43                 Wu, L., 226
 curve, 200
 dependence, discovery, 11             Xiong, K., 231
 drift, 25
   parameters, 213
 perception, 7                         Yakovenko, V.M., 158, 228, 234
 problem, 1                            Yao, Q., 228
 risk, market price, 25–26, 47         Yaz, A., 233
 term structure. See Implied           You, M., 226, 229
    volatility term structure
 usage, 2                              Zellner, A., 235
 value, 3                              Zero-coupon risky bond, 10
Volatility-of-volatility, 202.         Zhang, L., 235
    See also High                      Zhou, C., 235
    volatility-of-volatility           Zou, J., 227


